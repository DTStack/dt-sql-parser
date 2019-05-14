import { Locations, SuggestKeyword } from "./sqlAutoCompleteParser";
declare enum sqlType {
    Hive = 'hive',
    None = 'sql',
    Impala = 'impala'
}
interface SyntaxParser {
    parseSyntax: (preSql: string, sufSql: string, type: sqlType, d: Boolean) => SyntaxResult | false
}

interface ExpectedWord {
    text: string;
    distance: number;
}

interface ErrorLoc {
    first_column: number;
    first_line: number;
    last_column: number;
    last_line: number;
}
export interface SyntaxResult {
    text: string;
    expected: ExpectedWord[];
    incompleteStatement: Boolean;
    loc: ErrorLoc,
    token: string
}
export const parser: SyntaxParser;
