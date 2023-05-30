// Generated from /Users/ziv/github.com/dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { FlinkSqlParserListener } from "./FlinkSqlParserListener";
import { FlinkSqlParserVisitor } from "./FlinkSqlParserVisitor";


export class FlinkSqlParser extends Parser {
	public static readonly SPACE = 1;
	public static readonly COMMENT_INPUT = 2;
	public static readonly LINE_COMMENT = 3;
	public static readonly KW_ADD = 4;
	public static readonly KW_ADMIN = 5;
	public static readonly KW_AFTER = 6;
	public static readonly KW_ANALYZE = 7;
	public static readonly KW_ASC = 8;
	public static readonly KW_BEFORE = 9;
	public static readonly KW_BYTES = 10;
	public static readonly KW_CASCADE = 11;
	public static readonly KW_CATALOG = 12;
	public static readonly KW_CATALOGS = 13;
	public static readonly KW_CENTURY = 14;
	public static readonly KW_CHAIN = 15;
	public static readonly KW_CHANGELOG_MODE = 16;
	public static readonly KW_CHARACTERS = 17;
	public static readonly KW_COMMENT = 18;
	public static readonly KW_COMPACT = 19;
	public static readonly KW_COLUMNS = 20;
	public static readonly KW_CONSTRAINTS = 21;
	public static readonly KW_CONSTRUCTOR = 22;
	public static readonly KW_CUMULATE = 23;
	public static readonly KW_DATA = 24;
	public static readonly KW_DATABASE = 25;
	public static readonly KW_DATABASES = 26;
	public static readonly KW_DAYS = 27;
	public static readonly KW_DECADE = 28;
	public static readonly KW_DEFINED = 29;
	public static readonly KW_DESC = 30;
	public static readonly KW_DESCRIPTOR = 31;
	public static readonly KW_DIV = 32;
	public static readonly KW_ENCODING = 33;
	public static readonly KW_ENFORCED = 34;
	public static readonly KW_ENGINE = 35;
	public static readonly KW_EPOCH = 36;
	public static readonly KW_ERROR = 37;
	public static readonly KW_ESTIMATED_COST = 38;
	public static readonly KW_EXCEPTION = 39;
	public static readonly KW_EXCLUDE = 40;
	public static readonly KW_EXCLUDING = 41;
	public static readonly KW_EXTENDED = 42;
	public static readonly KW_FILE = 43;
	public static readonly KW_FINAL = 44;
	public static readonly KW_FIRST = 45;
	public static readonly KW_FOLLOWING = 46;
	public static readonly KW_FORMAT = 47;
	public static readonly KW_FORTRAN = 48;
	public static readonly KW_FOUND = 49;
	public static readonly KW_FRAC_SECOND = 50;
	public static readonly KW_FUNCTIONS = 51;
	public static readonly KW_GENERAL = 52;
	public static readonly KW_GENERATED = 53;
	public static readonly KW_GO = 54;
	public static readonly KW_GOTO = 55;
	public static readonly KW_GRANTED = 56;
	public static readonly KW_HOP = 57;
	public static readonly KW_HOURS = 58;
	public static readonly KW_IF = 59;
	public static readonly KW_IGNORE = 60;
	public static readonly KW_INCREMENT = 61;
	public static readonly KW_INPUT = 62;
	public static readonly KW_INVOKER = 63;
	public static readonly KW_JAR = 64;
	public static readonly KW_JARS = 65;
	public static readonly KW_JAVA = 66;
	public static readonly KW_JSON = 67;
	public static readonly KW_JSON_EXECUTION_PLAN = 68;
	public static readonly KW_KEY = 69;
	public static readonly KW_KEY_MEMBER = 70;
	public static readonly KW_KEY_TYPE = 71;
	public static readonly KW_LABEL = 72;
	public static readonly KW_LAST = 73;
	public static readonly KW_LENGTH = 74;
	public static readonly KW_LEVEL = 75;
	public static readonly KW_LOAD = 76;
	public static readonly KW_MAP = 77;
	public static readonly KW_MICROSECOND = 78;
	public static readonly KW_MILLENNIUM = 79;
	public static readonly KW_MILLISECOND = 80;
	public static readonly KW_MINUTES = 81;
	public static readonly KW_MINVALUE = 82;
	public static readonly KW_MODIFY = 83;
	public static readonly KW_MODULES = 84;
	public static readonly KW_MONTHS = 85;
	public static readonly KW_NANOSECOND = 86;
	public static readonly KW_NULLS = 87;
	public static readonly KW_NUMBER = 88;
	public static readonly KW_OPTION = 89;
	public static readonly KW_OPTIONS = 90;
	public static readonly KW_ORDERING = 91;
	public static readonly KW_OUTPUT = 92;
	public static readonly KW_OVERWRITE = 93;
	public static readonly KW_OVERWRITING = 94;
	public static readonly KW_PARTITIONED = 95;
	public static readonly KW_PARTITIONS = 96;
	public static readonly KW_PASSING = 97;
	public static readonly KW_PAST = 98;
	public static readonly KW_PATH = 99;
	public static readonly KW_PLACING = 100;
	public static readonly KW_PLAN = 101;
	public static readonly KW_PRECEDING = 102;
	public static readonly KW_PRESERVE = 103;
	public static readonly KW_PRIOR = 104;
	public static readonly KW_PRIVILEGES = 105;
	public static readonly KW_PUBLIC = 106;
	public static readonly KW_PYTHON = 107;
	public static readonly KW_PYTHON_FILES = 108;
	public static readonly KW_PYTHON_REQUIREMENTS = 109;
	public static readonly KW_PYTHON_DEPENDENCIES = 110;
	public static readonly KW_PYTHON_JAR = 111;
	public static readonly KW_PYTHON_ARCHIVES = 112;
	public static readonly KW_PYTHON_PARAMETER = 113;
	public static readonly KW_QUARTER = 114;
	public static readonly KW_RAW = 115;
	public static readonly KW_READ = 116;
	public static readonly KW_RELATIVE = 117;
	public static readonly KW_REMOVE = 118;
	public static readonly KW_RENAME = 119;
	public static readonly KW_REPLACE = 120;
	public static readonly KW_RESPECT = 121;
	public static readonly KW_RESTART = 122;
	public static readonly KW_RESTRICT = 123;
	public static readonly KW_ROLE = 124;
	public static readonly KW_ROW_COUNT = 125;
	public static readonly KW_SCALA = 126;
	public static readonly KW_SCALAR = 127;
	public static readonly KW_SCALE = 128;
	public static readonly KW_SCHEMA = 129;
	public static readonly KW_SECONDS = 130;
	public static readonly KW_SECTION = 131;
	public static readonly KW_SECURITY = 132;
	public static readonly KW_SELF = 133;
	public static readonly KW_SERVER = 134;
	public static readonly KW_SERVER_NAME = 135;
	public static readonly KW_SESSION = 136;
	public static readonly KW_SETS = 137;
	public static readonly KW_SIMPLE = 138;
	public static readonly KW_SIZE = 139;
	public static readonly KW_SLIDE = 140;
	public static readonly KW_SOURCE = 141;
	public static readonly KW_SPACE = 142;
	public static readonly KW_STATE = 143;
	public static readonly KW_STATEMENT = 144;
	public static readonly KW_STEP = 145;
	public static readonly KW_STRING = 146;
	public static readonly KW_STRUCTURE = 147;
	public static readonly KW_STYLE = 148;
	public static readonly KW_TABLES = 149;
	public static readonly KW_TEMPORARY = 150;
	public static readonly KW_TIMECOL = 151;
	public static readonly KW_TIMESTAMP_LTZ = 152;
	public static readonly KW_TIMESTAMPADD = 153;
	public static readonly KW_TIMESTAMPDIFF = 154;
	public static readonly KW_TRANSFORM = 155;
	public static readonly KW_TUMBLE = 156;
	public static readonly KW_TYPE = 157;
	public static readonly KW_UNDER = 158;
	public static readonly KW_UNLOAD = 159;
	public static readonly KW_USAGE = 160;
	public static readonly KW_USE = 161;
	public static readonly KW_UTF16 = 162;
	public static readonly KW_UTF32 = 163;
	public static readonly KW_UTF8 = 164;
	public static readonly KW_VERSION = 165;
	public static readonly KW_VIEW = 166;
	public static readonly KW_VIEWS = 167;
	public static readonly KW_VIRTUAL = 168;
	public static readonly KW_WATERMARK = 169;
	public static readonly KW_WATERMARKS = 170;
	public static readonly KW_WEEK = 171;
	public static readonly KW_WEEKS = 172;
	public static readonly KW_WORK = 173;
	public static readonly KW_WRAPPER = 174;
	public static readonly KW_YEARS = 175;
	public static readonly KW_ZONE = 176;
	public static readonly KW_ABS = 177;
	public static readonly KW_ALL = 178;
	public static readonly KW_ALLOW = 179;
	public static readonly KW_ALTER = 180;
	public static readonly KW_AND = 181;
	public static readonly KW_ANY = 182;
	public static readonly KW_ARE = 183;
	public static readonly KW_ARRAY = 184;
	public static readonly KW_AS = 185;
	public static readonly KW_ASYMMETRIC = 186;
	public static readonly KW_AT = 187;
	public static readonly KW_AVG = 188;
	public static readonly KW_BEGIN = 189;
	public static readonly KW_BETWEEN = 190;
	public static readonly KW_BIGINT = 191;
	public static readonly KW_BINARY = 192;
	public static readonly KW_BIT = 193;
	public static readonly KW_BLOB = 194;
	public static readonly KW_BOOLEAN = 195;
	public static readonly KW_BOTH = 196;
	public static readonly KW_BY = 197;
	public static readonly KW_CALL = 198;
	public static readonly KW_CALLED = 199;
	public static readonly KW_CASCADED = 200;
	public static readonly KW_CASE = 201;
	public static readonly KW_CAST = 202;
	public static readonly KW_CEIL = 203;
	public static readonly KW_CHAR = 204;
	public static readonly KW_CHARACTER = 205;
	public static readonly KW_CHECK = 206;
	public static readonly KW_CLOB = 207;
	public static readonly KW_CLOSE = 208;
	public static readonly KW_COALESCE = 209;
	public static readonly KW_COLLATE = 210;
	public static readonly KW_COLLECT = 211;
	public static readonly KW_COLUMN = 212;
	public static readonly KW_COMMIT = 213;
	public static readonly KW_CONNECT = 214;
	public static readonly KW_CONSTRAINT = 215;
	public static readonly KW_CONTAINS = 216;
	public static readonly KW_CONVERT = 217;
	public static readonly KW_COUNT = 218;
	public static readonly KW_CREATE = 219;
	public static readonly KW_CROSS = 220;
	public static readonly KW_CUBE = 221;
	public static readonly KW_CURRENT = 222;
	public static readonly KW_CURSOR = 223;
	public static readonly KW_CYCLE = 224;
	public static readonly KW_DATE = 225;
	public static readonly KW_DATETIME = 226;
	public static readonly KW_DAY = 227;
	public static readonly KW_DEC = 228;
	public static readonly KW_DECIMAL = 229;
	public static readonly KW_DECLARE = 230;
	public static readonly KW_DEFAULT = 231;
	public static readonly KW_DEFINE = 232;
	public static readonly KW_DELETE = 233;
	public static readonly KW_DESCRIBE = 234;
	public static readonly KW_DISTINCT = 235;
	public static readonly KW_DOUBLE = 236;
	public static readonly KW_DROP = 237;
	public static readonly KW_EACH = 238;
	public static readonly KW_ELSE = 239;
	public static readonly KW_END = 240;
	public static readonly KW_EQUALS = 241;
	public static readonly KW_ESCAPE = 242;
	public static readonly KW_EXCEPT = 243;
	public static readonly KW_EXECUTE = 244;
	public static readonly KW_EXISTS = 245;
	public static readonly KW_EXPLAIN = 246;
	public static readonly KW_EXTERNAL = 247;
	public static readonly KW_EXTRACT = 248;
	public static readonly KW_FALSE = 249;
	public static readonly KW_FLOAT = 250;
	public static readonly KW_FOR = 251;
	public static readonly KW_FROM = 252;
	public static readonly KW_FULL = 253;
	public static readonly KW_FUNCTION = 254;
	public static readonly KW_GLOBAL = 255;
	public static readonly KW_GRANT = 256;
	public static readonly KW_GROUP = 257;
	public static readonly KW_GROUPING = 258;
	public static readonly KW_GROUPS = 259;
	public static readonly KW_HAVING = 260;
	public static readonly KW_HOUR = 261;
	public static readonly KW_IMPORT = 262;
	public static readonly KW_IN = 263;
	public static readonly KW_INCLUDING = 264;
	public static readonly KW_INNER = 265;
	public static readonly KW_INOUT = 266;
	public static readonly KW_INSERT = 267;
	public static readonly KW_INT = 268;
	public static readonly KW_INTEGER = 269;
	public static readonly KW_INTERSECT = 270;
	public static readonly KW_INTERVAL = 271;
	public static readonly KW_INTO = 272;
	public static readonly KW_IS = 273;
	public static readonly KW_JOIN = 274;
	public static readonly KW_LAG = 275;
	public static readonly KW_LANGUAGE = 276;
	public static readonly KW_LATERAL = 277;
	public static readonly KW_LEADING = 278;
	public static readonly KW_LEFT = 279;
	public static readonly KW_LIKE = 280;
	public static readonly KW_LIMIT = 281;
	public static readonly KW_LOCAL = 282;
	public static readonly KW_MATCH = 283;
	public static readonly KW_MATCH_RECOGNIZE = 284;
	public static readonly KW_MEASURES = 285;
	public static readonly KW_MERGE = 286;
	public static readonly KW_METADATA = 287;
	public static readonly KW_MINUS = 288;
	public static readonly KW_MINUTE = 289;
	public static readonly KW_MODIFIES = 290;
	public static readonly KW_MODULE = 291;
	public static readonly KW_MONTH = 292;
	public static readonly KW_MULTISET = 293;
	public static readonly KW_NATURAL = 294;
	public static readonly KW_NEXT = 295;
	public static readonly KW_NO = 296;
	public static readonly KW_NONE = 297;
	public static readonly KW_NOT = 298;
	public static readonly KW_NULL = 299;
	public static readonly KW_NUMERIC = 300;
	public static readonly KW_OF = 301;
	public static readonly KW_OFFSET = 302;
	public static readonly KW_ON = 303;
	public static readonly KW_ONE = 304;
	public static readonly KW_OR = 305;
	public static readonly KW_ORDER = 306;
	public static readonly KW_OUT = 307;
	public static readonly KW_OUTER = 308;
	public static readonly KW_OVER = 309;
	public static readonly KW_OVERLAY = 310;
	public static readonly KW_PARTITION = 311;
	public static readonly KW_PATTERN = 312;
	public static readonly KW_PER = 313;
	public static readonly KW_PERCENT = 314;
	public static readonly KW_PERIOD = 315;
	public static readonly KW_POSITION = 316;
	public static readonly KW_POWER = 317;
	public static readonly KW_PRIMARY = 318;
	public static readonly KW_RANGE = 319;
	public static readonly KW_RANK = 320;
	public static readonly KW_RESET = 321;
	public static readonly KW_REVOKE = 322;
	public static readonly KW_RIGHT = 323;
	public static readonly KW_RLIKE = 324;
	public static readonly KW_ROLLBACK = 325;
	public static readonly KW_ROLLUP = 326;
	public static readonly KW_ROW = 327;
	public static readonly KW_ROWS = 328;
	public static readonly KW_SECOND = 329;
	public static readonly KW_SELECT = 330;
	public static readonly KW_SET = 331;
	public static readonly KW_SHOW = 332;
	public static readonly KW_SIMILAR = 333;
	public static readonly KW_SKIP = 334;
	public static readonly KW_SMALLINT = 335;
	public static readonly KW_START = 336;
	public static readonly KW_STATIC = 337;
	public static readonly KW_SUBSTRING = 338;
	public static readonly KW_SUM = 339;
	public static readonly KW_SYMMETRIC = 340;
	public static readonly KW_SYSTEM = 341;
	public static readonly KW_SYSTEM_TIME = 342;
	public static readonly KW_SYSTEM_USER = 343;
	public static readonly KW_TABLE = 344;
	public static readonly KW_TABLESAMPLE = 345;
	public static readonly KW_THEN = 346;
	public static readonly KW_TIME = 347;
	public static readonly KW_TIMESTAMP = 348;
	public static readonly KW_TINYINT = 349;
	public static readonly KW_TO = 350;
	public static readonly KW_TRAILING = 351;
	public static readonly KW_TRUE = 352;
	public static readonly KW_TRUNCATE = 353;
	public static readonly KW_UNION = 354;
	public static readonly KW_UNIQUE = 355;
	public static readonly KW_UNKNOWN = 356;
	public static readonly KW_UNNEST = 357;
	public static readonly KW_UPPER = 358;
	public static readonly KW_UPSERT = 359;
	public static readonly KW_USER = 360;
	public static readonly KW_USING = 361;
	public static readonly KW_VALUE = 362;
	public static readonly KW_VALUES = 363;
	public static readonly KW_VARBINARY = 364;
	public static readonly KW_VARCHAR = 365;
	public static readonly KW_WHEN = 366;
	public static readonly KW_WHERE = 367;
	public static readonly KW_WINDOW = 368;
	public static readonly KW_WITH = 369;
	public static readonly KW_WITHIN = 370;
	public static readonly KW_WITHOUT = 371;
	public static readonly KW_YEAR = 372;
	public static readonly EQUAL_SYMBOL = 373;
	public static readonly GREATER_SYMBOL = 374;
	public static readonly LESS_SYMBOL = 375;
	public static readonly EXCLAMATION_SYMBOL = 376;
	public static readonly BIT_NOT_OP = 377;
	public static readonly BIT_OR_OP = 378;
	public static readonly BIT_AND_OP = 379;
	public static readonly BIT_XOR_OP = 380;
	public static readonly DOT = 381;
	public static readonly LS_BRACKET = 382;
	public static readonly RS_BRACKET = 383;
	public static readonly LR_BRACKET = 384;
	public static readonly RR_BRACKET = 385;
	public static readonly LB_BRACKET = 386;
	public static readonly RB_BRACKET = 387;
	public static readonly COMMA = 388;
	public static readonly SEMICOLON = 389;
	public static readonly AT_SIGN = 390;
	public static readonly SINGLE_QUOTE_SYMB = 391;
	public static readonly DOUBLE_QUOTE_SYMB = 392;
	public static readonly REVERSE_QUOTE_SYMB = 393;
	public static readonly COLON_SYMB = 394;
	public static readonly ASTERISK_SIGN = 395;
	public static readonly UNDERLINE_SIGN = 396;
	public static readonly HYPNEN_SIGN = 397;
	public static readonly ADD_SIGN = 398;
	public static readonly PENCENT_SIGN = 399;
	public static readonly DOUBLE_VERTICAL_SIGN = 400;
	public static readonly DOUBLE_HYPNEN_SIGN = 401;
	public static readonly SLASH_SIGN = 402;
	public static readonly QUESTION_MARK_SIGN = 403;
	public static readonly DOUBLE_RIGHT_ARROW = 404;
	public static readonly STRING_LITERAL = 405;
	public static readonly DIG_LITERAL = 406;
	public static readonly REAL_LITERAL = 407;
	public static readonly BIT_STRING = 408;
	public static readonly ID_LITERAL = 409;
	public static readonly SLASH_TEXT = 410;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_sqlStatements = 2;
	public static readonly RULE_sqlStatement = 3;
	public static readonly RULE_emptyStatement = 4;
	public static readonly RULE_ddlStatement = 5;
	public static readonly RULE_dmlStatement = 6;
	public static readonly RULE_describeStatement = 7;
	public static readonly RULE_explainStatement = 8;
	public static readonly RULE_explainDetails = 9;
	public static readonly RULE_explainDetail = 10;
	public static readonly RULE_useStatement = 11;
	public static readonly RULE_useModuleStatement = 12;
	public static readonly RULE_showStatememt = 13;
	public static readonly RULE_loadStatement = 14;
	public static readonly RULE_unloadStatememt = 15;
	public static readonly RULE_setStatememt = 16;
	public static readonly RULE_resetStatememt = 17;
	public static readonly RULE_jarStatememt = 18;
	public static readonly RULE_dtAddStatement = 19;
	public static readonly RULE_dtFilePath = 20;
	public static readonly RULE_createTable = 21;
	public static readonly RULE_simpleCreateTable = 22;
	public static readonly RULE_createTableAsSelect = 23;
	public static readonly RULE_columnOptionDefinition = 24;
	public static readonly RULE_physicalColumnDefinition = 25;
	public static readonly RULE_columnName = 26;
	public static readonly RULE_columnNameList = 27;
	public static readonly RULE_columnType = 28;
	public static readonly RULE_lengthOneDimension = 29;
	public static readonly RULE_lengthTwoOptionalDimension = 30;
	public static readonly RULE_lengthTwoStringDimension = 31;
	public static readonly RULE_lengthOneTypeDimension = 32;
	public static readonly RULE_mapTypeDimension = 33;
	public static readonly RULE_rowTypeDimension = 34;
	public static readonly RULE_columnConstraint = 35;
	public static readonly RULE_commentSpec = 36;
	public static readonly RULE_metadataColumnDefinition = 37;
	public static readonly RULE_metadataKey = 38;
	public static readonly RULE_computedColumnDefinition = 39;
	public static readonly RULE_computedColumnExpression = 40;
	public static readonly RULE_watermarkDefinition = 41;
	public static readonly RULE_tableConstraint = 42;
	public static readonly RULE_constraintName = 43;
	public static readonly RULE_selfDefinitionClause = 44;
	public static readonly RULE_partitionDefinition = 45;
	public static readonly RULE_transformList = 46;
	public static readonly RULE_transform = 47;
	public static readonly RULE_transformArgument = 48;
	public static readonly RULE_likeDefinition = 49;
	public static readonly RULE_sourceTable = 50;
	public static readonly RULE_likeOption = 51;
	public static readonly RULE_createCatalog = 52;
	public static readonly RULE_createDatabase = 53;
	public static readonly RULE_createView = 54;
	public static readonly RULE_createFunction = 55;
	public static readonly RULE_usingClause = 56;
	public static readonly RULE_jarFileName = 57;
	public static readonly RULE_alterTable = 58;
	public static readonly RULE_renameDefinition = 59;
	public static readonly RULE_setKeyValueDefinition = 60;
	public static readonly RULE_addConstraint = 61;
	public static readonly RULE_dropConstraint = 62;
	public static readonly RULE_addUnique = 63;
	public static readonly RULE_notForced = 64;
	public static readonly RULE_alertView = 65;
	public static readonly RULE_alterDatabase = 66;
	public static readonly RULE_alterFunction = 67;
	public static readonly RULE_dropCatalog = 68;
	public static readonly RULE_dropTable = 69;
	public static readonly RULE_dropDatabase = 70;
	public static readonly RULE_dropView = 71;
	public static readonly RULE_dropFunction = 72;
	public static readonly RULE_insertStatement = 73;
	public static readonly RULE_insertSimpleStatement = 74;
	public static readonly RULE_insertPartitionDefinition = 75;
	public static readonly RULE_valuesDefinition = 76;
	public static readonly RULE_valuesRowDefinition = 77;
	public static readonly RULE_insertMulStatementCompatibility = 78;
	public static readonly RULE_insertMulStatement = 79;
	public static readonly RULE_queryStatement = 80;
	public static readonly RULE_valuesCaluse = 81;
	public static readonly RULE_withClause = 82;
	public static readonly RULE_withItem = 83;
	public static readonly RULE_withItemName = 84;
	public static readonly RULE_selectStatement = 85;
	public static readonly RULE_selectClause = 86;
	public static readonly RULE_projectItemDefinition = 87;
	public static readonly RULE_overWindowItem = 88;
	public static readonly RULE_fromClause = 89;
	public static readonly RULE_tableExpression = 90;
	public static readonly RULE_tableReference = 91;
	public static readonly RULE_tablePrimary = 92;
	public static readonly RULE_tablePath = 93;
	public static readonly RULE_systemTimePeriod = 94;
	public static readonly RULE_dateTimeExpression = 95;
	public static readonly RULE_inlineDataValueClause = 96;
	public static readonly RULE_windoTVFClause = 97;
	public static readonly RULE_windowTVFExression = 98;
	public static readonly RULE_windoTVFName = 99;
	public static readonly RULE_windowTVFParam = 100;
	public static readonly RULE_timeIntervalParamName = 101;
	public static readonly RULE_columnDescriptor = 102;
	public static readonly RULE_joinCondition = 103;
	public static readonly RULE_whereClause = 104;
	public static readonly RULE_groupByClause = 105;
	public static readonly RULE_groupItemDefinition = 106;
	public static readonly RULE_groupingSets = 107;
	public static readonly RULE_groupingSetsNotaionName = 108;
	public static readonly RULE_groupWindowFunction = 109;
	public static readonly RULE_groupWindowFunctionName = 110;
	public static readonly RULE_timeAttrColumn = 111;
	public static readonly RULE_havingClause = 112;
	public static readonly RULE_windowClause = 113;
	public static readonly RULE_namedWindow = 114;
	public static readonly RULE_windowSpec = 115;
	public static readonly RULE_matchRecognizeClause = 116;
	public static readonly RULE_orderByCaluse = 117;
	public static readonly RULE_orderItemDefition = 118;
	public static readonly RULE_limitClause = 119;
	public static readonly RULE_partitionByClause = 120;
	public static readonly RULE_quantifiers = 121;
	public static readonly RULE_measuresClause = 122;
	public static readonly RULE_patternDefination = 123;
	public static readonly RULE_patternVariable = 124;
	public static readonly RULE_outputMode = 125;
	public static readonly RULE_afterMatchStrategy = 126;
	public static readonly RULE_patternVariablesDefination = 127;
	public static readonly RULE_windowFrame = 128;
	public static readonly RULE_frameBound = 129;
	public static readonly RULE_withinClause = 130;
	public static readonly RULE_expression = 131;
	public static readonly RULE_booleanExpression = 132;
	public static readonly RULE_predicate = 133;
	public static readonly RULE_likePredicate = 134;
	public static readonly RULE_valueExpression = 135;
	public static readonly RULE_primaryExpression = 136;
	public static readonly RULE_functionName = 137;
	public static readonly RULE_functionParam = 138;
	public static readonly RULE_dereferenceDefinition = 139;
	public static readonly RULE_correlationName = 140;
	public static readonly RULE_qualifiedName = 141;
	public static readonly RULE_timeIntervalExpression = 142;
	public static readonly RULE_errorCapturingMultiUnitsInterval = 143;
	public static readonly RULE_multiUnitsInterval = 144;
	public static readonly RULE_errorCapturingUnitToUnitInterval = 145;
	public static readonly RULE_unitToUnitInterval = 146;
	public static readonly RULE_intervalValue = 147;
	public static readonly RULE_columnAlias = 148;
	public static readonly RULE_tableAlias = 149;
	public static readonly RULE_errorCapturingIdentifier = 150;
	public static readonly RULE_errorCapturingIdentifierExtra = 151;
	public static readonly RULE_identifierList = 152;
	public static readonly RULE_identifierSeq = 153;
	public static readonly RULE_identifier = 154;
	public static readonly RULE_unquotedIdentifier = 155;
	public static readonly RULE_quotedIdentifier = 156;
	public static readonly RULE_whenClause = 157;
	public static readonly RULE_uid = 158;
	public static readonly RULE_withOption = 159;
	public static readonly RULE_ifNotExists = 160;
	public static readonly RULE_ifExists = 161;
	public static readonly RULE_tablePropertyList = 162;
	public static readonly RULE_tableProperty = 163;
	public static readonly RULE_tablePropertyKey = 164;
	public static readonly RULE_tablePropertyValue = 165;
	public static readonly RULE_logicalOperator = 166;
	public static readonly RULE_comparisonOperator = 167;
	public static readonly RULE_bitOperator = 168;
	public static readonly RULE_mathOperator = 169;
	public static readonly RULE_unaryOperator = 170;
	public static readonly RULE_constant = 171;
	public static readonly RULE_timePointLiteral = 172;
	public static readonly RULE_stringLiteral = 173;
	public static readonly RULE_decimalLiteral = 174;
	public static readonly RULE_booleanLiteral = 175;
	public static readonly RULE_setQuantifier = 176;
	public static readonly RULE_timePointUnit = 177;
	public static readonly RULE_timeIntervalUnit = 178;
	public static readonly RULE_reservedKeywordsUsedAsFuncParam = 179;
	public static readonly RULE_reservedKeywordsUsedAsFuncName = 180;
	public static readonly RULE_reservedKeywords = 181;
	public static readonly RULE_nonReservedKeywords = 182;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "sqlStatements", "sqlStatement", "emptyStatement", 
		"ddlStatement", "dmlStatement", "describeStatement", "explainStatement", 
		"explainDetails", "explainDetail", "useStatement", "useModuleStatement", 
		"showStatememt", "loadStatement", "unloadStatememt", "setStatememt", "resetStatememt", 
		"jarStatememt", "dtAddStatement", "dtFilePath", "createTable", "simpleCreateTable", 
		"createTableAsSelect", "columnOptionDefinition", "physicalColumnDefinition", 
		"columnName", "columnNameList", "columnType", "lengthOneDimension", "lengthTwoOptionalDimension", 
		"lengthTwoStringDimension", "lengthOneTypeDimension", "mapTypeDimension", 
		"rowTypeDimension", "columnConstraint", "commentSpec", "metadataColumnDefinition", 
		"metadataKey", "computedColumnDefinition", "computedColumnExpression", 
		"watermarkDefinition", "tableConstraint", "constraintName", "selfDefinitionClause", 
		"partitionDefinition", "transformList", "transform", "transformArgument", 
		"likeDefinition", "sourceTable", "likeOption", "createCatalog", "createDatabase", 
		"createView", "createFunction", "usingClause", "jarFileName", "alterTable", 
		"renameDefinition", "setKeyValueDefinition", "addConstraint", "dropConstraint", 
		"addUnique", "notForced", "alertView", "alterDatabase", "alterFunction", 
		"dropCatalog", "dropTable", "dropDatabase", "dropView", "dropFunction", 
		"insertStatement", "insertSimpleStatement", "insertPartitionDefinition", 
		"valuesDefinition", "valuesRowDefinition", "insertMulStatementCompatibility", 
		"insertMulStatement", "queryStatement", "valuesCaluse", "withClause", 
		"withItem", "withItemName", "selectStatement", "selectClause", "projectItemDefinition", 
		"overWindowItem", "fromClause", "tableExpression", "tableReference", "tablePrimary", 
		"tablePath", "systemTimePeriod", "dateTimeExpression", "inlineDataValueClause", 
		"windoTVFClause", "windowTVFExression", "windoTVFName", "windowTVFParam", 
		"timeIntervalParamName", "columnDescriptor", "joinCondition", "whereClause", 
		"groupByClause", "groupItemDefinition", "groupingSets", "groupingSetsNotaionName", 
		"groupWindowFunction", "groupWindowFunctionName", "timeAttrColumn", "havingClause", 
		"windowClause", "namedWindow", "windowSpec", "matchRecognizeClause", "orderByCaluse", 
		"orderItemDefition", "limitClause", "partitionByClause", "quantifiers", 
		"measuresClause", "patternDefination", "patternVariable", "outputMode", 
		"afterMatchStrategy", "patternVariablesDefination", "windowFrame", "frameBound", 
		"withinClause", "expression", "booleanExpression", "predicate", "likePredicate", 
		"valueExpression", "primaryExpression", "functionName", "functionParam", 
		"dereferenceDefinition", "correlationName", "qualifiedName", "timeIntervalExpression", 
		"errorCapturingMultiUnitsInterval", "multiUnitsInterval", "errorCapturingUnitToUnitInterval", 
		"unitToUnitInterval", "intervalValue", "columnAlias", "tableAlias", "errorCapturingIdentifier", 
		"errorCapturingIdentifierExtra", "identifierList", "identifierSeq", "identifier", 
		"unquotedIdentifier", "quotedIdentifier", "whenClause", "uid", "withOption", 
		"ifNotExists", "ifExists", "tablePropertyList", "tableProperty", "tablePropertyKey", 
		"tablePropertyValue", "logicalOperator", "comparisonOperator", "bitOperator", 
		"mathOperator", "unaryOperator", "constant", "timePointLiteral", "stringLiteral", 
		"decimalLiteral", "booleanLiteral", "setQuantifier", "timePointUnit", 
		"timeIntervalUnit", "reservedKeywordsUsedAsFuncParam", "reservedKeywordsUsedAsFuncName", 
		"reservedKeywords", "nonReservedKeywords",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'ADD'", "'ADMIN'", "'AFTER'", 
		"'ANALYZE'", "'ASC'", "'BEFORE'", "'BYTES'", "'CASCADE'", "'CATALOG'", 
		"'CATALOGS'", "'CENTURY'", "'CHAIN'", "'CHANGELOG_MODE'", "'CHARACTERS'", 
		"'COMMENT'", "'COMPACT'", "'COLUMNS'", "'CONSTRAINTS'", "'CONSTRUCTOR'", 
		"'CUMULATE'", "'DATA'", "'DATABASE'", "'DATABASES'", "'DAYS'", "'DECADE'", 
		"'DEFINED'", "'DESC'", "'DESCRIPTOR'", "'DIV'", "'ENCODING'", "'ENFORCED'", 
		"'ENGINE'", "'EPOCH'", "'ERROR'", "'ESTIMATED_COST'", "'EXCEPTION'", "'EXCLUDE'", 
		"'EXCLUDING'", "'EXTENDED'", "'FILE'", "'FINAL'", "'FIRST'", "'FOLLOWING'", 
		"'FORMAT'", "'FORTRAN'", "'FOUND'", "'FRAC_SECOND'", "'FUNCTIONS'", "'GENERAL'", 
		"'GENERATED'", "'GO'", "'GOTO'", "'GRANTED'", "'HOP'", "'HOURS'", "'IF'", 
		"'IGNORE'", "'INCREMENT'", "'INPUT'", "'INVOKER'", "'JAR'", "'JARS'", 
		"'JAVA'", "'JSON'", "'JSON_EXECUTION_PLAN'", "'KEY'", "'KEY_MEMBER'", 
		"'KEY_TYPE'", "'LABEL'", "'LAST'", "'LENGTH'", "'LEVEL'", "'LOAD'", "'MAP'", 
		"'MICROSECOND'", "'MILLENNIUM'", "'MILLISECOND'", "'MINUTES'", "'MINVALUE'", 
		"'MODIFY'", "'MODULES'", "'MONTHS'", "'NANOSECOND'", "'NULLS'", "'NUMBER'", 
		"'OPTION'", "'OPTIONS'", "'ORDERING'", "'OUTPUT'", "'OVERWRITE'", "'OVERWRITING'", 
		"'PARTITIONED'", "'PARTITIONS'", "'PASSING'", "'PAST'", "'PATH'", "'PLACING'", 
		"'PLAN'", "'PRECEDING'", "'PRESERVE'", "'PRIOR'", "'PRIVILEGES'", "'PUBLIC'", 
		"'PYTHON'", "'PYTHON_FILES'", "'PYTHON_REQUIREMENTS'", "'PYTHON_DEPENDENCIES'", 
		"'PYTHON_JAR'", "'PYTHON_ARCHIVES'", "'PYTHON_PARAMETER'", "'QUARTER'", 
		"'RAW'", "'READ'", "'RELATIVE'", "'REMOVE'", "'RENAME'", "'REPLACE'", 
		"'RESPECT'", "'RESTART'", "'RESTRICT'", "'ROLE'", "'ROW_COUNT'", "'SCALA'", 
		"'SCALAR'", "'SCALE'", "'SCHEMA'", "'SECONDS'", "'SECTION'", "'SECURITY'", 
		"'SELF'", "'SERVER'", "'SERVER_NAME'", "'SESSION'", "'SETS'", "'SIMPLE'", 
		"'SIZE'", "'SLIDE'", "'SOURCE'", "'SPACE'", "'STATE'", "'STATEMENT'", 
		"'STEP'", "'STRING'", "'STRUCTURE'", "'STYLE'", "'TABLES'", "'TEMPORARY'", 
		"'TIMECOL'", "'TIMESTAMP_LTZ'", "'TIMESTAMPADD'", "'TIMESTAMPDIFF'", "'TRANSFORM'", 
		"'TUMBLE'", "'TYPE'", "'UNDER'", "'UNLOAD'", "'USAGE'", "'USE'", "'UTF16'", 
		"'UTF32'", "'UTF8'", "'VERSION'", "'VIEW'", "'VIEWS'", "'VIRTUAL'", "'WATERMARK'", 
		"'WATERMARKS'", "'WEEK'", "'WEEKS'", "'WORK'", "'WRAPPER'", "'YEARS'", 
		"'ZONE'", "'ABS'", "'ALL'", "'ALLOW'", "'ALTER'", "'AND'", "'ANY'", "'ARE'", 
		"'ARRAY'", "'AS'", "'ASYMMETRIC'", "'AT'", "'AVG'", "'BEGIN'", "'BETWEEN'", 
		"'BIGINT'", "'BINARY'", "'BIT'", "'BLOB'", "'BOOLEAN'", "'BOTH'", "'BY'", 
		"'CALL'", "'CALLED'", "'CASCADED'", "'CASE'", "'CAST'", "'CEIL'", "'CHAR'", 
		"'CHARACTER'", "'CHECK'", "'CLOB'", "'CLOSE'", "'COALESCE'", "'COLLATE'", 
		"'COLLECT'", "'COLUMN'", "'COMMIT'", "'CONNECT'", "'CONSTRAINT'", "'CONTAINS'", 
		"'CONVERT'", "'COUNT'", "'CREATE'", "'CROSS'", "'CUBE'", "'CURRENT'", 
		"'CURSOR'", "'CYCLE'", "'DATE'", "'DATETIME'", "'DAY'", "'DEC'", "'DECIMAL'", 
		"'DECLARE'", "'DEFAULT'", "'DEFINE'", "'DELETE'", "'DESCRIBE'", "'DISTINCT'", 
		"'DOUBLE'", "'DROP'", "'EACH'", "'ELSE'", "'END'", "'EQUALS'", "'ESCAPE'", 
		"'EXCEPT'", "'EXECUTE'", "'EXISTS'", "'EXPLAIN'", "'EXTERNAL'", "'EXTRACT'", 
		"'FALSE'", "'FLOAT'", "'FOR'", "'FROM'", "'FULL'", "'FUNCTION'", "'GLOBAL'", 
		"'GRANT'", "'GROUP'", "'GROUPING'", "'GROUPS'", "'HAVING'", "'HOUR'", 
		"'IMPORT'", "'IN'", "'INCLUDING'", "'INNER'", "'INOUT'", "'INSERT'", "'INT'", 
		"'INTEGER'", "'INTERSECT'", "'INTERVAL'", "'INTO'", "'IS'", "'JOIN'", 
		"'LAG'", "'LANGUAGE'", "'LATERAL'", "'LEADING'", "'LEFT'", "'LIKE'", "'LIMIT'", 
		"'LOCAL'", "'MATCH'", "'MATCH_RECOGNIZE'", "'MEASURES'", "'MERGE'", "'METADATA'", 
		"'MINUS'", "'MINUTE'", "'MODIFIES'", "'MODULE'", "'MONTH'", "'MULTISET'", 
		"'NATURAL'", "'NEXT'", "'NO'", "'NONE'", "'NOT'", "'NULL'", "'NUMERIC'", 
		"'OF'", "'OFFSET'", "'ON'", "'ONE'", "'OR'", "'ORDER'", "'OUT'", "'OUTER'", 
		"'OVER'", "'OVERLAY'", "'PARTITION'", "'PATTERN'", "'PER'", "'PERCENT'", 
		"'PERIOD'", "'POSITION'", "'POWER'", "'PRIMARY'", "'RANGE'", "'RANK'", 
		"'RESET'", "'REVOKE'", "'RIGHT'", "'RLIKE'", "'ROLLBACK'", "'ROLLUP'", 
		"'ROW'", "'ROWS'", "'SECOND'", "'SELECT'", "'SET'", "'SHOW'", "'SIMILAR'", 
		"'SKIP'", "'SMALLINT'", "'START'", "'STATIC'", "'SUBSTRING'", "'SUM'", 
		"'SYMMETRIC'", "'SYSTEM'", "'SYSTEM_TIME'", "'SYSTEM_USER'", "'TABLE'", 
		"'TABLESAMPLE'", "'THEN'", "'TIME'", "'TIMESTAMP'", "'TINYINT'", "'TO'", 
		"'TRAILING'", "'TRUE'", "'TRUNCATE'", "'UNION'", "'UNIQUE'", "'UNKNOWN'", 
		"'UNNEST'", "'UPPER'", "'UPSERT'", "'USER'", "'USING'", "'VALUE'", "'VALUES'", 
		"'VARBINARY'", "'VARCHAR'", "'WHEN'", "'WHERE'", "'WINDOW'", "'WITH'", 
		"'WITHIN'", "'WITHOUT'", "'YEAR'", "'='", "'>'", "'<'", "'!'", "'~'", 
		"'|'", "'&'", "'^'", "'.'", "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"','", "';'", "'@'", "'''", "'\"'", "'`'", "':'", "'*'", "'_'", "'-'", 
		"'+'", "'%'", "'||'", "'--'", "'/'", "'?'", "'=>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SPACE", "COMMENT_INPUT", "LINE_COMMENT", "KW_ADD", "KW_ADMIN", 
		"KW_AFTER", "KW_ANALYZE", "KW_ASC", "KW_BEFORE", "KW_BYTES", "KW_CASCADE", 
		"KW_CATALOG", "KW_CATALOGS", "KW_CENTURY", "KW_CHAIN", "KW_CHANGELOG_MODE", 
		"KW_CHARACTERS", "KW_COMMENT", "KW_COMPACT", "KW_COLUMNS", "KW_CONSTRAINTS", 
		"KW_CONSTRUCTOR", "KW_CUMULATE", "KW_DATA", "KW_DATABASE", "KW_DATABASES", 
		"KW_DAYS", "KW_DECADE", "KW_DEFINED", "KW_DESC", "KW_DESCRIPTOR", "KW_DIV", 
		"KW_ENCODING", "KW_ENFORCED", "KW_ENGINE", "KW_EPOCH", "KW_ERROR", "KW_ESTIMATED_COST", 
		"KW_EXCEPTION", "KW_EXCLUDE", "KW_EXCLUDING", "KW_EXTENDED", "KW_FILE", 
		"KW_FINAL", "KW_FIRST", "KW_FOLLOWING", "KW_FORMAT", "KW_FORTRAN", "KW_FOUND", 
		"KW_FRAC_SECOND", "KW_FUNCTIONS", "KW_GENERAL", "KW_GENERATED", "KW_GO", 
		"KW_GOTO", "KW_GRANTED", "KW_HOP", "KW_HOURS", "KW_IF", "KW_IGNORE", "KW_INCREMENT", 
		"KW_INPUT", "KW_INVOKER", "KW_JAR", "KW_JARS", "KW_JAVA", "KW_JSON", "KW_JSON_EXECUTION_PLAN", 
		"KW_KEY", "KW_KEY_MEMBER", "KW_KEY_TYPE", "KW_LABEL", "KW_LAST", "KW_LENGTH", 
		"KW_LEVEL", "KW_LOAD", "KW_MAP", "KW_MICROSECOND", "KW_MILLENNIUM", "KW_MILLISECOND", 
		"KW_MINUTES", "KW_MINVALUE", "KW_MODIFY", "KW_MODULES", "KW_MONTHS", "KW_NANOSECOND", 
		"KW_NULLS", "KW_NUMBER", "KW_OPTION", "KW_OPTIONS", "KW_ORDERING", "KW_OUTPUT", 
		"KW_OVERWRITE", "KW_OVERWRITING", "KW_PARTITIONED", "KW_PARTITIONS", "KW_PASSING", 
		"KW_PAST", "KW_PATH", "KW_PLACING", "KW_PLAN", "KW_PRECEDING", "KW_PRESERVE", 
		"KW_PRIOR", "KW_PRIVILEGES", "KW_PUBLIC", "KW_PYTHON", "KW_PYTHON_FILES", 
		"KW_PYTHON_REQUIREMENTS", "KW_PYTHON_DEPENDENCIES", "KW_PYTHON_JAR", "KW_PYTHON_ARCHIVES", 
		"KW_PYTHON_PARAMETER", "KW_QUARTER", "KW_RAW", "KW_READ", "KW_RELATIVE", 
		"KW_REMOVE", "KW_RENAME", "KW_REPLACE", "KW_RESPECT", "KW_RESTART", "KW_RESTRICT", 
		"KW_ROLE", "KW_ROW_COUNT", "KW_SCALA", "KW_SCALAR", "KW_SCALE", "KW_SCHEMA", 
		"KW_SECONDS", "KW_SECTION", "KW_SECURITY", "KW_SELF", "KW_SERVER", "KW_SERVER_NAME", 
		"KW_SESSION", "KW_SETS", "KW_SIMPLE", "KW_SIZE", "KW_SLIDE", "KW_SOURCE", 
		"KW_SPACE", "KW_STATE", "KW_STATEMENT", "KW_STEP", "KW_STRING", "KW_STRUCTURE", 
		"KW_STYLE", "KW_TABLES", "KW_TEMPORARY", "KW_TIMECOL", "KW_TIMESTAMP_LTZ", 
		"KW_TIMESTAMPADD", "KW_TIMESTAMPDIFF", "KW_TRANSFORM", "KW_TUMBLE", "KW_TYPE", 
		"KW_UNDER", "KW_UNLOAD", "KW_USAGE", "KW_USE", "KW_UTF16", "KW_UTF32", 
		"KW_UTF8", "KW_VERSION", "KW_VIEW", "KW_VIEWS", "KW_VIRTUAL", "KW_WATERMARK", 
		"KW_WATERMARKS", "KW_WEEK", "KW_WEEKS", "KW_WORK", "KW_WRAPPER", "KW_YEARS", 
		"KW_ZONE", "KW_ABS", "KW_ALL", "KW_ALLOW", "KW_ALTER", "KW_AND", "KW_ANY", 
		"KW_ARE", "KW_ARRAY", "KW_AS", "KW_ASYMMETRIC", "KW_AT", "KW_AVG", "KW_BEGIN", 
		"KW_BETWEEN", "KW_BIGINT", "KW_BINARY", "KW_BIT", "KW_BLOB", "KW_BOOLEAN", 
		"KW_BOTH", "KW_BY", "KW_CALL", "KW_CALLED", "KW_CASCADED", "KW_CASE", 
		"KW_CAST", "KW_CEIL", "KW_CHAR", "KW_CHARACTER", "KW_CHECK", "KW_CLOB", 
		"KW_CLOSE", "KW_COALESCE", "KW_COLLATE", "KW_COLLECT", "KW_COLUMN", "KW_COMMIT", 
		"KW_CONNECT", "KW_CONSTRAINT", "KW_CONTAINS", "KW_CONVERT", "KW_COUNT", 
		"KW_CREATE", "KW_CROSS", "KW_CUBE", "KW_CURRENT", "KW_CURSOR", "KW_CYCLE", 
		"KW_DATE", "KW_DATETIME", "KW_DAY", "KW_DEC", "KW_DECIMAL", "KW_DECLARE", 
		"KW_DEFAULT", "KW_DEFINE", "KW_DELETE", "KW_DESCRIBE", "KW_DISTINCT", 
		"KW_DOUBLE", "KW_DROP", "KW_EACH", "KW_ELSE", "KW_END", "KW_EQUALS", "KW_ESCAPE", 
		"KW_EXCEPT", "KW_EXECUTE", "KW_EXISTS", "KW_EXPLAIN", "KW_EXTERNAL", "KW_EXTRACT", 
		"KW_FALSE", "KW_FLOAT", "KW_FOR", "KW_FROM", "KW_FULL", "KW_FUNCTION", 
		"KW_GLOBAL", "KW_GRANT", "KW_GROUP", "KW_GROUPING", "KW_GROUPS", "KW_HAVING", 
		"KW_HOUR", "KW_IMPORT", "KW_IN", "KW_INCLUDING", "KW_INNER", "KW_INOUT", 
		"KW_INSERT", "KW_INT", "KW_INTEGER", "KW_INTERSECT", "KW_INTERVAL", "KW_INTO", 
		"KW_IS", "KW_JOIN", "KW_LAG", "KW_LANGUAGE", "KW_LATERAL", "KW_LEADING", 
		"KW_LEFT", "KW_LIKE", "KW_LIMIT", "KW_LOCAL", "KW_MATCH", "KW_MATCH_RECOGNIZE", 
		"KW_MEASURES", "KW_MERGE", "KW_METADATA", "KW_MINUS", "KW_MINUTE", "KW_MODIFIES", 
		"KW_MODULE", "KW_MONTH", "KW_MULTISET", "KW_NATURAL", "KW_NEXT", "KW_NO", 
		"KW_NONE", "KW_NOT", "KW_NULL", "KW_NUMERIC", "KW_OF", "KW_OFFSET", "KW_ON", 
		"KW_ONE", "KW_OR", "KW_ORDER", "KW_OUT", "KW_OUTER", "KW_OVER", "KW_OVERLAY", 
		"KW_PARTITION", "KW_PATTERN", "KW_PER", "KW_PERCENT", "KW_PERIOD", "KW_POSITION", 
		"KW_POWER", "KW_PRIMARY", "KW_RANGE", "KW_RANK", "KW_RESET", "KW_REVOKE", 
		"KW_RIGHT", "KW_RLIKE", "KW_ROLLBACK", "KW_ROLLUP", "KW_ROW", "KW_ROWS", 
		"KW_SECOND", "KW_SELECT", "KW_SET", "KW_SHOW", "KW_SIMILAR", "KW_SKIP", 
		"KW_SMALLINT", "KW_START", "KW_STATIC", "KW_SUBSTRING", "KW_SUM", "KW_SYMMETRIC", 
		"KW_SYSTEM", "KW_SYSTEM_TIME", "KW_SYSTEM_USER", "KW_TABLE", "KW_TABLESAMPLE", 
		"KW_THEN", "KW_TIME", "KW_TIMESTAMP", "KW_TINYINT", "KW_TO", "KW_TRAILING", 
		"KW_TRUE", "KW_TRUNCATE", "KW_UNION", "KW_UNIQUE", "KW_UNKNOWN", "KW_UNNEST", 
		"KW_UPPER", "KW_UPSERT", "KW_USER", "KW_USING", "KW_VALUE", "KW_VALUES", 
		"KW_VARBINARY", "KW_VARCHAR", "KW_WHEN", "KW_WHERE", "KW_WINDOW", "KW_WITH", 
		"KW_WITHIN", "KW_WITHOUT", "KW_YEAR", "EQUAL_SYMBOL", "GREATER_SYMBOL", 
		"LESS_SYMBOL", "EXCLAMATION_SYMBOL", "BIT_NOT_OP", "BIT_OR_OP", "BIT_AND_OP", 
		"BIT_XOR_OP", "DOT", "LS_BRACKET", "RS_BRACKET", "LR_BRACKET", "RR_BRACKET", 
		"LB_BRACKET", "RB_BRACKET", "COMMA", "SEMICOLON", "AT_SIGN", "SINGLE_QUOTE_SYMB", 
		"DOUBLE_QUOTE_SYMB", "REVERSE_QUOTE_SYMB", "COLON_SYMB", "ASTERISK_SIGN", 
		"UNDERLINE_SIGN", "HYPNEN_SIGN", "ADD_SIGN", "PENCENT_SIGN", "DOUBLE_VERTICAL_SIGN", 
		"DOUBLE_HYPNEN_SIGN", "SLASH_SIGN", "QUESTION_MARK_SIGN", "DOUBLE_RIGHT_ARROW", 
		"STRING_LITERAL", "DIG_LITERAL", "REAL_LITERAL", "BIT_STRING", "ID_LITERAL", 
		"SLASH_TEXT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FlinkSqlParser._LITERAL_NAMES, FlinkSqlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FlinkSqlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "FlinkSqlParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return FlinkSqlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FlinkSqlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FlinkSqlParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FlinkSqlParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.statement();
			this.state = 367;
			this.match(FlinkSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, FlinkSqlParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this.sqlStatements();
			this.state = 370;
			this.match(FlinkSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 4, FlinkSqlParser.RULE_sqlStatements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.KW_ADD || _la === FlinkSqlParser.KW_DESC || _la === FlinkSqlParser.KW_LOAD || _la === FlinkSqlParser.KW_REMOVE || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & ((1 << (FlinkSqlParser.KW_UNLOAD - 159)) | (1 << (FlinkSqlParser.KW_USE - 159)) | (1 << (FlinkSqlParser.KW_ALTER - 159)) | (1 << (FlinkSqlParser.KW_BEGIN - 159)))) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & ((1 << (FlinkSqlParser.KW_CREATE - 219)) | (1 << (FlinkSqlParser.KW_DESCRIBE - 219)) | (1 << (FlinkSqlParser.KW_DROP - 219)) | (1 << (FlinkSqlParser.KW_EXECUTE - 219)) | (1 << (FlinkSqlParser.KW_EXPLAIN - 219)))) !== 0) || _la === FlinkSqlParser.KW_INSERT || ((((_la - 321)) & ~0x1F) === 0 && ((1 << (_la - 321)) & ((1 << (FlinkSqlParser.KW_RESET - 321)) | (1 << (FlinkSqlParser.KW_SELECT - 321)) | (1 << (FlinkSqlParser.KW_SET - 321)) | (1 << (FlinkSqlParser.KW_SHOW - 321)))) !== 0) || ((((_la - 363)) & ~0x1F) === 0 && ((1 << (_la - 363)) & ((1 << (FlinkSqlParser.KW_VALUES - 363)) | (1 << (FlinkSqlParser.KW_WITH - 363)) | (1 << (FlinkSqlParser.LR_BRACKET - 363)) | (1 << (FlinkSqlParser.SEMICOLON - 363)))) !== 0)) {
				{
				this.state = 377;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FlinkSqlParser.KW_ADD:
				case FlinkSqlParser.KW_DESC:
				case FlinkSqlParser.KW_LOAD:
				case FlinkSqlParser.KW_REMOVE:
				case FlinkSqlParser.KW_UNLOAD:
				case FlinkSqlParser.KW_USE:
				case FlinkSqlParser.KW_ALTER:
				case FlinkSqlParser.KW_BEGIN:
				case FlinkSqlParser.KW_CREATE:
				case FlinkSqlParser.KW_DESCRIBE:
				case FlinkSqlParser.KW_DROP:
				case FlinkSqlParser.KW_EXECUTE:
				case FlinkSqlParser.KW_EXPLAIN:
				case FlinkSqlParser.KW_INSERT:
				case FlinkSqlParser.KW_RESET:
				case FlinkSqlParser.KW_SELECT:
				case FlinkSqlParser.KW_SET:
				case FlinkSqlParser.KW_SHOW:
				case FlinkSqlParser.KW_VALUES:
				case FlinkSqlParser.KW_WITH:
				case FlinkSqlParser.LR_BRACKET:
					{
					this.state = 372;
					this.sqlStatement();
					this.state = 374;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 373;
						this.match(FlinkSqlParser.SEMICOLON);
						}
						break;
					}
					}
					break;
				case FlinkSqlParser.SEMICOLON:
					{
					this.state = 376;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 381;
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
	public sqlStatement(): SqlStatementContext {
		let _localctx: SqlStatementContext = new SqlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FlinkSqlParser.RULE_sqlStatement);
		try {
			this.state = 394;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 382;
				this.ddlStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 383;
				this.dmlStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 384;
				this.describeStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 385;
				this.explainStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 386;
				this.useStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 387;
				this.showStatememt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 388;
				this.loadStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 389;
				this.unloadStatememt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 390;
				this.setStatememt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 391;
				this.resetStatememt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 392;
				this.jarStatememt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 393;
				this.dtAddStatement();
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
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FlinkSqlParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.match(FlinkSqlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ddlStatement(): DdlStatementContext {
		let _localctx: DdlStatementContext = new DdlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FlinkSqlParser.RULE_ddlStatement);
		try {
			this.state = 412;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 398;
				this.createTable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 399;
				this.createDatabase();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 400;
				this.createView();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 401;
				this.createFunction();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 402;
				this.createCatalog();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 403;
				this.alterTable();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 404;
				this.alertView();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 405;
				this.alterDatabase();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 406;
				this.alterFunction();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 407;
				this.dropCatalog();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 408;
				this.dropTable();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 409;
				this.dropDatabase();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 410;
				this.dropView();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 411;
				this.dropFunction();
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
	public dmlStatement(): DmlStatementContext {
		let _localctx: DmlStatementContext = new DmlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FlinkSqlParser.RULE_dmlStatement);
		try {
			this.state = 416;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_SELECT:
			case FlinkSqlParser.KW_VALUES:
			case FlinkSqlParser.KW_WITH:
			case FlinkSqlParser.LR_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 414;
				this.queryStatement(0);
				}
				break;
			case FlinkSqlParser.KW_BEGIN:
			case FlinkSqlParser.KW_EXECUTE:
			case FlinkSqlParser.KW_INSERT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 415;
				this.insertStatement();
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
	public describeStatement(): DescribeStatementContext {
		let _localctx: DescribeStatementContext = new DescribeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FlinkSqlParser.RULE_describeStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_DESC || _la === FlinkSqlParser.KW_DESCRIBE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 419;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 16, FlinkSqlParser.RULE_explainStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this.match(FlinkSqlParser.KW_EXPLAIN);
			this.state = 425;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_CHANGELOG_MODE:
			case FlinkSqlParser.KW_ESTIMATED_COST:
			case FlinkSqlParser.KW_JSON_EXECUTION_PLAN:
				{
				this.state = 422;
				this.explainDetails();
				}
				break;
			case FlinkSqlParser.KW_PLAN:
				{
				this.state = 423;
				this.match(FlinkSqlParser.KW_PLAN);
				this.state = 424;
				this.match(FlinkSqlParser.KW_FOR);
				}
				break;
			case FlinkSqlParser.KW_STATEMENT:
			case FlinkSqlParser.KW_BEGIN:
			case FlinkSqlParser.KW_EXECUTE:
			case FlinkSqlParser.KW_INSERT:
			case FlinkSqlParser.KW_SELECT:
			case FlinkSqlParser.KW_VALUES:
			case FlinkSqlParser.KW_WITH:
			case FlinkSqlParser.LR_BRACKET:
				break;
			default:
				break;
			}
			this.state = 430;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 427;
				this.dmlStatement();
				}
				break;

			case 2:
				{
				this.state = 428;
				this.insertSimpleStatement();
				}
				break;

			case 3:
				{
				this.state = 429;
				this.insertMulStatement();
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
	public explainDetails(): ExplainDetailsContext {
		let _localctx: ExplainDetailsContext = new ExplainDetailsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FlinkSqlParser.RULE_explainDetails);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this.explainDetail();
			this.state = 437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 433;
				this.match(FlinkSqlParser.COMMA);
				this.state = 434;
				this.explainDetail();
				}
				}
				this.state = 439;
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
	public explainDetail(): ExplainDetailContext {
		let _localctx: ExplainDetailContext = new ExplainDetailContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FlinkSqlParser.RULE_explainDetail);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_CHANGELOG_MODE || _la === FlinkSqlParser.KW_ESTIMATED_COST || _la === FlinkSqlParser.KW_JSON_EXECUTION_PLAN)) {
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
	public useStatement(): UseStatementContext {
		let _localctx: UseStatementContext = new UseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FlinkSqlParser.RULE_useStatement);
		try {
			this.state = 448;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 442;
				this.match(FlinkSqlParser.KW_USE);
				this.state = 444;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 443;
					this.match(FlinkSqlParser.KW_CATALOG);
					}
					break;
				}
				this.state = 446;
				this.uid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 447;
				this.useModuleStatement();
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
	public useModuleStatement(): UseModuleStatementContext {
		let _localctx: UseModuleStatementContext = new UseModuleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FlinkSqlParser.RULE_useModuleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			this.match(FlinkSqlParser.KW_USE);
			this.state = 451;
			this.match(FlinkSqlParser.KW_MODULES);
			this.state = 452;
			this.uid();
			this.state = 457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 453;
				this.match(FlinkSqlParser.COMMA);
				this.state = 454;
				this.uid();
				}
				}
				this.state = 459;
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
	public showStatememt(): ShowStatememtContext {
		let _localctx: ShowStatememtContext = new ShowStatememtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FlinkSqlParser.RULE_showStatememt);
		let _la: number;
		try {
			this.state = 495;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 460;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 461;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_CATALOGS || _la === FlinkSqlParser.KW_DATABASES || _la === FlinkSqlParser.KW_JARS || _la === FlinkSqlParser.KW_VIEWS)) {
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

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 462;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 463;
				this.match(FlinkSqlParser.KW_CURRENT);
				this.state = 464;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_CATALOG || _la === FlinkSqlParser.KW_DATABASE)) {
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

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 465;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 466;
				this.match(FlinkSqlParser.KW_TABLES);
				this.state = 469;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_FROM || _la === FlinkSqlParser.KW_IN) {
					{
					this.state = 467;
					_la = this._input.LA(1);
					if (!(_la === FlinkSqlParser.KW_FROM || _la === FlinkSqlParser.KW_IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 468;
					this.uid();
					}
				}

				this.state = 472;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_LIKE || _la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 471;
					this.likePredicate();
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 474;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 475;
				this.match(FlinkSqlParser.KW_COLUMNS);
				this.state = 476;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_FROM || _la === FlinkSqlParser.KW_IN)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 477;
				this.uid();
				this.state = 479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_LIKE || _la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 478;
					this.likePredicate();
					}
				}

				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 481;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 482;
				this.match(FlinkSqlParser.KW_CREATE);
				this.state = 483;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_VIEW || _la === FlinkSqlParser.KW_TABLE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 484;
				this.uid();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 485;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_USER) {
					{
					this.state = 486;
					this.match(FlinkSqlParser.KW_USER);
					}
				}

				this.state = 489;
				this.match(FlinkSqlParser.KW_FUNCTIONS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 490;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 492;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_FULL) {
					{
					this.state = 491;
					this.match(FlinkSqlParser.KW_FULL);
					}
				}

				this.state = 494;
				this.match(FlinkSqlParser.KW_MODULES);
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
	public loadStatement(): LoadStatementContext {
		let _localctx: LoadStatementContext = new LoadStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FlinkSqlParser.RULE_loadStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			this.match(FlinkSqlParser.KW_LOAD);
			this.state = 498;
			this.match(FlinkSqlParser.KW_MODULE);
			this.state = 499;
			this.uid();
			this.state = 502;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 500;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 501;
				this.tablePropertyList();
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
	public unloadStatememt(): UnloadStatememtContext {
		let _localctx: UnloadStatememtContext = new UnloadStatememtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, FlinkSqlParser.RULE_unloadStatememt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this.match(FlinkSqlParser.KW_UNLOAD);
			this.state = 505;
			this.match(FlinkSqlParser.KW_MODULE);
			this.state = 506;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setStatememt(): SetStatememtContext {
		let _localctx: SetStatememtContext = new SetStatememtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, FlinkSqlParser.RULE_setStatememt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this.match(FlinkSqlParser.KW_SET);
			this.state = 510;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 509;
				this.tableProperty();
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
	public resetStatememt(): ResetStatememtContext {
		let _localctx: ResetStatememtContext = new ResetStatememtContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FlinkSqlParser.RULE_resetStatememt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			this.match(FlinkSqlParser.KW_RESET);
			this.state = 514;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 513;
				this.tablePropertyKey();
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
	public jarStatememt(): JarStatememtContext {
		let _localctx: JarStatememtContext = new JarStatememtContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, FlinkSqlParser.RULE_jarStatememt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_ADD || _la === FlinkSqlParser.KW_REMOVE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 517;
			this.match(FlinkSqlParser.KW_JAR);
			this.state = 518;
			this.jarFileName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dtAddStatement(): DtAddStatementContext {
		let _localctx: DtAddStatementContext = new DtAddStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, FlinkSqlParser.RULE_dtAddStatement);
		let _la: number;
		try {
			this.state = 560;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 520;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 521;
				this.match(FlinkSqlParser.KW_JAR);
				this.state = 522;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 523;
				this.dtFilePath();
				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_AS) {
					{
					this.state = 524;
					this.match(FlinkSqlParser.KW_AS);
					this.state = 525;
					this.uid();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 528;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 529;
				this.match(FlinkSqlParser.KW_FILE);
				this.state = 530;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 531;
				this.dtFilePath();
				this.state = 534;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_AS) {
					{
					this.state = 532;
					this.match(FlinkSqlParser.KW_AS);
					this.state = 533;
					this.uid();
					}
				}

				this.state = 538;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_RENAME) {
					{
					this.state = 536;
					this.match(FlinkSqlParser.KW_RENAME);
					this.state = 537;
					this.uid();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 540;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 541;
				_la = this._input.LA(1);
				if (!(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (FlinkSqlParser.KW_PYTHON_FILES - 108)) | (1 << (FlinkSqlParser.KW_PYTHON_REQUIREMENTS - 108)) | (1 << (FlinkSqlParser.KW_PYTHON_DEPENDENCIES - 108)) | (1 << (FlinkSqlParser.KW_PYTHON_JAR - 108)) | (1 << (FlinkSqlParser.KW_PYTHON_ARCHIVES - 108)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 542;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 543;
				this.dtFilePath();
				this.state = 544;
				this.match(FlinkSqlParser.KW_RENAME);
				this.state = 545;
				this.uid();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 547;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 548;
				this.match(FlinkSqlParser.KW_PYTHON_PARAMETER);
				this.state = 549;
				this.dtFilePath();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 550;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 551;
				this.match(FlinkSqlParser.KW_ENGINE);
				this.state = 552;
				this.match(FlinkSqlParser.KW_FILE);
				this.state = 553;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 554;
				this.dtFilePath();
				this.state = 555;
				this.match(FlinkSqlParser.KW_RENAME);
				this.state = 556;
				this.uid();
				this.state = 557;
				this.match(FlinkSqlParser.KW_KEY);
				this.state = 558;
				this.uid();
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
	public dtFilePath(): DtFilePathContext {
		let _localctx: DtFilePathContext = new DtFilePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, FlinkSqlParser.RULE_dtFilePath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 562;
				this.match(FlinkSqlParser.SLASH_TEXT);
				}
				}
				this.state = 565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSqlParser.SLASH_TEXT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createTable(): CreateTableContext {
		let _localctx: CreateTableContext = new CreateTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, FlinkSqlParser.RULE_createTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 569;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 567;
				this.simpleCreateTable();
				}
				break;

			case 2:
				{
				this.state = 568;
				this.createTableAsSelect();
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
	public simpleCreateTable(): SimpleCreateTableContext {
		let _localctx: SimpleCreateTableContext = new SimpleCreateTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, FlinkSqlParser.RULE_simpleCreateTable);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 571;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_TEMPORARY) {
				{
				this.state = 572;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 575;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 577;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 576;
				this.ifNotExists();
				}
				break;
			}
			this.state = 579;
			this.sourceTable();
			this.state = 580;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 581;
			this.columnOptionDefinition();
			this.state = 586;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 582;
					this.match(FlinkSqlParser.COMMA);
					this.state = 583;
					this.columnOptionDefinition();
					}
					}
				}
				this.state = 588;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			}
			this.state = 591;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 589;
				this.match(FlinkSqlParser.COMMA);
				this.state = 590;
				this.watermarkDefinition();
				}
				break;
			}
			this.state = 595;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 593;
				this.match(FlinkSqlParser.COMMA);
				this.state = 594;
				this.tableConstraint();
				}
				break;
			}
			this.state = 599;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.COMMA) {
				{
				this.state = 597;
				this.match(FlinkSqlParser.COMMA);
				this.state = 598;
				this.selfDefinitionClause();
				}
			}

			this.state = 601;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_COMMENT) {
				{
				this.state = 602;
				this.commentSpec();
				}
			}

			this.state = 606;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_PARTITIONED) {
				{
				this.state = 605;
				this.partitionDefinition();
				}
			}

			this.state = 608;
			this.withOption();
			this.state = 610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_LIKE) {
				{
				this.state = 609;
				this.likeDefinition();
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
	public createTableAsSelect(): CreateTableAsSelectContext {
		let _localctx: CreateTableAsSelectContext = new CreateTableAsSelectContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, FlinkSqlParser.RULE_createTableAsSelect);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 612;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 613;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 615;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 614;
				this.ifNotExists();
				}
				break;
			}
			this.state = 617;
			this.sourceTable();
			this.state = 618;
			this.withOption();
			this.state = 621;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_AS) {
				{
				this.state = 619;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 620;
				this.queryStatement(0);
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
	public columnOptionDefinition(): ColumnOptionDefinitionContext {
		let _localctx: ColumnOptionDefinitionContext = new ColumnOptionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, FlinkSqlParser.RULE_columnOptionDefinition);
		try {
			this.state = 626;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 623;
				this.physicalColumnDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 624;
				this.metadataColumnDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 625;
				this.computedColumnDefinition();
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
	public physicalColumnDefinition(): PhysicalColumnDefinitionContext {
		let _localctx: PhysicalColumnDefinitionContext = new PhysicalColumnDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, FlinkSqlParser.RULE_physicalColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 628;
			this.columnName();
			this.state = 629;
			this.columnType();
			this.state = 631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_CONSTRAINT || ((((_la - 298)) & ~0x1F) === 0 && ((1 << (_la - 298)) & ((1 << (FlinkSqlParser.KW_NOT - 298)) | (1 << (FlinkSqlParser.KW_NULL - 298)) | (1 << (FlinkSqlParser.KW_PRIMARY - 298)))) !== 0)) {
				{
				this.state = 630;
				this.columnConstraint();
				}
			}

			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_COMMENT) {
				{
				this.state = 633;
				this.commentSpec();
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
	public columnName(): ColumnNameContext {
		let _localctx: ColumnNameContext = new ColumnNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, FlinkSqlParser.RULE_columnName);
		try {
			this.state = 638;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 636;
				this.uid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 637;
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
	public columnNameList(): ColumnNameListContext {
		let _localctx: ColumnNameListContext = new ColumnNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, FlinkSqlParser.RULE_columnNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 640;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 641;
			this.columnName();
			this.state = 646;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 642;
				this.match(FlinkSqlParser.COMMA);
				this.state = 643;
				this.columnName();
				}
				}
				this.state = 648;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 649;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnType(): ColumnTypeContext {
		let _localctx: ColumnTypeContext = new ColumnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, FlinkSqlParser.RULE_columnType);
		let _la: number;
		try {
			this.state = 688;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_BOOLEAN:
			case FlinkSqlParser.KW_DATE:
			case FlinkSqlParser.KW_NULL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 651;
				_localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_BOOLEAN || _la === FlinkSqlParser.KW_DATE || _la === FlinkSqlParser.KW_NULL)) {
					_localctx._typeName = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case FlinkSqlParser.KW_BYTES:
			case FlinkSqlParser.KW_STRING:
			case FlinkSqlParser.KW_TIMESTAMP_LTZ:
			case FlinkSqlParser.KW_BIGINT:
			case FlinkSqlParser.KW_BINARY:
			case FlinkSqlParser.KW_CHAR:
			case FlinkSqlParser.KW_DATETIME:
			case FlinkSqlParser.KW_INT:
			case FlinkSqlParser.KW_INTEGER:
			case FlinkSqlParser.KW_SMALLINT:
			case FlinkSqlParser.KW_TIME:
			case FlinkSqlParser.KW_TINYINT:
			case FlinkSqlParser.KW_VARBINARY:
			case FlinkSqlParser.KW_VARCHAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 652;
				_localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_BYTES || _la === FlinkSqlParser.KW_STRING || _la === FlinkSqlParser.KW_TIMESTAMP_LTZ || ((((_la - 191)) & ~0x1F) === 0 && ((1 << (_la - 191)) & ((1 << (FlinkSqlParser.KW_BIGINT - 191)) | (1 << (FlinkSqlParser.KW_BINARY - 191)) | (1 << (FlinkSqlParser.KW_CHAR - 191)))) !== 0) || _la === FlinkSqlParser.KW_DATETIME || _la === FlinkSqlParser.KW_INT || _la === FlinkSqlParser.KW_INTEGER || ((((_la - 335)) & ~0x1F) === 0 && ((1 << (_la - 335)) & ((1 << (FlinkSqlParser.KW_SMALLINT - 335)) | (1 << (FlinkSqlParser.KW_TIME - 335)) | (1 << (FlinkSqlParser.KW_TINYINT - 335)) | (1 << (FlinkSqlParser.KW_VARBINARY - 335)) | (1 << (FlinkSqlParser.KW_VARCHAR - 335)))) !== 0))) {
					_localctx._typeName = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 654;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LR_BRACKET) {
					{
					this.state = 653;
					this.lengthOneDimension();
					}
				}

				}
				break;
			case FlinkSqlParser.KW_TIMESTAMP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 656;
				_localctx._typeName = this.match(FlinkSqlParser.KW_TIMESTAMP);
				this.state = 658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LR_BRACKET) {
					{
					this.state = 657;
					this.lengthOneDimension();
					}
				}

				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_WITH || _la === FlinkSqlParser.KW_WITHOUT) {
					{
					this.state = 660;
					_la = this._input.LA(1);
					if (!(_la === FlinkSqlParser.KW_WITH || _la === FlinkSqlParser.KW_WITHOUT)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 662;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSqlParser.KW_LOCAL) {
						{
						this.state = 661;
						this.match(FlinkSqlParser.KW_LOCAL);
						}
					}

					this.state = 664;
					this.match(FlinkSqlParser.KW_TIME);
					this.state = 665;
					this.match(FlinkSqlParser.KW_ZONE);
					}
				}

				}
				break;
			case FlinkSqlParser.KW_DEC:
			case FlinkSqlParser.KW_DECIMAL:
			case FlinkSqlParser.KW_DOUBLE:
			case FlinkSqlParser.KW_FLOAT:
			case FlinkSqlParser.KW_NUMERIC:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 668;
				_localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (FlinkSqlParser.KW_DEC - 228)) | (1 << (FlinkSqlParser.KW_DECIMAL - 228)) | (1 << (FlinkSqlParser.KW_DOUBLE - 228)) | (1 << (FlinkSqlParser.KW_FLOAT - 228)))) !== 0) || _la === FlinkSqlParser.KW_NUMERIC)) {
					_localctx._typeName = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LR_BRACKET) {
					{
					this.state = 669;
					this.lengthTwoOptionalDimension();
					}
				}

				}
				break;
			case FlinkSqlParser.KW_ARRAY:
			case FlinkSqlParser.KW_MULTISET:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 672;
				_localctx._type = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_ARRAY || _la === FlinkSqlParser.KW_MULTISET)) {
					_localctx._type = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LESS_SYMBOL) {
					{
					this.state = 673;
					this.lengthOneTypeDimension();
					}
				}

				}
				break;
			case FlinkSqlParser.KW_MAP:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 676;
				_localctx._type = this.match(FlinkSqlParser.KW_MAP);
				this.state = 678;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LESS_SYMBOL) {
					{
					this.state = 677;
					this.mapTypeDimension();
					}
				}

				}
				break;
			case FlinkSqlParser.KW_ROW:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 680;
				_localctx._type = this.match(FlinkSqlParser.KW_ROW);
				this.state = 682;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LESS_SYMBOL) {
					{
					this.state = 681;
					this.rowTypeDimension();
					}
				}

				}
				break;
			case FlinkSqlParser.KW_RAW:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 684;
				_localctx._type = this.match(FlinkSqlParser.KW_RAW);
				this.state = 686;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LR_BRACKET) {
					{
					this.state = 685;
					this.lengthTwoStringDimension();
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
	public lengthOneDimension(): LengthOneDimensionContext {
		let _localctx: LengthOneDimensionContext = new LengthOneDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, FlinkSqlParser.RULE_lengthOneDimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 691;
			this.decimalLiteral();
			this.state = 692;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext {
		let _localctx: LengthTwoOptionalDimensionContext = new LengthTwoOptionalDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, FlinkSqlParser.RULE_lengthTwoOptionalDimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 694;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 695;
			this.decimalLiteral();
			this.state = 698;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.COMMA) {
				{
				this.state = 696;
				this.match(FlinkSqlParser.COMMA);
				this.state = 697;
				this.decimalLiteral();
				}
			}

			this.state = 700;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lengthTwoStringDimension(): LengthTwoStringDimensionContext {
		let _localctx: LengthTwoStringDimensionContext = new LengthTwoStringDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, FlinkSqlParser.RULE_lengthTwoStringDimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 702;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 703;
			this.stringLiteral();
			this.state = 706;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.COMMA) {
				{
				this.state = 704;
				this.match(FlinkSqlParser.COMMA);
				this.state = 705;
				this.stringLiteral();
				}
			}

			this.state = 708;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lengthOneTypeDimension(): LengthOneTypeDimensionContext {
		let _localctx: LengthOneTypeDimensionContext = new LengthOneTypeDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, FlinkSqlParser.RULE_lengthOneTypeDimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 710;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 711;
			this.columnType();
			this.state = 712;
			this.match(FlinkSqlParser.GREATER_SYMBOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapTypeDimension(): MapTypeDimensionContext {
		let _localctx: MapTypeDimensionContext = new MapTypeDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, FlinkSqlParser.RULE_mapTypeDimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 714;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 715;
			this.columnType();
			{
			this.state = 716;
			this.match(FlinkSqlParser.COMMA);
			this.state = 717;
			this.columnType();
			}
			this.state = 719;
			this.match(FlinkSqlParser.GREATER_SYMBOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rowTypeDimension(): RowTypeDimensionContext {
		let _localctx: RowTypeDimensionContext = new RowTypeDimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, FlinkSqlParser.RULE_rowTypeDimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 721;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 722;
			this.columnName();
			this.state = 723;
			this.columnType();
			this.state = 730;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 724;
				this.match(FlinkSqlParser.COMMA);
				this.state = 725;
				this.columnName();
				this.state = 726;
				this.columnType();
				}
				}
				this.state = 732;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 733;
			this.match(FlinkSqlParser.GREATER_SYMBOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnConstraint(): ColumnConstraintContext {
		let _localctx: ColumnConstraintContext = new ColumnConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, FlinkSqlParser.RULE_columnConstraint);
		let _la: number;
		try {
			this.state = 749;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_CONSTRAINT:
			case FlinkSqlParser.KW_PRIMARY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 737;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_CONSTRAINT) {
					{
					this.state = 735;
					this.match(FlinkSqlParser.KW_CONSTRAINT);
					this.state = 736;
					this.constraintName();
					}
				}

				this.state = 739;
				this.match(FlinkSqlParser.KW_PRIMARY);
				this.state = 740;
				this.match(FlinkSqlParser.KW_KEY);
				this.state = 743;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 741;
					this.match(FlinkSqlParser.KW_NOT);
					this.state = 742;
					this.match(FlinkSqlParser.KW_ENFORCED);
					}
				}

				}
				break;
			case FlinkSqlParser.KW_NOT:
			case FlinkSqlParser.KW_NULL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 746;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 745;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 748;
				this.match(FlinkSqlParser.KW_NULL);
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
	public commentSpec(): CommentSpecContext {
		let _localctx: CommentSpecContext = new CommentSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, FlinkSqlParser.RULE_commentSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 751;
			this.match(FlinkSqlParser.KW_COMMENT);
			this.state = 752;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public metadataColumnDefinition(): MetadataColumnDefinitionContext {
		let _localctx: MetadataColumnDefinitionContext = new MetadataColumnDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, FlinkSqlParser.RULE_metadataColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 754;
			this.columnName();
			this.state = 755;
			this.columnType();
			this.state = 756;
			this.match(FlinkSqlParser.KW_METADATA);
			this.state = 759;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_FROM) {
				{
				this.state = 757;
				this.match(FlinkSqlParser.KW_FROM);
				this.state = 758;
				this.metadataKey();
				}
			}

			this.state = 762;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_VIRTUAL) {
				{
				this.state = 761;
				this.match(FlinkSqlParser.KW_VIRTUAL);
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
	public metadataKey(): MetadataKeyContext {
		let _localctx: MetadataKeyContext = new MetadataKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, FlinkSqlParser.RULE_metadataKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 764;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public computedColumnDefinition(): ComputedColumnDefinitionContext {
		let _localctx: ComputedColumnDefinitionContext = new ComputedColumnDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, FlinkSqlParser.RULE_computedColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 766;
			this.columnName();
			this.state = 767;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 768;
			this.computedColumnExpression();
			this.state = 770;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_COMMENT) {
				{
				this.state = 769;
				this.commentSpec();
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
	public computedColumnExpression(): ComputedColumnExpressionContext {
		let _localctx: ComputedColumnExpressionContext = new ComputedColumnExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, FlinkSqlParser.RULE_computedColumnExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 772;
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
	public watermarkDefinition(): WatermarkDefinitionContext {
		let _localctx: WatermarkDefinitionContext = new WatermarkDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, FlinkSqlParser.RULE_watermarkDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 774;
			this.match(FlinkSqlParser.KW_WATERMARK);
			this.state = 775;
			this.match(FlinkSqlParser.KW_FOR);
			this.state = 776;
			this.expression();
			this.state = 777;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 778;
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
	public tableConstraint(): TableConstraintContext {
		let _localctx: TableConstraintContext = new TableConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, FlinkSqlParser.RULE_tableConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 782;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_CONSTRAINT) {
				{
				this.state = 780;
				this.match(FlinkSqlParser.KW_CONSTRAINT);
				this.state = 781;
				this.constraintName();
				}
			}

			this.state = 784;
			this.match(FlinkSqlParser.KW_PRIMARY);
			this.state = 785;
			this.match(FlinkSqlParser.KW_KEY);
			this.state = 786;
			this.columnNameList();
			this.state = 787;
			this.match(FlinkSqlParser.KW_NOT);
			this.state = 788;
			this.match(FlinkSqlParser.KW_ENFORCED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constraintName(): ConstraintNameContext {
		let _localctx: ConstraintNameContext = new ConstraintNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, FlinkSqlParser.RULE_constraintName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 790;
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
	public selfDefinitionClause(): SelfDefinitionClauseContext {
		let _localctx: SelfDefinitionClauseContext = new SelfDefinitionClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, FlinkSqlParser.RULE_selfDefinitionClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 792;
			this.match(FlinkSqlParser.KW_PERIOD);
			this.state = 793;
			this.match(FlinkSqlParser.KW_FOR);
			this.state = 794;
			this.match(FlinkSqlParser.KW_SYSTEM_TIME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public partitionDefinition(): PartitionDefinitionContext {
		let _localctx: PartitionDefinitionContext = new PartitionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, FlinkSqlParser.RULE_partitionDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 796;
			this.match(FlinkSqlParser.KW_PARTITIONED);
			this.state = 797;
			this.match(FlinkSqlParser.KW_BY);
			this.state = 798;
			this.transformList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transformList(): TransformListContext {
		let _localctx: TransformListContext = new TransformListContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, FlinkSqlParser.RULE_transformList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 800;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 801;
			this.transform();
			this.state = 806;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 802;
				this.match(FlinkSqlParser.COMMA);
				this.state = 803;
				this.transform();
				}
				}
				this.state = 808;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 809;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transform(): TransformContext {
		let _localctx: TransformContext = new TransformContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, FlinkSqlParser.RULE_transform);
		let _la: number;
		try {
			this.state = 824;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				_localctx = new IdentityTransformContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 811;
				this.qualifiedName();
				}
				break;

			case 2:
				_localctx = new ApplyTransformContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 812;
				(_localctx as ApplyTransformContext)._transformName = this.identifier();
				this.state = 813;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 814;
				this.transformArgument();
				this.state = 819;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 815;
					this.match(FlinkSqlParser.COMMA);
					this.state = 816;
					this.transformArgument();
					}
					}
					this.state = 821;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 822;
				this.match(FlinkSqlParser.RR_BRACKET);
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
	public transformArgument(): TransformArgumentContext {
		let _localctx: TransformArgumentContext = new TransformArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, FlinkSqlParser.RULE_transformArgument);
		try {
			this.state = 828;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 826;
				this.qualifiedName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 827;
				this.constant();
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
	public likeDefinition(): LikeDefinitionContext {
		let _localctx: LikeDefinitionContext = new LikeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, FlinkSqlParser.RULE_likeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 830;
			this.match(FlinkSqlParser.KW_LIKE);
			this.state = 831;
			this.sourceTable();
			this.state = 840;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 832;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 836;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.KW_EXCLUDING || _la === FlinkSqlParser.KW_OVERWRITING || _la === FlinkSqlParser.KW_INCLUDING) {
					{
					{
					this.state = 833;
					this.likeOption();
					}
					}
					this.state = 838;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 839;
				this.match(FlinkSqlParser.RR_BRACKET);
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
	public sourceTable(): SourceTableContext {
		let _localctx: SourceTableContext = new SourceTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, FlinkSqlParser.RULE_sourceTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 842;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public likeOption(): LikeOptionContext {
		let _localctx: LikeOptionContext = new LikeOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, FlinkSqlParser.RULE_likeOption);
		let _la: number;
		try {
			this.state = 848;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 844;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_EXCLUDING || _la === FlinkSqlParser.KW_INCLUDING)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 845;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_CONSTRAINTS || _la === FlinkSqlParser.KW_PARTITIONS || _la === FlinkSqlParser.KW_ALL)) {
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
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 846;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_EXCLUDING || _la === FlinkSqlParser.KW_OVERWRITING || _la === FlinkSqlParser.KW_INCLUDING)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 847;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_GENERATED || _la === FlinkSqlParser.KW_OPTIONS || _la === FlinkSqlParser.KW_WATERMARKS)) {
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
	public createCatalog(): CreateCatalogContext {
		let _localctx: CreateCatalogContext = new CreateCatalogContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, FlinkSqlParser.RULE_createCatalog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 850;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 851;
			this.match(FlinkSqlParser.KW_CATALOG);
			this.state = 852;
			this.uid();
			this.state = 853;
			this.withOption();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createDatabase(): CreateDatabaseContext {
		let _localctx: CreateDatabaseContext = new CreateDatabaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, FlinkSqlParser.RULE_createDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 855;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 856;
			this.match(FlinkSqlParser.KW_DATABASE);
			this.state = 858;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 857;
				this.ifNotExists();
				}
				break;
			}
			this.state = 860;
			this.uid();
			this.state = 862;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_COMMENT) {
				{
				this.state = 861;
				this.commentSpec();
				}
			}

			this.state = 864;
			this.withOption();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 108, FlinkSqlParser.RULE_createView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 866;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 868;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_TEMPORARY) {
				{
				this.state = 867;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 870;
			this.match(FlinkSqlParser.KW_VIEW);
			this.state = 872;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 871;
				this.ifNotExists();
				}
				break;
			}
			this.state = 874;
			this.uid();
			this.state = 876;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.LR_BRACKET) {
				{
				this.state = 875;
				this.columnNameList();
				}
			}

			this.state = 879;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_COMMENT) {
				{
				this.state = 878;
				this.commentSpec();
				}
			}

			this.state = 881;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 882;
			this.queryStatement(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 110, FlinkSqlParser.RULE_createFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 884;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 888;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 885;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 886;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				this.state = 887;
				this.match(FlinkSqlParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 890;
			this.match(FlinkSqlParser.KW_FUNCTION);
			this.state = 892;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				{
				this.state = 891;
				this.ifNotExists();
				}
				break;
			}
			this.state = 894;
			this.uid();
			this.state = 895;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 896;
			this.identifier();
			this.state = 899;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_LANGUAGE) {
				{
				this.state = 897;
				this.match(FlinkSqlParser.KW_LANGUAGE);
				this.state = 898;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_JAVA || _la === FlinkSqlParser.KW_PYTHON || _la === FlinkSqlParser.KW_SCALA)) {
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

			this.state = 902;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_USING) {
				{
				this.state = 901;
				this.usingClause();
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
	public usingClause(): UsingClauseContext {
		let _localctx: UsingClauseContext = new UsingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, FlinkSqlParser.RULE_usingClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 904;
			this.match(FlinkSqlParser.KW_USING);
			this.state = 905;
			this.match(FlinkSqlParser.KW_JAR);
			this.state = 906;
			this.jarFileName();
			this.state = 912;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 907;
				this.match(FlinkSqlParser.COMMA);
				this.state = 908;
				this.match(FlinkSqlParser.KW_JAR);
				this.state = 909;
				this.jarFileName();
				}
				}
				this.state = 914;
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
	public jarFileName(): JarFileNameContext {
		let _localctx: JarFileNameContext = new JarFileNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, FlinkSqlParser.RULE_jarFileName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 915;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterTable(): AlterTableContext {
		let _localctx: AlterTableContext = new AlterTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, FlinkSqlParser.RULE_alterTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 917;
			this.match(FlinkSqlParser.KW_ALTER);
			this.state = 918;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 920;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 919;
				this.ifExists();
				}
				break;
			}
			this.state = 922;
			this.uid();
			this.state = 928;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 923;
				this.renameDefinition();
				}
				break;

			case 2:
				{
				this.state = 924;
				this.setKeyValueDefinition();
				}
				break;

			case 3:
				{
				this.state = 925;
				this.addConstraint();
				}
				break;

			case 4:
				{
				this.state = 926;
				this.dropConstraint();
				}
				break;

			case 5:
				{
				this.state = 927;
				this.addUnique();
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
	public renameDefinition(): RenameDefinitionContext {
		let _localctx: RenameDefinitionContext = new RenameDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, FlinkSqlParser.RULE_renameDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 930;
			this.match(FlinkSqlParser.KW_RENAME);
			this.state = 932;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSqlParser.KW_ADD) | (1 << FlinkSqlParser.KW_ADMIN) | (1 << FlinkSqlParser.KW_AFTER) | (1 << FlinkSqlParser.KW_ANALYZE) | (1 << FlinkSqlParser.KW_ASC) | (1 << FlinkSqlParser.KW_BEFORE) | (1 << FlinkSqlParser.KW_BYTES) | (1 << FlinkSqlParser.KW_CASCADE) | (1 << FlinkSqlParser.KW_CATALOG) | (1 << FlinkSqlParser.KW_CATALOGS) | (1 << FlinkSqlParser.KW_CENTURY) | (1 << FlinkSqlParser.KW_CHAIN) | (1 << FlinkSqlParser.KW_CHANGELOG_MODE) | (1 << FlinkSqlParser.KW_CHARACTERS) | (1 << FlinkSqlParser.KW_COMMENT) | (1 << FlinkSqlParser.KW_COMPACT) | (1 << FlinkSqlParser.KW_COLUMNS) | (1 << FlinkSqlParser.KW_CONSTRAINTS) | (1 << FlinkSqlParser.KW_CONSTRUCTOR) | (1 << FlinkSqlParser.KW_CUMULATE) | (1 << FlinkSqlParser.KW_DATA) | (1 << FlinkSqlParser.KW_DATABASE) | (1 << FlinkSqlParser.KW_DATABASES) | (1 << FlinkSqlParser.KW_DAYS) | (1 << FlinkSqlParser.KW_DECADE) | (1 << FlinkSqlParser.KW_DEFINED) | (1 << FlinkSqlParser.KW_DESC) | (1 << FlinkSqlParser.KW_DESCRIPTOR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSqlParser.KW_DIV - 32)) | (1 << (FlinkSqlParser.KW_ENCODING - 32)) | (1 << (FlinkSqlParser.KW_ENFORCED - 32)) | (1 << (FlinkSqlParser.KW_ENGINE - 32)) | (1 << (FlinkSqlParser.KW_ERROR - 32)) | (1 << (FlinkSqlParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSqlParser.KW_EXCEPTION - 32)) | (1 << (FlinkSqlParser.KW_EXCLUDE - 32)) | (1 << (FlinkSqlParser.KW_EXCLUDING - 32)) | (1 << (FlinkSqlParser.KW_EXTENDED - 32)) | (1 << (FlinkSqlParser.KW_FILE - 32)) | (1 << (FlinkSqlParser.KW_FINAL - 32)) | (1 << (FlinkSqlParser.KW_FIRST - 32)) | (1 << (FlinkSqlParser.KW_FOLLOWING - 32)) | (1 << (FlinkSqlParser.KW_FORMAT - 32)) | (1 << (FlinkSqlParser.KW_FORTRAN - 32)) | (1 << (FlinkSqlParser.KW_FOUND - 32)) | (1 << (FlinkSqlParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSqlParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSqlParser.KW_GENERAL - 32)) | (1 << (FlinkSqlParser.KW_GENERATED - 32)) | (1 << (FlinkSqlParser.KW_GO - 32)) | (1 << (FlinkSqlParser.KW_GOTO - 32)) | (1 << (FlinkSqlParser.KW_GRANTED - 32)) | (1 << (FlinkSqlParser.KW_HOP - 32)) | (1 << (FlinkSqlParser.KW_HOURS - 32)) | (1 << (FlinkSqlParser.KW_IF - 32)) | (1 << (FlinkSqlParser.KW_IGNORE - 32)) | (1 << (FlinkSqlParser.KW_INCREMENT - 32)) | (1 << (FlinkSqlParser.KW_INPUT - 32)) | (1 << (FlinkSqlParser.KW_INVOKER - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSqlParser.KW_JAR - 64)) | (1 << (FlinkSqlParser.KW_JARS - 64)) | (1 << (FlinkSqlParser.KW_JAVA - 64)) | (1 << (FlinkSqlParser.KW_JSON - 64)) | (1 << (FlinkSqlParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSqlParser.KW_KEY - 64)) | (1 << (FlinkSqlParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSqlParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSqlParser.KW_LABEL - 64)) | (1 << (FlinkSqlParser.KW_LAST - 64)) | (1 << (FlinkSqlParser.KW_LENGTH - 64)) | (1 << (FlinkSqlParser.KW_LEVEL - 64)) | (1 << (FlinkSqlParser.KW_LOAD - 64)) | (1 << (FlinkSqlParser.KW_MAP - 64)) | (1 << (FlinkSqlParser.KW_MICROSECOND - 64)) | (1 << (FlinkSqlParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSqlParser.KW_MILLISECOND - 64)) | (1 << (FlinkSqlParser.KW_MINUTES - 64)) | (1 << (FlinkSqlParser.KW_MINVALUE - 64)) | (1 << (FlinkSqlParser.KW_MODIFY - 64)) | (1 << (FlinkSqlParser.KW_MODULES - 64)) | (1 << (FlinkSqlParser.KW_MONTHS - 64)) | (1 << (FlinkSqlParser.KW_NANOSECOND - 64)) | (1 << (FlinkSqlParser.KW_NULLS - 64)) | (1 << (FlinkSqlParser.KW_NUMBER - 64)) | (1 << (FlinkSqlParser.KW_OPTION - 64)) | (1 << (FlinkSqlParser.KW_OPTIONS - 64)) | (1 << (FlinkSqlParser.KW_ORDERING - 64)) | (1 << (FlinkSqlParser.KW_OUTPUT - 64)) | (1 << (FlinkSqlParser.KW_OVERWRITE - 64)) | (1 << (FlinkSqlParser.KW_OVERWRITING - 64)) | (1 << (FlinkSqlParser.KW_PARTITIONED - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSqlParser.KW_PARTITIONS - 96)) | (1 << (FlinkSqlParser.KW_PASSING - 96)) | (1 << (FlinkSqlParser.KW_PAST - 96)) | (1 << (FlinkSqlParser.KW_PATH - 96)) | (1 << (FlinkSqlParser.KW_PLACING - 96)) | (1 << (FlinkSqlParser.KW_PLAN - 96)) | (1 << (FlinkSqlParser.KW_PRECEDING - 96)) | (1 << (FlinkSqlParser.KW_PRESERVE - 96)) | (1 << (FlinkSqlParser.KW_PRIOR - 96)) | (1 << (FlinkSqlParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSqlParser.KW_PUBLIC - 96)) | (1 << (FlinkSqlParser.KW_PYTHON - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSqlParser.KW_QUARTER - 96)) | (1 << (FlinkSqlParser.KW_RAW - 96)) | (1 << (FlinkSqlParser.KW_READ - 96)) | (1 << (FlinkSqlParser.KW_RELATIVE - 96)) | (1 << (FlinkSqlParser.KW_REMOVE - 96)) | (1 << (FlinkSqlParser.KW_RENAME - 96)) | (1 << (FlinkSqlParser.KW_REPLACE - 96)) | (1 << (FlinkSqlParser.KW_RESPECT - 96)) | (1 << (FlinkSqlParser.KW_RESTART - 96)) | (1 << (FlinkSqlParser.KW_RESTRICT - 96)) | (1 << (FlinkSqlParser.KW_ROLE - 96)) | (1 << (FlinkSqlParser.KW_ROW_COUNT - 96)) | (1 << (FlinkSqlParser.KW_SCALA - 96)) | (1 << (FlinkSqlParser.KW_SCALAR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSqlParser.KW_SCALE - 128)) | (1 << (FlinkSqlParser.KW_SCHEMA - 128)) | (1 << (FlinkSqlParser.KW_SECONDS - 128)) | (1 << (FlinkSqlParser.KW_SECTION - 128)) | (1 << (FlinkSqlParser.KW_SECURITY - 128)) | (1 << (FlinkSqlParser.KW_SELF - 128)) | (1 << (FlinkSqlParser.KW_SERVER - 128)) | (1 << (FlinkSqlParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSqlParser.KW_SESSION - 128)) | (1 << (FlinkSqlParser.KW_SETS - 128)) | (1 << (FlinkSqlParser.KW_SIMPLE - 128)) | (1 << (FlinkSqlParser.KW_SIZE - 128)) | (1 << (FlinkSqlParser.KW_SLIDE - 128)) | (1 << (FlinkSqlParser.KW_SOURCE - 128)) | (1 << (FlinkSqlParser.KW_SPACE - 128)) | (1 << (FlinkSqlParser.KW_STATE - 128)) | (1 << (FlinkSqlParser.KW_STATEMENT - 128)) | (1 << (FlinkSqlParser.KW_STEP - 128)) | (1 << (FlinkSqlParser.KW_STRING - 128)) | (1 << (FlinkSqlParser.KW_STRUCTURE - 128)) | (1 << (FlinkSqlParser.KW_STYLE - 128)) | (1 << (FlinkSqlParser.KW_TABLES - 128)) | (1 << (FlinkSqlParser.KW_TEMPORARY - 128)) | (1 << (FlinkSqlParser.KW_TIMECOL - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSqlParser.KW_TRANSFORM - 128)) | (1 << (FlinkSqlParser.KW_TUMBLE - 128)) | (1 << (FlinkSqlParser.KW_TYPE - 128)) | (1 << (FlinkSqlParser.KW_UNDER - 128)) | (1 << (FlinkSqlParser.KW_UNLOAD - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSqlParser.KW_USAGE - 160)) | (1 << (FlinkSqlParser.KW_USE - 160)) | (1 << (FlinkSqlParser.KW_UTF16 - 160)) | (1 << (FlinkSqlParser.KW_UTF32 - 160)) | (1 << (FlinkSqlParser.KW_UTF8 - 160)) | (1 << (FlinkSqlParser.KW_VERSION - 160)) | (1 << (FlinkSqlParser.KW_VIEW - 160)) | (1 << (FlinkSqlParser.KW_VIEWS - 160)) | (1 << (FlinkSqlParser.KW_VIRTUAL - 160)) | (1 << (FlinkSqlParser.KW_WATERMARK - 160)) | (1 << (FlinkSqlParser.KW_WATERMARKS - 160)) | (1 << (FlinkSqlParser.KW_WEEK - 160)) | (1 << (FlinkSqlParser.KW_WORK - 160)) | (1 << (FlinkSqlParser.KW_WRAPPER - 160)) | (1 << (FlinkSqlParser.KW_YEARS - 160)) | (1 << (FlinkSqlParser.KW_ZONE - 160)))) !== 0) || ((((_la - 405)) & ~0x1F) === 0 && ((1 << (_la - 405)) & ((1 << (FlinkSqlParser.STRING_LITERAL - 405)) | (1 << (FlinkSqlParser.DIG_LITERAL - 405)) | (1 << (FlinkSqlParser.ID_LITERAL - 405)))) !== 0)) {
				{
				this.state = 931;
				this.uid();
				}
			}

			this.state = 934;
			this.match(FlinkSqlParser.KW_TO);
			this.state = 935;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setKeyValueDefinition(): SetKeyValueDefinitionContext {
		let _localctx: SetKeyValueDefinitionContext = new SetKeyValueDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, FlinkSqlParser.RULE_setKeyValueDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 937;
			this.match(FlinkSqlParser.KW_SET);
			this.state = 938;
			this.tablePropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addConstraint(): AddConstraintContext {
		let _localctx: AddConstraintContext = new AddConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, FlinkSqlParser.RULE_addConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 940;
			this.match(FlinkSqlParser.KW_ADD);
			this.state = 941;
			this.match(FlinkSqlParser.KW_CONSTRAINT);
			this.state = 942;
			this.constraintName();
			this.state = 943;
			this.match(FlinkSqlParser.KW_PRIMARY);
			this.state = 944;
			this.match(FlinkSqlParser.KW_KEY);
			this.state = 945;
			this.columnNameList();
			this.state = 947;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_NOT) {
				{
				this.state = 946;
				this.notForced();
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
	public dropConstraint(): DropConstraintContext {
		let _localctx: DropConstraintContext = new DropConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, FlinkSqlParser.RULE_dropConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 949;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 950;
			this.match(FlinkSqlParser.KW_CONSTRAINT);
			this.state = 951;
			this.constraintName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addUnique(): AddUniqueContext {
		let _localctx: AddUniqueContext = new AddUniqueContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, FlinkSqlParser.RULE_addUnique);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 953;
			this.match(FlinkSqlParser.KW_ADD);
			this.state = 954;
			this.match(FlinkSqlParser.KW_UNIQUE);
			this.state = 955;
			this.columnNameList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public notForced(): NotForcedContext {
		let _localctx: NotForcedContext = new NotForcedContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, FlinkSqlParser.RULE_notForced);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 957;
			this.match(FlinkSqlParser.KW_NOT);
			this.state = 958;
			this.match(FlinkSqlParser.KW_ENFORCED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alertView(): AlertViewContext {
		let _localctx: AlertViewContext = new AlertViewContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, FlinkSqlParser.RULE_alertView);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 960;
			this.match(FlinkSqlParser.KW_ALTER);
			this.state = 961;
			this.match(FlinkSqlParser.KW_VIEW);
			this.state = 962;
			this.uid();
			this.state = 966;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_RENAME:
				{
				this.state = 963;
				this.renameDefinition();
				}
				break;
			case FlinkSqlParser.KW_AS:
				{
				this.state = 964;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 965;
				this.queryStatement(0);
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
	public alterDatabase(): AlterDatabaseContext {
		let _localctx: AlterDatabaseContext = new AlterDatabaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, FlinkSqlParser.RULE_alterDatabase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 968;
			this.match(FlinkSqlParser.KW_ALTER);
			this.state = 969;
			this.match(FlinkSqlParser.KW_DATABASE);
			this.state = 970;
			this.uid();
			this.state = 971;
			this.setKeyValueDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alterFunction(): AlterFunctionContext {
		let _localctx: AlterFunctionContext = new AlterFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, FlinkSqlParser.RULE_alterFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 973;
			this.match(FlinkSqlParser.KW_ALTER);
			this.state = 977;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				{
				this.state = 974;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 975;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				this.state = 976;
				this.match(FlinkSqlParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 979;
			this.match(FlinkSqlParser.KW_FUNCTION);
			this.state = 981;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 980;
				this.ifExists();
				}
				break;
			}
			this.state = 983;
			this.uid();
			this.state = 984;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 985;
			this.identifier();
			this.state = 988;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_LANGUAGE) {
				{
				this.state = 986;
				this.match(FlinkSqlParser.KW_LANGUAGE);
				this.state = 987;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_JAVA || _la === FlinkSqlParser.KW_PYTHON || _la === FlinkSqlParser.KW_SCALA)) {
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
	public dropCatalog(): DropCatalogContext {
		let _localctx: DropCatalogContext = new DropCatalogContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, FlinkSqlParser.RULE_dropCatalog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 990;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 991;
			this.match(FlinkSqlParser.KW_CATALOG);
			this.state = 993;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 992;
				this.ifExists();
				}
				break;
			}
			this.state = 995;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 138, FlinkSqlParser.RULE_dropTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 997;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 999;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_TEMPORARY) {
				{
				this.state = 998;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 1001;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 1003;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				{
				this.state = 1002;
				this.ifExists();
				}
				break;
			}
			this.state = 1005;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dropDatabase(): DropDatabaseContext {
		let _localctx: DropDatabaseContext = new DropDatabaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, FlinkSqlParser.RULE_dropDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1007;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 1008;
			this.match(FlinkSqlParser.KW_DATABASE);
			this.state = 1010;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 1009;
				this.ifExists();
				}
				break;
			}
			this.state = 1012;
			this.uid();
			this.state = 1014;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_CASCADE || _la === FlinkSqlParser.KW_RESTRICT) {
				{
				this.state = 1013;
				_localctx._dropType = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_CASCADE || _la === FlinkSqlParser.KW_RESTRICT)) {
					_localctx._dropType = this._errHandler.recoverInline(this);
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
		this.enterRule(_localctx, 142, FlinkSqlParser.RULE_dropView);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1016;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 1018;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_TEMPORARY) {
				{
				this.state = 1017;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 1020;
			this.match(FlinkSqlParser.KW_VIEW);
			this.state = 1022;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				{
				this.state = 1021;
				this.ifExists();
				}
				break;
			}
			this.state = 1024;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 144, FlinkSqlParser.RULE_dropFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1026;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 1030;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 1027;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 1028;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				this.state = 1029;
				this.match(FlinkSqlParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 1032;
			this.match(FlinkSqlParser.KW_FUNCTION);
			this.state = 1034;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				{
				this.state = 1033;
				this.ifExists();
				}
				break;
			}
			this.state = 1036;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 146, FlinkSqlParser.RULE_insertStatement);
		let _la: number;
		try {
			this.state = 1045;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1039;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_EXECUTE) {
					{
					this.state = 1038;
					this.match(FlinkSqlParser.KW_EXECUTE);
					}
				}

				this.state = 1041;
				this.insertSimpleStatement();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1042;
				this.insertMulStatementCompatibility();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 1043;
				this.match(FlinkSqlParser.KW_EXECUTE);
				this.state = 1044;
				this.insertMulStatement();
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
	public insertSimpleStatement(): InsertSimpleStatementContext {
		let _localctx: InsertSimpleStatementContext = new InsertSimpleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, FlinkSqlParser.RULE_insertSimpleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1047;
			this.match(FlinkSqlParser.KW_INSERT);
			this.state = 1048;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_OVERWRITE || _la === FlinkSqlParser.KW_INTO)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1049;
			this.uid();
			this.state = 1058;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				{
				this.state = 1051;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_PARTITION) {
					{
					this.state = 1050;
					this.insertPartitionDefinition();
					}
				}

				this.state = 1054;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 1053;
					this.columnNameList();
					}
					break;
				}
				this.state = 1056;
				this.queryStatement(0);
				}
				break;

			case 2:
				{
				this.state = 1057;
				this.valuesDefinition();
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
	public insertPartitionDefinition(): InsertPartitionDefinitionContext {
		let _localctx: InsertPartitionDefinitionContext = new InsertPartitionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, FlinkSqlParser.RULE_insertPartitionDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1060;
			this.match(FlinkSqlParser.KW_PARTITION);
			this.state = 1061;
			this.tablePropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valuesDefinition(): ValuesDefinitionContext {
		let _localctx: ValuesDefinitionContext = new ValuesDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, FlinkSqlParser.RULE_valuesDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1063;
			this.match(FlinkSqlParser.KW_VALUES);
			this.state = 1064;
			this.valuesRowDefinition();
			this.state = 1069;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1065;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1066;
				this.valuesRowDefinition();
				}
				}
				this.state = 1071;
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
	public valuesRowDefinition(): ValuesRowDefinitionContext {
		let _localctx: ValuesRowDefinitionContext = new ValuesRowDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, FlinkSqlParser.RULE_valuesRowDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1072;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1073;
			this.constant();
			this.state = 1078;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1074;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1075;
				this.constant();
				}
				}
				this.state = 1080;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1081;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insertMulStatementCompatibility(): InsertMulStatementCompatibilityContext {
		let _localctx: InsertMulStatementCompatibilityContext = new InsertMulStatementCompatibilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, FlinkSqlParser.RULE_insertMulStatementCompatibility);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1083;
			this.match(FlinkSqlParser.KW_BEGIN);
			this.state = 1084;
			this.match(FlinkSqlParser.KW_STATEMENT);
			this.state = 1085;
			this.match(FlinkSqlParser.KW_SET);
			this.state = 1086;
			this.match(FlinkSqlParser.SEMICOLON);
			this.state = 1090;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1087;
				this.insertSimpleStatement();
				this.state = 1088;
				this.match(FlinkSqlParser.SEMICOLON);
				}
				}
				this.state = 1092;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSqlParser.KW_INSERT);
			this.state = 1094;
			this.match(FlinkSqlParser.KW_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insertMulStatement(): InsertMulStatementContext {
		let _localctx: InsertMulStatementContext = new InsertMulStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, FlinkSqlParser.RULE_insertMulStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1096;
			this.match(FlinkSqlParser.KW_STATEMENT);
			this.state = 1097;
			this.match(FlinkSqlParser.KW_SET);
			this.state = 1098;
			this.match(FlinkSqlParser.KW_BEGIN);
			this.state = 1102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1099;
				this.insertSimpleStatement();
				this.state = 1100;
				this.match(FlinkSqlParser.SEMICOLON);
				}
				}
				this.state = 1104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSqlParser.KW_INSERT);
			this.state = 1106;
			this.match(FlinkSqlParser.KW_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public queryStatement(): QueryStatementContext;
	public queryStatement(_p: number): QueryStatementContext;
	// @RuleVersion(0)
	public queryStatement(_p?: number): QueryStatementContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: QueryStatementContext = new QueryStatementContext(this._ctx, _parentState);
		let _prevctx: QueryStatementContext = _localctx;
		let _startState: number = 160;
		this.enterRecursionRule(_localctx, 160, FlinkSqlParser.RULE_queryStatement, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1131;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				{
				this.state = 1109;
				this.valuesCaluse();
				}
				break;

			case 2:
				{
				this.state = 1110;
				this.withClause();
				this.state = 1111;
				this.queryStatement(5);
				}
				break;

			case 3:
				{
				this.state = 1113;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1114;
				this.queryStatement(0);
				this.state = 1115;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 4:
				{
				this.state = 1117;
				this.selectClause();
				this.state = 1119;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
				case 1:
					{
					this.state = 1118;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1122;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
				case 1:
					{
					this.state = 1121;
					this.limitClause();
					}
					break;
				}
				}
				break;

			case 5:
				{
				this.state = 1124;
				this.selectStatement();
				this.state = 1126;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
				case 1:
					{
					this.state = 1125;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1129;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
				case 1:
					{
					this.state = 1128;
					this.limitClause();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1147;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new QueryStatementContext(_parentctx, _parentState);
					_localctx._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_queryStatement);
					this.state = 1133;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 1134;
					_localctx._operator = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === FlinkSqlParser.KW_EXCEPT || _la === FlinkSqlParser.KW_INTERSECT || _la === FlinkSqlParser.KW_UNION)) {
						_localctx._operator = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1136;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSqlParser.KW_ALL) {
						{
						this.state = 1135;
						this.match(FlinkSqlParser.KW_ALL);
						}
					}

					this.state = 1138;
					_localctx._right = this.queryStatement(0);
					this.state = 1140;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
					case 1:
						{
						this.state = 1139;
						this.orderByCaluse();
						}
						break;
					}
					this.state = 1143;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
					case 1:
						{
						this.state = 1142;
						this.limitClause();
						}
						break;
					}
					}
					}
				}
				this.state = 1149;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
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
	public valuesCaluse(): ValuesCaluseContext {
		let _localctx: ValuesCaluseContext = new ValuesCaluseContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, FlinkSqlParser.RULE_valuesCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1150;
			this.match(FlinkSqlParser.KW_VALUES);
			this.state = 1151;
			this.expression();
			this.state = 1156;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1152;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1153;
					this.expression();
					}
					}
				}
				this.state = 1158;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
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
	public withClause(): WithClauseContext {
		let _localctx: WithClauseContext = new WithClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, FlinkSqlParser.RULE_withClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1159;
			this.match(FlinkSqlParser.KW_WITH);
			this.state = 1160;
			this.withItem();
			this.state = 1165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1161;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1162;
				this.withItem();
				}
				}
				this.state = 1167;
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
	public withItem(): WithItemContext {
		let _localctx: WithItemContext = new WithItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, FlinkSqlParser.RULE_withItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1168;
			this.withItemName();
			this.state = 1180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.LR_BRACKET) {
				{
				this.state = 1169;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1170;
				this.columnName();
				this.state = 1175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 1171;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1172;
					this.columnName();
					}
					}
					this.state = 1177;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1178;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
			}

			this.state = 1182;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 1183;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1184;
			this.queryStatement(0);
			this.state = 1185;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withItemName(): WithItemNameContext {
		let _localctx: WithItemNameContext = new WithItemNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, FlinkSqlParser.RULE_withItemName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1187;
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
	public selectStatement(): SelectStatementContext {
		let _localctx: SelectStatementContext = new SelectStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, FlinkSqlParser.RULE_selectStatement);
		try {
			this.state = 1207;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1189;
				this.selectClause();
				this.state = 1190;
				this.fromClause();
				this.state = 1192;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
				case 1:
					{
					this.state = 1191;
					this.whereClause();
					}
					break;
				}
				this.state = 1195;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
				case 1:
					{
					this.state = 1194;
					this.groupByClause();
					}
					break;
				}
				this.state = 1198;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 1197;
					this.havingClause();
					}
					break;
				}
				this.state = 1201;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
				case 1:
					{
					this.state = 1200;
					this.windowClause();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1203;
				this.selectClause();
				this.state = 1204;
				this.fromClause();
				this.state = 1205;
				this.matchRecognizeClause();
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
	public selectClause(): SelectClauseContext {
		let _localctx: SelectClauseContext = new SelectClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, FlinkSqlParser.RULE_selectClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1209;
			this.match(FlinkSqlParser.KW_SELECT);
			this.state = 1211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_ALL || _la === FlinkSqlParser.KW_DISTINCT) {
				{
				this.state = 1210;
				this.setQuantifier();
				}
			}

			this.state = 1222;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				{
				this.state = 1213;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;

			case 2:
				{
				this.state = 1214;
				this.projectItemDefinition();
				this.state = 1219;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1215;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1216;
						this.projectItemDefinition();
						}
						}
					}
					this.state = 1221;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
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
	public projectItemDefinition(): ProjectItemDefinitionContext {
		let _localctx: ProjectItemDefinitionContext = new ProjectItemDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, FlinkSqlParser.RULE_projectItemDefinition);
		let _la: number;
		try {
			this.state = 1232;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1224;
				this.overWindowItem();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1225;
				this.expression();
				this.state = 1230;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
				case 1:
					{
					this.state = 1227;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSqlParser.KW_AS) {
						{
						this.state = 1226;
						this.match(FlinkSqlParser.KW_AS);
						}
					}

					this.state = 1229;
					this.expression();
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
	public overWindowItem(): OverWindowItemContext {
		let _localctx: OverWindowItemContext = new OverWindowItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, FlinkSqlParser.RULE_overWindowItem);
		try {
			this.state = 1246;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1234;
				this.primaryExpression(0);
				this.state = 1235;
				this.match(FlinkSqlParser.KW_OVER);
				this.state = 1236;
				this.windowSpec();
				this.state = 1237;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 1238;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1240;
				this.primaryExpression(0);
				this.state = 1241;
				this.match(FlinkSqlParser.KW_OVER);
				this.state = 1242;
				this.errorCapturingIdentifier();
				this.state = 1243;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 1244;
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
	public fromClause(): FromClauseContext {
		let _localctx: FromClauseContext = new FromClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, FlinkSqlParser.RULE_fromClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1248;
			this.match(FlinkSqlParser.KW_FROM);
			this.state = 1249;
			this.tableExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public tableExpression(): TableExpressionContext;
	public tableExpression(_p: number): TableExpressionContext;
	// @RuleVersion(0)
	public tableExpression(_p?: number): TableExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TableExpressionContext = new TableExpressionContext(this._ctx, _parentState);
		let _prevctx: TableExpressionContext = _localctx;
		let _startState: number = 180;
		this.enterRecursionRule(_localctx, 180, FlinkSqlParser.RULE_tableExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1262;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				{
				this.state = 1252;
				this.tableReference();
				this.state = 1257;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1253;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1254;
						this.tableReference();
						}
						}
					}
					this.state = 1259;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
				}
				}
				break;

			case 2:
				{
				this.state = 1260;
				this.inlineDataValueClause();
				}
				break;

			case 3:
				{
				this.state = 1261;
				this.windoTVFClause();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1285;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1283;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
					case 1:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_tableExpression);
						this.state = 1264;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1265;
						this.match(FlinkSqlParser.KW_CROSS);
						this.state = 1266;
						this.match(FlinkSqlParser.KW_JOIN);
						this.state = 1267;
						this.tableExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_tableExpression);
						this.state = 1268;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1270;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSqlParser.KW_NATURAL) {
							{
							this.state = 1269;
							this.match(FlinkSqlParser.KW_NATURAL);
							}
						}

						this.state = 1273;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 253)) & ~0x1F) === 0 && ((1 << (_la - 253)) & ((1 << (FlinkSqlParser.KW_FULL - 253)) | (1 << (FlinkSqlParser.KW_INNER - 253)) | (1 << (FlinkSqlParser.KW_LEFT - 253)))) !== 0) || _la === FlinkSqlParser.KW_RIGHT) {
							{
							this.state = 1272;
							_la = this._input.LA(1);
							if (!(((((_la - 253)) & ~0x1F) === 0 && ((1 << (_la - 253)) & ((1 << (FlinkSqlParser.KW_FULL - 253)) | (1 << (FlinkSqlParser.KW_INNER - 253)) | (1 << (FlinkSqlParser.KW_LEFT - 253)))) !== 0) || _la === FlinkSqlParser.KW_RIGHT)) {
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

						this.state = 1276;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSqlParser.KW_OUTER) {
							{
							this.state = 1275;
							this.match(FlinkSqlParser.KW_OUTER);
							}
						}

						this.state = 1278;
						this.match(FlinkSqlParser.KW_JOIN);
						this.state = 1279;
						this.tableExpression(0);
						this.state = 1281;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
						case 1:
							{
							this.state = 1280;
							this.joinCondition();
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1287;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
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
	public tableReference(): TableReferenceContext {
		let _localctx: TableReferenceContext = new TableReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, FlinkSqlParser.RULE_tableReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1288;
			this.tablePrimary();
			this.state = 1290;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				{
				this.state = 1289;
				this.tableAlias();
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
	public tablePrimary(): TablePrimaryContext {
		let _localctx: TablePrimaryContext = new TablePrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, FlinkSqlParser.RULE_tablePrimary);
		let _la: number;
		try {
			this.state = 1333;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_TABLE) {
					{
					this.state = 1292;
					this.match(FlinkSqlParser.KW_TABLE);
					}
				}

				this.state = 1295;
				this.tablePath();
				this.state = 1297;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
				case 1:
					{
					this.state = 1296;
					this.systemTimePeriod();
					}
					break;
				}
				this.state = 1303;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
				case 1:
					{
					this.state = 1300;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSqlParser.KW_AS) {
						{
						this.state = 1299;
						this.match(FlinkSqlParser.KW_AS);
						}
					}

					this.state = 1302;
					this.correlationName();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1305;
				this.match(FlinkSqlParser.KW_LATERAL);
				this.state = 1306;
				this.match(FlinkSqlParser.KW_TABLE);
				this.state = 1307;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1308;
				this.functionName();
				this.state = 1309;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1310;
				this.functionParam();
				this.state = 1315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 1311;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1312;
					this.functionParam();
					}
					}
					this.state = 1317;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1318;
				this.match(FlinkSqlParser.RR_BRACKET);
				this.state = 1319;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_LATERAL) {
					{
					this.state = 1321;
					this.match(FlinkSqlParser.KW_LATERAL);
					}
				}

				this.state = 1324;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1325;
				this.queryStatement(0);
				this.state = 1326;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1328;
				this.match(FlinkSqlParser.KW_UNNEST);
				this.state = 1329;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1330;
				this.expression();
				this.state = 1331;
				this.match(FlinkSqlParser.RR_BRACKET);
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
	public tablePath(): TablePathContext {
		let _localctx: TablePathContext = new TablePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, FlinkSqlParser.RULE_tablePath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1335;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public systemTimePeriod(): SystemTimePeriodContext {
		let _localctx: SystemTimePeriodContext = new SystemTimePeriodContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, FlinkSqlParser.RULE_systemTimePeriod);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1337;
			this.match(FlinkSqlParser.KW_FOR);
			this.state = 1338;
			this.match(FlinkSqlParser.KW_SYSTEM_TIME);
			this.state = 1339;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 1340;
			this.match(FlinkSqlParser.KW_OF);
			this.state = 1341;
			this.dateTimeExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateTimeExpression(): DateTimeExpressionContext {
		let _localctx: DateTimeExpressionContext = new DateTimeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, FlinkSqlParser.RULE_dateTimeExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1343;
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
	public inlineDataValueClause(): InlineDataValueClauseContext {
		let _localctx: InlineDataValueClauseContext = new InlineDataValueClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, FlinkSqlParser.RULE_inlineDataValueClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1345;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1346;
			this.valuesDefinition();
			this.state = 1347;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 1348;
			this.tableAlias();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windoTVFClause(): WindoTVFClauseContext {
		let _localctx: WindoTVFClauseContext = new WindoTVFClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, FlinkSqlParser.RULE_windoTVFClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1350;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 1351;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1352;
			this.windowTVFExression();
			this.state = 1353;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowTVFExression(): WindowTVFExressionContext {
		let _localctx: WindowTVFExressionContext = new WindowTVFExressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, FlinkSqlParser.RULE_windowTVFExression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1355;
			this.windoTVFName();
			this.state = 1356;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1357;
			this.windowTVFParam();
			this.state = 1362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1358;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1359;
				this.windowTVFParam();
				}
				}
				this.state = 1364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1365;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windoTVFName(): WindoTVFNameContext {
		let _localctx: WindoTVFNameContext = new WindoTVFNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, FlinkSqlParser.RULE_windoTVFName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1367;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_CUMULATE || _la === FlinkSqlParser.KW_HOP || _la === FlinkSqlParser.KW_TUMBLE)) {
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
	public windowTVFParam(): WindowTVFParamContext {
		let _localctx: WindowTVFParamContext = new WindowTVFParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, FlinkSqlParser.RULE_windowTVFParam);
		try {
			this.state = 1384;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1369;
				this.match(FlinkSqlParser.KW_TABLE);
				this.state = 1370;
				this.timeAttrColumn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1371;
				this.columnDescriptor();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1372;
				this.timeIntervalExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1373;
				this.match(FlinkSqlParser.KW_DATA);
				this.state = 1374;
				this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
				this.state = 1375;
				this.match(FlinkSqlParser.KW_TABLE);
				this.state = 1376;
				this.timeAttrColumn();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1377;
				this.match(FlinkSqlParser.KW_TIMECOL);
				this.state = 1378;
				this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
				this.state = 1379;
				this.columnDescriptor();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1380;
				this.timeIntervalParamName();
				this.state = 1381;
				this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
				this.state = 1382;
				this.timeIntervalExpression();
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
	public timeIntervalParamName(): TimeIntervalParamNameContext {
		let _localctx: TimeIntervalParamNameContext = new TimeIntervalParamNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, FlinkSqlParser.RULE_timeIntervalParamName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1386;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_DATA || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (FlinkSqlParser.KW_SIZE - 139)) | (1 << (FlinkSqlParser.KW_SLIDE - 139)) | (1 << (FlinkSqlParser.KW_STEP - 139)) | (1 << (FlinkSqlParser.KW_TIMECOL - 139)))) !== 0) || _la === FlinkSqlParser.KW_OFFSET)) {
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
	public columnDescriptor(): ColumnDescriptorContext {
		let _localctx: ColumnDescriptorContext = new ColumnDescriptorContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, FlinkSqlParser.RULE_columnDescriptor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1388;
			this.match(FlinkSqlParser.KW_DESCRIPTOR);
			this.state = 1389;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1390;
			this.uid();
			this.state = 1391;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinCondition(): JoinConditionContext {
		let _localctx: JoinConditionContext = new JoinConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, FlinkSqlParser.RULE_joinCondition);
		let _la: number;
		try {
			this.state = 1407;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_ON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1393;
				this.match(FlinkSqlParser.KW_ON);
				this.state = 1394;
				this.booleanExpression(0);
				}
				break;
			case FlinkSqlParser.KW_USING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1395;
				this.match(FlinkSqlParser.KW_USING);
				this.state = 1396;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1397;
				this.uid();
				this.state = 1402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 1398;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1399;
					this.uid();
					}
					}
					this.state = 1404;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1405;
				this.match(FlinkSqlParser.RR_BRACKET);
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
	public whereClause(): WhereClauseContext {
		let _localctx: WhereClauseContext = new WhereClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, FlinkSqlParser.RULE_whereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1409;
			this.match(FlinkSqlParser.KW_WHERE);
			this.state = 1410;
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
	// @RuleVersion(0)
	public groupByClause(): GroupByClauseContext {
		let _localctx: GroupByClauseContext = new GroupByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, FlinkSqlParser.RULE_groupByClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1412;
			this.match(FlinkSqlParser.KW_GROUP);
			this.state = 1413;
			this.match(FlinkSqlParser.KW_BY);
			this.state = 1414;
			this.groupItemDefinition();
			this.state = 1419;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1415;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1416;
					this.groupItemDefinition();
					}
					}
				}
				this.state = 1421;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
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
	public groupItemDefinition(): GroupItemDefinitionContext {
		let _localctx: GroupItemDefinitionContext = new GroupItemDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, FlinkSqlParser.RULE_groupItemDefinition);
		let _la: number;
		try {
			this.state = 1461;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1422;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1423;
				this.groupWindowFunction();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1424;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1425;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1426;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1427;
				this.expression();
				this.state = 1432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 1428;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1429;
					this.expression();
					}
					}
					this.state = 1434;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1435;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1437;
				this.groupingSetsNotaionName();
				this.state = 1438;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1439;
				this.expression();
				this.state = 1444;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 1440;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1441;
					this.expression();
					}
					}
					this.state = 1446;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1447;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1449;
				this.groupingSets();
				this.state = 1450;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1451;
				this.groupItemDefinition();
				this.state = 1456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 1452;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1453;
					this.groupItemDefinition();
					}
					}
					this.state = 1458;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1459;
				this.match(FlinkSqlParser.RR_BRACKET);
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
	public groupingSets(): GroupingSetsContext {
		let _localctx: GroupingSetsContext = new GroupingSetsContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, FlinkSqlParser.RULE_groupingSets);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1463;
			this.match(FlinkSqlParser.KW_GROUPING);
			this.state = 1464;
			this.match(FlinkSqlParser.KW_SETS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupingSetsNotaionName(): GroupingSetsNotaionNameContext {
		let _localctx: GroupingSetsNotaionNameContext = new GroupingSetsNotaionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, FlinkSqlParser.RULE_groupingSetsNotaionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1466;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_CUBE || _la === FlinkSqlParser.KW_ROLLUP)) {
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
	public groupWindowFunction(): GroupWindowFunctionContext {
		let _localctx: GroupWindowFunctionContext = new GroupWindowFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, FlinkSqlParser.RULE_groupWindowFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1468;
			this.groupWindowFunctionName();
			this.state = 1469;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1470;
			this.timeAttrColumn();
			this.state = 1471;
			this.match(FlinkSqlParser.COMMA);
			this.state = 1472;
			this.timeIntervalExpression();
			this.state = 1473;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupWindowFunctionName(): GroupWindowFunctionNameContext {
		let _localctx: GroupWindowFunctionNameContext = new GroupWindowFunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, FlinkSqlParser.RULE_groupWindowFunctionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1475;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_HOP || _la === FlinkSqlParser.KW_SESSION || _la === FlinkSqlParser.KW_TUMBLE)) {
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
	public timeAttrColumn(): TimeAttrColumnContext {
		let _localctx: TimeAttrColumnContext = new TimeAttrColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, FlinkSqlParser.RULE_timeAttrColumn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1477;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public havingClause(): HavingClauseContext {
		let _localctx: HavingClauseContext = new HavingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, FlinkSqlParser.RULE_havingClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1479;
			this.match(FlinkSqlParser.KW_HAVING);
			this.state = 1480;
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
	// @RuleVersion(0)
	public windowClause(): WindowClauseContext {
		let _localctx: WindowClauseContext = new WindowClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, FlinkSqlParser.RULE_windowClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1482;
			this.match(FlinkSqlParser.KW_WINDOW);
			this.state = 1483;
			this.namedWindow();
			this.state = 1488;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1484;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1485;
					this.namedWindow();
					}
					}
				}
				this.state = 1490;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
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
	public namedWindow(): NamedWindowContext {
		let _localctx: NamedWindowContext = new NamedWindowContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, FlinkSqlParser.RULE_namedWindow);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1491;
			_localctx._name = this.errorCapturingIdentifier();
			this.state = 1492;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 1493;
			this.windowSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowSpec(): WindowSpecContext {
		let _localctx: WindowSpecContext = new WindowSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, FlinkSqlParser.RULE_windowSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSqlParser.KW_ADD) | (1 << FlinkSqlParser.KW_ADMIN) | (1 << FlinkSqlParser.KW_AFTER) | (1 << FlinkSqlParser.KW_ANALYZE) | (1 << FlinkSqlParser.KW_ASC) | (1 << FlinkSqlParser.KW_BEFORE) | (1 << FlinkSqlParser.KW_BYTES) | (1 << FlinkSqlParser.KW_CASCADE) | (1 << FlinkSqlParser.KW_CATALOG) | (1 << FlinkSqlParser.KW_CATALOGS) | (1 << FlinkSqlParser.KW_CENTURY) | (1 << FlinkSqlParser.KW_CHAIN) | (1 << FlinkSqlParser.KW_CHANGELOG_MODE) | (1 << FlinkSqlParser.KW_CHARACTERS) | (1 << FlinkSqlParser.KW_COMMENT) | (1 << FlinkSqlParser.KW_COMPACT) | (1 << FlinkSqlParser.KW_COLUMNS) | (1 << FlinkSqlParser.KW_CONSTRAINTS) | (1 << FlinkSqlParser.KW_CONSTRUCTOR) | (1 << FlinkSqlParser.KW_CUMULATE) | (1 << FlinkSqlParser.KW_DATA) | (1 << FlinkSqlParser.KW_DATABASE) | (1 << FlinkSqlParser.KW_DATABASES) | (1 << FlinkSqlParser.KW_DAYS) | (1 << FlinkSqlParser.KW_DECADE) | (1 << FlinkSqlParser.KW_DEFINED) | (1 << FlinkSqlParser.KW_DESC) | (1 << FlinkSqlParser.KW_DESCRIPTOR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSqlParser.KW_DIV - 32)) | (1 << (FlinkSqlParser.KW_ENCODING - 32)) | (1 << (FlinkSqlParser.KW_ENFORCED - 32)) | (1 << (FlinkSqlParser.KW_ENGINE - 32)) | (1 << (FlinkSqlParser.KW_ERROR - 32)) | (1 << (FlinkSqlParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSqlParser.KW_EXCEPTION - 32)) | (1 << (FlinkSqlParser.KW_EXCLUDE - 32)) | (1 << (FlinkSqlParser.KW_EXCLUDING - 32)) | (1 << (FlinkSqlParser.KW_EXTENDED - 32)) | (1 << (FlinkSqlParser.KW_FILE - 32)) | (1 << (FlinkSqlParser.KW_FINAL - 32)) | (1 << (FlinkSqlParser.KW_FIRST - 32)) | (1 << (FlinkSqlParser.KW_FOLLOWING - 32)) | (1 << (FlinkSqlParser.KW_FORMAT - 32)) | (1 << (FlinkSqlParser.KW_FORTRAN - 32)) | (1 << (FlinkSqlParser.KW_FOUND - 32)) | (1 << (FlinkSqlParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSqlParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSqlParser.KW_GENERAL - 32)) | (1 << (FlinkSqlParser.KW_GENERATED - 32)) | (1 << (FlinkSqlParser.KW_GO - 32)) | (1 << (FlinkSqlParser.KW_GOTO - 32)) | (1 << (FlinkSqlParser.KW_GRANTED - 32)) | (1 << (FlinkSqlParser.KW_HOP - 32)) | (1 << (FlinkSqlParser.KW_HOURS - 32)) | (1 << (FlinkSqlParser.KW_IF - 32)) | (1 << (FlinkSqlParser.KW_IGNORE - 32)) | (1 << (FlinkSqlParser.KW_INCREMENT - 32)) | (1 << (FlinkSqlParser.KW_INPUT - 32)) | (1 << (FlinkSqlParser.KW_INVOKER - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSqlParser.KW_JAR - 64)) | (1 << (FlinkSqlParser.KW_JARS - 64)) | (1 << (FlinkSqlParser.KW_JAVA - 64)) | (1 << (FlinkSqlParser.KW_JSON - 64)) | (1 << (FlinkSqlParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSqlParser.KW_KEY - 64)) | (1 << (FlinkSqlParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSqlParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSqlParser.KW_LABEL - 64)) | (1 << (FlinkSqlParser.KW_LAST - 64)) | (1 << (FlinkSqlParser.KW_LENGTH - 64)) | (1 << (FlinkSqlParser.KW_LEVEL - 64)) | (1 << (FlinkSqlParser.KW_LOAD - 64)) | (1 << (FlinkSqlParser.KW_MAP - 64)) | (1 << (FlinkSqlParser.KW_MICROSECOND - 64)) | (1 << (FlinkSqlParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSqlParser.KW_MILLISECOND - 64)) | (1 << (FlinkSqlParser.KW_MINUTES - 64)) | (1 << (FlinkSqlParser.KW_MINVALUE - 64)) | (1 << (FlinkSqlParser.KW_MODIFY - 64)) | (1 << (FlinkSqlParser.KW_MODULES - 64)) | (1 << (FlinkSqlParser.KW_MONTHS - 64)) | (1 << (FlinkSqlParser.KW_NANOSECOND - 64)) | (1 << (FlinkSqlParser.KW_NULLS - 64)) | (1 << (FlinkSqlParser.KW_NUMBER - 64)) | (1 << (FlinkSqlParser.KW_OPTION - 64)) | (1 << (FlinkSqlParser.KW_OPTIONS - 64)) | (1 << (FlinkSqlParser.KW_ORDERING - 64)) | (1 << (FlinkSqlParser.KW_OUTPUT - 64)) | (1 << (FlinkSqlParser.KW_OVERWRITE - 64)) | (1 << (FlinkSqlParser.KW_OVERWRITING - 64)) | (1 << (FlinkSqlParser.KW_PARTITIONED - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSqlParser.KW_PARTITIONS - 96)) | (1 << (FlinkSqlParser.KW_PASSING - 96)) | (1 << (FlinkSqlParser.KW_PAST - 96)) | (1 << (FlinkSqlParser.KW_PATH - 96)) | (1 << (FlinkSqlParser.KW_PLACING - 96)) | (1 << (FlinkSqlParser.KW_PLAN - 96)) | (1 << (FlinkSqlParser.KW_PRECEDING - 96)) | (1 << (FlinkSqlParser.KW_PRESERVE - 96)) | (1 << (FlinkSqlParser.KW_PRIOR - 96)) | (1 << (FlinkSqlParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSqlParser.KW_PUBLIC - 96)) | (1 << (FlinkSqlParser.KW_PYTHON - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSqlParser.KW_QUARTER - 96)) | (1 << (FlinkSqlParser.KW_RAW - 96)) | (1 << (FlinkSqlParser.KW_READ - 96)) | (1 << (FlinkSqlParser.KW_RELATIVE - 96)) | (1 << (FlinkSqlParser.KW_REMOVE - 96)) | (1 << (FlinkSqlParser.KW_RENAME - 96)) | (1 << (FlinkSqlParser.KW_REPLACE - 96)) | (1 << (FlinkSqlParser.KW_RESPECT - 96)) | (1 << (FlinkSqlParser.KW_RESTART - 96)) | (1 << (FlinkSqlParser.KW_RESTRICT - 96)) | (1 << (FlinkSqlParser.KW_ROLE - 96)) | (1 << (FlinkSqlParser.KW_ROW_COUNT - 96)) | (1 << (FlinkSqlParser.KW_SCALA - 96)) | (1 << (FlinkSqlParser.KW_SCALAR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSqlParser.KW_SCALE - 128)) | (1 << (FlinkSqlParser.KW_SCHEMA - 128)) | (1 << (FlinkSqlParser.KW_SECONDS - 128)) | (1 << (FlinkSqlParser.KW_SECTION - 128)) | (1 << (FlinkSqlParser.KW_SECURITY - 128)) | (1 << (FlinkSqlParser.KW_SELF - 128)) | (1 << (FlinkSqlParser.KW_SERVER - 128)) | (1 << (FlinkSqlParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSqlParser.KW_SESSION - 128)) | (1 << (FlinkSqlParser.KW_SETS - 128)) | (1 << (FlinkSqlParser.KW_SIMPLE - 128)) | (1 << (FlinkSqlParser.KW_SIZE - 128)) | (1 << (FlinkSqlParser.KW_SLIDE - 128)) | (1 << (FlinkSqlParser.KW_SOURCE - 128)) | (1 << (FlinkSqlParser.KW_SPACE - 128)) | (1 << (FlinkSqlParser.KW_STATE - 128)) | (1 << (FlinkSqlParser.KW_STATEMENT - 128)) | (1 << (FlinkSqlParser.KW_STEP - 128)) | (1 << (FlinkSqlParser.KW_STRING - 128)) | (1 << (FlinkSqlParser.KW_STRUCTURE - 128)) | (1 << (FlinkSqlParser.KW_STYLE - 128)) | (1 << (FlinkSqlParser.KW_TABLES - 128)) | (1 << (FlinkSqlParser.KW_TEMPORARY - 128)) | (1 << (FlinkSqlParser.KW_TIMECOL - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSqlParser.KW_TRANSFORM - 128)) | (1 << (FlinkSqlParser.KW_TUMBLE - 128)) | (1 << (FlinkSqlParser.KW_TYPE - 128)) | (1 << (FlinkSqlParser.KW_UNDER - 128)) | (1 << (FlinkSqlParser.KW_UNLOAD - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSqlParser.KW_USAGE - 160)) | (1 << (FlinkSqlParser.KW_USE - 160)) | (1 << (FlinkSqlParser.KW_UTF16 - 160)) | (1 << (FlinkSqlParser.KW_UTF32 - 160)) | (1 << (FlinkSqlParser.KW_UTF8 - 160)) | (1 << (FlinkSqlParser.KW_VERSION - 160)) | (1 << (FlinkSqlParser.KW_VIEW - 160)) | (1 << (FlinkSqlParser.KW_VIEWS - 160)) | (1 << (FlinkSqlParser.KW_VIRTUAL - 160)) | (1 << (FlinkSqlParser.KW_WATERMARK - 160)) | (1 << (FlinkSqlParser.KW_WATERMARKS - 160)) | (1 << (FlinkSqlParser.KW_WEEK - 160)) | (1 << (FlinkSqlParser.KW_WORK - 160)) | (1 << (FlinkSqlParser.KW_WRAPPER - 160)) | (1 << (FlinkSqlParser.KW_YEARS - 160)) | (1 << (FlinkSqlParser.KW_ZONE - 160)))) !== 0) || ((((_la - 405)) & ~0x1F) === 0 && ((1 << (_la - 405)) & ((1 << (FlinkSqlParser.STRING_LITERAL - 405)) | (1 << (FlinkSqlParser.DIG_LITERAL - 405)) | (1 << (FlinkSqlParser.ID_LITERAL - 405)))) !== 0)) {
				{
				this.state = 1495;
				_localctx._name = this.errorCapturingIdentifier();
				}
			}

			this.state = 1498;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1500;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_PARTITION) {
				{
				this.state = 1499;
				this.partitionByClause();
				}
			}

			this.state = 1503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_ORDER) {
				{
				this.state = 1502;
				this.orderByCaluse();
				}
			}

			this.state = 1506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_RANGE || _la === FlinkSqlParser.KW_ROWS) {
				{
				this.state = 1505;
				this.windowFrame();
				}
			}

			this.state = 1508;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matchRecognizeClause(): MatchRecognizeClauseContext {
		let _localctx: MatchRecognizeClauseContext = new MatchRecognizeClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, FlinkSqlParser.RULE_matchRecognizeClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1510;
			this.match(FlinkSqlParser.KW_MATCH_RECOGNIZE);
			this.state = 1511;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_PARTITION) {
				{
				this.state = 1512;
				this.partitionByClause();
				}
			}

			this.state = 1516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_ORDER) {
				{
				this.state = 1515;
				this.orderByCaluse();
				}
			}

			this.state = 1519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_MEASURES) {
				{
				this.state = 1518;
				this.measuresClause();
				}
			}

			this.state = 1522;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_ALL || _la === FlinkSqlParser.KW_ONE) {
				{
				this.state = 1521;
				this.outputMode();
				}
			}

			this.state = 1525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_AFTER) {
				{
				this.state = 1524;
				this.afterMatchStrategy();
				}
			}

			this.state = 1528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_PATTERN) {
				{
				this.state = 1527;
				this.patternDefination();
				}
			}

			this.state = 1530;
			this.patternVariablesDefination();
			this.state = 1531;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 1536;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 170, this._ctx) ) {
			case 1:
				{
				this.state = 1533;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_AS) {
					{
					this.state = 1532;
					this.match(FlinkSqlParser.KW_AS);
					}
				}

				this.state = 1535;
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
	public orderByCaluse(): OrderByCaluseContext {
		let _localctx: OrderByCaluseContext = new OrderByCaluseContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, FlinkSqlParser.RULE_orderByCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1538;
			this.match(FlinkSqlParser.KW_ORDER);
			this.state = 1539;
			this.match(FlinkSqlParser.KW_BY);
			this.state = 1540;
			this.orderItemDefition();
			this.state = 1545;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1541;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1542;
					this.orderItemDefition();
					}
					}
				}
				this.state = 1547;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
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
	public orderItemDefition(): OrderItemDefitionContext {
		let _localctx: OrderItemDefitionContext = new OrderItemDefitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, FlinkSqlParser.RULE_orderItemDefition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1548;
			this.expression();
			this.state = 1550;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 172, this._ctx) ) {
			case 1:
				{
				this.state = 1549;
				_localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_ASC || _la === FlinkSqlParser.KW_DESC)) {
					_localctx._ordering = this._errHandler.recoverInline(this);
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
			this.state = 1554;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				{
				this.state = 1552;
				this.match(FlinkSqlParser.KW_NULLS);
				this.state = 1553;
				_localctx._nullOrder = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_FIRST || _la === FlinkSqlParser.KW_LAST)) {
					_localctx._nullOrder = this._errHandler.recoverInline(this);
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
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public limitClause(): LimitClauseContext {
		let _localctx: LimitClauseContext = new LimitClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, FlinkSqlParser.RULE_limitClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1556;
			this.match(FlinkSqlParser.KW_LIMIT);
			this.state = 1559;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_ALL:
				{
				this.state = 1557;
				this.match(FlinkSqlParser.KW_ALL);
				}
				break;
			case FlinkSqlParser.KW_ADD:
			case FlinkSqlParser.KW_ADMIN:
			case FlinkSqlParser.KW_AFTER:
			case FlinkSqlParser.KW_ANALYZE:
			case FlinkSqlParser.KW_ASC:
			case FlinkSqlParser.KW_BEFORE:
			case FlinkSqlParser.KW_BYTES:
			case FlinkSqlParser.KW_CASCADE:
			case FlinkSqlParser.KW_CATALOG:
			case FlinkSqlParser.KW_CATALOGS:
			case FlinkSqlParser.KW_CENTURY:
			case FlinkSqlParser.KW_CHAIN:
			case FlinkSqlParser.KW_CHANGELOG_MODE:
			case FlinkSqlParser.KW_CHARACTERS:
			case FlinkSqlParser.KW_COMMENT:
			case FlinkSqlParser.KW_COMPACT:
			case FlinkSqlParser.KW_COLUMNS:
			case FlinkSqlParser.KW_CONSTRAINTS:
			case FlinkSqlParser.KW_CONSTRUCTOR:
			case FlinkSqlParser.KW_CUMULATE:
			case FlinkSqlParser.KW_DATA:
			case FlinkSqlParser.KW_DATABASE:
			case FlinkSqlParser.KW_DATABASES:
			case FlinkSqlParser.KW_DAYS:
			case FlinkSqlParser.KW_DECADE:
			case FlinkSqlParser.KW_DEFINED:
			case FlinkSqlParser.KW_DESC:
			case FlinkSqlParser.KW_DESCRIPTOR:
			case FlinkSqlParser.KW_DIV:
			case FlinkSqlParser.KW_ENCODING:
			case FlinkSqlParser.KW_ENFORCED:
			case FlinkSqlParser.KW_ENGINE:
			case FlinkSqlParser.KW_ERROR:
			case FlinkSqlParser.KW_ESTIMATED_COST:
			case FlinkSqlParser.KW_EXCEPTION:
			case FlinkSqlParser.KW_EXCLUDE:
			case FlinkSqlParser.KW_EXCLUDING:
			case FlinkSqlParser.KW_EXTENDED:
			case FlinkSqlParser.KW_FILE:
			case FlinkSqlParser.KW_FINAL:
			case FlinkSqlParser.KW_FIRST:
			case FlinkSqlParser.KW_FOLLOWING:
			case FlinkSqlParser.KW_FORMAT:
			case FlinkSqlParser.KW_FORTRAN:
			case FlinkSqlParser.KW_FOUND:
			case FlinkSqlParser.KW_FRAC_SECOND:
			case FlinkSqlParser.KW_FUNCTIONS:
			case FlinkSqlParser.KW_GENERAL:
			case FlinkSqlParser.KW_GENERATED:
			case FlinkSqlParser.KW_GO:
			case FlinkSqlParser.KW_GOTO:
			case FlinkSqlParser.KW_GRANTED:
			case FlinkSqlParser.KW_HOP:
			case FlinkSqlParser.KW_HOURS:
			case FlinkSqlParser.KW_IF:
			case FlinkSqlParser.KW_IGNORE:
			case FlinkSqlParser.KW_INCREMENT:
			case FlinkSqlParser.KW_INPUT:
			case FlinkSqlParser.KW_INVOKER:
			case FlinkSqlParser.KW_JAR:
			case FlinkSqlParser.KW_JARS:
			case FlinkSqlParser.KW_JAVA:
			case FlinkSqlParser.KW_JSON:
			case FlinkSqlParser.KW_JSON_EXECUTION_PLAN:
			case FlinkSqlParser.KW_KEY:
			case FlinkSqlParser.KW_KEY_MEMBER:
			case FlinkSqlParser.KW_KEY_TYPE:
			case FlinkSqlParser.KW_LABEL:
			case FlinkSqlParser.KW_LAST:
			case FlinkSqlParser.KW_LENGTH:
			case FlinkSqlParser.KW_LEVEL:
			case FlinkSqlParser.KW_LOAD:
			case FlinkSqlParser.KW_MAP:
			case FlinkSqlParser.KW_MICROSECOND:
			case FlinkSqlParser.KW_MILLENNIUM:
			case FlinkSqlParser.KW_MILLISECOND:
			case FlinkSqlParser.KW_MINUTES:
			case FlinkSqlParser.KW_MINVALUE:
			case FlinkSqlParser.KW_MODIFY:
			case FlinkSqlParser.KW_MODULES:
			case FlinkSqlParser.KW_MONTHS:
			case FlinkSqlParser.KW_NANOSECOND:
			case FlinkSqlParser.KW_NULLS:
			case FlinkSqlParser.KW_NUMBER:
			case FlinkSqlParser.KW_OPTION:
			case FlinkSqlParser.KW_OPTIONS:
			case FlinkSqlParser.KW_ORDERING:
			case FlinkSqlParser.KW_OUTPUT:
			case FlinkSqlParser.KW_OVERWRITE:
			case FlinkSqlParser.KW_OVERWRITING:
			case FlinkSqlParser.KW_PARTITIONED:
			case FlinkSqlParser.KW_PARTITIONS:
			case FlinkSqlParser.KW_PASSING:
			case FlinkSqlParser.KW_PAST:
			case FlinkSqlParser.KW_PATH:
			case FlinkSqlParser.KW_PLACING:
			case FlinkSqlParser.KW_PLAN:
			case FlinkSqlParser.KW_PRECEDING:
			case FlinkSqlParser.KW_PRESERVE:
			case FlinkSqlParser.KW_PRIOR:
			case FlinkSqlParser.KW_PRIVILEGES:
			case FlinkSqlParser.KW_PUBLIC:
			case FlinkSqlParser.KW_PYTHON:
			case FlinkSqlParser.KW_PYTHON_FILES:
			case FlinkSqlParser.KW_PYTHON_REQUIREMENTS:
			case FlinkSqlParser.KW_PYTHON_DEPENDENCIES:
			case FlinkSqlParser.KW_PYTHON_JAR:
			case FlinkSqlParser.KW_PYTHON_ARCHIVES:
			case FlinkSqlParser.KW_PYTHON_PARAMETER:
			case FlinkSqlParser.KW_QUARTER:
			case FlinkSqlParser.KW_RAW:
			case FlinkSqlParser.KW_READ:
			case FlinkSqlParser.KW_RELATIVE:
			case FlinkSqlParser.KW_REMOVE:
			case FlinkSqlParser.KW_RENAME:
			case FlinkSqlParser.KW_REPLACE:
			case FlinkSqlParser.KW_RESPECT:
			case FlinkSqlParser.KW_RESTART:
			case FlinkSqlParser.KW_RESTRICT:
			case FlinkSqlParser.KW_ROLE:
			case FlinkSqlParser.KW_ROW_COUNT:
			case FlinkSqlParser.KW_SCALA:
			case FlinkSqlParser.KW_SCALAR:
			case FlinkSqlParser.KW_SCALE:
			case FlinkSqlParser.KW_SCHEMA:
			case FlinkSqlParser.KW_SECONDS:
			case FlinkSqlParser.KW_SECTION:
			case FlinkSqlParser.KW_SECURITY:
			case FlinkSqlParser.KW_SELF:
			case FlinkSqlParser.KW_SERVER:
			case FlinkSqlParser.KW_SERVER_NAME:
			case FlinkSqlParser.KW_SESSION:
			case FlinkSqlParser.KW_SETS:
			case FlinkSqlParser.KW_SIMPLE:
			case FlinkSqlParser.KW_SIZE:
			case FlinkSqlParser.KW_SLIDE:
			case FlinkSqlParser.KW_SOURCE:
			case FlinkSqlParser.KW_SPACE:
			case FlinkSqlParser.KW_STATE:
			case FlinkSqlParser.KW_STATEMENT:
			case FlinkSqlParser.KW_STEP:
			case FlinkSqlParser.KW_STRING:
			case FlinkSqlParser.KW_STRUCTURE:
			case FlinkSqlParser.KW_STYLE:
			case FlinkSqlParser.KW_TABLES:
			case FlinkSqlParser.KW_TEMPORARY:
			case FlinkSqlParser.KW_TIMECOL:
			case FlinkSqlParser.KW_TIMESTAMP_LTZ:
			case FlinkSqlParser.KW_TIMESTAMPADD:
			case FlinkSqlParser.KW_TIMESTAMPDIFF:
			case FlinkSqlParser.KW_TRANSFORM:
			case FlinkSqlParser.KW_TUMBLE:
			case FlinkSqlParser.KW_TYPE:
			case FlinkSqlParser.KW_UNDER:
			case FlinkSqlParser.KW_UNLOAD:
			case FlinkSqlParser.KW_USAGE:
			case FlinkSqlParser.KW_USE:
			case FlinkSqlParser.KW_UTF16:
			case FlinkSqlParser.KW_UTF32:
			case FlinkSqlParser.KW_UTF8:
			case FlinkSqlParser.KW_VERSION:
			case FlinkSqlParser.KW_VIEW:
			case FlinkSqlParser.KW_VIEWS:
			case FlinkSqlParser.KW_VIRTUAL:
			case FlinkSqlParser.KW_WATERMARK:
			case FlinkSqlParser.KW_WATERMARKS:
			case FlinkSqlParser.KW_WEEK:
			case FlinkSqlParser.KW_WORK:
			case FlinkSqlParser.KW_WRAPPER:
			case FlinkSqlParser.KW_YEARS:
			case FlinkSqlParser.KW_ZONE:
			case FlinkSqlParser.KW_ABS:
			case FlinkSqlParser.KW_ARRAY:
			case FlinkSqlParser.KW_AVG:
			case FlinkSqlParser.KW_CASE:
			case FlinkSqlParser.KW_CAST:
			case FlinkSqlParser.KW_CEIL:
			case FlinkSqlParser.KW_COALESCE:
			case FlinkSqlParser.KW_COLLECT:
			case FlinkSqlParser.KW_COUNT:
			case FlinkSqlParser.KW_DATE:
			case FlinkSqlParser.KW_DAY:
			case FlinkSqlParser.KW_EXISTS:
			case FlinkSqlParser.KW_FALSE:
			case FlinkSqlParser.KW_GROUPING:
			case FlinkSqlParser.KW_HOUR:
			case FlinkSqlParser.KW_INTERVAL:
			case FlinkSqlParser.KW_LAG:
			case FlinkSqlParser.KW_LEFT:
			case FlinkSqlParser.KW_MINUTE:
			case FlinkSqlParser.KW_MONTH:
			case FlinkSqlParser.KW_NOT:
			case FlinkSqlParser.KW_NULL:
			case FlinkSqlParser.KW_OVERLAY:
			case FlinkSqlParser.KW_POSITION:
			case FlinkSqlParser.KW_POWER:
			case FlinkSqlParser.KW_RANK:
			case FlinkSqlParser.KW_RIGHT:
			case FlinkSqlParser.KW_SECOND:
			case FlinkSqlParser.KW_SUBSTRING:
			case FlinkSqlParser.KW_SUM:
			case FlinkSqlParser.KW_TIME:
			case FlinkSqlParser.KW_TIMESTAMP:
			case FlinkSqlParser.KW_TRUE:
			case FlinkSqlParser.KW_TRUNCATE:
			case FlinkSqlParser.KW_UPPER:
			case FlinkSqlParser.KW_YEAR:
			case FlinkSqlParser.BIT_NOT_OP:
			case FlinkSqlParser.LR_BRACKET:
			case FlinkSqlParser.ASTERISK_SIGN:
			case FlinkSqlParser.HYPNEN_SIGN:
			case FlinkSqlParser.ADD_SIGN:
			case FlinkSqlParser.STRING_LITERAL:
			case FlinkSqlParser.DIG_LITERAL:
			case FlinkSqlParser.REAL_LITERAL:
			case FlinkSqlParser.BIT_STRING:
			case FlinkSqlParser.ID_LITERAL:
				{
				this.state = 1558;
				_localctx._limit = this.expression();
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
	public partitionByClause(): PartitionByClauseContext {
		let _localctx: PartitionByClauseContext = new PartitionByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, FlinkSqlParser.RULE_partitionByClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1561;
			this.match(FlinkSqlParser.KW_PARTITION);
			this.state = 1562;
			this.match(FlinkSqlParser.KW_BY);
			this.state = 1563;
			this.expression();
			this.state = 1568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1564;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1565;
				this.expression();
				}
				}
				this.state = 1570;
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
	public quantifiers(): QuantifiersContext {
		let _localctx: QuantifiersContext = new QuantifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, FlinkSqlParser.RULE_quantifiers);
		try {
			this.state = 1587;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 176, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1571;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1572;
				this.match(FlinkSqlParser.ADD_SIGN);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 1573;
				this.match(FlinkSqlParser.QUESTION_MARK_SIGN);
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 1574;
				this.match(FlinkSqlParser.LB_BRACKET);
				this.state = 1575;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1576;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1577;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1578;
				this.match(FlinkSqlParser.RB_BRACKET);
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				{
				this.state = 1579;
				this.match(FlinkSqlParser.LB_BRACKET);
				this.state = 1580;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1581;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1582;
				this.match(FlinkSqlParser.RB_BRACKET);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 1583;
				this.match(FlinkSqlParser.LB_BRACKET);
				this.state = 1584;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1585;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1586;
				this.match(FlinkSqlParser.RB_BRACKET);
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
	public measuresClause(): MeasuresClauseContext {
		let _localctx: MeasuresClauseContext = new MeasuresClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, FlinkSqlParser.RULE_measuresClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1589;
			this.match(FlinkSqlParser.KW_MEASURES);
			this.state = 1590;
			this.projectItemDefinition();
			this.state = 1595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1591;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1592;
				this.projectItemDefinition();
				}
				}
				this.state = 1597;
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
	public patternDefination(): PatternDefinationContext {
		let _localctx: PatternDefinationContext = new PatternDefinationContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, FlinkSqlParser.RULE_patternDefination);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1598;
			this.match(FlinkSqlParser.KW_PATTERN);
			this.state = 1599;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1601;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1600;
				this.patternVariable();
				}
				}
				this.state = 1603;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSqlParser.DIG_LITERAL || _la === FlinkSqlParser.ID_LITERAL);
			this.state = 1605;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 1607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_WITHIN) {
				{
				this.state = 1606;
				this.withinClause();
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
	public patternVariable(): PatternVariableContext {
		let _localctx: PatternVariableContext = new PatternVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, FlinkSqlParser.RULE_patternVariable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1609;
			this.unquotedIdentifier();
			this.state = 1611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 386)) & ~0x1F) === 0 && ((1 << (_la - 386)) & ((1 << (FlinkSqlParser.LB_BRACKET - 386)) | (1 << (FlinkSqlParser.ASTERISK_SIGN - 386)) | (1 << (FlinkSqlParser.ADD_SIGN - 386)) | (1 << (FlinkSqlParser.QUESTION_MARK_SIGN - 386)))) !== 0)) {
				{
				this.state = 1610;
				this.quantifiers();
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
	public outputMode(): OutputModeContext {
		let _localctx: OutputModeContext = new OutputModeContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, FlinkSqlParser.RULE_outputMode);
		try {
			this.state = 1621;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_ALL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1613;
				this.match(FlinkSqlParser.KW_ALL);
				this.state = 1614;
				this.match(FlinkSqlParser.KW_ROWS);
				this.state = 1615;
				this.match(FlinkSqlParser.KW_PER);
				this.state = 1616;
				this.match(FlinkSqlParser.KW_MATCH);
				}
				break;
			case FlinkSqlParser.KW_ONE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1617;
				this.match(FlinkSqlParser.KW_ONE);
				this.state = 1618;
				this.match(FlinkSqlParser.KW_ROW);
				this.state = 1619;
				this.match(FlinkSqlParser.KW_PER);
				this.state = 1620;
				this.match(FlinkSqlParser.KW_MATCH);
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
	public afterMatchStrategy(): AfterMatchStrategyContext {
		let _localctx: AfterMatchStrategyContext = new AfterMatchStrategyContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, FlinkSqlParser.RULE_afterMatchStrategy);
		try {
			this.state = 1647;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 182, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1623;
				this.match(FlinkSqlParser.KW_AFTER);
				this.state = 1624;
				this.match(FlinkSqlParser.KW_MATCH);
				this.state = 1625;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1626;
				this.match(FlinkSqlParser.KW_PAST);
				this.state = 1627;
				this.match(FlinkSqlParser.KW_LAST);
				this.state = 1628;
				this.match(FlinkSqlParser.KW_ROW);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1629;
				this.match(FlinkSqlParser.KW_AFTER);
				this.state = 1630;
				this.match(FlinkSqlParser.KW_MATCH);
				this.state = 1631;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1632;
				this.match(FlinkSqlParser.KW_TO);
				this.state = 1633;
				this.match(FlinkSqlParser.KW_NEXT);
				this.state = 1634;
				this.match(FlinkSqlParser.KW_ROW);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1635;
				this.match(FlinkSqlParser.KW_AFTER);
				this.state = 1636;
				this.match(FlinkSqlParser.KW_MATCH);
				this.state = 1637;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1638;
				this.match(FlinkSqlParser.KW_TO);
				this.state = 1639;
				this.match(FlinkSqlParser.KW_LAST);
				this.state = 1640;
				this.unquotedIdentifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1641;
				this.match(FlinkSqlParser.KW_AFTER);
				this.state = 1642;
				this.match(FlinkSqlParser.KW_MATCH);
				this.state = 1643;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1644;
				this.match(FlinkSqlParser.KW_TO);
				this.state = 1645;
				this.match(FlinkSqlParser.KW_FIRST);
				this.state = 1646;
				this.unquotedIdentifier();
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
	public patternVariablesDefination(): PatternVariablesDefinationContext {
		let _localctx: PatternVariablesDefinationContext = new PatternVariablesDefinationContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, FlinkSqlParser.RULE_patternVariablesDefination);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1649;
			this.match(FlinkSqlParser.KW_DEFINE);
			this.state = 1650;
			this.projectItemDefinition();
			this.state = 1655;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1651;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1652;
				this.projectItemDefinition();
				}
				}
				this.state = 1657;
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
	public windowFrame(): WindowFrameContext {
		let _localctx: WindowFrameContext = new WindowFrameContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, FlinkSqlParser.RULE_windowFrame);
		try {
			this.state = 1667;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_RANGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1658;
				this.match(FlinkSqlParser.KW_RANGE);
				this.state = 1659;
				this.match(FlinkSqlParser.KW_BETWEEN);
				this.state = 1660;
				this.timeIntervalExpression();
				this.state = 1661;
				this.frameBound();
				}
				break;
			case FlinkSqlParser.KW_ROWS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1663;
				this.match(FlinkSqlParser.KW_ROWS);
				this.state = 1664;
				this.match(FlinkSqlParser.KW_BETWEEN);
				this.state = 1665;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1666;
				this.frameBound();
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
	public frameBound(): FrameBoundContext {
		let _localctx: FrameBoundContext = new FrameBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, FlinkSqlParser.RULE_frameBound);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1669;
			this.match(FlinkSqlParser.KW_PRECEDING);
			this.state = 1670;
			this.match(FlinkSqlParser.KW_AND);
			this.state = 1671;
			this.match(FlinkSqlParser.KW_CURRENT);
			this.state = 1672;
			this.match(FlinkSqlParser.KW_ROW);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withinClause(): WithinClauseContext {
		let _localctx: WithinClauseContext = new WithinClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, FlinkSqlParser.RULE_withinClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1674;
			this.match(FlinkSqlParser.KW_WITHIN);
			this.state = 1675;
			this.timeIntervalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 262, FlinkSqlParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1677;
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
		let _startState: number = 264;
		this.enterRecursionRule(_localctx, 264, FlinkSqlParser.RULE_booleanExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1691;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				{
				_localctx = new LogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1680;
				this.match(FlinkSqlParser.KW_NOT);
				this.state = 1681;
				this.booleanExpression(6);
				}
				break;

			case 2:
				{
				_localctx = new ExistsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1682;
				this.match(FlinkSqlParser.KW_EXISTS);
				this.state = 1683;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1684;
				this.queryStatement(0);
				this.state = 1685;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new PredicatedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1687;
				this.valueExpression(0);
				this.state = 1689;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 185, this._ctx) ) {
				case 1:
					{
					this.state = 1688;
					this.predicate();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1707;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1705;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 188, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1693;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1694;
						(_localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.KW_AND);
						this.state = 1695;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1696;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1697;
						(_localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.KW_OR);
						this.state = 1698;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 3:
						{
						_localctx = new LogicalNestedContext(new BooleanExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1699;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1700;
						this.match(FlinkSqlParser.KW_IS);
						this.state = 1702;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSqlParser.KW_NOT) {
							{
							this.state = 1701;
							this.match(FlinkSqlParser.KW_NOT);
							}
						}

						this.state = 1704;
						(_localctx as LogicalNestedContext)._kind = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === FlinkSqlParser.KW_FALSE || _la === FlinkSqlParser.KW_NULL || _la === FlinkSqlParser.KW_TRUE || _la === FlinkSqlParser.KW_UNKNOWN)) {
							(_localctx as LogicalNestedContext)._kind = this._errHandler.recoverInline(this);
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
				}
				this.state = 1709;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
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
	public predicate(): PredicateContext {
		let _localctx: PredicateContext = new PredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, FlinkSqlParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 1777;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 200, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1710;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1713;
				_localctx._kind = this.match(FlinkSqlParser.KW_BETWEEN);
				this.state = 1715;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_ASYMMETRIC || _la === FlinkSqlParser.KW_SYMMETRIC) {
					{
					this.state = 1714;
					_la = this._input.LA(1);
					if (!(_la === FlinkSqlParser.KW_ASYMMETRIC || _la === FlinkSqlParser.KW_SYMMETRIC)) {
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

				this.state = 1717;
				_localctx._lower = this.valueExpression(0);
				this.state = 1718;
				this.match(FlinkSqlParser.KW_AND);
				this.state = 1719;
				_localctx._upper = this.valueExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1722;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1721;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1724;
				_localctx._kind = this.match(FlinkSqlParser.KW_IN);
				this.state = 1725;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1726;
				this.expression();
				this.state = 1731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 1727;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1728;
					this.expression();
					}
					}
					this.state = 1733;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1734;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1737;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1736;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1739;
				_localctx._kind = this.match(FlinkSqlParser.KW_IN);
				this.state = 1740;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1741;
				this.queryStatement(0);
				this.state = 1742;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1744;
				_localctx._kind = this.match(FlinkSqlParser.KW_EXISTS);
				this.state = 1745;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1746;
				this.queryStatement(0);
				this.state = 1747;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1749;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1752;
				_localctx._kind = this.match(FlinkSqlParser.KW_RLIKE);
				this.state = 1753;
				_localctx._pattern = this.valueExpression(0);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1754;
				this.likePredicate();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1755;
				this.match(FlinkSqlParser.KW_IS);
				this.state = 1757;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1756;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1759;
				_localctx._kind = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_FALSE || _la === FlinkSqlParser.KW_NULL || _la === FlinkSqlParser.KW_TRUE || _la === FlinkSqlParser.KW_UNKNOWN)) {
					_localctx._kind = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1760;
				this.match(FlinkSqlParser.KW_IS);
				this.state = 1762;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1761;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1764;
				_localctx._kind = this.match(FlinkSqlParser.KW_DISTINCT);
				this.state = 1765;
				this.match(FlinkSqlParser.KW_FROM);
				this.state = 1766;
				_localctx._right = this.valueExpression(0);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1768;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1767;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1770;
				_localctx._kind = this.match(FlinkSqlParser.KW_SIMILAR);
				this.state = 1771;
				this.match(FlinkSqlParser.KW_TO);
				this.state = 1772;
				_localctx._right = this.valueExpression(0);
				this.state = 1775;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
				case 1:
					{
					this.state = 1773;
					this.match(FlinkSqlParser.KW_ESCAPE);
					this.state = 1774;
					this.stringLiteral();
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
	public likePredicate(): LikePredicateContext {
		let _localctx: LikePredicateContext = new LikePredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, FlinkSqlParser.RULE_likePredicate);
		let _la: number;
		try {
			this.state = 1808;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 206, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1780;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1779;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1782;
				_localctx._kind = this.match(FlinkSqlParser.KW_LIKE);
				this.state = 1783;
				_localctx._quantifier = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_ALL || _la === FlinkSqlParser.KW_ANY)) {
					_localctx._quantifier = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1797;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 203, this._ctx) ) {
				case 1:
					{
					this.state = 1784;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1785;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;

				case 2:
					{
					this.state = 1786;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1787;
					this.expression();
					this.state = 1792;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FlinkSqlParser.COMMA) {
						{
						{
						this.state = 1788;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1789;
						this.expression();
						}
						}
						this.state = 1794;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1795;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1800;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1799;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1802;
				_localctx._kind = this.match(FlinkSqlParser.KW_LIKE);
				this.state = 1803;
				_localctx._pattern = this.valueExpression(0);
				this.state = 1806;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 205, this._ctx) ) {
				case 1:
					{
					this.state = 1804;
					this.match(FlinkSqlParser.KW_ESCAPE);
					this.state = 1805;
					this.stringLiteral();
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
		let _startState: number = 270;
		this.enterRecursionRule(_localctx, 270, FlinkSqlParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1814;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 207, this._ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1811;
				this.primaryExpression(0);
				}
				break;

			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1812;
				(_localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 377)) & ~0x1F) === 0 && ((1 << (_la - 377)) & ((1 << (FlinkSqlParser.BIT_NOT_OP - 377)) | (1 << (FlinkSqlParser.HYPNEN_SIGN - 377)) | (1 << (FlinkSqlParser.ADD_SIGN - 377)))) !== 0))) {
					(_localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1813;
				this.valueExpression(8);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1839;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 209, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1837;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 208, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1816;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1817;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === FlinkSqlParser.KW_DIV || ((((_la - 395)) & ~0x1F) === 0 && ((1 << (_la - 395)) & ((1 << (FlinkSqlParser.ASTERISK_SIGN - 395)) | (1 << (FlinkSqlParser.PENCENT_SIGN - 395)) | (1 << (FlinkSqlParser.SLASH_SIGN - 395)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1818;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(8);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1819;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1820;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 397)) & ~0x1F) === 0 && ((1 << (_la - 397)) & ((1 << (FlinkSqlParser.HYPNEN_SIGN - 397)) | (1 << (FlinkSqlParser.ADD_SIGN - 397)) | (1 << (FlinkSqlParser.DOUBLE_VERTICAL_SIGN - 397)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1821;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(7);
						}
						break;

					case 3:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1822;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1823;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_AND_OP);
						this.state = 1824;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(6);
						}
						break;

					case 4:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1825;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1826;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_XOR_OP);
						this.state = 1827;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(5);
						}
						break;

					case 5:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1828;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1829;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_OR_OP);
						this.state = 1830;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;

					case 6:
						{
						_localctx = new ComparisonContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1831;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1832;
						this.comparisonOperator();
						this.state = 1833;
						(_localctx as ComparisonContext)._right = this.valueExpression(3);
						}
						break;

					case 7:
						{
						_localctx = new ArithmeticBinaryAlternateContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryAlternateContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1835;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1836;
						(_localctx as ArithmeticBinaryAlternateContext)._right = this.match(FlinkSqlParser.SLASH_TEXT);
						}
						break;
					}
					}
				}
				this.state = 1841;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 209, this._ctx);
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
		let _startState: number = 272;
		this.enterRecursionRule(_localctx, 272, FlinkSqlParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1933;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				{
				_localctx = new SearchedCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1843;
				this.match(FlinkSqlParser.KW_CASE);
				this.state = 1845;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1844;
					this.whenClause();
					}
					}
					this.state = 1847;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSqlParser.KW_WHEN);
				this.state = 1851;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_ELSE) {
					{
					this.state = 1849;
					this.match(FlinkSqlParser.KW_ELSE);
					this.state = 1850;
					(_localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1853;
				this.match(FlinkSqlParser.KW_END);
				}
				break;

			case 2:
				{
				_localctx = new SimpleCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1855;
				this.match(FlinkSqlParser.KW_CASE);
				this.state = 1856;
				(_localctx as SimpleCaseContext)._value = this.expression();
				this.state = 1858;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1857;
					this.whenClause();
					}
					}
					this.state = 1860;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSqlParser.KW_WHEN);
				this.state = 1864;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_ELSE) {
					{
					this.state = 1862;
					this.match(FlinkSqlParser.KW_ELSE);
					this.state = 1863;
					(_localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1866;
				this.match(FlinkSqlParser.KW_END);
				}
				break;

			case 3:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1868;
				this.match(FlinkSqlParser.KW_CAST);
				this.state = 1869;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1870;
				this.expression();
				this.state = 1871;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 1872;
				this.columnType();
				this.state = 1873;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 4:
				{
				_localctx = new FirstContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1875;
				this.match(FlinkSqlParser.KW_FIRST);
				this.state = 1876;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1877;
				this.expression();
				this.state = 1880;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_IGNORE) {
					{
					this.state = 1878;
					this.match(FlinkSqlParser.KW_IGNORE);
					this.state = 1879;
					this.match(FlinkSqlParser.KW_NULLS);
					}
				}

				this.state = 1882;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 5:
				{
				_localctx = new LastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1884;
				this.match(FlinkSqlParser.KW_LAST);
				this.state = 1885;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1886;
				this.expression();
				this.state = 1889;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_IGNORE) {
					{
					this.state = 1887;
					this.match(FlinkSqlParser.KW_IGNORE);
					this.state = 1888;
					this.match(FlinkSqlParser.KW_NULLS);
					}
				}

				this.state = 1891;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 6:
				{
				_localctx = new PositionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1893;
				this.match(FlinkSqlParser.KW_POSITION);
				this.state = 1894;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1895;
				(_localctx as PositionContext)._substr = this.valueExpression(0);
				this.state = 1896;
				this.match(FlinkSqlParser.KW_IN);
				this.state = 1897;
				(_localctx as PositionContext)._str = this.valueExpression(0);
				this.state = 1898;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 7:
				{
				_localctx = new ConstantDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1900;
				this.constant();
				}
				break;

			case 8:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1901;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;

			case 9:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1902;
				this.uid();
				this.state = 1903;
				this.match(FlinkSqlParser.DOT);
				this.state = 1904;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;

			case 10:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1906;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1907;
				this.queryStatement(0);
				this.state = 1908;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 11:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1910;
				this.functionName();
				this.state = 1911;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1923;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSqlParser.KW_ADD) | (1 << FlinkSqlParser.KW_ADMIN) | (1 << FlinkSqlParser.KW_AFTER) | (1 << FlinkSqlParser.KW_ANALYZE) | (1 << FlinkSqlParser.KW_ASC) | (1 << FlinkSqlParser.KW_BEFORE) | (1 << FlinkSqlParser.KW_BYTES) | (1 << FlinkSqlParser.KW_CASCADE) | (1 << FlinkSqlParser.KW_CATALOG) | (1 << FlinkSqlParser.KW_CATALOGS) | (1 << FlinkSqlParser.KW_CENTURY) | (1 << FlinkSqlParser.KW_CHAIN) | (1 << FlinkSqlParser.KW_CHANGELOG_MODE) | (1 << FlinkSqlParser.KW_CHARACTERS) | (1 << FlinkSqlParser.KW_COMMENT) | (1 << FlinkSqlParser.KW_COMPACT) | (1 << FlinkSqlParser.KW_COLUMNS) | (1 << FlinkSqlParser.KW_CONSTRAINTS) | (1 << FlinkSqlParser.KW_CONSTRUCTOR) | (1 << FlinkSqlParser.KW_CUMULATE) | (1 << FlinkSqlParser.KW_DATA) | (1 << FlinkSqlParser.KW_DATABASE) | (1 << FlinkSqlParser.KW_DATABASES) | (1 << FlinkSqlParser.KW_DAYS) | (1 << FlinkSqlParser.KW_DECADE) | (1 << FlinkSqlParser.KW_DEFINED) | (1 << FlinkSqlParser.KW_DESC) | (1 << FlinkSqlParser.KW_DESCRIPTOR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSqlParser.KW_DIV - 32)) | (1 << (FlinkSqlParser.KW_ENCODING - 32)) | (1 << (FlinkSqlParser.KW_ENFORCED - 32)) | (1 << (FlinkSqlParser.KW_ENGINE - 32)) | (1 << (FlinkSqlParser.KW_EPOCH - 32)) | (1 << (FlinkSqlParser.KW_ERROR - 32)) | (1 << (FlinkSqlParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSqlParser.KW_EXCEPTION - 32)) | (1 << (FlinkSqlParser.KW_EXCLUDE - 32)) | (1 << (FlinkSqlParser.KW_EXCLUDING - 32)) | (1 << (FlinkSqlParser.KW_EXTENDED - 32)) | (1 << (FlinkSqlParser.KW_FILE - 32)) | (1 << (FlinkSqlParser.KW_FINAL - 32)) | (1 << (FlinkSqlParser.KW_FIRST - 32)) | (1 << (FlinkSqlParser.KW_FOLLOWING - 32)) | (1 << (FlinkSqlParser.KW_FORMAT - 32)) | (1 << (FlinkSqlParser.KW_FORTRAN - 32)) | (1 << (FlinkSqlParser.KW_FOUND - 32)) | (1 << (FlinkSqlParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSqlParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSqlParser.KW_GENERAL - 32)) | (1 << (FlinkSqlParser.KW_GENERATED - 32)) | (1 << (FlinkSqlParser.KW_GO - 32)) | (1 << (FlinkSqlParser.KW_GOTO - 32)) | (1 << (FlinkSqlParser.KW_GRANTED - 32)) | (1 << (FlinkSqlParser.KW_HOP - 32)) | (1 << (FlinkSqlParser.KW_HOURS - 32)) | (1 << (FlinkSqlParser.KW_IF - 32)) | (1 << (FlinkSqlParser.KW_IGNORE - 32)) | (1 << (FlinkSqlParser.KW_INCREMENT - 32)) | (1 << (FlinkSqlParser.KW_INPUT - 32)) | (1 << (FlinkSqlParser.KW_INVOKER - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSqlParser.KW_JAR - 64)) | (1 << (FlinkSqlParser.KW_JARS - 64)) | (1 << (FlinkSqlParser.KW_JAVA - 64)) | (1 << (FlinkSqlParser.KW_JSON - 64)) | (1 << (FlinkSqlParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSqlParser.KW_KEY - 64)) | (1 << (FlinkSqlParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSqlParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSqlParser.KW_LABEL - 64)) | (1 << (FlinkSqlParser.KW_LAST - 64)) | (1 << (FlinkSqlParser.KW_LENGTH - 64)) | (1 << (FlinkSqlParser.KW_LEVEL - 64)) | (1 << (FlinkSqlParser.KW_LOAD - 64)) | (1 << (FlinkSqlParser.KW_MAP - 64)) | (1 << (FlinkSqlParser.KW_MICROSECOND - 64)) | (1 << (FlinkSqlParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSqlParser.KW_MILLISECOND - 64)) | (1 << (FlinkSqlParser.KW_MINUTES - 64)) | (1 << (FlinkSqlParser.KW_MINVALUE - 64)) | (1 << (FlinkSqlParser.KW_MODIFY - 64)) | (1 << (FlinkSqlParser.KW_MODULES - 64)) | (1 << (FlinkSqlParser.KW_MONTHS - 64)) | (1 << (FlinkSqlParser.KW_NANOSECOND - 64)) | (1 << (FlinkSqlParser.KW_NULLS - 64)) | (1 << (FlinkSqlParser.KW_NUMBER - 64)) | (1 << (FlinkSqlParser.KW_OPTION - 64)) | (1 << (FlinkSqlParser.KW_OPTIONS - 64)) | (1 << (FlinkSqlParser.KW_ORDERING - 64)) | (1 << (FlinkSqlParser.KW_OUTPUT - 64)) | (1 << (FlinkSqlParser.KW_OVERWRITE - 64)) | (1 << (FlinkSqlParser.KW_OVERWRITING - 64)) | (1 << (FlinkSqlParser.KW_PARTITIONED - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSqlParser.KW_PARTITIONS - 96)) | (1 << (FlinkSqlParser.KW_PASSING - 96)) | (1 << (FlinkSqlParser.KW_PAST - 96)) | (1 << (FlinkSqlParser.KW_PATH - 96)) | (1 << (FlinkSqlParser.KW_PLACING - 96)) | (1 << (FlinkSqlParser.KW_PLAN - 96)) | (1 << (FlinkSqlParser.KW_PRECEDING - 96)) | (1 << (FlinkSqlParser.KW_PRESERVE - 96)) | (1 << (FlinkSqlParser.KW_PRIOR - 96)) | (1 << (FlinkSqlParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSqlParser.KW_PUBLIC - 96)) | (1 << (FlinkSqlParser.KW_PYTHON - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSqlParser.KW_QUARTER - 96)) | (1 << (FlinkSqlParser.KW_RAW - 96)) | (1 << (FlinkSqlParser.KW_READ - 96)) | (1 << (FlinkSqlParser.KW_RELATIVE - 96)) | (1 << (FlinkSqlParser.KW_REMOVE - 96)) | (1 << (FlinkSqlParser.KW_RENAME - 96)) | (1 << (FlinkSqlParser.KW_REPLACE - 96)) | (1 << (FlinkSqlParser.KW_RESPECT - 96)) | (1 << (FlinkSqlParser.KW_RESTART - 96)) | (1 << (FlinkSqlParser.KW_RESTRICT - 96)) | (1 << (FlinkSqlParser.KW_ROLE - 96)) | (1 << (FlinkSqlParser.KW_ROW_COUNT - 96)) | (1 << (FlinkSqlParser.KW_SCALA - 96)) | (1 << (FlinkSqlParser.KW_SCALAR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSqlParser.KW_SCALE - 128)) | (1 << (FlinkSqlParser.KW_SCHEMA - 128)) | (1 << (FlinkSqlParser.KW_SECONDS - 128)) | (1 << (FlinkSqlParser.KW_SECTION - 128)) | (1 << (FlinkSqlParser.KW_SECURITY - 128)) | (1 << (FlinkSqlParser.KW_SELF - 128)) | (1 << (FlinkSqlParser.KW_SERVER - 128)) | (1 << (FlinkSqlParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSqlParser.KW_SESSION - 128)) | (1 << (FlinkSqlParser.KW_SETS - 128)) | (1 << (FlinkSqlParser.KW_SIMPLE - 128)) | (1 << (FlinkSqlParser.KW_SIZE - 128)) | (1 << (FlinkSqlParser.KW_SLIDE - 128)) | (1 << (FlinkSqlParser.KW_SOURCE - 128)) | (1 << (FlinkSqlParser.KW_SPACE - 128)) | (1 << (FlinkSqlParser.KW_STATE - 128)) | (1 << (FlinkSqlParser.KW_STATEMENT - 128)) | (1 << (FlinkSqlParser.KW_STEP - 128)) | (1 << (FlinkSqlParser.KW_STRING - 128)) | (1 << (FlinkSqlParser.KW_STRUCTURE - 128)) | (1 << (FlinkSqlParser.KW_STYLE - 128)) | (1 << (FlinkSqlParser.KW_TABLES - 128)) | (1 << (FlinkSqlParser.KW_TEMPORARY - 128)) | (1 << (FlinkSqlParser.KW_TIMECOL - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSqlParser.KW_TRANSFORM - 128)) | (1 << (FlinkSqlParser.KW_TUMBLE - 128)) | (1 << (FlinkSqlParser.KW_TYPE - 128)) | (1 << (FlinkSqlParser.KW_UNDER - 128)) | (1 << (FlinkSqlParser.KW_UNLOAD - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSqlParser.KW_USAGE - 160)) | (1 << (FlinkSqlParser.KW_USE - 160)) | (1 << (FlinkSqlParser.KW_UTF16 - 160)) | (1 << (FlinkSqlParser.KW_UTF32 - 160)) | (1 << (FlinkSqlParser.KW_UTF8 - 160)) | (1 << (FlinkSqlParser.KW_VERSION - 160)) | (1 << (FlinkSqlParser.KW_VIEW - 160)) | (1 << (FlinkSqlParser.KW_VIEWS - 160)) | (1 << (FlinkSqlParser.KW_VIRTUAL - 160)) | (1 << (FlinkSqlParser.KW_WATERMARK - 160)) | (1 << (FlinkSqlParser.KW_WATERMARKS - 160)) | (1 << (FlinkSqlParser.KW_WEEK - 160)) | (1 << (FlinkSqlParser.KW_WEEKS - 160)) | (1 << (FlinkSqlParser.KW_WORK - 160)) | (1 << (FlinkSqlParser.KW_WRAPPER - 160)) | (1 << (FlinkSqlParser.KW_YEARS - 160)) | (1 << (FlinkSqlParser.KW_ZONE - 160)) | (1 << (FlinkSqlParser.KW_ABS - 160)) | (1 << (FlinkSqlParser.KW_ALL - 160)) | (1 << (FlinkSqlParser.KW_ARRAY - 160)) | (1 << (FlinkSqlParser.KW_AVG - 160)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (FlinkSqlParser.KW_BOTH - 196)) | (1 << (FlinkSqlParser.KW_CASE - 196)) | (1 << (FlinkSqlParser.KW_CAST - 196)) | (1 << (FlinkSqlParser.KW_CEIL - 196)) | (1 << (FlinkSqlParser.KW_COALESCE - 196)) | (1 << (FlinkSqlParser.KW_COLLECT - 196)) | (1 << (FlinkSqlParser.KW_COUNT - 196)) | (1 << (FlinkSqlParser.KW_DATE - 196)) | (1 << (FlinkSqlParser.KW_DAY - 196)))) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & ((1 << (FlinkSqlParser.KW_DISTINCT - 235)) | (1 << (FlinkSqlParser.KW_EXISTS - 235)) | (1 << (FlinkSqlParser.KW_FALSE - 235)) | (1 << (FlinkSqlParser.KW_GROUPING - 235)) | (1 << (FlinkSqlParser.KW_HOUR - 235)))) !== 0) || ((((_la - 271)) & ~0x1F) === 0 && ((1 << (_la - 271)) & ((1 << (FlinkSqlParser.KW_INTERVAL - 271)) | (1 << (FlinkSqlParser.KW_LAG - 271)) | (1 << (FlinkSqlParser.KW_LEADING - 271)) | (1 << (FlinkSqlParser.KW_LEFT - 271)) | (1 << (FlinkSqlParser.KW_MINUTE - 271)) | (1 << (FlinkSqlParser.KW_MONTH - 271)) | (1 << (FlinkSqlParser.KW_NOT - 271)) | (1 << (FlinkSqlParser.KW_NULL - 271)))) !== 0) || ((((_la - 310)) & ~0x1F) === 0 && ((1 << (_la - 310)) & ((1 << (FlinkSqlParser.KW_OVERLAY - 310)) | (1 << (FlinkSqlParser.KW_POSITION - 310)) | (1 << (FlinkSqlParser.KW_POWER - 310)) | (1 << (FlinkSqlParser.KW_RANK - 310)) | (1 << (FlinkSqlParser.KW_RIGHT - 310)) | (1 << (FlinkSqlParser.KW_SECOND - 310)) | (1 << (FlinkSqlParser.KW_SUBSTRING - 310)) | (1 << (FlinkSqlParser.KW_SUM - 310)))) !== 0) || ((((_la - 347)) & ~0x1F) === 0 && ((1 << (_la - 347)) & ((1 << (FlinkSqlParser.KW_TIME - 347)) | (1 << (FlinkSqlParser.KW_TIMESTAMP - 347)) | (1 << (FlinkSqlParser.KW_TRAILING - 347)) | (1 << (FlinkSqlParser.KW_TRUE - 347)) | (1 << (FlinkSqlParser.KW_TRUNCATE - 347)) | (1 << (FlinkSqlParser.KW_UPPER - 347)) | (1 << (FlinkSqlParser.KW_YEAR - 347)) | (1 << (FlinkSqlParser.BIT_NOT_OP - 347)))) !== 0) || ((((_la - 384)) & ~0x1F) === 0 && ((1 << (_la - 384)) & ((1 << (FlinkSqlParser.LR_BRACKET - 384)) | (1 << (FlinkSqlParser.ASTERISK_SIGN - 384)) | (1 << (FlinkSqlParser.HYPNEN_SIGN - 384)) | (1 << (FlinkSqlParser.ADD_SIGN - 384)) | (1 << (FlinkSqlParser.STRING_LITERAL - 384)) | (1 << (FlinkSqlParser.DIG_LITERAL - 384)) | (1 << (FlinkSqlParser.REAL_LITERAL - 384)) | (1 << (FlinkSqlParser.BIT_STRING - 384)) | (1 << (FlinkSqlParser.ID_LITERAL - 384)))) !== 0)) {
					{
					this.state = 1913;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 216, this._ctx) ) {
					case 1:
						{
						this.state = 1912;
						this.setQuantifier();
						}
						break;
					}
					this.state = 1915;
					this.functionParam();
					this.state = 1920;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FlinkSqlParser.COMMA) {
						{
						{
						this.state = 1916;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1917;
						this.functionParam();
						}
						}
						this.state = 1922;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1925;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 12:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1927;
				this.identifier();
				}
				break;

			case 13:
				{
				_localctx = new DereferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1928;
				this.dereferenceDefinition();
				}
				break;

			case 14:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1929;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1930;
				this.expression();
				this.state = 1931;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1942;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new SubscriptContext(new PrimaryExpressionContext(_parentctx, _parentState));
					(_localctx as SubscriptContext)._value = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_primaryExpression);
					this.state = 1935;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 1936;
					this.match(FlinkSqlParser.LS_BRACKET);
					this.state = 1937;
					(_localctx as SubscriptContext)._index = this.valueExpression(0);
					this.state = 1938;
					this.match(FlinkSqlParser.RS_BRACKET);
					}
					}
				}
				this.state = 1944;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
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
	public functionName(): FunctionNameContext {
		let _localctx: FunctionNameContext = new FunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, FlinkSqlParser.RULE_functionName);
		try {
			this.state = 1948;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 221, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1945;
				this.reservedKeywordsUsedAsFuncName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1946;
				this.nonReservedKeywords();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1947;
				this.uid();
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
	public functionParam(): FunctionParamContext {
		let _localctx: FunctionParamContext = new FunctionParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, FlinkSqlParser.RULE_functionParam);
		try {
			this.state = 1954;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 222, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1950;
				this.reservedKeywordsUsedAsFuncParam();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1951;
				this.timeIntervalUnit();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1952;
				this.timePointUnit();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1953;
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
	public dereferenceDefinition(): DereferenceDefinitionContext {
		let _localctx: DereferenceDefinitionContext = new DereferenceDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, FlinkSqlParser.RULE_dereferenceDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1956;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public correlationName(): CorrelationNameContext {
		let _localctx: CorrelationNameContext = new CorrelationNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, FlinkSqlParser.RULE_correlationName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1958;
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
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, FlinkSqlParser.RULE_qualifiedName);
		try {
			this.state = 1962;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 223, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1960;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1961;
				this.dereferenceDefinition();
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
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		let _localctx: TimeIntervalExpressionContext = new TimeIntervalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, FlinkSqlParser.RULE_timeIntervalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1964;
			this.match(FlinkSqlParser.KW_INTERVAL);
			this.state = 1967;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 224, this._ctx) ) {
			case 1:
				{
				this.state = 1965;
				this.errorCapturingMultiUnitsInterval();
				}
				break;

			case 2:
				{
				this.state = 1966;
				this.errorCapturingUnitToUnitInterval();
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
	public errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext {
		let _localctx: ErrorCapturingMultiUnitsIntervalContext = new ErrorCapturingMultiUnitsIntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1969;
			this.multiUnitsInterval();
			this.state = 1971;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 225, this._ctx) ) {
			case 1:
				{
				this.state = 1970;
				this.unitToUnitInterval();
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
	public multiUnitsInterval(): MultiUnitsIntervalContext {
		let _localctx: MultiUnitsIntervalContext = new MultiUnitsIntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, FlinkSqlParser.RULE_multiUnitsInterval);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1976;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1973;
					this.intervalValue();
					this.state = 1974;
					this.timeIntervalUnit();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1978;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 226, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext {
		let _localctx: ErrorCapturingUnitToUnitIntervalContext = new ErrorCapturingUnitToUnitIntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1980;
			_localctx._body = this.unitToUnitInterval();
			this.state = 1983;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 227, this._ctx) ) {
			case 1:
				{
				this.state = 1981;
				_localctx._error1 = this.multiUnitsInterval();
				}
				break;

			case 2:
				{
				this.state = 1982;
				_localctx._error2 = this.unitToUnitInterval();
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
	public unitToUnitInterval(): UnitToUnitIntervalContext {
		let _localctx: UnitToUnitIntervalContext = new UnitToUnitIntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, FlinkSqlParser.RULE_unitToUnitInterval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1985;
			_localctx._value = this.intervalValue();
			this.state = 1986;
			_localctx._from = this.timeIntervalUnit();
			this.state = 1987;
			this.match(FlinkSqlParser.KW_TO);
			this.state = 1988;
			_localctx._to = this.timeIntervalUnit();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intervalValue(): IntervalValueContext {
		let _localctx: IntervalValueContext = new IntervalValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, FlinkSqlParser.RULE_intervalValue);
		let _la: number;
		try {
			this.state = 1995;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.HYPNEN_SIGN:
			case FlinkSqlParser.ADD_SIGN:
			case FlinkSqlParser.DIG_LITERAL:
			case FlinkSqlParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1991;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.HYPNEN_SIGN || _la === FlinkSqlParser.ADD_SIGN) {
					{
					this.state = 1990;
					_la = this._input.LA(1);
					if (!(_la === FlinkSqlParser.HYPNEN_SIGN || _la === FlinkSqlParser.ADD_SIGN)) {
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

				this.state = 1993;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.DIG_LITERAL || _la === FlinkSqlParser.REAL_LITERAL)) {
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
			case FlinkSqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1994;
				this.match(FlinkSqlParser.STRING_LITERAL);
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
	public columnAlias(): ColumnAliasContext {
		let _localctx: ColumnAliasContext = new ColumnAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, FlinkSqlParser.RULE_columnAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1998;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_AS) {
				{
				this.state = 1997;
				this.match(FlinkSqlParser.KW_AS);
				}
			}

			this.state = 2000;
			this.identifier();
			this.state = 2002;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.LR_BRACKET) {
				{
				this.state = 2001;
				this.identifierList();
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
	public tableAlias(): TableAliasContext {
		let _localctx: TableAliasContext = new TableAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, FlinkSqlParser.RULE_tableAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2005;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_AS) {
				{
				this.state = 2004;
				this.match(FlinkSqlParser.KW_AS);
				}
			}

			this.state = 2007;
			this.identifier();
			this.state = 2009;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 233, this._ctx) ) {
			case 1:
				{
				this.state = 2008;
				this.identifierList();
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
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		let _localctx: ErrorCapturingIdentifierContext = new ErrorCapturingIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, FlinkSqlParser.RULE_errorCapturingIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2011;
			this.identifier();
			this.state = 2012;
			this.errorCapturingIdentifierExtra();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext {
		let _localctx: ErrorCapturingIdentifierExtraContext = new ErrorCapturingIdentifierExtraContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, FlinkSqlParser.RULE_errorCapturingIdentifierExtra);
		let _la: number;
		try {
			this.state = 2021;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_MINUS:
				_localctx = new ErrorIdentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2016;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2014;
					this.match(FlinkSqlParser.KW_MINUS);
					this.state = 2015;
					this.identifier();
					}
					}
					this.state = 2018;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSqlParser.KW_MINUS);
				}
				break;
			case FlinkSqlParser.KW_AS:
			case FlinkSqlParser.LR_BRACKET:
				_localctx = new RealIdentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
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
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, FlinkSqlParser.RULE_identifierList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2023;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 2024;
			this.identifierSeq();
			this.state = 2025;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierSeq(): IdentifierSeqContext {
		let _localctx: IdentifierSeqContext = new IdentifierSeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, FlinkSqlParser.RULE_identifierSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2027;
			this.identifier();
			this.state = 2032;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 2028;
				this.match(FlinkSqlParser.COMMA);
				this.state = 2029;
				this.identifier();
				}
				}
				this.state = 2034;
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, FlinkSqlParser.RULE_identifier);
		try {
			this.state = 2038;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.DIG_LITERAL:
			case FlinkSqlParser.ID_LITERAL:
				_localctx = new UnquotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2035;
				this.unquotedIdentifier();
				}
				break;
			case FlinkSqlParser.STRING_LITERAL:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2036;
				this.quotedIdentifier();
				}
				break;
			case FlinkSqlParser.KW_ADD:
			case FlinkSqlParser.KW_ADMIN:
			case FlinkSqlParser.KW_AFTER:
			case FlinkSqlParser.KW_ANALYZE:
			case FlinkSqlParser.KW_ASC:
			case FlinkSqlParser.KW_BEFORE:
			case FlinkSqlParser.KW_BYTES:
			case FlinkSqlParser.KW_CASCADE:
			case FlinkSqlParser.KW_CATALOG:
			case FlinkSqlParser.KW_CATALOGS:
			case FlinkSqlParser.KW_CENTURY:
			case FlinkSqlParser.KW_CHAIN:
			case FlinkSqlParser.KW_CHANGELOG_MODE:
			case FlinkSqlParser.KW_CHARACTERS:
			case FlinkSqlParser.KW_COMMENT:
			case FlinkSqlParser.KW_COMPACT:
			case FlinkSqlParser.KW_COLUMNS:
			case FlinkSqlParser.KW_CONSTRAINTS:
			case FlinkSqlParser.KW_CONSTRUCTOR:
			case FlinkSqlParser.KW_CUMULATE:
			case FlinkSqlParser.KW_DATA:
			case FlinkSqlParser.KW_DATABASE:
			case FlinkSqlParser.KW_DATABASES:
			case FlinkSqlParser.KW_DAYS:
			case FlinkSqlParser.KW_DECADE:
			case FlinkSqlParser.KW_DEFINED:
			case FlinkSqlParser.KW_DESC:
			case FlinkSqlParser.KW_DESCRIPTOR:
			case FlinkSqlParser.KW_DIV:
			case FlinkSqlParser.KW_ENCODING:
			case FlinkSqlParser.KW_ENFORCED:
			case FlinkSqlParser.KW_ENGINE:
			case FlinkSqlParser.KW_ERROR:
			case FlinkSqlParser.KW_ESTIMATED_COST:
			case FlinkSqlParser.KW_EXCEPTION:
			case FlinkSqlParser.KW_EXCLUDE:
			case FlinkSqlParser.KW_EXCLUDING:
			case FlinkSqlParser.KW_EXTENDED:
			case FlinkSqlParser.KW_FILE:
			case FlinkSqlParser.KW_FINAL:
			case FlinkSqlParser.KW_FIRST:
			case FlinkSqlParser.KW_FOLLOWING:
			case FlinkSqlParser.KW_FORMAT:
			case FlinkSqlParser.KW_FORTRAN:
			case FlinkSqlParser.KW_FOUND:
			case FlinkSqlParser.KW_FRAC_SECOND:
			case FlinkSqlParser.KW_FUNCTIONS:
			case FlinkSqlParser.KW_GENERAL:
			case FlinkSqlParser.KW_GENERATED:
			case FlinkSqlParser.KW_GO:
			case FlinkSqlParser.KW_GOTO:
			case FlinkSqlParser.KW_GRANTED:
			case FlinkSqlParser.KW_HOP:
			case FlinkSqlParser.KW_HOURS:
			case FlinkSqlParser.KW_IF:
			case FlinkSqlParser.KW_IGNORE:
			case FlinkSqlParser.KW_INCREMENT:
			case FlinkSqlParser.KW_INPUT:
			case FlinkSqlParser.KW_INVOKER:
			case FlinkSqlParser.KW_JAR:
			case FlinkSqlParser.KW_JARS:
			case FlinkSqlParser.KW_JAVA:
			case FlinkSqlParser.KW_JSON:
			case FlinkSqlParser.KW_JSON_EXECUTION_PLAN:
			case FlinkSqlParser.KW_KEY:
			case FlinkSqlParser.KW_KEY_MEMBER:
			case FlinkSqlParser.KW_KEY_TYPE:
			case FlinkSqlParser.KW_LABEL:
			case FlinkSqlParser.KW_LAST:
			case FlinkSqlParser.KW_LENGTH:
			case FlinkSqlParser.KW_LEVEL:
			case FlinkSqlParser.KW_LOAD:
			case FlinkSqlParser.KW_MAP:
			case FlinkSqlParser.KW_MICROSECOND:
			case FlinkSqlParser.KW_MILLENNIUM:
			case FlinkSqlParser.KW_MILLISECOND:
			case FlinkSqlParser.KW_MINUTES:
			case FlinkSqlParser.KW_MINVALUE:
			case FlinkSqlParser.KW_MODIFY:
			case FlinkSqlParser.KW_MODULES:
			case FlinkSqlParser.KW_MONTHS:
			case FlinkSqlParser.KW_NANOSECOND:
			case FlinkSqlParser.KW_NULLS:
			case FlinkSqlParser.KW_NUMBER:
			case FlinkSqlParser.KW_OPTION:
			case FlinkSqlParser.KW_OPTIONS:
			case FlinkSqlParser.KW_ORDERING:
			case FlinkSqlParser.KW_OUTPUT:
			case FlinkSqlParser.KW_OVERWRITE:
			case FlinkSqlParser.KW_OVERWRITING:
			case FlinkSqlParser.KW_PARTITIONED:
			case FlinkSqlParser.KW_PARTITIONS:
			case FlinkSqlParser.KW_PASSING:
			case FlinkSqlParser.KW_PAST:
			case FlinkSqlParser.KW_PATH:
			case FlinkSqlParser.KW_PLACING:
			case FlinkSqlParser.KW_PLAN:
			case FlinkSqlParser.KW_PRECEDING:
			case FlinkSqlParser.KW_PRESERVE:
			case FlinkSqlParser.KW_PRIOR:
			case FlinkSqlParser.KW_PRIVILEGES:
			case FlinkSqlParser.KW_PUBLIC:
			case FlinkSqlParser.KW_PYTHON:
			case FlinkSqlParser.KW_PYTHON_FILES:
			case FlinkSqlParser.KW_PYTHON_REQUIREMENTS:
			case FlinkSqlParser.KW_PYTHON_DEPENDENCIES:
			case FlinkSqlParser.KW_PYTHON_JAR:
			case FlinkSqlParser.KW_PYTHON_ARCHIVES:
			case FlinkSqlParser.KW_PYTHON_PARAMETER:
			case FlinkSqlParser.KW_QUARTER:
			case FlinkSqlParser.KW_RAW:
			case FlinkSqlParser.KW_READ:
			case FlinkSqlParser.KW_RELATIVE:
			case FlinkSqlParser.KW_REMOVE:
			case FlinkSqlParser.KW_RENAME:
			case FlinkSqlParser.KW_REPLACE:
			case FlinkSqlParser.KW_RESPECT:
			case FlinkSqlParser.KW_RESTART:
			case FlinkSqlParser.KW_RESTRICT:
			case FlinkSqlParser.KW_ROLE:
			case FlinkSqlParser.KW_ROW_COUNT:
			case FlinkSqlParser.KW_SCALA:
			case FlinkSqlParser.KW_SCALAR:
			case FlinkSqlParser.KW_SCALE:
			case FlinkSqlParser.KW_SCHEMA:
			case FlinkSqlParser.KW_SECONDS:
			case FlinkSqlParser.KW_SECTION:
			case FlinkSqlParser.KW_SECURITY:
			case FlinkSqlParser.KW_SELF:
			case FlinkSqlParser.KW_SERVER:
			case FlinkSqlParser.KW_SERVER_NAME:
			case FlinkSqlParser.KW_SESSION:
			case FlinkSqlParser.KW_SETS:
			case FlinkSqlParser.KW_SIMPLE:
			case FlinkSqlParser.KW_SIZE:
			case FlinkSqlParser.KW_SLIDE:
			case FlinkSqlParser.KW_SOURCE:
			case FlinkSqlParser.KW_SPACE:
			case FlinkSqlParser.KW_STATE:
			case FlinkSqlParser.KW_STATEMENT:
			case FlinkSqlParser.KW_STEP:
			case FlinkSqlParser.KW_STRING:
			case FlinkSqlParser.KW_STRUCTURE:
			case FlinkSqlParser.KW_STYLE:
			case FlinkSqlParser.KW_TABLES:
			case FlinkSqlParser.KW_TEMPORARY:
			case FlinkSqlParser.KW_TIMECOL:
			case FlinkSqlParser.KW_TIMESTAMP_LTZ:
			case FlinkSqlParser.KW_TIMESTAMPADD:
			case FlinkSqlParser.KW_TIMESTAMPDIFF:
			case FlinkSqlParser.KW_TRANSFORM:
			case FlinkSqlParser.KW_TUMBLE:
			case FlinkSqlParser.KW_TYPE:
			case FlinkSqlParser.KW_UNDER:
			case FlinkSqlParser.KW_UNLOAD:
			case FlinkSqlParser.KW_USAGE:
			case FlinkSqlParser.KW_USE:
			case FlinkSqlParser.KW_UTF16:
			case FlinkSqlParser.KW_UTF32:
			case FlinkSqlParser.KW_UTF8:
			case FlinkSqlParser.KW_VERSION:
			case FlinkSqlParser.KW_VIEW:
			case FlinkSqlParser.KW_VIEWS:
			case FlinkSqlParser.KW_VIRTUAL:
			case FlinkSqlParser.KW_WATERMARK:
			case FlinkSqlParser.KW_WATERMARKS:
			case FlinkSqlParser.KW_WEEK:
			case FlinkSqlParser.KW_WORK:
			case FlinkSqlParser.KW_WRAPPER:
			case FlinkSqlParser.KW_YEARS:
			case FlinkSqlParser.KW_ZONE:
				_localctx = new NonReservedKeywordsAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2037;
				this.nonReservedKeywords();
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
	public unquotedIdentifier(): UnquotedIdentifierContext {
		let _localctx: UnquotedIdentifierContext = new UnquotedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, FlinkSqlParser.RULE_unquotedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2040;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.DIG_LITERAL || _la === FlinkSqlParser.ID_LITERAL)) {
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
	public quotedIdentifier(): QuotedIdentifierContext {
		let _localctx: QuotedIdentifierContext = new QuotedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, FlinkSqlParser.RULE_quotedIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2042;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 314, FlinkSqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2044;
			this.match(FlinkSqlParser.KW_WHEN);
			this.state = 2045;
			_localctx._condition = this.expression();
			this.state = 2046;
			this.match(FlinkSqlParser.KW_THEN);
			this.state = 2047;
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
	public uid(): UidContext {
		let _localctx: UidContext = new UidContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, FlinkSqlParser.RULE_uid);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2049;
			this.identifier();
			this.state = 2054;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 238, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 2050;
					this.match(FlinkSqlParser.DOT);
					this.state = 2051;
					this.identifier();
					}
					}
				}
				this.state = 2056;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 238, this._ctx);
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
	public withOption(): WithOptionContext {
		let _localctx: WithOptionContext = new WithOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, FlinkSqlParser.RULE_withOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2057;
			this.match(FlinkSqlParser.KW_WITH);
			this.state = 2058;
			this.tablePropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 320, FlinkSqlParser.RULE_ifNotExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2060;
			this.match(FlinkSqlParser.KW_IF);
			this.state = 2061;
			this.match(FlinkSqlParser.KW_NOT);
			this.state = 2062;
			this.match(FlinkSqlParser.KW_EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 322, FlinkSqlParser.RULE_ifExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2064;
			this.match(FlinkSqlParser.KW_IF);
			this.state = 2065;
			this.match(FlinkSqlParser.KW_EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tablePropertyList(): TablePropertyListContext {
		let _localctx: TablePropertyListContext = new TablePropertyListContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, FlinkSqlParser.RULE_tablePropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2067;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 2068;
			this.tableProperty();
			this.state = 2073;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 2069;
				this.match(FlinkSqlParser.COMMA);
				this.state = 2070;
				this.tableProperty();
				}
				}
				this.state = 2075;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2076;
			this.match(FlinkSqlParser.RR_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableProperty(): TablePropertyContext {
		let _localctx: TablePropertyContext = new TablePropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, FlinkSqlParser.RULE_tableProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2078;
			_localctx._key = this.tablePropertyKey();
			this.state = 2083;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_FALSE || _la === FlinkSqlParser.KW_TRUE || _la === FlinkSqlParser.EQUAL_SYMBOL || ((((_la - 405)) & ~0x1F) === 0 && ((1 << (_la - 405)) & ((1 << (FlinkSqlParser.STRING_LITERAL - 405)) | (1 << (FlinkSqlParser.DIG_LITERAL - 405)) | (1 << (FlinkSqlParser.REAL_LITERAL - 405)))) !== 0)) {
				{
				this.state = 2080;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.EQUAL_SYMBOL) {
					{
					this.state = 2079;
					this.match(FlinkSqlParser.EQUAL_SYMBOL);
					}
				}

				this.state = 2082;
				_localctx._value = this.tablePropertyValue();
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
	public tablePropertyKey(): TablePropertyKeyContext {
		let _localctx: TablePropertyKeyContext = new TablePropertyKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, FlinkSqlParser.RULE_tablePropertyKey);
		try {
			this.state = 2088;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2085;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2086;
				this.dereferenceDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2087;
				this.match(FlinkSqlParser.STRING_LITERAL);
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
	public tablePropertyValue(): TablePropertyValueContext {
		let _localctx: TablePropertyValueContext = new TablePropertyValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, FlinkSqlParser.RULE_tablePropertyValue);
		try {
			this.state = 2094;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.DIG_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2090;
				this.match(FlinkSqlParser.DIG_LITERAL);
				}
				break;
			case FlinkSqlParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2091;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case FlinkSqlParser.KW_FALSE:
			case FlinkSqlParser.KW_TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2092;
				this.booleanLiteral();
				}
				break;
			case FlinkSqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2093;
				this.match(FlinkSqlParser.STRING_LITERAL);
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
	public logicalOperator(): LogicalOperatorContext {
		let _localctx: LogicalOperatorContext = new LogicalOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, FlinkSqlParser.RULE_logicalOperator);
		try {
			this.state = 2102;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_AND:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2096;
				this.match(FlinkSqlParser.KW_AND);
				}
				break;
			case FlinkSqlParser.BIT_AND_OP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2097;
				this.match(FlinkSqlParser.BIT_AND_OP);
				this.state = 2098;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case FlinkSqlParser.KW_OR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2099;
				this.match(FlinkSqlParser.KW_OR);
				}
				break;
			case FlinkSqlParser.BIT_OR_OP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2100;
				this.match(FlinkSqlParser.BIT_OR_OP);
				this.state = 2101;
				this.match(FlinkSqlParser.BIT_OR_OP);
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
		this.enterRule(_localctx, 334, FlinkSqlParser.RULE_comparisonOperator);
		try {
			this.state = 2118;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 245, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2104;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2105;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2106;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2107;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2108;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2109;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 2110;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2111;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2112;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2113;
				this.match(FlinkSqlParser.EXCLAMATION_SYMBOL);
				this.state = 2114;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2115;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2116;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				this.state = 2117;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
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
	public bitOperator(): BitOperatorContext {
		let _localctx: BitOperatorContext = new BitOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, FlinkSqlParser.RULE_bitOperator);
		try {
			this.state = 2127;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.LESS_SYMBOL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2120;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2121;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;
			case FlinkSqlParser.GREATER_SYMBOL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2122;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 2123;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case FlinkSqlParser.BIT_AND_OP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2124;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case FlinkSqlParser.BIT_XOR_OP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2125;
				this.match(FlinkSqlParser.BIT_XOR_OP);
				}
				break;
			case FlinkSqlParser.BIT_OR_OP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2126;
				this.match(FlinkSqlParser.BIT_OR_OP);
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
	public mathOperator(): MathOperatorContext {
		let _localctx: MathOperatorContext = new MathOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, FlinkSqlParser.RULE_mathOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2129;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_DIV || ((((_la - 395)) & ~0x1F) === 0 && ((1 << (_la - 395)) & ((1 << (FlinkSqlParser.ASTERISK_SIGN - 395)) | (1 << (FlinkSqlParser.HYPNEN_SIGN - 395)) | (1 << (FlinkSqlParser.ADD_SIGN - 395)) | (1 << (FlinkSqlParser.PENCENT_SIGN - 395)) | (1 << (FlinkSqlParser.DOUBLE_HYPNEN_SIGN - 395)) | (1 << (FlinkSqlParser.SLASH_SIGN - 395)))) !== 0))) {
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
	public unaryOperator(): UnaryOperatorContext {
		let _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, FlinkSqlParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2131;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_NOT || ((((_la - 376)) & ~0x1F) === 0 && ((1 << (_la - 376)) & ((1 << (FlinkSqlParser.EXCLAMATION_SYMBOL - 376)) | (1 << (FlinkSqlParser.BIT_NOT_OP - 376)) | (1 << (FlinkSqlParser.HYPNEN_SIGN - 376)) | (1 << (FlinkSqlParser.ADD_SIGN - 376)))) !== 0))) {
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
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, FlinkSqlParser.RULE_constant);
		let _la: number;
		try {
			this.state = 2147;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_INTERVAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2133;
				this.timeIntervalExpression();
				}
				break;
			case FlinkSqlParser.KW_MICROSECOND:
			case FlinkSqlParser.KW_MILLISECOND:
			case FlinkSqlParser.KW_QUARTER:
			case FlinkSqlParser.KW_WEEK:
			case FlinkSqlParser.KW_DAY:
			case FlinkSqlParser.KW_HOUR:
			case FlinkSqlParser.KW_MINUTE:
			case FlinkSqlParser.KW_MONTH:
			case FlinkSqlParser.KW_SECOND:
			case FlinkSqlParser.KW_YEAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2134;
				this.timePointLiteral();
				}
				break;
			case FlinkSqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2135;
				this.stringLiteral();
				}
				break;
			case FlinkSqlParser.HYPNEN_SIGN:
			case FlinkSqlParser.DIG_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.HYPNEN_SIGN) {
					{
					this.state = 2136;
					this.match(FlinkSqlParser.HYPNEN_SIGN);
					}
				}

				this.state = 2139;
				this.decimalLiteral();
				}
				break;
			case FlinkSqlParser.KW_FALSE:
			case FlinkSqlParser.KW_TRUE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2140;
				this.booleanLiteral();
				}
				break;
			case FlinkSqlParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2141;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case FlinkSqlParser.BIT_STRING:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2142;
				this.match(FlinkSqlParser.BIT_STRING);
				}
				break;
			case FlinkSqlParser.KW_NOT:
			case FlinkSqlParser.KW_NULL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 2143;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 2146;
				this.match(FlinkSqlParser.KW_NULL);
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
	public timePointLiteral(): TimePointLiteralContext {
		let _localctx: TimePointLiteralContext = new TimePointLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, FlinkSqlParser.RULE_timePointLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2149;
			this.timePointUnit();
			this.state = 2150;
			this.stringLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, FlinkSqlParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2152;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decimalLiteral(): DecimalLiteralContext {
		let _localctx: DecimalLiteralContext = new DecimalLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, FlinkSqlParser.RULE_decimalLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2154;
			this.match(FlinkSqlParser.DIG_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanLiteral(): BooleanLiteralContext {
		let _localctx: BooleanLiteralContext = new BooleanLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, FlinkSqlParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2156;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_FALSE || _la === FlinkSqlParser.KW_TRUE)) {
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
	public setQuantifier(): SetQuantifierContext {
		let _localctx: SetQuantifierContext = new SetQuantifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, FlinkSqlParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2158;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_ALL || _la === FlinkSqlParser.KW_DISTINCT)) {
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
	public timePointUnit(): TimePointUnitContext {
		let _localctx: TimePointUnitContext = new TimePointUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, FlinkSqlParser.RULE_timePointUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2160;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_MICROSECOND || _la === FlinkSqlParser.KW_MILLISECOND || _la === FlinkSqlParser.KW_QUARTER || _la === FlinkSqlParser.KW_WEEK || _la === FlinkSqlParser.KW_DAY || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (FlinkSqlParser.KW_HOUR - 261)) | (1 << (FlinkSqlParser.KW_MINUTE - 261)) | (1 << (FlinkSqlParser.KW_MONTH - 261)))) !== 0) || _la === FlinkSqlParser.KW_SECOND || _la === FlinkSqlParser.KW_YEAR)) {
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
	public timeIntervalUnit(): TimeIntervalUnitContext {
		let _localctx: TimeIntervalUnitContext = new TimeIntervalUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, FlinkSqlParser.RULE_timeIntervalUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2162;
			_la = this._input.LA(1);
			if (!(((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (FlinkSqlParser.KW_CENTURY - 14)) | (1 << (FlinkSqlParser.KW_DAYS - 14)) | (1 << (FlinkSqlParser.KW_DECADE - 14)) | (1 << (FlinkSqlParser.KW_EPOCH - 14)))) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (FlinkSqlParser.KW_HOURS - 58)) | (1 << (FlinkSqlParser.KW_MICROSECOND - 58)) | (1 << (FlinkSqlParser.KW_MILLENNIUM - 58)) | (1 << (FlinkSqlParser.KW_MILLISECOND - 58)) | (1 << (FlinkSqlParser.KW_MINUTES - 58)) | (1 << (FlinkSqlParser.KW_MONTHS - 58)) | (1 << (FlinkSqlParser.KW_NANOSECOND - 58)))) !== 0) || _la === FlinkSqlParser.KW_QUARTER || _la === FlinkSqlParser.KW_SECONDS || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (FlinkSqlParser.KW_WEEK - 171)) | (1 << (FlinkSqlParser.KW_WEEKS - 171)) | (1 << (FlinkSqlParser.KW_YEARS - 171)))) !== 0) || _la === FlinkSqlParser.KW_DAY || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (FlinkSqlParser.KW_HOUR - 261)) | (1 << (FlinkSqlParser.KW_MINUTE - 261)) | (1 << (FlinkSqlParser.KW_MONTH - 261)))) !== 0) || _la === FlinkSqlParser.KW_SECOND || _la === FlinkSqlParser.KW_YEAR)) {
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
	public reservedKeywordsUsedAsFuncParam(): ReservedKeywordsUsedAsFuncParamContext {
		let _localctx: ReservedKeywordsUsedAsFuncParamContext = new ReservedKeywordsUsedAsFuncParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2164;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_ALL || _la === FlinkSqlParser.KW_BOTH || _la === FlinkSqlParser.KW_DISTINCT || _la === FlinkSqlParser.KW_LEADING || _la === FlinkSqlParser.KW_TRAILING || _la === FlinkSqlParser.ASTERISK_SIGN)) {
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
	public reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext {
		let _localctx: ReservedKeywordsUsedAsFuncNameContext = new ReservedKeywordsUsedAsFuncNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2166;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_IF || _la === FlinkSqlParser.KW_MAP || _la === FlinkSqlParser.KW_QUARTER || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (FlinkSqlParser.KW_WEEK - 171)) | (1 << (FlinkSqlParser.KW_ABS - 171)) | (1 << (FlinkSqlParser.KW_ARRAY - 171)) | (1 << (FlinkSqlParser.KW_AVG - 171)) | (1 << (FlinkSqlParser.KW_CAST - 171)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (FlinkSqlParser.KW_CEIL - 203)) | (1 << (FlinkSqlParser.KW_COALESCE - 203)) | (1 << (FlinkSqlParser.KW_COLLECT - 203)) | (1 << (FlinkSqlParser.KW_COUNT - 203)) | (1 << (FlinkSqlParser.KW_DATE - 203)))) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & ((1 << (FlinkSqlParser.KW_GROUPING - 258)) | (1 << (FlinkSqlParser.KW_HOUR - 258)) | (1 << (FlinkSqlParser.KW_LAG - 258)) | (1 << (FlinkSqlParser.KW_LEFT - 258)) | (1 << (FlinkSqlParser.KW_MINUTE - 258)))) !== 0) || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & ((1 << (FlinkSqlParser.KW_MONTH - 292)) | (1 << (FlinkSqlParser.KW_OVERLAY - 292)) | (1 << (FlinkSqlParser.KW_POSITION - 292)) | (1 << (FlinkSqlParser.KW_POWER - 292)) | (1 << (FlinkSqlParser.KW_RANK - 292)) | (1 << (FlinkSqlParser.KW_RIGHT - 292)))) !== 0) || ((((_la - 329)) & ~0x1F) === 0 && ((1 << (_la - 329)) & ((1 << (FlinkSqlParser.KW_SECOND - 329)) | (1 << (FlinkSqlParser.KW_SUBSTRING - 329)) | (1 << (FlinkSqlParser.KW_SUM - 329)) | (1 << (FlinkSqlParser.KW_TIME - 329)) | (1 << (FlinkSqlParser.KW_TIMESTAMP - 329)) | (1 << (FlinkSqlParser.KW_TRUNCATE - 329)) | (1 << (FlinkSqlParser.KW_UPPER - 329)))) !== 0) || _la === FlinkSqlParser.KW_YEAR)) {
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
	public reservedKeywords(): ReservedKeywordsContext {
		let _localctx: ReservedKeywordsContext = new ReservedKeywordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, FlinkSqlParser.RULE_reservedKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2168;
			_la = this._input.LA(1);
			if (!(((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & ((1 << (FlinkSqlParser.KW_ABS - 177)) | (1 << (FlinkSqlParser.KW_ALL - 177)) | (1 << (FlinkSqlParser.KW_ALLOW - 177)) | (1 << (FlinkSqlParser.KW_ALTER - 177)) | (1 << (FlinkSqlParser.KW_AND - 177)) | (1 << (FlinkSqlParser.KW_ANY - 177)) | (1 << (FlinkSqlParser.KW_ARE - 177)) | (1 << (FlinkSqlParser.KW_ARRAY - 177)) | (1 << (FlinkSqlParser.KW_AS - 177)) | (1 << (FlinkSqlParser.KW_ASYMMETRIC - 177)) | (1 << (FlinkSqlParser.KW_AT - 177)) | (1 << (FlinkSqlParser.KW_AVG - 177)) | (1 << (FlinkSqlParser.KW_BEGIN - 177)) | (1 << (FlinkSqlParser.KW_BETWEEN - 177)) | (1 << (FlinkSqlParser.KW_BIGINT - 177)) | (1 << (FlinkSqlParser.KW_BINARY - 177)) | (1 << (FlinkSqlParser.KW_BIT - 177)) | (1 << (FlinkSqlParser.KW_BLOB - 177)) | (1 << (FlinkSqlParser.KW_BOOLEAN - 177)) | (1 << (FlinkSqlParser.KW_BOTH - 177)) | (1 << (FlinkSqlParser.KW_BY - 177)) | (1 << (FlinkSqlParser.KW_CALL - 177)) | (1 << (FlinkSqlParser.KW_CALLED - 177)) | (1 << (FlinkSqlParser.KW_CASCADED - 177)) | (1 << (FlinkSqlParser.KW_CASE - 177)) | (1 << (FlinkSqlParser.KW_CAST - 177)) | (1 << (FlinkSqlParser.KW_CEIL - 177)) | (1 << (FlinkSqlParser.KW_CHAR - 177)) | (1 << (FlinkSqlParser.KW_CHARACTER - 177)) | (1 << (FlinkSqlParser.KW_CHECK - 177)) | (1 << (FlinkSqlParser.KW_CLOB - 177)) | (1 << (FlinkSqlParser.KW_CLOSE - 177)))) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & ((1 << (FlinkSqlParser.KW_COALESCE - 209)) | (1 << (FlinkSqlParser.KW_COLLATE - 209)) | (1 << (FlinkSqlParser.KW_COLLECT - 209)) | (1 << (FlinkSqlParser.KW_COLUMN - 209)) | (1 << (FlinkSqlParser.KW_COMMIT - 209)) | (1 << (FlinkSqlParser.KW_CONNECT - 209)) | (1 << (FlinkSqlParser.KW_CONSTRAINT - 209)) | (1 << (FlinkSqlParser.KW_CONTAINS - 209)) | (1 << (FlinkSqlParser.KW_CONVERT - 209)) | (1 << (FlinkSqlParser.KW_COUNT - 209)) | (1 << (FlinkSqlParser.KW_CREATE - 209)) | (1 << (FlinkSqlParser.KW_CROSS - 209)) | (1 << (FlinkSqlParser.KW_CUBE - 209)) | (1 << (FlinkSqlParser.KW_CURRENT - 209)) | (1 << (FlinkSqlParser.KW_CURSOR - 209)) | (1 << (FlinkSqlParser.KW_CYCLE - 209)) | (1 << (FlinkSqlParser.KW_DATE - 209)) | (1 << (FlinkSqlParser.KW_DATETIME - 209)) | (1 << (FlinkSqlParser.KW_DAY - 209)) | (1 << (FlinkSqlParser.KW_DEC - 209)) | (1 << (FlinkSqlParser.KW_DECIMAL - 209)) | (1 << (FlinkSqlParser.KW_DECLARE - 209)) | (1 << (FlinkSqlParser.KW_DEFAULT - 209)) | (1 << (FlinkSqlParser.KW_DEFINE - 209)) | (1 << (FlinkSqlParser.KW_DELETE - 209)) | (1 << (FlinkSqlParser.KW_DESCRIBE - 209)) | (1 << (FlinkSqlParser.KW_DISTINCT - 209)) | (1 << (FlinkSqlParser.KW_DOUBLE - 209)) | (1 << (FlinkSqlParser.KW_DROP - 209)) | (1 << (FlinkSqlParser.KW_EACH - 209)) | (1 << (FlinkSqlParser.KW_ELSE - 209)) | (1 << (FlinkSqlParser.KW_END - 209)))) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & ((1 << (FlinkSqlParser.KW_EQUALS - 241)) | (1 << (FlinkSqlParser.KW_EXCEPT - 241)) | (1 << (FlinkSqlParser.KW_EXECUTE - 241)) | (1 << (FlinkSqlParser.KW_EXISTS - 241)) | (1 << (FlinkSqlParser.KW_EXPLAIN - 241)) | (1 << (FlinkSqlParser.KW_EXTERNAL - 241)) | (1 << (FlinkSqlParser.KW_EXTRACT - 241)) | (1 << (FlinkSqlParser.KW_FALSE - 241)) | (1 << (FlinkSqlParser.KW_FLOAT - 241)) | (1 << (FlinkSqlParser.KW_FOR - 241)) | (1 << (FlinkSqlParser.KW_FROM - 241)) | (1 << (FlinkSqlParser.KW_FULL - 241)) | (1 << (FlinkSqlParser.KW_FUNCTION - 241)) | (1 << (FlinkSqlParser.KW_GLOBAL - 241)) | (1 << (FlinkSqlParser.KW_GRANT - 241)) | (1 << (FlinkSqlParser.KW_GROUP - 241)) | (1 << (FlinkSqlParser.KW_GROUPING - 241)) | (1 << (FlinkSqlParser.KW_GROUPS - 241)) | (1 << (FlinkSqlParser.KW_HAVING - 241)) | (1 << (FlinkSqlParser.KW_HOUR - 241)) | (1 << (FlinkSqlParser.KW_IMPORT - 241)) | (1 << (FlinkSqlParser.KW_IN - 241)) | (1 << (FlinkSqlParser.KW_INCLUDING - 241)) | (1 << (FlinkSqlParser.KW_INNER - 241)) | (1 << (FlinkSqlParser.KW_INOUT - 241)) | (1 << (FlinkSqlParser.KW_INSERT - 241)) | (1 << (FlinkSqlParser.KW_INT - 241)) | (1 << (FlinkSqlParser.KW_INTEGER - 241)) | (1 << (FlinkSqlParser.KW_INTERSECT - 241)) | (1 << (FlinkSqlParser.KW_INTERVAL - 241)) | (1 << (FlinkSqlParser.KW_INTO - 241)))) !== 0) || ((((_la - 273)) & ~0x1F) === 0 && ((1 << (_la - 273)) & ((1 << (FlinkSqlParser.KW_IS - 273)) | (1 << (FlinkSqlParser.KW_JOIN - 273)) | (1 << (FlinkSqlParser.KW_LAG - 273)) | (1 << (FlinkSqlParser.KW_LANGUAGE - 273)) | (1 << (FlinkSqlParser.KW_LATERAL - 273)) | (1 << (FlinkSqlParser.KW_LEADING - 273)) | (1 << (FlinkSqlParser.KW_LEFT - 273)) | (1 << (FlinkSqlParser.KW_LIKE - 273)) | (1 << (FlinkSqlParser.KW_LIMIT - 273)) | (1 << (FlinkSqlParser.KW_LOCAL - 273)) | (1 << (FlinkSqlParser.KW_MATCH - 273)) | (1 << (FlinkSqlParser.KW_MATCH_RECOGNIZE - 273)) | (1 << (FlinkSqlParser.KW_MEASURES - 273)) | (1 << (FlinkSqlParser.KW_MERGE - 273)) | (1 << (FlinkSqlParser.KW_METADATA - 273)) | (1 << (FlinkSqlParser.KW_MINUS - 273)) | (1 << (FlinkSqlParser.KW_MINUTE - 273)) | (1 << (FlinkSqlParser.KW_MODIFIES - 273)) | (1 << (FlinkSqlParser.KW_MODULE - 273)) | (1 << (FlinkSqlParser.KW_MONTH - 273)) | (1 << (FlinkSqlParser.KW_MULTISET - 273)) | (1 << (FlinkSqlParser.KW_NATURAL - 273)) | (1 << (FlinkSqlParser.KW_NEXT - 273)) | (1 << (FlinkSqlParser.KW_NO - 273)) | (1 << (FlinkSqlParser.KW_NONE - 273)) | (1 << (FlinkSqlParser.KW_NOT - 273)) | (1 << (FlinkSqlParser.KW_NULL - 273)) | (1 << (FlinkSqlParser.KW_NUMERIC - 273)) | (1 << (FlinkSqlParser.KW_OF - 273)) | (1 << (FlinkSqlParser.KW_OFFSET - 273)) | (1 << (FlinkSqlParser.KW_ON - 273)) | (1 << (FlinkSqlParser.KW_ONE - 273)))) !== 0) || ((((_la - 305)) & ~0x1F) === 0 && ((1 << (_la - 305)) & ((1 << (FlinkSqlParser.KW_OR - 305)) | (1 << (FlinkSqlParser.KW_ORDER - 305)) | (1 << (FlinkSqlParser.KW_OUT - 305)) | (1 << (FlinkSqlParser.KW_OUTER - 305)) | (1 << (FlinkSqlParser.KW_OVER - 305)) | (1 << (FlinkSqlParser.KW_OVERLAY - 305)) | (1 << (FlinkSqlParser.KW_PARTITION - 305)) | (1 << (FlinkSqlParser.KW_PATTERN - 305)) | (1 << (FlinkSqlParser.KW_PER - 305)) | (1 << (FlinkSqlParser.KW_PERCENT - 305)) | (1 << (FlinkSqlParser.KW_PERIOD - 305)) | (1 << (FlinkSqlParser.KW_POSITION - 305)) | (1 << (FlinkSqlParser.KW_PRIMARY - 305)) | (1 << (FlinkSqlParser.KW_RANGE - 305)) | (1 << (FlinkSqlParser.KW_RANK - 305)) | (1 << (FlinkSqlParser.KW_RESET - 305)) | (1 << (FlinkSqlParser.KW_REVOKE - 305)) | (1 << (FlinkSqlParser.KW_RIGHT - 305)) | (1 << (FlinkSqlParser.KW_RLIKE - 305)) | (1 << (FlinkSqlParser.KW_ROLLBACK - 305)) | (1 << (FlinkSqlParser.KW_ROLLUP - 305)) | (1 << (FlinkSqlParser.KW_ROW - 305)) | (1 << (FlinkSqlParser.KW_ROWS - 305)) | (1 << (FlinkSqlParser.KW_SECOND - 305)) | (1 << (FlinkSqlParser.KW_SELECT - 305)) | (1 << (FlinkSqlParser.KW_SET - 305)) | (1 << (FlinkSqlParser.KW_SHOW - 305)) | (1 << (FlinkSqlParser.KW_SIMILAR - 305)) | (1 << (FlinkSqlParser.KW_SKIP - 305)) | (1 << (FlinkSqlParser.KW_SMALLINT - 305)) | (1 << (FlinkSqlParser.KW_START - 305)))) !== 0) || ((((_la - 337)) & ~0x1F) === 0 && ((1 << (_la - 337)) & ((1 << (FlinkSqlParser.KW_STATIC - 337)) | (1 << (FlinkSqlParser.KW_SUBSTRING - 337)) | (1 << (FlinkSqlParser.KW_SUM - 337)) | (1 << (FlinkSqlParser.KW_SYSTEM - 337)) | (1 << (FlinkSqlParser.KW_SYSTEM_TIME - 337)) | (1 << (FlinkSqlParser.KW_SYSTEM_USER - 337)) | (1 << (FlinkSqlParser.KW_TABLE - 337)) | (1 << (FlinkSqlParser.KW_TABLESAMPLE - 337)) | (1 << (FlinkSqlParser.KW_THEN - 337)) | (1 << (FlinkSqlParser.KW_TIME - 337)) | (1 << (FlinkSqlParser.KW_TIMESTAMP - 337)) | (1 << (FlinkSqlParser.KW_TINYINT - 337)) | (1 << (FlinkSqlParser.KW_TO - 337)) | (1 << (FlinkSqlParser.KW_TRUE - 337)) | (1 << (FlinkSqlParser.KW_TRUNCATE - 337)) | (1 << (FlinkSqlParser.KW_UNION - 337)) | (1 << (FlinkSqlParser.KW_UNIQUE - 337)) | (1 << (FlinkSqlParser.KW_UNKNOWN - 337)) | (1 << (FlinkSqlParser.KW_UNNEST - 337)) | (1 << (FlinkSqlParser.KW_UPPER - 337)) | (1 << (FlinkSqlParser.KW_UPSERT - 337)) | (1 << (FlinkSqlParser.KW_USER - 337)) | (1 << (FlinkSqlParser.KW_USING - 337)) | (1 << (FlinkSqlParser.KW_VALUE - 337)) | (1 << (FlinkSqlParser.KW_VALUES - 337)) | (1 << (FlinkSqlParser.KW_VARBINARY - 337)) | (1 << (FlinkSqlParser.KW_VARCHAR - 337)) | (1 << (FlinkSqlParser.KW_WHEN - 337)) | (1 << (FlinkSqlParser.KW_WHERE - 337)) | (1 << (FlinkSqlParser.KW_WINDOW - 337)))) !== 0) || ((((_la - 369)) & ~0x1F) === 0 && ((1 << (_la - 369)) & ((1 << (FlinkSqlParser.KW_WITH - 369)) | (1 << (FlinkSqlParser.KW_WITHIN - 369)) | (1 << (FlinkSqlParser.KW_WITHOUT - 369)) | (1 << (FlinkSqlParser.KW_YEAR - 369)))) !== 0))) {
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
	public nonReservedKeywords(): NonReservedKeywordsContext {
		let _localctx: NonReservedKeywordsContext = new NonReservedKeywordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, FlinkSqlParser.RULE_nonReservedKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2170;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSqlParser.KW_ADD) | (1 << FlinkSqlParser.KW_ADMIN) | (1 << FlinkSqlParser.KW_AFTER) | (1 << FlinkSqlParser.KW_ANALYZE) | (1 << FlinkSqlParser.KW_ASC) | (1 << FlinkSqlParser.KW_BEFORE) | (1 << FlinkSqlParser.KW_BYTES) | (1 << FlinkSqlParser.KW_CASCADE) | (1 << FlinkSqlParser.KW_CATALOG) | (1 << FlinkSqlParser.KW_CATALOGS) | (1 << FlinkSqlParser.KW_CENTURY) | (1 << FlinkSqlParser.KW_CHAIN) | (1 << FlinkSqlParser.KW_CHANGELOG_MODE) | (1 << FlinkSqlParser.KW_CHARACTERS) | (1 << FlinkSqlParser.KW_COMMENT) | (1 << FlinkSqlParser.KW_COMPACT) | (1 << FlinkSqlParser.KW_COLUMNS) | (1 << FlinkSqlParser.KW_CONSTRAINTS) | (1 << FlinkSqlParser.KW_CONSTRUCTOR) | (1 << FlinkSqlParser.KW_CUMULATE) | (1 << FlinkSqlParser.KW_DATA) | (1 << FlinkSqlParser.KW_DATABASE) | (1 << FlinkSqlParser.KW_DATABASES) | (1 << FlinkSqlParser.KW_DAYS) | (1 << FlinkSqlParser.KW_DECADE) | (1 << FlinkSqlParser.KW_DEFINED) | (1 << FlinkSqlParser.KW_DESC) | (1 << FlinkSqlParser.KW_DESCRIPTOR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (FlinkSqlParser.KW_DIV - 32)) | (1 << (FlinkSqlParser.KW_ENCODING - 32)) | (1 << (FlinkSqlParser.KW_ENFORCED - 32)) | (1 << (FlinkSqlParser.KW_ENGINE - 32)) | (1 << (FlinkSqlParser.KW_ERROR - 32)) | (1 << (FlinkSqlParser.KW_ESTIMATED_COST - 32)) | (1 << (FlinkSqlParser.KW_EXCEPTION - 32)) | (1 << (FlinkSqlParser.KW_EXCLUDE - 32)) | (1 << (FlinkSqlParser.KW_EXCLUDING - 32)) | (1 << (FlinkSqlParser.KW_EXTENDED - 32)) | (1 << (FlinkSqlParser.KW_FILE - 32)) | (1 << (FlinkSqlParser.KW_FINAL - 32)) | (1 << (FlinkSqlParser.KW_FIRST - 32)) | (1 << (FlinkSqlParser.KW_FOLLOWING - 32)) | (1 << (FlinkSqlParser.KW_FORMAT - 32)) | (1 << (FlinkSqlParser.KW_FORTRAN - 32)) | (1 << (FlinkSqlParser.KW_FOUND - 32)) | (1 << (FlinkSqlParser.KW_FRAC_SECOND - 32)) | (1 << (FlinkSqlParser.KW_FUNCTIONS - 32)) | (1 << (FlinkSqlParser.KW_GENERAL - 32)) | (1 << (FlinkSqlParser.KW_GENERATED - 32)) | (1 << (FlinkSqlParser.KW_GO - 32)) | (1 << (FlinkSqlParser.KW_GOTO - 32)) | (1 << (FlinkSqlParser.KW_GRANTED - 32)) | (1 << (FlinkSqlParser.KW_HOP - 32)) | (1 << (FlinkSqlParser.KW_HOURS - 32)) | (1 << (FlinkSqlParser.KW_IF - 32)) | (1 << (FlinkSqlParser.KW_IGNORE - 32)) | (1 << (FlinkSqlParser.KW_INCREMENT - 32)) | (1 << (FlinkSqlParser.KW_INPUT - 32)) | (1 << (FlinkSqlParser.KW_INVOKER - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (FlinkSqlParser.KW_JAR - 64)) | (1 << (FlinkSqlParser.KW_JARS - 64)) | (1 << (FlinkSqlParser.KW_JAVA - 64)) | (1 << (FlinkSqlParser.KW_JSON - 64)) | (1 << (FlinkSqlParser.KW_JSON_EXECUTION_PLAN - 64)) | (1 << (FlinkSqlParser.KW_KEY - 64)) | (1 << (FlinkSqlParser.KW_KEY_MEMBER - 64)) | (1 << (FlinkSqlParser.KW_KEY_TYPE - 64)) | (1 << (FlinkSqlParser.KW_LABEL - 64)) | (1 << (FlinkSqlParser.KW_LAST - 64)) | (1 << (FlinkSqlParser.KW_LENGTH - 64)) | (1 << (FlinkSqlParser.KW_LEVEL - 64)) | (1 << (FlinkSqlParser.KW_LOAD - 64)) | (1 << (FlinkSqlParser.KW_MAP - 64)) | (1 << (FlinkSqlParser.KW_MICROSECOND - 64)) | (1 << (FlinkSqlParser.KW_MILLENNIUM - 64)) | (1 << (FlinkSqlParser.KW_MILLISECOND - 64)) | (1 << (FlinkSqlParser.KW_MINUTES - 64)) | (1 << (FlinkSqlParser.KW_MINVALUE - 64)) | (1 << (FlinkSqlParser.KW_MODIFY - 64)) | (1 << (FlinkSqlParser.KW_MODULES - 64)) | (1 << (FlinkSqlParser.KW_MONTHS - 64)) | (1 << (FlinkSqlParser.KW_NANOSECOND - 64)) | (1 << (FlinkSqlParser.KW_NULLS - 64)) | (1 << (FlinkSqlParser.KW_NUMBER - 64)) | (1 << (FlinkSqlParser.KW_OPTION - 64)) | (1 << (FlinkSqlParser.KW_OPTIONS - 64)) | (1 << (FlinkSqlParser.KW_ORDERING - 64)) | (1 << (FlinkSqlParser.KW_OUTPUT - 64)) | (1 << (FlinkSqlParser.KW_OVERWRITE - 64)) | (1 << (FlinkSqlParser.KW_OVERWRITING - 64)) | (1 << (FlinkSqlParser.KW_PARTITIONED - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (FlinkSqlParser.KW_PARTITIONS - 96)) | (1 << (FlinkSqlParser.KW_PASSING - 96)) | (1 << (FlinkSqlParser.KW_PAST - 96)) | (1 << (FlinkSqlParser.KW_PATH - 96)) | (1 << (FlinkSqlParser.KW_PLACING - 96)) | (1 << (FlinkSqlParser.KW_PLAN - 96)) | (1 << (FlinkSqlParser.KW_PRECEDING - 96)) | (1 << (FlinkSqlParser.KW_PRESERVE - 96)) | (1 << (FlinkSqlParser.KW_PRIOR - 96)) | (1 << (FlinkSqlParser.KW_PRIVILEGES - 96)) | (1 << (FlinkSqlParser.KW_PUBLIC - 96)) | (1 << (FlinkSqlParser.KW_PYTHON - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_FILES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_REQUIREMENTS - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_DEPENDENCIES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_JAR - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_ARCHIVES - 96)) | (1 << (FlinkSqlParser.KW_PYTHON_PARAMETER - 96)) | (1 << (FlinkSqlParser.KW_QUARTER - 96)) | (1 << (FlinkSqlParser.KW_RAW - 96)) | (1 << (FlinkSqlParser.KW_READ - 96)) | (1 << (FlinkSqlParser.KW_RELATIVE - 96)) | (1 << (FlinkSqlParser.KW_REMOVE - 96)) | (1 << (FlinkSqlParser.KW_RENAME - 96)) | (1 << (FlinkSqlParser.KW_REPLACE - 96)) | (1 << (FlinkSqlParser.KW_RESPECT - 96)) | (1 << (FlinkSqlParser.KW_RESTART - 96)) | (1 << (FlinkSqlParser.KW_RESTRICT - 96)) | (1 << (FlinkSqlParser.KW_ROLE - 96)) | (1 << (FlinkSqlParser.KW_ROW_COUNT - 96)) | (1 << (FlinkSqlParser.KW_SCALA - 96)) | (1 << (FlinkSqlParser.KW_SCALAR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (FlinkSqlParser.KW_SCALE - 128)) | (1 << (FlinkSqlParser.KW_SCHEMA - 128)) | (1 << (FlinkSqlParser.KW_SECONDS - 128)) | (1 << (FlinkSqlParser.KW_SECTION - 128)) | (1 << (FlinkSqlParser.KW_SECURITY - 128)) | (1 << (FlinkSqlParser.KW_SELF - 128)) | (1 << (FlinkSqlParser.KW_SERVER - 128)) | (1 << (FlinkSqlParser.KW_SERVER_NAME - 128)) | (1 << (FlinkSqlParser.KW_SESSION - 128)) | (1 << (FlinkSqlParser.KW_SETS - 128)) | (1 << (FlinkSqlParser.KW_SIMPLE - 128)) | (1 << (FlinkSqlParser.KW_SIZE - 128)) | (1 << (FlinkSqlParser.KW_SLIDE - 128)) | (1 << (FlinkSqlParser.KW_SOURCE - 128)) | (1 << (FlinkSqlParser.KW_SPACE - 128)) | (1 << (FlinkSqlParser.KW_STATE - 128)) | (1 << (FlinkSqlParser.KW_STATEMENT - 128)) | (1 << (FlinkSqlParser.KW_STEP - 128)) | (1 << (FlinkSqlParser.KW_STRING - 128)) | (1 << (FlinkSqlParser.KW_STRUCTURE - 128)) | (1 << (FlinkSqlParser.KW_STYLE - 128)) | (1 << (FlinkSqlParser.KW_TABLES - 128)) | (1 << (FlinkSqlParser.KW_TEMPORARY - 128)) | (1 << (FlinkSqlParser.KW_TIMECOL - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMP_LTZ - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMPADD - 128)) | (1 << (FlinkSqlParser.KW_TIMESTAMPDIFF - 128)) | (1 << (FlinkSqlParser.KW_TRANSFORM - 128)) | (1 << (FlinkSqlParser.KW_TUMBLE - 128)) | (1 << (FlinkSqlParser.KW_TYPE - 128)) | (1 << (FlinkSqlParser.KW_UNDER - 128)) | (1 << (FlinkSqlParser.KW_UNLOAD - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (FlinkSqlParser.KW_USAGE - 160)) | (1 << (FlinkSqlParser.KW_USE - 160)) | (1 << (FlinkSqlParser.KW_UTF16 - 160)) | (1 << (FlinkSqlParser.KW_UTF32 - 160)) | (1 << (FlinkSqlParser.KW_UTF8 - 160)) | (1 << (FlinkSqlParser.KW_VERSION - 160)) | (1 << (FlinkSqlParser.KW_VIEW - 160)) | (1 << (FlinkSqlParser.KW_VIEWS - 160)) | (1 << (FlinkSqlParser.KW_VIRTUAL - 160)) | (1 << (FlinkSqlParser.KW_WATERMARK - 160)) | (1 << (FlinkSqlParser.KW_WATERMARKS - 160)) | (1 << (FlinkSqlParser.KW_WEEK - 160)) | (1 << (FlinkSqlParser.KW_WORK - 160)) | (1 << (FlinkSqlParser.KW_WRAPPER - 160)) | (1 << (FlinkSqlParser.KW_YEARS - 160)) | (1 << (FlinkSqlParser.KW_ZONE - 160)))) !== 0))) {
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
		case 80:
			return this.queryStatement_sempred(_localctx as QueryStatementContext, predIndex);

		case 90:
			return this.tableExpression_sempred(_localctx as TableExpressionContext, predIndex);

		case 132:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 135:
			return this.valueExpression_sempred(_localctx as ValueExpressionContext, predIndex);

		case 136:
			return this.primaryExpression_sempred(_localctx as PrimaryExpressionContext, predIndex);
		}
		return true;
	}
	private queryStatement_sempred(_localctx: QueryStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private tableExpression_sempred(_localctx: TableExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 3);

		case 2:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private booleanExpression_sempred(_localctx: BooleanExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 3);

		case 4:
			return this.precpred(this._ctx, 2);

		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private valueExpression_sempred(_localctx: ValueExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 7);

		case 7:
			return this.precpred(this._ctx, 6);

		case 8:
			return this.precpred(this._ctx, 5);

		case 9:
			return this.precpred(this._ctx, 4);

		case 10:
			return this.precpred(this._ctx, 3);

		case 11:
			return this.precpred(this._ctx, 2);

		case 12:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private primaryExpression_sempred(_localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u019C\u087F\x04" +
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
		"\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04" +
		"\u0179\n\x04\x03\x04\x07\x04\u017C\n\x04\f\x04\x0E\x04\u017F\v\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x05\x05\u018D\n\x05\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\u019F\n\x07\x03\b\x03\b\x05\b\u01A3\n" +
		"\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x05\n\u01AC\n\n\x03\n\x03" +
		"\n\x03\n\x05\n\u01B1\n\n\x03\v\x03\v\x03\v\x07\v\u01B6\n\v\f\v\x0E\v\u01B9" +
		"\v\v\x03\f\x03\f\x03\r\x03\r\x05\r\u01BF\n\r\x03\r\x03\r\x05\r\u01C3\n" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u01CA\n\x0E\f\x0E\x0E" +
		"\x0E\u01CD\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\u01D8\n\x0F\x03\x0F\x05\x0F\u01DB\n\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01E2\n\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01EA\n\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\u01EF\n\x0F\x03\x0F\x05\x0F\u01F2\n\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x05\x10\u01F9\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x12\x03\x12\x05\x12\u0201\n\x12\x03\x13\x03\x13\x05\x13\u0205\n\x13\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x05\x15\u0211\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x05\x15\u0219\n\x15\x03\x15\x03\x15\x05\x15\u021D\n\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x05\x15\u0233\n\x15\x03\x16\x06\x16\u0236\n\x16\r\x16\x0E\x16\u0237\x03" +
		"\x17\x03\x17\x05\x17\u023C\n\x17\x03\x18\x03\x18\x05\x18\u0240\n\x18\x03" +
		"\x18\x03\x18\x05\x18\u0244\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x07\x18\u024B\n\x18\f\x18\x0E\x18\u024E\v\x18\x03\x18\x03\x18\x05\x18" +
		"\u0252\n\x18\x03\x18\x03\x18\x05\x18\u0256\n\x18\x03\x18\x03\x18\x05\x18" +
		"\u025A\n\x18\x03\x18\x03\x18\x05\x18\u025E\n\x18\x03\x18\x05\x18\u0261" +
		"\n\x18\x03\x18\x03\x18\x05\x18\u0265\n\x18\x03\x19\x03\x19\x03\x19\x05" +
		"\x19\u026A\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0270\n\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x05\x1A\u0275\n\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B" +
		"\u027A\n\x1B\x03\x1B\x05\x1B\u027D\n\x1B\x03\x1C\x03\x1C\x05\x1C\u0281" +
		"\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0287\n\x1D\f\x1D\x0E\x1D" +
		"\u028A\v\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0291\n\x1E" +
		"\x03\x1E\x03\x1E\x05\x1E\u0295\n\x1E\x03\x1E\x03\x1E\x05\x1E\u0299\n\x1E" +
		"\x03\x1E\x03\x1E\x05\x1E\u029D\n\x1E\x03\x1E\x03\x1E\x05\x1E\u02A1\n\x1E" +
		"\x03\x1E\x03\x1E\x05\x1E\u02A5\n\x1E\x03\x1E\x03\x1E\x05\x1E\u02A9\n\x1E" +
		"\x03\x1E\x03\x1E\x05\x1E\u02AD\n\x1E\x03\x1E\x03\x1E\x05\x1E\u02B1\n\x1E" +
		"\x05\x1E\u02B3\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03" +
		" \x05 \u02BD\n \x03 \x03 \x03!\x03!\x03!\x03!\x05!\u02C5\n!\x03!\x03!" +
		"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03$\x03$" +
		"\x03$\x03$\x03$\x03$\x03$\x07$\u02DB\n$\f$\x0E$\u02DE\v$\x03$\x03$\x03" +
		"%\x03%\x05%\u02E4\n%\x03%\x03%\x03%\x03%\x05%\u02EA\n%\x03%\x05%\u02ED" +
		"\n%\x03%\x05%\u02F0\n%\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x05" +
		"\'\u02FA\n\'\x03\'\x05\'\u02FD\n\'\x03(\x03(\x03)\x03)\x03)\x03)\x05)" +
		"\u0305\n)\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x05,\u0311" +
		"\n,\x03,\x03,\x03,\x03,\x03,\x03,\x03-\x03-\x03.\x03.\x03.\x03.\x03/\x03" +
		"/\x03/\x03/\x030\x030\x030\x030\x070\u0327\n0\f0\x0E0\u032A\v0\x030\x03" +
		"0\x031\x031\x031\x031\x031\x031\x071\u0334\n1\f1\x0E1\u0337\v1\x031\x03" +
		"1\x051\u033B\n1\x032\x032\x052\u033F\n2\x033\x033\x033\x033\x073\u0345" +
		"\n3\f3\x0E3\u0348\v3\x033\x053\u034B\n3\x034\x034\x035\x035\x035\x035" +
		"\x055\u0353\n5\x036\x036\x036\x036\x036\x037\x037\x037\x057\u035D\n7\x03" +
		"7\x037\x057\u0361\n7\x037\x037\x038\x038\x058\u0367\n8\x038\x038\x058" +
		"\u036B\n8\x038\x038\x058\u036F\n8\x038\x058\u0372\n8\x038\x038\x038\x03" +
		"9\x039\x039\x039\x059\u037B\n9\x039\x039\x059\u037F\n9\x039\x039\x039" +
		"\x039\x039\x059\u0386\n9\x039\x059\u0389\n9\x03:\x03:\x03:\x03:\x03:\x03" +
		":\x07:\u0391\n:\f:\x0E:\u0394\v:\x03;\x03;\x03<\x03<\x03<\x05<\u039B\n" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u03A3\n<\x03=\x03=\x05=\u03A7\n=" +
		"\x03=\x03=\x03=\x03>\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x05" +
		"?\u03B6\n?\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03" +
		"C\x03C\x03C\x03C\x03C\x03C\x05C\u03C9\nC\x03D\x03D\x03D\x03D\x03D\x03" +
		"E\x03E\x03E\x03E\x05E\u03D4\nE\x03E\x03E\x05E\u03D8\nE\x03E\x03E\x03E" +
		"\x03E\x03E\x05E\u03DF\nE\x03F\x03F\x03F\x05F\u03E4\nF\x03F\x03F\x03G\x03" +
		"G\x05G\u03EA\nG\x03G\x03G\x05G\u03EE\nG\x03G\x03G\x03H\x03H\x03H\x05H" +
		"\u03F5\nH\x03H\x03H\x05H\u03F9\nH\x03I\x03I\x05I\u03FD\nI\x03I\x03I\x05" +
		"I\u0401\nI\x03I\x03I\x03J\x03J\x03J\x03J\x05J\u0409\nJ\x03J\x03J\x05J" +
		"\u040D\nJ\x03J\x03J\x03K\x05K\u0412\nK\x03K\x03K\x03K\x03K\x05K\u0418" +
		"\nK\x03L\x03L\x03L\x03L\x05L\u041E\nL\x03L\x05L\u0421\nL\x03L\x03L\x05" +
		"L\u0425\nL\x03M\x03M\x03M\x03N\x03N\x03N\x03N\x07N\u042E\nN\fN\x0EN\u0431" +
		"\vN\x03O\x03O\x03O\x03O\x07O\u0437\nO\fO\x0EO\u043A\vO\x03O\x03O\x03P" +
		"\x03P\x03P\x03P\x03P\x03P\x03P\x06P\u0445\nP\rP\x0EP\u0446\x03P\x03P\x03" +
		"Q\x03Q\x03Q\x03Q\x03Q\x03Q\x06Q\u0451\nQ\rQ\x0EQ\u0452\x03Q\x03Q\x03R" +
		"\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u0462\nR\x03R" +
		"\x05R\u0465\nR\x03R\x03R\x05R\u0469\nR\x03R\x05R\u046C\nR\x05R\u046E\n" +
		"R\x03R\x03R\x03R\x05R\u0473\nR\x03R\x03R\x05R\u0477\nR\x03R\x05R\u047A" +
		"\nR\x07R\u047C\nR\fR\x0ER\u047F\vR\x03S\x03S\x03S\x03S\x07S\u0485\nS\f" +
		"S\x0ES\u0488\vS\x03T\x03T\x03T\x03T\x07T\u048E\nT\fT\x0ET\u0491\vT\x03" +
		"U\x03U\x03U\x03U\x03U\x07U\u0498\nU\fU\x0EU\u049B\vU\x03U\x03U\x05U\u049F" +
		"\nU\x03U\x03U\x03U\x03U\x03U\x03V\x03V\x03W\x03W\x03W\x05W\u04AB\nW\x03" +
		"W\x05W\u04AE\nW\x03W\x05W\u04B1\nW\x03W\x05W\u04B4\nW\x03W\x03W\x03W\x03" +
		"W\x05W\u04BA\nW\x03X\x03X\x05X\u04BE\nX\x03X\x03X\x03X\x03X\x07X\u04C4" +
		"\nX\fX\x0EX\u04C7\vX\x05X\u04C9\nX\x03Y\x03Y\x03Y\x05Y\u04CE\nY\x03Y\x05" +
		"Y\u04D1\nY\x05Y\u04D3\nY\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z" +
		"\x03Z\x03Z\x03Z\x05Z\u04E1\nZ\x03[\x03[\x03[\x03\\\x03\\\x03\\\x03\\\x07" +
		"\\\u04EA\n\\\f\\\x0E\\\u04ED\v\\\x03\\\x03\\\x05\\\u04F1\n\\\x03\\\x03" +
		"\\\x03\\\x03\\\x03\\\x03\\\x05\\\u04F9\n\\\x03\\\x05\\\u04FC\n\\\x03\\" +
		"\x05\\\u04FF\n\\\x03\\\x03\\\x03\\\x05\\\u0504\n\\\x07\\\u0506\n\\\f\\" +
		"\x0E\\\u0509\v\\\x03]\x03]\x05]\u050D\n]\x03^\x05^\u0510\n^\x03^\x03^" +
		"\x05^\u0514\n^\x03^\x05^\u0517\n^\x03^\x05^\u051A\n^\x03^\x03^\x03^\x03" +
		"^\x03^\x03^\x03^\x03^\x07^\u0524\n^\f^\x0E^\u0527\v^\x03^\x03^\x03^\x03" +
		"^\x05^\u052D\n^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u0538" +
		"\n^\x03_\x03_\x03`\x03`\x03`\x03`\x03`\x03`\x03a\x03a\x03b\x03b\x03b\x03" +
		"b\x03b\x03c\x03c\x03c\x03c\x03c\x03d\x03d\x03d\x03d\x03d\x07d\u0553\n" +
		"d\fd\x0Ed\u0556\vd\x03d\x03d\x03e\x03e\x03f\x03f\x03f\x03f\x03f\x03f\x03" +
		"f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x05f\u056B\nf\x03g\x03g\x03" +
		"h\x03h\x03h\x03h\x03h\x03i\x03i\x03i\x03i\x03i\x03i\x03i\x07i\u057B\n" +
		"i\fi\x0Ei\u057E\vi\x03i\x03i\x05i\u0582\ni\x03j\x03j\x03j\x03k\x03k\x03" +
		"k\x03k\x03k\x07k\u058C\nk\fk\x0Ek\u058F\vk\x03l\x03l\x03l\x03l\x03l\x03" +
		"l\x03l\x03l\x07l\u0599\nl\fl\x0El\u059C\vl\x03l\x03l\x03l\x03l\x03l\x03" +
		"l\x03l\x07l\u05A5\nl\fl\x0El\u05A8\vl\x03l\x03l\x03l\x03l\x03l\x03l\x03" +
		"l\x07l\u05B1\nl\fl\x0El\u05B4\vl\x03l\x03l\x05l\u05B8\nl\x03m\x03m\x03" +
		"m\x03n\x03n\x03o\x03o\x03o\x03o\x03o\x03o\x03o\x03p\x03p\x03q\x03q\x03" +
		"r\x03r\x03r\x03s\x03s\x03s\x03s\x07s\u05D1\ns\fs\x0Es\u05D4\vs\x03t\x03" +
		"t\x03t\x03t\x03u\x05u\u05DB\nu\x03u\x03u\x05u\u05DF\nu\x03u\x05u\u05E2" +
		"\nu\x03u\x05u\u05E5\nu\x03u\x03u\x03v\x03v\x03v\x05v\u05EC\nv\x03v\x05" +
		"v\u05EF\nv\x03v\x05v\u05F2\nv\x03v\x05v\u05F5\nv\x03v\x05v\u05F8\nv\x03" +
		"v\x05v\u05FB\nv\x03v\x03v\x03v\x05v\u0600\nv\x03v\x05v\u0603\nv\x03w\x03" +
		"w\x03w\x03w\x03w\x07w\u060A\nw\fw\x0Ew\u060D\vw\x03x\x03x\x05x\u0611\n" +
		"x\x03x\x03x\x05x\u0615\nx\x03y\x03y\x03y\x05y\u061A\ny\x03z\x03z\x03z" +
		"\x03z\x03z\x07z\u0621\nz\fz\x0Ez\u0624\vz\x03{\x03{\x03{\x03{\x03{\x03" +
		"{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x05{\u0636\n{\x03" +
		"|\x03|\x03|\x03|\x07|\u063C\n|\f|\x0E|\u063F\v|\x03}\x03}\x03}\x06}\u0644" +
		"\n}\r}\x0E}\u0645\x03}\x03}\x05}\u064A\n}\x03~\x03~\x05~\u064E\n~\x03" +
		"\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x05\x7F\u0658" +
		"\n\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80" +
		"\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80" +
		"\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x05\x80\u0672" +
		"\n\x80\x03\x81\x03\x81\x03\x81\x03\x81\x07\x81\u0678\n\x81\f\x81\x0E\x81" +
		"\u067B\v\x81\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03" +
		"\x82\x03\x82\x05\x82\u0686\n\x82\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83" +
		"\x03\x84\x03\x84\x03\x84\x03\x85\x03\x85\x03\x86\x03\x86\x03\x86\x03\x86" +
		"\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x05\x86\u069C\n\x86\x05" +
		"\x86\u069E\n\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86" +
		"\x03\x86\x03\x86\x05\x86\u06A9\n\x86\x03\x86\x07\x86\u06AC\n\x86\f\x86" +
		"\x0E\x86\u06AF\v\x86\x03\x87\x05\x87\u06B2\n\x87\x03\x87\x03\x87\x05\x87" +
		"\u06B6\n\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x05\x87\u06BD\n\x87" +
		"\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x07\x87\u06C4\n\x87\f\x87\x0E" +
		"\x87\u06C7\v\x87\x03\x87\x03\x87\x03\x87\x05\x87\u06CC\n\x87\x03\x87\x03" +
		"\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03" +
		"\x87\x05\x87\u06D9\n\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x05\x87" +
		"\u06E0\n\x87\x03\x87\x03\x87\x03\x87\x05\x87\u06E5\n\x87\x03\x87\x03\x87" +
		"\x03\x87\x03\x87\x05\x87\u06EB\n\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03" +
		"\x87\x05\x87\u06F2\n\x87\x05\x87\u06F4\n\x87\x03\x88\x05\x88\u06F7\n\x88" +
		"\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x07\x88" +
		"\u0701\n\x88\f\x88\x0E\x88\u0704\v\x88\x03\x88\x03\x88\x05\x88\u0708\n" +
		"\x88\x03\x88\x05\x88\u070B\n\x88\x03\x88\x03\x88\x03\x88\x03\x88\x05\x88" +
		"\u0711\n\x88\x05\x88\u0713\n\x88\x03\x89\x03\x89\x03\x89\x03\x89\x05\x89" +
		"\u0719\n\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03" +
		"\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03" +
		"\x89\x03\x89\x03\x89\x03\x89\x03\x89\x07\x89\u0730\n\x89\f\x89\x0E\x89" +
		"\u0733\v\x89\x03\x8A\x03\x8A\x03\x8A\x06\x8A\u0738\n\x8A\r\x8A\x0E\x8A" +
		"\u0739\x03\x8A\x03\x8A\x05\x8A\u073E\n\x8A\x03\x8A\x03\x8A\x03\x8A\x03" +
		"\x8A\x03\x8A\x06\x8A\u0745\n\x8A\r\x8A\x0E\x8A\u0746\x03\x8A\x03\x8A\x05" +
		"\x8A\u074B\n\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A" +
		"\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u075B" +
		"\n\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x05\x8A" +
		"\u0764\n\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03" +
		"\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03" +
		"\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u077C\n\x8A\x03\x8A" +
		"\x03\x8A\x03\x8A\x07\x8A\u0781\n\x8A\f\x8A\x0E\x8A\u0784\v\x8A\x05\x8A" +
		"\u0786\n\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03" +
		"\x8A\x05\x8A\u0790\n\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x07\x8A" +
		"\u0797\n\x8A\f\x8A\x0E\x8A\u079A\v\x8A\x03\x8B\x03\x8B\x03\x8B\x05\x8B" +
		"\u079F\n\x8B\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u07A5\n\x8C\x03\x8D" +
		"\x03\x8D\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x05\x8F\u07AD\n\x8F\x03\x90\x03" +
		"\x90\x03\x90\x05\x90\u07B2\n\x90\x03\x91\x03\x91\x05\x91\u07B6\n\x91\x03" +
		"\x92\x03\x92\x03\x92\x06\x92\u07BB\n\x92\r\x92\x0E\x92\u07BC\x03\x93\x03" +
		"\x93\x03\x93\x05\x93\u07C2\n\x93\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
		"\x03\x95\x05\x95\u07CA\n\x95\x03\x95\x03\x95\x05\x95\u07CE\n\x95\x03\x96" +
		"\x05\x96\u07D1\n\x96\x03\x96\x03\x96\x05\x96\u07D5\n\x96\x03\x97\x05\x97" +
		"\u07D8\n\x97\x03\x97\x03\x97\x05\x97\u07DC\n\x97\x03\x98\x03\x98\x03\x98" +
		"\x03\x99\x03\x99\x06\x99\u07E3\n\x99\r\x99\x0E\x99\u07E4\x03\x99\x05\x99" +
		"\u07E8\n\x99\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9B\x03\x9B\x03\x9B\x07" +
		"\x9B\u07F1\n\x9B\f\x9B\x0E\x9B\u07F4\v\x9B\x03\x9C\x03\x9C\x03\x9C\x05" +
		"\x9C\u07F9\n\x9C\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x03\x9F\x03\x9F\x03\x9F" +
		"\x03\x9F\x03\x9F\x03\xA0\x03\xA0\x03\xA0\x07\xA0\u0807\n\xA0\f\xA0\x0E" +
		"\xA0\u080A\v\xA0\x03\xA1\x03\xA1\x03\xA1\x03\xA2\x03\xA2\x03\xA2\x03\xA2" +
		"\x03\xA3\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x03\xA4\x03\xA4\x07\xA4\u081A" +
		"\n\xA4\f\xA4\x0E\xA4\u081D\v\xA4\x03\xA4\x03\xA4\x03\xA5\x03\xA5\x05\xA5" +
		"\u0823\n\xA5\x03\xA5\x05\xA5\u0826\n\xA5\x03\xA6\x03\xA6\x03\xA6\x05\xA6" +
		"\u082B\n\xA6\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x05\xA7\u0831\n\xA7\x03\xA8" +
		"\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x05\xA8\u0839\n\xA8\x03\xA9\x03" +
		"\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03" +
		"\xA9\x03\xA9\x03\xA9\x03\xA9\x05\xA9\u0849\n\xA9\x03\xAA\x03\xAA\x03\xAA" +
		"\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x05\xAA\u0852\n\xAA\x03\xAB\x03\xAB\x03" +
		"\xAC\x03\xAC\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x05\xAD\u085C\n\xAD\x03\xAD" +
		"\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x05\xAD\u0863\n\xAD\x03\xAD\x05\xAD\u0866" +
		"\n\xAD\x03\xAE\x03\xAE\x03\xAE\x03\xAF\x03\xAF\x03\xB0\x03\xB0\x03\xB1" +
		"\x03\xB1\x03\xB2\x03\xB2\x03\xB3\x03\xB3\x03\xB4\x03\xB4\x03\xB5\x03\xB5" +
		"\x03\xB6\x03\xB6\x03\xB7\x03\xB7\x03\xB8\x03\xB8\x03\xB8\x03\u0808\x02" +
		"\x07\xA2\xB6\u010A\u0110\u0112\xB9\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
		"\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02" +
		"\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02" +
		"\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02" +
		"\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02" +
		"\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02" +
		"\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02" +
		"\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104" +
		"\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112" +
		"\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120" +
		"\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E" +
		"\x02\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C" +
		"\x02\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A" +
		"\x02\u014C\x02\u014E\x02\u0150\x02\u0152\x02";
	private static readonly _serializedATNSegment1: string =
		"\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C\x02\u015E\x02\u0160\x02" +
		"\u0162\x02\u0164\x02\u0166\x02\u0168\x02\u016A\x02\u016C\x02\u016E\x02" +
		"\x021\x04\x02  \xEC\xEC\x05\x02\x12\x12((FF\x06\x02\x0F\x0F\x1C\x1CCC" +
		"\xA9\xA9\x04\x02\x0E\x0E\x1B\x1B\x04\x02\xFE\xFE\u0109\u0109\x04\x02\xA8" +
		"\xA8\u015A\u015A\x04\x02\x06\x06xx\x03\x02nr\x05\x02\xC5\xC5\xE3\xE3\u012D" +
		"\u012D\r\x02\f\f\x94\x94\x9A\x9A\xC1\xC2\xCE\xCE\xE4\xE4\u010E\u010F\u0151" +
		"\u0151\u015D\u015D\u015F\u015F\u016E\u016F\x04\x02\u0173\u0173\u0175\u0175" +
		"\x06\x02\xE6\xE7\xEE\xEE\xFC\xFC\u012E\u012E\x04\x02\xBA\xBA\u0127\u0127" +
		"\x04\x02++\u010A\u010A\x05\x02\x17\x17bb\xB4\xB4\x05\x02++``\u010A\u010A" +
		"\x05\x0277\\\\\xAC\xAC\x05\x02DDmm\x80\x80\x04\x02\r\r}}\x04\x02__\u0112" +
		"\u0112\x05\x02\xF5\xF5\u0110\u0110\u0164\u0164\x06\x02\xFF\xFF\u010B\u010B" +
		"\u0119\u0119\u0145\u0145\x05\x02\x19\x19;;\x9E\x9E\x07\x02\x1A\x1A\x8D" +
		"\x8E\x93\x93\x99\x99\u0130\u0130\x04\x02\xDF\xDF\u0148\u0148\x05\x02;" +
		";\x8A\x8A\x9E\x9E\x04\x02\n\n  \x04\x02//KK\x06\x02\xFB\xFB\u012D\u012D" +
		"\u0162\u0162\u0166\u0166\x04\x02\xBC\xBC\u0156\u0156\x04\x02\xB4\xB4\xB8" +
		"\xB8\x04\x02\u017B\u017B\u018F\u0190\x06\x02\"\"\u018D\u018D\u0191\u0191" +
		"\u0194\u0194\x04\x02\u018F\u0190\u0192\u0192\x03\x02\u018F\u0190\x03\x02" +
		"\u0198\u0199\x04\x02\u0198\u0198\u019B\u019B\x06\x02\"\"\u018D\u018D\u018F" +
		"\u0191\u0193\u0194\x05\x02\u012C\u012C\u017A\u017B\u018F\u0190\x04\x02" +
		"\xFB\xFB\u0162\u0162\x04\x02\xB4\xB4\xED\xED\f\x02PPRRtt\xAD\xAD\xE5\xE5" +
		"\u0107\u0107\u0123\u0123\u0126\u0126\u014B\u014B\u0176\u0176\x12\x02\x10" +
		"\x10\x1D\x1E&&<<PSWXtt\x84\x84\xAD\xAE\xB1\xB1\xE5\xE5\u0107\u0107\u0123" +
		"\u0123\u0126\u0126\u014B\u014B\u0176\u0176\b\x02\xB4\xB4\xC6\xC6\xED\xED" +
		"\u0118\u0118\u0161\u0161\u018D\u018D\x1E\x02==OOtt\xAD\xAD\xB3\xB3\xBA" +
		"\xBA\xBE\xBE\xCC\xCD\xD3\xD3\xD5\xD5\xDC\xDC\xE3\xE3\u0104\u0104\u0107" +
		"\u0107\u0115\u0115\u0119\u0119\u0123\u0123\u0126\u0126\u0138\u0138\u013E" +
		"\u013F\u0142\u0142\u0145\u0145\u014B\u014B\u0154\u0155\u015D\u015E\u0163" +
		"\u0163\u0168\u0168\u0176\u0176\x07\x02\xB3\xF3\xF5\u013E\u0140\u0155\u0157" +
		"\u0160\u0162\u0176\x05\x02\x06%\'\xAD\xAF\xB2\x02\u0937\x02\u0170\x03" +
		"\x02\x02\x02\x04\u0173\x03\x02\x02\x02\x06\u017D\x03\x02\x02\x02\b\u018C" +
		"\x03\x02\x02\x02\n\u018E\x03\x02\x02\x02\f\u019E\x03\x02\x02\x02\x0E\u01A2" +
		"\x03\x02\x02\x02\x10\u01A4\x03\x02\x02\x02\x12\u01A7\x03\x02\x02\x02\x14" +
		"\u01B2\x03\x02\x02\x02\x16\u01BA\x03\x02\x02\x02\x18\u01C2\x03\x02\x02" +
		"\x02\x1A\u01C4\x03\x02\x02\x02\x1C\u01F1\x03\x02\x02\x02\x1E\u01F3\x03" +
		"\x02\x02\x02 \u01FA\x03\x02\x02\x02\"\u01FE\x03\x02\x02\x02$\u0202\x03" +
		"\x02\x02\x02&\u0206\x03\x02\x02\x02(\u0232\x03\x02\x02\x02*\u0235\x03" +
		"\x02\x02\x02,\u023B\x03\x02\x02\x02.\u023D\x03\x02\x02\x020\u0266\x03" +
		"\x02\x02\x022\u0274\x03\x02\x02\x024\u0276\x03\x02\x02\x026\u0280\x03" +
		"\x02\x02\x028\u0282\x03\x02\x02\x02:\u02B2\x03\x02\x02\x02<\u02B4\x03" +
		"\x02\x02\x02>\u02B8\x03\x02\x02\x02@\u02C0\x03\x02\x02\x02B\u02C8\x03" +
		"\x02\x02\x02D\u02CC\x03\x02\x02\x02F\u02D3\x03\x02\x02\x02H\u02EF\x03" +
		"\x02\x02\x02J\u02F1\x03\x02\x02\x02L\u02F4\x03\x02\x02\x02N\u02FE\x03" +
		"\x02\x02\x02P\u0300\x03\x02\x02\x02R\u0306\x03\x02\x02\x02T\u0308\x03" +
		"\x02\x02\x02V\u0310\x03\x02\x02\x02X\u0318\x03\x02\x02\x02Z\u031A\x03" +
		"\x02\x02\x02\\\u031E\x03\x02\x02\x02^\u0322\x03\x02\x02\x02`\u033A\x03" +
		"\x02\x02\x02b\u033E\x03\x02\x02\x02d\u0340\x03\x02\x02\x02f\u034C\x03" +
		"\x02\x02\x02h\u0352\x03\x02\x02\x02j\u0354\x03\x02\x02\x02l\u0359\x03" +
		"\x02\x02\x02n\u0364\x03\x02\x02\x02p\u0376\x03\x02\x02\x02r\u038A\x03" +
		"\x02\x02\x02t\u0395\x03\x02\x02\x02v\u0397\x03\x02\x02\x02x\u03A4\x03" +
		"\x02\x02\x02z\u03AB\x03\x02\x02\x02|\u03AE\x03\x02\x02\x02~\u03B7\x03" +
		"\x02\x02\x02\x80\u03BB\x03\x02\x02\x02\x82\u03BF\x03\x02\x02\x02\x84\u03C2" +
		"\x03\x02\x02\x02\x86\u03CA\x03\x02\x02\x02\x88\u03CF\x03\x02\x02\x02\x8A" +
		"\u03E0\x03\x02\x02\x02\x8C\u03E7\x03\x02\x02\x02\x8E\u03F1\x03\x02\x02" +
		"\x02\x90\u03FA\x03\x02\x02\x02\x92\u0404\x03\x02\x02\x02\x94\u0417\x03" +
		"\x02\x02\x02\x96\u0419\x03\x02\x02\x02\x98\u0426\x03\x02\x02\x02\x9A\u0429" +
		"\x03\x02\x02\x02\x9C\u0432\x03\x02\x02\x02\x9E\u043D\x03\x02\x02\x02\xA0" +
		"\u044A\x03\x02\x02\x02\xA2\u046D\x03\x02\x02\x02\xA4\u0480\x03\x02\x02" +
		"\x02\xA6\u0489\x03\x02\x02\x02\xA8\u0492\x03\x02\x02\x02\xAA\u04A5\x03" +
		"\x02\x02\x02\xAC\u04B9\x03\x02\x02\x02\xAE\u04BB\x03\x02\x02\x02\xB0\u04D2" +
		"\x03\x02\x02\x02\xB2\u04E0\x03\x02\x02\x02\xB4\u04E2\x03\x02\x02\x02\xB6" +
		"\u04F0\x03\x02\x02\x02\xB8\u050A\x03\x02\x02\x02\xBA\u0537\x03\x02\x02" +
		"\x02\xBC\u0539\x03\x02\x02\x02\xBE\u053B\x03\x02\x02\x02\xC0\u0541\x03" +
		"\x02\x02\x02\xC2\u0543\x03\x02\x02\x02\xC4\u0548\x03\x02\x02\x02\xC6\u054D" +
		"\x03\x02\x02\x02\xC8\u0559\x03\x02\x02\x02\xCA\u056A\x03\x02\x02\x02\xCC" +
		"\u056C\x03\x02\x02\x02\xCE\u056E\x03\x02\x02\x02\xD0\u0581\x03\x02\x02" +
		"\x02\xD2\u0583\x03\x02\x02\x02\xD4\u0586\x03\x02\x02\x02\xD6\u05B7\x03" +
		"\x02\x02\x02\xD8\u05B9\x03\x02\x02\x02\xDA\u05BC\x03\x02\x02\x02\xDC\u05BE" +
		"\x03\x02\x02\x02\xDE\u05C5\x03\x02\x02\x02\xE0\u05C7\x03\x02\x02\x02\xE2" +
		"\u05C9\x03\x02\x02\x02\xE4\u05CC\x03\x02\x02\x02\xE6\u05D5\x03\x02\x02" +
		"\x02\xE8\u05DA\x03\x02\x02\x02\xEA\u05E8\x03\x02\x02\x02\xEC\u0604\x03" +
		"\x02\x02\x02\xEE\u060E\x03\x02\x02\x02\xF0\u0616\x03\x02\x02\x02\xF2\u061B" +
		"\x03\x02\x02\x02\xF4\u0635\x03\x02\x02\x02\xF6\u0637\x03\x02\x02\x02\xF8" +
		"\u0640\x03\x02\x02\x02\xFA\u064B\x03\x02\x02\x02\xFC\u0657\x03\x02\x02" +
		"\x02\xFE\u0671\x03\x02\x02\x02\u0100\u0673\x03\x02\x02\x02\u0102\u0685" +
		"\x03\x02\x02\x02\u0104\u0687\x03\x02\x02\x02\u0106\u068C\x03\x02\x02\x02" +
		"\u0108\u068F\x03\x02\x02\x02\u010A\u069D\x03\x02\x02\x02\u010C\u06F3\x03" +
		"\x02\x02\x02\u010E\u0712\x03\x02\x02\x02\u0110\u0718\x03\x02\x02\x02\u0112" +
		"\u078F\x03\x02\x02\x02\u0114\u079E\x03\x02\x02\x02\u0116\u07A4\x03\x02" +
		"\x02\x02\u0118\u07A6\x03\x02\x02\x02\u011A\u07A8\x03\x02\x02\x02\u011C" +
		"\u07AC\x03\x02\x02\x02\u011E\u07AE\x03\x02\x02\x02\u0120\u07B3\x03\x02" +
		"\x02\x02\u0122\u07BA\x03\x02\x02\x02\u0124\u07BE\x03\x02\x02\x02\u0126" +
		"\u07C3\x03\x02\x02\x02\u0128\u07CD\x03\x02\x02\x02\u012A\u07D0\x03\x02" +
		"\x02\x02\u012C\u07D7\x03\x02\x02\x02\u012E\u07DD\x03\x02\x02\x02\u0130" +
		"\u07E7\x03\x02\x02\x02\u0132\u07E9\x03\x02\x02\x02\u0134\u07ED\x03\x02" +
		"\x02\x02\u0136\u07F8\x03\x02\x02\x02\u0138\u07FA\x03\x02\x02\x02\u013A" +
		"\u07FC\x03\x02\x02\x02\u013C\u07FE\x03\x02\x02\x02\u013E\u0803\x03\x02" +
		"\x02\x02\u0140\u080B\x03\x02\x02\x02\u0142\u080E\x03\x02\x02\x02\u0144" +
		"\u0812\x03\x02\x02\x02\u0146\u0815\x03\x02\x02\x02\u0148\u0820\x03\x02" +
		"\x02\x02\u014A\u082A\x03\x02\x02\x02\u014C\u0830\x03\x02\x02\x02\u014E" +
		"\u0838\x03\x02\x02\x02\u0150\u0848\x03\x02\x02\x02\u0152\u0851\x03\x02" +
		"\x02\x02\u0154\u0853\x03\x02\x02\x02\u0156\u0855\x03\x02\x02\x02\u0158" +
		"\u0865\x03\x02\x02\x02\u015A\u0867\x03\x02\x02\x02\u015C\u086A\x03\x02" +
		"\x02\x02\u015E\u086C\x03\x02\x02\x02\u0160\u086E\x03\x02\x02\x02\u0162" +
		"\u0870\x03\x02\x02\x02\u0164\u0872\x03\x02\x02\x02\u0166\u0874\x03\x02" +
		"\x02\x02\u0168\u0876\x03\x02\x02\x02\u016A\u0878\x03\x02\x02\x02\u016C" +
		"\u087A\x03\x02\x02\x02\u016E\u087C\x03\x02\x02\x02\u0170\u0171\x05\x04" +
		"\x03\x02\u0171\u0172\x07\x02\x02\x03\u0172\x03\x03\x02\x02\x02\u0173\u0174" +
		"\x05\x06\x04\x02\u0174\u0175\x07\x02\x02\x03\u0175\x05\x03\x02\x02\x02" +
		"\u0176\u0178\x05\b\x05\x02\u0177\u0179\x07\u0187\x02\x02\u0178\u0177\x03" +
		"\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017C\x03\x02\x02\x02\u017A" +
		"\u017C\x05\n\x06\x02\u017B\u0176\x03\x02\x02\x02\u017B\u017A\x03\x02\x02" +
		"\x02\u017C\u017F\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017D\u017E" +
		"\x03\x02\x02\x02\u017E\x07\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02" +
		"\u0180\u018D\x05\f\x07\x02\u0181\u018D\x05\x0E\b\x02\u0182\u018D\x05\x10" +
		"\t\x02\u0183\u018D\x05\x12\n\x02\u0184\u018D\x05\x18\r\x02\u0185\u018D" +
		"\x05\x1C\x0F\x02\u0186\u018D\x05\x1E\x10\x02\u0187\u018D\x05 \x11\x02" +
		"\u0188\u018D\x05\"\x12\x02\u0189\u018D\x05$\x13\x02\u018A\u018D\x05&\x14" +
		"\x02\u018B\u018D\x05(\x15\x02\u018C\u0180\x03\x02\x02\x02\u018C\u0181" +
		"\x03\x02\x02\x02\u018C\u0182\x03\x02\x02\x02\u018C\u0183\x03\x02\x02\x02" +
		"\u018C\u0184\x03\x02\x02\x02\u018C\u0185\x03\x02\x02\x02\u018C\u0186\x03" +
		"\x02\x02\x02\u018C\u0187\x03\x02\x02\x02\u018C\u0188\x03\x02\x02\x02\u018C" +
		"\u0189\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018B\x03\x02" +
		"\x02\x02\u018D\t\x03\x02\x02\x02\u018E\u018F\x07\u0187\x02\x02\u018F\v" +
		"\x03\x02\x02\x02\u0190\u019F\x05,\x17\x02\u0191\u019F\x05l7\x02\u0192" +
		"\u019F\x05n8\x02\u0193\u019F\x05p9\x02\u0194\u019F\x05j6\x02\u0195\u019F" +
		"\x05v<\x02\u0196\u019F\x05\x84C\x02\u0197\u019F\x05\x86D\x02\u0198\u019F" +
		"\x05\x88E\x02\u0199\u019F\x05\x8AF\x02\u019A\u019F\x05\x8CG\x02\u019B" +
		"\u019F\x05\x8EH\x02\u019C\u019F\x05\x90I\x02\u019D\u019F\x05\x92J\x02" +
		"\u019E\u0190\x03\x02\x02\x02\u019E\u0191\x03\x02\x02\x02\u019E\u0192\x03" +
		"\x02\x02\x02\u019E\u0193\x03\x02\x02\x02\u019E\u0194\x03\x02\x02\x02\u019E" +
		"\u0195\x03\x02\x02\x02\u019E\u0196\x03\x02\x02\x02\u019E\u0197\x03\x02" +
		"\x02\x02\u019E\u0198\x03\x02\x02\x02\u019E\u0199\x03\x02\x02\x02\u019E" +
		"\u019A\x03\x02\x02\x02\u019E\u019B\x03\x02\x02\x02\u019E\u019C\x03\x02" +
		"\x02\x02\u019E\u019D\x03\x02\x02\x02\u019F\r\x03\x02\x02\x02\u01A0\u01A3" +
		"\x05\xA2R\x02\u01A1\u01A3\x05\x94K\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2" +
		"\u01A1\x03\x02\x02\x02\u01A3\x0F\x03\x02\x02\x02\u01A4\u01A5\t\x02\x02" +
		"\x02\u01A5\u01A6\x05\u013E\xA0\x02\u01A6\x11\x03\x02\x02\x02\u01A7\u01AB" +
		"\x07\xF8\x02\x02\u01A8\u01AC\x05\x14\v\x02\u01A9\u01AA\x07g\x02\x02\u01AA" +
		"\u01AC\x07\xFD\x02\x02\u01AB\u01A8\x03\x02\x02\x02\u01AB\u01A9\x03\x02" +
		"\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01B0\x03\x02\x02\x02\u01AD" +
		"\u01B1\x05\x0E\b\x02\u01AE\u01B1\x05\x96L\x02\u01AF\u01B1\x05\xA0Q\x02" +
		"\u01B0\u01AD\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B0\u01AF\x03" +
		"\x02\x02\x02\u01B1\x13\x03\x02\x02\x02\u01B2\u01B7\x05\x16\f\x02\u01B3" +
		"\u01B4\x07\u0186\x02\x02\u01B4\u01B6\x05\x16\f\x02\u01B5\u01B3\x03\x02" +
		"\x02\x02\u01B6\u01B9\x03\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02\u01B7" +
		"\u01B8\x03\x02\x02\x02\u01B8\x15\x03\x02\x02\x02\u01B9\u01B7\x03\x02\x02" +
		"\x02\u01BA\u01BB\t\x03\x02\x02\u01BB\x17\x03\x02\x02\x02\u01BC\u01BE\x07" +
		"\xA3\x02\x02\u01BD\u01BF\x07\x0E\x02\x02\u01BE\u01BD\x03\x02\x02\x02\u01BE" +
		"\u01BF\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C3\x05\u013E" +
		"\xA0\x02\u01C1\u01C3\x05\x1A\x0E\x02\u01C2\u01BC\x03\x02\x02\x02\u01C2" +
		"\u01C1\x03\x02\x02\x02\u01C3\x19\x03\x02\x02\x02\u01C4\u01C5\x07\xA3\x02" +
		"\x02\u01C5\u01C6\x07V\x02\x02\u01C6\u01CB\x05\u013E\xA0\x02\u01C7\u01C8" +
		"\x07\u0186\x02\x02\u01C8\u01CA\x05\u013E\xA0\x02\u01C9\u01C7\x03\x02\x02" +
		"\x02\u01CA\u01CD\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CC" +
		"\x03\x02\x02\x02\u01CC\x1B\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02" +
		"\u01CE\u01CF\x07\u014E\x02\x02\u01CF\u01F2\t\x04\x02\x02\u01D0\u01D1\x07" +
		"\u014E\x02\x02\u01D1\u01D2\x07\xE0\x02\x02\u01D2\u01F2\t\x05\x02\x02\u01D3" +
		"\u01D4\x07\u014E\x02\x02\u01D4\u01D7\x07\x97\x02\x02\u01D5\u01D6\t\x06" +
		"\x02\x02\u01D6\u01D8\x05\u013E\xA0\x02\u01D7\u01D5\x03\x02\x02\x02\u01D7" +
		"\u01D8\x03\x02\x02\x02\u01D8\u01DA\x03\x02\x02\x02\u01D9\u01DB\x05\u010E" +
		"\x88\x02\u01DA\u01D9\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB" +
		"\u01F2\x03\x02\x02\x02\u01DC\u01DD\x07\u014E\x02\x02\u01DD\u01DE\x07\x16" +
		"\x02\x02\u01DE\u01DF\t\x06\x02\x02\u01DF\u01E1\x05\u013E\xA0\x02\u01E0" +
		"\u01E2\x05\u010E\x88\x02\u01E1\u01E0\x03\x02\x02\x02\u01E1\u01E2\x03\x02" +
		"\x02\x02\u01E2\u01F2\x03\x02\x02\x02\u01E3\u01E4\x07\u014E\x02\x02\u01E4" +
		"\u01E5\x07\xDD\x02\x02\u01E5\u01E6\t\x07\x02\x02\u01E6\u01F2\x05\u013E" +
		"\xA0\x02\u01E7\u01E9\x07\u014E\x02\x02\u01E8\u01EA\x07\u016A\x02\x02\u01E9" +
		"\u01E8\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EB\x03\x02" +
		"\x02\x02\u01EB\u01F2\x075\x02\x02\u01EC\u01EE\x07\u014E\x02\x02\u01ED" +
		"\u01EF\x07\xFF\x02\x02\u01EE\u01ED\x03\x02\x02\x02\u01EE\u01EF\x03\x02" +
		"\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F2\x07V\x02\x02\u01F1\u01CE" +
		"\x03\x02\x02\x02\u01F1\u01D0\x03\x02\x02\x02\u01F1\u01D3\x03\x02\x02\x02" +
		"\u01F1\u01DC\x03\x02\x02\x02\u01F1\u01E3\x03\x02\x02\x02\u01F1\u01E7\x03" +
		"\x02\x02\x02\u01F1\u01EC\x03\x02\x02\x02\u01F2\x1D\x03\x02\x02\x02\u01F3" +
		"\u01F4\x07N\x02\x02\u01F4\u01F5\x07\u0125\x02\x02\u01F5\u01F8\x05\u013E" +
		"\xA0\x02\u01F6\u01F7\x07\u0173\x02\x02\u01F7\u01F9\x05\u0146\xA4\x02\u01F8" +
		"\u01F6\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\x1F\x03\x02\x02" +
		"\x02\u01FA\u01FB\x07\xA1\x02\x02\u01FB\u01FC\x07\u0125\x02\x02\u01FC\u01FD" +
		"\x05\u013E\xA0\x02\u01FD!\x03\x02\x02\x02\u01FE\u0200\x07\u014D\x02\x02" +
		"\u01FF\u0201\x05\u0148\xA5\x02\u0200\u01FF\x03\x02\x02\x02\u0200\u0201" +
		"\x03\x02\x02\x02\u0201#\x03\x02\x02\x02\u0202\u0204\x07\u0143\x02\x02" +
		"\u0203\u0205\x05\u014A\xA6\x02\u0204\u0203\x03\x02\x02\x02\u0204\u0205" +
		"\x03\x02\x02\x02\u0205%\x03\x02\x02\x02\u0206\u0207\t\b\x02\x02\u0207" +
		"\u0208\x07B\x02\x02\u0208\u0209\x05t;\x02\u0209\'\x03\x02\x02\x02\u020A" +
		"\u020B\x07\x06\x02\x02\u020B\u020C\x07B\x02\x02\u020C\u020D\x07\u0173" +
		"\x02\x02\u020D\u0210\x05*\x16\x02\u020E\u020F\x07\xBB\x02\x02\u020F\u0211" +
		"\x05\u013E\xA0\x02\u0210\u020E\x03\x02\x02\x02\u0210\u0211\x03\x02\x02" +
		"\x02\u0211\u0233\x03\x02\x02\x02\u0212\u0213\x07\x06\x02\x02\u0213\u0214" +
		"\x07-\x02\x02\u0214\u0215\x07\u0173\x02\x02\u0215\u0218\x05*\x16\x02\u0216" +
		"\u0217\x07\xBB\x02\x02\u0217\u0219\x05\u013E\xA0\x02\u0218\u0216\x03\x02" +
		"\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\u021C\x03\x02\x02\x02\u021A" +
		"\u021B\x07y\x02\x02\u021B\u021D\x05\u013E\xA0\x02\u021C\u021A\x03\x02" +
		"\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u0233\x03\x02\x02\x02\u021E" +
		"\u021F\x07\x06\x02\x02\u021F\u0220\t\t\x02\x02\u0220\u0221\x07\u0173\x02" +
		"\x02\u0221\u0222\x05*\x16\x02\u0222\u0223\x07y\x02\x02\u0223\u0224\x05" +
		"\u013E\xA0\x02\u0224\u0233\x03\x02\x02\x02\u0225\u0226\x07\x06\x02\x02" +
		"\u0226\u0227\x07s\x02\x02\u0227\u0233\x05*\x16\x02\u0228\u0229\x07\x06" +
		"\x02\x02\u0229\u022A\x07%\x02\x02\u022A\u022B\x07-\x02\x02\u022B\u022C" +
		"\x07\u0173\x02\x02\u022C\u022D\x05*\x16\x02\u022D\u022E\x07y\x02\x02\u022E" +
		"\u022F\x05\u013E\xA0\x02\u022F\u0230\x07G\x02\x02\u0230\u0231\x05\u013E" +
		"\xA0\x02\u0231\u0233\x03\x02\x02\x02\u0232\u020A\x03\x02\x02\x02\u0232" +
		"\u0212\x03\x02\x02\x02\u0232\u021E\x03\x02\x02\x02\u0232\u0225\x03\x02" +
		"\x02\x02\u0232\u0228\x03\x02\x02\x02\u0233)\x03\x02\x02\x02\u0234\u0236" +
		"\x07\u019C\x02\x02\u0235\u0234\x03\x02\x02\x02\u0236\u0237\x03\x02\x02" +
		"\x02\u0237\u0235\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238+\x03" +
		"\x02\x02\x02\u0239\u023C\x05.\x18\x02\u023A\u023C\x050\x19\x02\u023B\u0239" +
		"\x03\x02\x02\x02\u023B\u023A\x03\x02\x02\x02\u023C-\x03\x02\x02\x02\u023D" +
		"\u023F\x07\xDD\x02\x02\u023E\u0240\x07\x98\x02\x02\u023F\u023E\x03\x02" +
		"\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241" +
		"\u0243\x07\u015A\x02\x02\u0242\u0244\x05\u0142\xA2\x02\u0243\u0242\x03" +
		"\x02\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245" +
		"\u0246\x05f4\x02\u0246\u0247\x07\u0182\x02\x02\u0247\u024C\x052\x1A\x02" +
		"\u0248\u0249\x07\u0186\x02\x02\u0249\u024B\x052\x1A\x02\u024A\u0248\x03" +
		"\x02\x02\x02\u024B\u024E\x03\x02\x02\x02\u024C\u024A\x03\x02\x02\x02\u024C" +
		"\u024D\x03\x02\x02\x02\u024D\u0251\x03\x02\x02\x02\u024E\u024C\x03\x02" +
		"\x02\x02\u024F\u0250\x07\u0186\x02\x02\u0250\u0252\x05T+\x02\u0251\u024F" +
		"\x03\x02\x02\x02\u0251\u0252\x03\x02\x02\x02\u0252\u0255\x03\x02\x02\x02" +
		"\u0253\u0254\x07\u0186\x02\x02\u0254\u0256\x05V,\x02\u0255\u0253\x03\x02" +
		"\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u0259\x03\x02\x02\x02\u0257" +
		"\u0258\x07\u0186\x02\x02\u0258\u025A\x05Z.\x02\u0259\u0257\x03\x02\x02" +
		"\x02\u0259\u025A\x03\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025D" +
		"\x07\u0183\x02\x02\u025C\u025E\x05J&\x02\u025D\u025C\x03\x02\x02\x02\u025D" +
		"\u025E\x03\x02\x02\x02\u025E\u0260\x03\x02\x02\x02\u025F\u0261\x05\\/" +
		"\x02\u0260\u025F\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0262" +
		"\x03\x02\x02\x02\u0262\u0264\x05\u0140\xA1\x02\u0263\u0265\x05d3\x02\u0264" +
		"\u0263\x03\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265/\x03\x02\x02" +
		"\x02\u0266\u0267\x07\xDD\x02\x02\u0267\u0269\x07\u015A\x02\x02\u0268\u026A" +
		"\x05\u0142\xA2\x02\u0269\u0268\x03\x02\x02\x02\u0269\u026A\x03\x02\x02" +
		"\x02\u026A\u026B\x03\x02\x02\x02\u026B\u026C\x05f4\x02\u026C\u026F\x05" +
		"\u0140\xA1\x02\u026D\u026E\x07\xBB\x02\x02\u026E\u0270\x05\xA2R\x02\u026F" +
		"\u026D\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02\u02701\x03\x02\x02" +
		"\x02\u0271\u0275\x054\x1B\x02\u0272\u0275\x05L\'\x02\u0273\u0275\x05P" +
		")\x02\u0274\u0271\x03\x02\x02\x02\u0274\u0272\x03\x02\x02\x02\u0274\u0273" +
		"\x03\x02\x02\x02\u02753\x03\x02\x02\x02\u0276\u0277\x056\x1C\x02\u0277" +
		"\u0279\x05:\x1E\x02\u0278\u027A\x05H%\x02\u0279\u0278\x03\x02\x02\x02" +
		"\u0279\u027A\x03\x02\x02\x02\u027A\u027C\x03\x02\x02\x02\u027B\u027D\x05" +
		"J&\x02\u027C\u027B\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D5" +
		"\x03\x02\x02\x02\u027E\u0281\x05\u013E\xA0\x02\u027F\u0281\x05\u0108\x85" +
		"\x02\u0280\u027E\x03\x02\x02\x02\u0280\u027F\x03\x02\x02\x02\u02817\x03" +
		"\x02\x02\x02\u0282\u0283\x07\u0182\x02\x02\u0283\u0288\x056\x1C\x02\u0284" +
		"\u0285\x07\u0186\x02\x02\u0285\u0287\x056\x1C\x02\u0286\u0284\x03\x02" +
		"\x02\x02\u0287\u028A\x03\x02\x02\x02\u0288\u0286\x03\x02\x02\x02\u0288" +
		"\u0289\x03\x02\x02\x02\u0289\u028B\x03\x02\x02\x02\u028A\u0288\x03\x02" +
		"\x02\x02\u028B\u028C\x07\u0183\x02\x02\u028C9\x03\x02\x02\x02\u028D\u02B3" +
		"\t\n\x02\x02\u028E\u0290\t\v\x02\x02\u028F\u0291\x05<\x1F\x02\u0290\u028F" +
		"\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291\u02B3\x03\x02\x02\x02" +
		"\u0292\u0294\x07\u015E\x02\x02\u0293\u0295\x05<\x1F\x02\u0294\u0293\x03" +
		"\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u029C\x03\x02\x02\x02\u0296" +
		"\u0298\t\f\x02\x02\u0297\u0299\x07\u011C\x02\x02\u0298\u0297\x03\x02\x02" +
		"\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029B" +
		"\x07\u015D\x02\x02\u029B\u029D\x07\xB2\x02\x02\u029C\u0296\x03\x02\x02" +
		"\x02\u029C\u029D\x03\x02\x02\x02\u029D\u02B3\x03\x02\x02\x02\u029E\u02A0" +
		"\t\r\x02\x02\u029F\u02A1\x05> \x02\u02A0\u029F\x03\x02\x02\x02\u02A0\u02A1" +
		"\x03\x02\x02\x02\u02A1\u02B3\x03\x02\x02\x02\u02A2\u02A4\t\x0E\x02\x02" +
		"\u02A3\u02A5\x05B\"\x02\u02A4\u02A3\x03\x02\x02\x02\u02A4\u02A5\x03\x02" +
		"\x02\x02\u02A5\u02B3\x03\x02\x02\x02\u02A6\u02A8\x07O\x02\x02\u02A7\u02A9" +
		"\x05D#\x02\u02A8\u02A7\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9" +
		"\u02B3\x03\x02\x02\x02\u02AA\u02AC\x07\u0149\x02\x02\u02AB\u02AD\x05F" +
		"$\x02\u02AC\u02AB\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02\x02\u02AD\u02B3" +
		"\x03\x02\x02\x02\u02AE\u02B0\x07u\x02\x02\u02AF\u02B1\x05@!\x02\u02B0" +
		"\u02AF\x03\x02\x02\x02\u02B0\u02B1\x03\x02\x02\x02\u02B1\u02B3\x03\x02" +
		"\x02\x02\u02B2\u028D\x03\x02\x02\x02\u02B2\u028E\x03\x02\x02\x02\u02B2" +
		"\u0292\x03\x02\x02\x02\u02B2\u029E\x03\x02\x02\x02\u02B2\u02A2\x03\x02" +
		"\x02\x02\u02B2\u02A6\x03\x02\x02\x02\u02B2\u02AA\x03\x02\x02\x02\u02B2" +
		"\u02AE\x03\x02\x02\x02\u02B3;\x03\x02\x02\x02\u02B4\u02B5\x07\u0182\x02" +
		"\x02\u02B5\u02B6\x05\u015E\xB0\x02\u02B6\u02B7\x07\u0183\x02\x02\u02B7" +
		"=\x03\x02\x02\x02\u02B8\u02B9\x07\u0182\x02\x02\u02B9\u02BC\x05\u015E" +
		"\xB0\x02\u02BA\u02BB\x07\u0186\x02\x02\u02BB\u02BD\x05\u015E\xB0\x02\u02BC" +
		"\u02BA\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02BE\x03\x02" +
		"\x02\x02\u02BE\u02BF\x07\u0183\x02\x02\u02BF?\x03\x02\x02\x02\u02C0\u02C1" +
		"\x07\u0182\x02\x02\u02C1\u02C4\x05\u015C\xAF\x02\u02C2\u02C3\x07\u0186" +
		"\x02\x02\u02C3\u02C5\x05\u015C\xAF\x02\u02C4\u02C2\x03\x02\x02\x02\u02C4" +
		"\u02C5\x03\x02\x02\x02\u02C5\u02C6\x03\x02\x02\x02\u02C6\u02C7\x07\u0183" +
		"\x02\x02\u02C7A\x03\x02\x02\x02\u02C8\u02C9\x07\u0179\x02\x02\u02C9\u02CA" +
		"\x05:\x1E\x02\u02CA\u02CB\x07\u0178\x02\x02\u02CBC\x03\x02\x02\x02\u02CC" +
		"\u02CD\x07\u0179\x02\x02\u02CD\u02CE\x05:\x1E\x02\u02CE\u02CF\x07\u0186" +
		"\x02\x02\u02CF\u02D0\x05:\x1E\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D2" +
		"\x07\u0178\x02\x02\u02D2E\x03\x02\x02\x02\u02D3\u02D4\x07\u0179\x02\x02" +
		"\u02D4\u02D5\x056\x1C\x02\u02D5\u02DC\x05:\x1E\x02\u02D6\u02D7\x07\u0186" +
		"\x02\x02\u02D7\u02D8\x056\x1C\x02\u02D8\u02D9\x05:\x1E\x02\u02D9\u02DB" +
		"\x03\x02\x02\x02\u02DA\u02D6\x03\x02\x02\x02\u02DB\u02DE\x03\x02\x02\x02" +
		"\u02DC\u02DA\x03\x02\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD\u02DF\x03" +
		"\x02\x02\x02\u02DE\u02DC\x03\x02\x02\x02\u02DF\u02E0\x07\u0178\x02\x02" +
		"\u02E0G\x03\x02\x02\x02\u02E1\u02E2\x07\xD9\x02\x02\u02E2\u02E4\x05X-" +
		"\x02\u02E3\u02E1\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02E5" +
		"\x03\x02\x02\x02\u02E5\u02E6\x07\u0140\x02\x02\u02E6\u02E9\x07G\x02\x02" +
		"\u02E7\u02E8\x07\u012C\x02\x02\u02E8\u02EA\x07$\x02\x02\u02E9\u02E7\x03" +
		"\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA\u02F0\x03\x02\x02\x02\u02EB" +
		"\u02ED\x07\u012C\x02\x02\u02EC\u02EB\x03\x02\x02\x02\u02EC\u02ED\x03\x02" +
		"\x02\x02\u02ED\u02EE\x03\x02\x02\x02\u02EE\u02F0\x07\u012D\x02\x02\u02EF" +
		"\u02E3\x03\x02\x02\x02\u02EF\u02EC\x03\x02\x02\x02\u02F0I\x03\x02\x02" +
		"\x02\u02F1\u02F2\x07\x14\x02\x02\u02F2\u02F3\x07\u0197\x02\x02\u02F3K" +
		"\x03\x02\x02\x02\u02F4\u02F5\x056\x1C\x02\u02F5\u02F6\x05:\x1E\x02\u02F6" +
		"\u02F9\x07\u0121\x02\x02\u02F7\u02F8\x07\xFE\x02\x02\u02F8\u02FA\x05N" +
		"(\x02\u02F9\u02F7\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02\u02FA\u02FC" +
		"\x03\x02\x02\x02\u02FB\u02FD\x07\xAA\x02\x02\u02FC\u02FB\x03\x02\x02\x02" +
		"\u02FC\u02FD\x03\x02\x02\x02\u02FDM\x03\x02\x02\x02\u02FE\u02FF\x07\u0197" +
		"\x02\x02\u02FFO\x03\x02\x02\x02\u0300\u0301\x056\x1C\x02\u0301\u0302\x07" +
		"\xBB\x02\x02\u0302\u0304\x05R*\x02\u0303\u0305\x05J&\x02\u0304\u0303\x03" +
		"\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305Q\x03\x02\x02\x02\u0306" +
		"\u0307\x05\u0108\x85\x02\u0307S\x03\x02\x02\x02\u0308\u0309\x07\xAB\x02" +
		"\x02\u0309\u030A\x07\xFD\x02\x02\u030A\u030B\x05\u0108\x85\x02\u030B\u030C" +
		"\x07\xBB\x02\x02\u030C\u030D\x05\u0108\x85\x02\u030DU\x03\x02\x02\x02" +
		"\u030E\u030F\x07\xD9\x02\x02\u030F\u0311\x05X-\x02\u0310\u030E\x03\x02" +
		"\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311\u0312\x03\x02\x02\x02\u0312" +
		"\u0313\x07\u0140\x02\x02\u0313\u0314\x07G\x02\x02\u0314\u0315\x058\x1D" +
		"\x02\u0315\u0316\x07\u012C\x02\x02\u0316\u0317\x07$\x02\x02\u0317W\x03" +
		"\x02\x02\x02\u0318\u0319\x05\u0136\x9C\x02\u0319Y\x03\x02\x02\x02\u031A" +
		"\u031B\x07\u013D\x02\x02\u031B\u031C\x07\xFD\x02\x02\u031C\u031D\x07\u0158" +
		"\x02\x02\u031D[\x03\x02\x02\x02\u031E\u031F\x07a\x02\x02\u031F\u0320\x07" +
		"\xC7\x02\x02\u0320\u0321\x05^0\x02\u0321]\x03\x02\x02\x02\u0322\u0323" +
		"\x07\u0182\x02\x02\u0323\u0328\x05`1\x02\u0324\u0325\x07\u0186\x02\x02" +
		"\u0325\u0327\x05`1\x02\u0326\u0324\x03\x02\x02\x02\u0327\u032A\x03\x02" +
		"\x02\x02\u0328\u0326\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329" +
		"\u032B\x03\x02\x02\x02\u032A\u0328\x03\x02\x02\x02\u032B\u032C\x07\u0183" +
		"\x02\x02\u032C_\x03\x02\x02\x02\u032D\u033B\x05\u011C\x8F\x02\u032E\u032F" +
		"\x05\u0136\x9C\x02\u032F\u0330\x07\u0182\x02\x02\u0330\u0335\x05b2\x02" +
		"\u0331\u0332\x07\u0186\x02\x02\u0332\u0334\x05b2\x02\u0333\u0331\x03\x02" +
		"\x02\x02\u0334\u0337\x03\x02\x02\x02\u0335\u0333\x03\x02\x02\x02\u0335" +
		"\u0336\x03\x02\x02\x02\u0336\u0338\x03\x02\x02\x02\u0337\u0335\x03\x02" +
		"\x02\x02\u0338\u0339\x07\u0183\x02\x02\u0339\u033B\x03\x02\x02\x02\u033A" +
		"\u032D\x03\x02\x02\x02\u033A\u032E\x03\x02\x02\x02\u033Ba\x03\x02\x02" +
		"\x02\u033C\u033F\x05\u011C\x8F\x02\u033D\u033F\x05\u0158\xAD\x02\u033E" +
		"\u033C\x03\x02\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\u033E\u033D\x03\x02\x02\x02\u033Fc\x03\x02\x02\x02\u0340\u0341\x07\u011A" +
		"\x02\x02\u0341\u034A\x05f4\x02\u0342\u0346\x07\u0182\x02\x02\u0343\u0345" +
		"\x05h5\x02\u0344\u0343\x03\x02\x02\x02\u0345\u0348\x03\x02\x02\x02\u0346" +
		"\u0344\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347\u0349\x03\x02" +
		"\x02\x02\u0348\u0346\x03\x02\x02\x02\u0349\u034B\x07\u0183\x02\x02\u034A" +
		"\u0342\x03\x02\x02\x02\u034A\u034B\x03\x02\x02\x02\u034Be\x03\x02\x02" +
		"\x02\u034C\u034D\x05\u013E\xA0\x02\u034Dg\x03\x02\x02\x02\u034E\u034F" +
		"\t\x0F\x02\x02\u034F\u0353\t\x10\x02\x02\u0350\u0351\t\x11\x02\x02\u0351" +
		"\u0353\t\x12\x02\x02\u0352\u034E\x03\x02\x02\x02\u0352\u0350\x03\x02\x02" +
		"\x02\u0353i\x03\x02\x02\x02\u0354\u0355\x07\xDD\x02\x02\u0355\u0356\x07" +
		"\x0E\x02\x02\u0356\u0357\x05\u013E\xA0\x02\u0357\u0358\x05\u0140\xA1\x02" +
		"\u0358k\x03\x02\x02\x02\u0359\u035A\x07\xDD\x02\x02\u035A\u035C\x07\x1B" +
		"\x02\x02\u035B\u035D\x05\u0142\xA2\x02\u035C\u035B\x03\x02\x02\x02\u035C" +
		"\u035D\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E\u0360\x05\u013E" +
		"\xA0\x02\u035F\u0361\x05J&\x02\u0360\u035F\x03\x02\x02\x02\u0360\u0361" +
		"\x03\x02\x02\x02\u0361\u0362\x03\x02\x02\x02\u0362\u0363\x05\u0140\xA1" +
		"\x02\u0363m\x03\x02\x02\x02\u0364\u0366\x07\xDD\x02\x02\u0365\u0367\x07" +
		"\x98\x02\x02\u0366\u0365\x03\x02\x02\x02\u0366\u0367\x03\x02\x02\x02\u0367" +
		"\u0368\x03\x02\x02\x02\u0368\u036A\x07\xA8\x02\x02\u0369\u036B\x05\u0142" +
		"\xA2\x02\u036A\u0369\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B" +
		"\u036C\x03\x02\x02\x02\u036C\u036E\x05\u013E\xA0\x02\u036D\u036F\x058" +
		"\x1D\x02\u036E\u036D\x03\x02\x02\x02\u036E\u036F\x03\x02\x02\x02\u036F" +
		"\u0371\x03\x02\x02\x02\u0370\u0372\x05J&\x02\u0371\u0370\x03\x02\x02\x02" +
		"\u0371\u0372\x03\x02\x02\x02\u0372\u0373\x03\x02\x02\x02\u0373\u0374\x07" +
		"\xBB\x02\x02\u0374\u0375\x05\xA2R\x02\u0375o\x03\x02\x02\x02\u0376\u037A" +
		"\x07\xDD\x02\x02\u0377\u037B\x07\x98\x02\x02\u0378\u0379\x07\x98\x02\x02" +
		"\u0379\u037B\x07\u0157\x02\x02\u037A\u0377\x03\x02\x02\x02\u037A\u0378" +
		"\x03\x02\x02\x02\u037A\u037B\x03\x02\x02\x02\u037B\u037C\x03\x02\x02\x02" +
		"\u037C\u037E\x07\u0100\x02\x02\u037D\u037F\x05\u0142\xA2\x02\u037E\u037D" +
		"\x03\x02\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F\u0380\x03\x02\x02\x02" +
		"\u0380\u0381\x05\u013E\xA0\x02\u0381\u0382\x07\xBB\x02\x02\u0382\u0385" +
		"\x05\u0136\x9C\x02\u0383\u0384\x07\u0116\x02\x02\u0384\u0386\t\x13\x02" +
		"\x02\u0385\u0383\x03\x02\x02\x02\u0385\u0386\x03\x02\x02\x02\u0386\u0388" +
		"\x03\x02\x02\x02\u0387\u0389\x05r:\x02\u0388\u0387\x03\x02\x02\x02\u0388" +
		"\u0389\x03\x02\x02\x02\u0389q\x03\x02\x02\x02\u038A\u038B\x07\u016B\x02" +
		"\x02\u038B\u038C\x07B\x02\x02\u038C\u0392\x05t;\x02\u038D\u038E\x07\u0186" +
		"\x02\x02\u038E\u038F\x07B\x02\x02\u038F\u0391\x05t;\x02\u0390\u038D\x03" +
		"\x02\x02\x02\u0391\u0394\x03\x02\x02\x02\u0392\u0390\x03\x02\x02\x02\u0392" +
		"\u0393\x03\x02\x02\x02\u0393s\x03\x02\x02\x02\u0394\u0392\x03\x02\x02" +
		"\x02\u0395\u0396\x07\u0197\x02\x02\u0396u\x03\x02\x02\x02\u0397\u0398" +
		"\x07\xB6\x02\x02\u0398\u039A\x07\u015A\x02\x02\u0399\u039B\x05\u0144\xA3" +
		"\x02\u039A\u0399\x03\x02\x02\x02\u039A\u039B\x03\x02\x02\x02\u039B\u039C" +
		"\x03\x02\x02\x02\u039C\u03A2\x05\u013E\xA0\x02\u039D\u03A3\x05x=\x02\u039E" +
		"\u03A3\x05z>\x02\u039F\u03A3\x05|?\x02\u03A0\u03A3\x05~@\x02\u03A1\u03A3" +
		"\x05\x80A\x02\u03A2\u039D\x03\x02\x02\x02\u03A2\u039E\x03\x02\x02\x02" +
		"\u03A2\u039F\x03\x02\x02\x02\u03A2\u03A0\x03\x02\x02\x02\u03A2\u03A1\x03" +
		"\x02\x02\x02\u03A3w\x03\x02\x02\x02\u03A4\u03A6\x07y\x02\x02\u03A5\u03A7" +
		"\x05\u013E\xA0\x02\u03A6\u03A5\x03\x02\x02\x02\u03A6\u03A7\x03\x02\x02" +
		"\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8\u03A9\x07\u0160\x02\x02\u03A9\u03AA" +
		"\x05\u013E\xA0\x02\u03AAy\x03\x02\x02\x02\u03AB\u03AC\x07\u014D\x02\x02" +
		"\u03AC\u03AD\x05\u0146\xA4\x02\u03AD{\x03\x02\x02\x02\u03AE\u03AF\x07" +
		"\x06\x02\x02\u03AF\u03B0\x07\xD9\x02\x02\u03B0\u03B1\x05X-\x02\u03B1\u03B2" +
		"\x07\u0140\x02\x02\u03B2\u03B3\x07G\x02\x02\u03B3\u03B5\x058\x1D\x02\u03B4" +
		"\u03B6\x05\x82B\x02\u03B5\u03B4\x03\x02\x02\x02\u03B5\u03B6\x03\x02\x02" +
		"\x02\u03B6}\x03\x02\x02\x02\u03B7\u03B8\x07\xEF\x02\x02\u03B8\u03B9\x07" +
		"\xD9\x02\x02\u03B9\u03BA\x05X-\x02\u03BA\x7F\x03\x02\x02\x02\u03BB\u03BC" +
		"\x07\x06\x02\x02\u03BC\u03BD\x07\u0165\x02\x02\u03BD\u03BE\x058\x1D\x02" +
		"\u03BE\x81\x03\x02\x02\x02\u03BF\u03C0\x07\u012C\x02\x02\u03C0\u03C1\x07" +
		"$\x02\x02\u03C1\x83\x03\x02\x02\x02\u03C2\u03C3\x07\xB6\x02\x02\u03C3" +
		"\u03C4\x07\xA8\x02\x02\u03C4\u03C8\x05\u013E\xA0\x02\u03C5\u03C9\x05x" +
		"=\x02\u03C6\u03C7\x07\xBB\x02\x02\u03C7\u03C9\x05\xA2R\x02\u03C8\u03C5" +
		"\x03\x02\x02\x02\u03C8\u03C6\x03\x02\x02\x02\u03C9\x85\x03\x02\x02\x02" +
		"\u03CA\u03CB\x07\xB6\x02\x02\u03CB\u03CC\x07\x1B\x02\x02\u03CC\u03CD\x05" +
		"\u013E\xA0\x02\u03CD\u03CE\x05z>\x02\u03CE\x87\x03\x02\x02\x02\u03CF\u03D3" +
		"\x07\xB6\x02\x02\u03D0\u03D4\x07\x98\x02\x02\u03D1\u03D2\x07\x98\x02\x02" +
		"\u03D2\u03D4\x07\u0157\x02\x02\u03D3\u03D0\x03\x02\x02\x02\u03D3\u03D1" +
		"\x03\x02\x02\x02\u03D3\u03D4\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02" +
		"\u03D5\u03D7\x07\u0100\x02\x02\u03D6\u03D8\x05\u0144\xA3\x02\u03D7\u03D6" +
		"\x03\x02\x02\x02\u03D7\u03D8\x03\x02\x02\x02\u03D8\u03D9\x03\x02\x02\x02" +
		"\u03D9\u03DA\x05\u013E\xA0\x02\u03DA\u03DB\x07\xBB\x02\x02\u03DB\u03DE" +
		"\x05\u0136\x9C\x02\u03DC\u03DD\x07\u0116\x02\x02\u03DD\u03DF\t\x13\x02" +
		"\x02\u03DE\u03DC\x03\x02\x02\x02\u03DE\u03DF\x03\x02\x02\x02\u03DF\x89" +
		"\x03\x02\x02\x02\u03E0\u03E1\x07\xEF\x02\x02\u03E1\u03E3\x07\x0E\x02\x02" +
		"\u03E2\u03E4\x05\u0144\xA3\x02\u03E3\u03E2\x03\x02\x02\x02\u03E3\u03E4" +
		"\x03\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02\u03E5\u03E6\x05\u013E\xA0" +
		"\x02\u03E6\x8B\x03\x02\x02\x02\u03E7\u03E9\x07\xEF\x02\x02\u03E8\u03EA" +
		"\x07\x98\x02\x02\u03E9\u03E8\x03\x02\x02\x02\u03E9\u03EA\x03\x02\x02\x02" +
		"\u03EA\u03EB\x03\x02\x02\x02\u03EB\u03ED\x07\u015A\x02\x02\u03EC\u03EE" +
		"\x05\u0144\xA3\x02\u03ED\u03EC\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02" +
		"\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\u03F0\x05\u013E\xA0\x02\u03F0\x8D" +
		"\x03\x02\x02\x02\u03F1\u03F2\x07\xEF\x02\x02\u03F2\u03F4\x07\x1B\x02\x02" +
		"\u03F3\u03F5\x05\u0144\xA3\x02\u03F4\u03F3\x03\x02\x02\x02\u03F4\u03F5" +
		"\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6\u03F8\x05\u013E\xA0" +
		"\x02\u03F7\u03F9\t\x14\x02\x02\u03F8\u03F7\x03\x02\x02\x02\u03F8\u03F9" +
		"\x03\x02\x02\x02\u03F9\x8F\x03\x02\x02\x02\u03FA\u03FC\x07\xEF\x02\x02" +
		"\u03FB\u03FD\x07\x98\x02\x02\u03FC\u03FB\x03\x02\x02\x02\u03FC\u03FD\x03" +
		"\x02\x02\x02\u03FD\u03FE\x03\x02\x02\x02\u03FE\u0400\x07\xA8\x02\x02\u03FF" +
		"\u0401\x05\u0144\xA3\x02\u0400\u03FF\x03\x02\x02\x02\u0400\u0401\x03\x02" +
		"\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402\u0403\x05\u013E\xA0\x02\u0403" +
		"\x91\x03\x02\x02\x02\u0404\u0408\x07\xEF\x02\x02\u0405\u0409\x07\x98\x02" +
		"\x02\u0406\u0407\x07\x98\x02\x02\u0407\u0409\x07\u0157\x02\x02\u0408\u0405" +
		"\x03\x02\x02\x02\u0408\u0406\x03\x02\x02\x02\u0408\u0409\x03\x02\x02\x02" +
		"\u0409\u040A\x03\x02\x02\x02\u040A\u040C\x07\u0100\x02\x02\u040B\u040D" +
		"\x05\u0144\xA3\x02\u040C\u040B\x03\x02\x02\x02\u040C\u040D\x03\x02\x02" +
		"\x02\u040D\u040E\x03\x02\x02\x02\u040E\u040F\x05\u013E\xA0\x02\u040F\x93" +
		"\x03\x02\x02\x02\u0410\u0412\x07\xF6\x02\x02\u0411\u0410\x03\x02\x02\x02" +
		"\u0411\u0412\x03\x02\x02\x02\u0412\u0413\x03\x02\x02\x02\u0413\u0418\x05" +
		"\x96L\x02\u0414\u0418\x05\x9EP\x02\u0415\u0416\x07\xF6\x02\x02\u0416\u0418" +
		"\x05\xA0Q\x02\u0417\u0411\x03\x02\x02\x02\u0417\u0414\x03\x02\x02\x02" +
		"\u0417\u0415\x03\x02\x02\x02\u0418\x95\x03\x02\x02\x02\u0419\u041A\x07" +
		"\u010D\x02\x02\u041A\u041B\t\x15\x02\x02\u041B\u0424\x05\u013E\xA0\x02" +
		"\u041C\u041E\x05\x98M\x02\u041D\u041C\x03\x02\x02\x02\u041D\u041E\x03" +
		"\x02\x02\x02\u041E\u0420\x03\x02\x02\x02\u041F\u0421\x058\x1D\x02\u0420" +
		"\u041F\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\u0422\x03\x02" +
		"\x02\x02\u0422\u0425\x05\xA2R\x02\u0423\u0425\x05\x9AN\x02\u0424\u041D" +
		"\x03\x02\x02\x02\u0424\u0423\x03\x02\x02\x02\u0425\x97\x03\x02\x02\x02" +
		"\u0426\u0427\x07\u0139\x02\x02\u0427\u0428\x05\u0146\xA4\x02\u0428\x99" +
		"\x03\x02\x02\x02\u0429\u042A\x07\u016D\x02\x02\u042A\u042F\x05\x9CO\x02" +
		"\u042B\u042C\x07\u0186\x02\x02\u042C\u042E\x05\x9CO\x02\u042D\u042B\x03" +
		"\x02\x02\x02\u042E\u0431\x03\x02\x02\x02\u042F\u042D\x03\x02\x02\x02\u042F" +
		"\u0430\x03\x02\x02\x02\u0430\x9B\x03\x02\x02\x02\u0431\u042F\x03\x02\x02" +
		"\x02\u0432\u0433\x07\u0182\x02\x02\u0433\u0438\x05\u0158\xAD\x02\u0434" +
		"\u0435\x07\u0186\x02\x02\u0435\u0437\x05\u0158\xAD\x02\u0436\u0434\x03" +
		"\x02\x02\x02\u0437\u043A\x03\x02\x02\x02\u0438\u0436\x03\x02\x02\x02\u0438" +
		"\u0439\x03\x02\x02\x02\u0439\u043B\x03\x02\x02\x02\u043A\u0438\x03\x02" +
		"\x02\x02\u043B\u043C\x07\u0183\x02\x02\u043C\x9D\x03\x02\x02\x02\u043D" +
		"\u043E\x07\xBF\x02\x02\u043E\u043F\x07\x92\x02\x02\u043F\u0440\x07\u014D" +
		"\x02\x02\u0440\u0444\x07\u0187\x02\x02\u0441\u0442\x05\x96L\x02\u0442" +
		"\u0443\x07\u0187\x02\x02\u0443\u0445\x03\x02\x02\x02\u0444\u0441\x03\x02" +
		"\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446\u0444\x03\x02\x02\x02\u0446" +
		"\u0447\x03\x02\x02\x02\u0447\u0448\x03\x02\x02\x02\u0448\u0449\x07\xF2" +
		"\x02\x02\u0449\x9F\x03\x02\x02\x02\u044A\u044B\x07\x92\x02\x02\u044B\u044C" +
		"\x07\u014D\x02\x02\u044C\u0450\x07\xBF\x02\x02\u044D\u044E\x05\x96L\x02" +
		"\u044E\u044F\x07\u0187\x02\x02\u044F\u0451\x03\x02\x02\x02\u0450\u044D" +
		"\x03\x02\x02\x02\u0451\u0452\x03\x02\x02\x02\u0452\u0450\x03\x02\x02\x02" +
		"\u0452\u0453\x03\x02\x02\x02\u0453\u0454\x03\x02\x02\x02\u0454\u0455\x07" +
		"\xF2\x02\x02\u0455\xA1\x03\x02\x02\x02\u0456\u0457\bR\x01\x02\u0457\u046E" +
		"\x05\xA4S\x02\u0458\u0459\x05\xA6T\x02\u0459\u045A\x05\xA2R\x07\u045A" +
		"\u046E\x03\x02\x02\x02\u045B\u045C\x07\u0182\x02\x02\u045C\u045D\x05\xA2" +
		"R\x02\u045D\u045E\x07\u0183\x02\x02\u045E\u046E\x03\x02\x02\x02\u045F" +
		"\u0461\x05\xAEX\x02\u0460\u0462\x05\xECw\x02\u0461\u0460\x03\x02\x02\x02" +
		"\u0461\u0462\x03\x02\x02\x02\u0462\u0464\x03\x02\x02\x02\u0463\u0465\x05" +
		"\xF0y\x02\u0464\u0463\x03\x02\x02\x02\u0464\u0465\x03\x02\x02\x02\u0465" +
		"\u046E\x03\x02\x02\x02\u0466\u0468\x05\xACW\x02\u0467\u0469\x05\xECw\x02" +
		"\u0468\u0467\x03\x02\x02\x02\u0468\u0469\x03\x02\x02\x02\u0469\u046B\x03" +
		"\x02\x02\x02\u046A\u046C\x05\xF0y\x02\u046B\u046A\x03\x02\x02\x02\u046B" +
		"\u046C\x03\x02\x02\x02\u046C\u046E\x03\x02\x02\x02\u046D\u0456\x03\x02" +
		"\x02\x02\u046D\u0458\x03\x02\x02\x02\u046D\u045B\x03\x02\x02\x02\u046D" +
		"\u045F\x03\x02\x02\x02\u046D\u0466\x03\x02\x02\x02\u046E\u047D\x03\x02" +
		"\x02\x02\u046F\u0470\f\x05\x02\x02\u0470\u0472\t\x16\x02\x02\u0471\u0473" +
		"\x07\xB4\x02\x02\u0472\u0471\x03\x02\x02\x02\u0472\u0473\x03\x02\x02\x02" +
		"\u0473\u0474\x03\x02\x02\x02\u0474\u0476\x05\xA2R\x02\u0475\u0477\x05" +
		"\xECw\x02\u0476\u0475\x03\x02\x02\x02\u0476\u0477\x03\x02\x02\x02\u0477" +
		"\u0479\x03\x02\x02\x02\u0478\u047A\x05\xF0y\x02\u0479\u0478\x03\x02\x02" +
		"\x02\u0479\u047A\x03\x02\x02\x02\u047A\u047C\x03\x02\x02\x02\u047B\u046F" +
		"\x03\x02\x02\x02\u047C\u047F\x03\x02\x02\x02\u047D\u047B\x03\x02\x02\x02" +
		"\u047D\u047E\x03\x02\x02\x02\u047E\xA3\x03\x02\x02\x02\u047F\u047D\x03" +
		"\x02\x02\x02\u0480\u0481\x07\u016D\x02\x02\u0481\u0486\x05\u0108\x85\x02" +
		"\u0482\u0483\x07\u0186\x02\x02\u0483\u0485\x05\u0108\x85\x02\u0484\u0482" +
		"\x03\x02\x02\x02\u0485\u0488\x03\x02\x02\x02\u0486\u0484\x03\x02\x02\x02" +
		"\u0486\u0487\x03\x02\x02\x02\u0487\xA5\x03\x02\x02\x02\u0488\u0486\x03" +
		"\x02\x02\x02\u0489\u048A\x07\u0173\x02\x02\u048A\u048F\x05\xA8U\x02\u048B" +
		"\u048C\x07\u0186\x02\x02\u048C\u048E\x05\xA8U\x02\u048D\u048B\x03\x02" +
		"\x02\x02\u048E\u0491\x03\x02\x02\x02\u048F\u048D\x03\x02\x02\x02\u048F" +
		"\u0490\x03\x02\x02\x02\u0490\xA7\x03\x02\x02\x02\u0491\u048F\x03\x02\x02" +
		"\x02\u0492\u049E\x05\xAAV\x02\u0493\u0494\x07\u0182\x02\x02\u0494\u0499" +
		"\x056\x1C\x02\u0495\u0496\x07\u0186\x02\x02\u0496\u0498\x056\x1C\x02\u0497" +
		"\u0495\x03\x02\x02\x02\u0498\u049B\x03\x02\x02\x02\u0499\u0497\x03\x02" +
		"\x02\x02\u0499\u049A\x03\x02\x02\x02\u049A\u049C\x03\x02\x02\x02\u049B" +
		"\u0499\x03\x02\x02\x02\u049C\u049D\x07\u0183\x02\x02\u049D\u049F\x03\x02" +
		"\x02\x02\u049E\u0493\x03\x02\x02\x02\u049E\u049F\x03\x02\x02\x02\u049F" +
		"\u04A0\x03\x02\x02\x02\u04A0\u04A1\x07\xBB\x02\x02\u04A1\u04A2\x07\u0182" +
		"\x02\x02\u04A2\u04A3\x05\xA2R\x02\u04A3\u04A4\x07\u0183\x02\x02\u04A4" +
		"\xA9\x03\x02\x02\x02\u04A5\u04A6\x05\u0136\x9C\x02\u04A6\xAB\x03\x02\x02" +
		"\x02\u04A7\u04A8\x05\xAEX\x02\u04A8\u04AA\x05\xB4[\x02\u04A9\u04AB\x05" +
		"\xD2j\x02\u04AA\u04A9\x03\x02\x02\x02\u04AA\u04AB\x03\x02\x02\x02\u04AB" +
		"\u04AD\x03\x02\x02\x02\u04AC\u04AE\x05\xD4k\x02\u04AD\u04AC\x03\x02\x02" +
		"\x02\u04AD\u04AE\x03\x02\x02\x02\u04AE\u04B0\x03\x02\x02\x02\u04AF\u04B1" +
		"\x05\xE2r\x02\u04B0\u04AF\x03\x02\x02\x02\u04B0\u04B1\x03\x02\x02\x02" +
		"\u04B1\u04B3\x03\x02\x02\x02\u04B2\u04B4\x05\xE4s\x02\u04B3\u04B2\x03" +
		"\x02\x02\x02\u04B3\u04B4\x03\x02\x02\x02\u04B4\u04BA\x03\x02\x02\x02\u04B5" +
		"\u04B6\x05\xAEX\x02\u04B6\u04B7\x05\xB4[\x02\u04B7\u04B8\x05\xEAv\x02" +
		"\u04B8\u04BA\x03\x02\x02\x02\u04B9\u04A7\x03\x02\x02\x02\u04B9\u04B5\x03" +
		"\x02\x02\x02\u04BA\xAD\x03\x02\x02\x02\u04BB\u04BD\x07\u014C\x02\x02\u04BC" +
		"\u04BE\x05\u0162\xB2\x02\u04BD\u04BC\x03\x02\x02\x02\u04BD\u04BE\x03\x02" +
		"\x02\x02\u04BE\u04C8\x03\x02\x02\x02\u04BF\u04C9\x07\u018D\x02\x02\u04C0" +
		"\u04C5\x05\xB0Y\x02\u04C1\u04C2\x07\u0186\x02\x02\u04C2\u04C4\x05\xB0" +
		"Y\x02\u04C3\u04C1\x03\x02\x02\x02\u04C4\u04C7\x03\x02\x02\x02\u04C5\u04C3" +
		"\x03\x02\x02\x02\u04C5\u04C6\x03\x02\x02\x02\u04C6\u04C9\x03\x02\x02\x02" +
		"\u04C7\u04C5\x03\x02\x02\x02\u04C8\u04BF\x03\x02\x02\x02\u04C8\u04C0\x03" +
		"\x02\x02\x02\u04C9\xAF\x03\x02\x02\x02\u04CA\u04D3\x05\xB2Z\x02\u04CB" +
		"\u04D0\x05\u0108\x85\x02\u04CC\u04CE\x07\xBB\x02\x02\u04CD\u04CC\x03\x02" +
		"\x02\x02\u04CD\u04CE\x03\x02\x02\x02\u04CE\u04CF\x03\x02\x02\x02\u04CF" +
		"\u04D1\x05\u0108\x85\x02\u04D0\u04CD\x03\x02\x02\x02\u04D0\u04D1\x03\x02" +
		"\x02\x02\u04D1\u04D3\x03\x02\x02\x02\u04D2\u04CA\x03\x02\x02\x02\u04D2" +
		"\u04CB\x03\x02\x02\x02\u04D3\xB1\x03\x02\x02\x02\u04D4\u04D5\x05\u0112" +
		"\x8A\x02\u04D5\u04D6\x07\u0137\x02\x02\u04D6\u04D7\x05\xE8u\x02\u04D7" +
		"\u04D8\x07\xBB\x02\x02\u04D8\u04D9\x05\u0136\x9C\x02\u04D9\u04E1\x03\x02" +
		"\x02\x02\u04DA\u04DB\x05\u0112\x8A\x02\u04DB\u04DC\x07\u0137\x02\x02\u04DC" +
		"\u04DD\x05\u012E\x98\x02\u04DD\u04DE\x07\xBB\x02\x02\u04DE\u04DF\x05\u0136" +
		"\x9C\x02\u04DF\u04E1\x03\x02\x02\x02\u04E0\u04D4\x03\x02\x02\x02\u04E0" +
		"\u04DA\x03\x02\x02\x02\u04E1\xB3\x03\x02\x02\x02\u04E2\u04E3\x07\xFE\x02" +
		"\x02\u04E3\u04E4\x05\xB6\\\x02\u04E4\xB5\x03\x02\x02\x02\u04E5\u04E6\b" +
		"\\\x01\x02\u04E6\u04EB\x05\xB8]\x02\u04E7\u04E8\x07\u0186\x02\x02\u04E8" +
		"\u04EA\x05\xB8]\x02\u04E9\u04E7\x03\x02\x02\x02\u04EA\u04ED\x03\x02\x02" +
		"\x02\u04EB\u04E9\x03\x02\x02\x02\u04EB\u04EC\x03\x02\x02\x02\u04EC\u04F1" +
		"\x03\x02\x02\x02\u04ED\u04EB\x03\x02\x02\x02\u04EE\u04F1\x05\xC2b\x02" +
		"\u04EF\u04F1\x05\xC4c\x02\u04F0\u04E5\x03\x02\x02\x02\u04F0\u04EE\x03" +
		"\x02\x02\x02\u04F0\u04EF\x03\x02\x02\x02\u04F1\u0507\x03\x02\x02\x02\u04F2" +
		"\u04F3\f\x05\x02\x02\u04F3\u04F4\x07\xDE\x02\x02\u04F4\u04F5\x07\u0114" +
		"\x02\x02\u04F5\u0506\x05\xB6\\\x06\u04F6\u04F8\f\x06\x02\x02\u04F7\u04F9" +
		"\x07\u0128\x02\x02\u04F8\u04F7\x03\x02\x02\x02\u04F8\u04F9\x03\x02\x02" +
		"\x02\u04F9\u04FB\x03\x02\x02\x02\u04FA\u04FC\t\x17\x02\x02\u04FB\u04FA" +
		"\x03\x02\x02\x02\u04FB\u04FC\x03\x02\x02\x02\u04FC\u04FE\x03\x02\x02\x02" +
		"\u04FD\u04FF\x07\u0136\x02\x02\u04FE\u04FD\x03\x02\x02\x02\u04FE\u04FF" +
		"\x03\x02\x02\x02\u04FF\u0500\x03\x02\x02\x02\u0500\u0501\x07\u0114\x02" +
		"\x02\u0501\u0503\x05\xB6\\\x02\u0502\u0504\x05\xD0i\x02\u0503\u0502\x03" +
		"\x02\x02\x02\u0503\u0504\x03\x02\x02\x02\u0504\u0506\x03\x02\x02\x02\u0505" +
		"\u04F2\x03\x02\x02\x02\u0505\u04F6\x03\x02\x02\x02\u0506\u0509\x03\x02" +
		"\x02\x02\u0507\u0505\x03\x02\x02\x02\u0507\u0508\x03\x02\x02\x02\u0508" +
		"\xB7\x03\x02\x02\x02\u0509\u0507\x03\x02\x02\x02\u050A\u050C\x05\xBA^" +
		"\x02\u050B\u050D\x05\u012C\x97\x02\u050C\u050B\x03\x02\x02\x02\u050C\u050D" +
		"\x03\x02\x02\x02\u050D\xB9\x03\x02\x02\x02\u050E\u0510\x07\u015A\x02\x02" +
		"\u050F\u050E\x03\x02\x02\x02\u050F\u0510\x03\x02\x02\x02\u0510\u0511\x03" +
		"\x02\x02\x02\u0511\u0513\x05\xBC_\x02\u0512\u0514\x05\xBE`\x02\u0513\u0512" +
		"\x03\x02\x02\x02\u0513\u0514\x03\x02\x02\x02\u0514\u0519\x03\x02\x02\x02" +
		"\u0515\u0517\x07\xBB\x02\x02\u0516\u0515\x03\x02\x02\x02\u0516\u0517\x03" +
		"\x02\x02\x02\u0517\u0518\x03\x02\x02\x02\u0518\u051A\x05\u011A\x8E\x02" +
		"\u0519\u0516\x03\x02\x02\x02\u0519\u051A\x03\x02\x02\x02\u051A\u0538\x03" +
		"\x02\x02\x02\u051B\u051C\x07\u0117\x02\x02\u051C\u051D\x07\u015A\x02\x02" +
		"\u051D\u051E\x07\u0182\x02\x02\u051E\u051F\x05\u0114\x8B\x02\u051F\u0520" +
		"\x07\u0182\x02\x02\u0520\u0525\x05\u0116\x8C\x02\u0521\u0522\x07\u0186" +
		"\x02\x02\u0522\u0524\x05\u0116\x8C\x02\u0523\u0521\x03\x02\x02\x02\u0524" +
		"\u0527\x03\x02\x02\x02\u0525\u0523\x03\x02\x02\x02\u0525\u0526\x03\x02" +
		"\x02\x02\u0526\u0528\x03\x02\x02\x02\u0527\u0525\x03\x02\x02\x02\u0528" +
		"\u0529\x07\u0183\x02\x02\u0529\u052A\x07\u0183\x02\x02\u052A\u0538\x03" +
		"\x02\x02\x02\u052B\u052D\x07\u0117\x02\x02\u052C\u052B\x03\x02\x02\x02" +
		"\u052C\u052D\x03\x02\x02\x02\u052D\u052E\x03\x02\x02\x02\u052E\u052F\x07" +
		"\u0182\x02\x02\u052F\u0530\x05\xA2R\x02\u0530\u0531\x07\u0183\x02\x02" +
		"\u0531\u0538\x03\x02\x02\x02\u0532\u0533\x07\u0167\x02\x02\u0533\u0534" +
		"\x07\u0182\x02\x02\u0534\u0535\x05\u0108\x85\x02\u0535\u0536\x07\u0183" +
		"\x02\x02\u0536\u0538\x03\x02\x02\x02\u0537\u050F\x03\x02\x02\x02\u0537" +
		"\u051B\x03\x02\x02\x02\u0537\u052C\x03\x02\x02\x02\u0537\u0532\x03\x02" +
		"\x02\x02\u0538\xBB\x03\x02\x02\x02\u0539\u053A\x05\u013E\xA0\x02\u053A" +
		"\xBD\x03\x02\x02\x02\u053B\u053C\x07\xFD\x02\x02\u053C\u053D\x07\u0158" +
		"\x02\x02\u053D\u053E\x07\xBB\x02\x02\u053E\u053F\x07\u012F\x02\x02\u053F" +
		"\u0540\x05\xC0a\x02\u0540\xBF\x03\x02\x02\x02\u0541\u0542\x05\u0108\x85" +
		"\x02\u0542\xC1\x03\x02\x02\x02\u0543\u0544\x07\u0182\x02\x02\u0544\u0545" +
		"\x05\x9AN\x02\u0545\u0546\x07\u0183\x02\x02\u0546\u0547\x05\u012C\x97" +
		"\x02\u0547\xC3\x03\x02\x02\x02\u0548\u0549\x07\u015A\x02\x02\u0549\u054A" +
		"\x07\u0182\x02\x02\u054A\u054B\x05\xC6d\x02\u054B\u054C\x07\u0183\x02" +
		"\x02\u054C\xC5\x03\x02\x02\x02\u054D\u054E\x05\xC8e\x02\u054E\u054F\x07" +
		"\u0182\x02\x02\u054F\u0554\x05\xCAf\x02\u0550\u0551\x07\u0186\x02\x02" +
		"\u0551\u0553\x05\xCAf\x02\u0552\u0550\x03\x02\x02\x02\u0553\u0556\x03" +
		"\x02\x02\x02\u0554\u0552\x03\x02\x02\x02\u0554\u0555\x03\x02\x02\x02\u0555" +
		"\u0557\x03\x02\x02\x02\u0556\u0554\x03\x02\x02\x02\u0557\u0558\x07\u0183" +
		"\x02\x02\u0558\xC7\x03\x02\x02\x02\u0559\u055A\t\x18\x02\x02\u055A\xC9" +
		"\x03\x02\x02\x02\u055B\u055C\x07\u015A\x02\x02\u055C\u056B\x05\xE0q\x02" +
		"\u055D\u056B\x05\xCEh\x02\u055E\u056B\x05\u011E\x90\x02\u055F\u0560\x07" +
		"\x1A\x02\x02\u0560\u0561\x07\u0196\x02\x02\u0561\u0562\x07\u015A\x02\x02" +
		"\u0562\u056B\x05\xE0q\x02\u0563\u0564\x07\x99\x02\x02\u0564\u0565\x07" +
		"\u0196\x02\x02\u0565\u056B\x05\xCEh\x02\u0566\u0567\x05\xCCg\x02\u0567" +
		"\u0568\x07\u0196\x02\x02\u0568\u0569\x05\u011E\x90\x02\u0569\u056B\x03" +
		"\x02\x02\x02\u056A\u055B\x03\x02\x02\x02\u056A\u055D\x03\x02\x02\x02\u056A" +
		"\u055E\x03\x02\x02\x02\u056A\u055F\x03\x02\x02\x02\u056A\u0563\x03\x02" +
		"\x02\x02\u056A\u0566\x03\x02\x02\x02\u056B\xCB\x03\x02\x02\x02\u056C\u056D" +
		"\t\x19\x02\x02\u056D\xCD\x03\x02\x02\x02\u056E\u056F\x07!\x02\x02\u056F" +
		"\u0570\x07\u0182\x02\x02\u0570\u0571\x05\u013E\xA0\x02\u0571\u0572\x07" +
		"\u0183\x02\x02\u0572\xCF\x03\x02\x02\x02\u0573\u0574\x07\u0131\x02\x02" +
		"\u0574\u0582\x05\u010A\x86\x02\u0575\u0576\x07\u016B\x02\x02\u0576\u0577" +
		"\x07\u0182\x02\x02\u0577\u057C\x05\u013E\xA0\x02\u0578\u0579\x07\u0186" +
		"\x02\x02\u0579\u057B\x05\u013E\xA0\x02\u057A\u0578\x03\x02\x02\x02\u057B" +
		"\u057E\x03\x02\x02\x02\u057C\u057A\x03\x02\x02\x02\u057C\u057D\x03\x02" +
		"\x02\x02\u057D\u057F\x03\x02\x02\x02\u057E\u057C\x03\x02\x02\x02\u057F" +
		"\u0580\x07\u0183\x02\x02\u0580\u0582\x03\x02\x02\x02\u0581\u0573\x03\x02" +
		"\x02\x02\u0581\u0575\x03\x02\x02\x02\u0582\xD1\x03\x02\x02\x02\u0583\u0584" +
		"\x07\u0171\x02\x02\u0584\u0585\x05\u010A\x86\x02\u0585\xD3\x03\x02\x02" +
		"\x02\u0586\u0587\x07\u0103\x02\x02\u0587\u0588\x07\xC7\x02\x02\u0588\u058D" +
		"\x05\xD6l\x02\u0589\u058A\x07\u0186\x02\x02\u058A\u058C\x05\xD6l\x02\u058B" +
		"\u0589\x03\x02\x02\x02\u058C\u058F\x03\x02\x02\x02\u058D\u058B\x03\x02" +
		"\x02\x02\u058D\u058E\x03\x02\x02\x02\u058E\xD5\x03\x02\x02\x02\u058F\u058D" +
		"\x03\x02\x02\x02\u0590\u05B8\x05\u0108\x85\x02\u0591\u05B8\x05\xDCo\x02" +
		"\u0592\u0593\x07\u0182\x02\x02\u0593\u05B8\x07\u0183\x02\x02\u0594\u0595" +
		"\x07\u0182\x02\x02\u0595\u059A\x05\u0108\x85\x02\u0596\u0597\x07\u0186" +
		"\x02\x02\u0597\u0599\x05\u0108\x85\x02\u0598\u0596\x03\x02\x02\x02\u0599" +
		"\u059C\x03\x02\x02\x02\u059A\u0598\x03\x02\x02\x02\u059A\u059B\x03\x02" +
		"\x02\x02\u059B\u059D\x03\x02\x02\x02\u059C\u059A\x03\x02\x02\x02\u059D" +
		"\u059E\x07\u0183\x02\x02\u059E\u05B8\x03\x02\x02\x02\u059F\u05A0\x05\xDA" +
		"n\x02\u05A0\u05A1\x07\u0182\x02\x02\u05A1\u05A6\x05\u0108\x85\x02\u05A2" +
		"\u05A3\x07\u0186\x02\x02\u05A3\u05A5\x05\u0108\x85\x02\u05A4\u05A2\x03" +
		"\x02\x02\x02\u05A5\u05A8\x03\x02\x02\x02\u05A6\u05A4\x03\x02\x02\x02\u05A6" +
		"\u05A7\x03\x02\x02\x02\u05A7\u05A9\x03\x02\x02\x02\u05A8\u05A6\x03\x02" +
		"\x02\x02\u05A9\u05AA\x07\u0183\x02\x02\u05AA\u05B8\x03\x02\x02\x02\u05AB" +
		"\u05AC\x05\xD8m\x02\u05AC\u05AD\x07\u0182\x02\x02\u05AD\u05B2\x05\xD6" +
		"l\x02\u05AE\u05AF\x07\u0186\x02\x02\u05AF\u05B1\x05\xD6l\x02\u05B0\u05AE" +
		"\x03\x02\x02\x02\u05B1\u05B4\x03\x02\x02\x02\u05B2\u05B0\x03\x02\x02\x02" +
		"\u05B2\u05B3\x03\x02\x02\x02\u05B3\u05B5\x03\x02\x02\x02\u05B4\u05B2\x03" +
		"\x02\x02\x02\u05B5\u05B6\x07\u0183\x02\x02\u05B6\u05B8\x03\x02\x02\x02" +
		"\u05B7\u0590\x03\x02\x02\x02\u05B7\u0591\x03\x02\x02\x02\u05B7\u0592\x03" +
		"\x02\x02\x02\u05B7\u0594\x03\x02\x02\x02\u05B7\u059F\x03\x02\x02\x02\u05B7" +
		"\u05AB\x03\x02\x02\x02\u05B8\xD7\x03\x02\x02\x02\u05B9\u05BA\x07\u0104" +
		"\x02\x02\u05BA\u05BB\x07\x8B\x02\x02\u05BB\xD9\x03\x02\x02\x02\u05BC\u05BD" +
		"\t\x1A\x02\x02\u05BD\xDB\x03\x02\x02\x02\u05BE\u05BF\x05\xDEp\x02\u05BF" +
		"\u05C0\x07\u0182\x02\x02\u05C0\u05C1\x05\xE0q\x02\u05C1\u05C2\x07\u0186" +
		"\x02\x02\u05C2\u05C3\x05\u011E\x90\x02\u05C3\u05C4\x07\u0183\x02\x02\u05C4" +
		"\xDD\x03\x02\x02\x02\u05C5\u05C6\t\x1B\x02\x02\u05C6\xDF\x03\x02\x02\x02" +
		"\u05C7\u05C8\x05\u013E\xA0\x02\u05C8\xE1\x03\x02\x02\x02\u05C9\u05CA\x07" +
		"\u0106\x02\x02\u05CA\u05CB\x05\u010A\x86\x02\u05CB\xE3\x03\x02\x02\x02" +
		"\u05CC\u05CD\x07\u0172\x02\x02\u05CD\u05D2\x05\xE6t\x02\u05CE\u05CF\x07" +
		"\u0186\x02\x02\u05CF\u05D1\x05\xE6t\x02\u05D0\u05CE\x03\x02\x02\x02\u05D1" +
		"\u05D4\x03\x02\x02\x02\u05D2\u05D0\x03\x02\x02\x02\u05D2\u05D3\x03\x02" +
		"\x02\x02\u05D3\xE5\x03\x02\x02\x02\u05D4\u05D2\x03\x02\x02\x02\u05D5\u05D6" +
		"\x05\u012E\x98\x02\u05D6\u05D7\x07\xBB\x02\x02\u05D7\u05D8\x05\xE8u\x02" +
		"\u05D8\xE7\x03\x02\x02\x02\u05D9\u05DB\x05\u012E\x98\x02\u05DA\u05D9\x03" +
		"\x02\x02\x02\u05DA\u05DB\x03\x02\x02\x02\u05DB\u05DC\x03\x02\x02\x02\u05DC" +
		"\u05DE\x07\u0182\x02\x02\u05DD\u05DF\x05\xF2z\x02\u05DE\u05DD\x03\x02" +
		"\x02\x02\u05DE\u05DF\x03\x02\x02\x02\u05DF\u05E1\x03\x02\x02\x02\u05E0" +
		"\u05E2\x05\xECw\x02\u05E1\u05E0\x03\x02\x02\x02\u05E1\u05E2\x03\x02\x02" +
		"\x02\u05E2\u05E4\x03\x02\x02\x02\u05E3\u05E5\x05\u0102\x82\x02\u05E4\u05E3" +
		"\x03\x02\x02\x02\u05E4\u05E5\x03\x02\x02\x02\u05E5\u05E6\x03\x02\x02\x02" +
		"\u05E6\u05E7\x07\u0183\x02\x02\u05E7\xE9\x03\x02\x02\x02\u05E8\u05E9\x07" +
		"\u011E\x02\x02\u05E9\u05EB\x07\u0182\x02\x02\u05EA\u05EC\x05\xF2z\x02" +
		"\u05EB\u05EA\x03\x02\x02\x02\u05EB\u05EC\x03\x02\x02\x02\u05EC\u05EE\x03" +
		"\x02\x02\x02\u05ED\u05EF\x05\xECw\x02\u05EE\u05ED\x03\x02\x02\x02\u05EE" +
		"\u05EF\x03\x02\x02\x02\u05EF\u05F1\x03\x02\x02\x02\u05F0\u05F2\x05\xF6" +
		"|\x02\u05F1\u05F0\x03\x02\x02\x02\u05F1\u05F2\x03\x02\x02\x02\u05F2\u05F4" +
		"\x03\x02\x02\x02\u05F3\u05F5\x05\xFC\x7F\x02\u05F4\u05F3\x03\x02\x02\x02" +
		"\u05F4\u05F5\x03\x02\x02\x02\u05F5\u05F7\x03\x02\x02\x02\u05F6\u05F8\x05" +
		"\xFE\x80\x02\u05F7\u05F6\x03\x02\x02\x02\u05F7\u05F8\x03\x02\x02\x02\u05F8" +
		"\u05FA\x03\x02\x02\x02\u05F9\u05FB\x05\xF8}\x02\u05FA\u05F9\x03\x02\x02" +
		"\x02\u05FA\u05FB\x03\x02\x02\x02\u05FB\u05FC\x03\x02\x02\x02\u05FC\u05FD" +
		"\x05\u0100\x81\x02\u05FD\u0602\x07\u0183\x02\x02\u05FE\u0600\x07\xBB\x02" +
		"\x02\u05FF\u05FE\x03\x02\x02\x02\u05FF\u0600\x03\x02\x02\x02\u0600\u0601" +
		"\x03\x02\x02\x02\u0601\u0603\x05\u0136\x9C\x02\u0602\u05FF\x03\x02\x02" +
		"\x02\u0602\u0603\x03\x02\x02\x02\u0603\xEB";
	private static readonly _serializedATNSegment3: string =
		"\x03\x02\x02\x02\u0604\u0605\x07\u0134\x02\x02\u0605\u0606\x07\xC7\x02" +
		"\x02\u0606\u060B\x05\xEEx\x02\u0607\u0608\x07\u0186\x02\x02\u0608\u060A" +
		"\x05\xEEx\x02\u0609\u0607\x03\x02\x02\x02\u060A\u060D\x03\x02\x02\x02" +
		"\u060B\u0609\x03\x02\x02\x02\u060B\u060C\x03\x02\x02\x02\u060C\xED\x03" +
		"\x02\x02\x02\u060D\u060B\x03\x02\x02\x02\u060E\u0610\x05\u0108\x85\x02" +
		"\u060F\u0611\t\x1C\x02\x02\u0610\u060F\x03\x02\x02\x02\u0610\u0611\x03" +
		"\x02\x02\x02\u0611\u0614\x03\x02\x02\x02\u0612\u0613\x07Y\x02\x02\u0613" +
		"\u0615\t\x1D\x02\x02\u0614\u0612\x03\x02\x02\x02\u0614\u0615\x03\x02\x02" +
		"\x02\u0615\xEF\x03\x02\x02\x02\u0616\u0619\x07\u011B\x02\x02\u0617\u061A" +
		"\x07\xB4\x02\x02\u0618\u061A\x05\u0108\x85\x02\u0619\u0617\x03\x02\x02" +
		"\x02\u0619\u0618\x03\x02\x02\x02\u061A\xF1\x03\x02\x02\x02\u061B\u061C" +
		"\x07\u0139\x02\x02\u061C\u061D\x07\xC7\x02\x02\u061D\u0622\x05\u0108\x85" +
		"\x02\u061E\u061F\x07\u0186\x02\x02\u061F\u0621\x05\u0108\x85\x02\u0620" +
		"\u061E\x03\x02\x02\x02\u0621\u0624\x03\x02\x02\x02\u0622\u0620\x03\x02" +
		"\x02\x02\u0622\u0623\x03\x02\x02\x02\u0623\xF3\x03\x02\x02\x02\u0624\u0622" +
		"\x03\x02\x02\x02\u0625\u0636\x07\u018D\x02\x02\u0626\u0636\x07\u0190\x02" +
		"\x02\u0627\u0636\x07\u0195\x02\x02\u0628\u0629\x07\u0184\x02\x02\u0629" +
		"\u062A\x07\u0198\x02\x02\u062A\u062B\x07\u0186\x02\x02\u062B\u062C\x07" +
		"\u0198\x02\x02\u062C\u0636\x07\u0185\x02\x02\u062D\u062E\x07\u0184\x02" +
		"\x02\u062E\u062F\x07\u0198\x02\x02\u062F\u0630\x07\u0186\x02\x02\u0630" +
		"\u0636\x07\u0185\x02\x02\u0631\u0632\x07\u0184\x02\x02\u0632\u0633\x07" +
		"\u0186\x02\x02\u0633\u0634\x07\u0198\x02\x02\u0634\u0636\x07\u0185\x02" +
		"\x02\u0635\u0625\x03\x02\x02\x02\u0635\u0626\x03\x02\x02\x02\u0635\u0627" +
		"\x03\x02\x02\x02\u0635\u0628\x03\x02\x02\x02\u0635\u062D\x03\x02\x02\x02" +
		"\u0635\u0631\x03\x02\x02\x02\u0636\xF5\x03\x02\x02\x02\u0637\u0638\x07" +
		"\u011F\x02\x02\u0638\u063D\x05\xB0Y\x02\u0639\u063A\x07\u0186\x02\x02" +
		"\u063A\u063C\x05\xB0Y\x02\u063B\u0639\x03\x02\x02\x02\u063C\u063F\x03" +
		"\x02\x02\x02\u063D\u063B\x03\x02\x02\x02\u063D\u063E\x03\x02\x02\x02\u063E" +
		"\xF7\x03\x02\x02\x02\u063F\u063D\x03\x02\x02\x02\u0640\u0641\x07\u013A" +
		"\x02\x02\u0641\u0643\x07\u0182\x02\x02\u0642\u0644\x05\xFA~\x02\u0643" +
		"\u0642\x03\x02\x02\x02\u0644\u0645\x03\x02\x02\x02\u0645\u0643\x03\x02" +
		"\x02\x02\u0645\u0646\x03\x02\x02\x02\u0646\u0647\x03\x02\x02\x02\u0647" +
		"\u0649\x07\u0183\x02\x02\u0648\u064A\x05\u0106\x84\x02\u0649\u0648\x03" +
		"\x02\x02\x02\u0649\u064A\x03\x02\x02\x02\u064A\xF9\x03\x02\x02\x02\u064B" +
		"\u064D\x05\u0138\x9D\x02\u064C\u064E\x05\xF4{\x02\u064D\u064C\x03\x02" +
		"\x02\x02\u064D\u064E\x03\x02\x02\x02\u064E\xFB\x03\x02\x02\x02\u064F\u0650" +
		"\x07\xB4\x02\x02\u0650\u0651\x07\u014A\x02\x02\u0651\u0652\x07\u013B\x02" +
		"\x02\u0652\u0658\x07\u011D\x02\x02\u0653\u0654\x07\u0132\x02\x02\u0654" +
		"\u0655\x07\u0149\x02\x02\u0655\u0656\x07\u013B\x02\x02\u0656\u0658\x07" +
		"\u011D\x02\x02\u0657\u064F\x03\x02\x02\x02\u0657\u0653\x03\x02\x02\x02" +
		"\u0658\xFD\x03\x02\x02\x02\u0659\u065A\x07\b\x02\x02\u065A\u065B\x07\u011D" +
		"\x02\x02\u065B\u065C\x07\u0150\x02\x02\u065C\u065D\x07d\x02\x02\u065D" +
		"\u065E\x07K\x02\x02\u065E\u0672\x07\u0149\x02\x02\u065F\u0660\x07\b\x02" +
		"\x02\u0660\u0661\x07\u011D\x02\x02\u0661\u0662\x07\u0150\x02\x02\u0662" +
		"\u0663\x07\u0160\x02\x02\u0663\u0664\x07\u0129\x02\x02\u0664\u0672\x07" +
		"\u0149\x02\x02\u0665\u0666\x07\b\x02\x02\u0666\u0667\x07\u011D\x02\x02" +
		"\u0667\u0668\x07\u0150\x02\x02\u0668\u0669\x07\u0160\x02\x02\u0669\u066A" +
		"\x07K\x02\x02\u066A\u0672\x05\u0138\x9D\x02\u066B\u066C\x07\b\x02\x02" +
		"\u066C\u066D\x07\u011D\x02\x02\u066D\u066E\x07\u0150\x02\x02\u066E\u066F" +
		"\x07\u0160\x02\x02\u066F\u0670\x07/\x02\x02\u0670\u0672\x05\u0138\x9D" +
		"\x02\u0671\u0659\x03\x02\x02\x02\u0671\u065F\x03\x02\x02\x02\u0671\u0665" +
		"\x03\x02\x02\x02\u0671\u066B\x03\x02\x02\x02\u0672\xFF\x03\x02\x02\x02" +
		"\u0673\u0674\x07\xEA\x02\x02\u0674\u0679\x05\xB0Y\x02\u0675\u0676\x07" +
		"\u0186\x02\x02\u0676\u0678\x05\xB0Y\x02\u0677\u0675\x03\x02\x02\x02\u0678" +
		"\u067B\x03\x02\x02\x02\u0679\u0677\x03\x02\x02\x02\u0679\u067A\x03\x02" +
		"\x02\x02\u067A\u0101\x03\x02\x02\x02\u067B\u0679\x03\x02\x02\x02\u067C" +
		"\u067D\x07\u0141\x02\x02\u067D\u067E\x07\xC0\x02\x02\u067E\u067F\x05\u011E" +
		"\x90\x02\u067F\u0680\x05\u0104\x83\x02\u0680\u0686\x03\x02\x02\x02\u0681" +
		"\u0682\x07\u014A\x02\x02\u0682\u0683\x07\xC0\x02\x02\u0683\u0684\x07\u0198" +
		"\x02\x02\u0684\u0686\x05\u0104\x83\x02\u0685\u067C\x03\x02\x02\x02\u0685" +
		"\u0681\x03\x02\x02\x02\u0686\u0103\x03\x02\x02\x02\u0687\u0688\x07h\x02" +
		"\x02\u0688\u0689\x07\xB7\x02\x02\u0689\u068A\x07\xE0\x02\x02\u068A\u068B" +
		"\x07\u0149\x02\x02\u068B\u0105\x03\x02\x02\x02\u068C\u068D\x07\u0174\x02" +
		"\x02\u068D\u068E\x05\u011E\x90\x02\u068E\u0107\x03\x02\x02\x02\u068F\u0690" +
		"\x05\u010A\x86\x02\u0690\u0109\x03\x02\x02\x02\u0691\u0692\b\x86\x01\x02" +
		"\u0692\u0693\x07\u012C\x02\x02\u0693\u069E\x05\u010A\x86\b\u0694\u0695" +
		"\x07\xF7\x02\x02\u0695\u0696\x07\u0182\x02\x02\u0696\u0697\x05\xA2R\x02" +
		"\u0697\u0698\x07\u0183\x02\x02\u0698\u069E\x03\x02\x02\x02\u0699\u069B" +
		"\x05\u0110\x89\x02\u069A\u069C\x05\u010C\x87\x02\u069B\u069A\x03\x02\x02" +
		"\x02\u069B\u069C\x03\x02\x02\x02\u069C\u069E\x03\x02\x02\x02\u069D\u0691" +
		"\x03\x02\x02\x02\u069D\u0694\x03\x02\x02\x02\u069D\u0699\x03\x02\x02\x02" +
		"\u069E\u06AD\x03\x02\x02\x02\u069F\u06A0\f\x05\x02\x02\u06A0\u06A1\x07" +
		"\xB7\x02\x02\u06A1\u06AC\x05\u010A\x86\x06\u06A2\u06A3\f\x04\x02\x02\u06A3" +
		"\u06A4\x07\u0133\x02\x02\u06A4\u06AC\x05\u010A\x86\x05\u06A5\u06A6\f\x03" +
		"\x02\x02\u06A6\u06A8\x07\u0113\x02\x02\u06A7\u06A9\x07\u012C\x02\x02\u06A8" +
		"\u06A7\x03\x02\x02\x02\u06A8\u06A9\x03\x02\x02\x02\u06A9\u06AA\x03\x02" +
		"\x02\x02\u06AA\u06AC\t\x1E\x02\x02\u06AB\u069F\x03\x02\x02\x02\u06AB\u06A2" +
		"\x03\x02\x02\x02\u06AB\u06A5\x03\x02\x02\x02\u06AC\u06AF\x03\x02\x02\x02" +
		"\u06AD\u06AB\x03\x02\x02\x02\u06AD\u06AE\x03\x02\x02\x02\u06AE\u010B\x03" +
		"\x02\x02\x02\u06AF\u06AD\x03\x02\x02\x02\u06B0\u06B2\x07\u012C\x02\x02" +
		"\u06B1\u06B0\x03\x02\x02\x02\u06B1\u06B2\x03\x02\x02\x02\u06B2\u06B3\x03" +
		"\x02\x02\x02\u06B3\u06B5\x07\xC0\x02\x02\u06B4\u06B6\t\x1F\x02\x02\u06B5" +
		"\u06B4\x03\x02\x02\x02\u06B5\u06B6\x03\x02\x02\x02\u06B6\u06B7\x03\x02" +
		"\x02\x02\u06B7\u06B8\x05\u0110\x89\x02\u06B8\u06B9\x07\xB7\x02\x02\u06B9" +
		"\u06BA\x05\u0110\x89\x02\u06BA\u06F4\x03\x02\x02\x02\u06BB\u06BD\x07\u012C" +
		"\x02\x02\u06BC\u06BB\x03\x02\x02\x02\u06BC\u06BD\x03\x02\x02\x02\u06BD" +
		"\u06BE\x03\x02\x02\x02\u06BE\u06BF\x07\u0109\x02\x02\u06BF\u06C0\x07\u0182" +
		"\x02\x02\u06C0\u06C5\x05\u0108\x85\x02\u06C1\u06C2\x07\u0186\x02\x02\u06C2" +
		"\u06C4\x05\u0108\x85\x02\u06C3\u06C1\x03\x02\x02\x02\u06C4\u06C7\x03\x02" +
		"\x02\x02\u06C5\u06C3\x03\x02\x02\x02\u06C5\u06C6\x03\x02\x02\x02\u06C6" +
		"\u06C8\x03\x02\x02\x02\u06C7\u06C5\x03\x02\x02\x02\u06C8\u06C9\x07\u0183" +
		"\x02\x02\u06C9\u06F4\x03\x02\x02\x02\u06CA\u06CC\x07\u012C\x02\x02\u06CB" +
		"\u06CA\x03\x02\x02\x02\u06CB\u06CC\x03\x02\x02\x02\u06CC\u06CD\x03\x02" +
		"\x02\x02\u06CD\u06CE\x07\u0109\x02\x02\u06CE\u06CF\x07\u0182\x02\x02\u06CF" +
		"\u06D0\x05\xA2R\x02\u06D0\u06D1\x07\u0183\x02\x02\u06D1\u06F4\x03\x02" +
		"\x02\x02\u06D2\u06D3\x07\xF7\x02\x02\u06D3\u06D4\x07\u0182\x02\x02\u06D4" +
		"\u06D5\x05\xA2R\x02\u06D5\u06D6\x07\u0183\x02\x02\u06D6\u06F4\x03\x02" +
		"\x02\x02\u06D7\u06D9\x07\u012C\x02\x02\u06D8\u06D7\x03\x02\x02\x02\u06D8" +
		"\u06D9\x03\x02\x02\x02\u06D9\u06DA\x03\x02\x02\x02\u06DA\u06DB\x07\u0146" +
		"\x02\x02\u06DB\u06F4\x05\u0110\x89\x02\u06DC\u06F4\x05\u010E\x88\x02\u06DD" +
		"\u06DF\x07\u0113\x02\x02\u06DE\u06E0\x07\u012C\x02\x02\u06DF\u06DE\x03" +
		"\x02\x02\x02\u06DF\u06E0\x03\x02\x02\x02\u06E0\u06E1\x03\x02\x02\x02\u06E1" +
		"\u06F4\t\x1E\x02\x02\u06E2\u06E4\x07\u0113\x02\x02\u06E3\u06E5\x07\u012C" +
		"\x02\x02\u06E4\u06E3\x03\x02\x02\x02\u06E4\u06E5\x03\x02\x02\x02\u06E5" +
		"\u06E6\x03\x02\x02\x02\u06E6\u06E7\x07\xED\x02\x02\u06E7\u06E8\x07\xFE" +
		"\x02\x02\u06E8\u06F4\x05\u0110\x89\x02\u06E9\u06EB\x07\u012C\x02\x02\u06EA" +
		"\u06E9\x03\x02\x02\x02\u06EA\u06EB\x03\x02\x02\x02\u06EB\u06EC\x03\x02" +
		"\x02\x02\u06EC\u06ED\x07\u014F\x02\x02\u06ED\u06EE\x07\u0160\x02\x02\u06EE" +
		"\u06F1\x05\u0110\x89\x02\u06EF\u06F0\x07\xF4\x02\x02\u06F0\u06F2\x05\u015C" +
		"\xAF\x02\u06F1\u06EF\x03\x02\x02\x02\u06F1\u06F2\x03\x02\x02\x02\u06F2" +
		"\u06F4\x03\x02\x02\x02\u06F3\u06B1\x03\x02\x02\x02\u06F3\u06BC\x03\x02" +
		"\x02\x02\u06F3\u06CB\x03\x02\x02\x02\u06F3\u06D2\x03\x02\x02\x02\u06F3" +
		"\u06D8\x03\x02\x02\x02\u06F3\u06DC\x03\x02\x02\x02\u06F3\u06DD\x03\x02" +
		"\x02\x02\u06F3\u06E2\x03\x02\x02\x02\u06F3\u06EA\x03\x02\x02\x02\u06F4" +
		"\u010D\x03\x02\x02\x02\u06F5\u06F7\x07\u012C\x02\x02\u06F6\u06F5\x03\x02" +
		"\x02\x02\u06F6\u06F7\x03\x02\x02\x02\u06F7\u06F8\x03\x02\x02\x02\u06F8" +
		"\u06F9\x07\u011A\x02\x02\u06F9\u0707\t \x02\x02\u06FA\u06FB\x07\u0182" +
		"\x02\x02\u06FB\u0708\x07\u0183\x02\x02\u06FC\u06FD\x07\u0182\x02\x02\u06FD" +
		"\u0702\x05\u0108\x85\x02\u06FE\u06FF\x07\u0186\x02\x02\u06FF\u0701\x05" +
		"\u0108\x85\x02\u0700\u06FE\x03\x02\x02\x02\u0701\u0704\x03\x02\x02\x02" +
		"\u0702\u0700\x03\x02\x02\x02\u0702\u0703\x03\x02\x02\x02\u0703\u0705\x03" +
		"\x02\x02\x02\u0704\u0702\x03\x02\x02\x02\u0705\u0706\x07\u0183\x02\x02" +
		"\u0706\u0708\x03\x02\x02\x02\u0707\u06FA\x03\x02\x02\x02\u0707\u06FC\x03" +
		"\x02\x02\x02\u0708\u0713\x03\x02\x02\x02\u0709\u070B\x07\u012C\x02\x02" +
		"\u070A\u0709\x03\x02\x02\x02\u070A\u070B\x03\x02\x02\x02\u070B\u070C\x03" +
		"\x02\x02\x02\u070C\u070D\x07\u011A\x02\x02\u070D\u0710\x05\u0110\x89\x02" +
		"\u070E\u070F\x07\xF4\x02\x02\u070F\u0711\x05\u015C\xAF\x02\u0710\u070E" +
		"\x03\x02\x02\x02\u0710\u0711\x03\x02\x02\x02\u0711\u0713\x03\x02\x02\x02" +
		"\u0712\u06F6\x03\x02\x02\x02\u0712\u070A\x03\x02\x02\x02\u0713\u010F\x03" +
		"\x02\x02\x02\u0714\u0715\b\x89\x01\x02\u0715\u0719\x05\u0112\x8A\x02\u0716" +
		"\u0717\t!\x02\x02\u0717\u0719\x05\u0110\x89\n\u0718\u0714\x03\x02\x02" +
		"\x02\u0718\u0716\x03\x02\x02\x02\u0719\u0731\x03\x02\x02\x02\u071A\u071B" +
		"\f\t\x02\x02\u071B\u071C\t\"\x02\x02\u071C\u0730\x05\u0110\x89\n\u071D" +
		"\u071E\f\b\x02\x02\u071E\u071F\t#\x02\x02\u071F\u0730\x05\u0110\x89\t" +
		"\u0720\u0721\f\x07\x02\x02\u0721\u0722\x07\u017D\x02\x02\u0722\u0730\x05" +
		"\u0110\x89\b\u0723\u0724\f\x06\x02\x02\u0724\u0725\x07\u017E\x02\x02\u0725" +
		"\u0730\x05\u0110\x89\x07\u0726\u0727\f\x05\x02\x02\u0727\u0728\x07\u017C" +
		"\x02\x02\u0728\u0730\x05\u0110\x89\x06\u0729\u072A\f\x04\x02\x02\u072A" +
		"\u072B\x05\u0150\xA9\x02\u072B\u072C\x05\u0110\x89\x05\u072C\u0730\x03" +
		"\x02\x02\x02\u072D\u072E\f\x03\x02\x02\u072E\u0730\x07\u019C\x02\x02\u072F" +
		"\u071A\x03\x02\x02\x02\u072F\u071D\x03\x02\x02\x02\u072F\u0720\x03\x02" +
		"\x02\x02\u072F\u0723\x03\x02\x02\x02\u072F\u0726\x03\x02\x02\x02\u072F" +
		"\u0729\x03\x02\x02\x02\u072F\u072D\x03\x02\x02\x02\u0730\u0733\x03\x02" +
		"\x02\x02\u0731\u072F\x03\x02\x02\x02\u0731\u0732\x03\x02\x02\x02\u0732" +
		"\u0111\x03\x02\x02\x02\u0733\u0731\x03\x02\x02\x02\u0734\u0735\b\x8A\x01" +
		"\x02\u0735\u0737\x07\xCB\x02\x02\u0736\u0738\x05\u013C\x9F\x02\u0737\u0736" +
		"\x03\x02\x02\x02\u0738\u0739\x03\x02\x02\x02\u0739\u0737\x03\x02\x02\x02" +
		"\u0739\u073A\x03\x02\x02\x02\u073A\u073D\x03\x02\x02\x02\u073B\u073C\x07" +
		"\xF1\x02\x02\u073C\u073E\x05\u0108\x85\x02\u073D\u073B\x03\x02\x02\x02" +
		"\u073D\u073E\x03\x02\x02\x02\u073E\u073F\x03\x02\x02\x02\u073F\u0740\x07" +
		"\xF2\x02\x02\u0740\u0790\x03\x02\x02\x02\u0741\u0742\x07\xCB\x02\x02\u0742" +
		"\u0744\x05\u0108\x85\x02\u0743\u0745\x05\u013C\x9F\x02\u0744\u0743\x03" +
		"\x02\x02\x02\u0745\u0746\x03\x02\x02\x02\u0746\u0744\x03\x02\x02\x02\u0746" +
		"\u0747\x03\x02\x02\x02\u0747\u074A\x03\x02\x02\x02\u0748\u0749\x07\xF1" +
		"\x02\x02\u0749\u074B\x05\u0108\x85\x02\u074A\u0748\x03\x02\x02\x02\u074A" +
		"\u074B\x03\x02\x02\x02\u074B\u074C\x03\x02\x02\x02\u074C\u074D\x07\xF2" +
		"\x02\x02\u074D\u0790\x03\x02\x02\x02\u074E\u074F\x07\xCC\x02\x02\u074F" +
		"\u0750\x07\u0182\x02\x02\u0750\u0751\x05\u0108\x85\x02\u0751\u0752\x07" +
		"\xBB\x02\x02\u0752\u0753\x05:\x1E\x02\u0753\u0754\x07\u0183\x02\x02\u0754" +
		"\u0790\x03\x02\x02\x02\u0755\u0756\x07/\x02\x02\u0756\u0757\x07\u0182" +
		"\x02\x02\u0757\u075A\x05\u0108\x85\x02\u0758\u0759\x07>\x02\x02\u0759" +
		"\u075B\x07Y\x02\x02\u075A\u0758\x03\x02\x02\x02\u075A\u075B\x03\x02\x02" +
		"\x02\u075B\u075C\x03\x02\x02\x02\u075C\u075D\x07\u0183\x02\x02\u075D\u0790" +
		"\x03\x02\x02\x02\u075E\u075F\x07K\x02\x02\u075F\u0760\x07\u0182\x02\x02" +
		"\u0760\u0763\x05\u0108\x85\x02\u0761\u0762\x07>\x02\x02\u0762\u0764\x07" +
		"Y\x02\x02\u0763\u0761\x03\x02\x02\x02\u0763\u0764\x03\x02\x02\x02\u0764" +
		"\u0765\x03\x02\x02\x02\u0765\u0766\x07\u0183\x02\x02\u0766\u0790\x03\x02" +
		"\x02\x02\u0767\u0768\x07\u013E\x02\x02\u0768\u0769\x07\u0182\x02\x02\u0769" +
		"\u076A\x05\u0110\x89\x02\u076A\u076B\x07\u0109\x02\x02\u076B\u076C\x05" +
		"\u0110\x89\x02\u076C\u076D\x07\u0183\x02\x02\u076D\u0790\x03\x02\x02\x02" +
		"\u076E\u0790\x05\u0158\xAD\x02\u076F\u0790\x07\u018D\x02\x02\u0770\u0771" +
		"\x05\u013E\xA0\x02\u0771\u0772\x07\u017F\x02\x02\u0772\u0773\x07\u018D" +
		"\x02\x02\u0773\u0790\x03\x02\x02\x02\u0774\u0775\x07\u0182\x02\x02\u0775" +
		"\u0776\x05\xA2R\x02\u0776\u0777\x07\u0183\x02\x02\u0777\u0790\x03\x02" +
		"\x02\x02\u0778\u0779\x05\u0114\x8B\x02\u0779\u0785\x07\u0182\x02\x02\u077A" +
		"\u077C\x05\u0162\xB2\x02\u077B\u077A\x03\x02\x02\x02\u077B\u077C\x03\x02" +
		"\x02\x02\u077C\u077D\x03\x02\x02\x02\u077D\u0782\x05\u0116\x8C\x02\u077E" +
		"\u077F\x07\u0186\x02\x02\u077F\u0781\x05\u0116\x8C\x02\u0780\u077E\x03" +
		"\x02\x02\x02\u0781\u0784\x03\x02\x02\x02\u0782\u0780\x03\x02\x02\x02\u0782" +
		"\u0783\x03\x02\x02\x02\u0783\u0786\x03\x02\x02\x02\u0784\u0782\x03\x02" +
		"\x02\x02\u0785\u077B\x03\x02\x02\x02\u0785\u0786\x03\x02\x02\x02\u0786" +
		"\u0787\x03\x02\x02\x02\u0787\u0788\x07\u0183\x02\x02\u0788\u0790\x03\x02" +
		"\x02\x02\u0789\u0790\x05\u0136\x9C\x02\u078A\u0790\x05\u0118\x8D\x02\u078B" +
		"\u078C\x07\u0182\x02\x02\u078C\u078D\x05\u0108\x85\x02\u078D\u078E\x07" +
		"\u0183\x02\x02\u078E\u0790\x03\x02\x02\x02\u078F\u0734\x03\x02\x02\x02" +
		"\u078F\u0741\x03\x02\x02\x02\u078F\u074E\x03\x02\x02\x02\u078F\u0755\x03" +
		"\x02\x02\x02\u078F\u075E\x03\x02\x02\x02\u078F\u0767\x03\x02\x02\x02\u078F" +
		"\u076E\x03\x02\x02\x02\u078F\u076F\x03\x02\x02\x02\u078F\u0770\x03\x02" +
		"\x02\x02\u078F\u0774\x03\x02\x02\x02\u078F\u0778\x03\x02\x02\x02\u078F" +
		"\u0789\x03\x02\x02\x02\u078F\u078A\x03\x02\x02\x02\u078F\u078B\x03\x02" +
		"\x02\x02\u0790\u0798\x03\x02\x02\x02\u0791\u0792\f\x06\x02\x02\u0792\u0793" +
		"\x07\u0180\x02\x02\u0793\u0794\x05\u0110\x89\x02\u0794\u0795\x07\u0181" +
		"\x02\x02\u0795\u0797\x03\x02\x02\x02\u0796\u0791\x03\x02\x02\x02\u0797" +
		"\u079A\x03\x02\x02\x02\u0798\u0796\x03\x02\x02\x02\u0798\u0799\x03\x02" +
		"\x02\x02\u0799\u0113\x03\x02\x02\x02\u079A\u0798\x03\x02\x02\x02\u079B" +
		"\u079F\x05\u016A\xB6\x02\u079C\u079F\x05\u016E\xB8\x02\u079D\u079F\x05" +
		"\u013E\xA0\x02\u079E\u079B\x03\x02\x02\x02\u079E\u079C\x03\x02\x02\x02" +
		"\u079E\u079D\x03\x02\x02\x02\u079F\u0115\x03\x02\x02\x02\u07A0\u07A5\x05" +
		"\u0168\xB5\x02\u07A1\u07A5\x05\u0166\xB4\x02\u07A2\u07A5\x05\u0164\xB3" +
		"\x02\u07A3\u07A5\x05\u0108\x85\x02\u07A4\u07A0\x03\x02\x02\x02\u07A4\u07A1" +
		"\x03\x02\x02\x02\u07A4\u07A2\x03\x02\x02\x02\u07A4\u07A3\x03\x02\x02\x02" +
		"\u07A5\u0117\x03\x02\x02\x02\u07A6\u07A7\x05\u013E\xA0\x02\u07A7\u0119" +
		"\x03\x02\x02\x02\u07A8\u07A9\x05\u0136\x9C\x02\u07A9\u011B\x03\x02\x02" +
		"\x02\u07AA\u07AD\x05\u0136\x9C\x02\u07AB\u07AD\x05\u0118\x8D\x02\u07AC" +
		"\u07AA\x03\x02\x02\x02\u07AC\u07AB\x03\x02\x02\x02\u07AD\u011D\x03\x02" +
		"\x02\x02\u07AE\u07B1\x07\u0111\x02\x02\u07AF\u07B2\x05\u0120\x91\x02\u07B0" +
		"\u07B2\x05\u0124\x93\x02\u07B1\u07AF\x03\x02\x02\x02\u07B1\u07B0\x03\x02" +
		"\x02\x02\u07B1\u07B2\x03\x02\x02\x02\u07B2\u011F\x03\x02\x02\x02\u07B3" +
		"\u07B5\x05\u0122\x92\x02\u07B4\u07B6\x05\u0126\x94\x02\u07B5\u07B4\x03" +
		"\x02\x02\x02\u07B5\u07B6\x03\x02\x02\x02\u07B6\u0121\x03\x02\x02\x02\u07B7" +
		"\u07B8\x05\u0128\x95\x02\u07B8\u07B9\x05\u0166\xB4\x02\u07B9\u07BB\x03" +
		"\x02\x02\x02\u07BA\u07B7\x03\x02\x02\x02\u07BB\u07BC\x03\x02\x02\x02\u07BC" +
		"\u07BA\x03\x02\x02\x02\u07BC\u07BD\x03\x02\x02\x02\u07BD\u0123\x03\x02" +
		"\x02\x02\u07BE\u07C1\x05\u0126\x94\x02\u07BF\u07C2\x05\u0122\x92\x02\u07C0" +
		"\u07C2\x05\u0126\x94\x02\u07C1\u07BF\x03\x02\x02\x02\u07C1\u07C0\x03\x02" +
		"\x02\x02\u07C1\u07C2\x03\x02\x02\x02\u07C2\u0125\x03\x02\x02\x02\u07C3" +
		"\u07C4\x05\u0128\x95\x02\u07C4\u07C5\x05\u0166\xB4\x02\u07C5\u07C6\x07" +
		"\u0160\x02\x02\u07C6\u07C7\x05\u0166\xB4\x02\u07C7\u0127\x03\x02\x02\x02" +
		"\u07C8\u07CA\t$\x02\x02\u07C9\u07C8\x03\x02\x02\x02\u07C9\u07CA\x03\x02" +
		"\x02\x02\u07CA\u07CB\x03\x02\x02\x02\u07CB\u07CE\t%\x02\x02\u07CC\u07CE" +
		"\x07\u0197\x02\x02\u07CD\u07C9\x03\x02\x02\x02\u07CD\u07CC\x03\x02\x02" +
		"\x02\u07CE\u0129\x03\x02\x02\x02\u07CF\u07D1\x07\xBB\x02\x02\u07D0\u07CF" +
		"\x03\x02\x02\x02\u07D0\u07D1\x03\x02\x02\x02\u07D1\u07D2\x03\x02\x02\x02" +
		"\u07D2\u07D4\x05\u0136\x9C\x02\u07D3\u07D5\x05\u0132\x9A\x02\u07D4\u07D3" +
		"\x03\x02\x02\x02\u07D4\u07D5\x03\x02\x02\x02\u07D5\u012B\x03\x02\x02\x02" +
		"\u07D6\u07D8\x07\xBB\x02\x02\u07D7\u07D6\x03\x02\x02\x02\u07D7\u07D8\x03" +
		"\x02\x02\x02\u07D8\u07D9\x03\x02\x02\x02\u07D9\u07DB\x05\u0136\x9C\x02" +
		"\u07DA\u07DC\x05\u0132\x9A\x02\u07DB\u07DA\x03\x02\x02\x02\u07DB\u07DC" +
		"\x03\x02\x02\x02\u07DC\u012D\x03\x02\x02\x02\u07DD\u07DE\x05\u0136\x9C" +
		"\x02\u07DE\u07DF\x05\u0130\x99\x02\u07DF\u012F\x03\x02\x02\x02\u07E0\u07E1" +
		"\x07\u0122\x02\x02\u07E1\u07E3\x05\u0136\x9C\x02\u07E2\u07E0\x03\x02\x02" +
		"\x02\u07E3\u07E4\x03\x02\x02\x02\u07E4\u07E2\x03\x02\x02\x02\u07E4\u07E5" +
		"\x03\x02\x02\x02\u07E5\u07E8\x03\x02\x02\x02\u07E6\u07E8\x03\x02\x02\x02" +
		"\u07E7\u07E2\x03\x02\x02\x02\u07E7\u07E6\x03\x02\x02\x02\u07E8\u0131\x03" +
		"\x02\x02\x02\u07E9\u07EA\x07\u0182\x02\x02\u07EA\u07EB\x05\u0134\x9B\x02" +
		"\u07EB\u07EC\x07\u0183\x02\x02\u07EC\u0133\x03\x02\x02\x02\u07ED\u07F2" +
		"\x05\u0136\x9C\x02\u07EE\u07EF\x07\u0186\x02\x02\u07EF\u07F1\x05\u0136" +
		"\x9C\x02\u07F0\u07EE\x03\x02\x02\x02\u07F1\u07F4\x03\x02\x02\x02\u07F2" +
		"\u07F0\x03\x02\x02\x02\u07F2\u07F3\x03\x02\x02\x02\u07F3\u0135\x03\x02" +
		"\x02\x02\u07F4\u07F2\x03\x02\x02\x02\u07F5\u07F9\x05\u0138\x9D\x02\u07F6" +
		"\u07F9\x05\u013A\x9E\x02\u07F7\u07F9\x05\u016E\xB8\x02\u07F8\u07F5\x03" +
		"\x02\x02\x02\u07F8\u07F6\x03\x02\x02\x02\u07F8\u07F7\x03\x02\x02\x02\u07F9" +
		"\u0137\x03\x02\x02\x02\u07FA\u07FB\t&\x02\x02\u07FB\u0139\x03\x02\x02" +
		"\x02\u07FC\u07FD\x07\u0197\x02\x02\u07FD\u013B\x03\x02\x02\x02\u07FE\u07FF" +
		"\x07\u0170\x02\x02\u07FF\u0800\x05\u0108\x85\x02\u0800\u0801\x07\u015C" +
		"\x02\x02\u0801\u0802\x05\u0108\x85\x02\u0802\u013D\x03\x02\x02\x02\u0803" +
		"\u0808\x05\u0136\x9C\x02\u0804\u0805\x07\u017F\x02\x02\u0805\u0807\x05" +
		"\u0136\x9C\x02\u0806\u0804\x03\x02\x02\x02\u0807\u080A\x03\x02\x02\x02" +
		"\u0808\u0809\x03\x02\x02\x02\u0808\u0806\x03\x02\x02\x02\u0809\u013F\x03" +
		"\x02\x02\x02\u080A\u0808\x03\x02\x02\x02\u080B\u080C\x07\u0173\x02\x02" +
		"\u080C\u080D\x05\u0146\xA4\x02\u080D\u0141\x03\x02\x02\x02\u080E\u080F" +
		"\x07=\x02\x02\u080F\u0810\x07\u012C\x02\x02\u0810\u0811\x07\xF7\x02\x02" +
		"\u0811\u0143\x03\x02\x02\x02\u0812\u0813\x07=\x02\x02\u0813\u0814\x07" +
		"\xF7\x02\x02\u0814\u0145\x03\x02\x02\x02\u0815\u0816\x07\u0182\x02\x02" +
		"\u0816\u081B\x05\u0148\xA5\x02\u0817\u0818\x07\u0186\x02\x02\u0818\u081A" +
		"\x05\u0148\xA5\x02\u0819\u0817\x03\x02\x02\x02\u081A\u081D\x03\x02\x02" +
		"\x02\u081B\u0819\x03\x02\x02\x02\u081B\u081C\x03\x02\x02\x02\u081C\u081E" +
		"\x03\x02\x02\x02\u081D\u081B\x03\x02\x02\x02\u081E\u081F\x07\u0183\x02" +
		"\x02\u081F\u0147\x03\x02\x02\x02\u0820\u0825\x05\u014A\xA6\x02\u0821\u0823" +
		"\x07\u0177\x02\x02\u0822\u0821\x03\x02\x02\x02\u0822\u0823\x03\x02\x02" +
		"\x02\u0823\u0824\x03\x02\x02\x02\u0824\u0826\x05\u014C\xA7\x02\u0825\u0822" +
		"\x03\x02\x02\x02\u0825\u0826\x03\x02\x02\x02\u0826\u0149\x03\x02\x02\x02" +
		"\u0827\u082B\x05\u0136\x9C\x02\u0828\u082B\x05\u0118\x8D\x02\u0829\u082B" +
		"\x07\u0197\x02\x02\u082A\u0827\x03\x02\x02\x02\u082A\u0828\x03\x02\x02" +
		"\x02\u082A\u0829\x03\x02\x02\x02\u082B\u014B\x03\x02\x02\x02\u082C\u0831" +
		"\x07\u0198\x02\x02\u082D\u0831\x07\u0199\x02\x02\u082E\u0831\x05\u0160" +
		"\xB1\x02\u082F\u0831\x07\u0197\x02\x02\u0830\u082C\x03\x02\x02\x02\u0830" +
		"\u082D\x03\x02\x02\x02\u0830\u082E\x03\x02\x02\x02\u0830\u082F\x03\x02" +
		"\x02\x02\u0831\u014D\x03\x02\x02\x02\u0832\u0839\x07\xB7\x02\x02\u0833" +
		"\u0834\x07\u017D\x02\x02\u0834\u0839\x07\u017D\x02\x02\u0835\u0839\x07" +
		"\u0133\x02\x02\u0836\u0837\x07\u017C\x02\x02\u0837\u0839\x07\u017C\x02" +
		"\x02\u0838\u0832\x03\x02\x02\x02\u0838\u0833\x03\x02\x02\x02\u0838\u0835" +
		"\x03\x02\x02\x02\u0838\u0836\x03\x02\x02\x02\u0839\u014F\x03\x02\x02\x02" +
		"\u083A\u0849\x07\u0177\x02\x02\u083B\u0849\x07\u0178\x02\x02\u083C\u0849" +
		"\x07\u0179\x02\x02\u083D\u083E\x07\u0179\x02\x02\u083E\u0849\x07\u0177" +
		"\x02\x02\u083F\u0840\x07\u0178\x02\x02\u0840\u0849\x07\u0177\x02\x02\u0841" +
		"\u0842\x07\u0179\x02\x02\u0842\u0849\x07\u0178\x02\x02\u0843\u0844\x07" +
		"\u017A\x02\x02\u0844\u0849\x07\u0177\x02\x02\u0845\u0846\x07\u0179\x02" +
		"\x02\u0846\u0847\x07\u0177\x02\x02\u0847\u0849\x07\u0178\x02\x02\u0848" +
		"\u083A\x03\x02\x02\x02\u0848\u083B\x03\x02\x02\x02\u0848\u083C\x03\x02" +
		"\x02\x02\u0848\u083D\x03\x02\x02\x02\u0848\u083F\x03\x02\x02\x02\u0848" +
		"\u0841\x03\x02\x02\x02\u0848\u0843\x03\x02\x02\x02\u0848\u0845\x03\x02" +
		"\x02\x02\u0849\u0151\x03\x02\x02\x02\u084A\u084B\x07\u0179\x02\x02\u084B" +
		"\u0852\x07\u0179\x02\x02\u084C\u084D\x07\u0178\x02\x02\u084D\u0852\x07" +
		"\u0178\x02\x02\u084E\u0852\x07\u017D\x02\x02\u084F\u0852\x07\u017E\x02" +
		"\x02\u0850\u0852\x07\u017C\x02\x02\u0851\u084A\x03\x02\x02\x02\u0851\u084C" +
		"\x03\x02\x02\x02\u0851\u084E\x03\x02\x02\x02\u0851\u084F\x03\x02\x02\x02" +
		"\u0851\u0850\x03\x02\x02\x02\u0852\u0153\x03\x02\x02\x02\u0853\u0854\t" +
		"\'\x02\x02\u0854\u0155\x03\x02\x02\x02\u0855\u0856\t(\x02\x02\u0856\u0157" +
		"\x03\x02\x02\x02\u0857\u0866\x05\u011E\x90\x02\u0858\u0866\x05\u015A\xAE" +
		"\x02\u0859\u0866\x05\u015C\xAF\x02\u085A\u085C\x07\u018F\x02\x02\u085B" +
		"\u085A\x03\x02\x02\x02\u085B\u085C\x03\x02\x02\x02\u085C\u085D\x03\x02" +
		"\x02\x02\u085D\u0866\x05\u015E\xB0\x02\u085E\u0866\x05\u0160\xB1\x02\u085F" +
		"\u0866\x07\u0199\x02\x02\u0860\u0866\x07\u019A\x02\x02\u0861\u0863\x07" +
		"\u012C\x02\x02\u0862\u0861\x03\x02\x02\x02\u0862\u0863\x03\x02\x02\x02" +
		"\u0863\u0864\x03\x02\x02\x02\u0864\u0866\x07\u012D\x02\x02\u0865\u0857" +
		"\x03\x02\x02\x02\u0865\u0858\x03\x02\x02\x02\u0865\u0859\x03\x02\x02\x02" +
		"\u0865\u085B\x03\x02\x02\x02\u0865\u085E\x03\x02\x02\x02\u0865\u085F\x03" +
		"\x02\x02\x02\u0865\u0860\x03\x02\x02\x02\u0865\u0862\x03\x02\x02\x02\u0866" +
		"\u0159\x03\x02\x02\x02\u0867\u0868\x05\u0164\xB3\x02\u0868\u0869\x05\u015C" +
		"\xAF\x02\u0869\u015B\x03\x02\x02\x02\u086A\u086B\x07\u0197\x02\x02\u086B" +
		"\u015D\x03\x02\x02\x02\u086C\u086D\x07\u0198\x02\x02\u086D\u015F\x03\x02" +
		"\x02\x02\u086E\u086F\t)\x02\x02\u086F\u0161\x03\x02\x02\x02\u0870\u0871" +
		"\t*\x02\x02\u0871\u0163\x03\x02\x02\x02\u0872\u0873\t+\x02\x02\u0873\u0165" +
		"\x03\x02\x02\x02\u0874\u0875\t,\x02\x02\u0875\u0167\x03\x02\x02\x02\u0876" +
		"\u0877\t-\x02\x02\u0877\u0169\x03\x02\x02\x02\u0878\u0879\t.\x02\x02\u0879" +
		"\u016B\x03\x02\x02\x02\u087A\u087B\t/\x02\x02\u087B\u016D\x03\x02\x02" +
		"\x02\u087C\u087D\t0\x02\x02\u087D\u016F\x03\x02\x02\x02\xFC\u0178\u017B" +
		"\u017D\u018C\u019E\u01A2\u01AB\u01B0\u01B7\u01BE\u01C2\u01CB\u01D7\u01DA" +
		"\u01E1\u01E9\u01EE\u01F1\u01F8\u0200\u0204\u0210\u0218\u021C\u0232\u0237" +
		"\u023B\u023F\u0243\u024C\u0251\u0255\u0259\u025D\u0260\u0264\u0269\u026F" +
		"\u0274\u0279\u027C\u0280\u0288\u0290\u0294\u0298\u029C\u02A0\u02A4\u02A8" +
		"\u02AC\u02B0\u02B2\u02BC\u02C4\u02DC\u02E3\u02E9\u02EC\u02EF\u02F9\u02FC" +
		"\u0304\u0310\u0328\u0335\u033A\u033E\u0346\u034A\u0352\u035C\u0360\u0366" +
		"\u036A\u036E\u0371\u037A\u037E\u0385\u0388\u0392\u039A\u03A2\u03A6\u03B5" +
		"\u03C8\u03D3\u03D7\u03DE\u03E3\u03E9\u03ED\u03F4\u03F8\u03FC\u0400\u0408" +
		"\u040C\u0411\u0417\u041D\u0420\u0424\u042F\u0438\u0446\u0452\u0461\u0464" +
		"\u0468\u046B\u046D\u0472\u0476\u0479\u047D\u0486\u048F\u0499\u049E\u04AA" +
		"\u04AD\u04B0\u04B3\u04B9\u04BD\u04C5\u04C8\u04CD\u04D0\u04D2\u04E0\u04EB" +
		"\u04F0\u04F8\u04FB\u04FE\u0503\u0505\u0507\u050C\u050F\u0513\u0516\u0519" +
		"\u0525\u052C\u0537\u0554\u056A\u057C\u0581\u058D\u059A\u05A6\u05B2\u05B7" +
		"\u05D2\u05DA\u05DE\u05E1\u05E4\u05EB\u05EE\u05F1\u05F4\u05F7\u05FA\u05FF" +
		"\u0602\u060B\u0610\u0614\u0619\u0622\u0635\u063D\u0645\u0649\u064D\u0657" +
		"\u0671\u0679\u0685\u069B\u069D\u06A8\u06AB\u06AD\u06B1\u06B5\u06BC\u06C5" +
		"\u06CB\u06D8\u06DF\u06E4\u06EA\u06F1\u06F3\u06F6\u0702\u0707\u070A\u0710" +
		"\u0712\u0718\u072F\u0731\u0739\u073D\u0746\u074A\u075A\u0763\u077B\u0782" +
		"\u0785\u078F\u0798\u079E\u07A4\u07AC\u07B1\u07B5\u07BC\u07C1\u07C9\u07CD" +
		"\u07D0\u07D4\u07D7\u07DB\u07E4\u07E7\u07F2\u07F8\u0808\u081B\u0822\u0825" +
		"\u082A\u0830\u0838\u0848\u0851\u085B\u0862\u0865";
	public static readonly _serializedATN: string = Utils.join(
		[
			FlinkSqlParser._serializedATNSegment0,
			FlinkSqlParser._serializedATNSegment1,
			FlinkSqlParser._serializedATNSegment2,
			FlinkSqlParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FlinkSqlParser.__ATN) {
			FlinkSqlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FlinkSqlParser._serializedATN));
		}

		return FlinkSqlParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public EOF(): TerminalNode { return this.getToken(FlinkSqlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_program; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
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
	public EOF(): TerminalNode { return this.getToken(FlinkSqlParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_statement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
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
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.SEMICOLON);
		} else {
			return this.getToken(FlinkSqlParser.SEMICOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_sqlStatements; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSqlStatements) {
			listener.enterSqlStatements(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSqlStatements) {
			listener.exitSqlStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSqlStatements) {
			return visitor.visitSqlStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlStatementContext extends ParserRuleContext {
	public ddlStatement(): DdlStatementContext | undefined {
		return this.tryGetRuleContext(0, DdlStatementContext);
	}
	public dmlStatement(): DmlStatementContext | undefined {
		return this.tryGetRuleContext(0, DmlStatementContext);
	}
	public describeStatement(): DescribeStatementContext | undefined {
		return this.tryGetRuleContext(0, DescribeStatementContext);
	}
	public explainStatement(): ExplainStatementContext | undefined {
		return this.tryGetRuleContext(0, ExplainStatementContext);
	}
	public useStatement(): UseStatementContext | undefined {
		return this.tryGetRuleContext(0, UseStatementContext);
	}
	public showStatememt(): ShowStatememtContext | undefined {
		return this.tryGetRuleContext(0, ShowStatememtContext);
	}
	public loadStatement(): LoadStatementContext | undefined {
		return this.tryGetRuleContext(0, LoadStatementContext);
	}
	public unloadStatememt(): UnloadStatememtContext | undefined {
		return this.tryGetRuleContext(0, UnloadStatememtContext);
	}
	public setStatememt(): SetStatememtContext | undefined {
		return this.tryGetRuleContext(0, SetStatememtContext);
	}
	public resetStatememt(): ResetStatememtContext | undefined {
		return this.tryGetRuleContext(0, ResetStatememtContext);
	}
	public jarStatememt(): JarStatememtContext | undefined {
		return this.tryGetRuleContext(0, JarStatememtContext);
	}
	public dtAddStatement(): DtAddStatementContext | undefined {
		return this.tryGetRuleContext(0, DtAddStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_sqlStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSqlStatement) {
			listener.enterSqlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSqlStatement) {
			listener.exitSqlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSqlStatement) {
			return visitor.visitSqlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	public SEMICOLON(): TerminalNode { return this.getToken(FlinkSqlParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_emptyStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterEmptyStatement) {
			listener.enterEmptyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitEmptyStatement) {
			listener.exitEmptyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitEmptyStatement) {
			return visitor.visitEmptyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DdlStatementContext extends ParserRuleContext {
	public createTable(): CreateTableContext | undefined {
		return this.tryGetRuleContext(0, CreateTableContext);
	}
	public createDatabase(): CreateDatabaseContext | undefined {
		return this.tryGetRuleContext(0, CreateDatabaseContext);
	}
	public createView(): CreateViewContext | undefined {
		return this.tryGetRuleContext(0, CreateViewContext);
	}
	public createFunction(): CreateFunctionContext | undefined {
		return this.tryGetRuleContext(0, CreateFunctionContext);
	}
	public createCatalog(): CreateCatalogContext | undefined {
		return this.tryGetRuleContext(0, CreateCatalogContext);
	}
	public alterTable(): AlterTableContext | undefined {
		return this.tryGetRuleContext(0, AlterTableContext);
	}
	public alertView(): AlertViewContext | undefined {
		return this.tryGetRuleContext(0, AlertViewContext);
	}
	public alterDatabase(): AlterDatabaseContext | undefined {
		return this.tryGetRuleContext(0, AlterDatabaseContext);
	}
	public alterFunction(): AlterFunctionContext | undefined {
		return this.tryGetRuleContext(0, AlterFunctionContext);
	}
	public dropCatalog(): DropCatalogContext | undefined {
		return this.tryGetRuleContext(0, DropCatalogContext);
	}
	public dropTable(): DropTableContext | undefined {
		return this.tryGetRuleContext(0, DropTableContext);
	}
	public dropDatabase(): DropDatabaseContext | undefined {
		return this.tryGetRuleContext(0, DropDatabaseContext);
	}
	public dropView(): DropViewContext | undefined {
		return this.tryGetRuleContext(0, DropViewContext);
	}
	public dropFunction(): DropFunctionContext | undefined {
		return this.tryGetRuleContext(0, DropFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_ddlStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDdlStatement) {
			listener.enterDdlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDdlStatement) {
			listener.exitDdlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDdlStatement) {
			return visitor.visitDdlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DmlStatementContext extends ParserRuleContext {
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	public insertStatement(): InsertStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dmlStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDmlStatement) {
			listener.enterDmlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDmlStatement) {
			listener.exitDmlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDmlStatement) {
			return visitor.visitDmlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescribeStatementContext extends ParserRuleContext {
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DESCRIBE, 0); }
	public KW_DESC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DESC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_describeStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDescribeStatement) {
			listener.enterDescribeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDescribeStatement) {
			listener.exitDescribeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDescribeStatement) {
			return visitor.visitDescribeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplainStatementContext extends ParserRuleContext {
	public KW_EXPLAIN(): TerminalNode { return this.getToken(FlinkSqlParser.KW_EXPLAIN, 0); }
	public dmlStatement(): DmlStatementContext | undefined {
		return this.tryGetRuleContext(0, DmlStatementContext);
	}
	public insertSimpleStatement(): InsertSimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertSimpleStatementContext);
	}
	public insertMulStatement(): InsertMulStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertMulStatementContext);
	}
	public explainDetails(): ExplainDetailsContext | undefined {
		return this.tryGetRuleContext(0, ExplainDetailsContext);
	}
	public KW_PLAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PLAN, 0); }
	public KW_FOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_explainStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterExplainStatement) {
			listener.enterExplainStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitExplainStatement) {
			listener.exitExplainStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitExplainStatement) {
			return visitor.visitExplainStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplainDetailsContext extends ParserRuleContext {
	public explainDetail(): ExplainDetailContext[];
	public explainDetail(i: number): ExplainDetailContext;
	public explainDetail(i?: number): ExplainDetailContext | ExplainDetailContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExplainDetailContext);
		} else {
			return this.getRuleContext(i, ExplainDetailContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_explainDetails; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterExplainDetails) {
			listener.enterExplainDetails(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitExplainDetails) {
			listener.exitExplainDetails(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitExplainDetails) {
			return visitor.visitExplainDetails(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplainDetailContext extends ParserRuleContext {
	public KW_CHANGELOG_MODE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CHANGELOG_MODE, 0); }
	public KW_JSON_EXECUTION_PLAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JSON_EXECUTION_PLAN, 0); }
	public KW_ESTIMATED_COST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ESTIMATED_COST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_explainDetail; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterExplainDetail) {
			listener.enterExplainDetail(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitExplainDetail) {
			listener.exitExplainDetail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitExplainDetail) {
			return visitor.visitExplainDetail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UseStatementContext extends ParserRuleContext {
	public KW_USE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_USE, 0); }
	public uid(): UidContext | undefined {
		return this.tryGetRuleContext(0, UidContext);
	}
	public KW_CATALOG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CATALOG, 0); }
	public useModuleStatement(): UseModuleStatementContext | undefined {
		return this.tryGetRuleContext(0, UseModuleStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_useStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUseStatement) {
			listener.enterUseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUseStatement) {
			listener.exitUseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUseStatement) {
			return visitor.visitUseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UseModuleStatementContext extends ParserRuleContext {
	public KW_USE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_USE, 0); }
	public KW_MODULES(): TerminalNode { return this.getToken(FlinkSqlParser.KW_MODULES, 0); }
	public uid(): UidContext[];
	public uid(i: number): UidContext;
	public uid(i?: number): UidContext | UidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UidContext);
		} else {
			return this.getRuleContext(i, UidContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_useModuleStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUseModuleStatement) {
			listener.enterUseModuleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUseModuleStatement) {
			listener.exitUseModuleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUseModuleStatement) {
			return visitor.visitUseModuleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShowStatememtContext extends ParserRuleContext {
	public KW_SHOW(): TerminalNode { return this.getToken(FlinkSqlParser.KW_SHOW, 0); }
	public KW_CATALOGS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CATALOGS, 0); }
	public KW_DATABASES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATABASES, 0); }
	public KW_VIEWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VIEWS, 0); }
	public KW_JARS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JARS, 0); }
	public KW_CURRENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CURRENT, 0); }
	public KW_CATALOG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CATALOG, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATABASE, 0); }
	public KW_TABLES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TABLES, 0); }
	public uid(): UidContext | undefined {
		return this.tryGetRuleContext(0, UidContext);
	}
	public likePredicate(): LikePredicateContext | undefined {
		return this.tryGetRuleContext(0, LikePredicateContext);
	}
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FROM, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IN, 0); }
	public KW_COLUMNS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COLUMNS, 0); }
	public KW_CREATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TABLE, 0); }
	public KW_VIEW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VIEW, 0); }
	public KW_FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FUNCTIONS, 0); }
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_USER, 0); }
	public KW_MODULES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MODULES, 0); }
	public KW_FULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_showStatememt; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterShowStatememt) {
			listener.enterShowStatememt(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitShowStatememt) {
			listener.exitShowStatememt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitShowStatememt) {
			return visitor.visitShowStatememt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoadStatementContext extends ParserRuleContext {
	public KW_LOAD(): TerminalNode { return this.getToken(FlinkSqlParser.KW_LOAD, 0); }
	public KW_MODULE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_MODULE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WITH, 0); }
	public tablePropertyList(): TablePropertyListContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_loadStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLoadStatement) {
			listener.enterLoadStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLoadStatement) {
			listener.exitLoadStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLoadStatement) {
			return visitor.visitLoadStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnloadStatememtContext extends ParserRuleContext {
	public KW_UNLOAD(): TerminalNode { return this.getToken(FlinkSqlParser.KW_UNLOAD, 0); }
	public KW_MODULE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_MODULE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_unloadStatememt; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUnloadStatememt) {
			listener.enterUnloadStatememt(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUnloadStatememt) {
			listener.exitUnloadStatememt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUnloadStatememt) {
			return visitor.visitUnloadStatememt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetStatememtContext extends ParserRuleContext {
	public KW_SET(): TerminalNode { return this.getToken(FlinkSqlParser.KW_SET, 0); }
	public tableProperty(): TablePropertyContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_setStatememt; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSetStatememt) {
			listener.enterSetStatememt(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSetStatememt) {
			listener.exitSetStatememt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSetStatememt) {
			return visitor.visitSetStatememt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResetStatememtContext extends ParserRuleContext {
	public KW_RESET(): TerminalNode { return this.getToken(FlinkSqlParser.KW_RESET, 0); }
	public tablePropertyKey(): TablePropertyKeyContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyKeyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_resetStatememt; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterResetStatememt) {
			listener.enterResetStatememt(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitResetStatememt) {
			listener.exitResetStatememt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitResetStatememt) {
			return visitor.visitResetStatememt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JarStatememtContext extends ParserRuleContext {
	public KW_JAR(): TerminalNode { return this.getToken(FlinkSqlParser.KW_JAR, 0); }
	public jarFileName(): JarFileNameContext {
		return this.getRuleContext(0, JarFileNameContext);
	}
	public KW_ADD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ADD, 0); }
	public KW_REMOVE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_REMOVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_jarStatememt; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterJarStatememt) {
			listener.enterJarStatememt(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitJarStatememt) {
			listener.exitJarStatememt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitJarStatememt) {
			return visitor.visitJarStatememt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DtAddStatementContext extends ParserRuleContext {
	public KW_ADD(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ADD, 0); }
	public KW_JAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JAR, 0); }
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WITH, 0); }
	public dtFilePath(): DtFilePathContext {
		return this.getRuleContext(0, DtFilePathContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AS, 0); }
	public uid(): UidContext[];
	public uid(i: number): UidContext;
	public uid(i?: number): UidContext | UidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UidContext);
		} else {
			return this.getRuleContext(i, UidContext);
		}
	}
	public KW_FILE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FILE, 0); }
	public KW_RENAME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RENAME, 0); }
	public KW_PYTHON_FILES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_FILES, 0); }
	public KW_PYTHON_REQUIREMENTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_REQUIREMENTS, 0); }
	public KW_PYTHON_DEPENDENCIES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_DEPENDENCIES, 0); }
	public KW_PYTHON_JAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_JAR, 0); }
	public KW_PYTHON_ARCHIVES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_ARCHIVES, 0); }
	public KW_PYTHON_PARAMETER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_PARAMETER, 0); }
	public KW_ENGINE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ENGINE, 0); }
	public KW_KEY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_KEY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dtAddStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDtAddStatement) {
			listener.enterDtAddStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDtAddStatement) {
			listener.exitDtAddStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDtAddStatement) {
			return visitor.visitDtAddStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DtFilePathContext extends ParserRuleContext {
	public SLASH_TEXT(): TerminalNode[];
	public SLASH_TEXT(i: number): TerminalNode;
	public SLASH_TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.SLASH_TEXT);
		} else {
			return this.getToken(FlinkSqlParser.SLASH_TEXT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dtFilePath; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDtFilePath) {
			listener.enterDtFilePath(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDtFilePath) {
			listener.exitDtFilePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDtFilePath) {
			return visitor.visitDtFilePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateTableContext extends ParserRuleContext {
	public simpleCreateTable(): SimpleCreateTableContext | undefined {
		return this.tryGetRuleContext(0, SimpleCreateTableContext);
	}
	public createTableAsSelect(): CreateTableAsSelectContext | undefined {
		return this.tryGetRuleContext(0, CreateTableAsSelectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_createTable; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCreateTable) {
			listener.enterCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCreateTable) {
			listener.exitCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateTable) {
			return visitor.visitCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleCreateTableContext extends ParserRuleContext {
	public KW_CREATE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_TABLE, 0); }
	public sourceTable(): SourceTableContext {
		return this.getRuleContext(0, SourceTableContext);
	}
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public columnOptionDefinition(): ColumnOptionDefinitionContext[];
	public columnOptionDefinition(i: number): ColumnOptionDefinitionContext;
	public columnOptionDefinition(i?: number): ColumnOptionDefinitionContext | ColumnOptionDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnOptionDefinitionContext);
		} else {
			return this.getRuleContext(i, ColumnOptionDefinitionContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public withOption(): WithOptionContext {
		return this.getRuleContext(0, WithOptionContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TEMPORARY, 0); }
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	public watermarkDefinition(): WatermarkDefinitionContext | undefined {
		return this.tryGetRuleContext(0, WatermarkDefinitionContext);
	}
	public tableConstraint(): TableConstraintContext | undefined {
		return this.tryGetRuleContext(0, TableConstraintContext);
	}
	public selfDefinitionClause(): SelfDefinitionClauseContext | undefined {
		return this.tryGetRuleContext(0, SelfDefinitionClauseContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	public partitionDefinition(): PartitionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, PartitionDefinitionContext);
	}
	public likeDefinition(): LikeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, LikeDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_simpleCreateTable; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSimpleCreateTable) {
			listener.enterSimpleCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSimpleCreateTable) {
			listener.exitSimpleCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSimpleCreateTable) {
			return visitor.visitSimpleCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateTableAsSelectContext extends ParserRuleContext {
	public KW_CREATE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CREATE, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_TABLE, 0); }
	public sourceTable(): SourceTableContext {
		return this.getRuleContext(0, SourceTableContext);
	}
	public withOption(): WithOptionContext {
		return this.getRuleContext(0, WithOptionContext);
	}
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AS, 0); }
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_createTableAsSelect; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCreateTableAsSelect) {
			listener.enterCreateTableAsSelect(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCreateTableAsSelect) {
			listener.exitCreateTableAsSelect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateTableAsSelect) {
			return visitor.visitCreateTableAsSelect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnOptionDefinitionContext extends ParserRuleContext {
	public physicalColumnDefinition(): PhysicalColumnDefinitionContext | undefined {
		return this.tryGetRuleContext(0, PhysicalColumnDefinitionContext);
	}
	public metadataColumnDefinition(): MetadataColumnDefinitionContext | undefined {
		return this.tryGetRuleContext(0, MetadataColumnDefinitionContext);
	}
	public computedColumnDefinition(): ComputedColumnDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ComputedColumnDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnOptionDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnOptionDefinition) {
			listener.enterColumnOptionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnOptionDefinition) {
			listener.exitColumnOptionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnOptionDefinition) {
			return visitor.visitColumnOptionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PhysicalColumnDefinitionContext extends ParserRuleContext {
	public columnName(): ColumnNameContext {
		return this.getRuleContext(0, ColumnNameContext);
	}
	public columnType(): ColumnTypeContext {
		return this.getRuleContext(0, ColumnTypeContext);
	}
	public columnConstraint(): ColumnConstraintContext | undefined {
		return this.tryGetRuleContext(0, ColumnConstraintContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_physicalColumnDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPhysicalColumnDefinition) {
			listener.enterPhysicalColumnDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPhysicalColumnDefinition) {
			listener.exitPhysicalColumnDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPhysicalColumnDefinition) {
			return visitor.visitPhysicalColumnDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnNameContext extends ParserRuleContext {
	public uid(): UidContext | undefined {
		return this.tryGetRuleContext(0, UidContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnName) {
			listener.enterColumnName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnName) {
			listener.exitColumnName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnName) {
			return visitor.visitColumnName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnNameListContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public columnName(): ColumnNameContext[];
	public columnName(i: number): ColumnNameContext;
	public columnName(i?: number): ColumnNameContext | ColumnNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnNameContext);
		} else {
			return this.getRuleContext(i, ColumnNameContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnNameList; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnNameList) {
			listener.enterColumnNameList(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnNameList) {
			listener.exitColumnNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnNameList) {
			return visitor.visitColumnNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnTypeContext extends ParserRuleContext {
	public _typeName!: Token;
	public _type!: Token;
	public KW_DATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATE, 0); }
	public KW_BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BOOLEAN, 0); }
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULL, 0); }
	public KW_CHAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CHAR, 0); }
	public KW_VARCHAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VARCHAR, 0); }
	public KW_STRING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STRING, 0); }
	public KW_BINARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BINARY, 0); }
	public KW_VARBINARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VARBINARY, 0); }
	public KW_BYTES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BYTES, 0); }
	public KW_TINYINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TINYINT, 0); }
	public KW_SMALLINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SMALLINT, 0); }
	public KW_INT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INT, 0); }
	public KW_INTEGER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INTEGER, 0); }
	public KW_BIGINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BIGINT, 0); }
	public KW_TIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIME, 0); }
	public KW_TIMESTAMP_LTZ(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMESTAMP_LTZ, 0); }
	public KW_DATETIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATETIME, 0); }
	public lengthOneDimension(): LengthOneDimensionContext | undefined {
		return this.tryGetRuleContext(0, LengthOneDimensionContext);
	}
	public KW_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMESTAMP, 0); }
	public KW_ZONE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ZONE, 0); }
	public KW_WITHOUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WITHOUT, 0); }
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WITH, 0); }
	public KW_LOCAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LOCAL, 0); }
	public KW_DECIMAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DECIMAL, 0); }
	public KW_DEC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DEC, 0); }
	public KW_NUMERIC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NUMERIC, 0); }
	public KW_FLOAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FLOAT, 0); }
	public KW_DOUBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DOUBLE, 0); }
	public lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext | undefined {
		return this.tryGetRuleContext(0, LengthTwoOptionalDimensionContext);
	}
	public KW_ARRAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ARRAY, 0); }
	public KW_MULTISET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MULTISET, 0); }
	public lengthOneTypeDimension(): LengthOneTypeDimensionContext | undefined {
		return this.tryGetRuleContext(0, LengthOneTypeDimensionContext);
	}
	public KW_MAP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MAP, 0); }
	public mapTypeDimension(): MapTypeDimensionContext | undefined {
		return this.tryGetRuleContext(0, MapTypeDimensionContext);
	}
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROW, 0); }
	public rowTypeDimension(): RowTypeDimensionContext | undefined {
		return this.tryGetRuleContext(0, RowTypeDimensionContext);
	}
	public KW_RAW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RAW, 0); }
	public lengthTwoStringDimension(): LengthTwoStringDimensionContext | undefined {
		return this.tryGetRuleContext(0, LengthTwoStringDimensionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnType; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnType) {
			listener.enterColumnType(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnType) {
			listener.exitColumnType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnType) {
			return visitor.visitColumnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LengthOneDimensionContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public decimalLiteral(): DecimalLiteralContext {
		return this.getRuleContext(0, DecimalLiteralContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_lengthOneDimension; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLengthOneDimension) {
			listener.enterLengthOneDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLengthOneDimension) {
			listener.exitLengthOneDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLengthOneDimension) {
			return visitor.visitLengthOneDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LengthTwoOptionalDimensionContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public decimalLiteral(): DecimalLiteralContext[];
	public decimalLiteral(i: number): DecimalLiteralContext;
	public decimalLiteral(i?: number): DecimalLiteralContext | DecimalLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DecimalLiteralContext);
		} else {
			return this.getRuleContext(i, DecimalLiteralContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_lengthTwoOptionalDimension; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLengthTwoOptionalDimension) {
			listener.enterLengthTwoOptionalDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLengthTwoOptionalDimension) {
			listener.exitLengthTwoOptionalDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLengthTwoOptionalDimension) {
			return visitor.visitLengthTwoOptionalDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LengthTwoStringDimensionContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public stringLiteral(): StringLiteralContext[];
	public stringLiteral(i: number): StringLiteralContext;
	public stringLiteral(i?: number): StringLiteralContext | StringLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringLiteralContext);
		} else {
			return this.getRuleContext(i, StringLiteralContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_lengthTwoStringDimension; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLengthTwoStringDimension) {
			listener.enterLengthTwoStringDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLengthTwoStringDimension) {
			listener.exitLengthTwoStringDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLengthTwoStringDimension) {
			return visitor.visitLengthTwoStringDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LengthOneTypeDimensionContext extends ParserRuleContext {
	public LESS_SYMBOL(): TerminalNode { return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0); }
	public columnType(): ColumnTypeContext {
		return this.getRuleContext(0, ColumnTypeContext);
	}
	public GREATER_SYMBOL(): TerminalNode { return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_lengthOneTypeDimension; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLengthOneTypeDimension) {
			listener.enterLengthOneTypeDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLengthOneTypeDimension) {
			listener.exitLengthOneTypeDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLengthOneTypeDimension) {
			return visitor.visitLengthOneTypeDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapTypeDimensionContext extends ParserRuleContext {
	public LESS_SYMBOL(): TerminalNode { return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0); }
	public columnType(): ColumnTypeContext[];
	public columnType(i: number): ColumnTypeContext;
	public columnType(i?: number): ColumnTypeContext | ColumnTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnTypeContext);
		} else {
			return this.getRuleContext(i, ColumnTypeContext);
		}
	}
	public GREATER_SYMBOL(): TerminalNode { return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_mapTypeDimension; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterMapTypeDimension) {
			listener.enterMapTypeDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitMapTypeDimension) {
			listener.exitMapTypeDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitMapTypeDimension) {
			return visitor.visitMapTypeDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowTypeDimensionContext extends ParserRuleContext {
	public LESS_SYMBOL(): TerminalNode { return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0); }
	public columnName(): ColumnNameContext[];
	public columnName(i: number): ColumnNameContext;
	public columnName(i?: number): ColumnNameContext | ColumnNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnNameContext);
		} else {
			return this.getRuleContext(i, ColumnNameContext);
		}
	}
	public columnType(): ColumnTypeContext[];
	public columnType(i: number): ColumnTypeContext;
	public columnType(i?: number): ColumnTypeContext | ColumnTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnTypeContext);
		} else {
			return this.getRuleContext(i, ColumnTypeContext);
		}
	}
	public GREATER_SYMBOL(): TerminalNode { return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_rowTypeDimension; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterRowTypeDimension) {
			listener.enterRowTypeDimension(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitRowTypeDimension) {
			listener.exitRowTypeDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitRowTypeDimension) {
			return visitor.visitRowTypeDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnConstraintContext extends ParserRuleContext {
	public KW_PRIMARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PRIMARY, 0); }
	public KW_KEY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_KEY, 0); }
	public KW_CONSTRAINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONSTRAINT, 0); }
	public constraintName(): ConstraintNameContext | undefined {
		return this.tryGetRuleContext(0, ConstraintNameContext);
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NOT, 0); }
	public KW_ENFORCED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ENFORCED, 0); }
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnConstraint; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnConstraint) {
			listener.enterColumnConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnConstraint) {
			listener.exitColumnConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnConstraint) {
			return visitor.visitColumnConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentSpecContext extends ParserRuleContext {
	public KW_COMMENT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_COMMENT, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_commentSpec; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCommentSpec) {
			listener.enterCommentSpec(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCommentSpec) {
			listener.exitCommentSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCommentSpec) {
			return visitor.visitCommentSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MetadataColumnDefinitionContext extends ParserRuleContext {
	public columnName(): ColumnNameContext {
		return this.getRuleContext(0, ColumnNameContext);
	}
	public columnType(): ColumnTypeContext {
		return this.getRuleContext(0, ColumnTypeContext);
	}
	public KW_METADATA(): TerminalNode { return this.getToken(FlinkSqlParser.KW_METADATA, 0); }
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FROM, 0); }
	public metadataKey(): MetadataKeyContext | undefined {
		return this.tryGetRuleContext(0, MetadataKeyContext);
	}
	public KW_VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VIRTUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_metadataColumnDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterMetadataColumnDefinition) {
			listener.enterMetadataColumnDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitMetadataColumnDefinition) {
			listener.exitMetadataColumnDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitMetadataColumnDefinition) {
			return visitor.visitMetadataColumnDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MetadataKeyContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_metadataKey; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterMetadataKey) {
			listener.enterMetadataKey(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitMetadataKey) {
			listener.exitMetadataKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitMetadataKey) {
			return visitor.visitMetadataKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComputedColumnDefinitionContext extends ParserRuleContext {
	public columnName(): ColumnNameContext {
		return this.getRuleContext(0, ColumnNameContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	public computedColumnExpression(): ComputedColumnExpressionContext {
		return this.getRuleContext(0, ComputedColumnExpressionContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_computedColumnDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterComputedColumnDefinition) {
			listener.enterComputedColumnDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitComputedColumnDefinition) {
			listener.exitComputedColumnDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitComputedColumnDefinition) {
			return visitor.visitComputedColumnDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComputedColumnExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_computedColumnExpression; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterComputedColumnExpression) {
			listener.enterComputedColumnExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitComputedColumnExpression) {
			listener.exitComputedColumnExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitComputedColumnExpression) {
			return visitor.visitComputedColumnExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WatermarkDefinitionContext extends ParserRuleContext {
	public KW_WATERMARK(): TerminalNode { return this.getToken(FlinkSqlParser.KW_WATERMARK, 0); }
	public KW_FOR(): TerminalNode { return this.getToken(FlinkSqlParser.KW_FOR, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_watermarkDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWatermarkDefinition) {
			listener.enterWatermarkDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWatermarkDefinition) {
			listener.exitWatermarkDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWatermarkDefinition) {
			return visitor.visitWatermarkDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableConstraintContext extends ParserRuleContext {
	public KW_PRIMARY(): TerminalNode { return this.getToken(FlinkSqlParser.KW_PRIMARY, 0); }
	public KW_KEY(): TerminalNode { return this.getToken(FlinkSqlParser.KW_KEY, 0); }
	public columnNameList(): ColumnNameListContext {
		return this.getRuleContext(0, ColumnNameListContext);
	}
	public KW_NOT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_NOT, 0); }
	public KW_ENFORCED(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ENFORCED, 0); }
	public KW_CONSTRAINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONSTRAINT, 0); }
	public constraintName(): ConstraintNameContext | undefined {
		return this.tryGetRuleContext(0, ConstraintNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tableConstraint; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTableConstraint) {
			listener.enterTableConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTableConstraint) {
			listener.exitTableConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTableConstraint) {
			return visitor.visitTableConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstraintNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_constraintName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterConstraintName) {
			listener.enterConstraintName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitConstraintName) {
			listener.exitConstraintName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitConstraintName) {
			return visitor.visitConstraintName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelfDefinitionClauseContext extends ParserRuleContext {
	public KW_PERIOD(): TerminalNode { return this.getToken(FlinkSqlParser.KW_PERIOD, 0); }
	public KW_FOR(): TerminalNode { return this.getToken(FlinkSqlParser.KW_FOR, 0); }
	public KW_SYSTEM_TIME(): TerminalNode { return this.getToken(FlinkSqlParser.KW_SYSTEM_TIME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_selfDefinitionClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSelfDefinitionClause) {
			listener.enterSelfDefinitionClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSelfDefinitionClause) {
			listener.exitSelfDefinitionClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSelfDefinitionClause) {
			return visitor.visitSelfDefinitionClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartitionDefinitionContext extends ParserRuleContext {
	public KW_PARTITIONED(): TerminalNode { return this.getToken(FlinkSqlParser.KW_PARTITIONED, 0); }
	public KW_BY(): TerminalNode { return this.getToken(FlinkSqlParser.KW_BY, 0); }
	public transformList(): TransformListContext {
		return this.getRuleContext(0, TransformListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_partitionDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPartitionDefinition) {
			listener.enterPartitionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPartitionDefinition) {
			listener.exitPartitionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPartitionDefinition) {
			return visitor.visitPartitionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformListContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public transform(): TransformContext[];
	public transform(i: number): TransformContext;
	public transform(i?: number): TransformContext | TransformContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransformContext);
		} else {
			return this.getRuleContext(i, TransformContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_transformList; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTransformList) {
			listener.enterTransformList(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTransformList) {
			listener.exitTransformList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTransformList) {
			return visitor.visitTransformList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_transform; }
	public copyFrom(ctx: TransformContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentityTransformContext extends TransformContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: TransformContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIdentityTransform) {
			listener.enterIdentityTransform(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIdentityTransform) {
			listener.exitIdentityTransform(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIdentityTransform) {
			return visitor.visitIdentityTransform(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ApplyTransformContext extends TransformContext {
	public _transformName!: IdentifierContext;
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public transformArgument(): TransformArgumentContext[];
	public transformArgument(i: number): TransformArgumentContext;
	public transformArgument(i?: number): TransformArgumentContext | TransformArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransformArgumentContext);
		} else {
			return this.getRuleContext(i, TransformArgumentContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(ctx: TransformContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterApplyTransform) {
			listener.enterApplyTransform(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitApplyTransform) {
			listener.exitApplyTransform(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitApplyTransform) {
			return visitor.visitApplyTransform(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformArgumentContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_transformArgument; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTransformArgument) {
			listener.enterTransformArgument(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTransformArgument) {
			listener.exitTransformArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTransformArgument) {
			return visitor.visitTransformArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LikeDefinitionContext extends ParserRuleContext {
	public KW_LIKE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_LIKE, 0); }
	public sourceTable(): SourceTableContext {
		return this.getRuleContext(0, SourceTableContext);
	}
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RR_BRACKET, 0); }
	public likeOption(): LikeOptionContext[];
	public likeOption(i: number): LikeOptionContext;
	public likeOption(i?: number): LikeOptionContext | LikeOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LikeOptionContext);
		} else {
			return this.getRuleContext(i, LikeOptionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_likeDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLikeDefinition) {
			listener.enterLikeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLikeDefinition) {
			listener.exitLikeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLikeDefinition) {
			return visitor.visitLikeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceTableContext extends ParserRuleContext {
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_sourceTable; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSourceTable) {
			listener.enterSourceTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSourceTable) {
			listener.exitSourceTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSourceTable) {
			return visitor.visitSourceTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LikeOptionContext extends ParserRuleContext {
	public KW_INCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INCLUDING, 0); }
	public KW_EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXCLUDING, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALL, 0); }
	public KW_CONSTRAINTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONSTRAINTS, 0); }
	public KW_PARTITIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PARTITIONS, 0); }
	public KW_OVERWRITING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OVERWRITING, 0); }
	public KW_GENERATED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GENERATED, 0); }
	public KW_OPTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OPTIONS, 0); }
	public KW_WATERMARKS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WATERMARKS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_likeOption; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLikeOption) {
			listener.enterLikeOption(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLikeOption) {
			listener.exitLikeOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLikeOption) {
			return visitor.visitLikeOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateCatalogContext extends ParserRuleContext {
	public KW_CREATE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CREATE, 0); }
	public KW_CATALOG(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CATALOG, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public withOption(): WithOptionContext {
		return this.getRuleContext(0, WithOptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_createCatalog; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCreateCatalog) {
			listener.enterCreateCatalog(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCreateCatalog) {
			listener.exitCreateCatalog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateCatalog) {
			return visitor.visitCreateCatalog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateDatabaseContext extends ParserRuleContext {
	public KW_CREATE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CREATE, 0); }
	public KW_DATABASE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DATABASE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public withOption(): WithOptionContext {
		return this.getRuleContext(0, WithOptionContext);
	}
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_createDatabase; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCreateDatabase) {
			listener.enterCreateDatabase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCreateDatabase) {
			listener.exitCreateDatabase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateDatabase) {
			return visitor.visitCreateDatabase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateViewContext extends ParserRuleContext {
	public KW_CREATE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CREATE, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(FlinkSqlParser.KW_VIEW, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TEMPORARY, 0); }
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public columnNameList(): ColumnNameListContext | undefined {
		return this.tryGetRuleContext(0, ColumnNameListContext);
	}
	public commentSpec(): CommentSpecContext | undefined {
		return this.tryGetRuleContext(0, CommentSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_createView; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCreateView) {
			listener.enterCreateView(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCreateView) {
			listener.exitCreateView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateView) {
			return visitor.visitCreateView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateFunctionContext extends ParserRuleContext {
	public KW_CREATE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CREATE, 0); }
	public KW_FUNCTION(): TerminalNode { return this.getToken(FlinkSqlParser.KW_FUNCTION, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TEMPORARY, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SYSTEM, 0); }
	public ifNotExists(): IfNotExistsContext | undefined {
		return this.tryGetRuleContext(0, IfNotExistsContext);
	}
	public KW_LANGUAGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LANGUAGE, 0); }
	public usingClause(): UsingClauseContext | undefined {
		return this.tryGetRuleContext(0, UsingClauseContext);
	}
	public KW_JAVA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JAVA, 0); }
	public KW_SCALA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SCALA, 0); }
	public KW_PYTHON(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_createFunction; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCreateFunction) {
			listener.enterCreateFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCreateFunction) {
			listener.exitCreateFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCreateFunction) {
			return visitor.visitCreateFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingClauseContext extends ParserRuleContext {
	public KW_USING(): TerminalNode { return this.getToken(FlinkSqlParser.KW_USING, 0); }
	public KW_JAR(): TerminalNode[];
	public KW_JAR(i: number): TerminalNode;
	public KW_JAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.KW_JAR);
		} else {
			return this.getToken(FlinkSqlParser.KW_JAR, i);
		}
	}
	public jarFileName(): JarFileNameContext[];
	public jarFileName(i: number): JarFileNameContext;
	public jarFileName(i?: number): JarFileNameContext | JarFileNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JarFileNameContext);
		} else {
			return this.getRuleContext(i, JarFileNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_usingClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUsingClause) {
			listener.enterUsingClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUsingClause) {
			listener.exitUsingClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUsingClause) {
			return visitor.visitUsingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JarFileNameContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_jarFileName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterJarFileName) {
			listener.enterJarFileName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitJarFileName) {
			listener.exitJarFileName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitJarFileName) {
			return visitor.visitJarFileName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterTableContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ALTER, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_TABLE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public renameDefinition(): RenameDefinitionContext | undefined {
		return this.tryGetRuleContext(0, RenameDefinitionContext);
	}
	public setKeyValueDefinition(): SetKeyValueDefinitionContext | undefined {
		return this.tryGetRuleContext(0, SetKeyValueDefinitionContext);
	}
	public addConstraint(): AddConstraintContext | undefined {
		return this.tryGetRuleContext(0, AddConstraintContext);
	}
	public dropConstraint(): DropConstraintContext | undefined {
		return this.tryGetRuleContext(0, DropConstraintContext);
	}
	public addUnique(): AddUniqueContext | undefined {
		return this.tryGetRuleContext(0, AddUniqueContext);
	}
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_alterTable; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterAlterTable) {
			listener.enterAlterTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitAlterTable) {
			listener.exitAlterTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterTable) {
			return visitor.visitAlterTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RenameDefinitionContext extends ParserRuleContext {
	public KW_RENAME(): TerminalNode { return this.getToken(FlinkSqlParser.KW_RENAME, 0); }
	public KW_TO(): TerminalNode { return this.getToken(FlinkSqlParser.KW_TO, 0); }
	public uid(): UidContext[];
	public uid(i: number): UidContext;
	public uid(i?: number): UidContext | UidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UidContext);
		} else {
			return this.getRuleContext(i, UidContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_renameDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterRenameDefinition) {
			listener.enterRenameDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitRenameDefinition) {
			listener.exitRenameDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitRenameDefinition) {
			return visitor.visitRenameDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetKeyValueDefinitionContext extends ParserRuleContext {
	public KW_SET(): TerminalNode { return this.getToken(FlinkSqlParser.KW_SET, 0); }
	public tablePropertyList(): TablePropertyListContext {
		return this.getRuleContext(0, TablePropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_setKeyValueDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSetKeyValueDefinition) {
			listener.enterSetKeyValueDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSetKeyValueDefinition) {
			listener.exitSetKeyValueDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSetKeyValueDefinition) {
			return visitor.visitSetKeyValueDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddConstraintContext extends ParserRuleContext {
	public KW_ADD(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ADD, 0); }
	public KW_CONSTRAINT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0); }
	public constraintName(): ConstraintNameContext {
		return this.getRuleContext(0, ConstraintNameContext);
	}
	public KW_PRIMARY(): TerminalNode { return this.getToken(FlinkSqlParser.KW_PRIMARY, 0); }
	public KW_KEY(): TerminalNode { return this.getToken(FlinkSqlParser.KW_KEY, 0); }
	public columnNameList(): ColumnNameListContext {
		return this.getRuleContext(0, ColumnNameListContext);
	}
	public notForced(): NotForcedContext | undefined {
		return this.tryGetRuleContext(0, NotForcedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_addConstraint; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterAddConstraint) {
			listener.enterAddConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitAddConstraint) {
			listener.exitAddConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAddConstraint) {
			return visitor.visitAddConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropConstraintContext extends ParserRuleContext {
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DROP, 0); }
	public KW_CONSTRAINT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0); }
	public constraintName(): ConstraintNameContext {
		return this.getRuleContext(0, ConstraintNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dropConstraint; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDropConstraint) {
			listener.enterDropConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDropConstraint) {
			listener.exitDropConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDropConstraint) {
			return visitor.visitDropConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddUniqueContext extends ParserRuleContext {
	public KW_ADD(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ADD, 0); }
	public KW_UNIQUE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_UNIQUE, 0); }
	public columnNameList(): ColumnNameListContext {
		return this.getRuleContext(0, ColumnNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_addUnique; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterAddUnique) {
			listener.enterAddUnique(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitAddUnique) {
			listener.exitAddUnique(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAddUnique) {
			return visitor.visitAddUnique(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotForcedContext extends ParserRuleContext {
	public KW_NOT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_NOT, 0); }
	public KW_ENFORCED(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ENFORCED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_notForced; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterNotForced) {
			listener.enterNotForced(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitNotForced) {
			listener.exitNotForced(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitNotForced) {
			return visitor.visitNotForced(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlertViewContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ALTER, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(FlinkSqlParser.KW_VIEW, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public renameDefinition(): RenameDefinitionContext | undefined {
		return this.tryGetRuleContext(0, RenameDefinitionContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AS, 0); }
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_alertView; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterAlertView) {
			listener.enterAlertView(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitAlertView) {
			listener.exitAlertView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAlertView) {
			return visitor.visitAlertView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterDatabaseContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ALTER, 0); }
	public KW_DATABASE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DATABASE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public setKeyValueDefinition(): SetKeyValueDefinitionContext {
		return this.getRuleContext(0, SetKeyValueDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_alterDatabase; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterAlterDatabase) {
			listener.enterAlterDatabase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitAlterDatabase) {
			listener.exitAlterDatabase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterDatabase) {
			return visitor.visitAlterDatabase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlterFunctionContext extends ParserRuleContext {
	public KW_ALTER(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ALTER, 0); }
	public KW_FUNCTION(): TerminalNode { return this.getToken(FlinkSqlParser.KW_FUNCTION, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TEMPORARY, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SYSTEM, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	public KW_LANGUAGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LANGUAGE, 0); }
	public KW_JAVA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JAVA, 0); }
	public KW_SCALA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SCALA, 0); }
	public KW_PYTHON(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_alterFunction; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterAlterFunction) {
			listener.enterAlterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitAlterFunction) {
			listener.exitAlterFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAlterFunction) {
			return visitor.visitAlterFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropCatalogContext extends ParserRuleContext {
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DROP, 0); }
	public KW_CATALOG(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CATALOG, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dropCatalog; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDropCatalog) {
			listener.enterDropCatalog(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDropCatalog) {
			listener.exitDropCatalog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDropCatalog) {
			return visitor.visitDropCatalog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropTableContext extends ParserRuleContext {
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DROP, 0); }
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_TABLE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TEMPORARY, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dropTable; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDropTable) {
			listener.enterDropTable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDropTable) {
			listener.exitDropTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDropTable) {
			return visitor.visitDropTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropDatabaseContext extends ParserRuleContext {
	public _dropType!: Token;
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DROP, 0); }
	public KW_DATABASE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DATABASE, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	public KW_RESTRICT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RESTRICT, 0); }
	public KW_CASCADE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CASCADE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dropDatabase; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDropDatabase) {
			listener.enterDropDatabase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDropDatabase) {
			listener.exitDropDatabase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDropDatabase) {
			return visitor.visitDropDatabase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropViewContext extends ParserRuleContext {
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DROP, 0); }
	public KW_VIEW(): TerminalNode { return this.getToken(FlinkSqlParser.KW_VIEW, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TEMPORARY, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dropView; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDropView) {
			listener.enterDropView(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDropView) {
			listener.exitDropView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDropView) {
			return visitor.visitDropView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropFunctionContext extends ParserRuleContext {
	public KW_DROP(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DROP, 0); }
	public KW_FUNCTION(): TerminalNode { return this.getToken(FlinkSqlParser.KW_FUNCTION, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TEMPORARY, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SYSTEM, 0); }
	public ifExists(): IfExistsContext | undefined {
		return this.tryGetRuleContext(0, IfExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dropFunction; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDropFunction) {
			listener.enterDropFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDropFunction) {
			listener.exitDropFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDropFunction) {
			return visitor.visitDropFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertStatementContext extends ParserRuleContext {
	public insertSimpleStatement(): InsertSimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertSimpleStatementContext);
	}
	public KW_EXECUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXECUTE, 0); }
	public insertMulStatementCompatibility(): InsertMulStatementCompatibilityContext | undefined {
		return this.tryGetRuleContext(0, InsertMulStatementCompatibilityContext);
	}
	public insertMulStatement(): InsertMulStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertMulStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_insertStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterInsertStatement) {
			listener.enterInsertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitInsertStatement) {
			listener.exitInsertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitInsertStatement) {
			return visitor.visitInsertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertSimpleStatementContext extends ParserRuleContext {
	public KW_INSERT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_INSERT, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public KW_INTO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INTO, 0); }
	public KW_OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OVERWRITE, 0); }
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	public valuesDefinition(): ValuesDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ValuesDefinitionContext);
	}
	public insertPartitionDefinition(): InsertPartitionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, InsertPartitionDefinitionContext);
	}
	public columnNameList(): ColumnNameListContext | undefined {
		return this.tryGetRuleContext(0, ColumnNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_insertSimpleStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterInsertSimpleStatement) {
			listener.enterInsertSimpleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitInsertSimpleStatement) {
			listener.exitInsertSimpleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitInsertSimpleStatement) {
			return visitor.visitInsertSimpleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertPartitionDefinitionContext extends ParserRuleContext {
	public KW_PARTITION(): TerminalNode { return this.getToken(FlinkSqlParser.KW_PARTITION, 0); }
	public tablePropertyList(): TablePropertyListContext {
		return this.getRuleContext(0, TablePropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_insertPartitionDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterInsertPartitionDefinition) {
			listener.enterInsertPartitionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitInsertPartitionDefinition) {
			listener.exitInsertPartitionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitInsertPartitionDefinition) {
			return visitor.visitInsertPartitionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValuesDefinitionContext extends ParserRuleContext {
	public KW_VALUES(): TerminalNode { return this.getToken(FlinkSqlParser.KW_VALUES, 0); }
	public valuesRowDefinition(): ValuesRowDefinitionContext[];
	public valuesRowDefinition(i: number): ValuesRowDefinitionContext;
	public valuesRowDefinition(i?: number): ValuesRowDefinitionContext | ValuesRowDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValuesRowDefinitionContext);
		} else {
			return this.getRuleContext(i, ValuesRowDefinitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_valuesDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterValuesDefinition) {
			listener.enterValuesDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitValuesDefinition) {
			listener.exitValuesDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitValuesDefinition) {
			return visitor.visitValuesDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValuesRowDefinitionContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_valuesRowDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterValuesRowDefinition) {
			listener.enterValuesRowDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitValuesRowDefinition) {
			listener.exitValuesRowDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitValuesRowDefinition) {
			return visitor.visitValuesRowDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertMulStatementCompatibilityContext extends ParserRuleContext {
	public KW_BEGIN(): TerminalNode { return this.getToken(FlinkSqlParser.KW_BEGIN, 0); }
	public KW_STATEMENT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_STATEMENT, 0); }
	public KW_SET(): TerminalNode { return this.getToken(FlinkSqlParser.KW_SET, 0); }
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.SEMICOLON);
		} else {
			return this.getToken(FlinkSqlParser.SEMICOLON, i);
		}
	}
	public KW_END(): TerminalNode { return this.getToken(FlinkSqlParser.KW_END, 0); }
	public insertSimpleStatement(): InsertSimpleStatementContext[];
	public insertSimpleStatement(i: number): InsertSimpleStatementContext;
	public insertSimpleStatement(i?: number): InsertSimpleStatementContext | InsertSimpleStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InsertSimpleStatementContext);
		} else {
			return this.getRuleContext(i, InsertSimpleStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_insertMulStatementCompatibility; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterInsertMulStatementCompatibility) {
			listener.enterInsertMulStatementCompatibility(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitInsertMulStatementCompatibility) {
			listener.exitInsertMulStatementCompatibility(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitInsertMulStatementCompatibility) {
			return visitor.visitInsertMulStatementCompatibility(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertMulStatementContext extends ParserRuleContext {
	public KW_STATEMENT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_STATEMENT, 0); }
	public KW_SET(): TerminalNode { return this.getToken(FlinkSqlParser.KW_SET, 0); }
	public KW_BEGIN(): TerminalNode { return this.getToken(FlinkSqlParser.KW_BEGIN, 0); }
	public KW_END(): TerminalNode { return this.getToken(FlinkSqlParser.KW_END, 0); }
	public insertSimpleStatement(): InsertSimpleStatementContext[];
	public insertSimpleStatement(i: number): InsertSimpleStatementContext;
	public insertSimpleStatement(i?: number): InsertSimpleStatementContext | InsertSimpleStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InsertSimpleStatementContext);
		} else {
			return this.getRuleContext(i, InsertSimpleStatementContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.SEMICOLON);
		} else {
			return this.getToken(FlinkSqlParser.SEMICOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_insertMulStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterInsertMulStatement) {
			listener.enterInsertMulStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitInsertMulStatement) {
			listener.exitInsertMulStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitInsertMulStatement) {
			return visitor.visitInsertMulStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryStatementContext extends ParserRuleContext {
	public _left!: QueryStatementContext;
	public _operator!: Token;
	public _right!: QueryStatementContext;
	public valuesCaluse(): ValuesCaluseContext | undefined {
		return this.tryGetRuleContext(0, ValuesCaluseContext);
	}
	public withClause(): WithClauseContext | undefined {
		return this.tryGetRuleContext(0, WithClauseContext);
	}
	public queryStatement(): QueryStatementContext[];
	public queryStatement(i: number): QueryStatementContext;
	public queryStatement(i?: number): QueryStatementContext | QueryStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QueryStatementContext);
		} else {
			return this.getRuleContext(i, QueryStatementContext);
		}
	}
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RR_BRACKET, 0); }
	public KW_INTERSECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INTERSECT, 0); }
	public KW_UNION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UNION, 0); }
	public KW_EXCEPT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXCEPT, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALL, 0); }
	public orderByCaluse(): OrderByCaluseContext | undefined {
		return this.tryGetRuleContext(0, OrderByCaluseContext);
	}
	public limitClause(): LimitClauseContext | undefined {
		return this.tryGetRuleContext(0, LimitClauseContext);
	}
	public selectClause(): SelectClauseContext | undefined {
		return this.tryGetRuleContext(0, SelectClauseContext);
	}
	public selectStatement(): SelectStatementContext | undefined {
		return this.tryGetRuleContext(0, SelectStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_queryStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterQueryStatement) {
			listener.enterQueryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitQueryStatement) {
			listener.exitQueryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitQueryStatement) {
			return visitor.visitQueryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValuesCaluseContext extends ParserRuleContext {
	public KW_VALUES(): TerminalNode { return this.getToken(FlinkSqlParser.KW_VALUES, 0); }
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
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_valuesCaluse; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterValuesCaluse) {
			listener.enterValuesCaluse(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitValuesCaluse) {
			listener.exitValuesCaluse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitValuesCaluse) {
			return visitor.visitValuesCaluse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithClauseContext extends ParserRuleContext {
	public KW_WITH(): TerminalNode { return this.getToken(FlinkSqlParser.KW_WITH, 0); }
	public withItem(): WithItemContext[];
	public withItem(i: number): WithItemContext;
	public withItem(i?: number): WithItemContext | WithItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WithItemContext);
		} else {
			return this.getRuleContext(i, WithItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_withClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWithClause) {
			listener.enterWithClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWithClause) {
			listener.exitWithClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWithClause) {
			return visitor.visitWithClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithItemContext extends ParserRuleContext {
	public withItemName(): WithItemNameContext {
		return this.getRuleContext(0, WithItemNameContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	public LR_BRACKET(): TerminalNode[];
	public LR_BRACKET(i: number): TerminalNode;
	public LR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.LR_BRACKET);
		} else {
			return this.getToken(FlinkSqlParser.LR_BRACKET, i);
		}
	}
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public RR_BRACKET(): TerminalNode[];
	public RR_BRACKET(i: number): TerminalNode;
	public RR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.RR_BRACKET);
		} else {
			return this.getToken(FlinkSqlParser.RR_BRACKET, i);
		}
	}
	public columnName(): ColumnNameContext[];
	public columnName(i: number): ColumnNameContext;
	public columnName(i?: number): ColumnNameContext | ColumnNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnNameContext);
		} else {
			return this.getRuleContext(i, ColumnNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_withItem; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWithItem) {
			listener.enterWithItem(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWithItem) {
			listener.exitWithItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWithItem) {
			return visitor.visitWithItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithItemNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_withItemName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWithItemName) {
			listener.enterWithItemName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWithItemName) {
			listener.exitWithItemName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWithItemName) {
			return visitor.visitWithItemName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectStatementContext extends ParserRuleContext {
	public selectClause(): SelectClauseContext {
		return this.getRuleContext(0, SelectClauseContext);
	}
	public fromClause(): FromClauseContext {
		return this.getRuleContext(0, FromClauseContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	public groupByClause(): GroupByClauseContext | undefined {
		return this.tryGetRuleContext(0, GroupByClauseContext);
	}
	public havingClause(): HavingClauseContext | undefined {
		return this.tryGetRuleContext(0, HavingClauseContext);
	}
	public windowClause(): WindowClauseContext | undefined {
		return this.tryGetRuleContext(0, WindowClauseContext);
	}
	public matchRecognizeClause(): MatchRecognizeClauseContext | undefined {
		return this.tryGetRuleContext(0, MatchRecognizeClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_selectStatement; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSelectStatement) {
			listener.enterSelectStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSelectStatement) {
			listener.exitSelectStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSelectStatement) {
			return visitor.visitSelectStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectClauseContext extends ParserRuleContext {
	public KW_SELECT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_SELECT, 0); }
	public ASTERISK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ASTERISK_SIGN, 0); }
	public projectItemDefinition(): ProjectItemDefinitionContext[];
	public projectItemDefinition(i: number): ProjectItemDefinitionContext;
	public projectItemDefinition(i?: number): ProjectItemDefinitionContext | ProjectItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProjectItemDefinitionContext);
		} else {
			return this.getRuleContext(i, ProjectItemDefinitionContext);
		}
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_selectClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSelectClause) {
			listener.enterSelectClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSelectClause) {
			listener.exitSelectClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSelectClause) {
			return visitor.visitSelectClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProjectItemDefinitionContext extends ParserRuleContext {
	public overWindowItem(): OverWindowItemContext | undefined {
		return this.tryGetRuleContext(0, OverWindowItemContext);
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
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_projectItemDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterProjectItemDefinition) {
			listener.enterProjectItemDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitProjectItemDefinition) {
			listener.exitProjectItemDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitProjectItemDefinition) {
			return visitor.visitProjectItemDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverWindowItemContext extends ParserRuleContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public KW_OVER(): TerminalNode { return this.getToken(FlinkSqlParser.KW_OVER, 0); }
	public windowSpec(): WindowSpecContext | undefined {
		return this.tryGetRuleContext(0, WindowSpecContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ErrorCapturingIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_overWindowItem; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterOverWindowItem) {
			listener.enterOverWindowItem(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitOverWindowItem) {
			listener.exitOverWindowItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitOverWindowItem) {
			return visitor.visitOverWindowItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromClauseContext extends ParserRuleContext {
	public KW_FROM(): TerminalNode { return this.getToken(FlinkSqlParser.KW_FROM, 0); }
	public tableExpression(): TableExpressionContext {
		return this.getRuleContext(0, TableExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_fromClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterFromClause) {
			listener.enterFromClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitFromClause) {
			listener.exitFromClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitFromClause) {
			return visitor.visitFromClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableExpressionContext extends ParserRuleContext {
	public tableReference(): TableReferenceContext[];
	public tableReference(i: number): TableReferenceContext;
	public tableReference(i?: number): TableReferenceContext | TableReferenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableReferenceContext);
		} else {
			return this.getRuleContext(i, TableReferenceContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	public tableExpression(): TableExpressionContext[];
	public tableExpression(i: number): TableExpressionContext;
	public tableExpression(i?: number): TableExpressionContext | TableExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableExpressionContext);
		} else {
			return this.getRuleContext(i, TableExpressionContext);
		}
	}
	public KW_JOIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JOIN, 0); }
	public KW_NATURAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NATURAL, 0); }
	public KW_OUTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OUTER, 0); }
	public joinCondition(): JoinConditionContext | undefined {
		return this.tryGetRuleContext(0, JoinConditionContext);
	}
	public KW_LEFT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LEFT, 0); }
	public KW_RIGHT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RIGHT, 0); }
	public KW_FULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FULL, 0); }
	public KW_INNER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INNER, 0); }
	public KW_CROSS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CROSS, 0); }
	public inlineDataValueClause(): InlineDataValueClauseContext | undefined {
		return this.tryGetRuleContext(0, InlineDataValueClauseContext);
	}
	public windoTVFClause(): WindoTVFClauseContext | undefined {
		return this.tryGetRuleContext(0, WindoTVFClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tableExpression; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTableExpression) {
			listener.enterTableExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTableExpression) {
			listener.exitTableExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTableExpression) {
			return visitor.visitTableExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableReferenceContext extends ParserRuleContext {
	public tablePrimary(): TablePrimaryContext {
		return this.getRuleContext(0, TablePrimaryContext);
	}
	public tableAlias(): TableAliasContext | undefined {
		return this.tryGetRuleContext(0, TableAliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tableReference; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTableReference) {
			listener.enterTableReference(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTableReference) {
			listener.exitTableReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTableReference) {
			return visitor.visitTableReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePrimaryContext extends ParserRuleContext {
	public tablePath(): TablePathContext | undefined {
		return this.tryGetRuleContext(0, TablePathContext);
	}
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TABLE, 0); }
	public systemTimePeriod(): SystemTimePeriodContext | undefined {
		return this.tryGetRuleContext(0, SystemTimePeriodContext);
	}
	public correlationName(): CorrelationNameContext | undefined {
		return this.tryGetRuleContext(0, CorrelationNameContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AS, 0); }
	public KW_LATERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LATERAL, 0); }
	public LR_BRACKET(): TerminalNode[];
	public LR_BRACKET(i: number): TerminalNode;
	public LR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.LR_BRACKET);
		} else {
			return this.getToken(FlinkSqlParser.LR_BRACKET, i);
		}
	}
	public functionName(): FunctionNameContext | undefined {
		return this.tryGetRuleContext(0, FunctionNameContext);
	}
	public functionParam(): FunctionParamContext[];
	public functionParam(i: number): FunctionParamContext;
	public functionParam(i?: number): FunctionParamContext | FunctionParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionParamContext);
		} else {
			return this.getRuleContext(i, FunctionParamContext);
		}
	}
	public RR_BRACKET(): TerminalNode[];
	public RR_BRACKET(i: number): TerminalNode;
	public RR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.RR_BRACKET);
		} else {
			return this.getToken(FlinkSqlParser.RR_BRACKET, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	public KW_UNNEST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UNNEST, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tablePrimary; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTablePrimary) {
			listener.enterTablePrimary(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTablePrimary) {
			listener.exitTablePrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTablePrimary) {
			return visitor.visitTablePrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePathContext extends ParserRuleContext {
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tablePath; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTablePath) {
			listener.enterTablePath(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTablePath) {
			listener.exitTablePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTablePath) {
			return visitor.visitTablePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SystemTimePeriodContext extends ParserRuleContext {
	public KW_FOR(): TerminalNode { return this.getToken(FlinkSqlParser.KW_FOR, 0); }
	public KW_SYSTEM_TIME(): TerminalNode { return this.getToken(FlinkSqlParser.KW_SYSTEM_TIME, 0); }
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	public KW_OF(): TerminalNode { return this.getToken(FlinkSqlParser.KW_OF, 0); }
	public dateTimeExpression(): DateTimeExpressionContext {
		return this.getRuleContext(0, DateTimeExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_systemTimePeriod; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSystemTimePeriod) {
			listener.enterSystemTimePeriod(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSystemTimePeriod) {
			listener.exitSystemTimePeriod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSystemTimePeriod) {
			return visitor.visitSystemTimePeriod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateTimeExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dateTimeExpression; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDateTimeExpression) {
			listener.enterDateTimeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDateTimeExpression) {
			listener.exitDateTimeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDateTimeExpression) {
			return visitor.visitDateTimeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineDataValueClauseContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public valuesDefinition(): ValuesDefinitionContext {
		return this.getRuleContext(0, ValuesDefinitionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public tableAlias(): TableAliasContext {
		return this.getRuleContext(0, TableAliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_inlineDataValueClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterInlineDataValueClause) {
			listener.enterInlineDataValueClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitInlineDataValueClause) {
			listener.exitInlineDataValueClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitInlineDataValueClause) {
			return visitor.visitInlineDataValueClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindoTVFClauseContext extends ParserRuleContext {
	public KW_TABLE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_TABLE, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public windowTVFExression(): WindowTVFExressionContext {
		return this.getRuleContext(0, WindowTVFExressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_windoTVFClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWindoTVFClause) {
			listener.enterWindoTVFClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWindoTVFClause) {
			listener.exitWindoTVFClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWindoTVFClause) {
			return visitor.visitWindoTVFClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowTVFExressionContext extends ParserRuleContext {
	public windoTVFName(): WindoTVFNameContext {
		return this.getRuleContext(0, WindoTVFNameContext);
	}
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public windowTVFParam(): WindowTVFParamContext[];
	public windowTVFParam(i: number): WindowTVFParamContext;
	public windowTVFParam(i?: number): WindowTVFParamContext | WindowTVFParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WindowTVFParamContext);
		} else {
			return this.getRuleContext(i, WindowTVFParamContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_windowTVFExression; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWindowTVFExression) {
			listener.enterWindowTVFExression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWindowTVFExression) {
			listener.exitWindowTVFExression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWindowTVFExression) {
			return visitor.visitWindowTVFExression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindoTVFNameContext extends ParserRuleContext {
	public KW_TUMBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TUMBLE, 0); }
	public KW_HOP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_HOP, 0); }
	public KW_CUMULATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CUMULATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_windoTVFName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWindoTVFName) {
			listener.enterWindoTVFName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWindoTVFName) {
			listener.exitWindoTVFName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWindoTVFName) {
			return visitor.visitWindoTVFName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowTVFParamContext extends ParserRuleContext {
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TABLE, 0); }
	public timeAttrColumn(): TimeAttrColumnContext | undefined {
		return this.tryGetRuleContext(0, TimeAttrColumnContext);
	}
	public columnDescriptor(): ColumnDescriptorContext | undefined {
		return this.tryGetRuleContext(0, ColumnDescriptorContext);
	}
	public timeIntervalExpression(): TimeIntervalExpressionContext | undefined {
		return this.tryGetRuleContext(0, TimeIntervalExpressionContext);
	}
	public KW_DATA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATA, 0); }
	public DOUBLE_RIGHT_ARROW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DOUBLE_RIGHT_ARROW, 0); }
	public KW_TIMECOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMECOL, 0); }
	public timeIntervalParamName(): TimeIntervalParamNameContext | undefined {
		return this.tryGetRuleContext(0, TimeIntervalParamNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_windowTVFParam; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWindowTVFParam) {
			listener.enterWindowTVFParam(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWindowTVFParam) {
			listener.exitWindowTVFParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWindowTVFParam) {
			return visitor.visitWindowTVFParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeIntervalParamNameContext extends ParserRuleContext {
	public KW_DATA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATA, 0); }
	public KW_TIMECOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMECOL, 0); }
	public KW_SIZE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SIZE, 0); }
	public KW_OFFSET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OFFSET, 0); }
	public KW_STEP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STEP, 0); }
	public KW_SLIDE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SLIDE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_timeIntervalParamName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTimeIntervalParamName) {
			listener.enterTimeIntervalParamName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTimeIntervalParamName) {
			listener.exitTimeIntervalParamName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTimeIntervalParamName) {
			return visitor.visitTimeIntervalParamName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnDescriptorContext extends ParserRuleContext {
	public KW_DESCRIPTOR(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DESCRIPTOR, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnDescriptor; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnDescriptor) {
			listener.enterColumnDescriptor(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnDescriptor) {
			listener.exitColumnDescriptor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnDescriptor) {
			return visitor.visitColumnDescriptor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinConditionContext extends ParserRuleContext {
	public KW_ON(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ON, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	public KW_USING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_USING, 0); }
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LR_BRACKET, 0); }
	public uid(): UidContext[];
	public uid(i: number): UidContext;
	public uid(i?: number): UidContext | UidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UidContext);
		} else {
			return this.getRuleContext(i, UidContext);
		}
	}
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_joinCondition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterJoinCondition) {
			listener.enterJoinCondition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitJoinCondition) {
			listener.exitJoinCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitJoinCondition) {
			return visitor.visitJoinCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhereClauseContext extends ParserRuleContext {
	public KW_WHERE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_whereClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWhereClause) {
			listener.enterWhereClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWhereClause) {
			listener.exitWhereClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWhereClause) {
			return visitor.visitWhereClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupByClauseContext extends ParserRuleContext {
	public KW_GROUP(): TerminalNode { return this.getToken(FlinkSqlParser.KW_GROUP, 0); }
	public KW_BY(): TerminalNode { return this.getToken(FlinkSqlParser.KW_BY, 0); }
	public groupItemDefinition(): GroupItemDefinitionContext[];
	public groupItemDefinition(i: number): GroupItemDefinitionContext;
	public groupItemDefinition(i?: number): GroupItemDefinitionContext | GroupItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupItemDefinitionContext);
		} else {
			return this.getRuleContext(i, GroupItemDefinitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_groupByClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterGroupByClause) {
			listener.enterGroupByClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitGroupByClause) {
			listener.exitGroupByClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupByClause) {
			return visitor.visitGroupByClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupItemDefinitionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public groupWindowFunction(): GroupWindowFunctionContext | undefined {
		return this.tryGetRuleContext(0, GroupWindowFunctionContext);
	}
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	public groupingSetsNotaionName(): GroupingSetsNotaionNameContext | undefined {
		return this.tryGetRuleContext(0, GroupingSetsNotaionNameContext);
	}
	public groupingSets(): GroupingSetsContext | undefined {
		return this.tryGetRuleContext(0, GroupingSetsContext);
	}
	public groupItemDefinition(): GroupItemDefinitionContext[];
	public groupItemDefinition(i: number): GroupItemDefinitionContext;
	public groupItemDefinition(i?: number): GroupItemDefinitionContext | GroupItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupItemDefinitionContext);
		} else {
			return this.getRuleContext(i, GroupItemDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_groupItemDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterGroupItemDefinition) {
			listener.enterGroupItemDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitGroupItemDefinition) {
			listener.exitGroupItemDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupItemDefinition) {
			return visitor.visitGroupItemDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingSetsContext extends ParserRuleContext {
	public KW_GROUPING(): TerminalNode { return this.getToken(FlinkSqlParser.KW_GROUPING, 0); }
	public KW_SETS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_SETS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_groupingSets; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterGroupingSets) {
			listener.enterGroupingSets(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitGroupingSets) {
			listener.exitGroupingSets(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupingSets) {
			return visitor.visitGroupingSets(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingSetsNotaionNameContext extends ParserRuleContext {
	public KW_CUBE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CUBE, 0); }
	public KW_ROLLUP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROLLUP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_groupingSetsNotaionName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterGroupingSetsNotaionName) {
			listener.enterGroupingSetsNotaionName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitGroupingSetsNotaionName) {
			listener.exitGroupingSetsNotaionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupingSetsNotaionName) {
			return visitor.visitGroupingSetsNotaionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupWindowFunctionContext extends ParserRuleContext {
	public groupWindowFunctionName(): GroupWindowFunctionNameContext {
		return this.getRuleContext(0, GroupWindowFunctionNameContext);
	}
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public timeAttrColumn(): TimeAttrColumnContext {
		return this.getRuleContext(0, TimeAttrColumnContext);
	}
	public COMMA(): TerminalNode { return this.getToken(FlinkSqlParser.COMMA, 0); }
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		return this.getRuleContext(0, TimeIntervalExpressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_groupWindowFunction; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterGroupWindowFunction) {
			listener.enterGroupWindowFunction(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitGroupWindowFunction) {
			listener.exitGroupWindowFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupWindowFunction) {
			return visitor.visitGroupWindowFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupWindowFunctionNameContext extends ParserRuleContext {
	public KW_TUMBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TUMBLE, 0); }
	public KW_HOP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_HOP, 0); }
	public KW_SESSION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SESSION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_groupWindowFunctionName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterGroupWindowFunctionName) {
			listener.enterGroupWindowFunctionName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitGroupWindowFunctionName) {
			listener.exitGroupWindowFunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitGroupWindowFunctionName) {
			return visitor.visitGroupWindowFunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeAttrColumnContext extends ParserRuleContext {
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_timeAttrColumn; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTimeAttrColumn) {
			listener.enterTimeAttrColumn(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTimeAttrColumn) {
			listener.exitTimeAttrColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTimeAttrColumn) {
			return visitor.visitTimeAttrColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HavingClauseContext extends ParserRuleContext {
	public KW_HAVING(): TerminalNode { return this.getToken(FlinkSqlParser.KW_HAVING, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_havingClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterHavingClause) {
			listener.enterHavingClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitHavingClause) {
			listener.exitHavingClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitHavingClause) {
			return visitor.visitHavingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowClauseContext extends ParserRuleContext {
	public KW_WINDOW(): TerminalNode { return this.getToken(FlinkSqlParser.KW_WINDOW, 0); }
	public namedWindow(): NamedWindowContext[];
	public namedWindow(i: number): NamedWindowContext;
	public namedWindow(i?: number): NamedWindowContext | NamedWindowContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedWindowContext);
		} else {
			return this.getRuleContext(i, NamedWindowContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_windowClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWindowClause) {
			listener.enterWindowClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWindowClause) {
			listener.exitWindowClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWindowClause) {
			return visitor.visitWindowClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedWindowContext extends ParserRuleContext {
	public _name!: ErrorCapturingIdentifierContext;
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	public windowSpec(): WindowSpecContext {
		return this.getRuleContext(0, WindowSpecContext);
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getRuleContext(0, ErrorCapturingIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_namedWindow; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterNamedWindow) {
			listener.enterNamedWindow(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitNamedWindow) {
			listener.exitNamedWindow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitNamedWindow) {
			return visitor.visitNamedWindow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowSpecContext extends ParserRuleContext {
	public _name!: ErrorCapturingIdentifierContext;
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public partitionByClause(): PartitionByClauseContext | undefined {
		return this.tryGetRuleContext(0, PartitionByClauseContext);
	}
	public orderByCaluse(): OrderByCaluseContext | undefined {
		return this.tryGetRuleContext(0, OrderByCaluseContext);
	}
	public windowFrame(): WindowFrameContext | undefined {
		return this.tryGetRuleContext(0, WindowFrameContext);
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ErrorCapturingIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_windowSpec; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWindowSpec) {
			listener.enterWindowSpec(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWindowSpec) {
			listener.exitWindowSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWindowSpec) {
			return visitor.visitWindowSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchRecognizeClauseContext extends ParserRuleContext {
	public KW_MATCH_RECOGNIZE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_MATCH_RECOGNIZE, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public patternVariablesDefination(): PatternVariablesDefinationContext {
		return this.getRuleContext(0, PatternVariablesDefinationContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public partitionByClause(): PartitionByClauseContext | undefined {
		return this.tryGetRuleContext(0, PartitionByClauseContext);
	}
	public orderByCaluse(): OrderByCaluseContext | undefined {
		return this.tryGetRuleContext(0, OrderByCaluseContext);
	}
	public measuresClause(): MeasuresClauseContext | undefined {
		return this.tryGetRuleContext(0, MeasuresClauseContext);
	}
	public outputMode(): OutputModeContext | undefined {
		return this.tryGetRuleContext(0, OutputModeContext);
	}
	public afterMatchStrategy(): AfterMatchStrategyContext | undefined {
		return this.tryGetRuleContext(0, AfterMatchStrategyContext);
	}
	public patternDefination(): PatternDefinationContext | undefined {
		return this.tryGetRuleContext(0, PatternDefinationContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_matchRecognizeClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterMatchRecognizeClause) {
			listener.enterMatchRecognizeClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitMatchRecognizeClause) {
			listener.exitMatchRecognizeClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitMatchRecognizeClause) {
			return visitor.visitMatchRecognizeClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderByCaluseContext extends ParserRuleContext {
	public KW_ORDER(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ORDER, 0); }
	public KW_BY(): TerminalNode { return this.getToken(FlinkSqlParser.KW_BY, 0); }
	public orderItemDefition(): OrderItemDefitionContext[];
	public orderItemDefition(i: number): OrderItemDefitionContext;
	public orderItemDefition(i?: number): OrderItemDefitionContext | OrderItemDefitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OrderItemDefitionContext);
		} else {
			return this.getRuleContext(i, OrderItemDefitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_orderByCaluse; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterOrderByCaluse) {
			listener.enterOrderByCaluse(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitOrderByCaluse) {
			listener.exitOrderByCaluse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitOrderByCaluse) {
			return visitor.visitOrderByCaluse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderItemDefitionContext extends ParserRuleContext {
	public _ordering!: Token;
	public _nullOrder!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public KW_NULLS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULLS, 0); }
	public KW_ASC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ASC, 0); }
	public KW_DESC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DESC, 0); }
	public KW_LAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LAST, 0); }
	public KW_FIRST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FIRST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_orderItemDefition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterOrderItemDefition) {
			listener.enterOrderItemDefition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitOrderItemDefition) {
			listener.exitOrderItemDefition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitOrderItemDefition) {
			return visitor.visitOrderItemDefition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LimitClauseContext extends ParserRuleContext {
	public _limit!: ExpressionContext;
	public KW_LIMIT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_LIMIT, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_limitClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLimitClause) {
			listener.enterLimitClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLimitClause) {
			listener.exitLimitClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLimitClause) {
			return visitor.visitLimitClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PartitionByClauseContext extends ParserRuleContext {
	public KW_PARTITION(): TerminalNode { return this.getToken(FlinkSqlParser.KW_PARTITION, 0); }
	public KW_BY(): TerminalNode { return this.getToken(FlinkSqlParser.KW_BY, 0); }
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
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_partitionByClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPartitionByClause) {
			listener.enterPartitionByClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPartitionByClause) {
			listener.exitPartitionByClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPartitionByClause) {
			return visitor.visitPartitionByClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantifiersContext extends ParserRuleContext {
	public ASTERISK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ASTERISK_SIGN, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ADD_SIGN, 0); }
	public QUESTION_MARK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.QUESTION_MARK_SIGN, 0); }
	public LB_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LB_BRACKET, 0); }
	public DIG_LITERAL(): TerminalNode[];
	public DIG_LITERAL(i: number): TerminalNode;
	public DIG_LITERAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.DIG_LITERAL);
		} else {
			return this.getToken(FlinkSqlParser.DIG_LITERAL, i);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.COMMA, 0); }
	public RB_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RB_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_quantifiers; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterQuantifiers) {
			listener.enterQuantifiers(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitQuantifiers) {
			listener.exitQuantifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitQuantifiers) {
			return visitor.visitQuantifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MeasuresClauseContext extends ParserRuleContext {
	public KW_MEASURES(): TerminalNode { return this.getToken(FlinkSqlParser.KW_MEASURES, 0); }
	public projectItemDefinition(): ProjectItemDefinitionContext[];
	public projectItemDefinition(i: number): ProjectItemDefinitionContext;
	public projectItemDefinition(i?: number): ProjectItemDefinitionContext | ProjectItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProjectItemDefinitionContext);
		} else {
			return this.getRuleContext(i, ProjectItemDefinitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_measuresClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterMeasuresClause) {
			listener.enterMeasuresClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitMeasuresClause) {
			listener.exitMeasuresClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitMeasuresClause) {
			return visitor.visitMeasuresClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternDefinationContext extends ParserRuleContext {
	public KW_PATTERN(): TerminalNode { return this.getToken(FlinkSqlParser.KW_PATTERN, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public patternVariable(): PatternVariableContext[];
	public patternVariable(i: number): PatternVariableContext;
	public patternVariable(i?: number): PatternVariableContext | PatternVariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatternVariableContext);
		} else {
			return this.getRuleContext(i, PatternVariableContext);
		}
	}
	public withinClause(): WithinClauseContext | undefined {
		return this.tryGetRuleContext(0, WithinClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_patternDefination; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPatternDefination) {
			listener.enterPatternDefination(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPatternDefination) {
			listener.exitPatternDefination(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPatternDefination) {
			return visitor.visitPatternDefination(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternVariableContext extends ParserRuleContext {
	public unquotedIdentifier(): UnquotedIdentifierContext {
		return this.getRuleContext(0, UnquotedIdentifierContext);
	}
	public quantifiers(): QuantifiersContext | undefined {
		return this.tryGetRuleContext(0, QuantifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_patternVariable; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPatternVariable) {
			listener.enterPatternVariable(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPatternVariable) {
			listener.exitPatternVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPatternVariable) {
			return visitor.visitPatternVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputModeContext extends ParserRuleContext {
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALL, 0); }
	public KW_ROWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROWS, 0); }
	public KW_PER(): TerminalNode { return this.getToken(FlinkSqlParser.KW_PER, 0); }
	public KW_MATCH(): TerminalNode { return this.getToken(FlinkSqlParser.KW_MATCH, 0); }
	public KW_ONE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ONE, 0); }
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_outputMode; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterOutputMode) {
			listener.enterOutputMode(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitOutputMode) {
			listener.exitOutputMode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitOutputMode) {
			return visitor.visitOutputMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AfterMatchStrategyContext extends ParserRuleContext {
	public KW_AFTER(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AFTER, 0); }
	public KW_MATCH(): TerminalNode { return this.getToken(FlinkSqlParser.KW_MATCH, 0); }
	public KW_SKIP(): TerminalNode { return this.getToken(FlinkSqlParser.KW_SKIP, 0); }
	public KW_PAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PAST, 0); }
	public KW_LAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LAST, 0); }
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROW, 0); }
	public KW_TO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TO, 0); }
	public KW_NEXT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NEXT, 0); }
	public unquotedIdentifier(): UnquotedIdentifierContext | undefined {
		return this.tryGetRuleContext(0, UnquotedIdentifierContext);
	}
	public KW_FIRST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FIRST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_afterMatchStrategy; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterAfterMatchStrategy) {
			listener.enterAfterMatchStrategy(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitAfterMatchStrategy) {
			listener.exitAfterMatchStrategy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitAfterMatchStrategy) {
			return visitor.visitAfterMatchStrategy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternVariablesDefinationContext extends ParserRuleContext {
	public KW_DEFINE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_DEFINE, 0); }
	public projectItemDefinition(): ProjectItemDefinitionContext[];
	public projectItemDefinition(i: number): ProjectItemDefinitionContext;
	public projectItemDefinition(i?: number): ProjectItemDefinitionContext | ProjectItemDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProjectItemDefinitionContext);
		} else {
			return this.getRuleContext(i, ProjectItemDefinitionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_patternVariablesDefination; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPatternVariablesDefination) {
			listener.enterPatternVariablesDefination(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPatternVariablesDefination) {
			listener.exitPatternVariablesDefination(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPatternVariablesDefination) {
			return visitor.visitPatternVariablesDefination(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowFrameContext extends ParserRuleContext {
	public KW_RANGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RANGE, 0); }
	public KW_BETWEEN(): TerminalNode { return this.getToken(FlinkSqlParser.KW_BETWEEN, 0); }
	public timeIntervalExpression(): TimeIntervalExpressionContext | undefined {
		return this.tryGetRuleContext(0, TimeIntervalExpressionContext);
	}
	public frameBound(): FrameBoundContext {
		return this.getRuleContext(0, FrameBoundContext);
	}
	public KW_ROWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROWS, 0); }
	public DIG_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DIG_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_windowFrame; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWindowFrame) {
			listener.enterWindowFrame(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWindowFrame) {
			listener.exitWindowFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWindowFrame) {
			return visitor.visitWindowFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FrameBoundContext extends ParserRuleContext {
	public KW_PRECEDING(): TerminalNode { return this.getToken(FlinkSqlParser.KW_PRECEDING, 0); }
	public KW_AND(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AND, 0); }
	public KW_CURRENT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CURRENT, 0); }
	public KW_ROW(): TerminalNode { return this.getToken(FlinkSqlParser.KW_ROW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_frameBound; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterFrameBound) {
			listener.enterFrameBound(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitFrameBound) {
			listener.exitFrameBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitFrameBound) {
			return visitor.visitFrameBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithinClauseContext extends ParserRuleContext {
	public KW_WITHIN(): TerminalNode { return this.getToken(FlinkSqlParser.KW_WITHIN, 0); }
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		return this.getRuleContext(0, TimeIntervalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_withinClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWithinClause) {
			listener.enterWithinClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWithinClause) {
			listener.exitWithinClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWithinClause) {
			return visitor.visitWithinClause(this);
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
	public get ruleIndex(): number { return FlinkSqlParser.RULE_expression; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
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
	public get ruleIndex(): number { return FlinkSqlParser.RULE_booleanExpression; }
	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LogicalNotContext extends BooleanExpressionContext {
	public KW_NOT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_NOT, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLogicalNot) {
			listener.enterLogicalNot(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLogicalNot) {
			listener.exitLogicalNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLogicalNot) {
			return visitor.visitLogicalNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistsContext extends BooleanExpressionContext {
	public KW_EXISTS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_EXISTS, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterExists) {
			listener.enterExists(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitExists) {
			listener.exitExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitExists) {
			return visitor.visitExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PredicatedContext extends BooleanExpressionContext {
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
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPredicated) {
			listener.enterPredicated(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPredicated) {
			listener.exitPredicated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPredicated) {
			return visitor.visitPredicated(this);
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
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AND, 0); }
	public KW_OR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OR, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLogicalBinary) {
			listener.enterLogicalBinary(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLogicalBinary) {
			listener.exitLogicalBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLogicalBinary) {
			return visitor.visitLogicalBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalNestedContext extends BooleanExpressionContext {
	public _kind!: Token;
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	public KW_IS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_IS, 0); }
	public KW_TRUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TRUE, 0); }
	public KW_FALSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FALSE, 0); }
	public KW_UNKNOWN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UNKNOWN, 0); }
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULL, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NOT, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLogicalNested) {
			listener.enterLogicalNested(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLogicalNested) {
			listener.exitLogicalNested(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLogicalNested) {
			return visitor.visitLogicalNested(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	public _kind!: Token;
	public _lower!: ValueExpressionContext;
	public _upper!: ValueExpressionContext;
	public _pattern!: ValueExpressionContext;
	public _right!: ValueExpressionContext;
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AND, 0); }
	public KW_BETWEEN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BETWEEN, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NOT, 0); }
	public KW_ASYMMETRIC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ASYMMETRIC, 0); }
	public KW_SYMMETRIC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SYMMETRIC, 0); }
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RR_BRACKET, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	public queryStatement(): QueryStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryStatementContext);
	}
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXISTS, 0); }
	public KW_RLIKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RLIKE, 0); }
	public likePredicate(): LikePredicateContext | undefined {
		return this.tryGetRuleContext(0, LikePredicateContext);
	}
	public KW_IS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IS, 0); }
	public KW_TRUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TRUE, 0); }
	public KW_FALSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FALSE, 0); }
	public KW_UNKNOWN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UNKNOWN, 0); }
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULL, 0); }
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FROM, 0); }
	public KW_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DISTINCT, 0); }
	public KW_TO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TO, 0); }
	public KW_SIMILAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SIMILAR, 0); }
	public KW_ESCAPE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ESCAPE, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_predicate; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPredicate) {
			listener.enterPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPredicate) {
			listener.exitPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPredicate) {
			return visitor.visitPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LikePredicateContext extends ParserRuleContext {
	public _kind!: Token;
	public _quantifier!: Token;
	public _pattern!: ValueExpressionContext;
	public KW_LIKE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_LIKE, 0); }
	public KW_ANY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ANY, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALL, 0); }
	public LR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.RR_BRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NOT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	public valueExpression(): ValueExpressionContext | undefined {
		return this.tryGetRuleContext(0, ValueExpressionContext);
	}
	public KW_ESCAPE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ESCAPE, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_likePredicate; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLikePredicate) {
			listener.enterLikePredicate(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLikePredicate) {
			listener.exitLikePredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLikePredicate) {
			return visitor.visitLikePredicate(this);
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
	public get ruleIndex(): number { return FlinkSqlParser.RULE_valueExpression; }
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
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterValueExpressionDefault) {
			listener.enterValueExpressionDefault(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitValueExpressionDefault) {
			listener.exitValueExpressionDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
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
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ADD_SIGN, 0); }
	public BIT_NOT_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_NOT_OP, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterArithmeticUnary) {
			listener.enterArithmeticUnary(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitArithmeticUnary) {
			listener.exitArithmeticUnary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
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
	public ASTERISK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ASTERISK_SIGN, 0); }
	public SLASH_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SLASH_SIGN, 0); }
	public PENCENT_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PENCENT_SIGN, 0); }
	public KW_DIV(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DIV, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ADD_SIGN, 0); }
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
	public DOUBLE_VERTICAL_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DOUBLE_VERTICAL_SIGN, 0); }
	public BIT_AND_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_AND_OP, 0); }
	public BIT_XOR_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_XOR_OP, 0); }
	public BIT_OR_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_OR_OP, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterArithmeticBinary) {
			listener.enterArithmeticBinary(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitArithmeticBinary) {
			listener.exitArithmeticBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitArithmeticBinary) {
			return visitor.visitArithmeticBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparisonContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _right!: ValueExpressionContext;
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
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
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticBinaryAlternateContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _right!: Token;
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public SLASH_TEXT(): TerminalNode { return this.getToken(FlinkSqlParser.SLASH_TEXT, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterArithmeticBinaryAlternate) {
			listener.enterArithmeticBinaryAlternate(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitArithmeticBinaryAlternate) {
			listener.exitArithmeticBinaryAlternate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitArithmeticBinaryAlternate) {
			return visitor.visitArithmeticBinaryAlternate(this);
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
	public get ruleIndex(): number { return FlinkSqlParser.RULE_primaryExpression; }
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class SearchedCaseContext extends PrimaryExpressionContext {
	public _elseExpression!: ExpressionContext;
	public KW_CASE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CASE, 0); }
	public KW_END(): TerminalNode { return this.getToken(FlinkSqlParser.KW_END, 0); }
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public KW_ELSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ELSE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSearchedCase) {
			listener.enterSearchedCase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSearchedCase) {
			listener.exitSearchedCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSearchedCase) {
			return visitor.visitSearchedCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleCaseContext extends PrimaryExpressionContext {
	public _value!: ExpressionContext;
	public _elseExpression!: ExpressionContext;
	public KW_CASE(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CASE, 0); }
	public KW_END(): TerminalNode { return this.getToken(FlinkSqlParser.KW_END, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public KW_ELSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ELSE, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSimpleCase) {
			listener.enterSimpleCase(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSimpleCase) {
			listener.exitSimpleCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSimpleCase) {
			return visitor.visitSimpleCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastContext extends PrimaryExpressionContext {
	public KW_CAST(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CAST, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	public columnType(): ColumnTypeContext {
		return this.getRuleContext(0, ColumnTypeContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCast) {
			listener.enterCast(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCast) {
			listener.exitCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCast) {
			return visitor.visitCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FirstContext extends PrimaryExpressionContext {
	public KW_FIRST(): TerminalNode { return this.getToken(FlinkSqlParser.KW_FIRST, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public KW_IGNORE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IGNORE, 0); }
	public KW_NULLS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULLS, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterFirst) {
			listener.enterFirst(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitFirst) {
			listener.exitFirst(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitFirst) {
			return visitor.visitFirst(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LastContext extends PrimaryExpressionContext {
	public KW_LAST(): TerminalNode { return this.getToken(FlinkSqlParser.KW_LAST, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public KW_IGNORE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IGNORE, 0); }
	public KW_NULLS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULLS, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLast) {
			listener.enterLast(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLast) {
			listener.exitLast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLast) {
			return visitor.visitLast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PositionContext extends PrimaryExpressionContext {
	public _substr!: ValueExpressionContext;
	public _str!: ValueExpressionContext;
	public KW_POSITION(): TerminalNode { return this.getToken(FlinkSqlParser.KW_POSITION, 0); }
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public KW_IN(): TerminalNode { return this.getToken(FlinkSqlParser.KW_IN, 0); }
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterPosition) {
			listener.enterPosition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitPosition) {
			listener.exitPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitPosition) {
			return visitor.visitPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantDefaultContext extends PrimaryExpressionContext {
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterConstantDefault) {
			listener.enterConstantDefault(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitConstantDefault) {
			listener.exitConstantDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitConstantDefault) {
			return visitor.visitConstantDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StarContext extends PrimaryExpressionContext {
	public ASTERISK_SIGN(): TerminalNode { return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0); }
	public uid(): UidContext | undefined {
		return this.tryGetRuleContext(0, UidContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DOT, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterStar) {
			listener.enterStar(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitStar) {
			listener.exitStar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitStar) {
			return visitor.visitStar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubqueryExpressionContext extends PrimaryExpressionContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public queryStatement(): QueryStatementContext {
		return this.getRuleContext(0, QueryStatementContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSubqueryExpression) {
			listener.enterSubqueryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSubqueryExpression) {
			listener.exitSubqueryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSubqueryExpression) {
			return visitor.visitSubqueryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallContext extends PrimaryExpressionContext {
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public functionParam(): FunctionParamContext[];
	public functionParam(i: number): FunctionParamContext;
	public functionParam(i?: number): FunctionParamContext | FunctionParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionParamContext);
		} else {
			return this.getRuleContext(i, FunctionParamContext);
		}
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubscriptContext extends PrimaryExpressionContext {
	public _value!: PrimaryExpressionContext;
	public _index!: ValueExpressionContext;
	public LS_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LS_BRACKET, 0); }
	public RS_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RS_BRACKET, 0); }
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
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSubscript) {
			listener.enterSubscript(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSubscript) {
			listener.exitSubscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
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
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnReference) {
			listener.enterColumnReference(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnReference) {
			listener.exitColumnReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnReference) {
			return visitor.visitColumnReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DereferenceContext extends PrimaryExpressionContext {
	public dereferenceDefinition(): DereferenceDefinitionContext {
		return this.getRuleContext(0, DereferenceDefinitionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDereference) {
			listener.enterDereference(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDereference) {
			listener.exitDereference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDereference) {
			return visitor.visitDereference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	public reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext | undefined {
		return this.tryGetRuleContext(0, ReservedKeywordsUsedAsFuncNameContext);
	}
	public nonReservedKeywords(): NonReservedKeywordsContext | undefined {
		return this.tryGetRuleContext(0, NonReservedKeywordsContext);
	}
	public uid(): UidContext | undefined {
		return this.tryGetRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_functionName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterFunctionName) {
			listener.enterFunctionName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitFunctionName) {
			listener.exitFunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitFunctionName) {
			return visitor.visitFunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionParamContext extends ParserRuleContext {
	public reservedKeywordsUsedAsFuncParam(): ReservedKeywordsUsedAsFuncParamContext | undefined {
		return this.tryGetRuleContext(0, ReservedKeywordsUsedAsFuncParamContext);
	}
	public timeIntervalUnit(): TimeIntervalUnitContext | undefined {
		return this.tryGetRuleContext(0, TimeIntervalUnitContext);
	}
	public timePointUnit(): TimePointUnitContext | undefined {
		return this.tryGetRuleContext(0, TimePointUnitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_functionParam; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterFunctionParam) {
			listener.enterFunctionParam(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitFunctionParam) {
			listener.exitFunctionParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitFunctionParam) {
			return visitor.visitFunctionParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DereferenceDefinitionContext extends ParserRuleContext {
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_dereferenceDefinition; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDereferenceDefinition) {
			listener.enterDereferenceDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDereferenceDefinition) {
			listener.exitDereferenceDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDereferenceDefinition) {
			return visitor.visitDereferenceDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CorrelationNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_correlationName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCorrelationName) {
			listener.enterCorrelationName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCorrelationName) {
			listener.exitCorrelationName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCorrelationName) {
			return visitor.visitCorrelationName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public dereferenceDefinition(): DereferenceDefinitionContext | undefined {
		return this.tryGetRuleContext(0, DereferenceDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeIntervalExpressionContext extends ParserRuleContext {
	public KW_INTERVAL(): TerminalNode { return this.getToken(FlinkSqlParser.KW_INTERVAL, 0); }
	public errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext | undefined {
		return this.tryGetRuleContext(0, ErrorCapturingMultiUnitsIntervalContext);
	}
	public errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext | undefined {
		return this.tryGetRuleContext(0, ErrorCapturingUnitToUnitIntervalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_timeIntervalExpression; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTimeIntervalExpression) {
			listener.enterTimeIntervalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTimeIntervalExpression) {
			listener.exitTimeIntervalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTimeIntervalExpression) {
			return visitor.visitTimeIntervalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorCapturingMultiUnitsIntervalContext extends ParserRuleContext {
	public multiUnitsInterval(): MultiUnitsIntervalContext {
		return this.getRuleContext(0, MultiUnitsIntervalContext);
	}
	public unitToUnitInterval(): UnitToUnitIntervalContext | undefined {
		return this.tryGetRuleContext(0, UnitToUnitIntervalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterErrorCapturingMultiUnitsInterval) {
			listener.enterErrorCapturingMultiUnitsInterval(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitErrorCapturingMultiUnitsInterval) {
			listener.exitErrorCapturingMultiUnitsInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitErrorCapturingMultiUnitsInterval) {
			return visitor.visitErrorCapturingMultiUnitsInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiUnitsIntervalContext extends ParserRuleContext {
	public intervalValue(): IntervalValueContext[];
	public intervalValue(i: number): IntervalValueContext;
	public intervalValue(i?: number): IntervalValueContext | IntervalValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntervalValueContext);
		} else {
			return this.getRuleContext(i, IntervalValueContext);
		}
	}
	public timeIntervalUnit(): TimeIntervalUnitContext[];
	public timeIntervalUnit(i: number): TimeIntervalUnitContext;
	public timeIntervalUnit(i?: number): TimeIntervalUnitContext | TimeIntervalUnitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TimeIntervalUnitContext);
		} else {
			return this.getRuleContext(i, TimeIntervalUnitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_multiUnitsInterval; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterMultiUnitsInterval) {
			listener.enterMultiUnitsInterval(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitMultiUnitsInterval) {
			listener.exitMultiUnitsInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitMultiUnitsInterval) {
			return visitor.visitMultiUnitsInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorCapturingUnitToUnitIntervalContext extends ParserRuleContext {
	public _body!: UnitToUnitIntervalContext;
	public _error1!: MultiUnitsIntervalContext;
	public _error2!: UnitToUnitIntervalContext;
	public unitToUnitInterval(): UnitToUnitIntervalContext[];
	public unitToUnitInterval(i: number): UnitToUnitIntervalContext;
	public unitToUnitInterval(i?: number): UnitToUnitIntervalContext | UnitToUnitIntervalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnitToUnitIntervalContext);
		} else {
			return this.getRuleContext(i, UnitToUnitIntervalContext);
		}
	}
	public multiUnitsInterval(): MultiUnitsIntervalContext | undefined {
		return this.tryGetRuleContext(0, MultiUnitsIntervalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterErrorCapturingUnitToUnitInterval) {
			listener.enterErrorCapturingUnitToUnitInterval(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitErrorCapturingUnitToUnitInterval) {
			listener.exitErrorCapturingUnitToUnitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitErrorCapturingUnitToUnitInterval) {
			return visitor.visitErrorCapturingUnitToUnitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitToUnitIntervalContext extends ParserRuleContext {
	public _value!: IntervalValueContext;
	public _from!: TimeIntervalUnitContext;
	public _to!: TimeIntervalUnitContext;
	public KW_TO(): TerminalNode { return this.getToken(FlinkSqlParser.KW_TO, 0); }
	public intervalValue(): IntervalValueContext {
		return this.getRuleContext(0, IntervalValueContext);
	}
	public timeIntervalUnit(): TimeIntervalUnitContext[];
	public timeIntervalUnit(i: number): TimeIntervalUnitContext;
	public timeIntervalUnit(i?: number): TimeIntervalUnitContext | TimeIntervalUnitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TimeIntervalUnitContext);
		} else {
			return this.getRuleContext(i, TimeIntervalUnitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_unitToUnitInterval; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUnitToUnitInterval) {
			listener.enterUnitToUnitInterval(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUnitToUnitInterval) {
			listener.exitUnitToUnitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUnitToUnitInterval) {
			return visitor.visitUnitToUnitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalValueContext extends ParserRuleContext {
	public DIG_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DIG_LITERAL, 0); }
	public REAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.REAL_LITERAL, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ADD_SIGN, 0); }
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_intervalValue; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIntervalValue) {
			listener.enterIntervalValue(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIntervalValue) {
			listener.exitIntervalValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIntervalValue) {
			return visitor.visitIntervalValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnAliasContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AS, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnAlias; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnAlias) {
			listener.enterColumnAlias(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnAlias) {
			listener.exitColumnAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnAlias) {
			return visitor.visitColumnAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableAliasContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AS, 0); }
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tableAlias; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTableAlias) {
			listener.enterTableAlias(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTableAlias) {
			listener.exitTableAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTableAlias) {
			return visitor.visitTableAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorCapturingIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext {
		return this.getRuleContext(0, ErrorCapturingIdentifierExtraContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_errorCapturingIdentifier; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterErrorCapturingIdentifier) {
			listener.enterErrorCapturingIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitErrorCapturingIdentifier) {
			listener.exitErrorCapturingIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitErrorCapturingIdentifier) {
			return visitor.visitErrorCapturingIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorCapturingIdentifierExtraContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_errorCapturingIdentifierExtra; }
	public copyFrom(ctx: ErrorCapturingIdentifierExtraContext): void {
		super.copyFrom(ctx);
	}
}
export class ErrorIdentContext extends ErrorCapturingIdentifierExtraContext {
	public KW_MINUS(): TerminalNode[];
	public KW_MINUS(i: number): TerminalNode;
	public KW_MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.KW_MINUS);
		} else {
			return this.getToken(FlinkSqlParser.KW_MINUS, i);
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
	constructor(ctx: ErrorCapturingIdentifierExtraContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterErrorIdent) {
			listener.enterErrorIdent(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitErrorIdent) {
			listener.exitErrorIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitErrorIdent) {
			return visitor.visitErrorIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RealIdentContext extends ErrorCapturingIdentifierExtraContext {
	constructor(ctx: ErrorCapturingIdentifierExtraContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterRealIdent) {
			listener.enterRealIdent(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitRealIdent) {
			listener.exitRealIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitRealIdent) {
			return visitor.visitRealIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public identifierSeq(): IdentifierSeqContext {
		return this.getRuleContext(0, IdentifierSeqContext);
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierSeqContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_identifierSeq; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIdentifierSeq) {
			listener.enterIdentifierSeq(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIdentifierSeq) {
			listener.exitIdentifierSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIdentifierSeq) {
			return visitor.visitIdentifierSeq(this);
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
	public get ruleIndex(): number { return FlinkSqlParser.RULE_identifier; }
	public copyFrom(ctx: IdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class UnquotedIdentifierAlternativeContext extends IdentifierContext {
	public unquotedIdentifier(): UnquotedIdentifierContext {
		return this.getRuleContext(0, UnquotedIdentifierContext);
	}
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUnquotedIdentifierAlternative) {
			listener.enterUnquotedIdentifierAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUnquotedIdentifierAlternative) {
			listener.exitUnquotedIdentifierAlternative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUnquotedIdentifierAlternative) {
			return visitor.visitUnquotedIdentifierAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuotedIdentifierAlternativeContext extends IdentifierContext {
	public quotedIdentifier(): QuotedIdentifierContext {
		return this.getRuleContext(0, QuotedIdentifierContext);
	}
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterQuotedIdentifierAlternative) {
			listener.enterQuotedIdentifierAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitQuotedIdentifierAlternative) {
			listener.exitQuotedIdentifierAlternative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifierAlternative) {
			return visitor.visitQuotedIdentifierAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NonReservedKeywordsAlternativeContext extends IdentifierContext {
	public nonReservedKeywords(): NonReservedKeywordsContext {
		return this.getRuleContext(0, NonReservedKeywordsContext);
	}
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterNonReservedKeywordsAlternative) {
			listener.enterNonReservedKeywordsAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitNonReservedKeywordsAlternative) {
			listener.exitNonReservedKeywordsAlternative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitNonReservedKeywordsAlternative) {
			return visitor.visitNonReservedKeywordsAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnquotedIdentifierContext extends ParserRuleContext {
	public DIG_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DIG_LITERAL, 0); }
	public ID_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ID_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_unquotedIdentifier; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUnquotedIdentifier) {
			listener.enterUnquotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUnquotedIdentifier) {
			listener.exitUnquotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUnquotedIdentifier) {
			return visitor.visitUnquotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuotedIdentifierContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_quotedIdentifier; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterQuotedIdentifier) {
			listener.enterQuotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitQuotedIdentifier) {
			listener.exitQuotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifier) {
			return visitor.visitQuotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenClauseContext extends ParserRuleContext {
	public _condition!: ExpressionContext;
	public _result!: ExpressionContext;
	public KW_WHEN(): TerminalNode { return this.getToken(FlinkSqlParser.KW_WHEN, 0); }
	public KW_THEN(): TerminalNode { return this.getToken(FlinkSqlParser.KW_THEN, 0); }
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
	public get ruleIndex(): number { return FlinkSqlParser.RULE_whenClause; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWhenClause) {
			listener.enterWhenClause(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWhenClause) {
			listener.exitWhenClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWhenClause) {
			return visitor.visitWhenClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UidContext extends ParserRuleContext {
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
			return this.getTokens(FlinkSqlParser.DOT);
		} else {
			return this.getToken(FlinkSqlParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_uid; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUid) {
			listener.enterUid(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUid) {
			listener.exitUid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUid) {
			return visitor.visitUid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithOptionContext extends ParserRuleContext {
	public KW_WITH(): TerminalNode { return this.getToken(FlinkSqlParser.KW_WITH, 0); }
	public tablePropertyList(): TablePropertyListContext {
		return this.getRuleContext(0, TablePropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_withOption; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterWithOption) {
			listener.enterWithOption(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitWithOption) {
			listener.exitWithOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitWithOption) {
			return visitor.visitWithOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfNotExistsContext extends ParserRuleContext {
	public KW_IF(): TerminalNode { return this.getToken(FlinkSqlParser.KW_IF, 0); }
	public KW_NOT(): TerminalNode { return this.getToken(FlinkSqlParser.KW_NOT, 0); }
	public KW_EXISTS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_EXISTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_ifNotExists; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIfNotExists) {
			listener.enterIfNotExists(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIfNotExists) {
			listener.exitIfNotExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIfNotExists) {
			return visitor.visitIfNotExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfExistsContext extends ParserRuleContext {
	public KW_IF(): TerminalNode { return this.getToken(FlinkSqlParser.KW_IF, 0); }
	public KW_EXISTS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_EXISTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_ifExists; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterIfExists) {
			listener.enterIfExists(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitIfExists) {
			listener.exitIfExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitIfExists) {
			return visitor.visitIfExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyListContext extends ParserRuleContext {
	public LR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.LR_BRACKET, 0); }
	public tableProperty(): TablePropertyContext[];
	public tableProperty(i: number): TablePropertyContext;
	public tableProperty(i?: number): TablePropertyContext | TablePropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropertyContext);
		} else {
			return this.getRuleContext(i, TablePropertyContext);
		}
	}
	public RR_BRACKET(): TerminalNode { return this.getToken(FlinkSqlParser.RR_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.COMMA);
		} else {
			return this.getToken(FlinkSqlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tablePropertyList; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTablePropertyList) {
			listener.enterTablePropertyList(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTablePropertyList) {
			listener.exitTablePropertyList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTablePropertyList) {
			return visitor.visitTablePropertyList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyContext extends ParserRuleContext {
	public _key!: TablePropertyKeyContext;
	public _value!: TablePropertyValueContext;
	public tablePropertyKey(): TablePropertyKeyContext {
		return this.getRuleContext(0, TablePropertyKeyContext);
	}
	public tablePropertyValue(): TablePropertyValueContext | undefined {
		return this.tryGetRuleContext(0, TablePropertyValueContext);
	}
	public EQUAL_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EQUAL_SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tableProperty; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTableProperty) {
			listener.enterTableProperty(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTableProperty) {
			listener.exitTableProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTableProperty) {
			return visitor.visitTableProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyKeyContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public dereferenceDefinition(): DereferenceDefinitionContext | undefined {
		return this.tryGetRuleContext(0, DereferenceDefinitionContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tablePropertyKey; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTablePropertyKey) {
			listener.enterTablePropertyKey(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTablePropertyKey) {
			listener.exitTablePropertyKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTablePropertyKey) {
			return visitor.visitTablePropertyKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyValueContext extends ParserRuleContext {
	public DIG_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DIG_LITERAL, 0); }
	public REAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.REAL_LITERAL, 0); }
	public booleanLiteral(): BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanLiteralContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tablePropertyValue; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTablePropertyValue) {
			listener.enterTablePropertyValue(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTablePropertyValue) {
			listener.exitTablePropertyValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTablePropertyValue) {
			return visitor.visitTablePropertyValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOperatorContext extends ParserRuleContext {
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AND, 0); }
	public BIT_AND_OP(): TerminalNode[];
	public BIT_AND_OP(i: number): TerminalNode;
	public BIT_AND_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.BIT_AND_OP);
		} else {
			return this.getToken(FlinkSqlParser.BIT_AND_OP, i);
		}
	}
	public KW_OR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OR, 0); }
	public BIT_OR_OP(): TerminalNode[];
	public BIT_OR_OP(i: number): TerminalNode;
	public BIT_OR_OP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.BIT_OR_OP);
		} else {
			return this.getToken(FlinkSqlParser.BIT_OR_OP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_logicalOperator; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterLogicalOperator) {
			listener.enterLogicalOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitLogicalOperator) {
			listener.exitLogicalOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitLogicalOperator) {
			return visitor.visitLogicalOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public EQUAL_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EQUAL_SYMBOL, 0); }
	public GREATER_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.GREATER_SYMBOL, 0); }
	public LESS_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.LESS_SYMBOL, 0); }
	public EXCLAMATION_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXCLAMATION_SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitOperatorContext extends ParserRuleContext {
	public LESS_SYMBOL(): TerminalNode[];
	public LESS_SYMBOL(i: number): TerminalNode;
	public LESS_SYMBOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.LESS_SYMBOL);
		} else {
			return this.getToken(FlinkSqlParser.LESS_SYMBOL, i);
		}
	}
	public GREATER_SYMBOL(): TerminalNode[];
	public GREATER_SYMBOL(i: number): TerminalNode;
	public GREATER_SYMBOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.GREATER_SYMBOL);
		} else {
			return this.getToken(FlinkSqlParser.GREATER_SYMBOL, i);
		}
	}
	public BIT_AND_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_AND_OP, 0); }
	public BIT_XOR_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_XOR_OP, 0); }
	public BIT_OR_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_OR_OP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_bitOperator; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterBitOperator) {
			listener.enterBitOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitBitOperator) {
			listener.exitBitOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitBitOperator) {
			return visitor.visitBitOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MathOperatorContext extends ParserRuleContext {
	public ASTERISK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ASTERISK_SIGN, 0); }
	public SLASH_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SLASH_SIGN, 0); }
	public PENCENT_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.PENCENT_SIGN, 0); }
	public KW_DIV(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DIV, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ADD_SIGN, 0); }
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
	public DOUBLE_HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DOUBLE_HYPNEN_SIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_mathOperator; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterMathOperator) {
			listener.enterMathOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitMathOperator) {
			listener.exitMathOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitMathOperator) {
			return visitor.visitMathOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	public EXCLAMATION_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.EXCLAMATION_SYMBOL, 0); }
	public BIT_NOT_OP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_NOT_OP, 0); }
	public ADD_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ADD_SIGN, 0); }
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_unaryOperator; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterUnaryOperator) {
			listener.enterUnaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitUnaryOperator) {
			listener.exitUnaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitUnaryOperator) {
			return visitor.visitUnaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public timeIntervalExpression(): TimeIntervalExpressionContext | undefined {
		return this.tryGetRuleContext(0, TimeIntervalExpressionContext);
	}
	public timePointLiteral(): TimePointLiteralContext | undefined {
		return this.tryGetRuleContext(0, TimePointLiteralContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public decimalLiteral(): DecimalLiteralContext | undefined {
		return this.tryGetRuleContext(0, DecimalLiteralContext);
	}
	public HYPNEN_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.HYPNEN_SIGN, 0); }
	public booleanLiteral(): BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanLiteralContext);
	}
	public REAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.REAL_LITERAL, 0); }
	public BIT_STRING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.BIT_STRING, 0); }
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULL, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_constant; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimePointLiteralContext extends ParserRuleContext {
	public timePointUnit(): TimePointUnitContext {
		return this.getRuleContext(0, TimePointUnitContext);
	}
	public stringLiteral(): StringLiteralContext {
		return this.getRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_timePointLiteral; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTimePointLiteral) {
			listener.enterTimePointLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTimePointLiteral) {
			listener.exitTimePointLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTimePointLiteral) {
			return visitor.visitTimePointLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(FlinkSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecimalLiteralContext extends ParserRuleContext {
	public DIG_LITERAL(): TerminalNode { return this.getToken(FlinkSqlParser.DIG_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_decimalLiteral; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDecimalLiteral) {
			listener.enterDecimalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDecimalLiteral) {
			listener.exitDecimalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDecimalLiteral) {
			return visitor.visitDecimalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanLiteralContext extends ParserRuleContext {
	public KW_TRUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TRUE, 0); }
	public KW_FALSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_booleanLiteral; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetQuantifierContext extends ParserRuleContext {
	public KW_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DISTINCT, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_setQuantifier; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterSetQuantifier) {
			listener.enterSetQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitSetQuantifier) {
			listener.exitSetQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitSetQuantifier) {
			return visitor.visitSetQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimePointUnitContext extends ParserRuleContext {
	public KW_YEAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_YEAR, 0); }
	public KW_QUARTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_QUARTER, 0); }
	public KW_MONTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MONTH, 0); }
	public KW_WEEK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WEEK, 0); }
	public KW_DAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DAY, 0); }
	public KW_HOUR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_HOUR, 0); }
	public KW_MINUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MINUTE, 0); }
	public KW_SECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SECOND, 0); }
	public KW_MILLISECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MILLISECOND, 0); }
	public KW_MICROSECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MICROSECOND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_timePointUnit; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTimePointUnit) {
			listener.enterTimePointUnit(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTimePointUnit) {
			listener.exitTimePointUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTimePointUnit) {
			return visitor.visitTimePointUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeIntervalUnitContext extends ParserRuleContext {
	public KW_MILLENNIUM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MILLENNIUM, 0); }
	public KW_CENTURY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CENTURY, 0); }
	public KW_DECADE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DECADE, 0); }
	public KW_YEAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_YEAR, 0); }
	public KW_YEARS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_YEARS, 0); }
	public KW_QUARTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_QUARTER, 0); }
	public KW_MONTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MONTH, 0); }
	public KW_MONTHS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MONTHS, 0); }
	public KW_WEEK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WEEK, 0); }
	public KW_WEEKS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WEEKS, 0); }
	public KW_DAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DAY, 0); }
	public KW_DAYS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DAYS, 0); }
	public KW_HOUR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_HOUR, 0); }
	public KW_HOURS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_HOURS, 0); }
	public KW_MINUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MINUTE, 0); }
	public KW_MINUTES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MINUTES, 0); }
	public KW_SECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SECOND, 0); }
	public KW_SECONDS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SECONDS, 0); }
	public KW_MILLISECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MILLISECOND, 0); }
	public KW_MICROSECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MICROSECOND, 0); }
	public KW_NANOSECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NANOSECOND, 0); }
	public KW_EPOCH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EPOCH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_timeIntervalUnit; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTimeIntervalUnit) {
			listener.enterTimeIntervalUnit(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTimeIntervalUnit) {
			listener.exitTimeIntervalUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTimeIntervalUnit) {
			return visitor.visitTimeIntervalUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedKeywordsUsedAsFuncParamContext extends ParserRuleContext {
	public KW_LEADING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LEADING, 0); }
	public KW_TRAILING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TRAILING, 0); }
	public KW_BOTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BOTH, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALL, 0); }
	public KW_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DISTINCT, 0); }
	public ASTERISK_SIGN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.ASTERISK_SIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncParam; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterReservedKeywordsUsedAsFuncParam) {
			listener.enterReservedKeywordsUsedAsFuncParam(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitReservedKeywordsUsedAsFuncParam) {
			listener.exitReservedKeywordsUsedAsFuncParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitReservedKeywordsUsedAsFuncParam) {
			return visitor.visitReservedKeywordsUsedAsFuncParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedKeywordsUsedAsFuncNameContext extends ParserRuleContext {
	public KW_ABS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ABS, 0); }
	public KW_ARRAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ARRAY, 0); }
	public KW_AVG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AVG, 0); }
	public KW_CAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CAST, 0); }
	public KW_CEIL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CEIL, 0); }
	public KW_COALESCE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COALESCE, 0); }
	public KW_COLLECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COLLECT, 0); }
	public KW_COUNT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COUNT, 0); }
	public KW_DATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATE, 0); }
	public KW_GROUPING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GROUPING, 0); }
	public KW_HOUR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_HOUR, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IF, 0); }
	public KW_LAG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LAG, 0); }
	public KW_LEFT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LEFT, 0); }
	public KW_MAP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MAP, 0); }
	public KW_MINUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MINUTE, 0); }
	public KW_MONTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MONTH, 0); }
	public KW_OVERLAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OVERLAY, 0); }
	public KW_POSITION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_POSITION, 0); }
	public KW_POWER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_POWER, 0); }
	public KW_QUARTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_QUARTER, 0); }
	public KW_RANK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RANK, 0); }
	public KW_RIGHT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RIGHT, 0); }
	public KW_SECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SECOND, 0); }
	public KW_SUBSTRING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SUBSTRING, 0); }
	public KW_SUM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SUM, 0); }
	public KW_TIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIME, 0); }
	public KW_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMESTAMP, 0); }
	public KW_TRUNCATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TRUNCATE, 0); }
	public KW_UPPER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UPPER, 0); }
	public KW_WEEK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WEEK, 0); }
	public KW_YEAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_YEAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncName; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterReservedKeywordsUsedAsFuncName) {
			listener.enterReservedKeywordsUsedAsFuncName(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitReservedKeywordsUsedAsFuncName) {
			listener.exitReservedKeywordsUsedAsFuncName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitReservedKeywordsUsedAsFuncName) {
			return visitor.visitReservedKeywordsUsedAsFuncName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedKeywordsContext extends ParserRuleContext {
	public KW_ABS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ABS, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALL, 0); }
	public KW_ALLOW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALLOW, 0); }
	public KW_ALTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALTER, 0); }
	public KW_AND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AND, 0); }
	public KW_ANY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ANY, 0); }
	public KW_ARE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ARE, 0); }
	public KW_ARRAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ARRAY, 0); }
	public KW_AS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AS, 0); }
	public KW_ASYMMETRIC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ASYMMETRIC, 0); }
	public KW_AT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AT, 0); }
	public KW_AVG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AVG, 0); }
	public KW_BEGIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BEGIN, 0); }
	public KW_BETWEEN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BETWEEN, 0); }
	public KW_BIGINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BIGINT, 0); }
	public KW_BINARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BINARY, 0); }
	public KW_BIT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BIT, 0); }
	public KW_BLOB(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BLOB, 0); }
	public KW_BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BOOLEAN, 0); }
	public KW_BOTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BOTH, 0); }
	public KW_BY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BY, 0); }
	public KW_CALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CALL, 0); }
	public KW_CALLED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CALLED, 0); }
	public KW_CASCADED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CASCADED, 0); }
	public KW_CASE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CASE, 0); }
	public KW_CAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CAST, 0); }
	public KW_CEIL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CEIL, 0); }
	public KW_CHAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CHAR, 0); }
	public KW_CHARACTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CHARACTER, 0); }
	public KW_CHECK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CHECK, 0); }
	public KW_CLOB(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CLOB, 0); }
	public KW_CLOSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CLOSE, 0); }
	public KW_COALESCE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COALESCE, 0); }
	public KW_COLLATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COLLATE, 0); }
	public KW_COLLECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COLLECT, 0); }
	public KW_COLUMN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COLUMN, 0); }
	public KW_COMMIT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COMMIT, 0); }
	public KW_CONNECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONNECT, 0); }
	public KW_CONSTRAINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONSTRAINT, 0); }
	public KW_CONTAINS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONTAINS, 0); }
	public KW_CONVERT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONVERT, 0); }
	public KW_COUNT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COUNT, 0); }
	public KW_CREATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CREATE, 0); }
	public KW_CROSS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CROSS, 0); }
	public KW_CUBE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CUBE, 0); }
	public KW_CURRENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CURRENT, 0); }
	public KW_CURSOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CURSOR, 0); }
	public KW_CYCLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CYCLE, 0); }
	public KW_DATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATE, 0); }
	public KW_DATETIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATETIME, 0); }
	public KW_DAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DAY, 0); }
	public KW_DEC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DEC, 0); }
	public KW_DECIMAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DECIMAL, 0); }
	public KW_DECLARE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DECLARE, 0); }
	public KW_DEFAULT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DEFAULT, 0); }
	public KW_DEFINE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DEFINE, 0); }
	public KW_DELETE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DELETE, 0); }
	public KW_DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DESCRIBE, 0); }
	public KW_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DISTINCT, 0); }
	public KW_DOUBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DOUBLE, 0); }
	public KW_DROP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DROP, 0); }
	public KW_EACH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EACH, 0); }
	public KW_ELSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ELSE, 0); }
	public KW_END(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_END, 0); }
	public KW_EQUALS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EQUALS, 0); }
	public KW_EXCEPT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXCEPT, 0); }
	public KW_EXECUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXECUTE, 0); }
	public KW_EXISTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXISTS, 0); }
	public KW_EXPLAIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXPLAIN, 0); }
	public KW_EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXTERNAL, 0); }
	public KW_EXTRACT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXTRACT, 0); }
	public KW_FALSE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FALSE, 0); }
	public KW_FLOAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FLOAT, 0); }
	public KW_FOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FOR, 0); }
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FROM, 0); }
	public KW_FULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FULL, 0); }
	public KW_FUNCTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FUNCTION, 0); }
	public KW_GLOBAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GLOBAL, 0); }
	public KW_GRANT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GRANT, 0); }
	public KW_GROUP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GROUP, 0); }
	public KW_GROUPING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GROUPING, 0); }
	public KW_GROUPS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GROUPS, 0); }
	public KW_HAVING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_HAVING, 0); }
	public KW_HOUR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_HOUR, 0); }
	public KW_IMPORT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IMPORT, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IN, 0); }
	public KW_INCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INCLUDING, 0); }
	public KW_INNER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INNER, 0); }
	public KW_INOUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INOUT, 0); }
	public KW_INSERT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INSERT, 0); }
	public KW_INT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INT, 0); }
	public KW_INTEGER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INTEGER, 0); }
	public KW_INTERSECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INTERSECT, 0); }
	public KW_INTERVAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INTERVAL, 0); }
	public KW_INTO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INTO, 0); }
	public KW_IS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IS, 0); }
	public KW_JOIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JOIN, 0); }
	public KW_LAG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LAG, 0); }
	public KW_LANGUAGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LANGUAGE, 0); }
	public KW_LATERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LATERAL, 0); }
	public KW_LEADING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LEADING, 0); }
	public KW_LEFT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LEFT, 0); }
	public KW_LIKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LIKE, 0); }
	public KW_LIMIT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LIMIT, 0); }
	public KW_LOCAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LOCAL, 0); }
	public KW_MATCH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MATCH, 0); }
	public KW_MATCH_RECOGNIZE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MATCH_RECOGNIZE, 0); }
	public KW_MEASURES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MEASURES, 0); }
	public KW_MERGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MERGE, 0); }
	public KW_METADATA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_METADATA, 0); }
	public KW_MINUS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MINUS, 0); }
	public KW_MINUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MINUTE, 0); }
	public KW_MODIFIES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MODIFIES, 0); }
	public KW_MODULE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MODULE, 0); }
	public KW_MONTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MONTH, 0); }
	public KW_MULTISET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MULTISET, 0); }
	public KW_NATURAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NATURAL, 0); }
	public KW_NEXT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NEXT, 0); }
	public KW_NO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NO, 0); }
	public KW_NONE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NONE, 0); }
	public KW_NOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NOT, 0); }
	public KW_NULL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULL, 0); }
	public KW_NUMERIC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NUMERIC, 0); }
	public KW_OF(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OF, 0); }
	public KW_OFFSET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OFFSET, 0); }
	public KW_ON(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ON, 0); }
	public KW_ONE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ONE, 0); }
	public KW_OR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OR, 0); }
	public KW_ORDER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ORDER, 0); }
	public KW_OUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OUT, 0); }
	public KW_OUTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OUTER, 0); }
	public KW_OVER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OVER, 0); }
	public KW_OVERLAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OVERLAY, 0); }
	public KW_PARTITION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PARTITION, 0); }
	public KW_PATTERN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PATTERN, 0); }
	public KW_PER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PER, 0); }
	public KW_PERCENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PERCENT, 0); }
	public KW_PERIOD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PERIOD, 0); }
	public KW_POSITION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_POSITION, 0); }
	public KW_PRIMARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PRIMARY, 0); }
	public KW_RANGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RANGE, 0); }
	public KW_RANK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RANK, 0); }
	public KW_RESET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RESET, 0); }
	public KW_REVOKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_REVOKE, 0); }
	public KW_RIGHT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RIGHT, 0); }
	public KW_RLIKE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RLIKE, 0); }
	public KW_ROLLBACK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROLLBACK, 0); }
	public KW_ROLLUP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROLLUP, 0); }
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROW, 0); }
	public KW_ROWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROWS, 0); }
	public KW_SECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SECOND, 0); }
	public KW_SELECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SELECT, 0); }
	public KW_SET(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SET, 0); }
	public KW_SHOW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SHOW, 0); }
	public KW_SIMILAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SIMILAR, 0); }
	public KW_SKIP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SKIP, 0); }
	public KW_SMALLINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SMALLINT, 0); }
	public KW_START(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_START, 0); }
	public KW_STATIC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STATIC, 0); }
	public KW_SUBSTRING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SUBSTRING, 0); }
	public KW_SUM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SUM, 0); }
	public KW_SYSTEM_TIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SYSTEM_TIME, 0); }
	public KW_SYSTEM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SYSTEM, 0); }
	public KW_SYSTEM_USER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SYSTEM_USER, 0); }
	public KW_TABLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TABLE, 0); }
	public KW_TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TABLESAMPLE, 0); }
	public KW_THEN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_THEN, 0); }
	public KW_TIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIME, 0); }
	public KW_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMESTAMP, 0); }
	public KW_TINYINT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TINYINT, 0); }
	public KW_TO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TO, 0); }
	public KW_TRUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TRUE, 0); }
	public KW_TRUNCATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TRUNCATE, 0); }
	public KW_UNION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UNION, 0); }
	public KW_UNIQUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UNIQUE, 0); }
	public KW_UNKNOWN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UNKNOWN, 0); }
	public KW_UNNEST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UNNEST, 0); }
	public KW_UPPER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UPPER, 0); }
	public KW_UPSERT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UPSERT, 0); }
	public KW_USER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_USER, 0); }
	public KW_USING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_USING, 0); }
	public KW_VALUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VALUE, 0); }
	public KW_VALUES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VALUES, 0); }
	public KW_VARBINARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VARBINARY, 0); }
	public KW_VARCHAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VARCHAR, 0); }
	public KW_WHEN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WHEN, 0); }
	public KW_WHERE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WHERE, 0); }
	public KW_WINDOW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WINDOW, 0); }
	public KW_WITH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WITH, 0); }
	public KW_WITHIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WITHIN, 0); }
	public KW_WITHOUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WITHOUT, 0); }
	public KW_YEAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_YEAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_reservedKeywords; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterReservedKeywords) {
			listener.enterReservedKeywords(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitReservedKeywords) {
			listener.exitReservedKeywords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitReservedKeywords) {
			return visitor.visitReservedKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonReservedKeywordsContext extends ParserRuleContext {
	public KW_ADD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ADD, 0); }
	public KW_ADMIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ADMIN, 0); }
	public KW_AFTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AFTER, 0); }
	public KW_ANALYZE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ANALYZE, 0); }
	public KW_ASC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ASC, 0); }
	public KW_BEFORE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BEFORE, 0); }
	public KW_BYTES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BYTES, 0); }
	public KW_CASCADE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CASCADE, 0); }
	public KW_CATALOG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CATALOG, 0); }
	public KW_CATALOGS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CATALOGS, 0); }
	public KW_CENTURY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CENTURY, 0); }
	public KW_CHAIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CHAIN, 0); }
	public KW_CHANGELOG_MODE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CHANGELOG_MODE, 0); }
	public KW_CHARACTERS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CHARACTERS, 0); }
	public KW_COMMENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COMMENT, 0); }
	public KW_COMPACT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COMPACT, 0); }
	public KW_COLUMNS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COLUMNS, 0); }
	public KW_CONSTRAINTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONSTRAINTS, 0); }
	public KW_CONSTRUCTOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONSTRUCTOR, 0); }
	public KW_CUMULATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CUMULATE, 0); }
	public KW_DATA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATA, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATABASE, 0); }
	public KW_DATABASES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATABASES, 0); }
	public KW_DAYS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DAYS, 0); }
	public KW_DECADE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DECADE, 0); }
	public KW_DEFINED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DEFINED, 0); }
	public KW_DESC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DESC, 0); }
	public KW_DESCRIPTOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DESCRIPTOR, 0); }
	public KW_DIV(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DIV, 0); }
	public KW_ENCODING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ENCODING, 0); }
	public KW_ENFORCED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ENFORCED, 0); }
	public KW_ENGINE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ENGINE, 0); }
	public KW_ERROR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ERROR, 0); }
	public KW_ESTIMATED_COST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ESTIMATED_COST, 0); }
	public KW_EXCEPTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXCEPTION, 0); }
	public KW_EXCLUDE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXCLUDE, 0); }
	public KW_EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXCLUDING, 0); }
	public KW_EXTENDED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXTENDED, 0); }
	public KW_FILE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FILE, 0); }
	public KW_FINAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FINAL, 0); }
	public KW_FIRST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FIRST, 0); }
	public KW_FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FOLLOWING, 0); }
	public KW_FORMAT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FORMAT, 0); }
	public KW_FORTRAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FORTRAN, 0); }
	public KW_FOUND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FOUND, 0); }
	public KW_FRAC_SECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FRAC_SECOND, 0); }
	public KW_FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FUNCTIONS, 0); }
	public KW_GENERAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GENERAL, 0); }
	public KW_GENERATED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GENERATED, 0); }
	public KW_GO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GO, 0); }
	public KW_GOTO(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GOTO, 0); }
	public KW_GRANTED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GRANTED, 0); }
	public KW_HOP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_HOP, 0); }
	public KW_HOURS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_HOURS, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IF, 0); }
	public KW_IGNORE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IGNORE, 0); }
	public KW_INCREMENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INCREMENT, 0); }
	public KW_INPUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INPUT, 0); }
	public KW_INVOKER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INVOKER, 0); }
	public KW_JAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JAR, 0); }
	public KW_JARS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JARS, 0); }
	public KW_JAVA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JAVA, 0); }
	public KW_JSON(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JSON, 0); }
	public KW_JSON_EXECUTION_PLAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JSON_EXECUTION_PLAN, 0); }
	public KW_KEY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_KEY, 0); }
	public KW_KEY_MEMBER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_KEY_MEMBER, 0); }
	public KW_KEY_TYPE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_KEY_TYPE, 0); }
	public KW_LABEL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LABEL, 0); }
	public KW_LAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LAST, 0); }
	public KW_LENGTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LENGTH, 0); }
	public KW_LEVEL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LEVEL, 0); }
	public KW_LOAD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LOAD, 0); }
	public KW_MAP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MAP, 0); }
	public KW_MICROSECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MICROSECOND, 0); }
	public KW_MILLENNIUM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MILLENNIUM, 0); }
	public KW_MILLISECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MILLISECOND, 0); }
	public KW_MINUTES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MINUTES, 0); }
	public KW_MINVALUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MINVALUE, 0); }
	public KW_MODIFY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MODIFY, 0); }
	public KW_MODULES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MODULES, 0); }
	public KW_MONTHS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MONTHS, 0); }
	public KW_NANOSECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NANOSECOND, 0); }
	public KW_NULLS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULLS, 0); }
	public KW_NUMBER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NUMBER, 0); }
	public KW_OPTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OPTION, 0); }
	public KW_OPTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OPTIONS, 0); }
	public KW_ORDERING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ORDERING, 0); }
	public KW_OUTPUT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OUTPUT, 0); }
	public KW_OVERWRITE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OVERWRITE, 0); }
	public KW_OVERWRITING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OVERWRITING, 0); }
	public KW_PARTITIONED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PARTITIONED, 0); }
	public KW_PARTITIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PARTITIONS, 0); }
	public KW_PASSING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PASSING, 0); }
	public KW_PAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PAST, 0); }
	public KW_PATH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PATH, 0); }
	public KW_PLACING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PLACING, 0); }
	public KW_PLAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PLAN, 0); }
	public KW_PRECEDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PRECEDING, 0); }
	public KW_PRESERVE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PRESERVE, 0); }
	public KW_PRIOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PRIOR, 0); }
	public KW_PRIVILEGES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PRIVILEGES, 0); }
	public KW_PUBLIC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PUBLIC, 0); }
	public KW_PYTHON(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON, 0); }
	public KW_PYTHON_FILES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_FILES, 0); }
	public KW_PYTHON_REQUIREMENTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_REQUIREMENTS, 0); }
	public KW_PYTHON_DEPENDENCIES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_DEPENDENCIES, 0); }
	public KW_PYTHON_JAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_JAR, 0); }
	public KW_PYTHON_ARCHIVES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_ARCHIVES, 0); }
	public KW_PYTHON_PARAMETER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_PARAMETER, 0); }
	public KW_QUARTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_QUARTER, 0); }
	public KW_RAW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RAW, 0); }
	public KW_READ(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_READ, 0); }
	public KW_RELATIVE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RELATIVE, 0); }
	public KW_REMOVE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_REMOVE, 0); }
	public KW_RENAME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RENAME, 0); }
	public KW_REPLACE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_REPLACE, 0); }
	public KW_RESPECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RESPECT, 0); }
	public KW_RESTART(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RESTART, 0); }
	public KW_RESTRICT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RESTRICT, 0); }
	public KW_ROLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROLE, 0); }
	public KW_ROW_COUNT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROW_COUNT, 0); }
	public KW_SCALA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SCALA, 0); }
	public KW_SCALAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SCALAR, 0); }
	public KW_SCALE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SCALE, 0); }
	public KW_SCHEMA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SCHEMA, 0); }
	public KW_SECONDS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SECONDS, 0); }
	public KW_SECTION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SECTION, 0); }
	public KW_SECURITY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SECURITY, 0); }
	public KW_SELF(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SELF, 0); }
	public KW_SERVER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SERVER, 0); }
	public KW_SERVER_NAME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SERVER_NAME, 0); }
	public KW_SESSION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SESSION, 0); }
	public KW_SETS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SETS, 0); }
	public KW_SIMPLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SIMPLE, 0); }
	public KW_SIZE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SIZE, 0); }
	public KW_SLIDE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SLIDE, 0); }
	public KW_SOURCE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SOURCE, 0); }
	public KW_SPACE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SPACE, 0); }
	public KW_STATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STATE, 0); }
	public KW_STATEMENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STATEMENT, 0); }
	public KW_STEP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STEP, 0); }
	public KW_STRING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STRING, 0); }
	public KW_STRUCTURE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STRUCTURE, 0); }
	public KW_STYLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STYLE, 0); }
	public KW_TABLES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TABLES, 0); }
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TEMPORARY, 0); }
	public KW_TIMECOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMECOL, 0); }
	public KW_TIMESTAMP_LTZ(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMESTAMP_LTZ, 0); }
	public KW_TIMESTAMPADD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMESTAMPADD, 0); }
	public KW_TIMESTAMPDIFF(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMESTAMPDIFF, 0); }
	public KW_TRANSFORM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TRANSFORM, 0); }
	public KW_TUMBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TUMBLE, 0); }
	public KW_TYPE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TYPE, 0); }
	public KW_UNDER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UNDER, 0); }
	public KW_UNLOAD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UNLOAD, 0); }
	public KW_USAGE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_USAGE, 0); }
	public KW_USE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_USE, 0); }
	public KW_UTF16(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UTF16, 0); }
	public KW_UTF32(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UTF32, 0); }
	public KW_UTF8(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UTF8, 0); }
	public KW_VERSION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VERSION, 0); }
	public KW_VIEW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VIEW, 0); }
	public KW_VIEWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VIEWS, 0); }
	public KW_VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VIRTUAL, 0); }
	public KW_WATERMARK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WATERMARK, 0); }
	public KW_WATERMARKS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WATERMARKS, 0); }
	public KW_WEEK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WEEK, 0); }
	public KW_WORK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WORK, 0); }
	public KW_WRAPPER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WRAPPER, 0); }
	public KW_YEARS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_YEARS, 0); }
	public KW_ZONE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ZONE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_nonReservedKeywords; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterNonReservedKeywords) {
			listener.enterNonReservedKeywords(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitNonReservedKeywords) {
			listener.exitNonReservedKeywords(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitNonReservedKeywords) {
			return visitor.visitNonReservedKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


