/*
MySQL (Positive Technologies) grammar
The MIT License (MIT).
Copyright (c) 2015-2017, Ivan Kochurkin (kvanttt@gmail.com), Positive Technologies.
Copyright (c) 2017, Ivan Khudyashev (IHudyashov@ptsecurity.com)

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

// https://github.com/antlr/grammars-v4/blob/master/sql/mysql/Positive-Technologies/MySqlLexer.g4

lexer grammar MySqlLexer;

options { caseInsensitive = true; }

channels { MYSQLCOMMENT, ERRORCHANNEL }


SPACE:                               [ \t\r\n]+    -> channel(HIDDEN);
SPEC_MYSQL_COMMENT:                  '/*!' .+? '*/' -> channel(MYSQLCOMMENT);
COMMENT_INPUT:                       '/*' .*? '*/' -> channel(HIDDEN);
LINE_COMMENT:                        (
                                       ('--' [ \t]* | '#') ~[\r\n]* ('\r'? '\n' | EOF)
                                       | '--' ('\r'? '\n' | EOF)
                                     ) -> channel(HIDDEN);


// Keywords
// Common Keywords

KW_ACTIVE:                              'ACTIVE';
KW_ADD:                                 'ADD';
KW_ALL:                                 'ALL';
KW_ALTER:                               'ALTER';
KW_ALWAYS:                              'ALWAYS';
KW_ANALYZE:                             'ANALYZE';
KW_AND:                                 'AND';
KW_ARRAY:                               'ARRAY';
KW_AS:                                  'AS';
KW_ASC:                                 'ASC';
KW_ATTRIBUTE:                           'ATTRIBUTE';
KW_BEFORE:                              'BEFORE';
KW_BETWEEN:                             'BETWEEN';
KW_BOTH:                                'BOTH';
KW_BUCKETS:                             'BUCKETS';
KW_BY:                                  'BY';
KW_CALL:                                'CALL';
KW_CASCADE:                             'CASCADE';
KW_CASE:                                'CASE';
KW_CAST:                                'CAST';
KW_CHANGE:                              'CHANGE';
KW_CHARACTER:                           'CHARACTER';
KW_CHECK:                               'CHECK';
KW_COLLATE:                             'COLLATE';
KW_COLUMN:                              'COLUMN';
KW_CONDITION:                           'CONDITION';
KW_CONSTRAINT:                          'CONSTRAINT';
KW_CONTINUE:                            'CONTINUE';
KW_CONVERT:                             'CONVERT';
KW_CREATE:                              'CREATE';
KW_CROSS:                               'CROSS';
KW_CURRENT:                             'CURRENT';
KW_CURRENT_USER:                        'CURRENT_USER';
KW_CURSOR:                              'CURSOR';
KW_DATABASE:                            'DATABASE';
KW_DATABASES:                           'DATABASES';
KW_DECLARE:                             'DECLARE';
KW_DEFAULT:                             'DEFAULT';
KW_DELAYED:                             'DELAYED';
KW_DELETE:                              'DELETE';
KW_DESC:                                'DESC';
KW_DESCRIBE:                            'DESCRIBE';
KW_DETERMINISTIC:                       'DETERMINISTIC';
KW_DIAGNOSTICS:                         'DIAGNOSTICS';
KW_DISTINCT:                            'DISTINCT';
KW_DISTINCTROW:                         'DISTINCTROW';
KW_DROP:                                'DROP';
KW_EACH:                                'EACH';
KW_ELSE:                                'ELSE';
KW_ELSEIF:                              'ELSEIF';
KW_EMPTY:                               'EMPTY';
KW_ENCLOSED:                            'ENCLOSED';
KW_ENFORCED:                            'ENFORCED';
KW_ESCAPED:                             'ESCAPED';
KW_EXCEPT:                              'EXCEPT';
KW_EXISTS:                              'EXISTS';
KW_EXIT:                                'EXIT';
KW_EXPLAIN:                             'EXPLAIN';
KW_FALSE:                               'FALSE';
KW_FETCH:                               'FETCH';
KW_FOR:                                 'FOR';
KW_FORCE:                               'FORCE';
KW_FOREIGN:                             'FOREIGN';
KW_FROM:                                'FROM';
KW_FULLTEXT:                            'FULLTEXT';
KW_GENERATE:                           'GENERATE';
KW_GENERATED:                           'GENERATED';
KW_GET:                                 'GET';
KW_GRANT:                               'GRANT';
KW_GROUP:                               'GROUP';
KW_HAVING:                              'HAVING';
KW_HIGH_PRIORITY:                       'HIGH_PRIORITY';
KW_HISTOGRAM:                           'HISTOGRAM';
KW_IF:                                  'IF';
KW_IGNORE:                              'IGNORE';
KW_IGNORED:                             'IGNORED';
KW_IN:                                  'IN';
KW_INACTIVE:                            'INACTIVE';
KW_INDEX:                               'INDEX';
KW_INFILE:                              'INFILE';
KW_INNER:                               'INNER';
KW_INOUT:                               'INOUT';
KW_INSERT:                              'INSERT';
KW_INTERVAL:                            'INTERVAL';
KW_INTO:                                'INTO';
KW_IS:                                  'IS';
KW_ITERATE:                             'ITERATE';
KW_JOIN:                                'JOIN';
KW_KEY:                                 'KEY';
KW_KEYS:                                'KEYS';
KW_KILL:                                'KILL';
KW_LATERAL:                             'LATERAL';
KW_LEADING:                             'LEADING';
KW_LEAVE:                               'LEAVE';
KW_LEFT:                                'LEFT';
KW_LIKE:                                'LIKE';
KW_LIMIT:                               'LIMIT';
KW_LINEAR:                              'LINEAR';
KW_LINES:                               'LINES';
KW_LOAD:                                'LOAD';
KW_LOCK:                                'LOCK';
KW_LOCKED:                              'LOCKED';
KW_LOOP:                                'LOOP';
KW_LOW_PRIORITY:                        'LOW_PRIORITY';
KW_MASTER_BIND:                         'MASTER_BIND';
KW_MASTER_SSL_VERIFY_SERVER_CERT:       'MASTER_SSL_VERIFY_SERVER_CERT';
KW_MATCH:                               'MATCH';
KW_MAXVALUE:                            'MAXVALUE';
KW_MODIFIES:                            'MODIFIES';
KW_NATURAL:                             'NATURAL';
KW_NOT:                                 'NOT';
KW_NO_WRITE_TO_BINLOG:                  'NO_WRITE_TO_BINLOG';
KW_NULL_LITERAL:                        'NULL';
KW_NUMBER:                              'NUMBER';
KW_STREAM:                              'STREAM';
KW_ON:                                  'ON';
KW_OPTIMIZE:                            'OPTIMIZE';
KW_OPTION:                              'OPTION';
KW_OPTIONAL:                            'OPTIONAL';
KW_OPTIONALLY:                          'OPTIONALLY';
KW_OR:                                  'OR';
KW_ORDER:                               'ORDER';
KW_OUT:                                 'OUT';
KW_OUTER:                               'OUTER';
KW_OUTFILE:                             'OUTFILE';
KW_OVER:                                'OVER';
KW_PARTITION:                           'PARTITION';
KW_PRIMARY:                             'PRIMARY';
KW_PROCEDURE:                           'PROCEDURE';
KW_PURGE:                               'PURGE';
KW_RANGE:                               'RANGE';
KW_READ:                                'READ';
KW_READS:                               'READS';
KW_REFERENCE:                           'REFERENCE';
KW_REFERENCES:                          'REFERENCES';
KW_REGEXP:                              'REGEXP';
KW_RELEASE:                             'RELEASE';
KW_RENAME:                              'RENAME';
KW_REPEAT:                              'REPEAT';
KW_REPLACE:                             'REPLACE';
KW_REQUIRE:                             'REQUIRE';
KW_RESIGNAL:                            'RESIGNAL';
KW_RESTRICT:                            'RESTRICT';
KW_RETAIN:                              'RETAIN';
KW_RETURN:                              'RETURN';
KW_REVOKE:                              'REVOKE';
KW_RIGHT:                               'RIGHT';
KW_RLIKE:                               'RLIKE';
KW_SCHEMA:                              'SCHEMA';
KW_SCHEMAS:                             'SCHEMAS';
KW_SELECT:                              'SELECT';
KW_SET:                                 'SET';
KW_SEPARATOR:                           'SEPARATOR';
KW_SHOW:                                'SHOW';
KW_SIGNAL:                              'SIGNAL';
KW_SKIP:                                'SKIP';
KW_SKIP_QUERY_REWRITE:                  'SKIP_QUERY_REWRITE';
KW_SPATIAL:                             'SPATIAL';
KW_SQL:                                 'SQL';
KW_SQLEXCEPTION:                        'SQLEXCEPTION';
KW_SQLSTATE:                            'SQLSTATE';
KW_SQLWARNING:                          'SQLWARNING';
KW_SQL_BIG_RESULT:                      'SQL_BIG_RESULT';
KW_SQL_CALC_FOUND_ROWS:                 'SQL_CALC_FOUND_ROWS';
KW_SQL_SMALL_RESULT:                    'SQL_SMALL_RESULT';
KW_SSL:                                 'SSL';
KW_STACKED:                             'STACKED';
KW_STARTING:                            'STARTING';
KW_STRAIGHT_JOIN:                       'STRAIGHT_JOIN';
KW_TABLE:                               'TABLE';
KW_TERMINATED:                          'TERMINATED';
KW_THEN:                                'THEN';
KW_TO:                                  'TO';
KW_TRAILING:                            'TRAILING';
KW_TRIGGER:                             'TRIGGER';
KW_TRUE:                                'TRUE';
KW_UNDO:                                'UNDO';
KW_UNION:                               'UNION';
KW_UNIQUE:                              'UNIQUE';
KW_UNLOCK:                              'UNLOCK';
KW_UNSIGNED:                            'UNSIGNED';
KW_UPDATE:                              'UPDATE';
KW_USAGE:                               'USAGE';
KW_USE:                                 'USE';
KW_USING:                               'USING';
KW_VALUES:                              'VALUES';
KW_VCPU:                                'VCPU';
KW_WHEN:                                'WHEN';
KW_WHERE:                               'WHERE';
KW_WHILE:                               'WHILE';
KW_WITH:                                'WITH';
KW_WRITE:                               'WRITE';
KW_XOR:                                 'XOR';
KW_ZEROFILL:                            'ZEROFILL';

