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

lexer grammar ImpalaLexer;

options { caseInsensitive = true; }

KW_ABORT_ON_ERROR                      : 'ABORT_ON_ERROR';
KW_ADD                                 : 'ADD';
KW_AGGREGATE                           : 'AGGREGATE';
KW_ALL                                 : 'ALL';
KW_ALLOW_ERASURE_CODED_FILES           : 'ALLOW_ERASURE_CODED_FILES';
KW_ALLOW_UNSUPPORTED_FORMATS           : 'ALLOW_UNSUPPORTED_FORMATS';
KW_ALTER                               : 'ALTER';
KW_ANALYTIC                            : 'ANALYTIC';
KW_ANALYZE                             : 'ANALYZE';
KW_ANTI                                : 'ANTI';
KW_APPX_COUNT_DISTINCT                 : 'APPX_COUNT_DISTINCT';
KW_ARRAY                               : 'ARRAY';
KW_AS                                  : 'AS';
KW_ASC                                 : 'ASC';
KW_AUTHORIZATION                       : 'AUTHORIZATION';
KW_AUTO_ENCODING                       : 'AUTO_ENCODING';
KW_AVRO                                : 'AVRO';
KW_BATCH_SIZE                          : 'BATCH_SIZE';
KW_BIGINT                              : 'BIGINT';
KW_BIT_SHIFFLE                         : 'BIT_SHIFFLE';
KW_BLOCK_SIZE                          : 'BLOCK_SIZE';
KW_BOOLEAN                             : 'BOOLEAN';
KW_BROADCAST_BYTES_LIMIT               : 'BROADCAST_BYTES_LIMIT';
KW_BUFFER_POOL_LIMIT                   : 'BUFFER_POOL_LIMIT';
KW_BY                                  : 'BY';
KW_CACHED                              : 'CACHED';
KW_CASCADE                             : 'CASCADE';
KW_CHANGE                              : 'CHANGE';
KW_CHAR                                : 'CHAR';
KW_CLOSEFN                             : 'CLOSEFN';
KW_COLUMN                              : 'COLUMN';
KW_COLUMNS                             : 'COLUMNS';
KW_COMMENT                             : 'COMMENT';
KW_COMPRESSION                         : 'COMPRESSION';
KW_COMPRESSION_CODEC                   : 'COMPRESSION_CODEC';
KW_COMPUTE                             : 'COMPUTE';
KW_COMPUTE_STATS_MIN_SAMPLE_SIZE       : 'COMPUTE_STATS_MIN_SAMPLE_SIZE';
KW_CREATE                              : 'CREATE';
KW_CROSS                               : 'CROSS';
KW_CURRENT                             : 'CURRENT';
KW_DATA                                : 'DATA';
KW_DATABASE                            : 'DATABASE';
KW_DATABASES                           : 'DATABASES';
KW_DEBUG_ACTION                        : 'DEBUG_ACTION';
KW_DECIMAL                             : 'DECIMAL';
KW_DECIMAL_V2                          : 'DECIMAL_V2';
KW_DEFAULT                             : 'DEFAULT';
KW_DEFAULT_FILE_FORMAT                 : 'DEFAULT_FILE_FORMAT';
KW_DEFAULT_HINTS_INSERT_STATEMENT      : 'DEFAULT_HINTS_INSERT_STATEMENT';
KW_DEFAULT_JOIN_DISTRIBUTION_MODE      : 'DEFAULT_JOIN_DISTRIBUTION_MODE';
KW_DEFAULT_SPILLABLE_BUFFER_SIZE       : 'DEFAULT_SPILLABLE_BUFFER_SIZE';
KW_DEFAULT_TRANSACTIONAL_TYPE          : 'DEFAULT_TRANSACTIONAL_TYPE';
KW_DELETE                              : 'DELETE';
KW_DELETE_STATS_IN_TRUNCATE            : 'DELETE_STATS_IN_TRUNCATE';
KW_DELIMITED                           : 'DELIMITED';
KW_DESC                                : 'DESC';
KW_DESCRIBE                            : 'DESCRIBE';
KW_DICT_ENCODING                       : 'DICT_ENCODING';
KW_DISABLE_CODEGEN                     : 'DISABLE_CODEGEN';
KW_DISABLE_CODEGEN_ROWS_THRESHOLD      : 'DISABLE_CODEGEN_ROWS_THRESHOLD';
KW_DISABLE_HBASE_NUM_ROWS_ESTIMATE     : 'DISABLE_HBASE_NUM_ROWS_ESTIMATE';
KW_DISABLE_ROW_RUNTIME_FILTERING       : 'DISABLE_ROW_RUNTIME_FILTERING';
KW_DISABLE_STREAMING_PREAGGREGATIONS   : 'DISABLE_STREAMING_PREAGGREGATIONS';
KW_DISABLE_UNSAFE_SPILLS               : 'DISABLE_UNSAFE_SPILLS';
KW_DISTINCT                            : 'DISTINCT';
KW_DOUBLE                              : 'DOUBLE';
KW_DROP                                : 'DROP';
KW_ENABLE_EXPR_REWRITES                : 'ENABLE_EXPR_REWRITES';
KW_ENCODING                            : 'ENCODING';
KW_ESCAPED                             : 'ESCAPED';
KW_ESTIMATE                            : 'ESTIMATE';
KW_EXEC_SINGLE_NODE_ROWS_THRESHOLD     : 'EXEC_SINGLE_NODE_ROWS_THRESHOLD';
KW_EXEC_TIME_LIMIT_S                   : 'EXEC_TIME_LIMIT_S';
KW_EXISTS                              : 'EXISTS';
KW_EXPAND_COMPLEX_TYPES                : 'EXPAND_COMPLEX_TYPES';
KW_EXPLAIN                             : 'EXPLAIN';
KW_EXPLAIN_LEVEL                       : 'EXPLAIN_LEVEL';
KW_EXTENDED                            : 'EXTENDED';
KW_EXTERNAL                            : 'EXTERNAL';
KW_FALSE                               : 'FALSE';
KW_FETCH_ROWS_TIMEOUT_MS               : 'FETCH_ROWS_TIMEOUT_MS';
KW_FIELDS                              : 'FIELDS';
KW_FILEFORMAT                          : 'FILEFORMAT';
KW_FILES                               : 'FILES';
KW_FINALIZE_FN                         : 'FINALIZE_FN';
KW_FIRST                               : 'FIRST';
KW_FLOAT                               : 'FLOAT';
KW_FORMAT                              : 'FORMAT';
KW_FORMATTED                           : 'FORMATTED';
KW_FROM                                : 'FROM';
KW_FULL                                : 'FULL';
KW_FUNCTION                            : 'FUNCTION';
KW_FUNCTIONS                           : 'FUNCTIONS';
KW_GRANT                               : 'GRANT';
KW_GROUP                               : 'GROUP';
KW_HAVING                              : 'HAVING';
KW_HBASE_CACHE_BLOCKS                  : 'HBASE_CACHE_BLOCKS';
KW_HBASE_CACHING                       : 'HBASE_CACHING';
KW_IDLE_SESSION_TIMEOUT                : 'IDLE_SESSION_TIMEOUT';
KW_IF                                  : 'IF';
KW_IN                                  : 'IN';
KW_INCREMENTAL                         : 'INCREMENTAL';
KW_INIT_FN                             : 'INIT_FN';
KW_INNER                               : 'INNER';
KW_INPATH                              : 'INPATH';
KW_INSERT                              : 'INSERT';
KW_INT                                 : 'INT';
KW_INTERMEDIATE                        : 'INTERMEDIATE';
KW_INTO                                : 'INTO';
KW_INVALIDATE                          : 'INVALIDATE';
KW_IS                                  : 'IS';
KW_JOIN                                : 'JOIN';
KW_JOIN_ROWS_PRODUCED_LIMIT            : 'JOIN_ROWS_PRODUCED_LIMIT';
KW_KUDU_READ_MODE                      : 'KUDU_READ_MODE';
KW_LAST                                : 'LAST';
KW_LEFT                                : 'LEFT';
KW_LEVEL                               : 'LEVEL';
KW_LIKE                                : 'LIKE';
KW_LIMIT                               : 'LIMIT';
KW_LINES                               : 'LINES';
KW_LIVE_PROGRESS                       : 'LIVE_PROGRESS';
KW_LIVE_SUMMARY                        : 'LIVE_SUMMARY';
KW_LOAD                                : 'LOAD';
KW_LOCATION                            : 'LOCATION';
KW_LZ4                                 : 'LZ4';
KW_MAP                                 : 'MAP';
KW_MAX_ERRORS                          : 'MAX_ERRORS';
KW_MAX_MEM_ESTIMATE_FOR_ADMISSION      : 'MAX_MEM_ESTIMATE_FOR_ADMISSION';
KW_MAX_RESULT_SPOOLING_MEM             : 'MAX_RESULT_SPOOLING_MEM';
KW_MAX_ROW_SIZE                        : 'MAX_ROW_SIZE';
KW_MAX_SCAN_RANGE_LENGTH               : 'MAX_SCAN_RANGE_LENGTH';
KW_MAX_SPILLED_RESULT_SPOOLING_MEM     : 'MAX_SPILLED_RESULT_SPOOLING_MEM';
KW_MEM_LIMIT                           : 'MEM_LIMIT';
KW_MERGE_FN                            : 'MERGE_FN';
KW_METADATA                            : 'METADATA';
KW_MIN_SPILLABLE_BUFFER_SIZE           : 'MIN_SPILLABLE_BUFFER_SIZE';
KW_MT_DOP                              : 'MT_DOP';
KW_NONE                                : 'NONE';
KW_NOSHUFFLE                           : 'NOSHUFFLE';
KW_NOT                                 : 'NOT';
KW_NULL_                               : 'NULL';
KW_NULLS                               : 'NULLS';
KW_NUM_NODES                           : 'NUM_NODES';
KW_NUM_ROWS_PRODUCED_LIMIT             : 'NUM_ROWS_PRODUCED_LIMIT';
KW_NUM_SCANNER_THREADS                 : 'NUM_SCANNER_THREADS';
KW_OFFSET                              : 'OFFSET';
KW_ON                                  : 'ON';
KW_ONE                                 : 'ONE';
KW_OPTIMIZE_PARTITION_KEY_SCANS        : 'OPTIMIZE_PARTITION_KEY_SCANS';
KW_ORDER                               : 'ORDER';
KW_OUTER                               : 'OUTER';
KW_OVERWRITE                           : 'OVERWRITE';
KW_OWNER                               : 'OWNER';
KW_PARQUET                             : 'PARQUET';
KW_PARQUET_ANNOTATE_STRINGS_UTF8       : 'PARQUET_ANNOTATE_STRINGS_UTF8';
KW_PARQUET_ARRAY_RESOLUTION            : 'PARQUET_ARRAY_RESOLUTION';
KW_PARQUET_COMPRESSION_CODEC           : 'PARQUET_COMPRESSION_CODEC';
KW_PARQUET_DICTIONARY_FILTERING        : 'PARQUET_DICTIONARY_FILTERING';
KW_PARQUET_FALLBACK_SCHEMA_RESOLUTION  : 'PARQUET_FALLBACK_SCHEMA_RESOLUTION';
KW_PARQUET_FILE_SIZE                   : 'PARQUET_FILE_SIZE';
KW_PARQUET_OBJECT_STORE_SPLIT_SIZE     : 'PARQUET_OBJECT_STORE_SPLIT_SIZE';
KW_PARQUET_PAGE_ROW_COUNT_LIMIT        : 'PARQUET_PAGE_ROW_COUNT_LIMIT';
KW_PARQUET_READ_PAGE_INDEX             : 'PARQUET_READ_PAGE_INDEX';
KW_PARQUET_READ_STATISTICS             : 'PARQUET_READ_STATISTICS';
KW_PARQUET_WRITE_PAGE_INDEX            : 'PARQUET_WRITE_PAGE_INDEX';
KW_PARTITION                           : 'PARTITION';
KW_PARTITIONS                          : 'PARTITIONS';
KW_PERCENT                             : 'PERCENT';
KW_PLAIN_ENCODING                      : 'PLAIN_ENCODING';
KW_PREFETCH_MODE                       : 'PREFETCH_MODE';
KW_PREFIX_ENCODING                     : 'PREFIX_ENCODING';
KW_PREPARE_FN                          : 'PREPARE_FN';
KW_PURGE                               : 'PURGE';
KW_QUERY_TIMEOUT_S                     : 'QUERY_TIMEOUT_S';
KW_RANGE                               : 'RANGE';
KW_RCFILE                              : 'RCFILE';
KW_RECOVER                             : 'RECOVER';
KW_REFRESH                             : 'REFRESH';
KW_REFRESH_UPDATED_HMS_PARTITIONS      : 'REFRESH_UPDATED_HMS_PARTITIONS';
KW_RENAME                              : 'RENAME';
KW_REPEATABLE                          : 'REPEATABLE';
KW_REPLACE                             : 'REPLACE';
KW_REPLICA_PREFERENCE                  : 'REPLICA_PREFERENCE';
KW_REPLICATION                         : 'REPLICATION';
KW_REQUEST_POOL                        : 'REQUEST_POOL';
KW_RESOURCE_TRACE_RATIO                : 'RESOURCE_TRACE_RATIO';
KW_RESTRICT                            : 'RESTRICT';
KW_RETRY_FAILED_QUERIES                : 'RETRY_FAILED_QUERIES';
KW_RETURNS                             : 'RETURNS';
KW_REVOKE                              : 'REVOKE';
KW_RIGHT                               : 'RIGHT';
KW_RLE                                 : 'RLE';
KW_ROLE                                : 'ROLE';
KW_ROLES                               : 'ROLES';
KW_ROW                                 : 'ROW';
KW_RUNTIME_BLOOM_FILTER_SIZE           : 'RUNTIME_BLOOM_FILTER_SIZE';
KW_RUNTIME_FILTER_MAX_SIZE             : 'RUNTIME_FILTER_MAX_SIZE';
KW_RUNTIME_FILTER_MIN_SIZE             : 'RUNTIME_FILTER_MIN_SIZE';
KW_RUNTIME_FILTER_MODE                 : 'RUNTIME_FILTER_MODE';
KW_RUNTIME_FILTER_WAIT_TIME_MS         : 'RUNTIME_FILTER_WAIT_TIME_MS';
KW_S3_SKIP_INSERT_STAGING              : 'S3_SKIP_INSERT_STAGING';
KW_SAMPLE                              : 'SAMPLE';
KW_SCAN_BYTES_LIMIT                    : 'SCAN_BYTES_LIMIT';
KW_SCHEDULE_RANDOM_REPLICA             : 'SCHEDULE_RANDOM_REPLICA';
KW_SCHEMA                              : 'SCHEMA';
KW_SCHEMAS                             : 'SCHEMAS';
KW_SCRATCH_LIMIT                       : 'SCRATCH_LIMIT';
KW_SELECT                              : 'SELECT';
KW_SEQUENCEFILE                        : 'SEQUENCEFILE';
KW_SERDEPROPERTIES                     : 'SERDEPROPERTIES';
KW_SERIALIZE_FN                        : 'SERIALIZE_FN';
KW_SERVER                              : 'SERVER';
KW_SET                                 : 'SET';
KW_SHOW                                : 'SHOW';
KW_SHUFFLE                             : 'SHUFFLE';
KW_SHUFFLE_DISTINCT_EXPRS              : 'SHUFFLE_DISTINCT_EXPRS';
KW_SHUTDOWN                            : 'SHUTDOWN';
KW_SMALLINT                            : 'SMALLINT';
KW_SNAPPY                              : 'SNAPPY';
KW_SPOOL_QUERY_RESULTS                 : 'SPOOL_QUERY_RESULTS';
KW_STATISTICS                          : 'STATISTICS';
KW_STATS                               : 'STATS';
KW_STORED                              : 'STORED';
KW_STRAIGHT_JOIN                       : 'STRAIGHT_JOIN';
KW_STRING                              : 'STRING';
KW_STRUCT                              : 'STRUCT';
KW_SUPPORT_START_OVER                  : 'SUPPORT_START_OVER';
KW_SYMBOL                              : 'SYMBOL';
KW_SYNC_DDL                            : 'SYNC_DDL';
KW_SYSTEM                              : 'SYSTEM';
KW_TABLE                               : 'TABLE';
KW_TABLES                              : 'TABLES';
KW_TABLESAMPLE                         : 'TABLESAMPLE';
KW_TBLPROPERTIES                       : 'TBLPROPERTIES';
KW_TERMINATED                          : 'TERMINATED';
KW_TEXTFILE                            : 'TEXTFILE';
KW_THREAD_RESERVATION_AGGREGATE_LIMIT  : 'THREAD_RESERVATION_AGGREGATE_LIMIT';
KW_THREAD_RESERVATION_LIMIT            : 'THREAD_RESERVATION_LIMIT';
KW_TIMESTAMP                           : 'TIMESTAMP';
KW_TIMEZONE                            : 'TIMEZONE';
KW_TINYINT                             : 'TINYINT';
KW_TO                                  : 'TO';
KW_TOPN_BYTES_LIMIT                    : 'TOPN_BYTES_LIMIT';
KW_TRUE                                : 'TRUE';
KW_TRUNCATE                            : 'TRUNCATE';
KW_UNCACHED                            : 'UNCACHED';
KW_UNION                               : 'UNION';
KW_UPDATE                              : 'UPDATE';
KW_UPDATE_FN                           : 'UPDATE_FN';
KW_UPSERT                              : 'UPSERT';
KW_URI                                 : 'URI';
KW_USE                                 : 'USE';
KW_USER                                : 'USER';
KW_UTF8_MODE                           : 'UTF8_MODE';
KW_VALUE                               : 'VALUE';
KW_VALUES                              : 'VALUES';
KW_VARCHAR                             : 'VARCHAR';
KW_VIEW                                : 'VIEW';
KW_WHERE                               : 'WHERE';
KW_WITH                                : 'WITH';
KW_ZERO                                : 'ZERO';
KW_ZLIB                                : 'ZLIB';

