import { isToken, ParserRuleContext, Token } from 'antlr4ng';

import { SimpleStack } from './simpleStack';
import {
    ctxToText,
    isWordRange,
    TextPosition,
    TextSlice,
    tokenToWord,
    WordPosition,
    WordRange,
} from './textAndWord';
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
    ALTER_TABLE_STMT = 'alterTableStmt',
}

export interface StmtContext {
    readonly stmtContextType: StmtContextType;
    readonly position: TextPosition;
    readonly rootStmt: StmtContext | null;
    readonly parentStmt: StmtContext | null;
    readonly isContainCaret?: boolean;
    readonly scopeDepth: number;
    readonly _ctx: ParserRuleContext;
    readonly text: string;
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
    const { text: stmtText, ...position } = text;
    return {
        stmtContextType: type,
        position,
        rootStmt: rootStmt ?? null,
        parentStmt: parentStmt ?? null,
        isContainCaret,
        text: stmtText,
        scopeDepth: type === StmtContextType.COMMON_STMT ? 0 : (parentStmt?.scopeDepth ?? 0) + 1,
        _ctx: ctx,
    };
}

/**
 * entity's attribute
 * @key comment: entity's comment attribute
 * @key colType: column entity's type attribute
 * @key alias: entity's alias attribute
 * */
export enum AttrName {
    comment = '_comment',
    colType = '_colType',
    alias = '_alias',
}
/**
 * ParserRuleContext with custom attributes
 * */
type ParserRuleContextWithAttr = ParserRuleContext & {
    [K in AttrName]?: Token;
};

/**
 * Function's arguments
 * */
export interface Argument {
    argMode?: WordRange;
    argName?: WordRange;
    argType: WordRange;
}
/**
 * Base interface for all entity contexts in SQL parsing
 */
export interface BaseEntityContext {
    /** The type of entity context */
    readonly entityContextType: EntityContextType;
    /** The text representation of this entity */
    readonly text: string;
    /** The position information for this entity */
    readonly position: WordPosition;
    /** The statement this entity belongs to */
    readonly belongStmt: StmtContext;
    /** Reference to another entity or string */
    reference?: string | EntityContext;
    /** Whether the entity is accessible from the caret position */
    isAccessible: boolean;
    /** Entities related to this entity */
    relatedEntities: EntityContext[] | null;
    /** The parser rule context for this entity, it will be deleted after the entity is collected because of json serialization */
    _ctx?: ParserRuleContext;
    /** Comment attribute for this entity */
    [AttrName.comment]: WordRange | null;
    /** Alias attribute for this entity */
    [AttrName.alias]?: WordRange | null;
}

/**
 * Types of column declarations
 */
export enum ColumnDeclareType {
    /** Literal column name */
    COMMON,
    /** Using asterisk syntax (tableName.*) */
    ALL,
    /** Complex expressions like subqueries, case statements, function calls */
    EXPRESSION,
}

/**
 * Types of table declarations
 */
export enum TableDeclareType {
    /** Regular table reference */
    COMMON,
    /** Table defined by expression (e.g., subquery) */
    EXPRESSION,
}

export interface CommonEntityContext extends BaseEntityContext {
    /** Columns associated with this entity */
    columns?: ColumnEntityContext[];
    /** Type of table declaration */
    declareType?: TableDeclareType;
}

export interface ColumnEntityContext extends BaseEntityContext {
    /** Type of column declaration */
    declareType?: ColumnDeclareType;
    /** Column type information */
    [AttrName.colType]: WordRange | null;
    /** Column alias */
    [AttrName.alias]?: WordRange | null;
}

export interface FuncEntityContext extends BaseEntityContext {
    /** Function arguments */
    arguments: Argument[] | null;
    /** Function return value */
    returns?: Argument;
}

export type EntityContext = CommonEntityContext | FuncEntityContext | ColumnEntityContext;

export function isCommonEntityContext(entity: EntityContext): entity is CommonEntityContext {
    if (!entity) return false;
    return !isFuncEntityContext(entity) && !isColumnEntityContext(entity);
}

export function isFuncEntityContext(entity: EntityContext): entity is FuncEntityContext {
    if (!entity) return false;
    return [EntityContextType.FUNCTION, EntityContextType.FUNCTION_CREATE].includes(
        entity.entityContextType
    );
}

export function isColumnEntityContext(entity: EntityContext): entity is ColumnEntityContext {
    if (!entity) return false;
    return [EntityContextType.COLUMN, EntityContextType.COLUMN_CREATE].includes(
        entity.entityContextType
    );
}