// DATA TYPE Keywords

KW_TINYINT:                             'TINYINT';
KW_SMALLINT:                            'SMALLINT';
KW_MEDIUMINT:                           'MEDIUMINT';
KW_MIDDLEINT:                           'MIDDLEINT';
KW_INT:                                 'INT';
KW_INT1:                                'INT1';
KW_INT2:                                'INT2';
KW_INT3:                                'INT3';
KW_INT4:                                'INT4';
KW_INT8:                                'INT8';
KW_INTEGER:                             'INTEGER';
KW_BIGINT:                              'BIGINT';
KW_REAL:                                'REAL';
KW_DOUBLE:                              'DOUBLE';
KW_PRECISION:                           'PRECISION';
KW_FLOAT:                               'FLOAT';
KW_FLOAT4:                              'FLOAT4';
KW_FLOAT8:                              'FLOAT8';
KW_DECIMAL:                             'DECIMAL';
KW_DEC:                                 'DEC';
KW_NUMERIC:                             'NUMERIC';
KW_DATE:                                'DATE';
KW_TIME:                                'TIME';
KW_TIMESTAMP:                           'TIMESTAMP';
KW_DATETIME:                            'DATETIME';
KW_YEAR:                                'YEAR';
KW_CHAR:                                'CHAR';
KW_VARCHAR:                             'VARCHAR';
KW_NVARCHAR:                            'NVARCHAR';
KW_NATIONAL:                            'NATIONAL';
KW_BINARY:                              'BINARY';
KW_VARBINARY:                           'VARBINARY';
KW_TINYBLOB:                            'TINYBLOB';
KW_BLOB:                                'BLOB';
KW_MEDIUMBLOB:                          'MEDIUMBLOB';
KW_LONG:                                'LONG';
KW_LONGBLOB:                            'LONGBLOB';
KW_TINYTEXT:                            'TINYTEXT';
KW_TEXT:                                'TEXT';
KW_MEDIUMTEXT:                          'MEDIUMTEXT';
KW_LONGTEXT:                            'LONGTEXT';
KW_ENUM:                                'ENUM';
KW_VARYING:                             'VARYING';
KW_SERIAL:                              'SERIAL';


// Interval type Keywords

KW_YEAR_MONTH:                          'YEAR_MONTH';
KW_DAY_HOUR:                            'DAY_HOUR';
KW_DAY_MINUTE:                          'DAY_MINUTE';
KW_DAY_SECOND:                          'DAY_SECOND';
KW_HOUR_MINUTE:                         'HOUR_MINUTE';
KW_HOUR_SECOND:                         'HOUR_SECOND';
KW_MINUTE_SECOND:                       'MINUTE_SECOND';
KW_SECOND_MICROSECOND:                  'SECOND_MICROSECOND';
KW_MINUTE_MICROSECOND:                  'MINUTE_MICROSECOND';
KW_HOUR_MICROSECOND:                    'HOUR_MICROSECOND';
KW_DAY_MICROSECOND:                     'DAY_MICROSECOND';

// JSON keywords
KW_JSON_ARRAY:                          'JSON_ARRAY';
KW_JSON_ARRAYAGG:                       'JSON_ARRAYAGG';
KW_JSON_ARRAY_APPEND:                   'JSON_ARRAY_APPEND';
KW_JSON_ARRAY_INSERT:                   'JSON_ARRAY_INSERT';
KW_JSON_CONTAINS:                       'JSON_CONTAINS';
KW_JSON_CONTAINS_PATH:                  'JSON_CONTAINS_PATH';
KW_JSON_DEPTH:                          'JSON_DEPTH';
KW_JSON_EXTRACT:                        'JSON_EXTRACT';
KW_JSON_INSERT:                         'JSON_INSERT';
KW_JSON_KEYS:                           'JSON_KEYS';
KW_JSON_LENGTH:                         'JSON_LENGTH';
KW_JSON_MERGE:                          'JSON_MERGE';
KW_JSON_MERGE_PATCH:                    'JSON_MERGE_PATCH';
KW_JSON_MERGE_PRESERVE:                 'JSON_MERGE_PRESERVE';
KW_JSON_OBJECT:                         'JSON_OBJECT';
KW_JSON_OBJECTAGG:                      'JSON_OBJECTAGG';
KW_JSON_OVERLAPS:                       'JSON_OVERLAPS';
KW_JSON_PRETTY:                         'JSON_PRETTY';
KW_JSON_QUOTE:                          'JSON_QUOTE';
KW_JSON_REMOVE:                         'JSON_REMOVE';
KW_JSON_REPLACE:                        'JSON_REPLACE';
KW_JSON_SCHEMA_VALID:                   'JSON_SCHEMA_VALID';
KW_JSON_SCHEMA_VALIDATION_REPORT:       'JSON_SCHEMA_VALIDATION_REPORT';
KW_JSON_SEARCH:                         'JSON_SEARCH';
KW_JSON_SET:                            'JSON_SET';
KW_JSON_STORAGE_FREE:                   'JSON_STORAGE_FREE';
KW_JSON_STORAGE_SIZE:                   'JSON_STORAGE_SIZE';
KW_JSON_TABLE:                          'JSON_TABLE';
KW_JSON_TYPE:                           'JSON_TYPE';
KW_JSON_UNQUOTE:                        'JSON_UNQUOTE';
KW_JSON_VALID:                          'JSON_VALID';
KW_JSON_VALUE:                          'JSON_VALUE';
KW_NESTED:                              'NESTED';
KW_ORDINALITY:                          'ORDINALITY';
KW_PATH:                                'PATH';

// Group function Keywords

KW_AVG:                                 'AVG';
KW_BIT_AND:                             'BIT_AND';
KW_BIT_OR:                              'BIT_OR';
KW_BIT_XOR:                             'BIT_XOR';
KW_COUNT:                               'COUNT';
KW_CUME_DIST:                           'CUME_DIST';
KW_DENSE_RANK:                          'DENSE_RANK';
KW_FIRST_VALUE:                         'FIRST_VALUE';
KW_GROUP_CONCAT:                        'GROUP_CONCAT';
KW_LAG:                                 'LAG';
KW_LAST_VALUE:                          'LAST_VALUE';
KW_LEAD:                                'LEAD';
KW_MAX:                                 'MAX';
KW_MIN:                                 'MIN';
KW_NTILE:                               'NTILE';
KW_NTH_VALUE:                           'NTH_VALUE';
KW_PERCENT_RANK:                        'PERCENT_RANK';
KW_RANK:                                'RANK';
KW_ROW_NUMBER:                          'ROW_NUMBER';
KW_STD:                                 'STD';
KW_STDDEV:                              'STDDEV';
KW_STDDEV_POP:                          'STDDEV_POP';
KW_STDDEV_SAMP:                         'STDDEV_SAMP';
KW_SUM:                                 'SUM';
KW_VAR_POP:                             'VAR_POP';
KW_VAR_SAMP:                            'VAR_SAMP';
KW_VARIANCE:                            'VARIANCE';

// Common function Keywords

KW_CURRENT_DATE:                        'CURRENT_DATE';
KW_CURRENT_TIME:                        'CURRENT_TIME';
KW_CURRENT_TIMESTAMP:                   'CURRENT_TIMESTAMP';
KW_LOCALTIME:                           'LOCALTIME';
KW_CURDATE:                             'CURDATE';
KW_CURTIME:                             'CURTIME';
KW_DATE_ADD:                            'DATE_ADD';
KW_DATE_SUB:                            'DATE_SUB';
KW_EXTRACT:                             'EXTRACT';
KW_LOCALTIMESTAMP:                      'LOCALTIMESTAMP';
KW_NOW:                                 'NOW';
KW_POSITION:                            'POSITION';
KW_SUBSTR:                              'SUBSTR';
KW_SUBSTRING:                           'SUBSTRING';
KW_SYSDATE:                             'SYSDATE';
KW_TRIM:                                'TRIM';
KW_UTC_DATE:                            'UTC_DATE';
KW_UTC_TIME:                            'UTC_TIME';
KW_UTC_TIMESTAMP:                       'UTC_TIMESTAMP';

// Keywords, but can be ID
// Common Keywords, but can be ID

