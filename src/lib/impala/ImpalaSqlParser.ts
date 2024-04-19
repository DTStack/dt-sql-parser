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
    public static readonly SIMPLE_COMMENT = 287;
    public static readonly BRACKETED_COMMENT = 288;
    public static readonly WS = 289;
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
    public static readonly RULE_tableOrViewPath = 97;
    public static readonly RULE_createCommonItem = 98;
    public static readonly RULE_assignmentList = 99;
    public static readonly RULE_assignmentItem = 100;
    public static readonly RULE_viewColumns = 101;
    public static readonly RULE_queryStatement = 102;
    public static readonly RULE_with = 103;
    public static readonly RULE_constraintSpecification = 104;
    public static readonly RULE_foreignKeySpecification = 105;
    public static readonly RULE_columnSpec = 106;
    public static readonly RULE_columnDefinition = 107;
    public static readonly RULE_kuduTableElement = 108;
    public static readonly RULE_kuduColumnDefinition = 109;
    public static readonly RULE_columnSpecWithKudu = 110;
    public static readonly RULE_createColumnSpecWithKudu = 111;
    public static readonly RULE_kuduAttributes = 112;
    public static readonly RULE_kuduStorageAttr = 113;
    public static readonly RULE_statsKey = 114;
    public static readonly RULE_fileFormat = 115;
    public static readonly RULE_kuduPartitionClause = 116;
    public static readonly RULE_hashClause = 117;
    public static readonly RULE_rangeClause = 118;
    public static readonly RULE_kuduPartitionSpec = 119;
    public static readonly RULE_cacheSpec = 120;
    public static readonly RULE_rangeOperator = 121;
    public static readonly RULE_partitionCol = 122;
    public static readonly RULE_likeClause = 123;
    public static readonly RULE_properties = 124;
    public static readonly RULE_partitionedBy = 125;
    public static readonly RULE_sortedBy = 126;
    public static readonly RULE_rowFormat = 127;
    public static readonly RULE_property = 128;
    public static readonly RULE_queryNoWith = 129;
    public static readonly RULE_queryTerm = 130;
    public static readonly RULE_queryPrimary = 131;
    public static readonly RULE_sortItem = 132;
    public static readonly RULE_querySpecification = 133;
    public static readonly RULE_groupBy = 134;
    public static readonly RULE_groupingElement = 135;
    public static readonly RULE_groupingSet = 136;
    public static readonly RULE_namedQuery = 137;
    public static readonly RULE_setQuantifier = 138;
    public static readonly RULE_selectItem = 139;
    public static readonly RULE_relation = 140;
    public static readonly RULE_joinType = 141;
    public static readonly RULE_joinCriteria = 142;
    public static readonly RULE_sampledRelation = 143;
    public static readonly RULE_sampleType = 144;
    public static readonly RULE_aliasedRelation = 145;
    public static readonly RULE_columnAliases = 146;
    public static readonly RULE_relationPrimary = 147;
    public static readonly RULE_subQueryRelation = 148;
    public static readonly RULE_unnest = 149;
    public static readonly RULE_parenthesizedRelation = 150;
    public static readonly RULE_columnItem = 151;
    public static readonly RULE_expression = 152;
    public static readonly RULE_booleanExpression = 153;
    public static readonly RULE_predicate = 154;
    public static readonly RULE_valueExpression = 155;
    public static readonly RULE_primaryExpression = 156;
    public static readonly RULE_stringLiteral = 157;
    public static readonly RULE_comparisonOperator = 158;
    public static readonly RULE_comparisonQuantifier = 159;
    public static readonly RULE_booleanValue = 160;
    public static readonly RULE_interval = 161;
    public static readonly RULE_intervalField = 162;
    public static readonly RULE_normalForm = 163;
    public static readonly RULE_type = 164;
    public static readonly RULE_dataType = 165;
    public static readonly RULE_typeParameter = 166;
    public static readonly RULE_baseType = 167;
    public static readonly RULE_whenClause = 168;
    public static readonly RULE_filter = 169;
    public static readonly RULE_over = 170;
    public static readonly RULE_windowFrame = 171;
    public static readonly RULE_frameBound = 172;
    public static readonly RULE_pathElement = 173;
    public static readonly RULE_pathSpecification = 174;
    public static readonly RULE_privilege = 175;
    public static readonly RULE_objectType = 176;
    public static readonly RULE_qualifiedName = 177;
    public static readonly RULE_principal = 178;
    public static readonly RULE_identifier = 179;
    public static readonly RULE_number = 180;
    public static readonly RULE_reservedKeywordsUsedAsFuncName = 181;
    public static readonly RULE_nonReserved = 182;

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
        "SIMPLE_COMMENT", "BRACKETED_COMMENT", "WS"
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
        "columnNamePath", "tableOrViewPath", "createCommonItem", "assignmentList", 
        "assignmentItem", "viewColumns", "queryStatement", "with", "constraintSpecification", 
        "foreignKeySpecification", "columnSpec", "columnDefinition", "kuduTableElement", 
        "kuduColumnDefinition", "columnSpecWithKudu", "createColumnSpecWithKudu", 
        "kuduAttributes", "kuduStorageAttr", "statsKey", "fileFormat", "kuduPartitionClause", 
        "hashClause", "rangeClause", "kuduPartitionSpec", "cacheSpec", "rangeOperator", 
        "partitionCol", "likeClause", "properties", "partitionedBy", "sortedBy", 
        "rowFormat", "property", "queryNoWith", "queryTerm", "queryPrimary", 
        "sortItem", "querySpecification", "groupBy", "groupingElement", 
        "groupingSet", "namedQuery", "setQuantifier", "selectItem", "relation", 
        "joinType", "joinCriteria", "sampledRelation", "sampleType", "aliasedRelation", 
        "columnAliases", "relationPrimary", "subQueryRelation", "unnest", 
        "parenthesizedRelation", "columnItem", "expression", "booleanExpression", 
        "predicate", "valueExpression", "primaryExpression", "stringLiteral", 
        "comparisonOperator", "comparisonQuantifier", "booleanValue", "interval", 
        "intervalField", "normalForm", "type", "dataType", "typeParameter", 
        "baseType", "whenClause", "filter", "over", "windowFrame", "frameBound", 
        "pathElement", "pathSpecification", "privilege", "objectType", "qualifiedName", 
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
            this.state = 369;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 22085645) !== 0) || _la === 67 || _la === 86 || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 524545) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 134520835) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 1083521) !== 0) || _la === 264 || _la === 265) {
                {
                {
                this.state = 366;
                this.singleStatement();
                }
                }
                this.state = 371;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 372;
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
            this.state = 374;
            this.sqlStatement();
            this.state = 376;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 262) {
                {
                this.state = 375;
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
            this.state = 400;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 378;
                this.queryStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 379;
                this.useStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 380;
                this.createStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 381;
                this.alterStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 382;
                this.truncateTableStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 383;
                this.describeStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 384;
                this.computeStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 385;
                this.dropStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 386;
                this.grantStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 387;
                this.revokeStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 388;
                this.insertStatement();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 389;
                this.deleteStatement();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 390;
                this.updateStatement();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 391;
                this.upsertStatement();
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 392;
                this.showStatement();
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 393;
                this.addCommentStatement();
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 394;
                this.explainStatement();
                }
                break;
            case 18:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 395;
                this.setStatement();
                }
                break;
            case 19:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 396;
                this.shutdownStatement();
                }
                break;
            case 20:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 397;
                this.invalidateMetaStatement();
                }
                break;
            case 21:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 398;
                this.loadDataStatement();
                }
                break;
            case 22:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 399;
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
            this.state = 402;
            this.match(ImpalaSqlParser.KW_USE);
            this.state = 403;
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
            this.state = 413;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 405;
                this.createSchema();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 406;
                this.createRole();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 407;
                this.createAggregateFunction();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 408;
                this.createFunction();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 409;
                this.createView();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 410;
                this.createKuduTableAsSelect();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 411;
                this.createTableLike();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 412;
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
            this.state = 415;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 417;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 416;
                this.match(ImpalaSqlParser.KW_EXTERNAL);
                }
            }

            this.state = 419;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 421;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 420;
                this.ifNotExists();
                }
            }

            this.state = 423;
            this.tableNameCreate();
            this.state = 439;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
            case 1:
                {
                this.state = 424;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 425;
                this.columnDefinition();
                this.state = 430;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 426;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 427;
                        this.columnDefinition();
                        }
                        }
                    }
                    this.state = 432;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
                }
                this.state = 435;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 263) {
                    {
                    this.state = 433;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 434;
                    this.constraintSpecification();
                    }
                }

                this.state = 437;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            }
            this.state = 447;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 441;
                this.match(ImpalaSqlParser.KW_PARTITIONED);
                this.state = 442;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 445;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
                case 1:
                    {
                    this.state = 443;
                    this.columnAliases();
                    }
                    break;
                case 2:
                    {
                    this.state = 444;
                    this.partitionedBy();
                    }
                    break;
                }
                }
            }

            this.state = 449;
            this.createCommonItem();
            this.state = 452;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9) {
                {
                this.state = 450;
                this.match(ImpalaSqlParser.KW_AS);
                this.state = 451;
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
            this.state = 454;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 456;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 455;
                this.match(ImpalaSqlParser.KW_EXTERNAL);
                }
            }

            this.state = 458;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 460;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 459;
                this.ifNotExists();
                }
            }

            this.state = 462;
            this.tableNameCreate();
            this.state = 463;
            this.match(ImpalaSqlParser.KW_LIKE);
            this.state = 467;
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
                this.state = 464;
                this.tableNamePath();
                }
                break;
            case ImpalaSqlParser.KW_PARQUET:
                {
                this.state = 465;
                this.match(ImpalaSqlParser.KW_PARQUET);
                this.state = 466;
                localContext._parquet = this.stringLiteral();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 472;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 469;
                this.match(ImpalaSqlParser.KW_PARTITIONED);
                this.state = 470;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 471;
                this.partitionedBy();
                }
            }

            this.state = 474;
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
            this.state = 476;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 478;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 477;
                this.match(ImpalaSqlParser.KW_EXTERNAL);
                }
            }

            this.state = 480;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 482;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 481;
                this.ifNotExists();
                }
            }

            this.state = 484;
            this.tableNameCreate();
            this.state = 502;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 265) {
                {
                this.state = 485;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 486;
                this.kuduTableElement();
                this.state = 491;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 487;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 488;
                        this.kuduTableElement();
                        }
                        }
                    }
                    this.state = 493;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
                }
                this.state = 498;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 263) {
                    {
                    this.state = 494;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 495;
                    this.match(ImpalaSqlParser.KW_PRIMARY);
                    this.state = 496;
                    this.match(ImpalaSqlParser.KW_KEY);
                    this.state = 497;
                    this.columnAliases();
                    }
                }

                this.state = 500;
                this.match(ImpalaSqlParser.RPAREN);
                }
            }

            this.state = 509;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 150) {
                {
                this.state = 504;
                this.match(ImpalaSqlParser.KW_PRIMARY);
                this.state = 505;
                this.match(ImpalaSqlParser.KW_KEY);
                this.state = 507;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 265) {
                    {
                    this.state = 506;
                    this.columnAliases();
                    }
                }

                }
            }

            this.state = 514;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 511;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 512;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 513;
                this.kuduPartitionClause();
                }
            }

            this.state = 518;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 516;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 517;
                this.stringLiteral();
                }
            }

            this.state = 520;
            this.match(ImpalaSqlParser.KW_STORED);
            this.state = 521;
            this.match(ImpalaSqlParser.KW_AS);
            this.state = 522;
            this.match(ImpalaSqlParser.KW_KUDU);
            this.state = 525;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 25) {
                {
                this.state = 523;
                this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
                this.state = 524;
                localContext._tblProp = this.properties();
                }
            }

            this.state = 529;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9) {
                {
                this.state = 527;
                this.match(ImpalaSqlParser.KW_AS);
                this.state = 528;
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
            this.state = 531;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 532;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 534;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 533;
                this.ifNotExists();
                }
            }

            this.state = 536;
            this.viewNameCreate();
            this.state = 538;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 265) {
                {
                this.state = 537;
                this.viewColumns();
                }
            }

            this.state = 542;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 540;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 541;
                this.stringLiteral();
                }
            }

            this.state = 546;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 25) {
                {
                this.state = 544;
                this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
                this.state = 545;
                localContext._tblProp = this.properties();
                }
            }

            this.state = 548;
            this.match(ImpalaSqlParser.KW_AS);
            this.state = 549;
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
            this.state = 551;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 552;
            _la = this.tokenStream.LA(1);
            if(!(_la === 46 || _la === 170)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 554;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 553;
                this.ifNotExists();
                }
            }

            this.state = 556;
            this.databaseNameCreate();
            this.state = 559;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context) ) {
            case 1:
                {
                this.state = 557;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 558;
                localContext._comment = this.stringLiteral();
                }
                break;
            }
            this.state = 563;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 24) {
                {
                this.state = 561;
                this.match(ImpalaSqlParser.KW_LOCATION);
                this.state = 562;
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
            this.state = 565;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 566;
            this.match(ImpalaSqlParser.KW_ROLE);
            this.state = 567;
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
            this.state = 569;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 571;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 12) {
                {
                this.state = 570;
                this.match(ImpalaSqlParser.KW_AGGREGATE);
                }
            }

            this.state = 573;
            this.match(ImpalaSqlParser.KW_FUNCTION);
            this.state = 575;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 574;
                this.ifNotExists();
                }
            }

            this.state = 577;
            this.functionNameCreate();
            this.state = 590;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 265) {
                {
                this.state = 578;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 587;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 8 || _la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 4286652929) !== 0) || ((((_la - 236)) & ~0x1F) === 0 && ((1 << (_la - 236)) & 511) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 7873) !== 0)) {
                    {
                    this.state = 579;
                    this.type_(0);
                    this.state = 584;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 580;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 581;
                        this.type_(0);
                        }
                        }
                        this.state = 586;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 589;
                this.match(ImpalaSqlParser.RPAREN);
                }
            }

            this.state = 592;
            this.match(ImpalaSqlParser.KW_RETURNS);
            this.state = 593;
            this.type_(0);
            this.state = 596;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 102) {
                {
                this.state = 594;
                this.match(ImpalaSqlParser.KW_INTERMEDIATE);
                this.state = 595;
                this.type_(0);
                }
            }

            this.state = 598;
            this.match(ImpalaSqlParser.KW_LOCATION);
            this.state = 599;
            this.match(ImpalaSqlParser.STRING);
            this.state = 603;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 104) {
                {
                this.state = 600;
                this.match(ImpalaSqlParser.KW_INIT_FN);
                this.state = 601;
                this.match(ImpalaSqlParser.EQ);
                this.state = 602;
                this.match(ImpalaSqlParser.STRING);
                }
            }

            this.state = 605;
            this.match(ImpalaSqlParser.KW_UPDATE_FN);
            this.state = 606;
            this.match(ImpalaSqlParser.EQ);
            this.state = 607;
            this.match(ImpalaSqlParser.STRING);
            this.state = 608;
            this.match(ImpalaSqlParser.KW_MERGE_FN);
            this.state = 609;
            this.match(ImpalaSqlParser.EQ);
            this.state = 610;
            this.match(ImpalaSqlParser.STRING);
            this.state = 614;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 18) {
                {
                this.state = 611;
                this.match(ImpalaSqlParser.KW_PREPARE_FN);
                this.state = 612;
                this.match(ImpalaSqlParser.EQ);
                this.state = 613;
                this.match(ImpalaSqlParser.STRING);
                }
            }

            this.state = 619;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 616;
                this.match(ImpalaSqlParser.KW_CLOSEFN);
                this.state = 617;
                this.match(ImpalaSqlParser.EQ);
                this.state = 618;
                this.match(ImpalaSqlParser.STRING);
                }
            }

            this.state = 624;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 187) {
                {
                this.state = 621;
                this.match(ImpalaSqlParser.KW_SERIALIZE_FN);
                this.state = 622;
                this.match(ImpalaSqlParser.EQ);
                this.state = 623;
                this.match(ImpalaSqlParser.STRING);
                }
            }

            this.state = 629;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 76) {
                {
                this.state = 626;
                this.match(ImpalaSqlParser.KW_FINALIZE_FN);
                this.state = 627;
                this.match(ImpalaSqlParser.EQ);
                this.state = 628;
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
            this.state = 631;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 632;
            this.match(ImpalaSqlParser.KW_FUNCTION);
            this.state = 634;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 633;
                this.ifNotExists();
                }
            }

            this.state = 636;
            this.functionNameCreate();
            this.state = 649;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 265) {
                {
                this.state = 637;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 646;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 8 || _la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 4286652929) !== 0) || ((((_la - 236)) & ~0x1F) === 0 && ((1 << (_la - 236)) & 511) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 7873) !== 0)) {
                    {
                    this.state = 638;
                    this.type_(0);
                    this.state = 643;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 639;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 640;
                        this.type_(0);
                        }
                        }
                        this.state = 645;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 648;
                this.match(ImpalaSqlParser.RPAREN);
                }
            }

            this.state = 653;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 160) {
                {
                this.state = 651;
                this.match(ImpalaSqlParser.KW_RETURNS);
                this.state = 652;
                this.type_(0);
                }
            }

            this.state = 655;
            this.match(ImpalaSqlParser.KW_LOCATION);
            this.state = 656;
            this.match(ImpalaSqlParser.STRING);
            this.state = 657;
            this.match(ImpalaSqlParser.KW_SYMBOL);
            this.state = 658;
            this.match(ImpalaSqlParser.EQ);
            this.state = 659;
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
            this.state = 679;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 50, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 661;
                this.alterDatabase();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 662;
                this.alterUnSetOrSetViewTblproperties();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 663;
                this.renameTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 664;
                this.alterViewOwner();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 665;
                this.alterView();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 666;
                this.renameView();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 667;
                this.dropPartitionByRangeOrValue();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 668;
                this.alterFormat();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 669;
                this.recoverPartitions();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 670;
                this.addPartitionByRangeOrValue();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 671;
                this.alterTableNonKuduOrKuduOnly();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 672;
                this.addSingleColumn();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 673;
                this.replaceOrAddColumns();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 674;
                this.changeColumnDefine();
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 675;
                this.alterStatsKey();
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 676;
                this.alterPartitionCache();
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 677;
                this.alterDropSingleColumn();
                }
                break;
            case 18:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 678;
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
            this.state = 681;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 682;
            this.match(ImpalaSqlParser.KW_DATABASE);
            this.state = 683;
            this.databaseNamePath();
            this.state = 684;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 685;
            this.match(ImpalaSqlParser.KW_OWNER);
            this.state = 686;
            _la = this.tokenStream.LA(1);
            if(!(_la === 166 || _la === 204)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 687;
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
            this.state = 689;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 690;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 691;
            this.tableNamePath();
            this.state = 692;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 693;
            this.match(ImpalaSqlParser.KW_COLUMN);
            this.state = 694;
            this.match(ImpalaSqlParser.KW_STATS);
            this.state = 695;
            this.columnNamePath();
            this.state = 696;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 697;
            this.statsKey();
            this.state = 698;
            this.match(ImpalaSqlParser.EQ);
            this.state = 699;
            this.stringLiteral();
            this.state = 705;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 263) {
                {
                this.state = 700;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 701;
                this.statsKey();
                this.state = 702;
                this.match(ImpalaSqlParser.EQ);
                this.state = 703;
                this.stringLiteral();
                }
            }

            this.state = 707;
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
            this.state = 709;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 710;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 711;
            this.tableNamePath();
            this.state = 714;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 712;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 713;
                this.expression();
                }
            }

            this.state = 716;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 727;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_CACHED:
                {
                {
                this.state = 717;
                this.match(ImpalaSqlParser.KW_CACHED);
                this.state = 718;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 719;
                this.stringLiteral();
                this.state = 724;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 53, this.context) ) {
                case 1:
                    {
                    this.state = 720;
                    this.match(ImpalaSqlParser.KW_WITH);
                    this.state = 721;
                    this.match(ImpalaSqlParser.KW_REPLICATION);
                    this.state = 722;
                    this.match(ImpalaSqlParser.EQ);
                    this.state = 723;
                    this.number_();
                    }
                    break;
                }
                }
                }
                break;
            case ImpalaSqlParser.KW_UNCACHED:
                {
                this.state = 726;
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
            this.state = 729;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 730;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 731;
            this.tableNamePath();
            this.state = 732;
            this.match(ImpalaSqlParser.KW_CHANGE);
            this.state = 733;
            this.match(ImpalaSqlParser.KW_COLUMN);
            this.state = 734;
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
            this.state = 736;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 737;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 738;
            this.tableNamePath();
            this.state = 739;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 741;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
            case 1:
                {
                this.state = 740;
                this.match(ImpalaSqlParser.KW_COLUMN);
                }
                break;
            }
            this.state = 743;
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
            this.state = 745;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 746;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 747;
            this.tableNamePath();
            this.state = 748;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 749;
            this.match(ImpalaSqlParser.KW_OWNER);
            this.state = 750;
            _la = this.tokenStream.LA(1);
            if(!(_la === 166 || _la === 204)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 751;
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
            this.state = 753;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 754;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 755;
            this.tableNamePath();
            this.state = 761;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_REPLACE:
                {
                this.state = 756;
                this.match(ImpalaSqlParser.KW_REPLACE);
                }
                break;
            case ImpalaSqlParser.KW_ADD:
                {
                this.state = 757;
                this.match(ImpalaSqlParser.KW_ADD);
                this.state = 759;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                    this.state = 758;
                    this.ifNotExists();
                    }
                }

                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 763;
            this.match(ImpalaSqlParser.KW_COLUMNS);
            this.state = 764;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 765;
            this.columnSpecWithKudu();
            this.state = 770;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1 + 1) {
                    {
                    {
                    this.state = 766;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 767;
                    this.columnSpecWithKudu();
                    }
                    }
                }
                this.state = 772;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
            }
            this.state = 773;
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
            this.state = 775;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 776;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 777;
            this.tableNamePath();
            this.state = 778;
            this.match(ImpalaSqlParser.KW_ADD);
            this.state = 779;
            this.match(ImpalaSqlParser.KW_COLUMN);
            this.state = 781;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 780;
                this.ifNotExists();
                }
            }

            this.state = 783;
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
            this.state = 785;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 786;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 787;
            this.tableNamePath();
            this.state = 788;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 790;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 60, this.context) ) {
            case 1:
                {
                this.state = 789;
                this.match(ImpalaSqlParser.KW_COLUMN);
                }
                break;
            }
            this.state = 792;
            this.columnNamePath();
            this.state = 801;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_SET:
                {
                this.state = 793;
                this.match(ImpalaSqlParser.KW_SET);
                this.state = 797;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.KW_BLOCK_SIZE:
                case ImpalaSqlParser.KW_COMPRESSION:
                case ImpalaSqlParser.KW_DEFAULT:
                case ImpalaSqlParser.KW_ENCODING:
                    {
                    this.state = 794;
                    this.kuduStorageAttr();
                    }
                    break;
                case ImpalaSqlParser.KW_COMMENT:
                    {
                    this.state = 795;
                    this.match(ImpalaSqlParser.KW_COMMENT);
                    this.state = 796;
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
                this.state = 799;
                this.match(ImpalaSqlParser.KW_DROP);
                this.state = 800;
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
            this.state = 803;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 804;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 805;
            this.tableNamePath();
            this.state = 806;
            this.match(ImpalaSqlParser.KW_ADD);
            this.state = 808;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 807;
                this.ifNotExists();
                }
            }

            this.state = 822;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_PARTITION:
                {
                this.state = 810;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 811;
                this.expression();
                this.state = 814;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 24) {
                    {
                    this.state = 812;
                    this.match(ImpalaSqlParser.KW_LOCATION);
                    this.state = 813;
                    this.stringLiteral();
                    }
                }

                this.state = 817;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 30 || _la === 197) {
                    {
                    this.state = 816;
                    this.cacheSpec();
                    }
                }

                }
                break;
            case ImpalaSqlParser.KW_RANGE:
                {
                this.state = 819;
                this.match(ImpalaSqlParser.KW_RANGE);
                this.state = 820;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 821;
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
            this.state = 824;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 825;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 826;
            this.tableNamePath();
            this.state = 829;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 827;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 828;
                this.expression();
                }
            }

            this.state = 831;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 843;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_FILEFORMAT:
                {
                {
                this.state = 832;
                this.match(ImpalaSqlParser.KW_FILEFORMAT);
                this.state = 833;
                this.fileFormat();
                }
                }
                break;
            case ImpalaSqlParser.KW_ROW:
                {
                {
                this.state = 834;
                this.match(ImpalaSqlParser.KW_ROW);
                this.state = 835;
                this.match(ImpalaSqlParser.KW_FORMAT);
                this.state = 836;
                this.rowFormat();
                }
                }
                break;
            case ImpalaSqlParser.KW_LOCATION:
                {
                {
                this.state = 837;
                this.match(ImpalaSqlParser.KW_LOCATION);
                this.state = 838;
                this.stringLiteral();
                }
                }
                break;
            case ImpalaSqlParser.KW_TBLPROPERTIES:
                {
                {
                this.state = 839;
                this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
                this.state = 840;
                localContext._tblProp = this.properties();
                }
                }
                break;
            case ImpalaSqlParser.KW_SERDEPROPERTIES:
                {
                {
                this.state = 841;
                this.match(ImpalaSqlParser.KW_SERDEPROPERTIES);
                this.state = 842;
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
            this.state = 845;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 846;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 847;
            this.tableNamePath();
            this.state = 848;
            this.match(ImpalaSqlParser.KW_RECOVER);
            this.state = 849;
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
            this.state = 851;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 852;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 853;
            this.tableNamePath();
            this.state = 854;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 856;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 855;
                this.ifExists();
                }
            }

            this.state = 866;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_PARTITION:
                {
                this.state = 858;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 859;
                this.expression();
                this.state = 861;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 22) {
                    {
                    this.state = 860;
                    this.match(ImpalaSqlParser.KW_PURGE);
                    }
                }

                }
                break;
            case ImpalaSqlParser.KW_RANGE:
                {
                this.state = 863;
                this.match(ImpalaSqlParser.KW_RANGE);
                this.state = 864;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 865;
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
            this.state = 868;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 869;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 870;
            this.viewNamePath();
            this.state = 872;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 265) {
                {
                this.state = 871;
                this.viewColumns();
                }
            }

            this.state = 874;
            this.match(ImpalaSqlParser.KW_AS);
            this.state = 875;
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
            this.state = 877;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 878;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 879;
            this.viewNamePath();
            this.state = 880;
            this.match(ImpalaSqlParser.KW_RENAME);
            this.state = 881;
            this.match(ImpalaSqlParser.KW_TO);
            this.state = 882;
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
            this.state = 884;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 885;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 886;
            this.viewNamePath();
            this.state = 887;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 888;
            this.match(ImpalaSqlParser.KW_OWNER);
            this.state = 889;
            _la = this.tokenStream.LA(1);
            if(!(_la === 166 || _la === 204)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 890;
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
            this.state = 892;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 893;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 894;
            this.tableNamePath();
            this.state = 895;
            this.match(ImpalaSqlParser.KW_RENAME);
            this.state = 896;
            this.match(ImpalaSqlParser.KW_TO);
            this.state = 897;
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
            this.state = 899;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 900;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 901;
            this.viewNamePath();
            this.state = 902;
            _la = this.tokenStream.LA(1);
            if(!(_la === 176 || _la === 202)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 903;
            this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
            this.state = 904;
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
            this.state = 906;
            this.match(ImpalaSqlParser.KW_TRUNCATE);
            this.state = 908;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 188) {
                {
                this.state = 907;
                this.match(ImpalaSqlParser.KW_TABLE);
                }
            }

            this.state = 911;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 910;
                this.ifExists();
                }
            }

            this.state = 913;
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
            this.state = 915;
            this.match(ImpalaSqlParser.KW_DESCRIBE);
            this.state = 917;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 46) {
                {
                this.state = 916;
                this.match(ImpalaSqlParser.KW_DATABASE);
                }
            }

            this.state = 920;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 69 || _la === 80) {
                {
                this.state = 919;
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

            this.state = 922;
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
            this.state = 926;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 77, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 924;
                this.computeStats();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 925;
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
            this.state = 928;
            this.match(ImpalaSqlParser.KW_COMPUTE);
            this.state = 929;
            this.match(ImpalaSqlParser.KW_STATS);
            this.state = 930;
            this.tableNamePath();
            this.state = 932;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context) ) {
            case 1:
                {
                this.state = 931;
                this.columnAliases();
                }
                break;
            }
            this.state = 946;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 190) {
                {
                this.state = 934;
                this.match(ImpalaSqlParser.KW_TABLESAMPLE);
                this.state = 935;
                this.match(ImpalaSqlParser.KW_SYSTEM);
                this.state = 936;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 937;
                this.number_();
                this.state = 938;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 944;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 157) {
                    {
                    this.state = 939;
                    this.match(ImpalaSqlParser.KW_REPEATABLE);
                    this.state = 940;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 941;
                    this.number_();
                    this.state = 942;
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
            this.state = 948;
            this.match(ImpalaSqlParser.KW_COMPUTE);
            this.state = 949;
            this.match(ImpalaSqlParser.KW_INCREMENTAL);
            this.state = 950;
            this.match(ImpalaSqlParser.KW_STATS);
            this.state = 951;
            this.tableNamePath();
            this.state = 957;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 952;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 953;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 954;
                this.expression();
                this.state = 955;
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
            this.state = 965;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 959;
                this.dropRole();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 960;
                this.dropFunction();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 961;
                this.dropIncrementalStats();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 962;
                this.dropView();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 963;
                this.dropTable();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 964;
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
            this.state = 967;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 968;
            _la = this.tokenStream.LA(1);
            if(!(_la === 46 || _la === 170)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 970;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 969;
                this.ifExists();
                }
            }

            this.state = 972;
            this.databaseNamePath();
            this.state = 974;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 27 || _la === 159) {
                {
                this.state = 973;
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
            this.state = 976;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 977;
            this.match(ImpalaSqlParser.KW_VIEW);
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
            this.state = 983;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 984;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 986;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 985;
                this.ifExists();
                }
            }

            this.state = 988;
            this.tableNamePath();
            this.state = 990;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 22) {
                {
                this.state = 989;
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
            this.state = 992;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 994;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 96) {
                {
                this.state = 993;
                this.match(ImpalaSqlParser.KW_INCREMENTAL);
                }
            }

            this.state = 996;
            this.match(ImpalaSqlParser.KW_STATS);
            this.state = 997;
            this.tableNamePath();
            this.state = 1000;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 998;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 999;
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
            this.state = 1002;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 1004;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 12) {
                {
                this.state = 1003;
                this.match(ImpalaSqlParser.KW_AGGREGATE);
                }
            }

            this.state = 1006;
            this.match(ImpalaSqlParser.KW_FUNCTION);
            this.state = 1008;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 1007;
                this.ifExists();
                }
            }

            this.state = 1010;
            this.functionNamePath();
            this.state = 1023;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 94, this.context) ) {
            case 1:
                {
                this.state = 1011;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1020;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 8 || _la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 4286652929) !== 0) || ((((_la - 236)) & ~0x1F) === 0 && ((1 << (_la - 236)) & 511) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 7873) !== 0)) {
                    {
                    this.state = 1012;
                    this.type_(0);
                    this.state = 1017;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 1013;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1014;
                        this.type_(0);
                        }
                        }
                        this.state = 1019;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1022;
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
            this.state = 1025;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 1026;
            this.match(ImpalaSqlParser.KW_ROLE);
            this.state = 1027;
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
            this.state = 1031;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 95, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1029;
                this.grantRole();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1030;
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
            this.state = 1033;
            this.match(ImpalaSqlParser.KW_GRANT);
            this.state = 1034;
            this.match(ImpalaSqlParser.KW_ROLE);
            this.state = 1035;
            this.identifier();
            this.state = 1036;
            this.match(ImpalaSqlParser.KW_TO);
            this.state = 1037;
            this.match(ImpalaSqlParser.KW_GROUP);
            this.state = 1038;
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
            this.state = 1040;
            this.match(ImpalaSqlParser.KW_GRANT);
            this.state = 1041;
            this.privilege();
            this.state = 1042;
            this.match(ImpalaSqlParser.KW_ON);
            this.state = 1043;
            this.objectType();
            this.state = 1045;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                {
                this.state = 1044;
                this.qualifiedName();
                }
            }

            this.state = 1047;
            this.match(ImpalaSqlParser.KW_TO);
            this.state = 1048;
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
            this.state = 1052;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 97, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1050;
                this.revokeRole();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1051;
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
            this.state = 1054;
            this.match(ImpalaSqlParser.KW_REVOKE);
            this.state = 1055;
            this.match(ImpalaSqlParser.KW_ROLE);
            this.state = 1056;
            this.identifier();
            this.state = 1057;
            this.match(ImpalaSqlParser.KW_FROM);
            this.state = 1058;
            this.match(ImpalaSqlParser.KW_GROUP);
            this.state = 1059;
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
            this.state = 1061;
            this.match(ImpalaSqlParser.KW_REVOKE);
            this.state = 1065;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 86) {
                {
                this.state = 1062;
                this.match(ImpalaSqlParser.KW_GRANT);
                this.state = 1063;
                this.match(ImpalaSqlParser.KW_OPTION);
                this.state = 1064;
                this.match(ImpalaSqlParser.KW_FOR);
                }
            }

            this.state = 1067;
            this.privilege();
            this.state = 1068;
            this.match(ImpalaSqlParser.KW_ON);
            this.state = 1069;
            this.objectType();
            this.state = 1071;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                {
                this.state = 1070;
                this.qualifiedName();
                }
            }

            this.state = 1073;
            this.match(ImpalaSqlParser.KW_FROM);
            this.state = 1079;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 101, this.context) ) {
            case 1:
                {
                this.state = 1074;
                localContext._grantee = this.principal();
                }
                break;
            case 2:
                {
                this.state = 1076;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 166) {
                    {
                    this.state = 1075;
                    this.match(ImpalaSqlParser.KW_ROLE);
                    }
                }

                this.state = 1078;
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
            this.state = 1082;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 216) {
                {
                this.state = 1081;
                this.with_();
                }
            }

            this.state = 1084;
            this.match(ImpalaSqlParser.KW_INSERT);
            this.state = 1085;
            _la = this.tokenStream.LA(1);
            if(!(_la === 103 || _la === 144)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1087;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 188) {
                {
                this.state = 1086;
                this.match(ImpalaSqlParser.KW_TABLE);
                }
            }

            this.state = 1089;
            this.tableNamePath();
            this.state = 1091;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 104, this.context) ) {
            case 1:
                {
                this.state = 1090;
                this.columnAliases();
                }
                break;
            }
            this.state = 1105;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 1093;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 1094;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1095;
                this.expression();
                this.state = 1100;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                    {
                    this.state = 1096;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1097;
                    this.expression();
                    }
                    }
                    this.state = 1102;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1103;
                this.match(ImpalaSqlParser.RPAREN);
                }
            }

            this.state = 1107;
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
            this.state = 1111;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 107, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1109;
                this.delete_();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1110;
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
            this.state = 1113;
            this.match(ImpalaSqlParser.KW_DELETE);
            this.state = 1115;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 82) {
                {
                this.state = 1114;
                this.match(ImpalaSqlParser.KW_FROM);
                }
            }

            this.state = 1117;
            this.tableNamePath();
            this.state = 1120;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 215) {
                {
                this.state = 1118;
                this.match(ImpalaSqlParser.KW_WHERE);
                this.state = 1119;
                this.booleanExpression(0);
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
            this.state = 1122;
            this.match(ImpalaSqlParser.KW_DELETE);
            this.state = 1123;
            this.tableNamePath();
            this.state = 1128;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9 || _la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                {
                this.state = 1125;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                    this.state = 1124;
                    this.match(ImpalaSqlParser.KW_AS);
                    }
                }

                this.state = 1127;
                this.identifier();
                }
            }

            this.state = 1130;
            this.match(ImpalaSqlParser.KW_FROM);
            this.state = 1139;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 113, this.context) ) {
            case 1:
                {
                this.state = 1131;
                this.relation(0);
                this.state = 1136;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                    {
                    this.state = 1132;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1133;
                    this.relation(0);
                    }
                    }
                    this.state = 1138;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            }
            this.state = 1143;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 215) {
                {
                this.state = 1141;
                this.match(ImpalaSqlParser.KW_WHERE);
                this.state = 1142;
                this.booleanExpression(0);
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
            this.state = 1145;
            this.match(ImpalaSqlParser.KW_UPDATE);
            this.state = 1146;
            this.tableNamePath();
            this.state = 1147;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 1148;
            this.assignmentList();
            this.state = 1158;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 82) {
                {
                this.state = 1149;
                this.match(ImpalaSqlParser.KW_FROM);
                this.state = 1150;
                this.relation(0);
                this.state = 1155;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                    {
                    this.state = 1151;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1152;
                    this.relation(0);
                    }
                    }
                    this.state = 1157;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1162;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 215) {
                {
                this.state = 1160;
                this.match(ImpalaSqlParser.KW_WHERE);
                this.state = 1161;
                this.booleanExpression(0);
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
            this.state = 1164;
            this.match(ImpalaSqlParser.KW_UPSERT);
            this.state = 1165;
            this.match(ImpalaSqlParser.KW_INTO);
            this.state = 1167;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 188) {
                {
                this.state = 1166;
                this.match(ImpalaSqlParser.KW_TABLE);
                }
            }

            this.state = 1169;
            this.tableNamePath();
            this.state = 1171;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 119, this.context) ) {
            case 1:
                {
                this.state = 1170;
                this.columnAliases();
                }
                break;
            }
            this.state = 1173;
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
            this.state = 1187;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 120, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1175;
                this.showRoles();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1176;
                this.showRoleGrant();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1177;
                this.showGrants();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1178;
                this.showFiles();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1179;
                this.showPartitions();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1180;
                this.showColumnStats();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1181;
                this.showTableStats();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1182;
                this.showCreateView();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1183;
                this.showCreateTable();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1184;
                this.showFunctions();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1185;
                this.showTables();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1186;
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
            this.state = 1189;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1190;
            _la = this.tokenStream.LA(1);
            if(!(_la === 47 || _la === 171)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1202;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115 || _la === 274 || _la === 275) {
                {
                this.state = 1192;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 1191;
                    this.match(ImpalaSqlParser.KW_LIKE);
                    }
                }

                this.state = 1194;
                localContext._pattern = this.stringLiteral();
                this.state = 1199;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 271) {
                    {
                    {
                    this.state = 1195;
                    this.match(ImpalaSqlParser.BITWISEOR);
                    this.state = 1196;
                    this.stringLiteral();
                    }
                    }
                    this.state = 1201;
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
            this.state = 1204;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1205;
            this.match(ImpalaSqlParser.KW_TABLES);
            this.state = 1208;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 94) {
                {
                this.state = 1206;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 1207;
                this.tableNamePath();
                }
            }

            this.state = 1221;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115 || _la === 274 || _la === 275) {
                {
                this.state = 1211;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 1210;
                    this.match(ImpalaSqlParser.KW_LIKE);
                    }
                }

                this.state = 1213;
                localContext._pattern = this.stringLiteral();
                this.state = 1218;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 271) {
                    {
                    {
                    this.state = 1214;
                    this.match(ImpalaSqlParser.BITWISEOR);
                    this.state = 1215;
                    this.stringLiteral();
                    }
                    }
                    this.state = 1220;
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
            this.state = 1223;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1225;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3 || _la === 12) {
                {
                this.state = 1224;
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

            this.state = 1227;
            this.match(ImpalaSqlParser.KW_FUNCTIONS);
            this.state = 1230;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 94) {
                {
                this.state = 1228;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 1229;
                this.databaseNamePath();
                }
            }

            this.state = 1243;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115 || _la === 274 || _la === 275) {
                {
                this.state = 1233;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 1232;
                    this.match(ImpalaSqlParser.KW_LIKE);
                    }
                }

                this.state = 1235;
                localContext._pattern = this.stringLiteral();
                this.state = 1240;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 271) {
                    {
                    {
                    this.state = 1236;
                    this.match(ImpalaSqlParser.BITWISEOR);
                    this.state = 1237;
                    this.stringLiteral();
                    }
                    }
                    this.state = 1242;
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
            this.state = 1245;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1246;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 1247;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 1248;
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
            this.state = 1250;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1251;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 1252;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 1253;
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
            this.state = 1255;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1256;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 1257;
            this.match(ImpalaSqlParser.KW_STATS);
            this.state = 1258;
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
            this.state = 1260;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1261;
            this.match(ImpalaSqlParser.KW_COLUMN);
            this.state = 1262;
            this.match(ImpalaSqlParser.KW_STATS);
            this.state = 1263;
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
            this.state = 1265;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1267;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 154) {
                {
                this.state = 1266;
                this.match(ImpalaSqlParser.KW_RANGE);
                }
            }

            this.state = 1269;
            this.match(ImpalaSqlParser.KW_PARTITIONS);
            this.state = 1270;
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
            this.state = 1272;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1273;
            this.match(ImpalaSqlParser.KW_FILES);
            this.state = 1274;
            this.match(ImpalaSqlParser.KW_IN);
            this.state = 1275;
            this.tableNamePath();
            this.state = 1285;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 1276;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 1277;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1278;
                this.expression();
                this.state = 1281;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 263) {
                    {
                    this.state = 1279;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1280;
                    this.expression();
                    }
                }

                this.state = 1283;
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
            this.state = 1287;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1289;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 39) {
                {
                this.state = 1288;
                this.match(ImpalaSqlParser.KW_CURRENT);
                }
            }

            this.state = 1291;
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
            this.state = 1293;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1294;
            this.match(ImpalaSqlParser.KW_ROLE);
            this.state = 1295;
            this.match(ImpalaSqlParser.KW_GRANT);
            this.state = 1296;
            this.match(ImpalaSqlParser.KW_GROUP);
            this.state = 1297;
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
            this.state = 1313;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 139, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1299;
                this.showDatabaseGrant();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1300;
                this.showTableGrant();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1301;
                this.showColumnGrant();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1302;
                this.match(ImpalaSqlParser.KW_SHOW);
                this.state = 1303;
                this.match(ImpalaSqlParser.KW_GRANT);
                this.state = 1304;
                _la = this.tokenStream.LA(1);
                if(!(_la === 87 || _la === 166 || _la === 204)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1305;
                this.identifier();
                this.state = 1311;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 136) {
                    {
                    this.state = 1306;
                    this.match(ImpalaSqlParser.KW_ON);
                    this.state = 1307;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 178 || _la === 209)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1309;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                        {
                        this.state = 1308;
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
            this.state = 1315;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1316;
            this.match(ImpalaSqlParser.KW_GRANT);
            this.state = 1317;
            _la = this.tokenStream.LA(1);
            if(!(_la === 87 || _la === 166 || _la === 204)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1318;
            this.identifier();
            this.state = 1324;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 136) {
                {
                this.state = 1319;
                this.match(ImpalaSqlParser.KW_ON);
                this.state = 1320;
                this.match(ImpalaSqlParser.KW_DATABASE);
                this.state = 1322;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                    {
                    this.state = 1321;
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
            this.state = 1326;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1327;
            this.match(ImpalaSqlParser.KW_GRANT);
            this.state = 1328;
            _la = this.tokenStream.LA(1);
            if(!(_la === 87 || _la === 166 || _la === 204)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1329;
            this.identifier();
            this.state = 1335;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 136) {
                {
                this.state = 1330;
                this.match(ImpalaSqlParser.KW_ON);
                this.state = 1331;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 1333;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                    {
                    this.state = 1332;
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
            this.state = 1337;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1338;
            this.match(ImpalaSqlParser.KW_GRANT);
            this.state = 1339;
            _la = this.tokenStream.LA(1);
            if(!(_la === 87 || _la === 166 || _la === 204)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1340;
            this.identifier();
            this.state = 1346;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 136) {
                {
                this.state = 1341;
                this.match(ImpalaSqlParser.KW_ON);
                this.state = 1342;
                this.match(ImpalaSqlParser.KW_COLUMN);
                this.state = 1344;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 144, this.context) ) {
                case 1:
                    {
                    this.state = 1343;
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
            this.state = 1351;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 146, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1348;
                this.addDatabaseComments();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1349;
                this.addTableComments();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1350;
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
            this.state = 1353;
            this.match(ImpalaSqlParser.KW_COMMENT);
            this.state = 1354;
            this.match(ImpalaSqlParser.KW_ON);
            this.state = 1355;
            this.match(ImpalaSqlParser.KW_DATABASE);
            this.state = 1356;
            this.databaseNamePath();
            this.state = 1357;
            this.match(ImpalaSqlParser.KW_IS);
            this.state = 1360;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.UNICODE_STRING:
                {
                this.state = 1358;
                this.stringLiteral();
                }
                break;
            case ImpalaSqlParser.KW_NULL:
                {
                this.state = 1359;
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
            this.state = 1362;
            this.match(ImpalaSqlParser.KW_COMMENT);
            this.state = 1363;
            this.match(ImpalaSqlParser.KW_ON);
            this.state = 1364;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 1365;
            this.tableNamePath();
            this.state = 1366;
            this.match(ImpalaSqlParser.KW_IS);
            this.state = 1369;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.UNICODE_STRING:
                {
                this.state = 1367;
                this.stringLiteral();
                }
                break;
            case ImpalaSqlParser.KW_NULL:
                {
                this.state = 1368;
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
            this.state = 1371;
            this.match(ImpalaSqlParser.KW_COMMENT);
            this.state = 1372;
            this.match(ImpalaSqlParser.KW_ON);
            this.state = 1373;
            this.match(ImpalaSqlParser.KW_COLUMN);
            this.state = 1374;
            this.columnNamePath();
            this.state = 1375;
            this.match(ImpalaSqlParser.KW_IS);
            this.state = 1378;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.UNICODE_STRING:
                {
                this.state = 1376;
                this.stringLiteral();
                }
                break;
            case ImpalaSqlParser.KW_NULL:
                {
                this.state = 1377;
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
            this.state = 1380;
            this.match(ImpalaSqlParser.KW_EXPLAIN);
            this.state = 1381;
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
            this.state = 1383;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 1389;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_ALL:
                {
                this.state = 1384;
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
                this.state = 1385;
                this.identifier();
                this.state = 1386;
                this.match(ImpalaSqlParser.EQ);
                this.state = 1387;
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
            this.state = 1391;
            this.match(ImpalaSqlParser.COLON);
            this.state = 1392;
            this.match(ImpalaSqlParser.KW_SHUTDOWN);
            this.state = 1393;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 1403;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 153, this.context) ) {
            case 1:
                {
                this.state = 1395;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 274 || _la === 275) {
                    {
                    this.state = 1394;
                    this.stringLiteral();
                    }
                }

                }
                break;
            case 2:
                {
                this.state = 1397;
                this.stringLiteral();
                this.state = 1400;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 263) {
                    {
                    this.state = 1398;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1399;
                    this.expression();
                    }
                }

                }
                break;
            case 3:
                {
                this.state = 1402;
                this.expression();
                }
                break;
            }
            this.state = 1405;
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
            this.state = 1407;
            this.match(ImpalaSqlParser.KW_INVALIDATE);
            this.state = 1408;
            this.match(ImpalaSqlParser.KW_METADATA);
            this.state = 1409;
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
            this.state = 1411;
            this.match(ImpalaSqlParser.KW_LOAD);
            this.state = 1412;
            this.match(ImpalaSqlParser.KW_DATA);
            this.state = 1413;
            this.match(ImpalaSqlParser.KW_INPATH);
            this.state = 1414;
            this.match(ImpalaSqlParser.STRING);
            this.state = 1416;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 144) {
                {
                this.state = 1415;
                this.match(ImpalaSqlParser.KW_OVERWRITE);
                }
            }

            this.state = 1418;
            this.match(ImpalaSqlParser.KW_INTO);
            this.state = 1419;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 1420;
            this.tableNamePath();
            this.state = 1430;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 1421;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 1422;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1423;
                this.expression();
                this.state = 1426;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 263) {
                    {
                    this.state = 1424;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1425;
                    this.expression();
                    }
                }

                this.state = 1428;
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
            this.state = 1435;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 157, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1432;
                this.refreshMeta();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1433;
                this.refreshAuth();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1434;
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
            this.state = 1437;
            this.match(ImpalaSqlParser.KW_REFRESH);
            this.state = 1438;
            this.tableNamePath();
            this.state = 1451;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 1439;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 1440;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1441;
                this.expression();
                this.state = 1446;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 158, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 1442;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1443;
                        this.expression();
                        }
                        }
                    }
                    this.state = 1448;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 158, this.context);
                }
                this.state = 1449;
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
            this.state = 1453;
            this.match(ImpalaSqlParser.KW_REFRESH);
            this.state = 1454;
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
            this.state = 1456;
            this.match(ImpalaSqlParser.KW_REFRESH);
            this.state = 1457;
            this.match(ImpalaSqlParser.KW_FUNCTIONS);
            this.state = 1458;
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
            this.state = 1460;
            this.match(ImpalaSqlParser.KW_IF);
            this.state = 1461;
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
            this.state = 1463;
            this.match(ImpalaSqlParser.KW_IF);
            this.state = 1464;
            this.match(ImpalaSqlParser.KW_NOT);
            this.state = 1465;
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
            this.state = 1467;
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
            this.state = 1469;
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
            this.state = 1471;
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
    public columnNamePathCreate(): ColumnNamePathCreateContext {
        let localContext = new ColumnNamePathCreateContext(this.context, this.state);
        this.enterRule(localContext, 182, ImpalaSqlParser.RULE_columnNamePathCreate);
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
    public databaseNamePath(): DatabaseNamePathContext {
        let localContext = new DatabaseNamePathContext(this.context, this.state);
        this.enterRule(localContext, 184, ImpalaSqlParser.RULE_databaseNamePath);
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
    public tableNamePath(): TableNamePathContext {
        let localContext = new TableNamePathContext(this.context, this.state);
        this.enterRule(localContext, 186, ImpalaSqlParser.RULE_tableNamePath);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1479;
            this.identifier();
            this.state = 1484;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 160, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1480;
                    this.match(ImpalaSqlParser.DOT);
                    this.state = 1481;
                    this.identifier();
                    }
                    }
                }
                this.state = 1486;
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
            this.state = 1487;
            this.identifier();
            this.state = 1492;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 161, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1488;
                    this.match(ImpalaSqlParser.DOT);
                    this.state = 1489;
                    this.identifier();
                    }
                    }
                }
                this.state = 1494;
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
            this.state = 1497;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 162, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1495;
                this.reservedKeywordsUsedAsFuncName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1496;
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
            this.state = 1501;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 163, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1499;
                this.qualifiedName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1500;
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
    public tableOrViewPath(): TableOrViewPathContext {
        let localContext = new TableOrViewPathContext(this.context, this.state);
        this.enterRule(localContext, 194, ImpalaSqlParser.RULE_tableOrViewPath);
        try {
            this.state = 1505;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 164, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1503;
                this.tableNamePath();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1504;
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
        this.enterRule(localContext, 196, ImpalaSqlParser.RULE_createCommonItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1510;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21) {
                {
                this.state = 1507;
                this.match(ImpalaSqlParser.KW_SORT);
                this.state = 1508;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 1509;
                this.columnAliases();
                }
            }

            this.state = 1514;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 166, this.context) ) {
            case 1:
                {
                this.state = 1512;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 1513;
                localContext._comment = this.stringLiteral();
                }
                break;
            }
            this.state = 1519;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 168) {
                {
                this.state = 1516;
                this.match(ImpalaSqlParser.KW_ROW);
                this.state = 1517;
                this.match(ImpalaSqlParser.KW_FORMAT);
                this.state = 1518;
                this.rowFormat();
                }
            }

            this.state = 1524;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 168, this.context) ) {
            case 1:
                {
                this.state = 1521;
                this.match(ImpalaSqlParser.KW_WITH);
                this.state = 1522;
                this.match(ImpalaSqlParser.KW_SERDEPROPERTIES);
                this.state = 1523;
                localContext._serdProp = this.properties();
                }
                break;
            }
            this.state = 1529;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 23) {
                {
                this.state = 1526;
                this.match(ImpalaSqlParser.KW_STORED);
                this.state = 1527;
                this.match(ImpalaSqlParser.KW_AS);
                this.state = 1528;
                this.fileFormat();
                }
            }

            this.state = 1533;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 24) {
                {
                this.state = 1531;
                this.match(ImpalaSqlParser.KW_LOCATION);
                this.state = 1532;
                localContext._location = this.stringLiteral();
                }
            }

            this.state = 1545;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_CACHED:
                {
                this.state = 1535;
                this.match(ImpalaSqlParser.KW_CACHED);
                this.state = 1536;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 1537;
                localContext._cacheName = this.qualifiedName();
                this.state = 1542;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 171, this.context) ) {
                case 1:
                    {
                    this.state = 1538;
                    this.match(ImpalaSqlParser.KW_WITH);
                    this.state = 1539;
                    this.match(ImpalaSqlParser.KW_REPLICATION);
                    this.state = 1540;
                    this.match(ImpalaSqlParser.EQ);
                    this.state = 1541;
                    this.match(ImpalaSqlParser.INTEGER_VALUE);
                    }
                    break;
                }
                }
                break;
            case ImpalaSqlParser.KW_UNCACHED:
                {
                this.state = 1544;
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
            this.state = 1549;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 25) {
                {
                this.state = 1547;
                this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
                this.state = 1548;
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
        this.enterRule(localContext, 198, ImpalaSqlParser.RULE_assignmentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1551;
            this.assignmentItem();
            this.state = 1556;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 263) {
                {
                {
                this.state = 1552;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1553;
                this.assignmentItem();
                }
                }
                this.state = 1558;
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
        this.enterRule(localContext, 200, ImpalaSqlParser.RULE_assignmentItem);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1559;
            this.qualifiedName();
            this.state = 1560;
            this.match(ImpalaSqlParser.EQ);
            this.state = 1561;
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
        this.enterRule(localContext, 202, ImpalaSqlParser.RULE_viewColumns);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1563;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 1564;
            this.columnNamePathCreate();
            this.state = 1567;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 1565;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 1566;
                this.stringLiteral();
                }
            }

            this.state = 1577;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 263) {
                {
                {
                this.state = 1569;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1570;
                this.columnNamePathCreate();
                this.state = 1573;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 34) {
                    {
                    this.state = 1571;
                    this.match(ImpalaSqlParser.KW_COMMENT);
                    this.state = 1572;
                    this.stringLiteral();
                    }
                }

                }
                }
                this.state = 1579;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1580;
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
    public queryStatement(): QueryStatementContext {
        let localContext = new QueryStatementContext(this.context, this.state);
        this.enterRule(localContext, 204, ImpalaSqlParser.RULE_queryStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1583;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 216) {
                {
                this.state = 1582;
                this.with_();
                }
            }

            this.state = 1585;
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
        this.enterRule(localContext, 206, ImpalaSqlParser.RULE_with);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1587;
            this.match(ImpalaSqlParser.KW_WITH);
            this.state = 1588;
            this.namedQuery();
            this.state = 1593;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 263) {
                {
                {
                this.state = 1589;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1590;
                this.namedQuery();
                }
                }
                this.state = 1595;
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
        this.enterRule(localContext, 208, ImpalaSqlParser.RULE_constraintSpecification);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1596;
            this.match(ImpalaSqlParser.KW_PRIMARY);
            this.state = 1597;
            this.match(ImpalaSqlParser.KW_KEY);
            this.state = 1598;
            this.columnAliases();
            this.state = 1600;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 53) {
                {
                this.state = 1599;
                this.match(ImpalaSqlParser.KW_DISABLE);
                }
            }

            this.state = 1605;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 181, this.context) ) {
            case 1:
                {
                this.state = 1602;
                this.match(ImpalaSqlParser.KW_NOVALIDATE);
                }
                break;
            case 2:
                {
                this.state = 1603;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1604;
                this.match(ImpalaSqlParser.KW_NOVALIDATE);
                }
                break;
            }
            this.state = 1610;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 182, this.context) ) {
            case 1:
                {
                this.state = 1607;
                this.match(ImpalaSqlParser.KW_RELY);
                }
                break;
            case 2:
                {
                this.state = 1608;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1609;
                this.match(ImpalaSqlParser.KW_RELY);
                }
                break;
            }
            this.state = 1624;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 81 || _la === 263) {
                {
                this.state = 1615;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.COMMA:
                    {
                    this.state = 1612;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1613;
                    this.foreignKeySpecification();
                    }
                    break;
                case ImpalaSqlParser.KW_FOREIGN:
                    {
                    this.state = 1614;
                    this.foreignKeySpecification();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1621;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 184, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 1617;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1618;
                        this.foreignKeySpecification();
                        }
                        }
                    }
                    this.state = 1623;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 184, this.context);
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
        this.enterRule(localContext, 210, ImpalaSqlParser.RULE_foreignKeySpecification);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1626;
            this.match(ImpalaSqlParser.KW_FOREIGN);
            this.state = 1627;
            this.match(ImpalaSqlParser.KW_KEY);
            this.state = 1628;
            this.columnAliases();
            this.state = 1629;
            this.match(ImpalaSqlParser.KW_REFERENCES);
            this.state = 1630;
            this.tableNamePath();
            this.state = 1631;
            this.columnAliases();
            this.state = 1633;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 53) {
                {
                this.state = 1632;
                this.match(ImpalaSqlParser.KW_DISABLE);
                }
            }

            this.state = 1636;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 225) {
                {
                this.state = 1635;
                this.match(ImpalaSqlParser.KW_NOVALIDATE);
                }
            }

            this.state = 1639;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 226) {
                {
                this.state = 1638;
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
        this.enterRule(localContext, 212, ImpalaSqlParser.RULE_columnSpec);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1641;
            this.columnNamePath();
            this.state = 1642;
            this.type_(0);
            this.state = 1645;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 189, this.context) ) {
            case 1:
                {
                this.state = 1643;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 1644;
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
        this.enterRule(localContext, 214, ImpalaSqlParser.RULE_columnDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1647;
            this.columnNamePathCreate();
            this.state = 1648;
            this.type_(0);
            this.state = 1651;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 1649;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 1650;
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
    public kuduTableElement(): KuduTableElementContext {
        let localContext = new KuduTableElementContext(this.context, this.state);
        this.enterRule(localContext, 216, ImpalaSqlParser.RULE_kuduTableElement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1653;
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
        this.enterRule(localContext, 218, ImpalaSqlParser.RULE_kuduColumnDefinition);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1655;
            this.columnNamePathCreate();
            this.state = 1656;
            this.type_(0);
            this.state = 1664;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 33619969) !== 0) || _la === 132 || _la === 133) {
                {
                this.state = 1657;
                this.kuduAttributes();
                this.state = 1661;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 191, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 1658;
                        this.kuduAttributes();
                        }
                        }
                    }
                    this.state = 1663;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 191, this.context);
                }
                }
            }

            this.state = 1668;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 1666;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 1667;
                this.stringLiteral();
                }
            }

            this.state = 1672;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 150) {
                {
                this.state = 1670;
                this.match(ImpalaSqlParser.KW_PRIMARY);
                this.state = 1671;
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
    public columnSpecWithKudu(): ColumnSpecWithKuduContext {
        let localContext = new ColumnSpecWithKuduContext(this.context, this.state);
        this.enterRule(localContext, 220, ImpalaSqlParser.RULE_columnSpecWithKudu);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1675;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 195, this.context) ) {
            case 1:
                {
                this.state = 1674;
                this.columnSpec();
                }
                break;
            }
            this.state = 1684;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 33619969) !== 0) || _la === 132 || _la === 133) {
                {
                this.state = 1677;
                this.kuduAttributes();
                this.state = 1681;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 196, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 1678;
                        this.kuduAttributes();
                        }
                        }
                    }
                    this.state = 1683;
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
        this.enterRule(localContext, 222, ImpalaSqlParser.RULE_createColumnSpecWithKudu);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1686;
            this.columnNamePathCreate();
            this.state = 1687;
            this.type_(0);
            this.state = 1690;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 198, this.context) ) {
            case 1:
                {
                this.state = 1688;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 1689;
                this.stringLiteral();
                }
                break;
            }
            this.state = 1699;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 33619969) !== 0) || _la === 132 || _la === 133) {
                {
                this.state = 1692;
                this.kuduAttributes();
                this.state = 1696;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 199, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 1693;
                        this.kuduAttributes();
                        }
                        }
                    }
                    this.state = 1698;
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
        this.enterRule(localContext, 224, ImpalaSqlParser.RULE_kuduAttributes);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1706;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_NOT:
            case ImpalaSqlParser.KW_NULL:
                {
                this.state = 1702;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 132) {
                    {
                    this.state = 1701;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 1704;
                this.match(ImpalaSqlParser.KW_NULL);
                }
                break;
            case ImpalaSqlParser.KW_BLOCK_SIZE:
            case ImpalaSqlParser.KW_COMPRESSION:
            case ImpalaSqlParser.KW_DEFAULT:
            case ImpalaSqlParser.KW_ENCODING:
                {
                this.state = 1705;
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
        this.enterRule(localContext, 226, ImpalaSqlParser.RULE_kuduStorageAttr);
        try {
            this.state = 1716;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_ENCODING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1708;
                this.match(ImpalaSqlParser.KW_ENCODING);
                this.state = 1709;
                this.expression();
                }
                break;
            case ImpalaSqlParser.KW_COMPRESSION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1710;
                this.match(ImpalaSqlParser.KW_COMPRESSION);
                this.state = 1711;
                this.expression();
                }
                break;
            case ImpalaSqlParser.KW_DEFAULT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1712;
                this.match(ImpalaSqlParser.KW_DEFAULT);
                this.state = 1713;
                this.expression();
                }
                break;
            case ImpalaSqlParser.KW_BLOCK_SIZE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1714;
                this.match(ImpalaSqlParser.KW_BLOCK_SIZE);
                this.state = 1715;
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
        this.enterRule(localContext, 228, ImpalaSqlParser.RULE_statsKey);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1718;
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
        this.enterRule(localContext, 230, ImpalaSqlParser.RULE_fileFormat);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1720;
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
        this.enterRule(localContext, 232, ImpalaSqlParser.RULE_kuduPartitionClause);
        let _la: number;
        try {
            let alternative: number;
            this.state = 1735;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_HASH:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 1722;
                this.hashClause();
                this.state = 1727;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 204, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 1723;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1724;
                        this.hashClause();
                        }
                        }
                    }
                    this.state = 1729;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 204, this.context);
                }
                this.state = 1732;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 263) {
                    {
                    this.state = 1730;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1731;
                    this.rangeClause();
                    }
                }

                }
                }
                break;
            case ImpalaSqlParser.KW_RANGE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1734;
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
        this.enterRule(localContext, 234, ImpalaSqlParser.RULE_hashClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1737;
            this.match(ImpalaSqlParser.KW_HASH);
            this.state = 1739;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 265) {
                {
                this.state = 1738;
                this.columnAliases();
                }
            }

            this.state = 1741;
            this.match(ImpalaSqlParser.KW_PARTITIONS);
            this.state = 1742;
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
        this.enterRule(localContext, 236, ImpalaSqlParser.RULE_rangeClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1744;
            this.match(ImpalaSqlParser.KW_RANGE);
            this.state = 1746;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 208, this.context) ) {
            case 1:
                {
                this.state = 1745;
                this.columnAliases();
                }
                break;
            }
            this.state = 1748;
            this.match(ImpalaSqlParser.LPAREN);
            {
            this.state = 1749;
            this.match(ImpalaSqlParser.KW_PARTITION);
            this.state = 1750;
            this.kuduPartitionSpec();
            this.state = 1756;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 209, this.context);
            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1 + 1) {
                    {
                    {
                    this.state = 1751;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1752;
                    this.match(ImpalaSqlParser.KW_PARTITION);
                    this.state = 1753;
                    this.kuduPartitionSpec();
                    }
                    }
                }
                this.state = 1758;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 209, this.context);
            }
            }
            this.state = 1759;
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
        this.enterRule(localContext, 238, ImpalaSqlParser.RULE_kuduPartitionSpec);
        let _la: number;
        try {
            this.state = 1776;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_VALUE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1761;
                this.match(ImpalaSqlParser.KW_VALUE);
                this.state = 1762;
                this.partitionCol();
                this.state = 1763;
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
                this.state = 1768;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 805323008) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 1442841375) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 2218795145) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 269631421) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 271654979) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & 537926659) !== 0) || ((((_la - 217)) & ~0x1F) === 0 && ((1 << (_la - 217)) & 16393) !== 0) || ((((_la - 255)) & ~0x1F) === 0 && ((1 << (_la - 255)) & 2549744643) !== 0)) {
                    {
                    this.state = 1765;
                    this.expression();
                    this.state = 1766;
                    this.rangeOperator();
                    }
                }

                this.state = 1770;
                this.match(ImpalaSqlParser.KW_VALUES);
                this.state = 1774;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 211, this.context) ) {
                case 1:
                    {
                    this.state = 1771;
                    this.rangeOperator();
                    this.state = 1772;
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
        this.enterRule(localContext, 240, ImpalaSqlParser.RULE_cacheSpec);
        try {
            this.state = 1788;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_CACHED:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1778;
                this.match(ImpalaSqlParser.KW_CACHED);
                this.state = 1779;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 1780;
                this.identifier();
                this.state = 1785;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 213, this.context) ) {
                case 1:
                    {
                    this.state = 1781;
                    this.match(ImpalaSqlParser.KW_WITH);
                    this.state = 1782;
                    this.match(ImpalaSqlParser.KW_REPLICATION);
                    this.state = 1783;
                    this.match(ImpalaSqlParser.EQ);
                    this.state = 1784;
                    this.number_();
                    }
                    break;
                }
                }
                break;
            case ImpalaSqlParser.KW_UNCACHED:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1787;
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
        this.enterRule(localContext, 242, ImpalaSqlParser.RULE_rangeOperator);
        try {
            this.state = 1795;
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
                this.state = 1791;
                this.match(ImpalaSqlParser.LT);
                }
                break;
            case ImpalaSqlParser.LTE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1792;
                this.match(ImpalaSqlParser.LTE);
                }
                break;
            case ImpalaSqlParser.GT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1793;
                this.match(ImpalaSqlParser.GT);
                }
                break;
            case ImpalaSqlParser.GTE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1794;
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
        this.enterRule(localContext, 244, ImpalaSqlParser.RULE_partitionCol);
        try {
            this.state = 1805;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.EQ:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1797;
                this.match(ImpalaSqlParser.EQ);
                }
                break;
            case ImpalaSqlParser.NEQ:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1798;
                this.match(ImpalaSqlParser.NEQ);
                }
                break;
            case ImpalaSqlParser.KW_LIKE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1799;
                this.match(ImpalaSqlParser.KW_LIKE);
                }
                break;
            case ImpalaSqlParser.KW_RLIKE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1800;
                this.match(ImpalaSqlParser.KW_RLIKE);
                }
                break;
            case ImpalaSqlParser.KW_REGEXP:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1801;
                this.match(ImpalaSqlParser.KW_REGEXP);
                }
                break;
            case ImpalaSqlParser.KW_BETWEEN:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1802;
                this.match(ImpalaSqlParser.KW_BETWEEN);
                }
                break;
            case ImpalaSqlParser.KW_IN:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1803;
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
                this.state = 1804;
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
        this.enterRule(localContext, 246, ImpalaSqlParser.RULE_likeClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1807;
            this.match(ImpalaSqlParser.KW_LIKE);
            this.state = 1808;
            this.qualifiedName();
            this.state = 1811;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 65 || _la === 95) {
                {
                this.state = 1809;
                localContext._optionType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 65 || _la === 95)) {
                    localContext._optionType = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1810;
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
        this.enterRule(localContext, 248, ImpalaSqlParser.RULE_properties);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1813;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 1814;
            this.property();
            this.state = 1819;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 263) {
                {
                {
                this.state = 1815;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1816;
                this.property();
                }
                }
                this.state = 1821;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1822;
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
        this.enterRule(localContext, 250, ImpalaSqlParser.RULE_partitionedBy);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1824;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 1825;
            this.columnSpec();
            this.state = 1830;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 219, this.context);
            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1 + 1) {
                    {
                    {
                    this.state = 1826;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1827;
                    this.columnSpec();
                    }
                    }
                }
                this.state = 1832;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 219, this.context);
            }
            this.state = 1833;
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
        this.enterRule(localContext, 252, ImpalaSqlParser.RULE_sortedBy);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1835;
            this.expression();
            this.state = 1840;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 263) {
                {
                {
                this.state = 1836;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1837;
                this.expression();
                }
                }
                this.state = 1842;
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
        this.enterRule(localContext, 254, ImpalaSqlParser.RULE_rowFormat);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1843;
            this.match(ImpalaSqlParser.KW_DELIMITED);
            this.state = 1853;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 71) {
                {
                this.state = 1844;
                this.match(ImpalaSqlParser.KW_FIELDS);
                this.state = 1845;
                this.match(ImpalaSqlParser.KW_TERMINATED);
                this.state = 1846;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 1847;
                this.stringLiteral();
                this.state = 1851;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 63) {
                    {
                    this.state = 1848;
                    this.match(ImpalaSqlParser.KW_ESCAPED);
                    this.state = 1849;
                    this.match(ImpalaSqlParser.KW_BY);
                    this.state = 1850;
                    this.stringLiteral();
                    }
                }

                }
            }

            this.state = 1859;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 117) {
                {
                this.state = 1855;
                this.match(ImpalaSqlParser.KW_LINES);
                this.state = 1856;
                this.match(ImpalaSqlParser.KW_TERMINATED);
                this.state = 1857;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 1858;
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
        this.enterRule(localContext, 256, ImpalaSqlParser.RULE_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1861;
            this.identifier();
            this.state = 1864;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 249) {
                {
                this.state = 1862;
                this.match(ImpalaSqlParser.EQ);
                this.state = 1863;
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
        this.enterRule(localContext, 258, ImpalaSqlParser.RULE_queryNoWith);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1866;
            this.queryTerm(0);
            this.state = 1877;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 139) {
                {
                this.state = 1867;
                this.match(ImpalaSqlParser.KW_ORDER);
                this.state = 1868;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 1869;
                this.sortItem();
                this.state = 1874;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                    {
                    this.state = 1870;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1871;
                    this.sortItem();
                    }
                    }
                    this.state = 1876;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1885;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 1879;
                this.match(ImpalaSqlParser.KW_LIMIT);
                this.state = 1880;
                localContext._rows = this.expression();
                this.state = 1883;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 135) {
                    {
                    this.state = 1881;
                    this.match(ImpalaSqlParser.KW_OFFSET);
                    this.state = 1882;
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
        let _startState = 260;
        this.enterRecursionRule(localContext, 260, ImpalaSqlParser.RULE_queryTerm, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            localContext = new QueryTermDefaultContext(localContext);
            this.context = localContext;
            previousContext = localContext;

            this.state = 1888;
            this.queryPrimary();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1904;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 232, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1902;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 231, this.context) ) {
                    case 1:
                        {
                        localContext = new SetOperationContext(new QueryTermContext(parentContext, parentState));
                        (localContext as SetOperationContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_queryTerm);
                        this.state = 1890;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1891;
                        (localContext as SetOperationContext)._operator = this.match(ImpalaSqlParser.KW_INTERSECT);
                        this.state = 1893;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 2 || _la === 57) {
                            {
                            this.state = 1892;
                            this.setQuantifier();
                            }
                        }

                        this.state = 1895;
                        (localContext as SetOperationContext)._right = this.queryTerm(3);
                        }
                        break;
                    case 2:
                        {
                        localContext = new SetOperationContext(new QueryTermContext(parentContext, parentState));
                        (localContext as SetOperationContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_queryTerm);
                        this.state = 1896;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 1897;
                        (localContext as SetOperationContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 64 || _la === 200)) {
                            (localContext as SetOperationContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
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
                        (localContext as SetOperationContext)._right = this.queryTerm(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 1906;
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
        this.enterRule(localContext, 262, ImpalaSqlParser.RULE_queryPrimary);
        try {
            let alternative: number;
            this.state = 1923;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_SELECT:
                localContext = new QueryPrimaryDefaultContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1907;
                this.querySpecification();
                }
                break;
            case ImpalaSqlParser.KW_TABLE:
                localContext = new TableContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1908;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 1909;
                this.tableNamePath();
                }
                break;
            case ImpalaSqlParser.KW_VALUES:
                localContext = new InlineTableContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1910;
                this.match(ImpalaSqlParser.KW_VALUES);
                this.state = 1911;
                this.expression();
                this.state = 1916;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 233, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1912;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1913;
                        this.expression();
                        }
                        }
                    }
                    this.state = 1918;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 233, this.context);
                }
                }
                break;
            case ImpalaSqlParser.LPAREN:
                localContext = new SubqueryContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1919;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1920;
                this.queryNoWith();
                this.state = 1921;
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
        this.enterRule(localContext, 264, ImpalaSqlParser.RULE_sortItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1925;
            this.columnItem();
            this.state = 1927;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10 || _la === 55) {
                {
                this.state = 1926;
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

            this.state = 1931;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 134) {
                {
                this.state = 1929;
                this.match(ImpalaSqlParser.KW_NULLS);
                this.state = 1930;
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
        this.enterRule(localContext, 266, ImpalaSqlParser.RULE_querySpecification);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1933;
            this.match(ImpalaSqlParser.KW_SELECT);
            this.state = 1935;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 237, this.context) ) {
            case 1:
                {
                this.state = 1934;
                this.setQuantifier();
                }
                break;
            }
            this.state = 1938;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 238, this.context) ) {
            case 1:
                {
                this.state = 1937;
                this.match(ImpalaSqlParser.KW_STRAIGHT_JOIN);
                }
                break;
            }
            this.state = 1940;
            this.selectItem();
            this.state = 1945;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 239, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1941;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1942;
                    this.selectItem();
                    }
                    }
                }
                this.state = 1947;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 239, this.context);
            }
            this.state = 1957;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 241, this.context) ) {
            case 1:
                {
                this.state = 1948;
                this.match(ImpalaSqlParser.KW_FROM);
                this.state = 1949;
                this.relation(0);
                this.state = 1954;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 240, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1950;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1951;
                        this.relation(0);
                        }
                        }
                    }
                    this.state = 1956;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 240, this.context);
                }
                }
                break;
            }
            this.state = 1961;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 242, this.context) ) {
            case 1:
                {
                this.state = 1959;
                this.match(ImpalaSqlParser.KW_WHERE);
                this.state = 1960;
                localContext._where = this.booleanExpression(0);
                }
                break;
            }
            this.state = 1966;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 243, this.context) ) {
            case 1:
                {
                this.state = 1963;
                this.match(ImpalaSqlParser.KW_GROUP);
                this.state = 1964;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 1965;
                this.groupBy();
                }
                break;
            }
            this.state = 1970;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 244, this.context) ) {
            case 1:
                {
                this.state = 1968;
                this.match(ImpalaSqlParser.KW_HAVING);
                this.state = 1969;
                localContext._having = this.booleanExpression(0);
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
    public groupBy(): GroupByContext {
        let localContext = new GroupByContext(this.context, this.state);
        this.enterRule(localContext, 268, ImpalaSqlParser.RULE_groupBy);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1973;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 245, this.context) ) {
            case 1:
                {
                this.state = 1972;
                this.setQuantifier();
                }
                break;
            }
            this.state = 1975;
            this.groupingElement();
            this.state = 1980;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 246, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1976;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1977;
                    this.groupingElement();
                    }
                    }
                }
                this.state = 1982;
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
        this.enterRule(localContext, 270, ImpalaSqlParser.RULE_groupingElement);
        try {
            localContext = new SingleGroupingSetContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1983;
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
        this.enterRule(localContext, 272, ImpalaSqlParser.RULE_groupingSet);
        let _la: number;
        try {
            this.state = 1998;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 249, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1985;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1994;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 248, this.context) ) {
                case 1:
                    {
                    this.state = 1986;
                    this.columnItem();
                    this.state = 1991;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 1987;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1988;
                        this.columnItem();
                        }
                        }
                        this.state = 1993;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                    break;
                }
                this.state = 1996;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1997;
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
        this.enterRule(localContext, 274, ImpalaSqlParser.RULE_namedQuery);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2000;
            localContext._name = this.identifier();
            this.state = 2002;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 265) {
                {
                this.state = 2001;
                this.columnAliases();
                }
            }

            this.state = 2004;
            this.match(ImpalaSqlParser.KW_AS);
            this.state = 2005;
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
        this.enterRule(localContext, 276, ImpalaSqlParser.RULE_setQuantifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2007;
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
        this.enterRule(localContext, 278, ImpalaSqlParser.RULE_selectItem);
        let _la: number;
        try {
            this.state = 2021;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 253, this.context) ) {
            case 1:
                localContext = new SelectSingleContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2009;
                this.columnItem();
                this.state = 2014;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 252, this.context) ) {
                case 1:
                    {
                    this.state = 2011;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 9) {
                        {
                        this.state = 2010;
                        this.match(ImpalaSqlParser.KW_AS);
                        }
                    }

                    this.state = 2013;
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
                this.state = 2016;
                this.qualifiedName();
                this.state = 2017;
                this.match(ImpalaSqlParser.DOT);
                this.state = 2018;
                this.match(ImpalaSqlParser.ASTERISK);
                }
                break;
            case 3:
                localContext = new SelectAllContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2020;
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
        let _startState = 280;
        this.enterRecursionRule(localContext, 280, ImpalaSqlParser.RULE_relation, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            localContext = new RelationDefaultContext(localContext);
            this.context = localContext;
            previousContext = localContext;

            this.state = 2024;
            this.sampledRelation();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2039;
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
                    this.state = 2026;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 2035;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case ImpalaSqlParser.KW_CROSS:
                        {
                        this.state = 2027;
                        this.match(ImpalaSqlParser.KW_CROSS);
                        this.state = 2028;
                        this.match(ImpalaSqlParser.KW_JOIN);
                        this.state = 2029;
                        (localContext as JoinRelationContext)._right = this.sampledRelation();
                        }
                        break;
                    case ImpalaSqlParser.KW_FULL:
                    case ImpalaSqlParser.KW_INNER:
                    case ImpalaSqlParser.KW_JOIN:
                    case ImpalaSqlParser.KW_LEFT:
                    case ImpalaSqlParser.KW_RIGHT:
                        {
                        this.state = 2030;
                        this.joinType();
                        this.state = 2031;
                        this.match(ImpalaSqlParser.KW_JOIN);
                        this.state = 2032;
                        (localContext as JoinRelationContext)._rightRelation = this.relation(0);
                        this.state = 2033;
                        this.joinCriteria();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                    }
                }
                this.state = 2041;
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
        this.enterRule(localContext, 282, ImpalaSqlParser.RULE_joinType);
        let _la: number;
        try {
            this.state = 2073;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 262, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2043;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 97) {
                    {
                    this.state = 2042;
                    this.match(ImpalaSqlParser.KW_INNER);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2045;
                this.match(ImpalaSqlParser.KW_LEFT);
                this.state = 2047;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 97) {
                    {
                    this.state = 2046;
                    this.match(ImpalaSqlParser.KW_INNER);
                    }
                }

                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2049;
                this.match(ImpalaSqlParser.KW_RIGHT);
                this.state = 2051;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 97) {
                    {
                    this.state = 2050;
                    this.match(ImpalaSqlParser.KW_INNER);
                    }
                }

                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2053;
                this.match(ImpalaSqlParser.KW_LEFT);
                this.state = 2055;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 141) {
                    {
                    this.state = 2054;
                    this.match(ImpalaSqlParser.KW_OUTER);
                    }
                }

                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2057;
                this.match(ImpalaSqlParser.KW_RIGHT);
                this.state = 2059;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 141) {
                    {
                    this.state = 2058;
                    this.match(ImpalaSqlParser.KW_OUTER);
                    }
                }

                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2061;
                this.match(ImpalaSqlParser.KW_FULL);
                this.state = 2063;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 141) {
                    {
                    this.state = 2062;
                    this.match(ImpalaSqlParser.KW_OUTER);
                    }
                }

                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2065;
                this.match(ImpalaSqlParser.KW_LEFT);
                this.state = 2066;
                this.match(ImpalaSqlParser.KW_SEMI);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2067;
                this.match(ImpalaSqlParser.KW_RIGHT);
                this.state = 2068;
                this.match(ImpalaSqlParser.KW_SEMI);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 2069;
                this.match(ImpalaSqlParser.KW_LEFT);
                this.state = 2070;
                this.match(ImpalaSqlParser.KW_ANTI);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 2071;
                this.match(ImpalaSqlParser.KW_RIGHT);
                this.state = 2072;
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
        this.enterRule(localContext, 284, ImpalaSqlParser.RULE_joinCriteria);
        let _la: number;
        try {
            this.state = 2089;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_ON:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2075;
                this.match(ImpalaSqlParser.KW_ON);
                this.state = 2076;
                this.booleanExpression(0);
                }
                break;
            case ImpalaSqlParser.KW_USING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2077;
                this.match(ImpalaSqlParser.KW_USING);
                this.state = 2078;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2079;
                this.identifier();
                this.state = 2084;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                    {
                    this.state = 2080;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2081;
                    this.identifier();
                    }
                    }
                    this.state = 2086;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2087;
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
        this.enterRule(localContext, 286, ImpalaSqlParser.RULE_sampledRelation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2091;
            this.aliasedRelation();
            this.state = 2104;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 266, this.context) ) {
            case 1:
                {
                this.state = 2092;
                this.match(ImpalaSqlParser.KW_TABLESAMPLE);
                this.state = 2093;
                this.sampleType();
                this.state = 2094;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2095;
                localContext._percentage = this.expression();
                this.state = 2096;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2102;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 265, this.context) ) {
                case 1:
                    {
                    this.state = 2097;
                    this.match(ImpalaSqlParser.KW_REPEATABLE);
                    this.state = 2098;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2099;
                    localContext._seed = this.expression();
                    this.state = 2100;
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
        this.enterRule(localContext, 288, ImpalaSqlParser.RULE_sampleType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2106;
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
        this.enterRule(localContext, 290, ImpalaSqlParser.RULE_aliasedRelation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2108;
            this.relationPrimary();
            this.state = 2116;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 269, this.context) ) {
            case 1:
                {
                this.state = 2110;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                    this.state = 2109;
                    this.match(ImpalaSqlParser.KW_AS);
                    }
                }

                this.state = 2112;
                this.identifier();
                this.state = 2114;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 268, this.context) ) {
                case 1:
                    {
                    this.state = 2113;
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
        this.enterRule(localContext, 292, ImpalaSqlParser.RULE_columnAliases);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2118;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 2119;
            this.columnNamePath();
            this.state = 2124;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 263) {
                {
                {
                this.state = 2120;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 2121;
                this.columnNamePath();
                }
                }
                this.state = 2126;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 2127;
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
        this.enterRule(localContext, 294, ImpalaSqlParser.RULE_relationPrimary);
        let _la: number;
        try {
            this.state = 2136;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 272, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2129;
                this.tableOrViewPath();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2131;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 113) {
                    {
                    this.state = 2130;
                    this.match(ImpalaSqlParser.KW_LATERAL);
                    }
                }

                this.state = 2133;
                this.subQueryRelation();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2134;
                this.unnest();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2135;
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
        this.enterRule(localContext, 296, ImpalaSqlParser.RULE_subQueryRelation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2138;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 2139;
            this.queryStatement();
            this.state = 2140;
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
        this.enterRule(localContext, 298, ImpalaSqlParser.RULE_unnest);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2142;
            this.match(ImpalaSqlParser.KW_UNNEST);
            this.state = 2143;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 2144;
            this.expression();
            this.state = 2149;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 263) {
                {
                {
                this.state = 2145;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 2146;
                this.expression();
                }
                }
                this.state = 2151;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 2152;
            this.match(ImpalaSqlParser.RPAREN);
            this.state = 2155;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 274, this.context) ) {
            case 1:
                {
                this.state = 2153;
                this.match(ImpalaSqlParser.KW_WITH);
                this.state = 2154;
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
        this.enterRule(localContext, 300, ImpalaSqlParser.RULE_parenthesizedRelation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2157;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 2158;
            this.relation(0);
            this.state = 2159;
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
        this.enterRule(localContext, 302, ImpalaSqlParser.RULE_columnItem);
        try {
            this.state = 2163;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 275, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2161;
                this.columnNamePath();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2162;
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
        this.enterRule(localContext, 304, ImpalaSqlParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2165;
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
        let _startState = 306;
        this.enterRecursionRule(localContext, 306, ImpalaSqlParser.RULE_booleanExpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2174;
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

                this.state = 2168;
                (localContext as PredicatedContext)._valueExpression = this.valueExpression(0);
                this.state = 2170;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 276, this.context) ) {
                case 1:
                    {
                    this.state = 2169;
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
                this.state = 2172;
                this.match(ImpalaSqlParser.KW_NOT);
                this.state = 2173;
                this.booleanExpression(3);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2184;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 279, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 2182;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 278, this.context) ) {
                    case 1:
                        {
                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as LogicalBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_booleanExpression);
                        this.state = 2176;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 2177;
                        (localContext as LogicalBinaryContext)._operator = this.match(ImpalaSqlParser.KW_AND);
                        this.state = 2178;
                        (localContext as LogicalBinaryContext)._right = this.booleanExpression(3);
                        }
                        break;
                    case 2:
                        {
                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as LogicalBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_booleanExpression);
                        this.state = 2179;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 2180;
                        (localContext as LogicalBinaryContext)._operator = this.match(ImpalaSqlParser.KW_OR);
                        this.state = 2181;
                        (localContext as LogicalBinaryContext)._right = this.booleanExpression(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 2186;
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
        this.enterRule(localContext, 308, ImpalaSqlParser.RULE_predicate);
        let _la: number;
        try {
            this.state = 2245;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 288, this.context) ) {
            case 1:
                localContext = new ComparisonContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2187;
                this.comparisonOperator();
                this.state = 2188;
                (localContext as ComparisonContext)._right = this.valueExpression(0);
                }
                break;
            case 2:
                localContext = new QuantifiedComparisonContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2190;
                this.comparisonOperator();
                this.state = 2191;
                this.comparisonQuantifier();
                this.state = 2192;
                this.subQueryRelation();
                }
                break;
            case 3:
                localContext = new BetweenContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2195;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 132) {
                    {
                    this.state = 2194;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 2197;
                this.match(ImpalaSqlParser.KW_BETWEEN);
                this.state = 2198;
                (localContext as BetweenContext)._lower = this.valueExpression(0);
                this.state = 2199;
                this.match(ImpalaSqlParser.KW_AND);
                this.state = 2200;
                (localContext as BetweenContext)._upper = this.valueExpression(0);
                }
                break;
            case 4:
                localContext = new InListContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2203;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 132) {
                    {
                    this.state = 2202;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 2205;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 2206;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2207;
                this.expression();
                this.state = 2212;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                    {
                    this.state = 2208;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2209;
                    this.expression();
                    }
                    }
                    this.state = 2214;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2215;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 5:
                localContext = new InSubqueryContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2218;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 132) {
                    {
                    this.state = 2217;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 2220;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 2221;
                this.subQueryRelation();
                }
                break;
            case 6:
                localContext = new LikeContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2223;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 132) {
                    {
                    this.state = 2222;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 2225;
                _la = this.tokenStream.LA(1);
                if(!(_la === 106 || _la === 115 || _la === 164)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 2226;
                (localContext as LikeContext)._pattern = this.valueExpression(0);
                this.state = 2229;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 285, this.context) ) {
                case 1:
                    {
                    this.state = 2227;
                    this.match(ImpalaSqlParser.KW_ESCAPE);
                    this.state = 2228;
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
                this.state = 2231;
                _la = this.tokenStream.LA(1);
                if(!(_la === 105 || _la === 163)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 2232;
                (localContext as REGEXPContext)._pattern = this.valueExpression(0);
                }
                break;
            case 8:
                localContext = new NullOrUnKnownOrBooleanPredicateContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2233;
                this.match(ImpalaSqlParser.KW_IS);
                this.state = 2235;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 132) {
                    {
                    this.state = 2234;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 2237;
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
                this.state = 2238;
                this.match(ImpalaSqlParser.KW_IS);
                this.state = 2240;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 132) {
                    {
                    this.state = 2239;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 2242;
                this.match(ImpalaSqlParser.KW_DISTINCT);
                this.state = 2243;
                this.match(ImpalaSqlParser.KW_FROM);
                this.state = 2244;
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
        let _startState = 310;
        this.enterRecursionRule(localContext, 310, ImpalaSqlParser.RULE_valueExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2251;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 289, this.context) ) {
            case 1:
                {
                localContext = new ValueExpressionDefaultContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 2248;
                this.primaryExpression(0);
                }
                break;
            case 2:
                {
                localContext = new ArithmeticUnaryContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2249;
                (localContext as ArithmeticUnaryContext)._operator = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 255 || _la === 256)) {
                    (localContext as ArithmeticUnaryContext)._operator = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 2250;
                this.valueExpression(4);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2264;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 291, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 2262;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 290, this.context) ) {
                    case 1:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_valueExpression);
                        this.state = 2253;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 2254;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 257)) & ~0x1F) === 0 && ((1 << (_la - 257)) & 7) !== 0))) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 2255;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_valueExpression);
                        this.state = 2256;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 2257;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 255 || _la === 256)) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 2258;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(3);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ConcatenationContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ConcatenationContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_valueExpression);
                        this.state = 2259;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 2260;
                        this.match(ImpalaSqlParser.CONCAT);
                        this.state = 2261;
                        (localContext as ConcatenationContext)._right = this.valueExpression(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 2266;
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
        let _startState = 312;
        this.enterRecursionRule(localContext, 312, ImpalaSqlParser.RULE_primaryExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2513;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 321, this.context) ) {
            case 1:
                {
                localContext = new NullLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 2268;
                this.match(ImpalaSqlParser.KW_NULL);
                }
                break;
            case 2:
                {
                localContext = new IntervalLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2269;
                this.interval();
                }
                break;
            case 3:
                {
                localContext = new TypeConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2270;
                this.identifier();
                this.state = 2271;
                this.stringLiteral();
                }
                break;
            case 4:
                {
                localContext = new TypeConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2273;
                this.match(ImpalaSqlParser.DOUBLE_PRECISION);
                this.state = 2274;
                this.stringLiteral();
                }
                break;
            case 5:
                {
                localContext = new NumericLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2275;
                this.number_();
                }
                break;
            case 6:
                {
                localContext = new BooleanLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2276;
                this.booleanValue();
                }
                break;
            case 7:
                {
                localContext = new StringLiteralValuesContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2277;
                this.stringLiteral();
                }
                break;
            case 8:
                {
                localContext = new BinaryLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2278;
                this.match(ImpalaSqlParser.BINARY_LITERAL);
                }
                break;
            case 9:
                {
                localContext = new ParameterContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2279;
                this.match(ImpalaSqlParser.QUESTION);
                }
                break;
            case 10:
                {
                localContext = new PositionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2280;
                this.match(ImpalaSqlParser.KW_POSITION);
                this.state = 2281;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2282;
                this.valueExpression(0);
                this.state = 2283;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 2284;
                this.valueExpression(0);
                this.state = 2285;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 11:
                {
                localContext = new RowConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2287;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2288;
                this.expression();
                this.state = 2291;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                    this.state = 2289;
                    this.match(ImpalaSqlParser.KW_AS);
                    this.state = 2290;
                    this.type_(0);
                    }
                }

                this.state = 2301;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 294, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 2293;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2294;
                        this.expression();
                        this.state = 2297;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 9) {
                            {
                            this.state = 2295;
                            this.match(ImpalaSqlParser.KW_AS);
                            this.state = 2296;
                            this.type_(0);
                            }
                        }

                        }
                        }
                    }
                    this.state = 2303;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 294, this.context);
                }
                this.state = 2304;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 12:
                {
                localContext = new RowConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2306;
                this.match(ImpalaSqlParser.KW_ROW);
                this.state = 2307;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2308;
                this.expression();
                this.state = 2313;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                    {
                    this.state = 2309;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2310;
                    this.expression();
                    }
                    }
                    this.state = 2315;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2316;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 13:
                {
                localContext = new FunctionCallContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2318;
                this.functionNamePath();
                this.state = 2319;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2320;
                this.match(ImpalaSqlParser.ASTERISK);
                this.state = 2321;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2323;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 296, this.context) ) {
                case 1:
                    {
                    this.state = 2322;
                    this.filter();
                    }
                    break;
                }
                this.state = 2326;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 297, this.context) ) {
                case 1:
                    {
                    this.state = 2325;
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
                this.state = 2328;
                this.functionNamePath();
                this.state = 2329;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2341;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 805323012) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 1442972447) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 2218795145) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 269631421) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 271654979) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & 537926659) !== 0) || ((((_la - 217)) & ~0x1F) === 0 && ((1 << (_la - 217)) & 16393) !== 0) || ((((_la - 255)) & ~0x1F) === 0 && ((1 << (_la - 255)) & 2549744643) !== 0)) {
                    {
                    this.state = 2331;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 2 || _la === 57) {
                        {
                        this.state = 2330;
                        this.setQuantifier();
                        }
                    }

                    this.state = 2333;
                    this.expression();
                    this.state = 2338;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 2334;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2335;
                        this.expression();
                        }
                        }
                        this.state = 2340;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 2353;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 139) {
                    {
                    this.state = 2343;
                    this.match(ImpalaSqlParser.KW_ORDER);
                    this.state = 2344;
                    this.match(ImpalaSqlParser.KW_BY);
                    this.state = 2345;
                    this.sortItem();
                    this.state = 2350;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 2346;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2347;
                        this.sortItem();
                        }
                        }
                        this.state = 2352;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 2355;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2357;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 303, this.context) ) {
                case 1:
                    {
                    this.state = 2356;
                    this.filter();
                    }
                    break;
                }
                this.state = 2360;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 304, this.context) ) {
                case 1:
                    {
                    this.state = 2359;
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
                this.state = 2362;
                this.identifier();
                this.state = 2363;
                this.match(ImpalaSqlParser.RIGHT_ARROW);
                this.state = 2364;
                this.expression();
                }
                break;
            case 16:
                {
                localContext = new LambdaContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2366;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2375;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                    {
                    this.state = 2367;
                    this.identifier();
                    this.state = 2372;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 2368;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2369;
                        this.identifier();
                        }
                        }
                        this.state = 2374;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 2377;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2378;
                this.match(ImpalaSqlParser.RIGHT_ARROW);
                this.state = 2379;
                this.expression();
                }
                break;
            case 17:
                {
                localContext = new SubqueryExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2380;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2381;
                this.queryStatement();
                this.state = 2382;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 18:
                {
                localContext = new ExistsContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2384;
                this.match(ImpalaSqlParser.KW_EXISTS);
                this.state = 2385;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2386;
                this.queryStatement();
                this.state = 2387;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 19:
                {
                localContext = new SimpleCaseContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2389;
                this.match(ImpalaSqlParser.KW_CASE);
                this.state = 2390;
                this.valueExpression(0);
                this.state = 2392;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 2391;
                    this.whenClause();
                    }
                    }
                    this.state = 2394;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 214);
                this.state = 2398;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 59) {
                    {
                    this.state = 2396;
                    this.match(ImpalaSqlParser.KW_ELSE);
                    this.state = 2397;
                    (localContext as SimpleCaseContext)._elseExpression = this.expression();
                    }
                }

                this.state = 2400;
                this.match(ImpalaSqlParser.KW_END);
                }
                break;
            case 20:
                {
                localContext = new SearchedCaseContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2402;
                this.match(ImpalaSqlParser.KW_CASE);
                this.state = 2404;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 2403;
                    this.whenClause();
                    }
                    }
                    this.state = 2406;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 214);
                this.state = 2410;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 59) {
                    {
                    this.state = 2408;
                    this.match(ImpalaSqlParser.KW_ELSE);
                    this.state = 2409;
                    (localContext as SearchedCaseContext)._elseExpression = this.expression();
                    }
                }

                this.state = 2412;
                this.match(ImpalaSqlParser.KW_END);
                }
                break;
            case 21:
                {
                localContext = new CastContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2414;
                this.match(ImpalaSqlParser.KW_CAST);
                this.state = 2415;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2416;
                this.expression();
                this.state = 2417;
                this.match(ImpalaSqlParser.KW_AS);
                this.state = 2418;
                this.type_(0);
                this.state = 2419;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 22:
                {
                localContext = new CastContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2421;
                this.match(ImpalaSqlParser.KW_TRY_CAST);
                this.state = 2422;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2423;
                this.expression();
                this.state = 2424;
                this.match(ImpalaSqlParser.KW_AS);
                this.state = 2425;
                this.type_(0);
                this.state = 2426;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 23:
                {
                localContext = new ArrayConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2428;
                this.match(ImpalaSqlParser.KW_ARRAY);
                this.state = 2429;
                this.match(ImpalaSqlParser.LSQUARE);
                this.state = 2438;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 805323008) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 1442841375) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 2218795145) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 269631421) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 271654979) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & 537926659) !== 0) || ((((_la - 217)) & ~0x1F) === 0 && ((1 << (_la - 217)) & 16393) !== 0) || ((((_la - 255)) & ~0x1F) === 0 && ((1 << (_la - 255)) & 2549744643) !== 0)) {
                    {
                    this.state = 2430;
                    this.expression();
                    this.state = 2435;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 2431;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2432;
                        this.expression();
                        }
                        }
                        this.state = 2437;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 2440;
                this.match(ImpalaSqlParser.RSQUARE);
                }
                break;
            case 24:
                {
                localContext = new ColumnReferenceContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2441;
                this.identifier();
                }
                break;
            case 25:
                {
                localContext = new SpecialDateTimeFunctionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2442;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_DATE);
                }
                break;
            case 26:
                {
                localContext = new SpecialDateTimeFunctionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2443;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_TIME);
                this.state = 2447;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 313, this.context) ) {
                case 1:
                    {
                    this.state = 2444;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2445;
                    (localContext as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
                    this.state = 2446;
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
                this.state = 2449;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_TIMESTAMP);
                this.state = 2453;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 314, this.context) ) {
                case 1:
                    {
                    this.state = 2450;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2451;
                    (localContext as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
                    this.state = 2452;
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
                this.state = 2455;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_LOCALTIME);
                this.state = 2459;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 315, this.context) ) {
                case 1:
                    {
                    this.state = 2456;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2457;
                    (localContext as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
                    this.state = 2458;
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
                this.state = 2461;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_LOCALTIMESTAMP);
                this.state = 2465;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 316, this.context) ) {
                case 1:
                    {
                    this.state = 2462;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2463;
                    (localContext as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
                    this.state = 2464;
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
                this.state = 2467;
                (localContext as CurrentUserContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_USER);
                }
                break;
            case 31:
                {
                localContext = new CurrentPathContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2468;
                (localContext as CurrentPathContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_PATH);
                }
                break;
            case 32:
                {
                localContext = new SubstringContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2469;
                this.match(ImpalaSqlParser.KW_SUBSTRING);
                this.state = 2470;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2471;
                this.valueExpression(0);
                this.state = 2472;
                this.match(ImpalaSqlParser.KW_FROM);
                this.state = 2473;
                this.valueExpression(0);
                this.state = 2476;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 78) {
                    {
                    this.state = 2474;
                    this.match(ImpalaSqlParser.KW_FOR);
                    this.state = 2475;
                    this.valueExpression(0);
                    }
                }

                this.state = 2478;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 33:
                {
                localContext = new NormalizeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2480;
                this.match(ImpalaSqlParser.KW_NORMALIZE);
                this.state = 2481;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2482;
                this.valueExpression(0);
                this.state = 2485;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 263) {
                    {
                    this.state = 2483;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2484;
                    this.normalForm();
                    }
                }

                this.state = 2487;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 34:
                {
                localContext = new ExtractContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2489;
                this.match(ImpalaSqlParser.KW_EXTRACT);
                this.state = 2490;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2491;
                this.identifier();
                this.state = 2492;
                this.match(ImpalaSqlParser.KW_FROM);
                this.state = 2493;
                this.valueExpression(0);
                this.state = 2494;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 35:
                {
                localContext = new ParenthesizedExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2496;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2497;
                this.expression();
                this.state = 2498;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 36:
                {
                localContext = new GroupingOperationContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2500;
                this.match(ImpalaSqlParser.KW_GROUPING);
                this.state = 2501;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2510;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                    {
                    this.state = 2502;
                    this.qualifiedName();
                    this.state = 2507;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 2503;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2504;
                        this.qualifiedName();
                        }
                        }
                        this.state = 2509;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 2512;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2525;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 323, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 2523;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 322, this.context) ) {
                    case 1:
                        {
                        localContext = new SubscriptContext(new PrimaryExpressionContext(parentContext, parentState));
                        (localContext as SubscriptContext)._value = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_primaryExpression);
                        this.state = 2515;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 2516;
                        this.match(ImpalaSqlParser.LSQUARE);
                        this.state = 2517;
                        (localContext as SubscriptContext)._index = this.valueExpression(0);
                        this.state = 2518;
                        this.match(ImpalaSqlParser.RSQUARE);
                        }
                        break;
                    case 2:
                        {
                        localContext = new DereferenceContext(new PrimaryExpressionContext(parentContext, parentState));
                        (localContext as DereferenceContext)._base = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_primaryExpression);
                        this.state = 2520;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 2521;
                        this.match(ImpalaSqlParser.DOT);
                        this.state = 2522;
                        (localContext as DereferenceContext)._fieldName = this.identifier();
                        }
                        break;
                    }
                    }
                }
                this.state = 2527;
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
        this.enterRule(localContext, 314, ImpalaSqlParser.RULE_stringLiteral);
        try {
            this.state = 2534;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.STRING:
                localContext = new BasicStringLiteralContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2528;
                this.match(ImpalaSqlParser.STRING);
                }
                break;
            case ImpalaSqlParser.UNICODE_STRING:
                localContext = new UnicodeStringLiteralContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2529;
                this.match(ImpalaSqlParser.UNICODE_STRING);
                this.state = 2532;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 324, this.context) ) {
                case 1:
                    {
                    this.state = 2530;
                    this.match(ImpalaSqlParser.KW_UESCAPE);
                    this.state = 2531;
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
        this.enterRule(localContext, 316, ImpalaSqlParser.RULE_comparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2536;
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
        this.enterRule(localContext, 318, ImpalaSqlParser.RULE_comparisonQuantifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2538;
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
        this.enterRule(localContext, 320, ImpalaSqlParser.RULE_booleanValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2540;
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
        this.enterRule(localContext, 322, ImpalaSqlParser.RULE_interval);
        try {
            this.state = 2556;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 326, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2542;
                this.match(ImpalaSqlParser.INTEGER_VALUE);
                this.state = 2543;
                this.intervalField();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2544;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2545;
                this.match(ImpalaSqlParser.INTEGER_VALUE);
                this.state = 2546;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2547;
                this.intervalField();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2548;
                this.match(ImpalaSqlParser.KW_INTERVAL);
                this.state = 2549;
                this.match(ImpalaSqlParser.INTEGER_VALUE);
                this.state = 2550;
                this.intervalField();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2551;
                this.match(ImpalaSqlParser.KW_INTERVAL);
                this.state = 2552;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2553;
                this.match(ImpalaSqlParser.INTEGER_VALUE);
                this.state = 2554;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2555;
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
        this.enterRule(localContext, 324, ImpalaSqlParser.RULE_intervalField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2558;
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
        this.enterRule(localContext, 326, ImpalaSqlParser.RULE_normalForm);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2560;
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
        let _startState = 328;
        this.enterRecursionRule(localContext, 328, ImpalaSqlParser.RULE_type, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2609;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 331, this.context) ) {
            case 1:
                {
                this.state = 2563;
                this.match(ImpalaSqlParser.KW_ARRAY);
                this.state = 2564;
                this.match(ImpalaSqlParser.LT);
                this.state = 2565;
                this.type_(0);
                this.state = 2566;
                this.match(ImpalaSqlParser.GT);
                }
                break;
            case 2:
                {
                this.state = 2568;
                this.match(ImpalaSqlParser.KW_MAP);
                this.state = 2569;
                this.match(ImpalaSqlParser.LT);
                this.state = 2570;
                this.type_(0);
                this.state = 2571;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 2572;
                this.type_(0);
                this.state = 2573;
                this.match(ImpalaSqlParser.GT);
                }
                break;
            case 3:
                {
                this.state = 2575;
                this.match(ImpalaSqlParser.KW_STRUCT);
                this.state = 2576;
                this.match(ImpalaSqlParser.LT);
                this.state = 2577;
                this.identifier();
                this.state = 2578;
                this.match(ImpalaSqlParser.COLON);
                this.state = 2579;
                this.type_(0);
                this.state = 2587;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                    {
                    this.state = 2580;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2581;
                    this.identifier();
                    this.state = 2582;
                    this.match(ImpalaSqlParser.COLON);
                    this.state = 2583;
                    this.type_(0);
                    }
                    }
                    this.state = 2589;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2590;
                this.match(ImpalaSqlParser.GT);
                }
                break;
            case 4:
                {
                this.state = 2594;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 328, this.context) ) {
                case 1:
                    {
                    this.state = 2592;
                    this.baseType();
                    }
                    break;
                case 2:
                    {
                    this.state = 2593;
                    this.dataType();
                    }
                    break;
                }
                this.state = 2607;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 330, this.context) ) {
                case 1:
                    {
                    this.state = 2596;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2597;
                    this.typeParameter();
                    this.state = 2602;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 263) {
                        {
                        {
                        this.state = 2598;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2599;
                        this.typeParameter();
                        }
                        }
                        this.state = 2604;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 2605;
                    this.match(ImpalaSqlParser.RPAREN);
                    }
                    break;
                }
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2615;
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
                    this.state = 2611;
                    if (!(this.precpred(this.context, 5))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                    }
                    this.state = 2612;
                    this.match(ImpalaSqlParser.KW_ARRAY);
                    }
                    }
                }
                this.state = 2617;
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
        this.enterRule(localContext, 330, ImpalaSqlParser.RULE_dataType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2618;
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
        this.enterRule(localContext, 332, ImpalaSqlParser.RULE_typeParameter);
        try {
            this.state = 2622;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.INTEGER_VALUE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2620;
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
                this.state = 2621;
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
        this.enterRule(localContext, 334, ImpalaSqlParser.RULE_baseType);
        try {
            this.state = 2628;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.TIME_WITH_TIME_ZONE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2624;
                this.match(ImpalaSqlParser.TIME_WITH_TIME_ZONE);
                }
                break;
            case ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2625;
                this.match(ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE);
                }
                break;
            case ImpalaSqlParser.DOUBLE_PRECISION:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2626;
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
                this.state = 2627;
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
        this.enterRule(localContext, 336, ImpalaSqlParser.RULE_whenClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2630;
            this.match(ImpalaSqlParser.KW_WHEN);
            this.state = 2631;
            localContext._condition = this.expression();
            this.state = 2632;
            this.match(ImpalaSqlParser.KW_THEN);
            this.state = 2633;
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
        this.enterRule(localContext, 338, ImpalaSqlParser.RULE_filter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2635;
            this.match(ImpalaSqlParser.KW_FILTER);
            this.state = 2636;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 2637;
            this.match(ImpalaSqlParser.KW_WHERE);
            this.state = 2638;
            this.booleanExpression(0);
            this.state = 2639;
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
    public over(): OverContext {
        let localContext = new OverContext(this.context, this.state);
        this.enterRule(localContext, 340, ImpalaSqlParser.RULE_over);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2641;
            this.match(ImpalaSqlParser.KW_OVER);
            this.state = 2642;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 2653;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 2643;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 2644;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 2645;
                localContext._expression = this.expression();
                localContext._partition.push(localContext._expression);
                this.state = 2650;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                    {
                    this.state = 2646;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2647;
                    localContext._expression = this.expression();
                    localContext._partition.push(localContext._expression);
                    }
                    }
                    this.state = 2652;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 2665;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 139) {
                {
                this.state = 2655;
                this.match(ImpalaSqlParser.KW_ORDER);
                this.state = 2656;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 2657;
                this.sortItem();
                this.state = 2662;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                    {
                    this.state = 2658;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2659;
                    this.sortItem();
                    }
                    }
                    this.state = 2664;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 2668;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 154 || _la === 169) {
                {
                this.state = 2667;
                this.windowFrame();
                }
            }

            this.state = 2670;
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
        this.enterRule(localContext, 342, ImpalaSqlParser.RULE_windowFrame);
        try {
            this.state = 2688;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 340, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2672;
                localContext._frameType = this.match(ImpalaSqlParser.KW_RANGE);
                this.state = 2673;
                localContext._start_ = this.frameBound();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2674;
                localContext._frameType = this.match(ImpalaSqlParser.KW_ROWS);
                this.state = 2675;
                localContext._start_ = this.frameBound();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2676;
                localContext._frameType = this.match(ImpalaSqlParser.KW_RANGE);
                this.state = 2677;
                this.match(ImpalaSqlParser.KW_BETWEEN);
                this.state = 2678;
                localContext._start_ = this.frameBound();
                this.state = 2679;
                this.match(ImpalaSqlParser.KW_AND);
                this.state = 2680;
                localContext._end = this.frameBound();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2682;
                localContext._frameType = this.match(ImpalaSqlParser.KW_ROWS);
                this.state = 2683;
                this.match(ImpalaSqlParser.KW_BETWEEN);
                this.state = 2684;
                localContext._start_ = this.frameBound();
                this.state = 2685;
                this.match(ImpalaSqlParser.KW_AND);
                this.state = 2686;
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
        this.enterRule(localContext, 344, ImpalaSqlParser.RULE_frameBound);
        let _la: number;
        try {
            this.state = 2699;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 341, this.context) ) {
            case 1:
                localContext = new UnboundedFrameContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2690;
                this.match(ImpalaSqlParser.KW_UNBOUNDED);
                this.state = 2691;
                (localContext as UnboundedFrameContext)._boundType = this.match(ImpalaSqlParser.KW_PRECEDING);
                }
                break;
            case 2:
                localContext = new UnboundedFrameContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2692;
                this.match(ImpalaSqlParser.KW_UNBOUNDED);
                this.state = 2693;
                (localContext as UnboundedFrameContext)._boundType = this.match(ImpalaSqlParser.KW_FOLLOWING);
                }
                break;
            case 3:
                localContext = new CurrentRowBoundContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2694;
                this.match(ImpalaSqlParser.KW_CURRENT);
                this.state = 2695;
                this.match(ImpalaSqlParser.KW_ROW);
                }
                break;
            case 4:
                localContext = new BoundedFrameContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2696;
                this.expression();
                this.state = 2697;
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
        this.enterRule(localContext, 346, ImpalaSqlParser.RULE_pathElement);
        try {
            this.state = 2706;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 342, this.context) ) {
            case 1:
                localContext = new QualifiedArgumentContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2701;
                this.identifier();
                this.state = 2702;
                this.match(ImpalaSqlParser.DOT);
                this.state = 2703;
                this.identifier();
                }
                break;
            case 2:
                localContext = new UnqualifiedArgumentContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2705;
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
        this.enterRule(localContext, 348, ImpalaSqlParser.RULE_pathSpecification);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2708;
            this.pathElement();
            this.state = 2713;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 263) {
                {
                {
                this.state = 2709;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 2710;
                this.pathElement();
                }
                }
                this.state = 2715;
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
        this.enterRule(localContext, 350, ImpalaSqlParser.RULE_privilege);
        let _la: number;
        try {
            this.state = 2729;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_ALL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2716;
                this.match(ImpalaSqlParser.KW_ALL);
                }
                break;
            case ImpalaSqlParser.KW_ALTER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2717;
                this.match(ImpalaSqlParser.KW_ALTER);
                }
                break;
            case ImpalaSqlParser.KW_DROP:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2718;
                this.match(ImpalaSqlParser.KW_DROP);
                }
                break;
            case ImpalaSqlParser.KW_CREATE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2719;
                this.match(ImpalaSqlParser.KW_CREATE);
                }
                break;
            case ImpalaSqlParser.KW_INSERT:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2720;
                this.match(ImpalaSqlParser.KW_INSERT);
                }
                break;
            case ImpalaSqlParser.KW_REFRESH:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2721;
                this.match(ImpalaSqlParser.KW_REFRESH);
                }
                break;
            case ImpalaSqlParser.KW_SELECT:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2722;
                this.match(ImpalaSqlParser.KW_SELECT);
                this.state = 2727;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 265) {
                    {
                    this.state = 2723;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2724;
                    localContext._columnName = this.identifier();
                    this.state = 2725;
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
        this.enterRule(localContext, 352, ImpalaSqlParser.RULE_objectType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2731;
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
        this.enterRule(localContext, 354, ImpalaSqlParser.RULE_qualifiedName);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2733;
            this.identifier();
            this.state = 2738;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 346, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2734;
                    this.match(ImpalaSqlParser.DOT);
                    this.state = 2735;
                    this.identifier();
                    }
                    }
                }
                this.state = 2740;
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
        this.enterRule(localContext, 356, ImpalaSqlParser.RULE_principal);
        try {
            this.state = 2747;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_ROLE:
                localContext = new RolePrincipalContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2741;
                this.match(ImpalaSqlParser.KW_ROLE);
                this.state = 2742;
                this.identifier();
                }
                break;
            case ImpalaSqlParser.KW_USER:
                localContext = new UserPrincipalContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2743;
                this.match(ImpalaSqlParser.KW_USER);
                this.state = 2744;
                this.identifier();
                }
                break;
            case ImpalaSqlParser.KW_GROUP:
                localContext = new GroupPrincipalContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2745;
                this.match(ImpalaSqlParser.KW_GROUP);
                this.state = 2746;
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
        this.enterRule(localContext, 358, ImpalaSqlParser.RULE_identifier);
        try {
            this.state = 2754;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.IDENTIFIER:
                localContext = new UnquotedIdentifierContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2749;
                this.match(ImpalaSqlParser.IDENTIFIER);
                }
                break;
            case ImpalaSqlParser.STRING:
                localContext = new QuotedIdentifierContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2750;
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
                this.state = 2751;
                this.nonReserved();
                }
                break;
            case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
                localContext = new BackQuotedIdentifierContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2752;
                this.match(ImpalaSqlParser.BACKQUOTED_IDENTIFIER);
                }
                break;
            case ImpalaSqlParser.DIGIT_IDENTIFIER:
                localContext = new DigitIdentifierContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2753;
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
        this.enterRule(localContext, 360, ImpalaSqlParser.RULE_number);
        let _la: number;
        try {
            this.state = 2768;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 352, this.context) ) {
            case 1:
                localContext = new DecimalLiteralContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2757;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 256) {
                    {
                    this.state = 2756;
                    this.match(ImpalaSqlParser.MINUS);
                    }
                }

                this.state = 2759;
                this.match(ImpalaSqlParser.DECIMAL_VALUE);
                }
                break;
            case 2:
                localContext = new DoubleLiteralContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2761;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 256) {
                    {
                    this.state = 2760;
                    this.match(ImpalaSqlParser.MINUS);
                    }
                }

                this.state = 2763;
                this.match(ImpalaSqlParser.DOUBLE_VALUE);
                }
                break;
            case 3:
                localContext = new IntegerLiteralContext(localContext);
                this.enterOuterAlt(localContext, 3);
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
        this.enterRule(localContext, 362, ImpalaSqlParser.RULE_reservedKeywordsUsedAsFuncName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2770;
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
        this.enterRule(localContext, 364, ImpalaSqlParser.RULE_nonReserved);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2772;
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
        case 130:
            return this.queryTerm_sempred(localContext as QueryTermContext, predIndex);
        case 140:
            return this.relation_sempred(localContext as RelationContext, predIndex);
        case 153:
            return this.booleanExpression_sempred(localContext as BooleanExpressionContext, predIndex);
        case 155:
            return this.valueExpression_sempred(localContext as ValueExpressionContext, predIndex);
        case 156:
            return this.primaryExpression_sempred(localContext as PrimaryExpressionContext, predIndex);
        case 164:
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
        4,1,289,2775,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        2,181,7,181,2,182,7,182,1,0,5,0,368,8,0,10,0,12,0,371,9,0,1,0,1,
        0,1,1,1,1,3,1,377,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,401,8,2,1,3,1,
        3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,414,8,4,1,5,1,5,3,5,418,
        8,5,1,5,1,5,3,5,422,8,5,1,5,1,5,1,5,1,5,1,5,5,5,429,8,5,10,5,12,
        5,432,9,5,1,5,1,5,3,5,436,8,5,1,5,1,5,3,5,440,8,5,1,5,1,5,1,5,1,
        5,3,5,446,8,5,3,5,448,8,5,1,5,1,5,1,5,3,5,453,8,5,1,6,1,6,3,6,457,
        8,6,1,6,1,6,3,6,461,8,6,1,6,1,6,1,6,1,6,1,6,3,6,468,8,6,1,6,1,6,
        1,6,3,6,473,8,6,1,6,1,6,1,7,1,7,3,7,479,8,7,1,7,1,7,3,7,483,8,7,
        1,7,1,7,1,7,1,7,1,7,5,7,490,8,7,10,7,12,7,493,9,7,1,7,1,7,1,7,1,
        7,3,7,499,8,7,1,7,1,7,3,7,503,8,7,1,7,1,7,1,7,3,7,508,8,7,3,7,510,
        8,7,1,7,1,7,1,7,3,7,515,8,7,1,7,1,7,3,7,519,8,7,1,7,1,7,1,7,1,7,
        1,7,3,7,526,8,7,1,7,1,7,3,7,530,8,7,1,8,1,8,1,8,3,8,535,8,8,1,8,
        1,8,3,8,539,8,8,1,8,1,8,3,8,543,8,8,1,8,1,8,3,8,547,8,8,1,8,1,8,
        1,8,1,9,1,9,1,9,3,9,555,8,9,1,9,1,9,1,9,3,9,560,8,9,1,9,1,9,3,9,
        564,8,9,1,10,1,10,1,10,1,10,1,11,1,11,3,11,572,8,11,1,11,1,11,3,
        11,576,8,11,1,11,1,11,1,11,1,11,1,11,5,11,583,8,11,10,11,12,11,586,
        9,11,3,11,588,8,11,1,11,3,11,591,8,11,1,11,1,11,1,11,1,11,3,11,597,
        8,11,1,11,1,11,1,11,1,11,1,11,3,11,604,8,11,1,11,1,11,1,11,1,11,
        1,11,1,11,1,11,1,11,1,11,3,11,615,8,11,1,11,1,11,1,11,3,11,620,8,
        11,1,11,1,11,1,11,3,11,625,8,11,1,11,1,11,1,11,3,11,630,8,11,1,12,
        1,12,1,12,3,12,635,8,12,1,12,1,12,1,12,1,12,1,12,5,12,642,8,12,10,
        12,12,12,645,9,12,3,12,647,8,12,1,12,3,12,650,8,12,1,12,1,12,3,12,
        654,8,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,
        1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
        3,13,680,8,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,
        1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
        1,15,3,15,706,8,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,3,16,715,8,
        16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,725,8,16,1,16,3,
        16,728,8,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,
        18,1,18,3,18,742,8,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,
        19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,3,20,760,8,20,3,20,762,8,20,
        1,20,1,20,1,20,1,20,1,20,5,20,769,8,20,10,20,12,20,772,9,20,1,20,
        1,20,1,21,1,21,1,21,1,21,1,21,1,21,3,21,782,8,21,1,21,1,21,1,22,
        1,22,1,22,1,22,1,22,3,22,791,8,22,1,22,1,22,1,22,1,22,1,22,3,22,
        798,8,22,1,22,1,22,3,22,802,8,22,1,23,1,23,1,23,1,23,1,23,3,23,809,
        8,23,1,23,1,23,1,23,1,23,3,23,815,8,23,1,23,3,23,818,8,23,1,23,1,
        23,1,23,3,23,823,8,23,1,24,1,24,1,24,1,24,1,24,3,24,830,8,24,1,24,
        1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,844,
        8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,3,26,
        857,8,26,1,26,1,26,1,26,3,26,862,8,26,1,26,1,26,1,26,3,26,867,8,
        26,1,27,1,27,1,27,1,27,3,27,873,8,27,1,27,1,27,1,27,1,28,1,28,1,
        28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,
        30,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,
        31,1,32,1,32,3,32,909,8,32,1,32,3,32,912,8,32,1,32,1,32,1,33,1,33,
        3,33,918,8,33,1,33,3,33,921,8,33,1,33,1,33,1,34,1,34,3,34,927,8,
        34,1,35,1,35,1,35,1,35,3,35,933,8,35,1,35,1,35,1,35,1,35,1,35,1,
        35,1,35,1,35,1,35,1,35,3,35,945,8,35,3,35,947,8,35,1,36,1,36,1,36,
        1,36,1,36,1,36,1,36,1,36,1,36,3,36,958,8,36,1,37,1,37,1,37,1,37,
        1,37,1,37,3,37,966,8,37,1,38,1,38,1,38,3,38,971,8,38,1,38,1,38,3,
        38,975,8,38,1,39,1,39,1,39,3,39,980,8,39,1,39,1,39,1,40,1,40,1,40,
        3,40,987,8,40,1,40,1,40,3,40,991,8,40,1,41,1,41,3,41,995,8,41,1,
        41,1,41,1,41,1,41,3,41,1001,8,41,1,42,1,42,3,42,1005,8,42,1,42,1,
        42,3,42,1009,8,42,1,42,1,42,1,42,1,42,1,42,5,42,1016,8,42,10,42,
        12,42,1019,9,42,3,42,1021,8,42,1,42,3,42,1024,8,42,1,43,1,43,1,43,
        1,43,1,44,1,44,3,44,1032,8,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,
        1,46,1,46,1,46,1,46,1,46,3,46,1046,8,46,1,46,1,46,1,46,1,47,1,47,
        3,47,1053,8,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,49,1,49,1,49,
        1,49,3,49,1066,8,49,1,49,1,49,1,49,1,49,3,49,1072,8,49,1,49,1,49,
        1,49,3,49,1077,8,49,1,49,3,49,1080,8,49,1,50,3,50,1083,8,50,1,50,
        1,50,1,50,3,50,1088,8,50,1,50,1,50,3,50,1092,8,50,1,50,1,50,1,50,
        1,50,1,50,5,50,1099,8,50,10,50,12,50,1102,9,50,1,50,1,50,3,50,1106,
        8,50,1,50,1,50,1,51,1,51,3,51,1112,8,51,1,52,1,52,3,52,1116,8,52,
        1,52,1,52,1,52,3,52,1121,8,52,1,53,1,53,1,53,3,53,1126,8,53,1,53,
        3,53,1129,8,53,1,53,1,53,1,53,1,53,5,53,1135,8,53,10,53,12,53,1138,
        9,53,3,53,1140,8,53,1,53,1,53,3,53,1144,8,53,1,54,1,54,1,54,1,54,
        1,54,1,54,1,54,1,54,5,54,1154,8,54,10,54,12,54,1157,9,54,3,54,1159,
        8,54,1,54,1,54,3,54,1163,8,54,1,55,1,55,1,55,3,55,1168,8,55,1,55,
        1,55,3,55,1172,8,55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,
        1,56,1,56,1,56,1,56,1,56,3,56,1188,8,56,1,57,1,57,1,57,3,57,1193,
        8,57,1,57,1,57,1,57,5,57,1198,8,57,10,57,12,57,1201,9,57,3,57,1203,
        8,57,1,58,1,58,1,58,1,58,3,58,1209,8,58,1,58,3,58,1212,8,58,1,58,
        1,58,1,58,5,58,1217,8,58,10,58,12,58,1220,9,58,3,58,1222,8,58,1,
        59,1,59,3,59,1226,8,59,1,59,1,59,1,59,3,59,1231,8,59,1,59,3,59,1234,
        8,59,1,59,1,59,1,59,5,59,1239,8,59,10,59,12,59,1242,9,59,3,59,1244,
        8,59,1,60,1,60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,1,62,1,62,
        1,62,1,62,1,62,1,63,1,63,1,63,1,63,1,63,1,64,1,64,3,64,1268,8,64,
        1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,3,65,
        1282,8,65,1,65,1,65,3,65,1286,8,65,1,66,1,66,3,66,1290,8,66,1,66,
        1,66,1,67,1,67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,1,68,
        1,68,1,68,1,68,1,68,3,68,1310,8,68,3,68,1312,8,68,3,68,1314,8,68,
        1,69,1,69,1,69,1,69,1,69,1,69,1,69,3,69,1323,8,69,3,69,1325,8,69,
        1,70,1,70,1,70,1,70,1,70,1,70,1,70,3,70,1334,8,70,3,70,1336,8,70,
        1,71,1,71,1,71,1,71,1,71,1,71,1,71,3,71,1345,8,71,3,71,1347,8,71,
        1,72,1,72,1,72,3,72,1352,8,72,1,73,1,73,1,73,1,73,1,73,1,73,1,73,
        3,73,1361,8,73,1,74,1,74,1,74,1,74,1,74,1,74,1,74,3,74,1370,8,74,
        1,75,1,75,1,75,1,75,1,75,1,75,1,75,3,75,1379,8,75,1,76,1,76,1,76,
        1,77,1,77,1,77,1,77,1,77,1,77,3,77,1390,8,77,1,78,1,78,1,78,1,78,
        3,78,1396,8,78,1,78,1,78,1,78,3,78,1401,8,78,1,78,3,78,1404,8,78,
        1,78,1,78,1,79,1,79,1,79,1,79,1,80,1,80,1,80,1,80,1,80,3,80,1417,
        8,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,3,80,1427,8,80,1,80,
        1,80,3,80,1431,8,80,1,81,1,81,1,81,3,81,1436,8,81,1,82,1,82,1,82,
        1,82,1,82,1,82,1,82,5,82,1445,8,82,10,82,12,82,1448,9,82,1,82,1,
        82,3,82,1452,8,82,1,83,1,83,1,83,1,84,1,84,1,84,1,84,1,85,1,85,1,
        85,1,86,1,86,1,86,1,86,1,87,1,87,1,88,1,88,1,89,1,89,1,90,1,90,1,
        91,1,91,1,92,1,92,1,93,1,93,1,93,5,93,1483,8,93,10,93,12,93,1486,
        9,93,1,94,1,94,1,94,5,94,1491,8,94,10,94,12,94,1494,9,94,1,95,1,
        95,3,95,1498,8,95,1,96,1,96,3,96,1502,8,96,1,97,1,97,3,97,1506,8,
        97,1,98,1,98,1,98,3,98,1511,8,98,1,98,1,98,3,98,1515,8,98,1,98,1,
        98,1,98,3,98,1520,8,98,1,98,1,98,1,98,3,98,1525,8,98,1,98,1,98,1,
        98,3,98,1530,8,98,1,98,1,98,3,98,1534,8,98,1,98,1,98,1,98,1,98,1,
        98,1,98,1,98,3,98,1543,8,98,1,98,3,98,1546,8,98,1,98,1,98,3,98,1550,
        8,98,1,99,1,99,1,99,5,99,1555,8,99,10,99,12,99,1558,9,99,1,100,1,
        100,1,100,1,100,1,101,1,101,1,101,1,101,3,101,1568,8,101,1,101,1,
        101,1,101,1,101,3,101,1574,8,101,5,101,1576,8,101,10,101,12,101,
        1579,9,101,1,101,1,101,1,102,3,102,1584,8,102,1,102,1,102,1,103,
        1,103,1,103,1,103,5,103,1592,8,103,10,103,12,103,1595,9,103,1,104,
        1,104,1,104,1,104,3,104,1601,8,104,1,104,1,104,1,104,3,104,1606,
        8,104,1,104,1,104,1,104,3,104,1611,8,104,1,104,1,104,1,104,3,104,
        1616,8,104,1,104,1,104,5,104,1620,8,104,10,104,12,104,1623,9,104,
        3,104,1625,8,104,1,105,1,105,1,105,1,105,1,105,1,105,1,105,3,105,
        1634,8,105,1,105,3,105,1637,8,105,1,105,3,105,1640,8,105,1,106,1,
        106,1,106,1,106,3,106,1646,8,106,1,107,1,107,1,107,1,107,3,107,1652,
        8,107,1,108,1,108,1,109,1,109,1,109,1,109,5,109,1660,8,109,10,109,
        12,109,1663,9,109,3,109,1665,8,109,1,109,1,109,3,109,1669,8,109,
        1,109,1,109,3,109,1673,8,109,1,110,3,110,1676,8,110,1,110,1,110,
        5,110,1680,8,110,10,110,12,110,1683,9,110,3,110,1685,8,110,1,111,
        1,111,1,111,1,111,3,111,1691,8,111,1,111,1,111,5,111,1695,8,111,
        10,111,12,111,1698,9,111,3,111,1700,8,111,1,112,3,112,1703,8,112,
        1,112,1,112,3,112,1707,8,112,1,113,1,113,1,113,1,113,1,113,1,113,
        1,113,1,113,3,113,1717,8,113,1,114,1,114,1,115,1,115,1,116,1,116,
        1,116,5,116,1726,8,116,10,116,12,116,1729,9,116,1,116,1,116,3,116,
        1733,8,116,1,116,3,116,1736,8,116,1,117,1,117,3,117,1740,8,117,1,
        117,1,117,1,117,1,118,1,118,3,118,1747,8,118,1,118,1,118,1,118,1,
        118,1,118,1,118,5,118,1755,8,118,10,118,12,118,1758,9,118,1,118,
        1,118,1,119,1,119,1,119,1,119,1,119,1,119,1,119,3,119,1769,8,119,
        1,119,1,119,1,119,1,119,3,119,1775,8,119,3,119,1777,8,119,1,120,
        1,120,1,120,1,120,1,120,1,120,1,120,3,120,1786,8,120,1,120,3,120,
        1789,8,120,1,121,1,121,1,121,1,121,1,121,3,121,1796,8,121,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,1,122,3,122,1806,8,122,1,123,
        1,123,1,123,1,123,3,123,1812,8,123,1,124,1,124,1,124,1,124,5,124,
        1818,8,124,10,124,12,124,1821,9,124,1,124,1,124,1,125,1,125,1,125,
        1,125,5,125,1829,8,125,10,125,12,125,1832,9,125,1,125,1,125,1,126,
        1,126,1,126,5,126,1839,8,126,10,126,12,126,1842,9,126,1,127,1,127,
        1,127,1,127,1,127,1,127,1,127,1,127,3,127,1852,8,127,3,127,1854,
        8,127,1,127,1,127,1,127,1,127,3,127,1860,8,127,1,128,1,128,1,128,
        3,128,1865,8,128,1,129,1,129,1,129,1,129,1,129,1,129,5,129,1873,
        8,129,10,129,12,129,1876,9,129,3,129,1878,8,129,1,129,1,129,1,129,
        1,129,3,129,1884,8,129,3,129,1886,8,129,1,130,1,130,1,130,1,130,
        1,130,1,130,3,130,1894,8,130,1,130,1,130,1,130,1,130,3,130,1900,
        8,130,1,130,5,130,1903,8,130,10,130,12,130,1906,9,130,1,131,1,131,
        1,131,1,131,1,131,1,131,1,131,5,131,1915,8,131,10,131,12,131,1918,
        9,131,1,131,1,131,1,131,1,131,3,131,1924,8,131,1,132,1,132,3,132,
        1928,8,132,1,132,1,132,3,132,1932,8,132,1,133,1,133,3,133,1936,8,
        133,1,133,3,133,1939,8,133,1,133,1,133,1,133,5,133,1944,8,133,10,
        133,12,133,1947,9,133,1,133,1,133,1,133,1,133,5,133,1953,8,133,10,
        133,12,133,1956,9,133,3,133,1958,8,133,1,133,1,133,3,133,1962,8,
        133,1,133,1,133,1,133,3,133,1967,8,133,1,133,1,133,3,133,1971,8,
        133,1,134,3,134,1974,8,134,1,134,1,134,1,134,5,134,1979,8,134,10,
        134,12,134,1982,9,134,1,135,1,135,1,136,1,136,1,136,1,136,5,136,
        1990,8,136,10,136,12,136,1993,9,136,3,136,1995,8,136,1,136,1,136,
        3,136,1999,8,136,1,137,1,137,3,137,2003,8,137,1,137,1,137,1,137,
        1,138,1,138,1,139,1,139,3,139,2012,8,139,1,139,3,139,2015,8,139,
        1,139,1,139,1,139,1,139,1,139,3,139,2022,8,139,1,140,1,140,1,140,
        1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,3,140,2036,
        8,140,5,140,2038,8,140,10,140,12,140,2041,9,140,1,141,3,141,2044,
        8,141,1,141,1,141,3,141,2048,8,141,1,141,1,141,3,141,2052,8,141,
        1,141,1,141,3,141,2056,8,141,1,141,1,141,3,141,2060,8,141,1,141,
        1,141,3,141,2064,8,141,1,141,1,141,1,141,1,141,1,141,1,141,1,141,
        1,141,3,141,2074,8,141,1,142,1,142,1,142,1,142,1,142,1,142,1,142,
        5,142,2083,8,142,10,142,12,142,2086,9,142,1,142,1,142,3,142,2090,
        8,142,1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,
        1,143,3,143,2103,8,143,3,143,2105,8,143,1,144,1,144,1,145,1,145,
        3,145,2111,8,145,1,145,1,145,3,145,2115,8,145,3,145,2117,8,145,1,
        146,1,146,1,146,1,146,5,146,2123,8,146,10,146,12,146,2126,9,146,
        1,146,1,146,1,147,1,147,3,147,2132,8,147,1,147,1,147,1,147,3,147,
        2137,8,147,1,148,1,148,1,148,1,148,1,149,1,149,1,149,1,149,1,149,
        5,149,2148,8,149,10,149,12,149,2151,9,149,1,149,1,149,1,149,3,149,
        2156,8,149,1,150,1,150,1,150,1,150,1,151,1,151,3,151,2164,8,151,
        1,152,1,152,1,153,1,153,1,153,3,153,2171,8,153,1,153,1,153,3,153,
        2175,8,153,1,153,1,153,1,153,1,153,1,153,1,153,5,153,2183,8,153,
        10,153,12,153,2186,9,153,1,154,1,154,1,154,1,154,1,154,1,154,1,154,
        1,154,3,154,2196,8,154,1,154,1,154,1,154,1,154,1,154,1,154,3,154,
        2204,8,154,1,154,1,154,1,154,1,154,1,154,5,154,2211,8,154,10,154,
        12,154,2214,9,154,1,154,1,154,1,154,3,154,2219,8,154,1,154,1,154,
        1,154,3,154,2224,8,154,1,154,1,154,1,154,1,154,3,154,2230,8,154,
        1,154,1,154,1,154,1,154,3,154,2236,8,154,1,154,1,154,1,154,3,154,
        2241,8,154,1,154,1,154,1,154,3,154,2246,8,154,1,155,1,155,1,155,
        1,155,3,155,2252,8,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,
        1,155,1,155,5,155,2263,8,155,10,155,12,155,2266,9,155,1,156,1,156,
        1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,
        1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,
        3,156,2292,8,156,1,156,1,156,1,156,1,156,3,156,2298,8,156,5,156,
        2300,8,156,10,156,12,156,2303,9,156,1,156,1,156,1,156,1,156,1,156,
        1,156,1,156,5,156,2312,8,156,10,156,12,156,2315,9,156,1,156,1,156,
        1,156,1,156,1,156,1,156,1,156,3,156,2324,8,156,1,156,3,156,2327,
        8,156,1,156,1,156,1,156,3,156,2332,8,156,1,156,1,156,1,156,5,156,
        2337,8,156,10,156,12,156,2340,9,156,3,156,2342,8,156,1,156,1,156,
        1,156,1,156,1,156,5,156,2349,8,156,10,156,12,156,2352,9,156,3,156,
        2354,8,156,1,156,1,156,3,156,2358,8,156,1,156,3,156,2361,8,156,1,
        156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,5,156,2371,8,156,10,
        156,12,156,2374,9,156,3,156,2376,8,156,1,156,1,156,1,156,1,156,1,
        156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,
        4,156,2393,8,156,11,156,12,156,2394,1,156,1,156,3,156,2399,8,156,
        1,156,1,156,1,156,1,156,4,156,2405,8,156,11,156,12,156,2406,1,156,
        1,156,3,156,2411,8,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,
        1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,
        1,156,1,156,1,156,5,156,2434,8,156,10,156,12,156,2437,9,156,3,156,
        2439,8,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,3,156,2448,
        8,156,1,156,1,156,1,156,1,156,3,156,2454,8,156,1,156,1,156,1,156,
        1,156,3,156,2460,8,156,1,156,1,156,1,156,1,156,3,156,2466,8,156,
        1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,3,156,2477,
        8,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,3,156,2486,8,156,
        1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,
        1,156,1,156,1,156,1,156,1,156,1,156,1,156,5,156,2506,8,156,10,156,
        12,156,2509,9,156,3,156,2511,8,156,1,156,3,156,2514,8,156,1,156,
        1,156,1,156,1,156,1,156,1,156,1,156,1,156,5,156,2524,8,156,10,156,
        12,156,2527,9,156,1,157,1,157,1,157,1,157,3,157,2533,8,157,3,157,
        2535,8,157,1,158,1,158,1,159,1,159,1,160,1,160,1,161,1,161,1,161,
        1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,
        3,161,2557,8,161,1,162,1,162,1,163,1,163,1,164,1,164,1,164,1,164,
        1,164,1,164,1,164,1,164,1,164,1,164,1,164,1,164,1,164,1,164,1,164,
        1,164,1,164,1,164,1,164,1,164,1,164,1,164,1,164,5,164,2586,8,164,
        10,164,12,164,2589,9,164,1,164,1,164,1,164,1,164,3,164,2595,8,164,
        1,164,1,164,1,164,1,164,5,164,2601,8,164,10,164,12,164,2604,9,164,
        1,164,1,164,3,164,2608,8,164,3,164,2610,8,164,1,164,1,164,5,164,
        2614,8,164,10,164,12,164,2617,9,164,1,165,1,165,1,166,1,166,3,166,
        2623,8,166,1,167,1,167,1,167,1,167,3,167,2629,8,167,1,168,1,168,
        1,168,1,168,1,168,1,169,1,169,1,169,1,169,1,169,1,169,1,170,1,170,
        1,170,1,170,1,170,1,170,1,170,5,170,2649,8,170,10,170,12,170,2652,
        9,170,3,170,2654,8,170,1,170,1,170,1,170,1,170,1,170,5,170,2661,
        8,170,10,170,12,170,2664,9,170,3,170,2666,8,170,1,170,3,170,2669,
        8,170,1,170,1,170,1,171,1,171,1,171,1,171,1,171,1,171,1,171,1,171,
        1,171,1,171,1,171,1,171,1,171,1,171,1,171,1,171,3,171,2689,8,171,
        1,172,1,172,1,172,1,172,1,172,1,172,1,172,1,172,1,172,3,172,2700,
        8,172,1,173,1,173,1,173,1,173,1,173,3,173,2707,8,173,1,174,1,174,
        1,174,5,174,2712,8,174,10,174,12,174,2715,9,174,1,175,1,175,1,175,
        1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,3,175,2728,8,175,
        3,175,2730,8,175,1,176,1,176,1,177,1,177,1,177,5,177,2737,8,177,
        10,177,12,177,2740,9,177,1,178,1,178,1,178,1,178,1,178,1,178,3,178,
        2748,8,178,1,179,1,179,1,179,1,179,1,179,3,179,2755,8,179,1,180,
        3,180,2758,8,180,1,180,1,180,3,180,2762,8,180,1,180,1,180,3,180,
        2766,8,180,1,180,3,180,2769,8,180,1,181,1,181,1,182,1,182,1,182,
        10,770,1446,1621,1661,1681,1696,1727,1756,1830,2301,6,260,280,306,
        310,312,328,183,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
        36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,
        80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,
        118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,
        150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,
        182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,
        214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,
        246,248,250,252,254,256,258,260,262,264,266,268,270,272,274,276,
        278,280,282,284,286,288,290,292,294,296,298,300,302,304,306,308,
        310,312,314,316,318,320,322,324,326,328,330,332,334,336,338,340,
        342,344,346,348,350,352,354,356,358,360,362,364,0,33,2,0,46,46,170,
        170,2,0,166,166,204,204,2,0,176,176,202,202,2,0,69,69,80,80,2,0,
        27,27,159,159,2,0,103,103,144,144,2,0,47,47,171,171,2,0,3,3,12,12,
        3,0,87,87,166,166,204,204,2,0,178,178,209,209,1,0,245,248,2,0,147,
        147,219,223,2,0,65,65,95,95,2,0,64,64,200,200,2,0,10,10,55,55,2,
        0,75,75,112,112,2,0,2,2,57,57,2,0,14,14,185,185,3,0,106,106,115,
        115,164,164,2,0,105,105,163,163,4,0,70,70,133,133,194,194,208,208,
        1,0,255,256,1,0,257,259,1,0,249,254,3,0,2,2,6,6,181,181,2,0,70,70,
        194,194,5,0,48,49,91,92,122,125,172,173,217,218,1,0,127,130,2,0,
        8,8,227,244,2,0,77,77,149,149,4,0,46,46,178,178,188,188,209,209,
        16,0,28,29,40,40,43,43,48,48,68,68,91,91,114,114,122,122,124,124,
        158,158,165,165,172,172,184,184,196,196,204,204,217,217,23,0,14,
        14,43,44,48,49,65,65,68,68,91,91,95,95,110,110,119,119,122,125,127,
        130,137,137,140,140,152,153,172,173,180,180,184,185,195,195,204,
        204,213,213,217,217,220,220,231,231,3098,0,369,1,0,0,0,2,374,1,0,
        0,0,4,400,1,0,0,0,6,402,1,0,0,0,8,413,1,0,0,0,10,415,1,0,0,0,12,
        454,1,0,0,0,14,476,1,0,0,0,16,531,1,0,0,0,18,551,1,0,0,0,20,565,
        1,0,0,0,22,569,1,0,0,0,24,631,1,0,0,0,26,679,1,0,0,0,28,681,1,0,
        0,0,30,689,1,0,0,0,32,709,1,0,0,0,34,729,1,0,0,0,36,736,1,0,0,0,
        38,745,1,0,0,0,40,753,1,0,0,0,42,775,1,0,0,0,44,785,1,0,0,0,46,803,
        1,0,0,0,48,824,1,0,0,0,50,845,1,0,0,0,52,851,1,0,0,0,54,868,1,0,
        0,0,56,877,1,0,0,0,58,884,1,0,0,0,60,892,1,0,0,0,62,899,1,0,0,0,
        64,906,1,0,0,0,66,915,1,0,0,0,68,926,1,0,0,0,70,928,1,0,0,0,72,948,
        1,0,0,0,74,965,1,0,0,0,76,967,1,0,0,0,78,976,1,0,0,0,80,983,1,0,
        0,0,82,992,1,0,0,0,84,1002,1,0,0,0,86,1025,1,0,0,0,88,1031,1,0,0,
        0,90,1033,1,0,0,0,92,1040,1,0,0,0,94,1052,1,0,0,0,96,1054,1,0,0,
        0,98,1061,1,0,0,0,100,1082,1,0,0,0,102,1111,1,0,0,0,104,1113,1,0,
        0,0,106,1122,1,0,0,0,108,1145,1,0,0,0,110,1164,1,0,0,0,112,1187,
        1,0,0,0,114,1189,1,0,0,0,116,1204,1,0,0,0,118,1223,1,0,0,0,120,1245,
        1,0,0,0,122,1250,1,0,0,0,124,1255,1,0,0,0,126,1260,1,0,0,0,128,1265,
        1,0,0,0,130,1272,1,0,0,0,132,1287,1,0,0,0,134,1293,1,0,0,0,136,1313,
        1,0,0,0,138,1315,1,0,0,0,140,1326,1,0,0,0,142,1337,1,0,0,0,144,1351,
        1,0,0,0,146,1353,1,0,0,0,148,1362,1,0,0,0,150,1371,1,0,0,0,152,1380,
        1,0,0,0,154,1383,1,0,0,0,156,1391,1,0,0,0,158,1407,1,0,0,0,160,1411,
        1,0,0,0,162,1435,1,0,0,0,164,1437,1,0,0,0,166,1453,1,0,0,0,168,1456,
        1,0,0,0,170,1460,1,0,0,0,172,1463,1,0,0,0,174,1467,1,0,0,0,176,1469,
        1,0,0,0,178,1471,1,0,0,0,180,1473,1,0,0,0,182,1475,1,0,0,0,184,1477,
        1,0,0,0,186,1479,1,0,0,0,188,1487,1,0,0,0,190,1497,1,0,0,0,192,1501,
        1,0,0,0,194,1505,1,0,0,0,196,1510,1,0,0,0,198,1551,1,0,0,0,200,1559,
        1,0,0,0,202,1563,1,0,0,0,204,1583,1,0,0,0,206,1587,1,0,0,0,208,1596,
        1,0,0,0,210,1626,1,0,0,0,212,1641,1,0,0,0,214,1647,1,0,0,0,216,1653,
        1,0,0,0,218,1655,1,0,0,0,220,1675,1,0,0,0,222,1686,1,0,0,0,224,1706,
        1,0,0,0,226,1716,1,0,0,0,228,1718,1,0,0,0,230,1720,1,0,0,0,232,1735,
        1,0,0,0,234,1737,1,0,0,0,236,1744,1,0,0,0,238,1776,1,0,0,0,240,1788,
        1,0,0,0,242,1795,1,0,0,0,244,1805,1,0,0,0,246,1807,1,0,0,0,248,1813,
        1,0,0,0,250,1824,1,0,0,0,252,1835,1,0,0,0,254,1843,1,0,0,0,256,1861,
        1,0,0,0,258,1866,1,0,0,0,260,1887,1,0,0,0,262,1923,1,0,0,0,264,1925,
        1,0,0,0,266,1933,1,0,0,0,268,1973,1,0,0,0,270,1983,1,0,0,0,272,1998,
        1,0,0,0,274,2000,1,0,0,0,276,2007,1,0,0,0,278,2021,1,0,0,0,280,2023,
        1,0,0,0,282,2073,1,0,0,0,284,2089,1,0,0,0,286,2091,1,0,0,0,288,2106,
        1,0,0,0,290,2108,1,0,0,0,292,2118,1,0,0,0,294,2136,1,0,0,0,296,2138,
        1,0,0,0,298,2142,1,0,0,0,300,2157,1,0,0,0,302,2163,1,0,0,0,304,2165,
        1,0,0,0,306,2174,1,0,0,0,308,2245,1,0,0,0,310,2251,1,0,0,0,312,2513,
        1,0,0,0,314,2534,1,0,0,0,316,2536,1,0,0,0,318,2538,1,0,0,0,320,2540,
        1,0,0,0,322,2556,1,0,0,0,324,2558,1,0,0,0,326,2560,1,0,0,0,328,2609,
        1,0,0,0,330,2618,1,0,0,0,332,2622,1,0,0,0,334,2628,1,0,0,0,336,2630,
        1,0,0,0,338,2635,1,0,0,0,340,2641,1,0,0,0,342,2688,1,0,0,0,344,2699,
        1,0,0,0,346,2706,1,0,0,0,348,2708,1,0,0,0,350,2729,1,0,0,0,352,2731,
        1,0,0,0,354,2733,1,0,0,0,356,2747,1,0,0,0,358,2754,1,0,0,0,360,2768,
        1,0,0,0,362,2770,1,0,0,0,364,2772,1,0,0,0,366,368,3,2,1,0,367,366,
        1,0,0,0,368,371,1,0,0,0,369,367,1,0,0,0,369,370,1,0,0,0,370,372,
        1,0,0,0,371,369,1,0,0,0,372,373,5,0,0,1,373,1,1,0,0,0,374,376,3,
        4,2,0,375,377,5,262,0,0,376,375,1,0,0,0,376,377,1,0,0,0,377,3,1,
        0,0,0,378,401,3,204,102,0,379,401,3,6,3,0,380,401,3,8,4,0,381,401,
        3,26,13,0,382,401,3,64,32,0,383,401,3,66,33,0,384,401,3,68,34,0,
        385,401,3,74,37,0,386,401,3,88,44,0,387,401,3,94,47,0,388,401,3,
        100,50,0,389,401,3,102,51,0,390,401,3,108,54,0,391,401,3,110,55,
        0,392,401,3,112,56,0,393,401,3,144,72,0,394,401,3,152,76,0,395,401,
        3,154,77,0,396,401,3,156,78,0,397,401,3,158,79,0,398,401,3,160,80,
        0,399,401,3,162,81,0,400,378,1,0,0,0,400,379,1,0,0,0,400,380,1,0,
        0,0,400,381,1,0,0,0,400,382,1,0,0,0,400,383,1,0,0,0,400,384,1,0,
        0,0,400,385,1,0,0,0,400,386,1,0,0,0,400,387,1,0,0,0,400,388,1,0,
        0,0,400,389,1,0,0,0,400,390,1,0,0,0,400,391,1,0,0,0,400,392,1,0,
        0,0,400,393,1,0,0,0,400,394,1,0,0,0,400,395,1,0,0,0,400,396,1,0,
        0,0,400,397,1,0,0,0,400,398,1,0,0,0,400,399,1,0,0,0,401,5,1,0,0,
        0,402,403,5,203,0,0,403,404,3,184,92,0,404,7,1,0,0,0,405,414,3,18,
        9,0,406,414,3,20,10,0,407,414,3,22,11,0,408,414,3,24,12,0,409,414,
        3,16,8,0,410,414,3,14,7,0,411,414,3,12,6,0,412,414,3,10,5,0,413,
        405,1,0,0,0,413,406,1,0,0,0,413,407,1,0,0,0,413,408,1,0,0,0,413,
        409,1,0,0,0,413,410,1,0,0,0,413,411,1,0,0,0,413,412,1,0,0,0,414,
        9,1,0,0,0,415,417,5,37,0,0,416,418,5,19,0,0,417,416,1,0,0,0,417,
        418,1,0,0,0,418,419,1,0,0,0,419,421,5,188,0,0,420,422,3,172,86,0,
        421,420,1,0,0,0,421,422,1,0,0,0,422,423,1,0,0,0,423,439,3,174,87,
        0,424,425,5,265,0,0,425,430,3,214,107,0,426,427,5,263,0,0,427,429,
        3,214,107,0,428,426,1,0,0,0,429,432,1,0,0,0,430,428,1,0,0,0,430,
        431,1,0,0,0,431,435,1,0,0,0,432,430,1,0,0,0,433,434,5,263,0,0,434,
        436,3,208,104,0,435,433,1,0,0,0,435,436,1,0,0,0,436,437,1,0,0,0,
        437,438,5,266,0,0,438,440,1,0,0,0,439,424,1,0,0,0,439,440,1,0,0,
        0,440,447,1,0,0,0,441,442,5,17,0,0,442,445,5,26,0,0,443,446,3,292,
        146,0,444,446,3,250,125,0,445,443,1,0,0,0,445,444,1,0,0,0,446,448,
        1,0,0,0,447,441,1,0,0,0,447,448,1,0,0,0,448,449,1,0,0,0,449,452,
        3,196,98,0,450,451,5,9,0,0,451,453,3,204,102,0,452,450,1,0,0,0,452,
        453,1,0,0,0,453,11,1,0,0,0,454,456,5,37,0,0,455,457,5,19,0,0,456,
        455,1,0,0,0,456,457,1,0,0,0,457,458,1,0,0,0,458,460,5,188,0,0,459,
        461,3,172,86,0,460,459,1,0,0,0,460,461,1,0,0,0,461,462,1,0,0,0,462,
        463,3,174,87,0,463,467,5,115,0,0,464,468,3,186,93,0,465,466,5,147,
        0,0,466,468,3,314,157,0,467,464,1,0,0,0,467,465,1,0,0,0,468,472,
        1,0,0,0,469,470,5,17,0,0,470,471,5,26,0,0,471,473,3,250,125,0,472,
        469,1,0,0,0,472,473,1,0,0,0,473,474,1,0,0,0,474,475,3,196,98,0,475,
        13,1,0,0,0,476,478,5,37,0,0,477,479,5,19,0,0,478,477,1,0,0,0,478,
        479,1,0,0,0,479,480,1,0,0,0,480,482,5,188,0,0,481,483,3,172,86,0,
        482,481,1,0,0,0,482,483,1,0,0,0,483,484,1,0,0,0,484,502,3,174,87,
        0,485,486,5,265,0,0,486,491,3,216,108,0,487,488,5,263,0,0,488,490,
        3,216,108,0,489,487,1,0,0,0,490,493,1,0,0,0,491,489,1,0,0,0,491,
        492,1,0,0,0,492,498,1,0,0,0,493,491,1,0,0,0,494,495,5,263,0,0,495,
        496,5,150,0,0,496,497,5,110,0,0,497,499,3,292,146,0,498,494,1,0,
        0,0,498,499,1,0,0,0,499,500,1,0,0,0,500,501,5,266,0,0,501,503,1,
        0,0,0,502,485,1,0,0,0,502,503,1,0,0,0,503,509,1,0,0,0,504,505,5,
        150,0,0,505,507,5,110,0,0,506,508,3,292,146,0,507,506,1,0,0,0,507,
        508,1,0,0,0,508,510,1,0,0,0,509,504,1,0,0,0,509,510,1,0,0,0,510,
        514,1,0,0,0,511,512,5,145,0,0,512,513,5,26,0,0,513,515,3,232,116,
        0,514,511,1,0,0,0,514,515,1,0,0,0,515,518,1,0,0,0,516,517,5,34,0,
        0,517,519,3,314,157,0,518,516,1,0,0,0,518,519,1,0,0,0,519,520,1,
        0,0,0,520,521,5,23,0,0,521,522,5,9,0,0,522,525,5,111,0,0,523,524,
        5,25,0,0,524,526,3,248,124,0,525,523,1,0,0,0,525,526,1,0,0,0,526,
        529,1,0,0,0,527,528,5,9,0,0,528,530,3,204,102,0,529,527,1,0,0,0,
        529,530,1,0,0,0,530,15,1,0,0,0,531,532,5,37,0,0,532,534,5,212,0,
        0,533,535,3,172,86,0,534,533,1,0,0,0,534,535,1,0,0,0,535,536,1,0,
        0,0,536,538,3,178,89,0,537,539,3,202,101,0,538,537,1,0,0,0,538,539,
        1,0,0,0,539,542,1,0,0,0,540,541,5,34,0,0,541,543,3,314,157,0,542,
        540,1,0,0,0,542,543,1,0,0,0,543,546,1,0,0,0,544,545,5,25,0,0,545,
        547,3,248,124,0,546,544,1,0,0,0,546,547,1,0,0,0,547,548,1,0,0,0,
        548,549,5,9,0,0,549,550,3,204,102,0,550,17,1,0,0,0,551,552,5,37,
        0,0,552,554,7,0,0,0,553,555,3,172,86,0,554,553,1,0,0,0,554,555,1,
        0,0,0,555,556,1,0,0,0,556,559,3,176,88,0,557,558,5,34,0,0,558,560,
        3,314,157,0,559,557,1,0,0,0,559,560,1,0,0,0,560,563,1,0,0,0,561,
        562,5,24,0,0,562,564,3,314,157,0,563,561,1,0,0,0,563,564,1,0,0,0,
        564,19,1,0,0,0,565,566,5,37,0,0,566,567,5,166,0,0,567,568,3,358,
        179,0,568,21,1,0,0,0,569,571,5,37,0,0,570,572,5,12,0,0,571,570,1,
        0,0,0,571,572,1,0,0,0,572,573,1,0,0,0,573,575,5,84,0,0,574,576,3,
        172,86,0,575,574,1,0,0,0,575,576,1,0,0,0,576,577,1,0,0,0,577,590,
        3,180,90,0,578,587,5,265,0,0,579,584,3,328,164,0,580,581,5,263,0,
        0,581,583,3,328,164,0,582,580,1,0,0,0,583,586,1,0,0,0,584,582,1,
        0,0,0,584,585,1,0,0,0,585,588,1,0,0,0,586,584,1,0,0,0,587,579,1,
        0,0,0,587,588,1,0,0,0,588,589,1,0,0,0,589,591,5,266,0,0,590,578,
        1,0,0,0,590,591,1,0,0,0,591,592,1,0,0,0,592,593,5,160,0,0,593,596,
        3,328,164,0,594,595,5,102,0,0,595,597,3,328,164,0,596,594,1,0,0,
        0,596,597,1,0,0,0,597,598,1,0,0,0,598,599,5,24,0,0,599,603,5,274,
        0,0,600,601,5,104,0,0,601,602,5,249,0,0,602,604,5,274,0,0,603,600,
        1,0,0,0,603,604,1,0,0,0,604,605,1,0,0,0,605,606,5,206,0,0,606,607,
        5,249,0,0,607,608,5,274,0,0,608,609,5,126,0,0,609,610,5,249,0,0,
        610,614,5,274,0,0,611,612,5,18,0,0,612,613,5,249,0,0,613,615,5,274,
        0,0,614,611,1,0,0,0,614,615,1,0,0,0,615,619,1,0,0,0,616,617,5,20,
        0,0,617,618,5,249,0,0,618,620,5,274,0,0,619,616,1,0,0,0,619,620,
        1,0,0,0,620,624,1,0,0,0,621,622,5,187,0,0,622,623,5,249,0,0,623,
        625,5,274,0,0,624,621,1,0,0,0,624,625,1,0,0,0,625,629,1,0,0,0,626,
        627,5,76,0,0,627,628,5,249,0,0,628,630,5,274,0,0,629,626,1,0,0,0,
        629,630,1,0,0,0,630,23,1,0,0,0,631,632,5,37,0,0,632,634,5,84,0,0,
        633,635,3,172,86,0,634,633,1,0,0,0,634,635,1,0,0,0,635,636,1,0,0,
        0,636,649,3,180,90,0,637,646,5,265,0,0,638,643,3,328,164,0,639,640,
        5,263,0,0,640,642,3,328,164,0,641,639,1,0,0,0,642,645,1,0,0,0,643,
        641,1,0,0,0,643,644,1,0,0,0,644,647,1,0,0,0,645,643,1,0,0,0,646,
        638,1,0,0,0,646,647,1,0,0,0,647,648,1,0,0,0,648,650,5,266,0,0,649,
        637,1,0,0,0,649,650,1,0,0,0,650,653,1,0,0,0,651,652,5,160,0,0,652,
        654,3,328,164,0,653,651,1,0,0,0,653,654,1,0,0,0,654,655,1,0,0,0,
        655,656,5,24,0,0,656,657,5,274,0,0,657,658,5,186,0,0,658,659,5,249,
        0,0,659,660,3,314,157,0,660,25,1,0,0,0,661,680,3,28,14,0,662,680,
        3,62,31,0,663,680,3,60,30,0,664,680,3,58,29,0,665,680,3,54,27,0,
        666,680,3,56,28,0,667,680,3,52,26,0,668,680,3,48,24,0,669,680,3,
        50,25,0,670,680,3,46,23,0,671,680,3,44,22,0,672,680,3,42,21,0,673,
        680,3,40,20,0,674,680,3,34,17,0,675,680,3,30,15,0,676,680,3,32,16,
        0,677,680,3,36,18,0,678,680,3,38,19,0,679,661,1,0,0,0,679,662,1,
        0,0,0,679,663,1,0,0,0,679,664,1,0,0,0,679,665,1,0,0,0,679,666,1,
        0,0,0,679,667,1,0,0,0,679,668,1,0,0,0,679,669,1,0,0,0,679,670,1,
        0,0,0,679,671,1,0,0,0,679,672,1,0,0,0,679,673,1,0,0,0,679,674,1,
        0,0,0,679,675,1,0,0,0,679,676,1,0,0,0,679,677,1,0,0,0,679,678,1,
        0,0,0,680,27,1,0,0,0,681,682,5,4,0,0,682,683,5,46,0,0,683,684,3,
        184,92,0,684,685,5,176,0,0,685,686,5,142,0,0,686,687,7,1,0,0,687,
        688,3,358,179,0,688,29,1,0,0,0,689,690,5,4,0,0,690,691,5,188,0,0,
        691,692,3,186,93,0,692,693,5,176,0,0,693,694,5,32,0,0,694,695,5,
        182,0,0,695,696,3,192,96,0,696,697,5,265,0,0,697,698,3,228,114,0,
        698,699,5,249,0,0,699,705,3,314,157,0,700,701,5,263,0,0,701,702,
        3,228,114,0,702,703,5,249,0,0,703,704,3,314,157,0,704,706,1,0,0,
        0,705,700,1,0,0,0,705,706,1,0,0,0,706,707,1,0,0,0,707,708,5,266,
        0,0,708,31,1,0,0,0,709,710,5,4,0,0,710,711,5,188,0,0,711,714,3,186,
        93,0,712,713,5,145,0,0,713,715,3,304,152,0,714,712,1,0,0,0,714,715,
        1,0,0,0,715,716,1,0,0,0,716,727,5,176,0,0,717,718,5,30,0,0,718,719,
        5,94,0,0,719,724,3,314,157,0,720,721,5,216,0,0,721,722,5,151,0,0,
        722,723,5,249,0,0,723,725,3,360,180,0,724,720,1,0,0,0,724,725,1,
        0,0,0,725,728,1,0,0,0,726,728,5,197,0,0,727,717,1,0,0,0,727,726,
        1,0,0,0,728,33,1,0,0,0,729,730,5,4,0,0,730,731,5,188,0,0,731,732,
        3,186,93,0,732,733,5,31,0,0,733,734,5,32,0,0,734,735,3,220,110,0,
        735,35,1,0,0,0,736,737,5,4,0,0,737,738,5,188,0,0,738,739,3,186,93,
        0,739,741,5,58,0,0,740,742,5,32,0,0,741,740,1,0,0,0,741,742,1,0,
        0,0,742,743,1,0,0,0,743,744,3,192,96,0,744,37,1,0,0,0,745,746,5,
        4,0,0,746,747,5,188,0,0,747,748,3,186,93,0,748,749,5,176,0,0,749,
        750,5,142,0,0,750,751,7,1,0,0,751,752,3,358,179,0,752,39,1,0,0,0,
        753,754,5,4,0,0,754,755,5,188,0,0,755,761,3,186,93,0,756,762,5,158,
        0,0,757,759,5,1,0,0,758,760,3,172,86,0,759,758,1,0,0,0,759,760,1,
        0,0,0,760,762,1,0,0,0,761,756,1,0,0,0,761,757,1,0,0,0,762,763,1,
        0,0,0,763,764,5,33,0,0,764,765,5,265,0,0,765,770,3,220,110,0,766,
        767,5,263,0,0,767,769,3,220,110,0,768,766,1,0,0,0,769,772,1,0,0,
        0,770,771,1,0,0,0,770,768,1,0,0,0,771,773,1,0,0,0,772,770,1,0,0,
        0,773,774,5,266,0,0,774,41,1,0,0,0,775,776,5,4,0,0,776,777,5,188,
        0,0,777,778,3,186,93,0,778,779,5,1,0,0,779,781,5,32,0,0,780,782,
        3,172,86,0,781,780,1,0,0,0,781,782,1,0,0,0,782,783,1,0,0,0,783,784,
        3,222,111,0,784,43,1,0,0,0,785,786,5,4,0,0,786,787,5,188,0,0,787,
        788,3,186,93,0,788,790,5,4,0,0,789,791,5,32,0,0,790,789,1,0,0,0,
        790,791,1,0,0,0,791,792,1,0,0,0,792,801,3,192,96,0,793,797,5,176,
        0,0,794,798,3,226,113,0,795,796,5,34,0,0,796,798,3,314,157,0,797,
        794,1,0,0,0,797,795,1,0,0,0,798,802,1,0,0,0,799,800,5,58,0,0,800,
        802,5,51,0,0,801,793,1,0,0,0,801,799,1,0,0,0,802,45,1,0,0,0,803,
        804,5,4,0,0,804,805,5,188,0,0,805,806,3,186,93,0,806,808,5,1,0,0,
        807,809,3,172,86,0,808,807,1,0,0,0,808,809,1,0,0,0,809,822,1,0,0,
        0,810,811,5,145,0,0,811,814,3,304,152,0,812,813,5,24,0,0,813,815,
        3,314,157,0,814,812,1,0,0,0,814,815,1,0,0,0,815,817,1,0,0,0,816,
        818,3,240,120,0,817,816,1,0,0,0,817,818,1,0,0,0,818,823,1,0,0,0,
        819,820,5,154,0,0,820,821,5,145,0,0,821,823,3,238,119,0,822,810,
        1,0,0,0,822,819,1,0,0,0,823,47,1,0,0,0,824,825,5,4,0,0,825,826,5,
        188,0,0,826,829,3,186,93,0,827,828,5,145,0,0,828,830,3,304,152,0,
        829,827,1,0,0,0,829,830,1,0,0,0,830,831,1,0,0,0,831,843,5,176,0,
        0,832,833,5,72,0,0,833,844,3,230,115,0,834,835,5,168,0,0,835,836,
        5,79,0,0,836,844,3,254,127,0,837,838,5,24,0,0,838,844,3,314,157,
        0,839,840,5,25,0,0,840,844,3,248,124,0,841,842,5,175,0,0,842,844,
        3,248,124,0,843,832,1,0,0,0,843,834,1,0,0,0,843,837,1,0,0,0,843,
        839,1,0,0,0,843,841,1,0,0,0,844,49,1,0,0,0,845,846,5,4,0,0,846,847,
        5,188,0,0,847,848,3,186,93,0,848,849,5,155,0,0,849,850,5,146,0,0,
        850,51,1,0,0,0,851,852,5,4,0,0,852,853,5,188,0,0,853,854,3,186,93,
        0,854,856,5,58,0,0,855,857,3,170,85,0,856,855,1,0,0,0,856,857,1,
        0,0,0,857,866,1,0,0,0,858,859,5,145,0,0,859,861,3,304,152,0,860,
        862,5,22,0,0,861,860,1,0,0,0,861,862,1,0,0,0,862,867,1,0,0,0,863,
        864,5,154,0,0,864,865,5,145,0,0,865,867,3,238,119,0,866,858,1,0,
        0,0,866,863,1,0,0,0,867,53,1,0,0,0,868,869,5,4,0,0,869,870,5,212,
        0,0,870,872,3,188,94,0,871,873,3,202,101,0,872,871,1,0,0,0,872,873,
        1,0,0,0,873,874,1,0,0,0,874,875,5,9,0,0,875,876,3,204,102,0,876,
        55,1,0,0,0,877,878,5,4,0,0,878,879,5,212,0,0,879,880,3,188,94,0,
        880,881,5,156,0,0,881,882,5,193,0,0,882,883,3,188,94,0,883,57,1,
        0,0,0,884,885,5,4,0,0,885,886,5,212,0,0,886,887,3,188,94,0,887,888,
        5,176,0,0,888,889,5,142,0,0,889,890,7,1,0,0,890,891,3,354,177,0,
        891,59,1,0,0,0,892,893,5,4,0,0,893,894,5,188,0,0,894,895,3,186,93,
        0,895,896,5,156,0,0,896,897,5,193,0,0,897,898,3,186,93,0,898,61,
        1,0,0,0,899,900,5,4,0,0,900,901,5,212,0,0,901,902,3,188,94,0,902,
        903,7,2,0,0,903,904,5,25,0,0,904,905,3,248,124,0,905,63,1,0,0,0,
        906,908,5,196,0,0,907,909,5,188,0,0,908,907,1,0,0,0,908,909,1,0,
        0,0,909,911,1,0,0,0,910,912,3,170,85,0,911,910,1,0,0,0,911,912,1,
        0,0,0,912,913,1,0,0,0,913,914,3,186,93,0,914,65,1,0,0,0,915,917,
        5,56,0,0,916,918,5,46,0,0,917,916,1,0,0,0,917,918,1,0,0,0,918,920,
        1,0,0,0,919,921,7,3,0,0,920,919,1,0,0,0,920,921,1,0,0,0,921,922,
        1,0,0,0,922,923,3,354,177,0,923,67,1,0,0,0,924,927,3,70,35,0,925,
        927,3,72,36,0,926,924,1,0,0,0,926,925,1,0,0,0,927,69,1,0,0,0,928,
        929,5,36,0,0,929,930,5,182,0,0,930,932,3,186,93,0,931,933,3,292,
        146,0,932,931,1,0,0,0,932,933,1,0,0,0,933,946,1,0,0,0,934,935,5,
        190,0,0,935,936,5,185,0,0,936,937,5,265,0,0,937,938,3,360,180,0,
        938,944,5,266,0,0,939,940,5,157,0,0,940,941,5,265,0,0,941,942,3,
        360,180,0,942,943,5,266,0,0,943,945,1,0,0,0,944,939,1,0,0,0,944,
        945,1,0,0,0,945,947,1,0,0,0,946,934,1,0,0,0,946,947,1,0,0,0,947,
        71,1,0,0,0,948,949,5,36,0,0,949,950,5,96,0,0,950,951,5,182,0,0,951,
        957,3,186,93,0,952,953,5,145,0,0,953,954,5,265,0,0,954,955,3,304,
        152,0,955,956,5,266,0,0,956,958,1,0,0,0,957,952,1,0,0,0,957,958,
        1,0,0,0,958,73,1,0,0,0,959,966,3,86,43,0,960,966,3,84,42,0,961,966,
        3,82,41,0,962,966,3,78,39,0,963,966,3,80,40,0,964,966,3,76,38,0,
        965,959,1,0,0,0,965,960,1,0,0,0,965,961,1,0,0,0,965,962,1,0,0,0,
        965,963,1,0,0,0,965,964,1,0,0,0,966,75,1,0,0,0,967,968,5,58,0,0,
        968,970,7,0,0,0,969,971,3,170,85,0,970,969,1,0,0,0,970,971,1,0,0,
        0,971,972,1,0,0,0,972,974,3,184,92,0,973,975,7,4,0,0,974,973,1,0,
        0,0,974,975,1,0,0,0,975,77,1,0,0,0,976,977,5,58,0,0,977,979,5,212,
        0,0,978,980,3,170,85,0,979,978,1,0,0,0,979,980,1,0,0,0,980,981,1,
        0,0,0,981,982,3,188,94,0,982,79,1,0,0,0,983,984,5,58,0,0,984,986,
        5,188,0,0,985,987,3,170,85,0,986,985,1,0,0,0,986,987,1,0,0,0,987,
        988,1,0,0,0,988,990,3,186,93,0,989,991,5,22,0,0,990,989,1,0,0,0,
        990,991,1,0,0,0,991,81,1,0,0,0,992,994,5,58,0,0,993,995,5,96,0,0,
        994,993,1,0,0,0,994,995,1,0,0,0,995,996,1,0,0,0,996,997,5,182,0,
        0,997,1000,3,186,93,0,998,999,5,145,0,0,999,1001,3,304,152,0,1000,
        998,1,0,0,0,1000,1001,1,0,0,0,1001,83,1,0,0,0,1002,1004,5,58,0,0,
        1003,1005,5,12,0,0,1004,1003,1,0,0,0,1004,1005,1,0,0,0,1005,1006,
        1,0,0,0,1006,1008,5,84,0,0,1007,1009,3,170,85,0,1008,1007,1,0,0,
        0,1008,1009,1,0,0,0,1009,1010,1,0,0,0,1010,1023,3,190,95,0,1011,
        1020,5,265,0,0,1012,1017,3,328,164,0,1013,1014,5,263,0,0,1014,1016,
        3,328,164,0,1015,1013,1,0,0,0,1016,1019,1,0,0,0,1017,1015,1,0,0,
        0,1017,1018,1,0,0,0,1018,1021,1,0,0,0,1019,1017,1,0,0,0,1020,1012,
        1,0,0,0,1020,1021,1,0,0,0,1021,1022,1,0,0,0,1022,1024,5,266,0,0,
        1023,1011,1,0,0,0,1023,1024,1,0,0,0,1024,85,1,0,0,0,1025,1026,5,
        58,0,0,1026,1027,5,166,0,0,1027,1028,3,358,179,0,1028,87,1,0,0,0,
        1029,1032,3,90,45,0,1030,1032,3,92,46,0,1031,1029,1,0,0,0,1031,1030,
        1,0,0,0,1032,89,1,0,0,0,1033,1034,5,86,0,0,1034,1035,5,166,0,0,1035,
        1036,3,358,179,0,1036,1037,5,193,0,0,1037,1038,5,87,0,0,1038,1039,
        3,358,179,0,1039,91,1,0,0,0,1040,1041,5,86,0,0,1041,1042,3,350,175,
        0,1042,1043,5,136,0,0,1043,1045,3,352,176,0,1044,1046,3,354,177,
        0,1045,1044,1,0,0,0,1045,1046,1,0,0,0,1046,1047,1,0,0,0,1047,1048,
        5,193,0,0,1048,1049,3,356,178,0,1049,93,1,0,0,0,1050,1053,3,96,48,
        0,1051,1053,3,98,49,0,1052,1050,1,0,0,0,1052,1051,1,0,0,0,1053,95,
        1,0,0,0,1054,1055,5,161,0,0,1055,1056,5,166,0,0,1056,1057,3,358,
        179,0,1057,1058,5,82,0,0,1058,1059,5,87,0,0,1059,1060,3,358,179,
        0,1060,97,1,0,0,0,1061,1065,5,161,0,0,1062,1063,5,86,0,0,1063,1064,
        5,137,0,0,1064,1066,5,78,0,0,1065,1062,1,0,0,0,1065,1066,1,0,0,0,
        1066,1067,1,0,0,0,1067,1068,3,350,175,0,1068,1069,5,136,0,0,1069,
        1071,3,352,176,0,1070,1072,3,354,177,0,1071,1070,1,0,0,0,1071,1072,
        1,0,0,0,1072,1073,1,0,0,0,1073,1079,5,82,0,0,1074,1080,3,356,178,
        0,1075,1077,5,166,0,0,1076,1075,1,0,0,0,1076,1077,1,0,0,0,1077,1078,
        1,0,0,0,1078,1080,3,358,179,0,1079,1074,1,0,0,0,1079,1076,1,0,0,
        0,1080,99,1,0,0,0,1081,1083,3,206,103,0,1082,1081,1,0,0,0,1082,1083,
        1,0,0,0,1083,1084,1,0,0,0,1084,1085,5,99,0,0,1085,1087,7,5,0,0,1086,
        1088,5,188,0,0,1087,1086,1,0,0,0,1087,1088,1,0,0,0,1088,1089,1,0,
        0,0,1089,1091,3,186,93,0,1090,1092,3,292,146,0,1091,1090,1,0,0,0,
        1091,1092,1,0,0,0,1092,1105,1,0,0,0,1093,1094,5,145,0,0,1094,1095,
        5,265,0,0,1095,1100,3,304,152,0,1096,1097,5,263,0,0,1097,1099,3,
        304,152,0,1098,1096,1,0,0,0,1099,1102,1,0,0,0,1100,1098,1,0,0,0,
        1100,1101,1,0,0,0,1101,1103,1,0,0,0,1102,1100,1,0,0,0,1103,1104,
        5,266,0,0,1104,1106,1,0,0,0,1105,1093,1,0,0,0,1105,1106,1,0,0,0,
        1106,1107,1,0,0,0,1107,1108,3,204,102,0,1108,101,1,0,0,0,1109,1112,
        3,104,52,0,1110,1112,3,106,53,0,1111,1109,1,0,0,0,1111,1110,1,0,
        0,0,1112,103,1,0,0,0,1113,1115,5,50,0,0,1114,1116,5,82,0,0,1115,
        1114,1,0,0,0,1115,1116,1,0,0,0,1116,1117,1,0,0,0,1117,1120,3,186,
        93,0,1118,1119,5,215,0,0,1119,1121,3,306,153,0,1120,1118,1,0,0,0,
        1120,1121,1,0,0,0,1121,105,1,0,0,0,1122,1123,5,50,0,0,1123,1128,
        3,186,93,0,1124,1126,5,9,0,0,1125,1124,1,0,0,0,1125,1126,1,0,0,0,
        1126,1127,1,0,0,0,1127,1129,3,358,179,0,1128,1125,1,0,0,0,1128,1129,
        1,0,0,0,1129,1130,1,0,0,0,1130,1139,5,82,0,0,1131,1136,3,280,140,
        0,1132,1133,5,263,0,0,1133,1135,3,280,140,0,1134,1132,1,0,0,0,1135,
        1138,1,0,0,0,1136,1134,1,0,0,0,1136,1137,1,0,0,0,1137,1140,1,0,0,
        0,1138,1136,1,0,0,0,1139,1131,1,0,0,0,1139,1140,1,0,0,0,1140,1143,
        1,0,0,0,1141,1142,5,215,0,0,1142,1144,3,306,153,0,1143,1141,1,0,
        0,0,1143,1144,1,0,0,0,1144,107,1,0,0,0,1145,1146,5,54,0,0,1146,1147,
        3,186,93,0,1147,1148,5,176,0,0,1148,1158,3,198,99,0,1149,1150,5,
        82,0,0,1150,1155,3,280,140,0,1151,1152,5,263,0,0,1152,1154,3,280,
        140,0,1153,1151,1,0,0,0,1154,1157,1,0,0,0,1155,1153,1,0,0,0,1155,
        1156,1,0,0,0,1156,1159,1,0,0,0,1157,1155,1,0,0,0,1158,1149,1,0,0,
        0,1158,1159,1,0,0,0,1159,1162,1,0,0,0,1160,1161,5,215,0,0,1161,1163,
        3,306,153,0,1162,1160,1,0,0,0,1162,1163,1,0,0,0,1163,109,1,0,0,0,
        1164,1165,5,207,0,0,1165,1167,5,103,0,0,1166,1168,5,188,0,0,1167,
        1166,1,0,0,0,1167,1168,1,0,0,0,1168,1169,1,0,0,0,1169,1171,3,186,
        93,0,1170,1172,3,292,146,0,1171,1170,1,0,0,0,1171,1172,1,0,0,0,1172,
        1173,1,0,0,0,1173,1174,3,204,102,0,1174,111,1,0,0,0,1175,1188,3,
        132,66,0,1176,1188,3,134,67,0,1177,1188,3,136,68,0,1178,1188,3,130,
        65,0,1179,1188,3,128,64,0,1180,1188,3,126,63,0,1181,1188,3,124,62,
        0,1182,1188,3,122,61,0,1183,1188,3,120,60,0,1184,1188,3,118,59,0,
        1185,1188,3,116,58,0,1186,1188,3,114,57,0,1187,1175,1,0,0,0,1187,
        1176,1,0,0,0,1187,1177,1,0,0,0,1187,1178,1,0,0,0,1187,1179,1,0,0,
        0,1187,1180,1,0,0,0,1187,1181,1,0,0,0,1187,1182,1,0,0,0,1187,1183,
        1,0,0,0,1187,1184,1,0,0,0,1187,1185,1,0,0,0,1187,1186,1,0,0,0,1188,
        113,1,0,0,0,1189,1190,5,179,0,0,1190,1202,7,6,0,0,1191,1193,5,115,
        0,0,1192,1191,1,0,0,0,1192,1193,1,0,0,0,1193,1194,1,0,0,0,1194,1199,
        3,314,157,0,1195,1196,5,271,0,0,1196,1198,3,314,157,0,1197,1195,
        1,0,0,0,1198,1201,1,0,0,0,1199,1197,1,0,0,0,1199,1200,1,0,0,0,1200,
        1203,1,0,0,0,1201,1199,1,0,0,0,1202,1192,1,0,0,0,1202,1203,1,0,0,
        0,1203,115,1,0,0,0,1204,1205,5,179,0,0,1205,1208,5,189,0,0,1206,
        1207,5,94,0,0,1207,1209,3,186,93,0,1208,1206,1,0,0,0,1208,1209,1,
        0,0,0,1209,1221,1,0,0,0,1210,1212,5,115,0,0,1211,1210,1,0,0,0,1211,
        1212,1,0,0,0,1212,1213,1,0,0,0,1213,1218,3,314,157,0,1214,1215,5,
        271,0,0,1215,1217,3,314,157,0,1216,1214,1,0,0,0,1217,1220,1,0,0,
        0,1218,1216,1,0,0,0,1218,1219,1,0,0,0,1219,1222,1,0,0,0,1220,1218,
        1,0,0,0,1221,1211,1,0,0,0,1221,1222,1,0,0,0,1222,117,1,0,0,0,1223,
        1225,5,179,0,0,1224,1226,7,7,0,0,1225,1224,1,0,0,0,1225,1226,1,0,
        0,0,1226,1227,1,0,0,0,1227,1230,5,85,0,0,1228,1229,5,94,0,0,1229,
        1231,3,184,92,0,1230,1228,1,0,0,0,1230,1231,1,0,0,0,1231,1243,1,
        0,0,0,1232,1234,5,115,0,0,1233,1232,1,0,0,0,1233,1234,1,0,0,0,1234,
        1235,1,0,0,0,1235,1240,3,314,157,0,1236,1237,5,271,0,0,1237,1239,
        3,314,157,0,1238,1236,1,0,0,0,1239,1242,1,0,0,0,1240,1238,1,0,0,
        0,1240,1241,1,0,0,0,1241,1244,1,0,0,0,1242,1240,1,0,0,0,1243,1233,
        1,0,0,0,1243,1244,1,0,0,0,1244,119,1,0,0,0,1245,1246,5,179,0,0,1246,
        1247,5,37,0,0,1247,1248,5,188,0,0,1248,1249,3,186,93,0,1249,121,
        1,0,0,0,1250,1251,5,179,0,0,1251,1252,5,37,0,0,1252,1253,5,212,0,
        0,1253,1254,3,188,94,0,1254,123,1,0,0,0,1255,1256,5,179,0,0,1256,
        1257,5,188,0,0,1257,1258,5,182,0,0,1258,1259,3,186,93,0,1259,125,
        1,0,0,0,1260,1261,5,179,0,0,1261,1262,5,32,0,0,1262,1263,5,182,0,
        0,1263,1264,3,186,93,0,1264,127,1,0,0,0,1265,1267,5,179,0,0,1266,
        1268,5,154,0,0,1267,1266,1,0,0,0,1267,1268,1,0,0,0,1268,1269,1,0,
        0,0,1269,1270,5,146,0,0,1270,1271,3,186,93,0,1271,129,1,0,0,0,1272,
        1273,5,179,0,0,1273,1274,5,73,0,0,1274,1275,5,94,0,0,1275,1285,3,
        186,93,0,1276,1277,5,145,0,0,1277,1278,5,265,0,0,1278,1281,3,304,
        152,0,1279,1280,5,263,0,0,1280,1282,3,304,152,0,1281,1279,1,0,0,
        0,1281,1282,1,0,0,0,1282,1283,1,0,0,0,1283,1284,5,266,0,0,1284,1286,
        1,0,0,0,1285,1276,1,0,0,0,1285,1286,1,0,0,0,1286,131,1,0,0,0,1287,
        1289,5,179,0,0,1288,1290,5,39,0,0,1289,1288,1,0,0,0,1289,1290,1,
        0,0,0,1290,1291,1,0,0,0,1291,1292,5,167,0,0,1292,133,1,0,0,0,1293,
        1294,5,179,0,0,1294,1295,5,166,0,0,1295,1296,5,86,0,0,1296,1297,
        5,87,0,0,1297,1298,3,358,179,0,1298,135,1,0,0,0,1299,1314,3,138,
        69,0,1300,1314,3,140,70,0,1301,1314,3,142,71,0,1302,1303,5,179,0,
        0,1303,1304,5,86,0,0,1304,1305,7,8,0,0,1305,1311,3,358,179,0,1306,
        1307,5,136,0,0,1307,1309,7,9,0,0,1308,1310,3,354,177,0,1309,1308,
        1,0,0,0,1309,1310,1,0,0,0,1310,1312,1,0,0,0,1311,1306,1,0,0,0,1311,
        1312,1,0,0,0,1312,1314,1,0,0,0,1313,1299,1,0,0,0,1313,1300,1,0,0,
        0,1313,1301,1,0,0,0,1313,1302,1,0,0,0,1314,137,1,0,0,0,1315,1316,
        5,179,0,0,1316,1317,5,86,0,0,1317,1318,7,8,0,0,1318,1324,3,358,179,
        0,1319,1320,5,136,0,0,1320,1322,5,46,0,0,1321,1323,3,184,92,0,1322,
        1321,1,0,0,0,1322,1323,1,0,0,0,1323,1325,1,0,0,0,1324,1319,1,0,0,
        0,1324,1325,1,0,0,0,1325,139,1,0,0,0,1326,1327,5,179,0,0,1327,1328,
        5,86,0,0,1328,1329,7,8,0,0,1329,1335,3,358,179,0,1330,1331,5,136,
        0,0,1331,1333,5,188,0,0,1332,1334,3,186,93,0,1333,1332,1,0,0,0,1333,
        1334,1,0,0,0,1334,1336,1,0,0,0,1335,1330,1,0,0,0,1335,1336,1,0,0,
        0,1336,141,1,0,0,0,1337,1338,5,179,0,0,1338,1339,5,86,0,0,1339,1340,
        7,8,0,0,1340,1346,3,358,179,0,1341,1342,5,136,0,0,1342,1344,5,32,
        0,0,1343,1345,3,192,96,0,1344,1343,1,0,0,0,1344,1345,1,0,0,0,1345,
        1347,1,0,0,0,1346,1341,1,0,0,0,1346,1347,1,0,0,0,1347,143,1,0,0,
        0,1348,1352,3,146,73,0,1349,1352,3,148,74,0,1350,1352,3,150,75,0,
        1351,1348,1,0,0,0,1351,1349,1,0,0,0,1351,1350,1,0,0,0,1352,145,1,
        0,0,0,1353,1354,5,34,0,0,1354,1355,5,136,0,0,1355,1356,5,46,0,0,
        1356,1357,3,184,92,0,1357,1360,5,108,0,0,1358,1361,3,314,157,0,1359,
        1361,5,133,0,0,1360,1358,1,0,0,0,1360,1359,1,0,0,0,1361,147,1,0,
        0,0,1362,1363,5,34,0,0,1363,1364,5,136,0,0,1364,1365,5,188,0,0,1365,
        1366,3,186,93,0,1366,1369,5,108,0,0,1367,1370,3,314,157,0,1368,1370,
        5,133,0,0,1369,1367,1,0,0,0,1369,1368,1,0,0,0,1370,149,1,0,0,0,1371,
        1372,5,34,0,0,1372,1373,5,136,0,0,1373,1374,5,32,0,0,1374,1375,3,
        192,96,0,1375,1378,5,108,0,0,1376,1379,3,314,157,0,1377,1379,5,133,
        0,0,1378,1376,1,0,0,0,1378,1377,1,0,0,0,1379,151,1,0,0,0,1380,1381,
        5,67,0,0,1381,1382,3,4,2,0,1382,153,1,0,0,0,1383,1389,5,176,0,0,
        1384,1390,5,2,0,0,1385,1386,3,358,179,0,1386,1387,5,249,0,0,1387,
        1388,3,304,152,0,1388,1390,1,0,0,0,1389,1384,1,0,0,0,1389,1385,1,
        0,0,0,1389,1390,1,0,0,0,1390,155,1,0,0,0,1391,1392,5,264,0,0,1392,
        1393,5,180,0,0,1393,1403,5,265,0,0,1394,1396,3,314,157,0,1395,1394,
        1,0,0,0,1395,1396,1,0,0,0,1396,1404,1,0,0,0,1397,1400,3,314,157,
        0,1398,1399,5,263,0,0,1399,1401,3,304,152,0,1400,1398,1,0,0,0,1400,
        1401,1,0,0,0,1401,1404,1,0,0,0,1402,1404,3,304,152,0,1403,1395,1,
        0,0,0,1403,1397,1,0,0,0,1403,1402,1,0,0,0,1404,1405,1,0,0,0,1405,
        1406,5,266,0,0,1406,157,1,0,0,0,1407,1408,5,107,0,0,1408,1409,5,
        121,0,0,1409,1410,3,186,93,0,1410,159,1,0,0,0,1411,1412,5,118,0,
        0,1412,1413,5,45,0,0,1413,1414,5,98,0,0,1414,1416,5,274,0,0,1415,
        1417,5,144,0,0,1416,1415,1,0,0,0,1416,1417,1,0,0,0,1417,1418,1,0,
        0,0,1418,1419,5,103,0,0,1419,1420,5,188,0,0,1420,1430,3,186,93,0,
        1421,1422,5,145,0,0,1422,1423,5,265,0,0,1423,1426,3,304,152,0,1424,
        1425,5,263,0,0,1425,1427,3,304,152,0,1426,1424,1,0,0,0,1426,1427,
        1,0,0,0,1427,1428,1,0,0,0,1428,1429,5,266,0,0,1429,1431,1,0,0,0,
        1430,1421,1,0,0,0,1430,1431,1,0,0,0,1431,161,1,0,0,0,1432,1436,3,
        164,82,0,1433,1436,3,166,83,0,1434,1436,3,168,84,0,1435,1432,1,0,
        0,0,1435,1433,1,0,0,0,1435,1434,1,0,0,0,1436,163,1,0,0,0,1437,1438,
        5,162,0,0,1438,1451,3,186,93,0,1439,1440,5,145,0,0,1440,1441,5,265,
        0,0,1441,1446,3,304,152,0,1442,1443,5,263,0,0,1443,1445,3,304,152,
        0,1444,1442,1,0,0,0,1445,1448,1,0,0,0,1446,1447,1,0,0,0,1446,1444,
        1,0,0,0,1447,1449,1,0,0,0,1448,1446,1,0,0,0,1449,1450,5,266,0,0,
        1450,1452,1,0,0,0,1451,1439,1,0,0,0,1451,1452,1,0,0,0,1452,165,1,
        0,0,0,1453,1454,5,162,0,0,1454,1455,5,13,0,0,1455,167,1,0,0,0,1456,
        1457,5,162,0,0,1457,1458,5,85,0,0,1458,1459,3,190,95,0,1459,169,
        1,0,0,0,1460,1461,5,93,0,0,1461,1462,5,66,0,0,1462,171,1,0,0,0,1463,
        1464,5,93,0,0,1464,1465,5,132,0,0,1465,1466,5,66,0,0,1466,173,1,
        0,0,0,1467,1468,3,354,177,0,1468,175,1,0,0,0,1469,1470,3,354,177,
        0,1470,177,1,0,0,0,1471,1472,3,354,177,0,1472,179,1,0,0,0,1473,1474,
        3,354,177,0,1474,181,1,0,0,0,1475,1476,3,354,177,0,1476,183,1,0,
        0,0,1477,1478,3,354,177,0,1478,185,1,0,0,0,1479,1484,3,358,179,0,
        1480,1481,5,261,0,0,1481,1483,3,358,179,0,1482,1480,1,0,0,0,1483,
        1486,1,0,0,0,1484,1482,1,0,0,0,1484,1485,1,0,0,0,1485,187,1,0,0,
        0,1486,1484,1,0,0,0,1487,1492,3,358,179,0,1488,1489,5,261,0,0,1489,
        1491,3,358,179,0,1490,1488,1,0,0,0,1491,1494,1,0,0,0,1492,1490,1,
        0,0,0,1492,1493,1,0,0,0,1493,189,1,0,0,0,1494,1492,1,0,0,0,1495,
        1498,3,362,181,0,1496,1498,3,354,177,0,1497,1495,1,0,0,0,1497,1496,
        1,0,0,0,1498,191,1,0,0,0,1499,1502,3,354,177,0,1500,1502,4,96,0,
        0,1501,1499,1,0,0,0,1501,1500,1,0,0,0,1502,193,1,0,0,0,1503,1506,
        3,186,93,0,1504,1506,3,188,94,0,1505,1503,1,0,0,0,1505,1504,1,0,
        0,0,1506,195,1,0,0,0,1507,1508,5,21,0,0,1508,1509,5,26,0,0,1509,
        1511,3,292,146,0,1510,1507,1,0,0,0,1510,1511,1,0,0,0,1511,1514,1,
        0,0,0,1512,1513,5,34,0,0,1513,1515,3,314,157,0,1514,1512,1,0,0,0,
        1514,1515,1,0,0,0,1515,1519,1,0,0,0,1516,1517,5,168,0,0,1517,1518,
        5,79,0,0,1518,1520,3,254,127,0,1519,1516,1,0,0,0,1519,1520,1,0,0,
        0,1520,1524,1,0,0,0,1521,1522,5,216,0,0,1522,1523,5,175,0,0,1523,
        1525,3,248,124,0,1524,1521,1,0,0,0,1524,1525,1,0,0,0,1525,1529,1,
        0,0,0,1526,1527,5,23,0,0,1527,1528,5,9,0,0,1528,1530,3,230,115,0,
        1529,1526,1,0,0,0,1529,1530,1,0,0,0,1530,1533,1,0,0,0,1531,1532,
        5,24,0,0,1532,1534,3,314,157,0,1533,1531,1,0,0,0,1533,1534,1,0,0,
        0,1534,1545,1,0,0,0,1535,1536,5,30,0,0,1536,1537,5,94,0,0,1537,1542,
        3,354,177,0,1538,1539,5,216,0,0,1539,1540,5,151,0,0,1540,1541,5,
        249,0,0,1541,1543,5,277,0,0,1542,1538,1,0,0,0,1542,1543,1,0,0,0,
        1543,1546,1,0,0,0,1544,1546,5,197,0,0,1545,1535,1,0,0,0,1545,1544,
        1,0,0,0,1545,1546,1,0,0,0,1546,1549,1,0,0,0,1547,1548,5,25,0,0,1548,
        1550,3,248,124,0,1549,1547,1,0,0,0,1549,1550,1,0,0,0,1550,197,1,
        0,0,0,1551,1556,3,200,100,0,1552,1553,5,263,0,0,1553,1555,3,200,
        100,0,1554,1552,1,0,0,0,1555,1558,1,0,0,0,1556,1554,1,0,0,0,1556,
        1557,1,0,0,0,1557,199,1,0,0,0,1558,1556,1,0,0,0,1559,1560,3,354,
        177,0,1560,1561,5,249,0,0,1561,1562,3,304,152,0,1562,201,1,0,0,0,
        1563,1564,5,265,0,0,1564,1567,3,182,91,0,1565,1566,5,34,0,0,1566,
        1568,3,314,157,0,1567,1565,1,0,0,0,1567,1568,1,0,0,0,1568,1577,1,
        0,0,0,1569,1570,5,263,0,0,1570,1573,3,182,91,0,1571,1572,5,34,0,
        0,1572,1574,3,314,157,0,1573,1571,1,0,0,0,1573,1574,1,0,0,0,1574,
        1576,1,0,0,0,1575,1569,1,0,0,0,1576,1579,1,0,0,0,1577,1575,1,0,0,
        0,1577,1578,1,0,0,0,1578,1580,1,0,0,0,1579,1577,1,0,0,0,1580,1581,
        5,266,0,0,1581,203,1,0,0,0,1582,1584,3,206,103,0,1583,1582,1,0,0,
        0,1583,1584,1,0,0,0,1584,1585,1,0,0,0,1585,1586,3,258,129,0,1586,
        205,1,0,0,0,1587,1588,5,216,0,0,1588,1593,3,274,137,0,1589,1590,
        5,263,0,0,1590,1592,3,274,137,0,1591,1589,1,0,0,0,1592,1595,1,0,
        0,0,1593,1591,1,0,0,0,1593,1594,1,0,0,0,1594,207,1,0,0,0,1595,1593,
        1,0,0,0,1596,1597,5,150,0,0,1597,1598,5,110,0,0,1598,1600,3,292,
        146,0,1599,1601,5,53,0,0,1600,1599,1,0,0,0,1600,1601,1,0,0,0,1601,
        1605,1,0,0,0,1602,1606,5,225,0,0,1603,1604,5,263,0,0,1604,1606,5,
        225,0,0,1605,1602,1,0,0,0,1605,1603,1,0,0,0,1605,1606,1,0,0,0,1606,
        1610,1,0,0,0,1607,1611,5,226,0,0,1608,1609,5,263,0,0,1609,1611,5,
        226,0,0,1610,1607,1,0,0,0,1610,1608,1,0,0,0,1610,1611,1,0,0,0,1611,
        1624,1,0,0,0,1612,1613,5,263,0,0,1613,1616,3,210,105,0,1614,1616,
        3,210,105,0,1615,1612,1,0,0,0,1615,1614,1,0,0,0,1616,1621,1,0,0,
        0,1617,1618,5,263,0,0,1618,1620,3,210,105,0,1619,1617,1,0,0,0,1620,
        1623,1,0,0,0,1621,1622,1,0,0,0,1621,1619,1,0,0,0,1622,1625,1,0,0,
        0,1623,1621,1,0,0,0,1624,1615,1,0,0,0,1624,1625,1,0,0,0,1625,209,
        1,0,0,0,1626,1627,5,81,0,0,1627,1628,5,110,0,0,1628,1629,3,292,146,
        0,1629,1630,5,224,0,0,1630,1631,3,186,93,0,1631,1633,3,292,146,0,
        1632,1634,5,53,0,0,1633,1632,1,0,0,0,1633,1634,1,0,0,0,1634,1636,
        1,0,0,0,1635,1637,5,225,0,0,1636,1635,1,0,0,0,1636,1637,1,0,0,0,
        1637,1639,1,0,0,0,1638,1640,5,226,0,0,1639,1638,1,0,0,0,1639,1640,
        1,0,0,0,1640,211,1,0,0,0,1641,1642,3,192,96,0,1642,1645,3,328,164,
        0,1643,1644,5,34,0,0,1644,1646,3,314,157,0,1645,1643,1,0,0,0,1645,
        1646,1,0,0,0,1646,213,1,0,0,0,1647,1648,3,182,91,0,1648,1651,3,328,
        164,0,1649,1650,5,34,0,0,1650,1652,3,314,157,0,1651,1649,1,0,0,0,
        1651,1652,1,0,0,0,1652,215,1,0,0,0,1653,1654,3,218,109,0,1654,217,
        1,0,0,0,1655,1656,3,182,91,0,1656,1664,3,328,164,0,1657,1661,3,224,
        112,0,1658,1660,3,224,112,0,1659,1658,1,0,0,0,1660,1663,1,0,0,0,
        1661,1662,1,0,0,0,1661,1659,1,0,0,0,1662,1665,1,0,0,0,1663,1661,
        1,0,0,0,1664,1657,1,0,0,0,1664,1665,1,0,0,0,1665,1668,1,0,0,0,1666,
        1667,5,34,0,0,1667,1669,3,314,157,0,1668,1666,1,0,0,0,1668,1669,
        1,0,0,0,1669,1672,1,0,0,0,1670,1671,5,150,0,0,1671,1673,5,110,0,
        0,1672,1670,1,0,0,0,1672,1673,1,0,0,0,1673,219,1,0,0,0,1674,1676,
        3,212,106,0,1675,1674,1,0,0,0,1675,1676,1,0,0,0,1676,1684,1,0,0,
        0,1677,1681,3,224,112,0,1678,1680,3,224,112,0,1679,1678,1,0,0,0,
        1680,1683,1,0,0,0,1681,1682,1,0,0,0,1681,1679,1,0,0,0,1682,1685,
        1,0,0,0,1683,1681,1,0,0,0,1684,1677,1,0,0,0,1684,1685,1,0,0,0,1685,
        221,1,0,0,0,1686,1687,3,182,91,0,1687,1690,3,328,164,0,1688,1689,
        5,34,0,0,1689,1691,3,314,157,0,1690,1688,1,0,0,0,1690,1691,1,0,0,
        0,1691,1699,1,0,0,0,1692,1696,3,224,112,0,1693,1695,3,224,112,0,
        1694,1693,1,0,0,0,1695,1698,1,0,0,0,1696,1697,1,0,0,0,1696,1694,
        1,0,0,0,1697,1700,1,0,0,0,1698,1696,1,0,0,0,1699,1692,1,0,0,0,1699,
        1700,1,0,0,0,1700,223,1,0,0,0,1701,1703,5,132,0,0,1702,1701,1,0,
        0,0,1702,1703,1,0,0,0,1703,1704,1,0,0,0,1704,1707,5,133,0,0,1705,
        1707,3,226,113,0,1706,1702,1,0,0,0,1706,1705,1,0,0,0,1707,225,1,
        0,0,0,1708,1709,5,60,0,0,1709,1717,3,304,152,0,1710,1711,5,35,0,
        0,1711,1717,3,304,152,0,1712,1713,5,51,0,0,1713,1717,3,304,152,0,
        1714,1715,5,16,0,0,1715,1717,3,360,180,0,1716,1708,1,0,0,0,1716,
        1710,1,0,0,0,1716,1712,1,0,0,0,1716,1714,1,0,0,0,1717,227,1,0,0,
        0,1718,1719,7,10,0,0,1719,229,1,0,0,0,1720,1721,7,11,0,0,1721,231,
        1,0,0,0,1722,1727,3,234,117,0,1723,1724,5,263,0,0,1724,1726,3,234,
        117,0,1725,1723,1,0,0,0,1726,1729,1,0,0,0,1727,1728,1,0,0,0,1727,
        1725,1,0,0,0,1728,1732,1,0,0,0,1729,1727,1,0,0,0,1730,1731,5,263,
        0,0,1731,1733,3,236,118,0,1732,1730,1,0,0,0,1732,1733,1,0,0,0,1733,
        1736,1,0,0,0,1734,1736,3,236,118,0,1735,1722,1,0,0,0,1735,1734,1,
        0,0,0,1736,233,1,0,0,0,1737,1739,5,89,0,0,1738,1740,3,292,146,0,
        1739,1738,1,0,0,0,1739,1740,1,0,0,0,1740,1741,1,0,0,0,1741,1742,
        5,146,0,0,1742,1743,3,360,180,0,1743,235,1,0,0,0,1744,1746,5,154,
        0,0,1745,1747,3,292,146,0,1746,1745,1,0,0,0,1746,1747,1,0,0,0,1747,
        1748,1,0,0,0,1748,1749,5,265,0,0,1749,1750,5,145,0,0,1750,1756,3,
        238,119,0,1751,1752,5,263,0,0,1752,1753,5,145,0,0,1753,1755,3,238,
        119,0,1754,1751,1,0,0,0,1755,1758,1,0,0,0,1756,1757,1,0,0,0,1756,
        1754,1,0,0,0,1757,1759,1,0,0,0,1758,1756,1,0,0,0,1759,1760,5,266,
        0,0,1760,237,1,0,0,0,1761,1762,5,210,0,0,1762,1763,3,244,122,0,1763,
        1764,3,304,152,0,1764,1777,1,0,0,0,1765,1766,3,304,152,0,1766,1767,
        3,242,121,0,1767,1769,1,0,0,0,1768,1765,1,0,0,0,1768,1769,1,0,0,
        0,1769,1770,1,0,0,0,1770,1774,5,211,0,0,1771,1772,3,242,121,0,1772,
        1773,3,304,152,0,1773,1775,1,0,0,0,1774,1771,1,0,0,0,1774,1775,1,
        0,0,0,1775,1777,1,0,0,0,1776,1761,1,0,0,0,1776,1768,1,0,0,0,1777,
        239,1,0,0,0,1778,1779,5,30,0,0,1779,1780,5,94,0,0,1780,1785,3,358,
        179,0,1781,1782,5,216,0,0,1782,1783,5,151,0,0,1783,1784,5,249,0,
        0,1784,1786,3,360,180,0,1785,1781,1,0,0,0,1785,1786,1,0,0,0,1786,
        1789,1,0,0,0,1787,1789,5,197,0,0,1788,1778,1,0,0,0,1788,1787,1,0,
        0,0,1789,241,1,0,0,0,1790,1796,1,0,0,0,1791,1796,5,251,0,0,1792,
        1796,5,252,0,0,1793,1796,5,253,0,0,1794,1796,5,254,0,0,1795,1790,
        1,0,0,0,1795,1791,1,0,0,0,1795,1792,1,0,0,0,1795,1793,1,0,0,0,1795,
        1794,1,0,0,0,1796,243,1,0,0,0,1797,1806,5,249,0,0,1798,1806,5,250,
        0,0,1799,1806,5,115,0,0,1800,1806,5,164,0,0,1801,1806,5,163,0,0,
        1802,1806,5,15,0,0,1803,1806,5,94,0,0,1804,1806,3,242,121,0,1805,
        1797,1,0,0,0,1805,1798,1,0,0,0,1805,1799,1,0,0,0,1805,1800,1,0,0,
        0,1805,1801,1,0,0,0,1805,1802,1,0,0,0,1805,1803,1,0,0,0,1805,1804,
        1,0,0,0,1806,245,1,0,0,0,1807,1808,5,115,0,0,1808,1811,3,354,177,
        0,1809,1810,7,12,0,0,1810,1812,5,153,0,0,1811,1809,1,0,0,0,1811,
        1812,1,0,0,0,1812,247,1,0,0,0,1813,1814,5,265,0,0,1814,1819,3,256,
        128,0,1815,1816,5,263,0,0,1816,1818,3,256,128,0,1817,1815,1,0,0,
        0,1818,1821,1,0,0,0,1819,1817,1,0,0,0,1819,1820,1,0,0,0,1820,1822,
        1,0,0,0,1821,1819,1,0,0,0,1822,1823,5,266,0,0,1823,249,1,0,0,0,1824,
        1825,5,265,0,0,1825,1830,3,212,106,0,1826,1827,5,263,0,0,1827,1829,
        3,212,106,0,1828,1826,1,0,0,0,1829,1832,1,0,0,0,1830,1831,1,0,0,
        0,1830,1828,1,0,0,0,1831,1833,1,0,0,0,1832,1830,1,0,0,0,1833,1834,
        5,266,0,0,1834,251,1,0,0,0,1835,1840,3,304,152,0,1836,1837,5,263,
        0,0,1837,1839,3,304,152,0,1838,1836,1,0,0,0,1839,1842,1,0,0,0,1840,
        1838,1,0,0,0,1840,1841,1,0,0,0,1841,253,1,0,0,0,1842,1840,1,0,0,
        0,1843,1853,5,52,0,0,1844,1845,5,71,0,0,1845,1846,5,191,0,0,1846,
        1847,5,26,0,0,1847,1851,3,314,157,0,1848,1849,5,63,0,0,1849,1850,
        5,26,0,0,1850,1852,3,314,157,0,1851,1848,1,0,0,0,1851,1852,1,0,0,
        0,1852,1854,1,0,0,0,1853,1844,1,0,0,0,1853,1854,1,0,0,0,1854,1859,
        1,0,0,0,1855,1856,5,117,0,0,1856,1857,5,191,0,0,1857,1858,5,26,0,
        0,1858,1860,3,314,157,0,1859,1855,1,0,0,0,1859,1860,1,0,0,0,1860,
        255,1,0,0,0,1861,1864,3,358,179,0,1862,1863,5,249,0,0,1863,1865,
        3,304,152,0,1864,1862,1,0,0,0,1864,1865,1,0,0,0,1865,257,1,0,0,0,
        1866,1877,3,260,130,0,1867,1868,5,139,0,0,1868,1869,5,26,0,0,1869,
        1874,3,264,132,0,1870,1871,5,263,0,0,1871,1873,3,264,132,0,1872,
        1870,1,0,0,0,1873,1876,1,0,0,0,1874,1872,1,0,0,0,1874,1875,1,0,0,
        0,1875,1878,1,0,0,0,1876,1874,1,0,0,0,1877,1867,1,0,0,0,1877,1878,
        1,0,0,0,1878,1885,1,0,0,0,1879,1880,5,116,0,0,1880,1883,3,304,152,
        0,1881,1882,5,135,0,0,1882,1884,5,277,0,0,1883,1881,1,0,0,0,1883,
        1884,1,0,0,0,1884,1886,1,0,0,0,1885,1879,1,0,0,0,1885,1886,1,0,0,
        0,1886,259,1,0,0,0,1887,1888,6,130,-1,0,1888,1889,3,262,131,0,1889,
        1904,1,0,0,0,1890,1891,10,2,0,0,1891,1893,5,100,0,0,1892,1894,3,
        276,138,0,1893,1892,1,0,0,0,1893,1894,1,0,0,0,1894,1895,1,0,0,0,
        1895,1903,3,260,130,3,1896,1897,10,1,0,0,1897,1899,7,13,0,0,1898,
        1900,3,276,138,0,1899,1898,1,0,0,0,1899,1900,1,0,0,0,1900,1901,1,
        0,0,0,1901,1903,3,260,130,2,1902,1890,1,0,0,0,1902,1896,1,0,0,0,
        1903,1906,1,0,0,0,1904,1902,1,0,0,0,1904,1905,1,0,0,0,1905,261,1,
        0,0,0,1906,1904,1,0,0,0,1907,1924,3,266,133,0,1908,1909,5,188,0,
        0,1909,1924,3,186,93,0,1910,1911,5,211,0,0,1911,1916,3,304,152,0,
        1912,1913,5,263,0,0,1913,1915,3,304,152,0,1914,1912,1,0,0,0,1915,
        1918,1,0,0,0,1916,1914,1,0,0,0,1916,1917,1,0,0,0,1917,1924,1,0,0,
        0,1918,1916,1,0,0,0,1919,1920,5,265,0,0,1920,1921,3,258,129,0,1921,
        1922,5,266,0,0,1922,1924,1,0,0,0,1923,1907,1,0,0,0,1923,1908,1,0,
        0,0,1923,1910,1,0,0,0,1923,1919,1,0,0,0,1924,263,1,0,0,0,1925,1927,
        3,302,151,0,1926,1928,7,14,0,0,1927,1926,1,0,0,0,1927,1928,1,0,0,
        0,1928,1931,1,0,0,0,1929,1930,5,134,0,0,1930,1932,7,15,0,0,1931,
        1929,1,0,0,0,1931,1932,1,0,0,0,1932,265,1,0,0,0,1933,1935,5,174,
        0,0,1934,1936,3,276,138,0,1935,1934,1,0,0,0,1935,1936,1,0,0,0,1936,
        1938,1,0,0,0,1937,1939,5,183,0,0,1938,1937,1,0,0,0,1938,1939,1,0,
        0,0,1939,1940,1,0,0,0,1940,1945,3,278,139,0,1941,1942,5,263,0,0,
        1942,1944,3,278,139,0,1943,1941,1,0,0,0,1944,1947,1,0,0,0,1945,1943,
        1,0,0,0,1945,1946,1,0,0,0,1946,1957,1,0,0,0,1947,1945,1,0,0,0,1948,
        1949,5,82,0,0,1949,1954,3,280,140,0,1950,1951,5,263,0,0,1951,1953,
        3,280,140,0,1952,1950,1,0,0,0,1953,1956,1,0,0,0,1954,1952,1,0,0,
        0,1954,1955,1,0,0,0,1955,1958,1,0,0,0,1956,1954,1,0,0,0,1957,1948,
        1,0,0,0,1957,1958,1,0,0,0,1958,1961,1,0,0,0,1959,1960,5,215,0,0,
        1960,1962,3,306,153,0,1961,1959,1,0,0,0,1961,1962,1,0,0,0,1962,1966,
        1,0,0,0,1963,1964,5,87,0,0,1964,1965,5,26,0,0,1965,1967,3,268,134,
        0,1966,1963,1,0,0,0,1966,1967,1,0,0,0,1967,1970,1,0,0,0,1968,1969,
        5,90,0,0,1969,1971,3,306,153,0,1970,1968,1,0,0,0,1970,1971,1,0,0,
        0,1971,267,1,0,0,0,1972,1974,3,276,138,0,1973,1972,1,0,0,0,1973,
        1974,1,0,0,0,1974,1975,1,0,0,0,1975,1980,3,270,135,0,1976,1977,5,
        263,0,0,1977,1979,3,270,135,0,1978,1976,1,0,0,0,1979,1982,1,0,0,
        0,1980,1978,1,0,0,0,1980,1981,1,0,0,0,1981,269,1,0,0,0,1982,1980,
        1,0,0,0,1983,1984,3,272,136,0,1984,271,1,0,0,0,1985,1994,5,265,0,
        0,1986,1991,3,302,151,0,1987,1988,5,263,0,0,1988,1990,3,302,151,
        0,1989,1987,1,0,0,0,1990,1993,1,0,0,0,1991,1989,1,0,0,0,1991,1992,
        1,0,0,0,1992,1995,1,0,0,0,1993,1991,1,0,0,0,1994,1986,1,0,0,0,1994,
        1995,1,0,0,0,1995,1996,1,0,0,0,1996,1999,5,266,0,0,1997,1999,3,302,
        151,0,1998,1985,1,0,0,0,1998,1997,1,0,0,0,1999,273,1,0,0,0,2000,
        2002,3,358,179,0,2001,2003,3,292,146,0,2002,2001,1,0,0,0,2002,2003,
        1,0,0,0,2003,2004,1,0,0,0,2004,2005,5,9,0,0,2005,2006,3,296,148,
        0,2006,275,1,0,0,0,2007,2008,7,16,0,0,2008,277,1,0,0,0,2009,2014,
        3,302,151,0,2010,2012,5,9,0,0,2011,2010,1,0,0,0,2011,2012,1,0,0,
        0,2012,2013,1,0,0,0,2013,2015,3,358,179,0,2014,2011,1,0,0,0,2014,
        2015,1,0,0,0,2015,2022,1,0,0,0,2016,2017,3,354,177,0,2017,2018,5,
        261,0,0,2018,2019,5,257,0,0,2019,2022,1,0,0,0,2020,2022,5,257,0,
        0,2021,2009,1,0,0,0,2021,2016,1,0,0,0,2021,2020,1,0,0,0,2022,279,
        1,0,0,0,2023,2024,6,140,-1,0,2024,2025,3,286,143,0,2025,2039,1,0,
        0,0,2026,2035,10,2,0,0,2027,2028,5,38,0,0,2028,2029,5,109,0,0,2029,
        2036,3,286,143,0,2030,2031,3,282,141,0,2031,2032,5,109,0,0,2032,
        2033,3,280,140,0,2033,2034,3,284,142,0,2034,2036,1,0,0,0,2035,2027,
        1,0,0,0,2035,2030,1,0,0,0,2036,2038,1,0,0,0,2037,2026,1,0,0,0,2038,
        2041,1,0,0,0,2039,2037,1,0,0,0,2039,2040,1,0,0,0,2040,281,1,0,0,
        0,2041,2039,1,0,0,0,2042,2044,5,97,0,0,2043,2042,1,0,0,0,2043,2044,
        1,0,0,0,2044,2074,1,0,0,0,2045,2047,5,114,0,0,2046,2048,5,97,0,0,
        2047,2046,1,0,0,0,2047,2048,1,0,0,0,2048,2074,1,0,0,0,2049,2051,
        5,165,0,0,2050,2052,5,97,0,0,2051,2050,1,0,0,0,2051,2052,1,0,0,0,
        2052,2074,1,0,0,0,2053,2055,5,114,0,0,2054,2056,5,141,0,0,2055,2054,
        1,0,0,0,2055,2056,1,0,0,0,2056,2074,1,0,0,0,2057,2059,5,165,0,0,
        2058,2060,5,141,0,0,2059,2058,1,0,0,0,2059,2060,1,0,0,0,2060,2074,
        1,0,0,0,2061,2063,5,83,0,0,2062,2064,5,141,0,0,2063,2062,1,0,0,0,
        2063,2064,1,0,0,0,2064,2074,1,0,0,0,2065,2066,5,114,0,0,2066,2074,
        5,177,0,0,2067,2068,5,165,0,0,2068,2074,5,177,0,0,2069,2070,5,114,
        0,0,2070,2074,5,7,0,0,2071,2072,5,165,0,0,2072,2074,5,7,0,0,2073,
        2043,1,0,0,0,2073,2045,1,0,0,0,2073,2049,1,0,0,0,2073,2053,1,0,0,
        0,2073,2057,1,0,0,0,2073,2061,1,0,0,0,2073,2065,1,0,0,0,2073,2067,
        1,0,0,0,2073,2069,1,0,0,0,2073,2071,1,0,0,0,2074,283,1,0,0,0,2075,
        2076,5,136,0,0,2076,2090,3,306,153,0,2077,2078,5,205,0,0,2078,2079,
        5,265,0,0,2079,2084,3,358,179,0,2080,2081,5,263,0,0,2081,2083,3,
        358,179,0,2082,2080,1,0,0,0,2083,2086,1,0,0,0,2084,2082,1,0,0,0,
        2084,2085,1,0,0,0,2085,2087,1,0,0,0,2086,2084,1,0,0,0,2087,2088,
        5,266,0,0,2088,2090,1,0,0,0,2089,2075,1,0,0,0,2089,2077,1,0,0,0,
        2090,285,1,0,0,0,2091,2104,3,290,145,0,2092,2093,5,190,0,0,2093,
        2094,3,288,144,0,2094,2095,5,265,0,0,2095,2096,3,304,152,0,2096,
        2102,5,266,0,0,2097,2098,5,157,0,0,2098,2099,5,265,0,0,2099,2100,
        3,304,152,0,2100,2101,5,266,0,0,2101,2103,1,0,0,0,2102,2097,1,0,
        0,0,2102,2103,1,0,0,0,2103,2105,1,0,0,0,2104,2092,1,0,0,0,2104,2105,
        1,0,0,0,2105,287,1,0,0,0,2106,2107,7,17,0,0,2107,289,1,0,0,0,2108,
        2116,3,294,147,0,2109,2111,5,9,0,0,2110,2109,1,0,0,0,2110,2111,1,
        0,0,0,2111,2112,1,0,0,0,2112,2114,3,358,179,0,2113,2115,3,292,146,
        0,2114,2113,1,0,0,0,2114,2115,1,0,0,0,2115,2117,1,0,0,0,2116,2110,
        1,0,0,0,2116,2117,1,0,0,0,2117,291,1,0,0,0,2118,2119,5,265,0,0,2119,
        2124,3,192,96,0,2120,2121,5,263,0,0,2121,2123,3,192,96,0,2122,2120,
        1,0,0,0,2123,2126,1,0,0,0,2124,2122,1,0,0,0,2124,2125,1,0,0,0,2125,
        2127,1,0,0,0,2126,2124,1,0,0,0,2127,2128,5,266,0,0,2128,293,1,0,
        0,0,2129,2137,3,194,97,0,2130,2132,5,113,0,0,2131,2130,1,0,0,0,2131,
        2132,1,0,0,0,2132,2133,1,0,0,0,2133,2137,3,296,148,0,2134,2137,3,
        298,149,0,2135,2137,3,300,150,0,2136,2129,1,0,0,0,2136,2131,1,0,
        0,0,2136,2134,1,0,0,0,2136,2135,1,0,0,0,2137,295,1,0,0,0,2138,2139,
        5,265,0,0,2139,2140,3,204,102,0,2140,2141,5,266,0,0,2141,297,1,0,
        0,0,2142,2143,5,201,0,0,2143,2144,5,265,0,0,2144,2149,3,304,152,
        0,2145,2146,5,263,0,0,2146,2148,3,304,152,0,2147,2145,1,0,0,0,2148,
        2151,1,0,0,0,2149,2147,1,0,0,0,2149,2150,1,0,0,0,2150,2152,1,0,0,
        0,2151,2149,1,0,0,0,2152,2155,5,266,0,0,2153,2154,5,216,0,0,2154,
        2156,5,140,0,0,2155,2153,1,0,0,0,2155,2156,1,0,0,0,2156,299,1,0,
        0,0,2157,2158,5,265,0,0,2158,2159,3,280,140,0,2159,2160,5,266,0,
        0,2160,301,1,0,0,0,2161,2164,3,192,96,0,2162,2164,3,304,152,0,2163,
        2161,1,0,0,0,2163,2162,1,0,0,0,2164,303,1,0,0,0,2165,2166,3,306,
        153,0,2166,305,1,0,0,0,2167,2168,6,153,-1,0,2168,2170,3,310,155,
        0,2169,2171,3,308,154,0,2170,2169,1,0,0,0,2170,2171,1,0,0,0,2171,
        2175,1,0,0,0,2172,2173,5,132,0,0,2173,2175,3,306,153,3,2174,2167,
        1,0,0,0,2174,2172,1,0,0,0,2175,2184,1,0,0,0,2176,2177,10,2,0,0,2177,
        2178,5,5,0,0,2178,2183,3,306,153,3,2179,2180,10,1,0,0,2180,2181,
        5,138,0,0,2181,2183,3,306,153,2,2182,2176,1,0,0,0,2182,2179,1,0,
        0,0,2183,2186,1,0,0,0,2184,2182,1,0,0,0,2184,2185,1,0,0,0,2185,307,
        1,0,0,0,2186,2184,1,0,0,0,2187,2188,3,316,158,0,2188,2189,3,310,
        155,0,2189,2246,1,0,0,0,2190,2191,3,316,158,0,2191,2192,3,318,159,
        0,2192,2193,3,296,148,0,2193,2246,1,0,0,0,2194,2196,5,132,0,0,2195,
        2194,1,0,0,0,2195,2196,1,0,0,0,2196,2197,1,0,0,0,2197,2198,5,15,
        0,0,2198,2199,3,310,155,0,2199,2200,5,5,0,0,2200,2201,3,310,155,
        0,2201,2246,1,0,0,0,2202,2204,5,132,0,0,2203,2202,1,0,0,0,2203,2204,
        1,0,0,0,2204,2205,1,0,0,0,2205,2206,5,94,0,0,2206,2207,5,265,0,0,
        2207,2212,3,304,152,0,2208,2209,5,263,0,0,2209,2211,3,304,152,0,
        2210,2208,1,0,0,0,2211,2214,1,0,0,0,2212,2210,1,0,0,0,2212,2213,
        1,0,0,0,2213,2215,1,0,0,0,2214,2212,1,0,0,0,2215,2216,5,266,0,0,
        2216,2246,1,0,0,0,2217,2219,5,132,0,0,2218,2217,1,0,0,0,2218,2219,
        1,0,0,0,2219,2220,1,0,0,0,2220,2221,5,94,0,0,2221,2246,3,296,148,
        0,2222,2224,5,132,0,0,2223,2222,1,0,0,0,2223,2224,1,0,0,0,2224,2225,
        1,0,0,0,2225,2226,7,18,0,0,2226,2229,3,310,155,0,2227,2228,5,62,
        0,0,2228,2230,3,310,155,0,2229,2227,1,0,0,0,2229,2230,1,0,0,0,2230,
        2246,1,0,0,0,2231,2232,7,19,0,0,2232,2246,3,310,155,0,2233,2235,
        5,108,0,0,2234,2236,5,132,0,0,2235,2234,1,0,0,0,2235,2236,1,0,0,
        0,2236,2237,1,0,0,0,2237,2246,7,20,0,0,2238,2240,5,108,0,0,2239,
        2241,5,132,0,0,2240,2239,1,0,0,0,2240,2241,1,0,0,0,2241,2242,1,0,
        0,0,2242,2243,5,57,0,0,2243,2244,5,82,0,0,2244,2246,3,310,155,0,
        2245,2187,1,0,0,0,2245,2190,1,0,0,0,2245,2195,1,0,0,0,2245,2203,
        1,0,0,0,2245,2218,1,0,0,0,2245,2223,1,0,0,0,2245,2231,1,0,0,0,2245,
        2233,1,0,0,0,2245,2238,1,0,0,0,2246,309,1,0,0,0,2247,2248,6,155,
        -1,0,2248,2252,3,312,156,0,2249,2250,7,21,0,0,2250,2252,3,310,155,
        4,2251,2247,1,0,0,0,2251,2249,1,0,0,0,2252,2264,1,0,0,0,2253,2254,
        10,3,0,0,2254,2255,7,22,0,0,2255,2263,3,310,155,4,2256,2257,10,2,
        0,0,2257,2258,7,21,0,0,2258,2263,3,310,155,3,2259,2260,10,1,0,0,
        2260,2261,5,260,0,0,2261,2263,3,310,155,2,2262,2253,1,0,0,0,2262,
        2256,1,0,0,0,2262,2259,1,0,0,0,2263,2266,1,0,0,0,2264,2262,1,0,0,
        0,2264,2265,1,0,0,0,2265,311,1,0,0,0,2266,2264,1,0,0,0,2267,2268,
        6,156,-1,0,2268,2514,5,133,0,0,2269,2514,3,322,161,0,2270,2271,3,
        358,179,0,2271,2272,3,314,157,0,2272,2514,1,0,0,0,2273,2274,5,286,
        0,0,2274,2514,3,314,157,0,2275,2514,3,360,180,0,2276,2514,3,320,
        160,0,2277,2514,3,314,157,0,2278,2514,5,276,0,0,2279,2514,5,272,
        0,0,2280,2281,5,148,0,0,2281,2282,5,265,0,0,2282,2283,3,310,155,
        0,2283,2284,5,94,0,0,2284,2285,3,310,155,0,2285,2286,5,266,0,0,2286,
        2514,1,0,0,0,2287,2288,5,265,0,0,2288,2291,3,304,152,0,2289,2290,
        5,9,0,0,2290,2292,3,328,164,0,2291,2289,1,0,0,0,2291,2292,1,0,0,
        0,2292,2301,1,0,0,0,2293,2294,5,263,0,0,2294,2297,3,304,152,0,2295,
        2296,5,9,0,0,2296,2298,3,328,164,0,2297,2295,1,0,0,0,2297,2298,1,
        0,0,0,2298,2300,1,0,0,0,2299,2293,1,0,0,0,2300,2303,1,0,0,0,2301,
        2302,1,0,0,0,2301,2299,1,0,0,0,2302,2304,1,0,0,0,2303,2301,1,0,0,
        0,2304,2305,5,266,0,0,2305,2514,1,0,0,0,2306,2307,5,168,0,0,2307,
        2308,5,265,0,0,2308,2313,3,304,152,0,2309,2310,5,263,0,0,2310,2312,
        3,304,152,0,2311,2309,1,0,0,0,2312,2315,1,0,0,0,2313,2311,1,0,0,
        0,2313,2314,1,0,0,0,2314,2316,1,0,0,0,2315,2313,1,0,0,0,2316,2317,
        5,266,0,0,2317,2514,1,0,0,0,2318,2319,3,190,95,0,2319,2320,5,265,
        0,0,2320,2321,5,257,0,0,2321,2323,5,266,0,0,2322,2324,3,338,169,
        0,2323,2322,1,0,0,0,2323,2324,1,0,0,0,2324,2326,1,0,0,0,2325,2327,
        3,340,170,0,2326,2325,1,0,0,0,2326,2327,1,0,0,0,2327,2514,1,0,0,
        0,2328,2329,3,190,95,0,2329,2341,5,265,0,0,2330,2332,3,276,138,0,
        2331,2330,1,0,0,0,2331,2332,1,0,0,0,2332,2333,1,0,0,0,2333,2338,
        3,304,152,0,2334,2335,5,263,0,0,2335,2337,3,304,152,0,2336,2334,
        1,0,0,0,2337,2340,1,0,0,0,2338,2336,1,0,0,0,2338,2339,1,0,0,0,2339,
        2342,1,0,0,0,2340,2338,1,0,0,0,2341,2331,1,0,0,0,2341,2342,1,0,0,
        0,2342,2353,1,0,0,0,2343,2344,5,139,0,0,2344,2345,5,26,0,0,2345,
        2350,3,264,132,0,2346,2347,5,263,0,0,2347,2349,3,264,132,0,2348,
        2346,1,0,0,0,2349,2352,1,0,0,0,2350,2348,1,0,0,0,2350,2351,1,0,0,
        0,2351,2354,1,0,0,0,2352,2350,1,0,0,0,2353,2343,1,0,0,0,2353,2354,
        1,0,0,0,2354,2355,1,0,0,0,2355,2357,5,266,0,0,2356,2358,3,338,169,
        0,2357,2356,1,0,0,0,2357,2358,1,0,0,0,2358,2360,1,0,0,0,2359,2361,
        3,340,170,0,2360,2359,1,0,0,0,2360,2361,1,0,0,0,2361,2514,1,0,0,
        0,2362,2363,3,358,179,0,2363,2364,5,273,0,0,2364,2365,3,304,152,
        0,2365,2514,1,0,0,0,2366,2375,5,265,0,0,2367,2372,3,358,179,0,2368,
        2369,5,263,0,0,2369,2371,3,358,179,0,2370,2368,1,0,0,0,2371,2374,
        1,0,0,0,2372,2370,1,0,0,0,2372,2373,1,0,0,0,2373,2376,1,0,0,0,2374,
        2372,1,0,0,0,2375,2367,1,0,0,0,2375,2376,1,0,0,0,2376,2377,1,0,0,
        0,2377,2378,5,266,0,0,2378,2379,5,273,0,0,2379,2514,3,304,152,0,
        2380,2381,5,265,0,0,2381,2382,3,204,102,0,2382,2383,5,266,0,0,2383,
        2514,1,0,0,0,2384,2385,5,66,0,0,2385,2386,5,265,0,0,2386,2387,3,
        204,102,0,2387,2388,5,266,0,0,2388,2514,1,0,0,0,2389,2390,5,28,0,
        0,2390,2392,3,310,155,0,2391,2393,3,336,168,0,2392,2391,1,0,0,0,
        2393,2394,1,0,0,0,2394,2392,1,0,0,0,2394,2395,1,0,0,0,2395,2398,
        1,0,0,0,2396,2397,5,59,0,0,2397,2399,3,304,152,0,2398,2396,1,0,0,
        0,2398,2399,1,0,0,0,2399,2400,1,0,0,0,2400,2401,5,61,0,0,2401,2514,
        1,0,0,0,2402,2404,5,28,0,0,2403,2405,3,336,168,0,2404,2403,1,0,0,
        0,2405,2406,1,0,0,0,2406,2404,1,0,0,0,2406,2407,1,0,0,0,2407,2410,
        1,0,0,0,2408,2409,5,59,0,0,2409,2411,3,304,152,0,2410,2408,1,0,0,
        0,2410,2411,1,0,0,0,2411,2412,1,0,0,0,2412,2413,5,61,0,0,2413,2514,
        1,0,0,0,2414,2415,5,29,0,0,2415,2416,5,265,0,0,2416,2417,3,304,152,
        0,2417,2418,5,9,0,0,2418,2419,3,328,164,0,2419,2420,5,266,0,0,2420,
        2514,1,0,0,0,2421,2422,5,195,0,0,2422,2423,5,265,0,0,2423,2424,3,
        304,152,0,2424,2425,5,9,0,0,2425,2426,3,328,164,0,2426,2427,5,266,
        0,0,2427,2514,1,0,0,0,2428,2429,5,8,0,0,2429,2438,5,267,0,0,2430,
        2435,3,304,152,0,2431,2432,5,263,0,0,2432,2434,3,304,152,0,2433,
        2431,1,0,0,0,2434,2437,1,0,0,0,2435,2433,1,0,0,0,2435,2436,1,0,0,
        0,2436,2439,1,0,0,0,2437,2435,1,0,0,0,2438,2430,1,0,0,0,2438,2439,
        1,0,0,0,2439,2440,1,0,0,0,2440,2514,5,268,0,0,2441,2514,3,358,179,
        0,2442,2514,5,40,0,0,2443,2447,5,42,0,0,2444,2445,5,265,0,0,2445,
        2446,5,277,0,0,2446,2448,5,266,0,0,2447,2444,1,0,0,0,2447,2448,1,
        0,0,0,2448,2514,1,0,0,0,2449,2453,5,43,0,0,2450,2451,5,265,0,0,2451,
        2452,5,277,0,0,2452,2454,5,266,0,0,2453,2450,1,0,0,0,2453,2454,1,
        0,0,0,2454,2514,1,0,0,0,2455,2459,5,119,0,0,2456,2457,5,265,0,0,
        2457,2458,5,277,0,0,2458,2460,5,266,0,0,2459,2456,1,0,0,0,2459,2460,
        1,0,0,0,2460,2514,1,0,0,0,2461,2465,5,120,0,0,2462,2463,5,265,0,
        0,2463,2464,5,277,0,0,2464,2466,5,266,0,0,2465,2462,1,0,0,0,2465,
        2466,1,0,0,0,2466,2514,1,0,0,0,2467,2514,5,44,0,0,2468,2514,5,41,
        0,0,2469,2470,5,184,0,0,2470,2471,5,265,0,0,2471,2472,3,310,155,
        0,2472,2473,5,82,0,0,2473,2476,3,310,155,0,2474,2475,5,78,0,0,2475,
        2477,3,310,155,0,2476,2474,1,0,0,0,2476,2477,1,0,0,0,2477,2478,1,
        0,0,0,2478,2479,5,266,0,0,2479,2514,1,0,0,0,2480,2481,5,131,0,0,
        2481,2482,5,265,0,0,2482,2485,3,310,155,0,2483,2484,5,263,0,0,2484,
        2486,3,326,163,0,2485,2483,1,0,0,0,2485,2486,1,0,0,0,2486,2487,1,
        0,0,0,2487,2488,5,266,0,0,2488,2514,1,0,0,0,2489,2490,5,68,0,0,2490,
        2491,5,265,0,0,2491,2492,3,358,179,0,2492,2493,5,82,0,0,2493,2494,
        3,310,155,0,2494,2495,5,266,0,0,2495,2514,1,0,0,0,2496,2497,5,265,
        0,0,2497,2498,3,304,152,0,2498,2499,5,266,0,0,2499,2514,1,0,0,0,
        2500,2501,5,88,0,0,2501,2510,5,265,0,0,2502,2507,3,354,177,0,2503,
        2504,5,263,0,0,2504,2506,3,354,177,0,2505,2503,1,0,0,0,2506,2509,
        1,0,0,0,2507,2505,1,0,0,0,2507,2508,1,0,0,0,2508,2511,1,0,0,0,2509,
        2507,1,0,0,0,2510,2502,1,0,0,0,2510,2511,1,0,0,0,2511,2512,1,0,0,
        0,2512,2514,5,266,0,0,2513,2267,1,0,0,0,2513,2269,1,0,0,0,2513,2270,
        1,0,0,0,2513,2273,1,0,0,0,2513,2275,1,0,0,0,2513,2276,1,0,0,0,2513,
        2277,1,0,0,0,2513,2278,1,0,0,0,2513,2279,1,0,0,0,2513,2280,1,0,0,
        0,2513,2287,1,0,0,0,2513,2306,1,0,0,0,2513,2318,1,0,0,0,2513,2328,
        1,0,0,0,2513,2362,1,0,0,0,2513,2366,1,0,0,0,2513,2380,1,0,0,0,2513,
        2384,1,0,0,0,2513,2389,1,0,0,0,2513,2402,1,0,0,0,2513,2414,1,0,0,
        0,2513,2421,1,0,0,0,2513,2428,1,0,0,0,2513,2441,1,0,0,0,2513,2442,
        1,0,0,0,2513,2443,1,0,0,0,2513,2449,1,0,0,0,2513,2455,1,0,0,0,2513,
        2461,1,0,0,0,2513,2467,1,0,0,0,2513,2468,1,0,0,0,2513,2469,1,0,0,
        0,2513,2480,1,0,0,0,2513,2489,1,0,0,0,2513,2496,1,0,0,0,2513,2500,
        1,0,0,0,2514,2525,1,0,0,0,2515,2516,10,15,0,0,2516,2517,5,267,0,
        0,2517,2518,3,310,155,0,2518,2519,5,268,0,0,2519,2524,1,0,0,0,2520,
        2521,10,13,0,0,2521,2522,5,261,0,0,2522,2524,3,358,179,0,2523,2515,
        1,0,0,0,2523,2520,1,0,0,0,2524,2527,1,0,0,0,2525,2523,1,0,0,0,2525,
        2526,1,0,0,0,2526,313,1,0,0,0,2527,2525,1,0,0,0,2528,2535,5,274,
        0,0,2529,2532,5,275,0,0,2530,2531,5,198,0,0,2531,2533,5,274,0,0,
        2532,2530,1,0,0,0,2532,2533,1,0,0,0,2533,2535,1,0,0,0,2534,2528,
        1,0,0,0,2534,2529,1,0,0,0,2535,315,1,0,0,0,2536,2537,7,23,0,0,2537,
        317,1,0,0,0,2538,2539,7,24,0,0,2539,319,1,0,0,0,2540,2541,7,25,0,
        0,2541,321,1,0,0,0,2542,2543,5,277,0,0,2543,2557,3,324,162,0,2544,
        2545,5,265,0,0,2545,2546,5,277,0,0,2546,2547,5,266,0,0,2547,2557,
        3,324,162,0,2548,2549,5,101,0,0,2549,2550,5,277,0,0,2550,2557,3,
        324,162,0,2551,2552,5,101,0,0,2552,2553,5,265,0,0,2553,2554,5,277,
        0,0,2554,2555,5,266,0,0,2555,2557,3,324,162,0,2556,2542,1,0,0,0,
        2556,2544,1,0,0,0,2556,2548,1,0,0,0,2556,2551,1,0,0,0,2557,323,1,
        0,0,0,2558,2559,7,26,0,0,2559,325,1,0,0,0,2560,2561,7,27,0,0,2561,
        327,1,0,0,0,2562,2563,6,164,-1,0,2563,2564,5,8,0,0,2564,2565,5,251,
        0,0,2565,2566,3,328,164,0,2566,2567,5,253,0,0,2567,2610,1,0,0,0,
        2568,2569,5,235,0,0,2569,2570,5,251,0,0,2570,2571,3,328,164,0,2571,
        2572,5,263,0,0,2572,2573,3,328,164,0,2573,2574,5,253,0,0,2574,2610,
        1,0,0,0,2575,2576,5,240,0,0,2576,2577,5,251,0,0,2577,2578,3,358,
        179,0,2578,2579,5,264,0,0,2579,2587,3,328,164,0,2580,2581,5,263,
        0,0,2581,2582,3,358,179,0,2582,2583,5,264,0,0,2583,2584,3,328,164,
        0,2584,2586,1,0,0,0,2585,2580,1,0,0,0,2586,2589,1,0,0,0,2587,2585,
        1,0,0,0,2587,2588,1,0,0,0,2588,2590,1,0,0,0,2589,2587,1,0,0,0,2590,
        2591,5,253,0,0,2591,2610,1,0,0,0,2592,2595,3,334,167,0,2593,2595,
        3,330,165,0,2594,2592,1,0,0,0,2594,2593,1,0,0,0,2595,2607,1,0,0,
        0,2596,2597,5,265,0,0,2597,2602,3,332,166,0,2598,2599,5,263,0,0,
        2599,2601,3,332,166,0,2600,2598,1,0,0,0,2601,2604,1,0,0,0,2602,2600,
        1,0,0,0,2602,2603,1,0,0,0,2603,2605,1,0,0,0,2604,2602,1,0,0,0,2605,
        2606,5,266,0,0,2606,2608,1,0,0,0,2607,2596,1,0,0,0,2607,2608,1,0,
        0,0,2608,2610,1,0,0,0,2609,2562,1,0,0,0,2609,2568,1,0,0,0,2609,2575,
        1,0,0,0,2609,2594,1,0,0,0,2610,2615,1,0,0,0,2611,2612,10,5,0,0,2612,
        2614,5,8,0,0,2613,2611,1,0,0,0,2614,2617,1,0,0,0,2615,2613,1,0,0,
        0,2615,2616,1,0,0,0,2616,329,1,0,0,0,2617,2615,1,0,0,0,2618,2619,
        7,28,0,0,2619,331,1,0,0,0,2620,2623,5,277,0,0,2621,2623,3,328,164,
        0,2622,2620,1,0,0,0,2622,2621,1,0,0,0,2623,333,1,0,0,0,2624,2629,
        5,284,0,0,2625,2629,5,285,0,0,2626,2629,5,286,0,0,2627,2629,3,358,
        179,0,2628,2624,1,0,0,0,2628,2625,1,0,0,0,2628,2626,1,0,0,0,2628,
        2627,1,0,0,0,2629,335,1,0,0,0,2630,2631,5,214,0,0,2631,2632,3,304,
        152,0,2632,2633,5,192,0,0,2633,2634,3,304,152,0,2634,337,1,0,0,0,
        2635,2636,5,74,0,0,2636,2637,5,265,0,0,2637,2638,5,215,0,0,2638,
        2639,3,306,153,0,2639,2640,5,266,0,0,2640,339,1,0,0,0,2641,2642,
        5,143,0,0,2642,2653,5,265,0,0,2643,2644,5,145,0,0,2644,2645,5,26,
        0,0,2645,2650,3,304,152,0,2646,2647,5,263,0,0,2647,2649,3,304,152,
        0,2648,2646,1,0,0,0,2649,2652,1,0,0,0,2650,2648,1,0,0,0,2650,2651,
        1,0,0,0,2651,2654,1,0,0,0,2652,2650,1,0,0,0,2653,2643,1,0,0,0,2653,
        2654,1,0,0,0,2654,2665,1,0,0,0,2655,2656,5,139,0,0,2656,2657,5,26,
        0,0,2657,2662,3,264,132,0,2658,2659,5,263,0,0,2659,2661,3,264,132,
        0,2660,2658,1,0,0,0,2661,2664,1,0,0,0,2662,2660,1,0,0,0,2662,2663,
        1,0,0,0,2663,2666,1,0,0,0,2664,2662,1,0,0,0,2665,2655,1,0,0,0,2665,
        2666,1,0,0,0,2666,2668,1,0,0,0,2667,2669,3,342,171,0,2668,2667,1,
        0,0,0,2668,2669,1,0,0,0,2669,2670,1,0,0,0,2670,2671,5,266,0,0,2671,
        341,1,0,0,0,2672,2673,5,154,0,0,2673,2689,3,344,172,0,2674,2675,
        5,169,0,0,2675,2689,3,344,172,0,2676,2677,5,154,0,0,2677,2678,5,
        15,0,0,2678,2679,3,344,172,0,2679,2680,5,5,0,0,2680,2681,3,344,172,
        0,2681,2689,1,0,0,0,2682,2683,5,169,0,0,2683,2684,5,15,0,0,2684,
        2685,3,344,172,0,2685,2686,5,5,0,0,2686,2687,3,344,172,0,2687,2689,
        1,0,0,0,2688,2672,1,0,0,0,2688,2674,1,0,0,0,2688,2676,1,0,0,0,2688,
        2682,1,0,0,0,2689,343,1,0,0,0,2690,2691,5,199,0,0,2691,2700,5,149,
        0,0,2692,2693,5,199,0,0,2693,2700,5,77,0,0,2694,2695,5,39,0,0,2695,
        2700,5,168,0,0,2696,2697,3,304,152,0,2697,2698,7,29,0,0,2698,2700,
        1,0,0,0,2699,2690,1,0,0,0,2699,2692,1,0,0,0,2699,2694,1,0,0,0,2699,
        2696,1,0,0,0,2700,345,1,0,0,0,2701,2702,3,358,179,0,2702,2703,5,
        261,0,0,2703,2704,3,358,179,0,2704,2707,1,0,0,0,2705,2707,3,358,
        179,0,2706,2701,1,0,0,0,2706,2705,1,0,0,0,2707,347,1,0,0,0,2708,
        2713,3,346,173,0,2709,2710,5,263,0,0,2710,2712,3,346,173,0,2711,
        2709,1,0,0,0,2712,2715,1,0,0,0,2713,2711,1,0,0,0,2713,2714,1,0,0,
        0,2714,349,1,0,0,0,2715,2713,1,0,0,0,2716,2730,5,2,0,0,2717,2730,
        5,4,0,0,2718,2730,5,58,0,0,2719,2730,5,37,0,0,2720,2730,5,99,0,0,
        2721,2730,5,162,0,0,2722,2727,5,174,0,0,2723,2724,5,265,0,0,2724,
        2725,3,358,179,0,2725,2726,5,266,0,0,2726,2728,1,0,0,0,2727,2723,
        1,0,0,0,2727,2728,1,0,0,0,2728,2730,1,0,0,0,2729,2716,1,0,0,0,2729,
        2717,1,0,0,0,2729,2718,1,0,0,0,2729,2719,1,0,0,0,2729,2720,1,0,0,
        0,2729,2721,1,0,0,0,2729,2722,1,0,0,0,2730,351,1,0,0,0,2731,2732,
        7,30,0,0,2732,353,1,0,0,0,2733,2738,3,358,179,0,2734,2735,5,261,
        0,0,2735,2737,3,358,179,0,2736,2734,1,0,0,0,2737,2740,1,0,0,0,2738,
        2736,1,0,0,0,2738,2739,1,0,0,0,2739,355,1,0,0,0,2740,2738,1,0,0,
        0,2741,2742,5,166,0,0,2742,2748,3,358,179,0,2743,2744,5,204,0,0,
        2744,2748,3,358,179,0,2745,2746,5,87,0,0,2746,2748,3,358,179,0,2747,
        2741,1,0,0,0,2747,2743,1,0,0,0,2747,2745,1,0,0,0,2748,357,1,0,0,
        0,2749,2755,5,280,0,0,2750,2755,5,274,0,0,2751,2755,3,364,182,0,
        2752,2755,5,283,0,0,2753,2755,5,281,0,0,2754,2749,1,0,0,0,2754,2750,
        1,0,0,0,2754,2751,1,0,0,0,2754,2752,1,0,0,0,2754,2753,1,0,0,0,2755,
        359,1,0,0,0,2756,2758,5,256,0,0,2757,2756,1,0,0,0,2757,2758,1,0,
        0,0,2758,2759,1,0,0,0,2759,2769,5,278,0,0,2760,2762,5,256,0,0,2761,
        2760,1,0,0,0,2761,2762,1,0,0,0,2762,2763,1,0,0,0,2763,2769,5,279,
        0,0,2764,2766,5,256,0,0,2765,2764,1,0,0,0,2765,2766,1,0,0,0,2766,
        2767,1,0,0,0,2767,2769,5,277,0,0,2768,2757,1,0,0,0,2768,2761,1,0,
        0,0,2768,2765,1,0,0,0,2769,361,1,0,0,0,2770,2771,7,31,0,0,2771,363,
        1,0,0,0,2772,2773,7,32,0,0,2773,365,1,0,0,0,353,369,376,400,413,
        417,421,430,435,439,445,447,452,456,460,467,472,478,482,491,498,
        502,507,509,514,518,525,529,534,538,542,546,554,559,563,571,575,
        584,587,590,596,603,614,619,624,629,634,643,646,649,653,679,705,
        714,724,727,741,759,761,770,781,790,797,801,808,814,817,822,829,
        843,856,861,866,872,908,911,917,920,926,932,944,946,957,965,970,
        974,979,986,990,994,1000,1004,1008,1017,1020,1023,1031,1045,1052,
        1065,1071,1076,1079,1082,1087,1091,1100,1105,1111,1115,1120,1125,
        1128,1136,1139,1143,1155,1158,1162,1167,1171,1187,1192,1199,1202,
        1208,1211,1218,1221,1225,1230,1233,1240,1243,1267,1281,1285,1289,
        1309,1311,1313,1322,1324,1333,1335,1344,1346,1351,1360,1369,1378,
        1389,1395,1400,1403,1416,1426,1430,1435,1446,1451,1484,1492,1497,
        1501,1505,1510,1514,1519,1524,1529,1533,1542,1545,1549,1556,1567,
        1573,1577,1583,1593,1600,1605,1610,1615,1621,1624,1633,1636,1639,
        1645,1651,1661,1664,1668,1672,1675,1681,1684,1690,1696,1699,1702,
        1706,1716,1727,1732,1735,1739,1746,1756,1768,1774,1776,1785,1788,
        1795,1805,1811,1819,1830,1840,1851,1853,1859,1864,1874,1877,1883,
        1885,1893,1899,1902,1904,1916,1923,1927,1931,1935,1938,1945,1954,
        1957,1961,1966,1970,1973,1980,1991,1994,1998,2002,2011,2014,2021,
        2035,2039,2043,2047,2051,2055,2059,2063,2073,2084,2089,2102,2104,
        2110,2114,2116,2124,2131,2136,2149,2155,2163,2170,2174,2182,2184,
        2195,2203,2212,2218,2223,2229,2235,2240,2245,2251,2262,2264,2291,
        2297,2301,2313,2323,2326,2331,2338,2341,2350,2353,2357,2360,2372,
        2375,2394,2398,2406,2410,2435,2438,2447,2453,2459,2465,2476,2485,
        2507,2510,2513,2523,2525,2532,2534,2556,2587,2594,2602,2607,2609,
        2615,2622,2628,2650,2653,2662,2665,2668,2688,2699,2706,2713,2727,
        2729,2738,2747,2754,2757,2761,2765,2768
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
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
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
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
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
    public _comment?: StringLiteralContext;
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
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0);
    }
    public KW_LOCATION(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_LOCATION, 0);
    }
    public stringLiteral(): StringLiteralContext[];
    public stringLiteral(i: number): StringLiteralContext | null;
    public stringLiteral(i?: number): StringLiteralContext[] | StringLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringLiteralContext);
        }

        return this.getRuleContext(i, StringLiteralContext);
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
    public type_(): TypeContext[];
    public type_(i: number): TypeContext | null;
    public type_(i?: number): TypeContext[] | TypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }

        return this.getRuleContext(i, TypeContext);
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
    public KW_COLUMN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_COLUMN, 0)!;
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
    public KW_WHERE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_WHERE, 0);
    }
    public booleanExpression(): BooleanExpressionContext | null {
        return this.getRuleContext(0, BooleanExpressionContext);
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
    public KW_WHERE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_WHERE, 0);
    }
    public booleanExpression(): BooleanExpressionContext | null {
        return this.getRuleContext(0, BooleanExpressionContext);
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
    public KW_WHERE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_WHERE, 0);
    }
    public booleanExpression(): BooleanExpressionContext | null {
        return this.getRuleContext(0, BooleanExpressionContext);
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
    public _comment?: StringLiteralContext;
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
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0);
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
    public stringLiteral(): StringLiteralContext[];
    public stringLiteral(i: number): StringLiteralContext | null;
    public stringLiteral(i?: number): StringLiteralContext[] | StringLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringLiteralContext);
        }

        return this.getRuleContext(i, StringLiteralContext);
    }
    public properties(): PropertiesContext[];
    public properties(i: number): PropertiesContext | null;
    public properties(i?: number): PropertiesContext[] | PropertiesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertiesContext);
        }

        return this.getRuleContext(i, PropertiesContext);
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
    public columnNamePathCreate(): ColumnNamePathCreateContext[];
    public columnNamePathCreate(i: number): ColumnNamePathCreateContext | null;
    public columnNamePathCreate(i?: number): ColumnNamePathCreateContext[] | ColumnNamePathCreateContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnNamePathCreateContext);
        }

        return this.getRuleContext(i, ColumnNamePathCreateContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.RPAREN, 0)!;
    }
    public KW_COMMENT(): antlr.TerminalNode[];
    public KW_COMMENT(i: number): antlr.TerminalNode | null;
    public KW_COMMENT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.KW_COMMENT);
    	} else {
    		return this.getToken(ImpalaSqlParser.KW_COMMENT, i);
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
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
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


export class ColumnSpecWithKuduContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnSpec(): ColumnSpecContext | null {
        return this.getRuleContext(0, ColumnSpecContext);
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
    public _where?: BooleanExpressionContext;
    public _having?: BooleanExpressionContext;
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
    public KW_WHERE(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_WHERE, 0);
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
    public KW_HAVING(): antlr.TerminalNode | null {
        return this.getToken(ImpalaSqlParser.KW_HAVING, 0);
    }
    public booleanExpression(): BooleanExpressionContext[];
    public booleanExpression(i: number): BooleanExpressionContext | null;
    public booleanExpression(i?: number): BooleanExpressionContext[] | BooleanExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BooleanExpressionContext);
        }

        return this.getRuleContext(i, BooleanExpressionContext);
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
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
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
    public COLON(): antlr.TerminalNode[];
    public COLON(i: number): antlr.TerminalNode | null;
    public COLON(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ImpalaSqlParser.COLON);
    	} else {
    		return this.getToken(ImpalaSqlParser.COLON, i);
    	}
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
    public KW_WHERE(): antlr.TerminalNode {
        return this.getToken(ImpalaSqlParser.KW_WHERE, 0)!;
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
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


export class OverContext extends antlr.ParserRuleContext {
    public _expression?: ExpressionContext;
    public _partition: ExpressionContext[] = [];
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
    public _columnName?: IdentifierContext;
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
