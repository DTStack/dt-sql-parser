/**
 * The insertion position of the candidate list.
 * Such as cursor position
 */
export interface CaretPosition {
    /** start at 1 */
    lineNumber: number;
    /** start at 1 */
    column: number;
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
}

export interface WordRange {
    /** content of word */
    text: string;
    /** start at 0 */
    startIndex: number;
    stopIndex: number;
    /** start at 1 */
    line: number;
    /** start at 1 */
    startColumn: number;
    stopColumn: number;
}

/**
 * Suggested information analyzed from the input
 */
export interface SyntaxSuggestion<T = WordRange> {
    syntaxContextType: SyntaxContextType;
    wordRanges: T[];
}

/**
 * Suggested information analyzed from the input
 */
export interface Suggestions<T = WordRange> {
    /**
     * Suggestions about syntax
     */
    syntax: SyntaxSuggestion<T>[];
    /**
     * Suggestions about keywords
     */
    keywords: string[];
}

export interface TextSlice {
    startIndex: number;
    endIndex: number;
    startLine: number;
    endLine: number;
    startColumn: number;
    endColumn: number;
    text: string;
}
