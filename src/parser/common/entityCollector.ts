import { ParserRuleContext, Token } from 'antlr4ng';

import { SimpleStack } from './simpleStack';
import { ctxToText, ctxToWord, TextPosition, tokenToWord, WordPosition } from './textAndWord';
import { EntityContextType } from './types';

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
/**
 * @key comment 实体的comment统一同comment命名
 * @key colType 实体中字段多一个type属性，如果直接用type命名，很容易在编译中重名，前后都会被加上下划线，所以用colType命名
 * */
export enum attrName {
    comment = '_comment',
    colType = '_colType',
}

export const attrNameInRule = {
    [attrName.comment]: 'comment',
    [attrName.colType]: 'colType',
} as const;

type ParserRuleContextWithAttr = ParserRuleContext & {
    [k in attrName]?: Token;
};
export interface EntityContext extends BaseAliasContext {
    readonly entityContextType: EntityContextType;
    readonly text: string;
    readonly position: WordPosition;
    readonly belongStmt: StmtContext;
    relatedEntities: EntityContext[] | null;
    columns: ColumnEntityContext[] | null;
    comment?: string;
}

export interface FuncEntityContext extends EntityContext {
    argMode?: string;
    argName?: string;
    argType?: string;
}
export interface ColumnEntityContext extends EntityContext {
    colType?: string;
    comment?: string;
}

interface attrInfo {
    needCollectAttr: boolean;
    attrList: attrName[];
    endContext: string;
}

export function toEntityContext(
    ctx: ParserRuleContext,
    type: EntityContextType,
    input: string,
    belongStmt: StmtContext,
    attrInfo?: attrInfo,
    alias?: BaseAliasContext
): EntityContext | FuncEntityContext | ColumnEntityContext | null {
    const word = ctxToWord(ctx, input);
    if (!word) return null;
    const { text, ...position } = word;
    const finalAlias = Object.assign({}, baseAlias, alias ?? {});
    const extraInfo: ColumnEntityContext = {
        entityContextType: type,
        text,
        position,
        belongStmt,
        relatedEntities: null,
        columns: null,
        ...finalAlias,
    };
    if (attrInfo?.needCollectAttr) {
        for (let k = 0; k < attrInfo?.attrList?.length; k++) {
            const attributeName: attrName = attrInfo?.attrList[k];
            const attrToken = findAttribute(ctx, attributeName, attrInfo?.endContext);
            if (attrToken) {
                const attrVal: string = tokenToWord(attrToken, input)?.text;
                extraInfo[attrNameInRule[attributeName]] = attrVal;
            }
        }
    }
    return extraInfo;
}

export function findAttribute(
    ctx: ParserRuleContextWithAttr | null,
    keyName: attrName,
    endContextName: string
): Token | null {
    const parent: ParserRuleContextWithAttr | null = ctx?.parent || null;
    let attrVal: Token | null = null;
    if (parent?.[keyName]) {
        attrVal = parent?.[keyName] || null;
        return attrVal;
    } else {
        if (parent?.constructor?.name !== endContextName) {
            attrVal = findAttribute(parent, keyName, endContextName);
        }
        if (!attrVal) {
            if (parent?.children) {
                attrVal = findAttributeChildren(parent, keyName);
            }
        }
    }
    return attrVal;
}

function findAttributeChildren(
    ctx: ParserRuleContextWithAttr | null,
    keyName: attrName
): Token | null {
    const visitChildren = ctx?.children || [];
    let attrVal: Token | null = null;
    if (visitChildren.length) {
        for (let i = 0; i < visitChildren.length; i++) {
            const child = <ParserRuleContextWithAttr | null>visitChildren[i] || null;
            if (child?.[keyName]) {
                attrVal = child?.[keyName] || null;
                return attrVal;
            } else {
                attrVal = findAttributeChildren(child, keyName);
            }
        }
    }
    return attrVal;
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
        attrInfo?: attrInfo,
        alias?: BaseAliasContext
    ) {
        const entityContext = toEntityContext(
            ctx,
            type,
            this._input,
            this._stmtStack.peek(),
            attrInfo,
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