KW_ACCOUNT:                             'ACCOUNT';
KW_ACTION:                              'ACTION';
KW_AFTER:                               'AFTER';
KW_AGGREGATE:                           'AGGREGATE';
KW_ALGORITHM:                           'ALGORITHM';
KW_ANY:                                 'ANY';
KW_ASSIGN_GTIDS_TO_ANONYMOUS_TRANSACTIONS: 'ASSIGN_GTIDS_TO_ANONYMOUS_TRANSACTIONS';
KW_AT:                                  'AT';
KW_AUTHORS:                             'AUTHORS';
KW_AUTOCOMMIT:                          'AUTOCOMMIT';
KW_AUTOEXTEND_SIZE:                     'AUTOEXTEND_SIZE';
KW_AUTO_INCREMENT:                      'AUTO_INCREMENT';
KW_AVG_ROW_LENGTH:                      'AVG_ROW_LENGTH';
KW_BEGIN:                               'BEGIN';
KW_BINLOG:                              'BINLOG';
KW_BIT:                                 'BIT';
KW_BLOCK:                               'BLOCK';
KW_BOOL:                                'BOOL';
KW_BOOLEAN:                             'BOOLEAN';
KW_BTREE:                               'BTREE';
KW_CACHE:                               'CACHE';
KW_CASCADED:                            'CASCADED';
KW_CHAIN:                               'CHAIN';
KW_CHANGED:                             'CHANGED';
KW_CHANNEL:                             'CHANNEL';
KW_CHECKSUM:                            'CHECKSUM';
KW_CHALLENGE_RESPONSE:                  'CHALLENGE_RESPONSE';
KW_CIPHER:                              'CIPHER';
KW_CLASS_ORIGIN:                        'CLASS_ORIGIN';
KW_CLIENT:                              'CLIENT';
KW_CLOSE:                               'CLOSE';
KW_CLUSTERING:                          'CLUSTERING';
KW_COALESCE:                            'COALESCE';
KW_CODE:                                'CODE';
KW_COLUMNS:                             'COLUMNS';
KW_COLUMN_FORMAT:                       'COLUMN_FORMAT';
KW_COLUMN_NAME:                         'COLUMN_NAME';
KW_COMMENT:                             'COMMENT';
KW_COMMIT:                              'COMMIT';
KW_COMPACT:                             'COMPACT';
KW_COMPLETION:                          'COMPLETION';
KW_COMPONENT:                           'COMPONENT';
KW_COMPRESSED:                          'COMPRESSED';
KW_COMPRESSION:                         'COMPRESSION';
KW_CONCURRENT:                          'CONCURRENT';
KW_CONNECT:                             'CONNECT';
KW_CONNECTION:                          'CONNECTION';
KW_CONSISTENT:                          'CONSISTENT';
KW_CONSTRAINT_CATALOG:                  'CONSTRAINT_CATALOG';
KW_CONSTRAINT_SCHEMA:                   'CONSTRAINT_SCHEMA';
KW_CONSTRAINT_NAME:                     'CONSTRAINT_NAME';
KW_CONTAINS:                            'CONTAINS';
KW_CONTEXT:                             'CONTEXT';
KW_CONTRIBUTORS:                        'CONTRIBUTORS';
KW_COPY:                                'COPY';
KW_CPU:                                 'CPU';
KW_CURSOR_NAME:                         'CURSOR_NAME';
KW_DATA:                                'DATA';
KW_DATAFILE:                            'DATAFILE';
KW_DEALLOCATE:                          'DEALLOCATE';
KW_DEFAULT_AUTH:                        'DEFAULT_AUTH';
KW_DEFINER:                             'DEFINER';
KW_DELAY_KEY_WRITE:                     'DELAY_KEY_WRITE';
KW_DES_KEY_FILE:                        'DES_KEY_FILE';
KW_DIRECTORY:                           'DIRECTORY';
KW_DISABLE:                             'DISABLE';
KW_DISCARD:                             'DISCARD';
KW_DISK:                                'DISK';
KW_DO:                                  'DO';
KW_DUMPFILE:                            'DUMPFILE';
KW_DUPLICATE:                           'DUPLICATE';
KW_DYNAMIC:                             'DYNAMIC';
KW_ENABLE:                              'ENABLE';
KW_ENCRYPTION:                          'ENCRYPTION';
KW_ENCRYPTION_KEY_ID:                   'ENCRYPTION_KEY_ID';
KW_END:                                 'END';
KW_ENDS:                                'ENDS';
KW_ENGINE:                              'ENGINE';
KW_ENGINES:                             'ENGINES';
KW_ERROR:                               'ERROR';
KW_ERRORS:                              'ERRORS';
KW_ESCAPE:                              'ESCAPE';
KW_EVEN:                                'EVEN';
KW_EVENT:                               'EVENT';
KW_EVENTS:                              'EVENTS';
KW_EVERY:                               'EVERY';
KW_EXCHANGE:                            'EXCHANGE';
KW_EXCLUSIVE:                           'EXCLUSIVE';
KW_EXPIRE:                              'EXPIRE';
KW_EXPORT:                              'EXPORT';
KW_EXTENDED:                            'EXTENDED';
KW_EXTENT_SIZE:                         'EXTENT_SIZE';
KW_FACTOR:                              'FACTOR';
KW_FAILED_LOGIN_ATTEMPTS:               'FAILED_LOGIN_ATTEMPTS';
KW_FAST:                                'FAST';
KW_FAULTS:                              'FAULTS';
KW_FIELDS:                              'FIELDS';
KW_FILE_BLOCK_SIZE:                     'FILE_BLOCK_SIZE';
KW_FILTER:                              'FILTER';
KW_FINISH:                              'FINISH';
KW_FIRST:                               'FIRST';
KW_FIXED:                               'FIXED';
KW_FLUSH:                               'FLUSH';
KW_FOLLOWING:                           'FOLLOWING';
KW_FOLLOWS:                             'FOLLOWS';
KW_FOUND:                               'FOUND';
KW_FULL:                                'FULL';
KW_FUNCTION:                            'FUNCTION';
KW_GENERAL:                             'GENERAL';
KW_GET_MASTER_PUBLIC_KEY:               'GET_MASTER_PUBLIC_KEY';
KW_GET_SOURCE_PUBLIC_KEY:               'GET_SOURCE_PUBLIC_KEY';
KW_GLOBAL:                              'GLOBAL';
KW_GRANTS:                              'GRANTS';
KW_GROUP_REPLICATION:                   'GROUP_REPLICATION';
KW_GTID_ONLY:                           'GTID_ONLY';
KW_HANDLER:                             'HANDLER';
KW_HASH:                                'HASH';
KW_HELP:                                'HELP';
KW_HISTORY:                             'HISTORY';
KW_HOST:                                'HOST';
KW_HOSTS:                               'HOSTS';
KW_IDENTIFIED:                          'IDENTIFIED';
KW_IGNORE_SERVER_IDS:                   'IGNORE_SERVER_IDS';
KW_IMPORT:                              'IMPORT';
KW_INDEXES:                             'INDEXES';
KW_INITIAL:                            'INITIAL';
KW_INITIAL_SIZE:                        'INITIAL_SIZE';
KW_INITIATE:                            'INITIATE';
KW_INPLACE:                             'INPLACE';
KW_INSERT_METHOD:                       'INSERT_METHOD';
KW_INSTALL:                             'INSTALL';
KW_INSTANCE:                            'INSTANCE';
KW_INSTANT:                             'INSTANT';
KW_INVISIBLE:                           'INVISIBLE';
KW_INVOKER:                             'INVOKER';
KW_IO:                                  'IO';
KW_IO_THREAD:                           'IO_THREAD';
KW_IPC:                                 'IPC';
KW_ISOLATION:                           'ISOLATION';
KW_ISSUER:                              'ISSUER';
KW_JSON:                                'JSON';
KW_KEY_BLOCK_SIZE:                      'KEY_BLOCK_SIZE';
KW_LANGUAGE:                            'LANGUAGE';
KW_LAST:                                'LAST';
KW_LEAVES:                              'LEAVES';
KW_LESS:                                'LESS';
KW_LEVEL:                               'LEVEL';
KW_LIST:                                'LIST';
KW_LOCAL:                               'LOCAL';
KW_LOGFILE:                             'LOGFILE';
KW_LOGS:                                'LOGS';
KW_MASTER:                              'MASTER';
KW_MASTER_AUTO_POSITION:                'MASTER_AUTO_POSITION';
KW_MASTER_COMPRESSION_ALGORITHMS:       'MASTER_COMPRESSION_ALGORITHMS';
KW_MASTER_CONNECT_RETRY:                'MASTER_CONNECT_RETRY';
KW_MASTER_DELAY:                        'MASTER_DELAY';
KW_MASTER_HEARTBEAT_PERIOD:             'MASTER_HEARTBEAT_PERIOD';
KW_MASTER_HOST:                         'MASTER_HOST';
KW_MASTER_LOG_FILE:                     'MASTER_LOG_FILE';
KW_MASTER_LOG_POS:                      'MASTER_LOG_POS';
KW_MASTER_PASSWORD:                     'MASTER_PASSWORD';
KW_MASTER_PORT:                         'MASTER_PORT';
KW_MASTER_PUBLIC_KEY_PATH:              'MASTER_PUBLIC_KEY_PATH';
KW_MASTER_RETRY_COUNT:                  'MASTER_RETRY_COUNT';
KW_MASTER_SSL:                          'MASTER_SSL';
KW_MASTER_SSL_CA:                       'MASTER_SSL_CA';
KW_MASTER_SSL_CAPATH:                   'MASTER_SSL_CAPATH';
KW_MASTER_SSL_CERT:                     'MASTER_SSL_CERT';
KW_MASTER_SSL_CIPHER:                   'MASTER_SSL_CIPHER';
KW_MASTER_SSL_CRL:                      'MASTER_SSL_CRL';
KW_MASTER_SSL_CRLPATH:                  'MASTER_SSL_CRLPATH';
KW_MASTER_SSL_KEY:                      'MASTER_SSL_KEY';
KW_MASTER_TLS_CIPHERSUITES:             'MASTER_TLS_CIPHERSUITES';
KW_MASTER_TLS_VERSION:                  'MASTER_TLS_VERSION';
KW_MASTER_USER:                         'MASTER_USER';
KW_MASTER_ZSTD_COMPRESSION_LEVEL:       'MASTER_ZSTD_COMPRESSION_LEVEL';
KW_MAX_CONNECTIONS_PER_HOUR:            'MAX_CONNECTIONS_PER_HOUR';
KW_MAX_QUERIES_PER_HOUR:                'MAX_QUERIES_PER_HOUR';
KW_MAX_ROWS:                            'MAX_ROWS';
KW_MAX_SIZE:                            'MAX_SIZE';
KW_MAX_UPDATES_PER_HOUR:                'MAX_UPDATES_PER_HOUR';
KW_MAX_USER_CONNECTIONS:                'MAX_USER_CONNECTIONS';
KW_MEDIUM:                              'MEDIUM';
KW_MEMBER:                              'MEMBER';
KW_MERGE:                               'MERGE';
KW_MESSAGE_TEXT:                        'MESSAGE_TEXT';
KW_MID:                                 'MID';
KW_MIGRATE:                             'MIGRATE';
KW_MIN_ROWS:                            'MIN_ROWS';
KW_MODE:                                'MODE';
KW_MODIFY:                              'MODIFY';
KW_MUTEX:                               'MUTEX';
KW_MYSQL:                               'MYSQL';
KW_MYSQL_ERRNO:                         'MYSQL_ERRNO';
KW_NAME:                                'NAME';
KW_NAMES:                               'NAMES';
KW_NCHAR:                               'NCHAR';
KW_NETWORK_NAMESPACE:                   'NETWORK_NAMESPACE';
KW_NEVER:                               'NEVER';
KW_NEXT:                                'NEXT';
KW_NO:                                  'NO';
KW_NOCOPY:                              'NOCOPY';
KW_NOWAIT:                              'NOWAIT';
KW_NODEGROUP:                           'NODEGROUP';
KW_NONE:                                'NONE';
KW_ODBC:                                'ODBC';
KW_OFF:                                 'OFF';
KW_OFFLINE:                             'OFFLINE';
KW_OFFSET:                              'OFFSET';
KW_OF:                                  'OF';
KW_OJ:                                  'OJ';
KW_OLD:                                 'OLD';
KW_OLD_PASSWORD:                        'OLD_PASSWORD';
KW_ONE:                                 'ONE';
KW_ONLINE:                              'ONLINE';
KW_ONLY:                                'ONLY';
KW_OPEN:                                'OPEN';
KW_OPTIMIZER_COSTS:                     'OPTIMIZER_COSTS';
KW_OPTIONS:                             'OPTIONS';
KW_OWNER:                               'OWNER';
KW_PACK_KEYS:                           'PACK_KEYS';
KW_PAGE:                                'PAGE';
KW_PAGE_CHECKSUM:                       'PAGE_CHECKSUM';
KW_PAGE_COMPRESSED:                     'PAGE_COMPRESSED';
KW_PAGE_COMPRESSION_LEVEL:              'PAGE_COMPRESSION_LEVEL';
KW_PARSER:                              'PARSER';
KW_PARTIAL:                             'PARTIAL';
KW_PARTITIONING:                        'PARTITIONING';
KW_PARTITIONS:                          'PARTITIONS';
KW_PASSWORD:                            'PASSWORD';
KW_PASSWORD_LOCK_TIME:                  'PASSWORD_LOCK_TIME';
KW_PERSIST:                             'PERSIST';
KW_PERSIST_ONLY:                        'PERSIST_ONLY';
KW_PHASE:                               'PHASE';
KW_PLUGIN:                              'PLUGIN';
KW_PLUGIN_DIR:                          'PLUGIN_DIR';
KW_PLUGINS:                             'PLUGINS';
KW_PORT:                                'PORT';
KW_PRECEDES:                            'PRECEDES';
KW_PRECEDING:                           'PRECEDING';
KW_PREPARE:                             'PREPARE';
KW_PRESERVE:                            'PRESERVE';
KW_PREV:                                'PREV';
KW_PRIVILEGE_CHECKS_USER:               'PRIVILEGE_CHECKS_USER';
KW_PROCESSLIST:                         'PROCESSLIST';
KW_PROFILE:                             'PROFILE';
KW_PROFILES:                            'PROFILES';
KW_PROXY:                               'PROXY';
KW_QUERY:                               'QUERY';
KW_QUICK:                               'QUICK';
KW_REBUILD:                             'REBUILD';
KW_RECOVER:                             'RECOVER';
KW_RECURSIVE:                           'RECURSIVE';
KW_REDO_BUFFER_SIZE:                    'REDO_BUFFER_SIZE';
KW_REDUNDANT:                           'REDUNDANT';
KW_REGISTRATION:                        'REGISTRATION';
KW_RELAY:                               'RELAY';
KW_RELAY_LOG_FILE:                      'RELAY_LOG_FILE';
KW_RELAY_LOG_POS:                       'RELAY_LOG_POS';
KW_RELAYLOG:                            'RELAYLOG';
KW_REMOVE:                              'REMOVE';
KW_REORGANIZE:                          'REORGANIZE';
KW_REPAIR:                              'REPAIR';
KW_REPLICA:                             'REPLICA';
KW_REPLICAS:                               'REPLICAS';
KW_REPLICATE_DO_DB:                     'REPLICATE_DO_DB';
KW_REPLICATE_DO_TABLE:                  'REPLICATE_DO_TABLE';
KW_REPLICATE_IGNORE_DB:                 'REPLICATE_IGNORE_DB';
KW_REPLICATE_IGNORE_TABLE:              'REPLICATE_IGNORE_TABLE';
KW_REPLICATE_REWRITE_DB:                'REPLICATE_REWRITE_DB';
KW_REPLICATE_WILD_DO_TABLE:             'REPLICATE_WILD_DO_TABLE';
KW_REPLICATE_WILD_IGNORE_TABLE:         'REPLICATE_WILD_IGNORE_TABLE';
KW_REPLICATION:                         'REPLICATION';
KW_REQUIRE_ROW_FORMAT:                  'REQUIRE_ROW_FORMAT';
KW_REQUIRE_TABLE_PRIMARY_KEY_CHECK:     'REQUIRE_TABLE_PRIMARY_KEY_CHECK';
KW_RESET:                               'RESET';
KW_RESTART:                             'RESTART';
KW_RESUME:                              'RESUME';
KW_RETURNED_SQLSTATE:                   'RETURNED_SQLSTATE';
KW_RETURNING:                           'RETURNING';
KW_RETURNS:                             'RETURNS';
KW_REUSE:                               'REUSE';
KW_ROLE:                                'ROLE';
KW_ROLLBACK:                            'ROLLBACK';
KW_ROLLUP:                              'ROLLUP';
KW_ROTATE:                              'ROTATE';
KW_ROW:                                 'ROW';
KW_ROWS:                                'ROWS';
KW_ROW_FORMAT:                          'ROW_FORMAT';
KW_RTREE:                               'RTREE';
KW_SAVEPOINT:                           'SAVEPOINT';
KW_SCHEDULE:                            'SCHEDULE';
KW_SECURITY:                            'SECURITY';
KW_SERVER:                              'SERVER';
KW_SESSION:                             'SESSION';
KW_SHARE:                               'SHARE';
KW_SHARED:                              'SHARED';
KW_SIGNED:                              'SIGNED';
KW_SIMPLE:                              'SIMPLE';
KW_SLAVE:                               'SLAVE';
KW_SLOW:                                'SLOW';
KW_SNAPSHOT:                            'SNAPSHOT';
KW_SOCKET:                              'SOCKET';
KW_SOME:                                'SOME';
KW_SONAME:                              'SONAME';
KW_SOUNDS:                              'SOUNDS';
KW_SOURCE:                              'SOURCE';
KW_SOURCE_BIND:                         'SOURCE_BIND';
KW_SOURCE_HOST:                         'SOURCE_HOST';
KW_SOURCE_USER:                         'SOURCE_USER';
KW_SOURCE_PASSWORD:                     'SOURCE_PASSWORD';
KW_SOURCE_PORT:                         'SOURCE_PORT';
KW_SOURCE_LOG_FILE:                     'SOURCE_LOG_FILE';
KW_SOURCE_LOG_POS:                      'SOURCE_LOG_POS';
KW_SOURCE_AUTO_POSITION:                'SOURCE_AUTO_POSITION';
KW_SOURCE_HEARTBEAT_PERIOD:             'SOURCE_HEARTBEAT_PERIOD';
KW_SOURCE_CONNECT_RETRY:                'SOURCE_CONNECT_RETRY';
KW_SOURCE_RETRY_COUNT:                  'SOURCE_RETRY_COUNT';
KW_SOURCE_CONNECTION_AUTO_FAILOVER:     'SOURCE_CONNECTION_AUTO_FAILOVER';
KW_SOURCE_DELAY:                        'SOURCE_DELAY';
KW_SOURCE_COMPRESSION_ALGORITHMS:       'SOURCE_COMPRESSION_ALGORITHMS';
KW_SOURCE_ZSTD_COMPRESSION_LEVEL:       'SOURCE_ZSTD_COMPRESSION_LEVEL';
KW_SOURCE_SSL:                          'SOURCE_SSL';
KW_SOURCE_SSL_CA:                       'SOURCE_SSL_CA';
KW_SOURCE_SSL_CAPATH:                   'SOURCE_SSL_CAPATH';
KW_SOURCE_SSL_CERT:                     'SOURCE_SSL_CERT';
KW_SOURCE_SSL_CRL:                      'SOURCE_SSL_CRL';
KW_SOURCE_SSL_CRLPATH:                  'SOURCE_SSL_CRLPATH';
KW_SOURCE_SSL_KEY:                      'SOURCE_SSL_KEY';
KW_SOURCE_SSL_CIPHER:                   'SOURCE_SSL_CIPHER';
KW_SOURCE_SSL_VERIFY_SERVER_CERT:       'SOURCE_SSL_VERIFY_SERVER_CERT';
KW_SOURCE_TLS_VERSION:                  'SOURCE_TLS_VERSION';
KW_SOURCE_TLS_CIPHERSUITES:             'SOURCE_TLS_CIPHERSUITES';
KW_SOURCE_PUBLIC_KEY_PATH:              'SOURCE_PUBLIC_KEY_PATH';
KW_SQL_AFTER_GTIDS:                     'SQL_AFTER_GTIDS';
KW_SQL_AFTER_MTS_GAPS:                  'SQL_AFTER_MTS_GAPS';
KW_SQL_BEFORE_GTIDS:                    'SQL_BEFORE_GTIDS';
KW_SQL_BUFFER_RESULT:                   'SQL_BUFFER_RESULT';
KW_SQL_CACHE:                           'SQL_CACHE';
KW_SQL_NO_CACHE:                        'SQL_NO_CACHE';
KW_SQL_THREAD:                          'SQL_THREAD';
KW_START:                               'START';
KW_STARTS:                              'STARTS';
KW_STATS_AUTO_RECALC:                   'STATS_AUTO_RECALC';
KW_STATS_PERSISTENT:                    'STATS_PERSISTENT';
KW_STATS_SAMPLE_PAGES:                  'STATS_SAMPLE_PAGES';
KW_STATUS:                              'STATUS';
KW_STOP:                                'STOP';
KW_STORAGE:                             'STORAGE';
KW_STORED:                              'STORED';
KW_STRING:                              'STRING';
KW_SUBCLASS_ORIGIN:                     'SUBCLASS_ORIGIN';
KW_SUBJECT:                             'SUBJECT';
KW_SUBPARTITION:                        'SUBPARTITION';
KW_SUBPARTITIONS:                       'SUBPARTITIONS';
KW_SUSPEND:                             'SUSPEND';
KW_SWAPS:                               'SWAPS';
KW_SWITCHES:                            'SWITCHES';
KW_TABLE_NAME:                          'TABLE_NAME';
KW_TABLESPACE:                          'TABLESPACE';
KW_TABLE_TYPE:                          'TABLE_TYPE';
KW_TEMPORARY:                           'TEMPORARY';
KW_TEMPTABLE:                           'TEMPTABLE';
KW_THAN:                                'THAN';
KW_TRADITIONAL:                         'TRADITIONAL';
KW_TRANSACTION:                         'TRANSACTION';
KW_TRANSACTIONAL:                       'TRANSACTIONAL';
KW_TREE:                                'TREE';
KW_TRIGGERS:                            'TRIGGERS';
KW_TRUNCATE:                            'TRUNCATE';
KW_UNBOUNDED:                           'UNBOUNDED';
KW_UNDEFINED:                           'UNDEFINED';
KW_UNDOFILE:                            'UNDOFILE';
KW_UNDO_BUFFER_SIZE:                    'UNDO_BUFFER_SIZE';
KW_UNINSTALL:                           'UNINSTALL';
KW_UNKNOWN:                             'UNKNOWN';
KW_UNREGISTER:                          'UNREGISTER';
KW_UNTIL:                               'UNTIL';
KW_UPGRADE:                             'UPGRADE';
KW_USER:                                'USER';
KW_USE_FRM:                             'USE_FRM';
KW_USER_RESOURCES:                      'USER_RESOURCES';
KW_VALIDATION:                          'VALIDATION';
KW_VALUE:                               'VALUE';
KW_VARIABLES:                           'VARIABLES';
KW_VIEW:                                'VIEW';
KW_VIRTUAL:                             'VIRTUAL';
KW_VISIBLE:                             'VISIBLE';
KW_WAIT:                                'WAIT';
KW_WARNINGS:                            'WARNINGS';
KW_WINDOW:                              'WINDOW';
KW_WITHOUT:                             'WITHOUT';
KW_WORK:                                'WORK';
KW_WRAPPER:                             'WRAPPER';
KW_X509:                                'X509';
KW_XA:                                  'XA';
KW_XML:                                 'XML';