/**
 * Check if ctx is a child node of a specific rule type
 */
export function isChildContextOf(ctx: ParserRuleContext, parentRuleIndex: number): boolean {
    let parentCtx = ctx.parent;
    while (parentCtx) {
        if (parentCtx.ruleIndex === parentRuleIndex) return true;
        parentCtx = parentCtx.parent;
    }
    return false;
}

/**
 *  what we need when collect attribute information
 * */
interface AttrInfo {
    attrName: AttrName;
    endContextList: string[];
}

interface MetaInfo {
    declareType: TableDeclareType | ColumnDeclareType;
}

export function toEntityContext(
    ctx: ParserRuleContext,
    type: EntityContextType,
    input: string,
    belongStmt: StmtContext,
    attrInfo?: AttrInfo[],
    metaInfo?: MetaInfo
): EntityContext | null {
    const word = ctxToText(ctx, input);
    if (!word) return null;
    const { text, startLine, endLine, ...rest } = word;
    const position = {
        ...rest,
        line: startLine,
    };
    let entityInfo = <EntityContext>{
        entityContextType: type,
        text,
        position,
        belongStmt,
        declareType: metaInfo?.declareType,
        _ctx: ctx,
        [AttrName.comment]: null,
    };
    switch (entityInfo.entityContextType) {
        case EntityContextType.FUNCTION:
        case EntityContextType.FUNCTION_CREATE: {
            (entityInfo as FuncEntityContext).relatedEntities = null;
            (entityInfo as FuncEntityContext).arguments = null;
            break;
        }
        case EntityContextType.COLUMN:
        case EntityContextType.COLUMN_CREATE:
            (entityInfo as ColumnEntityContext)[AttrName.colType] = null;
            break;
        default:
            (entityInfo as CommonEntityContext).relatedEntities = null;
            break;
    }
    if (attrInfo) {
        for (let k = 0; k < attrInfo.length; k++) {
            const attributeName: AttrName = attrInfo[k]?.attrName;
            const attrToken = findAttribute(ctx, attributeName, attrInfo[k]?.endContextList);
            if (attrToken) {
                const attrVal: WordRange | TextSlice | null = isToken(attrToken)
                    ? tokenToWord(attrToken, input)
                    : ctxToText(attrToken, input);
                if (attrVal) {
                    if (isWordRange(attrVal)) {
                        entityInfo = Object.assign(entityInfo, {
                            [attributeName]: attrVal,
                        });
                    } else {
                        const { startIndex, endIndex, startColumn, endColumn, text, ...rest } =
                            attrVal;
                        entityInfo = Object.assign(entityInfo, {
                            [attributeName]: {
                                startIndex,
                                endIndex,
                                startColumn,
                                endColumn,
                                text,
                                line: rest?.startLine,
                            },
                        });
                    }
                }
            }
        }
    }
    return entityInfo;
}

