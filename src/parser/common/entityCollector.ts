import { ParserRuleContext } from 'antlr4ng';
import { EntityContextType } from './types';
import { WordPosition, TextPosition } from './textAndWord';
import { ctxToText, ctxToWord } from './textAndWord';
import { SimpleStack } from './simpleStack';

/**
 * TODO: more stmt type should be supported.
 */
export enum StmtContextType {
    /** A self-contained and complete statement */
    COMMON_STMT = 'commonStmt',
    CREATE_CATALOG_STMT = 'createCatalogStmt',
    CREATE_DATABASE_STMT = 'createDatabaseStmt',
    CREATE_TABLE_STMT = 'createTableStmt',
    CREATE_VIEW_STMT = 'createViewStmt',
    SELECT_STMT = 'selectStmt',
    INSERT_STMT = 'insertStmt',
    CREATE_FUNCTION_STMT = 'createFunctionStmt',
}

export interface StmtContext {
    readonly stmtContextType: StmtContextType;
    readonly position: TextPosition;
    readonly rootStmt: StmtContext | null;
    readonly parentStmt: StmtContext | null;
    readonly isContainCaret?: boolean;
}

export function toStmtContext(
    ctx: ParserRuleContext,
    type: StmtContextType,
    input: string,
    rootStmt: StmtContext | null,
    parentStmt: StmtContext | null,
    isContainCaret?: boolean
): StmtContext | null {
    const text = ctxToText(ctx, input);
    if (!text) return null;
    const { text: _, ...position } = text;
    return {
        stmtContextType: type,
        position,
        rootStmt: rootStmt ?? null,
        parentStmt: parentStmt ?? null,
        isContainCaret,
    };
}

export interface BaseAliasContext {
    readonly isAlias: boolean;
    alias?: string | EntityContext | null;
    origin?: string | EntityContext | StmtContext | null;
}

const baseAlias: BaseAliasContext = {
    isAlias: false,
    origin: null,
    alias: null,
};

export interface EntityContext extends BaseAliasContext {
    readonly entityContextType: EntityContextType;
    readonly text: string;
    readonly position: WordPosition;
    readonly belongStmt: StmtContext;
    relatedEntities: EntityContext[] | null;
    columns: EntityContext[] | null;
}

export function toEntityContext(
    ctx: ParserRuleContext,
    type: EntityContextType,
    input: string,
    belongStmt: StmtContext,
    alias?: BaseAliasContext
): EntityContext | null {
    const word = ctxToWord(ctx, input);
    if (!word) return null;
    const { text, ...position } = word;
    const finalAlias = Object.assign({}, baseAlias, alias ?? {});
    return {
        entityContextType: type,
        text,
        position,
        belongStmt,
        relatedEntities: null,
        columns: null,
        ...finalAlias,
    };
}

/**
 * @todo: Handle alias, includes column alias, table alias, query as alias and so on.
 * @todo: [may be need] Combine the entities in each clause.
 */
export abstract class EntityCollector {
    constructor(input: string, caretTokenIndex?: number) {
        this._input = input;
        this._caretTokenIndex = caretTokenIndex ?? -1;
        this._entitiesSet = new Set();
        this._stmtStack = new SimpleStack();
        this._entityStack = new SimpleStack();
        this._rootStmt = null;
    }
    private readonly _input: string;
    private readonly _caretTokenIndex: number;
    private readonly _entitiesSet: Set<EntityContext>;
    /** Staging statements that have already entered. */
    private readonly _stmtStack: SimpleStack<StmtContext>;
    /** Staging entities inside a single statement or clause. */
    private readonly _entityStack: SimpleStack<EntityContext>;
    /**
     * Always point to the first non-commonStmt at the bottom of the _stmtStack,
     * unless there are only commonStmts in the _stmtStack.
     * */
    private _rootStmt: StmtContext | null;

    visitTerminal() {}

    visitErrorNode() {}

    enterEveryRule() {}

    exitEveryRule() {}

    getEntities() {
        return Array.from(this._entitiesSet);
    }

    enterProgram() {
        this._entitiesSet.clear();
        this._stmtStack.clear();
        this._entityStack.clear();
        this._rootStmt = null;
    }