// Date format Keywords

KW_EUR:                                 'EUR';
KW_USA:                                 'USA';
KW_JIS:                                 'JIS';
KW_ISO:                                 'ISO';
KW_INTERNAL:                            'INTERNAL';


// Interval type Keywords

KW_QUARTER:                             'QUARTER';
KW_MONTH:                               'MONTH';
KW_DAY:                                 'DAY';
KW_HOUR:                                'HOUR';
KW_MINUTE:                              'MINUTE';
KW_WEEK:                                'WEEK';
KW_SECOND:                              'SECOND';
KW_MICROSECOND:                         'MICROSECOND';


// PRIVILEGES

KW_ADMIN:                               'ADMIN';
KW_APPLICATION_PASSWORD_ADMIN:          'APPLICATION_PASSWORD_ADMIN';
KW_AUDIT_ABORT_EXEMPT:                  'AUDIT_ABORT_EXEMPT';
KW_AUDIT_ADMIN:                         'AUDIT_ADMIN';
KW_AUTHENTICATION:                      'AUTHENTICATION';
KW_AUTHENTICATION_POLICY_ADMIN:         'AUTHENTICATION_POLICY_ADMIN';
KW_BACKUP_ADMIN:                        'BACKUP_ADMIN';
KW_BINLOG_ADMIN:                        'BINLOG_ADMIN';
KW_BINLOG_ENCRYPTION_ADMIN:             'BINLOG_ENCRYPTION_ADMIN';
KW_CLONE:                               'CLONE';
KW_CLONE_ADMIN:                         'CLONE_ADMIN';
KW_CONNECTION_ADMIN:                    'CONNECTION_ADMIN';
KW_ENCRYPTION_KEY_ADMIN:                'ENCRYPTION_KEY_ADMIN';
KW_EXECUTE:                             'EXECUTE';
KW_FILE:                                'FILE';
KW_FIREWALL_ADMIN:                      'FIREWALL_ADMIN';
KW_FIREWALL_EXEMPT:                     'FIREWALL_EXEMPT';
KW_FIREWALL_USER:                       'FIREWALL_USER';
KW_FLUSH_OPTIMIZER_COSTS:               'FLUSH_OPTIMIZER_COSTS';
KW_FLUSH_STATUS:                        'FLUSH_STATUS';
KW_FLUSH_TABLES:                        'FLUSH_TABLES';
KW_FLUSH_USER_RESOURCES:                'FLUSH_USER_RESOURCES';
KW_GROUP_REPLICATION_ADMIN:             'GROUP_REPLICATION_ADMIN';
KW_INNODB_REDO_LOG_ARCHIVE:             'INNODB_REDO_LOG_ARCHIVE';
KW_INNODB_REDO_LOG_ENABLE:              'INNODB_REDO_LOG_ENABLE';
KW_INVOKE:                              'INVOKE';
KW_LAMBDA:                              'LAMBDA';
KW_NDB_STORED_USER:                     'NDB_STORED_USER';
KW_PASSWORDLESS_USER_ADMIN:             'PASSWORDLESS_USER_ADMIN';
KW_PERSIST_RO_VARIABLES_ADMIN:          'PERSIST_RO_VARIABLES_ADMIN';
KW_PRIVILEGES:                          'PRIVILEGES';
KW_PROCESS:                             'PROCESS';
KW_RELOAD:                              'RELOAD';
KW_REPLICATION_APPLIER:                 'REPLICATION_APPLIER';
KW_REPLICATION_SLAVE_ADMIN:             'REPLICATION_SLAVE_ADMIN';
KW_RESOURCE:                            'RESOURCE';
KW_RESOURCE_GROUP_ADMIN:                'RESOURCE_GROUP_ADMIN';
KW_RESOURCE_GROUP_USER:                 'RESOURCE_GROUP_USER';
KW_ROLE_ADMIN:                          'ROLE_ADMIN';
KW_ROUTINE:                             'ROUTINE';
KW_S3:                                  'S3';
KW_SERVICE_CONNECTION_ADMIN:            'SERVICE_CONNECTION_ADMIN';
KW_SESSION_VARIABLES_ADMIN:             QUOTE_SYMB? 'SESSION_VARIABLES_ADMIN' QUOTE_SYMB?;
KW_SET_USER_ID:                         'SET_USER_ID';
KW_SHOW_ROUTINE:                        'SHOW_ROUTINE';
KW_SHUTDOWN:                            'SHUTDOWN';
KW_SUPER:                               'SUPER';
KW_SYSTEM_VARIABLES_ADMIN:              'SYSTEM_VARIABLES_ADMIN';
KW_TABLES:                              'TABLES';
KW_TABLE_ENCRYPTION_ADMIN:              'TABLE_ENCRYPTION_ADMIN';
KW_VERSION_TOKEN_ADMIN:                 'VERSION_TOKEN_ADMIN';
KW_XA_RECOVER_ADMIN:                    'XA_RECOVER_ADMIN';


