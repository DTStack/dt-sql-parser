interface Location {
    first_column: number,
    first_line: number,
    last_column: number,
    last_line: number
}
declare enum sqlType {
    Hive = 'hive',
    None = 'sql',
    Impala = 'impala'
}
interface Locations {
    // 语句类型
    type: string;
    // 语法是否缺失
    missing?: Boolean;
    // 语句位置
    location: Location;
}

interface SuggestKeyword {
    value: string;
    weight: number;
}
interface CompleteParser {
    parseSql: (preSql: string, sufSql: string, type: sqlType,  d: Boolean) => CompleteResult
}
export interface CompleteResult {
    locations: Locations[];
    suggestKeywords: SuggestKeyword[];
}
export const parser:CompleteParser;
