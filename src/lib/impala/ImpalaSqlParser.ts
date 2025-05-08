// Generated from dt-sql-parser/src/grammar/impala/ImpalaSqlParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { ImpalaSqlParserListener } from "./ImpalaSqlParserListener.js";
import { ImpalaSqlParserVisitor } from "./ImpalaSqlParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


import { SQLParserBase } from '../SQLParserBase';


export class ImpalaSqlParser extends SQLParserBase {
    public static readonly KW_ADD = 1;
    public static readonly KW_ALL = 2;
    public static readonly KW_ANALYTIC = 3;
    public static readonly KW_ALTER = 4;
    public static readonly KW_AND = 5;
    public static readonly KW_ANY = 6;
    public static readonly KW_ANTI = 7;
    public static readonly KW_ARRAY = 8;
    public static readonly KW_AS = 9;
    public static readonly KW_ASC = 10;
    public static readonly KW_AT = 11;
    public static readonly KW_AGGREGATE = 12;
    public static readonly KW_AUTHORIZATION = 13;
    public static readonly KW_BERNOULLI = 14;
    public static readonly KW_BETWEEN = 15;
    public static readonly KW_BLOCK_SIZE = 16;
    public static readonly KW_PARTITIONED = 17;
    public static readonly KW_PREPARE_FN = 18;
    public static readonly KW_EXTERNAL = 19;
    public static readonly KW_CLOSEFN = 20;
    public static readonly KW_SORT = 21;
    public static readonly KW_PURGE = 22;
    public static readonly KW_STORED = 23;
    public static readonly KW_LOCATION = 24;
    public static readonly KW_TBLPROPERTIES = 25;
    public static readonly KW_BY = 26;
    public static readonly KW_CASCADE = 27;
    public static readonly KW_CASE = 28;
    public static readonly KW_CAST = 29;
    public static readonly KW_CACHED = 30;
    public static readonly KW_CHANGE = 31;
    public static readonly KW_COLUMN = 32;
    public static readonly KW_COLUMNS = 33;
    public static readonly KW_COMMENT = 34;
    public static readonly KW_COMPRESSION = 35;
    public static readonly KW_COMPUTE = 36;
    public static readonly KW_CREATE = 37;
    public static readonly KW_CROSS = 38;
    public static readonly KW_CURRENT = 39;
    public static readonly KW_CURRENT_DATE = 40;
    public static readonly KW_CURRENT_PATH = 41;
    public static readonly KW_CURRENT_TIME = 42;
    public static readonly KW_CURRENT_TIMESTAMP = 43;
    public static readonly KW_CURRENT_USER = 44;
    public static readonly KW_DATA = 45;
    public static readonly KW_DATABASE = 46;
    public static readonly KW_DATABASES = 47;
    public static readonly KW_DAY = 48;
    public static readonly KW_DAYS = 49;
    public static readonly KW_DELETE = 50;
    public static readonly KW_DEFAULT = 51;
    public static readonly KW_DELIMITED = 52;
    public static readonly KW_DISABLE = 53;
    public static readonly KW_UPDATE = 54;
    public static readonly KW_DESC = 55;
    public static readonly KW_DESCRIBE = 56;
    public static readonly KW_DISTINCT = 57;
    public static readonly KW_DROP = 58;
    public static readonly KW_ELSE = 59;
    public static readonly KW_ENCODING = 60;
    public static readonly KW_END = 61;
    public static readonly KW_ESCAPE = 62;
    public static readonly KW_ESCAPED = 63;
    public static readonly KW_EXCEPT = 64;
    public static readonly KW_EXCLUDING = 65;
    public static readonly KW_EXISTS = 66;
    public static readonly KW_EXPLAIN = 67;
    public static readonly KW_EXTRACT = 68;
    public static readonly KW_EXTENDED = 69;
    public static readonly KW_FALSE = 70;
    public static readonly KW_FIELDS = 71;
    public static readonly KW_FILEFORMAT = 72;
    public static readonly KW_FILES = 73;
    public static readonly KW_FILTER = 74;
    public static readonly KW_FIRST = 75;
    public static readonly KW_FINALIZE_FN = 76;
    public static readonly KW_FOLLOWING = 77;
    public static readonly KW_FOR = 78;
    public static readonly KW_FORMAT = 79;
    public static readonly KW_FORMATTED = 80;
    public static readonly KW_FOREIGN = 81;
    public static readonly KW_FROM = 82;
    public static readonly KW_FULL = 83;
    public static readonly KW_FUNCTION = 84;
    public static readonly KW_FUNCTIONS = 85;
    public static readonly KW_GRANT = 86;
    public static readonly KW_GROUP = 87;
    public static readonly KW_GROUPING = 88;
    public static readonly KW_HASH = 89;
    public static readonly KW_HAVING = 90;
    public static readonly KW_HOUR = 91;
    public static readonly KW_HOURS = 92;
    public static readonly KW_IF = 93;
    public static readonly KW_IN = 94;
    public static readonly KW_INCLUDING = 95;
    public static readonly KW_INCREMENTAL = 96;
    public static readonly KW_INNER = 97;
    public static readonly KW_INPATH = 98;
    public static readonly KW_INSERT = 99;
    public static readonly KW_INTERSECT = 100;
    public static readonly KW_INTERVAL = 101;
    public static readonly KW_INTERMEDIATE = 102;
    public static readonly KW_INTO = 103;
    public static readonly KW_INIT_FN = 104;
    public static readonly KW_IREGEXP = 105;
    public static readonly KW_ILIKE = 106;
    public static readonly KW_INVALIDATE = 107;
    public static readonly KW_IS = 108;
    public static readonly KW_JOIN = 109;
    public static readonly KW_KEY = 110;
    public static readonly KW_KUDU = 111;
    public static readonly KW_LAST = 112;
    public static readonly KW_LATERAL = 113;
    public static readonly KW_LEFT = 114;
    public static readonly KW_LIKE = 115;
    public static readonly KW_LIMIT = 116;
    public static readonly KW_LINES = 117;
    public static readonly KW_LOAD = 118;
    public static readonly KW_LOCALTIME = 119;
    public static readonly KW_LOCALTIMESTAMP = 120;
    public static readonly KW_METADATA = 121;
    public static readonly KW_MINUTE = 122;
    public static readonly KW_MINUTES = 123;
    public static readonly KW_MONTH = 124;
    public static readonly KW_MONTHS = 125;
    public static readonly KW_MERGE_FN = 126;
    public static readonly KW_NFC = 127;
    public static readonly KW_NFD = 128;
    public static readonly KW_NFKC = 129;
    public static readonly KW_NFKD = 130;
    public static readonly KW_NORMALIZE = 131;
    public static readonly KW_NOT = 132;
    public static readonly KW_NULL = 133;
    public static readonly KW_NULLS = 134;
    public static readonly KW_OFFSET = 135;
    public static readonly KW_ON = 136;
    public static readonly KW_OPTION = 137;
    public static readonly KW_OR = 138;
    public static readonly KW_ORDER = 139;
    public static readonly KW_ORDINALITY = 140;
    public static readonly KW_OUTER = 141;
    public static readonly KW_OWNER = 142;
    public static readonly KW_OVER = 143;
    public static readonly KW_OVERWRITE = 144;
    public static readonly KW_PARTITION = 145;
    public static readonly KW_PARTITIONS = 146;
    public static readonly KW_PARQUET = 147;
    public static readonly KW_POSITION = 148;
    public static readonly KW_PRECEDING = 149;
    public static readonly KW_PRIMARY = 150;
    public static readonly KW_REPLICATION = 151;
    public static readonly KW_PRIVILEGES = 152;
    public static readonly KW_PROPERTIES = 153;
    public static readonly KW_RANGE = 154;
    public static readonly KW_RECOVER = 155;
    public static readonly KW_RENAME = 156;
    public static readonly KW_REPEATABLE = 157;
    public static readonly KW_REPLACE = 158;
    public static readonly KW_RESTRICT = 159;
    public static readonly KW_RETURNS = 160;
    public static readonly KW_REVOKE = 161;
    public static readonly KW_REFRESH = 162;
    public static readonly KW_REGEXP = 163;
    public static readonly KW_RLIKE = 164;
    public static readonly KW_RIGHT = 165;
    public static readonly KW_ROLE = 166;
    public static readonly KW_ROLES = 167;
    public static readonly KW_ROW = 168;
    public static readonly KW_ROWS = 169;
    public static readonly KW_SCHEMA = 170;
    public static readonly KW_SCHEMAS = 171;
    public static readonly KW_SECOND = 172;
    public static readonly KW_SECONDS = 173;
    public static readonly KW_SELECT = 174;
    public static readonly KW_SERDEPROPERTIES = 175;
    public static readonly KW_SET = 176;
    public static readonly KW_SEMI = 177;
    public static readonly KW_SERVER = 178;
    public static readonly KW_SHOW = 179;
    public static readonly KW_SHUTDOWN = 180;
    public static readonly KW_SOME = 181;
    public static readonly KW_STATS = 182;
    public static readonly KW_STRAIGHT_JOIN = 183;
    public static readonly KW_SUBSTRING = 184;
    public static readonly KW_SYSTEM = 185;
    public static readonly KW_SYMBOL = 186;
    public static readonly KW_SERIALIZE_FN = 187;
    public static readonly KW_TABLE = 188;
    public static readonly KW_TABLES = 189;
    public static readonly KW_TABLESAMPLE = 190;
    public static readonly KW_TERMINATED = 191;
    public static readonly KW_THEN = 192;
    public static readonly KW_TO = 193;
    public static readonly KW_TRUE = 194;
    public static readonly KW_TRY_CAST = 195;
    public static readonly KW_TRUNCATE = 196;
    public static readonly KW_UNCACHED = 197;
    public static readonly KW_UESCAPE = 198;
    public static readonly KW_UNBOUNDED = 199;
    public static readonly KW_UNION = 200;
    public static readonly KW_UNNEST = 201;
    public static readonly KW_UNSET = 202;
    public static readonly KW_USE = 203;
    public static readonly KW_USER = 204;
    public static readonly KW_USING = 205;
    public static readonly KW_UPDATE_FN = 206;
    public static readonly KW_UPSERT = 207;
    public static readonly KW_UNKNOWN = 208;
    public static readonly KW_URI = 209;
    public static readonly KW_VALUE = 210;
    public static readonly KW_VALUES = 211;
    public static readonly KW_VIEW = 212;
    public static readonly KW_VIEWS = 213;
    public static readonly KW_WHEN = 214;
    public static readonly KW_WHERE = 215;
    public static readonly KW_WITH = 216;
    public static readonly KW_YEAR = 217;
    public static readonly KW_YEARS = 218;
    public static readonly KW_TEXTFILE = 219;
    public static readonly KW_ORC = 220;
    public static readonly KW_AVRO = 221;
    public static readonly KW_SEQUENCEFILE = 222;
    public static readonly KW_RCFILE = 223;
    public static readonly KW_REFERENCES = 224;
    public static readonly KW_NOVALIDATE = 225;
    public static readonly KW_RELY = 226;
    public static readonly KW_BINARY = 227;
    public static readonly KW_BIGINT = 228;
    public static readonly KW_BOOLEAN = 229;
    public static readonly KW_CHAR = 230;
    public static readonly KW_DATE = 231;
    public static readonly KW_DECIMAL = 232;
    public static readonly KW_DOUBLE = 233;
    public static readonly KW_INT = 234;
    public static readonly KW_MAP = 235;
    public static readonly KW_REAL = 236;
    public static readonly KW_SMALLINT = 237;
    public static readonly KW_FLOAT = 238;
    public static readonly KW_STRING = 239;
    public static readonly KW_STRUCT = 240;
    public static readonly KW_TIMESTAMP = 241;
    public static readonly KW_TINYINT = 242;
    public static readonly KW_VARCHAR = 243;
    public static readonly KW_COMPLEX = 244;
    public static readonly STATS_NUMDVS = 245;
    public static readonly STATS_NUMNULLS = 246;
    public static readonly STATS_AVGSIZE = 247;
    public static readonly STATS_MAXSIZE = 248;
    public static readonly EQ = 249;
    public static readonly NEQ = 250;
    public static readonly LT = 251;
    public static readonly LTE = 252;
    public static readonly GT = 253;
    public static readonly GTE = 254;
    public static readonly PLUS = 255;
    public static readonly MINUS = 256;
    public static readonly ASTERISK = 257;
    public static readonly SLASH = 258;
    public static readonly PERCENT = 259;
    public static readonly CONCAT = 260;
    public static readonly DOT = 261;
    public static readonly SEMICOLON = 262;
    public static readonly COMMA = 263;
    public static readonly COLON = 264;
    public static readonly LPAREN = 265;
    public static readonly RPAREN = 266;
    public static readonly LSQUARE = 267;
    public static readonly RSQUARE = 268;
    public static readonly LCURLY = 269;
    public static readonly RCURLY = 270;
    public static readonly BITWISEOR = 271;
    public static readonly QUESTION = 272;
    public static readonly RIGHT_ARROW = 273;
    public static readonly STRING = 274;
    public static readonly UNICODE_STRING = 275;
    public static readonly BINARY_LITERAL = 276;
    public static readonly INTEGER_VALUE = 277;
    public static readonly DECIMAL_VALUE = 278;
    public static readonly DOUBLE_VALUE = 279;
    public static readonly IDENTIFIER = 280;
    public static readonly DIGIT_IDENTIFIER = 281;
    public static readonly QUOTED_IDENTIFIER = 282;
    public static readonly BACKQUOTED_IDENTIFIER = 283;
    public static readonly TIME_WITH_TIME_ZONE = 284;
    public static readonly TIMESTAMP_WITH_TIME_ZONE = 285;
    public static readonly DOUBLE_PRECISION = 286;
    public static readonly LINE_COMMENT = 287;
    public static readonly BRACKETED_COMMENT = 288;
    public static readonly WHITE_SPACE = 289;
    public static readonly RULE_program = 0;
    public static readonly RULE_singleStatement = 1;
    public static readonly RULE_sqlStatement = 2;
    public static readonly RULE_useStatement = 3;
    public static readonly RULE_createStatement = 4;
    public static readonly RULE_createTableSelect = 5;
    public static readonly RULE_createTableLike = 6;
    public static readonly RULE_createKuduTableAsSelect = 7;
    public static readonly RULE_createView = 8;
    public static readonly RULE_createSchema = 9;
    public static readonly RULE_createRole = 10;
    public static readonly RULE_createAggregateFunction = 11;
    public static readonly RULE_createFunction = 12;
    public static readonly RULE_alterStatement = 13;
    public static readonly RULE_alterDatabase = 14;
    public static readonly RULE_alterStatsKey = 15;
    public static readonly RULE_alterPartitionCache = 16;
    public static readonly RULE_changeColumnDefine = 17;
    public static readonly RULE_alterDropSingleColumn = 18;
    public static readonly RULE_alterTableOwner = 19;
    public static readonly RULE_replaceOrAddColumns = 20;
    public static readonly RULE_addSingleColumn = 21;
    public static readonly RULE_alterTableNonKuduOrKuduOnly = 22;
    public static readonly RULE_addPartitionByRangeOrValue = 23;
    public static readonly RULE_alterFormat = 24;
    public static readonly RULE_recoverPartitions = 25;
    public static readonly RULE_dropPartitionByRangeOrValue = 26;
    public static readonly RULE_alterView = 27;
    public static readonly RULE_renameView = 28;
    public static readonly RULE_alterViewOwner = 29;
    public static readonly RULE_renameTable = 30;
    public static readonly RULE_alterUnSetOrSetViewTblproperties = 31;
    public static readonly RULE_truncateTableStatement = 32;
    public static readonly RULE_describeStatement = 33;
    public static readonly RULE_computeStatement = 34;
    public static readonly RULE_computeStats = 35;
    public static readonly RULE_computeIncrementalStats = 36;
    public static readonly RULE_dropStatement = 37;
    public static readonly RULE_dropSchema = 38;
    public static readonly RULE_dropView = 39;
    public static readonly RULE_dropTable = 40;
    public static readonly RULE_dropIncrementalStats = 41;
    public static readonly RULE_dropFunction = 42;
    public static readonly RULE_dropRole = 43;
    public static readonly RULE_grantStatement = 44;
    public static readonly RULE_grantRole = 45;
    public static readonly RULE_grant = 46;
    public static readonly RULE_revokeStatement = 47;
    public static readonly RULE_revokeRole = 48;
    public static readonly RULE_revoke = 49;
    public static readonly RULE_insertStatement = 50;
    public static readonly RULE_deleteStatement = 51;
    public static readonly RULE_delete = 52;
    public static readonly RULE_deleteTableRef = 53;
    public static readonly RULE_updateStatement = 54;
    public static readonly RULE_upsertStatement = 55;
    public static readonly RULE_showStatement = 56;
    public static readonly RULE_showSchemas = 57;
    public static readonly RULE_showTables = 58;
    public static readonly RULE_showFunctions = 59;
    public static readonly RULE_showCreateTable = 60;
    public static readonly RULE_showCreateView = 61;
    public static readonly RULE_showTableStats = 62;
    public static readonly RULE_showColumnStats = 63;
    public static readonly RULE_showPartitions = 64;
    public static readonly RULE_showFiles = 65;
    public static readonly RULE_showRoles = 66;
    public static readonly RULE_showRoleGrant = 67;
    public static readonly RULE_showGrants = 68;
    public static readonly RULE_showDatabaseGrant = 69;
    public static readonly RULE_showTableGrant = 70;
    public static readonly RULE_showColumnGrant = 71;
    public static readonly RULE_addCommentStatement = 72;
    public static readonly RULE_addDatabaseComments = 73;
    public static readonly RULE_addTableComments = 74;
    public static readonly RULE_addColumnComments = 75;
    public static readonly RULE_explainStatement = 76;
    public static readonly RULE_setStatement = 77;
    public static readonly RULE_shutdownStatement = 78;
    public static readonly RULE_invalidateMetaStatement = 79;
    public static readonly RULE_loadDataStatement = 80;
    public static readonly RULE_refreshStatement = 81;
    public static readonly RULE_refreshMeta = 82;
    public static readonly RULE_refreshAuth = 83;
    public static readonly RULE_refreshFunction = 84;
    public static readonly RULE_ifExists = 85;
    public static readonly RULE_ifNotExists = 86;
    public static readonly RULE_tableNameCreate = 87;
    public static readonly RULE_databaseNameCreate = 88;
    public static readonly RULE_viewNameCreate = 89;
    public static readonly RULE_functionNameCreate = 90;
    public static readonly RULE_columnNamePathCreate = 91;
    public static readonly RULE_databaseNamePath = 92;
    public static readonly RULE_tableNamePath = 93;
    public static readonly RULE_viewNamePath = 94;
    public static readonly RULE_functionNamePath = 95;
    public static readonly RULE_columnNamePath = 96;
    public static readonly RULE_columnName = 97;
    public static readonly RULE_tableOrViewPath = 98;
    public static readonly RULE_createCommonItem = 99;
    public static readonly RULE_assignmentList = 100;
    public static readonly RULE_assignmentItem = 101;
    public static readonly RULE_viewColumns = 102;
    public static readonly RULE_viewColumnItem = 103;
    public static readonly RULE_queryStatement = 104;
    public static readonly RULE_with = 105;
    public static readonly RULE_constraintSpecification = 106;
    public static readonly RULE_foreignKeySpecification = 107;
    public static readonly RULE_columnSpec = 108;
    public static readonly RULE_columnDefinition = 109;
    public static readonly RULE_kuduTableElement = 110;
    public static readonly RULE_kuduColumnDefinition = 111;
    public static readonly RULE_commentClause = 112;
    public static readonly RULE_columnSpecWithKudu = 113;
    public static readonly RULE_createColumnSpecWithKudu = 114;
    public static readonly RULE_kuduAttributes = 115;
    public static readonly RULE_kuduStorageAttr = 116;
    public static readonly RULE_statsKey = 117;
    public static readonly RULE_fileFormat = 118;
    public static readonly RULE_kuduPartitionClause = 119;
    public static readonly RULE_hashClause = 120;
    public static readonly RULE_rangeClause = 121;
    public static readonly RULE_kuduPartitionSpec = 122;
    public static readonly RULE_cacheSpec = 123;
    public static readonly RULE_rangeOperator = 124;
    public static readonly RULE_partitionCol = 125;
    public static readonly RULE_likeClause = 126;
    public static readonly RULE_properties = 127;
    public static readonly RULE_partitionedBy = 128;
    public static readonly RULE_sortedBy = 129;
    public static readonly RULE_rowFormat = 130;
    public static readonly RULE_property = 131;
    public static readonly RULE_queryNoWith = 132;
    public static readonly RULE_queryTerm = 133;
    public static readonly RULE_queryPrimary = 134;
    public static readonly RULE_sortItem = 135;
    public static readonly RULE_querySpecification = 136;
    public static readonly RULE_whereClause = 137;
    public static readonly RULE_havingClause = 138;
    public static readonly RULE_groupBy = 139;
    public static readonly RULE_groupingElement = 140;
    public static readonly RULE_groupingSet = 141;
    public static readonly RULE_namedQuery = 142;
    public static readonly RULE_setQuantifier = 143;
    public static readonly RULE_selectItem = 144;
    public static readonly RULE_relation = 145;
    public static readonly RULE_joinType = 146;
    public static readonly RULE_joinCriteria = 147;
    public static readonly RULE_sampledRelation = 148;
    public static readonly RULE_sampleType = 149;
    public static readonly RULE_aliasedRelation = 150;
    public static readonly RULE_columnAliases = 151;
    public static readonly RULE_relationPrimary = 152;
    public static readonly RULE_subQueryRelation = 153;
    public static readonly RULE_unnest = 154;
    public static readonly RULE_parenthesizedRelation = 155;
    public static readonly RULE_columnItem = 156;
    public static readonly RULE_expression = 157;
    public static readonly RULE_booleanExpression = 158;
    public static readonly RULE_predicate = 159;
    public static readonly RULE_valueExpression = 160;
    public static readonly RULE_primaryExpression = 161;
    public static readonly RULE_stringLiteral = 162;
    public static readonly RULE_comparisonOperator = 163;
    public static readonly RULE_comparisonQuantifier = 164;
    public static readonly RULE_booleanValue = 165;
    public static readonly RULE_interval = 166;
    public static readonly RULE_intervalField = 167;
    public static readonly RULE_normalForm = 168;
    public static readonly RULE_type = 169;
    public static readonly RULE_dataType = 170;
    public static readonly RULE_typeParameter = 171;
    public static readonly RULE_baseType = 172;
    public static readonly RULE_whenClause = 173;
    public static readonly RULE_filter = 174;
    public static readonly RULE_partitionByClause = 175;
    public static readonly RULE_over = 176;
    public static readonly RULE_windowFrame = 177;
    public static readonly RULE_frameBound = 178;
    public static readonly RULE_pathElement = 179;
    public static readonly RULE_pathSpecification = 180;
    public static readonly RULE_privilege = 181;
    public static readonly RULE_objectType = 182;
    public static readonly RULE_qualifiedName = 183;
    public static readonly RULE_principal = 184;
    public static readonly RULE_identifier = 185;
    public static readonly RULE_number = 186;
    public static readonly RULE_reservedKeywordsUsedAsFuncName = 187;
    public static readonly RULE_nonReserved = 188;

    public static readonly literalNames = [
        null, "'ADD'", "'ALL'", "'ANALYTIC'", "'ALTER'", "'AND'", "'ANY'", 
        "'ANTI'", "'ARRAY'", "'AS'", "'ASC'", "'AT'", "'AGGREGATE'", "'AUTHORIZATION'", 
        "'BERNOULLI'", "'BETWEEN'", "'BLOCK_SIZE'", "'PARTITIONED'", "'PREPARE_FN'", 
        "'EXTERNAL'", "'CLOSEFN'", "'SORT'", "'PURGE'", "'STORED'", "'LOCATION'", 
        "'TBLPROPERTIES'", "'BY'", "'CASCADE'", "'CASE'", "'CAST'", "'CACHED'", 
        "'CHANGE'", "'COLUMN'", "'COLUMNS'", "'COMMENT'", "'COMPRESSION'", 
        "'COMPUTE'", "'CREATE'", "'CROSS'", "'CURRENT'", "'CURRENT_DATE'", 
        "'CURRENT_PATH'", "'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", "'CURRENT_USER'", 
        "'DATA'", "'DATABASE'", "'DATABASES'", "'DAY'", "'DAYS'", "'DELETE'", 
        "'DEFAULT'", "'DELIMITED'", "'DISABLE'", "'UPDATE'", "'DESC'", "'DESCRIBE'", 
        "'DISTINCT'", "'DROP'", "'ELSE'", "'ENCODING'", "'END'", "'ESCAPE'", 
        "'ESCAPED'", "'EXCEPT'", "'EXCLUDING'", "'EXISTS'", "'EXPLAIN'", 
        "'EXTRACT'", "'EXTENDED'", "'FALSE'", "'FIELDS'", "'FILEFORMAT'", 
        "'FILES'", "'FILTER'", "'FIRST'", "'FINALIZE_FN'", "'FOLLOWING'", 
        "'FOR'", "'FORMAT'", "'FORMATTED'", "'FOREIGN'", "'FROM'", "'FULL'", 
        "'FUNCTION'", "'FUNCTIONS'", "'GRANT'", "'GROUP'", "'GROUPING'", 
        "'HASH'", "'HAVING'", "'HOUR'", "'HOURS'", "'IF'", "'IN'", "'INCLUDING'", 
        "'INCREMENTAL'", "'INNER'", "'INPATH'", "'INSERT'", "'INTERSECT'", 
        "'INTERVAL'", "'INTERMEDIATE'", "'INTO'", "'INIT_FN'", "'IREGEXP'", 
        "'ILIKE'", "'INVALIDATE'", "'IS'", "'JOIN'", "'KEY'", "'KUDU'", 
        "'LAST'", "'LATERAL'", "'LEFT'", "'LIKE'", "'LIMIT'", "'LINES'", 
        "'LOAD'", "'LOCALTIME'", "'LOCALTIMESTAMP'", "'METADATA'", "'MINUTE'", 
        "'MINUTES'", "'MONTH'", "'MONTHS'", "'MERGE_FN'", "'NFC'", "'NFD'", 
        "'NFKC'", "'NFKD'", "'NORMALIZE'", "'NOT'", "'NULL'", "'NULLS'", 
        "'OFFSET'", "'ON'", "'OPTION'", "'OR'", "'ORDER'", "'ORDINALITY'", 
        "'OUTER'", "'OWNER'", "'OVER'", "'OVERWRITE'", "'PARTITION'", "'PARTITIONS'", 
        "'PARQUET'", "'POSITION'", "'PRECEDING'", "'PRIMARY'", "'REPLICATION'", 
        "'PRIVILEGES'", "'PROPERTIES'", "'RANGE'", "'RECOVER'", "'RENAME'", 
        "'REPEATABLE'", "'REPLACE'", "'RESTRICT'", "'RETURNS'", "'REVOKE'", 
        "'REFRESH'", "'REGEXP'", "'RLIKE'", "'RIGHT'", "'ROLE'", "'ROLES'", 
        "'ROW'", "'ROWS'", "'SCHEMA'", "'SCHEMAS'", "'SECOND'", "'SECONDS'", 
        "'SELECT'", "'SERDEPROPERTIES'", "'SET'", "'SEMI'", "'SERVER'", 
        "'SHOW'", "'SHUTDOWN'", "'SOME'", "'STATS'", "'STRAIGHT_JOIN'", 
        "'SUBSTRING'", "'SYSTEM'", "'SYMBOL'", "'SERIALIZE_FN'", "'TABLE'", 
        "'TABLES'", "'TABLESAMPLE'", "'TERMINATED '", "'THEN'", "'TO'", 
        "'TRUE'", "'TRY_CAST'", "'TRUNCATE'", "'UNCACHED'", "'UESCAPE'", 
        "'UNBOUNDED'", "'UNION'", "'UNNEST'", "'UNSET'", "'USE'", "'USER'", 
        "'USING'", "'UPDATE_FN'", "'UPSERT'", "'UNKNOWN'", "'URI'", "'VALUE'", 
        "'VALUES'", "'VIEW'", "'VIEWS'", "'WHEN'", "'WHERE'", "'WITH'", 
        "'YEAR'", "'YEARS'", "'TEXTFILE'", "'ORC'", "'AVRO'", "'SEQUENCEFILE'", 
        "'RCFILE'", "'REFERENCES'", "'NOVALIDATE'", "'RELY'", "'BINARY'", 
        "'BIGINT'", "'BOOLEAN'", "'CHAR'", "'DATE'", "'DECIMAL'", "'DOUBLE'", 
        "'INT'", "'MAP'", "'REAL'", "'SMALLINT'", "'FLOAT'", "'STRING'", 
        "'STRUCT'", "'TIMESTAMP'", "'TINYINT'", "'VARCHAR'", "'COMPLEX'", 
        "''NUMDVS''", "''NUMNULLS''", "''AVGSIZE''", "''MAXSIZE''", "'='", 
        null, "'<'", "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", 
        "'%'", "'||'", "'.'", "';'", "','", "':'", "'('", "')'", "'['", 
        "']'", "'{'", "'}'", "'|'", "'?'", "'->'"
    ];

    public static readonly symbolicNames = [
        null, "KW_ADD", "KW_ALL", "KW_ANALYTIC", "KW_ALTER", "KW_AND", "KW_ANY", 
        "KW_ANTI", "KW_ARRAY", "KW_AS", "KW_ASC", "KW_AT", "KW_AGGREGATE", 
        "KW_AUTHORIZATION", "KW_BERNOULLI", "KW_BETWEEN", "KW_BLOCK_SIZE", 
        "KW_PARTITIONED", "KW_PREPARE_FN", "KW_EXTERNAL", "KW_CLOSEFN", 
        "KW_SORT", "KW_PURGE", "KW_STORED", "KW_LOCATION", "KW_TBLPROPERTIES", 
        "KW_BY", "KW_CASCADE", "KW_CASE", "KW_CAST", "KW_CACHED", "KW_CHANGE", 
        "KW_COLUMN", "KW_COLUMNS", "KW_COMMENT", "KW_COMPRESSION", "KW_COMPUTE", 
        "KW_CREATE", "KW_CROSS", "KW_CURRENT", "KW_CURRENT_DATE", "KW_CURRENT_PATH", 
        "KW_CURRENT_TIME", "KW_CURRENT_TIMESTAMP", "KW_CURRENT_USER", "KW_DATA", 
        "KW_DATABASE", "KW_DATABASES", "KW_DAY", "KW_DAYS", "KW_DELETE", 
        "KW_DEFAULT", "KW_DELIMITED", "KW_DISABLE", "KW_UPDATE", "KW_DESC", 
        "KW_DESCRIBE", "KW_DISTINCT", "KW_DROP", "KW_ELSE", "KW_ENCODING", 
        "KW_END", "KW_ESCAPE", "KW_ESCAPED", "KW_EXCEPT", "KW_EXCLUDING", 
        "KW_EXISTS", "KW_EXPLAIN", "KW_EXTRACT", "KW_EXTENDED", "KW_FALSE", 
        "KW_FIELDS", "KW_FILEFORMAT", "KW_FILES", "KW_FILTER", "KW_FIRST", 
        "KW_FINALIZE_FN", "KW_FOLLOWING", "KW_FOR", "KW_FORMAT", "KW_FORMATTED", 
        "KW_FOREIGN", "KW_FROM", "KW_FULL", "KW_FUNCTION", "KW_FUNCTIONS", 
        "KW_GRANT", "KW_GROUP", "KW_GROUPING", "KW_HASH", "KW_HAVING", "KW_HOUR", 
        "KW_HOURS", "KW_IF", "KW_IN", "KW_INCLUDING", "KW_INCREMENTAL", 
        "KW_INNER", "KW_INPATH", "KW_INSERT", "KW_INTERSECT", "KW_INTERVAL", 
        "KW_INTERMEDIATE", "KW_INTO", "KW_INIT_FN", "KW_IREGEXP", "KW_ILIKE", 
        "KW_INVALIDATE", "KW_IS", "KW_JOIN", "KW_KEY", "KW_KUDU", "KW_LAST", 
        "KW_LATERAL", "KW_LEFT", "KW_LIKE", "KW_LIMIT", "KW_LINES", "KW_LOAD", 
        "KW_LOCALTIME", "KW_LOCALTIMESTAMP", "KW_METADATA", "KW_MINUTE", 
        "KW_MINUTES", "KW_MONTH", "KW_MONTHS", "KW_MERGE_FN", "KW_NFC", 
        "KW_NFD", "KW_NFKC", "KW_NFKD", "KW_NORMALIZE", "KW_NOT", "KW_NULL", 
        "KW_NULLS", "KW_OFFSET", "KW_ON", "KW_OPTION", "KW_OR", "KW_ORDER", 
        "KW_ORDINALITY", "KW_OUTER", "KW_OWNER", "KW_OVER", "KW_OVERWRITE", 
        "KW_PARTITION", "KW_PARTITIONS", "KW_PARQUET", "KW_POSITION", "KW_PRECEDING", 
        "KW_PRIMARY", "KW_REPLICATION", "KW_PRIVILEGES", "KW_PROPERTIES", 
        "KW_RANGE", "KW_RECOVER", "KW_RENAME", "KW_REPEATABLE", "KW_REPLACE", 
        "KW_RESTRICT", "KW_RETURNS", "KW_REVOKE", "KW_REFRESH", "KW_REGEXP", 
        "KW_RLIKE", "KW_RIGHT", "KW_ROLE", "KW_ROLES", "KW_ROW", "KW_ROWS", 
        "KW_SCHEMA", "KW_SCHEMAS", "KW_SECOND", "KW_SECONDS", "KW_SELECT", 
        "KW_SERDEPROPERTIES", "KW_SET", "KW_SEMI", "KW_SERVER", "KW_SHOW", 
        "KW_SHUTDOWN", "KW_SOME", "KW_STATS", "KW_STRAIGHT_JOIN", "KW_SUBSTRING", 
        "KW_SYSTEM", "KW_SYMBOL", "KW_SERIALIZE_FN", "KW_TABLE", "KW_TABLES", 
        "KW_TABLESAMPLE", "KW_TERMINATED", "KW_THEN", "KW_TO", "KW_TRUE", 
        "KW_TRY_CAST", "KW_TRUNCATE", "KW_UNCACHED", "KW_UESCAPE", "KW_UNBOUNDED", 
        "KW_UNION", "KW_UNNEST", "KW_UNSET", "KW_USE", "KW_USER", "KW_USING", 
        "KW_UPDATE_FN", "KW_UPSERT", "KW_UNKNOWN", "KW_URI", "KW_VALUE", 
        "KW_VALUES", "KW_VIEW", "KW_VIEWS", "KW_WHEN", "KW_WHERE", "KW_WITH", 
        "KW_YEAR", "KW_YEARS", "KW_TEXTFILE", "KW_ORC", "KW_AVRO", "KW_SEQUENCEFILE", 
        "KW_RCFILE", "KW_REFERENCES", "KW_NOVALIDATE", "KW_RELY", "KW_BINARY", 
        "KW_BIGINT", "KW_BOOLEAN", "KW_CHAR", "KW_DATE", "KW_DECIMAL", "KW_DOUBLE", 
        "KW_INT", "KW_MAP", "KW_REAL", "KW_SMALLINT", "KW_FLOAT", "KW_STRING", 
        "KW_STRUCT", "KW_TIMESTAMP", "KW_TINYINT", "KW_VARCHAR", "KW_COMPLEX", 
        "STATS_NUMDVS", "STATS_NUMNULLS", "STATS_AVGSIZE", "STATS_MAXSIZE", 
        "EQ", "NEQ", "LT", "LTE", "GT", "GTE", "PLUS", "MINUS", "ASTERISK", 
        "SLASH", "PERCENT", "CONCAT", "DOT", "SEMICOLON", "COMMA", "COLON", 
        "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "LCURLY", "RCURLY", "BITWISEOR", 
        "QUESTION", "RIGHT_ARROW", "STRING", "UNICODE_STRING", "BINARY_LITERAL", 
        "INTEGER_VALUE", "DECIMAL_VALUE", "DOUBLE_VALUE", "IDENTIFIER", 
        "DIGIT_IDENTIFIER", "QUOTED_IDENTIFIER", "BACKQUOTED_IDENTIFIER", 
        "TIME_WITH_TIME_ZONE", "TIMESTAMP_WITH_TIME_ZONE", "DOUBLE_PRECISION", 
        "LINE_COMMENT", "BRACKETED_COMMENT", "WHITE_SPACE"
    ];
    public static readonly ruleNames = [
        "program", "singleStatement", "sqlStatement", "useStatement", "createStatement", 
        "createTableSelect", "createTableLike", "createKuduTableAsSelect", 
        "createView", "createSchema", "createRole", "createAggregateFunction", 
        "createFunction", "alterStatement", "alterDatabase", "alterStatsKey", 
        "alterPartitionCache", "changeColumnDefine", "alterDropSingleColumn", 
        "alterTableOwner", "replaceOrAddColumns", "addSingleColumn", "alterTableNonKuduOrKuduOnly", 
        "addPartitionByRangeOrValue", "alterFormat", "recoverPartitions", 
        "dropPartitionByRangeOrValue", "alterView", "renameView", "alterViewOwner", 
        "renameTable", "alterUnSetOrSetViewTblproperties", "truncateTableStatement", 
        "describeStatement", "computeStatement", "computeStats", "computeIncrementalStats", 
        "dropStatement", "dropSchema", "dropView", "dropTable", "dropIncrementalStats", 
        "dropFunction", "dropRole", "grantStatement", "grantRole", "grant", 
        "revokeStatement", "revokeRole", "revoke", "insertStatement", "deleteStatement", 
        "delete", "deleteTableRef", "updateStatement", "upsertStatement", 
        "showStatement", "showSchemas", "showTables", "showFunctions", "showCreateTable", 
        "showCreateView", "showTableStats", "showColumnStats", "showPartitions", 
        "showFiles", "showRoles", "showRoleGrant", "showGrants", "showDatabaseGrant", 
        "showTableGrant", "showColumnGrant", "addCommentStatement", "addDatabaseComments", 
        "addTableComments", "addColumnComments", "explainStatement", "setStatement", 
        "shutdownStatement", "invalidateMetaStatement", "loadDataStatement", 
        "refreshStatement", "refreshMeta", "refreshAuth", "refreshFunction", 
        "ifExists", "ifNotExists", "tableNameCreate", "databaseNameCreate", 
        "viewNameCreate", "functionNameCreate", "columnNamePathCreate", 
        "databaseNamePath", "tableNamePath", "viewNamePath", "functionNamePath", 
        "columnNamePath", "columnName", "tableOrViewPath", "createCommonItem", 
        "assignmentList", "assignmentItem", "viewColumns", "viewColumnItem", 
        "queryStatement", "with", "constraintSpecification", "foreignKeySpecification", 
        "columnSpec", "columnDefinition", "kuduTableElement", "kuduColumnDefinition", 
        "commentClause", "columnSpecWithKudu", "createColumnSpecWithKudu", 
        "kuduAttributes", "kuduStorageAttr", "statsKey", "fileFormat", "kuduPartitionClause", 
        "hashClause", "rangeClause", "kuduPartitionSpec", "cacheSpec", "rangeOperator", 
        "partitionCol", "likeClause", "properties", "partitionedBy", "sortedBy", 
        "rowFormat", "property", "queryNoWith", "queryTerm", "queryPrimary", 
        "sortItem", "querySpecification", "whereClause", "havingClause", 
        "groupBy", "groupingElement", "groupingSet", "namedQuery", "setQuantifier", 
        "selectItem", "relation", "joinType", "joinCriteria", "sampledRelation", 
        "sampleType", "aliasedRelation", "columnAliases", "relationPrimary", 
        "subQueryRelation", "unnest", "parenthesizedRelation", "columnItem", 
        "expression", "booleanExpression", "predicate", "valueExpression", 
        "primaryExpression", "stringLiteral", "comparisonOperator", "comparisonQuantifier", 
        "booleanValue", "interval", "intervalField", "normalForm", "type", 
        "dataType", "typeParameter", "baseType", "whenClause", "filter", 
        "partitionByClause", "over", "windowFrame", "frameBound", "pathElement", 
        "pathSpecification", "privilege", "objectType", "qualifiedName", 
        "principal", "identifier", "number", "reservedKeywordsUsedAsFuncName", 
        "nonReserved",
    ];

    public get grammarFileName(): string { return "ImpalaSqlParser.g4"; }
    public get literalNames(): (string | null)[] { return ImpalaSqlParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return ImpalaSqlParser.symbolicNames; }
    public get ruleNames(): string[] { return ImpalaSqlParser.ruleNames; }
    public get serializedATN(): number[] { return ImpalaSqlParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, ImpalaSqlParser._ATN, ImpalaSqlParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, ImpalaSqlParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 381;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 22085645) !== 0) || _la === 67 || _la === 86 || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 524545) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 134520835) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 1083521) !== 0) || _la === 264 || _la === 265) {
                {
                {
                this.state = 378;
                this.singleStatement();
                }
                }
                this.state = 383;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 384;
            this.match(ImpalaSqlParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public singleStatement(): SingleStatementContext {
        let localContext = new SingleStatementContext(this.context, this.state);
        this.enterRule(localContext, 2, ImpalaSqlParser.RULE_singleStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 386;
            this.sqlStatement();
            this.state = 388;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 262) {
                {
                this.state = 387;
                this.match(ImpalaSqlParser.SEMICOLON);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sqlStatement(): SqlStatementContext {
        let localContext = new SqlStatementContext(this.context, this.state);
        this.enterRule(localContext, 4, ImpalaSqlParser.RULE_sqlStatement);
        try {
            this.state = 412;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 390;
                this.queryStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 391;
                this.useStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 392;
                this.createStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 393;
                this.alterStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 394;
                this.truncateTableStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 395;
                this.describeStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 396;
                this.computeStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 397;
                this.dropStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 398;
                this.grantStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 399;
                this.revokeStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 400;
                this.insertStatement();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 401;
                this.deleteStatement();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 402;
                this.updateStatement();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 403;
                this.upsertStatement();
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 404;
                this.showStatement();
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 405;
                this.addCommentStatement();
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 406;
                this.explainStatement();
                }
                break;
            case 18:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 407;
                this.setStatement();
                }
                break;
            case 19:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 408;
                this.shutdownStatement();
                }
                break;
            case 20:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 409;
                this.invalidateMetaStatement();
                }
                break;
            case 21:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 410;
                this.loadDataStatement();
                }
                break;
            case 22:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 411;
                this.refreshStatement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public useStatement(): UseStatementContext {
        let localContext = new UseStatementContext(this.context, this.state);
        this.enterRule(localContext, 6, ImpalaSqlParser.RULE_useStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 414;
            this.match(ImpalaSqlParser.KW_USE);
            this.state = 415;
            this.databaseNamePath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createStatement(): CreateStatementContext {
        let localContext = new CreateStatementContext(this.context, this.state);
        this.enterRule(localContext, 8, ImpalaSqlParser.RULE_createStatement);
        try {
            this.state = 425;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 417;
                this.createSchema();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 418;
                this.createRole();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 419;
                this.createAggregateFunction();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 420;
                this.createFunction();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 421;
                this.createView();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 422;
                this.createKuduTableAsSelect();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 423;
                this.createTableLike();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 424;
                this.createTableSelect();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createTableSelect(): CreateTableSelectContext {
        let localContext = new CreateTableSelectContext(this.context, this.state);
        this.enterRule(localContext, 10, ImpalaSqlParser.RULE_createTableSelect);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 427;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 429;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 428;
                this.match(ImpalaSqlParser.KW_EXTERNAL);
                }
            }

            this.state = 431;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 433;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 432;
                this.ifNotExists();
                }
            }

            this.state = 435;
            this.tableNameCreate();
            this.state = 451;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
            case 1:
                {
                this.state = 436;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 437;
                this.columnDefinition();
                this.state = 442;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 438;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 439;
                        this.columnDefinition();
                        }
                        }
                    }
                    this.state = 444;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
                }
                this.state = 447;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 263) {
                    {
                    this.state = 445;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 446;
                    this.constraintSpecification();
                    }
                }

                this.state = 449;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            }
            this.state = 459;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 453;
                this.match(ImpalaSqlParser.KW_PARTITIONED);
                this.state = 454;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 457;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
                case 1:
                    {
                    this.state = 455;
                    this.columnAliases();
                    }
                    break;
                case 2:
                    {
                    this.state = 456;
                    this.partitionedBy();
                    }
                    break;
                }
                }
            }

            this.state = 461;
            this.createCommonItem();
            this.state = 464;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9) {
                {
                this.state = 462;
                this.match(ImpalaSqlParser.KW_AS);
                this.state = 463;
                this.queryStatement();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createTableLike(): CreateTableLikeContext {
        let localContext = new CreateTableLikeContext(this.context, this.state);
        this.enterRule(localContext, 12, ImpalaSqlParser.RULE_createTableLike);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 466;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 468;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 467;
                this.match(ImpalaSqlParser.KW_EXTERNAL);
                }
            }

            this.state = 470;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 472;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 471;
                this.ifNotExists();
                }
            }

            this.state = 474;
            this.tableNameCreate();
            this.state = 475;
            this.match(ImpalaSqlParser.KW_LIKE);
            this.state = 479;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_BERNOULLI:
            case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
            case ImpalaSqlParser.KW_CURRENT_USER:
            case ImpalaSqlParser.KW_DAY:
            case ImpalaSqlParser.KW_DAYS:
            case ImpalaSqlParser.KW_EXCLUDING:
            case ImpalaSqlParser.KW_EXTRACT:
            case ImpalaSqlParser.KW_HOUR:
            case ImpalaSqlParser.KW_INCLUDING:
            case ImpalaSqlParser.KW_KEY:
            case ImpalaSqlParser.KW_LOCALTIME:
            case ImpalaSqlParser.KW_MINUTE:
            case ImpalaSqlParser.KW_MINUTES:
            case ImpalaSqlParser.KW_MONTH:
            case ImpalaSqlParser.KW_MONTHS:
            case ImpalaSqlParser.KW_NFC:
            case ImpalaSqlParser.KW_NFD:
            case ImpalaSqlParser.KW_NFKC:
            case ImpalaSqlParser.KW_NFKD:
            case ImpalaSqlParser.KW_OPTION:
            case ImpalaSqlParser.KW_ORDINALITY:
            case ImpalaSqlParser.KW_PRIVILEGES:
            case ImpalaSqlParser.KW_PROPERTIES:
            case ImpalaSqlParser.KW_SECOND:
            case ImpalaSqlParser.KW_SECONDS:
            case ImpalaSqlParser.KW_SHUTDOWN:
            case ImpalaSqlParser.KW_SUBSTRING:
            case ImpalaSqlParser.KW_SYSTEM:
            case ImpalaSqlParser.KW_TRY_CAST:
            case ImpalaSqlParser.KW_USER:
            case ImpalaSqlParser.KW_VIEWS:
            case ImpalaSqlParser.KW_YEAR:
            case ImpalaSqlParser.KW_ORC:
            case ImpalaSqlParser.KW_DATE:
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.IDENTIFIER:
            case ImpalaSqlParser.DIGIT_IDENTIFIER:
            case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
                {
                this.state = 476;
                this.tableNamePath();
                }
                break;
            case ImpalaSqlParser.KW_PARQUET:
                {
                this.state = 477;
                this.match(ImpalaSqlParser.KW_PARQUET);
                this.state = 478;
                localContext._parquet = this.stringLiteral();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 484;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 481;
                this.match(ImpalaSqlParser.KW_PARTITIONED);
                this.state = 482;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 483;
                this.partitionedBy();
                }
            }

            this.state = 486;
            this.createCommonItem();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createKuduTableAsSelect(): CreateKuduTableAsSelectContext {
        let localContext = new CreateKuduTableAsSelectContext(this.context, this.state);
        this.enterRule(localContext, 14, ImpalaSqlParser.RULE_createKuduTableAsSelect);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 488;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 490;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 489;
                this.match(ImpalaSqlParser.KW_EXTERNAL);
                }
            }

            this.state = 492;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 494;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 493;
                this.ifNotExists();
                }
            }

            this.state = 496;
            this.tableNameCreate();
            this.state = 514;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 265) {
                {
                this.state = 497;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 498;
                this.kuduTableElement();
                this.state = 503;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 499;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 500;
                        this.kuduTableElement();
                        }
                        }
                    }
                    this.state = 505;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
                }
                this.state = 510;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 263) {
                    {
                    this.state = 506;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 507;
                    this.match(ImpalaSqlParser.KW_PRIMARY);
                    this.state = 508;
                    this.match(ImpalaSqlParser.KW_KEY);
                    this.state = 509;
                    this.columnAliases();
                    }
                }

                this.state = 512;
                this.match(ImpalaSqlParser.RPAREN);
                }
            }

            this.state = 521;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 150) {
                {
                this.state = 516;
                this.match(ImpalaSqlParser.KW_PRIMARY);
                this.state = 517;
                this.match(ImpalaSqlParser.KW_KEY);
                this.state = 519;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 265) {
                    {
                    this.state = 518;
                    this.columnAliases();
                    }
                }

                }
            }

            this.state = 526;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 523;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 524;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 525;
                this.kuduPartitionClause();
                }
            }

            this.state = 529;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 528;
                this.commentClause();
                }
            }

            this.state = 531;
            this.match(ImpalaSqlParser.KW_STORED);
            this.state = 532;
            this.match(ImpalaSqlParser.KW_AS);
            this.state = 533;
            this.match(ImpalaSqlParser.KW_KUDU);
            this.state = 536;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 25) {
                {
                this.state = 534;
                this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
                this.state = 535;
                localContext._tblProp = this.properties();
                }
            }

            this.state = 540;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9) {
                {
                this.state = 538;
                this.match(ImpalaSqlParser.KW_AS);
                this.state = 539;
                this.queryStatement();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createView(): CreateViewContext {
        let localContext = new CreateViewContext(this.context, this.state);
        this.enterRule(localContext, 16, ImpalaSqlParser.RULE_createView);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 542;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 543;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 545;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 544;
                this.ifNotExists();
                }
            }

            this.state = 547;
            this.viewNameCreate();
            this.state = 549;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 265) {
                {
                this.state = 548;
                this.viewColumns();
                }
            }

            this.state = 552;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 551;
                this.commentClause();
                }
            }

            this.state = 556;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 25) {
                {
                this.state = 554;
                this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
                this.state = 555;
                localContext._tblProp = this.properties();
                }
            }

            this.state = 558;
            this.match(ImpalaSqlParser.KW_AS);
            this.state = 559;
            this.queryStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createSchema(): CreateSchemaContext {
        let localContext = new CreateSchemaContext(this.context, this.state);
        this.enterRule(localContext, 18, ImpalaSqlParser.RULE_createSchema);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 561;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 562;
            _la = this.tokenStream.LA(1);
            if(!(_la === 46 || _la === 170)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 564;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 563;
                this.ifNotExists();
                }
            }

            this.state = 566;
            this.databaseNameCreate();
            this.state = 568;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context) ) {
            case 1:
                {
                this.state = 567;
                this.commentClause();
                }
                break;
            }
            this.state = 572;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 24) {
                {
                this.state = 570;
                this.match(ImpalaSqlParser.KW_LOCATION);
                this.state = 571;
                localContext._location = this.stringLiteral();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createRole(): CreateRoleContext {
        let localContext = new CreateRoleContext(this.context, this.state);
        this.enterRule(localContext, 20, ImpalaSqlParser.RULE_createRole);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 574;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 575;
            this.match(ImpalaSqlParser.KW_ROLE);
            this.state = 576;
            localContext._name = this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createAggregateFunction(): CreateAggregateFunctionContext {
        let localContext = new CreateAggregateFunctionContext(this.context, this.state);
        this.enterRule(localContext, 22, ImpalaSqlParser.RULE_createAggregateFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 578;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 580;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 12) {
                {
                this.state = 579;
                this.match(ImpalaSqlParser.KW_AGGREGATE);
                }
            }

            this.state = 582;
            this.match(ImpalaSqlParser.KW_FUNCTION);
            this.state = 584;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 583;
                this.ifNotExists();
                }
            }

            this.state = 586;
            this.functionNameCreate();
            this.state = 599;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 265) {
                {
                this.state = 587;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 596;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 8 || _la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 4286652929) !== 0) || ((((_la - 236)) & ~0x1F) === 0 && ((1 << (_la - 236)) & 511) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 7873) !== 0)) {
                    {
                    this.state = 588;
                    this.type_(0);
                    this.state = 593;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 589;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 590;
                        this.type_(0);
                        }
                        }
                        this.state = 595;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 598;
                this.match(ImpalaSqlParser.RPAREN);
                }
            }

            this.state = 601;
            this.match(ImpalaSqlParser.KW_RETURNS);
            this.state = 602;
            localContext._returnType = this.type_(0);
            this.state = 605;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 102) {
                {
                this.state = 603;
                this.match(ImpalaSqlParser.KW_INTERMEDIATE);
                this.state = 604;
                this.type_(0);
                }
            }

            this.state = 607;
            this.match(ImpalaSqlParser.KW_LOCATION);
            this.state = 608;
            this.match(ImpalaSqlParser.STRING);
            this.state = 612;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 104) {
                {
                this.state = 609;
                this.match(ImpalaSqlParser.KW_INIT_FN);
                this.state = 610;
                this.match(ImpalaSqlParser.EQ);
                this.state = 611;
                this.match(ImpalaSqlParser.STRING);
                }
            }

            this.state = 614;
            this.match(ImpalaSqlParser.KW_UPDATE_FN);
            this.state = 615;
            this.match(ImpalaSqlParser.EQ);
            this.state = 616;
            this.match(ImpalaSqlParser.STRING);
            this.state = 617;
            this.match(ImpalaSqlParser.KW_MERGE_FN);
            this.state = 618;
            this.match(ImpalaSqlParser.EQ);
            this.state = 619;
            this.match(ImpalaSqlParser.STRING);
            this.state = 623;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 18) {
                {
                this.state = 620;
                this.match(ImpalaSqlParser.KW_PREPARE_FN);
                this.state = 621;
                this.match(ImpalaSqlParser.EQ);
                this.state = 622;
                this.match(ImpalaSqlParser.STRING);
                }
            }

            this.state = 628;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 625;
                this.match(ImpalaSqlParser.KW_CLOSEFN);
                this.state = 626;
                this.match(ImpalaSqlParser.EQ);
                this.state = 627;
                this.match(ImpalaSqlParser.STRING);
                }
            }

            this.state = 633;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 187) {
                {
                this.state = 630;
                this.match(ImpalaSqlParser.KW_SERIALIZE_FN);
                this.state = 631;
                this.match(ImpalaSqlParser.EQ);
                this.state = 632;
                this.match(ImpalaSqlParser.STRING);
                }
            }

            this.state = 638;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 76) {
                {
                this.state = 635;
                this.match(ImpalaSqlParser.KW_FINALIZE_FN);
                this.state = 636;
                this.match(ImpalaSqlParser.EQ);
                this.state = 637;
                this.match(ImpalaSqlParser.STRING);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createFunction(): CreateFunctionContext {
        let localContext = new CreateFunctionContext(this.context, this.state);
        this.enterRule(localContext, 24, ImpalaSqlParser.RULE_createFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 640;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 641;
            this.match(ImpalaSqlParser.KW_FUNCTION);
            this.state = 643;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 642;
                this.ifNotExists();
                }
            }

            this.state = 645;
            this.functionNameCreate();
            this.state = 658;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 265) {
                {
                this.state = 646;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 655;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 8 || _la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 4286652929) !== 0) || ((((_la - 236)) & ~0x1F) === 0 && ((1 << (_la - 236)) & 511) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 7873) !== 0)) {
                    {
                    this.state = 647;
                    this.type_(0);
                    this.state = 652;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 648;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 649;
                        this.type_(0);
                        }
                        }
                        this.state = 654;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 657;
                this.match(ImpalaSqlParser.RPAREN);
                }
            }

            this.state = 662;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 160) {
                {
                this.state = 660;
                this.match(ImpalaSqlParser.KW_RETURNS);
                this.state = 661;
                localContext._returnType = this.type_(0);
                }
            }

            this.state = 664;
            this.match(ImpalaSqlParser.KW_LOCATION);
            this.state = 665;
            this.match(ImpalaSqlParser.STRING);
            this.state = 666;
            this.match(ImpalaSqlParser.KW_SYMBOL);
            this.state = 667;
            this.match(ImpalaSqlParser.EQ);
            this.state = 668;
            localContext._symbol_ = this.stringLiteral();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterStatement(): AlterStatementContext {
        let localContext = new AlterStatementContext(this.context, this.state);
        this.enterRule(localContext, 26, ImpalaSqlParser.RULE_alterStatement);
        try {
            this.state = 688;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 50, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 670;
                this.alterDatabase();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 671;
                this.alterUnSetOrSetViewTblproperties();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 672;
                this.renameTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 673;
                this.alterViewOwner();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 674;
                this.alterView();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 675;
                this.renameView();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 676;
                this.dropPartitionByRangeOrValue();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 677;
                this.alterFormat();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 678;
                this.recoverPartitions();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 679;
                this.addPartitionByRangeOrValue();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 680;
                this.alterTableNonKuduOrKuduOnly();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 681;
                this.addSingleColumn();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 682;
                this.replaceOrAddColumns();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 683;
                this.changeColumnDefine();
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 684;
                this.alterStatsKey();
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 685;
                this.alterPartitionCache();
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 686;
                this.alterDropSingleColumn();
                }
                break;
            case 18:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 687;
                this.alterTableOwner();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterDatabase(): AlterDatabaseContext {
        let localContext = new AlterDatabaseContext(this.context, this.state);
        this.enterRule(localContext, 28, ImpalaSqlParser.RULE_alterDatabase);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 690;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 691;
            this.match(ImpalaSqlParser.KW_DATABASE);
            this.state = 692;
            this.databaseNamePath();
            this.state = 693;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 694;
            this.match(ImpalaSqlParser.KW_OWNER);
            this.state = 695;
            _la = this.tokenStream.LA(1);
            if(!(_la === 166 || _la === 204)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 696;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterStatsKey(): AlterStatsKeyContext {
        let localContext = new AlterStatsKeyContext(this.context, this.state);
        this.enterRule(localContext, 30, ImpalaSqlParser.RULE_alterStatsKey);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 698;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 699;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 700;
            this.tableNamePath();
            this.state = 701;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 702;
            this.match(ImpalaSqlParser.KW_COLUMN);
            this.state = 703;
            this.match(ImpalaSqlParser.KW_STATS);
            this.state = 704;
            this.columnNamePath();
            this.state = 705;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 706;
            this.statsKey();
            this.state = 707;
            this.match(ImpalaSqlParser.EQ);
            this.state = 708;
            this.stringLiteral();
            this.state = 714;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 263) {
                {
                this.state = 709;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 710;
                this.statsKey();
                this.state = 711;
                this.match(ImpalaSqlParser.EQ);
                this.state = 712;
                this.stringLiteral();
                }
            }

            this.state = 716;
            this.match(ImpalaSqlParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterPartitionCache(): AlterPartitionCacheContext {
        let localContext = new AlterPartitionCacheContext(this.context, this.state);
        this.enterRule(localContext, 32, ImpalaSqlParser.RULE_alterPartitionCache);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 718;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 719;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 720;
            this.tableNamePath();
            this.state = 723;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 721;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 722;
                this.expression();
                }
            }

            this.state = 725;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 736;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_CACHED:
                {
                {
                this.state = 726;
                this.match(ImpalaSqlParser.KW_CACHED);
                this.state = 727;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 728;
                this.stringLiteral();
                this.state = 733;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 53, this.context) ) {
                case 1:
                    {
                    this.state = 729;
                    this.match(ImpalaSqlParser.KW_WITH);
                    this.state = 730;
                    this.match(ImpalaSqlParser.KW_REPLICATION);
                    this.state = 731;
                    this.match(ImpalaSqlParser.EQ);
                    this.state = 732;
                    this.number_();
                    }
                    break;
                }
                }
                }
                break;
            case ImpalaSqlParser.KW_UNCACHED:
                {
                this.state = 735;
                this.match(ImpalaSqlParser.KW_UNCACHED);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public changeColumnDefine(): ChangeColumnDefineContext {
        let localContext = new ChangeColumnDefineContext(this.context, this.state);
        this.enterRule(localContext, 34, ImpalaSqlParser.RULE_changeColumnDefine);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 738;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 739;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 740;
            this.tableNamePath();
            this.state = 741;
            this.match(ImpalaSqlParser.KW_CHANGE);
            this.state = 742;
            this.columnNamePath();
            this.state = 743;
            this.columnSpecWithKudu();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterDropSingleColumn(): AlterDropSingleColumnContext {
        let localContext = new AlterDropSingleColumnContext(this.context, this.state);
        this.enterRule(localContext, 36, ImpalaSqlParser.RULE_alterDropSingleColumn);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 745;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 746;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 747;
            this.tableNamePath();
            this.state = 748;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 750;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
            case 1:
                {
                this.state = 749;
                this.match(ImpalaSqlParser.KW_COLUMN);
                }
                break;
            }
            this.state = 752;
            this.columnNamePath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterTableOwner(): AlterTableOwnerContext {
        let localContext = new AlterTableOwnerContext(this.context, this.state);
        this.enterRule(localContext, 38, ImpalaSqlParser.RULE_alterTableOwner);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 754;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 755;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 756;
            this.tableNamePath();
            this.state = 757;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 758;
            this.match(ImpalaSqlParser.KW_OWNER);
            this.state = 759;
            _la = this.tokenStream.LA(1);
            if(!(_la === 166 || _la === 204)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 760;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public replaceOrAddColumns(): ReplaceOrAddColumnsContext {
        let localContext = new ReplaceOrAddColumnsContext(this.context, this.state);
        this.enterRule(localContext, 40, ImpalaSqlParser.RULE_replaceOrAddColumns);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 762;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 763;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 764;
            this.tableNamePath();
            this.state = 770;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_REPLACE:
                {
                this.state = 765;
                this.match(ImpalaSqlParser.KW_REPLACE);
                }
                break;
            case ImpalaSqlParser.KW_ADD:
                {
                this.state = 766;
                this.match(ImpalaSqlParser.KW_ADD);
                this.state = 768;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                    this.state = 767;
                    this.ifNotExists();
                    }
                }

                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 772;
            this.match(ImpalaSqlParser.KW_COLUMNS);
            this.state = 773;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 774;
            this.columnSpecWithKudu();
            this.state = 779;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1 + 1) {
                    {
                    {
                    this.state = 775;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 776;
                    this.columnSpecWithKudu();
                    }
                    }
                }
                this.state = 781;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
            }
            this.state = 782;
            this.match(ImpalaSqlParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public addSingleColumn(): AddSingleColumnContext {
        let localContext = new AddSingleColumnContext(this.context, this.state);
        this.enterRule(localContext, 42, ImpalaSqlParser.RULE_addSingleColumn);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 784;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 785;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 786;
            this.tableNamePath();
            this.state = 787;
            this.match(ImpalaSqlParser.KW_ADD);
            this.state = 788;
            this.match(ImpalaSqlParser.KW_COLUMN);
            this.state = 790;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 789;
                this.ifNotExists();
                }
            }

            this.state = 792;
            this.createColumnSpecWithKudu();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterTableNonKuduOrKuduOnly(): AlterTableNonKuduOrKuduOnlyContext {
        let localContext = new AlterTableNonKuduOrKuduOnlyContext(this.context, this.state);
        this.enterRule(localContext, 44, ImpalaSqlParser.RULE_alterTableNonKuduOrKuduOnly);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 794;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 795;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 796;
            this.tableNamePath();
            this.state = 797;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 799;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 60, this.context) ) {
            case 1:
                {
                this.state = 798;
                this.match(ImpalaSqlParser.KW_COLUMN);
                }
                break;
            }
            this.state = 801;
            this.columnNamePath();
            this.state = 810;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_SET:
                {
                this.state = 802;
                this.match(ImpalaSqlParser.KW_SET);
                this.state = 806;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.KW_BLOCK_SIZE:
                case ImpalaSqlParser.KW_COMPRESSION:
                case ImpalaSqlParser.KW_DEFAULT:
                case ImpalaSqlParser.KW_ENCODING:
                    {
                    this.state = 803;
                    this.kuduStorageAttr();
                    }
                    break;
                case ImpalaSqlParser.KW_COMMENT:
                    {
                    this.state = 804;
                    this.match(ImpalaSqlParser.KW_COMMENT);
                    this.state = 805;
                    this.stringLiteral();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            case ImpalaSqlParser.KW_DROP:
                {
                this.state = 808;
                this.match(ImpalaSqlParser.KW_DROP);
                this.state = 809;
                this.match(ImpalaSqlParser.KW_DEFAULT);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public addPartitionByRangeOrValue(): AddPartitionByRangeOrValueContext {
        let localContext = new AddPartitionByRangeOrValueContext(this.context, this.state);
        this.enterRule(localContext, 46, ImpalaSqlParser.RULE_addPartitionByRangeOrValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 812;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 813;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 814;
            this.tableNamePath();
            this.state = 815;
            this.match(ImpalaSqlParser.KW_ADD);
            this.state = 817;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 816;
                this.ifNotExists();
                }
            }

            this.state = 831;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_PARTITION:
                {
                this.state = 819;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 820;
                this.expression();
                this.state = 823;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 24) {
                    {
                    this.state = 821;
                    this.match(ImpalaSqlParser.KW_LOCATION);
                    this.state = 822;
                    this.stringLiteral();
                    }
                }

                this.state = 826;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 30 || _la === 197) {
                    {
                    this.state = 825;
                    this.cacheSpec();
                    }
                }

                }
                break;
            case ImpalaSqlParser.KW_RANGE:
                {
                this.state = 828;
                this.match(ImpalaSqlParser.KW_RANGE);
                this.state = 829;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 830;
                this.kuduPartitionSpec();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterFormat(): AlterFormatContext {
        let localContext = new AlterFormatContext(this.context, this.state);
        this.enterRule(localContext, 48, ImpalaSqlParser.RULE_alterFormat);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 833;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 834;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 835;
            this.tableNamePath();
            this.state = 838;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 836;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 837;
                this.expression();
                }
            }

            this.state = 840;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 852;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_FILEFORMAT:
                {
                {
                this.state = 841;
                this.match(ImpalaSqlParser.KW_FILEFORMAT);
                this.state = 842;
                this.fileFormat();
                }
                }
                break;
            case ImpalaSqlParser.KW_ROW:
                {
                {
                this.state = 843;
                this.match(ImpalaSqlParser.KW_ROW);
                this.state = 844;
                this.match(ImpalaSqlParser.KW_FORMAT);
                this.state = 845;
                this.rowFormat();
                }
                }
                break;
            case ImpalaSqlParser.KW_LOCATION:
                {
                {
                this.state = 846;
                this.match(ImpalaSqlParser.KW_LOCATION);
                this.state = 847;
                this.stringLiteral();
                }
                }
                break;
            case ImpalaSqlParser.KW_TBLPROPERTIES:
                {
                {
                this.state = 848;
                this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
                this.state = 849;
                localContext._tblProp = this.properties();
                }
                }
                break;
            case ImpalaSqlParser.KW_SERDEPROPERTIES:
                {
                {
                this.state = 850;
                this.match(ImpalaSqlParser.KW_SERDEPROPERTIES);
                this.state = 851;
                localContext._tblProp = this.properties();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public recoverPartitions(): RecoverPartitionsContext {
        let localContext = new RecoverPartitionsContext(this.context, this.state);
        this.enterRule(localContext, 50, ImpalaSqlParser.RULE_recoverPartitions);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 854;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 855;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 856;
            this.tableNamePath();
            this.state = 857;
            this.match(ImpalaSqlParser.KW_RECOVER);
            this.state = 858;
            this.match(ImpalaSqlParser.KW_PARTITIONS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dropPartitionByRangeOrValue(): DropPartitionByRangeOrValueContext {
        let localContext = new DropPartitionByRangeOrValueContext(this.context, this.state);
        this.enterRule(localContext, 52, ImpalaSqlParser.RULE_dropPartitionByRangeOrValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 860;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 861;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 862;
            this.tableNamePath();
            this.state = 863;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 865;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 864;
                this.ifExists();
                }
            }

            this.state = 875;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_PARTITION:
                {
                this.state = 867;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 868;
                this.expression();
                this.state = 870;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 22) {
                    {
                    this.state = 869;
                    this.match(ImpalaSqlParser.KW_PURGE);
                    }
                }

                }
                break;
            case ImpalaSqlParser.KW_RANGE:
                {
                this.state = 872;
                this.match(ImpalaSqlParser.KW_RANGE);
                this.state = 873;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 874;
                this.kuduPartitionSpec();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterView(): AlterViewContext {
        let localContext = new AlterViewContext(this.context, this.state);
        this.enterRule(localContext, 54, ImpalaSqlParser.RULE_alterView);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 877;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 878;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 879;
            this.viewNamePath();
            this.state = 881;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 265) {
                {
                this.state = 880;
                this.viewColumns();
                }
            }

            this.state = 883;
            this.match(ImpalaSqlParser.KW_AS);
            this.state = 884;
            this.queryStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public renameView(): RenameViewContext {
        let localContext = new RenameViewContext(this.context, this.state);
        this.enterRule(localContext, 56, ImpalaSqlParser.RULE_renameView);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 886;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 887;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 888;
            this.viewNamePath();
            this.state = 889;
            this.match(ImpalaSqlParser.KW_RENAME);
            this.state = 890;
            this.match(ImpalaSqlParser.KW_TO);
            this.state = 891;
            this.viewNamePath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterViewOwner(): AlterViewOwnerContext {
        let localContext = new AlterViewOwnerContext(this.context, this.state);
        this.enterRule(localContext, 58, ImpalaSqlParser.RULE_alterViewOwner);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 893;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 894;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 895;
            this.viewNamePath();
            this.state = 896;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 897;
            this.match(ImpalaSqlParser.KW_OWNER);
            this.state = 898;
            _la = this.tokenStream.LA(1);
            if(!(_la === 166 || _la === 204)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 899;
            this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public renameTable(): RenameTableContext {
        let localContext = new RenameTableContext(this.context, this.state);
        this.enterRule(localContext, 60, ImpalaSqlParser.RULE_renameTable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 901;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 902;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 903;
            this.tableNamePath();
            this.state = 904;
            this.match(ImpalaSqlParser.KW_RENAME);
            this.state = 905;
            this.match(ImpalaSqlParser.KW_TO);
            this.state = 906;
            this.tableNamePath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterUnSetOrSetViewTblproperties(): AlterUnSetOrSetViewTblpropertiesContext {
        let localContext = new AlterUnSetOrSetViewTblpropertiesContext(this.context, this.state);
        this.enterRule(localContext, 62, ImpalaSqlParser.RULE_alterUnSetOrSetViewTblproperties);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 908;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 909;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 910;
            this.viewNamePath();
            this.state = 911;
            _la = this.tokenStream.LA(1);
            if(!(_la === 176 || _la === 202)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 912;
            this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
            this.state = 913;
            localContext._tblProp = this.properties();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public truncateTableStatement(): TruncateTableStatementContext {
        let localContext = new TruncateTableStatementContext(this.context, this.state);
        this.enterRule(localContext, 64, ImpalaSqlParser.RULE_truncateTableStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 915;
            this.match(ImpalaSqlParser.KW_TRUNCATE);
            this.state = 917;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 188) {
                {
                this.state = 916;
                this.match(ImpalaSqlParser.KW_TABLE);
                }
            }

            this.state = 920;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 919;
                this.ifExists();
                }
            }

            this.state = 922;
            this.tableNamePath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public describeStatement(): DescribeStatementContext {
        let localContext = new DescribeStatementContext(this.context, this.state);
        this.enterRule(localContext, 66, ImpalaSqlParser.RULE_describeStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 924;
            this.match(ImpalaSqlParser.KW_DESCRIBE);
            this.state = 926;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 46) {
                {
                this.state = 925;
                this.match(ImpalaSqlParser.KW_DATABASE);
                }
            }

            this.state = 929;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 69 || _la === 80) {
                {
                this.state = 928;
                _la = this.tokenStream.LA(1);
                if(!(_la === 69 || _la === 80)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 931;
            this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public computeStatement(): ComputeStatementContext {
        let localContext = new ComputeStatementContext(this.context, this.state);
        this.enterRule(localContext, 68, ImpalaSqlParser.RULE_computeStatement);
        try {
            this.state = 935;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 77, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 933;
                this.computeStats();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 934;
                this.computeIncrementalStats();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public computeStats(): ComputeStatsContext {
        let localContext = new ComputeStatsContext(this.context, this.state);
        this.enterRule(localContext, 70, ImpalaSqlParser.RULE_computeStats);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 937;
            this.match(ImpalaSqlParser.KW_COMPUTE);
            this.state = 938;
            this.match(ImpalaSqlParser.KW_STATS);
            this.state = 939;
            this.tableNamePath();
            this.state = 941;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context) ) {
            case 1:
                {
                this.state = 940;
                this.columnAliases();
                }
                break;
            }
            this.state = 955;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 190) {
                {
                this.state = 943;
                this.match(ImpalaSqlParser.KW_TABLESAMPLE);
                this.state = 944;
                this.match(ImpalaSqlParser.KW_SYSTEM);
                this.state = 945;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 946;
                this.number_();
                this.state = 947;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 953;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 157) {
                    {
                    this.state = 948;
                    this.match(ImpalaSqlParser.KW_REPEATABLE);
                    this.state = 949;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 950;
                    this.number_();
                    this.state = 951;
                    this.match(ImpalaSqlParser.RPAREN);
                    }
                }

                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public computeIncrementalStats(): ComputeIncrementalStatsContext {
        let localContext = new ComputeIncrementalStatsContext(this.context, this.state);
        this.enterRule(localContext, 72, ImpalaSqlParser.RULE_computeIncrementalStats);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 957;
            this.match(ImpalaSqlParser.KW_COMPUTE);
            this.state = 958;
            this.match(ImpalaSqlParser.KW_INCREMENTAL);
            this.state = 959;
            this.match(ImpalaSqlParser.KW_STATS);
            this.state = 960;
            this.tableNamePath();
            this.state = 966;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 961;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 962;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 963;
                this.expression();
                this.state = 964;
                this.match(ImpalaSqlParser.RPAREN);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dropStatement(): DropStatementContext {
        let localContext = new DropStatementContext(this.context, this.state);
        this.enterRule(localContext, 74, ImpalaSqlParser.RULE_dropStatement);
        try {
            this.state = 974;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 968;
                this.dropRole();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 969;
                this.dropFunction();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 970;
                this.dropIncrementalStats();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 971;
                this.dropView();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 972;
                this.dropTable();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 973;
                this.dropSchema();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dropSchema(): DropSchemaContext {
        let localContext = new DropSchemaContext(this.context, this.state);
        this.enterRule(localContext, 76, ImpalaSqlParser.RULE_dropSchema);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 976;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 977;
            _la = this.tokenStream.LA(1);
            if(!(_la === 46 || _la === 170)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 979;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 978;
                this.ifExists();
                }
            }

            this.state = 981;
            this.databaseNamePath();
            this.state = 983;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 27 || _la === 159) {
                {
                this.state = 982;
                _la = this.tokenStream.LA(1);
                if(!(_la === 27 || _la === 159)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dropView(): DropViewContext {
        let localContext = new DropViewContext(this.context, this.state);
        this.enterRule(localContext, 78, ImpalaSqlParser.RULE_dropView);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 985;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 986;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 988;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 987;
                this.ifExists();
                }
            }

            this.state = 990;
            this.viewNamePath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dropTable(): DropTableContext {
        let localContext = new DropTableContext(this.context, this.state);
        this.enterRule(localContext, 80, ImpalaSqlParser.RULE_dropTable);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 992;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 993;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 995;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 994;
                this.ifExists();
                }
            }

            this.state = 997;
            this.tableNamePath();
            this.state = 999;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 22) {
                {
                this.state = 998;
                this.match(ImpalaSqlParser.KW_PURGE);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dropIncrementalStats(): DropIncrementalStatsContext {
        let localContext = new DropIncrementalStatsContext(this.context, this.state);
        this.enterRule(localContext, 82, ImpalaSqlParser.RULE_dropIncrementalStats);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1001;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 1003;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 96) {
                {
                this.state = 1002;
                this.match(ImpalaSqlParser.KW_INCREMENTAL);
                }
            }

            this.state = 1005;
            this.match(ImpalaSqlParser.KW_STATS);
            this.state = 1006;
            this.tableNamePath();
            this.state = 1009;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 1007;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 1008;
                this.expression();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dropFunction(): DropFunctionContext {
        let localContext = new DropFunctionContext(this.context, this.state);
        this.enterRule(localContext, 84, ImpalaSqlParser.RULE_dropFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1011;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 1013;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 12) {
                {
                this.state = 1012;
                this.match(ImpalaSqlParser.KW_AGGREGATE);
                }
            }

            this.state = 1015;
            this.match(ImpalaSqlParser.KW_FUNCTION);
            this.state = 1017;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 1016;
                this.ifExists();
                }
            }

            this.state = 1019;
            this.functionNamePath();
            this.state = 1032;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 94, this.context) ) {
            case 1:
                {
                this.state = 1020;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1029;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 8 || _la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 4286652929) !== 0) || ((((_la - 236)) & ~0x1F) === 0 && ((1 << (_la - 236)) & 511) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 7873) !== 0)) {
                    {
                    this.state = 1021;
                    this.type_(0);
                    this.state = 1026;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 1022;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1023;
                        this.type_(0);
                        }
                        }
                        this.state = 1028;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1031;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dropRole(): DropRoleContext {
        let localContext = new DropRoleContext(this.context, this.state);
        this.enterRule(localContext, 86, ImpalaSqlParser.RULE_dropRole);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1034;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 1035;
            this.match(ImpalaSqlParser.KW_ROLE);
            this.state = 1036;
            localContext._name = this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public grantStatement(): GrantStatementContext {
        let localContext = new GrantStatementContext(this.context, this.state);
        this.enterRule(localContext, 88, ImpalaSqlParser.RULE_grantStatement);
        try {
            this.state = 1040;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 95, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1038;
                this.grantRole();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1039;
                this.grant();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public grantRole(): GrantRoleContext {
        let localContext = new GrantRoleContext(this.context, this.state);
        this.enterRule(localContext, 90, ImpalaSqlParser.RULE_grantRole);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1042;
            this.match(ImpalaSqlParser.KW_GRANT);
            this.state = 1043;
            this.match(ImpalaSqlParser.KW_ROLE);
            this.state = 1044;
            this.identifier();
            this.state = 1045;
            this.match(ImpalaSqlParser.KW_TO);
            this.state = 1046;
            this.match(ImpalaSqlParser.KW_GROUP);
            this.state = 1047;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public grant(): GrantContext {
        let localContext = new GrantContext(this.context, this.state);
        this.enterRule(localContext, 92, ImpalaSqlParser.RULE_grant);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1049;
            this.match(ImpalaSqlParser.KW_GRANT);
            this.state = 1050;
            this.privilege();
            this.state = 1051;
            this.match(ImpalaSqlParser.KW_ON);
            this.state = 1052;
            this.objectType();
            this.state = 1054;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                {
                this.state = 1053;
                this.qualifiedName();
                }
            }

            this.state = 1056;
            this.match(ImpalaSqlParser.KW_TO);
            this.state = 1057;
            localContext._grantee = this.principal();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public revokeStatement(): RevokeStatementContext {
        let localContext = new RevokeStatementContext(this.context, this.state);
        this.enterRule(localContext, 94, ImpalaSqlParser.RULE_revokeStatement);
        try {
            this.state = 1061;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 97, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1059;
                this.revokeRole();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1060;
                this.revoke();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public revokeRole(): RevokeRoleContext {
        let localContext = new RevokeRoleContext(this.context, this.state);
        this.enterRule(localContext, 96, ImpalaSqlParser.RULE_revokeRole);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1063;
            this.match(ImpalaSqlParser.KW_REVOKE);
            this.state = 1064;
            this.match(ImpalaSqlParser.KW_ROLE);
            this.state = 1065;
            this.identifier();
            this.state = 1066;
            this.match(ImpalaSqlParser.KW_FROM);
            this.state = 1067;
            this.match(ImpalaSqlParser.KW_GROUP);
            this.state = 1068;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public revoke(): RevokeContext {
        let localContext = new RevokeContext(this.context, this.state);
        this.enterRule(localContext, 98, ImpalaSqlParser.RULE_revoke);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1070;
            this.match(ImpalaSqlParser.KW_REVOKE);
            this.state = 1074;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 86) {
                {
                this.state = 1071;
                this.match(ImpalaSqlParser.KW_GRANT);
                this.state = 1072;
                this.match(ImpalaSqlParser.KW_OPTION);
                this.state = 1073;
                this.match(ImpalaSqlParser.KW_FOR);
                }
            }

            this.state = 1076;
            this.privilege();
            this.state = 1077;
            this.match(ImpalaSqlParser.KW_ON);
            this.state = 1078;
            this.objectType();
            this.state = 1080;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                {
                this.state = 1079;
                this.qualifiedName();
                }
            }

            this.state = 1082;
            this.match(ImpalaSqlParser.KW_FROM);
            this.state = 1088;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 101, this.context) ) {
            case 1:
                {
                this.state = 1083;
                localContext._grantee = this.principal();
                }
                break;
            case 2:
                {
                this.state = 1085;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 166) {
                    {
                    this.state = 1084;
                    this.match(ImpalaSqlParser.KW_ROLE);
                    }
                }

                this.state = 1087;
                this.identifier();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public insertStatement(): InsertStatementContext {
        let localContext = new InsertStatementContext(this.context, this.state);
        this.enterRule(localContext, 100, ImpalaSqlParser.RULE_insertStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1091;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 216) {
                {
                this.state = 1090;
                this.with_();
                }
            }

            this.state = 1093;
            this.match(ImpalaSqlParser.KW_INSERT);
            this.state = 1094;
            _la = this.tokenStream.LA(1);
            if(!(_la === 103 || _la === 144)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1096;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 188) {
                {
                this.state = 1095;
                this.match(ImpalaSqlParser.KW_TABLE);
                }
            }

            this.state = 1098;
            this.tableNamePath();
            this.state = 1100;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 104, this.context) ) {
            case 1:
                {
                this.state = 1099;
                this.columnAliases();
                }
                break;
            }
            this.state = 1114;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 1102;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 1103;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1104;
                this.expression();
                this.state = 1109;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                    {
                    this.state = 1105;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1106;
                    this.expression();
                    }
                    }
                    this.state = 1111;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1112;
                this.match(ImpalaSqlParser.RPAREN);
                }
            }

            this.state = 1116;
            this.queryStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public deleteStatement(): DeleteStatementContext {
        let localContext = new DeleteStatementContext(this.context, this.state);
        this.enterRule(localContext, 102, ImpalaSqlParser.RULE_deleteStatement);
        try {
            this.state = 1120;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 107, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1118;
                this.delete_();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1119;
                this.deleteTableRef();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public delete_(): DeleteContext {
        let localContext = new DeleteContext(this.context, this.state);
        this.enterRule(localContext, 104, ImpalaSqlParser.RULE_delete);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1122;
            this.match(ImpalaSqlParser.KW_DELETE);
            this.state = 1124;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 82) {
                {
                this.state = 1123;
                this.match(ImpalaSqlParser.KW_FROM);
                }
            }

            this.state = 1126;
            this.tableNamePath();
            this.state = 1128;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 215) {
                {
                this.state = 1127;
                this.whereClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public deleteTableRef(): DeleteTableRefContext {
        let localContext = new DeleteTableRefContext(this.context, this.state);
        this.enterRule(localContext, 106, ImpalaSqlParser.RULE_deleteTableRef);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1130;
            this.match(ImpalaSqlParser.KW_DELETE);
            this.state = 1131;
            this.tableNamePath();
            this.state = 1136;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9 || _la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                {
                this.state = 1133;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                    this.state = 1132;
                    this.match(ImpalaSqlParser.KW_AS);
                    }
                }

                this.state = 1135;
                this.identifier();
                }
            }

            this.state = 1138;
            this.match(ImpalaSqlParser.KW_FROM);
            this.state = 1147;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 113, this.context) ) {
            case 1:
                {
                this.state = 1139;
                this.relation(0);
                this.state = 1144;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                    {
                    this.state = 1140;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1141;
                    this.relation(0);
                    }
                    }
                    this.state = 1146;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            }
            this.state = 1150;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 215) {
                {
                this.state = 1149;
                this.whereClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public updateStatement(): UpdateStatementContext {
        let localContext = new UpdateStatementContext(this.context, this.state);
        this.enterRule(localContext, 108, ImpalaSqlParser.RULE_updateStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1152;
            this.match(ImpalaSqlParser.KW_UPDATE);
            this.state = 1153;
            this.tableNamePath();
            this.state = 1154;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 1155;
            this.assignmentList();
            this.state = 1165;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 82) {
                {
                this.state = 1156;
                this.match(ImpalaSqlParser.KW_FROM);
                this.state = 1157;
                this.relation(0);
                this.state = 1162;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                    {
                    this.state = 1158;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1159;
                    this.relation(0);
                    }
                    }
                    this.state = 1164;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1168;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 215) {
                {
                this.state = 1167;
                this.whereClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public upsertStatement(): UpsertStatementContext {
        let localContext = new UpsertStatementContext(this.context, this.state);
        this.enterRule(localContext, 110, ImpalaSqlParser.RULE_upsertStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1170;
            this.match(ImpalaSqlParser.KW_UPSERT);
            this.state = 1171;
            this.match(ImpalaSqlParser.KW_INTO);
            this.state = 1173;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 188) {
                {
                this.state = 1172;
                this.match(ImpalaSqlParser.KW_TABLE);
                }
            }

            this.state = 1175;
            this.tableNamePath();
            this.state = 1177;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 119, this.context) ) {
            case 1:
                {
                this.state = 1176;
                this.columnAliases();
                }
                break;
            }
            this.state = 1179;
            this.queryStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showStatement(): ShowStatementContext {
        let localContext = new ShowStatementContext(this.context, this.state);
        this.enterRule(localContext, 112, ImpalaSqlParser.RULE_showStatement);
        try {
            this.state = 1193;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 120, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1181;
                this.showRoles();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1182;
                this.showRoleGrant();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1183;
                this.showGrants();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1184;
                this.showFiles();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1185;
                this.showPartitions();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1186;
                this.showColumnStats();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1187;
                this.showTableStats();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1188;
                this.showCreateView();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1189;
                this.showCreateTable();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1190;
                this.showFunctions();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1191;
                this.showTables();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1192;
                this.showSchemas();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showSchemas(): ShowSchemasContext {
        let localContext = new ShowSchemasContext(this.context, this.state);
        this.enterRule(localContext, 114, ImpalaSqlParser.RULE_showSchemas);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1195;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1196;
            _la = this.tokenStream.LA(1);
            if(!(_la === 47 || _la === 171)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1208;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115 || _la === 274 || _la === 275) {
                {
                this.state = 1198;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 1197;
                    this.match(ImpalaSqlParser.KW_LIKE);
                    }
                }

                this.state = 1200;
                localContext._pattern = this.stringLiteral();
                this.state = 1205;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 271) {
                    {
                    {
                    this.state = 1201;
                    this.match(ImpalaSqlParser.BITWISEOR);
                    this.state = 1202;
                    this.stringLiteral();
                    }
                    }
                    this.state = 1207;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showTables(): ShowTablesContext {
        let localContext = new ShowTablesContext(this.context, this.state);
        this.enterRule(localContext, 116, ImpalaSqlParser.RULE_showTables);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1210;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1211;
            this.match(ImpalaSqlParser.KW_TABLES);
            this.state = 1214;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 94) {
                {
                this.state = 1212;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 1213;
                this.tableNamePath();
                }
            }

            this.state = 1227;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115 || _la === 274 || _la === 275) {
                {
                this.state = 1217;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 1216;
                    this.match(ImpalaSqlParser.KW_LIKE);
                    }
                }

                this.state = 1219;
                localContext._pattern = this.stringLiteral();
                this.state = 1224;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 271) {
                    {
                    {
                    this.state = 1220;
                    this.match(ImpalaSqlParser.BITWISEOR);
                    this.state = 1221;
                    this.stringLiteral();
                    }
                    }
                    this.state = 1226;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showFunctions(): ShowFunctionsContext {
        let localContext = new ShowFunctionsContext(this.context, this.state);
        this.enterRule(localContext, 118, ImpalaSqlParser.RULE_showFunctions);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1229;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1231;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3 || _la === 12) {
                {
                this.state = 1230;
                _la = this.tokenStream.LA(1);
                if(!(_la === 3 || _la === 12)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 1233;
            this.match(ImpalaSqlParser.KW_FUNCTIONS);
            this.state = 1236;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 94) {
                {
                this.state = 1234;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 1235;
                this.databaseNamePath();
                }
            }

            this.state = 1249;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115 || _la === 274 || _la === 275) {
                {
                this.state = 1239;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 1238;
                    this.match(ImpalaSqlParser.KW_LIKE);
                    }
                }

                this.state = 1241;
                localContext._pattern = this.stringLiteral();
                this.state = 1246;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 271) {
                    {
                    {
                    this.state = 1242;
                    this.match(ImpalaSqlParser.BITWISEOR);
                    this.state = 1243;
                    this.stringLiteral();
                    }
                    }
                    this.state = 1248;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showCreateTable(): ShowCreateTableContext {
        let localContext = new ShowCreateTableContext(this.context, this.state);
        this.enterRule(localContext, 120, ImpalaSqlParser.RULE_showCreateTable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1251;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1252;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 1253;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 1254;
            this.tableNamePath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showCreateView(): ShowCreateViewContext {
        let localContext = new ShowCreateViewContext(this.context, this.state);
        this.enterRule(localContext, 122, ImpalaSqlParser.RULE_showCreateView);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1256;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1257;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 1258;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 1259;
            this.viewNamePath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showTableStats(): ShowTableStatsContext {
        let localContext = new ShowTableStatsContext(this.context, this.state);
        this.enterRule(localContext, 124, ImpalaSqlParser.RULE_showTableStats);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1261;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1262;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 1263;
            this.match(ImpalaSqlParser.KW_STATS);
            this.state = 1264;
            this.tableNamePath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showColumnStats(): ShowColumnStatsContext {
        let localContext = new ShowColumnStatsContext(this.context, this.state);
        this.enterRule(localContext, 126, ImpalaSqlParser.RULE_showColumnStats);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1266;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1267;
            this.match(ImpalaSqlParser.KW_COLUMN);
            this.state = 1268;
            this.match(ImpalaSqlParser.KW_STATS);
            this.state = 1269;
            this.tableNamePath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showPartitions(): ShowPartitionsContext {
        let localContext = new ShowPartitionsContext(this.context, this.state);
        this.enterRule(localContext, 128, ImpalaSqlParser.RULE_showPartitions);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1271;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1273;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 154) {
                {
                this.state = 1272;
                this.match(ImpalaSqlParser.KW_RANGE);
                }
            }

            this.state = 1275;
            this.match(ImpalaSqlParser.KW_PARTITIONS);
            this.state = 1276;
            this.tableNamePath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showFiles(): ShowFilesContext {
        let localContext = new ShowFilesContext(this.context, this.state);
        this.enterRule(localContext, 130, ImpalaSqlParser.RULE_showFiles);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1278;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1279;
            this.match(ImpalaSqlParser.KW_FILES);
            this.state = 1280;
            this.match(ImpalaSqlParser.KW_IN);
            this.state = 1281;
            this.tableNamePath();
            this.state = 1291;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 1282;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 1283;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1284;
                this.expression();
                this.state = 1287;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 263) {
                    {
                    this.state = 1285;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1286;
                    this.expression();
                    }
                }

                this.state = 1289;
                this.match(ImpalaSqlParser.RPAREN);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showRoles(): ShowRolesContext {
        let localContext = new ShowRolesContext(this.context, this.state);
        this.enterRule(localContext, 132, ImpalaSqlParser.RULE_showRoles);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1293;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1295;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 39) {
                {
                this.state = 1294;
                this.match(ImpalaSqlParser.KW_CURRENT);
                }
            }

            this.state = 1297;
            this.match(ImpalaSqlParser.KW_ROLES);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showRoleGrant(): ShowRoleGrantContext {
        let localContext = new ShowRoleGrantContext(this.context, this.state);
        this.enterRule(localContext, 134, ImpalaSqlParser.RULE_showRoleGrant);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1299;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1300;
            this.match(ImpalaSqlParser.KW_ROLE);
            this.state = 1301;
            this.match(ImpalaSqlParser.KW_GRANT);
            this.state = 1302;
            this.match(ImpalaSqlParser.KW_GROUP);
            this.state = 1303;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showGrants(): ShowGrantsContext {
        let localContext = new ShowGrantsContext(this.context, this.state);
        this.enterRule(localContext, 136, ImpalaSqlParser.RULE_showGrants);
        let _la: number;
        try {
            this.state = 1319;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 139, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1305;
                this.showDatabaseGrant();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1306;
                this.showTableGrant();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1307;
                this.showColumnGrant();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1308;
                this.match(ImpalaSqlParser.KW_SHOW);
                this.state = 1309;
                this.match(ImpalaSqlParser.KW_GRANT);
                this.state = 1310;
                _la = this.tokenStream.LA(1);
                if(!(_la === 87 || _la === 166 || _la === 204)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1311;
                this.identifier();
                this.state = 1317;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 136) {
                    {
                    this.state = 1312;
                    this.match(ImpalaSqlParser.KW_ON);
                    this.state = 1313;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 178 || _la === 209)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1315;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                        {
                        this.state = 1314;
                        this.qualifiedName();
                        }
                    }

                    }
                }

                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showDatabaseGrant(): ShowDatabaseGrantContext {
        let localContext = new ShowDatabaseGrantContext(this.context, this.state);
        this.enterRule(localContext, 138, ImpalaSqlParser.RULE_showDatabaseGrant);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1321;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1322;
            this.match(ImpalaSqlParser.KW_GRANT);
            this.state = 1323;
            _la = this.tokenStream.LA(1);
            if(!(_la === 87 || _la === 166 || _la === 204)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1324;
            this.identifier();
            this.state = 1330;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 136) {
                {
                this.state = 1325;
                this.match(ImpalaSqlParser.KW_ON);
                this.state = 1326;
                this.match(ImpalaSqlParser.KW_DATABASE);
                this.state = 1328;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                    {
                    this.state = 1327;
                    this.databaseNamePath();
                    }
                }

                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showTableGrant(): ShowTableGrantContext {
        let localContext = new ShowTableGrantContext(this.context, this.state);
        this.enterRule(localContext, 140, ImpalaSqlParser.RULE_showTableGrant);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1332;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1333;
            this.match(ImpalaSqlParser.KW_GRANT);
            this.state = 1334;
            _la = this.tokenStream.LA(1);
            if(!(_la === 87 || _la === 166 || _la === 204)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1335;
            this.identifier();
            this.state = 1341;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 136) {
                {
                this.state = 1336;
                this.match(ImpalaSqlParser.KW_ON);
                this.state = 1337;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 1339;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                    {
                    this.state = 1338;
                    this.tableNamePath();
                    }
                }

                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showColumnGrant(): ShowColumnGrantContext {
        let localContext = new ShowColumnGrantContext(this.context, this.state);
        this.enterRule(localContext, 142, ImpalaSqlParser.RULE_showColumnGrant);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1343;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1344;
            this.match(ImpalaSqlParser.KW_GRANT);
            this.state = 1345;
            _la = this.tokenStream.LA(1);
            if(!(_la === 87 || _la === 166 || _la === 204)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1346;
            this.identifier();
            this.state = 1352;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 136) {
                {
                this.state = 1347;
                this.match(ImpalaSqlParser.KW_ON);
                this.state = 1348;
                this.match(ImpalaSqlParser.KW_COLUMN);
                this.state = 1350;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 144, this.context) ) {
                case 1:
                    {
                    this.state = 1349;
                    this.columnNamePath();
                    }
                    break;
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public addCommentStatement(): AddCommentStatementContext {
        let localContext = new AddCommentStatementContext(this.context, this.state);
        this.enterRule(localContext, 144, ImpalaSqlParser.RULE_addCommentStatement);
        try {
            this.state = 1357;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 146, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1354;
                this.addDatabaseComments();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1355;
                this.addTableComments();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1356;
                this.addColumnComments();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public addDatabaseComments(): AddDatabaseCommentsContext {
        let localContext = new AddDatabaseCommentsContext(this.context, this.state);
        this.enterRule(localContext, 146, ImpalaSqlParser.RULE_addDatabaseComments);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1359;
            this.match(ImpalaSqlParser.KW_COMMENT);
            this.state = 1360;
            this.match(ImpalaSqlParser.KW_ON);
            this.state = 1361;
            this.match(ImpalaSqlParser.KW_DATABASE);
            this.state = 1362;
            this.databaseNamePath();
            this.state = 1363;
            this.match(ImpalaSqlParser.KW_IS);
            this.state = 1366;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.UNICODE_STRING:
                {
                this.state = 1364;
                this.stringLiteral();
                }
                break;
            case ImpalaSqlParser.KW_NULL:
                {
                this.state = 1365;
                this.match(ImpalaSqlParser.KW_NULL);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public addTableComments(): AddTableCommentsContext {
        let localContext = new AddTableCommentsContext(this.context, this.state);
        this.enterRule(localContext, 148, ImpalaSqlParser.RULE_addTableComments);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1368;
            this.match(ImpalaSqlParser.KW_COMMENT);
            this.state = 1369;
            this.match(ImpalaSqlParser.KW_ON);
            this.state = 1370;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 1371;
            this.tableNamePath();
            this.state = 1372;
            this.match(ImpalaSqlParser.KW_IS);
            this.state = 1375;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.UNICODE_STRING:
                {
                this.state = 1373;
                this.stringLiteral();
                }
                break;
            case ImpalaSqlParser.KW_NULL:
                {
                this.state = 1374;
                this.match(ImpalaSqlParser.KW_NULL);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public addColumnComments(): AddColumnCommentsContext {
        let localContext = new AddColumnCommentsContext(this.context, this.state);
        this.enterRule(localContext, 150, ImpalaSqlParser.RULE_addColumnComments);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1377;
            this.match(ImpalaSqlParser.KW_COMMENT);
            this.state = 1378;
            this.match(ImpalaSqlParser.KW_ON);
            this.state = 1379;
            this.match(ImpalaSqlParser.KW_COLUMN);
            this.state = 1380;
            this.columnNamePath();
            this.state = 1381;
            this.match(ImpalaSqlParser.KW_IS);
            this.state = 1384;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.UNICODE_STRING:
                {
                this.state = 1382;
                this.stringLiteral();
                }
                break;
            case ImpalaSqlParser.KW_NULL:
                {
                this.state = 1383;
                this.match(ImpalaSqlParser.KW_NULL);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public explainStatement(): ExplainStatementContext {
        let localContext = new ExplainStatementContext(this.context, this.state);
        this.enterRule(localContext, 152, ImpalaSqlParser.RULE_explainStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1386;
            this.match(ImpalaSqlParser.KW_EXPLAIN);
            this.state = 1387;
            this.sqlStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public setStatement(): SetStatementContext {
        let localContext = new SetStatementContext(this.context, this.state);
        this.enterRule(localContext, 154, ImpalaSqlParser.RULE_setStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1389;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 1395;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_ALL:
                {
                this.state = 1390;
                this.match(ImpalaSqlParser.KW_ALL);
                }
                break;
            case ImpalaSqlParser.KW_BERNOULLI:
            case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
            case ImpalaSqlParser.KW_CURRENT_USER:
            case ImpalaSqlParser.KW_DAY:
            case ImpalaSqlParser.KW_DAYS:
            case ImpalaSqlParser.KW_EXCLUDING:
            case ImpalaSqlParser.KW_EXTRACT:
            case ImpalaSqlParser.KW_HOUR:
            case ImpalaSqlParser.KW_INCLUDING:
            case ImpalaSqlParser.KW_KEY:
            case ImpalaSqlParser.KW_LOCALTIME:
            case ImpalaSqlParser.KW_MINUTE:
            case ImpalaSqlParser.KW_MINUTES:
            case ImpalaSqlParser.KW_MONTH:
            case ImpalaSqlParser.KW_MONTHS:
            case ImpalaSqlParser.KW_NFC:
            case ImpalaSqlParser.KW_NFD:
            case ImpalaSqlParser.KW_NFKC:
            case ImpalaSqlParser.KW_NFKD:
            case ImpalaSqlParser.KW_OPTION:
            case ImpalaSqlParser.KW_ORDINALITY:
            case ImpalaSqlParser.KW_PRIVILEGES:
            case ImpalaSqlParser.KW_PROPERTIES:
            case ImpalaSqlParser.KW_SECOND:
            case ImpalaSqlParser.KW_SECONDS:
            case ImpalaSqlParser.KW_SHUTDOWN:
            case ImpalaSqlParser.KW_SUBSTRING:
            case ImpalaSqlParser.KW_SYSTEM:
            case ImpalaSqlParser.KW_TRY_CAST:
            case ImpalaSqlParser.KW_USER:
            case ImpalaSqlParser.KW_VIEWS:
            case ImpalaSqlParser.KW_YEAR:
            case ImpalaSqlParser.KW_ORC:
            case ImpalaSqlParser.KW_DATE:
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.IDENTIFIER:
            case ImpalaSqlParser.DIGIT_IDENTIFIER:
            case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
                {
                this.state = 1391;
                this.identifier();
                this.state = 1392;
                this.match(ImpalaSqlParser.EQ);
                this.state = 1393;
                this.expression();
                }
                break;
            case ImpalaSqlParser.EOF:
            case ImpalaSqlParser.KW_ALTER:
            case ImpalaSqlParser.KW_COMMENT:
            case ImpalaSqlParser.KW_COMPUTE:
            case ImpalaSqlParser.KW_CREATE:
            case ImpalaSqlParser.KW_DELETE:
            case ImpalaSqlParser.KW_UPDATE:
            case ImpalaSqlParser.KW_DESCRIBE:
            case ImpalaSqlParser.KW_DROP:
            case ImpalaSqlParser.KW_EXPLAIN:
            case ImpalaSqlParser.KW_GRANT:
            case ImpalaSqlParser.KW_INSERT:
            case ImpalaSqlParser.KW_INVALIDATE:
            case ImpalaSqlParser.KW_LOAD:
            case ImpalaSqlParser.KW_REVOKE:
            case ImpalaSqlParser.KW_REFRESH:
            case ImpalaSqlParser.KW_SELECT:
            case ImpalaSqlParser.KW_SET:
            case ImpalaSqlParser.KW_SHOW:
            case ImpalaSqlParser.KW_TABLE:
            case ImpalaSqlParser.KW_TRUNCATE:
            case ImpalaSqlParser.KW_USE:
            case ImpalaSqlParser.KW_UPSERT:
            case ImpalaSqlParser.KW_VALUES:
            case ImpalaSqlParser.KW_WITH:
            case ImpalaSqlParser.SEMICOLON:
            case ImpalaSqlParser.COLON:
            case ImpalaSqlParser.LPAREN:
                break;
            default:
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public shutdownStatement(): ShutdownStatementContext {
        let localContext = new ShutdownStatementContext(this.context, this.state);
        this.enterRule(localContext, 156, ImpalaSqlParser.RULE_shutdownStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1397;
            this.match(ImpalaSqlParser.COLON);
            this.state = 1398;
            this.match(ImpalaSqlParser.KW_SHUTDOWN);
            this.state = 1399;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 1409;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 153, this.context) ) {
            case 1:
                {
                this.state = 1401;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 274 || _la === 275) {
                    {
                    this.state = 1400;
                    this.stringLiteral();
                    }
                }

                }
                break;
            case 2:
                {
                this.state = 1403;
                this.stringLiteral();
                this.state = 1406;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 263) {
                    {
                    this.state = 1404;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1405;
                    this.expression();
                    }
                }

                }
                break;
            case 3:
                {
                this.state = 1408;
                this.expression();
                }
                break;
            }
            this.state = 1411;
            this.match(ImpalaSqlParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public invalidateMetaStatement(): InvalidateMetaStatementContext {
        let localContext = new InvalidateMetaStatementContext(this.context, this.state);
        this.enterRule(localContext, 158, ImpalaSqlParser.RULE_invalidateMetaStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1413;
            this.match(ImpalaSqlParser.KW_INVALIDATE);
            this.state = 1414;
            this.match(ImpalaSqlParser.KW_METADATA);
            this.state = 1415;
            this.tableNamePath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public loadDataStatement(): LoadDataStatementContext {
        let localContext = new LoadDataStatementContext(this.context, this.state);
        this.enterRule(localContext, 160, ImpalaSqlParser.RULE_loadDataStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1417;
            this.match(ImpalaSqlParser.KW_LOAD);
            this.state = 1418;
            this.match(ImpalaSqlParser.KW_DATA);
            this.state = 1419;
            this.match(ImpalaSqlParser.KW_INPATH);
            this.state = 1420;
            this.match(ImpalaSqlParser.STRING);
            this.state = 1422;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 144) {
                {
                this.state = 1421;
                this.match(ImpalaSqlParser.KW_OVERWRITE);
                }
            }

            this.state = 1424;
            this.match(ImpalaSqlParser.KW_INTO);
            this.state = 1425;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 1426;
            this.tableNamePath();
            this.state = 1436;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 1427;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 1428;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1429;
                this.expression();
                this.state = 1432;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 263) {
                    {
                    this.state = 1430;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1431;
                    this.expression();
                    }
                }

                this.state = 1434;
                this.match(ImpalaSqlParser.RPAREN);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public refreshStatement(): RefreshStatementContext {
        let localContext = new RefreshStatementContext(this.context, this.state);
        this.enterRule(localContext, 162, ImpalaSqlParser.RULE_refreshStatement);
        try {
            this.state = 1441;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 157, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1438;
                this.refreshMeta();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1439;
                this.refreshAuth();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1440;
                this.refreshFunction();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public refreshMeta(): RefreshMetaContext {
        let localContext = new RefreshMetaContext(this.context, this.state);
        this.enterRule(localContext, 164, ImpalaSqlParser.RULE_refreshMeta);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1443;
            this.match(ImpalaSqlParser.KW_REFRESH);
            this.state = 1444;
            this.tableNamePath();
            this.state = 1457;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 1445;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 1446;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1447;
                this.expression();
                this.state = 1452;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 158, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 1448;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1449;
                        this.expression();
                        }
                        }
                    }
                    this.state = 1454;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 158, this.context);
                }
                this.state = 1455;
                this.match(ImpalaSqlParser.RPAREN);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public refreshAuth(): RefreshAuthContext {
        let localContext = new RefreshAuthContext(this.context, this.state);
        this.enterRule(localContext, 166, ImpalaSqlParser.RULE_refreshAuth);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1459;
            this.match(ImpalaSqlParser.KW_REFRESH);
            this.state = 1460;
            this.match(ImpalaSqlParser.KW_AUTHORIZATION);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public refreshFunction(): RefreshFunctionContext {
        let localContext = new RefreshFunctionContext(this.context, this.state);
        this.enterRule(localContext, 168, ImpalaSqlParser.RULE_refreshFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1462;
            this.match(ImpalaSqlParser.KW_REFRESH);
            this.state = 1463;
            this.match(ImpalaSqlParser.KW_FUNCTIONS);
            this.state = 1464;
            this.functionNamePath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifExists(): IfExistsContext {
        let localContext = new IfExistsContext(this.context, this.state);
        this.enterRule(localContext, 170, ImpalaSqlParser.RULE_ifExists);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1466;
            this.match(ImpalaSqlParser.KW_IF);
            this.state = 1467;
            this.match(ImpalaSqlParser.KW_EXISTS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifNotExists(): IfNotExistsContext {
        let localContext = new IfNotExistsContext(this.context, this.state);
        this.enterRule(localContext, 172, ImpalaSqlParser.RULE_ifNotExists);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1469;
            this.match(ImpalaSqlParser.KW_IF);
            this.state = 1470;
            this.match(ImpalaSqlParser.KW_NOT);
            this.state = 1471;
            this.match(ImpalaSqlParser.KW_EXISTS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableNameCreate(): TableNameCreateContext {
        let localContext = new TableNameCreateContext(this.context, this.state);
        this.enterRule(localContext, 174, ImpalaSqlParser.RULE_tableNameCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1473;
            this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public databaseNameCreate(): DatabaseNameCreateContext {
        let localContext = new DatabaseNameCreateContext(this.context, this.state);
        this.enterRule(localContext, 176, ImpalaSqlParser.RULE_databaseNameCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1475;
            this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public viewNameCreate(): ViewNameCreateContext {
        let localContext = new ViewNameCreateContext(this.context, this.state);
        this.enterRule(localContext, 178, ImpalaSqlParser.RULE_viewNameCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1477;
            this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionNameCreate(): FunctionNameCreateContext {
        let localContext = new FunctionNameCreateContext(this.context, this.state);
        this.enterRule(localContext, 180, ImpalaSqlParser.RULE_functionNameCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1479;
            this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnNamePathCreate(): ColumnNamePathCreateContext {
        let localContext = new ColumnNamePathCreateContext(this.context, this.state);
        this.enterRule(localContext, 182, ImpalaSqlParser.RULE_columnNamePathCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1481;
            this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public databaseNamePath(): DatabaseNamePathContext {
        let localContext = new DatabaseNamePathContext(this.context, this.state);
        this.enterRule(localContext, 184, ImpalaSqlParser.RULE_databaseNamePath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1483;
            this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableNamePath(): TableNamePathContext {
        let localContext = new TableNamePathContext(this.context, this.state);
        this.enterRule(localContext, 186, ImpalaSqlParser.RULE_tableNamePath);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1485;
            this.identifier();
            this.state = 1490;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 160, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1486;
                    this.match(ImpalaSqlParser.DOT);
                    this.state = 1487;
                    this.identifier();
                    }
                    }
                }
                this.state = 1492;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 160, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public viewNamePath(): ViewNamePathContext {
        let localContext = new ViewNamePathContext(this.context, this.state);
        this.enterRule(localContext, 188, ImpalaSqlParser.RULE_viewNamePath);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1493;
            this.identifier();
            this.state = 1498;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 161, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1494;
                    this.match(ImpalaSqlParser.DOT);
                    this.state = 1495;
                    this.identifier();
                    }
                    }
                }
                this.state = 1500;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 161, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionNamePath(): FunctionNamePathContext {
        let localContext = new FunctionNamePathContext(this.context, this.state);
        this.enterRule(localContext, 190, ImpalaSqlParser.RULE_functionNamePath);
        try {
            this.state = 1503;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 162, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1501;
                this.reservedKeywordsUsedAsFuncName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1502;
                this.qualifiedName();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnNamePath(): ColumnNamePathContext {
        let localContext = new ColumnNamePathContext(this.context, this.state);
        this.enterRule(localContext, 192, ImpalaSqlParser.RULE_columnNamePath);
        try {
            this.state = 1507;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 163, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1505;
                this.qualifiedName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1506;
                if (!(this.shouldMatchEmpty())) {
                    throw this.createFailedPredicateException("this.shouldMatchEmpty()");
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnName(): ColumnNameContext {
        let localContext = new ColumnNameContext(this.context, this.state);
        this.enterRule(localContext, 194, ImpalaSqlParser.RULE_columnName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1509;
            this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableOrViewPath(): TableOrViewPathContext {
        let localContext = new TableOrViewPathContext(this.context, this.state);
        this.enterRule(localContext, 196, ImpalaSqlParser.RULE_tableOrViewPath);
        try {
            this.state = 1513;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 164, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1511;
                this.tableNamePath();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1512;
                this.viewNamePath();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createCommonItem(): CreateCommonItemContext {
        let localContext = new CreateCommonItemContext(this.context, this.state);
        this.enterRule(localContext, 198, ImpalaSqlParser.RULE_createCommonItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1518;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21) {
                {
                this.state = 1515;
                this.match(ImpalaSqlParser.KW_SORT);
                this.state = 1516;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 1517;
                this.columnAliases();
                }
            }

            this.state = 1521;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 166, this.context) ) {
            case 1:
                {
                this.state = 1520;
                this.commentClause();
                }
                break;
            }
            this.state = 1526;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 168) {
                {
                this.state = 1523;
                this.match(ImpalaSqlParser.KW_ROW);
                this.state = 1524;
                this.match(ImpalaSqlParser.KW_FORMAT);
                this.state = 1525;
                this.rowFormat();
                }
            }

            this.state = 1531;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 168, this.context) ) {
            case 1:
                {
                this.state = 1528;
                this.match(ImpalaSqlParser.KW_WITH);
                this.state = 1529;
                this.match(ImpalaSqlParser.KW_SERDEPROPERTIES);
                this.state = 1530;
                localContext._serdProp = this.properties();
                }
                break;
            }
            this.state = 1536;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 23) {
                {
                this.state = 1533;
                this.match(ImpalaSqlParser.KW_STORED);
                this.state = 1534;
                this.match(ImpalaSqlParser.KW_AS);
                this.state = 1535;
                this.fileFormat();
                }
            }

            this.state = 1540;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 24) {
                {
                this.state = 1538;
                this.match(ImpalaSqlParser.KW_LOCATION);
                this.state = 1539;
                localContext._location = this.stringLiteral();
                }
            }

            this.state = 1552;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_CACHED:
                {
                this.state = 1542;
                this.match(ImpalaSqlParser.KW_CACHED);
                this.state = 1543;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 1544;
                localContext._cacheName = this.qualifiedName();
                this.state = 1549;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 171, this.context) ) {
                case 1:
                    {
                    this.state = 1545;
                    this.match(ImpalaSqlParser.KW_WITH);
                    this.state = 1546;
                    this.match(ImpalaSqlParser.KW_REPLICATION);
                    this.state = 1547;
                    this.match(ImpalaSqlParser.EQ);
                    this.state = 1548;
                    this.match(ImpalaSqlParser.INTEGER_VALUE);
                    }
                    break;
                }
                }
                break;
            case ImpalaSqlParser.KW_UNCACHED:
                {
                this.state = 1551;
                this.match(ImpalaSqlParser.KW_UNCACHED);
                }
                break;
            case ImpalaSqlParser.EOF:
            case ImpalaSqlParser.KW_ALTER:
            case ImpalaSqlParser.KW_AS:
            case ImpalaSqlParser.KW_TBLPROPERTIES:
            case ImpalaSqlParser.KW_COMMENT:
            case ImpalaSqlParser.KW_COMPUTE:
            case ImpalaSqlParser.KW_CREATE:
            case ImpalaSqlParser.KW_DELETE:
            case ImpalaSqlParser.KW_UPDATE:
            case ImpalaSqlParser.KW_DESCRIBE:
            case ImpalaSqlParser.KW_DROP:
            case ImpalaSqlParser.KW_EXPLAIN:
            case ImpalaSqlParser.KW_GRANT:
            case ImpalaSqlParser.KW_INSERT:
            case ImpalaSqlParser.KW_INVALIDATE:
            case ImpalaSqlParser.KW_LOAD:
            case ImpalaSqlParser.KW_REVOKE:
            case ImpalaSqlParser.KW_REFRESH:
            case ImpalaSqlParser.KW_SELECT:
            case ImpalaSqlParser.KW_SET:
            case ImpalaSqlParser.KW_SHOW:
            case ImpalaSqlParser.KW_TABLE:
            case ImpalaSqlParser.KW_TRUNCATE:
            case ImpalaSqlParser.KW_USE:
            case ImpalaSqlParser.KW_UPSERT:
            case ImpalaSqlParser.KW_VALUES:
            case ImpalaSqlParser.KW_WITH:
            case ImpalaSqlParser.SEMICOLON:
            case ImpalaSqlParser.COLON:
            case ImpalaSqlParser.LPAREN:
                break;
            default:
                break;
            }
            this.state = 1556;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 25) {
                {
                this.state = 1554;
                this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
                this.state = 1555;
                localContext._tblProp = this.properties();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignmentList(): AssignmentListContext {
        let localContext = new AssignmentListContext(this.context, this.state);
        this.enterRule(localContext, 200, ImpalaSqlParser.RULE_assignmentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1558;
            this.assignmentItem();
            this.state = 1563;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 263) {
                {
                {
                this.state = 1559;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1560;
                this.assignmentItem();
                }
                }
                this.state = 1565;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignmentItem(): AssignmentItemContext {
        let localContext = new AssignmentItemContext(this.context, this.state);
        this.enterRule(localContext, 202, ImpalaSqlParser.RULE_assignmentItem);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1566;
            this.qualifiedName();
            this.state = 1567;
            this.match(ImpalaSqlParser.EQ);
            this.state = 1568;
            this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public viewColumns(): ViewColumnsContext {
        let localContext = new ViewColumnsContext(this.context, this.state);
        this.enterRule(localContext, 204, ImpalaSqlParser.RULE_viewColumns);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1570;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 1572;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                {
                this.state = 1571;
                this.viewColumnItem();
                }
            }

            this.state = 1580;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 263) {
                {
                {
                this.state = 1574;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1576;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                    {
                    this.state = 1575;
                    this.viewColumnItem();
                    }
                }

                }
                }
                this.state = 1582;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1583;
            this.match(ImpalaSqlParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public viewColumnItem(): ViewColumnItemContext {
        let localContext = new ViewColumnItemContext(this.context, this.state);
        this.enterRule(localContext, 206, ImpalaSqlParser.RULE_viewColumnItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1585;
            this.columnNamePathCreate();
            this.state = 1587;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 1586;
                this.commentClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public queryStatement(): QueryStatementContext {
        let localContext = new QueryStatementContext(this.context, this.state);
        this.enterRule(localContext, 208, ImpalaSqlParser.RULE_queryStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1590;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 216) {
                {
                this.state = 1589;
                this.with_();
                }
            }

            this.state = 1592;
            this.queryNoWith();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public with_(): WithContext {
        let localContext = new WithContext(this.context, this.state);
        this.enterRule(localContext, 210, ImpalaSqlParser.RULE_with);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1594;
            this.match(ImpalaSqlParser.KW_WITH);
            this.state = 1595;
            this.namedQuery();
            this.state = 1600;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 263) {
                {
                {
                this.state = 1596;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1597;
                this.namedQuery();
                }
                }
                this.state = 1602;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constraintSpecification(): ConstraintSpecificationContext {
        let localContext = new ConstraintSpecificationContext(this.context, this.state);
        this.enterRule(localContext, 212, ImpalaSqlParser.RULE_constraintSpecification);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1603;
            this.match(ImpalaSqlParser.KW_PRIMARY);
            this.state = 1604;
            this.match(ImpalaSqlParser.KW_KEY);
            this.state = 1605;
            this.columnAliases();
            this.state = 1607;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 53) {
                {
                this.state = 1606;
                this.match(ImpalaSqlParser.KW_DISABLE);
                }
            }

            this.state = 1612;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 182, this.context) ) {
            case 1:
                {
                this.state = 1609;
                this.match(ImpalaSqlParser.KW_NOVALIDATE);
                }
                break;
            case 2:
                {
                this.state = 1610;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1611;
                this.match(ImpalaSqlParser.KW_NOVALIDATE);
                }
                break;
            }
            this.state = 1617;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 183, this.context) ) {
            case 1:
                {
                this.state = 1614;
                this.match(ImpalaSqlParser.KW_RELY);
                }
                break;
            case 2:
                {
                this.state = 1615;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1616;
                this.match(ImpalaSqlParser.KW_RELY);
                }
                break;
            }
            this.state = 1631;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 81 || _la === 263) {
                {
                this.state = 1622;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.COMMA:
                    {
                    this.state = 1619;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1620;
                    this.foreignKeySpecification();
                    }
                    break;
                case ImpalaSqlParser.KW_FOREIGN:
                    {
                    this.state = 1621;
                    this.foreignKeySpecification();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1628;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 185, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 1624;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1625;
                        this.foreignKeySpecification();
                        }
                        }
                    }
                    this.state = 1630;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 185, this.context);
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public foreignKeySpecification(): ForeignKeySpecificationContext {
        let localContext = new ForeignKeySpecificationContext(this.context, this.state);
        this.enterRule(localContext, 214, ImpalaSqlParser.RULE_foreignKeySpecification);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1633;
            this.match(ImpalaSqlParser.KW_FOREIGN);
            this.state = 1634;
            this.match(ImpalaSqlParser.KW_KEY);
            this.state = 1635;
            this.columnAliases();
            this.state = 1636;
            this.match(ImpalaSqlParser.KW_REFERENCES);
            this.state = 1637;
            this.tableNamePath();
            this.state = 1638;
            this.columnAliases();
            this.state = 1640;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 53) {
                {
                this.state = 1639;
                this.match(ImpalaSqlParser.KW_DISABLE);
                }
            }

            this.state = 1643;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 225) {
                {
                this.state = 1642;
                this.match(ImpalaSqlParser.KW_NOVALIDATE);
                }
            }

            this.state = 1646;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 226) {
                {
                this.state = 1645;
                this.match(ImpalaSqlParser.KW_RELY);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnSpec(): ColumnSpecContext {
        let localContext = new ColumnSpecContext(this.context, this.state);
        this.enterRule(localContext, 216, ImpalaSqlParser.RULE_columnSpec);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1648;
            this.columnNamePath();
            this.state = 1649;
            this.type_(0);
            this.state = 1652;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 190, this.context) ) {
            case 1:
                {
                this.state = 1650;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 1651;
                this.stringLiteral();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnDefinition(): ColumnDefinitionContext {
        let localContext = new ColumnDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 218, ImpalaSqlParser.RULE_columnDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1654;
            this.columnNamePathCreate();
            this.state = 1655;
            localContext._colType = this.type_(0);
            this.state = 1657;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 1656;
                this.commentClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public kuduTableElement(): KuduTableElementContext {
        let localContext = new KuduTableElementContext(this.context, this.state);
        this.enterRule(localContext, 220, ImpalaSqlParser.RULE_kuduTableElement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1659;
            this.kuduColumnDefinition();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public kuduColumnDefinition(): KuduColumnDefinitionContext {
        let localContext = new KuduColumnDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 222, ImpalaSqlParser.RULE_kuduColumnDefinition);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1661;
            this.columnNamePathCreate();
            this.state = 1662;
            localContext._colType = this.type_(0);
            this.state = 1670;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 33619969) !== 0) || _la === 132 || _la === 133) {
                {
                this.state = 1663;
                this.kuduAttributes();
                this.state = 1667;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 192, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 1664;
                        this.kuduAttributes();
                        }
                        }
                    }
                    this.state = 1669;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 192, this.context);
                }
                }
            }

            this.state = 1673;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 1672;
                this.commentClause();
                }
            }

            this.state = 1677;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 150) {
                {
                this.state = 1675;
                this.match(ImpalaSqlParser.KW_PRIMARY);
                this.state = 1676;
                this.match(ImpalaSqlParser.KW_KEY);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public commentClause(): CommentClauseContext {
        let localContext = new CommentClauseContext(this.context, this.state);
        this.enterRule(localContext, 224, ImpalaSqlParser.RULE_commentClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1679;
            this.match(ImpalaSqlParser.KW_COMMENT);
            this.state = 1680;
            localContext._comment = this.stringLiteral();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnSpecWithKudu(): ColumnSpecWithKuduContext {
        let localContext = new ColumnSpecWithKuduContext(this.context, this.state);
        this.enterRule(localContext, 226, ImpalaSqlParser.RULE_columnSpecWithKudu);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1682;
            this.columnSpec();
            this.state = 1690;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 33619969) !== 0) || _la === 132 || _la === 133) {
                {
                this.state = 1683;
                this.kuduAttributes();
                this.state = 1687;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 196, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 1684;
                        this.kuduAttributes();
                        }
                        }
                    }
                    this.state = 1689;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 196, this.context);
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createColumnSpecWithKudu(): CreateColumnSpecWithKuduContext {
        let localContext = new CreateColumnSpecWithKuduContext(this.context, this.state);
        this.enterRule(localContext, 228, ImpalaSqlParser.RULE_createColumnSpecWithKudu);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1692;
            this.columnNamePathCreate();
            this.state = 1693;
            this.type_(0);
            this.state = 1696;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 198, this.context) ) {
            case 1:
                {
                this.state = 1694;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 1695;
                this.stringLiteral();
                }
                break;
            }
            this.state = 1705;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 33619969) !== 0) || _la === 132 || _la === 133) {
                {
                this.state = 1698;
                this.kuduAttributes();
                this.state = 1702;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 199, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 1699;
                        this.kuduAttributes();
                        }
                        }
                    }
                    this.state = 1704;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 199, this.context);
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public kuduAttributes(): KuduAttributesContext {
        let localContext = new KuduAttributesContext(this.context, this.state);
        this.enterRule(localContext, 230, ImpalaSqlParser.RULE_kuduAttributes);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1712;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_NOT:
            case ImpalaSqlParser.KW_NULL:
                {
                this.state = 1708;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 132) {
                    {
                    this.state = 1707;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 1710;
                this.match(ImpalaSqlParser.KW_NULL);
                }
                break;
            case ImpalaSqlParser.KW_BLOCK_SIZE:
            case ImpalaSqlParser.KW_COMPRESSION:
            case ImpalaSqlParser.KW_DEFAULT:
            case ImpalaSqlParser.KW_ENCODING:
                {
                this.state = 1711;
                this.kuduStorageAttr();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public kuduStorageAttr(): KuduStorageAttrContext {
        let localContext = new KuduStorageAttrContext(this.context, this.state);
        this.enterRule(localContext, 232, ImpalaSqlParser.RULE_kuduStorageAttr);
        try {
            this.state = 1722;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_ENCODING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1714;
                this.match(ImpalaSqlParser.KW_ENCODING);
                this.state = 1715;
                this.expression();
                }
                break;
            case ImpalaSqlParser.KW_COMPRESSION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1716;
                this.match(ImpalaSqlParser.KW_COMPRESSION);
                this.state = 1717;
                this.expression();
                }
                break;
            case ImpalaSqlParser.KW_DEFAULT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1718;
                this.match(ImpalaSqlParser.KW_DEFAULT);
                this.state = 1719;
                this.expression();
                }
                break;
            case ImpalaSqlParser.KW_BLOCK_SIZE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1720;
                this.match(ImpalaSqlParser.KW_BLOCK_SIZE);
                this.state = 1721;
                this.number_();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statsKey(): StatsKeyContext {
        let localContext = new StatsKeyContext(this.context, this.state);
        this.enterRule(localContext, 234, ImpalaSqlParser.RULE_statsKey);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1724;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 245)) & ~0x1F) === 0 && ((1 << (_la - 245)) & 15) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fileFormat(): FileFormatContext {
        let localContext = new FileFormatContext(this.context, this.state);
        this.enterRule(localContext, 236, ImpalaSqlParser.RULE_fileFormat);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1726;
            _la = this.tokenStream.LA(1);
            if(!(_la === 147 || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & 31) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public kuduPartitionClause(): KuduPartitionClauseContext {
        let localContext = new KuduPartitionClauseContext(this.context, this.state);
        this.enterRule(localContext, 238, ImpalaSqlParser.RULE_kuduPartitionClause);
        let _la: number;
        try {
            let alternative: number;
            this.state = 1741;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_HASH:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 1728;
                this.hashClause();
                this.state = 1733;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 204, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 1729;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1730;
                        this.hashClause();
                        }
                        }
                    }
                    this.state = 1735;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 204, this.context);
                }
                this.state = 1738;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 263) {
                    {
                    this.state = 1736;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1737;
                    this.rangeClause();
                    }
                }

                }
                }
                break;
            case ImpalaSqlParser.KW_RANGE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1740;
                this.rangeClause();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public hashClause(): HashClauseContext {
        let localContext = new HashClauseContext(this.context, this.state);
        this.enterRule(localContext, 240, ImpalaSqlParser.RULE_hashClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1743;
            this.match(ImpalaSqlParser.KW_HASH);
            this.state = 1745;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 265) {
                {
                this.state = 1744;
                this.columnAliases();
                }
            }

            this.state = 1747;
            this.match(ImpalaSqlParser.KW_PARTITIONS);
            this.state = 1748;
            this.number_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rangeClause(): RangeClauseContext {
        let localContext = new RangeClauseContext(this.context, this.state);
        this.enterRule(localContext, 242, ImpalaSqlParser.RULE_rangeClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1750;
            this.match(ImpalaSqlParser.KW_RANGE);
            this.state = 1752;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 208, this.context) ) {
            case 1:
                {
                this.state = 1751;
                this.columnAliases();
                }
                break;
            }
            this.state = 1754;
            this.match(ImpalaSqlParser.LPAREN);
            {
            this.state = 1755;
            this.match(ImpalaSqlParser.KW_PARTITION);
            this.state = 1756;
            this.kuduPartitionSpec();
            this.state = 1762;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 209, this.context);
            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1 + 1) {
                    {
                    {
                    this.state = 1757;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1758;
                    this.match(ImpalaSqlParser.KW_PARTITION);
                    this.state = 1759;
                    this.kuduPartitionSpec();
                    }
                    }
                }
                this.state = 1764;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 209, this.context);
            }
            }
            this.state = 1765;
            this.match(ImpalaSqlParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public kuduPartitionSpec(): KuduPartitionSpecContext {
        let localContext = new KuduPartitionSpecContext(this.context, this.state);
        this.enterRule(localContext, 244, ImpalaSqlParser.RULE_kuduPartitionSpec);
        let _la: number;
        try {
            this.state = 1782;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_VALUE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1767;
                this.match(ImpalaSqlParser.KW_VALUE);
                this.state = 1768;
                this.partitionCol();
                this.state = 1769;
                this.expression();
                }
                break;
            case ImpalaSqlParser.KW_ARRAY:
            case ImpalaSqlParser.KW_BERNOULLI:
            case ImpalaSqlParser.KW_CASE:
            case ImpalaSqlParser.KW_CAST:
            case ImpalaSqlParser.KW_CURRENT_DATE:
            case ImpalaSqlParser.KW_CURRENT_PATH:
            case ImpalaSqlParser.KW_CURRENT_TIME:
            case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
            case ImpalaSqlParser.KW_CURRENT_USER:
            case ImpalaSqlParser.KW_DAY:
            case ImpalaSqlParser.KW_DAYS:
            case ImpalaSqlParser.KW_EXCLUDING:
            case ImpalaSqlParser.KW_EXISTS:
            case ImpalaSqlParser.KW_EXTRACT:
            case ImpalaSqlParser.KW_FALSE:
            case ImpalaSqlParser.KW_GROUPING:
            case ImpalaSqlParser.KW_HOUR:
            case ImpalaSqlParser.KW_INCLUDING:
            case ImpalaSqlParser.KW_INTERVAL:
            case ImpalaSqlParser.KW_KEY:
            case ImpalaSqlParser.KW_LEFT:
            case ImpalaSqlParser.KW_LOCALTIME:
            case ImpalaSqlParser.KW_LOCALTIMESTAMP:
            case ImpalaSqlParser.KW_MINUTE:
            case ImpalaSqlParser.KW_MINUTES:
            case ImpalaSqlParser.KW_MONTH:
            case ImpalaSqlParser.KW_MONTHS:
            case ImpalaSqlParser.KW_NFC:
            case ImpalaSqlParser.KW_NFD:
            case ImpalaSqlParser.KW_NFKC:
            case ImpalaSqlParser.KW_NFKD:
            case ImpalaSqlParser.KW_NORMALIZE:
            case ImpalaSqlParser.KW_NOT:
            case ImpalaSqlParser.KW_NULL:
            case ImpalaSqlParser.KW_OPTION:
            case ImpalaSqlParser.KW_ORDINALITY:
            case ImpalaSqlParser.KW_POSITION:
            case ImpalaSqlParser.KW_PRIVILEGES:
            case ImpalaSqlParser.KW_PROPERTIES:
            case ImpalaSqlParser.KW_REPLACE:
            case ImpalaSqlParser.KW_RIGHT:
            case ImpalaSqlParser.KW_ROW:
            case ImpalaSqlParser.KW_SECOND:
            case ImpalaSqlParser.KW_SECONDS:
            case ImpalaSqlParser.KW_SHUTDOWN:
            case ImpalaSqlParser.KW_SUBSTRING:
            case ImpalaSqlParser.KW_SYSTEM:
            case ImpalaSqlParser.KW_TRUE:
            case ImpalaSqlParser.KW_TRY_CAST:
            case ImpalaSqlParser.KW_TRUNCATE:
            case ImpalaSqlParser.KW_USER:
            case ImpalaSqlParser.KW_VALUES:
            case ImpalaSqlParser.KW_VIEWS:
            case ImpalaSqlParser.KW_YEAR:
            case ImpalaSqlParser.KW_ORC:
            case ImpalaSqlParser.KW_DATE:
            case ImpalaSqlParser.PLUS:
            case ImpalaSqlParser.MINUS:
            case ImpalaSqlParser.LPAREN:
            case ImpalaSqlParser.QUESTION:
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.UNICODE_STRING:
            case ImpalaSqlParser.BINARY_LITERAL:
            case ImpalaSqlParser.INTEGER_VALUE:
            case ImpalaSqlParser.DECIMAL_VALUE:
            case ImpalaSqlParser.DOUBLE_VALUE:
            case ImpalaSqlParser.IDENTIFIER:
            case ImpalaSqlParser.DIGIT_IDENTIFIER:
            case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
            case ImpalaSqlParser.DOUBLE_PRECISION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1774;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 805323008) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 1442841375) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 2218795145) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 269631421) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 271654979) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & 537926659) !== 0) || ((((_la - 217)) & ~0x1F) === 0 && ((1 << (_la - 217)) & 16393) !== 0) || ((((_la - 255)) & ~0x1F) === 0 && ((1 << (_la - 255)) & 2549744643) !== 0)) {
                    {
                    this.state = 1771;
                    this.expression();
                    this.state = 1772;
                    this.rangeOperator();
                    }
                }

                this.state = 1776;
                this.match(ImpalaSqlParser.KW_VALUES);
                this.state = 1780;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 211, this.context) ) {
                case 1:
                    {
                    this.state = 1777;
                    this.rangeOperator();
                    this.state = 1778;
                    this.expression();
                    }
                    break;
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cacheSpec(): CacheSpecContext {
        let localContext = new CacheSpecContext(this.context, this.state);
        this.enterRule(localContext, 246, ImpalaSqlParser.RULE_cacheSpec);
        try {
            this.state = 1794;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_CACHED:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1784;
                this.match(ImpalaSqlParser.KW_CACHED);
                this.state = 1785;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 1786;
                this.identifier();
                this.state = 1791;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 213, this.context) ) {
                case 1:
                    {
                    this.state = 1787;
                    this.match(ImpalaSqlParser.KW_WITH);
                    this.state = 1788;
                    this.match(ImpalaSqlParser.KW_REPLICATION);
                    this.state = 1789;
                    this.match(ImpalaSqlParser.EQ);
                    this.state = 1790;
                    this.number_();
                    }
                    break;
                }
                }
                break;
            case ImpalaSqlParser.KW_UNCACHED:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1793;
                this.match(ImpalaSqlParser.KW_UNCACHED);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rangeOperator(): RangeOperatorContext {
        let localContext = new RangeOperatorContext(this.context, this.state);
        this.enterRule(localContext, 248, ImpalaSqlParser.RULE_rangeOperator);
        try {
            this.state = 1801;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_ARRAY:
            case ImpalaSqlParser.KW_BERNOULLI:
            case ImpalaSqlParser.KW_CASE:
            case ImpalaSqlParser.KW_CAST:
            case ImpalaSqlParser.KW_CURRENT_DATE:
            case ImpalaSqlParser.KW_CURRENT_PATH:
            case ImpalaSqlParser.KW_CURRENT_TIME:
            case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
            case ImpalaSqlParser.KW_CURRENT_USER:
            case ImpalaSqlParser.KW_DAY:
            case ImpalaSqlParser.KW_DAYS:
            case ImpalaSqlParser.KW_EXCLUDING:
            case ImpalaSqlParser.KW_EXISTS:
            case ImpalaSqlParser.KW_EXTRACT:
            case ImpalaSqlParser.KW_FALSE:
            case ImpalaSqlParser.KW_GROUPING:
            case ImpalaSqlParser.KW_HOUR:
            case ImpalaSqlParser.KW_INCLUDING:
            case ImpalaSqlParser.KW_INTERVAL:
            case ImpalaSqlParser.KW_KEY:
            case ImpalaSqlParser.KW_LEFT:
            case ImpalaSqlParser.KW_LOCALTIME:
            case ImpalaSqlParser.KW_LOCALTIMESTAMP:
            case ImpalaSqlParser.KW_MINUTE:
            case ImpalaSqlParser.KW_MINUTES:
            case ImpalaSqlParser.KW_MONTH:
            case ImpalaSqlParser.KW_MONTHS:
            case ImpalaSqlParser.KW_NFC:
            case ImpalaSqlParser.KW_NFD:
            case ImpalaSqlParser.KW_NFKC:
            case ImpalaSqlParser.KW_NFKD:
            case ImpalaSqlParser.KW_NORMALIZE:
            case ImpalaSqlParser.KW_NOT:
            case ImpalaSqlParser.KW_NULL:
            case ImpalaSqlParser.KW_OPTION:
            case ImpalaSqlParser.KW_ORDINALITY:
            case ImpalaSqlParser.KW_POSITION:
            case ImpalaSqlParser.KW_PRIVILEGES:
            case ImpalaSqlParser.KW_PROPERTIES:
            case ImpalaSqlParser.KW_REPLACE:
            case ImpalaSqlParser.KW_RIGHT:
            case ImpalaSqlParser.KW_ROW:
            case ImpalaSqlParser.KW_SECOND:
            case ImpalaSqlParser.KW_SECONDS:
            case ImpalaSqlParser.KW_SHUTDOWN:
            case ImpalaSqlParser.KW_SUBSTRING:
            case ImpalaSqlParser.KW_SYSTEM:
            case ImpalaSqlParser.KW_TRUE:
            case ImpalaSqlParser.KW_TRY_CAST:
            case ImpalaSqlParser.KW_TRUNCATE:
            case ImpalaSqlParser.KW_USER:
            case ImpalaSqlParser.KW_VALUES:
            case ImpalaSqlParser.KW_VIEWS:
            case ImpalaSqlParser.KW_YEAR:
            case ImpalaSqlParser.KW_ORC:
            case ImpalaSqlParser.KW_DATE:
            case ImpalaSqlParser.PLUS:
            case ImpalaSqlParser.MINUS:
            case ImpalaSqlParser.LPAREN:
            case ImpalaSqlParser.QUESTION:
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.UNICODE_STRING:
            case ImpalaSqlParser.BINARY_LITERAL:
            case ImpalaSqlParser.INTEGER_VALUE:
            case ImpalaSqlParser.DECIMAL_VALUE:
            case ImpalaSqlParser.DOUBLE_VALUE:
            case ImpalaSqlParser.IDENTIFIER:
            case ImpalaSqlParser.DIGIT_IDENTIFIER:
            case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
            case ImpalaSqlParser.DOUBLE_PRECISION:
                this.enterOuterAlt(localContext, 1);
                // tslint:disable-next-line:no-empty
                {
                }
                break;
            case ImpalaSqlParser.LT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1797;
                this.match(ImpalaSqlParser.LT);
                }
                break;
            case ImpalaSqlParser.LTE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1798;
                this.match(ImpalaSqlParser.LTE);
                }
                break;
            case ImpalaSqlParser.GT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1799;
                this.match(ImpalaSqlParser.GT);
                }
                break;
            case ImpalaSqlParser.GTE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1800;
                this.match(ImpalaSqlParser.GTE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public partitionCol(): PartitionColContext {
        let localContext = new PartitionColContext(this.context, this.state);
        this.enterRule(localContext, 250, ImpalaSqlParser.RULE_partitionCol);
        try {
            this.state = 1811;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.EQ:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1803;
                this.match(ImpalaSqlParser.EQ);
                }
                break;
            case ImpalaSqlParser.NEQ:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1804;
                this.match(ImpalaSqlParser.NEQ);
                }
                break;
            case ImpalaSqlParser.KW_LIKE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1805;
                this.match(ImpalaSqlParser.KW_LIKE);
                }
                break;
            case ImpalaSqlParser.KW_RLIKE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1806;
                this.match(ImpalaSqlParser.KW_RLIKE);
                }
                break;
            case ImpalaSqlParser.KW_REGEXP:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1807;
                this.match(ImpalaSqlParser.KW_REGEXP);
                }
                break;
            case ImpalaSqlParser.KW_BETWEEN:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1808;
                this.match(ImpalaSqlParser.KW_BETWEEN);
                }
                break;
            case ImpalaSqlParser.KW_IN:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1809;
                this.match(ImpalaSqlParser.KW_IN);
                }
                break;
            case ImpalaSqlParser.KW_ARRAY:
            case ImpalaSqlParser.KW_BERNOULLI:
            case ImpalaSqlParser.KW_CASE:
            case ImpalaSqlParser.KW_CAST:
            case ImpalaSqlParser.KW_CURRENT_DATE:
            case ImpalaSqlParser.KW_CURRENT_PATH:
            case ImpalaSqlParser.KW_CURRENT_TIME:
            case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
            case ImpalaSqlParser.KW_CURRENT_USER:
            case ImpalaSqlParser.KW_DAY:
            case ImpalaSqlParser.KW_DAYS:
            case ImpalaSqlParser.KW_EXCLUDING:
            case ImpalaSqlParser.KW_EXISTS:
            case ImpalaSqlParser.KW_EXTRACT:
            case ImpalaSqlParser.KW_FALSE:
            case ImpalaSqlParser.KW_GROUPING:
            case ImpalaSqlParser.KW_HOUR:
            case ImpalaSqlParser.KW_INCLUDING:
            case ImpalaSqlParser.KW_INTERVAL:
            case ImpalaSqlParser.KW_KEY:
            case ImpalaSqlParser.KW_LEFT:
            case ImpalaSqlParser.KW_LOCALTIME:
            case ImpalaSqlParser.KW_LOCALTIMESTAMP:
            case ImpalaSqlParser.KW_MINUTE:
            case ImpalaSqlParser.KW_MINUTES:
            case ImpalaSqlParser.KW_MONTH:
            case ImpalaSqlParser.KW_MONTHS:
            case ImpalaSqlParser.KW_NFC:
            case ImpalaSqlParser.KW_NFD:
            case ImpalaSqlParser.KW_NFKC:
            case ImpalaSqlParser.KW_NFKD:
            case ImpalaSqlParser.KW_NORMALIZE:
            case ImpalaSqlParser.KW_NOT:
            case ImpalaSqlParser.KW_NULL:
            case ImpalaSqlParser.KW_OPTION:
            case ImpalaSqlParser.KW_ORDINALITY:
            case ImpalaSqlParser.KW_POSITION:
            case ImpalaSqlParser.KW_PRIVILEGES:
            case ImpalaSqlParser.KW_PROPERTIES:
            case ImpalaSqlParser.KW_REPLACE:
            case ImpalaSqlParser.KW_RIGHT:
            case ImpalaSqlParser.KW_ROW:
            case ImpalaSqlParser.KW_SECOND:
            case ImpalaSqlParser.KW_SECONDS:
            case ImpalaSqlParser.KW_SHUTDOWN:
            case ImpalaSqlParser.KW_SUBSTRING:
            case ImpalaSqlParser.KW_SYSTEM:
            case ImpalaSqlParser.KW_TRUE:
            case ImpalaSqlParser.KW_TRY_CAST:
            case ImpalaSqlParser.KW_TRUNCATE:
            case ImpalaSqlParser.KW_USER:
            case ImpalaSqlParser.KW_VIEWS:
            case ImpalaSqlParser.KW_YEAR:
            case ImpalaSqlParser.KW_ORC:
            case ImpalaSqlParser.KW_DATE:
            case ImpalaSqlParser.LT:
            case ImpalaSqlParser.LTE:
            case ImpalaSqlParser.GT:
            case ImpalaSqlParser.GTE:
            case ImpalaSqlParser.PLUS:
            case ImpalaSqlParser.MINUS:
            case ImpalaSqlParser.LPAREN:
            case ImpalaSqlParser.QUESTION:
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.UNICODE_STRING:
            case ImpalaSqlParser.BINARY_LITERAL:
            case ImpalaSqlParser.INTEGER_VALUE:
            case ImpalaSqlParser.DECIMAL_VALUE:
            case ImpalaSqlParser.DOUBLE_VALUE:
            case ImpalaSqlParser.IDENTIFIER:
            case ImpalaSqlParser.DIGIT_IDENTIFIER:
            case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
            case ImpalaSqlParser.DOUBLE_PRECISION:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1810;
                this.rangeOperator();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public likeClause(): LikeClauseContext {
        let localContext = new LikeClauseContext(this.context, this.state);
        this.enterRule(localContext, 252, ImpalaSqlParser.RULE_likeClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1813;
            this.match(ImpalaSqlParser.KW_LIKE);
            this.state = 1814;
            this.qualifiedName();
            this.state = 1817;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 65 || _la === 95) {
                {
                this.state = 1815;
                localContext._optionType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 65 || _la === 95)) {
                    localContext._optionType = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1816;
                this.match(ImpalaSqlParser.KW_PROPERTIES);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public properties(): PropertiesContext {
        let localContext = new PropertiesContext(this.context, this.state);
        this.enterRule(localContext, 254, ImpalaSqlParser.RULE_properties);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1819;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 1820;
            this.property();
            this.state = 1825;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 263) {
                {
                {
                this.state = 1821;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1822;
                this.property();
                }
                }
                this.state = 1827;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1828;
            this.match(ImpalaSqlParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public partitionedBy(): PartitionedByContext {
        let localContext = new PartitionedByContext(this.context, this.state);
        this.enterRule(localContext, 256, ImpalaSqlParser.RULE_partitionedBy);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1830;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 1831;
            this.columnSpec();
            this.state = 1836;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 219, this.context);
            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1 + 1) {
                    {
                    {
                    this.state = 1832;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1833;
                    this.columnSpec();
                    }
                    }
                }
                this.state = 1838;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 219, this.context);
            }
            this.state = 1839;
            this.match(ImpalaSqlParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sortedBy(): SortedByContext {
        let localContext = new SortedByContext(this.context, this.state);
        this.enterRule(localContext, 258, ImpalaSqlParser.RULE_sortedBy);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1841;
            this.expression();
            this.state = 1846;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 263) {
                {
                {
                this.state = 1842;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1843;
                this.expression();
                }
                }
                this.state = 1848;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rowFormat(): RowFormatContext {
        let localContext = new RowFormatContext(this.context, this.state);
        this.enterRule(localContext, 260, ImpalaSqlParser.RULE_rowFormat);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1849;
            this.match(ImpalaSqlParser.KW_DELIMITED);
            this.state = 1859;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 71) {
                {
                this.state = 1850;
                this.match(ImpalaSqlParser.KW_FIELDS);
                this.state = 1851;
                this.match(ImpalaSqlParser.KW_TERMINATED);
                this.state = 1852;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 1853;
                this.stringLiteral();
                this.state = 1857;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 63) {
                    {
                    this.state = 1854;
                    this.match(ImpalaSqlParser.KW_ESCAPED);
                    this.state = 1855;
                    this.match(ImpalaSqlParser.KW_BY);
                    this.state = 1856;
                    this.stringLiteral();
                    }
                }

                }
            }

            this.state = 1865;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 117) {
                {
                this.state = 1861;
                this.match(ImpalaSqlParser.KW_LINES);
                this.state = 1862;
                this.match(ImpalaSqlParser.KW_TERMINATED);
                this.state = 1863;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 1864;
                this.stringLiteral();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public property(): PropertyContext {
        let localContext = new PropertyContext(this.context, this.state);
        this.enterRule(localContext, 262, ImpalaSqlParser.RULE_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1867;
            this.identifier();
            this.state = 1870;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 249) {
                {
                this.state = 1868;
                this.match(ImpalaSqlParser.EQ);
                this.state = 1869;
                this.expression();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public queryNoWith(): QueryNoWithContext {
        let localContext = new QueryNoWithContext(this.context, this.state);
        this.enterRule(localContext, 264, ImpalaSqlParser.RULE_queryNoWith);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1872;
            this.queryTerm(0);
            this.state = 1883;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 139) {
                {
                this.state = 1873;
                this.match(ImpalaSqlParser.KW_ORDER);
                this.state = 1874;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 1875;
                this.sortItem();
                this.state = 1880;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                    {
                    this.state = 1876;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1877;
                    this.sortItem();
                    }
                    }
                    this.state = 1882;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1891;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 1885;
                this.match(ImpalaSqlParser.KW_LIMIT);
                this.state = 1886;
                localContext._rows = this.expression();
                this.state = 1889;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 135) {
                    {
                    this.state = 1887;
                    this.match(ImpalaSqlParser.KW_OFFSET);
                    this.state = 1888;
                    localContext._offset = this.match(ImpalaSqlParser.INTEGER_VALUE);
                    }
                }

                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public queryTerm(): QueryTermContext;
    public queryTerm(_p: number): QueryTermContext;
    public queryTerm(_p?: number): QueryTermContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new QueryTermContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 266;
        this.enterRecursionRule(localContext, 266, ImpalaSqlParser.RULE_queryTerm, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            localContext = new QueryTermDefaultContext(localContext);
            this.context = localContext;
            previousContext = localContext;

            this.state = 1894;
            this.queryPrimary();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1910;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 232, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1908;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 231, this.context) ) {
                    case 1:
                        {
                        localContext = new SetOperationContext(new QueryTermContext(parentContext, parentState));
                        (localContext as SetOperationContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_queryTerm);
                        this.state = 1896;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1897;
                        (localContext as SetOperationContext)._operator = this.match(ImpalaSqlParser.KW_INTERSECT);
                        this.state = 1899;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 2 || _la === 57) {
                            {
                            this.state = 1898;
                            this.setQuantifier();
                            }
                        }

                        this.state = 1901;
                        (localContext as SetOperationContext)._right = this.queryTerm(3);
                        }
                        break;
                    case 2:
                        {
                        localContext = new SetOperationContext(new QueryTermContext(parentContext, parentState));
                        (localContext as SetOperationContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_queryTerm);
                        this.state = 1902;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 1903;
                        (localContext as SetOperationContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 64 || _la === 200)) {
                            (localContext as SetOperationContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1905;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 2 || _la === 57) {
                            {
                            this.state = 1904;
                            this.setQuantifier();
                            }
                        }

                        this.state = 1907;
                        (localContext as SetOperationContext)._right = this.queryTerm(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 1912;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 232, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public queryPrimary(): QueryPrimaryContext {
        let localContext = new QueryPrimaryContext(this.context, this.state);
        this.enterRule(localContext, 268, ImpalaSqlParser.RULE_queryPrimary);
        try {
            let alternative: number;
            this.state = 1929;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_SELECT:
                localContext = new QueryPrimaryDefaultContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1913;
                this.querySpecification();
                }
                break;
            case ImpalaSqlParser.KW_TABLE:
                localContext = new TableContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1914;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 1915;
                this.tableNamePath();
                }
                break;
            case ImpalaSqlParser.KW_VALUES:
                localContext = new InlineTableContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1916;
                this.match(ImpalaSqlParser.KW_VALUES);
                this.state = 1917;
                this.expression();
                this.state = 1922;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 233, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1918;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1919;
                        this.expression();
                        }
                        }
                    }
                    this.state = 1924;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 233, this.context);
                }
                }
                break;
            case ImpalaSqlParser.LPAREN:
                localContext = new SubqueryContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1925;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1926;
                this.queryNoWith();
                this.state = 1927;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sortItem(): SortItemContext {
        let localContext = new SortItemContext(this.context, this.state);
        this.enterRule(localContext, 270, ImpalaSqlParser.RULE_sortItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1931;
            this.columnItem();
            this.state = 1933;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10 || _la === 55) {
                {
                this.state = 1932;
                localContext._ordering = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 10 || _la === 55)) {
                    localContext._ordering = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 1937;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 134) {
                {
                this.state = 1935;
                this.match(ImpalaSqlParser.KW_NULLS);
                this.state = 1936;
                localContext._nullOrdering = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 75 || _la === 112)) {
                    localContext._nullOrdering = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public querySpecification(): QuerySpecificationContext {
        let localContext = new QuerySpecificationContext(this.context, this.state);
        this.enterRule(localContext, 272, ImpalaSqlParser.RULE_querySpecification);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1939;
            this.match(ImpalaSqlParser.KW_SELECT);
            this.state = 1941;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 237, this.context) ) {
            case 1:
                {
                this.state = 1940;
                this.setQuantifier();
                }
                break;
            }
            this.state = 1944;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 238, this.context) ) {
            case 1:
                {
                this.state = 1943;
                this.match(ImpalaSqlParser.KW_STRAIGHT_JOIN);
                }
                break;
            }
            this.state = 1946;
            this.selectItem();
            this.state = 1951;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 239, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1947;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1948;
                    this.selectItem();
                    }
                    }
                }
                this.state = 1953;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 239, this.context);
            }
            this.state = 1963;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 241, this.context) ) {
            case 1:
                {
                this.state = 1954;
                this.match(ImpalaSqlParser.KW_FROM);
                this.state = 1955;
                this.relation(0);
                this.state = 1960;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 240, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1956;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1957;
                        this.relation(0);
                        }
                        }
                    }
                    this.state = 1962;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 240, this.context);
                }
                }
                break;
            }
            this.state = 1966;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 242, this.context) ) {
            case 1:
                {
                this.state = 1965;
                this.whereClause();
                }
                break;
            }
            this.state = 1971;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 243, this.context) ) {
            case 1:
                {
                this.state = 1968;
                this.match(ImpalaSqlParser.KW_GROUP);
                this.state = 1969;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 1970;
                this.groupBy();
                }
                break;
            }
            this.state = 1974;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 244, this.context) ) {
            case 1:
                {
                this.state = 1973;
                this.havingClause();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whereClause(): WhereClauseContext {
        let localContext = new WhereClauseContext(this.context, this.state);
        this.enterRule(localContext, 274, ImpalaSqlParser.RULE_whereClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1976;
            this.match(ImpalaSqlParser.KW_WHERE);
            this.state = 1977;
            localContext._where = this.booleanExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public havingClause(): HavingClauseContext {
        let localContext = new HavingClauseContext(this.context, this.state);
        this.enterRule(localContext, 276, ImpalaSqlParser.RULE_havingClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1979;
            this.match(ImpalaSqlParser.KW_HAVING);
            this.state = 1980;
            localContext._having = this.booleanExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupBy(): GroupByContext {
        let localContext = new GroupByContext(this.context, this.state);
        this.enterRule(localContext, 278, ImpalaSqlParser.RULE_groupBy);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1983;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 245, this.context) ) {
            case 1:
                {
                this.state = 1982;
                this.setQuantifier();
                }
                break;
            }
            this.state = 1985;
            this.groupingElement();
            this.state = 1990;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 246, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1986;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1987;
                    this.groupingElement();
                    }
                    }
                }
                this.state = 1992;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 246, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupingElement(): GroupingElementContext {
        let localContext = new GroupingElementContext(this.context, this.state);
        this.enterRule(localContext, 280, ImpalaSqlParser.RULE_groupingElement);
        try {
            localContext = new SingleGroupingSetContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1993;
            this.groupingSet();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupingSet(): GroupingSetContext {
        let localContext = new GroupingSetContext(this.context, this.state);
        this.enterRule(localContext, 282, ImpalaSqlParser.RULE_groupingSet);
        let _la: number;
        try {
            this.state = 2008;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 249, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1995;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2004;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 248, this.context) ) {
                case 1:
                    {
                    this.state = 1996;
                    this.columnItem();
                    this.state = 2001;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 1997;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1998;
                        this.columnItem();
                        }
                        }
                        this.state = 2003;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                    break;
                }
                this.state = 2006;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2007;
                this.columnItem();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public namedQuery(): NamedQueryContext {
        let localContext = new NamedQueryContext(this.context, this.state);
        this.enterRule(localContext, 284, ImpalaSqlParser.RULE_namedQuery);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2010;
            localContext._name = this.identifier();
            this.state = 2012;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 265) {
                {
                this.state = 2011;
                this.columnAliases();
                }
            }

            this.state = 2014;
            this.match(ImpalaSqlParser.KW_AS);
            this.state = 2015;
            this.subQueryRelation();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public setQuantifier(): SetQuantifierContext {
        let localContext = new SetQuantifierContext(this.context, this.state);
        this.enterRule(localContext, 286, ImpalaSqlParser.RULE_setQuantifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2017;
            _la = this.tokenStream.LA(1);
            if(!(_la === 2 || _la === 57)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectItem(): SelectItemContext {
        let localContext = new SelectItemContext(this.context, this.state);
        this.enterRule(localContext, 288, ImpalaSqlParser.RULE_selectItem);
        let _la: number;
        try {
            this.state = 2031;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 253, this.context) ) {
            case 1:
                localContext = new SelectSingleContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2019;
                this.columnItem();
                this.state = 2024;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 252, this.context) ) {
                case 1:
                    {
                    this.state = 2021;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 9) {
                        {
                        this.state = 2020;
                        this.match(ImpalaSqlParser.KW_AS);
                        }
                    }

                    this.state = 2023;
                    this.identifier();
                    }
                    break;
                }
                }
                break;
            case 2:
                localContext = new SelectAllContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2026;
                this.qualifiedName();
                this.state = 2027;
                this.match(ImpalaSqlParser.DOT);
                this.state = 2028;
                this.match(ImpalaSqlParser.ASTERISK);
                }
                break;
            case 3:
                localContext = new SelectAllContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2030;
                this.match(ImpalaSqlParser.ASTERISK);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public relation(): RelationContext;
    public relation(_p: number): RelationContext;
    public relation(_p?: number): RelationContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new RelationContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 290;
        this.enterRecursionRule(localContext, 290, ImpalaSqlParser.RULE_relation, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            localContext = new RelationDefaultContext(localContext);
            this.context = localContext;
            previousContext = localContext;

            this.state = 2034;
            this.sampledRelation();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2049;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 255, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new JoinRelationContext(new RelationContext(parentContext, parentState));
                    (localContext as JoinRelationContext)._left = previousContext;
                    this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_relation);
                    this.state = 2036;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 2045;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case ImpalaSqlParser.KW_CROSS:
                        {
                        this.state = 2037;
                        this.match(ImpalaSqlParser.KW_CROSS);
                        this.state = 2038;
                        this.match(ImpalaSqlParser.KW_JOIN);
                        this.state = 2039;
                        (localContext as JoinRelationContext)._right = this.sampledRelation();
                        }
                        break;
                    case ImpalaSqlParser.KW_FULL:
                    case ImpalaSqlParser.KW_INNER:
                    case ImpalaSqlParser.KW_JOIN:
                    case ImpalaSqlParser.KW_LEFT:
                    case ImpalaSqlParser.KW_RIGHT:
                        {
                        this.state = 2040;
                        this.joinType();
                        this.state = 2041;
                        this.match(ImpalaSqlParser.KW_JOIN);
                        this.state = 2042;
                        (localContext as JoinRelationContext)._rightRelation = this.relation(0);
                        this.state = 2043;
                        this.joinCriteria();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                    }
                }
                this.state = 2051;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 255, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public joinType(): JoinTypeContext {
        let localContext = new JoinTypeContext(this.context, this.state);
        this.enterRule(localContext, 292, ImpalaSqlParser.RULE_joinType);
        let _la: number;
        try {
            this.state = 2083;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 262, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2053;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 97) {
                    {
                    this.state = 2052;
                    this.match(ImpalaSqlParser.KW_INNER);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2055;
                this.match(ImpalaSqlParser.KW_LEFT);
                this.state = 2057;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 97) {
                    {
                    this.state = 2056;
                    this.match(ImpalaSqlParser.KW_INNER);
                    }
                }

                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2059;
                this.match(ImpalaSqlParser.KW_RIGHT);
                this.state = 2061;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 97) {
                    {
                    this.state = 2060;
                    this.match(ImpalaSqlParser.KW_INNER);
                    }
                }

                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2063;
                this.match(ImpalaSqlParser.KW_LEFT);
                this.state = 2065;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 141) {
                    {
                    this.state = 2064;
                    this.match(ImpalaSqlParser.KW_OUTER);
                    }
                }

                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2067;
                this.match(ImpalaSqlParser.KW_RIGHT);
                this.state = 2069;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 141) {
                    {
                    this.state = 2068;
                    this.match(ImpalaSqlParser.KW_OUTER);
                    }
                }

                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2071;
                this.match(ImpalaSqlParser.KW_FULL);
                this.state = 2073;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 141) {
                    {
                    this.state = 2072;
                    this.match(ImpalaSqlParser.KW_OUTER);
                    }
                }

                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2075;
                this.match(ImpalaSqlParser.KW_LEFT);
                this.state = 2076;
                this.match(ImpalaSqlParser.KW_SEMI);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2077;
                this.match(ImpalaSqlParser.KW_RIGHT);
                this.state = 2078;
                this.match(ImpalaSqlParser.KW_SEMI);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 2079;
                this.match(ImpalaSqlParser.KW_LEFT);
                this.state = 2080;
                this.match(ImpalaSqlParser.KW_ANTI);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 2081;
                this.match(ImpalaSqlParser.KW_RIGHT);
                this.state = 2082;
                this.match(ImpalaSqlParser.KW_ANTI);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public joinCriteria(): JoinCriteriaContext {
        let localContext = new JoinCriteriaContext(this.context, this.state);
        this.enterRule(localContext, 294, ImpalaSqlParser.RULE_joinCriteria);
        let _la: number;
        try {
            this.state = 2099;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_ON:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2085;
                this.match(ImpalaSqlParser.KW_ON);
                this.state = 2086;
                this.booleanExpression(0);
                }
                break;
            case ImpalaSqlParser.KW_USING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2087;
                this.match(ImpalaSqlParser.KW_USING);
                this.state = 2088;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2089;
                this.identifier();
                this.state = 2094;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                    {
                    this.state = 2090;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2091;
                    this.identifier();
                    }
                    }
                    this.state = 2096;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2097;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sampledRelation(): SampledRelationContext {
        let localContext = new SampledRelationContext(this.context, this.state);
        this.enterRule(localContext, 296, ImpalaSqlParser.RULE_sampledRelation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2101;
            this.aliasedRelation();
            this.state = 2114;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 266, this.context) ) {
            case 1:
                {
                this.state = 2102;
                this.match(ImpalaSqlParser.KW_TABLESAMPLE);
                this.state = 2103;
                this.sampleType();
                this.state = 2104;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2105;
                localContext._percentage = this.expression();
                this.state = 2106;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2112;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 265, this.context) ) {
                case 1:
                    {
                    this.state = 2107;
                    this.match(ImpalaSqlParser.KW_REPEATABLE);
                    this.state = 2108;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2109;
                    localContext._seed = this.expression();
                    this.state = 2110;
                    this.match(ImpalaSqlParser.RPAREN);
                    }
                    break;
                }
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sampleType(): SampleTypeContext {
        let localContext = new SampleTypeContext(this.context, this.state);
        this.enterRule(localContext, 298, ImpalaSqlParser.RULE_sampleType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2116;
            _la = this.tokenStream.LA(1);
            if(!(_la === 14 || _la === 185)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aliasedRelation(): AliasedRelationContext {
        let localContext = new AliasedRelationContext(this.context, this.state);
        this.enterRule(localContext, 300, ImpalaSqlParser.RULE_aliasedRelation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2118;
            this.relationPrimary();
            this.state = 2126;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 269, this.context) ) {
            case 1:
                {
                this.state = 2120;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                    this.state = 2119;
                    this.match(ImpalaSqlParser.KW_AS);
                    }
                }

                this.state = 2122;
                localContext._alias = this.identifier();
                this.state = 2124;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 268, this.context) ) {
                case 1:
                    {
                    this.state = 2123;
                    this.columnAliases();
                    }
                    break;
                }
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnAliases(): ColumnAliasesContext {
        let localContext = new ColumnAliasesContext(this.context, this.state);
        this.enterRule(localContext, 302, ImpalaSqlParser.RULE_columnAliases);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2128;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 2129;
            this.columnNamePath();
            this.state = 2134;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 263) {
                {
                {
                this.state = 2130;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 2131;
                this.columnNamePath();
                }
                }
                this.state = 2136;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 2137;
            this.match(ImpalaSqlParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relationPrimary(): RelationPrimaryContext {
        let localContext = new RelationPrimaryContext(this.context, this.state);
        this.enterRule(localContext, 304, ImpalaSqlParser.RULE_relationPrimary);
        let _la: number;
        try {
            this.state = 2146;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 272, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2139;
                this.tableOrViewPath();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2141;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 113) {
                    {
                    this.state = 2140;
                    this.match(ImpalaSqlParser.KW_LATERAL);
                    }
                }

                this.state = 2143;
                this.subQueryRelation();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2144;
                this.unnest();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2145;
                this.parenthesizedRelation();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public subQueryRelation(): SubQueryRelationContext {
        let localContext = new SubQueryRelationContext(this.context, this.state);
        this.enterRule(localContext, 306, ImpalaSqlParser.RULE_subQueryRelation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2148;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 2149;
            this.queryStatement();
            this.state = 2150;
            this.match(ImpalaSqlParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unnest(): UnnestContext {
        let localContext = new UnnestContext(this.context, this.state);
        this.enterRule(localContext, 308, ImpalaSqlParser.RULE_unnest);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2152;
            this.match(ImpalaSqlParser.KW_UNNEST);
            this.state = 2153;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 2154;
            this.expression();
            this.state = 2159;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 263) {
                {
                {
                this.state = 2155;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 2156;
                this.expression();
                }
                }
                this.state = 2161;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 2162;
            this.match(ImpalaSqlParser.RPAREN);
            this.state = 2165;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 274, this.context) ) {
            case 1:
                {
                this.state = 2163;
                this.match(ImpalaSqlParser.KW_WITH);
                this.state = 2164;
                this.match(ImpalaSqlParser.KW_ORDINALITY);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parenthesizedRelation(): ParenthesizedRelationContext {
        let localContext = new ParenthesizedRelationContext(this.context, this.state);
        this.enterRule(localContext, 310, ImpalaSqlParser.RULE_parenthesizedRelation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2167;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 2168;
            this.relation(0);
            this.state = 2169;
            this.match(ImpalaSqlParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnItem(): ColumnItemContext {
        let localContext = new ColumnItemContext(this.context, this.state);
        this.enterRule(localContext, 312, ImpalaSqlParser.RULE_columnItem);
        try {
            this.state = 2173;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 275, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2171;
                this.columnNamePath();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2172;
                this.expression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expression(): ExpressionContext {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 314, ImpalaSqlParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2175;
            this.booleanExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public booleanExpression(): BooleanExpressionContext;
    public booleanExpression(_p: number): BooleanExpressionContext;
    public booleanExpression(_p?: number): BooleanExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new BooleanExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 316;
        this.enterRecursionRule(localContext, 316, ImpalaSqlParser.RULE_booleanExpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2184;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_ARRAY:
            case ImpalaSqlParser.KW_BERNOULLI:
            case ImpalaSqlParser.KW_CASE:
            case ImpalaSqlParser.KW_CAST:
            case ImpalaSqlParser.KW_CURRENT_DATE:
            case ImpalaSqlParser.KW_CURRENT_PATH:
            case ImpalaSqlParser.KW_CURRENT_TIME:
            case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
            case ImpalaSqlParser.KW_CURRENT_USER:
            case ImpalaSqlParser.KW_DAY:
            case ImpalaSqlParser.KW_DAYS:
            case ImpalaSqlParser.KW_EXCLUDING:
            case ImpalaSqlParser.KW_EXISTS:
            case ImpalaSqlParser.KW_EXTRACT:
            case ImpalaSqlParser.KW_FALSE:
            case ImpalaSqlParser.KW_GROUPING:
            case ImpalaSqlParser.KW_HOUR:
            case ImpalaSqlParser.KW_INCLUDING:
            case ImpalaSqlParser.KW_INTERVAL:
            case ImpalaSqlParser.KW_KEY:
            case ImpalaSqlParser.KW_LEFT:
            case ImpalaSqlParser.KW_LOCALTIME:
            case ImpalaSqlParser.KW_LOCALTIMESTAMP:
            case ImpalaSqlParser.KW_MINUTE:
            case ImpalaSqlParser.KW_MINUTES:
            case ImpalaSqlParser.KW_MONTH:
            case ImpalaSqlParser.KW_MONTHS:
            case ImpalaSqlParser.KW_NFC:
            case ImpalaSqlParser.KW_NFD:
            case ImpalaSqlParser.KW_NFKC:
            case ImpalaSqlParser.KW_NFKD:
            case ImpalaSqlParser.KW_NORMALIZE:
            case ImpalaSqlParser.KW_NULL:
            case ImpalaSqlParser.KW_OPTION:
            case ImpalaSqlParser.KW_ORDINALITY:
            case ImpalaSqlParser.KW_POSITION:
            case ImpalaSqlParser.KW_PRIVILEGES:
            case ImpalaSqlParser.KW_PROPERTIES:
            case ImpalaSqlParser.KW_REPLACE:
            case ImpalaSqlParser.KW_RIGHT:
            case ImpalaSqlParser.KW_ROW:
            case ImpalaSqlParser.KW_SECOND:
            case ImpalaSqlParser.KW_SECONDS:
            case ImpalaSqlParser.KW_SHUTDOWN:
            case ImpalaSqlParser.KW_SUBSTRING:
            case ImpalaSqlParser.KW_SYSTEM:
            case ImpalaSqlParser.KW_TRUE:
            case ImpalaSqlParser.KW_TRY_CAST:
            case ImpalaSqlParser.KW_TRUNCATE:
            case ImpalaSqlParser.KW_USER:
            case ImpalaSqlParser.KW_VIEWS:
            case ImpalaSqlParser.KW_YEAR:
            case ImpalaSqlParser.KW_ORC:
            case ImpalaSqlParser.KW_DATE:
            case ImpalaSqlParser.PLUS:
            case ImpalaSqlParser.MINUS:
            case ImpalaSqlParser.LPAREN:
            case ImpalaSqlParser.QUESTION:
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.UNICODE_STRING:
            case ImpalaSqlParser.BINARY_LITERAL:
            case ImpalaSqlParser.INTEGER_VALUE:
            case ImpalaSqlParser.DECIMAL_VALUE:
            case ImpalaSqlParser.DOUBLE_VALUE:
            case ImpalaSqlParser.IDENTIFIER:
            case ImpalaSqlParser.DIGIT_IDENTIFIER:
            case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
            case ImpalaSqlParser.DOUBLE_PRECISION:
                {
                localContext = new PredicatedContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 2178;
                (localContext as PredicatedContext)._valueExpression = this.valueExpression(0);
                this.state = 2180;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 276, this.context) ) {
                case 1:
                    {
                    this.state = 2179;
                    this.predicate((localContext as PredicatedContext)._valueExpression);
                    }
                    break;
                }
                }
                break;
            case ImpalaSqlParser.KW_NOT:
                {
                localContext = new LogicalNotContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2182;
                this.match(ImpalaSqlParser.KW_NOT);
                this.state = 2183;
                this.booleanExpression(3);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2194;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 279, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 2192;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 278, this.context) ) {
                    case 1:
                        {
                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as LogicalBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_booleanExpression);
                        this.state = 2186;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 2187;
                        (localContext as LogicalBinaryContext)._operator = this.match(ImpalaSqlParser.KW_AND);
                        this.state = 2188;
                        (localContext as LogicalBinaryContext)._right = this.booleanExpression(3);
                        }
                        break;
                    case 2:
                        {
                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as LogicalBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_booleanExpression);
                        this.state = 2189;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 2190;
                        (localContext as LogicalBinaryContext)._operator = this.match(ImpalaSqlParser.KW_OR);
                        this.state = 2191;
                        (localContext as LogicalBinaryContext)._right = this.booleanExpression(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 2196;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 279, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public predicate(value: antlr.ParserRuleContext): PredicateContext {
        let localContext = new PredicateContext(this.context, this.state, value);
        this.enterRule(localContext, 318, ImpalaSqlParser.RULE_predicate);
        let _la: number;
        try {
            this.state = 2255;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 288, this.context) ) {
            case 1:
                localContext = new ComparisonContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2197;
                this.comparisonOperator();
                this.state = 2198;
                (localContext as ComparisonContext)._right = this.valueExpression(0);
                }
                break;
            case 2:
                localContext = new QuantifiedComparisonContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2200;
                this.comparisonOperator();
                this.state = 2201;
                this.comparisonQuantifier();
                this.state = 2202;
                this.subQueryRelation();
                }
                break;
            case 3:
                localContext = new BetweenContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2205;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 132) {
                    {
                    this.state = 2204;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 2207;
                this.match(ImpalaSqlParser.KW_BETWEEN);
                this.state = 2208;
                (localContext as BetweenContext)._lower = this.valueExpression(0);
                this.state = 2209;
                this.match(ImpalaSqlParser.KW_AND);
                this.state = 2210;
                (localContext as BetweenContext)._upper = this.valueExpression(0);
                }
                break;
            case 4:
                localContext = new InListContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2213;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 132) {
                    {
                    this.state = 2212;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 2215;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 2216;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2217;
                this.expression();
                this.state = 2222;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                    {
                    this.state = 2218;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2219;
                    this.expression();
                    }
                    }
                    this.state = 2224;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2225;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 5:
                localContext = new InSubqueryContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2228;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 132) {
                    {
                    this.state = 2227;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 2230;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 2231;
                this.subQueryRelation();
                }
                break;
            case 6:
                localContext = new LikeContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2233;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 132) {
                    {
                    this.state = 2232;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 2235;
                _la = this.tokenStream.LA(1);
                if(!(_la === 106 || _la === 115 || _la === 164)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 2236;
                (localContext as LikeContext)._pattern = this.valueExpression(0);
                this.state = 2239;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 285, this.context) ) {
                case 1:
                    {
                    this.state = 2237;
                    this.match(ImpalaSqlParser.KW_ESCAPE);
                    this.state = 2238;
                    (localContext as LikeContext)._escape = this.valueExpression(0);
                    }
                    break;
                }
                }
                break;
            case 7:
                localContext = new REGEXPContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2241;
                _la = this.tokenStream.LA(1);
                if(!(_la === 105 || _la === 163)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 2242;
                (localContext as REGEXPContext)._pattern = this.valueExpression(0);
                }
                break;
            case 8:
                localContext = new NullOrUnKnownOrBooleanPredicateContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2243;
                this.match(ImpalaSqlParser.KW_IS);
                this.state = 2245;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 132) {
                    {
                    this.state = 2244;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 2247;
                _la = this.tokenStream.LA(1);
                if(!(_la === 70 || _la === 133 || _la === 194 || _la === 208)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case 9:
                localContext = new DistinctFromContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 2248;
                this.match(ImpalaSqlParser.KW_IS);
                this.state = 2250;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 132) {
                    {
                    this.state = 2249;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 2252;
                this.match(ImpalaSqlParser.KW_DISTINCT);
                this.state = 2253;
                this.match(ImpalaSqlParser.KW_FROM);
                this.state = 2254;
                (localContext as DistinctFromContext)._right = this.valueExpression(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public valueExpression(): ValueExpressionContext;
    public valueExpression(_p: number): ValueExpressionContext;
    public valueExpression(_p?: number): ValueExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ValueExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 320;
        this.enterRecursionRule(localContext, 320, ImpalaSqlParser.RULE_valueExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2261;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 289, this.context) ) {
            case 1:
                {
                localContext = new ValueExpressionDefaultContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 2258;
                this.primaryExpression(0);
                }
                break;
            case 2:
                {
                localContext = new ArithmeticUnaryContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2259;
                (localContext as ArithmeticUnaryContext)._operator = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 255 || _la === 256)) {
                    (localContext as ArithmeticUnaryContext)._operator = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 2260;
                this.valueExpression(4);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2274;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 291, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 2272;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 290, this.context) ) {
                    case 1:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_valueExpression);
                        this.state = 2263;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 2264;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 257)) & ~0x1F) === 0 && ((1 << (_la - 257)) & 7) !== 0))) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 2265;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_valueExpression);
                        this.state = 2266;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 2267;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 255 || _la === 256)) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 2268;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(3);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ConcatenationContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ConcatenationContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_valueExpression);
                        this.state = 2269;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 2270;
                        this.match(ImpalaSqlParser.CONCAT);
                        this.state = 2271;
                        (localContext as ConcatenationContext)._right = this.valueExpression(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 2276;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 291, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public primaryExpression(): PrimaryExpressionContext;
    public primaryExpression(_p: number): PrimaryExpressionContext;
    public primaryExpression(_p?: number): PrimaryExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new PrimaryExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 322;
        this.enterRecursionRule(localContext, 322, ImpalaSqlParser.RULE_primaryExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2523;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 321, this.context) ) {
            case 1:
                {
                localContext = new NullLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 2278;
                this.match(ImpalaSqlParser.KW_NULL);
                }
                break;
            case 2:
                {
                localContext = new IntervalLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2279;
                this.interval();
                }
                break;
            case 3:
                {
                localContext = new TypeConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2280;
                this.identifier();
                this.state = 2281;
                this.stringLiteral();
                }
                break;
            case 4:
                {
                localContext = new TypeConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2283;
                this.match(ImpalaSqlParser.DOUBLE_PRECISION);
                this.state = 2284;
                this.stringLiteral();
                }
                break;
            case 5:
                {
                localContext = new NumericLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2285;
                this.number_();
                }
                break;
            case 6:
                {
                localContext = new BooleanLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2286;
                this.booleanValue();
                }
                break;
            case 7:
                {
                localContext = new StringLiteralValuesContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2287;
                this.stringLiteral();
                }
                break;
            case 8:
                {
                localContext = new BinaryLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2288;
                this.match(ImpalaSqlParser.BINARY_LITERAL);
                }
                break;
            case 9:
                {
                localContext = new ParameterContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2289;
                this.match(ImpalaSqlParser.QUESTION);
                }
                break;
            case 10:
                {
                localContext = new PositionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2290;
                this.match(ImpalaSqlParser.KW_POSITION);
                this.state = 2291;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2292;
                this.valueExpression(0);
                this.state = 2293;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 2294;
                this.valueExpression(0);
                this.state = 2295;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 11:
                {
                localContext = new RowConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2297;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2298;
                this.expression();
                this.state = 2301;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                    this.state = 2299;
                    this.match(ImpalaSqlParser.KW_AS);
                    this.state = 2300;
                    this.type_(0);
                    }
                }

                this.state = 2311;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 294, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 2303;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2304;
                        this.expression();
                        this.state = 2307;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 9) {
                            {
                            this.state = 2305;
                            this.match(ImpalaSqlParser.KW_AS);
                            this.state = 2306;
                            this.type_(0);
                            }
                        }

                        }
                        }
                    }
                    this.state = 2313;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 294, this.context);
                }
                this.state = 2314;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 12:
                {
                localContext = new RowConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2316;
                this.match(ImpalaSqlParser.KW_ROW);
                this.state = 2317;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2318;
                this.expression();
                this.state = 2323;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                    {
                    this.state = 2319;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2320;
                    this.expression();
                    }
                    }
                    this.state = 2325;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2326;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 13:
                {
                localContext = new FunctionCallContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2328;
                this.functionNamePath();
                this.state = 2329;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2330;
                this.match(ImpalaSqlParser.ASTERISK);
                this.state = 2331;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2333;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 296, this.context) ) {
                case 1:
                    {
                    this.state = 2332;
                    this.filter();
                    }
                    break;
                }
                this.state = 2336;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 297, this.context) ) {
                case 1:
                    {
                    this.state = 2335;
                    this.over();
                    }
                    break;
                }
                }
                break;
            case 14:
                {
                localContext = new FunctionCallContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2338;
                this.functionNamePath();
                this.state = 2339;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2351;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 805323012) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 1442972447) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 2218795145) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 269631421) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 271654979) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & 537926659) !== 0) || ((((_la - 217)) & ~0x1F) === 0 && ((1 << (_la - 217)) & 16393) !== 0) || ((((_la - 255)) & ~0x1F) === 0 && ((1 << (_la - 255)) & 2549744643) !== 0)) {
                    {
                    this.state = 2341;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 2 || _la === 57) {
                        {
                        this.state = 2340;
                        this.setQuantifier();
                        }
                    }

                    this.state = 2343;
                    this.expression();
                    this.state = 2348;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 2344;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2345;
                        this.expression();
                        }
                        }
                        this.state = 2350;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 2363;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 139) {
                    {
                    this.state = 2353;
                    this.match(ImpalaSqlParser.KW_ORDER);
                    this.state = 2354;
                    this.match(ImpalaSqlParser.KW_BY);
                    this.state = 2355;
                    this.sortItem();
                    this.state = 2360;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 2356;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2357;
                        this.sortItem();
                        }
                        }
                        this.state = 2362;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 2365;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2367;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 303, this.context) ) {
                case 1:
                    {
                    this.state = 2366;
                    this.filter();
                    }
                    break;
                }
                this.state = 2370;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 304, this.context) ) {
                case 1:
                    {
                    this.state = 2369;
                    this.over();
                    }
                    break;
                }
                }
                break;
            case 15:
                {
                localContext = new LambdaContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2372;
                this.identifier();
                this.state = 2373;
                this.match(ImpalaSqlParser.RIGHT_ARROW);
                this.state = 2374;
                this.expression();
                }
                break;
            case 16:
                {
                localContext = new LambdaContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2376;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2385;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                    {
                    this.state = 2377;
                    this.identifier();
                    this.state = 2382;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 2378;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2379;
                        this.identifier();
                        }
                        }
                        this.state = 2384;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 2387;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2388;
                this.match(ImpalaSqlParser.RIGHT_ARROW);
                this.state = 2389;
                this.expression();
                }
                break;
            case 17:
                {
                localContext = new SubqueryExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2390;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2391;
                this.queryStatement();
                this.state = 2392;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 18:
                {
                localContext = new ExistsContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2394;
                this.match(ImpalaSqlParser.KW_EXISTS);
                this.state = 2395;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2396;
                this.queryStatement();
                this.state = 2397;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 19:
                {
                localContext = new SimpleCaseContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2399;
                this.match(ImpalaSqlParser.KW_CASE);
                this.state = 2400;
                this.valueExpression(0);
                this.state = 2402;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 2401;
                    this.whenClause();
                    }
                    }
                    this.state = 2404;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 214);
                this.state = 2408;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 59) {
                    {
                    this.state = 2406;
                    this.match(ImpalaSqlParser.KW_ELSE);
                    this.state = 2407;
                    (localContext as SimpleCaseContext)._elseExpression = this.expression();
                    }
                }

                this.state = 2410;
                this.match(ImpalaSqlParser.KW_END);
                }
                break;
            case 20:
                {
                localContext = new SearchedCaseContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2412;
                this.match(ImpalaSqlParser.KW_CASE);
                this.state = 2414;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 2413;
                    this.whenClause();
                    }
                    }
                    this.state = 2416;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 214);
                this.state = 2420;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 59) {
                    {
                    this.state = 2418;
                    this.match(ImpalaSqlParser.KW_ELSE);
                    this.state = 2419;
                    (localContext as SearchedCaseContext)._elseExpression = this.expression();
                    }
                }

                this.state = 2422;
                this.match(ImpalaSqlParser.KW_END);
                }
                break;
            case 21:
                {
                localContext = new CastContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2424;
                this.match(ImpalaSqlParser.KW_CAST);
                this.state = 2425;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2426;
                this.expression();
                this.state = 2427;
                this.match(ImpalaSqlParser.KW_AS);
                this.state = 2428;
                this.type_(0);
                this.state = 2429;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 22:
                {
                localContext = new CastContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2431;
                this.match(ImpalaSqlParser.KW_TRY_CAST);
                this.state = 2432;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2433;
                this.expression();
                this.state = 2434;
                this.match(ImpalaSqlParser.KW_AS);
                this.state = 2435;
                this.type_(0);
                this.state = 2436;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 23:
                {
                localContext = new ArrayConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2438;
                this.match(ImpalaSqlParser.KW_ARRAY);
                this.state = 2439;
                this.match(ImpalaSqlParser.LSQUARE);
                this.state = 2448;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 805323008) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 1442841375) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 2218795145) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 269631421) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 271654979) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & 537926659) !== 0) || ((((_la - 217)) & ~0x1F) === 0 && ((1 << (_la - 217)) & 16393) !== 0) || ((((_la - 255)) & ~0x1F) === 0 && ((1 << (_la - 255)) & 2549744643) !== 0)) {
                    {
                    this.state = 2440;
                    this.expression();
                    this.state = 2445;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 2441;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2442;
                        this.expression();
                        }
                        }
                        this.state = 2447;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 2450;
                this.match(ImpalaSqlParser.RSQUARE);
                }
                break;
            case 24:
                {
                localContext = new ColumnReferenceContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2451;
                this.columnName();
                }
                break;
            case 25:
                {
                localContext = new SpecialDateTimeFunctionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2452;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_DATE);
                }
                break;
            case 26:
                {
                localContext = new SpecialDateTimeFunctionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2453;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_TIME);
                this.state = 2457;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 313, this.context) ) {
                case 1:
                    {
                    this.state = 2454;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2455;
                    (localContext as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
                    this.state = 2456;
                    this.match(ImpalaSqlParser.RPAREN);
                    }
                    break;
                }
                }
                break;
            case 27:
                {
                localContext = new SpecialDateTimeFunctionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2459;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_TIMESTAMP);
                this.state = 2463;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 314, this.context) ) {
                case 1:
                    {
                    this.state = 2460;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2461;
                    (localContext as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
                    this.state = 2462;
                    this.match(ImpalaSqlParser.RPAREN);
                    }
                    break;
                }
                }
                break;
            case 28:
                {
                localContext = new SpecialDateTimeFunctionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2465;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_LOCALTIME);
                this.state = 2469;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 315, this.context) ) {
                case 1:
                    {
                    this.state = 2466;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2467;
                    (localContext as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
                    this.state = 2468;
                    this.match(ImpalaSqlParser.RPAREN);
                    }
                    break;
                }
                }
                break;
            case 29:
                {
                localContext = new SpecialDateTimeFunctionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2471;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_LOCALTIMESTAMP);
                this.state = 2475;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 316, this.context) ) {
                case 1:
                    {
                    this.state = 2472;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2473;
                    (localContext as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
                    this.state = 2474;
                    this.match(ImpalaSqlParser.RPAREN);
                    }
                    break;
                }
                }
                break;
            case 30:
                {
                localContext = new CurrentUserContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2477;
                (localContext as CurrentUserContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_USER);
                }
                break;
            case 31:
                {
                localContext = new CurrentPathContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2478;
                (localContext as CurrentPathContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_PATH);
                }
                break;
            case 32:
                {
                localContext = new SubstringContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2479;
                this.match(ImpalaSqlParser.KW_SUBSTRING);
                this.state = 2480;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2481;
                this.valueExpression(0);
                this.state = 2482;
                this.match(ImpalaSqlParser.KW_FROM);
                this.state = 2483;
                this.valueExpression(0);
                this.state = 2486;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 78) {
                    {
                    this.state = 2484;
                    this.match(ImpalaSqlParser.KW_FOR);
                    this.state = 2485;
                    this.valueExpression(0);
                    }
                }

                this.state = 2488;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 33:
                {
                localContext = new NormalizeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2490;
                this.match(ImpalaSqlParser.KW_NORMALIZE);
                this.state = 2491;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2492;
                this.valueExpression(0);
                this.state = 2495;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 263) {
                    {
                    this.state = 2493;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2494;
                    this.normalForm();
                    }
                }

                this.state = 2497;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 34:
                {
                localContext = new ExtractContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2499;
                this.match(ImpalaSqlParser.KW_EXTRACT);
                this.state = 2500;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2501;
                this.identifier();
                this.state = 2502;
                this.match(ImpalaSqlParser.KW_FROM);
                this.state = 2503;
                this.valueExpression(0);
                this.state = 2504;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 35:
                {
                localContext = new ParenthesizedExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2506;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2507;
                this.expression();
                this.state = 2508;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 36:
                {
                localContext = new GroupingOperationContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2510;
                this.match(ImpalaSqlParser.KW_GROUPING);
                this.state = 2511;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2520;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                    {
                    this.state = 2512;
                    this.qualifiedName();
                    this.state = 2517;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 2513;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2514;
                        this.qualifiedName();
                        }
                        }
                        this.state = 2519;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 2522;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2535;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 323, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 2533;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 322, this.context) ) {
                    case 1:
                        {
                        localContext = new SubscriptContext(new PrimaryExpressionContext(parentContext, parentState));
                        (localContext as SubscriptContext)._value = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_primaryExpression);
                        this.state = 2525;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 2526;
                        this.match(ImpalaSqlParser.LSQUARE);
                        this.state = 2527;
                        (localContext as SubscriptContext)._index = this.valueExpression(0);
                        this.state = 2528;
                        this.match(ImpalaSqlParser.RSQUARE);
                        }
                        break;
                    case 2:
                        {
                        localContext = new DereferenceContext(new PrimaryExpressionContext(parentContext, parentState));
                        (localContext as DereferenceContext)._base = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_primaryExpression);
                        this.state = 2530;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 2531;
                        this.match(ImpalaSqlParser.DOT);
                        this.state = 2532;
                        (localContext as DereferenceContext)._fieldName = this.identifier();
                        }
                        break;
                    }
                    }
                }
                this.state = 2537;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 323, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public stringLiteral(): StringLiteralContext {
        let localContext = new StringLiteralContext(this.context, this.state);
        this.enterRule(localContext, 324, ImpalaSqlParser.RULE_stringLiteral);
        try {
            this.state = 2544;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.STRING:
                localContext = new BasicStringLiteralContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2538;
                this.match(ImpalaSqlParser.STRING);
                }
                break;
            case ImpalaSqlParser.UNICODE_STRING:
                localContext = new UnicodeStringLiteralContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2539;
                this.match(ImpalaSqlParser.UNICODE_STRING);
                this.state = 2542;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 324, this.context) ) {
                case 1:
                    {
                    this.state = 2540;
                    this.match(ImpalaSqlParser.KW_UESCAPE);
                    this.state = 2541;
                    this.match(ImpalaSqlParser.STRING);
                    }
                    break;
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public comparisonOperator(): ComparisonOperatorContext {
        let localContext = new ComparisonOperatorContext(this.context, this.state);
        this.enterRule(localContext, 326, ImpalaSqlParser.RULE_comparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2546;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 249)) & ~0x1F) === 0 && ((1 << (_la - 249)) & 63) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public comparisonQuantifier(): ComparisonQuantifierContext {
        let localContext = new ComparisonQuantifierContext(this.context, this.state);
        this.enterRule(localContext, 328, ImpalaSqlParser.RULE_comparisonQuantifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2548;
            _la = this.tokenStream.LA(1);
            if(!(_la === 2 || _la === 6 || _la === 181)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public booleanValue(): BooleanValueContext {
        let localContext = new BooleanValueContext(this.context, this.state);
        this.enterRule(localContext, 330, ImpalaSqlParser.RULE_booleanValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2550;
            _la = this.tokenStream.LA(1);
            if(!(_la === 70 || _la === 194)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interval(): IntervalContext {
        let localContext = new IntervalContext(this.context, this.state);
        this.enterRule(localContext, 332, ImpalaSqlParser.RULE_interval);
        try {
            this.state = 2566;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 326, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2552;
                this.match(ImpalaSqlParser.INTEGER_VALUE);
                this.state = 2553;
                this.intervalField();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2554;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2555;
                this.match(ImpalaSqlParser.INTEGER_VALUE);
                this.state = 2556;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2557;
                this.intervalField();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2558;
                this.match(ImpalaSqlParser.KW_INTERVAL);
                this.state = 2559;
                this.match(ImpalaSqlParser.INTEGER_VALUE);
                this.state = 2560;
                this.intervalField();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2561;
                this.match(ImpalaSqlParser.KW_INTERVAL);
                this.state = 2562;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2563;
                this.match(ImpalaSqlParser.INTEGER_VALUE);
                this.state = 2564;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2565;
                this.intervalField();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public intervalField(): IntervalFieldContext {
        let localContext = new IntervalFieldContext(this.context, this.state);
        this.enterRule(localContext, 334, ImpalaSqlParser.RULE_intervalField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2568;
            _la = this.tokenStream.LA(1);
            if(!(_la === 48 || _la === 49 || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2147483651) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 7) !== 0) || _la === 172 || _la === 173 || _la === 217 || _la === 218)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public normalForm(): NormalFormContext {
        let localContext = new NormalFormContext(this.context, this.state);
        this.enterRule(localContext, 336, ImpalaSqlParser.RULE_normalForm);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2570;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & 15) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public type_(): TypeContext;
    public type_(_p: number): TypeContext;
    public type_(_p?: number): TypeContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new TypeContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 338;
        this.enterRecursionRule(localContext, 338, ImpalaSqlParser.RULE_type, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2617;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 331, this.context) ) {
            case 1:
                {
                this.state = 2573;
                this.match(ImpalaSqlParser.KW_ARRAY);
                this.state = 2574;
                this.match(ImpalaSqlParser.LT);
                this.state = 2575;
                this.type_(0);
                this.state = 2576;
                this.match(ImpalaSqlParser.GT);
                }
                break;
            case 2:
                {
                this.state = 2578;
                this.match(ImpalaSqlParser.KW_MAP);
                this.state = 2579;
                this.match(ImpalaSqlParser.LT);
                this.state = 2580;
                this.type_(0);
                this.state = 2581;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 2582;
                this.type_(0);
                this.state = 2583;
                this.match(ImpalaSqlParser.GT);
                }
                break;
            case 3:
                {
                this.state = 2585;
                this.match(ImpalaSqlParser.KW_STRUCT);
                this.state = 2586;
                this.match(ImpalaSqlParser.LT);
                this.state = 2587;
                this.identifier();
                this.state = 2588;
                this.type_(0);
                this.state = 2595;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                    {
                    this.state = 2589;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2590;
                    this.identifier();
                    this.state = 2591;
                    this.type_(0);
                    }
                    }
                    this.state = 2597;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2598;
                this.match(ImpalaSqlParser.GT);
                }
                break;
            case 4:
                {
                this.state = 2602;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 328, this.context) ) {
                case 1:
                    {
                    this.state = 2600;
                    this.baseType();
                    }
                    break;
                case 2:
                    {
                    this.state = 2601;
                    this.dataType();
                    }
                    break;
                }
                this.state = 2615;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 330, this.context) ) {
                case 1:
                    {
                    this.state = 2604;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2605;
                    this.typeParameter();
                    this.state = 2610;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 2606;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2607;
                        this.typeParameter();
                        }
                        }
                        this.state = 2612;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 2613;
                    this.match(ImpalaSqlParser.RPAREN);
                    }
                    break;
                }
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2623;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 332, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new TypeContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_type);
                    this.state = 2619;
                    if (!(this.precpred(this.context, 5))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                    }
                    this.state = 2620;
                    this.match(ImpalaSqlParser.KW_ARRAY);
                    }
                    }
                }
                this.state = 2625;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 332, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public dataType(): DataTypeContext {
        let localContext = new DataTypeContext(this.context, this.state);
        this.enterRule(localContext, 340, ImpalaSqlParser.RULE_dataType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2626;
            _la = this.tokenStream.LA(1);
            if(!(_la === 8 || ((((_la - 227)) & ~0x1F) === 0 && ((1 << (_la - 227)) & 262143) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeParameter(): TypeParameterContext {
        let localContext = new TypeParameterContext(this.context, this.state);
        this.enterRule(localContext, 342, ImpalaSqlParser.RULE_typeParameter);
        try {
            this.state = 2630;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.INTEGER_VALUE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2628;
                this.match(ImpalaSqlParser.INTEGER_VALUE);
                }
                break;
            case ImpalaSqlParser.KW_ARRAY:
            case ImpalaSqlParser.KW_BERNOULLI:
            case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
            case ImpalaSqlParser.KW_CURRENT_USER:
            case ImpalaSqlParser.KW_DAY:
            case ImpalaSqlParser.KW_DAYS:
            case ImpalaSqlParser.KW_EXCLUDING:
            case ImpalaSqlParser.KW_EXTRACT:
            case ImpalaSqlParser.KW_HOUR:
            case ImpalaSqlParser.KW_INCLUDING:
            case ImpalaSqlParser.KW_KEY:
            case ImpalaSqlParser.KW_LOCALTIME:
            case ImpalaSqlParser.KW_MINUTE:
            case ImpalaSqlParser.KW_MINUTES:
            case ImpalaSqlParser.KW_MONTH:
            case ImpalaSqlParser.KW_MONTHS:
            case ImpalaSqlParser.KW_NFC:
            case ImpalaSqlParser.KW_NFD:
            case ImpalaSqlParser.KW_NFKC:
            case ImpalaSqlParser.KW_NFKD:
            case ImpalaSqlParser.KW_OPTION:
            case ImpalaSqlParser.KW_ORDINALITY:
            case ImpalaSqlParser.KW_PRIVILEGES:
            case ImpalaSqlParser.KW_PROPERTIES:
            case ImpalaSqlParser.KW_SECOND:
            case ImpalaSqlParser.KW_SECONDS:
            case ImpalaSqlParser.KW_SHUTDOWN:
            case ImpalaSqlParser.KW_SUBSTRING:
            case ImpalaSqlParser.KW_SYSTEM:
            case ImpalaSqlParser.KW_TRY_CAST:
            case ImpalaSqlParser.KW_USER:
            case ImpalaSqlParser.KW_VIEWS:
            case ImpalaSqlParser.KW_YEAR:
            case ImpalaSqlParser.KW_ORC:
            case ImpalaSqlParser.KW_BINARY:
            case ImpalaSqlParser.KW_BIGINT:
            case ImpalaSqlParser.KW_BOOLEAN:
            case ImpalaSqlParser.KW_CHAR:
            case ImpalaSqlParser.KW_DATE:
            case ImpalaSqlParser.KW_DECIMAL:
            case ImpalaSqlParser.KW_DOUBLE:
            case ImpalaSqlParser.KW_INT:
            case ImpalaSqlParser.KW_MAP:
            case ImpalaSqlParser.KW_REAL:
            case ImpalaSqlParser.KW_SMALLINT:
            case ImpalaSqlParser.KW_FLOAT:
            case ImpalaSqlParser.KW_STRING:
            case ImpalaSqlParser.KW_STRUCT:
            case ImpalaSqlParser.KW_TIMESTAMP:
            case ImpalaSqlParser.KW_TINYINT:
            case ImpalaSqlParser.KW_VARCHAR:
            case ImpalaSqlParser.KW_COMPLEX:
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.IDENTIFIER:
            case ImpalaSqlParser.DIGIT_IDENTIFIER:
            case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
            case ImpalaSqlParser.TIME_WITH_TIME_ZONE:
            case ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE:
            case ImpalaSqlParser.DOUBLE_PRECISION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2629;
                this.type_(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public baseType(): BaseTypeContext {
        let localContext = new BaseTypeContext(this.context, this.state);
        this.enterRule(localContext, 344, ImpalaSqlParser.RULE_baseType);
        try {
            this.state = 2636;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.TIME_WITH_TIME_ZONE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2632;
                this.match(ImpalaSqlParser.TIME_WITH_TIME_ZONE);
                }
                break;
            case ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2633;
                this.match(ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE);
                }
                break;
            case ImpalaSqlParser.DOUBLE_PRECISION:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2634;
                this.match(ImpalaSqlParser.DOUBLE_PRECISION);
                }
                break;
            case ImpalaSqlParser.KW_BERNOULLI:
            case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
            case ImpalaSqlParser.KW_CURRENT_USER:
            case ImpalaSqlParser.KW_DAY:
            case ImpalaSqlParser.KW_DAYS:
            case ImpalaSqlParser.KW_EXCLUDING:
            case ImpalaSqlParser.KW_EXTRACT:
            case ImpalaSqlParser.KW_HOUR:
            case ImpalaSqlParser.KW_INCLUDING:
            case ImpalaSqlParser.KW_KEY:
            case ImpalaSqlParser.KW_LOCALTIME:
            case ImpalaSqlParser.KW_MINUTE:
            case ImpalaSqlParser.KW_MINUTES:
            case ImpalaSqlParser.KW_MONTH:
            case ImpalaSqlParser.KW_MONTHS:
            case ImpalaSqlParser.KW_NFC:
            case ImpalaSqlParser.KW_NFD:
            case ImpalaSqlParser.KW_NFKC:
            case ImpalaSqlParser.KW_NFKD:
            case ImpalaSqlParser.KW_OPTION:
            case ImpalaSqlParser.KW_ORDINALITY:
            case ImpalaSqlParser.KW_PRIVILEGES:
            case ImpalaSqlParser.KW_PROPERTIES:
            case ImpalaSqlParser.KW_SECOND:
            case ImpalaSqlParser.KW_SECONDS:
            case ImpalaSqlParser.KW_SHUTDOWN:
            case ImpalaSqlParser.KW_SUBSTRING:
            case ImpalaSqlParser.KW_SYSTEM:
            case ImpalaSqlParser.KW_TRY_CAST:
            case ImpalaSqlParser.KW_USER:
            case ImpalaSqlParser.KW_VIEWS:
            case ImpalaSqlParser.KW_YEAR:
            case ImpalaSqlParser.KW_ORC:
            case ImpalaSqlParser.KW_DATE:
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.IDENTIFIER:
            case ImpalaSqlParser.DIGIT_IDENTIFIER:
            case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2635;
                this.identifier();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whenClause(): WhenClauseContext {
        let localContext = new WhenClauseContext(this.context, this.state);
        this.enterRule(localContext, 346, ImpalaSqlParser.RULE_whenClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2638;
            this.match(ImpalaSqlParser.KW_WHEN);
            this.state = 2639;
            localContext._condition = this.expression();
            this.state = 2640;
            this.match(ImpalaSqlParser.KW_THEN);
            this.state = 2641;
            localContext._result = this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public filter(): FilterContext {
        let localContext = new FilterContext(this.context, this.state);
        this.enterRule(localContext, 348, ImpalaSqlParser.RULE_filter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2643;
            this.match(ImpalaSqlParser.KW_FILTER);
            this.state = 2644;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 2645;
            this.whereClause();
            this.state = 2646;
            this.match(ImpalaSqlParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public partitionByClause(): PartitionByClauseContext {
        let localContext = new PartitionByClauseContext(this.context, this.state);
        this.enterRule(localContext, 350, ImpalaSqlParser.RULE_partitionByClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2648;
            localContext._expression = this.expression();
            localContext._partition.push(localContext._expression);
            this.state = 2653;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 263) {
                {
                {
                this.state = 2649;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 2650;
                localContext._expression = this.expression();
                localContext._partition.push(localContext._expression);
                }
                }
                this.state = 2655;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public over(): OverContext {
        let localContext = new OverContext(this.context, this.state);
        this.enterRule(localContext, 352, ImpalaSqlParser.RULE_over);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2656;
            this.match(ImpalaSqlParser.KW_OVER);
            this.state = 2657;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 2661;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 2658;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 2659;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 2660;
                this.partitionByClause();
                }
            }

            this.state = 2673;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 139) {
                {
                this.state = 2663;
                this.match(ImpalaSqlParser.KW_ORDER);
                this.state = 2664;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 2665;
                this.sortItem();
                this.state = 2670;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                    {
                    this.state = 2666;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2667;
                    this.sortItem();
                    }
                    }
                    this.state = 2672;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 2676;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 154 || _la === 169) {
                {
                this.state = 2675;
                this.windowFrame();
                }
            }

            this.state = 2678;
            this.match(ImpalaSqlParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowFrame(): WindowFrameContext {
        let localContext = new WindowFrameContext(this.context, this.state);
        this.enterRule(localContext, 354, ImpalaSqlParser.RULE_windowFrame);
        try {
            this.state = 2696;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 340, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2680;
                localContext._frameType = this.match(ImpalaSqlParser.KW_RANGE);
                this.state = 2681;
                localContext._start_ = this.frameBound();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2682;
                localContext._frameType = this.match(ImpalaSqlParser.KW_ROWS);
                this.state = 2683;
                localContext._start_ = this.frameBound();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2684;
                localContext._frameType = this.match(ImpalaSqlParser.KW_RANGE);
                this.state = 2685;
                this.match(ImpalaSqlParser.KW_BETWEEN);
                this.state = 2686;
                localContext._start_ = this.frameBound();
                this.state = 2687;
                this.match(ImpalaSqlParser.KW_AND);
                this.state = 2688;
                localContext._end = this.frameBound();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2690;
                localContext._frameType = this.match(ImpalaSqlParser.KW_ROWS);
                this.state = 2691;
                this.match(ImpalaSqlParser.KW_BETWEEN);
                this.state = 2692;
                localContext._start_ = this.frameBound();
                this.state = 2693;
                this.match(ImpalaSqlParser.KW_AND);
                this.state = 2694;
                localContext._end = this.frameBound();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public frameBound(): FrameBoundContext {
        let localContext = new FrameBoundContext(this.context, this.state);
        this.enterRule(localContext, 356, ImpalaSqlParser.RULE_frameBound);
        let _la: number;
        try {
            this.state = 2707;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 341, this.context) ) {
            case 1:
                localContext = new UnboundedFrameContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2698;
                this.match(ImpalaSqlParser.KW_UNBOUNDED);
                this.state = 2699;
                (localContext as UnboundedFrameContext)._boundType = this.match(ImpalaSqlParser.KW_PRECEDING);
                }
                break;
            case 2:
                localContext = new UnboundedFrameContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2700;
                this.match(ImpalaSqlParser.KW_UNBOUNDED);
                this.state = 2701;
                (localContext as UnboundedFrameContext)._boundType = this.match(ImpalaSqlParser.KW_FOLLOWING);
                }
                break;
            case 3:
                localContext = new CurrentRowBoundContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2702;
                this.match(ImpalaSqlParser.KW_CURRENT);
                this.state = 2703;
                this.match(ImpalaSqlParser.KW_ROW);
                }
                break;
            case 4:
                localContext = new BoundedFrameContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2704;
                this.expression();
                this.state = 2705;
                (localContext as BoundedFrameContext)._boundType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 77 || _la === 149)) {
                    (localContext as BoundedFrameContext)._boundType = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pathElement(): PathElementContext {
        let localContext = new PathElementContext(this.context, this.state);
        this.enterRule(localContext, 358, ImpalaSqlParser.RULE_pathElement);
        try {
            this.state = 2714;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 342, this.context) ) {
            case 1:
                localContext = new QualifiedArgumentContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2709;
                this.identifier();
                this.state = 2710;
                this.match(ImpalaSqlParser.DOT);
                this.state = 2711;
                this.identifier();
                }
                break;
            case 2:
                localContext = new UnqualifiedArgumentContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2713;
                this.identifier();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pathSpecification(): PathSpecificationContext {
        let localContext = new PathSpecificationContext(this.context, this.state);
        this.enterRule(localContext, 360, ImpalaSqlParser.RULE_pathSpecification);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2716;
            this.pathElement();
            this.state = 2721;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 263) {
                {
                {
                this.state = 2717;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 2718;
                this.pathElement();
                }
                }
                this.state = 2723;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public privilege(): PrivilegeContext {
        let localContext = new PrivilegeContext(this.context, this.state);
        this.enterRule(localContext, 362, ImpalaSqlParser.RULE_privilege);
        let _la: number;
        try {
            this.state = 2737;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_ALL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2724;
                this.match(ImpalaSqlParser.KW_ALL);
                }
                break;
            case ImpalaSqlParser.KW_ALTER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2725;
                this.match(ImpalaSqlParser.KW_ALTER);
                }
                break;
            case ImpalaSqlParser.KW_DROP:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2726;
                this.match(ImpalaSqlParser.KW_DROP);
                }
                break;
            case ImpalaSqlParser.KW_CREATE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2727;
                this.match(ImpalaSqlParser.KW_CREATE);
                }
                break;
            case ImpalaSqlParser.KW_INSERT:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2728;
                this.match(ImpalaSqlParser.KW_INSERT);
                }
                break;
            case ImpalaSqlParser.KW_REFRESH:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2729;
                this.match(ImpalaSqlParser.KW_REFRESH);
                }
                break;
            case ImpalaSqlParser.KW_SELECT:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2730;
                this.match(ImpalaSqlParser.KW_SELECT);
                this.state = 2735;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 265) {
                    {
                    this.state = 2731;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2732;
                    localContext._name = this.identifier();
                    this.state = 2733;
                    this.match(ImpalaSqlParser.RPAREN);
                    }
                }

                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public objectType(): ObjectTypeContext {
        let localContext = new ObjectTypeContext(this.context, this.state);
        this.enterRule(localContext, 364, ImpalaSqlParser.RULE_objectType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2739;
            _la = this.tokenStream.LA(1);
            if(!(_la === 46 || ((((_la - 178)) & ~0x1F) === 0 && ((1 << (_la - 178)) & 2147484673) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedName(): QualifiedNameContext {
        let localContext = new QualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 366, ImpalaSqlParser.RULE_qualifiedName);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2741;
            this.identifier();
            this.state = 2746;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 346, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2742;
                    this.match(ImpalaSqlParser.DOT);
                    this.state = 2743;
                    this.identifier();
                    }
                    }
                }
                this.state = 2748;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 346, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public principal(): PrincipalContext {
        let localContext = new PrincipalContext(this.context, this.state);
        this.enterRule(localContext, 368, ImpalaSqlParser.RULE_principal);
        try {
            this.state = 2755;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_ROLE:
                localContext = new RolePrincipalContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2749;
                this.match(ImpalaSqlParser.KW_ROLE);
                this.state = 2750;
                this.identifier();
                }
                break;
            case ImpalaSqlParser.KW_USER:
                localContext = new UserPrincipalContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2751;
                this.match(ImpalaSqlParser.KW_USER);
                this.state = 2752;
                this.identifier();
                }
                break;
            case ImpalaSqlParser.KW_GROUP:
                localContext = new GroupPrincipalContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2753;
                this.match(ImpalaSqlParser.KW_GROUP);
                this.state = 2754;
                this.identifier();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 370, ImpalaSqlParser.RULE_identifier);
        try {
            this.state = 2762;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.IDENTIFIER:
                localContext = new UnquotedIdentifierContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2757;
                this.match(ImpalaSqlParser.IDENTIFIER);
                }
                break;
            case ImpalaSqlParser.STRING:
                localContext = new QuotedIdentifierContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2758;
                this.match(ImpalaSqlParser.STRING);
                }
                break;
            case ImpalaSqlParser.KW_BERNOULLI:
            case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
            case ImpalaSqlParser.KW_CURRENT_USER:
            case ImpalaSqlParser.KW_DAY:
            case ImpalaSqlParser.KW_DAYS:
            case ImpalaSqlParser.KW_EXCLUDING:
            case ImpalaSqlParser.KW_EXTRACT:
            case ImpalaSqlParser.KW_HOUR:
            case ImpalaSqlParser.KW_INCLUDING:
            case ImpalaSqlParser.KW_KEY:
            case ImpalaSqlParser.KW_LOCALTIME:
            case ImpalaSqlParser.KW_MINUTE:
            case ImpalaSqlParser.KW_MINUTES:
            case ImpalaSqlParser.KW_MONTH:
            case ImpalaSqlParser.KW_MONTHS:
            case ImpalaSqlParser.KW_NFC:
            case ImpalaSqlParser.KW_NFD:
            case ImpalaSqlParser.KW_NFKC:
            case ImpalaSqlParser.KW_NFKD:
            case ImpalaSqlParser.KW_OPTION:
            case ImpalaSqlParser.KW_ORDINALITY:
            case ImpalaSqlParser.KW_PRIVILEGES:
            case ImpalaSqlParser.KW_PROPERTIES:
            case ImpalaSqlParser.KW_SECOND:
            case ImpalaSqlParser.KW_SECONDS:
            case ImpalaSqlParser.KW_SHUTDOWN:
            case ImpalaSqlParser.KW_SUBSTRING:
            case ImpalaSqlParser.KW_SYSTEM:
            case ImpalaSqlParser.KW_TRY_CAST:
            case ImpalaSqlParser.KW_USER:
            case ImpalaSqlParser.KW_VIEWS:
            case ImpalaSqlParser.KW_YEAR:
            case ImpalaSqlParser.KW_ORC:
            case ImpalaSqlParser.KW_DATE:
                localContext = new UnquotedIdentifierContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2759;
                this.nonReserved();
                }
                break;
            case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
                localContext = new BackQuotedIdentifierContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2760;
                this.match(ImpalaSqlParser.BACKQUOTED_IDENTIFIER);
                }
                break;
            case ImpalaSqlParser.DIGIT_IDENTIFIER:
                localContext = new DigitIdentifierContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2761;
                this.match(ImpalaSqlParser.DIGIT_IDENTIFIER);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public number_(): NumberContext {
        let localContext = new NumberContext(this.context, this.state);
        this.enterRule(localContext, 372, ImpalaSqlParser.RULE_number);
        let _la: number;
        try {
            this.state = 2776;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 352, this.context) ) {
            case 1:
                localContext = new DecimalLiteralContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2765;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 256) {
                    {
                    this.state = 2764;
                    this.match(ImpalaSqlParser.MINUS);
                    }
                }

                this.state = 2767;
                this.match(ImpalaSqlParser.DECIMAL_VALUE);
                }
                break;
            case 2:
                localContext = new DoubleLiteralContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2769;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 256) {
                    {
                    this.state = 2768;
                    this.match(ImpalaSqlParser.MINUS);
                    }
                }

                this.state = 2771;
                this.match(ImpalaSqlParser.DOUBLE_VALUE);
                }
                break;
            case 3:
                localContext = new IntegerLiteralContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2773;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 256) {
                    {
                    this.state = 2772;
                    this.match(ImpalaSqlParser.MINUS);
                    }
                }

                this.state = 2775;
                this.match(ImpalaSqlParser.INTEGER_VALUE);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext {
        let localContext = new ReservedKeywordsUsedAsFuncNameContext(this.context, this.state);
        this.enterRule(localContext, 374, ImpalaSqlParser.RULE_reservedKeywordsUsedAsFuncName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2778;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & 1085443) !== 0) || _la === 68 || _la === 91 || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & 1281) !== 0) || ((((_la - 158)) & ~0x1F) === 0 && ((1 << (_la - 158)) & 67125377) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 2097409) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nonReserved(): NonReservedContext {
        let localContext = new NonReservedContext(this.context, this.state);
        this.enterRule(localContext, 376, ImpalaSqlParser.RULE_nonReserved);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2780;
            _la = this.tokenStream.LA(1);
            if(!(_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 96:
            return this.columnNamePath_sempred(localContext as ColumnNamePathContext, predIndex);
        case 133:
            return this.queryTerm_sempred(localContext as QueryTermContext, predIndex);
        case 145:
            return this.relation_sempred(localContext as RelationContext, predIndex);
        case 158:
            return this.booleanExpression_sempred(localContext as BooleanExpressionContext, predIndex);
        case 160:
            return this.valueExpression_sempred(localContext as ValueExpressionContext, predIndex);
        case 161:
            return this.primaryExpression_sempred(localContext as PrimaryExpressionContext, predIndex);
        case 169:
            return this.type_sempred(localContext as TypeContext, predIndex);
        }
        return true;
    }
    private columnNamePath_sempred(localContext: ColumnNamePathContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.shouldMatchEmpty();
        }
        return true;
    }
    private queryTerm_sempred(localContext: QueryTermContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.precpred(this.context, 2);
        case 2:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private relation_sempred(localContext: RelationContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 3:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private booleanExpression_sempred(localContext: BooleanExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 4:
            return this.precpred(this.context, 2);
        case 5:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private valueExpression_sempred(localContext: ValueExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 6:
            return this.precpred(this.context, 3);
        case 7:
            return this.precpred(this.context, 2);
        case 8:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private primaryExpression_sempred(localContext: PrimaryExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 9:
            return this.precpred(this.context, 15);
        case 10:
            return this.precpred(this.context, 13);
        }
        return true;
    }
    private type_sempred(localContext: TypeContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 11:
            return this.precpred(this.context, 5);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,289,2783,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
        7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
        2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,
        7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,
        2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,
        7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,
        2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,2,142,
        7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,7,147,
        2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,2,153,
        7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,7,157,2,158,7,158,
        2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,7,163,2,164,
        7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,7,169,
        2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,2,175,
        7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,
        2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,
        7,186,2,187,7,187,2,188,7,188,1,0,5,0,380,8,0,10,0,12,0,383,9,0,
        1,0,1,0,1,1,1,1,3,1,389,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
        1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,413,8,2,
        1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,426,8,4,1,5,1,5,
        3,5,430,8,5,1,5,1,5,3,5,434,8,5,1,5,1,5,1,5,1,5,1,5,5,5,441,8,5,
        10,5,12,5,444,9,5,1,5,1,5,3,5,448,8,5,1,5,1,5,3,5,452,8,5,1,5,1,
        5,1,5,1,5,3,5,458,8,5,3,5,460,8,5,1,5,1,5,1,5,3,5,465,8,5,1,6,1,
        6,3,6,469,8,6,1,6,1,6,3,6,473,8,6,1,6,1,6,1,6,1,6,1,6,3,6,480,8,
        6,1,6,1,6,1,6,3,6,485,8,6,1,6,1,6,1,7,1,7,3,7,491,8,7,1,7,1,7,3,
        7,495,8,7,1,7,1,7,1,7,1,7,1,7,5,7,502,8,7,10,7,12,7,505,9,7,1,7,
        1,7,1,7,1,7,3,7,511,8,7,1,7,1,7,3,7,515,8,7,1,7,1,7,1,7,3,7,520,
        8,7,3,7,522,8,7,1,7,1,7,1,7,3,7,527,8,7,1,7,3,7,530,8,7,1,7,1,7,
        1,7,1,7,1,7,3,7,537,8,7,1,7,1,7,3,7,541,8,7,1,8,1,8,1,8,3,8,546,
        8,8,1,8,1,8,3,8,550,8,8,1,8,3,8,553,8,8,1,8,1,8,3,8,557,8,8,1,8,
        1,8,1,8,1,9,1,9,1,9,3,9,565,8,9,1,9,1,9,3,9,569,8,9,1,9,1,9,3,9,
        573,8,9,1,10,1,10,1,10,1,10,1,11,1,11,3,11,581,8,11,1,11,1,11,3,
        11,585,8,11,1,11,1,11,1,11,1,11,1,11,5,11,592,8,11,10,11,12,11,595,
        9,11,3,11,597,8,11,1,11,3,11,600,8,11,1,11,1,11,1,11,1,11,3,11,606,
        8,11,1,11,1,11,1,11,1,11,1,11,3,11,613,8,11,1,11,1,11,1,11,1,11,
        1,11,1,11,1,11,1,11,1,11,3,11,624,8,11,1,11,1,11,1,11,3,11,629,8,
        11,1,11,1,11,1,11,3,11,634,8,11,1,11,1,11,1,11,3,11,639,8,11,1,12,
        1,12,1,12,3,12,644,8,12,1,12,1,12,1,12,1,12,1,12,5,12,651,8,12,10,
        12,12,12,654,9,12,3,12,656,8,12,1,12,3,12,659,8,12,1,12,1,12,3,12,
        663,8,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,
        1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
        3,13,689,8,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,
        1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
        1,15,3,15,715,8,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,3,16,724,8,
        16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,734,8,16,1,16,3,
        16,737,8,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,
        18,1,18,3,18,751,8,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,
        19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,3,20,769,8,20,3,20,771,8,20,
        1,20,1,20,1,20,1,20,1,20,5,20,778,8,20,10,20,12,20,781,9,20,1,20,
        1,20,1,21,1,21,1,21,1,21,1,21,1,21,3,21,791,8,21,1,21,1,21,1,22,
        1,22,1,22,1,22,1,22,3,22,800,8,22,1,22,1,22,1,22,1,22,1,22,3,22,
        807,8,22,1,22,1,22,3,22,811,8,22,1,23,1,23,1,23,1,23,1,23,3,23,818,
        8,23,1,23,1,23,1,23,1,23,3,23,824,8,23,1,23,3,23,827,8,23,1,23,1,
        23,1,23,3,23,832,8,23,1,24,1,24,1,24,1,24,1,24,3,24,839,8,24,1,24,
        1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,853,
        8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,3,26,
        866,8,26,1,26,1,26,1,26,3,26,871,8,26,1,26,1,26,1,26,3,26,876,8,
        26,1,27,1,27,1,27,1,27,3,27,882,8,27,1,27,1,27,1,27,1,28,1,28,1,
        28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,
        30,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,
        31,1,32,1,32,3,32,918,8,32,1,32,3,32,921,8,32,1,32,1,32,1,33,1,33,
        3,33,927,8,33,1,33,3,33,930,8,33,1,33,1,33,1,34,1,34,3,34,936,8,
        34,1,35,1,35,1,35,1,35,3,35,942,8,35,1,35,1,35,1,35,1,35,1,35,1,
        35,1,35,1,35,1,35,1,35,3,35,954,8,35,3,35,956,8,35,1,36,1,36,1,36,
        1,36,1,36,1,36,1,36,1,36,1,36,3,36,967,8,36,1,37,1,37,1,37,1,37,
        1,37,1,37,3,37,975,8,37,1,38,1,38,1,38,3,38,980,8,38,1,38,1,38,3,
        38,984,8,38,1,39,1,39,1,39,3,39,989,8,39,1,39,1,39,1,40,1,40,1,40,
        3,40,996,8,40,1,40,1,40,3,40,1000,8,40,1,41,1,41,3,41,1004,8,41,
        1,41,1,41,1,41,1,41,3,41,1010,8,41,1,42,1,42,3,42,1014,8,42,1,42,
        1,42,3,42,1018,8,42,1,42,1,42,1,42,1,42,1,42,5,42,1025,8,42,10,42,
        12,42,1028,9,42,3,42,1030,8,42,1,42,3,42,1033,8,42,1,43,1,43,1,43,
        1,43,1,44,1,44,3,44,1041,8,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,
        1,46,1,46,1,46,1,46,1,46,3,46,1055,8,46,1,46,1,46,1,46,1,47,1,47,
        3,47,1062,8,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,49,1,49,1,49,
        1,49,3,49,1075,8,49,1,49,1,49,1,49,1,49,3,49,1081,8,49,1,49,1,49,
        1,49,3,49,1086,8,49,1,49,3,49,1089,8,49,1,50,3,50,1092,8,50,1,50,
        1,50,1,50,3,50,1097,8,50,1,50,1,50,3,50,1101,8,50,1,50,1,50,1,50,
        1,50,1,50,5,50,1108,8,50,10,50,12,50,1111,9,50,1,50,1,50,3,50,1115,
        8,50,1,50,1,50,1,51,1,51,3,51,1121,8,51,1,52,1,52,3,52,1125,8,52,
        1,52,1,52,3,52,1129,8,52,1,53,1,53,1,53,3,53,1134,8,53,1,53,3,53,
        1137,8,53,1,53,1,53,1,53,1,53,5,53,1143,8,53,10,53,12,53,1146,9,
        53,3,53,1148,8,53,1,53,3,53,1151,8,53,1,54,1,54,1,54,1,54,1,54,1,
        54,1,54,1,54,5,54,1161,8,54,10,54,12,54,1164,9,54,3,54,1166,8,54,
        1,54,3,54,1169,8,54,1,55,1,55,1,55,3,55,1174,8,55,1,55,1,55,3,55,
        1178,8,55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,
        1,56,1,56,1,56,3,56,1194,8,56,1,57,1,57,1,57,3,57,1199,8,57,1,57,
        1,57,1,57,5,57,1204,8,57,10,57,12,57,1207,9,57,3,57,1209,8,57,1,
        58,1,58,1,58,1,58,3,58,1215,8,58,1,58,3,58,1218,8,58,1,58,1,58,1,
        58,5,58,1223,8,58,10,58,12,58,1226,9,58,3,58,1228,8,58,1,59,1,59,
        3,59,1232,8,59,1,59,1,59,1,59,3,59,1237,8,59,1,59,3,59,1240,8,59,
        1,59,1,59,1,59,5,59,1245,8,59,10,59,12,59,1248,9,59,3,59,1250,8,
        59,1,60,1,60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,1,62,1,62,1,
        62,1,62,1,62,1,63,1,63,1,63,1,63,1,63,1,64,1,64,3,64,1274,8,64,1,
        64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,3,65,1288,
        8,65,1,65,1,65,3,65,1292,8,65,1,66,1,66,3,66,1296,8,66,1,66,1,66,
        1,67,1,67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,1,68,1,68,
        1,68,1,68,1,68,3,68,1316,8,68,3,68,1318,8,68,3,68,1320,8,68,1,69,
        1,69,1,69,1,69,1,69,1,69,1,69,3,69,1329,8,69,3,69,1331,8,69,1,70,
        1,70,1,70,1,70,1,70,1,70,1,70,3,70,1340,8,70,3,70,1342,8,70,1,71,
        1,71,1,71,1,71,1,71,1,71,1,71,3,71,1351,8,71,3,71,1353,8,71,1,72,
        1,72,1,72,3,72,1358,8,72,1,73,1,73,1,73,1,73,1,73,1,73,1,73,3,73,
        1367,8,73,1,74,1,74,1,74,1,74,1,74,1,74,1,74,3,74,1376,8,74,1,75,
        1,75,1,75,1,75,1,75,1,75,1,75,3,75,1385,8,75,1,76,1,76,1,76,1,77,
        1,77,1,77,1,77,1,77,1,77,3,77,1396,8,77,1,78,1,78,1,78,1,78,3,78,
        1402,8,78,1,78,1,78,1,78,3,78,1407,8,78,1,78,3,78,1410,8,78,1,78,
        1,78,1,79,1,79,1,79,1,79,1,80,1,80,1,80,1,80,1,80,3,80,1423,8,80,
        1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,3,80,1433,8,80,1,80,1,80,
        3,80,1437,8,80,1,81,1,81,1,81,3,81,1442,8,81,1,82,1,82,1,82,1,82,
        1,82,1,82,1,82,5,82,1451,8,82,10,82,12,82,1454,9,82,1,82,1,82,3,
        82,1458,8,82,1,83,1,83,1,83,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,
        86,1,86,1,86,1,86,1,87,1,87,1,88,1,88,1,89,1,89,1,90,1,90,1,91,1,
        91,1,92,1,92,1,93,1,93,1,93,5,93,1489,8,93,10,93,12,93,1492,9,93,
        1,94,1,94,1,94,5,94,1497,8,94,10,94,12,94,1500,9,94,1,95,1,95,3,
        95,1504,8,95,1,96,1,96,3,96,1508,8,96,1,97,1,97,1,98,1,98,3,98,1514,
        8,98,1,99,1,99,1,99,3,99,1519,8,99,1,99,3,99,1522,8,99,1,99,1,99,
        1,99,3,99,1527,8,99,1,99,1,99,1,99,3,99,1532,8,99,1,99,1,99,1,99,
        3,99,1537,8,99,1,99,1,99,3,99,1541,8,99,1,99,1,99,1,99,1,99,1,99,
        1,99,1,99,3,99,1550,8,99,1,99,3,99,1553,8,99,1,99,1,99,3,99,1557,
        8,99,1,100,1,100,1,100,5,100,1562,8,100,10,100,12,100,1565,9,100,
        1,101,1,101,1,101,1,101,1,102,1,102,3,102,1573,8,102,1,102,1,102,
        3,102,1577,8,102,5,102,1579,8,102,10,102,12,102,1582,9,102,1,102,
        1,102,1,103,1,103,3,103,1588,8,103,1,104,3,104,1591,8,104,1,104,
        1,104,1,105,1,105,1,105,1,105,5,105,1599,8,105,10,105,12,105,1602,
        9,105,1,106,1,106,1,106,1,106,3,106,1608,8,106,1,106,1,106,1,106,
        3,106,1613,8,106,1,106,1,106,1,106,3,106,1618,8,106,1,106,1,106,
        1,106,3,106,1623,8,106,1,106,1,106,5,106,1627,8,106,10,106,12,106,
        1630,9,106,3,106,1632,8,106,1,107,1,107,1,107,1,107,1,107,1,107,
        1,107,3,107,1641,8,107,1,107,3,107,1644,8,107,1,107,3,107,1647,8,
        107,1,108,1,108,1,108,1,108,3,108,1653,8,108,1,109,1,109,1,109,3,
        109,1658,8,109,1,110,1,110,1,111,1,111,1,111,1,111,5,111,1666,8,
        111,10,111,12,111,1669,9,111,3,111,1671,8,111,1,111,3,111,1674,8,
        111,1,111,1,111,3,111,1678,8,111,1,112,1,112,1,112,1,113,1,113,1,
        113,5,113,1686,8,113,10,113,12,113,1689,9,113,3,113,1691,8,113,1,
        114,1,114,1,114,1,114,3,114,1697,8,114,1,114,1,114,5,114,1701,8,
        114,10,114,12,114,1704,9,114,3,114,1706,8,114,1,115,3,115,1709,8,
        115,1,115,1,115,3,115,1713,8,115,1,116,1,116,1,116,1,116,1,116,1,
        116,1,116,1,116,3,116,1723,8,116,1,117,1,117,1,118,1,118,1,119,1,
        119,1,119,5,119,1732,8,119,10,119,12,119,1735,9,119,1,119,1,119,
        3,119,1739,8,119,1,119,3,119,1742,8,119,1,120,1,120,3,120,1746,8,
        120,1,120,1,120,1,120,1,121,1,121,3,121,1753,8,121,1,121,1,121,1,
        121,1,121,1,121,1,121,5,121,1761,8,121,10,121,12,121,1764,9,121,
        1,121,1,121,1,122,1,122,1,122,1,122,1,122,1,122,1,122,3,122,1775,
        8,122,1,122,1,122,1,122,1,122,3,122,1781,8,122,3,122,1783,8,122,
        1,123,1,123,1,123,1,123,1,123,1,123,1,123,3,123,1792,8,123,1,123,
        3,123,1795,8,123,1,124,1,124,1,124,1,124,1,124,3,124,1802,8,124,
        1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,3,125,1812,8,125,
        1,126,1,126,1,126,1,126,3,126,1818,8,126,1,127,1,127,1,127,1,127,
        5,127,1824,8,127,10,127,12,127,1827,9,127,1,127,1,127,1,128,1,128,
        1,128,1,128,5,128,1835,8,128,10,128,12,128,1838,9,128,1,128,1,128,
        1,129,1,129,1,129,5,129,1845,8,129,10,129,12,129,1848,9,129,1,130,
        1,130,1,130,1,130,1,130,1,130,1,130,1,130,3,130,1858,8,130,3,130,
        1860,8,130,1,130,1,130,1,130,1,130,3,130,1866,8,130,1,131,1,131,
        1,131,3,131,1871,8,131,1,132,1,132,1,132,1,132,1,132,1,132,5,132,
        1879,8,132,10,132,12,132,1882,9,132,3,132,1884,8,132,1,132,1,132,
        1,132,1,132,3,132,1890,8,132,3,132,1892,8,132,1,133,1,133,1,133,
        1,133,1,133,1,133,3,133,1900,8,133,1,133,1,133,1,133,1,133,3,133,
        1906,8,133,1,133,5,133,1909,8,133,10,133,12,133,1912,9,133,1,134,
        1,134,1,134,1,134,1,134,1,134,1,134,5,134,1921,8,134,10,134,12,134,
        1924,9,134,1,134,1,134,1,134,1,134,3,134,1930,8,134,1,135,1,135,
        3,135,1934,8,135,1,135,1,135,3,135,1938,8,135,1,136,1,136,3,136,
        1942,8,136,1,136,3,136,1945,8,136,1,136,1,136,1,136,5,136,1950,8,
        136,10,136,12,136,1953,9,136,1,136,1,136,1,136,1,136,5,136,1959,
        8,136,10,136,12,136,1962,9,136,3,136,1964,8,136,1,136,3,136,1967,
        8,136,1,136,1,136,1,136,3,136,1972,8,136,1,136,3,136,1975,8,136,
        1,137,1,137,1,137,1,138,1,138,1,138,1,139,3,139,1984,8,139,1,139,
        1,139,1,139,5,139,1989,8,139,10,139,12,139,1992,9,139,1,140,1,140,
        1,141,1,141,1,141,1,141,5,141,2000,8,141,10,141,12,141,2003,9,141,
        3,141,2005,8,141,1,141,1,141,3,141,2009,8,141,1,142,1,142,3,142,
        2013,8,142,1,142,1,142,1,142,1,143,1,143,1,144,1,144,3,144,2022,
        8,144,1,144,3,144,2025,8,144,1,144,1,144,1,144,1,144,1,144,3,144,
        2032,8,144,1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,
        1,145,1,145,1,145,3,145,2046,8,145,5,145,2048,8,145,10,145,12,145,
        2051,9,145,1,146,3,146,2054,8,146,1,146,1,146,3,146,2058,8,146,1,
        146,1,146,3,146,2062,8,146,1,146,1,146,3,146,2066,8,146,1,146,1,
        146,3,146,2070,8,146,1,146,1,146,3,146,2074,8,146,1,146,1,146,1,
        146,1,146,1,146,1,146,1,146,1,146,3,146,2084,8,146,1,147,1,147,1,
        147,1,147,1,147,1,147,1,147,5,147,2093,8,147,10,147,12,147,2096,
        9,147,1,147,1,147,3,147,2100,8,147,1,148,1,148,1,148,1,148,1,148,
        1,148,1,148,1,148,1,148,1,148,1,148,3,148,2113,8,148,3,148,2115,
        8,148,1,149,1,149,1,150,1,150,3,150,2121,8,150,1,150,1,150,3,150,
        2125,8,150,3,150,2127,8,150,1,151,1,151,1,151,1,151,5,151,2133,8,
        151,10,151,12,151,2136,9,151,1,151,1,151,1,152,1,152,3,152,2142,
        8,152,1,152,1,152,1,152,3,152,2147,8,152,1,153,1,153,1,153,1,153,
        1,154,1,154,1,154,1,154,1,154,5,154,2158,8,154,10,154,12,154,2161,
        9,154,1,154,1,154,1,154,3,154,2166,8,154,1,155,1,155,1,155,1,155,
        1,156,1,156,3,156,2174,8,156,1,157,1,157,1,158,1,158,1,158,3,158,
        2181,8,158,1,158,1,158,3,158,2185,8,158,1,158,1,158,1,158,1,158,
        1,158,1,158,5,158,2193,8,158,10,158,12,158,2196,9,158,1,159,1,159,
        1,159,1,159,1,159,1,159,1,159,1,159,3,159,2206,8,159,1,159,1,159,
        1,159,1,159,1,159,1,159,3,159,2214,8,159,1,159,1,159,1,159,1,159,
        1,159,5,159,2221,8,159,10,159,12,159,2224,9,159,1,159,1,159,1,159,
        3,159,2229,8,159,1,159,1,159,1,159,3,159,2234,8,159,1,159,1,159,
        1,159,1,159,3,159,2240,8,159,1,159,1,159,1,159,1,159,3,159,2246,
        8,159,1,159,1,159,1,159,3,159,2251,8,159,1,159,1,159,1,159,3,159,
        2256,8,159,1,160,1,160,1,160,1,160,3,160,2262,8,160,1,160,1,160,
        1,160,1,160,1,160,1,160,1,160,1,160,1,160,5,160,2273,8,160,10,160,
        12,160,2276,9,160,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,
        1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,
        1,161,1,161,1,161,1,161,1,161,3,161,2302,8,161,1,161,1,161,1,161,
        1,161,3,161,2308,8,161,5,161,2310,8,161,10,161,12,161,2313,9,161,
        1,161,1,161,1,161,1,161,1,161,1,161,1,161,5,161,2322,8,161,10,161,
        12,161,2325,9,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,3,161,
        2334,8,161,1,161,3,161,2337,8,161,1,161,1,161,1,161,3,161,2342,8,
        161,1,161,1,161,1,161,5,161,2347,8,161,10,161,12,161,2350,9,161,
        3,161,2352,8,161,1,161,1,161,1,161,1,161,1,161,5,161,2359,8,161,
        10,161,12,161,2362,9,161,3,161,2364,8,161,1,161,1,161,3,161,2368,
        8,161,1,161,3,161,2371,8,161,1,161,1,161,1,161,1,161,1,161,1,161,
        1,161,1,161,5,161,2381,8,161,10,161,12,161,2384,9,161,3,161,2386,
        8,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,
        1,161,1,161,1,161,1,161,1,161,4,161,2403,8,161,11,161,12,161,2404,
        1,161,1,161,3,161,2409,8,161,1,161,1,161,1,161,1,161,4,161,2415,
        8,161,11,161,12,161,2416,1,161,1,161,3,161,2421,8,161,1,161,1,161,
        1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,
        1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,5,161,2444,8,161,
        10,161,12,161,2447,9,161,3,161,2449,8,161,1,161,1,161,1,161,1,161,
        1,161,1,161,1,161,3,161,2458,8,161,1,161,1,161,1,161,1,161,3,161,
        2464,8,161,1,161,1,161,1,161,1,161,3,161,2470,8,161,1,161,1,161,
        1,161,1,161,3,161,2476,8,161,1,161,1,161,1,161,1,161,1,161,1,161,
        1,161,1,161,1,161,3,161,2487,8,161,1,161,1,161,1,161,1,161,1,161,
        1,161,1,161,3,161,2496,8,161,1,161,1,161,1,161,1,161,1,161,1,161,
        1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,
        1,161,5,161,2516,8,161,10,161,12,161,2519,9,161,3,161,2521,8,161,
        1,161,3,161,2524,8,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,
        1,161,5,161,2534,8,161,10,161,12,161,2537,9,161,1,162,1,162,1,162,
        1,162,3,162,2543,8,162,3,162,2545,8,162,1,163,1,163,1,164,1,164,
        1,165,1,165,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,
        1,166,1,166,1,166,1,166,1,166,3,166,2567,8,166,1,167,1,167,1,168,
        1,168,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,
        1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,
        5,169,2594,8,169,10,169,12,169,2597,9,169,1,169,1,169,1,169,1,169,
        3,169,2603,8,169,1,169,1,169,1,169,1,169,5,169,2609,8,169,10,169,
        12,169,2612,9,169,1,169,1,169,3,169,2616,8,169,3,169,2618,8,169,
        1,169,1,169,5,169,2622,8,169,10,169,12,169,2625,9,169,1,170,1,170,
        1,171,1,171,3,171,2631,8,171,1,172,1,172,1,172,1,172,3,172,2637,
        8,172,1,173,1,173,1,173,1,173,1,173,1,174,1,174,1,174,1,174,1,174,
        1,175,1,175,1,175,5,175,2652,8,175,10,175,12,175,2655,9,175,1,176,
        1,176,1,176,1,176,1,176,3,176,2662,8,176,1,176,1,176,1,176,1,176,
        1,176,5,176,2669,8,176,10,176,12,176,2672,9,176,3,176,2674,8,176,
        1,176,3,176,2677,8,176,1,176,1,176,1,177,1,177,1,177,1,177,1,177,
        1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,177,
        3,177,2697,8,177,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,
        1,178,3,178,2708,8,178,1,179,1,179,1,179,1,179,1,179,3,179,2715,
        8,179,1,180,1,180,1,180,5,180,2720,8,180,10,180,12,180,2723,9,180,
        1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,
        3,181,2736,8,181,3,181,2738,8,181,1,182,1,182,1,183,1,183,1,183,
        5,183,2745,8,183,10,183,12,183,2748,9,183,1,184,1,184,1,184,1,184,
        1,184,1,184,3,184,2756,8,184,1,185,1,185,1,185,1,185,1,185,3,185,
        2763,8,185,1,186,3,186,2766,8,186,1,186,1,186,3,186,2770,8,186,1,
        186,1,186,3,186,2774,8,186,1,186,3,186,2777,8,186,1,187,1,187,1,
        188,1,188,1,188,10,779,1452,1628,1667,1687,1702,1733,1762,1836,2311,
        6,266,290,316,320,322,338,189,0,2,4,6,8,10,12,14,16,18,20,22,24,
        26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,
        70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,
        110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,
        142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,
        174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,
        206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,
        238,240,242,244,246,248,250,252,254,256,258,260,262,264,266,268,
        270,272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,
        302,304,306,308,310,312,314,316,318,320,322,324,326,328,330,332,
        334,336,338,340,342,344,346,348,350,352,354,356,358,360,362,364,
        366,368,370,372,374,376,0,33,2,0,46,46,170,170,2,0,166,166,204,204,
        2,0,176,176,202,202,2,0,69,69,80,80,2,0,27,27,159,159,2,0,103,103,
        144,144,2,0,47,47,171,171,2,0,3,3,12,12,3,0,87,87,166,166,204,204,
        2,0,178,178,209,209,1,0,245,248,2,0,147,147,219,223,2,0,65,65,95,
        95,2,0,64,64,200,200,2,0,10,10,55,55,2,0,75,75,112,112,2,0,2,2,57,
        57,2,0,14,14,185,185,3,0,106,106,115,115,164,164,2,0,105,105,163,
        163,4,0,70,70,133,133,194,194,208,208,1,0,255,256,1,0,257,259,1,
        0,249,254,3,0,2,2,6,6,181,181,2,0,70,70,194,194,5,0,48,49,91,92,
        122,125,172,173,217,218,1,0,127,130,2,0,8,8,227,244,2,0,77,77,149,
        149,4,0,46,46,178,178,188,188,209,209,16,0,28,29,40,40,43,43,48,
        48,68,68,91,91,114,114,122,122,124,124,158,158,165,165,172,172,184,
        184,196,196,204,204,217,217,23,0,14,14,43,44,48,49,65,65,68,68,91,
        91,95,95,110,110,119,119,122,125,127,130,137,137,140,140,152,153,
        172,173,180,180,184,185,195,195,204,204,213,213,217,217,220,220,
        231,231,3100,0,381,1,0,0,0,2,386,1,0,0,0,4,412,1,0,0,0,6,414,1,0,
        0,0,8,425,1,0,0,0,10,427,1,0,0,0,12,466,1,0,0,0,14,488,1,0,0,0,16,
        542,1,0,0,0,18,561,1,0,0,0,20,574,1,0,0,0,22,578,1,0,0,0,24,640,
        1,0,0,0,26,688,1,0,0,0,28,690,1,0,0,0,30,698,1,0,0,0,32,718,1,0,
        0,0,34,738,1,0,0,0,36,745,1,0,0,0,38,754,1,0,0,0,40,762,1,0,0,0,
        42,784,1,0,0,0,44,794,1,0,0,0,46,812,1,0,0,0,48,833,1,0,0,0,50,854,
        1,0,0,0,52,860,1,0,0,0,54,877,1,0,0,0,56,886,1,0,0,0,58,893,1,0,
        0,0,60,901,1,0,0,0,62,908,1,0,0,0,64,915,1,0,0,0,66,924,1,0,0,0,
        68,935,1,0,0,0,70,937,1,0,0,0,72,957,1,0,0,0,74,974,1,0,0,0,76,976,
        1,0,0,0,78,985,1,0,0,0,80,992,1,0,0,0,82,1001,1,0,0,0,84,1011,1,
        0,0,0,86,1034,1,0,0,0,88,1040,1,0,0,0,90,1042,1,0,0,0,92,1049,1,
        0,0,0,94,1061,1,0,0,0,96,1063,1,0,0,0,98,1070,1,0,0,0,100,1091,1,
        0,0,0,102,1120,1,0,0,0,104,1122,1,0,0,0,106,1130,1,0,0,0,108,1152,
        1,0,0,0,110,1170,1,0,0,0,112,1193,1,0,0,0,114,1195,1,0,0,0,116,1210,
        1,0,0,0,118,1229,1,0,0,0,120,1251,1,0,0,0,122,1256,1,0,0,0,124,1261,
        1,0,0,0,126,1266,1,0,0,0,128,1271,1,0,0,0,130,1278,1,0,0,0,132,1293,
        1,0,0,0,134,1299,1,0,0,0,136,1319,1,0,0,0,138,1321,1,0,0,0,140,1332,
        1,0,0,0,142,1343,1,0,0,0,144,1357,1,0,0,0,146,1359,1,0,0,0,148,1368,
        1,0,0,0,150,1377,1,0,0,0,152,1386,1,0,0,0,154,1389,1,0,0,0,156,1397,
        1,0,0,0,158,1413,1,0,0,0,160,1417,1,0,0,0,162,1441,1,0,0,0,164,1443,
        1,0,0,0,166,1459,1,0,0,0,168,1462,1,0,0,0,170,1466,1,0,0,0,172,1469,
        1,0,0,0,174,1473,1,0,0,0,176,1475,1,0,0,0,178,1477,1,0,0,0,180,1479,
        1,0,0,0,182,1481,1,0,0,0,184,1483,1,0,0,0,186,1485,1,0,0,0,188,1493,
        1,0,0,0,190,1503,1,0,0,0,192,1507,1,0,0,0,194,1509,1,0,0,0,196,1513,
        1,0,0,0,198,1518,1,0,0,0,200,1558,1,0,0,0,202,1566,1,0,0,0,204,1570,
        1,0,0,0,206,1585,1,0,0,0,208,1590,1,0,0,0,210,1594,1,0,0,0,212,1603,
        1,0,0,0,214,1633,1,0,0,0,216,1648,1,0,0,0,218,1654,1,0,0,0,220,1659,
        1,0,0,0,222,1661,1,0,0,0,224,1679,1,0,0,0,226,1682,1,0,0,0,228,1692,
        1,0,0,0,230,1712,1,0,0,0,232,1722,1,0,0,0,234,1724,1,0,0,0,236,1726,
        1,0,0,0,238,1741,1,0,0,0,240,1743,1,0,0,0,242,1750,1,0,0,0,244,1782,
        1,0,0,0,246,1794,1,0,0,0,248,1801,1,0,0,0,250,1811,1,0,0,0,252,1813,
        1,0,0,0,254,1819,1,0,0,0,256,1830,1,0,0,0,258,1841,1,0,0,0,260,1849,
        1,0,0,0,262,1867,1,0,0,0,264,1872,1,0,0,0,266,1893,1,0,0,0,268,1929,
        1,0,0,0,270,1931,1,0,0,0,272,1939,1,0,0,0,274,1976,1,0,0,0,276,1979,
        1,0,0,0,278,1983,1,0,0,0,280,1993,1,0,0,0,282,2008,1,0,0,0,284,2010,
        1,0,0,0,286,2017,1,0,0,0,288,2031,1,0,0,0,290,2033,1,0,0,0,292,2083,
        1,0,0,0,294,2099,1,0,0,0,296,2101,1,0,0,0,298,2116,1,0,0,0,300,2118,
        1,0,0,0,302,2128,1,0,0,0,304,2146,1,0,0,0,306,2148,1,0,0,0,308,2152,
        1,0,0,0,310,2167,1,0,0,0,312,2173,1,0,0,0,314,2175,1,0,0,0,316,2184,
        1,0,0,0,318,2255,1,0,0,0,320,2261,1,0,0,0,322,2523,1,0,0,0,324,2544,
        1,0,0,0,326,2546,1,0,0,0,328,2548,1,0,0,0,330,2550,1,0,0,0,332,2566,
        1,0,0,0,334,2568,1,0,0,0,336,2570,1,0,0,0,338,2617,1,0,0,0,340,2626,
        1,0,0,0,342,2630,1,0,0,0,344,2636,1,0,0,0,346,2638,1,0,0,0,348,2643,
        1,0,0,0,350,2648,1,0,0,0,352,2656,1,0,0,0,354,2696,1,0,0,0,356,2707,
        1,0,0,0,358,2714,1,0,0,0,360,2716,1,0,0,0,362,2737,1,0,0,0,364,2739,
        1,0,0,0,366,2741,1,0,0,0,368,2755,1,0,0,0,370,2762,1,0,0,0,372,2776,
        1,0,0,0,374,2778,1,0,0,0,376,2780,1,0,0,0,378,380,3,2,1,0,379,378,
        1,0,0,0,380,383,1,0,0,0,381,379,1,0,0,0,381,382,1,0,0,0,382,384,
        1,0,0,0,383,381,1,0,0,0,384,385,5,0,0,1,385,1,1,0,0,0,386,388,3,
        4,2,0,387,389,5,262,0,0,388,387,1,0,0,0,388,389,1,0,0,0,389,3,1,
        0,0,0,390,413,3,208,104,0,391,413,3,6,3,0,392,413,3,8,4,0,393,413,
        3,26,13,0,394,413,3,64,32,0,395,413,3,66,33,0,396,413,3,68,34,0,
        397,413,3,74,37,0,398,413,3,88,44,0,399,413,3,94,47,0,400,413,3,
        100,50,0,401,413,3,102,51,0,402,413,3,108,54,0,403,413,3,110,55,
        0,404,413,3,112,56,0,405,413,3,144,72,0,406,413,3,152,76,0,407,413,
        3,154,77,0,408,413,3,156,78,0,409,413,3,158,79,0,410,413,3,160,80,
        0,411,413,3,162,81,0,412,390,1,0,0,0,412,391,1,0,0,0,412,392,1,0,
        0,0,412,393,1,0,0,0,412,394,1,0,0,0,412,395,1,0,0,0,412,396,1,0,
        0,0,412,397,1,0,0,0,412,398,1,0,0,0,412,399,1,0,0,0,412,400,1,0,
        0,0,412,401,1,0,0,0,412,402,1,0,0,0,412,403,1,0,0,0,412,404,1,0,
        0,0,412,405,1,0,0,0,412,406,1,0,0,0,412,407,1,0,0,0,412,408,1,0,
        0,0,412,409,1,0,0,0,412,410,1,0,0,0,412,411,1,0,0,0,413,5,1,0,0,
        0,414,415,5,203,0,0,415,416,3,184,92,0,416,7,1,0,0,0,417,426,3,18,
        9,0,418,426,3,20,10,0,419,426,3,22,11,0,420,426,3,24,12,0,421,426,
        3,16,8,0,422,426,3,14,7,0,423,426,3,12,6,0,424,426,3,10,5,0,425,
        417,1,0,0,0,425,418,1,0,0,0,425,419,1,0,0,0,425,420,1,0,0,0,425,
        421,1,0,0,0,425,422,1,0,0,0,425,423,1,0,0,0,425,424,1,0,0,0,426,
        9,1,0,0,0,427,429,5,37,0,0,428,430,5,19,0,0,429,428,1,0,0,0,429,
        430,1,0,0,0,430,431,1,0,0,0,431,433,5,188,0,0,432,434,3,172,86,0,
        433,432,1,0,0,0,433,434,1,0,0,0,434,435,1,0,0,0,435,451,3,174,87,
        0,436,437,5,265,0,0,437,442,3,218,109,0,438,439,5,263,0,0,439,441,
        3,218,109,0,440,438,1,0,0,0,441,444,1,0,0,0,442,440,1,0,0,0,442,
        443,1,0,0,0,443,447,1,0,0,0,444,442,1,0,0,0,445,446,5,263,0,0,446,
        448,3,212,106,0,447,445,1,0,0,0,447,448,1,0,0,0,448,449,1,0,0,0,
        449,450,5,266,0,0,450,452,1,0,0,0,451,436,1,0,0,0,451,452,1,0,0,
        0,452,459,1,0,0,0,453,454,5,17,0,0,454,457,5,26,0,0,455,458,3,302,
        151,0,456,458,3,256,128,0,457,455,1,0,0,0,457,456,1,0,0,0,458,460,
        1,0,0,0,459,453,1,0,0,0,459,460,1,0,0,0,460,461,1,0,0,0,461,464,
        3,198,99,0,462,463,5,9,0,0,463,465,3,208,104,0,464,462,1,0,0,0,464,
        465,1,0,0,0,465,11,1,0,0,0,466,468,5,37,0,0,467,469,5,19,0,0,468,
        467,1,0,0,0,468,469,1,0,0,0,469,470,1,0,0,0,470,472,5,188,0,0,471,
        473,3,172,86,0,472,471,1,0,0,0,472,473,1,0,0,0,473,474,1,0,0,0,474,
        475,3,174,87,0,475,479,5,115,0,0,476,480,3,186,93,0,477,478,5,147,
        0,0,478,480,3,324,162,0,479,476,1,0,0,0,479,477,1,0,0,0,480,484,
        1,0,0,0,481,482,5,17,0,0,482,483,5,26,0,0,483,485,3,256,128,0,484,
        481,1,0,0,0,484,485,1,0,0,0,485,486,1,0,0,0,486,487,3,198,99,0,487,
        13,1,0,0,0,488,490,5,37,0,0,489,491,5,19,0,0,490,489,1,0,0,0,490,
        491,1,0,0,0,491,492,1,0,0,0,492,494,5,188,0,0,493,495,3,172,86,0,
        494,493,1,0,0,0,494,495,1,0,0,0,495,496,1,0,0,0,496,514,3,174,87,
        0,497,498,5,265,0,0,498,503,3,220,110,0,499,500,5,263,0,0,500,502,
        3,220,110,0,501,499,1,0,0,0,502,505,1,0,0,0,503,501,1,0,0,0,503,
        504,1,0,0,0,504,510,1,0,0,0,505,503,1,0,0,0,506,507,5,263,0,0,507,
        508,5,150,0,0,508,509,5,110,0,0,509,511,3,302,151,0,510,506,1,0,
        0,0,510,511,1,0,0,0,511,512,1,0,0,0,512,513,5,266,0,0,513,515,1,
        0,0,0,514,497,1,0,0,0,514,515,1,0,0,0,515,521,1,0,0,0,516,517,5,
        150,0,0,517,519,5,110,0,0,518,520,3,302,151,0,519,518,1,0,0,0,519,
        520,1,0,0,0,520,522,1,0,0,0,521,516,1,0,0,0,521,522,1,0,0,0,522,
        526,1,0,0,0,523,524,5,145,0,0,524,525,5,26,0,0,525,527,3,238,119,
        0,526,523,1,0,0,0,526,527,1,0,0,0,527,529,1,0,0,0,528,530,3,224,
        112,0,529,528,1,0,0,0,529,530,1,0,0,0,530,531,1,0,0,0,531,532,5,
        23,0,0,532,533,5,9,0,0,533,536,5,111,0,0,534,535,5,25,0,0,535,537,
        3,254,127,0,536,534,1,0,0,0,536,537,1,0,0,0,537,540,1,0,0,0,538,
        539,5,9,0,0,539,541,3,208,104,0,540,538,1,0,0,0,540,541,1,0,0,0,
        541,15,1,0,0,0,542,543,5,37,0,0,543,545,5,212,0,0,544,546,3,172,
        86,0,545,544,1,0,0,0,545,546,1,0,0,0,546,547,1,0,0,0,547,549,3,178,
        89,0,548,550,3,204,102,0,549,548,1,0,0,0,549,550,1,0,0,0,550,552,
        1,0,0,0,551,553,3,224,112,0,552,551,1,0,0,0,552,553,1,0,0,0,553,
        556,1,0,0,0,554,555,5,25,0,0,555,557,3,254,127,0,556,554,1,0,0,0,
        556,557,1,0,0,0,557,558,1,0,0,0,558,559,5,9,0,0,559,560,3,208,104,
        0,560,17,1,0,0,0,561,562,5,37,0,0,562,564,7,0,0,0,563,565,3,172,
        86,0,564,563,1,0,0,0,564,565,1,0,0,0,565,566,1,0,0,0,566,568,3,176,
        88,0,567,569,3,224,112,0,568,567,1,0,0,0,568,569,1,0,0,0,569,572,
        1,0,0,0,570,571,5,24,0,0,571,573,3,324,162,0,572,570,1,0,0,0,572,
        573,1,0,0,0,573,19,1,0,0,0,574,575,5,37,0,0,575,576,5,166,0,0,576,
        577,3,370,185,0,577,21,1,0,0,0,578,580,5,37,0,0,579,581,5,12,0,0,
        580,579,1,0,0,0,580,581,1,0,0,0,581,582,1,0,0,0,582,584,5,84,0,0,
        583,585,3,172,86,0,584,583,1,0,0,0,584,585,1,0,0,0,585,586,1,0,0,
        0,586,599,3,180,90,0,587,596,5,265,0,0,588,593,3,338,169,0,589,590,
        5,263,0,0,590,592,3,338,169,0,591,589,1,0,0,0,592,595,1,0,0,0,593,
        591,1,0,0,0,593,594,1,0,0,0,594,597,1,0,0,0,595,593,1,0,0,0,596,
        588,1,0,0,0,596,597,1,0,0,0,597,598,1,0,0,0,598,600,5,266,0,0,599,
        587,1,0,0,0,599,600,1,0,0,0,600,601,1,0,0,0,601,602,5,160,0,0,602,
        605,3,338,169,0,603,604,5,102,0,0,604,606,3,338,169,0,605,603,1,
        0,0,0,605,606,1,0,0,0,606,607,1,0,0,0,607,608,5,24,0,0,608,612,5,
        274,0,0,609,610,5,104,0,0,610,611,5,249,0,0,611,613,5,274,0,0,612,
        609,1,0,0,0,612,613,1,0,0,0,613,614,1,0,0,0,614,615,5,206,0,0,615,
        616,5,249,0,0,616,617,5,274,0,0,617,618,5,126,0,0,618,619,5,249,
        0,0,619,623,5,274,0,0,620,621,5,18,0,0,621,622,5,249,0,0,622,624,
        5,274,0,0,623,620,1,0,0,0,623,624,1,0,0,0,624,628,1,0,0,0,625,626,
        5,20,0,0,626,627,5,249,0,0,627,629,5,274,0,0,628,625,1,0,0,0,628,
        629,1,0,0,0,629,633,1,0,0,0,630,631,5,187,0,0,631,632,5,249,0,0,
        632,634,5,274,0,0,633,630,1,0,0,0,633,634,1,0,0,0,634,638,1,0,0,
        0,635,636,5,76,0,0,636,637,5,249,0,0,637,639,5,274,0,0,638,635,1,
        0,0,0,638,639,1,0,0,0,639,23,1,0,0,0,640,641,5,37,0,0,641,643,5,
        84,0,0,642,644,3,172,86,0,643,642,1,0,0,0,643,644,1,0,0,0,644,645,
        1,0,0,0,645,658,3,180,90,0,646,655,5,265,0,0,647,652,3,338,169,0,
        648,649,5,263,0,0,649,651,3,338,169,0,650,648,1,0,0,0,651,654,1,
        0,0,0,652,650,1,0,0,0,652,653,1,0,0,0,653,656,1,0,0,0,654,652,1,
        0,0,0,655,647,1,0,0,0,655,656,1,0,0,0,656,657,1,0,0,0,657,659,5,
        266,0,0,658,646,1,0,0,0,658,659,1,0,0,0,659,662,1,0,0,0,660,661,
        5,160,0,0,661,663,3,338,169,0,662,660,1,0,0,0,662,663,1,0,0,0,663,
        664,1,0,0,0,664,665,5,24,0,0,665,666,5,274,0,0,666,667,5,186,0,0,
        667,668,5,249,0,0,668,669,3,324,162,0,669,25,1,0,0,0,670,689,3,28,
        14,0,671,689,3,62,31,0,672,689,3,60,30,0,673,689,3,58,29,0,674,689,
        3,54,27,0,675,689,3,56,28,0,676,689,3,52,26,0,677,689,3,48,24,0,
        678,689,3,50,25,0,679,689,3,46,23,0,680,689,3,44,22,0,681,689,3,
        42,21,0,682,689,3,40,20,0,683,689,3,34,17,0,684,689,3,30,15,0,685,
        689,3,32,16,0,686,689,3,36,18,0,687,689,3,38,19,0,688,670,1,0,0,
        0,688,671,1,0,0,0,688,672,1,0,0,0,688,673,1,0,0,0,688,674,1,0,0,
        0,688,675,1,0,0,0,688,676,1,0,0,0,688,677,1,0,0,0,688,678,1,0,0,
        0,688,679,1,0,0,0,688,680,1,0,0,0,688,681,1,0,0,0,688,682,1,0,0,
        0,688,683,1,0,0,0,688,684,1,0,0,0,688,685,1,0,0,0,688,686,1,0,0,
        0,688,687,1,0,0,0,689,27,1,0,0,0,690,691,5,4,0,0,691,692,5,46,0,
        0,692,693,3,184,92,0,693,694,5,176,0,0,694,695,5,142,0,0,695,696,
        7,1,0,0,696,697,3,370,185,0,697,29,1,0,0,0,698,699,5,4,0,0,699,700,
        5,188,0,0,700,701,3,186,93,0,701,702,5,176,0,0,702,703,5,32,0,0,
        703,704,5,182,0,0,704,705,3,192,96,0,705,706,5,265,0,0,706,707,3,
        234,117,0,707,708,5,249,0,0,708,714,3,324,162,0,709,710,5,263,0,
        0,710,711,3,234,117,0,711,712,5,249,0,0,712,713,3,324,162,0,713,
        715,1,0,0,0,714,709,1,0,0,0,714,715,1,0,0,0,715,716,1,0,0,0,716,
        717,5,266,0,0,717,31,1,0,0,0,718,719,5,4,0,0,719,720,5,188,0,0,720,
        723,3,186,93,0,721,722,5,145,0,0,722,724,3,314,157,0,723,721,1,0,
        0,0,723,724,1,0,0,0,724,725,1,0,0,0,725,736,5,176,0,0,726,727,5,
        30,0,0,727,728,5,94,0,0,728,733,3,324,162,0,729,730,5,216,0,0,730,
        731,5,151,0,0,731,732,5,249,0,0,732,734,3,372,186,0,733,729,1,0,
        0,0,733,734,1,0,0,0,734,737,1,0,0,0,735,737,5,197,0,0,736,726,1,
        0,0,0,736,735,1,0,0,0,737,33,1,0,0,0,738,739,5,4,0,0,739,740,5,188,
        0,0,740,741,3,186,93,0,741,742,5,31,0,0,742,743,3,192,96,0,743,744,
        3,226,113,0,744,35,1,0,0,0,745,746,5,4,0,0,746,747,5,188,0,0,747,
        748,3,186,93,0,748,750,5,58,0,0,749,751,5,32,0,0,750,749,1,0,0,0,
        750,751,1,0,0,0,751,752,1,0,0,0,752,753,3,192,96,0,753,37,1,0,0,
        0,754,755,5,4,0,0,755,756,5,188,0,0,756,757,3,186,93,0,757,758,5,
        176,0,0,758,759,5,142,0,0,759,760,7,1,0,0,760,761,3,370,185,0,761,
        39,1,0,0,0,762,763,5,4,0,0,763,764,5,188,0,0,764,770,3,186,93,0,
        765,771,5,158,0,0,766,768,5,1,0,0,767,769,3,172,86,0,768,767,1,0,
        0,0,768,769,1,0,0,0,769,771,1,0,0,0,770,765,1,0,0,0,770,766,1,0,
        0,0,771,772,1,0,0,0,772,773,5,33,0,0,773,774,5,265,0,0,774,779,3,
        226,113,0,775,776,5,263,0,0,776,778,3,226,113,0,777,775,1,0,0,0,
        778,781,1,0,0,0,779,780,1,0,0,0,779,777,1,0,0,0,780,782,1,0,0,0,
        781,779,1,0,0,0,782,783,5,266,0,0,783,41,1,0,0,0,784,785,5,4,0,0,
        785,786,5,188,0,0,786,787,3,186,93,0,787,788,5,1,0,0,788,790,5,32,
        0,0,789,791,3,172,86,0,790,789,1,0,0,0,790,791,1,0,0,0,791,792,1,
        0,0,0,792,793,3,228,114,0,793,43,1,0,0,0,794,795,5,4,0,0,795,796,
        5,188,0,0,796,797,3,186,93,0,797,799,5,4,0,0,798,800,5,32,0,0,799,
        798,1,0,0,0,799,800,1,0,0,0,800,801,1,0,0,0,801,810,3,192,96,0,802,
        806,5,176,0,0,803,807,3,232,116,0,804,805,5,34,0,0,805,807,3,324,
        162,0,806,803,1,0,0,0,806,804,1,0,0,0,807,811,1,0,0,0,808,809,5,
        58,0,0,809,811,5,51,0,0,810,802,1,0,0,0,810,808,1,0,0,0,811,45,1,
        0,0,0,812,813,5,4,0,0,813,814,5,188,0,0,814,815,3,186,93,0,815,817,
        5,1,0,0,816,818,3,172,86,0,817,816,1,0,0,0,817,818,1,0,0,0,818,831,
        1,0,0,0,819,820,5,145,0,0,820,823,3,314,157,0,821,822,5,24,0,0,822,
        824,3,324,162,0,823,821,1,0,0,0,823,824,1,0,0,0,824,826,1,0,0,0,
        825,827,3,246,123,0,826,825,1,0,0,0,826,827,1,0,0,0,827,832,1,0,
        0,0,828,829,5,154,0,0,829,830,5,145,0,0,830,832,3,244,122,0,831,
        819,1,0,0,0,831,828,1,0,0,0,832,47,1,0,0,0,833,834,5,4,0,0,834,835,
        5,188,0,0,835,838,3,186,93,0,836,837,5,145,0,0,837,839,3,314,157,
        0,838,836,1,0,0,0,838,839,1,0,0,0,839,840,1,0,0,0,840,852,5,176,
        0,0,841,842,5,72,0,0,842,853,3,236,118,0,843,844,5,168,0,0,844,845,
        5,79,0,0,845,853,3,260,130,0,846,847,5,24,0,0,847,853,3,324,162,
        0,848,849,5,25,0,0,849,853,3,254,127,0,850,851,5,175,0,0,851,853,
        3,254,127,0,852,841,1,0,0,0,852,843,1,0,0,0,852,846,1,0,0,0,852,
        848,1,0,0,0,852,850,1,0,0,0,853,49,1,0,0,0,854,855,5,4,0,0,855,856,
        5,188,0,0,856,857,3,186,93,0,857,858,5,155,0,0,858,859,5,146,0,0,
        859,51,1,0,0,0,860,861,5,4,0,0,861,862,5,188,0,0,862,863,3,186,93,
        0,863,865,5,58,0,0,864,866,3,170,85,0,865,864,1,0,0,0,865,866,1,
        0,0,0,866,875,1,0,0,0,867,868,5,145,0,0,868,870,3,314,157,0,869,
        871,5,22,0,0,870,869,1,0,0,0,870,871,1,0,0,0,871,876,1,0,0,0,872,
        873,5,154,0,0,873,874,5,145,0,0,874,876,3,244,122,0,875,867,1,0,
        0,0,875,872,1,0,0,0,876,53,1,0,0,0,877,878,5,4,0,0,878,879,5,212,
        0,0,879,881,3,188,94,0,880,882,3,204,102,0,881,880,1,0,0,0,881,882,
        1,0,0,0,882,883,1,0,0,0,883,884,5,9,0,0,884,885,3,208,104,0,885,
        55,1,0,0,0,886,887,5,4,0,0,887,888,5,212,0,0,888,889,3,188,94,0,
        889,890,5,156,0,0,890,891,5,193,0,0,891,892,3,188,94,0,892,57,1,
        0,0,0,893,894,5,4,0,0,894,895,5,212,0,0,895,896,3,188,94,0,896,897,
        5,176,0,0,897,898,5,142,0,0,898,899,7,1,0,0,899,900,3,366,183,0,
        900,59,1,0,0,0,901,902,5,4,0,0,902,903,5,188,0,0,903,904,3,186,93,
        0,904,905,5,156,0,0,905,906,5,193,0,0,906,907,3,186,93,0,907,61,
        1,0,0,0,908,909,5,4,0,0,909,910,5,212,0,0,910,911,3,188,94,0,911,
        912,7,2,0,0,912,913,5,25,0,0,913,914,3,254,127,0,914,63,1,0,0,0,
        915,917,5,196,0,0,916,918,5,188,0,0,917,916,1,0,0,0,917,918,1,0,
        0,0,918,920,1,0,0,0,919,921,3,170,85,0,920,919,1,0,0,0,920,921,1,
        0,0,0,921,922,1,0,0,0,922,923,3,186,93,0,923,65,1,0,0,0,924,926,
        5,56,0,0,925,927,5,46,0,0,926,925,1,0,0,0,926,927,1,0,0,0,927,929,
        1,0,0,0,928,930,7,3,0,0,929,928,1,0,0,0,929,930,1,0,0,0,930,931,
        1,0,0,0,931,932,3,366,183,0,932,67,1,0,0,0,933,936,3,70,35,0,934,
        936,3,72,36,0,935,933,1,0,0,0,935,934,1,0,0,0,936,69,1,0,0,0,937,
        938,5,36,0,0,938,939,5,182,0,0,939,941,3,186,93,0,940,942,3,302,
        151,0,941,940,1,0,0,0,941,942,1,0,0,0,942,955,1,0,0,0,943,944,5,
        190,0,0,944,945,5,185,0,0,945,946,5,265,0,0,946,947,3,372,186,0,
        947,953,5,266,0,0,948,949,5,157,0,0,949,950,5,265,0,0,950,951,3,
        372,186,0,951,952,5,266,0,0,952,954,1,0,0,0,953,948,1,0,0,0,953,
        954,1,0,0,0,954,956,1,0,0,0,955,943,1,0,0,0,955,956,1,0,0,0,956,
        71,1,0,0,0,957,958,5,36,0,0,958,959,5,96,0,0,959,960,5,182,0,0,960,
        966,3,186,93,0,961,962,5,145,0,0,962,963,5,265,0,0,963,964,3,314,
        157,0,964,965,5,266,0,0,965,967,1,0,0,0,966,961,1,0,0,0,966,967,
        1,0,0,0,967,73,1,0,0,0,968,975,3,86,43,0,969,975,3,84,42,0,970,975,
        3,82,41,0,971,975,3,78,39,0,972,975,3,80,40,0,973,975,3,76,38,0,
        974,968,1,0,0,0,974,969,1,0,0,0,974,970,1,0,0,0,974,971,1,0,0,0,
        974,972,1,0,0,0,974,973,1,0,0,0,975,75,1,0,0,0,976,977,5,58,0,0,
        977,979,7,0,0,0,978,980,3,170,85,0,979,978,1,0,0,0,979,980,1,0,0,
        0,980,981,1,0,0,0,981,983,3,184,92,0,982,984,7,4,0,0,983,982,1,0,
        0,0,983,984,1,0,0,0,984,77,1,0,0,0,985,986,5,58,0,0,986,988,5,212,
        0,0,987,989,3,170,85,0,988,987,1,0,0,0,988,989,1,0,0,0,989,990,1,
        0,0,0,990,991,3,188,94,0,991,79,1,0,0,0,992,993,5,58,0,0,993,995,
        5,188,0,0,994,996,3,170,85,0,995,994,1,0,0,0,995,996,1,0,0,0,996,
        997,1,0,0,0,997,999,3,186,93,0,998,1000,5,22,0,0,999,998,1,0,0,0,
        999,1000,1,0,0,0,1000,81,1,0,0,0,1001,1003,5,58,0,0,1002,1004,5,
        96,0,0,1003,1002,1,0,0,0,1003,1004,1,0,0,0,1004,1005,1,0,0,0,1005,
        1006,5,182,0,0,1006,1009,3,186,93,0,1007,1008,5,145,0,0,1008,1010,
        3,314,157,0,1009,1007,1,0,0,0,1009,1010,1,0,0,0,1010,83,1,0,0,0,
        1011,1013,5,58,0,0,1012,1014,5,12,0,0,1013,1012,1,0,0,0,1013,1014,
        1,0,0,0,1014,1015,1,0,0,0,1015,1017,5,84,0,0,1016,1018,3,170,85,
        0,1017,1016,1,0,0,0,1017,1018,1,0,0,0,1018,1019,1,0,0,0,1019,1032,
        3,190,95,0,1020,1029,5,265,0,0,1021,1026,3,338,169,0,1022,1023,5,
        263,0,0,1023,1025,3,338,169,0,1024,1022,1,0,0,0,1025,1028,1,0,0,
        0,1026,1024,1,0,0,0,1026,1027,1,0,0,0,1027,1030,1,0,0,0,1028,1026,
        1,0,0,0,1029,1021,1,0,0,0,1029,1030,1,0,0,0,1030,1031,1,0,0,0,1031,
        1033,5,266,0,0,1032,1020,1,0,0,0,1032,1033,1,0,0,0,1033,85,1,0,0,
        0,1034,1035,5,58,0,0,1035,1036,5,166,0,0,1036,1037,3,370,185,0,1037,
        87,1,0,0,0,1038,1041,3,90,45,0,1039,1041,3,92,46,0,1040,1038,1,0,
        0,0,1040,1039,1,0,0,0,1041,89,1,0,0,0,1042,1043,5,86,0,0,1043,1044,
        5,166,0,0,1044,1045,3,370,185,0,1045,1046,5,193,0,0,1046,1047,5,
        87,0,0,1047,1048,3,370,185,0,1048,91,1,0,0,0,1049,1050,5,86,0,0,
        1050,1051,3,362,181,0,1051,1052,5,136,0,0,1052,1054,3,364,182,0,
        1053,1055,3,366,183,0,1054,1053,1,0,0,0,1054,1055,1,0,0,0,1055,1056,
        1,0,0,0,1056,1057,5,193,0,0,1057,1058,3,368,184,0,1058,93,1,0,0,
        0,1059,1062,3,96,48,0,1060,1062,3,98,49,0,1061,1059,1,0,0,0,1061,
        1060,1,0,0,0,1062,95,1,0,0,0,1063,1064,5,161,0,0,1064,1065,5,166,
        0,0,1065,1066,3,370,185,0,1066,1067,5,82,0,0,1067,1068,5,87,0,0,
        1068,1069,3,370,185,0,1069,97,1,0,0,0,1070,1074,5,161,0,0,1071,1072,
        5,86,0,0,1072,1073,5,137,0,0,1073,1075,5,78,0,0,1074,1071,1,0,0,
        0,1074,1075,1,0,0,0,1075,1076,1,0,0,0,1076,1077,3,362,181,0,1077,
        1078,5,136,0,0,1078,1080,3,364,182,0,1079,1081,3,366,183,0,1080,
        1079,1,0,0,0,1080,1081,1,0,0,0,1081,1082,1,0,0,0,1082,1088,5,82,
        0,0,1083,1089,3,368,184,0,1084,1086,5,166,0,0,1085,1084,1,0,0,0,
        1085,1086,1,0,0,0,1086,1087,1,0,0,0,1087,1089,3,370,185,0,1088,1083,
        1,0,0,0,1088,1085,1,0,0,0,1089,99,1,0,0,0,1090,1092,3,210,105,0,
        1091,1090,1,0,0,0,1091,1092,1,0,0,0,1092,1093,1,0,0,0,1093,1094,
        5,99,0,0,1094,1096,7,5,0,0,1095,1097,5,188,0,0,1096,1095,1,0,0,0,
        1096,1097,1,0,0,0,1097,1098,1,0,0,0,1098,1100,3,186,93,0,1099,1101,
        3,302,151,0,1100,1099,1,0,0,0,1100,1101,1,0,0,0,1101,1114,1,0,0,
        0,1102,1103,5,145,0,0,1103,1104,5,265,0,0,1104,1109,3,314,157,0,
        1105,1106,5,263,0,0,1106,1108,3,314,157,0,1107,1105,1,0,0,0,1108,
        1111,1,0,0,0,1109,1107,1,0,0,0,1109,1110,1,0,0,0,1110,1112,1,0,0,
        0,1111,1109,1,0,0,0,1112,1113,5,266,0,0,1113,1115,1,0,0,0,1114,1102,
        1,0,0,0,1114,1115,1,0,0,0,1115,1116,1,0,0,0,1116,1117,3,208,104,
        0,1117,101,1,0,0,0,1118,1121,3,104,52,0,1119,1121,3,106,53,0,1120,
        1118,1,0,0,0,1120,1119,1,0,0,0,1121,103,1,0,0,0,1122,1124,5,50,0,
        0,1123,1125,5,82,0,0,1124,1123,1,0,0,0,1124,1125,1,0,0,0,1125,1126,
        1,0,0,0,1126,1128,3,186,93,0,1127,1129,3,274,137,0,1128,1127,1,0,
        0,0,1128,1129,1,0,0,0,1129,105,1,0,0,0,1130,1131,5,50,0,0,1131,1136,
        3,186,93,0,1132,1134,5,9,0,0,1133,1132,1,0,0,0,1133,1134,1,0,0,0,
        1134,1135,1,0,0,0,1135,1137,3,370,185,0,1136,1133,1,0,0,0,1136,1137,
        1,0,0,0,1137,1138,1,0,0,0,1138,1147,5,82,0,0,1139,1144,3,290,145,
        0,1140,1141,5,263,0,0,1141,1143,3,290,145,0,1142,1140,1,0,0,0,1143,
        1146,1,0,0,0,1144,1142,1,0,0,0,1144,1145,1,0,0,0,1145,1148,1,0,0,
        0,1146,1144,1,0,0,0,1147,1139,1,0,0,0,1147,1148,1,0,0,0,1148,1150,
        1,0,0,0,1149,1151,3,274,137,0,1150,1149,1,0,0,0,1150,1151,1,0,0,
        0,1151,107,1,0,0,0,1152,1153,5,54,0,0,1153,1154,3,186,93,0,1154,
        1155,5,176,0,0,1155,1165,3,200,100,0,1156,1157,5,82,0,0,1157,1162,
        3,290,145,0,1158,1159,5,263,0,0,1159,1161,3,290,145,0,1160,1158,
        1,0,0,0,1161,1164,1,0,0,0,1162,1160,1,0,0,0,1162,1163,1,0,0,0,1163,
        1166,1,0,0,0,1164,1162,1,0,0,0,1165,1156,1,0,0,0,1165,1166,1,0,0,
        0,1166,1168,1,0,0,0,1167,1169,3,274,137,0,1168,1167,1,0,0,0,1168,
        1169,1,0,0,0,1169,109,1,0,0,0,1170,1171,5,207,0,0,1171,1173,5,103,
        0,0,1172,1174,5,188,0,0,1173,1172,1,0,0,0,1173,1174,1,0,0,0,1174,
        1175,1,0,0,0,1175,1177,3,186,93,0,1176,1178,3,302,151,0,1177,1176,
        1,0,0,0,1177,1178,1,0,0,0,1178,1179,1,0,0,0,1179,1180,3,208,104,
        0,1180,111,1,0,0,0,1181,1194,3,132,66,0,1182,1194,3,134,67,0,1183,
        1194,3,136,68,0,1184,1194,3,130,65,0,1185,1194,3,128,64,0,1186,1194,
        3,126,63,0,1187,1194,3,124,62,0,1188,1194,3,122,61,0,1189,1194,3,
        120,60,0,1190,1194,3,118,59,0,1191,1194,3,116,58,0,1192,1194,3,114,
        57,0,1193,1181,1,0,0,0,1193,1182,1,0,0,0,1193,1183,1,0,0,0,1193,
        1184,1,0,0,0,1193,1185,1,0,0,0,1193,1186,1,0,0,0,1193,1187,1,0,0,
        0,1193,1188,1,0,0,0,1193,1189,1,0,0,0,1193,1190,1,0,0,0,1193,1191,
        1,0,0,0,1193,1192,1,0,0,0,1194,113,1,0,0,0,1195,1196,5,179,0,0,1196,
        1208,7,6,0,0,1197,1199,5,115,0,0,1198,1197,1,0,0,0,1198,1199,1,0,
        0,0,1199,1200,1,0,0,0,1200,1205,3,324,162,0,1201,1202,5,271,0,0,
        1202,1204,3,324,162,0,1203,1201,1,0,0,0,1204,1207,1,0,0,0,1205,1203,
        1,0,0,0,1205,1206,1,0,0,0,1206,1209,1,0,0,0,1207,1205,1,0,0,0,1208,
        1198,1,0,0,0,1208,1209,1,0,0,0,1209,115,1,0,0,0,1210,1211,5,179,
        0,0,1211,1214,5,189,0,0,1212,1213,5,94,0,0,1213,1215,3,186,93,0,
        1214,1212,1,0,0,0,1214,1215,1,0,0,0,1215,1227,1,0,0,0,1216,1218,
        5,115,0,0,1217,1216,1,0,0,0,1217,1218,1,0,0,0,1218,1219,1,0,0,0,
        1219,1224,3,324,162,0,1220,1221,5,271,0,0,1221,1223,3,324,162,0,
        1222,1220,1,0,0,0,1223,1226,1,0,0,0,1224,1222,1,0,0,0,1224,1225,
        1,0,0,0,1225,1228,1,0,0,0,1226,1224,1,0,0,0,1227,1217,1,0,0,0,1227,
        1228,1,0,0,0,1228,117,1,0,0,0,1229,1231,5,179,0,0,1230,1232,7,7,
        0,0,1231,1230,1,0,0,0,1231,1232,1,0,0,0,1232,1233,1,0,0,0,1233,1236,
        5,85,0,0,1234,1235,5,94,0,0,1235,1237,3,184,92,0,1236,1234,1,0,0,
        0,1236,1237,1,0,0,0,1237,1249,1,0,0,0,1238,1240,5,115,0,0,1239,1238,
        1,0,0,0,1239,1240,1,0,0,0,1240,1241,1,0,0,0,1241,1246,3,324,162,
        0,1242,1243,5,271,0,0,1243,1245,3,324,162,0,1244,1242,1,0,0,0,1245,
        1248,1,0,0,0,1246,1244,1,0,0,0,1246,1247,1,0,0,0,1247,1250,1,0,0,
        0,1248,1246,1,0,0,0,1249,1239,1,0,0,0,1249,1250,1,0,0,0,1250,119,
        1,0,0,0,1251,1252,5,179,0,0,1252,1253,5,37,0,0,1253,1254,5,188,0,
        0,1254,1255,3,186,93,0,1255,121,1,0,0,0,1256,1257,5,179,0,0,1257,
        1258,5,37,0,0,1258,1259,5,212,0,0,1259,1260,3,188,94,0,1260,123,
        1,0,0,0,1261,1262,5,179,0,0,1262,1263,5,188,0,0,1263,1264,5,182,
        0,0,1264,1265,3,186,93,0,1265,125,1,0,0,0,1266,1267,5,179,0,0,1267,
        1268,5,32,0,0,1268,1269,5,182,0,0,1269,1270,3,186,93,0,1270,127,
        1,0,0,0,1271,1273,5,179,0,0,1272,1274,5,154,0,0,1273,1272,1,0,0,
        0,1273,1274,1,0,0,0,1274,1275,1,0,0,0,1275,1276,5,146,0,0,1276,1277,
        3,186,93,0,1277,129,1,0,0,0,1278,1279,5,179,0,0,1279,1280,5,73,0,
        0,1280,1281,5,94,0,0,1281,1291,3,186,93,0,1282,1283,5,145,0,0,1283,
        1284,5,265,0,0,1284,1287,3,314,157,0,1285,1286,5,263,0,0,1286,1288,
        3,314,157,0,1287,1285,1,0,0,0,1287,1288,1,0,0,0,1288,1289,1,0,0,
        0,1289,1290,5,266,0,0,1290,1292,1,0,0,0,1291,1282,1,0,0,0,1291,1292,
        1,0,0,0,1292,131,1,0,0,0,1293,1295,5,179,0,0,1294,1296,5,39,0,0,
        1295,1294,1,0,0,0,1295,1296,1,0,0,0,1296,1297,1,0,0,0,1297,1298,
        5,167,0,0,1298,133,1,0,0,0,1299,1300,5,179,0,0,1300,1301,5,166,0,
        0,1301,1302,5,86,0,0,1302,1303,5,87,0,0,1303,1304,3,370,185,0,1304,
        135,1,0,0,0,1305,1320,3,138,69,0,1306,1320,3,140,70,0,1307,1320,
        3,142,71,0,1308,1309,5,179,0,0,1309,1310,5,86,0,0,1310,1311,7,8,
        0,0,1311,1317,3,370,185,0,1312,1313,5,136,0,0,1313,1315,7,9,0,0,
        1314,1316,3,366,183,0,1315,1314,1,0,0,0,1315,1316,1,0,0,0,1316,1318,
        1,0,0,0,1317,1312,1,0,0,0,1317,1318,1,0,0,0,1318,1320,1,0,0,0,1319,
        1305,1,0,0,0,1319,1306,1,0,0,0,1319,1307,1,0,0,0,1319,1308,1,0,0,
        0,1320,137,1,0,0,0,1321,1322,5,179,0,0,1322,1323,5,86,0,0,1323,1324,
        7,8,0,0,1324,1330,3,370,185,0,1325,1326,5,136,0,0,1326,1328,5,46,
        0,0,1327,1329,3,184,92,0,1328,1327,1,0,0,0,1328,1329,1,0,0,0,1329,
        1331,1,0,0,0,1330,1325,1,0,0,0,1330,1331,1,0,0,0,1331,139,1,0,0,
        0,1332,1333,5,179,0,0,1333,1334,5,86,0,0,1334,1335,7,8,0,0,1335,
        1341,3,370,185,0,1336,1337,5,136,0,0,1337,1339,5,188,0,0,1338,1340,
        3,186,93,0,1339,1338,1,0,0,0,1339,1340,1,0,0,0,1340,1342,1,0,0,0,
        1341,1336,1,0,0,0,1341,1342,1,0,0,0,1342,141,1,0,0,0,1343,1344,5,
        179,0,0,1344,1345,5,86,0,0,1345,1346,7,8,0,0,1346,1352,3,370,185,
        0,1347,1348,5,136,0,0,1348,1350,5,32,0,0,1349,1351,3,192,96,0,1350,
        1349,1,0,0,0,1350,1351,1,0,0,0,1351,1353,1,0,0,0,1352,1347,1,0,0,
        0,1352,1353,1,0,0,0,1353,143,1,0,0,0,1354,1358,3,146,73,0,1355,1358,
        3,148,74,0,1356,1358,3,150,75,0,1357,1354,1,0,0,0,1357,1355,1,0,
        0,0,1357,1356,1,0,0,0,1358,145,1,0,0,0,1359,1360,5,34,0,0,1360,1361,
        5,136,0,0,1361,1362,5,46,0,0,1362,1363,3,184,92,0,1363,1366,5,108,
        0,0,1364,1367,3,324,162,0,1365,1367,5,133,0,0,1366,1364,1,0,0,0,
        1366,1365,1,0,0,0,1367,147,1,0,0,0,1368,1369,5,34,0,0,1369,1370,
        5,136,0,0,1370,1371,5,188,0,0,1371,1372,3,186,93,0,1372,1375,5,108,
        0,0,1373,1376,3,324,162,0,1374,1376,5,133,0,0,1375,1373,1,0,0,0,
        1375,1374,1,0,0,0,1376,149,1,0,0,0,1377,1378,5,34,0,0,1378,1379,
        5,136,0,0,1379,1380,5,32,0,0,1380,1381,3,192,96,0,1381,1384,5,108,
        0,0,1382,1385,3,324,162,0,1383,1385,5,133,0,0,1384,1382,1,0,0,0,
        1384,1383,1,0,0,0,1385,151,1,0,0,0,1386,1387,5,67,0,0,1387,1388,
        3,4,2,0,1388,153,1,0,0,0,1389,1395,5,176,0,0,1390,1396,5,2,0,0,1391,
        1392,3,370,185,0,1392,1393,5,249,0,0,1393,1394,3,314,157,0,1394,
        1396,1,0,0,0,1395,1390,1,0,0,0,1395,1391,1,0,0,0,1395,1396,1,0,0,
        0,1396,155,1,0,0,0,1397,1398,5,264,0,0,1398,1399,5,180,0,0,1399,
        1409,5,265,0,0,1400,1402,3,324,162,0,1401,1400,1,0,0,0,1401,1402,
        1,0,0,0,1402,1410,1,0,0,0,1403,1406,3,324,162,0,1404,1405,5,263,
        0,0,1405,1407,3,314,157,0,1406,1404,1,0,0,0,1406,1407,1,0,0,0,1407,
        1410,1,0,0,0,1408,1410,3,314,157,0,1409,1401,1,0,0,0,1409,1403,1,
        0,0,0,1409,1408,1,0,0,0,1410,1411,1,0,0,0,1411,1412,5,266,0,0,1412,
        157,1,0,0,0,1413,1414,5,107,0,0,1414,1415,5,121,0,0,1415,1416,3,
        186,93,0,1416,159,1,0,0,0,1417,1418,5,118,0,0,1418,1419,5,45,0,0,
        1419,1420,5,98,0,0,1420,1422,5,274,0,0,1421,1423,5,144,0,0,1422,
        1421,1,0,0,0,1422,1423,1,0,0,0,1423,1424,1,0,0,0,1424,1425,5,103,
        0,0,1425,1426,5,188,0,0,1426,1436,3,186,93,0,1427,1428,5,145,0,0,
        1428,1429,5,265,0,0,1429,1432,3,314,157,0,1430,1431,5,263,0,0,1431,
        1433,3,314,157,0,1432,1430,1,0,0,0,1432,1433,1,0,0,0,1433,1434,1,
        0,0,0,1434,1435,5,266,0,0,1435,1437,1,0,0,0,1436,1427,1,0,0,0,1436,
        1437,1,0,0,0,1437,161,1,0,0,0,1438,1442,3,164,82,0,1439,1442,3,166,
        83,0,1440,1442,3,168,84,0,1441,1438,1,0,0,0,1441,1439,1,0,0,0,1441,
        1440,1,0,0,0,1442,163,1,0,0,0,1443,1444,5,162,0,0,1444,1457,3,186,
        93,0,1445,1446,5,145,0,0,1446,1447,5,265,0,0,1447,1452,3,314,157,
        0,1448,1449,5,263,0,0,1449,1451,3,314,157,0,1450,1448,1,0,0,0,1451,
        1454,1,0,0,0,1452,1453,1,0,0,0,1452,1450,1,0,0,0,1453,1455,1,0,0,
        0,1454,1452,1,0,0,0,1455,1456,5,266,0,0,1456,1458,1,0,0,0,1457,1445,
        1,0,0,0,1457,1458,1,0,0,0,1458,165,1,0,0,0,1459,1460,5,162,0,0,1460,
        1461,5,13,0,0,1461,167,1,0,0,0,1462,1463,5,162,0,0,1463,1464,5,85,
        0,0,1464,1465,3,190,95,0,1465,169,1,0,0,0,1466,1467,5,93,0,0,1467,
        1468,5,66,0,0,1468,171,1,0,0,0,1469,1470,5,93,0,0,1470,1471,5,132,
        0,0,1471,1472,5,66,0,0,1472,173,1,0,0,0,1473,1474,3,366,183,0,1474,
        175,1,0,0,0,1475,1476,3,366,183,0,1476,177,1,0,0,0,1477,1478,3,366,
        183,0,1478,179,1,0,0,0,1479,1480,3,366,183,0,1480,181,1,0,0,0,1481,
        1482,3,366,183,0,1482,183,1,0,0,0,1483,1484,3,366,183,0,1484,185,
        1,0,0,0,1485,1490,3,370,185,0,1486,1487,5,261,0,0,1487,1489,3,370,
        185,0,1488,1486,1,0,0,0,1489,1492,1,0,0,0,1490,1488,1,0,0,0,1490,
        1491,1,0,0,0,1491,187,1,0,0,0,1492,1490,1,0,0,0,1493,1498,3,370,
        185,0,1494,1495,5,261,0,0,1495,1497,3,370,185,0,1496,1494,1,0,0,
        0,1497,1500,1,0,0,0,1498,1496,1,0,0,0,1498,1499,1,0,0,0,1499,189,
        1,0,0,0,1500,1498,1,0,0,0,1501,1504,3,374,187,0,1502,1504,3,366,
        183,0,1503,1501,1,0,0,0,1503,1502,1,0,0,0,1504,191,1,0,0,0,1505,
        1508,3,366,183,0,1506,1508,4,96,0,0,1507,1505,1,0,0,0,1507,1506,
        1,0,0,0,1508,193,1,0,0,0,1509,1510,3,366,183,0,1510,195,1,0,0,0,
        1511,1514,3,186,93,0,1512,1514,3,188,94,0,1513,1511,1,0,0,0,1513,
        1512,1,0,0,0,1514,197,1,0,0,0,1515,1516,5,21,0,0,1516,1517,5,26,
        0,0,1517,1519,3,302,151,0,1518,1515,1,0,0,0,1518,1519,1,0,0,0,1519,
        1521,1,0,0,0,1520,1522,3,224,112,0,1521,1520,1,0,0,0,1521,1522,1,
        0,0,0,1522,1526,1,0,0,0,1523,1524,5,168,0,0,1524,1525,5,79,0,0,1525,
        1527,3,260,130,0,1526,1523,1,0,0,0,1526,1527,1,0,0,0,1527,1531,1,
        0,0,0,1528,1529,5,216,0,0,1529,1530,5,175,0,0,1530,1532,3,254,127,
        0,1531,1528,1,0,0,0,1531,1532,1,0,0,0,1532,1536,1,0,0,0,1533,1534,
        5,23,0,0,1534,1535,5,9,0,0,1535,1537,3,236,118,0,1536,1533,1,0,0,
        0,1536,1537,1,0,0,0,1537,1540,1,0,0,0,1538,1539,5,24,0,0,1539,1541,
        3,324,162,0,1540,1538,1,0,0,0,1540,1541,1,0,0,0,1541,1552,1,0,0,
        0,1542,1543,5,30,0,0,1543,1544,5,94,0,0,1544,1549,3,366,183,0,1545,
        1546,5,216,0,0,1546,1547,5,151,0,0,1547,1548,5,249,0,0,1548,1550,
        5,277,0,0,1549,1545,1,0,0,0,1549,1550,1,0,0,0,1550,1553,1,0,0,0,
        1551,1553,5,197,0,0,1552,1542,1,0,0,0,1552,1551,1,0,0,0,1552,1553,
        1,0,0,0,1553,1556,1,0,0,0,1554,1555,5,25,0,0,1555,1557,3,254,127,
        0,1556,1554,1,0,0,0,1556,1557,1,0,0,0,1557,199,1,0,0,0,1558,1563,
        3,202,101,0,1559,1560,5,263,0,0,1560,1562,3,202,101,0,1561,1559,
        1,0,0,0,1562,1565,1,0,0,0,1563,1561,1,0,0,0,1563,1564,1,0,0,0,1564,
        201,1,0,0,0,1565,1563,1,0,0,0,1566,1567,3,366,183,0,1567,1568,5,
        249,0,0,1568,1569,3,314,157,0,1569,203,1,0,0,0,1570,1572,5,265,0,
        0,1571,1573,3,206,103,0,1572,1571,1,0,0,0,1572,1573,1,0,0,0,1573,
        1580,1,0,0,0,1574,1576,5,263,0,0,1575,1577,3,206,103,0,1576,1575,
        1,0,0,0,1576,1577,1,0,0,0,1577,1579,1,0,0,0,1578,1574,1,0,0,0,1579,
        1582,1,0,0,0,1580,1578,1,0,0,0,1580,1581,1,0,0,0,1581,1583,1,0,0,
        0,1582,1580,1,0,0,0,1583,1584,5,266,0,0,1584,205,1,0,0,0,1585,1587,
        3,182,91,0,1586,1588,3,224,112,0,1587,1586,1,0,0,0,1587,1588,1,0,
        0,0,1588,207,1,0,0,0,1589,1591,3,210,105,0,1590,1589,1,0,0,0,1590,
        1591,1,0,0,0,1591,1592,1,0,0,0,1592,1593,3,264,132,0,1593,209,1,
        0,0,0,1594,1595,5,216,0,0,1595,1600,3,284,142,0,1596,1597,5,263,
        0,0,1597,1599,3,284,142,0,1598,1596,1,0,0,0,1599,1602,1,0,0,0,1600,
        1598,1,0,0,0,1600,1601,1,0,0,0,1601,211,1,0,0,0,1602,1600,1,0,0,
        0,1603,1604,5,150,0,0,1604,1605,5,110,0,0,1605,1607,3,302,151,0,
        1606,1608,5,53,0,0,1607,1606,1,0,0,0,1607,1608,1,0,0,0,1608,1612,
        1,0,0,0,1609,1613,5,225,0,0,1610,1611,5,263,0,0,1611,1613,5,225,
        0,0,1612,1609,1,0,0,0,1612,1610,1,0,0,0,1612,1613,1,0,0,0,1613,1617,
        1,0,0,0,1614,1618,5,226,0,0,1615,1616,5,263,0,0,1616,1618,5,226,
        0,0,1617,1614,1,0,0,0,1617,1615,1,0,0,0,1617,1618,1,0,0,0,1618,1631,
        1,0,0,0,1619,1620,5,263,0,0,1620,1623,3,214,107,0,1621,1623,3,214,
        107,0,1622,1619,1,0,0,0,1622,1621,1,0,0,0,1623,1628,1,0,0,0,1624,
        1625,5,263,0,0,1625,1627,3,214,107,0,1626,1624,1,0,0,0,1627,1630,
        1,0,0,0,1628,1629,1,0,0,0,1628,1626,1,0,0,0,1629,1632,1,0,0,0,1630,
        1628,1,0,0,0,1631,1622,1,0,0,0,1631,1632,1,0,0,0,1632,213,1,0,0,
        0,1633,1634,5,81,0,0,1634,1635,5,110,0,0,1635,1636,3,302,151,0,1636,
        1637,5,224,0,0,1637,1638,3,186,93,0,1638,1640,3,302,151,0,1639,1641,
        5,53,0,0,1640,1639,1,0,0,0,1640,1641,1,0,0,0,1641,1643,1,0,0,0,1642,
        1644,5,225,0,0,1643,1642,1,0,0,0,1643,1644,1,0,0,0,1644,1646,1,0,
        0,0,1645,1647,5,226,0,0,1646,1645,1,0,0,0,1646,1647,1,0,0,0,1647,
        215,1,0,0,0,1648,1649,3,192,96,0,1649,1652,3,338,169,0,1650,1651,
        5,34,0,0,1651,1653,3,324,162,0,1652,1650,1,0,0,0,1652,1653,1,0,0,
        0,1653,217,1,0,0,0,1654,1655,3,182,91,0,1655,1657,3,338,169,0,1656,
        1658,3,224,112,0,1657,1656,1,0,0,0,1657,1658,1,0,0,0,1658,219,1,
        0,0,0,1659,1660,3,222,111,0,1660,221,1,0,0,0,1661,1662,3,182,91,
        0,1662,1670,3,338,169,0,1663,1667,3,230,115,0,1664,1666,3,230,115,
        0,1665,1664,1,0,0,0,1666,1669,1,0,0,0,1667,1668,1,0,0,0,1667,1665,
        1,0,0,0,1668,1671,1,0,0,0,1669,1667,1,0,0,0,1670,1663,1,0,0,0,1670,
        1671,1,0,0,0,1671,1673,1,0,0,0,1672,1674,3,224,112,0,1673,1672,1,
        0,0,0,1673,1674,1,0,0,0,1674,1677,1,0,0,0,1675,1676,5,150,0,0,1676,
        1678,5,110,0,0,1677,1675,1,0,0,0,1677,1678,1,0,0,0,1678,223,1,0,
        0,0,1679,1680,5,34,0,0,1680,1681,3,324,162,0,1681,225,1,0,0,0,1682,
        1690,3,216,108,0,1683,1687,3,230,115,0,1684,1686,3,230,115,0,1685,
        1684,1,0,0,0,1686,1689,1,0,0,0,1687,1688,1,0,0,0,1687,1685,1,0,0,
        0,1688,1691,1,0,0,0,1689,1687,1,0,0,0,1690,1683,1,0,0,0,1690,1691,
        1,0,0,0,1691,227,1,0,0,0,1692,1693,3,182,91,0,1693,1696,3,338,169,
        0,1694,1695,5,34,0,0,1695,1697,3,324,162,0,1696,1694,1,0,0,0,1696,
        1697,1,0,0,0,1697,1705,1,0,0,0,1698,1702,3,230,115,0,1699,1701,3,
        230,115,0,1700,1699,1,0,0,0,1701,1704,1,0,0,0,1702,1703,1,0,0,0,
        1702,1700,1,0,0,0,1703,1706,1,0,0,0,1704,1702,1,0,0,0,1705,1698,
        1,0,0,0,1705,1706,1,0,0,0,1706,229,1,0,0,0,1707,1709,5,132,0,0,1708,
        1707,1,0,0,0,1708,1709,1,0,0,0,1709,1710,1,0,0,0,1710,1713,5,133,
        0,0,1711,1713,3,232,116,0,1712,1708,1,0,0,0,1712,1711,1,0,0,0,1713,
        231,1,0,0,0,1714,1715,5,60,0,0,1715,1723,3,314,157,0,1716,1717,5,
        35,0,0,1717,1723,3,314,157,0,1718,1719,5,51,0,0,1719,1723,3,314,
        157,0,1720,1721,5,16,0,0,1721,1723,3,372,186,0,1722,1714,1,0,0,0,
        1722,1716,1,0,0,0,1722,1718,1,0,0,0,1722,1720,1,0,0,0,1723,233,1,
        0,0,0,1724,1725,7,10,0,0,1725,235,1,0,0,0,1726,1727,7,11,0,0,1727,
        237,1,0,0,0,1728,1733,3,240,120,0,1729,1730,5,263,0,0,1730,1732,
        3,240,120,0,1731,1729,1,0,0,0,1732,1735,1,0,0,0,1733,1734,1,0,0,
        0,1733,1731,1,0,0,0,1734,1738,1,0,0,0,1735,1733,1,0,0,0,1736,1737,
        5,263,0,0,1737,1739,3,242,121,0,1738,1736,1,0,0,0,1738,1739,1,0,
        0,0,1739,1742,1,0,0,0,1740,1742,3,242,121,0,1741,1728,1,0,0,0,1741,
        1740,1,0,0,0,1742,239,1,0,0,0,1743,1745,5,89,0,0,1744,1746,3,302,
        151,0,1745,1744,1,0,0,0,1745,1746,1,0,0,0,1746,1747,1,0,0,0,1747,
        1748,5,146,0,0,1748,1749,3,372,186,0,1749,241,1,0,0,0,1750,1752,
        5,154,0,0,1751,1753,3,302,151,0,1752,1751,1,0,0,0,1752,1753,1,0,
        0,0,1753,1754,1,0,0,0,1754,1755,5,265,0,0,1755,1756,5,145,0,0,1756,
        1762,3,244,122,0,1757,1758,5,263,0,0,1758,1759,5,145,0,0,1759,1761,
        3,244,122,0,1760,1757,1,0,0,0,1761,1764,1,0,0,0,1762,1763,1,0,0,
        0,1762,1760,1,0,0,0,1763,1765,1,0,0,0,1764,1762,1,0,0,0,1765,1766,
        5,266,0,0,1766,243,1,0,0,0,1767,1768,5,210,0,0,1768,1769,3,250,125,
        0,1769,1770,3,314,157,0,1770,1783,1,0,0,0,1771,1772,3,314,157,0,
        1772,1773,3,248,124,0,1773,1775,1,0,0,0,1774,1771,1,0,0,0,1774,1775,
        1,0,0,0,1775,1776,1,0,0,0,1776,1780,5,211,0,0,1777,1778,3,248,124,
        0,1778,1779,3,314,157,0,1779,1781,1,0,0,0,1780,1777,1,0,0,0,1780,
        1781,1,0,0,0,1781,1783,1,0,0,0,1782,1767,1,0,0,0,1782,1774,1,0,0,
        0,1783,245,1,0,0,0,1784,1785,5,30,0,0,1785,1786,5,94,0,0,1786,1791,
        3,370,185,0,1787,1788,5,216,0,0,1788,1789,5,151,0,0,1789,1790,5,
        249,0,0,1790,1792,3,372,186,0,1791,1787,1,0,0,0,1791,1792,1,0,0,
        0,1792,1795,1,0,0,0,1793,1795,5,197,0,0,1794,1784,1,0,0,0,1794,1793,
        1,0,0,0,1795,247,1,0,0,0,1796,1802,1,0,0,0,1797,1802,5,251,0,0,1798,
        1802,5,252,0,0,1799,1802,5,253,0,0,1800,1802,5,254,0,0,1801,1796,
        1,0,0,0,1801,1797,1,0,0,0,1801,1798,1,0,0,0,1801,1799,1,0,0,0,1801,
        1800,1,0,0,0,1802,249,1,0,0,0,1803,1812,5,249,0,0,1804,1812,5,250,
        0,0,1805,1812,5,115,0,0,1806,1812,5,164,0,0,1807,1812,5,163,0,0,
        1808,1812,5,15,0,0,1809,1812,5,94,0,0,1810,1812,3,248,124,0,1811,
        1803,1,0,0,0,1811,1804,1,0,0,0,1811,1805,1,0,0,0,1811,1806,1,0,0,
        0,1811,1807,1,0,0,0,1811,1808,1,0,0,0,1811,1809,1,0,0,0,1811,1810,
        1,0,0,0,1812,251,1,0,0,0,1813,1814,5,115,0,0,1814,1817,3,366,183,
        0,1815,1816,7,12,0,0,1816,1818,5,153,0,0,1817,1815,1,0,0,0,1817,
        1818,1,0,0,0,1818,253,1,0,0,0,1819,1820,5,265,0,0,1820,1825,3,262,
        131,0,1821,1822,5,263,0,0,1822,1824,3,262,131,0,1823,1821,1,0,0,
        0,1824,1827,1,0,0,0,1825,1823,1,0,0,0,1825,1826,1,0,0,0,1826,1828,
        1,0,0,0,1827,1825,1,0,0,0,1828,1829,5,266,0,0,1829,255,1,0,0,0,1830,
        1831,5,265,0,0,1831,1836,3,216,108,0,1832,1833,5,263,0,0,1833,1835,
        3,216,108,0,1834,1832,1,0,0,0,1835,1838,1,0,0,0,1836,1837,1,0,0,
        0,1836,1834,1,0,0,0,1837,1839,1,0,0,0,1838,1836,1,0,0,0,1839,1840,
        5,266,0,0,1840,257,1,0,0,0,1841,1846,3,314,157,0,1842,1843,5,263,
        0,0,1843,1845,3,314,157,0,1844,1842,1,0,0,0,1845,1848,1,0,0,0,1846,
        1844,1,0,0,0,1846,1847,1,0,0,0,1847,259,1,0,0,0,1848,1846,1,0,0,
        0,1849,1859,5,52,0,0,1850,1851,5,71,0,0,1851,1852,5,191,0,0,1852,
        1853,5,26,0,0,1853,1857,3,324,162,0,1854,1855,5,63,0,0,1855,1856,
        5,26,0,0,1856,1858,3,324,162,0,1857,1854,1,0,0,0,1857,1858,1,0,0,
        0,1858,1860,1,0,0,0,1859,1850,1,0,0,0,1859,1860,1,0,0,0,1860,1865,
        1,0,0,0,1861,1862,5,117,0,0,1862,1863,5,191,0,0,1863,1864,5,26,0,
        0,1864,1866,3,324,162,0,1865,1861,1,0,0,0,1865,1866,1,0,0,0,1866,
        261,1,0,0,0,1867,1870,3,370,185,0,1868,1869,5,249,0,0,1869,1871,
        3,314,157,0,1870,1868,1,0,0,0,1870,1871,1,0,0,0,1871,263,1,0,0,0,
        1872,1883,3,266,133,0,1873,1874,5,139,0,0,1874,1875,5,26,0,0,1875,
        1880,3,270,135,0,1876,1877,5,263,0,0,1877,1879,3,270,135,0,1878,
        1876,1,0,0,0,1879,1882,1,0,0,0,1880,1878,1,0,0,0,1880,1881,1,0,0,
        0,1881,1884,1,0,0,0,1882,1880,1,0,0,0,1883,1873,1,0,0,0,1883,1884,
        1,0,0,0,1884,1891,1,0,0,0,1885,1886,5,116,0,0,1886,1889,3,314,157,
        0,1887,1888,5,135,0,0,1888,1890,5,277,0,0,1889,1887,1,0,0,0,1889,
        1890,1,0,0,0,1890,1892,1,0,0,0,1891,1885,1,0,0,0,1891,1892,1,0,0,
        0,1892,265,1,0,0,0,1893,1894,6,133,-1,0,1894,1895,3,268,134,0,1895,
        1910,1,0,0,0,1896,1897,10,2,0,0,1897,1899,5,100,0,0,1898,1900,3,
        286,143,0,1899,1898,1,0,0,0,1899,1900,1,0,0,0,1900,1901,1,0,0,0,
        1901,1909,3,266,133,3,1902,1903,10,1,0,0,1903,1905,7,13,0,0,1904,
        1906,3,286,143,0,1905,1904,1,0,0,0,1905,1906,1,0,0,0,1906,1907,1,
        0,0,0,1907,1909,3,266,133,2,1908,1896,1,0,0,0,1908,1902,1,0,0,0,
        1909,1912,1,0,0,0,1910,1908,1,0,0,0,1910,1911,1,0,0,0,1911,267,1,
        0,0,0,1912,1910,1,0,0,0,1913,1930,3,272,136,0,1914,1915,5,188,0,
        0,1915,1930,3,186,93,0,1916,1917,5,211,0,0,1917,1922,3,314,157,0,
        1918,1919,5,263,0,0,1919,1921,3,314,157,0,1920,1918,1,0,0,0,1921,
        1924,1,0,0,0,1922,1920,1,0,0,0,1922,1923,1,0,0,0,1923,1930,1,0,0,
        0,1924,1922,1,0,0,0,1925,1926,5,265,0,0,1926,1927,3,264,132,0,1927,
        1928,5,266,0,0,1928,1930,1,0,0,0,1929,1913,1,0,0,0,1929,1914,1,0,
        0,0,1929,1916,1,0,0,0,1929,1925,1,0,0,0,1930,269,1,0,0,0,1931,1933,
        3,312,156,0,1932,1934,7,14,0,0,1933,1932,1,0,0,0,1933,1934,1,0,0,
        0,1934,1937,1,0,0,0,1935,1936,5,134,0,0,1936,1938,7,15,0,0,1937,
        1935,1,0,0,0,1937,1938,1,0,0,0,1938,271,1,0,0,0,1939,1941,5,174,
        0,0,1940,1942,3,286,143,0,1941,1940,1,0,0,0,1941,1942,1,0,0,0,1942,
        1944,1,0,0,0,1943,1945,5,183,0,0,1944,1943,1,0,0,0,1944,1945,1,0,
        0,0,1945,1946,1,0,0,0,1946,1951,3,288,144,0,1947,1948,5,263,0,0,
        1948,1950,3,288,144,0,1949,1947,1,0,0,0,1950,1953,1,0,0,0,1951,1949,
        1,0,0,0,1951,1952,1,0,0,0,1952,1963,1,0,0,0,1953,1951,1,0,0,0,1954,
        1955,5,82,0,0,1955,1960,3,290,145,0,1956,1957,5,263,0,0,1957,1959,
        3,290,145,0,1958,1956,1,0,0,0,1959,1962,1,0,0,0,1960,1958,1,0,0,
        0,1960,1961,1,0,0,0,1961,1964,1,0,0,0,1962,1960,1,0,0,0,1963,1954,
        1,0,0,0,1963,1964,1,0,0,0,1964,1966,1,0,0,0,1965,1967,3,274,137,
        0,1966,1965,1,0,0,0,1966,1967,1,0,0,0,1967,1971,1,0,0,0,1968,1969,
        5,87,0,0,1969,1970,5,26,0,0,1970,1972,3,278,139,0,1971,1968,1,0,
        0,0,1971,1972,1,0,0,0,1972,1974,1,0,0,0,1973,1975,3,276,138,0,1974,
        1973,1,0,0,0,1974,1975,1,0,0,0,1975,273,1,0,0,0,1976,1977,5,215,
        0,0,1977,1978,3,316,158,0,1978,275,1,0,0,0,1979,1980,5,90,0,0,1980,
        1981,3,316,158,0,1981,277,1,0,0,0,1982,1984,3,286,143,0,1983,1982,
        1,0,0,0,1983,1984,1,0,0,0,1984,1985,1,0,0,0,1985,1990,3,280,140,
        0,1986,1987,5,263,0,0,1987,1989,3,280,140,0,1988,1986,1,0,0,0,1989,
        1992,1,0,0,0,1990,1988,1,0,0,0,1990,1991,1,0,0,0,1991,279,1,0,0,
        0,1992,1990,1,0,0,0,1993,1994,3,282,141,0,1994,281,1,0,0,0,1995,
        2004,5,265,0,0,1996,2001,3,312,156,0,1997,1998,5,263,0,0,1998,2000,
        3,312,156,0,1999,1997,1,0,0,0,2000,2003,1,0,0,0,2001,1999,1,0,0,
        0,2001,2002,1,0,0,0,2002,2005,1,0,0,0,2003,2001,1,0,0,0,2004,1996,
        1,0,0,0,2004,2005,1,0,0,0,2005,2006,1,0,0,0,2006,2009,5,266,0,0,
        2007,2009,3,312,156,0,2008,1995,1,0,0,0,2008,2007,1,0,0,0,2009,283,
        1,0,0,0,2010,2012,3,370,185,0,2011,2013,3,302,151,0,2012,2011,1,
        0,0,0,2012,2013,1,0,0,0,2013,2014,1,0,0,0,2014,2015,5,9,0,0,2015,
        2016,3,306,153,0,2016,285,1,0,0,0,2017,2018,7,16,0,0,2018,287,1,
        0,0,0,2019,2024,3,312,156,0,2020,2022,5,9,0,0,2021,2020,1,0,0,0,
        2021,2022,1,0,0,0,2022,2023,1,0,0,0,2023,2025,3,370,185,0,2024,2021,
        1,0,0,0,2024,2025,1,0,0,0,2025,2032,1,0,0,0,2026,2027,3,366,183,
        0,2027,2028,5,261,0,0,2028,2029,5,257,0,0,2029,2032,1,0,0,0,2030,
        2032,5,257,0,0,2031,2019,1,0,0,0,2031,2026,1,0,0,0,2031,2030,1,0,
        0,0,2032,289,1,0,0,0,2033,2034,6,145,-1,0,2034,2035,3,296,148,0,
        2035,2049,1,0,0,0,2036,2045,10,2,0,0,2037,2038,5,38,0,0,2038,2039,
        5,109,0,0,2039,2046,3,296,148,0,2040,2041,3,292,146,0,2041,2042,
        5,109,0,0,2042,2043,3,290,145,0,2043,2044,3,294,147,0,2044,2046,
        1,0,0,0,2045,2037,1,0,0,0,2045,2040,1,0,0,0,2046,2048,1,0,0,0,2047,
        2036,1,0,0,0,2048,2051,1,0,0,0,2049,2047,1,0,0,0,2049,2050,1,0,0,
        0,2050,291,1,0,0,0,2051,2049,1,0,0,0,2052,2054,5,97,0,0,2053,2052,
        1,0,0,0,2053,2054,1,0,0,0,2054,2084,1,0,0,0,2055,2057,5,114,0,0,
        2056,2058,5,97,0,0,2057,2056,1,0,0,0,2057,2058,1,0,0,0,2058,2084,
        1,0,0,0,2059,2061,5,165,0,0,2060,2062,5,97,0,0,2061,2060,1,0,0,0,
        2061,2062,1,0,0,0,2062,2084,1,0,0,0,2063,2065,5,114,0,0,2064,2066,
        5,141,0,0,2065,2064,1,0,0,0,2065,2066,1,0,0,0,2066,2084,1,0,0,0,
        2067,2069,5,165,0,0,2068,2070,5,141,0,0,2069,2068,1,0,0,0,2069,2070,
        1,0,0,0,2070,2084,1,0,0,0,2071,2073,5,83,0,0,2072,2074,5,141,0,0,
        2073,2072,1,0,0,0,2073,2074,1,0,0,0,2074,2084,1,0,0,0,2075,2076,
        5,114,0,0,2076,2084,5,177,0,0,2077,2078,5,165,0,0,2078,2084,5,177,
        0,0,2079,2080,5,114,0,0,2080,2084,5,7,0,0,2081,2082,5,165,0,0,2082,
        2084,5,7,0,0,2083,2053,1,0,0,0,2083,2055,1,0,0,0,2083,2059,1,0,0,
        0,2083,2063,1,0,0,0,2083,2067,1,0,0,0,2083,2071,1,0,0,0,2083,2075,
        1,0,0,0,2083,2077,1,0,0,0,2083,2079,1,0,0,0,2083,2081,1,0,0,0,2084,
        293,1,0,0,0,2085,2086,5,136,0,0,2086,2100,3,316,158,0,2087,2088,
        5,205,0,0,2088,2089,5,265,0,0,2089,2094,3,370,185,0,2090,2091,5,
        263,0,0,2091,2093,3,370,185,0,2092,2090,1,0,0,0,2093,2096,1,0,0,
        0,2094,2092,1,0,0,0,2094,2095,1,0,0,0,2095,2097,1,0,0,0,2096,2094,
        1,0,0,0,2097,2098,5,266,0,0,2098,2100,1,0,0,0,2099,2085,1,0,0,0,
        2099,2087,1,0,0,0,2100,295,1,0,0,0,2101,2114,3,300,150,0,2102,2103,
        5,190,0,0,2103,2104,3,298,149,0,2104,2105,5,265,0,0,2105,2106,3,
        314,157,0,2106,2112,5,266,0,0,2107,2108,5,157,0,0,2108,2109,5,265,
        0,0,2109,2110,3,314,157,0,2110,2111,5,266,0,0,2111,2113,1,0,0,0,
        2112,2107,1,0,0,0,2112,2113,1,0,0,0,2113,2115,1,0,0,0,2114,2102,
        1,0,0,0,2114,2115,1,0,0,0,2115,297,1,0,0,0,2116,2117,7,17,0,0,2117,
        299,1,0,0,0,2118,2126,3,304,152,0,2119,2121,5,9,0,0,2120,2119,1,
        0,0,0,2120,2121,1,0,0,0,2121,2122,1,0,0,0,2122,2124,3,370,185,0,
        2123,2125,3,302,151,0,2124,2123,1,0,0,0,2124,2125,1,0,0,0,2125,2127,
        1,0,0,0,2126,2120,1,0,0,0,2126,2127,1,0,0,0,2127,301,1,0,0,0,2128,
        2129,5,265,0,0,2129,2134,3,192,96,0,2130,2131,5,263,0,0,2131,2133,
        3,192,96,0,2132,2130,1,0,0,0,2133,2136,1,0,0,0,2134,2132,1,0,0,0,
        2134,2135,1,0,0,0,2135,2137,1,0,0,0,2136,2134,1,0,0,0,2137,2138,
        5,266,0,0,2138,303,1,0,0,0,2139,2147,3,196,98,0,2140,2142,5,113,
        0,0,2141,2140,1,0,0,0,2141,2142,1,0,0,0,2142,2143,1,0,0,0,2143,2147,
        3,306,153,0,2144,2147,3,308,154,0,2145,2147,3,310,155,0,2146,2139,
        1,0,0,0,2146,2141,1,0,0,0,2146,2144,1,0,0,0,2146,2145,1,0,0,0,2147,
        305,1,0,0,0,2148,2149,5,265,0,0,2149,2150,3,208,104,0,2150,2151,
        5,266,0,0,2151,307,1,0,0,0,2152,2153,5,201,0,0,2153,2154,5,265,0,
        0,2154,2159,3,314,157,0,2155,2156,5,263,0,0,2156,2158,3,314,157,
        0,2157,2155,1,0,0,0,2158,2161,1,0,0,0,2159,2157,1,0,0,0,2159,2160,
        1,0,0,0,2160,2162,1,0,0,0,2161,2159,1,0,0,0,2162,2165,5,266,0,0,
        2163,2164,5,216,0,0,2164,2166,5,140,0,0,2165,2163,1,0,0,0,2165,2166,
        1,0,0,0,2166,309,1,0,0,0,2167,2168,5,265,0,0,2168,2169,3,290,145,
        0,2169,2170,5,266,0,0,2170,311,1,0,0,0,2171,2174,3,192,96,0,2172,
        2174,3,314,157,0,2173,2171,1,0,0,0,2173,2172,1,0,0,0,2174,313,1,
        0,0,0,2175,2176,3,316,158,0,2176,315,1,0,0,0,2177,2178,6,158,-1,
        0,2178,2180,3,320,160,0,2179,2181,3,318,159,0,2180,2179,1,0,0,0,
        2180,2181,1,0,0,0,2181,2185,1,0,0,0,2182,2183,5,132,0,0,2183,2185,
        3,316,158,3,2184,2177,1,0,0,0,2184,2182,1,0,0,0,2185,2194,1,0,0,
        0,2186,2187,10,2,0,0,2187,2188,5,5,0,0,2188,2193,3,316,158,3,2189,
        2190,10,1,0,0,2190,2191,5,138,0,0,2191,2193,3,316,158,2,2192,2186,
        1,0,0,0,2192,2189,1,0,0,0,2193,2196,1,0,0,0,2194,2192,1,0,0,0,2194,
        2195,1,0,0,0,2195,317,1,0,0,0,2196,2194,1,0,0,0,2197,2198,3,326,
        163,0,2198,2199,3,320,160,0,2199,2256,1,0,0,0,2200,2201,3,326,163,
        0,2201,2202,3,328,164,0,2202,2203,3,306,153,0,2203,2256,1,0,0,0,
        2204,2206,5,132,0,0,2205,2204,1,0,0,0,2205,2206,1,0,0,0,2206,2207,
        1,0,0,0,2207,2208,5,15,0,0,2208,2209,3,320,160,0,2209,2210,5,5,0,
        0,2210,2211,3,320,160,0,2211,2256,1,0,0,0,2212,2214,5,132,0,0,2213,
        2212,1,0,0,0,2213,2214,1,0,0,0,2214,2215,1,0,0,0,2215,2216,5,94,
        0,0,2216,2217,5,265,0,0,2217,2222,3,314,157,0,2218,2219,5,263,0,
        0,2219,2221,3,314,157,0,2220,2218,1,0,0,0,2221,2224,1,0,0,0,2222,
        2220,1,0,0,0,2222,2223,1,0,0,0,2223,2225,1,0,0,0,2224,2222,1,0,0,
        0,2225,2226,5,266,0,0,2226,2256,1,0,0,0,2227,2229,5,132,0,0,2228,
        2227,1,0,0,0,2228,2229,1,0,0,0,2229,2230,1,0,0,0,2230,2231,5,94,
        0,0,2231,2256,3,306,153,0,2232,2234,5,132,0,0,2233,2232,1,0,0,0,
        2233,2234,1,0,0,0,2234,2235,1,0,0,0,2235,2236,7,18,0,0,2236,2239,
        3,320,160,0,2237,2238,5,62,0,0,2238,2240,3,320,160,0,2239,2237,1,
        0,0,0,2239,2240,1,0,0,0,2240,2256,1,0,0,0,2241,2242,7,19,0,0,2242,
        2256,3,320,160,0,2243,2245,5,108,0,0,2244,2246,5,132,0,0,2245,2244,
        1,0,0,0,2245,2246,1,0,0,0,2246,2247,1,0,0,0,2247,2256,7,20,0,0,2248,
        2250,5,108,0,0,2249,2251,5,132,0,0,2250,2249,1,0,0,0,2250,2251,1,
        0,0,0,2251,2252,1,0,0,0,2252,2253,5,57,0,0,2253,2254,5,82,0,0,2254,
        2256,3,320,160,0,2255,2197,1,0,0,0,2255,2200,1,0,0,0,2255,2205,1,
        0,0,0,2255,2213,1,0,0,0,2255,2228,1,0,0,0,2255,2233,1,0,0,0,2255,
        2241,1,0,0,0,2255,2243,1,0,0,0,2255,2248,1,0,0,0,2256,319,1,0,0,
        0,2257,2258,6,160,-1,0,2258,2262,3,322,161,0,2259,2260,7,21,0,0,
        2260,2262,3,320,160,4,2261,2257,1,0,0,0,2261,2259,1,0,0,0,2262,2274,
        1,0,0,0,2263,2264,10,3,0,0,2264,2265,7,22,0,0,2265,2273,3,320,160,
        4,2266,2267,10,2,0,0,2267,2268,7,21,0,0,2268,2273,3,320,160,3,2269,
        2270,10,1,0,0,2270,2271,5,260,0,0,2271,2273,3,320,160,2,2272,2263,
        1,0,0,0,2272,2266,1,0,0,0,2272,2269,1,0,0,0,2273,2276,1,0,0,0,2274,
        2272,1,0,0,0,2274,2275,1,0,0,0,2275,321,1,0,0,0,2276,2274,1,0,0,
        0,2277,2278,6,161,-1,0,2278,2524,5,133,0,0,2279,2524,3,332,166,0,
        2280,2281,3,370,185,0,2281,2282,3,324,162,0,2282,2524,1,0,0,0,2283,
        2284,5,286,0,0,2284,2524,3,324,162,0,2285,2524,3,372,186,0,2286,
        2524,3,330,165,0,2287,2524,3,324,162,0,2288,2524,5,276,0,0,2289,
        2524,5,272,0,0,2290,2291,5,148,0,0,2291,2292,5,265,0,0,2292,2293,
        3,320,160,0,2293,2294,5,94,0,0,2294,2295,3,320,160,0,2295,2296,5,
        266,0,0,2296,2524,1,0,0,0,2297,2298,5,265,0,0,2298,2301,3,314,157,
        0,2299,2300,5,9,0,0,2300,2302,3,338,169,0,2301,2299,1,0,0,0,2301,
        2302,1,0,0,0,2302,2311,1,0,0,0,2303,2304,5,263,0,0,2304,2307,3,314,
        157,0,2305,2306,5,9,0,0,2306,2308,3,338,169,0,2307,2305,1,0,0,0,
        2307,2308,1,0,0,0,2308,2310,1,0,0,0,2309,2303,1,0,0,0,2310,2313,
        1,0,0,0,2311,2312,1,0,0,0,2311,2309,1,0,0,0,2312,2314,1,0,0,0,2313,
        2311,1,0,0,0,2314,2315,5,266,0,0,2315,2524,1,0,0,0,2316,2317,5,168,
        0,0,2317,2318,5,265,0,0,2318,2323,3,314,157,0,2319,2320,5,263,0,
        0,2320,2322,3,314,157,0,2321,2319,1,0,0,0,2322,2325,1,0,0,0,2323,
        2321,1,0,0,0,2323,2324,1,0,0,0,2324,2326,1,0,0,0,2325,2323,1,0,0,
        0,2326,2327,5,266,0,0,2327,2524,1,0,0,0,2328,2329,3,190,95,0,2329,
        2330,5,265,0,0,2330,2331,5,257,0,0,2331,2333,5,266,0,0,2332,2334,
        3,348,174,0,2333,2332,1,0,0,0,2333,2334,1,0,0,0,2334,2336,1,0,0,
        0,2335,2337,3,352,176,0,2336,2335,1,0,0,0,2336,2337,1,0,0,0,2337,
        2524,1,0,0,0,2338,2339,3,190,95,0,2339,2351,5,265,0,0,2340,2342,
        3,286,143,0,2341,2340,1,0,0,0,2341,2342,1,0,0,0,2342,2343,1,0,0,
        0,2343,2348,3,314,157,0,2344,2345,5,263,0,0,2345,2347,3,314,157,
        0,2346,2344,1,0,0,0,2347,2350,1,0,0,0,2348,2346,1,0,0,0,2348,2349,
        1,0,0,0,2349,2352,1,0,0,0,2350,2348,1,0,0,0,2351,2341,1,0,0,0,2351,
        2352,1,0,0,0,2352,2363,1,0,0,0,2353,2354,5,139,0,0,2354,2355,5,26,
        0,0,2355,2360,3,270,135,0,2356,2357,5,263,0,0,2357,2359,3,270,135,
        0,2358,2356,1,0,0,0,2359,2362,1,0,0,0,2360,2358,1,0,0,0,2360,2361,
        1,0,0,0,2361,2364,1,0,0,0,2362,2360,1,0,0,0,2363,2353,1,0,0,0,2363,
        2364,1,0,0,0,2364,2365,1,0,0,0,2365,2367,5,266,0,0,2366,2368,3,348,
        174,0,2367,2366,1,0,0,0,2367,2368,1,0,0,0,2368,2370,1,0,0,0,2369,
        2371,3,352,176,0,2370,2369,1,0,0,0,2370,2371,1,0,0,0,2371,2524,1,
        0,0,0,2372,2373,3,370,185,0,2373,2374,5,273,0,0,2374,2375,3,314,
        157,0,2375,2524,1,0,0,0,2376,2385,5,265,0,0,2377,2382,3,370,185,
        0,2378,2379,5,263,0,0,2379,2381,3,370,185,0,2380,2378,1,0,0,0,2381,
        2384,1,0,0,0,2382,2380,1,0,0,0,2382,2383,1,0,0,0,2383,2386,1,0,0,
        0,2384,2382,1,0,0,0,2385,2377,1,0,0,0,2385,2386,1,0,0,0,2386,2387,
        1,0,0,0,2387,2388,5,266,0,0,2388,2389,5,273,0,0,2389,2524,3,314,
        157,0,2390,2391,5,265,0,0,2391,2392,3,208,104,0,2392,2393,5,266,
        0,0,2393,2524,1,0,0,0,2394,2395,5,66,0,0,2395,2396,5,265,0,0,2396,
        2397,3,208,104,0,2397,2398,5,266,0,0,2398,2524,1,0,0,0,2399,2400,
        5,28,0,0,2400,2402,3,320,160,0,2401,2403,3,346,173,0,2402,2401,1,
        0,0,0,2403,2404,1,0,0,0,2404,2402,1,0,0,0,2404,2405,1,0,0,0,2405,
        2408,1,0,0,0,2406,2407,5,59,0,0,2407,2409,3,314,157,0,2408,2406,
        1,0,0,0,2408,2409,1,0,0,0,2409,2410,1,0,0,0,2410,2411,5,61,0,0,2411,
        2524,1,0,0,0,2412,2414,5,28,0,0,2413,2415,3,346,173,0,2414,2413,
        1,0,0,0,2415,2416,1,0,0,0,2416,2414,1,0,0,0,2416,2417,1,0,0,0,2417,
        2420,1,0,0,0,2418,2419,5,59,0,0,2419,2421,3,314,157,0,2420,2418,
        1,0,0,0,2420,2421,1,0,0,0,2421,2422,1,0,0,0,2422,2423,5,61,0,0,2423,
        2524,1,0,0,0,2424,2425,5,29,0,0,2425,2426,5,265,0,0,2426,2427,3,
        314,157,0,2427,2428,5,9,0,0,2428,2429,3,338,169,0,2429,2430,5,266,
        0,0,2430,2524,1,0,0,0,2431,2432,5,195,0,0,2432,2433,5,265,0,0,2433,
        2434,3,314,157,0,2434,2435,5,9,0,0,2435,2436,3,338,169,0,2436,2437,
        5,266,0,0,2437,2524,1,0,0,0,2438,2439,5,8,0,0,2439,2448,5,267,0,
        0,2440,2445,3,314,157,0,2441,2442,5,263,0,0,2442,2444,3,314,157,
        0,2443,2441,1,0,0,0,2444,2447,1,0,0,0,2445,2443,1,0,0,0,2445,2446,
        1,0,0,0,2446,2449,1,0,0,0,2447,2445,1,0,0,0,2448,2440,1,0,0,0,2448,
        2449,1,0,0,0,2449,2450,1,0,0,0,2450,2524,5,268,0,0,2451,2524,3,194,
        97,0,2452,2524,5,40,0,0,2453,2457,5,42,0,0,2454,2455,5,265,0,0,2455,
        2456,5,277,0,0,2456,2458,5,266,0,0,2457,2454,1,0,0,0,2457,2458,1,
        0,0,0,2458,2524,1,0,0,0,2459,2463,5,43,0,0,2460,2461,5,265,0,0,2461,
        2462,5,277,0,0,2462,2464,5,266,0,0,2463,2460,1,0,0,0,2463,2464,1,
        0,0,0,2464,2524,1,0,0,0,2465,2469,5,119,0,0,2466,2467,5,265,0,0,
        2467,2468,5,277,0,0,2468,2470,5,266,0,0,2469,2466,1,0,0,0,2469,2470,
        1,0,0,0,2470,2524,1,0,0,0,2471,2475,5,120,0,0,2472,2473,5,265,0,
        0,2473,2474,5,277,0,0,2474,2476,5,266,0,0,2475,2472,1,0,0,0,2475,
        2476,1,0,0,0,2476,2524,1,0,0,0,2477,2524,5,44,0,0,2478,2524,5,41,
        0,0,2479,2480,5,184,0,0,2480,2481,5,265,0,0,2481,2482,3,320,160,
        0,2482,2483,5,82,0,0,2483,2486,3,320,160,0,2484,2485,5,78,0,0,2485,
        2487,3,320,160,0,2486,2484,1,0,0,0,2486,2487,1,0,0,0,2487,2488,1,
        0,0,0,2488,2489,5,266,0,0,2489,2524,1,0,0,0,2490,2491,5,131,0,0,
        2491,2492,5,265,0,0,2492,2495,3,320,160,0,2493,2494,5,263,0,0,2494,
        2496,3,336,168,0,2495,2493,1,0,0,0,2495,2496,1,0,0,0,2496,2497,1,
        0,0,0,2497,2498,5,266,0,0,2498,2524,1,0,0,0,2499,2500,5,68,0,0,2500,
        2501,5,265,0,0,2501,2502,3,370,185,0,2502,2503,5,82,0,0,2503,2504,
        3,320,160,0,2504,2505,5,266,0,0,2505,2524,1,0,0,0,2506,2507,5,265,
        0,0,2507,2508,3,314,157,0,2508,2509,5,266,0,0,2509,2524,1,0,0,0,
        2510,2511,5,88,0,0,2511,2520,5,265,0,0,2512,2517,3,366,183,0,2513,
        2514,5,263,0,0,2514,2516,3,366,183,0,2515,2513,1,0,0,0,2516,2519,
        1,0,0,0,2517,2515,1,0,0,0,2517,2518,1,0,0,0,2518,2521,1,0,0,0,2519,
        2517,1,0,0,0,2520,2512,1,0,0,0,2520,2521,1,0,0,0,2521,2522,1,0,0,
        0,2522,2524,5,266,0,0,2523,2277,1,0,0,0,2523,2279,1,0,0,0,2523,2280,
        1,0,0,0,2523,2283,1,0,0,0,2523,2285,1,0,0,0,2523,2286,1,0,0,0,2523,
        2287,1,0,0,0,2523,2288,1,0,0,0,2523,2289,1,0,0,0,2523,2290,1,0,0,
        0,2523,2297,1,0,0,0,2523,2316,1,0,0,0,2523,2328,1,0,0,0,2523,2338,
        1,0,0,0,2523,2372,1,0,0,0,2523,2376,1,0,0,0,2523,2390,1,0,0,0,2523,
        2394,1,0,0,0,2523,2399,1,0,0,0,2523,2412,1,0,0,0,2523,2424,1,0,0,
        0,2523,2431,1,0,0,0,2523,2438,1,0,0,0,2523,2451,1,0,0,0,2523,2452,
        1,0,0,0,2523,2453,1,0,0,0,2523,2459,1,0,0,0,2523,2465,1,0,0,0,2523,
        2471,1,0,0,0,2523,2477,1,0,0,0,2523,2478,1,0,0,0,2523,2479,1,0,0,
        0,2523,2490,1,0,0,0,2523,2499,1,0,0,0,2523,2506,1,0,0,0,2523,2510,
        1,0,0,0,2524,2535,1,0,0,0,2525,2526,10,15,0,0,2526,2527,5,267,0,
        0,2527,2528,3,320,160,0,2528,2529,5,268,0,0,2529,2534,1,0,0,0,2530,
        2531,10,13,0,0,2531,2532,5,261,0,0,2532,2534,3,370,185,0,2533,2525,
        1,0,0,0,2533,2530,1,0,0,0,2534,2537,1,0,0,0,2535,2533,1,0,0,0,2535,
        2536,1,0,0,0,2536,323,1,0,0,0,2537,2535,1,0,0,0,2538,2545,5,274,
        0,0,2539,2542,5,275,0,0,2540,2541,5,198,0,0,2541,2543,5,274,0,0,
        2542,2540,1,0,0,0,2542,2543,1,0,0,0,2543,2545,1,0,0,0,2544,2538,
        1,0,0,0,2544,2539,1,0,0,0,2545,325,1,0,0,0,2546,2547,7,23,0,0,2547,
        327,1,0,0,0,2548,2549,7,24,0,0,2549,329,1,0,0,0,2550,2551,7,25,0,
        0,2551,331,1,0,0,0,2552,2553,5,277,0,0,2553,2567,3,334,167,0,2554,
        2555,5,265,0,0,2555,2556,5,277,0,0,2556,2557,5,266,0,0,2557,2567,
        3,334,167,0,2558,2559,5,101,0,0,2559,2560,5,277,0,0,2560,2567,3,
        334,167,0,2561,2562,5,101,0,0,2562,2563,5,265,0,0,2563,2564,5,277,
        0,0,2564,2565,5,266,0,0,2565,2567,3,334,167,0,2566,2552,1,0,0,0,
        2566,2554,1,0,0,0,2566,2558,1,0,0,0,2566,2561,1,0,0,0,2567,333,1,
        0,0,0,2568,2569,7,26,0,0,2569,335,1,0,0,0,2570,2571,7,27,0,0,2571,
        337,1,0,0,0,2572,2573,6,169,-1,0,2573,2574,5,8,0,0,2574,2575,5,251,
        0,0,2575,2576,3,338,169,0,2576,2577,5,253,0,0,2577,2618,1,0,0,0,
        2578,2579,5,235,0,0,2579,2580,5,251,0,0,2580,2581,3,338,169,0,2581,
        2582,5,263,0,0,2582,2583,3,338,169,0,2583,2584,5,253,0,0,2584,2618,
        1,0,0,0,2585,2586,5,240,0,0,2586,2587,5,251,0,0,2587,2588,3,370,
        185,0,2588,2595,3,338,169,0,2589,2590,5,263,0,0,2590,2591,3,370,
        185,0,2591,2592,3,338,169,0,2592,2594,1,0,0,0,2593,2589,1,0,0,0,
        2594,2597,1,0,0,0,2595,2593,1,0,0,0,2595,2596,1,0,0,0,2596,2598,
        1,0,0,0,2597,2595,1,0,0,0,2598,2599,5,253,0,0,2599,2618,1,0,0,0,
        2600,2603,3,344,172,0,2601,2603,3,340,170,0,2602,2600,1,0,0,0,2602,
        2601,1,0,0,0,2603,2615,1,0,0,0,2604,2605,5,265,0,0,2605,2610,3,342,
        171,0,2606,2607,5,263,0,0,2607,2609,3,342,171,0,2608,2606,1,0,0,
        0,2609,2612,1,0,0,0,2610,2608,1,0,0,0,2610,2611,1,0,0,0,2611,2613,
        1,0,0,0,2612,2610,1,0,0,0,2613,2614,5,266,0,0,2614,2616,1,0,0,0,
        2615,2604,1,0,0,0,2615,2616,1,0,0,0,2616,2618,1,0,0,0,2617,2572,
        1,0,0,0,2617,2578,1,0,0,0,2617,2585,1,0,0,0,2617,2602,1,0,0,0,2618,
        2623,1,0,0,0,2619,2620,10,5,0,0,2620,2622,5,8,0,0,2621,2619,1,0,
        0,0,2622,2625,1,0,0,0,2623,2621,1,0,0,0,2623,2624,1,0,0,0,2624,339,
        1,0,0,0,2625,2623,1,0,0,0,2626,2627,7,28,0,0,2627,341,1,0,0,0,2628,
        2631,5,277,0,0,2629,2631,3,338,169,0,2630,2628,1,0,0,0,2630,2629,
        1,0,0,0,2631,343,1,0,0,0,2632,2637,5,284,0,0,2633,2637,5,285,0,0,
        2634,2637,5,286,0,0,2635,2637,3,370,185,0,2636,2632,1,0,0,0,2636,
        2633,1,0,0,0,2636,2634,1,0,0,0,2636,2635,1,0,0,0,2637,345,1,0,0,
        0,2638,2639,5,214,0,0,2639,2640,3,314,157,0,2640,2641,5,192,0,0,
        2641,2642,3,314,157,0,2642,347,1,0,0,0,2643,2644,5,74,0,0,2644,2645,
        5,265,0,0,2645,2646,3,274,137,0,2646,2647,5,266,0,0,2647,349,1,0,
        0,0,2648,2653,3,314,157,0,2649,2650,5,263,0,0,2650,2652,3,314,157,
        0,2651,2649,1,0,0,0,2652,2655,1,0,0,0,2653,2651,1,0,0,0,2653,2654,
        1,0,0,0,2654,351,1,0,0,0,2655,2653,1,0,0,0,2656,2657,5,143,0,0,2657,
        2661,5,265,0,0,2658,2659,5,145,0,0,2659,2660,5,26,0,0,2660,2662,
        3,350,175,0,2661,2658,1,0,0,0,2661,2662,1,0,0,0,2662,2673,1,0,0,
        0,2663,2664,5,139,0,0,2664,2665,5,26,0,0,2665,2670,3,270,135,0,2666,
        2667,5,263,0,0,2667,2669,3,270,135,0,2668,2666,1,0,0,0,2669,2672,
        1,0,0,0,2670,2668,1,0,0,0,2670,2671,1,0,0,0,2671,2674,1,0,0,0,2672,
        2670,1,0,0,0,2673,2663,1,0,0,0,2673,2674,1,0,0,0,2674,2676,1,0,0,
        0,2675,2677,3,354,177,0,2676,2675,1,0,0,0,2676,2677,1,0,0,0,2677,
        2678,1,0,0,0,2678,2679,5,266,0,0,2679,353,1,0,0,0,2680,2681,5,154,
        0,0,2681,2697,3,356,178,0,2682,2683,5,169,0,0,2683,2697,3,356,178,
        0,2684,2685,5,154,0,0,2685,2686,5,15,0,0,2686,2687,3,356,178,0,2687,
        2688,5,5,0,0,2688,2689,3,356,178,0,2689,2697,1,0,0,0,2690,2691,5,
        169,0,0,2691,2692,5,15,0,0,2692,2693,3,356,178,0,2693,2694,5,5,0,
        0,2694,2695,3,356,178,0,2695,2697,1,0,0,0,2696,2680,1,0,0,0,2696,
        2682,1,0,0,0,2696,2684,1,0,0,0,2696,2690,1,0,0,0,2697,355,1,0,0,
        0,2698,2699,5,199,0,0,2699,2708,5,149,0,0,2700,2701,5,199,0,0,2701,
        2708,5,77,0,0,2702,2703,5,39,0,0,2703,2708,5,168,0,0,2704,2705,3,
        314,157,0,2705,2706,7,29,0,0,2706,2708,1,0,0,0,2707,2698,1,0,0,0,
        2707,2700,1,0,0,0,2707,2702,1,0,0,0,2707,2704,1,0,0,0,2708,357,1,
        0,0,0,2709,2710,3,370,185,0,2710,2711,5,261,0,0,2711,2712,3,370,
        185,0,2712,2715,1,0,0,0,2713,2715,3,370,185,0,2714,2709,1,0,0,0,
        2714,2713,1,0,0,0,2715,359,1,0,0,0,2716,2721,3,358,179,0,2717,2718,
        5,263,0,0,2718,2720,3,358,179,0,2719,2717,1,0,0,0,2720,2723,1,0,
        0,0,2721,2719,1,0,0,0,2721,2722,1,0,0,0,2722,361,1,0,0,0,2723,2721,
        1,0,0,0,2724,2738,5,2,0,0,2725,2738,5,4,0,0,2726,2738,5,58,0,0,2727,
        2738,5,37,0,0,2728,2738,5,99,0,0,2729,2738,5,162,0,0,2730,2735,5,
        174,0,0,2731,2732,5,265,0,0,2732,2733,3,370,185,0,2733,2734,5,266,
        0,0,2734,2736,1,0,0,0,2735,2731,1,0,0,0,2735,2736,1,0,0,0,2736,2738,
        1,0,0,0,2737,2724,1,0,0,0,2737,2725,1,0,0,0,2737,2726,1,0,0,0,2737,
        2727,1,0,0,0,2737,2728,1,0,0,0,2737,2729,1,0,0,0,2737,2730,1,0,0,
        0,2738,363,1,0,0,0,2739,2740,7,30,0,0,2740,365,1,0,0,0,2741,2746,
        3,370,185,0,2742,2743,5,261,0,0,2743,2745,3,370,185,0,2744,2742,
        1,0,0,0,2745,2748,1,0,0,0,2746,2744,1,0,0,0,2746,2747,1,0,0,0,2747,
        367,1,0,0,0,2748,2746,1,0,0,0,2749,2750,5,166,0,0,2750,2756,3,370,
        185,0,2751,2752,5,204,0,0,2752,2756,3,370,185,0,2753,2754,5,87,0,
        0,2754,2756,3,370,185,0,2755,2749,1,0,0,0,2755,2751,1,0,0,0,2755,
        2753,1,0,0,0,2756,369,1,0,0,0,2757,2763,5,280,0,0,2758,2763,5,274,
        0,0,2759,2763,3,376,188,0,2760,2763,5,283,0,0,2761,2763,5,281,0,
        0,2762,2757,1,0,0,0,2762,2758,1,0,0,0,2762,2759,1,0,0,0,2762,2760,
        1,0,0,0,2762,2761,1,0,0,0,2763,371,1,0,0,0,2764,2766,5,256,0,0,2765,
        2764,1,0,0,0,2765,2766,1,0,0,0,2766,2767,1,0,0,0,2767,2777,5,278,
        0,0,2768,2770,5,256,0,0,2769,2768,1,0,0,0,2769,2770,1,0,0,0,2770,
        2771,1,0,0,0,2771,2777,5,279,0,0,2772,2774,5,256,0,0,2773,2772,1,
        0,0,0,2773,2774,1,0,0,0,2774,2775,1,0,0,0,2775,2777,5,277,0,0,2776,
        2765,1,0,0,0,2776,2769,1,0,0,0,2776,2773,1,0,0,0,2777,373,1,0,0,
        0,2778,2779,7,31,0,0,2779,375,1,0,0,0,2780,2781,7,32,0,0,2781,377,
        1,0,0,0,353,381,388,412,425,429,433,442,447,451,457,459,464,468,
        472,479,484,490,494,503,510,514,519,521,526,529,536,540,545,549,
        552,556,564,568,572,580,584,593,596,599,605,612,623,628,633,638,
        643,652,655,658,662,688,714,723,733,736,750,768,770,779,790,799,
        806,810,817,823,826,831,838,852,865,870,875,881,917,920,926,929,
        935,941,953,955,966,974,979,983,988,995,999,1003,1009,1013,1017,
        1026,1029,1032,1040,1054,1061,1074,1080,1085,1088,1091,1096,1100,
        1109,1114,1120,1124,1128,1133,1136,1144,1147,1150,1162,1165,1168,
        1173,1177,1193,1198,1205,1208,1214,1217,1224,1227,1231,1236,1239,
        1246,1249,1273,1287,1291,1295,1315,1317,1319,1328,1330,1339,1341,
        1350,1352,1357,1366,1375,1384,1395,1401,1406,1409,1422,1432,1436,
        1441,1452,1457,1490,1498,1503,1507,1513,1518,1521,1526,1531,1536,
        1540,1549,1552,1556,1563,1572,1576,1580,1587,1590,1600,1607,1612,
        1617,1622,1628,1631,1640,1643,1646,1652,1657,1667,1670,1673,1677,
        1687,1690,1696,1702,1705,1708,1712,1722,1733,1738,1741,1745,1752,
        1762,1774,1780,1782,1791,1794,1801,1811,1817,1825,1836,1846,1857,
        1859,1865,1870,1880,1883,1889,1891,1899,1905,1908,1910,1922,1929,
        1933,1937,1941,1944,1951,1960,1963,1966,1971,1974,1983,1990,2001,
        2004,2008,2012,2021,2024,2031,2045,2049,2053,2057,2061,2065,2069,
        2073,2083,2094,2099,2112,2114,2120,2124,2126,2134,2141,2146,2159,
        2165,2173,2180,2184,2192,2194,2205,2213,2222,2228,2233,2239,2245,
        2250,2255,2261,2272,2274,2301,2307,2311,2323,2333,2336,2341,2348,
        2351,2360,2363,2367,2370,2382,2385,2404,2408,2416,2420,2445,2448,
        2457,2463,2469,2475,2486,2495,2517,2520,2523,2533,2535,2542,2544,
        2566,2595,2602,2610,2615,2617,2623,2630,2636,2653,2661,2670,2673,
        2676,2696,2707,2714,2721,2735,2737,2746,2755,2762,2765,2769,2773,
        2776
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!ImpalaSqlParser.__ATN) {
            ImpalaSqlParser.__ATN = new antlr.ATNDeserializer().deserialize(ImpalaSqlParser._serializedATN);
        }

        return ImpalaSqlParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(ImpalaSqlParser.literalNames, ImpalaSqlParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return ImpalaSqlParser.vocabulary;
    }

    private static readonly decisionsToDFA = ImpalaSqlParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.EOF, 0)!;
    }
    public singleStatement(): SingleStatementContext[];
    public singleStatement(i: number): SingleStatementContext | null;
    public singleStatement(i?: number): SingleStatementContext[] | SingleStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleStatementContext);
        }

        return this.getRuleContext(i, SingleStatementContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_program;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SingleStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sqlStatement(): SqlStatementContext {
        return this.getRuleContext(0, SqlStatementContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.SEMICOLON, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_singleStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSingleStatement) {
             listener.enterSingleStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSingleStatement) {
             listener.exitSingleStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSingleStatement) {
            return visitor.visitSingleStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SqlStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public queryStatement(): QueryStatementContext | null {
        return this.getRuleContext(0, QueryStatementContext);
    }
    public useStatement(): UseStatementContext | null {
        return this.getRuleContext(0, UseStatementContext);
    }
    public createStatement(): CreateStatementContext | null {
        return this.getRuleContext(0, CreateStatementContext);
    }
    public alterStatement(): AlterStatementContext | null {
        return this.getRuleContext(0, AlterStatementContext);
    }
    public truncateTableStatement(): TruncateTableStatementContext | null {
        return this.getRuleContext(0, TruncateTableStatementContext);
    }
    public describeStatement(): DescribeStatementContext | null {
        return this.getRuleContext(0, DescribeStatementContext);
    }
    public computeStatement(): ComputeStatementContext | null {
        return this.getRuleContext(0, ComputeStatementContext);
    }
    public dropStatement(): DropStatementContext | null {
        return this.getRuleContext(0, DropStatementContext);
    }
    public grantStatement(): GrantStatementContext | null {
        return this.getRuleContext(0, GrantStatementContext);
    }
    public revokeStatement(): RevokeStatementContext | null {
        return this.getRuleContext(0, RevokeStatementContext);
    }
    public insertStatement(): InsertStatementContext | null {
        return this.getRuleContext(0, InsertStatementContext);
    }
    public deleteStatement(): DeleteStatementContext | null {
        return this.getRuleContext(0, DeleteStatementContext);
    }
    public updateStatement(): UpdateStatementContext | null {
        return this.getRuleContext(0, UpdateStatementContext);
    }
    public upsertStatement(): UpsertStatementContext | null {
        return this.getRuleContext(0, UpsertStatementContext);
    }
    public showStatement(): ShowStatementContext | null {
        return this.getRuleContext(0, ShowStatementContext);
    }
    public addCommentStatement(): AddCommentStatementContext | null {
        return this.getRuleContext(0, AddCommentStatementContext);
    }
    public explainStatement(): ExplainStatementContext | null {
        return this.getRuleContext(0, ExplainStatementContext);
    }
    public setStatement(): SetStatementContext | null {
        return this.getRuleContext(0, SetStatementContext);
    }
    public shutdownStatement(): ShutdownStatementContext | null {
        return this.getRuleContext(0, ShutdownStatementContext);
    }
    public invalidateMetaStatement(): InvalidateMetaStatementContext | null {
        return this.getRuleContext(0, InvalidateMetaStatementContext);
    }
    public loadDataStatement(): LoadDataStatementContext | null {
        return this.getRuleContext(0, LoadDataStatementContext);
    }
    public refreshStatement(): RefreshStatementContext | null {
        return this.getRuleContext(0, RefreshStatementContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_sqlStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSqlStatement) {
             listener.enterSqlStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSqlStatement) {
             listener.exitSqlStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSqlStatement) {
            return visitor.visitSqlStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UseStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_USE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_USE, 0)!;
    }
    public databaseNamePath(): DatabaseNamePathContext {
        return this.getRuleContext(0, DatabaseNamePathContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_useStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterUseStatement) {
             listener.enterUseStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitUseStatement) {
             listener.exitUseStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitUseStatement) {
            return visitor.visitUseStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public createSchema(): CreateSchemaContext | null {
        return this.getRuleContext(0, CreateSchemaContext);
    }
    public createRole(): CreateRoleContext | null {
        return this.getRuleContext(0, CreateRoleContext);
    }
    public createAggregateFunction(): CreateAggregateFunctionContext | null {
        return this.getRuleContext(0, CreateAggregateFunctionContext);
    }
    public createFunction(): CreateFunctionContext | null {
        return this.getRuleContext(0, CreateFunctionContext);
    }
    public createView(): CreateViewContext | null {
        return this.getRuleContext(0, CreateViewContext);
    }
    public createKuduTableAsSelect(): CreateKuduTableAsSelectContext | null {
        return this.getRuleContext(0, CreateKuduTableAsSelectContext);
    }
    public createTableLike(): CreateTableLikeContext | null {
        return this.getRuleContext(0, CreateTableLikeContext);
    }
    public createTableSelect(): CreateTableSelectContext | null {
        return this.getRuleContext(0, CreateTableSelectContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_createStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterCreateStatement) {
             listener.enterCreateStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitCreateStatement) {
             listener.exitCreateStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCreateStatement) {
            return visitor.visitCreateStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateTableSelectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNameCreate(): TableNameCreateContext {
        return this.getRuleContext(0, TableNameCreateContext)!;
    }
    public createCommonItem(): CreateCommonItemContext {
        return this.getRuleContext(0, CreateCommonItemContext)!;
    }
    public KW_EXTERNAL(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_EXTERNAL, 0);
    }
    public ifNotExists(): IfNotExistsContext | null {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    public columnDefinition(): ColumnDefinitionContext[];
    public columnDefinition(i: number): ColumnDefinitionContext | null;
    public columnDefinition(i?: number): ColumnDefinitionContext[] | ColumnDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnDefinitionContext);
        }

        return this.getRuleContext(i, ColumnDefinitionContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    public KW_PARTITIONED(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PARTITIONED, 0);
    }
    public KW_BY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_BY, 0);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_AS, 0);
    }
    public queryStatement(): QueryStatementContext | null {
        return this.getRuleContext(0, QueryStatementContext);
    }
    public columnAliases(): ColumnAliasesContext | null {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    public partitionedBy(): PartitionedByContext | null {
        return this.getRuleContext(0, PartitionedByContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public constraintSpecification(): ConstraintSpecificationContext | null {
        return this.getRuleContext(0, ConstraintSpecificationContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_createTableSelect;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterCreateTableSelect) {
             listener.enterCreateTableSelect(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitCreateTableSelect) {
             listener.exitCreateTableSelect(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCreateTableSelect) {
            return visitor.visitCreateTableSelect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateTableLikeContext extends antlr.ParserRuleContext {
    public _parquet?: StringLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNameCreate(): TableNameCreateContext {
        return this.getRuleContext(0, TableNameCreateContext)!;
    }
    public KW_LIKE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_LIKE, 0)!;
    }
    public createCommonItem(): CreateCommonItemContext {
        return this.getRuleContext(0, CreateCommonItemContext)!;
    }
    public tableNamePath(): TableNamePathContext | null {
        return this.getRuleContext(0, TableNamePathContext);
    }
    public KW_PARQUET(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PARQUET, 0);
    }
    public KW_EXTERNAL(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_EXTERNAL, 0);
    }
    public ifNotExists(): IfNotExistsContext | null {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public KW_PARTITIONED(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PARTITIONED, 0);
    }
    public KW_BY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_BY, 0);
    }
    public partitionedBy(): PartitionedByContext | null {
        return this.getRuleContext(0, PartitionedByContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_createTableLike;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterCreateTableLike) {
             listener.enterCreateTableLike(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitCreateTableLike) {
             listener.exitCreateTableLike(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCreateTableLike) {
            return visitor.visitCreateTableLike(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateKuduTableAsSelectContext extends antlr.ParserRuleContext {
    public _tblProp?: PropertiesContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNameCreate(): TableNameCreateContext {
        return this.getRuleContext(0, TableNameCreateContext)!;
    }
    public KW_STORED(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_STORED, 0)!;
    }
    public KW_AS(): antlr.TerminalNode[];
    public KW_AS(i: number): antlr.TerminalNode | null;
    public KW_AS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.KW_AS);
    	} else {
    		return this.getToken(ImpalaSqlParser.KW_AS, i);
    	}
    }
    public KW_KUDU(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_KUDU, 0)!;
    }
    public KW_EXTERNAL(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_EXTERNAL, 0);
    }
    public ifNotExists(): IfNotExistsContext | null {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    public kuduTableElement(): KuduTableElementContext[];
    public kuduTableElement(i: number): KuduTableElementContext | null;
    public kuduTableElement(i?: number): KuduTableElementContext[] | KuduTableElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(KuduTableElementContext);
        }

        return this.getRuleContext(i, KuduTableElementContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    public KW_PRIMARY(): antlr.TerminalNode[];
    public KW_PRIMARY(i: number): antlr.TerminalNode | null;
    public KW_PRIMARY(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.KW_PRIMARY);
    	} else {
    		return this.getToken(ImpalaSqlParser.KW_PRIMARY, i);
    	}
    }
    public KW_KEY(): antlr.TerminalNode[];
    public KW_KEY(i: number): antlr.TerminalNode | null;
    public KW_KEY(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.KW_KEY);
    	} else {
    		return this.getToken(ImpalaSqlParser.KW_KEY, i);
    	}
    }
    public KW_PARTITION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    public KW_BY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_BY, 0);
    }
    public kuduPartitionClause(): KuduPartitionClauseContext | null {
        return this.getRuleContext(0, KuduPartitionClauseContext);
    }
    public commentClause(): CommentClauseContext | null {
        return this.getRuleContext(0, CommentClauseContext);
    }
    public KW_TBLPROPERTIES(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_TBLPROPERTIES, 0);
    }
    public queryStatement(): QueryStatementContext | null {
        return this.getRuleContext(0, QueryStatementContext);
    }
    public properties(): PropertiesContext | null {
        return this.getRuleContext(0, PropertiesContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public columnAliases(): ColumnAliasesContext[];
    public columnAliases(i: number): ColumnAliasesContext | null;
    public columnAliases(i?: number): ColumnAliasesContext[] | ColumnAliasesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnAliasesContext);
        }

        return this.getRuleContext(i, ColumnAliasesContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_createKuduTableAsSelect;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterCreateKuduTableAsSelect) {
             listener.enterCreateKuduTableAsSelect(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitCreateKuduTableAsSelect) {
             listener.exitCreateKuduTableAsSelect(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCreateKuduTableAsSelect) {
            return visitor.visitCreateKuduTableAsSelect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateViewContext extends antlr.ParserRuleContext {
    public _tblProp?: PropertiesContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_VIEW, 0)!;
    }
    public viewNameCreate(): ViewNameCreateContext {
        return this.getRuleContext(0, ViewNameCreateContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_AS, 0)!;
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public ifNotExists(): IfNotExistsContext | null {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    public viewColumns(): ViewColumnsContext | null {
        return this.getRuleContext(0, ViewColumnsContext);
    }
    public commentClause(): CommentClauseContext | null {
        return this.getRuleContext(0, CommentClauseContext);
    }
    public KW_TBLPROPERTIES(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_TBLPROPERTIES, 0);
    }
    public properties(): PropertiesContext | null {
        return this.getRuleContext(0, PropertiesContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_createView;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterCreateView) {
             listener.enterCreateView(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitCreateView) {
             listener.exitCreateView(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCreateView) {
            return visitor.visitCreateView(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateSchemaContext extends antlr.ParserRuleContext {
    public _location?: StringLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0)!;
    }
    public databaseNameCreate(): DatabaseNameCreateContext {
        return this.getRuleContext(0, DatabaseNameCreateContext)!;
    }
    public KW_SCHEMA(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SCHEMA, 0);
    }
    public KW_DATABASE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DATABASE, 0);
    }
    public ifNotExists(): IfNotExistsContext | null {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    public commentClause(): CommentClauseContext | null {
        return this.getRuleContext(0, CommentClauseContext);
    }
    public KW_LOCATION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_LOCATION, 0);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_createSchema;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterCreateSchema) {
             listener.enterCreateSchema(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitCreateSchema) {
             listener.exitCreateSchema(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCreateSchema) {
            return visitor.visitCreateSchema(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateRoleContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0)!;
    }
    public KW_ROLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_createRole;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterCreateRole) {
             listener.enterCreateRole(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitCreateRole) {
             listener.exitCreateRole(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCreateRole) {
            return visitor.visitCreateRole(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateAggregateFunctionContext extends antlr.ParserRuleContext {
    public _returnType?: TypeContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0)!;
    }
    public KW_FUNCTION(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_FUNCTION, 0)!;
    }
    public functionNameCreate(): FunctionNameCreateContext {
        return this.getRuleContext(0, FunctionNameCreateContext)!;
    }
    public KW_RETURNS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_RETURNS, 0)!;
    }
    public KW_LOCATION(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_LOCATION, 0)!;
    }
    public STRING(): antlr.TerminalNode[];
    public STRING(i: number): antlr.TerminalNode | null;
    public STRING(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.STRING);
    	} else {
    		return this.getToken(ImpalaSqlParser.STRING, i);
    	}
    }
    public KW_UPDATE_FN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_UPDATE_FN, 0)!;
    }
    public EQ(): antlr.TerminalNode[];
    public EQ(i: number): antlr.TerminalNode | null;
    public EQ(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.EQ);
    	} else {
    		return this.getToken(ImpalaSqlParser.EQ, i);
    	}
    }
    public KW_MERGE_FN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_MERGE_FN, 0)!;
    }
    public type_(): TypeContext[];
    public type_(i: number): TypeContext | null;
    public type_(i?: number): TypeContext[] | TypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }

        return this.getRuleContext(i, TypeContext);
    }
    public KW_AGGREGATE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_AGGREGATE, 0);
    }
    public ifNotExists(): IfNotExistsContext | null {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    public KW_INTERMEDIATE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_INTERMEDIATE, 0);
    }
    public KW_INIT_FN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_INIT_FN, 0);
    }
    public KW_PREPARE_FN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PREPARE_FN, 0);
    }
    public KW_CLOSEFN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_CLOSEFN, 0);
    }
    public KW_SERIALIZE_FN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SERIALIZE_FN, 0);
    }
    public KW_FINALIZE_FN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_FINALIZE_FN, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_createAggregateFunction;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterCreateAggregateFunction) {
             listener.enterCreateAggregateFunction(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitCreateAggregateFunction) {
             listener.exitCreateAggregateFunction(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCreateAggregateFunction) {
            return visitor.visitCreateAggregateFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateFunctionContext extends antlr.ParserRuleContext {
    public _returnType?: TypeContext;
    public _symbol_?: StringLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0)!;
    }
    public KW_FUNCTION(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_FUNCTION, 0)!;
    }
    public functionNameCreate(): FunctionNameCreateContext {
        return this.getRuleContext(0, FunctionNameCreateContext)!;
    }
    public KW_LOCATION(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_LOCATION, 0)!;
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.STRING, 0)!;
    }
    public KW_SYMBOL(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SYMBOL, 0)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.EQ, 0)!;
    }
    public stringLiteral(): StringLiteralContext {
        return this.getRuleContext(0, StringLiteralContext)!;
    }
    public ifNotExists(): IfNotExistsContext | null {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    public KW_RETURNS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_RETURNS, 0);
    }
    public type_(): TypeContext[];
    public type_(i: number): TypeContext | null;
    public type_(i?: number): TypeContext[] | TypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }

        return this.getRuleContext(i, TypeContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_createFunction;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterCreateFunction) {
             listener.enterCreateFunction(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitCreateFunction) {
             listener.exitCreateFunction(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCreateFunction) {
            return visitor.visitCreateFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public alterDatabase(): AlterDatabaseContext | null {
        return this.getRuleContext(0, AlterDatabaseContext);
    }
    public alterUnSetOrSetViewTblproperties(): AlterUnSetOrSetViewTblpropertiesContext | null {
        return this.getRuleContext(0, AlterUnSetOrSetViewTblpropertiesContext);
    }
    public renameTable(): RenameTableContext | null {
        return this.getRuleContext(0, RenameTableContext);
    }
    public alterViewOwner(): AlterViewOwnerContext | null {
        return this.getRuleContext(0, AlterViewOwnerContext);
    }
    public alterView(): AlterViewContext | null {
        return this.getRuleContext(0, AlterViewContext);
    }
    public renameView(): RenameViewContext | null {
        return this.getRuleContext(0, RenameViewContext);
    }
    public dropPartitionByRangeOrValue(): DropPartitionByRangeOrValueContext | null {
        return this.getRuleContext(0, DropPartitionByRangeOrValueContext);
    }
    public alterFormat(): AlterFormatContext | null {
        return this.getRuleContext(0, AlterFormatContext);
    }
    public recoverPartitions(): RecoverPartitionsContext | null {
        return this.getRuleContext(0, RecoverPartitionsContext);
    }
    public addPartitionByRangeOrValue(): AddPartitionByRangeOrValueContext | null {
        return this.getRuleContext(0, AddPartitionByRangeOrValueContext);
    }
    public alterTableNonKuduOrKuduOnly(): AlterTableNonKuduOrKuduOnlyContext | null {
        return this.getRuleContext(0, AlterTableNonKuduOrKuduOnlyContext);
    }
    public addSingleColumn(): AddSingleColumnContext | null {
        return this.getRuleContext(0, AddSingleColumnContext);
    }
    public replaceOrAddColumns(): ReplaceOrAddColumnsContext | null {
        return this.getRuleContext(0, ReplaceOrAddColumnsContext);
    }
    public changeColumnDefine(): ChangeColumnDefineContext | null {
        return this.getRuleContext(0, ChangeColumnDefineContext);
    }
    public alterStatsKey(): AlterStatsKeyContext | null {
        return this.getRuleContext(0, AlterStatsKeyContext);
    }
    public alterPartitionCache(): AlterPartitionCacheContext | null {
        return this.getRuleContext(0, AlterPartitionCacheContext);
    }
    public alterDropSingleColumn(): AlterDropSingleColumnContext | null {
        return this.getRuleContext(0, AlterDropSingleColumnContext);
    }
    public alterTableOwner(): AlterTableOwnerContext | null {
        return this.getRuleContext(0, AlterTableOwnerContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_alterStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAlterStatement) {
             listener.enterAlterStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAlterStatement) {
             listener.exitAlterStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAlterStatement) {
            return visitor.visitAlterStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterDatabaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0)!;
    }
    public KW_DATABASE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_DATABASE, 0)!;
    }
    public databaseNamePath(): DatabaseNamePathContext {
        return this.getRuleContext(0, DatabaseNamePathContext)!;
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SET, 0)!;
    }
    public KW_OWNER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_OWNER, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_USER(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_USER, 0);
    }
    public KW_ROLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_alterDatabase;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAlterDatabase) {
             listener.enterAlterDatabase(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAlterDatabase) {
             listener.exitAlterDatabase(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAlterDatabase) {
            return visitor.visitAlterDatabase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterStatsKeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SET, 0)!;
    }
    public KW_COLUMN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_COLUMN, 0)!;
    }
    public KW_STATS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_STATS, 0)!;
    }
    public columnNamePath(): ColumnNamePathContext {
        return this.getRuleContext(0, ColumnNamePathContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public statsKey(): StatsKeyContext[];
    public statsKey(i: number): StatsKeyContext | null;
    public statsKey(i?: number): StatsKeyContext[] | StatsKeyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatsKeyContext);
        }

        return this.getRuleContext(i, StatsKeyContext);
    }
    public EQ(): antlr.TerminalNode[];
    public EQ(i: number): antlr.TerminalNode | null;
    public EQ(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.EQ);
    	} else {
    		return this.getToken(ImpalaSqlParser.EQ, i);
    	}
    }
    public stringLiteral(): StringLiteralContext[];
    public stringLiteral(i: number): StringLiteralContext | null;
    public stringLiteral(i?: number): StringLiteralContext[] | StringLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringLiteralContext);
        }

        return this.getRuleContext(i, StringLiteralContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_alterStatsKey;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAlterStatsKey) {
             listener.enterAlterStatsKey(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAlterStatsKey) {
             listener.exitAlterStatsKey(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAlterStatsKey) {
            return visitor.visitAlterStatsKey(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterPartitionCacheContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SET, 0)!;
    }
    public KW_UNCACHED(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_UNCACHED, 0);
    }
    public KW_PARTITION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public KW_CACHED(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_CACHED, 0);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_IN, 0);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_WITH, 0);
    }
    public KW_REPLICATION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_REPLICATION, 0);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.EQ, 0);
    }
    public number(): NumberContext | null {
        return this.getRuleContext(0, NumberContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_alterPartitionCache;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAlterPartitionCache) {
             listener.enterAlterPartitionCache(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAlterPartitionCache) {
             listener.exitAlterPartitionCache(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAlterPartitionCache) {
            return visitor.visitAlterPartitionCache(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ChangeColumnDefineContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_CHANGE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_CHANGE, 0)!;
    }
    public columnNamePath(): ColumnNamePathContext {
        return this.getRuleContext(0, ColumnNamePathContext)!;
    }
    public columnSpecWithKudu(): ColumnSpecWithKuduContext {
        return this.getRuleContext(0, ColumnSpecWithKuduContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_changeColumnDefine;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterChangeColumnDefine) {
             listener.enterChangeColumnDefine(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitChangeColumnDefine) {
             listener.exitChangeColumnDefine(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitChangeColumnDefine) {
            return visitor.visitChangeColumnDefine(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterDropSingleColumnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0)!;
    }
    public columnNamePath(): ColumnNamePathContext {
        return this.getRuleContext(0, ColumnNamePathContext)!;
    }
    public KW_COLUMN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_COLUMN, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_alterDropSingleColumn;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAlterDropSingleColumn) {
             listener.enterAlterDropSingleColumn(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAlterDropSingleColumn) {
             listener.exitAlterDropSingleColumn(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAlterDropSingleColumn) {
            return visitor.visitAlterDropSingleColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterTableOwnerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SET, 0)!;
    }
    public KW_OWNER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_OWNER, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_USER(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_USER, 0);
    }
    public KW_ROLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_alterTableOwner;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAlterTableOwner) {
             listener.enterAlterTableOwner(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAlterTableOwner) {
             listener.exitAlterTableOwner(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableOwner) {
            return visitor.visitAlterTableOwner(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReplaceOrAddColumnsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_COLUMNS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_COLUMNS, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public columnSpecWithKudu(): ColumnSpecWithKuduContext[];
    public columnSpecWithKudu(i: number): ColumnSpecWithKuduContext | null;
    public columnSpecWithKudu(i?: number): ColumnSpecWithKuduContext[] | ColumnSpecWithKuduContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnSpecWithKuduContext);
        }

        return this.getRuleContext(i, ColumnSpecWithKuduContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public KW_REPLACE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_REPLACE, 0);
    }
    public KW_ADD(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ADD, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public ifNotExists(): IfNotExistsContext | null {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_replaceOrAddColumns;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterReplaceOrAddColumns) {
             listener.enterReplaceOrAddColumns(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitReplaceOrAddColumns) {
             listener.exitReplaceOrAddColumns(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitReplaceOrAddColumns) {
            return visitor.visitReplaceOrAddColumns(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AddSingleColumnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_ADD(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ADD, 0)!;
    }
    public KW_COLUMN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_COLUMN, 0)!;
    }
    public createColumnSpecWithKudu(): CreateColumnSpecWithKuduContext {
        return this.getRuleContext(0, CreateColumnSpecWithKuduContext)!;
    }
    public ifNotExists(): IfNotExistsContext | null {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_addSingleColumn;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAddSingleColumn) {
             listener.enterAddSingleColumn(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAddSingleColumn) {
             listener.exitAddSingleColumn(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAddSingleColumn) {
            return visitor.visitAddSingleColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterTableNonKuduOrKuduOnlyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode[];
    public KW_ALTER(i: number): antlr.TerminalNode | null;
    public KW_ALTER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.KW_ALTER);
    	} else {
    		return this.getToken(ImpalaSqlParser.KW_ALTER, i);
    	}
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public columnNamePath(): ColumnNamePathContext {
        return this.getRuleContext(0, ColumnNamePathContext)!;
    }
    public KW_SET(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SET, 0);
    }
    public KW_DROP(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0);
    }
    public KW_DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DEFAULT, 0);
    }
    public KW_COLUMN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_COLUMN, 0);
    }
    public kuduStorageAttr(): KuduStorageAttrContext | null {
        return this.getRuleContext(0, KuduStorageAttrContext);
    }
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_alterTableNonKuduOrKuduOnly;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAlterTableNonKuduOrKuduOnly) {
             listener.enterAlterTableNonKuduOrKuduOnly(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAlterTableNonKuduOrKuduOnly) {
             listener.exitAlterTableNonKuduOrKuduOnly(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableNonKuduOrKuduOnly) {
            return visitor.visitAlterTableNonKuduOrKuduOnly(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AddPartitionByRangeOrValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_ADD(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ADD, 0)!;
    }
    public KW_PARTITION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public KW_RANGE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_RANGE, 0);
    }
    public kuduPartitionSpec(): KuduPartitionSpecContext | null {
        return this.getRuleContext(0, KuduPartitionSpecContext);
    }
    public ifNotExists(): IfNotExistsContext | null {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    public KW_LOCATION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_LOCATION, 0);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public cacheSpec(): CacheSpecContext | null {
        return this.getRuleContext(0, CacheSpecContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_addPartitionByRangeOrValue;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAddPartitionByRangeOrValue) {
             listener.enterAddPartitionByRangeOrValue(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAddPartitionByRangeOrValue) {
             listener.exitAddPartitionByRangeOrValue(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAddPartitionByRangeOrValue) {
            return visitor.visitAddPartitionByRangeOrValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterFormatContext extends antlr.ParserRuleContext {
    public _tblProp?: PropertiesContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SET, 0)!;
    }
    public KW_PARTITION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public KW_FILEFORMAT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_FILEFORMAT, 0);
    }
    public fileFormat(): FileFormatContext | null {
        return this.getRuleContext(0, FileFormatContext);
    }
    public KW_ROW(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ROW, 0);
    }
    public KW_FORMAT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_FORMAT, 0);
    }
    public rowFormat(): RowFormatContext | null {
        return this.getRuleContext(0, RowFormatContext);
    }
    public KW_LOCATION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_LOCATION, 0);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public KW_TBLPROPERTIES(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_TBLPROPERTIES, 0);
    }
    public KW_SERDEPROPERTIES(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SERDEPROPERTIES, 0);
    }
    public properties(): PropertiesContext | null {
        return this.getRuleContext(0, PropertiesContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_alterFormat;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAlterFormat) {
             listener.enterAlterFormat(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAlterFormat) {
             listener.exitAlterFormat(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAlterFormat) {
            return visitor.visitAlterFormat(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RecoverPartitionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_RECOVER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_RECOVER, 0)!;
    }
    public KW_PARTITIONS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_PARTITIONS, 0)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_recoverPartitions;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterRecoverPartitions) {
             listener.enterRecoverPartitions(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitRecoverPartitions) {
             listener.exitRecoverPartitions(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRecoverPartitions) {
            return visitor.visitRecoverPartitions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropPartitionByRangeOrValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0)!;
    }
    public KW_PARTITION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public KW_RANGE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_RANGE, 0);
    }
    public kuduPartitionSpec(): KuduPartitionSpecContext | null {
        return this.getRuleContext(0, KuduPartitionSpecContext);
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public KW_PURGE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PURGE, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_dropPartitionByRangeOrValue;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDropPartitionByRangeOrValue) {
             listener.enterDropPartitionByRangeOrValue(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDropPartitionByRangeOrValue) {
             listener.exitDropPartitionByRangeOrValue(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDropPartitionByRangeOrValue) {
            return visitor.visitDropPartitionByRangeOrValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterViewContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_VIEW, 0)!;
    }
    public viewNamePath(): ViewNamePathContext {
        return this.getRuleContext(0, ViewNamePathContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_AS, 0)!;
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public viewColumns(): ViewColumnsContext | null {
        return this.getRuleContext(0, ViewColumnsContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_alterView;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAlterView) {
             listener.enterAlterView(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAlterView) {
             listener.exitAlterView(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAlterView) {
            return visitor.visitAlterView(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RenameViewContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_VIEW, 0)!;
    }
    public viewNamePath(): ViewNamePathContext[];
    public viewNamePath(i: number): ViewNamePathContext | null;
    public viewNamePath(i?: number): ViewNamePathContext[] | ViewNamePathContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ViewNamePathContext);
        }

        return this.getRuleContext(i, ViewNamePathContext);
    }
    public KW_RENAME(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_RENAME, 0)!;
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TO, 0)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_renameView;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterRenameView) {
             listener.enterRenameView(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitRenameView) {
             listener.exitRenameView(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRenameView) {
            return visitor.visitRenameView(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterViewOwnerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_VIEW, 0)!;
    }
    public viewNamePath(): ViewNamePathContext {
        return this.getRuleContext(0, ViewNamePathContext)!;
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SET, 0)!;
    }
    public KW_OWNER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_OWNER, 0)!;
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public KW_USER(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_USER, 0);
    }
    public KW_ROLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_alterViewOwner;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAlterViewOwner) {
             listener.enterAlterViewOwner(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAlterViewOwner) {
             listener.exitAlterViewOwner(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAlterViewOwner) {
            return visitor.visitAlterViewOwner(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RenameTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNamePath(): TableNamePathContext[];
    public tableNamePath(i: number): TableNamePathContext | null;
    public tableNamePath(i?: number): TableNamePathContext[] | TableNamePathContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TableNamePathContext);
        }

        return this.getRuleContext(i, TableNamePathContext);
    }
    public KW_RENAME(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_RENAME, 0)!;
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TO, 0)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_renameTable;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterRenameTable) {
             listener.enterRenameTable(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitRenameTable) {
             listener.exitRenameTable(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRenameTable) {
            return visitor.visitRenameTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterUnSetOrSetViewTblpropertiesContext extends antlr.ParserRuleContext {
    public _tblProp?: PropertiesContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_VIEW, 0)!;
    }
    public viewNamePath(): ViewNamePathContext {
        return this.getRuleContext(0, ViewNamePathContext)!;
    }
    public KW_TBLPROPERTIES(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TBLPROPERTIES, 0)!;
    }
    public KW_UNSET(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_UNSET, 0);
    }
    public KW_SET(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SET, 0);
    }
    public properties(): PropertiesContext {
        return this.getRuleContext(0, PropertiesContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_alterUnSetOrSetViewTblproperties;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAlterUnSetOrSetViewTblproperties) {
             listener.enterAlterUnSetOrSetViewTblproperties(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAlterUnSetOrSetViewTblproperties) {
             listener.exitAlterUnSetOrSetViewTblproperties(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAlterUnSetOrSetViewTblproperties) {
            return visitor.visitAlterUnSetOrSetViewTblproperties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TruncateTableStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TRUNCATE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TRUNCATE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_TABLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_truncateTableStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterTruncateTableStatement) {
             listener.enterTruncateTableStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitTruncateTableStatement) {
             listener.exitTruncateTableStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTruncateTableStatement) {
            return visitor.visitTruncateTableStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DescribeStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DESCRIBE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_DESCRIBE, 0)!;
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public KW_DATABASE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DATABASE, 0);
    }
    public KW_FORMATTED(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_FORMATTED, 0);
    }
    public KW_EXTENDED(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_EXTENDED, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_describeStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDescribeStatement) {
             listener.enterDescribeStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDescribeStatement) {
             listener.exitDescribeStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDescribeStatement) {
            return visitor.visitDescribeStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComputeStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public computeStats(): ComputeStatsContext | null {
        return this.getRuleContext(0, ComputeStatsContext);
    }
    public computeIncrementalStats(): ComputeIncrementalStatsContext | null {
        return this.getRuleContext(0, ComputeIncrementalStatsContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_computeStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterComputeStatement) {
             listener.enterComputeStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitComputeStatement) {
             listener.exitComputeStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitComputeStatement) {
            return visitor.visitComputeStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComputeStatsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_COMPUTE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_COMPUTE, 0)!;
    }
    public KW_STATS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_STATS, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public columnAliases(): ColumnAliasesContext | null {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    public KW_TABLESAMPLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_TABLESAMPLE, 0);
    }
    public KW_SYSTEM(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SYSTEM, 0);
    }
    public LPAREN(): antlr.TerminalNode[];
    public LPAREN(i: number): antlr.TerminalNode | null;
    public LPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.LPAREN);
    	} else {
    		return this.getToken(ImpalaSqlParser.LPAREN, i);
    	}
    }
    public number_(): NumberContext[];
    public number_(i: number): NumberContext | null;
    public number_(i?: number): NumberContext[] | NumberContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        }

        return this.getRuleContext(i, NumberContext);
    }
    public RPAREN(): antlr.TerminalNode[];
    public RPAREN(i: number): antlr.TerminalNode | null;
    public RPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.RPAREN);
    	} else {
    		return this.getToken(ImpalaSqlParser.RPAREN, i);
    	}
    }
    public KW_REPEATABLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_REPEATABLE, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_computeStats;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterComputeStats) {
             listener.enterComputeStats(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitComputeStats) {
             listener.exitComputeStats(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitComputeStats) {
            return visitor.visitComputeStats(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComputeIncrementalStatsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_COMPUTE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_COMPUTE, 0)!;
    }
    public KW_INCREMENTAL(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_INCREMENTAL, 0)!;
    }
    public KW_STATS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_STATS, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_PARTITION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_computeIncrementalStats;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterComputeIncrementalStats) {
             listener.enterComputeIncrementalStats(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitComputeIncrementalStats) {
             listener.exitComputeIncrementalStats(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitComputeIncrementalStats) {
            return visitor.visitComputeIncrementalStats(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public dropRole(): DropRoleContext | null {
        return this.getRuleContext(0, DropRoleContext);
    }
    public dropFunction(): DropFunctionContext | null {
        return this.getRuleContext(0, DropFunctionContext);
    }
    public dropIncrementalStats(): DropIncrementalStatsContext | null {
        return this.getRuleContext(0, DropIncrementalStatsContext);
    }
    public dropView(): DropViewContext | null {
        return this.getRuleContext(0, DropViewContext);
    }
    public dropTable(): DropTableContext | null {
        return this.getRuleContext(0, DropTableContext);
    }
    public dropSchema(): DropSchemaContext | null {
        return this.getRuleContext(0, DropSchemaContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_dropStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDropStatement) {
             listener.enterDropStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDropStatement) {
             listener.exitDropStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDropStatement) {
            return visitor.visitDropStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropSchemaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0)!;
    }
    public databaseNamePath(): DatabaseNamePathContext {
        return this.getRuleContext(0, DatabaseNamePathContext)!;
    }
    public KW_SCHEMA(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SCHEMA, 0);
    }
    public KW_DATABASE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DATABASE, 0);
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public KW_CASCADE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_CASCADE, 0);
    }
    public KW_RESTRICT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_RESTRICT, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_dropSchema;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDropSchema) {
             listener.enterDropSchema(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDropSchema) {
             listener.exitDropSchema(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDropSchema) {
            return visitor.visitDropSchema(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropViewContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_VIEW, 0)!;
    }
    public viewNamePath(): ViewNamePathContext {
        return this.getRuleContext(0, ViewNamePathContext)!;
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_dropView;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDropView) {
             listener.enterDropView(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDropView) {
             listener.exitDropView(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDropView) {
            return visitor.visitDropView(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public KW_PURGE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PURGE, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_dropTable;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDropTable) {
             listener.enterDropTable(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDropTable) {
             listener.exitDropTable(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDropTable) {
            return visitor.visitDropTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropIncrementalStatsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0)!;
    }
    public KW_STATS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_STATS, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_INCREMENTAL(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_INCREMENTAL, 0);
    }
    public KW_PARTITION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_dropIncrementalStats;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDropIncrementalStats) {
             listener.enterDropIncrementalStats(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDropIncrementalStats) {
             listener.exitDropIncrementalStats(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDropIncrementalStats) {
            return visitor.visitDropIncrementalStats(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0)!;
    }
    public KW_FUNCTION(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_FUNCTION, 0)!;
    }
    public functionNamePath(): FunctionNamePathContext {
        return this.getRuleContext(0, FunctionNamePathContext)!;
    }
    public KW_AGGREGATE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_AGGREGATE, 0);
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    public type_(): TypeContext[];
    public type_(i: number): TypeContext | null;
    public type_(i?: number): TypeContext[] | TypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }

        return this.getRuleContext(i, TypeContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_dropFunction;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDropFunction) {
             listener.enterDropFunction(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDropFunction) {
             listener.exitDropFunction(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDropFunction) {
            return visitor.visitDropFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropRoleContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0)!;
    }
    public KW_ROLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_dropRole;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDropRole) {
             listener.enterDropRole(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDropRole) {
             listener.exitDropRole(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDropRole) {
            return visitor.visitDropRole(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GrantStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public grantRole(): GrantRoleContext | null {
        return this.getRuleContext(0, GrantRoleContext);
    }
    public grant(): GrantContext | null {
        return this.getRuleContext(0, GrantContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_grantStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterGrantStatement) {
             listener.enterGrantStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitGrantStatement) {
             listener.exitGrantStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitGrantStatement) {
            return visitor.visitGrantStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GrantRoleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_GRANT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_GRANT, 0)!;
    }
    public KW_ROLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0)!;
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TO, 0)!;
    }
    public KW_GROUP(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_GROUP, 0)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_grantRole;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterGrantRole) {
             listener.enterGrantRole(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitGrantRole) {
             listener.exitGrantRole(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitGrantRole) {
            return visitor.visitGrantRole(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GrantContext extends antlr.ParserRuleContext {
    public _grantee?: PrincipalContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_GRANT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_GRANT, 0)!;
    }
    public privilege(): PrivilegeContext {
        return this.getRuleContext(0, PrivilegeContext)!;
    }
    public KW_ON(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ON, 0)!;
    }
    public objectType(): ObjectTypeContext {
        return this.getRuleContext(0, ObjectTypeContext)!;
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TO, 0)!;
    }
    public principal(): PrincipalContext {
        return this.getRuleContext(0, PrincipalContext)!;
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_grant;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterGrant) {
             listener.enterGrant(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitGrant) {
             listener.exitGrant(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitGrant) {
            return visitor.visitGrant(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RevokeStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public revokeRole(): RevokeRoleContext | null {
        return this.getRuleContext(0, RevokeRoleContext);
    }
    public revoke(): RevokeContext | null {
        return this.getRuleContext(0, RevokeContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_revokeStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterRevokeStatement) {
             listener.enterRevokeStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitRevokeStatement) {
             listener.exitRevokeStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRevokeStatement) {
            return visitor.visitRevokeStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RevokeRoleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_REVOKE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_REVOKE, 0)!;
    }
    public KW_ROLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0)!;
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_FROM, 0)!;
    }
    public KW_GROUP(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_GROUP, 0)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_revokeRole;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterRevokeRole) {
             listener.enterRevokeRole(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitRevokeRole) {
             listener.exitRevokeRole(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRevokeRole) {
            return visitor.visitRevokeRole(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RevokeContext extends antlr.ParserRuleContext {
    public _grantee?: PrincipalContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_REVOKE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_REVOKE, 0)!;
    }
    public privilege(): PrivilegeContext {
        return this.getRuleContext(0, PrivilegeContext)!;
    }
    public KW_ON(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ON, 0)!;
    }
    public objectType(): ObjectTypeContext {
        return this.getRuleContext(0, ObjectTypeContext)!;
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_FROM, 0)!;
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_GRANT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_GRANT, 0);
    }
    public KW_OPTION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_OPTION, 0);
    }
    public KW_FOR(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_FOR, 0);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public principal(): PrincipalContext | null {
        return this.getRuleContext(0, PrincipalContext);
    }
    public KW_ROLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_revoke;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterRevoke) {
             listener.enterRevoke(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitRevoke) {
             listener.exitRevoke(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRevoke) {
            return visitor.visitRevoke(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InsertStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_INSERT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_INSERT, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public KW_INTO(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_INTO, 0);
    }
    public KW_OVERWRITE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_OVERWRITE, 0);
    }
    public with(): WithContext | null {
        return this.getRuleContext(0, WithContext);
    }
    public KW_TABLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    public columnAliases(): ColumnAliasesContext | null {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    public KW_PARTITION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_insertStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterInsertStatement) {
             listener.enterInsertStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitInsertStatement) {
             listener.exitInsertStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitInsertStatement) {
            return visitor.visitInsertStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DeleteStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public delete(): DeleteContext | null {
        return this.getRuleContext(0, DeleteContext);
    }
    public deleteTableRef(): DeleteTableRefContext | null {
        return this.getRuleContext(0, DeleteTableRefContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_deleteStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDeleteStatement) {
             listener.enterDeleteStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDeleteStatement) {
             listener.exitDeleteStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDeleteStatement) {
            return visitor.visitDeleteStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DeleteContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DELETE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_DELETE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_FROM(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_FROM, 0);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_delete;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDelete) {
             listener.enterDelete(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDelete) {
             listener.exitDelete(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDelete) {
            return visitor.visitDelete(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DeleteTableRefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DELETE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_DELETE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_FROM, 0)!;
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public relation(): RelationContext[];
    public relation(i: number): RelationContext | null;
    public relation(i?: number): RelationContext[] | RelationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelationContext);
        }

        return this.getRuleContext(i, RelationContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_AS, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_deleteTableRef;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDeleteTableRef) {
             listener.enterDeleteTableRef(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDeleteTableRef) {
             listener.exitDeleteTableRef(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDeleteTableRef) {
            return visitor.visitDeleteTableRef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UpdateStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_UPDATE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_UPDATE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SET, 0)!;
    }
    public assignmentList(): AssignmentListContext {
        return this.getRuleContext(0, AssignmentListContext)!;
    }
    public KW_FROM(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_FROM, 0);
    }
    public relation(): RelationContext[];
    public relation(i: number): RelationContext | null;
    public relation(i?: number): RelationContext[] | RelationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelationContext);
        }

        return this.getRuleContext(i, RelationContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_updateStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterUpdateStatement) {
             listener.enterUpdateStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitUpdateStatement) {
             listener.exitUpdateStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitUpdateStatement) {
            return visitor.visitUpdateStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UpsertStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_UPSERT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_UPSERT, 0)!;
    }
    public KW_INTO(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_INTO, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public KW_TABLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    public columnAliases(): ColumnAliasesContext | null {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_upsertStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterUpsertStatement) {
             listener.enterUpsertStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitUpsertStatement) {
             listener.exitUpsertStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitUpsertStatement) {
            return visitor.visitUpsertStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public showRoles(): ShowRolesContext | null {
        return this.getRuleContext(0, ShowRolesContext);
    }
    public showRoleGrant(): ShowRoleGrantContext | null {
        return this.getRuleContext(0, ShowRoleGrantContext);
    }
    public showGrants(): ShowGrantsContext | null {
        return this.getRuleContext(0, ShowGrantsContext);
    }
    public showFiles(): ShowFilesContext | null {
        return this.getRuleContext(0, ShowFilesContext);
    }
    public showPartitions(): ShowPartitionsContext | null {
        return this.getRuleContext(0, ShowPartitionsContext);
    }
    public showColumnStats(): ShowColumnStatsContext | null {
        return this.getRuleContext(0, ShowColumnStatsContext);
    }
    public showTableStats(): ShowTableStatsContext | null {
        return this.getRuleContext(0, ShowTableStatsContext);
    }
    public showCreateView(): ShowCreateViewContext | null {
        return this.getRuleContext(0, ShowCreateViewContext);
    }
    public showCreateTable(): ShowCreateTableContext | null {
        return this.getRuleContext(0, ShowCreateTableContext);
    }
    public showFunctions(): ShowFunctionsContext | null {
        return this.getRuleContext(0, ShowFunctionsContext);
    }
    public showTables(): ShowTablesContext | null {
        return this.getRuleContext(0, ShowTablesContext);
    }
    public showSchemas(): ShowSchemasContext | null {
        return this.getRuleContext(0, ShowSchemasContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_showStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterShowStatement) {
             listener.enterShowStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitShowStatement) {
             listener.exitShowStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitShowStatement) {
            return visitor.visitShowStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowSchemasContext extends antlr.ParserRuleContext {
    public _pattern?: StringLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0)!;
    }
    public KW_SCHEMAS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SCHEMAS, 0);
    }
    public KW_DATABASES(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DATABASES, 0);
    }
    public stringLiteral(): StringLiteralContext[];
    public stringLiteral(i: number): StringLiteralContext | null;
    public stringLiteral(i?: number): StringLiteralContext[] | StringLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringLiteralContext);
        }

        return this.getRuleContext(i, StringLiteralContext);
    }
    public KW_LIKE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_LIKE, 0);
    }
    public BITWISEOR(): antlr.TerminalNode[];
    public BITWISEOR(i: number): antlr.TerminalNode | null;
    public BITWISEOR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.BITWISEOR);
    	} else {
    		return this.getToken(ImpalaSqlParser.BITWISEOR, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_showSchemas;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterShowSchemas) {
             listener.enterShowSchemas(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitShowSchemas) {
             listener.exitShowSchemas(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitShowSchemas) {
            return visitor.visitShowSchemas(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowTablesContext extends antlr.ParserRuleContext {
    public _pattern?: StringLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0)!;
    }
    public KW_TABLES(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLES, 0)!;
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_IN, 0);
    }
    public tableNamePath(): TableNamePathContext | null {
        return this.getRuleContext(0, TableNamePathContext);
    }
    public stringLiteral(): StringLiteralContext[];
    public stringLiteral(i: number): StringLiteralContext | null;
    public stringLiteral(i?: number): StringLiteralContext[] | StringLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringLiteralContext);
        }

        return this.getRuleContext(i, StringLiteralContext);
    }
    public KW_LIKE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_LIKE, 0);
    }
    public BITWISEOR(): antlr.TerminalNode[];
    public BITWISEOR(i: number): antlr.TerminalNode | null;
    public BITWISEOR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.BITWISEOR);
    	} else {
    		return this.getToken(ImpalaSqlParser.BITWISEOR, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_showTables;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterShowTables) {
             listener.enterShowTables(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitShowTables) {
             listener.exitShowTables(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitShowTables) {
            return visitor.visitShowTables(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowFunctionsContext extends antlr.ParserRuleContext {
    public _pattern?: StringLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0)!;
    }
    public KW_FUNCTIONS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_FUNCTIONS, 0)!;
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_IN, 0);
    }
    public databaseNamePath(): DatabaseNamePathContext | null {
        return this.getRuleContext(0, DatabaseNamePathContext);
    }
    public KW_AGGREGATE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_AGGREGATE, 0);
    }
    public KW_ANALYTIC(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ANALYTIC, 0);
    }
    public stringLiteral(): StringLiteralContext[];
    public stringLiteral(i: number): StringLiteralContext | null;
    public stringLiteral(i?: number): StringLiteralContext[] | StringLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringLiteralContext);
        }

        return this.getRuleContext(i, StringLiteralContext);
    }
    public KW_LIKE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_LIKE, 0);
    }
    public BITWISEOR(): antlr.TerminalNode[];
    public BITWISEOR(i: number): antlr.TerminalNode | null;
    public BITWISEOR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.BITWISEOR);
    	} else {
    		return this.getToken(ImpalaSqlParser.BITWISEOR, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_showFunctions;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterShowFunctions) {
             listener.enterShowFunctions(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitShowFunctions) {
             listener.exitShowFunctions(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitShowFunctions) {
            return visitor.visitShowFunctions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowCreateTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0)!;
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_showCreateTable;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterShowCreateTable) {
             listener.enterShowCreateTable(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitShowCreateTable) {
             listener.exitShowCreateTable(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitShowCreateTable) {
            return visitor.visitShowCreateTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowCreateViewContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0)!;
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_VIEW, 0)!;
    }
    public viewNamePath(): ViewNamePathContext {
        return this.getRuleContext(0, ViewNamePathContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_showCreateView;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterShowCreateView) {
             listener.enterShowCreateView(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitShowCreateView) {
             listener.exitShowCreateView(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitShowCreateView) {
            return visitor.visitShowCreateView(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowTableStatsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public KW_STATS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_STATS, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_showTableStats;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterShowTableStats) {
             listener.enterShowTableStats(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitShowTableStats) {
             listener.exitShowTableStats(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitShowTableStats) {
            return visitor.visitShowTableStats(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowColumnStatsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0)!;
    }
    public KW_COLUMN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_COLUMN, 0)!;
    }
    public KW_STATS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_STATS, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_showColumnStats;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterShowColumnStats) {
             listener.enterShowColumnStats(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitShowColumnStats) {
             listener.exitShowColumnStats(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitShowColumnStats) {
            return visitor.visitShowColumnStats(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowPartitionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0)!;
    }
    public KW_PARTITIONS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_PARTITIONS, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_RANGE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_RANGE, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_showPartitions;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterShowPartitions) {
             listener.enterShowPartitions(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitShowPartitions) {
             listener.exitShowPartitions(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitShowPartitions) {
            return visitor.visitShowPartitions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowFilesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0)!;
    }
    public KW_FILES(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_FILES, 0)!;
    }
    public KW_IN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_IN, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_PARTITION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_showFiles;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterShowFiles) {
             listener.enterShowFiles(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitShowFiles) {
             listener.exitShowFiles(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitShowFiles) {
            return visitor.visitShowFiles(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowRolesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0)!;
    }
    public KW_ROLES(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ROLES, 0)!;
    }
    public KW_CURRENT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_CURRENT, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_showRoles;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterShowRoles) {
             listener.enterShowRoles(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitShowRoles) {
             listener.exitShowRoles(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitShowRoles) {
            return visitor.visitShowRoles(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowRoleGrantContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0)!;
    }
    public KW_ROLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0)!;
    }
    public KW_GRANT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_GRANT, 0)!;
    }
    public KW_GROUP(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_GROUP, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_showRoleGrant;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterShowRoleGrant) {
             listener.enterShowRoleGrant(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitShowRoleGrant) {
             listener.exitShowRoleGrant(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitShowRoleGrant) {
            return visitor.visitShowRoleGrant(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowGrantsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public showDatabaseGrant(): ShowDatabaseGrantContext | null {
        return this.getRuleContext(0, ShowDatabaseGrantContext);
    }
    public showTableGrant(): ShowTableGrantContext | null {
        return this.getRuleContext(0, ShowTableGrantContext);
    }
    public showColumnGrant(): ShowColumnGrantContext | null {
        return this.getRuleContext(0, ShowColumnGrantContext);
    }
    public KW_SHOW(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0);
    }
    public KW_GRANT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_GRANT, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_USER(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_USER, 0);
    }
    public KW_ROLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    public KW_GROUP(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_GROUP, 0);
    }
    public KW_ON(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ON, 0);
    }
    public KW_SERVER(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SERVER, 0);
    }
    public KW_URI(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_URI, 0);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_showGrants;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterShowGrants) {
             listener.enterShowGrants(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitShowGrants) {
             listener.exitShowGrants(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitShowGrants) {
            return visitor.visitShowGrants(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowDatabaseGrantContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0)!;
    }
    public KW_GRANT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_GRANT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_USER(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_USER, 0);
    }
    public KW_ROLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    public KW_GROUP(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_GROUP, 0);
    }
    public KW_ON(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ON, 0);
    }
    public KW_DATABASE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DATABASE, 0);
    }
    public databaseNamePath(): DatabaseNamePathContext | null {
        return this.getRuleContext(0, DatabaseNamePathContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_showDatabaseGrant;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterShowDatabaseGrant) {
             listener.enterShowDatabaseGrant(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitShowDatabaseGrant) {
             listener.exitShowDatabaseGrant(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitShowDatabaseGrant) {
            return visitor.visitShowDatabaseGrant(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowTableGrantContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0)!;
    }
    public KW_GRANT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_GRANT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_USER(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_USER, 0);
    }
    public KW_ROLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    public KW_GROUP(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_GROUP, 0);
    }
    public KW_ON(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ON, 0);
    }
    public KW_TABLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    public tableNamePath(): TableNamePathContext | null {
        return this.getRuleContext(0, TableNamePathContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_showTableGrant;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterShowTableGrant) {
             listener.enterShowTableGrant(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitShowTableGrant) {
             listener.exitShowTableGrant(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitShowTableGrant) {
            return visitor.visitShowTableGrant(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowColumnGrantContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0)!;
    }
    public KW_GRANT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_GRANT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_USER(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_USER, 0);
    }
    public KW_ROLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    public KW_GROUP(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_GROUP, 0);
    }
    public KW_ON(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ON, 0);
    }
    public KW_COLUMN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_COLUMN, 0);
    }
    public columnNamePath(): ColumnNamePathContext | null {
        return this.getRuleContext(0, ColumnNamePathContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_showColumnGrant;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterShowColumnGrant) {
             listener.enterShowColumnGrant(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitShowColumnGrant) {
             listener.exitShowColumnGrant(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitShowColumnGrant) {
            return visitor.visitShowColumnGrant(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AddCommentStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public addDatabaseComments(): AddDatabaseCommentsContext | null {
        return this.getRuleContext(0, AddDatabaseCommentsContext);
    }
    public addTableComments(): AddTableCommentsContext | null {
        return this.getRuleContext(0, AddTableCommentsContext);
    }
    public addColumnComments(): AddColumnCommentsContext | null {
        return this.getRuleContext(0, AddColumnCommentsContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_addCommentStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAddCommentStatement) {
             listener.enterAddCommentStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAddCommentStatement) {
             listener.exitAddCommentStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAddCommentStatement) {
            return visitor.visitAddCommentStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AddDatabaseCommentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_COMMENT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0)!;
    }
    public KW_ON(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ON, 0)!;
    }
    public KW_DATABASE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_DATABASE, 0)!;
    }
    public databaseNamePath(): DatabaseNamePathContext {
        return this.getRuleContext(0, DatabaseNamePathContext)!;
    }
    public KW_IS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_IS, 0)!;
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NULL, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_addDatabaseComments;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAddDatabaseComments) {
             listener.enterAddDatabaseComments(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAddDatabaseComments) {
             listener.exitAddDatabaseComments(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAddDatabaseComments) {
            return visitor.visitAddDatabaseComments(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AddTableCommentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_COMMENT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0)!;
    }
    public KW_ON(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ON, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_IS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_IS, 0)!;
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NULL, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_addTableComments;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAddTableComments) {
             listener.enterAddTableComments(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAddTableComments) {
             listener.exitAddTableComments(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAddTableComments) {
            return visitor.visitAddTableComments(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AddColumnCommentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_COMMENT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0)!;
    }
    public KW_ON(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ON, 0)!;
    }
    public KW_COLUMN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_COLUMN, 0)!;
    }
    public columnNamePath(): ColumnNamePathContext {
        return this.getRuleContext(0, ColumnNamePathContext)!;
    }
    public KW_IS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_IS, 0)!;
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NULL, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_addColumnComments;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAddColumnComments) {
             listener.enterAddColumnComments(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAddColumnComments) {
             listener.exitAddColumnComments(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAddColumnComments) {
            return visitor.visitAddColumnComments(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExplainStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_EXPLAIN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_EXPLAIN, 0)!;
    }
    public sqlStatement(): SqlStatementContext {
        return this.getRuleContext(0, SqlStatementContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_explainStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterExplainStatement) {
             listener.enterExplainStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitExplainStatement) {
             listener.exitExplainStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitExplainStatement) {
            return visitor.visitExplainStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SetStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SET, 0)!;
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ALL, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.EQ, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_setStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSetStatement) {
             listener.enterSetStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSetStatement) {
             listener.exitSetStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSetStatement) {
            return visitor.visitSetStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShutdownStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.COLON, 0)!;
    }
    public KW_SHUTDOWN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SHUTDOWN, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_shutdownStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterShutdownStatement) {
             listener.enterShutdownStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitShutdownStatement) {
             listener.exitShutdownStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitShutdownStatement) {
            return visitor.visitShutdownStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InvalidateMetaStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_INVALIDATE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_INVALIDATE, 0)!;
    }
    public KW_METADATA(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_METADATA, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_invalidateMetaStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterInvalidateMetaStatement) {
             listener.enterInvalidateMetaStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitInvalidateMetaStatement) {
             listener.exitInvalidateMetaStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitInvalidateMetaStatement) {
            return visitor.visitInvalidateMetaStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LoadDataStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LOAD(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_LOAD, 0)!;
    }
    public KW_DATA(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_DATA, 0)!;
    }
    public KW_INPATH(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_INPATH, 0)!;
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.STRING, 0)!;
    }
    public KW_INTO(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_INTO, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_OVERWRITE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_OVERWRITE, 0);
    }
    public KW_PARTITION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_loadDataStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterLoadDataStatement) {
             listener.enterLoadDataStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitLoadDataStatement) {
             listener.exitLoadDataStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLoadDataStatement) {
            return visitor.visitLoadDataStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RefreshStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public refreshMeta(): RefreshMetaContext | null {
        return this.getRuleContext(0, RefreshMetaContext);
    }
    public refreshAuth(): RefreshAuthContext | null {
        return this.getRuleContext(0, RefreshAuthContext);
    }
    public refreshFunction(): RefreshFunctionContext | null {
        return this.getRuleContext(0, RefreshFunctionContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_refreshStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterRefreshStatement) {
             listener.enterRefreshStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitRefreshStatement) {
             listener.exitRefreshStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRefreshStatement) {
            return visitor.visitRefreshStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RefreshMetaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_REFRESH(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_REFRESH, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_PARTITION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_refreshMeta;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterRefreshMeta) {
             listener.enterRefreshMeta(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitRefreshMeta) {
             listener.exitRefreshMeta(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRefreshMeta) {
            return visitor.visitRefreshMeta(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RefreshAuthContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_REFRESH(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_REFRESH, 0)!;
    }
    public KW_AUTHORIZATION(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_AUTHORIZATION, 0)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_refreshAuth;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterRefreshAuth) {
             listener.enterRefreshAuth(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitRefreshAuth) {
             listener.exitRefreshAuth(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRefreshAuth) {
            return visitor.visitRefreshAuth(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RefreshFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_REFRESH(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_REFRESH, 0)!;
    }
    public KW_FUNCTIONS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_FUNCTIONS, 0)!;
    }
    public functionNamePath(): FunctionNamePathContext {
        return this.getRuleContext(0, FunctionNamePathContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_refreshFunction;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterRefreshFunction) {
             listener.enterRefreshFunction(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitRefreshFunction) {
             listener.exitRefreshFunction(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRefreshFunction) {
            return visitor.visitRefreshFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfExistsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IF(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_IF, 0)!;
    }
    public KW_EXISTS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_EXISTS, 0)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_ifExists;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterIfExists) {
             listener.enterIfExists(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitIfExists) {
             listener.exitIfExists(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitIfExists) {
            return visitor.visitIfExists(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfNotExistsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IF(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_IF, 0)!;
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_NOT, 0)!;
    }
    public KW_EXISTS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_EXISTS, 0)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_ifNotExists;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterIfNotExists) {
             listener.enterIfNotExists(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitIfNotExists) {
             listener.exitIfNotExists(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitIfNotExists) {
            return visitor.visitIfNotExists(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableNameCreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_tableNameCreate;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterTableNameCreate) {
             listener.enterTableNameCreate(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitTableNameCreate) {
             listener.exitTableNameCreate(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTableNameCreate) {
            return visitor.visitTableNameCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DatabaseNameCreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_databaseNameCreate;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDatabaseNameCreate) {
             listener.enterDatabaseNameCreate(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDatabaseNameCreate) {
             listener.exitDatabaseNameCreate(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDatabaseNameCreate) {
            return visitor.visitDatabaseNameCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ViewNameCreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_viewNameCreate;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterViewNameCreate) {
             listener.enterViewNameCreate(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitViewNameCreate) {
             listener.exitViewNameCreate(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitViewNameCreate) {
            return visitor.visitViewNameCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionNameCreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_functionNameCreate;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterFunctionNameCreate) {
             listener.enterFunctionNameCreate(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitFunctionNameCreate) {
             listener.exitFunctionNameCreate(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionNameCreate) {
            return visitor.visitFunctionNameCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnNamePathCreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_columnNamePathCreate;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterColumnNamePathCreate) {
             listener.enterColumnNamePathCreate(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitColumnNamePathCreate) {
             listener.exitColumnNamePathCreate(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitColumnNamePathCreate) {
            return visitor.visitColumnNamePathCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DatabaseNamePathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_databaseNamePath;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDatabaseNamePath) {
             listener.enterDatabaseNamePath(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDatabaseNamePath) {
             listener.exitDatabaseNamePath(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDatabaseNamePath) {
            return visitor.visitDatabaseNamePath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableNamePathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.DOT);
    	} else {
    		return this.getToken(ImpalaSqlParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_tableNamePath;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterTableNamePath) {
             listener.enterTableNamePath(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitTableNamePath) {
             listener.exitTableNamePath(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTableNamePath) {
            return visitor.visitTableNamePath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ViewNamePathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.DOT);
    	} else {
    		return this.getToken(ImpalaSqlParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_viewNamePath;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterViewNamePath) {
             listener.enterViewNamePath(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitViewNamePath) {
             listener.exitViewNamePath(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitViewNamePath) {
            return visitor.visitViewNamePath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionNamePathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext | null {
        return this.getRuleContext(0, ReservedKeywordsUsedAsFuncNameContext);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_functionNamePath;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterFunctionNamePath) {
             listener.enterFunctionNamePath(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitFunctionNamePath) {
             listener.exitFunctionNamePath(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionNamePath) {
            return visitor.visitFunctionNamePath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnNamePathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_columnNamePath;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterColumnNamePath) {
             listener.enterColumnNamePath(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitColumnNamePath) {
             listener.exitColumnNamePath(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitColumnNamePath) {
            return visitor.visitColumnNamePath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_columnName;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterColumnName) {
             listener.enterColumnName(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitColumnName) {
             listener.exitColumnName(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitColumnName) {
            return visitor.visitColumnName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableOrViewPathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tableNamePath(): TableNamePathContext | null {
        return this.getRuleContext(0, TableNamePathContext);
    }
    public viewNamePath(): ViewNamePathContext | null {
        return this.getRuleContext(0, ViewNamePathContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_tableOrViewPath;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterTableOrViewPath) {
             listener.enterTableOrViewPath(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitTableOrViewPath) {
             listener.exitTableOrViewPath(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTableOrViewPath) {
            return visitor.visitTableOrViewPath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateCommonItemContext extends antlr.ParserRuleContext {
    public _serdProp?: PropertiesContext;
    public _location?: StringLiteralContext;
    public _cacheName?: QualifiedNameContext;
    public _tblProp?: PropertiesContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SORT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SORT, 0);
    }
    public KW_BY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_BY, 0);
    }
    public columnAliases(): ColumnAliasesContext | null {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    public commentClause(): CommentClauseContext | null {
        return this.getRuleContext(0, CommentClauseContext);
    }
    public KW_ROW(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ROW, 0);
    }
    public KW_FORMAT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_FORMAT, 0);
    }
    public rowFormat(): RowFormatContext | null {
        return this.getRuleContext(0, RowFormatContext);
    }
    public KW_WITH(): antlr.TerminalNode[];
    public KW_WITH(i: number): antlr.TerminalNode | null;
    public KW_WITH(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.KW_WITH);
    	} else {
    		return this.getToken(ImpalaSqlParser.KW_WITH, i);
    	}
    }
    public KW_SERDEPROPERTIES(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SERDEPROPERTIES, 0);
    }
    public KW_STORED(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_STORED, 0);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_AS, 0);
    }
    public fileFormat(): FileFormatContext | null {
        return this.getRuleContext(0, FileFormatContext);
    }
    public KW_LOCATION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_LOCATION, 0);
    }
    public KW_CACHED(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_CACHED, 0);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_IN, 0);
    }
    public KW_UNCACHED(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_UNCACHED, 0);
    }
    public KW_TBLPROPERTIES(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_TBLPROPERTIES, 0);
    }
    public properties(): PropertiesContext[];
    public properties(i: number): PropertiesContext | null;
    public properties(i?: number): PropertiesContext[] | PropertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertiesContext);
        }

        return this.getRuleContext(i, PropertiesContext);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public KW_REPLICATION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_REPLICATION, 0);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.EQ, 0);
    }
    public INTEGER_VALUE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.INTEGER_VALUE, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_createCommonItem;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterCreateCommonItem) {
             listener.enterCreateCommonItem(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitCreateCommonItem) {
             listener.exitCreateCommonItem(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCreateCommonItem) {
            return visitor.visitCreateCommonItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignmentListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public assignmentItem(): AssignmentItemContext[];
    public assignmentItem(i: number): AssignmentItemContext | null;
    public assignmentItem(i?: number): AssignmentItemContext[] | AssignmentItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentItemContext);
        }

        return this.getRuleContext(i, AssignmentItemContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_assignmentList;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAssignmentList) {
             listener.enterAssignmentList(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAssignmentList) {
             listener.exitAssignmentList(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAssignmentList) {
            return visitor.visitAssignmentList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignmentItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.EQ, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_assignmentItem;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAssignmentItem) {
             listener.enterAssignmentItem(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAssignmentItem) {
             listener.exitAssignmentItem(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAssignmentItem) {
            return visitor.visitAssignmentItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ViewColumnsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public viewColumnItem(): ViewColumnItemContext[];
    public viewColumnItem(i: number): ViewColumnItemContext | null;
    public viewColumnItem(i?: number): ViewColumnItemContext[] | ViewColumnItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ViewColumnItemContext);
        }

        return this.getRuleContext(i, ViewColumnItemContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_viewColumns;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterViewColumns) {
             listener.enterViewColumns(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitViewColumns) {
             listener.exitViewColumns(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitViewColumns) {
            return visitor.visitViewColumns(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ViewColumnItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnNamePathCreate(): ColumnNamePathCreateContext {
        return this.getRuleContext(0, ColumnNamePathCreateContext)!;
    }
    public commentClause(): CommentClauseContext | null {
        return this.getRuleContext(0, CommentClauseContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_viewColumnItem;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterViewColumnItem) {
             listener.enterViewColumnItem(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitViewColumnItem) {
             listener.exitViewColumnItem(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitViewColumnItem) {
            return visitor.visitViewColumnItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public queryNoWith(): QueryNoWithContext {
        return this.getRuleContext(0, QueryNoWithContext)!;
    }
    public with(): WithContext | null {
        return this.getRuleContext(0, WithContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_queryStatement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterQueryStatement) {
             listener.enterQueryStatement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitQueryStatement) {
             listener.exitQueryStatement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitQueryStatement) {
            return visitor.visitQueryStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WithContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WITH(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_WITH, 0)!;
    }
    public namedQuery(): NamedQueryContext[];
    public namedQuery(i: number): NamedQueryContext | null;
    public namedQuery(i?: number): NamedQueryContext[] | NamedQueryContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NamedQueryContext);
        }

        return this.getRuleContext(i, NamedQueryContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_with;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterWith) {
             listener.enterWith(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitWith) {
             listener.exitWith(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWith) {
            return visitor.visitWith(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstraintSpecificationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PRIMARY(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_PRIMARY, 0)!;
    }
    public KW_KEY(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_KEY, 0)!;
    }
    public columnAliases(): ColumnAliasesContext {
        return this.getRuleContext(0, ColumnAliasesContext)!;
    }
    public KW_DISABLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DISABLE, 0);
    }
    public KW_NOVALIDATE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NOVALIDATE, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public KW_RELY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_RELY, 0);
    }
    public foreignKeySpecification(): ForeignKeySpecificationContext[];
    public foreignKeySpecification(i: number): ForeignKeySpecificationContext | null;
    public foreignKeySpecification(i?: number): ForeignKeySpecificationContext[] | ForeignKeySpecificationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ForeignKeySpecificationContext);
        }

        return this.getRuleContext(i, ForeignKeySpecificationContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_constraintSpecification;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterConstraintSpecification) {
             listener.enterConstraintSpecification(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitConstraintSpecification) {
             listener.exitConstraintSpecification(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitConstraintSpecification) {
            return visitor.visitConstraintSpecification(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ForeignKeySpecificationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_FOREIGN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_FOREIGN, 0)!;
    }
    public KW_KEY(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_KEY, 0)!;
    }
    public columnAliases(): ColumnAliasesContext[];
    public columnAliases(i: number): ColumnAliasesContext | null;
    public columnAliases(i?: number): ColumnAliasesContext[] | ColumnAliasesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnAliasesContext);
        }

        return this.getRuleContext(i, ColumnAliasesContext);
    }
    public KW_REFERENCES(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_REFERENCES, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public KW_DISABLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DISABLE, 0);
    }
    public KW_NOVALIDATE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NOVALIDATE, 0);
    }
    public KW_RELY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_RELY, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_foreignKeySpecification;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterForeignKeySpecification) {
             listener.enterForeignKeySpecification(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitForeignKeySpecification) {
             listener.exitForeignKeySpecification(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitForeignKeySpecification) {
            return visitor.visitForeignKeySpecification(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnSpecContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnNamePath(): ColumnNamePathContext {
        return this.getRuleContext(0, ColumnNamePathContext)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_columnSpec;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterColumnSpec) {
             listener.enterColumnSpec(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitColumnSpec) {
             listener.exitColumnSpec(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitColumnSpec) {
            return visitor.visitColumnSpec(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnDefinitionContext extends antlr.ParserRuleContext {
    public _colType?: TypeContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnNamePathCreate(): ColumnNamePathCreateContext {
        return this.getRuleContext(0, ColumnNamePathCreateContext)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public commentClause(): CommentClauseContext | null {
        return this.getRuleContext(0, CommentClauseContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_columnDefinition;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterColumnDefinition) {
             listener.enterColumnDefinition(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitColumnDefinition) {
             listener.exitColumnDefinition(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitColumnDefinition) {
            return visitor.visitColumnDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KuduTableElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kuduColumnDefinition(): KuduColumnDefinitionContext {
        return this.getRuleContext(0, KuduColumnDefinitionContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_kuduTableElement;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterKuduTableElement) {
             listener.enterKuduTableElement(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitKuduTableElement) {
             listener.exitKuduTableElement(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitKuduTableElement) {
            return visitor.visitKuduTableElement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KuduColumnDefinitionContext extends antlr.ParserRuleContext {
    public _colType?: TypeContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnNamePathCreate(): ColumnNamePathCreateContext {
        return this.getRuleContext(0, ColumnNamePathCreateContext)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public kuduAttributes(): KuduAttributesContext[];
    public kuduAttributes(i: number): KuduAttributesContext | null;
    public kuduAttributes(i?: number): KuduAttributesContext[] | KuduAttributesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(KuduAttributesContext);
        }

        return this.getRuleContext(i, KuduAttributesContext);
    }
    public commentClause(): CommentClauseContext | null {
        return this.getRuleContext(0, CommentClauseContext);
    }
    public KW_PRIMARY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PRIMARY, 0);
    }
    public KW_KEY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_KEY, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_kuduColumnDefinition;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterKuduColumnDefinition) {
             listener.enterKuduColumnDefinition(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitKuduColumnDefinition) {
             listener.exitKuduColumnDefinition(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitKuduColumnDefinition) {
            return visitor.visitKuduColumnDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CommentClauseContext extends antlr.ParserRuleContext {
    public _comment?: StringLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_COMMENT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0)!;
    }
    public stringLiteral(): StringLiteralContext {
        return this.getRuleContext(0, StringLiteralContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_commentClause;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterCommentClause) {
             listener.enterCommentClause(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitCommentClause) {
             listener.exitCommentClause(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCommentClause) {
            return visitor.visitCommentClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnSpecWithKuduContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnSpec(): ColumnSpecContext {
        return this.getRuleContext(0, ColumnSpecContext)!;
    }
    public kuduAttributes(): KuduAttributesContext[];
    public kuduAttributes(i: number): KuduAttributesContext | null;
    public kuduAttributes(i?: number): KuduAttributesContext[] | KuduAttributesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(KuduAttributesContext);
        }

        return this.getRuleContext(i, KuduAttributesContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_columnSpecWithKudu;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterColumnSpecWithKudu) {
             listener.enterColumnSpecWithKudu(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitColumnSpecWithKudu) {
             listener.exitColumnSpecWithKudu(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitColumnSpecWithKudu) {
            return visitor.visitColumnSpecWithKudu(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateColumnSpecWithKuduContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnNamePathCreate(): ColumnNamePathCreateContext {
        return this.getRuleContext(0, ColumnNamePathCreateContext)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public kuduAttributes(): KuduAttributesContext[];
    public kuduAttributes(i: number): KuduAttributesContext | null;
    public kuduAttributes(i?: number): KuduAttributesContext[] | KuduAttributesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(KuduAttributesContext);
        }

        return this.getRuleContext(i, KuduAttributesContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_createColumnSpecWithKudu;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterCreateColumnSpecWithKudu) {
             listener.enterCreateColumnSpecWithKudu(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitCreateColumnSpecWithKudu) {
             listener.exitCreateColumnSpecWithKudu(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCreateColumnSpecWithKudu) {
            return visitor.visitCreateColumnSpecWithKudu(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KuduAttributesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NULL, 0);
    }
    public kuduStorageAttr(): KuduStorageAttrContext | null {
        return this.getRuleContext(0, KuduStorageAttrContext);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NOT, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_kuduAttributes;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterKuduAttributes) {
             listener.enterKuduAttributes(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitKuduAttributes) {
             listener.exitKuduAttributes(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitKuduAttributes) {
            return visitor.visitKuduAttributes(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KuduStorageAttrContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ENCODING(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ENCODING, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public KW_COMPRESSION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_COMPRESSION, 0);
    }
    public KW_DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DEFAULT, 0);
    }
    public KW_BLOCK_SIZE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_BLOCK_SIZE, 0);
    }
    public number(): NumberContext | null {
        return this.getRuleContext(0, NumberContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_kuduStorageAttr;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterKuduStorageAttr) {
             listener.enterKuduStorageAttr(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitKuduStorageAttr) {
             listener.exitKuduStorageAttr(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitKuduStorageAttr) {
            return visitor.visitKuduStorageAttr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatsKeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STATS_NUMDVS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.STATS_NUMDVS, 0);
    }
    public STATS_NUMNULLS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.STATS_NUMNULLS, 0);
    }
    public STATS_AVGSIZE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.STATS_AVGSIZE, 0);
    }
    public STATS_MAXSIZE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.STATS_MAXSIZE, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_statsKey;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterStatsKey) {
             listener.enterStatsKey(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitStatsKey) {
             listener.exitStatsKey(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitStatsKey) {
            return visitor.visitStatsKey(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FileFormatContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TEXTFILE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_TEXTFILE, 0);
    }
    public KW_PARQUET(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PARQUET, 0);
    }
    public KW_ORC(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ORC, 0);
    }
    public KW_AVRO(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_AVRO, 0);
    }
    public KW_SEQUENCEFILE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SEQUENCEFILE, 0);
    }
    public KW_RCFILE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_RCFILE, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_fileFormat;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterFileFormat) {
             listener.enterFileFormat(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitFileFormat) {
             listener.exitFileFormat(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitFileFormat) {
            return visitor.visitFileFormat(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KuduPartitionClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public hashClause(): HashClauseContext[];
    public hashClause(i: number): HashClauseContext | null;
    public hashClause(i?: number): HashClauseContext[] | HashClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(HashClauseContext);
        }

        return this.getRuleContext(i, HashClauseContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public rangeClause(): RangeClauseContext | null {
        return this.getRuleContext(0, RangeClauseContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_kuduPartitionClause;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterKuduPartitionClause) {
             listener.enterKuduPartitionClause(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitKuduPartitionClause) {
             listener.exitKuduPartitionClause(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitKuduPartitionClause) {
            return visitor.visitKuduPartitionClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HashClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_HASH(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_HASH, 0)!;
    }
    public KW_PARTITIONS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_PARTITIONS, 0)!;
    }
    public number(): NumberContext {
        return this.getRuleContext(0, NumberContext)!;
    }
    public columnAliases(): ColumnAliasesContext | null {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_hashClause;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterHashClause) {
             listener.enterHashClause(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitHashClause) {
             listener.exitHashClause(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitHashClause) {
            return visitor.visitHashClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RangeClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_RANGE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_RANGE, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public KW_PARTITION(): antlr.TerminalNode[];
    public KW_PARTITION(i: number): antlr.TerminalNode | null;
    public KW_PARTITION(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.KW_PARTITION);
    	} else {
    		return this.getToken(ImpalaSqlParser.KW_PARTITION, i);
    	}
    }
    public kuduPartitionSpec(): KuduPartitionSpecContext[];
    public kuduPartitionSpec(i: number): KuduPartitionSpecContext | null;
    public kuduPartitionSpec(i?: number): KuduPartitionSpecContext[] | KuduPartitionSpecContext | null {
        if (i === undefined) {
            return this.getRuleContexts(KuduPartitionSpecContext);
        }

        return this.getRuleContext(i, KuduPartitionSpecContext);
    }
    public columnAliases(): ColumnAliasesContext | null {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_rangeClause;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterRangeClause) {
             listener.enterRangeClause(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitRangeClause) {
             listener.exitRangeClause(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRangeClause) {
            return visitor.visitRangeClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KuduPartitionSpecContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_VALUE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_VALUE, 0);
    }
    public partitionCol(): PartitionColContext | null {
        return this.getRuleContext(0, PartitionColContext);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public KW_VALUES(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_VALUES, 0);
    }
    public rangeOperator(): RangeOperatorContext[];
    public rangeOperator(i: number): RangeOperatorContext | null;
    public rangeOperator(i?: number): RangeOperatorContext[] | RangeOperatorContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RangeOperatorContext);
        }

        return this.getRuleContext(i, RangeOperatorContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_kuduPartitionSpec;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterKuduPartitionSpec) {
             listener.enterKuduPartitionSpec(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitKuduPartitionSpec) {
             listener.exitKuduPartitionSpec(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitKuduPartitionSpec) {
            return visitor.visitKuduPartitionSpec(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CacheSpecContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CACHED(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_CACHED, 0);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_IN, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_WITH, 0);
    }
    public KW_REPLICATION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_REPLICATION, 0);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.EQ, 0);
    }
    public number(): NumberContext | null {
        return this.getRuleContext(0, NumberContext);
    }
    public KW_UNCACHED(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_UNCACHED, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_cacheSpec;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterCacheSpec) {
             listener.enterCacheSpec(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitCacheSpec) {
             listener.exitCacheSpec(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCacheSpec) {
            return visitor.visitCacheSpec(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RangeOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LT, 0);
    }
    public LTE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LTE, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.GT, 0);
    }
    public GTE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.GTE, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_rangeOperator;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterRangeOperator) {
             listener.enterRangeOperator(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitRangeOperator) {
             listener.exitRangeOperator(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRangeOperator) {
            return visitor.visitRangeOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PartitionColContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.EQ, 0);
    }
    public NEQ(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.NEQ, 0);
    }
    public KW_LIKE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_LIKE, 0);
    }
    public KW_RLIKE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_RLIKE, 0);
    }
    public KW_REGEXP(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_REGEXP, 0);
    }
    public KW_BETWEEN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_BETWEEN, 0);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_IN, 0);
    }
    public rangeOperator(): RangeOperatorContext | null {
        return this.getRuleContext(0, RangeOperatorContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_partitionCol;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterPartitionCol) {
             listener.enterPartitionCol(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitPartitionCol) {
             listener.exitPartitionCol(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitPartitionCol) {
            return visitor.visitPartitionCol(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LikeClauseContext extends antlr.ParserRuleContext {
    public _optionType?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LIKE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_LIKE, 0)!;
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public KW_PROPERTIES(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PROPERTIES, 0);
    }
    public KW_INCLUDING(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_INCLUDING, 0);
    }
    public KW_EXCLUDING(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_EXCLUDING, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_likeClause;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterLikeClause) {
             listener.enterLikeClause(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitLikeClause) {
             listener.exitLikeClause(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLikeClause) {
            return visitor.visitLikeClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public property(): PropertyContext[];
    public property(i: number): PropertyContext | null;
    public property(i?: number): PropertyContext[] | PropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }

        return this.getRuleContext(i, PropertyContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_properties;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterProperties) {
             listener.enterProperties(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitProperties) {
             listener.exitProperties(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitProperties) {
            return visitor.visitProperties(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PartitionedByContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public columnSpec(): ColumnSpecContext[];
    public columnSpec(i: number): ColumnSpecContext | null;
    public columnSpec(i?: number): ColumnSpecContext[] | ColumnSpecContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnSpecContext);
        }

        return this.getRuleContext(i, ColumnSpecContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_partitionedBy;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterPartitionedBy) {
             listener.enterPartitionedBy(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitPartitionedBy) {
             listener.exitPartitionedBy(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitPartitionedBy) {
            return visitor.visitPartitionedBy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SortedByContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_sortedBy;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSortedBy) {
             listener.enterSortedBy(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSortedBy) {
             listener.exitSortedBy(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSortedBy) {
            return visitor.visitSortedBy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RowFormatContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DELIMITED(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_DELIMITED, 0)!;
    }
    public KW_FIELDS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_FIELDS, 0);
    }
    public KW_TERMINATED(): antlr.TerminalNode[];
    public KW_TERMINATED(i: number): antlr.TerminalNode | null;
    public KW_TERMINATED(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.KW_TERMINATED);
    	} else {
    		return this.getToken(ImpalaSqlParser.KW_TERMINATED, i);
    	}
    }
    public KW_BY(): antlr.TerminalNode[];
    public KW_BY(i: number): antlr.TerminalNode | null;
    public KW_BY(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.KW_BY);
    	} else {
    		return this.getToken(ImpalaSqlParser.KW_BY, i);
    	}
    }
    public stringLiteral(): StringLiteralContext[];
    public stringLiteral(i: number): StringLiteralContext | null;
    public stringLiteral(i?: number): StringLiteralContext[] | StringLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringLiteralContext);
        }

        return this.getRuleContext(i, StringLiteralContext);
    }
    public KW_LINES(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_LINES, 0);
    }
    public KW_ESCAPED(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ESCAPED, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_rowFormat;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterRowFormat) {
             listener.enterRowFormat(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitRowFormat) {
             listener.exitRowFormat(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRowFormat) {
            return visitor.visitRowFormat(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.EQ, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_property;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterProperty) {
             listener.enterProperty(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitProperty) {
             listener.exitProperty(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitProperty) {
            return visitor.visitProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryNoWithContext extends antlr.ParserRuleContext {
    public _rows?: ExpressionContext;
    public _offset?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public queryTerm(): QueryTermContext {
        return this.getRuleContext(0, QueryTermContext)!;
    }
    public KW_ORDER(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ORDER, 0);
    }
    public KW_BY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_BY, 0);
    }
    public sortItem(): SortItemContext[];
    public sortItem(i: number): SortItemContext | null;
    public sortItem(i?: number): SortItemContext[] | SortItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SortItemContext);
        }

        return this.getRuleContext(i, SortItemContext);
    }
    public KW_LIMIT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_LIMIT, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public KW_OFFSET(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_OFFSET, 0);
    }
    public INTEGER_VALUE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.INTEGER_VALUE, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_queryNoWith;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterQueryNoWith) {
             listener.enterQueryNoWith(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitQueryNoWith) {
             listener.exitQueryNoWith(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitQueryNoWith) {
            return visitor.visitQueryNoWith(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryTermContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_queryTerm;
    }
    public override copyFrom(ctx: QueryTermContext): void {
        super.copyFrom(ctx);
    }
}
export class QueryTermDefaultContext extends QueryTermContext {
    public constructor(ctx: QueryTermContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public queryPrimary(): QueryPrimaryContext {
        return this.getRuleContext(0, QueryPrimaryContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterQueryTermDefault) {
             listener.enterQueryTermDefault(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitQueryTermDefault) {
             listener.exitQueryTermDefault(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitQueryTermDefault) {
            return visitor.visitQueryTermDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetOperationContext extends QueryTermContext {
    public _left?: QueryTermContext;
    public _operator?: Token | null;
    public _right?: QueryTermContext;
    public constructor(ctx: QueryTermContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public queryTerm(): QueryTermContext[];
    public queryTerm(i: number): QueryTermContext | null;
    public queryTerm(i?: number): QueryTermContext[] | QueryTermContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QueryTermContext);
        }

        return this.getRuleContext(i, QueryTermContext);
    }
    public KW_INTERSECT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_INTERSECT, 0);
    }
    public setQuantifier(): SetQuantifierContext | null {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    public KW_UNION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_UNION, 0);
    }
    public KW_EXCEPT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_EXCEPT, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSetOperation) {
             listener.enterSetOperation(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSetOperation) {
             listener.exitSetOperation(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSetOperation) {
            return visitor.visitSetOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryPrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_queryPrimary;
    }
    public override copyFrom(ctx: QueryPrimaryContext): void {
        super.copyFrom(ctx);
    }
}
export class SubqueryContext extends QueryPrimaryContext {
    public constructor(ctx: QueryPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public queryNoWith(): QueryNoWithContext {
        return this.getRuleContext(0, QueryNoWithContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSubquery) {
             listener.enterSubquery(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSubquery) {
             listener.exitSubquery(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSubquery) {
            return visitor.visitSubquery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class QueryPrimaryDefaultContext extends QueryPrimaryContext {
    public constructor(ctx: QueryPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public querySpecification(): QuerySpecificationContext {
        return this.getRuleContext(0, QuerySpecificationContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterQueryPrimaryDefault) {
             listener.enterQueryPrimaryDefault(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitQueryPrimaryDefault) {
             listener.exitQueryPrimaryDefault(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitQueryPrimaryDefault) {
            return visitor.visitQueryPrimaryDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableContext extends QueryPrimaryContext {
    public constructor(ctx: QueryPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0)!;
    }
    public tableNamePath(): TableNamePathContext {
        return this.getRuleContext(0, TableNamePathContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterTable) {
             listener.enterTable(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitTable) {
             listener.exitTable(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTable) {
            return visitor.visitTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class InlineTableContext extends QueryPrimaryContext {
    public constructor(ctx: QueryPrimaryContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_VALUES(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_VALUES, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterInlineTable) {
             listener.enterInlineTable(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitInlineTable) {
             listener.exitInlineTable(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitInlineTable) {
            return visitor.visitInlineTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SortItemContext extends antlr.ParserRuleContext {
    public _ordering?: Token | null;
    public _nullOrdering?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnItem(): ColumnItemContext {
        return this.getRuleContext(0, ColumnItemContext)!;
    }
    public KW_NULLS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NULLS, 0);
    }
    public KW_ASC(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ASC, 0);
    }
    public KW_DESC(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DESC, 0);
    }
    public KW_FIRST(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_FIRST, 0);
    }
    public KW_LAST(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_LAST, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_sortItem;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSortItem) {
             listener.enterSortItem(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSortItem) {
             listener.exitSortItem(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSortItem) {
            return visitor.visitSortItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QuerySpecificationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SELECT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SELECT, 0)!;
    }
    public selectItem(): SelectItemContext[];
    public selectItem(i: number): SelectItemContext | null;
    public selectItem(i?: number): SelectItemContext[] | SelectItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SelectItemContext);
        }

        return this.getRuleContext(i, SelectItemContext);
    }
    public setQuantifier(): SetQuantifierContext | null {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    public KW_STRAIGHT_JOIN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_STRAIGHT_JOIN, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public KW_FROM(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_FROM, 0);
    }
    public relation(): RelationContext[];
    public relation(i: number): RelationContext | null;
    public relation(i?: number): RelationContext[] | RelationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelationContext);
        }

        return this.getRuleContext(i, RelationContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public KW_GROUP(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_GROUP, 0);
    }
    public KW_BY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_BY, 0);
    }
    public groupBy(): GroupByContext | null {
        return this.getRuleContext(0, GroupByContext);
    }
    public havingClause(): HavingClauseContext | null {
        return this.getRuleContext(0, HavingClauseContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_querySpecification;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterQuerySpecification) {
             listener.enterQuerySpecification(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitQuerySpecification) {
             listener.exitQuerySpecification(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitQuerySpecification) {
            return visitor.visitQuerySpecification(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhereClauseContext extends antlr.ParserRuleContext {
    public _where?: BooleanExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WHERE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_WHERE, 0)!;
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_whereClause;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterWhereClause) {
             listener.enterWhereClause(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitWhereClause) {
             listener.exitWhereClause(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWhereClause) {
            return visitor.visitWhereClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HavingClauseContext extends antlr.ParserRuleContext {
    public _having?: BooleanExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_HAVING(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_HAVING, 0)!;
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_havingClause;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterHavingClause) {
             listener.enterHavingClause(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitHavingClause) {
             listener.exitHavingClause(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitHavingClause) {
            return visitor.visitHavingClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupByContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public groupingElement(): GroupingElementContext[];
    public groupingElement(i: number): GroupingElementContext | null;
    public groupingElement(i?: number): GroupingElementContext[] | GroupingElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GroupingElementContext);
        }

        return this.getRuleContext(i, GroupingElementContext);
    }
    public setQuantifier(): SetQuantifierContext | null {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_groupBy;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterGroupBy) {
             listener.enterGroupBy(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitGroupBy) {
             listener.exitGroupBy(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitGroupBy) {
            return visitor.visitGroupBy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupingElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_groupingElement;
    }
    public override copyFrom(ctx: GroupingElementContext): void {
        super.copyFrom(ctx);
    }
}
export class SingleGroupingSetContext extends GroupingElementContext {
    public constructor(ctx: GroupingElementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public groupingSet(): GroupingSetContext {
        return this.getRuleContext(0, GroupingSetContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSingleGroupingSet) {
             listener.enterSingleGroupingSet(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSingleGroupingSet) {
             listener.exitSingleGroupingSet(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSingleGroupingSet) {
            return visitor.visitSingleGroupingSet(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupingSetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    public columnItem(): ColumnItemContext[];
    public columnItem(i: number): ColumnItemContext | null;
    public columnItem(i?: number): ColumnItemContext[] | ColumnItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnItemContext);
        }

        return this.getRuleContext(i, ColumnItemContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_groupingSet;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterGroupingSet) {
             listener.enterGroupingSet(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitGroupingSet) {
             listener.exitGroupingSet(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitGroupingSet) {
            return visitor.visitGroupingSet(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NamedQueryContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_AS, 0)!;
    }
    public subQueryRelation(): SubQueryRelationContext {
        return this.getRuleContext(0, SubQueryRelationContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public columnAliases(): ColumnAliasesContext | null {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_namedQuery;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterNamedQuery) {
             listener.enterNamedQuery(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitNamedQuery) {
             listener.exitNamedQuery(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitNamedQuery) {
            return visitor.visitNamedQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SetQuantifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DISTINCT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DISTINCT, 0);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ALL, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_setQuantifier;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSetQuantifier) {
             listener.enterSetQuantifier(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSetQuantifier) {
             listener.exitSetQuantifier(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSetQuantifier) {
            return visitor.visitSetQuantifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_selectItem;
    }
    public override copyFrom(ctx: SelectItemContext): void {
        super.copyFrom(ctx);
    }
}
export class SelectAllContext extends SelectItemContext {
    public constructor(ctx: SelectItemContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.DOT, 0);
    }
    public ASTERISK(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.ASTERISK, 0)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSelectAll) {
             listener.enterSelectAll(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSelectAll) {
             listener.exitSelectAll(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSelectAll) {
            return visitor.visitSelectAll(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SelectSingleContext extends SelectItemContext {
    public constructor(ctx: SelectItemContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnItem(): ColumnItemContext {
        return this.getRuleContext(0, ColumnItemContext)!;
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_AS, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSelectSingle) {
             listener.enterSelectSingle(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSelectSingle) {
             listener.exitSelectSingle(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSelectSingle) {
            return visitor.visitSelectSingle(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_relation;
    }
    public override copyFrom(ctx: RelationContext): void {
        super.copyFrom(ctx);
    }
}
export class RelationDefaultContext extends RelationContext {
    public constructor(ctx: RelationContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public sampledRelation(): SampledRelationContext {
        return this.getRuleContext(0, SampledRelationContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterRelationDefault) {
             listener.enterRelationDefault(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitRelationDefault) {
             listener.exitRelationDefault(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRelationDefault) {
            return visitor.visitRelationDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class JoinRelationContext extends RelationContext {
    public _left?: RelationContext;
    public _right?: SampledRelationContext;
    public _rightRelation?: RelationContext;
    public constructor(ctx: RelationContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public relation(): RelationContext[];
    public relation(i: number): RelationContext | null;
    public relation(i?: number): RelationContext[] | RelationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelationContext);
        }

        return this.getRuleContext(i, RelationContext);
    }
    public KW_CROSS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_CROSS, 0);
    }
    public KW_JOIN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_JOIN, 0);
    }
    public joinType(): JoinTypeContext | null {
        return this.getRuleContext(0, JoinTypeContext);
    }
    public joinCriteria(): JoinCriteriaContext | null {
        return this.getRuleContext(0, JoinCriteriaContext);
    }
    public sampledRelation(): SampledRelationContext | null {
        return this.getRuleContext(0, SampledRelationContext);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterJoinRelation) {
             listener.enterJoinRelation(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitJoinRelation) {
             listener.exitJoinRelation(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitJoinRelation) {
            return visitor.visitJoinRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JoinTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_INNER(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_INNER, 0);
    }
    public KW_LEFT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_LEFT, 0);
    }
    public KW_RIGHT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_RIGHT, 0);
    }
    public KW_OUTER(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_OUTER, 0);
    }
    public KW_FULL(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_FULL, 0);
    }
    public KW_SEMI(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SEMI, 0);
    }
    public KW_ANTI(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ANTI, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_joinType;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterJoinType) {
             listener.enterJoinType(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitJoinType) {
             listener.exitJoinType(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitJoinType) {
            return visitor.visitJoinType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JoinCriteriaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ON(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ON, 0);
    }
    public booleanExpression(): BooleanExpressionContext | null {
        return this.getRuleContext(0, BooleanExpressionContext);
    }
    public KW_USING(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_USING, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_joinCriteria;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterJoinCriteria) {
             listener.enterJoinCriteria(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitJoinCriteria) {
             listener.exitJoinCriteria(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitJoinCriteria) {
            return visitor.visitJoinCriteria(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SampledRelationContext extends antlr.ParserRuleContext {
    public _percentage?: ExpressionContext;
    public _seed?: ExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public aliasedRelation(): AliasedRelationContext {
        return this.getRuleContext(0, AliasedRelationContext)!;
    }
    public KW_TABLESAMPLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_TABLESAMPLE, 0);
    }
    public sampleType(): SampleTypeContext | null {
        return this.getRuleContext(0, SampleTypeContext);
    }
    public LPAREN(): antlr.TerminalNode[];
    public LPAREN(i: number): antlr.TerminalNode | null;
    public LPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.LPAREN);
    	} else {
    		return this.getToken(ImpalaSqlParser.LPAREN, i);
    	}
    }
    public RPAREN(): antlr.TerminalNode[];
    public RPAREN(i: number): antlr.TerminalNode | null;
    public RPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.RPAREN);
    	} else {
    		return this.getToken(ImpalaSqlParser.RPAREN, i);
    	}
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public KW_REPEATABLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_REPEATABLE, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_sampledRelation;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSampledRelation) {
             listener.enterSampledRelation(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSampledRelation) {
             listener.exitSampledRelation(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSampledRelation) {
            return visitor.visitSampledRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SampleTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_BERNOULLI(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_BERNOULLI, 0);
    }
    public KW_SYSTEM(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SYSTEM, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_sampleType;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSampleType) {
             listener.enterSampleType(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSampleType) {
             listener.exitSampleType(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSampleType) {
            return visitor.visitSampleType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AliasedRelationContext extends antlr.ParserRuleContext {
    public _alias?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public relationPrimary(): RelationPrimaryContext {
        return this.getRuleContext(0, RelationPrimaryContext)!;
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_AS, 0);
    }
    public columnAliases(): ColumnAliasesContext | null {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_aliasedRelation;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterAliasedRelation) {
             listener.enterAliasedRelation(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitAliasedRelation) {
             listener.exitAliasedRelation(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAliasedRelation) {
            return visitor.visitAliasedRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnAliasesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public columnNamePath(): ColumnNamePathContext[];
    public columnNamePath(i: number): ColumnNamePathContext | null;
    public columnNamePath(i?: number): ColumnNamePathContext[] | ColumnNamePathContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnNamePathContext);
        }

        return this.getRuleContext(i, ColumnNamePathContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_columnAliases;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterColumnAliases) {
             listener.enterColumnAliases(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitColumnAliases) {
             listener.exitColumnAliases(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitColumnAliases) {
            return visitor.visitColumnAliases(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelationPrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tableOrViewPath(): TableOrViewPathContext | null {
        return this.getRuleContext(0, TableOrViewPathContext);
    }
    public subQueryRelation(): SubQueryRelationContext | null {
        return this.getRuleContext(0, SubQueryRelationContext);
    }
    public KW_LATERAL(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_LATERAL, 0);
    }
    public unnest(): UnnestContext | null {
        return this.getRuleContext(0, UnnestContext);
    }
    public parenthesizedRelation(): ParenthesizedRelationContext | null {
        return this.getRuleContext(0, ParenthesizedRelationContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_relationPrimary;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterRelationPrimary) {
             listener.enterRelationPrimary(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitRelationPrimary) {
             listener.exitRelationPrimary(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRelationPrimary) {
            return visitor.visitRelationPrimary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SubQueryRelationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_subQueryRelation;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSubQueryRelation) {
             listener.enterSubQueryRelation(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSubQueryRelation) {
             listener.exitSubQueryRelation(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSubQueryRelation) {
            return visitor.visitSubQueryRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnnestContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_UNNEST(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_UNNEST, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_WITH, 0);
    }
    public KW_ORDINALITY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ORDINALITY, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_unnest;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterUnnest) {
             listener.enterUnnest(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitUnnest) {
             listener.exitUnnest(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitUnnest) {
            return visitor.visitUnnest(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParenthesizedRelationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public relation(): RelationContext {
        return this.getRuleContext(0, RelationContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_parenthesizedRelation;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterParenthesizedRelation) {
             listener.enterParenthesizedRelation(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitParenthesizedRelation) {
             listener.exitParenthesizedRelation(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitParenthesizedRelation) {
            return visitor.visitParenthesizedRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnNamePath(): ColumnNamePathContext | null {
        return this.getRuleContext(0, ColumnNamePathContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_columnItem;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterColumnItem) {
             listener.enterColumnItem(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitColumnItem) {
             listener.exitColumnItem(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitColumnItem) {
            return visitor.visitColumnItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_expression;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BooleanExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_booleanExpression;
    }
    public override copyFrom(ctx: BooleanExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class LogicalNotContext extends BooleanExpressionContext {
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_NOT, 0)!;
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterLogicalNot) {
             listener.enterLogicalNot(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitLogicalNot) {
             listener.exitLogicalNot(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalNot) {
            return visitor.visitLogicalNot(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PredicatedContext extends BooleanExpressionContext {
    public _valueExpression?: ValueExpressionContext;
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public predicate(): PredicateContext | null {
        return this.getRuleContext(0, PredicateContext);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterPredicated) {
             listener.enterPredicated(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitPredicated) {
             listener.exitPredicated(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitPredicated) {
            return visitor.visitPredicated(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalBinaryContext extends BooleanExpressionContext {
    public _left?: BooleanExpressionContext;
    public _operator?: Token | null;
    public _right?: BooleanExpressionContext;
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public booleanExpression(): BooleanExpressionContext[];
    public booleanExpression(i: number): BooleanExpressionContext | null;
    public booleanExpression(i?: number): BooleanExpressionContext[] | BooleanExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BooleanExpressionContext);
        }

        return this.getRuleContext(i, BooleanExpressionContext);
    }
    public KW_AND(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_AND, 0);
    }
    public KW_OR(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_OR, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterLogicalBinary) {
             listener.enterLogicalBinary(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitLogicalBinary) {
             listener.exitLogicalBinary(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalBinary) {
            return visitor.visitLogicalBinary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PredicateContext extends antlr.ParserRuleContext {
    public value: antlr.ParserRuleContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number, value: antlr.ParserRuleContext) {
        super(parent, invokingState);
        this.value = value;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_predicate;
    }
    public override copyFrom(ctx: PredicateContext): void {
        super.copyFrom(ctx);
        this.value = ctx.value;
    }
}
export class NullOrUnKnownOrBooleanPredicateContext extends PredicateContext {
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    public KW_IS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_IS, 0)!;
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NULL, 0);
    }
    public KW_UNKNOWN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_UNKNOWN, 0);
    }
    public KW_TRUE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_TRUE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_FALSE, 0);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NOT, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterNullOrUnKnownOrBooleanPredicate) {
             listener.enterNullOrUnKnownOrBooleanPredicate(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitNullOrUnKnownOrBooleanPredicate) {
             listener.exitNullOrUnKnownOrBooleanPredicate(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitNullOrUnKnownOrBooleanPredicate) {
            return visitor.visitNullOrUnKnownOrBooleanPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class REGEXPContext extends PredicateContext {
    public _pattern?: ValueExpressionContext;
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    public KW_REGEXP(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_REGEXP, 0);
    }
    public KW_IREGEXP(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_IREGEXP, 0);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterREGEXP) {
             listener.enterREGEXP(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitREGEXP) {
             listener.exitREGEXP(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitREGEXP) {
            return visitor.visitREGEXP(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ComparisonContext extends PredicateContext {
    public _right?: ValueExpressionContext;
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    public comparisonOperator(): ComparisonOperatorContext {
        return this.getRuleContext(0, ComparisonOperatorContext)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterComparison) {
             listener.enterComparison(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitComparison) {
             listener.exitComparison(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitComparison) {
            return visitor.visitComparison(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LikeContext extends PredicateContext {
    public _pattern?: ValueExpressionContext;
    public _escape?: ValueExpressionContext;
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    public KW_LIKE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_LIKE, 0);
    }
    public KW_ILIKE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ILIKE, 0);
    }
    public KW_RLIKE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_RLIKE, 0);
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NOT, 0);
    }
    public KW_ESCAPE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ESCAPE, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterLike) {
             listener.enterLike(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitLike) {
             listener.exitLike(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLike) {
            return visitor.visitLike(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class InSubqueryContext extends PredicateContext {
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    public KW_IN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_IN, 0)!;
    }
    public subQueryRelation(): SubQueryRelationContext {
        return this.getRuleContext(0, SubQueryRelationContext)!;
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NOT, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterInSubquery) {
             listener.enterInSubquery(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitInSubquery) {
             listener.exitInSubquery(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitInSubquery) {
            return visitor.visitInSubquery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DistinctFromContext extends PredicateContext {
    public _right?: ValueExpressionContext;
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    public KW_IS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_IS, 0)!;
    }
    public KW_DISTINCT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_DISTINCT, 0)!;
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_FROM, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NOT, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDistinctFrom) {
             listener.enterDistinctFrom(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDistinctFrom) {
             listener.exitDistinctFrom(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDistinctFrom) {
            return visitor.visitDistinctFrom(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class InListContext extends PredicateContext {
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    public KW_IN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_IN, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NOT, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterInList) {
             listener.enterInList(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitInList) {
             listener.exitInList(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitInList) {
            return visitor.visitInList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BetweenContext extends PredicateContext {
    public _lower?: ValueExpressionContext;
    public _upper?: ValueExpressionContext;
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    public KW_BETWEEN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_BETWEEN, 0)!;
    }
    public KW_AND(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_AND, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NOT, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterBetween) {
             listener.enterBetween(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitBetween) {
             listener.exitBetween(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitBetween) {
            return visitor.visitBetween(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class QuantifiedComparisonContext extends PredicateContext {
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    public comparisonOperator(): ComparisonOperatorContext {
        return this.getRuleContext(0, ComparisonOperatorContext)!;
    }
    public comparisonQuantifier(): ComparisonQuantifierContext {
        return this.getRuleContext(0, ComparisonQuantifierContext)!;
    }
    public subQueryRelation(): SubQueryRelationContext {
        return this.getRuleContext(0, SubQueryRelationContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterQuantifiedComparison) {
             listener.enterQuantifiedComparison(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitQuantifiedComparison) {
             listener.exitQuantifiedComparison(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitQuantifiedComparison) {
            return visitor.visitQuantifiedComparison(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValueExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_valueExpression;
    }
    public override copyFrom(ctx: ValueExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterValueExpressionDefault) {
             listener.enterValueExpressionDefault(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitValueExpressionDefault) {
             listener.exitValueExpressionDefault(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitValueExpressionDefault) {
            return visitor.visitValueExpressionDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConcatenationContext extends ValueExpressionContext {
    public _left?: ValueExpressionContext;
    public _right?: ValueExpressionContext;
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CONCAT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.CONCAT, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterConcatenation) {
             listener.enterConcatenation(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitConcatenation) {
             listener.exitConcatenation(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitConcatenation) {
            return visitor.visitConcatenation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArithmeticBinaryContext extends ValueExpressionContext {
    public _left?: ValueExpressionContext;
    public _operator?: Token | null;
    public _right?: ValueExpressionContext;
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public ASTERISK(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.ASTERISK, 0);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.SLASH, 0);
    }
    public PERCENT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.PERCENT, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.MINUS, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterArithmeticBinary) {
             listener.enterArithmeticBinary(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitArithmeticBinary) {
             listener.exitArithmeticBinary(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitArithmeticBinary) {
            return visitor.visitArithmeticBinary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArithmeticUnaryContext extends ValueExpressionContext {
    public _operator?: Token | null;
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.MINUS, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.PLUS, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterArithmeticUnary) {
             listener.enterArithmeticUnary(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitArithmeticUnary) {
             listener.exitArithmeticUnary(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitArithmeticUnary) {
            return visitor.visitArithmeticUnary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimaryExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_primaryExpression;
    }
    public override copyFrom(ctx: PrimaryExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class DereferenceContext extends PrimaryExpressionContext {
    public _base?: PrimaryExpressionContext;
    public _fieldName?: IdentifierContext;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.DOT, 0)!;
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDereference) {
             listener.enterDereference(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDereference) {
             listener.exitDereference(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDereference) {
            return visitor.visitDereference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TypeConstructorContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public stringLiteral(): StringLiteralContext {
        return this.getRuleContext(0, StringLiteralContext)!;
    }
    public DOUBLE_PRECISION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.DOUBLE_PRECISION, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterTypeConstructor) {
             listener.enterTypeConstructor(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitTypeConstructor) {
             listener.exitTypeConstructor(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTypeConstructor) {
            return visitor.visitTypeConstructor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SpecialDateTimeFunctionContext extends PrimaryExpressionContext {
    public _name?: Token | null;
    public _precision?: Token | null;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CURRENT_DATE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_CURRENT_DATE, 0);
    }
    public KW_CURRENT_TIME(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_CURRENT_TIME, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    public INTEGER_VALUE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.INTEGER_VALUE, 0);
    }
    public KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_CURRENT_TIMESTAMP, 0);
    }
    public KW_LOCALTIME(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_LOCALTIME, 0);
    }
    public KW_LOCALTIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_LOCALTIMESTAMP, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSpecialDateTimeFunction) {
             listener.enterSpecialDateTimeFunction(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSpecialDateTimeFunction) {
             listener.exitSpecialDateTimeFunction(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSpecialDateTimeFunction) {
            return visitor.visitSpecialDateTimeFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubstringContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_SUBSTRING(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_SUBSTRING, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_FROM, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public KW_FOR(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_FOR, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSubstring) {
             listener.enterSubstring(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSubstring) {
             listener.exitSubstring(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSubstring) {
            return visitor.visitSubstring(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CastContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CAST(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_CAST, 0);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_AS, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public KW_TRY_CAST(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_TRY_CAST, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterCast) {
             listener.enterCast(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitCast) {
             listener.exitCast(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCast) {
            return visitor.visitCast(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LambdaContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public RIGHT_ARROW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RIGHT_ARROW, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterLambda) {
             listener.enterLambda(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitLambda) {
             listener.exitLambda(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLambda) {
            return visitor.visitLambda(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterParenthesizedExpression) {
             listener.enterParenthesizedExpression(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitParenthesizedExpression) {
             listener.exitParenthesizedExpression(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitParenthesizedExpression) {
            return visitor.visitParenthesizedExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringLiteralValuesContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public stringLiteral(): StringLiteralContext {
        return this.getRuleContext(0, StringLiteralContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterStringLiteralValues) {
             listener.enterStringLiteralValues(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitStringLiteralValues) {
             listener.exitStringLiteralValues(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitStringLiteralValues) {
            return visitor.visitStringLiteralValues(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParameterContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public QUESTION(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.QUESTION, 0)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterParameter) {
             listener.enterParameter(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitParameter) {
             listener.exitParameter(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitParameter) {
            return visitor.visitParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NormalizeContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_NORMALIZE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_NORMALIZE, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.COMMA, 0);
    }
    public normalForm(): NormalFormContext | null {
        return this.getRuleContext(0, NormalFormContext);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterNormalize) {
             listener.enterNormalize(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitNormalize) {
             listener.exitNormalize(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitNormalize) {
            return visitor.visitNormalize(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IntervalLiteralContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public interval(): IntervalContext {
        return this.getRuleContext(0, IntervalContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterIntervalLiteral) {
             listener.enterIntervalLiteral(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitIntervalLiteral) {
             listener.exitIntervalLiteral(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitIntervalLiteral) {
            return visitor.visitIntervalLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NumericLiteralContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public number(): NumberContext {
        return this.getRuleContext(0, NumberContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterNumericLiteral) {
             listener.enterNumericLiteral(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitNumericLiteral) {
             listener.exitNumericLiteral(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitNumericLiteral) {
            return visitor.visitNumericLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BooleanLiteralContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public booleanValue(): BooleanValueContext {
        return this.getRuleContext(0, BooleanValueContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterBooleanLiteral) {
             listener.enterBooleanLiteral(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitBooleanLiteral) {
             listener.exitBooleanLiteral(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitBooleanLiteral) {
            return visitor.visitBooleanLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SimpleCaseContext extends PrimaryExpressionContext {
    public _elseExpression?: ExpressionContext;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CASE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_CASE, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public KW_END(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_END, 0)!;
    }
    public whenClause(): WhenClauseContext[];
    public whenClause(i: number): WhenClauseContext | null;
    public whenClause(i?: number): WhenClauseContext[] | WhenClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WhenClauseContext);
        }

        return this.getRuleContext(i, WhenClauseContext);
    }
    public KW_ELSE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ELSE, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSimpleCase) {
             listener.enterSimpleCase(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSimpleCase) {
             listener.exitSimpleCase(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSimpleCase) {
            return visitor.visitSimpleCase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnName(): ColumnNameContext {
        return this.getRuleContext(0, ColumnNameContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterColumnReference) {
             listener.enterColumnReference(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitColumnReference) {
             listener.exitColumnReference(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitColumnReference) {
            return visitor.visitColumnReference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NullLiteralContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_NULL(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_NULL, 0)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterNullLiteral) {
             listener.enterNullLiteral(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitNullLiteral) {
             listener.exitNullLiteral(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitNullLiteral) {
            return visitor.visitNullLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RowConstructorContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public KW_AS(): antlr.TerminalNode[];
    public KW_AS(i: number): antlr.TerminalNode | null;
    public KW_AS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.KW_AS);
    	} else {
    		return this.getToken(ImpalaSqlParser.KW_AS, i);
    	}
    }
    public type_(): TypeContext[];
    public type_(i: number): TypeContext | null;
    public type_(i?: number): TypeContext[] | TypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }

        return this.getRuleContext(i, TypeContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public KW_ROW(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ROW, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterRowConstructor) {
             listener.enterRowConstructor(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitRowConstructor) {
             listener.exitRowConstructor(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRowConstructor) {
            return visitor.visitRowConstructor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubscriptContext extends PrimaryExpressionContext {
    public _value?: PrimaryExpressionContext;
    public _index?: ValueExpressionContext;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LSQUARE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LSQUARE, 0)!;
    }
    public RSQUARE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RSQUARE, 0)!;
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSubscript) {
             listener.enterSubscript(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSubscript) {
             listener.exitSubscript(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSubscript) {
            return visitor.visitSubscript(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CurrentPathContext extends PrimaryExpressionContext {
    public _name?: Token | null;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CURRENT_PATH(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_CURRENT_PATH, 0)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterCurrentPath) {
             listener.enterCurrentPath(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitCurrentPath) {
             listener.exitCurrentPath(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCurrentPath) {
            return visitor.visitCurrentPath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubqueryExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSubqueryExpression) {
             listener.enterSubqueryExpression(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSubqueryExpression) {
             listener.exitSubqueryExpression(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSubqueryExpression) {
            return visitor.visitSubqueryExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BinaryLiteralContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public BINARY_LITERAL(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.BINARY_LITERAL, 0)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterBinaryLiteral) {
             listener.enterBinaryLiteral(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitBinaryLiteral) {
             listener.exitBinaryLiteral(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitBinaryLiteral) {
            return visitor.visitBinaryLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CurrentUserContext extends PrimaryExpressionContext {
    public _name?: Token | null;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CURRENT_USER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_CURRENT_USER, 0)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterCurrentUser) {
             listener.enterCurrentUser(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitCurrentUser) {
             listener.exitCurrentUser(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCurrentUser) {
            return visitor.visitCurrentUser(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExtractContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_EXTRACT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_EXTRACT, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_FROM, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterExtract) {
             listener.enterExtract(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitExtract) {
             listener.exitExtract(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitExtract) {
            return visitor.visitExtract(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArrayConstructorContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ARRAY(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ARRAY, 0)!;
    }
    public LSQUARE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LSQUARE, 0)!;
    }
    public RSQUARE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RSQUARE, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterArrayConstructor) {
             listener.enterArrayConstructor(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitArrayConstructor) {
             listener.exitArrayConstructor(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitArrayConstructor) {
            return visitor.visitArrayConstructor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionCallContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionNamePath(): FunctionNamePathContext {
        return this.getRuleContext(0, FunctionNamePathContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public ASTERISK(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.ASTERISK, 0);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public filter(): FilterContext | null {
        return this.getRuleContext(0, FilterContext);
    }
    public over(): OverContext | null {
        return this.getRuleContext(0, OverContext);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public KW_ORDER(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ORDER, 0);
    }
    public KW_BY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_BY, 0);
    }
    public sortItem(): SortItemContext[];
    public sortItem(i: number): SortItemContext | null;
    public sortItem(i?: number): SortItemContext[] | SortItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SortItemContext);
        }

        return this.getRuleContext(i, SortItemContext);
    }
    public setQuantifier(): SetQuantifierContext | null {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterFunctionCall) {
             listener.enterFunctionCall(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitFunctionCall) {
             listener.exitFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExistsContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_EXISTS(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_EXISTS, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterExists) {
             listener.enterExists(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitExists) {
             listener.exitExists(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitExists) {
            return visitor.visitExists(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PositionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_POSITION(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_POSITION, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public KW_IN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_IN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterPosition) {
             listener.enterPosition(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitPosition) {
             listener.exitPosition(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitPosition) {
            return visitor.visitPosition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SearchedCaseContext extends PrimaryExpressionContext {
    public _elseExpression?: ExpressionContext;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CASE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_CASE, 0)!;
    }
    public KW_END(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_END, 0)!;
    }
    public whenClause(): WhenClauseContext[];
    public whenClause(i: number): WhenClauseContext | null;
    public whenClause(i?: number): WhenClauseContext[] | WhenClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WhenClauseContext);
        }

        return this.getRuleContext(i, WhenClauseContext);
    }
    public KW_ELSE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ELSE, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterSearchedCase) {
             listener.enterSearchedCase(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitSearchedCase) {
             listener.exitSearchedCase(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSearchedCase) {
            return visitor.visitSearchedCase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class GroupingOperationContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_GROUPING(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_GROUPING, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public qualifiedName(): QualifiedNameContext[];
    public qualifiedName(i: number): QualifiedNameContext | null;
    public qualifiedName(i?: number): QualifiedNameContext[] | QualifiedNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }

        return this.getRuleContext(i, QualifiedNameContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterGroupingOperation) {
             listener.enterGroupingOperation(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitGroupingOperation) {
             listener.exitGroupingOperation(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitGroupingOperation) {
            return visitor.visitGroupingOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StringLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_stringLiteral;
    }
    public override copyFrom(ctx: StringLiteralContext): void {
        super.copyFrom(ctx);
    }
}
export class UnicodeStringLiteralContext extends StringLiteralContext {
    public constructor(ctx: StringLiteralContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public UNICODE_STRING(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.UNICODE_STRING, 0)!;
    }
    public KW_UESCAPE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_UESCAPE, 0);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.STRING, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterUnicodeStringLiteral) {
             listener.enterUnicodeStringLiteral(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitUnicodeStringLiteral) {
             listener.exitUnicodeStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitUnicodeStringLiteral) {
            return visitor.visitUnicodeStringLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BasicStringLiteralContext extends StringLiteralContext {
    public constructor(ctx: StringLiteralContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.STRING, 0)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterBasicStringLiteral) {
             listener.enterBasicStringLiteral(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitBasicStringLiteral) {
             listener.exitBasicStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitBasicStringLiteral) {
            return visitor.visitBasicStringLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComparisonOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.EQ, 0);
    }
    public NEQ(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.NEQ, 0);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LT, 0);
    }
    public LTE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LTE, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.GT, 0);
    }
    public GTE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.GTE, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_comparisonOperator;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterComparisonOperator) {
             listener.enterComparisonOperator(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitComparisonOperator) {
             listener.exitComparisonOperator(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitComparisonOperator) {
            return visitor.visitComparisonOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComparisonQuantifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ALL, 0);
    }
    public KW_SOME(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SOME, 0);
    }
    public KW_ANY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ANY, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_comparisonQuantifier;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterComparisonQuantifier) {
             listener.enterComparisonQuantifier(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitComparisonQuantifier) {
             listener.exitComparisonQuantifier(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitComparisonQuantifier) {
            return visitor.visitComparisonQuantifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BooleanValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TRUE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_TRUE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_FALSE, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_booleanValue;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterBooleanValue) {
             listener.enterBooleanValue(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitBooleanValue) {
             listener.exitBooleanValue(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitBooleanValue) {
            return visitor.visitBooleanValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IntervalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTEGER_VALUE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.INTEGER_VALUE, 0)!;
    }
    public intervalField(): IntervalFieldContext {
        return this.getRuleContext(0, IntervalFieldContext)!;
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    public KW_INTERVAL(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_INTERVAL, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_interval;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterInterval) {
             listener.enterInterval(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitInterval) {
             listener.exitInterval(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitInterval) {
            return visitor.visitInterval(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IntervalFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_YEAR(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_YEAR, 0);
    }
    public KW_YEARS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_YEARS, 0);
    }
    public KW_MONTH(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_MONTH, 0);
    }
    public KW_MONTHS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_MONTHS, 0);
    }
    public KW_DAY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DAY, 0);
    }
    public KW_DAYS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DAYS, 0);
    }
    public KW_HOUR(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_HOUR, 0);
    }
    public KW_HOURS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_HOURS, 0);
    }
    public KW_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_MINUTE, 0);
    }
    public KW_MINUTES(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_MINUTES, 0);
    }
    public KW_SECOND(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SECOND, 0);
    }
    public KW_SECONDS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SECONDS, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_intervalField;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterIntervalField) {
             listener.enterIntervalField(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitIntervalField) {
             listener.exitIntervalField(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitIntervalField) {
            return visitor.visitIntervalField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NormalFormContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_NFD(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NFD, 0);
    }
    public KW_NFC(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NFC, 0);
    }
    public KW_NFKD(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NFKD, 0);
    }
    public KW_NFKC(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NFKC, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_normalForm;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterNormalForm) {
             listener.enterNormalForm(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitNormalForm) {
             listener.exitNormalForm(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitNormalForm) {
            return visitor.visitNormalForm(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ARRAY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ARRAY, 0);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LT, 0);
    }
    public type_(): TypeContext[];
    public type_(i: number): TypeContext | null;
    public type_(i?: number): TypeContext[] | TypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }

        return this.getRuleContext(i, TypeContext);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.GT, 0);
    }
    public KW_MAP(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_MAP, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public KW_STRUCT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_STRUCT, 0);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public baseType(): BaseTypeContext | null {
        return this.getRuleContext(0, BaseTypeContext);
    }
    public dataType(): DataTypeContext | null {
        return this.getRuleContext(0, DataTypeContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    public typeParameter(): TypeParameterContext[];
    public typeParameter(i: number): TypeParameterContext | null;
    public typeParameter(i?: number): TypeParameterContext[] | TypeParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterContext);
        }

        return this.getRuleContext(i, TypeParameterContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_type;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterType) {
             listener.enterType(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitType) {
             listener.exitType(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitType) {
            return visitor.visitType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DataTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ARRAY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ARRAY, 0);
    }
    public KW_BINARY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_BINARY, 0);
    }
    public KW_BIGINT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_BIGINT, 0);
    }
    public KW_BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_BOOLEAN, 0);
    }
    public KW_CHAR(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_CHAR, 0);
    }
    public KW_DATE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DATE, 0);
    }
    public KW_DECIMAL(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DECIMAL, 0);
    }
    public KW_DOUBLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DOUBLE, 0);
    }
    public KW_FLOAT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_FLOAT, 0);
    }
    public KW_INT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_INT, 0);
    }
    public KW_MAP(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_MAP, 0);
    }
    public KW_REAL(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_REAL, 0);
    }
    public KW_SMALLINT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SMALLINT, 0);
    }
    public KW_STRING(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_STRING, 0);
    }
    public KW_STRUCT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_STRUCT, 0);
    }
    public KW_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_TIMESTAMP, 0);
    }
    public KW_TINYINT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_TINYINT, 0);
    }
    public KW_VARCHAR(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_VARCHAR, 0);
    }
    public KW_COMPLEX(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_COMPLEX, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_dataType;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDataType) {
             listener.enterDataType(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDataType) {
             listener.exitDataType(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDataType) {
            return visitor.visitDataType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTEGER_VALUE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.INTEGER_VALUE, 0);
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_typeParameter;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterTypeParameter) {
             listener.enterTypeParameter(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitTypeParameter) {
             listener.exitTypeParameter(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTypeParameter) {
            return visitor.visitTypeParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BaseTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TIME_WITH_TIME_ZONE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.TIME_WITH_TIME_ZONE, 0);
    }
    public TIMESTAMP_WITH_TIME_ZONE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE, 0);
    }
    public DOUBLE_PRECISION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.DOUBLE_PRECISION, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_baseType;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterBaseType) {
             listener.enterBaseType(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitBaseType) {
             listener.exitBaseType(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitBaseType) {
            return visitor.visitBaseType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhenClauseContext extends antlr.ParserRuleContext {
    public _condition?: ExpressionContext;
    public _result?: ExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WHEN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_WHEN, 0)!;
    }
    public KW_THEN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_THEN, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_whenClause;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterWhenClause) {
             listener.enterWhenClause(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitWhenClause) {
             listener.exitWhenClause(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWhenClause) {
            return visitor.visitWhenClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FilterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_FILTER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_FILTER, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public whereClause(): WhereClauseContext {
        return this.getRuleContext(0, WhereClauseContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_filter;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterFilter) {
             listener.enterFilter(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitFilter) {
             listener.exitFilter(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitFilter) {
            return visitor.visitFilter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PartitionByClauseContext extends antlr.ParserRuleContext {
    public _expression?: ExpressionContext;
    public _partition: ExpressionContext[] = [];
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_partitionByClause;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterPartitionByClause) {
             listener.enterPartitionByClause(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitPartitionByClause) {
             listener.exitPartitionByClause(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitPartitionByClause) {
            return visitor.visitPartitionByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OverContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_OVER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_OVER, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public KW_PARTITION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    public KW_BY(): antlr.TerminalNode[];
    public KW_BY(i: number): antlr.TerminalNode | null;
    public KW_BY(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.KW_BY);
    	} else {
    		return this.getToken(ImpalaSqlParser.KW_BY, i);
    	}
    }
    public partitionByClause(): PartitionByClauseContext | null {
        return this.getRuleContext(0, PartitionByClauseContext);
    }
    public KW_ORDER(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ORDER, 0);
    }
    public sortItem(): SortItemContext[];
    public sortItem(i: number): SortItemContext | null;
    public sortItem(i?: number): SortItemContext[] | SortItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SortItemContext);
        }

        return this.getRuleContext(i, SortItemContext);
    }
    public windowFrame(): WindowFrameContext | null {
        return this.getRuleContext(0, WindowFrameContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_over;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterOver) {
             listener.enterOver(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitOver) {
             listener.exitOver(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitOver) {
            return visitor.visitOver(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowFrameContext extends antlr.ParserRuleContext {
    public _frameType?: Token | null;
    public _start_?: FrameBoundContext;
    public _end?: FrameBoundContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_RANGE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_RANGE, 0);
    }
    public frameBound(): FrameBoundContext[];
    public frameBound(i: number): FrameBoundContext | null;
    public frameBound(i?: number): FrameBoundContext[] | FrameBoundContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FrameBoundContext);
        }

        return this.getRuleContext(i, FrameBoundContext);
    }
    public KW_ROWS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ROWS, 0);
    }
    public KW_BETWEEN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_BETWEEN, 0);
    }
    public KW_AND(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_AND, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_windowFrame;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterWindowFrame) {
             listener.enterWindowFrame(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitWindowFrame) {
             listener.exitWindowFrame(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWindowFrame) {
            return visitor.visitWindowFrame(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FrameBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_frameBound;
    }
    public override copyFrom(ctx: FrameBoundContext): void {
        super.copyFrom(ctx);
    }
}
export class BoundedFrameContext extends FrameBoundContext {
    public _boundType?: Token | null;
    public constructor(ctx: FrameBoundContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public KW_PRECEDING(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PRECEDING, 0);
    }
    public KW_FOLLOWING(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_FOLLOWING, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterBoundedFrame) {
             listener.enterBoundedFrame(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitBoundedFrame) {
             listener.exitBoundedFrame(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitBoundedFrame) {
            return visitor.visitBoundedFrame(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnboundedFrameContext extends FrameBoundContext {
    public _boundType?: Token | null;
    public constructor(ctx: FrameBoundContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_UNBOUNDED(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_UNBOUNDED, 0)!;
    }
    public KW_PRECEDING(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PRECEDING, 0);
    }
    public KW_FOLLOWING(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_FOLLOWING, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterUnboundedFrame) {
             listener.enterUnboundedFrame(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitUnboundedFrame) {
             listener.exitUnboundedFrame(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitUnboundedFrame) {
            return visitor.visitUnboundedFrame(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CurrentRowBoundContext extends FrameBoundContext {
    public constructor(ctx: FrameBoundContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CURRENT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_CURRENT, 0)!;
    }
    public KW_ROW(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ROW, 0)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterCurrentRowBound) {
             listener.enterCurrentRowBound(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitCurrentRowBound) {
             listener.exitCurrentRowBound(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCurrentRowBound) {
            return visitor.visitCurrentRowBound(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PathElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_pathElement;
    }
    public override copyFrom(ctx: PathElementContext): void {
        super.copyFrom(ctx);
    }
}
export class QualifiedArgumentContext extends PathElementContext {
    public constructor(ctx: PathElementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.DOT, 0)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterQualifiedArgument) {
             listener.enterQualifiedArgument(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitQualifiedArgument) {
             listener.exitQualifiedArgument(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitQualifiedArgument) {
            return visitor.visitQualifiedArgument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnqualifiedArgumentContext extends PathElementContext {
    public constructor(ctx: PathElementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterUnqualifiedArgument) {
             listener.enterUnqualifiedArgument(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitUnqualifiedArgument) {
             listener.exitUnqualifiedArgument(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitUnqualifiedArgument) {
            return visitor.visitUnqualifiedArgument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PathSpecificationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pathElement(): PathElementContext[];
    public pathElement(i: number): PathElementContext | null;
    public pathElement(i?: number): PathElementContext[] | PathElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PathElementContext);
        }

        return this.getRuleContext(i, PathElementContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COMMA);
    	} else {
    		return this.getToken(ImpalaSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_pathSpecification;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterPathSpecification) {
             listener.enterPathSpecification(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitPathSpecification) {
             listener.exitPathSpecification(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitPathSpecification) {
            return visitor.visitPathSpecification(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrivilegeContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ALL, 0);
    }
    public KW_ALTER(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0);
    }
    public KW_DROP(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0);
    }
    public KW_CREATE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0);
    }
    public KW_INSERT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_INSERT, 0);
    }
    public KW_REFRESH(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_REFRESH, 0);
    }
    public KW_SELECT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SELECT, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_privilege;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterPrivilege) {
             listener.enterPrivilege(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitPrivilege) {
             listener.exitPrivilege(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitPrivilege) {
            return visitor.visitPrivilege(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SERVER(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SERVER, 0);
    }
    public KW_URI(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_URI, 0);
    }
    public KW_DATABASE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DATABASE, 0);
    }
    public KW_TABLE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_objectType;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterObjectType) {
             listener.enterObjectType(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitObjectType) {
             listener.exitObjectType(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitObjectType) {
            return visitor.visitObjectType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.DOT);
    	} else {
    		return this.getToken(ImpalaSqlParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_qualifiedName;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterQualifiedName) {
             listener.enterQualifiedName(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitQualifiedName) {
             listener.exitQualifiedName(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitQualifiedName) {
            return visitor.visitQualifiedName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrincipalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_principal;
    }
    public override copyFrom(ctx: PrincipalContext): void {
        super.copyFrom(ctx);
    }
}
export class GroupPrincipalContext extends PrincipalContext {
    public constructor(ctx: PrincipalContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_GROUP(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_GROUP, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterGroupPrincipal) {
             listener.enterGroupPrincipal(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitGroupPrincipal) {
             listener.exitGroupPrincipal(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitGroupPrincipal) {
            return visitor.visitGroupPrincipal(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RolePrincipalContext extends PrincipalContext {
    public constructor(ctx: PrincipalContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_ROLE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterRolePrincipal) {
             listener.enterRolePrincipal(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitRolePrincipal) {
             listener.exitRolePrincipal(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRolePrincipal) {
            return visitor.visitRolePrincipal(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UserPrincipalContext extends PrincipalContext {
    public constructor(ctx: PrincipalContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_USER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_USER, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterUserPrincipal) {
             listener.enterUserPrincipal(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitUserPrincipal) {
             listener.exitUserPrincipal(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitUserPrincipal) {
            return visitor.visitUserPrincipal(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_identifier;
    }
    public override copyFrom(ctx: IdentifierContext): void {
        super.copyFrom(ctx);
    }
}
export class BackQuotedIdentifierContext extends IdentifierContext {
    public constructor(ctx: IdentifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public BACKQUOTED_IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.BACKQUOTED_IDENTIFIER, 0)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterBackQuotedIdentifier) {
             listener.enterBackQuotedIdentifier(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitBackQuotedIdentifier) {
             listener.exitBackQuotedIdentifier(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitBackQuotedIdentifier) {
            return visitor.visitBackQuotedIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class QuotedIdentifierContext extends IdentifierContext {
    public constructor(ctx: IdentifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.STRING, 0)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterQuotedIdentifier) {
             listener.enterQuotedIdentifier(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitQuotedIdentifier) {
             listener.exitQuotedIdentifier(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitQuotedIdentifier) {
            return visitor.visitQuotedIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DigitIdentifierContext extends IdentifierContext {
    public constructor(ctx: IdentifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DIGIT_IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.DIGIT_IDENTIFIER, 0)!;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDigitIdentifier) {
             listener.enterDigitIdentifier(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDigitIdentifier) {
             listener.exitDigitIdentifier(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDigitIdentifier) {
            return visitor.visitDigitIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnquotedIdentifierContext extends IdentifierContext {
    public constructor(ctx: IdentifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.IDENTIFIER, 0);
    }
    public nonReserved(): NonReservedContext | null {
        return this.getRuleContext(0, NonReservedContext);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterUnquotedIdentifier) {
             listener.enterUnquotedIdentifier(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitUnquotedIdentifier) {
             listener.exitUnquotedIdentifier(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitUnquotedIdentifier) {
            return visitor.visitUnquotedIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NumberContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_number;
    }
    public override copyFrom(ctx: NumberContext): void {
        super.copyFrom(ctx);
    }
}
export class DecimalLiteralContext extends NumberContext {
    public constructor(ctx: NumberContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DECIMAL_VALUE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.DECIMAL_VALUE, 0)!;
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.MINUS, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDecimalLiteral) {
             listener.enterDecimalLiteral(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDecimalLiteral) {
             listener.exitDecimalLiteral(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDecimalLiteral) {
            return visitor.visitDecimalLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DoubleLiteralContext extends NumberContext {
    public constructor(ctx: NumberContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DOUBLE_VALUE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.DOUBLE_VALUE, 0)!;
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.MINUS, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterDoubleLiteral) {
             listener.enterDoubleLiteral(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitDoubleLiteral) {
             listener.exitDoubleLiteral(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDoubleLiteral) {
            return visitor.visitDoubleLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IntegerLiteralContext extends NumberContext {
    public constructor(ctx: NumberContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public INTEGER_VALUE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.INTEGER_VALUE, 0)!;
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.MINUS, 0);
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterIntegerLiteral) {
             listener.enterIntegerLiteral(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitIntegerLiteral) {
             listener.exitIntegerLiteral(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitIntegerLiteral) {
            return visitor.visitIntegerLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReservedKeywordsUsedAsFuncNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TRUNCATE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_TRUNCATE, 0);
    }
    public KW_CAST(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_CAST, 0);
    }
    public KW_CURRENT_DATE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_CURRENT_DATE, 0);
    }
    public KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_CURRENT_TIMESTAMP, 0);
    }
    public KW_DAY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DAY, 0);
    }
    public KW_EXTRACT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_EXTRACT, 0);
    }
    public KW_HOUR(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_HOUR, 0);
    }
    public KW_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_MINUTE, 0);
    }
    public KW_MONTH(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_MONTH, 0);
    }
    public KW_SECOND(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SECOND, 0);
    }
    public KW_YEAR(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_YEAR, 0);
    }
    public KW_CASE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_CASE, 0);
    }
    public KW_LEFT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_LEFT, 0);
    }
    public KW_REPLACE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_REPLACE, 0);
    }
    public KW_RIGHT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_RIGHT, 0);
    }
    public KW_SUBSTRING(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SUBSTRING, 0);
    }
    public KW_USER(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_USER, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_reservedKeywordsUsedAsFuncName;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterReservedKeywordsUsedAsFuncName) {
             listener.enterReservedKeywordsUsedAsFuncName(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitReservedKeywordsUsedAsFuncName) {
             listener.exitReservedKeywordsUsedAsFuncName(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitReservedKeywordsUsedAsFuncName) {
            return visitor.visitReservedKeywordsUsedAsFuncName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NonReservedContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_BERNOULLI(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_BERNOULLI, 0);
    }
    public KW_DAY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DAY, 0);
    }
    public KW_DATE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DATE, 0);
    }
    public KW_DAYS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_DAYS, 0);
    }
    public KW_EXCLUDING(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_EXCLUDING, 0);
    }
    public KW_HOUR(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_HOUR, 0);
    }
    public KW_INCLUDING(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_INCLUDING, 0);
    }
    public KW_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_MINUTE, 0);
    }
    public KW_MINUTES(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_MINUTES, 0);
    }
    public KW_MONTH(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_MONTH, 0);
    }
    public KW_MONTHS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_MONTHS, 0);
    }
    public KW_NFC(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NFC, 0);
    }
    public KW_NFD(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NFD, 0);
    }
    public KW_NFKC(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NFKC, 0);
    }
    public KW_NFKD(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_NFKD, 0);
    }
    public KW_OPTION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_OPTION, 0);
    }
    public KW_ORDINALITY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ORDINALITY, 0);
    }
    public KW_PRIVILEGES(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PRIVILEGES, 0);
    }
    public KW_PROPERTIES(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_PROPERTIES, 0);
    }
    public KW_SECOND(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SECOND, 0);
    }
    public KW_SECONDS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SECONDS, 0);
    }
    public KW_SUBSTRING(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SUBSTRING, 0);
    }
    public KW_SYSTEM(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SYSTEM, 0);
    }
    public KW_TRY_CAST(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_TRY_CAST, 0);
    }
    public KW_USER(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_USER, 0);
    }
    public KW_VIEWS(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_VIEWS, 0);
    }
    public KW_YEAR(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_YEAR, 0);
    }
    public KW_ORC(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_ORC, 0);
    }
    public KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_CURRENT_TIMESTAMP, 0);
    }
    public KW_CURRENT_USER(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_CURRENT_USER, 0);
    }
    public KW_EXTRACT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_EXTRACT, 0);
    }
    public KW_KEY(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_KEY, 0);
    }
    public KW_LOCALTIME(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_LOCALTIME, 0);
    }
    public KW_SHUTDOWN(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_SHUTDOWN, 0);
    }
    public override get ruleIndex(): number {
        return ImpalaSqlParser.RULE_nonReserved;
    }
    public override enterRule(listener: ImpalaSqlParserListener): void {
        if(listener.enterNonReserved) {
             listener.enterNonReserved(this);
        }
    }
    public override exitRule(listener: ImpalaSqlParserListener): void {
        if(listener.exitNonReserved) {
             listener.exitNonReserved(this);
        }
    }
    public override accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result | null {
        if (visitor.visitNonReserved) {
            return visitor.visitNonReserved(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
