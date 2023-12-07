// Generated from dt-sql-parser/src/grammar/impala/ImpalaSqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ImpalaSqlParserListener } from "./ImpalaSqlParserListener";
import { ImpalaSqlParserVisitor } from "./ImpalaSqlParserVisitor";


export class ImpalaSqlParser extends Parser {
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
	public static readonly RULE_statement = 1;
	public static readonly RULE_sqlStatements = 2;
	public static readonly RULE_emptyStatement = 3;
	public static readonly RULE_sqlStatement = 4;
	public static readonly RULE_useStatement = 5;
	public static readonly RULE_createStatement = 6;
	public static readonly RULE_createTableSelect = 7;
	public static readonly RULE_createTableLike = 8;
	public static readonly RULE_createKuduTableAsSelect = 9;
	public static readonly RULE_createView = 10;
	public static readonly RULE_createSchema = 11;
	public static readonly RULE_createRole = 12;
	public static readonly RULE_createAggregateFunction = 13;
	public static readonly RULE_createFunction = 14;
	public static readonly RULE_alterStatement = 15;
	public static readonly RULE_alterDatabase = 16;
	public static readonly RULE_alterStatsKey = 17;
	public static readonly RULE_alterPartitionCache = 18;
	public static readonly RULE_changeColumnDefine = 19;
	public static readonly RULE_alterDropSingleColumn = 20;
	public static readonly RULE_alterTableOwner = 21;
	public static readonly RULE_replaceOrAddColumns = 22;
	public static readonly RULE_addSingleColumn = 23;
	public static readonly RULE_alterTableNonKuduOrKuduOnly = 24;
	public static readonly RULE_addPartitionByRangeOrValue = 25;
	public static readonly RULE_alterFormat = 26;
	public static readonly RULE_recoverPartitions = 27;
	public static readonly RULE_dropPartitionByRangeOrValue = 28;
	public static readonly RULE_alterView = 29;
	public static readonly RULE_renameView = 30;
	public static readonly RULE_alterViewOwner = 31;
	public static readonly RULE_renameTable = 32;
	public static readonly RULE_alterUnSetOrSetViewTblproperties = 33;
	public static readonly RULE_truncateTableStatement = 34;
	public static readonly RULE_describeStatement = 35;
	public static readonly RULE_computeStatement = 36;
	public static readonly RULE_computeStats = 37;
	public static readonly RULE_computeIncrementalStats = 38;
	public static readonly RULE_dropStatement = 39;
	public static readonly RULE_dropSchema = 40;
	public static readonly RULE_dropView = 41;
	public static readonly RULE_dropTable = 42;
	public static readonly RULE_dropIncrementalStats = 43;
	public static readonly RULE_dropFunction = 44;
	public static readonly RULE_dropRole = 45;
	public static readonly RULE_grantStatement = 46;
	public static readonly RULE_grantRole = 47;
	public static readonly RULE_grant = 48;
	public static readonly RULE_revokeStatement = 49;
	public static readonly RULE_revokeRole = 50;
	public static readonly RULE_revoke = 51;
	public static readonly RULE_insertStatement = 52;
	public static readonly RULE_deleteStatement = 53;
	public static readonly RULE_delete = 54;
	public static readonly RULE_deleteTableRef = 55;
	public static readonly RULE_updateStatement = 56;
	public static readonly RULE_upsertStatement = 57;
	public static readonly RULE_showStatement = 58;
	public static readonly RULE_showSchemas = 59;
	public static readonly RULE_showTables = 60;
	public static readonly RULE_showFunctions = 61;
	public static readonly RULE_showCreateTable = 62;
	public static readonly RULE_showCreateView = 63;
	public static readonly RULE_showTableStats = 64;
	public static readonly RULE_showColumnStats = 65;
	public static readonly RULE_showPartitions = 66;
	public static readonly RULE_showFiles = 67;
	public static readonly RULE_showRoles = 68;
	public static readonly RULE_showRoleGrant = 69;
	public static readonly RULE_showGrants = 70;
	public static readonly RULE_showDatabaseGrant = 71;
	public static readonly RULE_showTableGrant = 72;
	public static readonly RULE_showColumnGrant = 73;
	public static readonly RULE_addCommentStatement = 74;
	public static readonly RULE_addDatabaseComments = 75;
	public static readonly RULE_addTableComments = 76;
	public static readonly RULE_addColumnComments = 77;
	public static readonly RULE_explainStatement = 78;
	public static readonly RULE_setStatement = 79;
	public static readonly RULE_shutdownStatement = 80;
	public static readonly RULE_invalidateMetaStatement = 81;
	public static readonly RULE_loadDataStatement = 82;
	public static readonly RULE_refreshStatement = 83;
	public static readonly RULE_refreshMeta = 84;
	public static readonly RULE_refreshAuth = 85;
	public static readonly RULE_refreshFunction = 86;
	public static readonly RULE_ifExists = 87;
	public static readonly RULE_ifNotExists = 88;
	public static readonly RULE_tableNameCreate = 89;
	public static readonly RULE_databaseNameCreate = 90;
	public static readonly RULE_viewNameCreate = 91;
	public static readonly RULE_functionNameCreate = 92;
	public static readonly RULE_columnNamePathCreate = 93;
	public static readonly RULE_databaseNamePath = 94;
	public static readonly RULE_tableNamePath = 95;
	public static readonly RULE_viewNamePath = 96;
	public static readonly RULE_functionNamePath = 97;
	public static readonly RULE_columnNamePath = 98;
	public static readonly RULE_tableOrViewPath = 99;
	public static readonly RULE_createCommonItem = 100;
	public static readonly RULE_assignmentList = 101;
	public static readonly RULE_assignmentItem = 102;
	public static readonly RULE_viewColumns = 103;
	public static readonly RULE_queryStatement = 104;
	public static readonly RULE_with = 105;
	public static readonly RULE_constraintSpecification = 106;
	public static readonly RULE_foreignKeySpecification = 107;
	public static readonly RULE_columnDefinition = 108;
	public static readonly RULE_kuduTableElement = 109;
	public static readonly RULE_kuduColumnDefinition = 110;
	public static readonly RULE_columnSpecWithKudu = 111;
	public static readonly RULE_createColumnSpecWithKudu = 112;
	public static readonly RULE_kuduAttributes = 113;
	public static readonly RULE_kuduStorageAttr = 114;
	public static readonly RULE_statsKey = 115;
	public static readonly RULE_fileFormat = 116;
	public static readonly RULE_kuduPartitionClause = 117;
	public static readonly RULE_hashClause = 118;
	public static readonly RULE_rangeClause = 119;
	public static readonly RULE_kuduPartitionSpec = 120;
	public static readonly RULE_cacheSpec = 121;
	public static readonly RULE_rangeOperator = 122;
	public static readonly RULE_partitionCol = 123;
	public static readonly RULE_likeClause = 124;
	public static readonly RULE_properties = 125;
	public static readonly RULE_partitionedBy = 126;
	public static readonly RULE_sortedBy = 127;
	public static readonly RULE_rowFormat = 128;
	public static readonly RULE_property = 129;
	public static readonly RULE_queryNoWith = 130;
	public static readonly RULE_queryTerm = 131;
	public static readonly RULE_queryPrimary = 132;
	public static readonly RULE_sortItem = 133;
	public static readonly RULE_querySpecification = 134;
	public static readonly RULE_groupBy = 135;
	public static readonly RULE_groupingElement = 136;
	public static readonly RULE_groupingSet = 137;
	public static readonly RULE_namedQuery = 138;
	public static readonly RULE_setQuantifier = 139;
	public static readonly RULE_selectItem = 140;
	public static readonly RULE_relation = 141;
	public static readonly RULE_joinType = 142;
	public static readonly RULE_joinCriteria = 143;
	public static readonly RULE_sampledRelation = 144;
	public static readonly RULE_sampleType = 145;
	public static readonly RULE_aliasedRelation = 146;
	public static readonly RULE_columnAliases = 147;
	public static readonly RULE_createColumnAliases = 148;
	public static readonly RULE_relationPrimary = 149;
	public static readonly RULE_subQueryRelation = 150;
	public static readonly RULE_unnest = 151;
	public static readonly RULE_parenthesizedRelation = 152;
	public static readonly RULE_columnItem = 153;
	public static readonly RULE_expression = 154;
	public static readonly RULE_booleanExpression = 155;
	public static readonly RULE_predicate = 156;
	public static readonly RULE_valueExpression = 157;
	public static readonly RULE_primaryExpression = 158;
	public static readonly RULE_stringLiteral = 159;
	public static readonly RULE_comparisonOperator = 160;
	public static readonly RULE_comparisonQuantifier = 161;
	public static readonly RULE_booleanValue = 162;
	public static readonly RULE_interval = 163;
	public static readonly RULE_intervalField = 164;
	public static readonly RULE_normalForm = 165;
	public static readonly RULE_type = 166;
	public static readonly RULE_typeParameter = 167;
	public static readonly RULE_baseType = 168;
	public static readonly RULE_whenClause = 169;
	public static readonly RULE_filter = 170;
	public static readonly RULE_over = 171;
	public static readonly RULE_windowFrame = 172;
	public static readonly RULE_frameBound = 173;
	public static readonly RULE_pathElement = 174;
	public static readonly RULE_pathSpecification = 175;
	public static readonly RULE_privilege = 176;
	public static readonly RULE_objectType = 177;
	public static readonly RULE_qualifiedName = 178;
	public static readonly RULE_principal = 179;
	public static readonly RULE_identifier = 180;
	public static readonly RULE_number = 181;
	public static readonly RULE_reservedKeywordsUsedAsFuncName = 182;
	public static readonly RULE_nonReserved = 183;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "sqlStatements", "emptyStatement", "sqlStatement", 
		"useStatement", "createStatement", "createTableSelect", "createTableLike", 
		"createKuduTableAsSelect", "createView", "createSchema", "createRole", 
		"createAggregateFunction", "createFunction", "alterStatement", "alterDatabase", 
		"alterStatsKey", "alterPartitionCache", "changeColumnDefine", "alterDropSingleColumn", 
		"alterTableOwner", "replaceOrAddColumns", "addSingleColumn", "alterTableNonKuduOrKuduOnly", 
		"addPartitionByRangeOrValue", "alterFormat", "recoverPartitions", "dropPartitionByRangeOrValue", 
		"alterView", "renameView", "alterViewOwner", "renameTable", "alterUnSetOrSetViewTblproperties", 
		"truncateTableStatement", "describeStatement", "computeStatement", "computeStats", 
		"computeIncrementalStats", "dropStatement", "dropSchema", "dropView", 
		"dropTable", "dropIncrementalStats", "dropFunction", "dropRole", "grantStatement", 
		"grantRole", "grant", "revokeStatement", "revokeRole", "revoke", "insertStatement", 
		"deleteStatement", "delete", "deleteTableRef", "updateStatement", "upsertStatement", 
		"showStatement", "showSchemas", "showTables", "showFunctions", "showCreateTable", 
		"showCreateView", "showTableStats", "showColumnStats", "showPartitions", 
		"showFiles", "showRoles", "showRoleGrant", "showGrants", "showDatabaseGrant", 
		"showTableGrant", "showColumnGrant", "addCommentStatement", "addDatabaseComments", 
		"addTableComments", "addColumnComments", "explainStatement", "setStatement", 
		"shutdownStatement", "invalidateMetaStatement", "loadDataStatement", "refreshStatement", 
		"refreshMeta", "refreshAuth", "refreshFunction", "ifExists", "ifNotExists", 
		"tableNameCreate", "databaseNameCreate", "viewNameCreate", "functionNameCreate", 
		"columnNamePathCreate", "databaseNamePath", "tableNamePath", "viewNamePath", 
		"functionNamePath", "columnNamePath", "tableOrViewPath", "createCommonItem", 
		"assignmentList", "assignmentItem", "viewColumns", "queryStatement", "with", 
		"constraintSpecification", "foreignKeySpecification", "columnDefinition", 
		"kuduTableElement", "kuduColumnDefinition", "columnSpecWithKudu", "createColumnSpecWithKudu", 
		"kuduAttributes", "kuduStorageAttr", "statsKey", "fileFormat", "kuduPartitionClause", 
		"hashClause", "rangeClause", "kuduPartitionSpec", "cacheSpec", "rangeOperator", 
		"partitionCol", "likeClause", "properties", "partitionedBy", "sortedBy", 
		"rowFormat", "property", "queryNoWith", "queryTerm", "queryPrimary", "sortItem", 
		"querySpecification", "groupBy", "groupingElement", "groupingSet", "namedQuery", 
		"setQuantifier", "selectItem", "relation", "joinType", "joinCriteria", 
		"sampledRelation", "sampleType", "aliasedRelation", "columnAliases", "createColumnAliases", 
		"relationPrimary", "subQueryRelation", "unnest", "parenthesizedRelation", 
		"columnItem", "expression", "booleanExpression", "predicate", "valueExpression", 
		"primaryExpression", "stringLiteral", "comparisonOperator", "comparisonQuantifier", 
		"booleanValue", "interval", "intervalField", "normalForm", "type", "typeParameter", 
		"baseType", "whenClause", "filter", "over", "windowFrame", "frameBound", 
		"pathElement", "pathSpecification", "privilege", "objectType", "qualifiedName", 
		"principal", "identifier", "number", "reservedKeywordsUsedAsFuncName", 
		"nonReserved",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'ADD'", "'ALL'", "'ANALYTIC'", "'ALTER'", "'AND'", "'ANY'", 
		"'ANTI'", "'ARRAY'", "'AS'", "'ASC'", "'AT'", "'AGGREGATE'", "'AUTHORIZATION'", 
		"'BERNOULLI'", "'BETWEEN'", "'BLOCK_SIZE'", "'PARTITIONED'", "'PREPARE_FN'", 
		"'EXTERNAL'", "'CLOSEFN'", "'SORT'", "'PURGE'", "'STORED'", "'LOCATION'", 
		"'TBLPROPERTIES'", "'BY'", "'CASCADE'", "'CASE'", "'CAST'", "'CACHED'", 
		"'CHANGE'", "'COLUMN'", "'COLUMNS'", "'COMMENT'", "'COMPRESSION'", "'COMPUTE'", 
		"'CREATE'", "'CROSS'", "'CURRENT'", "'CURRENT_DATE'", "'CURRENT_PATH'", 
		"'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", "'CURRENT_USER'", "'DATA'", "'DATABASE'", 
		"'DATABASES'", "'DAY'", "'DAYS'", "'DELETE'", "'DEFAULT'", "'DELIMITED'", 
		"'DISABLE'", "'UPDATE'", "'DESC'", "'DESCRIBE'", "'DISTINCT'", "'DROP'", 
		"'ELSE'", "'ENCODING'", "'END'", "'ESCAPE'", "'ESCAPED'", "'EXCEPT'", 
		"'EXCLUDING'", "'EXISTS'", "'EXPLAIN'", "'EXTRACT'", "'EXTENDED'", "'FALSE'", 
		"'FIELDS'", "'FILEFORMAT'", "'FILES'", "'FILTER'", "'FIRST'", "'FINALIZE_FN'", 
		"'FOLLOWING'", "'FOR'", "'FORMAT'", "'FORMATTED'", "'FOREIGN'", "'FROM'", 
		"'FULL'", "'FUNCTION'", "'FUNCTIONS'", "'GRANT'", "'GROUP'", "'GROUPING'", 
		"'HASH'", "'HAVING'", "'HOUR'", "'HOURS'", "'IF'", "'IN'", "'INCLUDING'", 
		"'INCREMENTAL'", "'INNER'", "'INPATH'", "'INSERT'", "'INTERSECT'", "'INTERVAL'", 
		"'INTERMEDIATE'", "'INTO'", "'INIT_FN'", "'IREGEXP'", "'ILIKE'", "'INVALIDATE'", 
		"'IS'", "'JOIN'", "'KEY'", "'KUDU'", "'LAST'", "'LATERAL'", "'LEFT'", 
		"'LIKE'", "'LIMIT'", "'LINES'", "'LOAD'", "'LOCALTIME'", "'LOCALTIMESTAMP'", 
		"'METADATA'", "'MAP'", "'MINUTE'", "'MINUTES'", "'MONTH'", "'MONTHS'", 
		"'MERGE_FN'", "'NFC'", "'NFD'", "'NFKC'", "'NFKD'", "'NORMALIZE'", "'NOT'", 
		"'NULL'", "'NULLS'", "'OFFSET'", "'ON'", "'OPTION'", "'OR'", "'ORDER'", 
		"'ORDINALITY'", "'OUTER'", "'OWNER'", "'OVER'", "'OVERWRITE'", "'PARTITION'", 
		"'PARTITIONS'", "'PARQUET'", "'POSITION'", "'PRECEDING'", "'PRIMARY'", 
		"'REPLICATION'", "'PRIVILEGES'", "'PROPERTIES'", "'RANGE'", "'RECOVER'", 
		"'RENAME'", "'REPEATABLE'", "'REPLACE'", "'RESTRICT'", "'RETURNS'", "'REVOKE'", 
		"'REFRESH'", "'REGEXP'", "'RLIKE'", "'RIGHT'", "'ROLE'", "'ROLES'", "'ROW'", 
		"'ROWS'", "'SCHEMA'", "'SCHEMAS'", "'SECOND'", "'SECONDS'", "'SELECT'", 
		"'SERDEPROPERTIES'", "'SET'", "'SEMI'", "'SERVER'", "'SHOW'", "'SHUTDOWN'", 
		"'SOME'", "'STATS'", "'STRUCT'", "'STRAIGHT_JOIN'", "'SUBSTRING'", "'SYSTEM'", 
		"'SYMBOL'", "'SERIALIZE_FN'", "'TABLE'", "'TABLES'", "'TABLESAMPLE'", 
		"'TERMINATED '", "'THEN'", "'TO'", "'TRUE'", "'TRY_CAST'", "'TRUNCATE'", 
		"'UNCACHED'", "'UESCAPE'", "'UNBOUNDED'", "'UNION'", "'UNNEST'", "'UNSET'", 
		"'USE'", "'USER'", "'USING'", "'UPDATE_FN'", "'UPSERT'", "'UNKNOWN'", 
		"'URI'", "'VALUE'", "'VALUES'", "'VIEW'", "'VIEWS'", "'WHEN'", "'WHERE'", 
		"'WITH'", "'YEAR'", "'YEARS'", "'TEXTFILE'", "'ORC'", "'AVRO'", "'SEQUENCEFILE'", 
		"'RCFILE'", "'REFERENCES'", "'NOVALIDATE'", "'RELY'", "''UMDVS''", "''UMNULLS''", 
		"''VGSIZE''", "''AXSIZE''", "'='", undefined, "'<'", "'<='", "'>'", "'>='", 
		"'+'", "'-'", "'*'", "'/'", "'%'", "'||'", "'.'", "';'", "','", "':'", 
		"'('", "')'", "'['", "']'", "'{'", "'}'", "'|'", "'?'", "'->'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "KW_ADD", "KW_ALL", "KW_ANALYTIC", "KW_ALTER", "KW_AND", "KW_ANY", 
		"KW_ANTI", "KW_ARRAY", "KW_AS", "KW_ASC", "KW_AT", "KW_AGGREGATE", "KW_AUTHORIZATION", 
		"KW_BERNOULLI", "KW_BETWEEN", "KW_BLOCK_SIZE", "KW_PARTITIONED", "KW_PREPARE_FN", 
		"KW_EXTERNAL", "KW_CLOSEFN", "KW_SORT", "KW_PURGE", "KW_STORED", "KW_LOCATION", 
		"KW_TBLPROPERTIES", "KW_BY", "KW_CASCADE", "KW_CASE", "KW_CAST", "KW_CACHED", 
		"KW_CHANGE", "KW_COLUMN", "KW_COLUMNS", "KW_COMMENT", "KW_COMPRESSION", 
		"KW_COMPUTE", "KW_CREATE", "KW_CROSS", "KW_CURRENT", "KW_CURRENT_DATE", 
		"KW_CURRENT_PATH", "KW_CURRENT_TIME", "KW_CURRENT_TIMESTAMP", "KW_CURRENT_USER", 
		"KW_DATA", "KW_DATABASE", "KW_DATABASES", "KW_DAY", "KW_DAYS", "KW_DELETE", 
		"KW_DEFAULT", "KW_DELIMITED", "KW_DISABLE", "KW_UPDATE", "KW_DESC", "KW_DESCRIBE", 
		"KW_DISTINCT", "KW_DROP", "KW_ELSE", "KW_ENCODING", "KW_END", "KW_ESCAPE", 
		"KW_ESCAPED", "KW_EXCEPT", "KW_EXCLUDING", "KW_EXISTS", "KW_EXPLAIN", 
		"KW_EXTRACT", "KW_EXTENDED", "KW_FALSE", "KW_FIELDS", "KW_FILEFORMAT", 
		"KW_FILES", "KW_FILTER", "KW_FIRST", "KW_FINALIZE_FN", "KW_FOLLOWING", 
		"KW_FOR", "KW_FORMAT", "KW_FORMATTED", "KW_FOREIGN", "KW_FROM", "KW_FULL", 
		"KW_FUNCTION", "KW_FUNCTIONS", "KW_GRANT", "KW_GROUP", "KW_GROUPING", 
		"KW_HASH", "KW_HAVING", "KW_HOUR", "KW_HOURS", "KW_IF", "KW_IN", "KW_INCLUDING", 
		"KW_INCREMENTAL", "KW_INNER", "KW_INPATH", "KW_INSERT", "KW_INTERSECT", 
		"KW_INTERVAL", "KW_INTERMEDIATE", "KW_INTO", "KW_INIT_FN", "KW_IREGEXP", 
		"KW_ILIKE", "KW_INVALIDATE", "KW_IS", "KW_JOIN", "KW_KEY", "KW_KUDU", 
		"KW_LAST", "KW_LATERAL", "KW_LEFT", "KW_LIKE", "KW_LIMIT", "KW_LINES", 
		"KW_LOAD", "KW_LOCALTIME", "KW_LOCALTIMESTAMP", "KW_METADATA", "KW_MAP", 
		"KW_MINUTE", "KW_MINUTES", "KW_MONTH", "KW_MONTHS", "KW_MERGE_FN", "KW_NFC", 
		"KW_NFD", "KW_NFKC", "KW_NFKD", "KW_NORMALIZE", "KW_NOT", "KW_NULL", "KW_NULLS", 
		"KW_OFFSET", "KW_ON", "KW_OPTION", "KW_OR", "KW_ORDER", "KW_ORDINALITY", 
		"KW_OUTER", "KW_OWNER", "KW_OVER", "KW_OVERWRITE", "KW_PARTITION", "KW_PARTITIONS", 
		"KW_PARQUET", "KW_POSITION", "KW_PRECEDING", "KW_PRIMARY", "KW_REPLICATION", 
		"KW_PRIVILEGES", "KW_PROPERTIES", "KW_RANGE", "KW_RECOVER", "KW_RENAME", 
		"KW_REPEATABLE", "KW_REPLACE", "KW_RESTRICT", "KW_RETURNS", "KW_REVOKE", 
		"KW_REFRESH", "KW_REGEXP", "KW_RLIKE", "KW_RIGHT", "KW_ROLE", "KW_ROLES", 
		"KW_ROW", "KW_ROWS", "KW_SCHEMA", "KW_SCHEMAS", "KW_SECOND", "KW_SECONDS", 
		"KW_SELECT", "KW_SERDEPROPERTIES", "KW_SET", "KW_SEMI", "KW_SERVER", "KW_SHOW", 
		"KW_SHUTDOWN", "KW_SOME", "KW_STATS", "KW_STRUCT", "KW_STRAIGHT_JOIN", 
		"KW_SUBSTRING", "KW_SYSTEM", "KW_SYMBOL", "KW_SERIALIZE_FN", "KW_TABLE", 
		"KW_TABLES", "KW_TABLESAMPLE", "KW_TERMINATED", "KW_THEN", "KW_TO", "KW_TRUE", 
		"KW_TRY_CAST", "KW_TRUNCATE", "KW_UNCACHED", "KW_UESCAPE", "KW_UNBOUNDED", 
		"KW_UNION", "KW_UNNEST", "KW_UNSET", "KW_USE", "KW_USER", "KW_USING", 
		"KW_UPDATE_FN", "KW_UPSERT", "KW_UNKNOWN", "KW_URI", "KW_VALUE", "KW_VALUES", 
		"KW_VIEW", "KW_VIEWS", "KW_WHEN", "KW_WHERE", "KW_WITH", "KW_YEAR", "KW_YEARS", 
		"KW_TEXTFILE", "KW_ORC", "KW_AVRO", "KW_SEQUENCEFILE", "KW_RCFILE", "KW_REFERENCES", 
		"KW_NOVALIDATE", "KW_RELY", "STATS_NUMDVS", "STATS_NUMNULLS", "STATS_AVGSIZE", 
		"STATS_MAXSIZE", "EQ", "NEQ", "LT", "LTE", "GT", "GTE", "PLUS", "MINUS", 
		"ASTERISK", "SLASH", "PERCENT", "CONCAT", "DOT", "SEMICOLON", "COMMA", 
		"COLON", "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "LCURLY", "RCURLY", 
		"BITWISEOR", "QUESTION", "RIGHT_ARROW", "STRING", "UNICODE_STRING", "BINARY_LITERAL", 
		"INTEGER_VALUE", "DECIMAL_VALUE", "DOUBLE_VALUE", "IDENTIFIER", "DIGIT_IDENTIFIER", 
		"QUOTED_IDENTIFIER", "BACKQUOTED_IDENTIFIER", "TIME_WITH_TIME_ZONE", "TIMESTAMP_WITH_TIME_ZONE", 
		"DOUBLE_PRECISION", "SIMPLE_COMMENT", "BRACKETED_COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ImpalaSqlParser._LITERAL_NAMES, ImpalaSqlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ImpalaSqlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ImpalaSqlParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return ImpalaSqlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ImpalaSqlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ImpalaSqlParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ImpalaSqlParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.statement();
			this.state = 369;
			this.match(ImpalaSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ImpalaSqlParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.sqlStatements();
			this.state = 372;
			this.match(ImpalaSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sqlStatements(): SqlStatementsContext {
		let _localctx: SqlStatementsContext = new SqlStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ImpalaSqlParser.RULE_sqlStatements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParser.KW_ALTER || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ImpalaSqlParser.KW_COMMENT - 34)) | (1 << (ImpalaSqlParser.KW_COMPUTE - 34)) | (1 << (ImpalaSqlParser.KW_CREATE - 34)) | (1 << (ImpalaSqlParser.KW_DELETE - 34)) | (1 << (ImpalaSqlParser.KW_UPDATE - 34)) | (1 << (ImpalaSqlParser.KW_DESCRIBE - 34)) | (1 << (ImpalaSqlParser.KW_DROP - 34)))) !== 0) || _la === ImpalaSqlParser.KW_EXPLAIN || _la === ImpalaSqlParser.KW_GRANT || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (ImpalaSqlParser.KW_INSERT - 99)) | (1 << (ImpalaSqlParser.KW_INVALIDATE - 99)) | (1 << (ImpalaSqlParser.KW_LOAD - 99)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ImpalaSqlParser.KW_REVOKE - 162)) | (1 << (ImpalaSqlParser.KW_REFRESH - 162)) | (1 << (ImpalaSqlParser.KW_SELECT - 162)) | (1 << (ImpalaSqlParser.KW_SET - 162)) | (1 << (ImpalaSqlParser.KW_SHOW - 162)) | (1 << (ImpalaSqlParser.KW_TABLE - 162)))) !== 0) || ((((_la - 198)) & ~0x1F) === 0 && ((1 << (_la - 198)) & ((1 << (ImpalaSqlParser.KW_TRUNCATE - 198)) | (1 << (ImpalaSqlParser.KW_USE - 198)) | (1 << (ImpalaSqlParser.KW_UPSERT - 198)) | (1 << (ImpalaSqlParser.KW_VALUES - 198)) | (1 << (ImpalaSqlParser.KW_WITH - 198)))) !== 0) || ((((_la - 246)) & ~0x1F) === 0 && ((1 << (_la - 246)) & ((1 << (ImpalaSqlParser.SEMICOLON - 246)) | (1 << (ImpalaSqlParser.COLON - 246)) | (1 << (ImpalaSqlParser.LPAREN - 246)))) !== 0)) {
				{
				this.state = 376;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
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
				case ImpalaSqlParser.COLON:
				case ImpalaSqlParser.LPAREN:
					{
					this.state = 374;
					this.sqlStatement();
					}
					break;
				case ImpalaSqlParser.SEMICOLON:
					{
					this.state = 375;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 380;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ImpalaSqlParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this.match(ImpalaSqlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sqlStatement(): SqlStatementContext {
		let _localctx: SqlStatementContext = new SqlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ImpalaSqlParser.RULE_sqlStatement);
		try {
			this.state = 471;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 383;
				this.queryStatement();
				this.state = 385;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 384;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 387;
				this.useStatement();
				this.state = 389;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 388;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 391;
				this.createStatement();
				this.state = 393;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 392;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 395;
				this.alterStatement();
				this.state = 397;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 396;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 399;
				this.truncateTableStatement();
				this.state = 401;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 400;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 403;
				this.describeStatement();
				this.state = 405;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 404;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 407;
				this.computeStatement();
				this.state = 409;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 408;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 411;
				this.dropStatement();
				this.state = 413;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 412;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 415;
				this.grantStatement();
				this.state = 417;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 416;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 419;
				this.revokeStatement();
				this.state = 421;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 420;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 423;
				this.insertStatement();
				this.state = 425;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 424;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 427;
				this.deleteStatement();
				this.state = 429;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 428;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 431;
				this.updateStatement();
				this.state = 433;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 432;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 435;
				this.upsertStatement();
				this.state = 437;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 436;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 439;
				this.showStatement();
				this.state = 441;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 440;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 443;
				this.addCommentStatement();
				this.state = 445;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 444;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 447;
				this.explainStatement();
				this.state = 449;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 448;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 451;
				this.setStatement();
				this.state = 453;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 452;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 455;
				this.shutdownStatement();
				this.state = 457;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 456;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 459;
				this.invalidateMetaStatement();
				this.state = 461;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 460;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 463;
				this.loadDataStatement();
				this.state = 465;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 464;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 467;
				this.refreshStatement();
				this.state = 469;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 468;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public useStatement(): UseStatementContext {
		let _localctx: UseStatementContext = new UseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ImpalaSqlParser.RULE_useStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this.match(ImpalaSqlParser.KW_USE);
			this.state = 474;
			this.databaseNamePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createStatement(): CreateStatementContext {
		let _localctx: CreateStatementContext = new CreateStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ImpalaSqlParser.RULE_createStatement);
		try {
			this.state = 484;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 476;
				this.createSchema();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 477;
				this.createRole();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 478;
				this.createAggregateFunction();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 479;
				this.createFunction();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 480;
				this.createView();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 481;
				this.createKuduTableAsSelect();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 482;
				this.createTableLike();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 483;
				this.createTableSelect();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createTableSelect(): CreateTableSelectContext {
		let _localctx: CreateTableSelectContext = new CreateTableSelectContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ImpalaSqlParser.RULE_createTableSelect);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this.match(ImpalaSqlParser.KW_CREATE);
			this.state = 488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_EXTERNAL) {
				{
				this.state = 487;
				this.match(ImpalaSqlParser.KW_EXTERNAL);
				}
			}

			this.state = 490;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IF) {
				{
				this.state = 491;
				this.ifNotExists();
				}
			}

			this.state = 494;
			this.tableNameCreate();
			this.state = 510;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 495;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 496;
				this.columnDefinition();
				this.state = 501;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 497;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 498;
						this.columnDefinition();
						}
						}
					}
					this.state = 503;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
				}
				this.state = 506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.COMMA) {
					{
					this.state = 504;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 505;
					this.constraintSpecification();
					}
				}

				this.state = 508;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;
			}
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITIONED) {
				{
				this.state = 512;
				this.match(ImpalaSqlParser.KW_PARTITIONED);
				this.state = 513;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 516;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 514;
					this.partitionedBy();
					}
					break;

				case 2:
					{
					this.state = 515;
					this.createColumnAliases();
					}
					break;
				}
				}
			}

			this.state = 520;
			this.createCommonItem();
			this.state = 523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_AS) {
				{
				this.state = 521;
				this.match(ImpalaSqlParser.KW_AS);
				this.state = 522;
				this.queryStatement();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createTableLike(): CreateTableLikeContext {
		let _localctx: CreateTableLikeContext = new CreateTableLikeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ImpalaSqlParser.RULE_createTableLike);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 525;
			this.match(ImpalaSqlParser.KW_CREATE);
			this.state = 527;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_EXTERNAL) {
				{
				this.state = 526;
				this.match(ImpalaSqlParser.KW_EXTERNAL);
				}
			}

			this.state = 529;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IF) {
				{
				this.state = 530;
				this.ifNotExists();
				}
			}

			this.state = 533;
			this.tableNameCreate();
			this.state = 534;
			this.match(ImpalaSqlParser.KW_LIKE);
			this.state = 538;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
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
				this.state = 535;
				this.tableNamePath();
				}
				break;
			case ImpalaSqlParser.KW_PARQUET:
				{
				this.state = 536;
				this.match(ImpalaSqlParser.KW_PARQUET);
				this.state = 537;
				_localctx._parquet = this.stringLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 543;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITIONED) {
				{
				this.state = 540;
				this.match(ImpalaSqlParser.KW_PARTITIONED);
				this.state = 541;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 542;
				this.partitionedBy();
				}
			}

			this.state = 545;
			this.createCommonItem();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createKuduTableAsSelect(): CreateKuduTableAsSelectContext {
		let _localctx: CreateKuduTableAsSelectContext = new CreateKuduTableAsSelectContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ImpalaSqlParser.RULE_createKuduTableAsSelect);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
			this.match(ImpalaSqlParser.KW_CREATE);
			this.state = 549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_EXTERNAL) {
				{
				this.state = 548;
				this.match(ImpalaSqlParser.KW_EXTERNAL);
				}
			}

			this.state = 551;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IF) {
				{
				this.state = 552;
				this.ifNotExists();
				}
			}

			this.state = 555;
			this.tableNameCreate();
			this.state = 573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.LPAREN) {
				{
				this.state = 556;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 557;
				this.kuduTableElement();
				this.state = 562;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 558;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 559;
						this.kuduTableElement();
						}
						}
					}
					this.state = 564;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				}
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.COMMA) {
					{
					this.state = 565;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 566;
					this.match(ImpalaSqlParser.KW_PRIMARY);
					this.state = 567;
					this.match(ImpalaSqlParser.KW_KEY);
					this.state = 568;
					this.columnAliases();
					}
				}

				this.state = 571;
				this.match(ImpalaSqlParser.RPAREN);
				}
			}

			this.state = 580;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PRIMARY) {
				{
				this.state = 575;
				this.match(ImpalaSqlParser.KW_PRIMARY);
				this.state = 576;
				this.match(ImpalaSqlParser.KW_KEY);
				this.state = 578;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.LPAREN) {
					{
					this.state = 577;
					this.columnAliases();
					}
				}

				}
			}

			this.state = 585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 582;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 583;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 584;
				this.kuduPartitionClause();
				}
			}

			this.state = 589;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_COMMENT) {
				{
				this.state = 587;
				this.match(ImpalaSqlParser.KW_COMMENT);
				this.state = 588;
				this.stringLiteral();
				}
			}

			this.state = 591;
			this.match(ImpalaSqlParser.KW_STORED);
			this.state = 592;
			this.match(ImpalaSqlParser.KW_AS);
			this.state = 593;
			this.match(ImpalaSqlParser.KW_KUDU);
			this.state = 596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_TBLPROPERTIES) {
				{
				this.state = 594;
				this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
				this.state = 595;
				_localctx._tblProp = this.properties();
				}
			}

			this.state = 600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_AS) {
				{
				this.state = 598;
				this.match(ImpalaSqlParser.KW_AS);
				this.state = 599;
				this.queryStatement();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createView(): CreateViewContext {
		let _localctx: CreateViewContext = new CreateViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ImpalaSqlParser.RULE_createView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 602;
			this.match(ImpalaSqlParser.KW_CREATE);
			this.state = 603;
			this.match(ImpalaSqlParser.KW_VIEW);
			this.state = 605;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IF) {
				{
				this.state = 604;
				this.ifNotExists();
				}
			}

			this.state = 607;
			this.viewNameCreate();
			this.state = 609;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.LPAREN) {
				{
				this.state = 608;
				this.viewColumns();
				}
			}

			this.state = 613;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_COMMENT) {
				{
				this.state = 611;
				this.match(ImpalaSqlParser.KW_COMMENT);
				this.state = 612;
				this.stringLiteral();
				}
			}

			this.state = 617;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_TBLPROPERTIES) {
				{
				this.state = 615;
				this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
				this.state = 616;
				_localctx._tblProp = this.properties();
				}
			}

			this.state = 619;
			this.match(ImpalaSqlParser.KW_AS);
			this.state = 620;
			this.queryStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createSchema(): CreateSchemaContext {
		let _localctx: CreateSchemaContext = new CreateSchemaContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ImpalaSqlParser.RULE_createSchema);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 622;
			this.match(ImpalaSqlParser.KW_CREATE);
			this.state = 623;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_DATABASE || _la === ImpalaSqlParser.KW_SCHEMA)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IF) {
				{
				this.state = 624;
				this.ifNotExists();
				}
			}

			this.state = 627;
			this.databaseNameCreate();
			this.state = 630;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 628;
				this.match(ImpalaSqlParser.KW_COMMENT);
				this.state = 629;
				_localctx._comment = this.stringLiteral();
				}
				break;
			}
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_LOCATION) {
				{
				this.state = 632;
				this.match(ImpalaSqlParser.KW_LOCATION);
				this.state = 633;
				_localctx._location = this.stringLiteral();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createRole(): CreateRoleContext {
		let _localctx: CreateRoleContext = new CreateRoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ImpalaSqlParser.RULE_createRole);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			this.match(ImpalaSqlParser.KW_CREATE);
			this.state = 637;
			this.match(ImpalaSqlParser.KW_ROLE);
			this.state = 638;
			_localctx._name = this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createAggregateFunction(): CreateAggregateFunctionContext {
		let _localctx: CreateAggregateFunctionContext = new CreateAggregateFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ImpalaSqlParser.RULE_createAggregateFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 640;
			this.match(ImpalaSqlParser.KW_CREATE);
			this.state = 642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_AGGREGATE) {
				{
				this.state = 641;
				this.match(ImpalaSqlParser.KW_AGGREGATE);
				}
			}

			this.state = 644;
			this.match(ImpalaSqlParser.KW_FUNCTION);
			this.state = 646;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IF) {
				{
				this.state = 645;
				this.ifNotExists();
				}
			}

			this.state = 648;
			this.functionNameCreate();
			this.state = 661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.LPAREN) {
				{
				this.state = 649;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_ARRAY || _la === ImpalaSqlParser.KW_BERNOULLI || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 43)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 43)) | (1 << (ImpalaSqlParser.KW_DAY - 43)) | (1 << (ImpalaSqlParser.KW_DAYS - 43)) | (1 << (ImpalaSqlParser.KW_EXCLUDING - 43)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 43)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (ImpalaSqlParser.KW_HOUR - 91)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 91)) | (1 << (ImpalaSqlParser.KW_KEY - 91)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 91)) | (1 << (ImpalaSqlParser.KW_MAP - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (ImpalaSqlParser.KW_MINUTE - 123)) | (1 << (ImpalaSqlParser.KW_MINUTES - 123)) | (1 << (ImpalaSqlParser.KW_MONTH - 123)) | (1 << (ImpalaSqlParser.KW_MONTHS - 123)) | (1 << (ImpalaSqlParser.KW_NFC - 123)) | (1 << (ImpalaSqlParser.KW_NFD - 123)) | (1 << (ImpalaSqlParser.KW_NFKC - 123)) | (1 << (ImpalaSqlParser.KW_NFKD - 123)) | (1 << (ImpalaSqlParser.KW_OPTION - 123)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 123)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 123)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 123)))) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (ImpalaSqlParser.KW_SECOND - 173)) | (1 << (ImpalaSqlParser.KW_SECONDS - 173)) | (1 << (ImpalaSqlParser.KW_SHUTDOWN - 173)) | (1 << (ImpalaSqlParser.KW_STRUCT - 173)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 173)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 173)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 173)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (ImpalaSqlParser.KW_USER - 206)) | (1 << (ImpalaSqlParser.KW_VIEWS - 206)) | (1 << (ImpalaSqlParser.KW_YEAR - 206)) | (1 << (ImpalaSqlParser.KW_ORC - 206)))) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & ((1 << (ImpalaSqlParser.STRING - 258)) | (1 << (ImpalaSqlParser.IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.TIME_WITH_TIME_ZONE - 258)) | (1 << (ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE - 258)) | (1 << (ImpalaSqlParser.DOUBLE_PRECISION - 258)))) !== 0)) {
					{
					this.state = 650;
					this.type(0);
					this.state = 655;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 651;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 652;
						this.type(0);
						}
						}
						this.state = 657;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 660;
				this.match(ImpalaSqlParser.RPAREN);
				}
			}

			this.state = 663;
			this.match(ImpalaSqlParser.KW_RETURNS);
			this.state = 664;
			this.type(0);
			this.state = 667;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_INTERMEDIATE) {
				{
				this.state = 665;
				this.match(ImpalaSqlParser.KW_INTERMEDIATE);
				this.state = 666;
				this.type(0);
				}
			}

			this.state = 669;
			this.match(ImpalaSqlParser.KW_LOCATION);
			this.state = 670;
			this.match(ImpalaSqlParser.STRING);
			this.state = 674;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_INIT_FN) {
				{
				this.state = 671;
				this.match(ImpalaSqlParser.KW_INIT_FN);
				this.state = 672;
				this.match(ImpalaSqlParser.EQ);
				this.state = 673;
				this.match(ImpalaSqlParser.STRING);
				}
			}

			this.state = 676;
			this.match(ImpalaSqlParser.KW_UPDATE_FN);
			this.state = 677;
			this.match(ImpalaSqlParser.EQ);
			this.state = 678;
			this.match(ImpalaSqlParser.STRING);
			this.state = 679;
			this.match(ImpalaSqlParser.KW_MERGE_FN);
			this.state = 680;
			this.match(ImpalaSqlParser.EQ);
			this.state = 681;
			this.match(ImpalaSqlParser.STRING);
			this.state = 685;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PREPARE_FN) {
				{
				this.state = 682;
				this.match(ImpalaSqlParser.KW_PREPARE_FN);
				this.state = 683;
				this.match(ImpalaSqlParser.EQ);
				this.state = 684;
				this.match(ImpalaSqlParser.STRING);
				}
			}

			this.state = 690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_CLOSEFN) {
				{
				this.state = 687;
				this.match(ImpalaSqlParser.KW_CLOSEFN);
				this.state = 688;
				this.match(ImpalaSqlParser.EQ);
				this.state = 689;
				this.match(ImpalaSqlParser.STRING);
				}
			}

			this.state = 695;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_SERIALIZE_FN) {
				{
				this.state = 692;
				this.match(ImpalaSqlParser.KW_SERIALIZE_FN);
				this.state = 693;
				this.match(ImpalaSqlParser.EQ);
				this.state = 694;
				this.match(ImpalaSqlParser.STRING);
				}
			}

			this.state = 700;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_FINALIZE_FN) {
				{
				this.state = 697;
				this.match(ImpalaSqlParser.KW_FINALIZE_FN);
				this.state = 698;
				this.match(ImpalaSqlParser.EQ);
				this.state = 699;
				this.match(ImpalaSqlParser.STRING);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createFunction(): CreateFunctionContext {
		let _localctx: CreateFunctionContext = new CreateFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ImpalaSqlParser.RULE_createFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 702;
			this.match(ImpalaSqlParser.KW_CREATE);
			this.state = 703;
			this.match(ImpalaSqlParser.KW_FUNCTION);
			this.state = 705;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IF) {
				{
				this.state = 704;
				this.ifNotExists();
				}
			}

			this.state = 707;
			this.functionNameCreate();
			this.state = 720;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.LPAREN) {
				{
				this.state = 708;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 717;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_ARRAY || _la === ImpalaSqlParser.KW_BERNOULLI || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 43)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 43)) | (1 << (ImpalaSqlParser.KW_DAY - 43)) | (1 << (ImpalaSqlParser.KW_DAYS - 43)) | (1 << (ImpalaSqlParser.KW_EXCLUDING - 43)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 43)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (ImpalaSqlParser.KW_HOUR - 91)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 91)) | (1 << (ImpalaSqlParser.KW_KEY - 91)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 91)) | (1 << (ImpalaSqlParser.KW_MAP - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (ImpalaSqlParser.KW_MINUTE - 123)) | (1 << (ImpalaSqlParser.KW_MINUTES - 123)) | (1 << (ImpalaSqlParser.KW_MONTH - 123)) | (1 << (ImpalaSqlParser.KW_MONTHS - 123)) | (1 << (ImpalaSqlParser.KW_NFC - 123)) | (1 << (ImpalaSqlParser.KW_NFD - 123)) | (1 << (ImpalaSqlParser.KW_NFKC - 123)) | (1 << (ImpalaSqlParser.KW_NFKD - 123)) | (1 << (ImpalaSqlParser.KW_OPTION - 123)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 123)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 123)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 123)))) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (ImpalaSqlParser.KW_SECOND - 173)) | (1 << (ImpalaSqlParser.KW_SECONDS - 173)) | (1 << (ImpalaSqlParser.KW_SHUTDOWN - 173)) | (1 << (ImpalaSqlParser.KW_STRUCT - 173)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 173)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 173)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 173)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (ImpalaSqlParser.KW_USER - 206)) | (1 << (ImpalaSqlParser.KW_VIEWS - 206)) | (1 << (ImpalaSqlParser.KW_YEAR - 206)) | (1 << (ImpalaSqlParser.KW_ORC - 206)))) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & ((1 << (ImpalaSqlParser.STRING - 258)) | (1 << (ImpalaSqlParser.IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.TIME_WITH_TIME_ZONE - 258)) | (1 << (ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE - 258)) | (1 << (ImpalaSqlParser.DOUBLE_PRECISION - 258)))) !== 0)) {
					{
					this.state = 709;
					this.type(0);
					this.state = 714;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 710;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 711;
						this.type(0);
						}
						}
						this.state = 716;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 719;
				this.match(ImpalaSqlParser.RPAREN);
				}
			}

			this.state = 724;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_RETURNS) {
				{
				this.state = 722;
				this.match(ImpalaSqlParser.KW_RETURNS);
				this.state = 723;
				this.type(0);
				}
			}

			this.state = 726;
			this.match(ImpalaSqlParser.KW_LOCATION);
			this.state = 727;
			this.match(ImpalaSqlParser.STRING);
			this.state = 728;
			this.match(ImpalaSqlParser.KW_SYMBOL);
			this.state = 729;
			this.match(ImpalaSqlParser.EQ);
			this.state = 730;
			_localctx._symbol = this.stringLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterStatement(): AlterStatementContext {
		let _localctx: AlterStatementContext = new AlterStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ImpalaSqlParser.RULE_alterStatement);
		try {
			this.state = 750;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 732;
				this.alterDatabase();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 733;
				this.alterUnSetOrSetViewTblproperties();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 734;
				this.renameTable();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 735;
				this.alterViewOwner();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 736;
				this.alterView();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 737;
				this.renameView();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 738;
				this.dropPartitionByRangeOrValue();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 739;
				this.alterFormat();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 740;
				this.recoverPartitions();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 741;
				this.addPartitionByRangeOrValue();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 742;
				this.alterTableNonKuduOrKuduOnly();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 743;
				this.addSingleColumn();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 744;
				this.replaceOrAddColumns();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 745;
				this.changeColumnDefine();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 746;
				this.alterStatsKey();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 747;
				this.alterPartitionCache();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 748;
				this.alterDropSingleColumn();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 749;
				this.alterTableOwner();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterDatabase(): AlterDatabaseContext {
		let _localctx: AlterDatabaseContext = new AlterDatabaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ImpalaSqlParser.RULE_alterDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 752;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 753;
			this.match(ImpalaSqlParser.KW_DATABASE);
			this.state = 754;
			this.databaseNamePath();
			this.state = 755;
			this.match(ImpalaSqlParser.KW_SET);
			this.state = 756;
			this.match(ImpalaSqlParser.KW_OWNER);
			this.state = 757;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_ROLE || _la === ImpalaSqlParser.KW_USER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 758;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterStatsKey(): AlterStatsKeyContext {
		let _localctx: AlterStatsKeyContext = new AlterStatsKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ImpalaSqlParser.RULE_alterStatsKey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 760;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 761;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 762;
			this.tableNamePath();
			this.state = 763;
			this.match(ImpalaSqlParser.KW_SET);
			this.state = 764;
			this.match(ImpalaSqlParser.KW_COLUMN);
			this.state = 765;
			this.match(ImpalaSqlParser.KW_STATS);
			this.state = 766;
			this.columnNamePath();
			this.state = 767;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 768;
			this.statsKey();
			this.state = 769;
			this.match(ImpalaSqlParser.EQ);
			this.state = 770;
			this.stringLiteral();
			this.state = 776;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.COMMA) {
				{
				this.state = 771;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 772;
				this.statsKey();
				this.state = 773;
				this.match(ImpalaSqlParser.EQ);
				this.state = 774;
				this.stringLiteral();
				}
			}

			this.state = 778;
			this.match(ImpalaSqlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterPartitionCache(): AlterPartitionCacheContext {
		let _localctx: AlterPartitionCacheContext = new AlterPartitionCacheContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ImpalaSqlParser.RULE_alterPartitionCache);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 780;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 781;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 782;
			this.tableNamePath();
			this.state = 785;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 783;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 784;
				this.expression();
				}
			}

			this.state = 787;
			this.match(ImpalaSqlParser.KW_SET);
			this.state = 798;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_CACHED:
				{
				{
				this.state = 788;
				this.match(ImpalaSqlParser.KW_CACHED);
				this.state = 789;
				this.match(ImpalaSqlParser.KW_IN);
				this.state = 790;
				this.stringLiteral();
				this.state = 795;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 791;
					this.match(ImpalaSqlParser.KW_WITH);
					this.state = 792;
					this.match(ImpalaSqlParser.KW_REPLICATION);
					this.state = 793;
					this.match(ImpalaSqlParser.EQ);
					this.state = 794;
					this.number();
					}
					break;
				}
				}
				}
				break;
			case ImpalaSqlParser.KW_UNCACHED:
				{
				this.state = 797;
				this.match(ImpalaSqlParser.KW_UNCACHED);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public changeColumnDefine(): ChangeColumnDefineContext {
		let _localctx: ChangeColumnDefineContext = new ChangeColumnDefineContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ImpalaSqlParser.RULE_changeColumnDefine);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 800;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 801;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 802;
			this.tableNamePath();
			this.state = 803;
			this.match(ImpalaSqlParser.KW_CHANGE);
			this.state = 804;
			this.match(ImpalaSqlParser.KW_COLUMN);
			this.state = 805;
			this.columnSpecWithKudu();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterDropSingleColumn(): AlterDropSingleColumnContext {
		let _localctx: AlterDropSingleColumnContext = new AlterDropSingleColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ImpalaSqlParser.RULE_alterDropSingleColumn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 807;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 808;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 809;
			this.tableNamePath();
			this.state = 810;
			this.match(ImpalaSqlParser.KW_DROP);
			this.state = 812;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_COLUMN) {
				{
				this.state = 811;
				this.match(ImpalaSqlParser.KW_COLUMN);
				}
			}

			this.state = 814;
			this.columnNamePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterTableOwner(): AlterTableOwnerContext {
		let _localctx: AlterTableOwnerContext = new AlterTableOwnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ImpalaSqlParser.RULE_alterTableOwner);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 816;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 817;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 818;
			this.tableNamePath();
			this.state = 819;
			this.match(ImpalaSqlParser.KW_SET);
			this.state = 820;
			this.match(ImpalaSqlParser.KW_OWNER);
			this.state = 821;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_ROLE || _la === ImpalaSqlParser.KW_USER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 822;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public replaceOrAddColumns(): ReplaceOrAddColumnsContext {
		let _localctx: ReplaceOrAddColumnsContext = new ReplaceOrAddColumnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ImpalaSqlParser.RULE_replaceOrAddColumns);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 824;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 825;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 826;
			this.tableNamePath();
			this.state = 832;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_REPLACE:
				{
				this.state = 827;
				this.match(ImpalaSqlParser.KW_REPLACE);
				}
				break;
			case ImpalaSqlParser.KW_ADD:
				{
				this.state = 828;
				this.match(ImpalaSqlParser.KW_ADD);
				this.state = 830;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_IF) {
					{
					this.state = 829;
					this.ifNotExists();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 834;
			this.match(ImpalaSqlParser.KW_COLUMNS);
			this.state = 835;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 836;
			this.columnSpecWithKudu();
			this.state = 841;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 837;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 838;
					this.columnSpecWithKudu();
					}
					}
				}
				this.state = 843;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
			}
			this.state = 844;
			this.match(ImpalaSqlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addSingleColumn(): AddSingleColumnContext {
		let _localctx: AddSingleColumnContext = new AddSingleColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ImpalaSqlParser.RULE_addSingleColumn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 846;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 847;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 848;
			this.tableNamePath();
			this.state = 849;
			this.match(ImpalaSqlParser.KW_ADD);
			this.state = 850;
			this.match(ImpalaSqlParser.KW_COLUMN);
			this.state = 852;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IF) {
				{
				this.state = 851;
				this.ifNotExists();
				}
			}

			this.state = 854;
			this.createColumnSpecWithKudu();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterTableNonKuduOrKuduOnly(): AlterTableNonKuduOrKuduOnlyContext {
		let _localctx: AlterTableNonKuduOrKuduOnlyContext = new AlterTableNonKuduOrKuduOnlyContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ImpalaSqlParser.RULE_alterTableNonKuduOrKuduOnly);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 856;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 857;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 858;
			this.tableNamePath();
			this.state = 859;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 861;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_COLUMN) {
				{
				this.state = 860;
				this.match(ImpalaSqlParser.KW_COLUMN);
				}
			}

			this.state = 863;
			this.columnNamePath();
			this.state = 872;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_SET:
				{
				this.state = 864;
				this.match(ImpalaSqlParser.KW_SET);
				this.state = 868;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ImpalaSqlParser.KW_BLOCK_SIZE:
				case ImpalaSqlParser.KW_COMPRESSION:
				case ImpalaSqlParser.KW_DEFAULT:
				case ImpalaSqlParser.KW_ENCODING:
					{
					this.state = 865;
					this.kuduStorageAttr();
					}
					break;
				case ImpalaSqlParser.KW_COMMENT:
					{
					this.state = 866;
					this.match(ImpalaSqlParser.KW_COMMENT);
					this.state = 867;
					this.stringLiteral();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case ImpalaSqlParser.KW_DROP:
				{
				this.state = 870;
				this.match(ImpalaSqlParser.KW_DROP);
				this.state = 871;
				this.match(ImpalaSqlParser.KW_DEFAULT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addPartitionByRangeOrValue(): AddPartitionByRangeOrValueContext {
		let _localctx: AddPartitionByRangeOrValueContext = new AddPartitionByRangeOrValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ImpalaSqlParser.RULE_addPartitionByRangeOrValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 874;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 875;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 876;
			this.tableNamePath();
			this.state = 877;
			this.match(ImpalaSqlParser.KW_ADD);
			this.state = 879;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IF) {
				{
				this.state = 878;
				this.ifNotExists();
				}
			}

			this.state = 893;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_PARTITION:
				{
				this.state = 881;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 882;
				this.expression();
				this.state = 885;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_LOCATION) {
					{
					this.state = 883;
					this.match(ImpalaSqlParser.KW_LOCATION);
					this.state = 884;
					this.stringLiteral();
					}
				}

				this.state = 888;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_CACHED || _la === ImpalaSqlParser.KW_UNCACHED) {
					{
					this.state = 887;
					this.cacheSpec();
					}
				}

				}
				break;
			case ImpalaSqlParser.KW_RANGE:
				{
				this.state = 890;
				this.match(ImpalaSqlParser.KW_RANGE);
				this.state = 891;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 892;
				this.kuduPartitionSpec();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterFormat(): AlterFormatContext {
		let _localctx: AlterFormatContext = new AlterFormatContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ImpalaSqlParser.RULE_alterFormat);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 895;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 896;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 897;
			this.tableNamePath();
			this.state = 900;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 898;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 899;
				this.expression();
				}
			}

			this.state = 902;
			this.match(ImpalaSqlParser.KW_SET);
			this.state = 914;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_FILEFORMAT:
				{
				{
				this.state = 903;
				this.match(ImpalaSqlParser.KW_FILEFORMAT);
				this.state = 904;
				this.fileFormat();
				}
				}
				break;
			case ImpalaSqlParser.KW_ROW:
				{
				{
				this.state = 905;
				this.match(ImpalaSqlParser.KW_ROW);
				this.state = 906;
				this.match(ImpalaSqlParser.KW_FORMAT);
				this.state = 907;
				this.rowFormat();
				}
				}
				break;
			case ImpalaSqlParser.KW_LOCATION:
				{
				{
				this.state = 908;
				this.match(ImpalaSqlParser.KW_LOCATION);
				this.state = 909;
				this.stringLiteral();
				}
				}
				break;
			case ImpalaSqlParser.KW_TBLPROPERTIES:
				{
				{
				this.state = 910;
				this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
				this.state = 911;
				_localctx._tblProp = this.properties();
				}
				}
				break;
			case ImpalaSqlParser.KW_SERDEPROPERTIES:
				{
				{
				this.state = 912;
				this.match(ImpalaSqlParser.KW_SERDEPROPERTIES);
				this.state = 913;
				_localctx._tblProp = this.properties();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recoverPartitions(): RecoverPartitionsContext {
		let _localctx: RecoverPartitionsContext = new RecoverPartitionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ImpalaSqlParser.RULE_recoverPartitions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 916;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 917;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 918;
			this.tableNamePath();
			this.state = 919;
			this.match(ImpalaSqlParser.KW_RECOVER);
			this.state = 920;
			this.match(ImpalaSqlParser.KW_PARTITIONS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropPartitionByRangeOrValue(): DropPartitionByRangeOrValueContext {
		let _localctx: DropPartitionByRangeOrValueContext = new DropPartitionByRangeOrValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ImpalaSqlParser.RULE_dropPartitionByRangeOrValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 922;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 923;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 924;
			this.tableNamePath();
			this.state = 925;
			this.match(ImpalaSqlParser.KW_DROP);
			this.state = 927;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IF) {
				{
				this.state = 926;
				this.ifExists();
				}
			}

			this.state = 937;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_PARTITION:
				{
				this.state = 929;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 930;
				this.expression();
				this.state = 932;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_PURGE) {
					{
					this.state = 931;
					this.match(ImpalaSqlParser.KW_PURGE);
					}
				}

				}
				break;
			case ImpalaSqlParser.KW_RANGE:
				{
				this.state = 934;
				this.match(ImpalaSqlParser.KW_RANGE);
				this.state = 935;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 936;
				this.kuduPartitionSpec();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterView(): AlterViewContext {
		let _localctx: AlterViewContext = new AlterViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ImpalaSqlParser.RULE_alterView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 939;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 940;
			this.match(ImpalaSqlParser.KW_VIEW);
			this.state = 941;
			this.viewNamePath();
			this.state = 943;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.LPAREN) {
				{
				this.state = 942;
				this.viewColumns();
				}
			}

			this.state = 945;
			this.match(ImpalaSqlParser.KW_AS);
			this.state = 946;
			this.queryStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public renameView(): RenameViewContext {
		let _localctx: RenameViewContext = new RenameViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ImpalaSqlParser.RULE_renameView);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 948;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 949;
			this.match(ImpalaSqlParser.KW_VIEW);
			this.state = 950;
			this.viewNamePath();
			this.state = 951;
			this.match(ImpalaSqlParser.KW_RENAME);
			this.state = 952;
			this.match(ImpalaSqlParser.KW_TO);
			this.state = 953;
			this.viewNamePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterViewOwner(): AlterViewOwnerContext {
		let _localctx: AlterViewOwnerContext = new AlterViewOwnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ImpalaSqlParser.RULE_alterViewOwner);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 955;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 956;
			this.match(ImpalaSqlParser.KW_VIEW);
			this.state = 957;
			this.viewNamePath();
			this.state = 958;
			this.match(ImpalaSqlParser.KW_SET);
			this.state = 959;
			this.match(ImpalaSqlParser.KW_OWNER);
			this.state = 960;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_ROLE || _la === ImpalaSqlParser.KW_USER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 961;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public renameTable(): RenameTableContext {
		let _localctx: RenameTableContext = new RenameTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ImpalaSqlParser.RULE_renameTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 963;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 964;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 965;
			this.tableNamePath();
			this.state = 966;
			this.match(ImpalaSqlParser.KW_RENAME);
			this.state = 967;
			this.match(ImpalaSqlParser.KW_TO);
			this.state = 968;
			this.tableNamePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterUnSetOrSetViewTblproperties(): AlterUnSetOrSetViewTblpropertiesContext {
		let _localctx: AlterUnSetOrSetViewTblpropertiesContext = new AlterUnSetOrSetViewTblpropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ImpalaSqlParser.RULE_alterUnSetOrSetViewTblproperties);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 970;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 971;
			this.match(ImpalaSqlParser.KW_VIEW);
			this.state = 972;
			this.viewNamePath();
			this.state = 973;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_SET || _la === ImpalaSqlParser.KW_UNSET)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 974;
			this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
			this.state = 975;
			_localctx._tblProp = this.properties();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public truncateTableStatement(): TruncateTableStatementContext {
		let _localctx: TruncateTableStatementContext = new TruncateTableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ImpalaSqlParser.RULE_truncateTableStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 977;
			this.match(ImpalaSqlParser.KW_TRUNCATE);
			this.state = 979;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_TABLE) {
				{
				this.state = 978;
				this.match(ImpalaSqlParser.KW_TABLE);
				}
			}

			this.state = 982;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IF) {
				{
				this.state = 981;
				this.ifExists();
				}
			}

			this.state = 984;
			this.tableNamePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public describeStatement(): DescribeStatementContext {
		let _localctx: DescribeStatementContext = new DescribeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ImpalaSqlParser.RULE_describeStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 986;
			this.match(ImpalaSqlParser.KW_DESCRIBE);
			this.state = 988;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_DATABASE) {
				{
				this.state = 987;
				this.match(ImpalaSqlParser.KW_DATABASE);
				}
			}

			this.state = 991;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_EXTENDED || _la === ImpalaSqlParser.KW_FORMATTED) {
				{
				this.state = 990;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParser.KW_EXTENDED || _la === ImpalaSqlParser.KW_FORMATTED)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 993;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public computeStatement(): ComputeStatementContext {
		let _localctx: ComputeStatementContext = new ComputeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ImpalaSqlParser.RULE_computeStatement);
		try {
			this.state = 997;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 995;
				this.computeStats();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 996;
				this.computeIncrementalStats();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public computeStats(): ComputeStatsContext {
		let _localctx: ComputeStatsContext = new ComputeStatsContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ImpalaSqlParser.RULE_computeStats);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 999;
			this.match(ImpalaSqlParser.KW_COMPUTE);
			this.state = 1000;
			this.match(ImpalaSqlParser.KW_STATS);
			this.state = 1001;
			this.tableNamePath();
			this.state = 1003;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				{
				this.state = 1002;
				this.columnAliases();
				}
				break;
			}
			this.state = 1017;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_TABLESAMPLE) {
				{
				this.state = 1005;
				this.match(ImpalaSqlParser.KW_TABLESAMPLE);
				this.state = 1006;
				this.match(ImpalaSqlParser.KW_SYSTEM);
				this.state = 1007;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1008;
				this.number();
				this.state = 1009;
				this.match(ImpalaSqlParser.RPAREN);
				this.state = 1015;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_REPEATABLE) {
					{
					this.state = 1010;
					this.match(ImpalaSqlParser.KW_REPEATABLE);
					this.state = 1011;
					this.match(ImpalaSqlParser.LPAREN);
					this.state = 1012;
					this.number();
					this.state = 1013;
					this.match(ImpalaSqlParser.RPAREN);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public computeIncrementalStats(): ComputeIncrementalStatsContext {
		let _localctx: ComputeIncrementalStatsContext = new ComputeIncrementalStatsContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ImpalaSqlParser.RULE_computeIncrementalStats);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1019;
			this.match(ImpalaSqlParser.KW_COMPUTE);
			this.state = 1020;
			this.match(ImpalaSqlParser.KW_INCREMENTAL);
			this.state = 1021;
			this.match(ImpalaSqlParser.KW_STATS);
			this.state = 1022;
			this.tableNamePath();
			this.state = 1025;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 1023;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 1024;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropStatement(): DropStatementContext {
		let _localctx: DropStatementContext = new DropStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ImpalaSqlParser.RULE_dropStatement);
		try {
			this.state = 1033;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1027;
				this.dropRole();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1028;
				this.dropFunction();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1029;
				this.dropIncrementalStats();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1030;
				this.dropView();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1031;
				this.dropTable();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1032;
				this.dropSchema();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropSchema(): DropSchemaContext {
		let _localctx: DropSchemaContext = new DropSchemaContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ImpalaSqlParser.RULE_dropSchema);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1035;
			this.match(ImpalaSqlParser.KW_DROP);
			this.state = 1036;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_DATABASE || _la === ImpalaSqlParser.KW_SCHEMA)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1038;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IF) {
				{
				this.state = 1037;
				this.ifExists();
				}
			}

			this.state = 1040;
			this.databaseNamePath();
			this.state = 1042;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_CASCADE || _la === ImpalaSqlParser.KW_RESTRICT) {
				{
				this.state = 1041;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParser.KW_CASCADE || _la === ImpalaSqlParser.KW_RESTRICT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropView(): DropViewContext {
		let _localctx: DropViewContext = new DropViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ImpalaSqlParser.RULE_dropView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1044;
			this.match(ImpalaSqlParser.KW_DROP);
			this.state = 1045;
			this.match(ImpalaSqlParser.KW_VIEW);
			this.state = 1047;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IF) {
				{
				this.state = 1046;
				this.ifExists();
				}
			}

			this.state = 1049;
			this.viewNamePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropTable(): DropTableContext {
		let _localctx: DropTableContext = new DropTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ImpalaSqlParser.RULE_dropTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1051;
			this.match(ImpalaSqlParser.KW_DROP);
			this.state = 1052;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 1054;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IF) {
				{
				this.state = 1053;
				this.ifExists();
				}
			}

			this.state = 1056;
			this.tableNamePath();
			this.state = 1058;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PURGE) {
				{
				this.state = 1057;
				this.match(ImpalaSqlParser.KW_PURGE);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropIncrementalStats(): DropIncrementalStatsContext {
		let _localctx: DropIncrementalStatsContext = new DropIncrementalStatsContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, ImpalaSqlParser.RULE_dropIncrementalStats);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1060;
			this.match(ImpalaSqlParser.KW_DROP);
			this.state = 1062;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_INCREMENTAL) {
				{
				this.state = 1061;
				this.match(ImpalaSqlParser.KW_INCREMENTAL);
				}
			}

			this.state = 1064;
			this.match(ImpalaSqlParser.KW_STATS);
			this.state = 1065;
			this.tableNamePath();
			this.state = 1068;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 1066;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 1067;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropFunction(): DropFunctionContext {
		let _localctx: DropFunctionContext = new DropFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, ImpalaSqlParser.RULE_dropFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1070;
			this.match(ImpalaSqlParser.KW_DROP);
			this.state = 1072;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_AGGREGATE) {
				{
				this.state = 1071;
				this.match(ImpalaSqlParser.KW_AGGREGATE);
				}
			}

			this.state = 1074;
			this.match(ImpalaSqlParser.KW_FUNCTION);
			this.state = 1076;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IF) {
				{
				this.state = 1075;
				this.ifExists();
				}
			}

			this.state = 1078;
			this.functionNamePath();
			this.state = 1091;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				{
				this.state = 1079;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1088;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_ARRAY || _la === ImpalaSqlParser.KW_BERNOULLI || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 43)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 43)) | (1 << (ImpalaSqlParser.KW_DAY - 43)) | (1 << (ImpalaSqlParser.KW_DAYS - 43)) | (1 << (ImpalaSqlParser.KW_EXCLUDING - 43)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 43)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (ImpalaSqlParser.KW_HOUR - 91)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 91)) | (1 << (ImpalaSqlParser.KW_KEY - 91)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 91)) | (1 << (ImpalaSqlParser.KW_MAP - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (ImpalaSqlParser.KW_MINUTE - 123)) | (1 << (ImpalaSqlParser.KW_MINUTES - 123)) | (1 << (ImpalaSqlParser.KW_MONTH - 123)) | (1 << (ImpalaSqlParser.KW_MONTHS - 123)) | (1 << (ImpalaSqlParser.KW_NFC - 123)) | (1 << (ImpalaSqlParser.KW_NFD - 123)) | (1 << (ImpalaSqlParser.KW_NFKC - 123)) | (1 << (ImpalaSqlParser.KW_NFKD - 123)) | (1 << (ImpalaSqlParser.KW_OPTION - 123)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 123)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 123)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 123)))) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (ImpalaSqlParser.KW_SECOND - 173)) | (1 << (ImpalaSqlParser.KW_SECONDS - 173)) | (1 << (ImpalaSqlParser.KW_SHUTDOWN - 173)) | (1 << (ImpalaSqlParser.KW_STRUCT - 173)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 173)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 173)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 173)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (ImpalaSqlParser.KW_USER - 206)) | (1 << (ImpalaSqlParser.KW_VIEWS - 206)) | (1 << (ImpalaSqlParser.KW_YEAR - 206)) | (1 << (ImpalaSqlParser.KW_ORC - 206)))) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & ((1 << (ImpalaSqlParser.STRING - 258)) | (1 << (ImpalaSqlParser.IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.TIME_WITH_TIME_ZONE - 258)) | (1 << (ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE - 258)) | (1 << (ImpalaSqlParser.DOUBLE_PRECISION - 258)))) !== 0)) {
					{
					this.state = 1080;
					this.type(0);
					this.state = 1085;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 1081;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 1082;
						this.type(0);
						}
						}
						this.state = 1087;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1090;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropRole(): DropRoleContext {
		let _localctx: DropRoleContext = new DropRoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, ImpalaSqlParser.RULE_dropRole);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1093;
			this.match(ImpalaSqlParser.KW_DROP);
			this.state = 1094;
			this.match(ImpalaSqlParser.KW_ROLE);
			this.state = 1095;
			_localctx._name = this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public grantStatement(): GrantStatementContext {
		let _localctx: GrantStatementContext = new GrantStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, ImpalaSqlParser.RULE_grantStatement);
		try {
			this.state = 1099;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1097;
				this.grantRole();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1098;
				this.grant();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public grantRole(): GrantRoleContext {
		let _localctx: GrantRoleContext = new GrantRoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, ImpalaSqlParser.RULE_grantRole);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1101;
			this.match(ImpalaSqlParser.KW_GRANT);
			this.state = 1102;
			this.match(ImpalaSqlParser.KW_ROLE);
			this.state = 1103;
			this.identifier();
			this.state = 1104;
			this.match(ImpalaSqlParser.KW_TO);
			this.state = 1105;
			this.match(ImpalaSqlParser.KW_GROUP);
			this.state = 1106;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public grant(): GrantContext {
		let _localctx: GrantContext = new GrantContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, ImpalaSqlParser.RULE_grant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1108;
			this.match(ImpalaSqlParser.KW_GRANT);
			this.state = 1109;
			this.privilege();
			this.state = 1110;
			this.match(ImpalaSqlParser.KW_ON);
			this.state = 1111;
			this.objectType();
			this.state = 1113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_BERNOULLI || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 43)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 43)) | (1 << (ImpalaSqlParser.KW_DAY - 43)) | (1 << (ImpalaSqlParser.KW_DAYS - 43)) | (1 << (ImpalaSqlParser.KW_EXCLUDING - 43)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 43)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (ImpalaSqlParser.KW_HOUR - 91)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 91)) | (1 << (ImpalaSqlParser.KW_KEY - 91)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (ImpalaSqlParser.KW_MINUTE - 123)) | (1 << (ImpalaSqlParser.KW_MINUTES - 123)) | (1 << (ImpalaSqlParser.KW_MONTH - 123)) | (1 << (ImpalaSqlParser.KW_MONTHS - 123)) | (1 << (ImpalaSqlParser.KW_NFC - 123)) | (1 << (ImpalaSqlParser.KW_NFD - 123)) | (1 << (ImpalaSqlParser.KW_NFKC - 123)) | (1 << (ImpalaSqlParser.KW_NFKD - 123)) | (1 << (ImpalaSqlParser.KW_OPTION - 123)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 123)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 123)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 123)))) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (ImpalaSqlParser.KW_SECOND - 173)) | (1 << (ImpalaSqlParser.KW_SECONDS - 173)) | (1 << (ImpalaSqlParser.KW_SHUTDOWN - 173)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 173)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 173)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 173)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (ImpalaSqlParser.KW_USER - 206)) | (1 << (ImpalaSqlParser.KW_VIEWS - 206)) | (1 << (ImpalaSqlParser.KW_YEAR - 206)) | (1 << (ImpalaSqlParser.KW_ORC - 206)))) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & ((1 << (ImpalaSqlParser.STRING - 258)) | (1 << (ImpalaSqlParser.IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 258)))) !== 0)) {
				{
				this.state = 1112;
				this.qualifiedName();
				}
			}

			this.state = 1115;
			this.match(ImpalaSqlParser.KW_TO);
			this.state = 1116;
			_localctx._grantee = this.principal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public revokeStatement(): RevokeStatementContext {
		let _localctx: RevokeStatementContext = new RevokeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, ImpalaSqlParser.RULE_revokeStatement);
		try {
			this.state = 1120;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1118;
				this.revokeRole();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1119;
				this.revoke();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public revokeRole(): RevokeRoleContext {
		let _localctx: RevokeRoleContext = new RevokeRoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, ImpalaSqlParser.RULE_revokeRole);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1122;
			this.match(ImpalaSqlParser.KW_REVOKE);
			this.state = 1123;
			this.match(ImpalaSqlParser.KW_ROLE);
			this.state = 1124;
			this.identifier();
			this.state = 1125;
			this.match(ImpalaSqlParser.KW_FROM);
			this.state = 1126;
			this.match(ImpalaSqlParser.KW_GROUP);
			this.state = 1127;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public revoke(): RevokeContext {
		let _localctx: RevokeContext = new RevokeContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, ImpalaSqlParser.RULE_revoke);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1129;
			this.match(ImpalaSqlParser.KW_REVOKE);
			this.state = 1133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_GRANT) {
				{
				this.state = 1130;
				this.match(ImpalaSqlParser.KW_GRANT);
				this.state = 1131;
				this.match(ImpalaSqlParser.KW_OPTION);
				this.state = 1132;
				this.match(ImpalaSqlParser.KW_FOR);
				}
			}

			this.state = 1135;
			this.privilege();
			this.state = 1136;
			this.match(ImpalaSqlParser.KW_ON);
			this.state = 1137;
			this.objectType();
			this.state = 1139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_BERNOULLI || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 43)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 43)) | (1 << (ImpalaSqlParser.KW_DAY - 43)) | (1 << (ImpalaSqlParser.KW_DAYS - 43)) | (1 << (ImpalaSqlParser.KW_EXCLUDING - 43)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 43)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (ImpalaSqlParser.KW_HOUR - 91)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 91)) | (1 << (ImpalaSqlParser.KW_KEY - 91)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (ImpalaSqlParser.KW_MINUTE - 123)) | (1 << (ImpalaSqlParser.KW_MINUTES - 123)) | (1 << (ImpalaSqlParser.KW_MONTH - 123)) | (1 << (ImpalaSqlParser.KW_MONTHS - 123)) | (1 << (ImpalaSqlParser.KW_NFC - 123)) | (1 << (ImpalaSqlParser.KW_NFD - 123)) | (1 << (ImpalaSqlParser.KW_NFKC - 123)) | (1 << (ImpalaSqlParser.KW_NFKD - 123)) | (1 << (ImpalaSqlParser.KW_OPTION - 123)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 123)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 123)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 123)))) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (ImpalaSqlParser.KW_SECOND - 173)) | (1 << (ImpalaSqlParser.KW_SECONDS - 173)) | (1 << (ImpalaSqlParser.KW_SHUTDOWN - 173)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 173)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 173)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 173)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (ImpalaSqlParser.KW_USER - 206)) | (1 << (ImpalaSqlParser.KW_VIEWS - 206)) | (1 << (ImpalaSqlParser.KW_YEAR - 206)) | (1 << (ImpalaSqlParser.KW_ORC - 206)))) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & ((1 << (ImpalaSqlParser.STRING - 258)) | (1 << (ImpalaSqlParser.IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 258)))) !== 0)) {
				{
				this.state = 1138;
				this.qualifiedName();
				}
			}

			this.state = 1141;
			this.match(ImpalaSqlParser.KW_FROM);
			this.state = 1147;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				{
				this.state = 1142;
				_localctx._grantee = this.principal();
				}
				break;

			case 2:
				{
				this.state = 1144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_ROLE) {
					{
					this.state = 1143;
					this.match(ImpalaSqlParser.KW_ROLE);
					}
				}

				this.state = 1146;
				this.identifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insertStatement(): InsertStatementContext {
		let _localctx: InsertStatementContext = new InsertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, ImpalaSqlParser.RULE_insertStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_WITH) {
				{
				this.state = 1149;
				this.with();
				}
			}

			this.state = 1152;
			this.match(ImpalaSqlParser.KW_INSERT);
			this.state = 1153;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_INTO || _la === ImpalaSqlParser.KW_OVERWRITE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_TABLE) {
				{
				this.state = 1154;
				this.match(ImpalaSqlParser.KW_TABLE);
				}
			}

			this.state = 1157;
			this.tableNamePath();
			this.state = 1159;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				{
				this.state = 1158;
				this.columnAliases();
				}
				break;
			}
			this.state = 1173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 1161;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 1162;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1163;
				this.expression();
				this.state = 1168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 1164;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1165;
					this.expression();
					}
					}
					this.state = 1170;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1171;
				this.match(ImpalaSqlParser.RPAREN);
				}
			}

			this.state = 1175;
			this.queryStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public deleteStatement(): DeleteStatementContext {
		let _localctx: DeleteStatementContext = new DeleteStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, ImpalaSqlParser.RULE_deleteStatement);
		try {
			this.state = 1179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1177;
				this.delete();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1178;
				this.deleteTableRef();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public delete(): DeleteContext {
		let _localctx: DeleteContext = new DeleteContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, ImpalaSqlParser.RULE_delete);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1181;
			this.match(ImpalaSqlParser.KW_DELETE);
			this.state = 1183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_FROM) {
				{
				this.state = 1182;
				this.match(ImpalaSqlParser.KW_FROM);
				}
			}

			this.state = 1185;
			this.tableNamePath();
			this.state = 1188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_WHERE) {
				{
				this.state = 1186;
				this.match(ImpalaSqlParser.KW_WHERE);
				this.state = 1187;
				this.booleanExpression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public deleteTableRef(): DeleteTableRefContext {
		let _localctx: DeleteTableRefContext = new DeleteTableRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, ImpalaSqlParser.RULE_deleteTableRef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1190;
			this.match(ImpalaSqlParser.KW_DELETE);
			this.state = 1191;
			this.tableNamePath();
			this.state = 1196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_AS || _la === ImpalaSqlParser.KW_BERNOULLI || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 43)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 43)) | (1 << (ImpalaSqlParser.KW_DAY - 43)) | (1 << (ImpalaSqlParser.KW_DAYS - 43)) | (1 << (ImpalaSqlParser.KW_EXCLUDING - 43)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 43)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (ImpalaSqlParser.KW_HOUR - 91)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 91)) | (1 << (ImpalaSqlParser.KW_KEY - 91)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (ImpalaSqlParser.KW_MINUTE - 123)) | (1 << (ImpalaSqlParser.KW_MINUTES - 123)) | (1 << (ImpalaSqlParser.KW_MONTH - 123)) | (1 << (ImpalaSqlParser.KW_MONTHS - 123)) | (1 << (ImpalaSqlParser.KW_NFC - 123)) | (1 << (ImpalaSqlParser.KW_NFD - 123)) | (1 << (ImpalaSqlParser.KW_NFKC - 123)) | (1 << (ImpalaSqlParser.KW_NFKD - 123)) | (1 << (ImpalaSqlParser.KW_OPTION - 123)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 123)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 123)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 123)))) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (ImpalaSqlParser.KW_SECOND - 173)) | (1 << (ImpalaSqlParser.KW_SECONDS - 173)) | (1 << (ImpalaSqlParser.KW_SHUTDOWN - 173)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 173)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 173)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 173)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (ImpalaSqlParser.KW_USER - 206)) | (1 << (ImpalaSqlParser.KW_VIEWS - 206)) | (1 << (ImpalaSqlParser.KW_YEAR - 206)) | (1 << (ImpalaSqlParser.KW_ORC - 206)))) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & ((1 << (ImpalaSqlParser.STRING - 258)) | (1 << (ImpalaSqlParser.IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 258)))) !== 0)) {
				{
				this.state = 1193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_AS) {
					{
					this.state = 1192;
					this.match(ImpalaSqlParser.KW_AS);
					}
				}

				this.state = 1195;
				this.identifier();
				}
			}

			this.state = 1198;
			this.match(ImpalaSqlParser.KW_FROM);
			this.state = 1207;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				{
				this.state = 1199;
				this.relation(0);
				this.state = 1204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 1200;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1201;
					this.relation(0);
					}
					}
					this.state = 1206;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 1211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_WHERE) {
				{
				this.state = 1209;
				this.match(ImpalaSqlParser.KW_WHERE);
				this.state = 1210;
				this.booleanExpression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public updateStatement(): UpdateStatementContext {
		let _localctx: UpdateStatementContext = new UpdateStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, ImpalaSqlParser.RULE_updateStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1213;
			this.match(ImpalaSqlParser.KW_UPDATE);
			this.state = 1214;
			this.tableNamePath();
			this.state = 1215;
			this.match(ImpalaSqlParser.KW_SET);
			this.state = 1216;
			this.assignmentList();
			this.state = 1226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_FROM) {
				{
				this.state = 1217;
				this.match(ImpalaSqlParser.KW_FROM);
				this.state = 1218;
				this.relation(0);
				this.state = 1223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 1219;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1220;
					this.relation(0);
					}
					}
					this.state = 1225;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_WHERE) {
				{
				this.state = 1228;
				this.match(ImpalaSqlParser.KW_WHERE);
				this.state = 1229;
				this.booleanExpression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public upsertStatement(): UpsertStatementContext {
		let _localctx: UpsertStatementContext = new UpsertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, ImpalaSqlParser.RULE_upsertStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1232;
			this.match(ImpalaSqlParser.KW_UPSERT);
			this.state = 1233;
			this.match(ImpalaSqlParser.KW_INTO);
			this.state = 1235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_TABLE) {
				{
				this.state = 1234;
				this.match(ImpalaSqlParser.KW_TABLE);
				}
			}

			this.state = 1237;
			this.tableNamePath();
			this.state = 1239;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				{
				this.state = 1238;
				this.columnAliases();
				}
				break;
			}
			this.state = 1241;
			this.queryStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showStatement(): ShowStatementContext {
		let _localctx: ShowStatementContext = new ShowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, ImpalaSqlParser.RULE_showStatement);
		try {
			this.state = 1255;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1243;
				this.showRoles();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1244;
				this.showRoleGrant();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1245;
				this.showGrants();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1246;
				this.showFiles();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1247;
				this.showPartitions();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1248;
				this.showColumnStats();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1249;
				this.showTableStats();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1250;
				this.showCreateView();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1251;
				this.showCreateTable();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1252;
				this.showFunctions();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1253;
				this.showTables();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1254;
				this.showSchemas();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showSchemas(): ShowSchemasContext {
		let _localctx: ShowSchemasContext = new ShowSchemasContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, ImpalaSqlParser.RULE_showSchemas);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1257;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1258;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_DATABASES || _la === ImpalaSqlParser.KW_SCHEMAS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_LIKE || _la === ImpalaSqlParser.STRING || _la === ImpalaSqlParser.UNICODE_STRING) {
				{
				this.state = 1260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_LIKE) {
					{
					this.state = 1259;
					this.match(ImpalaSqlParser.KW_LIKE);
					}
				}

				this.state = 1262;
				_localctx._pattern = this.stringLiteral();
				this.state = 1267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.BITWISEOR) {
					{
					{
					this.state = 1263;
					this.match(ImpalaSqlParser.BITWISEOR);
					this.state = 1264;
					this.stringLiteral();
					}
					}
					this.state = 1269;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showTables(): ShowTablesContext {
		let _localctx: ShowTablesContext = new ShowTablesContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, ImpalaSqlParser.RULE_showTables);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1272;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1273;
			this.match(ImpalaSqlParser.KW_TABLES);
			this.state = 1276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IN) {
				{
				this.state = 1274;
				this.match(ImpalaSqlParser.KW_IN);
				this.state = 1275;
				this.tableNamePath();
				}
			}

			this.state = 1289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_LIKE || _la === ImpalaSqlParser.STRING || _la === ImpalaSqlParser.UNICODE_STRING) {
				{
				this.state = 1279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_LIKE) {
					{
					this.state = 1278;
					this.match(ImpalaSqlParser.KW_LIKE);
					}
				}

				this.state = 1281;
				_localctx._pattern = this.stringLiteral();
				this.state = 1286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.BITWISEOR) {
					{
					{
					this.state = 1282;
					this.match(ImpalaSqlParser.BITWISEOR);
					this.state = 1283;
					this.stringLiteral();
					}
					}
					this.state = 1288;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showFunctions(): ShowFunctionsContext {
		let _localctx: ShowFunctionsContext = new ShowFunctionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, ImpalaSqlParser.RULE_showFunctions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1291;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_ANALYTIC || _la === ImpalaSqlParser.KW_AGGREGATE) {
				{
				this.state = 1292;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParser.KW_ANALYTIC || _la === ImpalaSqlParser.KW_AGGREGATE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 1295;
			this.match(ImpalaSqlParser.KW_FUNCTIONS);
			this.state = 1298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IN) {
				{
				this.state = 1296;
				this.match(ImpalaSqlParser.KW_IN);
				this.state = 1297;
				this.databaseNamePath();
				}
			}

			this.state = 1311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_LIKE || _la === ImpalaSqlParser.STRING || _la === ImpalaSqlParser.UNICODE_STRING) {
				{
				this.state = 1301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_LIKE) {
					{
					this.state = 1300;
					this.match(ImpalaSqlParser.KW_LIKE);
					}
				}

				this.state = 1303;
				_localctx._pattern = this.stringLiteral();
				this.state = 1308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.BITWISEOR) {
					{
					{
					this.state = 1304;
					this.match(ImpalaSqlParser.BITWISEOR);
					this.state = 1305;
					this.stringLiteral();
					}
					}
					this.state = 1310;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showCreateTable(): ShowCreateTableContext {
		let _localctx: ShowCreateTableContext = new ShowCreateTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, ImpalaSqlParser.RULE_showCreateTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1313;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1314;
			this.match(ImpalaSqlParser.KW_CREATE);
			this.state = 1315;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 1316;
			this.tableNamePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showCreateView(): ShowCreateViewContext {
		let _localctx: ShowCreateViewContext = new ShowCreateViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, ImpalaSqlParser.RULE_showCreateView);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1318;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1319;
			this.match(ImpalaSqlParser.KW_CREATE);
			this.state = 1320;
			this.match(ImpalaSqlParser.KW_VIEW);
			this.state = 1321;
			this.viewNamePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showTableStats(): ShowTableStatsContext {
		let _localctx: ShowTableStatsContext = new ShowTableStatsContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, ImpalaSqlParser.RULE_showTableStats);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1323;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1324;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 1325;
			this.match(ImpalaSqlParser.KW_STATS);
			this.state = 1326;
			this.tableNamePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showColumnStats(): ShowColumnStatsContext {
		let _localctx: ShowColumnStatsContext = new ShowColumnStatsContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, ImpalaSqlParser.RULE_showColumnStats);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1328;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1329;
			this.match(ImpalaSqlParser.KW_COLUMN);
			this.state = 1330;
			this.match(ImpalaSqlParser.KW_STATS);
			this.state = 1331;
			this.tableNamePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showPartitions(): ShowPartitionsContext {
		let _localctx: ShowPartitionsContext = new ShowPartitionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, ImpalaSqlParser.RULE_showPartitions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1333;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_RANGE) {
				{
				this.state = 1334;
				this.match(ImpalaSqlParser.KW_RANGE);
				}
			}

			this.state = 1337;
			this.match(ImpalaSqlParser.KW_PARTITIONS);
			this.state = 1338;
			this.tableNamePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showFiles(): ShowFilesContext {
		let _localctx: ShowFilesContext = new ShowFilesContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, ImpalaSqlParser.RULE_showFiles);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1340;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1341;
			this.match(ImpalaSqlParser.KW_FILES);
			this.state = 1342;
			this.match(ImpalaSqlParser.KW_IN);
			this.state = 1343;
			this.tableNamePath();
			this.state = 1353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 1344;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 1345;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1346;
				this.expression();
				this.state = 1349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.COMMA) {
					{
					this.state = 1347;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1348;
					this.expression();
					}
				}

				this.state = 1351;
				this.match(ImpalaSqlParser.RPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showRoles(): ShowRolesContext {
		let _localctx: ShowRolesContext = new ShowRolesContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, ImpalaSqlParser.RULE_showRoles);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1355;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_CURRENT) {
				{
				this.state = 1356;
				this.match(ImpalaSqlParser.KW_CURRENT);
				}
			}

			this.state = 1359;
			this.match(ImpalaSqlParser.KW_ROLES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showRoleGrant(): ShowRoleGrantContext {
		let _localctx: ShowRoleGrantContext = new ShowRoleGrantContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, ImpalaSqlParser.RULE_showRoleGrant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1361;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1362;
			this.match(ImpalaSqlParser.KW_ROLE);
			this.state = 1363;
			this.match(ImpalaSqlParser.KW_GRANT);
			this.state = 1364;
			this.match(ImpalaSqlParser.KW_GROUP);
			this.state = 1365;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showGrants(): ShowGrantsContext {
		let _localctx: ShowGrantsContext = new ShowGrantsContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, ImpalaSqlParser.RULE_showGrants);
		let _la: number;
		try {
			this.state = 1381;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1367;
				this.showDatabaseGrant();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1368;
				this.showTableGrant();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1369;
				this.showColumnGrant();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1370;
				this.match(ImpalaSqlParser.KW_SHOW);
				this.state = 1371;
				this.match(ImpalaSqlParser.KW_GRANT);
				this.state = 1372;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParser.KW_GROUP || _la === ImpalaSqlParser.KW_ROLE || _la === ImpalaSqlParser.KW_USER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1373;
				this.identifier();
				this.state = 1379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_ON) {
					{
					this.state = 1374;
					this.match(ImpalaSqlParser.KW_ON);
					this.state = 1375;
					_la = this._input.LA(1);
					if (!(_la === ImpalaSqlParser.KW_SERVER || _la === ImpalaSqlParser.KW_URI)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1377;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ImpalaSqlParser.KW_BERNOULLI || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 43)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 43)) | (1 << (ImpalaSqlParser.KW_DAY - 43)) | (1 << (ImpalaSqlParser.KW_DAYS - 43)) | (1 << (ImpalaSqlParser.KW_EXCLUDING - 43)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 43)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (ImpalaSqlParser.KW_HOUR - 91)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 91)) | (1 << (ImpalaSqlParser.KW_KEY - 91)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (ImpalaSqlParser.KW_MINUTE - 123)) | (1 << (ImpalaSqlParser.KW_MINUTES - 123)) | (1 << (ImpalaSqlParser.KW_MONTH - 123)) | (1 << (ImpalaSqlParser.KW_MONTHS - 123)) | (1 << (ImpalaSqlParser.KW_NFC - 123)) | (1 << (ImpalaSqlParser.KW_NFD - 123)) | (1 << (ImpalaSqlParser.KW_NFKC - 123)) | (1 << (ImpalaSqlParser.KW_NFKD - 123)) | (1 << (ImpalaSqlParser.KW_OPTION - 123)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 123)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 123)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 123)))) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (ImpalaSqlParser.KW_SECOND - 173)) | (1 << (ImpalaSqlParser.KW_SECONDS - 173)) | (1 << (ImpalaSqlParser.KW_SHUTDOWN - 173)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 173)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 173)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 173)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (ImpalaSqlParser.KW_USER - 206)) | (1 << (ImpalaSqlParser.KW_VIEWS - 206)) | (1 << (ImpalaSqlParser.KW_YEAR - 206)) | (1 << (ImpalaSqlParser.KW_ORC - 206)))) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & ((1 << (ImpalaSqlParser.STRING - 258)) | (1 << (ImpalaSqlParser.IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 258)))) !== 0)) {
						{
						this.state = 1376;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showDatabaseGrant(): ShowDatabaseGrantContext {
		let _localctx: ShowDatabaseGrantContext = new ShowDatabaseGrantContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, ImpalaSqlParser.RULE_showDatabaseGrant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1383;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1384;
			this.match(ImpalaSqlParser.KW_GRANT);
			this.state = 1385;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_GROUP || _la === ImpalaSqlParser.KW_ROLE || _la === ImpalaSqlParser.KW_USER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1386;
			this.identifier();
			this.state = 1392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_ON) {
				{
				this.state = 1387;
				this.match(ImpalaSqlParser.KW_ON);
				this.state = 1388;
				this.match(ImpalaSqlParser.KW_DATABASE);
				this.state = 1390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_BERNOULLI || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 43)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 43)) | (1 << (ImpalaSqlParser.KW_DAY - 43)) | (1 << (ImpalaSqlParser.KW_DAYS - 43)) | (1 << (ImpalaSqlParser.KW_EXCLUDING - 43)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 43)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (ImpalaSqlParser.KW_HOUR - 91)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 91)) | (1 << (ImpalaSqlParser.KW_KEY - 91)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (ImpalaSqlParser.KW_MINUTE - 123)) | (1 << (ImpalaSqlParser.KW_MINUTES - 123)) | (1 << (ImpalaSqlParser.KW_MONTH - 123)) | (1 << (ImpalaSqlParser.KW_MONTHS - 123)) | (1 << (ImpalaSqlParser.KW_NFC - 123)) | (1 << (ImpalaSqlParser.KW_NFD - 123)) | (1 << (ImpalaSqlParser.KW_NFKC - 123)) | (1 << (ImpalaSqlParser.KW_NFKD - 123)) | (1 << (ImpalaSqlParser.KW_OPTION - 123)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 123)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 123)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 123)))) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (ImpalaSqlParser.KW_SECOND - 173)) | (1 << (ImpalaSqlParser.KW_SECONDS - 173)) | (1 << (ImpalaSqlParser.KW_SHUTDOWN - 173)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 173)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 173)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 173)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (ImpalaSqlParser.KW_USER - 206)) | (1 << (ImpalaSqlParser.KW_VIEWS - 206)) | (1 << (ImpalaSqlParser.KW_YEAR - 206)) | (1 << (ImpalaSqlParser.KW_ORC - 206)))) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & ((1 << (ImpalaSqlParser.STRING - 258)) | (1 << (ImpalaSqlParser.IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 258)))) !== 0)) {
					{
					this.state = 1389;
					this.databaseNamePath();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showTableGrant(): ShowTableGrantContext {
		let _localctx: ShowTableGrantContext = new ShowTableGrantContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, ImpalaSqlParser.RULE_showTableGrant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1394;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1395;
			this.match(ImpalaSqlParser.KW_GRANT);
			this.state = 1396;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_GROUP || _la === ImpalaSqlParser.KW_ROLE || _la === ImpalaSqlParser.KW_USER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1397;
			this.identifier();
			this.state = 1403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_ON) {
				{
				this.state = 1398;
				this.match(ImpalaSqlParser.KW_ON);
				this.state = 1399;
				this.match(ImpalaSqlParser.KW_TABLE);
				this.state = 1401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_BERNOULLI || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 43)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 43)) | (1 << (ImpalaSqlParser.KW_DAY - 43)) | (1 << (ImpalaSqlParser.KW_DAYS - 43)) | (1 << (ImpalaSqlParser.KW_EXCLUDING - 43)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 43)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (ImpalaSqlParser.KW_HOUR - 91)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 91)) | (1 << (ImpalaSqlParser.KW_KEY - 91)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (ImpalaSqlParser.KW_MINUTE - 123)) | (1 << (ImpalaSqlParser.KW_MINUTES - 123)) | (1 << (ImpalaSqlParser.KW_MONTH - 123)) | (1 << (ImpalaSqlParser.KW_MONTHS - 123)) | (1 << (ImpalaSqlParser.KW_NFC - 123)) | (1 << (ImpalaSqlParser.KW_NFD - 123)) | (1 << (ImpalaSqlParser.KW_NFKC - 123)) | (1 << (ImpalaSqlParser.KW_NFKD - 123)) | (1 << (ImpalaSqlParser.KW_OPTION - 123)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 123)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 123)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 123)))) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (ImpalaSqlParser.KW_SECOND - 173)) | (1 << (ImpalaSqlParser.KW_SECONDS - 173)) | (1 << (ImpalaSqlParser.KW_SHUTDOWN - 173)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 173)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 173)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 173)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (ImpalaSqlParser.KW_USER - 206)) | (1 << (ImpalaSqlParser.KW_VIEWS - 206)) | (1 << (ImpalaSqlParser.KW_YEAR - 206)) | (1 << (ImpalaSqlParser.KW_ORC - 206)))) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & ((1 << (ImpalaSqlParser.STRING - 258)) | (1 << (ImpalaSqlParser.IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 258)))) !== 0)) {
					{
					this.state = 1400;
					this.tableNamePath();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public showColumnGrant(): ShowColumnGrantContext {
		let _localctx: ShowColumnGrantContext = new ShowColumnGrantContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, ImpalaSqlParser.RULE_showColumnGrant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1405;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1406;
			this.match(ImpalaSqlParser.KW_GRANT);
			this.state = 1407;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_GROUP || _la === ImpalaSqlParser.KW_ROLE || _la === ImpalaSqlParser.KW_USER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1408;
			this.identifier();
			this.state = 1414;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_ON) {
				{
				this.state = 1409;
				this.match(ImpalaSqlParser.KW_ON);
				this.state = 1410;
				this.match(ImpalaSqlParser.KW_COLUMN);
				this.state = 1412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_BERNOULLI || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 43)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 43)) | (1 << (ImpalaSqlParser.KW_DAY - 43)) | (1 << (ImpalaSqlParser.KW_DAYS - 43)) | (1 << (ImpalaSqlParser.KW_EXCLUDING - 43)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 43)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (ImpalaSqlParser.KW_HOUR - 91)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 91)) | (1 << (ImpalaSqlParser.KW_KEY - 91)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (ImpalaSqlParser.KW_MINUTE - 123)) | (1 << (ImpalaSqlParser.KW_MINUTES - 123)) | (1 << (ImpalaSqlParser.KW_MONTH - 123)) | (1 << (ImpalaSqlParser.KW_MONTHS - 123)) | (1 << (ImpalaSqlParser.KW_NFC - 123)) | (1 << (ImpalaSqlParser.KW_NFD - 123)) | (1 << (ImpalaSqlParser.KW_NFKC - 123)) | (1 << (ImpalaSqlParser.KW_NFKD - 123)) | (1 << (ImpalaSqlParser.KW_OPTION - 123)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 123)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 123)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 123)))) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (ImpalaSqlParser.KW_SECOND - 173)) | (1 << (ImpalaSqlParser.KW_SECONDS - 173)) | (1 << (ImpalaSqlParser.KW_SHUTDOWN - 173)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 173)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 173)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 173)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (ImpalaSqlParser.KW_USER - 206)) | (1 << (ImpalaSqlParser.KW_VIEWS - 206)) | (1 << (ImpalaSqlParser.KW_YEAR - 206)) | (1 << (ImpalaSqlParser.KW_ORC - 206)))) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & ((1 << (ImpalaSqlParser.STRING - 258)) | (1 << (ImpalaSqlParser.IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 258)))) !== 0)) {
					{
					this.state = 1411;
					this.columnNamePath();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addCommentStatement(): AddCommentStatementContext {
		let _localctx: AddCommentStatementContext = new AddCommentStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, ImpalaSqlParser.RULE_addCommentStatement);
		try {
			this.state = 1419;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1416;
				this.addDatabaseComments();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1417;
				this.addTableComments();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1418;
				this.addColumnComments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addDatabaseComments(): AddDatabaseCommentsContext {
		let _localctx: AddDatabaseCommentsContext = new AddDatabaseCommentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, ImpalaSqlParser.RULE_addDatabaseComments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1421;
			this.match(ImpalaSqlParser.KW_COMMENT);
			this.state = 1422;
			this.match(ImpalaSqlParser.KW_ON);
			this.state = 1423;
			this.match(ImpalaSqlParser.KW_DATABASE);
			this.state = 1424;
			this.databaseNamePath();
			this.state = 1425;
			this.match(ImpalaSqlParser.KW_IS);
			this.state = 1428;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.STRING:
			case ImpalaSqlParser.UNICODE_STRING:
				{
				this.state = 1426;
				this.stringLiteral();
				}
				break;
			case ImpalaSqlParser.KW_NULL:
				{
				this.state = 1427;
				this.match(ImpalaSqlParser.KW_NULL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addTableComments(): AddTableCommentsContext {
		let _localctx: AddTableCommentsContext = new AddTableCommentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, ImpalaSqlParser.RULE_addTableComments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1430;
			this.match(ImpalaSqlParser.KW_COMMENT);
			this.state = 1431;
			this.match(ImpalaSqlParser.KW_ON);
			this.state = 1432;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 1433;
			this.tableNamePath();
			this.state = 1434;
			this.match(ImpalaSqlParser.KW_IS);
			this.state = 1437;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.STRING:
			case ImpalaSqlParser.UNICODE_STRING:
				{
				this.state = 1435;
				this.stringLiteral();
				}
				break;
			case ImpalaSqlParser.KW_NULL:
				{
				this.state = 1436;
				this.match(ImpalaSqlParser.KW_NULL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addColumnComments(): AddColumnCommentsContext {
		let _localctx: AddColumnCommentsContext = new AddColumnCommentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, ImpalaSqlParser.RULE_addColumnComments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1439;
			this.match(ImpalaSqlParser.KW_COMMENT);
			this.state = 1440;
			this.match(ImpalaSqlParser.KW_ON);
			this.state = 1441;
			this.match(ImpalaSqlParser.KW_COLUMN);
			this.state = 1442;
			this.columnNamePath();
			this.state = 1443;
			this.match(ImpalaSqlParser.KW_IS);
			this.state = 1446;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.STRING:
			case ImpalaSqlParser.UNICODE_STRING:
				{
				this.state = 1444;
				this.stringLiteral();
				}
				break;
			case ImpalaSqlParser.KW_NULL:
				{
				this.state = 1445;
				this.match(ImpalaSqlParser.KW_NULL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explainStatement(): ExplainStatementContext {
		let _localctx: ExplainStatementContext = new ExplainStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, ImpalaSqlParser.RULE_explainStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1448;
			this.match(ImpalaSqlParser.KW_EXPLAIN);
			this.state = 1449;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setStatement(): SetStatementContext {
		let _localctx: SetStatementContext = new SetStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, ImpalaSqlParser.RULE_setStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1451;
			this.match(ImpalaSqlParser.KW_SET);
			this.state = 1457;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_ALL:
				{
				this.state = 1452;
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
				this.state = 1453;
				this.identifier();
				this.state = 1454;
				this.match(ImpalaSqlParser.EQ);
				this.state = 1455;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shutdownStatement(): ShutdownStatementContext {
		let _localctx: ShutdownStatementContext = new ShutdownStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, ImpalaSqlParser.RULE_shutdownStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1459;
			this.match(ImpalaSqlParser.COLON);
			this.state = 1460;
			this.match(ImpalaSqlParser.KW_SHUTDOWN);
			this.state = 1461;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 1471;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				{
				this.state = 1463;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.STRING || _la === ImpalaSqlParser.UNICODE_STRING) {
					{
					this.state = 1462;
					this.stringLiteral();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 1465;
				this.stringLiteral();
				this.state = 1468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.COMMA) {
					{
					this.state = 1466;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1467;
					this.expression();
					}
				}

				}
				break;

			case 3:
				{
				this.state = 1470;
				this.expression();
				}
				break;
			}
			this.state = 1473;
			this.match(ImpalaSqlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public invalidateMetaStatement(): InvalidateMetaStatementContext {
		let _localctx: InvalidateMetaStatementContext = new InvalidateMetaStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, ImpalaSqlParser.RULE_invalidateMetaStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1475;
			this.match(ImpalaSqlParser.KW_INVALIDATE);
			this.state = 1476;
			this.match(ImpalaSqlParser.KW_METADATA);
			this.state = 1477;
			this.tableNamePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loadDataStatement(): LoadDataStatementContext {
		let _localctx: LoadDataStatementContext = new LoadDataStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, ImpalaSqlParser.RULE_loadDataStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1479;
			this.match(ImpalaSqlParser.KW_LOAD);
			this.state = 1480;
			this.match(ImpalaSqlParser.KW_DATA);
			this.state = 1481;
			this.match(ImpalaSqlParser.KW_INPATH);
			this.state = 1482;
			this.match(ImpalaSqlParser.STRING);
			this.state = 1484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_OVERWRITE) {
				{
				this.state = 1483;
				this.match(ImpalaSqlParser.KW_OVERWRITE);
				}
			}

			this.state = 1486;
			this.match(ImpalaSqlParser.KW_INTO);
			this.state = 1487;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 1488;
			this.tableNamePath();
			this.state = 1498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 1489;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 1490;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1491;
				this.expression();
				this.state = 1494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.COMMA) {
					{
					this.state = 1492;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1493;
					this.expression();
					}
				}

				this.state = 1496;
				this.match(ImpalaSqlParser.RPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public refreshStatement(): RefreshStatementContext {
		let _localctx: RefreshStatementContext = new RefreshStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, ImpalaSqlParser.RULE_refreshStatement);
		try {
			this.state = 1503;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 179, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1500;
				this.refreshMeta();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1501;
				this.refreshAuth();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1502;
				this.refreshFunction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public refreshMeta(): RefreshMetaContext {
		let _localctx: RefreshMetaContext = new RefreshMetaContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, ImpalaSqlParser.RULE_refreshMeta);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1505;
			this.match(ImpalaSqlParser.KW_REFRESH);
			this.state = 1506;
			this.tableNamePath();
			this.state = 1519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 1507;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 1508;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1509;
				this.expression();
				this.state = 1514;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1510;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 1511;
						this.expression();
						}
						}
					}
					this.state = 1516;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 180, this._ctx);
				}
				this.state = 1517;
				this.match(ImpalaSqlParser.RPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public refreshAuth(): RefreshAuthContext {
		let _localctx: RefreshAuthContext = new RefreshAuthContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, ImpalaSqlParser.RULE_refreshAuth);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1521;
			this.match(ImpalaSqlParser.KW_REFRESH);
			this.state = 1522;
			this.match(ImpalaSqlParser.KW_AUTHORIZATION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public refreshFunction(): RefreshFunctionContext {
		let _localctx: RefreshFunctionContext = new RefreshFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, ImpalaSqlParser.RULE_refreshFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1524;
			this.match(ImpalaSqlParser.KW_REFRESH);
			this.state = 1525;
			this.match(ImpalaSqlParser.KW_FUNCTIONS);
			this.state = 1526;
			this.functionNamePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifExists(): IfExistsContext {
		let _localctx: IfExistsContext = new IfExistsContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, ImpalaSqlParser.RULE_ifExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1528;
			this.match(ImpalaSqlParser.KW_IF);
			this.state = 1529;
			this.match(ImpalaSqlParser.KW_EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifNotExists(): IfNotExistsContext {
		let _localctx: IfNotExistsContext = new IfNotExistsContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, ImpalaSqlParser.RULE_ifNotExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1531;
			this.match(ImpalaSqlParser.KW_IF);
			this.state = 1532;
			this.match(ImpalaSqlParser.KW_NOT);
			this.state = 1533;
			this.match(ImpalaSqlParser.KW_EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableNameCreate(): TableNameCreateContext {
		let _localctx: TableNameCreateContext = new TableNameCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, ImpalaSqlParser.RULE_tableNameCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1535;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public databaseNameCreate(): DatabaseNameCreateContext {
		let _localctx: DatabaseNameCreateContext = new DatabaseNameCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, ImpalaSqlParser.RULE_databaseNameCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1537;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public viewNameCreate(): ViewNameCreateContext {
		let _localctx: ViewNameCreateContext = new ViewNameCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, ImpalaSqlParser.RULE_viewNameCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1539;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionNameCreate(): FunctionNameCreateContext {
		let _localctx: FunctionNameCreateContext = new FunctionNameCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, ImpalaSqlParser.RULE_functionNameCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1541;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnNamePathCreate(): ColumnNamePathCreateContext {
		let _localctx: ColumnNamePathCreateContext = new ColumnNamePathCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, ImpalaSqlParser.RULE_columnNamePathCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1543;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public databaseNamePath(): DatabaseNamePathContext {
		let _localctx: DatabaseNamePathContext = new DatabaseNamePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, ImpalaSqlParser.RULE_databaseNamePath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1545;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableNamePath(): TableNamePathContext {
		let _localctx: TableNamePathContext = new TableNamePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, ImpalaSqlParser.RULE_tableNamePath);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1547;
			this.identifier();
			this.state = 1552;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 182, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1548;
					this.match(ImpalaSqlParser.DOT);
					this.state = 1549;
					this.identifier();
					}
					}
				}
				this.state = 1554;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 182, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public viewNamePath(): ViewNamePathContext {
		let _localctx: ViewNamePathContext = new ViewNamePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, ImpalaSqlParser.RULE_viewNamePath);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1555;
			this.identifier();
			this.state = 1560;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1556;
					this.match(ImpalaSqlParser.DOT);
					this.state = 1557;
					this.identifier();
					}
					}
				}
				this.state = 1562;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 183, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionNamePath(): FunctionNamePathContext {
		let _localctx: FunctionNamePathContext = new FunctionNamePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, ImpalaSqlParser.RULE_functionNamePath);
		try {
			this.state = 1565;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 184, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1563;
				this.reservedKeywordsUsedAsFuncName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1564;
				this.qualifiedName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnNamePath(): ColumnNamePathContext {
		let _localctx: ColumnNamePathContext = new ColumnNamePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, ImpalaSqlParser.RULE_columnNamePath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1567;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableOrViewPath(): TableOrViewPathContext {
		let _localctx: TableOrViewPathContext = new TableOrViewPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, ImpalaSqlParser.RULE_tableOrViewPath);
		try {
			this.state = 1571;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1569;
				this.tableNamePath();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1570;
				this.viewNamePath();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createCommonItem(): CreateCommonItemContext {
		let _localctx: CreateCommonItemContext = new CreateCommonItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, ImpalaSqlParser.RULE_createCommonItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1576;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_SORT) {
				{
				this.state = 1573;
				this.match(ImpalaSqlParser.KW_SORT);
				this.state = 1574;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 1575;
				this.columnAliases();
				}
			}

			this.state = 1580;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 187, this._ctx) ) {
			case 1:
				{
				this.state = 1578;
				this.match(ImpalaSqlParser.KW_COMMENT);
				this.state = 1579;
				_localctx._comment = this.stringLiteral();
				}
				break;
			}
			this.state = 1585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_ROW) {
				{
				this.state = 1582;
				this.match(ImpalaSqlParser.KW_ROW);
				this.state = 1583;
				this.match(ImpalaSqlParser.KW_FORMAT);
				this.state = 1584;
				this.rowFormat();
				}
			}

			this.state = 1590;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				{
				this.state = 1587;
				this.match(ImpalaSqlParser.KW_WITH);
				this.state = 1588;
				this.match(ImpalaSqlParser.KW_SERDEPROPERTIES);
				this.state = 1589;
				_localctx._serdProp = this.properties();
				}
				break;
			}
			this.state = 1595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_STORED) {
				{
				this.state = 1592;
				this.match(ImpalaSqlParser.KW_STORED);
				this.state = 1593;
				this.match(ImpalaSqlParser.KW_AS);
				this.state = 1594;
				this.fileFormat();
				}
			}

			this.state = 1599;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_LOCATION) {
				{
				this.state = 1597;
				this.match(ImpalaSqlParser.KW_LOCATION);
				this.state = 1598;
				_localctx._location = this.stringLiteral();
				}
			}

			this.state = 1611;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_CACHED:
				{
				this.state = 1601;
				this.match(ImpalaSqlParser.KW_CACHED);
				this.state = 1602;
				this.match(ImpalaSqlParser.KW_IN);
				this.state = 1603;
				_localctx._cacheName = this.qualifiedName();
				this.state = 1608;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 192, this._ctx) ) {
				case 1:
					{
					this.state = 1604;
					this.match(ImpalaSqlParser.KW_WITH);
					this.state = 1605;
					this.match(ImpalaSqlParser.KW_REPLICATION);
					this.state = 1606;
					this.match(ImpalaSqlParser.EQ);
					this.state = 1607;
					this.match(ImpalaSqlParser.INTEGER_VALUE);
					}
					break;
				}
				}
				break;
			case ImpalaSqlParser.KW_UNCACHED:
				{
				this.state = 1610;
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
			this.state = 1615;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_TBLPROPERTIES) {
				{
				this.state = 1613;
				this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
				this.state = 1614;
				_localctx._tblProp = this.properties();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentList(): AssignmentListContext {
		let _localctx: AssignmentListContext = new AssignmentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, ImpalaSqlParser.RULE_assignmentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1617;
			this.assignmentItem();
			this.state = 1622;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParser.COMMA) {
				{
				{
				this.state = 1618;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 1619;
				this.assignmentItem();
				}
				}
				this.state = 1624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentItem(): AssignmentItemContext {
		let _localctx: AssignmentItemContext = new AssignmentItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, ImpalaSqlParser.RULE_assignmentItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1625;
			this.qualifiedName();
			this.state = 1626;
			this.match(ImpalaSqlParser.EQ);
			this.state = 1627;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public viewColumns(): ViewColumnsContext {
		let _localctx: ViewColumnsContext = new ViewColumnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, ImpalaSqlParser.RULE_viewColumns);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1629;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 1630;
			this.columnNamePath();
			this.state = 1633;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_COMMENT) {
				{
				this.state = 1631;
				this.match(ImpalaSqlParser.KW_COMMENT);
				this.state = 1632;
				this.stringLiteral();
				}
			}

			this.state = 1643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParser.COMMA) {
				{
				{
				this.state = 1635;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 1636;
				this.identifier();
				this.state = 1639;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_COMMENT) {
					{
					this.state = 1637;
					this.match(ImpalaSqlParser.KW_COMMENT);
					this.state = 1638;
					this.stringLiteral();
					}
				}

				}
				}
				this.state = 1645;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1646;
			this.match(ImpalaSqlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryStatement(): QueryStatementContext {
		let _localctx: QueryStatementContext = new QueryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, ImpalaSqlParser.RULE_queryStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_WITH) {
				{
				this.state = 1648;
				this.with();
				}
			}

			this.state = 1651;
			this.queryNoWith();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public with(): WithContext {
		let _localctx: WithContext = new WithContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, ImpalaSqlParser.RULE_with);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1653;
			this.match(ImpalaSqlParser.KW_WITH);
			this.state = 1654;
			this.namedQuery();
			this.state = 1659;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParser.COMMA) {
				{
				{
				this.state = 1655;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 1656;
				this.namedQuery();
				}
				}
				this.state = 1661;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constraintSpecification(): ConstraintSpecificationContext {
		let _localctx: ConstraintSpecificationContext = new ConstraintSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, ImpalaSqlParser.RULE_constraintSpecification);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1662;
			this.match(ImpalaSqlParser.KW_PRIMARY);
			this.state = 1663;
			this.match(ImpalaSqlParser.KW_KEY);
			this.state = 1664;
			this.columnAliases();
			this.state = 1666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_DISABLE) {
				{
				this.state = 1665;
				this.match(ImpalaSqlParser.KW_DISABLE);
				}
			}

			this.state = 1671;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 202, this._ctx) ) {
			case 1:
				{
				this.state = 1668;
				this.match(ImpalaSqlParser.KW_NOVALIDATE);
				}
				break;

			case 2:
				{
				this.state = 1669;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 1670;
				this.match(ImpalaSqlParser.KW_NOVALIDATE);
				}
				break;
			}
			this.state = 1676;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 203, this._ctx) ) {
			case 1:
				{
				this.state = 1673;
				this.match(ImpalaSqlParser.KW_RELY);
				}
				break;

			case 2:
				{
				this.state = 1674;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 1675;
				this.match(ImpalaSqlParser.KW_RELY);
				}
				break;
			}
			this.state = 1690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_FOREIGN || _la === ImpalaSqlParser.COMMA) {
				{
				this.state = 1681;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ImpalaSqlParser.COMMA:
					{
					this.state = 1678;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1679;
					this.foreignKeySpecification();
					}
					break;
				case ImpalaSqlParser.KW_FOREIGN:
					{
					this.state = 1680;
					this.foreignKeySpecification();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1687;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 205, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1683;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 1684;
						this.foreignKeySpecification();
						}
						}
					}
					this.state = 1689;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 205, this._ctx);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public foreignKeySpecification(): ForeignKeySpecificationContext {
		let _localctx: ForeignKeySpecificationContext = new ForeignKeySpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, ImpalaSqlParser.RULE_foreignKeySpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1692;
			this.match(ImpalaSqlParser.KW_FOREIGN);
			this.state = 1693;
			this.match(ImpalaSqlParser.KW_KEY);
			this.state = 1694;
			this.columnAliases();
			this.state = 1695;
			this.match(ImpalaSqlParser.KW_REFERENCES);
			this.state = 1696;
			this.tableNamePath();
			this.state = 1697;
			this.columnAliases();
			this.state = 1699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_DISABLE) {
				{
				this.state = 1698;
				this.match(ImpalaSqlParser.KW_DISABLE);
				}
			}

			this.state = 1702;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_NOVALIDATE) {
				{
				this.state = 1701;
				this.match(ImpalaSqlParser.KW_NOVALIDATE);
				}
			}

			this.state = 1705;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_RELY) {
				{
				this.state = 1704;
				this.match(ImpalaSqlParser.KW_RELY);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnDefinition(): ColumnDefinitionContext {
		let _localctx: ColumnDefinitionContext = new ColumnDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, ImpalaSqlParser.RULE_columnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1707;
			this.columnNamePathCreate();
			this.state = 1708;
			this.type(0);
			this.state = 1711;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_COMMENT) {
				{
				this.state = 1709;
				this.match(ImpalaSqlParser.KW_COMMENT);
				this.state = 1710;
				this.stringLiteral();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public kuduTableElement(): KuduTableElementContext {
		let _localctx: KuduTableElementContext = new KuduTableElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, ImpalaSqlParser.RULE_kuduTableElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1713;
			this.kuduColumnDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public kuduColumnDefinition(): KuduColumnDefinitionContext {
		let _localctx: KuduColumnDefinitionContext = new KuduColumnDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, ImpalaSqlParser.RULE_kuduColumnDefinition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1715;
			this.columnNamePathCreate();
			this.state = 1716;
			this.type(0);
			this.state = 1724;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_BLOCK_SIZE || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (ImpalaSqlParser.KW_COMPRESSION - 35)) | (1 << (ImpalaSqlParser.KW_DEFAULT - 35)) | (1 << (ImpalaSqlParser.KW_ENCODING - 35)))) !== 0) || _la === ImpalaSqlParser.KW_NOT || _la === ImpalaSqlParser.KW_NULL) {
				{
				this.state = 1717;
				this.kuduAttributes();
				this.state = 1721;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 211, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1718;
						this.kuduAttributes();
						}
						}
					}
					this.state = 1723;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 211, this._ctx);
				}
				}
			}

			this.state = 1728;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_COMMENT) {
				{
				this.state = 1726;
				this.match(ImpalaSqlParser.KW_COMMENT);
				this.state = 1727;
				this.stringLiteral();
				}
			}

			this.state = 1732;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PRIMARY) {
				{
				this.state = 1730;
				this.match(ImpalaSqlParser.KW_PRIMARY);
				this.state = 1731;
				this.match(ImpalaSqlParser.KW_KEY);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnSpecWithKudu(): ColumnSpecWithKuduContext {
		let _localctx: ColumnSpecWithKuduContext = new ColumnSpecWithKuduContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, ImpalaSqlParser.RULE_columnSpecWithKudu);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1734;
			this.columnNamePath();
			this.state = 1735;
			this.type(0);
			this.state = 1738;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 215, this._ctx) ) {
			case 1:
				{
				this.state = 1736;
				this.match(ImpalaSqlParser.KW_COMMENT);
				this.state = 1737;
				this.stringLiteral();
				}
				break;
			}
			this.state = 1747;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_BLOCK_SIZE || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (ImpalaSqlParser.KW_COMPRESSION - 35)) | (1 << (ImpalaSqlParser.KW_DEFAULT - 35)) | (1 << (ImpalaSqlParser.KW_ENCODING - 35)))) !== 0) || _la === ImpalaSqlParser.KW_NOT || _la === ImpalaSqlParser.KW_NULL) {
				{
				this.state = 1740;
				this.kuduAttributes();
				this.state = 1744;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1741;
						this.kuduAttributes();
						}
						}
					}
					this.state = 1746;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createColumnSpecWithKudu(): CreateColumnSpecWithKuduContext {
		let _localctx: CreateColumnSpecWithKuduContext = new CreateColumnSpecWithKuduContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, ImpalaSqlParser.RULE_createColumnSpecWithKudu);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1749;
			this.columnNamePathCreate();
			this.state = 1750;
			this.type(0);
			this.state = 1753;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 218, this._ctx) ) {
			case 1:
				{
				this.state = 1751;
				this.match(ImpalaSqlParser.KW_COMMENT);
				this.state = 1752;
				this.stringLiteral();
				}
				break;
			}
			this.state = 1762;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_BLOCK_SIZE || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (ImpalaSqlParser.KW_COMPRESSION - 35)) | (1 << (ImpalaSqlParser.KW_DEFAULT - 35)) | (1 << (ImpalaSqlParser.KW_ENCODING - 35)))) !== 0) || _la === ImpalaSqlParser.KW_NOT || _la === ImpalaSqlParser.KW_NULL) {
				{
				this.state = 1755;
				this.kuduAttributes();
				this.state = 1759;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1756;
						this.kuduAttributes();
						}
						}
					}
					this.state = 1761;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public kuduAttributes(): KuduAttributesContext {
		let _localctx: KuduAttributesContext = new KuduAttributesContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, ImpalaSqlParser.RULE_kuduAttributes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1769;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_NOT:
			case ImpalaSqlParser.KW_NULL:
				{
				this.state = 1765;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_NOT) {
					{
					this.state = 1764;
					this.match(ImpalaSqlParser.KW_NOT);
					}
				}

				this.state = 1767;
				this.match(ImpalaSqlParser.KW_NULL);
				}
				break;
			case ImpalaSqlParser.KW_BLOCK_SIZE:
			case ImpalaSqlParser.KW_COMPRESSION:
			case ImpalaSqlParser.KW_DEFAULT:
			case ImpalaSqlParser.KW_ENCODING:
				{
				this.state = 1768;
				this.kuduStorageAttr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public kuduStorageAttr(): KuduStorageAttrContext {
		let _localctx: KuduStorageAttrContext = new KuduStorageAttrContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, ImpalaSqlParser.RULE_kuduStorageAttr);
		try {
			this.state = 1779;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_ENCODING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1771;
				this.match(ImpalaSqlParser.KW_ENCODING);
				this.state = 1772;
				this.expression();
				}
				break;
			case ImpalaSqlParser.KW_COMPRESSION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1773;
				this.match(ImpalaSqlParser.KW_COMPRESSION);
				this.state = 1774;
				this.expression();
				}
				break;
			case ImpalaSqlParser.KW_DEFAULT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1775;
				this.match(ImpalaSqlParser.KW_DEFAULT);
				this.state = 1776;
				this.expression();
				}
				break;
			case ImpalaSqlParser.KW_BLOCK_SIZE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1777;
				this.match(ImpalaSqlParser.KW_BLOCK_SIZE);
				this.state = 1778;
				this.number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statsKey(): StatsKeyContext {
		let _localctx: StatsKeyContext = new StatsKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, ImpalaSqlParser.RULE_statsKey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1781;
			_la = this._input.LA(1);
			if (!(((((_la - 229)) & ~0x1F) === 0 && ((1 << (_la - 229)) & ((1 << (ImpalaSqlParser.STATS_NUMDVS - 229)) | (1 << (ImpalaSqlParser.STATS_NUMNULLS - 229)) | (1 << (ImpalaSqlParser.STATS_AVGSIZE - 229)) | (1 << (ImpalaSqlParser.STATS_MAXSIZE - 229)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fileFormat(): FileFormatContext {
		let _localctx: FileFormatContext = new FileFormatContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, ImpalaSqlParser.RULE_fileFormat);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1783;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_PARQUET || ((((_la - 221)) & ~0x1F) === 0 && ((1 << (_la - 221)) & ((1 << (ImpalaSqlParser.KW_TEXTFILE - 221)) | (1 << (ImpalaSqlParser.KW_ORC - 221)) | (1 << (ImpalaSqlParser.KW_AVRO - 221)) | (1 << (ImpalaSqlParser.KW_SEQUENCEFILE - 221)) | (1 << (ImpalaSqlParser.KW_RCFILE - 221)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public kuduPartitionClause(): KuduPartitionClauseContext {
		let _localctx: KuduPartitionClauseContext = new KuduPartitionClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, ImpalaSqlParser.RULE_kuduPartitionClause);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1798;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_HASH:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1785;
				this.hashClause();
				this.state = 1790;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 224, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1786;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 1787;
						this.hashClause();
						}
						}
					}
					this.state = 1792;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 224, this._ctx);
				}
				this.state = 1795;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.COMMA) {
					{
					this.state = 1793;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1794;
					this.rangeClause();
					}
				}

				}
				}
				break;
			case ImpalaSqlParser.KW_RANGE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1797;
				this.rangeClause();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hashClause(): HashClauseContext {
		let _localctx: HashClauseContext = new HashClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, ImpalaSqlParser.RULE_hashClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1800;
			this.match(ImpalaSqlParser.KW_HASH);
			this.state = 1802;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.LPAREN) {
				{
				this.state = 1801;
				this.columnAliases();
				}
			}

			this.state = 1804;
			this.match(ImpalaSqlParser.KW_PARTITIONS);
			this.state = 1805;
			this.number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rangeClause(): RangeClauseContext {
		let _localctx: RangeClauseContext = new RangeClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, ImpalaSqlParser.RULE_rangeClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1807;
			this.match(ImpalaSqlParser.KW_RANGE);
			this.state = 1809;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 228, this._ctx) ) {
			case 1:
				{
				this.state = 1808;
				this.columnAliases();
				}
				break;
			}
			this.state = 1811;
			this.match(ImpalaSqlParser.LPAREN);
			{
			this.state = 1812;
			this.match(ImpalaSqlParser.KW_PARTITION);
			this.state = 1813;
			this.kuduPartitionSpec();
			this.state = 1819;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 229, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1814;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1815;
					this.match(ImpalaSqlParser.KW_PARTITION);
					this.state = 1816;
					this.kuduPartitionSpec();
					}
					}
				}
				this.state = 1821;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 229, this._ctx);
			}
			}
			this.state = 1822;
			this.match(ImpalaSqlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public kuduPartitionSpec(): KuduPartitionSpecContext {
		let _localctx: KuduPartitionSpecContext = new KuduPartitionSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, ImpalaSqlParser.RULE_kuduPartitionSpec);
		let _la: number;
		try {
			this.state = 1839;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1824;
				this.match(ImpalaSqlParser.KW_VALUE);
				this.state = 1825;
				this.partitionCol();
				this.state = 1826;
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
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1831;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParser.KW_ARRAY) | (1 << ImpalaSqlParser.KW_BERNOULLI) | (1 << ImpalaSqlParser.KW_CASE) | (1 << ImpalaSqlParser.KW_CAST))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ImpalaSqlParser.KW_CURRENT_DATE - 40)) | (1 << (ImpalaSqlParser.KW_CURRENT_PATH - 40)) | (1 << (ImpalaSqlParser.KW_CURRENT_TIME - 40)) | (1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 40)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 40)) | (1 << (ImpalaSqlParser.KW_DAY - 40)) | (1 << (ImpalaSqlParser.KW_DAYS - 40)) | (1 << (ImpalaSqlParser.KW_EXCLUDING - 40)) | (1 << (ImpalaSqlParser.KW_EXISTS - 40)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 40)) | (1 << (ImpalaSqlParser.KW_FALSE - 40)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (ImpalaSqlParser.KW_GROUPING - 88)) | (1 << (ImpalaSqlParser.KW_HOUR - 88)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 88)) | (1 << (ImpalaSqlParser.KW_INTERVAL - 88)) | (1 << (ImpalaSqlParser.KW_KEY - 88)) | (1 << (ImpalaSqlParser.KW_LEFT - 88)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 88)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (ImpalaSqlParser.KW_LOCALTIMESTAMP - 120)) | (1 << (ImpalaSqlParser.KW_MINUTE - 120)) | (1 << (ImpalaSqlParser.KW_MINUTES - 120)) | (1 << (ImpalaSqlParser.KW_MONTH - 120)) | (1 << (ImpalaSqlParser.KW_MONTHS - 120)) | (1 << (ImpalaSqlParser.KW_NFC - 120)) | (1 << (ImpalaSqlParser.KW_NFD - 120)) | (1 << (ImpalaSqlParser.KW_NFKC - 120)) | (1 << (ImpalaSqlParser.KW_NFKD - 120)) | (1 << (ImpalaSqlParser.KW_NORMALIZE - 120)) | (1 << (ImpalaSqlParser.KW_NOT - 120)) | (1 << (ImpalaSqlParser.KW_NULL - 120)) | (1 << (ImpalaSqlParser.KW_OPTION - 120)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 120)) | (1 << (ImpalaSqlParser.KW_POSITION - 120)))) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & ((1 << (ImpalaSqlParser.KW_PRIVILEGES - 153)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 153)) | (1 << (ImpalaSqlParser.KW_REPLACE - 153)) | (1 << (ImpalaSqlParser.KW_RIGHT - 153)) | (1 << (ImpalaSqlParser.KW_ROW - 153)) | (1 << (ImpalaSqlParser.KW_SECOND - 153)) | (1 << (ImpalaSqlParser.KW_SECONDS - 153)) | (1 << (ImpalaSqlParser.KW_SHUTDOWN - 153)))) !== 0) || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & ((1 << (ImpalaSqlParser.KW_SUBSTRING - 186)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 186)) | (1 << (ImpalaSqlParser.KW_TRUE - 186)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 186)) | (1 << (ImpalaSqlParser.KW_TRUNCATE - 186)) | (1 << (ImpalaSqlParser.KW_USER - 186)) | (1 << (ImpalaSqlParser.KW_VIEWS - 186)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (ImpalaSqlParser.KW_YEAR - 219)) | (1 << (ImpalaSqlParser.KW_ORC - 219)) | (1 << (ImpalaSqlParser.PLUS - 219)) | (1 << (ImpalaSqlParser.MINUS - 219)) | (1 << (ImpalaSqlParser.LPAREN - 219)))) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & ((1 << (ImpalaSqlParser.QUESTION - 256)) | (1 << (ImpalaSqlParser.STRING - 256)) | (1 << (ImpalaSqlParser.UNICODE_STRING - 256)) | (1 << (ImpalaSqlParser.BINARY_LITERAL - 256)) | (1 << (ImpalaSqlParser.INTEGER_VALUE - 256)) | (1 << (ImpalaSqlParser.DECIMAL_VALUE - 256)) | (1 << (ImpalaSqlParser.DOUBLE_VALUE - 256)) | (1 << (ImpalaSqlParser.IDENTIFIER - 256)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 256)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 256)) | (1 << (ImpalaSqlParser.DOUBLE_PRECISION - 256)))) !== 0)) {
					{
					this.state = 1828;
					this.expression();
					this.state = 1829;
					this.rangeOperator();
					}
				}

				this.state = 1833;
				this.match(ImpalaSqlParser.KW_VALUES);
				this.state = 1837;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 231, this._ctx) ) {
				case 1:
					{
					this.state = 1834;
					this.rangeOperator();
					this.state = 1835;
					this.expression();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cacheSpec(): CacheSpecContext {
		let _localctx: CacheSpecContext = new CacheSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, ImpalaSqlParser.RULE_cacheSpec);
		try {
			this.state = 1851;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_CACHED:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1841;
				this.match(ImpalaSqlParser.KW_CACHED);
				this.state = 1842;
				this.match(ImpalaSqlParser.KW_IN);
				this.state = 1843;
				this.identifier();
				this.state = 1848;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 233, this._ctx) ) {
				case 1:
					{
					this.state = 1844;
					this.match(ImpalaSqlParser.KW_WITH);
					this.state = 1845;
					this.match(ImpalaSqlParser.KW_REPLICATION);
					this.state = 1846;
					this.match(ImpalaSqlParser.EQ);
					this.state = 1847;
					this.number();
					}
					break;
				}
				}
				break;
			case ImpalaSqlParser.KW_UNCACHED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1850;
				this.match(ImpalaSqlParser.KW_UNCACHED);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rangeOperator(): RangeOperatorContext {
		let _localctx: RangeOperatorContext = new RangeOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, ImpalaSqlParser.RULE_rangeOperator);
		try {
			this.state = 1858;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
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
				this.enterOuterAlt(_localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case ImpalaSqlParser.LT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1854;
				this.match(ImpalaSqlParser.LT);
				}
				break;
			case ImpalaSqlParser.LTE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1855;
				this.match(ImpalaSqlParser.LTE);
				}
				break;
			case ImpalaSqlParser.GT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1856;
				this.match(ImpalaSqlParser.GT);
				}
				break;
			case ImpalaSqlParser.GTE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1857;
				this.match(ImpalaSqlParser.GTE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partitionCol(): PartitionColContext {
		let _localctx: PartitionColContext = new PartitionColContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, ImpalaSqlParser.RULE_partitionCol);
		try {
			this.state = 1868;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.EQ:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1860;
				this.match(ImpalaSqlParser.EQ);
				}
				break;
			case ImpalaSqlParser.NEQ:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1861;
				this.match(ImpalaSqlParser.NEQ);
				}
				break;
			case ImpalaSqlParser.KW_LIKE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1862;
				this.match(ImpalaSqlParser.KW_LIKE);
				}
				break;
			case ImpalaSqlParser.KW_RLIKE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1863;
				this.match(ImpalaSqlParser.KW_RLIKE);
				}
				break;
			case ImpalaSqlParser.KW_REGEXP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1864;
				this.match(ImpalaSqlParser.KW_REGEXP);
				}
				break;
			case ImpalaSqlParser.KW_BETWEEN:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1865;
				this.match(ImpalaSqlParser.KW_BETWEEN);
				}
				break;
			case ImpalaSqlParser.KW_IN:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1866;
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
			case ImpalaSqlParser.KW_VALUES:
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
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1867;
				this.rangeOperator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public likeClause(): LikeClauseContext {
		let _localctx: LikeClauseContext = new LikeClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, ImpalaSqlParser.RULE_likeClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1870;
			this.match(ImpalaSqlParser.KW_LIKE);
			this.state = 1871;
			this.qualifiedName();
			this.state = 1874;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_EXCLUDING || _la === ImpalaSqlParser.KW_INCLUDING) {
				{
				this.state = 1872;
				_localctx._optionType = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParser.KW_EXCLUDING || _la === ImpalaSqlParser.KW_INCLUDING)) {
					_localctx._optionType = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1873;
				this.match(ImpalaSqlParser.KW_PROPERTIES);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public properties(): PropertiesContext {
		let _localctx: PropertiesContext = new PropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, ImpalaSqlParser.RULE_properties);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1876;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 1877;
			this.property();
			this.state = 1882;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParser.COMMA) {
				{
				{
				this.state = 1878;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 1879;
				this.property();
				}
				}
				this.state = 1884;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1885;
			this.match(ImpalaSqlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partitionedBy(): PartitionedByContext {
		let _localctx: PartitionedByContext = new PartitionedByContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, ImpalaSqlParser.RULE_partitionedBy);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1887;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 1888;
			this.columnDefinition();
			this.state = 1893;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 239, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1889;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1890;
					this.columnDefinition();
					}
					}
				}
				this.state = 1895;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 239, this._ctx);
			}
			this.state = 1896;
			this.match(ImpalaSqlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sortedBy(): SortedByContext {
		let _localctx: SortedByContext = new SortedByContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, ImpalaSqlParser.RULE_sortedBy);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1898;
			this.expression();
			this.state = 1903;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParser.COMMA) {
				{
				{
				this.state = 1899;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 1900;
				this.expression();
				}
				}
				this.state = 1905;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rowFormat(): RowFormatContext {
		let _localctx: RowFormatContext = new RowFormatContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, ImpalaSqlParser.RULE_rowFormat);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1906;
			this.match(ImpalaSqlParser.KW_DELIMITED);
			this.state = 1916;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_FIELDS) {
				{
				this.state = 1907;
				this.match(ImpalaSqlParser.KW_FIELDS);
				this.state = 1908;
				this.match(ImpalaSqlParser.KW_TERMINATED);
				this.state = 1909;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 1910;
				this.stringLiteral();
				this.state = 1914;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_ESCAPED) {
					{
					this.state = 1911;
					this.match(ImpalaSqlParser.KW_ESCAPED);
					this.state = 1912;
					this.match(ImpalaSqlParser.KW_BY);
					this.state = 1913;
					this.stringLiteral();
					}
				}

				}
			}

			this.state = 1922;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_LINES) {
				{
				this.state = 1918;
				this.match(ImpalaSqlParser.KW_LINES);
				this.state = 1919;
				this.match(ImpalaSqlParser.KW_TERMINATED);
				this.state = 1920;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 1921;
				this.stringLiteral();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, ImpalaSqlParser.RULE_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1924;
			this.identifier();
			this.state = 1927;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.EQ) {
				{
				this.state = 1925;
				this.match(ImpalaSqlParser.EQ);
				this.state = 1926;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryNoWith(): QueryNoWithContext {
		let _localctx: QueryNoWithContext = new QueryNoWithContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, ImpalaSqlParser.RULE_queryNoWith);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1929;
			this.queryTerm(0);
			this.state = 1940;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_ORDER) {
				{
				this.state = 1930;
				this.match(ImpalaSqlParser.KW_ORDER);
				this.state = 1931;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 1932;
				this.sortItem();
				this.state = 1937;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 1933;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1934;
					this.sortItem();
					}
					}
					this.state = 1939;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1948;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_LIMIT) {
				{
				this.state = 1942;
				this.match(ImpalaSqlParser.KW_LIMIT);
				this.state = 1943;
				_localctx._rows = this.expression();
				this.state = 1946;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_OFFSET) {
					{
					this.state = 1944;
					this.match(ImpalaSqlParser.KW_OFFSET);
					this.state = 1945;
					_localctx._offset = this.match(ImpalaSqlParser.INTEGER_VALUE);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public queryTerm(): QueryTermContext;
	public queryTerm(_p: number): QueryTermContext;
	// @RuleVersion(0)
	public queryTerm(_p?: number): QueryTermContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: QueryTermContext = new QueryTermContext(this._ctx, _parentState);
		let _prevctx: QueryTermContext = _localctx;
		let _startState: number = 262;
		this.enterRecursionRule(_localctx, 262, ImpalaSqlParser.RULE_queryTerm, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new QueryTermDefaultContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 1951;
			this.queryPrimary();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1967;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 252, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1965;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 251, this._ctx) ) {
					case 1:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						(_localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_queryTerm);
						this.state = 1953;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1954;
						(_localctx as SetOperationContext)._operator = this.match(ImpalaSqlParser.KW_INTERSECT);
						this.state = 1956;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === ImpalaSqlParser.KW_ALL || _la === ImpalaSqlParser.KW_DISTINCT) {
							{
							this.state = 1955;
							this.setQuantifier();
							}
						}

						this.state = 1958;
						(_localctx as SetOperationContext)._right = this.queryTerm(3);
						}
						break;

					case 2:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						(_localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_queryTerm);
						this.state = 1959;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1960;
						(_localctx as SetOperationContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ImpalaSqlParser.KW_EXCEPT || _la === ImpalaSqlParser.KW_UNION)) {
							(_localctx as SetOperationContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1962;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === ImpalaSqlParser.KW_ALL || _la === ImpalaSqlParser.KW_DISTINCT) {
							{
							this.state = 1961;
							this.setQuantifier();
							}
						}

						this.state = 1964;
						(_localctx as SetOperationContext)._right = this.queryTerm(2);
						}
						break;
					}
					}
				}
				this.state = 1969;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 252, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryPrimary(): QueryPrimaryContext {
		let _localctx: QueryPrimaryContext = new QueryPrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, ImpalaSqlParser.RULE_queryPrimary);
		try {
			let _alt: number;
			this.state = 1986;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_SELECT:
				_localctx = new QueryPrimaryDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1970;
				this.querySpecification();
				}
				break;
			case ImpalaSqlParser.KW_TABLE:
				_localctx = new TableContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1971;
				this.match(ImpalaSqlParser.KW_TABLE);
				this.state = 1972;
				this.tableNamePath();
				}
				break;
			case ImpalaSqlParser.KW_VALUES:
				_localctx = new InlineTableContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1973;
				this.match(ImpalaSqlParser.KW_VALUES);
				this.state = 1974;
				this.expression();
				this.state = 1979;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 253, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1975;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 1976;
						this.expression();
						}
						}
					}
					this.state = 1981;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 253, this._ctx);
				}
				}
				break;
			case ImpalaSqlParser.LPAREN:
				_localctx = new SubqueryContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1982;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1983;
				this.queryNoWith();
				this.state = 1984;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sortItem(): SortItemContext {
		let _localctx: SortItemContext = new SortItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, ImpalaSqlParser.RULE_sortItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1988;
			this.columnItem();
			this.state = 1990;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_ASC || _la === ImpalaSqlParser.KW_DESC) {
				{
				this.state = 1989;
				_localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParser.KW_ASC || _la === ImpalaSqlParser.KW_DESC)) {
					_localctx._ordering = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 1994;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_NULLS) {
				{
				this.state = 1992;
				this.match(ImpalaSqlParser.KW_NULLS);
				this.state = 1993;
				_localctx._nullOrdering = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParser.KW_FIRST || _la === ImpalaSqlParser.KW_LAST)) {
					_localctx._nullOrdering = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public querySpecification(): QuerySpecificationContext {
		let _localctx: QuerySpecificationContext = new QuerySpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, ImpalaSqlParser.RULE_querySpecification);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1996;
			this.match(ImpalaSqlParser.KW_SELECT);
			this.state = 1998;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_ALL || _la === ImpalaSqlParser.KW_DISTINCT) {
				{
				this.state = 1997;
				this.setQuantifier();
				}
			}

			this.state = 2001;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_STRAIGHT_JOIN) {
				{
				this.state = 2000;
				this.match(ImpalaSqlParser.KW_STRAIGHT_JOIN);
				}
			}

			this.state = 2003;
			this.selectItem();
			this.state = 2008;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 259, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2004;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 2005;
					this.selectItem();
					}
					}
				}
				this.state = 2010;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 259, this._ctx);
			}
			this.state = 2020;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 261, this._ctx) ) {
			case 1:
				{
				this.state = 2011;
				this.match(ImpalaSqlParser.KW_FROM);
				this.state = 2012;
				this.relation(0);
				this.state = 2017;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 260, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2013;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 2014;
						this.relation(0);
						}
						}
					}
					this.state = 2019;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 260, this._ctx);
				}
				}
				break;
			}
			this.state = 2024;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 262, this._ctx) ) {
			case 1:
				{
				this.state = 2022;
				this.match(ImpalaSqlParser.KW_WHERE);
				this.state = 2023;
				_localctx._where = this.booleanExpression(0);
				}
				break;
			}
			this.state = 2029;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 263, this._ctx) ) {
			case 1:
				{
				this.state = 2026;
				this.match(ImpalaSqlParser.KW_GROUP);
				this.state = 2027;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 2028;
				this.groupBy();
				}
				break;
			}
			this.state = 2033;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 264, this._ctx) ) {
			case 1:
				{
				this.state = 2031;
				this.match(ImpalaSqlParser.KW_HAVING);
				this.state = 2032;
				_localctx._having = this.booleanExpression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupBy(): GroupByContext {
		let _localctx: GroupByContext = new GroupByContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, ImpalaSqlParser.RULE_groupBy);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2036;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_ALL || _la === ImpalaSqlParser.KW_DISTINCT) {
				{
				this.state = 2035;
				this.setQuantifier();
				}
			}

			this.state = 2038;
			this.groupingElement();
			this.state = 2043;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 266, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2039;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 2040;
					this.groupingElement();
					}
					}
				}
				this.state = 2045;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 266, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupingElement(): GroupingElementContext {
		let _localctx: GroupingElementContext = new GroupingElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, ImpalaSqlParser.RULE_groupingElement);
		try {
			_localctx = new SingleGroupingSetContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2046;
			this.groupingSet();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupingSet(): GroupingSetContext {
		let _localctx: GroupingSetContext = new GroupingSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, ImpalaSqlParser.RULE_groupingSet);
		let _la: number;
		try {
			this.state = 2061;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 269, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2048;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2057;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParser.KW_ARRAY) | (1 << ImpalaSqlParser.KW_BERNOULLI) | (1 << ImpalaSqlParser.KW_CASE) | (1 << ImpalaSqlParser.KW_CAST))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ImpalaSqlParser.KW_CURRENT_DATE - 40)) | (1 << (ImpalaSqlParser.KW_CURRENT_PATH - 40)) | (1 << (ImpalaSqlParser.KW_CURRENT_TIME - 40)) | (1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 40)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 40)) | (1 << (ImpalaSqlParser.KW_DAY - 40)) | (1 << (ImpalaSqlParser.KW_DAYS - 40)) | (1 << (ImpalaSqlParser.KW_EXCLUDING - 40)) | (1 << (ImpalaSqlParser.KW_EXISTS - 40)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 40)) | (1 << (ImpalaSqlParser.KW_FALSE - 40)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (ImpalaSqlParser.KW_GROUPING - 88)) | (1 << (ImpalaSqlParser.KW_HOUR - 88)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 88)) | (1 << (ImpalaSqlParser.KW_INTERVAL - 88)) | (1 << (ImpalaSqlParser.KW_KEY - 88)) | (1 << (ImpalaSqlParser.KW_LEFT - 88)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 88)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (ImpalaSqlParser.KW_LOCALTIMESTAMP - 120)) | (1 << (ImpalaSqlParser.KW_MINUTE - 120)) | (1 << (ImpalaSqlParser.KW_MINUTES - 120)) | (1 << (ImpalaSqlParser.KW_MONTH - 120)) | (1 << (ImpalaSqlParser.KW_MONTHS - 120)) | (1 << (ImpalaSqlParser.KW_NFC - 120)) | (1 << (ImpalaSqlParser.KW_NFD - 120)) | (1 << (ImpalaSqlParser.KW_NFKC - 120)) | (1 << (ImpalaSqlParser.KW_NFKD - 120)) | (1 << (ImpalaSqlParser.KW_NORMALIZE - 120)) | (1 << (ImpalaSqlParser.KW_NOT - 120)) | (1 << (ImpalaSqlParser.KW_NULL - 120)) | (1 << (ImpalaSqlParser.KW_OPTION - 120)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 120)) | (1 << (ImpalaSqlParser.KW_POSITION - 120)))) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & ((1 << (ImpalaSqlParser.KW_PRIVILEGES - 153)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 153)) | (1 << (ImpalaSqlParser.KW_REPLACE - 153)) | (1 << (ImpalaSqlParser.KW_RIGHT - 153)) | (1 << (ImpalaSqlParser.KW_ROW - 153)) | (1 << (ImpalaSqlParser.KW_SECOND - 153)) | (1 << (ImpalaSqlParser.KW_SECONDS - 153)) | (1 << (ImpalaSqlParser.KW_SHUTDOWN - 153)))) !== 0) || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & ((1 << (ImpalaSqlParser.KW_SUBSTRING - 186)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 186)) | (1 << (ImpalaSqlParser.KW_TRUE - 186)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 186)) | (1 << (ImpalaSqlParser.KW_TRUNCATE - 186)) | (1 << (ImpalaSqlParser.KW_USER - 186)) | (1 << (ImpalaSqlParser.KW_VIEWS - 186)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (ImpalaSqlParser.KW_YEAR - 219)) | (1 << (ImpalaSqlParser.KW_ORC - 219)) | (1 << (ImpalaSqlParser.PLUS - 219)) | (1 << (ImpalaSqlParser.MINUS - 219)) | (1 << (ImpalaSqlParser.LPAREN - 219)))) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & ((1 << (ImpalaSqlParser.QUESTION - 256)) | (1 << (ImpalaSqlParser.STRING - 256)) | (1 << (ImpalaSqlParser.UNICODE_STRING - 256)) | (1 << (ImpalaSqlParser.BINARY_LITERAL - 256)) | (1 << (ImpalaSqlParser.INTEGER_VALUE - 256)) | (1 << (ImpalaSqlParser.DECIMAL_VALUE - 256)) | (1 << (ImpalaSqlParser.DOUBLE_VALUE - 256)) | (1 << (ImpalaSqlParser.IDENTIFIER - 256)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 256)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 256)) | (1 << (ImpalaSqlParser.DOUBLE_PRECISION - 256)))) !== 0)) {
					{
					this.state = 2049;
					this.columnItem();
					this.state = 2054;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 2050;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 2051;
						this.columnItem();
						}
						}
						this.state = 2056;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2059;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2060;
				this.columnItem();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedQuery(): NamedQueryContext {
		let _localctx: NamedQueryContext = new NamedQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, ImpalaSqlParser.RULE_namedQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2063;
			_localctx._name = this.identifier();
			this.state = 2065;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.LPAREN) {
				{
				this.state = 2064;
				this.columnAliases();
				}
			}

			this.state = 2067;
			this.match(ImpalaSqlParser.KW_AS);
			this.state = 2068;
			this.subQueryRelation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setQuantifier(): SetQuantifierContext {
		let _localctx: SetQuantifierContext = new SetQuantifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, ImpalaSqlParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2070;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_ALL || _la === ImpalaSqlParser.KW_DISTINCT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectItem(): SelectItemContext {
		let _localctx: SelectItemContext = new SelectItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, ImpalaSqlParser.RULE_selectItem);
		let _la: number;
		try {
			this.state = 2084;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 273, this._ctx) ) {
			case 1:
				_localctx = new SelectSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2072;
				this.columnItem();
				this.state = 2077;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 272, this._ctx) ) {
				case 1:
					{
					this.state = 2074;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ImpalaSqlParser.KW_AS) {
						{
						this.state = 2073;
						this.match(ImpalaSqlParser.KW_AS);
						}
					}

					this.state = 2076;
					this.identifier();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new SelectAllContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2079;
				this.qualifiedName();
				this.state = 2080;
				this.match(ImpalaSqlParser.DOT);
				this.state = 2081;
				this.match(ImpalaSqlParser.ASTERISK);
				}
				break;

			case 3:
				_localctx = new SelectAllContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2083;
				this.match(ImpalaSqlParser.ASTERISK);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public relation(): RelationContext;
	public relation(_p: number): RelationContext;
	// @RuleVersion(0)
	public relation(_p?: number): RelationContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RelationContext = new RelationContext(this._ctx, _parentState);
		let _prevctx: RelationContext = _localctx;
		let _startState: number = 282;
		this.enterRecursionRule(_localctx, 282, ImpalaSqlParser.RULE_relation, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new RelationDefaultContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 2087;
			this.sampledRelation();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2102;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 275, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new JoinRelationContext(new RelationContext(_parentctx, _parentState));
					(_localctx as JoinRelationContext)._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_relation);
					this.state = 2089;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 2098;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ImpalaSqlParser.KW_CROSS:
						{
						this.state = 2090;
						this.match(ImpalaSqlParser.KW_CROSS);
						this.state = 2091;
						this.match(ImpalaSqlParser.KW_JOIN);
						this.state = 2092;
						(_localctx as JoinRelationContext)._right = this.sampledRelation();
						}
						break;
					case ImpalaSqlParser.KW_FULL:
					case ImpalaSqlParser.KW_INNER:
					case ImpalaSqlParser.KW_JOIN:
					case ImpalaSqlParser.KW_LEFT:
					case ImpalaSqlParser.KW_RIGHT:
						{
						this.state = 2093;
						this.joinType();
						this.state = 2094;
						this.match(ImpalaSqlParser.KW_JOIN);
						this.state = 2095;
						(_localctx as JoinRelationContext)._rightRelation = this.relation(0);
						this.state = 2096;
						this.joinCriteria();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 2104;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 275, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinType(): JoinTypeContext {
		let _localctx: JoinTypeContext = new JoinTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, ImpalaSqlParser.RULE_joinType);
		let _la: number;
		try {
			this.state = 2136;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 282, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_INNER) {
					{
					this.state = 2105;
					this.match(ImpalaSqlParser.KW_INNER);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2108;
				this.match(ImpalaSqlParser.KW_LEFT);
				this.state = 2110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_INNER) {
					{
					this.state = 2109;
					this.match(ImpalaSqlParser.KW_INNER);
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2112;
				this.match(ImpalaSqlParser.KW_RIGHT);
				this.state = 2114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_INNER) {
					{
					this.state = 2113;
					this.match(ImpalaSqlParser.KW_INNER);
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2116;
				this.match(ImpalaSqlParser.KW_LEFT);
				this.state = 2118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_OUTER) {
					{
					this.state = 2117;
					this.match(ImpalaSqlParser.KW_OUTER);
					}
				}

				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2120;
				this.match(ImpalaSqlParser.KW_RIGHT);
				this.state = 2122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_OUTER) {
					{
					this.state = 2121;
					this.match(ImpalaSqlParser.KW_OUTER);
					}
				}

				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2124;
				this.match(ImpalaSqlParser.KW_FULL);
				this.state = 2126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_OUTER) {
					{
					this.state = 2125;
					this.match(ImpalaSqlParser.KW_OUTER);
					}
				}

				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2128;
				this.match(ImpalaSqlParser.KW_LEFT);
				this.state = 2129;
				this.match(ImpalaSqlParser.KW_SEMI);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2130;
				this.match(ImpalaSqlParser.KW_RIGHT);
				this.state = 2131;
				this.match(ImpalaSqlParser.KW_SEMI);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2132;
				this.match(ImpalaSqlParser.KW_LEFT);
				this.state = 2133;
				this.match(ImpalaSqlParser.KW_ANTI);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2134;
				this.match(ImpalaSqlParser.KW_RIGHT);
				this.state = 2135;
				this.match(ImpalaSqlParser.KW_ANTI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinCriteria(): JoinCriteriaContext {
		let _localctx: JoinCriteriaContext = new JoinCriteriaContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, ImpalaSqlParser.RULE_joinCriteria);
		let _la: number;
		try {
			this.state = 2152;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_ON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2138;
				this.match(ImpalaSqlParser.KW_ON);
				this.state = 2139;
				this.booleanExpression(0);
				}
				break;
			case ImpalaSqlParser.KW_USING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2140;
				this.match(ImpalaSqlParser.KW_USING);
				this.state = 2141;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2142;
				this.identifier();
				this.state = 2147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 2143;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 2144;
					this.identifier();
					}
					}
					this.state = 2149;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2150;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sampledRelation(): SampledRelationContext {
		let _localctx: SampledRelationContext = new SampledRelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, ImpalaSqlParser.RULE_sampledRelation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2154;
			this.aliasedRelation();
			this.state = 2167;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 286, this._ctx) ) {
			case 1:
				{
				this.state = 2155;
				this.match(ImpalaSqlParser.KW_TABLESAMPLE);
				this.state = 2156;
				this.sampleType();
				this.state = 2157;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2158;
				_localctx._percentage = this.expression();
				this.state = 2159;
				this.match(ImpalaSqlParser.RPAREN);
				this.state = 2165;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 285, this._ctx) ) {
				case 1:
					{
					this.state = 2160;
					this.match(ImpalaSqlParser.KW_REPEATABLE);
					this.state = 2161;
					this.match(ImpalaSqlParser.LPAREN);
					this.state = 2162;
					_localctx._seed = this.expression();
					this.state = 2163;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sampleType(): SampleTypeContext {
		let _localctx: SampleTypeContext = new SampleTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, ImpalaSqlParser.RULE_sampleType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2169;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_BERNOULLI || _la === ImpalaSqlParser.KW_SYSTEM)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aliasedRelation(): AliasedRelationContext {
		let _localctx: AliasedRelationContext = new AliasedRelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, ImpalaSqlParser.RULE_aliasedRelation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2171;
			this.relationPrimary();
			this.state = 2179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 289, this._ctx) ) {
			case 1:
				{
				this.state = 2173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_AS) {
					{
					this.state = 2172;
					this.match(ImpalaSqlParser.KW_AS);
					}
				}

				this.state = 2175;
				this.identifier();
				this.state = 2177;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 288, this._ctx) ) {
				case 1:
					{
					this.state = 2176;
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
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnAliases(): ColumnAliasesContext {
		let _localctx: ColumnAliasesContext = new ColumnAliasesContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, ImpalaSqlParser.RULE_columnAliases);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2181;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 2182;
			this.columnNamePath();
			this.state = 2187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParser.COMMA) {
				{
				{
				this.state = 2183;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 2184;
				this.columnNamePath();
				}
				}
				this.state = 2189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2190;
			this.match(ImpalaSqlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createColumnAliases(): CreateColumnAliasesContext {
		let _localctx: CreateColumnAliasesContext = new CreateColumnAliasesContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, ImpalaSqlParser.RULE_createColumnAliases);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2192;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 2193;
			this.columnNamePathCreate();
			this.state = 2198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParser.COMMA) {
				{
				{
				this.state = 2194;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 2195;
				this.columnNamePathCreate();
				}
				}
				this.state = 2200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2201;
			this.match(ImpalaSqlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationPrimary(): RelationPrimaryContext {
		let _localctx: RelationPrimaryContext = new RelationPrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, ImpalaSqlParser.RULE_relationPrimary);
		let _la: number;
		try {
			this.state = 2210;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 293, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2203;
				this.tableOrViewPath();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_LATERAL) {
					{
					this.state = 2204;
					this.match(ImpalaSqlParser.KW_LATERAL);
					}
				}

				this.state = 2207;
				this.subQueryRelation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2208;
				this.unnest();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2209;
				this.parenthesizedRelation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subQueryRelation(): SubQueryRelationContext {
		let _localctx: SubQueryRelationContext = new SubQueryRelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, ImpalaSqlParser.RULE_subQueryRelation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2212;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 2213;
			this.queryStatement();
			this.state = 2214;
			this.match(ImpalaSqlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unnest(): UnnestContext {
		let _localctx: UnnestContext = new UnnestContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, ImpalaSqlParser.RULE_unnest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2216;
			this.match(ImpalaSqlParser.KW_UNNEST);
			this.state = 2217;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 2218;
			this.expression();
			this.state = 2223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParser.COMMA) {
				{
				{
				this.state = 2219;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 2220;
				this.expression();
				}
				}
				this.state = 2225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2226;
			this.match(ImpalaSqlParser.RPAREN);
			this.state = 2229;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 295, this._ctx) ) {
			case 1:
				{
				this.state = 2227;
				this.match(ImpalaSqlParser.KW_WITH);
				this.state = 2228;
				this.match(ImpalaSqlParser.KW_ORDINALITY);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parenthesizedRelation(): ParenthesizedRelationContext {
		let _localctx: ParenthesizedRelationContext = new ParenthesizedRelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, ImpalaSqlParser.RULE_parenthesizedRelation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2231;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 2232;
			this.relation(0);
			this.state = 2233;
			this.match(ImpalaSqlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnItem(): ColumnItemContext {
		let _localctx: ColumnItemContext = new ColumnItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, ImpalaSqlParser.RULE_columnItem);
		try {
			this.state = 2237;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 296, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2235;
				this.columnNamePath();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2236;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, ImpalaSqlParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2239;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public booleanExpression(): BooleanExpressionContext;
	public booleanExpression(_p: number): BooleanExpressionContext;
	// @RuleVersion(0)
	public booleanExpression(_p?: number): BooleanExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BooleanExpressionContext = new BooleanExpressionContext(this._ctx, _parentState);
		let _prevctx: BooleanExpressionContext = _localctx;
		let _startState: number = 310;
		this.enterRecursionRule(_localctx, 310, ImpalaSqlParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2248;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
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
				_localctx = new PredicatedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2242;
				(_localctx as PredicatedContext)._valueExpression = this.valueExpression(0);
				this.state = 2244;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 297, this._ctx) ) {
				case 1:
					{
					this.state = 2243;
					this.predicate((_localctx as PredicatedContext)._valueExpression);
					}
					break;
				}
				}
				break;
			case ImpalaSqlParser.KW_NOT:
				{
				_localctx = new LogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2246;
				this.match(ImpalaSqlParser.KW_NOT);
				this.state = 2247;
				this.booleanExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2258;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 300, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2256;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 299, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_booleanExpression);
						this.state = 2250;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2251;
						(_localctx as LogicalBinaryContext)._operator = this.match(ImpalaSqlParser.KW_AND);
						this.state = 2252;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_booleanExpression);
						this.state = 2253;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2254;
						(_localctx as LogicalBinaryContext)._operator = this.match(ImpalaSqlParser.KW_OR);
						this.state = 2255;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 2260;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 300, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicate(value: ParserRuleContext): PredicateContext {
		let _localctx: PredicateContext = new PredicateContext(this._ctx, this.state, value);
		this.enterRule(_localctx, 312, ImpalaSqlParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 2319;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 309, this._ctx) ) {
			case 1:
				_localctx = new ComparisonContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2261;
				this.comparisonOperator();
				this.state = 2262;
				(_localctx as ComparisonContext)._right = this.valueExpression(0);
				}
				break;

			case 2:
				_localctx = new QuantifiedComparisonContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2264;
				this.comparisonOperator();
				this.state = 2265;
				this.comparisonQuantifier();
				this.state = 2266;
				this.subQueryRelation();
				}
				break;

			case 3:
				_localctx = new BetweenContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_NOT) {
					{
					this.state = 2268;
					this.match(ImpalaSqlParser.KW_NOT);
					}
				}

				this.state = 2271;
				this.match(ImpalaSqlParser.KW_BETWEEN);
				this.state = 2272;
				(_localctx as BetweenContext)._lower = this.valueExpression(0);
				this.state = 2273;
				this.match(ImpalaSqlParser.KW_AND);
				this.state = 2274;
				(_localctx as BetweenContext)._upper = this.valueExpression(0);
				}
				break;

			case 4:
				_localctx = new InListContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_NOT) {
					{
					this.state = 2276;
					this.match(ImpalaSqlParser.KW_NOT);
					}
				}

				this.state = 2279;
				this.match(ImpalaSqlParser.KW_IN);
				this.state = 2280;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2281;
				this.expression();
				this.state = 2286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 2282;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 2283;
					this.expression();
					}
					}
					this.state = 2288;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2289;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 5:
				_localctx = new InSubqueryContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_NOT) {
					{
					this.state = 2291;
					this.match(ImpalaSqlParser.KW_NOT);
					}
				}

				this.state = 2294;
				this.match(ImpalaSqlParser.KW_IN);
				this.state = 2295;
				this.subQueryRelation();
				}
				break;

			case 6:
				_localctx = new LikeContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2297;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_NOT) {
					{
					this.state = 2296;
					this.match(ImpalaSqlParser.KW_NOT);
					}
				}

				this.state = 2299;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParser.KW_ILIKE || _la === ImpalaSqlParser.KW_LIKE || _la === ImpalaSqlParser.KW_RLIKE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2300;
				(_localctx as LikeContext)._pattern = this.valueExpression(0);
				this.state = 2303;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 306, this._ctx) ) {
				case 1:
					{
					this.state = 2301;
					this.match(ImpalaSqlParser.KW_ESCAPE);
					this.state = 2302;
					(_localctx as LikeContext)._escape = this.valueExpression(0);
					}
					break;
				}
				}
				break;

			case 7:
				_localctx = new REGEXPContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2305;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParser.KW_IREGEXP || _la === ImpalaSqlParser.KW_REGEXP)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2306;
				(_localctx as REGEXPContext)._pattern = this.valueExpression(0);
				}
				break;

			case 8:
				_localctx = new NullOrUnKnownOrBooleanPredicateContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2307;
				this.match(ImpalaSqlParser.KW_IS);
				this.state = 2309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_NOT) {
					{
					this.state = 2308;
					this.match(ImpalaSqlParser.KW_NOT);
					}
				}

				this.state = 2311;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParser.KW_FALSE || _la === ImpalaSqlParser.KW_NULL || _la === ImpalaSqlParser.KW_TRUE || _la === ImpalaSqlParser.KW_UNKNOWN)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 9:
				_localctx = new DistinctFromContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2312;
				this.match(ImpalaSqlParser.KW_IS);
				this.state = 2314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_NOT) {
					{
					this.state = 2313;
					this.match(ImpalaSqlParser.KW_NOT);
					}
				}

				this.state = 2316;
				this.match(ImpalaSqlParser.KW_DISTINCT);
				this.state = 2317;
				this.match(ImpalaSqlParser.KW_FROM);
				this.state = 2318;
				(_localctx as DistinctFromContext)._right = this.valueExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public valueExpression(): ValueExpressionContext;
	public valueExpression(_p: number): ValueExpressionContext;
	// @RuleVersion(0)
	public valueExpression(_p?: number): ValueExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ValueExpressionContext = new ValueExpressionContext(this._ctx, _parentState);
		let _prevctx: ValueExpressionContext = _localctx;
		let _startState: number = 314;
		this.enterRecursionRule(_localctx, 314, ImpalaSqlParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2325;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 310, this._ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2322;
				this.primaryExpression(0);
				}
				break;

			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2323;
				(_localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParser.PLUS || _la === ImpalaSqlParser.MINUS)) {
					(_localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2324;
				this.valueExpression(4);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2338;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 312, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2336;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 311, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_valueExpression);
						this.state = 2327;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2328;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & ((1 << (ImpalaSqlParser.ASTERISK - 241)) | (1 << (ImpalaSqlParser.SLASH - 241)) | (1 << (ImpalaSqlParser.PERCENT - 241)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 2329;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_valueExpression);
						this.state = 2330;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2331;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ImpalaSqlParser.PLUS || _la === ImpalaSqlParser.MINUS)) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 2332;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;

					case 3:
						{
						_localctx = new ConcatenationContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ConcatenationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_valueExpression);
						this.state = 2333;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2334;
						this.match(ImpalaSqlParser.CONCAT);
						this.state = 2335;
						(_localctx as ConcatenationContext)._right = this.valueExpression(2);
						}
						break;
					}
					}
				}
				this.state = 2340;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 312, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public primaryExpression(): PrimaryExpressionContext;
	public primaryExpression(_p: number): PrimaryExpressionContext;
	// @RuleVersion(0)
	public primaryExpression(_p?: number): PrimaryExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, _parentState);
		let _prevctx: PrimaryExpressionContext = _localctx;
		let _startState: number = 316;
		this.enterRecursionRule(_localctx, 316, ImpalaSqlParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2587;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 342, this._ctx) ) {
			case 1:
				{
				_localctx = new NullLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2342;
				this.match(ImpalaSqlParser.KW_NULL);
				}
				break;

			case 2:
				{
				_localctx = new IntervalLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2343;
				this.interval();
				}
				break;

			case 3:
				{
				_localctx = new TypeConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2344;
				this.identifier();
				this.state = 2345;
				this.stringLiteral();
				}
				break;

			case 4:
				{
				_localctx = new TypeConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2347;
				this.match(ImpalaSqlParser.DOUBLE_PRECISION);
				this.state = 2348;
				this.stringLiteral();
				}
				break;

			case 5:
				{
				_localctx = new NumericLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2349;
				this.number();
				}
				break;

			case 6:
				{
				_localctx = new BooleanLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2350;
				this.booleanValue();
				}
				break;

			case 7:
				{
				_localctx = new StringLiteralValuesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2351;
				this.stringLiteral();
				}
				break;

			case 8:
				{
				_localctx = new BinaryLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2352;
				this.match(ImpalaSqlParser.BINARY_LITERAL);
				}
				break;

			case 9:
				{
				_localctx = new ParameterContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2353;
				this.match(ImpalaSqlParser.QUESTION);
				}
				break;

			case 10:
				{
				_localctx = new PositionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2354;
				this.match(ImpalaSqlParser.KW_POSITION);
				this.state = 2355;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2356;
				this.valueExpression(0);
				this.state = 2357;
				this.match(ImpalaSqlParser.KW_IN);
				this.state = 2358;
				this.valueExpression(0);
				this.state = 2359;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 11:
				{
				_localctx = new RowConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2361;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2362;
				this.expression();
				this.state = 2365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_AS) {
					{
					this.state = 2363;
					this.match(ImpalaSqlParser.KW_AS);
					this.state = 2364;
					this.type(0);
					}
				}

				this.state = 2375;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 315, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 2367;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 2368;
						this.expression();
						this.state = 2371;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === ImpalaSqlParser.KW_AS) {
							{
							this.state = 2369;
							this.match(ImpalaSqlParser.KW_AS);
							this.state = 2370;
							this.type(0);
							}
						}

						}
						}
					}
					this.state = 2377;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 315, this._ctx);
				}
				this.state = 2378;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 12:
				{
				_localctx = new RowConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2380;
				this.match(ImpalaSqlParser.KW_ROW);
				this.state = 2381;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2382;
				this.expression();
				this.state = 2387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 2383;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 2384;
					this.expression();
					}
					}
					this.state = 2389;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2390;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 13:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2392;
				this.functionNamePath();
				this.state = 2393;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2394;
				this.match(ImpalaSqlParser.ASTERISK);
				this.state = 2395;
				this.match(ImpalaSqlParser.RPAREN);
				this.state = 2397;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 317, this._ctx) ) {
				case 1:
					{
					this.state = 2396;
					this.filter();
					}
					break;
				}
				this.state = 2400;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 318, this._ctx) ) {
				case 1:
					{
					this.state = 2399;
					this.over();
					}
					break;
				}
				}
				break;

			case 14:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2402;
				this.functionNamePath();
				this.state = 2403;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParser.KW_ALL) | (1 << ImpalaSqlParser.KW_ARRAY) | (1 << ImpalaSqlParser.KW_BERNOULLI) | (1 << ImpalaSqlParser.KW_CASE) | (1 << ImpalaSqlParser.KW_CAST))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ImpalaSqlParser.KW_CURRENT_DATE - 40)) | (1 << (ImpalaSqlParser.KW_CURRENT_PATH - 40)) | (1 << (ImpalaSqlParser.KW_CURRENT_TIME - 40)) | (1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 40)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 40)) | (1 << (ImpalaSqlParser.KW_DAY - 40)) | (1 << (ImpalaSqlParser.KW_DAYS - 40)) | (1 << (ImpalaSqlParser.KW_DISTINCT - 40)) | (1 << (ImpalaSqlParser.KW_EXCLUDING - 40)) | (1 << (ImpalaSqlParser.KW_EXISTS - 40)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 40)) | (1 << (ImpalaSqlParser.KW_FALSE - 40)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (ImpalaSqlParser.KW_GROUPING - 88)) | (1 << (ImpalaSqlParser.KW_HOUR - 88)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 88)) | (1 << (ImpalaSqlParser.KW_INTERVAL - 88)) | (1 << (ImpalaSqlParser.KW_KEY - 88)) | (1 << (ImpalaSqlParser.KW_LEFT - 88)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 88)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (ImpalaSqlParser.KW_LOCALTIMESTAMP - 120)) | (1 << (ImpalaSqlParser.KW_MINUTE - 120)) | (1 << (ImpalaSqlParser.KW_MINUTES - 120)) | (1 << (ImpalaSqlParser.KW_MONTH - 120)) | (1 << (ImpalaSqlParser.KW_MONTHS - 120)) | (1 << (ImpalaSqlParser.KW_NFC - 120)) | (1 << (ImpalaSqlParser.KW_NFD - 120)) | (1 << (ImpalaSqlParser.KW_NFKC - 120)) | (1 << (ImpalaSqlParser.KW_NFKD - 120)) | (1 << (ImpalaSqlParser.KW_NORMALIZE - 120)) | (1 << (ImpalaSqlParser.KW_NOT - 120)) | (1 << (ImpalaSqlParser.KW_NULL - 120)) | (1 << (ImpalaSqlParser.KW_OPTION - 120)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 120)) | (1 << (ImpalaSqlParser.KW_POSITION - 120)))) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & ((1 << (ImpalaSqlParser.KW_PRIVILEGES - 153)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 153)) | (1 << (ImpalaSqlParser.KW_REPLACE - 153)) | (1 << (ImpalaSqlParser.KW_RIGHT - 153)) | (1 << (ImpalaSqlParser.KW_ROW - 153)) | (1 << (ImpalaSqlParser.KW_SECOND - 153)) | (1 << (ImpalaSqlParser.KW_SECONDS - 153)) | (1 << (ImpalaSqlParser.KW_SHUTDOWN - 153)))) !== 0) || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & ((1 << (ImpalaSqlParser.KW_SUBSTRING - 186)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 186)) | (1 << (ImpalaSqlParser.KW_TRUE - 186)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 186)) | (1 << (ImpalaSqlParser.KW_TRUNCATE - 186)) | (1 << (ImpalaSqlParser.KW_USER - 186)) | (1 << (ImpalaSqlParser.KW_VIEWS - 186)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (ImpalaSqlParser.KW_YEAR - 219)) | (1 << (ImpalaSqlParser.KW_ORC - 219)) | (1 << (ImpalaSqlParser.PLUS - 219)) | (1 << (ImpalaSqlParser.MINUS - 219)) | (1 << (ImpalaSqlParser.LPAREN - 219)))) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & ((1 << (ImpalaSqlParser.QUESTION - 256)) | (1 << (ImpalaSqlParser.STRING - 256)) | (1 << (ImpalaSqlParser.UNICODE_STRING - 256)) | (1 << (ImpalaSqlParser.BINARY_LITERAL - 256)) | (1 << (ImpalaSqlParser.INTEGER_VALUE - 256)) | (1 << (ImpalaSqlParser.DECIMAL_VALUE - 256)) | (1 << (ImpalaSqlParser.DOUBLE_VALUE - 256)) | (1 << (ImpalaSqlParser.IDENTIFIER - 256)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 256)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 256)) | (1 << (ImpalaSqlParser.DOUBLE_PRECISION - 256)))) !== 0)) {
					{
					this.state = 2405;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ImpalaSqlParser.KW_ALL || _la === ImpalaSqlParser.KW_DISTINCT) {
						{
						this.state = 2404;
						this.setQuantifier();
						}
					}

					this.state = 2407;
					this.expression();
					this.state = 2412;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 2408;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 2409;
						this.expression();
						}
						}
						this.state = 2414;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2427;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_ORDER) {
					{
					this.state = 2417;
					this.match(ImpalaSqlParser.KW_ORDER);
					this.state = 2418;
					this.match(ImpalaSqlParser.KW_BY);
					this.state = 2419;
					this.sortItem();
					this.state = 2424;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 2420;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 2421;
						this.sortItem();
						}
						}
						this.state = 2426;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2429;
				this.match(ImpalaSqlParser.RPAREN);
				this.state = 2431;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 324, this._ctx) ) {
				case 1:
					{
					this.state = 2430;
					this.filter();
					}
					break;
				}
				this.state = 2434;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 325, this._ctx) ) {
				case 1:
					{
					this.state = 2433;
					this.over();
					}
					break;
				}
				}
				break;

			case 15:
				{
				_localctx = new LambdaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2436;
				this.identifier();
				this.state = 2437;
				this.match(ImpalaSqlParser.RIGHT_ARROW);
				this.state = 2438;
				this.expression();
				}
				break;

			case 16:
				{
				_localctx = new LambdaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2440;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2449;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_BERNOULLI || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 43)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 43)) | (1 << (ImpalaSqlParser.KW_DAY - 43)) | (1 << (ImpalaSqlParser.KW_DAYS - 43)) | (1 << (ImpalaSqlParser.KW_EXCLUDING - 43)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 43)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (ImpalaSqlParser.KW_HOUR - 91)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 91)) | (1 << (ImpalaSqlParser.KW_KEY - 91)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (ImpalaSqlParser.KW_MINUTE - 123)) | (1 << (ImpalaSqlParser.KW_MINUTES - 123)) | (1 << (ImpalaSqlParser.KW_MONTH - 123)) | (1 << (ImpalaSqlParser.KW_MONTHS - 123)) | (1 << (ImpalaSqlParser.KW_NFC - 123)) | (1 << (ImpalaSqlParser.KW_NFD - 123)) | (1 << (ImpalaSqlParser.KW_NFKC - 123)) | (1 << (ImpalaSqlParser.KW_NFKD - 123)) | (1 << (ImpalaSqlParser.KW_OPTION - 123)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 123)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 123)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 123)))) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (ImpalaSqlParser.KW_SECOND - 173)) | (1 << (ImpalaSqlParser.KW_SECONDS - 173)) | (1 << (ImpalaSqlParser.KW_SHUTDOWN - 173)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 173)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 173)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 173)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (ImpalaSqlParser.KW_USER - 206)) | (1 << (ImpalaSqlParser.KW_VIEWS - 206)) | (1 << (ImpalaSqlParser.KW_YEAR - 206)) | (1 << (ImpalaSqlParser.KW_ORC - 206)))) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & ((1 << (ImpalaSqlParser.STRING - 258)) | (1 << (ImpalaSqlParser.IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 258)))) !== 0)) {
					{
					this.state = 2441;
					this.identifier();
					this.state = 2446;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 2442;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 2443;
						this.identifier();
						}
						}
						this.state = 2448;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2451;
				this.match(ImpalaSqlParser.RPAREN);
				this.state = 2452;
				this.match(ImpalaSqlParser.RIGHT_ARROW);
				this.state = 2453;
				this.expression();
				}
				break;

			case 17:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2454;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2455;
				this.queryStatement();
				this.state = 2456;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 18:
				{
				_localctx = new ExistsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2458;
				this.match(ImpalaSqlParser.KW_EXISTS);
				this.state = 2459;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2460;
				this.queryStatement();
				this.state = 2461;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 19:
				{
				_localctx = new SimpleCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2463;
				this.match(ImpalaSqlParser.KW_CASE);
				this.state = 2464;
				this.valueExpression(0);
				this.state = 2466;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2465;
					this.whenClause();
					}
					}
					this.state = 2468;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ImpalaSqlParser.KW_WHEN);
				this.state = 2472;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_ELSE) {
					{
					this.state = 2470;
					this.match(ImpalaSqlParser.KW_ELSE);
					this.state = 2471;
					(_localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 2474;
				this.match(ImpalaSqlParser.KW_END);
				}
				break;

			case 20:
				{
				_localctx = new SearchedCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2476;
				this.match(ImpalaSqlParser.KW_CASE);
				this.state = 2478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2477;
					this.whenClause();
					}
					}
					this.state = 2480;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ImpalaSqlParser.KW_WHEN);
				this.state = 2484;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_ELSE) {
					{
					this.state = 2482;
					this.match(ImpalaSqlParser.KW_ELSE);
					this.state = 2483;
					(_localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 2486;
				this.match(ImpalaSqlParser.KW_END);
				}
				break;

			case 21:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2488;
				this.match(ImpalaSqlParser.KW_CAST);
				this.state = 2489;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2490;
				this.expression();
				this.state = 2491;
				this.match(ImpalaSqlParser.KW_AS);
				this.state = 2492;
				this.type(0);
				this.state = 2493;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 22:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2495;
				this.match(ImpalaSqlParser.KW_TRY_CAST);
				this.state = 2496;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2497;
				this.expression();
				this.state = 2498;
				this.match(ImpalaSqlParser.KW_AS);
				this.state = 2499;
				this.type(0);
				this.state = 2500;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 23:
				{
				_localctx = new ArrayConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2502;
				this.match(ImpalaSqlParser.KW_ARRAY);
				this.state = 2503;
				this.match(ImpalaSqlParser.LSQUARE);
				this.state = 2512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParser.KW_ARRAY) | (1 << ImpalaSqlParser.KW_BERNOULLI) | (1 << ImpalaSqlParser.KW_CASE) | (1 << ImpalaSqlParser.KW_CAST))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ImpalaSqlParser.KW_CURRENT_DATE - 40)) | (1 << (ImpalaSqlParser.KW_CURRENT_PATH - 40)) | (1 << (ImpalaSqlParser.KW_CURRENT_TIME - 40)) | (1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 40)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 40)) | (1 << (ImpalaSqlParser.KW_DAY - 40)) | (1 << (ImpalaSqlParser.KW_DAYS - 40)) | (1 << (ImpalaSqlParser.KW_EXCLUDING - 40)) | (1 << (ImpalaSqlParser.KW_EXISTS - 40)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 40)) | (1 << (ImpalaSqlParser.KW_FALSE - 40)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (ImpalaSqlParser.KW_GROUPING - 88)) | (1 << (ImpalaSqlParser.KW_HOUR - 88)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 88)) | (1 << (ImpalaSqlParser.KW_INTERVAL - 88)) | (1 << (ImpalaSqlParser.KW_KEY - 88)) | (1 << (ImpalaSqlParser.KW_LEFT - 88)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 88)))) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (ImpalaSqlParser.KW_LOCALTIMESTAMP - 120)) | (1 << (ImpalaSqlParser.KW_MINUTE - 120)) | (1 << (ImpalaSqlParser.KW_MINUTES - 120)) | (1 << (ImpalaSqlParser.KW_MONTH - 120)) | (1 << (ImpalaSqlParser.KW_MONTHS - 120)) | (1 << (ImpalaSqlParser.KW_NFC - 120)) | (1 << (ImpalaSqlParser.KW_NFD - 120)) | (1 << (ImpalaSqlParser.KW_NFKC - 120)) | (1 << (ImpalaSqlParser.KW_NFKD - 120)) | (1 << (ImpalaSqlParser.KW_NORMALIZE - 120)) | (1 << (ImpalaSqlParser.KW_NOT - 120)) | (1 << (ImpalaSqlParser.KW_NULL - 120)) | (1 << (ImpalaSqlParser.KW_OPTION - 120)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 120)) | (1 << (ImpalaSqlParser.KW_POSITION - 120)))) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & ((1 << (ImpalaSqlParser.KW_PRIVILEGES - 153)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 153)) | (1 << (ImpalaSqlParser.KW_REPLACE - 153)) | (1 << (ImpalaSqlParser.KW_RIGHT - 153)) | (1 << (ImpalaSqlParser.KW_ROW - 153)) | (1 << (ImpalaSqlParser.KW_SECOND - 153)) | (1 << (ImpalaSqlParser.KW_SECONDS - 153)) | (1 << (ImpalaSqlParser.KW_SHUTDOWN - 153)))) !== 0) || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & ((1 << (ImpalaSqlParser.KW_SUBSTRING - 186)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 186)) | (1 << (ImpalaSqlParser.KW_TRUE - 186)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 186)) | (1 << (ImpalaSqlParser.KW_TRUNCATE - 186)) | (1 << (ImpalaSqlParser.KW_USER - 186)) | (1 << (ImpalaSqlParser.KW_VIEWS - 186)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (ImpalaSqlParser.KW_YEAR - 219)) | (1 << (ImpalaSqlParser.KW_ORC - 219)) | (1 << (ImpalaSqlParser.PLUS - 219)) | (1 << (ImpalaSqlParser.MINUS - 219)) | (1 << (ImpalaSqlParser.LPAREN - 219)))) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & ((1 << (ImpalaSqlParser.QUESTION - 256)) | (1 << (ImpalaSqlParser.STRING - 256)) | (1 << (ImpalaSqlParser.UNICODE_STRING - 256)) | (1 << (ImpalaSqlParser.BINARY_LITERAL - 256)) | (1 << (ImpalaSqlParser.INTEGER_VALUE - 256)) | (1 << (ImpalaSqlParser.DECIMAL_VALUE - 256)) | (1 << (ImpalaSqlParser.DOUBLE_VALUE - 256)) | (1 << (ImpalaSqlParser.IDENTIFIER - 256)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 256)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 256)) | (1 << (ImpalaSqlParser.DOUBLE_PRECISION - 256)))) !== 0)) {
					{
					this.state = 2504;
					this.expression();
					this.state = 2509;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 2505;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 2506;
						this.expression();
						}
						}
						this.state = 2511;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2514;
				this.match(ImpalaSqlParser.RSQUARE);
				}
				break;

			case 24:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2515;
				this.identifier();
				}
				break;

			case 25:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2516;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_DATE);
				}
				break;

			case 26:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2517;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_TIME);
				this.state = 2521;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 334, this._ctx) ) {
				case 1:
					{
					this.state = 2518;
					this.match(ImpalaSqlParser.LPAREN);
					this.state = 2519;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
					this.state = 2520;
					this.match(ImpalaSqlParser.RPAREN);
					}
					break;
				}
				}
				break;

			case 27:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2523;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_TIMESTAMP);
				this.state = 2527;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 335, this._ctx) ) {
				case 1:
					{
					this.state = 2524;
					this.match(ImpalaSqlParser.LPAREN);
					this.state = 2525;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
					this.state = 2526;
					this.match(ImpalaSqlParser.RPAREN);
					}
					break;
				}
				}
				break;

			case 28:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2529;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_LOCALTIME);
				this.state = 2533;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 336, this._ctx) ) {
				case 1:
					{
					this.state = 2530;
					this.match(ImpalaSqlParser.LPAREN);
					this.state = 2531;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
					this.state = 2532;
					this.match(ImpalaSqlParser.RPAREN);
					}
					break;
				}
				}
				break;

			case 29:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2535;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_LOCALTIMESTAMP);
				this.state = 2539;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 337, this._ctx) ) {
				case 1:
					{
					this.state = 2536;
					this.match(ImpalaSqlParser.LPAREN);
					this.state = 2537;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
					this.state = 2538;
					this.match(ImpalaSqlParser.RPAREN);
					}
					break;
				}
				}
				break;

			case 30:
				{
				_localctx = new CurrentUserContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2541;
				(_localctx as CurrentUserContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_USER);
				}
				break;

			case 31:
				{
				_localctx = new CurrentPathContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2542;
				(_localctx as CurrentPathContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_PATH);
				}
				break;

			case 32:
				{
				_localctx = new SubstringContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2543;
				this.match(ImpalaSqlParser.KW_SUBSTRING);
				this.state = 2544;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2545;
				this.valueExpression(0);
				this.state = 2546;
				this.match(ImpalaSqlParser.KW_FROM);
				this.state = 2547;
				this.valueExpression(0);
				this.state = 2550;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_FOR) {
					{
					this.state = 2548;
					this.match(ImpalaSqlParser.KW_FOR);
					this.state = 2549;
					this.valueExpression(0);
					}
				}

				this.state = 2552;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 33:
				{
				_localctx = new NormalizeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2554;
				this.match(ImpalaSqlParser.KW_NORMALIZE);
				this.state = 2555;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2556;
				this.valueExpression(0);
				this.state = 2559;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.COMMA) {
					{
					this.state = 2557;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 2558;
					this.normalForm();
					}
				}

				this.state = 2561;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 34:
				{
				_localctx = new ExtractContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2563;
				this.match(ImpalaSqlParser.KW_EXTRACT);
				this.state = 2564;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2565;
				this.identifier();
				this.state = 2566;
				this.match(ImpalaSqlParser.KW_FROM);
				this.state = 2567;
				this.valueExpression(0);
				this.state = 2568;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 35:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2570;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2571;
				this.expression();
				this.state = 2572;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 36:
				{
				_localctx = new GroupingOperationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2574;
				this.match(ImpalaSqlParser.KW_GROUPING);
				this.state = 2575;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_BERNOULLI || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 43)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 43)) | (1 << (ImpalaSqlParser.KW_DAY - 43)) | (1 << (ImpalaSqlParser.KW_DAYS - 43)) | (1 << (ImpalaSqlParser.KW_EXCLUDING - 43)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 43)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (ImpalaSqlParser.KW_HOUR - 91)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 91)) | (1 << (ImpalaSqlParser.KW_KEY - 91)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (ImpalaSqlParser.KW_MINUTE - 123)) | (1 << (ImpalaSqlParser.KW_MINUTES - 123)) | (1 << (ImpalaSqlParser.KW_MONTH - 123)) | (1 << (ImpalaSqlParser.KW_MONTHS - 123)) | (1 << (ImpalaSqlParser.KW_NFC - 123)) | (1 << (ImpalaSqlParser.KW_NFD - 123)) | (1 << (ImpalaSqlParser.KW_NFKC - 123)) | (1 << (ImpalaSqlParser.KW_NFKD - 123)) | (1 << (ImpalaSqlParser.KW_OPTION - 123)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 123)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 123)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 123)))) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (ImpalaSqlParser.KW_SECOND - 173)) | (1 << (ImpalaSqlParser.KW_SECONDS - 173)) | (1 << (ImpalaSqlParser.KW_SHUTDOWN - 173)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 173)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 173)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 173)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (ImpalaSqlParser.KW_USER - 206)) | (1 << (ImpalaSqlParser.KW_VIEWS - 206)) | (1 << (ImpalaSqlParser.KW_YEAR - 206)) | (1 << (ImpalaSqlParser.KW_ORC - 206)))) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & ((1 << (ImpalaSqlParser.STRING - 258)) | (1 << (ImpalaSqlParser.IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 258)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 258)))) !== 0)) {
					{
					this.state = 2576;
					this.qualifiedName();
					this.state = 2581;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 2577;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 2578;
						this.qualifiedName();
						}
						}
						this.state = 2583;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2586;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2599;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 344, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2597;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 343, this._ctx) ) {
					case 1:
						{
						_localctx = new SubscriptContext(new PrimaryExpressionContext(_parentctx, _parentState));
						(_localctx as SubscriptContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_primaryExpression);
						this.state = 2589;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 2590;
						this.match(ImpalaSqlParser.LSQUARE);
						this.state = 2591;
						(_localctx as SubscriptContext)._index = this.valueExpression(0);
						this.state = 2592;
						this.match(ImpalaSqlParser.RSQUARE);
						}
						break;

					case 2:
						{
						_localctx = new DereferenceContext(new PrimaryExpressionContext(_parentctx, _parentState));
						(_localctx as DereferenceContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_primaryExpression);
						this.state = 2594;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 2595;
						this.match(ImpalaSqlParser.DOT);
						this.state = 2596;
						(_localctx as DereferenceContext)._fieldName = this.identifier();
						}
						break;
					}
					}
				}
				this.state = 2601;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 344, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, ImpalaSqlParser.RULE_stringLiteral);
		try {
			this.state = 2608;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.STRING:
				_localctx = new BasicStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2602;
				this.match(ImpalaSqlParser.STRING);
				}
				break;
			case ImpalaSqlParser.UNICODE_STRING:
				_localctx = new UnicodeStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2603;
				this.match(ImpalaSqlParser.UNICODE_STRING);
				this.state = 2606;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 345, this._ctx) ) {
				case 1:
					{
					this.state = 2604;
					this.match(ImpalaSqlParser.KW_UESCAPE);
					this.state = 2605;
					this.match(ImpalaSqlParser.STRING);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, ImpalaSqlParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2610;
			_la = this._input.LA(1);
			if (!(((((_la - 233)) & ~0x1F) === 0 && ((1 << (_la - 233)) & ((1 << (ImpalaSqlParser.EQ - 233)) | (1 << (ImpalaSqlParser.NEQ - 233)) | (1 << (ImpalaSqlParser.LT - 233)) | (1 << (ImpalaSqlParser.LTE - 233)) | (1 << (ImpalaSqlParser.GT - 233)) | (1 << (ImpalaSqlParser.GTE - 233)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonQuantifier(): ComparisonQuantifierContext {
		let _localctx: ComparisonQuantifierContext = new ComparisonQuantifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, ImpalaSqlParser.RULE_comparisonQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2612;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_ALL || _la === ImpalaSqlParser.KW_ANY || _la === ImpalaSqlParser.KW_SOME)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanValue(): BooleanValueContext {
		let _localctx: BooleanValueContext = new BooleanValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, ImpalaSqlParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2614;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_FALSE || _la === ImpalaSqlParser.KW_TRUE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interval(): IntervalContext {
		let _localctx: IntervalContext = new IntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, ImpalaSqlParser.RULE_interval);
		try {
			this.state = 2630;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 347, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2616;
				this.match(ImpalaSqlParser.INTEGER_VALUE);
				this.state = 2617;
				this.intervalField();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2618;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2619;
				this.match(ImpalaSqlParser.INTEGER_VALUE);
				this.state = 2620;
				this.match(ImpalaSqlParser.RPAREN);
				this.state = 2621;
				this.intervalField();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2622;
				this.match(ImpalaSqlParser.KW_INTERVAL);
				this.state = 2623;
				this.match(ImpalaSqlParser.INTEGER_VALUE);
				this.state = 2624;
				this.intervalField();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2625;
				this.match(ImpalaSqlParser.KW_INTERVAL);
				this.state = 2626;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2627;
				this.match(ImpalaSqlParser.INTEGER_VALUE);
				this.state = 2628;
				this.match(ImpalaSqlParser.RPAREN);
				this.state = 2629;
				this.intervalField();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intervalField(): IntervalFieldContext {
		let _localctx: IntervalFieldContext = new IntervalFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, ImpalaSqlParser.RULE_intervalField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2632;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_DAY || _la === ImpalaSqlParser.KW_DAYS || _la === ImpalaSqlParser.KW_HOUR || _la === ImpalaSqlParser.KW_HOURS || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (ImpalaSqlParser.KW_MINUTE - 123)) | (1 << (ImpalaSqlParser.KW_MINUTES - 123)) | (1 << (ImpalaSqlParser.KW_MONTH - 123)) | (1 << (ImpalaSqlParser.KW_MONTHS - 123)))) !== 0) || _la === ImpalaSqlParser.KW_SECOND || _la === ImpalaSqlParser.KW_SECONDS || _la === ImpalaSqlParser.KW_YEAR || _la === ImpalaSqlParser.KW_YEARS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalForm(): NormalFormContext {
		let _localctx: NormalFormContext = new NormalFormContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, ImpalaSqlParser.RULE_normalForm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2634;
			_la = this._input.LA(1);
			if (!(((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (ImpalaSqlParser.KW_NFC - 128)) | (1 << (ImpalaSqlParser.KW_NFD - 128)) | (1 << (ImpalaSqlParser.KW_NFKC - 128)) | (1 << (ImpalaSqlParser.KW_NFKD - 128)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	// @RuleVersion(0)
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 332;
		this.enterRecursionRule(_localctx, 332, ImpalaSqlParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2680;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_ARRAY:
				{
				this.state = 2637;
				this.match(ImpalaSqlParser.KW_ARRAY);
				this.state = 2638;
				this.match(ImpalaSqlParser.LT);
				this.state = 2639;
				this.type(0);
				this.state = 2640;
				this.match(ImpalaSqlParser.GT);
				}
				break;
			case ImpalaSqlParser.KW_MAP:
				{
				this.state = 2642;
				this.match(ImpalaSqlParser.KW_MAP);
				this.state = 2643;
				this.match(ImpalaSqlParser.LT);
				this.state = 2644;
				this.type(0);
				this.state = 2645;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 2646;
				this.type(0);
				this.state = 2647;
				this.match(ImpalaSqlParser.GT);
				}
				break;
			case ImpalaSqlParser.KW_STRUCT:
				{
				this.state = 2649;
				this.match(ImpalaSqlParser.KW_STRUCT);
				this.state = 2650;
				this.match(ImpalaSqlParser.LT);
				this.state = 2651;
				this.identifier();
				this.state = 2652;
				this.match(ImpalaSqlParser.COLON);
				this.state = 2653;
				this.type(0);
				this.state = 2661;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 2654;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 2655;
					this.identifier();
					this.state = 2656;
					this.match(ImpalaSqlParser.COLON);
					this.state = 2657;
					this.type(0);
					}
					}
					this.state = 2663;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2664;
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
				this.state = 2666;
				this.baseType();
				this.state = 2678;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 350, this._ctx) ) {
				case 1:
					{
					this.state = 2667;
					this.match(ImpalaSqlParser.LPAREN);
					this.state = 2668;
					this.typeParameter();
					this.state = 2673;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 2669;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 2670;
						this.typeParameter();
						}
						}
						this.state = 2675;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2676;
					this.match(ImpalaSqlParser.RPAREN);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2686;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 352, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_type);
					this.state = 2682;
					if (!(this.precpred(this._ctx, 5))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
					}
					this.state = 2683;
					this.match(ImpalaSqlParser.KW_ARRAY);
					}
					}
				}
				this.state = 2688;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 352, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, ImpalaSqlParser.RULE_typeParameter);
		try {
			this.state = 2691;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.INTEGER_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2689;
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
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2690;
				this.type(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public baseType(): BaseTypeContext {
		let _localctx: BaseTypeContext = new BaseTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, ImpalaSqlParser.RULE_baseType);
		try {
			this.state = 2697;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.TIME_WITH_TIME_ZONE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2693;
				this.match(ImpalaSqlParser.TIME_WITH_TIME_ZONE);
				}
				break;
			case ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2694;
				this.match(ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE);
				}
				break;
			case ImpalaSqlParser.DOUBLE_PRECISION:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2695;
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
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2696;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenClause(): WhenClauseContext {
		let _localctx: WhenClauseContext = new WhenClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, ImpalaSqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2699;
			this.match(ImpalaSqlParser.KW_WHEN);
			this.state = 2700;
			_localctx._condition = this.expression();
			this.state = 2701;
			this.match(ImpalaSqlParser.KW_THEN);
			this.state = 2702;
			_localctx._result = this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filter(): FilterContext {
		let _localctx: FilterContext = new FilterContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, ImpalaSqlParser.RULE_filter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2704;
			this.match(ImpalaSqlParser.KW_FILTER);
			this.state = 2705;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 2706;
			this.match(ImpalaSqlParser.KW_WHERE);
			this.state = 2707;
			this.booleanExpression(0);
			this.state = 2708;
			this.match(ImpalaSqlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public over(): OverContext {
		let _localctx: OverContext = new OverContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, ImpalaSqlParser.RULE_over);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2710;
			this.match(ImpalaSqlParser.KW_OVER);
			this.state = 2711;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 2722;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 2712;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 2713;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 2714;
				_localctx._expression = this.expression();
				_localctx._partition.push(_localctx._expression);
				this.state = 2719;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 2715;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 2716;
					_localctx._expression = this.expression();
					_localctx._partition.push(_localctx._expression);
					}
					}
					this.state = 2721;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 2734;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_ORDER) {
				{
				this.state = 2724;
				this.match(ImpalaSqlParser.KW_ORDER);
				this.state = 2725;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 2726;
				this.sortItem();
				this.state = 2731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 2727;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 2728;
					this.sortItem();
					}
					}
					this.state = 2733;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 2737;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_RANGE || _la === ImpalaSqlParser.KW_ROWS) {
				{
				this.state = 2736;
				this.windowFrame();
				}
			}

			this.state = 2739;
			this.match(ImpalaSqlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowFrame(): WindowFrameContext {
		let _localctx: WindowFrameContext = new WindowFrameContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, ImpalaSqlParser.RULE_windowFrame);
		try {
			this.state = 2757;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 360, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2741;
				_localctx._frameType = this.match(ImpalaSqlParser.KW_RANGE);
				this.state = 2742;
				_localctx._start_ = this.frameBound();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2743;
				_localctx._frameType = this.match(ImpalaSqlParser.KW_ROWS);
				this.state = 2744;
				_localctx._start_ = this.frameBound();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2745;
				_localctx._frameType = this.match(ImpalaSqlParser.KW_RANGE);
				this.state = 2746;
				this.match(ImpalaSqlParser.KW_BETWEEN);
				this.state = 2747;
				_localctx._start_ = this.frameBound();
				this.state = 2748;
				this.match(ImpalaSqlParser.KW_AND);
				this.state = 2749;
				_localctx._end = this.frameBound();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2751;
				_localctx._frameType = this.match(ImpalaSqlParser.KW_ROWS);
				this.state = 2752;
				this.match(ImpalaSqlParser.KW_BETWEEN);
				this.state = 2753;
				_localctx._start_ = this.frameBound();
				this.state = 2754;
				this.match(ImpalaSqlParser.KW_AND);
				this.state = 2755;
				_localctx._end = this.frameBound();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public frameBound(): FrameBoundContext {
		let _localctx: FrameBoundContext = new FrameBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, ImpalaSqlParser.RULE_frameBound);
		let _la: number;
		try {
			this.state = 2768;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 361, this._ctx) ) {
			case 1:
				_localctx = new UnboundedFrameContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2759;
				this.match(ImpalaSqlParser.KW_UNBOUNDED);
				this.state = 2760;
				(_localctx as UnboundedFrameContext)._boundType = this.match(ImpalaSqlParser.KW_PRECEDING);
				}
				break;

			case 2:
				_localctx = new UnboundedFrameContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2761;
				this.match(ImpalaSqlParser.KW_UNBOUNDED);
				this.state = 2762;
				(_localctx as UnboundedFrameContext)._boundType = this.match(ImpalaSqlParser.KW_FOLLOWING);
				}
				break;

			case 3:
				_localctx = new CurrentRowBoundContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2763;
				this.match(ImpalaSqlParser.KW_CURRENT);
				this.state = 2764;
				this.match(ImpalaSqlParser.KW_ROW);
				}
				break;

			case 4:
				_localctx = new BoundedFrameContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2765;
				this.expression();
				this.state = 2766;
				(_localctx as BoundedFrameContext)._boundType = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParser.KW_FOLLOWING || _la === ImpalaSqlParser.KW_PRECEDING)) {
					(_localctx as BoundedFrameContext)._boundType = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pathElement(): PathElementContext {
		let _localctx: PathElementContext = new PathElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, ImpalaSqlParser.RULE_pathElement);
		try {
			this.state = 2775;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 362, this._ctx) ) {
			case 1:
				_localctx = new QualifiedArgumentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2770;
				this.identifier();
				this.state = 2771;
				this.match(ImpalaSqlParser.DOT);
				this.state = 2772;
				this.identifier();
				}
				break;

			case 2:
				_localctx = new UnqualifiedArgumentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2774;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pathSpecification(): PathSpecificationContext {
		let _localctx: PathSpecificationContext = new PathSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, ImpalaSqlParser.RULE_pathSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2777;
			this.pathElement();
			this.state = 2782;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParser.COMMA) {
				{
				{
				this.state = 2778;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 2779;
				this.pathElement();
				}
				}
				this.state = 2784;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public privilege(): PrivilegeContext {
		let _localctx: PrivilegeContext = new PrivilegeContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, ImpalaSqlParser.RULE_privilege);
		let _la: number;
		try {
			this.state = 2798;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_ALL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2785;
				this.match(ImpalaSqlParser.KW_ALL);
				}
				break;
			case ImpalaSqlParser.KW_ALTER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2786;
				this.match(ImpalaSqlParser.KW_ALTER);
				}
				break;
			case ImpalaSqlParser.KW_DROP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2787;
				this.match(ImpalaSqlParser.KW_DROP);
				}
				break;
			case ImpalaSqlParser.KW_CREATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2788;
				this.match(ImpalaSqlParser.KW_CREATE);
				}
				break;
			case ImpalaSqlParser.KW_INSERT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2789;
				this.match(ImpalaSqlParser.KW_INSERT);
				}
				break;
			case ImpalaSqlParser.KW_REFRESH:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2790;
				this.match(ImpalaSqlParser.KW_REFRESH);
				}
				break;
			case ImpalaSqlParser.KW_SELECT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2791;
				this.match(ImpalaSqlParser.KW_SELECT);
				this.state = 2796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.LPAREN) {
					{
					this.state = 2792;
					this.match(ImpalaSqlParser.LPAREN);
					this.state = 2793;
					_localctx._columnName = this.identifier();
					this.state = 2794;
					this.match(ImpalaSqlParser.RPAREN);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectType(): ObjectTypeContext {
		let _localctx: ObjectTypeContext = new ObjectTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, ImpalaSqlParser.RULE_objectType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2800;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_DATABASE || _la === ImpalaSqlParser.KW_SERVER || _la === ImpalaSqlParser.KW_TABLE || _la === ImpalaSqlParser.KW_URI)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, ImpalaSqlParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2802;
			this.identifier();
			this.state = 2807;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 366, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2803;
					this.match(ImpalaSqlParser.DOT);
					this.state = 2804;
					this.identifier();
					}
					}
				}
				this.state = 2809;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 366, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public principal(): PrincipalContext {
		let _localctx: PrincipalContext = new PrincipalContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, ImpalaSqlParser.RULE_principal);
		try {
			this.state = 2816;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_ROLE:
				_localctx = new RolePrincipalContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2810;
				this.match(ImpalaSqlParser.KW_ROLE);
				this.state = 2811;
				this.identifier();
				}
				break;
			case ImpalaSqlParser.KW_USER:
				_localctx = new UserPrincipalContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2812;
				this.match(ImpalaSqlParser.KW_USER);
				this.state = 2813;
				this.identifier();
				}
				break;
			case ImpalaSqlParser.KW_GROUP:
				_localctx = new GroupPrincipalContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2814;
				this.match(ImpalaSqlParser.KW_GROUP);
				this.state = 2815;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, ImpalaSqlParser.RULE_identifier);
		try {
			this.state = 2823;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.IDENTIFIER:
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2818;
				this.match(ImpalaSqlParser.IDENTIFIER);
				}
				break;
			case ImpalaSqlParser.STRING:
				_localctx = new QuotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2819;
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
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2820;
				this.nonReserved();
				}
				break;
			case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
				_localctx = new BackQuotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2821;
				this.match(ImpalaSqlParser.BACKQUOTED_IDENTIFIER);
				}
				break;
			case ImpalaSqlParser.DIGIT_IDENTIFIER:
				_localctx = new DigitIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2822;
				this.match(ImpalaSqlParser.DIGIT_IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, ImpalaSqlParser.RULE_number);
		let _la: number;
		try {
			this.state = 2837;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 372, this._ctx) ) {
			case 1:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2826;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.MINUS) {
					{
					this.state = 2825;
					this.match(ImpalaSqlParser.MINUS);
					}
				}

				this.state = 2828;
				this.match(ImpalaSqlParser.DECIMAL_VALUE);
				}
				break;

			case 2:
				_localctx = new DoubleLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2830;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.MINUS) {
					{
					this.state = 2829;
					this.match(ImpalaSqlParser.MINUS);
					}
				}

				this.state = 2832;
				this.match(ImpalaSqlParser.DOUBLE_VALUE);
				}
				break;

			case 3:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2834;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.MINUS) {
					{
					this.state = 2833;
					this.match(ImpalaSqlParser.MINUS);
					}
				}

				this.state = 2836;
				this.match(ImpalaSqlParser.INTEGER_VALUE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext {
		let _localctx: ReservedKeywordsUsedAsFuncNameContext = new ReservedKeywordsUsedAsFuncNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, ImpalaSqlParser.RULE_reservedKeywordsUsedAsFuncName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2839;
			_la = this._input.LA(1);
			if (!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (ImpalaSqlParser.KW_CASE - 28)) | (1 << (ImpalaSqlParser.KW_CAST - 28)) | (1 << (ImpalaSqlParser.KW_CURRENT_DATE - 28)) | (1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 28)) | (1 << (ImpalaSqlParser.KW_DAY - 28)))) !== 0) || _la === ImpalaSqlParser.KW_EXTRACT || _la === ImpalaSqlParser.KW_HOUR || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (ImpalaSqlParser.KW_LEFT - 114)) | (1 << (ImpalaSqlParser.KW_MINUTE - 114)) | (1 << (ImpalaSqlParser.KW_MONTH - 114)))) !== 0) || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & ((1 << (ImpalaSqlParser.KW_REPLACE - 159)) | (1 << (ImpalaSqlParser.KW_RIGHT - 159)) | (1 << (ImpalaSqlParser.KW_SECOND - 159)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 159)))) !== 0) || ((((_la - 198)) & ~0x1F) === 0 && ((1 << (_la - 198)) & ((1 << (ImpalaSqlParser.KW_TRUNCATE - 198)) | (1 << (ImpalaSqlParser.KW_USER - 198)) | (1 << (ImpalaSqlParser.KW_YEAR - 198)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonReserved(): NonReservedContext {
		let _localctx: NonReservedContext = new NonReservedContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, ImpalaSqlParser.RULE_nonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2841;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_BERNOULLI || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 43)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 43)) | (1 << (ImpalaSqlParser.KW_DAY - 43)) | (1 << (ImpalaSqlParser.KW_DAYS - 43)) | (1 << (ImpalaSqlParser.KW_EXCLUDING - 43)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 43)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (ImpalaSqlParser.KW_HOUR - 91)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 91)) | (1 << (ImpalaSqlParser.KW_KEY - 91)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 91)))) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (ImpalaSqlParser.KW_MINUTE - 123)) | (1 << (ImpalaSqlParser.KW_MINUTES - 123)) | (1 << (ImpalaSqlParser.KW_MONTH - 123)) | (1 << (ImpalaSqlParser.KW_MONTHS - 123)) | (1 << (ImpalaSqlParser.KW_NFC - 123)) | (1 << (ImpalaSqlParser.KW_NFD - 123)) | (1 << (ImpalaSqlParser.KW_NFKC - 123)) | (1 << (ImpalaSqlParser.KW_NFKD - 123)) | (1 << (ImpalaSqlParser.KW_OPTION - 123)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 123)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 123)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 123)))) !== 0) || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (ImpalaSqlParser.KW_SECOND - 173)) | (1 << (ImpalaSqlParser.KW_SECONDS - 173)) | (1 << (ImpalaSqlParser.KW_SHUTDOWN - 173)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 173)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 173)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 173)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (ImpalaSqlParser.KW_USER - 206)) | (1 << (ImpalaSqlParser.KW_VIEWS - 206)) | (1 << (ImpalaSqlParser.KW_YEAR - 206)) | (1 << (ImpalaSqlParser.KW_ORC - 206)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 131:
			return this.queryTerm_sempred(_localctx as QueryTermContext, predIndex);

		case 141:
			return this.relation_sempred(_localctx as RelationContext, predIndex);

		case 155:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 157:
			return this.valueExpression_sempred(_localctx as ValueExpressionContext, predIndex);

		case 158:
			return this.primaryExpression_sempred(_localctx as PrimaryExpressionContext, predIndex);

		case 166:
			return this.type_sempred(_localctx as TypeContext, predIndex);
		}
		return true;
	}
	private queryTerm_sempred(_localctx: QueryTermContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relation_sempred(_localctx: RelationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private booleanExpression_sempred(_localctx: BooleanExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);

		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private valueExpression_sempred(_localctx: ValueExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 3);

		case 6:
			return this.precpred(this._ctx, 2);

		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private primaryExpression_sempred(_localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 15);

		case 9:
			return this.precpred(this._ctx, 13);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 6;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u0113\u0B1E\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x07\x04\u017B\n\x04\f\x04\x0E\x04\u017E\v\x04\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x05\x06\u0184\n\x06\x03\x06\x03\x06\x05\x06\u0188\n\x06" +
		"\x03\x06\x03\x06\x05\x06\u018C\n\x06\x03\x06\x03\x06\x05\x06\u0190\n\x06" +
		"\x03\x06\x03\x06\x05\x06\u0194\n\x06\x03\x06\x03\x06\x05\x06\u0198\n\x06" +
		"\x03\x06\x03\x06\x05\x06\u019C\n\x06\x03\x06\x03\x06\x05\x06\u01A0\n\x06" +
		"\x03\x06\x03\x06\x05\x06\u01A4\n\x06\x03\x06\x03\x06\x05\x06\u01A8\n\x06" +
		"\x03\x06\x03\x06\x05\x06\u01AC\n\x06\x03\x06\x03\x06\x05\x06\u01B0\n\x06" +
		"\x03\x06\x03\x06\x05\x06\u01B4\n\x06\x03\x06\x03\x06\x05\x06\u01B8\n\x06" +
		"\x03\x06\x03\x06\x05\x06\u01BC\n\x06\x03\x06\x03\x06\x05\x06\u01C0\n\x06" +
		"\x03\x06\x03\x06\x05\x06\u01C4\n\x06\x03\x06\x03\x06\x05\x06\u01C8\n\x06" +
		"\x03\x06\x03\x06\x05\x06\u01CC\n\x06\x03\x06\x03\x06\x05\x06\u01D0\n\x06" +
		"\x03\x06\x03\x06\x05\x06\u01D4\n\x06\x03\x06\x03\x06\x05\x06\u01D8\n\x06" +
		"\x05\x06\u01DA\n\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x05\b\u01E7\n\b\x03\t\x03\t\x05\t\u01EB\n\t\x03\t" +
		"\x03\t\x05\t\u01EF\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u01F6\n\t\f" +
		"\t\x0E\t\u01F9\v\t\x03\t\x03\t\x05\t\u01FD\n\t\x03\t\x03\t\x05\t\u0201" +
		"\n\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0207\n\t\x05\t\u0209\n\t\x03\t\x03" +
		"\t\x03\t\x05\t\u020E\n\t\x03\n\x03\n\x05\n\u0212\n\n\x03\n\x03\n\x05\n" +
		"\u0216\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u021D\n\n\x03\n\x03\n\x03" +
		"\n\x05\n\u0222\n\n\x03\n\x03\n\x03\v\x03\v\x05\v\u0228\n\v\x03\v\x03\v" +
		"\x05\v\u022C\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u0233\n\v\f\v\x0E" +
		"\v\u0236\v\v\x03\v\x03\v\x03\v\x03\v\x05\v\u023C\n\v\x03\v\x03\v\x05\v" +
		"\u0240\n\v\x03\v\x03\v\x03\v\x05\v\u0245\n\v\x05\v\u0247\n\v\x03\v\x03" +
		"\v\x03\v\x05\v\u024C\n\v\x03\v\x03\v\x05\v\u0250\n\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x05\v\u0257\n\v\x03\v\x03\v\x05\v\u025B\n\v\x03\f\x03\f\x03" +
		"\f\x05\f\u0260\n\f\x03\f\x03\f\x05\f\u0264\n\f\x03\f\x03\f\x05\f\u0268" +
		"\n\f\x03\f\x03\f\x05\f\u026C\n\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x05" +
		"\r\u0274\n\r\x03\r\x03\r\x03\r\x05\r\u0279\n\r\x03\r\x03\r\x05\r\u027D" +
		"\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0F\u0285\n\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\u0289\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x07\x0F\u0290\n\x0F\f\x0F\x0E\x0F\u0293\v\x0F\x05\x0F\u0295\n\x0F" +
		"\x03\x0F\x05\x0F\u0298\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u029E" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u02A5\n\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05" +
		"\x0F\u02B0\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u02B5\n\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\u02BA\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u02BF" +
		"\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u02C4\n\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x07\x10\u02CB\n\x10\f\x10\x0E\x10\u02CE\v\x10\x05" +
		"\x10\u02D0\n\x10\x03\x10\x05\x10\u02D3\n\x10\x03\x10\x03\x10\x05\x10\u02D7" +
		"\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u02F1" +
		"\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u030B" +
		"\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14" +
		"\u0314\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x05\x14\u031E\n\x14\x03\x14\x05\x14\u0321\n\x14\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x05\x16\u032F\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x05\x18\u0341\n\x18\x05\x18\u0343\n\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x07\x18\u034A\n\x18\f\x18\x0E\x18\u034D\v\x18\x03\x18" +
		"\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0357" +
		"\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A" +
		"\u0360\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0367\n\x1A" +
		"\x03\x1A\x03\x1A\x05\x1A\u036B\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x05\x1B\u0372\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0378" +
		"\n\x1B\x03\x1B\x05\x1B\u037B\n\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0380" +
		"\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0387\n\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x05\x1C\u0395\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u03A2" +
		"\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u03A7\n\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u03AC\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u03B2" +
		"\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x05$\u03D6\n$\x03" +
		"$\x05$\u03D9\n$\x03$\x03$\x03%\x03%\x05%\u03DF\n%\x03%\x05%\u03E2\n%\x03" +
		"%\x03%\x03&\x03&\x05&\u03E8\n&\x03\'\x03\'\x03\'\x03\'\x05\'\u03EE\n\'" +
		"\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u03FA" +
		"\n\'\x05\'\u03FC\n\'\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u0404\n(\x03)" +
		"\x03)\x03)\x03)\x03)\x03)\x05)\u040C\n)\x03*\x03*\x03*\x05*\u0411\n*\x03" +
		"*\x03*\x05*\u0415\n*\x03+\x03+\x03+\x05+\u041A\n+\x03+\x03+\x03,\x03," +
		"\x03,\x05,\u0421\n,\x03,\x03,\x05,\u0425\n,\x03-\x03-\x05-\u0429\n-\x03" +
		"-\x03-\x03-\x03-\x05-\u042F\n-\x03.\x03.\x05.\u0433\n.\x03.\x03.\x05." +
		"\u0437\n.\x03.\x03.\x03.\x03.\x03.\x07.\u043E\n.\f.\x0E.\u0441\v.\x05" +
		".\u0443\n.\x03.\x05.\u0446\n.\x03/\x03/\x03/\x03/\x030\x030\x050\u044E" +
		"\n0\x031\x031\x031\x031\x031\x031\x031\x032\x032\x032\x032\x032\x052\u045C" +
		"\n2\x032\x032\x032\x033\x033\x053\u0463\n3\x034\x034\x034\x034\x034\x03" +
		"4\x034\x035\x035\x035\x035\x055\u0470\n5\x035\x035\x035\x035\x055\u0476" +
		"\n5\x035\x035\x035\x055\u047B\n5\x035\x055\u047E\n5\x036\x056\u0481\n" +
		"6\x036\x036\x036\x056\u0486\n6\x036\x036\x056\u048A\n6\x036\x036\x036" +
		"\x036\x036\x076\u0491\n6\f6\x0E6\u0494\v6\x036\x036\x056\u0498\n6\x03" +
		"6\x036\x037\x037\x057\u049E\n7\x038\x038\x058\u04A2\n8\x038\x038\x038" +
		"\x058\u04A7\n8\x039\x039\x039\x059\u04AC\n9\x039\x059\u04AF\n9\x039\x03" +
		"9\x039\x039\x079\u04B5\n9\f9\x0E9\u04B8\v9\x059\u04BA\n9\x039\x039\x05" +
		"9\u04BE\n9\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x07:\u04C8\n:\f:\x0E" +
		":\u04CB\v:\x05:\u04CD\n:\x03:\x03:\x05:\u04D1\n:\x03;\x03;\x03;\x05;\u04D6" +
		"\n;\x03;\x03;\x05;\u04DA\n;\x03;\x03;\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x05<\u04EA\n<\x03=\x03=\x03=\x05=\u04EF\n=" +
		"\x03=\x03=\x03=\x07=\u04F4\n=\f=\x0E=\u04F7\v=\x05=\u04F9\n=\x03>\x03" +
		">\x03>\x03>\x05>\u04FF\n>\x03>\x05>\u0502\n>\x03>\x03>\x03>\x07>\u0507" +
		"\n>\f>\x0E>\u050A\v>\x05>\u050C\n>\x03?\x03?\x05?\u0510\n?\x03?\x03?\x03" +
		"?\x05?\u0515\n?\x03?\x05?\u0518\n?\x03?\x03?\x03?\x07?\u051D\n?\f?\x0E" +
		"?\u0520\v?\x05?\u0522\n?\x03@\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03A" +
		"\x03A\x03B\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03C\x03D\x03D\x05" +
		"D\u053A\nD\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x05E\u0548\nE\x03E\x03E\x05E\u054C\nE\x03F\x03F\x05F\u0550\nF\x03F\x03" +
		"F\x03G\x03G\x03G\x03G\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
		"H\x03H\x03H\x05H\u0564\nH\x05H\u0566\nH\x05H\u0568\nH\x03I\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x05I\u0571\nI\x05I\u0573\nI\x03J\x03J\x03J\x03J\x03J" +
		"\x03J\x03J\x05J\u057C\nJ\x05J\u057E\nJ\x03K\x03K\x03K\x03K\x03K\x03K\x03" +
		"K\x05K\u0587\nK\x05K\u0589\nK\x03L\x03L\x03L\x05L\u058E\nL\x03M\x03M\x03" +
		"M\x03M\x03M\x03M\x03M\x05M\u0597\nM\x03N\x03N\x03N\x03N\x03N\x03N\x03" +
		"N\x05N\u05A0\nN\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x05O\u05A9\nO\x03P" +
		"\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u05B4\nQ\x03R\x03R\x03R" +
		"\x03R\x05R\u05BA\nR\x03R\x03R\x03R\x05R\u05BF\nR\x03R\x05R\u05C2\nR\x03" +
		"R\x03R\x03S\x03S\x03S\x03S\x03T\x03T\x03T\x03T\x03T\x05T\u05CF\nT\x03" +
		"T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u05D9\nT\x03T\x03T\x05T\u05DD" +
		"\nT\x03U\x03U\x03U\x05U\u05E2\nU\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x07" +
		"V\u05EB\nV\fV\x0EV\u05EE\vV\x03V\x03V\x05V\u05F2\nV\x03W\x03W\x03W\x03" +
		"X\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03[\x03[\x03\\\x03" +
		"\\\x03]\x03]\x03^\x03^\x03_\x03_\x03`\x03`\x03a\x03a\x03a\x07a\u0611\n" +
		"a\fa\x0Ea\u0614\va\x03b\x03b\x03b\x07b\u0619\nb\fb\x0Eb\u061C\vb\x03c" +
		"\x03c\x05c\u0620\nc\x03d\x03d\x03e\x03e\x05e\u0626\ne\x03f\x03f\x03f\x05" +
		"f\u062B\nf\x03f\x03f\x05f\u062F\nf\x03f\x03f\x03f\x05f\u0634\nf\x03f\x03" +
		"f\x03f\x05f\u0639\nf\x03f\x03f\x03f\x05f\u063E\nf\x03f\x03f\x05f\u0642" +
		"\nf\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x05f\u064B\nf\x03f\x05f\u064E\n" +
		"f\x03f\x03f\x05f\u0652\nf\x03g\x03g\x03g\x07g\u0657\ng\fg\x0Eg\u065A\v" +
		"g\x03h\x03h\x03h\x03h\x03i\x03i\x03i\x03i\x05i\u0664\ni\x03i\x03i\x03" +
		"i\x03i\x05i\u066A\ni\x07i\u066C\ni\fi\x0Ei\u066F\vi\x03i\x03i\x03j\x05" +
		"j\u0674\nj\x03j\x03j\x03k\x03k\x03k\x03k\x07k\u067C\nk\fk\x0Ek\u067F\v" +
		"k\x03l\x03l\x03l\x03l\x05l\u0685\nl\x03l\x03l\x03l\x05l\u068A\nl\x03l" +
		"\x03l\x03l\x05l\u068F\nl\x03l\x03l\x03l\x05l\u0694\nl\x03l\x03l\x07l\u0698" +
		"\nl\fl\x0El\u069B\vl\x05l\u069D\nl\x03m\x03m\x03m\x03m\x03m\x03m\x03m" +
		"\x05m\u06A6\nm\x03m\x05m\u06A9\nm\x03m\x05m\u06AC\nm\x03n\x03n\x03n\x03" +
		"n\x05n\u06B2\nn\x03o\x03o\x03p\x03p\x03p\x03p\x07p\u06BA\np\fp\x0Ep\u06BD" +
		"\vp\x05p\u06BF\np\x03p\x03p\x05p\u06C3\np\x03p\x03p\x05p\u06C7\np\x03" +
		"q\x03q\x03q\x03q\x05q\u06CD\nq\x03q\x03q\x07q\u06D1\nq\fq\x0Eq\u06D4\v" +
		"q\x05q\u06D6\nq\x03r\x03r\x03r\x03r\x05r\u06DC\nr\x03r\x03r\x07r\u06E0" +
		"\nr\fr\x0Er\u06E3\vr\x05r\u06E5\nr\x03s\x05s\u06E8\ns\x03s\x03s\x05s\u06EC" +
		"\ns\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x05t\u06F6\nt\x03u\x03u\x03" +
		"v\x03v\x03w\x03w\x03w\x07w\u06FF\nw\fw\x0Ew\u0702\vw\x03w\x03w\x05w\u0706" +
		"\nw\x03w\x05w\u0709\nw\x03x\x03x\x05x\u070D\nx\x03x\x03x\x03x\x03y\x03" +
		"y\x05y\u0714\ny\x03y\x03y\x03y\x03y\x03y\x03y\x07y\u071C\ny\fy\x0Ey\u071F" +
		"\vy\x03y\x03y\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x05z\u072A\nz\x03z\x03" +
		"z\x03z\x03z\x05z\u0730\nz\x05z\u0732\nz\x03{\x03{\x03{\x03{\x03{\x03{" +
		"\x03{\x05{\u073B\n{\x03{\x05{\u073E\n{\x03|\x03|\x03|\x03|\x03|\x05|\u0745" +
		"\n|\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x05}\u074F\n}\x03~\x03~\x03" +
		"~\x03~\x05~\u0755\n~\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x07\x7F\u075B\n\x7F" +
		"\f\x7F\x0E\x7F\u075E\v\x7F\x03\x7F\x03\x7F\x03\x80\x03\x80\x03\x80\x03" +
		"\x80\x07\x80\u0766\n\x80\f\x80\x0E\x80\u0769\v\x80\x03\x80\x03\x80\x03" +
		"\x81\x03\x81\x03\x81\x07\x81\u0770\n\x81\f\x81\x0E\x81\u0773\v\x81\x03" +
		"\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x05\x82\u077D" +
		"\n\x82\x05\x82\u077F\n\x82\x03\x82\x03\x82\x03\x82\x03\x82\x05\x82\u0785" +
		"\n\x82\x03\x83\x03\x83\x03\x83\x05\x83\u078A\n\x83\x03\x84\x03\x84\x03" +
		"\x84\x03\x84\x03\x84\x03\x84\x07\x84\u0792\n\x84\f\x84\x0E\x84\u0795\v" +
		"\x84\x05\x84\u0797\n\x84\x03\x84\x03\x84\x03\x84\x03\x84\x05\x84\u079D" +
		"\n\x84\x05\x84\u079F\n\x84\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03" +
		"\x85\x05\x85\u07A7\n\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85\u07AD" +
		"\n\x85\x03\x85\x07\x85\u07B0\n\x85\f\x85\x0E\x85\u07B3\v\x85\x03\x86\x03" +
		"\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x07\x86\u07BC\n\x86\f\x86" +
		"\x0E\x86\u07BF\v\x86\x03\x86\x03\x86\x03\x86\x03\x86\x05\x86\u07C5\n\x86" +
		"\x03\x87\x03\x87\x05\x87\u07C9\n\x87\x03\x87\x03\x87\x05\x87\u07CD\n\x87" +
		"\x03\x88\x03\x88\x05\x88\u07D1\n\x88\x03\x88\x05\x88\u07D4\n\x88\x03\x88" +
		"\x03\x88\x03\x88\x07\x88\u07D9\n\x88\f\x88\x0E\x88\u07DC\v\x88\x03\x88" +
		"\x03\x88\x03\x88\x03\x88\x07\x88\u07E2\n\x88\f\x88\x0E\x88\u07E5\v\x88" +
		"\x05\x88\u07E7\n\x88\x03\x88\x03\x88\x05\x88\u07EB\n\x88\x03\x88\x03\x88" +
		"\x03\x88\x05\x88\u07F0\n\x88\x03\x88\x03\x88\x05\x88\u07F4\n\x88\x03\x89" +
		"\x05\x89\u07F7\n\x89\x03\x89\x03\x89\x03\x89\x07\x89\u07FC\n\x89\f\x89" +
		"\x0E\x89\u07FF\v\x89\x03\x8A\x03\x8A\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x07" +
		"\x8B\u0807\n\x8B\f\x8B\x0E\x8B\u080A\v\x8B\x05\x8B\u080C\n\x8B\x03\x8B" +
		"\x03\x8B\x05\x8B\u0810\n\x8B\x03\x8C\x03\x8C\x05\x8C\u0814\n\x8C\x03\x8C" +
		"\x03\x8C\x03\x8C\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x05\x8E\u081D\n\x8E\x03" +
		"\x8E\x05\x8E\u0820\n\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x05\x8E" +
		"\u0827\n\x8E\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03" +
		"\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x05\x8F\u0835\n\x8F\x07\x8F\u0837" +
		"\n\x8F\f\x8F\x0E\x8F\u083A\v\x8F\x03\x90\x05\x90\u083D\n\x90\x03\x90\x03" +
		"\x90\x05\x90\u0841\n\x90\x03\x90\x03\x90\x05\x90\u0845\n\x90\x03\x90\x03" +
		"\x90\x05\x90\u0849\n\x90\x03\x90\x03\x90\x05\x90\u084D\n\x90\x03\x90\x03" +
		"\x90\x05\x90\u0851\n\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90" +
		"\x03\x90\x03\x90\x05\x90\u085B\n\x90\x03\x91\x03\x91\x03\x91\x03\x91\x03" +
		"\x91\x03\x91\x03\x91\x07\x91\u0864\n\x91\f\x91\x0E\x91\u0867\v\x91\x03" +
		"\x91\x03\x91\x05\x91\u086B\n\x91\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92" +
		"\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x05\x92\u0878\n\x92\x05" +
		"\x92\u087A\n\x92\x03\x93\x03\x93\x03\x94\x03\x94\x05\x94\u0880\n\x94\x03" +
		"\x94\x03\x94\x05\x94\u0884\n\x94\x05\x94\u0886\n\x94\x03\x95\x03\x95\x03" +
		"\x95\x03\x95\x07\x95\u088C\n\x95\f\x95\x0E\x95\u088F\v\x95\x03\x95\x03" +
		"\x95\x03\x96\x03\x96\x03\x96\x03\x96\x07\x96\u0897\n\x96\f\x96\x0E\x96" +
		"\u089A\v\x96\x03\x96\x03\x96\x03\x97\x03\x97\x05\x97\u08A0\n\x97\x03\x97" +
		"\x03\x97\x03\x97\x05\x97\u08A5\n\x97\x03\x98\x03\x98\x03\x98\x03\x98\x03" +
		"\x99\x03\x99\x03\x99\x03\x99\x03\x99\x07\x99\u08B0\n\x99\f\x99\x0E\x99" +
		"\u08B3\v\x99\x03\x99\x03\x99\x03\x99\x05\x99\u08B8\n\x99\x03\x9A\x03\x9A" +
		"\x03\x9A\x03\x9A\x03\x9B\x03\x9B\x05\x9B\u08C0\n\x9B\x03\x9C\x03\x9C\x03" +
		"\x9D\x03\x9D\x03\x9D\x05\x9D\u08C7\n\x9D\x03\x9D\x03\x9D\x05\x9D\u08CB" +
		"\n\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x07\x9D\u08D3\n" +
		"\x9D\f\x9D\x0E\x9D\u08D6\v\x9D\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E" +
		"\x03\x9E\x03\x9E\x03\x9E\x05\x9E\u08E0\n\x9E\x03\x9E\x03\x9E\x03\x9E\x03" +
		"\x9E\x03\x9E\x03\x9E\x05\x9E\u08E8\n\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E" +
		"\x03\x9E\x07\x9E\u08EF\n\x9E\f\x9E\x0E\x9E\u08F2\v\x9E\x03\x9E\x03\x9E" +
		"\x03\x9E\x05\x9E\u08F7\n\x9E\x03\x9E\x03\x9E\x03\x9E\x05\x9E\u08FC\n\x9E" +
		"\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x05\x9E\u0902\n\x9E\x03\x9E\x03\x9E\x03" +
		"\x9E\x03\x9E\x05\x9E\u0908\n\x9E\x03\x9E\x03\x9E\x03\x9E\x05\x9E\u090D" +
		"\n\x9E\x03\x9E\x03\x9E\x03\x9E\x05\x9E";
	private static readonly _serializedATNSegment1: string =
		"\u0912\n\x9E\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x05\x9F\u0918\n\x9F\x03\x9F" +
		"\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x07\x9F" +
		"\u0923\n\x9F\f\x9F\x0E\x9F\u0926\v\x9F\x03\xA0\x03\xA0\x03\xA0\x03\xA0" +
		"\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0" +
		"\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0" +
		"\x03\xA0\x03\xA0\x05\xA0\u0940\n\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x05" +
		"\xA0\u0946\n\xA0\x07\xA0\u0948\n\xA0\f\xA0\x0E\xA0\u094B\v\xA0\x03\xA0" +
		"\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x07\xA0\u0954\n\xA0\f" +
		"\xA0\x0E\xA0\u0957\v\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0" +
		"\x03\xA0\x05\xA0\u0960\n\xA0\x03\xA0\x05\xA0\u0963\n\xA0\x03\xA0\x03\xA0" +
		"\x03\xA0\x05\xA0\u0968\n\xA0\x03\xA0\x03\xA0\x03\xA0\x07\xA0\u096D\n\xA0" +
		"\f\xA0\x0E\xA0\u0970\v\xA0\x05\xA0\u0972\n\xA0\x03\xA0\x03\xA0\x03\xA0" +
		"\x03\xA0\x03\xA0\x07\xA0\u0979\n\xA0\f\xA0\x0E\xA0\u097C\v\xA0\x05\xA0" +
		"\u097E\n\xA0\x03\xA0\x03\xA0\x05\xA0\u0982\n\xA0\x03\xA0\x05\xA0\u0985" +
		"\n\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0" +
		"\x07\xA0\u098F\n\xA0\f\xA0\x0E\xA0\u0992\v\xA0\x05\xA0\u0994\n\xA0\x03" +
		"\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03" +
		"\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x06\xA0\u09A5\n\xA0\r\xA0" +
		"\x0E\xA0\u09A6\x03\xA0\x03\xA0\x05\xA0\u09AB\n\xA0\x03\xA0\x03\xA0\x03" +
		"\xA0\x03\xA0\x06\xA0\u09B1\n\xA0\r\xA0\x0E\xA0\u09B2\x03\xA0\x03\xA0\x05" +
		"\xA0\u09B7\n\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0" +
		"\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0" +
		"\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x07\xA0\u09CE\n\xA0\f\xA0\x0E" +
		"\xA0\u09D1\v\xA0\x05\xA0\u09D3\n\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03" +
		"\xA0\x03\xA0\x03\xA0\x05\xA0\u09DC\n\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0" +
		"\x05\xA0\u09E2\n\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x05\xA0\u09E8\n\xA0" +
		"\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x05\xA0\u09EE\n\xA0\x03\xA0\x03\xA0\x03" +
		"\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x05\xA0\u09F9\n\xA0" +
		"\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x05\xA0\u0A02" +
		"\n\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0" +
		"\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0" +
		"\x03\xA0\x07\xA0\u0A16\n\xA0\f\xA0\x0E\xA0\u0A19\v\xA0\x05\xA0\u0A1B\n" +
		"\xA0\x03\xA0\x05\xA0\u0A1E\n\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0" +
		"\x03\xA0\x03\xA0\x03\xA0\x07\xA0\u0A28\n\xA0\f\xA0\x0E\xA0\u0A2B\v\xA0" +
		"\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x05\xA1\u0A31\n\xA1\x05\xA1\u0A33\n\xA1" +
		"\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x03\xA5\x03\xA5\x03\xA5" +
		"\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5" +
		"\x03\xA5\x03\xA5\x05\xA5\u0A49\n\xA5\x03\xA6\x03\xA6\x03\xA7\x03\xA7\x03" +
		"\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03" +
		"\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03" +
		"\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x07\xA8\u0A66\n\xA8\f\xA8\x0E\xA8" +
		"\u0A69\v\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x07" +
		"\xA8\u0A72\n\xA8\f\xA8\x0E\xA8\u0A75\v\xA8\x03\xA8\x03\xA8\x05\xA8\u0A79" +
		"\n\xA8\x05\xA8\u0A7B\n\xA8\x03\xA8\x03\xA8\x07\xA8\u0A7F\n\xA8\f\xA8\x0E" +
		"\xA8\u0A82\v\xA8\x03\xA9\x03\xA9\x05\xA9\u0A86\n\xA9\x03\xAA\x03\xAA\x03" +
		"\xAA\x03\xAA\x05\xAA\u0A8C\n\xAA\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB" +
		"\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAD\x03\xAD\x03\xAD" +
		"\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x07\xAD\u0AA0\n\xAD\f\xAD\x0E\xAD\u0AA3" +
		"\v\xAD\x05\xAD\u0AA5\n\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x07" +
		"\xAD\u0AAC\n\xAD\f\xAD\x0E\xAD\u0AAF\v\xAD\x05\xAD\u0AB1\n\xAD\x03\xAD" +
		"\x05\xAD\u0AB4\n\xAD\x03\xAD\x03\xAD\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x03" +
		"\xAE\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x03\xAE\x03" +
		"\xAE\x03\xAE\x03\xAE\x05\xAE\u0AC8\n\xAE\x03\xAF\x03\xAF\x03\xAF\x03\xAF" +
		"\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x05\xAF\u0AD3\n\xAF\x03\xB0\x03" +
		"\xB0\x03\xB0\x03\xB0\x03\xB0\x05\xB0\u0ADA\n\xB0\x03\xB1\x03\xB1\x03\xB1" +
		"\x07\xB1\u0ADF\n\xB1\f\xB1\x0E\xB1\u0AE2\v\xB1\x03\xB2\x03\xB2\x03\xB2" +
		"\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x05\xB2" +
		"\u0AEF\n\xB2\x05\xB2\u0AF1\n\xB2\x03\xB3\x03\xB3\x03\xB4\x03\xB4\x03\xB4" +
		"\x07\xB4\u0AF8\n\xB4\f\xB4\x0E\xB4\u0AFB\v\xB4\x03\xB5\x03\xB5\x03\xB5" +
		"\x03\xB5\x03\xB5\x03\xB5\x05\xB5\u0B03\n\xB5\x03\xB6\x03\xB6\x03\xB6\x03" +
		"\xB6\x03\xB6\x05\xB6\u0B0A\n\xB6\x03\xB7\x05\xB7\u0B0D\n\xB7\x03\xB7\x03" +
		"\xB7\x05\xB7\u0B11\n\xB7\x03\xB7\x03\xB7\x05\xB7\u0B15\n\xB7\x03\xB7\x05" +
		"\xB7\u0B18\n\xB7\x03\xB8\x03\xB8\x03\xB9\x03\xB9\x03\xB9\f\u034B\u05EC" +
		"\u0699\u06BB\u06D2\u06E1\u0700\u071D\u0767\u0949\x02\b\u0108\u011C\u0138" +
		"\u013C\u013E\u014E\xBA\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
		"Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02" +
		"v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A" +
		"\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C" +
		"\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE" +
		"\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0" +
		"\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2" +
		"\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4" +
		"\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6" +
		"\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106" +
		"\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114" +
		"\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122" +
		"\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130" +
		"\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E" +
		"\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C" +
		"\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A" +
		"\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168" +
		"\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\x02\"\x04\x0200\xAD\xAD\x04" +
		"\x02\xA9\xA9\xD0\xD0\x04\x02\xB3\xB3\xCE\xCE\x04\x02GGRR\x04\x02\x1D\x1D" +
		"\xA2\xA2\x04\x02ii\x93\x93\x04\x0211\xAE\xAE\x04\x02\x05\x05\x0E\x0E\x05" +
		"\x02YY\xA9\xA9\xD0\xD0\x04\x02\xB5\xB5\xD5\xD5\x03\x02\xE7\xEA\x04\x02" +
		"\x96\x96\xDF\xE3\x04\x02CCaa\x04\x02BB\xCC\xCC\x04\x02\f\f99\x04\x02M" +
		"Mrr\x04\x02\x04\x04;;\x04\x02\x10\x10\xBD\xBD\x05\x02lluu\xA7\xA7\x04" +
		"\x02kk\xA6\xA6\x06\x02HH\x88\x88\xC6\xC6\xD4\xD4\x03\x02\xF1\xF2\x03\x02" +
		"\xF3\xF5\x03\x02\xEB\xF0\x05\x02\x04\x04\b\b\xB8\xB8\x04\x02HH\xC6\xC6" +
		"\x07\x0223]^}\x80\xAF\xB0\xDD\xDE\x03\x02\x82\x85\x04\x02OO\x98\x98\x06" +
		"\x0200\xB5\xB5\xC0\xC0\xD5\xD5\x12\x02\x1E\x1F**--22FF]]tt}}\x7F\x7F\xA1" +
		"\xA1\xA8\xA8\xAF\xAF\xBC\xBC\xC8\xC8\xD0\xD0\xDD\xDD\x18\x02\x10\x10-" +
		".23CCFF]]aappyy}\x80\x82\x85\x8C\x8C\x8F\x8F\x9B\x9C\xAF\xB0\xB7\xB7\xBC" +
		"\xBD\xC7\xC7\xD0\xD0\xD9\xD9\xDD\xDD\xE0\xE0\x02\u0C74\x02\u0172\x03\x02" +
		"\x02\x02\x04\u0175\x03\x02\x02\x02\x06\u017C\x03\x02\x02\x02\b\u017F\x03" +
		"\x02\x02\x02\n\u01D9\x03\x02\x02\x02\f\u01DB\x03\x02\x02\x02\x0E\u01E6" +
		"\x03\x02\x02\x02\x10\u01E8\x03\x02\x02\x02\x12\u020F\x03\x02\x02\x02\x14" +
		"\u0225\x03\x02\x02\x02\x16\u025C\x03\x02\x02\x02\x18\u0270\x03\x02\x02" +
		"\x02\x1A\u027E\x03\x02\x02\x02\x1C\u0282\x03\x02\x02\x02\x1E\u02C0\x03" +
		"\x02\x02\x02 \u02F0\x03\x02\x02\x02\"\u02F2\x03\x02\x02\x02$\u02FA\x03" +
		"\x02\x02\x02&\u030E\x03\x02\x02\x02(\u0322\x03\x02\x02\x02*\u0329\x03" +
		"\x02\x02\x02,\u0332\x03\x02\x02\x02.\u033A\x03\x02\x02\x020\u0350\x03" +
		"\x02\x02\x022\u035A\x03\x02\x02\x024\u036C\x03\x02\x02\x026\u0381\x03" +
		"\x02\x02\x028\u0396\x03\x02\x02\x02:\u039C\x03\x02\x02\x02<\u03AD\x03" +
		"\x02\x02\x02>\u03B6\x03\x02\x02\x02@\u03BD\x03\x02\x02\x02B\u03C5\x03" +
		"\x02\x02\x02D\u03CC\x03\x02\x02\x02F\u03D3\x03\x02\x02\x02H\u03DC\x03" +
		"\x02\x02\x02J\u03E7\x03\x02\x02\x02L\u03E9\x03\x02\x02\x02N\u03FD\x03" +
		"\x02\x02\x02P\u040B\x03\x02\x02\x02R\u040D\x03\x02\x02\x02T\u0416\x03" +
		"\x02\x02\x02V\u041D\x03\x02\x02\x02X\u0426\x03\x02\x02\x02Z\u0430\x03" +
		"\x02\x02\x02\\\u0447\x03\x02\x02\x02^\u044D\x03\x02\x02\x02`\u044F\x03" +
		"\x02\x02\x02b\u0456\x03\x02\x02\x02d\u0462\x03\x02\x02\x02f\u0464\x03" +
		"\x02\x02\x02h\u046B\x03\x02\x02\x02j\u0480\x03\x02\x02\x02l\u049D\x03" +
		"\x02\x02\x02n\u049F\x03\x02\x02\x02p\u04A8\x03\x02\x02\x02r\u04BF\x03" +
		"\x02\x02\x02t\u04D2\x03\x02\x02\x02v\u04E9\x03\x02\x02\x02x\u04EB\x03" +
		"\x02\x02\x02z\u04FA\x03\x02\x02\x02|\u050D\x03\x02\x02\x02~\u0523\x03" +
		"\x02\x02\x02\x80\u0528\x03\x02\x02\x02\x82\u052D\x03\x02\x02\x02\x84\u0532" +
		"\x03\x02\x02\x02\x86\u0537\x03\x02\x02\x02\x88\u053E\x03\x02\x02\x02\x8A" +
		"\u054D\x03\x02\x02\x02\x8C\u0553\x03\x02\x02\x02\x8E\u0567\x03\x02\x02" +
		"\x02\x90\u0569\x03\x02\x02\x02\x92\u0574\x03\x02\x02\x02\x94\u057F\x03" +
		"\x02\x02\x02\x96\u058D\x03\x02\x02\x02\x98\u058F\x03\x02\x02\x02\x9A\u0598" +
		"\x03\x02\x02\x02\x9C\u05A1\x03\x02\x02\x02\x9E\u05AA\x03\x02\x02\x02\xA0" +
		"\u05AD\x03\x02\x02\x02\xA2\u05B5\x03\x02\x02\x02\xA4\u05C5\x03\x02\x02" +
		"\x02\xA6\u05C9\x03\x02\x02\x02\xA8\u05E1\x03\x02\x02\x02\xAA\u05E3\x03" +
		"\x02\x02\x02\xAC\u05F3\x03\x02\x02\x02\xAE\u05F6\x03\x02\x02\x02\xB0\u05FA" +
		"\x03\x02\x02\x02\xB2\u05FD\x03\x02\x02\x02\xB4\u0601\x03\x02\x02\x02\xB6" +
		"\u0603\x03\x02\x02\x02\xB8\u0605\x03\x02\x02\x02\xBA\u0607\x03\x02\x02" +
		"\x02\xBC\u0609\x03\x02\x02\x02\xBE\u060B\x03\x02\x02\x02\xC0\u060D\x03" +
		"\x02\x02\x02\xC2\u0615\x03\x02\x02\x02\xC4\u061F\x03\x02\x02\x02\xC6\u0621" +
		"\x03\x02\x02\x02\xC8\u0625\x03\x02\x02\x02\xCA\u062A\x03\x02\x02\x02\xCC" +
		"\u0653\x03\x02\x02\x02\xCE\u065B\x03\x02\x02\x02\xD0\u065F\x03\x02\x02" +
		"\x02\xD2\u0673\x03\x02\x02\x02\xD4\u0677\x03\x02\x02\x02\xD6\u0680\x03" +
		"\x02\x02\x02\xD8\u069E\x03\x02\x02\x02\xDA\u06AD\x03\x02\x02\x02\xDC\u06B3" +
		"\x03\x02\x02\x02\xDE\u06B5\x03\x02\x02\x02\xE0\u06C8\x03\x02\x02\x02\xE2" +
		"\u06D7\x03\x02\x02\x02\xE4\u06EB\x03\x02\x02\x02\xE6\u06F5\x03\x02\x02" +
		"\x02\xE8\u06F7\x03\x02\x02\x02\xEA\u06F9\x03\x02\x02\x02\xEC\u0708\x03" +
		"\x02\x02\x02\xEE\u070A\x03\x02\x02\x02\xF0\u0711\x03\x02\x02\x02\xF2\u0731" +
		"\x03\x02\x02\x02\xF4\u073D\x03\x02\x02\x02\xF6\u0744\x03\x02\x02\x02\xF8" +
		"\u074E\x03\x02\x02\x02\xFA\u0750\x03\x02\x02\x02\xFC\u0756\x03\x02\x02" +
		"\x02\xFE\u0761\x03\x02\x02\x02\u0100\u076C\x03\x02\x02\x02\u0102\u0774" +
		"\x03\x02\x02\x02\u0104\u0786\x03\x02\x02\x02\u0106\u078B\x03\x02\x02\x02" +
		"\u0108\u07A0\x03\x02\x02\x02\u010A\u07C4\x03\x02\x02\x02\u010C\u07C6\x03" +
		"\x02\x02\x02\u010E\u07CE\x03\x02\x02\x02\u0110\u07F6\x03\x02\x02\x02\u0112" +
		"\u0800\x03\x02\x02\x02\u0114\u080F\x03\x02\x02\x02\u0116\u0811\x03\x02" +
		"\x02\x02\u0118\u0818\x03\x02\x02\x02\u011A\u0826\x03\x02\x02\x02\u011C" +
		"\u0828\x03\x02\x02\x02\u011E\u085A\x03\x02\x02\x02\u0120\u086A\x03\x02" +
		"\x02\x02\u0122\u086C\x03\x02\x02\x02\u0124\u087B\x03\x02\x02\x02\u0126" +
		"\u087D\x03\x02\x02\x02\u0128\u0887\x03\x02\x02\x02\u012A\u0892\x03\x02" +
		"\x02\x02\u012C\u08A4\x03\x02\x02\x02\u012E\u08A6\x03\x02\x02\x02\u0130" +
		"\u08AA\x03\x02\x02\x02\u0132\u08B9\x03\x02\x02\x02\u0134\u08BF\x03\x02" +
		"\x02\x02\u0136\u08C1\x03\x02\x02\x02\u0138\u08CA\x03\x02\x02\x02\u013A" +
		"\u0911\x03\x02\x02\x02\u013C\u0917\x03\x02\x02\x02\u013E\u0A1D\x03\x02" +
		"\x02\x02\u0140\u0A32\x03\x02\x02\x02\u0142\u0A34\x03\x02\x02\x02\u0144" +
		"\u0A36\x03\x02\x02\x02\u0146\u0A38\x03\x02\x02\x02\u0148\u0A48\x03\x02" +
		"\x02\x02\u014A\u0A4A\x03\x02\x02\x02\u014C\u0A4C\x03\x02\x02\x02\u014E" +
		"\u0A7A\x03\x02\x02\x02\u0150\u0A85\x03\x02\x02\x02\u0152\u0A8B\x03\x02" +
		"\x02\x02\u0154\u0A8D\x03\x02\x02\x02\u0156\u0A92\x03\x02\x02\x02\u0158" +
		"\u0A98\x03\x02\x02\x02\u015A\u0AC7\x03\x02\x02\x02\u015C\u0AD2\x03\x02" +
		"\x02\x02\u015E\u0AD9\x03\x02\x02\x02\u0160\u0ADB\x03\x02\x02\x02\u0162" +
		"\u0AF0\x03\x02\x02\x02\u0164\u0AF2\x03\x02\x02\x02\u0166\u0AF4\x03\x02" +
		"\x02\x02\u0168\u0B02\x03\x02\x02\x02\u016A\u0B09\x03\x02\x02\x02\u016C" +
		"\u0B17\x03\x02\x02\x02\u016E\u0B19\x03\x02\x02\x02\u0170\u0B1B\x03\x02" +
		"\x02\x02\u0172\u0173\x05\x04\x03\x02\u0173\u0174\x07\x02\x02\x03\u0174" +
		"\x03\x03\x02\x02\x02\u0175\u0176\x05\x06\x04\x02\u0176\u0177\x07\x02\x02" +
		"\x03\u0177\x05\x03\x02\x02\x02\u0178\u017B\x05\n\x06\x02\u0179\u017B\x05" +
		"\b\x05\x02\u017A\u0178\x03\x02\x02\x02\u017A\u0179\x03\x02\x02\x02\u017B" +
		"\u017E\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017D\x03\x02" +
		"\x02\x02\u017D\x07\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017F\u0180" +
		"\x07\xF8\x02\x02\u0180\t\x03\x02\x02\x02\u0181\u0183\x05\xD2j\x02\u0182" +
		"\u0184\x07\xF8\x02\x02\u0183\u0182\x03\x02\x02\x02\u0183\u0184\x03\x02" +
		"\x02\x02\u0184\u01DA\x03\x02\x02\x02\u0185\u0187\x05\f\x07\x02\u0186\u0188" +
		"\x07\xF8\x02\x02\u0187\u0186\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02" +
		"\u0188\u01DA\x03\x02\x02\x02\u0189\u018B\x05\x0E\b\x02\u018A\u018C\x07" +
		"\xF8\x02\x02\u018B\u018A\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C" +
		"\u01DA\x03\x02\x02\x02\u018D\u018F\x05 \x11\x02\u018E\u0190\x07\xF8\x02" +
		"\x02\u018F\u018E\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u01DA" +
		"\x03\x02\x02\x02\u0191\u0193\x05F$\x02\u0192\u0194\x07\xF8\x02\x02\u0193" +
		"\u0192\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u01DA\x03\x02" +
		"\x02\x02\u0195\u0197\x05H%\x02\u0196\u0198\x07\xF8\x02\x02\u0197\u0196" +
		"\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u01DA\x03\x02\x02\x02" +
		"\u0199\u019B\x05J&\x02\u019A\u019C\x07\xF8\x02\x02\u019B\u019A\x03\x02" +
		"\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u01DA\x03\x02\x02\x02\u019D" +
		"\u019F\x05P)\x02\u019E\u01A0\x07\xF8\x02\x02\u019F\u019E\x03\x02\x02\x02" +
		"\u019F\u01A0\x03\x02\x02\x02\u01A0\u01DA\x03\x02\x02\x02\u01A1\u01A3\x05" +
		"^0\x02\u01A2\u01A4\x07\xF8\x02\x02\u01A3\u01A2\x03\x02\x02\x02\u01A3\u01A4" +
		"\x03\x02\x02\x02\u01A4\u01DA\x03\x02\x02\x02\u01A5\u01A7\x05d3\x02\u01A6" +
		"\u01A8\x07\xF8\x02\x02\u01A7\u01A6\x03\x02\x02\x02\u01A7\u01A8\x03\x02" +
		"\x02\x02\u01A8\u01DA\x03\x02\x02\x02\u01A9\u01AB\x05j6\x02\u01AA\u01AC" +
		"\x07\xF8\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02" +
		"\u01AC\u01DA\x03\x02\x02\x02\u01AD\u01AF\x05l7\x02\u01AE\u01B0\x07\xF8" +
		"\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0" +
		"\u01DA\x03\x02\x02\x02\u01B1\u01B3\x05r:\x02\u01B2\u01B4\x07\xF8\x02\x02" +
		"\u01B3\u01B2\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01DA\x03" +
		"\x02\x02\x02\u01B5\u01B7\x05t;\x02\u01B6\u01B8\x07\xF8\x02\x02\u01B7\u01B6" +
		"\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01DA\x03\x02\x02\x02" +
		"\u01B9\u01BB\x05v<\x02\u01BA\u01BC\x07\xF8\x02\x02\u01BB\u01BA\x03\x02" +
		"\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01DA\x03\x02\x02\x02\u01BD" +
		"\u01BF\x05\x96L\x02\u01BE\u01C0\x07\xF8\x02\x02\u01BF\u01BE\x03\x02\x02" +
		"\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01DA\x03\x02\x02\x02\u01C1\u01C3" +
		"\x05\x9EP\x02\u01C2\u01C4\x07\xF8\x02\x02\u01C3\u01C2\x03\x02\x02\x02" +
		"\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01DA\x03\x02\x02\x02\u01C5\u01C7\x05" +
		"\xA0Q\x02\u01C6\u01C8\x07\xF8\x02\x02\u01C7\u01C6\x03\x02\x02\x02\u01C7" +
		"\u01C8\x03\x02\x02\x02\u01C8\u01DA\x03\x02\x02\x02\u01C9\u01CB\x05\xA2" +
		"R\x02\u01CA\u01CC\x07\xF8\x02\x02\u01CB\u01CA\x03\x02\x02\x02\u01CB\u01CC" +
		"\x03\x02\x02\x02\u01CC\u01DA\x03\x02\x02\x02\u01CD\u01CF\x05\xA4S\x02" +
		"\u01CE\u01D0\x07\xF8\x02\x02\u01CF\u01CE\x03\x02\x02\x02\u01CF\u01D0\x03" +
		"\x02\x02\x02\u01D0\u01DA\x03\x02\x02\x02\u01D1\u01D3\x05\xA6T\x02\u01D2" +
		"\u01D4\x07\xF8\x02\x02\u01D3\u01D2\x03\x02\x02\x02\u01D3\u01D4\x03\x02" +
		"\x02\x02\u01D4\u01DA\x03\x02\x02\x02\u01D5\u01D7\x05\xA8U\x02\u01D6\u01D8" +
		"\x07\xF8\x02\x02\u01D7\u01D6\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02" +
		"\u01D8\u01DA\x03\x02\x02\x02\u01D9\u0181\x03\x02\x02\x02\u01D9\u0185\x03" +
		"\x02\x02\x02\u01D9\u0189\x03\x02\x02\x02\u01D9\u018D\x03\x02\x02\x02\u01D9" +
		"\u0191\x03\x02\x02\x02\u01D9\u0195\x03\x02\x02\x02\u01D9\u0199\x03\x02" +
		"\x02\x02\u01D9\u019D\x03\x02\x02\x02\u01D9\u01A1\x03\x02\x02\x02\u01D9" +
		"\u01A5\x03\x02\x02\x02\u01D9\u01A9\x03\x02\x02\x02\u01D9\u01AD\x03\x02" +
		"\x02\x02\u01D9\u01B1\x03\x02\x02\x02\u01D9\u01B5\x03\x02\x02\x02\u01D9" +
		"\u01B9\x03\x02\x02\x02\u01D9\u01BD\x03\x02\x02\x02\u01D9\u01C1\x03\x02" +
		"\x02\x02\u01D9\u01C5\x03\x02\x02\x02\u01D9\u01C9\x03\x02\x02\x02\u01D9" +
		"\u01CD\x03\x02\x02\x02\u01D9\u01D1\x03\x02\x02\x02\u01D9\u01D5\x03\x02" +
		"\x02\x02\u01DA\v\x03\x02\x02\x02\u01DB\u01DC\x07\xCF\x02\x02\u01DC\u01DD" +
		"\x05\xBE`\x02\u01DD\r\x03\x02\x02\x02\u01DE\u01E7\x05\x18\r\x02\u01DF" +
		"\u01E7\x05\x1A\x0E\x02\u01E0\u01E7\x05\x1C\x0F\x02\u01E1\u01E7\x05\x1E" +
		"\x10\x02\u01E2\u01E7\x05\x16\f\x02\u01E3\u01E7\x05\x14\v\x02\u01E4\u01E7" +
		"\x05\x12\n\x02\u01E5\u01E7\x05\x10\t\x02\u01E6\u01DE\x03\x02\x02\x02\u01E6" +
		"\u01DF\x03\x02\x02\x02\u01E6\u01E0\x03\x02\x02\x02\u01E6\u01E1\x03\x02" +
		"\x02\x02\u01E6\u01E2\x03\x02\x02\x02\u01E6\u01E3\x03\x02\x02\x02\u01E6" +
		"\u01E4\x03\x02\x02\x02\u01E6\u01E5\x03\x02\x02\x02\u01E7\x0F\x03\x02\x02" +
		"\x02\u01E8\u01EA\x07\'\x02\x02\u01E9\u01EB\x07\x15\x02\x02\u01EA\u01E9" +
		"\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02" +
		"\u01EC\u01EE\x07\xC0\x02\x02\u01ED\u01EF\x05\xB2Z\x02\u01EE\u01ED\x03" +
		"\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0" +
		"\u0200\x05\xB4[\x02\u01F1\u01F2\x07\xFB\x02\x02\u01F2\u01F7\x05\xDAn\x02" +
		"\u01F3\u01F4\x07\xF9\x02\x02\u01F4\u01F6\x05\xDAn\x02\u01F5\u01F3\x03" +
		"\x02\x02\x02\u01F6\u01F9\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F7" +
		"\u01F8\x03\x02\x02\x02\u01F8\u01FC\x03\x02\x02\x02\u01F9\u01F7\x03\x02" +
		"\x02\x02\u01FA\u01FB\x07\xF9\x02\x02\u01FB\u01FD\x05\xD6l\x02\u01FC\u01FA" +
		"\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02" +
		"\u01FE\u01FF\x07\xFC\x02\x02\u01FF\u0201\x03\x02\x02\x02\u0200\u01F1\x03" +
		"\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0208\x03\x02\x02\x02\u0202" +
		"\u0203\x07\x13\x02\x02\u0203\u0206\x07\x1C\x02\x02\u0204\u0207\x05\xFE" +
		"\x80\x02\u0205\u0207\x05\u012A\x96\x02\u0206\u0204\x03\x02\x02\x02\u0206" +
		"\u0205\x03\x02\x02\x02\u0207\u0209\x03\x02\x02\x02\u0208\u0202\x03\x02" +
		"\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A" +
		"\u020D\x05\xCAf\x02\u020B\u020C\x07\v\x02\x02\u020C\u020E\x05\xD2j\x02" +
		"\u020D\u020B\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\x11\x03" +
		"\x02\x02\x02\u020F\u0211\x07\'\x02\x02\u0210\u0212\x07\x15\x02\x02\u0211" +
		"\u0210\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0213\x03\x02" +
		"\x02\x02\u0213\u0215\x07\xC0\x02\x02\u0214\u0216\x05\xB2Z\x02\u0215\u0214" +
		"\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02" +
		"\u0217\u0218\x05\xB4[\x02\u0218\u021C\x07u\x02\x02\u0219\u021D\x05\xC0" +
		"a\x02\u021A\u021B\x07\x96\x02\x02\u021B\u021D\x05\u0140\xA1\x02\u021C" +
		"\u0219\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021D\u0221\x03\x02" +
		"\x02\x02\u021E\u021F\x07\x13\x02\x02\u021F\u0220\x07\x1C\x02\x02\u0220" +
		"\u0222\x05\xFE\x80\x02\u0221\u021E\x03\x02\x02\x02\u0221\u0222\x03\x02" +
		"\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0224\x05\xCAf\x02\u0224\x13" +
		"\x03\x02\x02\x02\u0225\u0227\x07\'\x02\x02\u0226\u0228\x07\x15\x02\x02" +
		"\u0227\u0226\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228\u0229\x03" +
		"\x02\x02\x02\u0229\u022B\x07\xC0\x02\x02\u022A\u022C\x05\xB2Z\x02\u022B" +
		"\u022A\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022D\x03\x02" +
		"\x02\x02\u022D\u023F\x05\xB4[\x02\u022E\u022F\x07\xFB\x02\x02\u022F\u0234" +
		"\x05\xDCo\x02\u0230\u0231\x07\xF9\x02\x02\u0231\u0233\x05\xDCo\x02\u0232" +
		"\u0230\x03\x02\x02\x02\u0233\u0236\x03\x02\x02\x02\u0234\u0232\x03\x02" +
		"\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u023B\x03\x02\x02\x02\u0236" +
		"\u0234\x03\x02\x02\x02\u0237\u0238\x07\xF9\x02\x02\u0238\u0239\x07\x99" +
		"\x02\x02\u0239\u023A\x07p\x02\x02\u023A\u023C\x05\u0128\x95\x02\u023B" +
		"\u0237\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u023D\x03\x02" +
		"\x02\x02\u023D\u023E\x07\xFC\x02\x02\u023E\u0240\x03\x02\x02\x02\u023F" +
		"\u022E\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240\u0246\x03\x02" +
		"\x02\x02\u0241\u0242\x07\x99\x02\x02\u0242\u0244\x07p\x02\x02\u0243\u0245" +
		"\x05\u0128\x95\x02\u0244\u0243\x03\x02\x02\x02\u0244\u0245\x03\x02\x02" +
		"\x02\u0245\u0247\x03\x02\x02\x02\u0246\u0241\x03\x02\x02\x02\u0246\u0247" +
		"\x03\x02\x02\x02\u0247\u024B\x03\x02\x02\x02\u0248\u0249\x07\x94\x02\x02" +
		"\u0249\u024A\x07\x1C\x02\x02\u024A\u024C\x05\xECw\x02\u024B\u0248\x03" +
		"\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024F\x03\x02\x02\x02\u024D" +
		"\u024E\x07$\x02\x02\u024E\u0250\x05\u0140\xA1\x02\u024F\u024D\x03\x02" +
		"\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251" +
		"\u0252\x07\x19\x02\x02\u0252\u0253\x07\v\x02\x02\u0253\u0256\x07q\x02" +
		"\x02\u0254\u0255\x07\x1B\x02\x02\u0255\u0257\x05\xFC\x7F\x02\u0256\u0254" +
		"\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257\u025A\x03\x02\x02\x02" +
		"\u0258\u0259\x07\v\x02\x02\u0259\u025B\x05\xD2j\x02\u025A\u0258\x03\x02" +
		"\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\x15\x03\x02\x02\x02\u025C\u025D" +
		"\x07\'\x02\x02\u025D\u025F\x07\xD8\x02\x02\u025E\u0260\x05\xB2Z\x02\u025F" +
		"\u025E\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260\u0261\x03\x02" +
		"\x02\x02\u0261\u0263\x05\xB8]\x02\u0262\u0264\x05\xD0i\x02\u0263\u0262" +
		"\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0267\x03\x02\x02\x02" +
		"\u0265\u0266\x07$\x02\x02\u0266\u0268\x05\u0140\xA1\x02\u0267\u0265\x03" +
		"\x02\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268\u026B\x03\x02\x02\x02\u0269" +
		"\u026A\x07\x1B\x02\x02\u026A\u026C\x05\xFC\x7F\x02\u026B\u0269\x03\x02" +
		"\x02\x02\u026B\u026C\x03\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D" +
		"\u026E\x07\v\x02\x02\u026E\u026F\x05\xD2j\x02\u026F\x17\x03\x02\x02\x02" +
		"\u0270\u0271\x07\'\x02\x02\u0271\u0273\t\x02\x02\x02\u0272\u0274\x05\xB2" +
		"Z\x02\u0273\u0272\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274\u0275" +
		"\x03\x02\x02\x02\u0275\u0278\x05\xB6\\\x02\u0276\u0277\x07$\x02\x02\u0277" +
		"\u0279\x05\u0140\xA1\x02\u0278\u0276\x03\x02\x02\x02\u0278\u0279\x03\x02" +
		"\x02\x02\u0279\u027C\x03\x02\x02\x02\u027A\u027B\x07\x1A\x02\x02\u027B" +
		"\u027D\x05\u0140\xA1\x02\u027C\u027A\x03\x02\x02\x02\u027C\u027D\x03\x02" +
		"\x02\x02\u027D\x19\x03\x02\x02\x02\u027E\u027F\x07\'\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\u027F\u0280\x07\xA9\x02\x02\u0280\u0281\x05\u016A\xB6\x02\u0281\x1B\x03" +
		"\x02\x02\x02\u0282\u0284\x07\'\x02\x02\u0283\u0285\x07\x0E\x02\x02\u0284" +
		"\u0283\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0286\x03\x02" +
		"\x02\x02\u0286\u0288\x07V\x02\x02\u0287\u0289\x05\xB2Z\x02\u0288\u0287" +
		"\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02" +
		"\u028A\u0297\x05\xBA^\x02\u028B\u0294\x07\xFB\x02\x02\u028C\u0291\x05" +
		"\u014E\xA8\x02\u028D\u028E\x07\xF9\x02\x02\u028E\u0290\x05\u014E\xA8\x02" +
		"\u028F\u028D\x03\x02\x02\x02\u0290\u0293\x03\x02\x02\x02\u0291\u028F\x03" +
		"\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u0295\x03\x02\x02\x02\u0293" +
		"\u0291\x03\x02\x02\x02\u0294\u028C\x03\x02\x02\x02\u0294\u0295\x03\x02" +
		"\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296\u0298\x07\xFC\x02\x02\u0297" +
		"\u028B\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298\u0299\x03\x02" +
		"\x02\x02\u0299\u029A\x07\xA3\x02\x02\u029A\u029D\x05\u014E\xA8\x02\u029B" +
		"\u029C\x07h\x02\x02\u029C\u029E\x05\u014E\xA8\x02\u029D\u029B\x03\x02" +
		"\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F" +
		"\u02A0\x07\x1A\x02\x02\u02A0\u02A4\x07\u0104\x02\x02\u02A1\u02A2\x07j" +
		"\x02\x02\u02A2\u02A3\x07\xEB\x02\x02\u02A3\u02A5\x07\u0104\x02\x02\u02A4" +
		"\u02A1\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5\u02A6\x03\x02" +
		"\x02\x02\u02A6\u02A7\x07\xD2\x02\x02\u02A7\u02A8\x07\xEB\x02\x02\u02A8" +
		"\u02A9\x07\u0104\x02\x02\u02A9\u02AA\x07\x81\x02\x02\u02AA\u02AB\x07\xEB" +
		"\x02\x02\u02AB\u02AF\x07\u0104\x02\x02\u02AC\u02AD\x07\x14\x02\x02\u02AD" +
		"\u02AE\x07\xEB\x02\x02\u02AE\u02B0\x07\u0104\x02\x02\u02AF\u02AC\x03\x02" +
		"\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02B4\x03\x02\x02\x02\u02B1" +
		"\u02B2\x07\x16\x02\x02\u02B2\u02B3\x07\xEB\x02\x02\u02B3\u02B5\x07\u0104" +
		"\x02\x02\u02B4\u02B1\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5" +
		"\u02B9\x03\x02\x02\x02\u02B6\u02B7\x07\xBF\x02\x02\u02B7\u02B8\x07\xEB" +
		"\x02\x02\u02B8\u02BA\x07\u0104\x02\x02\u02B9\u02B6\x03\x02\x02\x02\u02B9" +
		"\u02BA\x03\x02\x02\x02\u02BA\u02BE\x03\x02\x02\x02\u02BB\u02BC\x07N\x02" +
		"\x02\u02BC\u02BD\x07\xEB\x02\x02\u02BD\u02BF\x07\u0104\x02\x02\u02BE\u02BB" +
		"\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF\x1D\x03\x02\x02\x02" +
		"\u02C0\u02C1\x07\'\x02\x02\u02C1\u02C3\x07V\x02\x02\u02C2\u02C4\x05\xB2" +
		"Z\x02\u02C3\u02C2\x03\x02\x02\x02\u02C3\u02C4\x03\x02\x02\x02\u02C4\u02C5" +
		"\x03\x02\x02\x02\u02C5\u02D2\x05\xBA^\x02\u02C6\u02CF\x07\xFB\x02\x02" +
		"\u02C7\u02CC\x05\u014E\xA8\x02\u02C8\u02C9\x07\xF9\x02\x02\u02C9\u02CB" +
		"\x05\u014E\xA8\x02\u02CA\u02C8\x03\x02\x02\x02\u02CB\u02CE\x03\x02\x02" +
		"\x02\u02CC\u02CA\x03\x02\x02\x02\u02CC\u02CD\x03\x02\x02\x02\u02CD\u02D0" +
		"\x03\x02\x02\x02\u02CE\u02CC\x03\x02\x02\x02\u02CF\u02C7\x03\x02\x02\x02" +
		"\u02CF\u02D0\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D3\x07" +
		"\xFC\x02\x02\u02D2\u02C6\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3" +
		"\u02D6\x03\x02\x02\x02\u02D4\u02D5\x07\xA3\x02\x02\u02D5\u02D7\x05\u014E" +
		"\xA8\x02\u02D6\u02D4\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7" +
		"\u02D8\x03\x02\x02\x02\u02D8\u02D9\x07\x1A\x02\x02\u02D9\u02DA\x07\u0104" +
		"\x02\x02\u02DA\u02DB\x07\xBE\x02\x02\u02DB\u02DC\x07\xEB\x02\x02\u02DC" +
		"\u02DD\x05\u0140\xA1\x02\u02DD\x1F\x03\x02\x02\x02\u02DE\u02F1\x05\"\x12" +
		"\x02\u02DF\u02F1\x05D#\x02\u02E0\u02F1\x05B\"\x02\u02E1\u02F1\x05@!\x02" +
		"\u02E2\u02F1\x05<\x1F\x02\u02E3\u02F1\x05> \x02\u02E4\u02F1\x05:\x1E\x02" +
		"\u02E5\u02F1\x056\x1C\x02\u02E6\u02F1\x058\x1D\x02\u02E7\u02F1\x054\x1B" +
		"\x02\u02E8\u02F1\x052\x1A\x02\u02E9\u02F1\x050\x19\x02\u02EA\u02F1\x05" +
		".\x18\x02\u02EB\u02F1\x05(\x15\x02\u02EC\u02F1\x05$\x13\x02\u02ED\u02F1" +
		"\x05&\x14\x02\u02EE\u02F1\x05*\x16\x02\u02EF\u02F1\x05,\x17\x02\u02F0" +
		"\u02DE\x03\x02\x02\x02\u02F0\u02DF\x03\x02\x02\x02\u02F0\u02E0\x03\x02" +
		"\x02\x02\u02F0\u02E1\x03\x02\x02\x02\u02F0\u02E2\x03\x02\x02\x02\u02F0" +
		"\u02E3\x03\x02\x02\x02\u02F0\u02E4\x03\x02\x02\x02\u02F0\u02E5\x03\x02" +
		"\x02\x02\u02F0\u02E6\x03\x02\x02\x02\u02F0\u02E7\x03\x02\x02\x02\u02F0" +
		"\u02E8\x03\x02\x02\x02\u02F0\u02E9\x03\x02\x02\x02\u02F0\u02EA\x03\x02" +
		"\x02\x02\u02F0\u02EB\x03\x02\x02\x02\u02F0\u02EC\x03\x02\x02\x02\u02F0" +
		"\u02ED\x03\x02\x02\x02\u02F0\u02EE\x03\x02\x02\x02\u02F0\u02EF\x03\x02" +
		"\x02\x02\u02F1!\x03\x02\x02\x02\u02F2\u02F3\x07\x06\x02\x02\u02F3\u02F4" +
		"\x070\x02\x02\u02F4\u02F5\x05\xBE`\x02\u02F5\u02F6\x07\xB3\x02\x02\u02F6" +
		"\u02F7\x07\x91\x02\x02\u02F7\u02F8\t\x03\x02\x02\u02F8\u02F9\x05\u016A" +
		"\xB6\x02\u02F9#\x03\x02\x02\x02\u02FA\u02FB\x07\x06\x02\x02\u02FB\u02FC" +
		"\x07\xC0\x02\x02\u02FC\u02FD\x05\xC0a\x02\u02FD\u02FE\x07\xB3\x02\x02" +
		"\u02FE\u02FF\x07\"\x02\x02\u02FF\u0300\x07\xB9\x02\x02\u0300\u0301\x05" +
		"\xC6d\x02\u0301\u0302\x07\xFB\x02\x02\u0302\u0303\x05\xE8u\x02\u0303\u0304" +
		"\x07\xEB\x02\x02\u0304\u030A\x05\u0140\xA1\x02\u0305\u0306\x07\xF9\x02" +
		"\x02\u0306\u0307\x05\xE8u\x02\u0307\u0308\x07\xEB\x02\x02\u0308\u0309" +
		"\x05\u0140\xA1\x02\u0309\u030B\x03\x02\x02\x02\u030A\u0305\x03\x02\x02" +
		"\x02\u030A\u030B\x03\x02\x02\x02\u030B\u030C\x03\x02\x02\x02\u030C\u030D" +
		"\x07\xFC\x02\x02\u030D%\x03\x02\x02\x02\u030E\u030F\x07\x06\x02\x02\u030F" +
		"\u0310\x07\xC0\x02\x02\u0310\u0313\x05\xC0a\x02\u0311\u0312\x07\x94\x02" +
		"\x02\u0312\u0314\x05\u0136\x9C\x02\u0313\u0311\x03\x02\x02\x02\u0313\u0314" +
		"\x03\x02\x02\x02\u0314\u0315\x03\x02\x02\x02\u0315\u0320\x07\xB3\x02\x02" +
		"\u0316\u0317\x07 \x02\x02\u0317\u0318\x07`\x02\x02\u0318\u031D\x05\u0140" +
		"\xA1\x02\u0319\u031A\x07\xDC\x02\x02\u031A\u031B\x07\x9A\x02\x02\u031B" +
		"\u031C\x07\xEB\x02\x02\u031C\u031E\x05\u016C\xB7\x02\u031D\u0319\x03\x02" +
		"\x02\x02\u031D\u031E\x03\x02\x02\x02\u031E\u0321\x03\x02\x02\x02\u031F" +
		"\u0321\x07\xC9\x02\x02\u0320\u0316\x03\x02\x02\x02\u0320\u031F\x03\x02" +
		"\x02\x02\u0321\'\x03\x02\x02\x02\u0322\u0323\x07\x06\x02\x02\u0323\u0324" +
		"\x07\xC0\x02\x02\u0324\u0325\x05\xC0a\x02\u0325\u0326\x07!\x02\x02\u0326" +
		"\u0327\x07\"\x02\x02\u0327\u0328\x05\xE0q\x02\u0328)\x03\x02\x02\x02\u0329" +
		"\u032A\x07\x06\x02\x02\u032A\u032B\x07\xC0\x02\x02\u032B\u032C\x05\xC0" +
		"a\x02\u032C\u032E\x07<\x02\x02\u032D\u032F\x07\"\x02\x02\u032E\u032D\x03" +
		"\x02\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\u0330\x03\x02\x02\x02\u0330" +
		"\u0331\x05\xC6d\x02\u0331+\x03\x02\x02\x02\u0332\u0333\x07\x06\x02\x02" +
		"\u0333\u0334\x07\xC0\x02\x02\u0334\u0335\x05\xC0a\x02\u0335\u0336\x07" +
		"\xB3\x02\x02\u0336\u0337\x07\x91\x02\x02\u0337\u0338\t\x03\x02\x02\u0338" +
		"\u0339\x05\u016A\xB6\x02\u0339-\x03\x02\x02\x02\u033A\u033B\x07\x06\x02" +
		"\x02\u033B\u033C\x07\xC0\x02\x02\u033C\u0342\x05\xC0a\x02\u033D\u0343" +
		"\x07\xA1\x02\x02\u033E\u0340\x07\x03\x02\x02\u033F\u0341\x05\xB2Z\x02" +
		"\u0340\u033F\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341\u0343\x03" +
		"\x02\x02\x02\u0342\u033D\x03\x02\x02\x02\u0342\u033E\x03\x02\x02\x02\u0343" +
		"\u0344\x03\x02\x02\x02\u0344\u0345\x07#\x02\x02\u0345\u0346\x07\xFB\x02" +
		"\x02\u0346\u034B\x05\xE0q\x02\u0347\u0348\x07\xF9\x02\x02\u0348\u034A" +
		"\x05\xE0q\x02\u0349\u0347\x03\x02\x02\x02\u034A\u034D\x03\x02\x02\x02" +
		"\u034B\u034C\x03\x02\x02\x02\u034B\u0349\x03\x02\x02\x02\u034C\u034E\x03" +
		"\x02\x02\x02\u034D\u034B\x03\x02\x02\x02\u034E\u034F\x07\xFC\x02\x02\u034F" +
		"/\x03\x02\x02\x02\u0350\u0351\x07\x06\x02\x02\u0351\u0352\x07\xC0\x02" +
		"\x02\u0352\u0353\x05\xC0a\x02\u0353\u0354\x07\x03\x02\x02\u0354\u0356" +
		"\x07\"\x02\x02\u0355\u0357\x05\xB2Z\x02\u0356\u0355\x03\x02\x02\x02\u0356" +
		"\u0357\x03\x02\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358\u0359\x05\xE2" +
		"r\x02\u03591\x03\x02\x02\x02\u035A\u035B\x07\x06\x02\x02\u035B\u035C\x07" +
		"\xC0\x02\x02\u035C\u035D\x05\xC0a\x02\u035D\u035F\x07\x06\x02\x02\u035E" +
		"\u0360\x07\"\x02\x02\u035F\u035E\x03\x02\x02\x02\u035F\u0360\x03\x02\x02" +
		"\x02\u0360\u0361\x03\x02\x02\x02\u0361\u036A\x05\xC6d\x02\u0362\u0366" +
		"\x07\xB3\x02\x02\u0363\u0367\x05\xE6t\x02\u0364\u0365\x07$\x02\x02\u0365" +
		"\u0367\x05\u0140\xA1\x02\u0366\u0363\x03\x02\x02\x02\u0366\u0364\x03\x02" +
		"\x02\x02\u0367\u036B\x03\x02\x02\x02\u0368\u0369\x07<\x02\x02\u0369\u036B" +
		"\x075\x02\x02\u036A\u0362\x03\x02\x02\x02\u036A\u0368\x03\x02\x02\x02" +
		"\u036B3\x03\x02\x02\x02\u036C\u036D\x07\x06\x02\x02\u036D\u036E\x07\xC0" +
		"\x02\x02\u036E\u036F\x05\xC0a\x02\u036F\u0371\x07\x03\x02\x02\u0370\u0372" +
		"\x05\xB2Z\x02\u0371\u0370\x03\x02\x02\x02\u0371\u0372\x03\x02\x02\x02" +
		"\u0372\u037F\x03\x02\x02\x02\u0373\u0374\x07\x94\x02\x02\u0374\u0377\x05" +
		"\u0136\x9C\x02\u0375\u0376\x07\x1A\x02\x02\u0376\u0378\x05\u0140\xA1\x02" +
		"\u0377\u0375\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02\u0378\u037A\x03" +
		"\x02\x02\x02\u0379\u037B\x05\xF4{\x02\u037A\u0379\x03\x02\x02\x02\u037A" +
		"\u037B\x03\x02\x02\x02\u037B\u0380\x03\x02\x02\x02\u037C\u037D\x07\x9D" +
		"\x02\x02\u037D\u037E\x07\x94\x02\x02\u037E\u0380\x05\xF2z\x02\u037F\u0373" +
		"\x03\x02\x02\x02\u037F\u037C\x03\x02\x02\x02\u03805\x03\x02\x02\x02\u0381" +
		"\u0382\x07\x06\x02\x02\u0382\u0383\x07\xC0\x02\x02\u0383\u0386\x05\xC0" +
		"a\x02\u0384\u0385\x07\x94\x02\x02\u0385\u0387\x05\u0136\x9C\x02\u0386" +
		"\u0384\x03\x02\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387\u0388\x03\x02" +
		"\x02\x02\u0388\u0394\x07\xB3\x02\x02\u0389\u038A\x07J\x02\x02\u038A\u0395" +
		"\x05\xEAv\x02\u038B\u038C\x07\xAB\x02\x02\u038C\u038D\x07Q\x02\x02\u038D" +
		"\u0395\x05\u0102\x82\x02\u038E\u038F\x07\x1A\x02\x02\u038F\u0395\x05\u0140" +
		"\xA1\x02\u0390\u0391\x07\x1B\x02\x02\u0391\u0395\x05\xFC\x7F\x02\u0392" +
		"\u0393\x07\xB2\x02\x02\u0393\u0395\x05\xFC\x7F\x02\u0394\u0389\x03\x02" +
		"\x02\x02\u0394\u038B\x03\x02\x02\x02\u0394\u038E\x03\x02\x02\x02\u0394" +
		"\u0390\x03\x02\x02\x02\u0394\u0392\x03\x02\x02\x02\u03957\x03\x02\x02" +
		"\x02\u0396\u0397\x07\x06\x02\x02\u0397\u0398\x07\xC0\x02\x02\u0398\u0399" +
		"\x05\xC0a\x02\u0399\u039A\x07\x9E\x02\x02\u039A\u039B\x07\x95\x02\x02" +
		"\u039B9\x03\x02\x02\x02\u039C\u039D\x07\x06\x02\x02\u039D\u039E\x07\xC0" +
		"\x02\x02\u039E\u039F\x05\xC0a\x02\u039F\u03A1\x07<\x02\x02\u03A0\u03A2" +
		"\x05\xB0Y\x02\u03A1\u03A0\x03\x02\x02\x02\u03A1\u03A2\x03\x02\x02\x02" +
		"\u03A2\u03AB\x03\x02\x02\x02\u03A3\u03A4\x07\x94\x02\x02\u03A4\u03A6\x05" +
		"\u0136\x9C\x02\u03A5\u03A7\x07\x18\x02\x02\u03A6\u03A5\x03\x02\x02\x02" +
		"\u03A6\u03A7\x03\x02\x02\x02\u03A7\u03AC\x03\x02\x02\x02\u03A8\u03A9\x07" +
		"\x9D\x02\x02\u03A9\u03AA\x07\x94\x02\x02\u03AA\u03AC\x05\xF2z\x02\u03AB" +
		"\u03A3\x03\x02\x02\x02\u03AB\u03A8\x03\x02\x02\x02\u03AC;\x03\x02\x02" +
		"\x02\u03AD\u03AE\x07\x06\x02\x02\u03AE\u03AF\x07\xD8\x02\x02\u03AF\u03B1" +
		"\x05\xC2b\x02\u03B0\u03B2\x05\xD0i\x02\u03B1\u03B0\x03\x02\x02\x02\u03B1" +
		"\u03B2\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3\u03B4\x07\v\x02" +
		"\x02\u03B4\u03B5\x05\xD2j\x02\u03B5=\x03\x02\x02\x02\u03B6\u03B7\x07\x06" +
		"\x02\x02\u03B7\u03B8\x07\xD8\x02\x02\u03B8\u03B9\x05\xC2b\x02\u03B9\u03BA" +
		"\x07\x9F\x02\x02\u03BA\u03BB\x07\xC5\x02\x02\u03BB\u03BC\x05\xC2b\x02" +
		"\u03BC?\x03\x02\x02\x02\u03BD\u03BE\x07\x06\x02\x02\u03BE\u03BF\x07\xD8" +
		"\x02\x02\u03BF\u03C0\x05\xC2b\x02\u03C0\u03C1\x07\xB3\x02\x02\u03C1\u03C2" +
		"\x07\x91\x02\x02\u03C2\u03C3\t\x03\x02\x02\u03C3\u03C4\x05\u0166\xB4\x02" +
		"\u03C4A\x03\x02\x02\x02\u03C5\u03C6\x07\x06\x02\x02\u03C6\u03C7\x07\xC0" +
		"\x02\x02\u03C7\u03C8\x05\xC0a\x02\u03C8\u03C9\x07\x9F\x02\x02\u03C9\u03CA" +
		"\x07\xC5\x02\x02\u03CA\u03CB\x05\xC0a\x02\u03CBC\x03\x02\x02\x02\u03CC" +
		"\u03CD\x07\x06\x02\x02\u03CD\u03CE\x07\xD8\x02\x02\u03CE\u03CF\x05\xC2" +
		"b\x02\u03CF\u03D0\t\x04\x02\x02\u03D0\u03D1\x07\x1B\x02\x02\u03D1\u03D2" +
		"\x05\xFC\x7F\x02\u03D2E\x03\x02\x02\x02\u03D3\u03D5\x07\xC8\x02\x02\u03D4" +
		"\u03D6\x07\xC0\x02\x02\u03D5\u03D4\x03\x02\x02\x02\u03D5\u03D6\x03\x02" +
		"\x02\x02\u03D6\u03D8\x03\x02\x02\x02\u03D7\u03D9\x05\xB0Y\x02\u03D8\u03D7" +
		"\x03\x02\x02\x02\u03D8\u03D9\x03\x02\x02\x02\u03D9\u03DA\x03\x02\x02\x02" +
		"\u03DA\u03DB\x05\xC0a\x02\u03DBG\x03\x02\x02\x02\u03DC\u03DE\x07:\x02" +
		"\x02\u03DD\u03DF\x070\x02\x02\u03DE\u03DD\x03\x02\x02\x02\u03DE\u03DF" +
		"\x03\x02\x02\x02\u03DF\u03E1\x03\x02\x02\x02\u03E0\u03E2\t\x05\x02\x02" +
		"\u03E1\u03E0\x03\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2\u03E3\x03" +
		"\x02\x02\x02\u03E3\u03E4\x05\u0166\xB4\x02\u03E4I\x03\x02\x02\x02\u03E5" +
		"\u03E8\x05L\'\x02\u03E6\u03E8\x05N(\x02\u03E7\u03E5\x03\x02\x02\x02\u03E7" +
		"\u03E6\x03\x02\x02\x02\u03E8K\x03\x02\x02\x02\u03E9\u03EA\x07&\x02\x02" +
		"\u03EA\u03EB\x07\xB9\x02\x02\u03EB\u03ED\x05\xC0a\x02\u03EC\u03EE\x05" +
		"\u0128\x95\x02\u03ED\u03EC\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02" +
		"\u03EE\u03FB\x03\x02\x02\x02\u03EF\u03F0\x07\xC2\x02\x02\u03F0\u03F1\x07" +
		"\xBD\x02\x02\u03F1\u03F2\x07\xFB\x02\x02\u03F2\u03F3\x05\u016C\xB7\x02" +
		"\u03F3\u03F9\x07\xFC\x02\x02\u03F4\u03F5\x07\xA0\x02\x02\u03F5\u03F6\x07" +
		"\xFB\x02\x02\u03F6\u03F7\x05\u016C\xB7\x02\u03F7\u03F8\x07\xFC\x02\x02" +
		"\u03F8\u03FA\x03\x02\x02\x02\u03F9\u03F4\x03\x02\x02\x02\u03F9\u03FA\x03" +
		"\x02\x02\x02\u03FA\u03FC\x03\x02\x02\x02\u03FB\u03EF\x03\x02\x02\x02\u03FB" +
		"\u03FC\x03\x02\x02\x02\u03FCM\x03\x02\x02\x02\u03FD\u03FE\x07&\x02\x02" +
		"\u03FE\u03FF\x07b\x02\x02\u03FF\u0400\x07\xB9\x02\x02\u0400\u0403\x05" +
		"\xC0a\x02\u0401\u0402\x07\x94\x02\x02\u0402\u0404\x05\u0136\x9C\x02\u0403" +
		"\u0401\x03\x02\x02\x02\u0403\u0404\x03\x02\x02\x02\u0404O\x03\x02\x02" +
		"\x02\u0405\u040C\x05\\/\x02\u0406\u040C\x05Z.\x02\u0407\u040C\x05X-\x02" +
		"\u0408\u040C\x05T+\x02\u0409\u040C\x05V,\x02\u040A\u040C\x05R*\x02\u040B" +
		"\u0405\x03\x02\x02\x02\u040B\u0406\x03\x02\x02\x02\u040B\u0407\x03\x02" +
		"\x02\x02\u040B\u0408\x03\x02\x02\x02\u040B\u0409\x03\x02\x02\x02\u040B" +
		"\u040A\x03\x02\x02\x02\u040CQ\x03\x02\x02\x02\u040D\u040E\x07<\x02\x02" +
		"\u040E\u0410\t\x02\x02\x02\u040F\u0411\x05\xB0Y\x02\u0410\u040F\x03\x02" +
		"\x02\x02\u0410\u0411\x03\x02\x02\x02\u0411\u0412\x03\x02\x02\x02\u0412" +
		"\u0414\x05\xBE`\x02\u0413\u0415\t\x06\x02\x02\u0414\u0413\x03\x02\x02" +
		"\x02\u0414\u0415\x03\x02\x02\x02\u0415S\x03\x02\x02\x02\u0416\u0417\x07" +
		"<\x02\x02\u0417\u0419\x07\xD8\x02\x02\u0418\u041A\x05\xB0Y\x02\u0419\u0418" +
		"\x03\x02\x02\x02\u0419\u041A\x03\x02\x02\x02\u041A\u041B\x03\x02\x02\x02" +
		"\u041B\u041C\x05\xC2b\x02\u041CU\x03\x02\x02\x02\u041D\u041E\x07<\x02" +
		"\x02\u041E\u0420\x07\xC0\x02\x02\u041F\u0421\x05\xB0Y\x02\u0420\u041F" +
		"\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\u0422\x03\x02\x02\x02" +
		"\u0422\u0424\x05\xC0a\x02\u0423\u0425\x07\x18\x02\x02\u0424\u0423\x03" +
		"\x02\x02\x02\u0424\u0425\x03\x02\x02\x02\u0425W\x03\x02\x02\x02\u0426" +
		"\u0428\x07<\x02\x02\u0427\u0429\x07b\x02\x02\u0428\u0427\x03\x02\x02\x02" +
		"\u0428\u0429\x03\x02\x02\x02\u0429\u042A\x03\x02\x02\x02\u042A\u042B\x07" +
		"\xB9\x02\x02\u042B\u042E\x05\xC0a\x02\u042C\u042D\x07\x94\x02\x02\u042D" +
		"\u042F\x05\u0136\x9C\x02\u042E\u042C\x03\x02\x02\x02\u042E\u042F\x03\x02" +
		"\x02\x02\u042FY\x03\x02\x02\x02\u0430\u0432\x07<\x02\x02\u0431\u0433\x07" +
		"\x0E\x02\x02\u0432\u0431\x03\x02\x02\x02\u0432\u0433\x03\x02\x02\x02\u0433" +
		"\u0434\x03\x02\x02\x02\u0434\u0436\x07V\x02\x02\u0435\u0437\x05\xB0Y\x02" +
		"\u0436\u0435\x03\x02\x02\x02\u0436\u0437\x03\x02\x02\x02\u0437\u0438\x03" +
		"\x02\x02\x02\u0438\u0445\x05\xC4c\x02\u0439\u0442\x07\xFB\x02\x02\u043A" +
		"\u043F\x05\u014E\xA8\x02\u043B\u043C\x07\xF9\x02\x02\u043C\u043E\x05\u014E" +
		"\xA8\x02\u043D\u043B\x03\x02\x02\x02\u043E\u0441\x03\x02\x02\x02\u043F" +
		"\u043D\x03\x02\x02\x02\u043F\u0440\x03\x02\x02\x02\u0440\u0443\x03\x02" +
		"\x02\x02\u0441\u043F\x03\x02\x02\x02\u0442\u043A\x03\x02\x02\x02\u0442" +
		"\u0443\x03\x02\x02\x02\u0443\u0444\x03\x02\x02\x02\u0444\u0446\x07\xFC" +
		"\x02\x02\u0445\u0439\x03\x02\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446" +
		"[\x03\x02\x02\x02\u0447\u0448\x07<\x02\x02\u0448\u0449\x07\xA9\x02\x02" +
		"\u0449\u044A\x05\u016A\xB6\x02\u044A]\x03\x02\x02\x02\u044B\u044E\x05" +
		"`1\x02\u044C\u044E\x05b2\x02\u044D\u044B\x03\x02\x02\x02\u044D\u044C\x03" +
		"\x02\x02\x02\u044E_\x03\x02\x02\x02\u044F\u0450\x07X\x02\x02\u0450\u0451" +
		"\x07\xA9\x02\x02\u0451\u0452\x05\u016A\xB6\x02\u0452\u0453\x07\xC5\x02" +
		"\x02\u0453\u0454\x07Y\x02\x02\u0454\u0455\x05\u016A\xB6\x02\u0455a\x03" +
		"\x02\x02\x02\u0456\u0457\x07X\x02\x02\u0457\u0458\x05\u0162\xB2\x02\u0458" +
		"\u0459\x07\x8B\x02\x02\u0459\u045B\x05\u0164\xB3\x02\u045A\u045C\x05\u0166" +
		"\xB4\x02\u045B\u045A\x03\x02\x02\x02\u045B\u045C\x03\x02\x02\x02\u045C" +
		"\u045D\x03\x02\x02\x02\u045D\u045E\x07\xC5\x02\x02\u045E\u045F\x05\u0168" +
		"\xB5\x02\u045Fc\x03\x02\x02\x02\u0460\u0463\x05f4\x02\u0461\u0463\x05" +
		"h5\x02\u0462\u0460\x03\x02\x02\x02\u0462\u0461\x03\x02\x02\x02\u0463e" +
		"\x03\x02\x02\x02\u0464\u0465\x07\xA4\x02\x02\u0465\u0466\x07\xA9\x02\x02" +
		"\u0466\u0467\x05\u016A\xB6\x02\u0467\u0468\x07T\x02\x02\u0468\u0469\x07" +
		"Y\x02\x02\u0469\u046A\x05\u016A\xB6\x02\u046Ag\x03\x02\x02\x02\u046B\u046F" +
		"\x07\xA4\x02\x02\u046C\u046D\x07X\x02\x02\u046D\u046E\x07\x8C\x02\x02" +
		"\u046E\u0470\x07P\x02\x02\u046F\u046C\x03\x02\x02\x02\u046F\u0470\x03" +
		"\x02\x02\x02\u0470\u0471\x03\x02\x02\x02\u0471\u0472\x05\u0162\xB2\x02" +
		"\u0472\u0473\x07\x8B\x02\x02\u0473\u0475\x05\u0164\xB3\x02\u0474\u0476" +
		"\x05\u0166\xB4\x02\u0475\u0474\x03\x02\x02\x02\u0475\u0476\x03\x02\x02" +
		"\x02\u0476\u0477\x03\x02\x02\x02\u0477\u047D\x07T\x02\x02\u0478\u047E" +
		"\x05\u0168\xB5\x02\u0479\u047B\x07\xA9\x02\x02\u047A\u0479\x03\x02\x02" +
		"\x02\u047A\u047B\x03\x02\x02\x02\u047B\u047C\x03\x02\x02\x02\u047C\u047E" +
		"\x05\u016A\xB6\x02\u047D\u0478\x03\x02\x02\x02\u047D\u047A\x03\x02\x02" +
		"\x02\u047Ei\x03\x02\x02\x02\u047F\u0481\x05\xD4k\x02\u0480\u047F\x03\x02" +
		"\x02\x02\u0480\u0481\x03\x02\x02\x02\u0481\u0482\x03\x02\x02\x02\u0482" +
		"\u0483\x07e\x02\x02\u0483\u0485\t\x07\x02\x02\u0484\u0486\x07\xC0\x02" +
		"\x02\u0485\u0484\x03\x02\x02\x02\u0485\u0486\x03\x02\x02\x02\u0486\u0487" +
		"\x03\x02\x02\x02\u0487\u0489\x05\xC0a\x02\u0488\u048A\x05\u0128\x95\x02" +
		"\u0489\u0488\x03\x02\x02\x02\u0489\u048A\x03\x02\x02\x02\u048A\u0497\x03" +
		"\x02\x02\x02\u048B\u048C\x07\x94\x02\x02\u048C\u048D\x07\xFB\x02\x02\u048D" +
		"\u0492\x05\u0136\x9C\x02\u048E\u048F\x07\xF9\x02\x02\u048F\u0491\x05\u0136" +
		"\x9C\x02\u0490\u048E\x03\x02\x02\x02\u0491\u0494\x03\x02\x02\x02\u0492" +
		"\u0490\x03\x02\x02\x02\u0492\u0493\x03\x02\x02\x02\u0493\u0495\x03\x02" +
		"\x02\x02\u0494\u0492\x03\x02\x02\x02\u0495\u0496\x07\xFC\x02\x02\u0496" +
		"\u0498\x03\x02\x02\x02\u0497\u048B\x03\x02\x02\x02\u0497\u0498\x03\x02" +
		"\x02\x02\u0498\u0499\x03\x02\x02\x02\u0499\u049A\x05\xD2j\x02\u049Ak\x03" +
		"\x02\x02\x02\u049B\u049E\x05n8\x02\u049C\u049E\x05p9\x02\u049D\u049B\x03" +
		"\x02\x02\x02\u049D\u049C\x03\x02\x02\x02\u049Em\x03\x02\x02\x02\u049F" +
		"\u04A1\x074\x02\x02\u04A0\u04A2\x07T\x02\x02\u04A1\u04A0\x03\x02\x02\x02" +
		"\u04A1\u04A2\x03\x02\x02\x02\u04A2\u04A3\x03\x02\x02\x02\u04A3\u04A6\x05" +
		"\xC0a\x02\u04A4\u04A5\x07\xDB\x02\x02\u04A5\u04A7\x05\u0138\x9D\x02\u04A6" +
		"\u04A4\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02\u04A7o\x03\x02\x02" +
		"\x02\u04A8\u04A9\x074\x02\x02\u04A9\u04AE\x05\xC0a\x02\u04AA\u04AC\x07" +
		"\v\x02\x02\u04AB\u04AA\x03\x02\x02\x02\u04AB\u04AC\x03\x02\x02\x02\u04AC" +
		"\u04AD\x03\x02\x02\x02\u04AD\u04AF\x05\u016A\xB6\x02\u04AE\u04AB\x03\x02" +
		"\x02\x02\u04AE\u04AF\x03\x02\x02\x02\u04AF\u04B0\x03\x02\x02\x02\u04B0" +
		"\u04B9\x07T\x02\x02\u04B1\u04B6\x05\u011C\x8F\x02\u04B2\u04B3\x07\xF9" +
		"\x02\x02\u04B3\u04B5\x05\u011C\x8F\x02\u04B4\u04B2\x03\x02\x02\x02\u04B5" +
		"\u04B8\x03\x02\x02\x02\u04B6\u04B4\x03\x02\x02\x02\u04B6\u04B7\x03\x02" +
		"\x02\x02\u04B7\u04BA\x03\x02\x02\x02\u04B8\u04B6\x03\x02\x02\x02\u04B9" +
		"\u04B1\x03\x02\x02\x02\u04B9\u04BA\x03\x02\x02\x02\u04BA\u04BD\x03\x02" +
		"\x02\x02\u04BB\u04BC\x07\xDB\x02\x02\u04BC\u04BE\x05\u0138\x9D\x02\u04BD" +
		"\u04BB\x03\x02\x02\x02\u04BD\u04BE\x03\x02\x02\x02\u04BEq\x03\x02\x02" +
		"\x02\u04BF\u04C0\x078\x02\x02\u04C0\u04C1\x05\xC0a\x02\u04C1\u04C2\x07" +
		"\xB3\x02\x02\u04C2\u04CC\x05\xCCg\x02\u04C3\u04C4\x07T\x02\x02\u04C4\u04C9" +
		"\x05\u011C\x8F\x02\u04C5\u04C6\x07\xF9\x02\x02\u04C6\u04C8\x05\u011C\x8F" +
		"\x02\u04C7\u04C5\x03\x02\x02\x02\u04C8\u04CB\x03\x02\x02\x02\u04C9\u04C7" +
		"\x03\x02\x02\x02\u04C9\u04CA\x03\x02\x02\x02\u04CA\u04CD\x03\x02\x02\x02" +
		"\u04CB\u04C9\x03\x02\x02\x02\u04CC\u04C3\x03\x02\x02\x02\u04CC\u04CD\x03" +
		"\x02\x02\x02\u04CD\u04D0\x03\x02\x02\x02\u04CE\u04CF\x07\xDB\x02\x02\u04CF" +
		"\u04D1\x05\u0138\x9D\x02\u04D0\u04CE\x03\x02\x02\x02\u04D0\u04D1\x03\x02" +
		"\x02\x02\u04D1s\x03\x02\x02\x02\u04D2\u04D3\x07\xD3\x02\x02\u04D3\u04D5" +
		"\x07i\x02\x02\u04D4\u04D6\x07\xC0\x02\x02\u04D5\u04D4\x03\x02\x02\x02" +
		"\u04D5\u04D6\x03\x02\x02\x02\u04D6\u04D7\x03\x02\x02\x02\u04D7\u04D9\x05" +
		"\xC0a\x02\u04D8\u04DA\x05\u0128\x95\x02\u04D9\u04D8\x03\x02\x02\x02\u04D9" +
		"\u04DA\x03\x02\x02\x02\u04DA\u04DB\x03\x02\x02\x02\u04DB\u04DC\x05\xD2" +
		"j\x02\u04DCu\x03\x02\x02\x02\u04DD\u04EA\x05\x8AF\x02\u04DE\u04EA\x05" +
		"\x8CG\x02\u04DF\u04EA\x05\x8EH\x02\u04E0\u04EA\x05\x88E\x02\u04E1\u04EA" +
		"\x05\x86D\x02\u04E2\u04EA\x05\x84C\x02\u04E3\u04EA\x05\x82B\x02\u04E4" +
		"\u04EA\x05\x80A\x02\u04E5\u04EA\x05~@\x02\u04E6\u04EA\x05|?\x02\u04E7" +
		"\u04EA\x05z>\x02\u04E8\u04EA\x05x=\x02\u04E9\u04DD\x03\x02\x02\x02\u04E9" +
		"\u04DE\x03\x02\x02\x02\u04E9\u04DF\x03\x02\x02\x02\u04E9\u04E0\x03\x02" +
		"\x02\x02\u04E9\u04E1\x03\x02\x02\x02\u04E9\u04E2\x03\x02\x02\x02\u04E9" +
		"\u04E3\x03\x02\x02\x02\u04E9\u04E4\x03\x02\x02\x02\u04E9\u04E5\x03\x02" +
		"\x02\x02\u04E9\u04E6\x03\x02\x02\x02\u04E9\u04E7\x03\x02\x02\x02\u04E9" +
		"\u04E8\x03\x02\x02\x02\u04EAw\x03\x02\x02\x02\u04EB\u04EC\x07\xB6\x02" +
		"\x02\u04EC\u04F8\t\b\x02\x02\u04ED\u04EF\x07u\x02\x02\u04EE\u04ED\x03" +
		"\x02\x02\x02\u04EE\u04EF\x03\x02\x02\x02\u04EF\u04F0\x03\x02\x02\x02\u04F0" +
		"\u04F5\x05\u0140\xA1\x02\u04F1\u04F2\x07\u0101\x02\x02\u04F2\u04F4\x05" +
		"\u0140\xA1\x02\u04F3\u04F1\x03\x02\x02\x02\u04F4\u04F7\x03\x02\x02\x02" +
		"\u04F5\u04F3\x03\x02\x02\x02\u04F5\u04F6\x03\x02\x02\x02\u04F6\u04F9\x03" +
		"\x02\x02\x02\u04F7\u04F5\x03\x02\x02\x02\u04F8\u04EE\x03\x02\x02\x02\u04F8" +
		"\u04F9\x03\x02\x02\x02\u04F9y\x03\x02\x02\x02\u04FA\u04FB\x07\xB6\x02" +
		"\x02\u04FB\u04FE\x07\xC1\x02\x02\u04FC\u04FD\x07`\x02\x02\u04FD\u04FF" +
		"\x05\xC0a\x02\u04FE\u04FC\x03\x02\x02\x02\u04FE\u04FF\x03\x02\x02\x02" +
		"\u04FF\u050B\x03\x02\x02\x02\u0500\u0502\x07u\x02\x02\u0501\u0500\x03" +
		"\x02\x02\x02\u0501\u0502\x03\x02\x02\x02\u0502\u0503\x03\x02\x02\x02\u0503" +
		"\u0508\x05\u0140\xA1\x02\u0504\u0505\x07\u0101\x02\x02\u0505\u0507\x05" +
		"\u0140\xA1\x02\u0506\u0504\x03\x02\x02\x02\u0507\u050A\x03\x02\x02\x02" +
		"\u0508\u0506\x03\x02\x02\x02\u0508\u0509\x03\x02\x02\x02\u0509\u050C\x03" +
		"\x02\x02\x02\u050A\u0508\x03\x02\x02\x02\u050B\u0501\x03\x02\x02\x02\u050B" +
		"\u050C\x03\x02\x02\x02\u050C{\x03\x02\x02\x02\u050D\u050F\x07\xB6\x02" +
		"\x02\u050E\u0510\t\t\x02\x02\u050F\u050E\x03\x02\x02\x02\u050F\u0510\x03" +
		"\x02\x02\x02\u0510\u0511\x03\x02\x02\x02\u0511\u0514\x07W\x02\x02\u0512" +
		"\u0513\x07`\x02\x02\u0513\u0515\x05\xBE`\x02\u0514\u0512\x03\x02\x02\x02" +
		"\u0514\u0515\x03\x02\x02\x02\u0515\u0521\x03\x02\x02\x02\u0516\u0518\x07" +
		"u\x02\x02\u0517\u0516\x03\x02\x02\x02\u0517\u0518\x03\x02\x02\x02\u0518" +
		"\u0519\x03\x02\x02\x02\u0519\u051E\x05\u0140\xA1\x02\u051A\u051B\x07\u0101" +
		"\x02\x02\u051B\u051D\x05\u0140\xA1\x02\u051C\u051A\x03\x02\x02\x02\u051D" +
		"\u0520\x03\x02\x02\x02\u051E\u051C\x03\x02\x02\x02\u051E\u051F\x03\x02" +
		"\x02\x02\u051F\u0522\x03\x02\x02\x02\u0520\u051E\x03\x02\x02\x02\u0521" +
		"\u0517\x03\x02\x02\x02\u0521\u0522\x03\x02\x02\x02\u0522}\x03\x02\x02" +
		"\x02\u0523\u0524\x07\xB6\x02\x02\u0524\u0525\x07\'\x02\x02\u0525\u0526" +
		"\x07\xC0\x02\x02\u0526\u0527\x05\xC0a\x02\u0527\x7F\x03\x02\x02\x02\u0528" +
		"\u0529\x07\xB6\x02\x02\u0529\u052A\x07\'\x02\x02\u052A\u052B\x07\xD8\x02" +
		"\x02\u052B\u052C\x05\xC2b\x02\u052C\x81\x03\x02\x02\x02\u052D\u052E\x07" +
		"\xB6\x02\x02\u052E\u052F\x07\xC0\x02\x02\u052F\u0530\x07\xB9\x02\x02\u0530" +
		"\u0531\x05\xC0a\x02\u0531\x83\x03\x02\x02\x02\u0532\u0533\x07\xB6\x02" +
		"\x02\u0533\u0534\x07\"\x02\x02\u0534\u0535\x07\xB9\x02\x02\u0535\u0536" +
		"\x05\xC0a\x02\u0536\x85\x03\x02\x02\x02\u0537\u0539\x07\xB6\x02\x02\u0538" +
		"\u053A\x07\x9D\x02\x02\u0539\u0538\x03\x02\x02\x02\u0539\u053A\x03\x02" +
		"\x02\x02\u053A\u053B\x03\x02\x02\x02\u053B\u053C";
	private static readonly _serializedATNSegment3: string =
		"\x07\x95\x02\x02\u053C\u053D\x05\xC0a\x02\u053D\x87\x03\x02\x02\x02\u053E" +
		"\u053F\x07\xB6\x02\x02\u053F\u0540\x07K\x02\x02\u0540\u0541\x07`\x02\x02" +
		"\u0541\u054B\x05\xC0a\x02\u0542\u0543\x07\x94\x02\x02\u0543\u0544\x07" +
		"\xFB\x02\x02\u0544\u0547\x05\u0136\x9C\x02\u0545\u0546\x07\xF9\x02\x02" +
		"\u0546\u0548\x05\u0136\x9C\x02\u0547\u0545\x03\x02\x02\x02\u0547\u0548" +
		"\x03\x02\x02\x02\u0548\u0549\x03\x02\x02\x02\u0549\u054A\x07\xFC\x02\x02" +
		"\u054A\u054C\x03\x02\x02\x02\u054B\u0542\x03\x02\x02\x02\u054B\u054C\x03" +
		"\x02\x02\x02\u054C\x89\x03\x02\x02\x02\u054D\u054F\x07\xB6\x02\x02\u054E" +
		"\u0550\x07)\x02\x02\u054F\u054E\x03\x02\x02\x02\u054F\u0550\x03\x02\x02" +
		"\x02\u0550\u0551\x03\x02\x02\x02\u0551\u0552\x07\xAA\x02\x02\u0552\x8B" +
		"\x03\x02\x02\x02\u0553\u0554\x07\xB6\x02\x02\u0554\u0555\x07\xA9\x02\x02" +
		"\u0555\u0556\x07X\x02\x02\u0556\u0557\x07Y\x02\x02\u0557\u0558\x05\u016A" +
		"\xB6\x02\u0558\x8D\x03\x02\x02\x02\u0559\u0568\x05\x90I\x02\u055A\u0568" +
		"\x05\x92J\x02\u055B\u0568\x05\x94K\x02\u055C\u055D\x07\xB6\x02\x02\u055D" +
		"\u055E\x07X\x02\x02\u055E\u055F\t\n\x02\x02\u055F\u0565\x05\u016A\xB6" +
		"\x02\u0560\u0561\x07\x8B\x02\x02\u0561\u0563\t\v\x02\x02\u0562\u0564\x05" +
		"\u0166\xB4\x02\u0563\u0562\x03\x02\x02\x02\u0563\u0564\x03\x02\x02\x02" +
		"\u0564\u0566\x03\x02\x02\x02\u0565\u0560\x03\x02\x02\x02\u0565\u0566\x03" +
		"\x02\x02\x02\u0566\u0568\x03\x02\x02\x02\u0567\u0559\x03\x02\x02\x02\u0567" +
		"\u055A\x03\x02\x02\x02\u0567\u055B\x03\x02\x02\x02\u0567\u055C\x03\x02" +
		"\x02\x02\u0568\x8F\x03\x02\x02\x02\u0569\u056A\x07\xB6\x02\x02\u056A\u056B" +
		"\x07X\x02\x02\u056B\u056C\t\n\x02\x02\u056C\u0572\x05\u016A\xB6\x02\u056D" +
		"\u056E\x07\x8B\x02\x02\u056E\u0570\x070\x02\x02\u056F\u0571\x05\xBE`\x02" +
		"\u0570\u056F\x03\x02\x02\x02\u0570\u0571\x03\x02\x02\x02\u0571\u0573\x03" +
		"\x02\x02\x02\u0572\u056D\x03\x02\x02\x02\u0572\u0573\x03\x02\x02\x02\u0573" +
		"\x91\x03\x02\x02\x02\u0574\u0575\x07\xB6\x02\x02\u0575\u0576\x07X\x02" +
		"\x02\u0576\u0577\t\n\x02\x02\u0577\u057D\x05\u016A\xB6\x02\u0578\u0579" +
		"\x07\x8B\x02\x02\u0579\u057B\x07\xC0\x02\x02\u057A\u057C\x05\xC0a\x02" +
		"\u057B\u057A\x03\x02\x02\x02\u057B\u057C\x03\x02\x02\x02\u057C\u057E\x03" +
		"\x02\x02\x02\u057D\u0578\x03\x02\x02\x02\u057D\u057E\x03\x02\x02\x02\u057E" +
		"\x93\x03\x02\x02\x02\u057F\u0580\x07\xB6\x02\x02\u0580\u0581\x07X\x02" +
		"\x02\u0581\u0582\t\n\x02\x02\u0582\u0588\x05\u016A\xB6\x02\u0583\u0584" +
		"\x07\x8B\x02\x02\u0584\u0586\x07\"\x02\x02\u0585\u0587\x05\xC6d\x02\u0586" +
		"\u0585\x03\x02\x02\x02\u0586\u0587\x03\x02\x02\x02\u0587\u0589\x03\x02" +
		"\x02\x02\u0588\u0583\x03\x02\x02\x02\u0588\u0589\x03\x02\x02\x02\u0589" +
		"\x95\x03\x02\x02\x02\u058A\u058E\x05\x98M\x02\u058B\u058E\x05\x9AN\x02" +
		"\u058C\u058E\x05\x9CO\x02\u058D\u058A\x03\x02\x02\x02\u058D\u058B\x03" +
		"\x02\x02\x02\u058D\u058C\x03\x02\x02\x02\u058E\x97\x03\x02\x02\x02\u058F" +
		"\u0590\x07$\x02\x02\u0590\u0591\x07\x8B\x02\x02\u0591\u0592\x070\x02\x02" +
		"\u0592\u0593\x05\xBE`\x02\u0593\u0596\x07n\x02\x02\u0594\u0597\x05\u0140" +
		"\xA1\x02\u0595\u0597\x07\x88\x02\x02\u0596\u0594\x03\x02\x02\x02\u0596" +
		"\u0595\x03\x02\x02\x02\u0597\x99\x03\x02\x02\x02\u0598\u0599\x07$\x02" +
		"\x02\u0599\u059A\x07\x8B\x02\x02\u059A\u059B\x07\xC0\x02\x02\u059B\u059C" +
		"\x05\xC0a\x02\u059C\u059F\x07n\x02\x02\u059D\u05A0\x05\u0140\xA1\x02\u059E" +
		"\u05A0\x07\x88\x02\x02\u059F\u059D\x03\x02\x02\x02\u059F\u059E\x03\x02" +
		"\x02\x02\u05A0\x9B\x03\x02\x02\x02\u05A1\u05A2\x07$\x02\x02\u05A2\u05A3" +
		"\x07\x8B\x02\x02\u05A3\u05A4\x07\"\x02\x02\u05A4\u05A5\x05\xC6d\x02\u05A5" +
		"\u05A8\x07n\x02\x02\u05A6\u05A9\x05\u0140\xA1\x02\u05A7\u05A9\x07\x88" +
		"\x02\x02\u05A8\u05A6\x03\x02\x02\x02\u05A8\u05A7\x03\x02\x02\x02\u05A9" +
		"\x9D\x03\x02\x02\x02\u05AA\u05AB\x07E\x02\x02\u05AB\u05AC\x05\x04\x03" +
		"\x02\u05AC\x9F\x03\x02\x02\x02\u05AD\u05B3\x07\xB3\x02\x02\u05AE\u05B4" +
		"\x07\x04\x02\x02\u05AF\u05B0\x05\u016A\xB6\x02\u05B0\u05B1\x07\xEB\x02" +
		"\x02\u05B1\u05B2\x05\u0136\x9C\x02\u05B2\u05B4\x03\x02\x02\x02\u05B3\u05AE" +
		"\x03\x02\x02\x02\u05B3\u05AF\x03\x02\x02\x02\u05B3\u05B4\x03\x02\x02\x02" +
		"\u05B4\xA1\x03\x02\x02\x02\u05B5\u05B6\x07\xFA\x02\x02\u05B6\u05B7\x07" +
		"\xB7\x02\x02\u05B7\u05C1\x07\xFB\x02\x02\u05B8\u05BA\x05\u0140\xA1\x02" +
		"\u05B9\u05B8\x03\x02\x02\x02\u05B9\u05BA\x03\x02\x02\x02\u05BA\u05C2\x03" +
		"\x02\x02\x02\u05BB\u05BE\x05\u0140\xA1\x02\u05BC\u05BD\x07\xF9\x02\x02" +
		"\u05BD\u05BF\x05\u0136\x9C\x02\u05BE\u05BC\x03\x02\x02\x02\u05BE\u05BF" +
		"\x03\x02\x02\x02\u05BF\u05C2\x03\x02\x02\x02\u05C0\u05C2\x05\u0136\x9C" +
		"\x02\u05C1\u05B9\x03\x02\x02\x02\u05C1\u05BB\x03\x02\x02\x02\u05C1\u05C0" +
		"\x03\x02\x02\x02\u05C2\u05C3\x03\x02\x02\x02\u05C3\u05C4\x07\xFC\x02\x02" +
		"\u05C4\xA3\x03\x02\x02\x02\u05C5\u05C6\x07m\x02\x02\u05C6\u05C7\x07{\x02" +
		"\x02\u05C7\u05C8\x05\xC0a\x02\u05C8\xA5\x03\x02\x02\x02\u05C9\u05CA\x07" +
		"x\x02\x02\u05CA\u05CB\x07/\x02\x02\u05CB\u05CC\x07d\x02\x02\u05CC\u05CE" +
		"\x07\u0104\x02\x02\u05CD\u05CF\x07\x93\x02\x02\u05CE\u05CD\x03\x02\x02" +
		"\x02\u05CE\u05CF\x03\x02\x02\x02\u05CF\u05D0\x03\x02\x02\x02\u05D0\u05D1" +
		"\x07i\x02\x02\u05D1\u05D2\x07\xC0\x02\x02\u05D2\u05DC\x05\xC0a\x02\u05D3" +
		"\u05D4\x07\x94\x02\x02\u05D4\u05D5\x07\xFB\x02\x02\u05D5\u05D8\x05\u0136" +
		"\x9C\x02\u05D6\u05D7\x07\xF9\x02\x02\u05D7\u05D9\x05\u0136\x9C\x02\u05D8" +
		"\u05D6\x03\x02\x02\x02\u05D8\u05D9\x03\x02\x02\x02\u05D9\u05DA\x03\x02" +
		"\x02\x02\u05DA\u05DB\x07\xFC\x02\x02\u05DB\u05DD\x03\x02\x02\x02\u05DC" +
		"\u05D3\x03\x02\x02\x02\u05DC\u05DD\x03\x02\x02\x02\u05DD\xA7\x03\x02\x02" +
		"\x02\u05DE\u05E2\x05\xAAV\x02\u05DF\u05E2\x05\xACW\x02\u05E0\u05E2\x05" +
		"\xAEX\x02\u05E1\u05DE\x03\x02\x02\x02\u05E1\u05DF\x03\x02\x02\x02\u05E1" +
		"\u05E0\x03\x02\x02\x02\u05E2\xA9\x03\x02\x02\x02\u05E3\u05E4\x07\xA5\x02" +
		"\x02\u05E4\u05F1\x05\xC0a\x02\u05E5\u05E6\x07\x94\x02\x02\u05E6\u05E7" +
		"\x07\xFB\x02\x02\u05E7\u05EC\x05\u0136\x9C\x02\u05E8\u05E9\x07\xF9\x02" +
		"\x02\u05E9\u05EB\x05\u0136\x9C\x02\u05EA\u05E8\x03\x02\x02\x02\u05EB\u05EE" +
		"\x03\x02\x02\x02\u05EC\u05ED\x03\x02\x02\x02\u05EC\u05EA\x03\x02\x02\x02" +
		"\u05ED\u05EF\x03\x02\x02\x02\u05EE\u05EC\x03\x02\x02\x02\u05EF\u05F0\x07" +
		"\xFC\x02\x02\u05F0\u05F2\x03\x02\x02\x02\u05F1\u05E5\x03\x02\x02\x02\u05F1" +
		"\u05F2\x03\x02\x02\x02\u05F2\xAB\x03\x02\x02\x02\u05F3\u05F4\x07\xA5\x02" +
		"\x02\u05F4\u05F5\x07\x0F\x02\x02\u05F5\xAD\x03\x02\x02\x02\u05F6\u05F7" +
		"\x07\xA5\x02\x02\u05F7\u05F8\x07W\x02\x02\u05F8\u05F9\x05\xC4c\x02\u05F9" +
		"\xAF\x03\x02\x02\x02\u05FA\u05FB\x07_\x02\x02\u05FB\u05FC\x07D\x02\x02" +
		"\u05FC\xB1\x03\x02\x02\x02\u05FD\u05FE\x07_\x02\x02\u05FE\u05FF\x07\x87" +
		"\x02\x02\u05FF\u0600\x07D\x02\x02\u0600\xB3\x03\x02\x02\x02\u0601\u0602" +
		"\x05\u0166\xB4\x02\u0602\xB5\x03\x02\x02\x02\u0603\u0604\x05\u0166\xB4" +
		"\x02\u0604\xB7\x03\x02\x02\x02\u0605\u0606\x05\u0166\xB4\x02\u0606\xB9" +
		"\x03\x02\x02\x02\u0607\u0608\x05\u0166\xB4\x02\u0608\xBB\x03\x02\x02\x02" +
		"\u0609\u060A\x05\u0166\xB4\x02\u060A\xBD\x03\x02\x02\x02\u060B\u060C\x05" +
		"\u0166\xB4\x02\u060C\xBF\x03\x02\x02\x02\u060D\u0612\x05\u016A\xB6\x02" +
		"\u060E\u060F\x07\xF7\x02\x02\u060F\u0611\x05\u016A\xB6\x02\u0610\u060E" +
		"\x03\x02\x02\x02\u0611\u0614\x03\x02\x02\x02\u0612\u0610\x03\x02\x02\x02" +
		"\u0612\u0613\x03\x02\x02\x02\u0613\xC1\x03\x02\x02\x02\u0614\u0612\x03" +
		"\x02\x02\x02\u0615\u061A\x05\u016A\xB6\x02\u0616\u0617\x07\xF7\x02\x02" +
		"\u0617\u0619\x05\u016A\xB6\x02\u0618\u0616\x03\x02\x02\x02\u0619\u061C" +
		"\x03\x02\x02\x02\u061A\u0618\x03\x02\x02\x02\u061A\u061B\x03\x02\x02\x02" +
		"\u061B\xC3\x03\x02\x02\x02\u061C\u061A\x03\x02\x02\x02\u061D\u0620\x05" +
		"\u016E\xB8\x02\u061E\u0620\x05\u0166\xB4\x02\u061F\u061D\x03\x02\x02\x02" +
		"\u061F\u061E\x03\x02\x02\x02\u0620\xC5\x03\x02\x02\x02\u0621\u0622\x05" +
		"\u0166\xB4\x02\u0622\xC7\x03\x02\x02\x02\u0623\u0626\x05\xC0a\x02\u0624" +
		"\u0626\x05\xC2b\x02\u0625\u0623\x03\x02\x02\x02\u0625\u0624\x03\x02\x02" +
		"\x02\u0626\xC9\x03\x02\x02\x02\u0627\u0628\x07\x17\x02\x02\u0628\u0629" +
		"\x07\x1C\x02\x02\u0629\u062B\x05\u0128\x95\x02\u062A\u0627\x03\x02\x02" +
		"\x02\u062A\u062B\x03\x02\x02\x02\u062B\u062E\x03\x02\x02\x02\u062C\u062D" +
		"\x07$\x02\x02\u062D\u062F\x05\u0140\xA1\x02\u062E\u062C\x03\x02\x02\x02" +
		"\u062E\u062F\x03\x02\x02\x02\u062F\u0633\x03\x02\x02\x02\u0630\u0631\x07" +
		"\xAB\x02\x02\u0631\u0632\x07Q\x02\x02\u0632\u0634\x05\u0102\x82\x02\u0633" +
		"\u0630\x03\x02\x02\x02\u0633\u0634\x03\x02\x02\x02\u0634\u0638\x03\x02" +
		"\x02\x02\u0635\u0636\x07\xDC\x02\x02\u0636\u0637\x07\xB2\x02\x02\u0637" +
		"\u0639\x05\xFC\x7F\x02\u0638\u0635\x03\x02\x02\x02\u0638\u0639\x03\x02" +
		"\x02\x02\u0639\u063D\x03\x02\x02\x02\u063A\u063B\x07\x19\x02\x02\u063B" +
		"\u063C\x07\v\x02\x02\u063C\u063E\x05\xEAv\x02\u063D\u063A\x03\x02\x02" +
		"\x02\u063D\u063E\x03\x02\x02\x02\u063E\u0641\x03\x02\x02\x02\u063F\u0640" +
		"\x07\x1A\x02\x02\u0640\u0642\x05\u0140\xA1\x02\u0641\u063F\x03\x02\x02" +
		"\x02\u0641\u0642\x03\x02\x02\x02\u0642\u064D\x03\x02\x02\x02\u0643\u0644" +
		"\x07 \x02\x02\u0644\u0645\x07`\x02\x02\u0645\u064A\x05\u0166\xB4\x02\u0646" +
		"\u0647\x07\xDC\x02\x02\u0647\u0648\x07\x9A\x02\x02\u0648\u0649\x07\xEB" +
		"\x02\x02\u0649\u064B\x07\u0107\x02\x02\u064A\u0646\x03\x02\x02\x02\u064A" +
		"\u064B\x03\x02\x02\x02\u064B\u064E\x03\x02\x02\x02\u064C\u064E\x07\xC9" +
		"\x02\x02\u064D\u0643\x03\x02\x02\x02\u064D\u064C\x03\x02\x02\x02\u064D" +
		"\u064E\x03\x02\x02\x02\u064E\u0651\x03\x02\x02\x02\u064F\u0650\x07\x1B" +
		"\x02\x02\u0650\u0652\x05\xFC\x7F\x02\u0651\u064F\x03\x02\x02\x02\u0651" +
		"\u0652\x03\x02\x02\x02\u0652\xCB\x03\x02\x02\x02\u0653\u0658\x05\xCEh" +
		"\x02\u0654\u0655\x07\xF9\x02\x02\u0655\u0657\x05\xCEh\x02\u0656\u0654" +
		"\x03\x02\x02\x02\u0657\u065A\x03\x02\x02\x02\u0658\u0656\x03\x02\x02\x02" +
		"\u0658\u0659\x03\x02\x02\x02\u0659\xCD\x03\x02\x02\x02\u065A\u0658\x03" +
		"\x02\x02\x02\u065B\u065C\x05\u0166\xB4\x02\u065C\u065D\x07\xEB\x02\x02" +
		"\u065D\u065E\x05\u0136\x9C\x02\u065E\xCF\x03\x02\x02\x02\u065F\u0660\x07" +
		"\xFB\x02\x02\u0660\u0663\x05\xC6d\x02\u0661\u0662\x07$\x02\x02\u0662\u0664" +
		"\x05\u0140\xA1\x02\u0663\u0661\x03\x02\x02\x02\u0663\u0664\x03\x02\x02" +
		"\x02\u0664\u066D\x03\x02\x02\x02\u0665\u0666\x07\xF9\x02\x02\u0666\u0669" +
		"\x05\u016A\xB6\x02\u0667\u0668\x07$\x02\x02\u0668\u066A\x05\u0140\xA1" +
		"\x02\u0669\u0667\x03\x02\x02\x02\u0669\u066A\x03\x02\x02\x02\u066A\u066C" +
		"\x03\x02\x02\x02\u066B\u0665\x03\x02\x02\x02\u066C\u066F\x03\x02\x02\x02" +
		"\u066D\u066B\x03\x02\x02\x02\u066D\u066E\x03\x02\x02\x02\u066E\u0670\x03" +
		"\x02\x02\x02\u066F\u066D\x03\x02\x02\x02\u0670\u0671\x07\xFC\x02\x02\u0671" +
		"\xD1\x03\x02\x02\x02\u0672\u0674\x05\xD4k\x02\u0673\u0672\x03\x02\x02" +
		"\x02\u0673\u0674\x03\x02\x02\x02\u0674\u0675\x03\x02\x02\x02\u0675\u0676" +
		"\x05\u0106\x84\x02\u0676\xD3\x03\x02\x02\x02\u0677\u0678\x07\xDC\x02\x02" +
		"\u0678\u067D\x05\u0116\x8C\x02\u0679\u067A\x07\xF9\x02\x02\u067A\u067C" +
		"\x05\u0116\x8C\x02\u067B\u0679\x03\x02\x02\x02\u067C\u067F\x03\x02\x02" +
		"\x02\u067D\u067B\x03\x02\x02\x02\u067D\u067E\x03\x02\x02\x02\u067E\xD5" +
		"\x03\x02\x02\x02\u067F\u067D\x03\x02\x02\x02\u0680\u0681\x07\x99\x02\x02" +
		"\u0681\u0682\x07p\x02\x02\u0682\u0684\x05\u0128\x95\x02\u0683\u0685\x07" +
		"7\x02\x02\u0684\u0683\x03\x02\x02\x02\u0684\u0685\x03\x02\x02\x02\u0685" +
		"\u0689\x03\x02\x02\x02\u0686\u068A\x07\xE5\x02\x02\u0687\u0688\x07\xF9" +
		"\x02\x02\u0688\u068A\x07\xE5\x02\x02\u0689\u0686\x03\x02\x02\x02\u0689" +
		"\u0687\x03\x02\x02\x02\u0689\u068A\x03\x02\x02\x02\u068A\u068E\x03\x02" +
		"\x02\x02\u068B\u068F\x07\xE6\x02\x02\u068C\u068D\x07\xF9\x02\x02\u068D" +
		"\u068F\x07\xE6\x02\x02\u068E\u068B\x03\x02\x02\x02\u068E\u068C\x03\x02" +
		"\x02\x02\u068E\u068F\x03\x02\x02\x02\u068F\u069C\x03\x02\x02\x02\u0690" +
		"\u0691\x07\xF9\x02\x02\u0691\u0694\x05\xD8m\x02\u0692\u0694\x05\xD8m\x02" +
		"\u0693\u0690\x03\x02\x02\x02\u0693\u0692\x03\x02\x02\x02\u0694\u0699\x03" +
		"\x02\x02\x02\u0695\u0696\x07\xF9\x02\x02\u0696\u0698\x05\xD8m\x02\u0697" +
		"\u0695\x03\x02\x02\x02\u0698\u069B\x03\x02\x02\x02\u0699\u069A\x03\x02" +
		"\x02\x02\u0699\u0697\x03\x02\x02\x02\u069A\u069D\x03\x02\x02\x02\u069B" +
		"\u0699\x03\x02\x02\x02\u069C\u0693\x03\x02\x02\x02\u069C\u069D\x03\x02" +
		"\x02\x02\u069D\xD7\x03\x02\x02\x02\u069E\u069F\x07S\x02\x02\u069F\u06A0" +
		"\x07p\x02\x02\u06A0\u06A1\x05\u0128\x95\x02\u06A1\u06A2\x07\xE4\x02\x02" +
		"\u06A2\u06A3\x05\xC0a\x02\u06A3\u06A5\x05\u0128\x95\x02\u06A4\u06A6\x07" +
		"7\x02\x02\u06A5\u06A4\x03\x02\x02\x02\u06A5\u06A6\x03\x02\x02\x02\u06A6" +
		"\u06A8\x03\x02\x02\x02\u06A7\u06A9\x07\xE5\x02\x02\u06A8\u06A7\x03\x02" +
		"\x02\x02\u06A8\u06A9\x03\x02\x02\x02\u06A9\u06AB\x03\x02\x02\x02\u06AA" +
		"\u06AC\x07\xE6\x02\x02\u06AB\u06AA\x03\x02\x02\x02\u06AB\u06AC\x03\x02" +
		"\x02\x02\u06AC\xD9\x03\x02\x02\x02\u06AD\u06AE\x05\xBC_\x02\u06AE\u06B1" +
		"\x05\u014E\xA8\x02\u06AF\u06B0\x07$\x02\x02\u06B0\u06B2\x05\u0140\xA1" +
		"\x02\u06B1\u06AF\x03\x02\x02\x02\u06B1\u06B2\x03\x02\x02\x02\u06B2\xDB" +
		"\x03\x02\x02\x02\u06B3\u06B4\x05\xDEp\x02\u06B4\xDD\x03\x02\x02\x02\u06B5" +
		"\u06B6\x05\xBC_\x02\u06B6\u06BE\x05\u014E\xA8\x02\u06B7\u06BB\x05\xE4" +
		"s\x02\u06B8\u06BA\x05\xE4s\x02\u06B9\u06B8\x03\x02\x02\x02\u06BA\u06BD" +
		"\x03\x02\x02\x02\u06BB\u06BC\x03\x02\x02\x02\u06BB\u06B9\x03\x02\x02\x02" +
		"\u06BC\u06BF\x03\x02\x02\x02\u06BD\u06BB\x03\x02\x02\x02\u06BE\u06B7\x03" +
		"\x02\x02\x02\u06BE\u06BF\x03\x02\x02\x02\u06BF\u06C2\x03\x02\x02\x02\u06C0" +
		"\u06C1\x07$\x02\x02\u06C1\u06C3\x05\u0140\xA1\x02\u06C2\u06C0\x03\x02" +
		"\x02\x02\u06C2\u06C3\x03\x02\x02\x02\u06C3\u06C6\x03\x02\x02\x02\u06C4" +
		"\u06C5\x07\x99\x02\x02\u06C5\u06C7\x07p\x02\x02\u06C6\u06C4\x03\x02\x02" +
		"\x02\u06C6\u06C7\x03\x02\x02\x02\u06C7\xDF\x03\x02\x02\x02\u06C8\u06C9" +
		"\x05\xC6d\x02\u06C9\u06CC\x05\u014E\xA8\x02\u06CA\u06CB\x07$\x02\x02\u06CB" +
		"\u06CD\x05\u0140\xA1\x02\u06CC\u06CA\x03\x02\x02\x02\u06CC\u06CD\x03\x02" +
		"\x02\x02\u06CD\u06D5\x03\x02\x02\x02\u06CE\u06D2\x05\xE4s\x02\u06CF\u06D1" +
		"\x05\xE4s\x02\u06D0\u06CF\x03\x02\x02\x02\u06D1\u06D4\x03\x02\x02\x02" +
		"\u06D2\u06D3\x03\x02\x02\x02\u06D2\u06D0\x03\x02\x02\x02\u06D3\u06D6\x03" +
		"\x02\x02\x02\u06D4\u06D2\x03\x02\x02\x02\u06D5\u06CE\x03\x02\x02\x02\u06D5" +
		"\u06D6\x03\x02\x02\x02\u06D6\xE1\x03\x02\x02\x02\u06D7\u06D8\x05\xBC_" +
		"\x02\u06D8\u06DB\x05\u014E\xA8\x02\u06D9\u06DA\x07$\x02\x02\u06DA\u06DC" +
		"\x05\u0140\xA1\x02\u06DB\u06D9\x03\x02\x02\x02\u06DB\u06DC\x03\x02\x02" +
		"\x02\u06DC\u06E4\x03\x02\x02\x02\u06DD\u06E1\x05\xE4s\x02\u06DE\u06E0" +
		"\x05\xE4s\x02\u06DF\u06DE\x03\x02\x02\x02\u06E0\u06E3\x03\x02\x02\x02" +
		"\u06E1\u06E2\x03\x02\x02\x02\u06E1\u06DF\x03\x02\x02\x02\u06E2\u06E5\x03" +
		"\x02\x02\x02\u06E3\u06E1\x03\x02\x02\x02\u06E4\u06DD\x03\x02\x02\x02\u06E4" +
		"\u06E5\x03\x02\x02\x02\u06E5\xE3\x03\x02\x02\x02\u06E6\u06E8\x07\x87\x02" +
		"\x02\u06E7\u06E6\x03\x02\x02\x02\u06E7\u06E8\x03\x02\x02\x02\u06E8\u06E9" +
		"\x03\x02\x02\x02\u06E9\u06EC\x07\x88\x02\x02\u06EA\u06EC\x05\xE6t\x02" +
		"\u06EB\u06E7\x03\x02\x02\x02\u06EB\u06EA\x03\x02\x02\x02\u06EC\xE5\x03" +
		"\x02\x02\x02\u06ED\u06EE\x07>\x02\x02\u06EE\u06F6\x05\u0136\x9C\x02\u06EF" +
		"\u06F0\x07%\x02\x02\u06F0\u06F6\x05\u0136\x9C\x02\u06F1\u06F2\x075\x02" +
		"\x02\u06F2\u06F6\x05\u0136\x9C\x02\u06F3\u06F4\x07\x12\x02\x02\u06F4\u06F6" +
		"\x05\u016C\xB7\x02\u06F5\u06ED\x03\x02\x02\x02\u06F5\u06EF\x03\x02\x02" +
		"\x02\u06F5\u06F1\x03\x02\x02\x02\u06F5\u06F3\x03\x02\x02\x02\u06F6\xE7" +
		"\x03\x02\x02\x02\u06F7\u06F8\t\f\x02\x02\u06F8\xE9\x03\x02\x02\x02\u06F9" +
		"\u06FA\t\r\x02\x02\u06FA\xEB\x03\x02\x02\x02\u06FB\u0700\x05\xEEx\x02" +
		"\u06FC\u06FD\x07\xF9\x02\x02\u06FD\u06FF\x05\xEEx\x02\u06FE\u06FC\x03" +
		"\x02\x02\x02\u06FF\u0702\x03\x02\x02\x02\u0700\u0701\x03\x02\x02\x02\u0700" +
		"\u06FE\x03\x02\x02\x02\u0701\u0705\x03\x02\x02\x02\u0702\u0700\x03\x02" +
		"\x02\x02\u0703\u0704\x07\xF9\x02\x02\u0704\u0706\x05\xF0y\x02\u0705\u0703" +
		"\x03\x02\x02\x02\u0705\u0706\x03\x02\x02\x02\u0706\u0709\x03\x02\x02\x02" +
		"\u0707\u0709\x05\xF0y\x02\u0708\u06FB\x03\x02\x02\x02\u0708\u0707\x03" +
		"\x02\x02\x02\u0709\xED\x03\x02\x02\x02\u070A\u070C\x07[\x02\x02\u070B" +
		"\u070D\x05\u0128\x95\x02\u070C\u070B\x03\x02\x02\x02\u070C\u070D\x03\x02" +
		"\x02\x02\u070D\u070E\x03\x02\x02\x02\u070E\u070F\x07\x95\x02\x02\u070F" +
		"\u0710\x05\u016C\xB7\x02\u0710\xEF\x03\x02\x02\x02\u0711\u0713\x07\x9D" +
		"\x02\x02\u0712\u0714\x05\u0128\x95\x02\u0713\u0712\x03\x02\x02\x02\u0713" +
		"\u0714\x03\x02\x02\x02\u0714\u0715\x03\x02\x02\x02\u0715\u0716\x07\xFB" +
		"\x02\x02\u0716\u0717\x07\x94\x02\x02\u0717\u071D\x05\xF2z\x02\u0718\u0719" +
		"\x07\xF9\x02\x02\u0719\u071A\x07\x94\x02\x02\u071A\u071C\x05\xF2z\x02" +
		"\u071B\u0718\x03\x02\x02\x02\u071C\u071F\x03\x02\x02\x02\u071D\u071E\x03" +
		"\x02\x02\x02\u071D\u071B\x03\x02\x02\x02\u071E\u0720\x03\x02\x02\x02\u071F" +
		"\u071D\x03\x02\x02\x02\u0720\u0721\x07\xFC\x02\x02\u0721\xF1\x03\x02\x02" +
		"\x02\u0722\u0723\x07\xD6\x02\x02\u0723\u0724\x05\xF8}\x02\u0724\u0725" +
		"\x05\u0136\x9C\x02\u0725\u0732\x03\x02\x02\x02\u0726\u0727\x05\u0136\x9C" +
		"\x02\u0727\u0728\x05\xF6|\x02\u0728\u072A\x03\x02\x02\x02\u0729\u0726" +
		"\x03\x02\x02\x02\u0729\u072A\x03\x02\x02\x02\u072A\u072B\x03\x02\x02\x02" +
		"\u072B\u072F\x07\xD7\x02\x02\u072C\u072D\x05\xF6|\x02\u072D\u072E\x05" +
		"\u0136\x9C\x02\u072E\u0730\x03\x02\x02\x02\u072F\u072C\x03\x02\x02\x02" +
		"\u072F\u0730\x03\x02\x02\x02\u0730\u0732\x03\x02\x02\x02\u0731\u0722\x03" +
		"\x02\x02\x02\u0731\u0729\x03\x02\x02\x02\u0732\xF3\x03\x02\x02\x02\u0733" +
		"\u0734\x07 \x02\x02\u0734\u0735\x07`\x02\x02\u0735\u073A\x05\u016A\xB6" +
		"\x02\u0736\u0737\x07\xDC\x02\x02\u0737\u0738\x07\x9A\x02\x02\u0738\u0739" +
		"\x07\xEB\x02\x02\u0739\u073B\x05\u016C\xB7\x02\u073A\u0736\x03\x02\x02" +
		"\x02\u073A\u073B\x03\x02\x02\x02\u073B\u073E\x03\x02\x02\x02\u073C\u073E" +
		"\x07\xC9\x02\x02\u073D\u0733\x03\x02\x02\x02\u073D\u073C\x03\x02\x02\x02" +
		"\u073E\xF5\x03\x02\x02\x02\u073F\u0745\x03\x02\x02\x02\u0740\u0745\x07" +
		"\xED\x02\x02\u0741\u0745\x07\xEE\x02\x02\u0742\u0745\x07\xEF\x02\x02\u0743" +
		"\u0745\x07\xF0\x02\x02\u0744\u073F\x03\x02\x02\x02\u0744\u0740\x03\x02" +
		"\x02\x02\u0744\u0741\x03\x02\x02\x02\u0744\u0742\x03\x02\x02\x02\u0744" +
		"\u0743\x03\x02\x02\x02\u0745\xF7\x03\x02\x02\x02\u0746\u074F\x07\xEB\x02" +
		"\x02\u0747\u074F\x07\xEC\x02\x02\u0748\u074F\x07u\x02\x02\u0749\u074F" +
		"\x07\xA7\x02\x02\u074A\u074F\x07\xA6\x02\x02\u074B\u074F\x07\x11\x02\x02" +
		"\u074C\u074F\x07`\x02\x02\u074D\u074F\x05\xF6|\x02\u074E\u0746\x03\x02" +
		"\x02\x02\u074E\u0747\x03\x02\x02\x02\u074E\u0748\x03\x02\x02\x02\u074E" +
		"\u0749\x03\x02\x02\x02\u074E\u074A\x03\x02\x02\x02\u074E\u074B\x03\x02" +
		"\x02\x02\u074E\u074C\x03\x02\x02\x02\u074E\u074D\x03\x02\x02\x02\u074F" +
		"\xF9\x03\x02\x02\x02\u0750\u0751\x07u\x02\x02\u0751\u0754\x05\u0166\xB4" +
		"\x02\u0752\u0753\t\x0E\x02\x02\u0753\u0755\x07\x9C\x02\x02\u0754\u0752" +
		"\x03\x02\x02\x02\u0754\u0755\x03\x02\x02\x02\u0755\xFB\x03\x02\x02\x02" +
		"\u0756\u0757\x07\xFB\x02\x02\u0757\u075C\x05\u0104\x83\x02\u0758\u0759" +
		"\x07\xF9\x02\x02\u0759\u075B\x05\u0104\x83\x02\u075A\u0758\x03\x02\x02" +
		"\x02\u075B\u075E\x03\x02\x02\x02\u075C\u075A\x03\x02\x02\x02\u075C\u075D" +
		"\x03\x02\x02\x02\u075D\u075F\x03\x02\x02\x02\u075E\u075C\x03\x02\x02\x02" +
		"\u075F\u0760\x07\xFC\x02\x02\u0760\xFD\x03\x02\x02\x02\u0761\u0762\x07" +
		"\xFB\x02\x02\u0762\u0767\x05\xDAn\x02\u0763\u0764\x07\xF9\x02\x02\u0764" +
		"\u0766\x05\xDAn\x02\u0765\u0763\x03\x02\x02\x02\u0766\u0769\x03\x02\x02" +
		"\x02\u0767\u0768\x03\x02\x02\x02\u0767\u0765\x03\x02\x02\x02\u0768\u076A" +
		"\x03\x02\x02\x02\u0769\u0767\x03\x02\x02\x02\u076A\u076B\x07\xFC\x02\x02" +
		"\u076B\xFF\x03\x02\x02\x02\u076C\u0771\x05\u0136\x9C\x02\u076D\u076E\x07" +
		"\xF9\x02\x02\u076E\u0770\x05\u0136\x9C\x02\u076F\u076D\x03\x02\x02\x02" +
		"\u0770\u0773\x03\x02\x02\x02\u0771\u076F\x03\x02\x02\x02\u0771\u0772\x03" +
		"\x02\x02\x02\u0772\u0101\x03\x02\x02\x02\u0773\u0771\x03\x02\x02\x02\u0774" +
		"\u077E\x076\x02\x02\u0775\u0776\x07I\x02\x02\u0776\u0777\x07\xC3\x02\x02" +
		"\u0777\u0778\x07\x1C\x02\x02\u0778\u077C\x05\u0140\xA1\x02\u0779\u077A" +
		"\x07A\x02\x02\u077A\u077B\x07\x1C\x02\x02\u077B\u077D\x05\u0140\xA1\x02" +
		"\u077C\u0779\x03\x02\x02\x02\u077C\u077D\x03\x02\x02\x02\u077D\u077F\x03" +
		"\x02\x02\x02\u077E\u0775\x03\x02\x02\x02\u077E\u077F\x03\x02\x02\x02\u077F" +
		"\u0784\x03\x02\x02\x02\u0780\u0781\x07w\x02\x02\u0781\u0782\x07\xC3\x02" +
		"\x02\u0782\u0783\x07\x1C\x02\x02\u0783\u0785\x05\u0140\xA1\x02\u0784\u0780" +
		"\x03\x02\x02\x02\u0784\u0785\x03\x02\x02\x02\u0785\u0103\x03\x02\x02\x02" +
		"\u0786\u0789\x05\u016A\xB6\x02\u0787\u0788\x07\xEB\x02\x02\u0788\u078A" +
		"\x05\u0136\x9C\x02\u0789\u0787\x03\x02\x02\x02\u0789\u078A\x03\x02\x02" +
		"\x02\u078A\u0105\x03\x02\x02\x02\u078B\u0796\x05\u0108\x85\x02\u078C\u078D" +
		"\x07\x8E\x02\x02\u078D\u078E\x07\x1C\x02\x02\u078E\u0793\x05\u010C\x87" +
		"\x02\u078F\u0790\x07\xF9\x02\x02\u0790\u0792\x05\u010C\x87\x02\u0791\u078F" +
		"\x03\x02\x02\x02\u0792\u0795\x03\x02\x02\x02\u0793\u0791\x03\x02\x02\x02" +
		"\u0793\u0794\x03\x02\x02\x02\u0794\u0797\x03\x02\x02\x02\u0795\u0793\x03" +
		"\x02\x02\x02\u0796\u078C\x03\x02\x02\x02\u0796\u0797\x03\x02\x02\x02\u0797" +
		"\u079E\x03\x02\x02\x02\u0798\u0799\x07v\x02\x02\u0799\u079C\x05\u0136" +
		"\x9C\x02\u079A\u079B\x07\x8A\x02\x02\u079B\u079D\x07\u0107\x02\x02\u079C" +
		"\u079A\x03\x02\x02\x02\u079C\u079D\x03\x02\x02\x02\u079D\u079F\x03\x02" +
		"\x02\x02\u079E\u0798\x03\x02\x02\x02\u079E\u079F\x03\x02\x02\x02\u079F" +
		"\u0107\x03\x02\x02\x02\u07A0\u07A1\b\x85\x01\x02\u07A1\u07A2\x05\u010A" +
		"\x86\x02\u07A2\u07B1\x03\x02\x02\x02\u07A3\u07A4\f\x04\x02\x02\u07A4\u07A6" +
		"\x07f\x02\x02\u07A5\u07A7\x05\u0118\x8D\x02\u07A6\u07A5\x03\x02\x02\x02" +
		"\u07A6\u07A7\x03\x02\x02\x02\u07A7\u07A8\x03\x02\x02\x02\u07A8\u07B0\x05" +
		"\u0108\x85\x05\u07A9\u07AA\f\x03\x02\x02\u07AA\u07AC\t\x0F\x02\x02\u07AB" +
		"\u07AD\x05\u0118\x8D\x02\u07AC\u07AB\x03\x02\x02\x02\u07AC\u07AD\x03\x02" +
		"\x02\x02\u07AD\u07AE\x03\x02\x02\x02\u07AE\u07B0\x05\u0108\x85\x04\u07AF" +
		"\u07A3\x03\x02\x02\x02\u07AF\u07A9\x03\x02\x02\x02\u07B0\u07B3\x03\x02" +
		"\x02\x02\u07B1\u07AF\x03\x02\x02\x02\u07B1\u07B2\x03\x02\x02\x02\u07B2" +
		"\u0109\x03\x02\x02\x02\u07B3\u07B1\x03\x02\x02\x02\u07B4\u07C5\x05\u010E" +
		"\x88\x02\u07B5\u07B6\x07\xC0\x02\x02\u07B6\u07C5\x05\xC0a\x02\u07B7\u07B8" +
		"\x07\xD7\x02\x02\u07B8\u07BD\x05\u0136\x9C\x02\u07B9\u07BA\x07\xF9\x02" +
		"\x02\u07BA\u07BC\x05\u0136\x9C\x02\u07BB\u07B9\x03\x02\x02\x02\u07BC\u07BF" +
		"\x03\x02\x02\x02\u07BD\u07BB\x03\x02\x02\x02\u07BD\u07BE\x03\x02\x02\x02" +
		"\u07BE\u07C5\x03\x02\x02\x02\u07BF\u07BD\x03\x02\x02\x02\u07C0\u07C1\x07" +
		"\xFB\x02\x02\u07C1\u07C2\x05\u0106\x84\x02\u07C2\u07C3\x07\xFC\x02\x02" +
		"\u07C3\u07C5\x03\x02\x02\x02\u07C4\u07B4\x03\x02\x02\x02\u07C4\u07B5\x03" +
		"\x02\x02\x02\u07C4\u07B7\x03\x02\x02\x02\u07C4\u07C0\x03\x02\x02\x02\u07C5" +
		"\u010B\x03\x02\x02\x02\u07C6\u07C8\x05\u0134\x9B\x02\u07C7\u07C9\t\x10" +
		"\x02\x02\u07C8\u07C7\x03\x02\x02\x02\u07C8\u07C9\x03\x02\x02\x02\u07C9" +
		"\u07CC\x03\x02\x02\x02\u07CA\u07CB\x07\x89\x02\x02\u07CB\u07CD\t\x11\x02" +
		"\x02\u07CC\u07CA\x03\x02\x02\x02\u07CC\u07CD\x03\x02\x02\x02\u07CD\u010D" +
		"\x03\x02\x02\x02\u07CE\u07D0\x07\xB1\x02\x02\u07CF\u07D1\x05\u0118\x8D" +
		"\x02\u07D0\u07CF\x03\x02\x02\x02\u07D0\u07D1\x03\x02\x02\x02\u07D1\u07D3" +
		"\x03\x02\x02\x02\u07D2\u07D4\x07\xBB\x02\x02\u07D3\u07D2\x03\x02\x02\x02" +
		"\u07D3\u07D4\x03\x02\x02\x02\u07D4\u07D5\x03\x02\x02\x02\u07D5\u07DA\x05" +
		"\u011A\x8E\x02\u07D6\u07D7\x07\xF9\x02\x02\u07D7\u07D9\x05\u011A\x8E\x02" +
		"\u07D8\u07D6\x03\x02\x02\x02\u07D9\u07DC\x03\x02\x02\x02\u07DA\u07D8\x03" +
		"\x02\x02\x02\u07DA\u07DB\x03\x02\x02\x02\u07DB\u07E6\x03\x02\x02\x02\u07DC" +
		"\u07DA\x03\x02\x02\x02\u07DD\u07DE\x07T\x02\x02\u07DE\u07E3\x05\u011C" +
		"\x8F\x02\u07DF\u07E0\x07\xF9\x02\x02\u07E0\u07E2\x05\u011C\x8F\x02\u07E1" +
		"\u07DF\x03\x02\x02\x02\u07E2\u07E5\x03\x02\x02\x02\u07E3\u07E1\x03\x02" +
		"\x02\x02\u07E3\u07E4\x03\x02\x02\x02\u07E4\u07E7\x03\x02\x02\x02\u07E5" +
		"\u07E3\x03\x02\x02\x02\u07E6\u07DD\x03\x02\x02\x02\u07E6\u07E7\x03\x02" +
		"\x02\x02\u07E7\u07EA\x03\x02\x02\x02\u07E8\u07E9\x07\xDB\x02\x02\u07E9" +
		"\u07EB\x05\u0138\x9D\x02\u07EA\u07E8\x03\x02\x02\x02\u07EA\u07EB\x03\x02" +
		"\x02\x02\u07EB\u07EF\x03\x02\x02\x02\u07EC\u07ED\x07Y\x02\x02\u07ED\u07EE" +
		"\x07\x1C\x02\x02\u07EE\u07F0\x05\u0110\x89\x02\u07EF\u07EC\x03\x02\x02" +
		"\x02\u07EF\u07F0\x03\x02\x02\x02\u07F0\u07F3\x03\x02\x02\x02\u07F1\u07F2" +
		"\x07\\\x02\x02\u07F2\u07F4\x05\u0138\x9D\x02\u07F3\u07F1\x03\x02\x02\x02" +
		"\u07F3\u07F4\x03\x02\x02\x02\u07F4\u010F\x03\x02\x02\x02\u07F5\u07F7\x05" +
		"\u0118\x8D\x02\u07F6\u07F5\x03\x02\x02\x02\u07F6\u07F7\x03\x02\x02\x02" +
		"\u07F7\u07F8\x03\x02\x02\x02\u07F8\u07FD\x05\u0112";
	private static readonly _serializedATNSegment4: string =
		"\x8A\x02\u07F9\u07FA\x07\xF9\x02\x02\u07FA\u07FC\x05\u0112\x8A\x02\u07FB" +
		"\u07F9\x03\x02\x02\x02\u07FC\u07FF\x03\x02\x02\x02\u07FD\u07FB\x03\x02" +
		"\x02\x02\u07FD\u07FE\x03\x02\x02\x02\u07FE\u0111\x03\x02\x02\x02\u07FF" +
		"\u07FD\x03\x02\x02\x02\u0800\u0801\x05\u0114\x8B\x02\u0801\u0113\x03\x02" +
		"\x02\x02\u0802\u080B\x07\xFB\x02\x02\u0803\u0808\x05\u0134\x9B\x02\u0804" +
		"\u0805\x07\xF9\x02\x02\u0805\u0807\x05\u0134\x9B\x02\u0806\u0804\x03\x02" +
		"\x02\x02\u0807\u080A\x03\x02\x02\x02\u0808\u0806\x03\x02\x02\x02\u0808" +
		"\u0809\x03\x02\x02\x02\u0809\u080C\x03\x02\x02\x02\u080A\u0808\x03\x02" +
		"\x02\x02\u080B\u0803\x03\x02\x02\x02\u080B\u080C\x03\x02\x02\x02\u080C" +
		"\u080D\x03\x02\x02\x02\u080D\u0810\x07\xFC\x02\x02\u080E\u0810\x05\u0134" +
		"\x9B\x02\u080F\u0802\x03\x02\x02\x02\u080F\u080E\x03\x02\x02\x02\u0810" +
		"\u0115\x03\x02\x02\x02\u0811\u0813\x05\u016A\xB6\x02\u0812\u0814\x05\u0128" +
		"\x95\x02\u0813\u0812\x03\x02\x02\x02\u0813\u0814\x03\x02\x02\x02\u0814" +
		"\u0815\x03\x02\x02\x02\u0815\u0816\x07\v\x02\x02\u0816\u0817\x05\u012E" +
		"\x98\x02\u0817\u0117\x03\x02\x02\x02\u0818\u0819\t\x12\x02\x02\u0819\u0119" +
		"\x03\x02\x02\x02\u081A\u081F\x05\u0134\x9B\x02\u081B\u081D\x07\v\x02\x02" +
		"\u081C\u081B\x03\x02\x02\x02\u081C\u081D\x03\x02\x02\x02\u081D\u081E\x03" +
		"\x02\x02\x02\u081E\u0820\x05\u016A\xB6\x02\u081F\u081C\x03\x02\x02\x02" +
		"\u081F\u0820\x03\x02\x02\x02\u0820\u0827\x03\x02\x02\x02\u0821\u0822\x05" +
		"\u0166\xB4\x02\u0822\u0823\x07\xF7\x02\x02\u0823\u0824\x07\xF3\x02\x02" +
		"\u0824\u0827\x03\x02\x02\x02\u0825\u0827\x07\xF3\x02\x02\u0826\u081A\x03" +
		"\x02\x02\x02\u0826\u0821\x03\x02\x02\x02\u0826\u0825\x03\x02\x02\x02\u0827" +
		"\u011B\x03\x02\x02\x02\u0828\u0829\b\x8F\x01\x02\u0829\u082A\x05\u0122" +
		"\x92\x02\u082A\u0838\x03\x02\x02\x02\u082B\u0834\f\x04\x02\x02\u082C\u082D" +
		"\x07(\x02\x02\u082D\u082E\x07o\x02\x02\u082E\u0835\x05\u0122\x92\x02\u082F" +
		"\u0830\x05\u011E\x90\x02\u0830\u0831\x07o\x02\x02\u0831\u0832\x05\u011C" +
		"\x8F\x02\u0832\u0833\x05\u0120\x91\x02\u0833\u0835\x03\x02\x02\x02\u0834" +
		"\u082C\x03\x02\x02\x02\u0834\u082F\x03\x02\x02\x02\u0835\u0837\x03\x02" +
		"\x02\x02\u0836\u082B\x03\x02\x02\x02\u0837\u083A\x03\x02\x02\x02\u0838" +
		"\u0836\x03\x02\x02\x02\u0838\u0839\x03\x02\x02\x02\u0839\u011D\x03\x02" +
		"\x02\x02\u083A\u0838\x03\x02\x02\x02\u083B\u083D\x07c\x02\x02\u083C\u083B" +
		"\x03\x02\x02\x02\u083C\u083D\x03\x02\x02\x02\u083D\u085B\x03\x02\x02\x02" +
		"\u083E\u0840\x07t\x02\x02\u083F\u0841\x07c\x02\x02\u0840\u083F\x03\x02" +
		"\x02\x02\u0840\u0841\x03\x02\x02\x02\u0841\u085B\x03\x02\x02\x02\u0842" +
		"\u0844\x07\xA8\x02\x02\u0843\u0845\x07c\x02\x02\u0844\u0843\x03\x02\x02" +
		"\x02\u0844\u0845\x03\x02\x02\x02\u0845\u085B\x03\x02\x02\x02\u0846\u0848" +
		"\x07t\x02\x02\u0847\u0849\x07\x90\x02\x02\u0848\u0847\x03\x02\x02\x02" +
		"\u0848\u0849\x03\x02\x02\x02\u0849\u085B\x03\x02\x02\x02\u084A\u084C\x07" +
		"\xA8\x02\x02\u084B\u084D\x07\x90\x02\x02\u084C\u084B\x03\x02\x02\x02\u084C" +
		"\u084D\x03\x02\x02\x02\u084D\u085B\x03\x02\x02\x02\u084E\u0850\x07U\x02" +
		"\x02\u084F\u0851\x07\x90\x02\x02\u0850\u084F\x03\x02\x02\x02\u0850\u0851" +
		"\x03\x02\x02\x02\u0851\u085B\x03\x02\x02\x02\u0852\u0853\x07t\x02\x02" +
		"\u0853\u085B\x07\xB4\x02\x02\u0854\u0855\x07\xA8\x02\x02\u0855\u085B\x07" +
		"\xB4\x02\x02\u0856\u0857\x07t\x02\x02\u0857\u085B\x07\t\x02\x02\u0858" +
		"\u0859\x07\xA8\x02\x02\u0859\u085B\x07\t\x02\x02\u085A\u083C\x03\x02\x02" +
		"\x02\u085A\u083E\x03\x02\x02\x02\u085A\u0842\x03\x02\x02\x02\u085A\u0846" +
		"\x03\x02\x02\x02\u085A\u084A\x03\x02\x02\x02\u085A\u084E\x03\x02\x02\x02" +
		"\u085A\u0852\x03\x02\x02\x02\u085A\u0854\x03\x02\x02\x02\u085A\u0856\x03" +
		"\x02\x02\x02\u085A\u0858\x03\x02\x02\x02\u085B\u011F\x03\x02\x02\x02\u085C" +
		"\u085D\x07\x8B\x02\x02\u085D\u086B\x05\u0138\x9D\x02\u085E\u085F\x07\xD1" +
		"\x02\x02\u085F\u0860\x07\xFB\x02\x02\u0860\u0865\x05\u016A\xB6\x02\u0861" +
		"\u0862\x07\xF9\x02\x02\u0862\u0864\x05\u016A\xB6\x02\u0863\u0861\x03\x02" +
		"\x02\x02\u0864\u0867\x03\x02\x02\x02\u0865\u0863\x03\x02\x02\x02\u0865" +
		"\u0866\x03\x02\x02\x02\u0866\u0868\x03\x02\x02\x02\u0867\u0865\x03\x02" +
		"\x02\x02\u0868\u0869\x07\xFC\x02\x02\u0869\u086B\x03\x02\x02\x02\u086A" +
		"\u085C\x03\x02\x02\x02\u086A\u085E\x03\x02\x02\x02\u086B\u0121\x03\x02" +
		"\x02\x02\u086C\u0879\x05\u0126\x94\x02\u086D\u086E\x07\xC2\x02\x02\u086E" +
		"\u086F\x05\u0124\x93\x02\u086F\u0870\x07\xFB\x02\x02\u0870\u0871\x05\u0136" +
		"\x9C\x02\u0871\u0877\x07\xFC\x02\x02\u0872\u0873\x07\xA0\x02\x02\u0873" +
		"\u0874\x07\xFB\x02\x02\u0874\u0875\x05\u0136\x9C\x02\u0875\u0876\x07\xFC" +
		"\x02\x02\u0876\u0878\x03\x02\x02\x02\u0877\u0872\x03\x02\x02\x02\u0877" +
		"\u0878\x03\x02\x02\x02\u0878\u087A\x03\x02\x02\x02\u0879\u086D\x03\x02" +
		"\x02\x02\u0879\u087A\x03\x02\x02\x02\u087A\u0123\x03\x02\x02\x02\u087B" +
		"\u087C\t\x13\x02\x02\u087C\u0125\x03\x02\x02\x02\u087D\u0885\x05\u012C" +
		"\x97\x02\u087E\u0880\x07\v\x02\x02\u087F\u087E\x03\x02\x02\x02\u087F\u0880" +
		"\x03\x02\x02\x02\u0880\u0881\x03\x02\x02\x02\u0881\u0883\x05\u016A\xB6" +
		"\x02\u0882\u0884\x05\u0128\x95\x02\u0883\u0882\x03\x02\x02\x02\u0883\u0884" +
		"\x03\x02\x02\x02\u0884\u0886\x03\x02\x02\x02\u0885\u087F\x03\x02\x02\x02" +
		"\u0885\u0886\x03\x02\x02\x02\u0886\u0127\x03\x02\x02\x02\u0887\u0888\x07" +
		"\xFB\x02\x02\u0888\u088D\x05\xC6d\x02\u0889\u088A\x07\xF9\x02\x02\u088A" +
		"\u088C\x05\xC6d\x02\u088B\u0889\x03\x02\x02\x02\u088C\u088F\x03\x02\x02" +
		"\x02\u088D\u088B\x03\x02\x02\x02\u088D\u088E\x03\x02\x02\x02\u088E\u0890" +
		"\x03\x02\x02\x02\u088F\u088D\x03\x02\x02\x02\u0890\u0891\x07\xFC\x02\x02" +
		"\u0891\u0129\x03\x02\x02\x02\u0892\u0893\x07\xFB\x02\x02\u0893\u0898\x05" +
		"\xBC_\x02\u0894\u0895\x07\xF9\x02\x02\u0895\u0897\x05\xBC_\x02\u0896\u0894" +
		"\x03\x02\x02\x02\u0897\u089A\x03\x02\x02\x02\u0898\u0896\x03\x02\x02\x02" +
		"\u0898\u0899\x03\x02\x02\x02\u0899\u089B\x03\x02\x02\x02\u089A\u0898\x03" +
		"\x02\x02\x02\u089B\u089C\x07\xFC\x02\x02\u089C\u012B\x03\x02\x02\x02\u089D" +
		"\u08A5\x05\xC8e\x02\u089E\u08A0\x07s\x02\x02\u089F\u089E\x03\x02\x02\x02" +
		"\u089F\u08A0\x03\x02\x02\x02\u08A0\u08A1\x03\x02\x02\x02\u08A1\u08A5\x05" +
		"\u012E\x98\x02\u08A2\u08A5\x05\u0130\x99\x02\u08A3\u08A5\x05\u0132\x9A" +
		"\x02\u08A4\u089D\x03\x02\x02\x02\u08A4\u089F\x03\x02\x02\x02\u08A4\u08A2" +
		"\x03\x02\x02\x02\u08A4\u08A3\x03\x02\x02\x02\u08A5\u012D\x03\x02\x02\x02" +
		"\u08A6\u08A7\x07\xFB\x02\x02\u08A7\u08A8\x05\xD2j\x02\u08A8\u08A9\x07" +
		"\xFC\x02\x02\u08A9\u012F\x03\x02\x02\x02\u08AA\u08AB\x07\xCD\x02\x02\u08AB" +
		"\u08AC\x07\xFB\x02\x02\u08AC\u08B1\x05\u0136\x9C\x02\u08AD\u08AE\x07\xF9" +
		"\x02\x02\u08AE\u08B0\x05\u0136\x9C\x02\u08AF\u08AD\x03\x02\x02\x02\u08B0" +
		"\u08B3\x03\x02\x02\x02\u08B1\u08AF\x03\x02\x02\x02\u08B1\u08B2\x03\x02" +
		"\x02\x02\u08B2\u08B4\x03\x02\x02\x02\u08B3\u08B1\x03\x02\x02\x02\u08B4" +
		"\u08B7\x07\xFC\x02\x02\u08B5\u08B6\x07\xDC\x02\x02\u08B6\u08B8\x07\x8F" +
		"\x02\x02\u08B7\u08B5\x03\x02\x02\x02\u08B7\u08B8\x03\x02\x02\x02\u08B8" +
		"\u0131\x03\x02\x02\x02\u08B9\u08BA\x07\xFB\x02\x02\u08BA\u08BB\x05\u011C" +
		"\x8F\x02\u08BB\u08BC\x07\xFC\x02\x02\u08BC\u0133\x03\x02\x02\x02\u08BD" +
		"\u08C0\x05\xC6d\x02\u08BE\u08C0\x05\u0136\x9C\x02\u08BF\u08BD\x03\x02" +
		"\x02\x02\u08BF\u08BE\x03\x02\x02\x02\u08C0\u0135\x03\x02\x02\x02\u08C1" +
		"\u08C2\x05\u0138\x9D\x02\u08C2\u0137\x03\x02\x02\x02\u08C3\u08C4\b\x9D" +
		"\x01\x02\u08C4\u08C6\x05\u013C\x9F\x02\u08C5\u08C7\x05\u013A\x9E\x02\u08C6" +
		"\u08C5\x03\x02\x02\x02\u08C6\u08C7\x03\x02\x02\x02\u08C7\u08CB\x03\x02" +
		"\x02\x02\u08C8\u08C9\x07\x87\x02\x02\u08C9\u08CB\x05\u0138\x9D\x05\u08CA" +
		"\u08C3\x03\x02\x02\x02\u08CA\u08C8\x03\x02\x02\x02\u08CB\u08D4\x03\x02" +
		"\x02\x02\u08CC\u08CD\f\x04\x02\x02\u08CD\u08CE\x07\x07\x02\x02\u08CE\u08D3" +
		"\x05\u0138\x9D\x05\u08CF\u08D0\f\x03\x02\x02\u08D0\u08D1\x07\x8D\x02\x02" +
		"\u08D1\u08D3\x05\u0138\x9D\x04\u08D2\u08CC\x03\x02\x02\x02\u08D2\u08CF" +
		"\x03\x02\x02\x02\u08D3\u08D6\x03\x02\x02\x02\u08D4\u08D2\x03\x02\x02\x02" +
		"\u08D4\u08D5\x03\x02\x02\x02\u08D5\u0139\x03\x02\x02\x02\u08D6\u08D4\x03" +
		"\x02\x02\x02\u08D7\u08D8\x05\u0142\xA2\x02\u08D8\u08D9\x05\u013C\x9F\x02" +
		"\u08D9\u0912\x03\x02\x02\x02\u08DA\u08DB\x05\u0142\xA2\x02\u08DB\u08DC" +
		"\x05\u0144\xA3\x02\u08DC\u08DD\x05\u012E\x98\x02\u08DD\u0912\x03\x02\x02" +
		"\x02\u08DE\u08E0\x07\x87\x02\x02\u08DF\u08DE\x03\x02\x02\x02\u08DF\u08E0" +
		"\x03\x02\x02\x02\u08E0\u08E1\x03\x02\x02\x02\u08E1\u08E2\x07\x11\x02\x02" +
		"\u08E2\u08E3\x05\u013C\x9F\x02\u08E3\u08E4\x07\x07\x02\x02\u08E4\u08E5" +
		"\x05\u013C\x9F\x02\u08E5\u0912\x03\x02\x02\x02\u08E6\u08E8\x07\x87\x02" +
		"\x02\u08E7\u08E6\x03\x02\x02\x02\u08E7\u08E8\x03\x02\x02\x02\u08E8\u08E9" +
		"\x03\x02\x02\x02\u08E9\u08EA\x07`\x02\x02\u08EA\u08EB\x07\xFB\x02\x02" +
		"\u08EB\u08F0\x05\u0136\x9C\x02\u08EC\u08ED\x07\xF9\x02\x02\u08ED\u08EF" +
		"\x05\u0136\x9C\x02\u08EE\u08EC\x03\x02\x02\x02\u08EF\u08F2\x03\x02\x02" +
		"\x02\u08F0\u08EE\x03\x02\x02\x02\u08F0\u08F1\x03\x02\x02\x02\u08F1\u08F3" +
		"\x03\x02\x02\x02\u08F2\u08F0\x03\x02\x02\x02\u08F3\u08F4\x07\xFC\x02\x02" +
		"\u08F4\u0912\x03\x02\x02\x02\u08F5\u08F7\x07\x87\x02\x02\u08F6\u08F5\x03" +
		"\x02\x02\x02\u08F6\u08F7\x03\x02\x02\x02\u08F7\u08F8\x03\x02\x02\x02\u08F8" +
		"\u08F9\x07`\x02\x02\u08F9\u0912\x05\u012E\x98\x02\u08FA\u08FC\x07\x87" +
		"\x02\x02\u08FB\u08FA\x03\x02\x02\x02\u08FB\u08FC\x03\x02\x02\x02\u08FC" +
		"\u08FD\x03\x02\x02\x02\u08FD\u08FE\t\x14\x02\x02\u08FE\u0901\x05\u013C" +
		"\x9F\x02\u08FF\u0900\x07@\x02\x02\u0900\u0902\x05\u013C\x9F\x02\u0901" +
		"\u08FF\x03\x02\x02\x02\u0901\u0902\x03\x02\x02\x02\u0902\u0912\x03\x02" +
		"\x02\x02\u0903\u0904\t\x15\x02\x02\u0904\u0912\x05\u013C\x9F\x02\u0905" +
		"\u0907\x07n\x02\x02\u0906\u0908\x07\x87\x02\x02\u0907\u0906\x03\x02\x02" +
		"\x02\u0907\u0908\x03\x02\x02\x02\u0908\u0909\x03\x02\x02\x02\u0909\u0912" +
		"\t\x16\x02\x02\u090A\u090C\x07n\x02\x02\u090B\u090D\x07\x87\x02\x02\u090C" +
		"\u090B\x03\x02\x02\x02\u090C\u090D\x03\x02\x02\x02\u090D\u090E\x03\x02" +
		"\x02\x02\u090E\u090F\x07;\x02\x02\u090F\u0910\x07T\x02\x02\u0910\u0912" +
		"\x05\u013C\x9F\x02\u0911\u08D7\x03\x02\x02\x02\u0911\u08DA\x03\x02\x02" +
		"\x02\u0911\u08DF\x03\x02\x02\x02\u0911\u08E7\x03\x02\x02\x02\u0911\u08F6" +
		"\x03\x02\x02\x02\u0911\u08FB\x03\x02\x02\x02\u0911\u0903\x03\x02\x02\x02" +
		"\u0911\u0905\x03\x02\x02\x02\u0911\u090A\x03\x02\x02\x02\u0912\u013B\x03" +
		"\x02\x02\x02\u0913\u0914\b\x9F\x01\x02\u0914\u0918\x05\u013E\xA0\x02\u0915" +
		"\u0916\t\x17\x02\x02\u0916\u0918\x05\u013C\x9F\x06\u0917\u0913\x03\x02" +
		"\x02\x02\u0917\u0915\x03\x02\x02\x02\u0918\u0924\x03\x02\x02\x02\u0919" +
		"\u091A\f\x05\x02\x02\u091A\u091B\t\x18\x02\x02\u091B\u0923\x05\u013C\x9F" +
		"\x06\u091C\u091D\f\x04\x02\x02\u091D\u091E\t\x17\x02\x02\u091E\u0923\x05" +
		"\u013C\x9F\x05\u091F\u0920\f\x03\x02\x02\u0920\u0921\x07\xF6\x02\x02\u0921" +
		"\u0923\x05\u013C\x9F\x04\u0922\u0919\x03\x02\x02\x02\u0922\u091C\x03\x02" +
		"\x02\x02\u0922\u091F\x03\x02\x02\x02\u0923\u0926\x03\x02\x02\x02\u0924" +
		"\u0922\x03\x02\x02\x02\u0924\u0925\x03\x02\x02\x02\u0925\u013D\x03\x02" +
		"\x02\x02\u0926\u0924\x03\x02\x02\x02\u0927\u0928\b\xA0\x01\x02\u0928\u0A1E" +
		"\x07\x88\x02\x02\u0929\u0A1E\x05\u0148\xA5\x02\u092A\u092B\x05\u016A\xB6" +
		"\x02\u092B\u092C\x05\u0140\xA1\x02\u092C\u0A1E\x03\x02\x02\x02\u092D\u092E" +
		"\x07\u0110\x02\x02\u092E\u0A1E\x05\u0140\xA1\x02\u092F\u0A1E\x05\u016C" +
		"\xB7\x02\u0930\u0A1E\x05\u0146\xA4\x02\u0931\u0A1E\x05\u0140\xA1\x02\u0932" +
		"\u0A1E\x07\u0106\x02\x02\u0933\u0A1E\x07\u0102\x02\x02\u0934\u0935\x07" +
		"\x97\x02\x02\u0935\u0936\x07\xFB\x02\x02\u0936\u0937\x05\u013C\x9F\x02" +
		"\u0937\u0938\x07`\x02\x02\u0938\u0939\x05\u013C\x9F\x02\u0939\u093A\x07" +
		"\xFC\x02\x02\u093A\u0A1E\x03\x02\x02\x02\u093B\u093C\x07\xFB\x02\x02\u093C" +
		"\u093F\x05\u0136\x9C\x02\u093D\u093E\x07\v\x02\x02\u093E\u0940\x05\u014E" +
		"\xA8\x02\u093F\u093D\x03\x02\x02\x02\u093F\u0940\x03\x02\x02\x02\u0940" +
		"\u0949\x03\x02\x02\x02\u0941\u0942\x07\xF9\x02\x02\u0942\u0945\x05\u0136" +
		"\x9C\x02\u0943\u0944\x07\v\x02\x02\u0944\u0946\x05\u014E\xA8\x02\u0945" +
		"\u0943\x03\x02\x02\x02\u0945\u0946\x03\x02\x02\x02\u0946\u0948\x03\x02" +
		"\x02\x02\u0947\u0941\x03\x02\x02\x02\u0948\u094B\x03\x02\x02\x02\u0949" +
		"\u094A\x03\x02\x02\x02\u0949\u0947\x03\x02\x02\x02\u094A\u094C\x03\x02" +
		"\x02\x02\u094B\u0949\x03\x02\x02\x02\u094C\u094D\x07\xFC\x02\x02\u094D" +
		"\u0A1E\x03\x02\x02\x02\u094E\u094F\x07\xAB\x02\x02\u094F\u0950\x07\xFB" +
		"\x02\x02\u0950\u0955\x05\u0136\x9C\x02\u0951\u0952\x07\xF9\x02\x02\u0952" +
		"\u0954\x05\u0136\x9C\x02\u0953\u0951\x03\x02\x02\x02\u0954\u0957\x03\x02" +
		"\x02\x02\u0955\u0953\x03\x02\x02\x02\u0955\u0956\x03\x02\x02\x02\u0956" +
		"\u0958\x03\x02\x02\x02\u0957\u0955\x03\x02\x02\x02\u0958\u0959\x07\xFC" +
		"\x02\x02\u0959\u0A1E\x03\x02\x02\x02\u095A\u095B\x05\xC4c\x02\u095B\u095C" +
		"\x07\xFB\x02\x02\u095C\u095D\x07\xF3\x02\x02\u095D\u095F\x07\xFC\x02\x02" +
		"\u095E\u0960\x05\u0156\xAC\x02\u095F\u095E\x03\x02\x02\x02\u095F\u0960" +
		"\x03\x02\x02\x02\u0960\u0962\x03\x02\x02\x02\u0961\u0963\x05\u0158\xAD" +
		"\x02\u0962\u0961\x03\x02\x02\x02\u0962\u0963\x03\x02\x02\x02\u0963\u0A1E" +
		"\x03\x02\x02\x02\u0964\u0965\x05\xC4c\x02\u0965\u0971\x07\xFB\x02\x02" +
		"\u0966\u0968\x05\u0118\x8D\x02\u0967\u0966\x03\x02\x02\x02\u0967\u0968" +
		"\x03\x02\x02\x02\u0968\u0969\x03\x02\x02\x02\u0969\u096E\x05\u0136\x9C" +
		"\x02\u096A\u096B\x07\xF9\x02\x02\u096B\u096D\x05\u0136\x9C\x02\u096C\u096A" +
		"\x03\x02\x02\x02\u096D\u0970\x03\x02\x02\x02\u096E\u096C\x03\x02\x02\x02" +
		"\u096E\u096F\x03\x02\x02\x02\u096F\u0972\x03\x02\x02\x02\u0970\u096E\x03" +
		"\x02\x02\x02\u0971\u0967\x03\x02\x02\x02\u0971\u0972\x03\x02\x02\x02\u0972" +
		"\u097D\x03\x02\x02\x02\u0973\u0974\x07\x8E\x02\x02\u0974\u0975\x07\x1C" +
		"\x02\x02\u0975\u097A\x05\u010C\x87\x02\u0976\u0977\x07\xF9\x02\x02\u0977" +
		"\u0979\x05\u010C\x87\x02\u0978\u0976\x03\x02\x02\x02\u0979\u097C\x03\x02" +
		"\x02\x02\u097A\u0978\x03\x02\x02\x02\u097A\u097B\x03\x02\x02\x02\u097B" +
		"\u097E\x03\x02\x02\x02\u097C\u097A\x03\x02\x02\x02\u097D\u0973\x03\x02" +
		"\x02\x02\u097D\u097E\x03\x02\x02\x02\u097E\u097F\x03\x02\x02\x02\u097F" +
		"\u0981\x07\xFC\x02\x02\u0980\u0982\x05\u0156\xAC\x02\u0981\u0980\x03\x02" +
		"\x02\x02\u0981\u0982\x03\x02\x02\x02\u0982\u0984\x03\x02\x02\x02\u0983" +
		"\u0985\x05\u0158\xAD\x02\u0984\u0983\x03\x02\x02\x02\u0984\u0985\x03\x02" +
		"\x02\x02\u0985\u0A1E\x03\x02\x02\x02\u0986\u0987\x05\u016A\xB6\x02\u0987" +
		"\u0988\x07\u0103\x02\x02\u0988\u0989\x05\u0136\x9C\x02\u0989\u0A1E\x03" +
		"\x02\x02\x02\u098A\u0993\x07\xFB\x02\x02\u098B\u0990\x05\u016A\xB6\x02" +
		"\u098C\u098D\x07\xF9\x02\x02\u098D\u098F\x05\u016A\xB6\x02\u098E\u098C" +
		"\x03\x02\x02\x02\u098F\u0992\x03\x02\x02\x02\u0990\u098E\x03\x02\x02\x02" +
		"\u0990\u0991\x03\x02\x02\x02\u0991\u0994\x03\x02\x02\x02\u0992\u0990\x03" +
		"\x02\x02\x02\u0993\u098B\x03\x02\x02\x02\u0993\u0994\x03\x02\x02\x02\u0994" +
		"\u0995\x03\x02\x02\x02\u0995\u0996\x07\xFC\x02\x02\u0996\u0997\x07\u0103" +
		"\x02\x02\u0997\u0A1E\x05\u0136\x9C\x02\u0998\u0999\x07\xFB\x02\x02\u0999" +
		"\u099A\x05\xD2j\x02\u099A\u099B\x07\xFC\x02\x02\u099B\u0A1E\x03\x02\x02" +
		"\x02\u099C\u099D\x07D\x02\x02\u099D\u099E\x07\xFB\x02\x02\u099E\u099F" +
		"\x05\xD2j\x02\u099F\u09A0\x07\xFC\x02\x02\u09A0\u0A1E\x03\x02\x02\x02" +
		"\u09A1\u09A2\x07\x1E\x02\x02\u09A2\u09A4\x05\u013C\x9F\x02\u09A3\u09A5" +
		"\x05\u0154\xAB\x02\u09A4\u09A3\x03\x02\x02\x02\u09A5\u09A6\x03\x02\x02" +
		"\x02\u09A6\u09A4\x03\x02\x02\x02\u09A6\u09A7\x03\x02\x02\x02\u09A7\u09AA" +
		"\x03\x02\x02\x02\u09A8\u09A9\x07=\x02\x02\u09A9\u09AB\x05\u0136\x9C\x02" +
		"\u09AA\u09A8\x03\x02\x02\x02\u09AA\u09AB\x03\x02\x02\x02\u09AB\u09AC\x03" +
		"\x02\x02\x02\u09AC\u09AD\x07?\x02\x02\u09AD\u0A1E\x03\x02\x02\x02\u09AE" +
		"\u09B0\x07\x1E\x02\x02\u09AF\u09B1\x05\u0154\xAB\x02\u09B0\u09AF\x03\x02" +
		"\x02\x02\u09B1\u09B2\x03\x02\x02\x02\u09B2\u09B0\x03\x02\x02\x02\u09B2" +
		"\u09B3\x03\x02\x02\x02\u09B3\u09B6\x03\x02\x02\x02\u09B4\u09B5\x07=\x02" +
		"\x02\u09B5\u09B7\x05\u0136\x9C\x02\u09B6\u09B4\x03\x02\x02\x02\u09B6\u09B7" +
		"\x03\x02\x02\x02\u09B7\u09B8\x03\x02\x02\x02\u09B8\u09B9\x07?\x02\x02" +
		"\u09B9\u0A1E\x03\x02\x02\x02\u09BA\u09BB\x07\x1F\x02\x02\u09BB\u09BC\x07" +
		"\xFB\x02\x02\u09BC\u09BD\x05\u0136\x9C\x02\u09BD\u09BE\x07\v\x02\x02\u09BE" +
		"\u09BF\x05\u014E\xA8\x02\u09BF\u09C0\x07\xFC\x02\x02\u09C0\u0A1E\x03\x02" +
		"\x02\x02\u09C1\u09C2\x07\xC7\x02\x02\u09C2\u09C3\x07\xFB\x02\x02\u09C3" +
		"\u09C4\x05\u0136\x9C\x02\u09C4\u09C5\x07\v\x02\x02\u09C5\u09C6\x05\u014E" +
		"\xA8\x02\u09C6\u09C7\x07\xFC\x02\x02\u09C7\u0A1E\x03\x02\x02\x02\u09C8" +
		"\u09C9\x07\n\x02\x02\u09C9\u09D2\x07\xFD\x02\x02\u09CA\u09CF\x05\u0136" +
		"\x9C\x02\u09CB\u09CC\x07\xF9\x02\x02\u09CC\u09CE\x05\u0136\x9C\x02\u09CD" +
		"\u09CB\x03\x02\x02\x02\u09CE\u09D1\x03\x02\x02\x02\u09CF\u09CD\x03\x02" +
		"\x02\x02\u09CF\u09D0\x03\x02\x02\x02\u09D0\u09D3\x03\x02\x02\x02\u09D1" +
		"\u09CF\x03\x02\x02\x02\u09D2\u09CA\x03\x02\x02\x02\u09D2\u09D3\x03\x02" +
		"\x02\x02\u09D3\u09D4\x03\x02\x02\x02\u09D4\u0A1E\x07\xFE\x02\x02\u09D5" +
		"\u0A1E\x05\u016A\xB6\x02\u09D6\u0A1E\x07*\x02\x02\u09D7\u09DB\x07,\x02" +
		"\x02\u09D8\u09D9\x07\xFB\x02\x02\u09D9\u09DA\x07\u0107\x02\x02\u09DA\u09DC" +
		"\x07\xFC\x02\x02\u09DB\u09D8\x03\x02\x02\x02\u09DB\u09DC\x03\x02\x02\x02" +
		"\u09DC\u0A1E\x03\x02\x02\x02\u09DD\u09E1\x07-\x02\x02\u09DE\u09DF\x07" +
		"\xFB\x02\x02\u09DF\u09E0\x07\u0107\x02\x02\u09E0\u09E2\x07\xFC\x02\x02" +
		"\u09E1\u09DE\x03\x02\x02\x02\u09E1\u09E2\x03\x02\x02\x02\u09E2\u0A1E\x03" +
		"\x02\x02\x02\u09E3\u09E7\x07y\x02\x02\u09E4\u09E5\x07\xFB\x02\x02\u09E5" +
		"\u09E6\x07\u0107\x02\x02\u09E6\u09E8\x07\xFC\x02\x02\u09E7\u09E4\x03\x02" +
		"\x02\x02\u09E7\u09E8\x03\x02\x02\x02\u09E8\u0A1E\x03\x02\x02\x02\u09E9" +
		"\u09ED\x07z\x02\x02\u09EA\u09EB\x07\xFB\x02\x02\u09EB\u09EC\x07\u0107" +
		"\x02\x02\u09EC\u09EE\x07\xFC\x02\x02\u09ED\u09EA\x03\x02\x02\x02\u09ED" +
		"\u09EE\x03\x02\x02\x02\u09EE\u0A1E\x03\x02\x02\x02\u09EF\u0A1E\x07.\x02" +
		"\x02\u09F0\u0A1E\x07+\x02\x02\u09F1\u09F2\x07\xBC\x02\x02\u09F2\u09F3" +
		"\x07\xFB\x02\x02\u09F3\u09F4\x05\u013C\x9F\x02\u09F4\u09F5\x07T\x02\x02" +
		"\u09F5\u09F8\x05\u013C\x9F\x02\u09F6\u09F7\x07P\x02\x02\u09F7\u09F9\x05" +
		"\u013C\x9F\x02\u09F8\u09F6\x03\x02\x02\x02\u09F8\u09F9\x03\x02\x02\x02" +
		"\u09F9\u09FA\x03\x02\x02\x02\u09FA\u09FB\x07\xFC\x02\x02\u09FB\u0A1E\x03" +
		"\x02\x02\x02\u09FC\u09FD\x07\x86\x02\x02\u09FD\u09FE\x07\xFB\x02\x02\u09FE" +
		"\u0A01\x05\u013C\x9F\x02\u09FF\u0A00\x07\xF9\x02\x02\u0A00\u0A02\x05\u014C" +
		"\xA7\x02\u0A01\u09FF\x03\x02\x02\x02\u0A01\u0A02\x03\x02\x02\x02\u0A02" +
		"\u0A03\x03\x02\x02\x02\u0A03\u0A04\x07\xFC\x02\x02\u0A04\u0A1E\x03\x02" +
		"\x02\x02\u0A05\u0A06\x07F\x02\x02\u0A06\u0A07\x07\xFB\x02\x02\u0A07\u0A08" +
		"\x05\u016A\xB6\x02\u0A08\u0A09\x07T\x02\x02\u0A09\u0A0A\x05\u013C\x9F" +
		"\x02\u0A0A\u0A0B\x07\xFC\x02\x02\u0A0B\u0A1E\x03\x02\x02\x02\u0A0C\u0A0D" +
		"\x07\xFB\x02\x02\u0A0D\u0A0E\x05\u0136\x9C\x02\u0A0E\u0A0F\x07\xFC\x02" +
		"\x02\u0A0F\u0A1E\x03\x02\x02\x02\u0A10\u0A11\x07Z\x02\x02\u0A11\u0A1A" +
		"\x07\xFB\x02\x02\u0A12\u0A17\x05\u0166\xB4\x02\u0A13\u0A14\x07\xF9\x02" +
		"\x02\u0A14\u0A16\x05\u0166\xB4\x02\u0A15\u0A13\x03\x02\x02\x02\u0A16\u0A19" +
		"\x03\x02\x02\x02\u0A17\u0A15\x03\x02\x02\x02\u0A17\u0A18\x03\x02\x02\x02" +
		"\u0A18\u0A1B\x03\x02\x02\x02\u0A19\u0A17\x03\x02\x02\x02\u0A1A\u0A12\x03" +
		"\x02\x02\x02\u0A1A\u0A1B\x03\x02\x02\x02\u0A1B\u0A1C\x03\x02\x02\x02\u0A1C" +
		"\u0A1E\x07\xFC\x02\x02\u0A1D\u0927\x03\x02\x02\x02\u0A1D\u0929\x03\x02" +
		"\x02\x02\u0A1D\u092A\x03\x02\x02\x02\u0A1D\u092D\x03\x02\x02\x02\u0A1D" +
		"\u092F\x03\x02\x02\x02\u0A1D\u0930\x03\x02\x02\x02\u0A1D\u0931\x03\x02" +
		"\x02\x02\u0A1D\u0932\x03\x02\x02\x02\u0A1D\u0933\x03\x02\x02\x02\u0A1D" +
		"\u0934\x03\x02\x02\x02\u0A1D\u093B\x03\x02\x02\x02\u0A1D\u094E\x03\x02" +
		"\x02\x02\u0A1D\u095A\x03\x02\x02\x02\u0A1D\u0964\x03\x02\x02\x02\u0A1D" +
		"\u0986\x03\x02\x02\x02\u0A1D\u098A\x03\x02\x02\x02\u0A1D\u0998\x03\x02" +
		"\x02\x02\u0A1D\u099C\x03\x02\x02\x02\u0A1D\u09A1\x03\x02\x02\x02\u0A1D" +
		"\u09AE\x03\x02\x02\x02\u0A1D\u09BA\x03\x02\x02\x02\u0A1D\u09C1\x03\x02" +
		"\x02\x02\u0A1D\u09C8\x03\x02\x02\x02\u0A1D\u09D5\x03\x02\x02\x02\u0A1D" +
		"\u09D6\x03\x02\x02\x02\u0A1D\u09D7\x03\x02\x02\x02\u0A1D\u09DD\x03\x02" +
		"\x02\x02\u0A1D\u09E3\x03\x02\x02\x02\u0A1D\u09E9\x03\x02\x02\x02\u0A1D" +
		"\u09EF\x03\x02\x02\x02\u0A1D\u09F0\x03\x02\x02\x02\u0A1D\u09F1\x03\x02" +
		"\x02\x02\u0A1D\u09FC\x03\x02\x02\x02\u0A1D\u0A05\x03\x02\x02\x02\u0A1D" +
		"\u0A0C\x03\x02\x02\x02\u0A1D\u0A10\x03\x02\x02\x02\u0A1E\u0A29\x03\x02" +
		"\x02\x02\u0A1F\u0A20\f\x11\x02\x02\u0A20\u0A21\x07\xFD\x02\x02\u0A21\u0A22" +
		"\x05\u013C\x9F\x02\u0A22\u0A23\x07\xFE\x02\x02\u0A23\u0A28\x03\x02\x02" +
		"\x02\u0A24\u0A25\f\x0F\x02\x02\u0A25\u0A26\x07\xF7\x02\x02\u0A26\u0A28" +
		"\x05\u016A\xB6\x02\u0A27\u0A1F\x03\x02\x02\x02\u0A27\u0A24\x03\x02\x02" +
		"\x02\u0A28\u0A2B\x03\x02\x02\x02\u0A29\u0A27\x03\x02\x02\x02\u0A29\u0A2A" +
		"\x03\x02\x02\x02\u0A2A\u013F\x03\x02\x02\x02\u0A2B\u0A29\x03\x02\x02\x02" +
		"\u0A2C\u0A33\x07\u0104\x02\x02\u0A2D\u0A30\x07\u0105\x02\x02\u0A2E\u0A2F" +
		"\x07\xCA\x02\x02\u0A2F\u0A31\x07\u0104\x02\x02\u0A30\u0A2E\x03\x02\x02" +
		"\x02\u0A30\u0A31\x03\x02\x02\x02\u0A31\u0A33\x03\x02\x02\x02\u0A32\u0A2C" +
		"\x03\x02\x02\x02\u0A32\u0A2D\x03\x02\x02\x02\u0A33\u0141\x03\x02\x02\x02" +
		"\u0A34\u0A35\t\x19\x02\x02\u0A35\u0143\x03\x02\x02\x02\u0A36\u0A37\t\x1A" +
		"\x02\x02\u0A37\u0145\x03\x02\x02\x02\u0A38\u0A39\t\x1B\x02\x02\u0A39\u0147" +
		"\x03\x02\x02\x02\u0A3A\u0A3B\x07\u0107\x02\x02\u0A3B\u0A49\x05\u014A\xA6" +
		"\x02\u0A3C\u0A3D\x07\xFB\x02\x02\u0A3D\u0A3E\x07\u0107\x02\x02\u0A3E\u0A3F" +
		"\x07\xFC\x02\x02\u0A3F\u0A49\x05\u014A\xA6\x02\u0A40\u0A41\x07g\x02\x02" +
		"\u0A41\u0A42\x07\u0107\x02\x02\u0A42\u0A49\x05\u014A\xA6\x02\u0A43\u0A44" +
		"\x07g\x02\x02\u0A44\u0A45\x07\xFB\x02\x02\u0A45\u0A46\x07\u0107\x02\x02" +
		"\u0A46\u0A47\x07\xFC\x02\x02\u0A47\u0A49\x05\u014A\xA6\x02\u0A48\u0A3A" +
		"\x03\x02\x02\x02\u0A48\u0A3C\x03\x02\x02\x02\u0A48\u0A40\x03\x02\x02\x02" +
		"\u0A48\u0A43\x03\x02\x02\x02\u0A49\u0149\x03\x02\x02\x02\u0A4A\u0A4B\t" +
		"\x1C\x02\x02\u0A4B\u014B\x03\x02\x02\x02\u0A4C\u0A4D\t\x1D\x02\x02\u0A4D" +
		"\u014D\x03\x02\x02\x02\u0A4E\u0A4F\b\xA8\x01\x02\u0A4F\u0A50\x07\n\x02" +
		"\x02\u0A50\u0A51\x07\xED\x02\x02\u0A51\u0A52\x05\u014E\xA8\x02\u0A52\u0A53" +
		"\x07\xEF\x02\x02\u0A53\u0A7B\x03\x02\x02\x02\u0A54\u0A55\x07|\x02\x02" +
		"\u0A55\u0A56\x07\xED\x02\x02\u0A56\u0A57\x05\u014E\xA8\x02\u0A57\u0A58" +
		"\x07\xF9\x02\x02\u0A58\u0A59\x05\u014E\xA8\x02\u0A59\u0A5A\x07\xEF\x02" +
		"\x02\u0A5A\u0A7B\x03\x02\x02\x02\u0A5B\u0A5C\x07\xBA\x02\x02\u0A5C\u0A5D" +
		"\x07\xED\x02\x02\u0A5D\u0A5E\x05\u016A\xB6\x02\u0A5E\u0A5F\x07\xFA\x02" +
		"\x02\u0A5F\u0A67\x05\u014E\xA8\x02\u0A60\u0A61\x07\xF9\x02\x02\u0A61\u0A62" +
		"\x05\u016A\xB6\x02\u0A62\u0A63\x07\xFA\x02\x02\u0A63\u0A64\x05\u014E\xA8" +
		"\x02\u0A64\u0A66\x03\x02\x02\x02\u0A65\u0A60\x03\x02\x02\x02\u0A66\u0A69" +
		"\x03\x02\x02\x02\u0A67\u0A65\x03\x02\x02\x02\u0A67\u0A68\x03\x02\x02\x02" +
		"\u0A68\u0A6A\x03\x02\x02\x02\u0A69\u0A67\x03\x02\x02\x02\u0A6A\u0A6B\x07" +
		"\xEF\x02\x02\u0A6B\u0A7B\x03\x02\x02\x02\u0A6C\u0A78\x05\u0152\xAA\x02" +
		"\u0A6D\u0A6E\x07\xFB\x02\x02\u0A6E\u0A73\x05\u0150\xA9\x02\u0A6F\u0A70" +
		"\x07\xF9\x02\x02\u0A70\u0A72\x05\u0150\xA9\x02\u0A71\u0A6F\x03\x02\x02" +
		"\x02\u0A72\u0A75\x03\x02\x02\x02\u0A73\u0A71\x03\x02\x02\x02\u0A73\u0A74" +
		"\x03\x02\x02\x02\u0A74\u0A76\x03\x02\x02\x02\u0A75\u0A73\x03\x02\x02\x02" +
		"\u0A76\u0A77\x07\xFC\x02\x02\u0A77\u0A79\x03\x02\x02\x02\u0A78\u0A6D\x03" +
		"\x02\x02\x02\u0A78\u0A79\x03\x02\x02\x02\u0A79\u0A7B\x03\x02\x02\x02\u0A7A" +
		"\u0A4E\x03\x02\x02\x02\u0A7A\u0A54\x03\x02\x02\x02\u0A7A\u0A5B\x03\x02" +
		"\x02\x02\u0A7A\u0A6C\x03\x02\x02\x02\u0A7B\u0A80\x03\x02\x02\x02\u0A7C" +
		"\u0A7D\f\x07\x02\x02\u0A7D\u0A7F\x07\n\x02\x02\u0A7E\u0A7C\x03\x02\x02" +
		"\x02\u0A7F\u0A82\x03\x02\x02\x02\u0A80\u0A7E\x03\x02\x02\x02\u0A80\u0A81" +
		"\x03\x02\x02\x02\u0A81\u014F\x03\x02\x02\x02\u0A82\u0A80\x03\x02\x02\x02" +
		"\u0A83\u0A86\x07\u0107\x02\x02\u0A84\u0A86\x05\u014E\xA8\x02\u0A85\u0A83" +
		"\x03\x02\x02\x02\u0A85\u0A84\x03\x02\x02\x02\u0A86\u0151\x03\x02\x02\x02" +
		"\u0A87\u0A8C\x07\u010E\x02\x02\u0A88\u0A8C\x07\u010F\x02\x02\u0A89\u0A8C" +
		"\x07\u0110\x02\x02\u0A8A\u0A8C\x05\u016A\xB6\x02\u0A8B\u0A87\x03\x02\x02" +
		"\x02\u0A8B\u0A88\x03\x02\x02\x02\u0A8B\u0A89\x03\x02\x02\x02\u0A8B\u0A8A" +
		"\x03\x02\x02\x02\u0A8C\u0153\x03\x02\x02\x02\u0A8D\u0A8E\x07\xDA\x02\x02" +
		"\u0A8E\u0A8F\x05\u0136\x9C\x02\u0A8F\u0A90\x07\xC4\x02\x02\u0A90\u0A91" +
		"\x05\u0136\x9C\x02\u0A91\u0155\x03\x02\x02\x02\u0A92\u0A93\x07L\x02\x02" +
		"\u0A93\u0A94\x07\xFB\x02\x02\u0A94\u0A95\x07\xDB\x02\x02\u0A95\u0A96\x05" +
		"\u0138\x9D\x02\u0A96\u0A97\x07\xFC\x02\x02\u0A97\u0157\x03\x02\x02\x02" +
		"\u0A98\u0A99\x07\x92\x02\x02\u0A99\u0AA4\x07\xFB\x02\x02\u0A9A\u0A9B\x07" +
		"\x94\x02\x02\u0A9B\u0A9C\x07\x1C\x02\x02\u0A9C\u0AA1\x05\u0136\x9C\x02" +
		"\u0A9D\u0A9E\x07\xF9\x02\x02\u0A9E\u0AA0\x05\u0136\x9C\x02\u0A9F\u0A9D" +
		"\x03\x02\x02\x02\u0AA0\u0AA3\x03\x02\x02\x02\u0AA1\u0A9F\x03\x02\x02\x02" +
		"\u0AA1\u0AA2\x03\x02\x02\x02\u0AA2\u0AA5\x03\x02\x02\x02\u0AA3\u0AA1\x03" +
		"\x02\x02\x02\u0AA4\u0A9A\x03\x02\x02\x02";
	private static readonly _serializedATNSegment5: string =
		"\u0AA4\u0AA5\x03\x02\x02\x02\u0AA5\u0AB0\x03\x02\x02\x02\u0AA6\u0AA7\x07" +
		"\x8E\x02\x02\u0AA7\u0AA8\x07\x1C\x02\x02\u0AA8\u0AAD\x05\u010C\x87\x02" +
		"\u0AA9\u0AAA\x07\xF9\x02\x02\u0AAA\u0AAC\x05\u010C\x87\x02\u0AAB\u0AA9" +
		"\x03\x02\x02\x02\u0AAC\u0AAF\x03\x02\x02\x02\u0AAD\u0AAB\x03\x02\x02\x02" +
		"\u0AAD\u0AAE\x03\x02\x02\x02\u0AAE\u0AB1\x03\x02\x02\x02\u0AAF\u0AAD\x03" +
		"\x02\x02\x02\u0AB0\u0AA6\x03\x02\x02\x02\u0AB0\u0AB1\x03\x02\x02\x02\u0AB1" +
		"\u0AB3\x03\x02\x02\x02\u0AB2\u0AB4\x05\u015A\xAE\x02\u0AB3\u0AB2\x03\x02" +
		"\x02\x02\u0AB3\u0AB4\x03\x02\x02\x02\u0AB4\u0AB5\x03\x02\x02\x02\u0AB5" +
		"\u0AB6\x07\xFC\x02\x02\u0AB6\u0159\x03\x02\x02\x02\u0AB7\u0AB8\x07\x9D" +
		"\x02\x02\u0AB8\u0AC8\x05\u015C\xAF\x02\u0AB9\u0ABA\x07\xAC\x02\x02\u0ABA" +
		"\u0AC8\x05\u015C\xAF\x02\u0ABB\u0ABC\x07\x9D\x02\x02\u0ABC\u0ABD\x07\x11" +
		"\x02\x02\u0ABD\u0ABE\x05\u015C\xAF\x02\u0ABE\u0ABF\x07\x07\x02\x02\u0ABF" +
		"\u0AC0\x05\u015C\xAF\x02\u0AC0\u0AC8\x03\x02\x02\x02\u0AC1\u0AC2\x07\xAC" +
		"\x02\x02\u0AC2\u0AC3\x07\x11\x02\x02\u0AC3\u0AC4\x05\u015C\xAF\x02\u0AC4" +
		"\u0AC5\x07\x07\x02\x02\u0AC5\u0AC6\x05\u015C\xAF\x02\u0AC6\u0AC8\x03\x02" +
		"\x02\x02\u0AC7\u0AB7\x03\x02\x02\x02\u0AC7\u0AB9\x03\x02\x02\x02\u0AC7" +
		"\u0ABB\x03\x02\x02\x02\u0AC7\u0AC1\x03\x02\x02\x02\u0AC8\u015B\x03\x02" +
		"\x02\x02\u0AC9\u0ACA\x07\xCB\x02\x02\u0ACA\u0AD3\x07\x98\x02\x02\u0ACB" +
		"\u0ACC\x07\xCB\x02\x02\u0ACC\u0AD3\x07O\x02\x02\u0ACD\u0ACE\x07)\x02\x02" +
		"\u0ACE\u0AD3\x07\xAB\x02\x02\u0ACF\u0AD0\x05\u0136\x9C\x02\u0AD0\u0AD1" +
		"\t\x1E\x02\x02\u0AD1\u0AD3\x03\x02\x02\x02\u0AD2\u0AC9\x03\x02\x02\x02" +
		"\u0AD2\u0ACB\x03\x02\x02\x02\u0AD2\u0ACD\x03\x02\x02\x02\u0AD2\u0ACF\x03" +
		"\x02\x02\x02\u0AD3\u015D\x03\x02\x02\x02\u0AD4\u0AD5\x05\u016A\xB6\x02" +
		"\u0AD5\u0AD6\x07\xF7\x02\x02\u0AD6\u0AD7\x05\u016A\xB6\x02\u0AD7\u0ADA" +
		"\x03\x02\x02\x02\u0AD8\u0ADA\x05\u016A\xB6\x02\u0AD9\u0AD4\x03\x02\x02" +
		"\x02\u0AD9\u0AD8\x03\x02\x02\x02\u0ADA\u015F\x03\x02\x02\x02\u0ADB\u0AE0" +
		"\x05\u015E\xB0\x02\u0ADC\u0ADD\x07\xF9\x02\x02\u0ADD\u0ADF\x05\u015E\xB0" +
		"\x02\u0ADE\u0ADC\x03\x02\x02\x02\u0ADF\u0AE2\x03\x02\x02\x02\u0AE0\u0ADE" +
		"\x03\x02\x02\x02\u0AE0\u0AE1\x03\x02\x02\x02\u0AE1\u0161\x03\x02\x02\x02" +
		"\u0AE2\u0AE0\x03\x02\x02\x02\u0AE3\u0AF1\x07\x04\x02\x02\u0AE4\u0AF1\x07" +
		"\x06\x02\x02\u0AE5\u0AF1\x07<\x02\x02\u0AE6\u0AF1\x07\'\x02\x02\u0AE7" +
		"\u0AF1\x07e\x02\x02\u0AE8\u0AF1\x07\xA5\x02\x02\u0AE9\u0AEE\x07\xB1\x02" +
		"\x02\u0AEA\u0AEB\x07\xFB\x02\x02\u0AEB\u0AEC\x05\u016A\xB6\x02\u0AEC\u0AED" +
		"\x07\xFC\x02\x02\u0AED\u0AEF\x03\x02\x02\x02\u0AEE\u0AEA\x03\x02\x02\x02" +
		"\u0AEE\u0AEF\x03\x02\x02\x02\u0AEF\u0AF1\x03\x02\x02\x02\u0AF0\u0AE3\x03" +
		"\x02\x02\x02\u0AF0\u0AE4\x03\x02\x02\x02\u0AF0\u0AE5\x03\x02\x02\x02\u0AF0" +
		"\u0AE6\x03\x02\x02\x02\u0AF0\u0AE7\x03\x02\x02\x02\u0AF0\u0AE8\x03\x02" +
		"\x02\x02\u0AF0\u0AE9\x03\x02\x02\x02\u0AF1\u0163\x03\x02\x02\x02\u0AF2" +
		"\u0AF3\t\x1F\x02\x02\u0AF3\u0165\x03\x02\x02\x02\u0AF4\u0AF9\x05\u016A" +
		"\xB6\x02\u0AF5\u0AF6\x07\xF7\x02\x02\u0AF6\u0AF8\x05\u016A\xB6\x02\u0AF7" +
		"\u0AF5\x03\x02\x02\x02\u0AF8\u0AFB\x03\x02\x02\x02\u0AF9\u0AF7\x03\x02" +
		"\x02\x02\u0AF9\u0AFA\x03\x02\x02\x02\u0AFA\u0167\x03\x02\x02\x02\u0AFB" +
		"\u0AF9\x03\x02\x02\x02\u0AFC\u0AFD\x07\xA9\x02\x02\u0AFD\u0B03\x05\u016A" +
		"\xB6\x02\u0AFE\u0AFF\x07\xD0\x02\x02\u0AFF\u0B03\x05\u016A\xB6\x02\u0B00" +
		"\u0B01\x07Y\x02\x02\u0B01\u0B03\x05\u016A\xB6\x02\u0B02\u0AFC\x03\x02" +
		"\x02\x02\u0B02\u0AFE\x03\x02\x02\x02\u0B02\u0B00\x03\x02\x02\x02\u0B03" +
		"\u0169\x03\x02\x02\x02\u0B04\u0B0A\x07\u010A\x02\x02\u0B05\u0B0A\x07\u0104" +
		"\x02\x02\u0B06\u0B0A\x05\u0170\xB9\x02\u0B07\u0B0A\x07\u010D\x02\x02\u0B08" +
		"\u0B0A\x07\u010B\x02\x02\u0B09\u0B04\x03\x02\x02\x02\u0B09\u0B05\x03\x02" +
		"\x02\x02\u0B09\u0B06\x03\x02\x02\x02\u0B09\u0B07\x03\x02\x02\x02\u0B09" +
		"\u0B08\x03\x02\x02\x02\u0B0A\u016B\x03\x02\x02\x02\u0B0B\u0B0D\x07\xF2" +
		"\x02\x02\u0B0C\u0B0B\x03\x02\x02\x02\u0B0C\u0B0D\x03\x02\x02\x02\u0B0D" +
		"\u0B0E\x03\x02\x02\x02\u0B0E\u0B18\x07\u0108\x02\x02\u0B0F\u0B11\x07\xF2" +
		"\x02\x02\u0B10\u0B0F\x03\x02\x02\x02\u0B10\u0B11\x03\x02\x02\x02\u0B11" +
		"\u0B12\x03\x02\x02\x02\u0B12\u0B18\x07\u0109\x02\x02\u0B13\u0B15\x07\xF2" +
		"\x02\x02\u0B14\u0B13\x03\x02\x02\x02\u0B14\u0B15\x03\x02\x02\x02\u0B15" +
		"\u0B16\x03\x02\x02\x02\u0B16\u0B18\x07\u0107\x02\x02\u0B17\u0B0C\x03\x02" +
		"\x02\x02\u0B17\u0B10\x03\x02\x02\x02\u0B17\u0B14\x03\x02\x02\x02\u0B18" +
		"\u016D\x03\x02\x02\x02\u0B19\u0B1A\t \x02\x02\u0B1A\u016F\x03\x02\x02" +
		"\x02\u0B1B\u0B1C\t!\x02\x02\u0B1C\u0171\x03\x02\x02\x02\u0177\u017A\u017C" +
		"\u0183\u0187\u018B\u018F\u0193\u0197\u019B\u019F\u01A3\u01A7\u01AB\u01AF" +
		"\u01B3\u01B7\u01BB\u01BF\u01C3\u01C7\u01CB\u01CF\u01D3\u01D7\u01D9\u01E6" +
		"\u01EA\u01EE\u01F7\u01FC\u0200\u0206\u0208\u020D\u0211\u0215\u021C\u0221" +
		"\u0227\u022B\u0234\u023B\u023F\u0244\u0246\u024B\u024F\u0256\u025A\u025F" +
		"\u0263\u0267\u026B\u0273\u0278\u027C\u0284\u0288\u0291\u0294\u0297\u029D" +
		"\u02A4\u02AF\u02B4\u02B9\u02BE\u02C3\u02CC\u02CF\u02D2\u02D6\u02F0\u030A" +
		"\u0313\u031D\u0320\u032E\u0340\u0342\u034B\u0356\u035F\u0366\u036A\u0371" +
		"\u0377\u037A\u037F\u0386\u0394\u03A1\u03A6\u03AB\u03B1\u03D5\u03D8\u03DE" +
		"\u03E1\u03E7\u03ED\u03F9\u03FB\u0403\u040B\u0410\u0414\u0419\u0420\u0424" +
		"\u0428\u042E\u0432\u0436\u043F\u0442\u0445\u044D\u045B\u0462\u046F\u0475" +
		"\u047A\u047D\u0480\u0485\u0489\u0492\u0497\u049D\u04A1\u04A6\u04AB\u04AE" +
		"\u04B6\u04B9\u04BD\u04C9\u04CC\u04D0\u04D5\u04D9\u04E9\u04EE\u04F5\u04F8" +
		"\u04FE\u0501\u0508\u050B\u050F\u0514\u0517\u051E\u0521\u0539\u0547\u054B" +
		"\u054F\u0563\u0565\u0567\u0570\u0572\u057B\u057D\u0586\u0588\u058D\u0596" +
		"\u059F\u05A8\u05B3\u05B9\u05BE\u05C1\u05CE\u05D8\u05DC\u05E1\u05EC\u05F1" +
		"\u0612\u061A\u061F\u0625\u062A\u062E\u0633\u0638\u063D\u0641\u064A\u064D" +
		"\u0651\u0658\u0663\u0669\u066D\u0673\u067D\u0684\u0689\u068E\u0693\u0699" +
		"\u069C\u06A5\u06A8\u06AB\u06B1\u06BB\u06BE\u06C2\u06C6\u06CC\u06D2\u06D5" +
		"\u06DB\u06E1\u06E4\u06E7\u06EB\u06F5\u0700\u0705\u0708\u070C\u0713\u071D" +
		"\u0729\u072F\u0731\u073A\u073D\u0744\u074E\u0754\u075C\u0767\u0771\u077C" +
		"\u077E\u0784\u0789\u0793\u0796\u079C\u079E\u07A6\u07AC\u07AF\u07B1\u07BD" +
		"\u07C4\u07C8\u07CC\u07D0\u07D3\u07DA\u07E3\u07E6\u07EA\u07EF\u07F3\u07F6" +
		"\u07FD\u0808\u080B\u080F\u0813\u081C\u081F\u0826\u0834\u0838\u083C\u0840" +
		"\u0844\u0848\u084C\u0850\u085A\u0865\u086A\u0877\u0879\u087F\u0883\u0885" +
		"\u088D\u0898\u089F\u08A4\u08B1\u08B7\u08BF\u08C6\u08CA\u08D2\u08D4\u08DF" +
		"\u08E7\u08F0\u08F6\u08FB\u0901\u0907\u090C\u0911\u0917\u0922\u0924\u093F" +
		"\u0945\u0949\u0955\u095F\u0962\u0967\u096E\u0971\u097A\u097D\u0981\u0984" +
		"\u0990\u0993\u09A6\u09AA\u09B2\u09B6\u09CF\u09D2\u09DB\u09E1\u09E7\u09ED" +
		"\u09F8\u0A01\u0A17\u0A1A\u0A1D\u0A27\u0A29\u0A30\u0A32\u0A48\u0A67\u0A73" +
		"\u0A78\u0A7A\u0A80\u0A85\u0A8B\u0AA1\u0AA4\u0AAD\u0AB0\u0AB3\u0AC7\u0AD2" +
		"\u0AD9\u0AE0\u0AEE\u0AF0\u0AF9\u0B02\u0B09\u0B0C\u0B10\u0B14\u0B17";
	public static readonly _serializedATN: string = Utils.join(
		[
			ImpalaSqlParser._serializedATNSegment0,
			ImpalaSqlParser._serializedATNSegment1,
			ImpalaSqlParser._serializedATNSegment2,
			ImpalaSqlParser._serializedATNSegment3,
			ImpalaSqlParser._serializedATNSegment4,
			ImpalaSqlParser._serializedATNSegment5,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ImpalaSqlParser.__ATN) {
			ImpalaSqlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ImpalaSqlParser._serializedATN));
		}

		return ImpalaSqlParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public EOF(): TerminalNode { return this.getToken(ImpalaSqlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_program; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public sqlStatements(): SqlStatementsContext {
		return this.getRuleContext(0, SqlStatementsContext);
	}
	public EOF(): TerminalNode { return this.getToken(ImpalaSqlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_statement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlStatementsContext extends ParserRuleContext {
	public sqlStatement(): SqlStatementContext[];
	public sqlStatement(i: number): SqlStatementContext;
	public sqlStatement(i?: number): SqlStatementContext | SqlStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlStatementContext);
		} else {
			return this.getRuleContext(i, SqlStatementContext);
		}
	}
	public emptyStatement(): EmptyStatementContext[];
	public emptyStatement(i: number): EmptyStatementContext;
	public emptyStatement(i?: number): EmptyStatementContext | EmptyStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EmptyStatementContext);
		} else {
			return this.getRuleContext(i, EmptyStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_sqlStatements; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSqlStatements) {
			listener.enterSqlStatements(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSqlStatements) {
			listener.exitSqlStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSqlStatements) {
			return visitor.visitSqlStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	public SEMICOLON(): TerminalNode { return this.getToken(ImpalaSqlParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_emptyStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterEmptyStatement) {
			listener.enterEmptyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitEmptyStatement) {
			listener.exitEmptyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitEmptyStatement) {
			return visitor.visitEmptyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlStatementContext extends ParserRuleContext {
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.SEMICOLON, 0); }
	public useStatement(): UseStatementContext | undefined {
		return this.tryGetRuleContext(0, UseStatementContext);
	}
	public createStatement(): CreateStatementContext | undefined {
		return this.tryGetRuleContext(0, CreateStatementContext);
	}
	public alterStatement(): AlterStatementContext | undefined {
		return this.tryGetRuleContext(0, AlterStatementContext);
	}
	public truncateTableStatement(): TruncateTableStatementContext | undefined {
		return this.tryGetRuleContext(0, TruncateTableStatementContext);
	}
	public describeStatement(): DescribeStatementContext | undefined {
		return this.tryGetRuleContext(0, DescribeStatementContext);
	}
	public computeStatement(): ComputeStatementContext | undefined {
		return this.tryGetRuleContext(0, ComputeStatementContext);
	}
	public dropStatement(): DropStatementContext | undefined {
		return this.tryGetRuleContext(0, DropStatementContext);
	}
	public grantStatement(): GrantStatementContext | undefined {
		return this.tryGetRuleContext(0, GrantStatementContext);
	}
	public revokeStatement(): RevokeStatementContext | undefined {
		return this.tryGetRuleContext(0, RevokeStatementContext);
	}
	public insertStatement(): InsertStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertStatementContext);
	}
	public deleteStatement(): DeleteStatementContext | undefined {
		return this.tryGetRuleContext(0, DeleteStatementContext);
	}
	public updateStatement(): UpdateStatementContext | undefined {
		return this.tryGetRuleContext(0, UpdateStatementContext);
	}
	public upsertStatement(): UpsertStatementContext | undefined {
		return this.tryGetRuleContext(0, UpsertStatementContext);
	}
	public showStatement(): ShowStatementContext | undefined {
		return this.tryGetRuleContext(0, ShowStatementContext);
	}
	public addCommentStatement(): AddCommentStatementContext | undefined {
		return this.tryGetRuleContext(0, AddCommentStatementContext);
	}
	public explainStatement(): ExplainStatementContext | undefined {
		return this.tryGetRuleContext(0, ExplainStatementContext);
	}
	public setStatement(): SetStatementContext | undefined {
		return this.tryGetRuleContext(0, SetStatementContext);
	}
	public shutdownStatement(): ShutdownStatementContext | undefined {
		return this.tryGetRuleContext(0, ShutdownStatementContext);
	}
	public invalidateMetaStatement(): InvalidateMetaStatementContext | undefined {
		return this.tryGetRuleContext(0, InvalidateMetaStatementContext);
	}
	public loadDataStatement(): LoadDataStatementContext | undefined {
		return this.tryGetRuleContext(0, LoadDataStatementContext);
	}
	public refreshStatement(): RefreshStatementContext | undefined {
		return this.tryGetRuleContext(0, RefreshStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_sqlStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSqlStatement) {
			listener.enterSqlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSqlStatement) {
			listener.exitSqlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSqlStatement) {
			return visitor.visitSqlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UseStatementContext extends ParserRuleContext {
	public KW_USE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_USE, 0); }
	public databaseNamePath(): DatabaseNamePathContext {
		return this.getRuleContext(0, DatabaseNamePathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_useStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterUseStatement) {
			listener.enterUseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitUseStatement) {
			listener.exitUseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitUseStatement) {
			return visitor.visitUseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateStatementContext extends ParserRuleContext {
	public createSchema(): CreateSchemaContext | undefined {
		return this.tryGetRuleContext(0, CreateSchemaContext);
	}
	public createRole(): CreateRoleContext | undefined {
		return this.tryGetRuleContext(0, CreateRoleContext);
	}
	public createAggregateFunction(): CreateAggregateFunctionContext | undefined {
		return this.tryGetRuleContext(0, CreateAggregateFunctionContext);
	}
	public createFunction(): CreateFunctionContext | undefined {
		return this.tryGetRuleContext(0, CreateFunctionContext);
	}
	public createView(): CreateViewContext | undefined {
		return this.tryGetRuleContext(0, CreateViewContext);
	}
	public createKuduTableAsSelect(): CreateKuduTableAsSelectContext | undefined {
		return this.tryGetRuleContext(0, CreateKuduTableAsSelectContext);
	}
	public createTableLike(): CreateTableLikeContext | undefined {
		return this.tryGetRuleContext(0, CreateTableLikeContext);
	}
	public createTableSelect(): CreateTableSelectContext | undefined {
		return this.tryGetRuleContext(0, CreateTableSelectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_createStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterCreateStatement) {
			listener.enterCreateStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitCreateStatement) {
			listener.exitCreateStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateStatement) {
			return visitor.visitCreateStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateTableSelectContext extends ParserRuleContext {
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNameCreate(): TableNameCreateContext {
		return this.getRuleContext(0, TableNameCreateContext);
	}
	public createCommonItem(): CreateCommonItemContext {
		return this.getRuleContext(0, CreateCommonItemContext);
	}
	public KW_EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_EXTERNAL, 0); }
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LPAREN, 0); }
	public columnDefinition(): ColumnDefinitionContext[];
	public columnDefinition(i: number): ColumnDefinitionContext;
	public columnDefinition(i?: number): ColumnDefinitionContext | ColumnDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnDefinitionContext);
		} else {
			return this.getRuleContext(i, ColumnDefinitionContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.RPAREN, 0); }
	public KW_PARTITIONED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PARTITIONED, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_BY, 0); }
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_AS, 0); }
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	public partitionedBy(): PartitionedByContext | undefined {
		return this.tryGetRuleContext(0, PartitionedByContext);
	}
	public createColumnAliases(): CreateColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, CreateColumnAliasesContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	public constraintSpecification(): ConstraintSpecificationContext | undefined {
		return this.tryGetRuleContext(0, ConstraintSpecificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_createTableSelect; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterCreateTableSelect) {
			listener.enterCreateTableSelect(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitCreateTableSelect) {
			listener.exitCreateTableSelect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateTableSelect) {
			return visitor.visitCreateTableSelect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateTableLikeContext extends ParserRuleContext {
	public _parquet!: StringLiteralContext;
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNameCreate(): TableNameCreateContext {
		return this.getRuleContext(0, TableNameCreateContext);
	}
	public KW_LIKE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_LIKE, 0); }
	public createCommonItem(): CreateCommonItemContext {
		return this.getRuleContext(0, CreateCommonItemContext);
	}
	public tableNamePath(): TableNamePathContext | undefined {
		return this.tryGetRuleContext(0, TableNamePathContext);
	}
	public KW_PARQUET(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PARQUET, 0); }
	public KW_EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_EXTERNAL, 0); }
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public KW_PARTITIONED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PARTITIONED, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_BY, 0); }
	public partitionedBy(): PartitionedByContext | undefined {
		return this.tryGetRuleContext(0, PartitionedByContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_createTableLike; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterCreateTableLike) {
			listener.enterCreateTableLike(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitCreateTableLike) {
			listener.exitCreateTableLike(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateTableLike) {
			return visitor.visitCreateTableLike(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateKuduTableAsSelectContext extends ParserRuleContext {
	public _tblProp!: PropertiesContext;
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNameCreate(): TableNameCreateContext {
		return this.getRuleContext(0, TableNameCreateContext);
	}
	public KW_STORED(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_STORED, 0); }
	public KW_AS(): TerminalNode[];
	public KW_AS(i: number): TerminalNode;
	public KW_AS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.KW_AS);
		} else {
			return this.getToken(ImpalaSqlParser.KW_AS, i);
		}
	}
	public KW_KUDU(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_KUDU, 0); }
	public KW_EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_EXTERNAL, 0); }
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LPAREN, 0); }
	public kuduTableElement(): KuduTableElementContext[];
	public kuduTableElement(i: number): KuduTableElementContext;
	public kuduTableElement(i?: number): KuduTableElementContext | KuduTableElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KuduTableElementContext);
		} else {
			return this.getRuleContext(i, KuduTableElementContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.RPAREN, 0); }
	public KW_PRIMARY(): TerminalNode[];
	public KW_PRIMARY(i: number): TerminalNode;
	public KW_PRIMARY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.KW_PRIMARY);
		} else {
			return this.getToken(ImpalaSqlParser.KW_PRIMARY, i);
		}
	}
	public KW_KEY(): TerminalNode[];
	public KW_KEY(i: number): TerminalNode;
	public KW_KEY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.KW_KEY);
		} else {
			return this.getToken(ImpalaSqlParser.KW_KEY, i);
		}
	}
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PARTITION, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_BY, 0); }
	public kuduPartitionClause(): KuduPartitionClauseContext | undefined {
		return this.tryGetRuleContext(0, KuduPartitionClauseContext);
	}
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_COMMENT, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public KW_TBLPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TBLPROPERTIES, 0); }
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	public properties(): PropertiesContext | undefined {
		return this.tryGetRuleContext(0, PropertiesContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	public columnAliases(): ColumnAliasesContext[];
	public columnAliases(i: number): ColumnAliasesContext;
	public columnAliases(i?: number): ColumnAliasesContext | ColumnAliasesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnAliasesContext);
		} else {
			return this.getRuleContext(i, ColumnAliasesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_createKuduTableAsSelect; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterCreateKuduTableAsSelect) {
			listener.enterCreateKuduTableAsSelect(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitCreateKuduTableAsSelect) {
			listener.exitCreateKuduTableAsSelect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateKuduTableAsSelect) {
			return visitor.visitCreateKuduTableAsSelect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateViewContext extends ParserRuleContext {
	public _tblProp!: PropertiesContext;
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CREATE, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_VIEW, 0); }
	public viewNameCreate(): ViewNameCreateContext {
		return this.getRuleContext(0, ViewNameCreateContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_AS, 0); }
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public viewColumns(): ViewColumnsContext | undefined {
		return this.tryGetRuleContext(0, ViewColumnsContext);
	}
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_COMMENT, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public KW_TBLPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TBLPROPERTIES, 0); }
	public properties(): PropertiesContext | undefined {
		return this.tryGetRuleContext(0, PropertiesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_createView; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterCreateView) {
			listener.enterCreateView(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitCreateView) {
			listener.exitCreateView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateView) {
			return visitor.visitCreateView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateSchemaContext extends ParserRuleContext {
	public _comment!: StringLiteralContext;
	public _location!: StringLiteralContext;
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CREATE, 0); }
	public databaseNameCreate(): DatabaseNameCreateContext {
		return this.getRuleContext(0, DatabaseNameCreateContext);
	}
	public KW_SCHEMA(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SCHEMA, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DATABASE, 0); }
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_COMMENT, 0); }
	public KW_LOCATION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LOCATION, 0); }
	public stringLiteral(): StringLiteralContext[];
	public stringLiteral(i: number): StringLiteralContext;
	public stringLiteral(i?: number): StringLiteralContext | StringLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringLiteralContext);
		} else {
			return this.getRuleContext(i, StringLiteralContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_createSchema; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterCreateSchema) {
			listener.enterCreateSchema(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitCreateSchema) {
			listener.exitCreateSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateSchema) {
			return visitor.visitCreateSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateRoleContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CREATE, 0); }
	public KW_ROLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ROLE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_createRole; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterCreateRole) {
			listener.enterCreateRole(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitCreateRole) {
			listener.exitCreateRole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateRole) {
			return visitor.visitCreateRole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateAggregateFunctionContext extends ParserRuleContext {
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CREATE, 0); }
	public KW_FUNCTION(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_FUNCTION, 0); }
	public functionNameCreate(): FunctionNameCreateContext {
		return this.getRuleContext(0, FunctionNameCreateContext);
	}
	public KW_RETURNS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_RETURNS, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public KW_LOCATION(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_LOCATION, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.STRING);
		} else {
			return this.getToken(ImpalaSqlParser.STRING, i);
		}
	}
	public KW_UPDATE_FN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_UPDATE_FN, 0); }
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.EQ);
		} else {
			return this.getToken(ImpalaSqlParser.EQ, i);
		}
	}
	public KW_MERGE_FN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_MERGE_FN, 0); }
	public KW_AGGREGATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_AGGREGATE, 0); }
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.RPAREN, 0); }
	public KW_INTERMEDIATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_INTERMEDIATE, 0); }
	public KW_INIT_FN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_INIT_FN, 0); }
	public KW_PREPARE_FN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PREPARE_FN, 0); }
	public KW_CLOSEFN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CLOSEFN, 0); }
	public KW_SERIALIZE_FN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SERIALIZE_FN, 0); }
	public KW_FINALIZE_FN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FINALIZE_FN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_createAggregateFunction; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterCreateAggregateFunction) {
			listener.enterCreateAggregateFunction(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitCreateAggregateFunction) {
			listener.exitCreateAggregateFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateAggregateFunction) {
			return visitor.visitCreateAggregateFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateFunctionContext extends ParserRuleContext {
	public _symbol!: StringLiteralContext;
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CREATE, 0); }
	public KW_FUNCTION(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_FUNCTION, 0); }
	public functionNameCreate(): FunctionNameCreateContext {
		return this.getRuleContext(0, FunctionNameCreateContext);
	}
	public KW_LOCATION(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_LOCATION, 0); }
	public STRING(): TerminalNode { return this.getToken(ImpalaSqlParser.STRING, 0); }
	public KW_SYMBOL(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SYMBOL, 0); }
	public EQ(): TerminalNode { return this.getToken(ImpalaSqlParser.EQ, 0); }
	public stringLiteral(): StringLiteralContext {
		return this.getRuleContext(0, StringLiteralContext);
	}
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.RPAREN, 0); }
	public KW_RETURNS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_RETURNS, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_createFunction; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterCreateFunction) {
			listener.enterCreateFunction(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitCreateFunction) {
			listener.exitCreateFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateFunction) {
			return visitor.visitCreateFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterStatementContext extends ParserRuleContext {
	public alterDatabase(): AlterDatabaseContext | undefined {
		return this.tryGetRuleContext(0, AlterDatabaseContext);
	}
	public alterUnSetOrSetViewTblproperties(): AlterUnSetOrSetViewTblpropertiesContext | undefined {
		return this.tryGetRuleContext(0, AlterUnSetOrSetViewTblpropertiesContext);
	}
	public renameTable(): RenameTableContext | undefined {
		return this.tryGetRuleContext(0, RenameTableContext);
	}
	public alterViewOwner(): AlterViewOwnerContext | undefined {
		return this.tryGetRuleContext(0, AlterViewOwnerContext);
	}
	public alterView(): AlterViewContext | undefined {
		return this.tryGetRuleContext(0, AlterViewContext);
	}
	public renameView(): RenameViewContext | undefined {
		return this.tryGetRuleContext(0, RenameViewContext);
	}
	public dropPartitionByRangeOrValue(): DropPartitionByRangeOrValueContext | undefined {
		return this.tryGetRuleContext(0, DropPartitionByRangeOrValueContext);
	}
	public alterFormat(): AlterFormatContext | undefined {
		return this.tryGetRuleContext(0, AlterFormatContext);
	}
	public recoverPartitions(): RecoverPartitionsContext | undefined {
		return this.tryGetRuleContext(0, RecoverPartitionsContext);
	}
	public addPartitionByRangeOrValue(): AddPartitionByRangeOrValueContext | undefined {
		return this.tryGetRuleContext(0, AddPartitionByRangeOrValueContext);
	}
	public alterTableNonKuduOrKuduOnly(): AlterTableNonKuduOrKuduOnlyContext | undefined {
		return this.tryGetRuleContext(0, AlterTableNonKuduOrKuduOnlyContext);
	}
	public addSingleColumn(): AddSingleColumnContext | undefined {
		return this.tryGetRuleContext(0, AddSingleColumnContext);
	}
	public replaceOrAddColumns(): ReplaceOrAddColumnsContext | undefined {
		return this.tryGetRuleContext(0, ReplaceOrAddColumnsContext);
	}
	public changeColumnDefine(): ChangeColumnDefineContext | undefined {
		return this.tryGetRuleContext(0, ChangeColumnDefineContext);
	}
	public alterStatsKey(): AlterStatsKeyContext | undefined {
		return this.tryGetRuleContext(0, AlterStatsKeyContext);
	}
	public alterPartitionCache(): AlterPartitionCacheContext | undefined {
		return this.tryGetRuleContext(0, AlterPartitionCacheContext);
	}
	public alterDropSingleColumn(): AlterDropSingleColumnContext | undefined {
		return this.tryGetRuleContext(0, AlterDropSingleColumnContext);
	}
	public alterTableOwner(): AlterTableOwnerContext | undefined {
		return this.tryGetRuleContext(0, AlterTableOwnerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_alterStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAlterStatement) {
			listener.enterAlterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAlterStatement) {
			listener.exitAlterStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterStatement) {
			return visitor.visitAlterStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterDatabaseContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_DATABASE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DATABASE, 0); }
	public databaseNamePath(): DatabaseNamePathContext {
		return this.getRuleContext(0, DatabaseNamePathContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SET, 0); }
	public KW_OWNER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_OWNER, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_USER, 0); }
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ROLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_alterDatabase; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAlterDatabase) {
			listener.enterAlterDatabase(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAlterDatabase) {
			listener.exitAlterDatabase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterDatabase) {
			return visitor.visitAlterDatabase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterStatsKeyContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SET, 0); }
	public KW_COLUMN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_COLUMN, 0); }
	public KW_STATS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_STATS, 0); }
	public columnNamePath(): ColumnNamePathContext {
		return this.getRuleContext(0, ColumnNamePathContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public statsKey(): StatsKeyContext[];
	public statsKey(i: number): StatsKeyContext;
	public statsKey(i?: number): StatsKeyContext | StatsKeyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatsKeyContext);
		} else {
			return this.getRuleContext(i, StatsKeyContext);
		}
	}
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.EQ);
		} else {
			return this.getToken(ImpalaSqlParser.EQ, i);
		}
	}
	public stringLiteral(): StringLiteralContext[];
	public stringLiteral(i: number): StringLiteralContext;
	public stringLiteral(i?: number): StringLiteralContext | StringLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringLiteralContext);
		} else {
			return this.getRuleContext(i, StringLiteralContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_alterStatsKey; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAlterStatsKey) {
			listener.enterAlterStatsKey(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAlterStatsKey) {
			listener.exitAlterStatsKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterStatsKey) {
			return visitor.visitAlterStatsKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterPartitionCacheContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SET, 0); }
	public KW_UNCACHED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_UNCACHED, 0); }
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PARTITION, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public KW_CACHED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CACHED, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_IN, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_WITH, 0); }
	public KW_REPLICATION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_REPLICATION, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.EQ, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_alterPartitionCache; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAlterPartitionCache) {
			listener.enterAlterPartitionCache(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAlterPartitionCache) {
			listener.exitAlterPartitionCache(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterPartitionCache) {
			return visitor.visitAlterPartitionCache(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChangeColumnDefineContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_CHANGE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CHANGE, 0); }
	public KW_COLUMN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_COLUMN, 0); }
	public columnSpecWithKudu(): ColumnSpecWithKuduContext {
		return this.getRuleContext(0, ColumnSpecWithKuduContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_changeColumnDefine; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterChangeColumnDefine) {
			listener.enterChangeColumnDefine(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitChangeColumnDefine) {
			listener.exitChangeColumnDefine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitChangeColumnDefine) {
			return visitor.visitChangeColumnDefine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterDropSingleColumnContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DROP, 0); }
	public columnNamePath(): ColumnNamePathContext {
		return this.getRuleContext(0, ColumnNamePathContext);
	}
	public KW_COLUMN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_COLUMN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_alterDropSingleColumn; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAlterDropSingleColumn) {
			listener.enterAlterDropSingleColumn(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAlterDropSingleColumn) {
			listener.exitAlterDropSingleColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterDropSingleColumn) {
			return visitor.visitAlterDropSingleColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterTableOwnerContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SET, 0); }
	public KW_OWNER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_OWNER, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_USER, 0); }
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ROLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_alterTableOwner; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAlterTableOwner) {
			listener.enterAlterTableOwner(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAlterTableOwner) {
			listener.exitAlterTableOwner(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableOwner) {
			return visitor.visitAlterTableOwner(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReplaceOrAddColumnsContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_COLUMNS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_COLUMNS, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public columnSpecWithKudu(): ColumnSpecWithKuduContext[];
	public columnSpecWithKudu(i: number): ColumnSpecWithKuduContext;
	public columnSpecWithKudu(i?: number): ColumnSpecWithKuduContext | ColumnSpecWithKuduContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnSpecWithKuduContext);
		} else {
			return this.getRuleContext(i, ColumnSpecWithKuduContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	public KW_REPLACE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_REPLACE, 0); }
	public KW_ADD(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ADD, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_replaceOrAddColumns; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterReplaceOrAddColumns) {
			listener.enterReplaceOrAddColumns(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitReplaceOrAddColumns) {
			listener.exitReplaceOrAddColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitReplaceOrAddColumns) {
			return visitor.visitReplaceOrAddColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddSingleColumnContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_ADD(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ADD, 0); }
	public KW_COLUMN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_COLUMN, 0); }
	public createColumnSpecWithKudu(): CreateColumnSpecWithKuduContext {
		return this.getRuleContext(0, CreateColumnSpecWithKuduContext);
	}
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_addSingleColumn; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAddSingleColumn) {
			listener.enterAddSingleColumn(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAddSingleColumn) {
			listener.exitAddSingleColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAddSingleColumn) {
			return visitor.visitAddSingleColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterTableNonKuduOrKuduOnlyContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode[];
	public KW_ALTER(i: number): TerminalNode;
	public KW_ALTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.KW_ALTER);
		} else {
			return this.getToken(ImpalaSqlParser.KW_ALTER, i);
		}
	}
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public columnNamePath(): ColumnNamePathContext {
		return this.getRuleContext(0, ColumnNamePathContext);
	}
	public KW_SET(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SET, 0); }
	public KW_DROP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DROP, 0); }
	public KW_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DEFAULT, 0); }
	public KW_COLUMN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_COLUMN, 0); }
	public kuduStorageAttr(): KuduStorageAttrContext | undefined {
		return this.tryGetRuleContext(0, KuduStorageAttrContext);
	}
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_COMMENT, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_alterTableNonKuduOrKuduOnly; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAlterTableNonKuduOrKuduOnly) {
			listener.enterAlterTableNonKuduOrKuduOnly(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAlterTableNonKuduOrKuduOnly) {
			listener.exitAlterTableNonKuduOrKuduOnly(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableNonKuduOrKuduOnly) {
			return visitor.visitAlterTableNonKuduOrKuduOnly(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddPartitionByRangeOrValueContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_ADD(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ADD, 0); }
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PARTITION, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public KW_RANGE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_RANGE, 0); }
	public kuduPartitionSpec(): KuduPartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, KuduPartitionSpecContext);
	}
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public KW_LOCATION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LOCATION, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public cacheSpec(): CacheSpecContext | undefined {
		return this.tryGetRuleContext(0, CacheSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_addPartitionByRangeOrValue; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAddPartitionByRangeOrValue) {
			listener.enterAddPartitionByRangeOrValue(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAddPartitionByRangeOrValue) {
			listener.exitAddPartitionByRangeOrValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAddPartitionByRangeOrValue) {
			return visitor.visitAddPartitionByRangeOrValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterFormatContext extends ParserRuleContext {
	public _tblProp!: PropertiesContext;
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SET, 0); }
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PARTITION, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public KW_FILEFORMAT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FILEFORMAT, 0); }
	public fileFormat(): FileFormatContext | undefined {
		return this.tryGetRuleContext(0, FileFormatContext);
	}
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ROW, 0); }
	public KW_FORMAT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FORMAT, 0); }
	public rowFormat(): RowFormatContext | undefined {
		return this.tryGetRuleContext(0, RowFormatContext);
	}
	public KW_LOCATION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LOCATION, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public KW_TBLPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TBLPROPERTIES, 0); }
	public KW_SERDEPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SERDEPROPERTIES, 0); }
	public properties(): PropertiesContext | undefined {
		return this.tryGetRuleContext(0, PropertiesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_alterFormat; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAlterFormat) {
			listener.enterAlterFormat(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAlterFormat) {
			listener.exitAlterFormat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterFormat) {
			return visitor.visitAlterFormat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RecoverPartitionsContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_RECOVER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_RECOVER, 0); }
	public KW_PARTITIONS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_PARTITIONS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_recoverPartitions; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterRecoverPartitions) {
			listener.enterRecoverPartitions(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitRecoverPartitions) {
			listener.exitRecoverPartitions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitRecoverPartitions) {
			return visitor.visitRecoverPartitions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropPartitionByRangeOrValueContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DROP, 0); }
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PARTITION, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public KW_RANGE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_RANGE, 0); }
	public kuduPartitionSpec(): KuduPartitionSpecContext | undefined {
		return this.tryGetRuleContext(0, KuduPartitionSpecContext);
	}
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	public KW_PURGE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PURGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_dropPartitionByRangeOrValue; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDropPartitionByRangeOrValue) {
			listener.enterDropPartitionByRangeOrValue(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDropPartitionByRangeOrValue) {
			listener.exitDropPartitionByRangeOrValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDropPartitionByRangeOrValue) {
			return visitor.visitDropPartitionByRangeOrValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterViewContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_VIEW, 0); }
	public viewNamePath(): ViewNamePathContext {
		return this.getRuleContext(0, ViewNamePathContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_AS, 0); }
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public viewColumns(): ViewColumnsContext | undefined {
		return this.tryGetRuleContext(0, ViewColumnsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_alterView; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAlterView) {
			listener.enterAlterView(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAlterView) {
			listener.exitAlterView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterView) {
			return visitor.visitAlterView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RenameViewContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_VIEW, 0); }
	public viewNamePath(): ViewNamePathContext[];
	public viewNamePath(i: number): ViewNamePathContext;
	public viewNamePath(i?: number): ViewNamePathContext | ViewNamePathContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ViewNamePathContext);
		} else {
			return this.getRuleContext(i, ViewNamePathContext);
		}
	}
	public KW_RENAME(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_RENAME, 0); }
	public KW_TO(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_renameView; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterRenameView) {
			listener.enterRenameView(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitRenameView) {
			listener.exitRenameView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitRenameView) {
			return visitor.visitRenameView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterViewOwnerContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_VIEW, 0); }
	public viewNamePath(): ViewNamePathContext {
		return this.getRuleContext(0, ViewNamePathContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SET, 0); }
	public KW_OWNER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_OWNER, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_USER, 0); }
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ROLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_alterViewOwner; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAlterViewOwner) {
			listener.enterAlterViewOwner(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAlterViewOwner) {
			listener.exitAlterViewOwner(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterViewOwner) {
			return visitor.visitAlterViewOwner(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RenameTableContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNamePath(): TableNamePathContext[];
	public tableNamePath(i: number): TableNamePathContext;
	public tableNamePath(i?: number): TableNamePathContext | TableNamePathContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableNamePathContext);
		} else {
			return this.getRuleContext(i, TableNamePathContext);
		}
	}
	public KW_RENAME(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_RENAME, 0); }
	public KW_TO(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_renameTable; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterRenameTable) {
			listener.enterRenameTable(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitRenameTable) {
			listener.exitRenameTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitRenameTable) {
			return visitor.visitRenameTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterUnSetOrSetViewTblpropertiesContext extends ParserRuleContext {
	public _tblProp!: PropertiesContext;
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_VIEW, 0); }
	public viewNamePath(): ViewNamePathContext {
		return this.getRuleContext(0, ViewNamePathContext);
	}
	public KW_TBLPROPERTIES(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TBLPROPERTIES, 0); }
	public KW_UNSET(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_UNSET, 0); }
	public KW_SET(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SET, 0); }
	public properties(): PropertiesContext {
		return this.getRuleContext(0, PropertiesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_alterUnSetOrSetViewTblproperties; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAlterUnSetOrSetViewTblproperties) {
			listener.enterAlterUnSetOrSetViewTblproperties(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAlterUnSetOrSetViewTblproperties) {
			listener.exitAlterUnSetOrSetViewTblproperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterUnSetOrSetViewTblproperties) {
			return visitor.visitAlterUnSetOrSetViewTblproperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TruncateTableStatementContext extends ParserRuleContext {
	public KW_TRUNCATE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TRUNCATE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TABLE, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_truncateTableStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterTruncateTableStatement) {
			listener.enterTruncateTableStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitTruncateTableStatement) {
			listener.exitTruncateTableStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitTruncateTableStatement) {
			return visitor.visitTruncateTableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescribeStatementContext extends ParserRuleContext {
	public KW_DESCRIBE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DESCRIBE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DATABASE, 0); }
	public KW_FORMATTED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FORMATTED, 0); }
	public KW_EXTENDED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_EXTENDED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_describeStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDescribeStatement) {
			listener.enterDescribeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDescribeStatement) {
			listener.exitDescribeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDescribeStatement) {
			return visitor.visitDescribeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComputeStatementContext extends ParserRuleContext {
	public computeStats(): ComputeStatsContext | undefined {
		return this.tryGetRuleContext(0, ComputeStatsContext);
	}
	public computeIncrementalStats(): ComputeIncrementalStatsContext | undefined {
		return this.tryGetRuleContext(0, ComputeIncrementalStatsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_computeStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterComputeStatement) {
			listener.enterComputeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitComputeStatement) {
			listener.exitComputeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitComputeStatement) {
			return visitor.visitComputeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComputeStatsContext extends ParserRuleContext {
	public KW_COMPUTE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_COMPUTE, 0); }
	public KW_STATS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_STATS, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	public KW_TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TABLESAMPLE, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SYSTEM, 0); }
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.LPAREN);
		} else {
			return this.getToken(ImpalaSqlParser.LPAREN, i);
		}
	}
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.RPAREN);
		} else {
			return this.getToken(ImpalaSqlParser.RPAREN, i);
		}
	}
	public KW_REPEATABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_REPEATABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_computeStats; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterComputeStats) {
			listener.enterComputeStats(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitComputeStats) {
			listener.exitComputeStats(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitComputeStats) {
			return visitor.visitComputeStats(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComputeIncrementalStatsContext extends ParserRuleContext {
	public KW_COMPUTE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_COMPUTE, 0); }
	public KW_INCREMENTAL(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_INCREMENTAL, 0); }
	public KW_STATS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_STATS, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PARTITION, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_computeIncrementalStats; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterComputeIncrementalStats) {
			listener.enterComputeIncrementalStats(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitComputeIncrementalStats) {
			listener.exitComputeIncrementalStats(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitComputeIncrementalStats) {
			return visitor.visitComputeIncrementalStats(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropStatementContext extends ParserRuleContext {
	public dropRole(): DropRoleContext | undefined {
		return this.tryGetRuleContext(0, DropRoleContext);
	}
	public dropFunction(): DropFunctionContext | undefined {
		return this.tryGetRuleContext(0, DropFunctionContext);
	}
	public dropIncrementalStats(): DropIncrementalStatsContext | undefined {
		return this.tryGetRuleContext(0, DropIncrementalStatsContext);
	}
	public dropView(): DropViewContext | undefined {
		return this.tryGetRuleContext(0, DropViewContext);
	}
	public dropTable(): DropTableContext | undefined {
		return this.tryGetRuleContext(0, DropTableContext);
	}
	public dropSchema(): DropSchemaContext | undefined {
		return this.tryGetRuleContext(0, DropSchemaContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_dropStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDropStatement) {
			listener.enterDropStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDropStatement) {
			listener.exitDropStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDropStatement) {
			return visitor.visitDropStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropSchemaContext extends ParserRuleContext {
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DROP, 0); }
	public databaseNamePath(): DatabaseNamePathContext {
		return this.getRuleContext(0, DatabaseNamePathContext);
	}
	public KW_SCHEMA(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SCHEMA, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DATABASE, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	public KW_CASCADE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CASCADE, 0); }
	public KW_RESTRICT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_RESTRICT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_dropSchema; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDropSchema) {
			listener.enterDropSchema(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDropSchema) {
			listener.exitDropSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDropSchema) {
			return visitor.visitDropSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropViewContext extends ParserRuleContext {
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DROP, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_VIEW, 0); }
	public viewNamePath(): ViewNamePathContext {
		return this.getRuleContext(0, ViewNamePathContext);
	}
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_dropView; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDropView) {
			listener.enterDropView(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDropView) {
			listener.exitDropView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDropView) {
			return visitor.visitDropView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropTableContext extends ParserRuleContext {
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DROP, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	public KW_PURGE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PURGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_dropTable; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDropTable) {
			listener.enterDropTable(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDropTable) {
			listener.exitDropTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDropTable) {
			return visitor.visitDropTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropIncrementalStatsContext extends ParserRuleContext {
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DROP, 0); }
	public KW_STATS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_STATS, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_INCREMENTAL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_INCREMENTAL, 0); }
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PARTITION, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_dropIncrementalStats; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDropIncrementalStats) {
			listener.enterDropIncrementalStats(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDropIncrementalStats) {
			listener.exitDropIncrementalStats(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDropIncrementalStats) {
			return visitor.visitDropIncrementalStats(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropFunctionContext extends ParserRuleContext {
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DROP, 0); }
	public KW_FUNCTION(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_FUNCTION, 0); }
	public functionNamePath(): FunctionNamePathContext {
		return this.getRuleContext(0, FunctionNamePathContext);
	}
	public KW_AGGREGATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_AGGREGATE, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.RPAREN, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_dropFunction; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDropFunction) {
			listener.enterDropFunction(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDropFunction) {
			listener.exitDropFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDropFunction) {
			return visitor.visitDropFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropRoleContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DROP, 0); }
	public KW_ROLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ROLE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_dropRole; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDropRole) {
			listener.enterDropRole(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDropRole) {
			listener.exitDropRole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDropRole) {
			return visitor.visitDropRole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GrantStatementContext extends ParserRuleContext {
	public grantRole(): GrantRoleContext | undefined {
		return this.tryGetRuleContext(0, GrantRoleContext);
	}
	public grant(): GrantContext | undefined {
		return this.tryGetRuleContext(0, GrantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_grantStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterGrantStatement) {
			listener.enterGrantStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitGrantStatement) {
			listener.exitGrantStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitGrantStatement) {
			return visitor.visitGrantStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GrantRoleContext extends ParserRuleContext {
	public KW_GRANT(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_GRANT, 0); }
	public KW_ROLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ROLE, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public KW_TO(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TO, 0); }
	public KW_GROUP(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_GROUP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_grantRole; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterGrantRole) {
			listener.enterGrantRole(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitGrantRole) {
			listener.exitGrantRole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitGrantRole) {
			return visitor.visitGrantRole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GrantContext extends ParserRuleContext {
	public _grantee!: PrincipalContext;
	public KW_GRANT(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_GRANT, 0); }
	public privilege(): PrivilegeContext {
		return this.getRuleContext(0, PrivilegeContext);
	}
	public KW_ON(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ON, 0); }
	public objectType(): ObjectTypeContext {
		return this.getRuleContext(0, ObjectTypeContext);
	}
	public KW_TO(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TO, 0); }
	public principal(): PrincipalContext {
		return this.getRuleContext(0, PrincipalContext);
	}
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_grant; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterGrant) {
			listener.enterGrant(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitGrant) {
			listener.exitGrant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitGrant) {
			return visitor.visitGrant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RevokeStatementContext extends ParserRuleContext {
	public revokeRole(): RevokeRoleContext | undefined {
		return this.tryGetRuleContext(0, RevokeRoleContext);
	}
	public revoke(): RevokeContext | undefined {
		return this.tryGetRuleContext(0, RevokeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_revokeStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterRevokeStatement) {
			listener.enterRevokeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitRevokeStatement) {
			listener.exitRevokeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitRevokeStatement) {
			return visitor.visitRevokeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RevokeRoleContext extends ParserRuleContext {
	public KW_REVOKE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_REVOKE, 0); }
	public KW_ROLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ROLE, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public KW_FROM(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_FROM, 0); }
	public KW_GROUP(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_GROUP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_revokeRole; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterRevokeRole) {
			listener.enterRevokeRole(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitRevokeRole) {
			listener.exitRevokeRole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitRevokeRole) {
			return visitor.visitRevokeRole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RevokeContext extends ParserRuleContext {
	public _grantee!: PrincipalContext;
	public KW_REVOKE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_REVOKE, 0); }
	public privilege(): PrivilegeContext {
		return this.getRuleContext(0, PrivilegeContext);
	}
	public KW_ON(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ON, 0); }
	public objectType(): ObjectTypeContext {
		return this.getRuleContext(0, ObjectTypeContext);
	}
	public KW_FROM(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_FROM, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_GRANT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_GRANT, 0); }
	public KW_OPTION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_OPTION, 0); }
	public KW_FOR(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FOR, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public principal(): PrincipalContext | undefined {
		return this.tryGetRuleContext(0, PrincipalContext);
	}
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ROLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_revoke; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterRevoke) {
			listener.enterRevoke(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitRevoke) {
			listener.exitRevoke(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitRevoke) {
			return visitor.visitRevoke(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertStatementContext extends ParserRuleContext {
	public KW_INSERT(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_INSERT, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public KW_INTO(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_INTO, 0); }
	public KW_OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_OVERWRITE, 0); }
	public with(): WithContext | undefined {
		return this.tryGetRuleContext(0, WithContext);
	}
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TABLE, 0); }
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PARTITION, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_insertStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterInsertStatement) {
			listener.enterInsertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitInsertStatement) {
			listener.exitInsertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitInsertStatement) {
			return visitor.visitInsertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeleteStatementContext extends ParserRuleContext {
	public delete(): DeleteContext | undefined {
		return this.tryGetRuleContext(0, DeleteContext);
	}
	public deleteTableRef(): DeleteTableRefContext | undefined {
		return this.tryGetRuleContext(0, DeleteTableRefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_deleteStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDeleteStatement) {
			listener.enterDeleteStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDeleteStatement) {
			listener.exitDeleteStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDeleteStatement) {
			return visitor.visitDeleteStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeleteContext extends ParserRuleContext {
	public KW_DELETE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DELETE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FROM, 0); }
	public KW_WHERE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_delete; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDelete) {
			listener.enterDelete(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDelete) {
			listener.exitDelete(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDelete) {
			return visitor.visitDelete(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeleteTableRefContext extends ParserRuleContext {
	public KW_DELETE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DELETE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_FROM(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_FROM, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public relation(): RelationContext[];
	public relation(i: number): RelationContext;
	public relation(i?: number): RelationContext | RelationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationContext);
		} else {
			return this.getRuleContext(i, RelationContext);
		}
	}
	public KW_WHERE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_AS, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_deleteTableRef; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDeleteTableRef) {
			listener.enterDeleteTableRef(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDeleteTableRef) {
			listener.exitDeleteTableRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDeleteTableRef) {
			return visitor.visitDeleteTableRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpdateStatementContext extends ParserRuleContext {
	public KW_UPDATE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_UPDATE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SET, 0); }
	public assignmentList(): AssignmentListContext {
		return this.getRuleContext(0, AssignmentListContext);
	}
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FROM, 0); }
	public relation(): RelationContext[];
	public relation(i: number): RelationContext;
	public relation(i?: number): RelationContext | RelationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationContext);
		} else {
			return this.getRuleContext(i, RelationContext);
		}
	}
	public KW_WHERE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_updateStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterUpdateStatement) {
			listener.enterUpdateStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitUpdateStatement) {
			listener.exitUpdateStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitUpdateStatement) {
			return visitor.visitUpdateStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpsertStatementContext extends ParserRuleContext {
	public KW_UPSERT(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_UPSERT, 0); }
	public KW_INTO(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_INTO, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TABLE, 0); }
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_upsertStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterUpsertStatement) {
			listener.enterUpsertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitUpsertStatement) {
			listener.exitUpsertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitUpsertStatement) {
			return visitor.visitUpsertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowStatementContext extends ParserRuleContext {
	public showRoles(): ShowRolesContext | undefined {
		return this.tryGetRuleContext(0, ShowRolesContext);
	}
	public showRoleGrant(): ShowRoleGrantContext | undefined {
		return this.tryGetRuleContext(0, ShowRoleGrantContext);
	}
	public showGrants(): ShowGrantsContext | undefined {
		return this.tryGetRuleContext(0, ShowGrantsContext);
	}
	public showFiles(): ShowFilesContext | undefined {
		return this.tryGetRuleContext(0, ShowFilesContext);
	}
	public showPartitions(): ShowPartitionsContext | undefined {
		return this.tryGetRuleContext(0, ShowPartitionsContext);
	}
	public showColumnStats(): ShowColumnStatsContext | undefined {
		return this.tryGetRuleContext(0, ShowColumnStatsContext);
	}
	public showTableStats(): ShowTableStatsContext | undefined {
		return this.tryGetRuleContext(0, ShowTableStatsContext);
	}
	public showCreateView(): ShowCreateViewContext | undefined {
		return this.tryGetRuleContext(0, ShowCreateViewContext);
	}
	public showCreateTable(): ShowCreateTableContext | undefined {
		return this.tryGetRuleContext(0, ShowCreateTableContext);
	}
	public showFunctions(): ShowFunctionsContext | undefined {
		return this.tryGetRuleContext(0, ShowFunctionsContext);
	}
	public showTables(): ShowTablesContext | undefined {
		return this.tryGetRuleContext(0, ShowTablesContext);
	}
	public showSchemas(): ShowSchemasContext | undefined {
		return this.tryGetRuleContext(0, ShowSchemasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_showStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowStatement) {
			listener.enterShowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowStatement) {
			listener.exitShowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowStatement) {
			return visitor.visitShowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowSchemasContext extends ParserRuleContext {
	public _pattern!: StringLiteralContext;
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_SCHEMAS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SCHEMAS, 0); }
	public KW_DATABASES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DATABASES, 0); }
	public stringLiteral(): StringLiteralContext[];
	public stringLiteral(i: number): StringLiteralContext;
	public stringLiteral(i?: number): StringLiteralContext | StringLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringLiteralContext);
		} else {
			return this.getRuleContext(i, StringLiteralContext);
		}
	}
	public KW_LIKE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LIKE, 0); }
	public BITWISEOR(): TerminalNode[];
	public BITWISEOR(i: number): TerminalNode;
	public BITWISEOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.BITWISEOR);
		} else {
			return this.getToken(ImpalaSqlParser.BITWISEOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_showSchemas; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowSchemas) {
			listener.enterShowSchemas(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowSchemas) {
			listener.exitShowSchemas(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowSchemas) {
			return visitor.visitShowSchemas(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowTablesContext extends ParserRuleContext {
	public _pattern!: StringLiteralContext;
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_TABLES(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLES, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_IN, 0); }
	public tableNamePath(): TableNamePathContext | undefined {
		return this.tryGetRuleContext(0, TableNamePathContext);
	}
	public stringLiteral(): StringLiteralContext[];
	public stringLiteral(i: number): StringLiteralContext;
	public stringLiteral(i?: number): StringLiteralContext | StringLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringLiteralContext);
		} else {
			return this.getRuleContext(i, StringLiteralContext);
		}
	}
	public KW_LIKE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LIKE, 0); }
	public BITWISEOR(): TerminalNode[];
	public BITWISEOR(i: number): TerminalNode;
	public BITWISEOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.BITWISEOR);
		} else {
			return this.getToken(ImpalaSqlParser.BITWISEOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_showTables; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowTables) {
			listener.enterShowTables(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowTables) {
			listener.exitShowTables(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowTables) {
			return visitor.visitShowTables(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowFunctionsContext extends ParserRuleContext {
	public _pattern!: StringLiteralContext;
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_FUNCTIONS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_FUNCTIONS, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_IN, 0); }
	public databaseNamePath(): DatabaseNamePathContext | undefined {
		return this.tryGetRuleContext(0, DatabaseNamePathContext);
	}
	public KW_AGGREGATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_AGGREGATE, 0); }
	public KW_ANALYTIC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ANALYTIC, 0); }
	public stringLiteral(): StringLiteralContext[];
	public stringLiteral(i: number): StringLiteralContext;
	public stringLiteral(i?: number): StringLiteralContext | StringLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringLiteralContext);
		} else {
			return this.getRuleContext(i, StringLiteralContext);
		}
	}
	public KW_LIKE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LIKE, 0); }
	public BITWISEOR(): TerminalNode[];
	public BITWISEOR(i: number): TerminalNode;
	public BITWISEOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.BITWISEOR);
		} else {
			return this.getToken(ImpalaSqlParser.BITWISEOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_showFunctions; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowFunctions) {
			listener.enterShowFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowFunctions) {
			listener.exitShowFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowFunctions) {
			return visitor.visitShowFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowCreateTableContext extends ParserRuleContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_showCreateTable; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowCreateTable) {
			listener.enterShowCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowCreateTable) {
			listener.exitShowCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowCreateTable) {
			return visitor.visitShowCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowCreateViewContext extends ParserRuleContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CREATE, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_VIEW, 0); }
	public viewNamePath(): ViewNamePathContext {
		return this.getRuleContext(0, ViewNamePathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_showCreateView; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowCreateView) {
			listener.enterShowCreateView(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowCreateView) {
			listener.exitShowCreateView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowCreateView) {
			return visitor.visitShowCreateView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowTableStatsContext extends ParserRuleContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public KW_STATS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_STATS, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_showTableStats; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowTableStats) {
			listener.enterShowTableStats(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowTableStats) {
			listener.exitShowTableStats(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowTableStats) {
			return visitor.visitShowTableStats(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowColumnStatsContext extends ParserRuleContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_COLUMN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_COLUMN, 0); }
	public KW_STATS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_STATS, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_showColumnStats; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowColumnStats) {
			listener.enterShowColumnStats(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowColumnStats) {
			listener.exitShowColumnStats(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowColumnStats) {
			return visitor.visitShowColumnStats(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowPartitionsContext extends ParserRuleContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_PARTITIONS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_PARTITIONS, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_RANGE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_RANGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_showPartitions; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowPartitions) {
			listener.enterShowPartitions(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowPartitions) {
			listener.exitShowPartitions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowPartitions) {
			return visitor.visitShowPartitions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowFilesContext extends ParserRuleContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_FILES(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_FILES, 0); }
	public KW_IN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_IN, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PARTITION, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.RPAREN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_showFiles; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowFiles) {
			listener.enterShowFiles(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowFiles) {
			listener.exitShowFiles(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowFiles) {
			return visitor.visitShowFiles(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowRolesContext extends ParserRuleContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_ROLES(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ROLES, 0); }
	public KW_CURRENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CURRENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_showRoles; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowRoles) {
			listener.enterShowRoles(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowRoles) {
			listener.exitShowRoles(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowRoles) {
			return visitor.visitShowRoles(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowRoleGrantContext extends ParserRuleContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_ROLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ROLE, 0); }
	public KW_GRANT(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_GRANT, 0); }
	public KW_GROUP(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_GROUP, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_showRoleGrant; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowRoleGrant) {
			listener.enterShowRoleGrant(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowRoleGrant) {
			listener.exitShowRoleGrant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowRoleGrant) {
			return visitor.visitShowRoleGrant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowGrantsContext extends ParserRuleContext {
	public showDatabaseGrant(): ShowDatabaseGrantContext | undefined {
		return this.tryGetRuleContext(0, ShowDatabaseGrantContext);
	}
	public showTableGrant(): ShowTableGrantContext | undefined {
		return this.tryGetRuleContext(0, ShowTableGrantContext);
	}
	public showColumnGrant(): ShowColumnGrantContext | undefined {
		return this.tryGetRuleContext(0, ShowColumnGrantContext);
	}
	public KW_SHOW(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_GRANT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_GRANT, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_USER, 0); }
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ROLE, 0); }
	public KW_GROUP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_GROUP, 0); }
	public KW_ON(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ON, 0); }
	public KW_SERVER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SERVER, 0); }
	public KW_URI(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_URI, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_showGrants; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowGrants) {
			listener.enterShowGrants(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowGrants) {
			listener.exitShowGrants(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowGrants) {
			return visitor.visitShowGrants(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowDatabaseGrantContext extends ParserRuleContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_GRANT(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_GRANT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_USER, 0); }
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ROLE, 0); }
	public KW_GROUP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_GROUP, 0); }
	public KW_ON(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ON, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DATABASE, 0); }
	public databaseNamePath(): DatabaseNamePathContext | undefined {
		return this.tryGetRuleContext(0, DatabaseNamePathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_showDatabaseGrant; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowDatabaseGrant) {
			listener.enterShowDatabaseGrant(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowDatabaseGrant) {
			listener.exitShowDatabaseGrant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowDatabaseGrant) {
			return visitor.visitShowDatabaseGrant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowTableGrantContext extends ParserRuleContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_GRANT(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_GRANT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_USER, 0); }
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ROLE, 0); }
	public KW_GROUP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_GROUP, 0); }
	public KW_ON(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ON, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNamePath(): TableNamePathContext | undefined {
		return this.tryGetRuleContext(0, TableNamePathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_showTableGrant; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowTableGrant) {
			listener.enterShowTableGrant(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowTableGrant) {
			listener.exitShowTableGrant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowTableGrant) {
			return visitor.visitShowTableGrant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowColumnGrantContext extends ParserRuleContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_GRANT(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_GRANT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_USER, 0); }
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ROLE, 0); }
	public KW_GROUP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_GROUP, 0); }
	public KW_ON(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ON, 0); }
	public KW_COLUMN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_COLUMN, 0); }
	public columnNamePath(): ColumnNamePathContext | undefined {
		return this.tryGetRuleContext(0, ColumnNamePathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_showColumnGrant; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowColumnGrant) {
			listener.enterShowColumnGrant(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowColumnGrant) {
			listener.exitShowColumnGrant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowColumnGrant) {
			return visitor.visitShowColumnGrant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddCommentStatementContext extends ParserRuleContext {
	public addDatabaseComments(): AddDatabaseCommentsContext | undefined {
		return this.tryGetRuleContext(0, AddDatabaseCommentsContext);
	}
	public addTableComments(): AddTableCommentsContext | undefined {
		return this.tryGetRuleContext(0, AddTableCommentsContext);
	}
	public addColumnComments(): AddColumnCommentsContext | undefined {
		return this.tryGetRuleContext(0, AddColumnCommentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_addCommentStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAddCommentStatement) {
			listener.enterAddCommentStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAddCommentStatement) {
			listener.exitAddCommentStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAddCommentStatement) {
			return visitor.visitAddCommentStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddDatabaseCommentsContext extends ParserRuleContext {
	public KW_COMMENT(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_COMMENT, 0); }
	public KW_ON(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ON, 0); }
	public KW_DATABASE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DATABASE, 0); }
	public databaseNamePath(): DatabaseNamePathContext {
		return this.getRuleContext(0, DatabaseNamePathContext);
	}
	public KW_IS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_IS, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_addDatabaseComments; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAddDatabaseComments) {
			listener.enterAddDatabaseComments(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAddDatabaseComments) {
			listener.exitAddDatabaseComments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAddDatabaseComments) {
			return visitor.visitAddDatabaseComments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddTableCommentsContext extends ParserRuleContext {
	public KW_COMMENT(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_COMMENT, 0); }
	public KW_ON(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ON, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_IS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_IS, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_addTableComments; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAddTableComments) {
			listener.enterAddTableComments(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAddTableComments) {
			listener.exitAddTableComments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAddTableComments) {
			return visitor.visitAddTableComments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddColumnCommentsContext extends ParserRuleContext {
	public KW_COMMENT(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_COMMENT, 0); }
	public KW_ON(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ON, 0); }
	public KW_COLUMN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_COLUMN, 0); }
	public columnNamePath(): ColumnNamePathContext {
		return this.getRuleContext(0, ColumnNamePathContext);
	}
	public KW_IS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_IS, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_addColumnComments; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAddColumnComments) {
			listener.enterAddColumnComments(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAddColumnComments) {
			listener.exitAddColumnComments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAddColumnComments) {
			return visitor.visitAddColumnComments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplainStatementContext extends ParserRuleContext {
	public KW_EXPLAIN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_EXPLAIN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_explainStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterExplainStatement) {
			listener.enterExplainStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitExplainStatement) {
			listener.exitExplainStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitExplainStatement) {
			return visitor.visitExplainStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetStatementContext extends ParserRuleContext {
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SET, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ALL, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.EQ, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_setStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSetStatement) {
			listener.enterSetStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSetStatement) {
			listener.exitSetStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSetStatement) {
			return visitor.visitSetStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShutdownStatementContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(ImpalaSqlParser.COLON, 0); }
	public KW_SHUTDOWN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SHUTDOWN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_shutdownStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShutdownStatement) {
			listener.enterShutdownStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShutdownStatement) {
			listener.exitShutdownStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShutdownStatement) {
			return visitor.visitShutdownStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InvalidateMetaStatementContext extends ParserRuleContext {
	public KW_INVALIDATE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_INVALIDATE, 0); }
	public KW_METADATA(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_METADATA, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_invalidateMetaStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterInvalidateMetaStatement) {
			listener.enterInvalidateMetaStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitInvalidateMetaStatement) {
			listener.exitInvalidateMetaStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitInvalidateMetaStatement) {
			return visitor.visitInvalidateMetaStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoadDataStatementContext extends ParserRuleContext {
	public KW_LOAD(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_LOAD, 0); }
	public KW_DATA(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DATA, 0); }
	public KW_INPATH(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_INPATH, 0); }
	public STRING(): TerminalNode { return this.getToken(ImpalaSqlParser.STRING, 0); }
	public KW_INTO(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_INTO, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_OVERWRITE, 0); }
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PARTITION, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.RPAREN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_loadDataStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterLoadDataStatement) {
			listener.enterLoadDataStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitLoadDataStatement) {
			listener.exitLoadDataStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitLoadDataStatement) {
			return visitor.visitLoadDataStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RefreshStatementContext extends ParserRuleContext {
	public refreshMeta(): RefreshMetaContext | undefined {
		return this.tryGetRuleContext(0, RefreshMetaContext);
	}
	public refreshAuth(): RefreshAuthContext | undefined {
		return this.tryGetRuleContext(0, RefreshAuthContext);
	}
	public refreshFunction(): RefreshFunctionContext | undefined {
		return this.tryGetRuleContext(0, RefreshFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_refreshStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterRefreshStatement) {
			listener.enterRefreshStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitRefreshStatement) {
			listener.exitRefreshStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitRefreshStatement) {
			return visitor.visitRefreshStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RefreshMetaContext extends ParserRuleContext {
	public KW_REFRESH(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_REFRESH, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PARTITION, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_refreshMeta; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterRefreshMeta) {
			listener.enterRefreshMeta(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitRefreshMeta) {
			listener.exitRefreshMeta(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitRefreshMeta) {
			return visitor.visitRefreshMeta(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RefreshAuthContext extends ParserRuleContext {
	public KW_REFRESH(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_REFRESH, 0); }
	public KW_AUTHORIZATION(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_AUTHORIZATION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_refreshAuth; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterRefreshAuth) {
			listener.enterRefreshAuth(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitRefreshAuth) {
			listener.exitRefreshAuth(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitRefreshAuth) {
			return visitor.visitRefreshAuth(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RefreshFunctionContext extends ParserRuleContext {
	public KW_REFRESH(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_REFRESH, 0); }
	public KW_FUNCTIONS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_FUNCTIONS, 0); }
	public functionNamePath(): FunctionNamePathContext {
		return this.getRuleContext(0, FunctionNamePathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_refreshFunction; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterRefreshFunction) {
			listener.enterRefreshFunction(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitRefreshFunction) {
			listener.exitRefreshFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitRefreshFunction) {
			return visitor.visitRefreshFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfExistsContext extends ParserRuleContext {
	public KW_IF(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_IF, 0); }
	public KW_EXISTS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_EXISTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_ifExists; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterIfExists) {
			listener.enterIfExists(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitIfExists) {
			listener.exitIfExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitIfExists) {
			return visitor.visitIfExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfNotExistsContext extends ParserRuleContext {
	public KW_IF(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_IF, 0); }
	public KW_NOT(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_NOT, 0); }
	public KW_EXISTS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_EXISTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_ifNotExists; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterIfNotExists) {
			listener.enterIfNotExists(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitIfNotExists) {
			listener.exitIfNotExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitIfNotExists) {
			return visitor.visitIfNotExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableNameCreateContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_tableNameCreate; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterTableNameCreate) {
			listener.enterTableNameCreate(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitTableNameCreate) {
			listener.exitTableNameCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitTableNameCreate) {
			return visitor.visitTableNameCreate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatabaseNameCreateContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_databaseNameCreate; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDatabaseNameCreate) {
			listener.enterDatabaseNameCreate(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDatabaseNameCreate) {
			listener.exitDatabaseNameCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDatabaseNameCreate) {
			return visitor.visitDatabaseNameCreate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ViewNameCreateContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_viewNameCreate; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterViewNameCreate) {
			listener.enterViewNameCreate(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitViewNameCreate) {
			listener.exitViewNameCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitViewNameCreate) {
			return visitor.visitViewNameCreate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionNameCreateContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_functionNameCreate; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterFunctionNameCreate) {
			listener.enterFunctionNameCreate(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitFunctionNameCreate) {
			listener.exitFunctionNameCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitFunctionNameCreate) {
			return visitor.visitFunctionNameCreate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnNamePathCreateContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_columnNamePathCreate; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterColumnNamePathCreate) {
			listener.enterColumnNamePathCreate(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitColumnNamePathCreate) {
			listener.exitColumnNamePathCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnNamePathCreate) {
			return visitor.visitColumnNamePathCreate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatabaseNamePathContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_databaseNamePath; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDatabaseNamePath) {
			listener.enterDatabaseNamePath(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDatabaseNamePath) {
			listener.exitDatabaseNamePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDatabaseNamePath) {
			return visitor.visitDatabaseNamePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableNamePathContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.DOT);
		} else {
			return this.getToken(ImpalaSqlParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_tableNamePath; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterTableNamePath) {
			listener.enterTableNamePath(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitTableNamePath) {
			listener.exitTableNamePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitTableNamePath) {
			return visitor.visitTableNamePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ViewNamePathContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.DOT);
		} else {
			return this.getToken(ImpalaSqlParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_viewNamePath; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterViewNamePath) {
			listener.enterViewNamePath(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitViewNamePath) {
			listener.exitViewNamePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitViewNamePath) {
			return visitor.visitViewNamePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionNamePathContext extends ParserRuleContext {
	public reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext | undefined {
		return this.tryGetRuleContext(0, ReservedKeywordsUsedAsFuncNameContext);
	}
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_functionNamePath; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterFunctionNamePath) {
			listener.enterFunctionNamePath(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitFunctionNamePath) {
			listener.exitFunctionNamePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitFunctionNamePath) {
			return visitor.visitFunctionNamePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnNamePathContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_columnNamePath; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterColumnNamePath) {
			listener.enterColumnNamePath(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitColumnNamePath) {
			listener.exitColumnNamePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnNamePath) {
			return visitor.visitColumnNamePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableOrViewPathContext extends ParserRuleContext {
	public tableNamePath(): TableNamePathContext | undefined {
		return this.tryGetRuleContext(0, TableNamePathContext);
	}
	public viewNamePath(): ViewNamePathContext | undefined {
		return this.tryGetRuleContext(0, ViewNamePathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_tableOrViewPath; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterTableOrViewPath) {
			listener.enterTableOrViewPath(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitTableOrViewPath) {
			listener.exitTableOrViewPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitTableOrViewPath) {
			return visitor.visitTableOrViewPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateCommonItemContext extends ParserRuleContext {
	public _comment!: StringLiteralContext;
	public _serdProp!: PropertiesContext;
	public _location!: StringLiteralContext;
	public _cacheName!: QualifiedNameContext;
	public _tblProp!: PropertiesContext;
	public KW_SORT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SORT, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_BY, 0); }
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_COMMENT, 0); }
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ROW, 0); }
	public KW_FORMAT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FORMAT, 0); }
	public rowFormat(): RowFormatContext | undefined {
		return this.tryGetRuleContext(0, RowFormatContext);
	}
	public KW_WITH(): TerminalNode[];
	public KW_WITH(i: number): TerminalNode;
	public KW_WITH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.KW_WITH);
		} else {
			return this.getToken(ImpalaSqlParser.KW_WITH, i);
		}
	}
	public KW_SERDEPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SERDEPROPERTIES, 0); }
	public KW_STORED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_STORED, 0); }
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_AS, 0); }
	public fileFormat(): FileFormatContext | undefined {
		return this.tryGetRuleContext(0, FileFormatContext);
	}
	public KW_LOCATION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LOCATION, 0); }
	public KW_CACHED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CACHED, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_IN, 0); }
	public KW_UNCACHED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_UNCACHED, 0); }
	public KW_TBLPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TBLPROPERTIES, 0); }
	public stringLiteral(): StringLiteralContext[];
	public stringLiteral(i: number): StringLiteralContext;
	public stringLiteral(i?: number): StringLiteralContext | StringLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringLiteralContext);
		} else {
			return this.getRuleContext(i, StringLiteralContext);
		}
	}
	public properties(): PropertiesContext[];
	public properties(i: number): PropertiesContext;
	public properties(i?: number): PropertiesContext | PropertiesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertiesContext);
		} else {
			return this.getRuleContext(i, PropertiesContext);
		}
	}
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public KW_REPLICATION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_REPLICATION, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.EQ, 0); }
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.INTEGER_VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_createCommonItem; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterCreateCommonItem) {
			listener.enterCreateCommonItem(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitCreateCommonItem) {
			listener.exitCreateCommonItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateCommonItem) {
			return visitor.visitCreateCommonItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentListContext extends ParserRuleContext {
	public assignmentItem(): AssignmentItemContext[];
	public assignmentItem(i: number): AssignmentItemContext;
	public assignmentItem(i?: number): AssignmentItemContext | AssignmentItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentItemContext);
		} else {
			return this.getRuleContext(i, AssignmentItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_assignmentList; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAssignmentList) {
			listener.enterAssignmentList(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAssignmentList) {
			listener.exitAssignmentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAssignmentList) {
			return visitor.visitAssignmentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentItemContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public EQ(): TerminalNode { return this.getToken(ImpalaSqlParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_assignmentItem; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAssignmentItem) {
			listener.enterAssignmentItem(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAssignmentItem) {
			listener.exitAssignmentItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAssignmentItem) {
			return visitor.visitAssignmentItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ViewColumnsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public columnNamePath(): ColumnNamePathContext {
		return this.getRuleContext(0, ColumnNamePathContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	public KW_COMMENT(): TerminalNode[];
	public KW_COMMENT(i: number): TerminalNode;
	public KW_COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.KW_COMMENT);
		} else {
			return this.getToken(ImpalaSqlParser.KW_COMMENT, i);
		}
	}
	public stringLiteral(): StringLiteralContext[];
	public stringLiteral(i: number): StringLiteralContext;
	public stringLiteral(i?: number): StringLiteralContext | StringLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringLiteralContext);
		} else {
			return this.getRuleContext(i, StringLiteralContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_viewColumns; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterViewColumns) {
			listener.enterViewColumns(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitViewColumns) {
			listener.exitViewColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitViewColumns) {
			return visitor.visitViewColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryStatementContext extends ParserRuleContext {
	public queryNoWith(): QueryNoWithContext {
		return this.getRuleContext(0, QueryNoWithContext);
	}
	public with(): WithContext | undefined {
		return this.tryGetRuleContext(0, WithContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_queryStatement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterQueryStatement) {
			listener.enterQueryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitQueryStatement) {
			listener.exitQueryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitQueryStatement) {
			return visitor.visitQueryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithContext extends ParserRuleContext {
	public KW_WITH(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_WITH, 0); }
	public namedQuery(): NamedQueryContext[];
	public namedQuery(i: number): NamedQueryContext;
	public namedQuery(i?: number): NamedQueryContext | NamedQueryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedQueryContext);
		} else {
			return this.getRuleContext(i, NamedQueryContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_with; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterWith) {
			listener.enterWith(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitWith) {
			listener.exitWith(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitWith) {
			return visitor.visitWith(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstraintSpecificationContext extends ParserRuleContext {
	public KW_PRIMARY(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_PRIMARY, 0); }
	public KW_KEY(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_KEY, 0); }
	public columnAliases(): ColumnAliasesContext {
		return this.getRuleContext(0, ColumnAliasesContext);
	}
	public KW_DISABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DISABLE, 0); }
	public KW_NOVALIDATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NOVALIDATE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	public KW_RELY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_RELY, 0); }
	public foreignKeySpecification(): ForeignKeySpecificationContext[];
	public foreignKeySpecification(i: number): ForeignKeySpecificationContext;
	public foreignKeySpecification(i?: number): ForeignKeySpecificationContext | ForeignKeySpecificationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ForeignKeySpecificationContext);
		} else {
			return this.getRuleContext(i, ForeignKeySpecificationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_constraintSpecification; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterConstraintSpecification) {
			listener.enterConstraintSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitConstraintSpecification) {
			listener.exitConstraintSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitConstraintSpecification) {
			return visitor.visitConstraintSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForeignKeySpecificationContext extends ParserRuleContext {
	public KW_FOREIGN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_FOREIGN, 0); }
	public KW_KEY(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_KEY, 0); }
	public columnAliases(): ColumnAliasesContext[];
	public columnAliases(i: number): ColumnAliasesContext;
	public columnAliases(i?: number): ColumnAliasesContext | ColumnAliasesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnAliasesContext);
		} else {
			return this.getRuleContext(i, ColumnAliasesContext);
		}
	}
	public KW_REFERENCES(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_REFERENCES, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	public KW_DISABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DISABLE, 0); }
	public KW_NOVALIDATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NOVALIDATE, 0); }
	public KW_RELY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_RELY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_foreignKeySpecification; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterForeignKeySpecification) {
			listener.enterForeignKeySpecification(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitForeignKeySpecification) {
			listener.exitForeignKeySpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitForeignKeySpecification) {
			return visitor.visitForeignKeySpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnDefinitionContext extends ParserRuleContext {
	public columnNamePathCreate(): ColumnNamePathCreateContext {
		return this.getRuleContext(0, ColumnNamePathCreateContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_COMMENT, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_columnDefinition; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterColumnDefinition) {
			listener.enterColumnDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitColumnDefinition) {
			listener.exitColumnDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnDefinition) {
			return visitor.visitColumnDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KuduTableElementContext extends ParserRuleContext {
	public kuduColumnDefinition(): KuduColumnDefinitionContext {
		return this.getRuleContext(0, KuduColumnDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_kuduTableElement; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterKuduTableElement) {
			listener.enterKuduTableElement(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitKuduTableElement) {
			listener.exitKuduTableElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitKuduTableElement) {
			return visitor.visitKuduTableElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KuduColumnDefinitionContext extends ParserRuleContext {
	public columnNamePathCreate(): ColumnNamePathCreateContext {
		return this.getRuleContext(0, ColumnNamePathCreateContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public kuduAttributes(): KuduAttributesContext[];
	public kuduAttributes(i: number): KuduAttributesContext;
	public kuduAttributes(i?: number): KuduAttributesContext | KuduAttributesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KuduAttributesContext);
		} else {
			return this.getRuleContext(i, KuduAttributesContext);
		}
	}
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_COMMENT, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public KW_PRIMARY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PRIMARY, 0); }
	public KW_KEY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_KEY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_kuduColumnDefinition; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterKuduColumnDefinition) {
			listener.enterKuduColumnDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitKuduColumnDefinition) {
			listener.exitKuduColumnDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitKuduColumnDefinition) {
			return visitor.visitKuduColumnDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnSpecWithKuduContext extends ParserRuleContext {
	public columnNamePath(): ColumnNamePathContext {
		return this.getRuleContext(0, ColumnNamePathContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_COMMENT, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public kuduAttributes(): KuduAttributesContext[];
	public kuduAttributes(i: number): KuduAttributesContext;
	public kuduAttributes(i?: number): KuduAttributesContext | KuduAttributesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KuduAttributesContext);
		} else {
			return this.getRuleContext(i, KuduAttributesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_columnSpecWithKudu; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterColumnSpecWithKudu) {
			listener.enterColumnSpecWithKudu(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitColumnSpecWithKudu) {
			listener.exitColumnSpecWithKudu(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnSpecWithKudu) {
			return visitor.visitColumnSpecWithKudu(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateColumnSpecWithKuduContext extends ParserRuleContext {
	public columnNamePathCreate(): ColumnNamePathCreateContext {
		return this.getRuleContext(0, ColumnNamePathCreateContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_COMMENT, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public kuduAttributes(): KuduAttributesContext[];
	public kuduAttributes(i: number): KuduAttributesContext;
	public kuduAttributes(i?: number): KuduAttributesContext | KuduAttributesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KuduAttributesContext);
		} else {
			return this.getRuleContext(i, KuduAttributesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_createColumnSpecWithKudu; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterCreateColumnSpecWithKudu) {
			listener.enterCreateColumnSpecWithKudu(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitCreateColumnSpecWithKudu) {
			listener.exitCreateColumnSpecWithKudu(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateColumnSpecWithKudu) {
			return visitor.visitCreateColumnSpecWithKudu(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KuduAttributesContext extends ParserRuleContext {
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NULL, 0); }
	public kuduStorageAttr(): KuduStorageAttrContext | undefined {
		return this.tryGetRuleContext(0, KuduStorageAttrContext);
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_kuduAttributes; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterKuduAttributes) {
			listener.enterKuduAttributes(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitKuduAttributes) {
			listener.exitKuduAttributes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitKuduAttributes) {
			return visitor.visitKuduAttributes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KuduStorageAttrContext extends ParserRuleContext {
	public KW_ENCODING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ENCODING, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public KW_COMPRESSION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_COMPRESSION, 0); }
	public KW_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DEFAULT, 0); }
	public KW_BLOCK_SIZE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_BLOCK_SIZE, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_kuduStorageAttr; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterKuduStorageAttr) {
			listener.enterKuduStorageAttr(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitKuduStorageAttr) {
			listener.exitKuduStorageAttr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitKuduStorageAttr) {
			return visitor.visitKuduStorageAttr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatsKeyContext extends ParserRuleContext {
	public STATS_NUMDVS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.STATS_NUMDVS, 0); }
	public STATS_NUMNULLS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.STATS_NUMNULLS, 0); }
	public STATS_AVGSIZE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.STATS_AVGSIZE, 0); }
	public STATS_MAXSIZE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.STATS_MAXSIZE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_statsKey; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterStatsKey) {
			listener.enterStatsKey(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitStatsKey) {
			listener.exitStatsKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitStatsKey) {
			return visitor.visitStatsKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FileFormatContext extends ParserRuleContext {
	public KW_TEXTFILE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TEXTFILE, 0); }
	public KW_PARQUET(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PARQUET, 0); }
	public KW_ORC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ORC, 0); }
	public KW_AVRO(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_AVRO, 0); }
	public KW_SEQUENCEFILE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SEQUENCEFILE, 0); }
	public KW_RCFILE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_RCFILE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_fileFormat; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterFileFormat) {
			listener.enterFileFormat(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitFileFormat) {
			listener.exitFileFormat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitFileFormat) {
			return visitor.visitFileFormat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KuduPartitionClauseContext extends ParserRuleContext {
	public hashClause(): HashClauseContext[];
	public hashClause(i: number): HashClauseContext;
	public hashClause(i?: number): HashClauseContext | HashClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HashClauseContext);
		} else {
			return this.getRuleContext(i, HashClauseContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	public rangeClause(): RangeClauseContext | undefined {
		return this.tryGetRuleContext(0, RangeClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_kuduPartitionClause; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterKuduPartitionClause) {
			listener.enterKuduPartitionClause(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitKuduPartitionClause) {
			listener.exitKuduPartitionClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitKuduPartitionClause) {
			return visitor.visitKuduPartitionClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HashClauseContext extends ParserRuleContext {
	public KW_HASH(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_HASH, 0); }
	public KW_PARTITIONS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_PARTITIONS, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_hashClause; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterHashClause) {
			listener.enterHashClause(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitHashClause) {
			listener.exitHashClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitHashClause) {
			return visitor.visitHashClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RangeClauseContext extends ParserRuleContext {
	public KW_RANGE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_RANGE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	public KW_PARTITION(): TerminalNode[];
	public KW_PARTITION(i: number): TerminalNode;
	public KW_PARTITION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.KW_PARTITION);
		} else {
			return this.getToken(ImpalaSqlParser.KW_PARTITION, i);
		}
	}
	public kuduPartitionSpec(): KuduPartitionSpecContext[];
	public kuduPartitionSpec(i: number): KuduPartitionSpecContext;
	public kuduPartitionSpec(i?: number): KuduPartitionSpecContext | KuduPartitionSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KuduPartitionSpecContext);
		} else {
			return this.getRuleContext(i, KuduPartitionSpecContext);
		}
	}
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_rangeClause; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterRangeClause) {
			listener.enterRangeClause(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitRangeClause) {
			listener.exitRangeClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitRangeClause) {
			return visitor.visitRangeClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KuduPartitionSpecContext extends ParserRuleContext {
	public KW_VALUE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_VALUE, 0); }
	public partitionCol(): PartitionColContext | undefined {
		return this.tryGetRuleContext(0, PartitionColContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public KW_VALUES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_VALUES, 0); }
	public rangeOperator(): RangeOperatorContext[];
	public rangeOperator(i: number): RangeOperatorContext;
	public rangeOperator(i?: number): RangeOperatorContext | RangeOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RangeOperatorContext);
		} else {
			return this.getRuleContext(i, RangeOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_kuduPartitionSpec; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterKuduPartitionSpec) {
			listener.enterKuduPartitionSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitKuduPartitionSpec) {
			listener.exitKuduPartitionSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitKuduPartitionSpec) {
			return visitor.visitKuduPartitionSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CacheSpecContext extends ParserRuleContext {
	public KW_CACHED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CACHED, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_IN, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_WITH, 0); }
	public KW_REPLICATION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_REPLICATION, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.EQ, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public KW_UNCACHED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_UNCACHED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_cacheSpec; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterCacheSpec) {
			listener.enterCacheSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitCacheSpec) {
			listener.exitCacheSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitCacheSpec) {
			return visitor.visitCacheSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RangeOperatorContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LTE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.GT, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.GTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_rangeOperator; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterRangeOperator) {
			listener.enterRangeOperator(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitRangeOperator) {
			listener.exitRangeOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitRangeOperator) {
			return visitor.visitRangeOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartitionColContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.NEQ, 0); }
	public KW_LIKE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LIKE, 0); }
	public KW_RLIKE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_RLIKE, 0); }
	public KW_REGEXP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_REGEXP, 0); }
	public KW_BETWEEN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_BETWEEN, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_IN, 0); }
	public rangeOperator(): RangeOperatorContext | undefined {
		return this.tryGetRuleContext(0, RangeOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_partitionCol; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterPartitionCol) {
			listener.enterPartitionCol(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitPartitionCol) {
			listener.exitPartitionCol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitPartitionCol) {
			return visitor.visitPartitionCol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LikeClauseContext extends ParserRuleContext {
	public _optionType!: Token;
	public KW_LIKE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_LIKE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_PROPERTIES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PROPERTIES, 0); }
	public KW_INCLUDING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_INCLUDING, 0); }
	public KW_EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_EXCLUDING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_likeClause; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterLikeClause) {
			listener.enterLikeClause(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitLikeClause) {
			listener.exitLikeClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitLikeClause) {
			return visitor.visitLikeClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertiesContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public property(): PropertyContext[];
	public property(i: number): PropertyContext;
	public property(i?: number): PropertyContext | PropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyContext);
		} else {
			return this.getRuleContext(i, PropertyContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_properties; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterProperties) {
			listener.enterProperties(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitProperties) {
			listener.exitProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitProperties) {
			return visitor.visitProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartitionedByContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public columnDefinition(): ColumnDefinitionContext[];
	public columnDefinition(i: number): ColumnDefinitionContext;
	public columnDefinition(i?: number): ColumnDefinitionContext | ColumnDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnDefinitionContext);
		} else {
			return this.getRuleContext(i, ColumnDefinitionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_partitionedBy; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterPartitionedBy) {
			listener.enterPartitionedBy(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitPartitionedBy) {
			listener.exitPartitionedBy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitPartitionedBy) {
			return visitor.visitPartitionedBy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SortedByContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_sortedBy; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSortedBy) {
			listener.enterSortedBy(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSortedBy) {
			listener.exitSortedBy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSortedBy) {
			return visitor.visitSortedBy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowFormatContext extends ParserRuleContext {
	public KW_DELIMITED(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DELIMITED, 0); }
	public KW_FIELDS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FIELDS, 0); }
	public KW_TERMINATED(): TerminalNode[];
	public KW_TERMINATED(i: number): TerminalNode;
	public KW_TERMINATED(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.KW_TERMINATED);
		} else {
			return this.getToken(ImpalaSqlParser.KW_TERMINATED, i);
		}
	}
	public KW_BY(): TerminalNode[];
	public KW_BY(i: number): TerminalNode;
	public KW_BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.KW_BY);
		} else {
			return this.getToken(ImpalaSqlParser.KW_BY, i);
		}
	}
	public stringLiteral(): StringLiteralContext[];
	public stringLiteral(i: number): StringLiteralContext;
	public stringLiteral(i?: number): StringLiteralContext | StringLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringLiteralContext);
		} else {
			return this.getRuleContext(i, StringLiteralContext);
		}
	}
	public KW_LINES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LINES, 0); }
	public KW_ESCAPED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ESCAPED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_rowFormat; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterRowFormat) {
			listener.enterRowFormat(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitRowFormat) {
			listener.exitRowFormat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitRowFormat) {
			return visitor.visitRowFormat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.EQ, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_property; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitProperty) {
			listener.exitProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitProperty) {
			return visitor.visitProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryNoWithContext extends ParserRuleContext {
	public _rows!: ExpressionContext;
	public _offset!: Token;
	public queryTerm(): QueryTermContext {
		return this.getRuleContext(0, QueryTermContext);
	}
	public KW_ORDER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ORDER, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_BY, 0); }
	public sortItem(): SortItemContext[];
	public sortItem(i: number): SortItemContext;
	public sortItem(i?: number): SortItemContext | SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		} else {
			return this.getRuleContext(i, SortItemContext);
		}
	}
	public KW_LIMIT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LIMIT, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	public KW_OFFSET(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_OFFSET, 0); }
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.INTEGER_VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_queryNoWith; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterQueryNoWith) {
			listener.enterQueryNoWith(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitQueryNoWith) {
			listener.exitQueryNoWith(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitQueryNoWith) {
			return visitor.visitQueryNoWith(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryTermContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_queryTerm; }
	public copyFrom(ctx: QueryTermContext): void {
		super.copyFrom(ctx);
	}
}
export class QueryTermDefaultContext extends QueryTermContext {
	public queryPrimary(): QueryPrimaryContext {
		return this.getRuleContext(0, QueryPrimaryContext);
	}
	constructor(ctx: QueryTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterQueryTermDefault) {
			listener.enterQueryTermDefault(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitQueryTermDefault) {
			listener.exitQueryTermDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitQueryTermDefault) {
			return visitor.visitQueryTermDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetOperationContext extends QueryTermContext {
	public _left!: QueryTermContext;
	public _operator!: Token;
	public _right!: QueryTermContext;
	public queryTerm(): QueryTermContext[];
	public queryTerm(i: number): QueryTermContext;
	public queryTerm(i?: number): QueryTermContext | QueryTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QueryTermContext);
		} else {
			return this.getRuleContext(i, QueryTermContext);
		}
	}
	public KW_INTERSECT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_INTERSECT, 0); }
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public KW_UNION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_UNION, 0); }
	public KW_EXCEPT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_EXCEPT, 0); }
	constructor(ctx: QueryTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSetOperation) {
			listener.enterSetOperation(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSetOperation) {
			listener.exitSetOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSetOperation) {
			return visitor.visitSetOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryPrimaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_queryPrimary; }
	public copyFrom(ctx: QueryPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class QueryPrimaryDefaultContext extends QueryPrimaryContext {
	public querySpecification(): QuerySpecificationContext {
		return this.getRuleContext(0, QuerySpecificationContext);
	}
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterQueryPrimaryDefault) {
			listener.enterQueryPrimaryDefault(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitQueryPrimaryDefault) {
			listener.exitQueryPrimaryDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitQueryPrimaryDefault) {
			return visitor.visitQueryPrimaryDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableContext extends QueryPrimaryContext {
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public tableNamePath(): TableNamePathContext {
		return this.getRuleContext(0, TableNamePathContext);
	}
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterTable) {
			listener.enterTable(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitTable) {
			listener.exitTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitTable) {
			return visitor.visitTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InlineTableContext extends QueryPrimaryContext {
	public KW_VALUES(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_VALUES, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterInlineTable) {
			listener.enterInlineTable(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitInlineTable) {
			listener.exitInlineTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitInlineTable) {
			return visitor.visitInlineTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubqueryContext extends QueryPrimaryContext {
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public queryNoWith(): QueryNoWithContext {
		return this.getRuleContext(0, QueryNoWithContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSubquery) {
			listener.enterSubquery(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSubquery) {
			listener.exitSubquery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSubquery) {
			return visitor.visitSubquery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SortItemContext extends ParserRuleContext {
	public _ordering!: Token;
	public _nullOrdering!: Token;
	public columnItem(): ColumnItemContext {
		return this.getRuleContext(0, ColumnItemContext);
	}
	public KW_NULLS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NULLS, 0); }
	public KW_ASC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ASC, 0); }
	public KW_DESC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DESC, 0); }
	public KW_FIRST(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FIRST, 0); }
	public KW_LAST(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LAST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_sortItem; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSortItem) {
			listener.enterSortItem(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSortItem) {
			listener.exitSortItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSortItem) {
			return visitor.visitSortItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuerySpecificationContext extends ParserRuleContext {
	public _where!: BooleanExpressionContext;
	public _having!: BooleanExpressionContext;
	public KW_SELECT(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SELECT, 0); }
	public selectItem(): SelectItemContext[];
	public selectItem(i: number): SelectItemContext;
	public selectItem(i?: number): SelectItemContext | SelectItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectItemContext);
		} else {
			return this.getRuleContext(i, SelectItemContext);
		}
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public KW_STRAIGHT_JOIN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_STRAIGHT_JOIN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FROM, 0); }
	public relation(): RelationContext[];
	public relation(i: number): RelationContext;
	public relation(i?: number): RelationContext | RelationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationContext);
		} else {
			return this.getRuleContext(i, RelationContext);
		}
	}
	public KW_WHERE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_WHERE, 0); }
	public KW_GROUP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_GROUP, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_BY, 0); }
	public groupBy(): GroupByContext | undefined {
		return this.tryGetRuleContext(0, GroupByContext);
	}
	public KW_HAVING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_HAVING, 0); }
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_querySpecification; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterQuerySpecification) {
			listener.enterQuerySpecification(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitQuerySpecification) {
			listener.exitQuerySpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitQuerySpecification) {
			return visitor.visitQuerySpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupByContext extends ParserRuleContext {
	public groupingElement(): GroupingElementContext[];
	public groupingElement(i: number): GroupingElementContext;
	public groupingElement(i?: number): GroupingElementContext | GroupingElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupingElementContext);
		} else {
			return this.getRuleContext(i, GroupingElementContext);
		}
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_groupBy; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterGroupBy) {
			listener.enterGroupBy(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitGroupBy) {
			listener.exitGroupBy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupBy) {
			return visitor.visitGroupBy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingElementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_groupingElement; }
	public copyFrom(ctx: GroupingElementContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleGroupingSetContext extends GroupingElementContext {
	public groupingSet(): GroupingSetContext {
		return this.getRuleContext(0, GroupingSetContext);
	}
	constructor(ctx: GroupingElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSingleGroupingSet) {
			listener.enterSingleGroupingSet(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSingleGroupingSet) {
			listener.exitSingleGroupingSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSingleGroupingSet) {
			return visitor.visitSingleGroupingSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingSetContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.RPAREN, 0); }
	public columnItem(): ColumnItemContext[];
	public columnItem(i: number): ColumnItemContext;
	public columnItem(i?: number): ColumnItemContext | ColumnItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnItemContext);
		} else {
			return this.getRuleContext(i, ColumnItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_groupingSet; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterGroupingSet) {
			listener.enterGroupingSet(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitGroupingSet) {
			listener.exitGroupingSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupingSet) {
			return visitor.visitGroupingSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedQueryContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public KW_AS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_AS, 0); }
	public subQueryRelation(): SubQueryRelationContext {
		return this.getRuleContext(0, SubQueryRelationContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_namedQuery; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterNamedQuery) {
			listener.enterNamedQuery(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitNamedQuery) {
			listener.exitNamedQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitNamedQuery) {
			return visitor.visitNamedQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetQuantifierContext extends ParserRuleContext {
	public KW_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DISTINCT, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_setQuantifier; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSetQuantifier) {
			listener.enterSetQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSetQuantifier) {
			listener.exitSetQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSetQuantifier) {
			return visitor.visitSetQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectItemContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_selectItem; }
	public copyFrom(ctx: SelectItemContext): void {
		super.copyFrom(ctx);
	}
}
export class SelectSingleContext extends SelectItemContext {
	public columnItem(): ColumnItemContext {
		return this.getRuleContext(0, ColumnItemContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_AS, 0); }
	constructor(ctx: SelectItemContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSelectSingle) {
			listener.enterSelectSingle(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSelectSingle) {
			listener.exitSelectSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSelectSingle) {
			return visitor.visitSelectSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelectAllContext extends SelectItemContext {
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.DOT, 0); }
	public ASTERISK(): TerminalNode { return this.getToken(ImpalaSqlParser.ASTERISK, 0); }
	constructor(ctx: SelectItemContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSelectAll) {
			listener.enterSelectAll(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSelectAll) {
			listener.exitSelectAll(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSelectAll) {
			return visitor.visitSelectAll(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_relation; }
	public copyFrom(ctx: RelationContext): void {
		super.copyFrom(ctx);
	}
}
export class JoinRelationContext extends RelationContext {
	public _left!: RelationContext;
	public _right!: SampledRelationContext;
	public _rightRelation!: RelationContext;
	public relation(): RelationContext[];
	public relation(i: number): RelationContext;
	public relation(i?: number): RelationContext | RelationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationContext);
		} else {
			return this.getRuleContext(i, RelationContext);
		}
	}
	public KW_CROSS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CROSS, 0); }
	public KW_JOIN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_JOIN, 0); }
	public joinType(): JoinTypeContext | undefined {
		return this.tryGetRuleContext(0, JoinTypeContext);
	}
	public joinCriteria(): JoinCriteriaContext | undefined {
		return this.tryGetRuleContext(0, JoinCriteriaContext);
	}
	public sampledRelation(): SampledRelationContext | undefined {
		return this.tryGetRuleContext(0, SampledRelationContext);
	}
	constructor(ctx: RelationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterJoinRelation) {
			listener.enterJoinRelation(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitJoinRelation) {
			listener.exitJoinRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitJoinRelation) {
			return visitor.visitJoinRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationDefaultContext extends RelationContext {
	public sampledRelation(): SampledRelationContext {
		return this.getRuleContext(0, SampledRelationContext);
	}
	constructor(ctx: RelationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterRelationDefault) {
			listener.enterRelationDefault(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitRelationDefault) {
			listener.exitRelationDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitRelationDefault) {
			return visitor.visitRelationDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinTypeContext extends ParserRuleContext {
	public KW_INNER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_INNER, 0); }
	public KW_LEFT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LEFT, 0); }
	public KW_RIGHT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_RIGHT, 0); }
	public KW_OUTER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_OUTER, 0); }
	public KW_FULL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FULL, 0); }
	public KW_SEMI(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SEMI, 0); }
	public KW_ANTI(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ANTI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_joinType; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterJoinType) {
			listener.enterJoinType(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitJoinType) {
			listener.exitJoinType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitJoinType) {
			return visitor.visitJoinType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinCriteriaContext extends ParserRuleContext {
	public KW_ON(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ON, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	public KW_USING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_USING, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LPAREN, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_joinCriteria; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterJoinCriteria) {
			listener.enterJoinCriteria(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitJoinCriteria) {
			listener.exitJoinCriteria(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitJoinCriteria) {
			return visitor.visitJoinCriteria(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SampledRelationContext extends ParserRuleContext {
	public _percentage!: ExpressionContext;
	public _seed!: ExpressionContext;
	public aliasedRelation(): AliasedRelationContext {
		return this.getRuleContext(0, AliasedRelationContext);
	}
	public KW_TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TABLESAMPLE, 0); }
	public sampleType(): SampleTypeContext | undefined {
		return this.tryGetRuleContext(0, SampleTypeContext);
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.LPAREN);
		} else {
			return this.getToken(ImpalaSqlParser.LPAREN, i);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.RPAREN);
		} else {
			return this.getToken(ImpalaSqlParser.RPAREN, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public KW_REPEATABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_REPEATABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_sampledRelation; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSampledRelation) {
			listener.enterSampledRelation(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSampledRelation) {
			listener.exitSampledRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSampledRelation) {
			return visitor.visitSampledRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SampleTypeContext extends ParserRuleContext {
	public KW_BERNOULLI(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_BERNOULLI, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SYSTEM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_sampleType; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSampleType) {
			listener.enterSampleType(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSampleType) {
			listener.exitSampleType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSampleType) {
			return visitor.visitSampleType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasedRelationContext extends ParserRuleContext {
	public relationPrimary(): RelationPrimaryContext {
		return this.getRuleContext(0, RelationPrimaryContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_AS, 0); }
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_aliasedRelation; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAliasedRelation) {
			listener.enterAliasedRelation(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAliasedRelation) {
			listener.exitAliasedRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAliasedRelation) {
			return visitor.visitAliasedRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnAliasesContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public columnNamePath(): ColumnNamePathContext[];
	public columnNamePath(i: number): ColumnNamePathContext;
	public columnNamePath(i?: number): ColumnNamePathContext | ColumnNamePathContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnNamePathContext);
		} else {
			return this.getRuleContext(i, ColumnNamePathContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_columnAliases; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterColumnAliases) {
			listener.enterColumnAliases(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitColumnAliases) {
			listener.exitColumnAliases(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnAliases) {
			return visitor.visitColumnAliases(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateColumnAliasesContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public columnNamePathCreate(): ColumnNamePathCreateContext[];
	public columnNamePathCreate(i: number): ColumnNamePathCreateContext;
	public columnNamePathCreate(i?: number): ColumnNamePathCreateContext | ColumnNamePathCreateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnNamePathCreateContext);
		} else {
			return this.getRuleContext(i, ColumnNamePathCreateContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_createColumnAliases; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterCreateColumnAliases) {
			listener.enterCreateColumnAliases(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitCreateColumnAliases) {
			listener.exitCreateColumnAliases(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateColumnAliases) {
			return visitor.visitCreateColumnAliases(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationPrimaryContext extends ParserRuleContext {
	public tableOrViewPath(): TableOrViewPathContext | undefined {
		return this.tryGetRuleContext(0, TableOrViewPathContext);
	}
	public subQueryRelation(): SubQueryRelationContext | undefined {
		return this.tryGetRuleContext(0, SubQueryRelationContext);
	}
	public KW_LATERAL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LATERAL, 0); }
	public unnest(): UnnestContext | undefined {
		return this.tryGetRuleContext(0, UnnestContext);
	}
	public parenthesizedRelation(): ParenthesizedRelationContext | undefined {
		return this.tryGetRuleContext(0, ParenthesizedRelationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_relationPrimary; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterRelationPrimary) {
			listener.enterRelationPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitRelationPrimary) {
			listener.exitRelationPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitRelationPrimary) {
			return visitor.visitRelationPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubQueryRelationContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_subQueryRelation; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSubQueryRelation) {
			listener.enterSubQueryRelation(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSubQueryRelation) {
			listener.exitSubQueryRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSubQueryRelation) {
			return visitor.visitSubQueryRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnnestContext extends ParserRuleContext {
	public KW_UNNEST(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_UNNEST, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_WITH, 0); }
	public KW_ORDINALITY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ORDINALITY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_unnest; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterUnnest) {
			listener.enterUnnest(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitUnnest) {
			listener.exitUnnest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitUnnest) {
			return visitor.visitUnnest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParenthesizedRelationContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public relation(): RelationContext {
		return this.getRuleContext(0, RelationContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_parenthesizedRelation; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterParenthesizedRelation) {
			listener.enterParenthesizedRelation(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitParenthesizedRelation) {
			listener.exitParenthesizedRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedRelation) {
			return visitor.visitParenthesizedRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnItemContext extends ParserRuleContext {
	public columnNamePath(): ColumnNamePathContext | undefined {
		return this.tryGetRuleContext(0, ColumnNamePathContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_columnItem; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterColumnItem) {
			listener.enterColumnItem(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitColumnItem) {
			listener.exitColumnItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnItem) {
			return visitor.visitColumnItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_expression; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_booleanExpression; }
	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PredicatedContext extends BooleanExpressionContext {
	public _valueExpression!: ValueExpressionContext;
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public predicate(): PredicateContext | undefined {
		return this.tryGetRuleContext(0, PredicateContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterPredicated) {
			listener.enterPredicated(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitPredicated) {
			listener.exitPredicated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitPredicated) {
			return visitor.visitPredicated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalNotContext extends BooleanExpressionContext {
	public KW_NOT(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_NOT, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterLogicalNot) {
			listener.enterLogicalNot(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitLogicalNot) {
			listener.exitLogicalNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitLogicalNot) {
			return visitor.visitLogicalNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalBinaryContext extends BooleanExpressionContext {
	public _left!: BooleanExpressionContext;
	public _operator!: Token;
	public _right!: BooleanExpressionContext;
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_AND, 0); }
	public KW_OR(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_OR, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterLogicalBinary) {
			listener.enterLogicalBinary(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitLogicalBinary) {
			listener.exitLogicalBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitLogicalBinary) {
			return visitor.visitLogicalBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	public value: ParserRuleContext;
	constructor(parent: ParserRuleContext | undefined, invokingState: number, value: ParserRuleContext) {
		super(parent, invokingState);
		this.value = value;
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_predicate; }
	public copyFrom(ctx: PredicateContext): void {
		super.copyFrom(ctx);
		this.value = ctx.value;
	}
}
export class ComparisonContext extends PredicateContext {
	public _right!: ValueExpressionContext;
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuantifiedComparisonContext extends PredicateContext {
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public comparisonQuantifier(): ComparisonQuantifierContext {
		return this.getRuleContext(0, ComparisonQuantifierContext);
	}
	public subQueryRelation(): SubQueryRelationContext {
		return this.getRuleContext(0, SubQueryRelationContext);
	}
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterQuantifiedComparison) {
			listener.enterQuantifiedComparison(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitQuantifiedComparison) {
			listener.exitQuantifiedComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitQuantifiedComparison) {
			return visitor.visitQuantifiedComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BetweenContext extends PredicateContext {
	public _lower!: ValueExpressionContext;
	public _upper!: ValueExpressionContext;
	public KW_BETWEEN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_BETWEEN, 0); }
	public KW_AND(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_AND, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterBetween) {
			listener.enterBetween(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitBetween) {
			listener.exitBetween(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitBetween) {
			return visitor.visitBetween(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InListContext extends PredicateContext {
	public KW_IN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_IN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NOT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterInList) {
			listener.enterInList(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitInList) {
			listener.exitInList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitInList) {
			return visitor.visitInList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InSubqueryContext extends PredicateContext {
	public KW_IN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_IN, 0); }
	public subQueryRelation(): SubQueryRelationContext {
		return this.getRuleContext(0, SubQueryRelationContext);
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterInSubquery) {
			listener.enterInSubquery(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitInSubquery) {
			listener.exitInSubquery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitInSubquery) {
			return visitor.visitInSubquery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LikeContext extends PredicateContext {
	public _pattern!: ValueExpressionContext;
	public _escape!: ValueExpressionContext;
	public KW_LIKE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LIKE, 0); }
	public KW_ILIKE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ILIKE, 0); }
	public KW_RLIKE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_RLIKE, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NOT, 0); }
	public KW_ESCAPE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ESCAPE, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterLike) {
			listener.enterLike(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitLike) {
			listener.exitLike(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitLike) {
			return visitor.visitLike(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class REGEXPContext extends PredicateContext {
	public _pattern!: ValueExpressionContext;
	public KW_REGEXP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_REGEXP, 0); }
	public KW_IREGEXP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_IREGEXP, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterREGEXP) {
			listener.enterREGEXP(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitREGEXP) {
			listener.exitREGEXP(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitREGEXP) {
			return visitor.visitREGEXP(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullOrUnKnownOrBooleanPredicateContext extends PredicateContext {
	public KW_IS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_IS, 0); }
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NULL, 0); }
	public KW_UNKNOWN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_UNKNOWN, 0); }
	public KW_TRUE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TRUE, 0); }
	public KW_FALSE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FALSE, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterNullOrUnKnownOrBooleanPredicate) {
			listener.enterNullOrUnKnownOrBooleanPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitNullOrUnKnownOrBooleanPredicate) {
			listener.exitNullOrUnKnownOrBooleanPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitNullOrUnKnownOrBooleanPredicate) {
			return visitor.visitNullOrUnKnownOrBooleanPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DistinctFromContext extends PredicateContext {
	public _right!: ValueExpressionContext;
	public KW_IS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_IS, 0); }
	public KW_DISTINCT(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DISTINCT, 0); }
	public KW_FROM(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_FROM, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDistinctFrom) {
			listener.enterDistinctFrom(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDistinctFrom) {
			listener.exitDistinctFrom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDistinctFrom) {
			return visitor.visitDistinctFrom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_valueExpression; }
	public copyFrom(ctx: ValueExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterValueExpressionDefault) {
			listener.enterValueExpressionDefault(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitValueExpressionDefault) {
			listener.exitValueExpressionDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitValueExpressionDefault) {
			return visitor.visitValueExpressionDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticUnaryContext extends ValueExpressionContext {
	public _operator!: Token;
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.PLUS, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterArithmeticUnary) {
			listener.enterArithmeticUnary(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitArithmeticUnary) {
			listener.exitArithmeticUnary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitArithmeticUnary) {
			return visitor.visitArithmeticUnary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticBinaryContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _operator!: Token;
	public _right!: ValueExpressionContext;
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.SLASH, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.PERCENT, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.MINUS, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterArithmeticBinary) {
			listener.enterArithmeticBinary(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitArithmeticBinary) {
			listener.exitArithmeticBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitArithmeticBinary) {
			return visitor.visitArithmeticBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConcatenationContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _right!: ValueExpressionContext;
	public CONCAT(): TerminalNode { return this.getToken(ImpalaSqlParser.CONCAT, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterConcatenation) {
			listener.enterConcatenation(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitConcatenation) {
			listener.exitConcatenation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitConcatenation) {
			return visitor.visitConcatenation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_primaryExpression; }
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class NullLiteralContext extends PrimaryExpressionContext {
	public KW_NULL(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_NULL, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterNullLiteral) {
			listener.enterNullLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitNullLiteral) {
			listener.exitNullLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitNullLiteral) {
			return visitor.visitNullLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntervalLiteralContext extends PrimaryExpressionContext {
	public interval(): IntervalContext {
		return this.getRuleContext(0, IntervalContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterIntervalLiteral) {
			listener.enterIntervalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitIntervalLiteral) {
			listener.exitIntervalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitIntervalLiteral) {
			return visitor.visitIntervalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeConstructorContext extends PrimaryExpressionContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public stringLiteral(): StringLiteralContext {
		return this.getRuleContext(0, StringLiteralContext);
	}
	public DOUBLE_PRECISION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.DOUBLE_PRECISION, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterTypeConstructor) {
			listener.enterTypeConstructor(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitTypeConstructor) {
			listener.exitTypeConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitTypeConstructor) {
			return visitor.visitTypeConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericLiteralContext extends PrimaryExpressionContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralContext extends PrimaryExpressionContext {
	public booleanValue(): BooleanValueContext {
		return this.getRuleContext(0, BooleanValueContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralValuesContext extends PrimaryExpressionContext {
	public stringLiteral(): StringLiteralContext {
		return this.getRuleContext(0, StringLiteralContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterStringLiteralValues) {
			listener.enterStringLiteralValues(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitStringLiteralValues) {
			listener.exitStringLiteralValues(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitStringLiteralValues) {
			return visitor.visitStringLiteralValues(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryLiteralContext extends PrimaryExpressionContext {
	public BINARY_LITERAL(): TerminalNode { return this.getToken(ImpalaSqlParser.BINARY_LITERAL, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterBinaryLiteral) {
			listener.enterBinaryLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitBinaryLiteral) {
			listener.exitBinaryLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitBinaryLiteral) {
			return visitor.visitBinaryLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParameterContext extends PrimaryExpressionContext {
	public QUESTION(): TerminalNode { return this.getToken(ImpalaSqlParser.QUESTION, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PositionContext extends PrimaryExpressionContext {
	public KW_POSITION(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_POSITION, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public KW_IN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_IN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterPosition) {
			listener.enterPosition(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitPosition) {
			listener.exitPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitPosition) {
			return visitor.visitPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RowConstructorContext extends PrimaryExpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	public KW_AS(): TerminalNode[];
	public KW_AS(i: number): TerminalNode;
	public KW_AS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.KW_AS);
		} else {
			return this.getToken(ImpalaSqlParser.KW_AS, i);
		}
	}
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ROW, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterRowConstructor) {
			listener.enterRowConstructor(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitRowConstructor) {
			listener.exitRowConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitRowConstructor) {
			return visitor.visitRowConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallContext extends PrimaryExpressionContext {
	public functionNamePath(): FunctionNamePathContext {
		return this.getRuleContext(0, FunctionNamePathContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.ASTERISK, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	public filter(): FilterContext | undefined {
		return this.tryGetRuleContext(0, FilterContext);
	}
	public over(): OverContext | undefined {
		return this.tryGetRuleContext(0, OverContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public KW_ORDER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ORDER, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_BY, 0); }
	public sortItem(): SortItemContext[];
	public sortItem(i: number): SortItemContext;
	public sortItem(i?: number): SortItemContext | SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		} else {
			return this.getRuleContext(i, SortItemContext);
		}
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LambdaContext extends PrimaryExpressionContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public RIGHT_ARROW(): TerminalNode { return this.getToken(ImpalaSqlParser.RIGHT_ARROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterLambda) {
			listener.enterLambda(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitLambda) {
			listener.exitLambda(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitLambda) {
			return visitor.visitLambda(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubqueryExpressionContext extends PrimaryExpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSubqueryExpression) {
			listener.enterSubqueryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSubqueryExpression) {
			listener.exitSubqueryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSubqueryExpression) {
			return visitor.visitSubqueryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistsContext extends PrimaryExpressionContext {
	public KW_EXISTS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_EXISTS, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterExists) {
			listener.enterExists(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitExists) {
			listener.exitExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitExists) {
			return visitor.visitExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleCaseContext extends PrimaryExpressionContext {
	public _elseExpression!: ExpressionContext;
	public KW_CASE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CASE, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public KW_END(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_END, 0); }
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public KW_ELSE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ELSE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSimpleCase) {
			listener.enterSimpleCase(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSimpleCase) {
			listener.exitSimpleCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSimpleCase) {
			return visitor.visitSimpleCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SearchedCaseContext extends PrimaryExpressionContext {
	public _elseExpression!: ExpressionContext;
	public KW_CASE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CASE, 0); }
	public KW_END(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_END, 0); }
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public KW_ELSE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ELSE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSearchedCase) {
			listener.enterSearchedCase(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSearchedCase) {
			listener.exitSearchedCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSearchedCase) {
			return visitor.visitSearchedCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastContext extends PrimaryExpressionContext {
	public KW_CAST(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CAST, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_AS, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	public KW_TRY_CAST(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TRY_CAST, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterCast) {
			listener.enterCast(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitCast) {
			listener.exitCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitCast) {
			return visitor.visitCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayConstructorContext extends PrimaryExpressionContext {
	public KW_ARRAY(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ARRAY, 0); }
	public LSQUARE(): TerminalNode { return this.getToken(ImpalaSqlParser.LSQUARE, 0); }
	public RSQUARE(): TerminalNode { return this.getToken(ImpalaSqlParser.RSQUARE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterArrayConstructor) {
			listener.enterArrayConstructor(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitArrayConstructor) {
			listener.exitArrayConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitArrayConstructor) {
			return visitor.visitArrayConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubscriptContext extends PrimaryExpressionContext {
	public _value!: PrimaryExpressionContext;
	public _index!: ValueExpressionContext;
	public LSQUARE(): TerminalNode { return this.getToken(ImpalaSqlParser.LSQUARE, 0); }
	public RSQUARE(): TerminalNode { return this.getToken(ImpalaSqlParser.RSQUARE, 0); }
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSubscript) {
			listener.enterSubscript(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSubscript) {
			listener.exitSubscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSubscript) {
			return visitor.visitSubscript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterColumnReference) {
			listener.enterColumnReference(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitColumnReference) {
			listener.exitColumnReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnReference) {
			return visitor.visitColumnReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DereferenceContext extends PrimaryExpressionContext {
	public _base!: PrimaryExpressionContext;
	public _fieldName!: IdentifierContext;
	public DOT(): TerminalNode { return this.getToken(ImpalaSqlParser.DOT, 0); }
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDereference) {
			listener.enterDereference(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDereference) {
			listener.exitDereference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDereference) {
			return visitor.visitDereference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SpecialDateTimeFunctionContext extends PrimaryExpressionContext {
	public _name!: Token;
	public _precision!: Token;
	public KW_CURRENT_DATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CURRENT_DATE, 0); }
	public KW_CURRENT_TIME(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CURRENT_TIME, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.RPAREN, 0); }
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.INTEGER_VALUE, 0); }
	public KW_CURRENT_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CURRENT_TIMESTAMP, 0); }
	public KW_LOCALTIME(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LOCALTIME, 0); }
	public KW_LOCALTIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LOCALTIMESTAMP, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSpecialDateTimeFunction) {
			listener.enterSpecialDateTimeFunction(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSpecialDateTimeFunction) {
			listener.exitSpecialDateTimeFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSpecialDateTimeFunction) {
			return visitor.visitSpecialDateTimeFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentUserContext extends PrimaryExpressionContext {
	public _name!: Token;
	public KW_CURRENT_USER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CURRENT_USER, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterCurrentUser) {
			listener.enterCurrentUser(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitCurrentUser) {
			listener.exitCurrentUser(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitCurrentUser) {
			return visitor.visitCurrentUser(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentPathContext extends PrimaryExpressionContext {
	public _name!: Token;
	public KW_CURRENT_PATH(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CURRENT_PATH, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterCurrentPath) {
			listener.enterCurrentPath(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitCurrentPath) {
			listener.exitCurrentPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitCurrentPath) {
			return visitor.visitCurrentPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubstringContext extends PrimaryExpressionContext {
	public KW_SUBSTRING(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SUBSTRING, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public KW_FROM(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_FROM, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	public KW_FOR(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FOR, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSubstring) {
			listener.enterSubstring(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSubstring) {
			listener.exitSubstring(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSubstring) {
			return visitor.visitSubstring(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NormalizeContext extends PrimaryExpressionContext {
	public KW_NORMALIZE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_NORMALIZE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.COMMA, 0); }
	public normalForm(): NormalFormContext | undefined {
		return this.tryGetRuleContext(0, NormalFormContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterNormalize) {
			listener.enterNormalize(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitNormalize) {
			listener.exitNormalize(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitNormalize) {
			return visitor.visitNormalize(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExtractContext extends PrimaryExpressionContext {
	public KW_EXTRACT(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_EXTRACT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_FROM(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_FROM, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterExtract) {
			listener.enterExtract(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitExtract) {
			listener.exitExtract(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitExtract) {
			return visitor.visitExtract(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GroupingOperationContext extends PrimaryExpressionContext {
	public KW_GROUPING(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_GROUPING, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterGroupingOperation) {
			listener.enterGroupingOperation(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitGroupingOperation) {
			listener.exitGroupingOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupingOperation) {
			return visitor.visitGroupingOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_stringLiteral; }
	public copyFrom(ctx: StringLiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class BasicStringLiteralContext extends StringLiteralContext {
	public STRING(): TerminalNode { return this.getToken(ImpalaSqlParser.STRING, 0); }
	constructor(ctx: StringLiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterBasicStringLiteral) {
			listener.enterBasicStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitBasicStringLiteral) {
			listener.exitBasicStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitBasicStringLiteral) {
			return visitor.visitBasicStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnicodeStringLiteralContext extends StringLiteralContext {
	public UNICODE_STRING(): TerminalNode { return this.getToken(ImpalaSqlParser.UNICODE_STRING, 0); }
	public KW_UESCAPE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_UESCAPE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.STRING, 0); }
	constructor(ctx: StringLiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterUnicodeStringLiteral) {
			listener.enterUnicodeStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitUnicodeStringLiteral) {
			listener.exitUnicodeStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitUnicodeStringLiteral) {
			return visitor.visitUnicodeStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.NEQ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LTE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.GT, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.GTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonQuantifierContext extends ParserRuleContext {
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ALL, 0); }
	public KW_SOME(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SOME, 0); }
	public KW_ANY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ANY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_comparisonQuantifier; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterComparisonQuantifier) {
			listener.enterComparisonQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitComparisonQuantifier) {
			listener.exitComparisonQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitComparisonQuantifier) {
			return visitor.visitComparisonQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanValueContext extends ParserRuleContext {
	public KW_TRUE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TRUE, 0); }
	public KW_FALSE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_booleanValue; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterBooleanValue) {
			listener.enterBooleanValue(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitBooleanValue) {
			listener.exitBooleanValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitBooleanValue) {
			return visitor.visitBooleanValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalContext extends ParserRuleContext {
	public INTEGER_VALUE(): TerminalNode { return this.getToken(ImpalaSqlParser.INTEGER_VALUE, 0); }
	public intervalField(): IntervalFieldContext {
		return this.getRuleContext(0, IntervalFieldContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.RPAREN, 0); }
	public KW_INTERVAL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_INTERVAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_interval; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterInterval) {
			listener.enterInterval(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitInterval) {
			listener.exitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitInterval) {
			return visitor.visitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalFieldContext extends ParserRuleContext {
	public KW_YEAR(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_YEAR, 0); }
	public KW_YEARS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_YEARS, 0); }
	public KW_MONTH(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_MONTH, 0); }
	public KW_MONTHS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_MONTHS, 0); }
	public KW_DAY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DAY, 0); }
	public KW_DAYS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DAYS, 0); }
	public KW_HOUR(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_HOUR, 0); }
	public KW_HOURS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_HOURS, 0); }
	public KW_MINUTE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_MINUTE, 0); }
	public KW_MINUTES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_MINUTES, 0); }
	public KW_SECOND(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SECOND, 0); }
	public KW_SECONDS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SECONDS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_intervalField; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterIntervalField) {
			listener.enterIntervalField(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitIntervalField) {
			listener.exitIntervalField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitIntervalField) {
			return visitor.visitIntervalField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalFormContext extends ParserRuleContext {
	public KW_NFD(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NFD, 0); }
	public KW_NFC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NFC, 0); }
	public KW_NFKD(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NFKD, 0); }
	public KW_NFKC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NFKC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_normalForm; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterNormalForm) {
			listener.enterNormalForm(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitNormalForm) {
			listener.exitNormalForm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitNormalForm) {
			return visitor.visitNormalForm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public KW_ARRAY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ARRAY, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.GT, 0); }
	public KW_MAP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_MAP, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	public KW_STRUCT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_STRUCT, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COLON);
		} else {
			return this.getToken(ImpalaSqlParser.COLON, i);
		}
	}
	public baseType(): BaseTypeContext | undefined {
		return this.tryGetRuleContext(0, BaseTypeContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LPAREN, 0); }
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_type; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.INTEGER_VALUE, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BaseTypeContext extends ParserRuleContext {
	public TIME_WITH_TIME_ZONE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.TIME_WITH_TIME_ZONE, 0); }
	public TIMESTAMP_WITH_TIME_ZONE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE, 0); }
	public DOUBLE_PRECISION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.DOUBLE_PRECISION, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_baseType; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterBaseType) {
			listener.enterBaseType(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitBaseType) {
			listener.exitBaseType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitBaseType) {
			return visitor.visitBaseType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenClauseContext extends ParserRuleContext {
	public _condition!: ExpressionContext;
	public _result!: ExpressionContext;
	public KW_WHEN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_WHEN, 0); }
	public KW_THEN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_THEN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_whenClause; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterWhenClause) {
			listener.enterWhenClause(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitWhenClause) {
			listener.exitWhenClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitWhenClause) {
			return visitor.visitWhenClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilterContext extends ParserRuleContext {
	public KW_FILTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_FILTER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public KW_WHERE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_filter; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterFilter) {
			listener.enterFilter(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitFilter) {
			listener.exitFilter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitFilter) {
			return visitor.visitFilter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverContext extends ParserRuleContext {
	public _expression!: ExpressionContext;
	public _partition: ExpressionContext[] = [];
	public KW_OVER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_OVER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PARTITION, 0); }
	public KW_BY(): TerminalNode[];
	public KW_BY(i: number): TerminalNode;
	public KW_BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.KW_BY);
		} else {
			return this.getToken(ImpalaSqlParser.KW_BY, i);
		}
	}
	public KW_ORDER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ORDER, 0); }
	public sortItem(): SortItemContext[];
	public sortItem(i: number): SortItemContext;
	public sortItem(i?: number): SortItemContext | SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		} else {
			return this.getRuleContext(i, SortItemContext);
		}
	}
	public windowFrame(): WindowFrameContext | undefined {
		return this.tryGetRuleContext(0, WindowFrameContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_over; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterOver) {
			listener.enterOver(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitOver) {
			listener.exitOver(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitOver) {
			return visitor.visitOver(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowFrameContext extends ParserRuleContext {
	public _frameType!: Token;
	public _start_!: FrameBoundContext;
	public _end!: FrameBoundContext;
	public KW_RANGE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_RANGE, 0); }
	public frameBound(): FrameBoundContext[];
	public frameBound(i: number): FrameBoundContext;
	public frameBound(i?: number): FrameBoundContext | FrameBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FrameBoundContext);
		} else {
			return this.getRuleContext(i, FrameBoundContext);
		}
	}
	public KW_ROWS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ROWS, 0); }
	public KW_BETWEEN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_BETWEEN, 0); }
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_AND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_windowFrame; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterWindowFrame) {
			listener.enterWindowFrame(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitWindowFrame) {
			listener.exitWindowFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitWindowFrame) {
			return visitor.visitWindowFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FrameBoundContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_frameBound; }
	public copyFrom(ctx: FrameBoundContext): void {
		super.copyFrom(ctx);
	}
}
export class UnboundedFrameContext extends FrameBoundContext {
	public _boundType!: Token;
	public KW_UNBOUNDED(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_UNBOUNDED, 0); }
	public KW_PRECEDING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PRECEDING, 0); }
	public KW_FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FOLLOWING, 0); }
	constructor(ctx: FrameBoundContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterUnboundedFrame) {
			listener.enterUnboundedFrame(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitUnboundedFrame) {
			listener.exitUnboundedFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitUnboundedFrame) {
			return visitor.visitUnboundedFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentRowBoundContext extends FrameBoundContext {
	public KW_CURRENT(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CURRENT, 0); }
	public KW_ROW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ROW, 0); }
	constructor(ctx: FrameBoundContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterCurrentRowBound) {
			listener.enterCurrentRowBound(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitCurrentRowBound) {
			listener.exitCurrentRowBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitCurrentRowBound) {
			return visitor.visitCurrentRowBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoundedFrameContext extends FrameBoundContext {
	public _boundType!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public KW_PRECEDING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PRECEDING, 0); }
	public KW_FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FOLLOWING, 0); }
	constructor(ctx: FrameBoundContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterBoundedFrame) {
			listener.enterBoundedFrame(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitBoundedFrame) {
			listener.exitBoundedFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitBoundedFrame) {
			return visitor.visitBoundedFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathElementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_pathElement; }
	public copyFrom(ctx: PathElementContext): void {
		super.copyFrom(ctx);
	}
}
export class QualifiedArgumentContext extends PathElementContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode { return this.getToken(ImpalaSqlParser.DOT, 0); }
	constructor(ctx: PathElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterQualifiedArgument) {
			listener.enterQualifiedArgument(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitQualifiedArgument) {
			listener.exitQualifiedArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitQualifiedArgument) {
			return visitor.visitQualifiedArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnqualifiedArgumentContext extends PathElementContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PathElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterUnqualifiedArgument) {
			listener.enterUnqualifiedArgument(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitUnqualifiedArgument) {
			listener.exitUnqualifiedArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitUnqualifiedArgument) {
			return visitor.visitUnqualifiedArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathSpecificationContext extends ParserRuleContext {
	public pathElement(): PathElementContext[];
	public pathElement(i: number): PathElementContext;
	public pathElement(i?: number): PathElementContext | PathElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PathElementContext);
		} else {
			return this.getRuleContext(i, PathElementContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_pathSpecification; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterPathSpecification) {
			listener.enterPathSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitPathSpecification) {
			listener.exitPathSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitPathSpecification) {
			return visitor.visitPathSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrivilegeContext extends ParserRuleContext {
	public _columnName!: IdentifierContext;
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ALL, 0); }
	public KW_ALTER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_DROP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DROP, 0); }
	public KW_CREATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CREATE, 0); }
	public KW_INSERT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_INSERT, 0); }
	public KW_REFRESH(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_REFRESH, 0); }
	public KW_SELECT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SELECT, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.RPAREN, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_privilege; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterPrivilege) {
			listener.enterPrivilege(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitPrivilege) {
			listener.exitPrivilege(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitPrivilege) {
			return visitor.visitPrivilege(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectTypeContext extends ParserRuleContext {
	public KW_SERVER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SERVER, 0); }
	public KW_URI(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_URI, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DATABASE, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_objectType; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterObjectType) {
			listener.enterObjectType(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitObjectType) {
			listener.exitObjectType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitObjectType) {
			return visitor.visitObjectType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.DOT);
		} else {
			return this.getToken(ImpalaSqlParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrincipalContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_principal; }
	public copyFrom(ctx: PrincipalContext): void {
		super.copyFrom(ctx);
	}
}
export class RolePrincipalContext extends PrincipalContext {
	public KW_ROLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ROLE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrincipalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterRolePrincipal) {
			listener.enterRolePrincipal(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitRolePrincipal) {
			listener.exitRolePrincipal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitRolePrincipal) {
			return visitor.visitRolePrincipal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UserPrincipalContext extends PrincipalContext {
	public KW_USER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_USER, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrincipalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterUserPrincipal) {
			listener.enterUserPrincipal(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitUserPrincipal) {
			listener.exitUserPrincipal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitUserPrincipal) {
			return visitor.visitUserPrincipal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GroupPrincipalContext extends PrincipalContext {
	public KW_GROUP(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_GROUP, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrincipalContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterGroupPrincipal) {
			listener.enterGroupPrincipal(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitGroupPrincipal) {
			listener.exitGroupPrincipal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupPrincipal) {
			return visitor.visitGroupPrincipal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_identifier; }
	public copyFrom(ctx: IdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class UnquotedIdentifierContext extends IdentifierContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.IDENTIFIER, 0); }
	public nonReserved(): NonReservedContext | undefined {
		return this.tryGetRuleContext(0, NonReservedContext);
	}
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterUnquotedIdentifier) {
			listener.enterUnquotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitUnquotedIdentifier) {
			listener.exitUnquotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitUnquotedIdentifier) {
			return visitor.visitUnquotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuotedIdentifierContext extends IdentifierContext {
	public STRING(): TerminalNode { return this.getToken(ImpalaSqlParser.STRING, 0); }
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterQuotedIdentifier) {
			listener.enterQuotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitQuotedIdentifier) {
			listener.exitQuotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifier) {
			return visitor.visitQuotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BackQuotedIdentifierContext extends IdentifierContext {
	public BACKQUOTED_IDENTIFIER(): TerminalNode { return this.getToken(ImpalaSqlParser.BACKQUOTED_IDENTIFIER, 0); }
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterBackQuotedIdentifier) {
			listener.enterBackQuotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitBackQuotedIdentifier) {
			listener.exitBackQuotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitBackQuotedIdentifier) {
			return visitor.visitBackQuotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DigitIdentifierContext extends IdentifierContext {
	public DIGIT_IDENTIFIER(): TerminalNode { return this.getToken(ImpalaSqlParser.DIGIT_IDENTIFIER, 0); }
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDigitIdentifier) {
			listener.enterDigitIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDigitIdentifier) {
			listener.exitDigitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDigitIdentifier) {
			return visitor.visitDigitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_number; }
	public copyFrom(ctx: NumberContext): void {
		super.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends NumberContext {
	public DECIMAL_VALUE(): TerminalNode { return this.getToken(ImpalaSqlParser.DECIMAL_VALUE, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDecimalLiteral) {
			listener.enterDecimalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDecimalLiteral) {
			listener.exitDecimalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDecimalLiteral) {
			return visitor.visitDecimalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoubleLiteralContext extends NumberContext {
	public DOUBLE_VALUE(): TerminalNode { return this.getToken(ImpalaSqlParser.DOUBLE_VALUE, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDoubleLiteral) {
			listener.enterDoubleLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDoubleLiteral) {
			listener.exitDoubleLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDoubleLiteral) {
			return visitor.visitDoubleLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntegerLiteralContext extends NumberContext {
	public INTEGER_VALUE(): TerminalNode { return this.getToken(ImpalaSqlParser.INTEGER_VALUE, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.MINUS, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedKeywordsUsedAsFuncNameContext extends ParserRuleContext {
	public KW_TRUNCATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TRUNCATE, 0); }
	public KW_CAST(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CAST, 0); }
	public KW_CURRENT_DATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CURRENT_DATE, 0); }
	public KW_CURRENT_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CURRENT_TIMESTAMP, 0); }
	public KW_DAY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DAY, 0); }
	public KW_EXTRACT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_EXTRACT, 0); }
	public KW_HOUR(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_HOUR, 0); }
	public KW_MINUTE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_MINUTE, 0); }
	public KW_MONTH(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_MONTH, 0); }
	public KW_SECOND(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SECOND, 0); }
	public KW_YEAR(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_YEAR, 0); }
	public KW_CASE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CASE, 0); }
	public KW_LEFT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LEFT, 0); }
	public KW_REPLACE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_REPLACE, 0); }
	public KW_RIGHT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_RIGHT, 0); }
	public KW_SUBSTRING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SUBSTRING, 0); }
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_USER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_reservedKeywordsUsedAsFuncName; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterReservedKeywordsUsedAsFuncName) {
			listener.enterReservedKeywordsUsedAsFuncName(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitReservedKeywordsUsedAsFuncName) {
			listener.exitReservedKeywordsUsedAsFuncName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitReservedKeywordsUsedAsFuncName) {
			return visitor.visitReservedKeywordsUsedAsFuncName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonReservedContext extends ParserRuleContext {
	public KW_BERNOULLI(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_BERNOULLI, 0); }
	public KW_DAY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DAY, 0); }
	public KW_DAYS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DAYS, 0); }
	public KW_EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_EXCLUDING, 0); }
	public KW_HOUR(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_HOUR, 0); }
	public KW_INCLUDING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_INCLUDING, 0); }
	public KW_MINUTE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_MINUTE, 0); }
	public KW_MINUTES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_MINUTES, 0); }
	public KW_MONTH(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_MONTH, 0); }
	public KW_MONTHS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_MONTHS, 0); }
	public KW_NFC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NFC, 0); }
	public KW_NFD(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NFD, 0); }
	public KW_NFKC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NFKC, 0); }
	public KW_NFKD(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NFKD, 0); }
	public KW_OPTION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_OPTION, 0); }
	public KW_ORDINALITY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ORDINALITY, 0); }
	public KW_PRIVILEGES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PRIVILEGES, 0); }
	public KW_PROPERTIES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PROPERTIES, 0); }
	public KW_SECOND(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SECOND, 0); }
	public KW_SECONDS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SECONDS, 0); }
	public KW_SUBSTRING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SUBSTRING, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SYSTEM, 0); }
	public KW_TRY_CAST(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TRY_CAST, 0); }
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_USER, 0); }
	public KW_VIEWS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_VIEWS, 0); }
	public KW_YEAR(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_YEAR, 0); }
	public KW_ORC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ORC, 0); }
	public KW_CURRENT_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CURRENT_TIMESTAMP, 0); }
	public KW_CURRENT_USER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CURRENT_USER, 0); }
	public KW_EXTRACT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_EXTRACT, 0); }
	public KW_KEY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_KEY, 0); }
	public KW_LOCALTIME(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LOCALTIME, 0); }
	public KW_SHUTDOWN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SHUTDOWN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_nonReserved; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterNonReserved) {
			listener.enterNonReserved(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitNonReserved) {
			listener.exitNonReserved(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitNonReserved) {
			return visitor.visitNonReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


