import { WordRange } from './textAndWord';

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
export enum SyntaxContextType {
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
}

/**
 * Suggested information analyzed from the input
 */
export interface SyntaxSuggestion<T = WordRange> {
    readonly syntaxContextType: SyntaxContextType;
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
