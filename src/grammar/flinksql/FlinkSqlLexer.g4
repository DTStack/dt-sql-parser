lexer grammar FlinkSqlLexer;

// SKIP

SPACE:                               [ \t\r\n]+    -> channel(HIDDEN);
COMMENT_INPUT:                       '/*' .*? '*/' -> channel(HIDDEN);
LINE_COMMENT:                        (
                                       ('--' | '#') ~[\r\n]* ('\r'? '\n' | EOF)
                                       | '--' ('\r'? '\n' | EOF)
                                     ) -> channel(HIDDEN);

// List of keywords that are not reserved.
// Please keep the keyword in alphabetical order if new keyword is added.
// Please add it to the nonReservedKeywords rule if new keyword is added.
// Reference link https://github.com/apache/flink/blob/release-1.16/flink-table/flink-sql-parser/src/main/codegen/data/Parser.tdd

KW_ADD:                              'ADD';
KW_ADMIN:                            'ADMIN';
KW_AFTER:                            'AFTER';
KW_ANALYZE:                          'ANALYZE';
KW_ASC:                              'ASC';
KW_BEFORE:                           'BEFORE';
KW_BYTES:                            'BYTES';
KW_CASCADE:                          'CASCADE';
KW_CATALOG:                          'CATALOG';
KW_CATALOGS:                         'CATALOGS';
KW_CENTURY:                          'CENTURY';
KW_CHAIN:                            'CHAIN';
KW_CHANGELOG_MODE:                   'CHANGELOG_MODE';
KW_CHARACTERS:                       'CHARACTERS';
KW_COMMENT:                          'COMMENT';
KW_COMPACT:                          'COMPACT';
KW_COLUMNS:                          'COLUMNS';
KW_CONSTRAINTS:                      'CONSTRAINTS';
KW_CONSTRUCTOR:                      'CONSTRUCTOR';
KW_CUMULATE:                         'CUMULATE';
KW_DATA:                             'DATA';
KW_DATABASE:                         'DATABASE';
KW_DATABASES:                        'DATABASES';
KW_DAYS:                             'DAYS';
KW_DECADE:                           'DECADE';
KW_DEFINED:                          'DEFINED';
KW_DESC:                             'DESC';
KW_DESCRIPTOR:                       'DESCRIPTOR';
KW_DIV:                              'DIV';
KW_ENCODING:                         'ENCODING';
KW_ENFORCED:                         'ENFORCED';
KW_ENGINE:                           'ENGINE';
KW_ERROR:                            'ERROR';
KW_ESTIMATED_COST:                   'ESTIMATED_COST';
KW_EXCEPTION:                        'EXCEPTION';
KW_EXCLUDE:                          'EXCLUDE';
KW_EXCLUDING:                        'EXCLUDING';
KW_EXTENDED:                         'EXTENDED';
KW_FILE:                             'FILE';
KW_FINAL:                            'FINAL';
KW_FIRST:                            'FIRST';
KW_FOLLOWING:                        'FOLLOWING';
KW_FORMAT:                           'FORMAT';
KW_FORTRAN:                          'FORTRAN';
KW_FOUND:                            'FOUND';
KW_FRAC_SECOND:                      'FRAC_SECOND';
KW_FUNCTIONS:                        'FUNCTIONS';
KW_GENERAL:                          'GENERAL';
KW_GENERATED:                        'GENERATED';
KW_GO:                               'GO';
KW_GOTO:                             'GOTO';
KW_GRANTED:                          'GRANTED';
KW_HOP:                              'HOP';
KW_HOURS:                            'HOURS';
KW_IF:                               'IF';
KW_IGNORE:                           'IGNORE';
KW_INCREMENT:                        'INCREMENT';
KW_INPUT:                            'INPUT';
KW_INVOKER:                          'INVOKER';
KW_JAR:                              'JAR';
KW_JARS:                             'JARS';
KW_JAVA:                             'JAVA';
KW_JSON:                             'JSON';
KW_JSON_EXECUTION_PLAN:              'JSON_EXECUTION_PLAN';
KW_KEY:                              'KEY';
KW_KEY_MEMBER:                       'KEY_MEMBER';
KW_KEY_TYPE:                         'KEY_TYPE';
KW_LABEL:                            'LABEL';
KW_LAST:                             'LAST';
KW_LENGTH:                           'LENGTH';
KW_LEVEL:                            'LEVEL';
KW_LOAD:                             'LOAD';
KW_MAP:                              'MAP';
KW_MICROSECOND:                      'MICROSECOND';
KW_MILLENNIUM:                       'MILLENNIUM';
KW_MILLISECOND:                      'MILLISECOND';
KW_MINUTES:                          'MINUTES';
KW_MINVALUE:                         'MINVALUE';
KW_MODIFY:                           'MODIFY';
KW_MODULES:                          'MODULES';
KW_MONTHS:                           'MONTHS';
KW_NANOSECOND:                       'NANOSECOND';
KW_NULLS:                            'NULLS';
KW_NUMBER:                           'NUMBER';
KW_OPTION:                           'OPTION';
KW_OPTIONS:                          'OPTIONS';
KW_ORDERING:                         'ORDERING';
KW_OUTPUT:                           'OUTPUT';
KW_OVERWRITE:                        'OVERWRITE';
KW_OVERWRITING:                      'OVERWRITING';
KW_PARTITIONED:                      'PARTITIONED';
KW_PARTITIONS:                       'PARTITIONS';
KW_PASSING:                          'PASSING';
KW_PAST:                             'PAST';
KW_PATH:                             'PATH';
KW_PLACING:                          'PLACING';
KW_PLAN:                             'PLAN';
KW_PRECEDING:                        'PRECEDING';
KW_PRESERVE:                         'PRESERVE';
KW_PRIOR:                            'PRIOR';
KW_PRIVILEGES:                       'PRIVILEGES';
KW_PUBLIC:                           'PUBLIC';
KW_PYTHON:                           'PYTHON';
KW_PYTHON_FILES:                     'PYTHON_FILES';
KW_PYTHON_REQUIREMENTS:              'PYTHON_REQUIREMENTS';
KW_PYTHON_DEPENDENCIES:              'PYTHON_DEPENDENCIES';
KW_PYTHON_JAR:                       'PYTHON_JAR';
KW_PYTHON_ARCHIVES:                  'PYTHON_ARCHIVES';
KW_PYTHON_PARAMETER:                 'PYTHON_PARAMETER';
KW_QUARTER:                          'QUARTER';
KW_RAW:                              'RAW';
KW_READ:                             'READ';
KW_RELATIVE:                         'RELATIVE';
KW_REMOVE:                           'REMOVE';
KW_RENAME:                           'RENAME';
KW_REPLACE:                          'REPLACE';
KW_RESPECT:                          'RESPECT';
KW_RESTART:                          'RESTART';
KW_RESTRICT:                         'RESTRICT';
KW_ROLE:                             'ROLE';
KW_ROW_COUNT:                        'ROW_COUNT';
KW_SCALA:                            'SCALA';
KW_SCALAR:                           'SCALAR';
KW_SCALE:                            'SCALE';
KW_SCHEMA:                           'SCHEMA';
KW_SECONDS:                          'SECONDS';
KW_SECTION:                          'SECTION';
KW_SECURITY:                         'SECURITY';
KW_SELF:                             'SELF';
KW_SERVER:                           'SERVER';
KW_SERVER_NAME:                      'SERVER_NAME';
KW_SESSION:                          'SESSION';
KW_SETS:                             'SETS';
KW_SIMPLE:                           'SIMPLE';
KW_SIZE:                             'SIZE';
KW_SLIDE:                            'SLIDE';
KW_SOURCE:                           'SOURCE';
KW_SPACE:                            'SPACE';
KW_STATE:                            'STATE';
KW_STATEMENT:                        'STATEMENT';
KW_STEP:                             'STEP';
KW_STRING:                           'STRING';
KW_STRUCTURE:                        'STRUCTURE';
KW_STYLE:                            'STYLE';
KW_TABLES:                           'TABLES';
KW_TEMPORARY:                        'TEMPORARY';
KW_TIMECOL:                          'TIMECOL';
KW_TIMESTAMP_LTZ:                    'TIMESTAMP_LTZ';
KW_TIMESTAMPADD:                     'TIMESTAMPADD';
KW_TIMESTAMPDIFF:                    'TIMESTAMPDIFF';
KW_TRANSFORM:                        'TRANSFORM';
KW_TUMBLE:                           'TUMBLE';
KW_TYPE:                             'TYPE';
KW_UNDER:                            'UNDER';
KW_UNLOAD:                           'UNLOAD';
KW_USAGE:                            'USAGE';
KW_USE:                              'USE';
KW_UTF16:                            'UTF16';
KW_UTF32:                            'UTF32';
KW_UTF8:                             'UTF8';
KW_VERSION:                          'VERSION';
KW_VIEW:                             'VIEW';
KW_VIEWS:                            'VIEWS';
KW_VIRTUAL:                          'VIRTUAL';
KW_WATERMARK:                        'WATERMARK';
KW_WATERMARKS:                       'WATERMARKS';
KW_WEEK:                             'WEEK';
KW_WORK:                             'WORK';
KW_WRAPPER:                          'WRAPPER';
KW_YEARS:                            'YEARS';
KW_ZONE:                             'ZONE';


