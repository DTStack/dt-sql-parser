// Generated from dt-sql-parser/src/grammar/impala/ImpalaSqlParser.g4 by ANTLR 4.13.1

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
    public static readonly KW_MAP = 122;
    public static readonly KW_MINUTE = 123;
    public static readonly KW_MINUTES = 124;
    public static readonly KW_MONTH = 125;
    public static readonly KW_MONTHS = 126;
    public static readonly KW_MERGE_FN = 127;
    public static readonly KW_NFC = 128;
    public static readonly KW_NFD = 129;
    public static readonly KW_NFKC = 130;
    public static readonly KW_NFKD = 131;
    public static readonly KW_NORMALIZE = 132;
    public static readonly KW_NOT = 133;
    public static readonly KW_NULL = 134;
    public static readonly KW_NULLS = 135;
    public static readonly KW_OFFSET = 136;
    public static readonly KW_ON = 137;
    public static readonly KW_OPTION = 138;
    public static readonly KW_OR = 139;
    public static readonly KW_ORDER = 140;
    public static readonly KW_ORDINALITY = 141;
    public static readonly KW_OUTER = 142;
    public static readonly KW_OWNER = 143;
    public static readonly KW_OVER = 144;
    public static readonly KW_OVERWRITE = 145;
    public static readonly KW_PARTITION = 146;
    public static readonly KW_PARTITIONS = 147;
    public static readonly KW_PARQUET = 148;
    public static readonly KW_POSITION = 149;
    public static readonly KW_PRECEDING = 150;
    public static readonly KW_PRIMARY = 151;
    public static readonly KW_REPLICATION = 152;
    public static readonly KW_PRIVILEGES = 153;
    public static readonly KW_PROPERTIES = 154;
    public static readonly KW_RANGE = 155;
    public static readonly KW_RECOVER = 156;
    public static readonly KW_RENAME = 157;
    public static readonly KW_REPEATABLE = 158;
    public static readonly KW_REPLACE = 159;
    public static readonly KW_RESTRICT = 160;
    public static readonly KW_RETURNS = 161;
    public static readonly KW_REVOKE = 162;
    public static readonly KW_REFRESH = 163;
    public static readonly KW_REGEXP = 164;
    public static readonly KW_RLIKE = 165;
    public static readonly KW_RIGHT = 166;
    public static readonly KW_ROLE = 167;
    public static readonly KW_ROLES = 168;
    public static readonly KW_ROW = 169;
    public static readonly KW_ROWS = 170;
    public static readonly KW_SCHEMA = 171;
    public static readonly KW_SCHEMAS = 172;
    public static readonly KW_SECOND = 173;
    public static readonly KW_SECONDS = 174;
    public static readonly KW_SELECT = 175;
    public static readonly KW_SERDEPROPERTIES = 176;
    public static readonly KW_SET = 177;
    public static readonly KW_SEMI = 178;
    public static readonly KW_SERVER = 179;
    public static readonly KW_SHOW = 180;
    public static readonly KW_SHUTDOWN = 181;
    public static readonly KW_SOME = 182;
    public static readonly KW_STATS = 183;
    public static readonly KW_STRUCT = 184;
    public static readonly KW_STRAIGHT_JOIN = 185;
    public static readonly KW_SUBSTRING = 186;
    public static readonly KW_SYSTEM = 187;
    public static readonly KW_SYMBOL = 188;
    public static readonly KW_SERIALIZE_FN = 189;
    public static readonly KW_TABLE = 190;
    public static readonly KW_TABLES = 191;
    public static readonly KW_TABLESAMPLE = 192;
    public static readonly KW_TERMINATED = 193;
    public static readonly KW_THEN = 194;
    public static readonly KW_TO = 195;
    public static readonly KW_TRUE = 196;
    public static readonly KW_TRY_CAST = 197;
    public static readonly KW_TRUNCATE = 198;
    public static readonly KW_UNCACHED = 199;
    public static readonly KW_UESCAPE = 200;
    public static readonly KW_UNBOUNDED = 201;
    public static readonly KW_UNION = 202;
    public static readonly KW_UNNEST = 203;
    public static readonly KW_UNSET = 204;
    public static readonly KW_USE = 205;
    public static readonly KW_USER = 206;
    public static readonly KW_USING = 207;
    public static readonly KW_UPDATE_FN = 208;
    public static readonly KW_UPSERT = 209;
    public static readonly KW_UNKNOWN = 210;
    public static readonly KW_URI = 211;
    public static readonly KW_VALUE = 212;
    public static readonly KW_VALUES = 213;
    public static readonly KW_VIEW = 214;
    public static readonly KW_VIEWS = 215;
    public static readonly KW_WHEN = 216;
    public static readonly KW_WHERE = 217;
    public static readonly KW_WITH = 218;
    public static readonly KW_YEAR = 219;
    public static readonly KW_YEARS = 220;
    public static readonly KW_TEXTFILE = 221;
    public static readonly KW_ORC = 222;
    public static readonly KW_AVRO = 223;
    public static readonly KW_SEQUENCEFILE = 224;
    public static readonly KW_RCFILE = 225;
    public static readonly KW_REFERENCES = 226;
    public static readonly KW_NOVALIDATE = 227;
    public static readonly KW_RELY = 228;
    public static readonly STATS_NUMDVS = 229;
    public static readonly STATS_NUMNULLS = 230;
    public static readonly STATS_AVGSIZE = 231;
    public static readonly STATS_MAXSIZE = 232;
    public static readonly EQ = 233;
    public static readonly NEQ = 234;
    public static readonly LT = 235;
    public static readonly LTE = 236;
    public static readonly GT = 237;
    public static readonly GTE = 238;
    public static readonly PLUS = 239;
    public static readonly MINUS = 240;
    public static readonly ASTERISK = 241;
    public static readonly SLASH = 242;
    public static readonly PERCENT = 243;
    public static readonly CONCAT = 244;
    public static readonly DOT = 245;
    public static readonly SEMICOLON = 246;
    public static readonly COMMA = 247;
    public static readonly COLON = 248;
    public static readonly LPAREN = 249;
    public static readonly RPAREN = 250;
    public static readonly LSQUARE = 251;
    public static readonly RSQUARE = 252;
    public static readonly LCURLY = 253;
    public static readonly RCURLY = 254;
    public static readonly BITWISEOR = 255;
    public static readonly QUESTION = 256;
    public static readonly RIGHT_ARROW = 257;
    public static readonly STRING = 258;
    public static readonly UNICODE_STRING = 259;
    public static readonly BINARY_LITERAL = 260;
    public static readonly INTEGER_VALUE = 261;
    public static readonly DECIMAL_VALUE = 262;
    public static readonly DOUBLE_VALUE = 263;
    public static readonly IDENTIFIER = 264;
    public static readonly DIGIT_IDENTIFIER = 265;
    public static readonly QUOTED_IDENTIFIER = 266;
    public static readonly BACKQUOTED_IDENTIFIER = 267;
    public static readonly TIME_WITH_TIME_ZONE = 268;
    public static readonly TIMESTAMP_WITH_TIME_ZONE = 269;
    public static readonly DOUBLE_PRECISION = 270;
    public static readonly SIMPLE_COMMENT = 271;
    public static readonly BRACKETED_COMMENT = 272;
    public static readonly WS = 273;
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
    public static readonly RULE_typeParameter = 165;
    public static readonly RULE_baseType = 166;
    public static readonly RULE_whenClause = 167;
    public static readonly RULE_filter = 168;
    public static readonly RULE_over = 169;
    public static readonly RULE_windowFrame = 170;
    public static readonly RULE_frameBound = 171;
    public static readonly RULE_pathElement = 172;
    public static readonly RULE_pathSpecification = 173;
    public static readonly RULE_privilege = 174;
    public static readonly RULE_objectType = 175;
    public static readonly RULE_qualifiedName = 176;
    public static readonly RULE_principal = 177;
    public static readonly RULE_identifier = 178;
    public static readonly RULE_number = 179;
    public static readonly RULE_reservedKeywordsUsedAsFuncName = 180;
    public static readonly RULE_nonReserved = 181;

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
        "'LOAD'", "'LOCALTIME'", "'LOCALTIMESTAMP'", "'METADATA'", "'MAP'", 
        "'MINUTE'", "'MINUTES'", "'MONTH'", "'MONTHS'", "'MERGE_FN'", "'NFC'", 
        "'NFD'", "'NFKC'", "'NFKD'", "'NORMALIZE'", "'NOT'", "'NULL'", "'NULLS'", 
        "'OFFSET'", "'ON'", "'OPTION'", "'OR'", "'ORDER'", "'ORDINALITY'", 
        "'OUTER'", "'OWNER'", "'OVER'", "'OVERWRITE'", "'PARTITION'", "'PARTITIONS'", 
        "'PARQUET'", "'POSITION'", "'PRECEDING'", "'PRIMARY'", "'REPLICATION'", 
        "'PRIVILEGES'", "'PROPERTIES'", "'RANGE'", "'RECOVER'", "'RENAME'", 
        "'REPEATABLE'", "'REPLACE'", "'RESTRICT'", "'RETURNS'", "'REVOKE'", 
        "'REFRESH'", "'REGEXP'", "'RLIKE'", "'RIGHT'", "'ROLE'", "'ROLES'", 
        "'ROW'", "'ROWS'", "'SCHEMA'", "'SCHEMAS'", "'SECOND'", "'SECONDS'", 
        "'SELECT'", "'SERDEPROPERTIES'", "'SET'", "'SEMI'", "'SERVER'", 
        "'SHOW'", "'SHUTDOWN'", "'SOME'", "'STATS'", "'STRUCT'", "'STRAIGHT_JOIN'", 
        "'SUBSTRING'", "'SYSTEM'", "'SYMBOL'", "'SERIALIZE_FN'", "'TABLE'", 
        "'TABLES'", "'TABLESAMPLE'", "'TERMINATED '", "'THEN'", "'TO'", 
        "'TRUE'", "'TRY_CAST'", "'TRUNCATE'", "'UNCACHED'", "'UESCAPE'", 
        "'UNBOUNDED'", "'UNION'", "'UNNEST'", "'UNSET'", "'USE'", "'USER'", 
        "'USING'", "'UPDATE_FN'", "'UPSERT'", "'UNKNOWN'", "'URI'", "'VALUE'", 
        "'VALUES'", "'VIEW'", "'VIEWS'", "'WHEN'", "'WHERE'", "'WITH'", 
        "'YEAR'", "'YEARS'", "'TEXTFILE'", "'ORC'", "'AVRO'", "'SEQUENCEFILE'", 
        "'RCFILE'", "'REFERENCES'", "'NOVALIDATE'", "'RELY'", "''NUMDVS''", 
        "''NUMNULLS''", "''AVGSIZE''", "''MAXSIZE''", "'='", null, "'<'", 
        "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", "'%'", "'||'", 
        "'.'", "';'", "','", "':'", "'('", "')'", "'['", "']'", "'{'", "'}'", 
        "'|'", "'?'", "'->'"
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
        "KW_LOCALTIME", "KW_LOCALTIMESTAMP", "KW_METADATA", "KW_MAP", "KW_MINUTE", 
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
        "KW_SHUTDOWN", "KW_SOME", "KW_STATS", "KW_STRUCT", "KW_STRAIGHT_JOIN", 
        "KW_SUBSTRING", "KW_SYSTEM", "KW_SYMBOL", "KW_SERIALIZE_FN", "KW_TABLE", 
        "KW_TABLES", "KW_TABLESAMPLE", "KW_TERMINATED", "KW_THEN", "KW_TO", 
        "KW_TRUE", "KW_TRY_CAST", "KW_TRUNCATE", "KW_UNCACHED", "KW_UESCAPE", 
        "KW_UNBOUNDED", "KW_UNION", "KW_UNNEST", "KW_UNSET", "KW_USE", "KW_USER", 
        "KW_USING", "KW_UPDATE_FN", "KW_UPSERT", "KW_UNKNOWN", "KW_URI", 
        "KW_VALUE", "KW_VALUES", "KW_VIEW", "KW_VIEWS", "KW_WHEN", "KW_WHERE", 
        "KW_WITH", "KW_YEAR", "KW_YEARS", "KW_TEXTFILE", "KW_ORC", "KW_AVRO", 
        "KW_SEQUENCEFILE", "KW_RCFILE", "KW_REFERENCES", "KW_NOVALIDATE", 
        "KW_RELY", "STATS_NUMDVS", "STATS_NUMNULLS", "STATS_AVGSIZE", "STATS_MAXSIZE", 
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
        "intervalField", "normalForm", "type", "typeParameter", "baseType", 
        "whenClause", "filter", "over", "windowFrame", "frameBound", "pathElement", 
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
            this.state = 367;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 22085645) !== 0) || _la === 67 || _la === 86 || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 524545) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 268738563) !== 0) || ((((_la - 198)) & ~0x1F) === 0 && ((1 << (_la - 198)) & 1083521) !== 0) || _la === 248 || _la === 249) {
                {
                {
                this.state = 364;
                this.singleStatement();
                }
                }
                this.state = 369;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 370;
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
            this.state = 372;
            this.sqlStatement();
            this.state = 374;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 246) {
                {
                this.state = 373;
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
            this.state = 398;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 376;
                this.queryStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 377;
                this.useStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 378;
                this.createStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 379;
                this.alterStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 380;
                this.truncateTableStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 381;
                this.describeStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 382;
                this.computeStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 383;
                this.dropStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 384;
                this.grantStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 385;
                this.revokeStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 386;
                this.insertStatement();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 387;
                this.deleteStatement();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 388;
                this.updateStatement();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 389;
                this.upsertStatement();
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 390;
                this.showStatement();
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 391;
                this.addCommentStatement();
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 392;
                this.explainStatement();
                }
                break;
            case 18:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 393;
                this.setStatement();
                }
                break;
            case 19:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 394;
                this.shutdownStatement();
                }
                break;
            case 20:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 395;
                this.invalidateMetaStatement();
                }
                break;
            case 21:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 396;
                this.loadDataStatement();
                }
                break;
            case 22:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 397;
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
            this.state = 400;
            this.match(ImpalaSqlParser.KW_USE);
            this.state = 401;
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
            this.state = 411;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 403;
                this.createSchema();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 404;
                this.createRole();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 405;
                this.createAggregateFunction();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 406;
                this.createFunction();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 407;
                this.createView();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 408;
                this.createKuduTableAsSelect();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 409;
                this.createTableLike();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 410;
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
            this.state = 413;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 415;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 414;
                this.match(ImpalaSqlParser.KW_EXTERNAL);
                }
            }

            this.state = 417;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 419;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 418;
                this.ifNotExists();
                }
            }

            this.state = 421;
            this.tableNameCreate();
            this.state = 437;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
            case 1:
                {
                this.state = 422;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 423;
                this.columnDefinition();
                this.state = 428;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 424;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 425;
                        this.columnDefinition();
                        }
                        }
                    }
                    this.state = 430;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
                }
                this.state = 433;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 247) {
                    {
                    this.state = 431;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 432;
                    this.constraintSpecification();
                    }
                }

                this.state = 435;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            }
            this.state = 445;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 439;
                this.match(ImpalaSqlParser.KW_PARTITIONED);
                this.state = 440;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 443;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
                case 1:
                    {
                    this.state = 441;
                    this.columnAliases();
                    }
                    break;
                case 2:
                    {
                    this.state = 442;
                    this.partitionedBy();
                    }
                    break;
                }
                }
            }

            this.state = 447;
            this.createCommonItem();
            this.state = 450;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9) {
                {
                this.state = 448;
                this.match(ImpalaSqlParser.KW_AS);
                this.state = 449;
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
            this.state = 452;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 454;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 453;
                this.match(ImpalaSqlParser.KW_EXTERNAL);
                }
            }

            this.state = 456;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 458;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 457;
                this.ifNotExists();
                }
            }

            this.state = 460;
            this.tableNameCreate();
            this.state = 461;
            this.match(ImpalaSqlParser.KW_LIKE);
            this.state = 465;
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
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.IDENTIFIER:
            case ImpalaSqlParser.DIGIT_IDENTIFIER:
            case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
                {
                this.state = 462;
                this.tableNamePath();
                }
                break;
            case ImpalaSqlParser.KW_PARQUET:
                {
                this.state = 463;
                this.match(ImpalaSqlParser.KW_PARQUET);
                this.state = 464;
                localContext._parquet = this.stringLiteral();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 470;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 467;
                this.match(ImpalaSqlParser.KW_PARTITIONED);
                this.state = 468;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 469;
                this.partitionedBy();
                }
            }

            this.state = 472;
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
            this.state = 474;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 476;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 475;
                this.match(ImpalaSqlParser.KW_EXTERNAL);
                }
            }

            this.state = 478;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 480;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 479;
                this.ifNotExists();
                }
            }

            this.state = 482;
            this.tableNameCreate();
            this.state = 500;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 249) {
                {
                this.state = 483;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 484;
                this.kuduTableElement();
                this.state = 489;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 485;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 486;
                        this.kuduTableElement();
                        }
                        }
                    }
                    this.state = 491;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
                }
                this.state = 496;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 247) {
                    {
                    this.state = 492;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 493;
                    this.match(ImpalaSqlParser.KW_PRIMARY);
                    this.state = 494;
                    this.match(ImpalaSqlParser.KW_KEY);
                    this.state = 495;
                    this.columnAliases();
                    }
                }

                this.state = 498;
                this.match(ImpalaSqlParser.RPAREN);
                }
            }

            this.state = 507;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 151) {
                {
                this.state = 502;
                this.match(ImpalaSqlParser.KW_PRIMARY);
                this.state = 503;
                this.match(ImpalaSqlParser.KW_KEY);
                this.state = 505;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 249) {
                    {
                    this.state = 504;
                    this.columnAliases();
                    }
                }

                }
            }

            this.state = 512;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 146) {
                {
                this.state = 509;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 510;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 511;
                this.kuduPartitionClause();
                }
            }

            this.state = 516;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 514;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 515;
                this.stringLiteral();
                }
            }

            this.state = 518;
            this.match(ImpalaSqlParser.KW_STORED);
            this.state = 519;
            this.match(ImpalaSqlParser.KW_AS);
            this.state = 520;
            this.match(ImpalaSqlParser.KW_KUDU);
            this.state = 523;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 25) {
                {
                this.state = 521;
                this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
                this.state = 522;
                localContext._tblProp = this.properties();
                }
            }

            this.state = 527;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9) {
                {
                this.state = 525;
                this.match(ImpalaSqlParser.KW_AS);
                this.state = 526;
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
            this.state = 529;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 530;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 532;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 531;
                this.ifNotExists();
                }
            }

            this.state = 534;
            this.viewNameCreate();
            this.state = 536;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 249) {
                {
                this.state = 535;
                this.viewColumns();
                }
            }

            this.state = 540;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 538;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 539;
                this.stringLiteral();
                }
            }

            this.state = 544;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 25) {
                {
                this.state = 542;
                this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
                this.state = 543;
                localContext._tblProp = this.properties();
                }
            }

            this.state = 546;
            this.match(ImpalaSqlParser.KW_AS);
            this.state = 547;
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
            this.state = 549;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 550;
            _la = this.tokenStream.LA(1);
            if(!(_la === 46 || _la === 171)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 552;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 551;
                this.ifNotExists();
                }
            }

            this.state = 554;
            this.databaseNameCreate();
            this.state = 557;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context) ) {
            case 1:
                {
                this.state = 555;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 556;
                localContext._comment = this.stringLiteral();
                }
                break;
            }
            this.state = 561;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 24) {
                {
                this.state = 559;
                this.match(ImpalaSqlParser.KW_LOCATION);
                this.state = 560;
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
            this.state = 563;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 564;
            this.match(ImpalaSqlParser.KW_ROLE);
            this.state = 565;
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
            this.state = 567;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 569;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 12) {
                {
                this.state = 568;
                this.match(ImpalaSqlParser.KW_AGGREGATE);
                }
            }

            this.state = 571;
            this.match(ImpalaSqlParser.KW_FUNCTION);
            this.state = 573;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 572;
                this.ifNotExists();
                }
            }

            this.state = 575;
            this.functionNameCreate();
            this.state = 588;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 249) {
                {
                this.state = 576;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 585;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 8 || _la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3221520879) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & 16804099) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 74241) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 7873) !== 0)) {
                    {
                    this.state = 577;
                    this.type_(0);
                    this.state = 582;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 247) {
                        {
                        {
                        this.state = 578;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 579;
                        this.type_(0);
                        }
                        }
                        this.state = 584;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 587;
                this.match(ImpalaSqlParser.RPAREN);
                }
            }

            this.state = 590;
            this.match(ImpalaSqlParser.KW_RETURNS);
            this.state = 591;
            this.type_(0);
            this.state = 594;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 102) {
                {
                this.state = 592;
                this.match(ImpalaSqlParser.KW_INTERMEDIATE);
                this.state = 593;
                this.type_(0);
                }
            }

            this.state = 596;
            this.match(ImpalaSqlParser.KW_LOCATION);
            this.state = 597;
            this.match(ImpalaSqlParser.STRING);
            this.state = 601;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 104) {
                {
                this.state = 598;
                this.match(ImpalaSqlParser.KW_INIT_FN);
                this.state = 599;
                this.match(ImpalaSqlParser.EQ);
                this.state = 600;
                this.match(ImpalaSqlParser.STRING);
                }
            }

            this.state = 603;
            this.match(ImpalaSqlParser.KW_UPDATE_FN);
            this.state = 604;
            this.match(ImpalaSqlParser.EQ);
            this.state = 605;
            this.match(ImpalaSqlParser.STRING);
            this.state = 606;
            this.match(ImpalaSqlParser.KW_MERGE_FN);
            this.state = 607;
            this.match(ImpalaSqlParser.EQ);
            this.state = 608;
            this.match(ImpalaSqlParser.STRING);
            this.state = 612;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 18) {
                {
                this.state = 609;
                this.match(ImpalaSqlParser.KW_PREPARE_FN);
                this.state = 610;
                this.match(ImpalaSqlParser.EQ);
                this.state = 611;
                this.match(ImpalaSqlParser.STRING);
                }
            }

            this.state = 617;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 614;
                this.match(ImpalaSqlParser.KW_CLOSEFN);
                this.state = 615;
                this.match(ImpalaSqlParser.EQ);
                this.state = 616;
                this.match(ImpalaSqlParser.STRING);
                }
            }

            this.state = 622;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 189) {
                {
                this.state = 619;
                this.match(ImpalaSqlParser.KW_SERIALIZE_FN);
                this.state = 620;
                this.match(ImpalaSqlParser.EQ);
                this.state = 621;
                this.match(ImpalaSqlParser.STRING);
                }
            }

            this.state = 627;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 76) {
                {
                this.state = 624;
                this.match(ImpalaSqlParser.KW_FINALIZE_FN);
                this.state = 625;
                this.match(ImpalaSqlParser.EQ);
                this.state = 626;
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
            this.state = 629;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 630;
            this.match(ImpalaSqlParser.KW_FUNCTION);
            this.state = 632;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 631;
                this.ifNotExists();
                }
            }

            this.state = 634;
            this.functionNameCreate();
            this.state = 647;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 249) {
                {
                this.state = 635;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 644;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 8 || _la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3221520879) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & 16804099) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 74241) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 7873) !== 0)) {
                    {
                    this.state = 636;
                    this.type_(0);
                    this.state = 641;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 247) {
                        {
                        {
                        this.state = 637;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 638;
                        this.type_(0);
                        }
                        }
                        this.state = 643;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 646;
                this.match(ImpalaSqlParser.RPAREN);
                }
            }

            this.state = 651;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 161) {
                {
                this.state = 649;
                this.match(ImpalaSqlParser.KW_RETURNS);
                this.state = 650;
                this.type_(0);
                }
            }

            this.state = 653;
            this.match(ImpalaSqlParser.KW_LOCATION);
            this.state = 654;
            this.match(ImpalaSqlParser.STRING);
            this.state = 655;
            this.match(ImpalaSqlParser.KW_SYMBOL);
            this.state = 656;
            this.match(ImpalaSqlParser.EQ);
            this.state = 657;
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
            this.state = 677;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 50, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 659;
                this.alterDatabase();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 660;
                this.alterUnSetOrSetViewTblproperties();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 661;
                this.renameTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 662;
                this.alterViewOwner();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 663;
                this.alterView();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 664;
                this.renameView();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 665;
                this.dropPartitionByRangeOrValue();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 666;
                this.alterFormat();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 667;
                this.recoverPartitions();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 668;
                this.addPartitionByRangeOrValue();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 669;
                this.alterTableNonKuduOrKuduOnly();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 670;
                this.addSingleColumn();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 671;
                this.replaceOrAddColumns();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 672;
                this.changeColumnDefine();
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 673;
                this.alterStatsKey();
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 674;
                this.alterPartitionCache();
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 675;
                this.alterDropSingleColumn();
                }
                break;
            case 18:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 676;
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
            this.state = 679;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 680;
            this.match(ImpalaSqlParser.KW_DATABASE);
            this.state = 681;
            this.databaseNamePath();
            this.state = 682;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 683;
            this.match(ImpalaSqlParser.KW_OWNER);
            this.state = 684;
            _la = this.tokenStream.LA(1);
            if(!(_la === 167 || _la === 206)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 685;
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
            this.state = 687;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 688;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 689;
            this.tableNamePath();
            this.state = 690;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 691;
            this.match(ImpalaSqlParser.KW_COLUMN);
            this.state = 692;
            this.match(ImpalaSqlParser.KW_STATS);
            this.state = 693;
            this.columnNamePath();
            this.state = 694;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 695;
            this.statsKey();
            this.state = 696;
            this.match(ImpalaSqlParser.EQ);
            this.state = 697;
            this.stringLiteral();
            this.state = 703;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 247) {
                {
                this.state = 698;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 699;
                this.statsKey();
                this.state = 700;
                this.match(ImpalaSqlParser.EQ);
                this.state = 701;
                this.stringLiteral();
                }
            }

            this.state = 705;
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
            this.state = 707;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 708;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 709;
            this.tableNamePath();
            this.state = 712;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 146) {
                {
                this.state = 710;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 711;
                this.expression();
                }
            }

            this.state = 714;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 725;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_CACHED:
                {
                {
                this.state = 715;
                this.match(ImpalaSqlParser.KW_CACHED);
                this.state = 716;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 717;
                this.stringLiteral();
                this.state = 722;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 53, this.context) ) {
                case 1:
                    {
                    this.state = 718;
                    this.match(ImpalaSqlParser.KW_WITH);
                    this.state = 719;
                    this.match(ImpalaSqlParser.KW_REPLICATION);
                    this.state = 720;
                    this.match(ImpalaSqlParser.EQ);
                    this.state = 721;
                    this.number_();
                    }
                    break;
                }
                }
                }
                break;
            case ImpalaSqlParser.KW_UNCACHED:
                {
                this.state = 724;
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
            this.state = 727;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 728;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 729;
            this.tableNamePath();
            this.state = 730;
            this.match(ImpalaSqlParser.KW_CHANGE);
            this.state = 731;
            this.match(ImpalaSqlParser.KW_COLUMN);
            this.state = 732;
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
            this.state = 734;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 735;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 736;
            this.tableNamePath();
            this.state = 737;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 739;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
            case 1:
                {
                this.state = 738;
                this.match(ImpalaSqlParser.KW_COLUMN);
                }
                break;
            }
            this.state = 741;
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
            this.state = 743;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 744;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 745;
            this.tableNamePath();
            this.state = 746;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 747;
            this.match(ImpalaSqlParser.KW_OWNER);
            this.state = 748;
            _la = this.tokenStream.LA(1);
            if(!(_la === 167 || _la === 206)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 749;
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
            this.state = 751;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 752;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 753;
            this.tableNamePath();
            this.state = 759;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_REPLACE:
                {
                this.state = 754;
                this.match(ImpalaSqlParser.KW_REPLACE);
                }
                break;
            case ImpalaSqlParser.KW_ADD:
                {
                this.state = 755;
                this.match(ImpalaSqlParser.KW_ADD);
                this.state = 757;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                    this.state = 756;
                    this.ifNotExists();
                    }
                }

                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 761;
            this.match(ImpalaSqlParser.KW_COLUMNS);
            this.state = 762;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 763;
            this.columnSpecWithKudu();
            this.state = 768;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1 + 1) {
                    {
                    {
                    this.state = 764;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 765;
                    this.columnSpecWithKudu();
                    }
                    }
                }
                this.state = 770;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
            }
            this.state = 771;
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
            this.state = 773;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 774;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 775;
            this.tableNamePath();
            this.state = 776;
            this.match(ImpalaSqlParser.KW_ADD);
            this.state = 777;
            this.match(ImpalaSqlParser.KW_COLUMN);
            this.state = 779;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 778;
                this.ifNotExists();
                }
            }

            this.state = 781;
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
            this.state = 783;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 784;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 785;
            this.tableNamePath();
            this.state = 786;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 788;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 60, this.context) ) {
            case 1:
                {
                this.state = 787;
                this.match(ImpalaSqlParser.KW_COLUMN);
                }
                break;
            }
            this.state = 790;
            this.columnNamePath();
            this.state = 799;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_SET:
                {
                this.state = 791;
                this.match(ImpalaSqlParser.KW_SET);
                this.state = 795;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.KW_BLOCK_SIZE:
                case ImpalaSqlParser.KW_COMPRESSION:
                case ImpalaSqlParser.KW_DEFAULT:
                case ImpalaSqlParser.KW_ENCODING:
                    {
                    this.state = 792;
                    this.kuduStorageAttr();
                    }
                    break;
                case ImpalaSqlParser.KW_COMMENT:
                    {
                    this.state = 793;
                    this.match(ImpalaSqlParser.KW_COMMENT);
                    this.state = 794;
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
                this.state = 797;
                this.match(ImpalaSqlParser.KW_DROP);
                this.state = 798;
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
            this.state = 801;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 802;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 803;
            this.tableNamePath();
            this.state = 804;
            this.match(ImpalaSqlParser.KW_ADD);
            this.state = 806;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 805;
                this.ifNotExists();
                }
            }

            this.state = 820;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_PARTITION:
                {
                this.state = 808;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 809;
                this.expression();
                this.state = 812;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 24) {
                    {
                    this.state = 810;
                    this.match(ImpalaSqlParser.KW_LOCATION);
                    this.state = 811;
                    this.stringLiteral();
                    }
                }

                this.state = 815;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 30 || _la === 199) {
                    {
                    this.state = 814;
                    this.cacheSpec();
                    }
                }

                }
                break;
            case ImpalaSqlParser.KW_RANGE:
                {
                this.state = 817;
                this.match(ImpalaSqlParser.KW_RANGE);
                this.state = 818;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 819;
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
            this.state = 822;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 823;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 824;
            this.tableNamePath();
            this.state = 827;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 146) {
                {
                this.state = 825;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 826;
                this.expression();
                }
            }

            this.state = 829;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 841;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_FILEFORMAT:
                {
                {
                this.state = 830;
                this.match(ImpalaSqlParser.KW_FILEFORMAT);
                this.state = 831;
                this.fileFormat();
                }
                }
                break;
            case ImpalaSqlParser.KW_ROW:
                {
                {
                this.state = 832;
                this.match(ImpalaSqlParser.KW_ROW);
                this.state = 833;
                this.match(ImpalaSqlParser.KW_FORMAT);
                this.state = 834;
                this.rowFormat();
                }
                }
                break;
            case ImpalaSqlParser.KW_LOCATION:
                {
                {
                this.state = 835;
                this.match(ImpalaSqlParser.KW_LOCATION);
                this.state = 836;
                this.stringLiteral();
                }
                }
                break;
            case ImpalaSqlParser.KW_TBLPROPERTIES:
                {
                {
                this.state = 837;
                this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
                this.state = 838;
                localContext._tblProp = this.properties();
                }
                }
                break;
            case ImpalaSqlParser.KW_SERDEPROPERTIES:
                {
                {
                this.state = 839;
                this.match(ImpalaSqlParser.KW_SERDEPROPERTIES);
                this.state = 840;
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
            this.state = 843;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 844;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 845;
            this.tableNamePath();
            this.state = 846;
            this.match(ImpalaSqlParser.KW_RECOVER);
            this.state = 847;
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
            this.state = 849;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 850;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 851;
            this.tableNamePath();
            this.state = 852;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 854;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 853;
                this.ifExists();
                }
            }

            this.state = 864;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_PARTITION:
                {
                this.state = 856;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 857;
                this.expression();
                this.state = 859;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 22) {
                    {
                    this.state = 858;
                    this.match(ImpalaSqlParser.KW_PURGE);
                    }
                }

                }
                break;
            case ImpalaSqlParser.KW_RANGE:
                {
                this.state = 861;
                this.match(ImpalaSqlParser.KW_RANGE);
                this.state = 862;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 863;
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
            this.state = 866;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 867;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 868;
            this.viewNamePath();
            this.state = 870;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 249) {
                {
                this.state = 869;
                this.viewColumns();
                }
            }

            this.state = 872;
            this.match(ImpalaSqlParser.KW_AS);
            this.state = 873;
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
            this.state = 875;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 876;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 877;
            this.viewNamePath();
            this.state = 878;
            this.match(ImpalaSqlParser.KW_RENAME);
            this.state = 879;
            this.match(ImpalaSqlParser.KW_TO);
            this.state = 880;
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
            this.state = 882;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 883;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 884;
            this.viewNamePath();
            this.state = 885;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 886;
            this.match(ImpalaSqlParser.KW_OWNER);
            this.state = 887;
            _la = this.tokenStream.LA(1);
            if(!(_la === 167 || _la === 206)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 888;
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
            this.state = 890;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 891;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 892;
            this.tableNamePath();
            this.state = 893;
            this.match(ImpalaSqlParser.KW_RENAME);
            this.state = 894;
            this.match(ImpalaSqlParser.KW_TO);
            this.state = 895;
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
            this.state = 897;
            this.match(ImpalaSqlParser.KW_ALTER);
            this.state = 898;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 899;
            this.viewNamePath();
            this.state = 900;
            _la = this.tokenStream.LA(1);
            if(!(_la === 177 || _la === 204)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 901;
            this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
            this.state = 902;
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
            this.state = 904;
            this.match(ImpalaSqlParser.KW_TRUNCATE);
            this.state = 906;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 190) {
                {
                this.state = 905;
                this.match(ImpalaSqlParser.KW_TABLE);
                }
            }

            this.state = 909;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 908;
                this.ifExists();
                }
            }

            this.state = 911;
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
            this.state = 913;
            this.match(ImpalaSqlParser.KW_DESCRIBE);
            this.state = 915;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 46) {
                {
                this.state = 914;
                this.match(ImpalaSqlParser.KW_DATABASE);
                }
            }

            this.state = 918;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 69 || _la === 80) {
                {
                this.state = 917;
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

            this.state = 920;
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
            this.state = 924;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 77, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 922;
                this.computeStats();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 923;
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
            this.state = 926;
            this.match(ImpalaSqlParser.KW_COMPUTE);
            this.state = 927;
            this.match(ImpalaSqlParser.KW_STATS);
            this.state = 928;
            this.tableNamePath();
            this.state = 930;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context) ) {
            case 1:
                {
                this.state = 929;
                this.columnAliases();
                }
                break;
            }
            this.state = 944;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 192) {
                {
                this.state = 932;
                this.match(ImpalaSqlParser.KW_TABLESAMPLE);
                this.state = 933;
                this.match(ImpalaSqlParser.KW_SYSTEM);
                this.state = 934;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 935;
                this.number_();
                this.state = 936;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 942;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 158) {
                    {
                    this.state = 937;
                    this.match(ImpalaSqlParser.KW_REPEATABLE);
                    this.state = 938;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 939;
                    this.number_();
                    this.state = 940;
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
            this.state = 946;
            this.match(ImpalaSqlParser.KW_COMPUTE);
            this.state = 947;
            this.match(ImpalaSqlParser.KW_INCREMENTAL);
            this.state = 948;
            this.match(ImpalaSqlParser.KW_STATS);
            this.state = 949;
            this.tableNamePath();
            this.state = 952;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 146) {
                {
                this.state = 950;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 951;
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
    public dropStatement(): DropStatementContext {
        let localContext = new DropStatementContext(this.context, this.state);
        this.enterRule(localContext, 74, ImpalaSqlParser.RULE_dropStatement);
        try {
            this.state = 960;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 954;
                this.dropRole();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 955;
                this.dropFunction();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 956;
                this.dropIncrementalStats();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 957;
                this.dropView();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 958;
                this.dropTable();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 959;
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
            this.state = 962;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 963;
            _la = this.tokenStream.LA(1);
            if(!(_la === 46 || _la === 171)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 965;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 964;
                this.ifExists();
                }
            }

            this.state = 967;
            this.databaseNamePath();
            this.state = 969;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 27 || _la === 160) {
                {
                this.state = 968;
                _la = this.tokenStream.LA(1);
                if(!(_la === 27 || _la === 160)) {
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
            this.state = 971;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 972;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 974;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 973;
                this.ifExists();
                }
            }

            this.state = 976;
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
            this.state = 978;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 979;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 981;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 980;
                this.ifExists();
                }
            }

            this.state = 983;
            this.tableNamePath();
            this.state = 985;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 22) {
                {
                this.state = 984;
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
            this.state = 987;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 989;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 96) {
                {
                this.state = 988;
                this.match(ImpalaSqlParser.KW_INCREMENTAL);
                }
            }

            this.state = 991;
            this.match(ImpalaSqlParser.KW_STATS);
            this.state = 992;
            this.tableNamePath();
            this.state = 995;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 146) {
                {
                this.state = 993;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 994;
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
            this.state = 997;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 999;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 12) {
                {
                this.state = 998;
                this.match(ImpalaSqlParser.KW_AGGREGATE);
                }
            }

            this.state = 1001;
            this.match(ImpalaSqlParser.KW_FUNCTION);
            this.state = 1003;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 93) {
                {
                this.state = 1002;
                this.ifExists();
                }
            }

            this.state = 1005;
            this.functionNamePath();
            this.state = 1018;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 94, this.context) ) {
            case 1:
                {
                this.state = 1006;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1015;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 8 || _la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3221520879) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & 16804099) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 74241) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 7873) !== 0)) {
                    {
                    this.state = 1007;
                    this.type_(0);
                    this.state = 1012;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 247) {
                        {
                        {
                        this.state = 1008;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1009;
                        this.type_(0);
                        }
                        }
                        this.state = 1014;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1017;
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
            this.state = 1020;
            this.match(ImpalaSqlParser.KW_DROP);
            this.state = 1021;
            this.match(ImpalaSqlParser.KW_ROLE);
            this.state = 1022;
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
            this.state = 1026;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 95, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1024;
                this.grantRole();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1025;
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
            this.state = 1028;
            this.match(ImpalaSqlParser.KW_GRANT);
            this.state = 1029;
            this.match(ImpalaSqlParser.KW_ROLE);
            this.state = 1030;
            this.identifier();
            this.state = 1031;
            this.match(ImpalaSqlParser.KW_TO);
            this.state = 1032;
            this.match(ImpalaSqlParser.KW_GROUP);
            this.state = 1033;
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
            this.state = 1035;
            this.match(ImpalaSqlParser.KW_GRANT);
            this.state = 1036;
            this.privilege();
            this.state = 1037;
            this.match(ImpalaSqlParser.KW_ON);
            this.state = 1038;
            this.objectType();
            this.state = 1040;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 268959761) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3221520879) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & 16802051) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 74241) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 705) !== 0)) {
                {
                this.state = 1039;
                this.qualifiedName();
                }
            }

            this.state = 1042;
            this.match(ImpalaSqlParser.KW_TO);
            this.state = 1043;
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
            this.state = 1047;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 97, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1045;
                this.revokeRole();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1046;
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
            this.state = 1049;
            this.match(ImpalaSqlParser.KW_REVOKE);
            this.state = 1050;
            this.match(ImpalaSqlParser.KW_ROLE);
            this.state = 1051;
            this.identifier();
            this.state = 1052;
            this.match(ImpalaSqlParser.KW_FROM);
            this.state = 1053;
            this.match(ImpalaSqlParser.KW_GROUP);
            this.state = 1054;
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
            this.state = 1056;
            this.match(ImpalaSqlParser.KW_REVOKE);
            this.state = 1060;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 86) {
                {
                this.state = 1057;
                this.match(ImpalaSqlParser.KW_GRANT);
                this.state = 1058;
                this.match(ImpalaSqlParser.KW_OPTION);
                this.state = 1059;
                this.match(ImpalaSqlParser.KW_FOR);
                }
            }

            this.state = 1062;
            this.privilege();
            this.state = 1063;
            this.match(ImpalaSqlParser.KW_ON);
            this.state = 1064;
            this.objectType();
            this.state = 1066;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 268959761) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3221520879) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & 16802051) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 74241) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 705) !== 0)) {
                {
                this.state = 1065;
                this.qualifiedName();
                }
            }

            this.state = 1068;
            this.match(ImpalaSqlParser.KW_FROM);
            this.state = 1074;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 101, this.context) ) {
            case 1:
                {
                this.state = 1069;
                localContext._grantee = this.principal();
                }
                break;
            case 2:
                {
                this.state = 1071;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 167) {
                    {
                    this.state = 1070;
                    this.match(ImpalaSqlParser.KW_ROLE);
                    }
                }

                this.state = 1073;
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
            this.state = 1077;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 218) {
                {
                this.state = 1076;
                this.with_();
                }
            }

            this.state = 1079;
            this.match(ImpalaSqlParser.KW_INSERT);
            this.state = 1080;
            _la = this.tokenStream.LA(1);
            if(!(_la === 103 || _la === 145)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1082;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 190) {
                {
                this.state = 1081;
                this.match(ImpalaSqlParser.KW_TABLE);
                }
            }

            this.state = 1084;
            this.tableNamePath();
            this.state = 1086;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 104, this.context) ) {
            case 1:
                {
                this.state = 1085;
                this.columnAliases();
                }
                break;
            }
            this.state = 1100;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 146) {
                {
                this.state = 1088;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 1089;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1090;
                this.expression();
                this.state = 1095;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 247) {
                    {
                    {
                    this.state = 1091;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1092;
                    this.expression();
                    }
                    }
                    this.state = 1097;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1098;
                this.match(ImpalaSqlParser.RPAREN);
                }
            }

            this.state = 1102;
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
            this.state = 1106;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 107, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1104;
                this.delete_();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1105;
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
            this.state = 1108;
            this.match(ImpalaSqlParser.KW_DELETE);
            this.state = 1110;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 82) {
                {
                this.state = 1109;
                this.match(ImpalaSqlParser.KW_FROM);
                }
            }

            this.state = 1112;
            this.tableNamePath();
            this.state = 1115;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 217) {
                {
                this.state = 1113;
                this.match(ImpalaSqlParser.KW_WHERE);
                this.state = 1114;
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
            this.state = 1117;
            this.match(ImpalaSqlParser.KW_DELETE);
            this.state = 1118;
            this.tableNamePath();
            this.state = 1123;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9 || _la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 268959761) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3221520879) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & 16802051) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 74241) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 705) !== 0)) {
                {
                this.state = 1120;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                    this.state = 1119;
                    this.match(ImpalaSqlParser.KW_AS);
                    }
                }

                this.state = 1122;
                this.identifier();
                }
            }

            this.state = 1125;
            this.match(ImpalaSqlParser.KW_FROM);
            this.state = 1134;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 113, this.context) ) {
            case 1:
                {
                this.state = 1126;
                this.relation(0);
                this.state = 1131;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 247) {
                    {
                    {
                    this.state = 1127;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1128;
                    this.relation(0);
                    }
                    }
                    this.state = 1133;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            }
            this.state = 1138;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 217) {
                {
                this.state = 1136;
                this.match(ImpalaSqlParser.KW_WHERE);
                this.state = 1137;
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
            this.state = 1140;
            this.match(ImpalaSqlParser.KW_UPDATE);
            this.state = 1141;
            this.tableNamePath();
            this.state = 1142;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 1143;
            this.assignmentList();
            this.state = 1153;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 82) {
                {
                this.state = 1144;
                this.match(ImpalaSqlParser.KW_FROM);
                this.state = 1145;
                this.relation(0);
                this.state = 1150;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 247) {
                    {
                    {
                    this.state = 1146;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1147;
                    this.relation(0);
                    }
                    }
                    this.state = 1152;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1157;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 217) {
                {
                this.state = 1155;
                this.match(ImpalaSqlParser.KW_WHERE);
                this.state = 1156;
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
            this.state = 1159;
            this.match(ImpalaSqlParser.KW_UPSERT);
            this.state = 1160;
            this.match(ImpalaSqlParser.KW_INTO);
            this.state = 1162;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 190) {
                {
                this.state = 1161;
                this.match(ImpalaSqlParser.KW_TABLE);
                }
            }

            this.state = 1164;
            this.tableNamePath();
            this.state = 1166;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 119, this.context) ) {
            case 1:
                {
                this.state = 1165;
                this.columnAliases();
                }
                break;
            }
            this.state = 1168;
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
            this.state = 1182;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 120, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1170;
                this.showRoles();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1171;
                this.showRoleGrant();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1172;
                this.showGrants();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1173;
                this.showFiles();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1174;
                this.showPartitions();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1175;
                this.showColumnStats();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1176;
                this.showTableStats();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1177;
                this.showCreateView();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1178;
                this.showCreateTable();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1179;
                this.showFunctions();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 1180;
                this.showTables();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 1181;
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
            this.state = 1184;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1185;
            _la = this.tokenStream.LA(1);
            if(!(_la === 47 || _la === 172)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1197;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115 || _la === 258 || _la === 259) {
                {
                this.state = 1187;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 1186;
                    this.match(ImpalaSqlParser.KW_LIKE);
                    }
                }

                this.state = 1189;
                localContext._pattern = this.stringLiteral();
                this.state = 1194;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 255) {
                    {
                    {
                    this.state = 1190;
                    this.match(ImpalaSqlParser.BITWISEOR);
                    this.state = 1191;
                    this.stringLiteral();
                    }
                    }
                    this.state = 1196;
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
            this.state = 1199;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1200;
            this.match(ImpalaSqlParser.KW_TABLES);
            this.state = 1203;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 94) {
                {
                this.state = 1201;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 1202;
                this.tableNamePath();
                }
            }

            this.state = 1216;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115 || _la === 258 || _la === 259) {
                {
                this.state = 1206;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 1205;
                    this.match(ImpalaSqlParser.KW_LIKE);
                    }
                }

                this.state = 1208;
                localContext._pattern = this.stringLiteral();
                this.state = 1213;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 255) {
                    {
                    {
                    this.state = 1209;
                    this.match(ImpalaSqlParser.BITWISEOR);
                    this.state = 1210;
                    this.stringLiteral();
                    }
                    }
                    this.state = 1215;
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
            this.state = 1218;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1220;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3 || _la === 12) {
                {
                this.state = 1219;
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

            this.state = 1222;
            this.match(ImpalaSqlParser.KW_FUNCTIONS);
            this.state = 1225;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 94) {
                {
                this.state = 1223;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 1224;
                this.databaseNamePath();
                }
            }

            this.state = 1238;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115 || _la === 258 || _la === 259) {
                {
                this.state = 1228;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 1227;
                    this.match(ImpalaSqlParser.KW_LIKE);
                    }
                }

                this.state = 1230;
                localContext._pattern = this.stringLiteral();
                this.state = 1235;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 255) {
                    {
                    {
                    this.state = 1231;
                    this.match(ImpalaSqlParser.BITWISEOR);
                    this.state = 1232;
                    this.stringLiteral();
                    }
                    }
                    this.state = 1237;
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
            this.state = 1240;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1241;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 1242;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 1243;
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
            this.state = 1245;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1246;
            this.match(ImpalaSqlParser.KW_CREATE);
            this.state = 1247;
            this.match(ImpalaSqlParser.KW_VIEW);
            this.state = 1248;
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
            this.state = 1250;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1251;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 1252;
            this.match(ImpalaSqlParser.KW_STATS);
            this.state = 1253;
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
            this.state = 1255;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1256;
            this.match(ImpalaSqlParser.KW_COLUMN);
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
    public showPartitions(): ShowPartitionsContext {
        let localContext = new ShowPartitionsContext(this.context, this.state);
        this.enterRule(localContext, 128, ImpalaSqlParser.RULE_showPartitions);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1260;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1262;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 155) {
                {
                this.state = 1261;
                this.match(ImpalaSqlParser.KW_RANGE);
                }
            }

            this.state = 1264;
            this.match(ImpalaSqlParser.KW_PARTITIONS);
            this.state = 1265;
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
            this.state = 1267;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1268;
            this.match(ImpalaSqlParser.KW_FILES);
            this.state = 1269;
            this.match(ImpalaSqlParser.KW_IN);
            this.state = 1270;
            this.tableNamePath();
            this.state = 1280;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 146) {
                {
                this.state = 1271;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 1272;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1273;
                this.expression();
                this.state = 1276;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 247) {
                    {
                    this.state = 1274;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1275;
                    this.expression();
                    }
                }

                this.state = 1278;
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
            this.state = 1282;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1284;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 39) {
                {
                this.state = 1283;
                this.match(ImpalaSqlParser.KW_CURRENT);
                }
            }

            this.state = 1286;
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
            this.state = 1288;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1289;
            this.match(ImpalaSqlParser.KW_ROLE);
            this.state = 1290;
            this.match(ImpalaSqlParser.KW_GRANT);
            this.state = 1291;
            this.match(ImpalaSqlParser.KW_GROUP);
            this.state = 1292;
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
            this.state = 1308;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 139, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1294;
                this.showDatabaseGrant();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1295;
                this.showTableGrant();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1296;
                this.showColumnGrant();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1297;
                this.match(ImpalaSqlParser.KW_SHOW);
                this.state = 1298;
                this.match(ImpalaSqlParser.KW_GRANT);
                this.state = 1299;
                _la = this.tokenStream.LA(1);
                if(!(_la === 87 || _la === 167 || _la === 206)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1300;
                this.identifier();
                this.state = 1306;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 137) {
                    {
                    this.state = 1301;
                    this.match(ImpalaSqlParser.KW_ON);
                    this.state = 1302;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 179 || _la === 211)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1304;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 268959761) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3221520879) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & 16802051) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 74241) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 705) !== 0)) {
                        {
                        this.state = 1303;
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
            this.state = 1310;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1311;
            this.match(ImpalaSqlParser.KW_GRANT);
            this.state = 1312;
            _la = this.tokenStream.LA(1);
            if(!(_la === 87 || _la === 167 || _la === 206)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1313;
            this.identifier();
            this.state = 1319;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 137) {
                {
                this.state = 1314;
                this.match(ImpalaSqlParser.KW_ON);
                this.state = 1315;
                this.match(ImpalaSqlParser.KW_DATABASE);
                this.state = 1317;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 268959761) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3221520879) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & 16802051) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 74241) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 705) !== 0)) {
                    {
                    this.state = 1316;
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
            this.state = 1321;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1322;
            this.match(ImpalaSqlParser.KW_GRANT);
            this.state = 1323;
            _la = this.tokenStream.LA(1);
            if(!(_la === 87 || _la === 167 || _la === 206)) {
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
            if (_la === 137) {
                {
                this.state = 1325;
                this.match(ImpalaSqlParser.KW_ON);
                this.state = 1326;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 1328;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 268959761) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3221520879) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & 16802051) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 74241) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 705) !== 0)) {
                    {
                    this.state = 1327;
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
            this.state = 1332;
            this.match(ImpalaSqlParser.KW_SHOW);
            this.state = 1333;
            this.match(ImpalaSqlParser.KW_GRANT);
            this.state = 1334;
            _la = this.tokenStream.LA(1);
            if(!(_la === 87 || _la === 167 || _la === 206)) {
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
            if (_la === 137) {
                {
                this.state = 1336;
                this.match(ImpalaSqlParser.KW_ON);
                this.state = 1337;
                this.match(ImpalaSqlParser.KW_COLUMN);
                this.state = 1339;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 144, this.context) ) {
                case 1:
                    {
                    this.state = 1338;
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
            this.state = 1346;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 146, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1343;
                this.addDatabaseComments();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1344;
                this.addTableComments();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1345;
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
            this.state = 1348;
            this.match(ImpalaSqlParser.KW_COMMENT);
            this.state = 1349;
            this.match(ImpalaSqlParser.KW_ON);
            this.state = 1350;
            this.match(ImpalaSqlParser.KW_DATABASE);
            this.state = 1351;
            this.databaseNamePath();
            this.state = 1352;
            this.match(ImpalaSqlParser.KW_IS);
            this.state = 1355;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.UNICODE_STRING:
                {
                this.state = 1353;
                this.stringLiteral();
                }
                break;
            case ImpalaSqlParser.KW_NULL:
                {
                this.state = 1354;
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
            this.state = 1357;
            this.match(ImpalaSqlParser.KW_COMMENT);
            this.state = 1358;
            this.match(ImpalaSqlParser.KW_ON);
            this.state = 1359;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 1360;
            this.tableNamePath();
            this.state = 1361;
            this.match(ImpalaSqlParser.KW_IS);
            this.state = 1364;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.UNICODE_STRING:
                {
                this.state = 1362;
                this.stringLiteral();
                }
                break;
            case ImpalaSqlParser.KW_NULL:
                {
                this.state = 1363;
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
            this.state = 1366;
            this.match(ImpalaSqlParser.KW_COMMENT);
            this.state = 1367;
            this.match(ImpalaSqlParser.KW_ON);
            this.state = 1368;
            this.match(ImpalaSqlParser.KW_COLUMN);
            this.state = 1369;
            this.columnNamePath();
            this.state = 1370;
            this.match(ImpalaSqlParser.KW_IS);
            this.state = 1373;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.UNICODE_STRING:
                {
                this.state = 1371;
                this.stringLiteral();
                }
                break;
            case ImpalaSqlParser.KW_NULL:
                {
                this.state = 1372;
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
            this.state = 1375;
            this.match(ImpalaSqlParser.KW_EXPLAIN);
            this.state = 1376;
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
            this.state = 1378;
            this.match(ImpalaSqlParser.KW_SET);
            this.state = 1384;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_ALL:
                {
                this.state = 1379;
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
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.IDENTIFIER:
            case ImpalaSqlParser.DIGIT_IDENTIFIER:
            case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
                {
                this.state = 1380;
                this.identifier();
                this.state = 1381;
                this.match(ImpalaSqlParser.EQ);
                this.state = 1382;
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
            this.state = 1386;
            this.match(ImpalaSqlParser.COLON);
            this.state = 1387;
            this.match(ImpalaSqlParser.KW_SHUTDOWN);
            this.state = 1388;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 1398;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 153, this.context) ) {
            case 1:
                {
                this.state = 1390;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 258 || _la === 259) {
                    {
                    this.state = 1389;
                    this.stringLiteral();
                    }
                }

                }
                break;
            case 2:
                {
                this.state = 1392;
                this.stringLiteral();
                this.state = 1395;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 247) {
                    {
                    this.state = 1393;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1394;
                    this.expression();
                    }
                }

                }
                break;
            case 3:
                {
                this.state = 1397;
                this.expression();
                }
                break;
            }
            this.state = 1400;
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
            this.state = 1402;
            this.match(ImpalaSqlParser.KW_INVALIDATE);
            this.state = 1403;
            this.match(ImpalaSqlParser.KW_METADATA);
            this.state = 1404;
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
            this.state = 1406;
            this.match(ImpalaSqlParser.KW_LOAD);
            this.state = 1407;
            this.match(ImpalaSqlParser.KW_DATA);
            this.state = 1408;
            this.match(ImpalaSqlParser.KW_INPATH);
            this.state = 1409;
            this.match(ImpalaSqlParser.STRING);
            this.state = 1411;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 145) {
                {
                this.state = 1410;
                this.match(ImpalaSqlParser.KW_OVERWRITE);
                }
            }

            this.state = 1413;
            this.match(ImpalaSqlParser.KW_INTO);
            this.state = 1414;
            this.match(ImpalaSqlParser.KW_TABLE);
            this.state = 1415;
            this.tableNamePath();
            this.state = 1425;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 146) {
                {
                this.state = 1416;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 1417;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1418;
                this.expression();
                this.state = 1421;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 247) {
                    {
                    this.state = 1419;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1420;
                    this.expression();
                    }
                }

                this.state = 1423;
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
            this.state = 1430;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 157, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1427;
                this.refreshMeta();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1428;
                this.refreshAuth();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1429;
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
            this.state = 1432;
            this.match(ImpalaSqlParser.KW_REFRESH);
            this.state = 1433;
            this.tableNamePath();
            this.state = 1446;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 146) {
                {
                this.state = 1434;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 1435;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1436;
                this.expression();
                this.state = 1441;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 158, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 1437;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1438;
                        this.expression();
                        }
                        }
                    }
                    this.state = 1443;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 158, this.context);
                }
                this.state = 1444;
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
            this.state = 1448;
            this.match(ImpalaSqlParser.KW_REFRESH);
            this.state = 1449;
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
            this.state = 1451;
            this.match(ImpalaSqlParser.KW_REFRESH);
            this.state = 1452;
            this.match(ImpalaSqlParser.KW_FUNCTIONS);
            this.state = 1453;
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
            this.state = 1455;
            this.match(ImpalaSqlParser.KW_IF);
            this.state = 1456;
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
            this.state = 1458;
            this.match(ImpalaSqlParser.KW_IF);
            this.state = 1459;
            this.match(ImpalaSqlParser.KW_NOT);
            this.state = 1460;
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
            this.state = 1462;
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
            this.state = 1464;
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
            this.state = 1466;
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
            this.state = 1468;
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
            this.state = 1470;
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
            this.state = 1472;
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
            this.state = 1474;
            this.identifier();
            this.state = 1479;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 160, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1475;
                    this.match(ImpalaSqlParser.DOT);
                    this.state = 1476;
                    this.identifier();
                    }
                    }
                }
                this.state = 1481;
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
            this.state = 1482;
            this.identifier();
            this.state = 1487;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 161, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1483;
                    this.match(ImpalaSqlParser.DOT);
                    this.state = 1484;
                    this.identifier();
                    }
                    }
                }
                this.state = 1489;
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
            this.state = 1492;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 162, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1490;
                this.reservedKeywordsUsedAsFuncName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1491;
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
            this.state = 1496;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 163, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1494;
                this.qualifiedName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1495;
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
            this.state = 1500;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 164, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1498;
                this.tableNamePath();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1499;
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
            this.state = 1505;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 21) {
                {
                this.state = 1502;
                this.match(ImpalaSqlParser.KW_SORT);
                this.state = 1503;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 1504;
                this.columnAliases();
                }
            }

            this.state = 1509;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 166, this.context) ) {
            case 1:
                {
                this.state = 1507;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 1508;
                localContext._comment = this.stringLiteral();
                }
                break;
            }
            this.state = 1514;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 169) {
                {
                this.state = 1511;
                this.match(ImpalaSqlParser.KW_ROW);
                this.state = 1512;
                this.match(ImpalaSqlParser.KW_FORMAT);
                this.state = 1513;
                this.rowFormat();
                }
            }

            this.state = 1519;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 168, this.context) ) {
            case 1:
                {
                this.state = 1516;
                this.match(ImpalaSqlParser.KW_WITH);
                this.state = 1517;
                this.match(ImpalaSqlParser.KW_SERDEPROPERTIES);
                this.state = 1518;
                localContext._serdProp = this.properties();
                }
                break;
            }
            this.state = 1524;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 23) {
                {
                this.state = 1521;
                this.match(ImpalaSqlParser.KW_STORED);
                this.state = 1522;
                this.match(ImpalaSqlParser.KW_AS);
                this.state = 1523;
                this.fileFormat();
                }
            }

            this.state = 1528;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 24) {
                {
                this.state = 1526;
                this.match(ImpalaSqlParser.KW_LOCATION);
                this.state = 1527;
                localContext._location = this.stringLiteral();
                }
            }

            this.state = 1540;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_CACHED:
                {
                this.state = 1530;
                this.match(ImpalaSqlParser.KW_CACHED);
                this.state = 1531;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 1532;
                localContext._cacheName = this.qualifiedName();
                this.state = 1537;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 171, this.context) ) {
                case 1:
                    {
                    this.state = 1533;
                    this.match(ImpalaSqlParser.KW_WITH);
                    this.state = 1534;
                    this.match(ImpalaSqlParser.KW_REPLICATION);
                    this.state = 1535;
                    this.match(ImpalaSqlParser.EQ);
                    this.state = 1536;
                    this.match(ImpalaSqlParser.INTEGER_VALUE);
                    }
                    break;
                }
                }
                break;
            case ImpalaSqlParser.KW_UNCACHED:
                {
                this.state = 1539;
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
            this.state = 1544;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 25) {
                {
                this.state = 1542;
                this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
                this.state = 1543;
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
            this.state = 1546;
            this.assignmentItem();
            this.state = 1551;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 247) {
                {
                {
                this.state = 1547;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1548;
                this.assignmentItem();
                }
                }
                this.state = 1553;
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
            this.state = 1554;
            this.qualifiedName();
            this.state = 1555;
            this.match(ImpalaSqlParser.EQ);
            this.state = 1556;
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
            this.state = 1558;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 1559;
            this.columnNamePathCreate();
            this.state = 1562;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 1560;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 1561;
                this.stringLiteral();
                }
            }

            this.state = 1572;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 247) {
                {
                {
                this.state = 1564;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1565;
                this.columnNamePathCreate();
                this.state = 1568;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 34) {
                    {
                    this.state = 1566;
                    this.match(ImpalaSqlParser.KW_COMMENT);
                    this.state = 1567;
                    this.stringLiteral();
                    }
                }

                }
                }
                this.state = 1574;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1575;
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
            this.state = 1578;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 218) {
                {
                this.state = 1577;
                this.with_();
                }
            }

            this.state = 1580;
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
            this.state = 1582;
            this.match(ImpalaSqlParser.KW_WITH);
            this.state = 1583;
            this.namedQuery();
            this.state = 1588;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 247) {
                {
                {
                this.state = 1584;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1585;
                this.namedQuery();
                }
                }
                this.state = 1590;
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
            this.state = 1591;
            this.match(ImpalaSqlParser.KW_PRIMARY);
            this.state = 1592;
            this.match(ImpalaSqlParser.KW_KEY);
            this.state = 1593;
            this.columnAliases();
            this.state = 1595;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 53) {
                {
                this.state = 1594;
                this.match(ImpalaSqlParser.KW_DISABLE);
                }
            }

            this.state = 1600;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 181, this.context) ) {
            case 1:
                {
                this.state = 1597;
                this.match(ImpalaSqlParser.KW_NOVALIDATE);
                }
                break;
            case 2:
                {
                this.state = 1598;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1599;
                this.match(ImpalaSqlParser.KW_NOVALIDATE);
                }
                break;
            }
            this.state = 1605;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 182, this.context) ) {
            case 1:
                {
                this.state = 1602;
                this.match(ImpalaSqlParser.KW_RELY);
                }
                break;
            case 2:
                {
                this.state = 1603;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1604;
                this.match(ImpalaSqlParser.KW_RELY);
                }
                break;
            }
            this.state = 1619;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 81 || _la === 247) {
                {
                this.state = 1610;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.COMMA:
                    {
                    this.state = 1607;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1608;
                    this.foreignKeySpecification();
                    }
                    break;
                case ImpalaSqlParser.KW_FOREIGN:
                    {
                    this.state = 1609;
                    this.foreignKeySpecification();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1616;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 184, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 1612;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1613;
                        this.foreignKeySpecification();
                        }
                        }
                    }
                    this.state = 1618;
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
            this.state = 1621;
            this.match(ImpalaSqlParser.KW_FOREIGN);
            this.state = 1622;
            this.match(ImpalaSqlParser.KW_KEY);
            this.state = 1623;
            this.columnAliases();
            this.state = 1624;
            this.match(ImpalaSqlParser.KW_REFERENCES);
            this.state = 1625;
            this.tableNamePath();
            this.state = 1626;
            this.columnAliases();
            this.state = 1628;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 53) {
                {
                this.state = 1627;
                this.match(ImpalaSqlParser.KW_DISABLE);
                }
            }

            this.state = 1631;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 227) {
                {
                this.state = 1630;
                this.match(ImpalaSqlParser.KW_NOVALIDATE);
                }
            }

            this.state = 1634;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 228) {
                {
                this.state = 1633;
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
            this.state = 1636;
            this.columnNamePath();
            this.state = 1637;
            this.type_(0);
            this.state = 1640;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 189, this.context) ) {
            case 1:
                {
                this.state = 1638;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 1639;
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
            this.state = 1642;
            this.columnNamePathCreate();
            this.state = 1643;
            this.type_(0);
            this.state = 1646;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 1644;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 1645;
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
            this.state = 1648;
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
            this.state = 1650;
            this.columnNamePathCreate();
            this.state = 1651;
            this.type_(0);
            this.state = 1659;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 33619969) !== 0) || _la === 133 || _la === 134) {
                {
                this.state = 1652;
                this.kuduAttributes();
                this.state = 1656;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 191, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 1653;
                        this.kuduAttributes();
                        }
                        }
                    }
                    this.state = 1658;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 191, this.context);
                }
                }
            }

            this.state = 1663;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 34) {
                {
                this.state = 1661;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 1662;
                this.stringLiteral();
                }
            }

            this.state = 1667;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 151) {
                {
                this.state = 1665;
                this.match(ImpalaSqlParser.KW_PRIMARY);
                this.state = 1666;
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
            this.state = 1670;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 195, this.context) ) {
            case 1:
                {
                this.state = 1669;
                this.columnSpec();
                }
                break;
            }
            this.state = 1679;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 33619969) !== 0) || _la === 133 || _la === 134) {
                {
                this.state = 1672;
                this.kuduAttributes();
                this.state = 1676;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 196, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 1673;
                        this.kuduAttributes();
                        }
                        }
                    }
                    this.state = 1678;
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
            this.state = 1681;
            this.columnNamePathCreate();
            this.state = 1682;
            this.type_(0);
            this.state = 1685;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 198, this.context) ) {
            case 1:
                {
                this.state = 1683;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 1684;
                this.stringLiteral();
                }
                break;
            }
            this.state = 1694;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 16 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 33619969) !== 0) || _la === 133 || _la === 134) {
                {
                this.state = 1687;
                this.kuduAttributes();
                this.state = 1691;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 199, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 1688;
                        this.kuduAttributes();
                        }
                        }
                    }
                    this.state = 1693;
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
            this.state = 1701;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_NOT:
            case ImpalaSqlParser.KW_NULL:
                {
                this.state = 1697;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 133) {
                    {
                    this.state = 1696;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 1699;
                this.match(ImpalaSqlParser.KW_NULL);
                }
                break;
            case ImpalaSqlParser.KW_BLOCK_SIZE:
            case ImpalaSqlParser.KW_COMPRESSION:
            case ImpalaSqlParser.KW_DEFAULT:
            case ImpalaSqlParser.KW_ENCODING:
                {
                this.state = 1700;
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
            this.state = 1711;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_ENCODING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1703;
                this.match(ImpalaSqlParser.KW_ENCODING);
                this.state = 1704;
                this.expression();
                }
                break;
            case ImpalaSqlParser.KW_COMPRESSION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1705;
                this.match(ImpalaSqlParser.KW_COMPRESSION);
                this.state = 1706;
                this.expression();
                }
                break;
            case ImpalaSqlParser.KW_DEFAULT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1707;
                this.match(ImpalaSqlParser.KW_DEFAULT);
                this.state = 1708;
                this.expression();
                }
                break;
            case ImpalaSqlParser.KW_BLOCK_SIZE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1709;
                this.match(ImpalaSqlParser.KW_BLOCK_SIZE);
                this.state = 1710;
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
            this.state = 1713;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 229)) & ~0x1F) === 0 && ((1 << (_la - 229)) & 15) !== 0))) {
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
            this.state = 1715;
            _la = this.tokenStream.LA(1);
            if(!(_la === 148 || ((((_la - 221)) & ~0x1F) === 0 && ((1 << (_la - 221)) & 31) !== 0))) {
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
            this.state = 1730;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_HASH:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 1717;
                this.hashClause();
                this.state = 1722;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 204, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 1718;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1719;
                        this.hashClause();
                        }
                        }
                    }
                    this.state = 1724;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 204, this.context);
                }
                this.state = 1727;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 247) {
                    {
                    this.state = 1725;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1726;
                    this.rangeClause();
                    }
                }

                }
                }
                break;
            case ImpalaSqlParser.KW_RANGE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1729;
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
            this.state = 1732;
            this.match(ImpalaSqlParser.KW_HASH);
            this.state = 1734;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 249) {
                {
                this.state = 1733;
                this.columnAliases();
                }
            }

            this.state = 1736;
            this.match(ImpalaSqlParser.KW_PARTITIONS);
            this.state = 1737;
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
            this.state = 1739;
            this.match(ImpalaSqlParser.KW_RANGE);
            this.state = 1741;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 208, this.context) ) {
            case 1:
                {
                this.state = 1740;
                this.columnAliases();
                }
                break;
            }
            this.state = 1743;
            this.match(ImpalaSqlParser.LPAREN);
            {
            this.state = 1744;
            this.match(ImpalaSqlParser.KW_PARTITION);
            this.state = 1745;
            this.kuduPartitionSpec();
            this.state = 1751;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 209, this.context);
            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1 + 1) {
                    {
                    {
                    this.state = 1746;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1747;
                    this.match(ImpalaSqlParser.KW_PARTITION);
                    this.state = 1748;
                    this.kuduPartitionSpec();
                    }
                    }
                }
                this.state = 1753;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 209, this.context);
            }
            }
            this.state = 1754;
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
            this.state = 1771;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_VALUE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1756;
                this.match(ImpalaSqlParser.KW_VALUE);
                this.state = 1757;
                this.partitionCol();
                this.state = 1758;
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
                this.state = 1763;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 805323008) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 1442841375) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 2218795145) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 539262841) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 271654979) !== 0) || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 537926659) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & 1076887561) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & 19453) !== 0)) {
                    {
                    this.state = 1760;
                    this.expression();
                    this.state = 1761;
                    this.rangeOperator();
                    }
                }

                this.state = 1765;
                this.match(ImpalaSqlParser.KW_VALUES);
                this.state = 1769;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 211, this.context) ) {
                case 1:
                    {
                    this.state = 1766;
                    this.rangeOperator();
                    this.state = 1767;
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
            this.state = 1783;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_CACHED:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1773;
                this.match(ImpalaSqlParser.KW_CACHED);
                this.state = 1774;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 1775;
                this.identifier();
                this.state = 1780;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 213, this.context) ) {
                case 1:
                    {
                    this.state = 1776;
                    this.match(ImpalaSqlParser.KW_WITH);
                    this.state = 1777;
                    this.match(ImpalaSqlParser.KW_REPLICATION);
                    this.state = 1778;
                    this.match(ImpalaSqlParser.EQ);
                    this.state = 1779;
                    this.number_();
                    }
                    break;
                }
                }
                break;
            case ImpalaSqlParser.KW_UNCACHED:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1782;
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
            this.state = 1790;
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
                this.state = 1786;
                this.match(ImpalaSqlParser.LT);
                }
                break;
            case ImpalaSqlParser.LTE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1787;
                this.match(ImpalaSqlParser.LTE);
                }
                break;
            case ImpalaSqlParser.GT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1788;
                this.match(ImpalaSqlParser.GT);
                }
                break;
            case ImpalaSqlParser.GTE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1789;
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
            this.state = 1800;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.EQ:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1792;
                this.match(ImpalaSqlParser.EQ);
                }
                break;
            case ImpalaSqlParser.NEQ:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1793;
                this.match(ImpalaSqlParser.NEQ);
                }
                break;
            case ImpalaSqlParser.KW_LIKE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1794;
                this.match(ImpalaSqlParser.KW_LIKE);
                }
                break;
            case ImpalaSqlParser.KW_RLIKE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1795;
                this.match(ImpalaSqlParser.KW_RLIKE);
                }
                break;
            case ImpalaSqlParser.KW_REGEXP:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1796;
                this.match(ImpalaSqlParser.KW_REGEXP);
                }
                break;
            case ImpalaSqlParser.KW_BETWEEN:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1797;
                this.match(ImpalaSqlParser.KW_BETWEEN);
                }
                break;
            case ImpalaSqlParser.KW_IN:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1798;
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
                this.state = 1799;
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
            this.state = 1802;
            this.match(ImpalaSqlParser.KW_LIKE);
            this.state = 1803;
            this.qualifiedName();
            this.state = 1806;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 65 || _la === 95) {
                {
                this.state = 1804;
                localContext._optionType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 65 || _la === 95)) {
                    localContext._optionType = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1805;
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
            this.state = 1808;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 1809;
            this.property();
            this.state = 1814;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 247) {
                {
                {
                this.state = 1810;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1811;
                this.property();
                }
                }
                this.state = 1816;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1817;
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
            this.state = 1819;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 1820;
            this.columnSpec();
            this.state = 1825;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 219, this.context);
            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1 + 1) {
                    {
                    {
                    this.state = 1821;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1822;
                    this.columnSpec();
                    }
                    }
                }
                this.state = 1827;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 219, this.context);
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
    public sortedBy(): SortedByContext {
        let localContext = new SortedByContext(this.context, this.state);
        this.enterRule(localContext, 252, ImpalaSqlParser.RULE_sortedBy);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1830;
            this.expression();
            this.state = 1835;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 247) {
                {
                {
                this.state = 1831;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 1832;
                this.expression();
                }
                }
                this.state = 1837;
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
            this.state = 1838;
            this.match(ImpalaSqlParser.KW_DELIMITED);
            this.state = 1848;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 71) {
                {
                this.state = 1839;
                this.match(ImpalaSqlParser.KW_FIELDS);
                this.state = 1840;
                this.match(ImpalaSqlParser.KW_TERMINATED);
                this.state = 1841;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 1842;
                this.stringLiteral();
                this.state = 1846;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 63) {
                    {
                    this.state = 1843;
                    this.match(ImpalaSqlParser.KW_ESCAPED);
                    this.state = 1844;
                    this.match(ImpalaSqlParser.KW_BY);
                    this.state = 1845;
                    this.stringLiteral();
                    }
                }

                }
            }

            this.state = 1854;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 117) {
                {
                this.state = 1850;
                this.match(ImpalaSqlParser.KW_LINES);
                this.state = 1851;
                this.match(ImpalaSqlParser.KW_TERMINATED);
                this.state = 1852;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 1853;
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
            this.state = 1856;
            this.identifier();
            this.state = 1859;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 233) {
                {
                this.state = 1857;
                this.match(ImpalaSqlParser.EQ);
                this.state = 1858;
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
            this.state = 1861;
            this.queryTerm(0);
            this.state = 1872;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 140) {
                {
                this.state = 1862;
                this.match(ImpalaSqlParser.KW_ORDER);
                this.state = 1863;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 1864;
                this.sortItem();
                this.state = 1869;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 247) {
                    {
                    {
                    this.state = 1865;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1866;
                    this.sortItem();
                    }
                    }
                    this.state = 1871;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1880;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 1874;
                this.match(ImpalaSqlParser.KW_LIMIT);
                this.state = 1875;
                localContext._rows = this.expression();
                this.state = 1878;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 136) {
                    {
                    this.state = 1876;
                    this.match(ImpalaSqlParser.KW_OFFSET);
                    this.state = 1877;
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

            this.state = 1883;
            this.queryPrimary();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1899;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 232, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1897;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 231, this.context) ) {
                    case 1:
                        {
                        localContext = new SetOperationContext(new QueryTermContext(parentContext, parentState));
                        (localContext as SetOperationContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_queryTerm);
                        this.state = 1885;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1886;
                        (localContext as SetOperationContext)._operator = this.match(ImpalaSqlParser.KW_INTERSECT);
                        this.state = 1888;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 2 || _la === 57) {
                            {
                            this.state = 1887;
                            this.setQuantifier();
                            }
                        }

                        this.state = 1890;
                        (localContext as SetOperationContext)._right = this.queryTerm(3);
                        }
                        break;
                    case 2:
                        {
                        localContext = new SetOperationContext(new QueryTermContext(parentContext, parentState));
                        (localContext as SetOperationContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_queryTerm);
                        this.state = 1891;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 1892;
                        (localContext as SetOperationContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 64 || _la === 202)) {
                            (localContext as SetOperationContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1894;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 2 || _la === 57) {
                            {
                            this.state = 1893;
                            this.setQuantifier();
                            }
                        }

                        this.state = 1896;
                        (localContext as SetOperationContext)._right = this.queryTerm(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 1901;
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
            this.state = 1918;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_SELECT:
                localContext = new QueryPrimaryDefaultContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1902;
                this.querySpecification();
                }
                break;
            case ImpalaSqlParser.KW_TABLE:
                localContext = new TableContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1903;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 1904;
                this.tableNamePath();
                }
                break;
            case ImpalaSqlParser.KW_VALUES:
                localContext = new InlineTableContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1905;
                this.match(ImpalaSqlParser.KW_VALUES);
                this.state = 1906;
                this.expression();
                this.state = 1911;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 233, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1907;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1908;
                        this.expression();
                        }
                        }
                    }
                    this.state = 1913;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 233, this.context);
                }
                }
                break;
            case ImpalaSqlParser.LPAREN:
                localContext = new SubqueryContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1914;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1915;
                this.queryNoWith();
                this.state = 1916;
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
            this.state = 1920;
            this.columnItem();
            this.state = 1922;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10 || _la === 55) {
                {
                this.state = 1921;
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

            this.state = 1926;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 135) {
                {
                this.state = 1924;
                this.match(ImpalaSqlParser.KW_NULLS);
                this.state = 1925;
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
            this.state = 1928;
            this.match(ImpalaSqlParser.KW_SELECT);
            this.state = 1930;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 237, this.context) ) {
            case 1:
                {
                this.state = 1929;
                this.setQuantifier();
                }
                break;
            }
            this.state = 1933;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 238, this.context) ) {
            case 1:
                {
                this.state = 1932;
                this.match(ImpalaSqlParser.KW_STRAIGHT_JOIN);
                }
                break;
            }
            this.state = 1935;
            this.selectItem();
            this.state = 1940;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 239, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1936;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1937;
                    this.selectItem();
                    }
                    }
                }
                this.state = 1942;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 239, this.context);
            }
            this.state = 1952;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 241, this.context) ) {
            case 1:
                {
                this.state = 1943;
                this.match(ImpalaSqlParser.KW_FROM);
                this.state = 1944;
                this.relation(0);
                this.state = 1949;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 240, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1945;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1946;
                        this.relation(0);
                        }
                        }
                    }
                    this.state = 1951;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 240, this.context);
                }
                }
                break;
            }
            this.state = 1956;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 242, this.context) ) {
            case 1:
                {
                this.state = 1954;
                this.match(ImpalaSqlParser.KW_WHERE);
                this.state = 1955;
                localContext._where = this.booleanExpression(0);
                }
                break;
            }
            this.state = 1961;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 243, this.context) ) {
            case 1:
                {
                this.state = 1958;
                this.match(ImpalaSqlParser.KW_GROUP);
                this.state = 1959;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 1960;
                this.groupBy();
                }
                break;
            }
            this.state = 1965;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 244, this.context) ) {
            case 1:
                {
                this.state = 1963;
                this.match(ImpalaSqlParser.KW_HAVING);
                this.state = 1964;
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
            this.state = 1968;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 245, this.context) ) {
            case 1:
                {
                this.state = 1967;
                this.setQuantifier();
                }
                break;
            }
            this.state = 1970;
            this.groupingElement();
            this.state = 1975;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 246, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1971;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 1972;
                    this.groupingElement();
                    }
                    }
                }
                this.state = 1977;
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
            this.state = 1978;
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
            this.state = 1993;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 249, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1980;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1989;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 248, this.context) ) {
                case 1:
                    {
                    this.state = 1981;
                    this.columnItem();
                    this.state = 1986;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 247) {
                        {
                        {
                        this.state = 1982;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 1983;
                        this.columnItem();
                        }
                        }
                        this.state = 1988;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                    break;
                }
                this.state = 1991;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1992;
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
            this.state = 1995;
            localContext._name = this.identifier();
            this.state = 1997;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 249) {
                {
                this.state = 1996;
                this.columnAliases();
                }
            }

            this.state = 1999;
            this.match(ImpalaSqlParser.KW_AS);
            this.state = 2000;
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
            this.state = 2002;
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
            this.state = 2016;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 253, this.context) ) {
            case 1:
                localContext = new SelectSingleContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2004;
                this.columnItem();
                this.state = 2009;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 252, this.context) ) {
                case 1:
                    {
                    this.state = 2006;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 9) {
                        {
                        this.state = 2005;
                        this.match(ImpalaSqlParser.KW_AS);
                        }
                    }

                    this.state = 2008;
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
                this.state = 2011;
                this.qualifiedName();
                this.state = 2012;
                this.match(ImpalaSqlParser.DOT);
                this.state = 2013;
                this.match(ImpalaSqlParser.ASTERISK);
                }
                break;
            case 3:
                localContext = new SelectAllContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2015;
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

            this.state = 2019;
            this.sampledRelation();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2034;
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
                    this.state = 2021;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 2030;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case ImpalaSqlParser.KW_CROSS:
                        {
                        this.state = 2022;
                        this.match(ImpalaSqlParser.KW_CROSS);
                        this.state = 2023;
                        this.match(ImpalaSqlParser.KW_JOIN);
                        this.state = 2024;
                        (localContext as JoinRelationContext)._right = this.sampledRelation();
                        }
                        break;
                    case ImpalaSqlParser.KW_FULL:
                    case ImpalaSqlParser.KW_INNER:
                    case ImpalaSqlParser.KW_JOIN:
                    case ImpalaSqlParser.KW_LEFT:
                    case ImpalaSqlParser.KW_RIGHT:
                        {
                        this.state = 2025;
                        this.joinType();
                        this.state = 2026;
                        this.match(ImpalaSqlParser.KW_JOIN);
                        this.state = 2027;
                        (localContext as JoinRelationContext)._rightRelation = this.relation(0);
                        this.state = 2028;
                        this.joinCriteria();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                    }
                }
                this.state = 2036;
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
            this.state = 2068;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 262, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2038;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 97) {
                    {
                    this.state = 2037;
                    this.match(ImpalaSqlParser.KW_INNER);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2040;
                this.match(ImpalaSqlParser.KW_LEFT);
                this.state = 2042;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 97) {
                    {
                    this.state = 2041;
                    this.match(ImpalaSqlParser.KW_INNER);
                    }
                }

                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2044;
                this.match(ImpalaSqlParser.KW_RIGHT);
                this.state = 2046;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 97) {
                    {
                    this.state = 2045;
                    this.match(ImpalaSqlParser.KW_INNER);
                    }
                }

                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2048;
                this.match(ImpalaSqlParser.KW_LEFT);
                this.state = 2050;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 142) {
                    {
                    this.state = 2049;
                    this.match(ImpalaSqlParser.KW_OUTER);
                    }
                }

                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2052;
                this.match(ImpalaSqlParser.KW_RIGHT);
                this.state = 2054;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 142) {
                    {
                    this.state = 2053;
                    this.match(ImpalaSqlParser.KW_OUTER);
                    }
                }

                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2056;
                this.match(ImpalaSqlParser.KW_FULL);
                this.state = 2058;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 142) {
                    {
                    this.state = 2057;
                    this.match(ImpalaSqlParser.KW_OUTER);
                    }
                }

                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2060;
                this.match(ImpalaSqlParser.KW_LEFT);
                this.state = 2061;
                this.match(ImpalaSqlParser.KW_SEMI);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2062;
                this.match(ImpalaSqlParser.KW_RIGHT);
                this.state = 2063;
                this.match(ImpalaSqlParser.KW_SEMI);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 2064;
                this.match(ImpalaSqlParser.KW_LEFT);
                this.state = 2065;
                this.match(ImpalaSqlParser.KW_ANTI);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 2066;
                this.match(ImpalaSqlParser.KW_RIGHT);
                this.state = 2067;
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
            this.state = 2084;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_ON:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2070;
                this.match(ImpalaSqlParser.KW_ON);
                this.state = 2071;
                this.booleanExpression(0);
                }
                break;
            case ImpalaSqlParser.KW_USING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2072;
                this.match(ImpalaSqlParser.KW_USING);
                this.state = 2073;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2074;
                this.identifier();
                this.state = 2079;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 247) {
                    {
                    {
                    this.state = 2075;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2076;
                    this.identifier();
                    }
                    }
                    this.state = 2081;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2082;
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
            this.state = 2086;
            this.aliasedRelation();
            this.state = 2099;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 266, this.context) ) {
            case 1:
                {
                this.state = 2087;
                this.match(ImpalaSqlParser.KW_TABLESAMPLE);
                this.state = 2088;
                this.sampleType();
                this.state = 2089;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2090;
                localContext._percentage = this.expression();
                this.state = 2091;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2097;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 265, this.context) ) {
                case 1:
                    {
                    this.state = 2092;
                    this.match(ImpalaSqlParser.KW_REPEATABLE);
                    this.state = 2093;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2094;
                    localContext._seed = this.expression();
                    this.state = 2095;
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
            this.state = 2101;
            _la = this.tokenStream.LA(1);
            if(!(_la === 14 || _la === 187)) {
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
            this.state = 2103;
            this.relationPrimary();
            this.state = 2111;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 269, this.context) ) {
            case 1:
                {
                this.state = 2105;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                    this.state = 2104;
                    this.match(ImpalaSqlParser.KW_AS);
                    }
                }

                this.state = 2107;
                this.identifier();
                this.state = 2109;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 268, this.context) ) {
                case 1:
                    {
                    this.state = 2108;
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
            this.state = 2113;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 2114;
            this.columnNamePath();
            this.state = 2119;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 247) {
                {
                {
                this.state = 2115;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 2116;
                this.columnNamePath();
                }
                }
                this.state = 2121;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 2122;
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
            this.state = 2131;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 272, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2124;
                this.tableOrViewPath();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2126;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 113) {
                    {
                    this.state = 2125;
                    this.match(ImpalaSqlParser.KW_LATERAL);
                    }
                }

                this.state = 2128;
                this.subQueryRelation();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2129;
                this.unnest();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2130;
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
            this.state = 2133;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 2134;
            this.queryStatement();
            this.state = 2135;
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
            this.state = 2137;
            this.match(ImpalaSqlParser.KW_UNNEST);
            this.state = 2138;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 2139;
            this.expression();
            this.state = 2144;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 247) {
                {
                {
                this.state = 2140;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 2141;
                this.expression();
                }
                }
                this.state = 2146;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 2147;
            this.match(ImpalaSqlParser.RPAREN);
            this.state = 2150;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 274, this.context) ) {
            case 1:
                {
                this.state = 2148;
                this.match(ImpalaSqlParser.KW_WITH);
                this.state = 2149;
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
            this.state = 2152;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 2153;
            this.relation(0);
            this.state = 2154;
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
            this.state = 2158;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 275, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2156;
                this.columnNamePath();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2157;
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
            this.state = 2160;
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
            this.state = 2169;
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

                this.state = 2163;
                (localContext as PredicatedContext)._valueExpression = this.valueExpression(0);
                this.state = 2165;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 276, this.context) ) {
                case 1:
                    {
                    this.state = 2164;
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
                this.state = 2167;
                this.match(ImpalaSqlParser.KW_NOT);
                this.state = 2168;
                this.booleanExpression(3);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2179;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 279, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 2177;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 278, this.context) ) {
                    case 1:
                        {
                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as LogicalBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_booleanExpression);
                        this.state = 2171;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 2172;
                        (localContext as LogicalBinaryContext)._operator = this.match(ImpalaSqlParser.KW_AND);
                        this.state = 2173;
                        (localContext as LogicalBinaryContext)._right = this.booleanExpression(3);
                        }
                        break;
                    case 2:
                        {
                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as LogicalBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_booleanExpression);
                        this.state = 2174;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 2175;
                        (localContext as LogicalBinaryContext)._operator = this.match(ImpalaSqlParser.KW_OR);
                        this.state = 2176;
                        (localContext as LogicalBinaryContext)._right = this.booleanExpression(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 2181;
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
            this.state = 2240;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 288, this.context) ) {
            case 1:
                localContext = new ComparisonContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2182;
                this.comparisonOperator();
                this.state = 2183;
                (localContext as ComparisonContext)._right = this.valueExpression(0);
                }
                break;
            case 2:
                localContext = new QuantifiedComparisonContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2185;
                this.comparisonOperator();
                this.state = 2186;
                this.comparisonQuantifier();
                this.state = 2187;
                this.subQueryRelation();
                }
                break;
            case 3:
                localContext = new BetweenContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2190;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 133) {
                    {
                    this.state = 2189;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 2192;
                this.match(ImpalaSqlParser.KW_BETWEEN);
                this.state = 2193;
                (localContext as BetweenContext)._lower = this.valueExpression(0);
                this.state = 2194;
                this.match(ImpalaSqlParser.KW_AND);
                this.state = 2195;
                (localContext as BetweenContext)._upper = this.valueExpression(0);
                }
                break;
            case 4:
                localContext = new InListContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2198;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 133) {
                    {
                    this.state = 2197;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 2200;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 2201;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2202;
                this.expression();
                this.state = 2207;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 247) {
                    {
                    {
                    this.state = 2203;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2204;
                    this.expression();
                    }
                    }
                    this.state = 2209;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2210;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 5:
                localContext = new InSubqueryContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2213;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 133) {
                    {
                    this.state = 2212;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 2215;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 2216;
                this.subQueryRelation();
                }
                break;
            case 6:
                localContext = new LikeContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2218;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 133) {
                    {
                    this.state = 2217;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 2220;
                _la = this.tokenStream.LA(1);
                if(!(_la === 106 || _la === 115 || _la === 165)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 2221;
                (localContext as LikeContext)._pattern = this.valueExpression(0);
                this.state = 2224;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 285, this.context) ) {
                case 1:
                    {
                    this.state = 2222;
                    this.match(ImpalaSqlParser.KW_ESCAPE);
                    this.state = 2223;
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
                this.state = 2226;
                _la = this.tokenStream.LA(1);
                if(!(_la === 105 || _la === 164)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 2227;
                (localContext as REGEXPContext)._pattern = this.valueExpression(0);
                }
                break;
            case 8:
                localContext = new NullOrUnKnownOrBooleanPredicateContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2228;
                this.match(ImpalaSqlParser.KW_IS);
                this.state = 2230;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 133) {
                    {
                    this.state = 2229;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 2232;
                _la = this.tokenStream.LA(1);
                if(!(_la === 70 || _la === 134 || _la === 196 || _la === 210)) {
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
                this.state = 2233;
                this.match(ImpalaSqlParser.KW_IS);
                this.state = 2235;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 133) {
                    {
                    this.state = 2234;
                    this.match(ImpalaSqlParser.KW_NOT);
                    }
                }

                this.state = 2237;
                this.match(ImpalaSqlParser.KW_DISTINCT);
                this.state = 2238;
                this.match(ImpalaSqlParser.KW_FROM);
                this.state = 2239;
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
            this.state = 2246;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 289, this.context) ) {
            case 1:
                {
                localContext = new ValueExpressionDefaultContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 2243;
                this.primaryExpression(0);
                }
                break;
            case 2:
                {
                localContext = new ArithmeticUnaryContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2244;
                (localContext as ArithmeticUnaryContext)._operator = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 239 || _la === 240)) {
                    (localContext as ArithmeticUnaryContext)._operator = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 2245;
                this.valueExpression(4);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2259;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 291, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 2257;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 290, this.context) ) {
                    case 1:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_valueExpression);
                        this.state = 2248;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 2249;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 7) !== 0))) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 2250;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_valueExpression);
                        this.state = 2251;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 2252;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 239 || _la === 240)) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 2253;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(3);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ConcatenationContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ConcatenationContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_valueExpression);
                        this.state = 2254;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 2255;
                        this.match(ImpalaSqlParser.CONCAT);
                        this.state = 2256;
                        (localContext as ConcatenationContext)._right = this.valueExpression(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 2261;
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
            this.state = 2508;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 321, this.context) ) {
            case 1:
                {
                localContext = new NullLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 2263;
                this.match(ImpalaSqlParser.KW_NULL);
                }
                break;
            case 2:
                {
                localContext = new IntervalLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2264;
                this.interval();
                }
                break;
            case 3:
                {
                localContext = new TypeConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2265;
                this.identifier();
                this.state = 2266;
                this.stringLiteral();
                }
                break;
            case 4:
                {
                localContext = new TypeConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2268;
                this.match(ImpalaSqlParser.DOUBLE_PRECISION);
                this.state = 2269;
                this.stringLiteral();
                }
                break;
            case 5:
                {
                localContext = new NumericLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2270;
                this.number_();
                }
                break;
            case 6:
                {
                localContext = new BooleanLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2271;
                this.booleanValue();
                }
                break;
            case 7:
                {
                localContext = new StringLiteralValuesContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2272;
                this.stringLiteral();
                }
                break;
            case 8:
                {
                localContext = new BinaryLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2273;
                this.match(ImpalaSqlParser.BINARY_LITERAL);
                }
                break;
            case 9:
                {
                localContext = new ParameterContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2274;
                this.match(ImpalaSqlParser.QUESTION);
                }
                break;
            case 10:
                {
                localContext = new PositionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2275;
                this.match(ImpalaSqlParser.KW_POSITION);
                this.state = 2276;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2277;
                this.valueExpression(0);
                this.state = 2278;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 2279;
                this.valueExpression(0);
                this.state = 2280;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 11:
                {
                localContext = new RowConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2282;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2283;
                this.expression();
                this.state = 2286;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                    this.state = 2284;
                    this.match(ImpalaSqlParser.KW_AS);
                    this.state = 2285;
                    this.type_(0);
                    }
                }

                this.state = 2296;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 294, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                        {
                        this.state = 2288;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2289;
                        this.expression();
                        this.state = 2292;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 9) {
                            {
                            this.state = 2290;
                            this.match(ImpalaSqlParser.KW_AS);
                            this.state = 2291;
                            this.type_(0);
                            }
                        }

                        }
                        }
                    }
                    this.state = 2298;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 294, this.context);
                }
                this.state = 2299;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 12:
                {
                localContext = new RowConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2301;
                this.match(ImpalaSqlParser.KW_ROW);
                this.state = 2302;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2303;
                this.expression();
                this.state = 2308;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 247) {
                    {
                    {
                    this.state = 2304;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2305;
                    this.expression();
                    }
                    }
                    this.state = 2310;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2311;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 13:
                {
                localContext = new FunctionCallContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2313;
                this.functionNamePath();
                this.state = 2314;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2315;
                this.match(ImpalaSqlParser.ASTERISK);
                this.state = 2316;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2318;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 296, this.context) ) {
                case 1:
                    {
                    this.state = 2317;
                    this.filter();
                    }
                    break;
                }
                this.state = 2321;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 297, this.context) ) {
                case 1:
                    {
                    this.state = 2320;
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
                this.state = 2323;
                this.functionNamePath();
                this.state = 2324;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2336;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 805323012) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 1442972447) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 2218795145) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 539262841) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 271654979) !== 0) || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 537926659) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & 1076887561) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & 19453) !== 0)) {
                    {
                    this.state = 2326;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 2 || _la === 57) {
                        {
                        this.state = 2325;
                        this.setQuantifier();
                        }
                    }

                    this.state = 2328;
                    this.expression();
                    this.state = 2333;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 247) {
                        {
                        {
                        this.state = 2329;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2330;
                        this.expression();
                        }
                        }
                        this.state = 2335;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 2348;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 140) {
                    {
                    this.state = 2338;
                    this.match(ImpalaSqlParser.KW_ORDER);
                    this.state = 2339;
                    this.match(ImpalaSqlParser.KW_BY);
                    this.state = 2340;
                    this.sortItem();
                    this.state = 2345;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 247) {
                        {
                        {
                        this.state = 2341;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2342;
                        this.sortItem();
                        }
                        }
                        this.state = 2347;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 2350;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2352;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 303, this.context) ) {
                case 1:
                    {
                    this.state = 2351;
                    this.filter();
                    }
                    break;
                }
                this.state = 2355;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 304, this.context) ) {
                case 1:
                    {
                    this.state = 2354;
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
                this.state = 2357;
                this.identifier();
                this.state = 2358;
                this.match(ImpalaSqlParser.RIGHT_ARROW);
                this.state = 2359;
                this.expression();
                }
                break;
            case 16:
                {
                localContext = new LambdaContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2361;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2370;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 268959761) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3221520879) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & 16802051) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 74241) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 705) !== 0)) {
                    {
                    this.state = 2362;
                    this.identifier();
                    this.state = 2367;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 247) {
                        {
                        {
                        this.state = 2363;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2364;
                        this.identifier();
                        }
                        }
                        this.state = 2369;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 2372;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2373;
                this.match(ImpalaSqlParser.RIGHT_ARROW);
                this.state = 2374;
                this.expression();
                }
                break;
            case 17:
                {
                localContext = new SubqueryExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2375;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2376;
                this.queryStatement();
                this.state = 2377;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 18:
                {
                localContext = new ExistsContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2379;
                this.match(ImpalaSqlParser.KW_EXISTS);
                this.state = 2380;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2381;
                this.queryStatement();
                this.state = 2382;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 19:
                {
                localContext = new SimpleCaseContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2384;
                this.match(ImpalaSqlParser.KW_CASE);
                this.state = 2385;
                this.valueExpression(0);
                this.state = 2387;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 2386;
                    this.whenClause();
                    }
                    }
                    this.state = 2389;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 216);
                this.state = 2393;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 59) {
                    {
                    this.state = 2391;
                    this.match(ImpalaSqlParser.KW_ELSE);
                    this.state = 2392;
                    (localContext as SimpleCaseContext)._elseExpression = this.expression();
                    }
                }

                this.state = 2395;
                this.match(ImpalaSqlParser.KW_END);
                }
                break;
            case 20:
                {
                localContext = new SearchedCaseContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2397;
                this.match(ImpalaSqlParser.KW_CASE);
                this.state = 2399;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 2398;
                    this.whenClause();
                    }
                    }
                    this.state = 2401;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 216);
                this.state = 2405;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 59) {
                    {
                    this.state = 2403;
                    this.match(ImpalaSqlParser.KW_ELSE);
                    this.state = 2404;
                    (localContext as SearchedCaseContext)._elseExpression = this.expression();
                    }
                }

                this.state = 2407;
                this.match(ImpalaSqlParser.KW_END);
                }
                break;
            case 21:
                {
                localContext = new CastContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2409;
                this.match(ImpalaSqlParser.KW_CAST);
                this.state = 2410;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2411;
                this.expression();
                this.state = 2412;
                this.match(ImpalaSqlParser.KW_AS);
                this.state = 2413;
                this.type_(0);
                this.state = 2414;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 22:
                {
                localContext = new CastContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2416;
                this.match(ImpalaSqlParser.KW_TRY_CAST);
                this.state = 2417;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2418;
                this.expression();
                this.state = 2419;
                this.match(ImpalaSqlParser.KW_AS);
                this.state = 2420;
                this.type_(0);
                this.state = 2421;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 23:
                {
                localContext = new ArrayConstructorContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2423;
                this.match(ImpalaSqlParser.KW_ARRAY);
                this.state = 2424;
                this.match(ImpalaSqlParser.LSQUARE);
                this.state = 2433;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 805323008) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 1442841375) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 2218795145) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 539262841) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 271654979) !== 0) || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & 537926659) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & 1076887561) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & 19453) !== 0)) {
                    {
                    this.state = 2425;
                    this.expression();
                    this.state = 2430;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 247) {
                        {
                        {
                        this.state = 2426;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2427;
                        this.expression();
                        }
                        }
                        this.state = 2432;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 2435;
                this.match(ImpalaSqlParser.RSQUARE);
                }
                break;
            case 24:
                {
                localContext = new ColumnReferenceContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2436;
                this.identifier();
                }
                break;
            case 25:
                {
                localContext = new SpecialDateTimeFunctionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2437;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_DATE);
                }
                break;
            case 26:
                {
                localContext = new SpecialDateTimeFunctionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2438;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_TIME);
                this.state = 2442;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 313, this.context) ) {
                case 1:
                    {
                    this.state = 2439;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2440;
                    (localContext as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
                    this.state = 2441;
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
                this.state = 2444;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_TIMESTAMP);
                this.state = 2448;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 314, this.context) ) {
                case 1:
                    {
                    this.state = 2445;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2446;
                    (localContext as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
                    this.state = 2447;
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
                this.state = 2450;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_LOCALTIME);
                this.state = 2454;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 315, this.context) ) {
                case 1:
                    {
                    this.state = 2451;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2452;
                    (localContext as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
                    this.state = 2453;
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
                this.state = 2456;
                (localContext as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_LOCALTIMESTAMP);
                this.state = 2460;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 316, this.context) ) {
                case 1:
                    {
                    this.state = 2457;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2458;
                    (localContext as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
                    this.state = 2459;
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
                this.state = 2462;
                (localContext as CurrentUserContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_USER);
                }
                break;
            case 31:
                {
                localContext = new CurrentPathContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2463;
                (localContext as CurrentPathContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_PATH);
                }
                break;
            case 32:
                {
                localContext = new SubstringContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2464;
                this.match(ImpalaSqlParser.KW_SUBSTRING);
                this.state = 2465;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2466;
                this.valueExpression(0);
                this.state = 2467;
                this.match(ImpalaSqlParser.KW_FROM);
                this.state = 2468;
                this.valueExpression(0);
                this.state = 2471;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 78) {
                    {
                    this.state = 2469;
                    this.match(ImpalaSqlParser.KW_FOR);
                    this.state = 2470;
                    this.valueExpression(0);
                    }
                }

                this.state = 2473;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 33:
                {
                localContext = new NormalizeContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2475;
                this.match(ImpalaSqlParser.KW_NORMALIZE);
                this.state = 2476;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2477;
                this.valueExpression(0);
                this.state = 2480;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 247) {
                    {
                    this.state = 2478;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2479;
                    this.normalForm();
                    }
                }

                this.state = 2482;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 34:
                {
                localContext = new ExtractContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2484;
                this.match(ImpalaSqlParser.KW_EXTRACT);
                this.state = 2485;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2486;
                this.identifier();
                this.state = 2487;
                this.match(ImpalaSqlParser.KW_FROM);
                this.state = 2488;
                this.valueExpression(0);
                this.state = 2489;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 35:
                {
                localContext = new ParenthesizedExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2491;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2492;
                this.expression();
                this.state = 2493;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            case 36:
                {
                localContext = new GroupingOperationContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2495;
                this.match(ImpalaSqlParser.KW_GROUPING);
                this.state = 2496;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2505;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 268959761) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3221520879) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & 16802051) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 74241) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 705) !== 0)) {
                    {
                    this.state = 2497;
                    this.qualifiedName();
                    this.state = 2502;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 247) {
                        {
                        {
                        this.state = 2498;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2499;
                        this.qualifiedName();
                        }
                        }
                        this.state = 2504;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 2507;
                this.match(ImpalaSqlParser.RPAREN);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2520;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 323, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 2518;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 322, this.context) ) {
                    case 1:
                        {
                        localContext = new SubscriptContext(new PrimaryExpressionContext(parentContext, parentState));
                        (localContext as SubscriptContext)._value = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_primaryExpression);
                        this.state = 2510;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 2511;
                        this.match(ImpalaSqlParser.LSQUARE);
                        this.state = 2512;
                        (localContext as SubscriptContext)._index = this.valueExpression(0);
                        this.state = 2513;
                        this.match(ImpalaSqlParser.RSQUARE);
                        }
                        break;
                    case 2:
                        {
                        localContext = new DereferenceContext(new PrimaryExpressionContext(parentContext, parentState));
                        (localContext as DereferenceContext)._base = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_primaryExpression);
                        this.state = 2515;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 2516;
                        this.match(ImpalaSqlParser.DOT);
                        this.state = 2517;
                        (localContext as DereferenceContext)._fieldName = this.identifier();
                        }
                        break;
                    }
                    }
                }
                this.state = 2522;
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
            this.state = 2529;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.STRING:
                localContext = new BasicStringLiteralContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2523;
                this.match(ImpalaSqlParser.STRING);
                }
                break;
            case ImpalaSqlParser.UNICODE_STRING:
                localContext = new UnicodeStringLiteralContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2524;
                this.match(ImpalaSqlParser.UNICODE_STRING);
                this.state = 2527;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 324, this.context) ) {
                case 1:
                    {
                    this.state = 2525;
                    this.match(ImpalaSqlParser.KW_UESCAPE);
                    this.state = 2526;
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
            this.state = 2531;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 233)) & ~0x1F) === 0 && ((1 << (_la - 233)) & 63) !== 0))) {
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
            this.state = 2533;
            _la = this.tokenStream.LA(1);
            if(!(_la === 2 || _la === 6 || _la === 182)) {
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
            this.state = 2535;
            _la = this.tokenStream.LA(1);
            if(!(_la === 70 || _la === 196)) {
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
            this.state = 2551;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 326, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2537;
                this.match(ImpalaSqlParser.INTEGER_VALUE);
                this.state = 2538;
                this.intervalField();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2539;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2540;
                this.match(ImpalaSqlParser.INTEGER_VALUE);
                this.state = 2541;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2542;
                this.intervalField();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2543;
                this.match(ImpalaSqlParser.KW_INTERVAL);
                this.state = 2544;
                this.match(ImpalaSqlParser.INTEGER_VALUE);
                this.state = 2545;
                this.intervalField();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2546;
                this.match(ImpalaSqlParser.KW_INTERVAL);
                this.state = 2547;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2548;
                this.match(ImpalaSqlParser.INTEGER_VALUE);
                this.state = 2549;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2550;
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
            this.state = 2553;
            _la = this.tokenStream.LA(1);
            if(!(_la === 48 || _la === 49 || _la === 91 || _la === 92 || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 15) !== 0) || _la === 173 || _la === 174 || _la === 219 || _la === 220)) {
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
            this.state = 2555;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 15) !== 0))) {
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
            this.state = 2601;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_ARRAY:
                {
                this.state = 2558;
                this.match(ImpalaSqlParser.KW_ARRAY);
                this.state = 2559;
                this.match(ImpalaSqlParser.LT);
                this.state = 2560;
                this.type_(0);
                this.state = 2561;
                this.match(ImpalaSqlParser.GT);
                }
                break;
            case ImpalaSqlParser.KW_MAP:
                {
                this.state = 2563;
                this.match(ImpalaSqlParser.KW_MAP);
                this.state = 2564;
                this.match(ImpalaSqlParser.LT);
                this.state = 2565;
                this.type_(0);
                this.state = 2566;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 2567;
                this.type_(0);
                this.state = 2568;
                this.match(ImpalaSqlParser.GT);
                }
                break;
            case ImpalaSqlParser.KW_STRUCT:
                {
                this.state = 2570;
                this.match(ImpalaSqlParser.KW_STRUCT);
                this.state = 2571;
                this.match(ImpalaSqlParser.LT);
                this.state = 2572;
                this.identifier();
                this.state = 2573;
                this.match(ImpalaSqlParser.COLON);
                this.state = 2574;
                this.type_(0);
                this.state = 2582;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 247) {
                    {
                    {
                    this.state = 2575;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2576;
                    this.identifier();
                    this.state = 2577;
                    this.match(ImpalaSqlParser.COLON);
                    this.state = 2578;
                    this.type_(0);
                    }
                    }
                    this.state = 2584;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2585;
                this.match(ImpalaSqlParser.GT);
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
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.IDENTIFIER:
            case ImpalaSqlParser.DIGIT_IDENTIFIER:
            case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
            case ImpalaSqlParser.TIME_WITH_TIME_ZONE:
            case ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE:
            case ImpalaSqlParser.DOUBLE_PRECISION:
                {
                this.state = 2587;
                this.baseType();
                this.state = 2599;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 329, this.context) ) {
                case 1:
                    {
                    this.state = 2588;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2589;
                    this.typeParameter();
                    this.state = 2594;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 247) {
                        {
                        {
                        this.state = 2590;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 2591;
                        this.typeParameter();
                        }
                        }
                        this.state = 2596;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 2597;
                    this.match(ImpalaSqlParser.RPAREN);
                    }
                    break;
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2607;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 331, this.context);
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
                    this.state = 2603;
                    if (!(this.precpred(this.context, 5))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                    }
                    this.state = 2604;
                    this.match(ImpalaSqlParser.KW_ARRAY);
                    }
                    }
                }
                this.state = 2609;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 331, this.context);
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
    public typeParameter(): TypeParameterContext {
        let localContext = new TypeParameterContext(this.context, this.state);
        this.enterRule(localContext, 330, ImpalaSqlParser.RULE_typeParameter);
        try {
            this.state = 2612;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.INTEGER_VALUE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2610;
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
            case ImpalaSqlParser.KW_MAP:
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
            case ImpalaSqlParser.KW_STRUCT:
            case ImpalaSqlParser.KW_SUBSTRING:
            case ImpalaSqlParser.KW_SYSTEM:
            case ImpalaSqlParser.KW_TRY_CAST:
            case ImpalaSqlParser.KW_USER:
            case ImpalaSqlParser.KW_VIEWS:
            case ImpalaSqlParser.KW_YEAR:
            case ImpalaSqlParser.KW_ORC:
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.IDENTIFIER:
            case ImpalaSqlParser.DIGIT_IDENTIFIER:
            case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
            case ImpalaSqlParser.TIME_WITH_TIME_ZONE:
            case ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE:
            case ImpalaSqlParser.DOUBLE_PRECISION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2611;
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
        this.enterRule(localContext, 332, ImpalaSqlParser.RULE_baseType);
        try {
            this.state = 2618;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.TIME_WITH_TIME_ZONE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2614;
                this.match(ImpalaSqlParser.TIME_WITH_TIME_ZONE);
                }
                break;
            case ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2615;
                this.match(ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE);
                }
                break;
            case ImpalaSqlParser.DOUBLE_PRECISION:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2616;
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
            case ImpalaSqlParser.STRING:
            case ImpalaSqlParser.IDENTIFIER:
            case ImpalaSqlParser.DIGIT_IDENTIFIER:
            case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2617;
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
        this.enterRule(localContext, 334, ImpalaSqlParser.RULE_whenClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2620;
            this.match(ImpalaSqlParser.KW_WHEN);
            this.state = 2621;
            localContext._condition = this.expression();
            this.state = 2622;
            this.match(ImpalaSqlParser.KW_THEN);
            this.state = 2623;
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
        this.enterRule(localContext, 336, ImpalaSqlParser.RULE_filter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2625;
            this.match(ImpalaSqlParser.KW_FILTER);
            this.state = 2626;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 2627;
            this.match(ImpalaSqlParser.KW_WHERE);
            this.state = 2628;
            this.booleanExpression(0);
            this.state = 2629;
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
        this.enterRule(localContext, 338, ImpalaSqlParser.RULE_over);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2631;
            this.match(ImpalaSqlParser.KW_OVER);
            this.state = 2632;
            this.match(ImpalaSqlParser.LPAREN);
            this.state = 2643;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 146) {
                {
                this.state = 2633;
                this.match(ImpalaSqlParser.KW_PARTITION);
                this.state = 2634;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 2635;
                localContext._expression = this.expression();
                localContext._partition.push(localContext._expression);
                this.state = 2640;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 247) {
                    {
                    {
                    this.state = 2636;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2637;
                    localContext._expression = this.expression();
                    localContext._partition.push(localContext._expression);
                    }
                    }
                    this.state = 2642;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 2655;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 140) {
                {
                this.state = 2645;
                this.match(ImpalaSqlParser.KW_ORDER);
                this.state = 2646;
                this.match(ImpalaSqlParser.KW_BY);
                this.state = 2647;
                this.sortItem();
                this.state = 2652;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 247) {
                    {
                    {
                    this.state = 2648;
                    this.match(ImpalaSqlParser.COMMA);
                    this.state = 2649;
                    this.sortItem();
                    }
                    }
                    this.state = 2654;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 2658;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 155 || _la === 170) {
                {
                this.state = 2657;
                this.windowFrame();
                }
            }

            this.state = 2660;
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
        this.enterRule(localContext, 340, ImpalaSqlParser.RULE_windowFrame);
        try {
            this.state = 2678;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 339, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2662;
                localContext._frameType = this.match(ImpalaSqlParser.KW_RANGE);
                this.state = 2663;
                localContext._start_ = this.frameBound();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2664;
                localContext._frameType = this.match(ImpalaSqlParser.KW_ROWS);
                this.state = 2665;
                localContext._start_ = this.frameBound();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2666;
                localContext._frameType = this.match(ImpalaSqlParser.KW_RANGE);
                this.state = 2667;
                this.match(ImpalaSqlParser.KW_BETWEEN);
                this.state = 2668;
                localContext._start_ = this.frameBound();
                this.state = 2669;
                this.match(ImpalaSqlParser.KW_AND);
                this.state = 2670;
                localContext._end = this.frameBound();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2672;
                localContext._frameType = this.match(ImpalaSqlParser.KW_ROWS);
                this.state = 2673;
                this.match(ImpalaSqlParser.KW_BETWEEN);
                this.state = 2674;
                localContext._start_ = this.frameBound();
                this.state = 2675;
                this.match(ImpalaSqlParser.KW_AND);
                this.state = 2676;
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
        this.enterRule(localContext, 342, ImpalaSqlParser.RULE_frameBound);
        let _la: number;
        try {
            this.state = 2689;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 340, this.context) ) {
            case 1:
                localContext = new UnboundedFrameContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2680;
                this.match(ImpalaSqlParser.KW_UNBOUNDED);
                this.state = 2681;
                (localContext as UnboundedFrameContext)._boundType = this.match(ImpalaSqlParser.KW_PRECEDING);
                }
                break;
            case 2:
                localContext = new UnboundedFrameContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2682;
                this.match(ImpalaSqlParser.KW_UNBOUNDED);
                this.state = 2683;
                (localContext as UnboundedFrameContext)._boundType = this.match(ImpalaSqlParser.KW_FOLLOWING);
                }
                break;
            case 3:
                localContext = new CurrentRowBoundContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2684;
                this.match(ImpalaSqlParser.KW_CURRENT);
                this.state = 2685;
                this.match(ImpalaSqlParser.KW_ROW);
                }
                break;
            case 4:
                localContext = new BoundedFrameContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2686;
                this.expression();
                this.state = 2687;
                (localContext as BoundedFrameContext)._boundType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 77 || _la === 150)) {
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
        this.enterRule(localContext, 344, ImpalaSqlParser.RULE_pathElement);
        try {
            this.state = 2696;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 341, this.context) ) {
            case 1:
                localContext = new QualifiedArgumentContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2691;
                this.identifier();
                this.state = 2692;
                this.match(ImpalaSqlParser.DOT);
                this.state = 2693;
                this.identifier();
                }
                break;
            case 2:
                localContext = new UnqualifiedArgumentContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2695;
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
        this.enterRule(localContext, 346, ImpalaSqlParser.RULE_pathSpecification);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2698;
            this.pathElement();
            this.state = 2703;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 247) {
                {
                {
                this.state = 2699;
                this.match(ImpalaSqlParser.COMMA);
                this.state = 2700;
                this.pathElement();
                }
                }
                this.state = 2705;
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
        this.enterRule(localContext, 348, ImpalaSqlParser.RULE_privilege);
        let _la: number;
        try {
            this.state = 2719;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_ALL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2706;
                this.match(ImpalaSqlParser.KW_ALL);
                }
                break;
            case ImpalaSqlParser.KW_ALTER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2707;
                this.match(ImpalaSqlParser.KW_ALTER);
                }
                break;
            case ImpalaSqlParser.KW_DROP:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2708;
                this.match(ImpalaSqlParser.KW_DROP);
                }
                break;
            case ImpalaSqlParser.KW_CREATE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2709;
                this.match(ImpalaSqlParser.KW_CREATE);
                }
                break;
            case ImpalaSqlParser.KW_INSERT:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2710;
                this.match(ImpalaSqlParser.KW_INSERT);
                }
                break;
            case ImpalaSqlParser.KW_REFRESH:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2711;
                this.match(ImpalaSqlParser.KW_REFRESH);
                }
                break;
            case ImpalaSqlParser.KW_SELECT:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2712;
                this.match(ImpalaSqlParser.KW_SELECT);
                this.state = 2717;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 249) {
                    {
                    this.state = 2713;
                    this.match(ImpalaSqlParser.LPAREN);
                    this.state = 2714;
                    localContext._columnName = this.identifier();
                    this.state = 2715;
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
        this.enterRule(localContext, 350, ImpalaSqlParser.RULE_objectType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2721;
            _la = this.tokenStream.LA(1);
            if(!(_la === 46 || _la === 179 || _la === 190 || _la === 211)) {
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
        this.enterRule(localContext, 352, ImpalaSqlParser.RULE_qualifiedName);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2723;
            this.identifier();
            this.state = 2728;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 345, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2724;
                    this.match(ImpalaSqlParser.DOT);
                    this.state = 2725;
                    this.identifier();
                    }
                    }
                }
                this.state = 2730;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 345, this.context);
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
        this.enterRule(localContext, 354, ImpalaSqlParser.RULE_principal);
        try {
            this.state = 2737;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.KW_ROLE:
                localContext = new RolePrincipalContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2731;
                this.match(ImpalaSqlParser.KW_ROLE);
                this.state = 2732;
                this.identifier();
                }
                break;
            case ImpalaSqlParser.KW_USER:
                localContext = new UserPrincipalContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2733;
                this.match(ImpalaSqlParser.KW_USER);
                this.state = 2734;
                this.identifier();
                }
                break;
            case ImpalaSqlParser.KW_GROUP:
                localContext = new GroupPrincipalContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2735;
                this.match(ImpalaSqlParser.KW_GROUP);
                this.state = 2736;
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
        this.enterRule(localContext, 356, ImpalaSqlParser.RULE_identifier);
        try {
            this.state = 2744;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ImpalaSqlParser.IDENTIFIER:
                localContext = new UnquotedIdentifierContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2739;
                this.match(ImpalaSqlParser.IDENTIFIER);
                }
                break;
            case ImpalaSqlParser.STRING:
                localContext = new QuotedIdentifierContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2740;
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
                localContext = new UnquotedIdentifierContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2741;
                this.nonReserved();
                }
                break;
            case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
                localContext = new BackQuotedIdentifierContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2742;
                this.match(ImpalaSqlParser.BACKQUOTED_IDENTIFIER);
                }
                break;
            case ImpalaSqlParser.DIGIT_IDENTIFIER:
                localContext = new DigitIdentifierContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2743;
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
        this.enterRule(localContext, 358, ImpalaSqlParser.RULE_number);
        let _la: number;
        try {
            this.state = 2758;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 351, this.context) ) {
            case 1:
                localContext = new DecimalLiteralContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2747;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 240) {
                    {
                    this.state = 2746;
                    this.match(ImpalaSqlParser.MINUS);
                    }
                }

                this.state = 2749;
                this.match(ImpalaSqlParser.DECIMAL_VALUE);
                }
                break;
            case 2:
                localContext = new DoubleLiteralContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2751;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 240) {
                    {
                    this.state = 2750;
                    this.match(ImpalaSqlParser.MINUS);
                    }
                }

                this.state = 2753;
                this.match(ImpalaSqlParser.DOUBLE_VALUE);
                }
                break;
            case 3:
                localContext = new IntegerLiteralContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2755;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 240) {
                    {
                    this.state = 2754;
                    this.match(ImpalaSqlParser.MINUS);
                    }
                }

                this.state = 2757;
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
        this.enterRule(localContext, 360, ImpalaSqlParser.RULE_reservedKeywordsUsedAsFuncName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2760;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & 1085443) !== 0) || _la === 68 || _la === 91 || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & 2561) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & 134234241) !== 0) || ((((_la - 198)) & ~0x1F) === 0 && ((1 << (_la - 198)) & 2097409) !== 0))) {
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
        this.enterRule(localContext, 362, ImpalaSqlParser.RULE_nonReserved);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2762;
            _la = this.tokenStream.LA(1);
            if(!(_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 268959761) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 3221520879) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & 16802051) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & 74241) !== 0))) {
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
        4,1,273,2765,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        2,181,7,181,1,0,5,0,366,8,0,10,0,12,0,369,9,0,1,0,1,0,1,1,1,1,3,
        1,375,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,399,8,2,1,3,1,3,1,3,1,4,1,
        4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,412,8,4,1,5,1,5,3,5,416,8,5,1,5,1,
        5,3,5,420,8,5,1,5,1,5,1,5,1,5,1,5,5,5,427,8,5,10,5,12,5,430,9,5,
        1,5,1,5,3,5,434,8,5,1,5,1,5,3,5,438,8,5,1,5,1,5,1,5,1,5,3,5,444,
        8,5,3,5,446,8,5,1,5,1,5,1,5,3,5,451,8,5,1,6,1,6,3,6,455,8,6,1,6,
        1,6,3,6,459,8,6,1,6,1,6,1,6,1,6,1,6,3,6,466,8,6,1,6,1,6,1,6,3,6,
        471,8,6,1,6,1,6,1,7,1,7,3,7,477,8,7,1,7,1,7,3,7,481,8,7,1,7,1,7,
        1,7,1,7,1,7,5,7,488,8,7,10,7,12,7,491,9,7,1,7,1,7,1,7,1,7,3,7,497,
        8,7,1,7,1,7,3,7,501,8,7,1,7,1,7,1,7,3,7,506,8,7,3,7,508,8,7,1,7,
        1,7,1,7,3,7,513,8,7,1,7,1,7,3,7,517,8,7,1,7,1,7,1,7,1,7,1,7,3,7,
        524,8,7,1,7,1,7,3,7,528,8,7,1,8,1,8,1,8,3,8,533,8,8,1,8,1,8,3,8,
        537,8,8,1,8,1,8,3,8,541,8,8,1,8,1,8,3,8,545,8,8,1,8,1,8,1,8,1,9,
        1,9,1,9,3,9,553,8,9,1,9,1,9,1,9,3,9,558,8,9,1,9,1,9,3,9,562,8,9,
        1,10,1,10,1,10,1,10,1,11,1,11,3,11,570,8,11,1,11,1,11,3,11,574,8,
        11,1,11,1,11,1,11,1,11,1,11,5,11,581,8,11,10,11,12,11,584,9,11,3,
        11,586,8,11,1,11,3,11,589,8,11,1,11,1,11,1,11,1,11,3,11,595,8,11,
        1,11,1,11,1,11,1,11,1,11,3,11,602,8,11,1,11,1,11,1,11,1,11,1,11,
        1,11,1,11,1,11,1,11,3,11,613,8,11,1,11,1,11,1,11,3,11,618,8,11,1,
        11,1,11,1,11,3,11,623,8,11,1,11,1,11,1,11,3,11,628,8,11,1,12,1,12,
        1,12,3,12,633,8,12,1,12,1,12,1,12,1,12,1,12,5,12,640,8,12,10,12,
        12,12,643,9,12,3,12,645,8,12,1,12,3,12,648,8,12,1,12,1,12,3,12,652,
        8,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,
        1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,
        678,8,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,
        1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
        3,15,704,8,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,3,16,713,8,16,1,
        16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,723,8,16,1,16,3,16,726,
        8,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,
        3,18,740,8,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
        1,20,1,20,1,20,1,20,1,20,1,20,3,20,758,8,20,3,20,760,8,20,1,20,1,
        20,1,20,1,20,1,20,5,20,767,8,20,10,20,12,20,770,9,20,1,20,1,20,1,
        21,1,21,1,21,1,21,1,21,1,21,3,21,780,8,21,1,21,1,21,1,22,1,22,1,
        22,1,22,1,22,3,22,789,8,22,1,22,1,22,1,22,1,22,1,22,3,22,796,8,22,
        1,22,1,22,3,22,800,8,22,1,23,1,23,1,23,1,23,1,23,3,23,807,8,23,1,
        23,1,23,1,23,1,23,3,23,813,8,23,1,23,3,23,816,8,23,1,23,1,23,1,23,
        3,23,821,8,23,1,24,1,24,1,24,1,24,1,24,3,24,828,8,24,1,24,1,24,1,
        24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,842,8,24,1,
        25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,3,26,855,8,
        26,1,26,1,26,1,26,3,26,860,8,26,1,26,1,26,1,26,3,26,865,8,26,1,27,
        1,27,1,27,1,27,3,27,871,8,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,
        1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,30,1,30,
        1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,32,
        1,32,3,32,907,8,32,1,32,3,32,910,8,32,1,32,1,32,1,33,1,33,3,33,916,
        8,33,1,33,3,33,919,8,33,1,33,1,33,1,34,1,34,3,34,925,8,34,1,35,1,
        35,1,35,1,35,3,35,931,8,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
        35,1,35,1,35,3,35,943,8,35,3,35,945,8,35,1,36,1,36,1,36,1,36,1,36,
        1,36,3,36,953,8,36,1,37,1,37,1,37,1,37,1,37,1,37,3,37,961,8,37,1,
        38,1,38,1,38,3,38,966,8,38,1,38,1,38,3,38,970,8,38,1,39,1,39,1,39,
        3,39,975,8,39,1,39,1,39,1,40,1,40,1,40,3,40,982,8,40,1,40,1,40,3,
        40,986,8,40,1,41,1,41,3,41,990,8,41,1,41,1,41,1,41,1,41,3,41,996,
        8,41,1,42,1,42,3,42,1000,8,42,1,42,1,42,3,42,1004,8,42,1,42,1,42,
        1,42,1,42,1,42,5,42,1011,8,42,10,42,12,42,1014,9,42,3,42,1016,8,
        42,1,42,3,42,1019,8,42,1,43,1,43,1,43,1,43,1,44,1,44,3,44,1027,8,
        44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,3,
        46,1041,8,46,1,46,1,46,1,46,1,47,1,47,3,47,1048,8,47,1,48,1,48,1,
        48,1,48,1,48,1,48,1,48,1,49,1,49,1,49,1,49,3,49,1061,8,49,1,49,1,
        49,1,49,1,49,3,49,1067,8,49,1,49,1,49,1,49,3,49,1072,8,49,1,49,3,
        49,1075,8,49,1,50,3,50,1078,8,50,1,50,1,50,1,50,3,50,1083,8,50,1,
        50,1,50,3,50,1087,8,50,1,50,1,50,1,50,1,50,1,50,5,50,1094,8,50,10,
        50,12,50,1097,9,50,1,50,1,50,3,50,1101,8,50,1,50,1,50,1,51,1,51,
        3,51,1107,8,51,1,52,1,52,3,52,1111,8,52,1,52,1,52,1,52,3,52,1116,
        8,52,1,53,1,53,1,53,3,53,1121,8,53,1,53,3,53,1124,8,53,1,53,1,53,
        1,53,1,53,5,53,1130,8,53,10,53,12,53,1133,9,53,3,53,1135,8,53,1,
        53,1,53,3,53,1139,8,53,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,5,
        54,1149,8,54,10,54,12,54,1152,9,54,3,54,1154,8,54,1,54,1,54,3,54,
        1158,8,54,1,55,1,55,1,55,3,55,1163,8,55,1,55,1,55,3,55,1167,8,55,
        1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,
        1,56,3,56,1183,8,56,1,57,1,57,1,57,3,57,1188,8,57,1,57,1,57,1,57,
        5,57,1193,8,57,10,57,12,57,1196,9,57,3,57,1198,8,57,1,58,1,58,1,
        58,1,58,3,58,1204,8,58,1,58,3,58,1207,8,58,1,58,1,58,1,58,5,58,1212,
        8,58,10,58,12,58,1215,9,58,3,58,1217,8,58,1,59,1,59,3,59,1221,8,
        59,1,59,1,59,1,59,3,59,1226,8,59,1,59,3,59,1229,8,59,1,59,1,59,1,
        59,5,59,1234,8,59,10,59,12,59,1237,9,59,3,59,1239,8,59,1,60,1,60,
        1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,
        1,63,1,63,1,63,1,63,1,63,1,64,1,64,3,64,1263,8,64,1,64,1,64,1,64,
        1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,3,65,1277,8,65,1,65,
        1,65,3,65,1281,8,65,1,66,1,66,3,66,1285,8,66,1,66,1,66,1,67,1,67,
        1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,
        1,68,3,68,1305,8,68,3,68,1307,8,68,3,68,1309,8,68,1,69,1,69,1,69,
        1,69,1,69,1,69,1,69,3,69,1318,8,69,3,69,1320,8,69,1,70,1,70,1,70,
        1,70,1,70,1,70,1,70,3,70,1329,8,70,3,70,1331,8,70,1,71,1,71,1,71,
        1,71,1,71,1,71,1,71,3,71,1340,8,71,3,71,1342,8,71,1,72,1,72,1,72,
        3,72,1347,8,72,1,73,1,73,1,73,1,73,1,73,1,73,1,73,3,73,1356,8,73,
        1,74,1,74,1,74,1,74,1,74,1,74,1,74,3,74,1365,8,74,1,75,1,75,1,75,
        1,75,1,75,1,75,1,75,3,75,1374,8,75,1,76,1,76,1,76,1,77,1,77,1,77,
        1,77,1,77,1,77,3,77,1385,8,77,1,78,1,78,1,78,1,78,3,78,1391,8,78,
        1,78,1,78,1,78,3,78,1396,8,78,1,78,3,78,1399,8,78,1,78,1,78,1,79,
        1,79,1,79,1,79,1,80,1,80,1,80,1,80,1,80,3,80,1412,8,80,1,80,1,80,
        1,80,1,80,1,80,1,80,1,80,1,80,3,80,1422,8,80,1,80,1,80,3,80,1426,
        8,80,1,81,1,81,1,81,3,81,1431,8,81,1,82,1,82,1,82,1,82,1,82,1,82,
        1,82,5,82,1440,8,82,10,82,12,82,1443,9,82,1,82,1,82,3,82,1447,8,
        82,1,83,1,83,1,83,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,86,1,86,1,
        86,1,86,1,87,1,87,1,88,1,88,1,89,1,89,1,90,1,90,1,91,1,91,1,92,1,
        92,1,93,1,93,1,93,5,93,1478,8,93,10,93,12,93,1481,9,93,1,94,1,94,
        1,94,5,94,1486,8,94,10,94,12,94,1489,9,94,1,95,1,95,3,95,1493,8,
        95,1,96,1,96,3,96,1497,8,96,1,97,1,97,3,97,1501,8,97,1,98,1,98,1,
        98,3,98,1506,8,98,1,98,1,98,3,98,1510,8,98,1,98,1,98,1,98,3,98,1515,
        8,98,1,98,1,98,1,98,3,98,1520,8,98,1,98,1,98,1,98,3,98,1525,8,98,
        1,98,1,98,3,98,1529,8,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,3,98,
        1538,8,98,1,98,3,98,1541,8,98,1,98,1,98,3,98,1545,8,98,1,99,1,99,
        1,99,5,99,1550,8,99,10,99,12,99,1553,9,99,1,100,1,100,1,100,1,100,
        1,101,1,101,1,101,1,101,3,101,1563,8,101,1,101,1,101,1,101,1,101,
        3,101,1569,8,101,5,101,1571,8,101,10,101,12,101,1574,9,101,1,101,
        1,101,1,102,3,102,1579,8,102,1,102,1,102,1,103,1,103,1,103,1,103,
        5,103,1587,8,103,10,103,12,103,1590,9,103,1,104,1,104,1,104,1,104,
        3,104,1596,8,104,1,104,1,104,1,104,3,104,1601,8,104,1,104,1,104,
        1,104,3,104,1606,8,104,1,104,1,104,1,104,3,104,1611,8,104,1,104,
        1,104,5,104,1615,8,104,10,104,12,104,1618,9,104,3,104,1620,8,104,
        1,105,1,105,1,105,1,105,1,105,1,105,1,105,3,105,1629,8,105,1,105,
        3,105,1632,8,105,1,105,3,105,1635,8,105,1,106,1,106,1,106,1,106,
        3,106,1641,8,106,1,107,1,107,1,107,1,107,3,107,1647,8,107,1,108,
        1,108,1,109,1,109,1,109,1,109,5,109,1655,8,109,10,109,12,109,1658,
        9,109,3,109,1660,8,109,1,109,1,109,3,109,1664,8,109,1,109,1,109,
        3,109,1668,8,109,1,110,3,110,1671,8,110,1,110,1,110,5,110,1675,8,
        110,10,110,12,110,1678,9,110,3,110,1680,8,110,1,111,1,111,1,111,
        1,111,3,111,1686,8,111,1,111,1,111,5,111,1690,8,111,10,111,12,111,
        1693,9,111,3,111,1695,8,111,1,112,3,112,1698,8,112,1,112,1,112,3,
        112,1702,8,112,1,113,1,113,1,113,1,113,1,113,1,113,1,113,1,113,3,
        113,1712,8,113,1,114,1,114,1,115,1,115,1,116,1,116,1,116,5,116,1721,
        8,116,10,116,12,116,1724,9,116,1,116,1,116,3,116,1728,8,116,1,116,
        3,116,1731,8,116,1,117,1,117,3,117,1735,8,117,1,117,1,117,1,117,
        1,118,1,118,3,118,1742,8,118,1,118,1,118,1,118,1,118,1,118,1,118,
        5,118,1750,8,118,10,118,12,118,1753,9,118,1,118,1,118,1,119,1,119,
        1,119,1,119,1,119,1,119,1,119,3,119,1764,8,119,1,119,1,119,1,119,
        1,119,3,119,1770,8,119,3,119,1772,8,119,1,120,1,120,1,120,1,120,
        1,120,1,120,1,120,3,120,1781,8,120,1,120,3,120,1784,8,120,1,121,
        1,121,1,121,1,121,1,121,3,121,1791,8,121,1,122,1,122,1,122,1,122,
        1,122,1,122,1,122,1,122,3,122,1801,8,122,1,123,1,123,1,123,1,123,
        3,123,1807,8,123,1,124,1,124,1,124,1,124,5,124,1813,8,124,10,124,
        12,124,1816,9,124,1,124,1,124,1,125,1,125,1,125,1,125,5,125,1824,
        8,125,10,125,12,125,1827,9,125,1,125,1,125,1,126,1,126,1,126,5,126,
        1834,8,126,10,126,12,126,1837,9,126,1,127,1,127,1,127,1,127,1,127,
        1,127,1,127,1,127,3,127,1847,8,127,3,127,1849,8,127,1,127,1,127,
        1,127,1,127,3,127,1855,8,127,1,128,1,128,1,128,3,128,1860,8,128,
        1,129,1,129,1,129,1,129,1,129,1,129,5,129,1868,8,129,10,129,12,129,
        1871,9,129,3,129,1873,8,129,1,129,1,129,1,129,1,129,3,129,1879,8,
        129,3,129,1881,8,129,1,130,1,130,1,130,1,130,1,130,1,130,3,130,1889,
        8,130,1,130,1,130,1,130,1,130,3,130,1895,8,130,1,130,5,130,1898,
        8,130,10,130,12,130,1901,9,130,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,5,131,1910,8,131,10,131,12,131,1913,9,131,1,131,1,131,1,131,
        1,131,3,131,1919,8,131,1,132,1,132,3,132,1923,8,132,1,132,1,132,
        3,132,1927,8,132,1,133,1,133,3,133,1931,8,133,1,133,3,133,1934,8,
        133,1,133,1,133,1,133,5,133,1939,8,133,10,133,12,133,1942,9,133,
        1,133,1,133,1,133,1,133,5,133,1948,8,133,10,133,12,133,1951,9,133,
        3,133,1953,8,133,1,133,1,133,3,133,1957,8,133,1,133,1,133,1,133,
        3,133,1962,8,133,1,133,1,133,3,133,1966,8,133,1,134,3,134,1969,8,
        134,1,134,1,134,1,134,5,134,1974,8,134,10,134,12,134,1977,9,134,
        1,135,1,135,1,136,1,136,1,136,1,136,5,136,1985,8,136,10,136,12,136,
        1988,9,136,3,136,1990,8,136,1,136,1,136,3,136,1994,8,136,1,137,1,
        137,3,137,1998,8,137,1,137,1,137,1,137,1,138,1,138,1,139,1,139,3,
        139,2007,8,139,1,139,3,139,2010,8,139,1,139,1,139,1,139,1,139,1,
        139,3,139,2017,8,139,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,
        140,1,140,1,140,1,140,1,140,3,140,2031,8,140,5,140,2033,8,140,10,
        140,12,140,2036,9,140,1,141,3,141,2039,8,141,1,141,1,141,3,141,2043,
        8,141,1,141,1,141,3,141,2047,8,141,1,141,1,141,3,141,2051,8,141,
        1,141,1,141,3,141,2055,8,141,1,141,1,141,3,141,2059,8,141,1,141,
        1,141,1,141,1,141,1,141,1,141,1,141,1,141,3,141,2069,8,141,1,142,
        1,142,1,142,1,142,1,142,1,142,1,142,5,142,2078,8,142,10,142,12,142,
        2081,9,142,1,142,1,142,3,142,2085,8,142,1,143,1,143,1,143,1,143,
        1,143,1,143,1,143,1,143,1,143,1,143,1,143,3,143,2098,8,143,3,143,
        2100,8,143,1,144,1,144,1,145,1,145,3,145,2106,8,145,1,145,1,145,
        3,145,2110,8,145,3,145,2112,8,145,1,146,1,146,1,146,1,146,5,146,
        2118,8,146,10,146,12,146,2121,9,146,1,146,1,146,1,147,1,147,3,147,
        2127,8,147,1,147,1,147,1,147,3,147,2132,8,147,1,148,1,148,1,148,
        1,148,1,149,1,149,1,149,1,149,1,149,5,149,2143,8,149,10,149,12,149,
        2146,9,149,1,149,1,149,1,149,3,149,2151,8,149,1,150,1,150,1,150,
        1,150,1,151,1,151,3,151,2159,8,151,1,152,1,152,1,153,1,153,1,153,
        3,153,2166,8,153,1,153,1,153,3,153,2170,8,153,1,153,1,153,1,153,
        1,153,1,153,1,153,5,153,2178,8,153,10,153,12,153,2181,9,153,1,154,
        1,154,1,154,1,154,1,154,1,154,1,154,1,154,3,154,2191,8,154,1,154,
        1,154,1,154,1,154,1,154,1,154,3,154,2199,8,154,1,154,1,154,1,154,
        1,154,1,154,5,154,2206,8,154,10,154,12,154,2209,9,154,1,154,1,154,
        1,154,3,154,2214,8,154,1,154,1,154,1,154,3,154,2219,8,154,1,154,
        1,154,1,154,1,154,3,154,2225,8,154,1,154,1,154,1,154,1,154,3,154,
        2231,8,154,1,154,1,154,1,154,3,154,2236,8,154,1,154,1,154,1,154,
        3,154,2241,8,154,1,155,1,155,1,155,1,155,3,155,2247,8,155,1,155,
        1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,5,155,2258,8,155,
        10,155,12,155,2261,9,155,1,156,1,156,1,156,1,156,1,156,1,156,1,156,
        1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,
        1,156,1,156,1,156,1,156,1,156,1,156,3,156,2287,8,156,1,156,1,156,
        1,156,1,156,3,156,2293,8,156,5,156,2295,8,156,10,156,12,156,2298,
        9,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,5,156,2307,8,156,
        10,156,12,156,2310,9,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,
        3,156,2319,8,156,1,156,3,156,2322,8,156,1,156,1,156,1,156,3,156,
        2327,8,156,1,156,1,156,1,156,5,156,2332,8,156,10,156,12,156,2335,
        9,156,3,156,2337,8,156,1,156,1,156,1,156,1,156,1,156,5,156,2344,
        8,156,10,156,12,156,2347,9,156,3,156,2349,8,156,1,156,1,156,3,156,
        2353,8,156,1,156,3,156,2356,8,156,1,156,1,156,1,156,1,156,1,156,
        1,156,1,156,1,156,5,156,2366,8,156,10,156,12,156,2369,9,156,3,156,
        2371,8,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,
        1,156,1,156,1,156,1,156,1,156,1,156,4,156,2388,8,156,11,156,12,156,
        2389,1,156,1,156,3,156,2394,8,156,1,156,1,156,1,156,1,156,4,156,
        2400,8,156,11,156,12,156,2401,1,156,1,156,3,156,2406,8,156,1,156,
        1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,
        1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,5,156,2429,
        8,156,10,156,12,156,2432,9,156,3,156,2434,8,156,1,156,1,156,1,156,
        1,156,1,156,1,156,1,156,3,156,2443,8,156,1,156,1,156,1,156,1,156,
        3,156,2449,8,156,1,156,1,156,1,156,1,156,3,156,2455,8,156,1,156,
        1,156,1,156,1,156,3,156,2461,8,156,1,156,1,156,1,156,1,156,1,156,
        1,156,1,156,1,156,1,156,3,156,2472,8,156,1,156,1,156,1,156,1,156,
        1,156,1,156,1,156,3,156,2481,8,156,1,156,1,156,1,156,1,156,1,156,
        1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,
        1,156,1,156,5,156,2501,8,156,10,156,12,156,2504,9,156,3,156,2506,
        8,156,1,156,3,156,2509,8,156,1,156,1,156,1,156,1,156,1,156,1,156,
        1,156,1,156,5,156,2519,8,156,10,156,12,156,2522,9,156,1,157,1,157,
        1,157,1,157,3,157,2528,8,157,3,157,2530,8,157,1,158,1,158,1,159,
        1,159,1,160,1,160,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,
        1,161,1,161,1,161,1,161,1,161,1,161,3,161,2552,8,161,1,162,1,162,
        1,163,1,163,1,164,1,164,1,164,1,164,1,164,1,164,1,164,1,164,1,164,
        1,164,1,164,1,164,1,164,1,164,1,164,1,164,1,164,1,164,1,164,1,164,
        1,164,1,164,1,164,5,164,2581,8,164,10,164,12,164,2584,9,164,1,164,
        1,164,1,164,1,164,1,164,1,164,1,164,5,164,2593,8,164,10,164,12,164,
        2596,9,164,1,164,1,164,3,164,2600,8,164,3,164,2602,8,164,1,164,1,
        164,5,164,2606,8,164,10,164,12,164,2609,9,164,1,165,1,165,3,165,
        2613,8,165,1,166,1,166,1,166,1,166,3,166,2619,8,166,1,167,1,167,
        1,167,1,167,1,167,1,168,1,168,1,168,1,168,1,168,1,168,1,169,1,169,
        1,169,1,169,1,169,1,169,1,169,5,169,2639,8,169,10,169,12,169,2642,
        9,169,3,169,2644,8,169,1,169,1,169,1,169,1,169,1,169,5,169,2651,
        8,169,10,169,12,169,2654,9,169,3,169,2656,8,169,1,169,3,169,2659,
        8,169,1,169,1,169,1,170,1,170,1,170,1,170,1,170,1,170,1,170,1,170,
        1,170,1,170,1,170,1,170,1,170,1,170,1,170,1,170,3,170,2679,8,170,
        1,171,1,171,1,171,1,171,1,171,1,171,1,171,1,171,1,171,3,171,2690,
        8,171,1,172,1,172,1,172,1,172,1,172,3,172,2697,8,172,1,173,1,173,
        1,173,5,173,2702,8,173,10,173,12,173,2705,9,173,1,174,1,174,1,174,
        1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,174,3,174,2718,8,174,
        3,174,2720,8,174,1,175,1,175,1,176,1,176,1,176,5,176,2727,8,176,
        10,176,12,176,2730,9,176,1,177,1,177,1,177,1,177,1,177,1,177,3,177,
        2738,8,177,1,178,1,178,1,178,1,178,1,178,3,178,2745,8,178,1,179,
        3,179,2748,8,179,1,179,1,179,3,179,2752,8,179,1,179,1,179,3,179,
        2756,8,179,1,179,3,179,2759,8,179,1,180,1,180,1,181,1,181,1,181,
        10,768,1441,1616,1656,1676,1691,1722,1751,1825,2296,6,260,280,306,
        310,312,328,182,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
        36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,
        80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,
        118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,
        150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,
        182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,
        214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,
        246,248,250,252,254,256,258,260,262,264,266,268,270,272,274,276,
        278,280,282,284,286,288,290,292,294,296,298,300,302,304,306,308,
        310,312,314,316,318,320,322,324,326,328,330,332,334,336,338,340,
        342,344,346,348,350,352,354,356,358,360,362,0,32,2,0,46,46,171,171,
        2,0,167,167,206,206,2,0,177,177,204,204,2,0,69,69,80,80,2,0,27,27,
        160,160,2,0,103,103,145,145,2,0,47,47,172,172,2,0,3,3,12,12,3,0,
        87,87,167,167,206,206,2,0,179,179,211,211,1,0,229,232,2,0,148,148,
        221,225,2,0,65,65,95,95,2,0,64,64,202,202,2,0,10,10,55,55,2,0,75,
        75,112,112,2,0,2,2,57,57,2,0,14,14,187,187,3,0,106,106,115,115,165,
        165,2,0,105,105,164,164,4,0,70,70,134,134,196,196,210,210,1,0,239,
        240,1,0,241,243,1,0,233,238,3,0,2,2,6,6,182,182,2,0,70,70,196,196,
        5,0,48,49,91,92,123,126,173,174,219,220,1,0,128,131,2,0,77,77,150,
        150,4,0,46,46,179,179,190,190,211,211,16,0,28,29,40,40,43,43,48,
        48,68,68,91,91,114,114,123,123,125,125,159,159,166,166,173,173,186,
        186,198,198,206,206,219,219,22,0,14,14,43,44,48,49,65,65,68,68,91,
        91,95,95,110,110,119,119,123,126,128,131,138,138,141,141,153,154,
        173,174,181,181,186,187,197,197,206,206,215,215,219,219,222,222,
        3088,0,367,1,0,0,0,2,372,1,0,0,0,4,398,1,0,0,0,6,400,1,0,0,0,8,411,
        1,0,0,0,10,413,1,0,0,0,12,452,1,0,0,0,14,474,1,0,0,0,16,529,1,0,
        0,0,18,549,1,0,0,0,20,563,1,0,0,0,22,567,1,0,0,0,24,629,1,0,0,0,
        26,677,1,0,0,0,28,679,1,0,0,0,30,687,1,0,0,0,32,707,1,0,0,0,34,727,
        1,0,0,0,36,734,1,0,0,0,38,743,1,0,0,0,40,751,1,0,0,0,42,773,1,0,
        0,0,44,783,1,0,0,0,46,801,1,0,0,0,48,822,1,0,0,0,50,843,1,0,0,0,
        52,849,1,0,0,0,54,866,1,0,0,0,56,875,1,0,0,0,58,882,1,0,0,0,60,890,
        1,0,0,0,62,897,1,0,0,0,64,904,1,0,0,0,66,913,1,0,0,0,68,924,1,0,
        0,0,70,926,1,0,0,0,72,946,1,0,0,0,74,960,1,0,0,0,76,962,1,0,0,0,
        78,971,1,0,0,0,80,978,1,0,0,0,82,987,1,0,0,0,84,997,1,0,0,0,86,1020,
        1,0,0,0,88,1026,1,0,0,0,90,1028,1,0,0,0,92,1035,1,0,0,0,94,1047,
        1,0,0,0,96,1049,1,0,0,0,98,1056,1,0,0,0,100,1077,1,0,0,0,102,1106,
        1,0,0,0,104,1108,1,0,0,0,106,1117,1,0,0,0,108,1140,1,0,0,0,110,1159,
        1,0,0,0,112,1182,1,0,0,0,114,1184,1,0,0,0,116,1199,1,0,0,0,118,1218,
        1,0,0,0,120,1240,1,0,0,0,122,1245,1,0,0,0,124,1250,1,0,0,0,126,1255,
        1,0,0,0,128,1260,1,0,0,0,130,1267,1,0,0,0,132,1282,1,0,0,0,134,1288,
        1,0,0,0,136,1308,1,0,0,0,138,1310,1,0,0,0,140,1321,1,0,0,0,142,1332,
        1,0,0,0,144,1346,1,0,0,0,146,1348,1,0,0,0,148,1357,1,0,0,0,150,1366,
        1,0,0,0,152,1375,1,0,0,0,154,1378,1,0,0,0,156,1386,1,0,0,0,158,1402,
        1,0,0,0,160,1406,1,0,0,0,162,1430,1,0,0,0,164,1432,1,0,0,0,166,1448,
        1,0,0,0,168,1451,1,0,0,0,170,1455,1,0,0,0,172,1458,1,0,0,0,174,1462,
        1,0,0,0,176,1464,1,0,0,0,178,1466,1,0,0,0,180,1468,1,0,0,0,182,1470,
        1,0,0,0,184,1472,1,0,0,0,186,1474,1,0,0,0,188,1482,1,0,0,0,190,1492,
        1,0,0,0,192,1496,1,0,0,0,194,1500,1,0,0,0,196,1505,1,0,0,0,198,1546,
        1,0,0,0,200,1554,1,0,0,0,202,1558,1,0,0,0,204,1578,1,0,0,0,206,1582,
        1,0,0,0,208,1591,1,0,0,0,210,1621,1,0,0,0,212,1636,1,0,0,0,214,1642,
        1,0,0,0,216,1648,1,0,0,0,218,1650,1,0,0,0,220,1670,1,0,0,0,222,1681,
        1,0,0,0,224,1701,1,0,0,0,226,1711,1,0,0,0,228,1713,1,0,0,0,230,1715,
        1,0,0,0,232,1730,1,0,0,0,234,1732,1,0,0,0,236,1739,1,0,0,0,238,1771,
        1,0,0,0,240,1783,1,0,0,0,242,1790,1,0,0,0,244,1800,1,0,0,0,246,1802,
        1,0,0,0,248,1808,1,0,0,0,250,1819,1,0,0,0,252,1830,1,0,0,0,254,1838,
        1,0,0,0,256,1856,1,0,0,0,258,1861,1,0,0,0,260,1882,1,0,0,0,262,1918,
        1,0,0,0,264,1920,1,0,0,0,266,1928,1,0,0,0,268,1968,1,0,0,0,270,1978,
        1,0,0,0,272,1993,1,0,0,0,274,1995,1,0,0,0,276,2002,1,0,0,0,278,2016,
        1,0,0,0,280,2018,1,0,0,0,282,2068,1,0,0,0,284,2084,1,0,0,0,286,2086,
        1,0,0,0,288,2101,1,0,0,0,290,2103,1,0,0,0,292,2113,1,0,0,0,294,2131,
        1,0,0,0,296,2133,1,0,0,0,298,2137,1,0,0,0,300,2152,1,0,0,0,302,2158,
        1,0,0,0,304,2160,1,0,0,0,306,2169,1,0,0,0,308,2240,1,0,0,0,310,2246,
        1,0,0,0,312,2508,1,0,0,0,314,2529,1,0,0,0,316,2531,1,0,0,0,318,2533,
        1,0,0,0,320,2535,1,0,0,0,322,2551,1,0,0,0,324,2553,1,0,0,0,326,2555,
        1,0,0,0,328,2601,1,0,0,0,330,2612,1,0,0,0,332,2618,1,0,0,0,334,2620,
        1,0,0,0,336,2625,1,0,0,0,338,2631,1,0,0,0,340,2678,1,0,0,0,342,2689,
        1,0,0,0,344,2696,1,0,0,0,346,2698,1,0,0,0,348,2719,1,0,0,0,350,2721,
        1,0,0,0,352,2723,1,0,0,0,354,2737,1,0,0,0,356,2744,1,0,0,0,358,2758,
        1,0,0,0,360,2760,1,0,0,0,362,2762,1,0,0,0,364,366,3,2,1,0,365,364,
        1,0,0,0,366,369,1,0,0,0,367,365,1,0,0,0,367,368,1,0,0,0,368,370,
        1,0,0,0,369,367,1,0,0,0,370,371,5,0,0,1,371,1,1,0,0,0,372,374,3,
        4,2,0,373,375,5,246,0,0,374,373,1,0,0,0,374,375,1,0,0,0,375,3,1,
        0,0,0,376,399,3,204,102,0,377,399,3,6,3,0,378,399,3,8,4,0,379,399,
        3,26,13,0,380,399,3,64,32,0,381,399,3,66,33,0,382,399,3,68,34,0,
        383,399,3,74,37,0,384,399,3,88,44,0,385,399,3,94,47,0,386,399,3,
        100,50,0,387,399,3,102,51,0,388,399,3,108,54,0,389,399,3,110,55,
        0,390,399,3,112,56,0,391,399,3,144,72,0,392,399,3,152,76,0,393,399,
        3,154,77,0,394,399,3,156,78,0,395,399,3,158,79,0,396,399,3,160,80,
        0,397,399,3,162,81,0,398,376,1,0,0,0,398,377,1,0,0,0,398,378,1,0,
        0,0,398,379,1,0,0,0,398,380,1,0,0,0,398,381,1,0,0,0,398,382,1,0,
        0,0,398,383,1,0,0,0,398,384,1,0,0,0,398,385,1,0,0,0,398,386,1,0,
        0,0,398,387,1,0,0,0,398,388,1,0,0,0,398,389,1,0,0,0,398,390,1,0,
        0,0,398,391,1,0,0,0,398,392,1,0,0,0,398,393,1,0,0,0,398,394,1,0,
        0,0,398,395,1,0,0,0,398,396,1,0,0,0,398,397,1,0,0,0,399,5,1,0,0,
        0,400,401,5,205,0,0,401,402,3,184,92,0,402,7,1,0,0,0,403,412,3,18,
        9,0,404,412,3,20,10,0,405,412,3,22,11,0,406,412,3,24,12,0,407,412,
        3,16,8,0,408,412,3,14,7,0,409,412,3,12,6,0,410,412,3,10,5,0,411,
        403,1,0,0,0,411,404,1,0,0,0,411,405,1,0,0,0,411,406,1,0,0,0,411,
        407,1,0,0,0,411,408,1,0,0,0,411,409,1,0,0,0,411,410,1,0,0,0,412,
        9,1,0,0,0,413,415,5,37,0,0,414,416,5,19,0,0,415,414,1,0,0,0,415,
        416,1,0,0,0,416,417,1,0,0,0,417,419,5,190,0,0,418,420,3,172,86,0,
        419,418,1,0,0,0,419,420,1,0,0,0,420,421,1,0,0,0,421,437,3,174,87,
        0,422,423,5,249,0,0,423,428,3,214,107,0,424,425,5,247,0,0,425,427,
        3,214,107,0,426,424,1,0,0,0,427,430,1,0,0,0,428,426,1,0,0,0,428,
        429,1,0,0,0,429,433,1,0,0,0,430,428,1,0,0,0,431,432,5,247,0,0,432,
        434,3,208,104,0,433,431,1,0,0,0,433,434,1,0,0,0,434,435,1,0,0,0,
        435,436,5,250,0,0,436,438,1,0,0,0,437,422,1,0,0,0,437,438,1,0,0,
        0,438,445,1,0,0,0,439,440,5,17,0,0,440,443,5,26,0,0,441,444,3,292,
        146,0,442,444,3,250,125,0,443,441,1,0,0,0,443,442,1,0,0,0,444,446,
        1,0,0,0,445,439,1,0,0,0,445,446,1,0,0,0,446,447,1,0,0,0,447,450,
        3,196,98,0,448,449,5,9,0,0,449,451,3,204,102,0,450,448,1,0,0,0,450,
        451,1,0,0,0,451,11,1,0,0,0,452,454,5,37,0,0,453,455,5,19,0,0,454,
        453,1,0,0,0,454,455,1,0,0,0,455,456,1,0,0,0,456,458,5,190,0,0,457,
        459,3,172,86,0,458,457,1,0,0,0,458,459,1,0,0,0,459,460,1,0,0,0,460,
        461,3,174,87,0,461,465,5,115,0,0,462,466,3,186,93,0,463,464,5,148,
        0,0,464,466,3,314,157,0,465,462,1,0,0,0,465,463,1,0,0,0,466,470,
        1,0,0,0,467,468,5,17,0,0,468,469,5,26,0,0,469,471,3,250,125,0,470,
        467,1,0,0,0,470,471,1,0,0,0,471,472,1,0,0,0,472,473,3,196,98,0,473,
        13,1,0,0,0,474,476,5,37,0,0,475,477,5,19,0,0,476,475,1,0,0,0,476,
        477,1,0,0,0,477,478,1,0,0,0,478,480,5,190,0,0,479,481,3,172,86,0,
        480,479,1,0,0,0,480,481,1,0,0,0,481,482,1,0,0,0,482,500,3,174,87,
        0,483,484,5,249,0,0,484,489,3,216,108,0,485,486,5,247,0,0,486,488,
        3,216,108,0,487,485,1,0,0,0,488,491,1,0,0,0,489,487,1,0,0,0,489,
        490,1,0,0,0,490,496,1,0,0,0,491,489,1,0,0,0,492,493,5,247,0,0,493,
        494,5,151,0,0,494,495,5,110,0,0,495,497,3,292,146,0,496,492,1,0,
        0,0,496,497,1,0,0,0,497,498,1,0,0,0,498,499,5,250,0,0,499,501,1,
        0,0,0,500,483,1,0,0,0,500,501,1,0,0,0,501,507,1,0,0,0,502,503,5,
        151,0,0,503,505,5,110,0,0,504,506,3,292,146,0,505,504,1,0,0,0,505,
        506,1,0,0,0,506,508,1,0,0,0,507,502,1,0,0,0,507,508,1,0,0,0,508,
        512,1,0,0,0,509,510,5,146,0,0,510,511,5,26,0,0,511,513,3,232,116,
        0,512,509,1,0,0,0,512,513,1,0,0,0,513,516,1,0,0,0,514,515,5,34,0,
        0,515,517,3,314,157,0,516,514,1,0,0,0,516,517,1,0,0,0,517,518,1,
        0,0,0,518,519,5,23,0,0,519,520,5,9,0,0,520,523,5,111,0,0,521,522,
        5,25,0,0,522,524,3,248,124,0,523,521,1,0,0,0,523,524,1,0,0,0,524,
        527,1,0,0,0,525,526,5,9,0,0,526,528,3,204,102,0,527,525,1,0,0,0,
        527,528,1,0,0,0,528,15,1,0,0,0,529,530,5,37,0,0,530,532,5,214,0,
        0,531,533,3,172,86,0,532,531,1,0,0,0,532,533,1,0,0,0,533,534,1,0,
        0,0,534,536,3,178,89,0,535,537,3,202,101,0,536,535,1,0,0,0,536,537,
        1,0,0,0,537,540,1,0,0,0,538,539,5,34,0,0,539,541,3,314,157,0,540,
        538,1,0,0,0,540,541,1,0,0,0,541,544,1,0,0,0,542,543,5,25,0,0,543,
        545,3,248,124,0,544,542,1,0,0,0,544,545,1,0,0,0,545,546,1,0,0,0,
        546,547,5,9,0,0,547,548,3,204,102,0,548,17,1,0,0,0,549,550,5,37,
        0,0,550,552,7,0,0,0,551,553,3,172,86,0,552,551,1,0,0,0,552,553,1,
        0,0,0,553,554,1,0,0,0,554,557,3,176,88,0,555,556,5,34,0,0,556,558,
        3,314,157,0,557,555,1,0,0,0,557,558,1,0,0,0,558,561,1,0,0,0,559,
        560,5,24,0,0,560,562,3,314,157,0,561,559,1,0,0,0,561,562,1,0,0,0,
        562,19,1,0,0,0,563,564,5,37,0,0,564,565,5,167,0,0,565,566,3,356,
        178,0,566,21,1,0,0,0,567,569,5,37,0,0,568,570,5,12,0,0,569,568,1,
        0,0,0,569,570,1,0,0,0,570,571,1,0,0,0,571,573,5,84,0,0,572,574,3,
        172,86,0,573,572,1,0,0,0,573,574,1,0,0,0,574,575,1,0,0,0,575,588,
        3,180,90,0,576,585,5,249,0,0,577,582,3,328,164,0,578,579,5,247,0,
        0,579,581,3,328,164,0,580,578,1,0,0,0,581,584,1,0,0,0,582,580,1,
        0,0,0,582,583,1,0,0,0,583,586,1,0,0,0,584,582,1,0,0,0,585,577,1,
        0,0,0,585,586,1,0,0,0,586,587,1,0,0,0,587,589,5,250,0,0,588,576,
        1,0,0,0,588,589,1,0,0,0,589,590,1,0,0,0,590,591,5,161,0,0,591,594,
        3,328,164,0,592,593,5,102,0,0,593,595,3,328,164,0,594,592,1,0,0,
        0,594,595,1,0,0,0,595,596,1,0,0,0,596,597,5,24,0,0,597,601,5,258,
        0,0,598,599,5,104,0,0,599,600,5,233,0,0,600,602,5,258,0,0,601,598,
        1,0,0,0,601,602,1,0,0,0,602,603,1,0,0,0,603,604,5,208,0,0,604,605,
        5,233,0,0,605,606,5,258,0,0,606,607,5,127,0,0,607,608,5,233,0,0,
        608,612,5,258,0,0,609,610,5,18,0,0,610,611,5,233,0,0,611,613,5,258,
        0,0,612,609,1,0,0,0,612,613,1,0,0,0,613,617,1,0,0,0,614,615,5,20,
        0,0,615,616,5,233,0,0,616,618,5,258,0,0,617,614,1,0,0,0,617,618,
        1,0,0,0,618,622,1,0,0,0,619,620,5,189,0,0,620,621,5,233,0,0,621,
        623,5,258,0,0,622,619,1,0,0,0,622,623,1,0,0,0,623,627,1,0,0,0,624,
        625,5,76,0,0,625,626,5,233,0,0,626,628,5,258,0,0,627,624,1,0,0,0,
        627,628,1,0,0,0,628,23,1,0,0,0,629,630,5,37,0,0,630,632,5,84,0,0,
        631,633,3,172,86,0,632,631,1,0,0,0,632,633,1,0,0,0,633,634,1,0,0,
        0,634,647,3,180,90,0,635,644,5,249,0,0,636,641,3,328,164,0,637,638,
        5,247,0,0,638,640,3,328,164,0,639,637,1,0,0,0,640,643,1,0,0,0,641,
        639,1,0,0,0,641,642,1,0,0,0,642,645,1,0,0,0,643,641,1,0,0,0,644,
        636,1,0,0,0,644,645,1,0,0,0,645,646,1,0,0,0,646,648,5,250,0,0,647,
        635,1,0,0,0,647,648,1,0,0,0,648,651,1,0,0,0,649,650,5,161,0,0,650,
        652,3,328,164,0,651,649,1,0,0,0,651,652,1,0,0,0,652,653,1,0,0,0,
        653,654,5,24,0,0,654,655,5,258,0,0,655,656,5,188,0,0,656,657,5,233,
        0,0,657,658,3,314,157,0,658,25,1,0,0,0,659,678,3,28,14,0,660,678,
        3,62,31,0,661,678,3,60,30,0,662,678,3,58,29,0,663,678,3,54,27,0,
        664,678,3,56,28,0,665,678,3,52,26,0,666,678,3,48,24,0,667,678,3,
        50,25,0,668,678,3,46,23,0,669,678,3,44,22,0,670,678,3,42,21,0,671,
        678,3,40,20,0,672,678,3,34,17,0,673,678,3,30,15,0,674,678,3,32,16,
        0,675,678,3,36,18,0,676,678,3,38,19,0,677,659,1,0,0,0,677,660,1,
        0,0,0,677,661,1,0,0,0,677,662,1,0,0,0,677,663,1,0,0,0,677,664,1,
        0,0,0,677,665,1,0,0,0,677,666,1,0,0,0,677,667,1,0,0,0,677,668,1,
        0,0,0,677,669,1,0,0,0,677,670,1,0,0,0,677,671,1,0,0,0,677,672,1,
        0,0,0,677,673,1,0,0,0,677,674,1,0,0,0,677,675,1,0,0,0,677,676,1,
        0,0,0,678,27,1,0,0,0,679,680,5,4,0,0,680,681,5,46,0,0,681,682,3,
        184,92,0,682,683,5,177,0,0,683,684,5,143,0,0,684,685,7,1,0,0,685,
        686,3,356,178,0,686,29,1,0,0,0,687,688,5,4,0,0,688,689,5,190,0,0,
        689,690,3,186,93,0,690,691,5,177,0,0,691,692,5,32,0,0,692,693,5,
        183,0,0,693,694,3,192,96,0,694,695,5,249,0,0,695,696,3,228,114,0,
        696,697,5,233,0,0,697,703,3,314,157,0,698,699,5,247,0,0,699,700,
        3,228,114,0,700,701,5,233,0,0,701,702,3,314,157,0,702,704,1,0,0,
        0,703,698,1,0,0,0,703,704,1,0,0,0,704,705,1,0,0,0,705,706,5,250,
        0,0,706,31,1,0,0,0,707,708,5,4,0,0,708,709,5,190,0,0,709,712,3,186,
        93,0,710,711,5,146,0,0,711,713,3,304,152,0,712,710,1,0,0,0,712,713,
        1,0,0,0,713,714,1,0,0,0,714,725,5,177,0,0,715,716,5,30,0,0,716,717,
        5,94,0,0,717,722,3,314,157,0,718,719,5,218,0,0,719,720,5,152,0,0,
        720,721,5,233,0,0,721,723,3,358,179,0,722,718,1,0,0,0,722,723,1,
        0,0,0,723,726,1,0,0,0,724,726,5,199,0,0,725,715,1,0,0,0,725,724,
        1,0,0,0,726,33,1,0,0,0,727,728,5,4,0,0,728,729,5,190,0,0,729,730,
        3,186,93,0,730,731,5,31,0,0,731,732,5,32,0,0,732,733,3,220,110,0,
        733,35,1,0,0,0,734,735,5,4,0,0,735,736,5,190,0,0,736,737,3,186,93,
        0,737,739,5,58,0,0,738,740,5,32,0,0,739,738,1,0,0,0,739,740,1,0,
        0,0,740,741,1,0,0,0,741,742,3,192,96,0,742,37,1,0,0,0,743,744,5,
        4,0,0,744,745,5,190,0,0,745,746,3,186,93,0,746,747,5,177,0,0,747,
        748,5,143,0,0,748,749,7,1,0,0,749,750,3,356,178,0,750,39,1,0,0,0,
        751,752,5,4,0,0,752,753,5,190,0,0,753,759,3,186,93,0,754,760,5,159,
        0,0,755,757,5,1,0,0,756,758,3,172,86,0,757,756,1,0,0,0,757,758,1,
        0,0,0,758,760,1,0,0,0,759,754,1,0,0,0,759,755,1,0,0,0,760,761,1,
        0,0,0,761,762,5,33,0,0,762,763,5,249,0,0,763,768,3,220,110,0,764,
        765,5,247,0,0,765,767,3,220,110,0,766,764,1,0,0,0,767,770,1,0,0,
        0,768,769,1,0,0,0,768,766,1,0,0,0,769,771,1,0,0,0,770,768,1,0,0,
        0,771,772,5,250,0,0,772,41,1,0,0,0,773,774,5,4,0,0,774,775,5,190,
        0,0,775,776,3,186,93,0,776,777,5,1,0,0,777,779,5,32,0,0,778,780,
        3,172,86,0,779,778,1,0,0,0,779,780,1,0,0,0,780,781,1,0,0,0,781,782,
        3,222,111,0,782,43,1,0,0,0,783,784,5,4,0,0,784,785,5,190,0,0,785,
        786,3,186,93,0,786,788,5,4,0,0,787,789,5,32,0,0,788,787,1,0,0,0,
        788,789,1,0,0,0,789,790,1,0,0,0,790,799,3,192,96,0,791,795,5,177,
        0,0,792,796,3,226,113,0,793,794,5,34,0,0,794,796,3,314,157,0,795,
        792,1,0,0,0,795,793,1,0,0,0,796,800,1,0,0,0,797,798,5,58,0,0,798,
        800,5,51,0,0,799,791,1,0,0,0,799,797,1,0,0,0,800,45,1,0,0,0,801,
        802,5,4,0,0,802,803,5,190,0,0,803,804,3,186,93,0,804,806,5,1,0,0,
        805,807,3,172,86,0,806,805,1,0,0,0,806,807,1,0,0,0,807,820,1,0,0,
        0,808,809,5,146,0,0,809,812,3,304,152,0,810,811,5,24,0,0,811,813,
        3,314,157,0,812,810,1,0,0,0,812,813,1,0,0,0,813,815,1,0,0,0,814,
        816,3,240,120,0,815,814,1,0,0,0,815,816,1,0,0,0,816,821,1,0,0,0,
        817,818,5,155,0,0,818,819,5,146,0,0,819,821,3,238,119,0,820,808,
        1,0,0,0,820,817,1,0,0,0,821,47,1,0,0,0,822,823,5,4,0,0,823,824,5,
        190,0,0,824,827,3,186,93,0,825,826,5,146,0,0,826,828,3,304,152,0,
        827,825,1,0,0,0,827,828,1,0,0,0,828,829,1,0,0,0,829,841,5,177,0,
        0,830,831,5,72,0,0,831,842,3,230,115,0,832,833,5,169,0,0,833,834,
        5,79,0,0,834,842,3,254,127,0,835,836,5,24,0,0,836,842,3,314,157,
        0,837,838,5,25,0,0,838,842,3,248,124,0,839,840,5,176,0,0,840,842,
        3,248,124,0,841,830,1,0,0,0,841,832,1,0,0,0,841,835,1,0,0,0,841,
        837,1,0,0,0,841,839,1,0,0,0,842,49,1,0,0,0,843,844,5,4,0,0,844,845,
        5,190,0,0,845,846,3,186,93,0,846,847,5,156,0,0,847,848,5,147,0,0,
        848,51,1,0,0,0,849,850,5,4,0,0,850,851,5,190,0,0,851,852,3,186,93,
        0,852,854,5,58,0,0,853,855,3,170,85,0,854,853,1,0,0,0,854,855,1,
        0,0,0,855,864,1,0,0,0,856,857,5,146,0,0,857,859,3,304,152,0,858,
        860,5,22,0,0,859,858,1,0,0,0,859,860,1,0,0,0,860,865,1,0,0,0,861,
        862,5,155,0,0,862,863,5,146,0,0,863,865,3,238,119,0,864,856,1,0,
        0,0,864,861,1,0,0,0,865,53,1,0,0,0,866,867,5,4,0,0,867,868,5,214,
        0,0,868,870,3,188,94,0,869,871,3,202,101,0,870,869,1,0,0,0,870,871,
        1,0,0,0,871,872,1,0,0,0,872,873,5,9,0,0,873,874,3,204,102,0,874,
        55,1,0,0,0,875,876,5,4,0,0,876,877,5,214,0,0,877,878,3,188,94,0,
        878,879,5,157,0,0,879,880,5,195,0,0,880,881,3,188,94,0,881,57,1,
        0,0,0,882,883,5,4,0,0,883,884,5,214,0,0,884,885,3,188,94,0,885,886,
        5,177,0,0,886,887,5,143,0,0,887,888,7,1,0,0,888,889,3,352,176,0,
        889,59,1,0,0,0,890,891,5,4,0,0,891,892,5,190,0,0,892,893,3,186,93,
        0,893,894,5,157,0,0,894,895,5,195,0,0,895,896,3,186,93,0,896,61,
        1,0,0,0,897,898,5,4,0,0,898,899,5,214,0,0,899,900,3,188,94,0,900,
        901,7,2,0,0,901,902,5,25,0,0,902,903,3,248,124,0,903,63,1,0,0,0,
        904,906,5,198,0,0,905,907,5,190,0,0,906,905,1,0,0,0,906,907,1,0,
        0,0,907,909,1,0,0,0,908,910,3,170,85,0,909,908,1,0,0,0,909,910,1,
        0,0,0,910,911,1,0,0,0,911,912,3,186,93,0,912,65,1,0,0,0,913,915,
        5,56,0,0,914,916,5,46,0,0,915,914,1,0,0,0,915,916,1,0,0,0,916,918,
        1,0,0,0,917,919,7,3,0,0,918,917,1,0,0,0,918,919,1,0,0,0,919,920,
        1,0,0,0,920,921,3,352,176,0,921,67,1,0,0,0,922,925,3,70,35,0,923,
        925,3,72,36,0,924,922,1,0,0,0,924,923,1,0,0,0,925,69,1,0,0,0,926,
        927,5,36,0,0,927,928,5,183,0,0,928,930,3,186,93,0,929,931,3,292,
        146,0,930,929,1,0,0,0,930,931,1,0,0,0,931,944,1,0,0,0,932,933,5,
        192,0,0,933,934,5,187,0,0,934,935,5,249,0,0,935,936,3,358,179,0,
        936,942,5,250,0,0,937,938,5,158,0,0,938,939,5,249,0,0,939,940,3,
        358,179,0,940,941,5,250,0,0,941,943,1,0,0,0,942,937,1,0,0,0,942,
        943,1,0,0,0,943,945,1,0,0,0,944,932,1,0,0,0,944,945,1,0,0,0,945,
        71,1,0,0,0,946,947,5,36,0,0,947,948,5,96,0,0,948,949,5,183,0,0,949,
        952,3,186,93,0,950,951,5,146,0,0,951,953,3,304,152,0,952,950,1,0,
        0,0,952,953,1,0,0,0,953,73,1,0,0,0,954,961,3,86,43,0,955,961,3,84,
        42,0,956,961,3,82,41,0,957,961,3,78,39,0,958,961,3,80,40,0,959,961,
        3,76,38,0,960,954,1,0,0,0,960,955,1,0,0,0,960,956,1,0,0,0,960,957,
        1,0,0,0,960,958,1,0,0,0,960,959,1,0,0,0,961,75,1,0,0,0,962,963,5,
        58,0,0,963,965,7,0,0,0,964,966,3,170,85,0,965,964,1,0,0,0,965,966,
        1,0,0,0,966,967,1,0,0,0,967,969,3,184,92,0,968,970,7,4,0,0,969,968,
        1,0,0,0,969,970,1,0,0,0,970,77,1,0,0,0,971,972,5,58,0,0,972,974,
        5,214,0,0,973,975,3,170,85,0,974,973,1,0,0,0,974,975,1,0,0,0,975,
        976,1,0,0,0,976,977,3,188,94,0,977,79,1,0,0,0,978,979,5,58,0,0,979,
        981,5,190,0,0,980,982,3,170,85,0,981,980,1,0,0,0,981,982,1,0,0,0,
        982,983,1,0,0,0,983,985,3,186,93,0,984,986,5,22,0,0,985,984,1,0,
        0,0,985,986,1,0,0,0,986,81,1,0,0,0,987,989,5,58,0,0,988,990,5,96,
        0,0,989,988,1,0,0,0,989,990,1,0,0,0,990,991,1,0,0,0,991,992,5,183,
        0,0,992,995,3,186,93,0,993,994,5,146,0,0,994,996,3,304,152,0,995,
        993,1,0,0,0,995,996,1,0,0,0,996,83,1,0,0,0,997,999,5,58,0,0,998,
        1000,5,12,0,0,999,998,1,0,0,0,999,1000,1,0,0,0,1000,1001,1,0,0,0,
        1001,1003,5,84,0,0,1002,1004,3,170,85,0,1003,1002,1,0,0,0,1003,1004,
        1,0,0,0,1004,1005,1,0,0,0,1005,1018,3,190,95,0,1006,1015,5,249,0,
        0,1007,1012,3,328,164,0,1008,1009,5,247,0,0,1009,1011,3,328,164,
        0,1010,1008,1,0,0,0,1011,1014,1,0,0,0,1012,1010,1,0,0,0,1012,1013,
        1,0,0,0,1013,1016,1,0,0,0,1014,1012,1,0,0,0,1015,1007,1,0,0,0,1015,
        1016,1,0,0,0,1016,1017,1,0,0,0,1017,1019,5,250,0,0,1018,1006,1,0,
        0,0,1018,1019,1,0,0,0,1019,85,1,0,0,0,1020,1021,5,58,0,0,1021,1022,
        5,167,0,0,1022,1023,3,356,178,0,1023,87,1,0,0,0,1024,1027,3,90,45,
        0,1025,1027,3,92,46,0,1026,1024,1,0,0,0,1026,1025,1,0,0,0,1027,89,
        1,0,0,0,1028,1029,5,86,0,0,1029,1030,5,167,0,0,1030,1031,3,356,178,
        0,1031,1032,5,195,0,0,1032,1033,5,87,0,0,1033,1034,3,356,178,0,1034,
        91,1,0,0,0,1035,1036,5,86,0,0,1036,1037,3,348,174,0,1037,1038,5,
        137,0,0,1038,1040,3,350,175,0,1039,1041,3,352,176,0,1040,1039,1,
        0,0,0,1040,1041,1,0,0,0,1041,1042,1,0,0,0,1042,1043,5,195,0,0,1043,
        1044,3,354,177,0,1044,93,1,0,0,0,1045,1048,3,96,48,0,1046,1048,3,
        98,49,0,1047,1045,1,0,0,0,1047,1046,1,0,0,0,1048,95,1,0,0,0,1049,
        1050,5,162,0,0,1050,1051,5,167,0,0,1051,1052,3,356,178,0,1052,1053,
        5,82,0,0,1053,1054,5,87,0,0,1054,1055,3,356,178,0,1055,97,1,0,0,
        0,1056,1060,5,162,0,0,1057,1058,5,86,0,0,1058,1059,5,138,0,0,1059,
        1061,5,78,0,0,1060,1057,1,0,0,0,1060,1061,1,0,0,0,1061,1062,1,0,
        0,0,1062,1063,3,348,174,0,1063,1064,5,137,0,0,1064,1066,3,350,175,
        0,1065,1067,3,352,176,0,1066,1065,1,0,0,0,1066,1067,1,0,0,0,1067,
        1068,1,0,0,0,1068,1074,5,82,0,0,1069,1075,3,354,177,0,1070,1072,
        5,167,0,0,1071,1070,1,0,0,0,1071,1072,1,0,0,0,1072,1073,1,0,0,0,
        1073,1075,3,356,178,0,1074,1069,1,0,0,0,1074,1071,1,0,0,0,1075,99,
        1,0,0,0,1076,1078,3,206,103,0,1077,1076,1,0,0,0,1077,1078,1,0,0,
        0,1078,1079,1,0,0,0,1079,1080,5,99,0,0,1080,1082,7,5,0,0,1081,1083,
        5,190,0,0,1082,1081,1,0,0,0,1082,1083,1,0,0,0,1083,1084,1,0,0,0,
        1084,1086,3,186,93,0,1085,1087,3,292,146,0,1086,1085,1,0,0,0,1086,
        1087,1,0,0,0,1087,1100,1,0,0,0,1088,1089,5,146,0,0,1089,1090,5,249,
        0,0,1090,1095,3,304,152,0,1091,1092,5,247,0,0,1092,1094,3,304,152,
        0,1093,1091,1,0,0,0,1094,1097,1,0,0,0,1095,1093,1,0,0,0,1095,1096,
        1,0,0,0,1096,1098,1,0,0,0,1097,1095,1,0,0,0,1098,1099,5,250,0,0,
        1099,1101,1,0,0,0,1100,1088,1,0,0,0,1100,1101,1,0,0,0,1101,1102,
        1,0,0,0,1102,1103,3,204,102,0,1103,101,1,0,0,0,1104,1107,3,104,52,
        0,1105,1107,3,106,53,0,1106,1104,1,0,0,0,1106,1105,1,0,0,0,1107,
        103,1,0,0,0,1108,1110,5,50,0,0,1109,1111,5,82,0,0,1110,1109,1,0,
        0,0,1110,1111,1,0,0,0,1111,1112,1,0,0,0,1112,1115,3,186,93,0,1113,
        1114,5,217,0,0,1114,1116,3,306,153,0,1115,1113,1,0,0,0,1115,1116,
        1,0,0,0,1116,105,1,0,0,0,1117,1118,5,50,0,0,1118,1123,3,186,93,0,
        1119,1121,5,9,0,0,1120,1119,1,0,0,0,1120,1121,1,0,0,0,1121,1122,
        1,0,0,0,1122,1124,3,356,178,0,1123,1120,1,0,0,0,1123,1124,1,0,0,
        0,1124,1125,1,0,0,0,1125,1134,5,82,0,0,1126,1131,3,280,140,0,1127,
        1128,5,247,0,0,1128,1130,3,280,140,0,1129,1127,1,0,0,0,1130,1133,
        1,0,0,0,1131,1129,1,0,0,0,1131,1132,1,0,0,0,1132,1135,1,0,0,0,1133,
        1131,1,0,0,0,1134,1126,1,0,0,0,1134,1135,1,0,0,0,1135,1138,1,0,0,
        0,1136,1137,5,217,0,0,1137,1139,3,306,153,0,1138,1136,1,0,0,0,1138,
        1139,1,0,0,0,1139,107,1,0,0,0,1140,1141,5,54,0,0,1141,1142,3,186,
        93,0,1142,1143,5,177,0,0,1143,1153,3,198,99,0,1144,1145,5,82,0,0,
        1145,1150,3,280,140,0,1146,1147,5,247,0,0,1147,1149,3,280,140,0,
        1148,1146,1,0,0,0,1149,1152,1,0,0,0,1150,1148,1,0,0,0,1150,1151,
        1,0,0,0,1151,1154,1,0,0,0,1152,1150,1,0,0,0,1153,1144,1,0,0,0,1153,
        1154,1,0,0,0,1154,1157,1,0,0,0,1155,1156,5,217,0,0,1156,1158,3,306,
        153,0,1157,1155,1,0,0,0,1157,1158,1,0,0,0,1158,109,1,0,0,0,1159,
        1160,5,209,0,0,1160,1162,5,103,0,0,1161,1163,5,190,0,0,1162,1161,
        1,0,0,0,1162,1163,1,0,0,0,1163,1164,1,0,0,0,1164,1166,3,186,93,0,
        1165,1167,3,292,146,0,1166,1165,1,0,0,0,1166,1167,1,0,0,0,1167,1168,
        1,0,0,0,1168,1169,3,204,102,0,1169,111,1,0,0,0,1170,1183,3,132,66,
        0,1171,1183,3,134,67,0,1172,1183,3,136,68,0,1173,1183,3,130,65,0,
        1174,1183,3,128,64,0,1175,1183,3,126,63,0,1176,1183,3,124,62,0,1177,
        1183,3,122,61,0,1178,1183,3,120,60,0,1179,1183,3,118,59,0,1180,1183,
        3,116,58,0,1181,1183,3,114,57,0,1182,1170,1,0,0,0,1182,1171,1,0,
        0,0,1182,1172,1,0,0,0,1182,1173,1,0,0,0,1182,1174,1,0,0,0,1182,1175,
        1,0,0,0,1182,1176,1,0,0,0,1182,1177,1,0,0,0,1182,1178,1,0,0,0,1182,
        1179,1,0,0,0,1182,1180,1,0,0,0,1182,1181,1,0,0,0,1183,113,1,0,0,
        0,1184,1185,5,180,0,0,1185,1197,7,6,0,0,1186,1188,5,115,0,0,1187,
        1186,1,0,0,0,1187,1188,1,0,0,0,1188,1189,1,0,0,0,1189,1194,3,314,
        157,0,1190,1191,5,255,0,0,1191,1193,3,314,157,0,1192,1190,1,0,0,
        0,1193,1196,1,0,0,0,1194,1192,1,0,0,0,1194,1195,1,0,0,0,1195,1198,
        1,0,0,0,1196,1194,1,0,0,0,1197,1187,1,0,0,0,1197,1198,1,0,0,0,1198,
        115,1,0,0,0,1199,1200,5,180,0,0,1200,1203,5,191,0,0,1201,1202,5,
        94,0,0,1202,1204,3,186,93,0,1203,1201,1,0,0,0,1203,1204,1,0,0,0,
        1204,1216,1,0,0,0,1205,1207,5,115,0,0,1206,1205,1,0,0,0,1206,1207,
        1,0,0,0,1207,1208,1,0,0,0,1208,1213,3,314,157,0,1209,1210,5,255,
        0,0,1210,1212,3,314,157,0,1211,1209,1,0,0,0,1212,1215,1,0,0,0,1213,
        1211,1,0,0,0,1213,1214,1,0,0,0,1214,1217,1,0,0,0,1215,1213,1,0,0,
        0,1216,1206,1,0,0,0,1216,1217,1,0,0,0,1217,117,1,0,0,0,1218,1220,
        5,180,0,0,1219,1221,7,7,0,0,1220,1219,1,0,0,0,1220,1221,1,0,0,0,
        1221,1222,1,0,0,0,1222,1225,5,85,0,0,1223,1224,5,94,0,0,1224,1226,
        3,184,92,0,1225,1223,1,0,0,0,1225,1226,1,0,0,0,1226,1238,1,0,0,0,
        1227,1229,5,115,0,0,1228,1227,1,0,0,0,1228,1229,1,0,0,0,1229,1230,
        1,0,0,0,1230,1235,3,314,157,0,1231,1232,5,255,0,0,1232,1234,3,314,
        157,0,1233,1231,1,0,0,0,1234,1237,1,0,0,0,1235,1233,1,0,0,0,1235,
        1236,1,0,0,0,1236,1239,1,0,0,0,1237,1235,1,0,0,0,1238,1228,1,0,0,
        0,1238,1239,1,0,0,0,1239,119,1,0,0,0,1240,1241,5,180,0,0,1241,1242,
        5,37,0,0,1242,1243,5,190,0,0,1243,1244,3,186,93,0,1244,121,1,0,0,
        0,1245,1246,5,180,0,0,1246,1247,5,37,0,0,1247,1248,5,214,0,0,1248,
        1249,3,188,94,0,1249,123,1,0,0,0,1250,1251,5,180,0,0,1251,1252,5,
        190,0,0,1252,1253,5,183,0,0,1253,1254,3,186,93,0,1254,125,1,0,0,
        0,1255,1256,5,180,0,0,1256,1257,5,32,0,0,1257,1258,5,183,0,0,1258,
        1259,3,186,93,0,1259,127,1,0,0,0,1260,1262,5,180,0,0,1261,1263,5,
        155,0,0,1262,1261,1,0,0,0,1262,1263,1,0,0,0,1263,1264,1,0,0,0,1264,
        1265,5,147,0,0,1265,1266,3,186,93,0,1266,129,1,0,0,0,1267,1268,5,
        180,0,0,1268,1269,5,73,0,0,1269,1270,5,94,0,0,1270,1280,3,186,93,
        0,1271,1272,5,146,0,0,1272,1273,5,249,0,0,1273,1276,3,304,152,0,
        1274,1275,5,247,0,0,1275,1277,3,304,152,0,1276,1274,1,0,0,0,1276,
        1277,1,0,0,0,1277,1278,1,0,0,0,1278,1279,5,250,0,0,1279,1281,1,0,
        0,0,1280,1271,1,0,0,0,1280,1281,1,0,0,0,1281,131,1,0,0,0,1282,1284,
        5,180,0,0,1283,1285,5,39,0,0,1284,1283,1,0,0,0,1284,1285,1,0,0,0,
        1285,1286,1,0,0,0,1286,1287,5,168,0,0,1287,133,1,0,0,0,1288,1289,
        5,180,0,0,1289,1290,5,167,0,0,1290,1291,5,86,0,0,1291,1292,5,87,
        0,0,1292,1293,3,356,178,0,1293,135,1,0,0,0,1294,1309,3,138,69,0,
        1295,1309,3,140,70,0,1296,1309,3,142,71,0,1297,1298,5,180,0,0,1298,
        1299,5,86,0,0,1299,1300,7,8,0,0,1300,1306,3,356,178,0,1301,1302,
        5,137,0,0,1302,1304,7,9,0,0,1303,1305,3,352,176,0,1304,1303,1,0,
        0,0,1304,1305,1,0,0,0,1305,1307,1,0,0,0,1306,1301,1,0,0,0,1306,1307,
        1,0,0,0,1307,1309,1,0,0,0,1308,1294,1,0,0,0,1308,1295,1,0,0,0,1308,
        1296,1,0,0,0,1308,1297,1,0,0,0,1309,137,1,0,0,0,1310,1311,5,180,
        0,0,1311,1312,5,86,0,0,1312,1313,7,8,0,0,1313,1319,3,356,178,0,1314,
        1315,5,137,0,0,1315,1317,5,46,0,0,1316,1318,3,184,92,0,1317,1316,
        1,0,0,0,1317,1318,1,0,0,0,1318,1320,1,0,0,0,1319,1314,1,0,0,0,1319,
        1320,1,0,0,0,1320,139,1,0,0,0,1321,1322,5,180,0,0,1322,1323,5,86,
        0,0,1323,1324,7,8,0,0,1324,1330,3,356,178,0,1325,1326,5,137,0,0,
        1326,1328,5,190,0,0,1327,1329,3,186,93,0,1328,1327,1,0,0,0,1328,
        1329,1,0,0,0,1329,1331,1,0,0,0,1330,1325,1,0,0,0,1330,1331,1,0,0,
        0,1331,141,1,0,0,0,1332,1333,5,180,0,0,1333,1334,5,86,0,0,1334,1335,
        7,8,0,0,1335,1341,3,356,178,0,1336,1337,5,137,0,0,1337,1339,5,32,
        0,0,1338,1340,3,192,96,0,1339,1338,1,0,0,0,1339,1340,1,0,0,0,1340,
        1342,1,0,0,0,1341,1336,1,0,0,0,1341,1342,1,0,0,0,1342,143,1,0,0,
        0,1343,1347,3,146,73,0,1344,1347,3,148,74,0,1345,1347,3,150,75,0,
        1346,1343,1,0,0,0,1346,1344,1,0,0,0,1346,1345,1,0,0,0,1347,145,1,
        0,0,0,1348,1349,5,34,0,0,1349,1350,5,137,0,0,1350,1351,5,46,0,0,
        1351,1352,3,184,92,0,1352,1355,5,108,0,0,1353,1356,3,314,157,0,1354,
        1356,5,134,0,0,1355,1353,1,0,0,0,1355,1354,1,0,0,0,1356,147,1,0,
        0,0,1357,1358,5,34,0,0,1358,1359,5,137,0,0,1359,1360,5,190,0,0,1360,
        1361,3,186,93,0,1361,1364,5,108,0,0,1362,1365,3,314,157,0,1363,1365,
        5,134,0,0,1364,1362,1,0,0,0,1364,1363,1,0,0,0,1365,149,1,0,0,0,1366,
        1367,5,34,0,0,1367,1368,5,137,0,0,1368,1369,5,32,0,0,1369,1370,3,
        192,96,0,1370,1373,5,108,0,0,1371,1374,3,314,157,0,1372,1374,5,134,
        0,0,1373,1371,1,0,0,0,1373,1372,1,0,0,0,1374,151,1,0,0,0,1375,1376,
        5,67,0,0,1376,1377,3,4,2,0,1377,153,1,0,0,0,1378,1384,5,177,0,0,
        1379,1385,5,2,0,0,1380,1381,3,356,178,0,1381,1382,5,233,0,0,1382,
        1383,3,304,152,0,1383,1385,1,0,0,0,1384,1379,1,0,0,0,1384,1380,1,
        0,0,0,1384,1385,1,0,0,0,1385,155,1,0,0,0,1386,1387,5,248,0,0,1387,
        1388,5,181,0,0,1388,1398,5,249,0,0,1389,1391,3,314,157,0,1390,1389,
        1,0,0,0,1390,1391,1,0,0,0,1391,1399,1,0,0,0,1392,1395,3,314,157,
        0,1393,1394,5,247,0,0,1394,1396,3,304,152,0,1395,1393,1,0,0,0,1395,
        1396,1,0,0,0,1396,1399,1,0,0,0,1397,1399,3,304,152,0,1398,1390,1,
        0,0,0,1398,1392,1,0,0,0,1398,1397,1,0,0,0,1399,1400,1,0,0,0,1400,
        1401,5,250,0,0,1401,157,1,0,0,0,1402,1403,5,107,0,0,1403,1404,5,
        121,0,0,1404,1405,3,186,93,0,1405,159,1,0,0,0,1406,1407,5,118,0,
        0,1407,1408,5,45,0,0,1408,1409,5,98,0,0,1409,1411,5,258,0,0,1410,
        1412,5,145,0,0,1411,1410,1,0,0,0,1411,1412,1,0,0,0,1412,1413,1,0,
        0,0,1413,1414,5,103,0,0,1414,1415,5,190,0,0,1415,1425,3,186,93,0,
        1416,1417,5,146,0,0,1417,1418,5,249,0,0,1418,1421,3,304,152,0,1419,
        1420,5,247,0,0,1420,1422,3,304,152,0,1421,1419,1,0,0,0,1421,1422,
        1,0,0,0,1422,1423,1,0,0,0,1423,1424,5,250,0,0,1424,1426,1,0,0,0,
        1425,1416,1,0,0,0,1425,1426,1,0,0,0,1426,161,1,0,0,0,1427,1431,3,
        164,82,0,1428,1431,3,166,83,0,1429,1431,3,168,84,0,1430,1427,1,0,
        0,0,1430,1428,1,0,0,0,1430,1429,1,0,0,0,1431,163,1,0,0,0,1432,1433,
        5,163,0,0,1433,1446,3,186,93,0,1434,1435,5,146,0,0,1435,1436,5,249,
        0,0,1436,1441,3,304,152,0,1437,1438,5,247,0,0,1438,1440,3,304,152,
        0,1439,1437,1,0,0,0,1440,1443,1,0,0,0,1441,1442,1,0,0,0,1441,1439,
        1,0,0,0,1442,1444,1,0,0,0,1443,1441,1,0,0,0,1444,1445,5,250,0,0,
        1445,1447,1,0,0,0,1446,1434,1,0,0,0,1446,1447,1,0,0,0,1447,165,1,
        0,0,0,1448,1449,5,163,0,0,1449,1450,5,13,0,0,1450,167,1,0,0,0,1451,
        1452,5,163,0,0,1452,1453,5,85,0,0,1453,1454,3,190,95,0,1454,169,
        1,0,0,0,1455,1456,5,93,0,0,1456,1457,5,66,0,0,1457,171,1,0,0,0,1458,
        1459,5,93,0,0,1459,1460,5,133,0,0,1460,1461,5,66,0,0,1461,173,1,
        0,0,0,1462,1463,3,352,176,0,1463,175,1,0,0,0,1464,1465,3,352,176,
        0,1465,177,1,0,0,0,1466,1467,3,352,176,0,1467,179,1,0,0,0,1468,1469,
        3,352,176,0,1469,181,1,0,0,0,1470,1471,3,352,176,0,1471,183,1,0,
        0,0,1472,1473,3,352,176,0,1473,185,1,0,0,0,1474,1479,3,356,178,0,
        1475,1476,5,245,0,0,1476,1478,3,356,178,0,1477,1475,1,0,0,0,1478,
        1481,1,0,0,0,1479,1477,1,0,0,0,1479,1480,1,0,0,0,1480,187,1,0,0,
        0,1481,1479,1,0,0,0,1482,1487,3,356,178,0,1483,1484,5,245,0,0,1484,
        1486,3,356,178,0,1485,1483,1,0,0,0,1486,1489,1,0,0,0,1487,1485,1,
        0,0,0,1487,1488,1,0,0,0,1488,189,1,0,0,0,1489,1487,1,0,0,0,1490,
        1493,3,360,180,0,1491,1493,3,352,176,0,1492,1490,1,0,0,0,1492,1491,
        1,0,0,0,1493,191,1,0,0,0,1494,1497,3,352,176,0,1495,1497,4,96,0,
        0,1496,1494,1,0,0,0,1496,1495,1,0,0,0,1497,193,1,0,0,0,1498,1501,
        3,186,93,0,1499,1501,3,188,94,0,1500,1498,1,0,0,0,1500,1499,1,0,
        0,0,1501,195,1,0,0,0,1502,1503,5,21,0,0,1503,1504,5,26,0,0,1504,
        1506,3,292,146,0,1505,1502,1,0,0,0,1505,1506,1,0,0,0,1506,1509,1,
        0,0,0,1507,1508,5,34,0,0,1508,1510,3,314,157,0,1509,1507,1,0,0,0,
        1509,1510,1,0,0,0,1510,1514,1,0,0,0,1511,1512,5,169,0,0,1512,1513,
        5,79,0,0,1513,1515,3,254,127,0,1514,1511,1,0,0,0,1514,1515,1,0,0,
        0,1515,1519,1,0,0,0,1516,1517,5,218,0,0,1517,1518,5,176,0,0,1518,
        1520,3,248,124,0,1519,1516,1,0,0,0,1519,1520,1,0,0,0,1520,1524,1,
        0,0,0,1521,1522,5,23,0,0,1522,1523,5,9,0,0,1523,1525,3,230,115,0,
        1524,1521,1,0,0,0,1524,1525,1,0,0,0,1525,1528,1,0,0,0,1526,1527,
        5,24,0,0,1527,1529,3,314,157,0,1528,1526,1,0,0,0,1528,1529,1,0,0,
        0,1529,1540,1,0,0,0,1530,1531,5,30,0,0,1531,1532,5,94,0,0,1532,1537,
        3,352,176,0,1533,1534,5,218,0,0,1534,1535,5,152,0,0,1535,1536,5,
        233,0,0,1536,1538,5,261,0,0,1537,1533,1,0,0,0,1537,1538,1,0,0,0,
        1538,1541,1,0,0,0,1539,1541,5,199,0,0,1540,1530,1,0,0,0,1540,1539,
        1,0,0,0,1540,1541,1,0,0,0,1541,1544,1,0,0,0,1542,1543,5,25,0,0,1543,
        1545,3,248,124,0,1544,1542,1,0,0,0,1544,1545,1,0,0,0,1545,197,1,
        0,0,0,1546,1551,3,200,100,0,1547,1548,5,247,0,0,1548,1550,3,200,
        100,0,1549,1547,1,0,0,0,1550,1553,1,0,0,0,1551,1549,1,0,0,0,1551,
        1552,1,0,0,0,1552,199,1,0,0,0,1553,1551,1,0,0,0,1554,1555,3,352,
        176,0,1555,1556,5,233,0,0,1556,1557,3,304,152,0,1557,201,1,0,0,0,
        1558,1559,5,249,0,0,1559,1562,3,182,91,0,1560,1561,5,34,0,0,1561,
        1563,3,314,157,0,1562,1560,1,0,0,0,1562,1563,1,0,0,0,1563,1572,1,
        0,0,0,1564,1565,5,247,0,0,1565,1568,3,182,91,0,1566,1567,5,34,0,
        0,1567,1569,3,314,157,0,1568,1566,1,0,0,0,1568,1569,1,0,0,0,1569,
        1571,1,0,0,0,1570,1564,1,0,0,0,1571,1574,1,0,0,0,1572,1570,1,0,0,
        0,1572,1573,1,0,0,0,1573,1575,1,0,0,0,1574,1572,1,0,0,0,1575,1576,
        5,250,0,0,1576,203,1,0,0,0,1577,1579,3,206,103,0,1578,1577,1,0,0,
        0,1578,1579,1,0,0,0,1579,1580,1,0,0,0,1580,1581,3,258,129,0,1581,
        205,1,0,0,0,1582,1583,5,218,0,0,1583,1588,3,274,137,0,1584,1585,
        5,247,0,0,1585,1587,3,274,137,0,1586,1584,1,0,0,0,1587,1590,1,0,
        0,0,1588,1586,1,0,0,0,1588,1589,1,0,0,0,1589,207,1,0,0,0,1590,1588,
        1,0,0,0,1591,1592,5,151,0,0,1592,1593,5,110,0,0,1593,1595,3,292,
        146,0,1594,1596,5,53,0,0,1595,1594,1,0,0,0,1595,1596,1,0,0,0,1596,
        1600,1,0,0,0,1597,1601,5,227,0,0,1598,1599,5,247,0,0,1599,1601,5,
        227,0,0,1600,1597,1,0,0,0,1600,1598,1,0,0,0,1600,1601,1,0,0,0,1601,
        1605,1,0,0,0,1602,1606,5,228,0,0,1603,1604,5,247,0,0,1604,1606,5,
        228,0,0,1605,1602,1,0,0,0,1605,1603,1,0,0,0,1605,1606,1,0,0,0,1606,
        1619,1,0,0,0,1607,1608,5,247,0,0,1608,1611,3,210,105,0,1609,1611,
        3,210,105,0,1610,1607,1,0,0,0,1610,1609,1,0,0,0,1611,1616,1,0,0,
        0,1612,1613,5,247,0,0,1613,1615,3,210,105,0,1614,1612,1,0,0,0,1615,
        1618,1,0,0,0,1616,1617,1,0,0,0,1616,1614,1,0,0,0,1617,1620,1,0,0,
        0,1618,1616,1,0,0,0,1619,1610,1,0,0,0,1619,1620,1,0,0,0,1620,209,
        1,0,0,0,1621,1622,5,81,0,0,1622,1623,5,110,0,0,1623,1624,3,292,146,
        0,1624,1625,5,226,0,0,1625,1626,3,186,93,0,1626,1628,3,292,146,0,
        1627,1629,5,53,0,0,1628,1627,1,0,0,0,1628,1629,1,0,0,0,1629,1631,
        1,0,0,0,1630,1632,5,227,0,0,1631,1630,1,0,0,0,1631,1632,1,0,0,0,
        1632,1634,1,0,0,0,1633,1635,5,228,0,0,1634,1633,1,0,0,0,1634,1635,
        1,0,0,0,1635,211,1,0,0,0,1636,1637,3,192,96,0,1637,1640,3,328,164,
        0,1638,1639,5,34,0,0,1639,1641,3,314,157,0,1640,1638,1,0,0,0,1640,
        1641,1,0,0,0,1641,213,1,0,0,0,1642,1643,3,182,91,0,1643,1646,3,328,
        164,0,1644,1645,5,34,0,0,1645,1647,3,314,157,0,1646,1644,1,0,0,0,
        1646,1647,1,0,0,0,1647,215,1,0,0,0,1648,1649,3,218,109,0,1649,217,
        1,0,0,0,1650,1651,3,182,91,0,1651,1659,3,328,164,0,1652,1656,3,224,
        112,0,1653,1655,3,224,112,0,1654,1653,1,0,0,0,1655,1658,1,0,0,0,
        1656,1657,1,0,0,0,1656,1654,1,0,0,0,1657,1660,1,0,0,0,1658,1656,
        1,0,0,0,1659,1652,1,0,0,0,1659,1660,1,0,0,0,1660,1663,1,0,0,0,1661,
        1662,5,34,0,0,1662,1664,3,314,157,0,1663,1661,1,0,0,0,1663,1664,
        1,0,0,0,1664,1667,1,0,0,0,1665,1666,5,151,0,0,1666,1668,5,110,0,
        0,1667,1665,1,0,0,0,1667,1668,1,0,0,0,1668,219,1,0,0,0,1669,1671,
        3,212,106,0,1670,1669,1,0,0,0,1670,1671,1,0,0,0,1671,1679,1,0,0,
        0,1672,1676,3,224,112,0,1673,1675,3,224,112,0,1674,1673,1,0,0,0,
        1675,1678,1,0,0,0,1676,1677,1,0,0,0,1676,1674,1,0,0,0,1677,1680,
        1,0,0,0,1678,1676,1,0,0,0,1679,1672,1,0,0,0,1679,1680,1,0,0,0,1680,
        221,1,0,0,0,1681,1682,3,182,91,0,1682,1685,3,328,164,0,1683,1684,
        5,34,0,0,1684,1686,3,314,157,0,1685,1683,1,0,0,0,1685,1686,1,0,0,
        0,1686,1694,1,0,0,0,1687,1691,3,224,112,0,1688,1690,3,224,112,0,
        1689,1688,1,0,0,0,1690,1693,1,0,0,0,1691,1692,1,0,0,0,1691,1689,
        1,0,0,0,1692,1695,1,0,0,0,1693,1691,1,0,0,0,1694,1687,1,0,0,0,1694,
        1695,1,0,0,0,1695,223,1,0,0,0,1696,1698,5,133,0,0,1697,1696,1,0,
        0,0,1697,1698,1,0,0,0,1698,1699,1,0,0,0,1699,1702,5,134,0,0,1700,
        1702,3,226,113,0,1701,1697,1,0,0,0,1701,1700,1,0,0,0,1702,225,1,
        0,0,0,1703,1704,5,60,0,0,1704,1712,3,304,152,0,1705,1706,5,35,0,
        0,1706,1712,3,304,152,0,1707,1708,5,51,0,0,1708,1712,3,304,152,0,
        1709,1710,5,16,0,0,1710,1712,3,358,179,0,1711,1703,1,0,0,0,1711,
        1705,1,0,0,0,1711,1707,1,0,0,0,1711,1709,1,0,0,0,1712,227,1,0,0,
        0,1713,1714,7,10,0,0,1714,229,1,0,0,0,1715,1716,7,11,0,0,1716,231,
        1,0,0,0,1717,1722,3,234,117,0,1718,1719,5,247,0,0,1719,1721,3,234,
        117,0,1720,1718,1,0,0,0,1721,1724,1,0,0,0,1722,1723,1,0,0,0,1722,
        1720,1,0,0,0,1723,1727,1,0,0,0,1724,1722,1,0,0,0,1725,1726,5,247,
        0,0,1726,1728,3,236,118,0,1727,1725,1,0,0,0,1727,1728,1,0,0,0,1728,
        1731,1,0,0,0,1729,1731,3,236,118,0,1730,1717,1,0,0,0,1730,1729,1,
        0,0,0,1731,233,1,0,0,0,1732,1734,5,89,0,0,1733,1735,3,292,146,0,
        1734,1733,1,0,0,0,1734,1735,1,0,0,0,1735,1736,1,0,0,0,1736,1737,
        5,147,0,0,1737,1738,3,358,179,0,1738,235,1,0,0,0,1739,1741,5,155,
        0,0,1740,1742,3,292,146,0,1741,1740,1,0,0,0,1741,1742,1,0,0,0,1742,
        1743,1,0,0,0,1743,1744,5,249,0,0,1744,1745,5,146,0,0,1745,1751,3,
        238,119,0,1746,1747,5,247,0,0,1747,1748,5,146,0,0,1748,1750,3,238,
        119,0,1749,1746,1,0,0,0,1750,1753,1,0,0,0,1751,1752,1,0,0,0,1751,
        1749,1,0,0,0,1752,1754,1,0,0,0,1753,1751,1,0,0,0,1754,1755,5,250,
        0,0,1755,237,1,0,0,0,1756,1757,5,212,0,0,1757,1758,3,244,122,0,1758,
        1759,3,304,152,0,1759,1772,1,0,0,0,1760,1761,3,304,152,0,1761,1762,
        3,242,121,0,1762,1764,1,0,0,0,1763,1760,1,0,0,0,1763,1764,1,0,0,
        0,1764,1765,1,0,0,0,1765,1769,5,213,0,0,1766,1767,3,242,121,0,1767,
        1768,3,304,152,0,1768,1770,1,0,0,0,1769,1766,1,0,0,0,1769,1770,1,
        0,0,0,1770,1772,1,0,0,0,1771,1756,1,0,0,0,1771,1763,1,0,0,0,1772,
        239,1,0,0,0,1773,1774,5,30,0,0,1774,1775,5,94,0,0,1775,1780,3,356,
        178,0,1776,1777,5,218,0,0,1777,1778,5,152,0,0,1778,1779,5,233,0,
        0,1779,1781,3,358,179,0,1780,1776,1,0,0,0,1780,1781,1,0,0,0,1781,
        1784,1,0,0,0,1782,1784,5,199,0,0,1783,1773,1,0,0,0,1783,1782,1,0,
        0,0,1784,241,1,0,0,0,1785,1791,1,0,0,0,1786,1791,5,235,0,0,1787,
        1791,5,236,0,0,1788,1791,5,237,0,0,1789,1791,5,238,0,0,1790,1785,
        1,0,0,0,1790,1786,1,0,0,0,1790,1787,1,0,0,0,1790,1788,1,0,0,0,1790,
        1789,1,0,0,0,1791,243,1,0,0,0,1792,1801,5,233,0,0,1793,1801,5,234,
        0,0,1794,1801,5,115,0,0,1795,1801,5,165,0,0,1796,1801,5,164,0,0,
        1797,1801,5,15,0,0,1798,1801,5,94,0,0,1799,1801,3,242,121,0,1800,
        1792,1,0,0,0,1800,1793,1,0,0,0,1800,1794,1,0,0,0,1800,1795,1,0,0,
        0,1800,1796,1,0,0,0,1800,1797,1,0,0,0,1800,1798,1,0,0,0,1800,1799,
        1,0,0,0,1801,245,1,0,0,0,1802,1803,5,115,0,0,1803,1806,3,352,176,
        0,1804,1805,7,12,0,0,1805,1807,5,154,0,0,1806,1804,1,0,0,0,1806,
        1807,1,0,0,0,1807,247,1,0,0,0,1808,1809,5,249,0,0,1809,1814,3,256,
        128,0,1810,1811,5,247,0,0,1811,1813,3,256,128,0,1812,1810,1,0,0,
        0,1813,1816,1,0,0,0,1814,1812,1,0,0,0,1814,1815,1,0,0,0,1815,1817,
        1,0,0,0,1816,1814,1,0,0,0,1817,1818,5,250,0,0,1818,249,1,0,0,0,1819,
        1820,5,249,0,0,1820,1825,3,212,106,0,1821,1822,5,247,0,0,1822,1824,
        3,212,106,0,1823,1821,1,0,0,0,1824,1827,1,0,0,0,1825,1826,1,0,0,
        0,1825,1823,1,0,0,0,1826,1828,1,0,0,0,1827,1825,1,0,0,0,1828,1829,
        5,250,0,0,1829,251,1,0,0,0,1830,1835,3,304,152,0,1831,1832,5,247,
        0,0,1832,1834,3,304,152,0,1833,1831,1,0,0,0,1834,1837,1,0,0,0,1835,
        1833,1,0,0,0,1835,1836,1,0,0,0,1836,253,1,0,0,0,1837,1835,1,0,0,
        0,1838,1848,5,52,0,0,1839,1840,5,71,0,0,1840,1841,5,193,0,0,1841,
        1842,5,26,0,0,1842,1846,3,314,157,0,1843,1844,5,63,0,0,1844,1845,
        5,26,0,0,1845,1847,3,314,157,0,1846,1843,1,0,0,0,1846,1847,1,0,0,
        0,1847,1849,1,0,0,0,1848,1839,1,0,0,0,1848,1849,1,0,0,0,1849,1854,
        1,0,0,0,1850,1851,5,117,0,0,1851,1852,5,193,0,0,1852,1853,5,26,0,
        0,1853,1855,3,314,157,0,1854,1850,1,0,0,0,1854,1855,1,0,0,0,1855,
        255,1,0,0,0,1856,1859,3,356,178,0,1857,1858,5,233,0,0,1858,1860,
        3,304,152,0,1859,1857,1,0,0,0,1859,1860,1,0,0,0,1860,257,1,0,0,0,
        1861,1872,3,260,130,0,1862,1863,5,140,0,0,1863,1864,5,26,0,0,1864,
        1869,3,264,132,0,1865,1866,5,247,0,0,1866,1868,3,264,132,0,1867,
        1865,1,0,0,0,1868,1871,1,0,0,0,1869,1867,1,0,0,0,1869,1870,1,0,0,
        0,1870,1873,1,0,0,0,1871,1869,1,0,0,0,1872,1862,1,0,0,0,1872,1873,
        1,0,0,0,1873,1880,1,0,0,0,1874,1875,5,116,0,0,1875,1878,3,304,152,
        0,1876,1877,5,136,0,0,1877,1879,5,261,0,0,1878,1876,1,0,0,0,1878,
        1879,1,0,0,0,1879,1881,1,0,0,0,1880,1874,1,0,0,0,1880,1881,1,0,0,
        0,1881,259,1,0,0,0,1882,1883,6,130,-1,0,1883,1884,3,262,131,0,1884,
        1899,1,0,0,0,1885,1886,10,2,0,0,1886,1888,5,100,0,0,1887,1889,3,
        276,138,0,1888,1887,1,0,0,0,1888,1889,1,0,0,0,1889,1890,1,0,0,0,
        1890,1898,3,260,130,3,1891,1892,10,1,0,0,1892,1894,7,13,0,0,1893,
        1895,3,276,138,0,1894,1893,1,0,0,0,1894,1895,1,0,0,0,1895,1896,1,
        0,0,0,1896,1898,3,260,130,2,1897,1885,1,0,0,0,1897,1891,1,0,0,0,
        1898,1901,1,0,0,0,1899,1897,1,0,0,0,1899,1900,1,0,0,0,1900,261,1,
        0,0,0,1901,1899,1,0,0,0,1902,1919,3,266,133,0,1903,1904,5,190,0,
        0,1904,1919,3,186,93,0,1905,1906,5,213,0,0,1906,1911,3,304,152,0,
        1907,1908,5,247,0,0,1908,1910,3,304,152,0,1909,1907,1,0,0,0,1910,
        1913,1,0,0,0,1911,1909,1,0,0,0,1911,1912,1,0,0,0,1912,1919,1,0,0,
        0,1913,1911,1,0,0,0,1914,1915,5,249,0,0,1915,1916,3,258,129,0,1916,
        1917,5,250,0,0,1917,1919,1,0,0,0,1918,1902,1,0,0,0,1918,1903,1,0,
        0,0,1918,1905,1,0,0,0,1918,1914,1,0,0,0,1919,263,1,0,0,0,1920,1922,
        3,302,151,0,1921,1923,7,14,0,0,1922,1921,1,0,0,0,1922,1923,1,0,0,
        0,1923,1926,1,0,0,0,1924,1925,5,135,0,0,1925,1927,7,15,0,0,1926,
        1924,1,0,0,0,1926,1927,1,0,0,0,1927,265,1,0,0,0,1928,1930,5,175,
        0,0,1929,1931,3,276,138,0,1930,1929,1,0,0,0,1930,1931,1,0,0,0,1931,
        1933,1,0,0,0,1932,1934,5,185,0,0,1933,1932,1,0,0,0,1933,1934,1,0,
        0,0,1934,1935,1,0,0,0,1935,1940,3,278,139,0,1936,1937,5,247,0,0,
        1937,1939,3,278,139,0,1938,1936,1,0,0,0,1939,1942,1,0,0,0,1940,1938,
        1,0,0,0,1940,1941,1,0,0,0,1941,1952,1,0,0,0,1942,1940,1,0,0,0,1943,
        1944,5,82,0,0,1944,1949,3,280,140,0,1945,1946,5,247,0,0,1946,1948,
        3,280,140,0,1947,1945,1,0,0,0,1948,1951,1,0,0,0,1949,1947,1,0,0,
        0,1949,1950,1,0,0,0,1950,1953,1,0,0,0,1951,1949,1,0,0,0,1952,1943,
        1,0,0,0,1952,1953,1,0,0,0,1953,1956,1,0,0,0,1954,1955,5,217,0,0,
        1955,1957,3,306,153,0,1956,1954,1,0,0,0,1956,1957,1,0,0,0,1957,1961,
        1,0,0,0,1958,1959,5,87,0,0,1959,1960,5,26,0,0,1960,1962,3,268,134,
        0,1961,1958,1,0,0,0,1961,1962,1,0,0,0,1962,1965,1,0,0,0,1963,1964,
        5,90,0,0,1964,1966,3,306,153,0,1965,1963,1,0,0,0,1965,1966,1,0,0,
        0,1966,267,1,0,0,0,1967,1969,3,276,138,0,1968,1967,1,0,0,0,1968,
        1969,1,0,0,0,1969,1970,1,0,0,0,1970,1975,3,270,135,0,1971,1972,5,
        247,0,0,1972,1974,3,270,135,0,1973,1971,1,0,0,0,1974,1977,1,0,0,
        0,1975,1973,1,0,0,0,1975,1976,1,0,0,0,1976,269,1,0,0,0,1977,1975,
        1,0,0,0,1978,1979,3,272,136,0,1979,271,1,0,0,0,1980,1989,5,249,0,
        0,1981,1986,3,302,151,0,1982,1983,5,247,0,0,1983,1985,3,302,151,
        0,1984,1982,1,0,0,0,1985,1988,1,0,0,0,1986,1984,1,0,0,0,1986,1987,
        1,0,0,0,1987,1990,1,0,0,0,1988,1986,1,0,0,0,1989,1981,1,0,0,0,1989,
        1990,1,0,0,0,1990,1991,1,0,0,0,1991,1994,5,250,0,0,1992,1994,3,302,
        151,0,1993,1980,1,0,0,0,1993,1992,1,0,0,0,1994,273,1,0,0,0,1995,
        1997,3,356,178,0,1996,1998,3,292,146,0,1997,1996,1,0,0,0,1997,1998,
        1,0,0,0,1998,1999,1,0,0,0,1999,2000,5,9,0,0,2000,2001,3,296,148,
        0,2001,275,1,0,0,0,2002,2003,7,16,0,0,2003,277,1,0,0,0,2004,2009,
        3,302,151,0,2005,2007,5,9,0,0,2006,2005,1,0,0,0,2006,2007,1,0,0,
        0,2007,2008,1,0,0,0,2008,2010,3,356,178,0,2009,2006,1,0,0,0,2009,
        2010,1,0,0,0,2010,2017,1,0,0,0,2011,2012,3,352,176,0,2012,2013,5,
        245,0,0,2013,2014,5,241,0,0,2014,2017,1,0,0,0,2015,2017,5,241,0,
        0,2016,2004,1,0,0,0,2016,2011,1,0,0,0,2016,2015,1,0,0,0,2017,279,
        1,0,0,0,2018,2019,6,140,-1,0,2019,2020,3,286,143,0,2020,2034,1,0,
        0,0,2021,2030,10,2,0,0,2022,2023,5,38,0,0,2023,2024,5,109,0,0,2024,
        2031,3,286,143,0,2025,2026,3,282,141,0,2026,2027,5,109,0,0,2027,
        2028,3,280,140,0,2028,2029,3,284,142,0,2029,2031,1,0,0,0,2030,2022,
        1,0,0,0,2030,2025,1,0,0,0,2031,2033,1,0,0,0,2032,2021,1,0,0,0,2033,
        2036,1,0,0,0,2034,2032,1,0,0,0,2034,2035,1,0,0,0,2035,281,1,0,0,
        0,2036,2034,1,0,0,0,2037,2039,5,97,0,0,2038,2037,1,0,0,0,2038,2039,
        1,0,0,0,2039,2069,1,0,0,0,2040,2042,5,114,0,0,2041,2043,5,97,0,0,
        2042,2041,1,0,0,0,2042,2043,1,0,0,0,2043,2069,1,0,0,0,2044,2046,
        5,166,0,0,2045,2047,5,97,0,0,2046,2045,1,0,0,0,2046,2047,1,0,0,0,
        2047,2069,1,0,0,0,2048,2050,5,114,0,0,2049,2051,5,142,0,0,2050,2049,
        1,0,0,0,2050,2051,1,0,0,0,2051,2069,1,0,0,0,2052,2054,5,166,0,0,
        2053,2055,5,142,0,0,2054,2053,1,0,0,0,2054,2055,1,0,0,0,2055,2069,
        1,0,0,0,2056,2058,5,83,0,0,2057,2059,5,142,0,0,2058,2057,1,0,0,0,
        2058,2059,1,0,0,0,2059,2069,1,0,0,0,2060,2061,5,114,0,0,2061,2069,
        5,178,0,0,2062,2063,5,166,0,0,2063,2069,5,178,0,0,2064,2065,5,114,
        0,0,2065,2069,5,7,0,0,2066,2067,5,166,0,0,2067,2069,5,7,0,0,2068,
        2038,1,0,0,0,2068,2040,1,0,0,0,2068,2044,1,0,0,0,2068,2048,1,0,0,
        0,2068,2052,1,0,0,0,2068,2056,1,0,0,0,2068,2060,1,0,0,0,2068,2062,
        1,0,0,0,2068,2064,1,0,0,0,2068,2066,1,0,0,0,2069,283,1,0,0,0,2070,
        2071,5,137,0,0,2071,2085,3,306,153,0,2072,2073,5,207,0,0,2073,2074,
        5,249,0,0,2074,2079,3,356,178,0,2075,2076,5,247,0,0,2076,2078,3,
        356,178,0,2077,2075,1,0,0,0,2078,2081,1,0,0,0,2079,2077,1,0,0,0,
        2079,2080,1,0,0,0,2080,2082,1,0,0,0,2081,2079,1,0,0,0,2082,2083,
        5,250,0,0,2083,2085,1,0,0,0,2084,2070,1,0,0,0,2084,2072,1,0,0,0,
        2085,285,1,0,0,0,2086,2099,3,290,145,0,2087,2088,5,192,0,0,2088,
        2089,3,288,144,0,2089,2090,5,249,0,0,2090,2091,3,304,152,0,2091,
        2097,5,250,0,0,2092,2093,5,158,0,0,2093,2094,5,249,0,0,2094,2095,
        3,304,152,0,2095,2096,5,250,0,0,2096,2098,1,0,0,0,2097,2092,1,0,
        0,0,2097,2098,1,0,0,0,2098,2100,1,0,0,0,2099,2087,1,0,0,0,2099,2100,
        1,0,0,0,2100,287,1,0,0,0,2101,2102,7,17,0,0,2102,289,1,0,0,0,2103,
        2111,3,294,147,0,2104,2106,5,9,0,0,2105,2104,1,0,0,0,2105,2106,1,
        0,0,0,2106,2107,1,0,0,0,2107,2109,3,356,178,0,2108,2110,3,292,146,
        0,2109,2108,1,0,0,0,2109,2110,1,0,0,0,2110,2112,1,0,0,0,2111,2105,
        1,0,0,0,2111,2112,1,0,0,0,2112,291,1,0,0,0,2113,2114,5,249,0,0,2114,
        2119,3,192,96,0,2115,2116,5,247,0,0,2116,2118,3,192,96,0,2117,2115,
        1,0,0,0,2118,2121,1,0,0,0,2119,2117,1,0,0,0,2119,2120,1,0,0,0,2120,
        2122,1,0,0,0,2121,2119,1,0,0,0,2122,2123,5,250,0,0,2123,293,1,0,
        0,0,2124,2132,3,194,97,0,2125,2127,5,113,0,0,2126,2125,1,0,0,0,2126,
        2127,1,0,0,0,2127,2128,1,0,0,0,2128,2132,3,296,148,0,2129,2132,3,
        298,149,0,2130,2132,3,300,150,0,2131,2124,1,0,0,0,2131,2126,1,0,
        0,0,2131,2129,1,0,0,0,2131,2130,1,0,0,0,2132,295,1,0,0,0,2133,2134,
        5,249,0,0,2134,2135,3,204,102,0,2135,2136,5,250,0,0,2136,297,1,0,
        0,0,2137,2138,5,203,0,0,2138,2139,5,249,0,0,2139,2144,3,304,152,
        0,2140,2141,5,247,0,0,2141,2143,3,304,152,0,2142,2140,1,0,0,0,2143,
        2146,1,0,0,0,2144,2142,1,0,0,0,2144,2145,1,0,0,0,2145,2147,1,0,0,
        0,2146,2144,1,0,0,0,2147,2150,5,250,0,0,2148,2149,5,218,0,0,2149,
        2151,5,141,0,0,2150,2148,1,0,0,0,2150,2151,1,0,0,0,2151,299,1,0,
        0,0,2152,2153,5,249,0,0,2153,2154,3,280,140,0,2154,2155,5,250,0,
        0,2155,301,1,0,0,0,2156,2159,3,192,96,0,2157,2159,3,304,152,0,2158,
        2156,1,0,0,0,2158,2157,1,0,0,0,2159,303,1,0,0,0,2160,2161,3,306,
        153,0,2161,305,1,0,0,0,2162,2163,6,153,-1,0,2163,2165,3,310,155,
        0,2164,2166,3,308,154,0,2165,2164,1,0,0,0,2165,2166,1,0,0,0,2166,
        2170,1,0,0,0,2167,2168,5,133,0,0,2168,2170,3,306,153,3,2169,2162,
        1,0,0,0,2169,2167,1,0,0,0,2170,2179,1,0,0,0,2171,2172,10,2,0,0,2172,
        2173,5,5,0,0,2173,2178,3,306,153,3,2174,2175,10,1,0,0,2175,2176,
        5,139,0,0,2176,2178,3,306,153,2,2177,2171,1,0,0,0,2177,2174,1,0,
        0,0,2178,2181,1,0,0,0,2179,2177,1,0,0,0,2179,2180,1,0,0,0,2180,307,
        1,0,0,0,2181,2179,1,0,0,0,2182,2183,3,316,158,0,2183,2184,3,310,
        155,0,2184,2241,1,0,0,0,2185,2186,3,316,158,0,2186,2187,3,318,159,
        0,2187,2188,3,296,148,0,2188,2241,1,0,0,0,2189,2191,5,133,0,0,2190,
        2189,1,0,0,0,2190,2191,1,0,0,0,2191,2192,1,0,0,0,2192,2193,5,15,
        0,0,2193,2194,3,310,155,0,2194,2195,5,5,0,0,2195,2196,3,310,155,
        0,2196,2241,1,0,0,0,2197,2199,5,133,0,0,2198,2197,1,0,0,0,2198,2199,
        1,0,0,0,2199,2200,1,0,0,0,2200,2201,5,94,0,0,2201,2202,5,249,0,0,
        2202,2207,3,304,152,0,2203,2204,5,247,0,0,2204,2206,3,304,152,0,
        2205,2203,1,0,0,0,2206,2209,1,0,0,0,2207,2205,1,0,0,0,2207,2208,
        1,0,0,0,2208,2210,1,0,0,0,2209,2207,1,0,0,0,2210,2211,5,250,0,0,
        2211,2241,1,0,0,0,2212,2214,5,133,0,0,2213,2212,1,0,0,0,2213,2214,
        1,0,0,0,2214,2215,1,0,0,0,2215,2216,5,94,0,0,2216,2241,3,296,148,
        0,2217,2219,5,133,0,0,2218,2217,1,0,0,0,2218,2219,1,0,0,0,2219,2220,
        1,0,0,0,2220,2221,7,18,0,0,2221,2224,3,310,155,0,2222,2223,5,62,
        0,0,2223,2225,3,310,155,0,2224,2222,1,0,0,0,2224,2225,1,0,0,0,2225,
        2241,1,0,0,0,2226,2227,7,19,0,0,2227,2241,3,310,155,0,2228,2230,
        5,108,0,0,2229,2231,5,133,0,0,2230,2229,1,0,0,0,2230,2231,1,0,0,
        0,2231,2232,1,0,0,0,2232,2241,7,20,0,0,2233,2235,5,108,0,0,2234,
        2236,5,133,0,0,2235,2234,1,0,0,0,2235,2236,1,0,0,0,2236,2237,1,0,
        0,0,2237,2238,5,57,0,0,2238,2239,5,82,0,0,2239,2241,3,310,155,0,
        2240,2182,1,0,0,0,2240,2185,1,0,0,0,2240,2190,1,0,0,0,2240,2198,
        1,0,0,0,2240,2213,1,0,0,0,2240,2218,1,0,0,0,2240,2226,1,0,0,0,2240,
        2228,1,0,0,0,2240,2233,1,0,0,0,2241,309,1,0,0,0,2242,2243,6,155,
        -1,0,2243,2247,3,312,156,0,2244,2245,7,21,0,0,2245,2247,3,310,155,
        4,2246,2242,1,0,0,0,2246,2244,1,0,0,0,2247,2259,1,0,0,0,2248,2249,
        10,3,0,0,2249,2250,7,22,0,0,2250,2258,3,310,155,4,2251,2252,10,2,
        0,0,2252,2253,7,21,0,0,2253,2258,3,310,155,3,2254,2255,10,1,0,0,
        2255,2256,5,244,0,0,2256,2258,3,310,155,2,2257,2248,1,0,0,0,2257,
        2251,1,0,0,0,2257,2254,1,0,0,0,2258,2261,1,0,0,0,2259,2257,1,0,0,
        0,2259,2260,1,0,0,0,2260,311,1,0,0,0,2261,2259,1,0,0,0,2262,2263,
        6,156,-1,0,2263,2509,5,134,0,0,2264,2509,3,322,161,0,2265,2266,3,
        356,178,0,2266,2267,3,314,157,0,2267,2509,1,0,0,0,2268,2269,5,270,
        0,0,2269,2509,3,314,157,0,2270,2509,3,358,179,0,2271,2509,3,320,
        160,0,2272,2509,3,314,157,0,2273,2509,5,260,0,0,2274,2509,5,256,
        0,0,2275,2276,5,149,0,0,2276,2277,5,249,0,0,2277,2278,3,310,155,
        0,2278,2279,5,94,0,0,2279,2280,3,310,155,0,2280,2281,5,250,0,0,2281,
        2509,1,0,0,0,2282,2283,5,249,0,0,2283,2286,3,304,152,0,2284,2285,
        5,9,0,0,2285,2287,3,328,164,0,2286,2284,1,0,0,0,2286,2287,1,0,0,
        0,2287,2296,1,0,0,0,2288,2289,5,247,0,0,2289,2292,3,304,152,0,2290,
        2291,5,9,0,0,2291,2293,3,328,164,0,2292,2290,1,0,0,0,2292,2293,1,
        0,0,0,2293,2295,1,0,0,0,2294,2288,1,0,0,0,2295,2298,1,0,0,0,2296,
        2297,1,0,0,0,2296,2294,1,0,0,0,2297,2299,1,0,0,0,2298,2296,1,0,0,
        0,2299,2300,5,250,0,0,2300,2509,1,0,0,0,2301,2302,5,169,0,0,2302,
        2303,5,249,0,0,2303,2308,3,304,152,0,2304,2305,5,247,0,0,2305,2307,
        3,304,152,0,2306,2304,1,0,0,0,2307,2310,1,0,0,0,2308,2306,1,0,0,
        0,2308,2309,1,0,0,0,2309,2311,1,0,0,0,2310,2308,1,0,0,0,2311,2312,
        5,250,0,0,2312,2509,1,0,0,0,2313,2314,3,190,95,0,2314,2315,5,249,
        0,0,2315,2316,5,241,0,0,2316,2318,5,250,0,0,2317,2319,3,336,168,
        0,2318,2317,1,0,0,0,2318,2319,1,0,0,0,2319,2321,1,0,0,0,2320,2322,
        3,338,169,0,2321,2320,1,0,0,0,2321,2322,1,0,0,0,2322,2509,1,0,0,
        0,2323,2324,3,190,95,0,2324,2336,5,249,0,0,2325,2327,3,276,138,0,
        2326,2325,1,0,0,0,2326,2327,1,0,0,0,2327,2328,1,0,0,0,2328,2333,
        3,304,152,0,2329,2330,5,247,0,0,2330,2332,3,304,152,0,2331,2329,
        1,0,0,0,2332,2335,1,0,0,0,2333,2331,1,0,0,0,2333,2334,1,0,0,0,2334,
        2337,1,0,0,0,2335,2333,1,0,0,0,2336,2326,1,0,0,0,2336,2337,1,0,0,
        0,2337,2348,1,0,0,0,2338,2339,5,140,0,0,2339,2340,5,26,0,0,2340,
        2345,3,264,132,0,2341,2342,5,247,0,0,2342,2344,3,264,132,0,2343,
        2341,1,0,0,0,2344,2347,1,0,0,0,2345,2343,1,0,0,0,2345,2346,1,0,0,
        0,2346,2349,1,0,0,0,2347,2345,1,0,0,0,2348,2338,1,0,0,0,2348,2349,
        1,0,0,0,2349,2350,1,0,0,0,2350,2352,5,250,0,0,2351,2353,3,336,168,
        0,2352,2351,1,0,0,0,2352,2353,1,0,0,0,2353,2355,1,0,0,0,2354,2356,
        3,338,169,0,2355,2354,1,0,0,0,2355,2356,1,0,0,0,2356,2509,1,0,0,
        0,2357,2358,3,356,178,0,2358,2359,5,257,0,0,2359,2360,3,304,152,
        0,2360,2509,1,0,0,0,2361,2370,5,249,0,0,2362,2367,3,356,178,0,2363,
        2364,5,247,0,0,2364,2366,3,356,178,0,2365,2363,1,0,0,0,2366,2369,
        1,0,0,0,2367,2365,1,0,0,0,2367,2368,1,0,0,0,2368,2371,1,0,0,0,2369,
        2367,1,0,0,0,2370,2362,1,0,0,0,2370,2371,1,0,0,0,2371,2372,1,0,0,
        0,2372,2373,5,250,0,0,2373,2374,5,257,0,0,2374,2509,3,304,152,0,
        2375,2376,5,249,0,0,2376,2377,3,204,102,0,2377,2378,5,250,0,0,2378,
        2509,1,0,0,0,2379,2380,5,66,0,0,2380,2381,5,249,0,0,2381,2382,3,
        204,102,0,2382,2383,5,250,0,0,2383,2509,1,0,0,0,2384,2385,5,28,0,
        0,2385,2387,3,310,155,0,2386,2388,3,334,167,0,2387,2386,1,0,0,0,
        2388,2389,1,0,0,0,2389,2387,1,0,0,0,2389,2390,1,0,0,0,2390,2393,
        1,0,0,0,2391,2392,5,59,0,0,2392,2394,3,304,152,0,2393,2391,1,0,0,
        0,2393,2394,1,0,0,0,2394,2395,1,0,0,0,2395,2396,5,61,0,0,2396,2509,
        1,0,0,0,2397,2399,5,28,0,0,2398,2400,3,334,167,0,2399,2398,1,0,0,
        0,2400,2401,1,0,0,0,2401,2399,1,0,0,0,2401,2402,1,0,0,0,2402,2405,
        1,0,0,0,2403,2404,5,59,0,0,2404,2406,3,304,152,0,2405,2403,1,0,0,
        0,2405,2406,1,0,0,0,2406,2407,1,0,0,0,2407,2408,5,61,0,0,2408,2509,
        1,0,0,0,2409,2410,5,29,0,0,2410,2411,5,249,0,0,2411,2412,3,304,152,
        0,2412,2413,5,9,0,0,2413,2414,3,328,164,0,2414,2415,5,250,0,0,2415,
        2509,1,0,0,0,2416,2417,5,197,0,0,2417,2418,5,249,0,0,2418,2419,3,
        304,152,0,2419,2420,5,9,0,0,2420,2421,3,328,164,0,2421,2422,5,250,
        0,0,2422,2509,1,0,0,0,2423,2424,5,8,0,0,2424,2433,5,251,0,0,2425,
        2430,3,304,152,0,2426,2427,5,247,0,0,2427,2429,3,304,152,0,2428,
        2426,1,0,0,0,2429,2432,1,0,0,0,2430,2428,1,0,0,0,2430,2431,1,0,0,
        0,2431,2434,1,0,0,0,2432,2430,1,0,0,0,2433,2425,1,0,0,0,2433,2434,
        1,0,0,0,2434,2435,1,0,0,0,2435,2509,5,252,0,0,2436,2509,3,356,178,
        0,2437,2509,5,40,0,0,2438,2442,5,42,0,0,2439,2440,5,249,0,0,2440,
        2441,5,261,0,0,2441,2443,5,250,0,0,2442,2439,1,0,0,0,2442,2443,1,
        0,0,0,2443,2509,1,0,0,0,2444,2448,5,43,0,0,2445,2446,5,249,0,0,2446,
        2447,5,261,0,0,2447,2449,5,250,0,0,2448,2445,1,0,0,0,2448,2449,1,
        0,0,0,2449,2509,1,0,0,0,2450,2454,5,119,0,0,2451,2452,5,249,0,0,
        2452,2453,5,261,0,0,2453,2455,5,250,0,0,2454,2451,1,0,0,0,2454,2455,
        1,0,0,0,2455,2509,1,0,0,0,2456,2460,5,120,0,0,2457,2458,5,249,0,
        0,2458,2459,5,261,0,0,2459,2461,5,250,0,0,2460,2457,1,0,0,0,2460,
        2461,1,0,0,0,2461,2509,1,0,0,0,2462,2509,5,44,0,0,2463,2509,5,41,
        0,0,2464,2465,5,186,0,0,2465,2466,5,249,0,0,2466,2467,3,310,155,
        0,2467,2468,5,82,0,0,2468,2471,3,310,155,0,2469,2470,5,78,0,0,2470,
        2472,3,310,155,0,2471,2469,1,0,0,0,2471,2472,1,0,0,0,2472,2473,1,
        0,0,0,2473,2474,5,250,0,0,2474,2509,1,0,0,0,2475,2476,5,132,0,0,
        2476,2477,5,249,0,0,2477,2480,3,310,155,0,2478,2479,5,247,0,0,2479,
        2481,3,326,163,0,2480,2478,1,0,0,0,2480,2481,1,0,0,0,2481,2482,1,
        0,0,0,2482,2483,5,250,0,0,2483,2509,1,0,0,0,2484,2485,5,68,0,0,2485,
        2486,5,249,0,0,2486,2487,3,356,178,0,2487,2488,5,82,0,0,2488,2489,
        3,310,155,0,2489,2490,5,250,0,0,2490,2509,1,0,0,0,2491,2492,5,249,
        0,0,2492,2493,3,304,152,0,2493,2494,5,250,0,0,2494,2509,1,0,0,0,
        2495,2496,5,88,0,0,2496,2505,5,249,0,0,2497,2502,3,352,176,0,2498,
        2499,5,247,0,0,2499,2501,3,352,176,0,2500,2498,1,0,0,0,2501,2504,
        1,0,0,0,2502,2500,1,0,0,0,2502,2503,1,0,0,0,2503,2506,1,0,0,0,2504,
        2502,1,0,0,0,2505,2497,1,0,0,0,2505,2506,1,0,0,0,2506,2507,1,0,0,
        0,2507,2509,5,250,0,0,2508,2262,1,0,0,0,2508,2264,1,0,0,0,2508,2265,
        1,0,0,0,2508,2268,1,0,0,0,2508,2270,1,0,0,0,2508,2271,1,0,0,0,2508,
        2272,1,0,0,0,2508,2273,1,0,0,0,2508,2274,1,0,0,0,2508,2275,1,0,0,
        0,2508,2282,1,0,0,0,2508,2301,1,0,0,0,2508,2313,1,0,0,0,2508,2323,
        1,0,0,0,2508,2357,1,0,0,0,2508,2361,1,0,0,0,2508,2375,1,0,0,0,2508,
        2379,1,0,0,0,2508,2384,1,0,0,0,2508,2397,1,0,0,0,2508,2409,1,0,0,
        0,2508,2416,1,0,0,0,2508,2423,1,0,0,0,2508,2436,1,0,0,0,2508,2437,
        1,0,0,0,2508,2438,1,0,0,0,2508,2444,1,0,0,0,2508,2450,1,0,0,0,2508,
        2456,1,0,0,0,2508,2462,1,0,0,0,2508,2463,1,0,0,0,2508,2464,1,0,0,
        0,2508,2475,1,0,0,0,2508,2484,1,0,0,0,2508,2491,1,0,0,0,2508,2495,
        1,0,0,0,2509,2520,1,0,0,0,2510,2511,10,15,0,0,2511,2512,5,251,0,
        0,2512,2513,3,310,155,0,2513,2514,5,252,0,0,2514,2519,1,0,0,0,2515,
        2516,10,13,0,0,2516,2517,5,245,0,0,2517,2519,3,356,178,0,2518,2510,
        1,0,0,0,2518,2515,1,0,0,0,2519,2522,1,0,0,0,2520,2518,1,0,0,0,2520,
        2521,1,0,0,0,2521,313,1,0,0,0,2522,2520,1,0,0,0,2523,2530,5,258,
        0,0,2524,2527,5,259,0,0,2525,2526,5,200,0,0,2526,2528,5,258,0,0,
        2527,2525,1,0,0,0,2527,2528,1,0,0,0,2528,2530,1,0,0,0,2529,2523,
        1,0,0,0,2529,2524,1,0,0,0,2530,315,1,0,0,0,2531,2532,7,23,0,0,2532,
        317,1,0,0,0,2533,2534,7,24,0,0,2534,319,1,0,0,0,2535,2536,7,25,0,
        0,2536,321,1,0,0,0,2537,2538,5,261,0,0,2538,2552,3,324,162,0,2539,
        2540,5,249,0,0,2540,2541,5,261,0,0,2541,2542,5,250,0,0,2542,2552,
        3,324,162,0,2543,2544,5,101,0,0,2544,2545,5,261,0,0,2545,2552,3,
        324,162,0,2546,2547,5,101,0,0,2547,2548,5,249,0,0,2548,2549,5,261,
        0,0,2549,2550,5,250,0,0,2550,2552,3,324,162,0,2551,2537,1,0,0,0,
        2551,2539,1,0,0,0,2551,2543,1,0,0,0,2551,2546,1,0,0,0,2552,323,1,
        0,0,0,2553,2554,7,26,0,0,2554,325,1,0,0,0,2555,2556,7,27,0,0,2556,
        327,1,0,0,0,2557,2558,6,164,-1,0,2558,2559,5,8,0,0,2559,2560,5,235,
        0,0,2560,2561,3,328,164,0,2561,2562,5,237,0,0,2562,2602,1,0,0,0,
        2563,2564,5,122,0,0,2564,2565,5,235,0,0,2565,2566,3,328,164,0,2566,
        2567,5,247,0,0,2567,2568,3,328,164,0,2568,2569,5,237,0,0,2569,2602,
        1,0,0,0,2570,2571,5,184,0,0,2571,2572,5,235,0,0,2572,2573,3,356,
        178,0,2573,2574,5,248,0,0,2574,2582,3,328,164,0,2575,2576,5,247,
        0,0,2576,2577,3,356,178,0,2577,2578,5,248,0,0,2578,2579,3,328,164,
        0,2579,2581,1,0,0,0,2580,2575,1,0,0,0,2581,2584,1,0,0,0,2582,2580,
        1,0,0,0,2582,2583,1,0,0,0,2583,2585,1,0,0,0,2584,2582,1,0,0,0,2585,
        2586,5,237,0,0,2586,2602,1,0,0,0,2587,2599,3,332,166,0,2588,2589,
        5,249,0,0,2589,2594,3,330,165,0,2590,2591,5,247,0,0,2591,2593,3,
        330,165,0,2592,2590,1,0,0,0,2593,2596,1,0,0,0,2594,2592,1,0,0,0,
        2594,2595,1,0,0,0,2595,2597,1,0,0,0,2596,2594,1,0,0,0,2597,2598,
        5,250,0,0,2598,2600,1,0,0,0,2599,2588,1,0,0,0,2599,2600,1,0,0,0,
        2600,2602,1,0,0,0,2601,2557,1,0,0,0,2601,2563,1,0,0,0,2601,2570,
        1,0,0,0,2601,2587,1,0,0,0,2602,2607,1,0,0,0,2603,2604,10,5,0,0,2604,
        2606,5,8,0,0,2605,2603,1,0,0,0,2606,2609,1,0,0,0,2607,2605,1,0,0,
        0,2607,2608,1,0,0,0,2608,329,1,0,0,0,2609,2607,1,0,0,0,2610,2613,
        5,261,0,0,2611,2613,3,328,164,0,2612,2610,1,0,0,0,2612,2611,1,0,
        0,0,2613,331,1,0,0,0,2614,2619,5,268,0,0,2615,2619,5,269,0,0,2616,
        2619,5,270,0,0,2617,2619,3,356,178,0,2618,2614,1,0,0,0,2618,2615,
        1,0,0,0,2618,2616,1,0,0,0,2618,2617,1,0,0,0,2619,333,1,0,0,0,2620,
        2621,5,216,0,0,2621,2622,3,304,152,0,2622,2623,5,194,0,0,2623,2624,
        3,304,152,0,2624,335,1,0,0,0,2625,2626,5,74,0,0,2626,2627,5,249,
        0,0,2627,2628,5,217,0,0,2628,2629,3,306,153,0,2629,2630,5,250,0,
        0,2630,337,1,0,0,0,2631,2632,5,144,0,0,2632,2643,5,249,0,0,2633,
        2634,5,146,0,0,2634,2635,5,26,0,0,2635,2640,3,304,152,0,2636,2637,
        5,247,0,0,2637,2639,3,304,152,0,2638,2636,1,0,0,0,2639,2642,1,0,
        0,0,2640,2638,1,0,0,0,2640,2641,1,0,0,0,2641,2644,1,0,0,0,2642,2640,
        1,0,0,0,2643,2633,1,0,0,0,2643,2644,1,0,0,0,2644,2655,1,0,0,0,2645,
        2646,5,140,0,0,2646,2647,5,26,0,0,2647,2652,3,264,132,0,2648,2649,
        5,247,0,0,2649,2651,3,264,132,0,2650,2648,1,0,0,0,2651,2654,1,0,
        0,0,2652,2650,1,0,0,0,2652,2653,1,0,0,0,2653,2656,1,0,0,0,2654,2652,
        1,0,0,0,2655,2645,1,0,0,0,2655,2656,1,0,0,0,2656,2658,1,0,0,0,2657,
        2659,3,340,170,0,2658,2657,1,0,0,0,2658,2659,1,0,0,0,2659,2660,1,
        0,0,0,2660,2661,5,250,0,0,2661,339,1,0,0,0,2662,2663,5,155,0,0,2663,
        2679,3,342,171,0,2664,2665,5,170,0,0,2665,2679,3,342,171,0,2666,
        2667,5,155,0,0,2667,2668,5,15,0,0,2668,2669,3,342,171,0,2669,2670,
        5,5,0,0,2670,2671,3,342,171,0,2671,2679,1,0,0,0,2672,2673,5,170,
        0,0,2673,2674,5,15,0,0,2674,2675,3,342,171,0,2675,2676,5,5,0,0,2676,
        2677,3,342,171,0,2677,2679,1,0,0,0,2678,2662,1,0,0,0,2678,2664,1,
        0,0,0,2678,2666,1,0,0,0,2678,2672,1,0,0,0,2679,341,1,0,0,0,2680,
        2681,5,201,0,0,2681,2690,5,150,0,0,2682,2683,5,201,0,0,2683,2690,
        5,77,0,0,2684,2685,5,39,0,0,2685,2690,5,169,0,0,2686,2687,3,304,
        152,0,2687,2688,7,28,0,0,2688,2690,1,0,0,0,2689,2680,1,0,0,0,2689,
        2682,1,0,0,0,2689,2684,1,0,0,0,2689,2686,1,0,0,0,2690,343,1,0,0,
        0,2691,2692,3,356,178,0,2692,2693,5,245,0,0,2693,2694,3,356,178,
        0,2694,2697,1,0,0,0,2695,2697,3,356,178,0,2696,2691,1,0,0,0,2696,
        2695,1,0,0,0,2697,345,1,0,0,0,2698,2703,3,344,172,0,2699,2700,5,
        247,0,0,2700,2702,3,344,172,0,2701,2699,1,0,0,0,2702,2705,1,0,0,
        0,2703,2701,1,0,0,0,2703,2704,1,0,0,0,2704,347,1,0,0,0,2705,2703,
        1,0,0,0,2706,2720,5,2,0,0,2707,2720,5,4,0,0,2708,2720,5,58,0,0,2709,
        2720,5,37,0,0,2710,2720,5,99,0,0,2711,2720,5,163,0,0,2712,2717,5,
        175,0,0,2713,2714,5,249,0,0,2714,2715,3,356,178,0,2715,2716,5,250,
        0,0,2716,2718,1,0,0,0,2717,2713,1,0,0,0,2717,2718,1,0,0,0,2718,2720,
        1,0,0,0,2719,2706,1,0,0,0,2719,2707,1,0,0,0,2719,2708,1,0,0,0,2719,
        2709,1,0,0,0,2719,2710,1,0,0,0,2719,2711,1,0,0,0,2719,2712,1,0,0,
        0,2720,349,1,0,0,0,2721,2722,7,29,0,0,2722,351,1,0,0,0,2723,2728,
        3,356,178,0,2724,2725,5,245,0,0,2725,2727,3,356,178,0,2726,2724,
        1,0,0,0,2727,2730,1,0,0,0,2728,2726,1,0,0,0,2728,2729,1,0,0,0,2729,
        353,1,0,0,0,2730,2728,1,0,0,0,2731,2732,5,167,0,0,2732,2738,3,356,
        178,0,2733,2734,5,206,0,0,2734,2738,3,356,178,0,2735,2736,5,87,0,
        0,2736,2738,3,356,178,0,2737,2731,1,0,0,0,2737,2733,1,0,0,0,2737,
        2735,1,0,0,0,2738,355,1,0,0,0,2739,2745,5,264,0,0,2740,2745,5,258,
        0,0,2741,2745,3,362,181,0,2742,2745,5,267,0,0,2743,2745,5,265,0,
        0,2744,2739,1,0,0,0,2744,2740,1,0,0,0,2744,2741,1,0,0,0,2744,2742,
        1,0,0,0,2744,2743,1,0,0,0,2745,357,1,0,0,0,2746,2748,5,240,0,0,2747,
        2746,1,0,0,0,2747,2748,1,0,0,0,2748,2749,1,0,0,0,2749,2759,5,262,
        0,0,2750,2752,5,240,0,0,2751,2750,1,0,0,0,2751,2752,1,0,0,0,2752,
        2753,1,0,0,0,2753,2759,5,263,0,0,2754,2756,5,240,0,0,2755,2754,1,
        0,0,0,2755,2756,1,0,0,0,2756,2757,1,0,0,0,2757,2759,5,261,0,0,2758,
        2747,1,0,0,0,2758,2751,1,0,0,0,2758,2755,1,0,0,0,2759,359,1,0,0,
        0,2760,2761,7,30,0,0,2761,361,1,0,0,0,2762,2763,7,31,0,0,2763,363,
        1,0,0,0,352,367,374,398,411,415,419,428,433,437,443,445,450,454,
        458,465,470,476,480,489,496,500,505,507,512,516,523,527,532,536,
        540,544,552,557,561,569,573,582,585,588,594,601,612,617,622,627,
        632,641,644,647,651,677,703,712,722,725,739,757,759,768,779,788,
        795,799,806,812,815,820,827,841,854,859,864,870,906,909,915,918,
        924,930,942,944,952,960,965,969,974,981,985,989,995,999,1003,1012,
        1015,1018,1026,1040,1047,1060,1066,1071,1074,1077,1082,1086,1095,
        1100,1106,1110,1115,1120,1123,1131,1134,1138,1150,1153,1157,1162,
        1166,1182,1187,1194,1197,1203,1206,1213,1216,1220,1225,1228,1235,
        1238,1262,1276,1280,1284,1304,1306,1308,1317,1319,1328,1330,1339,
        1341,1346,1355,1364,1373,1384,1390,1395,1398,1411,1421,1425,1430,
        1441,1446,1479,1487,1492,1496,1500,1505,1509,1514,1519,1524,1528,
        1537,1540,1544,1551,1562,1568,1572,1578,1588,1595,1600,1605,1610,
        1616,1619,1628,1631,1634,1640,1646,1656,1659,1663,1667,1670,1676,
        1679,1685,1691,1694,1697,1701,1711,1722,1727,1730,1734,1741,1751,
        1763,1769,1771,1780,1783,1790,1800,1806,1814,1825,1835,1846,1848,
        1854,1859,1869,1872,1878,1880,1888,1894,1897,1899,1911,1918,1922,
        1926,1930,1933,1940,1949,1952,1956,1961,1965,1968,1975,1986,1989,
        1993,1997,2006,2009,2016,2030,2034,2038,2042,2046,2050,2054,2058,
        2068,2079,2084,2097,2099,2105,2109,2111,2119,2126,2131,2144,2150,
        2158,2165,2169,2177,2179,2190,2198,2207,2213,2218,2224,2230,2235,
        2240,2246,2257,2259,2286,2292,2296,2308,2318,2321,2326,2333,2336,
        2345,2348,2352,2355,2367,2370,2389,2393,2401,2405,2430,2433,2442,
        2448,2454,2460,2471,2480,2502,2505,2508,2518,2520,2527,2529,2551,
        2582,2594,2599,2601,2607,2612,2618,2640,2643,2652,2655,2658,2678,
        2689,2696,2703,2717,2719,2728,2737,2744,2747,2751,2755,2758
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
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
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