    protected pushStmt(ctx: ParserRuleContext, type: StmtContextType) {
        let isContainCaret: boolean | undefined;
        if (this._caretTokenIndex >= 0) {
            isContainCaret =
                !!ctx.start &&
                !!ctx.stop &&
                ctx.start.tokenIndex <= this._caretTokenIndex &&
                ctx.stop.tokenIndex >= this._caretTokenIndex;
        }
        const stmtContext = toStmtContext(
            ctx,
            type,
            this._input,
            this._rootStmt,
            this._stmtStack.peek(),
            isContainCaret
        );
        if (stmtContext) {
            if (
                this._stmtStack.isEmpty() ||
                this._stmtStack.peek()?.stmtContextType === StmtContextType.COMMON_STMT
            ) {
                this._rootStmt = stmtContext;
            }
            this._stmtStack.push(stmtContext);
        }

        return stmtContext;
    }

    protected popStmt() {
        const stmtContext = this._stmtStack.pop();
        if (stmtContext && this._rootStmt === stmtContext) {
            this._rootStmt = this._stmtStack.peek();
            if (!this._entityStack.isEmpty()) {
                this.combineEntitiesAndAdd(stmtContext);
            }
        }
        return stmtContext;
    }

    protected pushEntity(
        ctx: ParserRuleContext,
        type: EntityContextType,
        alias?: BaseAliasContext
    ) {
        const entityContext = toEntityContext(
            ctx,
            type,
            this._input,
            this._stmtStack.peek(),
            alias
        );
        if (entityContext) {
            if (this._stmtStack.isEmpty()) {
                this._entitiesSet.add(entityContext);
            } else {
                // If is inside a statement
                this._entityStack.push(entityContext);
            }
        }
        return entityContext;
    }

    /**
     * Combine entities that inside a single statement.
     * e.g. combine tableName and column if they are inside a same createTableStatement.
     * Then add combined entities into result.
     */
    private combineEntitiesAndAdd(stmtContext: StmtContext) {
        const entitiesInsideStmt: EntityContext[] = [];
        while (
            !this._entityStack.isEmpty() &&
            (this._entityStack.peek().belongStmt === stmtContext ||
                this._entityStack.peek().belongStmt.rootStmt === stmtContext)
        ) {
            entitiesInsideStmt.unshift(this._entityStack.pop());
        }

        const combinedEntities = this.combineRootStmtEntities(stmtContext, entitiesInsideStmt);

        while (combinedEntities.length) {
            const entity = combinedEntities.shift();
            entity && this._entitiesSet.add(entity);
        }
    }

    /**
     * Combined all entities under a rootStmt.
     */
    protected combineRootStmtEntities(
        stmtContext: StmtContext,
        entitiesInsideStmt: EntityContext[]
    ): EntityContext[] {
        if (
            stmtContext.stmtContextType === StmtContextType.CREATE_VIEW_STMT ||
            stmtContext.stmtContextType === StmtContextType.CREATE_TABLE_STMT
        ) {
            return this.combineCreateTableOrViewStmtEntities(stmtContext, entitiesInsideStmt);
        }
        return entitiesInsideStmt;
    }

    protected combineCreateTableOrViewStmtEntities(
        stmtContext: StmtContext,
        entitiesInsideStmt: EntityContext[]
    ): EntityContext[] {
        const columns: EntityContext[] = [];
        const relatedEntities: EntityContext[] = [];
        let mainEntity: EntityContext | null = null;
        const finalEntities = entitiesInsideStmt.reduce((result, entity) => {
            if (entity.belongStmt !== stmtContext) {
                if (
                    entity.entityContextType !== EntityContextType.COLUMN &&
                    entity.entityContextType !== EntityContextType.COLUMN_CREATE
                ) {
                    relatedEntities.push(entity);
                    result.push(entity);
                }
                return result;
            }

            if (entity.entityContextType === EntityContextType.COLUMN_CREATE) {
                columns.push(entity);
            } else if (
                entity.entityContextType === EntityContextType.TABLE_CREATE ||
                entity.entityContextType === EntityContextType.VIEW_CREATE
            ) {
                mainEntity = entity;
                result.push(entity);
                return result;
            } else if (entity.entityContextType !== EntityContextType.COLUMN) {
                relatedEntities.push(entity);
                result.push(entity);
            }
            return result;
        }, [] as EntityContext[]);

        if (mainEntity && columns.length) {
            (mainEntity as EntityContext).columns = columns;
        }

        if (mainEntity && relatedEntities.length) {
            (mainEntity as EntityContext).relatedEntities = relatedEntities;
        }

        return finalEntities;
    }
}