// Charsets

KW_ARMSCII8:                            'ARMSCII8';
KW_ASCII:                               'ASCII';
KW_BIG5:                                'BIG5';
KW_CP1250:                              'CP1250';
KW_CP1251:                              'CP1251';
KW_CP1256:                              'CP1256';
KW_CP1257:                              'CP1257';
KW_CP850:                               'CP850';
KW_CP852:                               'CP852';
KW_CP866:                               'CP866';
KW_CP932:                               'CP932';
KW_DEC8:                                'DEC8';
KW_EUCJPMS:                             'EUCJPMS';
KW_EUCKR:                               'EUCKR';
KW_GB18030:                             'GB18030';
KW_GB2312:                              'GB2312';
KW_GBK:                                 'GBK';
KW_GEOSTD8:                             'GEOSTD8';
KW_GREEK:                               'GREEK';
KW_HEBREW:                              'HEBREW';
KW_HP8:                                 'HP8';
KW_KEYBCS2:                             'KEYBCS2';
KW_KOI8R:                               'KOI8R';
KW_KOI8U:                               'KOI8U';
KW_LATIN1:                              'LATIN1';
KW_LATIN2:                              'LATIN2';
KW_LATIN5:                              'LATIN5';
KW_LATIN7:                              'LATIN7';
KW_MACCE:                               'MACCE';
KW_MACROMAN:                            'MACROMAN';
KW_SJIS:                                'SJIS';
KW_SWE7:                                'SWE7';
KW_TIS620:                              'TIS620';
KW_UCS2:                                'UCS2';
KW_UJIS:                                'UJIS';
KW_UTF16:                               'UTF16';
KW_UTF16LE:                             'UTF16LE';
KW_UTF32:                               'UTF32';
KW_UTF8:                                'UTF8';
KW_UTF8MB3:                             'UTF8MB3';
KW_UTF8MB4:                             'UTF8MB4';


