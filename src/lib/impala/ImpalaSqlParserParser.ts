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


export class ImpalaSqlParserParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly KW_ADD = 1;
	public static readonly KW_ADMIN = 2;
	public static readonly KW_ALL = 3;
	public static readonly KW_ANALYZE = 4;
	public static readonly KW_ANALYTIC = 5;
	public static readonly KW_ALTER = 6;
	public static readonly KW_AND = 7;
	public static readonly KW_ANY = 8;
	public static readonly KW_ANTI = 9;
	public static readonly KW_ARCHIVE = 10;
	public static readonly KW_ARRAY = 11;
	public static readonly KW_AS = 12;
	public static readonly KW_ASC = 13;
	public static readonly KW_AT = 14;
	public static readonly KW_AGGREGATE = 15;
	public static readonly KW_AUTHORIZATION = 16;
	public static readonly KW_BERNOULLI = 17;
	public static readonly KW_BETWEEN = 18;
	public static readonly KW_BLOCK_SIZE = 19;
	public static readonly KW_PARTITIONED = 20;
	public static readonly KW_PREPARE_FN = 21;
	public static readonly KW_TEMPORARY = 22;
	public static readonly KW_EXTERNAL = 23;
	public static readonly KW_CLOSEFN = 24;
	public static readonly KW_SORT = 25;
	public static readonly KW_SORTED = 26;
	public static readonly KW_BUCKETS = 27;
	public static readonly KW_PURGE = 28;
	public static readonly KW_STORED = 29;
	public static readonly KW_LOCATION = 30;
	public static readonly KW_TBLPROPERTIES = 31;
	public static readonly KW_DBPROPERTIES = 32;
	public static readonly KW_BY = 33;
	public static readonly KW_CALL = 34;
	public static readonly KW_CASCADE = 35;
	public static readonly KW_CASE = 36;
	public static readonly KW_CAST = 37;
	public static readonly KW_CACHED = 38;
	public static readonly KW_CATALOGS = 39;
	public static readonly KW_CHANGE = 40;
	public static readonly KW_COLUMN = 41;
	public static readonly KW_COLUMNS = 42;
	public static readonly KW_COMMENT = 43;
	public static readonly KW_COMMIT = 44;
	public static readonly KW_COMMITTED = 45;
	public static readonly KW_COMPRESSION = 46;
	public static readonly KW_COMPUTE = 47;
	public static readonly KW_CONSTRAINT = 48;
	public static readonly KW_CREATE = 49;
	public static readonly KW_CROSS = 50;
	public static readonly KW_CUBE = 51;
	public static readonly KW_CURRENT = 52;
	public static readonly KW_CURRENT_DATE = 53;
	public static readonly KW_CURRENT_PATH = 54;
	public static readonly KW_CURRENT_ROLE = 55;
	public static readonly KW_CURRENT_TIME = 56;
	public static readonly KW_CURRENT_TIMESTAMP = 57;
	public static readonly KW_CURRENT_USER = 58;
	public static readonly KW_DATA = 59;
	public static readonly KW_DATABASE = 60;
	public static readonly KW_DATABASES = 61;
	public static readonly KW_DATE = 62;
	public static readonly KW_DAY = 63;
	public static readonly KW_DAYS = 64;
	public static readonly KW_DEALLOCATE = 65;
	public static readonly KW_DEFINER = 66;
	public static readonly KW_DELETE = 67;
	public static readonly KW_DEFAULT = 68;
	public static readonly KW_DELIMITED = 69;
	public static readonly KW_DISABLE = 70;
	public static readonly KW_UPDATE = 71;
	public static readonly KW_DESC = 72;
	public static readonly KW_DESCRIBE = 73;
	public static readonly KW_DISTINCT = 74;
	public static readonly KW_DROP = 75;
	public static readonly KW_ELSE = 76;
	public static readonly KW_ENABLE = 77;
	public static readonly KW_ENCODING = 78;
	public static readonly KW_END = 79;
	public static readonly KW_ESCAPE = 80;
	public static readonly KW_ESCAPED = 81;
	public static readonly KW_EXCEPT = 82;
	public static readonly KW_EXCLUDING = 83;
	public static readonly KW_EXECUTE = 84;
	public static readonly KW_EXISTS = 85;
	public static readonly KW_EXPLAIN = 86;
	public static readonly KW_EXTRACT = 87;
	public static readonly KW_EXTENDED = 88;
	public static readonly KW_FALSE = 89;
	public static readonly KW_FETCH = 90;
	public static readonly KW_FIELDS = 91;
	public static readonly KW_FILE = 92;
	public static readonly KW_FILEFORMAT = 93;
	public static readonly KW_FILES = 94;
	public static readonly KW_FILTER = 95;
	public static readonly KW_FIRST = 96;
	public static readonly KW_FINALIZE_FN = 97;
	public static readonly KW_FOLLOWING = 98;
	public static readonly KW_FOR = 99;
	public static readonly KW_FORMAT = 100;
	public static readonly KW_FORMATTED = 101;
	public static readonly KW_FOREIGN = 102;
	public static readonly KW_FROM = 103;
	public static readonly KW_FULL = 104;
	public static readonly KW_FUNCTION = 105;
	public static readonly KW_FUNCTIONS = 106;
	public static readonly KW_GRANT = 107;
	public static readonly KW_GRANTED = 108;
	public static readonly KW_GRANTS = 109;
	public static readonly KW_GRAPHVIZ = 110;
	public static readonly KW_GROUP = 111;
	public static readonly KW_GROUPING = 112;
	public static readonly KW_HASH = 113;
	public static readonly KW_HAVING = 114;
	public static readonly KW_HOUR = 115;
	public static readonly KW_HOURS = 116;
	public static readonly KW_IF = 117;
	public static readonly KW_IN = 118;
	public static readonly KW_INCLUDING = 119;
	public static readonly KW_INCREMENTAL = 120;
	public static readonly KW_INNER = 121;
	public static readonly KW_INPATH = 122;
	public static readonly KW_INPUT = 123;
	public static readonly KW_INSERT = 124;
	public static readonly KW_INTERSECT = 125;
	public static readonly KW_INTERVAL = 126;
	public static readonly KW_INTERMEDIATE = 127;
	public static readonly KW_INTO = 128;
	public static readonly KW_INVOKER = 129;
	public static readonly KW_INIT_FN = 130;
	public static readonly KW_INVALIDATE = 131;
	public static readonly KW_IO = 132;
	public static readonly KW_IS = 133;
	public static readonly KW_ISOLATION = 134;
	public static readonly KW_JAR = 135;
	public static readonly KW_JSON = 136;
	public static readonly KW_JOIN = 137;
	public static readonly KW_KEY = 138;
	public static readonly KW_KUDU = 139;
	public static readonly KW_LAST = 140;
	public static readonly KW_LATERAL = 141;
	public static readonly KW_LEFT = 142;
	public static readonly KW_LEVEL = 143;
	public static readonly KW_LIKE = 144;
	public static readonly KW_LIMIT = 145;
	public static readonly KW_LINES = 146;
	public static readonly KW_LOAD = 147;
	public static readonly KW_LOCALTIME = 148;
	public static readonly KW_LOCALTIMESTAMP = 149;
	public static readonly KW_LOGICAL = 150;
	public static readonly KW_METADATA = 151;
	public static readonly KW_MATERIALIZED = 152;
	public static readonly KW_MAP = 153;
	public static readonly KW_MINUTE = 154;
	public static readonly KW_MINUTES = 155;
	public static readonly KW_MONTH = 156;
	public static readonly KW_MONTHS = 157;
	public static readonly KW_NATURAL = 158;
	public static readonly KW_MERGE_FN = 159;
	public static readonly KW_NEXT = 160;
	public static readonly KW_NFC = 161;
	public static readonly KW_NFD = 162;
	public static readonly KW_NFKC = 163;
	public static readonly KW_NFKD = 164;
	public static readonly KW_NO = 165;
	public static readonly KW_NONE = 166;
	public static readonly KW_NORMALIZE = 167;
	public static readonly KW_NOT = 168;
	public static readonly KW_NULL = 169;
	public static readonly KW_NULLIF = 170;
	public static readonly KW_NULLS = 171;
	public static readonly KW_OFFSET = 172;
	public static readonly KW_ON = 173;
	public static readonly KW_ONLY = 174;
	public static readonly KW_OPTION = 175;
	public static readonly KW_OR = 176;
	public static readonly KW_ORDER = 177;
	public static readonly KW_ORDINALITY = 178;
	public static readonly KW_OUTER = 179;
	public static readonly KW_OUTPUT = 180;
	public static readonly KW_OWNER = 181;
	public static readonly KW_OVER = 182;
	public static readonly KW_OVERWRITE = 183;
	public static readonly KW_PARTITION = 184;
	public static readonly KW_PARTITIONS = 185;
	public static readonly KW_PATH = 186;
	public static readonly KW_PARQUET = 187;
	public static readonly KW_POSITION = 188;
	public static readonly KW_PRECEDING = 189;
	public static readonly KW_PREPARE = 190;
	public static readonly KW_PRIMARY = 191;
	public static readonly KW_REPLICATION = 192;
	public static readonly KW_PRIVILEGES = 193;
	public static readonly KW_PROPERTIES = 194;
	public static readonly KW_RANGE = 195;
	public static readonly KW_READ = 196;
	public static readonly KW_RELOAD = 197;
	public static readonly KW_RECOVER = 198;
	public static readonly KW_RECURSIVE = 199;
	public static readonly KW_RENAME = 200;
	public static readonly KW_REPEATABLE = 201;
	public static readonly KW_REPLACE = 202;
	public static readonly KW_REWRITE = 203;
	public static readonly KW_RESET = 204;
	public static readonly KW_RESTRICT = 205;
	public static readonly KW_RETURNS = 206;
	public static readonly KW_REVOKE = 207;
	public static readonly KW_REFRESH = 208;
	public static readonly KW_REGEXP = 209;
	public static readonly KW_RLIKE = 210;
	public static readonly KW_RIGHT = 211;
	public static readonly KW_ROLE = 212;
	public static readonly KW_ROLES = 213;
	public static readonly KW_ROLLBACK = 214;
	public static readonly KW_ROLLUP = 215;
	public static readonly KW_ROW = 216;
	public static readonly KW_ROWS = 217;
	public static readonly KW_SCHEMA = 218;
	public static readonly KW_SCHEMAS = 219;
	public static readonly KW_SECOND = 220;
	public static readonly KW_SECONDS = 221;
	public static readonly KW_SECURITY = 222;
	public static readonly KW_SELECT = 223;
	public static readonly KW_SERDE = 224;
	public static readonly KW_SERDEPROPERTIES = 225;
	public static readonly KW_SERIALIZABLE = 226;
	public static readonly KW_SESSION = 227;
	public static readonly KW_SET = 228;
	public static readonly KW_SETS = 229;
	public static readonly KW_SEMI = 230;
	public static readonly KW_SERVER = 231;
	public static readonly KW_SHOW = 232;
	public static readonly KW_SHUTDOWN = 233;
	public static readonly KW_SOME = 234;
	public static readonly KW_START = 235;
	public static readonly KW_STATS = 236;
	public static readonly KW_STRUCT = 237;
	public static readonly KW_STRAIGHT_JOIN = 238;
	public static readonly KW_SUBSTRING = 239;
	public static readonly KW_SYSTEM = 240;
	public static readonly KW_SYMBOL = 241;
	public static readonly KW_SERIALIZE_FN = 242;
	public static readonly KW_TABLE = 243;
	public static readonly KW_TABLES = 244;
	public static readonly KW_TABLESAMPLE = 245;
	public static readonly KW_TEXT = 246;
	public static readonly KW_TERMINATED = 247;
	public static readonly KW_THEN = 248;
	public static readonly KW_TIES = 249;
	public static readonly KW_TIME = 250;
	public static readonly KW_TIMESTAMP = 251;
	public static readonly KW_TO = 252;
	public static readonly KW_TRANSACTION = 253;
	public static readonly KW_TRUE = 254;
	public static readonly KW_TRY_CAST = 255;
	public static readonly KW_TRUNCATE = 256;
	public static readonly KW_TYPE = 257;
	public static readonly KW_UNCACHED = 258;
	public static readonly KW_UESCAPE = 259;
	public static readonly KW_UNBOUNDED = 260;
	public static readonly KW_UNCOMMITTED = 261;
	public static readonly KW_UNION = 262;
	public static readonly KW_UNNEST = 263;
	public static readonly KW_UNSET = 264;
	public static readonly KW_USE = 265;
	public static readonly KW_USER = 266;
	public static readonly KW_USING = 267;
	public static readonly KW_UPDATE_FN = 268;
	public static readonly KW_UPSERT = 269;
	public static readonly KW_URI = 270;
	public static readonly KW_VALIDATE = 271;
	public static readonly KW_VALUE = 272;
	public static readonly KW_VALUES = 273;
	public static readonly KW_VERBOSE = 274;
	public static readonly KW_VIEW = 275;
	public static readonly KW_VIEWS = 276;
	public static readonly KW_WHEN = 277;
	public static readonly KW_WHERE = 278;
	public static readonly KW_WITH = 279;
	public static readonly KW_WORK = 280;
	public static readonly KW_WRITE = 281;
	public static readonly KW_YEAR = 282;
	public static readonly KW_YEARS = 283;
	public static readonly KW_ZONE = 284;
	public static readonly KW_TEXTFILE = 285;
	public static readonly KW_ORC = 286;
	public static readonly KW_AVRO = 287;
	public static readonly KW_SEQUENCEFILE = 288;
	public static readonly KW_RCFILE = 289;
	public static readonly KW_REFERENCES = 290;
	public static readonly KW_NOVALIDATE = 291;
	public static readonly KW_RELY = 292;
	public static readonly STATS_NUMDVS = 293;
	public static readonly STATS_NUMNULLS = 294;
	public static readonly STATS_AVGSIZE = 295;
	public static readonly STATS_MAXSIZE = 296;
	public static readonly EQ = 297;
	public static readonly NEQ = 298;
	public static readonly LT = 299;
	public static readonly LTE = 300;
	public static readonly GT = 301;
	public static readonly GTE = 302;
	public static readonly PLUS = 303;
	public static readonly MINUS = 304;
	public static readonly ASTERISK = 305;
	public static readonly SLASH = 306;
	public static readonly PERCENT = 307;
	public static readonly CONCAT = 308;
	public static readonly DOT = 309;
	public static readonly SEMICOLON = 310;
	public static readonly COMMA = 311;
	public static readonly COLON = 312;
	public static readonly LPAREN = 313;
	public static readonly RPAREN = 314;
	public static readonly LSQUARE = 315;
	public static readonly RSQUARE = 316;
	public static readonly LCURLY = 317;
	public static readonly RCURLY = 318;
	public static readonly BITWISEOR = 319;
	public static readonly QUESTION = 320;
	public static readonly STRING = 321;
	public static readonly UNICODE_STRING = 322;
	public static readonly BINARY_LITERAL = 323;
	public static readonly INTEGER_VALUE = 324;
	public static readonly DECIMAL_VALUE = 325;
	public static readonly DOUBLE_VALUE = 326;
	public static readonly IDENTIFIER = 327;
	public static readonly DIGIT_IDENTIFIER = 328;
	public static readonly QUOTED_IDENTIFIER = 329;
	public static readonly BACKQUOTED_IDENTIFIER = 330;
	public static readonly TIME_WITH_TIME_ZONE = 331;
	public static readonly TIMESTAMP_WITH_TIME_ZONE = 332;
	public static readonly DOUBLE_PRECISION = 333;
	public static readonly SIMPLE_COMMENT = 334;
	public static readonly BRACKETED_COMMENT = 335;
	public static readonly WS = 336;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_createCommonItem = 2;
	public static readonly RULE_assignmentList = 3;
	public static readonly RULE_assignmentItem = 4;
	public static readonly RULE_viewColumns = 5;
	public static readonly RULE_query = 6;
	public static readonly RULE_with = 7;
	public static readonly RULE_constraintSpecification = 8;
	public static readonly RULE_foreignKeySpecification = 9;
	public static readonly RULE_columnDefinition = 10;
	public static readonly RULE_kuduTableElement = 11;
	public static readonly RULE_kuduColumnDefinition = 12;
	public static readonly RULE_columnSpecWithKudu = 13;
	public static readonly RULE_kuduAttributes = 14;
	public static readonly RULE_kuduStorageAttr = 15;
	public static readonly RULE_statsKey = 16;
	public static readonly RULE_fileFormat = 17;
	public static readonly RULE_kuduPartitionClause = 18;
	public static readonly RULE_hashClause = 19;
	public static readonly RULE_rangeClause = 20;
	public static readonly RULE_kuduPartitionSpec = 21;
	public static readonly RULE_cacheSpec = 22;
	public static readonly RULE_rangeOperator = 23;
	public static readonly RULE_partitionCol = 24;
	public static readonly RULE_likeClause = 25;
	public static readonly RULE_hintClause = 26;
	public static readonly RULE_properties = 27;
	public static readonly RULE_partitionedBy = 28;
	public static readonly RULE_sortedBy = 29;
	public static readonly RULE_rowFormat = 30;
	public static readonly RULE_property = 31;
	public static readonly RULE_queryNoWith = 32;
	public static readonly RULE_queryTerm = 33;
	public static readonly RULE_queryPrimary = 34;
	public static readonly RULE_sortItem = 35;
	public static readonly RULE_querySpecification = 36;
	public static readonly RULE_groupBy = 37;
	public static readonly RULE_groupingElement = 38;
	public static readonly RULE_groupingSet = 39;
	public static readonly RULE_namedQuery = 40;
	public static readonly RULE_setQuantifier = 41;
	public static readonly RULE_selectItem = 42;
	public static readonly RULE_relation = 43;
	public static readonly RULE_joinType = 44;
	public static readonly RULE_joinCriteria = 45;
	public static readonly RULE_sampledRelation = 46;
	public static readonly RULE_sampleType = 47;
	public static readonly RULE_aliasedRelation = 48;
	public static readonly RULE_columnAliases = 49;
	public static readonly RULE_relationPrimary = 50;
	public static readonly RULE_expression = 51;
	public static readonly RULE_booleanExpression = 52;
	public static readonly RULE_predicate = 53;
	public static readonly RULE_valueExpression = 54;
	public static readonly RULE_primaryExpression = 55;
	public static readonly RULE_string = 56;
	public static readonly RULE_comparisonOperator = 57;
	public static readonly RULE_comparisonQuantifier = 58;
	public static readonly RULE_booleanValue = 59;
	public static readonly RULE_interval = 60;
	public static readonly RULE_intervalField = 61;
	public static readonly RULE_normalForm = 62;
	public static readonly RULE_type = 63;
	public static readonly RULE_typeParameter = 64;
	public static readonly RULE_baseType = 65;
	public static readonly RULE_whenClause = 66;
	public static readonly RULE_filter = 67;
	public static readonly RULE_over = 68;
	public static readonly RULE_windowFrame = 69;
	public static readonly RULE_frameBound = 70;
	public static readonly RULE_pathElement = 71;
	public static readonly RULE_pathSpecification = 72;
	public static readonly RULE_privilege = 73;
	public static readonly RULE_objectType = 74;
	public static readonly RULE_qualifiedName = 75;
	public static readonly RULE_principal = 76;
	public static readonly RULE_identifier = 77;
	public static readonly RULE_number = 78;
	public static readonly RULE_nonReserved = 79;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "createCommonItem", "assignmentList", "assignmentItem", 
		"viewColumns", "query", "with", "constraintSpecification", "foreignKeySpecification", 
		"columnDefinition", "kuduTableElement", "kuduColumnDefinition", "columnSpecWithKudu", 
		"kuduAttributes", "kuduStorageAttr", "statsKey", "fileFormat", "kuduPartitionClause", 
		"hashClause", "rangeClause", "kuduPartitionSpec", "cacheSpec", "rangeOperator", 
		"partitionCol", "likeClause", "hintClause", "properties", "partitionedBy", 
		"sortedBy", "rowFormat", "property", "queryNoWith", "queryTerm", "queryPrimary", 
		"sortItem", "querySpecification", "groupBy", "groupingElement", "groupingSet", 
		"namedQuery", "setQuantifier", "selectItem", "relation", "joinType", "joinCriteria", 
		"sampledRelation", "sampleType", "aliasedRelation", "columnAliases", "relationPrimary", 
		"expression", "booleanExpression", "predicate", "valueExpression", "primaryExpression", 
		"string", "comparisonOperator", "comparisonQuantifier", "booleanValue", 
		"interval", "intervalField", "normalForm", "type", "typeParameter", "baseType", 
		"whenClause", "filter", "over", "windowFrame", "frameBound", "pathElement", 
		"pathSpecification", "privilege", "objectType", "qualifiedName", "principal", 
		"identifier", "number", "nonReserved",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'ADD'", "'ADMIN'", "'ALL'", "'ANALYZE'", "'ANALYTIC'", "'ALTER'", 
		"'AND'", "'ANY'", "'ANTI'", "'ARCHIVE'", "'ARRAY'", "'AS'", "'ASC'", "'AT'", 
		"'AGGREGATE'", "'AUTHORIZATION'", "'BERNOULLI'", "'BETWEEN'", "'BLOCK_SIZE'", 
		"'PARTITIONED'", "'PREPARE_FN'", "'TEMPORARY'", "'EXTERNAL'", "'CLOSEFN'", 
		"'SORT'", "'SORTED'", "'BUCKETS'", "'PURGE'", "'STORED'", "'LOCATION'", 
		"'TBLPROPERTIES'", "'DBPROPERTIES'", "'BY'", "'CALL'", "'CASCADE'", "'CASE'", 
		"'CAST'", "'CACHED'", "'CATALOGS'", "'CHANGE'", "'COLUMN'", "'COLUMNS'", 
		"'COMMENT'", "'COMMIT'", "'COMMITTED'", "'COMPRESSION'", "'COMPUTE'", 
		"'CONSTRAINT'", "'CREATE'", "'CROSS'", "'CUBE'", "'CURRENT'", "'CURRENT_DATE'", 
		"'CURRENT_PATH'", "'CURRENT_ROLE'", "'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", 
		"'CURRENT_USER'", "'DATA'", "'DATABASE'", "'DATABASES'", "'DATE'", "'DAY'", 
		"'DAYS'", "'DEALLOCATE'", "'DEFINER'", "'DELETE'", "'DEFAULT'", "'DELIMITED'", 
		"'DISABLE'", "'UPDATE'", "'DESC'", "'DESCRIBE'", "'DISTINCT'", "'DROP'", 
		"'ELSE'", "'ENABLE'", "'ENCODING'", "'END'", "'ESCAPE'", "'ESCAPED'", 
		"'EXCEPT'", "'EXCLUDING'", "'EXECUTE'", "'EXISTS'", "'EXPLAIN'", "'EXTRACT'", 
		"'EXTENDED'", "'FALSE'", "'FETCH'", "'FIELDS'", "'FILE'", "'FILEFORMAT'", 
		"'FILES'", "'FILTER'", "'FIRST'", "'FINALIZE_FN'", "'FOLLOWING'", "'FOR'", 
		"'FORMAT'", "'FORMATTED'", "'FOREIGN'", "'FROM'", "'FULL'", "'FUNCTION'", 
		"'FUNCTIONS'", "'GRANT'", "'GRANTED'", "'GRANTS'", "'GRAPHVIZ'", "'GROUP'", 
		"'GROUPING'", "'HASH'", "'HAVING'", "'HOUR'", "'HOURS'", "'IF'", "'IN'", 
		"'INCLUDING'", "'INCREMENTAL'", "'INNER'", "'INPATH'", "'INPUT'", "'INSERT'", 
		"'INTERSECT'", "'INTERVAL'", "'INTERMEDIATE'", "'INTO'", "'INVOKER'", 
		"'INIT_FN'", "'INVALIDATE'", "'IO'", "'IS'", "'ISOLATION'", "'JAR'", "'JSON'", 
		"'JOIN'", "'KEY'", "'KUDU'", "'LAST'", "'LATERAL'", "'LEFT'", "'LEVEL'", 
		"'LIKE'", "'LIMIT'", "'LINES'", "'LOAD'", "'LOCALTIME'", "'LOCALTIMESTAMP'", 
		"'LOGICAL'", "'METADATA'", "'MATERIALIZED'", "'MAP'", "'MINUTE'", "'MINUTES'", 
		"'MONTH'", "'MONTHS'", "'NATURAL'", "'MERGE_FN'", "'NEXT'", "'NFC'", "'NFD'", 
		"'NFKC'", "'NFKD'", "'NO'", "'NONE'", "'NORMALIZE'", "'NOT'", "'NULL'", 
		"'NULLIF'", "'NULLS'", "'OFFSET'", "'ON'", "'ONLY'", "'OPTION'", "'OR'", 
		"'ORDER'", "'ORDINALITY'", "'OUTER'", "'OUTPUT'", "'OWNER'", "'OVER'", 
		"'OVERWRITE'", "'PARTITION'", "'PARTITIONS'", "'PATH'", "'PARQUET'", "'POSITION'", 
		"'PRECEDING'", "'PREPARE'", "'PRIMARY'", "'REPLICATION'", "'PRIVILEGES'", 
		"'PROPERTIES'", "'RANGE'", "'READ'", "'RELOAD'", "'RECOVER'", "'RECURSIVE'", 
		"'RENAME'", "'REPEATABLE'", "'REPLACE'", "'REWRITE'", "'RESET'", "'RESTRICT'", 
		"'RETURNS'", "'REVOKE'", "'REFRESH'", "'REGEXP'", "'RLIKE'", "'RIGHT'", 
		"'ROLE'", "'ROLES'", "'ROLLBACK'", "'ROLLUP'", "'ROW'", "'ROWS'", "'SCHEMA'", 
		"'SCHEMAS'", "'SECOND'", "'SECONDS'", "'SECURITY'", "'SELECT'", "'SERDE'", 
		"'SERDEPROPERTIES'", "'SERIALIZABLE'", "'SESSION'", "'SET'", "'SETS'", 
		"'SEMI'", "'SERVER'", "'SHOW'", "'SHUTDOWN'", "'SOME'", "'START'", "'STATS'", 
		"'STRUCT'", "'STRAIGHT_JOIN'", "'SUBSTRING'", "'SYSTEM'", "'SYMBOL'", 
		"'SERIALIZE_FN'", "'TABLE'", "'TABLES'", "'TABLESAMPLE'", "'TEXT'", "'TERMINATED '", 
		"'THEN'", "'TIES'", "'TIME'", "'TIMESTAMP'", "'TO'", "'TRANSACTION'", 
		"'TRUE'", "'TRY_CAST'", "'TRUNCATE'", "'TYPE'", "'UNCACHED'", "'UESCAPE'", 
		"'UNBOUNDED'", "'UNCOMMITTED'", "'UNION'", "'UNNEST'", "'UNSET'", "'USE'", 
		"'USER'", "'USING'", "'UPDATE_FN'", "'UPSERT'", "'URI'", "'VALIDATE'", 
		"'VALUE'", "'VALUES'", "'VERBOSE'", "'VIEW'", "'VIEWS'", "'WHEN'", "'WHERE'", 
		"'WITH'", "'WORK'", "'WRITE'", "'YEAR'", "'YEARS'", "'ZONE'", "'TEXTFILE'", 
		"'ORC'", "'AVRO'", "'SEQUENCEFILE'", "'RCFILE'", "'REFERENCES'", "'NOVALIDATE'", 
		"'RELY'", "''UMDVS''", "''UMNULLS''", "''VGSIZE''", "''AXSIZE''", "'='", 
		undefined, "'<'", "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", "'%'", 
		"'||'", "'.'", "';'", "','", "':'", "'('", "')'", "'['", "']'", "'{'", 
		"'}'", "'|'", "'?'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "KW_ANTI", "KW_ARCHIVE", "KW_ARRAY", "KW_AS", "KW_ASC", 
		"KW_AT", "KW_AGGREGATE", "KW_AUTHORIZATION", "KW_BERNOULLI", "KW_BETWEEN", 
		"KW_BLOCK_SIZE", "KW_PARTITIONED", "KW_PREPARE_FN", "KW_TEMPORARY", "KW_EXTERNAL", 
		"KW_CLOSEFN", "KW_SORT", "KW_SORTED", "KW_BUCKETS", "KW_PURGE", "KW_STORED", 
		"KW_LOCATION", "KW_TBLPROPERTIES", "KW_DBPROPERTIES", "KW_BY", "KW_CALL", 
		"KW_CASCADE", "KW_CASE", "KW_CAST", "KW_CACHED", "KW_CATALOGS", "KW_CHANGE", 
		"KW_COLUMN", "KW_COLUMNS", "KW_COMMENT", "KW_COMMIT", "KW_COMMITTED", 
		"KW_COMPRESSION", "KW_COMPUTE", "KW_CONSTRAINT", "KW_CREATE", "KW_CROSS", 
		"KW_CUBE", "KW_CURRENT", "KW_CURRENT_DATE", "KW_CURRENT_PATH", "KW_CURRENT_ROLE", 
		"KW_CURRENT_TIME", "KW_CURRENT_TIMESTAMP", "KW_CURRENT_USER", "KW_DATA", 
		"KW_DATABASE", "KW_DATABASES", "KW_DATE", "KW_DAY", "KW_DAYS", "KW_DEALLOCATE", 
		"KW_DEFINER", "KW_DELETE", "KW_DEFAULT", "KW_DELIMITED", "KW_DISABLE", 
		"KW_UPDATE", "KW_DESC", "KW_DESCRIBE", "KW_DISTINCT", "KW_DROP", "KW_ELSE", 
		"KW_ENABLE", "KW_ENCODING", "KW_END", "KW_ESCAPE", "KW_ESCAPED", "KW_EXCEPT", 
		"KW_EXCLUDING", "KW_EXECUTE", "KW_EXISTS", "KW_EXPLAIN", "KW_EXTRACT", 
		"KW_EXTENDED", "KW_FALSE", "KW_FETCH", "KW_FIELDS", "KW_FILE", "KW_FILEFORMAT", 
		"KW_FILES", "KW_FILTER", "KW_FIRST", "KW_FINALIZE_FN", "KW_FOLLOWING", 
		"KW_FOR", "KW_FORMAT", "KW_FORMATTED", "KW_FOREIGN", "KW_FROM", "KW_FULL", 
		"KW_FUNCTION", "KW_FUNCTIONS", "KW_GRANT", "KW_GRANTED", "KW_GRANTS", 
		"KW_GRAPHVIZ", "KW_GROUP", "KW_GROUPING", "KW_HASH", "KW_HAVING", "KW_HOUR", 
		"KW_HOURS", "KW_IF", "KW_IN", "KW_INCLUDING", "KW_INCREMENTAL", "KW_INNER", 
		"KW_INPATH", "KW_INPUT", "KW_INSERT", "KW_INTERSECT", "KW_INTERVAL", "KW_INTERMEDIATE", 
		"KW_INTO", "KW_INVOKER", "KW_INIT_FN", "KW_INVALIDATE", "KW_IO", "KW_IS", 
		"KW_ISOLATION", "KW_JAR", "KW_JSON", "KW_JOIN", "KW_KEY", "KW_KUDU", "KW_LAST", 
		"KW_LATERAL", "KW_LEFT", "KW_LEVEL", "KW_LIKE", "KW_LIMIT", "KW_LINES", 
		"KW_LOAD", "KW_LOCALTIME", "KW_LOCALTIMESTAMP", "KW_LOGICAL", "KW_METADATA", 
		"KW_MATERIALIZED", "KW_MAP", "KW_MINUTE", "KW_MINUTES", "KW_MONTH", "KW_MONTHS", 
		"KW_NATURAL", "KW_MERGE_FN", "KW_NEXT", "KW_NFC", "KW_NFD", "KW_NFKC", 
		"KW_NFKD", "KW_NO", "KW_NONE", "KW_NORMALIZE", "KW_NOT", "KW_NULL", "KW_NULLIF", 
		"KW_NULLS", "KW_OFFSET", "KW_ON", "KW_ONLY", "KW_OPTION", "KW_OR", "KW_ORDER", 
		"KW_ORDINALITY", "KW_OUTER", "KW_OUTPUT", "KW_OWNER", "KW_OVER", "KW_OVERWRITE", 
		"KW_PARTITION", "KW_PARTITIONS", "KW_PATH", "KW_PARQUET", "KW_POSITION", 
		"KW_PRECEDING", "KW_PREPARE", "KW_PRIMARY", "KW_REPLICATION", "KW_PRIVILEGES", 
		"KW_PROPERTIES", "KW_RANGE", "KW_READ", "KW_RELOAD", "KW_RECOVER", "KW_RECURSIVE", 
		"KW_RENAME", "KW_REPEATABLE", "KW_REPLACE", "KW_REWRITE", "KW_RESET", 
		"KW_RESTRICT", "KW_RETURNS", "KW_REVOKE", "KW_REFRESH", "KW_REGEXP", "KW_RLIKE", 
		"KW_RIGHT", "KW_ROLE", "KW_ROLES", "KW_ROLLBACK", "KW_ROLLUP", "KW_ROW", 
		"KW_ROWS", "KW_SCHEMA", "KW_SCHEMAS", "KW_SECOND", "KW_SECONDS", "KW_SECURITY", 
		"KW_SELECT", "KW_SERDE", "KW_SERDEPROPERTIES", "KW_SERIALIZABLE", "KW_SESSION", 
		"KW_SET", "KW_SETS", "KW_SEMI", "KW_SERVER", "KW_SHOW", "KW_SHUTDOWN", 
		"KW_SOME", "KW_START", "KW_STATS", "KW_STRUCT", "KW_STRAIGHT_JOIN", "KW_SUBSTRING", 
		"KW_SYSTEM", "KW_SYMBOL", "KW_SERIALIZE_FN", "KW_TABLE", "KW_TABLES", 
		"KW_TABLESAMPLE", "KW_TEXT", "KW_TERMINATED", "KW_THEN", "KW_TIES", "KW_TIME", 
		"KW_TIMESTAMP", "KW_TO", "KW_TRANSACTION", "KW_TRUE", "KW_TRY_CAST", "KW_TRUNCATE", 
		"KW_TYPE", "KW_UNCACHED", "KW_UESCAPE", "KW_UNBOUNDED", "KW_UNCOMMITTED", 
		"KW_UNION", "KW_UNNEST", "KW_UNSET", "KW_USE", "KW_USER", "KW_USING", 
		"KW_UPDATE_FN", "KW_UPSERT", "KW_URI", "KW_VALIDATE", "KW_VALUE", "KW_VALUES", 
		"KW_VERBOSE", "KW_VIEW", "KW_VIEWS", "KW_WHEN", "KW_WHERE", "KW_WITH", 
		"KW_WORK", "KW_WRITE", "KW_YEAR", "KW_YEARS", "KW_ZONE", "KW_TEXTFILE", 
		"KW_ORC", "KW_AVRO", "KW_SEQUENCEFILE", "KW_RCFILE", "KW_REFERENCES", 
		"KW_NOVALIDATE", "KW_RELY", "STATS_NUMDVS", "STATS_NUMNULLS", "STATS_AVGSIZE", 
		"STATS_MAXSIZE", "EQ", "NEQ", "LT", "LTE", "GT", "GTE", "PLUS", "MINUS", 
		"ASTERISK", "SLASH", "PERCENT", "CONCAT", "DOT", "SEMICOLON", "COMMA", 
		"COLON", "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "LCURLY", "RCURLY", 
		"BITWISEOR", "QUESTION", "STRING", "UNICODE_STRING", "BINARY_LITERAL", 
		"INTEGER_VALUE", "DECIMAL_VALUE", "DOUBLE_VALUE", "IDENTIFIER", "DIGIT_IDENTIFIER", 
		"QUOTED_IDENTIFIER", "BACKQUOTED_IDENTIFIER", "TIME_WITH_TIME_ZONE", "TIMESTAMP_WITH_TIME_ZONE", 
		"DOUBLE_PRECISION", "SIMPLE_COMMENT", "BRACKETED_COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ImpalaSqlParserParser._LITERAL_NAMES, ImpalaSqlParserParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ImpalaSqlParserParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ImpalaSqlParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return ImpalaSqlParserParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ImpalaSqlParserParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ImpalaSqlParserParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ImpalaSqlParserParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParserParser.T__5 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (ImpalaSqlParserParser.KW_COMMENT - 43)) | (1 << (ImpalaSqlParserParser.KW_COMPUTE - 43)) | (1 << (ImpalaSqlParserParser.KW_CREATE - 43)) | (1 << (ImpalaSqlParserParser.KW_DELETE - 43)) | (1 << (ImpalaSqlParserParser.KW_UPDATE - 43)) | (1 << (ImpalaSqlParserParser.KW_DESCRIBE - 43)))) !== 0) || _la === ImpalaSqlParserParser.KW_DROP || _la === ImpalaSqlParserParser.KW_EXPLAIN || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (ImpalaSqlParserParser.KW_GRANT - 107)) | (1 << (ImpalaSqlParserParser.KW_INSERT - 107)) | (1 << (ImpalaSqlParserParser.KW_INVALIDATE - 107)))) !== 0) || _la === ImpalaSqlParserParser.KW_LOAD || ((((_la - 207)) & ~0x1F) === 0 && ((1 << (_la - 207)) & ((1 << (ImpalaSqlParserParser.KW_REVOKE - 207)) | (1 << (ImpalaSqlParserParser.KW_REFRESH - 207)) | (1 << (ImpalaSqlParserParser.KW_SELECT - 207)) | (1 << (ImpalaSqlParserParser.KW_SET - 207)) | (1 << (ImpalaSqlParserParser.KW_SHOW - 207)))) !== 0) || ((((_la - 243)) & ~0x1F) === 0 && ((1 << (_la - 243)) & ((1 << (ImpalaSqlParserParser.KW_TABLE - 243)) | (1 << (ImpalaSqlParserParser.KW_TRUNCATE - 243)) | (1 << (ImpalaSqlParserParser.KW_USE - 243)) | (1 << (ImpalaSqlParserParser.KW_UPSERT - 243)) | (1 << (ImpalaSqlParserParser.KW_VALUES - 243)))) !== 0) || _la === ImpalaSqlParserParser.KW_WITH || _la === ImpalaSqlParserParser.COLON || _la === ImpalaSqlParserParser.LPAREN) {
				{
				{
				this.state = 160;
				this.statement();
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.SEMICOLON) {
					{
					this.state = 161;
					this.match(ImpalaSqlParserParser.SEMICOLON);
					}
				}

				}
				}
				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 169;
			this.match(ImpalaSqlParserParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, ImpalaSqlParserParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1160;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				_localctx = new StatementDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 171;
				this.query();
				}
				break;

			case 2:
				_localctx = new UseContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 172;
				this.match(ImpalaSqlParserParser.KW_USE);
				this.state = 173;
				(_localctx as UseContext)._schema = this.identifier();
				}
				break;

			case 3:
				_localctx = new CreateSchemaContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 174;
				this.match(ImpalaSqlParserParser.KW_CREATE);
				this.state = 175;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParserParser.KW_DATABASE || _la === ImpalaSqlParserParser.KW_SCHEMA)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 179;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 176;
					this.match(ImpalaSqlParserParser.KW_IF);
					this.state = 177;
					this.match(ImpalaSqlParserParser.KW_NOT);
					this.state = 178;
					this.match(ImpalaSqlParserParser.KW_EXISTS);
					}
					break;
				}
				this.state = 181;
				this.qualifiedName();
				this.state = 184;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 182;
					this.match(ImpalaSqlParserParser.KW_COMMENT);
					this.state = 183;
					(_localctx as CreateSchemaContext)._comment = this.string();
					}
					break;
				}
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_LOCATION) {
					{
					this.state = 186;
					this.match(ImpalaSqlParserParser.KW_LOCATION);
					this.state = 187;
					(_localctx as CreateSchemaContext)._location = this.string();
					}
				}

				}
				break;

			case 4:
				_localctx = new AlterSchemaContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 190;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 191;
				this.match(ImpalaSqlParserParser.KW_DATABASE);
				this.state = 192;
				this.qualifiedName();
				this.state = 193;
				this.match(ImpalaSqlParserParser.KW_SET);
				this.state = 194;
				this.match(ImpalaSqlParserParser.KW_OWNER);
				this.state = 195;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParserParser.KW_ROLE || _la === ImpalaSqlParserParser.KW_USER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 196;
				this.identifier();
				}
				break;

			case 5:
				_localctx = new DropSchemaContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 198;
				this.match(ImpalaSqlParserParser.KW_DROP);
				this.state = 199;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParserParser.KW_DATABASE || _la === ImpalaSqlParserParser.KW_SCHEMA)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 202;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 200;
					this.match(ImpalaSqlParserParser.KW_IF);
					this.state = 201;
					this.match(ImpalaSqlParserParser.KW_EXISTS);
					}
					break;
				}
				this.state = 204;
				this.qualifiedName();
				this.state = 206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_CASCADE || _la === ImpalaSqlParserParser.KW_RESTRICT) {
					{
					this.state = 205;
					_la = this._input.LA(1);
					if (!(_la === ImpalaSqlParserParser.KW_CASCADE || _la === ImpalaSqlParserParser.KW_RESTRICT)) {
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
				break;

			case 6:
				_localctx = new CreateTableSelectContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 208;
				this.match(ImpalaSqlParserParser.KW_CREATE);
				this.state = 210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_EXTERNAL) {
					{
					this.state = 209;
					this.match(ImpalaSqlParserParser.KW_EXTERNAL);
					}
				}

				this.state = 212;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 216;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 213;
					this.match(ImpalaSqlParserParser.KW_IF);
					this.state = 214;
					this.match(ImpalaSqlParserParser.KW_NOT);
					this.state = 215;
					this.match(ImpalaSqlParserParser.KW_EXISTS);
					}
					break;
				}
				this.state = 218;
				(_localctx as CreateTableSelectContext)._tblName = this.qualifiedName();
				this.state = 234;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 219;
					this.match(ImpalaSqlParserParser.LPAREN);
					this.state = 220;
					this.columnDefinition();
					this.state = 225;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 221;
							this.match(ImpalaSqlParserParser.COMMA);
							this.state = 222;
							this.columnDefinition();
							}
							}
						}
						this.state = 227;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
					}
					this.state = 230;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ImpalaSqlParserParser.COMMA) {
						{
						this.state = 228;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 229;
						this.constraintSpecification();
						}
					}

					this.state = 232;
					this.match(ImpalaSqlParserParser.RPAREN);
					}
					break;
				}
				this.state = 240;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 236;
					this.match(ImpalaSqlParserParser.KW_PARTITIONED);
					this.state = 237;
					this.match(ImpalaSqlParserParser.KW_BY);
					this.state = 238;
					this.partitionedBy();
					}
					break;

				case 2:
					{
					this.state = 239;
					this.columnAliases();
					}
					break;
				}
				this.state = 242;
				this.createCommonItem();
				this.state = 245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_AS) {
					{
					this.state = 243;
					this.match(ImpalaSqlParserParser.KW_AS);
					this.state = 244;
					this.query();
					}
				}

				}
				break;

			case 7:
				_localctx = new CreateTableLikeContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 247;
				this.match(ImpalaSqlParserParser.KW_CREATE);
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_EXTERNAL) {
					{
					this.state = 248;
					this.match(ImpalaSqlParserParser.KW_EXTERNAL);
					}
				}

				this.state = 251;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 255;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 252;
					this.match(ImpalaSqlParserParser.KW_IF);
					this.state = 253;
					this.match(ImpalaSqlParserParser.KW_NOT);
					this.state = 254;
					this.match(ImpalaSqlParserParser.KW_EXISTS);
					}
					break;
				}
				this.state = 257;
				(_localctx as CreateTableLikeContext)._tblName = this.qualifiedName();
				this.state = 261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_PARTITIONED) {
					{
					this.state = 258;
					this.match(ImpalaSqlParserParser.KW_PARTITIONED);
					this.state = 259;
					this.match(ImpalaSqlParserParser.KW_BY);
					this.state = 260;
					this.partitionedBy();
					}
				}

				this.state = 263;
				this.createCommonItem();
				}
				break;

			case 8:
				_localctx = new CreateKuduTableAsSelectContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 265;
				this.match(ImpalaSqlParserParser.KW_CREATE);
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_EXTERNAL) {
					{
					this.state = 266;
					this.match(ImpalaSqlParserParser.KW_EXTERNAL);
					}
				}

				this.state = 269;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 273;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 270;
					this.match(ImpalaSqlParserParser.KW_IF);
					this.state = 271;
					this.match(ImpalaSqlParserParser.KW_NOT);
					this.state = 272;
					this.match(ImpalaSqlParserParser.KW_EXISTS);
					}
					break;
				}
				this.state = 275;
				(_localctx as CreateKuduTableAsSelectContext)._tblName = this.qualifiedName();
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.LPAREN) {
					{
					this.state = 276;
					this.match(ImpalaSqlParserParser.LPAREN);
					this.state = 277;
					this.kuduTableElement();
					this.state = 282;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 278;
							this.match(ImpalaSqlParserParser.COMMA);
							this.state = 279;
							this.kuduTableElement();
							}
							}
						}
						this.state = 284;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
					}
					this.state = 289;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ImpalaSqlParserParser.COMMA) {
						{
						this.state = 285;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 286;
						this.match(ImpalaSqlParserParser.KW_PRIMARY);
						this.state = 287;
						this.match(ImpalaSqlParserParser.KW_KEY);
						this.state = 288;
						this.columnAliases();
						}
					}

					this.state = 291;
					this.match(ImpalaSqlParserParser.RPAREN);
					}
				}

				this.state = 300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_PRIMARY) {
					{
					this.state = 295;
					this.match(ImpalaSqlParserParser.KW_PRIMARY);
					this.state = 296;
					this.match(ImpalaSqlParserParser.KW_KEY);
					this.state = 298;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ImpalaSqlParserParser.LPAREN) {
						{
						this.state = 297;
						this.columnAliases();
						}
					}

					}
				}

				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_PARTITION) {
					{
					this.state = 302;
					this.match(ImpalaSqlParserParser.KW_PARTITION);
					this.state = 303;
					this.match(ImpalaSqlParserParser.KW_BY);
					this.state = 304;
					this.kuduPartitionClause();
					}
				}

				this.state = 309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_COMMENT) {
					{
					this.state = 307;
					this.match(ImpalaSqlParserParser.KW_COMMENT);
					this.state = 308;
					this.string();
					}
				}

				this.state = 311;
				this.match(ImpalaSqlParserParser.KW_STORED);
				this.state = 312;
				this.match(ImpalaSqlParserParser.KW_AS);
				this.state = 313;
				this.match(ImpalaSqlParserParser.KW_KUDU);
				this.state = 316;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_TBLPROPERTIES) {
					{
					this.state = 314;
					this.match(ImpalaSqlParserParser.KW_TBLPROPERTIES);
					this.state = 315;
					(_localctx as CreateKuduTableAsSelectContext)._tblProp = this.properties();
					}
				}

				this.state = 320;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_AS) {
					{
					this.state = 318;
					this.match(ImpalaSqlParserParser.KW_AS);
					this.state = 319;
					this.query();
					}
				}

				}
				break;

			case 9:
				_localctx = new RenameTableContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 322;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 323;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 324;
				(_localctx as RenameTableContext)._from = this.qualifiedName();
				this.state = 325;
				this.match(ImpalaSqlParserParser.KW_RENAME);
				this.state = 326;
				this.match(ImpalaSqlParserParser.KW_TO);
				this.state = 327;
				(_localctx as RenameTableContext)._to = this.qualifiedName();
				}
				break;

			case 10:
				_localctx = new AddSingleColumnContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 329;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 330;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 331;
				this.qualifiedName();
				this.state = 332;
				this.match(ImpalaSqlParserParser.T__0);
				this.state = 333;
				this.match(ImpalaSqlParserParser.KW_COLUMN);
				this.state = 337;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 334;
					this.match(ImpalaSqlParserParser.KW_IF);
					this.state = 335;
					this.match(ImpalaSqlParserParser.KW_NOT);
					this.state = 336;
					this.match(ImpalaSqlParserParser.KW_EXISTS);
					}
					break;
				}
				this.state = 339;
				this.columnSpecWithKudu();
				}
				break;

			case 11:
				_localctx = new AddColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 341;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 342;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 343;
				this.qualifiedName();
				this.state = 344;
				this.match(ImpalaSqlParserParser.T__0);
				this.state = 348;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_IF) {
					{
					this.state = 345;
					this.match(ImpalaSqlParserParser.KW_IF);
					this.state = 346;
					this.match(ImpalaSqlParserParser.KW_NOT);
					this.state = 347;
					this.match(ImpalaSqlParserParser.KW_EXISTS);
					}
				}

				this.state = 350;
				this.match(ImpalaSqlParserParser.KW_COLUMNS);
				this.state = 351;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 352;
				this.columnSpecWithKudu();
				this.state = 357;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 353;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 354;
						this.columnSpecWithKudu();
						}
						}
					}
					this.state = 359;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				}
				this.state = 360;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 12:
				_localctx = new ReplaceColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 362;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 363;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 364;
				this.qualifiedName();
				this.state = 365;
				this.match(ImpalaSqlParserParser.KW_REPLACE);
				this.state = 366;
				this.match(ImpalaSqlParserParser.KW_COLUMNS);
				this.state = 367;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 368;
				this.columnSpecWithKudu();
				this.state = 373;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 369;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 370;
						this.columnSpecWithKudu();
						}
						}
					}
					this.state = 375;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				}
				this.state = 376;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 13:
				_localctx = new EditColumnDefineContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 378;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 379;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 380;
				this.qualifiedName();
				this.state = 381;
				this.match(ImpalaSqlParserParser.KW_CHANGE);
				this.state = 382;
				this.match(ImpalaSqlParserParser.KW_COLUMN);
				this.state = 383;
				this.columnSpecWithKudu();
				}
				break;

			case 14:
				_localctx = new DropSingleColumnContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 385;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 386;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 387;
				this.qualifiedName();
				this.state = 388;
				this.match(ImpalaSqlParserParser.KW_DROP);
				this.state = 390;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 389;
					this.match(ImpalaSqlParserParser.KW_COLUMN);
					}
					break;
				}
				this.state = 392;
				this.identifier();
				}
				break;

			case 15:
				_localctx = new AlterTableOwnerContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 394;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 395;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 396;
				this.qualifiedName();
				this.state = 397;
				this.match(ImpalaSqlParserParser.KW_SET);
				this.state = 398;
				this.match(ImpalaSqlParserParser.KW_OWNER);
				this.state = 399;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParserParser.KW_ROLE || _la === ImpalaSqlParserParser.KW_USER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 400;
				this.identifier();
				}
				break;

			case 16:
				_localctx = new AlterTableKuduOnlyContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 402;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 403;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 404;
				this.qualifiedName();
				this.state = 405;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 407;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
				case 1:
					{
					this.state = 406;
					this.match(ImpalaSqlParserParser.KW_COLUMN);
					}
					break;
				}
				this.state = 409;
				this.identifier();
				this.state = 414;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ImpalaSqlParserParser.KW_SET:
					{
					this.state = 410;
					this.match(ImpalaSqlParserParser.KW_SET);
					this.state = 411;
					this.kuduStorageAttr();
					}
					break;
				case ImpalaSqlParserParser.KW_DROP:
					{
					this.state = 412;
					this.match(ImpalaSqlParserParser.KW_DROP);
					this.state = 413;
					this.match(ImpalaSqlParserParser.KW_DEFAULT);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 17:
				_localctx = new AlterTableNonKuduContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 416;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 417;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 418;
				this.qualifiedName();
				this.state = 419;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 421;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
				case 1:
					{
					this.state = 420;
					this.match(ImpalaSqlParserParser.KW_COLUMN);
					}
					break;
				}
				this.state = 423;
				this.identifier();
				this.state = 424;
				this.match(ImpalaSqlParserParser.KW_SET);
				this.state = 425;
				this.match(ImpalaSqlParserParser.KW_COMMENT);
				this.state = 426;
				this.string();
				}
				break;

			case 18:
				_localctx = new AddPartitionByValueContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 428;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 429;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 430;
				this.qualifiedName();
				this.state = 431;
				this.match(ImpalaSqlParserParser.T__0);
				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_IF) {
					{
					this.state = 432;
					this.match(ImpalaSqlParserParser.KW_IF);
					this.state = 433;
					this.match(ImpalaSqlParserParser.KW_NOT);
					this.state = 434;
					this.match(ImpalaSqlParserParser.KW_EXISTS);
					}
				}

				this.state = 437;
				this.match(ImpalaSqlParserParser.KW_PARTITION);
				this.state = 438;
				this.expression();
				this.state = 441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_LOCATION) {
					{
					this.state = 439;
					this.match(ImpalaSqlParserParser.KW_LOCATION);
					this.state = 440;
					this.string();
					}
				}

				this.state = 444;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_CACHED || _la === ImpalaSqlParserParser.KW_UNCACHED) {
					{
					this.state = 443;
					this.cacheSpec();
					}
				}

				}
				break;

			case 19:
				_localctx = new AddPartitionByRangeContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 446;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 447;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 448;
				this.qualifiedName();
				this.state = 449;
				this.match(ImpalaSqlParserParser.T__0);
				this.state = 453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_IF) {
					{
					this.state = 450;
					this.match(ImpalaSqlParserParser.KW_IF);
					this.state = 451;
					this.match(ImpalaSqlParserParser.KW_NOT);
					this.state = 452;
					this.match(ImpalaSqlParserParser.KW_EXISTS);
					}
				}

				this.state = 455;
				this.match(ImpalaSqlParserParser.KW_RANGE);
				this.state = 456;
				this.match(ImpalaSqlParserParser.KW_PARTITION);
				this.state = 457;
				this.kuduPartitionSpec();
				}
				break;

			case 20:
				_localctx = new DropPartitionByValueContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 459;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 460;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 461;
				this.qualifiedName();
				this.state = 462;
				this.match(ImpalaSqlParserParser.KW_DROP);
				this.state = 465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_IF) {
					{
					this.state = 463;
					this.match(ImpalaSqlParserParser.KW_IF);
					this.state = 464;
					this.match(ImpalaSqlParserParser.KW_EXISTS);
					}
				}

				this.state = 467;
				this.match(ImpalaSqlParserParser.KW_PARTITION);
				this.state = 468;
				this.expression();
				this.state = 470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_PURGE) {
					{
					this.state = 469;
					this.match(ImpalaSqlParserParser.KW_PURGE);
					}
				}

				}
				break;

			case 21:
				_localctx = new AddPartitionByRangeContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 472;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 473;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 474;
				this.qualifiedName();
				this.state = 475;
				this.match(ImpalaSqlParserParser.KW_DROP);
				this.state = 478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_IF) {
					{
					this.state = 476;
					this.match(ImpalaSqlParserParser.KW_IF);
					this.state = 477;
					this.match(ImpalaSqlParserParser.KW_EXISTS);
					}
				}

				this.state = 480;
				this.match(ImpalaSqlParserParser.KW_RANGE);
				this.state = 481;
				this.match(ImpalaSqlParserParser.KW_PARTITION);
				this.state = 482;
				this.kuduPartitionSpec();
				}
				break;

			case 22:
				_localctx = new RecoverPartitionsContext(_localctx);
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 484;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 485;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 486;
				this.qualifiedName();
				this.state = 487;
				this.match(ImpalaSqlParserParser.KW_RECOVER);
				this.state = 488;
				this.match(ImpalaSqlParserParser.KW_PARTITIONS);
				}
				break;

			case 23:
				_localctx = new AlterFormatContext(_localctx);
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 490;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 491;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 492;
				this.qualifiedName();
				this.state = 495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_PARTITION) {
					{
					this.state = 493;
					this.match(ImpalaSqlParserParser.KW_PARTITION);
					this.state = 494;
					this.expression();
					}
				}

				this.state = 497;
				this.match(ImpalaSqlParserParser.KW_SET);
				this.state = 509;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ImpalaSqlParserParser.KW_FILEFORMAT:
					{
					{
					this.state = 498;
					this.match(ImpalaSqlParserParser.KW_FILEFORMAT);
					this.state = 499;
					this.fileFormat();
					}
					}
					break;
				case ImpalaSqlParserParser.KW_ROW:
					{
					{
					this.state = 500;
					this.match(ImpalaSqlParserParser.KW_ROW);
					this.state = 501;
					this.match(ImpalaSqlParserParser.KW_FORMAT);
					this.state = 502;
					this.rowFormat();
					}
					}
					break;
				case ImpalaSqlParserParser.KW_LOCATION:
					{
					{
					this.state = 503;
					this.match(ImpalaSqlParserParser.KW_LOCATION);
					this.state = 504;
					this.string();
					}
					}
					break;
				case ImpalaSqlParserParser.KW_TBLPROPERTIES:
					{
					{
					this.state = 505;
					this.match(ImpalaSqlParserParser.KW_TBLPROPERTIES);
					this.state = 506;
					(_localctx as AlterFormatContext)._tblProp = this.properties();
					}
					}
					break;
				case ImpalaSqlParserParser.KW_SERDEPROPERTIES:
					{
					{
					this.state = 507;
					this.match(ImpalaSqlParserParser.KW_SERDEPROPERTIES);
					this.state = 508;
					(_localctx as AlterFormatContext)._tblProp = this.properties();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 24:
				_localctx = new AlterStatsKeyContext(_localctx);
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 511;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 512;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 513;
				this.qualifiedName();
				this.state = 514;
				this.match(ImpalaSqlParserParser.KW_SET);
				this.state = 515;
				this.match(ImpalaSqlParserParser.KW_COLUMN);
				this.state = 516;
				this.match(ImpalaSqlParserParser.KW_STATS);
				this.state = 517;
				this.identifier();
				this.state = 518;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 519;
				this.statsKey();
				this.state = 520;
				this.match(ImpalaSqlParserParser.EQ);
				this.state = 521;
				this.string();
				this.state = 527;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.COMMA) {
					{
					this.state = 522;
					this.match(ImpalaSqlParserParser.COMMA);
					this.state = 523;
					this.statsKey();
					this.state = 524;
					this.match(ImpalaSqlParserParser.EQ);
					this.state = 525;
					this.string();
					}
				}

				this.state = 529;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 25:
				_localctx = new AlterPartitionCacheContext(_localctx);
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 531;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 532;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 533;
				this.qualifiedName();
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_PARTITION) {
					{
					this.state = 534;
					this.match(ImpalaSqlParserParser.KW_PARTITION);
					this.state = 535;
					this.expression();
					}
				}

				this.state = 538;
				this.match(ImpalaSqlParserParser.KW_SET);
				this.state = 549;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ImpalaSqlParserParser.KW_CACHED:
					{
					{
					this.state = 539;
					this.match(ImpalaSqlParserParser.KW_CACHED);
					this.state = 540;
					this.match(ImpalaSqlParserParser.KW_IN);
					this.state = 541;
					this.string();
					this.state = 546;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
					case 1:
						{
						this.state = 542;
						this.match(ImpalaSqlParserParser.KW_WITH);
						this.state = 543;
						this.match(ImpalaSqlParserParser.KW_REPLICATION);
						this.state = 544;
						this.match(ImpalaSqlParserParser.EQ);
						this.state = 545;
						this.number();
						}
						break;
					}
					}
					}
					break;
				case ImpalaSqlParserParser.KW_UNCACHED:
					{
					this.state = 548;
					this.match(ImpalaSqlParserParser.KW_UNCACHED);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 26:
				_localctx = new DropTableContext(_localctx);
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 551;
				this.match(ImpalaSqlParserParser.KW_DROP);
				this.state = 552;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 555;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
				case 1:
					{
					this.state = 553;
					this.match(ImpalaSqlParserParser.KW_IF);
					this.state = 554;
					this.match(ImpalaSqlParserParser.KW_EXISTS);
					}
					break;
				}
				this.state = 557;
				this.qualifiedName();
				this.state = 559;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_PURGE) {
					{
					this.state = 558;
					this.match(ImpalaSqlParserParser.KW_PURGE);
					}
				}

				}
				break;

			case 27:
				_localctx = new TruncateTableContext(_localctx);
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 561;
				this.match(ImpalaSqlParserParser.KW_TRUNCATE);
				this.state = 563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_TABLE) {
					{
					this.state = 562;
					this.match(ImpalaSqlParserParser.KW_TABLE);
					}
				}

				this.state = 567;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
				case 1:
					{
					this.state = 565;
					this.match(ImpalaSqlParserParser.KW_IF);
					this.state = 566;
					this.match(ImpalaSqlParserParser.KW_EXISTS);
					}
					break;
				}
				this.state = 569;
				this.qualifiedName();
				}
				break;

			case 28:
				_localctx = new CreateViewContext(_localctx);
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 570;
				this.match(ImpalaSqlParserParser.KW_CREATE);
				this.state = 571;
				this.match(ImpalaSqlParserParser.KW_VIEW);
				this.state = 575;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
				case 1:
					{
					this.state = 572;
					this.match(ImpalaSqlParserParser.KW_IF);
					this.state = 573;
					this.match(ImpalaSqlParserParser.KW_NOT);
					this.state = 574;
					this.match(ImpalaSqlParserParser.KW_EXISTS);
					}
					break;
				}
				this.state = 577;
				this.qualifiedName();
				this.state = 579;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.LPAREN) {
					{
					this.state = 578;
					this.viewColumns();
					}
				}

				this.state = 583;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_COMMENT) {
					{
					this.state = 581;
					this.match(ImpalaSqlParserParser.KW_COMMENT);
					this.state = 582;
					this.string();
					}
				}

				this.state = 587;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_TBLPROPERTIES) {
					{
					this.state = 585;
					this.match(ImpalaSqlParserParser.KW_TBLPROPERTIES);
					this.state = 586;
					(_localctx as CreateViewContext)._tblProp = this.properties();
					}
				}

				this.state = 589;
				this.match(ImpalaSqlParserParser.KW_AS);
				this.state = 590;
				this.query();
				}
				break;

			case 29:
				_localctx = new AlterViewContext(_localctx);
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 592;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 593;
				this.match(ImpalaSqlParserParser.KW_VIEW);
				this.state = 594;
				this.qualifiedName();
				this.state = 596;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.LPAREN) {
					{
					this.state = 595;
					this.viewColumns();
					}
				}

				this.state = 598;
				this.match(ImpalaSqlParserParser.KW_AS);
				this.state = 599;
				this.query();
				}
				break;

			case 30:
				_localctx = new RenameViewContext(_localctx);
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 601;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 602;
				this.match(ImpalaSqlParserParser.KW_VIEW);
				this.state = 603;
				this.qualifiedName();
				this.state = 604;
				this.match(ImpalaSqlParserParser.KW_RENAME);
				this.state = 605;
				this.match(ImpalaSqlParserParser.KW_TO);
				this.state = 606;
				this.qualifiedName();
				}
				break;

			case 31:
				_localctx = new AlterViewOwnerContext(_localctx);
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 608;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 609;
				this.match(ImpalaSqlParserParser.KW_VIEW);
				this.state = 610;
				this.qualifiedName();
				this.state = 611;
				this.match(ImpalaSqlParserParser.KW_SET);
				this.state = 612;
				this.match(ImpalaSqlParserParser.KW_OWNER);
				this.state = 613;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParserParser.KW_ROLE || _la === ImpalaSqlParserParser.KW_USER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 614;
				this.qualifiedName();
				}
				break;

			case 32:
				_localctx = new AlterSetViewTblpropertiesContext(_localctx);
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 616;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 617;
				this.match(ImpalaSqlParserParser.KW_VIEW);
				this.state = 618;
				this.qualifiedName();
				this.state = 619;
				this.match(ImpalaSqlParserParser.KW_SET);
				this.state = 620;
				this.match(ImpalaSqlParserParser.KW_TBLPROPERTIES);
				this.state = 621;
				(_localctx as AlterSetViewTblpropertiesContext)._tblProp = this.properties();
				}
				break;

			case 33:
				_localctx = new AlterUnSetViewTblpropertiesContext(_localctx);
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 623;
				this.match(ImpalaSqlParserParser.T__5);
				this.state = 624;
				this.match(ImpalaSqlParserParser.KW_VIEW);
				this.state = 625;
				this.qualifiedName();
				this.state = 626;
				this.match(ImpalaSqlParserParser.KW_UNSET);
				this.state = 627;
				this.match(ImpalaSqlParserParser.KW_TBLPROPERTIES);
				this.state = 628;
				(_localctx as AlterUnSetViewTblpropertiesContext)._tblProp = this.properties();
				}
				break;

			case 34:
				_localctx = new DropViewContext(_localctx);
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 630;
				this.match(ImpalaSqlParserParser.KW_DROP);
				this.state = 631;
				this.match(ImpalaSqlParserParser.KW_VIEW);
				this.state = 634;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					this.state = 632;
					this.match(ImpalaSqlParserParser.KW_IF);
					this.state = 633;
					this.match(ImpalaSqlParserParser.KW_EXISTS);
					}
					break;
				}
				this.state = 636;
				this.qualifiedName();
				}
				break;

			case 35:
				_localctx = new DescribeDbOrTableContext(_localctx);
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 637;
				this.match(ImpalaSqlParserParser.KW_DESCRIBE);
				this.state = 639;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
				case 1:
					{
					this.state = 638;
					this.match(ImpalaSqlParserParser.KW_DATABASE);
					}
					break;
				}
				this.state = 642;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_EXTENDED || _la === ImpalaSqlParserParser.KW_FORMATTED) {
					{
					this.state = 641;
					_la = this._input.LA(1);
					if (!(_la === ImpalaSqlParserParser.KW_EXTENDED || _la === ImpalaSqlParserParser.KW_FORMATTED)) {
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

				this.state = 644;
				this.qualifiedName();
				}
				break;

			case 36:
				_localctx = new ComputeStatsContext(_localctx);
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 645;
				this.match(ImpalaSqlParserParser.KW_COMPUTE);
				this.state = 646;
				this.match(ImpalaSqlParserParser.KW_STATS);
				this.state = 647;
				this.qualifiedName();
				this.state = 649;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
				case 1:
					{
					this.state = 648;
					this.columnAliases();
					}
					break;
				}
				this.state = 663;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_TABLESAMPLE) {
					{
					this.state = 651;
					this.match(ImpalaSqlParserParser.KW_TABLESAMPLE);
					this.state = 652;
					this.match(ImpalaSqlParserParser.KW_SYSTEM);
					this.state = 653;
					this.match(ImpalaSqlParserParser.LPAREN);
					this.state = 654;
					this.number();
					this.state = 655;
					this.match(ImpalaSqlParserParser.RPAREN);
					this.state = 661;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ImpalaSqlParserParser.KW_REPEATABLE) {
						{
						this.state = 656;
						this.match(ImpalaSqlParserParser.KW_REPEATABLE);
						this.state = 657;
						this.match(ImpalaSqlParserParser.LPAREN);
						this.state = 658;
						this.number();
						this.state = 659;
						this.match(ImpalaSqlParserParser.RPAREN);
						}
					}

					}
				}

				}
				break;

			case 37:
				_localctx = new ComputeIncrementalStatsContext(_localctx);
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 665;
				this.match(ImpalaSqlParserParser.KW_COMPUTE);
				this.state = 666;
				this.match(ImpalaSqlParserParser.KW_INCREMENTAL);
				this.state = 667;
				this.match(ImpalaSqlParserParser.KW_STATS);
				this.state = 668;
				this.qualifiedName();
				this.state = 671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_PARTITION) {
					{
					this.state = 669;
					this.match(ImpalaSqlParserParser.KW_PARTITION);
					this.state = 670;
					this.expression();
					}
				}

				}
				break;

			case 38:
				_localctx = new DropStatsContext(_localctx);
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 673;
				this.match(ImpalaSqlParserParser.KW_DROP);
				this.state = 674;
				this.match(ImpalaSqlParserParser.KW_STATS);
				this.state = 675;
				this.qualifiedName();
				}
				break;

			case 39:
				_localctx = new DropIncrementalStatsContext(_localctx);
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 676;
				this.match(ImpalaSqlParserParser.KW_DROP);
				this.state = 677;
				this.match(ImpalaSqlParserParser.KW_INCREMENTAL);
				this.state = 678;
				this.match(ImpalaSqlParserParser.KW_STATS);
				this.state = 679;
				this.qualifiedName();
				this.state = 680;
				this.match(ImpalaSqlParserParser.KW_PARTITION);
				this.state = 681;
				this.expression();
				}
				break;

			case 40:
				_localctx = new CreateFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 683;
				this.match(ImpalaSqlParserParser.KW_CREATE);
				this.state = 684;
				this.match(ImpalaSqlParserParser.KW_FUNCTION);
				this.state = 688;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
				case 1:
					{
					this.state = 685;
					this.match(ImpalaSqlParserParser.KW_IF);
					this.state = 686;
					this.match(ImpalaSqlParserParser.KW_NOT);
					this.state = 687;
					this.match(ImpalaSqlParserParser.KW_EXISTS);
					}
					break;
				}
				this.state = 690;
				this.qualifiedName();
				this.state = 703;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.LPAREN) {
					{
					this.state = 691;
					this.match(ImpalaSqlParserParser.LPAREN);
					this.state = 700;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParserParser.T__0) | (1 << ImpalaSqlParserParser.T__1) | (1 << ImpalaSqlParserParser.T__2) | (1 << ImpalaSqlParserParser.T__3) | (1 << ImpalaSqlParserParser.T__7) | (1 << ImpalaSqlParserParser.KW_ARRAY) | (1 << ImpalaSqlParserParser.KW_ASC) | (1 << ImpalaSqlParserParser.KW_AT) | (1 << ImpalaSqlParserParser.KW_BERNOULLI))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ImpalaSqlParserParser.KW_CALL - 34)) | (1 << (ImpalaSqlParserParser.KW_CASCADE - 34)) | (1 << (ImpalaSqlParserParser.KW_CATALOGS - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMN - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMNS - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMENT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMIT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMITTED - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT - 34)) | (1 << (ImpalaSqlParserParser.KW_DATA - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASE - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASES - 34)) | (1 << (ImpalaSqlParserParser.KW_DATE - 34)) | (1 << (ImpalaSqlParserParser.KW_DAY - 34)) | (1 << (ImpalaSqlParserParser.KW_DAYS - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ImpalaSqlParserParser.KW_DEFINER - 66)) | (1 << (ImpalaSqlParserParser.KW_DEFAULT - 66)) | (1 << (ImpalaSqlParserParser.KW_DESC - 66)) | (1 << (ImpalaSqlParserParser.KW_EXCLUDING - 66)) | (1 << (ImpalaSqlParserParser.KW_EXPLAIN - 66)) | (1 << (ImpalaSqlParserParser.KW_FETCH - 66)) | (1 << (ImpalaSqlParserParser.KW_FILTER - 66)) | (1 << (ImpalaSqlParserParser.KW_FIRST - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ImpalaSqlParserParser.KW_FOLLOWING - 98)) | (1 << (ImpalaSqlParserParser.KW_FORMAT - 98)) | (1 << (ImpalaSqlParserParser.KW_FUNCTIONS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANT - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTED - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRAPHVIZ - 98)) | (1 << (ImpalaSqlParserParser.KW_HOUR - 98)) | (1 << (ImpalaSqlParserParser.KW_IF - 98)) | (1 << (ImpalaSqlParserParser.KW_INCLUDING - 98)) | (1 << (ImpalaSqlParserParser.KW_INPUT - 98)) | (1 << (ImpalaSqlParserParser.KW_INTERVAL - 98)) | (1 << (ImpalaSqlParserParser.KW_INVOKER - 98)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (ImpalaSqlParserParser.KW_IO - 132)) | (1 << (ImpalaSqlParserParser.KW_ISOLATION - 132)) | (1 << (ImpalaSqlParserParser.KW_JSON - 132)) | (1 << (ImpalaSqlParserParser.KW_LAST - 132)) | (1 << (ImpalaSqlParserParser.KW_LATERAL - 132)) | (1 << (ImpalaSqlParserParser.KW_LEVEL - 132)) | (1 << (ImpalaSqlParserParser.KW_LIMIT - 132)) | (1 << (ImpalaSqlParserParser.KW_LOGICAL - 132)) | (1 << (ImpalaSqlParserParser.KW_MAP - 132)) | (1 << (ImpalaSqlParserParser.KW_MINUTE - 132)) | (1 << (ImpalaSqlParserParser.KW_MONTH - 132)) | (1 << (ImpalaSqlParserParser.KW_NEXT - 132)) | (1 << (ImpalaSqlParserParser.KW_NFC - 132)) | (1 << (ImpalaSqlParserParser.KW_NFD - 132)) | (1 << (ImpalaSqlParserParser.KW_NFKC - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (ImpalaSqlParserParser.KW_NFKD - 164)) | (1 << (ImpalaSqlParserParser.KW_NO - 164)) | (1 << (ImpalaSqlParserParser.KW_NONE - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLIF - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLS - 164)) | (1 << (ImpalaSqlParserParser.KW_OFFSET - 164)) | (1 << (ImpalaSqlParserParser.KW_ONLY - 164)) | (1 << (ImpalaSqlParserParser.KW_OPTION - 164)) | (1 << (ImpalaSqlParserParser.KW_ORDINALITY - 164)) | (1 << (ImpalaSqlParserParser.KW_OUTPUT - 164)) | (1 << (ImpalaSqlParserParser.KW_OVER - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITIONS - 164)) | (1 << (ImpalaSqlParserParser.KW_PATH - 164)) | (1 << (ImpalaSqlParserParser.KW_PARQUET - 164)) | (1 << (ImpalaSqlParserParser.KW_POSITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PRECEDING - 164)) | (1 << (ImpalaSqlParserParser.KW_PRIVILEGES - 164)) | (1 << (ImpalaSqlParserParser.KW_PROPERTIES - 164)) | (1 << (ImpalaSqlParserParser.KW_RANGE - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (ImpalaSqlParserParser.KW_READ - 196)) | (1 << (ImpalaSqlParserParser.KW_RENAME - 196)) | (1 << (ImpalaSqlParserParser.KW_REPEATABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_REPLACE - 196)) | (1 << (ImpalaSqlParserParser.KW_RESET - 196)) | (1 << (ImpalaSqlParserParser.KW_RESTRICT - 196)) | (1 << (ImpalaSqlParserParser.KW_REVOKE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLES - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLLBACK - 196)) | (1 << (ImpalaSqlParserParser.KW_ROW - 196)) | (1 << (ImpalaSqlParserParser.KW_ROWS - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMA - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMAS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECOND - 196)) | (1 << (ImpalaSqlParserParser.KW_SECONDS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECURITY - 196)) | (1 << (ImpalaSqlParserParser.KW_SERIALIZABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_SESSION - 196)))) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (ImpalaSqlParserParser.KW_SET - 228)) | (1 << (ImpalaSqlParserParser.KW_SETS - 228)) | (1 << (ImpalaSqlParserParser.KW_SHOW - 228)) | (1 << (ImpalaSqlParserParser.KW_SOME - 228)) | (1 << (ImpalaSqlParserParser.KW_START - 228)) | (1 << (ImpalaSqlParserParser.KW_STATS - 228)) | (1 << (ImpalaSqlParserParser.KW_STRUCT - 228)) | (1 << (ImpalaSqlParserParser.KW_SUBSTRING - 228)) | (1 << (ImpalaSqlParserParser.KW_SYSTEM - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLES - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLESAMPLE - 228)) | (1 << (ImpalaSqlParserParser.KW_TEXT - 228)) | (1 << (ImpalaSqlParserParser.KW_TIES - 228)) | (1 << (ImpalaSqlParserParser.KW_TIME - 228)) | (1 << (ImpalaSqlParserParser.KW_TIMESTAMP - 228)) | (1 << (ImpalaSqlParserParser.KW_TO - 228)) | (1 << (ImpalaSqlParserParser.KW_TRANSACTION - 228)) | (1 << (ImpalaSqlParserParser.KW_TRY_CAST - 228)) | (1 << (ImpalaSqlParserParser.KW_TYPE - 228)))) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (ImpalaSqlParserParser.KW_UNBOUNDED - 260)) | (1 << (ImpalaSqlParserParser.KW_UNCOMMITTED - 260)) | (1 << (ImpalaSqlParserParser.KW_USE - 260)) | (1 << (ImpalaSqlParserParser.KW_USER - 260)) | (1 << (ImpalaSqlParserParser.KW_VALIDATE - 260)) | (1 << (ImpalaSqlParserParser.KW_VERBOSE - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEW - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEWS - 260)) | (1 << (ImpalaSqlParserParser.KW_WORK - 260)) | (1 << (ImpalaSqlParserParser.KW_WRITE - 260)) | (1 << (ImpalaSqlParserParser.KW_YEAR - 260)) | (1 << (ImpalaSqlParserParser.KW_ZONE - 260)))) !== 0) || ((((_la - 321)) & ~0x1F) === 0 && ((1 << (_la - 321)) & ((1 << (ImpalaSqlParserParser.STRING - 321)) | (1 << (ImpalaSqlParserParser.IDENTIFIER - 321)) | (1 << (ImpalaSqlParserParser.DIGIT_IDENTIFIER - 321)) | (1 << (ImpalaSqlParserParser.BACKQUOTED_IDENTIFIER - 321)) | (1 << (ImpalaSqlParserParser.TIME_WITH_TIME_ZONE - 321)) | (1 << (ImpalaSqlParserParser.TIMESTAMP_WITH_TIME_ZONE - 321)) | (1 << (ImpalaSqlParserParser.DOUBLE_PRECISION - 321)))) !== 0)) {
						{
						this.state = 692;
						this.type(0);
						this.state = 697;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === ImpalaSqlParserParser.COMMA) {
							{
							{
							this.state = 693;
							this.match(ImpalaSqlParserParser.COMMA);
							this.state = 694;
							this.type(0);
							}
							}
							this.state = 699;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
					}

					this.state = 702;
					this.match(ImpalaSqlParserParser.RPAREN);
					}
				}

				this.state = 705;
				this.match(ImpalaSqlParserParser.KW_RETURNS);
				this.state = 706;
				this.type(0);
				this.state = 707;
				this.match(ImpalaSqlParserParser.KW_LOCATION);
				this.state = 708;
				this.match(ImpalaSqlParserParser.STRING);
				this.state = 709;
				this.match(ImpalaSqlParserParser.KW_SYMBOL);
				this.state = 710;
				this.match(ImpalaSqlParserParser.EQ);
				this.state = 711;
				(_localctx as CreateFunctionContext)._symbol = this.string();
				}
				break;

			case 41:
				_localctx = new CreateFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 713;
				this.match(ImpalaSqlParserParser.KW_CREATE);
				this.state = 714;
				this.match(ImpalaSqlParserParser.KW_FUNCTION);
				this.state = 718;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
				case 1:
					{
					this.state = 715;
					this.match(ImpalaSqlParserParser.KW_IF);
					this.state = 716;
					this.match(ImpalaSqlParserParser.KW_NOT);
					this.state = 717;
					this.match(ImpalaSqlParserParser.KW_EXISTS);
					}
					break;
				}
				this.state = 720;
				this.qualifiedName();
				this.state = 721;
				this.match(ImpalaSqlParserParser.KW_LOCATION);
				this.state = 722;
				this.match(ImpalaSqlParserParser.STRING);
				this.state = 723;
				this.match(ImpalaSqlParserParser.KW_SYMBOL);
				this.state = 724;
				this.match(ImpalaSqlParserParser.EQ);
				this.state = 725;
				(_localctx as CreateFunctionContext)._symbol = this.string();
				}
				break;

			case 42:
				_localctx = new CreateFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 727;
				this.match(ImpalaSqlParserParser.KW_CREATE);
				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_AGGREGATE) {
					{
					this.state = 728;
					this.match(ImpalaSqlParserParser.KW_AGGREGATE);
					}
				}

				this.state = 731;
				this.match(ImpalaSqlParserParser.KW_FUNCTION);
				this.state = 735;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
				case 1:
					{
					this.state = 732;
					this.match(ImpalaSqlParserParser.KW_IF);
					this.state = 733;
					this.match(ImpalaSqlParserParser.KW_NOT);
					this.state = 734;
					this.match(ImpalaSqlParserParser.KW_EXISTS);
					}
					break;
				}
				this.state = 737;
				this.qualifiedName();
				this.state = 750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.LPAREN) {
					{
					this.state = 738;
					this.match(ImpalaSqlParserParser.LPAREN);
					this.state = 747;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParserParser.T__0) | (1 << ImpalaSqlParserParser.T__1) | (1 << ImpalaSqlParserParser.T__2) | (1 << ImpalaSqlParserParser.T__3) | (1 << ImpalaSqlParserParser.T__7) | (1 << ImpalaSqlParserParser.KW_ARRAY) | (1 << ImpalaSqlParserParser.KW_ASC) | (1 << ImpalaSqlParserParser.KW_AT) | (1 << ImpalaSqlParserParser.KW_BERNOULLI))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ImpalaSqlParserParser.KW_CALL - 34)) | (1 << (ImpalaSqlParserParser.KW_CASCADE - 34)) | (1 << (ImpalaSqlParserParser.KW_CATALOGS - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMN - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMNS - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMENT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMIT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMITTED - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT - 34)) | (1 << (ImpalaSqlParserParser.KW_DATA - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASE - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASES - 34)) | (1 << (ImpalaSqlParserParser.KW_DATE - 34)) | (1 << (ImpalaSqlParserParser.KW_DAY - 34)) | (1 << (ImpalaSqlParserParser.KW_DAYS - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ImpalaSqlParserParser.KW_DEFINER - 66)) | (1 << (ImpalaSqlParserParser.KW_DEFAULT - 66)) | (1 << (ImpalaSqlParserParser.KW_DESC - 66)) | (1 << (ImpalaSqlParserParser.KW_EXCLUDING - 66)) | (1 << (ImpalaSqlParserParser.KW_EXPLAIN - 66)) | (1 << (ImpalaSqlParserParser.KW_FETCH - 66)) | (1 << (ImpalaSqlParserParser.KW_FILTER - 66)) | (1 << (ImpalaSqlParserParser.KW_FIRST - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ImpalaSqlParserParser.KW_FOLLOWING - 98)) | (1 << (ImpalaSqlParserParser.KW_FORMAT - 98)) | (1 << (ImpalaSqlParserParser.KW_FUNCTIONS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANT - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTED - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRAPHVIZ - 98)) | (1 << (ImpalaSqlParserParser.KW_HOUR - 98)) | (1 << (ImpalaSqlParserParser.KW_IF - 98)) | (1 << (ImpalaSqlParserParser.KW_INCLUDING - 98)) | (1 << (ImpalaSqlParserParser.KW_INPUT - 98)) | (1 << (ImpalaSqlParserParser.KW_INTERVAL - 98)) | (1 << (ImpalaSqlParserParser.KW_INVOKER - 98)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (ImpalaSqlParserParser.KW_IO - 132)) | (1 << (ImpalaSqlParserParser.KW_ISOLATION - 132)) | (1 << (ImpalaSqlParserParser.KW_JSON - 132)) | (1 << (ImpalaSqlParserParser.KW_LAST - 132)) | (1 << (ImpalaSqlParserParser.KW_LATERAL - 132)) | (1 << (ImpalaSqlParserParser.KW_LEVEL - 132)) | (1 << (ImpalaSqlParserParser.KW_LIMIT - 132)) | (1 << (ImpalaSqlParserParser.KW_LOGICAL - 132)) | (1 << (ImpalaSqlParserParser.KW_MAP - 132)) | (1 << (ImpalaSqlParserParser.KW_MINUTE - 132)) | (1 << (ImpalaSqlParserParser.KW_MONTH - 132)) | (1 << (ImpalaSqlParserParser.KW_NEXT - 132)) | (1 << (ImpalaSqlParserParser.KW_NFC - 132)) | (1 << (ImpalaSqlParserParser.KW_NFD - 132)) | (1 << (ImpalaSqlParserParser.KW_NFKC - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (ImpalaSqlParserParser.KW_NFKD - 164)) | (1 << (ImpalaSqlParserParser.KW_NO - 164)) | (1 << (ImpalaSqlParserParser.KW_NONE - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLIF - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLS - 164)) | (1 << (ImpalaSqlParserParser.KW_OFFSET - 164)) | (1 << (ImpalaSqlParserParser.KW_ONLY - 164)) | (1 << (ImpalaSqlParserParser.KW_OPTION - 164)) | (1 << (ImpalaSqlParserParser.KW_ORDINALITY - 164)) | (1 << (ImpalaSqlParserParser.KW_OUTPUT - 164)) | (1 << (ImpalaSqlParserParser.KW_OVER - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITIONS - 164)) | (1 << (ImpalaSqlParserParser.KW_PATH - 164)) | (1 << (ImpalaSqlParserParser.KW_PARQUET - 164)) | (1 << (ImpalaSqlParserParser.KW_POSITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PRECEDING - 164)) | (1 << (ImpalaSqlParserParser.KW_PRIVILEGES - 164)) | (1 << (ImpalaSqlParserParser.KW_PROPERTIES - 164)) | (1 << (ImpalaSqlParserParser.KW_RANGE - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (ImpalaSqlParserParser.KW_READ - 196)) | (1 << (ImpalaSqlParserParser.KW_RENAME - 196)) | (1 << (ImpalaSqlParserParser.KW_REPEATABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_REPLACE - 196)) | (1 << (ImpalaSqlParserParser.KW_RESET - 196)) | (1 << (ImpalaSqlParserParser.KW_RESTRICT - 196)) | (1 << (ImpalaSqlParserParser.KW_REVOKE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLES - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLLBACK - 196)) | (1 << (ImpalaSqlParserParser.KW_ROW - 196)) | (1 << (ImpalaSqlParserParser.KW_ROWS - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMA - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMAS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECOND - 196)) | (1 << (ImpalaSqlParserParser.KW_SECONDS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECURITY - 196)) | (1 << (ImpalaSqlParserParser.KW_SERIALIZABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_SESSION - 196)))) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (ImpalaSqlParserParser.KW_SET - 228)) | (1 << (ImpalaSqlParserParser.KW_SETS - 228)) | (1 << (ImpalaSqlParserParser.KW_SHOW - 228)) | (1 << (ImpalaSqlParserParser.KW_SOME - 228)) | (1 << (ImpalaSqlParserParser.KW_START - 228)) | (1 << (ImpalaSqlParserParser.KW_STATS - 228)) | (1 << (ImpalaSqlParserParser.KW_STRUCT - 228)) | (1 << (ImpalaSqlParserParser.KW_SUBSTRING - 228)) | (1 << (ImpalaSqlParserParser.KW_SYSTEM - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLES - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLESAMPLE - 228)) | (1 << (ImpalaSqlParserParser.KW_TEXT - 228)) | (1 << (ImpalaSqlParserParser.KW_TIES - 228)) | (1 << (ImpalaSqlParserParser.KW_TIME - 228)) | (1 << (ImpalaSqlParserParser.KW_TIMESTAMP - 228)) | (1 << (ImpalaSqlParserParser.KW_TO - 228)) | (1 << (ImpalaSqlParserParser.KW_TRANSACTION - 228)) | (1 << (ImpalaSqlParserParser.KW_TRY_CAST - 228)) | (1 << (ImpalaSqlParserParser.KW_TYPE - 228)))) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (ImpalaSqlParserParser.KW_UNBOUNDED - 260)) | (1 << (ImpalaSqlParserParser.KW_UNCOMMITTED - 260)) | (1 << (ImpalaSqlParserParser.KW_USE - 260)) | (1 << (ImpalaSqlParserParser.KW_USER - 260)) | (1 << (ImpalaSqlParserParser.KW_VALIDATE - 260)) | (1 << (ImpalaSqlParserParser.KW_VERBOSE - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEW - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEWS - 260)) | (1 << (ImpalaSqlParserParser.KW_WORK - 260)) | (1 << (ImpalaSqlParserParser.KW_WRITE - 260)) | (1 << (ImpalaSqlParserParser.KW_YEAR - 260)) | (1 << (ImpalaSqlParserParser.KW_ZONE - 260)))) !== 0) || ((((_la - 321)) & ~0x1F) === 0 && ((1 << (_la - 321)) & ((1 << (ImpalaSqlParserParser.STRING - 321)) | (1 << (ImpalaSqlParserParser.IDENTIFIER - 321)) | (1 << (ImpalaSqlParserParser.DIGIT_IDENTIFIER - 321)) | (1 << (ImpalaSqlParserParser.BACKQUOTED_IDENTIFIER - 321)) | (1 << (ImpalaSqlParserParser.TIME_WITH_TIME_ZONE - 321)) | (1 << (ImpalaSqlParserParser.TIMESTAMP_WITH_TIME_ZONE - 321)) | (1 << (ImpalaSqlParserParser.DOUBLE_PRECISION - 321)))) !== 0)) {
						{
						this.state = 739;
						this.type(0);
						this.state = 744;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === ImpalaSqlParserParser.COMMA) {
							{
							{
							this.state = 740;
							this.match(ImpalaSqlParserParser.COMMA);
							this.state = 741;
							this.type(0);
							}
							}
							this.state = 746;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
					}

					this.state = 749;
					this.match(ImpalaSqlParserParser.RPAREN);
					}
				}

				this.state = 752;
				this.match(ImpalaSqlParserParser.KW_RETURNS);
				this.state = 753;
				this.type(0);
				this.state = 756;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_INTERMEDIATE) {
					{
					this.state = 754;
					this.match(ImpalaSqlParserParser.KW_INTERMEDIATE);
					this.state = 755;
					this.type(0);
					}
				}

				this.state = 758;
				this.match(ImpalaSqlParserParser.KW_LOCATION);
				this.state = 759;
				this.match(ImpalaSqlParserParser.STRING);
				this.state = 763;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_INIT_FN) {
					{
					this.state = 760;
					this.match(ImpalaSqlParserParser.KW_INIT_FN);
					this.state = 761;
					this.match(ImpalaSqlParserParser.EQ);
					this.state = 762;
					this.match(ImpalaSqlParserParser.STRING);
					}
				}

				this.state = 765;
				this.match(ImpalaSqlParserParser.KW_UPDATE_FN);
				this.state = 766;
				this.match(ImpalaSqlParserParser.EQ);
				this.state = 767;
				this.match(ImpalaSqlParserParser.STRING);
				this.state = 768;
				this.match(ImpalaSqlParserParser.KW_MERGE_FN);
				this.state = 769;
				this.match(ImpalaSqlParserParser.EQ);
				this.state = 770;
				this.match(ImpalaSqlParserParser.STRING);
				this.state = 774;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_PREPARE_FN) {
					{
					this.state = 771;
					this.match(ImpalaSqlParserParser.KW_PREPARE_FN);
					this.state = 772;
					this.match(ImpalaSqlParserParser.EQ);
					this.state = 773;
					this.match(ImpalaSqlParserParser.STRING);
					}
				}

				this.state = 779;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_CLOSEFN) {
					{
					this.state = 776;
					this.match(ImpalaSqlParserParser.KW_CLOSEFN);
					this.state = 777;
					this.match(ImpalaSqlParserParser.EQ);
					this.state = 778;
					this.match(ImpalaSqlParserParser.STRING);
					}
				}

				this.state = 784;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_SERIALIZE_FN) {
					{
					this.state = 781;
					this.match(ImpalaSqlParserParser.KW_SERIALIZE_FN);
					this.state = 782;
					this.match(ImpalaSqlParserParser.EQ);
					this.state = 783;
					this.match(ImpalaSqlParserParser.STRING);
					}
				}

				this.state = 789;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_FINALIZE_FN) {
					{
					this.state = 786;
					this.match(ImpalaSqlParserParser.KW_FINALIZE_FN);
					this.state = 787;
					this.match(ImpalaSqlParserParser.EQ);
					this.state = 788;
					this.match(ImpalaSqlParserParser.STRING);
					}
				}

				}
				break;

			case 43:
				_localctx = new RefreshFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 791;
				this.match(ImpalaSqlParserParser.KW_REFRESH);
				this.state = 792;
				this.match(ImpalaSqlParserParser.KW_FUNCTIONS);
				this.state = 793;
				this.qualifiedName();
				}
				break;

			case 44:
				_localctx = new DropFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 794;
				this.match(ImpalaSqlParserParser.KW_DROP);
				this.state = 796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_AGGREGATE) {
					{
					this.state = 795;
					this.match(ImpalaSqlParserParser.KW_AGGREGATE);
					}
				}

				this.state = 798;
				this.match(ImpalaSqlParserParser.KW_FUNCTION);
				this.state = 801;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
				case 1:
					{
					this.state = 799;
					this.match(ImpalaSqlParserParser.KW_IF);
					this.state = 800;
					this.match(ImpalaSqlParserParser.KW_EXISTS);
					}
					break;
				}
				this.state = 803;
				this.qualifiedName();
				this.state = 816;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
				case 1:
					{
					this.state = 804;
					this.match(ImpalaSqlParserParser.LPAREN);
					this.state = 813;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParserParser.T__0) | (1 << ImpalaSqlParserParser.T__1) | (1 << ImpalaSqlParserParser.T__2) | (1 << ImpalaSqlParserParser.T__3) | (1 << ImpalaSqlParserParser.T__7) | (1 << ImpalaSqlParserParser.KW_ARRAY) | (1 << ImpalaSqlParserParser.KW_ASC) | (1 << ImpalaSqlParserParser.KW_AT) | (1 << ImpalaSqlParserParser.KW_BERNOULLI))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ImpalaSqlParserParser.KW_CALL - 34)) | (1 << (ImpalaSqlParserParser.KW_CASCADE - 34)) | (1 << (ImpalaSqlParserParser.KW_CATALOGS - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMN - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMNS - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMENT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMIT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMITTED - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT - 34)) | (1 << (ImpalaSqlParserParser.KW_DATA - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASE - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASES - 34)) | (1 << (ImpalaSqlParserParser.KW_DATE - 34)) | (1 << (ImpalaSqlParserParser.KW_DAY - 34)) | (1 << (ImpalaSqlParserParser.KW_DAYS - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ImpalaSqlParserParser.KW_DEFINER - 66)) | (1 << (ImpalaSqlParserParser.KW_DEFAULT - 66)) | (1 << (ImpalaSqlParserParser.KW_DESC - 66)) | (1 << (ImpalaSqlParserParser.KW_EXCLUDING - 66)) | (1 << (ImpalaSqlParserParser.KW_EXPLAIN - 66)) | (1 << (ImpalaSqlParserParser.KW_FETCH - 66)) | (1 << (ImpalaSqlParserParser.KW_FILTER - 66)) | (1 << (ImpalaSqlParserParser.KW_FIRST - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ImpalaSqlParserParser.KW_FOLLOWING - 98)) | (1 << (ImpalaSqlParserParser.KW_FORMAT - 98)) | (1 << (ImpalaSqlParserParser.KW_FUNCTIONS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANT - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTED - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRAPHVIZ - 98)) | (1 << (ImpalaSqlParserParser.KW_HOUR - 98)) | (1 << (ImpalaSqlParserParser.KW_IF - 98)) | (1 << (ImpalaSqlParserParser.KW_INCLUDING - 98)) | (1 << (ImpalaSqlParserParser.KW_INPUT - 98)) | (1 << (ImpalaSqlParserParser.KW_INTERVAL - 98)) | (1 << (ImpalaSqlParserParser.KW_INVOKER - 98)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (ImpalaSqlParserParser.KW_IO - 132)) | (1 << (ImpalaSqlParserParser.KW_ISOLATION - 132)) | (1 << (ImpalaSqlParserParser.KW_JSON - 132)) | (1 << (ImpalaSqlParserParser.KW_LAST - 132)) | (1 << (ImpalaSqlParserParser.KW_LATERAL - 132)) | (1 << (ImpalaSqlParserParser.KW_LEVEL - 132)) | (1 << (ImpalaSqlParserParser.KW_LIMIT - 132)) | (1 << (ImpalaSqlParserParser.KW_LOGICAL - 132)) | (1 << (ImpalaSqlParserParser.KW_MAP - 132)) | (1 << (ImpalaSqlParserParser.KW_MINUTE - 132)) | (1 << (ImpalaSqlParserParser.KW_MONTH - 132)) | (1 << (ImpalaSqlParserParser.KW_NEXT - 132)) | (1 << (ImpalaSqlParserParser.KW_NFC - 132)) | (1 << (ImpalaSqlParserParser.KW_NFD - 132)) | (1 << (ImpalaSqlParserParser.KW_NFKC - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (ImpalaSqlParserParser.KW_NFKD - 164)) | (1 << (ImpalaSqlParserParser.KW_NO - 164)) | (1 << (ImpalaSqlParserParser.KW_NONE - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLIF - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLS - 164)) | (1 << (ImpalaSqlParserParser.KW_OFFSET - 164)) | (1 << (ImpalaSqlParserParser.KW_ONLY - 164)) | (1 << (ImpalaSqlParserParser.KW_OPTION - 164)) | (1 << (ImpalaSqlParserParser.KW_ORDINALITY - 164)) | (1 << (ImpalaSqlParserParser.KW_OUTPUT - 164)) | (1 << (ImpalaSqlParserParser.KW_OVER - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITIONS - 164)) | (1 << (ImpalaSqlParserParser.KW_PATH - 164)) | (1 << (ImpalaSqlParserParser.KW_PARQUET - 164)) | (1 << (ImpalaSqlParserParser.KW_POSITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PRECEDING - 164)) | (1 << (ImpalaSqlParserParser.KW_PRIVILEGES - 164)) | (1 << (ImpalaSqlParserParser.KW_PROPERTIES - 164)) | (1 << (ImpalaSqlParserParser.KW_RANGE - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (ImpalaSqlParserParser.KW_READ - 196)) | (1 << (ImpalaSqlParserParser.KW_RENAME - 196)) | (1 << (ImpalaSqlParserParser.KW_REPEATABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_REPLACE - 196)) | (1 << (ImpalaSqlParserParser.KW_RESET - 196)) | (1 << (ImpalaSqlParserParser.KW_RESTRICT - 196)) | (1 << (ImpalaSqlParserParser.KW_REVOKE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLES - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLLBACK - 196)) | (1 << (ImpalaSqlParserParser.KW_ROW - 196)) | (1 << (ImpalaSqlParserParser.KW_ROWS - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMA - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMAS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECOND - 196)) | (1 << (ImpalaSqlParserParser.KW_SECONDS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECURITY - 196)) | (1 << (ImpalaSqlParserParser.KW_SERIALIZABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_SESSION - 196)))) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (ImpalaSqlParserParser.KW_SET - 228)) | (1 << (ImpalaSqlParserParser.KW_SETS - 228)) | (1 << (ImpalaSqlParserParser.KW_SHOW - 228)) | (1 << (ImpalaSqlParserParser.KW_SOME - 228)) | (1 << (ImpalaSqlParserParser.KW_START - 228)) | (1 << (ImpalaSqlParserParser.KW_STATS - 228)) | (1 << (ImpalaSqlParserParser.KW_STRUCT - 228)) | (1 << (ImpalaSqlParserParser.KW_SUBSTRING - 228)) | (1 << (ImpalaSqlParserParser.KW_SYSTEM - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLES - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLESAMPLE - 228)) | (1 << (ImpalaSqlParserParser.KW_TEXT - 228)) | (1 << (ImpalaSqlParserParser.KW_TIES - 228)) | (1 << (ImpalaSqlParserParser.KW_TIME - 228)) | (1 << (ImpalaSqlParserParser.KW_TIMESTAMP - 228)) | (1 << (ImpalaSqlParserParser.KW_TO - 228)) | (1 << (ImpalaSqlParserParser.KW_TRANSACTION - 228)) | (1 << (ImpalaSqlParserParser.KW_TRY_CAST - 228)) | (1 << (ImpalaSqlParserParser.KW_TYPE - 228)))) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (ImpalaSqlParserParser.KW_UNBOUNDED - 260)) | (1 << (ImpalaSqlParserParser.KW_UNCOMMITTED - 260)) | (1 << (ImpalaSqlParserParser.KW_USE - 260)) | (1 << (ImpalaSqlParserParser.KW_USER - 260)) | (1 << (ImpalaSqlParserParser.KW_VALIDATE - 260)) | (1 << (ImpalaSqlParserParser.KW_VERBOSE - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEW - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEWS - 260)) | (1 << (ImpalaSqlParserParser.KW_WORK - 260)) | (1 << (ImpalaSqlParserParser.KW_WRITE - 260)) | (1 << (ImpalaSqlParserParser.KW_YEAR - 260)) | (1 << (ImpalaSqlParserParser.KW_ZONE - 260)))) !== 0) || ((((_la - 321)) & ~0x1F) === 0 && ((1 << (_la - 321)) & ((1 << (ImpalaSqlParserParser.STRING - 321)) | (1 << (ImpalaSqlParserParser.IDENTIFIER - 321)) | (1 << (ImpalaSqlParserParser.DIGIT_IDENTIFIER - 321)) | (1 << (ImpalaSqlParserParser.BACKQUOTED_IDENTIFIER - 321)) | (1 << (ImpalaSqlParserParser.TIME_WITH_TIME_ZONE - 321)) | (1 << (ImpalaSqlParserParser.TIMESTAMP_WITH_TIME_ZONE - 321)) | (1 << (ImpalaSqlParserParser.DOUBLE_PRECISION - 321)))) !== 0)) {
						{
						this.state = 805;
						this.type(0);
						this.state = 810;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === ImpalaSqlParserParser.COMMA) {
							{
							{
							this.state = 806;
							this.match(ImpalaSqlParserParser.COMMA);
							this.state = 807;
							this.type(0);
							}
							}
							this.state = 812;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
					}

					this.state = 815;
					this.match(ImpalaSqlParserParser.RPAREN);
					}
					break;
				}
				}
				break;

			case 45:
				_localctx = new CreateRoleContext(_localctx);
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 818;
				this.match(ImpalaSqlParserParser.KW_CREATE);
				this.state = 819;
				this.match(ImpalaSqlParserParser.KW_ROLE);
				this.state = 820;
				(_localctx as CreateRoleContext)._name = this.identifier();
				}
				break;

			case 46:
				_localctx = new DropRoleContext(_localctx);
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 821;
				this.match(ImpalaSqlParserParser.KW_DROP);
				this.state = 822;
				this.match(ImpalaSqlParserParser.KW_ROLE);
				this.state = 823;
				(_localctx as DropRoleContext)._name = this.identifier();
				}
				break;

			case 47:
				_localctx = new GrantRoleContext(_localctx);
				this.enterOuterAlt(_localctx, 47);
				{
				this.state = 824;
				this.match(ImpalaSqlParserParser.KW_GRANT);
				this.state = 825;
				this.match(ImpalaSqlParserParser.KW_ROLE);
				this.state = 826;
				this.identifier();
				this.state = 827;
				this.match(ImpalaSqlParserParser.KW_TO);
				this.state = 828;
				this.match(ImpalaSqlParserParser.KW_GROUP);
				this.state = 829;
				this.identifier();
				}
				break;

			case 48:
				_localctx = new GrantContext(_localctx);
				this.enterOuterAlt(_localctx, 48);
				{
				this.state = 831;
				this.match(ImpalaSqlParserParser.KW_GRANT);
				this.state = 832;
				this.privilege();
				this.state = 833;
				this.match(ImpalaSqlParserParser.KW_ON);
				this.state = 834;
				this.objectType();
				this.state = 836;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
				case 1:
					{
					this.state = 835;
					this.qualifiedName();
					}
					break;
				}
				this.state = 838;
				this.match(ImpalaSqlParserParser.KW_TO);
				this.state = 839;
				(_localctx as GrantContext)._grantee = this.principal();
				}
				break;

			case 49:
				_localctx = new GrantRoleContext(_localctx);
				this.enterOuterAlt(_localctx, 49);
				{
				this.state = 841;
				this.match(ImpalaSqlParserParser.KW_REVOKE);
				this.state = 842;
				this.match(ImpalaSqlParserParser.KW_ROLE);
				this.state = 843;
				this.identifier();
				this.state = 844;
				this.match(ImpalaSqlParserParser.KW_FROM);
				this.state = 845;
				this.match(ImpalaSqlParserParser.KW_GROUP);
				this.state = 846;
				this.identifier();
				}
				break;

			case 50:
				_localctx = new RevokeContext(_localctx);
				this.enterOuterAlt(_localctx, 50);
				{
				this.state = 848;
				this.match(ImpalaSqlParserParser.KW_REVOKE);
				this.state = 852;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_GRANT) {
					{
					this.state = 849;
					this.match(ImpalaSqlParserParser.KW_GRANT);
					this.state = 850;
					this.match(ImpalaSqlParserParser.KW_OPTION);
					this.state = 851;
					this.match(ImpalaSqlParserParser.KW_FOR);
					}
				}

				this.state = 854;
				this.privilege();
				this.state = 855;
				this.match(ImpalaSqlParserParser.KW_ON);
				this.state = 856;
				this.objectType();
				this.state = 858;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParserParser.T__0) | (1 << ImpalaSqlParserParser.T__1) | (1 << ImpalaSqlParserParser.T__2) | (1 << ImpalaSqlParserParser.T__3) | (1 << ImpalaSqlParserParser.T__7) | (1 << ImpalaSqlParserParser.KW_ARRAY) | (1 << ImpalaSqlParserParser.KW_ASC) | (1 << ImpalaSqlParserParser.KW_AT) | (1 << ImpalaSqlParserParser.KW_BERNOULLI))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ImpalaSqlParserParser.KW_CALL - 34)) | (1 << (ImpalaSqlParserParser.KW_CASCADE - 34)) | (1 << (ImpalaSqlParserParser.KW_CATALOGS - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMN - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMNS - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMENT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMIT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMITTED - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT - 34)) | (1 << (ImpalaSqlParserParser.KW_DATA - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASE - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASES - 34)) | (1 << (ImpalaSqlParserParser.KW_DATE - 34)) | (1 << (ImpalaSqlParserParser.KW_DAY - 34)) | (1 << (ImpalaSqlParserParser.KW_DAYS - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ImpalaSqlParserParser.KW_DEFINER - 66)) | (1 << (ImpalaSqlParserParser.KW_DEFAULT - 66)) | (1 << (ImpalaSqlParserParser.KW_DESC - 66)) | (1 << (ImpalaSqlParserParser.KW_EXCLUDING - 66)) | (1 << (ImpalaSqlParserParser.KW_EXPLAIN - 66)) | (1 << (ImpalaSqlParserParser.KW_FETCH - 66)) | (1 << (ImpalaSqlParserParser.KW_FILTER - 66)) | (1 << (ImpalaSqlParserParser.KW_FIRST - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ImpalaSqlParserParser.KW_FOLLOWING - 98)) | (1 << (ImpalaSqlParserParser.KW_FORMAT - 98)) | (1 << (ImpalaSqlParserParser.KW_FUNCTIONS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANT - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTED - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRAPHVIZ - 98)) | (1 << (ImpalaSqlParserParser.KW_HOUR - 98)) | (1 << (ImpalaSqlParserParser.KW_IF - 98)) | (1 << (ImpalaSqlParserParser.KW_INCLUDING - 98)) | (1 << (ImpalaSqlParserParser.KW_INPUT - 98)) | (1 << (ImpalaSqlParserParser.KW_INTERVAL - 98)) | (1 << (ImpalaSqlParserParser.KW_INVOKER - 98)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (ImpalaSqlParserParser.KW_IO - 132)) | (1 << (ImpalaSqlParserParser.KW_ISOLATION - 132)) | (1 << (ImpalaSqlParserParser.KW_JSON - 132)) | (1 << (ImpalaSqlParserParser.KW_LAST - 132)) | (1 << (ImpalaSqlParserParser.KW_LATERAL - 132)) | (1 << (ImpalaSqlParserParser.KW_LEVEL - 132)) | (1 << (ImpalaSqlParserParser.KW_LIMIT - 132)) | (1 << (ImpalaSqlParserParser.KW_LOGICAL - 132)) | (1 << (ImpalaSqlParserParser.KW_MAP - 132)) | (1 << (ImpalaSqlParserParser.KW_MINUTE - 132)) | (1 << (ImpalaSqlParserParser.KW_MONTH - 132)) | (1 << (ImpalaSqlParserParser.KW_NEXT - 132)) | (1 << (ImpalaSqlParserParser.KW_NFC - 132)) | (1 << (ImpalaSqlParserParser.KW_NFD - 132)) | (1 << (ImpalaSqlParserParser.KW_NFKC - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (ImpalaSqlParserParser.KW_NFKD - 164)) | (1 << (ImpalaSqlParserParser.KW_NO - 164)) | (1 << (ImpalaSqlParserParser.KW_NONE - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLIF - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLS - 164)) | (1 << (ImpalaSqlParserParser.KW_OFFSET - 164)) | (1 << (ImpalaSqlParserParser.KW_ONLY - 164)) | (1 << (ImpalaSqlParserParser.KW_OPTION - 164)) | (1 << (ImpalaSqlParserParser.KW_ORDINALITY - 164)) | (1 << (ImpalaSqlParserParser.KW_OUTPUT - 164)) | (1 << (ImpalaSqlParserParser.KW_OVER - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITIONS - 164)) | (1 << (ImpalaSqlParserParser.KW_PATH - 164)) | (1 << (ImpalaSqlParserParser.KW_PARQUET - 164)) | (1 << (ImpalaSqlParserParser.KW_POSITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PRECEDING - 164)) | (1 << (ImpalaSqlParserParser.KW_PRIVILEGES - 164)) | (1 << (ImpalaSqlParserParser.KW_PROPERTIES - 164)) | (1 << (ImpalaSqlParserParser.KW_RANGE - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (ImpalaSqlParserParser.KW_READ - 196)) | (1 << (ImpalaSqlParserParser.KW_RENAME - 196)) | (1 << (ImpalaSqlParserParser.KW_REPEATABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_REPLACE - 196)) | (1 << (ImpalaSqlParserParser.KW_RESET - 196)) | (1 << (ImpalaSqlParserParser.KW_RESTRICT - 196)) | (1 << (ImpalaSqlParserParser.KW_REVOKE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLES - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLLBACK - 196)) | (1 << (ImpalaSqlParserParser.KW_ROW - 196)) | (1 << (ImpalaSqlParserParser.KW_ROWS - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMA - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMAS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECOND - 196)) | (1 << (ImpalaSqlParserParser.KW_SECONDS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECURITY - 196)) | (1 << (ImpalaSqlParserParser.KW_SERIALIZABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_SESSION - 196)))) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (ImpalaSqlParserParser.KW_SET - 228)) | (1 << (ImpalaSqlParserParser.KW_SETS - 228)) | (1 << (ImpalaSqlParserParser.KW_SHOW - 228)) | (1 << (ImpalaSqlParserParser.KW_SOME - 228)) | (1 << (ImpalaSqlParserParser.KW_START - 228)) | (1 << (ImpalaSqlParserParser.KW_STATS - 228)) | (1 << (ImpalaSqlParserParser.KW_SUBSTRING - 228)) | (1 << (ImpalaSqlParserParser.KW_SYSTEM - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLES - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLESAMPLE - 228)) | (1 << (ImpalaSqlParserParser.KW_TEXT - 228)) | (1 << (ImpalaSqlParserParser.KW_TIES - 228)) | (1 << (ImpalaSqlParserParser.KW_TIME - 228)) | (1 << (ImpalaSqlParserParser.KW_TIMESTAMP - 228)) | (1 << (ImpalaSqlParserParser.KW_TO - 228)) | (1 << (ImpalaSqlParserParser.KW_TRANSACTION - 228)) | (1 << (ImpalaSqlParserParser.KW_TRY_CAST - 228)) | (1 << (ImpalaSqlParserParser.KW_TYPE - 228)))) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (ImpalaSqlParserParser.KW_UNBOUNDED - 260)) | (1 << (ImpalaSqlParserParser.KW_UNCOMMITTED - 260)) | (1 << (ImpalaSqlParserParser.KW_USE - 260)) | (1 << (ImpalaSqlParserParser.KW_USER - 260)) | (1 << (ImpalaSqlParserParser.KW_VALIDATE - 260)) | (1 << (ImpalaSqlParserParser.KW_VERBOSE - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEW - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEWS - 260)) | (1 << (ImpalaSqlParserParser.KW_WORK - 260)) | (1 << (ImpalaSqlParserParser.KW_WRITE - 260)) | (1 << (ImpalaSqlParserParser.KW_YEAR - 260)) | (1 << (ImpalaSqlParserParser.KW_ZONE - 260)))) !== 0) || ((((_la - 321)) & ~0x1F) === 0 && ((1 << (_la - 321)) & ((1 << (ImpalaSqlParserParser.STRING - 321)) | (1 << (ImpalaSqlParserParser.IDENTIFIER - 321)) | (1 << (ImpalaSqlParserParser.DIGIT_IDENTIFIER - 321)) | (1 << (ImpalaSqlParserParser.BACKQUOTED_IDENTIFIER - 321)))) !== 0)) {
					{
					this.state = 857;
					this.qualifiedName();
					}
				}

				this.state = 860;
				this.match(ImpalaSqlParserParser.KW_FROM);
				this.state = 866;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
				case 1:
					{
					this.state = 861;
					(_localctx as RevokeContext)._grantee = this.principal();
					}
					break;

				case 2:
					{
					this.state = 863;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
					case 1:
						{
						this.state = 862;
						this.match(ImpalaSqlParserParser.KW_ROLE);
						}
						break;
					}
					this.state = 865;
					this.identifier();
					}
					break;
				}
				}
				break;

			case 51:
				_localctx = new InsertIntoContext(_localctx);
				this.enterOuterAlt(_localctx, 51);
				{
				this.state = 869;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_WITH) {
					{
					this.state = 868;
					this.with();
					}
				}

				this.state = 871;
				this.match(ImpalaSqlParserParser.KW_INSERT);
				this.state = 873;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParserParser.T__0) | (1 << ImpalaSqlParserParser.T__1) | (1 << ImpalaSqlParserParser.T__2) | (1 << ImpalaSqlParserParser.T__3) | (1 << ImpalaSqlParserParser.T__4) | (1 << ImpalaSqlParserParser.T__5) | (1 << ImpalaSqlParserParser.T__6))) !== 0)) {
					{
					this.state = 872;
					this.hintClause();
					}
				}

				this.state = 875;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParserParser.KW_INTO || _la === ImpalaSqlParserParser.KW_OVERWRITE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 877;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_TABLE) {
					{
					this.state = 876;
					this.match(ImpalaSqlParserParser.KW_TABLE);
					}
				}

				this.state = 879;
				this.qualifiedName();
				this.state = 881;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
				case 1:
					{
					this.state = 880;
					this.columnAliases();
					}
					break;
				}
				this.state = 895;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_PARTITION) {
					{
					this.state = 883;
					this.match(ImpalaSqlParserParser.KW_PARTITION);
					this.state = 884;
					this.match(ImpalaSqlParserParser.LPAREN);
					this.state = 885;
					this.expression();
					this.state = 890;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParserParser.COMMA) {
						{
						{
						this.state = 886;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 887;
						this.expression();
						}
						}
						this.state = 892;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 893;
					this.match(ImpalaSqlParserParser.RPAREN);
					}
				}

				this.state = 898;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParserParser.T__0) | (1 << ImpalaSqlParserParser.T__1) | (1 << ImpalaSqlParserParser.T__2) | (1 << ImpalaSqlParserParser.T__3) | (1 << ImpalaSqlParserParser.T__4) | (1 << ImpalaSqlParserParser.T__5) | (1 << ImpalaSqlParserParser.T__6))) !== 0)) {
					{
					this.state = 897;
					this.hintClause();
					}
				}

				this.state = 900;
				this.query();
				}
				break;

			case 52:
				_localctx = new DeleteContext(_localctx);
				this.enterOuterAlt(_localctx, 52);
				{
				this.state = 902;
				this.match(ImpalaSqlParserParser.KW_DELETE);
				this.state = 904;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_FROM) {
					{
					this.state = 903;
					this.match(ImpalaSqlParserParser.KW_FROM);
					}
				}

				this.state = 906;
				this.qualifiedName();
				this.state = 909;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_WHERE) {
					{
					this.state = 907;
					this.match(ImpalaSqlParserParser.KW_WHERE);
					this.state = 908;
					this.booleanExpression(0);
					}
				}

				}
				break;

			case 53:
				_localctx = new DeleteTableRefContext(_localctx);
				this.enterOuterAlt(_localctx, 53);
				{
				this.state = 911;
				this.match(ImpalaSqlParserParser.KW_DELETE);
				this.state = 912;
				this.expression();
				this.state = 917;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParserParser.T__0) | (1 << ImpalaSqlParserParser.T__1) | (1 << ImpalaSqlParserParser.T__2) | (1 << ImpalaSqlParserParser.T__3) | (1 << ImpalaSqlParserParser.T__7) | (1 << ImpalaSqlParserParser.KW_ARRAY) | (1 << ImpalaSqlParserParser.KW_AS) | (1 << ImpalaSqlParserParser.KW_ASC) | (1 << ImpalaSqlParserParser.KW_AT) | (1 << ImpalaSqlParserParser.KW_BERNOULLI))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ImpalaSqlParserParser.KW_CALL - 34)) | (1 << (ImpalaSqlParserParser.KW_CASCADE - 34)) | (1 << (ImpalaSqlParserParser.KW_CATALOGS - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMN - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMNS - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMENT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMIT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMITTED - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT - 34)) | (1 << (ImpalaSqlParserParser.KW_DATA - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASE - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASES - 34)) | (1 << (ImpalaSqlParserParser.KW_DATE - 34)) | (1 << (ImpalaSqlParserParser.KW_DAY - 34)) | (1 << (ImpalaSqlParserParser.KW_DAYS - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ImpalaSqlParserParser.KW_DEFINER - 66)) | (1 << (ImpalaSqlParserParser.KW_DEFAULT - 66)) | (1 << (ImpalaSqlParserParser.KW_DESC - 66)) | (1 << (ImpalaSqlParserParser.KW_EXCLUDING - 66)) | (1 << (ImpalaSqlParserParser.KW_EXPLAIN - 66)) | (1 << (ImpalaSqlParserParser.KW_FETCH - 66)) | (1 << (ImpalaSqlParserParser.KW_FILTER - 66)) | (1 << (ImpalaSqlParserParser.KW_FIRST - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ImpalaSqlParserParser.KW_FOLLOWING - 98)) | (1 << (ImpalaSqlParserParser.KW_FORMAT - 98)) | (1 << (ImpalaSqlParserParser.KW_FUNCTIONS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANT - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTED - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRAPHVIZ - 98)) | (1 << (ImpalaSqlParserParser.KW_HOUR - 98)) | (1 << (ImpalaSqlParserParser.KW_IF - 98)) | (1 << (ImpalaSqlParserParser.KW_INCLUDING - 98)) | (1 << (ImpalaSqlParserParser.KW_INPUT - 98)) | (1 << (ImpalaSqlParserParser.KW_INTERVAL - 98)) | (1 << (ImpalaSqlParserParser.KW_INVOKER - 98)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (ImpalaSqlParserParser.KW_IO - 132)) | (1 << (ImpalaSqlParserParser.KW_ISOLATION - 132)) | (1 << (ImpalaSqlParserParser.KW_JSON - 132)) | (1 << (ImpalaSqlParserParser.KW_LAST - 132)) | (1 << (ImpalaSqlParserParser.KW_LATERAL - 132)) | (1 << (ImpalaSqlParserParser.KW_LEVEL - 132)) | (1 << (ImpalaSqlParserParser.KW_LIMIT - 132)) | (1 << (ImpalaSqlParserParser.KW_LOGICAL - 132)) | (1 << (ImpalaSqlParserParser.KW_MAP - 132)) | (1 << (ImpalaSqlParserParser.KW_MINUTE - 132)) | (1 << (ImpalaSqlParserParser.KW_MONTH - 132)) | (1 << (ImpalaSqlParserParser.KW_NEXT - 132)) | (1 << (ImpalaSqlParserParser.KW_NFC - 132)) | (1 << (ImpalaSqlParserParser.KW_NFD - 132)) | (1 << (ImpalaSqlParserParser.KW_NFKC - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (ImpalaSqlParserParser.KW_NFKD - 164)) | (1 << (ImpalaSqlParserParser.KW_NO - 164)) | (1 << (ImpalaSqlParserParser.KW_NONE - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLIF - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLS - 164)) | (1 << (ImpalaSqlParserParser.KW_OFFSET - 164)) | (1 << (ImpalaSqlParserParser.KW_ONLY - 164)) | (1 << (ImpalaSqlParserParser.KW_OPTION - 164)) | (1 << (ImpalaSqlParserParser.KW_ORDINALITY - 164)) | (1 << (ImpalaSqlParserParser.KW_OUTPUT - 164)) | (1 << (ImpalaSqlParserParser.KW_OVER - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITIONS - 164)) | (1 << (ImpalaSqlParserParser.KW_PATH - 164)) | (1 << (ImpalaSqlParserParser.KW_PARQUET - 164)) | (1 << (ImpalaSqlParserParser.KW_POSITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PRECEDING - 164)) | (1 << (ImpalaSqlParserParser.KW_PRIVILEGES - 164)) | (1 << (ImpalaSqlParserParser.KW_PROPERTIES - 164)) | (1 << (ImpalaSqlParserParser.KW_RANGE - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (ImpalaSqlParserParser.KW_READ - 196)) | (1 << (ImpalaSqlParserParser.KW_RENAME - 196)) | (1 << (ImpalaSqlParserParser.KW_REPEATABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_REPLACE - 196)) | (1 << (ImpalaSqlParserParser.KW_RESET - 196)) | (1 << (ImpalaSqlParserParser.KW_RESTRICT - 196)) | (1 << (ImpalaSqlParserParser.KW_REVOKE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLES - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLLBACK - 196)) | (1 << (ImpalaSqlParserParser.KW_ROW - 196)) | (1 << (ImpalaSqlParserParser.KW_ROWS - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMA - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMAS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECOND - 196)) | (1 << (ImpalaSqlParserParser.KW_SECONDS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECURITY - 196)) | (1 << (ImpalaSqlParserParser.KW_SERIALIZABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_SESSION - 196)))) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (ImpalaSqlParserParser.KW_SET - 228)) | (1 << (ImpalaSqlParserParser.KW_SETS - 228)) | (1 << (ImpalaSqlParserParser.KW_SHOW - 228)) | (1 << (ImpalaSqlParserParser.KW_SOME - 228)) | (1 << (ImpalaSqlParserParser.KW_START - 228)) | (1 << (ImpalaSqlParserParser.KW_STATS - 228)) | (1 << (ImpalaSqlParserParser.KW_SUBSTRING - 228)) | (1 << (ImpalaSqlParserParser.KW_SYSTEM - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLES - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLESAMPLE - 228)) | (1 << (ImpalaSqlParserParser.KW_TEXT - 228)) | (1 << (ImpalaSqlParserParser.KW_TIES - 228)) | (1 << (ImpalaSqlParserParser.KW_TIME - 228)) | (1 << (ImpalaSqlParserParser.KW_TIMESTAMP - 228)) | (1 << (ImpalaSqlParserParser.KW_TO - 228)) | (1 << (ImpalaSqlParserParser.KW_TRANSACTION - 228)) | (1 << (ImpalaSqlParserParser.KW_TRY_CAST - 228)) | (1 << (ImpalaSqlParserParser.KW_TYPE - 228)))) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (ImpalaSqlParserParser.KW_UNBOUNDED - 260)) | (1 << (ImpalaSqlParserParser.KW_UNCOMMITTED - 260)) | (1 << (ImpalaSqlParserParser.KW_USE - 260)) | (1 << (ImpalaSqlParserParser.KW_USER - 260)) | (1 << (ImpalaSqlParserParser.KW_VALIDATE - 260)) | (1 << (ImpalaSqlParserParser.KW_VERBOSE - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEW - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEWS - 260)) | (1 << (ImpalaSqlParserParser.KW_WORK - 260)) | (1 << (ImpalaSqlParserParser.KW_WRITE - 260)) | (1 << (ImpalaSqlParserParser.KW_YEAR - 260)) | (1 << (ImpalaSqlParserParser.KW_ZONE - 260)))) !== 0) || ((((_la - 321)) & ~0x1F) === 0 && ((1 << (_la - 321)) & ((1 << (ImpalaSqlParserParser.STRING - 321)) | (1 << (ImpalaSqlParserParser.IDENTIFIER - 321)) | (1 << (ImpalaSqlParserParser.DIGIT_IDENTIFIER - 321)) | (1 << (ImpalaSqlParserParser.BACKQUOTED_IDENTIFIER - 321)))) !== 0)) {
					{
					this.state = 914;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ImpalaSqlParserParser.KW_AS) {
						{
						this.state = 913;
						this.match(ImpalaSqlParserParser.KW_AS);
						}
					}

					this.state = 916;
					this.identifier();
					}
				}

				this.state = 919;
				this.match(ImpalaSqlParserParser.KW_FROM);
				this.state = 920;
				this.relation(0);
				this.state = 925;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 921;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 922;
						this.relation(0);
						}
						}
					}
					this.state = 927;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
				}
				this.state = 930;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_WHERE) {
					{
					this.state = 928;
					this.match(ImpalaSqlParserParser.KW_WHERE);
					this.state = 929;
					this.booleanExpression(0);
					}
				}

				}
				break;

			case 54:
				_localctx = new UpdateTableContext(_localctx);
				this.enterOuterAlt(_localctx, 54);
				{
				this.state = 932;
				this.match(ImpalaSqlParserParser.KW_UPDATE);
				this.state = 933;
				this.qualifiedName();
				this.state = 934;
				this.match(ImpalaSqlParserParser.KW_SET);
				this.state = 935;
				this.assignmentList();
				this.state = 945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_FROM) {
					{
					this.state = 936;
					this.match(ImpalaSqlParserParser.KW_FROM);
					this.state = 937;
					this.relation(0);
					this.state = 942;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParserParser.COMMA) {
						{
						{
						this.state = 938;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 939;
						this.relation(0);
						}
						}
						this.state = 944;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 949;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_WHERE) {
					{
					this.state = 947;
					this.match(ImpalaSqlParserParser.KW_WHERE);
					this.state = 948;
					this.booleanExpression(0);
					}
				}

				}
				break;

			case 55:
				_localctx = new UpsertContext(_localctx);
				this.enterOuterAlt(_localctx, 55);
				{
				this.state = 951;
				this.match(ImpalaSqlParserParser.KW_UPSERT);
				this.state = 953;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParserParser.T__0) | (1 << ImpalaSqlParserParser.T__1) | (1 << ImpalaSqlParserParser.T__2) | (1 << ImpalaSqlParserParser.T__3) | (1 << ImpalaSqlParserParser.T__4) | (1 << ImpalaSqlParserParser.T__5) | (1 << ImpalaSqlParserParser.T__6))) !== 0)) {
					{
					this.state = 952;
					this.hintClause();
					}
				}

				this.state = 955;
				this.match(ImpalaSqlParserParser.KW_INTO);
				this.state = 957;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_TABLE) {
					{
					this.state = 956;
					this.match(ImpalaSqlParserParser.KW_TABLE);
					}
				}

				this.state = 959;
				this.qualifiedName();
				this.state = 961;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
				case 1:
					{
					this.state = 960;
					this.columnAliases();
					}
					break;
				}
				this.state = 964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParserParser.T__0) | (1 << ImpalaSqlParserParser.T__1) | (1 << ImpalaSqlParserParser.T__2) | (1 << ImpalaSqlParserParser.T__3) | (1 << ImpalaSqlParserParser.T__4) | (1 << ImpalaSqlParserParser.T__5) | (1 << ImpalaSqlParserParser.T__6))) !== 0)) {
					{
					this.state = 963;
					this.hintClause();
					}
				}

				this.state = 966;
				this.query();
				}
				break;

			case 56:
				_localctx = new ShowSchemasContext(_localctx);
				this.enterOuterAlt(_localctx, 56);
				{
				this.state = 968;
				this.match(ImpalaSqlParserParser.KW_SHOW);
				this.state = 969;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParserParser.KW_DATABASES || _la === ImpalaSqlParserParser.KW_SCHEMAS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 981;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_LIKE || _la === ImpalaSqlParserParser.STRING || _la === ImpalaSqlParserParser.UNICODE_STRING) {
					{
					this.state = 971;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ImpalaSqlParserParser.KW_LIKE) {
						{
						this.state = 970;
						this.match(ImpalaSqlParserParser.KW_LIKE);
						}
					}

					this.state = 973;
					(_localctx as ShowSchemasContext)._pattern = this.string();
					this.state = 978;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParserParser.BITWISEOR) {
						{
						{
						this.state = 974;
						this.match(ImpalaSqlParserParser.BITWISEOR);
						this.state = 975;
						this.string();
						}
						}
						this.state = 980;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;

			case 57:
				_localctx = new ShowTablesContext(_localctx);
				this.enterOuterAlt(_localctx, 57);
				{
				this.state = 983;
				this.match(ImpalaSqlParserParser.KW_SHOW);
				this.state = 984;
				this.match(ImpalaSqlParserParser.KW_TABLES);
				this.state = 987;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_FROM || _la === ImpalaSqlParserParser.KW_IN) {
					{
					this.state = 985;
					_la = this._input.LA(1);
					if (!(_la === ImpalaSqlParserParser.KW_FROM || _la === ImpalaSqlParserParser.KW_IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 986;
					this.qualifiedName();
					}
				}

				this.state = 1000;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_LIKE || _la === ImpalaSqlParserParser.STRING || _la === ImpalaSqlParserParser.UNICODE_STRING) {
					{
					this.state = 990;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ImpalaSqlParserParser.KW_LIKE) {
						{
						this.state = 989;
						this.match(ImpalaSqlParserParser.KW_LIKE);
						}
					}

					this.state = 992;
					(_localctx as ShowTablesContext)._pattern = this.string();
					this.state = 997;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParserParser.BITWISEOR) {
						{
						{
						this.state = 993;
						this.match(ImpalaSqlParserParser.BITWISEOR);
						this.state = 994;
						this.string();
						}
						}
						this.state = 999;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;

			case 58:
				_localctx = new ShowFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 58);
				{
				this.state = 1002;
				this.match(ImpalaSqlParserParser.KW_SHOW);
				this.state = 1004;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.T__4 || _la === ImpalaSqlParserParser.KW_AGGREGATE) {
					{
					this.state = 1003;
					_la = this._input.LA(1);
					if (!(_la === ImpalaSqlParserParser.T__4 || _la === ImpalaSqlParserParser.KW_AGGREGATE)) {
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

				this.state = 1006;
				this.match(ImpalaSqlParserParser.KW_FUNCTIONS);
				this.state = 1009;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_IN) {
					{
					this.state = 1007;
					this.match(ImpalaSqlParserParser.KW_IN);
					this.state = 1008;
					this.qualifiedName();
					}
				}

				this.state = 1022;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_LIKE || _la === ImpalaSqlParserParser.STRING || _la === ImpalaSqlParserParser.UNICODE_STRING) {
					{
					this.state = 1012;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ImpalaSqlParserParser.KW_LIKE) {
						{
						this.state = 1011;
						this.match(ImpalaSqlParserParser.KW_LIKE);
						}
					}

					this.state = 1014;
					(_localctx as ShowFunctionsContext)._pattern = this.string();
					this.state = 1019;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParserParser.BITWISEOR) {
						{
						{
						this.state = 1015;
						this.match(ImpalaSqlParserParser.BITWISEOR);
						this.state = 1016;
						this.string();
						}
						}
						this.state = 1021;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;

			case 59:
				_localctx = new ShowCreateTableContext(_localctx);
				this.enterOuterAlt(_localctx, 59);
				{
				this.state = 1024;
				this.match(ImpalaSqlParserParser.KW_SHOW);
				this.state = 1025;
				this.match(ImpalaSqlParserParser.KW_CREATE);
				this.state = 1026;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 1027;
				this.qualifiedName();
				}
				break;

			case 60:
				_localctx = new ShowCreateViewContext(_localctx);
				this.enterOuterAlt(_localctx, 60);
				{
				this.state = 1028;
				this.match(ImpalaSqlParserParser.KW_SHOW);
				this.state = 1029;
				this.match(ImpalaSqlParserParser.KW_CREATE);
				this.state = 1030;
				this.match(ImpalaSqlParserParser.KW_VIEW);
				this.state = 1031;
				this.qualifiedName();
				}
				break;

			case 61:
				_localctx = new ShowTableStatsContext(_localctx);
				this.enterOuterAlt(_localctx, 61);
				{
				this.state = 1032;
				this.match(ImpalaSqlParserParser.KW_SHOW);
				this.state = 1033;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 1034;
				this.match(ImpalaSqlParserParser.KW_STATS);
				this.state = 1035;
				this.qualifiedName();
				}
				break;

			case 62:
				_localctx = new ShowColumnStatsContext(_localctx);
				this.enterOuterAlt(_localctx, 62);
				{
				this.state = 1036;
				this.match(ImpalaSqlParserParser.KW_SHOW);
				this.state = 1037;
				this.match(ImpalaSqlParserParser.KW_COLUMN);
				this.state = 1038;
				this.match(ImpalaSqlParserParser.KW_STATS);
				this.state = 1039;
				this.qualifiedName();
				}
				break;

			case 63:
				_localctx = new ShowPartitionsContext(_localctx);
				this.enterOuterAlt(_localctx, 63);
				{
				this.state = 1040;
				this.match(ImpalaSqlParserParser.KW_SHOW);
				this.state = 1042;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_RANGE) {
					{
					this.state = 1041;
					this.match(ImpalaSqlParserParser.KW_RANGE);
					}
				}

				this.state = 1044;
				this.match(ImpalaSqlParserParser.KW_PARTITIONS);
				this.state = 1045;
				this.qualifiedName();
				}
				break;

			case 64:
				_localctx = new ShowFilesContext(_localctx);
				this.enterOuterAlt(_localctx, 64);
				{
				this.state = 1046;
				this.match(ImpalaSqlParserParser.KW_SHOW);
				this.state = 1047;
				this.match(ImpalaSqlParserParser.KW_FILES);
				this.state = 1048;
				this.match(ImpalaSqlParserParser.KW_IN);
				this.state = 1049;
				this.qualifiedName();
				this.state = 1059;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_PARTITION) {
					{
					this.state = 1050;
					this.match(ImpalaSqlParserParser.KW_PARTITION);
					this.state = 1051;
					this.match(ImpalaSqlParserParser.LPAREN);
					this.state = 1052;
					this.expression();
					this.state = 1055;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ImpalaSqlParserParser.COMMA) {
						{
						this.state = 1053;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 1054;
						this.expression();
						}
					}

					this.state = 1057;
					this.match(ImpalaSqlParserParser.RPAREN);
					}
				}

				}
				break;

			case 65:
				_localctx = new ShowRolesContext(_localctx);
				this.enterOuterAlt(_localctx, 65);
				{
				this.state = 1061;
				this.match(ImpalaSqlParserParser.KW_SHOW);
				this.state = 1063;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_CURRENT) {
					{
					this.state = 1062;
					this.match(ImpalaSqlParserParser.KW_CURRENT);
					}
				}

				this.state = 1065;
				this.match(ImpalaSqlParserParser.KW_ROLES);
				}
				break;

			case 66:
				_localctx = new ShowRoleGrantContext(_localctx);
				this.enterOuterAlt(_localctx, 66);
				{
				this.state = 1066;
				this.match(ImpalaSqlParserParser.KW_SHOW);
				this.state = 1067;
				this.match(ImpalaSqlParserParser.KW_ROLE);
				this.state = 1068;
				this.match(ImpalaSqlParserParser.KW_GRANT);
				this.state = 1069;
				this.match(ImpalaSqlParserParser.KW_GROUP);
				this.state = 1070;
				this.identifier();
				}
				break;

			case 67:
				_localctx = new ShowGrantRoleContext(_localctx);
				this.enterOuterAlt(_localctx, 67);
				{
				this.state = 1071;
				this.match(ImpalaSqlParserParser.KW_SHOW);
				this.state = 1072;
				this.match(ImpalaSqlParserParser.KW_GRANT);
				this.state = 1073;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParserParser.KW_ROLE || _la === ImpalaSqlParserParser.KW_USER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1074;
				this.identifier();
				}
				break;

			case 68:
				_localctx = new ShowGrantUserContext(_localctx);
				this.enterOuterAlt(_localctx, 68);
				{
				this.state = 1075;
				this.match(ImpalaSqlParserParser.KW_SHOW);
				this.state = 1076;
				this.match(ImpalaSqlParserParser.KW_GRANT);
				this.state = 1077;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParserParser.KW_GROUP || _la === ImpalaSqlParserParser.KW_ROLE || _la === ImpalaSqlParserParser.KW_USER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1078;
				this.identifier();
				{
				this.state = 1079;
				this.match(ImpalaSqlParserParser.KW_ON);
				this.state = 1080;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParserParser.KW_COLUMN || _la === ImpalaSqlParserParser.KW_DATABASE || _la === ImpalaSqlParserParser.KW_SERVER || _la === ImpalaSqlParserParser.KW_TABLE || _la === ImpalaSqlParserParser.KW_URI)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1082;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
				case 1:
					{
					this.state = 1081;
					this.qualifiedName();
					}
					break;
				}
				}
				}
				break;

			case 69:
				_localctx = new AddCommentsContext(_localctx);
				this.enterOuterAlt(_localctx, 69);
				{
				this.state = 1084;
				this.match(ImpalaSqlParserParser.KW_COMMENT);
				this.state = 1085;
				this.match(ImpalaSqlParserParser.KW_ON);
				this.state = 1086;
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParserParser.KW_COLUMN || _la === ImpalaSqlParserParser.KW_DATABASE || _la === ImpalaSqlParserParser.KW_TABLE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1087;
				this.qualifiedName();
				this.state = 1088;
				this.match(ImpalaSqlParserParser.KW_IS);
				this.state = 1091;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ImpalaSqlParserParser.STRING:
				case ImpalaSqlParserParser.UNICODE_STRING:
					{
					this.state = 1089;
					this.string();
					}
					break;
				case ImpalaSqlParserParser.KW_NULL:
					{
					this.state = 1090;
					this.match(ImpalaSqlParserParser.KW_NULL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 70:
				_localctx = new ExplainContext(_localctx);
				this.enterOuterAlt(_localctx, 70);
				{
				this.state = 1093;
				this.match(ImpalaSqlParserParser.KW_EXPLAIN);
				this.state = 1094;
				this.statement();
				}
				break;

			case 71:
				_localctx = new SetSessionContext(_localctx);
				this.enterOuterAlt(_localctx, 71);
				{
				this.state = 1095;
				this.match(ImpalaSqlParserParser.KW_SET);
				this.state = 1101;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
				case 1:
					{
					this.state = 1096;
					this.match(ImpalaSqlParserParser.T__2);
					}
					break;

				case 2:
					{
					this.state = 1097;
					this.identifier();
					this.state = 1098;
					this.match(ImpalaSqlParserParser.EQ);
					this.state = 1099;
					this.expression();
					}
					break;
				}
				}
				break;

			case 72:
				_localctx = new ShutdownContext(_localctx);
				this.enterOuterAlt(_localctx, 72);
				{
				this.state = 1103;
				this.match(ImpalaSqlParserParser.COLON);
				this.state = 1104;
				this.match(ImpalaSqlParserParser.KW_SHUTDOWN);
				this.state = 1105;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 1115;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
				case 1:
					{
					this.state = 1107;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ImpalaSqlParserParser.STRING || _la === ImpalaSqlParserParser.UNICODE_STRING) {
						{
						this.state = 1106;
						this.string();
						}
					}

					}
					break;

				case 2:
					{
					this.state = 1109;
					this.string();
					this.state = 1112;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ImpalaSqlParserParser.COMMA) {
						{
						this.state = 1110;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 1111;
						this.expression();
						}
					}

					}
					break;

				case 3:
					{
					this.state = 1114;
					this.expression();
					}
					break;
				}
				this.state = 1117;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 73:
				_localctx = new InvalidateMetaContext(_localctx);
				this.enterOuterAlt(_localctx, 73);
				{
				this.state = 1118;
				this.match(ImpalaSqlParserParser.KW_INVALIDATE);
				this.state = 1119;
				this.match(ImpalaSqlParserParser.KW_METADATA);
				this.state = 1120;
				this.qualifiedName();
				}
				break;

			case 74:
				_localctx = new LoadDataContext(_localctx);
				this.enterOuterAlt(_localctx, 74);
				{
				this.state = 1121;
				this.match(ImpalaSqlParserParser.KW_LOAD);
				this.state = 1122;
				this.match(ImpalaSqlParserParser.KW_DATA);
				this.state = 1123;
				this.match(ImpalaSqlParserParser.KW_INPATH);
				this.state = 1124;
				this.match(ImpalaSqlParserParser.STRING);
				this.state = 1126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_OVERWRITE) {
					{
					this.state = 1125;
					this.match(ImpalaSqlParserParser.KW_OVERWRITE);
					}
				}

				this.state = 1128;
				this.match(ImpalaSqlParserParser.KW_INTO);
				this.state = 1129;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 1130;
				this.qualifiedName();
				this.state = 1140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_PARTITION) {
					{
					this.state = 1131;
					this.match(ImpalaSqlParserParser.KW_PARTITION);
					this.state = 1132;
					this.match(ImpalaSqlParserParser.LPAREN);
					this.state = 1133;
					this.expression();
					this.state = 1136;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ImpalaSqlParserParser.COMMA) {
						{
						this.state = 1134;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 1135;
						this.expression();
						}
					}

					this.state = 1138;
					this.match(ImpalaSqlParserParser.RPAREN);
					}
				}

				}
				break;

			case 75:
				_localctx = new RefreshMetaContext(_localctx);
				this.enterOuterAlt(_localctx, 75);
				{
				this.state = 1142;
				this.match(ImpalaSqlParserParser.KW_REFRESH);
				this.state = 1143;
				this.qualifiedName();
				this.state = 1156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_PARTITION) {
					{
					this.state = 1144;
					this.match(ImpalaSqlParserParser.KW_PARTITION);
					this.state = 1145;
					this.match(ImpalaSqlParserParser.LPAREN);
					this.state = 1146;
					this.expression();
					this.state = 1151;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
					while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1 + 1) {
							{
							{
							this.state = 1147;
							this.match(ImpalaSqlParserParser.COMMA);
							this.state = 1148;
							this.expression();
							}
							}
						}
						this.state = 1153;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
					}
					this.state = 1154;
					this.match(ImpalaSqlParserParser.RPAREN);
					}
				}

				}
				break;

			case 76:
				_localctx = new RefreshAuthContext(_localctx);
				this.enterOuterAlt(_localctx, 76);
				{
				this.state = 1158;
				this.match(ImpalaSqlParserParser.KW_REFRESH);
				this.state = 1159;
				this.match(ImpalaSqlParserParser.KW_AUTHORIZATION);
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
		this.enterRule(_localctx, 4, ImpalaSqlParserParser.RULE_createCommonItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_SORT) {
				{
				this.state = 1162;
				this.match(ImpalaSqlParserParser.KW_SORT);
				this.state = 1163;
				this.match(ImpalaSqlParserParser.KW_BY);
				this.state = 1164;
				this.columnAliases();
				}
			}

			this.state = 1169;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				{
				this.state = 1167;
				this.match(ImpalaSqlParserParser.KW_COMMENT);
				this.state = 1168;
				_localctx._comment = this.string();
				}
				break;
			}
			this.state = 1174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_ROW) {
				{
				this.state = 1171;
				this.match(ImpalaSqlParserParser.KW_ROW);
				this.state = 1172;
				this.match(ImpalaSqlParserParser.KW_FORMAT);
				this.state = 1173;
				this.rowFormat();
				}
			}

			this.state = 1179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				{
				this.state = 1176;
				this.match(ImpalaSqlParserParser.KW_WITH);
				this.state = 1177;
				this.match(ImpalaSqlParserParser.KW_SERDEPROPERTIES);
				this.state = 1178;
				_localctx._serdProp = this.properties();
				}
				break;
			}
			this.state = 1184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_STORED) {
				{
				this.state = 1181;
				this.match(ImpalaSqlParserParser.KW_STORED);
				this.state = 1182;
				this.match(ImpalaSqlParserParser.KW_AS);
				this.state = 1183;
				this.fileFormat();
				}
			}

			this.state = 1188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_LOCATION) {
				{
				this.state = 1186;
				this.match(ImpalaSqlParserParser.KW_LOCATION);
				this.state = 1187;
				_localctx._location = this.string();
				}
			}

			this.state = 1200;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParserParser.KW_CACHED:
				{
				this.state = 1190;
				this.match(ImpalaSqlParserParser.KW_CACHED);
				this.state = 1191;
				this.match(ImpalaSqlParserParser.KW_IN);
				this.state = 1192;
				_localctx._cacheName = this.qualifiedName();
				this.state = 1197;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
				case 1:
					{
					this.state = 1193;
					this.match(ImpalaSqlParserParser.KW_WITH);
					this.state = 1194;
					this.match(ImpalaSqlParserParser.KW_REPLICATION);
					this.state = 1195;
					this.match(ImpalaSqlParserParser.EQ);
					this.state = 1196;
					this.match(ImpalaSqlParserParser.INTEGER_VALUE);
					}
					break;
				}
				}
				break;
			case ImpalaSqlParserParser.KW_UNCACHED:
				{
				this.state = 1199;
				this.match(ImpalaSqlParserParser.KW_UNCACHED);
				}
				break;
			case ImpalaSqlParserParser.EOF:
			case ImpalaSqlParserParser.T__5:
			case ImpalaSqlParserParser.KW_AS:
			case ImpalaSqlParserParser.KW_TBLPROPERTIES:
			case ImpalaSqlParserParser.KW_COMMENT:
			case ImpalaSqlParserParser.KW_COMPUTE:
			case ImpalaSqlParserParser.KW_CREATE:
			case ImpalaSqlParserParser.KW_DELETE:
			case ImpalaSqlParserParser.KW_UPDATE:
			case ImpalaSqlParserParser.KW_DESCRIBE:
			case ImpalaSqlParserParser.KW_DROP:
			case ImpalaSqlParserParser.KW_EXPLAIN:
			case ImpalaSqlParserParser.KW_GRANT:
			case ImpalaSqlParserParser.KW_INSERT:
			case ImpalaSqlParserParser.KW_INVALIDATE:
			case ImpalaSqlParserParser.KW_LOAD:
			case ImpalaSqlParserParser.KW_REVOKE:
			case ImpalaSqlParserParser.KW_REFRESH:
			case ImpalaSqlParserParser.KW_SELECT:
			case ImpalaSqlParserParser.KW_SET:
			case ImpalaSqlParserParser.KW_SHOW:
			case ImpalaSqlParserParser.KW_TABLE:
			case ImpalaSqlParserParser.KW_TRUNCATE:
			case ImpalaSqlParserParser.KW_USE:
			case ImpalaSqlParserParser.KW_UPSERT:
			case ImpalaSqlParserParser.KW_VALUES:
			case ImpalaSqlParserParser.KW_WITH:
			case ImpalaSqlParserParser.SEMICOLON:
			case ImpalaSqlParserParser.COLON:
			case ImpalaSqlParserParser.LPAREN:
				break;
			default:
				break;
			}
			this.state = 1204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_TBLPROPERTIES) {
				{
				this.state = 1202;
				this.match(ImpalaSqlParserParser.KW_TBLPROPERTIES);
				this.state = 1203;
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
		this.enterRule(_localctx, 6, ImpalaSqlParserParser.RULE_assignmentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1206;
			this.assignmentItem();
			this.state = 1211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParserParser.COMMA) {
				{
				{
				this.state = 1207;
				this.match(ImpalaSqlParserParser.COMMA);
				this.state = 1208;
				this.assignmentItem();
				}
				}
				this.state = 1213;
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
		this.enterRule(_localctx, 8, ImpalaSqlParserParser.RULE_assignmentItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1214;
			this.qualifiedName();
			this.state = 1215;
			this.match(ImpalaSqlParserParser.EQ);
			this.state = 1216;
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
		this.enterRule(_localctx, 10, ImpalaSqlParserParser.RULE_viewColumns);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1218;
			this.match(ImpalaSqlParserParser.LPAREN);
			this.state = 1219;
			this.identifier();
			this.state = 1222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_COMMENT) {
				{
				this.state = 1220;
				this.match(ImpalaSqlParserParser.KW_COMMENT);
				this.state = 1221;
				this.string();
				}
			}

			this.state = 1232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParserParser.COMMA) {
				{
				{
				this.state = 1224;
				this.match(ImpalaSqlParserParser.COMMA);
				this.state = 1225;
				this.identifier();
				this.state = 1228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_COMMENT) {
					{
					this.state = 1226;
					this.match(ImpalaSqlParserParser.KW_COMMENT);
					this.state = 1227;
					this.string();
					}
				}

				}
				}
				this.state = 1234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1235;
			this.match(ImpalaSqlParserParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 12, ImpalaSqlParserParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_WITH) {
				{
				this.state = 1237;
				this.with();
				}
			}

			this.state = 1240;
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
		this.enterRule(_localctx, 14, ImpalaSqlParserParser.RULE_with);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1242;
			this.match(ImpalaSqlParserParser.KW_WITH);
			this.state = 1243;
			this.namedQuery();
			this.state = 1248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParserParser.COMMA) {
				{
				{
				this.state = 1244;
				this.match(ImpalaSqlParserParser.COMMA);
				this.state = 1245;
				this.namedQuery();
				}
				}
				this.state = 1250;
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
		this.enterRule(_localctx, 16, ImpalaSqlParserParser.RULE_constraintSpecification);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1251;
			this.match(ImpalaSqlParserParser.KW_PRIMARY);
			this.state = 1252;
			this.match(ImpalaSqlParserParser.KW_KEY);
			this.state = 1253;
			this.columnAliases();
			this.state = 1255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_DISABLE) {
				{
				this.state = 1254;
				this.match(ImpalaSqlParserParser.KW_DISABLE);
				}
			}

			this.state = 1260;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
			case 1:
				{
				this.state = 1257;
				this.match(ImpalaSqlParserParser.KW_NOVALIDATE);
				}
				break;

			case 2:
				{
				this.state = 1258;
				this.match(ImpalaSqlParserParser.COMMA);
				this.state = 1259;
				this.match(ImpalaSqlParserParser.KW_NOVALIDATE);
				}
				break;
			}
			this.state = 1265;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				{
				this.state = 1262;
				this.match(ImpalaSqlParserParser.KW_RELY);
				}
				break;

			case 2:
				{
				this.state = 1263;
				this.match(ImpalaSqlParserParser.COMMA);
				this.state = 1264;
				this.match(ImpalaSqlParserParser.KW_RELY);
				}
				break;
			}
			this.state = 1279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_FOREIGN || _la === ImpalaSqlParserParser.COMMA) {
				{
				this.state = 1270;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ImpalaSqlParserParser.COMMA:
					{
					this.state = 1267;
					this.match(ImpalaSqlParserParser.COMMA);
					this.state = 1268;
					this.foreignKeySpecification();
					}
					break;
				case ImpalaSqlParserParser.KW_FOREIGN:
					{
					this.state = 1269;
					this.foreignKeySpecification();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1276;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1272;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 1273;
						this.foreignKeySpecification();
						}
						}
					}
					this.state = 1278;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
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
		this.enterRule(_localctx, 18, ImpalaSqlParserParser.RULE_foreignKeySpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1281;
			this.match(ImpalaSqlParserParser.KW_FOREIGN);
			this.state = 1282;
			this.match(ImpalaSqlParserParser.KW_KEY);
			this.state = 1283;
			this.columnAliases();
			this.state = 1284;
			this.match(ImpalaSqlParserParser.KW_REFERENCES);
			this.state = 1285;
			_localctx._tblName = this.qualifiedName();
			this.state = 1286;
			this.columnAliases();
			this.state = 1288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_DISABLE) {
				{
				this.state = 1287;
				this.match(ImpalaSqlParserParser.KW_DISABLE);
				}
			}

			this.state = 1291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_NOVALIDATE) {
				{
				this.state = 1290;
				this.match(ImpalaSqlParserParser.KW_NOVALIDATE);
				}
			}

			this.state = 1294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_RELY) {
				{
				this.state = 1293;
				this.match(ImpalaSqlParserParser.KW_RELY);
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
		this.enterRule(_localctx, 20, ImpalaSqlParserParser.RULE_columnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1296;
			this.identifier();
			this.state = 1297;
			this.type(0);
			this.state = 1300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_COMMENT) {
				{
				this.state = 1298;
				this.match(ImpalaSqlParserParser.KW_COMMENT);
				this.state = 1299;
				this.string();
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
		this.enterRule(_localctx, 22, ImpalaSqlParserParser.RULE_kuduTableElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1302;
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
		this.enterRule(_localctx, 24, ImpalaSqlParserParser.RULE_kuduColumnDefinition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1304;
			this.identifier();
			this.state = 1305;
			this.type(0);
			this.state = 1313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_BLOCK_SIZE || _la === ImpalaSqlParserParser.KW_COMPRESSION || _la === ImpalaSqlParserParser.KW_DEFAULT || _la === ImpalaSqlParserParser.KW_ENCODING || _la === ImpalaSqlParserParser.KW_NOT || _la === ImpalaSqlParserParser.KW_NULL) {
				{
				this.state = 1306;
				this.kuduAttributes();
				this.state = 1310;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1307;
						this.kuduAttributes();
						}
						}
					}
					this.state = 1312;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 164, this._ctx);
				}
				}
			}

			this.state = 1317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_COMMENT) {
				{
				this.state = 1315;
				this.match(ImpalaSqlParserParser.KW_COMMENT);
				this.state = 1316;
				this.string();
				}
			}

			this.state = 1321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_PRIMARY) {
				{
				this.state = 1319;
				this.match(ImpalaSqlParserParser.KW_PRIMARY);
				this.state = 1320;
				this.match(ImpalaSqlParserParser.KW_KEY);
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
		this.enterRule(_localctx, 26, ImpalaSqlParserParser.RULE_columnSpecWithKudu);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1323;
			this.identifier();
			this.state = 1324;
			this.type(0);
			this.state = 1327;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				{
				this.state = 1325;
				this.match(ImpalaSqlParserParser.KW_COMMENT);
				this.state = 1326;
				this.string();
				}
				break;
			}
			this.state = 1336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_BLOCK_SIZE || _la === ImpalaSqlParserParser.KW_COMPRESSION || _la === ImpalaSqlParserParser.KW_DEFAULT || _la === ImpalaSqlParserParser.KW_ENCODING || _la === ImpalaSqlParserParser.KW_NOT || _la === ImpalaSqlParserParser.KW_NULL) {
				{
				this.state = 1329;
				this.kuduAttributes();
				this.state = 1333;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1330;
						this.kuduAttributes();
						}
						}
					}
					this.state = 1335;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
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
		this.enterRule(_localctx, 28, ImpalaSqlParserParser.RULE_kuduAttributes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1343;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParserParser.KW_NOT:
			case ImpalaSqlParserParser.KW_NULL:
				{
				this.state = 1339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_NOT) {
					{
					this.state = 1338;
					this.match(ImpalaSqlParserParser.KW_NOT);
					}
				}

				this.state = 1341;
				this.match(ImpalaSqlParserParser.KW_NULL);
				}
				break;
			case ImpalaSqlParserParser.KW_BLOCK_SIZE:
			case ImpalaSqlParserParser.KW_COMPRESSION:
			case ImpalaSqlParserParser.KW_DEFAULT:
			case ImpalaSqlParserParser.KW_ENCODING:
				{
				this.state = 1342;
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
		this.enterRule(_localctx, 30, ImpalaSqlParserParser.RULE_kuduStorageAttr);
		try {
			this.state = 1353;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParserParser.KW_ENCODING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1345;
				this.match(ImpalaSqlParserParser.KW_ENCODING);
				this.state = 1346;
				this.expression();
				}
				break;
			case ImpalaSqlParserParser.KW_COMPRESSION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1347;
				this.match(ImpalaSqlParserParser.KW_COMPRESSION);
				this.state = 1348;
				this.expression();
				}
				break;
			case ImpalaSqlParserParser.KW_DEFAULT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1349;
				this.match(ImpalaSqlParserParser.KW_DEFAULT);
				this.state = 1350;
				this.expression();
				}
				break;
			case ImpalaSqlParserParser.KW_BLOCK_SIZE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1351;
				this.match(ImpalaSqlParserParser.KW_BLOCK_SIZE);
				this.state = 1352;
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
		this.enterRule(_localctx, 32, ImpalaSqlParserParser.RULE_statsKey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1355;
			_la = this._input.LA(1);
			if (!(((((_la - 293)) & ~0x1F) === 0 && ((1 << (_la - 293)) & ((1 << (ImpalaSqlParserParser.STATS_NUMDVS - 293)) | (1 << (ImpalaSqlParserParser.STATS_NUMNULLS - 293)) | (1 << (ImpalaSqlParserParser.STATS_AVGSIZE - 293)) | (1 << (ImpalaSqlParserParser.STATS_MAXSIZE - 293)))) !== 0))) {
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
		this.enterRule(_localctx, 34, ImpalaSqlParserParser.RULE_fileFormat);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1357;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParserParser.KW_PARQUET || ((((_la - 285)) & ~0x1F) === 0 && ((1 << (_la - 285)) & ((1 << (ImpalaSqlParserParser.KW_TEXTFILE - 285)) | (1 << (ImpalaSqlParserParser.KW_ORC - 285)) | (1 << (ImpalaSqlParserParser.KW_AVRO - 285)) | (1 << (ImpalaSqlParserParser.KW_SEQUENCEFILE - 285)) | (1 << (ImpalaSqlParserParser.KW_RCFILE - 285)))) !== 0))) {
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
		this.enterRule(_localctx, 36, ImpalaSqlParserParser.RULE_kuduPartitionClause);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1372;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParserParser.KW_HASH:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1359;
				this.hashClause();
				this.state = 1364;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1360;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 1361;
						this.hashClause();
						}
						}
					}
					this.state = 1366;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
				}
				this.state = 1369;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.COMMA) {
					{
					this.state = 1367;
					this.match(ImpalaSqlParserParser.COMMA);
					this.state = 1368;
					this.rangeClause();
					}
				}

				}
				}
				break;
			case ImpalaSqlParserParser.KW_RANGE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1371;
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
		this.enterRule(_localctx, 38, ImpalaSqlParserParser.RULE_hashClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1374;
			this.match(ImpalaSqlParserParser.KW_HASH);
			this.state = 1376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.LPAREN) {
				{
				this.state = 1375;
				this.columnAliases();
				}
			}

			this.state = 1378;
			this.match(ImpalaSqlParserParser.KW_PARTITIONS);
			this.state = 1379;
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
		this.enterRule(_localctx, 40, ImpalaSqlParserParser.RULE_rangeClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1381;
			this.match(ImpalaSqlParserParser.KW_RANGE);
			this.state = 1383;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				this.state = 1382;
				this.columnAliases();
				}
				break;
			}
			this.state = 1385;
			this.match(ImpalaSqlParserParser.LPAREN);
			{
			this.state = 1386;
			this.match(ImpalaSqlParserParser.KW_PARTITION);
			this.state = 1387;
			this.kuduPartitionSpec();
			this.state = 1393;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1388;
					this.match(ImpalaSqlParserParser.COMMA);
					this.state = 1389;
					this.match(ImpalaSqlParserParser.KW_PARTITION);
					this.state = 1390;
					this.kuduPartitionSpec();
					}
					}
				}
				this.state = 1395;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
			}
			}
			this.state = 1396;
			this.match(ImpalaSqlParserParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 42, ImpalaSqlParserParser.RULE_kuduPartitionSpec);
		try {
			this.state = 1408;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParserParser.KW_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1398;
				this.match(ImpalaSqlParserParser.KW_VALUE);
				this.state = 1399;
				this.partitionCol();
				this.state = 1400;
				this.expression();
				}
				break;
			case ImpalaSqlParserParser.T__0:
			case ImpalaSqlParserParser.T__1:
			case ImpalaSqlParserParser.T__2:
			case ImpalaSqlParserParser.T__3:
			case ImpalaSqlParserParser.T__7:
			case ImpalaSqlParserParser.KW_ARRAY:
			case ImpalaSqlParserParser.KW_ASC:
			case ImpalaSqlParserParser.KW_AT:
			case ImpalaSqlParserParser.KW_BERNOULLI:
			case ImpalaSqlParserParser.KW_CALL:
			case ImpalaSqlParserParser.KW_CASCADE:
			case ImpalaSqlParserParser.KW_CASE:
			case ImpalaSqlParserParser.KW_CAST:
			case ImpalaSqlParserParser.KW_CATALOGS:
			case ImpalaSqlParserParser.KW_COLUMN:
			case ImpalaSqlParserParser.KW_COLUMNS:
			case ImpalaSqlParserParser.KW_COMMENT:
			case ImpalaSqlParserParser.KW_COMMIT:
			case ImpalaSqlParserParser.KW_COMMITTED:
			case ImpalaSqlParserParser.KW_CURRENT:
			case ImpalaSqlParserParser.KW_CURRENT_DATE:
			case ImpalaSqlParserParser.KW_CURRENT_PATH:
			case ImpalaSqlParserParser.KW_CURRENT_TIME:
			case ImpalaSqlParserParser.KW_CURRENT_TIMESTAMP:
			case ImpalaSqlParserParser.KW_CURRENT_USER:
			case ImpalaSqlParserParser.KW_DATA:
			case ImpalaSqlParserParser.KW_DATABASE:
			case ImpalaSqlParserParser.KW_DATABASES:
			case ImpalaSqlParserParser.KW_DATE:
			case ImpalaSqlParserParser.KW_DAY:
			case ImpalaSqlParserParser.KW_DAYS:
			case ImpalaSqlParserParser.KW_DEFINER:
			case ImpalaSqlParserParser.KW_DEFAULT:
			case ImpalaSqlParserParser.KW_DESC:
			case ImpalaSqlParserParser.KW_EXCLUDING:
			case ImpalaSqlParserParser.KW_EXISTS:
			case ImpalaSqlParserParser.KW_EXPLAIN:
			case ImpalaSqlParserParser.KW_EXTRACT:
			case ImpalaSqlParserParser.KW_FALSE:
			case ImpalaSqlParserParser.KW_FETCH:
			case ImpalaSqlParserParser.KW_FILTER:
			case ImpalaSqlParserParser.KW_FIRST:
			case ImpalaSqlParserParser.KW_FOLLOWING:
			case ImpalaSqlParserParser.KW_FORMAT:
			case ImpalaSqlParserParser.KW_FUNCTIONS:
			case ImpalaSqlParserParser.KW_GRANT:
			case ImpalaSqlParserParser.KW_GRANTED:
			case ImpalaSqlParserParser.KW_GRANTS:
			case ImpalaSqlParserParser.KW_GRAPHVIZ:
			case ImpalaSqlParserParser.KW_GROUPING:
			case ImpalaSqlParserParser.KW_HOUR:
			case ImpalaSqlParserParser.KW_IF:
			case ImpalaSqlParserParser.KW_INCLUDING:
			case ImpalaSqlParserParser.KW_INPUT:
			case ImpalaSqlParserParser.KW_INTERVAL:
			case ImpalaSqlParserParser.KW_INVOKER:
			case ImpalaSqlParserParser.KW_IO:
			case ImpalaSqlParserParser.KW_ISOLATION:
			case ImpalaSqlParserParser.KW_JSON:
			case ImpalaSqlParserParser.KW_LAST:
			case ImpalaSqlParserParser.KW_LATERAL:
			case ImpalaSqlParserParser.KW_LEVEL:
			case ImpalaSqlParserParser.KW_LIMIT:
			case ImpalaSqlParserParser.KW_LOCALTIME:
			case ImpalaSqlParserParser.KW_LOCALTIMESTAMP:
			case ImpalaSqlParserParser.KW_LOGICAL:
			case ImpalaSqlParserParser.KW_MAP:
			case ImpalaSqlParserParser.KW_MINUTE:
			case ImpalaSqlParserParser.KW_MONTH:
			case ImpalaSqlParserParser.KW_NEXT:
			case ImpalaSqlParserParser.KW_NFC:
			case ImpalaSqlParserParser.KW_NFD:
			case ImpalaSqlParserParser.KW_NFKC:
			case ImpalaSqlParserParser.KW_NFKD:
			case ImpalaSqlParserParser.KW_NO:
			case ImpalaSqlParserParser.KW_NONE:
			case ImpalaSqlParserParser.KW_NORMALIZE:
			case ImpalaSqlParserParser.KW_NOT:
			case ImpalaSqlParserParser.KW_NULL:
			case ImpalaSqlParserParser.KW_NULLIF:
			case ImpalaSqlParserParser.KW_NULLS:
			case ImpalaSqlParserParser.KW_OFFSET:
			case ImpalaSqlParserParser.KW_ONLY:
			case ImpalaSqlParserParser.KW_OPTION:
			case ImpalaSqlParserParser.KW_ORDINALITY:
			case ImpalaSqlParserParser.KW_OUTPUT:
			case ImpalaSqlParserParser.KW_OVER:
			case ImpalaSqlParserParser.KW_PARTITION:
			case ImpalaSqlParserParser.KW_PARTITIONS:
			case ImpalaSqlParserParser.KW_PATH:
			case ImpalaSqlParserParser.KW_PARQUET:
			case ImpalaSqlParserParser.KW_POSITION:
			case ImpalaSqlParserParser.KW_PRECEDING:
			case ImpalaSqlParserParser.KW_PRIVILEGES:
			case ImpalaSqlParserParser.KW_PROPERTIES:
			case ImpalaSqlParserParser.KW_RANGE:
			case ImpalaSqlParserParser.KW_READ:
			case ImpalaSqlParserParser.KW_RENAME:
			case ImpalaSqlParserParser.KW_REPEATABLE:
			case ImpalaSqlParserParser.KW_REPLACE:
			case ImpalaSqlParserParser.KW_RESET:
			case ImpalaSqlParserParser.KW_RESTRICT:
			case ImpalaSqlParserParser.KW_REVOKE:
			case ImpalaSqlParserParser.KW_ROLE:
			case ImpalaSqlParserParser.KW_ROLES:
			case ImpalaSqlParserParser.KW_ROLLBACK:
			case ImpalaSqlParserParser.KW_ROW:
			case ImpalaSqlParserParser.KW_ROWS:
			case ImpalaSqlParserParser.KW_SCHEMA:
			case ImpalaSqlParserParser.KW_SCHEMAS:
			case ImpalaSqlParserParser.KW_SECOND:
			case ImpalaSqlParserParser.KW_SECONDS:
			case ImpalaSqlParserParser.KW_SECURITY:
			case ImpalaSqlParserParser.KW_SERIALIZABLE:
			case ImpalaSqlParserParser.KW_SESSION:
			case ImpalaSqlParserParser.KW_SET:
			case ImpalaSqlParserParser.KW_SETS:
			case ImpalaSqlParserParser.KW_SHOW:
			case ImpalaSqlParserParser.KW_SOME:
			case ImpalaSqlParserParser.KW_START:
			case ImpalaSqlParserParser.KW_STATS:
			case ImpalaSqlParserParser.KW_SUBSTRING:
			case ImpalaSqlParserParser.KW_SYSTEM:
			case ImpalaSqlParserParser.KW_TABLES:
			case ImpalaSqlParserParser.KW_TABLESAMPLE:
			case ImpalaSqlParserParser.KW_TEXT:
			case ImpalaSqlParserParser.KW_TIES:
			case ImpalaSqlParserParser.KW_TIME:
			case ImpalaSqlParserParser.KW_TIMESTAMP:
			case ImpalaSqlParserParser.KW_TO:
			case ImpalaSqlParserParser.KW_TRANSACTION:
			case ImpalaSqlParserParser.KW_TRUE:
			case ImpalaSqlParserParser.KW_TRY_CAST:
			case ImpalaSqlParserParser.KW_TYPE:
			case ImpalaSqlParserParser.KW_UNBOUNDED:
			case ImpalaSqlParserParser.KW_UNCOMMITTED:
			case ImpalaSqlParserParser.KW_USE:
			case ImpalaSqlParserParser.KW_USER:
			case ImpalaSqlParserParser.KW_VALIDATE:
			case ImpalaSqlParserParser.KW_VERBOSE:
			case ImpalaSqlParserParser.KW_VIEW:
			case ImpalaSqlParserParser.KW_VIEWS:
			case ImpalaSqlParserParser.KW_WORK:
			case ImpalaSqlParserParser.KW_WRITE:
			case ImpalaSqlParserParser.KW_YEAR:
			case ImpalaSqlParserParser.KW_ZONE:
			case ImpalaSqlParserParser.PLUS:
			case ImpalaSqlParserParser.MINUS:
			case ImpalaSqlParserParser.LPAREN:
			case ImpalaSqlParserParser.QUESTION:
			case ImpalaSqlParserParser.STRING:
			case ImpalaSqlParserParser.UNICODE_STRING:
			case ImpalaSqlParserParser.BINARY_LITERAL:
			case ImpalaSqlParserParser.INTEGER_VALUE:
			case ImpalaSqlParserParser.DECIMAL_VALUE:
			case ImpalaSqlParserParser.DOUBLE_VALUE:
			case ImpalaSqlParserParser.IDENTIFIER:
			case ImpalaSqlParserParser.DIGIT_IDENTIFIER:
			case ImpalaSqlParserParser.BACKQUOTED_IDENTIFIER:
			case ImpalaSqlParserParser.DOUBLE_PRECISION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1402;
				this.expression();
				this.state = 1403;
				this.rangeOperator();
				this.state = 1404;
				this.match(ImpalaSqlParserParser.KW_VALUES);
				this.state = 1405;
				this.rangeOperator();
				this.state = 1406;
				this.expression();
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
		this.enterRule(_localctx, 44, ImpalaSqlParserParser.RULE_cacheSpec);
		try {
			this.state = 1420;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParserParser.KW_CACHED:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1410;
				this.match(ImpalaSqlParserParser.KW_CACHED);
				this.state = 1411;
				this.match(ImpalaSqlParserParser.KW_IN);
				this.state = 1412;
				this.identifier();
				this.state = 1417;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
				case 1:
					{
					this.state = 1413;
					this.match(ImpalaSqlParserParser.KW_WITH);
					this.state = 1414;
					this.match(ImpalaSqlParserParser.KW_REPLICATION);
					this.state = 1415;
					this.match(ImpalaSqlParserParser.EQ);
					this.state = 1416;
					this.number();
					}
					break;
				}
				}
				break;
			case ImpalaSqlParserParser.KW_UNCACHED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1419;
				this.match(ImpalaSqlParserParser.KW_UNCACHED);
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
		this.enterRule(_localctx, 46, ImpalaSqlParserParser.RULE_rangeOperator);
		try {
			this.state = 1427;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParserParser.T__0:
			case ImpalaSqlParserParser.T__1:
			case ImpalaSqlParserParser.T__2:
			case ImpalaSqlParserParser.T__3:
			case ImpalaSqlParserParser.T__7:
			case ImpalaSqlParserParser.KW_ARRAY:
			case ImpalaSqlParserParser.KW_ASC:
			case ImpalaSqlParserParser.KW_AT:
			case ImpalaSqlParserParser.KW_BERNOULLI:
			case ImpalaSqlParserParser.KW_CALL:
			case ImpalaSqlParserParser.KW_CASCADE:
			case ImpalaSqlParserParser.KW_CASE:
			case ImpalaSqlParserParser.KW_CAST:
			case ImpalaSqlParserParser.KW_CATALOGS:
			case ImpalaSqlParserParser.KW_COLUMN:
			case ImpalaSqlParserParser.KW_COLUMNS:
			case ImpalaSqlParserParser.KW_COMMENT:
			case ImpalaSqlParserParser.KW_COMMIT:
			case ImpalaSqlParserParser.KW_COMMITTED:
			case ImpalaSqlParserParser.KW_CURRENT:
			case ImpalaSqlParserParser.KW_CURRENT_DATE:
			case ImpalaSqlParserParser.KW_CURRENT_PATH:
			case ImpalaSqlParserParser.KW_CURRENT_TIME:
			case ImpalaSqlParserParser.KW_CURRENT_TIMESTAMP:
			case ImpalaSqlParserParser.KW_CURRENT_USER:
			case ImpalaSqlParserParser.KW_DATA:
			case ImpalaSqlParserParser.KW_DATABASE:
			case ImpalaSqlParserParser.KW_DATABASES:
			case ImpalaSqlParserParser.KW_DATE:
			case ImpalaSqlParserParser.KW_DAY:
			case ImpalaSqlParserParser.KW_DAYS:
			case ImpalaSqlParserParser.KW_DEFINER:
			case ImpalaSqlParserParser.KW_DEFAULT:
			case ImpalaSqlParserParser.KW_DESC:
			case ImpalaSqlParserParser.KW_EXCLUDING:
			case ImpalaSqlParserParser.KW_EXISTS:
			case ImpalaSqlParserParser.KW_EXPLAIN:
			case ImpalaSqlParserParser.KW_EXTRACT:
			case ImpalaSqlParserParser.KW_FALSE:
			case ImpalaSqlParserParser.KW_FETCH:
			case ImpalaSqlParserParser.KW_FILTER:
			case ImpalaSqlParserParser.KW_FIRST:
			case ImpalaSqlParserParser.KW_FOLLOWING:
			case ImpalaSqlParserParser.KW_FORMAT:
			case ImpalaSqlParserParser.KW_FUNCTIONS:
			case ImpalaSqlParserParser.KW_GRANT:
			case ImpalaSqlParserParser.KW_GRANTED:
			case ImpalaSqlParserParser.KW_GRANTS:
			case ImpalaSqlParserParser.KW_GRAPHVIZ:
			case ImpalaSqlParserParser.KW_GROUPING:
			case ImpalaSqlParserParser.KW_HOUR:
			case ImpalaSqlParserParser.KW_IF:
			case ImpalaSqlParserParser.KW_INCLUDING:
			case ImpalaSqlParserParser.KW_INPUT:
			case ImpalaSqlParserParser.KW_INTERVAL:
			case ImpalaSqlParserParser.KW_INVOKER:
			case ImpalaSqlParserParser.KW_IO:
			case ImpalaSqlParserParser.KW_ISOLATION:
			case ImpalaSqlParserParser.KW_JSON:
			case ImpalaSqlParserParser.KW_LAST:
			case ImpalaSqlParserParser.KW_LATERAL:
			case ImpalaSqlParserParser.KW_LEVEL:
			case ImpalaSqlParserParser.KW_LIMIT:
			case ImpalaSqlParserParser.KW_LOCALTIME:
			case ImpalaSqlParserParser.KW_LOCALTIMESTAMP:
			case ImpalaSqlParserParser.KW_LOGICAL:
			case ImpalaSqlParserParser.KW_MAP:
			case ImpalaSqlParserParser.KW_MINUTE:
			case ImpalaSqlParserParser.KW_MONTH:
			case ImpalaSqlParserParser.KW_NEXT:
			case ImpalaSqlParserParser.KW_NFC:
			case ImpalaSqlParserParser.KW_NFD:
			case ImpalaSqlParserParser.KW_NFKC:
			case ImpalaSqlParserParser.KW_NFKD:
			case ImpalaSqlParserParser.KW_NO:
			case ImpalaSqlParserParser.KW_NONE:
			case ImpalaSqlParserParser.KW_NORMALIZE:
			case ImpalaSqlParserParser.KW_NOT:
			case ImpalaSqlParserParser.KW_NULL:
			case ImpalaSqlParserParser.KW_NULLIF:
			case ImpalaSqlParserParser.KW_NULLS:
			case ImpalaSqlParserParser.KW_OFFSET:
			case ImpalaSqlParserParser.KW_ONLY:
			case ImpalaSqlParserParser.KW_OPTION:
			case ImpalaSqlParserParser.KW_ORDINALITY:
			case ImpalaSqlParserParser.KW_OUTPUT:
			case ImpalaSqlParserParser.KW_OVER:
			case ImpalaSqlParserParser.KW_PARTITION:
			case ImpalaSqlParserParser.KW_PARTITIONS:
			case ImpalaSqlParserParser.KW_PATH:
			case ImpalaSqlParserParser.KW_PARQUET:
			case ImpalaSqlParserParser.KW_POSITION:
			case ImpalaSqlParserParser.KW_PRECEDING:
			case ImpalaSqlParserParser.KW_PRIVILEGES:
			case ImpalaSqlParserParser.KW_PROPERTIES:
			case ImpalaSqlParserParser.KW_RANGE:
			case ImpalaSqlParserParser.KW_READ:
			case ImpalaSqlParserParser.KW_RENAME:
			case ImpalaSqlParserParser.KW_REPEATABLE:
			case ImpalaSqlParserParser.KW_REPLACE:
			case ImpalaSqlParserParser.KW_RESET:
			case ImpalaSqlParserParser.KW_RESTRICT:
			case ImpalaSqlParserParser.KW_REVOKE:
			case ImpalaSqlParserParser.KW_ROLE:
			case ImpalaSqlParserParser.KW_ROLES:
			case ImpalaSqlParserParser.KW_ROLLBACK:
			case ImpalaSqlParserParser.KW_ROW:
			case ImpalaSqlParserParser.KW_ROWS:
			case ImpalaSqlParserParser.KW_SCHEMA:
			case ImpalaSqlParserParser.KW_SCHEMAS:
			case ImpalaSqlParserParser.KW_SECOND:
			case ImpalaSqlParserParser.KW_SECONDS:
			case ImpalaSqlParserParser.KW_SECURITY:
			case ImpalaSqlParserParser.KW_SERIALIZABLE:
			case ImpalaSqlParserParser.KW_SESSION:
			case ImpalaSqlParserParser.KW_SET:
			case ImpalaSqlParserParser.KW_SETS:
			case ImpalaSqlParserParser.KW_SHOW:
			case ImpalaSqlParserParser.KW_SOME:
			case ImpalaSqlParserParser.KW_START:
			case ImpalaSqlParserParser.KW_STATS:
			case ImpalaSqlParserParser.KW_SUBSTRING:
			case ImpalaSqlParserParser.KW_SYSTEM:
			case ImpalaSqlParserParser.KW_TABLES:
			case ImpalaSqlParserParser.KW_TABLESAMPLE:
			case ImpalaSqlParserParser.KW_TEXT:
			case ImpalaSqlParserParser.KW_TIES:
			case ImpalaSqlParserParser.KW_TIME:
			case ImpalaSqlParserParser.KW_TIMESTAMP:
			case ImpalaSqlParserParser.KW_TO:
			case ImpalaSqlParserParser.KW_TRANSACTION:
			case ImpalaSqlParserParser.KW_TRUE:
			case ImpalaSqlParserParser.KW_TRY_CAST:
			case ImpalaSqlParserParser.KW_TYPE:
			case ImpalaSqlParserParser.KW_UNBOUNDED:
			case ImpalaSqlParserParser.KW_UNCOMMITTED:
			case ImpalaSqlParserParser.KW_USE:
			case ImpalaSqlParserParser.KW_USER:
			case ImpalaSqlParserParser.KW_VALIDATE:
			case ImpalaSqlParserParser.KW_VALUES:
			case ImpalaSqlParserParser.KW_VERBOSE:
			case ImpalaSqlParserParser.KW_VIEW:
			case ImpalaSqlParserParser.KW_VIEWS:
			case ImpalaSqlParserParser.KW_WORK:
			case ImpalaSqlParserParser.KW_WRITE:
			case ImpalaSqlParserParser.KW_YEAR:
			case ImpalaSqlParserParser.KW_ZONE:
			case ImpalaSqlParserParser.PLUS:
			case ImpalaSqlParserParser.MINUS:
			case ImpalaSqlParserParser.LPAREN:
			case ImpalaSqlParserParser.QUESTION:
			case ImpalaSqlParserParser.STRING:
			case ImpalaSqlParserParser.UNICODE_STRING:
			case ImpalaSqlParserParser.BINARY_LITERAL:
			case ImpalaSqlParserParser.INTEGER_VALUE:
			case ImpalaSqlParserParser.DECIMAL_VALUE:
			case ImpalaSqlParserParser.DOUBLE_VALUE:
			case ImpalaSqlParserParser.IDENTIFIER:
			case ImpalaSqlParserParser.DIGIT_IDENTIFIER:
			case ImpalaSqlParserParser.BACKQUOTED_IDENTIFIER:
			case ImpalaSqlParserParser.DOUBLE_PRECISION:
				this.enterOuterAlt(_localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case ImpalaSqlParserParser.LT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1423;
				this.match(ImpalaSqlParserParser.LT);
				}
				break;
			case ImpalaSqlParserParser.LTE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1424;
				this.match(ImpalaSqlParserParser.LTE);
				}
				break;
			case ImpalaSqlParserParser.GT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1425;
				this.match(ImpalaSqlParserParser.GT);
				}
				break;
			case ImpalaSqlParserParser.GTE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1426;
				this.match(ImpalaSqlParserParser.GTE);
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
		this.enterRule(_localctx, 48, ImpalaSqlParserParser.RULE_partitionCol);
		try {
			this.state = 1437;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParserParser.EQ:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1429;
				this.match(ImpalaSqlParserParser.EQ);
				}
				break;
			case ImpalaSqlParserParser.NEQ:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1430;
				this.match(ImpalaSqlParserParser.NEQ);
				}
				break;
			case ImpalaSqlParserParser.KW_LIKE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1431;
				this.match(ImpalaSqlParserParser.KW_LIKE);
				}
				break;
			case ImpalaSqlParserParser.KW_RLIKE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1432;
				this.match(ImpalaSqlParserParser.KW_RLIKE);
				}
				break;
			case ImpalaSqlParserParser.KW_REGEXP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1433;
				this.match(ImpalaSqlParserParser.KW_REGEXP);
				}
				break;
			case ImpalaSqlParserParser.KW_BETWEEN:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1434;
				this.match(ImpalaSqlParserParser.KW_BETWEEN);
				}
				break;
			case ImpalaSqlParserParser.KW_IN:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1435;
				this.match(ImpalaSqlParserParser.KW_IN);
				}
				break;
			case ImpalaSqlParserParser.T__0:
			case ImpalaSqlParserParser.T__1:
			case ImpalaSqlParserParser.T__2:
			case ImpalaSqlParserParser.T__3:
			case ImpalaSqlParserParser.T__7:
			case ImpalaSqlParserParser.KW_ARRAY:
			case ImpalaSqlParserParser.KW_ASC:
			case ImpalaSqlParserParser.KW_AT:
			case ImpalaSqlParserParser.KW_BERNOULLI:
			case ImpalaSqlParserParser.KW_CALL:
			case ImpalaSqlParserParser.KW_CASCADE:
			case ImpalaSqlParserParser.KW_CASE:
			case ImpalaSqlParserParser.KW_CAST:
			case ImpalaSqlParserParser.KW_CATALOGS:
			case ImpalaSqlParserParser.KW_COLUMN:
			case ImpalaSqlParserParser.KW_COLUMNS:
			case ImpalaSqlParserParser.KW_COMMENT:
			case ImpalaSqlParserParser.KW_COMMIT:
			case ImpalaSqlParserParser.KW_COMMITTED:
			case ImpalaSqlParserParser.KW_CURRENT:
			case ImpalaSqlParserParser.KW_CURRENT_DATE:
			case ImpalaSqlParserParser.KW_CURRENT_PATH:
			case ImpalaSqlParserParser.KW_CURRENT_TIME:
			case ImpalaSqlParserParser.KW_CURRENT_TIMESTAMP:
			case ImpalaSqlParserParser.KW_CURRENT_USER:
			case ImpalaSqlParserParser.KW_DATA:
			case ImpalaSqlParserParser.KW_DATABASE:
			case ImpalaSqlParserParser.KW_DATABASES:
			case ImpalaSqlParserParser.KW_DATE:
			case ImpalaSqlParserParser.KW_DAY:
			case ImpalaSqlParserParser.KW_DAYS:
			case ImpalaSqlParserParser.KW_DEFINER:
			case ImpalaSqlParserParser.KW_DEFAULT:
			case ImpalaSqlParserParser.KW_DESC:
			case ImpalaSqlParserParser.KW_EXCLUDING:
			case ImpalaSqlParserParser.KW_EXISTS:
			case ImpalaSqlParserParser.KW_EXPLAIN:
			case ImpalaSqlParserParser.KW_EXTRACT:
			case ImpalaSqlParserParser.KW_FALSE:
			case ImpalaSqlParserParser.KW_FETCH:
			case ImpalaSqlParserParser.KW_FILTER:
			case ImpalaSqlParserParser.KW_FIRST:
			case ImpalaSqlParserParser.KW_FOLLOWING:
			case ImpalaSqlParserParser.KW_FORMAT:
			case ImpalaSqlParserParser.KW_FUNCTIONS:
			case ImpalaSqlParserParser.KW_GRANT:
			case ImpalaSqlParserParser.KW_GRANTED:
			case ImpalaSqlParserParser.KW_GRANTS:
			case ImpalaSqlParserParser.KW_GRAPHVIZ:
			case ImpalaSqlParserParser.KW_GROUPING:
			case ImpalaSqlParserParser.KW_HOUR:
			case ImpalaSqlParserParser.KW_IF:
			case ImpalaSqlParserParser.KW_INCLUDING:
			case ImpalaSqlParserParser.KW_INPUT:
			case ImpalaSqlParserParser.KW_INTERVAL:
			case ImpalaSqlParserParser.KW_INVOKER:
			case ImpalaSqlParserParser.KW_IO:
			case ImpalaSqlParserParser.KW_ISOLATION:
			case ImpalaSqlParserParser.KW_JSON:
			case ImpalaSqlParserParser.KW_LAST:
			case ImpalaSqlParserParser.KW_LATERAL:
			case ImpalaSqlParserParser.KW_LEVEL:
			case ImpalaSqlParserParser.KW_LIMIT:
			case ImpalaSqlParserParser.KW_LOCALTIME:
			case ImpalaSqlParserParser.KW_LOCALTIMESTAMP:
			case ImpalaSqlParserParser.KW_LOGICAL:
			case ImpalaSqlParserParser.KW_MAP:
			case ImpalaSqlParserParser.KW_MINUTE:
			case ImpalaSqlParserParser.KW_MONTH:
			case ImpalaSqlParserParser.KW_NEXT:
			case ImpalaSqlParserParser.KW_NFC:
			case ImpalaSqlParserParser.KW_NFD:
			case ImpalaSqlParserParser.KW_NFKC:
			case ImpalaSqlParserParser.KW_NFKD:
			case ImpalaSqlParserParser.KW_NO:
			case ImpalaSqlParserParser.KW_NONE:
			case ImpalaSqlParserParser.KW_NORMALIZE:
			case ImpalaSqlParserParser.KW_NOT:
			case ImpalaSqlParserParser.KW_NULL:
			case ImpalaSqlParserParser.KW_NULLIF:
			case ImpalaSqlParserParser.KW_NULLS:
			case ImpalaSqlParserParser.KW_OFFSET:
			case ImpalaSqlParserParser.KW_ONLY:
			case ImpalaSqlParserParser.KW_OPTION:
			case ImpalaSqlParserParser.KW_ORDINALITY:
			case ImpalaSqlParserParser.KW_OUTPUT:
			case ImpalaSqlParserParser.KW_OVER:
			case ImpalaSqlParserParser.KW_PARTITION:
			case ImpalaSqlParserParser.KW_PARTITIONS:
			case ImpalaSqlParserParser.KW_PATH:
			case ImpalaSqlParserParser.KW_PARQUET:
			case ImpalaSqlParserParser.KW_POSITION:
			case ImpalaSqlParserParser.KW_PRECEDING:
			case ImpalaSqlParserParser.KW_PRIVILEGES:
			case ImpalaSqlParserParser.KW_PROPERTIES:
			case ImpalaSqlParserParser.KW_RANGE:
			case ImpalaSqlParserParser.KW_READ:
			case ImpalaSqlParserParser.KW_RENAME:
			case ImpalaSqlParserParser.KW_REPEATABLE:
			case ImpalaSqlParserParser.KW_REPLACE:
			case ImpalaSqlParserParser.KW_RESET:
			case ImpalaSqlParserParser.KW_RESTRICT:
			case ImpalaSqlParserParser.KW_REVOKE:
			case ImpalaSqlParserParser.KW_ROLE:
			case ImpalaSqlParserParser.KW_ROLES:
			case ImpalaSqlParserParser.KW_ROLLBACK:
			case ImpalaSqlParserParser.KW_ROW:
			case ImpalaSqlParserParser.KW_ROWS:
			case ImpalaSqlParserParser.KW_SCHEMA:
			case ImpalaSqlParserParser.KW_SCHEMAS:
			case ImpalaSqlParserParser.KW_SECOND:
			case ImpalaSqlParserParser.KW_SECONDS:
			case ImpalaSqlParserParser.KW_SECURITY:
			case ImpalaSqlParserParser.KW_SERIALIZABLE:
			case ImpalaSqlParserParser.KW_SESSION:
			case ImpalaSqlParserParser.KW_SET:
			case ImpalaSqlParserParser.KW_SETS:
			case ImpalaSqlParserParser.KW_SHOW:
			case ImpalaSqlParserParser.KW_SOME:
			case ImpalaSqlParserParser.KW_START:
			case ImpalaSqlParserParser.KW_STATS:
			case ImpalaSqlParserParser.KW_SUBSTRING:
			case ImpalaSqlParserParser.KW_SYSTEM:
			case ImpalaSqlParserParser.KW_TABLES:
			case ImpalaSqlParserParser.KW_TABLESAMPLE:
			case ImpalaSqlParserParser.KW_TEXT:
			case ImpalaSqlParserParser.KW_TIES:
			case ImpalaSqlParserParser.KW_TIME:
			case ImpalaSqlParserParser.KW_TIMESTAMP:
			case ImpalaSqlParserParser.KW_TO:
			case ImpalaSqlParserParser.KW_TRANSACTION:
			case ImpalaSqlParserParser.KW_TRUE:
			case ImpalaSqlParserParser.KW_TRY_CAST:
			case ImpalaSqlParserParser.KW_TYPE:
			case ImpalaSqlParserParser.KW_UNBOUNDED:
			case ImpalaSqlParserParser.KW_UNCOMMITTED:
			case ImpalaSqlParserParser.KW_USE:
			case ImpalaSqlParserParser.KW_USER:
			case ImpalaSqlParserParser.KW_VALIDATE:
			case ImpalaSqlParserParser.KW_VALUES:
			case ImpalaSqlParserParser.KW_VERBOSE:
			case ImpalaSqlParserParser.KW_VIEW:
			case ImpalaSqlParserParser.KW_VIEWS:
			case ImpalaSqlParserParser.KW_WORK:
			case ImpalaSqlParserParser.KW_WRITE:
			case ImpalaSqlParserParser.KW_YEAR:
			case ImpalaSqlParserParser.KW_ZONE:
			case ImpalaSqlParserParser.LT:
			case ImpalaSqlParserParser.LTE:
			case ImpalaSqlParserParser.GT:
			case ImpalaSqlParserParser.GTE:
			case ImpalaSqlParserParser.PLUS:
			case ImpalaSqlParserParser.MINUS:
			case ImpalaSqlParserParser.LPAREN:
			case ImpalaSqlParserParser.QUESTION:
			case ImpalaSqlParserParser.STRING:
			case ImpalaSqlParserParser.UNICODE_STRING:
			case ImpalaSqlParserParser.BINARY_LITERAL:
			case ImpalaSqlParserParser.INTEGER_VALUE:
			case ImpalaSqlParserParser.DECIMAL_VALUE:
			case ImpalaSqlParserParser.DOUBLE_VALUE:
			case ImpalaSqlParserParser.IDENTIFIER:
			case ImpalaSqlParserParser.DIGIT_IDENTIFIER:
			case ImpalaSqlParserParser.BACKQUOTED_IDENTIFIER:
			case ImpalaSqlParserParser.DOUBLE_PRECISION:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1436;
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
		this.enterRule(_localctx, 50, ImpalaSqlParserParser.RULE_likeClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1439;
			this.match(ImpalaSqlParserParser.KW_LIKE);
			this.state = 1440;
			this.qualifiedName();
			this.state = 1443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_EXCLUDING || _la === ImpalaSqlParserParser.KW_INCLUDING) {
				{
				this.state = 1441;
				_localctx._optionType = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParserParser.KW_EXCLUDING || _la === ImpalaSqlParserParser.KW_INCLUDING)) {
					_localctx._optionType = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1442;
				this.match(ImpalaSqlParserParser.KW_PROPERTIES);
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
	public hintClause(): HintClauseContext {
		let _localctx: HintClauseContext = new HintClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ImpalaSqlParserParser.RULE_hintClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1445;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParserParser.T__0) | (1 << ImpalaSqlParserParser.T__1) | (1 << ImpalaSqlParserParser.T__2) | (1 << ImpalaSqlParserParser.T__3) | (1 << ImpalaSqlParserParser.T__4) | (1 << ImpalaSqlParserParser.T__5) | (1 << ImpalaSqlParserParser.T__6))) !== 0))) {
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
	public properties(): PropertiesContext {
		let _localctx: PropertiesContext = new PropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ImpalaSqlParserParser.RULE_properties);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1447;
			this.match(ImpalaSqlParserParser.LPAREN);
			this.state = 1448;
			this.property();
			this.state = 1453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParserParser.COMMA) {
				{
				{
				this.state = 1449;
				this.match(ImpalaSqlParserParser.COMMA);
				this.state = 1450;
				this.property();
				}
				}
				this.state = 1455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1456;
			this.match(ImpalaSqlParserParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 56, ImpalaSqlParserParser.RULE_partitionedBy);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1458;
			this.match(ImpalaSqlParserParser.LPAREN);
			this.state = 1459;
			this.columnDefinition();
			this.state = 1464;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 187, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1460;
					this.match(ImpalaSqlParserParser.COMMA);
					this.state = 1461;
					this.columnDefinition();
					}
					}
				}
				this.state = 1466;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 187, this._ctx);
			}
			this.state = 1467;
			this.match(ImpalaSqlParserParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 58, ImpalaSqlParserParser.RULE_sortedBy);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1469;
			this.expression();
			this.state = 1474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParserParser.COMMA) {
				{
				{
				this.state = 1470;
				this.match(ImpalaSqlParserParser.COMMA);
				this.state = 1471;
				this.expression();
				}
				}
				this.state = 1476;
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
		this.enterRule(_localctx, 60, ImpalaSqlParserParser.RULE_rowFormat);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1477;
			this.match(ImpalaSqlParserParser.KW_DELIMITED);
			this.state = 1487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_FIELDS) {
				{
				this.state = 1478;
				this.match(ImpalaSqlParserParser.KW_FIELDS);
				this.state = 1479;
				this.match(ImpalaSqlParserParser.KW_TERMINATED);
				this.state = 1480;
				this.match(ImpalaSqlParserParser.KW_BY);
				this.state = 1481;
				this.string();
				this.state = 1485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_ESCAPED) {
					{
					this.state = 1482;
					this.match(ImpalaSqlParserParser.KW_ESCAPED);
					this.state = 1483;
					this.match(ImpalaSqlParserParser.KW_BY);
					this.state = 1484;
					this.string();
					}
				}

				}
			}

			this.state = 1493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_LINES) {
				{
				this.state = 1489;
				this.match(ImpalaSqlParserParser.KW_LINES);
				this.state = 1490;
				this.match(ImpalaSqlParserParser.KW_TERMINATED);
				this.state = 1491;
				this.match(ImpalaSqlParserParser.KW_BY);
				this.state = 1492;
				this.string();
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
		this.enterRule(_localctx, 62, ImpalaSqlParserParser.RULE_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1495;
			this.identifier();
			this.state = 1498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.EQ) {
				{
				this.state = 1496;
				this.match(ImpalaSqlParserParser.EQ);
				this.state = 1497;
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
		this.enterRule(_localctx, 64, ImpalaSqlParserParser.RULE_queryNoWith);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1500;
			this.queryTerm(0);
			this.state = 1511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_ORDER) {
				{
				this.state = 1501;
				this.match(ImpalaSqlParserParser.KW_ORDER);
				this.state = 1502;
				this.match(ImpalaSqlParserParser.KW_BY);
				this.state = 1503;
				this.sortItem();
				this.state = 1508;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParserParser.COMMA) {
					{
					{
					this.state = 1504;
					this.match(ImpalaSqlParserParser.COMMA);
					this.state = 1505;
					this.sortItem();
					}
					}
					this.state = 1510;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_LIMIT) {
				{
				this.state = 1513;
				this.match(ImpalaSqlParserParser.KW_LIMIT);
				this.state = 1514;
				_localctx._rows = this.expression();
				this.state = 1517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_OFFSET) {
					{
					this.state = 1515;
					this.match(ImpalaSqlParserParser.KW_OFFSET);
					this.state = 1516;
					_localctx._offset = this.match(ImpalaSqlParserParser.INTEGER_VALUE);
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
		let _startState: number = 66;
		this.enterRecursionRule(_localctx, 66, ImpalaSqlParserParser.RULE_queryTerm, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new QueryTermDefaultContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 1522;
			this.queryPrimary();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1538;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 200, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1536;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
					case 1:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						(_localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParserParser.RULE_queryTerm);
						this.state = 1524;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1525;
						(_localctx as SetOperationContext)._operator = this.match(ImpalaSqlParserParser.KW_INTERSECT);
						this.state = 1527;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === ImpalaSqlParserParser.T__2 || _la === ImpalaSqlParserParser.KW_DISTINCT) {
							{
							this.state = 1526;
							this.setQuantifier();
							}
						}

						this.state = 1529;
						(_localctx as SetOperationContext)._right = this.queryTerm(3);
						}
						break;

					case 2:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						(_localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParserParser.RULE_queryTerm);
						this.state = 1530;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1531;
						(_localctx as SetOperationContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ImpalaSqlParserParser.KW_EXCEPT || _la === ImpalaSqlParserParser.KW_UNION)) {
							(_localctx as SetOperationContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1533;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === ImpalaSqlParserParser.T__2 || _la === ImpalaSqlParserParser.KW_DISTINCT) {
							{
							this.state = 1532;
							this.setQuantifier();
							}
						}

						this.state = 1535;
						(_localctx as SetOperationContext)._right = this.queryTerm(2);
						}
						break;
					}
					}
				}
				this.state = 1540;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 200, this._ctx);
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
		this.enterRule(_localctx, 68, ImpalaSqlParserParser.RULE_queryPrimary);
		try {
			let _alt: number;
			this.state = 1557;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParserParser.KW_SELECT:
				_localctx = new QueryPrimaryDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1541;
				this.querySpecification();
				}
				break;
			case ImpalaSqlParserParser.KW_TABLE:
				_localctx = new TableContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1542;
				this.match(ImpalaSqlParserParser.KW_TABLE);
				this.state = 1543;
				this.qualifiedName();
				}
				break;
			case ImpalaSqlParserParser.KW_VALUES:
				_localctx = new InlineTableContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1544;
				this.match(ImpalaSqlParserParser.KW_VALUES);
				this.state = 1545;
				this.expression();
				this.state = 1550;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1546;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 1547;
						this.expression();
						}
						}
					}
					this.state = 1552;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 201, this._ctx);
				}
				}
				break;
			case ImpalaSqlParserParser.LPAREN:
				_localctx = new SubqueryContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1553;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 1554;
				this.queryNoWith();
				this.state = 1555;
				this.match(ImpalaSqlParserParser.RPAREN);
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
		this.enterRule(_localctx, 70, ImpalaSqlParserParser.RULE_sortItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1559;
			this.expression();
			this.state = 1561;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_ASC || _la === ImpalaSqlParserParser.KW_DESC) {
				{
				this.state = 1560;
				_localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParserParser.KW_ASC || _la === ImpalaSqlParserParser.KW_DESC)) {
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

			this.state = 1565;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_NULLS) {
				{
				this.state = 1563;
				this.match(ImpalaSqlParserParser.KW_NULLS);
				this.state = 1564;
				_localctx._nullOrdering = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParserParser.KW_FIRST || _la === ImpalaSqlParserParser.KW_LAST)) {
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
		this.enterRule(_localctx, 72, ImpalaSqlParserParser.RULE_querySpecification);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1567;
			this.match(ImpalaSqlParserParser.KW_SELECT);
			this.state = 1569;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 205, this._ctx) ) {
			case 1:
				{
				this.state = 1568;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1572;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_STRAIGHT_JOIN) {
				{
				this.state = 1571;
				this.match(ImpalaSqlParserParser.KW_STRAIGHT_JOIN);
				}
			}

			this.state = 1574;
			this.selectItem();
			this.state = 1579;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1575;
					this.match(ImpalaSqlParserParser.COMMA);
					this.state = 1576;
					this.selectItem();
					}
					}
				}
				this.state = 1581;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
			}
			this.state = 1591;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 209, this._ctx) ) {
			case 1:
				{
				this.state = 1582;
				this.match(ImpalaSqlParserParser.KW_FROM);
				this.state = 1583;
				this.relation(0);
				this.state = 1588;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1584;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 1585;
						this.relation(0);
						}
						}
					}
					this.state = 1590;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
				}
				}
				break;
			}
			this.state = 1595;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 210, this._ctx) ) {
			case 1:
				{
				this.state = 1593;
				this.match(ImpalaSqlParserParser.KW_WHERE);
				this.state = 1594;
				_localctx._where = this.booleanExpression(0);
				}
				break;
			}
			this.state = 1600;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				{
				this.state = 1597;
				this.match(ImpalaSqlParserParser.KW_GROUP);
				this.state = 1598;
				this.match(ImpalaSqlParserParser.KW_BY);
				this.state = 1599;
				this.groupBy();
				}
				break;
			}
			this.state = 1604;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 212, this._ctx) ) {
			case 1:
				{
				this.state = 1602;
				this.match(ImpalaSqlParserParser.KW_HAVING);
				this.state = 1603;
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
		this.enterRule(_localctx, 74, ImpalaSqlParserParser.RULE_groupBy);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1607;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 213, this._ctx) ) {
			case 1:
				{
				this.state = 1606;
				this.setQuantifier();
				}
				break;
			}
			this.state = 1609;
			this.groupingElement();
			this.state = 1614;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1610;
					this.match(ImpalaSqlParserParser.COMMA);
					this.state = 1611;
					this.groupingElement();
					}
					}
				}
				this.state = 1616;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
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
		this.enterRule(_localctx, 76, ImpalaSqlParserParser.RULE_groupingElement);
		try {
			_localctx = new SingleGroupingSetContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1617;
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
		this.enterRule(_localctx, 78, ImpalaSqlParserParser.RULE_groupingSet);
		let _la: number;
		try {
			this.state = 1632;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 217, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1619;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 1628;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParserParser.T__0) | (1 << ImpalaSqlParserParser.T__1) | (1 << ImpalaSqlParserParser.T__2) | (1 << ImpalaSqlParserParser.T__3) | (1 << ImpalaSqlParserParser.T__7) | (1 << ImpalaSqlParserParser.KW_ARRAY) | (1 << ImpalaSqlParserParser.KW_ASC) | (1 << ImpalaSqlParserParser.KW_AT) | (1 << ImpalaSqlParserParser.KW_BERNOULLI))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ImpalaSqlParserParser.KW_CALL - 34)) | (1 << (ImpalaSqlParserParser.KW_CASCADE - 34)) | (1 << (ImpalaSqlParserParser.KW_CASE - 34)) | (1 << (ImpalaSqlParserParser.KW_CAST - 34)) | (1 << (ImpalaSqlParserParser.KW_CATALOGS - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMN - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMNS - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMENT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMIT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMITTED - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT_DATE - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT_PATH - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT_TIME - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT_TIMESTAMP - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT_USER - 34)) | (1 << (ImpalaSqlParserParser.KW_DATA - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASE - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASES - 34)) | (1 << (ImpalaSqlParserParser.KW_DATE - 34)) | (1 << (ImpalaSqlParserParser.KW_DAY - 34)) | (1 << (ImpalaSqlParserParser.KW_DAYS - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ImpalaSqlParserParser.KW_DEFINER - 66)) | (1 << (ImpalaSqlParserParser.KW_DEFAULT - 66)) | (1 << (ImpalaSqlParserParser.KW_DESC - 66)) | (1 << (ImpalaSqlParserParser.KW_EXCLUDING - 66)) | (1 << (ImpalaSqlParserParser.KW_EXISTS - 66)) | (1 << (ImpalaSqlParserParser.KW_EXPLAIN - 66)) | (1 << (ImpalaSqlParserParser.KW_EXTRACT - 66)) | (1 << (ImpalaSqlParserParser.KW_FALSE - 66)) | (1 << (ImpalaSqlParserParser.KW_FETCH - 66)) | (1 << (ImpalaSqlParserParser.KW_FILTER - 66)) | (1 << (ImpalaSqlParserParser.KW_FIRST - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ImpalaSqlParserParser.KW_FOLLOWING - 98)) | (1 << (ImpalaSqlParserParser.KW_FORMAT - 98)) | (1 << (ImpalaSqlParserParser.KW_FUNCTIONS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANT - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTED - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRAPHVIZ - 98)) | (1 << (ImpalaSqlParserParser.KW_GROUPING - 98)) | (1 << (ImpalaSqlParserParser.KW_HOUR - 98)) | (1 << (ImpalaSqlParserParser.KW_IF - 98)) | (1 << (ImpalaSqlParserParser.KW_INCLUDING - 98)) | (1 << (ImpalaSqlParserParser.KW_INPUT - 98)) | (1 << (ImpalaSqlParserParser.KW_INTERVAL - 98)) | (1 << (ImpalaSqlParserParser.KW_INVOKER - 98)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (ImpalaSqlParserParser.KW_IO - 132)) | (1 << (ImpalaSqlParserParser.KW_ISOLATION - 132)) | (1 << (ImpalaSqlParserParser.KW_JSON - 132)) | (1 << (ImpalaSqlParserParser.KW_LAST - 132)) | (1 << (ImpalaSqlParserParser.KW_LATERAL - 132)) | (1 << (ImpalaSqlParserParser.KW_LEVEL - 132)) | (1 << (ImpalaSqlParserParser.KW_LIMIT - 132)) | (1 << (ImpalaSqlParserParser.KW_LOCALTIME - 132)) | (1 << (ImpalaSqlParserParser.KW_LOCALTIMESTAMP - 132)) | (1 << (ImpalaSqlParserParser.KW_LOGICAL - 132)) | (1 << (ImpalaSqlParserParser.KW_MAP - 132)) | (1 << (ImpalaSqlParserParser.KW_MINUTE - 132)) | (1 << (ImpalaSqlParserParser.KW_MONTH - 132)) | (1 << (ImpalaSqlParserParser.KW_NEXT - 132)) | (1 << (ImpalaSqlParserParser.KW_NFC - 132)) | (1 << (ImpalaSqlParserParser.KW_NFD - 132)) | (1 << (ImpalaSqlParserParser.KW_NFKC - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (ImpalaSqlParserParser.KW_NFKD - 164)) | (1 << (ImpalaSqlParserParser.KW_NO - 164)) | (1 << (ImpalaSqlParserParser.KW_NONE - 164)) | (1 << (ImpalaSqlParserParser.KW_NORMALIZE - 164)) | (1 << (ImpalaSqlParserParser.KW_NOT - 164)) | (1 << (ImpalaSqlParserParser.KW_NULL - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLIF - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLS - 164)) | (1 << (ImpalaSqlParserParser.KW_OFFSET - 164)) | (1 << (ImpalaSqlParserParser.KW_ONLY - 164)) | (1 << (ImpalaSqlParserParser.KW_OPTION - 164)) | (1 << (ImpalaSqlParserParser.KW_ORDINALITY - 164)) | (1 << (ImpalaSqlParserParser.KW_OUTPUT - 164)) | (1 << (ImpalaSqlParserParser.KW_OVER - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITIONS - 164)) | (1 << (ImpalaSqlParserParser.KW_PATH - 164)) | (1 << (ImpalaSqlParserParser.KW_PARQUET - 164)) | (1 << (ImpalaSqlParserParser.KW_POSITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PRECEDING - 164)) | (1 << (ImpalaSqlParserParser.KW_PRIVILEGES - 164)) | (1 << (ImpalaSqlParserParser.KW_PROPERTIES - 164)) | (1 << (ImpalaSqlParserParser.KW_RANGE - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (ImpalaSqlParserParser.KW_READ - 196)) | (1 << (ImpalaSqlParserParser.KW_RENAME - 196)) | (1 << (ImpalaSqlParserParser.KW_REPEATABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_REPLACE - 196)) | (1 << (ImpalaSqlParserParser.KW_RESET - 196)) | (1 << (ImpalaSqlParserParser.KW_RESTRICT - 196)) | (1 << (ImpalaSqlParserParser.KW_REVOKE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLES - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLLBACK - 196)) | (1 << (ImpalaSqlParserParser.KW_ROW - 196)) | (1 << (ImpalaSqlParserParser.KW_ROWS - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMA - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMAS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECOND - 196)) | (1 << (ImpalaSqlParserParser.KW_SECONDS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECURITY - 196)) | (1 << (ImpalaSqlParserParser.KW_SERIALIZABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_SESSION - 196)))) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (ImpalaSqlParserParser.KW_SET - 228)) | (1 << (ImpalaSqlParserParser.KW_SETS - 228)) | (1 << (ImpalaSqlParserParser.KW_SHOW - 228)) | (1 << (ImpalaSqlParserParser.KW_SOME - 228)) | (1 << (ImpalaSqlParserParser.KW_START - 228)) | (1 << (ImpalaSqlParserParser.KW_STATS - 228)) | (1 << (ImpalaSqlParserParser.KW_SUBSTRING - 228)) | (1 << (ImpalaSqlParserParser.KW_SYSTEM - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLES - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLESAMPLE - 228)) | (1 << (ImpalaSqlParserParser.KW_TEXT - 228)) | (1 << (ImpalaSqlParserParser.KW_TIES - 228)) | (1 << (ImpalaSqlParserParser.KW_TIME - 228)) | (1 << (ImpalaSqlParserParser.KW_TIMESTAMP - 228)) | (1 << (ImpalaSqlParserParser.KW_TO - 228)) | (1 << (ImpalaSqlParserParser.KW_TRANSACTION - 228)) | (1 << (ImpalaSqlParserParser.KW_TRUE - 228)) | (1 << (ImpalaSqlParserParser.KW_TRY_CAST - 228)) | (1 << (ImpalaSqlParserParser.KW_TYPE - 228)))) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (ImpalaSqlParserParser.KW_UNBOUNDED - 260)) | (1 << (ImpalaSqlParserParser.KW_UNCOMMITTED - 260)) | (1 << (ImpalaSqlParserParser.KW_USE - 260)) | (1 << (ImpalaSqlParserParser.KW_USER - 260)) | (1 << (ImpalaSqlParserParser.KW_VALIDATE - 260)) | (1 << (ImpalaSqlParserParser.KW_VERBOSE - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEW - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEWS - 260)) | (1 << (ImpalaSqlParserParser.KW_WORK - 260)) | (1 << (ImpalaSqlParserParser.KW_WRITE - 260)) | (1 << (ImpalaSqlParserParser.KW_YEAR - 260)) | (1 << (ImpalaSqlParserParser.KW_ZONE - 260)))) !== 0) || ((((_la - 303)) & ~0x1F) === 0 && ((1 << (_la - 303)) & ((1 << (ImpalaSqlParserParser.PLUS - 303)) | (1 << (ImpalaSqlParserParser.MINUS - 303)) | (1 << (ImpalaSqlParserParser.LPAREN - 303)) | (1 << (ImpalaSqlParserParser.QUESTION - 303)) | (1 << (ImpalaSqlParserParser.STRING - 303)) | (1 << (ImpalaSqlParserParser.UNICODE_STRING - 303)) | (1 << (ImpalaSqlParserParser.BINARY_LITERAL - 303)) | (1 << (ImpalaSqlParserParser.INTEGER_VALUE - 303)) | (1 << (ImpalaSqlParserParser.DECIMAL_VALUE - 303)) | (1 << (ImpalaSqlParserParser.DOUBLE_VALUE - 303)) | (1 << (ImpalaSqlParserParser.IDENTIFIER - 303)) | (1 << (ImpalaSqlParserParser.DIGIT_IDENTIFIER - 303)) | (1 << (ImpalaSqlParserParser.BACKQUOTED_IDENTIFIER - 303)) | (1 << (ImpalaSqlParserParser.DOUBLE_PRECISION - 303)))) !== 0)) {
					{
					this.state = 1620;
					this.expression();
					this.state = 1625;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParserParser.COMMA) {
						{
						{
						this.state = 1621;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 1622;
						this.expression();
						}
						}
						this.state = 1627;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1630;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1631;
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
		this.enterRule(_localctx, 80, ImpalaSqlParserParser.RULE_namedQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1634;
			_localctx._name = this.identifier();
			this.state = 1636;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.LPAREN) {
				{
				this.state = 1635;
				this.columnAliases();
				}
			}

			this.state = 1638;
			this.match(ImpalaSqlParserParser.KW_AS);
			this.state = 1639;
			this.match(ImpalaSqlParserParser.LPAREN);
			this.state = 1640;
			this.query();
			this.state = 1641;
			this.match(ImpalaSqlParserParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 82, ImpalaSqlParserParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1643;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParserParser.T__2 || _la === ImpalaSqlParserParser.KW_DISTINCT)) {
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
		this.enterRule(_localctx, 84, ImpalaSqlParserParser.RULE_selectItem);
		let _la: number;
		try {
			this.state = 1657;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 221, this._ctx) ) {
			case 1:
				_localctx = new SelectSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1645;
				this.expression();
				this.state = 1650;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 220, this._ctx) ) {
				case 1:
					{
					this.state = 1647;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ImpalaSqlParserParser.KW_AS) {
						{
						this.state = 1646;
						this.match(ImpalaSqlParserParser.KW_AS);
						}
					}

					this.state = 1649;
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
				this.state = 1652;
				this.qualifiedName();
				this.state = 1653;
				this.match(ImpalaSqlParserParser.DOT);
				this.state = 1654;
				this.match(ImpalaSqlParserParser.ASTERISK);
				}
				break;

			case 3:
				_localctx = new SelectAllContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1656;
				this.match(ImpalaSqlParserParser.ASTERISK);
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
		let _startState: number = 86;
		this.enterRecursionRule(_localctx, 86, ImpalaSqlParserParser.RULE_relation, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new RelationDefaultContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 1660;
			this.sampledRelation();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1675;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
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
					this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParserParser.RULE_relation);
					this.state = 1662;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 1671;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ImpalaSqlParserParser.KW_CROSS:
						{
						this.state = 1663;
						this.match(ImpalaSqlParserParser.KW_CROSS);
						this.state = 1664;
						this.match(ImpalaSqlParserParser.KW_JOIN);
						this.state = 1665;
						(_localctx as JoinRelationContext)._right = this.sampledRelation();
						}
						break;
					case ImpalaSqlParserParser.KW_FULL:
					case ImpalaSqlParserParser.KW_INNER:
					case ImpalaSqlParserParser.KW_JOIN:
					case ImpalaSqlParserParser.KW_LEFT:
					case ImpalaSqlParserParser.KW_RIGHT:
						{
						this.state = 1666;
						this.joinType();
						this.state = 1667;
						this.match(ImpalaSqlParserParser.KW_JOIN);
						this.state = 1668;
						(_localctx as JoinRelationContext)._rightRelation = this.relation(0);
						this.state = 1669;
						this.joinCriteria();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 1677;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 223, this._ctx);
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
		this.enterRule(_localctx, 88, ImpalaSqlParserParser.RULE_joinType);
		let _la: number;
		try {
			this.state = 1709;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 230, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1679;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_INNER) {
					{
					this.state = 1678;
					this.match(ImpalaSqlParserParser.KW_INNER);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1681;
				this.match(ImpalaSqlParserParser.KW_LEFT);
				this.state = 1683;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_INNER) {
					{
					this.state = 1682;
					this.match(ImpalaSqlParserParser.KW_INNER);
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1685;
				this.match(ImpalaSqlParserParser.KW_RIGHT);
				this.state = 1687;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_INNER) {
					{
					this.state = 1686;
					this.match(ImpalaSqlParserParser.KW_INNER);
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1689;
				this.match(ImpalaSqlParserParser.KW_LEFT);
				this.state = 1691;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_OUTER) {
					{
					this.state = 1690;
					this.match(ImpalaSqlParserParser.KW_OUTER);
					}
				}

				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1693;
				this.match(ImpalaSqlParserParser.KW_RIGHT);
				this.state = 1695;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_OUTER) {
					{
					this.state = 1694;
					this.match(ImpalaSqlParserParser.KW_OUTER);
					}
				}

				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1697;
				this.match(ImpalaSqlParserParser.KW_FULL);
				this.state = 1699;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_OUTER) {
					{
					this.state = 1698;
					this.match(ImpalaSqlParserParser.KW_OUTER);
					}
				}

				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1701;
				this.match(ImpalaSqlParserParser.KW_LEFT);
				this.state = 1702;
				this.match(ImpalaSqlParserParser.KW_SEMI);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1703;
				this.match(ImpalaSqlParserParser.KW_RIGHT);
				this.state = 1704;
				this.match(ImpalaSqlParserParser.KW_SEMI);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1705;
				this.match(ImpalaSqlParserParser.KW_LEFT);
				this.state = 1706;
				this.match(ImpalaSqlParserParser.KW_ANTI);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1707;
				this.match(ImpalaSqlParserParser.KW_RIGHT);
				this.state = 1708;
				this.match(ImpalaSqlParserParser.KW_ANTI);
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
		this.enterRule(_localctx, 90, ImpalaSqlParserParser.RULE_joinCriteria);
		let _la: number;
		try {
			this.state = 1725;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParserParser.KW_ON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1711;
				this.match(ImpalaSqlParserParser.KW_ON);
				this.state = 1712;
				this.booleanExpression(0);
				}
				break;
			case ImpalaSqlParserParser.KW_USING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1713;
				this.match(ImpalaSqlParserParser.KW_USING);
				this.state = 1714;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 1715;
				this.identifier();
				this.state = 1720;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParserParser.COMMA) {
					{
					{
					this.state = 1716;
					this.match(ImpalaSqlParserParser.COMMA);
					this.state = 1717;
					this.identifier();
					}
					}
					this.state = 1722;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1723;
				this.match(ImpalaSqlParserParser.RPAREN);
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
		this.enterRule(_localctx, 92, ImpalaSqlParserParser.RULE_sampledRelation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1727;
			this.aliasedRelation();
			this.state = 1740;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 234, this._ctx) ) {
			case 1:
				{
				this.state = 1728;
				this.match(ImpalaSqlParserParser.KW_TABLESAMPLE);
				this.state = 1729;
				this.sampleType();
				this.state = 1730;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 1731;
				_localctx._percentage = this.expression();
				this.state = 1732;
				this.match(ImpalaSqlParserParser.RPAREN);
				this.state = 1738;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 233, this._ctx) ) {
				case 1:
					{
					this.state = 1733;
					this.match(ImpalaSqlParserParser.KW_REPEATABLE);
					this.state = 1734;
					this.match(ImpalaSqlParserParser.LPAREN);
					this.state = 1735;
					_localctx._seed = this.expression();
					this.state = 1736;
					this.match(ImpalaSqlParserParser.RPAREN);
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
		this.enterRule(_localctx, 94, ImpalaSqlParserParser.RULE_sampleType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1742;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParserParser.KW_BERNOULLI || _la === ImpalaSqlParserParser.KW_SYSTEM)) {
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
		this.enterRule(_localctx, 96, ImpalaSqlParserParser.RULE_aliasedRelation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1744;
			this.relationPrimary();
			this.state = 1752;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 237, this._ctx) ) {
			case 1:
				{
				this.state = 1746;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_AS) {
					{
					this.state = 1745;
					this.match(ImpalaSqlParserParser.KW_AS);
					}
				}

				this.state = 1748;
				this.identifier();
				this.state = 1750;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 236, this._ctx) ) {
				case 1:
					{
					this.state = 1749;
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
		this.enterRule(_localctx, 98, ImpalaSqlParserParser.RULE_columnAliases);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1754;
			this.match(ImpalaSqlParserParser.LPAREN);
			this.state = 1755;
			this.identifier();
			this.state = 1760;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParserParser.COMMA) {
				{
				{
				this.state = 1756;
				this.match(ImpalaSqlParserParser.COMMA);
				this.state = 1757;
				this.identifier();
				}
				}
				this.state = 1762;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1763;
			this.match(ImpalaSqlParserParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 100, ImpalaSqlParserParser.RULE_relationPrimary);
		let _la: number;
		try {
			this.state = 1794;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 241, this._ctx) ) {
			case 1:
				_localctx = new TableNameContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1765;
				this.qualifiedName();
				}
				break;

			case 2:
				_localctx = new SubqueryRelationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1766;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 1767;
				this.query();
				this.state = 1768;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 3:
				_localctx = new UnnestContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1770;
				this.match(ImpalaSqlParserParser.KW_UNNEST);
				this.state = 1771;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 1772;
				this.expression();
				this.state = 1777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParserParser.COMMA) {
					{
					{
					this.state = 1773;
					this.match(ImpalaSqlParserParser.COMMA);
					this.state = 1774;
					this.expression();
					}
					}
					this.state = 1779;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1780;
				this.match(ImpalaSqlParserParser.RPAREN);
				this.state = 1783;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 240, this._ctx) ) {
				case 1:
					{
					this.state = 1781;
					this.match(ImpalaSqlParserParser.KW_WITH);
					this.state = 1782;
					this.match(ImpalaSqlParserParser.KW_ORDINALITY);
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new LateralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1785;
				this.match(ImpalaSqlParserParser.KW_LATERAL);
				this.state = 1786;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 1787;
				this.query();
				this.state = 1788;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 5:
				_localctx = new ParenthesizedRelationContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1790;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 1791;
				this.relation(0);
				this.state = 1792;
				this.match(ImpalaSqlParserParser.RPAREN);
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
		this.enterRule(_localctx, 102, ImpalaSqlParserParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1796;
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
		let _startState: number = 104;
		this.enterRecursionRule(_localctx, 104, ImpalaSqlParserParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1805;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParserParser.T__0:
			case ImpalaSqlParserParser.T__1:
			case ImpalaSqlParserParser.T__2:
			case ImpalaSqlParserParser.T__3:
			case ImpalaSqlParserParser.T__7:
			case ImpalaSqlParserParser.KW_ARRAY:
			case ImpalaSqlParserParser.KW_ASC:
			case ImpalaSqlParserParser.KW_AT:
			case ImpalaSqlParserParser.KW_BERNOULLI:
			case ImpalaSqlParserParser.KW_CALL:
			case ImpalaSqlParserParser.KW_CASCADE:
			case ImpalaSqlParserParser.KW_CASE:
			case ImpalaSqlParserParser.KW_CAST:
			case ImpalaSqlParserParser.KW_CATALOGS:
			case ImpalaSqlParserParser.KW_COLUMN:
			case ImpalaSqlParserParser.KW_COLUMNS:
			case ImpalaSqlParserParser.KW_COMMENT:
			case ImpalaSqlParserParser.KW_COMMIT:
			case ImpalaSqlParserParser.KW_COMMITTED:
			case ImpalaSqlParserParser.KW_CURRENT:
			case ImpalaSqlParserParser.KW_CURRENT_DATE:
			case ImpalaSqlParserParser.KW_CURRENT_PATH:
			case ImpalaSqlParserParser.KW_CURRENT_TIME:
			case ImpalaSqlParserParser.KW_CURRENT_TIMESTAMP:
			case ImpalaSqlParserParser.KW_CURRENT_USER:
			case ImpalaSqlParserParser.KW_DATA:
			case ImpalaSqlParserParser.KW_DATABASE:
			case ImpalaSqlParserParser.KW_DATABASES:
			case ImpalaSqlParserParser.KW_DATE:
			case ImpalaSqlParserParser.KW_DAY:
			case ImpalaSqlParserParser.KW_DAYS:
			case ImpalaSqlParserParser.KW_DEFINER:
			case ImpalaSqlParserParser.KW_DEFAULT:
			case ImpalaSqlParserParser.KW_DESC:
			case ImpalaSqlParserParser.KW_EXCLUDING:
			case ImpalaSqlParserParser.KW_EXISTS:
			case ImpalaSqlParserParser.KW_EXPLAIN:
			case ImpalaSqlParserParser.KW_EXTRACT:
			case ImpalaSqlParserParser.KW_FALSE:
			case ImpalaSqlParserParser.KW_FETCH:
			case ImpalaSqlParserParser.KW_FILTER:
			case ImpalaSqlParserParser.KW_FIRST:
			case ImpalaSqlParserParser.KW_FOLLOWING:
			case ImpalaSqlParserParser.KW_FORMAT:
			case ImpalaSqlParserParser.KW_FUNCTIONS:
			case ImpalaSqlParserParser.KW_GRANT:
			case ImpalaSqlParserParser.KW_GRANTED:
			case ImpalaSqlParserParser.KW_GRANTS:
			case ImpalaSqlParserParser.KW_GRAPHVIZ:
			case ImpalaSqlParserParser.KW_GROUPING:
			case ImpalaSqlParserParser.KW_HOUR:
			case ImpalaSqlParserParser.KW_IF:
			case ImpalaSqlParserParser.KW_INCLUDING:
			case ImpalaSqlParserParser.KW_INPUT:
			case ImpalaSqlParserParser.KW_INTERVAL:
			case ImpalaSqlParserParser.KW_INVOKER:
			case ImpalaSqlParserParser.KW_IO:
			case ImpalaSqlParserParser.KW_ISOLATION:
			case ImpalaSqlParserParser.KW_JSON:
			case ImpalaSqlParserParser.KW_LAST:
			case ImpalaSqlParserParser.KW_LATERAL:
			case ImpalaSqlParserParser.KW_LEVEL:
			case ImpalaSqlParserParser.KW_LIMIT:
			case ImpalaSqlParserParser.KW_LOCALTIME:
			case ImpalaSqlParserParser.KW_LOCALTIMESTAMP:
			case ImpalaSqlParserParser.KW_LOGICAL:
			case ImpalaSqlParserParser.KW_MAP:
			case ImpalaSqlParserParser.KW_MINUTE:
			case ImpalaSqlParserParser.KW_MONTH:
			case ImpalaSqlParserParser.KW_NEXT:
			case ImpalaSqlParserParser.KW_NFC:
			case ImpalaSqlParserParser.KW_NFD:
			case ImpalaSqlParserParser.KW_NFKC:
			case ImpalaSqlParserParser.KW_NFKD:
			case ImpalaSqlParserParser.KW_NO:
			case ImpalaSqlParserParser.KW_NONE:
			case ImpalaSqlParserParser.KW_NORMALIZE:
			case ImpalaSqlParserParser.KW_NULL:
			case ImpalaSqlParserParser.KW_NULLIF:
			case ImpalaSqlParserParser.KW_NULLS:
			case ImpalaSqlParserParser.KW_OFFSET:
			case ImpalaSqlParserParser.KW_ONLY:
			case ImpalaSqlParserParser.KW_OPTION:
			case ImpalaSqlParserParser.KW_ORDINALITY:
			case ImpalaSqlParserParser.KW_OUTPUT:
			case ImpalaSqlParserParser.KW_OVER:
			case ImpalaSqlParserParser.KW_PARTITION:
			case ImpalaSqlParserParser.KW_PARTITIONS:
			case ImpalaSqlParserParser.KW_PATH:
			case ImpalaSqlParserParser.KW_PARQUET:
			case ImpalaSqlParserParser.KW_POSITION:
			case ImpalaSqlParserParser.KW_PRECEDING:
			case ImpalaSqlParserParser.KW_PRIVILEGES:
			case ImpalaSqlParserParser.KW_PROPERTIES:
			case ImpalaSqlParserParser.KW_RANGE:
			case ImpalaSqlParserParser.KW_READ:
			case ImpalaSqlParserParser.KW_RENAME:
			case ImpalaSqlParserParser.KW_REPEATABLE:
			case ImpalaSqlParserParser.KW_REPLACE:
			case ImpalaSqlParserParser.KW_RESET:
			case ImpalaSqlParserParser.KW_RESTRICT:
			case ImpalaSqlParserParser.KW_REVOKE:
			case ImpalaSqlParserParser.KW_ROLE:
			case ImpalaSqlParserParser.KW_ROLES:
			case ImpalaSqlParserParser.KW_ROLLBACK:
			case ImpalaSqlParserParser.KW_ROW:
			case ImpalaSqlParserParser.KW_ROWS:
			case ImpalaSqlParserParser.KW_SCHEMA:
			case ImpalaSqlParserParser.KW_SCHEMAS:
			case ImpalaSqlParserParser.KW_SECOND:
			case ImpalaSqlParserParser.KW_SECONDS:
			case ImpalaSqlParserParser.KW_SECURITY:
			case ImpalaSqlParserParser.KW_SERIALIZABLE:
			case ImpalaSqlParserParser.KW_SESSION:
			case ImpalaSqlParserParser.KW_SET:
			case ImpalaSqlParserParser.KW_SETS:
			case ImpalaSqlParserParser.KW_SHOW:
			case ImpalaSqlParserParser.KW_SOME:
			case ImpalaSqlParserParser.KW_START:
			case ImpalaSqlParserParser.KW_STATS:
			case ImpalaSqlParserParser.KW_SUBSTRING:
			case ImpalaSqlParserParser.KW_SYSTEM:
			case ImpalaSqlParserParser.KW_TABLES:
			case ImpalaSqlParserParser.KW_TABLESAMPLE:
			case ImpalaSqlParserParser.KW_TEXT:
			case ImpalaSqlParserParser.KW_TIES:
			case ImpalaSqlParserParser.KW_TIME:
			case ImpalaSqlParserParser.KW_TIMESTAMP:
			case ImpalaSqlParserParser.KW_TO:
			case ImpalaSqlParserParser.KW_TRANSACTION:
			case ImpalaSqlParserParser.KW_TRUE:
			case ImpalaSqlParserParser.KW_TRY_CAST:
			case ImpalaSqlParserParser.KW_TYPE:
			case ImpalaSqlParserParser.KW_UNBOUNDED:
			case ImpalaSqlParserParser.KW_UNCOMMITTED:
			case ImpalaSqlParserParser.KW_USE:
			case ImpalaSqlParserParser.KW_USER:
			case ImpalaSqlParserParser.KW_VALIDATE:
			case ImpalaSqlParserParser.KW_VERBOSE:
			case ImpalaSqlParserParser.KW_VIEW:
			case ImpalaSqlParserParser.KW_VIEWS:
			case ImpalaSqlParserParser.KW_WORK:
			case ImpalaSqlParserParser.KW_WRITE:
			case ImpalaSqlParserParser.KW_YEAR:
			case ImpalaSqlParserParser.KW_ZONE:
			case ImpalaSqlParserParser.PLUS:
			case ImpalaSqlParserParser.MINUS:
			case ImpalaSqlParserParser.LPAREN:
			case ImpalaSqlParserParser.QUESTION:
			case ImpalaSqlParserParser.STRING:
			case ImpalaSqlParserParser.UNICODE_STRING:
			case ImpalaSqlParserParser.BINARY_LITERAL:
			case ImpalaSqlParserParser.INTEGER_VALUE:
			case ImpalaSqlParserParser.DECIMAL_VALUE:
			case ImpalaSqlParserParser.DOUBLE_VALUE:
			case ImpalaSqlParserParser.IDENTIFIER:
			case ImpalaSqlParserParser.DIGIT_IDENTIFIER:
			case ImpalaSqlParserParser.BACKQUOTED_IDENTIFIER:
			case ImpalaSqlParserParser.DOUBLE_PRECISION:
				{
				_localctx = new PredicatedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1799;
				(_localctx as PredicatedContext)._valueExpression = this.valueExpression(0);
				this.state = 1801;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 242, this._ctx) ) {
				case 1:
					{
					this.state = 1800;
					this.predicate((_localctx as PredicatedContext)._valueExpression);
					}
					break;
				}
				}
				break;
			case ImpalaSqlParserParser.KW_NOT:
				{
				_localctx = new LogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1803;
				this.match(ImpalaSqlParserParser.KW_NOT);
				this.state = 1804;
				this.booleanExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1815;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 245, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1813;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 244, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParserParser.RULE_booleanExpression);
						this.state = 1807;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1808;
						(_localctx as LogicalBinaryContext)._operator = this.match(ImpalaSqlParserParser.T__6);
						this.state = 1809;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParserParser.RULE_booleanExpression);
						this.state = 1810;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1811;
						(_localctx as LogicalBinaryContext)._operator = this.match(ImpalaSqlParserParser.KW_OR);
						this.state = 1812;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1817;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 245, this._ctx);
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
		this.enterRule(_localctx, 106, ImpalaSqlParserParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 1881;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 254, this._ctx) ) {
			case 1:
				_localctx = new ComparisonContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1818;
				this.comparisonOperator();
				this.state = 1819;
				(_localctx as ComparisonContext)._right = this.valueExpression(0);
				}
				break;

			case 2:
				_localctx = new QuantifiedComparisonContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1821;
				this.comparisonOperator();
				this.state = 1822;
				this.comparisonQuantifier();
				this.state = 1823;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 1824;
				this.query();
				this.state = 1825;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 3:
				_localctx = new BetweenContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1828;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_NOT) {
					{
					this.state = 1827;
					this.match(ImpalaSqlParserParser.KW_NOT);
					}
				}

				this.state = 1830;
				this.match(ImpalaSqlParserParser.KW_BETWEEN);
				this.state = 1831;
				(_localctx as BetweenContext)._lower = this.valueExpression(0);
				this.state = 1832;
				this.match(ImpalaSqlParserParser.T__6);
				this.state = 1833;
				(_localctx as BetweenContext)._upper = this.valueExpression(0);
				}
				break;

			case 4:
				_localctx = new InListContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1836;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_NOT) {
					{
					this.state = 1835;
					this.match(ImpalaSqlParserParser.KW_NOT);
					}
				}

				this.state = 1838;
				this.match(ImpalaSqlParserParser.KW_IN);
				this.state = 1839;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 1840;
				this.expression();
				this.state = 1845;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParserParser.COMMA) {
					{
					{
					this.state = 1841;
					this.match(ImpalaSqlParserParser.COMMA);
					this.state = 1842;
					this.expression();
					}
					}
					this.state = 1847;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1848;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 5:
				_localctx = new InSubqueryContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1851;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_NOT) {
					{
					this.state = 1850;
					this.match(ImpalaSqlParserParser.KW_NOT);
					}
				}

				this.state = 1853;
				this.match(ImpalaSqlParserParser.KW_IN);
				this.state = 1854;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 1855;
				this.query();
				this.state = 1856;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 6:
				_localctx = new LikeContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1859;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_NOT) {
					{
					this.state = 1858;
					this.match(ImpalaSqlParserParser.KW_NOT);
					}
				}

				this.state = 1861;
				this.match(ImpalaSqlParserParser.KW_LIKE);
				this.state = 1862;
				(_localctx as LikeContext)._pattern = this.valueExpression(0);
				this.state = 1865;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 251, this._ctx) ) {
				case 1:
					{
					this.state = 1863;
					this.match(ImpalaSqlParserParser.KW_ESCAPE);
					this.state = 1864;
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
				this.state = 1867;
				this.match(ImpalaSqlParserParser.KW_REGEXP);
				this.state = 1868;
				(_localctx as REGEXPContext)._pattern = this.valueExpression(0);
				}
				break;

			case 8:
				_localctx = new NullPredicateContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1869;
				this.match(ImpalaSqlParserParser.KW_IS);
				this.state = 1871;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_NOT) {
					{
					this.state = 1870;
					this.match(ImpalaSqlParserParser.KW_NOT);
					}
				}

				this.state = 1873;
				this.match(ImpalaSqlParserParser.KW_NULL);
				}
				break;

			case 9:
				_localctx = new DistinctFromContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1874;
				this.match(ImpalaSqlParserParser.KW_IS);
				this.state = 1876;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_NOT) {
					{
					this.state = 1875;
					this.match(ImpalaSqlParserParser.KW_NOT);
					}
				}

				this.state = 1878;
				this.match(ImpalaSqlParserParser.KW_DISTINCT);
				this.state = 1879;
				this.match(ImpalaSqlParserParser.KW_FROM);
				this.state = 1880;
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
		let _startState: number = 108;
		this.enterRecursionRule(_localctx, 108, ImpalaSqlParserParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1887;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 255, this._ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1884;
				this.primaryExpression(0);
				}
				break;

			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1885;
				(_localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParserParser.PLUS || _la === ImpalaSqlParserParser.MINUS)) {
					(_localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1886;
				this.valueExpression(4);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1900;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 257, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1898;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 256, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParserParser.RULE_valueExpression);
						this.state = 1889;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1890;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 305)) & ~0x1F) === 0 && ((1 << (_la - 305)) & ((1 << (ImpalaSqlParserParser.ASTERISK - 305)) | (1 << (ImpalaSqlParserParser.SLASH - 305)) | (1 << (ImpalaSqlParserParser.PERCENT - 305)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1891;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParserParser.RULE_valueExpression);
						this.state = 1892;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1893;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ImpalaSqlParserParser.PLUS || _la === ImpalaSqlParserParser.MINUS)) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1894;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;

					case 3:
						{
						_localctx = new ConcatenationContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ConcatenationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParserParser.RULE_valueExpression);
						this.state = 1895;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1896;
						this.match(ImpalaSqlParserParser.CONCAT);
						this.state = 1897;
						(_localctx as ConcatenationContext)._right = this.valueExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1902;
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
		let _startState: number = 110;
		this.enterRecursionRule(_localctx, 110, ImpalaSqlParserParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 287, this._ctx) ) {
			case 1:
				{
				_localctx = new NullLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1904;
				this.match(ImpalaSqlParserParser.KW_NULL);
				}
				break;

			case 2:
				{
				_localctx = new IntervalLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1905;
				this.interval();
				}
				break;

			case 3:
				{
				_localctx = new TypeConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1906;
				this.identifier();
				this.state = 1907;
				this.string();
				}
				break;

			case 4:
				{
				_localctx = new TypeConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1909;
				this.match(ImpalaSqlParserParser.DOUBLE_PRECISION);
				this.state = 1910;
				this.string();
				}
				break;

			case 5:
				{
				_localctx = new NumericLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1911;
				this.number();
				}
				break;

			case 6:
				{
				_localctx = new BooleanLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1912;
				this.booleanValue();
				}
				break;

			case 7:
				{
				_localctx = new StringLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1913;
				this.string();
				}
				break;

			case 8:
				{
				_localctx = new BinaryLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1914;
				this.match(ImpalaSqlParserParser.BINARY_LITERAL);
				}
				break;

			case 9:
				{
				_localctx = new ParameterContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1915;
				this.match(ImpalaSqlParserParser.QUESTION);
				}
				break;

			case 10:
				{
				_localctx = new PositionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1916;
				this.match(ImpalaSqlParserParser.KW_POSITION);
				this.state = 1917;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 1918;
				this.valueExpression(0);
				this.state = 1919;
				this.match(ImpalaSqlParserParser.KW_IN);
				this.state = 1920;
				this.valueExpression(0);
				this.state = 1921;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 11:
				{
				_localctx = new RowConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1923;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 1924;
				this.expression();
				this.state = 1927;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_AS) {
					{
					this.state = 1925;
					this.match(ImpalaSqlParserParser.KW_AS);
					this.state = 1926;
					this.type(0);
					}
				}

				this.state = 1937;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 260, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1929;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 1930;
						this.expression();
						this.state = 1933;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === ImpalaSqlParserParser.KW_AS) {
							{
							this.state = 1931;
							this.match(ImpalaSqlParserParser.KW_AS);
							this.state = 1932;
							this.type(0);
							}
						}

						}
						}
					}
					this.state = 1939;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 260, this._ctx);
				}
				this.state = 1940;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 12:
				{
				_localctx = new RowConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1942;
				this.match(ImpalaSqlParserParser.KW_ROW);
				this.state = 1943;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 1944;
				this.expression();
				this.state = 1949;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParserParser.COMMA) {
					{
					{
					this.state = 1945;
					this.match(ImpalaSqlParserParser.COMMA);
					this.state = 1946;
					this.expression();
					}
					}
					this.state = 1951;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1952;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 13:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1954;
				this.qualifiedName();
				this.state = 1955;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 1956;
				this.match(ImpalaSqlParserParser.ASTERISK);
				this.state = 1957;
				this.match(ImpalaSqlParserParser.RPAREN);
				this.state = 1959;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 262, this._ctx) ) {
				case 1:
					{
					this.state = 1958;
					this.filter();
					}
					break;
				}
				this.state = 1962;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 263, this._ctx) ) {
				case 1:
					{
					this.state = 1961;
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
				this.state = 1964;
				this.qualifiedName();
				this.state = 1965;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 1977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParserParser.T__0) | (1 << ImpalaSqlParserParser.T__1) | (1 << ImpalaSqlParserParser.T__2) | (1 << ImpalaSqlParserParser.T__3) | (1 << ImpalaSqlParserParser.T__7) | (1 << ImpalaSqlParserParser.KW_ARRAY) | (1 << ImpalaSqlParserParser.KW_ASC) | (1 << ImpalaSqlParserParser.KW_AT) | (1 << ImpalaSqlParserParser.KW_BERNOULLI))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ImpalaSqlParserParser.KW_CALL - 34)) | (1 << (ImpalaSqlParserParser.KW_CASCADE - 34)) | (1 << (ImpalaSqlParserParser.KW_CASE - 34)) | (1 << (ImpalaSqlParserParser.KW_CAST - 34)) | (1 << (ImpalaSqlParserParser.KW_CATALOGS - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMN - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMNS - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMENT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMIT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMITTED - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT_DATE - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT_PATH - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT_TIME - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT_TIMESTAMP - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT_USER - 34)) | (1 << (ImpalaSqlParserParser.KW_DATA - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASE - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASES - 34)) | (1 << (ImpalaSqlParserParser.KW_DATE - 34)) | (1 << (ImpalaSqlParserParser.KW_DAY - 34)) | (1 << (ImpalaSqlParserParser.KW_DAYS - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ImpalaSqlParserParser.KW_DEFINER - 66)) | (1 << (ImpalaSqlParserParser.KW_DEFAULT - 66)) | (1 << (ImpalaSqlParserParser.KW_DESC - 66)) | (1 << (ImpalaSqlParserParser.KW_DISTINCT - 66)) | (1 << (ImpalaSqlParserParser.KW_EXCLUDING - 66)) | (1 << (ImpalaSqlParserParser.KW_EXISTS - 66)) | (1 << (ImpalaSqlParserParser.KW_EXPLAIN - 66)) | (1 << (ImpalaSqlParserParser.KW_EXTRACT - 66)) | (1 << (ImpalaSqlParserParser.KW_FALSE - 66)) | (1 << (ImpalaSqlParserParser.KW_FETCH - 66)) | (1 << (ImpalaSqlParserParser.KW_FILTER - 66)) | (1 << (ImpalaSqlParserParser.KW_FIRST - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ImpalaSqlParserParser.KW_FOLLOWING - 98)) | (1 << (ImpalaSqlParserParser.KW_FORMAT - 98)) | (1 << (ImpalaSqlParserParser.KW_FUNCTIONS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANT - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTED - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRAPHVIZ - 98)) | (1 << (ImpalaSqlParserParser.KW_GROUPING - 98)) | (1 << (ImpalaSqlParserParser.KW_HOUR - 98)) | (1 << (ImpalaSqlParserParser.KW_IF - 98)) | (1 << (ImpalaSqlParserParser.KW_INCLUDING - 98)) | (1 << (ImpalaSqlParserParser.KW_INPUT - 98)) | (1 << (ImpalaSqlParserParser.KW_INTERVAL - 98)) | (1 << (ImpalaSqlParserParser.KW_INVOKER - 98)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (ImpalaSqlParserParser.KW_IO - 132)) | (1 << (ImpalaSqlParserParser.KW_ISOLATION - 132)) | (1 << (ImpalaSqlParserParser.KW_JSON - 132)) | (1 << (ImpalaSqlParserParser.KW_LAST - 132)) | (1 << (ImpalaSqlParserParser.KW_LATERAL - 132)) | (1 << (ImpalaSqlParserParser.KW_LEVEL - 132)) | (1 << (ImpalaSqlParserParser.KW_LIMIT - 132)) | (1 << (ImpalaSqlParserParser.KW_LOCALTIME - 132)) | (1 << (ImpalaSqlParserParser.KW_LOCALTIMESTAMP - 132)) | (1 << (ImpalaSqlParserParser.KW_LOGICAL - 132)) | (1 << (ImpalaSqlParserParser.KW_MAP - 132)) | (1 << (ImpalaSqlParserParser.KW_MINUTE - 132)) | (1 << (ImpalaSqlParserParser.KW_MONTH - 132)) | (1 << (ImpalaSqlParserParser.KW_NEXT - 132)) | (1 << (ImpalaSqlParserParser.KW_NFC - 132)) | (1 << (ImpalaSqlParserParser.KW_NFD - 132)) | (1 << (ImpalaSqlParserParser.KW_NFKC - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (ImpalaSqlParserParser.KW_NFKD - 164)) | (1 << (ImpalaSqlParserParser.KW_NO - 164)) | (1 << (ImpalaSqlParserParser.KW_NONE - 164)) | (1 << (ImpalaSqlParserParser.KW_NORMALIZE - 164)) | (1 << (ImpalaSqlParserParser.KW_NOT - 164)) | (1 << (ImpalaSqlParserParser.KW_NULL - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLIF - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLS - 164)) | (1 << (ImpalaSqlParserParser.KW_OFFSET - 164)) | (1 << (ImpalaSqlParserParser.KW_ONLY - 164)) | (1 << (ImpalaSqlParserParser.KW_OPTION - 164)) | (1 << (ImpalaSqlParserParser.KW_ORDINALITY - 164)) | (1 << (ImpalaSqlParserParser.KW_OUTPUT - 164)) | (1 << (ImpalaSqlParserParser.KW_OVER - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITIONS - 164)) | (1 << (ImpalaSqlParserParser.KW_PATH - 164)) | (1 << (ImpalaSqlParserParser.KW_PARQUET - 164)) | (1 << (ImpalaSqlParserParser.KW_POSITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PRECEDING - 164)) | (1 << (ImpalaSqlParserParser.KW_PRIVILEGES - 164)) | (1 << (ImpalaSqlParserParser.KW_PROPERTIES - 164)) | (1 << (ImpalaSqlParserParser.KW_RANGE - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (ImpalaSqlParserParser.KW_READ - 196)) | (1 << (ImpalaSqlParserParser.KW_RENAME - 196)) | (1 << (ImpalaSqlParserParser.KW_REPEATABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_REPLACE - 196)) | (1 << (ImpalaSqlParserParser.KW_RESET - 196)) | (1 << (ImpalaSqlParserParser.KW_RESTRICT - 196)) | (1 << (ImpalaSqlParserParser.KW_REVOKE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLES - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLLBACK - 196)) | (1 << (ImpalaSqlParserParser.KW_ROW - 196)) | (1 << (ImpalaSqlParserParser.KW_ROWS - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMA - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMAS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECOND - 196)) | (1 << (ImpalaSqlParserParser.KW_SECONDS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECURITY - 196)) | (1 << (ImpalaSqlParserParser.KW_SERIALIZABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_SESSION - 196)))) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (ImpalaSqlParserParser.KW_SET - 228)) | (1 << (ImpalaSqlParserParser.KW_SETS - 228)) | (1 << (ImpalaSqlParserParser.KW_SHOW - 228)) | (1 << (ImpalaSqlParserParser.KW_SOME - 228)) | (1 << (ImpalaSqlParserParser.KW_START - 228)) | (1 << (ImpalaSqlParserParser.KW_STATS - 228)) | (1 << (ImpalaSqlParserParser.KW_SUBSTRING - 228)) | (1 << (ImpalaSqlParserParser.KW_SYSTEM - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLES - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLESAMPLE - 228)) | (1 << (ImpalaSqlParserParser.KW_TEXT - 228)) | (1 << (ImpalaSqlParserParser.KW_TIES - 228)) | (1 << (ImpalaSqlParserParser.KW_TIME - 228)) | (1 << (ImpalaSqlParserParser.KW_TIMESTAMP - 228)) | (1 << (ImpalaSqlParserParser.KW_TO - 228)) | (1 << (ImpalaSqlParserParser.KW_TRANSACTION - 228)) | (1 << (ImpalaSqlParserParser.KW_TRUE - 228)) | (1 << (ImpalaSqlParserParser.KW_TRY_CAST - 228)) | (1 << (ImpalaSqlParserParser.KW_TYPE - 228)))) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (ImpalaSqlParserParser.KW_UNBOUNDED - 260)) | (1 << (ImpalaSqlParserParser.KW_UNCOMMITTED - 260)) | (1 << (ImpalaSqlParserParser.KW_USE - 260)) | (1 << (ImpalaSqlParserParser.KW_USER - 260)) | (1 << (ImpalaSqlParserParser.KW_VALIDATE - 260)) | (1 << (ImpalaSqlParserParser.KW_VERBOSE - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEW - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEWS - 260)) | (1 << (ImpalaSqlParserParser.KW_WORK - 260)) | (1 << (ImpalaSqlParserParser.KW_WRITE - 260)) | (1 << (ImpalaSqlParserParser.KW_YEAR - 260)) | (1 << (ImpalaSqlParserParser.KW_ZONE - 260)))) !== 0) || ((((_la - 303)) & ~0x1F) === 0 && ((1 << (_la - 303)) & ((1 << (ImpalaSqlParserParser.PLUS - 303)) | (1 << (ImpalaSqlParserParser.MINUS - 303)) | (1 << (ImpalaSqlParserParser.LPAREN - 303)) | (1 << (ImpalaSqlParserParser.QUESTION - 303)) | (1 << (ImpalaSqlParserParser.STRING - 303)) | (1 << (ImpalaSqlParserParser.UNICODE_STRING - 303)) | (1 << (ImpalaSqlParserParser.BINARY_LITERAL - 303)) | (1 << (ImpalaSqlParserParser.INTEGER_VALUE - 303)) | (1 << (ImpalaSqlParserParser.DECIMAL_VALUE - 303)) | (1 << (ImpalaSqlParserParser.DOUBLE_VALUE - 303)) | (1 << (ImpalaSqlParserParser.IDENTIFIER - 303)) | (1 << (ImpalaSqlParserParser.DIGIT_IDENTIFIER - 303)) | (1 << (ImpalaSqlParserParser.BACKQUOTED_IDENTIFIER - 303)) | (1 << (ImpalaSqlParserParser.DOUBLE_PRECISION - 303)))) !== 0)) {
					{
					this.state = 1967;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 264, this._ctx) ) {
					case 1:
						{
						this.state = 1966;
						this.setQuantifier();
						}
						break;
					}
					this.state = 1969;
					this.expression();
					this.state = 1974;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParserParser.COMMA) {
						{
						{
						this.state = 1970;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 1971;
						this.expression();
						}
						}
						this.state = 1976;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1989;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_ORDER) {
					{
					this.state = 1979;
					this.match(ImpalaSqlParserParser.KW_ORDER);
					this.state = 1980;
					this.match(ImpalaSqlParserParser.KW_BY);
					this.state = 1981;
					this.sortItem();
					this.state = 1986;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParserParser.COMMA) {
						{
						{
						this.state = 1982;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 1983;
						this.sortItem();
						}
						}
						this.state = 1988;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1991;
				this.match(ImpalaSqlParserParser.RPAREN);
				this.state = 1993;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 269, this._ctx) ) {
				case 1:
					{
					this.state = 1992;
					this.filter();
					}
					break;
				}
				this.state = 1996;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 270, this._ctx) ) {
				case 1:
					{
					this.state = 1995;
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
				this.state = 1998;
				this.identifier();
				this.state = 1999;
				this.match(ImpalaSqlParserParser.T__7);
				this.state = 2000;
				this.expression();
				}
				break;

			case 16:
				{
				_localctx = new LambdaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2002;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 2011;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParserParser.T__0) | (1 << ImpalaSqlParserParser.T__1) | (1 << ImpalaSqlParserParser.T__2) | (1 << ImpalaSqlParserParser.T__3) | (1 << ImpalaSqlParserParser.T__7) | (1 << ImpalaSqlParserParser.KW_ARRAY) | (1 << ImpalaSqlParserParser.KW_ASC) | (1 << ImpalaSqlParserParser.KW_AT) | (1 << ImpalaSqlParserParser.KW_BERNOULLI))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ImpalaSqlParserParser.KW_CALL - 34)) | (1 << (ImpalaSqlParserParser.KW_CASCADE - 34)) | (1 << (ImpalaSqlParserParser.KW_CATALOGS - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMN - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMNS - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMENT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMIT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMITTED - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT - 34)) | (1 << (ImpalaSqlParserParser.KW_DATA - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASE - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASES - 34)) | (1 << (ImpalaSqlParserParser.KW_DATE - 34)) | (1 << (ImpalaSqlParserParser.KW_DAY - 34)) | (1 << (ImpalaSqlParserParser.KW_DAYS - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ImpalaSqlParserParser.KW_DEFINER - 66)) | (1 << (ImpalaSqlParserParser.KW_DEFAULT - 66)) | (1 << (ImpalaSqlParserParser.KW_DESC - 66)) | (1 << (ImpalaSqlParserParser.KW_EXCLUDING - 66)) | (1 << (ImpalaSqlParserParser.KW_EXPLAIN - 66)) | (1 << (ImpalaSqlParserParser.KW_FETCH - 66)) | (1 << (ImpalaSqlParserParser.KW_FILTER - 66)) | (1 << (ImpalaSqlParserParser.KW_FIRST - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ImpalaSqlParserParser.KW_FOLLOWING - 98)) | (1 << (ImpalaSqlParserParser.KW_FORMAT - 98)) | (1 << (ImpalaSqlParserParser.KW_FUNCTIONS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANT - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTED - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRAPHVIZ - 98)) | (1 << (ImpalaSqlParserParser.KW_HOUR - 98)) | (1 << (ImpalaSqlParserParser.KW_IF - 98)) | (1 << (ImpalaSqlParserParser.KW_INCLUDING - 98)) | (1 << (ImpalaSqlParserParser.KW_INPUT - 98)) | (1 << (ImpalaSqlParserParser.KW_INTERVAL - 98)) | (1 << (ImpalaSqlParserParser.KW_INVOKER - 98)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (ImpalaSqlParserParser.KW_IO - 132)) | (1 << (ImpalaSqlParserParser.KW_ISOLATION - 132)) | (1 << (ImpalaSqlParserParser.KW_JSON - 132)) | (1 << (ImpalaSqlParserParser.KW_LAST - 132)) | (1 << (ImpalaSqlParserParser.KW_LATERAL - 132)) | (1 << (ImpalaSqlParserParser.KW_LEVEL - 132)) | (1 << (ImpalaSqlParserParser.KW_LIMIT - 132)) | (1 << (ImpalaSqlParserParser.KW_LOGICAL - 132)) | (1 << (ImpalaSqlParserParser.KW_MAP - 132)) | (1 << (ImpalaSqlParserParser.KW_MINUTE - 132)) | (1 << (ImpalaSqlParserParser.KW_MONTH - 132)) | (1 << (ImpalaSqlParserParser.KW_NEXT - 132)) | (1 << (ImpalaSqlParserParser.KW_NFC - 132)) | (1 << (ImpalaSqlParserParser.KW_NFD - 132)) | (1 << (ImpalaSqlParserParser.KW_NFKC - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (ImpalaSqlParserParser.KW_NFKD - 164)) | (1 << (ImpalaSqlParserParser.KW_NO - 164)) | (1 << (ImpalaSqlParserParser.KW_NONE - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLIF - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLS - 164)) | (1 << (ImpalaSqlParserParser.KW_OFFSET - 164)) | (1 << (ImpalaSqlParserParser.KW_ONLY - 164)) | (1 << (ImpalaSqlParserParser.KW_OPTION - 164)) | (1 << (ImpalaSqlParserParser.KW_ORDINALITY - 164)) | (1 << (ImpalaSqlParserParser.KW_OUTPUT - 164)) | (1 << (ImpalaSqlParserParser.KW_OVER - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITIONS - 164)) | (1 << (ImpalaSqlParserParser.KW_PATH - 164)) | (1 << (ImpalaSqlParserParser.KW_PARQUET - 164)) | (1 << (ImpalaSqlParserParser.KW_POSITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PRECEDING - 164)) | (1 << (ImpalaSqlParserParser.KW_PRIVILEGES - 164)) | (1 << (ImpalaSqlParserParser.KW_PROPERTIES - 164)) | (1 << (ImpalaSqlParserParser.KW_RANGE - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (ImpalaSqlParserParser.KW_READ - 196)) | (1 << (ImpalaSqlParserParser.KW_RENAME - 196)) | (1 << (ImpalaSqlParserParser.KW_REPEATABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_REPLACE - 196)) | (1 << (ImpalaSqlParserParser.KW_RESET - 196)) | (1 << (ImpalaSqlParserParser.KW_RESTRICT - 196)) | (1 << (ImpalaSqlParserParser.KW_REVOKE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLES - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLLBACK - 196)) | (1 << (ImpalaSqlParserParser.KW_ROW - 196)) | (1 << (ImpalaSqlParserParser.KW_ROWS - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMA - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMAS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECOND - 196)) | (1 << (ImpalaSqlParserParser.KW_SECONDS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECURITY - 196)) | (1 << (ImpalaSqlParserParser.KW_SERIALIZABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_SESSION - 196)))) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (ImpalaSqlParserParser.KW_SET - 228)) | (1 << (ImpalaSqlParserParser.KW_SETS - 228)) | (1 << (ImpalaSqlParserParser.KW_SHOW - 228)) | (1 << (ImpalaSqlParserParser.KW_SOME - 228)) | (1 << (ImpalaSqlParserParser.KW_START - 228)) | (1 << (ImpalaSqlParserParser.KW_STATS - 228)) | (1 << (ImpalaSqlParserParser.KW_SUBSTRING - 228)) | (1 << (ImpalaSqlParserParser.KW_SYSTEM - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLES - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLESAMPLE - 228)) | (1 << (ImpalaSqlParserParser.KW_TEXT - 228)) | (1 << (ImpalaSqlParserParser.KW_TIES - 228)) | (1 << (ImpalaSqlParserParser.KW_TIME - 228)) | (1 << (ImpalaSqlParserParser.KW_TIMESTAMP - 228)) | (1 << (ImpalaSqlParserParser.KW_TO - 228)) | (1 << (ImpalaSqlParserParser.KW_TRANSACTION - 228)) | (1 << (ImpalaSqlParserParser.KW_TRY_CAST - 228)) | (1 << (ImpalaSqlParserParser.KW_TYPE - 228)))) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (ImpalaSqlParserParser.KW_UNBOUNDED - 260)) | (1 << (ImpalaSqlParserParser.KW_UNCOMMITTED - 260)) | (1 << (ImpalaSqlParserParser.KW_USE - 260)) | (1 << (ImpalaSqlParserParser.KW_USER - 260)) | (1 << (ImpalaSqlParserParser.KW_VALIDATE - 260)) | (1 << (ImpalaSqlParserParser.KW_VERBOSE - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEW - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEWS - 260)) | (1 << (ImpalaSqlParserParser.KW_WORK - 260)) | (1 << (ImpalaSqlParserParser.KW_WRITE - 260)) | (1 << (ImpalaSqlParserParser.KW_YEAR - 260)) | (1 << (ImpalaSqlParserParser.KW_ZONE - 260)))) !== 0) || ((((_la - 321)) & ~0x1F) === 0 && ((1 << (_la - 321)) & ((1 << (ImpalaSqlParserParser.STRING - 321)) | (1 << (ImpalaSqlParserParser.IDENTIFIER - 321)) | (1 << (ImpalaSqlParserParser.DIGIT_IDENTIFIER - 321)) | (1 << (ImpalaSqlParserParser.BACKQUOTED_IDENTIFIER - 321)))) !== 0)) {
					{
					this.state = 2003;
					this.identifier();
					this.state = 2008;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParserParser.COMMA) {
						{
						{
						this.state = 2004;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 2005;
						this.identifier();
						}
						}
						this.state = 2010;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2013;
				this.match(ImpalaSqlParserParser.RPAREN);
				this.state = 2014;
				this.match(ImpalaSqlParserParser.T__7);
				this.state = 2015;
				this.expression();
				}
				break;

			case 17:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2016;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 2017;
				this.query();
				this.state = 2018;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 18:
				{
				_localctx = new ExistsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2020;
				this.match(ImpalaSqlParserParser.KW_EXISTS);
				this.state = 2021;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 2022;
				this.query();
				this.state = 2023;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 19:
				{
				_localctx = new SimpleCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2025;
				this.match(ImpalaSqlParserParser.KW_CASE);
				this.state = 2026;
				this.valueExpression(0);
				this.state = 2028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2027;
					this.whenClause();
					}
					}
					this.state = 2030;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ImpalaSqlParserParser.KW_WHEN);
				this.state = 2034;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_ELSE) {
					{
					this.state = 2032;
					this.match(ImpalaSqlParserParser.KW_ELSE);
					this.state = 2033;
					(_localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 2036;
				this.match(ImpalaSqlParserParser.KW_END);
				}
				break;

			case 20:
				{
				_localctx = new SearchedCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2038;
				this.match(ImpalaSqlParserParser.KW_CASE);
				this.state = 2040;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2039;
					this.whenClause();
					}
					}
					this.state = 2042;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ImpalaSqlParserParser.KW_WHEN);
				this.state = 2046;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_ELSE) {
					{
					this.state = 2044;
					this.match(ImpalaSqlParserParser.KW_ELSE);
					this.state = 2045;
					(_localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 2048;
				this.match(ImpalaSqlParserParser.KW_END);
				}
				break;

			case 21:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2050;
				this.match(ImpalaSqlParserParser.KW_CAST);
				this.state = 2051;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 2052;
				this.expression();
				this.state = 2053;
				this.match(ImpalaSqlParserParser.KW_AS);
				this.state = 2054;
				this.type(0);
				this.state = 2055;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 22:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2057;
				this.match(ImpalaSqlParserParser.KW_TRY_CAST);
				this.state = 2058;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 2059;
				this.expression();
				this.state = 2060;
				this.match(ImpalaSqlParserParser.KW_AS);
				this.state = 2061;
				this.type(0);
				this.state = 2062;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 23:
				{
				_localctx = new ArrayConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2064;
				this.match(ImpalaSqlParserParser.KW_ARRAY);
				this.state = 2065;
				this.match(ImpalaSqlParserParser.LSQUARE);
				this.state = 2074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParserParser.T__0) | (1 << ImpalaSqlParserParser.T__1) | (1 << ImpalaSqlParserParser.T__2) | (1 << ImpalaSqlParserParser.T__3) | (1 << ImpalaSqlParserParser.T__7) | (1 << ImpalaSqlParserParser.KW_ARRAY) | (1 << ImpalaSqlParserParser.KW_ASC) | (1 << ImpalaSqlParserParser.KW_AT) | (1 << ImpalaSqlParserParser.KW_BERNOULLI))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ImpalaSqlParserParser.KW_CALL - 34)) | (1 << (ImpalaSqlParserParser.KW_CASCADE - 34)) | (1 << (ImpalaSqlParserParser.KW_CASE - 34)) | (1 << (ImpalaSqlParserParser.KW_CAST - 34)) | (1 << (ImpalaSqlParserParser.KW_CATALOGS - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMN - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMNS - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMENT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMIT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMITTED - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT_DATE - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT_PATH - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT_TIME - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT_TIMESTAMP - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT_USER - 34)) | (1 << (ImpalaSqlParserParser.KW_DATA - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASE - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASES - 34)) | (1 << (ImpalaSqlParserParser.KW_DATE - 34)) | (1 << (ImpalaSqlParserParser.KW_DAY - 34)) | (1 << (ImpalaSqlParserParser.KW_DAYS - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ImpalaSqlParserParser.KW_DEFINER - 66)) | (1 << (ImpalaSqlParserParser.KW_DEFAULT - 66)) | (1 << (ImpalaSqlParserParser.KW_DESC - 66)) | (1 << (ImpalaSqlParserParser.KW_EXCLUDING - 66)) | (1 << (ImpalaSqlParserParser.KW_EXISTS - 66)) | (1 << (ImpalaSqlParserParser.KW_EXPLAIN - 66)) | (1 << (ImpalaSqlParserParser.KW_EXTRACT - 66)) | (1 << (ImpalaSqlParserParser.KW_FALSE - 66)) | (1 << (ImpalaSqlParserParser.KW_FETCH - 66)) | (1 << (ImpalaSqlParserParser.KW_FILTER - 66)) | (1 << (ImpalaSqlParserParser.KW_FIRST - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ImpalaSqlParserParser.KW_FOLLOWING - 98)) | (1 << (ImpalaSqlParserParser.KW_FORMAT - 98)) | (1 << (ImpalaSqlParserParser.KW_FUNCTIONS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANT - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTED - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRAPHVIZ - 98)) | (1 << (ImpalaSqlParserParser.KW_GROUPING - 98)) | (1 << (ImpalaSqlParserParser.KW_HOUR - 98)) | (1 << (ImpalaSqlParserParser.KW_IF - 98)) | (1 << (ImpalaSqlParserParser.KW_INCLUDING - 98)) | (1 << (ImpalaSqlParserParser.KW_INPUT - 98)) | (1 << (ImpalaSqlParserParser.KW_INTERVAL - 98)) | (1 << (ImpalaSqlParserParser.KW_INVOKER - 98)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (ImpalaSqlParserParser.KW_IO - 132)) | (1 << (ImpalaSqlParserParser.KW_ISOLATION - 132)) | (1 << (ImpalaSqlParserParser.KW_JSON - 132)) | (1 << (ImpalaSqlParserParser.KW_LAST - 132)) | (1 << (ImpalaSqlParserParser.KW_LATERAL - 132)) | (1 << (ImpalaSqlParserParser.KW_LEVEL - 132)) | (1 << (ImpalaSqlParserParser.KW_LIMIT - 132)) | (1 << (ImpalaSqlParserParser.KW_LOCALTIME - 132)) | (1 << (ImpalaSqlParserParser.KW_LOCALTIMESTAMP - 132)) | (1 << (ImpalaSqlParserParser.KW_LOGICAL - 132)) | (1 << (ImpalaSqlParserParser.KW_MAP - 132)) | (1 << (ImpalaSqlParserParser.KW_MINUTE - 132)) | (1 << (ImpalaSqlParserParser.KW_MONTH - 132)) | (1 << (ImpalaSqlParserParser.KW_NEXT - 132)) | (1 << (ImpalaSqlParserParser.KW_NFC - 132)) | (1 << (ImpalaSqlParserParser.KW_NFD - 132)) | (1 << (ImpalaSqlParserParser.KW_NFKC - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (ImpalaSqlParserParser.KW_NFKD - 164)) | (1 << (ImpalaSqlParserParser.KW_NO - 164)) | (1 << (ImpalaSqlParserParser.KW_NONE - 164)) | (1 << (ImpalaSqlParserParser.KW_NORMALIZE - 164)) | (1 << (ImpalaSqlParserParser.KW_NOT - 164)) | (1 << (ImpalaSqlParserParser.KW_NULL - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLIF - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLS - 164)) | (1 << (ImpalaSqlParserParser.KW_OFFSET - 164)) | (1 << (ImpalaSqlParserParser.KW_ONLY - 164)) | (1 << (ImpalaSqlParserParser.KW_OPTION - 164)) | (1 << (ImpalaSqlParserParser.KW_ORDINALITY - 164)) | (1 << (ImpalaSqlParserParser.KW_OUTPUT - 164)) | (1 << (ImpalaSqlParserParser.KW_OVER - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITIONS - 164)) | (1 << (ImpalaSqlParserParser.KW_PATH - 164)) | (1 << (ImpalaSqlParserParser.KW_PARQUET - 164)) | (1 << (ImpalaSqlParserParser.KW_POSITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PRECEDING - 164)) | (1 << (ImpalaSqlParserParser.KW_PRIVILEGES - 164)) | (1 << (ImpalaSqlParserParser.KW_PROPERTIES - 164)) | (1 << (ImpalaSqlParserParser.KW_RANGE - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (ImpalaSqlParserParser.KW_READ - 196)) | (1 << (ImpalaSqlParserParser.KW_RENAME - 196)) | (1 << (ImpalaSqlParserParser.KW_REPEATABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_REPLACE - 196)) | (1 << (ImpalaSqlParserParser.KW_RESET - 196)) | (1 << (ImpalaSqlParserParser.KW_RESTRICT - 196)) | (1 << (ImpalaSqlParserParser.KW_REVOKE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLES - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLLBACK - 196)) | (1 << (ImpalaSqlParserParser.KW_ROW - 196)) | (1 << (ImpalaSqlParserParser.KW_ROWS - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMA - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMAS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECOND - 196)) | (1 << (ImpalaSqlParserParser.KW_SECONDS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECURITY - 196)) | (1 << (ImpalaSqlParserParser.KW_SERIALIZABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_SESSION - 196)))) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (ImpalaSqlParserParser.KW_SET - 228)) | (1 << (ImpalaSqlParserParser.KW_SETS - 228)) | (1 << (ImpalaSqlParserParser.KW_SHOW - 228)) | (1 << (ImpalaSqlParserParser.KW_SOME - 228)) | (1 << (ImpalaSqlParserParser.KW_START - 228)) | (1 << (ImpalaSqlParserParser.KW_STATS - 228)) | (1 << (ImpalaSqlParserParser.KW_SUBSTRING - 228)) | (1 << (ImpalaSqlParserParser.KW_SYSTEM - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLES - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLESAMPLE - 228)) | (1 << (ImpalaSqlParserParser.KW_TEXT - 228)) | (1 << (ImpalaSqlParserParser.KW_TIES - 228)) | (1 << (ImpalaSqlParserParser.KW_TIME - 228)) | (1 << (ImpalaSqlParserParser.KW_TIMESTAMP - 228)) | (1 << (ImpalaSqlParserParser.KW_TO - 228)) | (1 << (ImpalaSqlParserParser.KW_TRANSACTION - 228)) | (1 << (ImpalaSqlParserParser.KW_TRUE - 228)) | (1 << (ImpalaSqlParserParser.KW_TRY_CAST - 228)) | (1 << (ImpalaSqlParserParser.KW_TYPE - 228)))) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (ImpalaSqlParserParser.KW_UNBOUNDED - 260)) | (1 << (ImpalaSqlParserParser.KW_UNCOMMITTED - 260)) | (1 << (ImpalaSqlParserParser.KW_USE - 260)) | (1 << (ImpalaSqlParserParser.KW_USER - 260)) | (1 << (ImpalaSqlParserParser.KW_VALIDATE - 260)) | (1 << (ImpalaSqlParserParser.KW_VERBOSE - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEW - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEWS - 260)) | (1 << (ImpalaSqlParserParser.KW_WORK - 260)) | (1 << (ImpalaSqlParserParser.KW_WRITE - 260)) | (1 << (ImpalaSqlParserParser.KW_YEAR - 260)) | (1 << (ImpalaSqlParserParser.KW_ZONE - 260)))) !== 0) || ((((_la - 303)) & ~0x1F) === 0 && ((1 << (_la - 303)) & ((1 << (ImpalaSqlParserParser.PLUS - 303)) | (1 << (ImpalaSqlParserParser.MINUS - 303)) | (1 << (ImpalaSqlParserParser.LPAREN - 303)) | (1 << (ImpalaSqlParserParser.QUESTION - 303)) | (1 << (ImpalaSqlParserParser.STRING - 303)) | (1 << (ImpalaSqlParserParser.UNICODE_STRING - 303)) | (1 << (ImpalaSqlParserParser.BINARY_LITERAL - 303)) | (1 << (ImpalaSqlParserParser.INTEGER_VALUE - 303)) | (1 << (ImpalaSqlParserParser.DECIMAL_VALUE - 303)) | (1 << (ImpalaSqlParserParser.DOUBLE_VALUE - 303)) | (1 << (ImpalaSqlParserParser.IDENTIFIER - 303)) | (1 << (ImpalaSqlParserParser.DIGIT_IDENTIFIER - 303)) | (1 << (ImpalaSqlParserParser.BACKQUOTED_IDENTIFIER - 303)) | (1 << (ImpalaSqlParserParser.DOUBLE_PRECISION - 303)))) !== 0)) {
					{
					this.state = 2066;
					this.expression();
					this.state = 2071;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParserParser.COMMA) {
						{
						{
						this.state = 2067;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 2068;
						this.expression();
						}
						}
						this.state = 2073;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2076;
				this.match(ImpalaSqlParserParser.RSQUARE);
				}
				break;

			case 24:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2077;
				this.identifier();
				}
				break;

			case 25:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2078;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParserParser.KW_CURRENT_DATE);
				}
				break;

			case 26:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2079;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParserParser.KW_CURRENT_TIME);
				this.state = 2083;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 279, this._ctx) ) {
				case 1:
					{
					this.state = 2080;
					this.match(ImpalaSqlParserParser.LPAREN);
					this.state = 2081;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParserParser.INTEGER_VALUE);
					this.state = 2082;
					this.match(ImpalaSqlParserParser.RPAREN);
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
				this.state = 2085;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParserParser.KW_CURRENT_TIMESTAMP);
				this.state = 2089;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 280, this._ctx) ) {
				case 1:
					{
					this.state = 2086;
					this.match(ImpalaSqlParserParser.LPAREN);
					this.state = 2087;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParserParser.INTEGER_VALUE);
					this.state = 2088;
					this.match(ImpalaSqlParserParser.RPAREN);
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
				this.state = 2091;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParserParser.KW_LOCALTIME);
				this.state = 2095;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 281, this._ctx) ) {
				case 1:
					{
					this.state = 2092;
					this.match(ImpalaSqlParserParser.LPAREN);
					this.state = 2093;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParserParser.INTEGER_VALUE);
					this.state = 2094;
					this.match(ImpalaSqlParserParser.RPAREN);
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
				this.state = 2097;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(ImpalaSqlParserParser.KW_LOCALTIMESTAMP);
				this.state = 2101;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 282, this._ctx) ) {
				case 1:
					{
					this.state = 2098;
					this.match(ImpalaSqlParserParser.LPAREN);
					this.state = 2099;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(ImpalaSqlParserParser.INTEGER_VALUE);
					this.state = 2100;
					this.match(ImpalaSqlParserParser.RPAREN);
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
				this.state = 2103;
				(_localctx as CurrentUserContext)._name = this.match(ImpalaSqlParserParser.KW_CURRENT_USER);
				}
				break;

			case 31:
				{
				_localctx = new CurrentPathContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2104;
				(_localctx as CurrentPathContext)._name = this.match(ImpalaSqlParserParser.KW_CURRENT_PATH);
				}
				break;

			case 32:
				{
				_localctx = new SubstringContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2105;
				this.match(ImpalaSqlParserParser.KW_SUBSTRING);
				this.state = 2106;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 2107;
				this.valueExpression(0);
				this.state = 2108;
				this.match(ImpalaSqlParserParser.KW_FROM);
				this.state = 2109;
				this.valueExpression(0);
				this.state = 2112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.KW_FOR) {
					{
					this.state = 2110;
					this.match(ImpalaSqlParserParser.KW_FOR);
					this.state = 2111;
					this.valueExpression(0);
					}
				}

				this.state = 2114;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 33:
				{
				_localctx = new NormalizeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2116;
				this.match(ImpalaSqlParserParser.KW_NORMALIZE);
				this.state = 2117;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 2118;
				this.valueExpression(0);
				this.state = 2121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.COMMA) {
					{
					this.state = 2119;
					this.match(ImpalaSqlParserParser.COMMA);
					this.state = 2120;
					this.normalForm();
					}
				}

				this.state = 2123;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 34:
				{
				_localctx = new ExtractContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2125;
				this.match(ImpalaSqlParserParser.KW_EXTRACT);
				this.state = 2126;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 2127;
				this.identifier();
				this.state = 2128;
				this.match(ImpalaSqlParserParser.KW_FROM);
				this.state = 2129;
				this.valueExpression(0);
				this.state = 2130;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 35:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2132;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 2133;
				this.expression();
				this.state = 2134;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;

			case 36:
				{
				_localctx = new GroupingOperationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2136;
				this.match(ImpalaSqlParserParser.KW_GROUPING);
				this.state = 2137;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 2146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParserParser.T__0) | (1 << ImpalaSqlParserParser.T__1) | (1 << ImpalaSqlParserParser.T__2) | (1 << ImpalaSqlParserParser.T__3) | (1 << ImpalaSqlParserParser.T__7) | (1 << ImpalaSqlParserParser.KW_ARRAY) | (1 << ImpalaSqlParserParser.KW_ASC) | (1 << ImpalaSqlParserParser.KW_AT) | (1 << ImpalaSqlParserParser.KW_BERNOULLI))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ImpalaSqlParserParser.KW_CALL - 34)) | (1 << (ImpalaSqlParserParser.KW_CASCADE - 34)) | (1 << (ImpalaSqlParserParser.KW_CATALOGS - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMN - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMNS - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMENT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMIT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMITTED - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT - 34)) | (1 << (ImpalaSqlParserParser.KW_DATA - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASE - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASES - 34)) | (1 << (ImpalaSqlParserParser.KW_DATE - 34)) | (1 << (ImpalaSqlParserParser.KW_DAY - 34)) | (1 << (ImpalaSqlParserParser.KW_DAYS - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ImpalaSqlParserParser.KW_DEFINER - 66)) | (1 << (ImpalaSqlParserParser.KW_DEFAULT - 66)) | (1 << (ImpalaSqlParserParser.KW_DESC - 66)) | (1 << (ImpalaSqlParserParser.KW_EXCLUDING - 66)) | (1 << (ImpalaSqlParserParser.KW_EXPLAIN - 66)) | (1 << (ImpalaSqlParserParser.KW_FETCH - 66)) | (1 << (ImpalaSqlParserParser.KW_FILTER - 66)) | (1 << (ImpalaSqlParserParser.KW_FIRST - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ImpalaSqlParserParser.KW_FOLLOWING - 98)) | (1 << (ImpalaSqlParserParser.KW_FORMAT - 98)) | (1 << (ImpalaSqlParserParser.KW_FUNCTIONS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANT - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTED - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRAPHVIZ - 98)) | (1 << (ImpalaSqlParserParser.KW_HOUR - 98)) | (1 << (ImpalaSqlParserParser.KW_IF - 98)) | (1 << (ImpalaSqlParserParser.KW_INCLUDING - 98)) | (1 << (ImpalaSqlParserParser.KW_INPUT - 98)) | (1 << (ImpalaSqlParserParser.KW_INTERVAL - 98)) | (1 << (ImpalaSqlParserParser.KW_INVOKER - 98)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (ImpalaSqlParserParser.KW_IO - 132)) | (1 << (ImpalaSqlParserParser.KW_ISOLATION - 132)) | (1 << (ImpalaSqlParserParser.KW_JSON - 132)) | (1 << (ImpalaSqlParserParser.KW_LAST - 132)) | (1 << (ImpalaSqlParserParser.KW_LATERAL - 132)) | (1 << (ImpalaSqlParserParser.KW_LEVEL - 132)) | (1 << (ImpalaSqlParserParser.KW_LIMIT - 132)) | (1 << (ImpalaSqlParserParser.KW_LOGICAL - 132)) | (1 << (ImpalaSqlParserParser.KW_MAP - 132)) | (1 << (ImpalaSqlParserParser.KW_MINUTE - 132)) | (1 << (ImpalaSqlParserParser.KW_MONTH - 132)) | (1 << (ImpalaSqlParserParser.KW_NEXT - 132)) | (1 << (ImpalaSqlParserParser.KW_NFC - 132)) | (1 << (ImpalaSqlParserParser.KW_NFD - 132)) | (1 << (ImpalaSqlParserParser.KW_NFKC - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (ImpalaSqlParserParser.KW_NFKD - 164)) | (1 << (ImpalaSqlParserParser.KW_NO - 164)) | (1 << (ImpalaSqlParserParser.KW_NONE - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLIF - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLS - 164)) | (1 << (ImpalaSqlParserParser.KW_OFFSET - 164)) | (1 << (ImpalaSqlParserParser.KW_ONLY - 164)) | (1 << (ImpalaSqlParserParser.KW_OPTION - 164)) | (1 << (ImpalaSqlParserParser.KW_ORDINALITY - 164)) | (1 << (ImpalaSqlParserParser.KW_OUTPUT - 164)) | (1 << (ImpalaSqlParserParser.KW_OVER - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITIONS - 164)) | (1 << (ImpalaSqlParserParser.KW_PATH - 164)) | (1 << (ImpalaSqlParserParser.KW_PARQUET - 164)) | (1 << (ImpalaSqlParserParser.KW_POSITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PRECEDING - 164)) | (1 << (ImpalaSqlParserParser.KW_PRIVILEGES - 164)) | (1 << (ImpalaSqlParserParser.KW_PROPERTIES - 164)) | (1 << (ImpalaSqlParserParser.KW_RANGE - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (ImpalaSqlParserParser.KW_READ - 196)) | (1 << (ImpalaSqlParserParser.KW_RENAME - 196)) | (1 << (ImpalaSqlParserParser.KW_REPEATABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_REPLACE - 196)) | (1 << (ImpalaSqlParserParser.KW_RESET - 196)) | (1 << (ImpalaSqlParserParser.KW_RESTRICT - 196)) | (1 << (ImpalaSqlParserParser.KW_REVOKE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLES - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLLBACK - 196)) | (1 << (ImpalaSqlParserParser.KW_ROW - 196)) | (1 << (ImpalaSqlParserParser.KW_ROWS - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMA - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMAS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECOND - 196)) | (1 << (ImpalaSqlParserParser.KW_SECONDS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECURITY - 196)) | (1 << (ImpalaSqlParserParser.KW_SERIALIZABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_SESSION - 196)))) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (ImpalaSqlParserParser.KW_SET - 228)) | (1 << (ImpalaSqlParserParser.KW_SETS - 228)) | (1 << (ImpalaSqlParserParser.KW_SHOW - 228)) | (1 << (ImpalaSqlParserParser.KW_SOME - 228)) | (1 << (ImpalaSqlParserParser.KW_START - 228)) | (1 << (ImpalaSqlParserParser.KW_STATS - 228)) | (1 << (ImpalaSqlParserParser.KW_SUBSTRING - 228)) | (1 << (ImpalaSqlParserParser.KW_SYSTEM - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLES - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLESAMPLE - 228)) | (1 << (ImpalaSqlParserParser.KW_TEXT - 228)) | (1 << (ImpalaSqlParserParser.KW_TIES - 228)) | (1 << (ImpalaSqlParserParser.KW_TIME - 228)) | (1 << (ImpalaSqlParserParser.KW_TIMESTAMP - 228)) | (1 << (ImpalaSqlParserParser.KW_TO - 228)) | (1 << (ImpalaSqlParserParser.KW_TRANSACTION - 228)) | (1 << (ImpalaSqlParserParser.KW_TRY_CAST - 228)) | (1 << (ImpalaSqlParserParser.KW_TYPE - 228)))) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (ImpalaSqlParserParser.KW_UNBOUNDED - 260)) | (1 << (ImpalaSqlParserParser.KW_UNCOMMITTED - 260)) | (1 << (ImpalaSqlParserParser.KW_USE - 260)) | (1 << (ImpalaSqlParserParser.KW_USER - 260)) | (1 << (ImpalaSqlParserParser.KW_VALIDATE - 260)) | (1 << (ImpalaSqlParserParser.KW_VERBOSE - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEW - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEWS - 260)) | (1 << (ImpalaSqlParserParser.KW_WORK - 260)) | (1 << (ImpalaSqlParserParser.KW_WRITE - 260)) | (1 << (ImpalaSqlParserParser.KW_YEAR - 260)) | (1 << (ImpalaSqlParserParser.KW_ZONE - 260)))) !== 0) || ((((_la - 321)) & ~0x1F) === 0 && ((1 << (_la - 321)) & ((1 << (ImpalaSqlParserParser.STRING - 321)) | (1 << (ImpalaSqlParserParser.IDENTIFIER - 321)) | (1 << (ImpalaSqlParserParser.DIGIT_IDENTIFIER - 321)) | (1 << (ImpalaSqlParserParser.BACKQUOTED_IDENTIFIER - 321)))) !== 0)) {
					{
					this.state = 2138;
					this.qualifiedName();
					this.state = 2143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParserParser.COMMA) {
						{
						{
						this.state = 2139;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 2140;
						this.qualifiedName();
						}
						}
						this.state = 2145;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2148;
				this.match(ImpalaSqlParserParser.RPAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2161;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 289, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2159;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 288, this._ctx) ) {
					case 1:
						{
						_localctx = new SubscriptContext(new PrimaryExpressionContext(_parentctx, _parentState));
						(_localctx as SubscriptContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParserParser.RULE_primaryExpression);
						this.state = 2151;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 2152;
						this.match(ImpalaSqlParserParser.LSQUARE);
						this.state = 2153;
						(_localctx as SubscriptContext)._index = this.valueExpression(0);
						this.state = 2154;
						this.match(ImpalaSqlParserParser.RSQUARE);
						}
						break;

					case 2:
						{
						_localctx = new DereferenceContext(new PrimaryExpressionContext(_parentctx, _parentState));
						(_localctx as DereferenceContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParserParser.RULE_primaryExpression);
						this.state = 2156;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 2157;
						this.match(ImpalaSqlParserParser.DOT);
						this.state = 2158;
						(_localctx as DereferenceContext)._fieldName = this.identifier();
						}
						break;
					}
					}
				}
				this.state = 2163;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 289, this._ctx);
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
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, ImpalaSqlParserParser.RULE_string);
		try {
			this.state = 2170;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParserParser.STRING:
				_localctx = new BasicStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2164;
				this.match(ImpalaSqlParserParser.STRING);
				}
				break;
			case ImpalaSqlParserParser.UNICODE_STRING:
				_localctx = new UnicodeStringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2165;
				this.match(ImpalaSqlParserParser.UNICODE_STRING);
				this.state = 2168;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 290, this._ctx) ) {
				case 1:
					{
					this.state = 2166;
					this.match(ImpalaSqlParserParser.KW_UESCAPE);
					this.state = 2167;
					this.match(ImpalaSqlParserParser.STRING);
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
		this.enterRule(_localctx, 114, ImpalaSqlParserParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2172;
			_la = this._input.LA(1);
			if (!(((((_la - 297)) & ~0x1F) === 0 && ((1 << (_la - 297)) & ((1 << (ImpalaSqlParserParser.EQ - 297)) | (1 << (ImpalaSqlParserParser.NEQ - 297)) | (1 << (ImpalaSqlParserParser.LT - 297)) | (1 << (ImpalaSqlParserParser.LTE - 297)) | (1 << (ImpalaSqlParserParser.GT - 297)) | (1 << (ImpalaSqlParserParser.GTE - 297)))) !== 0))) {
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
		this.enterRule(_localctx, 116, ImpalaSqlParserParser.RULE_comparisonQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2174;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParserParser.T__2 || _la === ImpalaSqlParserParser.T__7 || _la === ImpalaSqlParserParser.KW_SOME)) {
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
		this.enterRule(_localctx, 118, ImpalaSqlParserParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2176;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParserParser.KW_FALSE || _la === ImpalaSqlParserParser.KW_TRUE)) {
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
		this.enterRule(_localctx, 120, ImpalaSqlParserParser.RULE_interval);
		try {
			this.state = 2192;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 292, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2178;
				this.match(ImpalaSqlParserParser.INTEGER_VALUE);
				this.state = 2179;
				this.intervalField();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2180;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 2181;
				this.match(ImpalaSqlParserParser.INTEGER_VALUE);
				this.state = 2182;
				this.match(ImpalaSqlParserParser.RPAREN);
				this.state = 2183;
				this.intervalField();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2184;
				this.match(ImpalaSqlParserParser.KW_INTERVAL);
				this.state = 2185;
				this.match(ImpalaSqlParserParser.INTEGER_VALUE);
				this.state = 2186;
				this.intervalField();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2187;
				this.match(ImpalaSqlParserParser.KW_INTERVAL);
				this.state = 2188;
				this.match(ImpalaSqlParserParser.LPAREN);
				this.state = 2189;
				this.match(ImpalaSqlParserParser.INTEGER_VALUE);
				this.state = 2190;
				this.match(ImpalaSqlParserParser.RPAREN);
				this.state = 2191;
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
		this.enterRule(_localctx, 122, ImpalaSqlParserParser.RULE_intervalField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2194;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParserParser.KW_DAY || _la === ImpalaSqlParserParser.KW_DAYS || _la === ImpalaSqlParserParser.KW_HOUR || _la === ImpalaSqlParserParser.KW_HOURS || ((((_la - 154)) & ~0x1F) === 0 && ((1 << (_la - 154)) & ((1 << (ImpalaSqlParserParser.KW_MINUTE - 154)) | (1 << (ImpalaSqlParserParser.KW_MINUTES - 154)) | (1 << (ImpalaSqlParserParser.KW_MONTH - 154)) | (1 << (ImpalaSqlParserParser.KW_MONTHS - 154)))) !== 0) || _la === ImpalaSqlParserParser.KW_SECOND || _la === ImpalaSqlParserParser.KW_SECONDS || _la === ImpalaSqlParserParser.KW_YEAR || _la === ImpalaSqlParserParser.KW_YEARS)) {
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
		this.enterRule(_localctx, 124, ImpalaSqlParserParser.RULE_normalForm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2196;
			_la = this._input.LA(1);
			if (!(((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (ImpalaSqlParserParser.KW_NFC - 161)) | (1 << (ImpalaSqlParserParser.KW_NFD - 161)) | (1 << (ImpalaSqlParserParser.KW_NFKC - 161)) | (1 << (ImpalaSqlParserParser.KW_NFKD - 161)))) !== 0))) {
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
		let _startState: number = 126;
		this.enterRecursionRule(_localctx, 126, ImpalaSqlParserParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2242;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 296, this._ctx) ) {
			case 1:
				{
				this.state = 2199;
				this.match(ImpalaSqlParserParser.KW_ARRAY);
				this.state = 2200;
				this.match(ImpalaSqlParserParser.LT);
				this.state = 2201;
				this.type(0);
				this.state = 2202;
				this.match(ImpalaSqlParserParser.GT);
				}
				break;

			case 2:
				{
				this.state = 2204;
				this.match(ImpalaSqlParserParser.KW_MAP);
				this.state = 2205;
				this.match(ImpalaSqlParserParser.LT);
				this.state = 2206;
				this.type(0);
				this.state = 2207;
				this.match(ImpalaSqlParserParser.COMMA);
				this.state = 2208;
				this.type(0);
				this.state = 2209;
				this.match(ImpalaSqlParserParser.GT);
				}
				break;

			case 3:
				{
				this.state = 2211;
				this.match(ImpalaSqlParserParser.KW_STRUCT);
				this.state = 2212;
				this.match(ImpalaSqlParserParser.LT);
				this.state = 2213;
				this.identifier();
				this.state = 2214;
				this.match(ImpalaSqlParserParser.COLON);
				this.state = 2215;
				this.type(0);
				this.state = 2223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParserParser.COMMA) {
					{
					{
					this.state = 2216;
					this.match(ImpalaSqlParserParser.COMMA);
					this.state = 2217;
					this.identifier();
					this.state = 2218;
					this.match(ImpalaSqlParserParser.COLON);
					this.state = 2219;
					this.type(0);
					}
					}
					this.state = 2225;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2226;
				this.match(ImpalaSqlParserParser.GT);
				}
				break;

			case 4:
				{
				this.state = 2228;
				this.baseType();
				this.state = 2240;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 295, this._ctx) ) {
				case 1:
					{
					this.state = 2229;
					this.match(ImpalaSqlParserParser.LPAREN);
					this.state = 2230;
					this.typeParameter();
					this.state = 2235;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ImpalaSqlParserParser.COMMA) {
						{
						{
						this.state = 2231;
						this.match(ImpalaSqlParserParser.COMMA);
						this.state = 2232;
						this.typeParameter();
						}
						}
						this.state = 2237;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2238;
					this.match(ImpalaSqlParserParser.RPAREN);
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2248;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 297, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, ImpalaSqlParserParser.RULE_type);
					this.state = 2244;
					if (!(this.precpred(this._ctx, 5))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
					}
					this.state = 2245;
					this.match(ImpalaSqlParserParser.KW_ARRAY);
					}
					}
				}
				this.state = 2250;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 297, this._ctx);
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
		this.enterRule(_localctx, 128, ImpalaSqlParserParser.RULE_typeParameter);
		try {
			this.state = 2253;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParserParser.INTEGER_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2251;
				this.match(ImpalaSqlParserParser.INTEGER_VALUE);
				}
				break;
			case ImpalaSqlParserParser.T__0:
			case ImpalaSqlParserParser.T__1:
			case ImpalaSqlParserParser.T__2:
			case ImpalaSqlParserParser.T__3:
			case ImpalaSqlParserParser.T__7:
			case ImpalaSqlParserParser.KW_ARRAY:
			case ImpalaSqlParserParser.KW_ASC:
			case ImpalaSqlParserParser.KW_AT:
			case ImpalaSqlParserParser.KW_BERNOULLI:
			case ImpalaSqlParserParser.KW_CALL:
			case ImpalaSqlParserParser.KW_CASCADE:
			case ImpalaSqlParserParser.KW_CATALOGS:
			case ImpalaSqlParserParser.KW_COLUMN:
			case ImpalaSqlParserParser.KW_COLUMNS:
			case ImpalaSqlParserParser.KW_COMMENT:
			case ImpalaSqlParserParser.KW_COMMIT:
			case ImpalaSqlParserParser.KW_COMMITTED:
			case ImpalaSqlParserParser.KW_CURRENT:
			case ImpalaSqlParserParser.KW_DATA:
			case ImpalaSqlParserParser.KW_DATABASE:
			case ImpalaSqlParserParser.KW_DATABASES:
			case ImpalaSqlParserParser.KW_DATE:
			case ImpalaSqlParserParser.KW_DAY:
			case ImpalaSqlParserParser.KW_DAYS:
			case ImpalaSqlParserParser.KW_DEFINER:
			case ImpalaSqlParserParser.KW_DEFAULT:
			case ImpalaSqlParserParser.KW_DESC:
			case ImpalaSqlParserParser.KW_EXCLUDING:
			case ImpalaSqlParserParser.KW_EXPLAIN:
			case ImpalaSqlParserParser.KW_FETCH:
			case ImpalaSqlParserParser.KW_FILTER:
			case ImpalaSqlParserParser.KW_FIRST:
			case ImpalaSqlParserParser.KW_FOLLOWING:
			case ImpalaSqlParserParser.KW_FORMAT:
			case ImpalaSqlParserParser.KW_FUNCTIONS:
			case ImpalaSqlParserParser.KW_GRANT:
			case ImpalaSqlParserParser.KW_GRANTED:
			case ImpalaSqlParserParser.KW_GRANTS:
			case ImpalaSqlParserParser.KW_GRAPHVIZ:
			case ImpalaSqlParserParser.KW_HOUR:
			case ImpalaSqlParserParser.KW_IF:
			case ImpalaSqlParserParser.KW_INCLUDING:
			case ImpalaSqlParserParser.KW_INPUT:
			case ImpalaSqlParserParser.KW_INTERVAL:
			case ImpalaSqlParserParser.KW_INVOKER:
			case ImpalaSqlParserParser.KW_IO:
			case ImpalaSqlParserParser.KW_ISOLATION:
			case ImpalaSqlParserParser.KW_JSON:
			case ImpalaSqlParserParser.KW_LAST:
			case ImpalaSqlParserParser.KW_LATERAL:
			case ImpalaSqlParserParser.KW_LEVEL:
			case ImpalaSqlParserParser.KW_LIMIT:
			case ImpalaSqlParserParser.KW_LOGICAL:
			case ImpalaSqlParserParser.KW_MAP:
			case ImpalaSqlParserParser.KW_MINUTE:
			case ImpalaSqlParserParser.KW_MONTH:
			case ImpalaSqlParserParser.KW_NEXT:
			case ImpalaSqlParserParser.KW_NFC:
			case ImpalaSqlParserParser.KW_NFD:
			case ImpalaSqlParserParser.KW_NFKC:
			case ImpalaSqlParserParser.KW_NFKD:
			case ImpalaSqlParserParser.KW_NO:
			case ImpalaSqlParserParser.KW_NONE:
			case ImpalaSqlParserParser.KW_NULLIF:
			case ImpalaSqlParserParser.KW_NULLS:
			case ImpalaSqlParserParser.KW_OFFSET:
			case ImpalaSqlParserParser.KW_ONLY:
			case ImpalaSqlParserParser.KW_OPTION:
			case ImpalaSqlParserParser.KW_ORDINALITY:
			case ImpalaSqlParserParser.KW_OUTPUT:
			case ImpalaSqlParserParser.KW_OVER:
			case ImpalaSqlParserParser.KW_PARTITION:
			case ImpalaSqlParserParser.KW_PARTITIONS:
			case ImpalaSqlParserParser.KW_PATH:
			case ImpalaSqlParserParser.KW_PARQUET:
			case ImpalaSqlParserParser.KW_POSITION:
			case ImpalaSqlParserParser.KW_PRECEDING:
			case ImpalaSqlParserParser.KW_PRIVILEGES:
			case ImpalaSqlParserParser.KW_PROPERTIES:
			case ImpalaSqlParserParser.KW_RANGE:
			case ImpalaSqlParserParser.KW_READ:
			case ImpalaSqlParserParser.KW_RENAME:
			case ImpalaSqlParserParser.KW_REPEATABLE:
			case ImpalaSqlParserParser.KW_REPLACE:
			case ImpalaSqlParserParser.KW_RESET:
			case ImpalaSqlParserParser.KW_RESTRICT:
			case ImpalaSqlParserParser.KW_REVOKE:
			case ImpalaSqlParserParser.KW_ROLE:
			case ImpalaSqlParserParser.KW_ROLES:
			case ImpalaSqlParserParser.KW_ROLLBACK:
			case ImpalaSqlParserParser.KW_ROW:
			case ImpalaSqlParserParser.KW_ROWS:
			case ImpalaSqlParserParser.KW_SCHEMA:
			case ImpalaSqlParserParser.KW_SCHEMAS:
			case ImpalaSqlParserParser.KW_SECOND:
			case ImpalaSqlParserParser.KW_SECONDS:
			case ImpalaSqlParserParser.KW_SECURITY:
			case ImpalaSqlParserParser.KW_SERIALIZABLE:
			case ImpalaSqlParserParser.KW_SESSION:
			case ImpalaSqlParserParser.KW_SET:
			case ImpalaSqlParserParser.KW_SETS:
			case ImpalaSqlParserParser.KW_SHOW:
			case ImpalaSqlParserParser.KW_SOME:
			case ImpalaSqlParserParser.KW_START:
			case ImpalaSqlParserParser.KW_STATS:
			case ImpalaSqlParserParser.KW_STRUCT:
			case ImpalaSqlParserParser.KW_SUBSTRING:
			case ImpalaSqlParserParser.KW_SYSTEM:
			case ImpalaSqlParserParser.KW_TABLES:
			case ImpalaSqlParserParser.KW_TABLESAMPLE:
			case ImpalaSqlParserParser.KW_TEXT:
			case ImpalaSqlParserParser.KW_TIES:
			case ImpalaSqlParserParser.KW_TIME:
			case ImpalaSqlParserParser.KW_TIMESTAMP:
			case ImpalaSqlParserParser.KW_TO:
			case ImpalaSqlParserParser.KW_TRANSACTION:
			case ImpalaSqlParserParser.KW_TRY_CAST:
			case ImpalaSqlParserParser.KW_TYPE:
			case ImpalaSqlParserParser.KW_UNBOUNDED:
			case ImpalaSqlParserParser.KW_UNCOMMITTED:
			case ImpalaSqlParserParser.KW_USE:
			case ImpalaSqlParserParser.KW_USER:
			case ImpalaSqlParserParser.KW_VALIDATE:
			case ImpalaSqlParserParser.KW_VERBOSE:
			case ImpalaSqlParserParser.KW_VIEW:
			case ImpalaSqlParserParser.KW_VIEWS:
			case ImpalaSqlParserParser.KW_WORK:
			case ImpalaSqlParserParser.KW_WRITE:
			case ImpalaSqlParserParser.KW_YEAR:
			case ImpalaSqlParserParser.KW_ZONE:
			case ImpalaSqlParserParser.STRING:
			case ImpalaSqlParserParser.IDENTIFIER:
			case ImpalaSqlParserParser.DIGIT_IDENTIFIER:
			case ImpalaSqlParserParser.BACKQUOTED_IDENTIFIER:
			case ImpalaSqlParserParser.TIME_WITH_TIME_ZONE:
			case ImpalaSqlParserParser.TIMESTAMP_WITH_TIME_ZONE:
			case ImpalaSqlParserParser.DOUBLE_PRECISION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2252;
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
		this.enterRule(_localctx, 130, ImpalaSqlParserParser.RULE_baseType);
		try {
			this.state = 2259;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParserParser.TIME_WITH_TIME_ZONE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2255;
				this.match(ImpalaSqlParserParser.TIME_WITH_TIME_ZONE);
				}
				break;
			case ImpalaSqlParserParser.TIMESTAMP_WITH_TIME_ZONE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2256;
				this.match(ImpalaSqlParserParser.TIMESTAMP_WITH_TIME_ZONE);
				}
				break;
			case ImpalaSqlParserParser.DOUBLE_PRECISION:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2257;
				this.match(ImpalaSqlParserParser.DOUBLE_PRECISION);
				}
				break;
			case ImpalaSqlParserParser.T__0:
			case ImpalaSqlParserParser.T__1:
			case ImpalaSqlParserParser.T__2:
			case ImpalaSqlParserParser.T__3:
			case ImpalaSqlParserParser.T__7:
			case ImpalaSqlParserParser.KW_ARRAY:
			case ImpalaSqlParserParser.KW_ASC:
			case ImpalaSqlParserParser.KW_AT:
			case ImpalaSqlParserParser.KW_BERNOULLI:
			case ImpalaSqlParserParser.KW_CALL:
			case ImpalaSqlParserParser.KW_CASCADE:
			case ImpalaSqlParserParser.KW_CATALOGS:
			case ImpalaSqlParserParser.KW_COLUMN:
			case ImpalaSqlParserParser.KW_COLUMNS:
			case ImpalaSqlParserParser.KW_COMMENT:
			case ImpalaSqlParserParser.KW_COMMIT:
			case ImpalaSqlParserParser.KW_COMMITTED:
			case ImpalaSqlParserParser.KW_CURRENT:
			case ImpalaSqlParserParser.KW_DATA:
			case ImpalaSqlParserParser.KW_DATABASE:
			case ImpalaSqlParserParser.KW_DATABASES:
			case ImpalaSqlParserParser.KW_DATE:
			case ImpalaSqlParserParser.KW_DAY:
			case ImpalaSqlParserParser.KW_DAYS:
			case ImpalaSqlParserParser.KW_DEFINER:
			case ImpalaSqlParserParser.KW_DEFAULT:
			case ImpalaSqlParserParser.KW_DESC:
			case ImpalaSqlParserParser.KW_EXCLUDING:
			case ImpalaSqlParserParser.KW_EXPLAIN:
			case ImpalaSqlParserParser.KW_FETCH:
			case ImpalaSqlParserParser.KW_FILTER:
			case ImpalaSqlParserParser.KW_FIRST:
			case ImpalaSqlParserParser.KW_FOLLOWING:
			case ImpalaSqlParserParser.KW_FORMAT:
			case ImpalaSqlParserParser.KW_FUNCTIONS:
			case ImpalaSqlParserParser.KW_GRANT:
			case ImpalaSqlParserParser.KW_GRANTED:
			case ImpalaSqlParserParser.KW_GRANTS:
			case ImpalaSqlParserParser.KW_GRAPHVIZ:
			case ImpalaSqlParserParser.KW_HOUR:
			case ImpalaSqlParserParser.KW_IF:
			case ImpalaSqlParserParser.KW_INCLUDING:
			case ImpalaSqlParserParser.KW_INPUT:
			case ImpalaSqlParserParser.KW_INTERVAL:
			case ImpalaSqlParserParser.KW_INVOKER:
			case ImpalaSqlParserParser.KW_IO:
			case ImpalaSqlParserParser.KW_ISOLATION:
			case ImpalaSqlParserParser.KW_JSON:
			case ImpalaSqlParserParser.KW_LAST:
			case ImpalaSqlParserParser.KW_LATERAL:
			case ImpalaSqlParserParser.KW_LEVEL:
			case ImpalaSqlParserParser.KW_LIMIT:
			case ImpalaSqlParserParser.KW_LOGICAL:
			case ImpalaSqlParserParser.KW_MAP:
			case ImpalaSqlParserParser.KW_MINUTE:
			case ImpalaSqlParserParser.KW_MONTH:
			case ImpalaSqlParserParser.KW_NEXT:
			case ImpalaSqlParserParser.KW_NFC:
			case ImpalaSqlParserParser.KW_NFD:
			case ImpalaSqlParserParser.KW_NFKC:
			case ImpalaSqlParserParser.KW_NFKD:
			case ImpalaSqlParserParser.KW_NO:
			case ImpalaSqlParserParser.KW_NONE:
			case ImpalaSqlParserParser.KW_NULLIF:
			case ImpalaSqlParserParser.KW_NULLS:
			case ImpalaSqlParserParser.KW_OFFSET:
			case ImpalaSqlParserParser.KW_ONLY:
			case ImpalaSqlParserParser.KW_OPTION:
			case ImpalaSqlParserParser.KW_ORDINALITY:
			case ImpalaSqlParserParser.KW_OUTPUT:
			case ImpalaSqlParserParser.KW_OVER:
			case ImpalaSqlParserParser.KW_PARTITION:
			case ImpalaSqlParserParser.KW_PARTITIONS:
			case ImpalaSqlParserParser.KW_PATH:
			case ImpalaSqlParserParser.KW_PARQUET:
			case ImpalaSqlParserParser.KW_POSITION:
			case ImpalaSqlParserParser.KW_PRECEDING:
			case ImpalaSqlParserParser.KW_PRIVILEGES:
			case ImpalaSqlParserParser.KW_PROPERTIES:
			case ImpalaSqlParserParser.KW_RANGE:
			case ImpalaSqlParserParser.KW_READ:
			case ImpalaSqlParserParser.KW_RENAME:
			case ImpalaSqlParserParser.KW_REPEATABLE:
			case ImpalaSqlParserParser.KW_REPLACE:
			case ImpalaSqlParserParser.KW_RESET:
			case ImpalaSqlParserParser.KW_RESTRICT:
			case ImpalaSqlParserParser.KW_REVOKE:
			case ImpalaSqlParserParser.KW_ROLE:
			case ImpalaSqlParserParser.KW_ROLES:
			case ImpalaSqlParserParser.KW_ROLLBACK:
			case ImpalaSqlParserParser.KW_ROW:
			case ImpalaSqlParserParser.KW_ROWS:
			case ImpalaSqlParserParser.KW_SCHEMA:
			case ImpalaSqlParserParser.KW_SCHEMAS:
			case ImpalaSqlParserParser.KW_SECOND:
			case ImpalaSqlParserParser.KW_SECONDS:
			case ImpalaSqlParserParser.KW_SECURITY:
			case ImpalaSqlParserParser.KW_SERIALIZABLE:
			case ImpalaSqlParserParser.KW_SESSION:
			case ImpalaSqlParserParser.KW_SET:
			case ImpalaSqlParserParser.KW_SETS:
			case ImpalaSqlParserParser.KW_SHOW:
			case ImpalaSqlParserParser.KW_SOME:
			case ImpalaSqlParserParser.KW_START:
			case ImpalaSqlParserParser.KW_STATS:
			case ImpalaSqlParserParser.KW_SUBSTRING:
			case ImpalaSqlParserParser.KW_SYSTEM:
			case ImpalaSqlParserParser.KW_TABLES:
			case ImpalaSqlParserParser.KW_TABLESAMPLE:
			case ImpalaSqlParserParser.KW_TEXT:
			case ImpalaSqlParserParser.KW_TIES:
			case ImpalaSqlParserParser.KW_TIME:
			case ImpalaSqlParserParser.KW_TIMESTAMP:
			case ImpalaSqlParserParser.KW_TO:
			case ImpalaSqlParserParser.KW_TRANSACTION:
			case ImpalaSqlParserParser.KW_TRY_CAST:
			case ImpalaSqlParserParser.KW_TYPE:
			case ImpalaSqlParserParser.KW_UNBOUNDED:
			case ImpalaSqlParserParser.KW_UNCOMMITTED:
			case ImpalaSqlParserParser.KW_USE:
			case ImpalaSqlParserParser.KW_USER:
			case ImpalaSqlParserParser.KW_VALIDATE:
			case ImpalaSqlParserParser.KW_VERBOSE:
			case ImpalaSqlParserParser.KW_VIEW:
			case ImpalaSqlParserParser.KW_VIEWS:
			case ImpalaSqlParserParser.KW_WORK:
			case ImpalaSqlParserParser.KW_WRITE:
			case ImpalaSqlParserParser.KW_YEAR:
			case ImpalaSqlParserParser.KW_ZONE:
			case ImpalaSqlParserParser.STRING:
			case ImpalaSqlParserParser.IDENTIFIER:
			case ImpalaSqlParserParser.DIGIT_IDENTIFIER:
			case ImpalaSqlParserParser.BACKQUOTED_IDENTIFIER:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2258;
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
		this.enterRule(_localctx, 132, ImpalaSqlParserParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2261;
			this.match(ImpalaSqlParserParser.KW_WHEN);
			this.state = 2262;
			_localctx._condition = this.expression();
			this.state = 2263;
			this.match(ImpalaSqlParserParser.KW_THEN);
			this.state = 2264;
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
		this.enterRule(_localctx, 134, ImpalaSqlParserParser.RULE_filter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2266;
			this.match(ImpalaSqlParserParser.KW_FILTER);
			this.state = 2267;
			this.match(ImpalaSqlParserParser.LPAREN);
			this.state = 2268;
			this.match(ImpalaSqlParserParser.KW_WHERE);
			this.state = 2269;
			this.booleanExpression(0);
			this.state = 2270;
			this.match(ImpalaSqlParserParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 136, ImpalaSqlParserParser.RULE_over);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2272;
			this.match(ImpalaSqlParserParser.KW_OVER);
			this.state = 2273;
			this.match(ImpalaSqlParserParser.LPAREN);
			this.state = 2284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_PARTITION) {
				{
				this.state = 2274;
				this.match(ImpalaSqlParserParser.KW_PARTITION);
				this.state = 2275;
				this.match(ImpalaSqlParserParser.KW_BY);
				this.state = 2276;
				_localctx._expression = this.expression();
				_localctx._partition.push(_localctx._expression);
				this.state = 2281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParserParser.COMMA) {
					{
					{
					this.state = 2277;
					this.match(ImpalaSqlParserParser.COMMA);
					this.state = 2278;
					_localctx._expression = this.expression();
					_localctx._partition.push(_localctx._expression);
					}
					}
					this.state = 2283;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 2296;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_ORDER) {
				{
				this.state = 2286;
				this.match(ImpalaSqlParserParser.KW_ORDER);
				this.state = 2287;
				this.match(ImpalaSqlParserParser.KW_BY);
				this.state = 2288;
				this.sortItem();
				this.state = 2293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ImpalaSqlParserParser.COMMA) {
					{
					{
					this.state = 2289;
					this.match(ImpalaSqlParserParser.COMMA);
					this.state = 2290;
					this.sortItem();
					}
					}
					this.state = 2295;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 2299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ImpalaSqlParserParser.KW_RANGE || _la === ImpalaSqlParserParser.KW_ROWS) {
				{
				this.state = 2298;
				this.windowFrame();
				}
			}

			this.state = 2301;
			this.match(ImpalaSqlParserParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 138, ImpalaSqlParserParser.RULE_windowFrame);
		try {
			this.state = 2319;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 305, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2303;
				_localctx._frameType = this.match(ImpalaSqlParserParser.KW_RANGE);
				this.state = 2304;
				_localctx._start = this.frameBound();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2305;
				_localctx._frameType = this.match(ImpalaSqlParserParser.KW_ROWS);
				this.state = 2306;
				_localctx._start = this.frameBound();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2307;
				_localctx._frameType = this.match(ImpalaSqlParserParser.KW_RANGE);
				this.state = 2308;
				this.match(ImpalaSqlParserParser.KW_BETWEEN);
				this.state = 2309;
				_localctx._start = this.frameBound();
				this.state = 2310;
				this.match(ImpalaSqlParserParser.T__6);
				this.state = 2311;
				_localctx._end = this.frameBound();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2313;
				_localctx._frameType = this.match(ImpalaSqlParserParser.KW_ROWS);
				this.state = 2314;
				this.match(ImpalaSqlParserParser.KW_BETWEEN);
				this.state = 2315;
				_localctx._start = this.frameBound();
				this.state = 2316;
				this.match(ImpalaSqlParserParser.T__6);
				this.state = 2317;
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
		this.enterRule(_localctx, 140, ImpalaSqlParserParser.RULE_frameBound);
		let _la: number;
		try {
			this.state = 2330;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 306, this._ctx) ) {
			case 1:
				_localctx = new UnboundedFrameContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2321;
				this.match(ImpalaSqlParserParser.KW_UNBOUNDED);
				this.state = 2322;
				(_localctx as UnboundedFrameContext)._boundType = this.match(ImpalaSqlParserParser.KW_PRECEDING);
				}
				break;

			case 2:
				_localctx = new UnboundedFrameContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2323;
				this.match(ImpalaSqlParserParser.KW_UNBOUNDED);
				this.state = 2324;
				(_localctx as UnboundedFrameContext)._boundType = this.match(ImpalaSqlParserParser.KW_FOLLOWING);
				}
				break;

			case 3:
				_localctx = new CurrentRowBoundContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2325;
				this.match(ImpalaSqlParserParser.KW_CURRENT);
				this.state = 2326;
				this.match(ImpalaSqlParserParser.KW_ROW);
				}
				break;

			case 4:
				_localctx = new BoundedFrameContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2327;
				this.expression();
				this.state = 2328;
				(_localctx as BoundedFrameContext)._boundType = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === ImpalaSqlParserParser.KW_FOLLOWING || _la === ImpalaSqlParserParser.KW_PRECEDING)) {
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
		this.enterRule(_localctx, 142, ImpalaSqlParserParser.RULE_pathElement);
		try {
			this.state = 2337;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 307, this._ctx) ) {
			case 1:
				_localctx = new QualifiedArgumentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2332;
				this.identifier();
				this.state = 2333;
				this.match(ImpalaSqlParserParser.DOT);
				this.state = 2334;
				this.identifier();
				}
				break;

			case 2:
				_localctx = new UnqualifiedArgumentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2336;
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
		this.enterRule(_localctx, 144, ImpalaSqlParserParser.RULE_pathSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2339;
			this.pathElement();
			this.state = 2344;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ImpalaSqlParserParser.COMMA) {
				{
				{
				this.state = 2340;
				this.match(ImpalaSqlParserParser.COMMA);
				this.state = 2341;
				this.pathElement();
				}
				}
				this.state = 2346;
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
		this.enterRule(_localctx, 146, ImpalaSqlParserParser.RULE_privilege);
		let _la: number;
		try {
			this.state = 2360;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParserParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2347;
				this.match(ImpalaSqlParserParser.T__2);
				}
				break;
			case ImpalaSqlParserParser.T__5:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2348;
				this.match(ImpalaSqlParserParser.T__5);
				}
				break;
			case ImpalaSqlParserParser.KW_DROP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2349;
				this.match(ImpalaSqlParserParser.KW_DROP);
				}
				break;
			case ImpalaSqlParserParser.KW_CREATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2350;
				this.match(ImpalaSqlParserParser.KW_CREATE);
				}
				break;
			case ImpalaSqlParserParser.KW_INSERT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2351;
				this.match(ImpalaSqlParserParser.KW_INSERT);
				}
				break;
			case ImpalaSqlParserParser.KW_REFRESH:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2352;
				this.match(ImpalaSqlParserParser.KW_REFRESH);
				}
				break;
			case ImpalaSqlParserParser.KW_SELECT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2353;
				this.match(ImpalaSqlParserParser.KW_SELECT);
				this.state = 2358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.LPAREN) {
					{
					this.state = 2354;
					this.match(ImpalaSqlParserParser.LPAREN);
					this.state = 2355;
					_localctx._columnName = this.identifier();
					this.state = 2356;
					this.match(ImpalaSqlParserParser.RPAREN);
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
		this.enterRule(_localctx, 148, ImpalaSqlParserParser.RULE_objectType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2362;
			_la = this._input.LA(1);
			if (!(_la === ImpalaSqlParserParser.KW_DATABASE || _la === ImpalaSqlParserParser.KW_SERVER || _la === ImpalaSqlParserParser.KW_TABLE || _la === ImpalaSqlParserParser.KW_URI)) {
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
		this.enterRule(_localctx, 150, ImpalaSqlParserParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2364;
			this.identifier();
			this.state = 2369;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 311, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2365;
					this.match(ImpalaSqlParserParser.DOT);
					this.state = 2366;
					this.identifier();
					}
					}
				}
				this.state = 2371;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 311, this._ctx);
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
		this.enterRule(_localctx, 152, ImpalaSqlParserParser.RULE_principal);
		try {
			this.state = 2378;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParserParser.KW_ROLE:
				_localctx = new RolePrincipalContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2372;
				this.match(ImpalaSqlParserParser.KW_ROLE);
				this.state = 2373;
				this.identifier();
				}
				break;
			case ImpalaSqlParserParser.KW_USER:
				_localctx = new UserPrincipalContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2374;
				this.match(ImpalaSqlParserParser.KW_USER);
				this.state = 2375;
				this.identifier();
				}
				break;
			case ImpalaSqlParserParser.KW_GROUP:
				_localctx = new GroupPrincipalContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2376;
				this.match(ImpalaSqlParserParser.KW_GROUP);
				this.state = 2377;
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
		this.enterRule(_localctx, 154, ImpalaSqlParserParser.RULE_identifier);
		try {
			this.state = 2385;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ImpalaSqlParserParser.IDENTIFIER:
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2380;
				this.match(ImpalaSqlParserParser.IDENTIFIER);
				}
				break;
			case ImpalaSqlParserParser.STRING:
				_localctx = new QuotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2381;
				this.match(ImpalaSqlParserParser.STRING);
				}
				break;
			case ImpalaSqlParserParser.T__0:
			case ImpalaSqlParserParser.T__1:
			case ImpalaSqlParserParser.T__2:
			case ImpalaSqlParserParser.T__3:
			case ImpalaSqlParserParser.T__7:
			case ImpalaSqlParserParser.KW_ARRAY:
			case ImpalaSqlParserParser.KW_ASC:
			case ImpalaSqlParserParser.KW_AT:
			case ImpalaSqlParserParser.KW_BERNOULLI:
			case ImpalaSqlParserParser.KW_CALL:
			case ImpalaSqlParserParser.KW_CASCADE:
			case ImpalaSqlParserParser.KW_CATALOGS:
			case ImpalaSqlParserParser.KW_COLUMN:
			case ImpalaSqlParserParser.KW_COLUMNS:
			case ImpalaSqlParserParser.KW_COMMENT:
			case ImpalaSqlParserParser.KW_COMMIT:
			case ImpalaSqlParserParser.KW_COMMITTED:
			case ImpalaSqlParserParser.KW_CURRENT:
			case ImpalaSqlParserParser.KW_DATA:
			case ImpalaSqlParserParser.KW_DATABASE:
			case ImpalaSqlParserParser.KW_DATABASES:
			case ImpalaSqlParserParser.KW_DATE:
			case ImpalaSqlParserParser.KW_DAY:
			case ImpalaSqlParserParser.KW_DAYS:
			case ImpalaSqlParserParser.KW_DEFINER:
			case ImpalaSqlParserParser.KW_DEFAULT:
			case ImpalaSqlParserParser.KW_DESC:
			case ImpalaSqlParserParser.KW_EXCLUDING:
			case ImpalaSqlParserParser.KW_EXPLAIN:
			case ImpalaSqlParserParser.KW_FETCH:
			case ImpalaSqlParserParser.KW_FILTER:
			case ImpalaSqlParserParser.KW_FIRST:
			case ImpalaSqlParserParser.KW_FOLLOWING:
			case ImpalaSqlParserParser.KW_FORMAT:
			case ImpalaSqlParserParser.KW_FUNCTIONS:
			case ImpalaSqlParserParser.KW_GRANT:
			case ImpalaSqlParserParser.KW_GRANTED:
			case ImpalaSqlParserParser.KW_GRANTS:
			case ImpalaSqlParserParser.KW_GRAPHVIZ:
			case ImpalaSqlParserParser.KW_HOUR:
			case ImpalaSqlParserParser.KW_IF:
			case ImpalaSqlParserParser.KW_INCLUDING:
			case ImpalaSqlParserParser.KW_INPUT:
			case ImpalaSqlParserParser.KW_INTERVAL:
			case ImpalaSqlParserParser.KW_INVOKER:
			case ImpalaSqlParserParser.KW_IO:
			case ImpalaSqlParserParser.KW_ISOLATION:
			case ImpalaSqlParserParser.KW_JSON:
			case ImpalaSqlParserParser.KW_LAST:
			case ImpalaSqlParserParser.KW_LATERAL:
			case ImpalaSqlParserParser.KW_LEVEL:
			case ImpalaSqlParserParser.KW_LIMIT:
			case ImpalaSqlParserParser.KW_LOGICAL:
			case ImpalaSqlParserParser.KW_MAP:
			case ImpalaSqlParserParser.KW_MINUTE:
			case ImpalaSqlParserParser.KW_MONTH:
			case ImpalaSqlParserParser.KW_NEXT:
			case ImpalaSqlParserParser.KW_NFC:
			case ImpalaSqlParserParser.KW_NFD:
			case ImpalaSqlParserParser.KW_NFKC:
			case ImpalaSqlParserParser.KW_NFKD:
			case ImpalaSqlParserParser.KW_NO:
			case ImpalaSqlParserParser.KW_NONE:
			case ImpalaSqlParserParser.KW_NULLIF:
			case ImpalaSqlParserParser.KW_NULLS:
			case ImpalaSqlParserParser.KW_OFFSET:
			case ImpalaSqlParserParser.KW_ONLY:
			case ImpalaSqlParserParser.KW_OPTION:
			case ImpalaSqlParserParser.KW_ORDINALITY:
			case ImpalaSqlParserParser.KW_OUTPUT:
			case ImpalaSqlParserParser.KW_OVER:
			case ImpalaSqlParserParser.KW_PARTITION:
			case ImpalaSqlParserParser.KW_PARTITIONS:
			case ImpalaSqlParserParser.KW_PATH:
			case ImpalaSqlParserParser.KW_PARQUET:
			case ImpalaSqlParserParser.KW_POSITION:
			case ImpalaSqlParserParser.KW_PRECEDING:
			case ImpalaSqlParserParser.KW_PRIVILEGES:
			case ImpalaSqlParserParser.KW_PROPERTIES:
			case ImpalaSqlParserParser.KW_RANGE:
			case ImpalaSqlParserParser.KW_READ:
			case ImpalaSqlParserParser.KW_RENAME:
			case ImpalaSqlParserParser.KW_REPEATABLE:
			case ImpalaSqlParserParser.KW_REPLACE:
			case ImpalaSqlParserParser.KW_RESET:
			case ImpalaSqlParserParser.KW_RESTRICT:
			case ImpalaSqlParserParser.KW_REVOKE:
			case ImpalaSqlParserParser.KW_ROLE:
			case ImpalaSqlParserParser.KW_ROLES:
			case ImpalaSqlParserParser.KW_ROLLBACK:
			case ImpalaSqlParserParser.KW_ROW:
			case ImpalaSqlParserParser.KW_ROWS:
			case ImpalaSqlParserParser.KW_SCHEMA:
			case ImpalaSqlParserParser.KW_SCHEMAS:
			case ImpalaSqlParserParser.KW_SECOND:
			case ImpalaSqlParserParser.KW_SECONDS:
			case ImpalaSqlParserParser.KW_SECURITY:
			case ImpalaSqlParserParser.KW_SERIALIZABLE:
			case ImpalaSqlParserParser.KW_SESSION:
			case ImpalaSqlParserParser.KW_SET:
			case ImpalaSqlParserParser.KW_SETS:
			case ImpalaSqlParserParser.KW_SHOW:
			case ImpalaSqlParserParser.KW_SOME:
			case ImpalaSqlParserParser.KW_START:
			case ImpalaSqlParserParser.KW_STATS:
			case ImpalaSqlParserParser.KW_SUBSTRING:
			case ImpalaSqlParserParser.KW_SYSTEM:
			case ImpalaSqlParserParser.KW_TABLES:
			case ImpalaSqlParserParser.KW_TABLESAMPLE:
			case ImpalaSqlParserParser.KW_TEXT:
			case ImpalaSqlParserParser.KW_TIES:
			case ImpalaSqlParserParser.KW_TIME:
			case ImpalaSqlParserParser.KW_TIMESTAMP:
			case ImpalaSqlParserParser.KW_TO:
			case ImpalaSqlParserParser.KW_TRANSACTION:
			case ImpalaSqlParserParser.KW_TRY_CAST:
			case ImpalaSqlParserParser.KW_TYPE:
			case ImpalaSqlParserParser.KW_UNBOUNDED:
			case ImpalaSqlParserParser.KW_UNCOMMITTED:
			case ImpalaSqlParserParser.KW_USE:
			case ImpalaSqlParserParser.KW_USER:
			case ImpalaSqlParserParser.KW_VALIDATE:
			case ImpalaSqlParserParser.KW_VERBOSE:
			case ImpalaSqlParserParser.KW_VIEW:
			case ImpalaSqlParserParser.KW_VIEWS:
			case ImpalaSqlParserParser.KW_WORK:
			case ImpalaSqlParserParser.KW_WRITE:
			case ImpalaSqlParserParser.KW_YEAR:
			case ImpalaSqlParserParser.KW_ZONE:
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2382;
				this.nonReserved();
				}
				break;
			case ImpalaSqlParserParser.BACKQUOTED_IDENTIFIER:
				_localctx = new BackQuotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2383;
				this.match(ImpalaSqlParserParser.BACKQUOTED_IDENTIFIER);
				}
				break;
			case ImpalaSqlParserParser.DIGIT_IDENTIFIER:
				_localctx = new DigitIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2384;
				this.match(ImpalaSqlParserParser.DIGIT_IDENTIFIER);
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
		this.enterRule(_localctx, 156, ImpalaSqlParserParser.RULE_number);
		let _la: number;
		try {
			this.state = 2399;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 317, this._ctx) ) {
			case 1:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.MINUS) {
					{
					this.state = 2387;
					this.match(ImpalaSqlParserParser.MINUS);
					}
				}

				this.state = 2390;
				this.match(ImpalaSqlParserParser.DECIMAL_VALUE);
				}
				break;

			case 2:
				_localctx = new DoubleLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2392;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.MINUS) {
					{
					this.state = 2391;
					this.match(ImpalaSqlParserParser.MINUS);
					}
				}

				this.state = 2394;
				this.match(ImpalaSqlParserParser.DOUBLE_VALUE);
				}
				break;

			case 3:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ImpalaSqlParserParser.MINUS) {
					{
					this.state = 2395;
					this.match(ImpalaSqlParserParser.MINUS);
					}
				}

				this.state = 2398;
				this.match(ImpalaSqlParserParser.INTEGER_VALUE);
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
		this.enterRule(_localctx, 158, ImpalaSqlParserParser.RULE_nonReserved);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2401;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ImpalaSqlParserParser.T__0) | (1 << ImpalaSqlParserParser.T__1) | (1 << ImpalaSqlParserParser.T__2) | (1 << ImpalaSqlParserParser.T__3) | (1 << ImpalaSqlParserParser.T__7) | (1 << ImpalaSqlParserParser.KW_ARRAY) | (1 << ImpalaSqlParserParser.KW_ASC) | (1 << ImpalaSqlParserParser.KW_AT) | (1 << ImpalaSqlParserParser.KW_BERNOULLI))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ImpalaSqlParserParser.KW_CALL - 34)) | (1 << (ImpalaSqlParserParser.KW_CASCADE - 34)) | (1 << (ImpalaSqlParserParser.KW_CATALOGS - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMN - 34)) | (1 << (ImpalaSqlParserParser.KW_COLUMNS - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMENT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMIT - 34)) | (1 << (ImpalaSqlParserParser.KW_COMMITTED - 34)) | (1 << (ImpalaSqlParserParser.KW_CURRENT - 34)) | (1 << (ImpalaSqlParserParser.KW_DATA - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASE - 34)) | (1 << (ImpalaSqlParserParser.KW_DATABASES - 34)) | (1 << (ImpalaSqlParserParser.KW_DATE - 34)) | (1 << (ImpalaSqlParserParser.KW_DAY - 34)) | (1 << (ImpalaSqlParserParser.KW_DAYS - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ImpalaSqlParserParser.KW_DEFINER - 66)) | (1 << (ImpalaSqlParserParser.KW_DEFAULT - 66)) | (1 << (ImpalaSqlParserParser.KW_DESC - 66)) | (1 << (ImpalaSqlParserParser.KW_EXCLUDING - 66)) | (1 << (ImpalaSqlParserParser.KW_EXPLAIN - 66)) | (1 << (ImpalaSqlParserParser.KW_FETCH - 66)) | (1 << (ImpalaSqlParserParser.KW_FILTER - 66)) | (1 << (ImpalaSqlParserParser.KW_FIRST - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ImpalaSqlParserParser.KW_FOLLOWING - 98)) | (1 << (ImpalaSqlParserParser.KW_FORMAT - 98)) | (1 << (ImpalaSqlParserParser.KW_FUNCTIONS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANT - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTED - 98)) | (1 << (ImpalaSqlParserParser.KW_GRANTS - 98)) | (1 << (ImpalaSqlParserParser.KW_GRAPHVIZ - 98)) | (1 << (ImpalaSqlParserParser.KW_HOUR - 98)) | (1 << (ImpalaSqlParserParser.KW_IF - 98)) | (1 << (ImpalaSqlParserParser.KW_INCLUDING - 98)) | (1 << (ImpalaSqlParserParser.KW_INPUT - 98)) | (1 << (ImpalaSqlParserParser.KW_INTERVAL - 98)) | (1 << (ImpalaSqlParserParser.KW_INVOKER - 98)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (ImpalaSqlParserParser.KW_IO - 132)) | (1 << (ImpalaSqlParserParser.KW_ISOLATION - 132)) | (1 << (ImpalaSqlParserParser.KW_JSON - 132)) | (1 << (ImpalaSqlParserParser.KW_LAST - 132)) | (1 << (ImpalaSqlParserParser.KW_LATERAL - 132)) | (1 << (ImpalaSqlParserParser.KW_LEVEL - 132)) | (1 << (ImpalaSqlParserParser.KW_LIMIT - 132)) | (1 << (ImpalaSqlParserParser.KW_LOGICAL - 132)) | (1 << (ImpalaSqlParserParser.KW_MAP - 132)) | (1 << (ImpalaSqlParserParser.KW_MINUTE - 132)) | (1 << (ImpalaSqlParserParser.KW_MONTH - 132)) | (1 << (ImpalaSqlParserParser.KW_NEXT - 132)) | (1 << (ImpalaSqlParserParser.KW_NFC - 132)) | (1 << (ImpalaSqlParserParser.KW_NFD - 132)) | (1 << (ImpalaSqlParserParser.KW_NFKC - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (ImpalaSqlParserParser.KW_NFKD - 164)) | (1 << (ImpalaSqlParserParser.KW_NO - 164)) | (1 << (ImpalaSqlParserParser.KW_NONE - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLIF - 164)) | (1 << (ImpalaSqlParserParser.KW_NULLS - 164)) | (1 << (ImpalaSqlParserParser.KW_OFFSET - 164)) | (1 << (ImpalaSqlParserParser.KW_ONLY - 164)) | (1 << (ImpalaSqlParserParser.KW_OPTION - 164)) | (1 << (ImpalaSqlParserParser.KW_ORDINALITY - 164)) | (1 << (ImpalaSqlParserParser.KW_OUTPUT - 164)) | (1 << (ImpalaSqlParserParser.KW_OVER - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PARTITIONS - 164)) | (1 << (ImpalaSqlParserParser.KW_PATH - 164)) | (1 << (ImpalaSqlParserParser.KW_PARQUET - 164)) | (1 << (ImpalaSqlParserParser.KW_POSITION - 164)) | (1 << (ImpalaSqlParserParser.KW_PRECEDING - 164)) | (1 << (ImpalaSqlParserParser.KW_PRIVILEGES - 164)) | (1 << (ImpalaSqlParserParser.KW_PROPERTIES - 164)) | (1 << (ImpalaSqlParserParser.KW_RANGE - 164)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (ImpalaSqlParserParser.KW_READ - 196)) | (1 << (ImpalaSqlParserParser.KW_RENAME - 196)) | (1 << (ImpalaSqlParserParser.KW_REPEATABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_REPLACE - 196)) | (1 << (ImpalaSqlParserParser.KW_RESET - 196)) | (1 << (ImpalaSqlParserParser.KW_RESTRICT - 196)) | (1 << (ImpalaSqlParserParser.KW_REVOKE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLE - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLES - 196)) | (1 << (ImpalaSqlParserParser.KW_ROLLBACK - 196)) | (1 << (ImpalaSqlParserParser.KW_ROW - 196)) | (1 << (ImpalaSqlParserParser.KW_ROWS - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMA - 196)) | (1 << (ImpalaSqlParserParser.KW_SCHEMAS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECOND - 196)) | (1 << (ImpalaSqlParserParser.KW_SECONDS - 196)) | (1 << (ImpalaSqlParserParser.KW_SECURITY - 196)) | (1 << (ImpalaSqlParserParser.KW_SERIALIZABLE - 196)) | (1 << (ImpalaSqlParserParser.KW_SESSION - 196)))) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (ImpalaSqlParserParser.KW_SET - 228)) | (1 << (ImpalaSqlParserParser.KW_SETS - 228)) | (1 << (ImpalaSqlParserParser.KW_SHOW - 228)) | (1 << (ImpalaSqlParserParser.KW_SOME - 228)) | (1 << (ImpalaSqlParserParser.KW_START - 228)) | (1 << (ImpalaSqlParserParser.KW_STATS - 228)) | (1 << (ImpalaSqlParserParser.KW_SUBSTRING - 228)) | (1 << (ImpalaSqlParserParser.KW_SYSTEM - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLES - 228)) | (1 << (ImpalaSqlParserParser.KW_TABLESAMPLE - 228)) | (1 << (ImpalaSqlParserParser.KW_TEXT - 228)) | (1 << (ImpalaSqlParserParser.KW_TIES - 228)) | (1 << (ImpalaSqlParserParser.KW_TIME - 228)) | (1 << (ImpalaSqlParserParser.KW_TIMESTAMP - 228)) | (1 << (ImpalaSqlParserParser.KW_TO - 228)) | (1 << (ImpalaSqlParserParser.KW_TRANSACTION - 228)) | (1 << (ImpalaSqlParserParser.KW_TRY_CAST - 228)) | (1 << (ImpalaSqlParserParser.KW_TYPE - 228)))) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (ImpalaSqlParserParser.KW_UNBOUNDED - 260)) | (1 << (ImpalaSqlParserParser.KW_UNCOMMITTED - 260)) | (1 << (ImpalaSqlParserParser.KW_USE - 260)) | (1 << (ImpalaSqlParserParser.KW_USER - 260)) | (1 << (ImpalaSqlParserParser.KW_VALIDATE - 260)) | (1 << (ImpalaSqlParserParser.KW_VERBOSE - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEW - 260)) | (1 << (ImpalaSqlParserParser.KW_VIEWS - 260)) | (1 << (ImpalaSqlParserParser.KW_WORK - 260)) | (1 << (ImpalaSqlParserParser.KW_WRITE - 260)) | (1 << (ImpalaSqlParserParser.KW_YEAR - 260)) | (1 << (ImpalaSqlParserParser.KW_ZONE - 260)))) !== 0))) {
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
		case 33:
			return this.queryTerm_sempred(_localctx as QueryTermContext, predIndex);

		case 43:
			return this.relation_sempred(_localctx as RelationContext, predIndex);

		case 52:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 54:
			return this.valueExpression_sempred(_localctx as ValueExpressionContext, predIndex);

		case 55:
			return this.primaryExpression_sempred(_localctx as PrimaryExpressionContext, predIndex);

		case 63:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u0152\u0966\x04" +
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
		"O\tO\x04P\tP\x04Q\tQ\x03\x02\x03\x02\x05\x02\xA5\n\x02\x07\x02\xA7\n\x02" +
		"\f\x02\x0E\x02\xAA\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xB6\n\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03\xBB\n\x03\x03\x03\x03\x03\x05\x03\xBF\n\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03\xCD\n\x03\x03\x03\x03\x03\x05\x03\xD1\n\x03\x03\x03\x03" +
		"\x03\x05\x03\xD5\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xDB\n\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\xE2\n\x03\f\x03\x0E\x03" +
		"\xE5\v\x03\x03\x03\x03\x03\x05\x03\xE9\n\x03\x03\x03\x03\x03\x05\x03\xED" +
		"\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xF3\n\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03\xF8\n\x03\x03\x03\x03\x03\x05\x03\xFC\n\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03\u0102\n\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03\u0108\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u010E\n\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0114\n\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x07\x03\u011B\n\x03\f\x03\x0E\x03\u011E\v\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0124\n\x03\x03\x03\x03\x03\x05\x03" +
		"\u0128\n\x03\x03\x03\x03\x03\x03\x03\x05\x03\u012D\n\x03\x05\x03\u012F" +
		"\n\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0134\n\x03\x03\x03\x03\x03\x05" +
		"\x03\u0138\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u013F" +
		"\n\x03\x03\x03\x03\x03\x05\x03\u0143\n\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03\u0154\n\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u015F\n\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x07\x03\u0166\n\x03\f\x03\x0E\x03\u0169\v" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x07\x03\u0176\n\x03\f\x03\x0E\x03\u0179\v\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0189\n\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u019A\n\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03\u01A1\n\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03\u01A8\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u01B6\n\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u01BC\n\x03\x03\x03\x05\x03\u01BF" +
		"\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"\u01C8\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03\u01D4\n\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"\u01D9\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u01E1" +
		"\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u01F2" +
		"\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0200\n\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0212\n\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u021B\n\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0225\n\x03" +
		"\x03\x03\x05\x03\u0228\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u022E" +
		"\n\x03\x03\x03\x03\x03\x05\x03\u0232\n\x03\x03\x03\x03\x03\x05\x03\u0236" +
		"\n\x03\x03\x03\x03\x03\x05\x03\u023A\n\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03\u0242\n\x03\x03\x03\x03\x03\x05\x03\u0246" +
		"\n\x03\x03\x03\x03\x03\x05\x03\u024A\n\x03\x03\x03\x03\x03\x05\x03\u024E" +
		"\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"\u0257\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03\u027D\n\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0282" +
		"\n\x03\x03\x03\x05\x03\u0285\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03\u028C\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0298\n\x03\x05\x03\u029A\n\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u02A2\n\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u02B3\n\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\u02BA\n\x03\f\x03\x0E\x03\u02BD" +
		"\v\x03\x05\x03\u02BF\n\x03\x03\x03\x05\x03\u02C2\n\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03\u02D1\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u02DC\n\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03\u02E2\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x07\x03\u02E9\n\x03\f\x03\x0E\x03\u02EC\v\x03\x05\x03\u02EE\n\x03" +
		"\x03\x03\x05\x03\u02F1\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u02F7" +
		"\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u02FE\n\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05" +
		"\x03\u0309\n\x03\x03\x03\x03\x03\x03\x03\x05\x03\u030E\n\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03\u0313\n\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0318" +
		"\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u031F\n\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03\u0324\n\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x07\x03\u032B\n\x03\f\x03\x0E\x03\u032E\v\x03\x05\x03\u0330\n" +
		"\x03\x03\x03\x05\x03\u0333\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0347\n\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03\u0357\n\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03\u035D\n\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0362\n\x03\x03\x03" +
		"\x05\x03\u0365\n\x03\x03\x03\x05\x03\u0368\n\x03\x03\x03\x03\x03\x05\x03" +
		"\u036C\n\x03\x03\x03\x03\x03\x05\x03\u0370\n\x03\x03\x03\x03\x03\x05\x03" +
		"\u0374\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\u037B\n\x03" +
		"\f\x03\x0E\x03\u037E\v\x03\x03\x03\x03\x03\x05\x03\u0382\n\x03\x03\x03" +
		"\x05\x03\u0385\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u038B\n\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03\u0390\n\x03\x03\x03\x03\x03\x03\x03\x05" +
		"\x03\u0395\n\x03\x03\x03\x05\x03\u0398\n\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x07\x03\u039E\n\x03\f\x03\x0E\x03\u03A1\v\x03\x03\x03\x03\x03\x05" +
		"\x03\u03A5\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x07\x03\u03AF\n\x03\f\x03\x0E\x03\u03B2\v\x03\x05\x03\u03B4\n" +
		"\x03\x03\x03\x03\x03\x05\x03\u03B8\n\x03\x03\x03\x03\x03\x05\x03\u03BC" +
		"\n\x03\x03\x03\x03\x03\x05\x03\u03C0\n\x03\x03\x03\x03\x03\x05\x03\u03C4" +
		"\n\x03\x03\x03\x05\x03\u03C7\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03\u03CE\n\x03\x03\x03\x03\x03\x03\x03\x07\x03\u03D3\n\x03\f" +
		"\x03\x0E\x03\u03D6\v\x03\x05\x03\u03D8\n\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03\u03DE\n\x03\x03\x03\x05\x03\u03E1\n\x03\x03\x03\x03\x03\x03" +
		"\x03\x07\x03\u03E6\n\x03\f\x03\x0E\x03\u03E9\v\x03\x05\x03\u03EB\n\x03" +
		"\x03\x03\x03\x03\x05\x03\u03EF\n\x03\x03\x03\x03\x03\x03\x03\x05\x03\u03F4" +
		"\n\x03\x03\x03\x05\x03\u03F7\n\x03\x03\x03\x03\x03\x03\x03\x07\x03\u03FC" +
		"\n\x03\f\x03\x0E\x03\u03FF\v\x03\x05\x03\u0401\n\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0415\n\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03\u0422\n\x03\x03\x03\x03\x03\x05\x03\u0426\n\x03" +
		"\x03\x03\x03\x03\x05\x03\u042A\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03\u043D\n\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0446\n\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0450\n\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03\u0456\n\x03\x03\x03\x03\x03\x03\x03\x05" +
		"\x03\u045B\n\x03\x03\x03\x05\x03\u045E\n\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0469\n\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\u0473" +
		"\n\x03\x03\x03\x03\x03\x05\x03\u0477\n\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x07\x03\u0480\n\x03\f\x03\x0E\x03\u0483\v" +
		"\x03\x03\x03\x03\x03\x05\x03\u0487\n\x03\x03\x03\x03\x03\x05\x03\u048B" +
		"\n\x03\x03\x04\x03\x04\x03\x04\x05\x04\u0490\n\x04\x03\x04\x03\x04\x05" +
		"\x04\u0494\n\x04\x03\x04\x03\x04\x03\x04\x05\x04\u0499\n\x04\x03\x04\x03" +
		"\x04\x03\x04\x05\x04\u049E\n\x04\x03\x04\x03\x04\x03\x04\x05\x04\u04A3" +
		"\n\x04\x03\x04\x03\x04\x05\x04\u04A7\n\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x05\x04\u04B0\n\x04\x03\x04\x05\x04\u04B3" +
		"\n\x04\x03\x04\x03\x04\x05\x04\u04B7\n\x04\x03\x05\x03\x05\x03\x05\x07" +
		"\x05\u04BC\n\x05\f\x05\x0E\x05\u04BF\v\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u04C9\n\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07\u04CF\n\x07\x07\x07\u04D1\n\x07\f\x07\x0E\x07" +
		"\u04D4\v\x07\x03\x07\x03\x07\x03\b\x05\b\u04D9\n\b\x03\b\x03\b\x03\t\x03" +
		"\t\x03\t\x03\t\x07\t\u04E1\n\t\f\t\x0E\t\u04E4\v\t\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\u04EA\n\n\x03\n\x03\n\x03\n\x05\n\u04EF\n\n\x03\n\x03\n\x03\n" +
		"\x05\n\u04F4\n\n\x03\n\x03\n\x03\n\x05\n\u04F9\n\n\x03\n\x03\n\x07\n\u04FD" +
		"\n\n\f\n\x0E\n\u0500\v\n\x05\n\u0502\n\n\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x05\v\u050B\n\v\x03\v\x05\v\u050E\n\v\x03\v\x05\v\u0511\n" +
		"\v\x03\f\x03\f\x03\f\x03\f\x05\f\u0517\n\f\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x07\x0E\u051F\n\x0E\f\x0E\x0E\x0E\u0522\v\x0E\x05\x0E" +
		"\u0524\n\x0E\x03\x0E\x03\x0E\x05\x0E\u0528\n\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"\u052C\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0532\n\x0F\x03\x0F" +
		"\x03\x0F\x07\x0F\u0536\n\x0F\f\x0F\x0E\x0F\u0539\v\x0F\x05\x0F\u053B\n" +
		"\x0F\x03\x10\x05\x10\u053E\n\x10\x03\x10\x03\x10\x05\x10\u0542\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u054C" +
		"\n\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x07\x14" +
		"\u0555\n\x14\f\x14\x0E\x14\u0558\v\x14\x03\x14\x03\x14\x05\x14\u055C\n" +
		"\x14\x03\x14\x05\x14\u055F\n\x14\x03\x15\x03\x15\x05\x15\u0563\n\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\u056A\n\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u0572\n\x16\f\x16\x0E\x16\u0575" +
		"\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0583\n\x17\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u058C\n\x18\x03\x18\x05\x18" +
		"\u058F\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0596\n\x19" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A" +
		"\u05A0\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u05A6\n\x1B\x03\x1C" +
		"\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u05AE\n\x1D\f\x1D\x0E" +
		"\x1D\u05B1\v\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E" +
		"\u05B9\n\x1E\f\x1E\x0E\x1E\u05BC\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F" +
		"\x03\x1F\x07\x1F\u05C3\n\x1F\f\x1F\x0E\x1F\u05C6\v\x1F\x03 \x03 \x03 " +
		"\x03 \x03 \x03 \x03 \x03 \x05 \u05D0\n \x05 \u05D2\n \x03 \x03 \x03 \x03" +
		" \x05 \u05D8\n \x03!\x03!\x03!\x05!\u05DD\n!\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x07\"\u05E5\n\"\f\"\x0E\"\u05E8\v\"\x05\"\u05EA\n\"\x03\"\x03" +
		"\"\x03\"\x03\"\x05\"\u05F0\n\"\x05\"\u05F2\n\"\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x05#\u05FA\n#\x03#\x03#\x03#\x03#\x05#\u0600\n#\x03#\x07#\u0603" +
		"\n#\f#\x0E#\u0606\v#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x07$\u060F\n$" +
		"\f$\x0E$\u0612\v$\x03$\x03$\x03$\x03$\x05$\u0618\n$\x03%\x03%\x05%\u061C" +
		"\n%\x03%\x03%\x05%\u0620\n%\x03&\x03&\x05&\u0624\n&\x03&\x05&\u0627\n" +
		"&\x03&\x03&\x03&\x07&\u062C\n&\f&\x0E&\u062F\v&\x03&\x03&\x03&\x03&\x07" +
		"&\u0635\n&\f&\x0E&\u0638\v&\x05&\u063A\n&\x03&\x03&\x05&\u063E\n&\x03" +
		"&\x03&\x03&\x05&\u0643\n&\x03&\x03&\x05&\u0647\n&\x03\'\x05\'\u064A\n" +
		"\'\x03\'\x03\'\x03\'\x07\'\u064F\n\'\f\'\x0E\'\u0652\v\'\x03(\x03(\x03" +
		")\x03)\x03)\x03)\x07)\u065A\n)\f)\x0E)\u065D\v)\x05)\u065F\n)\x03)\x03" +
		")\x05)\u0663\n)\x03*\x03*\x05*\u0667\n*\x03*\x03*\x03*\x03*\x03*\x03+" +
		"\x03+\x03,\x03,\x05,\u0672\n,\x03,\x05,\u0675\n,\x03,\x03,\x03,\x03,\x03" +
		",\x05,\u067C\n,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x05-\u068A\n-\x07-\u068C\n-\f-\x0E-\u068F\v-\x03.\x05.\u0692\n" +
		".\x03.\x03.\x05.\u0696\n.\x03.\x03.\x05.\u069A\n.\x03.\x03.\x05.\u069E" +
		"\n.\x03.\x03.\x05.\u06A2\n.\x03.\x03.\x05.\u06A6\n.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x05.\u06B0\n.\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x07/\u06B9\n/\f/\x0E/\u06BC\v/\x03/\x03/\x05/\u06C0\n/\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x050\u06CD\n0\x050\u06CF\n0" +
		"\x031\x031\x032\x032\x052\u06D5\n2\x032\x032\x052\u06D9\n2\x052\u06DB" +
		"\n2\x033\x033\x033\x033\x073\u06E1\n3\f3\x0E3\u06E4\v3\x033\x033\x034" +
		"\x034\x034\x034\x034\x034\x034\x034\x034\x034\x074\u06F2\n4\f4\x0E4\u06F5" +
		"\v4\x034\x034\x034\x054\u06FA\n4\x034\x034\x034\x034\x034\x034\x034\x03" +
		"4\x034\x054\u0705\n4\x035\x035\x036\x036\x036\x056\u070C\n6\x036\x036" +
		"\x056\u0710\n6\x036\x036\x036\x036\x036\x036\x076\u0718\n6\f6\x0E6\u071B" +
		"\v6\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x057\u0727\n7\x03" +
		"7\x037\x037\x037\x037\x037\x057\u072F\n7\x037\x037\x037\x037\x037\x07" +
		"7\u0736\n7\f7\x0E7\u0739\v7\x037\x037\x037\x057\u073E\n7\x037\x037\x03" +
		"7\x037\x037\x037\x057\u0746\n7\x037\x037\x037\x037\x057\u074C\n7\x037" +
		"\x037\x037\x037\x057\u0752\n7\x037\x037\x037\x057\u0757\n7\x037\x037\x03" +
		"7\x057\u075C\n7\x038\x038\x038\x038\x058\u0762\n8\x038\x038\x038\x038" +
		"\x038\x038\x038\x038\x038\x078\u076D\n8\f8\x0E8\u0770\v8\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x039\x039\x059\u078A\n9\x039\x039\x039\x03" +
		"9\x059\u0790\n9\x079\u0792\n9\f9\x0E9\u0795\v9\x039\x039\x039\x039\x03" +
		"9\x039\x039\x079\u079E\n9\f9\x0E9\u07A1\v9\x039\x039\x039\x039\x039\x03" +
		"9\x039\x059\u07AA\n9\x039\x059\u07AD\n9\x039\x039\x039\x059\u07B2\n9\x03" +
		"9\x039\x039\x079\u07B7\n9\f9\x0E9\u07BA\v9\x059\u07BC\n9\x039\x039\x03" +
		"9\x039\x039\x079\u07C3\n9\f9\x0E9\u07C6\v9\x059\u07C8\n9\x039\x039\x05" +
		"9\u07CC\n9\x039\x059\u07CF\n9\x039\x039\x039\x039\x039\x039\x039\x039" +
		"\x079\u07D9\n9\f9\x0E9\u07DC\v9\x059\u07DE\n9\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x069\u07EF\n9\r9\x0E" +
		"9\u07F0\x039\x039\x059\u07F5\n9\x039\x039\x039\x039\x069\u07FB\n9\r9\x0E" +
		"9\u07FC\x039\x039\x059\u0801\n9\x039\x039\x039\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x039\x07" +
		"9\u0818\n9\f9\x0E9\u081B\v9\x059\u081D\n9\x039\x039\x039\x039\x039\x03" +
		"9\x039\x059\u0826\n9\x039\x039\x039\x039\x059\u082C\n9\x039\x039\x039" +
		"\x039\x059\u0832\n9\x039\x039\x039\x039\x059\u0838\n9\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x059\u0843\n9\x039\x039\x039\x039\x039\x03" +
		"9\x039\x059\u084C\n9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x039\x039\x039\x079\u0860\n9\f9\x0E9\u0863" +
		"\v9\x059\u0865\n9\x039\x059\u0868\n9\x039\x039\x039\x039\x039\x039\x03" +
		"9\x039\x079\u0872\n9\f9\x0E9\u0875\v9\x03:\x03:\x03:\x03:\x05:\u087B\n" +
		":\x05:\u087D\n:\x03;\x03;\x03<\x03<\x03=\x03=\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x05>\u0893\n>\x03?\x03" +
		"?\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03" +
		"A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x07A\u08B0\n" +
		"A\fA\x0EA\u08B3\vA\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x07A\u08BC\nA\f" +
		"A\x0EA\u08BF\vA\x03A\x03A\x05A\u08C3\nA\x05A\u08C5\nA\x03A\x03A\x07A\u08C9" +
		"\nA\fA\x0EA\u08CC\vA\x03B\x03B\x05B\u08D0\nB\x03C\x03C\x03C\x03C\x05C" +
		"\u08D6\nC\x03D\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03E\x03F" +
		"\x03F\x03F\x03F\x03F\x03F\x03F\x07F\u08EA\nF\fF\x0EF\u08ED\vF\x05F\u08EF" +
		"\nF\x03F\x03F\x03F\x03F\x03F\x07F\u08F6\nF\fF\x0EF\u08F9\vF\x05F\u08FB" +
		"\nF\x03F\x05F\u08FE\nF\x03F\x03F\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G";
	private static readonly _serializedATNSegment1: string =
		"\x03G\x03G\x03G\x05G\u0912\nG\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H" +
		"\x03H\x05H\u091D\nH\x03I\x03I\x03I\x03I\x03I\x05I\u0924\nI\x03J\x03J\x03" +
		"J\x07J\u0929\nJ\fJ\x0EJ\u092C\vJ\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03" +
		"K\x03K\x03K\x03K\x05K\u0939\nK\x05K\u093B\nK\x03L\x03L\x03M\x03M\x03M" +
		"\x07M\u0942\nM\fM\x0EM\u0945\vM\x03N\x03N\x03N\x03N\x03N\x03N\x05N\u094D" +
		"\nN\x03O\x03O\x03O\x03O\x03O\x05O\u0954\nO\x03P\x05P\u0957\nP\x03P\x03" +
		"P\x05P\u095B\nP\x03P\x03P\x05P\u095F\nP\x03P\x05P\u0962\nP\x03Q\x03Q\x03" +
		"Q\r\u0167\u0177\u039F\u0481\u04FE\u0520\u0537\u0556\u0573\u05BA\u0793" +
		"\x02\bDXjnp\x80R\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
		"@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
		"\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
		"x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
		"\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E" +
		"\x02\xA0\x02\x02 \x04\x02>>\xDC\xDC\x04\x02\xD6\xD6\u010C\u010C\x04\x02" +
		"%%\xCF\xCF\x04\x02ZZgg\x04\x02\x82\x82\xB9\xB9\x04\x02??\xDD\xDD\x04\x02" +
		"iixx\x04\x02\x07\x07\x11\x11\x05\x02qq\xD6\xD6\u010C\u010C\x07\x02++>" +
		">\xE9\xE9\xF5\xF5\u0110\u0110\x05\x02++>>\xF5\xF5\x03\x02\u0127\u012A" +
		"\x04\x02\xBD\xBD\u011F\u0123\x04\x02UUyy\x03\x02\x03\t\x04\x02TT\u0108" +
		"\u0108\x04\x02\x0F\x0FJJ\x04\x02bb\x8E\x8E\x04\x02\x05\x05LL\x04\x02\x13" +
		"\x13\xF2\xF2\x03\x02\u0131\u0132\x03\x02\u0133\u0135\x03\x02\u012B\u0130" +
		"\x05\x02\x05\x05\n\n\xEC\xEC\x04\x02[[\u0100\u0100\x07\x02ABuv\x9C\x9F" +
		"\xDE\xDF\u011C\u011D\x03\x02\xA3\xA6\x04\x02dd\xBF\xBF\x06\x02>>\xE9\xE9" +
		"\xF5\xF5\u0110\u0110@\x02\x03\x06\n\n\r\r\x0F\x10\x13\x13$%))+/66=BDD" +
		"FFJJUUXX\\\\abddfflpuuwwyy}}\x80\x80\x83\x83\x86\x86\x88\x88\x8A\x8A\x8E" +
		"\x8F\x91\x91\x93\x93\x98\x98\x9B\x9C\x9E\x9E\xA2\xA8\xAC\xAE\xB0\xB1\xB4" +
		"\xB4\xB6\xB6\xB8\xB8\xBA\xBF\xC3\xC6\xCA\xCC\xCE\xCF\xD1\xD1\xD6\xD8\xDA" +
		"\xE0\xE4\xE7\xEA\xEA\xEC\xEE\xF1\xF2\xF6\xF8\xFB\xFF\u0101\u0101\u0103" +
		"\u0103\u0106\u0107\u010B\u010C\u0111\u0111\u0114\u0116\u011A\u011C\u011E" +
		"\u011E\x02\u0AFD\x02\xA8\x03\x02\x02\x02\x04\u048A\x03\x02\x02\x02\x06" +
		"\u048F\x03\x02\x02\x02\b\u04B8\x03\x02\x02\x02\n\u04C0\x03\x02\x02\x02" +
		"\f\u04C4\x03\x02\x02\x02\x0E\u04D8\x03\x02\x02\x02\x10\u04DC\x03\x02\x02" +
		"\x02\x12\u04E5\x03\x02\x02\x02\x14\u0503\x03\x02\x02\x02\x16\u0512\x03" +
		"\x02\x02\x02\x18\u0518\x03\x02\x02\x02\x1A\u051A\x03\x02\x02\x02\x1C\u052D" +
		"\x03\x02\x02\x02\x1E\u0541\x03\x02\x02\x02 \u054B\x03\x02\x02\x02\"\u054D" +
		"\x03\x02\x02\x02$\u054F\x03\x02\x02\x02&\u055E\x03\x02\x02\x02(\u0560" +
		"\x03\x02\x02\x02*\u0567\x03\x02\x02\x02,\u0582\x03\x02\x02\x02.\u058E" +
		"\x03\x02\x02\x020\u0595\x03\x02\x02\x022\u059F\x03\x02\x02\x024\u05A1" +
		"\x03\x02\x02\x026\u05A7\x03\x02\x02\x028\u05A9\x03\x02\x02\x02:\u05B4" +
		"\x03\x02\x02\x02<\u05BF\x03\x02\x02\x02>\u05C7\x03\x02\x02\x02@\u05D9" +
		"\x03\x02\x02\x02B\u05DE\x03\x02\x02\x02D\u05F3\x03\x02\x02\x02F\u0617" +
		"\x03\x02\x02\x02H\u0619\x03\x02\x02\x02J\u0621\x03\x02\x02\x02L\u0649" +
		"\x03\x02\x02\x02N\u0653\x03\x02\x02\x02P\u0662\x03\x02\x02\x02R\u0664" +
		"\x03\x02\x02\x02T\u066D\x03\x02\x02\x02V\u067B\x03\x02\x02\x02X\u067D" +
		"\x03\x02\x02\x02Z\u06AF\x03\x02\x02\x02\\\u06BF\x03\x02\x02\x02^\u06C1" +
		"\x03\x02\x02\x02`\u06D0\x03\x02\x02\x02b\u06D2\x03\x02\x02\x02d\u06DC" +
		"\x03\x02\x02\x02f\u0704\x03\x02\x02\x02h\u0706\x03\x02\x02\x02j\u070F" +
		"\x03\x02\x02\x02l\u075B\x03\x02\x02\x02n\u0761\x03\x02\x02\x02p\u0867" +
		"\x03\x02\x02\x02r\u087C\x03\x02\x02\x02t\u087E\x03\x02\x02\x02v\u0880" +
		"\x03\x02\x02\x02x\u0882\x03\x02\x02\x02z\u0892\x03\x02\x02\x02|\u0894" +
		"\x03\x02\x02\x02~\u0896\x03\x02\x02\x02\x80\u08C4\x03\x02\x02\x02\x82" +
		"\u08CF\x03\x02\x02\x02\x84\u08D5\x03\x02\x02\x02\x86\u08D7\x03\x02\x02" +
		"\x02\x88\u08DC\x03\x02\x02\x02\x8A\u08E2\x03\x02\x02\x02\x8C\u0911\x03" +
		"\x02\x02\x02\x8E\u091C\x03\x02\x02\x02\x90\u0923\x03\x02\x02\x02\x92\u0925" +
		"\x03\x02\x02\x02\x94\u093A\x03\x02\x02\x02\x96\u093C\x03\x02\x02\x02\x98" +
		"\u093E\x03\x02\x02\x02\x9A\u094C\x03\x02\x02\x02\x9C\u0953\x03\x02\x02" +
		"\x02\x9E\u0961\x03\x02\x02\x02\xA0\u0963\x03\x02\x02\x02\xA2\xA4\x05\x04" +
		"\x03\x02\xA3\xA5\x07\u0138\x02\x02\xA4\xA3\x03\x02\x02\x02\xA4\xA5\x03" +
		"\x02\x02\x02\xA5\xA7\x03\x02\x02\x02\xA6\xA2\x03\x02\x02\x02\xA7\xAA\x03" +
		"\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAB\x03" +
		"\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAB\xAC\x07\x02\x02\x03\xAC\x03\x03" +
		"\x02\x02\x02\xAD\u048B\x05\x0E\b\x02\xAE\xAF\x07\u010B\x02\x02\xAF\u048B" +
		"\x05\x9CO\x02\xB0\xB1\x073\x02\x02\xB1\xB5\t\x02\x02\x02\xB2\xB3\x07w" +
		"\x02\x02\xB3\xB4\x07\xAA\x02\x02\xB4\xB6\x07W\x02\x02\xB5\xB2\x03\x02" +
		"\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xBA\x05\x98" +
		"M\x02\xB8\xB9\x07-\x02\x02\xB9\xBB\x05r:\x02\xBA\xB8\x03\x02\x02\x02\xBA" +
		"\xBB\x03\x02\x02\x02\xBB\xBE\x03\x02\x02\x02\xBC\xBD\x07 \x02\x02\xBD" +
		"\xBF\x05r:\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\u048B" +
		"\x03\x02\x02\x02\xC0\xC1\x07\b\x02\x02\xC1\xC2\x07>\x02\x02\xC2\xC3\x05" +
		"\x98M\x02\xC3\xC4\x07\xE6\x02\x02\xC4\xC5\x07\xB7\x02\x02\xC5\xC6\t\x03" +
		"\x02\x02\xC6\xC7\x05\x9CO\x02\xC7\u048B\x03\x02\x02\x02\xC8\xC9\x07M\x02" +
		"\x02\xC9\xCC\t\x02\x02\x02\xCA\xCB\x07w\x02\x02\xCB\xCD\x07W\x02\x02\xCC" +
		"\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE" +
		"\xD0\x05\x98M\x02\xCF\xD1\t\x04\x02\x02\xD0\xCF\x03\x02\x02\x02\xD0\xD1" +
		"\x03\x02\x02\x02\xD1\u048B\x03\x02\x02\x02\xD2\xD4\x073\x02\x02\xD3\xD5" +
		"\x07\x19\x02\x02\xD4\xD3\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\xD6" +
		"\x03\x02\x02\x02\xD6\xDA\x07\xF5\x02\x02\xD7\xD8\x07w\x02\x02\xD8\xD9" +
		"\x07\xAA\x02\x02\xD9\xDB\x07W\x02\x02\xDA\xD7\x03\x02\x02\x02\xDA\xDB" +
		"\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xEC\x05\x98M\x02\xDD\xDE" +
		"\x07\u013B\x02\x02\xDE\xE3\x05\x16\f\x02\xDF\xE0\x07\u0139\x02\x02\xE0" +
		"\xE2\x05\x16\f\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE5\x03\x02\x02\x02\xE3" +
		"\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE8\x03\x02\x02\x02\xE5" +
		"\xE3\x03\x02\x02\x02\xE6\xE7\x07\u0139\x02\x02\xE7\xE9\x05\x12\n\x02\xE8" +
		"\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA" +
		"\xEB\x07\u013C\x02\x02\xEB\xED\x03\x02\x02\x02\xEC\xDD\x03\x02\x02\x02" +
		"\xEC\xED\x03\x02\x02\x02\xED\xF2\x03\x02\x02\x02\xEE\xEF\x07\x16\x02\x02" +
		"\xEF\xF0\x07#\x02\x02\xF0\xF3\x05:\x1E\x02\xF1\xF3\x05d3\x02\xF2\xEE\x03" +
		"\x02\x02\x02\xF2\xF1\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF4\x03" +
		"\x02\x02\x02\xF4\xF7\x05\x06\x04\x02\xF5\xF6\x07\x0E\x02\x02\xF6\xF8\x05" +
		"\x0E\b\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\u048B\x03" +
		"\x02\x02\x02\xF9\xFB\x073\x02\x02\xFA\xFC\x07\x19\x02\x02\xFB\xFA\x03" +
		"\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\u0101" +
		"\x07\xF5\x02\x02\xFE\xFF\x07w\x02\x02\xFF\u0100\x07\xAA\x02\x02\u0100" +
		"\u0102\x07W\x02\x02\u0101\xFE\x03\x02\x02\x02\u0101\u0102\x03\x02\x02" +
		"\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0107\x05\x98M\x02\u0104\u0105" +
		"\x07\x16\x02\x02\u0105\u0106\x07#\x02\x02\u0106\u0108\x05:\x1E\x02\u0107" +
		"\u0104\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u0109\x03\x02" +
		"\x02\x02\u0109\u010A\x05\x06\x04\x02\u010A\u048B\x03\x02\x02\x02\u010B" +
		"\u010D\x073\x02\x02\u010C\u010E\x07\x19\x02\x02\u010D\u010C\x03\x02\x02" +
		"\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0113" +
		"\x07\xF5\x02\x02\u0110\u0111\x07w\x02\x02\u0111\u0112\x07\xAA\x02\x02" +
		"\u0112\u0114\x07W\x02\x02\u0113\u0110\x03\x02\x02\x02\u0113\u0114\x03" +
		"\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0127\x05\x98M\x02\u0116" +
		"\u0117\x07\u013B\x02\x02\u0117\u011C\x05\x18\r\x02\u0118\u0119\x07\u0139" +
		"\x02\x02\u0119\u011B\x05\x18\r\x02\u011A\u0118\x03\x02\x02\x02\u011B\u011E" +
		"\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02" +
		"\u011D\u0123\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011F\u0120\x07" +
		"\u0139\x02\x02\u0120\u0121\x07\xC1\x02\x02\u0121\u0122\x07\x8C\x02\x02" +
		"\u0122\u0124\x05d3\x02\u0123\u011F\x03\x02\x02\x02\u0123\u0124\x03\x02" +
		"\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0126\x07\u013C\x02\x02\u0126" +
		"\u0128\x03\x02\x02\x02\u0127\u0116\x03\x02\x02\x02\u0127\u0128\x03\x02" +
		"\x02\x02\u0128\u012E\x03\x02\x02\x02\u0129\u012A\x07\xC1\x02\x02\u012A" +
		"\u012C\x07\x8C\x02\x02\u012B\u012D\x05d3\x02\u012C\u012B\x03\x02\x02\x02" +
		"\u012C\u012D\x03\x02\x02\x02\u012D\u012F\x03\x02\x02\x02\u012E\u0129\x03" +
		"\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0133\x03\x02\x02\x02\u0130" +
		"\u0131\x07\xBA\x02\x02\u0131\u0132\x07#\x02\x02\u0132\u0134\x05&\x14\x02" +
		"\u0133\u0130\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0137\x03" +
		"\x02\x02\x02\u0135\u0136\x07-\x02\x02\u0136\u0138\x05r:\x02\u0137\u0135" +
		"\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02" +
		"\u0139\u013A\x07\x1F\x02\x02\u013A\u013B\x07\x0E\x02\x02\u013B\u013E\x07" +
		"\x8D\x02\x02\u013C\u013D\x07!\x02\x02\u013D\u013F\x058\x1D\x02\u013E\u013C" +
		"\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0142\x03\x02\x02\x02" +
		"\u0140\u0141\x07\x0E\x02\x02\u0141\u0143\x05\x0E\b\x02\u0142\u0140\x03" +
		"\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u048B\x03\x02\x02\x02\u0144" +
		"\u0145\x07\b\x02\x02\u0145\u0146\x07\xF5\x02\x02\u0146\u0147\x05\x98M" +
		"\x02\u0147\u0148\x07\xCA\x02\x02\u0148\u0149\x07\xFE\x02\x02\u0149\u014A" +
		"\x05\x98M\x02\u014A\u048B\x03\x02\x02\x02\u014B\u014C\x07\b\x02\x02\u014C" +
		"\u014D\x07\xF5\x02\x02\u014D\u014E\x05\x98M\x02\u014E\u014F\x07\x03\x02" +
		"\x02\u014F\u0153\x07+\x02\x02\u0150\u0151\x07w\x02\x02\u0151\u0152\x07" +
		"\xAA\x02\x02\u0152\u0154\x07W\x02\x02\u0153\u0150\x03\x02\x02\x02\u0153" +
		"\u0154\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0156\x05\x1C" +
		"\x0F\x02\u0156\u048B\x03\x02\x02\x02\u0157\u0158\x07\b\x02\x02\u0158\u0159" +
		"\x07\xF5\x02\x02\u0159\u015A\x05\x98M\x02\u015A\u015E\x07\x03\x02\x02" +
		"\u015B\u015C\x07w\x02\x02\u015C\u015D\x07\xAA\x02\x02\u015D\u015F\x07" +
		"W\x02\x02\u015E\u015B\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F" +
		"\u0160\x03\x02\x02\x02\u0160\u0161\x07,\x02\x02\u0161\u0162\x07\u013B" +
		"\x02\x02\u0162\u0167\x05\x1C\x0F\x02\u0163\u0164\x07\u0139\x02\x02\u0164" +
		"\u0166\x05\x1C\x0F\x02\u0165\u0163\x03\x02\x02\x02\u0166\u0169\x03\x02" +
		"\x02\x02\u0167\u0168\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0168" +
		"\u016A\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A\u016B\x07\u013C" +
		"\x02\x02\u016B\u048B\x03\x02\x02\x02\u016C\u016D\x07\b\x02\x02\u016D\u016E" +
		"\x07\xF5\x02\x02\u016E\u016F\x05\x98M\x02\u016F\u0170\x07\xCC\x02\x02" +
		"\u0170\u0171\x07,\x02\x02\u0171\u0172\x07\u013B\x02\x02\u0172\u0177\x05" +
		"\x1C\x0F\x02\u0173\u0174\x07\u0139\x02\x02\u0174\u0176\x05\x1C\x0F\x02" +
		"\u0175\u0173\x03\x02\x02\x02\u0176\u0179\x03\x02\x02\x02\u0177\u0178\x03" +
		"\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0178\u017A\x03\x02\x02\x02\u0179" +
		"\u0177\x03\x02\x02\x02\u017A\u017B\x07\u013C\x02\x02\u017B\u048B\x03\x02" +
		"\x02\x02\u017C\u017D\x07\b\x02\x02\u017D\u017E\x07\xF5\x02\x02\u017E\u017F" +
		"\x05\x98M\x02\u017F\u0180\x07*\x02\x02\u0180\u0181\x07+\x02\x02\u0181" +
		"\u0182\x05\x1C\x0F\x02\u0182\u048B\x03\x02\x02\x02\u0183\u0184\x07\b\x02" +
		"\x02\u0184\u0185\x07\xF5\x02\x02\u0185\u0186\x05\x98M\x02\u0186\u0188" +
		"\x07M\x02\x02\u0187\u0189\x07+\x02\x02\u0188\u0187\x03\x02\x02\x02\u0188" +
		"\u0189\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018B\x05\x9C" +
		"O\x02\u018B\u048B\x03\x02\x02\x02\u018C\u018D\x07\b\x02\x02\u018D\u018E" +
		"\x07\xF5\x02\x02\u018E\u018F\x05\x98M\x02\u018F\u0190\x07\xE6\x02\x02" +
		"\u0190\u0191\x07\xB7\x02\x02\u0191\u0192\t\x03\x02\x02\u0192\u0193\x05" +
		"\x9CO\x02\u0193\u048B\x03\x02\x02\x02\u0194\u0195\x07\b\x02\x02\u0195" +
		"\u0196\x07\xF5\x02\x02\u0196\u0197\x05\x98M\x02\u0197\u0199\x07\b\x02" +
		"\x02\u0198\u019A\x07+\x02\x02\u0199\u0198\x03\x02\x02\x02\u0199\u019A" +
		"\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u01A0\x05\x9CO\x02" +
		"\u019C\u019D\x07\xE6\x02\x02\u019D\u01A1\x05 \x11\x02\u019E\u019F\x07" +
		"M\x02\x02\u019F\u01A1\x07F\x02\x02\u01A0\u019C\x03\x02\x02\x02\u01A0\u019E" +
		"\x03\x02\x02\x02\u01A1\u048B\x03\x02\x02\x02\u01A2\u01A3\x07\b\x02\x02" +
		"\u01A3\u01A4\x07\xF5\x02\x02\u01A4\u01A5\x05\x98M\x02\u01A5\u01A7\x07" +
		"\b\x02\x02\u01A6\u01A8\x07+\x02\x02\u01A7\u01A6\x03\x02\x02\x02\u01A7" +
		"\u01A8\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AA\x05\x9C" +
		"O\x02\u01AA\u01AB\x07\xE6\x02\x02\u01AB\u01AC\x07-\x02\x02\u01AC\u01AD" +
		"\x05r:\x02\u01AD\u048B\x03\x02\x02\x02\u01AE\u01AF\x07\b\x02\x02\u01AF" +
		"\u01B0\x07\xF5\x02\x02\u01B0\u01B1\x05\x98M\x02\u01B1\u01B5\x07\x03\x02" +
		"\x02\u01B2\u01B3\x07w\x02\x02\u01B3\u01B4\x07\xAA\x02\x02\u01B4\u01B6" +
		"\x07W\x02\x02\u01B5\u01B2\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02" +
		"\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B8\x07\xBA\x02\x02\u01B8\u01BB\x05" +
		"h5\x02\u01B9\u01BA\x07 \x02\x02\u01BA\u01BC\x05r:\x02\u01BB\u01B9\x03" +
		"\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01BE\x03\x02\x02\x02\u01BD" +
		"\u01BF\x05.\x18\x02\u01BE\u01BD\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02" +
		"\x02\u01BF\u048B\x03\x02\x02\x02\u01C0\u01C1\x07\b\x02\x02\u01C1\u01C2" +
		"\x07\xF5\x02\x02\u01C2\u01C3\x05\x98M\x02\u01C3\u01C7\x07\x03\x02\x02" +
		"\u01C4\u01C5\x07w\x02\x02\u01C5\u01C6\x07\xAA\x02\x02\u01C6\u01C8\x07" +
		"W\x02\x02\u01C7\u01C4\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8" +
		"\u01C9\x03\x02\x02\x02\u01C9\u01CA\x07\xC5\x02\x02\u01CA\u01CB\x07\xBA" +
		"\x02\x02\u01CB\u01CC\x05,\x17\x02\u01CC\u048B\x03\x02\x02\x02\u01CD\u01CE" +
		"\x07\b\x02\x02\u01CE\u01CF\x07\xF5\x02\x02\u01CF\u01D0\x05\x98M\x02\u01D0" +
		"\u01D3\x07M\x02\x02\u01D1\u01D2\x07w\x02\x02\u01D2\u01D4\x07W\x02\x02" +
		"\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D5\x03" +
		"\x02\x02\x02\u01D5\u01D6\x07\xBA\x02\x02\u01D6\u01D8\x05h5\x02\u01D7\u01D9" +
		"\x07\x1E\x02\x02\u01D8\u01D7\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02" +
		"\u01D9\u048B\x03\x02\x02\x02\u01DA\u01DB\x07\b\x02\x02\u01DB\u01DC\x07" +
		"\xF5\x02\x02\u01DC\u01DD\x05\x98M\x02\u01DD\u01E0\x07M\x02\x02\u01DE\u01DF" +
		"\x07w\x02\x02\u01DF\u01E1\x07W\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E0" +
		"\u01E1\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E3\x07\xC5" +
		"\x02\x02\u01E3\u01E4\x07\xBA\x02\x02\u01E4\u01E5\x05,\x17\x02\u01E5\u048B" +
		"\x03\x02\x02\x02\u01E6\u01E7\x07\b\x02\x02\u01E7\u01E8\x07\xF5\x02\x02" +
		"\u01E8\u01E9\x05\x98M\x02\u01E9\u01EA\x07\xC8\x02\x02\u01EA\u01EB\x07" +
		"\xBB\x02\x02\u01EB\u048B\x03\x02\x02\x02\u01EC\u01ED\x07\b\x02\x02\u01ED" +
		"\u01EE\x07\xF5\x02\x02\u01EE\u01F1\x05\x98M\x02\u01EF\u01F0\x07\xBA\x02" +
		"\x02\u01F0\u01F2\x05h5\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1\u01F2\x03" +
		"\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01FF\x07\xE6\x02\x02\u01F4" +
		"\u01F5\x07_\x02\x02\u01F5\u0200\x05$\x13\x02\u01F6\u01F7\x07\xDA\x02\x02" +
		"\u01F7\u01F8\x07f\x02\x02\u01F8\u0200\x05> \x02\u01F9\u01FA\x07 \x02\x02" +
		"\u01FA\u0200\x05r:\x02\u01FB\u01FC\x07!\x02\x02\u01FC\u0200\x058\x1D\x02" +
		"\u01FD\u01FE\x07\xE3\x02\x02\u01FE\u0200\x058\x1D\x02\u01FF\u01F4\x03" +
		"\x02\x02\x02\u01FF\u01F6\x03\x02\x02\x02\u01FF\u01F9\x03\x02\x02\x02\u01FF" +
		"\u01FB\x03\x02\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u0200\u048B\x03\x02" +
		"\x02\x02\u0201\u0202\x07\b\x02\x02\u0202\u0203\x07\xF5\x02\x02\u0203\u0204" +
		"\x05\x98M\x02\u0204\u0205\x07\xE6\x02\x02\u0205\u0206\x07+\x02\x02\u0206" +
		"\u0207\x07\xEE\x02\x02\u0207\u0208\x05\x9CO\x02\u0208\u0209\x07\u013B" +
		"\x02\x02\u0209\u020A\x05\"\x12\x02\u020A\u020B\x07\u012B\x02\x02\u020B" +
		"\u0211\x05r:\x02\u020C\u020D\x07\u0139\x02\x02\u020D\u020E\x05\"\x12\x02" +
		"\u020E\u020F\x07\u012B\x02\x02\u020F\u0210\x05r:\x02\u0210\u0212\x03\x02" +
		"\x02\x02\u0211\u020C\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212" +
		"\u0213\x03\x02\x02\x02\u0213\u0214\x07\u013C\x02\x02\u0214\u048B\x03\x02" +
		"\x02\x02\u0215\u0216\x07\b\x02\x02\u0216\u0217\x07\xF5\x02\x02\u0217\u021A" +
		"\x05\x98M\x02\u0218\u0219\x07\xBA\x02\x02\u0219\u021B\x05h5\x02\u021A" +
		"\u0218\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021C\x03\x02" +
		"\x02\x02\u021C\u0227\x07\xE6\x02\x02\u021D\u021E\x07(\x02\x02\u021E\u021F" +
		"\x07x\x02\x02\u021F\u0224\x05r:\x02\u0220\u0221\x07\u0119\x02\x02\u0221" +
		"\u0222\x07\xC2\x02\x02\u0222\u0223\x07\u012B\x02\x02\u0223\u0225\x05\x9E" +
		"P\x02\u0224\u0220\x03\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225\u0228" +
		"\x03\x02\x02\x02\u0226\u0228\x07\u0104\x02\x02\u0227\u021D\x03\x02\x02" +
		"\x02\u0227\u0226\x03\x02\x02\x02\u0228\u048B\x03\x02\x02\x02\u0229\u022A" +
		"\x07M\x02\x02\u022A\u022D\x07\xF5\x02\x02\u022B\u022C\x07w\x02\x02\u022C" +
		"\u022E\x07W\x02\x02\u022D\u022B\x03\x02\x02\x02\u022D\u022E\x03\x02\x02" +
		"\x02\u022E\u022F\x03\x02\x02\x02\u022F\u0231\x05\x98M\x02\u0230\u0232" +
		"\x07\x1E\x02\x02\u0231\u0230\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02" +
		"\u0232\u048B\x03\x02\x02\x02\u0233\u0235\x07\u0102\x02\x02\u0234\u0236" +
		"\x07\xF5\x02\x02\u0235\u0234\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02" +
		"\u0236\u0239\x03\x02\x02\x02\u0237\u0238\x07w\x02\x02\u0238\u023A\x07" +
		"W\x02\x02\u0239\u0237\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A" +
		"\u023B\x03\x02\x02\x02\u023B\u048B\x05\x98M\x02\u023C\u023D\x073\x02\x02" +
		"\u023D\u0241\x07\u0115\x02\x02\u023E\u023F\x07w\x02\x02\u023F\u0240\x07" +
		"\xAA\x02\x02\u0240\u0242\x07W\x02\x02\u0241\u023E\x03\x02\x02\x02\u0241" +
		"\u0242\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243\u0245\x05\x98" +
		"M\x02\u0244\u0246\x05\f\x07\x02\u0245\u0244\x03\x02\x02\x02\u0245\u0246" +
		"\x03\x02\x02\x02\u0246\u0249\x03\x02\x02\x02\u0247\u0248\x07-\x02\x02" +
		"\u0248\u024A\x05r:\x02\u0249\u0247\x03\x02\x02\x02\u0249\u024A\x03\x02" +
		"\x02\x02\u024A\u024D\x03\x02\x02\x02\u024B\u024C\x07!\x02\x02\u024C\u024E" +
		"\x058\x1D\x02\u024D\u024B\x03\x02\x02\x02\u024D\u024E\x03\x02\x02\x02" +
		"\u024E\u024F\x03\x02\x02\x02\u024F\u0250\x07\x0E\x02\x02\u0250\u0251\x05" +
		"\x0E\b\x02\u0251\u048B\x03\x02\x02\x02\u0252\u0253\x07\b\x02\x02\u0253" +
		"\u0254\x07\u0115\x02\x02\u0254\u0256\x05\x98M\x02\u0255\u0257\x05\f\x07" +
		"\x02\u0256\u0255\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257\u0258" +
		"\x03\x02\x02\x02\u0258\u0259\x07\x0E\x02\x02\u0259\u025A\x05\x0E\b\x02" +
		"\u025A\u048B\x03\x02\x02\x02\u025B\u025C\x07\b\x02\x02\u025C\u025D\x07" +
		"\u0115\x02\x02\u025D\u025E\x05\x98M\x02\u025E\u025F\x07\xCA\x02\x02\u025F" +
		"\u0260\x07\xFE\x02\x02\u0260\u0261\x05\x98M\x02\u0261\u048B\x03\x02\x02" +
		"\x02\u0262\u0263\x07\b\x02\x02\u0263\u0264\x07\u0115\x02\x02\u0264\u0265" +
		"\x05\x98M\x02\u0265\u0266\x07\xE6\x02\x02\u0266\u0267\x07\xB7\x02\x02" +
		"\u0267\u0268\t\x03\x02\x02\u0268\u0269\x05\x98M\x02\u0269\u048B\x03\x02" +
		"\x02\x02\u026A\u026B\x07\b\x02\x02\u026B\u026C\x07\u0115\x02\x02\u026C" +
		"\u026D\x05\x98M\x02\u026D\u026E\x07\xE6\x02\x02\u026E\u026F\x07!\x02\x02" +
		"\u026F\u0270\x058\x1D\x02\u0270\u048B\x03\x02\x02\x02\u0271\u0272\x07" +
		"\b\x02\x02\u0272\u0273\x07\u0115\x02\x02\u0273\u0274\x05\x98M\x02\u0274" +
		"\u0275\x07\u010A\x02\x02\u0275\u0276\x07!\x02\x02\u0276\u0277\x058\x1D" +
		"\x02\u0277\u048B\x03\x02\x02\x02\u0278\u0279\x07M\x02\x02\u0279\u027C" +
		"\x07\u0115\x02\x02\u027A\u027B\x07w\x02\x02\u027B\u027D\x07W\x02\x02\u027C" +
		"\u027A\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D\u027E\x03\x02" +
		"\x02\x02\u027E\u048B\x05\x98M\x02\u027F\u0281\x07K\x02\x02\u0280\u0282" +
		"\x07>\x02\x02\u0281\u0280\x03\x02\x02\x02\u0281\u0282\x03\x02\x02\x02" +
		"\u0282\u0284\x03\x02\x02\x02\u0283\u0285\t\x05\x02\x02\u0284\u0283\x03" +
		"\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286" +
		"\u048B\x05\x98M\x02\u0287\u0288\x071\x02\x02\u0288\u0289\x07\xEE\x02\x02" +
		"\u0289\u028B\x05\x98M\x02\u028A\u028C\x05d3\x02\u028B\u028A\x03\x02\x02" +
		"\x02\u028B\u028C\x03\x02\x02\x02\u028C\u0299\x03\x02\x02\x02\u028D\u028E" +
		"\x07\xF7\x02\x02\u028E\u028F\x07\xF2\x02\x02\u028F\u0290\x07\u013B\x02" +
		"\x02\u0290\u0291\x05\x9EP\x02\u0291\u0297\x07\u013C\x02\x02\u0292\u0293" +
		"\x07\xCB\x02\x02\u0293\u0294\x07\u013B\x02\x02\u0294\u0295\x05\x9EP\x02" +
		"\u0295\u0296\x07\u013C\x02\x02\u0296\u0298\x03\x02\x02\x02\u0297\u0292" +
		"\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298\u029A\x03\x02\x02\x02" +
		"\u0299\u028D\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u048B\x03" +
		"\x02\x02\x02\u029B\u029C\x071\x02\x02\u029C\u029D\x07z\x02\x02\u029D\u029E" +
		"\x07\xEE\x02\x02\u029E\u02A1\x05\x98M\x02\u029F\u02A0\x07\xBA\x02\x02" +
		"\u02A0\u02A2\x05h5\x02\u02A1\u029F\x03\x02\x02\x02\u02A1\u02A2\x03\x02" +
		"\x02\x02\u02A2\u048B\x03\x02\x02\x02\u02A3\u02A4\x07M\x02\x02\u02A4\u02A5" +
		"\x07\xEE\x02\x02\u02A5\u048B\x05\x98M\x02\u02A6\u02A7\x07M\x02\x02\u02A7" +
		"\u02A8\x07z\x02\x02\u02A8\u02A9\x07\xEE\x02\x02\u02A9\u02AA\x05\x98M\x02" +
		"\u02AA\u02AB\x07\xBA\x02\x02\u02AB\u02AC\x05h5\x02\u02AC\u048B\x03\x02" +
		"\x02\x02\u02AD\u02AE\x073\x02\x02\u02AE\u02B2\x07k\x02\x02\u02AF\u02B0" +
		"\x07w\x02\x02\u02B0\u02B1\x07\xAA\x02\x02\u02B1\u02B3\x07W\x02\x02\u02B2" +
		"\u02AF\x03\x02\x02\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3\u02B4\x03\x02" +
		"\x02\x02\u02B4\u02C1\x05\x98M\x02\u02B5\u02BE\x07\u013B\x02\x02\u02B6" +
		"\u02BB\x05\x80A\x02\u02B7\u02B8\x07\u0139\x02\x02\u02B8\u02BA\x05\x80" +
		"A\x02\u02B9\u02B7\x03\x02\x02\x02\u02BA\u02BD\x03\x02\x02\x02\u02BB\u02B9" +
		"\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02BF\x03\x02\x02\x02" +
		"\u02BD\u02BB\x03\x02\x02\x02\u02BE\u02B6\x03\x02\x02\x02\u02BE\u02BF\x03" +
		"\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0\u02C2\x07\u013C\x02\x02" +
		"\u02C1\u02B5\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2\u02C3\x03" +
		"\x02\x02\x02\u02C3\u02C4\x07\xD0\x02\x02\u02C4\u02C5\x05\x80A\x02\u02C5" +
		"\u02C6\x07 \x02\x02\u02C6\u02C7\x07\u0143\x02\x02\u02C7\u02C8\x07\xF3" +
		"\x02\x02\u02C8\u02C9\x07\u012B\x02\x02\u02C9\u02CA\x05r:\x02\u02CA\u048B" +
		"\x03\x02\x02\x02\u02CB\u02CC\x073\x02\x02\u02CC\u02D0\x07k\x02\x02\u02CD" +
		"\u02CE\x07w\x02\x02\u02CE\u02CF\x07\xAA\x02\x02\u02CF\u02D1\x07W\x02\x02" +
		"\u02D0\u02CD\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D2\x03" +
		"\x02\x02\x02\u02D2\u02D3\x05\x98M\x02\u02D3\u02D4\x07 \x02\x02\u02D4\u02D5" +
		"\x07\u0143\x02\x02\u02D5\u02D6\x07\xF3\x02\x02\u02D6\u02D7\x07\u012B\x02" +
		"\x02";
	private static readonly _serializedATNSegment2: string =
		"\u02D7\u02D8\x05r:\x02\u02D8\u048B\x03\x02\x02\x02\u02D9\u02DB\x073\x02" +
		"\x02\u02DA\u02DC\x07\x11\x02\x02\u02DB\u02DA\x03\x02\x02\x02\u02DB\u02DC" +
		"\x03\x02\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD\u02E1\x07k\x02\x02" +
		"\u02DE\u02DF\x07w\x02\x02\u02DF\u02E0\x07\xAA\x02\x02\u02E0\u02E2\x07" +
		"W\x02\x02\u02E1\u02DE\x03\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2" +
		"\u02E3\x03\x02\x02\x02\u02E3\u02F0\x05\x98M\x02\u02E4\u02ED\x07\u013B" +
		"\x02\x02\u02E5\u02EA\x05\x80A\x02\u02E6\u02E7\x07\u0139\x02\x02\u02E7" +
		"\u02E9\x05\x80A\x02\u02E8\u02E6\x03\x02\x02\x02\u02E9\u02EC\x03\x02\x02" +
		"\x02\u02EA\u02E8\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02EE" +
		"\x03\x02\x02\x02\u02EC\u02EA\x03\x02\x02\x02\u02ED\u02E5\x03\x02\x02\x02" +
		"\u02ED\u02EE\x03\x02\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02F1\x07" +
		"\u013C\x02\x02\u02F0\u02E4\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02" +
		"\u02F1\u02F2\x03\x02\x02\x02\u02F2\u02F3\x07\xD0\x02\x02\u02F3\u02F6\x05" +
		"\x80A\x02\u02F4\u02F5\x07\x81\x02\x02\u02F5\u02F7\x05\x80A\x02\u02F6\u02F4" +
		"\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02" +
		"\u02F8\u02F9\x07 \x02\x02\u02F9\u02FD\x07\u0143\x02\x02\u02FA\u02FB\x07" +
		"\x84\x02\x02\u02FB\u02FC\x07\u012B\x02\x02\u02FC\u02FE\x07\u0143\x02\x02" +
		"\u02FD\u02FA\x03\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02\u02FE\u02FF\x03" +
		"\x02\x02\x02\u02FF\u0300\x07\u010E\x02\x02\u0300\u0301\x07\u012B\x02\x02" +
		"\u0301\u0302\x07\u0143\x02\x02\u0302\u0303\x07\xA1\x02\x02\u0303\u0304" +
		"\x07\u012B\x02\x02\u0304\u0308\x07\u0143\x02\x02\u0305\u0306\x07\x17\x02" +
		"\x02\u0306\u0307\x07\u012B\x02\x02\u0307\u0309\x07\u0143\x02\x02\u0308" +
		"\u0305\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030D\x03\x02" +
		"\x02\x02\u030A\u030B\x07\x1A\x02\x02\u030B\u030C\x07\u012B\x02\x02\u030C" +
		"\u030E\x07\u0143\x02\x02\u030D\u030A\x03\x02\x02\x02\u030D\u030E\x03\x02" +
		"\x02\x02\u030E\u0312\x03\x02\x02\x02\u030F\u0310\x07\xF4\x02\x02\u0310" +
		"\u0311\x07\u012B\x02\x02\u0311\u0313\x07\u0143\x02\x02\u0312\u030F\x03" +
		"\x02\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0317\x03\x02\x02\x02\u0314" +
		"\u0315\x07c\x02\x02\u0315\u0316\x07\u012B\x02\x02\u0316\u0318\x07\u0143" +
		"\x02\x02\u0317\u0314\x03\x02\x02\x02\u0317\u0318\x03\x02\x02\x02\u0318" +
		"\u048B\x03\x02\x02\x02\u0319\u031A\x07\xD2\x02\x02\u031A\u031B\x07l\x02" +
		"\x02\u031B\u048B\x05\x98M\x02\u031C\u031E\x07M\x02\x02\u031D\u031F\x07" +
		"\x11\x02\x02\u031E\u031D\x03\x02\x02\x02\u031E\u031F\x03\x02\x02\x02\u031F" +
		"\u0320\x03\x02\x02\x02\u0320\u0323\x07k\x02\x02\u0321\u0322\x07w\x02\x02" +
		"\u0322\u0324\x07W\x02\x02\u0323\u0321\x03\x02\x02\x02\u0323\u0324\x03" +
		"\x02\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325\u0332\x05\x98M\x02\u0326" +
		"\u032F\x07\u013B\x02\x02\u0327\u032C\x05\x80A\x02\u0328\u0329\x07\u0139" +
		"\x02\x02\u0329\u032B\x05\x80A\x02\u032A\u0328\x03\x02\x02\x02\u032B\u032E" +
		"\x03\x02\x02\x02\u032C\u032A\x03\x02\x02\x02\u032C\u032D\x03\x02\x02\x02" +
		"\u032D\u0330\x03\x02\x02\x02\u032E\u032C\x03\x02\x02\x02\u032F\u0327\x03" +
		"\x02\x02\x02\u032F\u0330\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331" +
		"\u0333\x07\u013C\x02\x02\u0332\u0326\x03\x02\x02\x02\u0332\u0333\x03\x02" +
		"\x02\x02\u0333\u048B\x03\x02\x02\x02\u0334\u0335\x073\x02\x02\u0335\u0336" +
		"\x07\xD6\x02\x02\u0336\u048B\x05\x9CO\x02\u0337\u0338\x07M\x02\x02\u0338" +
		"\u0339\x07\xD6\x02\x02\u0339\u048B\x05\x9CO\x02\u033A\u033B\x07m\x02\x02" +
		"\u033B\u033C\x07\xD6\x02\x02\u033C\u033D\x05\x9CO\x02\u033D\u033E\x07" +
		"\xFE\x02\x02\u033E\u033F\x07q\x02\x02\u033F\u0340\x05\x9CO\x02\u0340\u048B" +
		"\x03\x02\x02\x02\u0341\u0342\x07m\x02\x02\u0342\u0343\x05\x94K\x02\u0343" +
		"\u0344\x07\xAF\x02\x02\u0344\u0346\x05\x96L\x02\u0345\u0347\x05\x98M\x02" +
		"\u0346\u0345\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347\u0348\x03" +
		"\x02\x02\x02\u0348\u0349\x07\xFE\x02\x02\u0349\u034A\x05\x9AN\x02\u034A" +
		"\u048B\x03\x02\x02\x02\u034B\u034C\x07\xD1\x02\x02\u034C\u034D\x07\xD6" +
		"\x02\x02\u034D\u034E\x05\x9CO\x02\u034E\u034F\x07i\x02\x02\u034F\u0350" +
		"\x07q\x02\x02\u0350\u0351\x05\x9CO\x02\u0351\u048B\x03\x02\x02\x02\u0352" +
		"\u0356\x07\xD1\x02\x02\u0353\u0354\x07m\x02\x02\u0354\u0355\x07\xB1\x02" +
		"\x02\u0355\u0357\x07e\x02\x02\u0356\u0353\x03\x02\x02\x02\u0356\u0357" +
		"\x03\x02\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358\u0359\x05\x94K\x02" +
		"\u0359\u035A\x07\xAF\x02\x02\u035A\u035C\x05\x96L\x02\u035B\u035D\x05" +
		"\x98M\x02\u035C\u035B\x03\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D" +
		"\u035E\x03\x02\x02\x02\u035E\u0364\x07i\x02\x02\u035F\u0365\x05\x9AN\x02" +
		"\u0360\u0362\x07\xD6\x02\x02\u0361\u0360\x03\x02\x02\x02\u0361\u0362\x03" +
		"\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\u0365\x05\x9CO\x02\u0364" +
		"\u035F\x03\x02\x02\x02\u0364\u0361\x03\x02\x02\x02\u0365\u048B\x03\x02" +
		"\x02\x02\u0366\u0368\x05\x10\t\x02\u0367\u0366\x03\x02\x02\x02\u0367\u0368" +
		"\x03\x02\x02\x02\u0368\u0369\x03\x02\x02\x02\u0369\u036B\x07~\x02\x02" +
		"\u036A\u036C\x056\x1C\x02\u036B\u036A\x03\x02\x02\x02\u036B\u036C\x03" +
		"\x02\x02\x02\u036C\u036D\x03\x02\x02\x02\u036D\u036F\t\x06\x02\x02\u036E" +
		"\u0370\x07\xF5\x02\x02\u036F\u036E\x03\x02\x02\x02\u036F\u0370\x03\x02" +
		"\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371\u0373\x05\x98M\x02\u0372\u0374" +
		"\x05d3\x02\u0373\u0372\x03\x02\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374" +
		"\u0381\x03\x02\x02\x02\u0375\u0376\x07\xBA\x02\x02\u0376\u0377\x07\u013B" +
		"\x02\x02\u0377\u037C\x05h5\x02\u0378\u0379\x07\u0139\x02\x02\u0379\u037B" +
		"\x05h5\x02\u037A\u0378\x03\x02\x02\x02\u037B\u037E\x03\x02\x02\x02\u037C" +
		"\u037A\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D\u037F\x03\x02" +
		"\x02\x02\u037E\u037C\x03\x02\x02\x02\u037F\u0380\x07\u013C\x02\x02\u0380" +
		"\u0382\x03\x02\x02\x02\u0381\u0375\x03\x02\x02\x02\u0381\u0382\x03\x02" +
		"\x02\x02\u0382\u0384\x03\x02\x02\x02\u0383\u0385\x056\x1C\x02\u0384\u0383" +
		"\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385\u0386\x03\x02\x02\x02" +
		"\u0386\u0387\x05\x0E\b\x02\u0387\u048B\x03\x02\x02\x02\u0388\u038A\x07" +
		"E\x02\x02\u0389\u038B\x07i\x02\x02\u038A\u0389\x03\x02\x02\x02\u038A\u038B" +
		"\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C\u038F\x05\x98M\x02" +
		"\u038D\u038E\x07\u0118\x02\x02\u038E\u0390\x05j6\x02\u038F\u038D\x03\x02" +
		"\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390\u048B\x03\x02\x02\x02\u0391" +
		"\u0392\x07E\x02\x02\u0392\u0397\x05h5\x02\u0393\u0395\x07\x0E\x02\x02" +
		"\u0394\u0393\x03\x02\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395\u0396\x03" +
		"\x02\x02\x02\u0396\u0398\x05\x9CO\x02\u0397\u0394\x03\x02\x02\x02\u0397" +
		"\u0398\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399\u039A\x07i\x02" +
		"\x02\u039A\u039F\x05X-\x02\u039B\u039C\x07\u0139\x02\x02\u039C\u039E\x05" +
		"X-\x02\u039D\u039B\x03\x02\x02\x02\u039E\u03A1\x03\x02\x02\x02\u039F\u03A0" +
		"\x03\x02\x02\x02\u039F\u039D\x03\x02\x02\x02\u03A0\u03A4\x03\x02\x02\x02" +
		"\u03A1\u039F\x03\x02\x02\x02\u03A2\u03A3\x07\u0118\x02\x02\u03A3\u03A5" +
		"\x05j6\x02\u03A4\u03A2\x03\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5" +
		"\u048B\x03\x02\x02\x02\u03A6\u03A7\x07I\x02\x02\u03A7\u03A8\x05\x98M\x02" +
		"\u03A8\u03A9\x07\xE6\x02\x02\u03A9\u03B3\x05\b\x05\x02\u03AA\u03AB\x07" +
		"i\x02\x02\u03AB\u03B0\x05X-\x02\u03AC\u03AD\x07\u0139\x02\x02\u03AD\u03AF" +
		"\x05X-\x02\u03AE\u03AC\x03\x02\x02\x02\u03AF\u03B2\x03\x02\x02\x02\u03B0" +
		"\u03AE\x03\x02\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1\u03B4\x03\x02" +
		"\x02\x02\u03B2\u03B0\x03\x02\x02\x02\u03B3\u03AA\x03\x02\x02\x02\u03B3" +
		"\u03B4\x03\x02\x02\x02\u03B4\u03B7\x03\x02\x02\x02\u03B5\u03B6\x07\u0118" +
		"\x02\x02\u03B6\u03B8\x05j6\x02\u03B7\u03B5\x03\x02\x02\x02\u03B7\u03B8" +
		"\x03\x02\x02\x02\u03B8\u048B\x03\x02\x02\x02\u03B9\u03BB\x07\u010F\x02" +
		"\x02\u03BA\u03BC\x056\x1C\x02\u03BB\u03BA\x03\x02\x02\x02\u03BB\u03BC" +
		"\x03\x02\x02\x02\u03BC\u03BD\x03\x02\x02\x02\u03BD\u03BF\x07\x82\x02\x02" +
		"\u03BE\u03C0\x07\xF5\x02\x02\u03BF\u03BE\x03\x02\x02\x02\u03BF\u03C0\x03" +
		"\x02\x02\x02\u03C0\u03C1\x03\x02\x02\x02\u03C1\u03C3\x05\x98M\x02\u03C2" +
		"\u03C4\x05d3\x02\u03C3\u03C2\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02" +
		"\u03C4\u03C6\x03\x02\x02\x02\u03C5\u03C7\x056\x1C\x02\u03C6\u03C5\x03" +
		"\x02\x02\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7\u03C8\x03\x02\x02\x02\u03C8" +
		"\u03C9\x05\x0E\b\x02\u03C9\u048B\x03\x02\x02\x02\u03CA\u03CB\x07\xEA\x02" +
		"\x02\u03CB\u03D7\t\x07\x02\x02\u03CC\u03CE\x07\x92\x02\x02\u03CD\u03CC" +
		"\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02" +
		"\u03CF\u03D4\x05r:\x02\u03D0\u03D1\x07\u0141\x02\x02\u03D1\u03D3\x05r" +
		":\x02\u03D2\u03D0\x03\x02\x02\x02\u03D3\u03D6\x03\x02\x02\x02\u03D4\u03D2" +
		"\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02\u03D5\u03D8\x03\x02\x02\x02" +
		"\u03D6\u03D4\x03\x02\x02\x02\u03D7\u03CD\x03\x02\x02\x02\u03D7\u03D8\x03" +
		"\x02\x02\x02\u03D8\u048B\x03\x02\x02\x02\u03D9\u03DA\x07\xEA\x02\x02\u03DA" +
		"\u03DD\x07\xF6\x02\x02\u03DB\u03DC\t\b\x02\x02\u03DC\u03DE\x05\x98M\x02" +
		"\u03DD\u03DB\x03\x02\x02\x02\u03DD\u03DE\x03\x02\x02\x02\u03DE\u03EA\x03" +
		"\x02\x02\x02\u03DF\u03E1\x07\x92\x02\x02\u03E0\u03DF\x03\x02\x02\x02\u03E0" +
		"\u03E1\x03\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2\u03E7\x05r:\x02" +
		"\u03E3\u03E4\x07\u0141\x02\x02\u03E4\u03E6\x05r:\x02\u03E5\u03E3\x03\x02" +
		"\x02\x02\u03E6\u03E9\x03\x02\x02\x02\u03E7\u03E5\x03\x02\x02\x02\u03E7" +
		"\u03E8\x03\x02\x02\x02\u03E8\u03EB\x03\x02\x02\x02\u03E9\u03E7\x03\x02" +
		"\x02\x02\u03EA\u03E0\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02\u03EB" +
		"\u048B\x03\x02\x02\x02\u03EC\u03EE\x07\xEA\x02\x02\u03ED\u03EF\t\t\x02" +
		"\x02\u03EE\u03ED\x03\x02\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\u03F0" +
		"\x03\x02\x02\x02\u03F0\u03F3\x07l\x02\x02\u03F1\u03F2\x07x\x02\x02\u03F2" +
		"\u03F4\x05\x98M\x02\u03F3\u03F1\x03\x02\x02\x02\u03F3\u03F4\x03\x02\x02" +
		"\x02\u03F4\u0400\x03\x02\x02\x02\u03F5\u03F7\x07\x92\x02\x02\u03F6\u03F5" +
		"\x03\x02\x02\x02\u03F6\u03F7\x03\x02\x02\x02\u03F7\u03F8\x03\x02\x02\x02" +
		"\u03F8\u03FD\x05r:\x02\u03F9\u03FA\x07\u0141\x02\x02\u03FA\u03FC\x05r" +
		":\x02\u03FB\u03F9\x03\x02\x02\x02\u03FC\u03FF\x03\x02\x02\x02\u03FD\u03FB" +
		"\x03\x02\x02\x02\u03FD\u03FE\x03\x02\x02\x02\u03FE\u0401\x03\x02\x02\x02" +
		"\u03FF\u03FD\x03\x02\x02\x02\u0400\u03F6\x03\x02\x02\x02\u0400\u0401\x03" +
		"\x02\x02\x02\u0401\u048B\x03\x02\x02\x02\u0402\u0403\x07\xEA\x02\x02\u0403" +
		"\u0404\x073\x02\x02\u0404\u0405\x07\xF5\x02\x02\u0405\u048B\x05\x98M\x02" +
		"\u0406\u0407\x07\xEA\x02\x02\u0407\u0408\x073\x02\x02\u0408\u0409\x07" +
		"\u0115\x02\x02\u0409\u048B\x05\x98M\x02\u040A\u040B\x07\xEA\x02\x02\u040B" +
		"\u040C\x07\xF5\x02\x02\u040C\u040D\x07\xEE\x02\x02\u040D\u048B\x05\x98" +
		"M\x02\u040E\u040F\x07\xEA\x02\x02\u040F\u0410\x07+\x02\x02\u0410\u0411" +
		"\x07\xEE\x02\x02\u0411\u048B\x05\x98M\x02\u0412\u0414\x07\xEA\x02\x02" +
		"\u0413\u0415\x07\xC5\x02\x02\u0414\u0413\x03\x02\x02\x02\u0414\u0415\x03" +
		"\x02\x02\x02\u0415\u0416\x03\x02\x02\x02\u0416\u0417\x07\xBB\x02\x02\u0417" +
		"\u048B\x05\x98M\x02\u0418\u0419\x07\xEA\x02\x02\u0419\u041A\x07`\x02\x02" +
		"\u041A\u041B\x07x\x02\x02\u041B\u0425\x05\x98M\x02\u041C\u041D\x07\xBA" +
		"\x02\x02\u041D\u041E\x07\u013B\x02\x02\u041E\u0421\x05h5\x02\u041F\u0420" +
		"\x07\u0139\x02\x02\u0420\u0422\x05h5\x02\u0421\u041F\x03\x02\x02\x02\u0421" +
		"\u0422\x03\x02\x02\x02\u0422\u0423\x03\x02\x02\x02\u0423\u0424\x07\u013C" +
		"\x02\x02\u0424\u0426\x03\x02\x02\x02\u0425\u041C\x03\x02\x02\x02\u0425" +
		"\u0426\x03\x02\x02\x02\u0426\u048B\x03\x02\x02\x02\u0427\u0429\x07\xEA" +
		"\x02\x02\u0428\u042A\x076\x02\x02\u0429\u0428\x03\x02\x02\x02\u0429\u042A" +
		"\x03\x02\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B\u048B\x07\xD7\x02\x02" +
		"\u042C\u042D\x07\xEA\x02\x02\u042D\u042E\x07\xD6\x02\x02\u042E\u042F\x07" +
		"m\x02\x02\u042F\u0430\x07q\x02\x02\u0430\u048B\x05\x9CO\x02\u0431\u0432" +
		"\x07\xEA\x02\x02\u0432\u0433\x07m\x02\x02\u0433\u0434\t\x03\x02\x02\u0434" +
		"\u048B\x05\x9CO\x02\u0435\u0436\x07\xEA\x02\x02\u0436\u0437\x07m\x02\x02" +
		"\u0437\u0438\t\n\x02\x02\u0438\u0439\x05\x9CO\x02\u0439\u043A\x07\xAF" +
		"\x02\x02\u043A\u043C\t\v\x02\x02\u043B\u043D\x05\x98M\x02\u043C\u043B" +
		"\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02\u043D\u048B\x03\x02\x02\x02" +
		"\u043E\u043F\x07-\x02\x02\u043F\u0440\x07\xAF\x02\x02\u0440\u0441\t\f" +
		"\x02\x02\u0441\u0442\x05\x98M\x02\u0442\u0445\x07\x87\x02\x02\u0443\u0446" +
		"\x05r:\x02\u0444\u0446\x07\xAB\x02\x02\u0445\u0443\x03\x02\x02\x02\u0445" +
		"\u0444\x03\x02\x02\x02\u0446\u048B\x03\x02\x02\x02\u0447\u0448\x07X\x02" +
		"\x02\u0448\u048B\x05\x04\x03\x02\u0449\u044F\x07\xE6\x02\x02\u044A\u0450" +
		"\x07\x05\x02\x02\u044B\u044C\x05\x9CO\x02\u044C\u044D\x07\u012B\x02\x02" +
		"\u044D\u044E\x05h5\x02\u044E\u0450\x03\x02\x02\x02\u044F\u044A\x03\x02" +
		"\x02\x02\u044F\u044B\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450" +
		"\u048B\x03\x02\x02\x02\u0451\u0452\x07\u013A\x02\x02\u0452\u0453\x07\xEB" +
		"\x02\x02\u0453\u045D\x07\u013B\x02\x02\u0454\u0456\x05r:\x02\u0455\u0454" +
		"\x03\x02\x02\x02\u0455\u0456\x03\x02\x02\x02\u0456\u045E\x03\x02\x02\x02" +
		"\u0457\u045A\x05r:\x02\u0458\u0459\x07\u0139\x02\x02\u0459\u045B\x05h" +
		"5\x02\u045A\u0458\x03\x02\x02\x02\u045A\u045B\x03\x02\x02\x02\u045B\u045E" +
		"\x03\x02\x02\x02\u045C\u045E\x05h5\x02\u045D\u0455\x03\x02\x02\x02\u045D" +
		"\u0457\x03\x02\x02\x02\u045D\u045C\x03\x02\x02\x02\u045E\u045F\x03\x02" +
		"\x02\x02\u045F\u048B\x07\u013C\x02\x02\u0460\u0461\x07\x85\x02\x02\u0461" +
		"\u0462\x07\x99\x02\x02\u0462\u048B\x05\x98M\x02\u0463\u0464\x07\x95\x02" +
		"\x02\u0464\u0465\x07=\x02\x02\u0465\u0466\x07|\x02\x02\u0466\u0468\x07" +
		"\u0143\x02\x02\u0467\u0469\x07\xB9\x02\x02\u0468\u0467\x03\x02\x02\x02" +
		"\u0468\u0469\x03\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046A\u046B\x07" +
		"\x82\x02\x02\u046B\u046C\x07\xF5\x02\x02\u046C\u0476\x05\x98M\x02\u046D" +
		"\u046E\x07\xBA\x02\x02\u046E\u046F\x07\u013B\x02\x02\u046F\u0472\x05h" +
		"5\x02\u0470\u0471\x07\u0139\x02\x02\u0471\u0473\x05h5\x02\u0472\u0470" +
		"\x03\x02\x02\x02\u0472\u0473\x03\x02\x02\x02\u0473\u0474\x03\x02\x02\x02" +
		"\u0474\u0475\x07\u013C\x02\x02\u0475\u0477\x03\x02\x02\x02\u0476\u046D" +
		"\x03\x02\x02\x02\u0476\u0477\x03\x02\x02\x02\u0477\u048B\x03\x02\x02\x02" +
		"\u0478\u0479\x07\xD2\x02\x02\u0479\u0486\x05\x98M\x02\u047A\u047B\x07" +
		"\xBA\x02\x02\u047B\u047C\x07\u013B\x02\x02\u047C\u0481\x05h5\x02\u047D" +
		"\u047E\x07\u0139\x02\x02\u047E\u0480\x05h5\x02\u047F\u047D\x03\x02\x02" +
		"\x02\u0480\u0483\x03\x02\x02\x02\u0481\u0482\x03\x02\x02\x02\u0481\u047F" +
		"\x03\x02\x02\x02\u0482\u0484\x03\x02\x02\x02\u0483\u0481\x03\x02\x02\x02" +
		"\u0484\u0485\x07\u013C\x02\x02\u0485\u0487\x03\x02\x02\x02\u0486\u047A" +
		"\x03\x02\x02\x02\u0486\u0487\x03\x02\x02\x02\u0487\u048B\x03\x02\x02\x02" +
		"\u0488\u0489\x07\xD2\x02\x02\u0489\u048B\x07\x12\x02\x02\u048A\xAD\x03" +
		"\x02\x02\x02\u048A\xAE\x03\x02\x02\x02\u048A\xB0\x03\x02\x02\x02\u048A" +
		"\xC0\x03\x02\x02\x02\u048A\xC8\x03\x02\x02\x02\u048A\xD2\x03\x02\x02\x02" +
		"\u048A\xF9\x03\x02\x02\x02\u048A\u010B\x03\x02\x02\x02\u048A\u0144\x03" +
		"\x02\x02\x02\u048A\u014B\x03\x02\x02\x02\u048A\u0157\x03\x02\x02\x02\u048A" +
		"\u016C\x03\x02\x02\x02\u048A\u017C\x03\x02\x02\x02\u048A\u0183\x03\x02" +
		"\x02\x02\u048A\u018C\x03\x02\x02\x02\u048A\u0194\x03\x02\x02\x02\u048A" +
		"\u01A2\x03\x02\x02\x02\u048A\u01AE\x03\x02\x02\x02\u048A\u01C0\x03\x02" +
		"\x02\x02\u048A\u01CD\x03\x02\x02\x02\u048A\u01DA\x03\x02\x02\x02\u048A" +
		"\u01E6\x03\x02\x02\x02\u048A\u01EC\x03\x02\x02\x02\u048A\u0201\x03\x02" +
		"\x02\x02\u048A\u0215\x03\x02\x02\x02\u048A\u0229\x03\x02\x02\x02\u048A" +
		"\u0233\x03\x02\x02\x02\u048A\u023C\x03\x02\x02\x02\u048A\u0252\x03\x02" +
		"\x02\x02\u048A\u025B\x03\x02\x02\x02\u048A\u0262\x03\x02\x02\x02\u048A" +
		"\u026A\x03\x02\x02\x02\u048A\u0271\x03\x02\x02\x02\u048A\u0278\x03\x02" +
		"\x02\x02\u048A\u027F\x03\x02\x02\x02\u048A\u0287\x03\x02\x02\x02\u048A" +
		"\u029B\x03\x02\x02\x02\u048A\u02A3\x03\x02\x02\x02\u048A\u02A6\x03\x02" +
		"\x02\x02\u048A\u02AD\x03\x02\x02\x02\u048A\u02CB\x03\x02\x02\x02\u048A" +
		"\u02D9\x03\x02\x02\x02\u048A\u0319\x03\x02\x02\x02\u048A\u031C\x03\x02" +
		"\x02\x02\u048A\u0334\x03\x02\x02\x02\u048A\u0337\x03\x02\x02\x02\u048A" +
		"\u033A\x03\x02\x02\x02\u048A\u0341\x03\x02\x02\x02\u048A\u034B\x03\x02" +
		"\x02\x02\u048A\u0352\x03\x02\x02\x02\u048A\u0367\x03\x02\x02\x02\u048A" +
		"\u0388\x03\x02\x02\x02\u048A\u0391\x03\x02\x02\x02\u048A\u03A6\x03\x02" +
		"\x02\x02\u048A\u03B9\x03\x02\x02\x02\u048A\u03CA\x03\x02\x02\x02\u048A" +
		"\u03D9\x03\x02\x02\x02\u048A\u03EC\x03\x02\x02\x02\u048A\u0402\x03\x02" +
		"\x02\x02\u048A\u0406\x03\x02\x02\x02\u048A\u040A\x03\x02\x02\x02\u048A" +
		"\u040E\x03\x02\x02\x02\u048A\u0412\x03\x02\x02\x02\u048A\u0418\x03\x02" +
		"\x02\x02\u048A\u0427\x03\x02\x02\x02\u048A\u042C\x03\x02\x02\x02\u048A" +
		"\u0431\x03\x02\x02\x02\u048A\u0435\x03\x02\x02\x02\u048A\u043E\x03\x02" +
		"\x02\x02\u048A\u0447\x03\x02\x02\x02\u048A\u0449\x03\x02\x02\x02\u048A" +
		"\u0451\x03\x02\x02\x02\u048A\u0460\x03\x02\x02\x02\u048A\u0463\x03\x02" +
		"\x02\x02\u048A\u0478\x03\x02\x02\x02\u048A\u0488\x03\x02\x02\x02\u048B" +
		"\x05\x03\x02\x02\x02\u048C\u048D\x07\x1B\x02\x02\u048D\u048E\x07#\x02" +
		"\x02\u048E\u0490\x05d3\x02\u048F\u048C\x03\x02\x02\x02\u048F\u0490\x03" +
		"\x02\x02\x02\u0490\u0493\x03\x02\x02\x02\u0491\u0492\x07-\x02\x02\u0492" +
		"\u0494\x05r:\x02\u0493\u0491\x03\x02\x02\x02\u0493\u0494\x03\x02\x02\x02" +
		"\u0494\u0498\x03\x02\x02\x02\u0495\u0496\x07\xDA\x02\x02\u0496\u0497\x07" +
		"f\x02\x02\u0497\u0499\x05> \x02\u0498\u0495\x03\x02\x02\x02\u0498\u0499" +
		"\x03\x02\x02\x02\u0499\u049D\x03\x02\x02\x02\u049A\u049B\x07\u0119\x02" +
		"\x02\u049B\u049C\x07\xE3\x02\x02\u049C\u049E\x058\x1D\x02\u049D\u049A" +
		"\x03\x02\x02\x02\u049D\u049E\x03\x02\x02\x02\u049E\u04A2\x03\x02\x02\x02" +
		"\u049F\u04A0\x07\x1F\x02\x02\u04A0\u04A1\x07\x0E\x02\x02\u04A1\u04A3\x05" +
		"$\x13\x02\u04A2\u049F\x03\x02\x02\x02\u04A2\u04A3\x03\x02\x02\x02\u04A3" +
		"\u04A6\x03\x02\x02\x02\u04A4\u04A5\x07 \x02\x02\u04A5\u04A7\x05r:\x02" +
		"\u04A6\u04A4\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02\u04A7\u04B2\x03" +
		"\x02\x02\x02\u04A8\u04A9\x07(\x02\x02\u04A9\u04AA\x07x\x02\x02\u04AA\u04AF" +
		"\x05\x98M\x02\u04AB\u04AC\x07\u0119\x02\x02\u04AC\u04AD\x07\xC2\x02\x02" +
		"\u04AD\u04AE\x07\u012B\x02\x02\u04AE\u04B0\x07\u0146\x02\x02\u04AF\u04AB" +
		"\x03\x02\x02\x02\u04AF\u04B0\x03\x02\x02\x02\u04B0\u04B3\x03\x02\x02\x02" +
		"\u04B1\u04B3\x07\u0104\x02\x02\u04B2\u04A8\x03\x02\x02\x02\u04B2\u04B1" +
		"\x03\x02\x02\x02\u04B2\u04B3\x03\x02\x02\x02\u04B3\u04B6\x03\x02\x02\x02" +
		"\u04B4\u04B5\x07!\x02\x02\u04B5\u04B7\x058\x1D\x02\u04B6\u04B4\x03\x02" +
		"\x02\x02\u04B6\u04B7\x03\x02\x02\x02\u04B7\x07\x03\x02\x02\x02\u04B8\u04BD" +
		"\x05\n\x06\x02\u04B9\u04BA\x07\u0139\x02\x02\u04BA\u04BC\x05\n\x06\x02" +
		"\u04BB\u04B9\x03\x02\x02\x02\u04BC\u04BF\x03\x02\x02\x02\u04BD\u04BB\x03" +
		"\x02\x02\x02\u04BD\u04BE\x03\x02\x02\x02\u04BE\t\x03\x02\x02\x02\u04BF" +
		"\u04BD\x03\x02\x02\x02\u04C0\u04C1\x05\x98M\x02\u04C1\u04C2\x07\u012B" +
		"\x02\x02\u04C2\u04C3\x05h5\x02\u04C3\v\x03\x02\x02\x02\u04C4\u04C5\x07" +
		"\u013B\x02\x02\u04C5\u04C8\x05\x9CO\x02\u04C6\u04C7\x07-\x02\x02\u04C7" +
		"\u04C9\x05r:\x02\u04C8\u04C6\x03\x02\x02\x02\u04C8\u04C9\x03\x02\x02\x02" +
		"\u04C9\u04D2\x03\x02\x02\x02\u04CA\u04CB\x07\u0139\x02\x02\u04CB\u04CE" +
		"\x05\x9CO\x02\u04CC\u04CD\x07-\x02\x02\u04CD\u04CF\x05r:\x02\u04CE\u04CC" +
		"\x03\x02\x02\x02\u04CE\u04CF\x03\x02\x02\x02\u04CF\u04D1\x03\x02\x02\x02" +
		"\u04D0\u04CA\x03\x02\x02\x02\u04D1\u04D4\x03\x02\x02\x02\u04D2\u04D0\x03" +
		"\x02\x02\x02\u04D2\u04D3\x03\x02\x02\x02\u04D3\u04D5\x03\x02\x02\x02\u04D4" +
		"\u04D2\x03\x02\x02\x02\u04D5\u04D6\x07\u013C\x02\x02\u04D6\r\x03\x02\x02" +
		"\x02\u04D7\u04D9\x05\x10\t\x02\u04D8\u04D7\x03\x02\x02\x02\u04D8\u04D9" +
		"\x03\x02\x02\x02\u04D9\u04DA\x03\x02\x02\x02\u04DA\u04DB\x05B\"\x02\u04DB" +
		"\x0F\x03\x02\x02\x02\u04DC\u04DD\x07\u0119\x02\x02\u04DD\u04E2\x05R*\x02" +
		"\u04DE\u04DF\x07\u0139\x02\x02\u04DF\u04E1\x05R*\x02\u04E0\u04DE\x03\x02" +
		"\x02\x02\u04E1\u04E4\x03\x02\x02\x02\u04E2\u04E0\x03\x02\x02\x02\u04E2" +
		"\u04E3\x03\x02\x02\x02\u04E3\x11\x03\x02\x02\x02\u04E4\u04E2\x03\x02\x02" +
		"\x02\u04E5\u04E6\x07\xC1\x02\x02\u04E6\u04E7\x07\x8C\x02\x02\u04E7\u04E9" +
		"\x05d3\x02\u04E8\u04EA\x07H\x02\x02\u04E9\u04E8\x03\x02\x02\x02\u04E9" +
		"\u04EA\x03\x02\x02\x02\u04EA\u04EE\x03\x02\x02\x02\u04EB\u04EF\x07\u0125" +
		"\x02\x02\u04EC\u04ED\x07\u0139\x02\x02\u04ED\u04EF\x07\u0125\x02\x02\u04EE" +
		"\u04EB\x03\x02\x02\x02\u04EE\u04EC\x03\x02\x02\x02\u04EE\u04EF\x03\x02" +
		"\x02\x02\u04EF\u04F3\x03\x02\x02\x02\u04F0\u04F4\x07\u0126\x02\x02\u04F1" +
		"\u04F2\x07\u0139\x02\x02\u04F2\u04F4\x07\u0126\x02\x02\u04F3\u04F0\x03" +
		"\x02\x02\x02\u04F3\u04F1\x03\x02\x02\x02\u04F3\u04F4\x03\x02\x02\x02\u04F4" +
		"\u0501\x03\x02\x02\x02\u04F5\u04F6\x07\u0139\x02\x02\u04F6\u04F9\x05\x14" +
		"\v\x02\u04F7\u04F9\x05\x14\v\x02\u04F8\u04F5\x03\x02\x02\x02\u04F8\u04F7" +
		"\x03\x02\x02\x02\u04F9\u04FE\x03\x02\x02\x02\u04FA\u04FB\x07\u0139\x02" +
		"\x02\u04FB\u04FD\x05\x14\v\x02\u04FC\u04FA\x03\x02\x02\x02\u04FD\u0500" +
		"\x03\x02\x02\x02\u04FE\u04FF\x03\x02\x02\x02\u04FE\u04FC\x03\x02\x02\x02" +
		"\u04FF\u0502\x03\x02\x02\x02\u0500\u04FE\x03\x02\x02\x02\u0501\u04F8\x03" +
		"\x02\x02\x02\u0501\u0502\x03\x02\x02\x02\u0502\x13\x03\x02\x02\x02\u0503" +
		"\u0504\x07h\x02\x02\u0504\u0505\x07\x8C\x02\x02\u0505\u0506\x05d3\x02" +
		"\u0506\u0507\x07\u0124\x02\x02\u0507\u0508\x05\x98M\x02\u0508\u050A\x05" +
		"d3\x02\u0509\u050B\x07H\x02\x02\u050A\u0509\x03\x02\x02\x02\u050A\u050B" +
		"\x03\x02\x02\x02\u050B\u050D\x03\x02\x02\x02\u050C\u050E\x07\u0125\x02" +
		"\x02\u050D\u050C\x03\x02\x02\x02\u050D\u050E\x03\x02\x02\x02\u050E\u0510" +
		"\x03\x02\x02\x02\u050F\u0511\x07\u0126\x02\x02\u0510\u050F\x03\x02\x02" +
		"\x02\u0510\u0511\x03\x02\x02\x02\u0511\x15\x03\x02\x02\x02\u0512\u0513" +
		"\x05\x9CO\x02\u0513\u0516\x05\x80A\x02\u0514\u0515\x07-\x02\x02\u0515" +
		"\u0517\x05r:\x02\u0516\u0514\x03\x02\x02\x02\u0516\u0517\x03\x02\x02\x02" +
		"\u0517\x17\x03\x02\x02\x02\u0518\u0519\x05\x1A\x0E\x02\u0519\x19\x03\x02" +
		"\x02\x02\u051A\u051B\x05\x9CO\x02\u051B\u0523\x05\x80A\x02\u051C\u0520" +
		"\x05\x1E\x10\x02\u051D\u051F\x05\x1E\x10\x02\u051E\u051D\x03\x02\x02\x02" +
		"\u051F\u0522\x03\x02\x02\x02\u0520\u0521\x03\x02\x02\x02\u0520\u051E\x03" +
		"\x02\x02\x02\u0521\u0524\x03\x02\x02\x02\u0522\u0520\x03\x02\x02\x02\u0523" +
		"\u051C\x03\x02\x02\x02\u0523\u0524\x03\x02\x02\x02\u0524\u0527\x03\x02" +
		"\x02\x02\u0525\u0526\x07-\x02\x02\u0526\u0528\x05r:\x02\u0527\u0525\x03" +
		"\x02\x02\x02\u0527\u0528\x03\x02\x02\x02\u0528\u052B\x03\x02\x02\x02\u0529" +
		"\u052A\x07\xC1\x02\x02\u052A\u052C\x07\x8C\x02\x02\u052B\u0529\x03\x02" +
		"\x02\x02\u052B\u052C\x03\x02\x02\x02\u052C\x1B\x03\x02\x02\x02\u052D\u052E" +
		"\x05\x9CO\x02\u052E\u0531\x05\x80A\x02\u052F\u0530\x07-\x02\x02\u0530" +
		"\u0532\x05r:\x02\u0531\u052F\x03\x02\x02\x02\u0531\u0532\x03\x02\x02\x02" +
		"\u0532\u053A\x03\x02\x02\x02\u0533\u0537\x05\x1E\x10\x02\u0534\u0536\x05" +
		"\x1E\x10\x02\u0535\u0534\x03\x02\x02\x02\u0536\u0539\x03\x02\x02\x02\u0537" +
		"\u0538\x03\x02\x02\x02\u0537\u0535\x03\x02\x02\x02\u0538\u053B\x03\x02" +
		"\x02\x02\u0539\u0537\x03\x02\x02\x02\u053A\u0533\x03\x02\x02\x02\u053A" +
		"\u053B\x03\x02\x02\x02\u053B\x1D\x03\x02\x02\x02\u053C\u053E\x07\xAA\x02" +
		"\x02\u053D\u053C\x03\x02\x02\x02\u053D\u053E\x03\x02\x02\x02\u053E\u053F" +
		"\x03\x02\x02\x02\u053F\u0542\x07\xAB\x02\x02\u0540\u0542\x05 \x11\x02" +
		"\u0541\u053D\x03\x02\x02\x02\u0541\u0540\x03\x02\x02\x02\u0542\x1F\x03" +
		"\x02\x02\x02\u0543\u0544\x07P\x02\x02\u0544\u054C\x05h5\x02\u0545\u0546" +
		"\x070\x02\x02\u0546\u054C\x05h5\x02\u0547\u0548\x07F\x02\x02\u0548\u054C" +
		"\x05h5\x02\u0549\u054A\x07\x15\x02\x02\u054A\u054C\x05\x9EP\x02\u054B" +
		"\u0543\x03\x02\x02\x02\u054B\u0545\x03\x02\x02\x02\u054B\u0547\x03\x02" +
		"\x02\x02\u054B\u0549\x03\x02\x02\x02\u054C!\x03\x02\x02\x02\u054D\u054E" +
		"\t\r\x02\x02\u054E#\x03\x02\x02\x02\u054F\u0550\t\x0E\x02\x02\u0550%\x03" +
		"\x02\x02\x02\u0551\u0556\x05(\x15\x02\u0552\u0553\x07\u0139\x02\x02\u0553" +
		"\u0555\x05(\x15\x02\u0554\u0552\x03\x02\x02\x02\u0555\u0558\x03\x02\x02" +
		"\x02\u0556\u0557\x03\x02\x02\x02\u0556\u0554\x03\x02\x02\x02\u0557\u055B" +
		"\x03\x02\x02\x02\u0558\u0556\x03\x02\x02\x02\u0559\u055A\x07\u0139\x02" +
		"\x02\u055A\u055C\x05*\x16\x02\u055B\u0559\x03\x02\x02\x02\u055B\u055C" +
		"\x03\x02\x02\x02\u055C\u055F\x03\x02\x02\x02\u055D\u055F";
	private static readonly _serializedATNSegment3: string =
		"\x05*\x16\x02\u055E\u0551\x03\x02\x02\x02\u055E\u055D\x03\x02\x02\x02" +
		"\u055F\'\x03\x02\x02\x02\u0560\u0562\x07s\x02\x02\u0561\u0563\x05d3\x02" +
		"\u0562\u0561\x03\x02\x02\x02\u0562\u0563\x03\x02\x02\x02\u0563\u0564\x03" +
		"\x02\x02\x02\u0564\u0565\x07\xBB\x02\x02\u0565\u0566\x05\x9EP\x02\u0566" +
		")\x03\x02\x02\x02\u0567\u0569\x07\xC5\x02\x02\u0568\u056A\x05d3\x02\u0569" +
		"\u0568\x03\x02\x02\x02\u0569\u056A\x03\x02\x02\x02\u056A\u056B\x03\x02" +
		"\x02\x02\u056B\u056C\x07\u013B\x02\x02\u056C\u056D\x07\xBA\x02\x02\u056D" +
		"\u0573\x05,\x17\x02\u056E\u056F\x07\u0139\x02\x02\u056F\u0570\x07\xBA" +
		"\x02\x02\u0570\u0572\x05,\x17\x02\u0571\u056E\x03\x02\x02\x02\u0572\u0575" +
		"\x03\x02\x02\x02\u0573\u0574\x03\x02\x02\x02\u0573\u0571\x03\x02\x02\x02" +
		"\u0574\u0576\x03\x02\x02\x02\u0575\u0573\x03\x02\x02\x02\u0576\u0577\x07" +
		"\u013C\x02\x02\u0577+\x03\x02\x02\x02\u0578\u0579\x07\u0112\x02\x02\u0579" +
		"\u057A\x052\x1A\x02\u057A\u057B\x05h5\x02\u057B\u0583\x03\x02\x02\x02" +
		"\u057C\u057D\x05h5\x02\u057D\u057E\x050\x19\x02\u057E\u057F\x07\u0113" +
		"\x02\x02\u057F\u0580\x050\x19\x02\u0580\u0581\x05h5\x02\u0581\u0583\x03" +
		"\x02\x02\x02\u0582\u0578\x03\x02\x02\x02\u0582\u057C\x03\x02\x02\x02\u0583" +
		"-\x03\x02\x02\x02\u0584\u0585\x07(\x02\x02\u0585\u0586\x07x\x02\x02\u0586" +
		"\u058B\x05\x9CO\x02\u0587\u0588\x07\u0119\x02\x02\u0588\u0589\x07\xC2" +
		"\x02\x02\u0589\u058A\x07\u012B\x02\x02\u058A\u058C\x05\x9EP\x02\u058B" +
		"\u0587\x03\x02\x02\x02\u058B\u058C\x03\x02\x02\x02\u058C\u058F\x03\x02" +
		"\x02\x02\u058D\u058F\x07\u0104\x02\x02\u058E\u0584\x03\x02\x02\x02\u058E" +
		"\u058D\x03\x02\x02\x02\u058F/\x03\x02\x02\x02\u0590\u0596\x03\x02\x02" +
		"\x02\u0591\u0596\x07\u012D\x02\x02\u0592\u0596\x07\u012E\x02\x02\u0593" +
		"\u0596\x07\u012F\x02\x02\u0594\u0596\x07\u0130\x02\x02\u0595\u0590\x03" +
		"\x02\x02\x02\u0595\u0591\x03\x02\x02\x02\u0595\u0592\x03\x02\x02\x02\u0595" +
		"\u0593\x03\x02\x02\x02\u0595\u0594\x03\x02\x02\x02\u05961\x03\x02\x02" +
		"\x02\u0597\u05A0\x07\u012B\x02\x02\u0598\u05A0\x07\u012C\x02\x02\u0599" +
		"\u05A0\x07\x92\x02\x02\u059A\u05A0\x07\xD4\x02\x02\u059B\u05A0\x07\xD3" +
		"\x02\x02\u059C\u05A0\x07\x14\x02\x02\u059D\u05A0\x07x\x02\x02\u059E\u05A0" +
		"\x050\x19\x02\u059F\u0597\x03\x02\x02\x02\u059F\u0598\x03\x02\x02\x02" +
		"\u059F\u0599\x03\x02\x02\x02\u059F\u059A\x03\x02\x02\x02\u059F\u059B\x03" +
		"\x02\x02\x02\u059F\u059C\x03\x02\x02\x02\u059F\u059D\x03\x02\x02\x02\u059F" +
		"\u059E\x03\x02\x02\x02\u05A03\x03\x02\x02\x02\u05A1\u05A2\x07\x92\x02" +
		"\x02\u05A2\u05A5\x05\x98M\x02\u05A3\u05A4\t\x0F\x02\x02\u05A4\u05A6\x07" +
		"\xC4\x02\x02\u05A5\u05A3\x03\x02\x02\x02\u05A5\u05A6\x03\x02\x02\x02\u05A6" +
		"5\x03\x02\x02\x02\u05A7\u05A8\t\x10\x02\x02\u05A87\x03\x02\x02\x02\u05A9" +
		"\u05AA\x07\u013B\x02\x02\u05AA\u05AF\x05@!\x02\u05AB\u05AC\x07\u0139\x02" +
		"\x02\u05AC\u05AE\x05@!\x02\u05AD\u05AB\x03\x02\x02\x02\u05AE\u05B1\x03" +
		"\x02\x02\x02\u05AF\u05AD\x03\x02\x02\x02\u05AF\u05B0\x03\x02\x02\x02\u05B0" +
		"\u05B2\x03\x02\x02\x02\u05B1\u05AF\x03\x02\x02\x02\u05B2\u05B3\x07\u013C" +
		"\x02\x02\u05B39\x03\x02\x02\x02\u05B4\u05B5\x07\u013B\x02\x02\u05B5\u05BA" +
		"\x05\x16\f\x02\u05B6\u05B7\x07\u0139\x02\x02\u05B7\u05B9\x05\x16\f\x02" +
		"\u05B8\u05B6\x03\x02\x02\x02\u05B9\u05BC\x03\x02\x02\x02\u05BA\u05BB\x03" +
		"\x02\x02\x02\u05BA\u05B8\x03\x02\x02\x02\u05BB\u05BD\x03\x02\x02\x02\u05BC" +
		"\u05BA\x03\x02\x02\x02\u05BD\u05BE\x07\u013C\x02\x02\u05BE;\x03\x02\x02" +
		"\x02\u05BF\u05C4\x05h5\x02\u05C0\u05C1\x07\u0139\x02\x02\u05C1\u05C3\x05" +
		"h5\x02\u05C2\u05C0\x03\x02\x02\x02\u05C3\u05C6\x03\x02\x02\x02\u05C4\u05C2" +
		"\x03\x02\x02\x02\u05C4\u05C5\x03\x02\x02\x02\u05C5=\x03\x02\x02\x02\u05C6" +
		"\u05C4\x03\x02\x02\x02\u05C7\u05D1\x07G\x02\x02\u05C8\u05C9\x07]\x02\x02" +
		"\u05C9\u05CA\x07\xF9\x02\x02\u05CA\u05CB\x07#\x02\x02\u05CB\u05CF\x05" +
		"r:\x02\u05CC\u05CD\x07S\x02\x02\u05CD\u05CE\x07#\x02\x02\u05CE\u05D0\x05" +
		"r:\x02\u05CF\u05CC\x03\x02\x02\x02\u05CF\u05D0\x03\x02\x02\x02\u05D0\u05D2" +
		"\x03\x02\x02\x02\u05D1\u05C8\x03\x02\x02\x02\u05D1\u05D2\x03\x02\x02\x02" +
		"\u05D2\u05D7\x03\x02\x02\x02\u05D3\u05D4\x07\x94\x02\x02\u05D4\u05D5\x07" +
		"\xF9\x02\x02\u05D5\u05D6\x07#\x02\x02\u05D6\u05D8\x05r:\x02\u05D7\u05D3" +
		"\x03\x02\x02\x02\u05D7\u05D8\x03\x02\x02\x02\u05D8?\x03\x02\x02\x02\u05D9" +
		"\u05DC\x05\x9CO\x02\u05DA\u05DB\x07\u012B\x02\x02\u05DB\u05DD\x05h5\x02" +
		"\u05DC\u05DA\x03\x02\x02\x02\u05DC\u05DD\x03\x02\x02\x02\u05DDA\x03\x02" +
		"\x02\x02\u05DE\u05E9\x05D#\x02\u05DF\u05E0\x07\xB3\x02\x02\u05E0\u05E1" +
		"\x07#\x02\x02\u05E1\u05E6\x05H%\x02\u05E2\u05E3\x07\u0139\x02\x02\u05E3" +
		"\u05E5\x05H%\x02\u05E4\u05E2\x03\x02\x02\x02\u05E5\u05E8\x03\x02\x02\x02" +
		"\u05E6\u05E4\x03\x02\x02\x02\u05E6\u05E7\x03\x02\x02\x02\u05E7\u05EA\x03" +
		"\x02\x02\x02\u05E8\u05E6\x03\x02\x02\x02\u05E9\u05DF\x03\x02\x02\x02\u05E9" +
		"\u05EA\x03\x02\x02\x02\u05EA\u05F1\x03\x02\x02\x02\u05EB\u05EC\x07\x93" +
		"\x02\x02\u05EC\u05EF\x05h5\x02\u05ED\u05EE\x07\xAE\x02\x02\u05EE\u05F0" +
		"\x07\u0146\x02\x02\u05EF\u05ED\x03\x02\x02\x02\u05EF\u05F0\x03\x02\x02" +
		"\x02\u05F0\u05F2\x03\x02\x02\x02\u05F1\u05EB\x03\x02\x02\x02\u05F1\u05F2" +
		"\x03\x02\x02\x02\u05F2C\x03\x02\x02\x02\u05F3\u05F4\b#\x01\x02\u05F4\u05F5" +
		"\x05F$\x02\u05F5\u0604\x03\x02\x02\x02\u05F6\u05F7\f\x04\x02\x02\u05F7" +
		"\u05F9\x07\x7F\x02\x02\u05F8\u05FA\x05T+\x02\u05F9\u05F8\x03\x02\x02\x02" +
		"\u05F9\u05FA\x03\x02\x02\x02\u05FA\u05FB\x03\x02\x02\x02\u05FB\u0603\x05" +
		"D#\x05\u05FC\u05FD\f\x03\x02\x02\u05FD\u05FF\t\x11\x02\x02\u05FE\u0600" +
		"\x05T+\x02\u05FF\u05FE\x03\x02\x02\x02\u05FF\u0600\x03\x02\x02\x02\u0600" +
		"\u0601\x03\x02\x02\x02\u0601\u0603\x05D#\x04\u0602\u05F6\x03\x02\x02\x02" +
		"\u0602\u05FC\x03\x02\x02\x02\u0603\u0606\x03\x02\x02\x02\u0604\u0602\x03" +
		"\x02\x02\x02\u0604\u0605\x03\x02\x02\x02\u0605E\x03\x02\x02\x02\u0606" +
		"\u0604\x03\x02\x02\x02\u0607\u0618\x05J&\x02\u0608\u0609\x07\xF5\x02\x02" +
		"\u0609\u0618\x05\x98M\x02\u060A\u060B\x07\u0113\x02\x02\u060B\u0610\x05" +
		"h5\x02\u060C\u060D\x07\u0139\x02\x02\u060D\u060F\x05h5\x02\u060E\u060C" +
		"\x03\x02\x02\x02\u060F\u0612\x03\x02\x02\x02\u0610\u060E\x03\x02\x02\x02" +
		"\u0610\u0611\x03\x02\x02\x02\u0611\u0618\x03\x02\x02\x02\u0612\u0610\x03" +
		"\x02\x02\x02\u0613\u0614\x07\u013B\x02\x02\u0614\u0615\x05B\"\x02\u0615" +
		"\u0616\x07\u013C\x02\x02\u0616\u0618\x03\x02\x02\x02\u0617\u0607\x03\x02" +
		"\x02\x02\u0617\u0608\x03\x02\x02\x02\u0617\u060A\x03\x02\x02\x02\u0617" +
		"\u0613\x03\x02\x02\x02\u0618G\x03\x02\x02\x02\u0619\u061B\x05h5\x02\u061A" +
		"\u061C\t\x12\x02\x02\u061B\u061A\x03\x02\x02\x02\u061B\u061C\x03\x02\x02" +
		"\x02\u061C\u061F\x03\x02\x02\x02\u061D\u061E\x07\xAD\x02\x02\u061E\u0620" +
		"\t\x13\x02\x02\u061F\u061D\x03\x02\x02\x02\u061F\u0620\x03\x02\x02\x02" +
		"\u0620I\x03\x02\x02\x02\u0621\u0623\x07\xE1\x02\x02\u0622\u0624\x05T+" +
		"\x02\u0623\u0622\x03\x02\x02\x02\u0623\u0624\x03\x02\x02\x02\u0624\u0626" +
		"\x03\x02\x02\x02\u0625\u0627\x07\xF0\x02\x02\u0626\u0625\x03\x02\x02\x02" +
		"\u0626\u0627\x03\x02\x02\x02\u0627\u0628\x03\x02\x02\x02\u0628\u062D\x05" +
		"V,\x02\u0629\u062A\x07\u0139\x02\x02\u062A\u062C\x05V,\x02\u062B\u0629" +
		"\x03\x02\x02\x02\u062C\u062F\x03\x02\x02\x02\u062D\u062B\x03\x02\x02\x02" +
		"\u062D\u062E\x03\x02\x02\x02\u062E\u0639\x03\x02\x02\x02\u062F\u062D\x03" +
		"\x02\x02\x02\u0630\u0631\x07i\x02\x02\u0631\u0636\x05X-\x02\u0632\u0633" +
		"\x07\u0139\x02\x02\u0633\u0635\x05X-\x02\u0634\u0632\x03\x02\x02\x02\u0635" +
		"\u0638\x03\x02\x02\x02\u0636\u0634\x03\x02\x02\x02\u0636\u0637\x03\x02" +
		"\x02\x02\u0637\u063A\x03\x02\x02\x02\u0638\u0636\x03\x02\x02\x02\u0639" +
		"\u0630\x03\x02\x02\x02\u0639\u063A\x03\x02\x02\x02\u063A\u063D\x03\x02" +
		"\x02\x02\u063B\u063C\x07\u0118\x02\x02\u063C\u063E\x05j6\x02\u063D\u063B" +
		"\x03\x02\x02\x02\u063D\u063E\x03\x02\x02\x02\u063E\u0642\x03\x02\x02\x02" +
		"\u063F\u0640\x07q\x02\x02\u0640\u0641\x07#\x02\x02\u0641\u0643\x05L\'" +
		"\x02\u0642\u063F\x03\x02\x02\x02\u0642\u0643\x03\x02\x02\x02\u0643\u0646" +
		"\x03\x02\x02\x02\u0644\u0645\x07t\x02\x02\u0645\u0647\x05j6\x02\u0646" +
		"\u0644\x03\x02\x02\x02\u0646\u0647\x03\x02\x02\x02\u0647K\x03\x02\x02" +
		"\x02\u0648\u064A\x05T+\x02\u0649\u0648\x03\x02\x02\x02\u0649\u064A\x03" +
		"\x02\x02\x02\u064A\u064B\x03\x02\x02\x02\u064B\u0650\x05N(\x02\u064C\u064D" +
		"\x07\u0139\x02\x02\u064D\u064F\x05N(\x02\u064E\u064C\x03\x02\x02\x02\u064F" +
		"\u0652\x03\x02\x02\x02\u0650\u064E\x03\x02\x02\x02\u0650\u0651\x03\x02" +
		"\x02\x02\u0651M\x03\x02\x02\x02\u0652\u0650\x03\x02\x02\x02\u0653\u0654" +
		"\x05P)\x02\u0654O\x03\x02\x02\x02\u0655\u065E\x07\u013B\x02\x02\u0656" +
		"\u065B\x05h5\x02\u0657\u0658\x07\u0139\x02\x02\u0658\u065A\x05h5\x02\u0659" +
		"\u0657\x03\x02\x02\x02\u065A\u065D\x03\x02\x02\x02\u065B\u0659\x03\x02" +
		"\x02\x02\u065B\u065C\x03\x02\x02\x02\u065C\u065F\x03\x02\x02\x02\u065D" +
		"\u065B\x03\x02\x02\x02\u065E\u0656\x03\x02\x02\x02\u065E\u065F\x03\x02" +
		"\x02\x02\u065F\u0660\x03\x02\x02\x02\u0660\u0663\x07\u013C\x02\x02\u0661" +
		"\u0663\x05h5\x02\u0662\u0655\x03\x02\x02\x02\u0662\u0661\x03\x02\x02\x02" +
		"\u0663Q\x03\x02\x02\x02\u0664\u0666\x05\x9CO\x02\u0665\u0667\x05d3\x02" +
		"\u0666\u0665\x03\x02\x02\x02\u0666\u0667\x03\x02\x02\x02\u0667\u0668\x03" +
		"\x02\x02\x02\u0668\u0669\x07\x0E\x02\x02\u0669\u066A\x07\u013B\x02\x02" +
		"\u066A\u066B\x05\x0E\b\x02\u066B\u066C\x07\u013C\x02\x02\u066CS\x03\x02" +
		"\x02\x02\u066D\u066E\t\x14\x02\x02\u066EU\x03\x02\x02\x02\u066F\u0674" +
		"\x05h5\x02\u0670\u0672\x07\x0E\x02\x02\u0671\u0670\x03\x02\x02\x02\u0671" +
		"\u0672\x03\x02\x02\x02\u0672\u0673\x03\x02\x02\x02\u0673\u0675\x05\x9C" +
		"O\x02\u0674\u0671\x03\x02\x02\x02\u0674\u0675\x03\x02\x02\x02\u0675\u067C" +
		"\x03\x02\x02\x02\u0676\u0677\x05\x98M\x02\u0677\u0678\x07\u0137\x02\x02" +
		"\u0678\u0679\x07\u0133\x02\x02\u0679\u067C\x03\x02\x02\x02\u067A\u067C" +
		"\x07\u0133\x02\x02\u067B\u066F\x03\x02\x02\x02\u067B\u0676\x03\x02\x02" +
		"\x02\u067B\u067A\x03\x02\x02\x02\u067CW\x03\x02\x02\x02\u067D\u067E\b" +
		"-\x01\x02\u067E\u067F\x05^0\x02\u067F\u068D\x03\x02\x02\x02\u0680\u0689" +
		"\f\x04\x02\x02\u0681\u0682\x074\x02\x02\u0682\u0683\x07\x8B\x02\x02\u0683" +
		"\u068A\x05^0\x02\u0684\u0685\x05Z.\x02\u0685\u0686\x07\x8B\x02\x02\u0686" +
		"\u0687\x05X-\x02\u0687\u0688\x05\\/\x02\u0688\u068A\x03\x02\x02\x02\u0689" +
		"\u0681\x03\x02\x02\x02\u0689\u0684\x03\x02\x02\x02\u068A\u068C\x03\x02" +
		"\x02\x02\u068B\u0680\x03\x02\x02\x02\u068C\u068F\x03\x02\x02\x02\u068D" +
		"\u068B\x03\x02\x02\x02\u068D\u068E\x03\x02\x02\x02\u068EY\x03\x02\x02" +
		"\x02\u068F\u068D\x03\x02\x02\x02\u0690\u0692\x07{\x02\x02\u0691\u0690" +
		"\x03\x02\x02\x02\u0691\u0692\x03\x02\x02\x02\u0692\u06B0\x03\x02\x02\x02" +
		"\u0693\u0695\x07\x90\x02\x02\u0694\u0696\x07{\x02\x02\u0695\u0694\x03" +
		"\x02\x02\x02\u0695\u0696\x03\x02\x02\x02\u0696\u06B0\x03\x02\x02\x02\u0697" +
		"\u0699\x07\xD5\x02\x02\u0698\u069A\x07{\x02\x02\u0699\u0698\x03\x02\x02" +
		"\x02\u0699\u069A\x03\x02\x02\x02\u069A\u06B0\x03\x02\x02\x02\u069B\u069D" +
		"\x07\x90\x02\x02\u069C\u069E\x07\xB5\x02\x02\u069D\u069C\x03\x02\x02\x02" +
		"\u069D\u069E\x03\x02\x02\x02\u069E\u06B0\x03\x02\x02\x02\u069F\u06A1\x07" +
		"\xD5\x02\x02\u06A0\u06A2\x07\xB5\x02\x02\u06A1\u06A0\x03\x02\x02\x02\u06A1" +
		"\u06A2\x03\x02\x02\x02\u06A2\u06B0\x03\x02\x02\x02\u06A3\u06A5\x07j\x02" +
		"\x02\u06A4\u06A6\x07\xB5\x02\x02\u06A5\u06A4\x03\x02\x02\x02\u06A5\u06A6" +
		"\x03\x02\x02\x02\u06A6\u06B0\x03\x02\x02\x02\u06A7\u06A8\x07\x90\x02\x02" +
		"\u06A8\u06B0\x07\xE8\x02\x02\u06A9\u06AA\x07\xD5\x02\x02\u06AA\u06B0\x07" +
		"\xE8\x02\x02\u06AB\u06AC\x07\x90\x02\x02\u06AC\u06B0\x07\v\x02\x02\u06AD" +
		"\u06AE\x07\xD5\x02\x02\u06AE\u06B0\x07\v\x02\x02\u06AF\u0691\x03\x02\x02" +
		"\x02\u06AF\u0693\x03\x02\x02\x02\u06AF\u0697\x03\x02\x02\x02\u06AF\u069B" +
		"\x03\x02\x02\x02\u06AF\u069F\x03\x02\x02\x02\u06AF\u06A3\x03\x02\x02\x02" +
		"\u06AF\u06A7\x03\x02\x02\x02\u06AF\u06A9\x03\x02\x02\x02\u06AF\u06AB\x03" +
		"\x02\x02\x02\u06AF\u06AD\x03\x02\x02\x02\u06B0[\x03\x02\x02\x02\u06B1" +
		"\u06B2\x07\xAF\x02\x02\u06B2\u06C0\x05j6\x02\u06B3\u06B4\x07\u010D\x02" +
		"\x02\u06B4\u06B5\x07\u013B\x02\x02\u06B5\u06BA\x05\x9CO\x02\u06B6\u06B7" +
		"\x07\u0139\x02\x02\u06B7\u06B9\x05\x9CO\x02\u06B8\u06B6\x03\x02\x02\x02" +
		"\u06B9\u06BC\x03\x02\x02\x02\u06BA\u06B8\x03\x02\x02\x02\u06BA\u06BB\x03" +
		"\x02\x02\x02\u06BB\u06BD\x03\x02\x02\x02\u06BC\u06BA\x03\x02\x02\x02\u06BD" +
		"\u06BE\x07\u013C\x02\x02\u06BE\u06C0\x03\x02\x02\x02\u06BF\u06B1\x03\x02" +
		"\x02\x02\u06BF\u06B3\x03\x02\x02\x02\u06C0]\x03\x02\x02\x02\u06C1\u06CE" +
		"\x05b2\x02\u06C2\u06C3\x07\xF7\x02\x02\u06C3\u06C4\x05`1\x02\u06C4\u06C5" +
		"\x07\u013B\x02\x02\u06C5\u06C6\x05h5\x02\u06C6\u06CC\x07\u013C\x02\x02" +
		"\u06C7\u06C8\x07\xCB\x02\x02\u06C8\u06C9\x07\u013B\x02\x02\u06C9\u06CA" +
		"\x05h5\x02\u06CA\u06CB\x07\u013C\x02\x02\u06CB\u06CD\x03\x02\x02\x02\u06CC" +
		"\u06C7\x03\x02\x02\x02\u06CC\u06CD\x03\x02\x02\x02\u06CD\u06CF\x03\x02" +
		"\x02\x02\u06CE\u06C2\x03\x02\x02\x02\u06CE\u06CF\x03\x02\x02\x02\u06CF" +
		"_\x03\x02\x02\x02\u06D0\u06D1\t\x15\x02\x02\u06D1a\x03\x02\x02\x02\u06D2" +
		"\u06DA\x05f4\x02\u06D3\u06D5\x07\x0E\x02\x02\u06D4\u06D3\x03\x02\x02\x02" +
		"\u06D4\u06D5\x03\x02\x02\x02\u06D5\u06D6\x03\x02\x02\x02\u06D6\u06D8\x05" +
		"\x9CO\x02\u06D7\u06D9\x05d3\x02\u06D8\u06D7\x03\x02\x02\x02\u06D8\u06D9" +
		"\x03\x02\x02\x02\u06D9\u06DB\x03\x02\x02\x02\u06DA\u06D4\x03\x02\x02\x02" +
		"\u06DA\u06DB\x03\x02\x02\x02\u06DBc\x03\x02\x02\x02\u06DC\u06DD\x07\u013B" +
		"\x02\x02\u06DD\u06E2\x05\x9CO\x02\u06DE\u06DF\x07\u0139\x02\x02\u06DF" +
		"\u06E1\x05\x9CO\x02\u06E0\u06DE\x03\x02\x02\x02\u06E1\u06E4\x03\x02\x02" +
		"\x02\u06E2\u06E0\x03\x02\x02\x02\u06E2\u06E3\x03\x02\x02\x02\u06E3\u06E5" +
		"\x03\x02\x02\x02\u06E4\u06E2\x03\x02\x02\x02\u06E5\u06E6\x07\u013C\x02" +
		"\x02\u06E6e\x03\x02\x02\x02\u06E7\u0705\x05\x98M\x02\u06E8\u06E9\x07\u013B" +
		"\x02\x02\u06E9\u06EA\x05\x0E\b\x02\u06EA\u06EB\x07\u013C\x02\x02\u06EB" +
		"\u0705\x03\x02\x02\x02\u06EC\u06ED\x07\u0109\x02\x02\u06ED\u06EE\x07\u013B" +
		"\x02\x02\u06EE\u06F3\x05h5\x02\u06EF\u06F0\x07\u0139\x02\x02\u06F0\u06F2" +
		"\x05h5\x02\u06F1\u06EF\x03\x02\x02\x02\u06F2\u06F5\x03\x02\x02\x02\u06F3" +
		"\u06F1\x03\x02\x02\x02\u06F3\u06F4\x03\x02\x02\x02\u06F4\u06F6\x03\x02" +
		"\x02\x02\u06F5\u06F3\x03\x02\x02\x02\u06F6\u06F9\x07\u013C\x02\x02\u06F7" +
		"\u06F8\x07\u0119\x02\x02\u06F8\u06FA\x07\xB4\x02\x02\u06F9\u06F7\x03\x02" +
		"\x02\x02\u06F9\u06FA\x03\x02\x02\x02\u06FA\u0705\x03\x02\x02\x02\u06FB" +
		"\u06FC\x07\x8F\x02\x02\u06FC\u06FD\x07\u013B\x02\x02\u06FD\u06FE\x05\x0E" +
		"\b\x02\u06FE\u06FF\x07\u013C\x02\x02\u06FF\u0705\x03\x02\x02\x02\u0700" +
		"\u0701\x07\u013B\x02\x02\u0701\u0702\x05X-\x02\u0702\u0703\x07\u013C\x02" +
		"\x02\u0703\u0705\x03\x02\x02\x02\u0704\u06E7\x03\x02\x02\x02\u0704\u06E8" +
		"\x03\x02\x02\x02\u0704\u06EC\x03\x02\x02\x02\u0704\u06FB\x03\x02\x02\x02" +
		"\u0704\u0700\x03\x02\x02\x02\u0705g\x03\x02\x02\x02\u0706\u0707\x05j6" +
		"\x02\u0707i\x03\x02\x02\x02\u0708\u0709\b6\x01\x02\u0709\u070B\x05n8\x02" +
		"\u070A\u070C\x05l7\x02\u070B\u070A\x03\x02\x02\x02\u070B\u070C\x03\x02" +
		"\x02\x02\u070C\u0710\x03\x02\x02\x02\u070D\u070E\x07\xAA\x02\x02\u070E" +
		"\u0710\x05j6\x05\u070F\u0708\x03\x02\x02\x02\u070F\u070D\x03\x02\x02\x02" +
		"\u0710\u0719\x03\x02\x02\x02\u0711\u0712\f\x04\x02\x02\u0712\u0713\x07" +
		"\t\x02\x02\u0713\u0718\x05j6\x05\u0714\u0715\f\x03\x02\x02\u0715\u0716" +
		"\x07\xB2\x02\x02\u0716\u0718\x05j6\x04\u0717\u0711\x03\x02\x02\x02\u0717" +
		"\u0714\x03\x02\x02\x02\u0718\u071B\x03\x02\x02\x02\u0719\u0717\x03\x02" +
		"\x02\x02\u0719\u071A\x03\x02\x02\x02\u071Ak\x03\x02\x02\x02\u071B\u0719" +
		"\x03\x02\x02\x02\u071C\u071D\x05t;\x02\u071D\u071E\x05n8\x02\u071E\u075C" +
		"\x03\x02\x02\x02\u071F\u0720\x05t;\x02\u0720\u0721\x05v<\x02\u0721\u0722" +
		"\x07\u013B\x02\x02\u0722\u0723\x05\x0E\b\x02\u0723\u0724\x07\u013C\x02" +
		"\x02\u0724\u075C\x03\x02\x02\x02\u0725\u0727\x07\xAA\x02\x02\u0726\u0725" +
		"\x03\x02\x02\x02\u0726\u0727\x03\x02\x02\x02\u0727\u0728\x03\x02\x02\x02" +
		"\u0728\u0729\x07\x14\x02\x02\u0729\u072A\x05n8\x02\u072A\u072B\x07\t\x02" +
		"\x02\u072B\u072C\x05n8\x02\u072C\u075C\x03\x02\x02\x02\u072D\u072F\x07" +
		"\xAA\x02\x02\u072E\u072D\x03\x02\x02\x02\u072E\u072F\x03\x02\x02\x02\u072F" +
		"\u0730\x03\x02\x02\x02\u0730\u0731\x07x\x02\x02\u0731\u0732\x07\u013B" +
		"\x02\x02\u0732\u0737\x05h5\x02\u0733\u0734\x07\u0139\x02\x02\u0734\u0736" +
		"\x05h5\x02\u0735\u0733\x03\x02\x02\x02\u0736\u0739\x03\x02\x02\x02\u0737" +
		"\u0735\x03\x02\x02\x02\u0737\u0738\x03\x02\x02\x02\u0738\u073A\x03\x02" +
		"\x02\x02\u0739\u0737\x03\x02\x02\x02\u073A\u073B\x07\u013C\x02\x02\u073B" +
		"\u075C\x03\x02\x02\x02\u073C\u073E\x07\xAA\x02\x02\u073D\u073C\x03\x02" +
		"\x02\x02\u073D\u073E\x03\x02\x02\x02\u073E\u073F\x03\x02\x02\x02\u073F" +
		"\u0740\x07x\x02\x02\u0740\u0741\x07\u013B\x02\x02\u0741\u0742\x05\x0E" +
		"\b\x02\u0742\u0743\x07\u013C\x02\x02\u0743\u075C\x03\x02\x02\x02\u0744" +
		"\u0746\x07\xAA\x02\x02\u0745\u0744\x03\x02\x02\x02\u0745\u0746\x03\x02" +
		"\x02\x02\u0746\u0747\x03\x02\x02\x02\u0747\u0748\x07\x92\x02\x02\u0748" +
		"\u074B\x05n8\x02\u0749\u074A\x07R\x02\x02\u074A\u074C\x05n8\x02\u074B" +
		"\u0749\x03\x02\x02\x02\u074B\u074C\x03\x02\x02\x02\u074C\u075C\x03\x02" +
		"\x02\x02\u074D\u074E\x07\xD3\x02\x02\u074E\u075C\x05n8\x02\u074F\u0751" +
		"\x07\x87\x02\x02\u0750\u0752\x07\xAA\x02\x02\u0751\u0750\x03\x02\x02\x02" +
		"\u0751\u0752\x03\x02\x02\x02\u0752\u0753\x03\x02\x02\x02\u0753\u075C\x07" +
		"\xAB\x02\x02\u0754\u0756\x07\x87\x02\x02\u0755\u0757\x07\xAA\x02\x02\u0756" +
		"\u0755\x03\x02\x02\x02\u0756\u0757\x03\x02\x02\x02\u0757\u0758\x03\x02" +
		"\x02\x02\u0758\u0759\x07L\x02\x02\u0759\u075A\x07i\x02\x02\u075A\u075C" +
		"\x05n8\x02\u075B\u071C\x03\x02\x02\x02\u075B\u071F\x03\x02\x02\x02\u075B" +
		"\u0726\x03\x02\x02\x02\u075B\u072E\x03\x02\x02\x02\u075B\u073D\x03\x02" +
		"\x02\x02\u075B\u0745\x03\x02\x02\x02\u075B\u074D\x03\x02\x02\x02\u075B" +
		"\u074F\x03\x02\x02\x02\u075B\u0754\x03\x02\x02\x02\u075Cm\x03\x02\x02" +
		"\x02\u075D\u075E\b8\x01\x02\u075E\u0762\x05p9\x02\u075F\u0760\t\x16\x02" +
		"\x02\u0760\u0762\x05n8\x06\u0761\u075D\x03\x02\x02\x02\u0761\u075F\x03" +
		"\x02\x02\x02\u0762\u076E\x03\x02\x02\x02\u0763\u0764\f\x05\x02\x02\u0764" +
		"\u0765\t\x17\x02\x02\u0765\u076D\x05n8\x06\u0766\u0767\f\x04\x02\x02\u0767" +
		"\u0768\t\x16\x02\x02\u0768\u076D\x05n8\x05\u0769\u076A\f\x03\x02\x02\u076A" +
		"\u076B\x07\u0136\x02\x02\u076B\u076D\x05n8\x04\u076C\u0763\x03\x02\x02" +
		"\x02\u076C\u0766\x03\x02\x02\x02\u076C\u0769\x03\x02\x02\x02\u076D\u0770" +
		"\x03\x02\x02\x02\u076E\u076C\x03\x02\x02\x02\u076E\u076F\x03\x02\x02\x02" +
		"\u076Fo\x03\x02\x02\x02\u0770\u076E\x03\x02\x02\x02\u0771\u0772\b9\x01" +
		"\x02\u0772\u0868\x07\xAB\x02\x02\u0773\u0868\x05z>\x02\u0774\u0775\x05" +
		"\x9CO\x02\u0775\u0776\x05r:\x02\u0776\u0868\x03\x02\x02\x02\u0777\u0778" +
		"\x07\u014F\x02\x02\u0778\u0868\x05r:\x02\u0779\u0868\x05\x9EP\x02\u077A" +
		"\u0868\x05x=\x02\u077B\u0868\x05r:\x02\u077C\u0868\x07\u0145\x02\x02\u077D" +
		"\u0868\x07\u0142\x02\x02\u077E\u077F\x07\xBE\x02\x02\u077F\u0780\x07\u013B" +
		"\x02\x02\u0780\u0781\x05n8\x02\u0781\u0782\x07x\x02\x02\u0782\u0783\x05" +
		"n8\x02\u0783\u0784\x07\u013C\x02\x02\u0784\u0868\x03\x02\x02\x02\u0785" +
		"\u0786\x07\u013B\x02\x02\u0786\u0789\x05h5\x02\u0787\u0788\x07\x0E\x02" +
		"\x02\u0788\u078A\x05\x80A\x02\u0789\u0787\x03\x02\x02\x02\u0789\u078A" +
		"\x03\x02\x02\x02\u078A\u0793\x03\x02\x02\x02\u078B\u078C\x07\u0139\x02" +
		"\x02\u078C\u078F\x05h5\x02\u078D\u078E\x07\x0E\x02\x02\u078E\u0790\x05" +
		"\x80A\x02\u078F\u078D\x03\x02\x02\x02\u078F\u0790\x03\x02\x02\x02\u0790" +
		"\u0792\x03\x02\x02\x02\u0791\u078B\x03\x02\x02\x02\u0792\u0795\x03\x02" +
		"\x02\x02\u0793\u0794\x03\x02\x02\x02\u0793\u0791\x03\x02\x02\x02\u0794" +
		"\u0796\x03\x02\x02\x02\u0795\u0793\x03\x02\x02\x02\u0796\u0797\x07\u013C" +
		"\x02\x02\u0797\u0868\x03\x02\x02\x02\u0798\u0799\x07\xDA\x02\x02\u0799" +
		"\u079A\x07\u013B\x02\x02\u079A\u079F\x05h5\x02\u079B\u079C\x07\u0139\x02" +
		"\x02\u079C\u079E\x05h5\x02\u079D\u079B\x03\x02\x02\x02\u079E\u07A1\x03" +
		"\x02\x02\x02\u079F\u079D\x03\x02\x02\x02\u079F\u07A0\x03\x02\x02\x02\u07A0" +
		"\u07A2\x03\x02\x02\x02\u07A1\u079F\x03\x02\x02\x02\u07A2\u07A3\x07\u013C" +
		"\x02\x02\u07A3\u0868\x03\x02\x02\x02\u07A4\u07A5\x05\x98M\x02\u07A5\u07A6" +
		"\x07\u013B\x02\x02\u07A6\u07A7\x07\u0133\x02\x02\u07A7\u07A9\x07\u013C" +
		"\x02\x02\u07A8\u07AA\x05\x88E\x02\u07A9\u07A8\x03\x02\x02\x02\u07A9\u07AA" +
		"\x03\x02\x02\x02\u07AA\u07AC\x03\x02\x02\x02\u07AB\u07AD\x05\x8AF\x02" +
		"\u07AC\u07AB\x03\x02\x02\x02\u07AC\u07AD\x03\x02\x02\x02\u07AD\u0868\x03" +
		"\x02\x02\x02\u07AE\u07AF\x05\x98M\x02\u07AF\u07BB\x07\u013B\x02\x02\u07B0" +
		"\u07B2\x05T+\x02\u07B1\u07B0\x03\x02\x02\x02\u07B1\u07B2\x03\x02\x02\x02" +
		"\u07B2\u07B3\x03\x02\x02\x02\u07B3\u07B8\x05h5\x02\u07B4\u07B5\x07\u0139" +
		"\x02\x02\u07B5\u07B7\x05h5\x02\u07B6\u07B4\x03\x02\x02\x02\u07B7\u07BA" +
		"\x03\x02\x02\x02\u07B8\u07B6\x03\x02\x02\x02\u07B8\u07B9\x03\x02\x02\x02" +
		"\u07B9\u07BC\x03\x02\x02\x02\u07BA\u07B8\x03\x02\x02\x02\u07BB\u07B1\x03" +
		"\x02\x02\x02\u07BB\u07BC\x03\x02\x02\x02\u07BC\u07C7\x03\x02\x02\x02\u07BD" +
		"\u07BE\x07\xB3\x02\x02\u07BE\u07BF\x07#\x02\x02\u07BF\u07C4\x05H%\x02" +
		"\u07C0\u07C1\x07\u0139\x02\x02\u07C1\u07C3\x05H%\x02\u07C2\u07C0\x03\x02" +
		"\x02\x02\u07C3\u07C6\x03\x02\x02\x02\u07C4\u07C2\x03\x02\x02\x02\u07C4" +
		"\u07C5\x03\x02\x02\x02\u07C5\u07C8\x03\x02\x02\x02\u07C6\u07C4\x03\x02" +
		"\x02\x02\u07C7\u07BD\x03\x02\x02\x02\u07C7\u07C8\x03\x02\x02\x02\u07C8" +
		"\u07C9\x03\x02\x02\x02\u07C9\u07CB\x07\u013C\x02\x02\u07CA\u07CC\x05\x88" +
		"E\x02\u07CB\u07CA\x03\x02\x02\x02\u07CB\u07CC\x03\x02\x02\x02\u07CC\u07CE" +
		"\x03\x02\x02\x02\u07CD\u07CF\x05\x8AF\x02\u07CE\u07CD\x03\x02\x02\x02" +
		"\u07CE\u07CF\x03\x02\x02\x02\u07CF\u0868\x03\x02\x02\x02\u07D0\u07D1\x05" +
		"\x9CO\x02\u07D1\u07D2\x07\n\x02\x02\u07D2\u07D3\x05h5\x02\u07D3\u0868" +
		"\x03\x02\x02\x02\u07D4\u07DD\x07\u013B\x02\x02\u07D5\u07DA\x05\x9CO\x02" +
		"\u07D6\u07D7\x07\u0139\x02\x02\u07D7\u07D9\x05\x9CO\x02\u07D8\u07D6\x03" +
		"\x02\x02\x02\u07D9\u07DC\x03\x02\x02\x02\u07DA\u07D8\x03\x02\x02\x02\u07DA" +
		"\u07DB\x03\x02\x02\x02\u07DB\u07DE\x03\x02\x02\x02\u07DC\u07DA\x03\x02" +
		"\x02\x02\u07DD\u07D5\x03\x02\x02\x02\u07DD\u07DE\x03\x02\x02\x02\u07DE" +
		"\u07DF\x03\x02\x02\x02\u07DF\u07E0\x07\u013C\x02\x02\u07E0\u07E1\x07\n" +
		"\x02\x02\u07E1\u0868\x05h5\x02\u07E2\u07E3\x07\u013B\x02\x02\u07E3\u07E4" +
		"\x05\x0E\b\x02\u07E4\u07E5\x07\u013C\x02\x02\u07E5\u0868\x03\x02\x02\x02" +
		"\u07E6\u07E7\x07W\x02\x02\u07E7\u07E8\x07\u013B\x02\x02\u07E8\u07E9\x05" +
		"\x0E\b\x02\u07E9\u07EA\x07\u013C\x02\x02\u07EA\u0868\x03\x02\x02\x02\u07EB" +
		"\u07EC\x07&\x02\x02\u07EC\u07EE\x05n8\x02\u07ED\u07EF\x05\x86D\x02\u07EE" +
		"\u07ED\x03\x02\x02\x02\u07EF\u07F0\x03\x02\x02\x02\u07F0\u07EE\x03\x02" +
		"\x02\x02\u07F0\u07F1\x03\x02\x02\x02\u07F1\u07F4\x03\x02\x02\x02\u07F2" +
		"\u07F3\x07N\x02\x02\u07F3\u07F5\x05h5\x02\u07F4\u07F2\x03\x02\x02\x02" +
		"\u07F4\u07F5\x03\x02\x02\x02\u07F5\u07F6\x03\x02\x02\x02\u07F6\u07F7\x07" +
		"Q\x02\x02\u07F7\u0868\x03\x02\x02\x02\u07F8\u07FA\x07&\x02\x02\u07F9\u07FB" +
		"\x05\x86D\x02\u07FA\u07F9\x03\x02\x02\x02\u07FB\u07FC\x03\x02\x02\x02" +
		"\u07FC\u07FA\x03\x02\x02\x02\u07FC\u07FD\x03\x02\x02\x02\u07FD\u0800\x03" +
		"\x02\x02\x02\u07FE\u07FF\x07N\x02\x02\u07FF\u0801\x05h5\x02\u0800\u07FE" +
		"\x03\x02\x02\x02\u0800\u0801\x03\x02\x02\x02\u0801\u0802\x03\x02\x02\x02" +
		"\u0802\u0803\x07Q\x02\x02\u0803\u0868\x03\x02\x02\x02\u0804\u0805\x07" +
		"\'\x02\x02\u0805\u0806\x07\u013B\x02\x02\u0806\u0807\x05h5\x02\u0807\u0808" +
		"\x07\x0E\x02\x02\u0808\u0809\x05\x80A\x02\u0809\u080A\x07\u013C\x02\x02" +
		"\u080A\u0868\x03\x02\x02\x02\u080B\u080C\x07\u0101\x02\x02\u080C\u080D" +
		"\x07\u013B\x02\x02\u080D\u080E\x05h5\x02\u080E\u080F\x07\x0E\x02\x02\u080F" +
		"\u0810\x05\x80A\x02\u0810\u0811\x07\u013C\x02\x02\u0811\u0868\x03\x02" +
		"\x02\x02\u0812\u0813\x07\r\x02\x02\u0813\u081C\x07\u013D\x02\x02\u0814" +
		"\u0819\x05h5\x02\u0815\u0816\x07\u0139\x02\x02\u0816\u0818\x05h5\x02\u0817" +
		"\u0815\x03\x02\x02\x02\u0818\u081B\x03\x02\x02\x02\u0819\u0817\x03\x02" +
		"\x02\x02\u0819\u081A\x03\x02";
	private static readonly _serializedATNSegment4: string =
		"\x02\x02\u081A\u081D\x03\x02\x02\x02\u081B\u0819\x03\x02\x02\x02\u081C" +
		"\u0814\x03\x02\x02\x02\u081C\u081D\x03\x02\x02\x02\u081D\u081E\x03\x02" +
		"\x02\x02\u081E\u0868\x07\u013E\x02\x02\u081F\u0868\x05\x9CO\x02\u0820" +
		"\u0868\x077\x02\x02\u0821\u0825\x07:\x02\x02\u0822\u0823\x07\u013B\x02" +
		"\x02\u0823\u0824\x07\u0146\x02\x02\u0824\u0826\x07\u013C\x02\x02\u0825" +
		"\u0822\x03\x02\x02\x02\u0825\u0826\x03\x02\x02\x02\u0826\u0868\x03\x02" +
		"\x02\x02\u0827\u082B\x07;\x02\x02\u0828\u0829\x07\u013B\x02\x02\u0829" +
		"\u082A\x07\u0146\x02\x02\u082A\u082C\x07\u013C\x02\x02\u082B\u0828\x03" +
		"\x02\x02\x02\u082B\u082C\x03\x02\x02\x02\u082C\u0868\x03\x02\x02\x02\u082D" +
		"\u0831\x07\x96\x02\x02\u082E\u082F\x07\u013B\x02\x02\u082F\u0830\x07\u0146" +
		"\x02\x02\u0830\u0832\x07\u013C\x02\x02\u0831\u082E\x03\x02\x02\x02\u0831" +
		"\u0832\x03\x02\x02\x02\u0832\u0868\x03\x02\x02\x02\u0833\u0837\x07\x97" +
		"\x02\x02\u0834\u0835\x07\u013B\x02\x02\u0835\u0836\x07\u0146\x02\x02\u0836" +
		"\u0838\x07\u013C\x02\x02\u0837\u0834\x03\x02\x02\x02\u0837\u0838\x03\x02" +
		"\x02\x02\u0838\u0868\x03\x02\x02\x02\u0839\u0868\x07<\x02\x02\u083A\u0868" +
		"\x078\x02\x02\u083B\u083C\x07\xF1\x02\x02\u083C\u083D\x07\u013B\x02\x02" +
		"\u083D\u083E\x05n8\x02\u083E\u083F\x07i\x02\x02\u083F\u0842\x05n8\x02" +
		"\u0840\u0841\x07e\x02\x02\u0841\u0843\x05n8\x02\u0842\u0840\x03\x02\x02" +
		"\x02\u0842\u0843\x03\x02\x02\x02\u0843\u0844\x03\x02\x02\x02\u0844\u0845" +
		"\x07\u013C\x02\x02\u0845\u0868\x03\x02\x02\x02\u0846\u0847\x07\xA9\x02" +
		"\x02\u0847\u0848\x07\u013B\x02\x02\u0848\u084B\x05n8\x02\u0849\u084A\x07" +
		"\u0139\x02\x02\u084A\u084C\x05~@\x02\u084B\u0849\x03\x02\x02\x02\u084B" +
		"\u084C\x03\x02\x02\x02\u084C\u084D\x03\x02\x02\x02\u084D\u084E\x07\u013C" +
		"\x02\x02\u084E\u0868\x03\x02\x02\x02\u084F\u0850\x07Y\x02\x02\u0850\u0851" +
		"\x07\u013B\x02\x02\u0851\u0852\x05\x9CO\x02\u0852\u0853\x07i\x02\x02\u0853" +
		"\u0854\x05n8\x02\u0854\u0855\x07\u013C\x02\x02\u0855\u0868\x03\x02\x02" +
		"\x02\u0856\u0857\x07\u013B\x02\x02\u0857\u0858\x05h5\x02\u0858\u0859\x07" +
		"\u013C\x02\x02\u0859\u0868\x03\x02\x02\x02\u085A\u085B\x07r\x02\x02\u085B" +
		"\u0864\x07\u013B\x02\x02\u085C\u0861\x05\x98M\x02\u085D\u085E\x07\u0139" +
		"\x02\x02\u085E\u0860\x05\x98M\x02\u085F\u085D\x03\x02\x02\x02\u0860\u0863" +
		"\x03\x02\x02\x02\u0861\u085F\x03\x02\x02\x02\u0861\u0862\x03\x02\x02\x02" +
		"\u0862\u0865\x03\x02\x02\x02\u0863\u0861\x03\x02\x02\x02\u0864\u085C\x03" +
		"\x02\x02\x02\u0864\u0865\x03\x02\x02\x02\u0865\u0866\x03\x02\x02\x02\u0866" +
		"\u0868\x07\u013C\x02\x02\u0867\u0771\x03\x02\x02\x02\u0867\u0773\x03\x02" +
		"\x02\x02\u0867\u0774\x03\x02\x02\x02\u0867\u0777\x03\x02\x02\x02\u0867" +
		"\u0779\x03\x02\x02\x02\u0867\u077A\x03\x02\x02\x02\u0867\u077B\x03\x02" +
		"\x02\x02\u0867\u077C\x03\x02\x02\x02\u0867\u077D\x03\x02\x02\x02\u0867" +
		"\u077E\x03\x02\x02\x02\u0867\u0785\x03\x02\x02\x02\u0867\u0798\x03\x02" +
		"\x02\x02\u0867\u07A4\x03\x02\x02\x02\u0867\u07AE\x03\x02\x02\x02\u0867" +
		"\u07D0\x03\x02\x02\x02\u0867\u07D4\x03\x02\x02\x02\u0867\u07E2\x03\x02" +
		"\x02\x02\u0867\u07E6\x03\x02\x02\x02\u0867\u07EB\x03\x02\x02\x02\u0867" +
		"\u07F8\x03\x02\x02\x02\u0867\u0804\x03\x02\x02\x02\u0867\u080B\x03\x02" +
		"\x02\x02\u0867\u0812\x03\x02\x02\x02\u0867\u081F\x03\x02\x02\x02\u0867" +
		"\u0820\x03\x02\x02\x02\u0867\u0821\x03\x02\x02\x02\u0867\u0827\x03\x02" +
		"\x02\x02\u0867\u082D\x03\x02\x02\x02\u0867\u0833\x03\x02\x02\x02\u0867" +
		"\u0839\x03\x02\x02\x02\u0867\u083A\x03\x02\x02\x02\u0867\u083B\x03\x02" +
		"\x02\x02\u0867\u0846\x03\x02\x02\x02\u0867\u084F\x03\x02\x02\x02\u0867" +
		"\u0856\x03\x02\x02\x02\u0867\u085A\x03\x02\x02\x02\u0868\u0873\x03\x02" +
		"\x02\x02\u0869\u086A\f\x11\x02\x02\u086A\u086B\x07\u013D\x02\x02\u086B" +
		"\u086C\x05n8\x02\u086C\u086D\x07\u013E\x02\x02\u086D\u0872\x03\x02\x02" +
		"\x02\u086E\u086F\f\x0F\x02\x02\u086F\u0870\x07\u0137\x02\x02\u0870\u0872" +
		"\x05\x9CO\x02\u0871\u0869\x03\x02\x02\x02\u0871\u086E\x03\x02\x02\x02" +
		"\u0872\u0875\x03\x02\x02\x02\u0873\u0871\x03\x02\x02\x02\u0873\u0874\x03" +
		"\x02\x02\x02\u0874q\x03\x02\x02\x02\u0875\u0873\x03\x02\x02\x02\u0876" +
		"\u087D\x07\u0143\x02\x02\u0877\u087A\x07\u0144\x02\x02\u0878\u0879\x07" +
		"\u0105\x02\x02\u0879\u087B\x07\u0143\x02\x02\u087A\u0878\x03\x02\x02\x02" +
		"\u087A\u087B\x03\x02\x02\x02\u087B\u087D\x03\x02\x02\x02\u087C\u0876\x03" +
		"\x02\x02\x02\u087C\u0877\x03\x02\x02\x02\u087Ds\x03\x02\x02\x02\u087E" +
		"\u087F\t\x18\x02\x02\u087Fu\x03\x02\x02\x02\u0880\u0881\t\x19\x02\x02" +
		"\u0881w\x03\x02\x02\x02\u0882\u0883\t\x1A\x02\x02\u0883y\x03\x02\x02\x02" +
		"\u0884\u0885\x07\u0146\x02\x02\u0885\u0893\x05|?\x02\u0886\u0887\x07\u013B" +
		"\x02\x02\u0887\u0888\x07\u0146\x02\x02\u0888\u0889\x07\u013C\x02\x02\u0889" +
		"\u0893\x05|?\x02\u088A\u088B\x07\x80\x02\x02\u088B\u088C\x07\u0146\x02" +
		"\x02\u088C\u0893\x05|?\x02\u088D\u088E\x07\x80\x02\x02\u088E\u088F\x07" +
		"\u013B\x02\x02\u088F\u0890\x07\u0146\x02\x02\u0890\u0891\x07\u013C\x02" +
		"\x02\u0891\u0893\x05|?\x02\u0892\u0884\x03\x02\x02\x02\u0892\u0886\x03" +
		"\x02\x02\x02\u0892\u088A\x03\x02\x02\x02\u0892\u088D\x03\x02\x02\x02\u0893" +
		"{\x03\x02\x02\x02\u0894\u0895\t\x1B\x02\x02\u0895}\x03\x02\x02\x02\u0896" +
		"\u0897\t\x1C\x02\x02\u0897\x7F\x03\x02\x02\x02\u0898\u0899\bA\x01\x02" +
		"\u0899\u089A\x07\r\x02\x02\u089A\u089B\x07\u012D\x02\x02\u089B\u089C\x05" +
		"\x80A\x02\u089C\u089D\x07\u012F\x02\x02\u089D\u08C5\x03\x02\x02\x02\u089E" +
		"\u089F\x07\x9B\x02\x02\u089F\u08A0\x07\u012D\x02\x02\u08A0\u08A1\x05\x80" +
		"A\x02\u08A1\u08A2\x07\u0139\x02\x02\u08A2\u08A3\x05\x80A\x02\u08A3\u08A4" +
		"\x07\u012F\x02\x02\u08A4\u08C5\x03\x02\x02\x02\u08A5\u08A6\x07\xEF\x02" +
		"\x02\u08A6\u08A7\x07\u012D\x02\x02\u08A7\u08A8\x05\x9CO\x02\u08A8\u08A9" +
		"\x07\u013A\x02\x02\u08A9\u08B1\x05\x80A\x02\u08AA\u08AB\x07\u0139\x02" +
		"\x02\u08AB\u08AC\x05\x9CO\x02\u08AC\u08AD\x07\u013A\x02\x02\u08AD\u08AE" +
		"\x05\x80A\x02\u08AE\u08B0\x03\x02\x02\x02\u08AF\u08AA\x03\x02\x02\x02" +
		"\u08B0\u08B3\x03\x02\x02\x02\u08B1\u08AF\x03\x02\x02\x02\u08B1\u08B2\x03" +
		"\x02\x02\x02\u08B2\u08B4\x03\x02\x02\x02\u08B3\u08B1\x03\x02\x02\x02\u08B4" +
		"\u08B5\x07\u012F\x02\x02\u08B5\u08C5\x03\x02\x02\x02\u08B6\u08C2\x05\x84" +
		"C\x02\u08B7\u08B8\x07\u013B\x02\x02\u08B8\u08BD\x05\x82B\x02\u08B9\u08BA" +
		"\x07\u0139\x02\x02\u08BA\u08BC\x05\x82B\x02\u08BB\u08B9\x03\x02\x02\x02" +
		"\u08BC\u08BF\x03\x02\x02\x02\u08BD\u08BB\x03\x02\x02\x02\u08BD\u08BE\x03" +
		"\x02\x02\x02\u08BE\u08C0\x03\x02\x02\x02\u08BF\u08BD\x03\x02\x02\x02\u08C0" +
		"\u08C1\x07\u013C\x02\x02\u08C1\u08C3\x03\x02\x02\x02\u08C2\u08B7\x03\x02" +
		"\x02\x02\u08C2\u08C3\x03\x02\x02\x02\u08C3\u08C5\x03\x02\x02\x02\u08C4" +
		"\u0898\x03\x02\x02\x02\u08C4\u089E\x03\x02\x02\x02\u08C4\u08A5\x03\x02" +
		"\x02\x02\u08C4\u08B6\x03\x02\x02\x02\u08C5\u08CA\x03\x02\x02\x02\u08C6" +
		"\u08C7\f\x07\x02\x02\u08C7\u08C9\x07\r\x02\x02\u08C8\u08C6\x03\x02\x02" +
		"\x02\u08C9\u08CC\x03\x02\x02\x02\u08CA\u08C8\x03\x02\x02\x02\u08CA\u08CB" +
		"\x03\x02\x02\x02\u08CB\x81\x03\x02\x02\x02\u08CC\u08CA\x03\x02\x02\x02" +
		"\u08CD\u08D0\x07\u0146\x02\x02\u08CE\u08D0\x05\x80A\x02\u08CF\u08CD\x03" +
		"\x02\x02\x02\u08CF\u08CE\x03\x02\x02\x02\u08D0\x83\x03\x02\x02\x02\u08D1" +
		"\u08D6\x07\u014D\x02\x02\u08D2\u08D6\x07\u014E\x02\x02\u08D3\u08D6\x07" +
		"\u014F\x02\x02\u08D4\u08D6\x05\x9CO\x02\u08D5\u08D1\x03\x02\x02\x02\u08D5" +
		"\u08D2\x03\x02\x02\x02\u08D5\u08D3\x03\x02\x02\x02\u08D5\u08D4\x03\x02" +
		"\x02\x02\u08D6\x85\x03\x02\x02\x02\u08D7\u08D8\x07\u0117\x02\x02\u08D8" +
		"\u08D9\x05h5\x02\u08D9\u08DA\x07\xFA\x02\x02\u08DA\u08DB\x05h5\x02\u08DB" +
		"\x87\x03\x02\x02\x02\u08DC\u08DD\x07a\x02\x02\u08DD\u08DE\x07\u013B\x02" +
		"\x02\u08DE\u08DF\x07\u0118\x02\x02\u08DF\u08E0\x05j6\x02\u08E0\u08E1\x07" +
		"\u013C\x02\x02\u08E1\x89\x03\x02\x02\x02\u08E2\u08E3\x07\xB8\x02\x02\u08E3" +
		"\u08EE\x07\u013B\x02\x02\u08E4\u08E5\x07\xBA\x02\x02\u08E5\u08E6\x07#" +
		"\x02\x02\u08E6\u08EB\x05h5\x02\u08E7\u08E8\x07\u0139\x02\x02\u08E8\u08EA" +
		"\x05h5\x02\u08E9\u08E7\x03\x02\x02\x02\u08EA\u08ED\x03\x02\x02\x02\u08EB" +
		"\u08E9\x03\x02\x02\x02\u08EB\u08EC\x03\x02\x02\x02\u08EC\u08EF\x03\x02" +
		"\x02\x02\u08ED\u08EB\x03\x02\x02\x02\u08EE\u08E4\x03\x02\x02\x02\u08EE" +
		"\u08EF\x03\x02\x02\x02\u08EF\u08FA\x03\x02\x02\x02\u08F0\u08F1\x07\xB3" +
		"\x02\x02\u08F1\u08F2\x07#\x02\x02\u08F2\u08F7\x05H%\x02\u08F3\u08F4\x07" +
		"\u0139\x02\x02\u08F4\u08F6\x05H%\x02\u08F5\u08F3\x03\x02\x02\x02\u08F6" +
		"\u08F9\x03\x02\x02\x02\u08F7\u08F5\x03\x02\x02\x02\u08F7\u08F8\x03\x02" +
		"\x02\x02\u08F8\u08FB\x03\x02\x02\x02\u08F9\u08F7\x03\x02\x02\x02\u08FA" +
		"\u08F0\x03\x02\x02\x02\u08FA\u08FB\x03\x02\x02\x02\u08FB\u08FD\x03\x02" +
		"\x02\x02\u08FC\u08FE\x05\x8CG\x02\u08FD\u08FC\x03\x02\x02\x02\u08FD\u08FE" +
		"\x03\x02\x02\x02\u08FE\u08FF\x03\x02\x02\x02\u08FF\u0900\x07\u013C\x02" +
		"\x02\u0900\x8B\x03\x02\x02\x02\u0901\u0902\x07\xC5\x02\x02\u0902\u0912" +
		"\x05\x8EH\x02\u0903\u0904\x07\xDB\x02\x02\u0904\u0912\x05\x8EH\x02\u0905" +
		"\u0906\x07\xC5\x02\x02\u0906\u0907\x07\x14\x02\x02\u0907\u0908\x05\x8E" +
		"H\x02\u0908\u0909\x07\t\x02\x02\u0909\u090A\x05\x8EH\x02\u090A\u0912\x03" +
		"\x02\x02\x02\u090B\u090C\x07\xDB\x02\x02\u090C\u090D\x07\x14\x02\x02\u090D" +
		"\u090E\x05\x8EH\x02\u090E\u090F\x07\t\x02\x02\u090F\u0910\x05\x8EH\x02" +
		"\u0910\u0912\x03\x02\x02\x02\u0911\u0901\x03\x02\x02\x02\u0911\u0903\x03" +
		"\x02\x02\x02\u0911\u0905\x03\x02\x02\x02\u0911\u090B\x03\x02\x02\x02\u0912" +
		"\x8D\x03\x02\x02\x02\u0913\u0914\x07\u0106\x02\x02\u0914\u091D\x07\xBF" +
		"\x02\x02\u0915\u0916\x07\u0106\x02\x02\u0916\u091D\x07d\x02\x02\u0917" +
		"\u0918\x076\x02\x02\u0918\u091D\x07\xDA\x02\x02\u0919\u091A\x05h5\x02" +
		"\u091A\u091B\t\x1D\x02\x02\u091B\u091D\x03\x02\x02\x02\u091C\u0913\x03" +
		"\x02\x02\x02\u091C\u0915\x03\x02\x02\x02\u091C\u0917\x03\x02\x02\x02\u091C" +
		"\u0919\x03\x02\x02\x02\u091D\x8F\x03\x02\x02\x02\u091E\u091F\x05\x9CO" +
		"\x02\u091F\u0920\x07\u0137\x02\x02\u0920\u0921\x05\x9CO\x02\u0921\u0924" +
		"\x03\x02\x02\x02\u0922\u0924\x05\x9CO\x02\u0923\u091E\x03\x02\x02\x02" +
		"\u0923\u0922\x03\x02\x02\x02\u0924\x91\x03\x02\x02\x02\u0925\u092A\x05" +
		"\x90I\x02\u0926\u0927\x07\u0139\x02\x02\u0927\u0929\x05\x90I\x02\u0928" +
		"\u0926\x03\x02\x02\x02\u0929\u092C\x03\x02\x02\x02\u092A\u0928\x03\x02" +
		"\x02\x02\u092A\u092B\x03\x02\x02\x02\u092B\x93\x03\x02\x02\x02\u092C\u092A" +
		"\x03\x02\x02\x02\u092D\u093B\x07\x05\x02\x02\u092E\u093B\x07\b\x02\x02" +
		"\u092F\u093B\x07M\x02\x02\u0930\u093B\x073\x02\x02\u0931\u093B\x07~\x02" +
		"\x02\u0932\u093B\x07\xD2\x02\x02\u0933\u0938\x07\xE1\x02\x02\u0934\u0935" +
		"\x07\u013B\x02\x02\u0935\u0936\x05\x9CO\x02\u0936\u0937\x07\u013C\x02" +
		"\x02\u0937\u0939\x03\x02\x02\x02\u0938\u0934\x03\x02\x02\x02\u0938\u0939" +
		"\x03\x02\x02\x02\u0939\u093B\x03\x02\x02\x02\u093A\u092D\x03\x02\x02\x02" +
		"\u093A\u092E\x03\x02\x02\x02\u093A\u092F\x03\x02\x02\x02\u093A\u0930\x03" +
		"\x02\x02\x02\u093A\u0931\x03\x02\x02\x02\u093A\u0932\x03\x02\x02\x02\u093A" +
		"\u0933\x03\x02\x02\x02\u093B\x95\x03\x02\x02\x02\u093C\u093D\t\x1E\x02" +
		"\x02\u093D\x97\x03\x02\x02\x02\u093E\u0943\x05\x9CO\x02\u093F\u0940\x07" +
		"\u0137\x02\x02\u0940\u0942\x05\x9CO\x02\u0941\u093F\x03\x02\x02\x02\u0942" +
		"\u0945\x03\x02\x02\x02\u0943\u0941\x03\x02\x02\x02\u0943\u0944\x03\x02" +
		"\x02\x02\u0944\x99\x03\x02\x02\x02\u0945\u0943\x03\x02\x02\x02\u0946\u0947" +
		"\x07\xD6\x02\x02\u0947\u094D\x05\x9CO\x02\u0948\u0949\x07\u010C\x02\x02" +
		"\u0949\u094D\x05\x9CO\x02\u094A\u094B\x07q\x02\x02\u094B\u094D\x05\x9C" +
		"O\x02\u094C\u0946\x03\x02\x02\x02\u094C\u0948\x03\x02\x02\x02\u094C\u094A" +
		"\x03\x02\x02\x02\u094D\x9B\x03\x02\x02\x02\u094E\u0954\x07\u0149\x02\x02" +
		"\u094F\u0954\x07\u0143\x02\x02\u0950\u0954\x05\xA0Q\x02\u0951\u0954\x07" +
		"\u014C\x02\x02\u0952\u0954\x07\u014A\x02\x02\u0953\u094E\x03\x02\x02\x02" +
		"\u0953\u094F\x03\x02\x02\x02\u0953\u0950\x03\x02\x02\x02\u0953\u0951\x03" +
		"\x02\x02\x02\u0953\u0952\x03\x02\x02\x02\u0954\x9D\x03\x02\x02\x02\u0955" +
		"\u0957\x07\u0132\x02\x02\u0956\u0955\x03\x02\x02\x02\u0956\u0957\x03\x02" +
		"\x02\x02\u0957\u0958\x03\x02\x02\x02\u0958\u0962\x07\u0147\x02\x02\u0959" +
		"\u095B\x07\u0132\x02\x02\u095A\u0959\x03\x02\x02\x02\u095A\u095B\x03\x02" +
		"\x02\x02\u095B\u095C\x03\x02\x02\x02\u095C\u0962\x07\u0148\x02\x02\u095D" +
		"\u095F\x07\u0132\x02\x02\u095E\u095D\x03\x02\x02\x02\u095E\u095F\x03\x02" +
		"\x02\x02\u095F\u0960\x03\x02\x02\x02\u0960\u0962\x07\u0146\x02\x02\u0961" +
		"\u0956\x03\x02\x02\x02\u0961\u095A\x03\x02\x02\x02\u0961\u095E\x03\x02" +
		"\x02\x02\u0962\x9F\x03\x02\x02\x02\u0963\u0964\t\x1F\x02\x02\u0964\xA1" +
		"\x03\x02\x02\x02\u0140\xA4\xA8\xB5\xBA\xBE\xCC\xD0\xD4\xDA\xE3\xE8\xEC" +
		"\xF2\xF7\xFB\u0101\u0107\u010D\u0113\u011C\u0123\u0127\u012C\u012E\u0133" +
		"\u0137\u013E\u0142\u0153\u015E\u0167\u0177\u0188\u0199\u01A0\u01A7\u01B5" +
		"\u01BB\u01BE\u01C7\u01D3\u01D8\u01E0\u01F1\u01FF\u0211\u021A\u0224\u0227" +
		"\u022D\u0231\u0235\u0239\u0241\u0245\u0249\u024D\u0256\u027C\u0281\u0284" +
		"\u028B\u0297\u0299\u02A1\u02B2\u02BB\u02BE\u02C1\u02D0\u02DB\u02E1\u02EA" +
		"\u02ED\u02F0\u02F6\u02FD\u0308\u030D\u0312\u0317\u031E\u0323\u032C\u032F" +
		"\u0332\u0346\u0356\u035C\u0361\u0364\u0367\u036B\u036F\u0373\u037C\u0381" +
		"\u0384\u038A\u038F\u0394\u0397\u039F\u03A4\u03B0\u03B3\u03B7\u03BB\u03BF" +
		"\u03C3\u03C6\u03CD\u03D4\u03D7\u03DD\u03E0\u03E7\u03EA\u03EE\u03F3\u03F6" +
		"\u03FD\u0400\u0414\u0421\u0425\u0429\u043C\u0445\u044F\u0455\u045A\u045D" +
		"\u0468\u0472\u0476\u0481\u0486\u048A\u048F\u0493\u0498\u049D\u04A2\u04A6" +
		"\u04AF\u04B2\u04B6\u04BD\u04C8\u04CE\u04D2\u04D8\u04E2\u04E9\u04EE\u04F3" +
		"\u04F8\u04FE\u0501\u050A\u050D\u0510\u0516\u0520\u0523\u0527\u052B\u0531" +
		"\u0537\u053A\u053D\u0541\u054B\u0556\u055B\u055E\u0562\u0569\u0573\u0582" +
		"\u058B\u058E\u0595\u059F\u05A5\u05AF\u05BA\u05C4\u05CF\u05D1\u05D7\u05DC" +
		"\u05E6\u05E9\u05EF\u05F1\u05F9\u05FF\u0602\u0604\u0610\u0617\u061B\u061F" +
		"\u0623\u0626\u062D\u0636\u0639\u063D\u0642\u0646\u0649\u0650\u065B\u065E" +
		"\u0662\u0666\u0671\u0674\u067B\u0689\u068D\u0691\u0695\u0699\u069D\u06A1" +
		"\u06A5\u06AF\u06BA\u06BF\u06CC\u06CE\u06D4\u06D8\u06DA\u06E2\u06F3\u06F9" +
		"\u0704\u070B\u070F\u0717\u0719\u0726\u072E\u0737\u073D\u0745\u074B\u0751" +
		"\u0756\u075B\u0761\u076C\u076E\u0789\u078F\u0793\u079F\u07A9\u07AC\u07B1" +
		"\u07B8\u07BB\u07C4\u07C7\u07CB\u07CE\u07DA\u07DD\u07F0\u07F4\u07FC\u0800" +
		"\u0819\u081C\u0825\u082B\u0831\u0837\u0842\u084B\u0861\u0864\u0867\u0871" +
		"\u0873\u087A\u087C\u0892\u08B1\u08BD\u08C2\u08C4\u08CA\u08CF\u08D5\u08EB" +
		"\u08EE\u08F7\u08FA\u08FD\u0911\u091C\u0923\u092A\u0938\u093A\u0943\u094C" +
		"\u0953\u0956\u095A\u095E\u0961";
	public static readonly _serializedATN: string = Utils.join(
		[
			ImpalaSqlParserParser._serializedATNSegment0,
			ImpalaSqlParserParser._serializedATNSegment1,
			ImpalaSqlParserParser._serializedATNSegment2,
			ImpalaSqlParserParser._serializedATNSegment3,
			ImpalaSqlParserParser._serializedATNSegment4,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ImpalaSqlParserParser.__ATN) {
			ImpalaSqlParserParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ImpalaSqlParserParser._serializedATN));
		}

		return ImpalaSqlParserParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ImpalaSqlParserParser.EOF, 0); }
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
			return this.getTokens(ImpalaSqlParserParser.SEMICOLON);
		} else {
			return this.getToken(ImpalaSqlParserParser.SEMICOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_program; }
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class StatementDefaultContext extends StatementContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class UseContext extends StatementContext {
	public _schema!: IdentifierContext;
	public KW_USE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_USE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class CreateSchemaContext extends StatementContext {
	public _comment!: StringContext;
	public _location!: StringContext;
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_CREATE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_SCHEMA(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SCHEMA, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DATABASE, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IF, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NOT, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXISTS, 0); }
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_COMMENT, 0); }
	public KW_LOCATION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_LOCATION, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class AlterSchemaContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_DATABASE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_DATABASE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SET, 0); }
	public KW_OWNER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_OWNER, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_USER, 0); }
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ROLE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class DropSchemaContext extends StatementContext {
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_DROP, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_SCHEMA(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SCHEMA, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DATABASE, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IF, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXISTS, 0); }
	public KW_CASCADE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_CASCADE, 0); }
	public KW_RESTRICT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_RESTRICT, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class CreateTableSelectContext extends StatementContext {
	public _tblName!: QualifiedNameContext;
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public createCommonItem(): CreateCommonItemContext {
		return this.getRuleContext(0, CreateCommonItemContext);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXTERNAL, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IF, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NOT, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXISTS, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LPAREN, 0); }
	public columnDefinition(): ColumnDefinitionContext[];
	public columnDefinition(i: number): ColumnDefinitionContext;
	public columnDefinition(i?: number): ColumnDefinitionContext | ColumnDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnDefinitionContext);
		} else {
			return this.getRuleContext(i, ColumnDefinitionContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.RPAREN, 0); }
	public KW_PARTITIONED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PARTITIONED, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_BY, 0); }
	public partitionedBy(): PartitionedByContext | undefined {
		return this.tryGetRuleContext(0, PartitionedByContext);
	}
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_AS, 0); }
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	public constraintSpecification(): ConstraintSpecificationContext | undefined {
		return this.tryGetRuleContext(0, ConstraintSpecificationContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class CreateTableLikeContext extends StatementContext {
	public _tblName!: QualifiedNameContext;
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public createCommonItem(): CreateCommonItemContext {
		return this.getRuleContext(0, CreateCommonItemContext);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXTERNAL, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IF, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NOT, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXISTS, 0); }
	public KW_PARTITIONED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PARTITIONED, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_BY, 0); }
	public partitionedBy(): PartitionedByContext | undefined {
		return this.tryGetRuleContext(0, PartitionedByContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class CreateKuduTableAsSelectContext extends StatementContext {
	public _tblName!: QualifiedNameContext;
	public _tblProp!: PropertiesContext;
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public KW_STORED(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_STORED, 0); }
	public KW_AS(): TerminalNode[];
	public KW_AS(i: number): TerminalNode;
	public KW_AS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.KW_AS);
		} else {
			return this.getToken(ImpalaSqlParserParser.KW_AS, i);
		}
	}
	public KW_KUDU(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_KUDU, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXTERNAL, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IF, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NOT, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXISTS, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LPAREN, 0); }
	public kuduTableElement(): KuduTableElementContext[];
	public kuduTableElement(i: number): KuduTableElementContext;
	public kuduTableElement(i?: number): KuduTableElementContext | KuduTableElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KuduTableElementContext);
		} else {
			return this.getRuleContext(i, KuduTableElementContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.RPAREN, 0); }
	public KW_PRIMARY(): TerminalNode[];
	public KW_PRIMARY(i: number): TerminalNode;
	public KW_PRIMARY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.KW_PRIMARY);
		} else {
			return this.getToken(ImpalaSqlParserParser.KW_PRIMARY, i);
		}
	}
	public KW_KEY(): TerminalNode[];
	public KW_KEY(i: number): TerminalNode;
	public KW_KEY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.KW_KEY);
		} else {
			return this.getToken(ImpalaSqlParserParser.KW_KEY, i);
		}
	}
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PARTITION, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_BY, 0); }
	public kuduPartitionClause(): KuduPartitionClauseContext | undefined {
		return this.tryGetRuleContext(0, KuduPartitionClauseContext);
	}
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_COMMENT, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public KW_TBLPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TBLPROPERTIES, 0); }
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
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
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
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class RenameTableContext extends StatementContext {
	public _from!: QualifiedNameContext;
	public _to!: QualifiedNameContext;
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public KW_RENAME(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_RENAME, 0); }
	public KW_TO(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TO, 0); }
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class AddSingleColumnContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_ADD(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ADD, 0); }
	public KW_COLUMN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_COLUMN, 0); }
	public columnSpecWithKudu(): ColumnSpecWithKuduContext {
		return this.getRuleContext(0, ColumnSpecWithKuduContext);
	}
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IF, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NOT, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXISTS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class AddColumnsContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_ADD(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ADD, 0); }
	public KW_COLUMNS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_COLUMNS, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public columnSpecWithKudu(): ColumnSpecWithKuduContext[];
	public columnSpecWithKudu(i: number): ColumnSpecWithKuduContext;
	public columnSpecWithKudu(i?: number): ColumnSpecWithKuduContext | ColumnSpecWithKuduContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnSpecWithKuduContext);
		} else {
			return this.getRuleContext(i, ColumnSpecWithKuduContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IF, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NOT, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXISTS, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAddColumns) {
			listener.enterAddColumns(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAddColumns) {
			listener.exitAddColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAddColumns) {
			return visitor.visitAddColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReplaceColumnsContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_REPLACE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_REPLACE, 0); }
	public KW_COLUMNS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_COLUMNS, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public columnSpecWithKudu(): ColumnSpecWithKuduContext[];
	public columnSpecWithKudu(i: number): ColumnSpecWithKuduContext;
	public columnSpecWithKudu(i?: number): ColumnSpecWithKuduContext | ColumnSpecWithKuduContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnSpecWithKuduContext);
		} else {
			return this.getRuleContext(i, ColumnSpecWithKuduContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterReplaceColumns) {
			listener.enterReplaceColumns(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitReplaceColumns) {
			listener.exitReplaceColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitReplaceColumns) {
			return visitor.visitReplaceColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EditColumnDefineContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_CHANGE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_CHANGE, 0); }
	public KW_COLUMN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_COLUMN, 0); }
	public columnSpecWithKudu(): ColumnSpecWithKuduContext {
		return this.getRuleContext(0, ColumnSpecWithKuduContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class DropSingleColumnContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_DROP, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_COLUMN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_COLUMN, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDropSingleColumn) {
			listener.enterDropSingleColumn(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDropSingleColumn) {
			listener.exitDropSingleColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDropSingleColumn) {
			return visitor.visitDropSingleColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AlterTableOwnerContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SET, 0); }
	public KW_OWNER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_OWNER, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_USER, 0); }
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ROLE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class AlterTableKuduOnlyContext extends StatementContext {
	public KW_ALTER(): TerminalNode[];
	public KW_ALTER(i: number): TerminalNode;
	public KW_ALTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.KW_ALTER);
		} else {
			return this.getToken(ImpalaSqlParserParser.KW_ALTER, i);
		}
	}
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_SET(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SET, 0); }
	public kuduStorageAttr(): KuduStorageAttrContext | undefined {
		return this.tryGetRuleContext(0, KuduStorageAttrContext);
	}
	public KW_DROP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DROP, 0); }
	public KW_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DEFAULT, 0); }
	public KW_COLUMN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_COLUMN, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAlterTableKuduOnly) {
			listener.enterAlterTableKuduOnly(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAlterTableKuduOnly) {
			listener.exitAlterTableKuduOnly(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableKuduOnly) {
			return visitor.visitAlterTableKuduOnly(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AlterTableNonKuduContext extends StatementContext {
	public KW_ALTER(): TerminalNode[];
	public KW_ALTER(i: number): TerminalNode;
	public KW_ALTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.KW_ALTER);
		} else {
			return this.getToken(ImpalaSqlParserParser.KW_ALTER, i);
		}
	}
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SET, 0); }
	public KW_COMMENT(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_COMMENT, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public KW_COLUMN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_COLUMN, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAlterTableNonKudu) {
			listener.enterAlterTableNonKudu(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAlterTableNonKudu) {
			listener.exitAlterTableNonKudu(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTableNonKudu) {
			return visitor.visitAlterTableNonKudu(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddPartitionByValueContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_ADD(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ADD, 0); }
	public KW_PARTITION(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_PARTITION, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IF, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NOT, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXISTS, 0); }
	public KW_LOCATION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_LOCATION, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public cacheSpec(): CacheSpecContext | undefined {
		return this.tryGetRuleContext(0, CacheSpecContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAddPartitionByValue) {
			listener.enterAddPartitionByValue(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAddPartitionByValue) {
			listener.exitAddPartitionByValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAddPartitionByValue) {
			return visitor.visitAddPartitionByValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddPartitionByRangeContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_ADD(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ADD, 0); }
	public KW_RANGE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_RANGE, 0); }
	public KW_PARTITION(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_PARTITION, 0); }
	public kuduPartitionSpec(): KuduPartitionSpecContext {
		return this.getRuleContext(0, KuduPartitionSpecContext);
	}
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IF, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NOT, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXISTS, 0); }
	public KW_DROP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DROP, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAddPartitionByRange) {
			listener.enterAddPartitionByRange(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAddPartitionByRange) {
			listener.exitAddPartitionByRange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAddPartitionByRange) {
			return visitor.visitAddPartitionByRange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropPartitionByValueContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_DROP, 0); }
	public KW_PARTITION(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_PARTITION, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IF, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXISTS, 0); }
	public KW_PURGE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PURGE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDropPartitionByValue) {
			listener.enterDropPartitionByValue(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDropPartitionByValue) {
			listener.exitDropPartitionByValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDropPartitionByValue) {
			return visitor.visitDropPartitionByValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RecoverPartitionsContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_RECOVER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_RECOVER, 0); }
	public KW_PARTITIONS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_PARTITIONS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class AlterFormatContext extends StatementContext {
	public _tblProp!: PropertiesContext;
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SET, 0); }
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PARTITION, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public KW_FILEFORMAT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FILEFORMAT, 0); }
	public fileFormat(): FileFormatContext | undefined {
		return this.tryGetRuleContext(0, FileFormatContext);
	}
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ROW, 0); }
	public KW_FORMAT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FORMAT, 0); }
	public rowFormat(): RowFormatContext | undefined {
		return this.tryGetRuleContext(0, RowFormatContext);
	}
	public KW_LOCATION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_LOCATION, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public KW_TBLPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TBLPROPERTIES, 0); }
	public KW_SERDEPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SERDEPROPERTIES, 0); }
	public properties(): PropertiesContext | undefined {
		return this.tryGetRuleContext(0, PropertiesContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class AlterStatsKeyContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SET, 0); }
	public KW_COLUMN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_COLUMN, 0); }
	public KW_STATS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_STATS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
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
			return this.getTokens(ImpalaSqlParserParser.EQ);
		} else {
			return this.getToken(ImpalaSqlParserParser.EQ, i);
		}
	}
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.COMMA, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class AlterPartitionCacheContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SET, 0); }
	public KW_UNCACHED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_UNCACHED, 0); }
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PARTITION, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public KW_CACHED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_CACHED, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IN, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_WITH, 0); }
	public KW_REPLICATION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_REPLICATION, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.EQ, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class DropTableContext extends StatementContext {
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_DROP, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IF, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXISTS, 0); }
	public KW_PURGE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PURGE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class TruncateTableContext extends StatementContext {
	public KW_TRUNCATE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TRUNCATE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IF, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXISTS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class CreateViewContext extends StatementContext {
	public _tblProp!: PropertiesContext;
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_CREATE, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_VIEW, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_AS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IF, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NOT, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXISTS, 0); }
	public viewColumns(): ViewColumnsContext | undefined {
		return this.tryGetRuleContext(0, ViewColumnsContext);
	}
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_COMMENT, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public KW_TBLPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TBLPROPERTIES, 0); }
	public properties(): PropertiesContext | undefined {
		return this.tryGetRuleContext(0, PropertiesContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class AlterViewContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_VIEW, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_AS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public viewColumns(): ViewColumnsContext | undefined {
		return this.tryGetRuleContext(0, ViewColumnsContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class RenameViewContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_VIEW, 0); }
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public KW_RENAME(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_RENAME, 0); }
	public KW_TO(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TO, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class AlterViewOwnerContext extends StatementContext {
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_VIEW, 0); }
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SET, 0); }
	public KW_OWNER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_OWNER, 0); }
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_USER, 0); }
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ROLE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class AlterSetViewTblpropertiesContext extends StatementContext {
	public _tblProp!: PropertiesContext;
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_VIEW, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SET, 0); }
	public KW_TBLPROPERTIES(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TBLPROPERTIES, 0); }
	public properties(): PropertiesContext {
		return this.getRuleContext(0, PropertiesContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAlterSetViewTblproperties) {
			listener.enterAlterSetViewTblproperties(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAlterSetViewTblproperties) {
			listener.exitAlterSetViewTblproperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterSetViewTblproperties) {
			return visitor.visitAlterSetViewTblproperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AlterUnSetViewTblpropertiesContext extends StatementContext {
	public _tblProp!: PropertiesContext;
	public KW_ALTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_VIEW, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_UNSET(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_UNSET, 0); }
	public KW_TBLPROPERTIES(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TBLPROPERTIES, 0); }
	public properties(): PropertiesContext {
		return this.getRuleContext(0, PropertiesContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterAlterUnSetViewTblproperties) {
			listener.enterAlterUnSetViewTblproperties(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitAlterUnSetViewTblproperties) {
			listener.exitAlterUnSetViewTblproperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterUnSetViewTblproperties) {
			return visitor.visitAlterUnSetViewTblproperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropViewContext extends StatementContext {
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_DROP, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_VIEW, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IF, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXISTS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class DescribeDbOrTableContext extends StatementContext {
	public KW_DESCRIBE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_DESCRIBE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DATABASE, 0); }
	public KW_FORMATTED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FORMATTED, 0); }
	public KW_EXTENDED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXTENDED, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDescribeDbOrTable) {
			listener.enterDescribeDbOrTable(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDescribeDbOrTable) {
			listener.exitDescribeDbOrTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDescribeDbOrTable) {
			return visitor.visitDescribeDbOrTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComputeStatsContext extends StatementContext {
	public KW_COMPUTE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_COMPUTE, 0); }
	public KW_STATS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_STATS, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	public KW_TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TABLESAMPLE, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SYSTEM, 0); }
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.LPAREN);
		} else {
			return this.getToken(ImpalaSqlParserParser.LPAREN, i);
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
			return this.getTokens(ImpalaSqlParserParser.RPAREN);
		} else {
			return this.getToken(ImpalaSqlParserParser.RPAREN, i);
		}
	}
	public KW_REPEATABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_REPEATABLE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class ComputeIncrementalStatsContext extends StatementContext {
	public KW_COMPUTE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_COMPUTE, 0); }
	public KW_INCREMENTAL(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_INCREMENTAL, 0); }
	public KW_STATS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_STATS, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PARTITION, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class DropStatsContext extends StatementContext {
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_DROP, 0); }
	public KW_STATS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_STATS, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterDropStats) {
			listener.enterDropStats(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitDropStats) {
			listener.exitDropStats(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitDropStats) {
			return visitor.visitDropStats(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropIncrementalStatsContext extends StatementContext {
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_DROP, 0); }
	public KW_INCREMENTAL(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_INCREMENTAL, 0); }
	public KW_STATS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_STATS, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_PARTITION(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_PARTITION, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class CreateFunctionContext extends StatementContext {
	public _symbol!: StringContext;
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_CREATE, 0); }
	public KW_FUNCTION(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_FUNCTION, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_RETURNS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_RETURNS, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public KW_LOCATION(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_LOCATION, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.STRING);
		} else {
			return this.getToken(ImpalaSqlParserParser.STRING, i);
		}
	}
	public KW_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SYMBOL, 0); }
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.EQ);
		} else {
			return this.getToken(ImpalaSqlParserParser.EQ, i);
		}
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IF, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NOT, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXISTS, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	public KW_UPDATE_FN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_UPDATE_FN, 0); }
	public KW_MERGE_FN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_MERGE_FN, 0); }
	public KW_AGGREGATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_AGGREGATE, 0); }
	public KW_INTERMEDIATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_INTERMEDIATE, 0); }
	public KW_INIT_FN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_INIT_FN, 0); }
	public KW_PREPARE_FN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PREPARE_FN, 0); }
	public KW_CLOSEFN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_CLOSEFN, 0); }
	public KW_SERIALIZE_FN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SERIALIZE_FN, 0); }
	public KW_FINALIZE_FN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FINALIZE_FN, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class RefreshFunctionContext extends StatementContext {
	public KW_REFRESH(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_REFRESH, 0); }
	public KW_FUNCTIONS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_FUNCTIONS, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class DropFunctionContext extends StatementContext {
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_DROP, 0); }
	public KW_FUNCTION(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_FUNCTION, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_AGGREGATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_AGGREGATE, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IF, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXISTS, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.RPAREN, 0); }
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
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class CreateRoleContext extends StatementContext {
	public _name!: IdentifierContext;
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_CREATE, 0); }
	public KW_ROLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ROLE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class DropRoleContext extends StatementContext {
	public _name!: IdentifierContext;
	public KW_DROP(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_DROP, 0); }
	public KW_ROLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ROLE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class GrantRoleContext extends StatementContext {
	public KW_GRANT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_GRANT, 0); }
	public KW_ROLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ROLE, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public KW_TO(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TO, 0); }
	public KW_GROUP(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_GROUP, 0); }
	public KW_REVOKE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_REVOKE, 0); }
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FROM, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class GrantContext extends StatementContext {
	public _grantee!: PrincipalContext;
	public KW_GRANT(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_GRANT, 0); }
	public privilege(): PrivilegeContext {
		return this.getRuleContext(0, PrivilegeContext);
	}
	public KW_ON(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ON, 0); }
	public objectType(): ObjectTypeContext {
		return this.getRuleContext(0, ObjectTypeContext);
	}
	public KW_TO(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TO, 0); }
	public principal(): PrincipalContext {
		return this.getRuleContext(0, PrincipalContext);
	}
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class RevokeContext extends StatementContext {
	public _grantee!: PrincipalContext;
	public KW_REVOKE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_REVOKE, 0); }
	public privilege(): PrivilegeContext {
		return this.getRuleContext(0, PrivilegeContext);
	}
	public KW_ON(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ON, 0); }
	public objectType(): ObjectTypeContext {
		return this.getRuleContext(0, ObjectTypeContext);
	}
	public KW_FROM(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_FROM, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_GRANT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_GRANT, 0); }
	public KW_OPTION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_OPTION, 0); }
	public KW_FOR(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FOR, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public principal(): PrincipalContext | undefined {
		return this.tryGetRuleContext(0, PrincipalContext);
	}
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ROLE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class InsertIntoContext extends StatementContext {
	public KW_INSERT(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_INSERT, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public KW_INTO(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_INTO, 0); }
	public KW_OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_OVERWRITE, 0); }
	public with(): WithContext | undefined {
		return this.tryGetRuleContext(0, WithContext);
	}
	public hintClause(): HintClauseContext[];
	public hintClause(i: number): HintClauseContext;
	public hintClause(i?: number): HintClauseContext | HintClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HintClauseContext);
		} else {
			return this.getRuleContext(i, HintClauseContext);
		}
	}
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PARTITION, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterInsertInto) {
			listener.enterInsertInto(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitInsertInto) {
			listener.exitInsertInto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitInsertInto) {
			return visitor.visitInsertInto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeleteContext extends StatementContext {
	public KW_DELETE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_DELETE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FROM, 0); }
	public KW_WHERE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class DeleteTableRefContext extends StatementContext {
	public KW_DELETE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_DELETE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public KW_FROM(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_FROM, 0); }
	public relation(): RelationContext[];
	public relation(i: number): RelationContext;
	public relation(i?: number): RelationContext | RelationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationContext);
		} else {
			return this.getRuleContext(i, RelationContext);
		}
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	public KW_WHERE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_AS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class UpdateTableContext extends StatementContext {
	public KW_UPDATE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_UPDATE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SET, 0); }
	public assignmentList(): AssignmentListContext {
		return this.getRuleContext(0, AssignmentListContext);
	}
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FROM, 0); }
	public relation(): RelationContext[];
	public relation(i: number): RelationContext;
	public relation(i?: number): RelationContext | RelationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationContext);
		} else {
			return this.getRuleContext(i, RelationContext);
		}
	}
	public KW_WHERE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterUpdateTable) {
			listener.enterUpdateTable(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitUpdateTable) {
			listener.exitUpdateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitUpdateTable) {
			return visitor.visitUpdateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UpsertContext extends StatementContext {
	public KW_UPSERT(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_UPSERT, 0); }
	public KW_INTO(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_INTO, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public hintClause(): HintClauseContext[];
	public hintClause(i: number): HintClauseContext;
	public hintClause(i?: number): HintClauseContext | HintClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HintClauseContext);
		} else {
			return this.getRuleContext(i, HintClauseContext);
		}
	}
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterUpsert) {
			listener.enterUpsert(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitUpsert) {
			listener.exitUpsert(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitUpsert) {
			return visitor.visitUpsert(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowSchemasContext extends StatementContext {
	public _pattern!: StringContext;
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SHOW, 0); }
	public KW_SCHEMAS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SCHEMAS, 0); }
	public KW_DATABASES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DATABASES, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public KW_LIKE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_LIKE, 0); }
	public BITWISEOR(): TerminalNode[];
	public BITWISEOR(i: number): TerminalNode;
	public BITWISEOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.BITWISEOR);
		} else {
			return this.getToken(ImpalaSqlParserParser.BITWISEOR, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class ShowTablesContext extends StatementContext {
	public _pattern!: StringContext;
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SHOW, 0); }
	public KW_TABLES(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLES, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FROM, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IN, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public KW_LIKE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_LIKE, 0); }
	public BITWISEOR(): TerminalNode[];
	public BITWISEOR(i: number): TerminalNode;
	public BITWISEOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.BITWISEOR);
		} else {
			return this.getToken(ImpalaSqlParserParser.BITWISEOR, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class ShowFunctionsContext extends StatementContext {
	public _pattern!: StringContext;
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SHOW, 0); }
	public KW_FUNCTIONS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_FUNCTIONS, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IN, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public KW_AGGREGATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_AGGREGATE, 0); }
	public KW_ANALYTIC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ANALYTIC, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public KW_LIKE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_LIKE, 0); }
	public BITWISEOR(): TerminalNode[];
	public BITWISEOR(i: number): TerminalNode;
	public BITWISEOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.BITWISEOR);
		} else {
			return this.getToken(ImpalaSqlParserParser.BITWISEOR, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class ShowCreateTableContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SHOW, 0); }
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class ShowCreateViewContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SHOW, 0); }
	public KW_CREATE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_CREATE, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_VIEW, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class ShowTableStatsContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SHOW, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public KW_STATS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_STATS, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class ShowColumnStatsContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SHOW, 0); }
	public KW_COLUMN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_COLUMN, 0); }
	public KW_STATS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_STATS, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class ShowPartitionsContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SHOW, 0); }
	public KW_PARTITIONS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_PARTITIONS, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_RANGE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_RANGE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class ShowFilesContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SHOW, 0); }
	public KW_FILES(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_FILES, 0); }
	public KW_IN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_IN, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PARTITION, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.RPAREN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.COMMA, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class ShowRolesContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SHOW, 0); }
	public KW_ROLES(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ROLES, 0); }
	public KW_CURRENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_CURRENT, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class ShowRoleGrantContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SHOW, 0); }
	public KW_ROLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ROLE, 0); }
	public KW_GRANT(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_GRANT, 0); }
	public KW_GROUP(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_GROUP, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class ShowGrantRoleContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SHOW, 0); }
	public KW_GRANT(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_GRANT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ROLE, 0); }
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_USER, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowGrantRole) {
			listener.enterShowGrantRole(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowGrantRole) {
			listener.exitShowGrantRole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowGrantRole) {
			return visitor.visitShowGrantRole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowGrantUserContext extends StatementContext {
	public KW_SHOW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SHOW, 0); }
	public KW_GRANT(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_GRANT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_USER, 0); }
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ROLE, 0); }
	public KW_GROUP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_GROUP, 0); }
	public KW_ON(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ON, 0); }
	public KW_SERVER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SERVER, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DATABASE, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public KW_COLUMN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_COLUMN, 0); }
	public KW_URI(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_URI, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterShowGrantUser) {
			listener.enterShowGrantUser(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitShowGrantUser) {
			listener.exitShowGrantUser(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitShowGrantUser) {
			return visitor.visitShowGrantUser(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddCommentsContext extends StatementContext {
	public KW_COMMENT(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_COMMENT, 0); }
	public KW_ON(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ON, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_IS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_IS, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DATABASE, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public KW_COLUMN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_COLUMN, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NULL, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class ExplainContext extends StatementContext {
	public KW_EXPLAIN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_EXPLAIN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class SetSessionContext extends StatementContext {
	public KW_SET(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SET, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ALL, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.EQ, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class ShutdownContext extends StatementContext {
	public COLON(): TerminalNode { return this.getToken(ImpalaSqlParserParser.COLON, 0); }
	public KW_SHUTDOWN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SHUTDOWN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.COMMA, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class InvalidateMetaContext extends StatementContext {
	public KW_INVALIDATE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_INVALIDATE, 0); }
	public KW_METADATA(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_METADATA, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class LoadDataContext extends StatementContext {
	public KW_LOAD(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_LOAD, 0); }
	public KW_DATA(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_DATA, 0); }
	public KW_INPATH(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_INPATH, 0); }
	public STRING(): TerminalNode { return this.getToken(ImpalaSqlParserParser.STRING, 0); }
	public KW_INTO(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_INTO, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_OVERWRITE, 0); }
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PARTITION, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.RPAREN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.COMMA, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class RefreshMetaContext extends StatementContext {
	public KW_REFRESH(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_REFRESH, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PARTITION, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class RefreshAuthContext extends StatementContext {
	public KW_REFRESH(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_REFRESH, 0); }
	public KW_AUTHORIZATION(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_AUTHORIZATION, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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


export class CreateCommonItemContext extends ParserRuleContext {
	public _comment!: StringContext;
	public _serdProp!: PropertiesContext;
	public _location!: StringContext;
	public _cacheName!: QualifiedNameContext;
	public _tblProp!: PropertiesContext;
	public KW_SORT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SORT, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_BY, 0); }
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_COMMENT, 0); }
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ROW, 0); }
	public KW_FORMAT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FORMAT, 0); }
	public rowFormat(): RowFormatContext | undefined {
		return this.tryGetRuleContext(0, RowFormatContext);
	}
	public KW_WITH(): TerminalNode[];
	public KW_WITH(i: number): TerminalNode;
	public KW_WITH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.KW_WITH);
		} else {
			return this.getToken(ImpalaSqlParserParser.KW_WITH, i);
		}
	}
	public KW_SERDEPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SERDEPROPERTIES, 0); }
	public KW_STORED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_STORED, 0); }
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_AS, 0); }
	public fileFormat(): FileFormatContext | undefined {
		return this.tryGetRuleContext(0, FileFormatContext);
	}
	public KW_LOCATION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_LOCATION, 0); }
	public KW_CACHED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_CACHED, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IN, 0); }
	public KW_UNCACHED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_UNCACHED, 0); }
	public KW_TBLPROPERTIES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TBLPROPERTIES, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
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
	public KW_REPLICATION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_REPLICATION, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.EQ, 0); }
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.INTEGER_VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_createCommonItem; }
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
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_assignmentList; }
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
	public EQ(): TerminalNode { return this.getToken(ImpalaSqlParserParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_assignmentItem; }
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
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
	public KW_COMMENT(): TerminalNode[];
	public KW_COMMENT(i: number): TerminalNode;
	public KW_COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.KW_COMMENT);
		} else {
			return this.getToken(ImpalaSqlParserParser.KW_COMMENT, i);
		}
	}
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_viewColumns; }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_query; }
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
	public KW_WITH(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_WITH, 0); }
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
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_with; }
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
	public KW_PRIMARY(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_PRIMARY, 0); }
	public KW_KEY(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_KEY, 0); }
	public columnAliases(): ColumnAliasesContext {
		return this.getRuleContext(0, ColumnAliasesContext);
	}
	public KW_DISABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DISABLE, 0); }
	public KW_NOVALIDATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NOVALIDATE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	public KW_RELY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_RELY, 0); }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_constraintSpecification; }
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
	public KW_FOREIGN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_FOREIGN, 0); }
	public KW_KEY(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_KEY, 0); }
	public columnAliases(): ColumnAliasesContext[];
	public columnAliases(i: number): ColumnAliasesContext;
	public columnAliases(i?: number): ColumnAliasesContext | ColumnAliasesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnAliasesContext);
		} else {
			return this.getRuleContext(i, ColumnAliasesContext);
		}
	}
	public KW_REFERENCES(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_REFERENCES, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_DISABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DISABLE, 0); }
	public KW_NOVALIDATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NOVALIDATE, 0); }
	public KW_RELY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_RELY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_foreignKeySpecification; }
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
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_COMMENT, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_columnDefinition; }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_kuduTableElement; }
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
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_COMMENT, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public KW_PRIMARY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PRIMARY, 0); }
	public KW_KEY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_KEY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_kuduColumnDefinition; }
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
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_COMMENT, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_columnSpecWithKudu; }
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
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NULL, 0); }
	public kuduStorageAttr(): KuduStorageAttrContext | undefined {
		return this.tryGetRuleContext(0, KuduStorageAttrContext);
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_kuduAttributes; }
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
	public KW_ENCODING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ENCODING, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public KW_COMPRESSION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_COMPRESSION, 0); }
	public KW_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DEFAULT, 0); }
	public KW_BLOCK_SIZE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_BLOCK_SIZE, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_kuduStorageAttr; }
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
	public STATS_NUMDVS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.STATS_NUMDVS, 0); }
	public STATS_NUMNULLS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.STATS_NUMNULLS, 0); }
	public STATS_AVGSIZE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.STATS_AVGSIZE, 0); }
	public STATS_MAXSIZE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.STATS_MAXSIZE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_statsKey; }
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
	public KW_TEXTFILE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TEXTFILE, 0); }
	public KW_PARQUET(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PARQUET, 0); }
	public KW_ORC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ORC, 0); }
	public KW_AVRO(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_AVRO, 0); }
	public KW_SEQUENCEFILE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SEQUENCEFILE, 0); }
	public KW_RCFILE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_RCFILE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_fileFormat; }
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
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	public rangeClause(): RangeClauseContext | undefined {
		return this.tryGetRuleContext(0, RangeClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_kuduPartitionClause; }
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
	public KW_HASH(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_HASH, 0); }
	public KW_PARTITIONS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_PARTITIONS, 0); }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_hashClause; }
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
	public KW_RANGE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_RANGE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
	public KW_PARTITION(): TerminalNode[];
	public KW_PARTITION(i: number): TerminalNode;
	public KW_PARTITION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.KW_PARTITION);
		} else {
			return this.getToken(ImpalaSqlParserParser.KW_PARTITION, i);
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
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_rangeClause; }
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
	public KW_VALUE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_VALUE, 0); }
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
	public rangeOperator(): RangeOperatorContext[];
	public rangeOperator(i: number): RangeOperatorContext;
	public rangeOperator(i?: number): RangeOperatorContext | RangeOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RangeOperatorContext);
		} else {
			return this.getRuleContext(i, RangeOperatorContext);
		}
	}
	public KW_VALUES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_VALUES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_kuduPartitionSpec; }
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
	public KW_CACHED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_CACHED, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IN, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_WITH, 0); }
	public KW_REPLICATION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_REPLICATION, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.EQ, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public KW_UNCACHED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_UNCACHED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_cacheSpec; }
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
	public LT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LTE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.GT, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.GTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_rangeOperator; }
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
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.NEQ, 0); }
	public KW_LIKE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_LIKE, 0); }
	public KW_RLIKE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_RLIKE, 0); }
	public KW_REGEXP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_REGEXP, 0); }
	public KW_BETWEEN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_BETWEEN, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IN, 0); }
	public rangeOperator(): RangeOperatorContext | undefined {
		return this.tryGetRuleContext(0, RangeOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_partitionCol; }
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
	public KW_LIKE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_LIKE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public KW_PROPERTIES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PROPERTIES, 0); }
	public KW_INCLUDING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_INCLUDING, 0); }
	public KW_EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXCLUDING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_likeClause; }
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


export class HintClauseContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_hintClause; }
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterHintClause) {
			listener.enterHintClause(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitHintClause) {
			listener.exitHintClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitHintClause) {
			return visitor.visitHintClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertiesContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public property(): PropertyContext[];
	public property(i: number): PropertyContext;
	public property(i?: number): PropertyContext | PropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyContext);
		} else {
			return this.getRuleContext(i, PropertyContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_properties; }
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
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public columnDefinition(): ColumnDefinitionContext[];
	public columnDefinition(i: number): ColumnDefinitionContext;
	public columnDefinition(i?: number): ColumnDefinitionContext | ColumnDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnDefinitionContext);
		} else {
			return this.getRuleContext(i, ColumnDefinitionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_partitionedBy; }
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
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_sortedBy; }
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
	public KW_DELIMITED(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_DELIMITED, 0); }
	public KW_FIELDS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FIELDS, 0); }
	public KW_TERMINATED(): TerminalNode[];
	public KW_TERMINATED(i: number): TerminalNode;
	public KW_TERMINATED(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.KW_TERMINATED);
		} else {
			return this.getToken(ImpalaSqlParserParser.KW_TERMINATED, i);
		}
	}
	public KW_BY(): TerminalNode[];
	public KW_BY(i: number): TerminalNode;
	public KW_BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.KW_BY);
		} else {
			return this.getToken(ImpalaSqlParserParser.KW_BY, i);
		}
	}
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public KW_LINES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_LINES, 0); }
	public KW_ESCAPED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ESCAPED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_rowFormat; }
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
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.EQ, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_property; }
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
	public KW_ORDER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ORDER, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_BY, 0); }
	public sortItem(): SortItemContext[];
	public sortItem(i: number): SortItemContext;
	public sortItem(i?: number): SortItemContext | SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		} else {
			return this.getRuleContext(i, SortItemContext);
		}
	}
	public KW_LIMIT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_LIMIT, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	public KW_OFFSET(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_OFFSET, 0); }
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.INTEGER_VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_queryNoWith; }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_queryTerm; }
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
	public KW_INTERSECT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_INTERSECT, 0); }
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public KW_UNION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_UNION, 0); }
	public KW_EXCEPT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXCEPT, 0); }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_queryPrimary; }
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
	public KW_TABLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_TABLE, 0); }
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
	public KW_VALUES(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_VALUES, 0); }
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
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
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
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public queryNoWith(): QueryNoWithContext {
		return this.getRuleContext(0, QueryNoWithContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
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
	public KW_NULLS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NULLS, 0); }
	public KW_ASC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ASC, 0); }
	public KW_DESC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DESC, 0); }
	public KW_FIRST(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FIRST, 0); }
	public KW_LAST(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_LAST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_sortItem; }
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
	public KW_SELECT(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SELECT, 0); }
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
	public KW_STRAIGHT_JOIN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_STRAIGHT_JOIN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FROM, 0); }
	public relation(): RelationContext[];
	public relation(i: number): RelationContext;
	public relation(i?: number): RelationContext | RelationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationContext);
		} else {
			return this.getRuleContext(i, RelationContext);
		}
	}
	public KW_WHERE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_WHERE, 0); }
	public KW_GROUP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_GROUP, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_BY, 0); }
	public groupBy(): GroupByContext | undefined {
		return this.tryGetRuleContext(0, GroupByContext);
	}
	public KW_HAVING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_HAVING, 0); }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_querySpecification; }
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
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_groupBy; }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_groupingElement; }
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
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.RPAREN, 0); }
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
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_groupingSet; }
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
	public KW_AS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_AS, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_namedQuery; }
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
	public KW_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DISTINCT, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_setQuantifier; }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_selectItem; }
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
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_AS, 0); }
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
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.DOT, 0); }
	public ASTERISK(): TerminalNode { return this.getToken(ImpalaSqlParserParser.ASTERISK, 0); }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_relation; }
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
	public KW_CROSS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_CROSS, 0); }
	public KW_JOIN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_JOIN, 0); }
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
	public KW_INNER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_INNER, 0); }
	public KW_LEFT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_LEFT, 0); }
	public KW_RIGHT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_RIGHT, 0); }
	public KW_OUTER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_OUTER, 0); }
	public KW_FULL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FULL, 0); }
	public KW_SEMI(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SEMI, 0); }
	public KW_ANTI(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ANTI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_joinType; }
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
	public KW_ON(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ON, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	public KW_USING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_USING, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LPAREN, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_joinCriteria; }
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
	public KW_TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TABLESAMPLE, 0); }
	public sampleType(): SampleTypeContext | undefined {
		return this.tryGetRuleContext(0, SampleTypeContext);
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.LPAREN);
		} else {
			return this.getToken(ImpalaSqlParserParser.LPAREN, i);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.RPAREN);
		} else {
			return this.getToken(ImpalaSqlParserParser.RPAREN, i);
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
	public KW_REPEATABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_REPEATABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_sampledRelation; }
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
	public KW_BERNOULLI(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_BERNOULLI, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SYSTEM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_sampleType; }
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
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_AS, 0); }
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_aliasedRelation; }
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
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_columnAliases; }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_relationPrimary; }
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
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
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
	public KW_UNNEST(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_UNNEST, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_WITH, 0); }
	public KW_ORDINALITY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ORDINALITY, 0); }
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
	public KW_LATERAL(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_LATERAL, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
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
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public relation(): RelationContext {
		return this.getRuleContext(0, RelationContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_expression; }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_booleanExpression; }
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
	public KW_NOT(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_NOT, 0); }
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
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_AND, 0); }
	public KW_OR(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_OR, 0); }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_predicate; }
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
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
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
	public KW_BETWEEN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_BETWEEN, 0); }
	public KW_AND(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_AND, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NOT, 0); }
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
	public KW_IN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_IN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NOT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
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
	public KW_IN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_IN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NOT, 0); }
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
	public KW_LIKE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_LIKE, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NOT, 0); }
	public KW_ESCAPE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ESCAPE, 0); }
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
	public KW_REGEXP(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_REGEXP, 0); }
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
	public KW_IS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_IS, 0); }
	public KW_NULL(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_NULL, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NOT, 0); }
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
	public KW_IS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_IS, 0); }
	public KW_DISTINCT(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_DISTINCT, 0); }
	public KW_FROM(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_FROM, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NOT, 0); }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_valueExpression; }
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
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.PLUS, 0); }
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
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.SLASH, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.PERCENT, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.MINUS, 0); }
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
	public CONCAT(): TerminalNode { return this.getToken(ImpalaSqlParserParser.CONCAT, 0); }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_primaryExpression; }
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class NullLiteralContext extends PrimaryExpressionContext {
	public KW_NULL(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_NULL, 0); }
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
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public DOUBLE_PRECISION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.DOUBLE_PRECISION, 0); }
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
export class StringLiteralContext extends PrimaryExpressionContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ImpalaSqlParserListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ImpalaSqlParserListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ImpalaSqlParserVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryLiteralContext extends PrimaryExpressionContext {
	public BINARY_LITERAL(): TerminalNode { return this.getToken(ImpalaSqlParserParser.BINARY_LITERAL, 0); }
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
	public QUESTION(): TerminalNode { return this.getToken(ImpalaSqlParserParser.QUESTION, 0); }
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
	public KW_POSITION(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_POSITION, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public KW_IN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_IN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
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
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
	public KW_AS(): TerminalNode[];
	public KW_AS(i: number): TerminalNode;
	public KW_AS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.KW_AS);
		} else {
			return this.getToken(ImpalaSqlParserParser.KW_AS, i);
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
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ROW, 0); }
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
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.ASTERISK, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
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
	public KW_ORDER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ORDER, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_BY, 0); }
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
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
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
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
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
	public KW_EXISTS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_EXISTS, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
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
	public KW_CASE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_CASE, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public KW_END(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_END, 0); }
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public KW_ELSE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ELSE, 0); }
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
	public KW_CASE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_CASE, 0); }
	public KW_END(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_END, 0); }
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public KW_ELSE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ELSE, 0); }
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
	public KW_CAST(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_CAST, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_AS, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
	public KW_TRY_CAST(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TRY_CAST, 0); }
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
	public KW_ARRAY(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ARRAY, 0); }
	public LSQUARE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LSQUARE, 0); }
	public RSQUARE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RSQUARE, 0); }
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
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
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
	public LSQUARE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LSQUARE, 0); }
	public RSQUARE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RSQUARE, 0); }
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
	public DOT(): TerminalNode { return this.getToken(ImpalaSqlParserParser.DOT, 0); }
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
	public KW_CURRENT_DATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_CURRENT_DATE, 0); }
	public KW_CURRENT_TIME(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_CURRENT_TIME, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.RPAREN, 0); }
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.INTEGER_VALUE, 0); }
	public KW_CURRENT_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_CURRENT_TIMESTAMP, 0); }
	public KW_LOCALTIME(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_LOCALTIME, 0); }
	public KW_LOCALTIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_LOCALTIMESTAMP, 0); }
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
	public KW_CURRENT_USER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_CURRENT_USER, 0); }
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
	public KW_CURRENT_PATH(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_CURRENT_PATH, 0); }
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
	public KW_SUBSTRING(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_SUBSTRING, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public KW_FROM(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_FROM, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
	public KW_FOR(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FOR, 0); }
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
	public KW_NORMALIZE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_NORMALIZE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.COMMA, 0); }
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
	public KW_EXTRACT(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_EXTRACT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_FROM(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_FROM, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
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
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
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
	public KW_GROUPING(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_GROUPING, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
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
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
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


export class StringContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_string; }
	public copyFrom(ctx: StringContext): void {
		super.copyFrom(ctx);
	}
}
export class BasicStringLiteralContext extends StringContext {
	public STRING(): TerminalNode { return this.getToken(ImpalaSqlParserParser.STRING, 0); }
	constructor(ctx: StringContext) {
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
export class UnicodeStringLiteralContext extends StringContext {
	public UNICODE_STRING(): TerminalNode { return this.getToken(ImpalaSqlParserParser.UNICODE_STRING, 0); }
	public KW_UESCAPE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_UESCAPE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.STRING, 0); }
	constructor(ctx: StringContext) {
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
	public EQ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.NEQ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LTE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.GT, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.GTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_comparisonOperator; }
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
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ALL, 0); }
	public KW_SOME(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SOME, 0); }
	public KW_ANY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ANY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_comparisonQuantifier; }
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
	public KW_TRUE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TRUE, 0); }
	public KW_FALSE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_booleanValue; }
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
	public INTEGER_VALUE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.INTEGER_VALUE, 0); }
	public intervalField(): IntervalFieldContext {
		return this.getRuleContext(0, IntervalFieldContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.RPAREN, 0); }
	public KW_INTERVAL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_INTERVAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_interval; }
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
	public KW_YEAR(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_YEAR, 0); }
	public KW_YEARS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_YEARS, 0); }
	public KW_MONTH(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_MONTH, 0); }
	public KW_MONTHS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_MONTHS, 0); }
	public KW_DAY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DAY, 0); }
	public KW_DAYS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DAYS, 0); }
	public KW_HOUR(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_HOUR, 0); }
	public KW_HOURS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_HOURS, 0); }
	public KW_MINUTE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_MINUTE, 0); }
	public KW_MINUTES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_MINUTES, 0); }
	public KW_SECOND(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SECOND, 0); }
	public KW_SECONDS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SECONDS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_intervalField; }
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
	public KW_NFD(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NFD, 0); }
	public KW_NFC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NFC, 0); }
	public KW_NFKD(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NFKD, 0); }
	public KW_NFKC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NFKC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_normalForm; }
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
	public KW_ARRAY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ARRAY, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.GT, 0); }
	public KW_MAP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_MAP, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	public KW_STRUCT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_STRUCT, 0); }
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
			return this.getTokens(ImpalaSqlParserParser.COLON);
		} else {
			return this.getToken(ImpalaSqlParserParser.COLON, i);
		}
	}
	public baseType(): BaseTypeContext | undefined {
		return this.tryGetRuleContext(0, BaseTypeContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LPAREN, 0); }
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_type; }
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
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.INTEGER_VALUE, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_typeParameter; }
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
	public TIME_WITH_TIME_ZONE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.TIME_WITH_TIME_ZONE, 0); }
	public TIMESTAMP_WITH_TIME_ZONE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.TIMESTAMP_WITH_TIME_ZONE, 0); }
	public DOUBLE_PRECISION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.DOUBLE_PRECISION, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_baseType; }
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
	public KW_WHEN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_WHEN, 0); }
	public KW_THEN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_THEN, 0); }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_whenClause; }
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
	public KW_FILTER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_FILTER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public KW_WHERE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_filter; }
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
	public KW_OVER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_OVER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ImpalaSqlParserParser.RPAREN, 0); }
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PARTITION, 0); }
	public KW_BY(): TerminalNode[];
	public KW_BY(i: number): TerminalNode;
	public KW_BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ImpalaSqlParserParser.KW_BY);
		} else {
			return this.getToken(ImpalaSqlParserParser.KW_BY, i);
		}
	}
	public KW_ORDER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ORDER, 0); }
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
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_over; }
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
	public _start!: FrameBoundContext;
	public _end!: FrameBoundContext;
	public KW_RANGE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_RANGE, 0); }
	public frameBound(): FrameBoundContext[];
	public frameBound(i: number): FrameBoundContext;
	public frameBound(i?: number): FrameBoundContext | FrameBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FrameBoundContext);
		} else {
			return this.getRuleContext(i, FrameBoundContext);
		}
	}
	public KW_ROWS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ROWS, 0); }
	public KW_BETWEEN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_BETWEEN, 0); }
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_AND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_windowFrame; }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_frameBound; }
	public copyFrom(ctx: FrameBoundContext): void {
		super.copyFrom(ctx);
	}
}
export class UnboundedFrameContext extends FrameBoundContext {
	public _boundType!: Token;
	public KW_UNBOUNDED(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_UNBOUNDED, 0); }
	public KW_PRECEDING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PRECEDING, 0); }
	public KW_FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FOLLOWING, 0); }
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
	public KW_CURRENT(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_CURRENT, 0); }
	public KW_ROW(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ROW, 0); }
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
	public KW_PRECEDING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PRECEDING, 0); }
	public KW_FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FOLLOWING, 0); }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_pathElement; }
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
	public DOT(): TerminalNode { return this.getToken(ImpalaSqlParserParser.DOT, 0); }
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
			return this.getTokens(ImpalaSqlParserParser.COMMA);
		} else {
			return this.getToken(ImpalaSqlParserParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_pathSpecification; }
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
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ALL, 0); }
	public KW_ALTER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ALTER, 0); }
	public KW_DROP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DROP, 0); }
	public KW_CREATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_CREATE, 0); }
	public KW_INSERT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_INSERT, 0); }
	public KW_REFRESH(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_REFRESH, 0); }
	public KW_SELECT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SELECT, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.RPAREN, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_privilege; }
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
	public KW_SERVER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SERVER, 0); }
	public KW_URI(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_URI, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DATABASE, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_objectType; }
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
			return this.getTokens(ImpalaSqlParserParser.DOT);
		} else {
			return this.getToken(ImpalaSqlParserParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_qualifiedName; }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_principal; }
	public copyFrom(ctx: PrincipalContext): void {
		super.copyFrom(ctx);
	}
}
export class RolePrincipalContext extends PrincipalContext {
	public KW_ROLE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_ROLE, 0); }
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
	public KW_USER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_USER, 0); }
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
	public KW_GROUP(): TerminalNode { return this.getToken(ImpalaSqlParserParser.KW_GROUP, 0); }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_identifier; }
	public copyFrom(ctx: IdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class UnquotedIdentifierContext extends IdentifierContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.IDENTIFIER, 0); }
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
	public STRING(): TerminalNode { return this.getToken(ImpalaSqlParserParser.STRING, 0); }
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
	public BACKQUOTED_IDENTIFIER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.BACKQUOTED_IDENTIFIER, 0); }
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
	public DIGIT_IDENTIFIER(): TerminalNode { return this.getToken(ImpalaSqlParserParser.DIGIT_IDENTIFIER, 0); }
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
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_number; }
	public copyFrom(ctx: NumberContext): void {
		super.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends NumberContext {
	public DECIMAL_VALUE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.DECIMAL_VALUE, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.MINUS, 0); }
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
	public DOUBLE_VALUE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.DOUBLE_VALUE, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.MINUS, 0); }
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
	public INTEGER_VALUE(): TerminalNode { return this.getToken(ImpalaSqlParserParser.INTEGER_VALUE, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.MINUS, 0); }
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
	public KW_ADD(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ADD, 0); }
	public KW_ADMIN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ADMIN, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ALL, 0); }
	public KW_ANALYZE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ANALYZE, 0); }
	public KW_ANY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ANY, 0); }
	public KW_ARRAY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ARRAY, 0); }
	public KW_ASC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ASC, 0); }
	public KW_AT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_AT, 0); }
	public KW_BERNOULLI(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_BERNOULLI, 0); }
	public KW_CALL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_CALL, 0); }
	public KW_CASCADE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_CASCADE, 0); }
	public KW_CATALOGS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_CATALOGS, 0); }
	public KW_COLUMN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_COLUMN, 0); }
	public KW_COLUMNS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_COLUMNS, 0); }
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_COMMENT, 0); }
	public KW_COMMIT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_COMMIT, 0); }
	public KW_COMMITTED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_COMMITTED, 0); }
	public KW_CURRENT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_CURRENT, 0); }
	public KW_DATA(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DATA, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DATABASE, 0); }
	public KW_DATABASES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DATABASES, 0); }
	public KW_DATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DATE, 0); }
	public KW_DAY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DAY, 0); }
	public KW_DAYS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DAYS, 0); }
	public KW_DEFINER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DEFINER, 0); }
	public KW_DESC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DESC, 0); }
	public KW_EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXCLUDING, 0); }
	public KW_EXPLAIN(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_EXPLAIN, 0); }
	public KW_FETCH(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FETCH, 0); }
	public KW_FILTER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FILTER, 0); }
	public KW_FIRST(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FIRST, 0); }
	public KW_FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FOLLOWING, 0); }
	public KW_FORMAT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FORMAT, 0); }
	public KW_FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_FUNCTIONS, 0); }
	public KW_GRANT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_GRANT, 0); }
	public KW_GRANTED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_GRANTED, 0); }
	public KW_GRANTS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_GRANTS, 0); }
	public KW_GRAPHVIZ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_GRAPHVIZ, 0); }
	public KW_HOUR(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_HOUR, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IF, 0); }
	public KW_INCLUDING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_INCLUDING, 0); }
	public KW_INPUT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_INPUT, 0); }
	public KW_INTERVAL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_INTERVAL, 0); }
	public KW_INVOKER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_INVOKER, 0); }
	public KW_IO(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_IO, 0); }
	public KW_ISOLATION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ISOLATION, 0); }
	public KW_JSON(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_JSON, 0); }
	public KW_LAST(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_LAST, 0); }
	public KW_LATERAL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_LATERAL, 0); }
	public KW_LEVEL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_LEVEL, 0); }
	public KW_LIMIT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_LIMIT, 0); }
	public KW_LOGICAL(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_LOGICAL, 0); }
	public KW_MAP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_MAP, 0); }
	public KW_MINUTE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_MINUTE, 0); }
	public KW_MONTH(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_MONTH, 0); }
	public KW_NEXT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NEXT, 0); }
	public KW_NFC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NFC, 0); }
	public KW_NFD(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NFD, 0); }
	public KW_NFKC(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NFKC, 0); }
	public KW_NFKD(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NFKD, 0); }
	public KW_NO(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NO, 0); }
	public KW_NONE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NONE, 0); }
	public KW_NULLIF(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NULLIF, 0); }
	public KW_NULLS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_NULLS, 0); }
	public KW_OFFSET(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_OFFSET, 0); }
	public KW_ONLY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ONLY, 0); }
	public KW_OPTION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_OPTION, 0); }
	public KW_ORDINALITY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ORDINALITY, 0); }
	public KW_OUTPUT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_OUTPUT, 0); }
	public KW_OVER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_OVER, 0); }
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PARTITION, 0); }
	public KW_PARTITIONS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PARTITIONS, 0); }
	public KW_PARQUET(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PARQUET, 0); }
	public KW_PATH(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PATH, 0); }
	public KW_POSITION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_POSITION, 0); }
	public KW_PRECEDING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PRECEDING, 0); }
	public KW_PRIVILEGES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PRIVILEGES, 0); }
	public KW_PROPERTIES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_PROPERTIES, 0); }
	public KW_RANGE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_RANGE, 0); }
	public KW_READ(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_READ, 0); }
	public KW_RENAME(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_RENAME, 0); }
	public KW_REPEATABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_REPEATABLE, 0); }
	public KW_REPLACE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_REPLACE, 0); }
	public KW_RESET(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_RESET, 0); }
	public KW_RESTRICT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_RESTRICT, 0); }
	public KW_REVOKE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_REVOKE, 0); }
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ROLE, 0); }
	public KW_ROLES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ROLES, 0); }
	public KW_ROLLBACK(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ROLLBACK, 0); }
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ROW, 0); }
	public KW_ROWS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ROWS, 0); }
	public KW_SCHEMA(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SCHEMA, 0); }
	public KW_SCHEMAS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SCHEMAS, 0); }
	public KW_SECOND(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SECOND, 0); }
	public KW_SECONDS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SECONDS, 0); }
	public KW_SECURITY(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SECURITY, 0); }
	public KW_SERIALIZABLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SERIALIZABLE, 0); }
	public KW_SESSION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SESSION, 0); }
	public KW_SET(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SET, 0); }
	public KW_SETS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SETS, 0); }
	public KW_SHOW(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SHOW, 0); }
	public KW_SOME(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SOME, 0); }
	public KW_START(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_START, 0); }
	public KW_STATS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_STATS, 0); }
	public KW_SUBSTRING(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SUBSTRING, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_SYSTEM, 0); }
	public KW_TABLES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TABLES, 0); }
	public KW_TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TABLESAMPLE, 0); }
	public KW_TEXT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TEXT, 0); }
	public KW_TIES(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TIES, 0); }
	public KW_TIME(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TIME, 0); }
	public KW_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TIMESTAMP, 0); }
	public KW_TO(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TO, 0); }
	public KW_TRANSACTION(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TRANSACTION, 0); }
	public KW_TRY_CAST(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TRY_CAST, 0); }
	public KW_TYPE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_TYPE, 0); }
	public KW_UNBOUNDED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_UNBOUNDED, 0); }
	public KW_UNCOMMITTED(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_UNCOMMITTED, 0); }
	public KW_USE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_USE, 0); }
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_USER, 0); }
	public KW_VALIDATE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_VALIDATE, 0); }
	public KW_VERBOSE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_VERBOSE, 0); }
	public KW_VIEW(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_VIEW, 0); }
	public KW_VIEWS(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_VIEWS, 0); }
	public KW_WORK(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_WORK, 0); }
	public KW_WRITE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_WRITE, 0); }
	public KW_YEAR(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_YEAR, 0); }
	public KW_ZONE(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_ZONE, 0); }
	public KW_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(ImpalaSqlParserParser.KW_DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ImpalaSqlParserParser.RULE_nonReserved; }
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


