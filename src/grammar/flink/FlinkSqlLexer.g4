// $antlr-format alignTrailingComments true, columnLimit 150, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine true, allowShortBlocksOnASingleLine true, minEmptyLines 0, alignSemicolons none, alignColons trailing
// $antlr-format singleLineOverrulesHangingColon true, alignLexerCommands true, alignLabels true, alignTrailers true
// $antlr-format spaceBeforeAssignmentOperators false, groupedAlignments true

lexer grammar FlinkSqlLexer;

options {
    caseInsensitive= true;
}

// SKIP

WHITE_SPACE       : [ \t\r\n]+                                                     -> channel(HIDDEN);
BRACKETED_COMMENT : '/*' .*? '*/'                                                  -> channel(HIDDEN);
LINE_COMMENT: (('--' | '#') ~[\r\n]* ('\r'? '\n' | EOF) | '--' ('\r'? '\n' | EOF)) -> channel(HIDDEN);

/**
 * Keywords and Reserved Keywords
 * Flink uses Calcite as its SQL parser, 
 * The following keywords are derived from the Calcite documentation and Flink's own source code.
 * First, perform a union between the keyword sets declared in the Flink source code and those in the Calcite documentation, 
 * then calculate the difference between the resulting set and the non-keyword set declared in the Flink source code.
 * 
 * Calcite Documentation: https://calcite.apache.org/docs/reference.html#keywords
 * Flink Parser.tdd file: https://github.com/apache/flink/blob/release-1.16/flink-table/flink-sql-parser/src/main/codegen/data/Parser.tdd
 *
 * Please keep the keyword in alphabetical order if new keyword is added.
 * When adding new keywords, please consider whether they should be added to the NonReserved Keywords section below.
 */