WHITE_SPACE                            : [ \t\r\n]+                    -> skip;

SQL_COMMENT                            : '/*' (SQL_COMMENT | .)*? '*/' -> channel(HIDDEN);
LINE_COMMENT                           : '--' ~[\r\n]*                 -> channel(HIDDEN);

DOUBLE_QUOTE_ID                        : '"' ~'"'+ '"';
SINGLE_QUOTE                           : '\'';

ID                                     : [A-Z_] [A-Z0-9_]*;

STRING_LITERAL                         : '\'' (~'\'' | '\'\'')* '\'';
DECIMAL_LITERAL                        : DEC_DIGIT+;
FLOAT_LITERAL                          : DEC_DOT_DEC;
REAL_LITERAL                           : (DECIMAL_LITERAL | DEC_DOT_DEC) ('E' [+-]? DEC_DIGIT+);
CHAR_LITERAL                           : '\'' (~['\\\r\n] | EscapeSequence) '\'';

NE                                     : '!=';
LTGT                                   : '<>';
EQ                                     : '=';
GT                                     : '>';
GE                                     : '>=';
LT                                     : '<';
LE                                     : '<=';
EXCLAMATION                            : '!';
PIPE_PIPE                              : '||';
DOT                                    : '.';
UNDERLINE                              : '_';
LR_BRACKET                             : '(';
RR_BRACKET                             : ')';
COMMA                                  : ',';
SEMI                                   : ';';
STAR                                   : '*';
DIVIDE                                 : '/';
MODULE                                 : '%';
PLUS                                   : '+';
MINUS                                  : '-';
COLON                                  : ':';
PLACEHOLDER                            : '?';


fragment HexDigit                      : [0-9a-f] ;
fragment LETTER                        : [A-Z_];
fragment DEC_DOT_DEC                   : (DEC_DIGIT+ '.' DEC_DIGIT+ |  DEC_DIGIT+ '.' | '.' DEC_DIGIT+);
fragment DEC_DIGIT                     : [0-9];
fragment EscapeSequence
    : '\\' [btnfr"'\\]
    | '\\' ([0-3]? [0-7])? [0-7]
    | '\\' 'u'+ HexDigit HexDigit HexDigit HexDigit
    ;