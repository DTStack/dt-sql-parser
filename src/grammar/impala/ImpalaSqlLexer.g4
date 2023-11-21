/*
Apache Impala grammar.
The MIT License (MIT).
Copyright (c) 2023, Michał Lorek.
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

lexer grammar ImpalaSqlLexer;

options { caseInsensitive = true; }

KW_ADD                                    : 'ADD';
KW_ALL                                    : 'ALL';
KW_ANALYTIC                               : 'ANALYTIC';
KW_ALTER                                  : 'ALTER';
KW_AND                                    : 'AND';
KW_ANY                                    : 'ANY';
KW_ANTI                                   : 'ANTI';
KW_ARRAY                                  : 'ARRAY';
KW_AS                                     : 'AS';
KW_ASC                                    : 'ASC';
KW_AT                                     : 'AT';
KW_AGGREGATE                              : 'AGGREGATE';
KW_AUTHORIZATION                          : 'AUTHORIZATION';
KW_BERNOULLI                              : 'BERNOULLI';
KW_BETWEEN                                : 'BETWEEN';
KW_BLOCK_SIZE                             : 'BLOCK_SIZE';
KW_PARTITIONED                            : 'PARTITIONED';
KW_PREPARE_FN                             : 'PREPARE_FN';
KW_EXTERNAL                               : 'EXTERNAL';
KW_CLOSEFN                                : 'CLOSEFN';
KW_SORT                                   : 'SORT';
KW_PURGE                                  : 'PURGE';
KW_STORED                                 : 'STORED';
KW_LOCATION                               : 'LOCATION';
KW_TBLPROPERTIES                          : 'TBLPROPERTIES';
KW_BY                                     : 'BY';
KW_CASCADE                                : 'CASCADE';
KW_CASE                                   : 'CASE';
KW_CAST                                   : 'CAST';
KW_CACHED                                 : 'CACHED';
KW_CHANGE                                 : 'CHANGE';
KW_COLUMN                                 : 'COLUMN';
KW_COLUMNS                                : 'COLUMNS';
KW_COMMENT                                : 'COMMENT';
KW_COMPRESSION                            : 'COMPRESSION';
KW_COMPUTE                                : 'COMPUTE';
KW_CREATE                                 : 'CREATE';
KW_CROSS                                  : 'CROSS';
KW_CURRENT                                : 'CURRENT';
KW_CURRENT_DATE                           : 'CURRENT_DATE';
KW_CURRENT_PATH                           : 'CURRENT_PATH';
KW_CURRENT_TIME                           : 'CURRENT_TIME';
KW_CURRENT_TIMESTAMP                      : 'CURRENT_TIMESTAMP';
KW_CURRENT_USER                           : 'CURRENT_USER';
KW_DATA                                   : 'DATA';
KW_DATABASE                               : 'DATABASE';
KW_DATABASES                              : 'DATABASES';
KW_DAY                                    : 'DAY';
KW_DAYS                                   : 'DAYS';
KW_DELETE                                 : 'DELETE';
KW_DEFAULT                                : 'DEFAULT';
KW_DELIMITED                              : 'DELIMITED';
KW_DISABLE                                : 'DISABLE';
KW_UPDATE                                 : 'UPDATE';
KW_DESC                                   : 'DESC';
KW_DESCRIBE                               : 'DESCRIBE';
KW_DISTINCT                               : 'DISTINCT';
KW_DROP                                   : 'DROP';
KW_ELSE                                   : 'ELSE';
KW_ENCODING                               : 'ENCODING';
KW_END                                    : 'END';
KW_ESCAPE                                 : 'ESCAPE';
KW_ESCAPED                                : 'ESCAPED';
KW_EXCEPT                                 : 'EXCEPT';
KW_EXCLUDING                              : 'EXCLUDING';
KW_EXISTS                                 : 'EXISTS';
KW_EXPLAIN                                : 'EXPLAIN';
KW_EXTRACT                                : 'EXTRACT';
KW_EXTENDED                               : 'EXTENDED';
KW_FALSE                                  : 'FALSE';
KW_FIELDS                                 : 'FIELDS';
KW_FILEFORMAT                             : 'FILEFORMAT';
KW_FILES                                  : 'FILES';
KW_FILTER                                 : 'FILTER';
KW_FIRST                                  : 'FIRST';
KW_FINALIZE_FN                            : 'FINALIZE_FN';
KW_FOLLOWING                              : 'FOLLOWING';
KW_FOR                                    : 'FOR';
KW_FORMAT                                 : 'FORMAT';
KW_FORMATTED                              : 'FORMATTED';
KW_FOREIGN                                : 'FOREIGN';
KW_FROM                                   : 'FROM';
KW_FULL                                   : 'FULL';
KW_FUNCTION                               : 'FUNCTION';
KW_FUNCTIONS                              : 'FUNCTIONS';
KW_GRANT                                  : 'GRANT';
KW_GROUP                                  : 'GROUP';
KW_GROUPING                               : 'GROUPING';
KW_HASH                                   : 'HASH';
KW_HAVING                                 : 'HAVING';
KW_HOUR                                   : 'HOUR';
KW_HOURS                                  : 'HOURS';
KW_IF                                     : 'IF';
KW_IN                                     : 'IN';
KW_INCLUDING                              : 'INCLUDING';
KW_INCREMENTAL                            : 'INCREMENTAL';
KW_INNER                                  : 'INNER';
KW_INPATH                                 : 'INPATH';
KW_INSERT                                 : 'INSERT';
KW_INTERSECT                              : 'INTERSECT';
KW_INTERVAL                               : 'INTERVAL';
KW_INTERMEDIATE                           : 'INTERMEDIATE';
KW_INTO                                   : 'INTO';
KW_INIT_FN                                : 'INIT_FN';
KW_INVALIDATE                             : 'INVALIDATE';
KW_IS                                     : 'IS';
KW_JOIN                                   : 'JOIN';
KW_KEY                                    : 'KEY';
KW_KUDU                                   : 'KUDU';
KW_LAST                                   : 'LAST';
KW_LATERAL                                : 'LATERAL';
KW_LEFT                                   : 'LEFT';
KW_LIKE                                   : 'LIKE';
KW_LIMIT                                  : 'LIMIT';
KW_LINES                                  : 'LINES';
KW_LOAD                                   : 'LOAD';
KW_LOCALTIME                              : 'LOCALTIME';
KW_LOCALTIMESTAMP                         : 'LOCALTIMESTAMP';
KW_METADATA                               : 'METADATA';
KW_MAP                                    : 'MAP';
KW_MINUTE                                 : 'MINUTE';
KW_MINUTES                                : 'MINUTES';
KW_MONTH                                  : 'MONTH';
KW_MONTHS                                 : 'MONTHS';
KW_MERGE_FN                               : 'MERGE_FN';
KW_NFC                                    : 'NFC';
KW_NFD                                    : 'NFD';
KW_NFKC                                   : 'NFKC';
KW_NFKD                                   : 'NFKD';
KW_NORMALIZE                              : 'NORMALIZE';
KW_NOT                                    : 'NOT';
KW_NULL                                   : 'NULL';
KW_NULLS                                  : 'NULLS';
KW_OFFSET                                 : 'OFFSET';
KW_ON                                     : 'ON';
KW_OPTION                                 : 'OPTION';
KW_OR                                     : 'OR';
KW_ORDER                                  : 'ORDER';
KW_ORDINALITY                             : 'ORDINALITY';
KW_OUTER                                  : 'OUTER';
KW_OWNER                                  : 'OWNER';
KW_OVER                                   : 'OVER';
KW_OVERWRITE                              : 'OVERWRITE';
KW_PARTITION                              : 'PARTITION';
KW_PARTITIONS                             : 'PARTITIONS';
KW_PARQUET                                : 'PARQUET';
KW_POSITION                               : 'POSITION';
KW_PRECEDING                              : 'PRECEDING';
KW_PRIMARY                                : 'PRIMARY';
KW_REPLICATION                            : 'REPLICATION';
KW_PRIVILEGES                             : 'PRIVILEGES';
KW_PROPERTIES                             : 'PROPERTIES';
KW_RANGE                                  : 'RANGE';
KW_RECOVER                                : 'RECOVER';
KW_RENAME                                 : 'RENAME';
KW_REPEATABLE                             : 'REPEATABLE';
KW_REPLACE                                : 'REPLACE';
KW_RESTRICT                               : 'RESTRICT';
KW_RETURNS                                : 'RETURNS';
KW_REVOKE                                 : 'REVOKE';
KW_REFRESH                                : 'REFRESH';
KW_REGEXP                                 : 'REGEXP';
KW_RLIKE                                  : 'RLIKE';
KW_RIGHT                                  : 'RIGHT';
KW_ROLE                                   : 'ROLE';
KW_ROLES                                  : 'ROLES';
KW_ROW                                    : 'ROW';
KW_ROWS                                   : 'ROWS';
KW_SCHEMA                                 : 'SCHEMA';
KW_SCHEMAS                                : 'SCHEMAS';
KW_SECOND                                 : 'SECOND';
KW_SECONDS                                : 'SECONDS';
KW_SELECT                                 : 'SELECT';
KW_SERDEPROPERTIES                        : 'SERDEPROPERTIES';
KW_SET                                    : 'SET';
KW_SEMI                                   : 'SEMI';
KW_SERVER                                 : 'SERVER';
KW_SHOW                                   : 'SHOW';
KW_SHUTDOWN                               : 'SHUTDOWN';
KW_SOME                                   : 'SOME';
KW_STATS                                  : 'STATS';
KW_STRUCT                                 : 'STRUCT';
KW_STRAIGHT_JOIN                          : 'STRAIGHT_JOIN';
KW_SUBSTRING                              : 'SUBSTRING';
KW_SYSTEM                                 : 'SYSTEM';
KW_SYMBOL                                 : 'SYMBOL';
KW_SERIALIZE_FN                           : 'SERIALIZE_FN';
KW_TABLE                                  : 'TABLE';
KW_TABLES                                 : 'TABLES';
KW_TABLESAMPLE                            : 'TABLESAMPLE';
KW_TERMINATED                             : 'TERMINATED ';
KW_THEN                                   : 'THEN';
KW_TO                                     : 'TO';
KW_TRUE                                   : 'TRUE';
KW_TRY_CAST                               : 'TRY_CAST';
KW_TRUNCATE                               : 'TRUNCATE';
KW_UNCACHED                               : 'UNCACHED';
KW_UESCAPE                                : 'UESCAPE';
KW_UNBOUNDED                              : 'UNBOUNDED';
KW_UNION                                  : 'UNION';
KW_UNNEST                                 : 'UNNEST';
KW_UNSET                                  : 'UNSET';
KW_USE                                    : 'USE';
KW_USER                                   : 'USER';
KW_USING                                  : 'USING';
KW_UPDATE_FN                              : 'UPDATE_FN';
KW_UPSERT                                 : 'UPSERT';
KW_URI                                    : 'URI';
KW_VALUE                                  : 'VALUE';
KW_VALUES                                 : 'VALUES';
KW_VIEW                                   : 'VIEW';
KW_VIEWS                                  : 'VIEWS';
KW_WHEN                                   : 'WHEN';
KW_WHERE                                  : 'WHERE';
KW_WITH                                   : 'WITH';
KW_YEAR                                   : 'YEAR';
KW_YEARS                                  : 'YEARS';
KW_TEXTFILE                               : 'TEXTFILE'; // 文本文件格式
KW_ORC                                    : 'ORC'; //ORC文件格式
KW_AVRO                                   : 'AVRO'; //Avro文件格式
KW_SEQUENCEFILE                           : 'SEQUENCEFILE'; //Sequence文件格式
KW_RCFILE                                 : 'RCFILE'; //RC文件格式
KW_REFERENCES                             : 'REFERENCES';
KW_NOVALIDATE                             : 'NOVALIDATE';
KW_RELY                                   : 'RELY';

STATS_NUMDVS   : '\'NUMDVS\'';
STATS_NUMNULLS : '\'NUMNULLS\'';
STATS_AVGSIZE  : '\'AVGSIZE\'';
STATS_MAXSIZE  : '\'MAXSIZE\'';

EQ  : '=';
NEQ : '<>' | '!=';
LT  : '<';
LTE : '<=';
GT  : '>';
GTE : '>=';
PLUS: '+';
MINUS: '-';
ASTERISK: '*';
SLASH: '/';
PERCENT: '%';
CONCAT: '||';

DOT : '.';
SEMICOLON: ';';
COMMA: ',';
COLON : ':' ;
LPAREN : '(' ;
RPAREN : ')' ;
LSQUARE : '[' ;
RSQUARE : ']' ;
LCURLY : '{';
RCURLY : '}';

BITWISEOR : '|';
QUESTION : '?';

RIGHT_ARROW : '->';

STRING
    : '\'' ( ~'\'' | '\'\'' )* '\''
    | '"' ( ~'"' | '""' )* '"'
    ;

UNICODE_STRING
    : 'U&\'' ( ~'\'' | '\'\'' )* '\''
    ;

// Note: we allow any character inside the binary literal and validate
// its a correct literal when the AST is being constructed. This
// allows us to provide more meaningful error messages to the user
BINARY_LITERAL
    :  'X\'' (~'\'')* '\''
    ;

INTEGER_VALUE
    : DIGIT+
    ;

DECIMAL_VALUE
    : DIGIT+ '.' DIGIT*
    | '.' DIGIT+
    ;

DOUBLE_VALUE
    : DIGIT+ ('.' DIGIT*)? EXPONENT
    | '.' DIGIT+ EXPONENT
    ;

IDENTIFIER
    : (LETTER | '_') (LETTER | DIGIT | '_' | '@' | ':')*
    ;

DIGIT_IDENTIFIER
    : DIGIT (LETTER | DIGIT | '_' | '@' | ':')+
    ;

QUOTED_IDENTIFIER
    : '"' ( ~'"' | '""' )* '"'
    ;

BACKQUOTED_IDENTIFIER
    : '`' ( ~'`' | '``' )* '`'
    ;

TIME_WITH_TIME_ZONE
    : 'TIME' WS 'WITH' WS 'TIME' WS 'ZONE'
    ;

TIMESTAMP_WITH_TIME_ZONE
    : 'TIMESTAMP' WS 'WITH' WS 'TIME' WS 'ZONE'
    ;

DOUBLE_PRECISION
    : 'DOUBLE' WS 'PRECISION'
    ;

fragment EXPONENT
    : 'E' [+-]? DIGIT+
    ;

fragment DIGIT
    : [0-9]
    ;

fragment LETTER
    : [A-Z]
    ;

SIMPLE_COMMENT
    : '--' ~[\r\n]* '\r'? '\n'? -> channel(HIDDEN)
    ;

BRACKETED_COMMENT
    : '/*' .*? '*/' -> channel(HIDDEN)
    ;

WS
    : [ \r\n\t]+ -> channel(HIDDEN)
    ;
