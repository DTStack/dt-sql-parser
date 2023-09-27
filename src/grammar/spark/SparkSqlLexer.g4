// Grammar file from: https://github.com/apache/spark/blob/master/sql/api/src/main/antlr4/org/apache/spark/sql/catalyst/parser/SqlBaseLexer.g4

/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * This file is an adaptation of Presto's presto-parser/src/main/antlr4/com/facebook/presto/sql/parser/SqlBase.g4 grammar.
 */

lexer grammar SparkSqlLexer;

@members {
  /**
   * When true, parser should throw ParseException for unclosed bracketed comment.
   */
  public has_unclosed_bracketed_comment = false;

  /**
   * Verify whether current token is a valid decimal token (which contains dot).
   * Returns true if the character that follows the token is not a digit or letter or underscore.
   *
   * For example:
   * For char stream "2.3", "2." is not a valid decimal token, because it is followed by digit '3'.
   * For char stream "2.3_", "2.3" is not a valid decimal token, because it is followed by '_'.
   * For char stream "2.3W", "2.3" is not a valid decimal token, because it is followed by 'W'.
   * For char stream "12.0D 34.E2+0.12 "  12.0D is a valid decimal token because it is followed
   * by a space. 34.E2 is a valid decimal token because it is followed by symbol '+'
   * which is not a digit or letter or underscore.
   */
  public isValidDecimal() {
    const nextChar = _input.LA(1);
    if (nextChar >= 'A' && nextChar <= 'Z' || nextChar >= '0' && nextChar <= '9' ||
      nextChar == '_') {
      return false;
    } else {
      return true;
    }
  }

  /**
   * This method will be called when we see '/*' and try to match it as a bracketed comment.
   * If the next character is '+', it should be parsed as hint later, and we cannot match
   * it as a bracketed comment.
   *
   * Returns true if the next character is '+'.
   */
  public isHint() {
    const nextChar = _input.LA(1);
    if (nextChar == '+') {
      return true;
    } else {
      return false;
    }
  }

  /**
   * This method will be called when the character stream ends and try to find out the
   * unclosed bracketed comment.
   * If the method be called, it means the end of the entire character stream match,
   * and we set the flag and fail later.
   */
  public markUnclosedComment() {
    has_unclosed_bracketed_comment = true;
  }
}

SEMICOLON: ';';

LEFT_PAREN: '(';
RIGHT_PAREN: ')';
COMMA: ',';
DOT: '.';
LEFT_BRACKET: '[';
RIGHT_BRACKET: ']';

// NOTE: If you add a new token in the list below, you should update the list of keywords
// and reserved tag in `docs/sql-ref-ansi-compliance.md#sql-keywords`, and
// modify `ParserUtils.toExprAlias()` which assumes all keywords are between `ADD` and `ZONE`.

