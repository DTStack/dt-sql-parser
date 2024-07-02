import { ParserRuleContext, Token } from 'antlr4ng';

import { SimpleStack } from './simpleStack';
import { ctxToText, TextPosition, tokenToWord, WordPosition, WordRange } from './textAndWord';
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

/**
 * @key comment entity's comment attribute
 * @key colType column entity's type attribute
 * */
export enum AttrName {
    comment = '_comment',
    colType = '_colType',
    alias = '_alias',
}
type ParserRuleContextWithAttr = ParserRuleContext & {
    [K in AttrName]?: Token;
};

export interface Argument {
    argMode?: WordRange;
    argName?: WordRange;
    argType: WordRange;
}
export interface BaseEntityContext {
    readonly entityContextType: EntityContextType;
    readonly text: string;
    readonly position: WordPosition;
    readonly belongStmt: StmtContext;
    readonly isAlias: boolean; // is alias entity
    reference?: string | EntityContext | null; // reference entity
    [AttrName.comment]?: WordRange | null;
    [AttrName.alias]?: WordRange | null; // alias token
}

export interface NormalEntityContext extends BaseEntityContext {
    relatedEntities: NormalEntityContext[] | null;
    columns: ColumnEntityContext[] | null;
}

export interface ColumnEntityContext extends BaseEntityContext {
    [AttrName.colType]?: WordRange | null;
}

export interface FuncEntityContext extends BaseEntityContext {
    relatedEntities: NormalEntityContext[] | null;
    arguments?: Argument[] | null; // function arguments
    returns?: Argument[] | null; // function return value
}

export type EntityContext = NormalEntityContext | FuncEntityContext | ColumnEntityContext;

const baseEntity = {
    isAlias: false,
    reference: null,
    [AttrName.alias]: null,
    [AttrName.comment]: null,
};
export function setInitAttributes(arg: BaseEntityContext): EntityContext {
    const entity: EntityContext = {
        ...arg,
    };
    if (
        arg.entityContextType === EntityContextType.FUNCTION ||
        arg.entityContextType === EntityContextType.FUNCTION_CREATE
    ) {
        (entity as FuncEntityContext).relatedEntities = null;
        (entity as FuncEntityContext).arguments = null;
        (entity as FuncEntityContext).returns = null;
    } else if (
        arg.entityContextType === EntityContextType.COLUMN ||
        arg.entityContextType === EntityContextType.COLUMN_CREATE
    ) {
        (entity as ColumnEntityContext)[AttrName.colType] = null;
    } else {
        (entity as NormalEntityContext).relatedEntities = null;
        (entity as NormalEntityContext).columns = null;
    }
    return entity;
}
export function isNormalEntityContext(value: EntityContext): value is NormalEntityContext {
    return 'columns' in value && 'relatedEntities' in value;
}

export function isFuncEntityContext(value: EntityContext): value is FuncEntityContext {
    return 'params' in value && 'returns' in value && 'relatedEntities' in value;
}

export function isColumnEntityContext(value: EntityContext): value is ColumnEntityContext {
    return AttrName.colType in value;
}
interface AttrInfo {
    attrList: AttrName[];
    endContext: string;
}

export function toEntityContext(
    ctx: ParserRuleContext,
    type: EntityContextType,
    input: string,
    belongStmt: StmtContext,
    attrInfo?: AttrInfo
): EntityContext | null {
    const word = ctxToText(ctx, input);
    if (!word) return null;
    const { text, startLine, endLine, ...rest } = word;
    const position = {
        ...rest,
        line: startLine,
    };
    let extraInfo = setInitAttributes({
        ...baseEntity,
        entityContextType: type,
        text,
        position,
        belongStmt,
    });
    if (attrInfo) {
        for (let k = 0; k < attrInfo?.attrList?.length; k++) {
            const attributeName: AttrName = attrInfo?.attrList[k];
            const attrToken = findAttribute(ctx, attributeName, attrInfo?.endContext);
            if (attrToken) {
                const attrVal: WordRange = tokenToWord(attrToken, input);
                extraInfo = Object.assign(extraInfo, {
                    [attributeName]: attrVal,
                });
            }
        }
    }
    return extraInfo;
}

export function findAttribute(
    ctx: ParserRuleContextWithAttr | null,
    keyName: AttrName,
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
    keyName: AttrName
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
        return Array.from(this._entitiesSet) as EntityContext[];
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

    protected pushEntity(ctx: ParserRuleContext, type: EntityContextType, attrInfo?: AttrInfo) {
        const entityContext = toEntityContext(
            ctx,
            type,
            this._input,
            this._stmtStack.peek(),
            attrInfo
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
            if (isNormalEntityContext(mainEntity)) {
                mainEntity = Object.assign(mainEntity, {
                    columns,
                });
            }
        }

        if (mainEntity && relatedEntities.length) {
            if (isNormalEntityContext(mainEntity) || isFuncEntityContext(mainEntity)) {
                mainEntity = Object.assign(mainEntity, {
                    relatedEntities,
                });
            }
        }

        return finalEntities;
    }
}
