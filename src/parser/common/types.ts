import { WordRange } from './textAndWord';
import { StmtContextType } from './entityCollector';

/**
 * The insertion position of the candidate list.
 * Such as cursor position
 */
export interface CaretPosition {
    /** start at 1 */
    readonly lineNumber: number;
    /** start at 1 */
    readonly column: number;
}

/**
 * Syntax context type at caret position
 */
export enum EntityContextType {
    /** catalog name */
    CATALOG = 'catalog',
    /** catalog name that will be created  */
    CATALOG_CREATE = 'catalogCreate',
    /** database name path, such as catalog.db */
    DATABASE = 'database',
    /** database name path that will be created  */
    DATABASE_CREATE = 'databaseCreate',
    /** table name path, such as catalog.db.tb */
    TABLE = 'table',
    /** table name path that will be created */
    TABLE_CREATE = 'tableCreate',
    /** view name path, such as db.tb.view */
    VIEW = 'view',
    /** view name path that will be created */
    VIEW_CREATE = 'viewCreate',
    /** function name */
    FUNCTION = 'function',
    /** function name that will be created */
    FUNCTION_CREATE = 'functionCreate',
    /** procedure name */
    PROCEDURE = 'procedure',
    /** procedure name that will be created */
    PROCEDURE_CREATE = 'procedureCreate',
    /** column name */
    COLUMN = 'column',
    /** column name that will be created */
    COLUMN_CREATE = 'columnCreate',
    /** table property key when creating table*/
    TABLE_PROPERTY_KEY = 'tablePropertyKey',
    /** table property value when creating table*/
    TABLE_PROPERTY_VALUE = 'tablePropertyValue',
}

/**
 * Suggested information analyzed from the input
 */
export interface SyntaxSuggestion<T = WordRange> {
    readonly syntaxContextType: EntityContextType | StmtContextType;
    readonly wordRanges: T[];
}

/**
 * Suggested information analyzed from the input
 */
export interface Suggestions<T = WordRange> {
    /**
     * Suggestions about syntax
     */
    readonly syntax: SyntaxSuggestion<T>[];
    /**
     * Suggestions about keywords
     */
    readonly keywords: string[];
}

export type LOCALE_TYPE = 'zh_CN' | 'en_US';

export interface SemanticContext {
    isStatementBeginning: boolean;
}

export enum SqlSplitStrategy {
    /** Only end the statement with semicolon symbol */
    STRICT,
    /** Based on parse tree to split statements */
    LOOSE,
}

export interface SemanticCollectOptions {
    /**
     * `sqlSplitStrategy` will affects the result of `isStatementBeginning`;
     *
     * For example:
     *
     * The sql is "select id from t1   create\<cart_position\>"
     *
     * - `SqlSplitStrategy.STRICT`: split symbol `;` is missing after select statement so that it considerd as one statement, and `isStatementBeginning` is false
     *
     * - `SqlSplitStrategy.LOOSE`: in parse tree, it will parse to "select id from t1" and "create" two single statement, so `isStatementBeginning` is true
     *
     * @default SqlSplitStrategy.STRICT
     */
    sqlSplitStrategy?: SqlSplitStrategy;
}