//============================
// Start of the keywords list
//============================
//--SPARK-KEYWORD-LIST-START
KW_ADD: 'ADD';
KW_AFTER: 'AFTER';
KW_ALL: 'ALL';
KW_ALTER: 'ALTER';
KW_ALWAYS: 'ALWAYS';
KW_ANALYZE: 'ANALYZE';
KW_AND: 'AND';
KW_ANTI: 'ANTI';
KW_ANY: 'ANY';
KW_ANY_VALUE: 'ANY_VALUE';
KW_ARCHIVE: 'ARCHIVE';
KW_ARRAY: 'ARRAY';
KW_AS: 'AS';
KW_ASC: 'ASC';
KW_AT: 'AT';
KW_AUTHORIZATION: 'AUTHORIZATION';
KW_BETWEEN: 'BETWEEN';
KW_BIGINT: 'BIGINT';
KW_BINARY: 'BINARY';
KW_BOOLEAN: 'BOOLEAN';
KW_BOTH: 'BOTH';
KW_BUCKET: 'BUCKET';
KW_BUCKETS: 'BUCKETS';
KW_BY: 'BY';
KW_BYTE: 'BYTE';
KW_CACHE: 'CACHE';
KW_CASCADE: 'CASCADE';
KW_CASE: 'CASE';
KW_CAST: 'CAST';
KW_CATALOG: 'CATALOG';
KW_CATALOGS: 'CATALOGS';
KW_CHANGE: 'CHANGE';
KW_CHAR: 'CHAR';
KW_CHARACTER: 'CHARACTER';
KW_CHECK: 'CHECK';
KW_CLEAR: 'CLEAR';
KW_CLUSTER: 'CLUSTER';
KW_CLUSTERED: 'CLUSTERED';
KW_CODEGEN: 'CODEGEN';
KW_COLLATE: 'COLLATE';
KW_COLLECTION: 'COLLECTION';
KW_COLUMN: 'COLUMN';
KW_COLUMNS: 'COLUMNS';
KW_COMMENT: 'COMMENT';
KW_COMMIT: 'COMMIT';
KW_COMPACT: 'COMPACT';
KW_COMPACTIONS: 'COMPACTIONS';
KW_COMPUTE: 'COMPUTE';
KW_CONCATENATE: 'CONCATENATE';
KW_CONSTRAINT: 'CONSTRAINT';
KW_COST: 'COST';
KW_CREATE: 'CREATE';
KW_CROSS: 'CROSS';
KW_CUBE: 'CUBE';
KW_CURRENT: 'CURRENT';
KW_CURRENT_DATE: 'CURRENT_DATE';
KW_CURRENT_TIME: 'CURRENT_TIME';
KW_CURRENT_TIMESTAMP: 'CURRENT_TIMESTAMP';
KW_CURRENT_USER: 'CURRENT_USER';
KW_DAY: 'DAY';
KW_DAYS: 'DAYS';
KW_DAYOFYEAR: 'DAYOFYEAR';
KW_DATA: 'DATA';
KW_DATE: 'DATE';
KW_DATABASE: 'DATABASE';
KW_DATABASES: 'DATABASES';
KW_DATEADD: 'DATEADD';
KW_DATE_ADD: 'DATE_ADD';
KW_DATEDIFF: 'DATEDIFF';
KW_DATE_DIFF: 'DATE_DIFF';
KW_DBPROPERTIES: 'DBPROPERTIES';
KW_DEC: 'DEC';
KW_DECIMAL: 'DECIMAL';
KW_DECLARE: 'DECLARE';
KW_DEFAULT: 'DEFAULT';
KW_DEFINED: 'DEFINED';
KW_DELETE: 'DELETE';
KW_DELIMITED: 'DELIMITED';
KW_DESC: 'DESC';
KW_DESCRIBE: 'DESCRIBE';
KW_DFS: 'DFS';
KW_DIRECTORIES: 'DIRECTORIES';
KW_DIRECTORY: 'DIRECTORY';
KW_DISTINCT: 'DISTINCT';
KW_DISTRIBUTE: 'DISTRIBUTE';
KW_DIV: 'DIV';
KW_DOUBLE: 'DOUBLE';
KW_DROP: 'DROP';
KW_ELSE: 'ELSE';
KW_END: 'END';
KW_ESCAPE: 'ESCAPE';
KW_ESCAPED: 'ESCAPED';
KW_EXCEPT: 'EXCEPT';
KW_EXCHANGE: 'EXCHANGE';
KW_EXCLUDE: 'EXCLUDE';
KW_EXISTS: 'EXISTS';
KW_EXPLAIN: 'EXPLAIN';
KW_EXPORT: 'EXPORT';
KW_EXTENDED: 'EXTENDED';
KW_EXTERNAL: 'EXTERNAL';
KW_EXTRACT: 'EXTRACT';
KW_FALSE: 'FALSE';
KW_FETCH: 'FETCH';
KW_FIELDS: 'FIELDS';
KW_FILTER: 'FILTER';
KW_FILEFORMAT: 'FILEFORMAT';
KW_FIRST: 'FIRST';
KW_FLOAT: 'FLOAT';
KW_FOLLOWING: 'FOLLOWING';
KW_FOR: 'FOR';
KW_FOREIGN: 'FOREIGN';
KW_FORMAT: 'FORMAT';
KW_FORMATTED: 'FORMATTED';
KW_FROM: 'FROM';
KW_FULL: 'FULL';
KW_FUNCTION: 'FUNCTION';
KW_FUNCTIONS: 'FUNCTIONS';
KW_GENERATED: 'GENERATED';
KW_GLOBAL: 'GLOBAL';
KW_GRANT: 'GRANT';
KW_GROUP: 'GROUP';
KW_GROUPING: 'GROUPING';
KW_HAVING: 'HAVING';
KW_BINARY_HEX: 'X';
KW_HOUR: 'HOUR';
KW_HOURS: 'HOURS';
KW_IDENTIFIER_KW: 'IDENTIFIER';
KW_IF: 'IF';
KW_IGNORE: 'IGNORE';
KW_IMPORT: 'IMPORT';
KW_IN: 'IN';
KW_INCLUDE: 'INCLUDE';
KW_INDEX: 'INDEX';
KW_INDEXES: 'INDEXES';
KW_INNER: 'INNER';
KW_INPATH: 'INPATH';
KW_INPUTFORMAT: 'INPUTFORMAT';
KW_INSERT: 'INSERT';
KW_INTERSECT: 'INTERSECT';
KW_INTERVAL: 'INTERVAL';
KW_INT: 'INT';
KW_INTEGER: 'INTEGER';
KW_INTO: 'INTO';
KW_IS: 'IS';
KW_ITEMS: 'ITEMS';
KW_JOIN: 'JOIN';
KW_KEYS: 'KEYS';
KW_LAST: 'LAST';
KW_LATERAL: 'LATERAL';
KW_LAZY: 'LAZY';
KW_LEADING: 'LEADING';
KW_LEFT: 'LEFT';
KW_LIKE: 'LIKE';
KW_ILIKE: 'ILIKE';
KW_LIMIT: 'LIMIT';
KW_LINES: 'LINES';
KW_LIST: 'LIST';
KW_LOAD: 'LOAD';
KW_LOCAL: 'LOCAL';
KW_LOCATION: 'LOCATION';
KW_LOCK: 'LOCK';
KW_LOCKS: 'LOCKS';
KW_LOGICAL: 'LOGICAL';
KW_LONG: 'LONG';
KW_MACRO: 'MACRO';
KW_MAP: 'MAP';
KW_MATCHED: 'MATCHED';
KW_MERGE: 'MERGE';
KW_MICROSECOND: 'MICROSECOND';
KW_MICROSECONDS: 'MICROSECONDS';
KW_MILLISECOND: 'MILLISECOND';
KW_MILLISECONDS: 'MILLISECONDS';
KW_MINUTE: 'MINUTE';
KW_MINUTES: 'MINUTES';
KW_MONTH: 'MONTH';
KW_MONTHS: 'MONTHS';
KW_MSCK: 'MSCK';
KW_NAME: 'NAME';
KW_NAMESPACE: 'NAMESPACE';
KW_NAMESPACES: 'NAMESPACES';
KW_NANOSECOND: 'NANOSECOND';
KW_NANOSECONDS: 'NANOSECONDS';
KW_NATURAL: 'NATURAL';
KW_NO: 'NO';
KW_NOT: 'NOT' | '!';
KW_NULL: 'NULL';
KW_NULLS: 'NULLS';
KW_NUMERIC: 'NUMERIC';
KW_OF: 'OF';
KW_OFFSET: 'OFFSET';
KW_ON: 'ON';
KW_ONLY: 'ONLY';
KW_OPTION: 'OPTION';
KW_OPTIONS: 'OPTIONS';
KW_OR: 'OR';
KW_ORDER: 'ORDER';
KW_OUT: 'OUT';
KW_OUTER: 'OUTER';
KW_OUTPUTFORMAT: 'OUTPUTFORMAT';
KW_OVER: 'OVER';
KW_OVERLAPS: 'OVERLAPS';
KW_OVERLAY: 'OVERLAY';
KW_OVERWRITE: 'OVERWRITE';
KW_PARTITION: 'PARTITION';
KW_PARTITIONED: 'PARTITIONED';
KW_PARTITIONS: 'PARTITIONS';
KW_PERCENTILE_CONT: 'PERCENTILE_CONT';
KW_PERCENTILE_DISC: 'PERCENTILE_DISC';
KW_PERCENTLIT: 'PERCENT';
KW_PIVOT: 'PIVOT';
KW_PLACING: 'PLACING';
KW_POSITION: 'POSITION';
KW_PRECEDING: 'PRECEDING';
KW_PRIMARY: 'PRIMARY';
KW_PRINCIPALS: 'PRINCIPALS';
KW_PROPERTIES: 'PROPERTIES';
KW_PURGE: 'PURGE';
KW_QUARTER: 'QUARTER';
KW_QUERY: 'QUERY';
KW_RANGE: 'RANGE';
KW_REAL: 'REAL';
KW_RECORDREADER: 'RECORDREADER';
KW_RECORDWRITER: 'RECORDWRITER';
KW_RECOVER: 'RECOVER';
KW_REDUCE: 'REDUCE';
KW_REFERENCES: 'REFERENCES';
KW_REFRESH: 'REFRESH';
KW_RENAME: 'RENAME';
KW_REPAIR: 'REPAIR';
KW_REPEATABLE: 'REPEATABLE';
KW_REPLACE: 'REPLACE';
KW_RESET: 'RESET';
KW_RESPECT: 'RESPECT';
KW_RESTRICT: 'RESTRICT';
KW_REVOKE: 'REVOKE';
KW_RIGHT: 'RIGHT';
KW_RLIKE: 'RLIKE' | 'REGEXP';
KW_ROLE: 'ROLE';
KW_ROLES: 'ROLES';
KW_ROLLBACK: 'ROLLBACK';
KW_ROLLUP: 'ROLLUP';
KW_ROW: 'ROW';
KW_ROWS: 'ROWS';
KW_SECOND: 'SECOND';
KW_SECONDS: 'SECONDS';
KW_SCHEMA: 'SCHEMA';
KW_SCHEMAS: 'SCHEMAS';
KW_SELECT: 'SELECT';
KW_SEMI: 'SEMI';
KW_SEPARATED: 'SEPARATED';
KW_SERDE: 'SERDE';
KW_SERDEPROPERTIES: 'SERDEPROPERTIES';
KW_SESSION_USER: 'SESSION_USER';
KW_SET: 'SET';
KW_SETMINUS: 'MINUS';
KW_SETS: 'SETS';
KW_SHORT: 'SHORT';
KW_SHOW: 'SHOW';
KW_SINGLE: 'SINGLE';
KW_SKEWED: 'SKEWED';
KW_SMALLINT: 'SMALLINT';
KW_SOME: 'SOME';
KW_SORT: 'SORT';
KW_SORTED: 'SORTED';
KW_SOURCE: 'SOURCE';
KW_START: 'START';
KW_STATISTICS: 'STATISTICS';
KW_STORED: 'STORED';
KW_STRATIFY: 'STRATIFY';
KW_STRING: 'STRING';
KW_STRUCT: 'STRUCT';
KW_SUBSTR: 'SUBSTR';
KW_SUBSTRING: 'SUBSTRING';
KW_SYNC: 'SYNC';
KW_SYSTEM_TIME: 'SYSTEM_TIME';
KW_SYSTEM_VERSION: 'SYSTEM_VERSION';
KW_TABLE: 'TABLE';
KW_TABLES: 'TABLES';
KW_TABLESAMPLE: 'TABLESAMPLE';
KW_TARGET: 'TARGET';
KW_TBLPROPERTIES: 'TBLPROPERTIES';
KW_TEMPORARY: 'TEMPORARY' | 'TEMP';
KW_TERMINATED: 'TERMINATED';
KW_THEN: 'THEN';
KW_TIME: 'TIME';
KW_TIMEDIFF: 'TIMEDIFF';
KW_TIMESTAMP: 'TIMESTAMP';
KW_TIMESTAMP_LTZ: 'TIMESTAMP_LTZ';
KW_TIMESTAMP_NTZ: 'TIMESTAMP_NTZ';
KW_TIMESTAMPADD: 'TIMESTAMPADD';
KW_TIMESTAMPDIFF: 'TIMESTAMPDIFF';
KW_TINYINT: 'TINYINT';
KW_TO: 'TO';
KW_TOUCH: 'TOUCH';
KW_TRAILING: 'TRAILING';
KW_TRANSACTION: 'TRANSACTION';
KW_TRANSACTIONS: 'TRANSACTIONS';
KW_TRANSFORM: 'TRANSFORM';
KW_TRIM: 'TRIM';
KW_TRUE: 'TRUE';
KW_TRUNCATE: 'TRUNCATE';
KW_TRY_CAST: 'TRY_CAST';
KW_TYPE: 'TYPE';
KW_UNARCHIVE: 'UNARCHIVE';
KW_UNBOUNDED: 'UNBOUNDED';
KW_UNCACHE: 'UNCACHE';
KW_UNION: 'UNION';
KW_UNIQUE: 'UNIQUE';
KW_UNKNOWN: 'UNKNOWN';
KW_UNLOCK: 'UNLOCK';
KW_UNPIVOT: 'UNPIVOT';
KW_UNSET: 'UNSET';
KW_UPDATE: 'UPDATE';
KW_USE: 'USE';
KW_USER: 'USER';
KW_USING: 'USING';
KW_VALUES: 'VALUES';
KW_VARCHAR: 'VARCHAR';
KW_VAR: 'VAR';
KW_VARIABLE: 'VARIABLE';
KW_VERSION: 'VERSION';
KW_VIEW: 'VIEW';
KW_VIEWS: 'VIEWS';
KW_VOID: 'VOID';
KW_WEEK: 'WEEK';
KW_WEEKS: 'WEEKS';
KW_WHEN: 'WHEN';
KW_WHERE: 'WHERE';
KW_WINDOW: 'WINDOW';
KW_WITH: 'WITH';
KW_WITHIN: 'WITHIN';
KW_YEAR: 'YEAR';
KW_YEARS: 'YEARS';
KW_ZONE: 'ZONE';
//--SPARK-KEYWORD-LIST-END
//============================
// End of the keywords list
//============================

