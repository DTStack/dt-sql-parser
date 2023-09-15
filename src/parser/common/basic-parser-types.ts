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
    /** database name path, such as catalog.db */
    DATABASE = 'database',
    /** database name path will be created  */
    DATABASE_CREATE = 'databaseCreate',
    /** table name path, such as catalog.db.tb */
    TABLE = 'table',
    /** table name path will be created */
    TABLE_CREATE = 'tableCreate',
    /** view name */
    VIEW = 'view',
    /** function name */
    FUNCTION = 'function',
    /** principal name */
    PRINCIPAL = 'principal',
    /** hint arg name */
    HTNTARG = 'hintArg',
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