// Reserved Keywords
// Please keep the keyword in alphabetical order if new keyword is added.
// Please add it to the reservedKeywords rule if new keyword is added.
// Reference link https://calcite.apache.org/docs/reference.html

KW_ABS:                              'ABS';
KW_ALL:                              'ALL';
ALLOW:                               'ALLOW';
KW_ALTER :                           'ALTER';
KW_AND:                              'AND';
KW_ANY:                              'ANY';
KW_ARE:                              'ARE';
KW_ARRAY:                            'ARRAY';
KW_AS:                               'AS';
KW_AT:                               'AT';
KW_AVG:                              'AVG';
KW_BEGIN:                            'BEGIN';
KW_BETWEEN:                          'BETWEEN';
KW_BIGINT:                           'BIGINT';
KW_BINARY:                           'BINARY';
KW_BIT:                              'BIT';
KW_BLOB:                             'BLOB';
KW_BOOLEAN:                          'BOOLEAN';
KW_BOTH:                             'BOTH';
KW_BY:                               'BY';
KW_CALL:                             'CALL';
KW_CALLED:                           'CALLED';
KW_CASCADED:                         'CASCADED';
KW_CASE:                             'CASE';
KW_CAST:                             'CAST';
KW_CEIL:                             'CEIL';
KW_CHAR:                             'CHAR';
KW_CHARACTER:                        'CHARACTER';
KW_CHECK:                            'CHECK';
KW_CLOB:                             'CLOB';
KW_CLOSE:                            'CLOSE';
KW_COALESCE:                         'COALESCE';
KW_COLLATE:                          'COLLATE';
KW_COLLECT:                          'COLLECT';
KW_COLUMN:                           'COLUMN';
KW_COMMIT:                           'COMMIT';
KW_CONNECT:                          'CONNECT';
KW_CONSTRAINT:                       'CONSTRAINT';
KW_CONTAINS:                         'CONTAINS';
KW_CONVERT:                          'CONVERT';
KW_COUNT:                            'COUNT';
KW_CREATE:                           'CREATE';
KW_CROSS:                            'CROSS';
KW_CUBE:                             'CUBE';
KW_CURRENT:                          'CURRENT';
KW_CURSOR:                           'CURSOR';
KW_CYCLE:                            'CYCLE';
KW_DATE:                             'DATE';
KW_DATETIME:                         'DATETIME';
KW_DAY:                              'DAY';
KW_DEC:                              'DEC';
KW_DECIMAL:                          'DECIMAL';
KW_DECLARE:                          'DECLARE';
KW_DEFAULT:                          'DEFAULT';
KW_DEFINE:                           'DEFINE';
KW_DELETE:                           'DELETE';
KW_DESCRIBE:                         'DESCRIBE';
KW_DISTINCT:                         'DISTINCT';
KW_DOUBLE:                           'DOUBLE';
KW_DROP:                             'DROP';
KW_EACH:                             'EACH';
KW_ELSE:                             'ELSE';
KW_END:                              'END';
KW_EQUALS:                           'EQUALS';
KW_EXCEPT:                           'EXCEPT';
KW_EXECUTE:                          'EXECUTE';
KW_EXISTS:                           'EXISTS';
KW_EXPLAIN:                          'EXPLAIN';
KW_EXTERNAL:                         'EXTERNAL';
KW_EXTRACT:                          'EXTRACT';
KW_FALSE:                            'FALSE';
KW_FLOAT:                            'FLOAT';
KW_FOR:                              'FOR';
KW_FROM:                             'FROM';
KW_FULL:                             'FULL';
KW_FUNCTION:                         'FUNCTION';
KW_GLOBAL:                           'GLOBAL';
KW_GRANT:                            'GRANT';
KW_GROUP:                            'GROUP';
KW_GROUPING:                         'GROUPING';
KW_GROUPS:                           'GROUPS';
KW_HAVING:                           'HAVING';
KW_HOUR:                             'HOUR';
KW_IMPORT:                           'IMPORT';
KW_IN:                               'IN';
KW_INCLUDING:                        'INCLUDING';
KW_INNER:                            'INNER';
KW_INOUT:                            'INOUT';
KW_INSERT:                           'INSERT';
KW_INT:                              'INT';
KW_INTEGER:                          'INTEGER';
KW_INTERSECT:                        'INTERSECT';
KW_INTERVAL:                         'INTERVAL';
KW_INTO:                             'INTO';
KW_IS:                               'IS';
KW_JOIN:                             'JOIN';
KW_LAG:                              'LAG';
KW_LANGUAGE:                         'LANGUAGE';
KW_LATERAL:                          'LATERAL';
KW_LEADING:                          'LEADING';
KW_LEFT:                             'LEFT';
KW_LIKE:                             'LIKE';
KW_LIMIT:                            'LIMIT';
KW_LOCAL:                            'LOCAL';
KW_MATCH:                            'MATCH';
KW_MATCH_RECOGNIZE:                  'MATCH_RECOGNIZE';
KW_MEASURES:                         'MEASURES';
KW_MERGE:                            'MERGE';
KW_METADATA:                         'METADATA';
KW_MINUS:                            'MINUS';
KW_MINUTE:                           'MINUTE';
KW_MODIFIES:                         'MODIFIES';
KW_MODULE:                           'MODULE';
KW_MONTH:                            'MONTH';
KW_MULTISET:                         'MULTISET';
KW_NATURAL:                          'NATURAL';
KW_NEXT:                             'NEXT';
KW_NO:                               'NO';
KW_NONE:                             'NONE';
KW_NOT:                              'NOT';
KW_NULL:                             'NULL';
KW_NUMERIC:                          'NUMERIC';
KW_OF:                               'OF';
KW_OFFSET:                           'OFFSET';
KW_ON:                               'ON';
KW_ONE:                              'ONE';
KW_OR:                               'OR';
KW_ORDER:                            'ORDER';
KW_OUT:                              'OUT';
KW_OUTER:                            'OUTER';
KW_OVER:                             'OVER';
KW_OVERLAY:                          'OVERLAY';
KW_PARTITION:                        'PARTITION';
KW_PATTERN:                          'PATTERN';
KW_PER:                              'PER';
KW_PERCENT:                          'PERCENT';
KW_PERIOD:                           'PERIOD';
KW_POSITION:                         'POSITION';
KW_PRIMARY:                          'PRIMARY';
KW_RANGE:                            'RANGE';
KW_RANK:                             'RANK';
KW_RESET:                            'RESET';
KW_REVOKE:                           'REVOKE';
KW_RIGHT:                            'RIGHT';
KW_RLIKE:                            'RLIKE';
KW_ROLLBACK:                         'ROLLBACK';
KW_ROLLUP:                           'ROLLUP';
KW_ROW:                              'ROW';
KW_ROWS:                             'ROWS';
KW_SECOND:                           'SECOND';
KW_SELECT:                           'SELECT';
KW_SET:                              'SET';
KW_SHOW:                             'SHOW';
KW_SKIP:                             'SKIP';
KW_SMALLINT:                         'SMALLINT';
KW_START:                            'START';
KW_STATIC:                           'STATIC';
KW_SUBSTRING:                        'SUBSTRING';
KW_SUM:                              'SUM';
KW_SYSTEM:                           'SYSTEM';
KW_SYSTEM_TIME:                      'SYSTEM_TIME';
KW_SYSTEM_USER:                      'SYSTEM_USER';
KW_TABLE:                            'TABLE';
KW_TABLESAMPLE:                      'TABLESAMPLE';
KW_THEN:                             'THEN';
KW_TIME:                             'TIME';
KW_TIMESTAMP:                        'TIMESTAMP';
KW_TINYINT:                          'TINYINT';
KW_TO:                               'TO';
KW_TRUE:                             'TRUE';
KW_TRUNCATE:                         'TRUNCATE';
KW_UNION:                            'UNION';
KW_UNIQUE:                           'UNIQUE';
KW_UNKNOWN:                          'UNKNOWN';
KW_UNNEST:                           'UNNEST';
KW_UPPER:                            'UPPER';
KW_UPSERT:                           'UPSERT';
KW_USER:                             'USER';
KW_USING:                            'USING';
KW_VALUE:                            'VALUE';
KW_VALUES:                           'VALUES';
KW_VARBINARY:                        'VARBINARY';
KW_VARCHAR:                          'VARCHAR';
KW_WHEN:                             'WHEN';
KW_WHERE:                            'WHERE';
KW_WINDOW:                           'WINDOW';
KW_WITH:                             'WITH';
KW_WITHIN:                           'WITHIN';
KW_WITHOUT:                          'WITHOUT';
KW_YEAR:                             'YEAR';