EQ  : '=' | '==';
NSEQ: '<=>';
NEQ : '<>';
NEQJ: '!=';
LT  : '<';
LTE : '<=' | '!>';
GT  : '>';
GTE : '>=' | '!<';

PLUS: '+';
MINUS: '-';
ASTERISK: '*';
SLASH: '/';
PERCENT: '%';
TILDE: '~';
AMPERSAND: '&';
PIPE: '|';
CONCAT_PIPE: '||';
HAT: '^';
COLON: ':';
ARROW: '->';
FAT_ARROW : '=>';
HENT_START: '/*+';
HENT_END: '*/';
QUESTION: '?';

STRING_LITERAL
    : '\'' ( ~('\''|'\\') | ('\\' .) )* '\''
    | 'R\'' (~'\'')* '\''
    | 'R"'(~'"')* '"'
    ;

DOUBLEQUOTED_STRING
    :'"' ( ~('"'|'\\') | ('\\' .) )* '"'
    ;

// NOTE: If you move a numeric literal, you should modify `ParserUtils.toExprAlias()`
// which assumes all numeric literals are between `BIGINT_LITERAL` and `BIGDECIMAL_LITERAL`.

BIGINT_LITERAL
    : DIGIT+ 'L'
    ;

SMALLINT_LITERAL
    : DIGIT+ 'S'
    ;