KW_ABS                              : 'ABS';
KW_ALL                              : 'ALL';
KW_ALLOCATE                         : 'ALLOCATE';
KW_ALLOW                            : 'ALLOW';
KW_ALTER                            : 'ALTER';
KW_ANALYZE                          : 'ANALYZE';
KW_AND                              : 'AND';
KW_ANY                              : 'ANY';
KW_ARE                              : 'ARE';
KW_ARRAY                            : 'ARRAY';
KW_ARRAY_AGG                        : 'ARRAY_AGG';
KW_ARRAY_CONCAT_AGG                 : 'ARRAY_CONCAT_AGG';
KW_ARRAY_MAX_CARDINALITY            : 'ARRAY_MAX_CARDINALITY';
KW_AS                               : 'AS';
KW_ASENSITIVE                       : 'ASENSITIVE';
KW_ASYMMETRIC                       : 'ASYMMETRIC';
KW_AT                               : 'AT';
KW_ATOMIC                           : 'ATOMIC';
KW_AUTHORIZATION                    : 'AUTHORIZATION';
KW_AVG                              : 'AVG';
KW_BEGIN                            : 'BEGIN';
KW_BEGIN_FRAME                      : 'BEGIN_FRAME';
KW_BEGIN_PARTITION                  : 'BEGIN_PARTITION';
KW_BETWEEN                          : 'BETWEEN';
KW_BIGINT                           : 'BIGINT';
KW_BINARY                           : 'BINARY';
KW_BIT                              : 'BIT';
KW_BLOB                             : 'BLOB';
KW_BOOLEAN                          : 'BOOLEAN';
KW_BOTH                             : 'BOTH';
KW_BY                               : 'BY';
KW_BYTES                            : 'BYTES';
KW_CALL                             : 'CALL';
KW_CALLED                           : 'CALLED';
KW_CARDINALITY                      : 'CARDINALITY';
KW_CASCADED                         : 'CASCADED';
KW_CASE                             : 'CASE';
KW_CAST                             : 'CAST';
KW_CATALOGS                         : 'CATALOGS';
KW_CEIL                             : 'CEIL';
KW_CEILING                          : 'CEILING';
KW_CHANGELOG_MODE                   : 'CHANGELOG_MODE';
KW_CHAR                             : 'CHAR';
KW_CHARACTER                        : 'CHARACTER';
KW_CHARACTER_LENGTH                 : 'CHARACTER_LENGTH';
KW_CHAR_LENGTH                      : 'CHAR_LENGTH';
KW_CHECK                            : 'CHECK';
KW_CLASSIFIER                       : 'CLASSIFIER';
KW_CLOB                             : 'CLOB';
KW_CLOSE                            : 'CLOSE';
KW_COALESCE                         : 'COALESCE';
KW_COLLATE                          : 'COLLATE';
KW_COLLECT                          : 'COLLECT';
KW_COLUMN                           : 'COLUMN';
KW_COLUMNS                          : 'COLUMNS';
KW_COMMENT                          : 'COMMENT';
KW_COMMIT                           : 'COMMIT';
KW_COMPUTE                          : 'COMPUTE';
KW_CONDITION                        : 'CONDITION';
KW_CONNECT                          : 'CONNECT';
KW_CONSTRAINT                       : 'CONSTRAINT';
KW_CONTAINS                         : 'CONTAINS';
KW_CONVERT                          : 'CONVERT';
KW_CORR                             : 'CORR';
KW_CORRESPONDING                    : 'CORRESPONDING';
KW_COUNT                            : 'COUNT';
KW_COVAR_POP                        : 'COVAR_POP';
KW_COVAR_SAMP                       : 'COVAR_SAMP';
KW_CREATE                           : 'CREATE';
KW_CROSS                            : 'CROSS';
KW_CUBE                             : 'CUBE';
KW_CUME_DIST                        : 'CUME_DIST';
KW_CURRENT                          : 'CURRENT';
KW_CURRENT_CATALOG                  : 'CURRENT_CATALOG';
KW_CURRENT_DATE                     : 'CURRENT_DATE';
KW_CURRENT_DEFAULT_TRANSFORM_GROUP  : 'CURRENT_DEFAULT_TRANSFORM_GROUP';
KW_CURRENT_PATH                     : 'CURRENT_PATH';
KW_CURRENT_ROLE                     : 'CURRENT_ROLE';
KW_CURRENT_ROW                      : 'CURRENT_ROW';
KW_CURRENT_SCHEMA                   : 'CURRENT_SCHEMA';
KW_CURRENT_TIME                     : 'CURRENT_TIME';
KW_CURRENT_TIMESTAMP                : 'CURRENT_TIMESTAMP';
KW_CURRENT_TRANSFORM_GROUP_FOR_TYPE : 'CURRENT_TRANSFORM_GROUP_FOR_TYPE';
KW_CURRENT_USER                     : 'CURRENT_USER';
KW_CURSOR                           : 'CURSOR';
KW_CYCLE                            : 'CYCLE';
KW_DATABASES                        : 'DATABASES';
KW_DATE                             : 'DATE';
KW_DATETIME                         : 'DATETIME';
KW_DATETIME_DIFF                    : 'DATETIME_DIFF';
KW_DATETIME_TRUNC                   : 'DATETIME_TRUNC';
KW_DATE_DIFF                        : 'DATE_DIFF';
KW_DATE_TRUNC                       : 'DATE_TRUNC';
KW_DAY                              : 'DAY';
KW_DAYOFWEEK                        : 'DAYOFWEEK';
KW_DAYOFYEAR                        : 'DAYOFYEAR';
KW_DEALLOCATE                       : 'DEALLOCATE';
KW_DEC                              : 'DEC';
KW_DECIMAL                          : 'DECIMAL';
KW_DECLARE                          : 'DECLARE';
KW_DEFAULT                          : 'DEFAULT';
KW_DEFINE                           : 'DEFINE';
KW_DELETE                           : 'DELETE';
KW_DENSE_RANK                       : 'DENSE_RANK';
KW_DEREF                            : 'DEREF';
KW_DESCRIBE                         : 'DESCRIBE';
KW_DETERMINISTIC                    : 'DETERMINISTIC';
KW_DISALLOW                         : 'DISALLOW';
KW_DISCONNECT                       : 'DISCONNECT';
KW_DISTINCT                         : 'DISTINCT';
KW_DOT                              : 'DOT';
KW_DOUBLE                           : 'DOUBLE';
KW_DROP                             : 'DROP';
KW_DYNAMIC                          : 'DYNAMIC';
KW_EACH                             : 'EACH';
KW_ELEMENT                          : 'ELEMENT';
KW_ELSE                             : 'ELSE';
KW_EMPTY                            : 'EMPTY';
KW_END                              : 'END';
// KW_END_EXEC: 'END-EXEC';
KW_END_FRAME           : 'END_FRAME';
KW_END_PARTITION       : 'END_PARTITION';
KW_ENFORCED            : 'ENFORCED';
KW_EQUALS              : 'EQUALS';
KW_ESCAPE              : 'ESCAPE';
KW_ESTIMATED_COST      : 'ESTIMATED_COST';
KW_EVERY               : 'EVERY';
KW_EXCEPT              : 'EXCEPT';
KW_EXEC                : 'EXEC';
KW_EXECUTE             : 'EXECUTE';
KW_EXISTS              : 'EXISTS';
KW_EXP                 : 'EXP';
KW_EXPLAIN             : 'EXPLAIN';
KW_EXTEND              : 'EXTEND';
KW_EXTENDED            : 'EXTENDED';
KW_EXTERNAL            : 'EXTERNAL';
KW_EXTRACT             : 'EXTRACT';
KW_FALSE               : 'FALSE';
KW_FETCH               : 'FETCH';
KW_FILTER              : 'FILTER';
KW_FIRST_VALUE         : 'FIRST_VALUE';
KW_FLOAT               : 'FLOAT';
KW_FLOOR               : 'FLOOR';
KW_FOR                 : 'FOR';
KW_FOREIGN             : 'FOREIGN';
KW_FRAME_ROW           : 'FRAME_ROW';
KW_FREE                : 'FREE';
KW_FRIDAY              : 'FRIDAY';
KW_FROM                : 'FROM';
KW_FULL                : 'FULL';
KW_FUNCTION            : 'FUNCTION';
KW_FUNCTIONS           : 'FUNCTIONS';
KW_FUSION              : 'FUSION';
KW_GET                 : 'GET';
KW_GLOBAL              : 'GLOBAL';
KW_GRANT               : 'GRANT';
KW_GROUP               : 'GROUP';
KW_GROUPING            : 'GROUPING';
KW_GROUPS              : 'GROUPS';
KW_GROUP_CONCAT        : 'GROUP_CONCAT';
KW_HAVING              : 'HAVING';
KW_HOLD                : 'HOLD';
KW_HOUR                : 'HOUR';
KW_IDENTITY            : 'IDENTITY';
KW_IF                  : 'IF';
KW_ILIKE               : 'ILIKE';
KW_IMPORT              : 'IMPORT';
KW_IN                  : 'IN';
KW_INCLUDE             : 'INCLUDE';
KW_INDICATOR           : 'INDICATOR';
KW_INITIAL             : 'INITIAL';
KW_INNER               : 'INNER';
KW_INOUT               : 'INOUT';
KW_INSENSITIVE         : 'INSENSITIVE';
KW_INSERT              : 'INSERT';
KW_INT                 : 'INT';
KW_INTEGER             : 'INTEGER';
KW_INTERSECT           : 'INTERSECT';
KW_INTERSECTION        : 'INTERSECTION';
KW_INTERVAL            : 'INTERVAL';
KW_INTO                : 'INTO';
KW_IS                  : 'IS';
KW_JOIN                : 'JOIN';
KW_JSON_ARRAY          : 'JSON_ARRAY';
KW_JSON_ARRAYAGG       : 'JSON_ARRAYAGG';
KW_JSON_EXECUTION_PLAN : 'JSON_EXECUTION_PLAN';
KW_JSON_EXISTS         : 'JSON_EXISTS';
KW_JSON_OBJECT         : 'JSON_OBJECT';
KW_JSON_OBJECTAGG      : 'JSON_OBJECTAGG';
KW_JSON_QUERY          : 'JSON_QUERY';
KW_JSON_VALUE          : 'JSON_VALUE';
KW_LAG                 : 'LAG';
KW_LANGUAGE            : 'LANGUAGE';
KW_LARGE               : 'LARGE';
KW_LAST_VALUE          : 'LAST_VALUE';
KW_LATERAL             : 'LATERAL';
KW_LEAD                : 'LEAD';
KW_LEADING             : 'LEADING';
KW_LEFT                : 'LEFT';
KW_LIKE                : 'LIKE';
KW_LIKE_REGEX          : 'LIKE_REGEX';
KW_LIMIT               : 'LIMIT';
KW_LN                  : 'LN';
KW_LOCAL               : 'LOCAL';
KW_LOCALTIME           : 'LOCALTIME';
KW_LOCALTIMESTAMP      : 'LOCALTIMESTAMP';
KW_LOWER               : 'LOWER';
KW_MATCH               : 'MATCH';
KW_MATCHES             : 'MATCHES';
KW_MATCH_NUMBER        : 'MATCH_NUMBER';
KW_MATCH_RECOGNIZE     : 'MATCH_RECOGNIZE';
KW_MAX                 : 'MAX';
KW_MEASURES            : 'MEASURES';
KW_MEMBER              : 'MEMBER';
KW_MERGE               : 'MERGE';
KW_METADATA            : 'METADATA';
KW_METHOD              : 'METHOD';
KW_MIN                 : 'MIN';
KW_MINUS               : 'MINUS';
KW_MINUTE              : 'MINUTE';
KW_MOD                 : 'MOD';
KW_MODIFIES            : 'MODIFIES';
KW_MODIFY              : 'MODIFY';
KW_MODULE              : 'MODULE';
KW_MODULES             : 'MODULES';
KW_MONDAY              : 'MONDAY';
KW_MONTH               : 'MONTH';
KW_MORE                : 'MORE';
KW_MULTISET            : 'MULTISET';
KW_NATIONAL            : 'NATIONAL';
KW_NATURAL             : 'NATURAL';
KW_NCHAR               : 'NCHAR';
KW_NCLOB               : 'NCLOB';
KW_NEW                 : 'NEW';
KW_NEXT                : 'NEXT';
KW_NO                  : 'NO';
KW_NONE                : 'NONE';
KW_NORMALIZE           : 'NORMALIZE';
KW_NOT                 : 'NOT';
KW_NTH_VALUE           : 'NTH_VALUE';
KW_NTILE               : 'NTILE';
KW_NULL                : 'NULL';
KW_NULLIF              : 'NULLIF';
KW_NUMERIC             : 'NUMERIC';
KW_OCCURRENCES_REGEX   : 'OCCURRENCES_REGEX';
KW_OCTET_LENGTH        : 'OCTET_LENGTH';
KW_OF                  : 'OF';
KW_OFFSET              : 'OFFSET';
KW_OLD                 : 'OLD';
KW_OMIT                : 'OMIT';
KW_ON                  : 'ON';
KW_ONE                 : 'ONE';
KW_ONLY                : 'ONLY';
KW_OPEN                : 'OPEN';
KW_OR                  : 'OR';
KW_ORDER               : 'ORDER';
KW_ORDINAL             : 'ORDINAL';
KW_OUT                 : 'OUT';
KW_OUTER               : 'OUTER';
KW_OVER                : 'OVER';
KW_OVERLAPS            : 'OVERLAPS';
KW_OVERLAY             : 'OVERLAY';
KW_OVERWRITE           : 'OVERWRITE';
KW_OVERWRITING         : 'OVERWRITING';
KW_PARAMETER           : 'PARAMETER';
KW_PARTITION           : 'PARTITION';
KW_PARTITIONED         : 'PARTITIONED';
KW_PARTITIONS          : 'PARTITIONS';
KW_PATTERN             : 'PATTERN';
KW_PER                 : 'PER';
KW_PERCENT             : 'PERCENT';
KW_PERCENTILE_CONT     : 'PERCENTILE_CONT';
KW_PERCENTILE_DISC     : 'PERCENTILE_DISC';
KW_PERCENT_RANK        : 'PERCENT_RANK';
KW_PERIOD              : 'PERIOD';
KW_PERMUTE             : 'PERMUTE';
KW_PIVOT               : 'PIVOT';
KW_PORTION             : 'PORTION';
KW_POSITION            : 'POSITION';
KW_POSITION_REGEX      : 'POSITION_REGEX';
KW_POWER               : 'POWER';
KW_PRECEDES            : 'PRECEDES';
KW_PRECISION           : 'PRECISION';
KW_PREPARE             : 'PREPARE';
KW_PREV                : 'PREV';
KW_PRIMARY             : 'PRIMARY';
KW_PROCEDURE           : 'PROCEDURE';
KW_QUALIFY             : 'QUALIFY';
KW_QUARTERS            : 'QUARTERS';
KW_RANGE               : 'RANGE';
KW_RANK                : 'RANK';
KW_RAW                 : 'RAW';
KW_READS               : 'READS';
KW_REAL                : 'REAL';
KW_RECURSIVE           : 'RECURSIVE';
KW_REF                 : 'REF';
KW_REFERENCES          : 'REFERENCES';
KW_REFERENCING         : 'REFERENCING';
KW_REGR_AVGX           : 'REGR_AVGX';
KW_REGR_AVGY           : 'REGR_AVGY';
KW_REGR_COUNT          : 'REGR_COUNT';
KW_REGR_INTERCEPT      : 'REGR_INTERCEPT';
KW_REGR_R2             : 'REGR_R2';
KW_REGR_SLOPE          : 'REGR_SLOPE';
KW_REGR_SXX            : 'REGR_SXX';
KW_REGR_SXY            : 'REGR_SXY';
KW_REGR_SYY            : 'REGR_SYY';
KW_RELEASE             : 'RELEASE';
KW_RENAME              : 'RENAME';
KW_RESET               : 'RESET';
KW_RESULT              : 'RESULT';
KW_RETURN              : 'RETURN';
KW_RETURNS             : 'RETURNS';
KW_REVOKE              : 'REVOKE';
KW_RIGHT               : 'RIGHT';
KW_RLIKE               : 'RLIKE';
KW_ROLLBACK            : 'ROLLBACK';
KW_ROLLUP              : 'ROLLUP';
KW_ROW                 : 'ROW';
KW_ROWS                : 'ROWS';
KW_ROW_NUMBER          : 'ROW_NUMBER';
KW_RUNNING             : 'RUNNING';
KW_SAFE_CAST           : 'SAFE_CAST';
KW_SAFE_OFFSET         : 'SAFE_OFFSET';
KW_SAFE_ORDINAL        : 'SAFE_ORDINAL';
KW_SATURDAY            : 'SATURDAY';
KW_SAVEPOINT           : 'SAVEPOINT';
KW_SCALA               : 'SCALA';
KW_SCOPE               : 'SCOPE';
KW_SCROLL              : 'SCROLL';
KW_SEARCH              : 'SEARCH';
KW_SECOND              : 'SECOND';
KW_SEEK                : 'SEEK';
KW_SELECT              : 'SELECT';
KW_SENSITIVE           : 'SENSITIVE';
KW_SEPARATOR           : 'SEPARATOR';
KW_SESSION_USER        : 'SESSION_USER';
KW_SET                 : 'SET';
KW_SHOW                : 'SHOW';
KW_SIMILAR             : 'SIMILAR';
KW_SKIP                : 'SKIP';
KW_SMALLINT            : 'SMALLINT';
KW_SOME                : 'SOME';
KW_SPECIFIC            : 'SPECIFIC';
KW_SPECIFICTYPE        : 'SPECIFICTYPE';
KW_SQL                 : 'SQL';
KW_SQLEXCEPTION        : 'SQLEXCEPTION';
KW_SQLSTATE            : 'SQLSTATE';
KW_SQLWARNING          : 'SQLWARNING';
KW_SQRT                : 'SQRT';
KW_START               : 'START';
KW_STATEMENT           : 'STATEMENT';
KW_STATIC              : 'STATIC';
KW_STATISTICS          : 'STATISTICS';
KW_STDDEV_POP          : 'STDDEV_POP';
KW_STDDEV_SAMP         : 'STDDEV_SAMP';
KW_STREAM              : 'STREAM';
KW_STRING              : 'STRING';
KW_STRING_AGG          : 'STRING_AGG';
KW_SUBMULTISET         : 'SUBMULTISET';
KW_SUBSET              : 'SUBSET';
KW_SUBSTRING           : 'SUBSTRING';
KW_SUBSTRING_REGEX     : 'SUBSTRING_REGEX';
KW_SUCCEEDS            : 'SUCCEEDS';
KW_SUM                 : 'SUM';
KW_SUNDAY              : 'SUNDAY';
KW_SYMMETRIC           : 'SYMMETRIC';
KW_SYSTEM              : 'SYSTEM';
KW_SYSTEM_TIME         : 'SYSTEM_TIME';
KW_SYSTEM_USER         : 'SYSTEM_USER';
KW_TABLE               : 'TABLE';
KW_TABLES              : 'TABLES';
KW_TABLESAMPLE         : 'TABLESAMPLE';
KW_THEN                : 'THEN';
KW_THURSDAY            : 'THURSDAY';
KW_TIME                : 'TIME';
KW_TIMESTAMP           : 'TIMESTAMP';
KW_TIMESTAMP_DIFF      : 'TIMESTAMP_DIFF';
KW_TIMESTAMP_LTZ       : 'TIMESTAMP_LTZ';
KW_TIMESTAMP_TRUNC     : 'TIMESTAMP_TRUNC';
KW_TIMEZONE_HOUR       : 'TIMEZONE_HOUR';
KW_TIMEZONE_MINUTE     : 'TIMEZONE_MINUTE';
KW_TIME_DIFF           : 'TIME_DIFF';
KW_TIME_TRUNC          : 'TIME_TRUNC';
KW_TINYINT             : 'TINYINT';
KW_TO                  : 'TO';
KW_TRAILING            : 'TRAILING';
KW_TRANSLATE           : 'TRANSLATE';
KW_TRANSLATE_REGEX     : 'TRANSLATE_REGEX';
KW_TRANSLATION         : 'TRANSLATION';
KW_TREAT               : 'TREAT';
KW_TRIGGER             : 'TRIGGER';
KW_TRIM                : 'TRIM';
KW_TRIM_ARRAY          : 'TRIM_ARRAY';
KW_TRUE                : 'TRUE';
KW_TRUNCATE            : 'TRUNCATE';
KW_TRY_CAST            : 'TRY_CAST';
KW_TUESDAY             : 'TUESDAY';
KW_UESCAPE             : 'UESCAPE';
KW_UNION               : 'UNION';
KW_UNIQUE              : 'UNIQUE';
KW_UNKNOWN             : 'UNKNOWN';
KW_UNNEST              : 'UNNEST';
KW_UNPIVOT             : 'UNPIVOT';
KW_UPDATE              : 'UPDATE';
KW_UPPER               : 'UPPER';
KW_UPSERT              : 'UPSERT';
KW_USE                 : 'USE';
KW_USER                : 'USER';
KW_USING               : 'USING';
KW_VALUE               : 'VALUE';
KW_VALUES              : 'VALUES';
KW_VALUE_OF            : 'VALUE_OF';
KW_VARBINARY           : 'VARBINARY';
KW_VARCHAR             : 'VARCHAR';
KW_VARYING             : 'VARYING';
KW_VAR_POP             : 'VAR_POP';
KW_VAR_SAMP            : 'VAR_SAMP';
KW_VERSIONING          : 'VERSIONING';
KW_VIEWS               : 'VIEWS';
KW_VIRTUAL             : 'VIRTUAL';
KW_WATERMARK           : 'WATERMARK';
KW_WATERMARKS          : 'WATERMARKS';
KW_WEDNESDAY           : 'WEDNESDAY';
KW_WEEKS               : 'WEEKS';
KW_WHEN                : 'WHEN';
KW_WHENEVER            : 'WHENEVER';
KW_WHERE               : 'WHERE';
KW_WIDTH_BUCKET        : 'WIDTH_BUCKET';
KW_WINDOW              : 'WINDOW';
KW_WITH                : 'WITH';
KW_WITHIN              : 'WITHIN';
KW_WITHOUT             : 'WITHOUT';
KW_YEAR                : 'YEAR';