// DB Engines

KW_ARCHIVE:                             'ARCHIVE';
KW_BLACKHOLE:                           'BLACKHOLE';
KW_CSV:                                 'CSV';
KW_FEDERATED:                           'FEDERATED';
KW_INNODB:                              'INNODB';
KW_MEMORY:                              'MEMORY';
KW_MRG_MYISAM:                          'MRG_MYISAM';
KW_MYISAM:                              'MYISAM';
KW_NDB:                                 'NDB';
KW_NDBCLUSTER:                          'NDBCLUSTER';
KW_PERFORMANCE_SCHEMA:                  'PERFORMANCE_SCHEMA';
KW_TOKUDB:                              'TOKUDB';


// Transaction Levels

KW_REPEATABLE:                          'REPEATABLE';
KW_COMMITTED:                           'COMMITTED';
KW_UNCOMMITTED:                         'UNCOMMITTED';
KW_SERIALIZABLE:                        'SERIALIZABLE';


// Spatial data types

KW_GEOMETRYCOLLECTION:                  'GEOMETRYCOLLECTION';
KW_GEOMCOLLECTION:                      'GEOMCOLLECTION';
KW_GEOMETRY:                            'GEOMETRY';
KW_LINESTRING:                          'LINESTRING';
KW_MULTILINESTRING:                     'MULTILINESTRING';
KW_MULTIPOINT:                          'MULTIPOINT';
KW_MULTIPOLYGON:                        'MULTIPOLYGON';
KW_POINT:                               'POINT';
KW_POLYGON:                             'POLYGON';


// Common function names