export function findAttribute(
    ctx: ParserRuleContextWithAttr | null,
    keyName: AttrName,
    endContextNameList: string[]
): Token | null {
    const parent: ParserRuleContextWithAttr | null = ctx?.parent || null;
    let attrVal: Token | null = null;
    if (parent?.[keyName]) {
        attrVal = parent?.[keyName] || null;
        return attrVal;
    } else {
        if (parent?.constructor?.name && !endContextNameList.includes(parent?.constructor?.name)) {
            attrVal = findAttribute(parent, keyName, endContextNameList);
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
 * Check if an entity is contained within the range entity's context
 * @param entity - The entity to check if it's contained
 * @param rangeEntity - The entity that defines the containing range
 * @returns true if entity is contained within rangeEntity's range
 */
function isEntityInScope(entity: EntityContext, rangeEntity: EntityContext): boolean {
    const entityStart = entity._ctx?.start?.tokenIndex;
    const entityStop = entity._ctx?.stop?.tokenIndex;
    const rangeStart = rangeEntity._ctx?.start?.tokenIndex;
    const rangeStop = rangeEntity._ctx?.stop?.tokenIndex;

    return (
        entityStart != null &&
        entityStop != null &&
        rangeStart != null &&
        rangeStop != null &&
        rangeStart <= entityStart &&
        rangeStop >= entityStop
    );
}

/**
 * @todo: Handle alias, includes column alias, table alias, query as alias and so on.
 * @todo: [may be need] Combine the entities in each clause.
 */
export abstract class EntityCollector {
    constructor(input: string, allTokens?: Token[], caretTokenIndex?: number) {
        this._input = input;
        this._allTokens = allTokens || [];
        this._caretTokenIndex = caretTokenIndex ?? -1;
        this._entitiesSet = new Set();
        this._stmtStack = new SimpleStack();
        this._entityStack = new SimpleStack();
        this._rootStmt = null;
        this._caretStmtScopeDepth = 0;
        this._caretStmt = null;
    }
    private readonly _input: string;
    private readonly _allTokens: Token[];
    private readonly _caretTokenIndex: number;
    private readonly _entitiesSet: Set<EntityContext>;
    /** Staging statements that have already entered. */
    private readonly _stmtStack: SimpleStack<StmtContext>;
    /** Staging entities inside a single statement or clause. */
    private readonly _entityStack: SimpleStack<EntityContext>;

    /**
     * The scope depth of the statement containing the caret.
     * This is used to determine the accessibility of entities.
     */
    private _caretStmtScopeDepth: number;

    /** The nearest statement containing the caret */
    private _caretStmt: StmtContext | null;

    /**
     * Always point to the first non-commonStmt at the bottom of the _stmtStack,
     * unless there are only commonStmts in the _stmtStack.
     * */
    private _rootStmt: StmtContext | null;

    visitTerminal() {}

    visitErrorNode() {}

    enterEveryRule() {}

    exitEveryRule() {}

    getRootStmt() {
        return this._rootStmt;
    }

    getEntities() {
        return Array.from(this._entitiesSet) as EntityContext[];
    }

    enterProgram() {
        this._entitiesSet.clear();
        this._stmtStack.clear();
        this._entityStack.clear();
        this._rootStmt = null;
    }

    exitProgram() {
        const entities = Array.from(this._entitiesSet);
        this.removeCtxAttr();
        this.attachAccessibleToEntities(entities);
        this._entityStack.clear();
    }

    /**
     * Remove _ctx property to avoid circular references during JSON serialization
     */
    private removeCtxAttr() {
        const entities = Array.from(this._entitiesSet);
        // Use WeakSet to track processed objects and avoid infinite recursion from circular references
        const processed = new WeakSet();

        const removeCtx = (obj: any) => {
            if (!obj || typeof obj !== 'object' || processed.has(obj)) {
                return;
            }
            processed.add(obj);

            if ('_ctx' in obj) {
                obj._ctx = undefined;
            }

            if (obj.belongStmt) {
                removeCtx(obj.belongStmt);
            }

            if (obj.rootStmt) {
                removeCtx(obj.rootStmt);
            }

            if (obj.parentStmt) {
                removeCtx(obj.parentStmt);
            }

            if (obj.relatedEntities && Array.isArray(obj.relatedEntities)) {
                obj.relatedEntities.forEach(removeCtx);
            }

            if (obj.columns && Array.isArray(obj.columns)) {
                obj.columns.forEach(removeCtx);
            }
        };

        entities.forEach(removeCtx);
    }

    /**
     * Determines if the caret is inside a derived table subquery
     * For example, in: SELECT id FROM t1, (SELECT name from t2) as t3
     * Checks if the caret is inside the subquery (SELECT name from t2)
     * @returns Whether the caret is inside a derived table subquery
     */
    protected isCaretInDerivedTableStmt(): boolean {
        if (!this._caretStmt) {
            return false;
        }

        // Check all entities to find a derived table entity containing the subquery where the caret is located
        return this.getEntities().some(
            (entity) =>
                entity.entityContextType === EntityContextType.TABLE &&
                entity.belongStmt.isContainCaret &&
                entity.relatedEntities?.some(
                    (relatedEntity) =>
                        relatedEntity.entityContextType === EntityContextType.QUERY_RESULT &&
                        relatedEntity.belongStmt === this._caretStmt
                )
        );
    }

    /**
     * Adds accessibility markers to entities
     * @param entities The list of entities to process
     */
    protected attachAccessibleToEntities(entities: EntityContext[]): void {
        if (!entities.length) {
            return;
        }

        for (const entity of entities) {
            if (entity.isAccessible !== undefined) {
                continue;
            }

            const entityScopeDepth = entity.belongStmt.scopeDepth ?? 0;

            // First, the entity must be in a statement containing the caret to potentially be accessible
            entity.isAccessible = entity.belongStmt.isContainCaret ?? false;

            // For table-type entities, we need to judge accessibility based on scope depth
            if (entity.entityContextType === EntityContextType.TABLE) {
                entity.isAccessible =
                    entity.isAccessible && entityScopeDepth === this._caretStmtScopeDepth;
            }

            // Recursively process related entities
            if (entity.relatedEntities) {
                this.attachAccessibleToEntities(entity.relatedEntities);
            }

            // Process columns of the table
            if ((entity as CommonEntityContext).columns) {
                const columnEntities = (entity as CommonEntityContext).columns || [];
                this.attachAccessibleToEntities(columnEntities);
            }
        }
    }

    /**
     * Attach query result to column if the column is derived from expression.
     */
    protected attachQueryResultToColumn(
        column: ColumnEntityContext,
        queryResults: CommonEntityContext[]
    ): void {
        const relatedEntities = queryResults.filter((queryResult) =>
            isEntityInScope(queryResult, column)
        );
        column.relatedEntities = relatedEntities;
    }

    /**
     * Attach related columns to query result
     */
    protected attachColumnsToQueryResult(
        queryResult: CommonEntityContext,
        columns: ColumnEntityContext[]
    ): void {
        const relatedColumns = columns.filter(
            (column) => column.belongStmt === queryResult.belongStmt
        );
        queryResult.columns = relatedColumns;
    }

    /**
     * Attach query result to table if the table is derived from expression.
     */
    protected attachQueryResultToTable(
        table: CommonEntityContext,
        queryResults: CommonEntityContext[]
    ): void {
        const relatedQueryResults = queryResults.filter((queryResult) =>
            isEntityInScope(queryResult, table)
        );
        table.relatedEntities = relatedQueryResults;
    }

    /**
     * Gets query result entities inside a statement
     * @param stmt The statement to search within
     * @returns Array of query result entity contexts
     */
    protected getQueryResultEntitiesInsideStmt(stmt: StmtContext): CommonEntityContext[] {
        return this.getEntities()
            .filter(
                (entity) =>
                    entity.entityContextType === EntityContextType.QUERY_RESULT &&
                    entity.belongStmt.parentStmt === stmt
            )
            .filter(isCommonEntityContext);
    }

    /**
     * The antlr4 will ignore hidden tokens, if we type whitespace at the end of a statement,
     * the whitespace token will not as stop token, so we consider the whitespace token as a part of the nonhidden token in front of it
     */
    protected getPrevNonHiddenTokenIndex(caretTokenIndex: number) {
        if (this._allTokens[caretTokenIndex].channel !== Token.HIDDEN_CHANNEL)
            return caretTokenIndex;

        for (let i = caretTokenIndex - 1; i >= 0; i--) {
            const token = this._allTokens[i];
            if (token.channel !== Token.HIDDEN_CHANNEL) {
                // If prev nonhidden token is ';', the current token does not belong to any statement.
                return token.text === ';' ? Infinity : token.tokenIndex;
            }
        }

        return Infinity;
    }

    protected pushStmt(ctx: ParserRuleContext, type: StmtContextType) {
        let isContainCaret: boolean | undefined;

        if (this._caretTokenIndex >= 0) {
            isContainCaret =
                !!ctx.start &&
                !!ctx.stop &&
                ctx.start.tokenIndex <= this._caretTokenIndex &&
                ctx.stop.tokenIndex >= this.getPrevNonHiddenTokenIndex(this._caretTokenIndex);
            if (isContainCaret && type !== StmtContextType.COMMON_STMT) {
                this._caretStmtScopeDepth++;
            }
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
        if (stmtContext) {
            if (stmtContext.stmtContextType === StmtContextType.COMMON_STMT) {
                this._rootStmt = this._stmtStack.peek();
            }
            if (!this._entityStack.isEmpty()) {
                this.combineEntitiesAndAdd(stmtContext);
            }
            // If the current statement contains the caret and its scope depth equals the caret statement's scope depth
            // then set it as the nearest statement containing the caret
            if (
                stmtContext.isContainCaret &&
                stmtContext.scopeDepth === this._caretStmtScopeDepth
            ) {
                this._caretStmt = stmtContext;
            }
        }
        return stmtContext;
    }

    protected pushEntity(
        ctx: ParserRuleContext,
        type: EntityContextType,
        attrInfo?: AttrInfo[],
        metaInfo?: MetaInfo
    ) {
        const entityContext = toEntityContext(
            ctx,
            type,
            this._input,
            this._stmtStack.peek(),
            attrInfo,
            metaInfo
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
        } else if (stmtContext.stmtContextType === StmtContextType.SELECT_STMT) {
            const tableSourceEntities = this.combineFromTableSource(
                stmtContext,
                entitiesInsideStmt
            );
            const queryResultEntities = this.combineQueryResultStmtEntities(
                stmtContext,
                entitiesInsideStmt
            );
            const otherEntities = entitiesInsideStmt.filter(
                (entity) =>
                    ![
                        EntityContextType.QUERY_RESULT,
                        EntityContextType.TABLE,
                        EntityContextType.COLUMN,
                    ].includes(entity.entityContextType)
            );
            return Array.from(
                new Set([...tableSourceEntities, ...queryResultEntities, ...otherEntities])
            );
        }
        return entitiesInsideStmt;
    }

    protected combineQueryResultStmtEntities(
        stmtContext: StmtContext,
        entitiesInsideStmt: EntityContext[]
    ): EntityContext[] {
        if (!stmtContext || !entitiesInsideStmt?.length) {
            return [];
        }

        const columnEntities: ColumnEntityContext[] = [];
        const relatedTableEntities: CommonEntityContext[] = [];
        const finalEntities: EntityContext[] = [];
        const queryResultEntitiesInsideStmt: CommonEntityContext[] =
            this.getQueryResultEntitiesInsideStmt(stmtContext);

        // Categorize and process entities
        entitiesInsideStmt.forEach((entity) => {
            if (entity.belongStmt !== stmtContext) return;
            if (
                entity.entityContextType === EntityContextType.QUERY_RESULT &&
                isCommonEntityContext(entity)
            ) {
                finalEntities.push(entity);
            } else if (
                entity.entityContextType === EntityContextType.COLUMN &&
                isColumnEntityContext(entity)
            ) {
                if (entity.declareType === ColumnDeclareType.EXPRESSION) {
                    this.attachQueryResultToColumn(entity, queryResultEntitiesInsideStmt);
                }
                columnEntities.push(entity);
            } else if (
                entity.entityContextType === EntityContextType.TABLE &&
                isCommonEntityContext(entity)
            ) {
                relatedTableEntities.push(entity);
            }
        });

        // combine collected entities to query result entity
        finalEntities.forEach((queryResultEntity) => {
            this.attachColumnsToQueryResult(
                queryResultEntity as CommonEntityContext,
                columnEntities
            );
            queryResultEntity.relatedEntities = relatedTableEntities;
        });

        return finalEntities;
    }

    protected combineFromTableSource(
        stmtContext: StmtContext,
        entitiesInsideStmt: EntityContext[]
    ): EntityContext[] {
        const finalEntities: EntityContext[] = [];
        const queryResultEntitiesInsideStmt = this.getQueryResultEntitiesInsideStmt(stmtContext);
        const tableEntities = <CommonEntityContext[]>(
            entitiesInsideStmt.filter(
                (entity) => entity.entityContextType === EntityContextType.TABLE
            )
        );

        tableEntities.forEach((table) => {
            // If it's an EXPRESSION type (subquery), need to associate with QUERY_RESULT entities
            if (table.declareType === TableDeclareType.EXPRESSION) {
                this.attachQueryResultToTable(table, queryResultEntitiesInsideStmt);
            }
            finalEntities.push(table);
        });

        return finalEntities;
    }

    protected combineCreateTableOrViewStmtEntities(
        stmtContext: StmtContext,
        entitiesInsideStmt: EntityContext[]
    ): EntityContext[] {
        const columns: EntityContext[] = [];
        const relatedEntities: EntityContext[] = [];
        const queryResultEntitiesInsideStmt: EntityContext[] =
            this.getQueryResultEntitiesInsideStmt(stmtContext);
        let mainEntity: EntityContext | null = null;
        const finalEntities = [...entitiesInsideStmt, ...queryResultEntitiesInsideStmt].reduce(
            (result, entity) => {
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
            },
            [] as EntityContext[]
        );
        if (mainEntity && columns.length) {
            if (isCommonEntityContext(mainEntity)) {
                mainEntity = Object.assign(mainEntity, {
                    columns,
                });
            }
        }

        if (mainEntity && relatedEntities.length) {
            if (isCommonEntityContext(mainEntity) || isFuncEntityContext(mainEntity)) {
                mainEntity = Object.assign(mainEntity, {
                    relatedEntities,
                });
            }
        }

        return finalEntities;
    }
}