/**
 * Non-Reserved Keywords
 * Keywords that are used in the syntax rules but do not exist in the above keyword list section.
 * Please keep the keyword in alphabetical order if new keyword is added.
 * New non-reserved keywords should also be added to the nonReservedKeywords rule in FlinkSqlParser.g4 file.
 */
KW_ADD                 : 'ADD';
KW_AFTER               : 'AFTER';
KW_ASC                 : 'ASC';
KW_CASCADE             : 'CASCADE';
KW_CATALOG             : 'CATALOG';
KW_CENTURY             : 'CENTURY';
KW_CONFIG              : 'CONFIG';
KW_CONSTRAINTS         : 'CONSTRAINTS';
KW_CUMULATE            : 'CUMULATE';
KW_DATA                : 'DATA';
KW_DATABASE            : 'DATABASE';
KW_DAYS                : 'DAYS';
KW_DECADE              : 'DECADE';
KW_DESC                : 'DESC';
KW_DESCRIPTOR          : 'DESCRIPTOR';
KW_DIV                 : 'DIV';
KW_ENGINE              : 'ENGINE';
KW_EPOCH               : 'EPOCH';
KW_EXCLUDING           : 'EXCLUDING';
KW_FILE                : 'FILE';
KW_FIRST               : 'FIRST';
KW_GENERATED           : 'GENERATED';
KW_HOP                 : 'HOP';
KW_HOURS               : 'HOURS';
KW_IGNORE              : 'IGNORE';
KW_INCLUDING           : 'INCLUDING';
KW_JAR                 : 'JAR';
KW_JARS                : 'JARS';
KW_JAVA                : 'JAVA';
KW_KEY                 : 'KEY';
KW_LAST                : 'LAST';
KW_LOAD                : 'LOAD';
KW_MAP                 : 'MAP';
KW_MICROSECOND         : 'MICROSECOND';
KW_MILLENNIUM          : 'MILLENNIUM';
KW_MILLISECOND         : 'MILLISECOND';
KW_MINUTES             : 'MINUTES';
KW_MONTHS              : 'MONTHS';
KW_NANOSECOND          : 'NANOSECOND';
KW_NULLS               : 'NULLS';
KW_OPTIONS             : 'OPTIONS';
KW_PAST                : 'PAST';
KW_PLAN                : 'PLAN';
KW_PRECEDING           : 'PRECEDING';
KW_PYTHON              : 'PYTHON';
KW_PYTHON_ARCHIVES     : 'PYTHON_ARCHIVES';
KW_PYTHON_DEPENDENCIES : 'PYTHON_DEPENDENCIES';
KW_PYTHON_FILES        : 'PYTHON_FILES';
KW_PYTHON_JAR          : 'PYTHON_JAR';
KW_PYTHON_PARAMETER    : 'PYTHON_PARAMETER';
KW_PYTHON_REQUIREMENTS : 'PYTHON_REQUIREMENTS';
KW_QUARTER             : 'QUARTER';
KW_REMOVE              : 'REMOVE';
KW_RESTRICT            : 'RESTRICT';
KW_SECONDS             : 'SECONDS';
KW_SESSION             : 'SESSION';
KW_SETS                : 'SETS';
KW_SIZE                : 'SIZE';
KW_SLIDE               : 'SLIDE';
KW_STEP                : 'STEP';
KW_TEMPORARY           : 'TEMPORARY';
KW_TIMECOL             : 'TIMECOL';
KW_TUMBLE              : 'TUMBLE';
KW_UNLOAD              : 'UNLOAD';
KW_VIEW                : 'VIEW';
KW_WEEK                : 'WEEK';
KW_YEARS               : 'YEARS';
KW_ZONE                : 'ZONE';