// Operators. Comparation

EQUAL_SYMBOL:                        '=';
GREATER_SYMBOL:                      '>';
LESS_SYMBOL:                         '<';
EXCLAMATION_SYMBOL:                  '!';


// Operators. Bit

BIT_NOT_OP:                          '~';
BIT_OR_OP:                           '|';
BIT_AND_OP:                          '&';
BIT_XOR_OP:                          '^';


// Constructors symbols

DOT:                                 '.';
LS_BRACKET:                          '[';
RS_BRACKET:                          ']';
LR_BRACKET:                          '(';
RR_BRACKET:                          ')';
LB_BRACKET:                          '{';
RB_BRACKET:                          '}';
COMMA:                               ',';
SEMICOLON:                           ';';
AT_SIGN:                             '@';
SINGLE_QUOTE_SYMB:                   '\'';
DOUBLE_QUOTE_SYMB:                   '"';
REVERSE_QUOTE_SYMB:                  '`';
COLON_SYMB:                          ':';
ASTERISK_SIGN:                       '*';
UNDERLINE_SIGN:                      '_';
HYPNEN_SIGN:                         '-';
ADD_SIGN:                            '+';
PENCENT_SIGN:                        '%';
DOUBLE_VERTICAL_SIGN:                '||';
DOUBLE_HYPNEN_SIGN:                  '--';
SLASH_SIGN:                          '/';
QUESTION_MARK_SIGN:                  '?'; 
DOUBLE_RIGHT_ARROW:                        '=>';                
STRING_LITERAL:                      DQUOTA_STRING | SQUOTA_STRING | BQUOTA_STRING;
DIG_LITERAL:                         DEC_DIGIT+;
REAL_LITERAL:                        (DEC_DIGIT+)? '.' DEC_DIGIT+
                                     | DEC_DIGIT+ '.' EXPONENT_NUM_PART
                                     | (DEC_DIGIT+)? '.' (DEC_DIGIT+ EXPONENT_NUM_PART)
                                     | DEC_DIGIT+ EXPONENT_NUM_PART;
BIT_STRING:                          BIT_STRING_L;
ID_LITERAL:                          ID_LITERAL_FRAG;
FILE_PATH:                           FILE_PATH_STRING;

fragment FILE_PATH_STRING:           ([/\\] (~([/\\ ]))*)+;
fragment JAR_FILE_PARTTARN:          '`' ( '\\'. | '``' | ~('`'|'\\'))* '`';
fragment EXPONENT_NUM_PART:          'E' [-+]? DEC_DIGIT+;
fragment ID_LITERAL_FRAG:            [A-Z_0-9a-z]*?[A-Z_a-z]+?[A-Z_0-9a-z]*;
fragment DEC_DIGIT:                  [0-9];
fragment DEC_LETTER:                 [A-Za-z];
fragment DQUOTA_STRING:              '"' ( '\\'. | '""' | ~('"'| '\\') )* '"';
fragment SQUOTA_STRING:              '\'' ('\\'. | '\'\'' | ~('\'' | '\\'))* '\'';
fragment BIT_STRING_L:               'B' '\'' [01]+ '\'';
fragment BQUOTA_STRING:              '`' ( '\\'. | '``' | ~('`'|'\\'))* '`';