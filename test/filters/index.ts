/**
 * All unit tests should import parser about from this file.
 * In this way, the exports of dt-sql-parser in the entry file is guaranteed to be complete.
 *
 * 单测文件中有关 parser 的导入，都应该从这个文件中导入。
 * 通过这种方式，能保证 dt-sql-parser 的入口文件中的导出完整。
 *
 * See this issue https://github.com/DTStack/dt-sql-parser/issues/236.
 */

export * from '../../src';

/**
 * Something required by unit test but dt-sql-parser'entry not.
 * If you need to add an export to this file,
 * consider whether it should be exported in src/index as well.
 *
 * 一些单测文件需要但是 dt-sql-parser的入口不需要的导出。
 * 如果你需要在这个文件中添加新的导出，请考虑它是否应该在 dt-sql-parser 的入口文件中导出。
 */
export { CommonTokenStream } from 'antlr4ts';

export { ParseTreeWalker, ParseTreeListener } from 'antlr4ts/tree';

export { FlinkSqlLexer } from '../../src/lib/flinksql/FlinkSqlLexer';
export { FlinkSqlParser } from '../../src/lib/flinksql/FlinkSqlParser';
export * as FlinkSqlParserRuleContext from '../../src/lib/flinksql/FlinkSqlParser';

export { MySqlLexer } from '../../src/lib/mysql/MySqlLexer';
export { MySqlParser } from '../../src/lib/mysql/MySqlParser';
export * as MySqlParserRuleContext from '../../src/lib/mysql/MySqlParser';

export { HiveSqlLexer } from '../../src/lib/hive/HiveSqlLexer';
export { HiveSqlParser } from '../../src/lib/hive/HiveSqlParser';
export * as HiveSqlParserRuleContext from '../../src/lib/hive/HiveSqlParser';

export { PlSqlLexer } from '../../src/lib/plsql/PlSqlLexer';
export { PlSqlParser } from '../../src/lib/plsql/PlSqlParser';
export * as PlSqlParserRuleContext from '../../src/lib/plsql/PlSqlParser';

export { SparkSqlLexer } from '../../src/lib/spark/SparkSqlLexer';
export { SparkSqlParser } from '../../src/lib/spark/SparkSqlParser';
export * as SparkSQLParserRuleContext from '../../src/lib/spark/SparkSqlParser';

export { PostgreSQLLexer } from '../../src/lib/pgsql/PostgreSQLLexer';
export { PostgreSQLParser } from '../../src/lib/pgsql/PostgreSQLParser';
export * as PostgreSQLParserRuleContext from '../../src/lib/pgsql/PostgreSQLParser';

export { TrinoSqlLexer } from '../../src/lib/trinosql/TrinoSqlLexer';
export { TrinoSqlParser } from '../../src/lib/trinosql/TrinoSqlParser';
export * as TrinoSqlParserRuleContext from '../../src/lib/trinosql/TrinoSqlParser';

export { ImpalaSqlLexer } from '../../src/lib/impala/ImpalaSqlLexer';
export { ImpalaSqlParser } from '../../src/lib/impala/ImpalaSqlParser';
export * as ImpalaSqlParserRuleContext from '../../src/lib/impala/ImpalaSqlParser';

export { FlinkSqlSplitListener } from '../../src/parser/flinksql';
export { MysqlSplitListener } from '../../src/parser/mysql';
export { HiveSqlSplitListener } from '../../src/parser/hive';
export { SparkSqlSplitListener } from '../../src/parser/spark';
export { PgSqlSplitListener } from '../../src/parser/pgsql';
export { TrinoSqlSplitListener } from '../../src/parser/trinosql';
export { ImpalaSqlSplitListener } from '../../src/parser/impala';