// Operators. Comparation

EQUAL_SYMBOL       : '=';
GREATER_SYMBOL     : '>';
LESS_SYMBOL        : '<';
EXCLAMATION_SYMBOL : '!';

// Operators. Bit

BIT_NOT_OP : '~';
BIT_OR_OP  : '|';
BIT_AND_OP : '&';
BIT_XOR_OP : '^';

// Constructors symbols

DOT                  : '.';
LS_BRACKET           : '[';
RS_BRACKET           : ']';
LR_BRACKET           : '(';
RR_BRACKET           : ')';
LB_BRACKET           : '{';
RB_BRACKET           : '}';
COMMA                : ',';
SEMICOLON            : ';';
AT_SIGN              : '@';
SINGLE_QUOTE_SYMB    : '\'';
DOUBLE_QUOTE_SYMB    : '"';
REVERSE_QUOTE_SYMB   : '`';
COLON_SYMB           : ':';
ASTERISK_SIGN        : '*';
UNDERLINE_SIGN       : '_';
HYPNEN_SIGN          : '-';
ADD_SIGN             : '+';
PENCENT_SIGN         : '%';
DOUBLE_VERTICAL_SIGN : '||';
DOUBLE_HYPNEN_SIGN   : '--';
SLASH_SIGN           : '/';
QUESTION_MARK_SIGN   : '?';
DOUBLE_RIGHT_ARROW   : '=>';
STRING_LITERAL       : DQUOTA_STRING | SQUOTA_STRING | BQUOTA_STRING;
DIG_LITERAL          : DEC_DIGIT+;
REAL_LITERAL: (DEC_DIGIT+)? '.' DEC_DIGIT+
    | DEC_DIGIT+ '.' EXPONENT_NUM_PART
    | (DEC_DIGIT+)? '.' (DEC_DIGIT+ EXPONENT_NUM_PART)
    | DEC_DIGIT+ EXPONENT_NUM_PART;
BIT_STRING : BIT_STRING_L;
ID_LITERAL : ID_LITERAL_FRAG;

fragment JAR_FILE_PARTTARN : '`' ( '\\' . | '``' | ~('`' | '\\'))* '`';
fragment EXPONENT_NUM_PART : 'E' [-+]? DEC_DIGIT+;
fragment ID_LITERAL_FRAG   : [A-Z_0-9]*? [A-Z_]+? [A-Z_0-9]*;
fragment DEC_DIGIT         : [0-9];
fragment DEC_LETTER        : [A-Z];
fragment DQUOTA_STRING     : '"' ( '\\' . | '""' | ~('"' | '\\'))* '"';
fragment SQUOTA_STRING     : '\'' ('\\' . | '\'\'' | ~('\'' | '\\'))* '\'';
fragment BIT_STRING_L      : 'B' '\'' [01]+ '\'';
fragment BQUOTA_STRING     : '`' ( '\\' . | '``' | ~('`' | '\\'))* '`';