// Generated from /Users/shuangxu/Documents/workspace/dt-sql-parser/src/grammar/impala/ImpalaSqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly KW_INVALIDATE = 105;
	public static readonly KW_IS = 106;
	public static readonly KW_JOIN = 107;
	public static readonly KW_KEY = 108;
	public static readonly KW_KUDU = 109;
	public static readonly KW_LAST = 110;
	public static readonly KW_LATERAL = 111;
	public static readonly KW_LEFT = 112;
	public static readonly KW_LIKE = 113;
	public static readonly KW_LIMIT = 114;
	public static readonly KW_LINES = 115;
	public static readonly KW_LOAD = 116;
	public static readonly KW_LOCALTIME = 117;
	public static readonly KW_LOCALTIMESTAMP = 118;
	public static readonly KW_METADATA = 119;
	public static readonly KW_MAP = 120;
	public static readonly KW_MINUTE = 121;
	public static readonly KW_MINUTES = 122;
	public static readonly KW_MONTH = 123;
	public static readonly KW_MONTHS = 124;
	public static readonly KW_MERGE_FN = 125;
	public static readonly KW_NFC = 126;
	public static readonly KW_NFD = 127;
	public static readonly KW_NFKC = 128;
	public static readonly KW_NFKD = 129;
	public static readonly KW_NORMALIZE = 130;
	public static readonly KW_NOT = 131;
	public static readonly KW_NULL = 132;
	public static readonly KW_NULLS = 133;
	public static readonly KW_OFFSET = 134;
	public static readonly KW_ON = 135;
	public static readonly KW_OPTION = 136;
	public static readonly KW_OR = 137;
	public static readonly KW_ORDER = 138;
	public static readonly KW_ORDINALITY = 139;
	public static readonly KW_OUTER = 140;
	public static readonly KW_OWNER = 141;
	public static readonly KW_OVER = 142;
	public static readonly KW_OVERWRITE = 143;
	public static readonly KW_PARTITION = 144;
	public static readonly KW_PARTITIONS = 145;
	public static readonly KW_PARQUET = 146;
	public static readonly KW_POSITION = 147;
	public static readonly KW_PRECEDING = 148;
	public static readonly KW_PRIMARY = 149;
	public static readonly KW_REPLICATION = 150;
	public static readonly KW_PRIVILEGES = 151;
	public static readonly KW_PROPERTIES = 152;
	public static readonly KW_RANGE = 153;
	public static readonly KW_RECOVER = 154;
	public static readonly KW_RENAME = 155;
	public static readonly KW_REPEATABLE = 156;
	public static readonly KW_REPLACE = 157;
	public static readonly KW_RESTRICT = 158;
	public static readonly KW_RETURNS = 159;
	public static readonly KW_REVOKE = 160;
	public static readonly KW_REFRESH = 161;
	public static readonly KW_REGEXP = 162;
	public static readonly KW_RLIKE = 163;
	public static readonly KW_RIGHT = 164;
	public static readonly KW_ROLE = 165;
	public static readonly KW_ROLES = 166;
	public static readonly KW_ROW = 167;
	public static readonly KW_ROWS = 168;
	public static readonly KW_SCHEMA = 169;
	public static readonly KW_SCHEMAS = 170;
	public static readonly KW_SECOND = 171;
	public static readonly KW_SECONDS = 172;
	public static readonly KW_SELECT = 173;
	public static readonly KW_SERDEPROPERTIES = 174;
	public static readonly KW_SET = 175;
	public static readonly KW_SEMI = 176;
	public static readonly KW_SERVER = 177;
	public static readonly KW_SHOW = 178;
	public static readonly KW_SHUTDOWN = 179;
	public static readonly KW_SOME = 180;
	public static readonly KW_STATS = 181;
	public static readonly KW_STRUCT = 182;
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
	public static readonly KW_URI = 208;
	public static readonly KW_VALUE = 209;
	public static readonly KW_VALUES = 210;
	public static readonly KW_VIEW = 211;
	public static readonly KW_VIEWS = 212;
	public static readonly KW_WHEN = 213;
	public static readonly KW_WHERE = 214;
	public static readonly KW_WITH = 215;
	public static readonly KW_YEAR = 216;
	public static readonly KW_YEARS = 217;
	public static readonly KW_TEXTFILE = 218;
	public static readonly KW_ORC = 219;
	public static readonly KW_AVRO = 220;
	public static readonly KW_SEQUENCEFILE = 221;
	public static readonly KW_RCFILE = 222;
	public static readonly KW_REFERENCES = 223;
	public static readonly KW_NOVALIDATE = 224;
	public static readonly KW_RELY = 225;
	public static readonly STATS_NUMDVS = 226;
	public static readonly STATS_NUMNULLS = 227;
	public static readonly STATS_AVGSIZE = 228;
	public static readonly STATS_MAXSIZE = 229;
	public static readonly EQ = 230;
	public static readonly NEQ = 231;
	public static readonly LT = 232;
	public static readonly LTE = 233;
	public static readonly GT = 234;
	public static readonly GTE = 235;
	public static readonly PLUS = 236;
	public static readonly MINUS = 237;
	public static readonly ASTERISK = 238;
	public static readonly SLASH = 239;
	public static readonly PERCENT = 240;
	public static readonly CONCAT = 241;
	public static readonly DOT = 242;
	public static readonly SEMICOLON = 243;
	public static readonly COMMA = 244;
	public static readonly COLON = 245;
	public static readonly LPAREN = 246;
	public static readonly RPAREN = 247;
	public static readonly LSQUARE = 248;
	public static readonly RSQUARE = 249;
	public static readonly LCURLY = 250;
	public static readonly RCURLY = 251;
	public static readonly BITWISEOR = 252;
	public static readonly QUESTION = 253;
	public static readonly RIGHT_ARROW = 254;
	public static readonly STRING = 255;
	public static readonly UNICODE_STRING = 256;
	public static readonly BINARY_LITERAL = 257;
	public static readonly INTEGER_VALUE = 258;
	public static readonly DECIMAL_VALUE = 259;
	public static readonly DOUBLE_VALUE = 260;
	public static readonly IDENTIFIER = 261;
	public static readonly DIGIT_IDENTIFIER = 262;
	public static readonly QUOTED_IDENTIFIER = 263;
	public static readonly BACKQUOTED_IDENTIFIER = 264;
	public static readonly TIME_WITH_TIME_ZONE = 265;
	public static readonly TIMESTAMP_WITH_TIME_ZONE = 266;
	public static readonly DOUBLE_PRECISION = 267;
	public static readonly SIMPLE_COMMENT = 268;
	public static readonly BRACKETED_COMMENT = 269;
	public static readonly WS = 270;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_statementDefault = 2;
	public static readonly RULE_use = 3;
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
	public static readonly RULE_alterSchema = 14;
	public static readonly RULE_alterStatsKey = 15;
	public static readonly RULE_alterPartitionCache = 16;
	public static readonly RULE_editColumnDefine = 17;
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
	public static readonly RULE_truncateTable = 32;
	public static readonly RULE_describeStatement = 33;
	public static readonly RULE_computeStatement = 34;
	public static readonly RULE_computeStats = 35;
	public static readonly RULE_computeIncrementalStats = 36;
	public static readonly RULE_dropStatement = 37;
	public static readonly RULE_dropSchema = 38;
	public static readonly RULE_dropViewOrTable = 39;
	public static readonly RULE_dropIncrementalStats = 40;
	public static readonly RULE_dropFunction = 41;
	public static readonly RULE_dropRole = 42;
	public static readonly RULE_grantStatement = 43;
	public static readonly RULE_grantRole = 44;
	public static readonly RULE_grant = 45;
	public static readonly RULE_revokeStatement = 46;
	public static readonly RULE_revokeRole = 47;
	public static readonly RULE_revoke = 48;
	public static readonly RULE_insertStatement = 49;
	public static readonly RULE_deleteStatement = 50;
	public static readonly RULE_delete = 51;
	public static readonly RULE_deleteTableRef = 52;
	public static readonly RULE_updateStatement = 53;
	public static readonly RULE_upsertStatement = 54;
	public static readonly RULE_showStatement = 55;
	public static readonly RULE_showSchemas = 56;
	public static readonly RULE_showTables = 57;
	public static readonly RULE_showFunctions = 58;
	public static readonly RULE_showCreateViewOrTable = 59;
	public static readonly RULE_showColumnOrTableStats = 60;
	public static readonly RULE_showPartitions = 61;
	public static readonly RULE_showFiles = 62;
	public static readonly RULE_showRoles = 63;
	public static readonly RULE_showRoleGrant = 64;
	public static readonly RULE_showGrant = 65;
	public static readonly RULE_addComments = 66;
	public static readonly RULE_explain = 67;
	public static readonly RULE_setSession = 68;
	public static readonly RULE_shutdown = 69;
	public static readonly RULE_invalidateMeta = 70;
	public static readonly RULE_loadData = 71;
	public static readonly RULE_refreshStatement = 72;
	public static readonly RULE_refreshMeta = 73;
	public static readonly RULE_refreshAuth = 74;
	public static readonly RULE_refreshFunction = 75;
	public static readonly RULE_ifExists = 76;
	public static readonly RULE_ifNotExists = 77;
	public static readonly RULE_createCommonItem = 78;
	public static readonly RULE_assignmentList = 79;
	public static readonly RULE_assignmentItem = 80;
	public static readonly RULE_viewColumns = 81;
	public static readonly RULE_query = 82;
	public static readonly RULE_with = 83;
	public static readonly RULE_constraintSpecification = 84;
	public static readonly RULE_foreignKeySpecification = 85;
	public static readonly RULE_columnDefinition = 86;
	public static readonly RULE_kuduTableElement = 87;
	public static readonly RULE_kuduColumnDefinition = 88;
	public static readonly RULE_columnSpecWithKudu = 89;
	public static readonly RULE_kuduAttributes = 90;
	public static readonly RULE_kuduStorageAttr = 91;
	public static readonly RULE_statsKey = 92;
	public static readonly RULE_fileFormat = 93;
	public static readonly RULE_kuduPartitionClause = 94;
	public static readonly RULE_hashClause = 95;
	public static readonly RULE_rangeClause = 96;
	public static readonly RULE_kuduPartitionSpec = 97;
	public static readonly RULE_cacheSpec = 98;
	public static readonly RULE_rangeOperator = 99;
	public static readonly RULE_partitionCol = 100;
	public static readonly RULE_likeClause = 101;
	public static readonly RULE_properties = 102;
	public static readonly RULE_partitionedBy = 103;
	public static readonly RULE_sortedBy = 104;
	public static readonly RULE_rowFormat = 105;
	public static readonly RULE_property = 106;
	public static readonly RULE_queryNoWith = 107;
	public static readonly RULE_queryTerm = 108;
	public static readonly RULE_queryPrimary = 109;
	public static readonly RULE_sortItem = 110;
	public static readonly RULE_querySpecification = 111;
	public static readonly RULE_groupBy = 112;
	public static readonly RULE_groupingElement = 113;
	public static readonly RULE_groupingSet = 114;
	public static readonly RULE_namedQuery = 115;
	public static readonly RULE_setQuantifier = 116;
	public static readonly RULE_selectItem = 117;
	public static readonly RULE_relation = 118;
	public static readonly RULE_joinType = 119;
	public static readonly RULE_joinCriteria = 120;
	public static readonly RULE_sampledRelation = 121;
	public static readonly RULE_sampleType = 122;
	public static readonly RULE_aliasedRelation = 123;
	public static readonly RULE_columnAliases = 124;
	public static readonly RULE_relationPrimary = 125;
	public static readonly RULE_expression = 126;
	public static readonly RULE_booleanExpression = 127;
	public static readonly RULE_predicate = 128;
	public static readonly RULE_valueExpression = 129;
	public static readonly RULE_primaryExpression = 130;
	public static readonly RULE_stringLiteral = 131;
	public static readonly RULE_comparisonOperator = 132;
	public static readonly RULE_comparisonQuantifier = 133;
	public static readonly RULE_booleanValue = 134;
	public static readonly RULE_interval = 135;
	public static readonly RULE_intervalField = 136;
	public static readonly RULE_normalForm = 137;
	public static readonly RULE_type = 138;
	public static readonly RULE_typeParameter = 139;
	public static readonly RULE_baseType = 140;
	public static readonly RULE_whenClause = 141;
	public static readonly RULE_filter = 142;
	public static readonly RULE_over = 143;
	public static readonly RULE_windowFrame = 144;
	public static readonly RULE_frameBound = 145;
	public static readonly RULE_pathElement = 146;
	public static readonly RULE_pathSpecification = 147;
	public static readonly RULE_privilege = 148;
	public static readonly RULE_objectType = 149;
	public static readonly RULE_qualifiedName = 150;
	public static readonly RULE_principal = 151;
	public static readonly RULE_identifier = 152;
	public static readonly RULE_number = 153;
	public static readonly RULE_nonReserved = 154;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "statementDefault", "use", "createStatement", 
		"createTableSelect", "createTableLike", "createKuduTableAsSelect", "createView", 
		"createSchema", "createRole", "createAggregateFunction", "createFunction", 
		"alterStatement", "alterSchema", "alterStatsKey", "alterPartitionCache", 
		"editColumnDefine", "alterDropSingleColumn", "alterTableOwner", "replaceOrAddColumns", 
		"addSingleColumn", "alterTableNonKuduOrKuduOnly", "addPartitionByRangeOrValue", 
		"alterFormat", "recoverPartitions", "dropPartitionByRangeOrValue", "alterView", 
		"renameView", "alterViewOwner", "renameTable", "alterUnSetOrSetViewTblproperties", 
		"truncateTable", "describeStatement", "computeStatement", "computeStats", 
		"computeIncrementalStats", "dropStatement", "dropSchema", "dropViewOrTable", 
		"dropIncrementalStats", "dropFunction", "dropRole", "grantStatement", 
		"grantRole", "grant", "revokeStatement", "revokeRole", "revoke", "insertStatement", 
		"deleteStatement", "delete", "deleteTableRef", "updateStatement", "upsertStatement", 
		"showStatement", "showSchemas", "showTables", "showFunctions", "showCreateViewOrTable", 
		"showColumnOrTableStats", "showPartitions", "showFiles", "showRoles", 
		"showRoleGrant", "showGrant", "addComments", "explain", "setSession", 
		"shutdown", "invalidateMeta", "loadData", "refreshStatement", "refreshMeta", 
		"refreshAuth", "refreshFunction", "ifExists", "ifNotExists", "createCommonItem", 
		"assignmentList", "assignmentItem", "viewColumns", "query", "with", "constraintSpecification", 
		"foreignKeySpecification", "columnDefinition", "kuduTableElement", "kuduColumnDefinition", 
		"columnSpecWithKudu", "kuduAttributes", "kuduStorageAttr", "statsKey", 
		"fileFormat", "kuduPartitionClause", "hashClause", "rangeClause", "kuduPartitionSpec", 
		"cacheSpec", "rangeOperator", "partitionCol", "likeClause", "properties", 
		"partitionedBy", "sortedBy", "rowFormat", "property", "queryNoWith", "queryTerm", 
		"queryPrimary", "sortItem", "querySpecification", "groupBy", "groupingElement", 
		"groupingSet", "namedQuery", "setQuantifier", "selectItem", "relation", 
		"joinType", "joinCriteria", "sampledRelation", "sampleType", "aliasedRelation", 
		"columnAliases", "relationPrimary", "expression", "booleanExpression", 
		"predicate", "valueExpression", "primaryExpression", "stringLiteral", 
		"comparisonOperator", "comparisonQuantifier", "booleanValue", "interval", 
		"intervalField", "normalForm", "type", "typeParameter", "baseType", "whenClause", 
		"filter", "over", "windowFrame", "frameBound", "pathElement", "pathSpecification", 
		"privilege", "objectType", "qualifiedName", "principal", "identifier", 
		"number", "nonReserved",
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
		"'INTERMEDIATE'", "'INTO'", "'INIT_FN'", "'INVALIDATE'", "'IS'", "'JOIN'", 
		"'KEY'", "'KUDU'", "'LAST'", "'LATERAL'", "'LEFT'", "'LIKE'", "'LIMIT'", 
		"'LINES'", "'LOAD'", "'LOCALTIME'", "'LOCALTIMESTAMP'", "'METADATA'", 
		"'MAP'", "'MINUTE'", "'MINUTES'", "'MONTH'", "'MONTHS'", "'MERGE_FN'", 
		"'NFC'", "'NFD'", "'NFKC'", "'NFKD'", "'NORMALIZE'", "'NOT'", "'NULL'", 
		"'NULLS'", "'OFFSET'", "'ON'", "'OPTION'", "'OR'", "'ORDER'", "'ORDINALITY'", 
		"'OUTER'", "'OWNER'", "'OVER'", "'OVERWRITE'", "'PARTITION'", "'PARTITIONS'", 
		"'PARQUET'", "'POSITION'", "'PRECEDING'", "'PRIMARY'", "'REPLICATION'", 
		"'PRIVILEGES'", "'PROPERTIES'", "'RANGE'", "'RECOVER'", "'RENAME'", "'REPEATABLE'", 
		"'REPLACE'", "'RESTRICT'", "'RETURNS'", "'REVOKE'", "'REFRESH'", "'REGEXP'", 
		"'RLIKE'", "'RIGHT'", "'ROLE'", "'ROLES'", "'ROW'", "'ROWS'", "'SCHEMA'", 
		"'SCHEMAS'", "'SECOND'", "'SECONDS'", "'SELECT'", "'SERDEPROPERTIES'", 
		"'SET'", "'SEMI'", "'SERVER'", "'SHOW'", "'SHUTDOWN'", "'SOME'", "'STATS'", 
		"'STRUCT'", "'STRAIGHT_JOIN'", "'SUBSTRING'", "'SYSTEM'", "'SYMBOL'", 
		"'SERIALIZE_FN'", "'TABLE'", "'TABLES'", "'TABLESAMPLE'", "'TERMINATED '", 
		"'THEN'", "'TO'", "'TRUE'", "'TRY_CAST'", "'TRUNCATE'", "'UNCACHED'", 
		"'UESCAPE'", "'UNBOUNDED'", "'UNION'", "'UNNEST'", "'UNSET'", "'USE'", 
		"'USER'", "'USING'", "'UPDATE_FN'", "'UPSERT'", "'URI'", "'VALUE'", "'VALUES'", 
		"'VIEW'", "'VIEWS'", "'WHEN'", "'WHERE'", "'WITH'", "'YEAR'", "'YEARS'", 
		"'TEXTFILE'", "'ORC'", "'AVRO'", "'SEQUENCEFILE'", "'RCFILE'", "'REFERENCES'", 
		"'NOVALIDATE'", "'RELY'", "''UMDVS''", "''UMNULLS''", "''VGSIZE''", "''AXSIZE''", 
		"'='", undefined, "'<'", "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", 
		"'%'", "'||'", "'.'", "';'", "','", "':'", "'('", "')'", "'['", "']'", 
		"'{'", "'}'", "'|'", "'?'", "'->'",
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
		"KW_INTERVAL", "KW_INTERMEDIATE", "KW_INTO", "KW_INIT_FN", "KW_INVALIDATE", 
		"KW_IS", "KW_JOIN", "KW_KEY", "KW_KUDU", "KW_LAST", "KW_LATERAL", "KW_LEFT", 
		"KW_LIKE", "KW_LIMIT", "KW_LINES", "KW_LOAD", "KW_LOCALTIME", "KW_LOCALTIMESTAMP", 
		"KW_METADATA", "KW_MAP", "KW_MINUTE", "KW_MINUTES", "KW_MONTH", "KW_MONTHS", 
		"KW_MERGE_FN", "KW_NFC", "KW_NFD", "KW_NFKC", "KW_NFKD", "KW_NORMALIZE", 
		"KW_NOT", "KW_NULL", "KW_NULLS", "KW_OFFSET", "KW_ON", "KW_OPTION", "KW_OR", 
		"KW_ORDER", "KW_ORDINALITY", "KW_OUTER", "KW_OWNER", "KW_OVER", "KW_OVERWRITE", 
		"KW_PARTITION", "KW_PARTITIONS", "KW_PARQUET", "KW_POSITION", "KW_PRECEDING", 
		"KW_PRIMARY", "KW_REPLICATION", "KW_PRIVILEGES", "KW_PROPERTIES", "KW_RANGE", 
		"KW_RECOVER", "KW_RENAME", "KW_REPEATABLE", "KW_REPLACE", "KW_RESTRICT", 
		"KW_RETURNS", "KW_REVOKE", "KW_REFRESH", "KW_REGEXP", "KW_RLIKE", "KW_RIGHT", 
		"KW_ROLE", "KW_ROLES", "KW_ROW", "KW_ROWS", "KW_SCHEMA", "KW_SCHEMAS", 
		"KW_SECOND", "KW_SECONDS", "KW_SELECT", "KW_SERDEPROPERTIES", "KW_SET", 
		"KW_SEMI", "KW_SERVER", "KW_SHOW", "KW_SHUTDOWN", "KW_SOME", "KW_STATS", 
		"KW_STRUCT", "KW_STRAIGHT_JOIN", "KW_SUBSTRING", "KW_SYSTEM", "KW_SYMBOL", 
		"KW_SERIALIZE_FN", "KW_TABLE", "KW_TABLES", "KW_TABLESAMPLE", "KW_TERMINATED", 
		"KW_THEN", "KW_TO", "KW_TRUE", "KW_TRY_CAST", "KW_TRUNCATE", "KW_UNCACHED", 
		"KW_UESCAPE", "KW_UNBOUNDED", "KW_UNION", "KW_UNNEST", "KW_UNSET", "KW_USE", 
		"KW_USER", "KW_USING", "KW_UPDATE_FN", "KW_UPSERT", "KW_URI", "KW_VALUE", 
		"KW_VALUES", "KW_VIEW", "KW_VIEWS", "KW_WHEN", "KW_WHERE", "KW_WITH", 
		"KW_YEAR", "KW_YEARS", "KW_TEXTFILE", "KW_ORC", "KW_AVRO", "KW_SEQUENCEFILE", 
		"KW_RCFILE", "KW_REFERENCES", "KW_NOVALIDATE", "KW_RELY", "STATS_NUMDVS", 
		"STATS_NUMNULLS", "STATS_AVGSIZE", "STATS_MAXSIZE", "EQ", "NEQ", "LT", 
		"LTE", "GT", "GTE", "PLUS", "MINUS", "ASTERISK", "SLASH", "PERCENT", "CONCAT", 
		"DOT", "SEMICOLON", "COMMA", "COLON", "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", 
		"LCURLY", "RCURLY", "BITWISEOR", "QUESTION", "RIGHT_ARROW", "STRING", 
		"UNICODE_STRING", "BINARY_LITERAL", "INTEGER_VALUE", "DECIMAL_VALUE", 
		"DOUBLE_VALUE", "IDENTIFIER", "DIGIT_IDENTIFIER", "QUOTED_IDENTIFIER", 
		"BACKQUOTED_IDENTIFIER", "TIME_WITH_TIME_ZONE", "TIMESTAMP_WITH_TIME_ZONE", 
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParser.KW_ALTER || _la === ImpalaSqlParser.KW_COMMENT || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ImpalaSqlParser.KW_COMPUTE - 36)) | (1 << (ImpalaSqlParser.KW_CREATE - 36)) | (1 << (ImpalaSqlParser.KW_DELETE - 36)) | (1 << (ImpalaSqlParser.KW_UPDATE - 36)) | (1 << (ImpalaSqlParser.KW_DESCRIBE - 36)) | (1 << (ImpalaSqlParser.KW_DROP - 36)) | (1 << (ImpalaSqlParser.KW_EXPLAIN - 36)))) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & ((1 << (ImpalaSqlParser.KW_GRANT - 86)) | (1 << (ImpalaSqlParser.KW_INSERT - 86)) | (1 << (ImpalaSqlParser.KW_INVALIDATE - 86)) | (1 << (ImpalaSqlParser.KW_LOAD - 86)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (ImpalaSqlParser.KW_REVOKE - 160)) | (1 << (ImpalaSqlParser.KW_REFRESH - 160)) | (1 << (ImpalaSqlParser.KW_SELECT - 160)) | (1 << (ImpalaSqlParser.KW_SET - 160)) | (1 << (ImpalaSqlParser.KW_SHOW - 160)) | (1 << (ImpalaSqlParser.KW_TABLE - 160)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (ImpalaSqlParser.KW_TRUNCATE - 196)) | (1 << (ImpalaSqlParser.KW_USE - 196)) | (1 << (ImpalaSqlParser.KW_UPSERT - 196)) | (1 << (ImpalaSqlParser.KW_VALUES - 196)) | (1 << (ImpalaSqlParser.KW_WITH - 196)))) !== 0) || _la === ImpalaSqlParser.COLON || _la === ImpalaSqlParser.LPAREN) {
				{
				{
				this.state = 310;
				this.statement();
				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.SEMICOLON) {
					{
					this.state = 311;
					this.match(ImpalaSqlParser.SEMICOLON);
					}
				}

				}
				}
				this.state = 318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 319;
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
			this.state = 343;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 321;
				this.statementDefault();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 322;
				this.use();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 323;
				this.createStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 324;
				this.alterStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 325;
				this.truncateTable();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 326;
				this.describeStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 327;
				this.computeStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 328;
				this.dropStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 329;
				this.grantStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 330;
				this.revokeStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 331;
				this.insertStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 332;
				this.deleteStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 333;
				this.updateStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 334;
				this.upsertStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 335;
				this.showStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 336;
				this.addComments();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 337;
				this.explain();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 338;
				this.setSession();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 339;
				this.shutdown();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 340;
				this.invalidateMeta();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 341;
				this.loadData();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 342;
				this.refreshStatement();
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
	public statementDefault(): StatementDefaultContext {
		let _localctx: StatementDefaultContext = new StatementDefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ImpalaSqlParser.RULE_statementDefault);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.query();
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
	public use(): UseContext {
		let _localctx: UseContext = new UseContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ImpalaSqlParser.RULE_use);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.match(ImpalaSqlParser.KW_USE);
			this.state = 348;
			_localctx._schema = this.identifier();
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
		this.enterRule(_localctx, 8, ImpalaSqlParser.RULE_createStatement);
		try {
			this.state = 358;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 350;
				this.createSchema();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 351;
				this.createRole();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 352;
				this.createAggregateFunction();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 353;
				this.createFunction();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 354;
				this.createView();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 355;
				this.createKuduTableAsSelect();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 356;
				this.createTableLike();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 357;
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
		this.enterRule(_localctx, 10, ImpalaSqlParser.RULE_createTableSelect);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.match(ImpalaSqlParser.KW_CREATE);
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_EXTERNAL) {
				{
				this.state = 361;
				this.match(ImpalaSqlParser.KW_EXTERNAL);
				}
			}

			this.state = 364;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 366;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 365;
				this.ifNotExists();
				}
				break;
			}
			this.state = 368;
			_localctx._tblName = this.qualifiedName();
			this.state = 384;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 369;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 370;
				this.columnDefinition();
				this.state = 375;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 371;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 372;
						this.columnDefinition();
						}
						}
					}
					this.state = 377;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				}
				this.state = 380;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.COMMA) {
					{
					this.state = 378;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 379;
					this.constraintSpecification();
					}
				}

				this.state = 382;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;
			}
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITIONED) {
				{
				this.state = 386;
				this.match(ImpalaSqlParser.KW_PARTITIONED);
				this.state = 387;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 390;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 388;
					this.partitionedBy();
					}
					break;

				case 2:
					{
					this.state = 389;
					this.columnAliases();
					}
					break;
				}
				}
			}

			this.state = 394;
			this.createCommonItem();
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_AS) {
				{
				this.state = 395;
				this.match(ImpalaSqlParser.KW_AS);
				this.state = 396;
				this.query();
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
		this.enterRule(_localctx, 12, ImpalaSqlParser.RULE_createTableLike);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
			this.match(ImpalaSqlParser.KW_CREATE);
			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_EXTERNAL) {
				{
				this.state = 400;
				this.match(ImpalaSqlParser.KW_EXTERNAL);
				}
			}

			this.state = 403;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 405;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 404;
				this.ifNotExists();
				}
				break;
			}
			this.state = 407;
			_localctx._tblName = this.qualifiedName();
			this.state = 408;
			this.match(ImpalaSqlParser.KW_LIKE);
			this.state = 412;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 409;
				_localctx._likeTableName = this.qualifiedName();
				}
				break;

			case 2:
				{
				this.state = 410;
				this.match(ImpalaSqlParser.KW_PARQUET);
				this.state = 411;
				_localctx._parquet = this.stringLiteral();
				}
				break;
			}
			this.state = 417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITIONED) {
				{
				this.state = 414;
				this.match(ImpalaSqlParser.KW_PARTITIONED);
				this.state = 415;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 416;
				this.partitionedBy();
				}
			}

			this.state = 419;
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
		this.enterRule(_localctx, 14, ImpalaSqlParser.RULE_createKuduTableAsSelect);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this.match(ImpalaSqlParser.KW_CREATE);
			this.state = 423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_EXTERNAL) {
				{
				this.state = 422;
				this.match(ImpalaSqlParser.KW_EXTERNAL);
				}
			}

			this.state = 425;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 427;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 426;
				this.ifNotExists();
				}
				break;
			}
			this.state = 429;
			_localctx._tblName = this.qualifiedName();
			this.state = 447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.LPAREN) {
				{
				this.state = 430;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 431;
				this.kuduTableElement();
				this.state = 436;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 432;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 433;
						this.kuduTableElement();
						}
						}
					}
					this.state = 438;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				}
				this.state = 443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.COMMA) {
					{
					this.state = 439;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 440;
					this.match(ImpalaSqlParser.KW_PRIMARY);
					this.state = 441;
					this.match(ImpalaSqlParser.KW_KEY);
					this.state = 442;
					this.columnAliases();
					}
				}

				this.state = 445;
				this.match(ImpalaSqlParser.RPAREN);
				}
			}

			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PRIMARY) {
				{
				this.state = 449;
				this.match(ImpalaSqlParser.KW_PRIMARY);
				this.state = 450;
				this.match(ImpalaSqlParser.KW_KEY);
				this.state = 452;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.LPAREN) {
					{
					this.state = 451;
					this.columnAliases();
					}
				}

				}
			}

			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 456;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 457;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 458;
				this.kuduPartitionClause();
				}
			}

			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_COMMENT) {
				{
				this.state = 461;
				this.match(ImpalaSqlParser.KW_COMMENT);
				this.state = 462;
				this.stringLiteral();
				}
			}

			this.state = 465;
			this.match(ImpalaSqlParser.KW_STORED);
			this.state = 466;
			this.match(ImpalaSqlParser.KW_AS);
			this.state = 467;
			this.match(ImpalaSqlParser.KW_KUDU);
			this.state = 470;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_TBLPROPERTIES) {
				{
				this.state = 468;
				this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
				this.state = 469;
				_localctx._tblProp = this.properties();
				}
			}

			this.state = 474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_AS) {
				{
				this.state = 472;
				this.match(ImpalaSqlParser.KW_AS);
				this.state = 473;
				this.query();
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
		this.enterRule(_localctx, 16, ImpalaSqlParser.RULE_createView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
			this.match(ImpalaSqlParser.KW_CREATE);
			this.state = 477;
			this.match(ImpalaSqlParser.KW_VIEW);
			this.state = 479;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 478;
				this.ifNotExists();
				}
				break;
			}
			this.state = 481;
			this.qualifiedName();
			this.state = 483;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.LPAREN) {
				{
				this.state = 482;
				this.viewColumns();
				}
			}

			this.state = 487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_COMMENT) {
				{
				this.state = 485;
				this.match(ImpalaSqlParser.KW_COMMENT);
				this.state = 486;
				this.stringLiteral();
				}
			}

			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_TBLPROPERTIES) {
				{
				this.state = 489;
				this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
				this.state = 490;
				_localctx._tblProp = this.properties();
				}
			}

			this.state = 493;
			this.match(ImpalaSqlParser.KW_AS);
			this.state = 494;
			this.query();
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
		this.enterRule(_localctx, 18, ImpalaSqlParser.RULE_createSchema);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 496;
			this.match(ImpalaSqlParser.KW_CREATE);
			this.state = 497;
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
			this.state = 499;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 498;
				this.ifNotExists();
				}
				break;
			}
			this.state = 501;
			this.qualifiedName();
			this.state = 504;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 502;
				this.match(ImpalaSqlParser.KW_COMMENT);
				this.state = 503;
				_localctx._comment = this.stringLiteral();
				}
				break;
			}
			this.state = 508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_LOCATION) {
				{
				this.state = 506;
				this.match(ImpalaSqlParser.KW_LOCATION);
				this.state = 507;
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
		this.enterRule(_localctx, 20, ImpalaSqlParser.RULE_createRole);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			this.match(ImpalaSqlParser.KW_CREATE);
			this.state = 511;
			this.match(ImpalaSqlParser.KW_ROLE);
			this.state = 512;
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
		this.enterRule(_localctx, 22, ImpalaSqlParser.RULE_createAggregateFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			this.match(ImpalaSqlParser.KW_CREATE);
			this.state = 516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_AGGREGATE) {
				{
				this.state = 515;
				this.match(ImpalaSqlParser.KW_AGGREGATE);
				}
			}

			this.state = 518;
			this.match(ImpalaSqlParser.KW_FUNCTION);
			this.state = 520;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 519;
				this.ifNotExists();
				}
				break;
			}
			this.state = 522;
			this.qualifiedName();
			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.LPAREN) {
				{
				this.state = 523;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 532;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParser.KW_ADD) | (1 << ImpalaSqlParser.KW_ALL) | (1 << ImpalaSqlParser.KW_ANY) | (1 << ImpalaSqlParser.KW_ARRAY) | (1 << ImpalaSqlParser.KW_ASC) | (1 << ImpalaSqlParser.KW_AT) | (1 << ImpalaSqlParser.KW_BERNOULLI) | (1 << ImpalaSqlParser.KW_CASCADE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ImpalaSqlParser.KW_COLUMN - 32)) | (1 << (ImpalaSqlParser.KW_COLUMNS - 32)) | (1 << (ImpalaSqlParser.KW_COMMENT - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT - 32)) | (1 << (ImpalaSqlParser.KW_DATA - 32)) | (1 << (ImpalaSqlParser.KW_DATABASE - 32)) | (1 << (ImpalaSqlParser.KW_DATABASES - 32)) | (1 << (ImpalaSqlParser.KW_DAY - 32)) | (1 << (ImpalaSqlParser.KW_DAYS - 32)) | (1 << (ImpalaSqlParser.KW_DEFAULT - 32)) | (1 << (ImpalaSqlParser.KW_DESC - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (ImpalaSqlParser.KW_EXCLUDING - 65)) | (1 << (ImpalaSqlParser.KW_EXPLAIN - 65)) | (1 << (ImpalaSqlParser.KW_FILTER - 65)) | (1 << (ImpalaSqlParser.KW_FIRST - 65)) | (1 << (ImpalaSqlParser.KW_FOLLOWING - 65)) | (1 << (ImpalaSqlParser.KW_FORMAT - 65)) | (1 << (ImpalaSqlParser.KW_FUNCTIONS - 65)) | (1 << (ImpalaSqlParser.KW_GRANT - 65)) | (1 << (ImpalaSqlParser.KW_HOUR - 65)) | (1 << (ImpalaSqlParser.KW_IF - 65)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 65)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (ImpalaSqlParser.KW_INTERVAL - 101)) | (1 << (ImpalaSqlParser.KW_LAST - 101)) | (1 << (ImpalaSqlParser.KW_LATERAL - 101)) | (1 << (ImpalaSqlParser.KW_LIMIT - 101)) | (1 << (ImpalaSqlParser.KW_MAP - 101)) | (1 << (ImpalaSqlParser.KW_MINUTE - 101)) | (1 << (ImpalaSqlParser.KW_MONTH - 101)) | (1 << (ImpalaSqlParser.KW_NFC - 101)) | (1 << (ImpalaSqlParser.KW_NFD - 101)) | (1 << (ImpalaSqlParser.KW_NFKC - 101)) | (1 << (ImpalaSqlParser.KW_NFKD - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (ImpalaSqlParser.KW_NULLS - 133)) | (1 << (ImpalaSqlParser.KW_OFFSET - 133)) | (1 << (ImpalaSqlParser.KW_OPTION - 133)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 133)) | (1 << (ImpalaSqlParser.KW_OVER - 133)) | (1 << (ImpalaSqlParser.KW_PARTITION - 133)) | (1 << (ImpalaSqlParser.KW_PARTITIONS - 133)) | (1 << (ImpalaSqlParser.KW_PARQUET - 133)) | (1 << (ImpalaSqlParser.KW_POSITION - 133)) | (1 << (ImpalaSqlParser.KW_PRECEDING - 133)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 133)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 133)) | (1 << (ImpalaSqlParser.KW_RANGE - 133)) | (1 << (ImpalaSqlParser.KW_RENAME - 133)) | (1 << (ImpalaSqlParser.KW_REPEATABLE - 133)) | (1 << (ImpalaSqlParser.KW_REPLACE - 133)) | (1 << (ImpalaSqlParser.KW_RESTRICT - 133)) | (1 << (ImpalaSqlParser.KW_REVOKE - 133)))) !== 0) || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & ((1 << (ImpalaSqlParser.KW_ROLE - 165)) | (1 << (ImpalaSqlParser.KW_ROLES - 165)) | (1 << (ImpalaSqlParser.KW_ROW - 165)) | (1 << (ImpalaSqlParser.KW_ROWS - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMA - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMAS - 165)) | (1 << (ImpalaSqlParser.KW_SECOND - 165)) | (1 << (ImpalaSqlParser.KW_SECONDS - 165)) | (1 << (ImpalaSqlParser.KW_SET - 165)) | (1 << (ImpalaSqlParser.KW_SHOW - 165)) | (1 << (ImpalaSqlParser.KW_SOME - 165)) | (1 << (ImpalaSqlParser.KW_STATS - 165)) | (1 << (ImpalaSqlParser.KW_STRUCT - 165)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 165)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 165)) | (1 << (ImpalaSqlParser.KW_TABLES - 165)) | (1 << (ImpalaSqlParser.KW_TABLESAMPLE - 165)) | (1 << (ImpalaSqlParser.KW_TO - 165)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 165)) | (1 << (ImpalaSqlParser.KW_TRUNCATE - 165)))) !== 0) || ((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & ((1 << (ImpalaSqlParser.KW_UNBOUNDED - 199)) | (1 << (ImpalaSqlParser.KW_USE - 199)) | (1 << (ImpalaSqlParser.KW_USER - 199)) | (1 << (ImpalaSqlParser.KW_VIEW - 199)) | (1 << (ImpalaSqlParser.KW_VIEWS - 199)) | (1 << (ImpalaSqlParser.KW_YEAR - 199)))) !== 0) || ((((_la - 255)) & ~0x1F) === 0 && ((1 << (_la - 255)) & ((1 << (ImpalaSqlParser.STRING - 255)) | (1 << (ImpalaSqlParser.IDENTIFIER - 255)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 255)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 255)) | (1 << (ImpalaSqlParser.TIME_WITH_TIME_ZONE - 255)) | (1 << (ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE - 255)) | (1 << (ImpalaSqlParser.DOUBLE_PRECISION - 255)))) !== 0)) {
					{
					this.state = 524;
					this.type(0);
					this.state = 529;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 525;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 526;
						this.type(0);
						}
						}
						this.state = 531;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 534;
				this.match(ImpalaSqlParser.RPAREN);
				}
			}

			this.state = 537;
			this.match(ImpalaSqlParser.KW_RETURNS);
			this.state = 538;
			this.type(0);
			this.state = 541;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_INTERMEDIATE) {
				{
				this.state = 539;
				this.match(ImpalaSqlParser.KW_INTERMEDIATE);
				this.state = 540;
				this.type(0);
				}
			}

			this.state = 543;
			this.match(ImpalaSqlParser.KW_LOCATION);
			this.state = 544;
			this.match(ImpalaSqlParser.STRING);
			this.state = 548;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_INIT_FN) {
				{
				this.state = 545;
				this.match(ImpalaSqlParser.KW_INIT_FN);
				this.state = 546;
				this.match(ImpalaSqlParser.EQ);
				this.state = 547;
				this.match(ImpalaSqlParser.STRING);
				}
			}

			this.state = 550;
			this.match(ImpalaSqlParser.KW_UPDATE_FN);
			this.state = 551;
			this.match(ImpalaSqlParser.EQ);
			this.state = 552;
			this.match(ImpalaSqlParser.STRING);
			this.state = 553;
			this.match(ImpalaSqlParser.KW_MERGE_FN);
			this.state = 554;
			this.match(ImpalaSqlParser.EQ);
			this.state = 555;
			this.match(ImpalaSqlParser.STRING);
			this.state = 559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PREPARE_FN) {
				{
				this.state = 556;
				this.match(ImpalaSqlParser.KW_PREPARE_FN);
				this.state = 557;
				this.match(ImpalaSqlParser.EQ);
				this.state = 558;
				this.match(ImpalaSqlParser.STRING);
				}
			}

			this.state = 564;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_CLOSEFN) {
				{
				this.state = 561;
				this.match(ImpalaSqlParser.KW_CLOSEFN);
				this.state = 562;
				this.match(ImpalaSqlParser.EQ);
				this.state = 563;
				this.match(ImpalaSqlParser.STRING);
				}
			}

			this.state = 569;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_SERIALIZE_FN) {
				{
				this.state = 566;
				this.match(ImpalaSqlParser.KW_SERIALIZE_FN);
				this.state = 567;
				this.match(ImpalaSqlParser.EQ);
				this.state = 568;
				this.match(ImpalaSqlParser.STRING);
				}
			}

			this.state = 574;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_FINALIZE_FN) {
				{
				this.state = 571;
				this.match(ImpalaSqlParser.KW_FINALIZE_FN);
				this.state = 572;
				this.match(ImpalaSqlParser.EQ);
				this.state = 573;
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
		this.enterRule(_localctx, 24, ImpalaSqlParser.RULE_createFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 576;
			this.match(ImpalaSqlParser.KW_CREATE);
			this.state = 577;
			this.match(ImpalaSqlParser.KW_FUNCTION);
			this.state = 579;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 578;
				this.ifNotExists();
				}
				break;
			}
			this.state = 581;
			this.qualifiedName();
			this.state = 594;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.LPAREN) {
				{
				this.state = 582;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 591;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParser.KW_ADD) | (1 << ImpalaSqlParser.KW_ALL) | (1 << ImpalaSqlParser.KW_ANY) | (1 << ImpalaSqlParser.KW_ARRAY) | (1 << ImpalaSqlParser.KW_ASC) | (1 << ImpalaSqlParser.KW_AT) | (1 << ImpalaSqlParser.KW_BERNOULLI) | (1 << ImpalaSqlParser.KW_CASCADE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ImpalaSqlParser.KW_COLUMN - 32)) | (1 << (ImpalaSqlParser.KW_COLUMNS - 32)) | (1 << (ImpalaSqlParser.KW_COMMENT - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT - 32)) | (1 << (ImpalaSqlParser.KW_DATA - 32)) | (1 << (ImpalaSqlParser.KW_DATABASE - 32)) | (1 << (ImpalaSqlParser.KW_DATABASES - 32)) | (1 << (ImpalaSqlParser.KW_DAY - 32)) | (1 << (ImpalaSqlParser.KW_DAYS - 32)) | (1 << (ImpalaSqlParser.KW_DEFAULT - 32)) | (1 << (ImpalaSqlParser.KW_DESC - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (ImpalaSqlParser.KW_EXCLUDING - 65)) | (1 << (ImpalaSqlParser.KW_EXPLAIN - 65)) | (1 << (ImpalaSqlParser.KW_FILTER - 65)) | (1 << (ImpalaSqlParser.KW_FIRST - 65)) | (1 << (ImpalaSqlParser.KW_FOLLOWING - 65)) | (1 << (ImpalaSqlParser.KW_FORMAT - 65)) | (1 << (ImpalaSqlParser.KW_FUNCTIONS - 65)) | (1 << (ImpalaSqlParser.KW_GRANT - 65)) | (1 << (ImpalaSqlParser.KW_HOUR - 65)) | (1 << (ImpalaSqlParser.KW_IF - 65)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 65)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (ImpalaSqlParser.KW_INTERVAL - 101)) | (1 << (ImpalaSqlParser.KW_LAST - 101)) | (1 << (ImpalaSqlParser.KW_LATERAL - 101)) | (1 << (ImpalaSqlParser.KW_LIMIT - 101)) | (1 << (ImpalaSqlParser.KW_MAP - 101)) | (1 << (ImpalaSqlParser.KW_MINUTE - 101)) | (1 << (ImpalaSqlParser.KW_MONTH - 101)) | (1 << (ImpalaSqlParser.KW_NFC - 101)) | (1 << (ImpalaSqlParser.KW_NFD - 101)) | (1 << (ImpalaSqlParser.KW_NFKC - 101)) | (1 << (ImpalaSqlParser.KW_NFKD - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (ImpalaSqlParser.KW_NULLS - 133)) | (1 << (ImpalaSqlParser.KW_OFFSET - 133)) | (1 << (ImpalaSqlParser.KW_OPTION - 133)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 133)) | (1 << (ImpalaSqlParser.KW_OVER - 133)) | (1 << (ImpalaSqlParser.KW_PARTITION - 133)) | (1 << (ImpalaSqlParser.KW_PARTITIONS - 133)) | (1 << (ImpalaSqlParser.KW_PARQUET - 133)) | (1 << (ImpalaSqlParser.KW_POSITION - 133)) | (1 << (ImpalaSqlParser.KW_PRECEDING - 133)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 133)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 133)) | (1 << (ImpalaSqlParser.KW_RANGE - 133)) | (1 << (ImpalaSqlParser.KW_RENAME - 133)) | (1 << (ImpalaSqlParser.KW_REPEATABLE - 133)) | (1 << (ImpalaSqlParser.KW_REPLACE - 133)) | (1 << (ImpalaSqlParser.KW_RESTRICT - 133)) | (1 << (ImpalaSqlParser.KW_REVOKE - 133)))) !== 0) || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & ((1 << (ImpalaSqlParser.KW_ROLE - 165)) | (1 << (ImpalaSqlParser.KW_ROLES - 165)) | (1 << (ImpalaSqlParser.KW_ROW - 165)) | (1 << (ImpalaSqlParser.KW_ROWS - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMA - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMAS - 165)) | (1 << (ImpalaSqlParser.KW_SECOND - 165)) | (1 << (ImpalaSqlParser.KW_SECONDS - 165)) | (1 << (ImpalaSqlParser.KW_SET - 165)) | (1 << (ImpalaSqlParser.KW_SHOW - 165)) | (1 << (ImpalaSqlParser.KW_SOME - 165)) | (1 << (ImpalaSqlParser.KW_STATS - 165)) | (1 << (ImpalaSqlParser.KW_STRUCT - 165)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 165)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 165)) | (1 << (ImpalaSqlParser.KW_TABLES - 165)) | (1 << (ImpalaSqlParser.KW_TABLESAMPLE - 165)) | (1 << (ImpalaSqlParser.KW_TO - 165)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 165)) | (1 << (ImpalaSqlParser.KW_TRUNCATE - 165)))) !== 0) || ((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & ((1 << (ImpalaSqlParser.KW_UNBOUNDED - 199)) | (1 << (ImpalaSqlParser.KW_USE - 199)) | (1 << (ImpalaSqlParser.KW_USER - 199)) | (1 << (ImpalaSqlParser.KW_VIEW - 199)) | (1 << (ImpalaSqlParser.KW_VIEWS - 199)) | (1 << (ImpalaSqlParser.KW_YEAR - 199)))) !== 0) || ((((_la - 255)) & ~0x1F) === 0 && ((1 << (_la - 255)) & ((1 << (ImpalaSqlParser.STRING - 255)) | (1 << (ImpalaSqlParser.IDENTIFIER - 255)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 255)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 255)) | (1 << (ImpalaSqlParser.TIME_WITH_TIME_ZONE - 255)) | (1 << (ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE - 255)) | (1 << (ImpalaSqlParser.DOUBLE_PRECISION - 255)))) !== 0)) {
					{
					this.state = 583;
					this.type(0);
					this.state = 588;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 584;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 585;
						this.type(0);
						}
						}
						this.state = 590;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 593;
				this.match(ImpalaSqlParser.RPAREN);
				}
			}

			this.state = 598;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_RETURNS) {
				{
				this.state = 596;
				this.match(ImpalaSqlParser.KW_RETURNS);
				this.state = 597;
				this.type(0);
				}
			}

			this.state = 600;
			this.match(ImpalaSqlParser.KW_LOCATION);
			this.state = 601;
			this.match(ImpalaSqlParser.STRING);
			this.state = 602;
			this.match(ImpalaSqlParser.KW_SYMBOL);
			this.state = 603;
			this.match(ImpalaSqlParser.EQ);
			this.state = 604;
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
		this.enterRule(_localctx, 26, ImpalaSqlParser.RULE_alterStatement);
		try {
			this.state = 624;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 606;
				this.alterSchema();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 607;
				this.alterUnSetOrSetViewTblproperties();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 608;
				this.renameTable();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 609;
				this.alterViewOwner();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 610;
				this.alterView();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 611;
				this.renameView();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 612;
				this.dropPartitionByRangeOrValue();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 613;
				this.alterFormat();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 614;
				this.recoverPartitions();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 615;
				this.addPartitionByRangeOrValue();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 616;
				this.alterTableNonKuduOrKuduOnly();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 617;
				this.addSingleColumn();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 618;
				this.replaceOrAddColumns();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 619;
				this.editColumnDefine();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 620;
				this.alterStatsKey();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 621;
				this.alterPartitionCache();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 622;
				this.alterDropSingleColumn();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 623;
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
	public alterSchema(): AlterSchemaContext {
		let _localctx: AlterSchemaContext = new AlterSchemaContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ImpalaSqlParser.RULE_alterSchema);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 626;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 627;
			this.match(ImpalaSqlParser.KW_DATABASE);
			this.state = 628;
			this.qualifiedName();
			this.state = 629;
			this.match(ImpalaSqlParser.KW_SET);
			this.state = 630;
			this.match(ImpalaSqlParser.KW_OWNER);
			this.state = 631;
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
			this.state = 632;
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
		this.enterRule(_localctx, 30, ImpalaSqlParser.RULE_alterStatsKey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 635;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 636;
			this.qualifiedName();
			this.state = 637;
			this.match(ImpalaSqlParser.KW_SET);
			this.state = 638;
			this.match(ImpalaSqlParser.KW_COLUMN);
			this.state = 639;
			this.match(ImpalaSqlParser.KW_STATS);
			this.state = 640;
			this.identifier();
			this.state = 641;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 642;
			this.statsKey();
			this.state = 643;
			this.match(ImpalaSqlParser.EQ);
			this.state = 644;
			this.stringLiteral();
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.COMMA) {
				{
				this.state = 645;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 646;
				this.statsKey();
				this.state = 647;
				this.match(ImpalaSqlParser.EQ);
				this.state = 648;
				this.stringLiteral();
				}
			}

			this.state = 652;
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
		this.enterRule(_localctx, 32, ImpalaSqlParser.RULE_alterPartitionCache);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 654;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 655;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 656;
			this.qualifiedName();
			this.state = 659;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 657;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 658;
				this.expression();
				}
			}

			this.state = 661;
			this.match(ImpalaSqlParser.KW_SET);
			this.state = 672;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_CACHED:
				{
				{
				this.state = 662;
				this.match(ImpalaSqlParser.KW_CACHED);
				this.state = 663;
				this.match(ImpalaSqlParser.KW_IN);
				this.state = 664;
				this.stringLiteral();
				this.state = 669;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
				case 1:
					{
					this.state = 665;
					this.match(ImpalaSqlParser.KW_WITH);
					this.state = 666;
					this.match(ImpalaSqlParser.KW_REPLICATION);
					this.state = 667;
					this.match(ImpalaSqlParser.EQ);
					this.state = 668;
					this.number();
					}
					break;
				}
				}
				}
				break;
			case ImpalaSqlParser.KW_UNCACHED:
				{
				this.state = 671;
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
	public editColumnDefine(): EditColumnDefineContext {
		let _localctx: EditColumnDefineContext = new EditColumnDefineContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ImpalaSqlParser.RULE_editColumnDefine);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 674;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 675;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 676;
			this.qualifiedName();
			this.state = 677;
			this.match(ImpalaSqlParser.KW_CHANGE);
			this.state = 678;
			this.match(ImpalaSqlParser.KW_COLUMN);
			this.state = 679;
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
		this.enterRule(_localctx, 36, ImpalaSqlParser.RULE_alterDropSingleColumn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 681;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 682;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 683;
			this.qualifiedName();
			this.state = 684;
			this.match(ImpalaSqlParser.KW_DROP);
			this.state = 686;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 685;
				this.match(ImpalaSqlParser.KW_COLUMN);
				}
				break;
			}
			this.state = 688;
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
	public alterTableOwner(): AlterTableOwnerContext {
		let _localctx: AlterTableOwnerContext = new AlterTableOwnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ImpalaSqlParser.RULE_alterTableOwner);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 691;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 692;
			this.qualifiedName();
			this.state = 693;
			this.match(ImpalaSqlParser.KW_SET);
			this.state = 694;
			this.match(ImpalaSqlParser.KW_OWNER);
			this.state = 695;
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
			this.state = 696;
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
		this.enterRule(_localctx, 40, ImpalaSqlParser.RULE_replaceOrAddColumns);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 698;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 699;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 700;
			this.qualifiedName();
			this.state = 706;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_REPLACE:
				{
				this.state = 701;
				this.match(ImpalaSqlParser.KW_REPLACE);
				}
				break;
			case ImpalaSqlParser.KW_ADD:
				{
				this.state = 702;
				this.match(ImpalaSqlParser.KW_ADD);
				this.state = 704;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_IF) {
					{
					this.state = 703;
					this.ifNotExists();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 708;
			this.match(ImpalaSqlParser.KW_COLUMNS);
			this.state = 709;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 710;
			this.columnSpecWithKudu();
			this.state = 715;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 711;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 712;
					this.columnSpecWithKudu();
					}
					}
				}
				this.state = 717;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			}
			this.state = 718;
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
		this.enterRule(_localctx, 42, ImpalaSqlParser.RULE_addSingleColumn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 720;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 721;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 722;
			this.qualifiedName();
			this.state = 723;
			this.match(ImpalaSqlParser.KW_ADD);
			this.state = 724;
			this.match(ImpalaSqlParser.KW_COLUMN);
			this.state = 726;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 725;
				this.ifNotExists();
				}
				break;
			}
			this.state = 728;
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
	public alterTableNonKuduOrKuduOnly(): AlterTableNonKuduOrKuduOnlyContext {
		let _localctx: AlterTableNonKuduOrKuduOnlyContext = new AlterTableNonKuduOrKuduOnlyContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ImpalaSqlParser.RULE_alterTableNonKuduOrKuduOnly);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 730;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 731;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 732;
			this.qualifiedName();
			this.state = 733;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 735;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 734;
				this.match(ImpalaSqlParser.KW_COLUMN);
				}
				break;
			}
			this.state = 737;
			this.identifier();
			this.state = 746;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_SET:
				{
				this.state = 738;
				this.match(ImpalaSqlParser.KW_SET);
				this.state = 742;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ImpalaSqlParser.KW_BLOCK_SIZE:
				case ImpalaSqlParser.KW_COMPRESSION:
				case ImpalaSqlParser.KW_DEFAULT:
				case ImpalaSqlParser.KW_ENCODING:
					{
					this.state = 739;
					this.kuduStorageAttr();
					}
					break;
				case ImpalaSqlParser.KW_COMMENT:
					{
					this.state = 740;
					this.match(ImpalaSqlParser.KW_COMMENT);
					this.state = 741;
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
				this.state = 744;
				this.match(ImpalaSqlParser.KW_DROP);
				this.state = 745;
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
		this.enterRule(_localctx, 46, ImpalaSqlParser.RULE_addPartitionByRangeOrValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 748;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 749;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 750;
			this.qualifiedName();
			this.state = 751;
			this.match(ImpalaSqlParser.KW_ADD);
			this.state = 753;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IF) {
				{
				this.state = 752;
				this.ifNotExists();
				}
			}

			this.state = 767;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_PARTITION:
				{
				this.state = 755;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 756;
				this.expression();
				this.state = 759;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_LOCATION) {
					{
					this.state = 757;
					this.match(ImpalaSqlParser.KW_LOCATION);
					this.state = 758;
					this.stringLiteral();
					}
				}

				this.state = 762;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_CACHED || _la === ImpalaSqlParser.KW_UNCACHED) {
					{
					this.state = 761;
					this.cacheSpec();
					}
				}

				}
				break;
			case ImpalaSqlParser.KW_RANGE:
				{
				this.state = 764;
				this.match(ImpalaSqlParser.KW_RANGE);
				this.state = 765;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 766;
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
		this.enterRule(_localctx, 48, ImpalaSqlParser.RULE_alterFormat);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 769;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 770;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 771;
			this.qualifiedName();
			this.state = 774;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 772;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 773;
				this.expression();
				}
			}

			this.state = 776;
			this.match(ImpalaSqlParser.KW_SET);
			this.state = 788;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_FILEFORMAT:
				{
				{
				this.state = 777;
				this.match(ImpalaSqlParser.KW_FILEFORMAT);
				this.state = 778;
				this.fileFormat();
				}
				}
				break;
			case ImpalaSqlParser.KW_ROW:
				{
				{
				this.state = 779;
				this.match(ImpalaSqlParser.KW_ROW);
				this.state = 780;
				this.match(ImpalaSqlParser.KW_FORMAT);
				this.state = 781;
				this.rowFormat();
				}
				}
				break;
			case ImpalaSqlParser.KW_LOCATION:
				{
				{
				this.state = 782;
				this.match(ImpalaSqlParser.KW_LOCATION);
				this.state = 783;
				this.stringLiteral();
				}
				}
				break;
			case ImpalaSqlParser.KW_TBLPROPERTIES:
				{
				{
				this.state = 784;
				this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
				this.state = 785;
				_localctx._tblProp = this.properties();
				}
				}
				break;
			case ImpalaSqlParser.KW_SERDEPROPERTIES:
				{
				{
				this.state = 786;
				this.match(ImpalaSqlParser.KW_SERDEPROPERTIES);
				this.state = 787;
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
		this.enterRule(_localctx, 50, ImpalaSqlParser.RULE_recoverPartitions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 790;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 791;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 792;
			this.qualifiedName();
			this.state = 793;
			this.match(ImpalaSqlParser.KW_RECOVER);
			this.state = 794;
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
		this.enterRule(_localctx, 52, ImpalaSqlParser.RULE_dropPartitionByRangeOrValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 796;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 797;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 798;
			this.qualifiedName();
			this.state = 799;
			this.match(ImpalaSqlParser.KW_DROP);
			this.state = 801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IF) {
				{
				this.state = 800;
				this.ifExists();
				}
			}

			this.state = 811;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_PARTITION:
				{
				this.state = 803;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 804;
				this.expression();
				this.state = 806;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_PURGE) {
					{
					this.state = 805;
					this.match(ImpalaSqlParser.KW_PURGE);
					}
				}

				}
				break;
			case ImpalaSqlParser.KW_RANGE:
				{
				this.state = 808;
				this.match(ImpalaSqlParser.KW_RANGE);
				this.state = 809;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 810;
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
		this.enterRule(_localctx, 54, ImpalaSqlParser.RULE_alterView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 813;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 814;
			this.match(ImpalaSqlParser.KW_VIEW);
			this.state = 815;
			this.qualifiedName();
			this.state = 817;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.LPAREN) {
				{
				this.state = 816;
				this.viewColumns();
				}
			}

			this.state = 819;
			this.match(ImpalaSqlParser.KW_AS);
			this.state = 820;
			this.query();
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
		this.enterRule(_localctx, 56, ImpalaSqlParser.RULE_renameView);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 822;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 823;
			this.match(ImpalaSqlParser.KW_VIEW);
			this.state = 824;
			this.qualifiedName();
			this.state = 825;
			this.match(ImpalaSqlParser.KW_RENAME);
			this.state = 826;
			this.match(ImpalaSqlParser.KW_TO);
			this.state = 827;
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
	public alterViewOwner(): AlterViewOwnerContext {
		let _localctx: AlterViewOwnerContext = new AlterViewOwnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ImpalaSqlParser.RULE_alterViewOwner);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 829;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 830;
			this.match(ImpalaSqlParser.KW_VIEW);
			this.state = 831;
			this.qualifiedName();
			this.state = 832;
			this.match(ImpalaSqlParser.KW_SET);
			this.state = 833;
			this.match(ImpalaSqlParser.KW_OWNER);
			this.state = 834;
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
			this.state = 835;
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
		this.enterRule(_localctx, 60, ImpalaSqlParser.RULE_renameTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 837;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 838;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 839;
			_localctx._from = this.qualifiedName();
			this.state = 840;
			this.match(ImpalaSqlParser.KW_RENAME);
			this.state = 841;
			this.match(ImpalaSqlParser.KW_TO);
			this.state = 842;
			_localctx._to = this.qualifiedName();
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
		this.enterRule(_localctx, 62, ImpalaSqlParser.RULE_alterUnSetOrSetViewTblproperties);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 844;
			this.match(ImpalaSqlParser.KW_ALTER);
			this.state = 845;
			this.match(ImpalaSqlParser.KW_VIEW);
			this.state = 846;
			this.qualifiedName();
			this.state = 847;
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
			this.state = 848;
			this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
			this.state = 849;
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
	public truncateTable(): TruncateTableContext {
		let _localctx: TruncateTableContext = new TruncateTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ImpalaSqlParser.RULE_truncateTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 851;
			this.match(ImpalaSqlParser.KW_TRUNCATE);
			this.state = 853;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_TABLE) {
				{
				this.state = 852;
				this.match(ImpalaSqlParser.KW_TABLE);
				}
			}

			this.state = 856;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 855;
				this.ifExists();
				}
				break;
			}
			this.state = 858;
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
	public describeStatement(): DescribeStatementContext {
		let _localctx: DescribeStatementContext = new DescribeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ImpalaSqlParser.RULE_describeStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 860;
			this.match(ImpalaSqlParser.KW_DESCRIBE);
			this.state = 862;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				{
				this.state = 861;
				this.match(ImpalaSqlParser.KW_DATABASE);
				}
				break;
			}
			this.state = 865;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_EXTENDED || _la === ImpalaSqlParser.KW_FORMATTED) {
				{
				this.state = 864;
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

			this.state = 867;
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
		this.enterRule(_localctx, 68, ImpalaSqlParser.RULE_computeStatement);
		try {
			this.state = 871;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 869;
				this.computeStats();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 870;
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
		this.enterRule(_localctx, 70, ImpalaSqlParser.RULE_computeStats);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 873;
			this.match(ImpalaSqlParser.KW_COMPUTE);
			this.state = 874;
			this.match(ImpalaSqlParser.KW_STATS);
			this.state = 875;
			this.qualifiedName();
			this.state = 877;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				{
				this.state = 876;
				this.columnAliases();
				}
				break;
			}
			this.state = 891;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_TABLESAMPLE) {
				{
				this.state = 879;
				this.match(ImpalaSqlParser.KW_TABLESAMPLE);
				this.state = 880;
				this.match(ImpalaSqlParser.KW_SYSTEM);
				this.state = 881;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 882;
				this.number();
				this.state = 883;
				this.match(ImpalaSqlParser.RPAREN);
				this.state = 889;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_REPEATABLE) {
					{
					this.state = 884;
					this.match(ImpalaSqlParser.KW_REPEATABLE);
					this.state = 885;
					this.match(ImpalaSqlParser.LPAREN);
					this.state = 886;
					this.number();
					this.state = 887;
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
		this.enterRule(_localctx, 72, ImpalaSqlParser.RULE_computeIncrementalStats);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 893;
			this.match(ImpalaSqlParser.KW_COMPUTE);
			this.state = 894;
			this.match(ImpalaSqlParser.KW_INCREMENTAL);
			this.state = 895;
			this.match(ImpalaSqlParser.KW_STATS);
			this.state = 896;
			this.qualifiedName();
			this.state = 899;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 897;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 898;
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
		this.enterRule(_localctx, 74, ImpalaSqlParser.RULE_dropStatement);
		try {
			this.state = 906;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 901;
				this.dropRole();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 902;
				this.dropFunction();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 903;
				this.dropIncrementalStats();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 904;
				this.dropViewOrTable();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 905;
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
		this.enterRule(_localctx, 76, ImpalaSqlParser.RULE_dropSchema);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 908;
			this.match(ImpalaSqlParser.KW_DROP);
			this.state = 909;
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
			this.state = 911;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 910;
				this.ifExists();
				}
				break;
			}
			this.state = 913;
			this.qualifiedName();
			this.state = 915;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_CASCADE || _la === ImpalaSqlParser.KW_RESTRICT) {
				{
				this.state = 914;
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
	public dropViewOrTable(): DropViewOrTableContext {
		let _localctx: DropViewOrTableContext = new DropViewOrTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ImpalaSqlParser.RULE_dropViewOrTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 917;
			this.match(ImpalaSqlParser.KW_DROP);
			this.state = 918;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_TABLE || _la === ImpalaSqlParser.KW_VIEW)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 920;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				{
				this.state = 919;
				this.ifExists();
				}
				break;
			}
			this.state = 922;
			this.qualifiedName();
			this.state = 924;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PURGE) {
				{
				this.state = 923;
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
		this.enterRule(_localctx, 80, ImpalaSqlParser.RULE_dropIncrementalStats);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 926;
			this.match(ImpalaSqlParser.KW_DROP);
			this.state = 928;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_INCREMENTAL) {
				{
				this.state = 927;
				this.match(ImpalaSqlParser.KW_INCREMENTAL);
				}
			}

			this.state = 930;
			this.match(ImpalaSqlParser.KW_STATS);
			this.state = 931;
			this.qualifiedName();
			this.state = 934;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 932;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 933;
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
		this.enterRule(_localctx, 82, ImpalaSqlParser.RULE_dropFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 936;
			this.match(ImpalaSqlParser.KW_DROP);
			this.state = 938;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_AGGREGATE) {
				{
				this.state = 937;
				this.match(ImpalaSqlParser.KW_AGGREGATE);
				}
			}

			this.state = 940;
			this.match(ImpalaSqlParser.KW_FUNCTION);
			this.state = 942;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 941;
				this.ifExists();
				}
				break;
			}
			this.state = 944;
			this.qualifiedName();
			this.state = 957;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 945;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 954;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParser.KW_ADD) | (1 << ImpalaSqlParser.KW_ALL) | (1 << ImpalaSqlParser.KW_ANY) | (1 << ImpalaSqlParser.KW_ARRAY) | (1 << ImpalaSqlParser.KW_ASC) | (1 << ImpalaSqlParser.KW_AT) | (1 << ImpalaSqlParser.KW_BERNOULLI) | (1 << ImpalaSqlParser.KW_CASCADE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ImpalaSqlParser.KW_COLUMN - 32)) | (1 << (ImpalaSqlParser.KW_COLUMNS - 32)) | (1 << (ImpalaSqlParser.KW_COMMENT - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT - 32)) | (1 << (ImpalaSqlParser.KW_DATA - 32)) | (1 << (ImpalaSqlParser.KW_DATABASE - 32)) | (1 << (ImpalaSqlParser.KW_DATABASES - 32)) | (1 << (ImpalaSqlParser.KW_DAY - 32)) | (1 << (ImpalaSqlParser.KW_DAYS - 32)) | (1 << (ImpalaSqlParser.KW_DEFAULT - 32)) | (1 << (ImpalaSqlParser.KW_DESC - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (ImpalaSqlParser.KW_EXCLUDING - 65)) | (1 << (ImpalaSqlParser.KW_EXPLAIN - 65)) | (1 << (ImpalaSqlParser.KW_FILTER - 65)) | (1 << (ImpalaSqlParser.KW_FIRST - 65)) | (1 << (ImpalaSqlParser.KW_FOLLOWING - 65)) | (1 << (ImpalaSqlParser.KW_FORMAT - 65)) | (1 << (ImpalaSqlParser.KW_FUNCTIONS - 65)) | (1 << (ImpalaSqlParser.KW_GRANT - 65)) | (1 << (ImpalaSqlParser.KW_HOUR - 65)) | (1 << (ImpalaSqlParser.KW_IF - 65)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 65)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (ImpalaSqlParser.KW_INTERVAL - 101)) | (1 << (ImpalaSqlParser.KW_LAST - 101)) | (1 << (ImpalaSqlParser.KW_LATERAL - 101)) | (1 << (ImpalaSqlParser.KW_LIMIT - 101)) | (1 << (ImpalaSqlParser.KW_MAP - 101)) | (1 << (ImpalaSqlParser.KW_MINUTE - 101)) | (1 << (ImpalaSqlParser.KW_MONTH - 101)) | (1 << (ImpalaSqlParser.KW_NFC - 101)) | (1 << (ImpalaSqlParser.KW_NFD - 101)) | (1 << (ImpalaSqlParser.KW_NFKC - 101)) | (1 << (ImpalaSqlParser.KW_NFKD - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (ImpalaSqlParser.KW_NULLS - 133)) | (1 << (ImpalaSqlParser.KW_OFFSET - 133)) | (1 << (ImpalaSqlParser.KW_OPTION - 133)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 133)) | (1 << (ImpalaSqlParser.KW_OVER - 133)) | (1 << (ImpalaSqlParser.KW_PARTITION - 133)) | (1 << (ImpalaSqlParser.KW_PARTITIONS - 133)) | (1 << (ImpalaSqlParser.KW_PARQUET - 133)) | (1 << (ImpalaSqlParser.KW_POSITION - 133)) | (1 << (ImpalaSqlParser.KW_PRECEDING - 133)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 133)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 133)) | (1 << (ImpalaSqlParser.KW_RANGE - 133)) | (1 << (ImpalaSqlParser.KW_RENAME - 133)) | (1 << (ImpalaSqlParser.KW_REPEATABLE - 133)) | (1 << (ImpalaSqlParser.KW_REPLACE - 133)) | (1 << (ImpalaSqlParser.KW_RESTRICT - 133)) | (1 << (ImpalaSqlParser.KW_REVOKE - 133)))) !== 0) || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & ((1 << (ImpalaSqlParser.KW_ROLE - 165)) | (1 << (ImpalaSqlParser.KW_ROLES - 165)) | (1 << (ImpalaSqlParser.KW_ROW - 165)) | (1 << (ImpalaSqlParser.KW_ROWS - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMA - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMAS - 165)) | (1 << (ImpalaSqlParser.KW_SECOND - 165)) | (1 << (ImpalaSqlParser.KW_SECONDS - 165)) | (1 << (ImpalaSqlParser.KW_SET - 165)) | (1 << (ImpalaSqlParser.KW_SHOW - 165)) | (1 << (ImpalaSqlParser.KW_SOME - 165)) | (1 << (ImpalaSqlParser.KW_STATS - 165)) | (1 << (ImpalaSqlParser.KW_STRUCT - 165)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 165)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 165)) | (1 << (ImpalaSqlParser.KW_TABLES - 165)) | (1 << (ImpalaSqlParser.KW_TABLESAMPLE - 165)) | (1 << (ImpalaSqlParser.KW_TO - 165)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 165)) | (1 << (ImpalaSqlParser.KW_TRUNCATE - 165)))) !== 0) || ((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & ((1 << (ImpalaSqlParser.KW_UNBOUNDED - 199)) | (1 << (ImpalaSqlParser.KW_USE - 199)) | (1 << (ImpalaSqlParser.KW_USER - 199)) | (1 << (ImpalaSqlParser.KW_VIEW - 199)) | (1 << (ImpalaSqlParser.KW_VIEWS - 199)) | (1 << (ImpalaSqlParser.KW_YEAR - 199)))) !== 0) || ((((_la - 255)) & ~0x1F) === 0 && ((1 << (_la - 255)) & ((1 << (ImpalaSqlParser.STRING - 255)) | (1 << (ImpalaSqlParser.IDENTIFIER - 255)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 255)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 255)) | (1 << (ImpalaSqlParser.TIME_WITH_TIME_ZONE - 255)) | (1 << (ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE - 255)) | (1 << (ImpalaSqlParser.DOUBLE_PRECISION - 255)))) !== 0)) {
					{
					this.state = 946;
					this.type(0);
					this.state = 951;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 947;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 948;
						this.type(0);
						}
						}
						this.state = 953;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 956;
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
		this.enterRule(_localctx, 84, ImpalaSqlParser.RULE_dropRole);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 959;
			this.match(ImpalaSqlParser.KW_DROP);
			this.state = 960;
			this.match(ImpalaSqlParser.KW_ROLE);
			this.state = 961;
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
		this.enterRule(_localctx, 86, ImpalaSqlParser.RULE_grantStatement);
		try {
			this.state = 965;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 963;
				this.grantRole();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 964;
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
		this.enterRule(_localctx, 88, ImpalaSqlParser.RULE_grantRole);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 967;
			this.match(ImpalaSqlParser.KW_GRANT);
			this.state = 968;
			this.match(ImpalaSqlParser.KW_ROLE);
			this.state = 969;
			this.identifier();
			this.state = 970;
			this.match(ImpalaSqlParser.KW_TO);
			this.state = 971;
			this.match(ImpalaSqlParser.KW_GROUP);
			this.state = 972;
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
		this.enterRule(_localctx, 90, ImpalaSqlParser.RULE_grant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 974;
			this.match(ImpalaSqlParser.KW_GRANT);
			this.state = 975;
			this.privilege();
			this.state = 976;
			this.match(ImpalaSqlParser.KW_ON);
			this.state = 977;
			this.objectType();
			this.state = 979;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 978;
				this.qualifiedName();
				}
				break;
			}
			this.state = 981;
			this.match(ImpalaSqlParser.KW_TO);
			this.state = 982;
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
		this.enterRule(_localctx, 92, ImpalaSqlParser.RULE_revokeStatement);
		try {
			this.state = 986;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 984;
				this.revokeRole();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 985;
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
		this.enterRule(_localctx, 94, ImpalaSqlParser.RULE_revokeRole);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 988;
			this.match(ImpalaSqlParser.KW_REVOKE);
			this.state = 989;
			this.match(ImpalaSqlParser.KW_ROLE);
			this.state = 990;
			this.identifier();
			this.state = 991;
			this.match(ImpalaSqlParser.KW_FROM);
			this.state = 992;
			this.match(ImpalaSqlParser.KW_GROUP);
			this.state = 993;
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
		this.enterRule(_localctx, 96, ImpalaSqlParser.RULE_revoke);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 995;
			this.match(ImpalaSqlParser.KW_REVOKE);
			this.state = 999;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_GRANT) {
				{
				this.state = 996;
				this.match(ImpalaSqlParser.KW_GRANT);
				this.state = 997;
				this.match(ImpalaSqlParser.KW_OPTION);
				this.state = 998;
				this.match(ImpalaSqlParser.KW_FOR);
				}
			}

			this.state = 1001;
			this.privilege();
			this.state = 1002;
			this.match(ImpalaSqlParser.KW_ON);
			this.state = 1003;
			this.objectType();
			this.state = 1005;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParser.KW_ADD) | (1 << ImpalaSqlParser.KW_ALL) | (1 << ImpalaSqlParser.KW_ANY) | (1 << ImpalaSqlParser.KW_ARRAY) | (1 << ImpalaSqlParser.KW_ASC) | (1 << ImpalaSqlParser.KW_AT) | (1 << ImpalaSqlParser.KW_BERNOULLI) | (1 << ImpalaSqlParser.KW_CASCADE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ImpalaSqlParser.KW_COLUMN - 32)) | (1 << (ImpalaSqlParser.KW_COLUMNS - 32)) | (1 << (ImpalaSqlParser.KW_COMMENT - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT - 32)) | (1 << (ImpalaSqlParser.KW_DATA - 32)) | (1 << (ImpalaSqlParser.KW_DATABASE - 32)) | (1 << (ImpalaSqlParser.KW_DATABASES - 32)) | (1 << (ImpalaSqlParser.KW_DAY - 32)) | (1 << (ImpalaSqlParser.KW_DAYS - 32)) | (1 << (ImpalaSqlParser.KW_DEFAULT - 32)) | (1 << (ImpalaSqlParser.KW_DESC - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (ImpalaSqlParser.KW_EXCLUDING - 65)) | (1 << (ImpalaSqlParser.KW_EXPLAIN - 65)) | (1 << (ImpalaSqlParser.KW_FILTER - 65)) | (1 << (ImpalaSqlParser.KW_FIRST - 65)) | (1 << (ImpalaSqlParser.KW_FOLLOWING - 65)) | (1 << (ImpalaSqlParser.KW_FORMAT - 65)) | (1 << (ImpalaSqlParser.KW_FUNCTIONS - 65)) | (1 << (ImpalaSqlParser.KW_GRANT - 65)) | (1 << (ImpalaSqlParser.KW_HOUR - 65)) | (1 << (ImpalaSqlParser.KW_IF - 65)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 65)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (ImpalaSqlParser.KW_INTERVAL - 101)) | (1 << (ImpalaSqlParser.KW_LAST - 101)) | (1 << (ImpalaSqlParser.KW_LATERAL - 101)) | (1 << (ImpalaSqlParser.KW_LIMIT - 101)) | (1 << (ImpalaSqlParser.KW_MAP - 101)) | (1 << (ImpalaSqlParser.KW_MINUTE - 101)) | (1 << (ImpalaSqlParser.KW_MONTH - 101)) | (1 << (ImpalaSqlParser.KW_NFC - 101)) | (1 << (ImpalaSqlParser.KW_NFD - 101)) | (1 << (ImpalaSqlParser.KW_NFKC - 101)) | (1 << (ImpalaSqlParser.KW_NFKD - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (ImpalaSqlParser.KW_NULLS - 133)) | (1 << (ImpalaSqlParser.KW_OFFSET - 133)) | (1 << (ImpalaSqlParser.KW_OPTION - 133)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 133)) | (1 << (ImpalaSqlParser.KW_OVER - 133)) | (1 << (ImpalaSqlParser.KW_PARTITION - 133)) | (1 << (ImpalaSqlParser.KW_PARTITIONS - 133)) | (1 << (ImpalaSqlParser.KW_PARQUET - 133)) | (1 << (ImpalaSqlParser.KW_POSITION - 133)) | (1 << (ImpalaSqlParser.KW_PRECEDING - 133)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 133)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 133)) | (1 << (ImpalaSqlParser.KW_RANGE - 133)) | (1 << (ImpalaSqlParser.KW_RENAME - 133)) | (1 << (ImpalaSqlParser.KW_REPEATABLE - 133)) | (1 << (ImpalaSqlParser.KW_REPLACE - 133)) | (1 << (ImpalaSqlParser.KW_RESTRICT - 133)) | (1 << (ImpalaSqlParser.KW_REVOKE - 133)))) !== 0) || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & ((1 << (ImpalaSqlParser.KW_ROLE - 165)) | (1 << (ImpalaSqlParser.KW_ROLES - 165)) | (1 << (ImpalaSqlParser.KW_ROW - 165)) | (1 << (ImpalaSqlParser.KW_ROWS - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMA - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMAS - 165)) | (1 << (ImpalaSqlParser.KW_SECOND - 165)) | (1 << (ImpalaSqlParser.KW_SECONDS - 165)) | (1 << (ImpalaSqlParser.KW_SET - 165)) | (1 << (ImpalaSqlParser.KW_SHOW - 165)) | (1 << (ImpalaSqlParser.KW_SOME - 165)) | (1 << (ImpalaSqlParser.KW_STATS - 165)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 165)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 165)) | (1 << (ImpalaSqlParser.KW_TABLES - 165)) | (1 << (ImpalaSqlParser.KW_TABLESAMPLE - 165)) | (1 << (ImpalaSqlParser.KW_TO - 165)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 165)) | (1 << (ImpalaSqlParser.KW_TRUNCATE - 165)))) !== 0) || ((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & ((1 << (ImpalaSqlParser.KW_UNBOUNDED - 199)) | (1 << (ImpalaSqlParser.KW_USE - 199)) | (1 << (ImpalaSqlParser.KW_USER - 199)) | (1 << (ImpalaSqlParser.KW_VIEW - 199)) | (1 << (ImpalaSqlParser.KW_VIEWS - 199)) | (1 << (ImpalaSqlParser.KW_YEAR - 199)))) !== 0) || ((((_la - 255)) & ~0x1F) === 0 && ((1 << (_la - 255)) & ((1 << (ImpalaSqlParser.STRING - 255)) | (1 << (ImpalaSqlParser.IDENTIFIER - 255)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 255)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 255)))) !== 0)) {
				{
				this.state = 1004;
				this.qualifiedName();
				}
			}

			this.state = 1007;
			this.match(ImpalaSqlParser.KW_FROM);
			this.state = 1013;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				{
				this.state = 1008;
				_localctx._grantee = this.principal();
				}
				break;

			case 2:
				{
				this.state = 1010;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
				case 1:
					{
					this.state = 1009;
					this.match(ImpalaSqlParser.KW_ROLE);
					}
					break;
				}
				this.state = 1012;
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
		this.enterRule(_localctx, 98, ImpalaSqlParser.RULE_insertStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1016;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_WITH) {
				{
				this.state = 1015;
				this.with();
				}
			}

			this.state = 1018;
			this.match(ImpalaSqlParser.KW_INSERT);
			this.state = 1019;
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
			this.state = 1021;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_TABLE) {
				{
				this.state = 1020;
				this.match(ImpalaSqlParser.KW_TABLE);
				}
			}

			this.state = 1023;
			this.qualifiedName();
			this.state = 1025;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				{
				this.state = 1024;
				this.columnAliases();
				}
				break;
			}
			this.state = 1039;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 1027;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 1028;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1029;
				this.expression();
				this.state = 1034;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 1030;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1031;
					this.expression();
					}
					}
					this.state = 1036;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1037;
				this.match(ImpalaSqlParser.RPAREN);
				}
			}

			this.state = 1041;
			this.query();
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
		this.enterRule(_localctx, 100, ImpalaSqlParser.RULE_deleteStatement);
		try {
			this.state = 1045;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1043;
				this.delete();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1044;
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
		this.enterRule(_localctx, 102, ImpalaSqlParser.RULE_delete);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1047;
			this.match(ImpalaSqlParser.KW_DELETE);
			this.state = 1049;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_FROM) {
				{
				this.state = 1048;
				this.match(ImpalaSqlParser.KW_FROM);
				}
			}

			this.state = 1051;
			this.qualifiedName();
			this.state = 1054;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_WHERE) {
				{
				this.state = 1052;
				this.match(ImpalaSqlParser.KW_WHERE);
				this.state = 1053;
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
		this.enterRule(_localctx, 104, ImpalaSqlParser.RULE_deleteTableRef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1056;
			this.match(ImpalaSqlParser.KW_DELETE);
			this.state = 1057;
			this.qualifiedName();
			this.state = 1062;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParser.KW_ADD) | (1 << ImpalaSqlParser.KW_ALL) | (1 << ImpalaSqlParser.KW_ANY) | (1 << ImpalaSqlParser.KW_ARRAY) | (1 << ImpalaSqlParser.KW_AS) | (1 << ImpalaSqlParser.KW_ASC) | (1 << ImpalaSqlParser.KW_AT) | (1 << ImpalaSqlParser.KW_BERNOULLI) | (1 << ImpalaSqlParser.KW_CASCADE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ImpalaSqlParser.KW_COLUMN - 32)) | (1 << (ImpalaSqlParser.KW_COLUMNS - 32)) | (1 << (ImpalaSqlParser.KW_COMMENT - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT - 32)) | (1 << (ImpalaSqlParser.KW_DATA - 32)) | (1 << (ImpalaSqlParser.KW_DATABASE - 32)) | (1 << (ImpalaSqlParser.KW_DATABASES - 32)) | (1 << (ImpalaSqlParser.KW_DAY - 32)) | (1 << (ImpalaSqlParser.KW_DAYS - 32)) | (1 << (ImpalaSqlParser.KW_DEFAULT - 32)) | (1 << (ImpalaSqlParser.KW_DESC - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (ImpalaSqlParser.KW_EXCLUDING - 65)) | (1 << (ImpalaSqlParser.KW_EXPLAIN - 65)) | (1 << (ImpalaSqlParser.KW_FILTER - 65)) | (1 << (ImpalaSqlParser.KW_FIRST - 65)) | (1 << (ImpalaSqlParser.KW_FOLLOWING - 65)) | (1 << (ImpalaSqlParser.KW_FORMAT - 65)) | (1 << (ImpalaSqlParser.KW_FUNCTIONS - 65)) | (1 << (ImpalaSqlParser.KW_GRANT - 65)) | (1 << (ImpalaSqlParser.KW_HOUR - 65)) | (1 << (ImpalaSqlParser.KW_IF - 65)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 65)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (ImpalaSqlParser.KW_INTERVAL - 101)) | (1 << (ImpalaSqlParser.KW_LAST - 101)) | (1 << (ImpalaSqlParser.KW_LATERAL - 101)) | (1 << (ImpalaSqlParser.KW_LIMIT - 101)) | (1 << (ImpalaSqlParser.KW_MAP - 101)) | (1 << (ImpalaSqlParser.KW_MINUTE - 101)) | (1 << (ImpalaSqlParser.KW_MONTH - 101)) | (1 << (ImpalaSqlParser.KW_NFC - 101)) | (1 << (ImpalaSqlParser.KW_NFD - 101)) | (1 << (ImpalaSqlParser.KW_NFKC - 101)) | (1 << (ImpalaSqlParser.KW_NFKD - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (ImpalaSqlParser.KW_NULLS - 133)) | (1 << (ImpalaSqlParser.KW_OFFSET - 133)) | (1 << (ImpalaSqlParser.KW_OPTION - 133)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 133)) | (1 << (ImpalaSqlParser.KW_OVER - 133)) | (1 << (ImpalaSqlParser.KW_PARTITION - 133)) | (1 << (ImpalaSqlParser.KW_PARTITIONS - 133)) | (1 << (ImpalaSqlParser.KW_PARQUET - 133)) | (1 << (ImpalaSqlParser.KW_POSITION - 133)) | (1 << (ImpalaSqlParser.KW_PRECEDING - 133)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 133)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 133)) | (1 << (ImpalaSqlParser.KW_RANGE - 133)) | (1 << (ImpalaSqlParser.KW_RENAME - 133)) | (1 << (ImpalaSqlParser.KW_REPEATABLE - 133)) | (1 << (ImpalaSqlParser.KW_REPLACE - 133)) | (1 << (ImpalaSqlParser.KW_RESTRICT - 133)) | (1 << (ImpalaSqlParser.KW_REVOKE - 133)))) !== 0) || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & ((1 << (ImpalaSqlParser.KW_ROLE - 165)) | (1 << (ImpalaSqlParser.KW_ROLES - 165)) | (1 << (ImpalaSqlParser.KW_ROW - 165)) | (1 << (ImpalaSqlParser.KW_ROWS - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMA - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMAS - 165)) | (1 << (ImpalaSqlParser.KW_SECOND - 165)) | (1 << (ImpalaSqlParser.KW_SECONDS - 165)) | (1 << (ImpalaSqlParser.KW_SET - 165)) | (1 << (ImpalaSqlParser.KW_SHOW - 165)) | (1 << (ImpalaSqlParser.KW_SOME - 165)) | (1 << (ImpalaSqlParser.KW_STATS - 165)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 165)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 165)) | (1 << (ImpalaSqlParser.KW_TABLES - 165)) | (1 << (ImpalaSqlParser.KW_TABLESAMPLE - 165)) | (1 << (ImpalaSqlParser.KW_TO - 165)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 165)) | (1 << (ImpalaSqlParser.KW_TRUNCATE - 165)))) !== 0) || ((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & ((1 << (ImpalaSqlParser.KW_UNBOUNDED - 199)) | (1 << (ImpalaSqlParser.KW_USE - 199)) | (1 << (ImpalaSqlParser.KW_USER - 199)) | (1 << (ImpalaSqlParser.KW_VIEW - 199)) | (1 << (ImpalaSqlParser.KW_VIEWS - 199)) | (1 << (ImpalaSqlParser.KW_YEAR - 199)))) !== 0) || ((((_la - 255)) & ~0x1F) === 0 && ((1 << (_la - 255)) & ((1 << (ImpalaSqlParser.STRING - 255)) | (1 << (ImpalaSqlParser.IDENTIFIER - 255)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 255)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 255)))) !== 0)) {
				{
				this.state = 1059;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_AS) {
					{
					this.state = 1058;
					this.match(ImpalaSqlParser.KW_AS);
					}
				}

				this.state = 1061;
				this.identifier();
				}
			}

			this.state = 1064;
			this.match(ImpalaSqlParser.KW_FROM);
			this.state = 1073;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				{
				this.state = 1065;
				this.relation(0);
				this.state = 1070;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 1066;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1067;
					this.relation(0);
					}
					}
					this.state = 1072;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 1077;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_WHERE) {
				{
				this.state = 1075;
				this.match(ImpalaSqlParser.KW_WHERE);
				this.state = 1076;
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
		this.enterRule(_localctx, 106, ImpalaSqlParser.RULE_updateStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1079;
			this.match(ImpalaSqlParser.KW_UPDATE);
			this.state = 1080;
			this.qualifiedName();
			this.state = 1081;
			this.match(ImpalaSqlParser.KW_SET);
			this.state = 1082;
			this.assignmentList();
			this.state = 1092;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_FROM) {
				{
				this.state = 1083;
				this.match(ImpalaSqlParser.KW_FROM);
				this.state = 1084;
				this.relation(0);
				this.state = 1089;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 1085;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1086;
					this.relation(0);
					}
					}
					this.state = 1091;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1096;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_WHERE) {
				{
				this.state = 1094;
				this.match(ImpalaSqlParser.KW_WHERE);
				this.state = 1095;
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
		this.enterRule(_localctx, 108, ImpalaSqlParser.RULE_upsertStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1098;
			this.match(ImpalaSqlParser.KW_UPSERT);
			this.state = 1099;
			this.match(ImpalaSqlParser.KW_INTO);
			this.state = 1101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_TABLE) {
				{
				this.state = 1100;
				this.match(ImpalaSqlParser.KW_TABLE);
				}
			}

			this.state = 1103;
			this.qualifiedName();
			this.state = 1105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				{
				this.state = 1104;
				this.columnAliases();
				}
				break;
			}
			this.state = 1107;
			this.query();
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
		this.enterRule(_localctx, 110, ImpalaSqlParser.RULE_showStatement);
		try {
			this.state = 1119;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1109;
				this.showRoles();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1110;
				this.showRoleGrant();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1111;
				this.showGrant();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1112;
				this.showFiles();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1113;
				this.showPartitions();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1114;
				this.showColumnOrTableStats();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1115;
				this.showCreateViewOrTable();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1116;
				this.showFunctions();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1117;
				this.showTables();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1118;
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
		this.enterRule(_localctx, 112, ImpalaSqlParser.RULE_showSchemas);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1121;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1122;
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
			this.state = 1134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_LIKE || _la === ImpalaSqlParser.STRING || _la === ImpalaSqlParser.UNICODE_STRING) {
				{
				this.state = 1124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_LIKE) {
					{
					this.state = 1123;
					this.match(ImpalaSqlParser.KW_LIKE);
					}
				}

				this.state = 1126;
				_localctx._pattern = this.stringLiteral();
				this.state = 1131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.BITWISEOR) {
					{
					{
					this.state = 1127;
					this.match(ImpalaSqlParser.BITWISEOR);
					this.state = 1128;
					this.stringLiteral();
					}
					}
					this.state = 1133;
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
		this.enterRule(_localctx, 114, ImpalaSqlParser.RULE_showTables);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1136;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1137;
			this.match(ImpalaSqlParser.KW_TABLES);
			this.state = 1140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_FROM || _la === ImpalaSqlParser.KW_IN) {
				{
				this.state = 1138;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParser.KW_FROM || _la === ImpalaSqlParser.KW_IN)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1139;
				this.qualifiedName();
				}
			}

			this.state = 1153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_LIKE || _la === ImpalaSqlParser.STRING || _la === ImpalaSqlParser.UNICODE_STRING) {
				{
				this.state = 1143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_LIKE) {
					{
					this.state = 1142;
					this.match(ImpalaSqlParser.KW_LIKE);
					}
				}

				this.state = 1145;
				_localctx._pattern = this.stringLiteral();
				this.state = 1150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.BITWISEOR) {
					{
					{
					this.state = 1146;
					this.match(ImpalaSqlParser.BITWISEOR);
					this.state = 1147;
					this.stringLiteral();
					}
					}
					this.state = 1152;
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
		this.enterRule(_localctx, 116, ImpalaSqlParser.RULE_showFunctions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1155;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_ANALYTIC || _la === ImpalaSqlParser.KW_AGGREGATE) {
				{
				this.state = 1156;
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

			this.state = 1159;
			this.match(ImpalaSqlParser.KW_FUNCTIONS);
			this.state = 1162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_IN) {
				{
				this.state = 1160;
				this.match(ImpalaSqlParser.KW_IN);
				this.state = 1161;
				this.qualifiedName();
				}
			}

			this.state = 1175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_LIKE || _la === ImpalaSqlParser.STRING || _la === ImpalaSqlParser.UNICODE_STRING) {
				{
				this.state = 1165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_LIKE) {
					{
					this.state = 1164;
					this.match(ImpalaSqlParser.KW_LIKE);
					}
				}

				this.state = 1167;
				_localctx._pattern = this.stringLiteral();
				this.state = 1172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.BITWISEOR) {
					{
					{
					this.state = 1168;
					this.match(ImpalaSqlParser.BITWISEOR);
					this.state = 1169;
					this.stringLiteral();
					}
					}
					this.state = 1174;
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
	public showCreateViewOrTable(): ShowCreateViewOrTableContext {
		let _localctx: ShowCreateViewOrTableContext = new ShowCreateViewOrTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, ImpalaSqlParser.RULE_showCreateViewOrTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1177;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1178;
			this.match(ImpalaSqlParser.KW_CREATE);
			this.state = 1179;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_TABLE || _la === ImpalaSqlParser.KW_VIEW)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1180;
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
	public showColumnOrTableStats(): ShowColumnOrTableStatsContext {
		let _localctx: ShowColumnOrTableStatsContext = new ShowColumnOrTableStatsContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, ImpalaSqlParser.RULE_showColumnOrTableStats);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1182;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1183;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_COLUMN || _la === ImpalaSqlParser.KW_TABLE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1184;
			this.match(ImpalaSqlParser.KW_STATS);
			this.state = 1185;
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
	public showPartitions(): ShowPartitionsContext {
		let _localctx: ShowPartitionsContext = new ShowPartitionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, ImpalaSqlParser.RULE_showPartitions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1187;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_RANGE) {
				{
				this.state = 1188;
				this.match(ImpalaSqlParser.KW_RANGE);
				}
			}

			this.state = 1191;
			this.match(ImpalaSqlParser.KW_PARTITIONS);
			this.state = 1192;
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
	public showFiles(): ShowFilesContext {
		let _localctx: ShowFilesContext = new ShowFilesContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, ImpalaSqlParser.RULE_showFiles);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1194;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1195;
			this.match(ImpalaSqlParser.KW_FILES);
			this.state = 1196;
			this.match(ImpalaSqlParser.KW_IN);
			this.state = 1197;
			this.qualifiedName();
			this.state = 1207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 1198;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 1199;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1200;
				this.expression();
				this.state = 1203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.COMMA) {
					{
					this.state = 1201;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1202;
					this.expression();
					}
				}

				this.state = 1205;
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
		this.enterRule(_localctx, 126, ImpalaSqlParser.RULE_showRoles);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1209;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_CURRENT) {
				{
				this.state = 1210;
				this.match(ImpalaSqlParser.KW_CURRENT);
				}
			}

			this.state = 1213;
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
		this.enterRule(_localctx, 128, ImpalaSqlParser.RULE_showRoleGrant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1215;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1216;
			this.match(ImpalaSqlParser.KW_ROLE);
			this.state = 1217;
			this.match(ImpalaSqlParser.KW_GRANT);
			this.state = 1218;
			this.match(ImpalaSqlParser.KW_GROUP);
			this.state = 1219;
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
	public showGrant(): ShowGrantContext {
		let _localctx: ShowGrantContext = new ShowGrantContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, ImpalaSqlParser.RULE_showGrant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1221;
			this.match(ImpalaSqlParser.KW_SHOW);
			this.state = 1222;
			this.match(ImpalaSqlParser.KW_GRANT);
			this.state = 1223;
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
			this.state = 1224;
			this.identifier();
			this.state = 1230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_ON) {
				{
				this.state = 1225;
				this.match(ImpalaSqlParser.KW_ON);
				this.state = 1226;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParser.KW_COLUMN || _la === ImpalaSqlParser.KW_DATABASE || ((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & ((1 << (ImpalaSqlParser.KW_SERVER - 177)) | (1 << (ImpalaSqlParser.KW_TABLE - 177)) | (1 << (ImpalaSqlParser.KW_URI - 177)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1228;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
				case 1:
					{
					this.state = 1227;
					this.qualifiedName();
					}
					break;
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
	public addComments(): AddCommentsContext {
		let _localctx: AddCommentsContext = new AddCommentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, ImpalaSqlParser.RULE_addComments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1232;
			this.match(ImpalaSqlParser.KW_COMMENT);
			this.state = 1233;
			this.match(ImpalaSqlParser.KW_ON);
			this.state = 1234;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_COLUMN || _la === ImpalaSqlParser.KW_DATABASE || _la === ImpalaSqlParser.KW_TABLE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1235;
			this.qualifiedName();
			this.state = 1236;
			this.match(ImpalaSqlParser.KW_IS);
			this.state = 1239;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.STRING:
			case ImpalaSqlParser.UNICODE_STRING:
				{
				this.state = 1237;
				this.stringLiteral();
				}
				break;
			case ImpalaSqlParser.KW_NULL:
				{
				this.state = 1238;
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
	public explain(): ExplainContext {
		let _localctx: ExplainContext = new ExplainContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, ImpalaSqlParser.RULE_explain);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1241;
			this.match(ImpalaSqlParser.KW_EXPLAIN);
			this.state = 1242;
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
	public setSession(): SetSessionContext {
		let _localctx: SetSessionContext = new SetSessionContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, ImpalaSqlParser.RULE_setSession);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1244;
			this.match(ImpalaSqlParser.KW_SET);
			this.state = 1250;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				{
				this.state = 1245;
				this.match(ImpalaSqlParser.KW_ALL);
				}
				break;

			case 2:
				{
				this.state = 1246;
				this.identifier();
				this.state = 1247;
				this.match(ImpalaSqlParser.EQ);
				this.state = 1248;
				this.expression();
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
	public shutdown(): ShutdownContext {
		let _localctx: ShutdownContext = new ShutdownContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, ImpalaSqlParser.RULE_shutdown);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1252;
			this.match(ImpalaSqlParser.COLON);
			this.state = 1253;
			this.match(ImpalaSqlParser.KW_SHUTDOWN);
			this.state = 1254;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 1264;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				{
				this.state = 1256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.STRING || _la === ImpalaSqlParser.UNICODE_STRING) {
					{
					this.state = 1255;
					this.stringLiteral();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 1258;
				this.stringLiteral();
				this.state = 1261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.COMMA) {
					{
					this.state = 1259;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1260;
					this.expression();
					}
				}

				}
				break;

			case 3:
				{
				this.state = 1263;
				this.expression();
				}
				break;
			}
			this.state = 1266;
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
	public invalidateMeta(): InvalidateMetaContext {
		let _localctx: InvalidateMetaContext = new InvalidateMetaContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, ImpalaSqlParser.RULE_invalidateMeta);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1268;
			this.match(ImpalaSqlParser.KW_INVALIDATE);
			this.state = 1269;
			this.match(ImpalaSqlParser.KW_METADATA);
			this.state = 1270;
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
	public loadData(): LoadDataContext {
		let _localctx: LoadDataContext = new LoadDataContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, ImpalaSqlParser.RULE_loadData);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1272;
			this.match(ImpalaSqlParser.KW_LOAD);
			this.state = 1273;
			this.match(ImpalaSqlParser.KW_DATA);
			this.state = 1274;
			this.match(ImpalaSqlParser.KW_INPATH);
			this.state = 1275;
			this.match(ImpalaSqlParser.STRING);
			this.state = 1277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_OVERWRITE) {
				{
				this.state = 1276;
				this.match(ImpalaSqlParser.KW_OVERWRITE);
				}
			}

			this.state = 1279;
			this.match(ImpalaSqlParser.KW_INTO);
			this.state = 1280;
			this.match(ImpalaSqlParser.KW_TABLE);
			this.state = 1281;
			this.qualifiedName();
			this.state = 1291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 1282;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 1283;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1284;
				this.expression();
				this.state = 1287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.COMMA) {
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
		this.enterRule(_localctx, 144, ImpalaSqlParser.RULE_refreshStatement);
		try {
			this.state = 1296;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1293;
				this.refreshMeta();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1294;
				this.refreshAuth();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1295;
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
		this.enterRule(_localctx, 146, ImpalaSqlParser.RULE_refreshMeta);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1298;
			this.match(ImpalaSqlParser.KW_REFRESH);
			this.state = 1299;
			this.qualifiedName();
			this.state = 1312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 1300;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 1301;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1302;
				this.expression();
				this.state = 1307;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1303;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 1304;
						this.expression();
						}
						}
					}
					this.state = 1309;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
				}
				this.state = 1310;
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
		this.enterRule(_localctx, 148, ImpalaSqlParser.RULE_refreshAuth);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1314;
			this.match(ImpalaSqlParser.KW_REFRESH);
			this.state = 1315;
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
		this.enterRule(_localctx, 150, ImpalaSqlParser.RULE_refreshFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1317;
			this.match(ImpalaSqlParser.KW_REFRESH);
			this.state = 1318;
			this.match(ImpalaSqlParser.KW_FUNCTIONS);
			this.state = 1319;
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
	public ifExists(): IfExistsContext {
		let _localctx: IfExistsContext = new IfExistsContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, ImpalaSqlParser.RULE_ifExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1321;
			this.match(ImpalaSqlParser.KW_IF);
			this.state = 1322;
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
		this.enterRule(_localctx, 154, ImpalaSqlParser.RULE_ifNotExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1324;
			this.match(ImpalaSqlParser.KW_IF);
			this.state = 1325;
			this.match(ImpalaSqlParser.KW_NOT);
			this.state = 1326;
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
	public createCommonItem(): CreateCommonItemContext {
		let _localctx: CreateCommonItemContext = new CreateCommonItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, ImpalaSqlParser.RULE_createCommonItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_SORT) {
				{
				this.state = 1328;
				this.match(ImpalaSqlParser.KW_SORT);
				this.state = 1329;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 1330;
				this.columnAliases();
				}
			}

			this.state = 1335;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
			case 1:
				{
				this.state = 1333;
				this.match(ImpalaSqlParser.KW_COMMENT);
				this.state = 1334;
				_localctx._comment = this.stringLiteral();
				}
				break;
			}
			this.state = 1340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_ROW) {
				{
				this.state = 1337;
				this.match(ImpalaSqlParser.KW_ROW);
				this.state = 1338;
				this.match(ImpalaSqlParser.KW_FORMAT);
				this.state = 1339;
				this.rowFormat();
				}
			}

			this.state = 1345;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
			case 1:
				{
				this.state = 1342;
				this.match(ImpalaSqlParser.KW_WITH);
				this.state = 1343;
				this.match(ImpalaSqlParser.KW_SERDEPROPERTIES);
				this.state = 1344;
				_localctx._serdProp = this.properties();
				}
				break;
			}
			this.state = 1350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_STORED) {
				{
				this.state = 1347;
				this.match(ImpalaSqlParser.KW_STORED);
				this.state = 1348;
				this.match(ImpalaSqlParser.KW_AS);
				this.state = 1349;
				this.fileFormat();
				}
			}

			this.state = 1354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_LOCATION) {
				{
				this.state = 1352;
				this.match(ImpalaSqlParser.KW_LOCATION);
				this.state = 1353;
				_localctx._location = this.stringLiteral();
				}
			}

			this.state = 1366;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_CACHED:
				{
				this.state = 1356;
				this.match(ImpalaSqlParser.KW_CACHED);
				this.state = 1357;
				this.match(ImpalaSqlParser.KW_IN);
				this.state = 1358;
				_localctx._cacheName = this.qualifiedName();
				this.state = 1363;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
				case 1:
					{
					this.state = 1359;
					this.match(ImpalaSqlParser.KW_WITH);
					this.state = 1360;
					this.match(ImpalaSqlParser.KW_REPLICATION);
					this.state = 1361;
					this.match(ImpalaSqlParser.EQ);
					this.state = 1362;
					this.match(ImpalaSqlParser.INTEGER_VALUE);
					}
					break;
				}
				}
				break;
			case ImpalaSqlParser.KW_UNCACHED:
				{
				this.state = 1365;
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
			this.state = 1370;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_TBLPROPERTIES) {
				{
				this.state = 1368;
				this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
				this.state = 1369;
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
		this.enterRule(_localctx, 158, ImpalaSqlParser.RULE_assignmentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1372;
			this.assignmentItem();
			this.state = 1377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParser.COMMA) {
				{
				{
				this.state = 1373;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 1374;
				this.assignmentItem();
				}
				}
				this.state = 1379;
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
		this.enterRule(_localctx, 160, ImpalaSqlParser.RULE_assignmentItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1380;
			this.qualifiedName();
			this.state = 1381;
			this.match(ImpalaSqlParser.EQ);
			this.state = 1382;
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
		this.enterRule(_localctx, 162, ImpalaSqlParser.RULE_viewColumns);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1384;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 1385;
			this.identifier();
			this.state = 1388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_COMMENT) {
				{
				this.state = 1386;
				this.match(ImpalaSqlParser.KW_COMMENT);
				this.state = 1387;
				this.stringLiteral();
				}
			}

			this.state = 1398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParser.COMMA) {
				{
				{
				this.state = 1390;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 1391;
				this.identifier();
				this.state = 1394;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_COMMENT) {
					{
					this.state = 1392;
					this.match(ImpalaSqlParser.KW_COMMENT);
					this.state = 1393;
					this.stringLiteral();
					}
				}

				}
				}
				this.state = 1400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1401;
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
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, ImpalaSqlParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_WITH) {
				{
				this.state = 1403;
				this.with();
				}
			}

			this.state = 1406;
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
		this.enterRule(_localctx, 166, ImpalaSqlParser.RULE_with);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1408;
			this.match(ImpalaSqlParser.KW_WITH);
			this.state = 1409;
			this.namedQuery();
			this.state = 1414;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParser.COMMA) {
				{
				{
				this.state = 1410;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 1411;
				this.namedQuery();
				}
				}
				this.state = 1416;
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
		this.enterRule(_localctx, 168, ImpalaSqlParser.RULE_constraintSpecification);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1417;
			this.match(ImpalaSqlParser.KW_PRIMARY);
			this.state = 1418;
			this.match(ImpalaSqlParser.KW_KEY);
			this.state = 1419;
			this.columnAliases();
			this.state = 1421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_DISABLE) {
				{
				this.state = 1420;
				this.match(ImpalaSqlParser.KW_DISABLE);
				}
			}

			this.state = 1426;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 165, this._ctx) ) {
			case 1:
				{
				this.state = 1423;
				this.match(ImpalaSqlParser.KW_NOVALIDATE);
				}
				break;

			case 2:
				{
				this.state = 1424;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 1425;
				this.match(ImpalaSqlParser.KW_NOVALIDATE);
				}
				break;
			}
			this.state = 1431;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
			case 1:
				{
				this.state = 1428;
				this.match(ImpalaSqlParser.KW_RELY);
				}
				break;

			case 2:
				{
				this.state = 1429;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 1430;
				this.match(ImpalaSqlParser.KW_RELY);
				}
				break;
			}
			this.state = 1445;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_FOREIGN || _la === ImpalaSqlParser.COMMA) {
				{
				this.state = 1436;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ImpalaSqlParser.COMMA:
					{
					this.state = 1433;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1434;
					this.foreignKeySpecification();
					}
					break;
				case ImpalaSqlParser.KW_FOREIGN:
					{
					this.state = 1435;
					this.foreignKeySpecification();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1442;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1438;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 1439;
						this.foreignKeySpecification();
						}
						}
					}
					this.state = 1444;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
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
		this.enterRule(_localctx, 170, ImpalaSqlParser.RULE_foreignKeySpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1447;
			this.match(ImpalaSqlParser.KW_FOREIGN);
			this.state = 1448;
			this.match(ImpalaSqlParser.KW_KEY);
			this.state = 1449;
			this.columnAliases();
			this.state = 1450;
			this.match(ImpalaSqlParser.KW_REFERENCES);
			this.state = 1451;
			_localctx._tblName = this.qualifiedName();
			this.state = 1452;
			this.columnAliases();
			this.state = 1454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_DISABLE) {
				{
				this.state = 1453;
				this.match(ImpalaSqlParser.KW_DISABLE);
				}
			}

			this.state = 1457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_NOVALIDATE) {
				{
				this.state = 1456;
				this.match(ImpalaSqlParser.KW_NOVALIDATE);
				}
			}

			this.state = 1460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_RELY) {
				{
				this.state = 1459;
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
		this.enterRule(_localctx, 172, ImpalaSqlParser.RULE_columnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1462;
			this.identifier();
			this.state = 1463;
			this.type(0);
			this.state = 1466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_COMMENT) {
				{
				this.state = 1464;
				this.match(ImpalaSqlParser.KW_COMMENT);
				this.state = 1465;
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
		this.enterRule(_localctx, 174, ImpalaSqlParser.RULE_kuduTableElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1468;
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
		this.enterRule(_localctx, 176, ImpalaSqlParser.RULE_kuduColumnDefinition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1470;
			this.identifier();
			this.state = 1471;
			this.type(0);
			this.state = 1479;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_BLOCK_SIZE || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (ImpalaSqlParser.KW_COMPRESSION - 35)) | (1 << (ImpalaSqlParser.KW_DEFAULT - 35)) | (1 << (ImpalaSqlParser.KW_ENCODING - 35)))) !== 0) || _la === ImpalaSqlParser.KW_NOT || _la === ImpalaSqlParser.KW_NULL) {
				{
				this.state = 1472;
				this.kuduAttributes();
				this.state = 1476;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1473;
						this.kuduAttributes();
						}
						}
					}
					this.state = 1478;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
				}
				}
			}

			this.state = 1483;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_COMMENT) {
				{
				this.state = 1481;
				this.match(ImpalaSqlParser.KW_COMMENT);
				this.state = 1482;
				this.stringLiteral();
				}
			}

			this.state = 1487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PRIMARY) {
				{
				this.state = 1485;
				this.match(ImpalaSqlParser.KW_PRIMARY);
				this.state = 1486;
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
		this.enterRule(_localctx, 178, ImpalaSqlParser.RULE_columnSpecWithKudu);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1489;
			this.identifier();
			this.state = 1490;
			this.type(0);
			this.state = 1493;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				this.state = 1491;
				this.match(ImpalaSqlParser.KW_COMMENT);
				this.state = 1492;
				this.stringLiteral();
				}
				break;
			}
			this.state = 1502;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_BLOCK_SIZE || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (ImpalaSqlParser.KW_COMPRESSION - 35)) | (1 << (ImpalaSqlParser.KW_DEFAULT - 35)) | (1 << (ImpalaSqlParser.KW_ENCODING - 35)))) !== 0) || _la === ImpalaSqlParser.KW_NOT || _la === ImpalaSqlParser.KW_NULL) {
				{
				this.state = 1495;
				this.kuduAttributes();
				this.state = 1499;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1496;
						this.kuduAttributes();
						}
						}
					}
					this.state = 1501;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
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
		this.enterRule(_localctx, 180, ImpalaSqlParser.RULE_kuduAttributes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1509;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_NOT:
			case ImpalaSqlParser.KW_NULL:
				{
				this.state = 1505;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_NOT) {
					{
					this.state = 1504;
					this.match(ImpalaSqlParser.KW_NOT);
					}
				}

				this.state = 1507;
				this.match(ImpalaSqlParser.KW_NULL);
				}
				break;
			case ImpalaSqlParser.KW_BLOCK_SIZE:
			case ImpalaSqlParser.KW_COMPRESSION:
			case ImpalaSqlParser.KW_DEFAULT:
			case ImpalaSqlParser.KW_ENCODING:
				{
				this.state = 1508;
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
		this.enterRule(_localctx, 182, ImpalaSqlParser.RULE_kuduStorageAttr);
		try {
			this.state = 1519;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_ENCODING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1511;
				this.match(ImpalaSqlParser.KW_ENCODING);
				this.state = 1512;
				this.expression();
				}
				break;
			case ImpalaSqlParser.KW_COMPRESSION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1513;
				this.match(ImpalaSqlParser.KW_COMPRESSION);
				this.state = 1514;
				this.expression();
				}
				break;
			case ImpalaSqlParser.KW_DEFAULT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1515;
				this.match(ImpalaSqlParser.KW_DEFAULT);
				this.state = 1516;
				this.expression();
				}
				break;
			case ImpalaSqlParser.KW_BLOCK_SIZE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1517;
				this.match(ImpalaSqlParser.KW_BLOCK_SIZE);
				this.state = 1518;
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
		this.enterRule(_localctx, 184, ImpalaSqlParser.RULE_statsKey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1521;
			_la = this._input.LA(1);
			if (!(((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & ((1 << (ImpalaSqlParser.STATS_NUMDVS - 226)) | (1 << (ImpalaSqlParser.STATS_NUMNULLS - 226)) | (1 << (ImpalaSqlParser.STATS_AVGSIZE - 226)) | (1 << (ImpalaSqlParser.STATS_MAXSIZE - 226)))) !== 0))) {
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
		this.enterRule(_localctx, 186, ImpalaSqlParser.RULE_fileFormat);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1523;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_PARQUET || ((((_la - 218)) & ~0x1F) === 0 && ((1 << (_la - 218)) & ((1 << (ImpalaSqlParser.KW_TEXTFILE - 218)) | (1 << (ImpalaSqlParser.KW_ORC - 218)) | (1 << (ImpalaSqlParser.KW_AVRO - 218)) | (1 << (ImpalaSqlParser.KW_SEQUENCEFILE - 218)) | (1 << (ImpalaSqlParser.KW_RCFILE - 218)))) !== 0))) {
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
		this.enterRule(_localctx, 188, ImpalaSqlParser.RULE_kuduPartitionClause);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1538;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_HASH:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1525;
				this.hashClause();
				this.state = 1530;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1526;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 1527;
						this.hashClause();
						}
						}
					}
					this.state = 1532;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
				}
				this.state = 1535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.COMMA) {
					{
					this.state = 1533;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1534;
					this.rangeClause();
					}
				}

				}
				}
				break;
			case ImpalaSqlParser.KW_RANGE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1537;
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
		this.enterRule(_localctx, 190, ImpalaSqlParser.RULE_hashClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1540;
			this.match(ImpalaSqlParser.KW_HASH);
			this.state = 1542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.LPAREN) {
				{
				this.state = 1541;
				this.columnAliases();
				}
			}

			this.state = 1544;
			this.match(ImpalaSqlParser.KW_PARTITIONS);
			this.state = 1545;
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
		this.enterRule(_localctx, 192, ImpalaSqlParser.RULE_rangeClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1547;
			this.match(ImpalaSqlParser.KW_RANGE);
			this.state = 1549;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 188, this._ctx) ) {
			case 1:
				{
				this.state = 1548;
				this.columnAliases();
				}
				break;
			}
			this.state = 1551;
			this.match(ImpalaSqlParser.LPAREN);
			{
			this.state = 1552;
			this.match(ImpalaSqlParser.KW_PARTITION);
			this.state = 1553;
			this.kuduPartitionSpec();
			this.state = 1559;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1554;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1555;
					this.match(ImpalaSqlParser.KW_PARTITION);
					this.state = 1556;
					this.kuduPartitionSpec();
					}
					}
				}
				this.state = 1561;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
			}
			}
			this.state = 1562;
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
		this.enterRule(_localctx, 194, ImpalaSqlParser.RULE_kuduPartitionSpec);
		let _la: number;
		try {
			this.state = 1579;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1564;
				this.match(ImpalaSqlParser.KW_VALUE);
				this.state = 1565;
				this.partitionCol();
				this.state = 1566;
				this.expression();
				}
				break;
			case ImpalaSqlParser.KW_ADD:
			case ImpalaSqlParser.KW_ALL:
			case ImpalaSqlParser.KW_ANY:
			case ImpalaSqlParser.KW_ARRAY:
			case ImpalaSqlParser.KW_ASC:
			case ImpalaSqlParser.KW_AT:
			case ImpalaSqlParser.KW_BERNOULLI:
			case ImpalaSqlParser.KW_CASCADE:
			case ImpalaSqlParser.KW_CASE:
			case ImpalaSqlParser.KW_CAST:
			case ImpalaSqlParser.KW_COLUMN:
			case ImpalaSqlParser.KW_COLUMNS:
			case ImpalaSqlParser.KW_COMMENT:
			case ImpalaSqlParser.KW_CURRENT:
			case ImpalaSqlParser.KW_CURRENT_DATE:
			case ImpalaSqlParser.KW_CURRENT_PATH:
			case ImpalaSqlParser.KW_CURRENT_TIME:
			case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
			case ImpalaSqlParser.KW_CURRENT_USER:
			case ImpalaSqlParser.KW_DATA:
			case ImpalaSqlParser.KW_DATABASE:
			case ImpalaSqlParser.KW_DATABASES:
			case ImpalaSqlParser.KW_DAY:
			case ImpalaSqlParser.KW_DAYS:
			case ImpalaSqlParser.KW_DEFAULT:
			case ImpalaSqlParser.KW_DESC:
			case ImpalaSqlParser.KW_EXCLUDING:
			case ImpalaSqlParser.KW_EXISTS:
			case ImpalaSqlParser.KW_EXPLAIN:
			case ImpalaSqlParser.KW_EXTRACT:
			case ImpalaSqlParser.KW_FALSE:
			case ImpalaSqlParser.KW_FILTER:
			case ImpalaSqlParser.KW_FIRST:
			case ImpalaSqlParser.KW_FOLLOWING:
			case ImpalaSqlParser.KW_FORMAT:
			case ImpalaSqlParser.KW_FUNCTIONS:
			case ImpalaSqlParser.KW_GRANT:
			case ImpalaSqlParser.KW_GROUPING:
			case ImpalaSqlParser.KW_HOUR:
			case ImpalaSqlParser.KW_IF:
			case ImpalaSqlParser.KW_INCLUDING:
			case ImpalaSqlParser.KW_INTERVAL:
			case ImpalaSqlParser.KW_LAST:
			case ImpalaSqlParser.KW_LATERAL:
			case ImpalaSqlParser.KW_LIMIT:
			case ImpalaSqlParser.KW_LOCALTIME:
			case ImpalaSqlParser.KW_LOCALTIMESTAMP:
			case ImpalaSqlParser.KW_MAP:
			case ImpalaSqlParser.KW_MINUTE:
			case ImpalaSqlParser.KW_MONTH:
			case ImpalaSqlParser.KW_NFC:
			case ImpalaSqlParser.KW_NFD:
			case ImpalaSqlParser.KW_NFKC:
			case ImpalaSqlParser.KW_NFKD:
			case ImpalaSqlParser.KW_NORMALIZE:
			case ImpalaSqlParser.KW_NOT:
			case ImpalaSqlParser.KW_NULL:
			case ImpalaSqlParser.KW_NULLS:
			case ImpalaSqlParser.KW_OFFSET:
			case ImpalaSqlParser.KW_OPTION:
			case ImpalaSqlParser.KW_ORDINALITY:
			case ImpalaSqlParser.KW_OVER:
			case ImpalaSqlParser.KW_PARTITION:
			case ImpalaSqlParser.KW_PARTITIONS:
			case ImpalaSqlParser.KW_PARQUET:
			case ImpalaSqlParser.KW_POSITION:
			case ImpalaSqlParser.KW_PRECEDING:
			case ImpalaSqlParser.KW_PRIVILEGES:
			case ImpalaSqlParser.KW_PROPERTIES:
			case ImpalaSqlParser.KW_RANGE:
			case ImpalaSqlParser.KW_RENAME:
			case ImpalaSqlParser.KW_REPEATABLE:
			case ImpalaSqlParser.KW_REPLACE:
			case ImpalaSqlParser.KW_RESTRICT:
			case ImpalaSqlParser.KW_REVOKE:
			case ImpalaSqlParser.KW_ROLE:
			case ImpalaSqlParser.KW_ROLES:
			case ImpalaSqlParser.KW_ROW:
			case ImpalaSqlParser.KW_ROWS:
			case ImpalaSqlParser.KW_SCHEMA:
			case ImpalaSqlParser.KW_SCHEMAS:
			case ImpalaSqlParser.KW_SECOND:
			case ImpalaSqlParser.KW_SECONDS:
			case ImpalaSqlParser.KW_SET:
			case ImpalaSqlParser.KW_SHOW:
			case ImpalaSqlParser.KW_SOME:
			case ImpalaSqlParser.KW_STATS:
			case ImpalaSqlParser.KW_SUBSTRING:
			case ImpalaSqlParser.KW_SYSTEM:
			case ImpalaSqlParser.KW_TABLES:
			case ImpalaSqlParser.KW_TABLESAMPLE:
			case ImpalaSqlParser.KW_TO:
			case ImpalaSqlParser.KW_TRUE:
			case ImpalaSqlParser.KW_TRY_CAST:
			case ImpalaSqlParser.KW_TRUNCATE:
			case ImpalaSqlParser.KW_UNBOUNDED:
			case ImpalaSqlParser.KW_USE:
			case ImpalaSqlParser.KW_USER:
			case ImpalaSqlParser.KW_VALUES:
			case ImpalaSqlParser.KW_VIEW:
			case ImpalaSqlParser.KW_VIEWS:
			case ImpalaSqlParser.KW_YEAR:
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
				this.state = 1571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParser.KW_ADD) | (1 << ImpalaSqlParser.KW_ALL) | (1 << ImpalaSqlParser.KW_ANY) | (1 << ImpalaSqlParser.KW_ARRAY) | (1 << ImpalaSqlParser.KW_ASC) | (1 << ImpalaSqlParser.KW_AT) | (1 << ImpalaSqlParser.KW_BERNOULLI) | (1 << ImpalaSqlParser.KW_CASCADE) | (1 << ImpalaSqlParser.KW_CASE) | (1 << ImpalaSqlParser.KW_CAST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ImpalaSqlParser.KW_COLUMN - 32)) | (1 << (ImpalaSqlParser.KW_COLUMNS - 32)) | (1 << (ImpalaSqlParser.KW_COMMENT - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_DATE - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_PATH - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_TIME - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 32)) | (1 << (ImpalaSqlParser.KW_DATA - 32)) | (1 << (ImpalaSqlParser.KW_DATABASE - 32)) | (1 << (ImpalaSqlParser.KW_DATABASES - 32)) | (1 << (ImpalaSqlParser.KW_DAY - 32)) | (1 << (ImpalaSqlParser.KW_DAYS - 32)) | (1 << (ImpalaSqlParser.KW_DEFAULT - 32)) | (1 << (ImpalaSqlParser.KW_DESC - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (ImpalaSqlParser.KW_EXCLUDING - 65)) | (1 << (ImpalaSqlParser.KW_EXISTS - 65)) | (1 << (ImpalaSqlParser.KW_EXPLAIN - 65)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 65)) | (1 << (ImpalaSqlParser.KW_FALSE - 65)) | (1 << (ImpalaSqlParser.KW_FILTER - 65)) | (1 << (ImpalaSqlParser.KW_FIRST - 65)) | (1 << (ImpalaSqlParser.KW_FOLLOWING - 65)) | (1 << (ImpalaSqlParser.KW_FORMAT - 65)) | (1 << (ImpalaSqlParser.KW_FUNCTIONS - 65)) | (1 << (ImpalaSqlParser.KW_GRANT - 65)) | (1 << (ImpalaSqlParser.KW_GROUPING - 65)) | (1 << (ImpalaSqlParser.KW_HOUR - 65)) | (1 << (ImpalaSqlParser.KW_IF - 65)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 65)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (ImpalaSqlParser.KW_INTERVAL - 101)) | (1 << (ImpalaSqlParser.KW_LAST - 101)) | (1 << (ImpalaSqlParser.KW_LATERAL - 101)) | (1 << (ImpalaSqlParser.KW_LIMIT - 101)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 101)) | (1 << (ImpalaSqlParser.KW_LOCALTIMESTAMP - 101)) | (1 << (ImpalaSqlParser.KW_MAP - 101)) | (1 << (ImpalaSqlParser.KW_MINUTE - 101)) | (1 << (ImpalaSqlParser.KW_MONTH - 101)) | (1 << (ImpalaSqlParser.KW_NFC - 101)) | (1 << (ImpalaSqlParser.KW_NFD - 101)) | (1 << (ImpalaSqlParser.KW_NFKC - 101)) | (1 << (ImpalaSqlParser.KW_NFKD - 101)) | (1 << (ImpalaSqlParser.KW_NORMALIZE - 101)) | (1 << (ImpalaSqlParser.KW_NOT - 101)) | (1 << (ImpalaSqlParser.KW_NULL - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (ImpalaSqlParser.KW_NULLS - 133)) | (1 << (ImpalaSqlParser.KW_OFFSET - 133)) | (1 << (ImpalaSqlParser.KW_OPTION - 133)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 133)) | (1 << (ImpalaSqlParser.KW_OVER - 133)) | (1 << (ImpalaSqlParser.KW_PARTITION - 133)) | (1 << (ImpalaSqlParser.KW_PARTITIONS - 133)) | (1 << (ImpalaSqlParser.KW_PARQUET - 133)) | (1 << (ImpalaSqlParser.KW_POSITION - 133)) | (1 << (ImpalaSqlParser.KW_PRECEDING - 133)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 133)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 133)) | (1 << (ImpalaSqlParser.KW_RANGE - 133)) | (1 << (ImpalaSqlParser.KW_RENAME - 133)) | (1 << (ImpalaSqlParser.KW_REPEATABLE - 133)) | (1 << (ImpalaSqlParser.KW_REPLACE - 133)) | (1 << (ImpalaSqlParser.KW_RESTRICT - 133)) | (1 << (ImpalaSqlParser.KW_REVOKE - 133)))) !== 0) || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & ((1 << (ImpalaSqlParser.KW_ROLE - 165)) | (1 << (ImpalaSqlParser.KW_ROLES - 165)) | (1 << (ImpalaSqlParser.KW_ROW - 165)) | (1 << (ImpalaSqlParser.KW_ROWS - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMA - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMAS - 165)) | (1 << (ImpalaSqlParser.KW_SECOND - 165)) | (1 << (ImpalaSqlParser.KW_SECONDS - 165)) | (1 << (ImpalaSqlParser.KW_SET - 165)) | (1 << (ImpalaSqlParser.KW_SHOW - 165)) | (1 << (ImpalaSqlParser.KW_SOME - 165)) | (1 << (ImpalaSqlParser.KW_STATS - 165)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 165)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 165)) | (1 << (ImpalaSqlParser.KW_TABLES - 165)) | (1 << (ImpalaSqlParser.KW_TABLESAMPLE - 165)) | (1 << (ImpalaSqlParser.KW_TO - 165)) | (1 << (ImpalaSqlParser.KW_TRUE - 165)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 165)) | (1 << (ImpalaSqlParser.KW_TRUNCATE - 165)))) !== 0) || ((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & ((1 << (ImpalaSqlParser.KW_UNBOUNDED - 199)) | (1 << (ImpalaSqlParser.KW_USE - 199)) | (1 << (ImpalaSqlParser.KW_USER - 199)) | (1 << (ImpalaSqlParser.KW_VIEW - 199)) | (1 << (ImpalaSqlParser.KW_VIEWS - 199)) | (1 << (ImpalaSqlParser.KW_YEAR - 199)))) !== 0) || ((((_la - 236)) & ~0x1F) === 0 && ((1 << (_la - 236)) & ((1 << (ImpalaSqlParser.PLUS - 236)) | (1 << (ImpalaSqlParser.MINUS - 236)) | (1 << (ImpalaSqlParser.LPAREN - 236)) | (1 << (ImpalaSqlParser.QUESTION - 236)) | (1 << (ImpalaSqlParser.STRING - 236)) | (1 << (ImpalaSqlParser.UNICODE_STRING - 236)) | (1 << (ImpalaSqlParser.BINARY_LITERAL - 236)) | (1 << (ImpalaSqlParser.INTEGER_VALUE - 236)) | (1 << (ImpalaSqlParser.DECIMAL_VALUE - 236)) | (1 << (ImpalaSqlParser.DOUBLE_VALUE - 236)) | (1 << (ImpalaSqlParser.IDENTIFIER - 236)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 236)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 236)) | (1 << (ImpalaSqlParser.DOUBLE_PRECISION - 236)))) !== 0)) {
					{
					this.state = 1568;
					this.expression();
					this.state = 1569;
					this.rangeOperator();
					}
				}

				this.state = 1573;
				this.match(ImpalaSqlParser.KW_VALUES);
				this.state = 1577;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
				case 1:
					{
					this.state = 1574;
					this.rangeOperator();
					this.state = 1575;
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
		this.enterRule(_localctx, 196, ImpalaSqlParser.RULE_cacheSpec);
		try {
			this.state = 1591;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_CACHED:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1581;
				this.match(ImpalaSqlParser.KW_CACHED);
				this.state = 1582;
				this.match(ImpalaSqlParser.KW_IN);
				this.state = 1583;
				this.identifier();
				this.state = 1588;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 193, this._ctx) ) {
				case 1:
					{
					this.state = 1584;
					this.match(ImpalaSqlParser.KW_WITH);
					this.state = 1585;
					this.match(ImpalaSqlParser.KW_REPLICATION);
					this.state = 1586;
					this.match(ImpalaSqlParser.EQ);
					this.state = 1587;
					this.number();
					}
					break;
				}
				}
				break;
			case ImpalaSqlParser.KW_UNCACHED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1590;
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
		this.enterRule(_localctx, 198, ImpalaSqlParser.RULE_rangeOperator);
		try {
			this.state = 1598;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_ADD:
			case ImpalaSqlParser.KW_ALL:
			case ImpalaSqlParser.KW_ANY:
			case ImpalaSqlParser.KW_ARRAY:
			case ImpalaSqlParser.KW_ASC:
			case ImpalaSqlParser.KW_AT:
			case ImpalaSqlParser.KW_BERNOULLI:
			case ImpalaSqlParser.KW_CASCADE:
			case ImpalaSqlParser.KW_CASE:
			case ImpalaSqlParser.KW_CAST:
			case ImpalaSqlParser.KW_COLUMN:
			case ImpalaSqlParser.KW_COLUMNS:
			case ImpalaSqlParser.KW_COMMENT:
			case ImpalaSqlParser.KW_CURRENT:
			case ImpalaSqlParser.KW_CURRENT_DATE:
			case ImpalaSqlParser.KW_CURRENT_PATH:
			case ImpalaSqlParser.KW_CURRENT_TIME:
			case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
			case ImpalaSqlParser.KW_CURRENT_USER:
			case ImpalaSqlParser.KW_DATA:
			case ImpalaSqlParser.KW_DATABASE:
			case ImpalaSqlParser.KW_DATABASES:
			case ImpalaSqlParser.KW_DAY:
			case ImpalaSqlParser.KW_DAYS:
			case ImpalaSqlParser.KW_DEFAULT:
			case ImpalaSqlParser.KW_DESC:
			case ImpalaSqlParser.KW_EXCLUDING:
			case ImpalaSqlParser.KW_EXISTS:
			case ImpalaSqlParser.KW_EXPLAIN:
			case ImpalaSqlParser.KW_EXTRACT:
			case ImpalaSqlParser.KW_FALSE:
			case ImpalaSqlParser.KW_FILTER:
			case ImpalaSqlParser.KW_FIRST:
			case ImpalaSqlParser.KW_FOLLOWING:
			case ImpalaSqlParser.KW_FORMAT:
			case ImpalaSqlParser.KW_FUNCTIONS:
			case ImpalaSqlParser.KW_GRANT:
			case ImpalaSqlParser.KW_GROUPING:
			case ImpalaSqlParser.KW_HOUR:
			case ImpalaSqlParser.KW_IF:
			case ImpalaSqlParser.KW_INCLUDING:
			case ImpalaSqlParser.KW_INTERVAL:
			case ImpalaSqlParser.KW_LAST:
			case ImpalaSqlParser.KW_LATERAL:
			case ImpalaSqlParser.KW_LIMIT:
			case ImpalaSqlParser.KW_LOCALTIME:
			case ImpalaSqlParser.KW_LOCALTIMESTAMP:
			case ImpalaSqlParser.KW_MAP:
			case ImpalaSqlParser.KW_MINUTE:
			case ImpalaSqlParser.KW_MONTH:
			case ImpalaSqlParser.KW_NFC:
			case ImpalaSqlParser.KW_NFD:
			case ImpalaSqlParser.KW_NFKC:
			case ImpalaSqlParser.KW_NFKD:
			case ImpalaSqlParser.KW_NORMALIZE:
			case ImpalaSqlParser.KW_NOT:
			case ImpalaSqlParser.KW_NULL:
			case ImpalaSqlParser.KW_NULLS:
			case ImpalaSqlParser.KW_OFFSET:
			case ImpalaSqlParser.KW_OPTION:
			case ImpalaSqlParser.KW_ORDINALITY:
			case ImpalaSqlParser.KW_OVER:
			case ImpalaSqlParser.KW_PARTITION:
			case ImpalaSqlParser.KW_PARTITIONS:
			case ImpalaSqlParser.KW_PARQUET:
			case ImpalaSqlParser.KW_POSITION:
			case ImpalaSqlParser.KW_PRECEDING:
			case ImpalaSqlParser.KW_PRIVILEGES:
			case ImpalaSqlParser.KW_PROPERTIES:
			case ImpalaSqlParser.KW_RANGE:
			case ImpalaSqlParser.KW_RENAME:
			case ImpalaSqlParser.KW_REPEATABLE:
			case ImpalaSqlParser.KW_REPLACE:
			case ImpalaSqlParser.KW_RESTRICT:
			case ImpalaSqlParser.KW_REVOKE:
			case ImpalaSqlParser.KW_ROLE:
			case ImpalaSqlParser.KW_ROLES:
			case ImpalaSqlParser.KW_ROW:
			case ImpalaSqlParser.KW_ROWS:
			case ImpalaSqlParser.KW_SCHEMA:
			case ImpalaSqlParser.KW_SCHEMAS:
			case ImpalaSqlParser.KW_SECOND:
			case ImpalaSqlParser.KW_SECONDS:
			case ImpalaSqlParser.KW_SET:
			case ImpalaSqlParser.KW_SHOW:
			case ImpalaSqlParser.KW_SOME:
			case ImpalaSqlParser.KW_STATS:
			case ImpalaSqlParser.KW_SUBSTRING:
			case ImpalaSqlParser.KW_SYSTEM:
			case ImpalaSqlParser.KW_TABLES:
			case ImpalaSqlParser.KW_TABLESAMPLE:
			case ImpalaSqlParser.KW_TO:
			case ImpalaSqlParser.KW_TRUE:
			case ImpalaSqlParser.KW_TRY_CAST:
			case ImpalaSqlParser.KW_TRUNCATE:
			case ImpalaSqlParser.KW_UNBOUNDED:
			case ImpalaSqlParser.KW_USE:
			case ImpalaSqlParser.KW_USER:
			case ImpalaSqlParser.KW_VALUES:
			case ImpalaSqlParser.KW_VIEW:
			case ImpalaSqlParser.KW_VIEWS:
			case ImpalaSqlParser.KW_YEAR:
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
				this.state = 1594;
				this.match(ImpalaSqlParser.LT);
				}
				break;
			case ImpalaSqlParser.LTE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1595;
				this.match(ImpalaSqlParser.LTE);
				}
				break;
			case ImpalaSqlParser.GT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1596;
				this.match(ImpalaSqlParser.GT);
				}
				break;
			case ImpalaSqlParser.GTE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1597;
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
		this.enterRule(_localctx, 200, ImpalaSqlParser.RULE_partitionCol);
		try {
			this.state = 1608;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.EQ:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1600;
				this.match(ImpalaSqlParser.EQ);
				}
				break;
			case ImpalaSqlParser.NEQ:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1601;
				this.match(ImpalaSqlParser.NEQ);
				}
				break;
			case ImpalaSqlParser.KW_LIKE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1602;
				this.match(ImpalaSqlParser.KW_LIKE);
				}
				break;
			case ImpalaSqlParser.KW_RLIKE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1603;
				this.match(ImpalaSqlParser.KW_RLIKE);
				}
				break;
			case ImpalaSqlParser.KW_REGEXP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1604;
				this.match(ImpalaSqlParser.KW_REGEXP);
				}
				break;
			case ImpalaSqlParser.KW_BETWEEN:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1605;
				this.match(ImpalaSqlParser.KW_BETWEEN);
				}
				break;
			case ImpalaSqlParser.KW_IN:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1606;
				this.match(ImpalaSqlParser.KW_IN);
				}
				break;
			case ImpalaSqlParser.KW_ADD:
			case ImpalaSqlParser.KW_ALL:
			case ImpalaSqlParser.KW_ANY:
			case ImpalaSqlParser.KW_ARRAY:
			case ImpalaSqlParser.KW_ASC:
			case ImpalaSqlParser.KW_AT:
			case ImpalaSqlParser.KW_BERNOULLI:
			case ImpalaSqlParser.KW_CASCADE:
			case ImpalaSqlParser.KW_CASE:
			case ImpalaSqlParser.KW_CAST:
			case ImpalaSqlParser.KW_COLUMN:
			case ImpalaSqlParser.KW_COLUMNS:
			case ImpalaSqlParser.KW_COMMENT:
			case ImpalaSqlParser.KW_CURRENT:
			case ImpalaSqlParser.KW_CURRENT_DATE:
			case ImpalaSqlParser.KW_CURRENT_PATH:
			case ImpalaSqlParser.KW_CURRENT_TIME:
			case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
			case ImpalaSqlParser.KW_CURRENT_USER:
			case ImpalaSqlParser.KW_DATA:
			case ImpalaSqlParser.KW_DATABASE:
			case ImpalaSqlParser.KW_DATABASES:
			case ImpalaSqlParser.KW_DAY:
			case ImpalaSqlParser.KW_DAYS:
			case ImpalaSqlParser.KW_DEFAULT:
			case ImpalaSqlParser.KW_DESC:
			case ImpalaSqlParser.KW_EXCLUDING:
			case ImpalaSqlParser.KW_EXISTS:
			case ImpalaSqlParser.KW_EXPLAIN:
			case ImpalaSqlParser.KW_EXTRACT:
			case ImpalaSqlParser.KW_FALSE:
			case ImpalaSqlParser.KW_FILTER:
			case ImpalaSqlParser.KW_FIRST:
			case ImpalaSqlParser.KW_FOLLOWING:
			case ImpalaSqlParser.KW_FORMAT:
			case ImpalaSqlParser.KW_FUNCTIONS:
			case ImpalaSqlParser.KW_GRANT:
			case ImpalaSqlParser.KW_GROUPING:
			case ImpalaSqlParser.KW_HOUR:
			case ImpalaSqlParser.KW_IF:
			case ImpalaSqlParser.KW_INCLUDING:
			case ImpalaSqlParser.KW_INTERVAL:
			case ImpalaSqlParser.KW_LAST:
			case ImpalaSqlParser.KW_LATERAL:
			case ImpalaSqlParser.KW_LIMIT:
			case ImpalaSqlParser.KW_LOCALTIME:
			case ImpalaSqlParser.KW_LOCALTIMESTAMP:
			case ImpalaSqlParser.KW_MAP:
			case ImpalaSqlParser.KW_MINUTE:
			case ImpalaSqlParser.KW_MONTH:
			case ImpalaSqlParser.KW_NFC:
			case ImpalaSqlParser.KW_NFD:
			case ImpalaSqlParser.KW_NFKC:
			case ImpalaSqlParser.KW_NFKD:
			case ImpalaSqlParser.KW_NORMALIZE:
			case ImpalaSqlParser.KW_NOT:
			case ImpalaSqlParser.KW_NULL:
			case ImpalaSqlParser.KW_NULLS:
			case ImpalaSqlParser.KW_OFFSET:
			case ImpalaSqlParser.KW_OPTION:
			case ImpalaSqlParser.KW_ORDINALITY:
			case ImpalaSqlParser.KW_OVER:
			case ImpalaSqlParser.KW_PARTITION:
			case ImpalaSqlParser.KW_PARTITIONS:
			case ImpalaSqlParser.KW_PARQUET:
			case ImpalaSqlParser.KW_POSITION:
			case ImpalaSqlParser.KW_PRECEDING:
			case ImpalaSqlParser.KW_PRIVILEGES:
			case ImpalaSqlParser.KW_PROPERTIES:
			case ImpalaSqlParser.KW_RANGE:
			case ImpalaSqlParser.KW_RENAME:
			case ImpalaSqlParser.KW_REPEATABLE:
			case ImpalaSqlParser.KW_REPLACE:
			case ImpalaSqlParser.KW_RESTRICT:
			case ImpalaSqlParser.KW_REVOKE:
			case ImpalaSqlParser.KW_ROLE:
			case ImpalaSqlParser.KW_ROLES:
			case ImpalaSqlParser.KW_ROW:
			case ImpalaSqlParser.KW_ROWS:
			case ImpalaSqlParser.KW_SCHEMA:
			case ImpalaSqlParser.KW_SCHEMAS:
			case ImpalaSqlParser.KW_SECOND:
			case ImpalaSqlParser.KW_SECONDS:
			case ImpalaSqlParser.KW_SET:
			case ImpalaSqlParser.KW_SHOW:
			case ImpalaSqlParser.KW_SOME:
			case ImpalaSqlParser.KW_STATS:
			case ImpalaSqlParser.KW_SUBSTRING:
			case ImpalaSqlParser.KW_SYSTEM:
			case ImpalaSqlParser.KW_TABLES:
			case ImpalaSqlParser.KW_TABLESAMPLE:
			case ImpalaSqlParser.KW_TO:
			case ImpalaSqlParser.KW_TRUE:
			case ImpalaSqlParser.KW_TRY_CAST:
			case ImpalaSqlParser.KW_TRUNCATE:
			case ImpalaSqlParser.KW_UNBOUNDED:
			case ImpalaSqlParser.KW_USE:
			case ImpalaSqlParser.KW_USER:
			case ImpalaSqlParser.KW_VALUES:
			case ImpalaSqlParser.KW_VIEW:
			case ImpalaSqlParser.KW_VIEWS:
			case ImpalaSqlParser.KW_YEAR:
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
				this.state = 1607;
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
		this.enterRule(_localctx, 202, ImpalaSqlParser.RULE_likeClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1610;
			this.match(ImpalaSqlParser.KW_LIKE);
			this.state = 1611;
			this.qualifiedName();
			this.state = 1614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_EXCLUDING || _la === ImpalaSqlParser.KW_INCLUDING) {
				{
				this.state = 1612;
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
				this.state = 1613;
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
		this.enterRule(_localctx, 204, ImpalaSqlParser.RULE_properties);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1616;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 1617;
			this.property();
			this.state = 1622;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParser.COMMA) {
				{
				{
				this.state = 1618;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 1619;
				this.property();
				}
				}
				this.state = 1624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1625;
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
		this.enterRule(_localctx, 206, ImpalaSqlParser.RULE_partitionedBy);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1627;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 1628;
			this.columnDefinition();
			this.state = 1633;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 199, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1629;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1630;
					this.columnDefinition();
					}
					}
				}
				this.state = 1635;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 199, this._ctx);
			}
			this.state = 1636;
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
		this.enterRule(_localctx, 208, ImpalaSqlParser.RULE_sortedBy);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1638;
			this.expression();
			this.state = 1643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParser.COMMA) {
				{
				{
				this.state = 1639;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 1640;
				this.expression();
				}
				}
				this.state = 1645;
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
		this.enterRule(_localctx, 210, ImpalaSqlParser.RULE_rowFormat);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1646;
			this.match(ImpalaSqlParser.KW_DELIMITED);
			this.state = 1656;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_FIELDS) {
				{
				this.state = 1647;
				this.match(ImpalaSqlParser.KW_FIELDS);
				this.state = 1648;
				this.match(ImpalaSqlParser.KW_TERMINATED);
				this.state = 1649;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 1650;
				this.stringLiteral();
				this.state = 1654;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_ESCAPED) {
					{
					this.state = 1651;
					this.match(ImpalaSqlParser.KW_ESCAPED);
					this.state = 1652;
					this.match(ImpalaSqlParser.KW_BY);
					this.state = 1653;
					this.stringLiteral();
					}
				}

				}
			}

			this.state = 1662;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_LINES) {
				{
				this.state = 1658;
				this.match(ImpalaSqlParser.KW_LINES);
				this.state = 1659;
				this.match(ImpalaSqlParser.KW_TERMINATED);
				this.state = 1660;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 1661;
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
		this.enterRule(_localctx, 212, ImpalaSqlParser.RULE_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1664;
			this.identifier();
			this.state = 1667;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.EQ) {
				{
				this.state = 1665;
				this.match(ImpalaSqlParser.EQ);
				this.state = 1666;
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
		this.enterRule(_localctx, 214, ImpalaSqlParser.RULE_queryNoWith);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1669;
			this.queryTerm(0);
			this.state = 1680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_ORDER) {
				{
				this.state = 1670;
				this.match(ImpalaSqlParser.KW_ORDER);
				this.state = 1671;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 1672;
				this.sortItem();
				this.state = 1677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 1673;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1674;
					this.sortItem();
					}
					}
					this.state = 1679;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1688;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_LIMIT) {
				{
				this.state = 1682;
				this.match(ImpalaSqlParser.KW_LIMIT);
				this.state = 1683;
				_localctx._rows = this.expression();
				this.state = 1686;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_OFFSET) {
					{
					this.state = 1684;
					this.match(ImpalaSqlParser.KW_OFFSET);
					this.state = 1685;
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
		let _startState: number = 216;
		this.enterRecursionRule(_localctx, 216, ImpalaSqlParser.RULE_queryTerm, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new QueryTermDefaultContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 1691;
			this.queryPrimary();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1707;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1705;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
					case 1:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						(_localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_queryTerm);
						this.state = 1693;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1694;
						(_localctx as SetOperationContext)._operator = this.match(ImpalaSqlParser.KW_INTERSECT);
						this.state = 1696;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === ImpalaSqlParser.KW_ALL || _la === ImpalaSqlParser.KW_DISTINCT) {
							{
							this.state = 1695;
							this.setQuantifier();
							}
						}

						this.state = 1698;
						(_localctx as SetOperationContext)._right = this.queryTerm(3);
						}
						break;

					case 2:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						(_localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_queryTerm);
						this.state = 1699;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1700;
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
						this.state = 1702;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === ImpalaSqlParser.KW_ALL || _la === ImpalaSqlParser.KW_DISTINCT) {
							{
							this.state = 1701;
							this.setQuantifier();
							}
						}

						this.state = 1704;
						(_localctx as SetOperationContext)._right = this.queryTerm(2);
						}
						break;
					}
					}
				}
				this.state = 1709;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
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
		this.enterRule(_localctx, 218, ImpalaSqlParser.RULE_queryPrimary);
		try {
			let _alt: number;
			this.state = 1726;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_SELECT:
				_localctx = new QueryPrimaryDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1710;
				this.querySpecification();
				}
				break;
			case ImpalaSqlParser.KW_TABLE:
				_localctx = new TableContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1711;
				this.match(ImpalaSqlParser.KW_TABLE);
				this.state = 1712;
				this.qualifiedName();
				}
				break;
			case ImpalaSqlParser.KW_VALUES:
				_localctx = new InlineTableContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1713;
				this.match(ImpalaSqlParser.KW_VALUES);
				this.state = 1714;
				this.expression();
				this.state = 1719;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1715;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 1716;
						this.expression();
						}
						}
					}
					this.state = 1721;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
				}
				}
				break;
			case ImpalaSqlParser.LPAREN:
				_localctx = new SubqueryContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1722;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1723;
				this.queryNoWith();
				this.state = 1724;
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
		this.enterRule(_localctx, 220, ImpalaSqlParser.RULE_sortItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1728;
			this.expression();
			this.state = 1730;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_ASC || _la === ImpalaSqlParser.KW_DESC) {
				{
				this.state = 1729;
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

			this.state = 1734;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_NULLS) {
				{
				this.state = 1732;
				this.match(ImpalaSqlParser.KW_NULLS);
				this.state = 1733;
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
		this.enterRule(_localctx, 222, ImpalaSqlParser.RULE_querySpecification);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1736;
			this.match(ImpalaSqlParser.KW_SELECT);
			this.state = 1738;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 217, this._ctx) ) {
			case 1:
				{
				this.state = 1737;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1741;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_STRAIGHT_JOIN) {
				{
				this.state = 1740;
				this.match(ImpalaSqlParser.KW_STRAIGHT_JOIN);
				}
			}

			this.state = 1743;
			this.selectItem();
			this.state = 1748;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1744;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1745;
					this.selectItem();
					}
					}
				}
				this.state = 1750;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 219, this._ctx);
			}
			this.state = 1760;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 221, this._ctx) ) {
			case 1:
				{
				this.state = 1751;
				this.match(ImpalaSqlParser.KW_FROM);
				this.state = 1752;
				this.relation(0);
				this.state = 1757;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1753;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 1754;
						this.relation(0);
						}
						}
					}
					this.state = 1759;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
				}
				}
				break;
			}
			this.state = 1764;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 222, this._ctx) ) {
			case 1:
				{
				this.state = 1762;
				this.match(ImpalaSqlParser.KW_WHERE);
				this.state = 1763;
				_localctx._where = this.booleanExpression(0);
				}
				break;
			}
			this.state = 1769;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 223, this._ctx) ) {
			case 1:
				{
				this.state = 1766;
				this.match(ImpalaSqlParser.KW_GROUP);
				this.state = 1767;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 1768;
				this.groupBy();
				}
				break;
			}
			this.state = 1773;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 224, this._ctx) ) {
			case 1:
				{
				this.state = 1771;
				this.match(ImpalaSqlParser.KW_HAVING);
				this.state = 1772;
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
		this.enterRule(_localctx, 224, ImpalaSqlParser.RULE_groupBy);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1776;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 225, this._ctx) ) {
			case 1:
				{
				this.state = 1775;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1778;
			this.groupingElement();
			this.state = 1783;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 226, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1779;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1780;
					this.groupingElement();
					}
					}
				}
				this.state = 1785;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 226, this._ctx);
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
		this.enterRule(_localctx, 226, ImpalaSqlParser.RULE_groupingElement);
		try {
			_localctx = new SingleGroupingSetContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1786;
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
		this.enterRule(_localctx, 228, ImpalaSqlParser.RULE_groupingSet);
		let _la: number;
		try {
			this.state = 1801;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 229, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1788;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1797;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParser.KW_ADD) | (1 << ImpalaSqlParser.KW_ALL) | (1 << ImpalaSqlParser.KW_ANY) | (1 << ImpalaSqlParser.KW_ARRAY) | (1 << ImpalaSqlParser.KW_ASC) | (1 << ImpalaSqlParser.KW_AT) | (1 << ImpalaSqlParser.KW_BERNOULLI) | (1 << ImpalaSqlParser.KW_CASCADE) | (1 << ImpalaSqlParser.KW_CASE) | (1 << ImpalaSqlParser.KW_CAST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ImpalaSqlParser.KW_COLUMN - 32)) | (1 << (ImpalaSqlParser.KW_COLUMNS - 32)) | (1 << (ImpalaSqlParser.KW_COMMENT - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_DATE - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_PATH - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_TIME - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 32)) | (1 << (ImpalaSqlParser.KW_DATA - 32)) | (1 << (ImpalaSqlParser.KW_DATABASE - 32)) | (1 << (ImpalaSqlParser.KW_DATABASES - 32)) | (1 << (ImpalaSqlParser.KW_DAY - 32)) | (1 << (ImpalaSqlParser.KW_DAYS - 32)) | (1 << (ImpalaSqlParser.KW_DEFAULT - 32)) | (1 << (ImpalaSqlParser.KW_DESC - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (ImpalaSqlParser.KW_EXCLUDING - 65)) | (1 << (ImpalaSqlParser.KW_EXISTS - 65)) | (1 << (ImpalaSqlParser.KW_EXPLAIN - 65)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 65)) | (1 << (ImpalaSqlParser.KW_FALSE - 65)) | (1 << (ImpalaSqlParser.KW_FILTER - 65)) | (1 << (ImpalaSqlParser.KW_FIRST - 65)) | (1 << (ImpalaSqlParser.KW_FOLLOWING - 65)) | (1 << (ImpalaSqlParser.KW_FORMAT - 65)) | (1 << (ImpalaSqlParser.KW_FUNCTIONS - 65)) | (1 << (ImpalaSqlParser.KW_GRANT - 65)) | (1 << (ImpalaSqlParser.KW_GROUPING - 65)) | (1 << (ImpalaSqlParser.KW_HOUR - 65)) | (1 << (ImpalaSqlParser.KW_IF - 65)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 65)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (ImpalaSqlParser.KW_INTERVAL - 101)) | (1 << (ImpalaSqlParser.KW_LAST - 101)) | (1 << (ImpalaSqlParser.KW_LATERAL - 101)) | (1 << (ImpalaSqlParser.KW_LIMIT - 101)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 101)) | (1 << (ImpalaSqlParser.KW_LOCALTIMESTAMP - 101)) | (1 << (ImpalaSqlParser.KW_MAP - 101)) | (1 << (ImpalaSqlParser.KW_MINUTE - 101)) | (1 << (ImpalaSqlParser.KW_MONTH - 101)) | (1 << (ImpalaSqlParser.KW_NFC - 101)) | (1 << (ImpalaSqlParser.KW_NFD - 101)) | (1 << (ImpalaSqlParser.KW_NFKC - 101)) | (1 << (ImpalaSqlParser.KW_NFKD - 101)) | (1 << (ImpalaSqlParser.KW_NORMALIZE - 101)) | (1 << (ImpalaSqlParser.KW_NOT - 101)) | (1 << (ImpalaSqlParser.KW_NULL - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (ImpalaSqlParser.KW_NULLS - 133)) | (1 << (ImpalaSqlParser.KW_OFFSET - 133)) | (1 << (ImpalaSqlParser.KW_OPTION - 133)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 133)) | (1 << (ImpalaSqlParser.KW_OVER - 133)) | (1 << (ImpalaSqlParser.KW_PARTITION - 133)) | (1 << (ImpalaSqlParser.KW_PARTITIONS - 133)) | (1 << (ImpalaSqlParser.KW_PARQUET - 133)) | (1 << (ImpalaSqlParser.KW_POSITION - 133)) | (1 << (ImpalaSqlParser.KW_PRECEDING - 133)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 133)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 133)) | (1 << (ImpalaSqlParser.KW_RANGE - 133)) | (1 << (ImpalaSqlParser.KW_RENAME - 133)) | (1 << (ImpalaSqlParser.KW_REPEATABLE - 133)) | (1 << (ImpalaSqlParser.KW_REPLACE - 133)) | (1 << (ImpalaSqlParser.KW_RESTRICT - 133)) | (1 << (ImpalaSqlParser.KW_REVOKE - 133)))) !== 0) || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & ((1 << (ImpalaSqlParser.KW_ROLE - 165)) | (1 << (ImpalaSqlParser.KW_ROLES - 165)) | (1 << (ImpalaSqlParser.KW_ROW - 165)) | (1 << (ImpalaSqlParser.KW_ROWS - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMA - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMAS - 165)) | (1 << (ImpalaSqlParser.KW_SECOND - 165)) | (1 << (ImpalaSqlParser.KW_SECONDS - 165)) | (1 << (ImpalaSqlParser.KW_SET - 165)) | (1 << (ImpalaSqlParser.KW_SHOW - 165)) | (1 << (ImpalaSqlParser.KW_SOME - 165)) | (1 << (ImpalaSqlParser.KW_STATS - 165)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 165)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 165)) | (1 << (ImpalaSqlParser.KW_TABLES - 165)) | (1 << (ImpalaSqlParser.KW_TABLESAMPLE - 165)) | (1 << (ImpalaSqlParser.KW_TO - 165)) | (1 << (ImpalaSqlParser.KW_TRUE - 165)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 165)) | (1 << (ImpalaSqlParser.KW_TRUNCATE - 165)))) !== 0) || ((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & ((1 << (ImpalaSqlParser.KW_UNBOUNDED - 199)) | (1 << (ImpalaSqlParser.KW_USE - 199)) | (1 << (ImpalaSqlParser.KW_USER - 199)) | (1 << (ImpalaSqlParser.KW_VIEW - 199)) | (1 << (ImpalaSqlParser.KW_VIEWS - 199)) | (1 << (ImpalaSqlParser.KW_YEAR - 199)))) !== 0) || ((((_la - 236)) & ~0x1F) === 0 && ((1 << (_la - 236)) & ((1 << (ImpalaSqlParser.PLUS - 236)) | (1 << (ImpalaSqlParser.MINUS - 236)) | (1 << (ImpalaSqlParser.LPAREN - 236)) | (1 << (ImpalaSqlParser.QUESTION - 236)) | (1 << (ImpalaSqlParser.STRING - 236)) | (1 << (ImpalaSqlParser.UNICODE_STRING - 236)) | (1 << (ImpalaSqlParser.BINARY_LITERAL - 236)) | (1 << (ImpalaSqlParser.INTEGER_VALUE - 236)) | (1 << (ImpalaSqlParser.DECIMAL_VALUE - 236)) | (1 << (ImpalaSqlParser.DOUBLE_VALUE - 236)) | (1 << (ImpalaSqlParser.IDENTIFIER - 236)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 236)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 236)) | (1 << (ImpalaSqlParser.DOUBLE_PRECISION - 236)))) !== 0)) {
					{
					this.state = 1789;
					this.expression();
					this.state = 1794;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 1790;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 1791;
						this.expression();
						}
						}
						this.state = 1796;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1799;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1800;
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
	public namedQuery(): NamedQueryContext {
		let _localctx: NamedQueryContext = new NamedQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, ImpalaSqlParser.RULE_namedQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1803;
			_localctx._name = this.identifier();
			this.state = 1805;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.LPAREN) {
				{
				this.state = 1804;
				this.columnAliases();
				}
			}

			this.state = 1807;
			this.match(ImpalaSqlParser.KW_AS);
			this.state = 1808;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 1809;
			this.query();
			this.state = 1810;
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
	public setQuantifier(): SetQuantifierContext {
		let _localctx: SetQuantifierContext = new SetQuantifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, ImpalaSqlParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1812;
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
		this.enterRule(_localctx, 234, ImpalaSqlParser.RULE_selectItem);
		let _la: number;
		try {
			this.state = 1826;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 233, this._ctx) ) {
			case 1:
				_localctx = new SelectSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1814;
				this.expression();
				this.state = 1819;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 232, this._ctx) ) {
				case 1:
					{
					this.state = 1816;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ImpalaSqlParser.KW_AS) {
						{
						this.state = 1815;
						this.match(ImpalaSqlParser.KW_AS);
						}
					}

					this.state = 1818;
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
				this.state = 1821;
				this.qualifiedName();
				this.state = 1822;
				this.match(ImpalaSqlParser.DOT);
				this.state = 1823;
				this.match(ImpalaSqlParser.ASTERISK);
				}
				break;

			case 3:
				_localctx = new SelectAllContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1825;
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
		let _startState: number = 236;
		this.enterRecursionRule(_localctx, 236, ImpalaSqlParser.RULE_relation, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new RelationDefaultContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 1829;
			this.sampledRelation();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1844;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 235, this._ctx);
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
					this.state = 1831;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1840;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ImpalaSqlParser.KW_CROSS:
						{
						this.state = 1832;
						this.match(ImpalaSqlParser.KW_CROSS);
						this.state = 1833;
						this.match(ImpalaSqlParser.KW_JOIN);
						this.state = 1834;
						(_localctx as JoinRelationContext)._right = this.sampledRelation();
						}
						break;
					case ImpalaSqlParser.KW_FULL:
					case ImpalaSqlParser.KW_INNER:
					case ImpalaSqlParser.KW_JOIN:
					case ImpalaSqlParser.KW_LEFT:
					case ImpalaSqlParser.KW_RIGHT:
						{
						this.state = 1835;
						this.joinType();
						this.state = 1836;
						this.match(ImpalaSqlParser.KW_JOIN);
						this.state = 1837;
						(_localctx as JoinRelationContext)._rightRelation = this.relation(0);
						this.state = 1838;
						this.joinCriteria();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 1846;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 235, this._ctx);
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
		this.enterRule(_localctx, 238, ImpalaSqlParser.RULE_joinType);
		let _la: number;
		try {
			this.state = 1878;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1848;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_INNER) {
					{
					this.state = 1847;
					this.match(ImpalaSqlParser.KW_INNER);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1850;
				this.match(ImpalaSqlParser.KW_LEFT);
				this.state = 1852;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_INNER) {
					{
					this.state = 1851;
					this.match(ImpalaSqlParser.KW_INNER);
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1854;
				this.match(ImpalaSqlParser.KW_RIGHT);
				this.state = 1856;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_INNER) {
					{
					this.state = 1855;
					this.match(ImpalaSqlParser.KW_INNER);
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1858;
				this.match(ImpalaSqlParser.KW_LEFT);
				this.state = 1860;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_OUTER) {
					{
					this.state = 1859;
					this.match(ImpalaSqlParser.KW_OUTER);
					}
				}

				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1862;
				this.match(ImpalaSqlParser.KW_RIGHT);
				this.state = 1864;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_OUTER) {
					{
					this.state = 1863;
					this.match(ImpalaSqlParser.KW_OUTER);
					}
				}

				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1866;
				this.match(ImpalaSqlParser.KW_FULL);
				this.state = 1868;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_OUTER) {
					{
					this.state = 1867;
					this.match(ImpalaSqlParser.KW_OUTER);
					}
				}

				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1870;
				this.match(ImpalaSqlParser.KW_LEFT);
				this.state = 1871;
				this.match(ImpalaSqlParser.KW_SEMI);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1872;
				this.match(ImpalaSqlParser.KW_RIGHT);
				this.state = 1873;
				this.match(ImpalaSqlParser.KW_SEMI);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1874;
				this.match(ImpalaSqlParser.KW_LEFT);
				this.state = 1875;
				this.match(ImpalaSqlParser.KW_ANTI);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1876;
				this.match(ImpalaSqlParser.KW_RIGHT);
				this.state = 1877;
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
		this.enterRule(_localctx, 240, ImpalaSqlParser.RULE_joinCriteria);
		let _la: number;
		try {
			this.state = 1894;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_ON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1880;
				this.match(ImpalaSqlParser.KW_ON);
				this.state = 1881;
				this.booleanExpression(0);
				}
				break;
			case ImpalaSqlParser.KW_USING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1882;
				this.match(ImpalaSqlParser.KW_USING);
				this.state = 1883;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1884;
				this.identifier();
				this.state = 1889;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 1885;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1886;
					this.identifier();
					}
					}
					this.state = 1891;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1892;
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
		this.enterRule(_localctx, 242, ImpalaSqlParser.RULE_sampledRelation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1896;
			this.aliasedRelation();
			this.state = 1909;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 246, this._ctx) ) {
			case 1:
				{
				this.state = 1897;
				this.match(ImpalaSqlParser.KW_TABLESAMPLE);
				this.state = 1898;
				this.sampleType();
				this.state = 1899;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1900;
				_localctx._percentage = this.expression();
				this.state = 1901;
				this.match(ImpalaSqlParser.RPAREN);
				this.state = 1907;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 245, this._ctx) ) {
				case 1:
					{
					this.state = 1902;
					this.match(ImpalaSqlParser.KW_REPEATABLE);
					this.state = 1903;
					this.match(ImpalaSqlParser.LPAREN);
					this.state = 1904;
					_localctx._seed = this.expression();
					this.state = 1905;
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
		this.enterRule(_localctx, 244, ImpalaSqlParser.RULE_sampleType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1911;
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
		this.enterRule(_localctx, 246, ImpalaSqlParser.RULE_aliasedRelation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1913;
			this.relationPrimary();
			this.state = 1921;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 249, this._ctx) ) {
			case 1:
				{
				this.state = 1915;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_AS) {
					{
					this.state = 1914;
					this.match(ImpalaSqlParser.KW_AS);
					}
				}

				this.state = 1917;
				this.identifier();
				this.state = 1919;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 248, this._ctx) ) {
				case 1:
					{
					this.state = 1918;
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
		this.enterRule(_localctx, 248, ImpalaSqlParser.RULE_columnAliases);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1923;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 1924;
			this.identifier();
			this.state = 1929;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParser.COMMA) {
				{
				{
				this.state = 1925;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 1926;
				this.identifier();
				}
				}
				this.state = 1931;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1932;
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
		this.enterRule(_localctx, 250, ImpalaSqlParser.RULE_relationPrimary);
		let _la: number;
		try {
			this.state = 1963;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 253, this._ctx) ) {
			case 1:
				_localctx = new TableNameContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1934;
				this.qualifiedName();
				}
				break;

			case 2:
				_localctx = new SubqueryRelationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1935;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1936;
				this.query();
				this.state = 1937;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 3:
				_localctx = new UnnestContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1939;
				this.match(ImpalaSqlParser.KW_UNNEST);
				this.state = 1940;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1941;
				this.expression();
				this.state = 1946;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 1942;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 1943;
					this.expression();
					}
					}
					this.state = 1948;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1949;
				this.match(ImpalaSqlParser.RPAREN);
				this.state = 1952;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 252, this._ctx) ) {
				case 1:
					{
					this.state = 1950;
					this.match(ImpalaSqlParser.KW_WITH);
					this.state = 1951;
					this.match(ImpalaSqlParser.KW_ORDINALITY);
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new LateralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1954;
				this.match(ImpalaSqlParser.KW_LATERAL);
				this.state = 1955;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1956;
				this.query();
				this.state = 1957;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 5:
				_localctx = new ParenthesizedRelationContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1959;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1960;
				this.relation(0);
				this.state = 1961;
				this.match(ImpalaSqlParser.RPAREN);
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
		this.enterRule(_localctx, 252, ImpalaSqlParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1965;
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
		let _startState: number = 254;
		this.enterRecursionRule(_localctx, 254, ImpalaSqlParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1974;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_ADD:
			case ImpalaSqlParser.KW_ALL:
			case ImpalaSqlParser.KW_ANY:
			case ImpalaSqlParser.KW_ARRAY:
			case ImpalaSqlParser.KW_ASC:
			case ImpalaSqlParser.KW_AT:
			case ImpalaSqlParser.KW_BERNOULLI:
			case ImpalaSqlParser.KW_CASCADE:
			case ImpalaSqlParser.KW_CASE:
			case ImpalaSqlParser.KW_CAST:
			case ImpalaSqlParser.KW_COLUMN:
			case ImpalaSqlParser.KW_COLUMNS:
			case ImpalaSqlParser.KW_COMMENT:
			case ImpalaSqlParser.KW_CURRENT:
			case ImpalaSqlParser.KW_CURRENT_DATE:
			case ImpalaSqlParser.KW_CURRENT_PATH:
			case ImpalaSqlParser.KW_CURRENT_TIME:
			case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
			case ImpalaSqlParser.KW_CURRENT_USER:
			case ImpalaSqlParser.KW_DATA:
			case ImpalaSqlParser.KW_DATABASE:
			case ImpalaSqlParser.KW_DATABASES:
			case ImpalaSqlParser.KW_DAY:
			case ImpalaSqlParser.KW_DAYS:
			case ImpalaSqlParser.KW_DEFAULT:
			case ImpalaSqlParser.KW_DESC:
			case ImpalaSqlParser.KW_EXCLUDING:
			case ImpalaSqlParser.KW_EXISTS:
			case ImpalaSqlParser.KW_EXPLAIN:
			case ImpalaSqlParser.KW_EXTRACT:
			case ImpalaSqlParser.KW_FALSE:
			case ImpalaSqlParser.KW_FILTER:
			case ImpalaSqlParser.KW_FIRST:
			case ImpalaSqlParser.KW_FOLLOWING:
			case ImpalaSqlParser.KW_FORMAT:
			case ImpalaSqlParser.KW_FUNCTIONS:
			case ImpalaSqlParser.KW_GRANT:
			case ImpalaSqlParser.KW_GROUPING:
			case ImpalaSqlParser.KW_HOUR:
			case ImpalaSqlParser.KW_IF:
			case ImpalaSqlParser.KW_INCLUDING:
			case ImpalaSqlParser.KW_INTERVAL:
			case ImpalaSqlParser.KW_LAST:
			case ImpalaSqlParser.KW_LATERAL:
			case ImpalaSqlParser.KW_LIMIT:
			case ImpalaSqlParser.KW_LOCALTIME:
			case ImpalaSqlParser.KW_LOCALTIMESTAMP:
			case ImpalaSqlParser.KW_MAP:
			case ImpalaSqlParser.KW_MINUTE:
			case ImpalaSqlParser.KW_MONTH:
			case ImpalaSqlParser.KW_NFC:
			case ImpalaSqlParser.KW_NFD:
			case ImpalaSqlParser.KW_NFKC:
			case ImpalaSqlParser.KW_NFKD:
			case ImpalaSqlParser.KW_NORMALIZE:
			case ImpalaSqlParser.KW_NULL:
			case ImpalaSqlParser.KW_NULLS:
			case ImpalaSqlParser.KW_OFFSET:
			case ImpalaSqlParser.KW_OPTION:
			case ImpalaSqlParser.KW_ORDINALITY:
			case ImpalaSqlParser.KW_OVER:
			case ImpalaSqlParser.KW_PARTITION:
			case ImpalaSqlParser.KW_PARTITIONS:
			case ImpalaSqlParser.KW_PARQUET:
			case ImpalaSqlParser.KW_POSITION:
			case ImpalaSqlParser.KW_PRECEDING:
			case ImpalaSqlParser.KW_PRIVILEGES:
			case ImpalaSqlParser.KW_PROPERTIES:
			case ImpalaSqlParser.KW_RANGE:
			case ImpalaSqlParser.KW_RENAME:
			case ImpalaSqlParser.KW_REPEATABLE:
			case ImpalaSqlParser.KW_REPLACE:
			case ImpalaSqlParser.KW_RESTRICT:
			case ImpalaSqlParser.KW_REVOKE:
			case ImpalaSqlParser.KW_ROLE:
			case ImpalaSqlParser.KW_ROLES:
			case ImpalaSqlParser.KW_ROW:
			case ImpalaSqlParser.KW_ROWS:
			case ImpalaSqlParser.KW_SCHEMA:
			case ImpalaSqlParser.KW_SCHEMAS:
			case ImpalaSqlParser.KW_SECOND:
			case ImpalaSqlParser.KW_SECONDS:
			case ImpalaSqlParser.KW_SET:
			case ImpalaSqlParser.KW_SHOW:
			case ImpalaSqlParser.KW_SOME:
			case ImpalaSqlParser.KW_STATS:
			case ImpalaSqlParser.KW_SUBSTRING:
			case ImpalaSqlParser.KW_SYSTEM:
			case ImpalaSqlParser.KW_TABLES:
			case ImpalaSqlParser.KW_TABLESAMPLE:
			case ImpalaSqlParser.KW_TO:
			case ImpalaSqlParser.KW_TRUE:
			case ImpalaSqlParser.KW_TRY_CAST:
			case ImpalaSqlParser.KW_TRUNCATE:
			case ImpalaSqlParser.KW_UNBOUNDED:
			case ImpalaSqlParser.KW_USE:
			case ImpalaSqlParser.KW_USER:
			case ImpalaSqlParser.KW_VIEW:
			case ImpalaSqlParser.KW_VIEWS:
			case ImpalaSqlParser.KW_YEAR:
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

				this.state = 1968;
				(_localctx as PredicatedContext)._valueExpression = this.valueExpression(0);
				this.state = 1970;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 254, this._ctx) ) {
				case 1:
					{
					this.state = 1969;
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
				this.state = 1972;
				this.match(ImpalaSqlParser.KW_NOT);
				this.state = 1973;
				this.booleanExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1984;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 257, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1982;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 256, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_booleanExpression);
						this.state = 1976;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1977;
						(_localctx as LogicalBinaryContext)._operator = this.match(ImpalaSqlParser.KW_AND);
						this.state = 1978;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_booleanExpression);
						this.state = 1979;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1980;
						(_localctx as LogicalBinaryContext)._operator = this.match(ImpalaSqlParser.KW_OR);
						this.state = 1981;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1986;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 257, this._ctx);
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
		this.enterRule(_localctx, 256, ImpalaSqlParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 2050;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 266, this._ctx) ) {
			case 1:
				_localctx = new ComparisonContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1987;
				this.comparisonOperator();
				this.state = 1988;
				(_localctx as ComparisonContext)._right = this.valueExpression(0);
				}
				break;

			case 2:
				_localctx = new QuantifiedComparisonContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1990;
				this.comparisonOperator();
				this.state = 1991;
				this.comparisonQuantifier();
				this.state = 1992;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 1993;
				this.query();
				this.state = 1994;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 3:
				_localctx = new BetweenContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1997;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_NOT) {
					{
					this.state = 1996;
					this.match(ImpalaSqlParser.KW_NOT);
					}
				}

				this.state = 1999;
				this.match(ImpalaSqlParser.KW_BETWEEN);
				this.state = 2000;
				(_localctx as BetweenContext)._lower = this.valueExpression(0);
				this.state = 2001;
				this.match(ImpalaSqlParser.KW_AND);
				this.state = 2002;
				(_localctx as BetweenContext)._upper = this.valueExpression(0);
				}
				break;

			case 4:
				_localctx = new InListContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2005;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_NOT) {
					{
					this.state = 2004;
					this.match(ImpalaSqlParser.KW_NOT);
					}
				}

				this.state = 2007;
				this.match(ImpalaSqlParser.KW_IN);
				this.state = 2008;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2009;
				this.expression();
				this.state = 2014;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 2010;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 2011;
					this.expression();
					}
					}
					this.state = 2016;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2017;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 5:
				_localctx = new InSubqueryContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2020;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_NOT) {
					{
					this.state = 2019;
					this.match(ImpalaSqlParser.KW_NOT);
					}
				}

				this.state = 2022;
				this.match(ImpalaSqlParser.KW_IN);
				this.state = 2023;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2024;
				this.query();
				this.state = 2025;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 6:
				_localctx = new LikeContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_NOT) {
					{
					this.state = 2027;
					this.match(ImpalaSqlParser.KW_NOT);
					}
				}

				this.state = 2030;
				this.match(ImpalaSqlParser.KW_LIKE);
				this.state = 2031;
				(_localctx as LikeContext)._pattern = this.valueExpression(0);
				this.state = 2034;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 263, this._ctx) ) {
				case 1:
					{
					this.state = 2032;
					this.match(ImpalaSqlParser.KW_ESCAPE);
					this.state = 2033;
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
				this.state = 2036;
				this.match(ImpalaSqlParser.KW_REGEXP);
				this.state = 2037;
				(_localctx as REGEXPContext)._pattern = this.valueExpression(0);
				}
				break;

			case 8:
				_localctx = new NullPredicateContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2038;
				this.match(ImpalaSqlParser.KW_IS);
				this.state = 2040;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_NOT) {
					{
					this.state = 2039;
					this.match(ImpalaSqlParser.KW_NOT);
					}
				}

				this.state = 2042;
				this.match(ImpalaSqlParser.KW_NULL);
				}
				break;

			case 9:
				_localctx = new DistinctFromContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2043;
				this.match(ImpalaSqlParser.KW_IS);
				this.state = 2045;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_NOT) {
					{
					this.state = 2044;
					this.match(ImpalaSqlParser.KW_NOT);
					}
				}

				this.state = 2047;
				this.match(ImpalaSqlParser.KW_DISTINCT);
				this.state = 2048;
				this.match(ImpalaSqlParser.KW_FROM);
				this.state = 2049;
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
		let _startState: number = 258;
		this.enterRecursionRule(_localctx, 258, ImpalaSqlParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2056;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 267, this._ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2053;
				this.primaryExpression(0);
				}
				break;

			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2054;
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
				this.state = 2055;
				this.valueExpression(4);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2069;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 269, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2067;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 268, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_valueExpression);
						this.state = 2058;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2059;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 238)) & ~0x1F) === 0 && ((1 << (_la - 238)) & ((1 << (ImpalaSqlParser.ASTERISK - 238)) | (1 << (ImpalaSqlParser.SLASH - 238)) | (1 << (ImpalaSqlParser.PERCENT - 238)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 2060;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_valueExpression);
						this.state = 2061;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2062;
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
						this.state = 2063;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;

					case 3:
						{
						_localctx = new ConcatenationContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ConcatenationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_valueExpression);
						this.state = 2064;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2065;
						this.match(ImpalaSqlParser.CONCAT);
						this.state = 2066;
						(_localctx as ConcatenationContext)._right = this.valueExpression(2);
						}
						break;
					}
					}
				}
				this.state = 2071;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 269, this._ctx);
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
		let _startState: number = 260;
		this.enterRecursionRule(_localctx, 260, ImpalaSqlParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2318;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 299, this._ctx) ) {
			case 1:
				{
				_localctx = new NullLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2073;
				this.match(ImpalaSqlParser.KW_NULL);
				}
				break;

			case 2:
				{
				_localctx = new IntervalLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2074;
				this.interval();
				}
				break;

			case 3:
				{
				_localctx = new TypeConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2075;
				this.identifier();
				this.state = 2076;
				this.stringLiteral();
				}
				break;

			case 4:
				{
				_localctx = new TypeConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2078;
				this.match(ImpalaSqlParser.DOUBLE_PRECISION);
				this.state = 2079;
				this.stringLiteral();
				}
				break;

			case 5:
				{
				_localctx = new NumericLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2080;
				this.number();
				}
				break;

			case 6:
				{
				_localctx = new BooleanLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2081;
				this.booleanValue();
				}
				break;

			case 7:
				{
				_localctx = new StringLiteralValuesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2082;
				this.stringLiteral();
				}
				break;

			case 8:
				{
				_localctx = new BinaryLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2083;
				this.match(ImpalaSqlParser.BINARY_LITERAL);
				}
				break;

			case 9:
				{
				_localctx = new ParameterContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2084;
				this.match(ImpalaSqlParser.QUESTION);
				}
				break;

			case 10:
				{
				_localctx = new PositionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2085;
				this.match(ImpalaSqlParser.KW_POSITION);
				this.state = 2086;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2087;
				this.valueExpression(0);
				this.state = 2088;
				this.match(ImpalaSqlParser.KW_IN);
				this.state = 2089;
				this.valueExpression(0);
				this.state = 2090;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 11:
				{
				_localctx = new RowConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2092;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2093;
				this.expression();
				this.state = 2096;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_AS) {
					{
					this.state = 2094;
					this.match(ImpalaSqlParser.KW_AS);
					this.state = 2095;
					this.type(0);
					}
				}

				this.state = 2106;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 272, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 2098;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 2099;
						this.expression();
						this.state = 2102;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === ImpalaSqlParser.KW_AS) {
							{
							this.state = 2100;
							this.match(ImpalaSqlParser.KW_AS);
							this.state = 2101;
							this.type(0);
							}
						}

						}
						}
					}
					this.state = 2108;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 272, this._ctx);
				}
				this.state = 2109;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 12:
				{
				_localctx = new RowConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2111;
				this.match(ImpalaSqlParser.KW_ROW);
				this.state = 2112;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2113;
				this.expression();
				this.state = 2118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 2114;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 2115;
					this.expression();
					}
					}
					this.state = 2120;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2121;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 13:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2123;
				this.qualifiedName();
				this.state = 2124;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2125;
				this.match(ImpalaSqlParser.ASTERISK);
				this.state = 2126;
				this.match(ImpalaSqlParser.RPAREN);
				this.state = 2128;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 274, this._ctx) ) {
				case 1:
					{
					this.state = 2127;
					this.filter();
					}
					break;
				}
				this.state = 2131;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 275, this._ctx) ) {
				case 1:
					{
					this.state = 2130;
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
				this.state = 2133;
				this.qualifiedName();
				this.state = 2134;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParser.KW_ADD) | (1 << ImpalaSqlParser.KW_ALL) | (1 << ImpalaSqlParser.KW_ANY) | (1 << ImpalaSqlParser.KW_ARRAY) | (1 << ImpalaSqlParser.KW_ASC) | (1 << ImpalaSqlParser.KW_AT) | (1 << ImpalaSqlParser.KW_BERNOULLI) | (1 << ImpalaSqlParser.KW_CASCADE) | (1 << ImpalaSqlParser.KW_CASE) | (1 << ImpalaSqlParser.KW_CAST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ImpalaSqlParser.KW_COLUMN - 32)) | (1 << (ImpalaSqlParser.KW_COLUMNS - 32)) | (1 << (ImpalaSqlParser.KW_COMMENT - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_DATE - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_PATH - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_TIME - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 32)) | (1 << (ImpalaSqlParser.KW_DATA - 32)) | (1 << (ImpalaSqlParser.KW_DATABASE - 32)) | (1 << (ImpalaSqlParser.KW_DATABASES - 32)) | (1 << (ImpalaSqlParser.KW_DAY - 32)) | (1 << (ImpalaSqlParser.KW_DAYS - 32)) | (1 << (ImpalaSqlParser.KW_DEFAULT - 32)) | (1 << (ImpalaSqlParser.KW_DESC - 32)) | (1 << (ImpalaSqlParser.KW_DISTINCT - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (ImpalaSqlParser.KW_EXCLUDING - 65)) | (1 << (ImpalaSqlParser.KW_EXISTS - 65)) | (1 << (ImpalaSqlParser.KW_EXPLAIN - 65)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 65)) | (1 << (ImpalaSqlParser.KW_FALSE - 65)) | (1 << (ImpalaSqlParser.KW_FILTER - 65)) | (1 << (ImpalaSqlParser.KW_FIRST - 65)) | (1 << (ImpalaSqlParser.KW_FOLLOWING - 65)) | (1 << (ImpalaSqlParser.KW_FORMAT - 65)) | (1 << (ImpalaSqlParser.KW_FUNCTIONS - 65)) | (1 << (ImpalaSqlParser.KW_GRANT - 65)) | (1 << (ImpalaSqlParser.KW_GROUPING - 65)) | (1 << (ImpalaSqlParser.KW_HOUR - 65)) | (1 << (ImpalaSqlParser.KW_IF - 65)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 65)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (ImpalaSqlParser.KW_INTERVAL - 101)) | (1 << (ImpalaSqlParser.KW_LAST - 101)) | (1 << (ImpalaSqlParser.KW_LATERAL - 101)) | (1 << (ImpalaSqlParser.KW_LIMIT - 101)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 101)) | (1 << (ImpalaSqlParser.KW_LOCALTIMESTAMP - 101)) | (1 << (ImpalaSqlParser.KW_MAP - 101)) | (1 << (ImpalaSqlParser.KW_MINUTE - 101)) | (1 << (ImpalaSqlParser.KW_MONTH - 101)) | (1 << (ImpalaSqlParser.KW_NFC - 101)) | (1 << (ImpalaSqlParser.KW_NFD - 101)) | (1 << (ImpalaSqlParser.KW_NFKC - 101)) | (1 << (ImpalaSqlParser.KW_NFKD - 101)) | (1 << (ImpalaSqlParser.KW_NORMALIZE - 101)) | (1 << (ImpalaSqlParser.KW_NOT - 101)) | (1 << (ImpalaSqlParser.KW_NULL - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (ImpalaSqlParser.KW_NULLS - 133)) | (1 << (ImpalaSqlParser.KW_OFFSET - 133)) | (1 << (ImpalaSqlParser.KW_OPTION - 133)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 133)) | (1 << (ImpalaSqlParser.KW_OVER - 133)) | (1 << (ImpalaSqlParser.KW_PARTITION - 133)) | (1 << (ImpalaSqlParser.KW_PARTITIONS - 133)) | (1 << (ImpalaSqlParser.KW_PARQUET - 133)) | (1 << (ImpalaSqlParser.KW_POSITION - 133)) | (1 << (ImpalaSqlParser.KW_PRECEDING - 133)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 133)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 133)) | (1 << (ImpalaSqlParser.KW_RANGE - 133)) | (1 << (ImpalaSqlParser.KW_RENAME - 133)) | (1 << (ImpalaSqlParser.KW_REPEATABLE - 133)) | (1 << (ImpalaSqlParser.KW_REPLACE - 133)) | (1 << (ImpalaSqlParser.KW_RESTRICT - 133)) | (1 << (ImpalaSqlParser.KW_REVOKE - 133)))) !== 0) || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & ((1 << (ImpalaSqlParser.KW_ROLE - 165)) | (1 << (ImpalaSqlParser.KW_ROLES - 165)) | (1 << (ImpalaSqlParser.KW_ROW - 165)) | (1 << (ImpalaSqlParser.KW_ROWS - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMA - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMAS - 165)) | (1 << (ImpalaSqlParser.KW_SECOND - 165)) | (1 << (ImpalaSqlParser.KW_SECONDS - 165)) | (1 << (ImpalaSqlParser.KW_SET - 165)) | (1 << (ImpalaSqlParser.KW_SHOW - 165)) | (1 << (ImpalaSqlParser.KW_SOME - 165)) | (1 << (ImpalaSqlParser.KW_STATS - 165)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 165)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 165)) | (1 << (ImpalaSqlParser.KW_TABLES - 165)) | (1 << (ImpalaSqlParser.KW_TABLESAMPLE - 165)) | (1 << (ImpalaSqlParser.KW_TO - 165)) | (1 << (ImpalaSqlParser.KW_TRUE - 165)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 165)) | (1 << (ImpalaSqlParser.KW_TRUNCATE - 165)))) !== 0) || ((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & ((1 << (ImpalaSqlParser.KW_UNBOUNDED - 199)) | (1 << (ImpalaSqlParser.KW_USE - 199)) | (1 << (ImpalaSqlParser.KW_USER - 199)) | (1 << (ImpalaSqlParser.KW_VIEW - 199)) | (1 << (ImpalaSqlParser.KW_VIEWS - 199)) | (1 << (ImpalaSqlParser.KW_YEAR - 199)))) !== 0) || ((((_la - 236)) & ~0x1F) === 0 && ((1 << (_la - 236)) & ((1 << (ImpalaSqlParser.PLUS - 236)) | (1 << (ImpalaSqlParser.MINUS - 236)) | (1 << (ImpalaSqlParser.LPAREN - 236)) | (1 << (ImpalaSqlParser.QUESTION - 236)) | (1 << (ImpalaSqlParser.STRING - 236)) | (1 << (ImpalaSqlParser.UNICODE_STRING - 236)) | (1 << (ImpalaSqlParser.BINARY_LITERAL - 236)) | (1 << (ImpalaSqlParser.INTEGER_VALUE - 236)) | (1 << (ImpalaSqlParser.DECIMAL_VALUE - 236)) | (1 << (ImpalaSqlParser.DOUBLE_VALUE - 236)) | (1 << (ImpalaSqlParser.IDENTIFIER - 236)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 236)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 236)) | (1 << (ImpalaSqlParser.DOUBLE_PRECISION - 236)))) !== 0)) {
					{
					this.state = 2136;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 276, this._ctx) ) {
					case 1:
						{
						this.state = 2135;
						this.setQuantifier();
						}
						break;
					}
					this.state = 2138;
					this.expression();
					this.state = 2143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 2139;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 2140;
						this.expression();
						}
						}
						this.state = 2145;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_ORDER) {
					{
					this.state = 2148;
					this.match(ImpalaSqlParser.KW_ORDER);
					this.state = 2149;
					this.match(ImpalaSqlParser.KW_BY);
					this.state = 2150;
					this.sortItem();
					this.state = 2155;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 2151;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 2152;
						this.sortItem();
						}
						}
						this.state = 2157;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2160;
				this.match(ImpalaSqlParser.RPAREN);
				this.state = 2162;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 281, this._ctx) ) {
				case 1:
					{
					this.state = 2161;
					this.filter();
					}
					break;
				}
				this.state = 2165;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 282, this._ctx) ) {
				case 1:
					{
					this.state = 2164;
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
				this.state = 2167;
				this.identifier();
				this.state = 2168;
				this.match(ImpalaSqlParser.RIGHT_ARROW);
				this.state = 2169;
				this.expression();
				}
				break;

			case 16:
				{
				_localctx = new LambdaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2171;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParser.KW_ADD) | (1 << ImpalaSqlParser.KW_ALL) | (1 << ImpalaSqlParser.KW_ANY) | (1 << ImpalaSqlParser.KW_ARRAY) | (1 << ImpalaSqlParser.KW_ASC) | (1 << ImpalaSqlParser.KW_AT) | (1 << ImpalaSqlParser.KW_BERNOULLI) | (1 << ImpalaSqlParser.KW_CASCADE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ImpalaSqlParser.KW_COLUMN - 32)) | (1 << (ImpalaSqlParser.KW_COLUMNS - 32)) | (1 << (ImpalaSqlParser.KW_COMMENT - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT - 32)) | (1 << (ImpalaSqlParser.KW_DATA - 32)) | (1 << (ImpalaSqlParser.KW_DATABASE - 32)) | (1 << (ImpalaSqlParser.KW_DATABASES - 32)) | (1 << (ImpalaSqlParser.KW_DAY - 32)) | (1 << (ImpalaSqlParser.KW_DAYS - 32)) | (1 << (ImpalaSqlParser.KW_DEFAULT - 32)) | (1 << (ImpalaSqlParser.KW_DESC - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (ImpalaSqlParser.KW_EXCLUDING - 65)) | (1 << (ImpalaSqlParser.KW_EXPLAIN - 65)) | (1 << (ImpalaSqlParser.KW_FILTER - 65)) | (1 << (ImpalaSqlParser.KW_FIRST - 65)) | (1 << (ImpalaSqlParser.KW_FOLLOWING - 65)) | (1 << (ImpalaSqlParser.KW_FORMAT - 65)) | (1 << (ImpalaSqlParser.KW_FUNCTIONS - 65)) | (1 << (ImpalaSqlParser.KW_GRANT - 65)) | (1 << (ImpalaSqlParser.KW_HOUR - 65)) | (1 << (ImpalaSqlParser.KW_IF - 65)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 65)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (ImpalaSqlParser.KW_INTERVAL - 101)) | (1 << (ImpalaSqlParser.KW_LAST - 101)) | (1 << (ImpalaSqlParser.KW_LATERAL - 101)) | (1 << (ImpalaSqlParser.KW_LIMIT - 101)) | (1 << (ImpalaSqlParser.KW_MAP - 101)) | (1 << (ImpalaSqlParser.KW_MINUTE - 101)) | (1 << (ImpalaSqlParser.KW_MONTH - 101)) | (1 << (ImpalaSqlParser.KW_NFC - 101)) | (1 << (ImpalaSqlParser.KW_NFD - 101)) | (1 << (ImpalaSqlParser.KW_NFKC - 101)) | (1 << (ImpalaSqlParser.KW_NFKD - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (ImpalaSqlParser.KW_NULLS - 133)) | (1 << (ImpalaSqlParser.KW_OFFSET - 133)) | (1 << (ImpalaSqlParser.KW_OPTION - 133)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 133)) | (1 << (ImpalaSqlParser.KW_OVER - 133)) | (1 << (ImpalaSqlParser.KW_PARTITION - 133)) | (1 << (ImpalaSqlParser.KW_PARTITIONS - 133)) | (1 << (ImpalaSqlParser.KW_PARQUET - 133)) | (1 << (ImpalaSqlParser.KW_POSITION - 133)) | (1 << (ImpalaSqlParser.KW_PRECEDING - 133)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 133)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 133)) | (1 << (ImpalaSqlParser.KW_RANGE - 133)) | (1 << (ImpalaSqlParser.KW_RENAME - 133)) | (1 << (ImpalaSqlParser.KW_REPEATABLE - 133)) | (1 << (ImpalaSqlParser.KW_REPLACE - 133)) | (1 << (ImpalaSqlParser.KW_RESTRICT - 133)) | (1 << (ImpalaSqlParser.KW_REVOKE - 133)))) !== 0) || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & ((1 << (ImpalaSqlParser.KW_ROLE - 165)) | (1 << (ImpalaSqlParser.KW_ROLES - 165)) | (1 << (ImpalaSqlParser.KW_ROW - 165)) | (1 << (ImpalaSqlParser.KW_ROWS - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMA - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMAS - 165)) | (1 << (ImpalaSqlParser.KW_SECOND - 165)) | (1 << (ImpalaSqlParser.KW_SECONDS - 165)) | (1 << (ImpalaSqlParser.KW_SET - 165)) | (1 << (ImpalaSqlParser.KW_SHOW - 165)) | (1 << (ImpalaSqlParser.KW_SOME - 165)) | (1 << (ImpalaSqlParser.KW_STATS - 165)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 165)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 165)) | (1 << (ImpalaSqlParser.KW_TABLES - 165)) | (1 << (ImpalaSqlParser.KW_TABLESAMPLE - 165)) | (1 << (ImpalaSqlParser.KW_TO - 165)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 165)) | (1 << (ImpalaSqlParser.KW_TRUNCATE - 165)))) !== 0) || ((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & ((1 << (ImpalaSqlParser.KW_UNBOUNDED - 199)) | (1 << (ImpalaSqlParser.KW_USE - 199)) | (1 << (ImpalaSqlParser.KW_USER - 199)) | (1 << (ImpalaSqlParser.KW_VIEW - 199)) | (1 << (ImpalaSqlParser.KW_VIEWS - 199)) | (1 << (ImpalaSqlParser.KW_YEAR - 199)))) !== 0) || ((((_la - 255)) & ~0x1F) === 0 && ((1 << (_la - 255)) & ((1 << (ImpalaSqlParser.STRING - 255)) | (1 << (ImpalaSqlParser.IDENTIFIER - 255)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 255)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 255)))) !== 0)) {
					{
					this.state = 2172;
					this.identifier();
					this.state = 2177;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 2173;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 2174;
						this.identifier();
						}
						}
						this.state = 2179;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2182;
				this.match(ImpalaSqlParser.RPAREN);
				this.state = 2183;
				this.match(ImpalaSqlParser.RIGHT_ARROW);
				this.state = 2184;
				this.expression();
				}
				break;

			case 17:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2185;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2186;
				this.query();
				this.state = 2187;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 18:
				{
				_localctx = new ExistsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2189;
				this.match(ImpalaSqlParser.KW_EXISTS);
				this.state = 2190;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2191;
				this.query();
				this.state = 2192;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 19:
				{
				_localctx = new SimpleCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2194;
				this.match(ImpalaSqlParser.KW_CASE);
				this.state = 2195;
				this.valueExpression(0);
				this.state = 2197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2196;
					this.whenClause();
					}
					}
					this.state = 2199;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ImpalaSqlParser.KW_WHEN);
				this.state = 2203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_ELSE) {
					{
					this.state = 2201;
					this.match(ImpalaSqlParser.KW_ELSE);
					this.state = 2202;
					(_localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 2205;
				this.match(ImpalaSqlParser.KW_END);
				}
				break;

			case 20:
				{
				_localctx = new SearchedCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2207;
				this.match(ImpalaSqlParser.KW_CASE);
				this.state = 2209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2208;
					this.whenClause();
					}
					}
					this.state = 2211;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ImpalaSqlParser.KW_WHEN);
				this.state = 2215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_ELSE) {
					{
					this.state = 2213;
					this.match(ImpalaSqlParser.KW_ELSE);
					this.state = 2214;
					(_localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 2217;
				this.match(ImpalaSqlParser.KW_END);
				}
				break;

			case 21:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2219;
				this.match(ImpalaSqlParser.KW_CAST);
				this.state = 2220;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2221;
				this.expression();
				this.state = 2222;
				this.match(ImpalaSqlParser.KW_AS);
				this.state = 2223;
				this.type(0);
				this.state = 2224;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 22:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2226;
				this.match(ImpalaSqlParser.KW_TRY_CAST);
				this.state = 2227;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2228;
				this.expression();
				this.state = 2229;
				this.match(ImpalaSqlParser.KW_AS);
				this.state = 2230;
				this.type(0);
				this.state = 2231;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 23:
				{
				_localctx = new ArrayConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2233;
				this.match(ImpalaSqlParser.KW_ARRAY);
				this.state = 2234;
				this.match(ImpalaSqlParser.LSQUARE);
				this.state = 2243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParser.KW_ADD) | (1 << ImpalaSqlParser.KW_ALL) | (1 << ImpalaSqlParser.KW_ANY) | (1 << ImpalaSqlParser.KW_ARRAY) | (1 << ImpalaSqlParser.KW_ASC) | (1 << ImpalaSqlParser.KW_AT) | (1 << ImpalaSqlParser.KW_BERNOULLI) | (1 << ImpalaSqlParser.KW_CASCADE) | (1 << ImpalaSqlParser.KW_CASE) | (1 << ImpalaSqlParser.KW_CAST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ImpalaSqlParser.KW_COLUMN - 32)) | (1 << (ImpalaSqlParser.KW_COLUMNS - 32)) | (1 << (ImpalaSqlParser.KW_COMMENT - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_DATE - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_PATH - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_TIME - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_TIMESTAMP - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT_USER - 32)) | (1 << (ImpalaSqlParser.KW_DATA - 32)) | (1 << (ImpalaSqlParser.KW_DATABASE - 32)) | (1 << (ImpalaSqlParser.KW_DATABASES - 32)) | (1 << (ImpalaSqlParser.KW_DAY - 32)) | (1 << (ImpalaSqlParser.KW_DAYS - 32)) | (1 << (ImpalaSqlParser.KW_DEFAULT - 32)) | (1 << (ImpalaSqlParser.KW_DESC - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (ImpalaSqlParser.KW_EXCLUDING - 65)) | (1 << (ImpalaSqlParser.KW_EXISTS - 65)) | (1 << (ImpalaSqlParser.KW_EXPLAIN - 65)) | (1 << (ImpalaSqlParser.KW_EXTRACT - 65)) | (1 << (ImpalaSqlParser.KW_FALSE - 65)) | (1 << (ImpalaSqlParser.KW_FILTER - 65)) | (1 << (ImpalaSqlParser.KW_FIRST - 65)) | (1 << (ImpalaSqlParser.KW_FOLLOWING - 65)) | (1 << (ImpalaSqlParser.KW_FORMAT - 65)) | (1 << (ImpalaSqlParser.KW_FUNCTIONS - 65)) | (1 << (ImpalaSqlParser.KW_GRANT - 65)) | (1 << (ImpalaSqlParser.KW_GROUPING - 65)) | (1 << (ImpalaSqlParser.KW_HOUR - 65)) | (1 << (ImpalaSqlParser.KW_IF - 65)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 65)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (ImpalaSqlParser.KW_INTERVAL - 101)) | (1 << (ImpalaSqlParser.KW_LAST - 101)) | (1 << (ImpalaSqlParser.KW_LATERAL - 101)) | (1 << (ImpalaSqlParser.KW_LIMIT - 101)) | (1 << (ImpalaSqlParser.KW_LOCALTIME - 101)) | (1 << (ImpalaSqlParser.KW_LOCALTIMESTAMP - 101)) | (1 << (ImpalaSqlParser.KW_MAP - 101)) | (1 << (ImpalaSqlParser.KW_MINUTE - 101)) | (1 << (ImpalaSqlParser.KW_MONTH - 101)) | (1 << (ImpalaSqlParser.KW_NFC - 101)) | (1 << (ImpalaSqlParser.KW_NFD - 101)) | (1 << (ImpalaSqlParser.KW_NFKC - 101)) | (1 << (ImpalaSqlParser.KW_NFKD - 101)) | (1 << (ImpalaSqlParser.KW_NORMALIZE - 101)) | (1 << (ImpalaSqlParser.KW_NOT - 101)) | (1 << (ImpalaSqlParser.KW_NULL - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (ImpalaSqlParser.KW_NULLS - 133)) | (1 << (ImpalaSqlParser.KW_OFFSET - 133)) | (1 << (ImpalaSqlParser.KW_OPTION - 133)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 133)) | (1 << (ImpalaSqlParser.KW_OVER - 133)) | (1 << (ImpalaSqlParser.KW_PARTITION - 133)) | (1 << (ImpalaSqlParser.KW_PARTITIONS - 133)) | (1 << (ImpalaSqlParser.KW_PARQUET - 133)) | (1 << (ImpalaSqlParser.KW_POSITION - 133)) | (1 << (ImpalaSqlParser.KW_PRECEDING - 133)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 133)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 133)) | (1 << (ImpalaSqlParser.KW_RANGE - 133)) | (1 << (ImpalaSqlParser.KW_RENAME - 133)) | (1 << (ImpalaSqlParser.KW_REPEATABLE - 133)) | (1 << (ImpalaSqlParser.KW_REPLACE - 133)) | (1 << (ImpalaSqlParser.KW_RESTRICT - 133)) | (1 << (ImpalaSqlParser.KW_REVOKE - 133)))) !== 0) || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & ((1 << (ImpalaSqlParser.KW_ROLE - 165)) | (1 << (ImpalaSqlParser.KW_ROLES - 165)) | (1 << (ImpalaSqlParser.KW_ROW - 165)) | (1 << (ImpalaSqlParser.KW_ROWS - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMA - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMAS - 165)) | (1 << (ImpalaSqlParser.KW_SECOND - 165)) | (1 << (ImpalaSqlParser.KW_SECONDS - 165)) | (1 << (ImpalaSqlParser.KW_SET - 165)) | (1 << (ImpalaSqlParser.KW_SHOW - 165)) | (1 << (ImpalaSqlParser.KW_SOME - 165)) | (1 << (ImpalaSqlParser.KW_STATS - 165)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 165)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 165)) | (1 << (ImpalaSqlParser.KW_TABLES - 165)) | (1 << (ImpalaSqlParser.KW_TABLESAMPLE - 165)) | (1 << (ImpalaSqlParser.KW_TO - 165)) | (1 << (ImpalaSqlParser.KW_TRUE - 165)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 165)) | (1 << (ImpalaSqlParser.KW_TRUNCATE - 165)))) !== 0) || ((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & ((1 << (ImpalaSqlParser.KW_UNBOUNDED - 199)) | (1 << (ImpalaSqlParser.KW_USE - 199)) | (1 << (ImpalaSqlParser.KW_USER - 199)) | (1 << (ImpalaSqlParser.KW_VIEW - 199)) | (1 << (ImpalaSqlParser.KW_VIEWS - 199)) | (1 << (ImpalaSqlParser.KW_YEAR - 199)))) !== 0) || ((((_la - 236)) & ~0x1F) === 0 && ((1 << (_la - 236)) & ((1 << (ImpalaSqlParser.PLUS - 236)) | (1 << (ImpalaSqlParser.MINUS - 236)) | (1 << (ImpalaSqlParser.LPAREN - 236)) | (1 << (ImpalaSqlParser.QUESTION - 236)) | (1 << (ImpalaSqlParser.STRING - 236)) | (1 << (ImpalaSqlParser.UNICODE_STRING - 236)) | (1 << (ImpalaSqlParser.BINARY_LITERAL - 236)) | (1 << (ImpalaSqlParser.INTEGER_VALUE - 236)) | (1 << (ImpalaSqlParser.DECIMAL_VALUE - 236)) | (1 << (ImpalaSqlParser.DOUBLE_VALUE - 236)) | (1 << (ImpalaSqlParser.IDENTIFIER - 236)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 236)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 236)) | (1 << (ImpalaSqlParser.DOUBLE_PRECISION - 236)))) !== 0)) {
					{
					this.state = 2235;
					this.expression();
					this.state = 2240;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 2236;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 2237;
						this.expression();
						}
						}
						this.state = 2242;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2245;
				this.match(ImpalaSqlParser.RSQUARE);
				}
				break;

			case 24:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2246;
				this.identifier();
				}
				break;

			case 25:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2247;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_DATE);
				}
				break;

			case 26:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2248;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_TIME);
				this.state = 2252;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 291, this._ctx) ) {
				case 1:
					{
					this.state = 2249;
					this.match(ImpalaSqlParser.LPAREN);
					this.state = 2250;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
					this.state = 2251;
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
				this.state = 2254;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_TIMESTAMP);
				this.state = 2258;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 292, this._ctx) ) {
				case 1:
					{
					this.state = 2255;
					this.match(ImpalaSqlParser.LPAREN);
					this.state = 2256;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
					this.state = 2257;
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
				this.state = 2260;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_LOCALTIME);
				this.state = 2264;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 293, this._ctx) ) {
				case 1:
					{
					this.state = 2261;
					this.match(ImpalaSqlParser.LPAREN);
					this.state = 2262;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
					this.state = 2263;
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
				this.state = 2266;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParser.KW_LOCALTIMESTAMP);
				this.state = 2270;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 294, this._ctx) ) {
				case 1:
					{
					this.state = 2267;
					this.match(ImpalaSqlParser.LPAREN);
					this.state = 2268;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
					this.state = 2269;
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
				this.state = 2272;
				(_localctx as CurrentUserContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_USER);
				}
				break;

			case 31:
				{
				_localctx = new CurrentPathContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2273;
				(_localctx as CurrentPathContext)._name = this.match(ImpalaSqlParser.KW_CURRENT_PATH);
				}
				break;

			case 32:
				{
				_localctx = new SubstringContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2274;
				this.match(ImpalaSqlParser.KW_SUBSTRING);
				this.state = 2275;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2276;
				this.valueExpression(0);
				this.state = 2277;
				this.match(ImpalaSqlParser.KW_FROM);
				this.state = 2278;
				this.valueExpression(0);
				this.state = 2281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.KW_FOR) {
					{
					this.state = 2279;
					this.match(ImpalaSqlParser.KW_FOR);
					this.state = 2280;
					this.valueExpression(0);
					}
				}

				this.state = 2283;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 33:
				{
				_localctx = new NormalizeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2285;
				this.match(ImpalaSqlParser.KW_NORMALIZE);
				this.state = 2286;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2287;
				this.valueExpression(0);
				this.state = 2290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.COMMA) {
					{
					this.state = 2288;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 2289;
					this.normalForm();
					}
				}

				this.state = 2292;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 34:
				{
				_localctx = new ExtractContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2294;
				this.match(ImpalaSqlParser.KW_EXTRACT);
				this.state = 2295;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2296;
				this.identifier();
				this.state = 2297;
				this.match(ImpalaSqlParser.KW_FROM);
				this.state = 2298;
				this.valueExpression(0);
				this.state = 2299;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 35:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2301;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2302;
				this.expression();
				this.state = 2303;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;

			case 36:
				{
				_localctx = new GroupingOperationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2305;
				this.match(ImpalaSqlParser.KW_GROUPING);
				this.state = 2306;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParser.KW_ADD) | (1 << ImpalaSqlParser.KW_ALL) | (1 << ImpalaSqlParser.KW_ANY) | (1 << ImpalaSqlParser.KW_ARRAY) | (1 << ImpalaSqlParser.KW_ASC) | (1 << ImpalaSqlParser.KW_AT) | (1 << ImpalaSqlParser.KW_BERNOULLI) | (1 << ImpalaSqlParser.KW_CASCADE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ImpalaSqlParser.KW_COLUMN - 32)) | (1 << (ImpalaSqlParser.KW_COLUMNS - 32)) | (1 << (ImpalaSqlParser.KW_COMMENT - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT - 32)) | (1 << (ImpalaSqlParser.KW_DATA - 32)) | (1 << (ImpalaSqlParser.KW_DATABASE - 32)) | (1 << (ImpalaSqlParser.KW_DATABASES - 32)) | (1 << (ImpalaSqlParser.KW_DAY - 32)) | (1 << (ImpalaSqlParser.KW_DAYS - 32)) | (1 << (ImpalaSqlParser.KW_DEFAULT - 32)) | (1 << (ImpalaSqlParser.KW_DESC - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (ImpalaSqlParser.KW_EXCLUDING - 65)) | (1 << (ImpalaSqlParser.KW_EXPLAIN - 65)) | (1 << (ImpalaSqlParser.KW_FILTER - 65)) | (1 << (ImpalaSqlParser.KW_FIRST - 65)) | (1 << (ImpalaSqlParser.KW_FOLLOWING - 65)) | (1 << (ImpalaSqlParser.KW_FORMAT - 65)) | (1 << (ImpalaSqlParser.KW_FUNCTIONS - 65)) | (1 << (ImpalaSqlParser.KW_GRANT - 65)) | (1 << (ImpalaSqlParser.KW_HOUR - 65)) | (1 << (ImpalaSqlParser.KW_IF - 65)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 65)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (ImpalaSqlParser.KW_INTERVAL - 101)) | (1 << (ImpalaSqlParser.KW_LAST - 101)) | (1 << (ImpalaSqlParser.KW_LATERAL - 101)) | (1 << (ImpalaSqlParser.KW_LIMIT - 101)) | (1 << (ImpalaSqlParser.KW_MAP - 101)) | (1 << (ImpalaSqlParser.KW_MINUTE - 101)) | (1 << (ImpalaSqlParser.KW_MONTH - 101)) | (1 << (ImpalaSqlParser.KW_NFC - 101)) | (1 << (ImpalaSqlParser.KW_NFD - 101)) | (1 << (ImpalaSqlParser.KW_NFKC - 101)) | (1 << (ImpalaSqlParser.KW_NFKD - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (ImpalaSqlParser.KW_NULLS - 133)) | (1 << (ImpalaSqlParser.KW_OFFSET - 133)) | (1 << (ImpalaSqlParser.KW_OPTION - 133)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 133)) | (1 << (ImpalaSqlParser.KW_OVER - 133)) | (1 << (ImpalaSqlParser.KW_PARTITION - 133)) | (1 << (ImpalaSqlParser.KW_PARTITIONS - 133)) | (1 << (ImpalaSqlParser.KW_PARQUET - 133)) | (1 << (ImpalaSqlParser.KW_POSITION - 133)) | (1 << (ImpalaSqlParser.KW_PRECEDING - 133)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 133)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 133)) | (1 << (ImpalaSqlParser.KW_RANGE - 133)) | (1 << (ImpalaSqlParser.KW_RENAME - 133)) | (1 << (ImpalaSqlParser.KW_REPEATABLE - 133)) | (1 << (ImpalaSqlParser.KW_REPLACE - 133)) | (1 << (ImpalaSqlParser.KW_RESTRICT - 133)) | (1 << (ImpalaSqlParser.KW_REVOKE - 133)))) !== 0) || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & ((1 << (ImpalaSqlParser.KW_ROLE - 165)) | (1 << (ImpalaSqlParser.KW_ROLES - 165)) | (1 << (ImpalaSqlParser.KW_ROW - 165)) | (1 << (ImpalaSqlParser.KW_ROWS - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMA - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMAS - 165)) | (1 << (ImpalaSqlParser.KW_SECOND - 165)) | (1 << (ImpalaSqlParser.KW_SECONDS - 165)) | (1 << (ImpalaSqlParser.KW_SET - 165)) | (1 << (ImpalaSqlParser.KW_SHOW - 165)) | (1 << (ImpalaSqlParser.KW_SOME - 165)) | (1 << (ImpalaSqlParser.KW_STATS - 165)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 165)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 165)) | (1 << (ImpalaSqlParser.KW_TABLES - 165)) | (1 << (ImpalaSqlParser.KW_TABLESAMPLE - 165)) | (1 << (ImpalaSqlParser.KW_TO - 165)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 165)) | (1 << (ImpalaSqlParser.KW_TRUNCATE - 165)))) !== 0) || ((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & ((1 << (ImpalaSqlParser.KW_UNBOUNDED - 199)) | (1 << (ImpalaSqlParser.KW_USE - 199)) | (1 << (ImpalaSqlParser.KW_USER - 199)) | (1 << (ImpalaSqlParser.KW_VIEW - 199)) | (1 << (ImpalaSqlParser.KW_VIEWS - 199)) | (1 << (ImpalaSqlParser.KW_YEAR - 199)))) !== 0) || ((((_la - 255)) & ~0x1F) === 0 && ((1 << (_la - 255)) & ((1 << (ImpalaSqlParser.STRING - 255)) | (1 << (ImpalaSqlParser.IDENTIFIER - 255)) | (1 << (ImpalaSqlParser.DIGIT_IDENTIFIER - 255)) | (1 << (ImpalaSqlParser.BACKQUOTED_IDENTIFIER - 255)))) !== 0)) {
					{
					this.state = 2307;
					this.qualifiedName();
					this.state = 2312;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 2308;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 2309;
						this.qualifiedName();
						}
						}
						this.state = 2314;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2317;
				this.match(ImpalaSqlParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2330;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 301, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2328;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 300, this._ctx) ) {
					case 1:
						{
						_localctx = new SubscriptContext(new PrimaryExpressionContext(_parentctx, _parentState));
						(_localctx as SubscriptContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_primaryExpression);
						this.state = 2320;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 2321;
						this.match(ImpalaSqlParser.LSQUARE);
						this.state = 2322;
						(_localctx as SubscriptContext)._index = this.valueExpression(0);
						this.state = 2323;
						this.match(ImpalaSqlParser.RSQUARE);
						}
						break;

					case 2:
						{
						_localctx = new DereferenceContext(new PrimaryExpressionContext(_parentctx, _parentState));
						(_localctx as DereferenceContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParser.RULE_primaryExpression);
						this.state = 2325;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 2326;
						this.match(ImpalaSqlParser.DOT);
						this.state = 2327;
						(_localctx as DereferenceContext)._fieldName = this.identifier();
						}
						break;
					}
					}
				}
				this.state = 2332;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 301, this._ctx);
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
		this.enterRule(_localctx, 262, ImpalaSqlParser.RULE_stringLiteral);
		try {
			this.state = 2339;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.STRING:
				_localctx = new BasicStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2333;
				this.match(ImpalaSqlParser.STRING);
				}
				break;
			case ImpalaSqlParser.UNICODE_STRING:
				_localctx = new UnicodeStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2334;
				this.match(ImpalaSqlParser.UNICODE_STRING);
				this.state = 2337;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 302, this._ctx) ) {
				case 1:
					{
					this.state = 2335;
					this.match(ImpalaSqlParser.KW_UESCAPE);
					this.state = 2336;
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
		this.enterRule(_localctx, 264, ImpalaSqlParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2341;
			_la = this._input.LA(1);
			if (!(((((_la - 230)) & ~0x1F) === 0 && ((1 << (_la - 230)) & ((1 << (ImpalaSqlParser.EQ - 230)) | (1 << (ImpalaSqlParser.NEQ - 230)) | (1 << (ImpalaSqlParser.LT - 230)) | (1 << (ImpalaSqlParser.LTE - 230)) | (1 << (ImpalaSqlParser.GT - 230)) | (1 << (ImpalaSqlParser.GTE - 230)))) !== 0))) {
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
		this.enterRule(_localctx, 266, ImpalaSqlParser.RULE_comparisonQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2343;
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
		this.enterRule(_localctx, 268, ImpalaSqlParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2345;
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
		this.enterRule(_localctx, 270, ImpalaSqlParser.RULE_interval);
		try {
			this.state = 2361;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 304, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2347;
				this.match(ImpalaSqlParser.INTEGER_VALUE);
				this.state = 2348;
				this.intervalField();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2349;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2350;
				this.match(ImpalaSqlParser.INTEGER_VALUE);
				this.state = 2351;
				this.match(ImpalaSqlParser.RPAREN);
				this.state = 2352;
				this.intervalField();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2353;
				this.match(ImpalaSqlParser.KW_INTERVAL);
				this.state = 2354;
				this.match(ImpalaSqlParser.INTEGER_VALUE);
				this.state = 2355;
				this.intervalField();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2356;
				this.match(ImpalaSqlParser.KW_INTERVAL);
				this.state = 2357;
				this.match(ImpalaSqlParser.LPAREN);
				this.state = 2358;
				this.match(ImpalaSqlParser.INTEGER_VALUE);
				this.state = 2359;
				this.match(ImpalaSqlParser.RPAREN);
				this.state = 2360;
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
		this.enterRule(_localctx, 272, ImpalaSqlParser.RULE_intervalField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2363;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_DAY || _la === ImpalaSqlParser.KW_DAYS || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (ImpalaSqlParser.KW_HOUR - 91)) | (1 << (ImpalaSqlParser.KW_HOURS - 91)) | (1 << (ImpalaSqlParser.KW_MINUTE - 91)) | (1 << (ImpalaSqlParser.KW_MINUTES - 91)))) !== 0) || _la === ImpalaSqlParser.KW_MONTH || _la === ImpalaSqlParser.KW_MONTHS || _la === ImpalaSqlParser.KW_SECOND || _la === ImpalaSqlParser.KW_SECONDS || _la === ImpalaSqlParser.KW_YEAR || _la === ImpalaSqlParser.KW_YEARS)) {
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
		this.enterRule(_localctx, 274, ImpalaSqlParser.RULE_normalForm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2365;
			_la = this._input.LA(1);
			if (!(((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (ImpalaSqlParser.KW_NFC - 126)) | (1 << (ImpalaSqlParser.KW_NFD - 126)) | (1 << (ImpalaSqlParser.KW_NFKC - 126)) | (1 << (ImpalaSqlParser.KW_NFKD - 126)))) !== 0))) {
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
		let _startState: number = 276;
		this.enterRecursionRule(_localctx, 276, ImpalaSqlParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2411;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 308, this._ctx) ) {
			case 1:
				{
				this.state = 2368;
				this.match(ImpalaSqlParser.KW_ARRAY);
				this.state = 2369;
				this.match(ImpalaSqlParser.LT);
				this.state = 2370;
				this.type(0);
				this.state = 2371;
				this.match(ImpalaSqlParser.GT);
				}
				break;

			case 2:
				{
				this.state = 2373;
				this.match(ImpalaSqlParser.KW_MAP);
				this.state = 2374;
				this.match(ImpalaSqlParser.LT);
				this.state = 2375;
				this.type(0);
				this.state = 2376;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 2377;
				this.type(0);
				this.state = 2378;
				this.match(ImpalaSqlParser.GT);
				}
				break;

			case 3:
				{
				this.state = 2380;
				this.match(ImpalaSqlParser.KW_STRUCT);
				this.state = 2381;
				this.match(ImpalaSqlParser.LT);
				this.state = 2382;
				this.identifier();
				this.state = 2383;
				this.match(ImpalaSqlParser.COLON);
				this.state = 2384;
				this.type(0);
				this.state = 2392;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 2385;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 2386;
					this.identifier();
					this.state = 2387;
					this.match(ImpalaSqlParser.COLON);
					this.state = 2388;
					this.type(0);
					}
					}
					this.state = 2394;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2395;
				this.match(ImpalaSqlParser.GT);
				}
				break;

			case 4:
				{
				this.state = 2397;
				this.baseType();
				this.state = 2409;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 307, this._ctx) ) {
				case 1:
					{
					this.state = 2398;
					this.match(ImpalaSqlParser.LPAREN);
					this.state = 2399;
					this.typeParameter();
					this.state = 2404;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParser.COMMA) {
						{
						{
						this.state = 2400;
						this.match(ImpalaSqlParser.COMMA);
						this.state = 2401;
						this.typeParameter();
						}
						}
						this.state = 2406;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2407;
					this.match(ImpalaSqlParser.RPAREN);
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2417;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 309, this._ctx);
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
					this.state = 2413;
					if (!(this.precpred(this._ctx, 5))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
					}
					this.state = 2414;
					this.match(ImpalaSqlParser.KW_ARRAY);
					}
					}
				}
				this.state = 2419;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 309, this._ctx);
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
		this.enterRule(_localctx, 278, ImpalaSqlParser.RULE_typeParameter);
		try {
			this.state = 2422;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.INTEGER_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2420;
				this.match(ImpalaSqlParser.INTEGER_VALUE);
				}
				break;
			case ImpalaSqlParser.KW_ADD:
			case ImpalaSqlParser.KW_ALL:
			case ImpalaSqlParser.KW_ANY:
			case ImpalaSqlParser.KW_ARRAY:
			case ImpalaSqlParser.KW_ASC:
			case ImpalaSqlParser.KW_AT:
			case ImpalaSqlParser.KW_BERNOULLI:
			case ImpalaSqlParser.KW_CASCADE:
			case ImpalaSqlParser.KW_COLUMN:
			case ImpalaSqlParser.KW_COLUMNS:
			case ImpalaSqlParser.KW_COMMENT:
			case ImpalaSqlParser.KW_CURRENT:
			case ImpalaSqlParser.KW_DATA:
			case ImpalaSqlParser.KW_DATABASE:
			case ImpalaSqlParser.KW_DATABASES:
			case ImpalaSqlParser.KW_DAY:
			case ImpalaSqlParser.KW_DAYS:
			case ImpalaSqlParser.KW_DEFAULT:
			case ImpalaSqlParser.KW_DESC:
			case ImpalaSqlParser.KW_EXCLUDING:
			case ImpalaSqlParser.KW_EXPLAIN:
			case ImpalaSqlParser.KW_FILTER:
			case ImpalaSqlParser.KW_FIRST:
			case ImpalaSqlParser.KW_FOLLOWING:
			case ImpalaSqlParser.KW_FORMAT:
			case ImpalaSqlParser.KW_FUNCTIONS:
			case ImpalaSqlParser.KW_GRANT:
			case ImpalaSqlParser.KW_HOUR:
			case ImpalaSqlParser.KW_IF:
			case ImpalaSqlParser.KW_INCLUDING:
			case ImpalaSqlParser.KW_INTERVAL:
			case ImpalaSqlParser.KW_LAST:
			case ImpalaSqlParser.KW_LATERAL:
			case ImpalaSqlParser.KW_LIMIT:
			case ImpalaSqlParser.KW_MAP:
			case ImpalaSqlParser.KW_MINUTE:
			case ImpalaSqlParser.KW_MONTH:
			case ImpalaSqlParser.KW_NFC:
			case ImpalaSqlParser.KW_NFD:
			case ImpalaSqlParser.KW_NFKC:
			case ImpalaSqlParser.KW_NFKD:
			case ImpalaSqlParser.KW_NULLS:
			case ImpalaSqlParser.KW_OFFSET:
			case ImpalaSqlParser.KW_OPTION:
			case ImpalaSqlParser.KW_ORDINALITY:
			case ImpalaSqlParser.KW_OVER:
			case ImpalaSqlParser.KW_PARTITION:
			case ImpalaSqlParser.KW_PARTITIONS:
			case ImpalaSqlParser.KW_PARQUET:
			case ImpalaSqlParser.KW_POSITION:
			case ImpalaSqlParser.KW_PRECEDING:
			case ImpalaSqlParser.KW_PRIVILEGES:
			case ImpalaSqlParser.KW_PROPERTIES:
			case ImpalaSqlParser.KW_RANGE:
			case ImpalaSqlParser.KW_RENAME:
			case ImpalaSqlParser.KW_REPEATABLE:
			case ImpalaSqlParser.KW_REPLACE:
			case ImpalaSqlParser.KW_RESTRICT:
			case ImpalaSqlParser.KW_REVOKE:
			case ImpalaSqlParser.KW_ROLE:
			case ImpalaSqlParser.KW_ROLES:
			case ImpalaSqlParser.KW_ROW:
			case ImpalaSqlParser.KW_ROWS:
			case ImpalaSqlParser.KW_SCHEMA:
			case ImpalaSqlParser.KW_SCHEMAS:
			case ImpalaSqlParser.KW_SECOND:
			case ImpalaSqlParser.KW_SECONDS:
			case ImpalaSqlParser.KW_SET:
			case ImpalaSqlParser.KW_SHOW:
			case ImpalaSqlParser.KW_SOME:
			case ImpalaSqlParser.KW_STATS:
			case ImpalaSqlParser.KW_STRUCT:
			case ImpalaSqlParser.KW_SUBSTRING:
			case ImpalaSqlParser.KW_SYSTEM:
			case ImpalaSqlParser.KW_TABLES:
			case ImpalaSqlParser.KW_TABLESAMPLE:
			case ImpalaSqlParser.KW_TO:
			case ImpalaSqlParser.KW_TRY_CAST:
			case ImpalaSqlParser.KW_TRUNCATE:
			case ImpalaSqlParser.KW_UNBOUNDED:
			case ImpalaSqlParser.KW_USE:
			case ImpalaSqlParser.KW_USER:
			case ImpalaSqlParser.KW_VIEW:
			case ImpalaSqlParser.KW_VIEWS:
			case ImpalaSqlParser.KW_YEAR:
			case ImpalaSqlParser.STRING:
			case ImpalaSqlParser.IDENTIFIER:
			case ImpalaSqlParser.DIGIT_IDENTIFIER:
			case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
			case ImpalaSqlParser.TIME_WITH_TIME_ZONE:
			case ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE:
			case ImpalaSqlParser.DOUBLE_PRECISION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2421;
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
		this.enterRule(_localctx, 280, ImpalaSqlParser.RULE_baseType);
		try {
			this.state = 2428;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.TIME_WITH_TIME_ZONE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2424;
				this.match(ImpalaSqlParser.TIME_WITH_TIME_ZONE);
				}
				break;
			case ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2425;
				this.match(ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE);
				}
				break;
			case ImpalaSqlParser.DOUBLE_PRECISION:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2426;
				this.match(ImpalaSqlParser.DOUBLE_PRECISION);
				}
				break;
			case ImpalaSqlParser.KW_ADD:
			case ImpalaSqlParser.KW_ALL:
			case ImpalaSqlParser.KW_ANY:
			case ImpalaSqlParser.KW_ARRAY:
			case ImpalaSqlParser.KW_ASC:
			case ImpalaSqlParser.KW_AT:
			case ImpalaSqlParser.KW_BERNOULLI:
			case ImpalaSqlParser.KW_CASCADE:
			case ImpalaSqlParser.KW_COLUMN:
			case ImpalaSqlParser.KW_COLUMNS:
			case ImpalaSqlParser.KW_COMMENT:
			case ImpalaSqlParser.KW_CURRENT:
			case ImpalaSqlParser.KW_DATA:
			case ImpalaSqlParser.KW_DATABASE:
			case ImpalaSqlParser.KW_DATABASES:
			case ImpalaSqlParser.KW_DAY:
			case ImpalaSqlParser.KW_DAYS:
			case ImpalaSqlParser.KW_DEFAULT:
			case ImpalaSqlParser.KW_DESC:
			case ImpalaSqlParser.KW_EXCLUDING:
			case ImpalaSqlParser.KW_EXPLAIN:
			case ImpalaSqlParser.KW_FILTER:
			case ImpalaSqlParser.KW_FIRST:
			case ImpalaSqlParser.KW_FOLLOWING:
			case ImpalaSqlParser.KW_FORMAT:
			case ImpalaSqlParser.KW_FUNCTIONS:
			case ImpalaSqlParser.KW_GRANT:
			case ImpalaSqlParser.KW_HOUR:
			case ImpalaSqlParser.KW_IF:
			case ImpalaSqlParser.KW_INCLUDING:
			case ImpalaSqlParser.KW_INTERVAL:
			case ImpalaSqlParser.KW_LAST:
			case ImpalaSqlParser.KW_LATERAL:
			case ImpalaSqlParser.KW_LIMIT:
			case ImpalaSqlParser.KW_MAP:
			case ImpalaSqlParser.KW_MINUTE:
			case ImpalaSqlParser.KW_MONTH:
			case ImpalaSqlParser.KW_NFC:
			case ImpalaSqlParser.KW_NFD:
			case ImpalaSqlParser.KW_NFKC:
			case ImpalaSqlParser.KW_NFKD:
			case ImpalaSqlParser.KW_NULLS:
			case ImpalaSqlParser.KW_OFFSET:
			case ImpalaSqlParser.KW_OPTION:
			case ImpalaSqlParser.KW_ORDINALITY:
			case ImpalaSqlParser.KW_OVER:
			case ImpalaSqlParser.KW_PARTITION:
			case ImpalaSqlParser.KW_PARTITIONS:
			case ImpalaSqlParser.KW_PARQUET:
			case ImpalaSqlParser.KW_POSITION:
			case ImpalaSqlParser.KW_PRECEDING:
			case ImpalaSqlParser.KW_PRIVILEGES:
			case ImpalaSqlParser.KW_PROPERTIES:
			case ImpalaSqlParser.KW_RANGE:
			case ImpalaSqlParser.KW_RENAME:
			case ImpalaSqlParser.KW_REPEATABLE:
			case ImpalaSqlParser.KW_REPLACE:
			case ImpalaSqlParser.KW_RESTRICT:
			case ImpalaSqlParser.KW_REVOKE:
			case ImpalaSqlParser.KW_ROLE:
			case ImpalaSqlParser.KW_ROLES:
			case ImpalaSqlParser.KW_ROW:
			case ImpalaSqlParser.KW_ROWS:
			case ImpalaSqlParser.KW_SCHEMA:
			case ImpalaSqlParser.KW_SCHEMAS:
			case ImpalaSqlParser.KW_SECOND:
			case ImpalaSqlParser.KW_SECONDS:
			case ImpalaSqlParser.KW_SET:
			case ImpalaSqlParser.KW_SHOW:
			case ImpalaSqlParser.KW_SOME:
			case ImpalaSqlParser.KW_STATS:
			case ImpalaSqlParser.KW_SUBSTRING:
			case ImpalaSqlParser.KW_SYSTEM:
			case ImpalaSqlParser.KW_TABLES:
			case ImpalaSqlParser.KW_TABLESAMPLE:
			case ImpalaSqlParser.KW_TO:
			case ImpalaSqlParser.KW_TRY_CAST:
			case ImpalaSqlParser.KW_TRUNCATE:
			case ImpalaSqlParser.KW_UNBOUNDED:
			case ImpalaSqlParser.KW_USE:
			case ImpalaSqlParser.KW_USER:
			case ImpalaSqlParser.KW_VIEW:
			case ImpalaSqlParser.KW_VIEWS:
			case ImpalaSqlParser.KW_YEAR:
			case ImpalaSqlParser.STRING:
			case ImpalaSqlParser.IDENTIFIER:
			case ImpalaSqlParser.DIGIT_IDENTIFIER:
			case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2427;
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
		this.enterRule(_localctx, 282, ImpalaSqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2430;
			this.match(ImpalaSqlParser.KW_WHEN);
			this.state = 2431;
			_localctx._condition = this.expression();
			this.state = 2432;
			this.match(ImpalaSqlParser.KW_THEN);
			this.state = 2433;
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
		this.enterRule(_localctx, 284, ImpalaSqlParser.RULE_filter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2435;
			this.match(ImpalaSqlParser.KW_FILTER);
			this.state = 2436;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 2437;
			this.match(ImpalaSqlParser.KW_WHERE);
			this.state = 2438;
			this.booleanExpression(0);
			this.state = 2439;
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
		this.enterRule(_localctx, 286, ImpalaSqlParser.RULE_over);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2441;
			this.match(ImpalaSqlParser.KW_OVER);
			this.state = 2442;
			this.match(ImpalaSqlParser.LPAREN);
			this.state = 2453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_PARTITION) {
				{
				this.state = 2443;
				this.match(ImpalaSqlParser.KW_PARTITION);
				this.state = 2444;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 2445;
				_localctx._expression = this.expression();
				_localctx._partition.push(_localctx._expression);
				this.state = 2450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 2446;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 2447;
					_localctx._expression = this.expression();
					_localctx._partition.push(_localctx._expression);
					}
					}
					this.state = 2452;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 2465;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_ORDER) {
				{
				this.state = 2455;
				this.match(ImpalaSqlParser.KW_ORDER);
				this.state = 2456;
				this.match(ImpalaSqlParser.KW_BY);
				this.state = 2457;
				this.sortItem();
				this.state = 2462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParser.COMMA) {
					{
					{
					this.state = 2458;
					this.match(ImpalaSqlParser.COMMA);
					this.state = 2459;
					this.sortItem();
					}
					}
					this.state = 2464;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 2468;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParser.KW_RANGE || _la === ImpalaSqlParser.KW_ROWS) {
				{
				this.state = 2467;
				this.windowFrame();
				}
			}

			this.state = 2470;
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
		this.enterRule(_localctx, 288, ImpalaSqlParser.RULE_windowFrame);
		try {
			this.state = 2488;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 317, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2472;
				_localctx._frameType = this.match(ImpalaSqlParser.KW_RANGE);
				this.state = 2473;
				_localctx._start_ = this.frameBound();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2474;
				_localctx._frameType = this.match(ImpalaSqlParser.KW_ROWS);
				this.state = 2475;
				_localctx._start_ = this.frameBound();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2476;
				_localctx._frameType = this.match(ImpalaSqlParser.KW_RANGE);
				this.state = 2477;
				this.match(ImpalaSqlParser.KW_BETWEEN);
				this.state = 2478;
				_localctx._start_ = this.frameBound();
				this.state = 2479;
				this.match(ImpalaSqlParser.KW_AND);
				this.state = 2480;
				_localctx._end = this.frameBound();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2482;
				_localctx._frameType = this.match(ImpalaSqlParser.KW_ROWS);
				this.state = 2483;
				this.match(ImpalaSqlParser.KW_BETWEEN);
				this.state = 2484;
				_localctx._start_ = this.frameBound();
				this.state = 2485;
				this.match(ImpalaSqlParser.KW_AND);
				this.state = 2486;
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
		this.enterRule(_localctx, 290, ImpalaSqlParser.RULE_frameBound);
		let _la: number;
		try {
			this.state = 2499;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 318, this._ctx) ) {
			case 1:
				_localctx = new UnboundedFrameContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2490;
				this.match(ImpalaSqlParser.KW_UNBOUNDED);
				this.state = 2491;
				(_localctx as UnboundedFrameContext)._boundType = this.match(ImpalaSqlParser.KW_PRECEDING);
				}
				break;

			case 2:
				_localctx = new UnboundedFrameContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2492;
				this.match(ImpalaSqlParser.KW_UNBOUNDED);
				this.state = 2493;
				(_localctx as UnboundedFrameContext)._boundType = this.match(ImpalaSqlParser.KW_FOLLOWING);
				}
				break;

			case 3:
				_localctx = new CurrentRowBoundContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2494;
				this.match(ImpalaSqlParser.KW_CURRENT);
				this.state = 2495;
				this.match(ImpalaSqlParser.KW_ROW);
				}
				break;

			case 4:
				_localctx = new BoundedFrameContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2496;
				this.expression();
				this.state = 2497;
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
		this.enterRule(_localctx, 292, ImpalaSqlParser.RULE_pathElement);
		try {
			this.state = 2506;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 319, this._ctx) ) {
			case 1:
				_localctx = new QualifiedArgumentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2501;
				this.identifier();
				this.state = 2502;
				this.match(ImpalaSqlParser.DOT);
				this.state = 2503;
				this.identifier();
				}
				break;

			case 2:
				_localctx = new UnqualifiedArgumentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2505;
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
		this.enterRule(_localctx, 294, ImpalaSqlParser.RULE_pathSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2508;
			this.pathElement();
			this.state = 2513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParser.COMMA) {
				{
				{
				this.state = 2509;
				this.match(ImpalaSqlParser.COMMA);
				this.state = 2510;
				this.pathElement();
				}
				}
				this.state = 2515;
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
		this.enterRule(_localctx, 296, ImpalaSqlParser.RULE_privilege);
		let _la: number;
		try {
			this.state = 2529;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_ALL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2516;
				this.match(ImpalaSqlParser.KW_ALL);
				}
				break;
			case ImpalaSqlParser.KW_ALTER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2517;
				this.match(ImpalaSqlParser.KW_ALTER);
				}
				break;
			case ImpalaSqlParser.KW_DROP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2518;
				this.match(ImpalaSqlParser.KW_DROP);
				}
				break;
			case ImpalaSqlParser.KW_CREATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2519;
				this.match(ImpalaSqlParser.KW_CREATE);
				}
				break;
			case ImpalaSqlParser.KW_INSERT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2520;
				this.match(ImpalaSqlParser.KW_INSERT);
				}
				break;
			case ImpalaSqlParser.KW_REFRESH:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2521;
				this.match(ImpalaSqlParser.KW_REFRESH);
				}
				break;
			case ImpalaSqlParser.KW_SELECT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2522;
				this.match(ImpalaSqlParser.KW_SELECT);
				this.state = 2527;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.LPAREN) {
					{
					this.state = 2523;
					this.match(ImpalaSqlParser.LPAREN);
					this.state = 2524;
					_localctx._columnName = this.identifier();
					this.state = 2525;
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
		this.enterRule(_localctx, 298, ImpalaSqlParser.RULE_objectType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2531;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParser.KW_DATABASE || ((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & ((1 << (ImpalaSqlParser.KW_SERVER - 177)) | (1 << (ImpalaSqlParser.KW_TABLE - 177)) | (1 << (ImpalaSqlParser.KW_URI - 177)))) !== 0))) {
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
		this.enterRule(_localctx, 300, ImpalaSqlParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2533;
			this.identifier();
			this.state = 2538;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 323, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2534;
					this.match(ImpalaSqlParser.DOT);
					this.state = 2535;
					this.identifier();
					}
					}
				}
				this.state = 2540;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 323, this._ctx);
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
		this.enterRule(_localctx, 302, ImpalaSqlParser.RULE_principal);
		try {
			this.state = 2547;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.KW_ROLE:
				_localctx = new RolePrincipalContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2541;
				this.match(ImpalaSqlParser.KW_ROLE);
				this.state = 2542;
				this.identifier();
				}
				break;
			case ImpalaSqlParser.KW_USER:
				_localctx = new UserPrincipalContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2543;
				this.match(ImpalaSqlParser.KW_USER);
				this.state = 2544;
				this.identifier();
				}
				break;
			case ImpalaSqlParser.KW_GROUP:
				_localctx = new GroupPrincipalContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2545;
				this.match(ImpalaSqlParser.KW_GROUP);
				this.state = 2546;
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
		this.enterRule(_localctx, 304, ImpalaSqlParser.RULE_identifier);
		try {
			this.state = 2554;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParser.IDENTIFIER:
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2549;
				this.match(ImpalaSqlParser.IDENTIFIER);
				}
				break;
			case ImpalaSqlParser.STRING:
				_localctx = new QuotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2550;
				this.match(ImpalaSqlParser.STRING);
				}
				break;
			case ImpalaSqlParser.KW_ADD:
			case ImpalaSqlParser.KW_ALL:
			case ImpalaSqlParser.KW_ANY:
			case ImpalaSqlParser.KW_ARRAY:
			case ImpalaSqlParser.KW_ASC:
			case ImpalaSqlParser.KW_AT:
			case ImpalaSqlParser.KW_BERNOULLI:
			case ImpalaSqlParser.KW_CASCADE:
			case ImpalaSqlParser.KW_COLUMN:
			case ImpalaSqlParser.KW_COLUMNS:
			case ImpalaSqlParser.KW_COMMENT:
			case ImpalaSqlParser.KW_CURRENT:
			case ImpalaSqlParser.KW_DATA:
			case ImpalaSqlParser.KW_DATABASE:
			case ImpalaSqlParser.KW_DATABASES:
			case ImpalaSqlParser.KW_DAY:
			case ImpalaSqlParser.KW_DAYS:
			case ImpalaSqlParser.KW_DEFAULT:
			case ImpalaSqlParser.KW_DESC:
			case ImpalaSqlParser.KW_EXCLUDING:
			case ImpalaSqlParser.KW_EXPLAIN:
			case ImpalaSqlParser.KW_FILTER:
			case ImpalaSqlParser.KW_FIRST:
			case ImpalaSqlParser.KW_FOLLOWING:
			case ImpalaSqlParser.KW_FORMAT:
			case ImpalaSqlParser.KW_FUNCTIONS:
			case ImpalaSqlParser.KW_GRANT:
			case ImpalaSqlParser.KW_HOUR:
			case ImpalaSqlParser.KW_IF:
			case ImpalaSqlParser.KW_INCLUDING:
			case ImpalaSqlParser.KW_INTERVAL:
			case ImpalaSqlParser.KW_LAST:
			case ImpalaSqlParser.KW_LATERAL:
			case ImpalaSqlParser.KW_LIMIT:
			case ImpalaSqlParser.KW_MAP:
			case ImpalaSqlParser.KW_MINUTE:
			case ImpalaSqlParser.KW_MONTH:
			case ImpalaSqlParser.KW_NFC:
			case ImpalaSqlParser.KW_NFD:
			case ImpalaSqlParser.KW_NFKC:
			case ImpalaSqlParser.KW_NFKD:
			case ImpalaSqlParser.KW_NULLS:
			case ImpalaSqlParser.KW_OFFSET:
			case ImpalaSqlParser.KW_OPTION:
			case ImpalaSqlParser.KW_ORDINALITY:
			case ImpalaSqlParser.KW_OVER:
			case ImpalaSqlParser.KW_PARTITION:
			case ImpalaSqlParser.KW_PARTITIONS:
			case ImpalaSqlParser.KW_PARQUET:
			case ImpalaSqlParser.KW_POSITION:
			case ImpalaSqlParser.KW_PRECEDING:
			case ImpalaSqlParser.KW_PRIVILEGES:
			case ImpalaSqlParser.KW_PROPERTIES:
			case ImpalaSqlParser.KW_RANGE:
			case ImpalaSqlParser.KW_RENAME:
			case ImpalaSqlParser.KW_REPEATABLE:
			case ImpalaSqlParser.KW_REPLACE:
			case ImpalaSqlParser.KW_RESTRICT:
			case ImpalaSqlParser.KW_REVOKE:
			case ImpalaSqlParser.KW_ROLE:
			case ImpalaSqlParser.KW_ROLES:
			case ImpalaSqlParser.KW_ROW:
			case ImpalaSqlParser.KW_ROWS:
			case ImpalaSqlParser.KW_SCHEMA:
			case ImpalaSqlParser.KW_SCHEMAS:
			case ImpalaSqlParser.KW_SECOND:
			case ImpalaSqlParser.KW_SECONDS:
			case ImpalaSqlParser.KW_SET:
			case ImpalaSqlParser.KW_SHOW:
			case ImpalaSqlParser.KW_SOME:
			case ImpalaSqlParser.KW_STATS:
			case ImpalaSqlParser.KW_SUBSTRING:
			case ImpalaSqlParser.KW_SYSTEM:
			case ImpalaSqlParser.KW_TABLES:
			case ImpalaSqlParser.KW_TABLESAMPLE:
			case ImpalaSqlParser.KW_TO:
			case ImpalaSqlParser.KW_TRY_CAST:
			case ImpalaSqlParser.KW_TRUNCATE:
			case ImpalaSqlParser.KW_UNBOUNDED:
			case ImpalaSqlParser.KW_USE:
			case ImpalaSqlParser.KW_USER:
			case ImpalaSqlParser.KW_VIEW:
			case ImpalaSqlParser.KW_VIEWS:
			case ImpalaSqlParser.KW_YEAR:
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2551;
				this.nonReserved();
				}
				break;
			case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
				_localctx = new BackQuotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2552;
				this.match(ImpalaSqlParser.BACKQUOTED_IDENTIFIER);
				}
				break;
			case ImpalaSqlParser.DIGIT_IDENTIFIER:
				_localctx = new DigitIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2553;
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
		this.enterRule(_localctx, 306, ImpalaSqlParser.RULE_number);
		let _la: number;
		try {
			this.state = 2568;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 329, this._ctx) ) {
			case 1:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2557;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.MINUS) {
					{
					this.state = 2556;
					this.match(ImpalaSqlParser.MINUS);
					}
				}

				this.state = 2559;
				this.match(ImpalaSqlParser.DECIMAL_VALUE);
				}
				break;

			case 2:
				_localctx = new DoubleLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2561;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.MINUS) {
					{
					this.state = 2560;
					this.match(ImpalaSqlParser.MINUS);
					}
				}

				this.state = 2563;
				this.match(ImpalaSqlParser.DOUBLE_VALUE);
				}
				break;

			case 3:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParser.MINUS) {
					{
					this.state = 2564;
					this.match(ImpalaSqlParser.MINUS);
					}
				}

				this.state = 2567;
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
	public nonReserved(): NonReservedContext {
		let _localctx: NonReservedContext = new NonReservedContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, ImpalaSqlParser.RULE_nonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2570;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParser.KW_ADD) | (1 << ImpalaSqlParser.KW_ALL) | (1 << ImpalaSqlParser.KW_ANY) | (1 << ImpalaSqlParser.KW_ARRAY) | (1 << ImpalaSqlParser.KW_ASC) | (1 << ImpalaSqlParser.KW_AT) | (1 << ImpalaSqlParser.KW_BERNOULLI) | (1 << ImpalaSqlParser.KW_CASCADE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ImpalaSqlParser.KW_COLUMN - 32)) | (1 << (ImpalaSqlParser.KW_COLUMNS - 32)) | (1 << (ImpalaSqlParser.KW_COMMENT - 32)) | (1 << (ImpalaSqlParser.KW_CURRENT - 32)) | (1 << (ImpalaSqlParser.KW_DATA - 32)) | (1 << (ImpalaSqlParser.KW_DATABASE - 32)) | (1 << (ImpalaSqlParser.KW_DATABASES - 32)) | (1 << (ImpalaSqlParser.KW_DAY - 32)) | (1 << (ImpalaSqlParser.KW_DAYS - 32)) | (1 << (ImpalaSqlParser.KW_DEFAULT - 32)) | (1 << (ImpalaSqlParser.KW_DESC - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (ImpalaSqlParser.KW_EXCLUDING - 65)) | (1 << (ImpalaSqlParser.KW_EXPLAIN - 65)) | (1 << (ImpalaSqlParser.KW_FILTER - 65)) | (1 << (ImpalaSqlParser.KW_FIRST - 65)) | (1 << (ImpalaSqlParser.KW_FOLLOWING - 65)) | (1 << (ImpalaSqlParser.KW_FORMAT - 65)) | (1 << (ImpalaSqlParser.KW_FUNCTIONS - 65)) | (1 << (ImpalaSqlParser.KW_GRANT - 65)) | (1 << (ImpalaSqlParser.KW_HOUR - 65)) | (1 << (ImpalaSqlParser.KW_IF - 65)) | (1 << (ImpalaSqlParser.KW_INCLUDING - 65)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (ImpalaSqlParser.KW_INTERVAL - 101)) | (1 << (ImpalaSqlParser.KW_LAST - 101)) | (1 << (ImpalaSqlParser.KW_LATERAL - 101)) | (1 << (ImpalaSqlParser.KW_LIMIT - 101)) | (1 << (ImpalaSqlParser.KW_MAP - 101)) | (1 << (ImpalaSqlParser.KW_MINUTE - 101)) | (1 << (ImpalaSqlParser.KW_MONTH - 101)) | (1 << (ImpalaSqlParser.KW_NFC - 101)) | (1 << (ImpalaSqlParser.KW_NFD - 101)) | (1 << (ImpalaSqlParser.KW_NFKC - 101)) | (1 << (ImpalaSqlParser.KW_NFKD - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (ImpalaSqlParser.KW_NULLS - 133)) | (1 << (ImpalaSqlParser.KW_OFFSET - 133)) | (1 << (ImpalaSqlParser.KW_OPTION - 133)) | (1 << (ImpalaSqlParser.KW_ORDINALITY - 133)) | (1 << (ImpalaSqlParser.KW_OVER - 133)) | (1 << (ImpalaSqlParser.KW_PARTITION - 133)) | (1 << (ImpalaSqlParser.KW_PARTITIONS - 133)) | (1 << (ImpalaSqlParser.KW_PARQUET - 133)) | (1 << (ImpalaSqlParser.KW_POSITION - 133)) | (1 << (ImpalaSqlParser.KW_PRECEDING - 133)) | (1 << (ImpalaSqlParser.KW_PRIVILEGES - 133)) | (1 << (ImpalaSqlParser.KW_PROPERTIES - 133)) | (1 << (ImpalaSqlParser.KW_RANGE - 133)) | (1 << (ImpalaSqlParser.KW_RENAME - 133)) | (1 << (ImpalaSqlParser.KW_REPEATABLE - 133)) | (1 << (ImpalaSqlParser.KW_REPLACE - 133)) | (1 << (ImpalaSqlParser.KW_RESTRICT - 133)) | (1 << (ImpalaSqlParser.KW_REVOKE - 133)))) !== 0) || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & ((1 << (ImpalaSqlParser.KW_ROLE - 165)) | (1 << (ImpalaSqlParser.KW_ROLES - 165)) | (1 << (ImpalaSqlParser.KW_ROW - 165)) | (1 << (ImpalaSqlParser.KW_ROWS - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMA - 165)) | (1 << (ImpalaSqlParser.KW_SCHEMAS - 165)) | (1 << (ImpalaSqlParser.KW_SECOND - 165)) | (1 << (ImpalaSqlParser.KW_SECONDS - 165)) | (1 << (ImpalaSqlParser.KW_SET - 165)) | (1 << (ImpalaSqlParser.KW_SHOW - 165)) | (1 << (ImpalaSqlParser.KW_SOME - 165)) | (1 << (ImpalaSqlParser.KW_STATS - 165)) | (1 << (ImpalaSqlParser.KW_SUBSTRING - 165)) | (1 << (ImpalaSqlParser.KW_SYSTEM - 165)) | (1 << (ImpalaSqlParser.KW_TABLES - 165)) | (1 << (ImpalaSqlParser.KW_TABLESAMPLE - 165)) | (1 << (ImpalaSqlParser.KW_TO - 165)) | (1 << (ImpalaSqlParser.KW_TRY_CAST - 165)) | (1 << (ImpalaSqlParser.KW_TRUNCATE - 165)))) !== 0) || ((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & ((1 << (ImpalaSqlParser.KW_UNBOUNDED - 199)) | (1 << (ImpalaSqlParser.KW_USE - 199)) | (1 << (ImpalaSqlParser.KW_USER - 199)) | (1 << (ImpalaSqlParser.KW_VIEW - 199)) | (1 << (ImpalaSqlParser.KW_VIEWS - 199)) | (1 << (ImpalaSqlParser.KW_YEAR - 199)))) !== 0))) {
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
		case 108:
			return this.queryTerm_sempred(_localctx as QueryTermContext, predIndex);

		case 118:
			return this.relation_sempred(_localctx as RelationContext, predIndex);

		case 127:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 129:
			return this.valueExpression_sempred(_localctx as ValueExpressionContext, predIndex);

		case 130:
			return this.primaryExpression_sempred(_localctx as PrimaryExpressionContext, predIndex);

		case 138:
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

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u0110\u0A0F\x04" +
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
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x03\x02\x03\x02\x05\x02\u013B\n\x02\x07\x02" +
		"\u013D\n\x02\f\x02\x0E\x02\u0140\v\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03\u015A\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05" +
		"\x06\u0169\n\x06\x03\x07\x03\x07\x05\x07\u016D\n\x07\x03\x07\x03\x07\x05" +
		"\x07\u0171\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\u0178" +
		"\n\x07\f\x07\x0E\x07\u017B\v\x07\x03\x07\x03\x07\x05\x07\u017F\n\x07\x03" +
		"\x07\x03\x07\x05\x07\u0183\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\u0189\n\x07\x05\x07\u018B\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0190" +
		"\n\x07\x03\b\x03\b\x05\b\u0194\n\b\x03\b\x03\b\x05\b\u0198\n\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x05\b\u019F\n\b\x03\b\x03\b\x03\b\x05\b\u01A4\n\b" +
		"\x03\b\x03\b\x03\t\x03\t\x05\t\u01AA\n\t\x03\t\x03\t\x05\t\u01AE\n\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x07\t\u01B5\n\t\f\t\x0E\t\u01B8\v\t\x03\t\x03" +
		"\t\x03\t\x03\t\x05\t\u01BE\n\t\x03\t\x03\t\x05\t\u01C2\n\t\x03\t\x03\t" +
		"\x03\t\x05\t\u01C7\n\t\x05\t\u01C9\n\t\x03\t\x03\t\x03\t\x05\t\u01CE\n" +
		"\t\x03\t\x03\t\x05\t\u01D2\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u01D9" +
		"\n\t\x03\t\x03\t\x05\t\u01DD\n\t\x03\n\x03\n\x03\n\x05\n\u01E2\n\n\x03" +
		"\n\x03\n\x05\n\u01E6\n\n\x03\n\x03\n\x05\n\u01EA\n\n\x03\n\x03\n\x05\n" +
		"\u01EE\n\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x05\v\u01F6\n\v\x03\v\x03" +
		"\v\x03\v\x05\v\u01FB\n\v\x03\v\x03\v\x05\v\u01FF\n\v\x03\f\x03\f\x03\f" +
		"\x03\f\x03\r\x03\r\x05\r\u0207\n\r\x03\r\x03\r\x05\r\u020B\n\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x07\r\u0212\n\r\f\r\x0E\r\u0215\v\r\x05\r\u0217\n" +
		"\r\x03\r\x05\r\u021A\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0220\n\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x05\r\u0227\n\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x05\r\u0232\n\r\x03\r\x03\r\x03\r\x05\r\u0237" +
		"\n\r\x03\r\x03\r\x03\r\x05\r\u023C\n\r\x03\r\x03\r\x03\r\x05\r\u0241\n" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0246\n\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x07\x0E\u024D\n\x0E\f\x0E\x0E\x0E\u0250\v\x0E\x05\x0E" +
		"\u0252\n\x0E\x03\x0E\x05\x0E\u0255\n\x0E\x03\x0E\x03\x0E\x05\x0E\u0259" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0273" +
		"\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u028D" +
		"\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12" +
		"\u0296\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x05\x12\u02A0\n\x12\x03\x12\x05\x12\u02A3\n\x12\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x05\x14\u02B1\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x05\x16\u02C3\n\x16\x05\x16\u02C5\n\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x07\x16\u02CC\n\x16\f\x16\x0E\x16\u02CF\v\x16\x03\x16" +
		"\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u02D9" +
		"\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18" +
		"\u02E2\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u02E9\n\x18" +
		"\x03\x18\x03\x18\x05\x18\u02ED\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x05\x19\u02F4\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u02FA" +
		"\n\x19\x03\x19\x05\x19\u02FD\n\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0302" +
		"\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0309\n\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x05\x1A\u0317\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0324" +
		"\n\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0329\n\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x05\x1C\u032E\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0334" +
		"\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03\"\x03\"\x05\"\u0358\n\"\x03\"\x05\"\u035B\n\"\x03\"\x03\"\x03" +
		"#\x03#\x05#\u0361\n#\x03#\x05#\u0364\n#\x03#\x03#\x03$\x03$\x05$\u036A" +
		"\n$\x03%\x03%\x03%\x03%\x05%\u0370\n%\x03%\x03%\x03%\x03%\x03%\x03%\x03" +
		"%\x03%\x03%\x03%\x05%\u037C\n%\x05%\u037E\n%\x03&\x03&\x03&\x03&\x03&" +
		"\x03&\x05&\u0386\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u038D\n\'\x03" +
		"(\x03(\x03(\x05(\u0392\n(\x03(\x03(\x05(\u0396\n(\x03)\x03)\x03)\x05)" +
		"\u039B\n)\x03)\x03)\x05)\u039F\n)\x03*\x03*\x05*\u03A3\n*\x03*\x03*\x03" +
		"*\x03*\x05*\u03A9\n*\x03+\x03+\x05+\u03AD\n+\x03+\x03+\x05+\u03B1\n+\x03" +
		"+\x03+\x03+\x03+\x03+\x07+\u03B8\n+\f+\x0E+\u03BB\v+\x05+\u03BD\n+\x03" +
		"+\x05+\u03C0\n+\x03,\x03,\x03,\x03,\x03-\x03-\x05-\u03C8\n-\x03.\x03." +
		"\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x05/\u03D6\n/\x03/" +
		"\x03/\x03/\x030\x030\x050\u03DD\n0\x031\x031\x031\x031\x031\x031\x031" +
		"\x032\x032\x032\x032\x052\u03EA\n2\x032\x032\x032\x032\x052\u03F0\n2\x03" +
		"2\x032\x032\x052\u03F5\n2\x032\x052\u03F8\n2\x033\x053\u03FB\n3\x033\x03" +
		"3\x033\x053\u0400\n3\x033\x033\x053\u0404\n3\x033\x033\x033\x033\x033" +
		"\x073\u040B\n3\f3\x0E3\u040E\v3\x033\x033\x053\u0412\n3\x033\x033\x03" +
		"4\x034\x054\u0418\n4\x035\x035\x055\u041C\n5\x035\x035\x035\x055\u0421" +
		"\n5\x036\x036\x036\x056\u0426\n6\x036\x056\u0429\n6\x036\x036\x036\x03" +
		"6\x076\u042F\n6\f6\x0E6\u0432\v6\x056\u0434\n6\x036\x036\x056\u0438\n" +
		"6\x037\x037\x037\x037\x037\x037\x037\x037\x077\u0442\n7\f7\x0E7\u0445" +
		"\v7\x057\u0447\n7\x037\x037\x057\u044B\n7\x038\x038\x038\x058\u0450\n" +
		"8\x038\x038\x058\u0454\n8\x038\x038\x039\x039\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x059\u0462\n9\x03:\x03:\x03:\x05:\u0467\n:\x03:\x03:" +
		"\x03:\x07:\u046C\n:\f:\x0E:\u046F\v:\x05:\u0471\n:\x03;\x03;\x03;\x03" +
		";\x05;\u0477\n;\x03;\x05;\u047A\n;\x03;\x03;\x03;\x07;\u047F\n;\f;\x0E" +
		";\u0482\v;\x05;\u0484\n;\x03<\x03<\x05<\u0488\n<\x03<\x03<\x03<\x05<\u048D" +
		"\n<\x03<\x05<\u0490\n<\x03<\x03<\x03<\x07<\u0495\n<\f<\x0E<\u0498\v<\x05" +
		"<\u049A\n<\x03=\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x03?\x03" +
		"?\x05?\u04A8\n?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x03@\x05@\u04B6\n@\x03@\x03@\x05@\u04BA\n@\x03A\x03A\x05A\u04BE\nA\x03" +
		"A\x03A\x03B\x03B\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03C\x03C\x03" +
		"C\x05C\u04CF\nC\x05C\u04D1\nC\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05D" +
		"\u04DA\nD\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u04E5\nF\x03" +
		"G\x03G\x03G\x03G\x05G\u04EB\nG\x03G\x03G\x03G\x05G\u04F0\nG\x03G\x05G" +
		"\u04F3\nG\x03G\x03G\x03H\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x05I" +
		"\u0500\nI\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u050A\nI\x03I\x03" +
		"I\x05I\u050E\nI\x03J\x03J\x03J\x05J\u0513\nJ\x03K\x03K\x03K\x03K\x03K" +
		"\x03K\x03K\x07K\u051C\nK\fK\x0EK\u051F\vK\x03K\x03K\x05K\u0523\nK\x03" +
		"L\x03L\x03L\x03M\x03M\x03M\x03M\x03N\x03N\x03N\x03O\x03O\x03O\x03O\x03" +
		"P\x03P\x03P\x05P\u0536\nP\x03P\x03P\x05P\u053A\nP\x03P\x03P\x03P\x05P" +
		"\u053F\nP\x03P\x03P\x03P\x05P\u0544\nP\x03P\x03P\x03P\x05P\u0549\nP\x03" +
		"P\x03P\x05P\u054D\nP\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x05P\u0556\nP" +
		"\x03P\x05P\u0559\nP\x03P\x03P\x05P\u055D\nP\x03Q\x03Q\x03Q\x07Q\u0562" +
		"\nQ\fQ\x0EQ\u0565\vQ\x03R\x03R\x03R\x03R\x03S\x03S\x03S\x03S\x05S\u056F" +
		"\nS\x03S\x03S\x03S\x03S\x05S\u0575\nS\x07S\u0577\nS\fS\x0ES\u057A\vS\x03" +
		"S\x03S\x03T\x05T\u057F\nT\x03T\x03T\x03U\x03U\x03U\x03U\x07U\u0587\nU" +
		"\fU\x0EU\u058A\vU\x03V\x03V\x03V\x03V\x05V\u0590\nV\x03V\x03V\x03V\x05" +
		"V\u0595\nV\x03V\x03V\x03V\x05V\u059A\nV\x03V\x03V\x03V\x05V\u059F\nV\x03" +
		"V\x03V\x07V\u05A3\nV\fV\x0EV\u05A6\vV\x05V\u05A8\nV\x03W\x03W\x03W\x03" +
		"W\x03W\x03W\x03W\x05W\u05B1\nW\x03W\x05W\u05B4\nW\x03W\x05W\u05B7\nW\x03" +
		"X\x03X\x03X\x03X\x05X\u05BD\nX\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x07Z\u05C5" +
		"\nZ\fZ\x0EZ\u05C8\vZ\x05Z\u05CA\nZ\x03Z\x03Z\x05Z\u05CE\nZ\x03Z\x03Z\x05" +
		"Z\u05D2\nZ\x03[\x03[\x03[\x03[\x05[\u05D8\n[\x03[\x03[\x07[\u05DC\n[\f" +
		"[\x0E[\u05DF\v[\x05[\u05E1\n[\x03\\\x05\\\u05E4\n\\\x03\\\x03\\\x05\\" +
		"\u05E8\n\\\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x05]\u05F2\n]\x03^" +
		"\x03^\x03_\x03_\x03`\x03`\x03`\x07`\u05FB\n`\f`\x0E`\u05FE\v`\x03`\x03" +
		"`\x05`\u0602\n`\x03`\x05`\u0605\n`\x03a\x03a\x05a\u0609\na\x03a\x03a\x03" +
		"a\x03b\x03b\x05b\u0610\nb\x03b\x03b\x03b\x03b\x03b\x03b\x07b\u0618\nb" +
		"\fb\x0Eb\u061B\vb\x03b\x03b\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x05c\u0626" +
		"\nc\x03c\x03c\x03c\x03c\x05c\u062C\nc\x05c\u062E\nc\x03d\x03d\x03d\x03" +
		"d\x03d\x03d\x03d\x05d\u0637\nd\x03d\x05d\u063A\nd\x03e\x03e\x03e\x03e" +
		"\x03e\x05e\u0641\ne\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x05f\u064B" +
		"\nf\x03g\x03g\x03g\x03g\x05g\u0651\ng\x03h\x03h\x03h\x03h\x07h\u0657\n" +
		"h\fh\x0Eh\u065A\vh\x03h\x03h\x03i\x03i\x03i\x03i\x07i\u0662\ni\fi\x0E" +
		"i\u0665\vi\x03i\x03i\x03j\x03j\x03j\x07j\u066C\nj\fj\x0Ej\u066F\vj\x03" +
		"k\x03k\x03k\x03k\x03k\x03k\x03k\x03k\x05k\u0679\nk\x05k\u067B\nk\x03k" +
		"\x03k\x03k\x03k\x05k\u0681\nk\x03l\x03l\x03l\x05l\u0686\nl\x03m\x03m\x03" +
		"m\x03m\x03m\x03m\x07m\u068E\nm\fm\x0Em\u0691\vm\x05m\u0693\nm\x03m\x03" +
		"m\x03m\x03m\x05m\u0699\nm\x05m\u069B\nm\x03n\x03n\x03n\x03n\x03n\x03n" +
		"\x05n\u06A3\nn\x03n\x03n\x03n\x03n\x05n\u06A9\nn\x03n\x07n\u06AC\nn\f" +
		"n\x0En\u06AF\vn\x03o\x03o\x03o\x03o\x03o\x03o\x03o\x07o\u06B8\no\fo\x0E" +
		"o\u06BB\vo\x03o\x03o\x03o\x03o\x05o\u06C1\no\x03p\x03p\x05p\u06C5\np\x03" +
		"p\x03p\x05p\u06C9\np\x03q\x03q\x05q\u06CD\nq\x03q\x05q\u06D0\nq\x03q\x03" +
		"q\x03q\x07q\u06D5\nq\fq\x0Eq\u06D8\vq\x03q\x03q\x03q\x03q\x07q\u06DE\n" +
		"q\fq\x0Eq\u06E1\vq\x05q\u06E3\nq\x03q\x03q\x05q\u06E7\nq\x03q\x03q\x03" +
		"q\x05q\u06EC\nq\x03q\x03q\x05q\u06F0\nq\x03r\x05r\u06F3\nr\x03r\x03r\x03" +
		"r\x07r\u06F8\nr\fr\x0Er\u06FB\vr\x03s\x03s\x03t\x03t\x03t\x03t\x07t\u0703" +
		"\nt\ft\x0Et\u0706\vt\x05t\u0708\nt\x03t\x03t\x05t\u070C\nt\x03u\x03u\x05" +
		"u\u0710\nu\x03u\x03u\x03u\x03u\x03u\x03v\x03v\x03w\x03w\x05w\u071B\nw" +
		"\x03w\x05w\u071E\nw\x03w\x03w\x03w\x03w\x03w\x05w\u0725\nw\x03x\x03x\x03" +
		"x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x03x\x05x\u0733\nx\x07x\u0735" +
		"\nx\fx\x0Ex\u0738\vx\x03y\x05y\u073B\ny\x03y\x03y\x05y\u073F\ny\x03y\x03" +
		"y\x05y\u0743\ny\x03y\x03y\x05y\u0747\ny\x03y\x03y\x05y\u074B\ny\x03y\x03" +
		"y\x05y\u074F\ny\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x03y\x05y\u0759\ny" +
		"\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x07z\u0762\nz\fz\x0Ez\u0765\vz\x03" +
		"z\x03z\x05z\u0769\nz\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03" +
		"{\x03{\x05{\u0776\n{\x05{\u0778\n{\x03|\x03|\x03}\x03}\x05}\u077E\n}\x03" +
		"}\x03}\x05}\u0782\n}\x05}\u0784\n}\x03~\x03~\x03~\x03~\x07~\u078A\n~\f" +
		"~\x0E~\u078D\v~\x03~\x03~\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03" +
		"\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x07\x7F\u079B\n\x7F\f\x7F\x0E\x7F" +
		"\u079E\v\x7F\x03\x7F\x03\x7F\x03\x7F\x05\x7F\u07A3\n\x7F\x03\x7F\x03\x7F" +
		"\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x05\x7F\u07AE" +
		"\n\x7F\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81\x05\x81\u07B5\n\x81\x03" +
		"\x81\x03\x81\x05\x81\u07B9\n\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81" +
		"\x03\x81\x07\x81\u07C1\n\x81\f\x81\x0E\x81\u07C4\v\x81\x03\x82\x03\x82" +
		"\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x05\x82" +
		"\u07D0\n\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x05\x82\u07D8" +
		"\n\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x07\x82\u07DF\n\x82\f\x82" +
		"\x0E\x82\u07E2\v\x82\x03\x82\x03\x82\x03\x82\x05\x82\u07E7\n\x82\x03\x82" +
		"\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x05\x82\u07EF\n\x82\x03\x82\x03" +
		"\x82\x03\x82\x03\x82\x05\x82\u07F5\n\x82\x03\x82\x03\x82\x03\x82\x03\x82" +
		"\x05\x82\u07FB\n\x82\x03\x82\x03\x82\x03\x82\x05\x82\u0800\n\x82\x03\x82" +
		"\x03\x82\x03\x82\x05\x82\u0805\n\x82\x03\x83\x03\x83\x03\x83\x03\x83\x05" +
		"\x83\u080B\n\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83" +
		"\x03\x83\x03\x83\x07\x83\u0816\n\x83\f\x83\x0E\x83\u0819\v\x83\x03\x84" +
		"\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84" +
		"\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84" +
		"\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x05\x84\u0833\n\x84\x03\x84\x03" +
		"\x84\x03\x84\x03\x84\x05\x84\u0839\n\x84\x07\x84\u083B\n\x84\f\x84\x0E" +
		"\x84\u083E\v\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84" +
		"\x07\x84\u0847\n\x84\f\x84\x0E\x84\u084A\v\x84\x03\x84\x03\x84\x03\x84" +
		"\x03\x84\x03\x84\x03\x84\x03\x84\x05\x84\u0853\n\x84\x03\x84\x05\x84\u0856" +
		"\n\x84\x03\x84\x03\x84\x03\x84\x05\x84\u085B\n\x84\x03\x84\x03\x84\x03" +
		"\x84\x07\x84\u0860\n\x84\f\x84\x0E\x84\u0863\v\x84\x05\x84\u0865\n\x84" +
		"\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x07\x84\u086C\n\x84\f\x84\x0E" +
		"\x84\u086F\v\x84\x05\x84\u0871\n\x84\x03\x84\x03\x84\x05\x84\u0875\n\x84" +
		"\x03\x84\x05\x84\u0878\n\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03" +
		"\x84\x03\x84\x03\x84\x07\x84\u0882\n\x84\f\x84\x0E\x84\u0885\v\x84\x05" +
		"\x84\u0887\n\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84" +
		"\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x06\x84" +
		"\u0898\n\x84\r\x84\x0E\x84\u0899\x03\x84\x03\x84\x05\x84\u089E\n\x84\x03" +
		"\x84\x03\x84\x03\x84\x03\x84\x06\x84\u08A4\n\x84\r\x84\x0E\x84\u08A5\x03" +
		"\x84\x03\x84\x05\x84\u08AA\n\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84" +
		"\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84" +
		"\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x07\x84\u08C1" +
		"\n\x84\f\x84\x0E\x84\u08C4\v\x84\x05\x84\u08C6\n\x84\x03\x84\x03\x84\x03" +
		"\x84\x03\x84\x03\x84\x03\x84\x03\x84\x05\x84\u08CF\n\x84\x03\x84\x03\x84" +
		"\x03\x84\x03\x84\x05\x84\u08D5\n\x84\x03\x84\x03\x84\x03\x84\x03\x84\x05" +
		"\x84\u08DB\n\x84\x03\x84\x03\x84\x03\x84\x03\x84\x05\x84\u08E1\n\x84\x03" +
		"\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x05" +
		"\x84\u08EC\n\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84" +
		"\x05\x84\u08F5\n\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03" +
		"\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03" +
		"\x84\x03\x84\x03\x84\x07\x84\u0909\n\x84\f\x84\x0E\x84\u090C\v\x84\x05" +
		"\x84\u090E\n\x84\x03\x84\x05\x84\u0911\n\x84\x03\x84\x03";
	private static readonly _serializedATNSegment1: string =
		"\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x07\x84\u091B\n\x84" +
		"\f\x84\x0E\x84\u091E\v\x84\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85\u0924" +
		"\n\x85\x05\x85\u0926\n\x85\x03\x86\x03\x86\x03\x87\x03\x87\x03\x88\x03" +
		"\x88\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03" +
		"\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x05\x89\u093C\n\x89\x03\x8A" +
		"\x03\x8A\x03\x8B\x03\x8B\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
		"\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
		"\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x07\x8C" +
		"\u0959\n\x8C\f\x8C\x0E\x8C\u095C\v\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
		"\x03\x8C\x03\x8C\x03\x8C\x07\x8C\u0965\n\x8C\f\x8C\x0E\x8C\u0968\v\x8C" +
		"\x03\x8C\x03\x8C\x05\x8C\u096C\n\x8C\x05\x8C\u096E\n\x8C\x03\x8C\x03\x8C" +
		"\x07\x8C\u0972\n\x8C\f\x8C\x0E\x8C\u0975\v\x8C\x03\x8D\x03\x8D\x05\x8D" +
		"\u0979\n\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u097F\n\x8E\x03\x8F" +
		"\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x90\x03\x90\x03\x90\x03\x90\x03\x90" +
		"\x03\x90\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x07\x91" +
		"\u0993\n\x91\f\x91\x0E\x91\u0996\v\x91\x05\x91\u0998\n\x91\x03\x91\x03" +
		"\x91\x03\x91\x03\x91\x03\x91\x07\x91\u099F\n\x91\f\x91\x0E\x91\u09A2\v" +
		"\x91\x05\x91\u09A4\n\x91\x03\x91\x05\x91\u09A7\n\x91\x03\x91\x03\x91\x03" +
		"\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03" +
		"\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x05\x92\u09BB\n\x92" +
		"\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93" +
		"\x05\x93\u09C6\n\x93\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x05\x94\u09CD" +
		"\n\x94\x03\x95\x03\x95\x03\x95\x07\x95\u09D2\n\x95\f\x95\x0E\x95\u09D5" +
		"\v\x95\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96\x03\x96" +
		"\x03\x96\x03\x96\x03\x96\x05\x96\u09E2\n\x96\x05\x96\u09E4\n\x96\x03\x97" +
		"\x03\x97\x03\x98\x03\x98\x03\x98\x07\x98\u09EB\n\x98\f\x98\x0E\x98\u09EE" +
		"\v\x98\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x05\x99\u09F6\n" +
		"\x99\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x05\x9A\u09FD\n\x9A\x03\x9B" +
		"\x05\x9B\u0A00\n\x9B\x03\x9B\x03\x9B\x05\x9B\u0A04\n\x9B\x03\x9B\x03\x9B" +
		"\x05\x9B\u0A08\n\x9B\x03\x9B\x05\x9B\u0A0B\n\x9B\x03\x9C\x03\x9C\x03\x9C" +
		"\v\u02CD\u051D\u05A4\u05C6\u05DD\u05FC\u0619\u0663\u083C\x02\b\xDA\xEE" +
		"\u0100\u0104\u0106\u0116\x9D\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
		"\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02" +
		"\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02" +
		"\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02" +
		"\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02" +
		"\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02" +
		"\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02" +
		"\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02" +
		"\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02" +
		"\u0130\x02\u0132\x02\u0134\x02\u0136\x02\x02\"\x04\x0200\xAB\xAB\x04\x02" +
		"\xA7\xA7\xCE\xCE\x04\x02\xB1\xB1\xCC\xCC\x04\x02GGRR\x04\x02\x1D\x1D\xA0" +
		"\xA0\x04\x02\xBE\xBE\xD5\xD5\x04\x02ii\x91\x91\x04\x0211\xAC\xAC\x04\x02" +
		"TT``\x04\x02\x05\x05\x0E\x0E\x04\x02\"\"\xBE\xBE\x05\x02YY\xA7\xA7\xCE" +
		"\xCE\x07\x02\"\"00\xB3\xB3\xBE\xBE\xD2\xD2\x05\x02\"\"00\xBE\xBE\x03\x02" +
		"\xE4\xE7\x04\x02\x94\x94\xDC\xE0\x04\x02CCaa\x04\x02BB\xCA\xCA\x04\x02" +
		"\f\f99\x04\x02MMpp\x04\x02\x04\x04;;\x04\x02\x10\x10\xBB\xBB\x03\x02\xEE" +
		"\xEF\x03\x02\xF0\xF2\x03\x02\xE8\xED\x05\x02\x04\x04\b\b\xB6\xB6\x04\x02" +
		"HH\xC4\xC4\x07\x0223]^{~\xAD\xAE\xDA\xDB\x03\x02\x80\x83\x04\x02OO\x96" +
		"\x96\x06\x0200\xB3\xB3\xBE\xBE\xD2\xD20\x02\x03\x04\b\b\n\n\f\r\x10\x10" +
		"\x1D\x1D\"$))/35599CCEELMOOQQWX]]__aaggpqttz{}}\x80\x83\x87\x88\x8A\x8A" +
		"\x8D\x8D\x90\x90\x92\x96\x99\x9B\x9D\xA0\xA2\xA2\xA7\xAE\xB1\xB1\xB4\xB4" +
		"\xB6\xB7\xBA\xBB\xBF\xC0\xC3\xC3\xC5\xC6\xC9\xC9\xCD\xCE\xD5\xD6\xDA\xDA" +
		"\x02\u0B52\x02\u013E\x03\x02\x02\x02\x04\u0159\x03\x02\x02\x02\x06\u015B" +
		"\x03\x02\x02\x02\b\u015D\x03\x02\x02\x02\n\u0168\x03\x02\x02\x02\f\u016A" +
		"\x03\x02\x02\x02\x0E\u0191\x03\x02\x02\x02\x10\u01A7\x03\x02\x02\x02\x12" +
		"\u01DE\x03\x02\x02\x02\x14\u01F2\x03\x02\x02\x02\x16\u0200\x03\x02\x02" +
		"\x02\x18\u0204\x03\x02\x02\x02\x1A\u0242\x03\x02\x02\x02\x1C\u0272\x03" +
		"\x02\x02\x02\x1E\u0274\x03\x02\x02\x02 \u027C\x03\x02\x02\x02\"\u0290" +
		"\x03\x02\x02\x02$\u02A4\x03\x02\x02\x02&\u02AB\x03\x02\x02\x02(\u02B4" +
		"\x03\x02\x02\x02*\u02BC\x03\x02\x02\x02,\u02D2\x03\x02\x02\x02.\u02DC" +
		"\x03\x02\x02\x020\u02EE\x03\x02\x02\x022\u0303\x03\x02\x02\x024\u0318" +
		"\x03\x02\x02\x026\u031E\x03\x02\x02\x028\u032F\x03\x02\x02\x02:\u0338" +
		"\x03\x02\x02\x02<\u033F\x03\x02\x02\x02>\u0347\x03\x02\x02\x02@\u034E" +
		"\x03\x02\x02\x02B\u0355\x03\x02\x02\x02D\u035E\x03\x02\x02\x02F\u0369" +
		"\x03\x02\x02\x02H\u036B\x03\x02\x02\x02J\u037F\x03\x02\x02\x02L\u038C" +
		"\x03\x02\x02\x02N\u038E\x03\x02\x02\x02P\u0397\x03\x02\x02\x02R\u03A0" +
		"\x03\x02\x02\x02T\u03AA\x03\x02\x02\x02V\u03C1\x03\x02\x02\x02X\u03C7" +
		"\x03\x02\x02\x02Z\u03C9\x03\x02\x02\x02\\\u03D0\x03\x02\x02\x02^\u03DC" +
		"\x03\x02\x02\x02`\u03DE\x03\x02\x02\x02b\u03E5\x03\x02\x02\x02d\u03FA" +
		"\x03\x02\x02\x02f\u0417\x03\x02\x02\x02h\u0419\x03\x02\x02\x02j\u0422" +
		"\x03\x02\x02\x02l\u0439\x03\x02\x02\x02n\u044C\x03\x02\x02\x02p\u0461" +
		"\x03\x02\x02\x02r\u0463\x03\x02\x02\x02t\u0472\x03\x02\x02\x02v\u0485" +
		"\x03\x02\x02\x02x\u049B\x03\x02\x02\x02z\u04A0\x03\x02\x02\x02|\u04A5" +
		"\x03\x02\x02\x02~\u04AC\x03\x02\x02\x02\x80\u04BB\x03\x02\x02\x02\x82" +
		"\u04C1\x03\x02\x02\x02\x84\u04C7\x03\x02\x02\x02\x86\u04D2\x03\x02\x02" +
		"\x02\x88\u04DB\x03\x02\x02\x02\x8A\u04DE\x03\x02\x02\x02\x8C\u04E6\x03" +
		"\x02\x02\x02\x8E\u04F6\x03\x02\x02\x02\x90\u04FA\x03\x02\x02\x02\x92\u0512" +
		"\x03\x02\x02\x02\x94\u0514\x03\x02\x02\x02\x96\u0524\x03\x02\x02\x02\x98" +
		"\u0527\x03\x02\x02\x02\x9A\u052B\x03\x02\x02\x02\x9C\u052E\x03\x02\x02" +
		"\x02\x9E\u0535\x03\x02\x02\x02\xA0\u055E\x03\x02\x02\x02\xA2\u0566\x03" +
		"\x02\x02\x02\xA4\u056A\x03\x02\x02\x02\xA6\u057E\x03\x02\x02\x02\xA8\u0582" +
		"\x03\x02\x02\x02\xAA\u058B\x03\x02\x02\x02\xAC\u05A9\x03\x02\x02\x02\xAE" +
		"\u05B8\x03\x02\x02\x02\xB0\u05BE\x03\x02\x02\x02\xB2\u05C0\x03\x02\x02" +
		"\x02\xB4\u05D3\x03\x02\x02\x02\xB6\u05E7\x03\x02\x02\x02\xB8\u05F1\x03" +
		"\x02\x02\x02\xBA\u05F3\x03\x02\x02\x02\xBC\u05F5\x03\x02\x02\x02\xBE\u0604" +
		"\x03\x02\x02\x02\xC0\u0606\x03\x02\x02\x02\xC2\u060D\x03\x02\x02\x02\xC4" +
		"\u062D\x03\x02\x02\x02\xC6\u0639\x03\x02\x02\x02\xC8\u0640\x03\x02\x02" +
		"\x02\xCA\u064A\x03\x02\x02\x02\xCC\u064C\x03\x02\x02\x02\xCE\u0652\x03" +
		"\x02\x02\x02\xD0\u065D\x03\x02\x02\x02\xD2\u0668\x03\x02\x02\x02\xD4\u0670" +
		"\x03\x02\x02\x02\xD6\u0682\x03\x02\x02\x02\xD8\u0687\x03\x02\x02\x02\xDA" +
		"\u069C\x03\x02\x02\x02\xDC\u06C0\x03\x02\x02\x02\xDE\u06C2\x03\x02\x02" +
		"\x02\xE0\u06CA\x03\x02\x02\x02\xE2\u06F2\x03\x02\x02\x02\xE4\u06FC\x03" +
		"\x02\x02\x02\xE6\u070B\x03\x02\x02\x02\xE8\u070D\x03\x02\x02\x02\xEA\u0716" +
		"\x03\x02\x02\x02\xEC\u0724\x03\x02\x02\x02\xEE\u0726\x03\x02\x02\x02\xF0" +
		"\u0758\x03\x02\x02\x02\xF2\u0768\x03\x02\x02\x02\xF4\u076A\x03\x02\x02" +
		"\x02\xF6\u0779\x03\x02\x02\x02\xF8\u077B\x03\x02\x02\x02\xFA\u0785\x03" +
		"\x02\x02\x02\xFC\u07AD\x03\x02\x02\x02\xFE\u07AF\x03\x02\x02\x02\u0100" +
		"\u07B8\x03\x02\x02\x02\u0102\u0804\x03\x02\x02\x02\u0104\u080A\x03\x02" +
		"\x02\x02\u0106\u0910\x03\x02\x02\x02\u0108\u0925\x03\x02\x02\x02\u010A" +
		"\u0927\x03\x02\x02\x02\u010C\u0929\x03\x02\x02\x02\u010E\u092B\x03\x02" +
		"\x02\x02\u0110\u093B\x03\x02\x02\x02\u0112\u093D\x03\x02\x02\x02\u0114" +
		"\u093F\x03\x02\x02\x02\u0116\u096D\x03\x02\x02\x02\u0118\u0978\x03\x02" +
		"\x02\x02\u011A\u097E\x03\x02\x02\x02\u011C\u0980\x03\x02\x02\x02\u011E" +
		"\u0985\x03\x02\x02\x02\u0120\u098B\x03\x02\x02\x02\u0122\u09BA\x03\x02" +
		"\x02\x02\u0124\u09C5\x03\x02\x02\x02\u0126\u09CC\x03\x02\x02\x02\u0128" +
		"\u09CE\x03\x02\x02\x02\u012A\u09E3\x03\x02\x02\x02\u012C\u09E5\x03\x02" +
		"\x02\x02\u012E\u09E7\x03\x02\x02\x02\u0130\u09F5\x03\x02\x02\x02\u0132" +
		"\u09FC\x03\x02\x02\x02\u0134\u0A0A\x03\x02\x02\x02\u0136\u0A0C\x03\x02" +
		"\x02\x02\u0138\u013A\x05\x04\x03\x02\u0139\u013B\x07\xF5\x02\x02\u013A" +
		"\u0139\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013D\x03\x02" +
		"\x02\x02\u013C\u0138\x03\x02\x02\x02\u013D\u0140\x03\x02\x02\x02\u013E" +
		"\u013C\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0141\x03\x02" +
		"\x02\x02\u0140\u013E\x03\x02\x02\x02\u0141\u0142\x07\x02\x02\x03\u0142" +
		"\x03\x03\x02\x02\x02\u0143\u015A\x05\x06\x04\x02\u0144\u015A\x05\b\x05" +
		"\x02\u0145\u015A\x05\n\x06\x02\u0146\u015A\x05\x1C\x0F\x02\u0147\u015A" +
		"\x05B\"\x02\u0148\u015A\x05D#\x02\u0149\u015A\x05F$\x02\u014A\u015A\x05" +
		"L\'\x02\u014B\u015A\x05X-\x02\u014C\u015A\x05^0\x02\u014D\u015A\x05d3" +
		"\x02\u014E\u015A\x05f4\x02\u014F\u015A\x05l7\x02\u0150\u015A\x05n8\x02" +
		"\u0151\u015A\x05p9\x02\u0152\u015A\x05\x86D\x02\u0153\u015A\x05\x88E\x02" +
		"\u0154\u015A\x05\x8AF\x02\u0155\u015A\x05\x8CG\x02\u0156\u015A\x05\x8E" +
		"H\x02\u0157\u015A\x05\x90I\x02\u0158\u015A\x05\x92J\x02\u0159\u0143\x03" +
		"\x02\x02\x02\u0159\u0144\x03\x02\x02\x02\u0159\u0145\x03\x02\x02\x02\u0159" +
		"\u0146\x03\x02\x02\x02\u0159\u0147\x03\x02\x02\x02\u0159\u0148\x03\x02" +
		"\x02\x02\u0159\u0149\x03\x02\x02\x02\u0159\u014A\x03\x02\x02\x02\u0159" +
		"\u014B\x03\x02\x02\x02\u0159\u014C\x03\x02\x02\x02\u0159\u014D\x03\x02" +
		"\x02\x02\u0159\u014E\x03\x02\x02\x02\u0159\u014F\x03\x02\x02\x02\u0159" +
		"\u0150\x03\x02\x02\x02\u0159\u0151\x03\x02\x02\x02\u0159\u0152\x03\x02" +
		"\x02\x02\u0159\u0153\x03\x02\x02\x02\u0159\u0154\x03\x02\x02\x02\u0159" +
		"\u0155\x03\x02\x02\x02\u0159\u0156\x03\x02\x02\x02\u0159\u0157\x03\x02" +
		"\x02\x02\u0159\u0158\x03\x02\x02\x02\u015A\x05\x03\x02\x02\x02\u015B\u015C" +
		"\x05\xA6T\x02\u015C\x07\x03\x02\x02\x02\u015D\u015E\x07\xCD\x02\x02\u015E" +
		"\u015F\x05\u0132\x9A\x02\u015F\t\x03\x02\x02\x02\u0160\u0169\x05\x14\v" +
		"\x02\u0161\u0169\x05\x16\f\x02\u0162\u0169\x05\x18\r\x02\u0163\u0169\x05" +
		"\x1A\x0E\x02\u0164\u0169\x05\x12\n\x02\u0165\u0169\x05\x10\t\x02\u0166" +
		"\u0169\x05\x0E\b\x02\u0167\u0169\x05\f\x07\x02\u0168\u0160\x03\x02\x02" +
		"\x02\u0168\u0161\x03\x02\x02\x02\u0168\u0162\x03\x02\x02\x02\u0168\u0163" +
		"\x03\x02\x02\x02\u0168\u0164\x03\x02\x02\x02\u0168\u0165\x03\x02\x02\x02" +
		"\u0168\u0166\x03\x02\x02\x02\u0168\u0167\x03\x02\x02\x02\u0169\v\x03\x02" +
		"\x02\x02\u016A\u016C\x07\'\x02\x02\u016B\u016D\x07\x15\x02\x02\u016C\u016B" +
		"\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02" +
		"\u016E\u0170\x07\xBE\x02\x02\u016F\u0171\x05\x9CO\x02\u0170\u016F\x03" +
		"\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172" +
		"\u0182\x05\u012E\x98\x02\u0173\u0174\x07\xF8\x02\x02\u0174\u0179\x05\xAE" +
		"X\x02\u0175\u0176\x07\xF6\x02\x02\u0176\u0178\x05\xAEX\x02\u0177\u0175" +
		"\x03\x02\x02\x02\u0178\u017B\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02" +
		"\u0179\u017A\x03\x02\x02\x02\u017A\u017E\x03\x02\x02\x02\u017B\u0179\x03" +
		"\x02\x02\x02\u017C\u017D\x07\xF6\x02\x02\u017D\u017F\x05\xAAV\x02\u017E" +
		"\u017C\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0180\x03\x02" +
		"\x02\x02\u0180\u0181\x07\xF9\x02\x02\u0181\u0183\x03\x02\x02\x02\u0182" +
		"\u0173\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u018A\x03\x02" +
		"\x02\x02\u0184\u0185\x07\x13\x02\x02\u0185\u0188\x07\x1C\x02\x02\u0186" +
		"\u0189\x05\xD0i\x02\u0187\u0189\x05\xFA~\x02\u0188\u0186\x03\x02\x02\x02" +
		"\u0188\u0187\x03\x02\x02\x02\u0189\u018B\x03\x02\x02\x02\u018A\u0184\x03" +
		"\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C" +
		"\u018F\x05\x9EP\x02\u018D\u018E\x07\v\x02\x02\u018E\u0190\x05\xA6T\x02" +
		"\u018F\u018D\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\r\x03\x02" +
		"\x02\x02\u0191\u0193\x07\'\x02\x02\u0192\u0194\x07\x15\x02\x02\u0193\u0192" +
		"\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02" +
		"\u0195\u0197\x07\xBE\x02\x02\u0196\u0198\x05\x9CO\x02\u0197\u0196\x03" +
		"\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199" +
		"\u019A\x05\u012E\x98\x02\u019A\u019E\x07s\x02\x02\u019B\u019F\x05\u012E" +
		"\x98\x02\u019C\u019D\x07\x94\x02\x02\u019D\u019F\x05\u0108\x85\x02\u019E" +
		"\u019B\x03\x02\x02\x02\u019E\u019C\x03\x02\x02\x02\u019F\u01A3\x03\x02" +
		"\x02\x02\u01A0\u01A1\x07\x13\x02\x02\u01A1\u01A2\x07\x1C\x02\x02\u01A2" +
		"\u01A4\x05\xD0i\x02\u01A3\u01A0\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02" +
		"\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A6\x05\x9EP\x02\u01A6\x0F\x03" +
		"\x02\x02\x02\u01A7\u01A9\x07\'\x02\x02\u01A8\u01AA\x07\x15\x02\x02\u01A9" +
		"\u01A8\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AB\x03\x02" +
		"\x02\x02\u01AB\u01AD\x07\xBE\x02\x02\u01AC\u01AE\x05\x9CO\x02\u01AD\u01AC" +
		"\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02" +
		"\u01AF\u01C1\x05\u012E\x98\x02\u01B0\u01B1\x07\xF8\x02\x02\u01B1\u01B6" +
		"\x05\xB0Y\x02\u01B2\u01B3\x07\xF6\x02\x02\u01B3\u01B5\x05\xB0Y\x02\u01B4" +
		"\u01B2\x03\x02\x02\x02\u01B5\u01B8\x03\x02\x02\x02\u01B6\u01B4\x03\x02" +
		"\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01BD\x03\x02\x02\x02\u01B8" +
		"\u01B6\x03\x02\x02\x02\u01B9\u01BA\x07\xF6\x02\x02\u01BA\u01BB\x07\x97" +
		"\x02\x02\u01BB\u01BC\x07n\x02\x02\u01BC\u01BE\x05\xFA~\x02\u01BD\u01B9" +
		"\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02" +
		"\u01BF\u01C0\x07\xF9\x02\x02\u01C0\u01C2\x03\x02\x02\x02\u01C1\u01B0\x03" +
		"\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C8\x03\x02\x02\x02\u01C3" +
		"\u01C4\x07\x97\x02\x02\u01C4\u01C6\x07n\x02\x02\u01C5\u01C7\x05\xFA~\x02" +
		"\u01C6\u01C5\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C9\x03" +
		"\x02\x02\x02\u01C8\u01C3\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9" +
		"\u01CD\x03\x02\x02\x02\u01CA\u01CB\x07\x92\x02\x02\u01CB\u01CC\x07\x1C" +
		"\x02\x02\u01CC\u01CE\x05\xBE`\x02\u01CD\u01CA\x03\x02\x02\x02\u01CD\u01CE" +
		"\x03\x02\x02\x02\u01CE\u01D1\x03\x02\x02\x02\u01CF\u01D0\x07$\x02\x02" +
		"\u01D0\u01D2\x05\u0108\x85\x02\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D2" +
		"\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D4\x07\x19\x02\x02" +
		"\u01D4\u01D5\x07\v\x02\x02\u01D5\u01D8\x07o\x02\x02\u01D6\u01D7\x07\x1B" +
		"\x02\x02\u01D7\u01D9\x05\xCEh\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9" +
		"\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02\x02\u01DA\u01DB\x07\v\x02\x02" +
		"\u01DB\u01DD\x05\xA6T\x02\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DD\x03" +
		"\x02\x02\x02\u01DD\x11\x03\x02\x02\x02\u01DE\u01DF\x07\'\x02\x02\u01DF" +
		"\u01E1\x07\xD5\x02\x02\u01E0\u01E2\x05\x9CO\x02\u01E1\u01E0\x03\x02\x02" +
		"\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E5" +
		"\x05\u012E\x98\x02\u01E4\u01E6\x05\xA4S\x02\u01E5\u01E4\x03\x02\x02\x02" +
		"\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E9\x03\x02\x02\x02\u01E7\u01E8\x07" +
		"$\x02\x02\u01E8\u01EA\x05\u0108\x85\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9" +
		"\u01EA\x03\x02\x02\x02\u01EA\u01ED\x03\x02\x02\x02\u01EB\u01EC\x07\x1B" +
		"\x02\x02\u01EC\u01EE\x05\xCEh\x02\u01ED\u01EB\x03\x02\x02\x02\u01ED\u01EE" +
		"\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F0\x07\v\x02\x02" +
		"\u01F0\u01F1\x05\xA6T\x02\u01F1\x13\x03\x02\x02\x02\u01F2\u01F3\x07\'" +
		"\x02\x02\u01F3\u01F5\t\x02\x02\x02\u01F4\u01F6\x05\x9CO\x02\u01F5\u01F4" +
		"\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02" +
		"\u01F7\u01FA\x05\u012E\x98\x02\u01F8\u01F9\x07$\x02\x02\u01F9\u01FB\x05" +
		"\u0108\x85\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02" +
		"\u01FB\u01FE\x03\x02\x02\x02\u01FC\u01FD\x07\x1A\x02\x02\u01FD\u01FF\x05" +
		"\u0108\x85\x02\u01FE\u01FC\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02" +
		"\u01FF\x15\x03\x02\x02\x02\u0200\u0201\x07\'\x02\x02\u0201\u0202\x07\xA7" +
		"\x02\x02\u0202\u0203\x05\u0132\x9A\x02\u0203\x17\x03\x02\x02\x02\u0204" +
		"\u0206\x07\'\x02\x02\u0205\u0207\x07\x0E\x02\x02\u0206\u0205\x03\x02\x02" +
		"\x02\u0206\u0207\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u020A" +
		"\x07V\x02\x02\u0209\u020B\x05\x9CO\x02\u020A\u0209\x03\x02\x02\x02\u020A" +
		"\u020B\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u0219\x05\u012E" +
		"\x98\x02\u020D\u0216\x07\xF8\x02\x02\u020E\u0213\x05\u0116\x8C\x02\u020F" +
		"\u0210\x07\xF6\x02\x02\u0210\u0212\x05\u0116\x8C\x02\u0211\u020F\x03\x02" +
		"\x02\x02\u0212\u0215\x03\x02\x02\x02\u0213\u0211\x03\x02\x02\x02\u0213" +
		"\u0214\x03\x02\x02\x02\u0214\u0217\x03\x02\x02\x02\u0215\u0213\x03\x02" +
		"\x02\x02\u0216\u020E\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217" +
		"\u0218\x03\x02\x02\x02\u0218\u021A\x07\xF9\x02\x02\u0219\u020D\x03\x02" +
		"\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B" +
		"\u021C\x07\xA1\x02\x02\u021C\u021F\x05\u0116\x8C\x02\u021D\u021E\x07h" +
		"\x02\x02\u021E\u0220\x05\u0116\x8C\x02\u021F\u021D\x03\x02\x02\x02\u021F" +
		"\u0220\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u0222\x07\x1A" +
		"\x02\x02\u0222\u0226\x07\u0101\x02\x02\u0223\u0224\x07j\x02\x02\u0224" +
		"\u0225\x07\xE8\x02\x02\u0225\u0227\x07\u0101\x02\x02\u0226\u0223\x03\x02" +
		"\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228" +
		"\u0229\x07\xD0\x02\x02\u0229\u022A\x07\xE8\x02\x02\u022A\u022B\x07\u0101" +
		"\x02\x02\u022B\u022C\x07\x7F\x02\x02\u022C\u022D\x07\xE8\x02\x02\u022D" +
		"\u0231\x07\u0101\x02\x02\u022E\u022F\x07\x14\x02\x02\u022F\u0230\x07\xE8" +
		"\x02\x02\u0230\u0232\x07\u0101\x02\x02\u0231\u022E\x03\x02\x02\x02\u0231" +
		"\u0232\x03\x02\x02\x02\u0232\u0236\x03\x02\x02\x02\u0233\u0234\x07\x16" +
		"\x02\x02\u0234\u0235\x07\xE8\x02\x02\u0235\u0237\x07\u0101\x02\x02\u0236" +
		"\u0233\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u023B\x03\x02" +
		"\x02\x02\u0238\u0239\x07\xBD\x02\x02\u0239\u023A\x07\xE8\x02\x02\u023A" +
		"\u023C\x07\u0101\x02\x02\u023B\u0238\x03\x02\x02\x02\u023B\u023C\x03\x02" +
		"\x02\x02\u023C\u0240\x03\x02\x02\x02\u023D\u023E\x07N\x02\x02\u023E\u023F" +
		"\x07\xE8\x02\x02\u023F\u0241\x07\u0101\x02\x02\u0240\u023D\x03\x02\x02" +
		"\x02\u0240\u0241\x03\x02\x02\x02\u0241\x19\x03\x02\x02\x02\u0242\u0243" +
		"\x07\'\x02\x02\u0243\u0245\x07V\x02\x02\u0244\u0246\x05\x9CO\x02\u0245" +
		"\u0244\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0247\x03\x02" +
		"\x02\x02\u0247\u0254\x05\u012E\x98\x02\u0248\u0251\x07\xF8\x02\x02\u0249" +
		"\u024E\x05\u0116\x8C\x02\u024A\u024B\x07\xF6\x02\x02\u024B\u024D\x05\u0116" +
		"\x8C\x02\u024C\u024A\x03\x02\x02\x02\u024D\u0250\x03\x02\x02\x02\u024E" +
		"\u024C\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0252\x03\x02" +
		"\x02\x02\u0250\u024E\x03\x02\x02\x02\u0251\u0249\x03\x02\x02\x02\u0251" +
		"\u0252\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0255\x07\xF9" +
		"\x02\x02\u0254\u0248\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02\u0255" +
		"\u0258\x03\x02\x02\x02\u0256\u0257\x07\xA1\x02\x02\u0257\u0259\x05\u0116" +
		"\x8C\x02\u0258\u0256\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259" +
		"\u025A\x03\x02\x02\x02\u025A\u025B\x07\x1A\x02\x02\u025B\u025C\x07\u0101" +
		"\x02\x02\u025C\u025D\x07\xBC\x02\x02\u025D\u025E\x07\xE8\x02\x02\u025E" +
		"\u025F\x05\u0108\x85\x02\u025F\x1B\x03\x02\x02\x02\u0260\u0273\x05\x1E" +
		"\x10\x02\u0261\u0273\x05@!\x02\u0262\u0273\x05> \x02\u0263\u0273\x05<" +
		"\x1F\x02\u0264\u0273\x058\x1D\x02\u0265\u0273\x05:\x1E\x02\u0266\u0273" +
		"\x056\x1C\x02\u0267\u0273\x052\x1A\x02\u0268\u0273\x054\x1B\x02\u0269" +
		"\u0273\x050\x19\x02\u026A\u0273\x05.\x18\x02\u026B\u0273\x05,\x17\x02" +
		"\u026C\u0273\x05*\x16\x02\u026D\u0273\x05$\x13\x02\u026E\u0273\x05 \x11" +
		"\x02\u026F\u0273\x05\"\x12\x02\u0270\u0273\x05&\x14\x02\u0271\u0273\x05" +
		"(\x15\x02\u0272\u0260\x03\x02\x02\x02\u0272\u0261\x03\x02\x02\x02\u0272" +
		"\u0262\x03\x02\x02\x02\u0272\u0263\x03\x02\x02\x02\u0272\u0264\x03\x02" +
		"\x02\x02\u0272\u0265\x03\x02\x02\x02\u0272\u0266\x03\x02\x02\x02\u0272" +
		"\u0267\x03\x02\x02\x02\u0272\u0268\x03\x02\x02\x02\u0272\u0269\x03\x02" +
		"\x02\x02\u0272\u026A\x03\x02\x02\x02\u0272\u026B\x03\x02\x02\x02\u0272" +
		"\u026C\x03\x02\x02\x02\u0272\u026D\x03\x02\x02\x02\u0272\u026E\x03\x02" +
		"\x02\x02\u0272\u026F\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0272" +
		"\u0271\x03\x02\x02\x02\u0273\x1D\x03\x02\x02\x02\u0274\u0275\x07\x06\x02" +
		"\x02\u0275\u0276\x070\x02\x02\u0276\u0277\x05\u012E\x98\x02\u0277\u0278" +
		"\x07\xB1\x02\x02\u0278\u0279\x07\x8F\x02\x02\u0279\u027A\t\x03\x02\x02" +
		"\u027A\u027B\x05\u0132\x9A\x02\u027B\x1F\x03\x02\x02\x02\u027C\u027D\x07" +
		"\x06\x02\x02\u027D\u027E\x07\xBE\x02\x02\u027E\u027F\x05\u012E\x98\x02" +
		"\u027F\u0280\x07\xB1\x02\x02\u0280\u0281\x07\"\x02\x02\u0281\u0282\x07" +
		"\xB7\x02\x02\u0282\u0283\x05\u0132\x9A\x02\u0283\u0284\x07\xF8\x02\x02" +
		"\u0284\u0285\x05\xBA^\x02\u0285\u0286\x07\xE8\x02\x02\u0286\u028C\x05" +
		"\u0108\x85\x02\u0287\u0288\x07\xF6\x02\x02\u0288\u0289\x05\xBA^\x02\u0289" +
		"\u028A\x07\xE8\x02\x02\u028A\u028B\x05\u0108\x85\x02\u028B\u028D\x03\x02" +
		"\x02\x02\u028C\u0287\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D" +
		"\u028E\x03\x02\x02\x02\u028E\u028F\x07\xF9\x02\x02\u028F!\x03\x02\x02" +
		"\x02\u0290\u0291\x07\x06\x02\x02\u0291\u0292\x07\xBE\x02\x02\u0292\u0295" +
		"\x05\u012E\x98\x02\u0293\u0294\x07\x92\x02\x02\u0294\u0296\x05\xFE\x80" +
		"\x02\u0295\u0293\x03\x02\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296\u0297" +
		"\x03\x02\x02\x02\u0297\u02A2\x07\xB1\x02\x02\u0298\u0299\x07 \x02\x02" +
		"\u0299\u029A\x07`\x02\x02\u029A\u029F\x05\u0108\x85\x02\u029B\u029C\x07" +
		"\xD9\x02\x02\u029C\u029D\x07\x98\x02\x02\u029D\u029E\x07\xE8\x02\x02\u029E" +
		"\u02A0\x05\u0134\x9B\x02\u029F\u029B\x03\x02\x02\x02\u029F\u02A0\x03\x02" +
		"\x02\x02\u02A0\u02A3\x03\x02\x02\x02\u02A1\u02A3\x07\xC7\x02\x02\u02A2" +
		"\u0298\x03\x02\x02\x02\u02A2\u02A1\x03\x02\x02\x02\u02A3#\x03\x02\x02" +
		"\x02\u02A4\u02A5\x07\x06\x02\x02\u02A5\u02A6\x07\xBE\x02\x02\u02A6\u02A7" +
		"\x05\u012E\x98\x02\u02A7\u02A8\x07!\x02\x02\u02A8\u02A9\x07\"\x02\x02" +
		"\u02A9\u02AA\x05\xB4[\x02\u02AA%\x03\x02\x02\x02\u02AB\u02AC\x07\x06\x02" +
		"\x02\u02AC\u02AD\x07\xBE\x02\x02\u02AD\u02AE\x05\u012E\x98\x02\u02AE\u02B0" +
		"\x07<\x02\x02\u02AF\u02B1\x07\"\x02\x02\u02B0\u02AF\x03\x02\x02\x02\u02B0" +
		"\u02B1\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2\u02B3\x05\u0132" +
		"\x9A\x02\u02B3\'\x03\x02\x02\x02\u02B4\u02B5\x07\x06\x02\x02\u02B5\u02B6" +
		"\x07\xBE\x02\x02\u02B6\u02B7\x05\u012E\x98\x02\u02B7\u02B8\x07\xB1\x02" +
		"\x02\u02B8\u02B9\x07\x8F\x02\x02\u02B9\u02BA\t\x03\x02\x02\u02BA";
	private static readonly _serializedATNSegment2: string =
		"\u02BB\x05\u0132\x9A\x02\u02BB)\x03\x02\x02\x02\u02BC\u02BD\x07\x06\x02" +
		"\x02\u02BD\u02BE\x07\xBE\x02\x02\u02BE\u02C4\x05\u012E\x98\x02\u02BF\u02C5" +
		"\x07\x9F\x02\x02\u02C0\u02C2\x07\x03\x02\x02\u02C1\u02C3\x05\x9CO\x02" +
		"\u02C2\u02C1\x03\x02\x02\x02\u02C2\u02C3\x03\x02\x02\x02\u02C3\u02C5\x03" +
		"\x02\x02\x02\u02C4\u02BF\x03\x02\x02\x02\u02C4\u02C0\x03\x02\x02\x02\u02C5" +
		"\u02C6\x03\x02\x02\x02\u02C6\u02C7\x07#\x02\x02\u02C7\u02C8\x07\xF8\x02" +
		"\x02\u02C8\u02CD\x05\xB4[\x02\u02C9\u02CA\x07\xF6\x02\x02\u02CA\u02CC" +
		"\x05\xB4[\x02\u02CB\u02C9\x03\x02\x02\x02\u02CC\u02CF\x03\x02\x02\x02" +
		"\u02CD\u02CE\x03\x02\x02\x02\u02CD\u02CB\x03\x02\x02\x02\u02CE\u02D0\x03" +
		"\x02\x02\x02\u02CF\u02CD\x03\x02\x02\x02\u02D0\u02D1\x07\xF9\x02\x02\u02D1" +
		"+\x03\x02\x02\x02\u02D2\u02D3\x07\x06\x02\x02\u02D3\u02D4\x07\xBE\x02" +
		"\x02\u02D4\u02D5\x05\u012E\x98\x02\u02D5\u02D6\x07\x03\x02\x02\u02D6\u02D8" +
		"\x07\"\x02\x02\u02D7\u02D9\x05\x9CO\x02\u02D8\u02D7\x03\x02\x02\x02\u02D8" +
		"\u02D9\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02DB\x05\xB4" +
		"[\x02\u02DB-\x03\x02\x02\x02\u02DC\u02DD\x07\x06\x02\x02\u02DD\u02DE\x07" +
		"\xBE\x02\x02\u02DE\u02DF\x05\u012E\x98\x02\u02DF\u02E1\x07\x06\x02\x02" +
		"\u02E0\u02E2\x07\"\x02\x02\u02E1\u02E0\x03\x02\x02\x02\u02E1\u02E2\x03" +
		"\x02\x02\x02\u02E2\u02E3\x03\x02\x02\x02\u02E3\u02EC\x05\u0132\x9A\x02" +
		"\u02E4\u02E8\x07\xB1\x02\x02\u02E5\u02E9\x05\xB8]\x02\u02E6\u02E7\x07" +
		"$\x02\x02\u02E7\u02E9\x05\u0108\x85\x02\u02E8\u02E5\x03\x02\x02\x02\u02E8" +
		"\u02E6\x03\x02\x02\x02\u02E9\u02ED\x03\x02\x02\x02\u02EA\u02EB\x07<\x02" +
		"\x02\u02EB\u02ED\x075\x02\x02\u02EC\u02E4\x03\x02\x02\x02\u02EC\u02EA" +
		"\x03\x02\x02\x02\u02ED/\x03\x02\x02\x02\u02EE\u02EF\x07\x06\x02\x02\u02EF" +
		"\u02F0\x07\xBE\x02\x02\u02F0\u02F1\x05\u012E\x98\x02\u02F1\u02F3\x07\x03" +
		"\x02\x02\u02F2\u02F4\x05\x9CO\x02\u02F3\u02F2\x03\x02\x02\x02\u02F3\u02F4" +
		"\x03\x02\x02\x02\u02F4\u0301\x03\x02\x02\x02\u02F5\u02F6\x07\x92\x02\x02" +
		"\u02F6\u02F9\x05\xFE\x80\x02\u02F7\u02F8\x07\x1A\x02\x02\u02F8\u02FA\x05" +
		"\u0108\x85\x02\u02F9\u02F7\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02" +
		"\u02FA\u02FC\x03\x02\x02\x02\u02FB\u02FD\x05\xC6d\x02\u02FC\u02FB\x03" +
		"\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD\u0302\x03\x02\x02\x02\u02FE" +
		"\u02FF\x07\x9B\x02\x02\u02FF\u0300\x07\x92\x02\x02\u0300\u0302\x05\xC4" +
		"c\x02\u0301\u02F5\x03\x02\x02\x02\u0301\u02FE\x03\x02\x02\x02\u03021\x03" +
		"\x02\x02\x02\u0303\u0304\x07\x06\x02\x02\u0304\u0305\x07\xBE\x02\x02\u0305" +
		"\u0308\x05\u012E\x98\x02\u0306\u0307\x07\x92\x02\x02\u0307\u0309\x05\xFE" +
		"\x80\x02\u0308\u0306\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309" +
		"\u030A\x03\x02\x02\x02\u030A\u0316\x07\xB1\x02\x02\u030B\u030C\x07J\x02" +
		"\x02\u030C\u0317\x05\xBC_\x02\u030D\u030E\x07\xA9\x02\x02\u030E\u030F" +
		"\x07Q\x02\x02\u030F\u0317\x05\xD4k\x02\u0310\u0311\x07\x1A\x02\x02\u0311" +
		"\u0317\x05\u0108\x85\x02\u0312\u0313\x07\x1B\x02\x02\u0313\u0317\x05\xCE" +
		"h\x02\u0314\u0315\x07\xB0\x02\x02\u0315\u0317\x05\xCEh\x02\u0316\u030B" +
		"\x03\x02\x02\x02\u0316\u030D\x03\x02\x02\x02\u0316\u0310\x03\x02\x02\x02" +
		"\u0316\u0312\x03\x02\x02\x02\u0316\u0314\x03\x02\x02\x02\u03173\x03\x02" +
		"\x02\x02\u0318\u0319\x07\x06\x02\x02\u0319\u031A\x07\xBE\x02\x02\u031A" +
		"\u031B\x05\u012E\x98\x02\u031B\u031C\x07\x9C\x02\x02\u031C\u031D\x07\x93" +
		"\x02\x02\u031D5\x03\x02\x02\x02\u031E\u031F\x07\x06\x02\x02\u031F\u0320" +
		"\x07\xBE\x02\x02\u0320\u0321\x05\u012E\x98\x02\u0321\u0323\x07<\x02\x02" +
		"\u0322\u0324\x05\x9AN\x02\u0323\u0322\x03\x02\x02\x02\u0323\u0324\x03" +
		"\x02\x02\x02\u0324\u032D\x03\x02\x02\x02\u0325\u0326\x07\x92\x02\x02\u0326" +
		"\u0328\x05\xFE\x80\x02\u0327\u0329\x07\x18\x02\x02\u0328\u0327\x03\x02" +
		"\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032E\x03\x02\x02\x02\u032A" +
		"\u032B\x07\x9B\x02\x02\u032B\u032C\x07\x92\x02\x02\u032C\u032E\x05\xC4" +
		"c\x02\u032D\u0325\x03\x02\x02\x02\u032D\u032A\x03\x02\x02\x02\u032E7\x03" +
		"\x02\x02\x02\u032F\u0330\x07\x06\x02\x02\u0330\u0331\x07\xD5\x02\x02\u0331" +
		"\u0333\x05\u012E\x98\x02\u0332\u0334\x05\xA4S\x02\u0333\u0332\x03\x02" +
		"\x02\x02\u0333\u0334\x03\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335" +
		"\u0336\x07\v\x02\x02\u0336\u0337\x05\xA6T\x02\u03379\x03\x02\x02\x02\u0338" +
		"\u0339\x07\x06\x02\x02\u0339\u033A\x07\xD5\x02\x02\u033A\u033B\x05\u012E" +
		"\x98\x02\u033B\u033C\x07\x9D\x02\x02\u033C\u033D\x07\xC3\x02\x02\u033D" +
		"\u033E\x05\u012E\x98\x02\u033E;\x03\x02\x02\x02\u033F\u0340\x07\x06\x02" +
		"\x02\u0340\u0341\x07\xD5\x02\x02\u0341\u0342\x05\u012E\x98\x02\u0342\u0343" +
		"\x07\xB1\x02\x02\u0343\u0344\x07\x8F\x02\x02\u0344\u0345\t\x03\x02\x02" +
		"\u0345\u0346\x05\u012E\x98\x02\u0346=\x03\x02\x02\x02\u0347\u0348\x07" +
		"\x06\x02\x02\u0348\u0349\x07\xBE\x02\x02\u0349\u034A\x05\u012E\x98\x02" +
		"\u034A\u034B\x07\x9D\x02\x02\u034B\u034C\x07\xC3\x02\x02\u034C\u034D\x05" +
		"\u012E\x98\x02\u034D?\x03\x02\x02\x02\u034E\u034F\x07\x06\x02\x02\u034F" +
		"\u0350\x07\xD5\x02\x02\u0350\u0351\x05\u012E\x98\x02\u0351\u0352\t\x04" +
		"\x02\x02\u0352\u0353\x07\x1B\x02\x02\u0353\u0354\x05\xCEh\x02\u0354A\x03" +
		"\x02\x02\x02\u0355\u0357\x07\xC6\x02\x02\u0356\u0358\x07\xBE\x02\x02\u0357" +
		"\u0356\x03\x02\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358\u035A\x03\x02" +
		"\x02\x02\u0359\u035B\x05\x9AN\x02\u035A\u0359\x03\x02\x02\x02\u035A\u035B" +
		"\x03\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C\u035D\x05\u012E\x98" +
		"\x02\u035DC\x03\x02\x02\x02\u035E\u0360\x07:\x02\x02\u035F\u0361\x070" +
		"\x02\x02\u0360\u035F\x03\x02\x02\x02\u0360\u0361\x03\x02\x02\x02\u0361" +
		"\u0363\x03\x02\x02\x02\u0362\u0364\t\x05\x02\x02\u0363\u0362\x03\x02\x02" +
		"\x02\u0363\u0364\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365\u0366" +
		"\x05\u012E\x98\x02\u0366E\x03\x02\x02\x02\u0367\u036A\x05H%\x02\u0368" +
		"\u036A\x05J&\x02\u0369\u0367\x03\x02\x02\x02\u0369\u0368\x03\x02\x02\x02" +
		"\u036AG\x03\x02\x02\x02\u036B\u036C\x07&\x02\x02\u036C\u036D\x07\xB7\x02" +
		"\x02\u036D\u036F\x05\u012E\x98\x02\u036E\u0370\x05\xFA~\x02\u036F\u036E" +
		"\x03\x02\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370\u037D\x03\x02\x02\x02" +
		"\u0371\u0372\x07\xC0\x02\x02\u0372\u0373\x07\xBB\x02\x02\u0373\u0374\x07" +
		"\xF8\x02\x02\u0374\u0375\x05\u0134\x9B\x02\u0375\u037B\x07\xF9\x02\x02" +
		"\u0376\u0377\x07\x9E\x02\x02\u0377\u0378\x07\xF8\x02\x02\u0378\u0379\x05" +
		"\u0134\x9B\x02\u0379\u037A\x07\xF9\x02\x02\u037A\u037C\x03\x02\x02\x02" +
		"\u037B\u0376\x03\x02\x02\x02\u037B\u037C\x03\x02\x02\x02\u037C\u037E\x03" +
		"\x02\x02\x02\u037D\u0371\x03\x02\x02\x02\u037D\u037E\x03\x02\x02\x02\u037E" +
		"I\x03\x02\x02\x02\u037F\u0380\x07&\x02\x02\u0380\u0381\x07b\x02\x02\u0381" +
		"\u0382\x07\xB7\x02\x02\u0382\u0385\x05\u012E\x98\x02\u0383\u0384\x07\x92" +
		"\x02\x02\u0384\u0386\x05\xFE\x80\x02\u0385\u0383\x03\x02\x02\x02\u0385" +
		"\u0386\x03\x02\x02\x02\u0386K\x03\x02\x02\x02\u0387\u038D\x05V,\x02\u0388" +
		"\u038D\x05T+\x02\u0389\u038D\x05R*\x02\u038A\u038D\x05P)\x02\u038B\u038D" +
		"\x05N(\x02\u038C\u0387\x03\x02\x02\x02\u038C\u0388\x03\x02\x02\x02\u038C" +
		"\u0389\x03\x02\x02\x02\u038C\u038A\x03\x02\x02\x02\u038C\u038B\x03\x02" +
		"\x02\x02\u038DM\x03\x02\x02\x02\u038E\u038F\x07<\x02\x02\u038F\u0391\t" +
		"\x02\x02\x02\u0390\u0392\x05\x9AN\x02\u0391\u0390\x03\x02\x02\x02\u0391" +
		"\u0392\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393\u0395\x05\u012E" +
		"\x98\x02\u0394\u0396\t\x06\x02\x02\u0395\u0394\x03\x02\x02\x02\u0395\u0396" +
		"\x03\x02\x02\x02\u0396O\x03\x02\x02\x02\u0397\u0398\x07<\x02\x02\u0398" +
		"\u039A\t\x07\x02\x02\u0399\u039B\x05\x9AN\x02\u039A\u0399\x03\x02\x02" +
		"\x02\u039A\u039B\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\u039E" +
		"\x05\u012E\x98\x02\u039D\u039F\x07\x18\x02\x02\u039E\u039D\x03\x02\x02" +
		"\x02\u039E\u039F\x03\x02\x02\x02\u039FQ\x03\x02\x02\x02\u03A0\u03A2\x07" +
		"<\x02\x02\u03A1\u03A3\x07b\x02\x02\u03A2\u03A1\x03\x02\x02\x02\u03A2\u03A3" +
		"\x03\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03A5\x07\xB7\x02\x02" +
		"\u03A5\u03A8\x05\u012E\x98\x02\u03A6\u03A7\x07\x92\x02\x02\u03A7\u03A9" +
		"\x05\xFE\x80\x02\u03A8\u03A6\x03\x02\x02\x02\u03A8\u03A9\x03\x02\x02\x02" +
		"\u03A9S\x03\x02\x02\x02\u03AA\u03AC\x07<\x02\x02\u03AB\u03AD\x07\x0E\x02" +
		"\x02\u03AC\u03AB\x03\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02\u03AD\u03AE" +
		"\x03\x02\x02\x02\u03AE\u03B0\x07V\x02\x02\u03AF\u03B1\x05\x9AN\x02\u03B0" +
		"\u03AF\x03\x02\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1\u03B2\x03\x02" +
		"\x02\x02\u03B2\u03BF\x05\u012E\x98\x02\u03B3\u03BC\x07\xF8\x02\x02\u03B4" +
		"\u03B9\x05\u0116\x8C\x02\u03B5\u03B6\x07\xF6\x02\x02\u03B6\u03B8\x05\u0116" +
		"\x8C\x02\u03B7\u03B5\x03\x02\x02\x02\u03B8\u03BB\x03\x02\x02\x02\u03B9" +
		"\u03B7\x03\x02\x02\x02\u03B9\u03BA\x03\x02\x02\x02\u03BA\u03BD\x03\x02" +
		"\x02\x02\u03BB\u03B9\x03\x02\x02\x02\u03BC\u03B4\x03\x02\x02\x02\u03BC" +
		"\u03BD\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03C0\x07\xF9" +
		"\x02\x02\u03BF\u03B3\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0" +
		"U\x03\x02\x02\x02\u03C1\u03C2\x07<\x02\x02\u03C2\u03C3\x07\xA7\x02\x02" +
		"\u03C3\u03C4\x05\u0132\x9A\x02\u03C4W\x03\x02\x02\x02\u03C5\u03C8\x05" +
		"Z.\x02\u03C6\u03C8\x05\\/\x02\u03C7\u03C5\x03\x02\x02\x02\u03C7\u03C6" +
		"\x03\x02\x02\x02\u03C8Y\x03\x02\x02\x02\u03C9\u03CA\x07X\x02\x02\u03CA" +
		"\u03CB\x07\xA7\x02\x02\u03CB\u03CC\x05\u0132\x9A\x02\u03CC\u03CD\x07\xC3" +
		"\x02\x02\u03CD\u03CE\x07Y\x02\x02\u03CE\u03CF\x05\u0132\x9A\x02\u03CF" +
		"[\x03\x02\x02\x02\u03D0\u03D1\x07X\x02\x02\u03D1\u03D2\x05\u012A\x96\x02" +
		"\u03D2\u03D3\x07\x89\x02\x02\u03D3\u03D5\x05\u012C\x97\x02\u03D4\u03D6" +
		"\x05\u012E\x98\x02\u03D5\u03D4\x03\x02\x02\x02\u03D5\u03D6\x03\x02\x02" +
		"\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7\u03D8\x07\xC3\x02\x02\u03D8\u03D9" +
		"\x05\u0130\x99\x02\u03D9]\x03\x02\x02\x02\u03DA\u03DD\x05`1\x02\u03DB" +
		"\u03DD\x05b2\x02\u03DC\u03DA\x03\x02\x02\x02\u03DC\u03DB\x03\x02\x02\x02" +
		"\u03DD_\x03\x02\x02\x02\u03DE\u03DF\x07\xA2\x02\x02\u03DF\u03E0\x07\xA7" +
		"\x02\x02\u03E0\u03E1\x05\u0132\x9A\x02\u03E1\u03E2\x07T\x02\x02\u03E2" +
		"\u03E3\x07Y\x02\x02\u03E3\u03E4\x05\u0132\x9A\x02\u03E4a\x03\x02\x02\x02" +
		"\u03E5\u03E9\x07\xA2\x02\x02\u03E6\u03E7\x07X\x02\x02\u03E7\u03E8\x07" +
		"\x8A\x02\x02\u03E8\u03EA\x07P\x02\x02\u03E9\u03E6\x03\x02\x02\x02\u03E9" +
		"\u03EA\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02\u03EB\u03EC\x05\u012A" +
		"\x96\x02\u03EC\u03ED\x07\x89\x02\x02\u03ED\u03EF\x05\u012C\x97\x02\u03EE" +
		"\u03F0\x05\u012E\x98\x02\u03EF\u03EE\x03\x02\x02\x02\u03EF\u03F0\x03\x02" +
		"\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\u03F7\x07T\x02\x02\u03F2\u03F8" +
		"\x05\u0130\x99\x02\u03F3\u03F5\x07\xA7\x02\x02\u03F4\u03F3\x03\x02\x02" +
		"\x02\u03F4\u03F5\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6\u03F8" +
		"\x05\u0132\x9A\x02\u03F7\u03F2\x03\x02\x02\x02\u03F7\u03F4\x03\x02\x02" +
		"\x02\u03F8c\x03\x02\x02\x02\u03F9\u03FB\x05\xA8U\x02\u03FA\u03F9\x03\x02" +
		"\x02\x02\u03FA\u03FB\x03\x02\x02\x02\u03FB\u03FC\x03\x02\x02\x02\u03FC" +
		"\u03FD\x07e\x02\x02\u03FD\u03FF\t\b\x02\x02\u03FE\u0400\x07\xBE\x02\x02" +
		"\u03FF\u03FE\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400\u0401\x03" +
		"\x02\x02\x02\u0401\u0403\x05\u012E\x98\x02\u0402\u0404\x05\xFA~\x02\u0403" +
		"\u0402\x03\x02\x02\x02\u0403\u0404\x03\x02\x02\x02\u0404\u0411\x03\x02" +
		"\x02\x02\u0405\u0406\x07\x92\x02\x02\u0406\u0407\x07\xF8\x02\x02\u0407" +
		"\u040C\x05\xFE\x80\x02\u0408\u0409\x07\xF6\x02\x02\u0409\u040B\x05\xFE" +
		"\x80\x02\u040A\u0408\x03\x02\x02\x02\u040B\u040E\x03\x02\x02\x02\u040C" +
		"\u040A\x03\x02\x02\x02\u040C\u040D\x03\x02\x02\x02\u040D\u040F\x03\x02" +
		"\x02\x02\u040E\u040C\x03\x02\x02\x02\u040F\u0410\x07\xF9\x02\x02\u0410" +
		"\u0412\x03\x02\x02\x02\u0411\u0405\x03\x02\x02\x02\u0411\u0412\x03\x02" +
		"\x02\x02\u0412\u0413\x03\x02\x02\x02\u0413\u0414\x05\xA6T\x02\u0414e\x03" +
		"\x02\x02\x02\u0415\u0418\x05h5\x02\u0416\u0418\x05j6\x02\u0417\u0415\x03" +
		"\x02\x02\x02\u0417\u0416\x03\x02\x02\x02\u0418g\x03\x02\x02\x02\u0419" +
		"\u041B\x074\x02\x02\u041A\u041C\x07T\x02\x02\u041B\u041A\x03\x02\x02\x02" +
		"\u041B\u041C\x03\x02\x02\x02\u041C\u041D\x03\x02\x02\x02\u041D\u0420\x05" +
		"\u012E\x98\x02\u041E\u041F\x07\xD8\x02\x02\u041F\u0421\x05\u0100\x81\x02" +
		"\u0420\u041E\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421i\x03\x02" +
		"\x02\x02\u0422\u0423\x074\x02\x02\u0423\u0428\x05\u012E\x98\x02\u0424" +
		"\u0426\x07\v\x02\x02\u0425\u0424\x03\x02\x02\x02\u0425\u0426\x03\x02\x02" +
		"\x02\u0426\u0427\x03\x02\x02\x02\u0427\u0429\x05\u0132\x9A\x02\u0428\u0425" +
		"\x03\x02\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429\u042A\x03\x02\x02\x02" +
		"\u042A\u0433\x07T\x02\x02\u042B\u0430\x05\xEEx\x02\u042C\u042D\x07\xF6" +
		"\x02\x02\u042D\u042F\x05\xEEx\x02\u042E\u042C\x03\x02\x02\x02\u042F\u0432" +
		"\x03\x02\x02\x02\u0430\u042E\x03\x02\x02\x02\u0430\u0431\x03\x02\x02\x02" +
		"\u0431\u0434\x03\x02\x02\x02\u0432\u0430\x03\x02\x02\x02\u0433\u042B\x03" +
		"\x02\x02\x02\u0433\u0434\x03\x02\x02\x02\u0434\u0437\x03\x02\x02\x02\u0435" +
		"\u0436\x07\xD8\x02\x02\u0436\u0438\x05\u0100\x81\x02\u0437\u0435\x03\x02" +
		"\x02\x02\u0437\u0438\x03\x02\x02\x02\u0438k\x03\x02\x02\x02\u0439\u043A" +
		"\x078\x02\x02\u043A\u043B\x05\u012E\x98\x02\u043B\u043C\x07\xB1\x02\x02" +
		"\u043C\u0446\x05\xA0Q\x02\u043D\u043E\x07T\x02\x02\u043E\u0443\x05\xEE" +
		"x\x02\u043F\u0440\x07\xF6\x02\x02\u0440\u0442\x05\xEEx\x02\u0441\u043F" +
		"\x03\x02\x02\x02\u0442\u0445\x03\x02\x02\x02\u0443\u0441\x03\x02\x02\x02" +
		"\u0443\u0444\x03\x02\x02\x02\u0444\u0447\x03\x02\x02\x02\u0445\u0443\x03" +
		"\x02\x02\x02\u0446\u043D\x03\x02\x02\x02\u0446\u0447\x03\x02\x02\x02\u0447" +
		"\u044A\x03\x02\x02\x02\u0448\u0449\x07\xD8\x02\x02\u0449\u044B\x05\u0100" +
		"\x81\x02\u044A\u0448\x03\x02\x02\x02\u044A\u044B\x03\x02\x02\x02\u044B" +
		"m\x03\x02\x02\x02\u044C\u044D\x07\xD1\x02\x02\u044D\u044F\x07i\x02\x02" +
		"\u044E\u0450\x07\xBE\x02\x02\u044F\u044E\x03\x02\x02\x02\u044F\u0450\x03" +
		"\x02\x02\x02\u0450\u0451\x03\x02\x02\x02\u0451\u0453\x05\u012E\x98\x02" +
		"\u0452\u0454\x05\xFA~\x02\u0453\u0452\x03\x02\x02\x02\u0453\u0454\x03" +
		"\x02\x02\x02\u0454\u0455\x03\x02\x02\x02\u0455\u0456\x05\xA6T\x02\u0456" +
		"o\x03\x02\x02\x02\u0457\u0462\x05\x80A\x02\u0458\u0462\x05\x82B\x02\u0459" +
		"\u0462\x05\x84C\x02\u045A\u0462\x05~@\x02\u045B\u0462\x05|?\x02\u045C" +
		"\u0462\x05z>\x02\u045D\u0462\x05x=\x02\u045E\u0462\x05v<\x02\u045F\u0462" +
		"\x05t;\x02\u0460\u0462\x05r:\x02\u0461\u0457\x03\x02\x02\x02\u0461\u0458" +
		"\x03\x02\x02\x02\u0461\u0459\x03\x02\x02\x02\u0461\u045A\x03\x02\x02\x02" +
		"\u0461\u045B\x03\x02\x02\x02\u0461\u045C\x03\x02\x02\x02\u0461\u045D\x03" +
		"\x02\x02\x02\u0461\u045E\x03\x02\x02\x02\u0461\u045F\x03\x02\x02\x02\u0461" +
		"\u0460\x03\x02\x02\x02\u0462q\x03\x02\x02\x02\u0463\u0464\x07\xB4\x02" +
		"\x02\u0464\u0470\t\t\x02\x02\u0465\u0467\x07s\x02\x02\u0466\u0465\x03" +
		"\x02\x02\x02\u0466\u0467\x03\x02\x02\x02\u0467\u0468\x03\x02\x02\x02\u0468" +
		"\u046D\x05\u0108\x85\x02\u0469\u046A\x07\xFE\x02\x02\u046A\u046C\x05\u0108" +
		"\x85\x02\u046B\u0469\x03\x02\x02\x02\u046C\u046F\x03\x02\x02\x02\u046D" +
		"\u046B\x03\x02\x02\x02\u046D\u046E\x03\x02\x02\x02\u046E\u0471\x03\x02" +
		"\x02\x02\u046F\u046D\x03\x02\x02\x02\u0470\u0466\x03\x02\x02\x02\u0470" +
		"\u0471\x03\x02\x02\x02\u0471s\x03\x02\x02\x02\u0472\u0473\x07\xB4\x02" +
		"\x02\u0473\u0476\x07\xBF\x02\x02\u0474\u0475\t\n\x02\x02\u0475\u0477\x05" +
		"\u012E\x98\x02\u0476\u0474\x03\x02\x02\x02\u0476\u0477\x03\x02\x02\x02" +
		"\u0477\u0483\x03\x02\x02\x02\u0478\u047A\x07s\x02\x02\u0479\u0478\x03" +
		"\x02\x02\x02\u0479\u047A\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B" +
		"\u0480\x05\u0108\x85\x02\u047C\u047D\x07\xFE\x02\x02\u047D\u047F\x05\u0108" +
		"\x85\x02\u047E\u047C\x03\x02\x02\x02\u047F\u0482\x03\x02\x02\x02\u0480" +
		"\u047E\x03\x02\x02\x02\u0480\u0481\x03\x02\x02\x02\u0481\u0484\x03\x02" +
		"\x02\x02\u0482\u0480\x03\x02\x02\x02\u0483\u0479\x03\x02\x02\x02\u0483" +
		"\u0484\x03\x02\x02\x02\u0484u\x03\x02\x02\x02\u0485\u0487\x07\xB4\x02" +
		"\x02\u0486\u0488\t\v\x02\x02\u0487\u0486\x03\x02\x02\x02\u0487\u0488\x03" +
		"\x02\x02\x02\u0488\u0489\x03\x02\x02\x02\u0489\u048C\x07W\x02\x02\u048A" +
		"\u048B\x07`\x02\x02\u048B\u048D\x05\u012E\x98\x02\u048C\u048A\x03\x02" +
		"\x02\x02\u048C\u048D\x03\x02\x02\x02\u048D\u0499\x03\x02\x02\x02\u048E" +
		"\u0490\x07s\x02\x02\u048F\u048E\x03\x02\x02\x02\u048F\u0490\x03\x02\x02" +
		"\x02\u0490\u0491\x03\x02\x02\x02\u0491\u0496\x05\u0108\x85\x02\u0492\u0493" +
		"\x07\xFE\x02\x02\u0493\u0495\x05\u0108\x85\x02\u0494\u0492\x03\x02\x02" +
		"\x02\u0495\u0498\x03\x02\x02\x02\u0496\u0494\x03\x02\x02\x02\u0496\u0497" +
		"\x03\x02\x02\x02\u0497\u049A\x03\x02\x02\x02\u0498\u0496\x03\x02\x02\x02" +
		"\u0499\u048F\x03\x02\x02\x02\u0499\u049A\x03\x02\x02\x02\u049Aw\x03\x02" +
		"\x02\x02\u049B\u049C\x07\xB4\x02\x02\u049C\u049D\x07\'\x02\x02\u049D\u049E" +
		"\t\x07\x02\x02\u049E\u049F\x05\u012E\x98\x02\u049Fy\x03\x02\x02\x02\u04A0" +
		"\u04A1\x07\xB4\x02\x02\u04A1\u04A2\t\f\x02\x02\u04A2\u04A3\x07\xB7\x02" +
		"\x02\u04A3\u04A4\x05\u012E\x98\x02\u04A4{\x03\x02\x02\x02\u04A5\u04A7" +
		"\x07\xB4\x02\x02\u04A6\u04A8\x07\x9B\x02\x02\u04A7\u04A6\x03\x02\x02\x02" +
		"\u04A7\u04A8\x03\x02\x02\x02\u04A8\u04A9\x03\x02\x02\x02\u04A9\u04AA\x07" +
		"\x93\x02\x02\u04AA\u04AB\x05\u012E\x98\x02\u04AB}\x03\x02\x02\x02\u04AC" +
		"\u04AD\x07\xB4\x02\x02\u04AD\u04AE\x07K\x02\x02\u04AE\u04AF\x07`\x02\x02" +
		"\u04AF\u04B9\x05\u012E\x98\x02\u04B0\u04B1\x07\x92\x02\x02\u04B1\u04B2" +
		"\x07\xF8\x02\x02\u04B2\u04B5\x05\xFE\x80\x02\u04B3\u04B4\x07\xF6\x02\x02" +
		"\u04B4\u04B6\x05\xFE\x80\x02\u04B5\u04B3\x03\x02\x02\x02\u04B5\u04B6\x03" +
		"\x02\x02\x02\u04B6\u04B7\x03\x02\x02\x02\u04B7\u04B8\x07\xF9\x02\x02\u04B8" +
		"\u04BA\x03\x02\x02\x02\u04B9\u04B0\x03\x02\x02\x02\u04B9\u04BA\x03\x02" +
		"\x02\x02\u04BA\x7F\x03\x02\x02\x02\u04BB\u04BD\x07\xB4\x02\x02\u04BC\u04BE" +
		"\x07)\x02\x02\u04BD\u04BC\x03\x02\x02\x02\u04BD\u04BE\x03\x02\x02\x02" +
		"\u04BE\u04BF\x03\x02\x02\x02\u04BF\u04C0\x07\xA8\x02\x02\u04C0\x81\x03" +
		"\x02\x02\x02\u04C1\u04C2\x07\xB4\x02\x02\u04C2\u04C3\x07\xA7\x02\x02\u04C3" +
		"\u04C4\x07X\x02\x02\u04C4\u04C5\x07Y\x02\x02\u04C5\u04C6\x05\u0132\x9A" +
		"\x02\u04C6\x83\x03\x02\x02\x02\u04C7\u04C8\x07\xB4\x02\x02\u04C8\u04C9" +
		"\x07X\x02\x02\u04C9\u04CA\t\r\x02\x02\u04CA\u04D0\x05\u0132\x9A\x02\u04CB" +
		"\u04CC\x07\x89\x02\x02\u04CC\u04CE\t\x0E\x02\x02\u04CD\u04CF\x05\u012E" +
		"\x98\x02\u04CE\u04CD\x03\x02\x02\x02\u04CE\u04CF\x03\x02\x02\x02\u04CF" +
		"\u04D1\x03\x02\x02\x02\u04D0\u04CB\x03\x02\x02\x02\u04D0\u04D1\x03\x02" +
		"\x02\x02\u04D1\x85\x03\x02\x02\x02\u04D2\u04D3\x07$\x02\x02\u04D3\u04D4" +
		"\x07\x89\x02\x02\u04D4\u04D5\t\x0F\x02\x02\u04D5\u04D6\x05\u012E\x98\x02" +
		"\u04D6\u04D9\x07l\x02\x02\u04D7\u04DA\x05\u0108\x85\x02\u04D8\u04DA\x07" +
		"\x86\x02\x02\u04D9\u04D7\x03\x02\x02\x02\u04D9\u04D8\x03\x02\x02\x02\u04DA" +
		"\x87\x03\x02\x02\x02\u04DB\u04DC\x07E\x02\x02\u04DC\u04DD\x05\x04\x03" +
		"\x02\u04DD\x89\x03\x02\x02\x02\u04DE\u04E4\x07\xB1\x02\x02\u04DF\u04E5" +
		"\x07\x04\x02\x02\u04E0\u04E1\x05\u0132\x9A\x02\u04E1\u04E2\x07\xE8\x02" +
		"\x02\u04E2\u04E3\x05\xFE\x80\x02\u04E3\u04E5\x03\x02\x02\x02\u04E4\u04DF" +
		"\x03\x02\x02\x02\u04E4\u04E0\x03\x02\x02\x02\u04E4\u04E5\x03\x02\x02\x02" +
		"\u04E5\x8B\x03\x02\x02\x02\u04E6\u04E7\x07\xF7\x02\x02\u04E7\u04E8\x07" +
		"\xB5\x02\x02\u04E8\u04F2\x07\xF8\x02\x02\u04E9\u04EB\x05\u0108\x85\x02" +
		"\u04EA\u04E9\x03\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02\u04EB\u04F3\x03" +
		"\x02\x02\x02\u04EC\u04EF\x05\u0108\x85\x02\u04ED\u04EE\x07\xF6\x02\x02" +
		"\u04EE\u04F0\x05\xFE\x80\x02\u04EF\u04ED\x03\x02\x02\x02\u04EF\u04F0\x03" +
		"\x02\x02\x02\u04F0\u04F3\x03\x02\x02\x02\u04F1\u04F3\x05\xFE\x80\x02\u04F2" +
		"\u04EA\x03\x02\x02\x02\u04F2\u04EC\x03\x02\x02\x02\u04F2\u04F1\x03\x02" +
		"\x02\x02\u04F3\u04F4\x03\x02\x02\x02\u04F4\u04F5\x07\xF9\x02\x02\u04F5" +
		"\x8D\x03\x02\x02\x02\u04F6\u04F7\x07k\x02\x02\u04F7\u04F8\x07y\x02\x02" +
		"\u04F8\u04F9\x05\u012E\x98\x02\u04F9\x8F\x03\x02\x02\x02\u04FA\u04FB\x07" +
		"v\x02\x02\u04FB\u04FC\x07/\x02\x02\u04FC\u04FD\x07d\x02\x02\u04FD\u04FF" +
		"\x07\u0101\x02\x02\u04FE\u0500\x07\x91\x02\x02\u04FF\u04FE\x03\x02\x02" +
		"\x02\u04FF\u0500\x03\x02\x02\x02\u0500\u0501\x03\x02\x02\x02\u0501\u0502" +
		"\x07i\x02\x02\u0502\u0503\x07\xBE\x02\x02\u0503\u050D\x05\u012E\x98\x02" +
		"\u0504\u0505\x07\x92\x02\x02\u0505\u0506\x07\xF8\x02\x02\u0506\u0509\x05" +
		"\xFE\x80\x02\u0507\u0508\x07\xF6\x02\x02\u0508\u050A\x05\xFE\x80\x02\u0509" +
		"\u0507\x03\x02\x02\x02\u0509\u050A\x03\x02\x02\x02\u050A\u050B\x03\x02" +
		"\x02\x02\u050B\u050C\x07\xF9\x02\x02\u050C\u050E\x03\x02\x02\x02\u050D" +
		"\u0504\x03\x02\x02\x02\u050D\u050E\x03\x02\x02\x02\u050E\x91\x03\x02\x02" +
		"\x02\u050F\u0513\x05\x94K\x02\u0510\u0513\x05\x96L\x02\u0511\u0513\x05" +
		"\x98M\x02\u0512\u050F\x03\x02\x02\x02\u0512\u0510\x03\x02\x02\x02\u0512" +
		"\u0511\x03\x02\x02\x02\u0513\x93\x03\x02\x02\x02\u0514\u0515\x07\xA3\x02" +
		"\x02\u0515\u0522\x05\u012E\x98\x02\u0516\u0517\x07\x92\x02\x02\u0517\u0518" +
		"\x07\xF8\x02\x02\u0518\u051D\x05\xFE\x80\x02\u0519\u051A\x07\xF6\x02\x02" +
		"\u051A\u051C\x05\xFE\x80\x02\u051B\u0519\x03\x02\x02\x02\u051C\u051F\x03" +
		"\x02\x02\x02\u051D\u051E\x03\x02\x02\x02\u051D\u051B\x03\x02\x02\x02\u051E" +
		"\u0520\x03\x02\x02\x02\u051F\u051D\x03\x02\x02\x02\u0520\u0521\x07\xF9" +
		"\x02\x02\u0521\u0523\x03\x02\x02\x02\u0522\u0516\x03\x02\x02\x02\u0522" +
		"\u0523\x03\x02\x02\x02\u0523\x95\x03\x02\x02\x02\u0524\u0525\x07\xA3\x02" +
		"\x02\u0525\u0526\x07\x0F\x02\x02\u0526\x97\x03\x02\x02\x02\u0527\u0528" +
		"\x07\xA3\x02\x02\u0528\u0529\x07W\x02\x02\u0529\u052A\x05\u012E\x98\x02" +
		"\u052A\x99\x03\x02\x02\x02\u052B\u052C\x07_\x02\x02\u052C\u052D\x07D\x02" +
		"\x02\u052D\x9B\x03\x02\x02\x02\u052E\u052F\x07_\x02\x02\u052F\u0530\x07" +
		"\x85\x02\x02\u0530\u0531\x07D\x02\x02\u0531\x9D\x03\x02\x02\x02\u0532" +
		"\u0533\x07\x17\x02\x02\u0533\u0534\x07\x1C\x02\x02\u0534\u0536\x05\xFA" +
		"~\x02\u0535\u0532\x03\x02\x02\x02\u0535\u0536\x03\x02\x02\x02\u0536\u0539" +
		"\x03\x02\x02\x02\u0537\u0538\x07$\x02\x02\u0538\u053A\x05\u0108\x85\x02" +
		"\u0539\u0537\x03\x02\x02\x02\u0539\u053A\x03\x02\x02\x02\u053A\u053E\x03" +
		"\x02\x02\x02\u053B\u053C\x07\xA9\x02\x02\u053C\u053D\x07Q\x02\x02\u053D" +
		"\u053F\x05\xD4k\x02\u053E\u053B\x03\x02\x02\x02\u053E\u053F\x03\x02\x02" +
		"\x02\u053F\u0543\x03\x02\x02\x02\u0540\u0541\x07\xD9\x02\x02\u0541\u0542" +
		"\x07\xB0\x02\x02\u0542\u0544\x05\xCEh\x02\u0543\u0540\x03\x02\x02\x02" +
		"\u0543\u0544\x03\x02\x02\x02\u0544\u0548\x03\x02\x02\x02\u0545\u0546\x07" +
		"\x19\x02\x02\u0546\u0547\x07\v\x02\x02\u0547\u0549\x05\xBC_\x02\u0548" +
		"\u0545\x03\x02\x02\x02\u0548\u0549\x03\x02\x02\x02\u0549\u054C\x03\x02" +
		"\x02\x02\u054A\u054B\x07\x1A\x02\x02\u054B\u054D\x05\u0108\x85\x02\u054C" +
		"\u054A\x03\x02\x02\x02\u054C\u054D\x03\x02\x02\x02\u054D\u0558\x03\x02" +
		"\x02\x02\u054E\u054F\x07 \x02\x02\u054F\u0550\x07`\x02\x02\u0550\u0555" +
		"\x05\u012E\x98\x02\u0551\u0552\x07\xD9\x02\x02\u0552\u0553\x07\x98\x02" +
		"\x02\u0553\u0554\x07\xE8\x02\x02\u0554\u0556\x07\u0104\x02\x02\u0555\u0551" +
		"\x03\x02\x02\x02\u0555\u0556\x03\x02\x02\x02\u0556\u0559\x03\x02\x02\x02" +
		"\u0557\u0559\x07\xC7\x02\x02\u0558\u054E\x03\x02\x02\x02\u0558\u0557\x03" +
		"\x02\x02\x02\u0558\u0559\x03\x02\x02\x02\u0559\u055C\x03\x02\x02\x02\u055A" +
		"\u055B\x07\x1B\x02\x02\u055B\u055D\x05\xCEh\x02\u055C\u055A\x03\x02\x02" +
		"\x02\u055C\u055D\x03\x02\x02\x02\u055D\x9F\x03\x02\x02\x02\u055E\u0563" +
		"\x05\xA2R\x02\u055F\u0560\x07\xF6\x02\x02\u0560\u0562\x05\xA2R\x02\u0561" +
		"\u055F\x03\x02\x02\x02\u0562\u0565\x03\x02\x02\x02\u0563\u0561\x03\x02" +
		"\x02\x02\u0563\u0564\x03\x02\x02\x02\u0564\xA1\x03\x02\x02\x02\u0565\u0563" +
		"\x03\x02\x02\x02\u0566\u0567\x05\u012E\x98\x02\u0567\u0568\x07\xE8\x02" +
		"\x02\u0568\u0569\x05\xFE\x80\x02\u0569\xA3\x03\x02\x02\x02\u056A\u056B" +
		"\x07\xF8\x02\x02\u056B\u056E\x05\u0132\x9A\x02\u056C\u056D\x07$\x02\x02" +
		"\u056D\u056F\x05\u0108\x85\x02\u056E\u056C\x03\x02\x02\x02\u056E\u056F" +
		"\x03\x02\x02\x02\u056F\u0578\x03\x02\x02\x02\u0570\u0571\x07\xF6\x02\x02" +
		"\u0571\u0574\x05\u0132\x9A\x02\u0572\u0573\x07$\x02\x02\u0573\u0575\x05" +
		"\u0108\x85\x02\u0574\u0572\x03\x02\x02\x02\u0574\u0575\x03\x02\x02\x02" +
		"\u0575\u0577\x03\x02\x02\x02\u0576\u0570\x03\x02\x02\x02\u0577\u057A\x03" +
		"\x02\x02\x02\u0578\u0576\x03\x02\x02\x02\u0578\u0579\x03\x02\x02\x02\u0579" +
		"\u057B\x03\x02\x02\x02\u057A\u0578\x03\x02\x02\x02\u057B\u057C\x07\xF9" +
		"\x02\x02\u057C\xA5\x03\x02\x02\x02\u057D\u057F\x05\xA8U\x02\u057E\u057D" +
		"\x03\x02\x02\x02\u057E\u057F\x03";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\x02\u057F\u0580\x03\x02\x02\x02\u0580\u0581\x05\xD8m\x02\u0581" +
		"\xA7\x03\x02\x02\x02\u0582\u0583\x07\xD9\x02\x02\u0583\u0588\x05\xE8u" +
		"\x02\u0584\u0585\x07\xF6\x02\x02\u0585\u0587\x05\xE8u\x02\u0586\u0584" +
		"\x03\x02\x02\x02\u0587\u058A\x03\x02\x02\x02\u0588\u0586\x03\x02\x02\x02" +
		"\u0588\u0589\x03\x02\x02\x02\u0589\xA9\x03\x02\x02\x02\u058A\u0588\x03" +
		"\x02\x02\x02\u058B\u058C\x07\x97\x02\x02\u058C\u058D\x07n\x02\x02\u058D" +
		"\u058F\x05\xFA~\x02\u058E\u0590\x077\x02\x02\u058F\u058E\x03\x02\x02\x02" +
		"\u058F\u0590\x03\x02\x02\x02\u0590\u0594\x03\x02\x02\x02\u0591\u0595\x07" +
		"\xE2\x02\x02\u0592\u0593\x07\xF6\x02\x02\u0593\u0595\x07\xE2\x02\x02\u0594" +
		"\u0591\x03\x02\x02\x02\u0594\u0592\x03\x02\x02\x02\u0594\u0595\x03\x02" +
		"\x02\x02\u0595\u0599\x03\x02\x02\x02\u0596\u059A\x07\xE3\x02\x02\u0597" +
		"\u0598\x07\xF6\x02\x02\u0598\u059A\x07\xE3\x02\x02\u0599\u0596\x03\x02" +
		"\x02\x02\u0599\u0597\x03\x02\x02\x02\u0599\u059A\x03\x02\x02\x02\u059A" +
		"\u05A7\x03\x02\x02\x02\u059B\u059C\x07\xF6\x02\x02\u059C\u059F\x05\xAC" +
		"W\x02\u059D\u059F\x05\xACW\x02\u059E\u059B\x03\x02\x02\x02\u059E\u059D" +
		"\x03\x02\x02\x02\u059F\u05A4\x03\x02\x02\x02\u05A0\u05A1\x07\xF6\x02\x02" +
		"\u05A1\u05A3\x05\xACW\x02\u05A2\u05A0\x03\x02\x02\x02\u05A3\u05A6\x03" +
		"\x02\x02\x02\u05A4\u05A5\x03\x02\x02\x02\u05A4\u05A2\x03\x02\x02\x02\u05A5" +
		"\u05A8\x03\x02\x02\x02\u05A6\u05A4\x03\x02\x02\x02\u05A7\u059E\x03\x02" +
		"\x02\x02\u05A7\u05A8\x03\x02\x02\x02\u05A8\xAB\x03\x02\x02\x02\u05A9\u05AA" +
		"\x07S\x02\x02\u05AA\u05AB\x07n\x02\x02\u05AB\u05AC\x05\xFA~\x02\u05AC" +
		"\u05AD\x07\xE1\x02\x02\u05AD\u05AE\x05\u012E\x98\x02\u05AE\u05B0\x05\xFA" +
		"~\x02\u05AF\u05B1\x077\x02\x02\u05B0\u05AF\x03\x02\x02\x02\u05B0\u05B1" +
		"\x03\x02\x02\x02\u05B1\u05B3\x03\x02\x02\x02\u05B2\u05B4\x07\xE2\x02\x02" +
		"\u05B3\u05B2\x03\x02\x02\x02\u05B3\u05B4\x03\x02\x02\x02\u05B4\u05B6\x03" +
		"\x02\x02\x02\u05B5\u05B7\x07\xE3\x02\x02\u05B6\u05B5\x03\x02\x02\x02\u05B6" +
		"\u05B7\x03\x02\x02\x02\u05B7\xAD\x03\x02\x02\x02\u05B8\u05B9\x05\u0132" +
		"\x9A\x02\u05B9\u05BC\x05\u0116\x8C\x02\u05BA\u05BB\x07$\x02\x02\u05BB" +
		"\u05BD\x05\u0108\x85\x02\u05BC\u05BA\x03\x02\x02\x02\u05BC\u05BD\x03\x02" +
		"\x02\x02\u05BD\xAF\x03\x02\x02\x02\u05BE\u05BF\x05\xB2Z\x02\u05BF\xB1" +
		"\x03\x02\x02\x02\u05C0\u05C1\x05\u0132\x9A\x02\u05C1\u05C9\x05\u0116\x8C" +
		"\x02\u05C2\u05C6\x05\xB6\\\x02\u05C3\u05C5\x05\xB6\\\x02\u05C4\u05C3\x03" +
		"\x02\x02\x02\u05C5\u05C8\x03\x02\x02\x02\u05C6\u05C7\x03\x02\x02\x02\u05C6" +
		"\u05C4\x03\x02\x02\x02\u05C7\u05CA\x03\x02\x02\x02\u05C8\u05C6\x03\x02" +
		"\x02\x02\u05C9\u05C2\x03\x02\x02\x02\u05C9\u05CA\x03\x02\x02\x02\u05CA" +
		"\u05CD\x03\x02\x02\x02\u05CB\u05CC\x07$\x02\x02\u05CC\u05CE\x05\u0108" +
		"\x85\x02\u05CD\u05CB\x03\x02\x02\x02\u05CD\u05CE\x03\x02\x02\x02\u05CE" +
		"\u05D1\x03\x02\x02\x02\u05CF\u05D0\x07\x97\x02\x02\u05D0\u05D2\x07n\x02" +
		"\x02\u05D1\u05CF\x03\x02\x02\x02\u05D1\u05D2\x03\x02\x02\x02\u05D2\xB3" +
		"\x03\x02\x02\x02\u05D3\u05D4\x05\u0132\x9A\x02\u05D4\u05D7\x05\u0116\x8C" +
		"\x02\u05D5\u05D6\x07$\x02\x02\u05D6\u05D8\x05\u0108\x85\x02\u05D7\u05D5" +
		"\x03\x02\x02\x02\u05D7\u05D8\x03\x02\x02\x02\u05D8\u05E0\x03\x02\x02\x02" +
		"\u05D9\u05DD\x05\xB6\\\x02\u05DA\u05DC\x05\xB6\\\x02\u05DB\u05DA\x03\x02" +
		"\x02\x02\u05DC\u05DF\x03\x02\x02\x02\u05DD\u05DE\x03\x02\x02\x02\u05DD" +
		"\u05DB\x03\x02\x02\x02\u05DE\u05E1\x03\x02\x02\x02\u05DF\u05DD\x03\x02" +
		"\x02\x02\u05E0\u05D9\x03\x02\x02\x02\u05E0\u05E1\x03\x02\x02\x02\u05E1" +
		"\xB5\x03\x02\x02\x02\u05E2\u05E4\x07\x85\x02\x02\u05E3\u05E2\x03\x02\x02" +
		"\x02\u05E3\u05E4\x03\x02\x02\x02\u05E4\u05E5\x03\x02\x02\x02\u05E5\u05E8" +
		"\x07\x86\x02\x02\u05E6\u05E8\x05\xB8]\x02\u05E7\u05E3\x03\x02\x02\x02" +
		"\u05E7\u05E6\x03\x02\x02\x02\u05E8\xB7\x03\x02\x02\x02\u05E9\u05EA\x07" +
		">\x02\x02\u05EA\u05F2\x05\xFE\x80\x02\u05EB\u05EC\x07%\x02\x02\u05EC\u05F2" +
		"\x05\xFE\x80\x02\u05ED\u05EE\x075\x02\x02\u05EE\u05F2\x05\xFE\x80\x02" +
		"\u05EF\u05F0\x07\x12\x02\x02\u05F0\u05F2\x05\u0134\x9B\x02\u05F1\u05E9" +
		"\x03\x02\x02\x02\u05F1\u05EB\x03\x02\x02\x02\u05F1\u05ED\x03\x02\x02\x02" +
		"\u05F1\u05EF\x03\x02\x02\x02\u05F2\xB9\x03\x02\x02\x02\u05F3\u05F4\t\x10" +
		"\x02\x02\u05F4\xBB\x03\x02\x02\x02\u05F5\u05F6\t\x11\x02\x02\u05F6\xBD" +
		"\x03\x02\x02\x02\u05F7\u05FC\x05\xC0a\x02\u05F8\u05F9\x07\xF6\x02\x02" +
		"\u05F9\u05FB\x05\xC0a\x02\u05FA\u05F8\x03\x02\x02\x02\u05FB\u05FE\x03" +
		"\x02\x02\x02\u05FC\u05FD\x03\x02\x02\x02\u05FC\u05FA\x03\x02\x02\x02\u05FD" +
		"\u0601\x03\x02\x02\x02\u05FE\u05FC\x03\x02\x02\x02\u05FF\u0600\x07\xF6" +
		"\x02\x02\u0600\u0602\x05\xC2b\x02\u0601\u05FF\x03\x02\x02\x02\u0601\u0602" +
		"\x03\x02\x02\x02\u0602\u0605\x03\x02\x02\x02\u0603\u0605\x05\xC2b\x02" +
		"\u0604\u05F7\x03\x02\x02\x02\u0604\u0603\x03\x02\x02\x02\u0605\xBF\x03" +
		"\x02\x02\x02\u0606\u0608\x07[\x02\x02\u0607\u0609\x05\xFA~\x02\u0608\u0607" +
		"\x03\x02\x02\x02\u0608\u0609\x03\x02\x02\x02\u0609\u060A\x03\x02\x02\x02" +
		"\u060A\u060B\x07\x93\x02\x02\u060B\u060C\x05\u0134\x9B\x02\u060C\xC1\x03" +
		"\x02\x02\x02\u060D\u060F\x07\x9B\x02\x02\u060E\u0610\x05\xFA~\x02\u060F" +
		"\u060E\x03\x02\x02\x02\u060F\u0610\x03\x02\x02\x02\u0610\u0611\x03\x02" +
		"\x02\x02\u0611\u0612\x07\xF8\x02\x02\u0612\u0613\x07\x92\x02\x02\u0613" +
		"\u0619\x05\xC4c\x02\u0614\u0615\x07\xF6\x02\x02\u0615\u0616\x07\x92\x02" +
		"\x02\u0616\u0618\x05\xC4c\x02\u0617\u0614\x03\x02\x02\x02\u0618\u061B" +
		"\x03\x02\x02\x02\u0619\u061A\x03\x02\x02\x02\u0619\u0617\x03\x02\x02\x02" +
		"\u061A\u061C\x03\x02\x02\x02\u061B\u0619\x03\x02\x02\x02\u061C\u061D\x07" +
		"\xF9\x02\x02\u061D\xC3\x03\x02\x02\x02\u061E\u061F\x07\xD3\x02\x02\u061F" +
		"\u0620\x05\xCAf\x02\u0620\u0621\x05\xFE\x80\x02\u0621\u062E\x03\x02\x02" +
		"\x02\u0622\u0623\x05\xFE\x80\x02\u0623\u0624\x05\xC8e\x02\u0624\u0626" +
		"\x03\x02\x02\x02\u0625\u0622\x03\x02\x02\x02\u0625\u0626\x03\x02\x02\x02" +
		"\u0626\u0627\x03\x02\x02\x02\u0627\u062B\x07\xD4\x02\x02\u0628\u0629\x05" +
		"\xC8e\x02\u0629\u062A\x05\xFE\x80\x02\u062A\u062C\x03\x02\x02\x02\u062B" +
		"\u0628\x03\x02\x02\x02\u062B\u062C\x03\x02\x02\x02\u062C\u062E\x03\x02" +
		"\x02\x02\u062D\u061E\x03\x02\x02\x02\u062D\u0625\x03\x02\x02\x02\u062E" +
		"\xC5\x03\x02\x02\x02\u062F\u0630\x07 \x02\x02\u0630\u0631\x07`\x02\x02" +
		"\u0631\u0636\x05\u0132\x9A\x02\u0632\u0633\x07\xD9\x02\x02\u0633\u0634" +
		"\x07\x98\x02\x02\u0634\u0635\x07\xE8\x02\x02\u0635\u0637\x05\u0134\x9B" +
		"\x02\u0636\u0632\x03\x02\x02\x02\u0636\u0637\x03\x02\x02\x02\u0637\u063A" +
		"\x03\x02\x02\x02\u0638\u063A\x07\xC7\x02\x02\u0639\u062F\x03\x02\x02\x02" +
		"\u0639\u0638\x03\x02\x02\x02\u063A\xC7\x03\x02\x02\x02\u063B\u0641\x03" +
		"\x02\x02\x02\u063C\u0641\x07\xEA\x02\x02\u063D\u0641\x07\xEB\x02\x02\u063E" +
		"\u0641\x07\xEC\x02\x02\u063F\u0641\x07\xED\x02\x02\u0640\u063B\x03\x02" +
		"\x02\x02\u0640\u063C\x03\x02\x02\x02\u0640\u063D\x03\x02\x02\x02\u0640" +
		"\u063E\x03\x02\x02\x02\u0640\u063F\x03\x02\x02\x02\u0641\xC9\x03\x02\x02" +
		"\x02\u0642\u064B\x07\xE8\x02\x02\u0643\u064B\x07\xE9\x02\x02\u0644\u064B" +
		"\x07s\x02\x02\u0645\u064B\x07\xA5\x02\x02\u0646\u064B\x07\xA4\x02\x02" +
		"\u0647\u064B\x07\x11\x02\x02\u0648\u064B\x07`\x02\x02\u0649\u064B\x05" +
		"\xC8e\x02\u064A\u0642\x03\x02\x02\x02\u064A\u0643\x03\x02\x02\x02\u064A" +
		"\u0644\x03\x02\x02\x02\u064A\u0645\x03\x02\x02\x02\u064A\u0646\x03\x02" +
		"\x02\x02\u064A\u0647\x03\x02\x02\x02\u064A\u0648\x03\x02\x02\x02\u064A" +
		"\u0649\x03\x02\x02\x02\u064B\xCB\x03\x02\x02\x02\u064C\u064D\x07s\x02" +
		"\x02\u064D\u0650\x05\u012E\x98\x02\u064E\u064F\t\x12\x02\x02\u064F\u0651" +
		"\x07\x9A\x02\x02\u0650\u064E\x03\x02\x02\x02\u0650\u0651\x03\x02\x02\x02" +
		"\u0651\xCD\x03\x02\x02\x02\u0652\u0653\x07\xF8\x02\x02\u0653\u0658\x05" +
		"\xD6l\x02\u0654\u0655\x07\xF6\x02\x02\u0655\u0657\x05\xD6l\x02\u0656\u0654" +
		"\x03\x02\x02\x02\u0657\u065A\x03\x02\x02\x02\u0658\u0656\x03\x02\x02\x02" +
		"\u0658\u0659\x03\x02\x02\x02\u0659\u065B\x03\x02\x02\x02\u065A\u0658\x03" +
		"\x02\x02\x02\u065B\u065C\x07\xF9\x02\x02\u065C\xCF\x03\x02\x02\x02\u065D" +
		"\u065E\x07\xF8\x02\x02\u065E\u0663\x05\xAEX\x02\u065F\u0660\x07\xF6\x02" +
		"\x02\u0660\u0662\x05\xAEX\x02\u0661\u065F\x03\x02\x02\x02\u0662\u0665" +
		"\x03\x02\x02\x02\u0663\u0664\x03\x02\x02\x02\u0663\u0661\x03\x02\x02\x02" +
		"\u0664\u0666\x03\x02\x02\x02\u0665\u0663\x03\x02\x02\x02\u0666\u0667\x07" +
		"\xF9\x02\x02\u0667\xD1\x03\x02\x02\x02\u0668\u066D\x05\xFE\x80\x02\u0669" +
		"\u066A\x07\xF6\x02\x02\u066A\u066C\x05\xFE\x80\x02\u066B\u0669\x03\x02" +
		"\x02\x02\u066C\u066F\x03\x02\x02\x02\u066D\u066B\x03\x02\x02\x02\u066D" +
		"\u066E\x03\x02\x02\x02\u066E\xD3\x03\x02\x02\x02\u066F\u066D\x03\x02\x02" +
		"\x02\u0670\u067A\x076\x02\x02\u0671\u0672\x07I\x02\x02\u0672\u0673\x07" +
		"\xC1\x02\x02\u0673\u0674\x07\x1C\x02\x02\u0674\u0678\x05\u0108\x85\x02" +
		"\u0675\u0676\x07A\x02\x02\u0676\u0677\x07\x1C\x02\x02\u0677\u0679\x05" +
		"\u0108\x85\x02\u0678\u0675\x03\x02\x02\x02\u0678\u0679\x03\x02\x02\x02" +
		"\u0679\u067B\x03\x02\x02\x02\u067A\u0671\x03\x02\x02\x02\u067A\u067B\x03" +
		"\x02\x02\x02\u067B\u0680\x03\x02\x02\x02\u067C\u067D\x07u\x02\x02\u067D" +
		"\u067E\x07\xC1\x02\x02\u067E\u067F\x07\x1C\x02\x02\u067F\u0681\x05\u0108" +
		"\x85\x02\u0680\u067C\x03\x02\x02\x02\u0680\u0681\x03\x02\x02\x02\u0681" +
		"\xD5\x03\x02\x02\x02\u0682\u0685\x05\u0132\x9A\x02\u0683\u0684\x07\xE8" +
		"\x02\x02\u0684\u0686\x05\xFE\x80\x02\u0685\u0683\x03\x02\x02\x02\u0685" +
		"\u0686\x03\x02\x02\x02\u0686\xD7\x03\x02\x02\x02\u0687\u0692\x05\xDAn" +
		"\x02\u0688\u0689\x07\x8C\x02\x02\u0689\u068A\x07\x1C\x02\x02\u068A\u068F" +
		"\x05\xDEp\x02\u068B\u068C\x07\xF6\x02\x02\u068C\u068E\x05\xDEp\x02\u068D" +
		"\u068B\x03\x02\x02\x02\u068E\u0691\x03\x02\x02\x02\u068F\u068D\x03\x02" +
		"\x02\x02\u068F\u0690\x03\x02\x02\x02\u0690\u0693\x03\x02\x02\x02\u0691" +
		"\u068F\x03\x02\x02\x02\u0692\u0688\x03\x02\x02\x02\u0692\u0693\x03\x02" +
		"\x02\x02\u0693\u069A\x03\x02\x02\x02\u0694\u0695\x07t\x02\x02\u0695\u0698" +
		"\x05\xFE\x80\x02\u0696\u0697\x07\x88\x02\x02\u0697\u0699\x07\u0104\x02" +
		"\x02\u0698\u0696\x03\x02\x02\x02\u0698\u0699\x03\x02\x02\x02\u0699\u069B" +
		"\x03\x02\x02\x02\u069A\u0694\x03\x02\x02\x02\u069A\u069B\x03\x02\x02\x02" +
		"\u069B\xD9\x03\x02\x02\x02\u069C\u069D\bn\x01\x02\u069D\u069E\x05\xDC" +
		"o\x02\u069E\u06AD\x03\x02\x02\x02\u069F\u06A0\f\x04\x02\x02\u06A0\u06A2" +
		"\x07f\x02\x02\u06A1\u06A3\x05\xEAv\x02\u06A2\u06A1\x03\x02\x02\x02\u06A2" +
		"\u06A3\x03\x02\x02\x02\u06A3\u06A4\x03\x02\x02\x02\u06A4\u06AC\x05\xDA" +
		"n\x05\u06A5\u06A6\f\x03\x02\x02\u06A6\u06A8\t\x13\x02\x02\u06A7\u06A9" +
		"\x05\xEAv\x02\u06A8\u06A7\x03\x02\x02\x02\u06A8\u06A9\x03\x02\x02\x02" +
		"\u06A9\u06AA\x03\x02\x02\x02\u06AA\u06AC\x05\xDAn\x04\u06AB\u069F\x03" +
		"\x02\x02\x02\u06AB\u06A5\x03\x02\x02\x02\u06AC\u06AF\x03\x02\x02\x02\u06AD" +
		"\u06AB\x03\x02\x02\x02\u06AD\u06AE\x03\x02\x02\x02\u06AE\xDB\x03\x02\x02" +
		"\x02\u06AF\u06AD\x03\x02\x02\x02\u06B0\u06C1\x05\xE0q\x02\u06B1\u06B2" +
		"\x07\xBE\x02\x02\u06B2\u06C1\x05\u012E\x98\x02\u06B3\u06B4\x07\xD4\x02" +
		"\x02\u06B4\u06B9\x05\xFE\x80\x02\u06B5\u06B6\x07\xF6\x02\x02\u06B6\u06B8" +
		"\x05\xFE\x80\x02\u06B7\u06B5\x03\x02\x02\x02\u06B8\u06BB\x03\x02\x02\x02" +
		"\u06B9\u06B7\x03\x02\x02\x02\u06B9\u06BA\x03\x02\x02\x02\u06BA\u06C1\x03" +
		"\x02\x02\x02\u06BB\u06B9\x03\x02\x02\x02\u06BC\u06BD\x07\xF8\x02\x02\u06BD" +
		"\u06BE\x05\xD8m\x02\u06BE\u06BF\x07\xF9\x02\x02\u06BF\u06C1\x03\x02\x02" +
		"\x02\u06C0\u06B0\x03\x02\x02\x02\u06C0\u06B1\x03\x02\x02\x02\u06C0\u06B3" +
		"\x03\x02\x02\x02\u06C0\u06BC\x03\x02\x02\x02\u06C1\xDD\x03\x02\x02\x02" +
		"\u06C2\u06C4\x05\xFE\x80\x02\u06C3\u06C5\t\x14\x02\x02\u06C4\u06C3\x03" +
		"\x02\x02\x02\u06C4\u06C5\x03\x02\x02\x02\u06C5\u06C8\x03\x02\x02\x02\u06C6" +
		"\u06C7\x07\x87\x02\x02\u06C7\u06C9\t\x15\x02\x02\u06C8\u06C6\x03\x02\x02" +
		"\x02\u06C8\u06C9\x03\x02\x02\x02\u06C9\xDF\x03\x02\x02\x02\u06CA\u06CC" +
		"\x07\xAF\x02\x02\u06CB\u06CD\x05\xEAv\x02\u06CC\u06CB\x03\x02\x02\x02" +
		"\u06CC\u06CD\x03\x02\x02\x02\u06CD\u06CF\x03\x02\x02\x02\u06CE\u06D0\x07" +
		"\xB9\x02\x02\u06CF\u06CE\x03\x02\x02\x02\u06CF\u06D0\x03\x02\x02\x02\u06D0" +
		"\u06D1\x03\x02\x02\x02\u06D1\u06D6\x05\xECw\x02\u06D2\u06D3\x07\xF6\x02" +
		"\x02\u06D3\u06D5\x05\xECw\x02\u06D4\u06D2\x03\x02\x02\x02\u06D5\u06D8" +
		"\x03\x02\x02\x02\u06D6\u06D4\x03\x02\x02\x02\u06D6\u06D7\x03\x02\x02\x02" +
		"\u06D7\u06E2\x03\x02\x02\x02\u06D8\u06D6\x03\x02\x02\x02\u06D9\u06DA\x07" +
		"T\x02\x02\u06DA\u06DF\x05\xEEx\x02\u06DB\u06DC\x07\xF6\x02\x02\u06DC\u06DE" +
		"\x05\xEEx\x02\u06DD\u06DB\x03\x02\x02\x02\u06DE\u06E1\x03\x02\x02\x02" +
		"\u06DF\u06DD\x03\x02\x02\x02\u06DF\u06E0\x03\x02\x02\x02\u06E0\u06E3\x03" +
		"\x02\x02\x02\u06E1\u06DF\x03\x02\x02\x02\u06E2\u06D9\x03\x02\x02\x02\u06E2" +
		"\u06E3\x03\x02\x02\x02\u06E3\u06E6\x03\x02\x02\x02\u06E4\u06E5\x07\xD8" +
		"\x02\x02\u06E5\u06E7\x05\u0100\x81\x02\u06E6\u06E4\x03\x02\x02\x02\u06E6" +
		"\u06E7\x03\x02\x02\x02\u06E7\u06EB\x03\x02\x02\x02\u06E8\u06E9\x07Y\x02" +
		"\x02\u06E9\u06EA\x07\x1C\x02\x02\u06EA\u06EC\x05\xE2r\x02\u06EB\u06E8" +
		"\x03\x02\x02\x02\u06EB\u06EC\x03\x02\x02\x02\u06EC\u06EF\x03\x02\x02\x02" +
		"\u06ED\u06EE\x07\\\x02\x02\u06EE\u06F0\x05\u0100\x81\x02\u06EF\u06ED\x03" +
		"\x02\x02\x02\u06EF\u06F0\x03\x02\x02\x02\u06F0\xE1\x03\x02\x02\x02\u06F1" +
		"\u06F3\x05\xEAv\x02\u06F2\u06F1\x03\x02\x02\x02\u06F2\u06F3\x03\x02\x02" +
		"\x02\u06F3\u06F4\x03\x02\x02\x02\u06F4\u06F9\x05\xE4s\x02\u06F5\u06F6" +
		"\x07\xF6\x02\x02\u06F6\u06F8\x05\xE4s\x02\u06F7\u06F5\x03\x02\x02\x02" +
		"\u06F8\u06FB\x03\x02\x02\x02\u06F9\u06F7\x03\x02\x02\x02\u06F9\u06FA\x03" +
		"\x02\x02\x02\u06FA\xE3\x03\x02\x02\x02\u06FB\u06F9\x03\x02\x02\x02\u06FC" +
		"\u06FD\x05\xE6t\x02\u06FD\xE5\x03\x02\x02\x02\u06FE\u0707\x07\xF8\x02" +
		"\x02\u06FF\u0704\x05\xFE\x80\x02\u0700\u0701\x07\xF6\x02\x02\u0701\u0703" +
		"\x05\xFE\x80\x02\u0702\u0700\x03\x02\x02\x02\u0703\u0706\x03\x02\x02\x02" +
		"\u0704\u0702\x03\x02\x02\x02\u0704\u0705\x03\x02\x02\x02\u0705\u0708\x03" +
		"\x02\x02\x02\u0706\u0704\x03\x02\x02\x02\u0707\u06FF\x03\x02\x02\x02\u0707" +
		"\u0708\x03\x02\x02\x02\u0708\u0709\x03\x02\x02\x02\u0709\u070C\x07\xF9" +
		"\x02\x02\u070A\u070C\x05\xFE\x80\x02\u070B\u06FE\x03\x02\x02\x02\u070B" +
		"\u070A\x03\x02\x02\x02\u070C\xE7\x03\x02\x02\x02\u070D\u070F\x05\u0132" +
		"\x9A\x02\u070E\u0710\x05\xFA~\x02\u070F\u070E\x03\x02\x02\x02\u070F\u0710" +
		"\x03\x02\x02\x02\u0710\u0711\x03\x02\x02\x02\u0711\u0712\x07\v\x02\x02" +
		"\u0712\u0713\x07\xF8\x02\x02\u0713\u0714\x05\xA6T\x02\u0714\u0715\x07" +
		"\xF9\x02\x02\u0715\xE9\x03\x02\x02\x02\u0716\u0717\t\x16\x02\x02\u0717" +
		"\xEB\x03\x02\x02\x02\u0718\u071D\x05\xFE\x80\x02\u0719\u071B\x07\v\x02" +
		"\x02\u071A\u0719\x03\x02\x02\x02\u071A\u071B\x03\x02\x02\x02\u071B\u071C" +
		"\x03\x02\x02\x02\u071C\u071E\x05\u0132\x9A\x02\u071D\u071A\x03\x02\x02" +
		"\x02\u071D\u071E\x03\x02\x02\x02\u071E\u0725\x03\x02\x02\x02\u071F\u0720" +
		"\x05\u012E\x98\x02\u0720\u0721\x07\xF4\x02\x02\u0721\u0722\x07\xF0\x02" +
		"\x02\u0722\u0725\x03\x02\x02\x02\u0723\u0725\x07\xF0\x02\x02\u0724\u0718" +
		"\x03\x02\x02\x02\u0724\u071F\x03\x02\x02\x02\u0724\u0723\x03\x02\x02\x02" +
		"\u0725\xED\x03\x02\x02\x02\u0726\u0727\bx\x01\x02\u0727\u0728\x05\xF4" +
		"{\x02\u0728\u0736\x03\x02\x02\x02\u0729\u0732\f\x04\x02\x02\u072A\u072B" +
		"\x07(\x02\x02\u072B\u072C\x07m\x02\x02\u072C\u0733\x05\xF4{\x02\u072D" +
		"\u072E\x05\xF0y\x02\u072E\u072F\x07m\x02\x02\u072F\u0730\x05\xEEx\x02" +
		"\u0730\u0731\x05\xF2z\x02\u0731\u0733\x03\x02\x02\x02\u0732\u072A\x03" +
		"\x02\x02\x02\u0732\u072D\x03\x02\x02\x02\u0733\u0735\x03\x02\x02\x02\u0734" +
		"\u0729\x03\x02\x02\x02\u0735\u0738\x03\x02\x02\x02\u0736\u0734\x03\x02" +
		"\x02\x02\u0736\u0737\x03\x02\x02\x02\u0737\xEF\x03\x02\x02\x02\u0738\u0736" +
		"\x03\x02\x02\x02\u0739\u073B\x07c\x02\x02\u073A\u0739\x03\x02\x02\x02" +
		"\u073A\u073B\x03\x02\x02\x02\u073B\u0759\x03\x02\x02\x02\u073C\u073E\x07" +
		"r\x02\x02\u073D\u073F\x07c\x02\x02\u073E\u073D\x03\x02\x02\x02\u073E\u073F" +
		"\x03\x02\x02\x02\u073F\u0759\x03\x02\x02\x02\u0740\u0742\x07\xA6\x02\x02" +
		"\u0741\u0743\x07c\x02\x02\u0742\u0741\x03\x02\x02\x02\u0742\u0743\x03" +
		"\x02\x02\x02\u0743\u0759\x03\x02\x02\x02\u0744\u0746\x07r\x02\x02\u0745" +
		"\u0747\x07\x8E\x02\x02\u0746\u0745\x03\x02\x02\x02\u0746\u0747\x03\x02" +
		"\x02\x02\u0747\u0759\x03\x02\x02\x02\u0748\u074A\x07\xA6\x02\x02\u0749" +
		"\u074B\x07\x8E\x02\x02\u074A\u0749\x03\x02\x02\x02\u074A\u074B\x03\x02" +
		"\x02\x02\u074B\u0759\x03\x02\x02\x02\u074C\u074E\x07U\x02\x02\u074D\u074F" +
		"\x07\x8E\x02\x02\u074E\u074D\x03\x02\x02\x02\u074E\u074F\x03\x02\x02\x02" +
		"\u074F\u0759\x03\x02\x02\x02\u0750\u0751\x07r\x02\x02\u0751\u0759\x07" +
		"\xB2\x02\x02\u0752\u0753\x07\xA6\x02\x02\u0753\u0759\x07\xB2\x02\x02\u0754" +
		"\u0755\x07r\x02\x02\u0755\u0759\x07\t\x02\x02\u0756\u0757\x07\xA6\x02" +
		"\x02\u0757\u0759\x07\t\x02\x02\u0758\u073A\x03\x02\x02\x02\u0758\u073C" +
		"\x03\x02\x02\x02\u0758\u0740\x03\x02\x02\x02\u0758\u0744\x03\x02\x02\x02" +
		"\u0758\u0748\x03\x02\x02\x02\u0758\u074C\x03\x02\x02\x02\u0758\u0750\x03" +
		"\x02\x02\x02\u0758\u0752\x03\x02\x02\x02\u0758\u0754\x03\x02\x02\x02\u0758" +
		"\u0756\x03\x02\x02\x02\u0759\xF1\x03\x02\x02\x02\u075A\u075B\x07\x89\x02" +
		"\x02\u075B\u0769\x05\u0100\x81\x02\u075C\u075D\x07\xCF\x02\x02\u075D\u075E" +
		"\x07\xF8\x02\x02\u075E\u0763\x05\u0132\x9A\x02\u075F\u0760\x07\xF6\x02" +
		"\x02\u0760\u0762\x05\u0132\x9A\x02\u0761\u075F\x03\x02\x02\x02\u0762\u0765" +
		"\x03\x02\x02\x02\u0763\u0761\x03\x02\x02\x02\u0763\u0764\x03\x02\x02\x02" +
		"\u0764\u0766\x03\x02\x02\x02\u0765\u0763\x03\x02\x02\x02\u0766\u0767\x07" +
		"\xF9\x02\x02\u0767\u0769\x03\x02\x02\x02\u0768\u075A\x03\x02\x02\x02\u0768" +
		"\u075C\x03\x02\x02\x02\u0769\xF3\x03\x02\x02\x02\u076A\u0777\x05\xF8}" +
		"\x02\u076B\u076C\x07\xC0\x02\x02\u076C\u076D\x05\xF6|\x02\u076D\u076E" +
		"\x07\xF8\x02\x02\u076E\u076F\x05\xFE\x80\x02\u076F\u0775\x07\xF9\x02\x02" +
		"\u0770\u0771\x07\x9E\x02\x02\u0771\u0772\x07\xF8\x02\x02\u0772\u0773\x05" +
		"\xFE\x80\x02\u0773\u0774\x07\xF9\x02\x02\u0774\u0776\x03\x02\x02\x02\u0775" +
		"\u0770\x03\x02\x02\x02\u0775\u0776\x03\x02\x02\x02\u0776\u0778\x03\x02" +
		"\x02\x02\u0777\u076B\x03\x02\x02\x02\u0777\u0778\x03\x02\x02\x02\u0778" +
		"\xF5\x03\x02\x02\x02\u0779\u077A\t\x17\x02\x02\u077A\xF7\x03\x02\x02\x02" +
		"\u077B\u0783\x05\xFC\x7F\x02\u077C\u077E\x07\v\x02\x02\u077D\u077C\x03" +
		"\x02\x02\x02\u077D\u077E\x03\x02\x02\x02\u077E\u077F\x03\x02\x02\x02\u077F" +
		"\u0781\x05\u0132\x9A\x02\u0780\u0782\x05\xFA~\x02\u0781\u0780\x03\x02" +
		"\x02\x02\u0781\u0782\x03\x02\x02\x02\u0782\u0784\x03\x02\x02\x02\u0783" +
		"\u077D\x03\x02\x02\x02\u0783\u0784\x03\x02\x02\x02\u0784\xF9\x03\x02\x02" +
		"\x02\u0785\u0786\x07\xF8\x02\x02\u0786\u078B\x05\u0132\x9A\x02\u0787\u0788" +
		"\x07\xF6\x02\x02\u0788\u078A\x05\u0132\x9A\x02\u0789\u0787\x03\x02\x02" +
		"\x02\u078A\u078D\x03\x02\x02\x02\u078B\u0789\x03\x02\x02\x02\u078B\u078C" +
		"\x03\x02\x02\x02\u078C\u078E\x03\x02\x02\x02\u078D\u078B\x03\x02\x02\x02" +
		"\u078E\u078F\x07\xF9\x02\x02\u078F\xFB\x03\x02\x02\x02\u0790\u07AE\x05" +
		"\u012E\x98\x02\u0791\u0792\x07\xF8\x02\x02\u0792\u0793\x05\xA6T\x02\u0793" +
		"\u0794\x07\xF9\x02\x02\u0794\u07AE\x03\x02\x02\x02\u0795\u0796\x07\xCB" +
		"\x02\x02\u0796\u0797\x07\xF8\x02\x02\u0797\u079C\x05\xFE\x80\x02\u0798" +
		"\u0799\x07\xF6\x02\x02\u0799\u079B\x05\xFE\x80\x02\u079A\u0798\x03\x02" +
		"\x02\x02\u079B\u079E\x03\x02\x02\x02\u079C\u079A\x03\x02\x02\x02\u079C" +
		"\u079D\x03\x02\x02\x02\u079D\u079F\x03\x02\x02\x02\u079E\u079C\x03\x02" +
		"\x02\x02\u079F\u07A2\x07\xF9\x02\x02\u07A0\u07A1\x07\xD9\x02\x02\u07A1" +
		"\u07A3\x07\x8D\x02\x02\u07A2\u07A0\x03\x02\x02\x02\u07A2\u07A3\x03\x02" +
		"\x02\x02\u07A3\u07AE\x03\x02\x02\x02\u07A4\u07A5\x07q\x02\x02\u07A5\u07A6" +
		"\x07\xF8\x02\x02\u07A6\u07A7\x05\xA6T\x02\u07A7\u07A8\x07\xF9\x02\x02" +
		"\u07A8\u07AE\x03\x02\x02\x02\u07A9\u07AA\x07\xF8\x02\x02\u07AA\u07AB\x05" +
		"\xEEx\x02\u07AB\u07AC\x07\xF9\x02\x02\u07AC\u07AE\x03\x02\x02\x02\u07AD" +
		"\u0790\x03\x02\x02\x02\u07AD\u0791\x03\x02\x02\x02\u07AD\u0795\x03\x02" +
		"\x02\x02\u07AD\u07A4\x03\x02\x02\x02\u07AD\u07A9\x03\x02\x02\x02\u07AE" +
		"\xFD\x03\x02\x02\x02\u07AF\u07B0\x05\u0100\x81\x02\u07B0\xFF\x03\x02\x02" +
		"\x02\u07B1\u07B2\b\x81\x01\x02\u07B2\u07B4\x05\u0104\x83\x02\u07B3\u07B5" +
		"\x05\u0102\x82\x02\u07B4\u07B3\x03\x02\x02\x02\u07B4\u07B5\x03\x02\x02" +
		"\x02\u07B5\u07B9\x03\x02\x02\x02\u07B6\u07B7\x07\x85\x02\x02\u07B7\u07B9" +
		"\x05\u0100\x81\x05\u07B8\u07B1\x03\x02\x02\x02\u07B8\u07B6\x03\x02\x02" +
		"\x02\u07B9\u07C2\x03\x02\x02\x02\u07BA\u07BB\f\x04\x02\x02\u07BB\u07BC" +
		"\x07\x07\x02\x02\u07BC\u07C1\x05\u0100\x81\x05\u07BD\u07BE\f\x03\x02\x02" +
		"\u07BE\u07BF\x07\x8B\x02\x02\u07BF\u07C1\x05\u0100\x81\x04\u07C0\u07BA" +
		"\x03\x02\x02\x02\u07C0\u07BD\x03\x02\x02\x02\u07C1\u07C4\x03\x02\x02\x02" +
		"\u07C2\u07C0\x03\x02\x02\x02\u07C2\u07C3\x03\x02\x02\x02\u07C3\u0101\x03" +
		"\x02\x02\x02\u07C4\u07C2\x03\x02\x02\x02\u07C5\u07C6\x05\u010A\x86\x02" +
		"\u07C6\u07C7\x05\u0104\x83\x02\u07C7\u0805\x03\x02\x02\x02\u07C8\u07C9" +
		"\x05\u010A\x86\x02\u07C9\u07CA\x05\u010C\x87\x02\u07CA\u07CB\x07\xF8\x02" +
		"\x02\u07CB\u07CC\x05\xA6T\x02\u07CC\u07CD\x07\xF9\x02\x02\u07CD\u0805" +
		"\x03\x02\x02\x02\u07CE\u07D0\x07\x85\x02\x02\u07CF\u07CE\x03\x02\x02\x02" +
		"\u07CF\u07D0\x03\x02\x02\x02\u07D0\u07D1\x03\x02\x02\x02\u07D1\u07D2\x07" +
		"\x11\x02\x02\u07D2\u07D3\x05\u0104\x83\x02\u07D3\u07D4\x07\x07\x02\x02" +
		"\u07D4\u07D5\x05\u0104\x83\x02\u07D5\u0805\x03\x02\x02\x02\u07D6\u07D8" +
		"\x07\x85\x02\x02\u07D7\u07D6\x03\x02\x02\x02\u07D7\u07D8\x03\x02\x02\x02" +
		"\u07D8\u07D9\x03\x02\x02\x02\u07D9\u07DA\x07`\x02\x02\u07DA\u07DB\x07" +
		"\xF8\x02\x02\u07DB\u07E0\x05\xFE\x80\x02\u07DC\u07DD\x07\xF6\x02\x02\u07DD" +
		"\u07DF\x05\xFE\x80\x02\u07DE\u07DC\x03\x02\x02\x02\u07DF\u07E2\x03\x02" +
		"\x02\x02\u07E0\u07DE\x03\x02\x02\x02\u07E0\u07E1\x03\x02\x02\x02\u07E1" +
		"\u07E3\x03\x02\x02\x02\u07E2\u07E0\x03\x02\x02\x02\u07E3\u07E4\x07\xF9" +
		"\x02\x02\u07E4\u0805\x03\x02\x02\x02\u07E5\u07E7\x07\x85\x02\x02\u07E6" +
		"\u07E5\x03\x02\x02\x02\u07E6\u07E7\x03\x02\x02\x02\u07E7\u07E8\x03\x02" +
		"\x02\x02\u07E8\u07E9\x07`\x02\x02\u07E9\u07EA\x07\xF8\x02\x02\u07EA\u07EB" +
		"\x05\xA6T\x02\u07EB\u07EC\x07\xF9\x02\x02\u07EC\u0805\x03\x02\x02\x02" +
		"\u07ED\u07EF\x07\x85\x02\x02\u07EE\u07ED\x03\x02\x02\x02\u07EE\u07EF\x03" +
		"\x02\x02\x02\u07EF\u07F0\x03\x02\x02\x02\u07F0\u07F1\x07s\x02\x02\u07F1" +
		"\u07F4\x05\u0104\x83\x02\u07F2\u07F3\x07@\x02\x02\u07F3\u07F5\x05\u0104" +
		"\x83\x02\u07F4\u07F2\x03\x02\x02\x02\u07F4\u07F5\x03\x02\x02\x02\u07F5" +
		"\u0805\x03\x02\x02\x02\u07F6\u07F7\x07\xA4\x02\x02\u07F7\u0805\x05\u0104" +
		"\x83\x02\u07F8\u07FA\x07l\x02\x02\u07F9\u07FB\x07\x85\x02\x02\u07FA\u07F9" +
		"\x03\x02\x02\x02\u07FA\u07FB\x03\x02\x02\x02\u07FB\u07FC\x03\x02\x02\x02" +
		"\u07FC\u0805\x07\x86\x02\x02\u07FD\u07FF\x07l\x02\x02\u07FE\u0800\x07" +
		"\x85\x02\x02\u07FF\u07FE\x03\x02\x02\x02\u07FF\u0800\x03\x02\x02\x02\u0800" +
		"\u0801\x03\x02\x02\x02\u0801\u0802\x07;\x02\x02\u0802\u0803\x07T\x02\x02" +
		"\u0803\u0805\x05\u0104\x83\x02\u0804\u07C5\x03\x02\x02\x02\u0804\u07C8" +
		"\x03\x02\x02\x02\u0804\u07CF\x03\x02\x02\x02\u0804\u07D7\x03\x02\x02\x02" +
		"\u0804\u07E6\x03\x02\x02\x02\u0804\u07EE\x03\x02\x02\x02\u0804\u07F6\x03" +
		"\x02\x02\x02\u0804\u07F8\x03\x02\x02\x02\u0804\u07FD\x03\x02\x02\x02\u0805" +
		"\u0103\x03\x02\x02\x02\u0806\u0807\b\x83\x01\x02\u0807\u080B\x05\u0106" +
		"\x84\x02\u0808\u0809\t\x18\x02\x02\u0809\u080B\x05\u0104\x83\x06\u080A" +
		"\u0806\x03\x02\x02\x02\u080A\u0808\x03\x02\x02\x02\u080B\u0817\x03\x02" +
		"\x02\x02\u080C\u080D\f\x05\x02\x02\u080D\u080E\t\x19\x02\x02\u080E\u0816" +
		"\x05\u0104\x83\x06\u080F\u0810\f\x04\x02\x02\u0810\u0811\t\x18\x02\x02" +
		"\u0811\u0816\x05\u0104\x83\x05\u0812\u0813\f\x03\x02\x02\u0813\u0814\x07" +
		"\xF3\x02\x02\u0814\u0816\x05\u0104\x83\x04\u0815\u080C\x03\x02\x02\x02" +
		"\u0815\u080F\x03\x02\x02\x02\u0815\u0812\x03\x02\x02\x02\u0816\u0819\x03" +
		"\x02\x02\x02\u0817\u0815\x03\x02\x02\x02\u0817\u0818\x03\x02\x02\x02\u0818" +
		"\u0105\x03\x02\x02\x02\u0819\u0817\x03\x02\x02\x02\u081A\u081B\b\x84\x01" +
		"\x02\u081B\u0911\x07\x86\x02\x02\u081C\u0911\x05\u0110\x89\x02\u081D\u081E" +
		"\x05\u0132\x9A\x02\u081E\u081F\x05\u0108\x85\x02\u081F\u0911\x03\x02\x02" +
		"\x02\u0820\u0821\x07\u010D\x02\x02\u0821\u0911\x05\u0108\x85\x02\u0822" +
		"\u0911\x05\u0134\x9B\x02\u0823\u0911\x05\u010E\x88\x02\u0824\u0911\x05" +
		"\u0108\x85\x02\u0825\u0911\x07\u0103\x02\x02\u0826\u0911\x07\xFF\x02\x02" +
		"\u0827\u0828\x07\x95\x02\x02\u0828\u0829\x07\xF8\x02\x02\u0829\u082A\x05" +
		"\u0104\x83\x02\u082A\u082B\x07`\x02\x02\u082B\u082C\x05\u0104\x83\x02" +
		"\u082C\u082D\x07\xF9\x02\x02\u082D\u0911\x03\x02\x02\x02\u082E\u082F\x07" +
		"\xF8\x02\x02\u082F\u0832\x05\xFE\x80\x02\u0830\u0831\x07\v\x02\x02\u0831" +
		"\u0833\x05\u0116\x8C";
	private static readonly _serializedATNSegment4: string =
		"\x02\u0832\u0830\x03\x02\x02\x02\u0832\u0833\x03\x02\x02\x02\u0833\u083C" +
		"\x03\x02\x02\x02\u0834\u0835\x07\xF6\x02\x02\u0835\u0838\x05\xFE\x80\x02" +
		"\u0836\u0837\x07\v\x02\x02\u0837\u0839\x05\u0116\x8C\x02\u0838\u0836\x03" +
		"\x02\x02\x02\u0838\u0839\x03\x02\x02\x02\u0839\u083B\x03\x02\x02\x02\u083A" +
		"\u0834\x03\x02\x02\x02\u083B\u083E\x03\x02\x02\x02\u083C\u083D\x03\x02" +
		"\x02\x02\u083C\u083A\x03\x02\x02\x02\u083D\u083F\x03\x02\x02\x02\u083E" +
		"\u083C\x03\x02\x02\x02\u083F\u0840\x07\xF9\x02\x02\u0840\u0911\x03\x02" +
		"\x02\x02\u0841\u0842\x07\xA9\x02\x02\u0842\u0843\x07\xF8\x02\x02\u0843" +
		"\u0848\x05\xFE\x80\x02\u0844\u0845\x07\xF6\x02\x02\u0845\u0847\x05\xFE" +
		"\x80\x02\u0846\u0844\x03\x02\x02\x02\u0847\u084A\x03\x02\x02\x02\u0848" +
		"\u0846\x03\x02\x02\x02\u0848\u0849\x03\x02\x02\x02\u0849\u084B\x03\x02" +
		"\x02\x02\u084A\u0848\x03\x02\x02\x02\u084B\u084C\x07\xF9\x02\x02\u084C" +
		"\u0911\x03\x02\x02\x02\u084D\u084E\x05\u012E\x98\x02\u084E\u084F\x07\xF8" +
		"\x02\x02\u084F\u0850\x07\xF0\x02\x02\u0850\u0852\x07\xF9\x02\x02\u0851" +
		"\u0853\x05\u011E\x90\x02\u0852\u0851\x03\x02\x02\x02\u0852\u0853\x03\x02" +
		"\x02\x02\u0853\u0855\x03\x02\x02\x02\u0854\u0856\x05\u0120\x91\x02\u0855" +
		"\u0854\x03\x02\x02\x02\u0855\u0856\x03\x02\x02\x02\u0856\u0911\x03\x02" +
		"\x02\x02\u0857\u0858\x05\u012E\x98\x02\u0858\u0864\x07\xF8\x02\x02\u0859" +
		"\u085B\x05\xEAv\x02\u085A\u0859\x03\x02\x02\x02\u085A\u085B\x03\x02\x02" +
		"\x02\u085B\u085C\x03\x02\x02\x02\u085C\u0861\x05\xFE\x80\x02\u085D\u085E" +
		"\x07\xF6\x02\x02\u085E\u0860\x05\xFE\x80\x02\u085F\u085D\x03\x02\x02\x02" +
		"\u0860\u0863\x03\x02\x02\x02\u0861\u085F\x03\x02\x02\x02\u0861\u0862\x03" +
		"\x02\x02\x02\u0862\u0865\x03\x02\x02\x02\u0863\u0861\x03\x02\x02\x02\u0864" +
		"\u085A\x03\x02\x02\x02\u0864\u0865\x03\x02\x02\x02\u0865\u0870\x03\x02" +
		"\x02\x02\u0866\u0867\x07\x8C\x02\x02\u0867\u0868\x07\x1C\x02\x02\u0868" +
		"\u086D\x05\xDEp\x02\u0869\u086A\x07\xF6\x02\x02\u086A\u086C\x05\xDEp\x02" +
		"\u086B\u0869\x03\x02\x02\x02\u086C\u086F\x03\x02\x02\x02\u086D\u086B\x03" +
		"\x02\x02\x02\u086D\u086E\x03\x02\x02\x02\u086E\u0871\x03\x02\x02\x02\u086F" +
		"\u086D\x03\x02\x02\x02\u0870\u0866\x03\x02\x02\x02\u0870\u0871\x03\x02" +
		"\x02\x02\u0871\u0872\x03\x02\x02\x02\u0872\u0874\x07\xF9\x02\x02\u0873" +
		"\u0875\x05\u011E\x90\x02\u0874\u0873\x03\x02\x02\x02\u0874\u0875\x03\x02" +
		"\x02\x02\u0875\u0877\x03\x02\x02\x02\u0876\u0878\x05\u0120\x91\x02\u0877" +
		"\u0876\x03\x02\x02\x02\u0877\u0878\x03\x02\x02\x02\u0878\u0911\x03\x02" +
		"\x02\x02\u0879\u087A\x05\u0132\x9A\x02\u087A\u087B\x07\u0100\x02\x02\u087B" +
		"\u087C\x05\xFE\x80\x02\u087C\u0911\x03\x02\x02\x02\u087D\u0886\x07\xF8" +
		"\x02\x02\u087E\u0883\x05\u0132\x9A\x02\u087F\u0880\x07\xF6\x02\x02\u0880" +
		"\u0882\x05\u0132\x9A\x02\u0881\u087F\x03\x02\x02\x02\u0882\u0885\x03\x02" +
		"\x02\x02\u0883\u0881\x03\x02\x02\x02\u0883\u0884\x03\x02\x02\x02\u0884" +
		"\u0887\x03\x02\x02\x02\u0885\u0883\x03\x02\x02\x02\u0886\u087E\x03\x02" +
		"\x02\x02\u0886\u0887\x03\x02\x02\x02\u0887\u0888\x03\x02\x02\x02\u0888" +
		"\u0889\x07\xF9\x02\x02\u0889\u088A\x07\u0100\x02\x02\u088A\u0911\x05\xFE" +
		"\x80\x02\u088B\u088C\x07\xF8\x02\x02\u088C\u088D\x05\xA6T\x02\u088D\u088E" +
		"\x07\xF9\x02\x02\u088E\u0911\x03\x02\x02\x02\u088F\u0890\x07D\x02\x02" +
		"\u0890\u0891\x07\xF8\x02\x02\u0891\u0892\x05\xA6T\x02\u0892\u0893\x07" +
		"\xF9\x02\x02\u0893\u0911\x03\x02\x02\x02\u0894\u0895\x07\x1E\x02\x02\u0895" +
		"\u0897\x05\u0104\x83\x02\u0896\u0898\x05\u011C\x8F\x02\u0897\u0896\x03" +
		"\x02\x02\x02\u0898\u0899\x03\x02\x02\x02\u0899\u0897\x03\x02\x02\x02\u0899" +
		"\u089A\x03\x02\x02\x02\u089A\u089D\x03\x02\x02\x02\u089B\u089C\x07=\x02" +
		"\x02\u089C\u089E\x05\xFE\x80\x02\u089D\u089B\x03\x02\x02\x02\u089D\u089E" +
		"\x03\x02\x02\x02\u089E\u089F\x03\x02\x02\x02\u089F\u08A0\x07?\x02\x02" +
		"\u08A0\u0911\x03\x02\x02\x02\u08A1\u08A3\x07\x1E\x02\x02\u08A2\u08A4\x05" +
		"\u011C\x8F\x02\u08A3\u08A2\x03\x02\x02\x02\u08A4\u08A5\x03\x02\x02\x02" +
		"\u08A5\u08A3\x03\x02\x02\x02\u08A5\u08A6\x03\x02\x02\x02\u08A6\u08A9\x03" +
		"\x02\x02\x02\u08A7\u08A8\x07=\x02\x02\u08A8\u08AA\x05\xFE\x80\x02\u08A9" +
		"\u08A7\x03\x02\x02\x02\u08A9\u08AA\x03\x02\x02\x02\u08AA\u08AB\x03\x02" +
		"\x02\x02\u08AB\u08AC\x07?\x02\x02\u08AC\u0911\x03\x02\x02\x02\u08AD\u08AE" +
		"\x07\x1F\x02\x02\u08AE\u08AF\x07\xF8\x02\x02\u08AF\u08B0\x05\xFE\x80\x02" +
		"\u08B0\u08B1\x07\v\x02\x02\u08B1\u08B2\x05\u0116\x8C\x02\u08B2\u08B3\x07" +
		"\xF9\x02\x02\u08B3\u0911\x03\x02\x02\x02\u08B4\u08B5\x07\xC5\x02\x02\u08B5" +
		"\u08B6\x07\xF8\x02\x02\u08B6\u08B7\x05\xFE\x80\x02\u08B7\u08B8\x07\v\x02" +
		"\x02\u08B8\u08B9\x05\u0116\x8C\x02\u08B9\u08BA\x07\xF9\x02\x02\u08BA\u0911" +
		"\x03\x02\x02\x02\u08BB\u08BC\x07\n\x02\x02\u08BC\u08C5\x07\xFA\x02\x02" +
		"\u08BD\u08C2\x05\xFE\x80\x02\u08BE\u08BF\x07\xF6\x02\x02\u08BF\u08C1\x05" +
		"\xFE\x80\x02\u08C0\u08BE\x03\x02\x02\x02\u08C1\u08C4\x03\x02\x02\x02\u08C2" +
		"\u08C0\x03\x02\x02\x02\u08C2\u08C3\x03\x02\x02\x02\u08C3\u08C6\x03\x02" +
		"\x02\x02\u08C4\u08C2\x03\x02\x02\x02\u08C5\u08BD\x03\x02\x02\x02\u08C5" +
		"\u08C6\x03\x02\x02\x02\u08C6\u08C7\x03\x02\x02\x02\u08C7\u0911\x07\xFB" +
		"\x02\x02\u08C8\u0911\x05\u0132\x9A\x02\u08C9\u0911\x07*\x02\x02\u08CA" +
		"\u08CE\x07,\x02\x02\u08CB\u08CC\x07\xF8\x02\x02\u08CC\u08CD\x07\u0104" +
		"\x02\x02\u08CD\u08CF\x07\xF9\x02\x02\u08CE\u08CB\x03\x02\x02\x02\u08CE" +
		"\u08CF\x03\x02\x02\x02\u08CF\u0911\x03\x02\x02\x02\u08D0\u08D4\x07-\x02" +
		"\x02\u08D1\u08D2\x07\xF8\x02\x02\u08D2\u08D3\x07\u0104\x02\x02\u08D3\u08D5" +
		"\x07\xF9\x02\x02\u08D4\u08D1\x03\x02\x02\x02\u08D4\u08D5\x03\x02\x02\x02" +
		"\u08D5\u0911\x03\x02\x02\x02\u08D6\u08DA\x07w\x02\x02\u08D7\u08D8\x07" +
		"\xF8\x02\x02\u08D8\u08D9\x07\u0104\x02\x02\u08D9\u08DB\x07\xF9\x02\x02" +
		"\u08DA\u08D7\x03\x02\x02\x02\u08DA\u08DB\x03\x02\x02\x02\u08DB\u0911\x03" +
		"\x02\x02\x02\u08DC\u08E0\x07x\x02\x02\u08DD\u08DE\x07\xF8\x02\x02\u08DE" +
		"\u08DF\x07\u0104\x02\x02\u08DF\u08E1\x07\xF9\x02\x02\u08E0\u08DD\x03\x02" +
		"\x02\x02\u08E0\u08E1\x03\x02\x02\x02\u08E1\u0911\x03\x02\x02\x02\u08E2" +
		"\u0911\x07.\x02\x02\u08E3\u0911\x07+\x02\x02\u08E4\u08E5\x07\xBA\x02\x02" +
		"\u08E5\u08E6\x07\xF8\x02\x02\u08E6\u08E7\x05\u0104\x83\x02\u08E7\u08E8" +
		"\x07T\x02\x02\u08E8\u08EB\x05\u0104\x83\x02\u08E9\u08EA\x07P\x02\x02\u08EA" +
		"\u08EC\x05\u0104\x83\x02\u08EB\u08E9\x03\x02\x02\x02\u08EB\u08EC\x03\x02" +
		"\x02\x02\u08EC\u08ED\x03\x02\x02\x02\u08ED\u08EE\x07\xF9\x02\x02\u08EE" +
		"\u0911\x03\x02\x02\x02\u08EF\u08F0\x07\x84\x02\x02\u08F0\u08F1\x07\xF8" +
		"\x02\x02\u08F1\u08F4\x05\u0104\x83\x02\u08F2\u08F3\x07\xF6\x02\x02\u08F3" +
		"\u08F5\x05\u0114\x8B\x02\u08F4\u08F2\x03\x02\x02\x02\u08F4\u08F5\x03\x02" +
		"\x02\x02\u08F5\u08F6\x03\x02\x02\x02\u08F6\u08F7\x07\xF9\x02\x02\u08F7" +
		"\u0911\x03\x02\x02\x02\u08F8\u08F9\x07F\x02\x02\u08F9\u08FA\x07\xF8\x02" +
		"\x02\u08FA\u08FB\x05\u0132\x9A\x02\u08FB\u08FC\x07T\x02\x02\u08FC\u08FD" +
		"\x05\u0104\x83\x02\u08FD\u08FE\x07\xF9\x02\x02\u08FE\u0911\x03\x02\x02" +
		"\x02\u08FF\u0900\x07\xF8\x02\x02\u0900\u0901\x05\xFE\x80\x02\u0901\u0902" +
		"\x07\xF9\x02\x02\u0902\u0911\x03\x02\x02\x02\u0903\u0904\x07Z\x02\x02" +
		"\u0904\u090D\x07\xF8\x02\x02\u0905\u090A\x05\u012E\x98\x02\u0906\u0907" +
		"\x07\xF6\x02\x02\u0907\u0909\x05\u012E\x98\x02\u0908\u0906\x03\x02\x02" +
		"\x02\u0909\u090C\x03\x02\x02\x02\u090A\u0908\x03\x02\x02\x02\u090A\u090B" +
		"\x03\x02\x02\x02\u090B\u090E\x03\x02\x02\x02\u090C\u090A\x03\x02\x02\x02" +
		"\u090D\u0905\x03\x02\x02\x02\u090D\u090E\x03\x02\x02\x02\u090E\u090F\x03" +
		"\x02\x02\x02\u090F\u0911\x07\xF9\x02\x02\u0910\u081A\x03\x02\x02\x02\u0910" +
		"\u081C\x03\x02\x02\x02\u0910\u081D\x03\x02\x02\x02\u0910\u0820\x03\x02" +
		"\x02\x02\u0910\u0822\x03\x02\x02\x02\u0910\u0823\x03\x02\x02\x02\u0910" +
		"\u0824\x03\x02\x02\x02\u0910\u0825\x03\x02\x02\x02\u0910\u0826\x03\x02" +
		"\x02\x02\u0910\u0827\x03\x02\x02\x02\u0910\u082E\x03\x02\x02\x02\u0910" +
		"\u0841\x03\x02\x02\x02\u0910\u084D\x03\x02\x02\x02\u0910\u0857\x03\x02" +
		"\x02\x02\u0910\u0879\x03\x02\x02\x02\u0910\u087D\x03\x02\x02\x02\u0910" +
		"\u088B\x03\x02\x02\x02\u0910\u088F\x03\x02\x02\x02\u0910\u0894\x03\x02" +
		"\x02\x02\u0910\u08A1\x03\x02\x02\x02\u0910\u08AD\x03\x02\x02\x02\u0910" +
		"\u08B4\x03\x02\x02\x02\u0910\u08BB\x03\x02\x02\x02\u0910\u08C8\x03\x02" +
		"\x02\x02\u0910\u08C9\x03\x02\x02\x02\u0910\u08CA\x03\x02\x02\x02\u0910" +
		"\u08D0\x03\x02\x02\x02\u0910\u08D6\x03\x02\x02\x02\u0910\u08DC\x03\x02" +
		"\x02\x02\u0910\u08E2\x03\x02\x02\x02\u0910\u08E3\x03\x02\x02\x02\u0910" +
		"\u08E4\x03\x02\x02\x02\u0910\u08EF\x03\x02\x02\x02\u0910\u08F8\x03\x02" +
		"\x02\x02\u0910\u08FF\x03\x02\x02\x02\u0910\u0903\x03\x02\x02\x02\u0911" +
		"\u091C\x03\x02\x02\x02\u0912\u0913\f\x11\x02\x02\u0913\u0914\x07\xFA\x02" +
		"\x02\u0914\u0915\x05\u0104\x83\x02\u0915\u0916\x07\xFB\x02\x02\u0916\u091B" +
		"\x03\x02\x02\x02\u0917\u0918\f\x0F\x02\x02\u0918\u0919\x07\xF4\x02\x02" +
		"\u0919\u091B\x05\u0132\x9A\x02\u091A\u0912\x03\x02\x02\x02\u091A\u0917" +
		"\x03\x02\x02\x02\u091B\u091E\x03\x02\x02\x02\u091C\u091A\x03\x02\x02\x02" +
		"\u091C\u091D\x03\x02\x02\x02\u091D\u0107\x03\x02\x02\x02\u091E\u091C\x03" +
		"\x02\x02\x02\u091F\u0926\x07\u0101\x02\x02\u0920\u0923\x07\u0102\x02\x02" +
		"\u0921\u0922\x07\xC8\x02\x02\u0922\u0924\x07\u0101\x02\x02\u0923\u0921" +
		"\x03\x02\x02\x02\u0923\u0924\x03\x02\x02\x02\u0924\u0926\x03\x02\x02\x02" +
		"\u0925\u091F\x03\x02\x02\x02\u0925\u0920\x03\x02\x02\x02\u0926\u0109\x03" +
		"\x02\x02\x02\u0927\u0928\t\x1A\x02\x02\u0928\u010B\x03\x02\x02\x02\u0929" +
		"\u092A\t\x1B\x02\x02\u092A\u010D\x03\x02\x02\x02\u092B\u092C\t\x1C\x02" +
		"\x02\u092C\u010F\x03\x02\x02\x02\u092D\u092E\x07\u0104\x02\x02\u092E\u093C" +
		"\x05\u0112\x8A\x02\u092F\u0930\x07\xF8\x02\x02\u0930\u0931\x07\u0104\x02" +
		"\x02\u0931\u0932\x07\xF9\x02\x02\u0932\u093C\x05\u0112\x8A\x02\u0933\u0934" +
		"\x07g\x02\x02\u0934\u0935\x07\u0104\x02\x02\u0935\u093C\x05\u0112\x8A" +
		"\x02\u0936\u0937\x07g\x02\x02\u0937\u0938\x07\xF8\x02\x02\u0938\u0939" +
		"\x07\u0104\x02\x02\u0939\u093A\x07\xF9\x02\x02\u093A\u093C\x05\u0112\x8A" +
		"\x02\u093B\u092D\x03\x02\x02\x02\u093B\u092F\x03\x02\x02\x02\u093B\u0933" +
		"\x03\x02\x02\x02\u093B\u0936\x03\x02\x02\x02\u093C\u0111\x03\x02\x02\x02" +
		"\u093D\u093E\t\x1D\x02\x02\u093E\u0113\x03\x02\x02\x02\u093F\u0940\t\x1E" +
		"\x02\x02\u0940\u0115\x03\x02\x02\x02\u0941\u0942\b\x8C\x01\x02\u0942\u0943" +
		"\x07\n\x02\x02\u0943\u0944\x07\xEA\x02\x02\u0944\u0945\x05\u0116\x8C\x02" +
		"\u0945\u0946\x07\xEC\x02\x02\u0946\u096E\x03\x02\x02\x02\u0947\u0948\x07" +
		"z\x02\x02\u0948\u0949\x07\xEA\x02\x02\u0949\u094A\x05\u0116\x8C\x02\u094A" +
		"\u094B\x07\xF6\x02\x02\u094B\u094C\x05\u0116\x8C\x02\u094C\u094D\x07\xEC" +
		"\x02\x02\u094D\u096E\x03\x02\x02\x02\u094E\u094F\x07\xB8\x02\x02\u094F" +
		"\u0950\x07\xEA\x02\x02\u0950\u0951\x05\u0132\x9A\x02\u0951\u0952\x07\xF7" +
		"\x02\x02\u0952\u095A\x05\u0116\x8C\x02\u0953\u0954\x07\xF6\x02\x02\u0954" +
		"\u0955\x05\u0132\x9A\x02\u0955\u0956\x07\xF7\x02\x02\u0956\u0957\x05\u0116" +
		"\x8C\x02\u0957\u0959\x03\x02\x02\x02\u0958\u0953\x03\x02\x02\x02\u0959" +
		"\u095C\x03\x02\x02\x02\u095A\u0958\x03\x02\x02\x02\u095A\u095B\x03\x02" +
		"\x02\x02\u095B\u095D\x03\x02\x02\x02\u095C\u095A\x03\x02\x02\x02\u095D" +
		"\u095E\x07\xEC\x02\x02\u095E\u096E\x03\x02\x02\x02\u095F\u096B\x05\u011A" +
		"\x8E\x02\u0960\u0961\x07\xF8\x02\x02\u0961\u0966\x05\u0118\x8D\x02\u0962" +
		"\u0963\x07\xF6\x02\x02\u0963\u0965\x05\u0118\x8D\x02\u0964\u0962\x03\x02" +
		"\x02\x02\u0965\u0968\x03\x02\x02\x02\u0966\u0964\x03\x02\x02\x02\u0966" +
		"\u0967\x03\x02\x02\x02\u0967\u0969\x03\x02\x02\x02\u0968\u0966\x03\x02" +
		"\x02\x02\u0969\u096A\x07\xF9\x02\x02\u096A\u096C\x03\x02\x02\x02\u096B" +
		"\u0960\x03\x02\x02\x02\u096B\u096C\x03\x02\x02\x02\u096C\u096E\x03\x02" +
		"\x02\x02\u096D\u0941\x03\x02\x02\x02\u096D\u0947\x03\x02\x02\x02\u096D" +
		"\u094E\x03\x02\x02\x02\u096D\u095F\x03\x02\x02\x02\u096E\u0973\x03\x02" +
		"\x02\x02\u096F\u0970\f\x07\x02\x02\u0970\u0972\x07\n\x02\x02\u0971\u096F" +
		"\x03\x02\x02\x02\u0972\u0975\x03\x02\x02\x02\u0973\u0971\x03\x02\x02\x02" +
		"\u0973\u0974\x03\x02\x02\x02\u0974\u0117\x03\x02\x02\x02\u0975\u0973\x03" +
		"\x02\x02\x02\u0976\u0979\x07\u0104\x02\x02\u0977\u0979\x05\u0116\x8C\x02" +
		"\u0978\u0976\x03\x02\x02\x02\u0978\u0977\x03\x02\x02\x02\u0979\u0119\x03" +
		"\x02\x02\x02\u097A\u097F\x07\u010B\x02\x02\u097B\u097F\x07\u010C\x02\x02" +
		"\u097C\u097F\x07\u010D\x02\x02\u097D\u097F\x05\u0132\x9A\x02\u097E\u097A" +
		"\x03\x02\x02\x02\u097E\u097B\x03\x02\x02\x02\u097E\u097C\x03\x02\x02\x02" +
		"\u097E\u097D\x03\x02\x02\x02\u097F\u011B\x03\x02\x02\x02\u0980\u0981\x07" +
		"\xD7\x02\x02\u0981\u0982\x05\xFE\x80\x02\u0982\u0983\x07\xC2\x02\x02\u0983" +
		"\u0984\x05\xFE\x80\x02\u0984\u011D\x03\x02\x02\x02\u0985\u0986\x07L\x02" +
		"\x02\u0986\u0987\x07\xF8\x02\x02\u0987\u0988\x07\xD8\x02\x02\u0988\u0989" +
		"\x05\u0100\x81\x02\u0989\u098A\x07\xF9\x02\x02\u098A\u011F\x03\x02\x02" +
		"\x02\u098B\u098C\x07\x90\x02\x02\u098C\u0997\x07\xF8\x02\x02\u098D\u098E" +
		"\x07\x92\x02\x02\u098E\u098F\x07\x1C\x02\x02\u098F\u0994\x05\xFE\x80\x02" +
		"\u0990\u0991\x07\xF6\x02\x02\u0991\u0993\x05\xFE\x80\x02\u0992\u0990\x03" +
		"\x02\x02\x02\u0993\u0996\x03\x02\x02\x02\u0994\u0992\x03\x02\x02\x02\u0994" +
		"\u0995\x03\x02\x02\x02\u0995\u0998\x03\x02\x02\x02\u0996\u0994\x03\x02" +
		"\x02\x02\u0997\u098D\x03\x02\x02\x02\u0997\u0998\x03\x02\x02\x02\u0998" +
		"\u09A3\x03\x02\x02\x02\u0999\u099A\x07\x8C\x02\x02\u099A\u099B\x07\x1C" +
		"\x02\x02\u099B\u09A0\x05\xDEp\x02\u099C\u099D\x07\xF6\x02\x02\u099D\u099F" +
		"\x05\xDEp\x02\u099E\u099C\x03\x02\x02\x02\u099F\u09A2\x03\x02\x02\x02" +
		"\u09A0\u099E\x03\x02\x02\x02\u09A0\u09A1\x03\x02\x02\x02\u09A1\u09A4\x03" +
		"\x02\x02\x02\u09A2\u09A0\x03\x02\x02\x02\u09A3\u0999\x03\x02\x02\x02\u09A3" +
		"\u09A4\x03\x02\x02\x02\u09A4\u09A6\x03\x02\x02\x02\u09A5\u09A7\x05\u0122" +
		"\x92\x02\u09A6\u09A5\x03\x02\x02\x02\u09A6\u09A7\x03\x02\x02\x02\u09A7" +
		"\u09A8\x03\x02\x02\x02\u09A8\u09A9\x07\xF9\x02\x02\u09A9\u0121\x03\x02" +
		"\x02\x02\u09AA\u09AB\x07\x9B\x02\x02\u09AB\u09BB\x05\u0124\x93\x02\u09AC" +
		"\u09AD\x07\xAA\x02\x02\u09AD\u09BB\x05\u0124\x93\x02\u09AE\u09AF\x07\x9B" +
		"\x02\x02\u09AF\u09B0\x07\x11\x02\x02\u09B0\u09B1\x05\u0124\x93\x02\u09B1" +
		"\u09B2\x07\x07\x02\x02\u09B2\u09B3\x05\u0124\x93\x02\u09B3\u09BB\x03\x02" +
		"\x02\x02\u09B4\u09B5\x07\xAA\x02\x02\u09B5\u09B6\x07\x11\x02\x02\u09B6" +
		"\u09B7\x05\u0124\x93\x02\u09B7\u09B8\x07\x07\x02\x02\u09B8\u09B9\x05\u0124" +
		"\x93\x02\u09B9\u09BB\x03\x02\x02\x02\u09BA\u09AA\x03\x02\x02\x02\u09BA" +
		"\u09AC\x03\x02\x02\x02\u09BA\u09AE\x03\x02\x02\x02\u09BA\u09B4\x03\x02" +
		"\x02\x02\u09BB\u0123\x03\x02\x02\x02\u09BC\u09BD\x07\xC9\x02\x02\u09BD" +
		"\u09C6\x07\x96\x02\x02\u09BE\u09BF\x07\xC9\x02\x02\u09BF\u09C6\x07O\x02" +
		"\x02\u09C0\u09C1\x07)\x02\x02\u09C1\u09C6\x07\xA9\x02\x02\u09C2\u09C3" +
		"\x05\xFE\x80\x02\u09C3\u09C4\t\x1F\x02\x02\u09C4\u09C6\x03\x02\x02\x02" +
		"\u09C5\u09BC\x03\x02\x02\x02\u09C5\u09BE\x03\x02\x02\x02\u09C5\u09C0\x03" +
		"\x02\x02\x02\u09C5\u09C2\x03\x02\x02\x02\u09C6\u0125\x03\x02\x02\x02\u09C7" +
		"\u09C8\x05\u0132\x9A\x02\u09C8\u09C9\x07\xF4\x02\x02\u09C9\u09CA\x05\u0132" +
		"\x9A\x02\u09CA\u09CD\x03\x02\x02\x02\u09CB\u09CD\x05\u0132\x9A\x02\u09CC" +
		"\u09C7\x03\x02\x02\x02\u09CC\u09CB\x03\x02\x02\x02\u09CD\u0127\x03\x02" +
		"\x02\x02\u09CE\u09D3\x05\u0126\x94\x02\u09CF\u09D0\x07\xF6\x02\x02\u09D0" +
		"\u09D2\x05\u0126\x94\x02\u09D1\u09CF\x03\x02\x02\x02\u09D2\u09D5\x03\x02" +
		"\x02\x02\u09D3\u09D1\x03\x02\x02\x02\u09D3\u09D4\x03\x02\x02\x02\u09D4" +
		"\u0129\x03\x02\x02\x02\u09D5\u09D3\x03\x02\x02\x02\u09D6\u09E4\x07\x04" +
		"\x02\x02\u09D7\u09E4\x07\x06\x02\x02\u09D8\u09E4\x07<\x02\x02\u09D9\u09E4" +
		"\x07\'\x02\x02\u09DA\u09E4\x07e\x02\x02\u09DB\u09E4\x07\xA3\x02\x02\u09DC" +
		"\u09E1\x07\xAF\x02\x02\u09DD\u09DE\x07\xF8\x02\x02\u09DE\u09DF\x05\u0132" +
		"\x9A\x02\u09DF\u09E0\x07\xF9\x02\x02\u09E0\u09E2\x03\x02\x02\x02\u09E1" +
		"\u09DD\x03\x02\x02\x02\u09E1\u09E2\x03\x02\x02\x02\u09E2\u09E4\x03\x02" +
		"\x02\x02\u09E3\u09D6\x03\x02\x02\x02\u09E3\u09D7\x03\x02\x02\x02\u09E3" +
		"\u09D8\x03\x02\x02\x02\u09E3\u09D9\x03\x02\x02\x02\u09E3\u09DA\x03\x02" +
		"\x02\x02\u09E3\u09DB\x03\x02\x02\x02\u09E3\u09DC\x03\x02\x02\x02\u09E4" +
		"\u012B\x03\x02\x02\x02\u09E5\u09E6\t \x02\x02\u09E6\u012D\x03\x02\x02" +
		"\x02\u09E7\u09EC\x05\u0132\x9A\x02\u09E8\u09E9\x07\xF4\x02\x02\u09E9\u09EB" +
		"\x05\u0132\x9A\x02\u09EA\u09E8\x03\x02\x02\x02\u09EB\u09EE\x03\x02\x02" +
		"\x02\u09EC\u09EA\x03\x02\x02\x02\u09EC\u09ED\x03\x02\x02\x02\u09ED\u012F" +
		"\x03\x02\x02\x02\u09EE\u09EC\x03\x02\x02\x02\u09EF\u09F0\x07\xA7\x02\x02" +
		"\u09F0\u09F6\x05\u0132\x9A\x02\u09F1\u09F2\x07\xCE\x02\x02\u09F2\u09F6" +
		"\x05\u0132\x9A\x02\u09F3\u09F4\x07Y\x02\x02\u09F4\u09F6\x05\u0132\x9A" +
		"\x02\u09F5\u09EF\x03\x02\x02\x02\u09F5\u09F1\x03\x02\x02\x02\u09F5\u09F3" +
		"\x03\x02\x02\x02\u09F6\u0131\x03\x02\x02\x02\u09F7\u09FD\x07\u0107\x02" +
		"\x02\u09F8\u09FD\x07\u0101\x02\x02\u09F9\u09FD\x05\u0136\x9C\x02\u09FA" +
		"\u09FD\x07\u010A\x02\x02\u09FB\u09FD\x07\u0108\x02\x02\u09FC\u09F7\x03" +
		"\x02\x02\x02\u09FC\u09F8\x03\x02\x02\x02\u09FC\u09F9\x03\x02\x02\x02\u09FC" +
		"\u09FA\x03\x02\x02\x02\u09FC\u09FB\x03\x02\x02\x02\u09FD\u0133\x03\x02" +
		"\x02\x02\u09FE\u0A00\x07\xEF\x02\x02\u09FF\u09FE\x03\x02\x02\x02\u09FF" +
		"\u0A00\x03\x02\x02\x02\u0A00\u0A01\x03\x02\x02\x02\u0A01\u0A0B\x07\u0105" +
		"\x02\x02\u0A02\u0A04\x07\xEF\x02\x02\u0A03\u0A02\x03\x02\x02\x02\u0A03" +
		"\u0A04\x03\x02\x02\x02\u0A04\u0A05\x03\x02\x02\x02\u0A05\u0A0B\x07\u0106" +
		"\x02\x02\u0A06\u0A08\x07\xEF\x02\x02\u0A07\u0A06\x03\x02\x02\x02\u0A07" +
		"\u0A08\x03\x02\x02\x02\u0A08\u0A09\x03\x02\x02\x02\u0A09\u0A0B\x07\u0104" +
		"\x02\x02\u0A0A\u09FF\x03\x02\x02\x02\u0A0A\u0A03\x03\x02\x02\x02\u0A0A" +
		"\u0A07\x03\x02\x02\x02\u0A0B\u0135\x03\x02\x02\x02\u0A0C\u0A0D\t!\x02" +
		"\x02\u0A0D\u0137\x03\x02\x02\x02\u014C\u013A\u013E\u0159\u0168\u016C\u0170" +
		"\u0179\u017E\u0182\u0188\u018A\u018F\u0193\u0197\u019E\u01A3\u01A9\u01AD" +
		"\u01B6\u01BD\u01C1\u01C6\u01C8\u01CD\u01D1\u01D8\u01DC\u01E1\u01E5\u01E9" +
		"\u01ED\u01F5\u01FA\u01FE\u0206\u020A\u0213\u0216\u0219\u021F\u0226\u0231" +
		"\u0236\u023B\u0240\u0245\u024E\u0251\u0254\u0258\u0272\u028C\u0295\u029F" +
		"\u02A2\u02B0\u02C2\u02C4\u02CD\u02D8\u02E1\u02E8\u02EC\u02F3\u02F9\u02FC" +
		"\u0301\u0308\u0316\u0323\u0328\u032D\u0333\u0357\u035A\u0360\u0363\u0369" +
		"\u036F\u037B\u037D\u0385\u038C\u0391\u0395\u039A\u039E\u03A2\u03A8\u03AC" +
		"\u03B0\u03B9\u03BC\u03BF\u03C7\u03D5\u03DC\u03E9\u03EF\u03F4\u03F7\u03FA" +
		"\u03FF\u0403\u040C\u0411\u0417\u041B\u0420\u0425\u0428\u0430\u0433\u0437" +
		"\u0443\u0446\u044A\u044F\u0453\u0461\u0466\u046D\u0470\u0476\u0479\u0480" +
		"\u0483\u0487\u048C\u048F\u0496\u0499\u04A7\u04B5\u04B9\u04BD\u04CE\u04D0" +
		"\u04D9\u04E4\u04EA\u04EF\u04F2\u04FF\u0509\u050D\u0512\u051D\u0522\u0535" +
		"\u0539\u053E\u0543\u0548\u054C\u0555\u0558\u055C\u0563\u056E\u0574\u0578" +
		"\u057E\u0588\u058F\u0594\u0599\u059E\u05A4\u05A7\u05B0\u05B3\u05B6\u05BC" +
		"\u05C6\u05C9\u05CD\u05D1\u05D7\u05DD\u05E0\u05E3\u05E7\u05F1\u05FC\u0601" +
		"\u0604\u0608\u060F\u0619\u0625\u062B\u062D\u0636\u0639\u0640\u064A\u0650" +
		"\u0658\u0663\u066D\u0678\u067A\u0680\u0685\u068F\u0692\u0698\u069A\u06A2" +
		"\u06A8\u06AB\u06AD\u06B9\u06C0\u06C4\u06C8\u06CC\u06CF\u06D6\u06DF\u06E2" +
		"\u06E6\u06EB\u06EF\u06F2\u06F9\u0704\u0707\u070B\u070F\u071A\u071D\u0724" +
		"\u0732\u0736\u073A\u073E\u0742\u0746\u074A\u074E\u0758\u0763\u0768\u0775" +
		"\u0777\u077D\u0781\u0783\u078B\u079C\u07A2\u07AD\u07B4\u07B8\u07C0\u07C2" +
		"\u07CF\u07D7\u07E0\u07E6\u07EE\u07F4\u07FA\u07FF\u0804\u080A\u0815\u0817" +
		"\u0832\u0838\u083C\u0848\u0852\u0855\u085A\u0861\u0864\u086D\u0870\u0874" +
		"\u0877\u0883\u0886\u0899\u089D\u08A5\u08A9\u08C2\u08C5\u08CE\u08D4\u08DA" +
		"\u08E0\u08EB\u08F4\u090A\u090D\u0910\u091A\u091C\u0923\u0925\u093B\u095A" +
		"\u0966\u096B\u096D\u0973\u0978\u097E\u0994\u0997\u09A0\u09A3\u09A6\u09BA" +
		"\u09C5\u09CC\u09D3\u09E1\u09E3\u09EC\u09F5\u09FC\u09FF\u0A03\u0A07\u0A0A";
	public static readonly _serializedATN: string = Utils.join(
		[
			ImpalaSqlParser._serializedATNSegment0,
			ImpalaSqlParser._serializedATNSegment1,
			ImpalaSqlParser._serializedATNSegment2,
			ImpalaSqlParser._serializedATNSegment3,
			ImpalaSqlParser._serializedATNSegment4,
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
	public EOF(): TerminalNode { return this.getToken(ImpalaSqlParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParser.SEMICOLON);
		} else {
			return this.getToken(ImpalaSqlParser.SEMICOLON, i);
		}
	}
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
	public statementDefault(): StatementDefaultContext | undefined {
		return this.tryGetRuleContext(0, StatementDefaultContext);
	}
	public use(): UseContext | undefined {
		return this.tryGetRuleContext(0, UseContext);
	}
	public createStatement(): CreateStatementContext | undefined {
		return this.tryGetRuleContext(0, CreateStatementContext);
	}
	public alterStatement(): AlterStatementContext | undefined {
		return this.tryGetRuleContext(0, AlterStatementContext);
	}
	public truncateTable(): TruncateTableContext | undefined {
		return this.tryGetRuleContext(0, TruncateTableContext);
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
	public addComments(): AddCommentsContext | undefined {
		return this.tryGetRuleContext(0, AddCommentsContext);
	}
	public explain(): ExplainContext | undefined {
		return this.tryGetRuleContext(0, ExplainContext);
	}
	public setSession(): SetSessionContext | undefined {
		return this.tryGetRuleContext(0, SetSessionContext);
	}
	public shutdown(): ShutdownContext | undefined {
		return this.tryGetRuleContext(0, ShutdownContext);
	}
	public invalidateMeta(): InvalidateMetaContext | undefined {
		return this.tryGetRuleContext(0, InvalidateMetaContext);
	}
	public loadData(): LoadDataContext | undefined {
		return this.tryGetRuleContext(0, LoadDataContext);
	}
	public refreshStatement(): RefreshStatementContext | undefined {
		return this.tryGetRuleContext(0, RefreshStatementContext);
	}
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


export class StatementDefaultContext extends ParserRuleContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_statementDefault; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterStatementDefault) {
			listener.enterStatementDefault(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitStatementDefault) {
			listener.exitStatementDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitStatementDefault) {
			return visitor.visitStatementDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UseContext extends ParserRuleContext {
	public _schema!: IdentifierContext;
	public KW_USE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_USE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_use; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterUse) {
			listener.enterUse(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitUse) {
			listener.exitUse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitUse) {
			return visitor.visitUse(this);
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
	public _tblName!: QualifiedNameContext;
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public createCommonItem(): CreateCommonItemContext {
		return this.getRuleContext(0, CreateCommonItemContext);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public partitionedBy(): PartitionedByContext | undefined {
		return this.tryGetRuleContext(0, PartitionedByContext);
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
	public _tblName!: QualifiedNameContext;
	public _likeTableName!: QualifiedNameContext;
	public _parquet!: StringLiteralContext;
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public KW_LIKE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_LIKE, 0); }
	public createCommonItem(): CreateCommonItemContext {
		return this.getRuleContext(0, CreateCommonItemContext);
	}
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
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
	public _tblName!: QualifiedNameContext;
	public _tblProp!: PropertiesContext;
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
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
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_AS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public alterSchema(): AlterSchemaContext | undefined {
		return this.tryGetRuleContext(0, AlterSchemaContext);
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
	public editColumnDefine(): EditColumnDefineContext | undefined {
		return this.tryGetRuleContext(0, EditColumnDefineContext);
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


export class AlterSchemaContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_DATABASE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DATABASE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_alterSchema; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAlterSchema) {
			listener.enterAlterSchema(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAlterSchema) {
			listener.exitAlterSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterSchema) {
			return visitor.visitAlterSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterStatsKeyContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SET, 0); }
	public KW_COLUMN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_COLUMN, 0); }
	public KW_STATS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_STATS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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


export class EditColumnDefineContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_editColumnDefine; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterEditColumnDefine) {
			listener.enterEditColumnDefine(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitEditColumnDefine) {
			listener.exitEditColumnDefine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitEditColumnDefine) {
			return visitor.visitEditColumnDefine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterDropSingleColumnContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DROP, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_ADD(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ADD, 0); }
	public KW_COLUMN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_COLUMN, 0); }
	public columnSpecWithKudu(): ColumnSpecWithKuduContext {
		return this.getRuleContext(0, ColumnSpecWithKuduContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_AS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
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
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
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
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SET, 0); }
	public KW_OWNER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_OWNER, 0); }
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
	public _from!: QualifiedNameContext;
	public _to!: QualifiedNameContext;
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public KW_RENAME(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_RENAME, 0); }
	public KW_TO(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TO, 0); }
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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


export class TruncateTableContext extends ParserRuleContext {
	public KW_TRUNCATE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TRUNCATE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TABLE, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_truncateTable; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterTruncateTable) {
			listener.enterTruncateTable(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitTruncateTable) {
			listener.exitTruncateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitTruncateTable) {
			return visitor.visitTruncateTable(this);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public dropViewOrTable(): DropViewOrTableContext | undefined {
		return this.tryGetRuleContext(0, DropViewOrTableContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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


export class DropViewOrTableContext extends ParserRuleContext {
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DROP, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_VIEW(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_VIEW, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TABLE, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	public KW_PURGE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PURGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_dropViewOrTable; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDropViewOrTable) {
			listener.enterDropViewOrTable(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDropViewOrTable) {
			listener.exitDropViewOrTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDropViewOrTable) {
			return visitor.visitDropViewOrTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropIncrementalStatsContext extends ParserRuleContext {
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DROP, 0); }
	public KW_STATS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_STATS, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
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
	public showGrant(): ShowGrantContext | undefined {
		return this.tryGetRuleContext(0, ShowGrantContext);
	}
	public showFiles(): ShowFilesContext | undefined {
		return this.tryGetRuleContext(0, ShowFilesContext);
	}
	public showPartitions(): ShowPartitionsContext | undefined {
		return this.tryGetRuleContext(0, ShowPartitionsContext);
	}
	public showColumnOrTableStats(): ShowColumnOrTableStatsContext | undefined {
		return this.tryGetRuleContext(0, ShowColumnOrTableStatsContext);
	}
	public showCreateViewOrTable(): ShowCreateViewOrTableContext | undefined {
		return this.tryGetRuleContext(0, ShowCreateViewOrTableContext);
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
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FROM, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_IN, 0); }
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
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
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


export class ShowCreateViewOrTableContext extends ParserRuleContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_CREATE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_VIEW(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_VIEW, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_showCreateViewOrTable; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowCreateViewOrTable) {
			listener.enterShowCreateViewOrTable(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowCreateViewOrTable) {
			listener.exitShowCreateViewOrTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowCreateViewOrTable) {
			return visitor.visitShowCreateViewOrTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowColumnOrTableStatsContext extends ParserRuleContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_STATS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_STATS, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_COLUMN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_COLUMN, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_showColumnOrTableStats; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowColumnOrTableStats) {
			listener.enterShowColumnOrTableStats(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowColumnOrTableStats) {
			listener.exitShowColumnOrTableStats(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowColumnOrTableStats) {
			return visitor.visitShowColumnOrTableStats(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowPartitionsContext extends ParserRuleContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_PARTITIONS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_PARTITIONS, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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


export class ShowGrantContext extends ParserRuleContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_GRANT(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_GRANT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_USER, 0); }
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ROLE, 0); }
	public KW_GROUP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_GROUP, 0); }
	public KW_ON(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ON, 0); }
	public KW_SERVER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SERVER, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DATABASE, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TABLE, 0); }
	public KW_COLUMN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_COLUMN, 0); }
	public KW_URI(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_URI, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_showGrant; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowGrant) {
			listener.enterShowGrant(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowGrant) {
			listener.exitShowGrant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowGrant) {
			return visitor.visitShowGrant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddCommentsContext extends ParserRuleContext {
	public KW_COMMENT(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_COMMENT, 0); }
	public KW_ON(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_ON, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_IS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_IS, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DATABASE, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TABLE, 0); }
	public KW_COLUMN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_COLUMN, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_addComments; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAddComments) {
			listener.enterAddComments(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAddComments) {
			listener.exitAddComments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAddComments) {
			return visitor.visitAddComments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplainContext extends ParserRuleContext {
	public KW_EXPLAIN(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_EXPLAIN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_explain; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterExplain) {
			listener.enterExplain(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitExplain) {
			listener.exitExplain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitExplain) {
			return visitor.visitExplain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetSessionContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_setSession; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSetSession) {
			listener.enterSetSession(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSetSession) {
			listener.exitSetSession(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSetSession) {
			return visitor.visitSetSession(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShutdownContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_shutdown; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShutdown) {
			listener.enterShutdown(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShutdown) {
			listener.exitShutdown(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShutdown) {
			return visitor.visitShutdown(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InvalidateMetaContext extends ParserRuleContext {
	public KW_INVALIDATE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_INVALIDATE, 0); }
	public KW_METADATA(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_METADATA, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_invalidateMeta; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterInvalidateMeta) {
			listener.enterInvalidateMeta(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitInvalidateMeta) {
			listener.exitInvalidateMeta(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitInvalidateMeta) {
			return visitor.visitInvalidateMeta(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoadDataContext extends ParserRuleContext {
	public KW_LOAD(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_LOAD, 0); }
	public KW_DATA(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_DATA, 0); }
	public KW_INPATH(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_INPATH, 0); }
	public STRING(): TerminalNode { return this.getToken(ImpalaSqlParser.STRING, 0); }
	public KW_INTO(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_INTO, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_loadData; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterLoadData) {
			listener.enterLoadData(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitLoadData) {
			listener.exitLoadData(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitLoadData) {
			return visitor.visitLoadData(this);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
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


export class QueryContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_query; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
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
	public _tblName!: QualifiedNameContext;
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
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


export class RelationPrimaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParser.RULE_relationPrimary; }
	public copyFrom(ctx: RelationPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class TableNameContext extends RelationPrimaryContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterTableName) {
			listener.enterTableName(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitTableName) {
			listener.exitTableName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitTableName) {
			return visitor.visitTableName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubqueryRelationContext extends RelationPrimaryContext {
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterSubqueryRelation) {
			listener.enterSubqueryRelation(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitSubqueryRelation) {
			listener.exitSubqueryRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitSubqueryRelation) {
			return visitor.visitSubqueryRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnnestContext extends RelationPrimaryContext {
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
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class LateralContext extends RelationPrimaryContext {
	public KW_LATERAL(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_LATERAL, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterLateral) {
			listener.enterLateral(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitLateral) {
			listener.exitLateral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitLateral) {
			return visitor.visitLateral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedRelationContext extends RelationPrimaryContext {
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public relation(): RelationContext {
		return this.getRuleContext(0, RelationContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
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
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.LPAREN, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParser.RPAREN, 0); }
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
	public KW_LIKE(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_LIKE, 0); }
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
	public KW_REGEXP(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_REGEXP, 0); }
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
export class NullPredicateContext extends PredicateContext {
	public KW_IS(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_IS, 0); }
	public KW_NULL(): TerminalNode { return this.getToken(ImpalaSqlParser.KW_NULL, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterNullPredicate) {
			listener.enterNullPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitNullPredicate) {
			listener.exitNullPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitNullPredicate) {
			return visitor.visitNullPredicate(this);
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
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
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
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
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
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
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


export class NonReservedContext extends ParserRuleContext {
	public KW_ADD(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ADD, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ALL, 0); }
	public KW_ANY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ANY, 0); }
	public KW_ARRAY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ARRAY, 0); }
	public KW_ASC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ASC, 0); }
	public KW_AT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_AT, 0); }
	public KW_BERNOULLI(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_BERNOULLI, 0); }
	public KW_CASCADE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CASCADE, 0); }
	public KW_COLUMN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_COLUMN, 0); }
	public KW_COLUMNS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_COLUMNS, 0); }
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_COMMENT, 0); }
	public KW_CURRENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_CURRENT, 0); }
	public KW_DATA(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DATA, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DATABASE, 0); }
	public KW_DATABASES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DATABASES, 0); }
	public KW_DAY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DAY, 0); }
	public KW_DAYS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DAYS, 0); }
	public KW_DESC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DESC, 0); }
	public KW_EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_EXCLUDING, 0); }
	public KW_EXPLAIN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_EXPLAIN, 0); }
	public KW_FILTER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FILTER, 0); }
	public KW_FIRST(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FIRST, 0); }
	public KW_FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FOLLOWING, 0); }
	public KW_FORMAT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FORMAT, 0); }
	public KW_FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_FUNCTIONS, 0); }
	public KW_GRANT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_GRANT, 0); }
	public KW_HOUR(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_HOUR, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_IF, 0); }
	public KW_INCLUDING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_INCLUDING, 0); }
	public KW_INTERVAL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_INTERVAL, 0); }
	public KW_LAST(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LAST, 0); }
	public KW_LATERAL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LATERAL, 0); }
	public KW_LIMIT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_LIMIT, 0); }
	public KW_MAP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_MAP, 0); }
	public KW_MINUTE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_MINUTE, 0); }
	public KW_MONTH(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_MONTH, 0); }
	public KW_NFC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NFC, 0); }
	public KW_NFD(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NFD, 0); }
	public KW_NFKC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NFKC, 0); }
	public KW_NFKD(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NFKD, 0); }
	public KW_NULLS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_NULLS, 0); }
	public KW_OFFSET(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_OFFSET, 0); }
	public KW_OPTION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_OPTION, 0); }
	public KW_ORDINALITY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ORDINALITY, 0); }
	public KW_OVER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_OVER, 0); }
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PARTITION, 0); }
	public KW_PARTITIONS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PARTITIONS, 0); }
	public KW_PARQUET(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PARQUET, 0); }
	public KW_POSITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_POSITION, 0); }
	public KW_PRECEDING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PRECEDING, 0); }
	public KW_PRIVILEGES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PRIVILEGES, 0); }
	public KW_PROPERTIES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_PROPERTIES, 0); }
	public KW_RANGE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_RANGE, 0); }
	public KW_RENAME(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_RENAME, 0); }
	public KW_REPEATABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_REPEATABLE, 0); }
	public KW_REPLACE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_REPLACE, 0); }
	public KW_RESTRICT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_RESTRICT, 0); }
	public KW_REVOKE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_REVOKE, 0); }
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ROLE, 0); }
	public KW_ROLES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ROLES, 0); }
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ROW, 0); }
	public KW_ROWS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_ROWS, 0); }
	public KW_SCHEMA(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SCHEMA, 0); }
	public KW_SCHEMAS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SCHEMAS, 0); }
	public KW_SECOND(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SECOND, 0); }
	public KW_SECONDS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SECONDS, 0); }
	public KW_SET(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SET, 0); }
	public KW_SHOW(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SHOW, 0); }
	public KW_SOME(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SOME, 0); }
	public KW_STATS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_STATS, 0); }
	public KW_SUBSTRING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SUBSTRING, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_SYSTEM, 0); }
	public KW_TABLES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TABLES, 0); }
	public KW_TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TABLESAMPLE, 0); }
	public KW_TRUNCATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TRUNCATE, 0); }
	public KW_TO(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TO, 0); }
	public KW_TRY_CAST(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_TRY_CAST, 0); }
	public KW_UNBOUNDED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_UNBOUNDED, 0); }
	public KW_USE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_USE, 0); }
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_USER, 0); }
	public KW_VIEW(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_VIEW, 0); }
	public KW_VIEWS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_VIEWS, 0); }
	public KW_YEAR(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_YEAR, 0); }
	public KW_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParser.KW_DEFAULT, 0); }
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


