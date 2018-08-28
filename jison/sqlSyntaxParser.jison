// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

%left 'AND' 'OR'
%left 'BETWEEN'
%left 'NOT' '!' '~'
%left '=' '<' '>' 'COMPARISON_OPERATOR'
%left '-' '*' 'ARITHMETIC_OPERATOR'

%left ';' ','
%nonassoc 'IN' 'IS' '<impala>ILIKE' '<impala>IREGEXP' 'LIKE' 'RLIKE' 'REGEXP' 'EXISTS' NEGATION

%start SqlSyntax

%%// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

SqlSyntax
 : NewStatement SqlStatements EOF
 ;

SqlAutocomplete
 : NewStatement SqlStatements EOF
   {
     return parser.yy.result;
   }
 | NewStatement SqlStatements_EDIT EOF
   {
     return parser.yy.result;
   }
 ;

NewStatement
 : /* empty */
   {
     parser.prepareNewStatement();
   }
 ;

SqlStatements
 :
 | SqlStatement
   {
     parser.addStatementLocation(@1);
   }
 | SqlStatements ';' NewStatement SqlStatements
 ;

SqlStatements_EDIT
 : SqlStatement_EDIT
   {
     parser.addStatementLocation(@1);
   }
 | SqlStatement_EDIT ';' NewStatement SqlStatements
   {
     parser.addStatementLocation(@1);
   }
 | SqlStatements ';' NewStatement SqlStatement_EDIT
   {
     parser.addStatementLocation(@4);
   }
 | SqlStatements ';' NewStatement SqlStatement_EDIT ';' NewStatement SqlStatements
   {
     parser.addStatementLocation(@4);
   }
 ;

SqlStatement
 : DataDefinition
 | DataManipulation
 | QuerySpecification
 | ExplainClause DataDefinition
 | ExplainClause DataManipulation
 | ExplainClause QuerySpecification
 ;

SqlStatement_EDIT
 : AnyCursor
   {
     if (parser.isHive()) {
       parser.suggestDdlAndDmlKeywords(['EXPLAIN', 'FROM']);
     } else if (parser.isImpala()) {
       parser.suggestDdlAndDmlKeywords(['EXPLAIN']);
     } else {
       parser.suggestDdlAndDmlKeywords();
     }
   }
 | CommonTableExpression 'CURSOR'
   {
     if (parser.isHive() || parser.isImpala()) {
       parser.suggestKeywords(['INSERT', 'SELECT']);
     } else {
       parser.suggestKeywords(['SELECT']);
     }
   }
 | ExplainClause_EDIT
 | DataDefinition_EDIT
 | DataManipulation_EDIT
 | QuerySpecification_EDIT
 | SetSpecification_EDIT
 | ExplainClause DataDefinition_EDIT
 | ExplainClause DataManipulation_EDIT
 | ExplainClause QuerySpecification_EDIT
 | ExplainClause_EDIT DataDefinition
 | ExplainClause_EDIT DataManipulation
 | ExplainClause_EDIT QuerySpecification
 ;

NonReservedKeyword
 : '<hive>ABORT'
 | '<hive>ADD'
 | '<hive>ADMIN'
 | '<hive>AFTER'
 | '<hive>ANALYZE'
 | '<hive>ARCHIVE'
 | '<hive>AVRO'
 | '<hive>BUCKET'
 | '<hive>BUCKETS'
 | '<hive>CASCADE'
 | '<hive>CHANGE'
 | '<hive>CLUSTERED'
 | '<hive>COLLECTION'
 | '<hive>COLUMNS'
 | '<hive>COMMENT'
 | '<hive>COMPACT'
 | '<hive>COMPACTIONS'
 | '<hive>COMPUTE'
 | '<hive>CONCATENATE'
 | '<hive>DATA'
 | '<hive>DATABASES'
 | '<hive>DBPROPERTIES'
 | '<hive>DEFERRED'
 | '<hive>DEFINED'
 | '<hive>DELIMITED'
 | '<hive>DEPENDENCY'
 | '<hive>DIRECTORY'
 | '<hive>DISABLE'
 | '<hive>DOUBLE_PRECISION'
 | '<hive>ENABLE'
 | '<hive>ESCAPED'
 | '<hive>EXCHANGE'
 | '<hive>EXPLAIN'
 | '<hive>EXPORT'
 | '<hive>FIELDS'
 | '<hive>FILE'
 | '<hive>FILEFORMAT'
 | '<hive>FIRST'
 | '<hive>FORMAT'
 | '<hive>FUNCTIONS'
 | '<hive>INPATH'
 | '<hive>INPUTFORMAT'
 | '<hive>JAR'
 | '<hive>IDXPROPERTIES'
 | '<hive>ITEMS'
 | '<hive>KEY'
 | '<hive>KEYS'
 | '<hive>LINES'
 | '<hive>LOAD'
 | '<hive>LOCATION'
 | '<hive>LOCKS'
 | '<hive>MATCHED'
 | '<hive>METADATA'
 | '<hive>MERGE'
 | '<hive>MSCK'
 | '<hive>NOSCAN'
 | '<hive>NOVALIDATE'
 | '<hive>NO_DROP'
 | '<hive>OFFLINE'
 | '<hive>ORC'
 | '<hive>OUTPUTFORMAT'
 | '<hive>OVERWRITE'
 | '<hive>OWNER'
 | '<hive>PARQUET'
 | '<hive>PARTITIONED'
 | '<hive>PARTITIONS'
 | '<hive>PERCENT'
 | '<hive>PRIVILEGES'
 | '<hive>PURGE'
 | '<hive>RCFILE'
 | '<hive>REBUILD'
 | '<hive>RELOAD'
 | '<hive>RELY'
 | '<hive>NORELY'
 | '<hive>REPAIR'
 | '<hive>REPLICATION'
 | '<hive>RECOVER'
 | '<hive>RENAME'
 | '<hive>REPLACE'
 | '<hive>RESTRICT'
 | '<hive>ROLE'
 | '<hive>ROLES'
 | '<hive>SCHEMAS'
 | '<hive>SEQUENCEFILE'
 | '<hive>SERDE'
 | '<hive>SERDEPROPERTIES'
 | '<hive>SETS'
 | '<hive>SHOW'
 | '<hive>SKEWED'
 | '<hive>SORTED'
 | '<hive>STATISTICS'
 | '<hive>STORED'
 | '<hive>STRING'
 | 'STRUCT'
 | '<hive>TABLES'
 | '<hive>TBLPROPERTIES'
 | '<hive>TEMPORARY'
 | '<hive>TERMINATED'
 | '<hive>TEXTFILE'
 | '<hive>TIMESTAMP'
 | '<hive>TINYINT'
 | '<hive>TOUCH'
 | '<hive>TRANSACTIONS'
 | '<hive>UNARCHIVE'
 | '<hive>UNIONTYPE'
 | '<hive>USE'
 | '<hive>USER'
 | '<hive>VIEW'
 | '<hive>WAIT'
 | '<hive>DAY'
 | '<hive>HOUR'
 | '<hive>MINUTE'
 | '<hive>MONTH'
 | '<hive>QUARTER'
 | '<hive>SECOND'
 | '<hive>WEEK'
 | '<hive>YEAR'
// | '<hive>ASC'      // These cause conflicts, we could use a separate lexer state for DESCRIBE, ALTER, GRANT, REVOKE and SHOW
// | '<hive>CLUSTER'
// | '<hive>DESC'
// | '<hive>DISTRIBUTE'
// | '<hive>FORMATTED'
// | '<hive>FUNCTION'
// | '<hive>INDEX'
// | '<hive>INDEXES'
// | '<hive>LOCK'
// | '<hive>SCHEMA'
// | '<hive>SHOW_DATABASE'
// | '<hive>SORT'
 ;

NonReservedKeyword
 : '<impala>ANALYTIC'
// | '<impala>ANTI'
 | '<impala>CURRENT'
 | '<impala>GRANT'
 | '<impala>RECOVER'
 | '<impala>ROLE'
 | '<impala>ROLES'
 | '<impala>URI'
 | '<impala>SERVER'
 | '<impala>UNKNOWN'
// | '<impala>BROADCAST'
// | '<impala>NOSHUFFLE'
// | '<impala>SHUFFLE'
// TODO: Check if following are true
 | '<impala>BLOCK_SIZE'
 | '<impala>COMPRESSION'
 | '<impala>DEFAULT'
 | '<impala>ENCODING'
 | '<impala>KEY'
 ;

NonReservedKeyword
 : 'ROLE'
 | 'OPTION'
 ;

RegularIdentifier
 : 'REGULAR_IDENTIFIER'
 | 'VARIABLE_REFERENCE'
 | NonReservedKeyword
 ;

ExplainClause
 : '<hive>EXPLAIN' OptionalHiveExplainTypes
 | '<impala>EXPLAIN'
 ;

ExplainClause_EDIT
 : '<hive>EXPLAIN' OptionalHiveExplainTypes 'CURSOR'
   {
     if (!$2) {
       parser.suggestDdlAndDmlKeywords([{ value: 'AUTHORIZATION', weight: 2 }, { value: 'DEPENDENCY', weight: 2 }, { value: 'EXTENDED', weight: 2 }]);
     } else {
       parser.suggestDdlAndDmlKeywords();
     }
   }
 | '<impala>EXPLAIN' 'CURSOR'
   {
     parser.suggestDdlAndDmlKeywords();
   }
 ;

OptionalHiveExplainTypes
 :
 | '<hive>AUTHORIZATION'
 | '<hive>DEPENDENCY'
 | '<hive>EXTENDED'
 ;

// This is a work-around for error handling when a statement starts with some token that the parser can understand but
// it's not a valid statement (see ErrorStatement). It contains everything except valid starting tokens ('SELECT', 'USE' etc.)
NonStartingToken
 : '<hive>ADMIN' | '<hive>ALL' | '<hive>AS' | '<hive>AUTHORIZATION' | '<hive>AVRO' | '<hive>BINARY' | '<hive>BUCKET' | '<hive>BUCKETS' | '<hive>CACHE' | '<hive>CLUSTER' | '<hive>CLUSTERED' | '<hive>COLLECTION' | '<hive>COMPUTE' | '<hive>CONF' | '<hive>CONSTRAINT' | '<hive>CUBE' | '<hive>CURRENT' | '<hive>DBPROPERTIES' | '<hive>DATE' | '<hive>DEFERRED' | '<hive>DELIMITED' | '<hive>DEPENDENCY' | '<hive>DIRECTORY' | '<hive>DISTRIBUTE' | '<hive>DISTRIBUTED' | '<hive>DOUBLE_PRECISION' |'<hive>ESCAPED' | '<hive>EXTENDED' | '<hive>EXTERNAL' | '<hive>FIELDS' | '<hive>FILE' | '<hive>FOR' | '<hive>FOREIGN' | '<hive>FORMAT' | '<hive>FUNCTION' | '<hive>GRANT' | '<hive>GROUPING' | '<hive>IDXPROPERTIES' | '<hive>KEY' | '<hive>LATERAL' | '<hive>LOCAL' | '<hive>LOCK' | '<hive>MACRO' | '<hive>MATCHED' | '<hive>NORELY' | '<hive>NOVALIDATE' | '<hive>OVERWRITE' | '<hive>OWNER' | '<hive>PARTITION' | '<hive>PERCENT' | '<hive>PRIVILEGES' | '<hive>PRIMARY' | '<hive>REBUILD' | '<hive>REFERENCES' | '<hive>RELY' | '<hive>REPAIR' | '<hive>REPLICATION' |'<hive>ROLLUP' | '<hive>SETS' | '<hive>STATISTICS' | '<hive>SHOW_DATABASE' | '<hive>TABLE' | '<hive>TIMESTAMP' |'<hive>USER' | '<hive>ASC' | '<hive>COLUMNS' | '<hive>COMMENT' | '<hive>COMPACTIONS' | '<hive>DATA' | '<hive>DATABASES' | '<hive>DEFINED' | '<hive>DESC' |  '<hive>FORMATTED' | '<hive>FUNCTIONS' | '<hive>INDEX' | '<hive>INDEXES' | '<hive>INPATH' | '<hive>INPUTFORMAT' | '<hive>ITEMS' | '<hive>JAR' | '<hive>KEYS' | '<hive>LINES' | '<hive>LOCATION' | '<hive>LOCKS' | '<hive>METADATA' | '<hive>NONE' | '<hive>NOSCAN' | '<hive>OF' | '<hive>ORC' | '<hive>OUT' | '<hive>OUTPUTFORMAT' | '<hive>PARQUET' | '<hive>PARTITIONED' | '<hive>PARTITIONS' | '<hive>RCFILE' | '<hive>ROLE' | '<hive>ROLES' | '<hive>SCHEMA' | '<hive>SCHEMAS' | '<hive>SEQUENCEFILE' | '<hive>SERDE' | '<hive>SERDEPROPERTIES' | '<hive>SKEWED' | '<hive>SORTED' | '<hive>STORED' | '<hive>STORED_AS_DIRECTORIES' | '<hive>STRING' | '<hive>TABLES' | '<hive>TABLESAMPLE' | '<hive>TBLPROPERTIES' | '<hive>TEMPORARY' | '<hive>TERMINATED' | '<hive>TEXTFILE' | '<hive>TINYINT' | '<hive>TRANSACTIONS' | '<hive>UNIONTYPE' | '<hive>USING' | '<hive>VIEW' | '<hive>VIEWS' | '<hive>WAIT' | '<hive>WINDOW' | '<hive>.' | '<hive>[' | '<hive>]'
 | '<impala>AGGREGATE' | '<impala>AVRO' | '<impala>CACHED' | '<impala>CASCADE' | '<impala>CLOSE_FN' | '<impala>COLUMN' | '<impala>DATA' | '<impala>DATABASES' | '<impala>DELETE' | '<impala>DELIMITED' | '<impala>ESCAPED' | '<impala>EXTENDED' |'<impala>EXTERNAL' | '<impala>FIELDS' | '<impala>FILES' | '<impala>FINALIZE_FN' | '<impala>FIRST' | '<impala>FORMAT' | '<impala>FORMATTED' | '<impala>FUNCTION' | '<impala>FUNCTIONS' | '<impala>GROUP' | '<impala>HASH' | '<impala>ILIKE' | '<impala>INCREMENTAL' | '<impala>INTERMEDIATE' | '<impala>INTERVAL' | '<impala>INIT_FN' | '<impala>INPATH' | '<impala>IREGEXP' | '<impala>KEY' | '<impala>KUDU' | '<impala>LAST' | '<impala>LIMIT' | '<impala>LINES' | '<impala>LOCATION' | '<impala>MERGE_FN' | '<impala>NULLS' | '<impala>PARTITIONS' | '<impala>PREPARE_FN' | '<impala>PRIMARY' | '<impala>RANGE' | '<impala>REAL' | '<impala>RECOVER' | '<impala>REPEATABLE' | '<impala>REPLICATION' | '<impala>RESTRICT' | '<impala>RETURNS' | '<impala>SCHEMAS' | '<impala>SERIALIZE_FN' | '<impala>SERVER' | '<impala>SORT' | '<impala>STATS' | '<impala>STRAIGHT_JOIN' | '<impala>SYMBOL' | '<impala>TABLE' | '<impala>TABLES' | '<impala>TABLESAMPLE' | '<impala>URI' | '<impala>USING' | '<impala>ANALYTIC' | '<impala>ANTI' | '<impala>CURRENT' | '<impala>GRANT' | '<impala>NOSHUFFLE' | '<impala>PARQUET' | '<impala>PARTITIONED' | '<impala>RCFILE' | '<impala>ROLE' | '<impala>ROLES' | '<impala>SEQUENCEFILE' | '<impala>SERDEPROPERTIES' | '<impala>SHUFFLE' | '<impala>STORED' | '<impala>TBLPROPERTIES' | '<impala>TERMINATED' | '<impala>TEXTFILE' | '<impala>UPDATE_FN' | '<impala>BROADCAST' | '<impala>...' | '<impala>.' | '<impala>[' | '<impala>]'
 | 'ALL' | 'ARRAY' | 'AS' | 'ASC' | 'BETWEEN' | 'BIGINT' | 'BOOLEAN' | 'BY' | 'CASE' | 'CHAR' | 'CROSS' | 'CURRENT' | 'DATABASE' | 'DECIMAL' | 'DISTINCT' | 'DOUBLE' | 'DESC' | 'ELSE' | 'END' | 'EXISTS' | 'FALSE' | 'FLOAT' | 'FOLLOWING' | 'FROM' | 'FULL' | 'GROUP' | 'HAVING' | 'IF' | 'IN' | 'INNER' | 'INT' | 'INTO' | 'IS' | 'JOIN' | 'LEFT' | 'LIKE' | 'LIMIT' | 'MAP' | 'NOT' | 'NULL' | 'ON' | 'OPTION' | 'ORDER' | 'OUTER' | 'OVER' | 'PARTITION' | 'PRECEDING' | 'PURGE' | 'RANGE' | 'REGEXP' | 'RIGHT' | 'RLIKE' | 'ROW' | 'ROWS' | 'SCHEMA' | 'SEMI' | 'SET' | 'SMALLINT' | 'STRING' | 'STRUCT' | 'TABLE' | 'THEN' | 'TIMESTAMP' | 'TINYINT' | 'TRUE' | 'UNION' | 'VALUES' | 'VARCHAR' | 'WHEN' | 'WHERE' | 'WITH' | 'ROLE'
 | 'AVG' | 'CAST' | 'COUNT' | 'MAX' | 'MIN' | 'STDDEV_POP' | 'STDDEV_SAMP' | 'SUM' | 'VARIANCE' | 'VAR_POP' | 'VAR_SAMP'
 | '<hive>COLLECT_SET' | '<hive>COLLECT_LIST' | '<hive>CORR' | '<hive>COVAR_POP' | '<hive>COVAR_SAMP' | '<hive>DAY' | '<hive>DAYOFWEEK' | '<hive>HISTOGRAM_NUMERIC' | '<hive>HOUR' | '<hive>MINUTE' | '<hive>MONTH' | '<hive>NTILE' | '<hive>PERCENTILE' | '<hive>PERCENTILE_APPROX' | '<hive>QUARTER' | '<hive>SECOND' | '<hive>WEEK' | '<hive>YEAR'
 | '<impala>APPX_MEDIAN' | '<impala>EXTRACT' | '<impala>GROUP_CONCAT' | '<impala>NDV' | '<impala>STDDEV' | '<impala>VARIANCE_POP' | '<impala>VARIANCE_SAMP'
 | 'ANALYTIC'
 | 'UNSIGNED_INTEGER' | 'UNSIGNED_INTEGER_E' | 'REGULAR_IDENTIFIER' | 'HDFS_START_QUOTE' | 'AND' | 'OR' | '=' | '<' | '>' | 'COMPARISON_OPERATOR' | '-' | '*' | 'ARITHMETIC_OPERATOR' | ',' | '.' | '~' | '!' | '(' | ')' | '[' | ']' | 'VARIABLE_REFERENCE' | 'BACKTICK' | 'SINGLE_QUOTE' | 'DOUBLE_QUOTE'
 ;

DataDefinition
 : DescribeStatement
 ;

DataDefinition_EDIT
 : DescribeStatement_EDIT
 ;

// ===================================== Commonly used constructs =====================================

AggregateOrAnalytic
 : '<impala>AGGREGATE'
 | '<impala>ANALYTIC'
 ;

Commas
 : ','
 | Commas ','
 ;

AnyAs
 : 'AS'
 | '<hive>AS'
 ;

AnyCreate
 : 'CREATE'
 | '<hive>CREATE'
 | '<impala>CREATE'
 ;

AnyCursor
 : 'CURSOR'
 | 'PARTIAL_CURSOR'
 ;

AnyDot
 : '.'
 | '<impala>.'
 | '<hive>.'
 ;

AnyFromOrIn
 : 'FROM'
 | 'IN'
 ;

AnyGroup
 : 'GROUP'
 | '<hive>GROUP'
 | '<impala>GROUP'
 ;

AnyPartition
 : 'PARTITION'
 | '<hive>PARTITION'
 ;

AnyTable
 : 'TABLE'
 | '<hive>TABLE'
 | '<impala>TABLE'
 ;

DatabaseOrSchema
 : 'DATABASE'
 | 'SCHEMA'
 | '<hive>SCHEMA'
 ;

FromOrIn
 : 'FROM'
 | 'IN'
 ;

HiveIndexOrIndexes
 : '<hive>INDEX'
 | '<hive>INDEXES'
 ;

HiveOrImpalaComment
 : '<hive>COMMENT'
 | '<impala>COMMENT'
 ;

HiveOrImpalaCreate
 : '<hive>CREATE'
 | '<impala>CREATE'
 ;

HiveOrImpalaDatabasesOrSchemas
 : '<hive>DATABASES'
 | '<hive>SCHEMAS'
 | '<impala>DATABASES'
 | '<impala>SCHEMAS'
 ;

HiveOrImpalaEscaped
 : '<hive>ESCAPED'
 | '<impala>ESCAPED'
 ;

HiveOrImpalaFields
 : '<hive>FIELDS'
 | '<impala>FIELDS'
 ;

HiveOrImpalaFormat
 : '<hive>FORMAT'
 | '<impala>FORMAT'
 ;

HiveOrImpalaLeftSquareBracket
 : '<hive>['
 | '<impala>['
 ;

HiveOrImpalaLines
 : '<hive>LINES'
 | '<impala>LINES'
 ;

HiveOrImpalaLocation
 : '<hive>LOCATION'
 | '<impala>LOCATION'
 ;

HiveOrImpalaRightSquareBracket
 : '<hive>]'
 | '<impala>]'
 ;

HiveOrImpalaPartitioned
 : '<hive>PARTITIONED'
 | '<impala>PARTITIONED'
 ;

HiveOrImpalaStored
 : '<hive>STORED'
 | '<impala>STORED'
 ;

HiveOrImpalaTables
 : '<hive>TABLES'
 | '<impala>TABLES'
 ;

HiveOrImpalaTblproperties
 : '<hive>TBLPROPERTIES'
 | '<impala>TBLPROPERTIES'
 ;

HiveOrImpalaTerminated
 : '<hive>TERMINATED'
 | '<impala>TERMINATED'
 ;

HiveRoleOrUser
 : '<hive>ROLE'
 | '<hive>USER'
 ;

SingleQuotedValue
 : 'SINGLE_QUOTE' 'VALUE' 'SINGLE_QUOTE'  -> $2
 | 'SINGLE_QUOTE' 'SINGLE_QUOTE'          -> ''
 ;

SingleQuotedValue_EDIT
 : 'SINGLE_QUOTE' 'PARTIAL_VALUE'
 ;

DoubleQuotedValue
 : 'DOUBLE_QUOTE' 'VALUE' 'DOUBLE_QUOTE'  -> $2
 | 'DOUBLE_QUOTE' 'DOUBLE_QUOTE'          -> ''
 ;

DoubleQuotedValue_EDIT
 : 'DOUBLE_QUOTE' 'PARTIAL_VALUE'
 ;

QuotedValue
 : SingleQuotedValue
 | DoubleQuotedValue
 ;

QuotedValue_EDIT
 : SingleQuotedValue_EDIT
 | DoubleQuotedValue_EDIT
 ;

OptionalAggregateOrAnalytic
 :
 | AggregateOrAnalytic
 ;

OptionalHiveExtended
 :
 | '<hive>EXTENDED'
 ;

OptionalHiveExtendedOrFormatted
 :
 | '<hive>EXTENDED'
 | '<hive>FORMATTED'
 ;

OptionalExternal
 :
 | '<hive>EXTERNAL'
 | '<impala>EXTERNAL'
 ;

OptionalImpalaExtendedOrFormatted
 :
 | '<impala>EXTENDED'
 | '<impala>FORMATTED'
 ;

OptionallyFormattedIndex
 : '<hive>FORMATTED' HiveIndexOrIndexes
 | HiveIndexOrIndexes
 ;

OptionallyFormattedIndex_EDIT
 : '<hive>FORMATTED' 'CURSOR'
   {
     parser.suggestKeywords(['INDEX', 'INDEXES']);
   }
 | 'CURSOR' HiveIndexOrIndexes
   {
     parser.suggestKeywords(['FORMATTED']);
   }
 ;

OptionalFromDatabase
 :
 | FromOrIn DatabaseIdentifier
 ;

OptionalFromDatabase_EDIT
 : FromOrIn DatabaseIdentifier_EDIT
 ;

OptionalCascade
 :
 | '<hive>CASCADE'
 ;

OptionalCascadeOrRestrict
 :
 | '<hive>CASCADE'
 | '<impala>CASCADE'
 | '<hive>RESTRICT'
 | '<impala>RESTRICT'
 ;

OptionalHiveCascadeOrRestrict
 :
 | '<hive>CASCADE'
 | '<hive>RESTRICT'
 ;

OptionalHiveTemporary
 :
 | '<hive>TEMPORARY'
 ;

OptionalIfExists
 :
 | 'IF' 'EXISTS'
   {
     parser.yy.correlatedSubQuery = false;
   }
 ;

OptionalIfExists_EDIT
 : 'IF' 'CURSOR'
   {
     parser.suggestKeywords(['EXISTS']);
   }
 ;

OptionalIfNotExists
 :
 | 'IF' 'NOT' 'EXISTS'
   {
     parser.yy.correlatedSubQuery = false;
   }
 ;

OptionalIfNotExists_EDIT
 : 'IF' 'CURSOR'
   {
     parser.suggestKeywords(['NOT EXISTS']);
   }
 | 'IF' 'NOT' 'CURSOR'
   {
     parser.suggestKeywords(['EXISTS']);
   }
 ;

OptionalInDatabase
 :
 | 'IN' DatabaseIdentifier
 | 'IN' DatabaseIdentifier_EDIT
 ;

OptionalPartitionSpec
 :
 | PartitionSpec
 ;

OptionalPartitionSpec_EDIT
 : PartitionSpec_EDIT
 ;

PartitionSpec
 : AnyPartition '(' PartitionSpecList ')'
 ;

PartitionSpec_EDIT
 : AnyPartition '(' PartitionSpecList_EDIT RightParenthesisOrError
 ;

RangePartitionSpec
 : UnsignedValueSpecification RangePartitionComparisonOperator 'VALUES' RangePartitionComparisonOperator UnsignedValueSpecification
 ;

RangePartitionSpec_EDIT
 : UnsignedValueSpecification 'CURSOR'
   {
     parser.suggestKeywords(['<', '<=', '<>', '=', '>', '>=']);
   }
 | UnsignedValueSpecification RangePartitionComparisonOperator 'CURSOR'
   {
     parser.suggestKeywords(['VALUES']);
   }
 | UnsignedValueSpecification RangePartitionComparisonOperator 'VALUES' 'CURSOR'
   {
     parser.suggestKeywords(['<', '<=', '<>', '=', '>', '>=']);
   }
 | UnsignedValueSpecification 'CURSOR' 'VALUES' RangePartitionComparisonOperator UnsignedValueSpecification
   {
     parser.suggestKeywords(['<', '<=', '<>', '=', '>', '>=']);
   }
 | UnsignedValueSpecification RangePartitionComparisonOperator 'CURSOR' RangePartitionComparisonOperator UnsignedValueSpecification
   {
     parser.suggestKeywords(['VALUES']);
   }
 | UnsignedValueSpecification RangePartitionComparisonOperator 'VALUES' 'CURSOR' UnsignedValueSpecification
   {
     parser.suggestKeywords(['<', '<=', '<>', '=', '>', '>=']);
   }
 ;

RangePartitionComparisonOperator
 : 'COMPARISON_OPERATOR'
 | '='
 | '<'
 | '>'
 ;

ConfigurationName
 : RegularIdentifier
 | 'CURSOR'
 | ConfigurationName '<hive>.' RegularIdentifier
 | ConfigurationName '<hive>.' 'PARTIAL_CURSOR'
 ;

PartialBacktickedOrAnyCursor
 : AnyCursor
 | PartialBacktickedIdentifier
 ;

PartialBacktickedOrCursor
 : 'CURSOR'
 | PartialBacktickedIdentifier
 ;

PartialBacktickedOrPartialCursor
 : 'PARTIAL_CURSOR'
 | PartialBacktickedIdentifier
 ;

PartialBacktickedIdentifier
 : 'BACKTICK' 'PARTIAL_VALUE'
 ;

RightParenthesisOrError
 : ')'
 | error
 ;

OptionalParenthesizedColumnList
 :
 | ParenthesizedColumnList
 ;

OptionalParenthesizedColumnList_EDIT
 : ParenthesizedColumnList_EDIT
 ;

ParenthesizedColumnList
 : '(' ColumnList ')'
 ;

ParenthesizedColumnList_EDIT
 : '(' ColumnList_EDIT RightParenthesisOrError
 | '(' AnyCursor RightParenthesisOrError
   {
     parser.suggestColumns();
   }
 ;

ColumnList
 : ColumnIdentifier
 | ColumnList ',' ColumnIdentifier
 ;

ColumnList_EDIT
 : ColumnIdentifier_EDIT
 | ColumnList ',' AnyCursor
   {
     parser.suggestColumns();
   }
 | ColumnList ',' ColumnIdentifier_EDIT
 | ColumnIdentifier_EDIT ',' ColumnList
 | ColumnList ',' ColumnIdentifier_EDIT ',' ColumnList
 | ColumnList ',' AnyCursor ',' ColumnList
   {
     parser.suggestColumns();
   }
 ;

ParenthesizedSimpleValueList
 : '(' SimpleValueList ')'
 ;

SimpleValueList
 : UnsignedValueSpecification
 | SimpleValueList ',' UnsignedValueSpecification
 ;

SchemaQualifiedTableIdentifier
 : RegularOrBacktickedIdentifier
   {
     parser.addTableLocation(@1, [ { name: $1 } ]);
     $$ = { identifierChain: [ { name: $1 } ] };
   }
 | RegularOrBacktickedIdentifier AnyDot RegularOrBacktickedIdentifier
   {
     parser.addDatabaseLocation(@1, [ { name: $1 } ]);
     parser.addTableLocation(@3, [ { name: $1 }, { name: $3 } ]);
     $$ = { identifierChain: [ { name: $1 }, { name: $3 } ] };
   }
 | RegularOrBacktickedIdentifier AnyDot RegularOrBacktickedIdentifier ImpalaFields
   {
     // This is a special case for Impala expression like "SELECT | FROM db.table.col"
     $$ = { identifierChain: [ { name: $1 }, { name: $3 } ].concat($4) };
   }
 ;

SchemaQualifiedTableIdentifier_EDIT
 : PartialBacktickedIdentifier
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | PartialBacktickedIdentifier AnyDot RegularOrBacktickedIdentifier
   {
     parser.suggestDatabases();
     $$ = { identifierChain: [{ name: $1 }] };
   }
 | RegularOrBacktickedIdentifier AnyDot PartialBacktickedOrPartialCursor
   {
     // In Impala you can have statements like 'SELECT ... FROM testTable t, t.|'
     parser.suggestTablesOrColumns($1);
   }
 | RegularOrBacktickedIdentifier AnyDot RegularOrBacktickedIdentifier ImpalaFields_EDIT
   {
     // TODO: switch to suggestColumns, it's currently handled in sqlAutocompleter2.js
     // Issue is that suggestColumns is deleted if no tables are defined and this is
     // Impala only cases like "SELECT | FROM db.table.col"
     parser.suggestTables({ identifierChain: [{ name: $1 }, { name: $3 }].concat($4) });
   }
 ;

ImpalaFields
 : ImpalaField               -> [$1]
 | ImpalaFields ImpalaField
   {
     $1.push($2);
   }
 ;

ImpalaFields_EDIT
 : ImpalaField_EDIT                            -> []
 | ImpalaFields ImpalaField_EDIT               -> $1
 | ImpalaFields ImpalaField_EDIT ImpalaFields  -> $1
 | ImpalaField_EDIT ImpalaFields               -> []
 ;

ImpalaField
 : '<impala>.' RegularOrBacktickedIdentifier  -> { name: $2 }
 ;

ImpalaField_EDIT
 : '<impala>.' PartialBacktickedOrPartialCursor
 ;

SchemaQualifiedIdentifier
 : RegularOrBacktickedIdentifier
 | RegularOrBacktickedIdentifier AnyDot RegularOrBacktickedIdentifier
 ;

SchemaQualifiedIdentifier_EDIT
 : PartialBacktickedIdentifier
   {
     parser.suggestDatabases({ appendDot: true });
   }
 | PartialBacktickedIdentifier AnyDot RegularOrBacktickedIdentifier
   {
     parser.suggestDatabases();
     $$ = { identifierChain: [{ name: $1 }] };
   }
 | RegularOrBacktickedIdentifier AnyDot PartialBacktickedOrPartialCursor
 ;

DatabaseIdentifier
 : RegularOrBacktickedIdentifier
 ;

DatabaseIdentifier_EDIT
 : PartialBacktickedOrCursor
   {
     parser.suggestDatabases();
   }
 ;

PartitionSpecList
 : PartitionExpression
 | PartitionSpecList ',' PartitionExpression
 ;

PartitionSpecList_EDIT
 : PartitionExpression_EDIT
 | PartitionSpecList ',' PartitionExpression_EDIT
 | PartitionExpression_EDIT ',' PartitionSpecList
 | PartitionSpecList ',' PartitionExpression_EDIT ',' PartitionSpecList
 ;

PartitionExpression
 : ColumnIdentifier '=' ValueExpression
 | ColumnIdentifier // Hive allows partial partition specs in some cases
 ;

PartitionExpression_EDIT
 : ColumnIdentifier '=' ValueExpression_EDIT
 | ColumnIdentifier '=' AnyCursor
   {
     parser.valueExpressionSuggest();
   }
 | PartialBacktickedIdentifier '=' ValueExpression
   {
     parser.suggestColumns();
   }
 | AnyCursor
   {
     parser.suggestColumns();
   }
 ;

OptionalHdfsLocation
 :
 | HdfsLocation
 ;

HdfsLocation
 : HiveOrImpalaLocation HdfsPath
 ;

HdfsLocation_EDIT
 : HiveOrImpalaLocation HdfsPath_EDIT
 ;

OptionalCachedInOrUncached
 :
 | CachedIn OptionalWithReplication
   {
     if (!$2) {
       $$ = { suggestKeywords: ['WITH REPLICATION ='] };
     }
   }
 | '<impala>UNCACHED'
 ;


OptionalCachedIn
 :
 | CachedIn OptionalWithReplication
   {
     if (!$2) {
       $$ = { suggestKeywords: ['WITH REPLICATION ='] };
     }
   }
 ;

CachedIn
 : '<impala>CACHED' 'IN' QuotedValue
 ;

CachedIn_EDIT
 : '<impala>CACHED' 'CURSOR'
   {
     parser.suggestKeywords(['IN']);
   }
 ;

OptionalWithReplication
 :
 | WithReplication
 ;

WithReplication
 : 'WITH' '<impala>REPLICATION' '=' SignedInteger
 ;

WithReplication_EDIT
 : 'WITH' 'CURSOR'
   {
     parser.suggestKeywords(['REPLICATION =']);
   }
 | 'WITH' '<impala>REPLICATION' 'CURSOR'
   {
     parser.suggestKeywords(['=']);
   }
 ;

RegularOrBacktickedIdentifier
 : RegularIdentifier
 | 'BACKTICK' 'VALUE' 'BACKTICK'  -> $2
 | 'BACKTICK' 'BACKTICK'          -> ''
 ;

// TODO: Same as SchemaQualifiedTableIdentifier?
RegularOrBackTickedSchemaQualifiedName
 : RegularOrBacktickedIdentifier
   {
     parser.addTableLocation(@1, [ { name: $1 } ]);
     $$ = { identifierChain: [ { name: $1 } ] };
   }
 | RegularOrBacktickedIdentifier AnyDot RegularOrBacktickedIdentifier
   {
     parser.addDatabaseLocation(@1, [ { name: $1 } ]);
     parser.addTableLocation(@3, [ { name: $1 }, { name: $3 } ]);
     $$ = { identifierChain: [ { name: $1 }, { name: $3 } ] };
   }
 ;

RegularOrBackTickedSchemaQualifiedName_EDIT
 : PartialBacktickedIdentifier
   {
     parser.suggestTables();
     parser.suggestDatabases({ prependDot: true });
   }
 | RegularOrBacktickedIdentifier AnyDot PartialBacktickedOrPartialCursor
   {
     parser.suggestTablesOrColumns($1);
   }
 ;


LocalOrSchemaQualifiedName
 : RegularOrBackTickedSchemaQualifiedName
 | RegularOrBackTickedSchemaQualifiedName RegularOrBacktickedIdentifier  -> { identifierChain: $1.identifierChain, alias: $2 }
 ;

LocalOrSchemaQualifiedName_EDIT
 : RegularOrBackTickedSchemaQualifiedName_EDIT
 | RegularOrBackTickedSchemaQualifiedName_EDIT RegularOrBacktickedIdentifier
 ;

ColumnReference
 : BasicIdentifierChain
   {
     parser.yy.locations[parser.yy.locations.length - 1].type = 'column';
   }
 | BasicIdentifierChain AnyDot '*'
   {
     parser.addAsteriskLocation(@3, $1.concat({ asterisk: true }));
   }
 ;

ColumnReference_EDIT
 : BasicIdentifierChain_EDIT
 ;

BasicIdentifierChain
 : ColumnIdentifier
   {
     $$ = [ $1.identifier ];
     parser.yy.firstChainLocation = parser.addUnknownLocation($1.location, [ $1.identifier ]);
   }
 | BasicIdentifierChain AnyDot ColumnIdentifier
   {
     if (parser.yy.firstChainLocation) {
       parser.yy.firstChainLocation.firstInChain = true;
       delete parser.yy.firstChainLocation;
     }
     $1.push($3.identifier);
     parser.addUnknownLocation($3.location, $1.concat());
   }
 ;

// TODO: Merge with DerivedColumnChain_EDIT ( issue is starting with PartialBacktickedOrPartialCursor)
BasicIdentifierChain_EDIT
 : ColumnIdentifier_EDIT
   {
     if ($1.insideKey) {
       parser.suggestKeyValues({ identifierChain: [ $1.identifier ] });
       parser.suggestColumns();
       parser.suggestFunctions();
     }
   }
 | BasicIdentifierChain AnyDot ColumnIdentifier_EDIT
   {
     if ($3.insideKey) {
       parser.suggestKeyValues({ identifierChain: $1.concat([ $3.identifier ]) });
       parser.suggestColumns();
       parser.suggestFunctions();
     }
   }
 | BasicIdentifierChain AnyDot ColumnIdentifier_EDIT AnyDot BasicIdentifierChain
 | ColumnIdentifier_EDIT AnyDot BasicIdentifierChain
 | BasicIdentifierChain AnyDot PartialBacktickedOrPartialCursor
   {
     parser.suggestColumns({
       identifierChain: $1
     });
     $$ = { suggestKeywords: [{ value: '*', weight: 10000 }] };
   }
 | BasicIdentifierChain AnyDot PartialBacktickedOrPartialCursor AnyDot BasicIdentifierChain
   {
     parser.suggestColumns({
       identifierChain: $1
     });
     $$ = { suggestKeywords: [{ value: '*', weight: 10000 }] };
   }
 ;

DerivedColumnChain
 : ColumnIdentifier  -> [ $1.identifier ]
 | DerivedColumnChain AnyDot ColumnIdentifier
   {
     $1.push($3.identifier);
   }
 ;

DerivedColumnChain_EDIT
 : ColumnIdentifier_EDIT
   {
     if ($1.insideKey) {
       parser.suggestKeyValues({ identifierChain: [ $1.identifier ] });
       parser.suggestColumns();
       parser.suggestFunctions();
     }
   }
 | DerivedColumnChain AnyDot ColumnIdentifier_EDIT
   {
     if ($3.insideKey) {
       parser.suggestKeyValues({ identifierChain: $1.concat([ $3.identifier ]) });
       parser.suggestColumns();
       parser.suggestFunctions();
     }
   }
 | DerivedColumnChain AnyDot ColumnIdentifier_EDIT AnyDot DerivedColumnChain
   {
     if ($3.insideKey) {
       parser.suggestKeyValues({ identifierChain: $1.concat([ $3.identifier ]) });
       parser.suggestColumns();
       parser.suggestFunctions();
     }
   }
 | ColumnIdentifier_EDIT AnyDot DerivedColumnChain
   {
     if ($1.insideKey) {
       parser.suggestKeyValues({ identifierChain: [ $1.identifier ] });
       parser.suggestColumns();
       parser.suggestFunctions();
     }
   }
 | PartialBacktickedIdentifierOrPartialCursor
   {
     parser.suggestColumns();
   }
 | DerivedColumnChain AnyDot PartialBacktickedIdentifierOrPartialCursor
   {
     parser.suggestColumns({ identifierChain: $1 });
   }
 | DerivedColumnChain AnyDot PartialBacktickedIdentifierOrPartialCursor AnyDot DerivedColumnChain
   {
     parser.suggestColumns({ identifierChain: $1 });
   }
 | PartialBacktickedIdentifierOrPartialCursor AnyDot DerivedColumnChain
   {
     parser.suggestColumns();
   }
 ;

ColumnIdentifier
 : RegularOrBacktickedIdentifier                                                                               -> { identifier: { name: $1 }, location: @1 };
 | RegularOrBacktickedIdentifier HiveOrImpalaLeftSquareBracket ValueExpression HiveOrImpalaRightSquareBracket  -> { identifier: { name: $1, keySet: true }, location: @1 }
 | RegularOrBacktickedIdentifier HiveOrImpalaLeftSquareBracket HiveOrImpalaRightSquareBracket                  -> { identifier: { name: $1, keySet: true }, location: @1 }
 ;

ColumnIdentifier_EDIT
 : RegularOrBacktickedIdentifier HiveOrImpalaLeftSquareBracket AnyCursor HiveOrImpalaRightSquareBracketOrError             -> { identifier: { name: $1 }, insideKey: true }
 | RegularOrBacktickedIdentifier HiveOrImpalaLeftSquareBracket ValueExpression_EDIT HiveOrImpalaRightSquareBracketOrError  -> { identifier: { name: $1 }};
 ;

PartialBacktickedIdentifierOrPartialCursor
 : PartialBacktickedIdentifier
 | 'PARTIAL_CURSOR'
 ;

HiveOrImpalaRightSquareBracketOrError
 : HiveOrImpalaRightSquareBracket
 | error
 ;

// TODO: Support | DECIMAL(precision, scale)  -- (Note: Available in Hive 0.13.0 and later)
PrimitiveType
 : 'TINYINT'
 | '<hive>TINYINT'
 | 'SMALLINT'
 | 'INT'
 | 'BIGINT'
 | 'BOOLEAN'
 | 'FLOAT'
 | 'DOUBLE'
 | '<hive>DOUBLE_PRECISION'
 | '<impala>REAL'
 | 'STRING'
 | '<hive>STRING'
 | 'DECIMAL' OptionalTypePrecision
 | 'CHAR' OptionalTypeLength
 | 'VARCHAR' OptionalTypeLength
 | 'TIMESTAMP'
 | '<hive>TIMESTAMP'
 | '<hive>BINARY'
 | '<hive>DATE'
 ;

OptionalTypeLength
 :
 | '(' 'UNSIGNED_INTEGER' ')'
 ;

OptionalTypePrecision
 :
 | '(' 'UNSIGNED_INTEGER' ')'
 | '(' 'UNSIGNED_INTEGER' ',' 'UNSIGNED_INTEGER' ')'
 ;

// ===================================== DESCRIBE statement =====================================

DescribeStatement
 : HiveDescribeStatement
 | ImpalaDescribeStatement
 ;

DescribeStatement_EDIT
 : HiveDescribeStatement_EDIT
 | ImpalaDescribeStatement_EDIT
 ;

HiveDescribeStatement
 : '<hive>DESCRIBE' OptionalHiveExtendedOrFormatted SchemaQualifiedTableIdentifier DerivedColumnChain OptionalPartitionSpec
   {
     parser.addTablePrimary($3);
     parser.addColumnLocation(@4, $4);
   }
 | '<hive>DESCRIBE' OptionalHiveExtendedOrFormatted SchemaQualifiedTableIdentifier OptionalPartitionSpec
   {
     parser.addTablePrimary($3);
   }
 | '<hive>DESCRIBE' DatabaseOrSchema OptionalHiveExtended DatabaseIdentifier
   {
     parser.addDatabaseLocation(@4, [{ name: $4 }]);
   }
 | '<hive>DESCRIBE' '<hive>FUNCTION' OptionalHiveExtended RegularIdentifier
 ;

HiveDescribeStatement_EDIT
 : '<hive>DESCRIBE' OptionalHiveExtendedOrFormatted SchemaQualifiedTableIdentifier_EDIT OptionalPartitionSpec
 | '<hive>DESCRIBE' OptionalHiveExtendedOrFormatted SchemaQualifiedTableIdentifier DerivedColumnChain_EDIT OptionalPartitionSpec
   {
     parser.addTablePrimary($3);
   }
 | '<hive>DESCRIBE' OptionalHiveExtendedOrFormatted 'CURSOR' SchemaQualifiedTableIdentifier DerivedColumnChain OptionalPartitionSpec
   {
     if (!$2) {
       parser.suggestKeywords(['EXTENDED', 'FORMATTED']);
     }
   }
 | '<hive>DESCRIBE' OptionalHiveExtendedOrFormatted 'CURSOR' SchemaQualifiedTableIdentifier OptionalPartitionSpec
   {
     if (!$2) {
       parser.suggestKeywords(['EXTENDED', 'FORMATTED']);
     }
   }
 | '<hive>DESCRIBE' OptionalHiveExtendedOrFormatted SchemaQualifiedTableIdentifier 'CURSOR' OptionalPartitionSpec
   {
     parser.addTablePrimary($3);
     parser.suggestColumns();
     if (!$5) {
       parser.suggestKeywords(['PARTITION']);
     }
   }
 | '<hive>DESCRIBE' OptionalHiveExtendedOrFormatted SchemaQualifiedTableIdentifier DerivedColumnChain 'CURSOR' OptionalPartitionSpec
   {
     if (!$6) {
       parser.suggestKeywords(['PARTITION']);
     }
   }
 | '<hive>DESCRIBE' OptionalHiveExtendedOrFormatted SchemaQualifiedTableIdentifier DerivedColumnChain OptionalPartitionSpec_EDIT
 | '<hive>DESCRIBE' OptionalHiveExtendedOrFormatted SchemaQualifiedTableIdentifier OptionalPartitionSpec_EDIT

 | '<hive>DESCRIBE' OptionalHiveExtendedOrFormatted 'CURSOR'
   {
     if (!$2) {
       parser.suggestKeywords(['DATABASE', 'EXTENDED', 'FORMATTED', 'FUNCTION', 'SCHEMA']);
     }
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
    }
 | '<hive>DESCRIBE' DatabaseOrSchema OptionalHiveExtended DatabaseIdentifier_EDIT
   {
     if (!$3) {
       parser.suggestKeywords(['EXTENDED']);
     }
   }
 | '<hive>DESCRIBE' DatabaseOrSchema OptionalHiveExtended 'CURSOR' DatabaseIdentifier
    {
      if (!$3) {
        parser.suggestKeywords(['EXTENDED']);
      }
    }
 | '<hive>DESCRIBE' '<hive>FUNCTION' OptionalHiveExtended 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['EXTENDED']);
     }
   }
 | '<hive>DESCRIBE' '<hive>FUNCTION' OptionalHiveExtended 'CURSOR' RegularIdentifier
    {
      if (!$3) {
        parser.suggestKeywords(['EXTENDED']);
      }
    }
 ;

ImpalaDescribeStatement
 : '<impala>DESCRIBE' OptionalImpalaExtendedOrFormatted SchemaQualifiedTableIdentifier
   {
     parser.addTablePrimary($3);
   }
 | '<impala>DESCRIBE' 'DATABASE' OptionalImpalaExtendedOrFormatted DatabaseIdentifier
   {
     parser.addDatabaseLocation(@4, [{ name: $4 }]);
   }
 ;

ImpalaDescribeStatement_EDIT
 : '<impala>DESCRIBE' OptionalImpalaExtendedOrFormatted 'CURSOR'
   {
     if (!$2) {
       parser.suggestKeywords([{ value: 'DATABASE', weight: 2 }, { value: 'EXTENDED', weight: 1 }, { value: 'FORMATTED', weight: 1 }]);
     }
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | '<impala>DESCRIBE' OptionalImpalaExtendedOrFormatted SchemaQualifiedTableIdentifier_EDIT
 | '<impala>DESCRIBE' OptionalImpalaExtendedOrFormatted 'CURSOR' SchemaQualifiedTableIdentifier
   {
     parser.addTablePrimary($4);
     if (!$2) {
       parser.suggestKeywords([{ value: 'DATABASE', weight: 2 }, { value: 'EXTENDED', weight: 1 }, { value: 'FORMATTED', weight: 1 }]);
     }
   }
 | '<impala>DESCRIBE' 'DATABASE' OptionalImpalaExtendedOrFormatted 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['EXTENDED', 'FORMATTED']);
     }
     parser.suggestDatabases();
   }
 | '<impala>DESCRIBE' 'DATABASE' OptionalImpalaExtendedOrFormatted 'CURSOR' DatabaseIdentifier
    {
      if (!$3) {
        parser.suggestKeywords(['EXTENDED', 'FORMATTED']);
      }
      parser.addDatabaseLocation(@5, [{ name: $5 }]);
    }
 ;

// ===================================== SELECT statement =====================================

QuerySpecification
 : SelectStatement OptionalUnions                                   -> $1
 | CommonTableExpression SelectStatement OptionalUnions
 | CommonTableExpression '(' QuerySpecification ')' OptionalUnions  -> $3
 ;

QuerySpecification_EDIT
 : SelectStatement_EDIT OptionalUnions
 | SelectStatement OptionalUnions_EDIT
 | CommonTableExpression '(' QuerySpecification_EDIT ')'
   {
     parser.addCommonTableExpressions($1);
   }
 | CommonTableExpression SelectStatement_EDIT OptionalUnions
   {
     parser.addCommonTableExpressions($1);
   }
 | CommonTableExpression SelectStatement OptionalUnions_EDIT
   {
     parser.addCommonTableExpressions($1);
   }
 | CommonTableExpression_EDIT
 | CommonTableExpression_EDIT '(' QuerySpecification ')'
 | CommonTableExpression_EDIT SelectStatement OptionalUnions
 ;

SelectStatement
 : 'SELECT' OptionalAllOrDistinct OptionalStraightJoin SelectList
   {
     parser.addClauseLocation('selectList', parser.firstDefined($3, @3, $2, @2, $1, @1), @4);
     $$ = { selectList: $4 };
   }
 | 'SELECT' OptionalAllOrDistinct OptionalStraightJoin SelectList TableExpression
   {
     parser.addClauseLocation('selectList', parser.firstDefined($3, @3, $2, @2, $1, @1), @4);
     $$ = { selectList: $4, tableExpression: $5 }
   }
 ;

OptionalUnions
 :
 | Unions
 ;

OptionalUnions_EDIT
 : Unions_EDIT
 ;

Unions
 : UnionClause
 | Unions UnionClause
 ;

Unions_EDIT
 : UnionClause_EDIT
 | Unions UnionClause_EDIT
 | UnionClause_EDIT Unions
 | Unions UnionClause_EDIT Unions
 ;

UnionClause
 : 'UNION' NewStatement OptionalAllOrDistinct SelectStatement
 ;

UnionClause_EDIT
 : 'UNION' NewStatement 'CURSOR'
   {
     parser.suggestKeywords(['ALL', 'DISTINCT', 'SELECT']);
   }
 | 'UNION' NewStatement 'CURSOR' SelectStatement
   {
     parser.suggestKeywords(['ALL', 'DISTINCT']);
   }
 | 'UNION' NewStatement OptionalAllOrDistinct SelectStatement_EDIT
 ;

SelectStatement_EDIT
 : 'SELECT' OptionalAllOrDistinct OptionalStraightJoin SelectList_EDIT
   {
     parser.addClauseLocation('selectList', parser.firstDefined($3, @3, $2, @2, $1, @1), @4);
     if ($4.cursorAtStart) {
       var keywords = parser.getSelectListKeywords();
       if (!$3 && !$2) {
         keywords.push({ value: 'ALL', weight: 2 });
         keywords.push({ value: 'DISTINCT', weight: 2 });
       }
       if (parser.isImpala() && !$3) {
         keywords.push({ value: 'STRAIGHT_JOIN', weight: 1 });
       }
       parser.suggestKeywords(keywords);
     } else {
       parser.checkForSelectListKeywords($4);
     }
     if ($4.suggestFunctions) {
       parser.suggestFunctions();
     }
     if ($4.suggestColumns) {
       parser.suggestColumns({ identifierChain: [], source: 'select' });
     }
     if ($4.suggestTables) {
       parser.suggestTables({ prependQuestionMark: true, prependFrom: true });
     }
     if ($4.suggestDatabases) {
       parser.suggestDatabases({ prependQuestionMark: true, prependFrom: true, appendDot: true });
     }
     if ($4.suggestAggregateFunctions && (!$2 || $2 === 'ALL')) {
       parser.suggestAggregateFunctions();
       parser.suggestAnalyticFunctions();
     }
   }
 | 'SELECT' OptionalAllOrDistinct OptionalStraightJoin 'CURSOR'
   {
     parser.addClauseLocation('selectList', parser.firstDefined($3, @3, $2, @2, $1, @1), @4, true);
     var keywords = parser.getSelectListKeywords();
     if (!$2 || $2 === 'ALL') {
       parser.suggestAggregateFunctions();
       parser.suggestAnalyticFunctions();
     }
     if (!$3 && !$2) {
       keywords.push({ value: 'ALL', weight: 2 });
       keywords.push({ value: 'DISTINCT', weight: 2 });
     }
     if (parser.isImpala() && !$3) {
       keywords.push({ value: 'STRAIGHT_JOIN', weight: 1 });
     }
     parser.suggestKeywords(keywords);
     parser.suggestFunctions();
     parser.suggestColumns({ identifierChain: [], source: 'select' });
     parser.suggestTables({ prependQuestionMark: true, prependFrom: true });
     parser.suggestDatabases({ prependQuestionMark: true, prependFrom: true, appendDot: true });
   }
 | 'SELECT' OptionalAllOrDistinct OptionalStraightJoin SelectList TableExpression_EDIT
   {
     parser.addClauseLocation('selectList', parser.firstDefined($3, @3, $2, @2, $1, @1), @4);
   }
 | 'SELECT' OptionalAllOrDistinct OptionalStraightJoin SelectList_EDIT TableExpression
   {
     parser.addClauseLocation('selectList', parser.firstDefined($3, @3, $2, @2, $1, @1), @4);
     parser.selectListNoTableSuggest($4, $2);
     if (parser.yy.result.suggestColumns) {
       parser.yy.result.suggestColumns.source = 'select';
     }
   }
 | 'SELECT' OptionalAllOrDistinct OptionalStraightJoin 'CURSOR' TableExpression
   {
     parser.addClauseLocation('selectList', parser.firstDefined($3, @3, $2, @2, $1, @1), @4, true);
     var keywords = parser.getSelectListKeywords();
     if (!$2 || $2 === 'ALL') {
       parser.suggestAggregateFunctions();
       parser.suggestAnalyticFunctions();
     }
     if (!$3 && !$2) {
       keywords.push({ value: 'ALL', weight: 2 });
       keywords.push({ value: 'DISTINCT', weight: 2 });
     }
     if (parser.isImpala() && !$3) {
       keywords.push({ value: 'STRAIGHT_JOIN', weight: 1 });
     }
     parser.suggestKeywords(keywords);
     parser.suggestFunctions();
     parser.suggestColumns({ identifierChain: [], source: 'select' });
     parser.suggestTables({ prependQuestionMark: true, prependFrom: true });
     parser.suggestDatabases({ prependQuestionMark: true, prependFrom: true, appendDot: true });
   }
 | 'SELECT' OptionalAllOrDistinct OptionalStraightJoin SelectList 'CURSOR' TableExpression
   {
     parser.addClauseLocation('selectList', parser.firstDefined($3, @3, $2, @2, $1, @1), @4);
     parser.checkForSelectListKeywords($4);
   }
 | 'SELECT' OptionalAllOrDistinct OptionalStraightJoin SelectList 'CURSOR' ',' TableExpression
   {
     parser.addClauseLocation('selectList', parser.firstDefined($3, @3, $2, @2, $1, @1), @4);
     parser.checkForSelectListKeywords($4);
   }
 | 'SELECT' OptionalAllOrDistinct OptionalStraightJoin SelectList 'CURSOR'
   {
     parser.addClauseLocation('selectList', parser.firstDefined($3, @3, $2, @2, $1, @1), @4);
     parser.checkForSelectListKeywords($4);
     var keywords = ['FROM'];
     if (parser.yy.result.suggestKeywords) {
       keywords = parser.yy.result.suggestKeywords.concat(keywords);
     }
     parser.suggestKeywords(keywords);
     parser.suggestTables({ prependFrom: true });
     parser.suggestDatabases({ prependFrom: true, appendDot: true });
   }
 ;

OptionalStraightJoin
 :
 | '<impala>STRAIGHT_JOIN'
 ;

CommonTableExpression
 : 'WITH' WithQueries  -> $2
 ;

CommonTableExpression_EDIT
 : 'WITH' WithQueries_EDIT
 ;

WithQueries
 : WithQuery                   -> [$1]
 | WithQueries ',' WithQuery   -> $1.concat([$3]);
 ;

WithQueries_EDIT
 : WithQuery_EDIT
 | WithQueries ',' WithQuery_EDIT
   {
     parser.addCommonTableExpressions($1);
   }
 | WithQuery_EDIT ',' WithQueries
 | WithQueries ',' WithQuery_EDIT ',' WithQueries
   {
     parser.addCommonTableExpressions($1);
   }
 ;

WithQuery
 : RegularOrBacktickedIdentifier AnyAs '(' TableSubQueryInner ')'
   {
     parser.addCteAliasLocation(@1, $1);
     $4.alias = $1;
     $$ = $4;
   }
 ;

WithQuery_EDIT
 : RegularOrBacktickedIdentifier 'CURSOR'
   {
     parser.suggestKeywords(['AS']);
   }
 | RegularOrBacktickedIdentifier AnyAs '(' AnyCursor RightParenthesisOrError
   {
     parser.suggestKeywords(['SELECT']);
   }
 | RegularOrBacktickedIdentifier AnyAs '(' TableSubQueryInner_EDIT RightParenthesisOrError
 ;

OptionalAllOrDistinct
 :
 | '<hive>ALL'
 | 'ALL'
 | 'DISTINCT'
 ;

TableExpression
 : FromClause OptionalSelectConditions
   {
     parser.addClauseLocation('whereClause', @1, $2.whereClauseLocation);
     parser.addClauseLocation('limitClause', $2.limitClausePreceding || @1, $2.limitClauseLocation);
   }
 ;

TableExpression_EDIT
 : FromClause_EDIT OptionalSelectConditions
   {
     parser.addClauseLocation('whereClause', @1, $2.whereClauseLocation);
     parser.addClauseLocation('limitClause', $2.limitClausePreceding || @1, $2.limitClauseLocation);
   }
 | FromClause 'CURSOR' OptionalSelectConditions OptionalJoins
   {
     var keywords = [];

     parser.addClauseLocation('whereClause', @1, $3.whereClauseLocation);
     parser.addClauseLocation('limitClause', $2.limitClausePreceding || @1, $2.limitClauseLocation);

     if ($1) {
       if (!$1.hasLateralViews && typeof $1.tableReferenceList.hasJoinCondition !== 'undefined' && !$1.tableReferenceList.hasJoinCondition) {
         keywords.push({ value: 'ON', weight: 3 });
         if (parser.isImpala()) {
           keywords.push({ value: 'USING', weight: 3 });
         }
       }
       if ($1.suggestKeywords) {
         keywords = parser.createWeightedKeywords($1.suggestKeywords, 3);
       }
       if ($1.tableReferenceList.suggestJoinConditions) {
         parser.suggestJoinConditions($1.tableReferenceList.suggestJoinConditions);
       }
       if ($1.tableReferenceList.suggestJoins) {
         parser.suggestJoins($1.tableReferenceList.suggestJoins);
       }
       if (!$1.hasLateralViews && $1.tableReferenceList.suggestKeywords) {
         keywords = keywords.concat(parser.createWeightedKeywords($1.tableReferenceList.suggestKeywords, 3));
       }

       // Lower the weights for 'TABLESAMPLE' and 'LATERAL VIEW'
       keywords.forEach(function (keyword) {
         if (keyword.value === 'TABLESAMPLE' || keyword.value === 'LATERAL VIEW') {
           keyword.weight = 1.1;
         }
       });

       if (!$1.hasLateralViews && $1.tableReferenceList.types) {
         var veKeywords = parser.getValueExpressionKeywords($1.tableReferenceList);
         keywords = keywords.concat(veKeywords.suggestKeywords);
         if (veKeywords.suggestColRefKeywords) {
           parser.suggestColRefKeywords(veKeywords.suggestColRefKeywords);
           parser.addColRefIfExists($1.tableReferenceList);
         }
       }
     }

     if ($3.empty && $4 && $4.joinType.toUpperCase() === 'JOIN') {
       keywords = keywords.concat(['FULL', 'FULL OUTER', 'LEFT', 'LEFT OUTER', 'RIGHT', 'RIGHT OUTER']);
       if (parser.isHive()) {
         keywords = keywords.concat(['CROSS', 'INNER', 'LEFT SEMI']);
       } else if (parser.isImpala()) {
         keywords = keywords.concat(['ANTI', 'CROSS', 'INNER', 'LEFT ANTI', 'LEFT INNER', 'LEFT SEMI', 'OUTER', 'RIGHT ANTI', 'RIGHT INNER', 'RIGHT SEMI', 'SEMI']);
       } else {
         keywords.push('INNER');
       }
       parser.suggestKeywords(keywords);
       return;
     }

     if ($3.suggestKeywords) {
       keywords = keywords.concat(parser.createWeightedKeywords($3.suggestKeywords, 2));
     }

     if ($3.suggestFilters) {
       parser.suggestFilters($3.suggestFilters);
     }
     if ($3.suggestGroupBys) {
       parser.suggestGroupBys($3.suggestGroupBys);
     }
     if ($3.suggestOrderBys) {
       parser.suggestOrderBys($3.suggestOrderBys);
     }

     if ($3.empty) {
       keywords.push({ value: 'UNION', weight: 2.11 });
     }

     keywords = keywords.concat([
       { value: 'FULL JOIN', weight: 1 },
       { value: 'FULL OUTER JOIN', weight: 1 },
       { value: 'JOIN', weight: 1 },
       { value: 'LEFT JOIN', weight: 1 },
       { value: 'LEFT OUTER JOIN', weight: 1 },
       { value: 'RIGHT JOIN', weight: 1 },
       { value: 'RIGHT OUTER JOIN', weight: 1 }
     ]);
     if (parser.isHive()) {
       keywords = keywords.concat([
         { value: 'CROSS JOIN', weight: 1 },
         { value: 'INNER JOIN', weight: 1 },
         { value: 'LEFT SEMI JOIN', weight: 1 }
       ]);
     } else if (parser.isImpala()) {
       keywords = keywords.concat([
         { value: 'ANTI JOIN', weight: 1 },
         { value: 'INNER JOIN', weight: 1 },
         { value: 'LEFT ANTI JOIN', weight: 1 },
         { value: 'LEFT INNER JOIN', weight: 1 },
         { value: 'LEFT SEMI JOIN', weight: 1 },
         { value: 'OUTER JOIN', weight: 1 },
         { value: 'RIGHT ANTI JOIN', weight: 1 },
         { value: 'RIGHT INNER JOIN', weight: 1 },
         { value: 'RIGHT SEMI JOIN', weight: 1 },
         { value: 'SEMI JOIN', weight: 1 }
       ]);
     } else {
       keywords.push({ value: 'INNER JOIN', weight: 1 });
     }
     parser.suggestKeywords(keywords);
  }
 | FromClause OptionalSelectConditions_EDIT OptionalJoins
   {
     // A couple of things are going on here:
     // - If there are no SelectConditions (WHERE, GROUP BY, etc.) we should suggest complete join options
     // - If there's an OptionalJoin at the end, i.e. 'SELECT * FROM foo | JOIN ...' we should suggest
     //   different join types
     // - The FromClause could end with a valueExpression, in which case we should suggest keywords like '='
     //   or 'AND' based on type

     if (!$2) {
       parser.addClauseLocation('whereClause', @1);
       parser.addClauseLocation('limitClause', @1);
       return;
     }
     parser.addClauseLocation('whereClause', @1, $2.whereClauseLocation);
     parser.addClauseLocation('limitClause', $2.limitClausePreceding || @1, $2.limitClauseLocation);
     var keywords = [];

     if ($2.suggestColRefKeywords) {
       parser.suggestColRefKeywords($2.suggestColRefKeywords);
       parser.addColRefIfExists($2);
     }

     if ($2.suggestKeywords && $2.suggestKeywords.length) {
       keywords = keywords.concat(parser.createWeightedKeywords($2.suggestKeywords, 2));
     }

     if ($2.cursorAtEnd) {
       keywords.push({ value: 'UNION', weight: 2.11 });
     }
     parser.suggestKeywords(keywords);
   }
 ;

OptionalJoins
 :
 | Joins
 | Joins_INVALID
 ;

FromClause
 : 'FROM' TableReferenceList OptionalLateralViews
   {
     if (parser.isHive()) {
       $$ = { tableReferenceList : $2, suggestKeywords: ['LATERAL VIEW'] }
     } else {
       $$ = { tableReferenceList : $2 }
     }
     if (parser.isHive() && $3) {
       parser.yy.lateralViews = $3.lateralViews;
       $$.hasLateralViews = true;
       if ($3.suggestKeywords) {
         $$.suggestKeywords = $$.suggestKeywords.concat($3.suggestKeywords);
       }
     }
   }
 ;

FromClause_EDIT
 : 'FROM' 'CURSOR'
   {
       parser.suggestTables();
       parser.suggestDatabases({ appendDot: true });
   }
 | 'FROM' TableReferenceList_EDIT OptionalLateralViews
   {
     if ($3) {
       parser.yy.lateralViews = $3.lateralViews;
     }
   }
 | 'FROM' TableReferenceList OptionalLateralViews_EDIT
 ;

OptionalSelectConditions
 : OptionalWhereClause OptionalGroupByClause OptionalHavingClause OptionalWindowClause OptionalOrderByClause OptionalClusterOrDistributeBy OptionalLimitClause OptionalOffsetClause
   {
     var keywords = parser.getKeywordsForOptionalsLR(
       [$1, $2, $3, $4, $5, $6, $6, $7, $8],
       [{ value: 'WHERE', weight: 9 }, { value: 'GROUP BY', weight: 8 }, { value: 'HAVING', weight: 7 }, { value: 'WINDOW', weight: 6 }, { value: 'ORDER BY', weight: 5 }, [{ value: 'CLUSTER BY', weight: 4 }, { value: 'DISTRIBUTE BY', weight: 4 }], { value: 'SORT BY', weight: 4 }, { value: 'LIMIT', weight: 3 }, { value: 'OFFSET', weight: 2 }],
       [true, true, true, parser.isHive(), true, parser.isHive(), parser.isHive() && !$5, true, parser.isImpala()]);

     if (keywords.length > 0) {
       $$ = { suggestKeywords: keywords, empty: !$1 && !$2 && !$3 && !$4 && !$5 && !$6 && !$7 && !$8 };
     } else {
       $$ = {};
     }

     $$.whereClauseLocation = $1 ? @1 : undefined;
     $$.limitClausePreceding = parser.firstDefined($6, @6, $5, @5, $4, @4, $3, @3, $2, @2, $1, @1);
     $$.limitClauseLocation = $7 ? @7 : undefined;

     if (!$1 && !$2 && !$3 && !$4 && !$5 && !$6 && !$7 && !$8) {
       $$.suggestFilters = { prefix: 'WHERE', tablePrimaries: parser.yy.latestTablePrimaries.concat() };
     }
     if (!$2 && !$3 && !$4 && !$5 && !$6 && !$7 && !$8) {
       $$.suggestGroupBys = { prefix: 'GROUP BY', tablePrimaries: parser.yy.latestTablePrimaries.concat() };
     }
     if (!$5 && !$6 && !$7 && !$8) {
       $$.suggestOrderBys = { prefix: 'ORDER BY', tablePrimaries: parser.yy.latestTablePrimaries.concat() };
     }
   }
 ;

OptionalSelectConditions_EDIT
 : WhereClause_EDIT OptionalGroupByClause OptionalHavingClause OptionalWindowClause OptionalOrderByClause OptionalClusterOrDistributeBy OptionalLimitClause OptionalOffsetClause
   {
     if (parser.yy.result.suggestColumns) {
       parser.yy.result.suggestColumns.source = 'where';
     }
   }
 | OptionalWhereClause GroupByClause_EDIT OptionalHavingClause OptionalWindowClause OptionalOrderByClause OptionalClusterOrDistributeBy OptionalLimitClause OptionalOffsetClause
   {
     if (parser.yy.result.suggestColumns) {
       parser.yy.result.suggestColumns.source = 'group by';
     }
   }
 | OptionalWhereClause OptionalGroupByClause HavingClause_EDIT OptionalWindowClause OptionalOrderByClause OptionalClusterOrDistributeBy OptionalLimitClause OptionalOffsetClause
 | OptionalWhereClause OptionalGroupByClause OptionalHavingClause WindowClause_EDIT OptionalOrderByClause OptionalClusterOrDistributeBy OptionalLimitClause OptionalOffsetClause
 | OptionalWhereClause OptionalGroupByClause OptionalHavingClause OptionalWindowClause OrderByClause_EDIT OptionalClusterOrDistributeBy OptionalLimitClause OptionalOffsetClause
   {
     if (parser.yy.result.suggestColumns) {
       parser.yy.result.suggestColumns.source = 'order by';
     }
   }
 | OptionalWhereClause OptionalGroupByClause OptionalHavingClause OptionalWindowClause OptionalOrderByClause ClusterOrDistributeBy_EDIT OptionalLimitClause OptionalOffsetClause
 | OptionalWhereClause OptionalGroupByClause OptionalHavingClause OptionalWindowClause OptionalOrderByClause OptionalClusterOrDistributeBy LimitClause_EDIT OptionalOffsetClause
 | OptionalWhereClause OptionalGroupByClause OptionalHavingClause OptionalWindowClause OptionalOrderByClause OptionalClusterOrDistributeBy OptionalLimitClause OffsetClause_EDIT
 ;

OptionalSelectConditions_EDIT
 : WhereClause 'CURSOR' OptionalGroupByClause OptionalHavingClause OptionalWindowClause OptionalOrderByClause OptionalClusterOrDistributeBy OptionalLimitClause OptionalOffsetClause
   {
     var keywords = parser.getKeywordsForOptionalsLR(
       [$3, $4, $5, $6, $7, $7, $8, $9],
       [{ value: 'GROUP BY', weight: 8 }, { value: 'HAVING', weight: 7 }, { value: 'WINDOW', weight: 6 }, { value: 'ORDER BY', weight: 5 }, [{ value: 'CLUSTER BY', weight: 4 }, { value: 'DISTRIBUTE BY', weight: 4 }], { value: 'SORT BY', weight: 4 }, { value: 'LIMIT', weight: 3 }, { value: 'OFFSET', weight: 2 }],
       [true, true, parser.isHive(), true, parser.isHive(), parser.isHive() && !$6, true, parser.isImpala()]);
     if ($1.suggestKeywords) {
       keywords = keywords.concat(parser.createWeightedKeywords($1.suggestKeywords, 1));
     }
     $$ = parser.getValueExpressionKeywords($1, keywords);
     $$.cursorAtEnd = !$3 && !$4 && !$5 && !$6 && !$7 && !$8 && !$9;
     if ($1.columnReference) {
       $$.columnReference = $1.columnReference;
     }
     if (!$3) {
       parser.suggestGroupBys({ prefix: 'GROUP BY', tablePrimaries: parser.yy.latestTablePrimaries.concat() });
     }
     if (!$3 && !$4 && !$5 && !$6) {
       parser.suggestOrderBys({ prefix: 'ORDER BY', tablePrimaries: parser.yy.latestTablePrimaries.concat() });
     }
     $$.whereClauseLocation = $1 ? @1 : undefined;
     $$.limitClausePreceding = parser.firstDefined($7, @7, $6, @6, $5, @5, $4, @4, $3, @3, $1, @1);
     $$.limitClauseLocation = $8 ? @8 : undefined;
   }
 | OptionalWhereClause GroupByClause 'CURSOR' OptionalHavingClause OptionalWindowClause OptionalOrderByClause OptionalClusterOrDistributeBy OptionalLimitClause OptionalOffsetClause
   {
     var keywords = parser.getKeywordsForOptionalsLR(
       [$4, $5, $6, $7, $7, $8, $9],
       [{ value: 'HAVING', weight: 7 }, { value: 'WINDOW', weight: 6 }, { value: 'ORDER BY', weight: 5 }, [{ value: 'CLUSTER BY', weight: 4 }, { value: 'DISTRIBUTE BY', weight: 4 }], { value: 'SORT BY', weight: 4 }, { value: 'LIMIT', weight: 3 }, { value: 'OFFSET', weight: 2 }],
       [true, parser.isHive(), true, parser.isHive(), parser.isHive() && !$6, true, parser.isImpala()]);
     if ($2.suggestKeywords) {
       keywords = keywords.concat(parser.createWeightedKeywords($2.suggestKeywords, 8));
     }
     if ($2.valueExpression) {
       $$ = parser.getValueExpressionKeywords($2.valueExpression, keywords);
       if ($2.valueExpression.columnReference) {
         $$.columnReference = $2.valueExpression.columnReference;
       }
     } else {
       $$ = { suggestKeywords: keywords };
     }
     $$.cursorAtEnd = !$4 && !$5 && !$6 && !$7 && !$8 && !$9;
     if (!$4 && !$5 && !$6) {
       parser.suggestOrderBys({ prefix: 'ORDER BY', tablePrimaries: parser.yy.latestTablePrimaries.concat() });
     }
     $$.whereClauseLocation = $1 ? @1 : undefined;
     $$.limitClausePreceding = parser.firstDefined($7, @7, $6, @6, $5, @5, $4, @4, $2, @2);
     $$.limitClauseLocation = $8 ? @8 : undefined;
   }
 | OptionalWhereClause OptionalGroupByClause HavingClause 'CURSOR' OptionalWindowClause OptionalOrderByClause OptionalClusterOrDistributeBy OptionalLimitClause OptionalOffsetClause
   {
     var keywords = parser.getKeywordsForOptionalsLR(
       [$5, $6, $7, $7, $8, $9],
       [{ value: 'WINDOW', weight: 6 }, { value: 'ORDER BY', weight: 5 }, [{ value: 'CLUSTER BY', weight: 4 }, { value: 'DISTRIBUTE BY', weight: 4 }], { value: 'SORT BY', weight: 4 }, { value: 'LIMIT', weight: 3 }, { value: 'OFFSET', weight: 2 }],
       [parser.isHive(), true, parser.isHive(), parser.isHive() && !$6, true, parser.isImpala()]);
     $$ = { suggestKeywords: keywords, cursorAtEnd: !$5 && !$6 && !$7 && !$8 && !$9 };
     if (!$5 && !$6) {
       parser.suggestOrderBys({ prefix: 'ORDER BY', tablePrimaries: parser.yy.latestTablePrimaries.concat() });
     }
     $$.whereClauseLocation = $1 ? @1 : undefined;
     $$.limitClausePreceding = parser.firstDefined($7, @7, $6, @6, $5, @5, $3, @3);
     $$.limitClauseLocation = $8 ? @8 : undefined;
   }
 | OptionalWhereClause OptionalGroupByClause OptionalHavingClause WindowClause 'CURSOR' OptionalOrderByClause OptionalClusterOrDistributeBy OptionalLimitClause OptionalOffsetClause
   {
     var keywords = parser.getKeywordsForOptionalsLR([$6, $7, $8, $9], [{ value: 'ORDER BY', weight: 5 }, [{ value: 'CLUSTER BY', weight: 4 }, { value: 'DISTRIBUTE BY', weight: 4 }, { value: 'SORT BY', weight: 4 }], { value: 'LIMIT', weight: 3 }, { value: 'OFFSET', weight: 2 }], [true, parser.isHive(), true, parser.isImpala()]);
     $$ = { suggestKeywords: keywords, cursorAtEnd: !$6 && !$7 && !$8 && !$9 };
     if (!$6) {
       parser.suggestOrderBys({ prefix: 'ORDER BY', tablePrimaries: parser.yy.latestTablePrimaries.concat() });
     }
     $$.whereClauseLocation = $1 ? @1 : undefined;
     $$.limitClausePreceding = parser.firstDefined($7, @7, $6, @6, $4, @4);
     $$.limitClauseLocation = $8 ? @8 : undefined;
   }
 | OptionalWhereClause OptionalGroupByClause OptionalHavingClause OptionalWindowClause OrderByClause 'CURSOR' OptionalClusterOrDistributeBy OptionalLimitClause OptionalOffsetClause
   {
     var keywords = parser.getKeywordsForOptionalsLR([$7, $8, $9], [[{ value: 'CLUSTER BY', weight: 4 }, { value: 'DISTRIBUTE BY', weight: 4 }], { value: 'LIMIT', weight: 3 }, { value: 'OFFSET', weight: 2 }], [parser.isHive(), true, parser.isImpala()]);
     if ($5.suggestKeywords) {
       keywords = keywords.concat(parser.createWeightedKeywords($5.suggestKeywords, 5));
     }
     $$ = { suggestKeywords: keywords, cursorAtEnd: !$7 && !$8 && !$9 };
     $$.whereClauseLocation = $1 ? @1 : undefined;
     $$.limitClausePreceding = parser.firstDefined($7, @7, $5, @5);
     $$.limitClauseLocation = $8 ? @8 : undefined;
   }
 | OptionalWhereClause OptionalGroupByClause OptionalHavingClause OptionalWindowClause OptionalOrderByClause ClusterOrDistributeBy 'CURSOR' OptionalLimitClause OptionalOffsetClause
   {
     var keywords = parser.getKeywordsForOptionalsLR([$8, $9], [{ value: 'LIMIT', weight: 3 }, { value: 'OFFSET', weight: 2 }], [true, parser.isImpala()]);
     if ($6.suggestKeywords) {
       keywords = keywords.concat(parser.createWeightedKeywords($6.suggestKeywords, 4));
     }
     $$ = { suggestKeywords: keywords, cursorAtEnd: !$8 && !$9 };
     $$.whereClauseLocation = $1 ? @1 : undefined;
     $$.limitClausePreceding = @6;
     $$.limitClauseLocation = $8 ? @8 : undefined;
   }
 | OptionalWhereClause OptionalGroupByClause OptionalHavingClause OptionalWindowClause OptionalOrderByClause OptionalClusterOrDistributeBy LimitClause 'CURSOR' OptionalOffsetClause
   {
     var keywords = parser.getKeywordsForOptionalsLR([$9], [{ value: 'OFFSET', weight: 2 }], [parser.isImpala()]);
     $$ = { suggestKeywords: keywords, cursorAtEnd: !$9 };
     $$.whereClauseLocation = $1 ? @1 : undefined;
     $$.limitClausePreceding = parser.firstDefined($6, @6, $5, @5, $4, @4, $3, @3, $2, @2, $1, @1);
     $$.limitClauseLocation = $7 ? @7 : undefined;
   }
 ;

OptionalWhereClause
 :
 | WhereClause
 ;

WhereClause
 : 'WHERE' SearchCondition  -> $2
 ;

WhereClause_EDIT
 : 'WHERE' SearchCondition_EDIT
   {
     if ($2.suggestFilters) {
       parser.suggestFilters({ tablePrimaries: parser.yy.latestTablePrimaries.concat() });
     }
   }
 | 'WHERE' 'CURSOR'
   {
     parser.suggestFunctions();
     parser.suggestColumns();
     parser.suggestKeywords(['EXISTS', 'NOT EXISTS']);
     parser.suggestFilters({ tablePrimaries: parser.yy.latestTablePrimaries.concat() });
   }
 ;

OptionalGroupByClause
 :
 | GroupByClause
 ;

GroupByClause
 : AnyGroup 'BY' GroupByColumnList OptionalHiveGroupingSetsCubeOrRollup
   {
     $$ = { valueExpression: $4 ? false : $3 };
     if (!$4 && parser.isHive()) {
       $$.suggestKeywords = ['GROUPING SETS', 'WITH CUBE', 'WITH ROLLUP'];
     }
   }
 ;

GroupByClause_EDIT
 : AnyGroup 'BY' GroupByColumnList_EDIT OptionalHiveGroupingSetsCubeOrRollup
   {
     parser.suggestSelectListAliases();
   }
 | AnyGroup 'BY' 'CURSOR' OptionalHiveGroupingSetsCubeOrRollup
   {
     parser.valueExpressionSuggest();
     parser.suggestSelectListAliases();
     parser.suggestGroupBys({ tablePrimaries: parser.yy.latestTablePrimaries.concat() });
   }
 | AnyGroup 'CURSOR'
   {
     parser.suggestKeywords(['BY']);
     parser.suggestGroupBys({ prefix: 'BY', tablePrimaries: parser.yy.latestTablePrimaries.concat() });
   }
 | AnyGroup 'BY' GroupByColumnList OptionalHiveGroupingSetsCubeOrRollup_EDIT
 ;

OptionalHiveGroupingSetsCubeOrRollup
 :
 | HiveGroupingSets
 | 'WITH' '<hive>CUBE'
 | 'WITH' '<hive>ROLLUP'
 ;

OptionalHiveGroupingSetsCubeOrRollup_EDIT
 : HiveGroupingSets_EDIT
 | 'WITH' 'CURSOR'
   {
     if (parser.isHive()) {
       parser.suggestKeywords(['CUBE', 'ROLLUP']);
     }
   }
 ;

HiveGroupingSets
 : '<hive>GROUPING' '<hive>SETS' '(' ColumnGroupingSets ')'
 ;

HiveGroupingSets_EDIT
 : '<hive>GROUPING' 'CURSOR'
   {
     parser.suggestKeywords(['SETS']);
   }
 | '<hive>GROUPING' '<hive>SETS' '(' ColumnGroupingSets_EDIT RightParenthesisOrError
 ;

ColumnGroupingSets
 :
 | ColumnReference
 | ColumnGroupingSets ',' ColumnGroupingSets
 | '(' ColumnGroupingSets ')'
 ;

ColumnGroupingSets_EDIT
 : ColumnGroupingSet_EDIT
 | ColumnGroupingSet_EDIT ',' ColumnGroupingSets
 | ColumnGroupingSets ',' ColumnGroupingSet_EDIT
 | ColumnGroupingSets ',' ColumnGroupingSet_EDIT ',' ColumnGroupingSets
 | '(' ColumnGroupingSets_EDIT RightParenthesisOrError
 ;

ColumnGroupingSet_EDIT
 : AnyCursor
   {
     parser.suggestColumns();
   }
 | ColumnReference_EDIT
 ;

GroupByColumnList
 : ValueExpression
 | GroupByColumnList ',' ValueExpression  -> $3
 ;

GroupByColumnList_EDIT
 : ValueExpression_EDIT
 | 'CURSOR' ValueExpression
   {
     parser.valueExpressionSuggest();
   }
 | 'CURSOR' ',' GroupByColumnList
   {
     parser.valueExpressionSuggest();
   }
 | ValueExpression_EDIT ',' GroupByColumnList
 | GroupByColumnList ',' GroupByColumnListPartTwo_EDIT
 | GroupByColumnList ',' GroupByColumnListPartTwo_EDIT ','
 | GroupByColumnList ',' GroupByColumnListPartTwo_EDIT ',' GroupByColumnList
 ;

GroupByColumnListPartTwo_EDIT
 : ValueExpression_EDIT
 | AnyCursor ValueExpression
   {
     parser.valueExpressionSuggest();
   }
 | AnyCursor
   {
     parser.valueExpressionSuggest();
   }
 ;

OptionalOrderByClause
 :
 | OrderByClause
 ;

OrderByClause
 : 'ORDER' 'BY' OrderByColumnList  -> $3
 ;

OrderByClause_EDIT
 : 'ORDER' 'BY' OrderByColumnList_EDIT
   {
     if ($3.emptyOrderBy) {
       parser.suggestOrderBys({ tablePrimaries: parser.yy.latestTablePrimaries.concat() });
     }
   }
 | 'ORDER' 'CURSOR'
   {
     parser.suggestKeywords(['BY']);
     parser.suggestOrderBys({ prefix: 'BY', tablePrimaries: parser.yy.latestTablePrimaries.concat() });
   }
 ;

OrderByColumnList
 : OrderByIdentifier
 | OrderByColumnList ',' OrderByIdentifier  -> $3
 ;

OrderByColumnList_EDIT
 : OrderByIdentifier_EDIT
 | 'CURSOR' OrderByIdentifier
   {
     $$ = { emptyOrderBy: false }
     parser.valueExpressionSuggest();
     parser.suggestAnalyticFunctions();
     parser.suggestSelectListAliases();
   }
 | OrderByColumnList ',' OrderByIdentifier_EDIT                        -> { emptyOrderBy: false }
 | OrderByColumnList ',' OrderByIdentifier_EDIT ','                    -> { emptyOrderBy: false }
 | OrderByColumnList ',' OrderByIdentifier_EDIT ',' OrderByColumnList  -> { emptyOrderBy: false }
 ;

OrderByIdentifier
 : ValueExpression OptionalAscOrDesc OptionalImpalaNullsFirstOrLast  -> parser.mergeSuggestKeywords($2, $3)
 ;

OrderByIdentifier_EDIT
 : ValueExpression_EDIT OptionalAscOrDesc OptionalImpalaNullsFirstOrLast
   {
     parser.suggestSelectListAliases();
   }
 | ValueExpression OptionalAscOrDesc OptionalImpalaNullsFirstOrLast_EDIT
 | AnyCursor OptionalAscOrDesc OptionalImpalaNullsFirstOrLast
   {
     $$ = { emptyOrderBy: true }
     parser.valueExpressionSuggest();
     parser.suggestAnalyticFunctions();
     parser.suggestSelectListAliases();
   }
 ;

OptionalAscOrDesc
 :
  {
    $$ = { suggestKeywords: ['ASC', 'DESC'] };
  }
 | 'ASC'
 | '<hive>ASC'
 | 'DESC'
 | '<hive>DESC'
 ;

OptionalImpalaNullsFirstOrLast
 :
  {
    if (parser.isImpala()) {
      $$ = { suggestKeywords: ['NULLS FIRST', 'NULLS LAST'] };
    } else {
      $$ = {};
    }
  }
 | '<impala>NULLS' '<impala>FIRST'
 | '<impala>NULLS' '<impala>LAST'
 ;

OptionalImpalaNullsFirstOrLast_EDIT
 : '<impala>NULLS' 'CURSOR'
   {
     parser.suggestKeywords(['FIRST', 'LAST']);
   }
 ;

OptionalClusterOrDistributeBy
 :
 | ClusterOrDistributeBy
 ;

ClusterOrDistributeBy
 : ClusterByClause
 | DistributeByClause               -> { suggestKeywords: ['SORT BY'] }
 | DistributeByClause SortByClause
 | SortByClause
 ;

ClusterOrDistributeBy_EDIT
 : ClusterByClause_EDIT
 | DistributeByClause_EDIT
 | DistributeByClause SortByClause_EDIT
 | DistributeByClause_EDIT SortByClause
 | SortByClause_EDIT
 ;

ClusterByClause
 : '<hive>CLUSTER' 'BY' ColumnList
 ;

ClusterByClause_EDIT
 : '<hive>CLUSTER' 'CURSOR'
   {
     suggestKeywords: ['BY'];
   }
 | '<hive>CLUSTER' 'BY' 'CURSOR'
   {
     parser.suggestColumns();
     parser.suggestSelectListAliases();
   }
 | '<hive>CLUSTER' 'BY' ColumnList_EDIT
   {
     parser.suggestSelectListAliases();
   }
 ;

DistributeByClause
 : '<hive>DISTRIBUTE' 'BY' ColumnList
 ;

DistributeByClause_EDIT
 : '<hive>DISTRIBUTE' 'CURSOR'
   {
     suggestKeywords: ['BY'];
   }
 | '<hive>DISTRIBUTE' 'BY' 'CURSOR'
   {
     parser.suggestColumns();
     parser.suggestSelectListAliases();
   }
 | '<hive>DISTRIBUTE' 'BY' ColumnList_EDIT
   {
     parser.suggestSelectListAliases();
   }
 ;

SortByClause
 : '<hive>SORT' 'BY' SortByList  -> $3
 ;

SortByClause_EDIT
 : '<hive>SORT' 'CURSOR'
   {
     suggestKeywords: ['BY'];
   }
 | '<hive>SORT' 'BY' SortByList_EDIT
   {
     parser.suggestSelectListAliases();
   }
 ;

SortByList
 : SortByIdentifier
 | SortByList ',' SortByIdentifier  -> $3
 ;

SortByList_EDIT
 : SortByIdentifier_EDIT
 | SortByIdentifier_EDIT ',' SortByList
 | SortByList ',' SortByIdentifier_EDIT
 | SortByList ',' SortByIdentifier_EDIT ',' SortByList
 ;

SortByIdentifier
 : ColumnIdentifier OptionalAscOrDesc
   {
     parser.addColumnLocation($1.location, [ $1.identifier ]);
     $$ = $2;
   }
 ;

SortByIdentifier_EDIT
 : ColumnIdentifier_EDIT OptionalAscOrDesc
 | AnyCursor OptionalAscOrDesc
   {
     parser.suggestColumns();
   }
 ;

OptionalLimitClause
 :
 | LimitClause
 ;

LimitClause
 : 'LIMIT' UnsignedNumericLiteral
 | 'LIMIT' UnsignedNumericLiteral ',' UnsignedNumericLiteral
 | 'LIMIT' 'VARIABLE_REFERENCE'
 | 'LIMIT' 'VARIABLE_REFERENCE' ',' 'VARIABLE_REFERENCE'
 | '<impala>LIMIT' ValueExpression
 ;

LimitClause_EDIT
 : 'LIMIT' 'CURSOR'
 | '<impala>LIMIT' 'CURSOR'
   {
     parser.suggestFunctions({ types: ['BIGINT'] });
   }
 | '<impala>LIMIT' ValueExpression_EDIT
   {
     delete parser.yy.result.suggestColumns;
   }
 ;

OptionalOffsetClause
 :
 | OffsetClause
 ;

OffsetClause
 : '<impala>OFFSET' ValueExpression
 ;

OffsetClause_EDIT
 : '<impala>OFFSET' 'CURSOR'
   {
     parser.suggestFunctions({ types: ['BIGINT'] });
   }
 | '<impala>OFFSET' ValueExpression_EDIT
   {
     delete parser.yy.result.suggestColumns;
   }
 ;

SearchCondition
 : ValueExpression
 ;

SearchCondition_EDIT
 : ValueExpression_EDIT
 ;

ValueExpression
 : NonParenthesizedValueExpressionPrimary
 ;

ValueExpression_EDIT
 : NonParenthesizedValueExpressionPrimary_EDIT
 ;

ValueExpression_EDIT
 : ValueExpression 'NOT' 'CURSOR'
   {
     if (parser.isImpala()) {
       parser.suggestKeywords(['BETWEEN', 'EXISTS', 'IN', 'ILIKE', 'IREGEXP', 'LIKE', 'REGEXP', 'RLIKE']);
     } else {
       parser.suggestKeywords(['BETWEEN', 'EXISTS', 'IN', 'LIKE', 'REGEXP', 'RLIKE']);
     }
     $$ = { types: [ 'BOOLEAN' ] };
   }
 ;

ValueExpressionList
 : ValueExpression
   {
     $1.position = 1;
   }
 | ValueExpressionList ',' ValueExpression
   {
     $3.position = $1.position + 1;
     $$ = $3;
   }
 ;

ValueExpressionList_EDIT
 : ValueExpression_EDIT
   {
     $1.position = 1;
   }
 | ValueExpressionList ',' ValueExpression_EDIT
   {
     $1.position += 1;
   }
 | ValueExpression_EDIT ',' ValueExpressionList
   {
     $1.position = 1;
   }
 | ValueExpressionList ',' ValueExpression_EDIT ',' ValueExpressionList
   {
     $1.position += 1;
   }
 | ValueExpressionList ',' AnyCursor
   {
     parser.valueExpressionSuggest();
     $1.position += 1;
   }
 | ValueExpressionList ',' AnyCursor ',' ValueExpressionList
   {
     parser.valueExpressionSuggest();
     $1.position += 1;
   }
 | ValueExpressionList 'CURSOR' ',' ValueExpressionList
   {
     parser.suggestValueExpressionKeywords($1);
   }
 | AnyCursor ',' ValueExpressionList
   {
     parser.valueExpressionSuggest();
     $$ = { cursorAtStart : true, position: 1 };
   }
 | AnyCursor ','
   {
     parser.valueExpressionSuggest();
     $$ = { cursorAtStart : true, position: 1 };
   }
 | ',' AnyCursor
   {
     parser.valueExpressionSuggest();
     $$ = { position: 2 };
   }
 | ',' AnyCursor ',' ValueExpressionList
   {
     parser.valueExpressionSuggest();
     $$ = { position: 2 };
   }
 ;

InValueList
 : NonParenthesizedValueExpressionPrimary
 | InValueList ',' NonParenthesizedValueExpressionPrimary
 ;

NonParenthesizedValueExpressionPrimary
 : UnsignedValueSpecification
 | ColumnOrArbitraryFunctionRef             -> { types: ['COLREF'], columnReference: $1.chain }
 | ColumnOrArbitraryFunctionRef ArbitraryFunctionRightPart
   {
     // We need to handle arbitrary UDFs here instead of inside UserDefinedFunction or there will be a conflict
     // with columnReference for functions like: db.udf(foo)
     var fn = $1.chain[$1.chain.length - 1].name.toLowerCase();
     $1.lastLoc.type = 'function';
     $1.lastLoc.function = fn;
     $1.lastLoc.location = {
       first_line: $1.lastLoc.location.first_line,
       last_line: $1.lastLoc.location.last_line,
       first_column: $1.lastLoc.location.first_column,
       last_column: $1.lastLoc.location.last_column - 1
     }
     if ($1.lastLoc !== $1.firstLoc) {
        $1.firstLoc.type = 'database';
     } else {
       delete $1.lastLoc.identifierChain;
     }
     if ($2.expression) {
       $$ = { function: fn, expression: $2.expression, types: parser.findReturnTypes(fn) }
     } else {
       $$ = { function: fn, types: parser.findReturnTypes(fn) }
     }
   }
 | ArbitraryFunctionName ArbitraryFunctionRightPart
  {
    parser.addFunctionLocation(@1, $1);
    if ($2.expression) {
      $$ = { function: $1, expression: $2.expression, types: parser.findReturnTypes($1) }
    } else {
      $$ = { function: $1, types: parser.findReturnTypes($1) }
    }
  }
 | UserDefinedFunction
 | 'NULL'                      -> { types: [ 'NULL' ] }
 | ImpalaInterval              -> { types: [ 'TIMESTAMP' ] }
 ;

NonParenthesizedValueExpressionPrimary_EDIT
 : UnsignedValueSpecification_EDIT
 | ColumnOrArbitraryFunctionRef_EDIT
   {
     if ($1.suggestKeywords) {
       $$ = { types: ['COLREF'], columnReference: $1, suggestKeywords: $1.suggestKeywords };
     } else {
       $$ = { types: ['COLREF'], columnReference: $1 };
     }
   }
 | ColumnOrArbitraryFunctionRef ArbitraryFunctionRightPart_EDIT
   {
     var fn = $1.chain[$1.chain.length - 1].name.toLowerCase();
     $1.lastLoc.type = 'function';
     $1.lastLoc.function = fn;
     $1.lastLoc.location = {
       first_line: $1.lastLoc.location.first_line,
       last_line: $1.lastLoc.location.last_line,
       first_column: $1.lastLoc.location.first_column,
       last_column: $1.lastLoc.location.last_column - 1
     }
     if ($1.lastLoc !== $1.firstLoc) {
        $1.firstLoc.type = 'database';
     } else {
       delete $1.lastLoc.identifierChain;
     }
     if ($2.position) {
       parser.applyArgumentTypesToSuggestions(fn, $2.position);
     }
     $$ = { types: parser.findReturnTypes(fn) };
   }
 | ArbitraryFunctionName ArbitraryFunctionRightPart_EDIT
   {
     parser.addFunctionLocation(@1, $1);
     if ($2.position) {
       parser.applyArgumentTypesToSuggestions($1, $2.position);
     }
     $$ = { types: parser.findReturnTypes($1) };
   }
 | UserDefinedFunction_EDIT
 | ImpalaInterval_EDIT
 ;

ColumnOrArbitraryFunctionRef
 : BasicIdentifierChain
   {
     var lastLoc = parser.yy.locations[parser.yy.locations.length - 1];
     if (lastLoc.type !== 'variable') {
       lastLoc.type = 'column';
     }
     // used for function references with db prefix
     var firstLoc = parser.yy.locations[parser.yy.locations.length - $1.length];
     $$ = { chain: $1, firstLoc: firstLoc, lastLoc: lastLoc }
   }
 | BasicIdentifierChain AnyDot '*'
   {
     parser.addAsteriskLocation(@3, $1.concat({ asterisk: true }));
   }
 ;

ColumnOrArbitraryFunctionRef_EDIT
 : BasicIdentifierChain_EDIT
 ;

ImpalaInterval
 : '<impala>INTERVAL' SignedInteger RegularIdentifier
 ;

ImpalaInterval_EDIT
 : '<impala>INTERVAL' SignedInteger 'CURSOR'
   {
     parser.suggestKeywords(['DAYS', 'HOURS', 'MICROSECONDS', 'MILLISECONDS', 'MINUTES', 'MONTHS', 'NANOSECONDS', 'SECONDS', 'WEEKS', 'YEARS']);
   }
 ;

SignedInteger
 : UnsignedNumericLiteral
 | '-' UnsignedNumericLiteral
 | '+' UnsignedNumericLiteral
 ;

UnsignedValueSpecification
 : UnsignedLiteral
 ;

UnsignedValueSpecification_EDIT
 : UnsignedLiteral_EDIT
   {
     parser.suggestValues($1);
   }
 ;

UnsignedLiteral
 : UnsignedNumericLiteral  -> { types: [ 'NUMBER' ] }
 | GeneralLiteral
 ;

UnsignedLiteral_EDIT
 : GeneralLiteral_EDIT
 ;

UnsignedNumericLiteral
 : ExactNumericLiteral
 | ApproximateNumericLiteral
 ;

ExactNumericLiteral
 : 'UNSIGNED_INTEGER'
 | 'UNSIGNED_INTEGER' AnyDot                     -> $1 + $2
 | 'UNSIGNED_INTEGER' AnyDot 'UNSIGNED_INTEGER'  -> $1 + $2 + $3
 | AnyDot 'UNSIGNED_INTEGER'                     -> $1 + $2
 ;

ApproximateNumericLiteral
 : UNSIGNED_INTEGER_E 'UNSIGNED_INTEGER'
 | AnyDot UNSIGNED_INTEGER_E 'UNSIGNED_INTEGER'
 | 'UNSIGNED_INTEGER' AnyDot UNSIGNED_INTEGER_E 'UNSIGNED_INTEGER'
 ;

GeneralLiteral
 : SingleQuotedValue
   {
     if (/\$\{[^}]*\}/.test($1)) {
       parser.addVariableLocation(@1, $1);
       $$ = { types: [ 'STRING' ], columnReference: [{ name: $1 }] }
     } else {
       $$ = { types: [ 'STRING' ] }
     }
   }
 | DoubleQuotedValue
   {
     if (/\$\{[^}]*\}/.test($1)) {
       parser.addVariableLocation(@1, $1);
       $$ = { types: [ 'STRING' ], columnReference: [{ name: $1 }] }
     } else {
       $$ = { types: [ 'STRING' ] }
     }
   }
 | TruthValue         -> { types: [ 'BOOLEAN' ] }
 ;

GeneralLiteral_EDIT
 : SingleQuotedValue_EDIT
  {
    $$ = { partialQuote: '\'', missingEndQuote: parser.yy.missingEndQuote };
  }
 | DoubleQuotedValue_EDIT
  {
    $$ = { partialQuote: '"', missingEndQuote: parser.yy.missingEndQuote };
  }
 ;

TruthValue
 : 'TRUE'
 | 'FALSE'
 ;

OptionalNot
 :
 | 'NOT'
 ;

SelectSpecification
 : ValueExpression OptionalCorrelationName
   {
     if ($2) {
       parser.addColumnAliasLocation($2.location, $2.alias, @1);
       $$ = { valueExpression: $1, alias: $2.alias };
       if (!parser.yy.selectListAliases) {
         parser.yy.selectListAliases = [];
       }
       parser.yy.selectListAliases.push({ name: $2.alias, types: $1.types || ['T'] });
     } else {
       $$ = { valueExpression: $1 }
     }
   }
 | '*'
   {
     parser.addAsteriskLocation(@1, [{ asterisk: true }]);
     $$ = { asterisk: true }
   }
 ;

SelectSpecification_EDIT
 : ValueExpression_EDIT OptionalCorrelationName
   {
     if ($2) {
       parser.addColumnAliasLocation($2.location, $2.alias, @1);
     }
   }

 | AnyCursor AnyAs RegularOrBacktickedIdentifier
   {
     parser.suggestFunctions();
     parser.suggestColumns();
     parser.addColumnAliasLocation(@3, $3, @1);
     $$ = { suggestAggregateFunctions: true };
   }
 | ValueExpression OptionalCorrelationName_EDIT  -> $2
 ;

SelectList
 : SelectSpecification                 -> [ $1 ]
 | SelectList ',' SelectSpecification
   {
     $1.push($3);
   }
 ;

SelectList_EDIT
 : SelectSpecification_EDIT
 | 'CURSOR' SelectList
   {
     $$ = { cursorAtStart : true, suggestFunctions: true, suggestColumns: true, suggestAggregateFunctions: true };
   }
 | 'CURSOR' ',' SelectList
   {
     $$ = { cursorAtStart : true, suggestFunctions: true, suggestColumns: true, suggestAggregateFunctions: true };
   }
 | SelectSpecification_EDIT ',' SelectList
 | SelectList 'CURSOR' SelectList
   {
     parser.checkForSelectListKeywords($1);
   }
 | SelectList 'CURSOR' ',' SelectList
   {
     parser.checkForSelectListKeywords($1);
   }
 | SelectList ',' AnyCursor
   {
     $$ = { suggestKeywords: parser.getSelectListKeywords(), suggestTables: true, suggestDatabases: true, suggestFunctions: true, suggestColumns: true, suggestAggregateFunctions: true };
   }
 | SelectList ',' SelectSpecification_EDIT                 -> $3
 | SelectList ',' AnyCursor SelectList
   {
     $$ = { suggestKeywords: parser.getSelectListKeywords(), suggestFunctions: true, suggestColumns: true, suggestAggregateFunctions: true,  };
   }
 | SelectList ',' AnyCursor ','
   {
     $$ = { suggestKeywords: parser.getSelectListKeywords(), suggestFunctions: true, suggestColumns: true, suggestAggregateFunctions: true,  };
   }
 | SelectList ',' SelectSpecification_EDIT ','             -> $3
 | SelectList ',' AnyCursor ',' SelectList
   {
     $$ = { suggestKeywords: parser.getSelectListKeywords(), suggestFunctions: true, suggestColumns: true, suggestAggregateFunctions: true,  };
   }
 | SelectList ',' SelectSpecification_EDIT ',' SelectList  -> $3
 ;

TableReferenceList
 : TableReference
 | TableReferenceList ',' TableReference  -> $3
 ;

TableReferenceList_EDIT
 : TableReference_EDIT
 | TableReference_EDIT ',' TableReference
 | TableReferenceList ',' TableReference_EDIT
 | TableReferenceList ',' TableReference_EDIT ',' TableReferenceList
 | TableReferenceList ',' AnyCursor
   {
       parser.suggestTables();
       parser.suggestDatabases({ appendDot: true });
   }
 ;

TableReference
 : TablePrimaryOrJoinedTable
 ;

TableReference_EDIT
 : TablePrimaryOrJoinedTable_EDIT
 ;

TablePrimaryOrJoinedTable
 : TablePrimary
   {
     $$ = $1;

     if (parser.yy.latestTablePrimaries.length > 0) {
       var idx = parser.yy.latestTablePrimaries.length - 1;
       var tables = [];
       do {
         var tablePrimary = parser.yy.latestTablePrimaries[idx];
         if (!tablePrimary.subQueryAlias) {
           tables.unshift(tablePrimary.alias ? { identifierChain: tablePrimary.identifierChain, alias: tablePrimary.alias } : { identifierChain: tablePrimary.identifierChain })
         }
         idx--;
       } while (idx >= 0 && tablePrimary.join && !tablePrimary.subQueryAlias)

       if (tables.length > 0) {
         $$.suggestJoins = {
           prependJoin: true,
           tables: tables
         };
       }
      }
   }
 | JoinedTable
 ;

TablePrimaryOrJoinedTable_EDIT
 : TablePrimary_EDIT
 | JoinedTable_EDIT
 ;

JoinedTable
 : TablePrimary Joins  -> $2
 ;

JoinedTable_EDIT
 : TablePrimary Joins_EDIT
 | TablePrimary_EDIT Joins
 ;

Joins
 : JoinType OptionalImpalaBroadcastOrShuffle TablePrimary OptionalJoinCondition
   {
     if ($4 && $4.valueExpression) {
       $$ = $4.valueExpression;
     } else {
       $$ = {};
     }
     $$.joinType = $1;
     if ($4.noJoinCondition) {
       $$.suggestJoinConditions = { prependOn: true, tablePrimaries: parser.yy.latestTablePrimaries.concat() }
     }
     if ($4.suggestKeywords) {
       $$.suggestKeywords = $4.suggestKeywords;
     }
     if (parser.yy.latestTablePrimaries.length > 0) {
        parser.yy.latestTablePrimaries[parser.yy.latestTablePrimaries.length - 1].join = true;
     }
   }
 | Joins JoinType OptionalImpalaBroadcastOrShuffle TablePrimary OptionalJoinCondition
   {
     if ($5 && $5.valueExpression) {
       $$ = $5.valueExpression;
     } else {
       $$ = {};
     }
     $$.joinType = $1;
     if ($5.noJoinCondition) {
       $$.suggestJoinConditions = { prependOn: true, tablePrimaries: parser.yy.latestTablePrimaries.concat() }
     }
     if ($5.suggestKeywords) {
       $$.suggestKeywords = $5.suggestKeywords;
     }
     if (parser.yy.latestTablePrimaries.length > 0) {
       parser.yy.latestTablePrimaries[parser.yy.latestTablePrimaries.length - 1].join = true;
     }
   }
 ;

Joins_INVALID
 : JoinType OptionalImpalaBroadcastOrShuffle                                           -> { joinType: $1 }
 | JoinType OptionalImpalaBroadcastOrShuffle Joins                                     -> { joinType: $1 }
 ;

OptionalImpalaBroadcastOrShuffle
 :
 | '<impala>BROADCAST'
 | '<impala>SHUFFLE'
 ;

Join_EDIT
 : JoinType_EDIT OptionalImpalaBroadcastOrShuffle TablePrimary OptionalJoinCondition
   {
     if ($1.suggestKeywords) {
       parser.suggestKeywords($1.suggestKeywords);
     }
   }
 | JoinType_EDIT OptionalImpalaBroadcastOrShuffle
   {
     if ($1.suggestKeywords) {
       parser.suggestKeywords($1.suggestKeywords);
     }
   }
 | JoinType OptionalImpalaBroadcastOrShuffle TablePrimary_EDIT OptionalJoinCondition
 | JoinType OptionalImpalaBroadcastOrShuffle TablePrimary JoinCondition_EDIT
 | JoinType OptionalImpalaBroadcastOrShuffle 'CURSOR' OptionalJoinCondition
   {
     if (!$2 && parser.isImpala()) {
       parser.suggestKeywords(['[BROADCAST]', '[SHUFFLE]']);
     }
     if (!$2 && parser.yy.latestTablePrimaries.length > 0) {
       var idx = parser.yy.latestTablePrimaries.length - 1;
       var tables = [];
       do {
         var tablePrimary = parser.yy.latestTablePrimaries[idx];
         if (!tablePrimary.subQueryAlias) {
           tables.unshift(tablePrimary.alias ? { identifierChain: tablePrimary.identifierChain, alias: tablePrimary.alias } : { identifierChain: tablePrimary.identifierChain })
         }
         idx--;
       } while (idx >= 0 && tablePrimary.join && !tablePrimary.subQueryAlias)

       if (tables.length > 0) {
         parser.suggestJoins({
           prependJoin: false,
           joinType: $1,
           tables: tables
         })
       }
     }
     parser.suggestTables();
     parser.suggestDatabases({
       appendDot: true
     });
   }
 ;

Joins_EDIT
 : Join_EDIT
 | Join_EDIT Joins
 | Joins Join_EDIT
 | Joins Join_EDIT Joins
 ;

JoinType
 : 'JOIN'                         -> 'JOIN'
 | '<impala>ANTI' 'JOIN'          -> 'ANTI JOIN'
 | 'CROSS' 'JOIN'                 -> 'CROSS JOIN'
 | 'INNER' 'JOIN'                 -> 'INNER JOIN'
 | 'OUTER' 'JOIN'                 -> 'OUTER JOIN'
 | 'SEMI' 'JOIN'                  -> 'SEMI JOIN'
 | 'FULL' 'JOIN'                  -> 'FULL JOIN'
 | 'FULL' 'OUTER' 'JOIN'          -> 'FULL OUTER JOIN'
 | 'LEFT' 'JOIN'                  -> 'LEFT JOIN'
 | 'LEFT' '<impala>ANTI' 'JOIN'   -> 'LEFT ANTI JOIN'
 | 'LEFT' 'INNER' 'JOIN'          -> 'LEFT INNER JOIN'
 | 'LEFT' 'OUTER' 'JOIN'          -> 'LEFT OUTER JOIN'
 | 'LEFT' 'SEMI' 'JOIN'           -> 'LEFT SEMI JOIN'
 | 'RIGHT' 'JOIN'                 -> 'RIGHT JOIN'
 | 'RIGHT' '<impala>ANTI' 'JOIN'  -> 'RIGHT ANTI JOIN'
 | 'RIGHT' 'INNER' 'JOIN'         -> 'RIGHT OUTER JOIN'
 | 'RIGHT' 'OUTER' 'JOIN'         -> 'RIGHT OUTER JOIN'
 | 'RIGHT' 'SEMI' 'JOIN'          -> 'RIGHT SEMI JOIN'
 ;

JoinType_EDIT
 : '<impala>ANTI' 'CURSOR'          -> { suggestKeywords: ['JOIN'] }
 | 'CROSS' 'CURSOR'                 -> { suggestKeywords: ['JOIN'] }
 | 'INNER' 'CURSOR'                 -> { suggestKeywords: ['JOIN'] }
 | 'OUTER' 'CURSOR'                 -> { suggestKeywords: ['JOIN'] }
 | 'SEMI' 'CURSOR'                  -> { suggestKeywords: ['JOIN'] }
 | 'FULL' 'OUTER' 'CURSOR'          -> { suggestKeywords: ['JOIN'] }
 | 'FULL' 'CURSOR' 'JOIN'           -> { suggestKeywords: ['OUTER'] }
 | 'LEFT' '<impala>ANTI' 'CURSOR'   -> { suggestKeywords: ['JOIN'] }
 | 'LEFT' 'INNER' 'CURSOR'          -> { suggestKeywords: ['JOIN'] }
 | 'LEFT' 'OUTER' 'CURSOR'          -> { suggestKeywords: ['JOIN'] }
 | 'LEFT' 'SEMI' 'CURSOR'           -> { suggestKeywords: ['JOIN'] }
 | 'LEFT' 'CURSOR' 'JOIN'           -> { suggestKeywords: parser.isImpala() ? ['ANTI', 'INNER', 'OUTER', 'SEMI'] : parser.isHive() ? ['OUTER', 'SEMI'] : ['OUTER'] }
 | 'RIGHT' '<impala>ANTI' 'CURSOR'  -> { suggestKeywords: ['JOIN'] }
 | 'RIGHT' 'INNER' 'CURSOR'         -> { suggestKeywords: ['JOIN'] }
 | 'RIGHT' 'OUTER' 'CURSOR'         -> { suggestKeywords: ['JOIN'] }
 | 'RIGHT' 'SEMI' 'CURSOR'          -> { suggestKeywords: ['JOIN'] }
 | 'RIGHT' 'CURSOR' 'JOIN'          -> { suggestKeywords: parser.isImpala() ? ['ANTI', 'INNER', 'OUTER', 'SEMI'] : ['OUTER'] }
 ;

OptionalJoinCondition
 :                                       -> { noJoinCondition: true, suggestKeywords: parser.isImpala() ? ['ON', 'USING'] : ['ON'] }
 | 'ON' ValueExpression                  -> { valueExpression: $2 }
 | '<impala>USING' '(' UsingColList ')'  -> {}
 ;

UsingColList
 : RegularOrBacktickedIdentifier
 | UsingColList ',' RegularOrBacktickedIdentifier
 ;

JoinCondition_EDIT
 : 'ON' ValueExpression_EDIT
 | 'ON' 'CURSOR'
   {
     parser.valueExpressionSuggest();
     parser.suggestJoinConditions({ prependOn: false });
   }
 ;

TablePrimary
 : TableOrQueryName OptionalHiveTableSample OptionalCorrelationName OptionalImpalaTableSample
   {
     $$ = {
       primary: $1
     }
     if ($1.identifierChain) {
       if ($3) {
         $1.alias = $3.alias
         parser.addTableAliasLocation($3.location, $3.alias, $1.identifierChain);
       }
       parser.addTablePrimary($1);
     }
     var keywords = [];
     if ($4 && $4.suggestKeywords) {
       keywords = $4.suggestKeywords;
     } else {
       // Right-to-left for cursor after TablePrimary
       keywords = parser.getKeywordsForOptionalsLR([$4, $3, $2], [{ value: 'TABLESAMPLE', weight: 1 }, { value: 'AS', weight: 2 }, { value: 'TABLESAMPLE', weight: 3 }], [parser.isImpala(), true, parser.isHive()]);
     }
     if (keywords.length > 0) {
       $$.suggestKeywords = keywords;
     }
   }
 | DerivedTable OptionalCorrelationName OptionalImpalaTableSample
   {
     $$ = {
       primary: $1
     };

     if ($2) {
       $$.primary.alias = $2.alias;
       parser.addTablePrimary({ subQueryAlias: $2.alias });
       parser.addSubqueryAliasLocation($2.location, $2.alias, $1.identifierChain);
     }

     var keywords = [];
     if ($3 && $3.suggestKeywords) {
       keywords = $3.suggestKeywords;
     } else {
       keywords = parser.getKeywordsForOptionalsLR([$3, $2], [{ value: 'TABLESAMPLE', weight: 1 }, { value: 'AS', weight: 2 }], [parser.isImpala(), true]);
     }
     if (keywords.length > 0) {
       $$.suggestKeywords = keywords;
     }
   }
 ;

TablePrimary_EDIT
 : TableOrQueryName_EDIT OptionalHiveTableSample OptionalCorrelationName OptionalImpalaTableSample
   {
     if ($3) {
       parser.addTableAliasLocation($3.location, $3.alias, $1.identifierChain);
     }
   }
 | TableOrQueryName OptionalHiveTableSample_EDIT OptionalCorrelationName OptionalImpalaTableSample
   {
     if ($3) {
       $1.alias = $3.alias;
       parser.addTableAliasLocation($3.location, $3.alias, $1.identifierChain);
     }
     parser.addTablePrimary($1);
   }
 | TableOrQueryName OptionalHiveTableSample OptionalCorrelationName OptionalImpalaTableSample_EDIT
   {
     if ($3) {
       $1.alias = $3.alias;
       parser.addTableAliasLocation($3.location, $3.alias, $1.identifierChain);
     }
     parser.addTablePrimary($1);
   }
 | DerivedTable_EDIT OptionalCorrelationName OptionalImpalaTableSample
   {
     if ($2) {
       parser.addTablePrimary({ subQueryAlias: $2.alias });
       parser.addSubqueryAliasLocation($2.location, $2.alias);
     }
   }
 | DerivedTable OptionalCorrelationName_EDIT OptionalImpalaTableSample
 ;

TableOrQueryName
 : SchemaQualifiedTableIdentifier
 ;

TableOrQueryName_EDIT
 : SchemaQualifiedTableIdentifier_EDIT
 ;

DerivedTable
 : TableSubQuery
 ;

DerivedTable_EDIT
 : TableSubQuery_EDIT
 ;

OptionalHiveTableSample
 :
 | '<hive>TABLESAMPLE' '(' '<hive>BUCKET' 'UNSIGNED_INTEGER' '<hive>OUT' '<hive>OF' 'UNSIGNED_INTEGER' OptionalOnColumn ')'
 | '<hive>TABLESAMPLE' '(' ExactNumericLiteral '<hive>PERCENT' ')'
 | '<hive>TABLESAMPLE' '(' ExactNumericLiteral 'ROWS' ')'
 | '<hive>TABLESAMPLE' '(' 'REGULAR_IDENTIFIER' ')'
 ;

OptionalHiveTableSample_EDIT
 : '<hive>TABLESAMPLE' '(' AnyCursor RightParenthesisOrError
   {
     parser.suggestKeywords(['BUCKET']);
   }
 | '<hive>TABLESAMPLE' '(' '<hive>BUCKET' 'UNSIGNED_INTEGER' 'CURSOR' RightParenthesisOrError
   {
     parser.suggestKeywords(['OUT OF']);
   }
 | '<hive>TABLESAMPLE' '(' '<hive>BUCKET' 'UNSIGNED_INTEGER' '<hive>OUT' 'CURSOR' RightParenthesisOrError
   {
     parser.suggestKeywords(['OF']);
   }
 | '<hive>TABLESAMPLE' '(' '<hive>BUCKET' 'UNSIGNED_INTEGER' '<hive>OUT' '<hive>OF' 'UNSIGNED_INTEGER' OptionalOnColumn 'CURSOR' RightParenthesisOrError
   {
     if (!$8) {
       parser.suggestKeywords(['ON']);
     }
   }
 | '<hive>TABLESAMPLE' '(' '<hive>BUCKET' 'UNSIGNED_INTEGER' '<hive>OUT' '<hive>OF' 'UNSIGNED_INTEGER' OptionalOnColumn_EDIT RightParenthesisOrError
 | '<hive>TABLESAMPLE' '(' ExactNumericLiteral 'CURSOR' RightParenthesisOrError
   {
     if ($3.indexOf('.') === -1 ) {
       parser.suggestKeywords(['PERCENT', 'ROWS']);
     } else {
       parser.suggestKeywords(['PERCENT']);
     }
   }
 ;

OptionalImpalaTableSample
 :
 | '<impala>TABLESAMPLE' '<impala>SYSTEM' '(' 'UNSIGNED_INTEGER' ')'                                                  --> { suggestKeywords: ['REPEATABLE()'] }
 | '<impala>TABLESAMPLE' '<impala>SYSTEM' '(' 'UNSIGNED_INTEGER' ')' '<impala>REPEATABLE' '(' 'UNSIGNED_INTEGER' ')'
 ;

OptionalImpalaTableSample_EDIT
 : '<impala>TABLESAMPLE' 'CURSOR'
   {
     parser.suggestKeywords(['SYSTEM()']);
   }
 ;

OptionalOnColumn
 :
 | 'ON' ValueExpression
 ;

OptionalOnColumn_EDIT
 : 'ON' 'CURSOR'
   {
     parser.valueExpressionSuggest();
   }
 | 'ON' ValueExpression_EDIT
 ;

PushQueryState
 :
   {
     parser.pushQueryState();
   }
 ;

PopQueryState
 :
   {
     parser.popQueryState();
   }
 ;

TableSubQuery
 : '(' TableSubQueryInner ')'  -> $2
 | '(' DerivedTable OptionalCorrelationName ')'
   {
     if ($3) {
       $2.alias = $3.alias;
       parser.addTablePrimary({ subQueryAlias: $3.alias });
       parser.addSubqueryAliasLocation($3.location, $3.alias, $2.identifierChain);
     }
     $$ = $2;
   }
 ;

TableSubQuery_EDIT
 : '(' TableSubQueryInner_EDIT RightParenthesisOrError
 | '(' AnyCursor RightParenthesisOrError
   {
     parser.suggestKeywords(['SELECT']);
   }
 ;

TableSubQueryInner
 : PushQueryState SubQuery
   {
     var subQuery = parser.getSubQuery($2);
     subQuery.columns.forEach(function (column) {
       parser.expandIdentifierChain({ wrapper: column });
       delete column.linked;
     });
     parser.popQueryState(subQuery);
     $$ = subQuery;
   }
 ;

TableSubQueryInner_EDIT
 : PushQueryState SubQuery_EDIT PopQueryState
 ;

SubQuery
 : QueryExpression
 ;

SubQuery_EDIT
 : QueryExpression_EDIT
 ;

QueryExpression
 : QueryExpressionBody
 ;

QueryExpression_EDIT
 : QueryExpressionBody_EDIT
 ;

QueryExpressionBody
 : NonJoinQueryExpression
 ;

QueryExpressionBody_EDIT
 : NonJoinQueryExpression_EDIT
 ;

NonJoinQueryExpression
 : NonJoinQueryTerm
 ;

NonJoinQueryExpression_EDIT
 : NonJoinQueryTerm_EDIT
 ;

NonJoinQueryTerm
 : NonJoinQueryPrimary
 ;

NonJoinQueryTerm_EDIT
 : NonJoinQueryPrimary_EDIT
 ;

NonJoinQueryPrimary
 : SimpleTable
 ;

NonJoinQueryPrimary_EDIT
 : SimpleTable_EDIT
 ;

SimpleTable
 : QuerySpecification
 ;

SimpleTable_EDIT
 : QuerySpecification_EDIT
 ;

OptionalCorrelationName
 :
 | RegularOrBacktickedIdentifier        -> { alias: $1, location: @1 }
 | AnyAs RegularOrBacktickedIdentifier  -> { alias: $2, location: @2 }
 ;

OptionalCorrelationName_EDIT
 : PartialBacktickedIdentifier
 | AnyAs PartialBacktickedIdentifier
 | AnyAs 'CURSOR'
 ;

OptionalLateralViews
 :
 | OptionalLateralViews LateralView
   {
     if ($1 && $2.lateralView) {
       $1.lateralViews.push($2.lateralView);
       $$ = $1;
     } else if ($2.lateralView) {
       $$ = { lateralViews: [ $2.lateralView ] };
     }
     if ($2.suggestKeywords) {
       $$.suggestKeywords = $2.suggestKeywords
     }
   }
 ;

OptionalLateralViews_EDIT
 : OptionalLateralViews LateralView_EDIT OptionalLateralViews
 ;

UserDefinedFunction
 : AggregateFunction OptionalOverClause
   {
     if (!$2) {
       $1.suggestKeywords = ['OVER'];
     }
   }
 | AnalyticFunction OverClause
 | CastFunction
 | HiveExtractFunction
 | ImpalaExtractFunction
 ;

UserDefinedFunction_EDIT
 : AggregateFunction_EDIT
 | AggregateFunction OptionalOverClause_EDIT
 | AnalyticFunction_EDIT
 | AnalyticFunction_EDIT OverClause
 | AnalyticFunction 'CURSOR'
   {
     parser.suggestKeywords(['OVER']);
   }
 | AnalyticFunction OverClause_EDIT
 | CastFunction_EDIT
 | HiveExtractFunction_EDIT
 | ImpalaExtractFunction_EDIT
 ;

ArbitraryFunction
 : RegularIdentifier ArbitraryFunctionRightPart
   {
     parser.addFunctionLocation(@1, $1);
     if ($2.expression) {
       $$ = { function: $1, expression: $2.expression, types: parser.findReturnTypes($1) }
     } else {
       $$ = { function: $1, types: parser.findReturnTypes($1) }
     }
   }
 | ArbitraryFunctionName ArbitraryFunctionRightPart
   {
     parser.addFunctionLocation(@1, $1);
     if ($2.expression) {
       $$ = { function: $1, expression: $2.expression, types: parser.findReturnTypes($1) }
     } else {
       $$ = { function: $1, types: parser.findReturnTypes($1) }
     }
   }
 ;

ArbitraryFunction_EDIT
 : RegularIdentifier ArbitraryFunctionRightPart_EDIT
   {
     parser.addFunctionLocation(@1, $1);
     if ($2.position) {
       parser.applyArgumentTypesToSuggestions($1, $2.position);
     }
     $$ = { types: parser.findReturnTypes($1) };
   }
 | ArbitraryFunctionName ArbitraryFunctionRightPart_EDIT
   {
     parser.addFunctionLocation(@1, $1);
     if ($2.position) {
       parser.applyArgumentTypesToSuggestions($1, $2.position);
     }
     $$ = { types: parser.findReturnTypes($1) };
   }
 ;

ArbitraryFunctionName
 : 'IF'
 | 'ARRAY'
 | '<hive>BINARY'
 | 'MAP'
 | '<impala>REPLACE'
 | 'TRUNCATE'
 ;

ArbitraryFunctionRightPart
 : '(' ')'
 | '(' ValueExpressionList ')'  -> { expression: $2 }
 ;

ArbitraryFunctionRightPart_EDIT
 : '(' AnyCursor RightParenthesisOrError
   {
     parser.valueExpressionSuggest();
     $$ = { position: 1 }
   }
 | '(' ValueExpressionList 'CURSOR' RightParenthesisOrError
   {
     parser.suggestValueExpressionKeywords($3);
   }
 | '(' ValueExpressionList_EDIT RightParenthesisOrError      -> $2
 ;

AggregateFunction
 : CountFunction
 | SumFunction
 | OtherAggregateFunction
 ;

AggregateFunction_EDIT
 : CountFunction_EDIT
 | SumFunction_EDIT
 | OtherAggregateFunction_EDIT
 ;

AnalyticFunction
 : 'ANALYTIC' '(' ')'                      -> { types: parser.findReturnTypes($1) }
 | 'ANALYTIC' '(' ValueExpressionList ')'  -> { function: $1, expression: $2, types: parser.findReturnTypes($1) }
 ;

AnalyticFunction_EDIT
 : 'ANALYTIC' '(' AnyCursor RightParenthesisOrError
   {
     parser.valueExpressionSuggest();
     parser.applyArgumentTypesToSuggestions($1, 1);
     $$ = { types: parser.findReturnTypes($1) };
   }
 | 'ANALYTIC' '(' ValueExpressionList 'CURSOR' RightParenthesisOrError
   {
     parser.suggestValueExpressionKeywords($3);
     $$ = { types: parser.findReturnTypes($1) };
   }
 | 'ANALYTIC' '(' ValueExpressionList_EDIT RightParenthesisOrError
   {
     parser.applyArgumentTypesToSuggestions($1, $3.position);
     $$ = { types: parser.findReturnTypes($1) };
   }
 ;

OptionalOverClause
 :
 | OverClause
 ;

OptionalOverClause_EDIT
 : OverClause_EDIT
 ;

OverClause
 : 'OVER' RegularOrBacktickedIdentifier
 | 'OVER' WindowExpression
 ;

OverClause_EDIT
 : 'OVER' WindowExpression_EDIT
 ;

WindowExpression
 : '(' OptionalPartitionBy OptionalOrderByAndWindow ')'
 ;

WindowExpression_EDIT
 : '(' PartitionBy_EDIT OptionalOrderByAndWindow RightParenthesisOrError
   {
     if (parser.yy.result.suggestFunctions) {
       parser.suggestAggregateFunctions();
     }
   }
 | '(' OptionalPartitionBy OptionalOrderByAndWindow_EDIT RightParenthesisOrError
   {
     if (parser.yy.result.suggestFunctions) {
       parser.suggestAggregateFunctions();
     }
   }
 | '(' AnyCursor OptionalPartitionBy OptionalOrderByAndWindow RightParenthesisOrError
   {
     if (!$3 && !$4) {
       parser.suggestKeywords([{ value: 'PARTITION BY', weight: 2 }, { value: 'ORDER BY', weight: 1 }]);
     } else if (!$3) {
       parser.suggestKeywords(['PARTITION BY']);
     }
   }
 | '(' AnyPartition 'BY' ValueExpressionList 'CURSOR' OptionalOrderByAndWindow RightParenthesisOrError
    {
      if (!$6) {
        parser.suggestValueExpressionKeywords($4, [{ value: 'ORDER BY', weight: 2 }]);
      } else {
        parser.suggestValueExpressionKeywords($4);
      }
    }
  ;

OptionalPartitionBy
 :
 | PartitionBy
 ;

PartitionBy
 : AnyPartition 'BY' ValueExpressionList  -> $3
 ;

PartitionBy_EDIT
 : AnyPartition 'CURSOR'
   {
     parser.suggestKeywords(['BY']);
   }
 | AnyPartition 'BY' 'CURSOR'
   {
     parser.valueExpressionSuggest();
   }
 | AnyPartition 'BY' ValueExpressionList_EDIT
 ;

OptionalOrderByAndWindow
 :
 | OrderByClause OptionalWindowSpec
 ;

OptionalOrderByAndWindow_EDIT
  : OrderByClause_EDIT
    {
      // Only allowed in last order by
      delete parser.yy.result.suggestAnalyticFunctions;
    }
  | OrderByClause 'CURSOR' OptionalWindowSpec
    {
      var keywords = [];
      if ($1.suggestKeywords) {
        keywords = parser.createWeightedKeywords($1.suggestKeywords, 2);
      }
      if (!$3) {
        keywords = keywords.concat([{ value: 'RANGE BETWEEN', weight: 1 }, { value: 'ROWS BETWEEN', weight: 1 }]);
      }
      parser.suggestKeywords(keywords);
    }
  | OrderByClause WindowSpec_EDIT
  ;

OptionalWindowSpec
 :
 | WindowSpec
 ;

WindowSpec
 : RowsOrRange 'BETWEEN' PopLexerState OptionalCurrentOrPreceding OptionalAndFollowing
 | RowsOrRange 'UNBOUNDED' PopLexerState OptionalCurrentOrPreceding OptionalAndFollowing
 ;

WindowSpec_EDIT
 : RowsOrRange 'CURSOR'
   {
     parser.suggestKeywords(parser.isHive() ? ['BETWEEN', 'UNBOUNDED'] : ['BETWEEN']);
   }
 | RowsOrRange 'BETWEEN' PopLexerState OptionalCurrentOrPreceding OptionalAndFollowing 'CURSOR'
   {
     if (!$4 && !$5) {
       parser.suggestKeywords(['CURRENT ROW', 'UNBOUNDED PRECEDING']);
     } else if (!$5) {
       parser.suggestKeywords(['AND']);
     }
   }
 | RowsOrRange 'BETWEEN' PopLexerState OptionalCurrentOrPreceding_EDIT OptionalAndFollowing
 | RowsOrRange 'BETWEEN' PopLexerState OptionalCurrentOrPreceding OptionalAndFollowing_EDIT
 | RowsOrRange 'UNBOUNDED' PopLexerState OptionalCurrentOrPreceding 'CURSOR'
   {
     if (!$4 && parser.isHive()) {
       parser.suggestKeywords(['PRECEDING']);
     }
   }
 | RowsOrRange 'UNBOUNDED' PopLexerState OptionalCurrentOrPreceding_EDIT
 ;

PopLexerState
 :
  {
    lexer.popState();
  }
 ;

PushHdfsLexerState
 :
  {
    lexer.begin('hdfs');
  }
 ;

HdfsPath
 : 'HDFS_START_QUOTE' 'HDFS_PATH' 'HDFS_END_QUOTE'
 ;

HdfsPath_EDIT
 : 'HDFS_START_QUOTE' 'HDFS_PATH' 'PARTIAL_CURSOR' 'HDFS_PATH' 'HDFS_END_QUOTE'
    {
      parser.suggestHdfs({ path: $2 });
    }
 | 'HDFS_START_QUOTE' 'HDFS_PATH' 'PARTIAL_CURSOR' 'HDFS_END_QUOTE'
   {
     parser.suggestHdfs({ path: $2 });
   }
 | 'HDFS_START_QUOTE' 'HDFS_PATH' 'PARTIAL_CURSOR'
    {
      parser.suggestHdfs({ path: $2 });
    }
 | 'HDFS_START_QUOTE' 'PARTIAL_CURSOR' 'HDFS_END_QUOTE'
   {
     parser.suggestHdfs({ path: '' });
   }
 | 'HDFS_START_QUOTE' 'PARTIAL_CURSOR'
    {
      parser.suggestHdfs({ path: '' });
    }
 ;

RowsOrRange
 : 'ROWS'
 | AnyRange
 ;

OptionalCurrentOrPreceding
 :
 | IntegerOrUnbounded 'PRECEDING'
 | AnyCurrent 'ROW'
 ;

OptionalCurrentOrPreceding_EDIT
 : IntegerOrUnbounded 'CURSOR'
   {
     parser.suggestKeywords(['PRECEDING']);
   }
 | AnyCurrent 'CURSOR'
   {
     parser.suggestKeywords(['ROW']);
   }
 ;

AnyCurrent
 : 'CURRENT'
 | '<hive>CURRENT'
 | '<impala>CURRENT'
 ;

AnyRange
 : 'RANGE'
 | '<impala>RANGE'
 ;

OptionalAndFollowing
 :
 | 'AND' AnyCurrent 'ROW'
 | 'AND' IntegerOrUnbounded 'FOLLOWING'
 ;

OptionalAndFollowing_EDIT
 : 'AND' 'CURSOR'
   {
     parser.suggestKeywords(['CURRENT ROW', 'UNBOUNDED FOLLOWING']);
   }
 | 'AND' AnyCurrent 'CURSOR'
   {
     parser.suggestKeywords(['ROW']);
   }
 | 'AND' IntegerOrUnbounded 'CURSOR'
   {
     parser.suggestKeywords(['FOLLOWING']);
   }
 ;

IntegerOrUnbounded
 : 'UNSIGNED_INTEGER'
 | 'UNBOUNDED'
 ;

OptionalHavingClause
 :
 | HavingClause
 ;

HavingClause
 : 'HAVING' ValueExpression
 ;

HavingClause_EDIT
 : 'HAVING' 'CURSOR'
   {
     parser.valueExpressionSuggest();
     parser.suggestAggregateFunctions();
     parser.suggestSelectListAliases(true);
   }
 | 'HAVING' ValueExpression_EDIT
   {
     parser.suggestAggregateFunctions();
     parser.suggestSelectListAliases(true);
   }
 ;

OptionalWindowClause
 :
 | WindowClause
 ;

WindowClause
 : '<hive>WINDOW' RegularOrBacktickedIdentifier '<hive>AS' WindowExpression
 ;

WindowClause_EDIT
 : '<hive>WINDOW' RegularOrBacktickedIdentifier 'CURSOR'
   {
     parser.suggestKeywords(['AS']);
   }
 | '<hive>WINDOW' RegularOrBacktickedIdentifier '<hive>AS' WindowExpression_EDIT
 ;

CastFunction
 : 'CAST' '(' ValueExpression AnyAs PrimitiveType ')'  -> { types: [ $5.toUpperCase() ] }
 | 'CAST' '(' ')'                                      -> { types: [ 'T' ] }
 ;

CastFunction_EDIT
 : 'CAST' '(' AnyCursor AnyAs PrimitiveType RightParenthesisOrError
   {
     parser.valueExpressionSuggest();
     $$ = { types: [ $5.toUpperCase() ] };
   }
 | 'CAST' '(' AnyCursor AnyAs RightParenthesisOrError
   {
     parser.valueExpressionSuggest();
     $$ = { types: [ 'T' ] };
   }
 | 'CAST' '(' AnyCursor RightParenthesisOrError
   {
     parser.valueExpressionSuggest();
     $$ = { types: [ 'T' ] };
   }
 | 'CAST' '(' ValueExpression_EDIT AnyAs PrimitiveType RightParenthesisOrError  -> { types: [ $5.toUpperCase() ] }
 | 'CAST' '(' ValueExpression_EDIT AnyAs RightParenthesisOrError                -> { types: [ 'T' ] }
 | 'CAST' '(' ValueExpression_EDIT RightParenthesisOrError                      -> { types: [ 'T' ] }
 | 'CAST' '(' ValueExpression 'CURSOR' PrimitiveType RightParenthesisOrError
   {
     parser.suggestValueExpressionKeywords($3, [{ value: 'AS', weight: 2 }]);
     $$ =  { types: [ $5.toUpperCase() ] };
   }
 | 'CAST' '(' ValueExpression 'CURSOR' RightParenthesisOrError
   {
     parser.suggestValueExpressionKeywords($3, [{ value: 'AS', weight: 2 }]);
     $$ = { types: [ 'T' ] };
   }
 | 'CAST' '(' ValueExpression AnyAs 'CURSOR' RightParenthesisOrError
   {
     parser.suggestKeywords(parser.getTypeKeywords());
     $$ = { types: [ 'T' ] };
   }
 | 'CAST' '(' AnyAs 'CURSOR' RightParenthesisOrError
   {
     parser.suggestKeywords(parser.getTypeKeywords());
     $$ = { types: [ 'T' ] };
   }
 ;

CountFunction
 : 'COUNT' '(' '*' ')'                                        -> { types: parser.findReturnTypes($1) }
 | 'COUNT' '(' ')'                                            -> { types: parser.findReturnTypes($1) }
 | 'COUNT' '(' OptionalAllOrDistinct ValueExpressionList ')'  -> { types: parser.findReturnTypes($1) }
 ;

CountFunction_EDIT
 : 'COUNT' '(' OptionalAllOrDistinct AnyCursor RightParenthesisOrError
   {
     parser.valueExpressionSuggest();
     var keywords = parser.getSelectListKeywords();
     if (!$3) {
       keywords.push('DISTINCT');
       if (parser.isImpala()) {
         keywords.push('ALL');
       }
       if (parser.yy.result.suggestKeywords) {
         keywords = parser.yy.result.suggestKeywords.concat(keywords);
       }
     }
     parser.suggestKeywords(keywords);
     $$ = { types: parser.findReturnTypes($1) };
   }
 | 'COUNT' '(' OptionalAllOrDistinct ValueExpressionList 'CURSOR' RightParenthesisOrError
   {
     parser.suggestValueExpressionKeywords($4);
     $$ = { types: parser.findReturnTypes($1) };
   }
 | 'COUNT' '(' OptionalAllOrDistinct ValueExpressionList_EDIT RightParenthesisOrError
   {
     if ($4.cursorAtStart) {
       var keywords = parser.getSelectListKeywords();
       if (!$3) {
         keywords.push('DISTINCT');
         if (parser.isImpala()) {
           keywords.push('ALL');
         }
       }
       parser.suggestKeywords(keywords);
     }
     $$ = { types: parser.findReturnTypes($1) };
   }
 ;

HiveExtractFunction
 : '<hive>EXTRACT' '(' HiveDateField 'FROM' ValueExpression ')'  -> { types: ['INT'] }
 ;

HiveExtractFunction_EDIT
 : '<hive>EXTRACT' '(' AnyCursor RightParenthesisOrError
   {
     parser.suggestKeywords(['DAY', 'DAYOFWEEK', 'HOUR', 'MINUTE', 'MONTH', 'QUARTER', 'SECOND', 'WEEK', 'YEAR']);
     $$ = { types: ['INT'] }
   }
 | '<hive>EXTRACT' '(' HiveDateField 'CURSOR' RightParenthesisOrError
   {
     parser.suggestKeywords(['FROM']);
     $$ = { types: ['INT'] }
   }
 | '<hive>EXTRACT' '(' HiveDateField 'FROM' 'CURSOR' RightParenthesisOrError
   {
     parser.valueExpressionSuggest();
     $$ = { types: ['INT'] }
   }
 | '<hive>EXTRACT' '(' HiveDateField 'FROM' ValueExpression_EDIT RightParenthesisOrError  -> { types: ['INT'] }
 | '<hive>EXTRACT' '(' AnyCursor 'FROM' ValueExpression RightParenthesisOrError
   {
      parser.suggestKeywords(['DAY', 'DAYOFWEEK', 'HOUR', 'MINUTE', 'MONTH', 'QUARTER', 'SECOND', 'WEEK', 'YEAR']);
      $$ = { types: ['INT'] }
   }
 | '<hive>EXTRACT' '(' HiveDateField 'CURSOR' ValueExpression RightParenthesisOrError
   {
     parser.suggestKeywords(['FROM']);
     $$ = { types: ['INT'] }
   }
 ;

HiveDateField
 : '<hive>DAY'
 | '<hive>DAYOFWEEK'
 | '<hive>HOUR'
 | '<hive>MINUTE'
 | '<hive>MONTH'
 | '<hive>QUARTER'
 | '<hive>SECOND'
 | '<hive>WEEK'
 | '<hive>YEAR'
 ;

OtherAggregateFunction
 : OtherAggregateFunction_Type '(' OptionalAllOrDistinct ')'                      -> { types: parser.findReturnTypes($1) }
 | OtherAggregateFunction_Type '(' OptionalAllOrDistinct ValueExpressionList ')'  -> { types: parser.findReturnTypes($1) }
 ;

OtherAggregateFunction_EDIT
 : OtherAggregateFunction_Type '(' OptionalAllOrDistinct AnyCursor RightParenthesisOrError
   {
     parser.valueExpressionSuggest();
     var keywords = parser.getSelectListKeywords(true);
     if (!$3) {
       if ($1.toLowerCase() === 'group_concat') {
         keywords.push('ALL');
       } else if (parser.isImpala()) {
         keywords.push('ALL');
         keywords.push('DISTINCT');
       } else {
         keywords.push('DISTINCT');
       }
     }
     if (parser.yy.result.suggestKeywords) {
       keywords = parser.yy.result.suggestKeywords.concat(keywords);
     }
     parser.suggestKeywords(keywords);
     parser.applyArgumentTypesToSuggestions($1, 1);
     $$ = { types: parser.findReturnTypes($1) };
   }
 | OtherAggregateFunction_Type '(' OptionalAllOrDistinct ValueExpressionList 'CURSOR' RightParenthesisOrError
   {
     parser.suggestValueExpressionKeywords($4);
     $$ = { types: parser.findReturnTypes($1) };
   }
 | OtherAggregateFunction_Type '(' OptionalAllOrDistinct ValueExpressionList_EDIT RightParenthesisOrError
   {
     if ($4.cursorAtStart) {
       var keywords = parser.getSelectListKeywords(true);
       if (!$3) {
         if ($1.toLowerCase() === 'group_concat') {
           keywords.push('ALL');
         } else if (parser.isImpala()) {
           keywords.push('ALL');
           keywords.push('DISTINCT');
         } else {
           keywords.push('DISTINCT');
         }
       }
       if (parser.yy.result.suggestKeywords) {
         keywords = parser.yy.result.suggestKeywords.concat(keywords);
       }
       parser.suggestKeywords(keywords);
     }
     if (parser.yy.result.suggestFunctions && !parser.yy.result.suggestFunctions.types) {
       parser.applyArgumentTypesToSuggestions($1, $4.position);
     }
     $$ = { types: parser.findReturnTypes($1) };
   }
 ;

OtherAggregateFunction_Type
 : '<impala>APPX_MEDIAN'
 | 'AVG'
 | '<hive>COLLECT_SET'
 | '<hive>COLLECT_LIST'
 | '<hive>CORR'
 | '<hive>COVAR_POP'
 | '<hive>COVAR_SAMP'
 | '<impala>GROUP_CONCAT'
 | '<hive>HISTOGRAM_NUMERIC'
 | '<impala>STDDEV'
 | 'STDDEV_POP'
 | 'STDDEV_SAMP'
 | 'MAX'
 | 'MIN'
 | '<impala>NDV'
 | '<hive>NTILE'
 | '<hive>PERCENTILE'
 | '<hive>PERCENTILE_APPROX'
 | 'VARIANCE'
 | '<impala>VARIANCE_POP'
 | '<impala>VARIANCE_SAMP'
 | 'VAR_POP'
 | 'VAR_SAMP'
 ;

ImpalaExtractFunction
 : '<impala>EXTRACT' '(' ValueExpression FromOrComma ValueExpression ')'
 | '<impala>EXTRACT' '(' ')'
 ;

ImpalaExtractFunction_EDIT
 : '<impala>EXTRACT' '(' AnyCursor FromOrComma ValueExpression RightParenthesisOrError
   {
     parser.valueExpressionSuggest();
     parser.applyTypeToSuggestions($4.toLowerCase() === 'from' ? ['STRING'] : ['TIMESTAMP']);
     $$ = { types: parser.findReturnTypes($1) };
   }
 | '<impala>EXTRACT' '(' AnyCursor FromOrComma RightParenthesisOrError
   {
     parser.valueExpressionSuggest();
     parser.applyTypeToSuggestions($4.toLowerCase() === 'from' ? ['STRING'] : ['TIMESTAMP']);
     $$ = { types: parser.findReturnTypes($1) };
   }
 | '<impala>EXTRACT' '(' AnyCursor RightParenthesisOrError
   {
     parser.valueExpressionSuggest();
     parser.applyTypeToSuggestions(['STRING', 'TIMESTAMP']);
     $$ = { types: parser.findReturnTypes($1) };
   }
 | '<impala>EXTRACT' '(' ValueExpression_EDIT FromOrComma ValueExpression RightParenthesisOrError
   {
     parser.applyTypeToSuggestions($4.toLowerCase() === 'from' ? ['STRING'] : ['TIMESTAMP']);
     $$ = { types: parser.findReturnTypes($1) };
   }
 | '<impala>EXTRACT' '(' ValueExpression_EDIT FromOrComma RightParenthesisOrError
   {
     parser.applyTypeToSuggestions($4.toLowerCase() === 'from' ? ['STRING'] : ['TIMESTAMP']);
     $$ = { types: parser.findReturnTypes($1) };
   }
 | '<impala>EXTRACT' '(' ValueExpression_EDIT RightParenthesisOrError
   {
     parser.applyTypeToSuggestions(['STRING', 'TIMESTAMP']);
     $$ = { types: parser.findReturnTypes($1) };
   }
 | '<impala>EXTRACT' '(' ValueExpression FromOrComma AnyCursor RightParenthesisOrError
   {
     parser.valueExpressionSuggest();
     parser.applyTypeToSuggestions($4.toLowerCase() === 'from' ? ['TIMESTAMP'] : ['STRING']);
     $$ = { types: parser.findReturnTypes($1) };
   }
 | '<impala>EXTRACT' '(' FromOrComma AnyCursor RightParenthesisOrError
   {
     parser.valueExpressionSuggest();
     parser.applyTypeToSuggestions($4.toLowerCase() === 'from' ? ['TIMESTAMP'] : ['STRING']);
     $$ = { types: parser.findReturnTypes($1) };
   }
 | '<impala>EXTRACT' '(' ValueExpression FromOrComma ValueExpression_EDIT RightParenthesisOrError
   {
     parser.applyTypeToSuggestions($4.toLowerCase() === 'from' ? ['TIMESTAMP'] : ['STRING']);
     $$ = { types: parser.findReturnTypes($1) };
   }
 | '<impala>EXTRACT' '(' FromOrComma ValueExpression_EDIT RightParenthesisOrError
   {
    parser.applyTypeToSuggestions($4.toLowerCase() === 'from' ? ['TIMESTAMP'] : ['STRING']);
     $$ = { types: parser.findReturnTypes($1) };
   }
 | '<impala>EXTRACT' '(' ValueExpression 'CURSOR' ValueExpression RightParenthesisOrError
   {
     if ($3.types[0] === 'STRING') {
       parser.suggestValueExpressionKeywords($3, ['FROM']);
     } else {
       parser.suggestValueExpressionKeywords($3);
     }
     $$ = { types: parser.findReturnTypes($1) };
   }
 | '<impala>EXTRACT' '(' ValueExpression 'CURSOR' RightParenthesisOrError
   {
     if ($3.types[0] === 'STRING') {
       parser.suggestValueExpressionKeywords($3, ['FROM']);
     } else {
       parser.suggestValueExpressionKeywords($3);
     }
     $$ = { types: parser.findReturnTypes($1) };
   }
 ;

FromOrComma
 : 'FROM'
 | ','
 ;

SumFunction
 : 'SUM' '(' OptionalAllOrDistinct ValueExpression ')'  -> { types: parser.findReturnTypes($1) }
 | 'SUM' '(' ')'                                        -> { types: parser.findReturnTypes($1) }
 ;

SumFunction_EDIT
 : 'SUM' '(' OptionalAllOrDistinct AnyCursor RightParenthesisOrError
   {
     parser.valueExpressionSuggest();
     parser.applyArgumentTypesToSuggestions($1, 1);
     var keywords = parser.getSelectListKeywords(true);
     if (!$3) {
       keywords.push('DISTINCT');
       if (parser.isImpala()) {
         keywords.push('ALL');
       }
     }
     if (parser.yy.result.suggestKeywords) {
       keywords = parser.yy.result.suggestKeywords.concat(keywords);
     }
     parser.suggestKeywords(keywords);
     $$ = { types: parser.findReturnTypes($1) };
   }
 | 'SUM' '(' OptionalAllOrDistinct ValueExpression 'CURSOR' RightParenthesisOrError
   {
     parser.suggestValueExpressionKeywords($4);
     $$ = { types: parser.findReturnTypes($1) };
   }
 | 'SUM' '(' OptionalAllOrDistinct ValueExpression_EDIT RightParenthesisOrError
   {
     if (parser.yy.result.suggestFunctions && ! parser.yy.result.suggestFunctions.types) {
       parser.applyArgumentTypesToSuggestions($1, 1);
     }
     $$ = { types: parser.findReturnTypes($1) };
   }
 ;

LateralView
 : '<hive>LATERAL' '<hive>VIEW' OptionalOuter ArbitraryFunction RegularOrBacktickedIdentifier LateralViewColumnAliases  -> { lateralView: { udtf: $4, tableAlias: $5, columnAliases: $6 }}
 | '<hive>LATERAL' '<hive>VIEW' OptionalOuter ArbitraryFunction RegularOrBacktickedIdentifier
   {
     if ($4.function.toLowerCase() === 'explode') {
       $$ = { lateralView: { udtf: $4, tableAlias: $5, columnAliases: ['key', 'value'] }, suggestKeywords: ['AS'] };
     } else if ($4.function.toLowerCase() === 'posexplode') {
       $$ = { lateralView: { udtf: $4, tableAlias: $5, columnAliases: ['pos', 'val'] }, suggestKeywords: ['AS'] };
     } else {
       $$ = { lateralView: { udtf: $4, tableAlias: $5, columnAliases: [] }, suggestKeywords: ['AS'] };
     }
   }
 | '<hive>LATERAL' '<hive>VIEW' OptionalOuter ArbitraryFunction LateralViewColumnAliases                                -> { lateralView: { udtf: $4, columnAliases: $5 }}
 ;

LateralView_EDIT
 : '<hive>LATERAL' '<hive>VIEW' OptionalOuter ArbitraryFunction_EDIT
 | '<hive>LATERAL' '<hive>VIEW' OptionalOuter ArbitraryFunction_EDIT RegularOrBacktickedIdentifier
 | '<hive>LATERAL' '<hive>VIEW' OptionalOuter ArbitraryFunction_EDIT RegularOrBacktickedIdentifier LateralViewColumnAliases
 | '<hive>LATERAL' '<hive>VIEW' OptionalOuter ArbitraryFunction RegularOrBacktickedIdentifier LateralViewColumnAliases_EDIT
 | '<hive>LATERAL' '<hive>VIEW' OptionalOuter ArbitraryFunction PartialBacktickedOrCursor
 | '<hive>LATERAL' '<hive>VIEW' OptionalOuter ArbitraryFunction PartialBacktickedOrCursor LateralViewColumnAliases
 | '<hive>LATERAL' '<hive>VIEW' OptionalOuter 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords([{ value: 'OUTER', weight: 2 }, { value: 'explode', weight: 1 }, { value: 'posexplode', weight: 1 }]);
     } else {
       parser.suggestKeywords(['explode', 'posexplode']);
     }
   }
 | '<hive>LATERAL' 'CURSOR'
   {
     parser.suggestKeywords(['VIEW']);
   }
 ;

OptionalOuter
 :
 | 'OUTER'
 ;

LateralViewColumnAliases
 : '<hive>AS' RegularOrBacktickedIdentifier                                    -> [ $2 ]
 | '<hive>AS' RegularOrBacktickedIdentifier ',' RegularOrBacktickedIdentifier  -> [ $2, $4 ]
 ;

LateralViewColumnAliases_EDIT
 : '<hive>AS' PartialBacktickedOrCursor
 | '<hive>AS' RegularOrBacktickedIdentifier ',' PartialBacktickedOrAnyCursor
 ;// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

ValueExpression
 : 'NOT' ValueExpression
   {
     // verifyType($2, 'BOOLEAN');
     $$ = { types: [ 'BOOLEAN' ] };
   }
 | '!' ValueExpression
   {
     // verifyType($2, 'BOOLEAN');
     $$ = { types: [ 'BOOLEAN' ] };
   }
 | '~' ValueExpression                                                 -> $2
 | '-' ValueExpression %prec NEGATION
   {
     // verifyType($2, 'NUMBER');
     $$ = $2;
     $2.types = ['NUMBER'];
   }
 | ValueExpression 'IS' OptionalNot 'NULL'                             -> { types: [ 'BOOLEAN' ] }
 | ValueExpression 'IS' OptionalNot 'TRUE'                             -> { types: [ 'BOOLEAN' ] }
 | ValueExpression 'IS' OptionalNot 'FALSE'                            -> { types: [ 'BOOLEAN' ] }
 | ValueExpression 'IS' OptionalNot '<impala>UNKNOWN'                  -> { types: [ 'BOOLEAN' ] }
 | ValueExpression 'IS' OptionalNot 'DISTINCT' 'FROM' ValueExpression  -> { types: [ 'BOOLEAN' ] }
 ;

ValueExpression_EDIT
 : 'NOT' ValueExpression_EDIT                           -> { types: [ 'BOOLEAN' ], suggestFilters: $2.suggestFilters }
 | 'NOT' 'CURSOR'
   {
     parser.suggestFunctions();
     parser.suggestColumns();
     parser.suggestKeywords(['EXISTS']);
     $$ = { types: [ 'BOOLEAN' ] };
   }
 | '!' ValueExpression_EDIT                             -> { types: [ 'BOOLEAN' ], suggestFilters: $2.suggestFilters }
 | '!' AnyCursor
   {
     parser.suggestFunctions({ types: [ 'BOOLEAN' ] });
     parser.suggestColumns({ types: [ 'BOOLEAN' ] });
     $$ = { types: [ 'BOOLEAN' ] };
   }
 | '~' ValueExpression_EDIT                             -> { types: [ 'T' ], suggestFilters: $2.suggestFilters }
 | '~' 'PARTIAL_CURSOR'
   {
     parser.suggestFunctions();
     parser.suggestColumns();
     $$ = { types: [ 'T' ] };
   }
 | '-' ValueExpression_EDIT %prec NEGATION
   {
     if (!$2.typeSet) {
       parser.applyTypeToSuggestions('NUMBER');
     }
     $$ = { types: [ 'NUMBER' ], suggestFilters: $2.suggestFilters };
   }
 | '-' 'PARTIAL_CURSOR' %prec NEGATION
   {
     parser.suggestFunctions({ types: [ 'NUMBER' ] });
     parser.suggestColumns({ types: [ 'NUMBER' ] });
     $$ = { types: [ 'NUMBER' ] };
   }
 | ValueExpression 'IS' 'CURSOR'
   {
     var keywords = ['FALSE', 'NOT NULL', 'NOT TRUE', 'NOT FALSE', 'NULL', 'TRUE'];
     if (parser.isImpala()) {
       keywords = keywords.concat(['DISTINCT FROM', 'NOT DISTINCT FROM', 'NOT UNKNOWN', 'UNKNOWN']);
     }
     parser.suggestKeywords(keywords);
     $$ = { types: [ 'BOOLEAN' ] };
   }
 | ValueExpression 'IS' 'NOT' 'CURSOR'
   {
     var keywords = ['FALSE', 'NULL', 'TRUE'];
     if (parser.isImpala()) {
       keywords = keywords.concat(['DISTINCT FROM', 'UNKNOWN']);
     }
     parser.suggestKeywords(keywords);
     $$ = { types: [ 'BOOLEAN' ] };
   }
 | ValueExpression 'IS' OptionalNot 'DISTINCT' 'CURSOR'
   {
     if (parser.isImpala()) {
       parser.suggestKeywords(['FROM']);
     }
     $$ = { types: [ 'BOOLEAN' ] };
   }
 | ValueExpression 'IS' 'CURSOR' 'NULL'
   {
     parser.suggestKeywords(['NOT']);
     $$ = { types: [ 'BOOLEAN' ] };
   }
 | ValueExpression 'IS' 'CURSOR' 'FALSE'
   {
     parser.suggestKeywords(['NOT']);
     $$ = { types: [ 'BOOLEAN' ] };
   }
 | ValueExpression 'IS' 'CURSOR' 'TRUE'
   {
     parser.suggestKeywords(['NOT']);
     $$ = { types: [ 'BOOLEAN' ] };
   }
 | ValueExpression 'IS' OptionalNot 'DISTINCT' 'FROM' PartialBacktickedOrAnyCursor
   {
     parser.valueExpressionSuggest($1, $3 ? 'IS NOT DISTINCT FROM' : 'IS DISTINCT FROM');
     $$ = { types: [ 'BOOLEAN' ] };
   }
 | ValueExpression 'IS' OptionalNot 'DISTINCT' 'FROM' ValueExpression_EDIT
   {
     $$ = { types: [ 'BOOLEAN' ], suggestFilters: $6.suggestFilters }
   }
 ;

// ------------------  EXISTS and parenthesized ------------------
ValueExpression
 : 'EXISTS' TableSubQuery
   {
     $$ = { types: [ 'BOOLEAN' ] };
     // clear correlated flag after completed sub-query (set by lexer)
     parser.yy.correlatedSubQuery = false;
   }
 | '(' ValueExpression ')'                                -> $2
 ;

ValueExpression_EDIT
 : 'EXISTS' TableSubQuery_EDIT                               -> { types: [ 'BOOLEAN' ] }
 | '(' ValueExpression_EDIT RightParenthesisOrError
   {
     $$ = $2;
   }
 | '(' 'CURSOR' RightParenthesisOrError
   {
     parser.valueExpressionSuggest();
     $$ = { types: ['T'], typeSet: true };
   }
 ;

// ------------------  COMPARISON ------------------

ValueExpression
 : ValueExpression '=' ValueExpression
   {
     parser.addColRefToVariableIfExists($1, $3);
     $$ = { types: [ 'BOOLEAN' ] };
   }
 | ValueExpression '<' ValueExpression
   {
     parser.addColRefToVariableIfExists($1, $3);
     $$ = { types: [ 'BOOLEAN' ] };
   }
 | ValueExpression '>' ValueExpression
   {
     parser.addColRefToVariableIfExists($1, $3);
     $$ = { types: [ 'BOOLEAN' ] };
   }
 | ValueExpression 'COMPARISON_OPERATOR' ValueExpression
   {
     parser.addColRefToVariableIfExists($1, $3);
     $$ = { types: [ 'BOOLEAN' ] };
   }
 ;

ValueExpression_EDIT
 : 'CURSOR' '=' ValueExpression
   {
     parser.valueExpressionSuggest($3, $2);
     parser.applyTypeToSuggestions($3.types);
     $$ = { types: [ 'BOOLEAN' ], typeSet: true };
   }
 | 'CURSOR' '<' ValueExpression
   {
     parser.valueExpressionSuggest($3, $2);
     parser.applyTypeToSuggestions($3.types);
     $$ = { types: [ 'BOOLEAN' ], typeSet: true  };
   }
 | 'CURSOR' '>' ValueExpression
   {
     parser.valueExpressionSuggest($3, $2);
     parser.applyTypeToSuggestions($3.types);
     $$ = { types: [ 'BOOLEAN' ], typeSet: true  };
   }
 | 'CURSOR' 'COMPARISON_OPERATOR' ValueExpression
   {
     parser.valueExpressionSuggest($3, $2);
     parser.applyTypeToSuggestions($3.types);
     $$ = { types: [ 'BOOLEAN' ], typeSet: true  };
   }
 | ValueExpression_EDIT '=' ValueExpression
   {
     if (!$1.typeSet) {
       parser.applyTypeToSuggestions($3.types);
       parser.addColRefIfExists($3);
     }
     $$ = { types: [ 'BOOLEAN' ], suggestFilters: $1.suggestFilters }
   }
 | ValueExpression_EDIT '<' ValueExpression
   {
     if (!$1.typeSet) {
       parser.applyTypeToSuggestions($3.types);
       parser.addColRefIfExists($3);
     }
     $$ = { types: [ 'BOOLEAN' ], suggestFilters: $1.suggestFilters }
   }
 | ValueExpression_EDIT '>' ValueExpression
   {
     if (!$1.typeSet) {
       parser.applyTypeToSuggestions($3.types);
       parser.addColRefIfExists($3);
     }
     $$ = { types: [ 'BOOLEAN' ], suggestFilters: $1.suggestFilters }
   }
 | ValueExpression_EDIT 'COMPARISON_OPERATOR' ValueExpression
   {
     if (!$1.typeSet) {
       parser.applyTypeToSuggestions($3.types);
       parser.addColRefIfExists($3);
     }
     $$ = { types: [ 'BOOLEAN' ], suggestFilters: $1.suggestFilters }
   }
 | ValueExpression '=' PartialBacktickedOrAnyCursor
   {
     parser.valueExpressionSuggest($1, $2);
     parser.applyTypeToSuggestions($1.types);
     $$ = { types: [ 'BOOLEAN' ], typeSet: true  };
   }
 | ValueExpression '<' PartialBacktickedOrAnyCursor
   {
     parser.valueExpressionSuggest($1, $2);
     parser.applyTypeToSuggestions($1.types);
     $$ = { types: [ 'BOOLEAN' ] , typeSet: true, endsWithLessThanOrEqual: true };
   }
 | ValueExpression '>' PartialBacktickedOrAnyCursor
   {
     parser.valueExpressionSuggest($1, $2);
     parser.applyTypeToSuggestions($1.types);
     $$ = { types: [ 'BOOLEAN' ], typeSet: true  };
   }
 | ValueExpression 'COMPARISON_OPERATOR' PartialBacktickedOrAnyCursor
   {
     parser.valueExpressionSuggest($1, $2);
     parser.applyTypeToSuggestions($1.types);
     $$ = { types: [ 'BOOLEAN' ], typeSet: true, endsWithLessThanOrEqual: $2 === '<='  };
   }
 | ValueExpression '=' ValueExpression_EDIT
   {
     if (!$3.typeSet) {
       parser.applyTypeToSuggestions($1.types);
       parser.addColRefIfExists($1);
     }
     $$ = { types: [ 'BOOLEAN' ], suggestFilters: $3.suggestFilters }
   }
 | ValueExpression '<' ValueExpression_EDIT
   {
     if (!$3.typeSet) {
       parser.applyTypeToSuggestions($1.types);
       parser.addColRefIfExists($1);
     }
     $$ = { types: [ 'BOOLEAN' ], suggestFilters: $3.suggestFilters }
   }
 | ValueExpression '>' ValueExpression_EDIT
   {
     if (!$3.typeSet) {
       parser.applyTypeToSuggestions($1.types);
       parser.addColRefIfExists($1);
     }
     $$ = { types: [ 'BOOLEAN' ], suggestFilters: $3.suggestFilters }
   }
 | ValueExpression 'COMPARISON_OPERATOR' ValueExpression_EDIT
   {
     if (!$3.typeSet) {
       parser.applyTypeToSuggestions($1.types);
       parser.addColRefIfExists($1);
     }
     $$ = { types: [ 'BOOLEAN' ], suggestFilters: $3.suggestFilters }
   }
 ;


// ------------------  IN ------------------

ValueExpression
 : ValueExpression 'NOT' 'IN' '(' TableSubQueryInner ')'   -> { types: [ 'BOOLEAN' ] }
 | ValueExpression 'NOT' 'IN' '(' ValueExpressionList ')'  -> { types: [ 'BOOLEAN' ] }
 | ValueExpression 'IN' '(' TableSubQueryInner ')'         -> { types: [ 'BOOLEAN' ] }
 | ValueExpression 'IN' '(' ValueExpressionList ')'        -> { types: [ 'BOOLEAN' ] }
 ;

ValueExpression_EDIT
 : ValueExpression 'NOT' 'IN' ValueExpressionInSecondPart_EDIT
   {
     if ($4.inValueEdit) {
       parser.valueExpressionSuggest($1, $2 + ' ' + $3);
       parser.applyTypeToSuggestions($1.types);
     }
     if ($4.cursorAtStart) {
       parser.suggestKeywords(['SELECT']);
     }
     $$ = { types: [ 'BOOLEAN' ], typeSet: true  };
   }
 | ValueExpression 'IN' ValueExpressionInSecondPart_EDIT
   {
     if ($3.inValueEdit) {
       parser.valueExpressionSuggest($1, $2);
       parser.applyTypeToSuggestions($1.types);
     }
     if ($3.cursorAtStart) {
       parser.suggestKeywords(['SELECT']);
     }
     $$ = { types: [ 'BOOLEAN' ], typeSet: true  };
   }
 | ValueExpression_EDIT 'NOT' 'IN' '(' ValueExpressionList RightParenthesisOrError  -> { types: [ 'BOOLEAN' ], suggestFilters: $1.suggestFilters }
 | ValueExpression_EDIT 'NOT' 'IN' '(' TableSubQueryInner RightParenthesisOrError   -> { types: [ 'BOOLEAN' ], suggestFilters: $1.suggestFilters }
 | ValueExpression_EDIT 'IN' '(' ValueExpressionList RightParenthesisOrError        -> { types: [ 'BOOLEAN' ], suggestFilters: $1.suggestFilters }
 | ValueExpression_EDIT 'IN' '(' TableSubQueryInner RightParenthesisOrError         -> { types: [ 'BOOLEAN' ], suggestFilters: $1.suggestFilters }
 ;

ValueExpressionInSecondPart_EDIT
 : '(' TableSubQueryInner_EDIT RightParenthesisOrError
 | '(' ValueExpressionList_EDIT RightParenthesisOrError -> { inValueEdit: true }
 | '(' AnyCursor RightParenthesisOrError                -> { inValueEdit: true, cursorAtStart: true }
 ;

// ------------------  BETWEEN ------------------

ValueExpression
 : ValueExpression 'NOT' 'BETWEEN' ValueExpression 'BETWEEN_AND' ValueExpression  -> { types: [ 'BOOLEAN' ] }
 | ValueExpression 'BETWEEN' ValueExpression 'BETWEEN_AND' ValueExpression        -> { types: [ 'BOOLEAN' ] }
 ;

ValueExpression_EDIT
 : ValueExpression_EDIT 'NOT' 'BETWEEN' ValueExpression 'BETWEEN_AND' ValueExpression
   {
     if ($4.types[0] === $6.types[0] && !$1.typeSet) {
       parser.applyTypeToSuggestions($4.types);
     }
     $$ = { types: [ 'BOOLEAN' ], suggestFilters: $1.suggestFilters };
   }
 | ValueExpression 'NOT' 'BETWEEN' ValueExpression_EDIT 'BETWEEN_AND' ValueExpression
   {
     if ($1.types[0] === $6.types[0] && !$4.typeSet) {
       parser.applyTypeToSuggestions($1.types);
     }
     $$ = { types: [ 'BOOLEAN' ], suggestFilters: $4.suggestFilters };
   }
 | ValueExpression 'NOT' 'BETWEEN' ValueExpression 'BETWEEN_AND' ValueExpression_EDIT
   {
     if ($1.types[0] === $4.types[0] && !$6.typeSet) {
       parser.applyTypeToSuggestions($1.types);
     }
     $$ = { types: [ 'BOOLEAN' ], suggestFilters: $6.suggestFilters };
   }
 | ValueExpression 'NOT' 'BETWEEN' ValueExpression 'BETWEEN_AND' 'CURSOR'
   {
     parser.valueExpressionSuggest($1, $5);
     $$ = { types: [ 'BOOLEAN' ], typeSet: true  };
   }
 | ValueExpression 'NOT' 'BETWEEN' ValueExpression 'CURSOR'
   {
     parser.suggestValueExpressionKeywords($4, ['AND']);
     $$ = { types: [ 'BOOLEAN' ] };
   }
 | ValueExpression 'NOT' 'BETWEEN' 'CURSOR'
   {
     parser.valueExpressionSuggest($1, $2 + ' ' + $3);
     $$ = { types: [ 'BOOLEAN' ], typeSet: true  };
   }
 | ValueExpression_EDIT 'BETWEEN' ValueExpression 'BETWEEN_AND' ValueExpression
   {
     if ($1.types[0] === $3.types[0] && !$1.typeSet) {
       parser.applyTypeToSuggestions($1.types)
     }
     $$ = { types: [ 'BOOLEAN' ], suggestFilters: $1.suggestFilters };
   }
 | ValueExpression 'BETWEEN' ValueExpression_EDIT 'BETWEEN_AND' ValueExpression
   {
     if ($1.types[0] === $3.types[0] && !$3.typeSet) {
       parser.applyTypeToSuggestions($1.types)
     }
     $$ = { types: [ 'BOOLEAN' ], suggestFilters: $3.suggestFilters };
   }
 | ValueExpression 'BETWEEN' ValueExpression 'BETWEEN_AND' ValueExpression_EDIT
   {
     if ($1.types[0] === $3.types[0] && !$5.typeSet) {
       parser.applyTypeToSuggestions($1.types)
     }
     $$ = { types: [ 'BOOLEAN' ], suggestFilters: $5.suggestFilters };
   }
 | ValueExpression 'BETWEEN' ValueExpression 'BETWEEN_AND' 'CURSOR'
   {
     parser.valueExpressionSuggest($1, $4);
     parser.applyTypeToSuggestions($1.types);
     $$ = { types: [ 'BOOLEAN' ], typeSet: true  };
   }
 | ValueExpression 'BETWEEN' ValueExpression 'CURSOR'
   {
     parser.suggestValueExpressionKeywords($3, ['AND']);
     $$ = { types: [ 'BOOLEAN' ] };
   }
 | ValueExpression 'BETWEEN' 'CURSOR'
   {
     parser.valueExpressionSuggest($1, $2);
     parser.applyTypeToSuggestions($1.types);
     $$ = { types: [ 'BOOLEAN' ], typeSet: true };
   }
 ;

// ------------------  BOOLEAN ------------------

ValueExpression
 : ValueExpression 'OR' ValueExpression
   {
     // verifyType($1, 'BOOLEAN');
     // verifyType($3, 'BOOLEAN');
     $$ = { types: [ 'BOOLEAN' ] };
   }
 | ValueExpression 'AND' ValueExpression
   {
     // verifyType($1, 'BOOLEAN');
     // verifyType($3, 'BOOLEAN');
     $$ = { types: [ 'BOOLEAN' ] };
   }
 ;

ValueExpression_EDIT
 : 'CURSOR' 'OR' ValueExpression
   {
     parser.valueExpressionSuggest(undefined, $2);
     $$ = { types: [ 'BOOLEAN' ], typeSet: true, suggestFilters: true };
   }
 | ValueExpression_EDIT 'OR' ValueExpression
   {
     parser.addColRefIfExists($3);
     $$ = { types: [ 'BOOLEAN' ], suggestFilters: $1.suggestFilters }
   }
 | ValueExpression 'OR' PartialBacktickedOrAnyCursor
   {
     parser.valueExpressionSuggest(undefined, $2);
     $$ = { types: [ 'BOOLEAN' ], typeSet: true, suggestFilters: true };
   }
 | ValueExpression 'OR' ValueExpression_EDIT
   {
     parser.addColRefIfExists($1);
     $$ = { types: [ 'BOOLEAN' ], suggestFilters: $3.suggestFilters }
   }
 | 'CURSOR' 'AND' ValueExpression
   {
     parser.valueExpressionSuggest(undefined, $2);
     $$ = { types: [ 'BOOLEAN' ], typeSet: true, suggestFilters: true };
   }
 | ValueExpression_EDIT 'AND' ValueExpression
   {
     parser.addColRefIfExists($3);
     $$ = { types: [ 'BOOLEAN' ], suggestFilters: $1.suggestFilters }
   }
 | ValueExpression 'AND' PartialBacktickedOrAnyCursor
   {
     parser.valueExpressionSuggest(undefined, $2);
     $$ = { types: [ 'BOOLEAN' ], typeSet: true, suggestFilters: true };
   }
 | ValueExpression 'AND' ValueExpression_EDIT
   {
     parser.addColRefIfExists($1);
     $$ = { types: [ 'BOOLEAN' ], suggestFilters: $3.suggestFilters }
   }
 ;

// ------------------  ARITHMETIC ------------------

ValueExpression
 : ValueExpression '-' ValueExpression
   {
     // verifyType($1, 'NUMBER');
     // verifyType($3, 'NUMBER');
     $$ = { types: [ 'NUMBER' ] };
   }
 | ValueExpression '*' ValueExpression
   {
     // verifyType($1, 'NUMBER');
     // verifyType($3, 'NUMBER');
     $$ = { types: [ 'NUMBER' ] };
   }
 | ValueExpression 'ARITHMETIC_OPERATOR' ValueExpression
   {
     // verifyType($1, 'NUMBER');
     // verifyType($3, 'NUMBER');
     $$ = { types: [ 'NUMBER' ] };
   }
 ;

ValueExpression_EDIT
 : 'CURSOR' '*' ValueExpression
   {
     parser.valueExpressionSuggest(undefined, $2);
     parser.applyTypeToSuggestions([ 'NUMBER' ]);
     $$ = { types: [ 'NUMBER' ], typeSet: true };
   }
 | 'CURSOR' 'ARITHMETIC_OPERATOR' ValueExpression
   {
     parser.valueExpressionSuggest(undefined, $2);
     parser.applyTypeToSuggestions([ 'NUMBER' ]);
     $$ = { types: [ 'NUMBER' ], typeSet: true };
   }
 | ValueExpression_EDIT '-' ValueExpression
   {
     if (!$1.typeSet) {
       parser.applyTypeToSuggestions(['NUMBER']);
       parser.addColRefIfExists($3);
     }
     $$ = { types: [ 'NUMBER' ], suggestFilters: $1.suggestFilters }
   }
 | ValueExpression_EDIT '*' ValueExpression
   {
     if (!$1.typeSet) {
       parser.applyTypeToSuggestions(['NUMBER']);
       parser.addColRefIfExists($3);
     }
     $$ = { types: [ 'NUMBER' ], suggestFilters: $1.suggestFilters }
   }
 | ValueExpression_EDIT 'ARITHMETIC_OPERATOR' ValueExpression
   {
     if (!$1.typeSet) {
       parser.applyTypeToSuggestions(['NUMBER']);
       parser.addColRefIfExists($3);
     }
     $$ = { types: [ 'NUMBER' ], suggestFilters: $1.suggestFilters }
   }
 | ValueExpression '-' PartialBacktickedOrAnyCursor
   {
     parser.valueExpressionSuggest(undefined, $2);
     parser.applyTypeToSuggestions(['NUMBER']);
     $$ = { types: [ 'NUMBER' ], typeSet: true };
   }
 | ValueExpression '*' PartialBacktickedOrAnyCursor
   {
     parser.valueExpressionSuggest(undefined, $2);
     parser.applyTypeToSuggestions(['NUMBER']);
     $$ = { types: [ 'NUMBER' ], typeSet: true };
   }
 | ValueExpression 'ARITHMETIC_OPERATOR' PartialBacktickedOrAnyCursor
   {
     parser.valueExpressionSuggest(undefined, $2);
     parser.applyTypeToSuggestions(['NUMBER']);
     $$ = { types: [ 'NUMBER' ], typeSet: true };
   }
 | ValueExpression '-' ValueExpression_EDIT
   {
     if (!$3.typeSet) {
       parser.applyTypeToSuggestions(['NUMBER']);
       parser.addColRefIfExists($1);
     }
     $$ = { types: [ 'NUMBER' ], suggestFilters: $3.suggestFilters };
   }
 | ValueExpression '*' ValueExpression_EDIT
   {
     if (!$3.typeSet) {
       parser.applyTypeToSuggestions(['NUMBER']);
       parser.addColRefIfExists($1);
     }
     $$ = { types: [ 'NUMBER' ], suggestFilters: $3.suggestFilters };
   }
 | ValueExpression 'ARITHMETIC_OPERATOR' ValueExpression_EDIT
   {
     if (!$3.typeSet) {
       parser.applyTypeToSuggestions(['NUMBER']);
       parser.addColRefIfExists($1);
     }
     $$ = { types: [ 'NUMBER' ], suggestFilters: $3.suggestFilters };
   }
 ;

// ------------------  LIKE, RLIKE and REGEXP ------------------

ValueExpression
 : ValueExpression LikeRightPart          -> { types: [ 'BOOLEAN' ] }
 | ValueExpression 'NOT' LikeRightPart    -> { types: [ 'BOOLEAN' ] }
 ;

LikeRightPart
 : 'LIKE' ValueExpression             -> { suggestKeywords: ['NOT'] }
 | '<impala>ILIKE' ValueExpression    -> { suggestKeywords: ['NOT'] }
 | '<impala>IREGEXP' ValueExpression  -> { suggestKeywords: ['NOT'] }
 | 'RLIKE' ValueExpression            -> { suggestKeywords: ['NOT'] }
 | 'REGEXP' ValueExpression           -> { suggestKeywords: ['NOT'] }
 ;

LikeRightPart_EDIT
 : 'LIKE' ValueExpression_EDIT
 | '<impala>ILIKE' ValueExpression_EDIT
 | '<impala>IREGEXP' ValueExpression_EDIT
 | 'RLIKE' ValueExpression_EDIT
 | 'REGEXP' ValueExpression_EDIT
 | 'LIKE' PartialBacktickedOrCursor
   {
     parser.suggestFunctions({ types: [ 'STRING' ] });
     parser.suggestColumns({ types: [ 'STRING' ] });
     $$ = { types: ['BOOLEAN'] }
   }
 | '<impala>ILIKE' PartialBacktickedOrCursor
   {
     parser.suggestFunctions({ types: [ 'STRING' ] });
     parser.suggestColumns({ types: [ 'STRING' ] });
     $$ = { types: ['BOOLEAN'] }
   }
 | '<impala>IREGEXP' PartialBacktickedOrCursor
   {
     parser.suggestFunctions({ types: [ 'STRING' ] });
     parser.suggestColumns({ types: [ 'STRING' ] });
     $$ = { types: ['BOOLEAN'] }
   }
 | 'RLIKE' PartialBacktickedOrCursor
   {
     parser.suggestFunctions({ types: [ 'STRING' ] });
     parser.suggestColumns({ types: [ 'STRING' ] });
     $$ = { types: ['BOOLEAN'] }
   }
 | 'REGEXP' PartialBacktickedOrCursor
   {
     parser.suggestFunctions({ types: [ 'STRING' ] });
     parser.suggestColumns({ types: [ 'STRING' ] });
     $$ = { types: ['BOOLEAN'] }
   }
 ;

ValueExpression_EDIT
 : ValueExpression_EDIT LikeRightPart               -> { types: [ 'BOOLEAN' ], suggestFilters: $1.suggestFilters }
 | ValueExpression_EDIT 'NOT' LikeRightPart         -> { types: [ 'BOOLEAN' ], suggestFilters: $1.suggestFilters }
 | ValueExpression LikeRightPart_EDIT               -> { types: [ 'BOOLEAN' ] }
 | ValueExpression 'NOT' LikeRightPart_EDIT         -> { types: [ 'BOOLEAN' ] }
 | 'CURSOR' LikeRightPart
   {
     parser.valueExpressionSuggest(undefined, $2);
     parser.applyTypeToSuggestions([ 'STRING' ]);
     $$ = { types: [ 'BOOLEAN' ], typeSet: true };
   }
 | 'CURSOR' 'NOT' LikeRightPart
   {
     parser.valueExpressionSuggest(undefined, $2 + ' ' + $3);
     parser.applyTypeToSuggestions([ 'STRING' ]);
     $$ = { types: [ 'BOOLEAN' ], typeSet: true };
   }
 ;

// ------------------  CASE, WHEN, THEN ------------------

ValueExpression
 : 'CASE' CaseRightPart                  -> $2
 | 'CASE' ValueExpression CaseRightPart  -> $3
 ;

ValueExpression_EDIT
 : 'CASE' CaseRightPart_EDIT                         -> $2
 | 'CASE' 'CURSOR' EndOrError
   {
     parser.valueExpressionSuggest();
     parser.suggestKeywords(['WHEN']);
     $$ = { types: [ 'T' ], typeSet: true };
   }
 | 'CASE' ValueExpression CaseRightPart_EDIT         -> $3
 | 'CASE' ValueExpression 'CURSOR' EndOrError
   {
     parser.suggestValueExpressionKeywords($2, ['WHEN']);
     $$ = { types: [ 'T' ], typeSet: true };
   }
 | 'CASE' ValueExpression_EDIT CaseRightPart
    {
      $$ = $3;
      $$.suggestFilters = $2.suggestFilters;
    }
 | 'CASE' ValueExpression_EDIT EndOrError            -> { types: [ 'T' ], suggestFilters: $2.suggestFilters }
 | 'CASE' 'CURSOR' CaseRightPart                     -> { types: [ 'T' ] }
 ;

CaseRightPart
 : CaseWhenThenList 'END'                         -> parser.findCaseType($1)
 | CaseWhenThenList 'ELSE' ValueExpression 'END'
   {
     $1.caseTypes.push($3);
     $$ = parser.findCaseType($1);
   }
 ;

CaseRightPart_EDIT
 : CaseWhenThenList_EDIT EndOrError                            -> parser.findCaseType($1)
 | CaseWhenThenList 'ELSE' ValueExpression 'CURSOR'
   {
     parser.suggestValueExpressionKeywords($3, ['END']);
     $1.caseTypes.push($3);
     $$ = parser.findCaseType($1);
   }
 | CaseWhenThenList_EDIT 'ELSE' ValueExpression EndOrError
   {
     $1.caseTypes.push($3);
     $$ = parser.findCaseType($1);
   }
 | CaseWhenThenList_EDIT 'ELSE' EndOrError                      -> parser.findCaseType($1)
 | CaseWhenThenList 'CURSOR' ValueExpression EndOrError
   {
     if ($4.toLowerCase() !== 'end') {
       parser.suggestValueExpressionKeywords($1, [{ value: 'END', weight: 3 }, { value: 'ELSE', weight: 2 }, { value: 'WHEN', weight: 1 }]);
     } else {
       parser.suggestValueExpressionKeywords($1, [{ value: 'ELSE', weight: 2 }, { value: 'WHEN', weight: 1 }]);
     }
     $$ = parser.findCaseType($1);
   }
 | CaseWhenThenList 'CURSOR' EndOrError
   {
     if ($3.toLowerCase() !== 'end') {
       parser.suggestValueExpressionKeywords($1, [{ value: 'END', weight: 3 }, { value: 'ELSE', weight: 2 }, { value: 'WHEN', weight: 1 }]);
     } else {
       parser.suggestValueExpressionKeywords($1, [{ value: 'ELSE', weight: 2 }, { value: 'WHEN', weight: 1 }]);
     }
     $$ = parser.findCaseType($1);
   }
 | CaseWhenThenList 'ELSE' ValueExpression_EDIT EndOrError
   {
     $1.caseTypes.push($3);
     $$ = parser.findCaseType($1);
     $$.suggestFilters = $3.suggestFilters
   }
 | CaseWhenThenList 'ELSE' 'CURSOR' EndOrError
   {
     parser.valueExpressionSuggest();
     $$ = parser.findCaseType($1);
   }
 | 'ELSE' 'CURSOR' EndOrError
   {
     parser.valueExpressionSuggest();
     $$ = { types: [ 'T' ], typeSet: true };
   }
 | 'CURSOR' 'ELSE' ValueExpression EndOrError
   {
     parser.valueExpressionSuggest();
     parser.suggestKeywords(['WHEN']);
     $$ = $3;
   }
 | 'CURSOR' 'ELSE' EndOrError
   {
     parser.valueExpressionSuggest();
     parser.suggestKeywords(['WHEN']);
     $$ = { types: [ 'T' ] };
   }
 ;

EndOrError
 : 'END'
 | error
 ;

CaseWhenThenList
 : CaseWhenThenListPartTwo                   -> { caseTypes: [ $1 ], lastType: $1 }
 | CaseWhenThenList CaseWhenThenListPartTwo
   {
     $1.caseTypes.push($2);
     $$ = { caseTypes: $1.caseTypes, lastType: $2 };
   }
 ;

CaseWhenThenList_EDIT
 : CaseWhenThenListPartTwo_EDIT
 | CaseWhenThenList CaseWhenThenListPartTwo_EDIT
 | CaseWhenThenList CaseWhenThenListPartTwo_EDIT CaseWhenThenList
 | CaseWhenThenList 'CURSOR' CaseWhenThenList
   {
     parser.suggestValueExpressionKeywords($1, ['WHEN']);
   }
 | CaseWhenThenListPartTwo_EDIT CaseWhenThenList                   -> $2
 ;

CaseWhenThenListPartTwo
 : 'WHEN' ValueExpression 'THEN' ValueExpression  -> $4
 ;

CaseWhenThenListPartTwo_EDIT
 : 'WHEN' ValueExpression_EDIT                         -> { caseTypes: [{ types: ['T'] }], suggestFilters: $2.suggestFilters }
 | 'WHEN' ValueExpression_EDIT 'THEN'                  -> { caseTypes: [{ types: ['T'] }], suggestFilters: $2.suggestFilters }
 | 'WHEN' ValueExpression_EDIT 'THEN' ValueExpression  -> { caseTypes: [$4], suggestFilters: $2.suggestFilters }
 | 'WHEN' ValueExpression 'THEN' ValueExpression_EDIT  -> { caseTypes: [$4], suggestFilters: $4.suggestFilters }
 | 'WHEN' 'THEN' ValueExpression_EDIT                  -> { caseTypes: [$3], suggestFilters: $3.suggestFilters }
 | 'CURSOR' ValueExpression 'THEN'
   {
     parser.suggestKeywords(['WHEN']);
     $$ = { caseTypes: [{ types: ['T'] }] };
   }
 | 'CURSOR' ValueExpression 'THEN' ValueExpression
   {
     parser.suggestKeywords(['WHEN']);
     $$ = { caseTypes: [$4] };
   }
 | 'CURSOR' 'THEN'
   {
     parser.valueExpressionSuggest();
     parser.suggestKeywords(['WHEN']);
     $$ = { caseTypes: [{ types: ['T'] }] };
   }
 | 'CURSOR' 'THEN' ValueExpression
    {
      parser.valueExpressionSuggest();
      parser.suggestKeywords(['WHEN']);
      $$ = { caseTypes: [{ types: ['T'] }] };
    }
 | 'WHEN' 'CURSOR'
   {
     parser.valueExpressionSuggest();
     $$ = { caseTypes: [{ types: ['T'] }], suggestFilters: true };
   }
 | 'WHEN' 'CURSOR' ValueExpression
   {
     parser.valueExpressionSuggest();
     parser.suggestKeywords(['THEN']);
     $$ = { caseTypes: [{ types: ['T'] }], suggestFilters: true };
   }
 | 'WHEN' 'CURSOR' 'THEN'
   {
     parser.valueExpressionSuggest();
     $$ = { caseTypes: [{ types: ['T'] }], suggestFilters: true };
   }
 | 'WHEN' 'CURSOR' 'THEN' ValueExpression
   {
     parser.valueExpressionSuggest();
     $$ = { caseTypes: [$4], suggestFilters: true };
   }
 | 'WHEN' ValueExpression 'CURSOR'
   {
     parser.suggestValueExpressionKeywords($2, ['THEN']);
     $$ = { caseTypes: [{ types: ['T'] }] };
   }
 | 'WHEN' ValueExpression 'CURSOR' ValueExpression
   {
     parser.suggestValueExpressionKeywords($2, ['THEN']);
     $$ = { caseTypes: [{ types: ['T'] }] };
   }
 | 'WHEN' ValueExpression 'THEN' 'CURSOR'
   {
     parser.valueExpressionSuggest();
     $$ = { caseTypes: [{ types: ['T'] }] };
   }
 | 'WHEN' ValueExpression 'THEN' 'CURSOR' ValueExpression
   {
     parser.valueExpressionSuggest();
     $$ = { caseTypes: [{ types: ['T'] }] };
   }
 | 'WHEN' 'THEN' 'CURSOR' ValueExpression
   {
     parser.valueExpressionSuggest();
     $$ = { caseTypes: [{ types: ['T'] }] };
   }
 | 'WHEN' 'THEN' 'CURSOR'
   {
     parser.valueExpressionSuggest();
     $$ = { caseTypes: [{ types: ['T'] }] };
   }
 ;// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

DataDefinition
 : AlterStatement
 ;

DataDefinition_EDIT
 : AlterStatement_EDIT
 ;

AlterStatement
 : AlterDatabase
 | AlterIndex
 | AlterTable
 | AlterView
 | Msck
 | ReloadFunction
 | CommentOn
 ;

AlterStatement_EDIT
 : AlterDatabase_EDIT
 | AlterIndex_EDIT
 | AlterTable_EDIT
 | AlterView_EDIT
 | Msck_EDIT
 | ReloadFunction_EDIT
 | CommentOn_EDIT
 | 'ALTER' 'CURSOR'
   {
     if (parser.isHive()) {
       parser.suggestKeywords(['DATABASE', 'INDEX', 'SCHEMA', 'TABLE', 'VIEW']);
     } else {
       parser.suggestKeywords(['TABLE', 'VIEW']);
     }
   }
 ;

AlterDatabase
 : 'ALTER' DatabaseOrSchema RegularOrBacktickedIdentifier 'SET' '<hive>DBPROPERTIES' ParenthesizedPropertyAssignmentList
    {
      parser.addDatabaseLocation(@3, [ { name: $3 } ]);
    }
 | 'ALTER' DatabaseOrSchema RegularOrBacktickedIdentifier 'SET' HdfsLocation
    {
      parser.addDatabaseLocation(@3, [ { name: $3 } ]);
    }
 | 'ALTER' DatabaseOrSchema RegularOrBacktickedIdentifier 'SET' '<hive>OWNER' PrincipalSpecification
    {
      parser.addDatabaseLocation(@3, [ { name: $3 } ]);
    }
 ;

AlterDatabase_EDIT
 : 'ALTER' DatabaseOrSchema 'CURSOR'
   {
     if (parser.isHive()) {
       parser.suggestDatabases();
     }
   }
 | 'ALTER' DatabaseOrSchema RegularOrBacktickedIdentifier 'CURSOR'
   {
     parser.addDatabaseLocation(@3, [ { name: $3 } ]);
     if (parser.isHive()) {
       parser.suggestKeywords(['SET DBPROPERTIES', 'SET LOCATION', 'SET OWNER']);
     }
   }
 | 'ALTER' DatabaseOrSchema RegularOrBacktickedIdentifier 'SET' 'CURSOR'
    {
      parser.addDatabaseLocation(@3, [ { name: $3 } ]);
      if (parser.isHive()) {
        parser.suggestKeywords(['DBPROPERTIES', 'LOCATION', 'OWNER']);
      }
    }
 | 'ALTER' DatabaseOrSchema RegularOrBacktickedIdentifier 'SET' HdfsLocation_EDIT
   {
     parser.addDatabaseLocation(@3, [ { name: $3 } ]);
   }
 | 'ALTER' DatabaseOrSchema RegularOrBacktickedIdentifier 'SET' '<hive>OWNER' 'CURSOR'
   {
     parser.addDatabaseLocation(@3, [ { name: $3 } ]);
     parser.suggestKeywords(['GROUP', 'ROLE', 'USER']);
   }
 | 'ALTER' DatabaseOrSchema RegularOrBacktickedIdentifier 'SET' '<hive>OWNER' PrincipalSpecification_EDIT
   {
     parser.addDatabaseLocation(@3, [ { name: $3 } ]);
   }
 ;

AlterIndex
 : 'ALTER' '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' SchemaQualifiedTableIdentifier OptionalPartitionSpec '<hive>REBUILD'
   {
     parser.addTablePrimary($5);
   }
 ;

AlterIndex_EDIT
 : 'ALTER' '<hive>INDEX' RegularOrBacktickedIdentifier 'CURSOR'
   {
     parser.suggestKeywords(['ON']);
   }
 | 'ALTER' '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | 'ALTER' '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' SchemaQualifiedTableIdentifier_EDIT
 | 'ALTER' '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' SchemaQualifiedTableIdentifier OptionalPartitionSpec_EDIT
   {
     parser.addTablePrimary($5);
   }
 | 'ALTER' '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' SchemaQualifiedTableIdentifier OptionalPartitionSpec 'CURSOR'
   {
     parser.addTablePrimary($5);
     if (!$6) {
       parser.suggestKeywords(['PARTITION', 'REBUILD']);
     } else {
       parser.suggestKeywords(['REBUILD']);
     }
   }
 ;

AlterTable
 : AlterTableLeftSide AnyAdd OptionalIfNotExists PartitionSpec OptionalHdfsLocation OptionalPartitionSpecs OptionalCachedInOrUncached
 | AlterTableLeftSide AnyAdd OptionalIfNotExists '<impala>RANGE' 'PARTITION' RangePartitionSpec
 | AlterTableLeftSide AnyAdd OptionalIfNotExists '<impala>RANGE' '<impala>PARTITION_VALUE' '=' UnsignedValueSpecification
 | AlterTableLeftSide AnyAdd '<hive>CONSTRAINT' RegularOrBacktickedIdentifier HivePrimaryKeySpecification
 | AlterTableLeftSide AnyAdd '<hive>CONSTRAINT' RegularOrBacktickedIdentifier HiveForeignKeySpecification
 | AlterTableLeftSide AnyRename 'TO' RegularOrBackTickedSchemaQualifiedName
 | AlterTableLeftSide HiveSpecificOperations
 | AlterTableLeftSide ImpalaSpecificOperations
 | AlterTableLeftSide DropOperations
 | AlterTableLeftSide OptionalPartitionOperations
 | AlterTableLeftSide PartitionSpec OptionalPartitionOperations
 | AlterTableLeftSide '<impala>RECOVER' '<impala>PARTITIONS'
 ;

AlterTable_EDIT
 : AlterTableLeftSide_EDIT
 | AlterTableLeftSide_EDIT AnyAdd OptionalIfNotExists PartitionSpec OptionalHdfsLocation OptionalPartitionSpecs OptionalCachedInOrUncached
 | AlterTableLeftSide_EDIT AnyRename 'TO' RegularOrBackTickedSchemaQualifiedName
 | AlterTableLeftSide_EDIT HiveSpecificOperations
 | AlterTableLeftSide_EDIT ImpalaSpecificOperations
 | AlterTableLeftSide_EDIT DropOperations
 | AlterTableLeftSide_EDIT OptionalPartitionOperations
 | AlterTableLeftSide_EDIT PartitionSpec OptionalPartitionOperations
 | AlterTableLeftSide AnyAdd OptionalIfNotExists 'CURSOR'
   {
     if (!$3 && parser.isImpala()) {
       parser.suggestKeywords([{ value: 'IF NOT EXISTS', weight: 4 }, { value: 'COLUMNS', weight: 3 }, { value: 'PARTITION', weight: 2 }, { value: 'RANGE PARTITION', weight: 1 }]);
     } else if (!$3 && parser.isHive()) {
       parser.suggestKeywords([{ value: 'IF NOT EXISTS', weight: 3 }, { value: 'COLUMNS', weight: 2 }, { value: 'CONSTRAINT', weight: 1 }, {  value: 'PARTITION', weight: 1 }]);
     } else if (parser.isImpala()) {
       parser.suggestKeywords([{ value: 'PARTITION', weight: 2 }, { value: 'RANGE PARTITION', weight: 1 }]);
     } else if (parser.isHive()) {
       parser.suggestKeywords(['PARTITION']);
     }
   }
 | AlterTableLeftSide AnyReplace 'CURSOR'
   {
     parser.suggestKeywords(['COLUMNS']);
   }
 | AlterTableLeftSide AnyAdd OptionalIfNotExists_EDIT
 | AlterTableLeftSide AnyAdd OptionalIfNotExists PartitionSpec HdfsLocation_EDIT OptionalPartitionSpecs OptionalCachedInOrUncached
 | AlterTableLeftSide AnyAdd OptionalIfNotExists PartitionSpec OptionalHdfsLocation OptionalPartitionSpecs_EDIT OptionalCachedInOrUncached
 | AlterTableLeftSide AnyAdd OptionalIfNotExists PartitionSpec OptionalHdfsLocation OptionalPartitionSpecs CachedIn_EDIT
 | AlterTableLeftSide AnyAdd OptionalIfNotExists PartitionSpec OptionalHdfsLocation OptionalPartitionSpecs OptionalCachedInOrUncached 'CURSOR'
   {
     if (parser.isHive()) {
       if (!$5 && !$6 && !$7) {
         parser.suggestKeywords(['LOCATION', 'PARTITION']);
       } else if ($6 && $6.suggestKeywords) {
         var keywords = parser.createWeightedKeywords($6.suggestKeywords, 2);
         keywords.push({ value: 'PARTITION', weight: 1 });
         parser.suggestKeywords(keywords);
       } else {
         parser.suggestKeywords(['PARTITION']);
       }
     } else if (parser.isImpala()) {
       if (!$5 && !$6 && !$7) {
         parser.suggestKeywords(['LOCATION', 'CACHED IN', 'UNCACHED']);
       } else if (!$7) {
         parser.suggestKeywords(['CACHED IN', 'UNCACHED']);
       } else if ($7 && $7.suggestKeywords) {
         parser.suggestKeywords($7.suggestKeywords);
       }
     }
   }
 | AlterTableLeftSide AnyAdd OptionalIfNotExists PartitionSpec_EDIT OptionalHdfsLocation OptionalPartitionSpecs OptionalCachedIn
 | AlterTableLeftSide AnyAdd OptionalIfNotExists '<impala>RANGE' 'CURSOR'
   {
     parser.suggestKeywords(['PARTITION']);
   }
 | AlterTableLeftSide AnyAdd OptionalIfNotExists '<impala>RANGE' 'PARTITION' 'CURSOR'
   {
     parser.suggestKeywords(['VALUE']);
   }
 | AlterTableLeftSide AnyAdd OptionalIfNotExists '<impala>RANGE' '<impala>PARTITION_VALUE' 'CURSOR'
   {
     parser.suggestKeywords(['=']);
   }
 | AlterTableLeftSide AnyAdd OptionalIfNotExists '<impala>RANGE' 'PARTITION' RangePartitionSpec_EDIT
 | AlterTableLeftSide AnyAdd '<hive>CONSTRAINT' 'CURSOR'
 | AlterTableLeftSide AnyAdd '<hive>CONSTRAINT' RegularOrBacktickedIdentifier 'CURSOR'
   {
     parser.suggestKeywords(['FOREIGN KEY', 'PRIMARY KEY']);
   }
 | AlterTableLeftSide AnyAdd '<hive>CONSTRAINT' RegularOrBacktickedIdentifier HivePrimaryKeySpecification_EDIT
 | AlterTableLeftSide AnyAdd '<hive>CONSTRAINT' RegularOrBacktickedIdentifier HiveForeignKeySpecification_EDIT
 | AlterTableLeftSide HiveSpecificOperations_EDIT
 | AlterTableLeftSide ImpalaSpecificOperations_EDIT
 | AlterTableLeftSide OptionalPartitionOperations_EDIT
 | AlterTableLeftSide DropOperations_EDIT
 | AlterTableLeftSide 'CURSOR'
   {
     if (parser.isHive()) {
       parser.suggestKeywords(['ADD COLUMNS', 'ADD IF NOT EXISTS', 'ADD PARTITION', 'ARCHIVE PARTITION', 'CHANGE',
         'CLUSTERED BY', 'CONCATENATE', 'COMPACT', 'DISABLE NO_DROP', 'DISABLE OFFLINE', 'DROP', 'ENABLE NO_DROP',
         'ENABLE OFFLINE', 'EXCHANGE PARTITION', 'NOT SKEWED', 'NOT STORED AS DIRECTORIES', 'PARTITION',
         'RECOVER PARTITIONS', 'RENAME TO', 'REPLACE COLUMNS', 'SET FILEFORMAT', 'SET LOCATION', 'SET OWNER', 'SET SERDE',
         'SET SERDEPROPERTIES', 'SET SKEWED LOCATION', 'SET TBLPROPERTIES', 'SKEWED BY', 'TOUCH', 'UNARCHIVE PARTITION']);
     } else if (parser.isImpala()) {
       parser.suggestKeywords(['ADD COLUMNS', 'ADD PARTITION', 'ADD RANGE PARTITION', 'ALTER', 'ALTER COLUMN', 'CHANGE',
         'DROP COLUMN', 'DROP PARTITION', 'DROP RANGE PARTITION', 'PARTITION', 'RECOVER PARTITIONS', 'RENAME TO',
         'REPLACE COLUMNS', 'SET CACHED IN', 'SET COLUMN STATS', 'SET FILEFORMAT', 'SET LOCATION', 'SET ROW FORMAT',
         'SET SERDEPROPERTIES', 'SET TBLPROPERTIES', 'SET UNCACHED']);
     }
   }
 | AlterTableLeftSide PartitionSpec 'CURSOR'
   {
     if (parser.isHive()) {
       parser.suggestKeywords(['ADD COLUMNS', 'CHANGE', 'COMPACT', 'CONCATENATE', 'DISABLE NO_DROP', 'DISABLE OFFLINE',
         'ENABLE NO_DROP', 'ENABLE OFFLINE', 'RENAME TO PARTITION', 'REPLACE COLUMNS', 'SET FILEFORMAT', 'SET LOCATION',
         'SET SERDE', 'SET SERDEPROPERTIES']);
     } else if (parser.isImpala()) {
       parser.suggestKeywords(['SET CACHED IN', 'SET FILEFORMAT', 'SET LOCATION', 'SET ROW FORMAT',
       'SET SERDEPROPERTIES', 'SET TBLPROPERTIES', 'SET UNCACHED']);
     }
   }
 | AlterTableLeftSide PartitionSpec AddOrReplace 'CURSOR'
   {
     parser.suggestKeywords(['COLUMNS']);
   }
 | AlterTableLeftSide PartitionSpec 'SET' 'CURSOR'
   {
     if (parser.isHive()) {
       parser.suggestKeywords(['FILEFORMAT', 'LOCATION', 'SERDE', 'SERDEPROPERTIES']);
     } else if (parser.isImpala()) {
       parser.suggestKeywords(['CACHED IN', 'FILEFORMAT', 'LOCATION', 'ROW FORMAT', 'SERDEPROPERTIES','TBLPROPERTIES', 'UNCACHED']);
     }
   }
 | AlterTableLeftSide 'SET' 'CURSOR'
   {
     if (parser.isHive()) {
       parser.suggestKeywords(['FILEFORMAT', 'LOCATION', 'OWNER', 'SERDE', 'SERDEPROPERTIES', 'SKEWED LOCATION', 'TBLPROPERTIES']);
     } else if (parser.isImpala()) {
       parser.suggestKeywords(['CACHED IN', 'COLUMN STATS', 'FILEFORMAT', 'LOCATION', 'ROW FORMAT', 'SERDEPROPERTIES', 'TBLPROPERTIES', 'UNCACHED']);
     }
   }
 | AlterTableLeftSide PartitionSpec OptionalPartitionOperations_EDIT
 | AlterTableLeftSide AnyRename 'CURSOR'
   {
     parser.suggestKeywords(['TO']);
   }
 | AlterTableLeftSide AnyRename 'TO' 'CURSOR'
   {
     parser.suggestDatabases({ appendDot: true });
   }
 | AlterTableLeftSide '<impala>RECOVER' 'CURSOR'
   {
     parser.suggestKeywords(['PARTITIONS']);
   }
 ;

HiveSpecificOperations
 : ClusteredBy
 | '<hive>SKEWED' 'BY' ParenthesizedColumnList 'ON' ParenthesizedSkewedValueList OptionalStoredAsDirectories
 | HiveExchange
 | '<hive>RECOVER' '<hive>PARTITIONS'
 | '<hive>TOUCH' OptionalPartitionSpec
 | HiveArchiveOrUnArchive PartitionSpec
 | 'NOT' '<hive>SKEWED'
 | 'NOT' '<hive>STORED_AS_DIRECTORIES'
 | 'SET' '<hive>SKEWED_LOCATION' ParenthesizedSkewedLocationList
 | 'SET' '<hive>OWNER' PrincipalSpecification
 | PartitionSpec '<hive>RENAME' 'TO' PartitionSpec
 | PartitionSpec AnyChange '<hive>COLUMN' ParenthesizedColumnSpecificationList OptionalHiveCascadeOrRestrict
 ;

HiveSpecificOperations_EDIT
 : HiveArchiveOrUnArchive 'CURSOR'
   {
     parser.suggestKeywords(['PARTITION']);
   }
 | HiveArchiveOrUnArchive PartitionSpec_EDIT
 | ClusteredBy_EDIT
 | HiveExchange_EDIT
 | 'NOT' 'CURSOR'
   {
     if (parser.isHive()) {
       parser.suggestKeywords(['SKEWED', 'STORED AS DIRECTORIES']);
     }
   }
 | 'NOT' '<hive>STORED' 'CURSOR'
   {
     parser.suggestKeywords(['AS DIRECTORIES']);
   }
 | 'NOT' '<hive>STORED' '<hive>AS' 'CURSOR'
   {
     parser.suggestKeywords(['DIRECTORIES']);
   }
 | PartitionSpec '<hive>RENAME' 'CURSOR'
   {
     parser.suggestKeywords(['TO PARTITION']);
   }
 | PartitionSpec '<hive>RENAME' 'TO' 'CURSOR'
   {
     parser.suggestKeywords(['PARTITION']);
   }
 | '<hive>RECOVER' 'CURSOR'
   {
     parser.suggestKeywords(['PARTITIONS']);
   }
 | 'SET' '<hive>SKEWED' 'CURSOR'
   {
     parser.suggestKeywords(['LOCATION']);
   }
 | 'SET' '<hive>SKEWED_LOCATION' ParenthesizedSkewedLocationList_EDIT
 | '<hive>SKEWED' 'CURSOR'
   {
     parser.suggestKeywords(['BY']);
   }
 | 'SET' '<hive>OWNER' 'CURSOR'
   {
     parser.suggestKeywords(['GROUP', 'ROLE', 'USER']);
   }
 | 'SET' '<hive>OWNER' PrincipalSpecification_EDIT
 | '<hive>SKEWED' 'BY' ParenthesizedColumnList_EDIT
 | '<hive>SKEWED' 'BY' ParenthesizedColumnList_EDIT 'ON' ParenthesizedSkewedValueList OptionalStoredAsDirectories
 | '<hive>SKEWED' 'BY' ParenthesizedColumnList 'CURSOR'
   {
     parser.suggestKeywords(['ON']);
   }
 | '<hive>SKEWED' 'BY' ParenthesizedColumnList 'ON' ParenthesizedSkewedValueList OptionalStoredAsDirectories 'CURSOR'
   {
     if (!$6) {
       parser.suggestKeywords(['STORED AS DIRECTORIES']);
     }
   }
 | '<hive>SKEWED' 'BY' ParenthesizedColumnList 'ON' ParenthesizedSkewedValueList OptionalStoredAsDirectories_EDIT
 | '<hive>TOUCH' 'CURSOR'
   {
     parser.suggestKeywords(['PARTITION']);
   }
 | '<hive>TOUCH' OptionalPartitionSpec_EDIT
 ;

ImpalaSpecificOperations
 : 'ALTER' OptionalImpalaColumn ColumnIdentifier 'SET' KuduStorageAttribute SetValue
   {
     parser.addColumnLocation($3.location, [ $3.identifier ]);
   }
 | 'ALTER' OptionalImpalaColumn ColumnIdentifier 'DROP' '<impala>DEFAULT'
   {
     parser.addColumnLocation($3.location, [ $3.identifier ]);
   }
 | 'SET' '<impala>COLUMN' '<impala>STATS' ColumnIdentifier ParenthesizedStatsList
   {
     parser.addColumnLocation($4.location, [ $4.identifier ]);
   }
 ;

ImpalaSpecificOperations_EDIT
 : 'ALTER' OptionalImpalaColumn 'CURSOR'
   {
     if (parser.isImpala()) {
       if (!$2) {
         parser.suggestKeywords(['COLUMN']);
       }
       parser.suggestColumns();
     }
   }
 | 'ALTER' OptionalImpalaColumn ColumnIdentifier 'CURSOR'
   {
     if (parser.isImpala()) {
       parser.suggestKeywords(['DROP DEFAULT', 'SET BLOCK_SIZE', 'SET COMMENT', 'SET COMPRESSION', 'SET DEFAULT',
         'SET ENCODING']);
        parser.addColumnLocation($3.location, [ $3.identifier ]);
     }
   }
 | 'ALTER' OptionalImpalaColumn ColumnIdentifier 'DROP' 'CURSOR'
   {
     if (parser.isImpala()) {
       parser.suggestKeywords(['DEFAULT']);
       parser.addColumnLocation($3.location, [ $3.identifier ]);
     }
   }
 | 'ALTER' OptionalImpalaColumn ColumnIdentifier 'SET' 'CURSOR'
   {
     if (parser.isImpala()) {
       parser.suggestKeywords(['BLOCK_SIZE', 'COMMENT', 'COMPRESSION', 'DEFAULT', 'ENCODING']);
       parser.addColumnLocation($3.location, [ $3.identifier ]);
     }
   }
 | 'ALTER' OptionalImpalaColumn ColumnIdentifier 'SET' KuduStorageAttribute 'CURSOR'
   {
     parser.addColumnLocation($3.location, [ $3.identifier ]);
   }
 | 'SET' '<impala>COLUMN' 'CURSOR'
   {
     parser.suggestKeywords(['STATS']);
   }
 | 'SET' '<impala>COLUMN' '<impala>STATS' 'CURSOR'
   {
     parser.suggestColumns();
   }
 | 'SET' '<impala>COLUMN' '<impala>STATS' ColumnIdentifier 'CURSOR'
   {
     parser.addColumnLocation($4.location, [ $4.identifier ]);
   }
 | 'SET' '<impala>COLUMN' '<impala>STATS' ColumnIdentifier ParenthesizedStatsList_EDIT
   {
     parser.addColumnLocation($4.location, [ $4.identifier ]);
   }
 ;

KuduStorageAttribute
 : '<impala>BLOCK_SIZE'
 | '<impala>COMMENT'
 | '<impala>COMPRESSION'
 | '<impala>DEFAULT'
 | '<impala>ENCODING'
 ;

OptionalImpalaColumn
 :
 | '<impala>COLUMN'
 ;

ParenthesizedStatsList
 : '(' StatsList ')'
 ;

ParenthesizedStatsList_EDIT
 : '(' StatsList_EDIT RightParenthesisOrError
 ;

StatsList
 : StatsAssignment
 | StatsList ',' StatsAssignment
 ;

StatsList_EDIT
 : StatsAssignment_EDIT
 | StatsList ',' StatsAssignment_EDIT
 | StatsList ',' StatsAssignment_EDIT ',' StatsList
 | StatsAssignment_EDIT ',' StatsList
 ;

StatsAssignment
 : QuotedValue '=' QuotedValue
 ;

StatsAssignment_EDIT
 : 'CURSOR'
   {
     parser.suggestIdentifiers(['\'avgSize\'', '\'maxSize\'', '\'numDVs\'', '\'numNulls\'']);
   }
 ;

OptionalPartitionOperations
 : 'SET' AnyFileFormat FileFormat
 | 'SET' HdfsLocation
 | 'SET' HiveOrImpalaTblproperties ParenthesizedPropertyAssignmentList
 | 'SET' '<hive>SERDE' QuotedValue OptionalWithSerdeproperties
 | 'SET' HiveOrImpalaSerdeproperties ParenthesizedPropertyAssignmentList
 | 'SET' CachedIn OptionalWithReplication
 | 'SET' 'ROW' '<impala>FORMAT' ImpalaRowFormat
 | 'SET' '<impala>UNCACHED'
 | AddReplaceColumns
 | '<hive>CONCATENATE'
 | '<hive>COMPACT' QuotedValue OptionalAndWait OptionalWithOverwriteTblProperties
 | HiveEnableOrDisable HiveNoDropOrOffline
 | AnyChange OptionalHiveColumn ColumnIdentifier ColumnSpecification OptionalHiveFirstOrAfter OptionalHiveCascadeOrRestrict
   {
     parser.addColumnLocation($3.location, [ $3.identifier ]);
   }
 ;

OptionalPartitionOperations_EDIT
 : AddReplaceColumns_EDIT
 | AnyChange OptionalHiveColumn 'CURSOR'
   {
     if (parser.isHive() && !$2) {
       parser.suggestKeywords(['COLUMN']);
     }
     parser.suggestColumns();
   }
 | AnyChange OptionalHiveColumn ColumnIdentifier ColumnSpecification_EDIT OptionalHiveFirstOrAfter OptionalHiveCascadeOrRestrict
   {
     parser.addColumnLocation($3.location, [ $3.identifier ]);
   }
 | AnyChange OptionalHiveColumn ColumnIdentifier ColumnSpecification OptionalHiveFirstOrAfter OptionalHiveCascadeOrRestrict 'CURSOR'
   {
     if (parser.isHive() && !$5 && !$6) {
       if ($4.suggestKeywords) {
         var keywords = parser.createWeightedKeywords($4.suggestKeywords, 3);
         keywords = keywords.concat([{ value: 'AFTER', weight: 2 }, { value: 'FIRST', weight: 2 }, { value: 'CASCADE', weight: 1 }, { value: 'RESTRICT', weight: 1 }]);
         parser.suggestKeywords(keywords);
       } else {
         parser.suggestKeywords([{ value: 'AFTER', weight: 2 }, { value: 'FIRST', weight: 2 }, { value: 'CASCADE', weight: 1 }, { value: 'RESTRICT', weight: 1 }]);
       }
     } else if (parser.isHive() && $5 && !$6) {
       parser.suggestKeywords(['CASCADE', 'RESTRICT']);
     }
     parser.addColumnLocation($3.location, [ $3.identifier ]);
   }
 | AnyChange OptionalHiveColumn ColumnIdentifier ColumnSpecification OptionalHiveFirstOrAfter_EDIT OptionalHiveCascadeOrRestrict
   {
     parser.addColumnLocation($3.location, [ $3.identifier ]);
   }
 | '<hive>COMPACT' QuotedValue OptionalAndWait OptionalWithOverwriteTblProperties 'CURSOR'
   {
     if (!$3 && !$4) {
       parser.suggestKeywords(['AND WAIT', 'WITH OVERWRITE TBLPROPERTIES']);
     } else if (!$4) {
       parser.suggestKeywords(['WITH OVERWRITE TBLPROPERTIES']);
     }
   }
 | '<hive>COMPACT' QuotedValue AndWait_EDIT OptionalWithOverwriteTblProperties
 | '<hive>COMPACT' QuotedValue OptionalAndWait WithOverwriteTblProperties_EDIT
 | HiveEnableOrDisable 'CURSOR'
   {
     parser.suggestKeywords(['NO_DROP', 'OFFLINE']);
   }
 | HiveEnableOrDisable HiveNoDropOrOffline_EDIT
 | 'SET' AnyFileFormat 'CURSOR'
   {
     parser.suggestFileFormats();
   }
 | 'SET' HdfsLocation_EDIT
 | 'SET' CachedIn_EDIT
 | 'SET' CachedIn OptionalWithReplication 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['WITH REPLICATION =']);
     }
   }
 | 'SET' CachedIn WithReplication_EDIT
 | 'SET' 'ROW' 'CURSOR'
   {
     if (parser.isImpala()) {
       parser.suggestKeywords(['FORMAT']);
     }
   }
 | 'SET' 'ROW' '<impala>FORMAT' 'CURSOR'
   {
     parser.suggestKeywords(['DELIMITED']);
   }
 | 'SET' 'ROW' '<impala>FORMAT' ImpalaRowFormat 'CURSOR'
   {
     if ($4.suggestKeywords) {
       parser.suggestKeywords($4.suggestKeywords);
     }
   }
 | 'SET' 'ROW' '<impala>FORMAT' ImpalaRowFormat_EDIT
 | 'SET' '<hive>SERDE' QuotedValue OptionalWithSerdeproperties 'CURSOR'
   {
     if (!$4) {
       parser.suggestKeywords(['WITH SERDEPROPERTIES']);
     }
   }
 | 'SET' '<hive>SERDE' QuotedValue WithSerdeproperties_EDIT
 ;

OptionalAndWait
 :
 | 'AND' '<hive>WAIT'
 ;

AndWait_EDIT
 : 'AND' 'CURSOR'
   {
     parser.suggestKeywords(['WAIT']);
   }
 ;

OptionalWithOverwriteTblProperties
 :
 | 'WITH' '<hive>OVERWRITE' '<hive>TBLPROPERTIES' ParenthesizedPropertyAssignmentList
 ;

WithOverwriteTblProperties_EDIT
 : 'WITH' 'CURSOR'
   {
     parser.suggestKeywords(['OVERWRITE TBLPROPERTIES']);
   }
 | 'WITH' '<hive>OVERWRITE' 'CURSOR'
   {
     parser.suggestKeywords(['TBLPROPERTIES']);
   }
 ;

AddReplaceColumns
 : AddOrReplace AnyColumns ParenthesizedColumnSpecificationList OptionalHiveCascadeOrRestrict
 ;

AddReplaceColumns_EDIT
 : AddOrReplace AnyColumns ParenthesizedColumnSpecificationList_EDIT OptionalHiveCascadeOrRestrict
 | AddOrReplace AnyColumns ParenthesizedColumnSpecificationList OptionalHiveCascadeOrRestrict 'CURSOR'
   {
     if (parser.isHive() && !$4) {
       parser.suggestKeywords(['CASCADE', 'RESTRICT']);
     }
   }
 ;

AnyColumns
 : '<hive>COLUMNS'
 | '<impala>COLUMNS'
 ;

HiveExchange
 : '<hive>EXCHANGE' ExchangePartitionSpec 'WITH' '<hive>TABLE' RegularOrBackTickedSchemaQualifiedName
 ;

HiveExchange_EDIT
 : '<hive>EXCHANGE' 'CURSOR'
   {
     parser.suggestKeywords(['PARTITION']);
   }
 | '<hive>EXCHANGE' ExchangePartitionSpec 'CURSOR'
   {
     parser.suggestKeywords(['WITH TABLE']);
   }
 | '<hive>EXCHANGE' ExchangePartitionSpec 'WITH' 'CURSOR'
   {
     parser.suggestKeywords(['TABLE']);
   }
 | '<hive>EXCHANGE' ExchangePartitionSpec 'WITH' '<hive>TABLE' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | '<hive>EXCHANGE' ExchangePartitionSpec 'WITH' '<hive>TABLE' RegularOrBackTickedSchemaQualifiedName_EDIT
 | '<hive>EXCHANGE' ExchangePartitionSpec_EDIT
 | '<hive>EXCHANGE' ExchangePartitionSpec_EDIT 'WITH' '<hive>TABLE' RegularOrBackTickedSchemaQualifiedName
 ;

ExchangePartitionSpec
 : 'PARTITION' '(' OneOrMorePartitionSpecLists ')'
 | 'PARTITION' '(' PartitionSpecList ')'
 ;

ExchangePartitionSpec_EDIT
 : 'PARTITION' '(' OneOrMorePartitionSpecLists_EDIT RightParenthesisOrError
 | 'PARTITION' '(' PartitionSpecList_EDIT RightParenthesisOrError
 ;

OneOrMorePartitionSpecLists
 : '(' PartitionSpecList ')'
 | OneOrMorePartitionSpecLists ',' '(' PartitionSpecList ')'
 ;

OneOrMorePartitionSpecLists_EDIT
 : '(' PartitionSpecList_EDIT RightParenthesisOrError
 | OneOrMorePartitionSpecLists ',' '(' PartitionSpecList_EDIT RightParenthesisOrError
 ;

DropOperations
 : 'DROP' OptionalIfExists OneOrMorePartitionSpecs OptionalHivePurge
 | 'DROP' '<hive>CONSTRAINT' RegularOrBacktickedIdentifier
 | 'DROP' OptionalIfExists '<impala>RANGE'
 | 'DROP' OptionalIfExists '<impala>RANGE' 'PARTITION' RangePartitionSpec
 | 'DROP' OptionalIfExists '<impala>RANGE' '<impala>PARTITION_VALUE' '=' UnsignedValueSpecification
 | 'DROP' '<impala>COLUMN' ColumnIdentifier
   {
     parser.addColumnLocation($3.location, [ $3.identifier ]);
   }
 ;

DropOperations_EDIT
 : 'DROP' OptionalIfExists 'CURSOR'
   {
     if (parser.isHive() && !$2) {
       parser.suggestKeywords([{ value: 'CONSTRAINT', weight: 1}, { value: 'PARTITION', weight: 1}, { value: 'IF EXISTS', weight: 2 }]);
     } else if (parser.isHive()) {
        parser.suggestKeywords(['PARTITION']);
     } else if (parser.isImpala() && !$2) {
       parser.suggestKeywords([{ value: 'COLUMN', weight: 1 }, { value: 'PARTITION', weight: 1 }, { value: 'RANGE PARTITION', weight: 1 }, { value: 'IF EXISTS', weight: 2 }]);
       parser.suggestColumns();
     } else if (parser.isImpala()) {
       parser.suggestKeywords(['PARTITION', 'RANGE PARTITION']);
     }
   }
 | 'DROP' OptionalIfExists OneOrMorePartitionSpecs_EDIT OptionalHivePurge
 | 'DROP' OptionalIfExists OneOrMorePartitionSpecs OptionalHivePurge 'CURSOR'
   {
     if (parser.isHive() && !$4) {
       parser.suggestKeywords(['PURGE']);
     }
   }
 | 'DROP' '<hive>CONSTRAINT' 'CURSOR'
 | 'DROP' OptionalIfExists_EDIT
 | 'DROP' OptionalIfExists '<impala>RANGE' 'CURSOR'
   {
     parser.suggestKeywords(['PARTITION']);
   }
 | 'DROP' OptionalIfExists '<impala>RANGE' 'PARTITION' 'CURSOR'
   {
     parser.suggestKeywords(['VALUE']);
   }
 | 'DROP' OptionalIfExists '<impala>RANGE' '<impala>PARTITION_VALUE' 'CURSOR'
   {
     parser.suggestKeywords(['=']);
   }
 | 'DROP' OptionalIfExists '<impala>RANGE' 'PARTITION' RangePartitionSpec_EDIT
 | 'DROP' ColumnIdentifier_EDIT
 | 'DROP' '<impala>COLUMN' 'CURSOR'
   {
     parser.suggestColumns();
   }
 | 'DROP' '<impala>COLUMN' ColumnIdentifier_EDIT
 ;

AlterTableLeftSide
 : 'ALTER' AnyTable SchemaQualifiedTableIdentifier
   {
     parser.addTablePrimary($3);
   }
 ;

AlterTableLeftSide_EDIT
 : 'ALTER' AnyTable SchemaQualifiedTableIdentifier_EDIT
   {
     if (parser.yy.result.suggestTables) {
       parser.yy.result.suggestTables.onlyTables = true;
     }
   }
 | 'ALTER' AnyTable 'CURSOR'
   {
     parser.suggestTables({ onlyTables: true });
     parser.suggestDatabases({ appendDot: true });
   }
 ;

AnyChange
 : '<hive>CHANGE'
 | '<impala>CHANGE'
 ;

AnyFileFormat
 : '<hive>FILEFORMAT'
 | '<impala>FILEFORMAT'
 ;

AnyAdd
 : '<hive>ADD'
 | '<impala>ADD'
 ;

AnyReplace
 : '<hive>REPLACE'
 | '<impala>REPLACE'
 ;

AddOrReplace
 : AnyAdd
 | AnyReplace
 ;

OptionalHiveFirstOrAfter
 :
 | HiveAfterOrFirst ColumnIdentifier
 ;

HiveAfterOrFirst
 : '<hive>AFTER'
 | '<hive>FIRST'
 ;

OptionalHiveFirstOrAfter_EDIT
 : HiveAfterOrFirst 'CURSOR'
   {
     parser.suggestColumns();
   }
 | HiveAfterOrFirst ColumnIdentifier_EDIT
 ;

OptionalHiveColumn
 :
 | '<hive>COLUMN'
 ;

AnyRename
 : '<impala>RENAME'
 | '<hive>RENAME'
 ;

HiveEnableOrDisable
 : '<hive>ENABLE'
 | '<hive>DISABLE'
 ;

HiveNoDropOrOffline
 : '<hive>NO_DROP' OptionalCascade
 | '<hive>OFFLINE'
 ;

HiveNoDropOrOffline_EDIT
 : '<hive>NO_DROP' OptionalCascade 'CURSOR'
   {
     if (!$2) {
       parser.suggestKeywords(['CASCADE']);
     }
   }
 ;

HiveOrImpalaSerdeproperties
 : '<hive>SERDEPROPERTIES'
 | '<impala>SERDEPROPERTIES'
 ;

HiveArchiveOrUnArchive
 : '<hive>ARCHIVE'
 | '<hive>UNARCHIVE'
 ;

OneOrMorePartitionSpecs
 : PartitionSpec
 | OneOrMorePartitionSpecs ',' PartitionSpec // Only Hive
 ;

OneOrMorePartitionSpecs_EDIT
 : PartitionSpec_EDIT
 | OneOrMorePartitionSpecs ',' AnyCursor
   {
     if (parser.isHive()) {
       parser.suggestKeywords(['PARTITION']);
     }
   }
 | OneOrMorePartitionSpecs ',' AnyCursor ',' OneOrMorePartitionSpecs
   {
     if (parser.isHive()) {
       parser.suggestKeywords(['PARTITION']);
     }
   }
 | AnyCursor ',' OneOrMorePartitionSpecs
   {
     if (parser.isHive()) {
       parser.suggestKeywords(['PARTITION']);
     }
   }
 | OneOrMorePartitionSpecs ',' PartitionSpec_EDIT
 | PartitionSpec_EDIT ',' OneOrMorePartitionSpecs
 | OneOrMorePartitionSpecs ',' PartitionSpec_EDIT ',' OneOrMorePartitionSpecs
 ;

OptionalHivePurge
 :
 | '<hive>PURGE'
 ;

OptionalPartitionSpecs
 :
 | PartitionSpecWithLocationList
 ;

PartitionSpecWithLocationList
 : PartitionSpecWithLocation
 | PartitionSpecWithLocationList PartitionSpecWithLocation  -> $2
 ;

OptionalPartitionSpecs_EDIT
 : PartitionSpecWithLocation_EDIT
 | PartitionSpecWithLocation_EDIT PartitionSpecWithLocationList
 | PartitionSpecWithLocationList PartitionSpecWithLocation_EDIT
 | PartitionSpecWithLocationList PartitionSpecWithLocation_EDIT PartitionSpecWithLocationList
 ;

PartitionSpecWithLocation_EDIT
 : PartitionSpec HdfsLocation_EDIT
 | PartitionSpec_EDIT OptionalHdfsLocation
 ;

PartitionSpecWithLocation
 : PartitionSpec OptionalHdfsLocation
   {
     if (!$2) {
       $$ = { suggestKeywords: ['LOCATION'] };
     }
   }
 ;

ParenthesizedSkewedLocationList
 : '(' SkewedLocationList ')'
 ;

ParenthesizedSkewedLocationList_EDIT
 : '(' SkewedLocationList_EDIT RightParenthesisOrError
 ;

SkewedLocationList
 : SkewedLocation
 | SkewedLocationList ',' SkewedLocation
 ;

SkewedLocationList_EDIT
 : SkewedLocation_EDIT
 | SkewedLocationList ',' SkewedLocation_EDIT
 | SkewedLocationList ',' SkewedLocation_EDIT ',' SkewedLocationList
 | SkewedLocation_EDIT ',' SkewedLocationList
 ;

SkewedLocation
 : ColumnReference '=' QuotedValue
 ;

SkewedLocation_EDIT
 : AnyCursor
   {
     parser.suggestColumns();
   }
 | ColumnReference_EDIT
 | AnyCursor '=' QuotedValue
   {
     parser.suggestColumns();
   }
 | ColumnReference_EDIT '=' QuotedValue
 | ColumnReferences '=' QuotedValue
 ;

OptionalStoredAsDirectories
 :
 | '<hive>STORED_AS_DIRECTORIES'
 ;

OptionalStoredAsDirectories_EDIT
 : '<hive>STORED' 'CURSOR'
   {
     parser.suggestKeywords(['AS DIRECTORIES']);
   }
 | '<hive>STORED' '<hive>AS' 'CURSOR'
   {
     parser.suggestKeywords(['DIRECTORIES']);
   }
 ;

AlterView
 : AlterViewLeftSide 'SET' '<hive>TBLPROPERTIES' ParenthesizedPropertyAssignmentList
 | AlterViewLeftSide AnyAs QuerySpecification
 | AlterViewLeftSide '<impala>RENAME' 'TO' RegularOrBacktickedIdentifier
 | AlterViewLeftSide '<impala>RENAME' 'TO' RegularOrBacktickedIdentifier '<impala>.' RegularOrBacktickedIdentifier
 ;

AlterView_EDIT
 : AlterViewLeftSide_EDIT
 | AlterViewLeftSide 'CURSOR'
   {
     if (parser.isHive()) {
       parser.suggestKeywords(['AS', 'SET TBLPROPERTIES']);
     } else if (parser.isImpala()) {
       parser.suggestKeywords(['AS', 'RENAME TO']);
     } else {
       parser.suggestKeywords(['AS']);
     }
   }
 | AlterViewLeftSide 'SET' 'CURSOR'
   {
     if (parser.isHive()) {
       parser.suggestKeywords(['TBLPROPERTIES']);
     }
   }
 | AlterViewLeftSide AnyAs 'CURSOR'
   {
     parser.suggestKeywords(['SELECT']);
   }
 | AlterViewLeftSide AnyAs QuerySpecification_EDIT
 | AlterViewLeftSide '<impala>RENAME' 'CURSOR'
   {
     parser.suggestKeywords(['TO']);
   }
 | AlterViewLeftSide '<impala>RENAME' 'TO' 'CURSOR'
   {
     parser.suggestDatabases({ appendDot: true });
   }
 ;


AlterViewLeftSide
 : 'ALTER' AnyView SchemaQualifiedTableIdentifier
   {
     parser.addTablePrimary($3);
   }
 ;

AlterViewLeftSide_EDIT
 : 'ALTER' AnyView SchemaQualifiedTableIdentifier_EDIT
   {
     if (parser.yy.result.suggestTables) {
       parser.yy.result.suggestTables.onlyViews = true;
     }
   }
 | 'ALTER' AnyView 'CURSOR'
   {
     parser.suggestTables({ onlyViews: true });
     parser.suggestDatabases({ appendDot: true });
   }
 ;

Msck
 : '<hive>MSCK' '<hive>REPAIR' '<hive>TABLE' SchemaQualifiedTableIdentifier
   {
     parser.addTablePrimary($4);
   }
 ;

Msck_EDIT
 : '<hive>MSCK' 'CURSOR'
   {
     parser.suggestKeywords(['REPAIR TABLE']);
   }
 | '<hive>MSCK' '<hive>REPAIR' 'CURSOR'
   {
     parser.suggestKeywords(['TABLE']);
   }
 | '<hive>MSCK' '<hive>REPAIR' '<hive>TABLE' 'CURSOR'
   {
     parser.suggestTables({ onlyTables: true });
     parser.suggestDatabases({ appendDot: true });
   }
 | '<hive>MSCK' '<hive>REPAIR' '<hive>TABLE' SchemaQualifiedTableIdentifier_EDIT
   {
     if (parser.yy.result.suggestTables) {
       parser.yy.result.suggestTables.onlyViews = true;
     }
   }
 ;

ReloadFunction
 : '<hive>RELOAD' '<hive>FUNCTION'
 ;

ReloadFunction_EDIT
 : '<hive>RELOAD' 'CURSOR'
   {
     parser.suggestKeywords(['FUNCTION']);
   }
 ;

CommentOn
 : '<impala>COMMENT' 'ON' 'DATABASE' RegularOrBacktickedIdentifier 'IS' NullableComment
   {
     parser.addDatabaseLocation(@4, [ { name: $4 } ]);
   }
 ;

CommentOn_EDIT
 : '<impala>COMMENT' 'CURSOR'
   {
     parser.suggestKeywords(['ON DATABASE']);
   }
 | '<impala>COMMENT' 'ON' 'CURSOR'
   {
     parser.suggestKeywords(['DATABASE']);
   }
 | '<impala>COMMENT' 'ON' 'DATABASE' 'CURSOR'
   {
     parser.suggestDatabases();
   }
 | '<impala>COMMENT' 'ON' 'DATABASE' RegularOrBacktickedIdentifier 'CURSOR'
   {
     parser.addDatabaseLocation(@4, [ { name: $4 } ]);
     parser.suggestKeywords(['IS']);
   }
 | '<impala>COMMENT' 'ON' 'DATABASE' RegularOrBacktickedIdentifier 'IS' 'CURSOR'
   {
     parser.addDatabaseLocation(@4, [ { name: $4 } ]);
     parser.suggestKeywords(['NULL']);
   }
 ;

NullableComment
 : QuotedValue
 | 'NULL'
 ;// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

DataDefinition
 : AnalyzeStatement
 | RefreshStatement
 | InvalidateStatement
 | ComputeStatsStatement
 ;

DataDefinition_EDIT
 : AnalyzeStatement_EDIT
 | RefreshStatement_EDIT
 | InvalidateStatement_EDIT
 | ComputeStatsStatement_EDIT
 ;

AnalyzeStatement
 : '<hive>ANALYZE' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec '<hive>COMPUTE' '<hive>STATISTICS' OptionalForColumns OptionalCacheMetadata OptionalNoscan
   {
     parser.addTablePrimary($3);
   }
 ;

AnalyzeStatement_EDIT
 : '<hive>ANALYZE' 'CURSOR'
   {
     parser.suggestKeywords(['TABLE']);
   }
 | '<hive>ANALYZE' '<hive>TABLE' 'CURSOR'
   {
     parser.suggestTables({ onlyTables: true });
     parser.suggestDatabases({ appendDot: true });
   }
 | '<hive>ANALYZE' '<hive>TABLE' SchemaQualifiedTableIdentifier_EDIT OptionalPartitionSpec
   {
     if (parser.yy.result.suggestTables) {
       parser.yy.result.suggestTables.onlyTables = true;
     }
   }
 | '<hive>ANALYZE' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec_EDIT
   {
     parser.addTablePrimary($3);
   }
 | '<hive>ANALYZE' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec 'CURSOR'
   {
     parser.addTablePrimary($3);
     if (!$4) {
       parser.suggestKeywords([{ value: 'PARTITION', weight: 2 }, { value: 'COMPUTE STATISTICS', weight: 1 }]);
     } else {
       parser.suggestKeywords(['COMPUTE STATISTICS']);
     }
   }
 | '<hive>ANALYZE' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec '<hive>COMPUTE' 'CURSOR'
   {
     parser.addTablePrimary($3);
     parser.suggestKeywords(['STATISTICS']);
   }
 | '<hive>ANALYZE' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec '<hive>COMPUTE' '<hive>STATISTICS' 'CURSOR' OptionalForColumns OptionalCacheMetadata OptionalNoscan
   {
     parser.addTablePrimary($3);
     parser.suggestKeywords(parser.getKeywordsForOptionalsLR([$8, $9, $10], [{ value: 'FOR COLUMNS', weight: 3 }, { value: 'CACHE METADATA', weight: 2 }, { value: 'NOSCAN', weight: 1 }]));
   }
 | '<hive>ANALYZE' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec '<hive>COMPUTE' '<hive>STATISTICS' ForColumns 'CURSOR' OptionalCacheMetadata OptionalNoscan
   {
     parser.addTablePrimary($3);
     parser.suggestKeywords(parser.getKeywordsForOptionalsLR([$9, $10], [{ value: 'CACHE METADATA', weight: 2 }, { value: 'NOSCAN', weight: 1 }]));
   }
 | '<hive>ANALYZE' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec '<hive>COMPUTE' '<hive>STATISTICS' OptionalForColumns CacheMetadata 'CURSOR' OptionalNoscan
   {
     parser.addTablePrimary($3);
     parser.suggestKeywords(parser.getKeywordsForOptionalsLR([$10], [{ value: 'NOSCAN', weight: 1 }]));
   }
 | '<hive>ANALYZE' 'CURSOR' SchemaQualifiedTableIdentifier OptionalPartitionSpec
   {
     parser.suggestKeywords(['TABLE']);
     parser.addTablePrimary($3);
   }
 | '<hive>ANALYZE' 'CURSOR' SchemaQualifiedTableIdentifier OptionalPartitionSpec '<hive>COMPUTE' '<hive>STATISTICS' OptionalForColumns OptionalCacheMetadata OptionalNoscan
   {
     parser.suggestKeywords(['TABLE']);
     parser.addTablePrimary($3);
   }
 | '<hive>ANALYZE' '<hive>TABLE' SchemaQualifiedTableIdentifier_EDIT OptionalPartitionSpec '<hive>COMPUTE' '<hive>STATISTICS' OptionalForColumns OptionalCacheMetadata OptionalNoscan
 | '<hive>ANALYZE' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec_EDIT '<hive>COMPUTE' '<hive>STATISTICS' OptionalForColumns OptionalCacheMetadata OptionalNoscan
 | '<hive>ANALYZE' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec '<hive>COMPUTE' '<hive>STATISTICS' ForColumns_EDIT OptionalCacheMetadata OptionalNoscan
 | '<hive>ANALYZE' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec '<hive>COMPUTE' '<hive>STATISTICS' OptionalForColumns CacheMetadata_EDIT OptionalNoscan
 ;

OptionalForColumns
 :
 | ForColumns
 ;

ForColumns
 : '<hive>FOR' '<hive>COLUMNS'
 ;

ForColumns_EDIT
 : '<hive>FOR' 'CURSOR'
   {
     parser.suggestKeywords(['COLUMNS']);
   }
 ;

OptionalCacheMetadata
 :
 | CacheMetadata
 ;

CacheMetadata
 : '<hive>CACHE' '<hive>METADATA'
 ;

CacheMetadata_EDIT
 : '<hive>CACHE' 'CURSOR'
   {
     parser.suggestKeywords(['METADATA']);
   }
 ;

OptionalNoscan
 :
 | '<hive>NOSCAN'
 ;

RefreshStatement
 : '<impala>REFRESH' SchemaQualifiedTableIdentifier OptionalPartitionSpec
   {
     parser.addTablePrimary($2);
   }
 | '<impala>REFRESH' '<impala>FUNCTIONS' DatabaseIdentifier
   {
     parser.addDatabaseLocation(@3, [{ name: $3 }]);
   }
 ;

RefreshStatement_EDIT
 : '<impala>REFRESH' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
     parser.suggestKeywords(['FUNCTIONS']);
   }
 | '<impala>REFRESH' SchemaQualifiedTableIdentifier_EDIT OptionalPartitionSpec
 | '<impala>REFRESH' SchemaQualifiedTableIdentifier OptionalPartitionSpec 'CURSOR'
   {
     parser.addTablePrimary($2);
     if (!$3) {
       parser.suggestKeywords(['PARTITION']);
     }
   }
 | '<impala>REFRESH' SchemaQualifiedTableIdentifier OptionalPartitionSpec_EDIT
 | '<impala>REFRESH' '<impala>FUNCTIONS' 'CURSOR'
   {
     parser.suggestDatabases();
   }
 ;

InvalidateStatement
 : '<impala>INVALIDATE' '<impala>METADATA'
 | '<impala>INVALIDATE' '<impala>METADATA' SchemaQualifiedTableIdentifier
   {
     parser.addTablePrimary($3);
   }
 ;

InvalidateStatement_EDIT
 : '<impala>INVALIDATE' 'CURSOR'
   {
     parser.suggestKeywords(['METADATA']);
   }
 | '<impala>INVALIDATE' '<impala>METADATA' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | '<impala>INVALIDATE' '<impala>METADATA' SchemaQualifiedTableIdentifier_EDIT
 | '<impala>INVALIDATE' 'CURSOR' SchemaQualifiedTableIdentifier
   {
     parser.addTablePrimary($3);
     parser.suggestKeywords(['METADATA']);
   }
 ;

ComputeStatsStatement
 : '<impala>COMPUTE' '<impala>STATS' SchemaQualifiedTableIdentifier OptionalParenthesizedColumnList OptionalImpalaTableSample
   {
     parser.addTablePrimary($3);
   }
 | '<impala>COMPUTE' '<impala>INCREMENTAL' '<impala>STATS' SchemaQualifiedTableIdentifier OptionalPartitionSpec
   {
     parser.addTablePrimary($4);
   }
 ;

ComputeStatsStatement_EDIT
 : '<impala>COMPUTE' 'CURSOR'
   {
     parser.suggestKeywords(['STATS', 'INCREMENTAL STATS']);
   }
 | '<impala>COMPUTE' '<impala>STATS' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | '<impala>COMPUTE' '<impala>STATS' SchemaQualifiedTableIdentifier_EDIT
 | '<impala>COMPUTE' 'CURSOR' SchemaQualifiedTableIdentifier OptionalPartitionSpec
   {
     parser.addTablePrimary($3);
     parser.suggestKeywords(['STATS', 'INCREMENTAL STATS']);
   }
 | '<impala>COMPUTE' '<impala>STATS' SchemaQualifiedTableIdentifier OptionalParenthesizedColumnList OptionalImpalaTableSample 'CURSOR'
   {
     parser.addTablePrimary($3);
     if (!$5) {
       parser.suggestKeywords(['TABLESAMPLE']);
     } else if ($5.suggestKeywords) {
       parser.suggestKeywords($5.suggestKeywords);
     }
   }
 | '<impala>COMPUTE' '<impala>STATS' SchemaQualifiedTableIdentifier ParenthesizedColumnList_EDIT OptionalImpalaTableSample
   {
     parser.addTablePrimary($3);
   }
 | '<impala>COMPUTE' '<impala>STATS' SchemaQualifiedTableIdentifier OptionalParenthesizedColumnList OptionalImpalaTableSample_EDIT
   {
     parser.addTablePrimary($3);
   }
 | '<impala>COMPUTE' 'CURSOR' '<impala>STATS' SchemaQualifiedTableIdentifier OptionalPartitionSpec
   {
     parser.addTablePrimary($4);
     parser.suggestKeywords(['INCREMENTAL']);
   }
 | '<impala>COMPUTE' '<impala>INCREMENTAL' 'CURSOR'
   {
     parser.suggestKeywords(['STATS']);
   }
 | '<impala>COMPUTE' '<impala>INCREMENTAL' 'CURSOR' SchemaQualifiedTableIdentifier OptionalPartitionSpec
   {
     parser.addTablePrimary($4);
     parser.suggestKeywords(['STATS']);
   }
 | '<impala>COMPUTE' '<impala>INCREMENTAL' '<impala>STATS' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | '<impala>COMPUTE' '<impala>INCREMENTAL' '<impala>STATS' SchemaQualifiedTableIdentifier_EDIT OptionalPartitionSpec
 | '<impala>COMPUTE' '<impala>INCREMENTAL' '<impala>STATS' SchemaQualifiedTableIdentifier 'CURSOR' OptionalPartitionSpec
   {
     parser.addTablePrimary($4);
     if (!$6) {
       parser.suggestKeywords(['PARTITION']);
     }
   }
 | '<impala>COMPUTE' '<impala>INCREMENTAL' '<impala>STATS' SchemaQualifiedTableIdentifier PartitionSpec_EDIT
   {
     parser.addTablePrimary($4);
   }
 ;// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

DataDefinition
 : CreateStatement
 ;

DataDefinition_EDIT
 : CreateStatement_EDIT
 ;

CreateStatement
 : DatabaseDefinition
 | TableDefinition
 | ViewDefinition
 | RoleDefinition
 | FunctionDefinition
 | IndexDefinition
 | MacroDefinition
 ;

CreateStatement_EDIT
 : DatabaseDefinition_EDIT
 | TableDefinition_EDIT
 | ViewDefinition_EDIT
 | FunctionDefinition_EDIT
 | IndexDefinition_EDIT
 | MacroDefinition_EDIT
 | AnyCreate OptionalHiveTemporary OptionalExternal 'CURSOR'
   {
     if ($3) {
       parser.suggestKeywords(['TABLE']);
     } else if (parser.isHive()) {
       if ($2) {
         parser.suggestKeywords(['EXTERNAL TABLE', 'FUNCTION', 'MACRO', 'TABLE']);
       } else {
         parser.suggestKeywords(['DATABASE', 'EXTERNAL TABLE', 'FUNCTION', 'INDEX', 'ROLE', 'SCHEMA', 'TABLE', 'TEMPORARY EXTERNAL TABLE', 'TEMPORARY FUNCTION', 'TEMPORARY MACRO', 'TEMPORARY TABLE', 'VIEW']);
       }
     } else if (parser.isImpala()) {
       parser.suggestKeywords(['AGGREGATE FUNCTION', 'DATABASE', 'EXTERNAL TABLE', 'FUNCTION', 'ROLE', 'SCHEMA', 'TABLE', 'VIEW']);
     } else {
       parser.suggestKeywords(['DATABASE', 'ROLE', 'SCHEMA', 'TABLE', 'VIEW']);
     }
   }
 ;

DatabaseDefinition
 : AnyCreate DatabaseOrSchema OptionalIfNotExists
 | AnyCreate DatabaseOrSchema OptionalIfNotExists RegularIdentifier DatabaseDefinitionOptionals
 ;

DatabaseDefinition_EDIT
 : AnyCreate DatabaseOrSchema OptionalIfNotExists 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['IF NOT EXISTS']);
     }
   }
 | AnyCreate DatabaseOrSchema OptionalIfNotExists_EDIT
 | AnyCreate DatabaseOrSchema OptionalIfNotExists 'CURSOR' RegularIdentifier
   {
     if (!$3) {
       parser.suggestKeywords(['IF NOT EXISTS']);
     }
   }
 | AnyCreate DatabaseOrSchema OptionalIfNotExists_EDIT RegularIdentifier
 | AnyCreate DatabaseOrSchema OptionalIfNotExists RegularIdentifier DatabaseDefinitionOptionals 'CURSOR'
 ;

DatabaseDefinitionOptionals
 : OptionalComment OptionalHdfsLocation OptionalHiveDbProperties
   {
     var keywords = [];
     if (!$3 && parser.isHive()) {
       keywords.push('WITH DBPROPERTIES');
     }
     if (!$2 && !$3) {
       keywords.push('LOCATION');
     }
     if (!$1 && !$2 && !$3) {
       keywords.push('COMMENT');
     }
     if (keywords.length > 0) {
       parser.suggestKeywords(keywords);
     }
   }
 ;

DatabaseDefinitionOptionals_EDIT
 : OptionalComment_INVALID OptionalHdfsLocation OptionalHiveDbProperties
 | OptionalComment HdfsLocation_EDIT OptionalHiveDbProperties
 ;

OptionalComment
 :
 | Comment
 ;

Comment
 : HiveOrImpalaComment QuotedValue
 ;

Comment_INVALID
 : HiveOrImpalaComment SINGLE_QUOTE
 | HiveOrImpalaComment DOUBLE_QUOTE
 | HiveOrImpalaComment SINGLE_QUOTE VALUE
 | HiveOrImpalaComment DOUBLE_QUOTE VALUE
 ;

OptionalComment_INVALID
 : Comment_INVALID
 ;

OptionalHiveDbProperties
 :
 | HiveDbProperties
 ;

HiveDbProperties
 : '<hive>WITH' '<hive>DBPROPERTIES' ParenthesizedPropertyAssignmentList
 | '<hive>WITH' '<hive>DBPROPERTIES'
 | '<hive>WITH' 'CURSOR'
   {
     parser.suggestKeywords(['DBPROPERTIES']);
   }
 ;

ParenthesizedPropertyAssignmentList
 : '(' PropertyAssignmentList ')'
 ;

PropertyAssignmentList
 : PropertyAssignment
 | PropertyAssignmentList ',' PropertyAssignment
 ;

PropertyAssignment
 : QuotedValue '=' UnsignedValueSpecification
 ;

TableDefinition
 : AnyCreate OptionalHiveTemporary OptionalExternal AnyTable OptionalIfNotExists TableDefinitionRightPart LifeCyclePart
 ;

LifeCyclePart
:
| '<hive>LIFECYCLE' 'UNSIGNED_INTEGER'
;

TableDefinition_EDIT
 : AnyCreate OptionalHiveTemporary OptionalExternal AnyTable OptionalIfNotExists TableDefinitionRightPart_EDIT
 | AnyCreate OptionalHiveTemporary OptionalExternal AnyTable OptionalIfNotExists 'CURSOR'
   {
     if (!$5) {
       parser.suggestKeywords(['IF NOT EXISTS']);
     }
   }
 | AnyCreate OptionalHiveTemporary OptionalExternal AnyTable OptionalIfNotExists_EDIT
 ;

TableDefinitionRightPart
 : TableIdentifierAndOptionalColumnSpecification OptionalComment OptionalPartitionedBy OptionalSortBy OptionalClusteredBy OptionalSkewedBy
   OptionalStoredAsOrBy  OptionalHdfsLocation OptionalTblproperties OptionalCachedInOrUncached OptionalAsSelectStatement
 ;

TableDefinitionRightPart_EDIT
 : TableIdentifierAndOptionalColumnSpecification_EDIT OptionalComment OptionalPartitionedBy OptionalSortBy OptionalClusteredBy OptionalSkewedBy
   OptionalStoredAsOrBy OptionalWithSerdeproperties OptionalHdfsLocation OptionalTblproperties OptionalCachedInOrUncached OptionalAsSelectStatement
 | TableIdentifierAndOptionalColumnSpecification OptionalComment PartitionedBy_EDIT OptionalSortBy OptionalClusteredBy OptionalSkewedBy
   OptionalStoredAsOrBy OptionalWithSerdeproperties OptionalHdfsLocation OptionalTblproperties OptionalCachedInOrUncached OptionalAsSelectStatement
 | TableIdentifierAndOptionalColumnSpecification OptionalComment OptionalPartitionedBy SortBy_EDIT OptionalClusteredBy OptionalSkewedBy
   OptionalStoredAsOrBy OptionalWithSerdeproperties OptionalHdfsLocation OptionalTblproperties OptionalCachedInOrUncached OptionalAsSelectStatement
 | TableIdentifierAndOptionalColumnSpecification OptionalComment OptionalPartitionedBy OptionalSortBy ClusteredBy_EDIT OptionalSkewedBy
   OptionalStoredAsOrBy OptionalWithSerdeproperties OptionalHdfsLocation OptionalTblproperties OptionalCachedInOrUncached OptionalAsSelectStatement
 | TableIdentifierAndOptionalColumnSpecification OptionalComment OptionalPartitionedBy OptionalSortBy OptionalClusteredBy SkewedBy_EDIT
   OptionalStoredAsOrBy OptionalWithSerdeproperties OptionalHdfsLocation OptionalTblproperties OptionalCachedInOrUncached OptionalAsSelectStatement
 | TableIdentifierAndOptionalColumnSpecification OptionalComment OptionalPartitionedBy OptionalSortBy OptionalClusteredBy OptionalSkewedBy
   StoredAsOrBy_EDIT OptionalWithSerdeproperties OptionalHdfsLocation OptionalTblproperties OptionalCachedInOrUncached OptionalAsSelectStatement
 | TableIdentifierAndOptionalColumnSpecification OptionalComment OptionalPartitionedBy OptionalSortBy OptionalClusteredBy OptionalSkewedBy
   OptionalStoredAsOrBy WithSerdeproperties_EDIT OptionalHdfsLocation OptionalTblproperties OptionalCachedInOrUncached OptionalAsSelectStatement
 | TableIdentifierAndOptionalColumnSpecification OptionalComment OptionalPartitionedBy OptionalSortBy OptionalClusteredBy OptionalSkewedBy
   OptionalStoredAsOrBy OptionalWithSerdeproperties HdfsLocation_EDIT OptionalTblproperties OptionalCachedInOrUncached OptionalAsSelectStatement
 | TableIdentifierAndOptionalColumnSpecification OptionalComment OptionalPartitionedBy OptionalSortBy OptionalClusteredBy OptionalSkewedBy
   OptionalStoredAsOrBy OptionalWithSerdeproperties OptionalHdfsLocation OptionalTblproperties CachedIn_EDIT OptionalAsSelectStatement
 | TableIdentifierAndOptionalColumnSpecification OptionalComment OptionalPartitionedBy OptionalSortBy OptionalClusteredBy OptionalSkewedBy
   OptionalStoredAsOrBy OptionalWithSerdeproperties OptionalHdfsLocation OptionalTblproperties CachedIn WithReplication_EDIT OptionalAsSelectStatement
 | TableIdentifierAndOptionalColumnSpecification OptionalComment OptionalPartitionedBy OptionalSortBy OptionalClusteredBy OptionalSkewedBy
   OptionalStoredAsOrBy OptionalWithSerdeproperties OptionalHdfsLocation OptionalTblproperties OptionalCachedInOrUncached OptionalAsSelectStatement_EDIT
 | TableIdentifierAndOptionalColumnSpecification OptionalComment OptionalPartitionedBy OptionalSortBy OptionalClusteredBy OptionalSkewedBy
   OptionalStoredAsOrBy OptionalWithSerdeproperties OptionalHdfsLocation OptionalTblproperties OptionalCachedInOrUncached 'CURSOR'
   {
     var keywords = [];
     if (!$1 && !$2 && !$3 && !$4 && !$5 && !$6 && !$7 && !$8 && !$9 && !$10 && !$11) {
       keywords.push({ value: 'LIKE', weight: 1 });
       if (parser.isImpala()) {
         keywords.push({ value: 'LIKE PARQUET', weight: 1 });
       }
     } else {
       if (!$2 && !$3 && !$4 && !$5 && !$6 && !$7 && !$8 && !$9 && !$10 && !$11) {
         keywords.push({ value: 'COMMENT', weight: 11 });
       }
       if (!$3 && !$4 && !$5 && !$6 && !$7 && !$8 && !$9 && !$10 && !$11) {
         keywords.push({ value: 'PARTITIONED BY', weight: 10 });
         if (parser.isImpala()) {
           keywords.push({ value: 'PARTITION BY', weight: 10 });
         }
       }
       if (parser.isImpala() && !$4 && !$5 && !$6 && !$7 && !$8 && !$9 && !$10 && !$11) {
         keywords.push({ value: 'SORT BY', weight: 9 });
       }
       if (parser.isHive() && !$5 && !$6 && !$7 && !$8 && !$9 && !$10 && !$11) {
         keywords.push({ value: 'CLUSTERED BY', weight: 8 });
       }
       if (parser.isHive() && !$6 && !$7 && !$8 && !$9 && !$10 && !$11) {
         keywords.push({ value: 'SKEWED BY', weight: 7 });
       } else if (parser.isHive() && $6 && $6.suggestKeywords && !$7 && !$8 && !$9 && !$10 && !$10) {
         keywords = keywords.concat(parser.createWeightedKeywords($6.suggestKeywords, 7)); // Get the last optional from SKEWED BY
       }
       if (!$7 && !$8 && !$9 && !$10 && !$11) {
         keywords.push({ value: 'ROW FORMAT', weight: 6 });
         keywords.push({ value: 'STORED AS', weight: 6 });
         if (parser.isHive()) {
           keywords.push({ value: 'STORED BY', weight: 6 });
         }
       } else if ($7 && $7.suggestKeywords && !$8 && !$9 && !$10 && !$11) {
         keywords = keywords.concat(parser.createWeightedKeywords($7.suggestKeywords, 6));
       }
       if ((($7 && $7.storedBy) || parser.isImpala()) && !$8 && !$9 && !$10 && !$11) {
         keywords.push({ value: 'WITH SERDEPROPERTIES', weight: 5 });
       }
       if (!$9 && !$10 && !$11) {
         keywords.push({ value: 'LOCATION', weight: 4 });
       }
       if (!$10 && !$11) {
         keywords.push({ value: 'TBLPROPERTIES', weight: 3 });
       }
       if (parser.isImpala() && !$11) {
         keywords.push({ value: 'CACHED IN', weight: 2 }, { value: 'UNCACHED', weight: 2 });
       }
       if (parser.isImpala() && $11 && $11.suggestKeywords) {
         keywords = keywords.concat(parser.createWeightedKeywords($11.suggestKeywords, 2));
       }
       keywords.push({ value: 'AS', weight: 1 });
     }

     if (keywords.length > 0) {
       parser.suggestKeywords(keywords);
     }
   }
 ;

TableIdentifierAndOptionalColumnSpecification
 : SchemaQualifiedIdentifier OptionalColumnSpecificationsOrLike  -> $2
 ;

TableIdentifierAndOptionalColumnSpecification_EDIT
 : SchemaQualifiedIdentifier OptionalColumnSpecificationsOrLike_EDIT
 | SchemaQualifiedIdentifier_EDIT OptionalColumnSpecificationsOrLike
 ;

OptionalColumnSpecificationsOrLike
 :
 | ParenthesizedColumnSpecificationList
 | '<impala>LIKE_PARQUET' HdfsPath
 | 'LIKE' SchemaQualifiedTableIdentifier
 ;

OptionalColumnSpecificationsOrLike_EDIT
 : ParenthesizedColumnSpecificationList_EDIT
 | '<impala>LIKE_PARQUET' HdfsPath_EDIT
 | 'LIKE' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
     if (parser.isImpala()) {
       parser.suggestKeywords(['PARQUET']);
     }
   }
 | 'LIKE' SchemaQualifiedTableIdentifier_EDIT
 ;

ParenthesizedColumnSpecificationList
 : '(' ColumnSpecificationList ')'
 | '(' ColumnSpecificationList ',' ConstraintSpecification ')'
 ;

ParenthesizedColumnSpecificationList_EDIT
 : '(' ColumnSpecificationList_EDIT RightParenthesisOrError
 | '(' ColumnSpecificationList ',' ConstraintSpecification_EDIT RightParenthesisOrError
 | '(' ColumnSpecificationList ',' 'CURSOR' RightParenthesisOrError
   {
     if (parser.isImpala()) {
       parser.suggestKeywords(['PRIMARY KEY']);
     } else if (parser.isHive()) {
       parser.suggestKeywords([{ value: 'PRIMARY KEY', weight: 2 }, { value: 'CONSTRAINT', weight: 1 }]);
     }
   }
 ;

ColumnSpecificationList
 : ColumnSpecification
 | ColumnSpecificationList ',' ColumnSpecification                                        -> $3
 ;

ColumnSpecificationList_EDIT
 : ColumnSpecification_EDIT
 | ColumnSpecification_EDIT ',' ColumnSpecificationList
 | ColumnSpecificationList ',' ColumnSpecification_EDIT
 | ColumnSpecificationList ',' ColumnSpecification_EDIT ',' ColumnSpecificationList
 | ColumnSpecification 'CURSOR'
   {
     parser.checkForKeywords($1);
   }
 | ColumnSpecification 'CURSOR' ',' ColumnSpecificationList
   {
     parser.checkForKeywords($1);
   }
 | ColumnSpecificationList ',' ColumnSpecification 'CURSOR'
   {
     parser.checkForKeywords($3);
   }
 | ColumnSpecificationList ',' ColumnSpecification 'CURSOR' ',' ColumnSpecificationList
   {
     parser.checkForKeywords($3);
   }
 ;

ColumnSpecification
 : ColumnIdentifier ColumnDataType OptionalColumnOptions
   {
     $$ = $1;
     var keywords = [];
     if (parser.isImpala()) {
       if (!$3['primary']) {
         keywords.push('PRIMARY KEY');
       }
       if (!$3['encoding']) {
         keywords.push('ENCODING');
       }
       if (!$3['compression']) {
         keywords.push('COMPRESSION');
       }
       if (!$3['default']) {
         keywords.push('DEFAULT');
       }
       if (!$3['block_size']) {
         keywords.push('BLOCK_SIZE');
       }
       if (!$3['null']) {
         keywords.push('NOT NULL');
         keywords.push('NULL');
       }
     }
     if (!$3['comment']) {
       keywords.push('COMMENT');
       if (parser.isHive() && $2.toLowerCase() === 'double') {
         keywords.push({ value: 'PRECISION', weight: 2 });
       }
     }
     if (keywords.length > 0) {
       $$.suggestKeywords = keywords;
     }
   }
 ;

ColumnSpecification_EDIT
 : ColumnIdentifier 'CURSOR' OptionalColumnOptions
   {
     parser.suggestKeywords(parser.getColumnDataTypeKeywords());
   }
 | ColumnIdentifier ColumnDataType_EDIT OptionalColumnOptions
 | ColumnIdentifier ColumnDataType ColumnOptions_EDIT
 ;

OptionalColumnOptions
 :                      -> {}
 | ColumnOptions
 ;

ColumnOptions
 : ColumnOption
   {
     $$ = {};
     $$[$1] = true;
   }
 | ColumnOptions ColumnOption
   {
     $1[$2] = true;
   }
 ;

ColumnOptions_EDIT
 : ColumnOption_EDIT
 | ColumnOption_EDIT ColumnOptions
 | ColumnOptions ColumnOption_EDIT
 | ColumnOptions ColumnOption_EDIT ColumnOptions
 ;

ColumnOption
 : ImpalaPrimaryKey                                          -> 'primary'
 | '<impala>ENCODING' RegularIdentifier                      -> 'encoding'
 | '<impala>COMPRESSION' RegularIdentifier                   -> 'compression'
 | '<impala>DEFAULT' NonParenthesizedValueExpressionPrimary  -> 'default'
 | '<impala>BLOCK_SIZE' UnsignedNumericLiteral               -> 'block_size'
 | 'NOT' 'NULL'                                              -> 'null'
 | 'NULL'                                                    -> 'null'
 | Comment                                                   -> 'comment'
 ;

ColumnOption_EDIT
 : ImpalaPrimaryKey_EDIT
 | 'NOT' 'CURSOR'
   {
     if (parser.isImpala()) {
       parser.suggestKeywords(['NULL']);
     }
   }
 ;

ColumnDataType
 : PrimitiveType
 | ArrayType
 | MapType
 | StructType
 | UnionType
 | ArrayType_INVALID
 | MapType_INVALID
 | StructType_INVALID
 | UnionType_INVALID
 ;

ColumnDataType_EDIT
 : ArrayType_EDIT
 | MapType_EDIT
 | StructType_EDIT
 | UnionType_EDIT
 ;

ArrayType
 : 'ARRAY' '<' ColumnDataType '>'
 ;

ArrayType_INVALID
 : 'ARRAY' '<' '>'
 ;

ArrayType_EDIT
 : 'ARRAY' '<' AnyCursor GreaterThanOrError
   {
     parser.suggestKeywords(parser.getColumnDataTypeKeywords());
   }
 | 'ARRAY' '<' ColumnDataType_EDIT GreaterThanOrError
 ;

MapType
 : 'MAP' '<' PrimitiveType ',' ColumnDataType '>'
 ;

MapType_INVALID
 : 'MAP' '<' '>'
 ;

MapType_EDIT
 : 'MAP' '<' PrimitiveType ',' ColumnDataType_EDIT GreaterThanOrError
 | 'MAP' '<' AnyCursor GreaterThanOrError
   {
     parser.suggestKeywords(parser.getTypeKeywords());
   }
 | 'MAP' '<' PrimitiveType ',' AnyCursor GreaterThanOrError
   {
     parser.suggestKeywords(parser.getColumnDataTypeKeywords());
   }
 | 'MAP' '<' ',' AnyCursor GreaterThanOrError
   {
     parser.suggestKeywords(parser.getColumnDataTypeKeywords());
   }
 ;

StructType
 : 'STRUCT' '<' StructDefinitionList '>'
 ;

StructType_INVALID
 : 'STRUCT' '<' '>'
 ;

StructType_EDIT
 : 'STRUCT' '<' StructDefinitionList_EDIT GreaterThanOrError
 ;

StructDefinitionList
 : StructDefinition
 | StructDefinitionList ',' StructDefinition
 ;

StructDefinitionList_EDIT
 : StructDefinition_EDIT
 | StructDefinition_EDIT Commas
 | StructDefinition_EDIT Commas StructDefinitionList
 | StructDefinitionList ',' StructDefinition_EDIT
 | StructDefinitionList ',' StructDefinition_EDIT Commas StructDefinitionList
 ;

StructDefinition
 : RegularOrBacktickedIdentifier ':' ColumnDataType OptionalComment
 ;

StructDefinition_EDIT
 : Commas RegularOrBacktickedIdentifier ':' ColumnDataType 'CURSOR'
   {
     parser.suggestKeywords(['COMMENT']);
   }
 | Commas RegularOrBacktickedIdentifier ':' AnyCursor
   {
     parser.suggestKeywords(parser.getColumnDataTypeKeywords());
   }
 | Commas RegularOrBacktickedIdentifier ':' ColumnDataType_EDIT
 | RegularOrBacktickedIdentifier ':' ColumnDataType 'CURSOR'
   {
     parser.suggestKeywords(['COMMENT']);
   }
 | RegularOrBacktickedIdentifier ':' AnyCursor
   {
     parser.suggestKeywords(parser.getColumnDataTypeKeywords());
   }
 | RegularOrBacktickedIdentifier ':' ColumnDataType_EDIT
 ;

UnionType
 : '<hive>UNIONTYPE' '<' ColumnDataTypeList '>'
 ;

UnionType_INVALID
 : '<hive>UNIONTYPE' '<' '>'
 ;

UnionType_EDIT
 : '<hive>UNIONTYPE' '<' ColumnDataTypeList_EDIT GreaterThanOrError
 ;

ColumnDataTypeList
 : ColumnDataType
 | ColumnDataTypeList ',' ColumnDataType
 ;

ColumnDataTypeList_EDIT
 : ColumnDataTypeListInner_EDIT
 | ColumnDataTypeListInner_EDIT Commas
 | ColumnDataTypeList ',' ColumnDataTypeListInner_EDIT
 | ColumnDataTypeListInner_EDIT Commas ColumnDataTypeList
 | ColumnDataTypeList ',' ColumnDataTypeListInner_EDIT Commas ColumnDataTypeList
 ;

ColumnDataTypeListInner_EDIT
 : Commas AnyCursor
   {
     parser.suggestKeywords(parser.getColumnDataTypeKeywords());
   }
 | Commas ColumnDataType_EDIT
 | AnyCursor
   {
     parser.suggestKeywords(parser.getColumnDataTypeKeywords());
   }
 | ColumnDataType_EDIT
 ;

GreaterThanOrError
 : '>'
 | error
 ;

ConstraintSpecification
 : ImpalaPrimaryKeySpecification
 | HivePrimaryKeySpecification
 | '<hive>CONSTRAINT' RegularOrBacktickedIdentifier HiveForeignKeySpecification
 | HivePrimaryKeySpecification ',' '<hive>CONSTRAINT' RegularOrBacktickedIdentifier HiveForeignKeySpecification
 ;

ConstraintSpecification_EDIT
 : ImpalaPrimaryKeySpecification_EDIT
 | HivePrimaryKeySpecification_EDIT
 | HivePrimaryKeySpecification ',' 'CURSOR'
   {
     parser.suggestKeywords(['CONSTRAINT']);
   }
 | HivePrimaryKeySpecification ',' '<hive>CONSTRAINT' RegularOrBacktickedIdentifier 'CURSOR'
   {
     parser.suggestKeywords(['FOREIGN KEY']);
   }
 | HivePrimaryKeySpecification ',' '<hive>CONSTRAINT' RegularOrBacktickedIdentifier HiveForeignKeySpecification_EDIT
 | HivePrimaryKeySpecification_EDIT ',' '<hive>CONSTRAINT' RegularOrBacktickedIdentifier HiveForeignKeySpecification
 | '<hive>CONSTRAINT' RegularOrBacktickedIdentifier 'CURSOR'
   {
     parser.suggestKeywords(['FOREIGN KEY']);
   }
 | '<hive>CONSTRAINT' RegularOrBacktickedIdentifier HiveForeignKeySpecification_EDIT
 | 'CURSOR' '<hive>CONSTRAINT' RegularOrBacktickedIdentifier HiveForeignKeySpecification
   {
     parser.suggestKeywords(['PRIMARY KEY']);
   }
 ;

HivePrimaryKeySpecification
 : HivePrimaryKey ParenthesizedColumnList '<hive>DISABLE' '<hive>NOVALIDATE'
 ;

HivePrimaryKeySpecification_EDIT
 : HivePrimaryKey_EDIT
 | HivePrimaryKey ParenthesizedColumnList_EDIT
 | HivePrimaryKey ParenthesizedColumnList 'CURSOR'
   {
     parser.suggestKeywords(['DISABLE NOVALIDATE']);
   }
 | HivePrimaryKey ParenthesizedColumnList '<hive>DISABLE' 'CURSOR'
   {
     parser.suggestKeywords(['NOVALIDATE']);
   }
 | HivePrimaryKey ParenthesizedColumnList_EDIT '<hive>DISABLE' '<hive>NOVALIDATE'
 ;

HiveForeignKeySpecification
 : '<hive>FOREIGN' '<hive>KEY' ParenthesizedColumnList '<hive>REFERENCES' SchemaQualifiedTableIdentifier ParenthesizedColumnList '<hive>DISABLE' '<hive>NOVALIDATE' OptionalRelyNoRely
   {
     parser.addTablePrimary($5);
   }
 ;

HiveForeignKeySpecification_EDIT
 : '<hive>FOREIGN' 'CURSOR'
   {
     parser.suggestKeywords(['KEY']);
   }
 | '<hive>FOREIGN' '<hive>KEY' ParenthesizedColumnList_EDIT
 | '<hive>FOREIGN' '<hive>KEY' ParenthesizedColumnList 'CURSOR'
   {
     parser.suggestKeywords(['REFERENCES']);
   }
 | '<hive>FOREIGN' '<hive>KEY' ParenthesizedColumnList '<hive>REFERENCES' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | '<hive>FOREIGN' '<hive>KEY' ParenthesizedColumnList '<hive>REFERENCES' SchemaQualifiedTableIdentifier_EDIT
 | '<hive>FOREIGN' '<hive>KEY' ParenthesizedColumnList '<hive>REFERENCES' SchemaQualifiedTableIdentifier ParenthesizedColumnList_EDIT
   {
     parser.addTablePrimary($5);
   }
 | '<hive>FOREIGN' '<hive>KEY' ParenthesizedColumnList '<hive>REFERENCES' SchemaQualifiedTableIdentifier ParenthesizedColumnList 'CURSOR'
   {
     parser.addTablePrimary($5);
     parser.suggestKeywords(['DISABLE NOVALIDATE']);
   }
 | '<hive>FOREIGN' '<hive>KEY' ParenthesizedColumnList '<hive>REFERENCES' SchemaQualifiedTableIdentifier ParenthesizedColumnList '<hive>DISABLE' 'CURSOR'
   {
     parser.addTablePrimary($5);
     parser.suggestKeywords(['NOVALIDATE']);
   }
 | '<hive>FOREIGN' '<hive>KEY' ParenthesizedColumnList '<hive>REFERENCES' SchemaQualifiedTableIdentifier ParenthesizedColumnList '<hive>DISABLE' '<hive>NOVALIDATE' OptionalRelyNoRely 'CURSOR'
   {
     parser.addTablePrimary($5);
     if (!$9) {
       parser.suggestKeywords(['NORELY', 'RELY']);
     }
   }
 ;

OptionalRelyNoRely
 :
 | '<hive>RELY'
 | '<hive>NORELY'
 ;

ImpalaPrimaryKeySpecification
 : ImpalaPrimaryKey ParenthesizedColumnList
 ;

ImpalaPrimaryKeySpecification_EDIT
 : ImpalaPrimaryKey_EDIT
 | ImpalaPrimaryKey_EDIT ParenthesizedColumnList
 | ImpalaPrimaryKey ParenthesizedColumnList_EDIT
 ;

ImpalaPrimaryKey
 : '<impala>PRIMARY' '<impala>KEY'
 ;

ImpalaPrimaryKey_EDIT
 : '<impala>PRIMARY' 'CURSOR'
   {
     parser.suggestKeywords(['KEY']);
   }
 ;

HivePrimaryKey
 : '<hive>PRIMARY' '<hive>KEY'
 ;

HivePrimaryKey_EDIT
 : '<hive>PRIMARY' 'CURSOR'
   {
     parser.suggestKeywords(['KEY']);
   }
 ;

OptionalPartitionedBy
 :
 | PartitionedBy
 ;

PartitionedBy
 : HiveOrImpalaPartitioned 'BY' ParenthesizedColumnSpecificationList
 | 'PARTITION' 'BY' AnyRange ParenthesizedColumnList ParenthesizedPartitionValuesList
 | 'PARTITION' 'BY' '<impala>HASH' ParenthesizedColumnList '<impala>PARTITIONS' UnsignedNumericLiteral
 ;

PartitionedBy_EDIT
 : HiveOrImpalaPartitioned 'CURSOR'
   {
     parser.suggestKeywords(['BY']);
   }
 | HiveOrImpalaPartitioned 'CURSOR' ParenthesizedColumnSpecificationList
   {
     parser.suggestKeywords(['BY']);
   }
 | HiveOrImpalaPartitioned 'BY' ParenthesizedColumnSpecificationList_EDIT
 | HiveOrImpalaPartitioned ParenthesizedColumnSpecificationList_EDIT
 | 'PARTITION' 'CURSOR'
   {
     parser.suggestKeywords(['BY']);
   }
 | 'PARTITION' 'BY' 'CURSOR'
   {
     parser.suggestKeywords(['HASH', 'RANGE']);
   }
 | 'PARTITION' 'BY' AnyRange ParenthesizedColumnList_EDIT
 | 'PARTITION' 'BY' AnyRange ParenthesizedColumnList ParenthesizedPartitionValuesList_EDIT
 | 'PARTITION' 'BY' '<impala>HASH' ParenthesizedColumnList_EDIT
 | 'PARTITION' 'BY' '<impala>HASH' ParenthesizedColumnList 'CURSOR'
   {
     parser.suggestKeywords(['PARTITIONS']);
   }
 | 'PARTITION' 'BY' '<impala>HASH' ParenthesizedColumnList_EDIT '<impala>PARTITIONS' UnsignedNumericLiteral
 ;

OptionalSortBy
 :
 | SortBy
 ;

SortBy
 : '<impala>SORT' 'BY' ParenthesizedColumnList
 ;

SortBy_EDIT
 : '<impala>SORT' 'CURSOR'
   {
     parser.suggestKeywords(['BY']);
   }
 | '<impala>SORT' 'BY' ParenthesizedColumnList_EDIT
 ;

ParenthesizedPartitionValuesList
 : '(' PartitionValueList ')'
 ;

ParenthesizedPartitionValuesList_EDIT
 : '(' 'CURSOR' RightParenthesisOrError
   {
     if (parser.isImpala()) {
       parser.suggestKeywords(['PARTITION']);
     }
   }
 |'(' PartitionValueList_EDIT RightParenthesisOrError
 ;

PartitionValueList
 : PartitionValue
 | PartitionValueList ',' PartitionValue
 ;

PartitionValueList_EDIT
 : PartitionValue_EDIT
 | PartitionValueList ',' 'CURSOR'
   {
     if (parser.isImpala()) {
       parser.suggestKeywords(['PARTITION']);
     }
   }
 | PartitionValueList ',' 'CURSOR' ',' PartitionValueList
   {
     if (parser.isImpala()) {
       parser.suggestKeywords(['PARTITION']);
     }
   }
 | PartitionValueList ',' PartitionValue_EDIT
 | PartitionValueList ',' PartitionValue_EDIT ',' PartitionValueList
 ;

PartitionValue
 : 'PARTITION' ValueExpression LessThanOrEqualTo 'VALUES' LessThanOrEqualTo ValueExpression
 | 'PARTITION' 'VALUES' LessThanOrEqualTo ValueExpression
 | 'PARTITION' ValueExpression LessThanOrEqualTo 'VALUES'
 | '<impala>PARTITION_VALUE' '=' ValueExpression
 ;

PartitionValue_EDIT
 : 'PARTITION' 'CURSOR'
   {
     if (parser.isImpala()) {
       parser.suggestKeywords(['VALUE', 'VALUES']);
     }
   }
 | '<impala>PARTITION_VALUE' 'CURSOR'
   {
     parser.suggestKeywords(['=']);
   }
 | '<impala>PARTITION_VALUE' '=' 'CURSOR'
   {
     parser.suggestFunctions();
   }
 | 'PARTITION' ValueExpression_EDIT
   {
     if ($2.endsWithLessThanOrEqual && parser.isImpala()) {
      parser.suggestKeywords(['VALUES']);
     }
   }
 | 'PARTITION' ValueExpression 'CURSOR'
   {
     if (parser.isImpala()) {
       parser.suggestKeywords(['<', '<=']);
     }
   }
 | 'PARTITION' ValueExpression LessThanOrEqualTo 'CURSOR'
   {
    if (parser.isImpala()) {
      parser.suggestKeywords(['VALUES']);
    }
   }
 | 'PARTITION' ValueExpression_EDIT LessThanOrEqualTo 'VALUES'
 | 'PARTITION' ValueExpression LessThanOrEqualTo 'VALUES' 'CURSOR'
   {
     if (parser.isImpala()) {
       parser.suggestKeywords(['<', '<=']);
     }
   }
 | 'PARTITION' ValueExpression LessThanOrEqualTo 'VALUES' LessThanOrEqualTo 'CURSOR'
   {
     if (parser.isImpala()) {
      parser.suggestFunctions();
     }
   }
 | 'PARTITION' ValueExpression LessThanOrEqualTo 'VALUES' LessThanOrEqualTo ValueExpression_EDIT
 | 'PARTITION' 'VALUES' 'CURSOR'
   {
     if (parser.isImpala()) {
       parser.suggestKeywords(['<', '<=']);
     }
   }
 | 'PARTITION' 'VALUES' LessThanOrEqualTo 'CURSOR'
   {
     if (parser.isImpala()) {
      parser.suggestFunctions();
     }
   }
 | 'PARTITION' 'VALUES' LessThanOrEqualTo ValueExpression_EDIT
 ;

LessThanOrEqualTo
 : '<'
 | 'COMPARISON_OPERATOR' // This is fine for autocompletion
 ;

OptionalClusteredBy
 :
 | ClusteredBy
 ;

ClusteredBy
 : '<hive>CLUSTERED' 'BY' ParenthesizedColumnList OptionalHiveSortedBy 'INTO' 'UNSIGNED_INTEGER' '<hive>BUCKETS'
 ;

ClusteredBy_EDIT
 : '<hive>CLUSTERED' 'CURSOR'
   {
     parser.suggestKeywords(['BY']);
   }
 | '<hive>CLUSTERED' 'BY' ParenthesizedColumnList_EDIT OptionalHiveSortedBy
 | '<hive>CLUSTERED' 'BY' ParenthesizedColumnList_EDIT OptionalHiveSortedBy 'INTO' 'UNSIGNED_INTEGER' '<hive>BUCKETS'
 | '<hive>CLUSTERED' 'BY' ParenthesizedColumnList OptionalHiveSortedBy 'CURSOR'
   {
     if (!$4) {
       parser.suggestKeywords([{ value: 'INTO', weight: 1 }, { value: 'SORTED BY', weight: 2 }]);
     } else {
       parser.suggestKeywords(['INTO']);
     }
   }
 | '<hive>CLUSTERED' 'BY' ParenthesizedColumnList OptionalHiveSortedBy 'INTO' 'UNSIGNED_INTEGER' 'CURSOR'
   {
     parser.suggestKeywords(['BUCKETS']);
   }
 | '<hive>CLUSTERED' 'BY' ParenthesizedColumnList OptionalHiveSortedBy_EDIT 'INTO' 'UNSIGNED_INTEGER' '<hive>BUCKETS'
 | '<hive>CLUSTERED' 'BY' ParenthesizedColumnList OptionalHiveSortedBy_EDIT
 ;

OptionalHiveSortedBy
 :
 | '<hive>SORTED' 'BY' ParenthesizedSortList
 ;

OptionalHiveSortedBy_EDIT
 : '<hive>SORTED' 'CURSOR'
   {
     parser.suggestKeywords(['BY']);
   }
 | '<hive>SORTED' 'BY' ParenthesizedSortList_EDIT
 ;

ParenthesizedSortList
 : '(' SortList ')'
 ;

ParenthesizedSortList_EDIT
 : '(' SortList_EDIT RightParenthesisOrError
 ;

SortList
 : SortIdentifier
 | SortList ',' SortIdentifier
 ;

SortList_EDIT
 : SortIdentifier_EDIT
 | SortIdentifier_EDIT ',' SortList
 | SortList ',' SortIdentifier_EDIT
 | SortList ',' SortIdentifier_EDIT ',' SortList
 ;

SortIdentifier
 : ColumnIdentifier OptionalAscOrDesc
 ;

SortIdentifier_EDIT
 : ColumnIdentifier OptionalAscOrDesc 'CURSOR'
   {
     parser.checkForKeywords($2);
   }
 | ColumnIdentifier_EDIT OptionalAscOrDesc
 | AnyCursor OptionalAscOrDesc
   {
     parser.suggestColumns();
   }
 ;

OptionalSkewedBy
 :
 | SkewedBy
 ;

SkewedBy
 : '<hive>SKEWED' 'BY' ParenthesizedColumnList ON ParenthesizedSkewedValueList  -> { suggestKeywords: ['STORED AS DIRECTORIES'] }
 | '<hive>SKEWED' 'BY' ParenthesizedColumnList ON ParenthesizedSkewedValueList '<hive>STORED_AS_DIRECTORIES' // Hack otherwise ambiguous with OptionalHiveStoredAsOrBy
 ;

SkewedBy_EDIT
 : '<hive>SKEWED' 'CURSOR'
   {
     parser.suggestKeywords(['BY']);
   }
 | '<hive>SKEWED' 'BY' ParenthesizedColumnList 'CURSOR'
   {
     parser.suggestKeywords(['ON']);
   }
 ;

ParenthesizedSkewedValueList
 : '(' SkewedValueList ')'
 ;

SkewedValueList
 : ParenthesizedSimpleValueList
 | SkewedValueList ',' ParenthesizedSimpleValueList
 ;

OptionalStoredAsOrBy
 :
 | StoredAsOrBy
 ;

StoredAsOrBy
 : StoredAs
 | 'ROW' HiveOrImpalaFormat HiveOrImpalaRowFormat OptionalWithSerdeproperties OptionalStoredAs
   {
     $$ = parser.mergeSuggestKeywords($3, $4)
   }
 | '<hive>STORED' 'BY' QuotedValue 
  {
    $$ = { storedBy: true }
  }
 ;

StoredAsOrBy_EDIT
 : HiveOrImpalaStored 'CURSOR'
   {
     if (parser.isHive()) {
       parser.suggestKeywords(['AS', 'BY']);
     } else {
       parser.suggestKeywords(['AS']);
     }
   }
 | StoredAs_EDIT
 | 'ROW' 'CURSOR'
   {
     parser.suggestKeywords(['FORMAT']);
   }
 | 'ROW' HiveOrImpalaFormat 'CURSOR'
   {
     if (parser.isHive()) {
       parser.suggestKeywords(['DELIMITED', 'SERDE']);
     } else {
       parser.suggestKeywords(['DELIMITED']);
     }
   }
 | 'ROW' HiveOrImpalaFormat HiveOrImpalaRowFormat_EDIT
 | 'ROW' HiveOrImpalaFormat HiveOrImpalaRowFormat HiveOrImpalaStored 'CURSOR'
   {
     parser.suggestKeywords(['AS']);
   }
 | 'ROW' HiveOrImpalaFormat HiveOrImpalaRowFormat StoredAs_EDIT
 ;

OptionalStoredAs
 :           -> { suggestKeywords: ['STORED AS'] }
 | StoredAs
 ;

StoredAs
 : HiveOrImpalaStored AnyAs FileFormat
 ;

StoredAs_EDIT
 : HiveOrImpalaStored AnyAs 'CURSOR'
   {
     parser.suggestFileFormats();
   }
 ;

FileFormat
 : '<hive>AVRO'
 | '<hive>INPUTFORMAT' QuotedValue '<hive>OUTPUTFORMAT' QuotedValue
 | '<hive>ORC'
 | '<hive>PARQUET'
 | '<hive>RCFILE'
 | '<hive>SEQUENCEFILE'
 | '<hive>TEXTFILE'
 | '<impala>AVRO'
 | '<impala>KUDU'
 | '<impala>ORC'
 | '<impala>PARQUET'
 | '<impala>RCFILE'
 | '<impala>SEQUENCEFILE'
 | '<impala>TEXTFILE'
 ;

HiveOrImpalaRowFormat
 : HiveRowFormat
 | ImpalaRowFormat
 ;

HiveOrImpalaRowFormat_EDIT
 : ImpalaRowFormat_EDIT
 | HiveRowFormat_EDIT
 ;

HiveRowFormat
 : HiveDelimitedRowFormat
 | '<hive>SERDE' QuotedValue
 ;

HiveRowFormat_EDIT
 : HiveDelimitedRowFormat_EDIT
 ;

HiveDelimitedRowFormat
 : '<hive>DELIMITED' OptionalFieldsTerminatedBy OptionalCollectionItemsTerminatedBy OptionalMapKeysTerminatedBy
   OptionalLinesTerminatedBy OptionalNullDefinedAs
   {
     if (!$2 && !$3 && !$4 && !$5 && !$6) {
       $$ = { suggestKeywords: [{ value: 'FIELDS TERMINATED BY', weight: 5 }, { value: 'COLLECTION ITEMS TERMINATED BY', weight: 4 }, { value: 'MAP KEYS TERMINATED BY', weight: 3 }, { value: 'LINES TERMINATED BY', weight: 2 }, { value: 'NULL DEFINED AS', weight: 1 }]};
     } else if ($2 && $2.suggestKeywords && !$3 && !$4 && !$5 && !$6) {
       $$ = { suggestKeywords: parser.createWeightedKeywords($2.suggestKeywords, 5).concat([{ value: 'COLLECTION ITEMS TERMINATED BY', weight: 4 }, { value: 'MAP KEYS TERMINATED BY', weight: 3 }, { value: 'LINES TERMINATED BY', weight: 2 }, { value: 'NULL DEFINED AS', weight: 1 }]) };
     } else if (!$3 && !$4 && !$5 && !$6) {
       $$ = { suggestKeywords: [{ value: 'COLLECTION ITEMS TERMINATED BY', weight: 4 }, { value: 'MAP KEYS TERMINATED BY', weight: 3 }, { value: 'LINES TERMINATED BY', weight: 2 }, { value: 'NULL DEFINED AS', weight: 1 }] };
     } else if (!$4 && !$5 && !$6) {
       $$ = { suggestKeywords: [{ value: 'MAP KEYS TERMINATED BY', weight: 3 }, { value: 'LINES TERMINATED BY', weight: 2 }, { value: 'NULL DEFINED AS', weight: 1 }] };
     } else if (!$5 && !$6) {
       $$ = { suggestKeywords: [{ value: 'LINES TERMINATED BY', weight: 2 }, { value: 'NULL DEFINED AS', weight: 1 }] };
     } else if (!$6) {
       $$ = { suggestKeywords: [{ value: 'NULL DEFINED AS', weight: 1 }] };
     }
   }
 ;

HiveDelimitedRowFormat_EDIT
 : '<hive>DELIMITED' OptionalFieldsTerminatedBy_EDIT OptionalCollectionItemsTerminatedBy OptionalMapKeysTerminatedBy
   OptionalLinesTerminatedBy OptionalNullDefinedAs
 | '<hive>DELIMITED' OptionalFieldsTerminatedBy OptionalCollectionItemsTerminatedBy_EDIT OptionalMapKeysTerminatedBy
   OptionalLinesTerminatedBy OptionalNullDefinedAs
 | '<hive>DELIMITED' OptionalFieldsTerminatedBy OptionalCollectionItemsTerminatedBy OptionalMapKeysTerminatedBy_EDIT
   OptionalLinesTerminatedBy OptionalNullDefinedAs
 | '<hive>DELIMITED' OptionalFieldsTerminatedBy OptionalCollectionItemsTerminatedBy OptionalMapKeysTerminatedBy
   OptionalLinesTerminatedBy_EDIT OptionalNullDefinedAs
 | '<hive>DELIMITED' OptionalFieldsTerminatedBy OptionalCollectionItemsTerminatedBy OptionalMapKeysTerminatedBy
   OptionalLinesTerminatedBy OptionalNullDefinedAs_EDIT
 ;

ImpalaRowFormat
 : '<impala>DELIMITED' OptionalFieldsTerminatedBy OptionalLinesTerminatedBy
   {
     if (!$2 && !$3) {
       $$ = { suggestKeywords: [{ value: 'FIELDS TERMINATED BY', weight: 2 }, { value: 'LINES TERMINATED BY', weight: 1 }] };
     } else if ($2 && $2.suggestKeywords && !$3) {
       $$ = { suggestKeywords: parser.createWeightedKeywords($2.suggestKeywords, 2).concat(['LINES TERMINATED BY']) };
     } else if (!$3) {
       $$ = { suggestKeywords: [{ value: 'LINES TERMINATED BY', weight: 1 }] };
     }
   }
 ;

ImpalaRowFormat_EDIT
 : '<impala>DELIMITED' OptionalFieldsTerminatedBy_EDIT OptionalLinesTerminatedBy
 | '<impala>DELIMITED' OptionalFieldsTerminatedBy OptionalLinesTerminatedBy_EDIT
 ;

OptionalFieldsTerminatedBy
 :
 | HiveOrImpalaFields HiveOrImpalaTerminated 'BY' SingleQuotedValue  -> { suggestKeywords: ['ESCAPED BY'] }
 | HiveOrImpalaFields HiveOrImpalaTerminated 'BY' SingleQuotedValue HiveOrImpalaEscaped 'BY' SingleQuotedValue
 ;

OptionalFieldsTerminatedBy_EDIT
 : HiveOrImpalaFields 'CURSOR'
   {
     parser.suggestKeywords(['TERMINATED BY']);
   }
 | HiveOrImpalaFields HiveOrImpalaTerminated 'CURSOR'
   {
     parser.suggestKeywords(['BY']);
   }
 | HiveOrImpalaFields HiveOrImpalaTerminated 'BY' SingleQuotedValue 'ESCAPED' 'CURSOR'
   {
     parser.suggestKeywords(['BY']);
   }
 ;

OptionalCollectionItemsTerminatedBy
 :
 | '<hive>COLLECTION' '<hive>ITEMS' '<hive>TERMINATED' 'BY' SingleQuotedValue
 ;

OptionalCollectionItemsTerminatedBy_EDIT
 : '<hive>COLLECTION' 'CURSOR'
   {
     parser.suggestKeywords(['ITEMS TERMINATED BY']);
   }
 | '<hive>COLLECTION' '<hive>ITEMS' 'CURSOR'
   {
     parser.suggestKeywords(['TERMINATED BY']);
   }
 | '<hive>COLLECTION' '<hive>ITEMS' '<hive>TERMINATED' 'CURSOR'
   {
     parser.suggestKeywords(['BY']);
   }
 ;

OptionalMapKeysTerminatedBy
 :
 | 'MAP' '<hive>KEYS' '<hive>TERMINATED' 'BY' SingleQuotedValue
 ;

OptionalMapKeysTerminatedBy_EDIT
 : 'MAP' 'CURSOR'
   {
     parser.suggestKeywords(['KEYS TERMINATED BY']);
   }
 | 'MAP' '<hive>KEYS' 'CURSOR'
   {
     parser.suggestKeywords(['TERMINATED BY']);
   }
 | 'MAP' '<hive>KEYS' '<hive>TERMINATED' 'CURSOR'
   {
     parser.suggestKeywords(['BY']);
   }
 ;

OptionalLinesTerminatedBy
 :
 | HiveOrImpalaLines HiveOrImpalaTerminated 'BY' SingleQuotedValue
 ;

OptionalLinesTerminatedBy_EDIT
 : HiveOrImpalaLines 'CURSOR'
   {
     parser.suggestKeywords(['TERMINATED BY']);
   }
 | HiveOrImpalaLines HiveOrImpalaTerminated 'CURSOR'
   {
     parser.suggestKeywords(['BY']);
   }
 ;

OptionalNullDefinedAs
 :
 | 'NULL' '<hive>DEFINED' '<hive>AS' SingleQuotedValue
 ;

OptionalNullDefinedAs_EDIT
 : 'NULL' 'CURSOR'
   {
     parser.suggestKeywords(['DEFINED AS']);
   }
 | 'NULL' '<hive>DEFINED' 'CURSOR'
   {
     parser.suggestKeywords(['AS']);
   }
 ;

OptionalWithSerdeproperties
 :
 | WithSerdeproperties
 ;

WithSerdeproperties
 : 'WITH' '<hive>SERDEPROPERTIES' ParenthesizedPropertyAssignmentList
 | 'WITH' '<impala>SERDEPROPERTIES' ParenthesizedPropertyAssignmentList
 ;

WithSerdeproperties_EDIT
 : 'WITH' 'CURSOR'
   {
     parser.suggestKeywords(['SERDEPROPERTIES']);
   }
 | 'WITH' 'CURSOR' ParenthesizedPropertyAssignmentList
   {
     parser.suggestKeywords(['SERDEPROPERTIES']);
   }
 ;

OptionalTblproperties
 :
 | TblProperties
 ;
 
TblProperties
 : HiveOrImpalaTblproperties ParenthesizedPropertyAssignmentList
 ;

OptionalHiveTblproperties
 :
 | '<hive>TBLPROPERTIES' ParenthesizedPropertyAssignmentList
 ;

OptionalAsSelectStatement
 :
 | AnyAs CommitLocations QuerySpecification
 ;

OptionalAsSelectStatement_EDIT
 : AnyAs CommitLocations 'CURSOR'
   {
     parser.suggestKeywords(['SELECT']);
   }
 | AnyAs CommitLocations QuerySpecification_EDIT
 ;

CommitLocations
 : /* empty */
   {
     parser.commitLocations();
   }
 ;

ViewDefinition
 : AnyCreate AnyView OptionalIfNotExists SchemaQualifiedIdentifier OptionalParenthesizedViewColumnList OptionalComment OptionalHiveTblproperties AnyAs QuerySpecification
 ;

ViewDefinition_EDIT
 : AnyCreate AnyView OptionalIfNotExists 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['IF NOT EXISTS']);
     }
     parser.suggestDatabases({ appendDot: true });
   }
 | AnyCreate AnyView OptionalIfNotExists 'CURSOR' SchemaQualifiedIdentifier OptionalParenthesizedViewColumnList OptionalComment OptionalHiveTblproperties AnyAs QuerySpecification
   {
     if (!$3) {
       parser.suggestKeywords(['IF NOT EXISTS']);
     }
   }
 | AnyCreate AnyView OptionalIfNotExists_EDIT
 | AnyCreate AnyView OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedViewColumnList_EDIT OptionalComment OptionalHiveTblproperties
 | AnyCreate AnyView OptionalIfNotExists SchemaQualifiedIdentifier OptionalParenthesizedViewColumnList OptionalComment OptionalHiveTblproperties 'CURSOR'
   {
     var keywords = [{value: 'AS', weight: 1 }];
     if (!$7) {
       if (parser.isHive()) {
         keywords.push({ value: 'TBLPROPERTIES', weight: 2 });
       }
       if (!$6) {
         keywords.push({ value: 'COMMENT', weight: 3 });
       }
     }
     parser.suggestKeywords(keywords);
   }
 | AnyCreate AnyView OptionalIfNotExists SchemaQualifiedIdentifier OptionalParenthesizedViewColumnList OptionalComment OptionalHiveTblproperties AnyAs 'CURSOR'
   {
     parser.suggestKeywords(['SELECT']);
   }
 | AnyCreate AnyView OptionalIfNotExists SchemaQualifiedIdentifier OptionalParenthesizedViewColumnList OptionalComment OptionalHiveTblproperties AnyAs QuerySpecification_EDIT
 | AnyCreate AnyView OptionalIfNotExists SchemaQualifiedIdentifier_EDIT OptionalParenthesizedViewColumnList OptionalComment OptionalHiveTblproperties AnyAs QuerySpecification
 ;

FunctionDefinition
 : ImpalaFunctionDefinition
 | ImpalaAggregateFunctionDefinition
 | HiveFunctionDefinition
 | HiveTemporaryFunction
 ;

FunctionDefinition_EDIT
 : ImpalaFunctionDefinition_EDIT
 | ImpalaAggregateFunctionDefinition_EDIT
 | HiveFunctionDefinition_EDIT
 | HiveTemporaryFunction_EDIT
 ;

ImpalaFunctionDefinition
 : AnyCreate '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns HdfsLocation ImpalaSymbol
 ;

ImpalaFunctionDefinition_EDIT
 : AnyCreate '<impala>FUNCTION' OptionalIfNotExists 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['IF NOT EXISTS']);
     }
     parser.suggestDatabases({ appendDot: true });
   }
 | AnyCreate '<impala>FUNCTION' OptionalIfNotExists 'CURSOR' SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns HdfsLocation ImpalaSymbol
   {
     if (!$3) {
       parser.suggestKeywords(['IF NOT EXISTS']);
     }
   }
 | AnyCreate '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList 'CURSOR'
   {
     parser.suggestKeywords(['RETURNS']);
   }
 | AnyCreate '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns 'CURSOR'
   {
     parser.suggestKeywords(['LOCATION']);
   }
 | AnyCreate '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns HdfsLocation 'CURSOR'
   {
     parser.suggestKeywords(['SYMBOL']);
   }
 | AnyCreate '<impala>FUNCTION' OptionalIfNotExists_EDIT
 | AnyCreate '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList_EDIT
 | AnyCreate '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns_EDIT
 | AnyCreate '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns HdfsLocation_EDIT
 | AnyCreate '<impala>FUNCTION' OptionalIfNotExists_EDIT SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns HdfsLocation ImpalaSymbol
 | AnyCreate '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList_EDIT ImpalaReturns HdfsLocation ImpalaSymbol
 | AnyCreate '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns_EDIT HdfsLocation ImpalaSymbol
 | AnyCreate '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns HdfsLocation_EDIT ImpalaSymbol
 ;

ImpalaAggregateFunctionDefinition
 : AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   HdfsLocation OptionalImpalaInitFn ImpalaUpdateFn ImpalaMergeFn OptionalImpalaPrepareFn OptionalImpalaCloseFn OptionalImpalaSerializeFn OptionalImpalaFinalizeFn OptionalIntermediate
 ;

ImpalaAggregateFunctionDefinition_EDIT
 : AnyCreate '<impala>AGGREGATE' 'CURSOR'
   {
     parser.suggestKeywords(['FUNCTION']);
   }
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists 'CURSOR' SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   HdfsLocation OptionalImpalaInitFn ImpalaUpdateFn ImpalaMergeFn OptionalImpalaPrepareFn OptionalImpalaCloseFn OptionalImpalaSerializeFn OptionalImpalaFinalizeFn OptionalIntermediate
   {
     if (!$4) {
       parser.suggestKeywords(['IF NOT EXISTS']);
     }
   }
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists 'CURSOR'
   {
     if (!$4) {
       parser.suggestKeywords(['IF NOT EXISTS']);
     }
     parser.suggestDatabases({ appendDot: true });
   }
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists_EDIT
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists_EDIT SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   HdfsLocation OptionalImpalaInitFn ImpalaUpdateFn ImpalaMergeFn OptionalImpalaPrepareFn OptionalImpalaCloseFn OptionalImpalaSerializeFn OptionalImpalaFinalizeFn OptionalIntermediate
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList_EDIT
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList_EDIT ImpalaReturns
   HdfsLocation OptionalImpalaInitFn ImpalaUpdateFn ImpalaMergeFn OptionalImpalaPrepareFn OptionalImpalaCloseFn OptionalImpalaSerializeFn OptionalImpalaFinalizeFn OptionalIntermediate
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList 'CURSOR'
   {
     parser.suggestKeywords(['RETURNS']);
   }
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   'CURSOR'
   {
     parser.suggestKeywords(['LOCATION']);
   }
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   HdfsLocation OptionalImpalaInitFn 'CURSOR'
   {
     if (!$9) {
       parser.suggestKeywords([{value: 'INIT_FN', weight: 2 }, {value: 'UPDATE_FN', weight: 1 }]);
     } else {
       parser.suggestKeywords([{value: 'UPDATE_FN', weight: 1 }]);
     }
   }
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   HdfsLocation OptionalImpalaInitFn ImpalaUpdateFn 'CURSOR'
   {
     parser.suggestKeywords(['MERGE_FN']);
   }
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   HdfsLocation OptionalImpalaInitFn ImpalaUpdateFn ImpalaMergeFn OptionalImpalaPrepareFn OptionalImpalaCloseFn OptionalImpalaSerializeFn OptionalImpalaFinalizeFn OptionalIntermediate 'CURSOR'
   {
     if (!$12 && !$13 && !$14 && !$15 && !$16) {
       parser.suggestKeywords([{value: 'PREPARE_FN', weight: 5 }, {value: 'CLOSE_FN', weight: 4 }, {value: 'SERIALIZE_FN', weight: 3 }, {value: 'FINALIZE_FN', weight: 2 }, {value: 'INTERMEDIATE', weight: 1 }]);
     } else if ($12 && !$13 && !$14 && !$15 && !$16) {
       parser.suggestKeywords([{value: 'CLOSE_FN', weight: 4 }, {value: 'SERIALIZE_FN', weight: 3 }, {value: 'FINALIZE_FN', weight: 2 }, {value: 'INTERMEDIATE', weight: 1 }]);
     } else if ($13 && !$14 && !$15 && !$16) {
       parser.suggestKeywords([{value: 'SERIALIZE_FN', weight: 3 }, {value: 'FINALIZE_FN', weight: 2 }, {value: 'INTERMEDIATE', weight: 1 }]);
     } else if ($14 && !$15 && !$16) {
       parser.suggestKeywords([{value: 'FINALIZE_FN', weight: 2 }, {value: 'INTERMEDIATE', weight: 1 }]);
     } else if ($15 && !$16) {
       parser.suggestKeywords([{value: 'INTERMEDIATE', weight: 1 }]);
     }
   }
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns_EDIT
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   HdfsLocation_EDIT OptionalImpalaInitFn
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   HdfsLocation OptionalImpalaInitFn_EDIT
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   HdfsLocation OptionalImpalaInitFn ImpalaUpdateFn_EDIT
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   HdfsLocation OptionalImpalaInitFn ImpalaUpdateFn
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   HdfsLocation OptionalImpalaInitFn ImpalaUpdateFn ImpalaMergeFn_EDIT OptionalImpalaPrepareFn OptionalImpalaCloseFn OptionalImpalaSerializeFn OptionalImpalaFinalizeFn OptionalIntermediate
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   HdfsLocation OptionalImpalaInitFn ImpalaUpdateFn ImpalaMergeFn OptionalImpalaPrepareFn_EDIT OptionalImpalaCloseFn OptionalImpalaSerializeFn OptionalImpalaFinalizeFn OptionalIntermediate
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   HdfsLocation OptionalImpalaInitFn ImpalaUpdateFn ImpalaMergeFn OptionalImpalaPrepareFn OptionalImpalaCloseFn_EDIT  OptionalImpalaSerializeFn OptionalImpalaFinalizeFn OptionalIntermediate
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   HdfsLocation OptionalImpalaInitFn ImpalaUpdateFn ImpalaMergeFn OptionalImpalaPrepareFn OptionalImpalaCloseFn OptionalImpalaSerializeFn_EDIT OptionalImpalaFinalizeFn OptionalIntermediate
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   HdfsLocation OptionalImpalaInitFn ImpalaUpdateFn ImpalaMergeFn OptionalImpalaPrepareFn OptionalImpalaCloseFn OptionalImpalaSerializeFn OptionalImpalaFinalizeFn_EDIT OptionalIntermediate
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   HdfsLocation OptionalImpalaInitFn ImpalaUpdateFn ImpalaMergeFn OptionalImpalaPrepareFn OptionalImpalaCloseFn OptionalImpalaSerializeFn OptionalImpalaFinalizeFn Intermediate_EDIT
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns_EDIT
   HdfsLocation OptionalImpalaInitFn ImpalaUpdateFn ImpalaMergeFn OptionalImpalaPrepareFn OptionalImpalaCloseFn OptionalImpalaSerializeFn OptionalImpalaFinalizeFn OptionalIntermediate
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   HdfsLocation_EDIT OptionalImpalaInitFn ImpalaUpdateFn ImpalaMergeFn OptionalImpalaPrepareFn OptionalImpalaCloseFn OptionalImpalaSerializeFn OptionalImpalaFinalizeFn OptionalIntermediate
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   HdfsLocation OptionalImpalaInitFn_EDIT ImpalaUpdateFn ImpalaMergeFn OptionalImpalaPrepareFn OptionalImpalaCloseFn OptionalImpalaSerializeFn OptionalImpalaFinalizeFn OptionalIntermediate
 | AnyCreate '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfNotExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList ImpalaReturns
   HdfsLocation OptionalImpalaInitFn ImpalaUpdateFn_EDIT ImpalaMergeFn OptionalImpalaPrepareFn OptionalImpalaCloseFn OptionalImpalaSerializeFn OptionalImpalaFinalizeFn OptionalIntermediate
 ;

HiveFunctionDefinition
 : AnyCreate '<hive>FUNCTION' SchemaQualifiedIdentifier '<hive>AS' SingleQuotedValue OptionalHiveUsing
 ;

HiveFunctionDefinition_EDIT
 : AnyCreate '<hive>FUNCTION' SchemaQualifiedIdentifier 'CURSOR'
   {
     parser.suggestKeywords(['AS']);
   }
 | AnyCreate '<hive>FUNCTION' SchemaQualifiedIdentifier '<hive>AS' SingleQuotedValue OptionalHiveUsing_EDIT
 | AnyCreate '<hive>FUNCTION' SchemaQualifiedIdentifier '<hive>AS' SingleQuotedValue OptionalHiveUsing 'CURSOR'
   {
     if (!$6) {
       parser.suggestKeywords(['USING']);
     } else {
       parser.suggestKeywords(['ARCHIVE', 'FILE', 'JAR']);
     }
   }
 ;

HiveTemporaryFunction
 : AnyCreate '<hive>TEMPORARY' '<hive>FUNCTION' RegularIdentifier '<hive>AS' SingleQuotedValue
 ;

HiveTemporaryFunction_EDIT
 : AnyCreate '<hive>TEMPORARY' '<hive>FUNCTION' RegularIdentifier 'CURSOR'
   {
     parser.suggestKeywords(['AS']);
   }
 ;

ParenthesizedImpalaArgumentList
 : '(' ')'
 | '(' ImpalaArgumentList OptionalVariableArguments')'
 ;

ParenthesizedImpalaArgumentList_EDIT
 : '(' ImpalaArgumentList_EDIT RightParenthesisOrError
   {
     parser.suggestKeywords(parser.getTypeKeywords());
   }
 | '(' ImpalaArgumentList 'CURSOR' RightParenthesisOrError
   {
     parser.suggestKeywords(['...']);
   }
 ;

ImpalaArgumentList
 : PrimitiveType
 | ImpalaArgumentList ',' PrimitiveType
 ;

ImpalaArgumentList_EDIT
 : AnyCursor
 | ImpalaArgumentList ',' AnyCursor
 | AnyCursor ',' ImpalaArgumentList
 | ImpalaArgumentList ',' AnyCursor ',' ImpalaArgumentList
 ;

OptionalVariableArguments
 :
 | '<impala>...'
 ;

ImpalaReturns
 : '<impala>RETURNS' PrimitiveType
 ;

ImpalaReturns_EDIT
 : '<impala>RETURNS' 'CURSOR'
   {
     parser.suggestKeywords(parser.getTypeKeywords());
   }
 ;

ImpalaSymbol
 : '<impala>SYMBOL' '=' SingleQuotedValue
 ;

OptionalImpalaInitFn
 :
 | '<impala>INIT_FN' '=' FunctionReference
 ;

OptionalImpalaInitFn_EDIT
 : '<impala>INIT_FN' '=' FunctionReference_EDIT
 ;

ImpalaUpdateFn
 : '<impala>UPDATE_FN' '=' FunctionReference
 ;

ImpalaUpdateFn_EDIT
 : '<impala>UPDATE_FN' '=' FunctionReference_EDIT
 ;

ImpalaMergeFn
 : '<impala>MERGE_FN' '=' FunctionReference
 ;

ImpalaMergeFn_EDIT
 : '<impala>MERGE_FN' '=' FunctionReference_EDIT
 ;

OptionalImpalaPrepareFn
 :
 | '<impala>PREPARE_FN' '=' FunctionReference
 ;

OptionalImpalaPrepareFn_EDIT
 : '<impala>PREPARE_FN' '=' FunctionReference_EDIT
 ;

OptionalImpalaCloseFn
 :
 | '<impala>CLOSE_FN' '=' FunctionReference
 ;

OptionalImpalaCloseFn_EDIT
 : '<impala>CLOSE_FN' '=' FunctionReference_EDIT
 ;

OptionalImpalaSerializeFn
 :
 | '<impala>SERIALIZE_FN' '=' FunctionReference
 ;

OptionalImpalaSerializeFn_EDIT
 : '<impala>SERIALIZE_FN' '=' FunctionReference_EDIT
 ;

OptionalImpalaFinalizeFn
 :
 | '<impala>FINALIZE_FN' '=' FunctionReference
 ;

OptionalImpalaFinalizeFn_EDIT
 : '<impala>FINALIZE_FN' '=' FunctionReference_EDIT
 ;

OptionalIntermediate
 :
 | '<impala>INTERMEDIATE' PrimitiveType
 ;

Intermediate_EDIT
 : '<impala>INTERMEDIATE' 'CURSOR'
   {
     parser.suggestKeywords(parser.getTypeKeywords());
   }
 ;

FunctionReference
 : SingleQuotedValue
 ;

FunctionReference_EDIT
 : SingleQuotedValue_EDIT
   {
     parser.suggestFunctions();
     parser.suggestAggregateFunctions();
     parser.suggestAnalyticFunctions();
   }
 ;

OptionalHiveUsing
 :
 | '<hive>USING' OneOrMoreFunctionResources
 ;

OptionalHiveUsing_EDIT
 : '<hive>USING' 'CURSOR'
   {
     parser.suggestKeywords(['ARCHIVE', 'FILE', 'JAR']);
   }
 ;

OneOrMoreFunctionResources
 : FunctionResource
 | OneOrMoreFunctionResources ',' FunctionResource
 ;

FunctionResource
 : FunctionResourceType SingleQuotedValue
 ;

FunctionResourceType
 : '<hive>ARCHIVE'
 | '<hive>FILE'
 | '<hive>JAR'
 ;

AnyView
 : '<hive>VIEW'
 | 'VIEW'
 ;

OptionalParenthesizedViewColumnList
 :
 | ParenthesizedViewColumnList
 ;

ParenthesizedViewColumnList
 : '(' ViewColumnList ')'
 ;

ParenthesizedViewColumnList_EDIT
 : '(' ViewColumnList_EDIT RightParenthesisOrError
   {
     if (!$2) {
       parser.suggestKeywords(['COMMENT']);
     }
   }
 ;

ViewColumnList
 : ColumnReference OptionalComment
 | ViewColumnList ',' ColumnReference OptionalComment
 ;

ViewColumnList_EDIT
 : ColumnReference OptionalComment 'CURSOR'                                        --> $2
 | ColumnReference OptionalComment 'CURSOR' ',' ViewColumnList                     --> $2
 | ViewColumnList ',' ColumnReference OptionalComment 'CURSOR'                     --> $4
 | ViewColumnList ',' ColumnReference OptionalComment 'CURSOR' ',' ViewColumnList  --> $4
 ;

RoleDefinition
 : AnyCreate AnyRole RegularIdentifier
 ;

AnyRole
 : '<hive>ROLE'
 | '<impala>ROLE'
 | 'ROLE'
 ;

IndexDefinition
 : AnyCreate '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' '<hive>TABLE' ExistingTable ParenthesizedIndexColumnList
   '<hive>AS' IndexType OptionalWithDeferredRebuild OptionalIdxProperties OptionalInTable OptionalStoredAsOrBy OptionalHdfsLocation
   OptionalTblproperties OptionalComment
 ;

ExistingTable
 : SchemaQualifiedTableIdentifier
   {
     parser.addTablePrimary($1);
   }
 ;

ExistingTable_EDIT
 : SchemaQualifiedTableIdentifier_EDIT
 ;

IndexDefinition_EDIT
 : AnyCreate '<hive>INDEX' RegularOrBacktickedIdentifier 'CURSOR'
   {
     parser.suggestKeywords(['ON TABLE']);
   }
 | AnyCreate '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' 'CURSOR'
   {
     parser.suggestKeywords(['TABLE']);
   }
 | AnyCreate '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' '<hive>TABLE' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | AnyCreate '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' '<hive>TABLE' ExistingTable_EDIT
 | AnyCreate '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' '<hive>TABLE' ExistingTable ParenthesizedIndexColumnList_EDIT
 | AnyCreate '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' '<hive>TABLE' ExistingTable ParenthesizedIndexColumnList 'CURSOR'
   {
     parser.suggestKeywords(['AS']);
   }
 | AnyCreate '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' '<hive>TABLE' ExistingTable ParenthesizedIndexColumnList
   '<hive>AS' 'CURSOR'
   {
     parser.suggestKeywords(['\'BITMAP\'', '\'COMPACT\'']);
   }
 | AnyCreate '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' '<hive>TABLE' ExistingTable ParenthesizedIndexColumnList
   '<hive>AS' IndexType_EDIT OptionalWithDeferredRebuild OptionalIdxProperties OptionalInTable OptionalStoredAsOrBy OptionalHdfsLocation
   OptionalTblproperties OptionalComment
 | AnyCreate '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' '<hive>TABLE' ExistingTable_EDIT ParenthesizedIndexColumnList
   '<hive>AS' IndexType OptionalWithDeferredRebuild OptionalIdxProperties OptionalInTable OptionalStoredAsOrBy OptionalHdfsLocation
   OptionalTblproperties OptionalComment
 | AnyCreate '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' '<hive>TABLE' ExistingTable ParenthesizedIndexColumnList_EDIT
   '<hive>AS' IndexType OptionalWithDeferredRebuild OptionalIdxProperties OptionalInTable OptionalStoredAsOrBy OptionalHdfsLocation
   OptionalTblproperties OptionalComment
 | AnyCreate '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' '<hive>TABLE' ExistingTable ParenthesizedIndexColumnList
   '<hive>AS' IndexType OptionalWithDeferredRebuild_EDIT OptionalIdxProperties OptionalInTable OptionalStoredAsOrBy OptionalHdfsLocation
   OptionalTblproperties OptionalComment
 | AnyCreate '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' '<hive>TABLE' ExistingTable ParenthesizedIndexColumnList
   '<hive>AS' IndexType OptionalWithDeferredRebuild OptionalIdxProperties OptionalInTable_EDIT OptionalStoredAsOrBy OptionalHdfsLocation
   OptionalTblproperties OptionalComment
 | AnyCreate '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' '<hive>TABLE' ExistingTable ParenthesizedIndexColumnList
   '<hive>AS' IndexType OptionalWithDeferredRebuild OptionalIdxProperties OptionalInTable StoredAsOrBy_EDIT OptionalHdfsLocation
   OptionalTblproperties OptionalComment
 | AnyCreate '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' '<hive>TABLE' ExistingTable ParenthesizedIndexColumnList
   '<hive>AS' IndexType OptionalWithDeferredRebuild OptionalIdxProperties OptionalInTable OptionalStoredAsOrBy HdfsLocation_EDIT
   OptionalTblproperties OptionalComment
 | AnyCreate '<hive>INDEX' RegularOrBacktickedIdentifier 'ON' '<hive>TABLE' ExistingTable ParenthesizedIndexColumnList
   '<hive>AS' IndexType OptionalWithDeferredRebuild OptionalIdxProperties OptionalInTable OptionalStoredAsOrBy OptionalHdfsLocation
   OptionalTblproperties OptionalComment 'CURSOR'
   {
     if (!$10 && !$11 && !$12 && !$13 && !$14 && !$15 && !$16) {
       parser.suggestKeywords([{ value: 'WITH DEFERRED REBUILD', weight: 7 }, { value: 'IDXPROPERTIES', weight: 6 }, { value: 'IN TABLE', weight: 5 }, { value: 'ROW FORMAT', weight: 4 }, { value: 'STORED AS', weight: 4 }, { value: 'STORED BY', weight: 4 }, { value: 'LOCATION', weight: 3 }, { value: 'TBLPROPERTIES', weight: 2 }, { value: 'COMMENT', weight: 1 }]);
     } else if (!$11 && !$12 && !$13 && !$14 && !$15 && !$16) {
       parser.suggestKeywords([{ value: 'IDXPROPERTIES', weight: 6 }, { value: 'IN TABLE', weight: 5 }, { value: 'ROW FORMAT', weight: 4 }, { value: 'STORED AS', weight: 4 }, { value: 'STORED BY', weight: 4 }, { value: 'LOCATION', weight: 3 }, { value: 'TBLPROPERTIES', weight: 2 }, { value: 'COMMENT', weight: 1 }]);
     } else if (!$12 && !$13 && !$14 && !$15 && !$16) {
       parser.suggestKeywords([{ value: 'IN TABLE', weight: 5 }, { value: 'ROW FORMAT', weight: 4 }, { value: 'STORED AS', weight: 4 }, { value: 'STORED BY', weight: 4 }, { value: 'LOCATION', weight: 3 }, { value: 'TBLPROPERTIES', weight: 2 }, { value: 'COMMENT', weight: 1 }]);
     } else if (!$13 && !$14 && !$15 && !$16) {
       parser.suggestKeywords([{ value: 'ROW FORMAT', weight: 4 }, { value: 'STORED AS', weight: 4 }, { value: 'STORED BY', weight: 4 }, { value: 'LOCATION', weight: 3 }, { value: 'TBLPROPERTIES', weight: 2 }, { value: 'COMMENT', weight: 1 }]);
     } else if ($13 && $13.suggestKeywords && !$14 && !$15 && !$16) {
       parser.suggestKeywords(parser.createWeightedKeywords($13.suggestKeywords, 4).concat([{ value: 'LOCATION', weight: 3 }, { value: 'TBLPROPERTIES', weight: 2 }, { value: 'COMMENT', weight: 1 }]));
     } else if (!$14 && !$15 && !$16) {
       parser.suggestKeywords([{ value: 'LOCATION', weight: 3 }, { value: 'TBLPROPERTIES', weight: 2 }, { value: 'COMMENT', weight: 1 }]);
     } else if (!$15 && !$16) {
       parser.suggestKeywords([{ value: 'TBLPROPERTIES', weight: 2 }, { value: 'COMMENT', weight: 1 }]);
     } else if (!$16) {
       parser.suggestKeywords([{ value: 'COMMENT', weight: 1 }]);
     }
   }
 ;

IndexType
 : QuotedValue
 ;

IndexType_EDIT
 : QuotedValue_EDIT
   {
     parser.suggestKeywords(['\'BITMAP\'', '\'COMPACT\'']);
   }
 ;

OptionalWithDeferredRebuild
 :
 | 'WITH' '<hive>DEFERRED' '<hive>REBUILD'
 ;

OptionalWithDeferredRebuild_EDIT
 : 'WITH' 'CURSOR'
   {
     parser.suggestKeywords(['DEFERRED REBUILD']);
   }
 | 'WITH' '<hive>DEFERRED' 'CURSOR'
   {
     parser.suggestKeywords(['REBUILD']);
   }
 ;

OptionalIdxProperties
 :
 | '<hive>IDXPROPERTIES' ParenthesizedPropertyAssignmentList
 ;

OptionalInTable
 :
 | 'IN' '<hive>TABLE' SchemaQualifiedTableIdentifier
 ;

OptionalInTable_EDIT
 : 'IN' 'CURSOR'
   {
     parser.suggestKeywords(['TABLE']);
   }
 | 'IN' '<hive>TABLE' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | 'IN' '<hive>TABLE' SchemaQualifiedTableIdentifier_EDIT
 ;


ParenthesizedIndexColumnList
 : '(' IndexColumnList ')'
 ;

ParenthesizedIndexColumnList_EDIT
 : '(' IndexColumnList_EDIT RightParenthesisOrError
   {
     parser.suggestColumns();
   }
 ;

IndexColumnList
 : ColumnReference
 | IndexColumnList ',' ColumnReference
 ;

IndexColumnList_EDIT
 : AnyCursor
 | IndexColumnList ',' AnyCursor
 | AnyCursor ',' IndexColumnList
 | IndexColumnList ',' AnyCursor ',' IndexColumnList
 ;

MacroDefinition
 : AnyCreate '<hive>TEMPORARY' '<hive>MACRO' RegularIdentifier MacroArguments ValueExpression
 ;

MacroDefinition_EDIT
 : AnyCreate '<hive>TEMPORARY' '<hive>MACRO' RegularIdentifier MacroArguments_EDIT
 | AnyCreate '<hive>TEMPORARY' '<hive>MACRO' RegularIdentifier MacroArguments_EDIT ValueExpression
 | AnyCreate '<hive>TEMPORARY' '<hive>MACRO' RegularIdentifier MacroArguments 'CURSOR'
   {
     parser.suggestFunctions();
   }
 | AnyCreate '<hive>TEMPORARY' '<hive>MACRO' RegularIdentifier MacroArguments ValueExpression_EDIT
 ;

MacroArguments
 : '(' ')'
 | '(' MacroArgumentList ')'
 ;

MacroArguments_EDIT
 : '(' MacroArgumentList_EDIT RightParenthesisOrError
 ;


MacroArgumentList
 : MacroArgument
 | MacroArgumentList ',' MacroArgument
 ;

MacroArgumentList_EDIT
 : MacroArgument_EDIT
 | MacroArgumentList ',' MacroArgument_EDIT
 | MacroArgument_EDIT ',' MacroArgumentList
 | MacroArgumentList ',' MacroArgument_EDIT ',' MacroArgumentList
 ;

MacroArgument
 : RegularIdentifier ColumnDataType
 ;

MacroArgument_EDIT
 : RegularIdentifier 'CURSOR'
   {
     parser.suggestKeywords(parser.getColumnDataTypeKeywords());
   }
 | RegularIdentifier ColumnDataType_EDIT
 ;// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

DataDefinition
 : DropStatement
 | HiveAbortStatement
 ;

DataDefinition_EDIT
 : DropStatement_EDIT
 | HiveAbortStatement_EDIT
 ;

DataManipulation
 : HiveDeleteStatement
 | ImpalaDeleteStatement
 ;

DataManipulation_EDIT
 : HiveDeleteStatement_EDIT
 | ImpalaDeleteStatement_EDIT
 ;

DropStatement
 : DropDatabaseStatement
 | DropFunctionStatement
 | DropRoleStatement
 | DropStatsStatement
 | DropTableStatement
 | DropIndexStatement
 | DropMacroStatement
 | DropViewStatement
 | TruncateTableStatement
 ;

DropStatement_EDIT
 : DropDatabaseStatement_EDIT
 | DropFunctionStatement_EDIT
 | DropStatsStatement_EDIT
 | DropTableStatement_EDIT
 | DropIndexStatement_EDIT
 | DropMacroStatement_EDIT
 | DropViewStatement_EDIT
 | TruncateTableStatement_EDIT
 | 'DROP' 'CURSOR'
   {
     if (parser.isHive()) {
       parser.suggestKeywords(['DATABASE', 'FUNCTION', 'INDEX', 'ROLE', 'SCHEMA', 'TABLE', 'TEMPORARY FUNCTION', 'TEMPORARY MACRO', 'VIEW']);
     } else if (parser.isImpala()) {
       parser.suggestKeywords(['AGGREGATE FUNCTION', 'DATABASE', 'FUNCTION', 'INCREMENTAL STATS', 'ROLE', 'SCHEMA', 'STATS', 'TABLE', 'VIEW']);
     } else {
       parser.suggestKeywords(['ROLE', 'SCHEMA', 'TABLE', 'VIEW']);
     }
   }
 ;

DropDatabaseStatement
 : 'DROP' DatabaseOrSchema OptionalIfExists RegularOrBacktickedIdentifier OptionalCascadeOrRestrict
 ;

DropDatabaseStatement_EDIT
 : 'DROP' DatabaseOrSchema OptionalIfExists
 | 'DROP' DatabaseOrSchema OptionalIfExists_EDIT
 | 'DROP' DatabaseOrSchema OptionalIfExists 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['IF EXISTS']);
     }
     parser.suggestDatabases();
   }
 | 'DROP' DatabaseOrSchema OptionalIfExists RegularOrBacktickedIdentifier 'CURSOR'
   {
     if (parser.isHive() || parser.isImpala()) {
       parser.suggestKeywords(['CASCADE', 'RESTRICT']);
     }
   }
 | 'DROP' DatabaseOrSchema OptionalIfExists_EDIT RegularOrBacktickedIdentifier OptionalCascadeOrRestrict
 | 'DROP' DatabaseOrSchema OptionalIfExists 'CURSOR' RegularOrBacktickedIdentifier OptionalCascadeOrRestrict
   {
     if (!$3) {
       parser.suggestKeywords(['IF EXISTS']);
     }
   }
 ;

DropFunctionStatement
 : DropImpalaFunction
 | DropHiveFunction
 ;

DropFunctionStatement_EDIT
 : DropImpalaFunction_EDIT
 | DropHiveFunction_EDIT
 ;

// OptionalAggregate is no go for look ahead reasons
DropImpalaFunction
 : 'DROP' '<impala>FUNCTION' OptionalIfExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList
 | 'DROP' '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList
 ;

DropImpalaFunction_EDIT
 : 'DROP' '<impala>FUNCTION' OptionalIfExists 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['IF EXISTS']);
     }
     parser.suggestDatabases({ appendDot: true });
   }
 | 'DROP' '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfExists 'CURSOR'
   {
     if (!$4) {
       parser.suggestKeywords(['IF EXISTS']);
     }
     parser.suggestDatabases({ appendDot: true });
   }
 | 'DROP' '<impala>FUNCTION' OptionalIfExists 'CURSOR' SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList
   {
     if (!$3) {
       parser.suggestKeywords(['IF EXISTS']);
     }
   }
 | 'DROP' '<impala>FUNCTION' OptionalIfExists_EDIT
 | 'DROP' 'CURSOR' '<impala>FUNCTION' OptionalIfExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList
   {
     parser.suggestKeywords(['AGGREGATE']);
   }
 | 'DROP' '<impala>FUNCTION' OptionalIfExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList_EDIT
 | 'DROP' '<impala>AGGREGATE' 'CURSOR'
   {
     parser.suggestKeywords(['FUNCTION']);
   }
 | 'DROP' '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfExists 'CURSOR' SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList
   {
     if (!$4) {
       parser.suggestKeywords(['IF EXISTS']);
     }
   }
 | 'DROP' '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfExists_EDIT
 | 'DROP' '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfExists SchemaQualifiedIdentifier ParenthesizedImpalaArgumentList_EDIT
 | 'DROP' '<impala>FUNCTION' OptionalIfExists SchemaQualifiedIdentifier_EDIT ParenthesizedImpalaArgumentList
 | 'DROP' '<impala>AGGREGATE' '<impala>FUNCTION' OptionalIfExists SchemaQualifiedIdentifier_EDIT ParenthesizedImpalaArgumentList
 ;

DropHiveFunction
 : 'DROP' '<hive>FUNCTION' OptionalIfExists SchemaQualifiedIdentifier
 | 'DROP' '<hive>TEMPORARY' '<hive>FUNCTION' OptionalIfExists RegularIdentifier
 ;

DropHiveFunction_EDIT
 : 'DROP' '<hive>FUNCTION' OptionalIfExists 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['IF EXISTS']);
     }
   }
 | 'DROP' '<hive>FUNCTION' OptionalIfExists 'CURSOR' SchemaQualifiedIdentifier
   {
     if (!$3) {
       parser.suggestKeywords(['IF EXISTS']);
     }
   }
 | 'DROP' '<hive>FUNCTION' OptionalIfExists_EDIT
 | 'DROP' '<hive>FUNCTION' OptionalIfExists_EDIT SchemaQualifiedIdentifier
 | 'DROP' '<hive>FUNCTION' OptionalIfExists SchemaQualifiedIdentifier_EDIT
 | 'DROP' '<hive>TEMPORARY' '<hive>FUNCTION' OptionalIfExists 'CURSOR'
   {
     if (!$4) {
       parser.suggestKeywords(['IF EXISTS']);
     }
   }
 | 'DROP' '<hive>TEMPORARY' '<hive>FUNCTION' OptionalIfExists_EDIT
 ;

DropRoleStatement
 : 'DROP' AnyRole RegularIdentifier
 ;

DropStatsStatement
 : 'DROP' '<impala>STATS' SchemaQualifiedTableIdentifier
   {
     parser.addTablePrimary($3);
   }
 | 'DROP' '<impala>INCREMENTAL' '<impala>STATS' SchemaQualifiedTableIdentifier PartitionSpec
   {
     parser.addTablePrimary($4);
   }
 ;

DropStatsStatement_EDIT
 : 'DROP' '<impala>STATS' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | 'DROP' '<impala>STATS' SchemaQualifiedTableIdentifier_EDIT
 | 'DROP' 'CURSOR' '<impala>STATS' SchemaQualifiedTableIdentifier
   {
     parser.addTablePrimary($4);
     parser.suggestKeywords(['INCREMENTAL']);
   }
 | 'DROP' 'CURSOR' '<impala>STATS' SchemaQualifiedTableIdentifier PartitionSpec
   {
     parser.addTablePrimary($4);
     parser.suggestKeywords(['INCREMENTAL']);
   }
 | 'DROP' '<impala>INCREMENTAL' 'CURSOR'
   {
     parser.suggestKeywords(['STATS']);
   }
 | 'DROP' '<impala>INCREMENTAL' '<impala>STATS' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | 'DROP' '<impala>INCREMENTAL' '<impala>STATS' SchemaQualifiedTableIdentifier_EDIT
 | 'DROP' '<impala>INCREMENTAL' '<impala>STATS' SchemaQualifiedTableIdentifier_EDIT PartitionSpec
 | 'DROP' '<impala>INCREMENTAL' '<impala>STATS' SchemaQualifiedTableIdentifier 'CURSOR'
   {
     parser.addTablePrimary($4);
     parser.suggestKeywords(['PARTITION']);
   }
 | 'DROP' '<impala>INCREMENTAL' '<impala>STATS' SchemaQualifiedTableIdentifier PartitionSpec_EDIT
   {
     parser.addTablePrimary($4);
   }
 ;

DropTableStatement
 : 'DROP' AnyTable OptionalIfExists SchemaQualifiedTableIdentifier OptionalPurge
   {
     parser.addTablePrimary($4);
   }
 ;

DropTableStatement_EDIT
 : 'DROP' AnyTable OptionalIfExists_EDIT
 | 'DROP' AnyTable OptionalIfExists 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['IF EXISTS']);
     }
     parser.suggestTables({ onlyTables: true });
     parser.suggestDatabases({
       appendDot: true
     });
   }
 | 'DROP' AnyTable OptionalIfExists SchemaQualifiedTableIdentifier_EDIT OptionalPurge
   {
     if (parser.yy.result.suggestTables) {
       parser.yy.result.suggestTables.onlyTables = true;
     }
   }
 | 'DROP' AnyTable OptionalIfExists_EDIT SchemaQualifiedTableIdentifier OptionalPurge
 | 'DROP' AnyTable OptionalIfExists SchemaQualifiedTableIdentifier OptionalPurge 'CURSOR'
   {
     parser.addTablePrimary($4);
     if (!$5) {
       parser.suggestKeywords(['PURGE']);
     }
   }
 ;

OptionalPurge
 :
 | 'PURGE'
 | '<hive>PURGE'
 ;


DropIndexStatement
 : 'DROP' '<hive>INDEX' OptionalIfExists RegularOrBacktickedIdentifier 'ON' SchemaQualifiedTableIdentifier
   {
     parser.addTablePrimary($6);
   }
 ;

DropIndexStatement_EDIT
 : 'DROP' '<hive>INDEX' OptionalIfExists 'CURSOR'
   {
     parser.suggestKeywords(['IF EXISTS']);
   }
 | 'DROP' '<hive>INDEX' OptionalIfExists_EDIT
 | 'DROP' '<hive>INDEX' OptionalIfExists RegularOrBacktickedIdentifier 'CURSOR'
   {
     parser.suggestKeywords(['ON']);
   }
 | 'DROP' '<hive>INDEX' OptionalIfExists RegularOrBacktickedIdentifier 'ON' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | 'DROP' '<hive>INDEX' OptionalIfExists RegularOrBacktickedIdentifier 'ON' SchemaQualifiedTableIdentifier_EDIT
 ;

DropMacroStatement
 : 'DROP' '<hive>TEMPORARY' '<hive>MACRO' OptionalIfExists RegularIdentifier
 ;

DropMacroStatement_EDIT
 : 'DROP' '<hive>TEMPORARY' 'CURSOR'
   {
     parser.suggestKeywords(['FUNCTION', 'MACRO']);
   }
 | 'DROP' '<hive>TEMPORARY' '<hive>MACRO' OptionalIfExists 'CURSOR'
   {
     if (!$4) {
       parser.suggestKeywords(['IF EXISTS']);
     }
   }
 | 'DROP' '<hive>TEMPORARY' '<hive>MACRO' OptionalIfExists_EDIT
 ;

DropViewStatement
 : 'DROP' AnyView OptionalIfExists SchemaQualifiedTableIdentifier
   {
     parser.addTablePrimary($4);
   }
 ;

DropViewStatement_EDIT
 : 'DROP' AnyView OptionalIfExists 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['IF EXISTS']);
     }
     parser.suggestTables({ onlyViews: true });
     parser.suggestDatabases({ appendDot: true });
   }
 | 'DROP' AnyView OptionalIfExists 'CURSOR' SchemaQualifiedTableIdentifier
   {
     parser.addTablePrimary($5);
     if (!$3) {
       parser.suggestKeywords(['IF EXISTS']);
     }
   }
 | 'DROP' AnyView OptionalIfExists_EDIT
 | 'DROP' AnyView OptionalIfExists_EDIT SchemaQualifiedTableIdentifier
   {
     parser.addTablePrimary($4);
   }
 | 'DROP' AnyView OptionalIfExists SchemaQualifiedTableIdentifier_EDIT
   {
     if (parser.yy.result.suggestTables) {
       parser.yy.result.suggestTables.onlyViews = true;
     }
   }
 ;

TruncateTableStatement
 : 'TRUNCATE' AnyTable OptionalIfExists SchemaQualifiedTableIdentifier OptionalPartitionSpec
   {
     parser.addTablePrimary($4);
   }
 ;

TruncateTableStatement_EDIT
 : 'TRUNCATE' 'CURSOR'
   {
     parser.suggestKeywords(['TABLE']);
   }
 | 'TRUNCATE' AnyTable OptionalIfExists 'CURSOR' OptionalPartitionSpec
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
     if (parser.isImpala() && !$3) {
       parser.suggestKeywords(['IF EXISTS']);
     }
   }
 | 'TRUNCATE' AnyTable OptionalIfExists_EDIT OptionalPartitionSpec
 | 'TRUNCATE' AnyTable OptionalIfExists SchemaQualifiedTableIdentifier_EDIT OptionalPartitionSpec
 | 'TRUNCATE' AnyTable OptionalIfExists SchemaQualifiedTableIdentifier OptionalPartitionSpec 'CURSOR'
   {
     parser.addTablePrimary($4);
     if (parser.isHive() && !$5) {
       parser.suggestKeywords(['PARTITION']);
     }
   }
 | 'TRUNCATE' AnyTable OptionalIfExists SchemaQualifiedTableIdentifier OptionalPartitionSpec_EDIT
   {
     parser.addTablePrimary($4);
   }
 | 'TRUNCATE' AnyTable OptionalIfExists 'CURSOR' SchemaQualifiedTableIdentifier OptionalPartitionSpec
   {
     parser.addTablePrimary($4);
     if (parser.isImpala() && !$3) {
       parser.suggestKeywords(['IF EXISTS']);
     }
   }
 | 'TRUNCATE' AnyTable OptionalIfExists_EDIT SchemaQualifiedTableIdentifier OptionalPartitionSpec
 ;

HiveDeleteStatement
 : '<hive>DELETE' 'FROM' SchemaQualifiedTableIdentifier OptionalWhereClause
   {
     parser.addTablePrimary($3);
   }
 ;

HiveDeleteStatement_EDIT
 : '<hive>DELETE' 'CURSOR'
   {
     parser.suggestKeywords(['FROM']);
   }
 | '<hive>DELETE' 'FROM' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | '<hive>DELETE' 'FROM' SchemaQualifiedTableIdentifier 'CURSOR' OptionalWhereClause
   {
     parser.addTablePrimary($3);
     if (!$5) {
       parser.suggestKeywords(['WHERE']);
     }
   }
 | '<hive>DELETE' 'FROM' SchemaQualifiedTableIdentifier_EDIT OptionalWhereClause
 | '<hive>DELETE' 'FROM' SchemaQualifiedTableIdentifier WhereClause_EDIT
   {
     parser.addTablePrimary($3);
   }
 ;

ImpalaDeleteStatement
 : '<impala>DELETE' OptionalImpalaDeleteTableRef 'FROM' TableReference OptionalWhereClause
 ;

ImpalaDeleteStatement_EDIT
 : '<impala>DELETE' OptionalImpalaDeleteTableRef 'CURSOR'
   {
     parser.suggestKeywords(['FROM']);
     if (parser.isImpala() && !$2) {
       parser.suggestTables();
       parser.suggestDatabases({ appendDot: true });
     }
   }
 | '<impala>DELETE' ImpalaDeleteTableRef_EDIT
 | '<impala>DELETE' OptionalImpalaDeleteTableRef 'FROM' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | '<impala>DELETE' OptionalImpalaDeleteTableRef 'FROM' TableReference 'CURSOR' OptionalWhereClause
   {
     var keywords = [{ value: 'FULL JOIN', weight: 1 }, { value: 'FULL OUTER JOIN', weight: 1 }, { value: 'JOIN', weight: 1 }, { value: 'LEFT JOIN', weight: 1 }, { value: 'LEFT OUTER JOIN', weight: 1 }, { value: 'RIGHT JOIN', weight: 1 }, { value: 'RIGHT OUTER JOIN', weight: 1 }, { value: 'INNER JOIN', weight: 1 },  { value: 'LEFT ANTI JOIN', weight: 1 }, { value: 'LEFT SEMI JOIN', weight: 1 }, { value: 'RIGHT ANTI JOIN', weight: 1 }, { value: 'RIGHT SEMI JOIN', weight: 1 }];
     if (!$6) {
       keywords.push({ value: 'WHERE', weight: 3 });
     }
     if ($4.suggestJoinConditions) {
       parser.suggestJoinConditions($4.suggestJoinConditions);
     }
     if ($4.suggestJoins) {
       parser.suggestJoins($4.suggestJoins);
     }
     if ($4.suggestKeywords) {
       keywords = keywords.concat(parser.createWeightedKeywords($4.suggestKeywords, 2));
     }
     if (keywords.length > 0) {
       parser.suggestKeywords(keywords);
     }
   }
 | '<impala>DELETE' ImpalaDeleteTableRef_EDIT 'FROM'
 | '<impala>DELETE' ImpalaDeleteTableRef_EDIT 'FROM' TableReference OptionalWhereClause
 | '<impala>DELETE' OptionalImpalaDeleteTableRef 'FROM' TableReference_EDIT OptionalWhereClause
 | '<impala>DELETE' OptionalImpalaDeleteTableRef 'FROM' TableReference WhereClause_EDIT
 ;

OptionalImpalaDeleteTableRef
 :
 | TableReference
 ;

ImpalaDeleteTableRef_EDIT
 : TableReference_EDIT
 ;

HiveAbortStatement
 : '<hive>ABORT' '<hive>TRANSACTIONS' TransactionIdList
 ;

HiveAbortStatement_EDIT
 : '<hive>ABORT' 'CURSOR'
   {
     parser.suggestKeywords(['TRANSACTIONS']);
   }
 ;

TransactionIdList
 : UnsignedNumericLiteral
 | TransactionIdList ',' UnsignedNumericLiteral
 ;// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

DataDefinition
 : GrantStatement
 | RevokeStatement
 ;

DataDefinition_EDIT
 : GrantStatement_EDIT
 | RevokeStatement_EDIT
 ;

GrantStatement
 : '<hive>GRANT' HivePrivilegeTypeList OptionalOnSpecification 'TO' PrincipalSpecificationList OptionalWithGrantOption
 | '<hive>GRANT' UserOrRoleList 'TO' PrincipalSpecificationList OptionalWithAdminOption
 | '<hive>GRANT' '<hive>ROLE' UserOrRoleList 'TO' PrincipalSpecificationList OptionalWithAdminOption
 | '<impala>GRANT' '<impala>ROLE' RegularOrBacktickedIdentifier 'TO' '<impala>GROUP' RegularOrBacktickedIdentifier
 | '<impala>GRANT' ImpalaPrivilegeType 'ON' ImpalaObjectSpecification 'TO' RegularOrBacktickedIdentifier OptionalWithGrantOption
 | '<impala>GRANT' ImpalaPrivilegeType 'ON' ImpalaObjectSpecification 'TO' '<impala>ROLE' RegularOrBacktickedIdentifier OptionalWithGrantOption
 ;

GrantStatement_EDIT
 : '<hive>GRANT' 'CURSOR'
   {
     parser.suggestKeywords(['ALL', 'ALTER', 'CREATE', 'DELETE', 'DROP', 'INDEX', 'INSERT', 'LOCK', 'ROLE', 'SELECT', 'UPDATE']);
   }
 | '<hive>GRANT' HivePrivilegeTypeList_EDIT OptionalOnSpecification
 | '<hive>GRANT' HivePrivilegeTypeList OnSpecification_EDIT
 | '<hive>GRANT' HivePrivilegeTypeList OptionalOnSpecification 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['ON', 'TO']);
     } else {
       parser.suggestKeywords(['TO']);
     }
   }
 | '<hive>GRANT' HivePrivilegeTypeList OptionalOnSpecification 'TO' 'CURSOR'
   {
     parser.suggestKeywords(['GROUP', 'ROLE', 'USER']);
   }
 | '<hive>GRANT' HivePrivilegeTypeList OptionalOnSpecification 'TO' PrincipalSpecificationList_EDIT
 | '<hive>GRANT' HivePrivilegeTypeList OptionalOnSpecification 'TO' PrincipalSpecificationList OptionalWithGrantOption 'CURSOR'
   {
     if (!$6) {
       parser.suggestKeywords(['WITH GRANT OPTION']);
     }
   }
 | '<hive>GRANT' HivePrivilegeTypeList OptionalOnSpecification 'TO' PrincipalSpecificationList WithGrantOption_EDIT
 | '<hive>GRANT' UserOrRoleList 'CURSOR'
   {
     parser.suggestKeywords(['TO']);
   }
 | '<hive>GRANT' UserOrRoleList 'TO' 'CURSOR'
   {
     parser.suggestKeywords(['GROUP', 'ROLE', 'USER']);
   }
 | '<hive>GRANT' UserOrRoleList 'TO' PrincipalSpecificationList_EDIT
 | '<hive>GRANT' UserOrRoleList 'TO' PrincipalSpecificationList OptionalWithAdminOption 'CURSOR'
   {
     if (!$5) {
       parser.suggestKeywords(['WITH ADMIN OPTION']);
     }
   }
 | '<hive>GRANT' UserOrRoleList 'TO' PrincipalSpecificationList WithAdminOption_EDIT
 | '<hive>GRANT' '<hive>ROLE' UserOrRoleList 'TO' 'CURSOR'
   {
     parser.suggestKeywords(['GROUP', 'ROLE', 'USER']);
   }
 | '<hive>GRANT' '<hive>ROLE' UserOrRoleList 'TO' PrincipalSpecificationList_EDIT
 | '<hive>GRANT' '<hive>ROLE' UserOrRoleList 'TO' PrincipalSpecificationList OptionalWithAdminOption 'CURSOR'
   {
     if (!$6) {
       parser.suggestKeywords(['WITH ADMIN OPTION']);
     }
   }
 | '<hive>GRANT' '<hive>ROLE' UserOrRoleList 'TO' PrincipalSpecificationList WithAdminOption_EDIT
 | '<impala>GRANT' 'CURSOR'
   {
     parser.suggestKeywords(['ALL', 'ALTER', 'CREATE', 'DROP', 'INSERT', 'REFRESH', 'ROLE', 'SELECT']);
   }
 | '<impala>GRANT' '<impala>ROLE' RegularOrBacktickedIdentifier 'CURSOR'
   {
     parser.suggestKeywords(['TO GROUP']);
   }
 | '<impala>GRANT' '<impala>ROLE' RegularOrBacktickedIdentifier 'TO' 'CURSOR'
   {
     parser.suggestKeywords(['GROUP']);
   }
 | '<impala>GRANT' ImpalaPrivilegeType_EDIT
 | '<impala>GRANT' ImpalaPrivilegeType 'CURSOR'
   {
     if ($2.isCreate) {
       parser.suggestKeywords(['ON DATABASE', 'ON SERVER']);
     } else {
       parser.suggestKeywords(['ON DATABASE', 'ON SERVER', 'ON TABLE', 'ON URI']);
     }
   }
 | '<impala>GRANT' ImpalaPrivilegeType 'ON' 'CURSOR'
   {
     if ($2.isCreate) {
        parser.suggestKeywords(['DATABASE', 'SERVER']);
     } else {
        parser.suggestKeywords(['DATABASE', 'SERVER', 'TABLE', 'URI']);
     }
   }
 | '<impala>GRANT' ImpalaPrivilegeType 'ON' ImpalaObjectSpecification_EDIT
 | '<impala>GRANT' ImpalaPrivilegeType 'ON' ImpalaObjectSpecification 'CURSOR'
   {
     parser.suggestKeywords(['TO']);
   }
 | '<impala>GRANT' ImpalaPrivilegeType 'ON' ImpalaObjectSpecification 'TO' 'CURSOR'
   {
     parser.suggestKeywords(['ROLE']);
   }
 | '<impala>GRANT' ImpalaPrivilegeType 'ON' ImpalaObjectSpecification 'TO' RegularOrBacktickedIdentifier OptionalWithGrantOption 'CURSOR'
   {
     if (!$7) {
       parser.suggestKeywords(['WITH GRANT OPTION']);
     }
   }
 | '<impala>GRANT' ImpalaPrivilegeType 'ON' ImpalaObjectSpecification 'TO' RegularOrBacktickedIdentifier WithGrantOption_EDIT
 | '<impala>GRANT' ImpalaPrivilegeType 'ON' ImpalaObjectSpecification 'TO' '<impala>ROLE' RegularOrBacktickedIdentifier OptionalWithGrantOption 'CURSOR'
   {
     if (!$8) {
       parser.suggestKeywords(['WITH GRANT OPTION']);
     }
   }
 | '<impala>GRANT' ImpalaPrivilegeType 'ON' ImpalaObjectSpecification 'TO' '<impala>ROLE' RegularOrBacktickedIdentifier WithGrantOption_EDIT
 ;

OptionalOnSpecification
 :
 | 'ON' HiveObjectSpecification
 ;

OnSpecification_EDIT
 : 'ON' 'CURSOR'
   {
     parser.suggestKeywords(['DATABASE', 'TABLE']);
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | 'ON' HiveObjectSpecification_EDIT
 ;

HiveObjectSpecification
 : 'DATABASE' RegularOrBacktickedIdentifier
 | '<hive>TABLE' SchemaQualifiedTableIdentifier
   {
     parser.addTablePrimary($2);
   }
 | SchemaQualifiedTableIdentifier
   {
     parser.addTablePrimary($1);
   }
 ;

HiveObjectSpecification_EDIT
 : 'DATABASE' 'CURSOR'
   {
     parser.suggestDatabases();
   }
 | '<hive>TABLE' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | '<hive>TABLE' SchemaQualifiedTableIdentifier_EDIT
 | SchemaQualifiedTableIdentifier_EDIT
 ;

ImpalaObjectSpecification
 : 'DATABASE' RegularOrBacktickedIdentifier
 | '<impala>TABLE' SchemaQualifiedTableIdentifier
   {
     parser.addTablePrimary($2);
   }
 | '<impala>SERVER' RegularOrBacktickedIdentifier
 | '<impala>URI' RegularOrBacktickedIdentifier
 ;

ImpalaObjectSpecification_EDIT
 : 'DATABASE' 'CURSOR'
   {
     parser.suggestDatabases();
   }
 | '<impala>TABLE' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | '<impala>TABLE' SchemaQualifiedTableIdentifier_EDIT
 ;

HivePrivilegeTypeList
 : HivePrivilegeTypeWithOptionalColumn
   {
     if ($1.toUpperCase() === 'ALL') {
       $$ = { singleAll: true };
     }
   }
 | HivePrivilegeTypeList ',' HivePrivilegeTypeWithOptionalColumn
 ;

HivePrivilegeTypeList_EDIT
 : HivePrivilegeTypeWithOptionalColumn_EDIT
 | HivePrivilegeTypeList ',' HivePrivilegeTypeWithOptionalColumn_EDIT
 | HivePrivilegeTypeWithOptionalColumn_EDIT ',' HivePrivilegeTypeList
 | HivePrivilegeTypeList ',' HivePrivilegeTypeWithOptionalColumn_EDIT ',' HivePrivilegeTypeList
 | 'CURSOR' ',' HivePrivilegeTypeList
   {
     parser.suggestKeywords(['ALL', 'ALTER', 'CREATE', 'DELETE', 'DROP', 'INDEX', 'INSERT', 'LOCK', 'SELECT', 'SHOW_DATABASE', 'UPDATE']);
   }
 | HivePrivilegeTypeList ',' 'CURSOR'
   {
     parser.suggestKeywords(['ALL', 'ALTER', 'CREATE', 'DELETE', 'DROP', 'INDEX', 'INSERT', 'LOCK', 'SELECT', 'SHOW_DATABASE', 'UPDATE']);
   }
 | HivePrivilegeTypeList ',' 'CURSOR' ',' HivePrivilegeTypeList
   {
     parser.suggestKeywords(['ALL', 'ALTER', 'CREATE', 'DELETE', 'DROP', 'INDEX', 'INSERT', 'LOCK', 'SELECT', 'SHOW_DATABASE', 'UPDATE']);
   }
 ;

HivePrivilegeTypeWithOptionalColumn
 : HivePrivilegeType OptionalParenthesizedColumnList
 ;

HivePrivilegeTypeWithOptionalColumn_EDIT
 : HivePrivilegeType ParenthesizedColumnList_EDIT
 ;

HivePrivilegeType
 : '<hive>INSERT'
 | 'SELECT'
 | 'UPDATE'
 | '<hive>DELETE'
 | 'ALTER'
 | '<hive>CREATE'
 | 'DROP'
 | '<hive>INDEX'
 | '<hive>LOCK'
 | '<hive>SHOW_DATABASE'
 | '<hive>ALL'
 ;

ImpalaPrivilegeType
 : 'ALL'
 | 'ALTER'
 | '<impala>CREATE'  --> { isCreate: true }
 | 'DROP'
 | '<impala>INSERT'
 | '<impala>REFRESH'
 | 'SELECT' OptionalParenthesizedColumnList
 ;

ImpalaPrivilegeType_EDIT
 : 'SELECT' ParenthesizedColumnList_EDIT
 ;

PrincipalSpecificationList
 : PrincipalSpecification
 | PrincipalSpecificationList ',' PrincipalSpecification
 ;

PrincipalSpecificationList_EDIT
 : PrincipalSpecificationList ',' 'CURSOR'
   {
     parser.suggestKeywords(['GROUP', 'ROLE', 'USER']);
   }
 | 'CURSOR' ',' PrincipalSpecificationList
   {
     parser.suggestKeywords(['GROUP', 'ROLE', 'USER']);
   }
 | PrincipalSpecificationList ',' 'CURSOR' ',' PrincipalSpecificationList
   {
     parser.suggestKeywords(['GROUP', 'ROLE', 'USER']);
   }
 ;

PrincipalSpecification
 : '<hive>USER' RegularOrBacktickedIdentifier
 | 'GROUP' RegularOrBacktickedIdentifier
 | '<hive>ROLE' RegularOrBacktickedIdentifier
 ;

PrincipalSpecification_EDIT
 : '<hive>USER' 'CURSOR'
 | 'GROUP' 'CURSOR'
 | '<hive>ROLE' 'CURSOR'
 ;

UserOrRoleList
 : RegularOrBacktickedIdentifier
 | UserOrRoleList ',' RegularOrBacktickedIdentifier
 ;

OptionalWithGrantOption
 :
 | 'WITH' '<hive>GRANT' 'OPTION'
 | 'WITH' '<impala>GRANT' 'OPTION'
 ;

WithGrantOption_EDIT
 : 'WITH' 'CURSOR'
   {
     parser.suggestKeywords(['GRANT OPTION']);
   }
 | 'WITH' '<hive>GRANT' 'CURSOR'
   {
     parser.suggestKeywords(['OPTION']);
   }
 | 'WITH' '<impala>GRANT' 'CURSOR'
   {
     parser.suggestKeywords(['OPTION']);
   }
 ;

OptionalWithAdminOption
 :
 | 'WITH' '<hive>ADMIN' 'OPTION'
 ;

WithAdminOption_EDIT
 : 'WITH' 'CURSOR'
   {
     parser.suggestKeywords(['ADMIN OPTION']);
   }
 | 'WITH' '<hive>ADMIN' 'CURSOR'
   {
     parser.suggestKeywords(['OPTION']);
   }
 ;

RevokeStatement
 : '<hive>REVOKE' HivePrivilegeTypeList OptionalOnSpecification 'FROM' PrincipalSpecificationList
 | '<hive>REVOKE' '<hive>GRANT' 'OPTION' '<hive>FOR' HivePrivilegeTypeList OptionalOnSpecification 'FROM' PrincipalSpecificationList
 | '<hive>REVOKE' UserOrRoleList 'FROM' PrincipalSpecificationList
 | '<hive>REVOKE' '<hive>ROLE' UserOrRoleList 'FROM' PrincipalSpecificationList
 | '<hive>REVOKE' '<hive>ADMIN' 'OPTION' '<hive>FOR' UserOrRoleList 'FROM' PrincipalSpecificationList
 | '<hive>REVOKE' '<hive>ADMIN' 'OPTION' '<hive>FOR' '<hive>ROLE' UserOrRoleList 'FROM' PrincipalSpecificationList
 | '<hive>REVOKE' '<hive>ALL' PrivilegesOrGrantOption 'FROM' UserOrRoleList
 | '<impala>REVOKE' '<impala>ROLE' RegularOrBacktickedIdentifier 'FROM' '<impala>GROUP' RegularOrBacktickedIdentifier
 | '<impala>REVOKE' ImpalaPrivilegeType 'ON' ImpalaObjectSpecification 'FROM' RegularOrBacktickedIdentifier
 | '<impala>REVOKE' ImpalaPrivilegeType 'ON' ImpalaObjectSpecification 'FROM' '<impala>ROLE' RegularOrBacktickedIdentifier
 ;

RevokeStatement_EDIT
 : '<hive>REVOKE' 'CURSOR'
   {
     parser.suggestKeywords(['ADMIN OPTION FOR', 'ALL', 'ALL GRANT OPTION FROM', 'ALL PRIVILEGES FROM', 'ALTER', 'CREATE', 'DELETE', 'DROP', 'GRANT OPTION FOR', 'INDEX', 'INSERT', 'LOCK', 'ROLE', 'SELECT', 'UPDATE']);
   }
 | '<hive>REVOKE' HivePrivilegeTypeList_EDIT
 | '<hive>REVOKE' HivePrivilegeTypeList OnSpecification_EDIT
 | '<hive>REVOKE' HivePrivilegeTypeList OptionalOnSpecification 'CURSOR'
   {
     if (!$3) {
       if ($2.singleAll) {
         parser.suggestKeywords(['FROM', 'GRANT OPTION', 'ON', 'PRIVILEGES FROM']);
       } else {
         parser.suggestKeywords(['FROM', 'ON']);
       }
     } else {
       parser.suggestKeywords(['FROM']);
     }
   }
 | '<hive>REVOKE' HivePrivilegeTypeList OptionalOnSpecification 'FROM' 'CURSOR'
   {
     parser.suggestKeywords(['GROUP', 'ROLE', 'USER']);
   }
 | '<hive>REVOKE' HivePrivilegeTypeList OptionalOnSpecification 'FROM' PrincipalSpecificationList_EDIT
 | '<hive>REVOKE' '<hive>GRANT' 'CURSOR'
   {
     parser.suggestKeywords(['OPTION FOR']);
   }
 | '<hive>REVOKE' '<hive>GRANT' 'OPTION' 'CURSOR'
   {
     parser.suggestKeywords(['FOR']);
   }
 | '<hive>REVOKE' '<hive>GRANT' 'OPTION' '<hive>FOR' 'CURSOR'
   {
     parser.suggestKeywords(['ALL', 'ALTER', 'CREATE', 'DELETE', 'DROP', 'INDEX', 'INSERT', 'LOCK', 'SELECT', 'SHOW_DATABASE', 'UPDATE']);
   }
 | '<hive>REVOKE' '<hive>GRANT' 'OPTION' '<hive>FOR' HivePrivilegeTypeList_EDIT
 | '<hive>REVOKE' '<hive>GRANT' 'OPTION' '<hive>FOR' HivePrivilegeTypeList OnSpecification_EDIT
 | '<hive>REVOKE' '<hive>GRANT' 'OPTION' '<hive>FOR' HivePrivilegeTypeList OptionalOnSpecification 'CURSOR'
   {
     if (!$6) {
       parser.suggestKeywords(['FROM', 'ON']);
     } else {
       parser.suggestKeywords(['FROM']);
     }
   }
 | '<hive>REVOKE' '<hive>GRANT' 'OPTION' '<hive>FOR' HivePrivilegeTypeList OptionalOnSpecification 'FROM' 'CURSOR'
   {
     parser.suggestKeywords(['GROUP', 'ROLE', 'USER']);
   }
 | '<hive>REVOKE' '<hive>GRANT' 'OPTION' '<hive>FOR' HivePrivilegeTypeList OptionalOnSpecification 'FROM' PrincipalSpecificationList_EDIT
 | '<hive>REVOKE' UserOrRoleList 'CURSOR'
   {
     if ($2.toUpperCase() === 'ADMIN') {
       parser.suggestKeywords(['FROM', 'OPTION FOR']);
     } else {
       parser.suggestKeywords(['FROM']);
     }
   }
 | '<hive>REVOKE' UserOrRoleList 'FROM' 'CURSOR'
   {
     parser.suggestKeywords(['GROUP', 'ROLE', 'USER']);
   }
 | '<hive>REVOKE' UserOrRoleList 'FROM' PrincipalSpecificationList_EDIT
 | '<hive>REVOKE' '<hive>ROLE' UserOrRoleList 'CURSOR'
   {
     parser.suggestKeywords(['FROM']);
   }
 | '<hive>REVOKE' '<hive>ROLE' UserOrRoleList 'FROM' 'CURSOR'
   {
     parser.suggestKeywords(['GROUP', 'ROLE', 'USER']);
   }
 | '<hive>REVOKE' '<hive>ROLE' UserOrRoleList 'FROM' PrincipalSpecificationList_EDIT

 | '<hive>REVOKE' '<hive>ADMIN' 'OPTION' 'CURSOR'
   {
     parser.suggestKeywords(['FOR']);
   }
 | '<hive>REVOKE' '<hive>ADMIN' 'OPTION' '<hive>FOR' 'CURSOR'
   {
     parser.suggestKeywords(['ROLE']);
   }
 | '<hive>REVOKE' '<hive>ADMIN' 'OPTION' '<hive>FOR' UserOrRoleList 'CURSOR'
   {
     parser.suggestKeywords(['FROM']);
   }
 | '<hive>REVOKE' '<hive>ADMIN' 'OPTION' '<hive>FOR' UserOrRoleList 'FROM' 'CURSOR'
   {
     parser.suggestKeywords(['GROUP', 'ROLE', 'USER']);
   }
 | '<hive>REVOKE' '<hive>ADMIN' 'OPTION' '<hive>FOR' UserOrRoleList 'FROM' PrincipalSpecificationList_EDIT
 | '<hive>REVOKE' '<hive>ADMIN' 'OPTION' '<hive>FOR' '<hive>ROLE' UserOrRoleList 'CURSOR'
   {
     parser.suggestKeywords(['FROM']);
   }
 | '<hive>REVOKE' '<hive>ADMIN' 'OPTION' '<hive>FOR' '<hive>ROLE' UserOrRoleList 'FROM' 'CURSOR'
   {
     parser.suggestKeywords(['GROUP', 'ROLE', 'USER']);
   }
 | '<hive>REVOKE' '<hive>ADMIN' 'OPTION' '<hive>FOR' '<hive>ROLE' UserOrRoleList 'FROM' PrincipalSpecificationList_EDIT
 | '<hive>REVOKE' '<hive>ALL' PrivilegesOrGrantOption_EDIT
 | '<hive>REVOKE' '<hive>ALL' PrivilegesOrGrantOption 'CURSOR'
   {
     parser.suggestKeywords(['FROM']);
   }
 | '<impala>REVOKE' 'CURSOR'
   {
     parser.suggestKeywords(['ALL', 'ALTER', 'CREATE', 'DROP', 'INSERT', 'REFRESH', 'ROLE', 'SELECT']);
   }
 | '<impala>REVOKE' '<impala>ROLE' RegularOrBacktickedIdentifier 'CURSOR'
   {
     parser.suggestKeywords(['FROM GROUP']);
   }
 | '<impala>REVOKE' '<impala>ROLE' RegularOrBacktickedIdentifier 'FROM' 'CURSOR'
   {
     parser.suggestKeywords(['GROUP']);
   }
 | '<impala>REVOKE' ImpalaPrivilegeType_EDIT
 | '<impala>REVOKE' ImpalaPrivilegeType 'CURSOR'
   {
     if ($2.isCreate) {
       parser.suggestKeywords(['ON DATABASE', 'ON SERVER']);
     } else {
       parser.suggestKeywords(['ON DATABASE', 'ON SERVER', 'ON TABLE', 'ON URI']);
     }
   }
 | '<impala>REVOKE' ImpalaPrivilegeType 'ON' 'CURSOR'
   {
     if ($2.isCreate) {
       parser.suggestKeywords(['DATABASE', 'SERVER']);
     } else {
       parser.suggestKeywords(['DATABASE', 'SERVER', 'TABLE', 'URI']);
     }
   }
 | '<impala>REVOKE' ImpalaPrivilegeType 'ON' ImpalaObjectSpecification_EDIT
 | '<impala>REVOKE' ImpalaPrivilegeType 'ON' ImpalaObjectSpecification 'CURSOR'
   {
     parser.suggestKeywords(['FROM']);
   }
 | '<impala>REVOKE' ImpalaPrivilegeType 'ON' ImpalaObjectSpecification 'FROM' 'CURSOR'
   {
     parser.suggestKeywords(['ROLE']);
   }
 ;

PrivilegesOrGrantOption
 : '<hive>PRIVILEGES'
 | '<hive>GRANT' 'OPTION'
 ;

PrivilegesOrGrantOption_EDIT
 : '<hive>GRANT' 'CURSOR'
   {
     parser.suggestKeywords(['OPTION']);
   }
 ;
// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

DataManipulation
 : InsertStatement
 ;

InsertStatement
 : HiveInsertStatement
 | InsertValuesStatement
 | ImpalaInsertOrUpsertStatement
 | CommonTableExpression HiveInsertStatement
 | CommonTableExpression ImpalaInsertOrUpsertStatement
 | HiveMergeStatement
 ;

DataManipulation_EDIT
 : HiveInsertStatement_EDIT
 | InsertValuesStatement_EDIT
 | ImpalaInsertOrUpsertStatement_EDIT
 | CommonTableExpression HiveInsertStatement_EDIT
   {
     parser.addCommonTableExpressions($1);
   }
 | CommonTableExpression_EDIT HiveInsertStatement
 | CommonTableExpression ImpalaInsertOrUpsertStatement_EDIT
   {
     parser.addCommonTableExpressions($1);
   }
 | CommonTableExpression_EDIT ImpalaInsertOrUpsertStatement
 | HiveMergeStatement_EDIT
 ;

HiveInsertStatement
 : HiveInsertWithoutQuery QuerySpecification
 | FromClause HiveInserts
 | FromClause SelectWithoutTableExpression OptionalSelectConditions
 ;

HiveInsertStatement_EDIT
 : HiveInsertWithoutQuery_EDIT
 | HiveInsertWithoutQuery 'CURSOR'
   {
     var keywords = [];
     if ($1.suggestKeywords) {
       keywords = parser.createWeightedKeywords($1.suggestKeywords, 2).concat([{ value: 'SELECT', weight: 1}]);
     } else {
       keywords = ['SELECT'];
     }
     if ($1.addValues) {
       keywords.push({ weight: 1.1, value: 'VALUES' });
     }
     if (keywords.length > 0) {
       parser.suggestKeywords(keywords);
     }
   }
 | HiveInsertWithoutQuery_EDIT QuerySpecification
 | HiveInsertWithoutQuery QuerySpecification_EDIT
 | FromClause HiveInserts_EDIT
   {
     if (!$2.keepTables) {
       delete parser.yy.result.suggestTables;
       delete parser.yy.result.suggestDatabases;
     }
   }
 | FromClause_EDIT
 | FromClause_EDIT HiveInserts
 | FromClause_EDIT SelectWithoutTableExpression OptionalSelectConditions
 | FromClause 'CURSOR'
   {
     parser.suggestKeywords(['INSERT INTO', 'INSERT OVERWRITE', 'SELECT']);
   }
 | FromClause SelectWithoutTableExpression_EDIT OptionalSelectConditions
   {
     if ($2.cursorAtEnd) {
       parser.checkForSelectListKeywords($2);
       var keywords = parser.yy.result.suggestKeywords || [];
       if ($3.suggestKeywords) {
         keywords = keywords.concat($3.suggestKeywords);
       }
       if (keywords.length > 0) {
         parser.suggestKeywords(keywords);
       }
     }
     delete parser.yy.result.suggestTables;
     delete parser.yy.result.suggestDatabases;
   }
 | FromClause SelectWithoutTableExpression OptionalSelectConditions_EDIT
   {
     if ($3.cursorAtStart) {
       parser.checkForSelectListKeywords($2.tableExpression);
     }
   }
 ;

HiveInsertWithoutQuery
 : '<hive>INSERT' '<hive>OVERWRITE' OptionalHiveTable SchemaQualifiedTableIdentifier OptionalPartitionSpec OptionalIfNotExists
   {
     $4.owner = 'insert';
     parser.addTablePrimary($4);
     if (!$5 && !$6) {
       $$ = { suggestKeywords: ['PARTITION'] }
     } else if (!$6) {
       $$ = { suggestKeywords: ['IF NOT EXISTS'] }
     }
   }
 | '<hive>INSERT' '<hive>OVERWRITE' '<hive>LOCAL' '<hive>DIRECTORY' HdfsPath OptionalInsertRowFormat OptionalStoredAs
   {
     if (!$6 && !$7) {
       $$ = { suggestKeywords: [{ value: 'ROW FORMAT', weight: 2 }, { value: 'STORED AS', weight: 1}] };
     } else if (!$7) {
       $$ = { suggestKeywords: ['STORED AS'] };
     }
   }
 | '<hive>INSERT' '<hive>OVERWRITE_DIRECTORY' HdfsPath OptionalInsertRowFormat OptionalStoredAs
    {
      if (!$4 && !$5) {
        $$ = { suggestKeywords: [{ value: 'ROW FORMAT', weight: 2 }, { value: 'STORED AS', weight: 1}] };
      } else if (!$5) {
        $$ = { suggestKeywords: ['STORED AS'] };
      }
    }
  | '<hive>INSERT' 'INTO' OptionalHiveTable SchemaQualifiedTableIdentifier OptionalPartitionSpec OptionalParenthesizedColumnList
   {
     $4.owner = 'insert';
     parser.addTablePrimary($4);
     if (!$5 && !$6) {
       $$ = { suggestKeywords: ['PARTITION'], addValues: true };
     } else if (!$6) {
       $$ = { addValues: true };
     }
   }
 ;

HiveInsertWithoutQuery_EDIT
 : '<hive>INSERT' 'CURSOR'
   {
     parser.suggestKeywords(['OVERWRITE', 'INTO']);
   }
 | '<hive>INSERT' '<hive>OVERWRITE' OptionalHiveTable 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['DIRECTORY', 'LOCAL DIRECTORY', 'TABLE']);
     }
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
     $$ = { keepTables: true }
   }
 | '<hive>INSERT' '<hive>OVERWRITE' OptionalHiveTable SchemaQualifiedTableIdentifier_EDIT OptionalPartitionSpec OptionalParenthesizedColumnList
   {
     $$ = { keepTables: true }
   }
 | '<hive>INSERT' '<hive>OVERWRITE' OptionalHiveTable SchemaQualifiedTableIdentifier OptionalPartitionSpec_EDIT OptionalIfNotExists
   {
     $4.owner = 'insert';
     parser.addTablePrimary($4);
     if (parser.yy.result.suggestColumns) {
       parser.yy.result.suggestColumns.owner = 'insert';
     }
   }
 | '<hive>INSERT' '<hive>OVERWRITE' OptionalHiveTable SchemaQualifiedTableIdentifier OptionalPartitionSpec OptionalIfNotExists_EDIT
   {
     $4.owner = 'insert';
     parser.addTablePrimary($4);
   }
 | '<hive>INSERT' '<hive>OVERWRITE' '<hive>LOCAL' 'CURSOR'
   {
     parser.suggestKeywords(['DIRECTORY']);
   }
 | '<hive>INSERT' '<hive>OVERWRITE' '<hive>LOCAL' '<hive>DIRECTORY' HdfsPath_EDIT OptionalInsertRowFormat OptionalStoredAs
 | '<hive>INSERT' '<hive>OVERWRITE' '<hive>LOCAL' '<hive>DIRECTORY' HdfsPath OptionalInsertRowFormat_EDIT OptionalStoredAs
 | '<hive>INSERT' '<hive>OVERWRITE' '<hive>LOCAL' '<hive>DIRECTORY' HdfsPath OptionalInsertRowFormat OptionalStoredAs_EDIT
 | '<hive>INSERT' '<hive>OVERWRITE_DIRECTORY' HdfsPath_EDIT OptionalInsertRowFormat OptionalStoredAs  // DIRECTORY is a non-reserved keyword
 | '<hive>INSERT' '<hive>OVERWRITE_DIRECTORY' HdfsPath OptionalInsertRowFormat_EDIT OptionalStoredAs
 | '<hive>INSERT' '<hive>OVERWRITE_DIRECTORY' HdfsPath OptionalInsertRowFormat OptionalStoredAs_EDIT
 | '<hive>INSERT' 'INTO' OptionalHiveTable 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['TABLE']);
     }
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
     $$ = { keepTables: true }
   }
 | '<hive>INSERT' 'INTO' OptionalHiveTable SchemaQualifiedTableIdentifier_EDIT OptionalPartitionSpec OptionalParenthesizedColumnList
   {
     $$ = { keepTables: true }
   }
 | '<hive>INSERT' 'INTO' OptionalHiveTable SchemaQualifiedTableIdentifier OptionalPartitionSpec_EDIT OptionalParenthesizedColumnList
   {
     $4.owner = 'insert';
     parser.addTablePrimary($4);
     if (parser.yy.result.suggestColumns) {
       parser.yy.result.suggestColumns.owner = 'insert';
     }
   }
 | '<hive>INSERT' 'INTO' OptionalHiveTable SchemaQualifiedTableIdentifier OptionalPartitionSpec OptionalParenthesizedColumnList_EDIT
   {
     $4.owner = 'insert';
     parser.addTablePrimary($4);
     if (parser.yy.result.suggestColumns) {
       parser.yy.result.suggestColumns.owner = 'insert';
     }
   }
 ;

HiveInserts
 : HiveInsert
 | HiveInserts HiveInsert
 ;

HiveInserts_EDIT
 : HiveInsert_EDIT
 | HiveInserts HiveInsert_EDIT
 | HiveInsert_EDIT HiveInserts
 | HiveInserts HiveInsert_EDIT HiveInserts
 ;

// TODO: Verify Hive unions in insert
HiveInsert
 : HiveInsertWithoutQuery SelectWithoutTableExpression OptionalSelectConditions
 ;

HiveInsert_EDIT
 : HiveInsertWithoutQuery_EDIT
 | HiveInsertWithoutQuery_EDIT SelectWithoutTableExpression OptionalSelectConditions
 | HiveInsertWithoutQuery 'CURSOR'
   {
     if ($1.suggestKeywords) {
       parser.suggestKeywords(parser.createWeightedKeywords($1.suggestKeywords, 2).concat([{ value: 'SELECT', weight: 1}]));
     } else {
       parser.suggestKeywords(['SELECT']);
     }
   }
 | HiveInsertWithoutQuery SelectWithoutTableExpression_EDIT OptionalSelectConditions
   {
     if ($2.cursorAtEnd) {
       parser.checkForSelectListKeywords($2);
       var keywords = parser.yy.result.suggestKeywords || [];
       if ($3.suggestKeywords) {
         keywords = keywords.concat($3.suggestKeywords);
       }
       if (keywords.length > 0) {
         parser.suggestKeywords(keywords);
       }
     }
   }
 | HiveInsertWithoutQuery SelectWithoutTableExpression OptionalSelectConditions_EDIT
 ;

InsertValuesStatement
 : '<hive>INSERT' 'INTO' OptionalHiveTable SchemaQualifiedTableIdentifier OptionalPartitionSpec 'VALUES' InsertValuesList
   {
     $4.owner = 'insert';
     parser.addTablePrimary($4);
   }
 | 'INSERT' 'INTO' OptionalTable SchemaQualifiedTableIdentifier 'VALUES' InsertValuesList
   {
     $4.owner = 'insert';
     parser.addTablePrimary($4);
   }
 ;

InsertValuesStatement_EDIT
 : 'INSERT' 'CURSOR'
   {
     parser.suggestKeywords(['INTO']);
   }
 | 'INSERT' 'INTO' OptionalTable 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['TABLE']);
     }
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | 'INSERT' 'INTO' OptionalTable SchemaQualifiedTableIdentifier_EDIT
 | 'INSERT' 'INTO' OptionalTable SchemaQualifiedTableIdentifier 'CURSOR'
   {
     $4.owner = 'insert';
     parser.addTablePrimary($4);
     parser.suggestKeywords(['VALUES']);
   }
 | 'INSERT' 'INTO' OptionalTable SchemaQualifiedTableIdentifier_EDIT 'VALUES' InsertValuesList
 ;

InsertValuesList
 : ParenthesizedRowValuesList
 | RowValuesList ',' ParenthesizedRowValuesList
 ;

ParenthesizedRowValuesList
 : '(' InValueList ')'
 ;

OptionalTable
 :
 | 'TABLE'
 ;

OptionalInsertRowFormat
 :
 | 'ROW' '<hive>FORMAT' HiveDelimitedRowFormat
 ;

OptionalInsertRowFormat_EDIT
 : 'ROW' 'CURSOR'
   {
     parser.suggestKeywords(['FORMAT DELIMITED']);
   }
 | 'ROW' '<hive>FORMAT' 'CURSOR'
   {
     parser.suggestKeywords(['DELIMITED']);
   }
 | 'ROW' '<hive>FORMAT' HiveDelimitedRowFormat_EDIT
 ;

SelectWithoutTableExpression
 : 'SELECT' OptionalAllOrDistinct OptionalStraightJoin SelectList  -> { selectList: $4 }
 ;

SelectWithoutTableExpression_EDIT
 : 'SELECT' OptionalAllOrDistinct OptionalStraightJoin SelectList 'CURSOR'
   {
     $$ = $4;
     $$.cursorAtEnd = true;
   }
 | 'SELECT' OptionalAllOrDistinct OptionalStraightJoin SelectList_EDIT
   {
     parser.selectListNoTableSuggest($4, $2);
   }
 | 'SELECT' OptionalAllOrDistinct OptionalStraightJoin 'CURSOR'
   {
     var keywords = parser.getSelectListKeywords();
     if (!$2 || $2 === 'ALL') {
       parser.suggestAggregateFunctions();
       parser.suggestAnalyticFunctions();
     }
     if (!$3 && !$2) {
       keywords.push({ value: 'ALL', weight: 2 });
       keywords.push({ value: 'DISTINCT', weight: 2 });
     }
     if (parser.isImpala() && !$3) {
       keywords.push({ value: 'STRAIGHT_JOIN', weight: 1 });
     }
     parser.suggestKeywords(keywords);
     parser.suggestFunctions();
     parser.suggestColumns();
   }
 ;

OptionalHiveTable
 :
 | '<hive>TABLE'
 ;

ImpalaInsertOrUpsertStatement
 : ImpalaInsertOrUpsertStatementWithoutCTE
 ;

ImpalaInsertOrUpsertStatement_EDIT
 : ImpalaInsertOrUpsertStatementWithoutCTE_EDIT
 ;

ImpalaInsertOrUpsertStatementWithoutCTE
 : ImpalaInsertOrUpsertLeftPart OptionalImpalaShuffleOrNoShuffle SelectStatement OptionalUnions
 | ImpalaInsertOrUpsertLeftPart 'VALUES' ImpalaRowValuesLists
 ;

ImpalaInsertOrUpsertStatementWithoutCTE_EDIT
 : ImpalaInsertOrUpsertLeftPart_EDIT
 | ImpalaInsertOrUpsertLeftPart OptionalImpalaShuffleOrNoShuffle 'CURSOR'
   {
     var keywords = $1.suggestKeywords && !$2 ? parser.createWeightedKeywords($1.suggestKeywords, 2) : [];
     if (!$2) {
       keywords = keywords.concat(['[NOSHUFFLE]', '[SHUFFLE]', 'SELECT', 'VALUES'])
     } else {
       keywords = keywords.concat(['SELECT'])
     }
     parser.suggestKeywords(keywords);
   }
 | ImpalaInsertOrUpsertLeftPart_EDIT OptionalImpalaShuffleOrNoShuffle SelectStatement OptionalUnions
 | ImpalaInsertOrUpsertLeftPart OptionalImpalaShuffleOrNoShuffle SelectStatement_EDIT OptionalUnions
 | ImpalaInsertOrUpsertLeftPart OptionalImpalaShuffleOrNoShuffle SelectStatement OptionalUnions_EDIT
 | ImpalaInsertOrUpsertLeftPart_EDIT 'VALUES' ImpalaRowValuesLists
 | ImpalaInsertOrUpsertLeftPart 'VALUES' ImpalaRowValuesLists_EDIT
 ;

ImpalaInsertOrUpsertLeftPart
 : ImpalaUpsertStatementLeftPart
 | ImpalaInsertLeftPart
 ;

ImpalaInsertOrUpsertLeftPart_EDIT
 : ImpalaUpsertStatementLeftPart_EDIT
 | ImpalaInsertLeftPart_EDIT
 ;

ImpalaUpsertStatementLeftPart
 : '<impala>UPSERT' 'INTO' OptionalImpalaTable SchemaQualifiedTableIdentifier OptionalParenthesizedColumnList
   {
     $4.owner = 'upsert';
     parser.addTablePrimary($4);
   }
 ;

ImpalaUpsertStatementLeftPart_EDIT
 : '<impala>UPSERT' 'CURSOR'
   {
     parser.suggestKeywords(['INTO']);
   }
 | '<impala>UPSERT' 'INTO' OptionalImpalaTable 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['TABLE']);
     }
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | '<impala>UPSERT' 'INTO' OptionalImpalaTable 'CURSOR' SchemaQualifiedTableIdentifier OptionalParenthesizedColumnList
   {
     if (!$3) {
       parser.suggestKeywords(['TABLE']);
     }
     $5.owner = 'upsert';
     parser.addTablePrimary($5);
   }
 | '<impala>UPSERT' 'INTO' OptionalImpalaTable SchemaQualifiedTableIdentifier_EDIT OptionalParenthesizedColumnList
 | '<impala>UPSERT' 'INTO' OptionalImpalaTable SchemaQualifiedTableIdentifier OptionalParenthesizedColumnList_EDIT
   {
     $4.owner = 'upsert';
     parser.addTablePrimary($4);
     if (parser.yy.result.suggestColumns) {
       parser.yy.result.suggestColumns.owner = 'upsert';
     }
   }
 ;


ImpalaInsertLeftPart
 : '<impala>INSERT' IntoOrOverwrite OptionalImpalaTable SchemaQualifiedTableIdentifier OptionalParenthesizedColumnList OptionalPartitionSpec
   {
     $4.owner = 'insert';
     parser.addTablePrimary($4);
     if (!$6) {
       $$ = { suggestKeywords: ['PARTITION'] };
     }
   }
 ;

ImpalaInsertLeftPart_EDIT
 : '<impala>INSERT' 'CURSOR'
   {
     parser.suggestKeywords(['INTO', 'OVERWRITE']);
   }
 | '<impala>INSERT' IntoOrOverwrite OptionalImpalaTable 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['TABLE']);
     }
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | '<impala>INSERT' IntoOrOverwrite OptionalImpalaTable 'CURSOR' SchemaQualifiedTableIdentifier OptionalParenthesizedColumnList OptionalPartitionSpec
   {
     if (!$3) {
       parser.suggestKeywords(['TABLE']);
     }
     $5.owner = 'insert';
     parser.addTablePrimary($5);
   }
 | '<impala>INSERT' IntoOrOverwrite OptionalImpalaTable SchemaQualifiedTableIdentifier_EDIT OptionalParenthesizedColumnList OptionalPartitionSpec
 | '<impala>INSERT' IntoOrOverwrite OptionalImpalaTable SchemaQualifiedTableIdentifier OptionalParenthesizedColumnList_EDIT OptionalPartitionSpec
   {
     $4.owner = 'insert';
     parser.addTablePrimary($4);
     if (parser.yy.result.suggestColumns) {
       parser.yy.result.suggestColumns.owner = 'insert';
     }
   }
 | '<impala>INSERT' IntoOrOverwrite OptionalImpalaTable SchemaQualifiedTableIdentifier OptionalParenthesizedColumnList OptionalPartitionSpec_EDIT
   {
     $4.owner = 'insert';
     parser.addTablePrimary($4);
     if (parser.yy.result.suggestColumns) {
       parser.yy.result.suggestColumns.owner = 'insert';
     }
   }
 ;

IntoOrOverwrite
 : 'INTO'
 | '<impala>OVERWRITE'
 ;

OptionalImpalaTable
 :
 | '<impala>TABLE'
 ;

OptionalImpalaShuffleOrNoShuffle
 :
 | '<impala>SHUFFLE'
 | '<impala>NOSHUFFLE'
 ;

ImpalaRowValuesLists
 : ParenthesizedImpalaRowValuesList
 | ImpalaRowValuesLists ',' ParenthesizedImpalaRowValuesList
 ;

ImpalaRowValuesLists_EDIT
 : ParenthesizedImpalaRowValuesList_EDIT
 | ImpalaRowValuesLists ',' ParenthesizedImpalaRowValuesList_EDIT
 | ImpalaRowValuesLists ',' ParenthesizedImpalaRowValuesList_EDIT ',' ImpalaRowValuesLists
 | ParenthesizedImpalaRowValuesList_EDIT ',' ImpalaRowValuesLists
 ;

ParenthesizedImpalaRowValuesList
 : '(' ValueExpressionList ')'
 ;

ParenthesizedImpalaRowValuesList_EDIT
 : '(' AnyCursor RightParenthesisOrError
   {
     parser.suggestFunctions();
   }
 | '(' ValueExpressionList_EDIT RightParenthesisOrError
 ;

HiveMergeStatement
 : HiveMergeStatementLeftPart 'ON' ValueExpression WhenList
 ;

HiveMergeStatement_EDIT
 : HiveMergeStatementLeftPart_EDIT
 | HiveMergeStatementLeftPart 'CURSOR'
   {
     parser.suggestKeywords(['ON']);
   }
 | HiveMergeStatementLeftPart 'ON' 'CURSOR'
   {
     parser.valueExpressionSuggest();
   }
 | HiveMergeStatementLeftPart 'ON' ValueExpression_EDIT
 | HiveMergeStatementLeftPart 'ON' ValueExpression 'CURSOR'
   {
     parser.suggestValueExpressionKeywords($3, [{ value: 'WHEN', weight: 2 }]);
   }
 | HiveMergeStatementLeftPart 'ON' ValueExpression WhenList_EDIT
 ;

HiveMergeStatementLeftPart
 : '<hive>MERGE' 'INTO' SchemaQualifiedTableIdentifier '<hive>AS' RegularIdentifier '<hive>USING' MergeSource '<hive>AS' RegularIdentifier
   {
     $3.alias = $5;
     parser.addTablePrimary($3);
     if ($7.subQuery) {
       parser.addTablePrimary({ subQueryAlias: $9 });
     } else {
       $7.alias = $9;
     }
   }
 ;

HiveMergeStatementLeftPart_EDIT
 : '<hive>MERGE' 'CURSOR'
   {
     parser.suggestKeywords(['INTO']);
   }
 | '<hive>MERGE' 'INTO' 'CURSOR'
   {
     parser.suggestDatabases({ appendDot: true });
     parser.suggestTables();
   }
 | '<hive>MERGE' 'INTO' SchemaQualifiedTableIdentifier_EDIT
 | '<hive>MERGE' 'INTO' SchemaQualifiedTableIdentifier 'CURSOR'
   {
     parser.addTablePrimary($3);
     parser.suggestKeywords(['AS T USING']);
   }
 | '<hive>MERGE' 'INTO' SchemaQualifiedTableIdentifier '<hive>AS' 'CURSOR'
   {
     parser.addTablePrimary($3);
     parser.suggestKeywords(['T USING']);
   }
 | '<hive>MERGE' 'INTO' SchemaQualifiedTableIdentifier '<hive>AS' RegularIdentifier 'CURSOR'
   {
     $3.alias = $5;
     parser.addTablePrimary($3);
     parser.suggestKeywords(['USING']);
   }
 | '<hive>MERGE' 'INTO' SchemaQualifiedTableIdentifier '<hive>AS' RegularIdentifier '<hive>USING' 'CURSOR'
   {
     $3.alias = $5;
     parser.addTablePrimary($3);
     parser.suggestDatabases({ appendDot: true });
     parser.suggestTables();
   }
 | '<hive>MERGE' 'INTO' SchemaQualifiedTableIdentifier '<hive>AS' RegularIdentifier '<hive>USING' MergeSource_EDIT
   {
     $3.alias = $5;
     parser.addTablePrimary($3);
   }
 | '<hive>MERGE' 'INTO' SchemaQualifiedTableIdentifier '<hive>AS' RegularIdentifier '<hive>USING' MergeSource 'CURSOR'
   {
     $3.alias = $5;
     parser.addTablePrimary($3);
     parser.suggestKeywords(['AS S ON']);
   }
 | '<hive>MERGE' 'INTO' SchemaQualifiedTableIdentifier '<hive>AS' RegularIdentifier '<hive>USING' MergeSource '<hive>AS' 'CURSOR'
   {
     $3.alias = $5;
     parser.addTablePrimary($3);
     parser.suggestKeywords(['S ON']);
   }
 ;

MergeSource
 : '(' TableSubQueryInner ')'  --> $2
 | SchemaQualifiedTableIdentifier
   {
     parser.addTablePrimary($1);
   }
 ;

MergeSource_EDIT
 : '(' 'CURSOR' RightParenthesisOrError
   {
     parser.suggestKeywords(['SELECT']);
   }
 | '(' TableSubQueryInner_EDIT RightParenthesisOrError
 | SchemaQualifiedTableIdentifier_EDIT
 ;

WhenList
 : WhenClause
 | WhenClause WhenClause
 | WhenClause WhenClause WhenClause
 ;

WhenList_EDIT
 : WhenClause_EDIT
   {
     if ($1.suggestThenKeywords) {
       parser.suggestKeywords(['DELETE', 'INSERT VALUES', 'UPDATE SET']);
     }
   }
 | WhenClause 'CURSOR'
   {
     if (!$1.notPresent) {
       parser.suggestKeywords(['WHEN']);
     }
   }
 | WhenClause WhenClause_EDIT
  {
     if (!$1.notPresent && $2.suggestThenKeywords) {
       var keywords = [];
       if (!$1.isDelete) {
         keywords.push('DELETE');
       }
       if (!$1.isInsert) {
         keywords.push('INSERT VALUES');
       }
       if (!$1.isUpdate) {
         keywords.push('UPDATE SET');
       }
       parser.suggestKeywords(keywords);
     }
   }
 | WhenClause WhenClause 'CURSOR'
   {
     if (!$2.notPresent) {
       parser.suggestKeywords(['WHEN']);
     }
   }
 | WhenClause WhenClause WhenClause_EDIT
   {
     if (!$2.notPresent && $3.suggestThenKeywords) {
       var keywords = [];
       if (!$1.isDelete && !$2.isDelete) {
         keywords.push('DELETE');
       }
       if (!$1.isInsert && !$2.isInsert) {
         keywords.push('INSERT VALUES');
       }
       if (!$1.isUpdate && !$2.isUpdate) {
         keywords.push('UPDATE SET');
       }
       parser.suggestKeywords(keywords);
     }
   }
 ;

WhenClause
 : 'WHEN' OptionalNot '<hive>MATCHED' OptionalMatchCondition 'THEN' UpdateDeleteOrInsert  --> { notPresent: !!$2, isDelete: $6.isDelete, isInsert: $6.isInsert, isUpdate: $6.isUpdate }
 ;

WhenClause_EDIT
 : 'WHEN' OptionalNot 'CURSOR'
   {
     if (!$2) {
       parser.suggestKeywords(['NOT MATCHED', 'MATCHED']);
     } else {
       parser.suggestKeywords(['MATCHED']);
     }
   }
 | 'WHEN' OptionalNot '<hive>MATCHED' OptionalMatchCondition 'CURSOR'
   {
     if (!$4) {
       parser.suggestKeywords(['AND', 'THEN']);
     } else {
       parser.suggestValueExpressionKeywords($4, [{ value: 'THEN', weight: 2 }]);
     }
   }
 | 'WHEN' OptionalNot '<hive>MATCHED' MatchCondition_EDIT
 | 'WHEN' OptionalNot '<hive>MATCHED' OptionalMatchCondition 'THEN' 'CURSOR' --> { suggestThenKeywords: true }
 | 'WHEN' OptionalNot '<hive>MATCHED' OptionalMatchCondition 'THEN' UpdateDeleteOrInsert_EDIT
 ;

OptionalMatchCondition
 :
 | 'AND' ValueExpression --> $2
 ;

MatchCondition_EDIT
 : 'AND' 'CURSOR'
   {
     parser.valueExpressionSuggest();
   }
 ;

UpdateDeleteOrInsert
 : 'UPDATE' 'SET' SetClauseList              --> { isUpdate: true }
 | '<hive>DELETE'                            --> { isDelete: true }
 | '<hive>INSERT' 'VALUES' InsertValuesList  --> { isInsert: true }
 ;

UpdateDeleteOrInsert_EDIT
 : 'UPDATE' 'CURSOR'
   {
     parser.suggestKeywords(['SET']);
   }
 | 'UPDATE' 'SET' SetClauseList_EDIT
 | '<hive>INSERT' 'CURSOR'
   {
     parser.suggestKeywords(['VALUES']);
   }
 ;// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

DataManipulation
 : LoadStatement
 | ImportStatement
 | ExportStatement
 ;

DataManipulation_EDIT
 : LoadStatement_EDIT
 | ImportStatement_EDIT
 | ExportStatement_EDIT
 ;

LoadStatement
 : AnyLoad AnyData OptionalHiveLocal AnyInpath HdfsPath OptionalOverwrite 'INTO' AnyTable SchemaQualifiedTableIdentifier OptionalPartitionSpec
   {
     parser.addTablePrimary($9);
   }
 ;

LoadStatement_EDIT
 : AnyLoad 'CURSOR'
   {
     if (parser.isHive()) {
       parser.suggestKeywords(['DATA LOCAL INPATH', 'DATA INPATH']);
     } else if (parser.isImpala()) {
       parser.suggestKeywords(['DATA INPATH']);
     }
   }
 | AnyLoad AnyData OptionalHiveLocal 'CURSOR'
   {
     if (parser.isHive() && !$3) {
       parser.suggestKeywords(['INPATH', 'LOCAL INPATH']);
     } else {
       parser.suggestKeywords(['INPATH']);
     }
   }
 | AnyLoad AnyData OptionalHiveLocal AnyInpath HdfsPath_EDIT OptionalOverwrite
 | AnyLoad AnyData OptionalHiveLocal AnyInpath HdfsPath OptionalOverwrite 'CURSOR'
   {
     if (!$6) {
       parser.suggestKeywords(['OVERWRITE INTO TABLE', 'INTO TABLE']);
     } else {
       parser.suggestKeywords(['INTO TABLE']);
     }
   }
 | AnyLoad AnyData OptionalHiveLocal AnyInpath HdfsPath OptionalOverwrite 'INTO' 'CURSOR'
   {
     parser.suggestKeywords([ 'TABLE' ]);
   }
 | AnyLoad AnyData OptionalHiveLocal AnyInpath HdfsPath OptionalOverwrite 'INTO' AnyTable 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | AnyLoad AnyData OptionalHiveLocal AnyInpath HdfsPath OptionalOverwrite 'INTO' AnyTable SchemaQualifiedTableIdentifier_EDIT OptionalPartitionSpec
 | AnyLoad AnyData OptionalHiveLocal AnyInpath HdfsPath OptionalOverwrite 'INTO' AnyTable SchemaQualifiedTableIdentifier OptionalPartitionSpec 'CURSOR'
   {
     parser.addTablePrimary($9);
     if (!$10) {
       parser.suggestKeywords(['PARTITION']);
     }
   }
 | AnyLoad AnyData OptionalHiveLocal AnyInpath HdfsPath OptionalOverwrite 'INTO' AnyTable SchemaQualifiedTableIdentifier OptionalPartitionSpec_EDIT
   {
     parser.addTablePrimary($9);
   }
 | AnyLoad AnyData OptionalHiveLocal AnyInpath HdfsPath_EDIT OptionalOverwrite 'INTO' AnyTable SchemaQualifiedTableIdentifier OptionalPartitionSpec
   {
     parser.addTablePrimary($9);
   }
 ;

OptionalOverwrite
 :
 | '<hive>OVERWRITE'
 | '<impala>OVERWRITE'
 ;

OptionalHiveLocal
 :
 | '<hive>LOCAL'
 ;

AnyLoad
 : '<hive>LOAD'
 | '<impala>LOAD'
 ;

AnyData
 : '<hive>DATA'
 | '<impala>DATA'
 ;

AnyInpath
 : '<hive>INPATH'
 | '<impala>INPATH'
 ;

ImportStatement
 : '<hive>IMPORT' OptionalTableWithPartition PushHdfsLexerState 'FROM' HdfsPath OptionalHdfsLocation
 ;

ImportStatement_EDIT
 : '<hive>IMPORT' 'CURSOR' OptionalTableWithPartition
   {
     if (!$3) {
       parser.suggestKeywords(['EXTERNAL TABLE', 'FROM', 'TABLE']);
     } else if (!$3.hasExternal) {
       parser.suggestKeywords(['EXTERNAL']);
     }
   }
 | '<hive>IMPORT' TableWithPartition 'CURSOR'
   {
     if ($2.suggestKeywords) {
        parser.suggestKeywords(parser.createWeightedKeywords($2.suggestKeywords, 2).concat(['FROM']));
      } else {
        parser.suggestKeywords(['FROM']);
      }
   }
 | '<hive>IMPORT' TableWithPartition_EDIT
 | '<hive>IMPORT' OptionalTableWithPartition PushHdfsLexerState 'FROM' HdfsPath_EDIT OptionalHdfsLocation
 | '<hive>IMPORT' OptionalTableWithPartition PushHdfsLexerState 'FROM' HdfsPath HdfsLocation_EDIT
 | '<hive>IMPORT' OptionalTableWithPartition PushHdfsLexerState 'FROM' HdfsPath OptionalHdfsLocation 'CURSOR'
   {
     if (!$6) {
       parser.suggestKeywords(['LOCATION']);
     }
   }
 | '<hive>IMPORT' 'CURSOR' OptionalTableWithPartition PushHdfsLexerState 'FROM' HdfsPath OptionalHdfsLocation
   {
     if (!$3) {
       parser.suggestKeywords(['EXTERNAL TABLE', 'TABLE']);
     } else if (!$3.hasExternal) {
       parser.suggestKeywords(['EXTERNAL']);
     }
   }
| '<hive>IMPORT' TableWithPartition_EDIT PushHdfsLexerState 'FROM' HdfsPath OptionalHdfsLocation
 | '<hive>IMPORT' TableWithPartition 'CURSOR' PushHdfsLexerState 'FROM' HdfsPath OptionalHdfsLocation
    {
      if ($2.suggestKeywords) {
        parser.suggestKeywords(parser.createWeightedKeywords($2.suggestKeywords, 2).concat(['FROM']));
      }
    }
 ;

OptionalTableWithPartition
 :
 | TableWithPartition
 ;

TableWithPartition
 : '<hive>EXTERNAL' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec
   {
     parser.addTablePrimary($3);
     if (!$4) {
       $$ = { hasExternal: true, suggestKeywords: ['PARTITION'] };
     } else {
       $$ = { hasExternal: true }
     }
   }
 | '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec
   {
     parser.addTablePrimary($2);
     if (!$3) {
       $$ = { suggestKeywords: ['PARTITION'] };
     }
   }
 ;

TableWithPartition_EDIT
 : '<hive>EXTERNAL' 'CURSOR'
   {
     parser.suggestKeywords(['TABLE']);
   }
 | '<hive>EXTERNAL' '<hive>TABLE' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | '<hive>EXTERNAL' '<hive>TABLE' SchemaQualifiedTableIdentifier_EDIT OptionalPartitionSpec
 | '<hive>EXTERNAL' '<hive>TABLE' SchemaQualifiedTableIdentifier PartitionSpec_EDIT
   {
     parser.addTablePrimary($3);
   }
 | '<hive>TABLE' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }

 | '<hive>TABLE' SchemaQualifiedTableIdentifier_EDIT OptionalPartitionSpec
 | '<hive>TABLE' SchemaQualifiedTableIdentifier PartitionSpec_EDIT
   {
     parser.addTablePrimary($3);
   }
 ;

ExportStatement
 : '<hive>EXPORT' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec PushHdfsLexerState 'TO' HdfsPath
   {
     parser.addTablePrimary($3);
   }
 | '<hive>EXPORT' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec PushHdfsLexerState 'TO' HdfsPath '<hive>FOR' '<hive>REPLICATION' '(' QuotedValue ')'
   {
     parser.addTablePrimary($3);
   }
 ;

ExportStatement_EDIT
 : '<hive>EXPORT' 'CURSOR'
   {
     parser.suggestKeywords(['TABLE']);
   }
 | '<hive>EXPORT' '<hive>TABLE' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | '<hive>EXPORT' '<hive>TABLE' SchemaQualifiedTableIdentifier_EDIT
 | '<hive>EXPORT' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec 'CURSOR'
   {
     parser.addTablePrimary($3);
     if (!$4) {
       parser.suggestKeywords([{ weight: 2, value: 'PARTITION' }, { weight: 1, value: 'TO' }]);
     } else {
       parser.suggestKeywords([ 'TO' ]);
     }
   }
 | '<hive>EXPORT' '<hive>TABLE' SchemaQualifiedTableIdentifier PartitionSpec_EDIT
   {
     parser.addTablePrimary($3);
   }
 | '<hive>EXPORT' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec PushHdfsLexerState 'TO' HdfsPath_EDIT
   {
     parser.addTablePrimary($3);
   }
 | '<hive>EXPORT' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec PushHdfsLexerState 'TO' HdfsPath 'CURSOR'
   {
     parser.addTablePrimary($3);
     parser.suggestKeywords(['FOR replication()']);
   }
 | '<hive>EXPORT' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec PushHdfsLexerState 'TO' HdfsPath '<hive>FOR' 'CURSOR'
   {
     parser.addTablePrimary($3);
     parser.suggestKeywords(['replication()']);
   }
 | '<hive>EXPORT' '<hive>TABLE' SchemaQualifiedTableIdentifier_EDIT OptionalPartitionSpec PushHdfsLexerState 'TO' HdfsPath
 | '<hive>EXPORT' '<hive>TABLE' SchemaQualifiedTableIdentifier_EDIT OptionalPartitionSpec PushHdfsLexerState 'TO' HdfsPath '<hive>FOR' '<hive>REPLICATION' '(' QuotedValue ')'
 | '<hive>EXPORT' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec 'CURSOR' PushHdfsLexerState 'TO' HdfsPath
   {
     parser.addTablePrimary($3);
     if (!$4) {
       parser.suggestKeywords(['PARTITION']);
     }
   }
 | '<hive>EXPORT' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec 'CURSOR' PushHdfsLexerState 'TO' HdfsPath '<hive>FOR' '<hive>REPLICATION' '(' QuotedValue ')'
   {
     parser.addTablePrimary($3);
     if (!$4) {
       parser.suggestKeywords(['PARTITION']);
     }
   }
 | '<hive>EXPORT' '<hive>TABLE' SchemaQualifiedTableIdentifier PartitionSpec_EDIT PushHdfsLexerState 'TO' HdfsPath
   {
     parser.addTablePrimary($3);
   }
 | '<hive>EXPORT' '<hive>TABLE' SchemaQualifiedTableIdentifier PartitionSpec_EDIT PushHdfsLexerState 'TO' HdfsPath '<hive>FOR' '<hive>REPLICATION' '(' QuotedValue ')'
   {
     parser.addTablePrimary($3);
   }
 | '<hive>EXPORT' '<hive>TABLE' SchemaQualifiedTableIdentifier OptionalPartitionSpec PushHdfsLexerState 'TO' HdfsPath_EDIT '<hive>FOR' '<hive>REPLICATION' '(' QuotedValue ')'
   {
     parser.addTablePrimary($3);
   }
 ;// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

DataDefinition
 : SetRoleStatement
 | SetSpecification
 ;

DataDefinition_EDIT
 : SetRoleStatement_EDIT
 | 'SET' 'CURSOR'
   {
     parser.suggestSetOptions();
     if (parser.isHive()) {
       parser.suggestKeywords(['ROLE']);
     }
     if (parser.isImpala()) {
       parser.suggestKeywords(['ALL']);
     }
   }
 ;

SetSpecification
 : 'SET' SetOption '=' SetValue
 | 'SET' 'ALL'
 ;

SetOption
 : RegularIdentifier
 | SetOption AnyDot RegularIdentifier
 ;

SetValue
 : RegularIdentifier
 | SignedInteger
 | SignedInteger RegularIdentifier
 | QuotedValue
 | 'TRUE'
 | 'FALSE'
 | 'NULL'
 ;

SetRoleStatement
 : 'SET' '<hive>ROLE' RegularIdentifier
 | 'SET' '<hive>ROLE' '<hive>ALL'
 | 'SET' '<hive>ROLE' '<hive>NONE'
 ;

SetRoleStatement_EDIT
 : 'SET' '<hive>ROLE' 'CURSOR'
   {
     parser.suggestKeywords(['ALL', 'NONE']);
   }
 ;// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

DataDefinition
 : ShowStatement
 ;

DataDefinition_EDIT
 : ShowStatement_EDIT
 ;

ShowStatement
 : ShowColumnStatsStatement
 | ShowColumnsStatement
 | ShowCompactionsStatement
 | ShowConfStatement
 | ShowCreateTableStatement
 | ShowCurrentRolesStatement
 | ShowDatabasesStatement
 | ShowFilesStatement
 | ShowFunctionsStatement
 | ShowGrantStatement
 | ShowIndexStatement
 | ShowLocksStatement
 | ShowPartitionsStatement
 | ShowRoleStatement
 | ShowRolesStatement
 | ShowTableStatement
 | ShowTablesStatement
 | ShowTblPropertiesStatement
 | ShowTransactionsStatement
 | ShowViewsStatement
 ;

AnyShow
 : 'SHOW'
 | '<hive>SHOW'
 ;

ShowStatement_EDIT
 : AnyShow 'CURSOR'
   {
     if (parser.isHive()) {
       parser.suggestKeywords(['COLUMNS', 'COMPACTIONS', 'CONF', 'CREATE TABLE', 'CURRENT ROLES', 'DATABASES', 'FORMATTED', 'FUNCTIONS', 'GRANT', 'INDEX', 'INDEXES', 'LOCKS', 'PARTITIONS', 'PRINCIPALS', 'ROLE GRANT', 'ROLES', 'SCHEMAS', 'TABLE EXTENDED', 'TABLES', 'TBLPROPERTIES', 'TRANSACTIONS', 'VIEWS']);
     } else if (parser.isImpala()) {
       parser.suggestKeywords(['AGGREGATE FUNCTIONS', 'ANALYTIC FUNCTIONS', 'COLUMN STATS', 'CREATE TABLE', 'CURRENT ROLES', 'DATABASES', 'FILES IN', 'FUNCTIONS', 'GRANT ROLE', 'PARTITIONS', 'RANGE PARTITIONS', 'ROLE GRANT GROUP', 'ROLES', 'SCHEMAS', 'TABLE STATS', 'TABLES']);
     } else {
       parser.suggestKeywords(['COLUMNS', 'DATABASES', 'TABLES']);
     }
   }
 | AnyShow 'CURSOR' RegularOrBackTickedSchemaQualifiedName
   {
     // ROLES is considered a non-reserved keywords so we can't match it in ShowCurrentRolesStatement_EDIT
     if ($3.identifierChain && $3.identifierChain.length === 1 && $3.identifierChain[0].name.toLowerCase() === 'roles') {
       parser.suggestKeywords(['CURRENT']);
       parser.yy.locations.pop();
     } else {
       parser.addTablePrimary($3);
       if (parser.isImpala()) {
         parser.suggestKeywords(['COLUMN STATS', 'CREATE TABLE', 'FILES IN', 'PARTITIONS', 'RANGE PARTITIONS', 'TABLE STATS']);
       }
     }
   }
 | AnyShow 'CURSOR' LIKE SingleQuotedValue
   {
     if (parser.isImpala()) {
       parser.suggestKeywords(['AGGREGATE FUNCTIONS', 'ANALYTIC FUNCTIONS', 'DATABASES', 'FUNCTIONS', 'SCHEMAS', 'TABLES']);
     } else if (parser.isHive()) {
       parser.suggestKeywords(['DATABASES', 'SCHEMAS', 'TABLE EXTENDED']);
     }
   }
 | ShowColumnStatsStatement_EDIT
 | ShowColumnsStatement_EDIT
 | ShowCreateTableStatement_EDIT
 | ShowCurrentRolesStatement_EDIT
 | ShowDatabasesStatement_EDIT
 | ShowFilesStatement_EDIT
 | ShowFunctionsStatement_EDIT
 | ShowGrantStatement_EDIT
 | ShowIndexStatement_EDIT
 | ShowLocksStatement_EDIT
 | ShowPartitionsStatement_EDIT
 | ShowRoleStatement_EDIT
 | ShowTableStatement_EDIT
 | ShowTablesStatement_EDIT
 | ShowTblPropertiesStatement_EDIT
 | ShowViewsStatement_EDIT
 ;

ShowColumnStatsStatement
 : AnyShow '<impala>COLUMN' '<impala>STATS' RegularOrBackTickedSchemaQualifiedName
   {
     parser.addTablePrimary($4);
   }
 ;

ShowColumnStatsStatement_EDIT
 : AnyShow '<impala>COLUMN' 'CURSOR'
   {
     parser.suggestKeywords(['STATS']);
   }
 | AnyShow '<impala>COLUMN' '<impala>STATS' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({
       appendDot: true
     });
   }
 | AnyShow '<impala>COLUMN' '<impala>STATS' RegularOrBackTickedSchemaQualifiedName_EDIT
 ;

ShowColumnsStatement
 : AnyShow '<hive>COLUMNS' AnyFromOrIn RegularOrBacktickedIdentifier
 | AnyShow '<hive>COLUMNS' AnyFromOrIn RegularOrBacktickedIdentifier AnyFromOrIn RegularOrBacktickedIdentifier
 ;

ShowColumnsStatement_EDIT
 : AnyShow '<hive>COLUMNS' 'CURSOR'
   {
     parser.suggestKeywords(['FROM', 'IN']);
   }
 | AnyShow '<hive>COLUMNS' 'CURSOR' RegularOrBacktickedIdentifier
   {
     parser.suggestKeywords(['FROM', 'IN']);
   }
 | AnyShow '<hive>COLUMNS' AnyFromOrIn 'CURSOR'
   {
     parser.suggestTables();
   }
 | AnyShow '<hive>COLUMNS' AnyFromOrIn 'CURSOR' AnyFromOrIn
   {
     parser.suggestTables();
   }
 | AnyShow '<hive>COLUMNS' AnyFromOrIn 'CURSOR' AnyFromOrIn RegularOrBacktickedIdentifier
   {
     parser.suggestTables();
   }
 | AnyShow '<hive>COLUMNS' AnyFromOrIn RegularOrBacktickedIdentifier 'CURSOR'
   {
     parser.suggestKeywords(['FROM', 'IN']);
   }
 | AnyShow '<hive>COLUMNS' AnyFromOrIn RegularOrBacktickedIdentifier 'CURSOR' RegularOrBacktickedIdentifier
   {
     parser.suggestKeywords(['FROM', 'IN']);
   }
 | AnyShow '<hive>COLUMNS' AnyFromOrIn RegularOrBacktickedIdentifier AnyFromOrIn 'CURSOR'
   {
     parser.suggestDatabases();
   }
 ;

ShowCompactionsStatement
 : AnyShow '<hive>COMPACTIONS'
 ;

ShowConfStatement
 : AnyShow '<hive>CONF' ConfigurationName
 ;

ShowCreateTableStatement
 : AnyShow HiveOrImpalaCreate AnyTableOrView RegularOrBackTickedSchemaQualifiedName
   {
     parser.addTablePrimary($4);
   }
 ;

ShowCreateTableStatement_EDIT
 : AnyShow HiveOrImpalaCreate 'CURSOR'
   {
     if (parser.isImpala()) {
       parser.suggestKeywords(['TABLE', 'VIEW']);
     } else {
       parser.suggestKeywords(['TABLE']);
     }
   }
 | AnyShow HiveOrImpalaCreate AnyTableOrView 'CURSOR'
   {
     if ($3.isView && parser.isImpala()) {
       parser.suggestTables({ onlyViews: true });
     } else {
       parser.suggestTables();
     }
     parser.suggestDatabases({
       appendDot: true
     });
   }
 | AnyShow HiveOrImpalaCreate AnyTableOrView RegularOrBackTickedSchemaQualifiedName_EDIT
   {
     if (parser.yy.result.suggestTables && $3.isView) {
       parser.yy.result.suggestTables.onlyViews = true;
     }
   }
 | AnyShow HiveOrImpalaCreate 'CURSOR' RegularOrBackTickedSchemaQualifiedName
   {
     parser.addTablePrimary($4);
     if (parser.isImpala()) {
       parser.suggestKeywords(['TABLE', 'VIEW']);
     } else {
       parser.suggestKeywords(['TABLE']);
     }
   }
 ;

AnyTableOrView
 : AnyTable
 | 'VIEW'   --> { isView: true }
 ;

ShowCurrentRolesStatement
 : AnyShow '<hive>CURRENT' '<hive>ROLES'
 | AnyShow '<impala>CURRENT' '<impala>ROLES'
 ;

ShowCurrentRolesStatement_EDIT
 : AnyShow '<hive>CURRENT' 'CURSOR'
   {
     parser.suggestKeywords([ 'ROLES' ]);
   }
 | AnyShow '<impala>CURRENT' 'CURSOR'
   {
     parser.suggestKeywords([ 'ROLES' ]);
   }
 ;

ShowDatabasesStatement
 : AnyShow HiveOrImpalaDatabasesOrSchemas 'LIKE' SingleQuotedValue
 | AnyShow '<impala>DATABASES' SingleQuotedValue
 ;

ShowDatabasesStatement_EDIT
 : AnyShow HiveOrImpalaDatabasesOrSchemas 'CURSOR'
   {
     parser.suggestKeywords(['LIKE']);
   }
 ;

ShowFilesStatement
 : AnyShow '<impala>FILES' 'IN' RegularOrBackTickedSchemaQualifiedName OptionalPartitionSpec
   {
     parser.addTablePrimary($4);
   }
 ;

ShowFilesStatement_EDIT
 : AnyShow '<impala>FILES' 'CURSOR'
   {
     parser.suggestKeywords(['IN']);
   }
 | AnyShow '<impala>FILES' 'IN' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({
       appendDot: true
     });
   }
 | AnyShow '<impala>FILES' 'IN' RegularOrBackTickedSchemaQualifiedName_EDIT OptionalPartitionSpec
 | AnyShow '<impala>FILES' 'IN' RegularOrBackTickedSchemaQualifiedName OptionalPartitionSpec 'CURSOR'
   {
     parser.addTablePrimary($4);
     if (!$5) {
       parser.suggestKeywords(['PARTITION']);
     }
   }
 | AnyShow '<impala>FILES' 'IN' RegularOrBackTickedSchemaQualifiedName OptionalPartitionSpec_EDIT
 | AnyShow '<impala>FILES' 'CURSOR' RegularOrBackTickedSchemaQualifiedName OptionalPartitionSpec
   {
     parser.addTablePrimary($4);
     parser.suggestKeywords(['IN']);
   }
 ;

ShowFunctionsStatement
 : AnyShow '<hive>FUNCTIONS'
 | AnyShow '<hive>FUNCTIONS' DoubleQuotedValue
 | AnyShow OptionalAggregateOrAnalytic '<impala>FUNCTIONS' OptionalInDatabase
 | AnyShow OptionalAggregateOrAnalytic '<impala>FUNCTIONS' OptionalInDatabase 'LIKE' QuotedValue
 ;

ShowFunctionsStatement_EDIT
 : AnyShow AggregateOrAnalytic 'CURSOR'
   {
     parser.suggestKeywords(['FUNCTIONS']);
   }
 | AnyShow 'CURSOR' '<impala>FUNCTIONS' OptionalInDatabase
   {
     parser.suggestKeywords(['AGGREGATE', 'ANALYTICAL']);
   }
 | AnyShow OptionalAggregateOrAnalytic '<impala>FUNCTIONS' OptionalInDatabase 'CURSOR'
   {
     if (!$4) {
       parser.suggestKeywords(['IN', 'LIKE']);
     } else {
       parser.suggestKeywords(['LIKE']);
     }
   }
 | AnyShow AggregateOrAnalytic 'CURSOR' OptionalInDatabase 'LIKE' QuotedValue
   {
     parser.suggestKeywords(['FUNCTIONS']);
   }
 | AnyShow 'CURSOR' '<impala>FUNCTIONS' OptionalInDatabase 'LIKE' QuotedValue
   {
     parser.suggestKeywords(['AGGREGATE', 'ANALYTICAL']);
   }
 | AnyShow OptionalAggregateOrAnalytic '<impala>FUNCTIONS' OptionalInDatabase 'CURSOR' QuotedValue
   {
     if (!$4) {
       parser.suggestKeywords([{ value: 'IN', weight: 2 }, { value: 'LIKE', weight: 1 }]);
     } else {
       parser.suggestKeywords(['LIKE']);
     }
   }
 ;

ShowGrantStatement
 : AnyShow '<hive>GRANT' OptionalPrincipalName
 | AnyShow '<hive>GRANT' OptionalPrincipalName 'ON' '<hive>ALL'
 | AnyShow '<hive>GRANT' OptionalPrincipalName 'ON' RegularOrBacktickedIdentifier
 | AnyShow '<hive>GRANT' OptionalPrincipalName 'ON' AnyTable RegularOrBacktickedIdentifier
 | AnyShow '<impala>GRANT' '<impala>ROLE' RegularOrBacktickedIdentifier
 ;

ShowGrantStatement_EDIT
 : AnyShow '<hive>GRANT' OptionalPrincipalName_EDIT
   {
     parser.suggestKeywords(['ON']);
   }
 | AnyShow '<hive>GRANT' OptionalPrincipalName_EDIT 'ON' '<hive>ALL'
 | AnyShow '<hive>GRANT' OptionalPrincipalName 'ON' 'CURSOR'
   {
     parser.suggestKeywords(['ALL', 'TABLE']);
     parser.suggestTables();
   }
 | AnyShow  '<hive>GRANT' OptionalPrincipalName 'ON' AnyTable 'CURSOR'
   {
     parser.suggestTables();
   }
 | AnyShow '<hive>GRANT' OptionalPrincipalName 'ON' 'CURSOR' RegularOrBacktickedIdentifier
   {
     parser.suggestKeywords(['TABLE']);
   }
 | AnyShow '<impala>GRANT' 'CURSOR'
   {
     parser.suggestKeywords(['ROLE']);
   }
 ;

OptionalPrincipalName
 :
 | RegularIdentifier
 ;

OptionalPrincipalName_EDIT
 : 'CURSOR'
 | RegularIdentifier 'CURSOR'
 ;

ShowIndexStatement
 : AnyShow OptionallyFormattedIndex 'ON' RegularOrBacktickedIdentifier
 | AnyShow OptionallyFormattedIndex 'ON' RegularOrBacktickedIdentifier AnyFromOrIn RegularOrBacktickedIdentifier
 ;

ShowIndexStatement_EDIT
 : AnyShow OptionallyFormattedIndex
 | AnyShow OptionallyFormattedIndex_EDIT
 | AnyShow OptionallyFormattedIndex_EDIT 'ON' RegularOrBacktickedIdentifier
 | AnyShow OptionallyFormattedIndex_EDIT 'ON' RegularOrBacktickedIdentifier AnyFromOrIn RegularOrBacktickedIdentifier
 | AnyShow OptionallyFormattedIndex 'CURSOR'
   {
     parser.suggestKeywords(['ON']);
   }
 | AnyShow OptionallyFormattedIndex 'ON' 'CURSOR'
   {
     parser.suggestTables();
   }
 | AnyShow OptionallyFormattedIndex 'CURSOR' RegularOrBacktickedIdentifier
   {
     parser.suggestKeywords(['ON']);
   }
 | AnyShow OptionallyFormattedIndex 'ON' RegularOrBacktickedIdentifier 'CURSOR'
   {
     parser.suggestKeywords(['FROM', 'IN']);
   }
 | AnyShow OptionallyFormattedIndex 'ON' RegularOrBacktickedIdentifier 'CURSOR' RegularOrBacktickedIdentifier
   {
     parser.suggestKeywords(['FROM', 'IN']);
   }
 | AnyShow OptionallyFormattedIndex 'ON' RegularOrBacktickedIdentifier AnyFromOrIn 'CURSOR'
   {
     parser.suggestDatabases();
   }
 | AnyShow OptionallyFormattedIndex 'ON' 'CURSOR' AnyFromOrIn RegularOrBacktickedIdentifier
   {
     parser.suggestTables({identifierChain: [{name: $6}]});
   }
 ;

ShowLocksStatement
 : AnyShow '<hive>LOCKS' RegularOrBackTickedSchemaQualifiedName
   {
     parser.addTablePrimary($3);
   }
 | AnyShow '<hive>LOCKS' RegularOrBackTickedSchemaQualifiedName '<hive>EXTENDED'
   {
     parser.addTablePrimary($3);
   }
 | AnyShow '<hive>LOCKS' RegularOrBackTickedSchemaQualifiedName PartitionSpec
   {
     parser.addTablePrimary($3);
   }
 | AnyShow '<hive>LOCKS' RegularOrBackTickedSchemaQualifiedName PartitionSpec '<hive>EXTENDED'
   {
     parser.addTablePrimary($3);
   }
 | AnyShow '<hive>LOCKS' DatabaseOrSchema RegularOrBacktickedIdentifier
 ;

ShowLocksStatement_EDIT
 : AnyShow '<hive>LOCKS' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({
       appendDot: true
     });
     parser.suggestKeywords(['DATABASE', 'SCHEMA']);
   }
 | AnyShow '<hive>LOCKS' RegularOrBackTickedSchemaQualifiedName_EDIT
 | AnyShow '<hive>LOCKS' RegularOrBackTickedSchemaQualifiedName 'CURSOR'
    {
      parser.addTablePrimary($3);
      parser.suggestKeywords(['EXTENDED', 'PARTITION']);
    }
 | AnyShow '<hive>LOCKS' RegularOrBackTickedSchemaQualifiedName_EDIT '<hive>EXTENDED'
 | AnyShow '<hive>LOCKS' RegularOrBackTickedSchemaQualifiedName_EDIT PartitionSpec
 | AnyShow '<hive>LOCKS' RegularOrBackTickedSchemaQualifiedName PartitionSpec 'CURSOR'
   {
     parser.addTablePrimary($3);
     parser.suggestKeywords(['EXTENDED']);
   }
 | AnyShow '<hive>LOCKS' RegularOrBackTickedSchemaQualifiedName_EDIT PartitionSpec '<hive>EXTENDED'
 | AnyShow '<hive>LOCKS' DatabaseOrSchema 'CURSOR'
   {
     parser.suggestDatabases();
   }
 ;

ShowPartitionsStatement
 : AnyShow '<hive>PARTITIONS' RegularOrBackTickedSchemaQualifiedName
   {
     parser.addTablePrimary($3);
   }
 | AnyShow '<hive>PARTITIONS' RegularOrBackTickedSchemaQualifiedName PartitionSpec
   {
     parser.addTablePrimary($3);
   }
 | AnyShow '<impala>PARTITIONS' RegularOrBackTickedSchemaQualifiedName
   {
     parser.addTablePrimary($3);
   }
 | AnyShow '<impala>RANGE' '<impala>PARTITIONS' RegularOrBackTickedSchemaQualifiedName
   {
     parser.addTablePrimary($3);
   }
 ;

ShowPartitionsStatement_EDIT
 : AnyShow '<hive>PARTITIONS' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({
       appendDot: true
     });
   }
 | AnyShow '<hive>PARTITIONS' RegularOrBackTickedSchemaQualifiedName_EDIT
 | AnyShow '<hive>PARTITIONS' RegularOrBackTickedSchemaQualifiedName 'CURSOR'
   {
     parser.addTablePrimary($3);
     parser.suggestKeywords(['PARTITION']);
   }
 | AnyShow '<hive>PARTITIONS' RegularOrBackTickedSchemaQualifiedName_EDIT PartitionSpec
 | AnyShow '<impala>PARTITIONS' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({
       appendDot: true
     });
   }
 | AnyShow '<impala>PARTITIONS' RegularOrBackTickedSchemaQualifiedName_EDIT
 | AnyShow '<impala>RANGE' '<impala>PARTITIONS' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({
       appendDot: true
     });
   }
 | AnyShow '<impala>RANGE' '<impala>PARTITIONS' RegularOrBackTickedSchemaQualifiedName_EDIT
 ;

ShowRoleStatement
 : AnyShow '<hive>ROLE' '<hive>GRANT' HiveRoleOrUser RegularIdentifier
 | AnyShow '<impala>ROLE' '<impala>GRANT' '<impala>GROUP' RegularIdentifier
 ;

ShowRoleStatement_EDIT
 : AnyShow '<hive>ROLE' 'CURSOR'
   {
     parser.suggestKeywords(['GRANT']);
   }
 | AnyShow '<impala>ROLE' 'CURSOR'
   {
     parser.suggestKeywords(['GRANT']);
   }
 | AnyShow '<hive>ROLE' 'CURSOR' HiveRoleOrUser RegularIdentifier
   {
     parser.suggestKeywords(['GRANT']);
   }
 | AnyShow '<hive>ROLE' '<hive>GRANT' 'CURSOR'
   {
     parser.suggestKeywords(['ROLE', 'USER']);
   }
 | AnyShow '<hive>ROLE' '<hive>GRANT' 'CURSOR' RegularIdentifier
   {
     parser.suggestKeywords(['ROLE', 'USER']);
   }
 | AnyShow '<impala>ROLE' '<impala>GRANT' 'CURSOR'
   {
     parser.suggestKeywords(['GROUP']);
   }
 | AnyShow '<impala>ROLE' '<impala>GRANT' 'CURSOR' RegularIdentifier
   {
     parser.suggestKeywords(['GROUP']);
   }
 ;

ShowRolesStatement
 : AnyShow '<impala>ROLES'
 | AnyShow '<hive>ROLES'
 ;

ShowTableStatement
 : AnyShow '<hive>TABLE' '<hive>EXTENDED' OptionalFromDatabase 'LIKE' SingleQuotedValue
 | AnyShow '<hive>TABLE' '<hive>EXTENDED' OptionalFromDatabase 'LIKE' SingleQuotedValue PartitionSpec
 ;

ShowTableStatement_EDIT
 : AnyShow '<hive>TABLE' 'CURSOR'
   {
     parser.suggestKeywords(['EXTENDED']);
   }
 | AnyShow '<hive>TABLE' '<hive>EXTENDED' OptionalFromDatabase
 | AnyShow '<hive>TABLE' '<hive>EXTENDED' OptionalFromDatabase_EDIT
 | AnyShow '<hive>TABLE' '<hive>EXTENDED' OptionalFromDatabase 'CURSOR'
    {
      if ($4) {
        parser.suggestKeywords(['LIKE']);
      } else {
        parser.suggestKeywords(['FROM', 'IN', 'LIKE']);
      }
    }
 | AnyShow '<hive>TABLE' '<hive>EXTENDED' OptionalFromDatabase_EDIT 'LIKE' SingleQuotedValue
 | AnyShow '<hive>TABLE' 'CURSOR' OptionalFromDatabase 'LIKE' SingleQuotedValue
    {
      if (parser.isHive()) {
        parser.suggestKeywords(['EXTENDED']);
      }
    }
 | AnyShow '<hive>TABLE' '<hive>EXTENDED' OptionalFromDatabase 'CURSOR' SingleQuotedValue
    {
      parser.suggestKeywords(['LIKE']);
    }
 | AnyShow '<hive>TABLE' '<hive>EXTENDED' OptionalFromDatabase 'LIKE' SingleQuotedValue 'CURSOR'
    {
      parser.suggestKeywords(['PARTITION']);
    }
 | AnyShow '<hive>TABLE' '<hive>EXTENDED' OptionalFromDatabase_EDIT 'LIKE' SingleQuotedValue PartitionSpec
 | AnyShow '<hive>TABLE' 'CURSOR' OptionalFromDatabase 'LIKE' SingleQuotedValue PartitionSpec
   {
     parser.suggestKeywords(['EXTENDED']);
   }
 | AnyShow '<hive>TABLE' '<hive>EXTENDED' OptionalFromDatabase 'CURSOR' SingleQuotedValue PartitionSpec
   {
     parser.suggestKeywords(['LIKE']);
   }
 | AnyShow '<hive>TABLE' '<hive>EXTENDED' OptionalFromDatabase 'LIKE' SingleQuotedValue 'CURSOR' PartitionSpecList
   {
     parser.suggestKeywords(['PARTITION']);
   }
 | AnyShow '<impala>TABLE' 'CURSOR'
   {
     parser.suggestKeywords(['STATS']);
   }
 | AnyShow '<impala>TABLE' '<impala>STATS' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({
       appendDot: true
     });
   }
 | AnyShow '<impala>TABLE' '<impala>STATS' RegularOrBackTickedSchemaQualifiedName
    {
      parser.addTablePrimary($4);
    }
 | AnyShow '<impala>TABLE' '<impala>STATS' RegularOrBackTickedSchemaQualifiedName_EDIT
 ;

ShowTablesStatement
 : AnyShow HiveOrImpalaTables OptionalInDatabase
 | AnyShow HiveOrImpalaTables OptionalInDatabase SingleQuotedValue
 | AnyShow HiveOrImpalaTables OptionalInDatabase 'LIKE' SingleQuotedValue
 ;

ShowTablesStatement_EDIT
 : AnyShow HiveOrImpalaTables OptionalInDatabase 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['IN', 'LIKE']);
     } else {
       parser.suggestKeywords(['LIKE']);
     }
   }
 ;

ShowTblPropertiesStatement
 : AnyShow '<hive>TBLPROPERTIES' RegularOrBackTickedSchemaQualifiedName
   {
     parser.addTablePrimary($3);
   }
 | AnyShow '<hive>TBLPROPERTIES' RegularOrBackTickedSchemaQualifiedName '(' QuotedValue ')'
   {
     parser.addTablePrimary($3);
   }
 ;

ShowTblPropertiesStatement_EDIT
 : AnyShow '<hive>TBLPROPERTIES' RegularOrBackTickedSchemaQualifiedName_EDIT
 | AnyShow '<hive>TBLPROPERTIES' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ prependDot: true });
   }
 ;

ShowTransactionsStatement
 : AnyShow '<hive>TRANSACTIONS'
 ;

ShowViewsStatement
 : AnyShow '<hive>VIEWS' OptionalInOrFromDatabase OptionalLike
 ;

ShowViewsStatement_EDIT
 : AnyShow '<hive>VIEWS' OptionalInOrFromDatabase OptionalLike 'CURSOR'
   {
     if (!$4 && !$3) {
       parser.suggestKeywords([{ value: 'IN', weight: 2 }, { value: 'FROM', weight: 2 }, { value: 'LIKE', weight: 1 }]);
     } else if (!$4) {
       parser.suggestKeywords(['LIKE']);
     }
   }
 | AnyShow '<hive>VIEWS' InOrFromDatabase_EDIT OptionalLike
 | AnyShow '<hive>VIEWS' OptionalInOrFromDatabase Like_EDIT
 ;

OptionalInOrFromDatabase
 :
 | 'IN' RegularOrBacktickedIdentifier
   {
     parser.addDatabaseLocation(@2, [ { name: $2 } ]);
   }
 | 'FROM' RegularOrBacktickedIdentifier
   {
     parser.addDatabaseLocation(@2, [ { name: $2 } ]);
   }
 ;

InOrFromDatabase_EDIT
 : 'IN' 'CURSOR'
   {
     parser.suggestDatabases();
   }
 | 'FROM' 'CURSOR'
   {
     parser.suggestDatabases();
   }
 ;

OptionalLike
 :
 | 'LIKE' SingleQuotedValue
 ;

Like_EDIT
 : 'LIKE' 'CURSOR'
 ;// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

DataManipulation
 : UpdateStatement
 ;

DataManipulation_EDIT
 : UpdateStatement_EDIT
 ;

UpdateStatement
 : 'UPDATE' TargetTable 'SET' SetClauseList OptionalFromJoinedTable OptionalWhereClause
 ;

UpdateStatement_EDIT
 : 'UPDATE' TargetTable_EDIT 'SET' SetClauseList OptionalFromJoinedTable OptionalWhereClause
 | 'UPDATE' TargetTable 'SET' SetClauseList_EDIT OptionalFromJoinedTable OptionalWhereClause
 | 'UPDATE' TargetTable 'SET' SetClauseList FromJoinedTable_EDIT OptionalWhereClause
 | 'UPDATE' TargetTable 'SET' SetClauseList OptionalFromJoinedTable WhereClause_EDIT
 | 'UPDATE' TargetTable 'SET' SetClauseList OptionalFromJoinedTable OptionalWhereClause 'CURSOR'
   {
     if (parser.isImpala() && !$6 && !$5) {
       parser.suggestKeywords([{ value: 'FROM', weight: 2 }, { value: 'WHERE', weight: 1 }]);
     } else if (parser.isImpala() && !$6 && $5) {
       var keywords = [{ value: 'FULL JOIN', weight: 2 }, { value: 'FULL OUTER JOIN', weight: 2 }, { value: 'JOIN', weight: 2 }, { value: 'LEFT JOIN', weight: 2 }, { value: 'LEFT OUTER JOIN', weight: 2 }, { value: 'RIGHT JOIN', weight: 2 }, { value: 'RIGHT OUTER JOIN', weight: 2 }, { value: 'INNER JOIN', weight: 2 },  { value: 'LEFT ANTI JOIN', weight: 2 }, { value: 'LEFT SEMI JOIN', weight: 2 }, { value: 'RIGHT ANTI JOIN', weight: 2 }, { value: 'RIGHT SEMI JOIN', weight: 2 }, { value: 'WHERE', weight: 1 }];
       if ($5.suggestJoinConditions) {
         parser.suggestJoinConditions($5.suggestJoinConditions);
       }
       if ($5.suggestJoins) {
         parser.suggestJoins($5.suggestJoins);
       }
       if ($5.suggestKeywords) {
         keywords = keywords.concat(parser.createWeightedKeywords($5.suggestKeywords, 3));
       }
       parser.suggestKeywords(keywords);
     } else if (!$6) {
       parser.suggestKeywords([ 'WHERE' ]);
     }
   }
 | 'UPDATE' TargetTable 'CURSOR'
   {
     parser.suggestKeywords([ 'SET' ]);
   }
 | 'UPDATE' TargetTable_EDIT
 | 'UPDATE' TargetTable
 | 'UPDATE' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 ;

TargetTable
 : TableName
 ;

TargetTable_EDIT
 : TableName_EDIT
 ;

TableName
 : LocalOrSchemaQualifiedName
   {
     parser.addTablePrimary($1);
   }
 ;

TableName_EDIT
 : LocalOrSchemaQualifiedName_EDIT
 ;

SetClauseList
 : SetClause
 | SetClauseList ',' SetClause
 ;

SetClauseList_EDIT
 : SetClause_EDIT
 | SetClauseList ',' SetClause_EDIT
 | SetClause_EDIT ',' SetClauseList
 | SetClauseList ',' SetClause_EDIT ',' SetClauseList
 ;

SetClause
 : SetTarget '=' UpdateSource
 ;

SetClause_EDIT
 : SetTarget '=' UpdateSource_EDIT
 | SetTarget 'CURSOR'
   {
     parser.suggestKeywords([ '=' ]);
   }
 | 'CURSOR'
   {
     parser.suggestColumns();
   }
 ;

SetTarget
 : ColumnReference
 ;

UpdateSource
 : ValueExpression
 ;

UpdateSource_EDIT
 : ValueExpression_EDIT
 ;

OptionalFromJoinedTable
 :
 | 'FROM' TableReference  -> $2
 ;

FromJoinedTable_EDIT
 : 'FROM' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | 'FROM' TableReference_EDIT
 ;
// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

DataDefinition
 : UseStatement
 ;

DataDefinition_EDIT
 : UseStatement_EDIT
 ;

AnyUse
 : 'USE'
 | '<hive>USE'
 ;

UseStatement
 : AnyUse RegularIdentifier
   {
     if (! parser.yy.cursorFound) {
       parser.yy.result.useDatabase = $2;
     }
   }
 ;

UseStatement_EDIT
 : AnyUse 'CURSOR'
   {
     parser.suggestDatabases();
   }
 ;


// ===================================== Fin =====================================
// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

%%
SqlParseSupport.initSyntaxParser(parser);