TINYINT_LITERAL
    : DIGIT+ 'Y'
    ;

INTEGER_VALUE
    : DIGIT+
    ;

EXPONENT_VALUE
    : DIGIT+ EXPONENT
    | DECIMAL_DIGITS EXPONENT {isValidDecimal()}?
    ;

DECIMAL_VALUE
    : DECIMAL_DIGITS {isValidDecimal()}?
    ;

FLOAT_LITERAL
    : DIGIT+ EXPONENT? 'F'
    | DECIMAL_DIGITS EXPONENT? 'F' {isValidDecimal()}?
    ;

DOUBLE_LITERAL
    : DIGIT+ EXPONENT? 'D'
    | DECIMAL_DIGITS EXPONENT? 'D' {isValidDecimal()}?
    ;

BIGDECIMAL_LITERAL
    : DIGIT+ EXPONENT? 'BD'
    | DECIMAL_DIGITS EXPONENT? 'BD' {isValidDecimal()}?
    ;

IDENTIFIER
    : (LETTER | DIGIT | '_')+
    ;

BACKQUOTED_IDENTIFIER
    : '`' ( ~'`' | '``' )* '`'
    ;

fragment DECIMAL_DIGITS
    : DIGIT+ '.' DIGIT*
    | '.' DIGIT+
    ;

fragment EXPONENT
    : 'E' [+-]? DIGIT+
    ;

fragment DIGIT
    : [0-9]
    ;

fragment LETTER
    : [A-Za-z]
    ;

SIMPLE_COMMENT
    : '--' ('\\\n' | ~[\r\n])* '\r'? '\n'? -> channel(HIDDEN)
    ;

BRACKETED_COMMENT
    : '/*' {!isHint()}? ( BRACKETED_COMMENT | . )*? ('*/' | {markUnclosedComment();} EOF) -> channel(HIDDEN)
    ;

WS
    : [ \r\n\t]+ -> channel(HIDDEN)
    ;

// Catch-all for anything we can't recognize.
// We use this to be able to ignore and recover all the text
// when splitting statements with DelimiterLexer
UNRECOGNIZED
    : .
    ;
