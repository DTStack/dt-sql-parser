export { AbstractParseTreeVisitor } from 'antlr4ng';

export {
    MySQL,
    FlinkSQL,
    SparkSQL,
    HiveSQL,
    PostgresSQL,
    TrinoSQL,
    ImpalaSQL,
    PLSQL,
} from './parser';

export type {
    MySqlParserListener,
    MySqlParserVisitor,
    FlinkSqlParserListener,
    FlinkSqlParserVisitor,
    SparkSqlParserListener,
    SparkSqlParserVisitor,
    HiveSqlParserListener,
    HiveSqlParserVisitor,
    PlSqlParserListener,
    PlSqlParserVisitor,
    PostgreSQLParserListener,
    PostgreSQLParserVisitor,
    TrinoSqlListener,
    TrinoSqlVisitor,
    ImpalaSqlParserListener,
    ImpalaSqlParserVisitor,
} from './lib';

export { SyntaxContextType } from './parser/common/basic-parser-types';

export type {
    CaretPosition,
    Suggestions,
    SyntaxSuggestion,
} from './parser/common/basic-parser-types';

export type { WordRange, TextSlice } from './parser/common/textAndWord';

export type { SyntaxError, ParseError, ErrorListener } from './parser/common/parseErrorListener';

/**
 * @deprecated legacy, will be removed.
 */
export * from './utils';