KW_ABS:                                 'ABS';
KW_ACOS:                                'ACOS';
KW_ADDDATE:                             'ADDDATE';
KW_ADDTIME:                             'ADDTIME';
KW_AES_DECRYPT:                         'AES_DECRYPT';
KW_AES_ENCRYPT:                         'AES_ENCRYPT';
KW_AREA:                                'AREA';
KW_ASBINARY:                            'ASBINARY';
KW_ASIN:                                'ASIN';
KW_ASTEXT:                              'ASTEXT';
KW_ASWKB:                               'ASWKB';
KW_ASWKT:                               'ASWKT';
KW_ASYMMETRIC_DECRYPT:                  'ASYMMETRIC_DECRYPT';
KW_ASYMMETRIC_DERIVE:                   'ASYMMETRIC_DERIVE';
KW_ASYMMETRIC_ENCRYPT:                  'ASYMMETRIC_ENCRYPT';
KW_ASYMMETRIC_SIGN:                     'ASYMMETRIC_SIGN';
KW_ASYMMETRIC_VERIFY:                   'ASYMMETRIC_VERIFY';
KW_ATAN:                                'ATAN';
KW_ATAN2:                               'ATAN2';
KW_BENCHMARK:                           'BENCHMARK';
KW_BIN:                                 'BIN';
KW_BIT_COUNT:                           'BIT_COUNT';
KW_BIT_LENGTH:                          'BIT_LENGTH';
KW_BUFFER:                              'BUFFER';
KW_CATALOG_NAME:                        'CATALOG_NAME';
KW_CEIL:                                'CEIL';
KW_CEILING:                             'CEILING';
KW_CENTROID:                            'CENTROID';
KW_CHARACTER_LENGTH:                    'CHARACTER_LENGTH';
KW_CHARSET:                             'CHARSET';
KW_CHAR_LENGTH:                         'CHAR_LENGTH';
KW_COERCIBILITY:                        'COERCIBILITY';
KW_COLLATION:                           'COLLATION';
KW_COMPRESS:                            'COMPRESS';
KW_CONCAT:                              'CONCAT';
KW_CONCAT_WS:                           'CONCAT_WS';
KW_CONNECTION_ID:                       'CONNECTION_ID';
KW_CONV:                                'CONV';
KW_CONVERT_TZ:                          'CONVERT_TZ';
KW_COS:                                 'COS';
KW_COT:                                 'COT';
KW_CRC32:                               'CRC32';
KW_CREATE_ASYMMETRIC_PRIV_KEY:          'CREATE_ASYMMETRIC_PRIV_KEY';
KW_CREATE_ASYMMETRIC_PUB_KEY:           'CREATE_ASYMMETRIC_PUB_KEY';
KW_CREATE_DH_PARAMETERS:                'CREATE_DH_PARAMETERS';
KW_CREATE_DIGEST:                       'CREATE_DIGEST';
KW_CROSSES:                             'CROSSES';
KW_DATEDIFF:                            'DATEDIFF';
KW_DATE_FORMAT:                         'DATE_FORMAT';
KW_DAYNAME:                             'DAYNAME';
KW_DAYOFMONTH:                          'DAYOFMONTH';
KW_DAYOFWEEK:                           'DAYOFWEEK';
KW_DAYOFYEAR:                           'DAYOFYEAR';
KW_DECODE:                              'DECODE';
KW_DEGREES:                             'DEGREES';
KW_DES_DECRYPT:                         'DES_DECRYPT';
KW_DES_ENCRYPT:                         'DES_ENCRYPT';
KW_DIMENSION:                           'DIMENSION';
KW_DISJOINT:                            'DISJOINT';
KW_ELT:                                 'ELT';
KW_ENCODE:                              'ENCODE';
KW_ENCRYPT:                             'ENCRYPT';
KW_ENDPOINT:                            'ENDPOINT';
KW_ENGINE_ATTRIBUTE:                    'ENGINE_ATTRIBUTE';
KW_ENVELOPE:                            'ENVELOPE';
KW_EQUALS:                              'EQUALS';
KW_EXP:                                 'EXP';
KW_EXPORT_SET:                          'EXPORT_SET';
KW_EXTERIORRING:                        'EXTERIORRING';
KW_EXTRACTVALUE:                        'EXTRACTVALUE';
KW_FIELD:                               'FIELD';
KW_FIND_IN_SET:                         'FIND_IN_SET';
KW_FLOOR:                               'FLOOR';
KW_FORMAT:                              'FORMAT';
KW_FOUND_ROWS:                          'FOUND_ROWS';
KW_FROM_BASE64:                         'FROM_BASE64';
KW_FROM_DAYS:                           'FROM_DAYS';
KW_FROM_UNIXTIME:                       'FROM_UNIXTIME';
KW_GEOMCOLLFROMTEXT:                    'GEOMCOLLFROMTEXT';
KW_GEOMCOLLFROMWKB:                     'GEOMCOLLFROMWKB';
KW_GEOMETRYCOLLECTIONFROMTEXT:          'GEOMETRYCOLLECTIONFROMTEXT';
KW_GEOMETRYCOLLECTIONFROMWKB:           'GEOMETRYCOLLECTIONFROMWKB';
KW_GEOMETRYFROMTEXT:                    'GEOMETRYFROMTEXT';
KW_GEOMETRYFROMWKB:                     'GEOMETRYFROMWKB';
KW_GEOMETRYN:                           'GEOMETRYN';
KW_GEOMETRYTYPE:                        'GEOMETRYTYPE';
KW_GEOMFROMTEXT:                        'GEOMFROMTEXT';
KW_GEOMFROMWKB:                         'GEOMFROMWKB';
KW_GET_FORMAT:                          'GET_FORMAT';
KW_GET_LOCK:                            'GET_LOCK';
KW_GLENGTH:                             'GLENGTH';
KW_GREATEST:                            'GREATEST';
KW_GTID_SUBSET:                         'GTID_SUBSET';
KW_GTID_SUBTRACT:                       'GTID_SUBTRACT';
KW_HEX:                                 'HEX';
KW_IFNULL:                              'IFNULL';
KW_INET6_ATON:                          'INET6_ATON';
KW_INET6_NTOA:                          'INET6_NTOA';
KW_INET_ATON:                           'INET_ATON';
KW_INET_NTOA:                           'INET_NTOA';
KW_INSTR:                               'INSTR';
KW_INTERIORRINGN:                       'INTERIORRINGN';
KW_INTERSECT:                           'INTERSECT';
KW_INTERSECTS:                          'INTERSECTS';
KW_ISCLOSED:                            'ISCLOSED';
KW_ISEMPTY:                             'ISEMPTY';
KW_ISNULL:                              'ISNULL';
KW_ISSIMPLE:                            'ISSIMPLE';
KW_IS_FREE_LOCK:                        'IS_FREE_LOCK';
KW_IS_IPV4:                             'IS_IPV4';
KW_IS_IPV4_COMPAT:                      'IS_IPV4_COMPAT';
KW_IS_IPV4_MAPPED:                      'IS_IPV4_MAPPED';
KW_IS_IPV6:                             'IS_IPV6';
KW_IS_USED_LOCK:                        'IS_USED_LOCK';
KW_LAST_INSERT_ID:                      'LAST_INSERT_ID';
KW_LCASE:                               'LCASE';
KW_LEAST:                               'LEAST';
KW_LENGTH:                              'LENGTH';
KW_LINEFROMTEXT:                        'LINEFROMTEXT';
KW_LINEFROMWKB:                         'LINEFROMWKB';
KW_LINESTRINGFROMTEXT:                  'LINESTRINGFROMTEXT';
KW_LINESTRINGFROMWKB:                   'LINESTRINGFROMWKB';
KW_LN:                                  'LN';
KW_LOAD_FILE:                           'LOAD_FILE';
KW_LOCATE:                              'LOCATE';
KW_LOG:                                 'LOG';
KW_LOG10:                               'LOG10';
KW_LOG2:                                'LOG2';
KW_LOWER:                               'LOWER';
KW_LPAD:                                'LPAD';
KW_LTRIM:                               'LTRIM';
KW_MAKEDATE:                            'MAKEDATE';
KW_MAKETIME:                            'MAKETIME';
KW_MAKE_SET:                            'MAKE_SET';
KW_MASTER_POS_WAIT:                     'MASTER_POS_WAIT';
KW_MBRCONTAINS:                         'MBRCONTAINS';
KW_MBRDISJOINT:                         'MBRDISJOINT';
KW_MBREQUAL:                            'MBREQUAL';
KW_MBRINTERSECTS:                       'MBRINTERSECTS';
KW_MBROVERLAPS:                         'MBROVERLAPS';
KW_MBRTOUCHES:                          'MBRTOUCHES';
KW_MBRWITHIN:                           'MBRWITHIN';
KW_MD5:                                 'MD5';
KW_MLINEFROMTEXT:                       'MLINEFROMTEXT';
KW_MLINEFROMWKB:                        'MLINEFROMWKB';
KW_MONTHNAME:                           'MONTHNAME';
KW_MPOINTFROMTEXT:                      'MPOINTFROMTEXT';
KW_MPOINTFROMWKB:                       'MPOINTFROMWKB';
KW_MPOLYFROMTEXT:                       'MPOLYFROMTEXT';
KW_MPOLYFROMWKB:                        'MPOLYFROMWKB';
KW_MULTILINESTRINGFROMTEXT:             'MULTILINESTRINGFROMTEXT';
KW_MULTILINESTRINGFROMWKB:              'MULTILINESTRINGFROMWKB';
KW_MULTIPOINTFROMTEXT:                  'MULTIPOINTFROMTEXT';
KW_MULTIPOINTFROMWKB:                   'MULTIPOINTFROMWKB';
KW_MULTIPOLYGONFROMTEXT:                'MULTIPOLYGONFROMTEXT';
KW_MULTIPOLYGONFROMWKB:                 'MULTIPOLYGONFROMWKB';
KW_NAME_CONST:                          'NAME_CONST';
KW_NULLIF:                              'NULLIF';
KW_NUMGEOMETRIES:                       'NUMGEOMETRIES';
KW_NUMINTERIORRINGS:                    'NUMINTERIORRINGS';
KW_NUMPOINTS:                           'NUMPOINTS';
KW_OCT:                                 'OCT';
KW_OCTET_LENGTH:                        'OCTET_LENGTH';
KW_ORD:                                 'ORD';
KW_OVERLAPS:                            'OVERLAPS';
KW_PERIOD_ADD:                          'PERIOD_ADD';
KW_PERIOD_DIFF:                         'PERIOD_DIFF';
KW_PI:                                  'PI';
KW_POINTFROMTEXT:                       'POINTFROMTEXT';
KW_POINTFROMWKB:                        'POINTFROMWKB';
KW_POINTN:                              'POINTN';
KW_POLYFROMTEXT:                        'POLYFROMTEXT';
KW_POLYFROMWKB:                         'POLYFROMWKB';
KW_POLYGONFROMTEXT:                     'POLYGONFROMTEXT';
KW_POLYGONFROMWKB:                      'POLYGONFROMWKB';
KW_POW:                                 'POW';
KW_POWER:                               'POWER';
KW_QUOTE:                               'QUOTE';
KW_RADIANS:                             'RADIANS';
KW_RAND:                                'RAND';
KW_RANDOM:                              'RANDOM';
KW_RANDOM_BYTES:                        'RANDOM_BYTES';
KW_RELEASE_LOCK:                        'RELEASE_LOCK';
KW_REVERSE:                             'REVERSE';
KW_ROUND:                               'ROUND';
KW_ROW_COUNT:                           'ROW_COUNT';
KW_RPAD:                                'RPAD';
KW_RTRIM:                               'RTRIM';
KW_SEC_TO_TIME:                         'SEC_TO_TIME';
KW_SECONDARY_ENGINE_ATTRIBUTE:          'SECONDARY_ENGINE_ATTRIBUTE';
KW_SESSION_USER:                        'SESSION_USER';
KW_SHA:                                 'SHA';
KW_SHA1:                                'SHA1';
KW_SHA2:                                'SHA2';
KW_SCHEMA_NAME:                         'SCHEMA_NAME';
KW_SIGN:                                'SIGN';
KW_SIN:                                 'SIN';
KW_SLEEP:                               'SLEEP';
KW_SOUNDEX:                             'SOUNDEX';
KW_SQL_THREAD_WAIT_AFTER_GTIDS:         'SQL_THREAD_WAIT_AFTER_GTIDS';
KW_SQRT:                                'SQRT';
KW_SRID:                                'SRID';
KW_STARTPOINT:                          'STARTPOINT';
KW_STRCMP:                              'STRCMP';
KW_STR_TO_DATE:                         'STR_TO_DATE';
KW_ST_AREA:                             'ST_AREA';
KW_ST_ASBINARY:                         'ST_ASBINARY';
KW_ST_ASTEXT:                           'ST_ASTEXT';
KW_ST_ASWKB:                            'ST_ASWKB';
KW_ST_ASWKT:                            'ST_ASWKT';
KW_ST_BUFFER:                           'ST_BUFFER';
KW_ST_CENTROID:                         'ST_CENTROID';
KW_ST_CONTAINS:                         'ST_CONTAINS';
KW_ST_CROSSES:                          'ST_CROSSES';
KW_ST_DIFFERENCE:                       'ST_DIFFERENCE';
KW_ST_DIMENSION:                        'ST_DIMENSION';
KW_ST_DISJOINT:                         'ST_DISJOINT';
KW_ST_DISTANCE:                         'ST_DISTANCE';
KW_ST_ENDPOINT:                         'ST_ENDPOINT';
KW_ST_ENVELOPE:                         'ST_ENVELOPE';
KW_ST_EQUALS:                           'ST_EQUALS';
KW_ST_EXTERIORRING:                     'ST_EXTERIORRING';
KW_ST_GEOMCOLLFROMTEXT:                 'ST_GEOMCOLLFROMTEXT';
KW_ST_GEOMCOLLFROMTXT:                  'ST_GEOMCOLLFROMTXT';
KW_ST_GEOMCOLLFROMWKB:                  'ST_GEOMCOLLFROMWKB';
KW_ST_GEOMETRYCOLLECTIONFROMTEXT:       'ST_GEOMETRYCOLLECTIONFROMTEXT';
KW_ST_GEOMETRYCOLLECTIONFROMWKB:        'ST_GEOMETRYCOLLECTIONFROMWKB';
KW_ST_GEOMETRYFROMTEXT:                 'ST_GEOMETRYFROMTEXT';
KW_ST_GEOMETRYFROMWKB:                  'ST_GEOMETRYFROMWKB';
KW_ST_GEOMETRYN:                        'ST_GEOMETRYN';
KW_ST_GEOMETRYTYPE:                     'ST_GEOMETRYTYPE';
KW_ST_GEOMFROMTEXT:                     'ST_GEOMFROMTEXT';
KW_ST_GEOMFROMWKB:                      'ST_GEOMFROMWKB';
KW_ST_INTERIORRINGN:                    'ST_INTERIORRINGN';
KW_ST_INTERSECTION:                     'ST_INTERSECTION';
KW_ST_INTERSECTS:                       'ST_INTERSECTS';
KW_ST_ISCLOSED:                         'ST_ISCLOSED';
KW_ST_ISEMPTY:                          'ST_ISEMPTY';
KW_ST_ISSIMPLE:                         'ST_ISSIMPLE';
KW_ST_LINEFROMTEXT:                     'ST_LINEFROMTEXT';
KW_ST_LINEFROMWKB:                      'ST_LINEFROMWKB';
KW_ST_LINESTRINGFROMTEXT:               'ST_LINESTRINGFROMTEXT';
KW_ST_LINESTRINGFROMWKB:                'ST_LINESTRINGFROMWKB';
KW_ST_NUMGEOMETRIES:                    'ST_NUMGEOMETRIES';
KW_ST_NUMINTERIORRING:                  'ST_NUMINTERIORRING';
KW_ST_NUMINTERIORRINGS:                 'ST_NUMINTERIORRINGS';
KW_ST_NUMPOINTS:                        'ST_NUMPOINTS';
KW_ST_OVERLAPS:                         'ST_OVERLAPS';
KW_ST_POINTFROMTEXT:                    'ST_POINTFROMTEXT';
KW_ST_POINTFROMWKB:                     'ST_POINTFROMWKB';
KW_ST_POINTN:                           'ST_POINTN';
KW_ST_POLYFROMTEXT:                     'ST_POLYFROMTEXT';
KW_ST_POLYFROMWKB:                      'ST_POLYFROMWKB';
KW_ST_POLYGONFROMTEXT:                  'ST_POLYGONFROMTEXT';
KW_ST_POLYGONFROMWKB:                   'ST_POLYGONFROMWKB';
KW_ST_SRID:                             'ST_SRID';
KW_ST_STARTPOINT:                       'ST_STARTPOINT';
KW_ST_SYMDIFFERENCE:                    'ST_SYMDIFFERENCE';
KW_ST_TOUCHES:                          'ST_TOUCHES';
KW_ST_UNION:                            'ST_UNION';
KW_ST_WITHIN:                           'ST_WITHIN';
KW_ST_X:                                'ST_X';
KW_ST_Y:                                'ST_Y';
KW_SUBDATE:                             'SUBDATE';
KW_SUBSTRING_INDEX:                     'SUBSTRING_INDEX';
KW_SUBTIME:                             'SUBTIME';
KW_SYSTEM:                              'SYSTEM';
KW_SYSTEM_USER:                         'SYSTEM_USER';
KW_TAN:                                 'TAN';
KW_THREAD_PRIORITY:                     'THREAD_PRIORITY';
KW_TIMEDIFF:                            'TIMEDIFF';
KW_TIMESTAMPADD:                        'TIMESTAMPADD';
KW_TIMESTAMPDIFF:                       'TIMESTAMPDIFF';
KW_TIME_FORMAT:                         'TIME_FORMAT';
KW_TIME_TO_SEC:                         'TIME_TO_SEC';
KW_TOUCHES:                             'TOUCHES';
KW_TO_BASE64:                           'TO_BASE64';
KW_TO_DAYS:                             'TO_DAYS';
KW_TO_SECONDS:                          'TO_SECONDS';
KW_TP_CONNECTION_ADMIN:                 'TP_CONNECTION_ADMIN';
KW_TYPE:                                'TYPE';
KW_UCASE:                               'UCASE';
KW_UNCOMPRESS:                          'UNCOMPRESS';
KW_UNCOMPRESSED_LENGTH:                 'UNCOMPRESSED_LENGTH';
KW_UNHEX:                               'UNHEX';
KW_UNIX_TIMESTAMP:                      'UNIX_TIMESTAMP';
KW_UPDATEXML:                           'UPDATEXML';
KW_UPPER:                               'UPPER';
KW_UUID:                                'UUID';
KW_UUID_SHORT:                          'UUID_SHORT';
KW_VALIDATE_PASSWORD_STRENGTH:          'VALIDATE_PASSWORD_STRENGTH';
KW_VERSION:                             'VERSION';
KW_WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS:   'WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS';
KW_WEEKDAY:                             'WEEKDAY';
KW_WEEKOFYEAR:                          'WEEKOFYEAR';
KW_WEIGHT_STRING:                       'WEIGHT_STRING';
KW_WITHIN:                              'WITHIN';
KW_YEARWEEK:                            'YEARWEEK';
KW_Y_FUNCTION:                          'Y';
KW_X_FUNCTION:                          'X';




