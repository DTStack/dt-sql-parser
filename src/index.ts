export {
    MySQL,
    FlinkSQL,
    SparkSQL,
    HiveSQL,
    PostgreSQL,
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
    PostgreSqlParserListener,
    PostgreSqlParserVisitor,
    TrinoSqlListener,
    TrinoSqlVisitor,
    ImpalaSqlParserListener,
    ImpalaSqlParserVisitor,
} from './lib';

export { EntityContextType } from './parser/common/types';

export {
    /**
     * @deprecated SyntaxContextType has been renamed to {@link EntityContextType},
     * It will be removed when the stable version is released.
     */
    EntityContextType as SyntaxContextType,
} from './parser/common/types';

export type { CaretPosition, Suggestions, SyntaxSuggestion } from './parser/common/types';

export type { WordRange, TextSlice } from './parser/common/textAndWord';

export type { SyntaxError, ParseError, ErrorListener } from './parser/common/parseErrorListener';

export type { StmtContextType, StmtContext, EntityContext } from './parser/common/entityCollector';

/**
 * @deprecated Legacy utils will be removed when the stable version is released.
 */
export * from './utils';
