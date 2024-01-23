import { ParserRuleContext } from 'antlr4ts';
import { EntityContextType } from './basic-parser-types';
import { WordPosition, TextPosition } from './textAndWord';
import { ctxToText, ctxToWord } from './textAndWord';
import SimpleStack from './simpleStack';

export enum StmtContextType {
    /** A self-contained and complete statement */
    COMMON_STMT = 'commonStmt',
    CREATE_TABLE_STMT = 'createTableStmt',
    CREATE_VIEW_STMT = 'createViewStmt',
    SELECT_STMT = 'selectStmt',
    INSERT_STMT = 'insertStmt',
}

export interface StmtContext {
    readonly stmtContextType: StmtContextType;
    readonly position: TextPosition;
    readonly rootStmt?: StmtContext | null;
    readonly parentStmt?: StmtContext | null;
}

export function toStmtContext(
    ctx: ParserRuleContext,
    type: StmtContextType,
    input: string,
    rootStmt: StmtContext | null,
    parentStmt: StmtContext | null
): StmtContext {
    const { text: _, ...position } = ctxToText(ctx, input);
    return {
        stmtContextType: type,
        position,
        rootStmt: rootStmt ?? null,
        parentStmt: parentStmt ?? null,
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
    relatedEntities?: EntityContext[];
    columns?: EntityContext[];
}

export function toEntityContext(
    ctx: ParserRuleContext,
    type: EntityContextType,
    input: string,
    belongStmt: StmtContext,
    alias?: BaseAliasContext
): EntityContext {
    const { text, ...position } = ctxToWord(ctx, input);
    const finalAlias = Object.assign({}, baseAlias, alias ?? {});
    return {
        entityContextType: type,
        text,
        position,
        belongStmt,
        ...finalAlias,
    };
}

abstract class EntityCollector {
    constructor(input: string) {
        this._input = input;
        this._results = new Set();
        this._stmtStack = new SimpleStack();
        this._entityStack = new SimpleStack();
        this._rootStmt = null;
    }
    private readonly _input: string;
    private readonly _results: Set<EntityContext>;
    /** Staging statements that have already entered. */
    private readonly _stmtStack: SimpleStack<StmtContext>;
    /** Staging entities inside a single statement or clause. */
    private readonly _entityStack: SimpleStack<EntityContext>;
    /**
     * Always point to the first non-commonStmt at the bottom of the _stmtStack,
     * unless there are only commonStmts in the _stmtStack.
     * */
    private _rootStmt: StmtContext;

    get results() {
        return Array.from(this._results);
    }

    enterProgram() {
        this._results.clear();
        this._stmtStack.clear();
        this._entityStack.clear();
        this._rootStmt = null;
    }

    protected pushStmt(ctx: ParserRuleContext, type: StmtContextType) {
        const stmtContext = toStmtContext(
            ctx,
            type,
            this._input,
            this._rootStmt,
            this._stmtStack.peek()
        );
        if (
            this._stmtStack.isEmpty() ||
            this._stmtStack.peek()?.stmtContextType === StmtContextType.COMMON_STMT
        ) {
            this._rootStmt = stmtContext;
        }
        this._stmtStack.push(stmtContext);

        return stmtContext;
    }

    protected popStmt() {
        const stmtContext = this._stmtStack.pop();
        if (this._rootStmt === stmtContext) {
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
        if (this._stmtStack.isEmpty()) {
            this._results.add(entityContext);
        } else {
            // If is inside a statement
            this._entityStack.push(entityContext);
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

        let tmpResults = entitiesInsideStmt;

        if (stmtContext.stmtContextType === StmtContextType.CREATE_TABLE_STMT) {
            tmpResults = this.combineRootStmtEntities(stmtContext, entitiesInsideStmt);
        }

        while (tmpResults.length) {
            this._results.add(tmpResults.shift());
        }
    }

    /**
     * Aggregate all entities under a rootStmt.
     */
    protected abstract combineRootStmtEntities(
        stmtContext: StmtContext,
        entitiesInsideStmt: EntityContext[]
    ): EntityContext[];
}

export default EntityCollector;