// Operators
// Operators. Assigns

VAR_ASSIGN:                          ':=';
PLUS_ASSIGN:                         '+=';
MINUS_ASSIGN:                        '-=';
MULT_ASSIGN:                         '*=';
DIV_ASSIGN:                          '/=';
MOD_ASSIGN:                          '%=';
AND_ASSIGN:                          '&=';
XOR_ASSIGN:                          '^=';
OR_ASSIGN:                           '|=';


// Operators. Arithmetics

STAR:                                '*';
DIVIDE:                              '/';
MODULE:                              '%';
PLUS:                                '+';
MINUS:                               '-';
DIV:                                 'DIV';
MOD:                                 'MOD';


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
LR_BRACKET:                          '(';
RR_BRACKET:                          ')';
COMMA:                               ',';
SEMI:                                ';';
AT_SIGN:                             '@';
ZERO_DECIMAL:                        '0';
ONE_DECIMAL:                         '1';
TWO_DECIMAL:                         '2';
THREE_DECIMAL:                       '3';
SINGLE_QUOTE_SYMB:                   '\'';
DOUBLE_QUOTE_SYMB:                   '"';
REVERSE_QUOTE_SYMB:                  '`';
COLON_SYMB:                          ':';

fragment QUOTE_SYMB
    : SINGLE_QUOTE_SYMB | DOUBLE_QUOTE_SYMB | REVERSE_QUOTE_SYMB
    ;


// Charsets
CHARSET_REVERSE_QOUTE_STRING:        '`' CHARSET_NAME '`';


// File's sizes
FILESIZE_LITERAL:                    DEC_DIGIT+ ('K'|'M'|'G'|'T');


// Literal Primitives
START_NATIONAL_STRING_LITERAL:       'N' SQUOTA_STRING;
STRING_LITERAL:                      DQUOTA_STRING | SQUOTA_STRING | BQUOTA_STRING;
DECIMAL_LITERAL:                     DEC_DIGIT+;
HEXADECIMAL_LITERAL:                 'X' '\'' (HEX_DIGIT HEX_DIGIT)+ '\''
                                     | '0X' HEX_DIGIT+;

REAL_LITERAL:                        DEC_DIGIT* '.' DEC_DIGIT+
                                     | DEC_DIGIT+ '.' EXPONENT_NUM_PART
                                     | DEC_DIGIT* '.' (DEC_DIGIT+ EXPONENT_NUM_PART)
                                     | DEC_DIGIT+ EXPONENT_NUM_PART;
NULL_SPEC_LITERAL:                   '\\' 'N';
BIT_STRING:                          BIT_STRING_L;
STRING_CHARSET_NAME:                 '_' CHARSET_NAME;




// Hack for dotID
// Prevent recognize string:         .123somelatin AS ((.123), FLOAT_LITERAL), ((somelatin), ID)
//  it must recoginze:               .123somelatin AS ((.), DOT), (123somelatin, ID)

DOT_ID:                              '.' ID_LITERAL;



// Identifiers

ID:                                  ID_LITERAL;
// DOUBLE_QUOTE_ID:                  '"' ~'"'+ '"';
REVERSE_QUOTE_ID:                    BQUOTA_STRING;
HOST_IP_ADDRESS:                     (AT_SIGN IP_ADDRESS);
LOCAL_ID:                            AT_SIGN
                                     (
                                       STRING_LITERAL | [A-Z0-9._$\u0080-\uFFFF]+
                                     );
GLOBAL_ID:                           AT_SIGN AT_SIGN
                                     (
                                       [A-Z0-9._$\u0080-\uFFFF]+ | BQUOTA_STRING
                                     );
PERSIST_ID:                           AT_SIGN AT_SIGN
                                     (
                                       [A-Z0-9._$\u0080-\uFFFF]+ | BQUOTA_STRING
                                     );


// Fragments for Literal primitives

fragment CHARSET_NAME:               KW_ARMSCII8 | KW_ASCII | KW_BIG5 | KW_BINARY | KW_CP1250
                                     | KW_CP1251 | KW_CP1256 | KW_CP1257 | KW_CP850
                                     | KW_CP852 | KW_CP866 | KW_CP932 | KW_DEC8 | KW_EUCJPMS
                                     | KW_EUCKR | KW_GB2312 | KW_GBK | KW_GEOSTD8 | KW_GREEK
                                     | KW_HEBREW | KW_HP8 | KW_KEYBCS2 | KW_KOI8R | KW_KOI8U
                                     | KW_LATIN1 | KW_LATIN2 | KW_LATIN5 | KW_LATIN7
                                     | KW_MACCE | KW_MACROMAN | KW_SJIS | KW_SWE7 | KW_TIS620
                                     | KW_UCS2 | KW_UJIS | KW_UTF16 | KW_UTF16LE | KW_UTF32
                                     | KW_UTF8 | KW_UTF8MB3 | KW_UTF8MB4;

fragment EXPONENT_NUM_PART:          'E' [-+]? DEC_DIGIT+;
fragment ID_LITERAL:                 [A-Z_$0-9\u0080-\uFFFF]*?[A-Z_$\u0080-\uFFFF]+?[A-Z_$0-9\u0080-\uFFFF]*;
fragment DQUOTA_STRING:              '"' ( '\\'. | '""' | ~('"'| '\\') )* '"';
fragment SQUOTA_STRING:              '\'' ('\\'. | '\'\'' | ~('\'' | '\\'))* '\'';
fragment BQUOTA_STRING:              '`' ( ~'`' | '``' )* '`';
fragment HEX_DIGIT:                  [0-9A-F];
fragment DEC_DIGIT:                  [0-9];
fragment BIT_STRING_L:               'B' '\'' [01]+ '\'';
fragment IP_ADDRESS:                 [0-9]+ '.' [0-9.]+ | [0-9A-F]* ':' [0-9A-F]* ':' [0-9A-F:]+;


// Last tokens must generate Errors

ERROR_RECONGNIGION:                  .    -> channel(ERRORCHANNEL);
