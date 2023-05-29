// Generated from /Users/hayden/Desktop/dt-works/dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import FlinkSqlParserListener from "./FlinkSqlParserListener.js";
import FlinkSqlParserVisitor from "./FlinkSqlParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class FlinkSqlParser extends Parser {
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
	public static readonly EOF = Token.EOF;
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
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            "'ADD'", "'ADMIN'", 
                                                            "'AFTER'", "'ANALYZE'", 
                                                            "'ASC'", "'BEFORE'", 
                                                            "'BYTES'", "'CASCADE'", 
                                                            "'CATALOG'", 
                                                            "'CATALOGS'", 
                                                            "'CENTURY'", 
                                                            "'CHAIN'", "'CHANGELOG_MODE'", 
                                                            "'CHARACTERS'", 
                                                            "'COMMENT'", 
                                                            "'COMPACT'", 
                                                            "'COLUMNS'", 
                                                            "'CONSTRAINTS'", 
                                                            "'CONSTRUCTOR'", 
                                                            "'CUMULATE'", 
                                                            "'DATA'", "'DATABASE'", 
                                                            "'DATABASES'", 
                                                            "'DAYS'", "'DECADE'", 
                                                            "'DEFINED'", 
                                                            "'DESC'", "'DESCRIPTOR'", 
                                                            "'DIV'", "'ENCODING'", 
                                                            "'ENFORCED'", 
                                                            "'ENGINE'", 
                                                            "'EPOCH'", "'ERROR'", 
                                                            "'ESTIMATED_COST'", 
                                                            "'EXCEPTION'", 
                                                            "'EXCLUDE'", 
                                                            "'EXCLUDING'", 
                                                            "'EXTENDED'", 
                                                            "'FILE'", "'FINAL'", 
                                                            "'FIRST'", "'FOLLOWING'", 
                                                            "'FORMAT'", 
                                                            "'FORTRAN'", 
                                                            "'FOUND'", "'FRAC_SECOND'", 
                                                            "'FUNCTIONS'", 
                                                            "'GENERAL'", 
                                                            "'GENERATED'", 
                                                            "'GO'", "'GOTO'", 
                                                            "'GRANTED'", 
                                                            "'HOP'", "'HOURS'", 
                                                            "'IF'", "'IGNORE'", 
                                                            "'INCREMENT'", 
                                                            "'INPUT'", "'INVOKER'", 
                                                            "'JAR'", "'JARS'", 
                                                            "'JAVA'", "'JSON'", 
                                                            "'JSON_EXECUTION_PLAN'", 
                                                            "'KEY'", "'KEY_MEMBER'", 
                                                            "'KEY_TYPE'", 
                                                            "'LABEL'", "'LAST'", 
                                                            "'LENGTH'", 
                                                            "'LEVEL'", "'LOAD'", 
                                                            "'MAP'", "'MICROSECOND'", 
                                                            "'MILLENNIUM'", 
                                                            "'MILLISECOND'", 
                                                            "'MINUTES'", 
                                                            "'MINVALUE'", 
                                                            "'MODIFY'", 
                                                            "'MODULES'", 
                                                            "'MONTHS'", 
                                                            "'NANOSECOND'", 
                                                            "'NULLS'", "'NUMBER'", 
                                                            "'OPTION'", 
                                                            "'OPTIONS'", 
                                                            "'ORDERING'", 
                                                            "'OUTPUT'", 
                                                            "'OVERWRITE'", 
                                                            "'OVERWRITING'", 
                                                            "'PARTITIONED'", 
                                                            "'PARTITIONS'", 
                                                            "'PASSING'", 
                                                            "'PAST'", "'PATH'", 
                                                            "'PLACING'", 
                                                            "'PLAN'", "'PRECEDING'", 
                                                            "'PRESERVE'", 
                                                            "'PRIOR'", "'PRIVILEGES'", 
                                                            "'PUBLIC'", 
                                                            "'PYTHON'", 
                                                            "'PYTHON_FILES'", 
                                                            "'PYTHON_REQUIREMENTS'", 
                                                            "'PYTHON_DEPENDENCIES'", 
                                                            "'PYTHON_JAR'", 
                                                            "'PYTHON_ARCHIVES'", 
                                                            "'PYTHON_PARAMETER'", 
                                                            "'QUARTER'", 
                                                            "'RAW'", "'READ'", 
                                                            "'RELATIVE'", 
                                                            "'REMOVE'", 
                                                            "'RENAME'", 
                                                            "'REPLACE'", 
                                                            "'RESPECT'", 
                                                            "'RESTART'", 
                                                            "'RESTRICT'", 
                                                            "'ROLE'", "'ROW_COUNT'", 
                                                            "'SCALA'", "'SCALAR'", 
                                                            "'SCALE'", "'SCHEMA'", 
                                                            "'SECONDS'", 
                                                            "'SECTION'", 
                                                            "'SECURITY'", 
                                                            "'SELF'", "'SERVER'", 
                                                            "'SERVER_NAME'", 
                                                            "'SESSION'", 
                                                            "'SETS'", "'SIMPLE'", 
                                                            "'SIZE'", "'SLIDE'", 
                                                            "'SOURCE'", 
                                                            "'SPACE'", "'STATE'", 
                                                            "'STATEMENT'", 
                                                            "'STEP'", "'STRING'", 
                                                            "'STRUCTURE'", 
                                                            "'STYLE'", "'TABLES'", 
                                                            "'TEMPORARY'", 
                                                            "'TIMECOL'", 
                                                            "'TIMESTAMP_LTZ'", 
                                                            "'TIMESTAMPADD'", 
                                                            "'TIMESTAMPDIFF'", 
                                                            "'TRANSFORM'", 
                                                            "'TUMBLE'", 
                                                            "'TYPE'", "'UNDER'", 
                                                            "'UNLOAD'", 
                                                            "'USAGE'", "'USE'", 
                                                            "'UTF16'", "'UTF32'", 
                                                            "'UTF8'", "'VERSION'", 
                                                            "'VIEW'", "'VIEWS'", 
                                                            "'VIRTUAL'", 
                                                            "'WATERMARK'", 
                                                            "'WATERMARKS'", 
                                                            "'WEEK'", "'WEEKS'", 
                                                            "'WORK'", "'WRAPPER'", 
                                                            "'YEARS'", "'ZONE'", 
                                                            "'ABS'", "'ALL'", 
                                                            "'ALLOW'", "'ALTER'", 
                                                            "'AND'", "'ANY'", 
                                                            "'ARE'", "'ARRAY'", 
                                                            "'AS'", "'ASYMMETRIC'", 
                                                            "'AT'", "'AVG'", 
                                                            "'BEGIN'", "'BETWEEN'", 
                                                            "'BIGINT'", 
                                                            "'BINARY'", 
                                                            "'BIT'", "'BLOB'", 
                                                            "'BOOLEAN'", 
                                                            "'BOTH'", "'BY'", 
                                                            "'CALL'", "'CALLED'", 
                                                            "'CASCADED'", 
                                                            "'CASE'", "'CAST'", 
                                                            "'CEIL'", "'CHAR'", 
                                                            "'CHARACTER'", 
                                                            "'CHECK'", "'CLOB'", 
                                                            "'CLOSE'", "'COALESCE'", 
                                                            "'COLLATE'", 
                                                            "'COLLECT'", 
                                                            "'COLUMN'", 
                                                            "'COMMIT'", 
                                                            "'CONNECT'", 
                                                            "'CONSTRAINT'", 
                                                            "'CONTAINS'", 
                                                            "'CONVERT'", 
                                                            "'COUNT'", "'CREATE'", 
                                                            "'CROSS'", "'CUBE'", 
                                                            "'CURRENT'", 
                                                            "'CURSOR'", 
                                                            "'CYCLE'", "'DATE'", 
                                                            "'DATETIME'", 
                                                            "'DAY'", "'DEC'", 
                                                            "'DECIMAL'", 
                                                            "'DECLARE'", 
                                                            "'DEFAULT'", 
                                                            "'DEFINE'", 
                                                            "'DELETE'", 
                                                            "'DESCRIBE'", 
                                                            "'DISTINCT'", 
                                                            "'DOUBLE'", 
                                                            "'DROP'", "'EACH'", 
                                                            "'ELSE'", "'END'", 
                                                            "'EQUALS'", 
                                                            "'ESCAPE'", 
                                                            "'EXCEPT'", 
                                                            "'EXECUTE'", 
                                                            "'EXISTS'", 
                                                            "'EXPLAIN'", 
                                                            "'EXTERNAL'", 
                                                            "'EXTRACT'", 
                                                            "'FALSE'", "'FLOAT'", 
                                                            "'FOR'", "'FROM'", 
                                                            "'FULL'", "'FUNCTION'", 
                                                            "'GLOBAL'", 
                                                            "'GRANT'", "'GROUP'", 
                                                            "'GROUPING'", 
                                                            "'GROUPS'", 
                                                            "'HAVING'", 
                                                            "'HOUR'", "'IMPORT'", 
                                                            "'IN'", "'INCLUDING'", 
                                                            "'INNER'", "'INOUT'", 
                                                            "'INSERT'", 
                                                            "'INT'", "'INTEGER'", 
                                                            "'INTERSECT'", 
                                                            "'INTERVAL'", 
                                                            "'INTO'", "'IS'", 
                                                            "'JOIN'", "'LAG'", 
                                                            "'LANGUAGE'", 
                                                            "'LATERAL'", 
                                                            "'LEADING'", 
                                                            "'LEFT'", "'LIKE'", 
                                                            "'LIMIT'", "'LOCAL'", 
                                                            "'MATCH'", "'MATCH_RECOGNIZE'", 
                                                            "'MEASURES'", 
                                                            "'MERGE'", "'METADATA'", 
                                                            "'MINUS'", "'MINUTE'", 
                                                            "'MODIFIES'", 
                                                            "'MODULE'", 
                                                            "'MONTH'", "'MULTISET'", 
                                                            "'NATURAL'", 
                                                            "'NEXT'", "'NO'", 
                                                            "'NONE'", "'NOT'", 
                                                            "'NULL'", "'NUMERIC'", 
                                                            "'OF'", "'OFFSET'", 
                                                            "'ON'", "'ONE'", 
                                                            "'OR'", "'ORDER'", 
                                                            "'OUT'", "'OUTER'", 
                                                            "'OVER'", "'OVERLAY'", 
                                                            "'PARTITION'", 
                                                            "'PATTERN'", 
                                                            "'PER'", "'PERCENT'", 
                                                            "'PERIOD'", 
                                                            "'POSITION'", 
                                                            "'POWER'", "'PRIMARY'", 
                                                            "'RANGE'", "'RANK'", 
                                                            "'RESET'", "'REVOKE'", 
                                                            "'RIGHT'", "'RLIKE'", 
                                                            "'ROLLBACK'", 
                                                            "'ROLLUP'", 
                                                            "'ROW'", "'ROWS'", 
                                                            "'SECOND'", 
                                                            "'SELECT'", 
                                                            "'SET'", "'SHOW'", 
                                                            "'SIMILAR'", 
                                                            "'SKIP'", "'SMALLINT'", 
                                                            "'START'", "'STATIC'", 
                                                            "'SUBSTRING'", 
                                                            "'SUM'", "'SYMMETRIC'", 
                                                            "'SYSTEM'", 
                                                            "'SYSTEM_TIME'", 
                                                            "'SYSTEM_USER'", 
                                                            "'TABLE'", "'TABLESAMPLE'", 
                                                            "'THEN'", "'TIME'", 
                                                            "'TIMESTAMP'", 
                                                            "'TINYINT'", 
                                                            "'TO'", "'TRAILING'", 
                                                            "'TRUE'", "'TRUNCATE'", 
                                                            "'UNION'", "'UNIQUE'", 
                                                            "'UNKNOWN'", 
                                                            "'UNNEST'", 
                                                            "'UPPER'", "'UPSERT'", 
                                                            "'USER'", "'USING'", 
                                                            "'VALUE'", "'VALUES'", 
                                                            "'VARBINARY'", 
                                                            "'VARCHAR'", 
                                                            "'WHEN'", "'WHERE'", 
                                                            "'WINDOW'", 
                                                            "'WITH'", "'WITHIN'", 
                                                            "'WITHOUT'", 
                                                            "'YEAR'", "'='", 
                                                            "'>'", "'<'", 
                                                            "'!'", "'~'", 
                                                            "'|'", "'&'", 
                                                            "'^'", "'.'", 
                                                            "'['", "']'", 
                                                            "'('", "')'", 
                                                            "'{'", "'}'", 
                                                            "','", "';'", 
                                                            "'@'", "'''", 
                                                            "'\"'", "'`'", 
                                                            "':'", "'*'", 
                                                            "'_'", "'-'", 
                                                            "'+'", "'%'", 
                                                            "'||'", "'--'", 
                                                            "'/'", "'?'", 
                                                            "'=>'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "SPACE", 
                                                             "COMMENT_INPUT", 
                                                             "LINE_COMMENT", 
                                                             "KW_ADD", "KW_ADMIN", 
                                                             "KW_AFTER", 
                                                             "KW_ANALYZE", 
                                                             "KW_ASC", "KW_BEFORE", 
                                                             "KW_BYTES", 
                                                             "KW_CASCADE", 
                                                             "KW_CATALOG", 
                                                             "KW_CATALOGS", 
                                                             "KW_CENTURY", 
                                                             "KW_CHAIN", 
                                                             "KW_CHANGELOG_MODE", 
                                                             "KW_CHARACTERS", 
                                                             "KW_COMMENT", 
                                                             "KW_COMPACT", 
                                                             "KW_COLUMNS", 
                                                             "KW_CONSTRAINTS", 
                                                             "KW_CONSTRUCTOR", 
                                                             "KW_CUMULATE", 
                                                             "KW_DATA", 
                                                             "KW_DATABASE", 
                                                             "KW_DATABASES", 
                                                             "KW_DAYS", 
                                                             "KW_DECADE", 
                                                             "KW_DEFINED", 
                                                             "KW_DESC", 
                                                             "KW_DESCRIPTOR", 
                                                             "KW_DIV", "KW_ENCODING", 
                                                             "KW_ENFORCED", 
                                                             "KW_ENGINE", 
                                                             "KW_EPOCH", 
                                                             "KW_ERROR", 
                                                             "KW_ESTIMATED_COST", 
                                                             "KW_EXCEPTION", 
                                                             "KW_EXCLUDE", 
                                                             "KW_EXCLUDING", 
                                                             "KW_EXTENDED", 
                                                             "KW_FILE", 
                                                             "KW_FINAL", 
                                                             "KW_FIRST", 
                                                             "KW_FOLLOWING", 
                                                             "KW_FORMAT", 
                                                             "KW_FORTRAN", 
                                                             "KW_FOUND", 
                                                             "KW_FRAC_SECOND", 
                                                             "KW_FUNCTIONS", 
                                                             "KW_GENERAL", 
                                                             "KW_GENERATED", 
                                                             "KW_GO", "KW_GOTO", 
                                                             "KW_GRANTED", 
                                                             "KW_HOP", "KW_HOURS", 
                                                             "KW_IF", "KW_IGNORE", 
                                                             "KW_INCREMENT", 
                                                             "KW_INPUT", 
                                                             "KW_INVOKER", 
                                                             "KW_JAR", "KW_JARS", 
                                                             "KW_JAVA", 
                                                             "KW_JSON", 
                                                             "KW_JSON_EXECUTION_PLAN", 
                                                             "KW_KEY", "KW_KEY_MEMBER", 
                                                             "KW_KEY_TYPE", 
                                                             "KW_LABEL", 
                                                             "KW_LAST", 
                                                             "KW_LENGTH", 
                                                             "KW_LEVEL", 
                                                             "KW_LOAD", 
                                                             "KW_MAP", "KW_MICROSECOND", 
                                                             "KW_MILLENNIUM", 
                                                             "KW_MILLISECOND", 
                                                             "KW_MINUTES", 
                                                             "KW_MINVALUE", 
                                                             "KW_MODIFY", 
                                                             "KW_MODULES", 
                                                             "KW_MONTHS", 
                                                             "KW_NANOSECOND", 
                                                             "KW_NULLS", 
                                                             "KW_NUMBER", 
                                                             "KW_OPTION", 
                                                             "KW_OPTIONS", 
                                                             "KW_ORDERING", 
                                                             "KW_OUTPUT", 
                                                             "KW_OVERWRITE", 
                                                             "KW_OVERWRITING", 
                                                             "KW_PARTITIONED", 
                                                             "KW_PARTITIONS", 
                                                             "KW_PASSING", 
                                                             "KW_PAST", 
                                                             "KW_PATH", 
                                                             "KW_PLACING", 
                                                             "KW_PLAN", 
                                                             "KW_PRECEDING", 
                                                             "KW_PRESERVE", 
                                                             "KW_PRIOR", 
                                                             "KW_PRIVILEGES", 
                                                             "KW_PUBLIC", 
                                                             "KW_PYTHON", 
                                                             "KW_PYTHON_FILES", 
                                                             "KW_PYTHON_REQUIREMENTS", 
                                                             "KW_PYTHON_DEPENDENCIES", 
                                                             "KW_PYTHON_JAR", 
                                                             "KW_PYTHON_ARCHIVES", 
                                                             "KW_PYTHON_PARAMETER", 
                                                             "KW_QUARTER", 
                                                             "KW_RAW", "KW_READ", 
                                                             "KW_RELATIVE", 
                                                             "KW_REMOVE", 
                                                             "KW_RENAME", 
                                                             "KW_REPLACE", 
                                                             "KW_RESPECT", 
                                                             "KW_RESTART", 
                                                             "KW_RESTRICT", 
                                                             "KW_ROLE", 
                                                             "KW_ROW_COUNT", 
                                                             "KW_SCALA", 
                                                             "KW_SCALAR", 
                                                             "KW_SCALE", 
                                                             "KW_SCHEMA", 
                                                             "KW_SECONDS", 
                                                             "KW_SECTION", 
                                                             "KW_SECURITY", 
                                                             "KW_SELF", 
                                                             "KW_SERVER", 
                                                             "KW_SERVER_NAME", 
                                                             "KW_SESSION", 
                                                             "KW_SETS", 
                                                             "KW_SIMPLE", 
                                                             "KW_SIZE", 
                                                             "KW_SLIDE", 
                                                             "KW_SOURCE", 
                                                             "KW_SPACE", 
                                                             "KW_STATE", 
                                                             "KW_STATEMENT", 
                                                             "KW_STEP", 
                                                             "KW_STRING", 
                                                             "KW_STRUCTURE", 
                                                             "KW_STYLE", 
                                                             "KW_TABLES", 
                                                             "KW_TEMPORARY", 
                                                             "KW_TIMECOL", 
                                                             "KW_TIMESTAMP_LTZ", 
                                                             "KW_TIMESTAMPADD", 
                                                             "KW_TIMESTAMPDIFF", 
                                                             "KW_TRANSFORM", 
                                                             "KW_TUMBLE", 
                                                             "KW_TYPE", 
                                                             "KW_UNDER", 
                                                             "KW_UNLOAD", 
                                                             "KW_USAGE", 
                                                             "KW_USE", "KW_UTF16", 
                                                             "KW_UTF32", 
                                                             "KW_UTF8", 
                                                             "KW_VERSION", 
                                                             "KW_VIEW", 
                                                             "KW_VIEWS", 
                                                             "KW_VIRTUAL", 
                                                             "KW_WATERMARK", 
                                                             "KW_WATERMARKS", 
                                                             "KW_WEEK", 
                                                             "KW_WEEKS", 
                                                             "KW_WORK", 
                                                             "KW_WRAPPER", 
                                                             "KW_YEARS", 
                                                             "KW_ZONE", 
                                                             "KW_ABS", "KW_ALL", 
                                                             "KW_ALLOW", 
                                                             "KW_ALTER", 
                                                             "KW_AND", "KW_ANY", 
                                                             "KW_ARE", "KW_ARRAY", 
                                                             "KW_AS", "KW_ASYMMETRIC", 
                                                             "KW_AT", "KW_AVG", 
                                                             "KW_BEGIN", 
                                                             "KW_BETWEEN", 
                                                             "KW_BIGINT", 
                                                             "KW_BINARY", 
                                                             "KW_BIT", "KW_BLOB", 
                                                             "KW_BOOLEAN", 
                                                             "KW_BOTH", 
                                                             "KW_BY", "KW_CALL", 
                                                             "KW_CALLED", 
                                                             "KW_CASCADED", 
                                                             "KW_CASE", 
                                                             "KW_CAST", 
                                                             "KW_CEIL", 
                                                             "KW_CHAR", 
                                                             "KW_CHARACTER", 
                                                             "KW_CHECK", 
                                                             "KW_CLOB", 
                                                             "KW_CLOSE", 
                                                             "KW_COALESCE", 
                                                             "KW_COLLATE", 
                                                             "KW_COLLECT", 
                                                             "KW_COLUMN", 
                                                             "KW_COMMIT", 
                                                             "KW_CONNECT", 
                                                             "KW_CONSTRAINT", 
                                                             "KW_CONTAINS", 
                                                             "KW_CONVERT", 
                                                             "KW_COUNT", 
                                                             "KW_CREATE", 
                                                             "KW_CROSS", 
                                                             "KW_CUBE", 
                                                             "KW_CURRENT", 
                                                             "KW_CURSOR", 
                                                             "KW_CYCLE", 
                                                             "KW_DATE", 
                                                             "KW_DATETIME", 
                                                             "KW_DAY", "KW_DEC", 
                                                             "KW_DECIMAL", 
                                                             "KW_DECLARE", 
                                                             "KW_DEFAULT", 
                                                             "KW_DEFINE", 
                                                             "KW_DELETE", 
                                                             "KW_DESCRIBE", 
                                                             "KW_DISTINCT", 
                                                             "KW_DOUBLE", 
                                                             "KW_DROP", 
                                                             "KW_EACH", 
                                                             "KW_ELSE", 
                                                             "KW_END", "KW_EQUALS", 
                                                             "KW_ESCAPE", 
                                                             "KW_EXCEPT", 
                                                             "KW_EXECUTE", 
                                                             "KW_EXISTS", 
                                                             "KW_EXPLAIN", 
                                                             "KW_EXTERNAL", 
                                                             "KW_EXTRACT", 
                                                             "KW_FALSE", 
                                                             "KW_FLOAT", 
                                                             "KW_FOR", "KW_FROM", 
                                                             "KW_FULL", 
                                                             "KW_FUNCTION", 
                                                             "KW_GLOBAL", 
                                                             "KW_GRANT", 
                                                             "KW_GROUP", 
                                                             "KW_GROUPING", 
                                                             "KW_GROUPS", 
                                                             "KW_HAVING", 
                                                             "KW_HOUR", 
                                                             "KW_IMPORT", 
                                                             "KW_IN", "KW_INCLUDING", 
                                                             "KW_INNER", 
                                                             "KW_INOUT", 
                                                             "KW_INSERT", 
                                                             "KW_INT", "KW_INTEGER", 
                                                             "KW_INTERSECT", 
                                                             "KW_INTERVAL", 
                                                             "KW_INTO", 
                                                             "KW_IS", "KW_JOIN", 
                                                             "KW_LAG", "KW_LANGUAGE", 
                                                             "KW_LATERAL", 
                                                             "KW_LEADING", 
                                                             "KW_LEFT", 
                                                             "KW_LIKE", 
                                                             "KW_LIMIT", 
                                                             "KW_LOCAL", 
                                                             "KW_MATCH", 
                                                             "KW_MATCH_RECOGNIZE", 
                                                             "KW_MEASURES", 
                                                             "KW_MERGE", 
                                                             "KW_METADATA", 
                                                             "KW_MINUS", 
                                                             "KW_MINUTE", 
                                                             "KW_MODIFIES", 
                                                             "KW_MODULE", 
                                                             "KW_MONTH", 
                                                             "KW_MULTISET", 
                                                             "KW_NATURAL", 
                                                             "KW_NEXT", 
                                                             "KW_NO", "KW_NONE", 
                                                             "KW_NOT", "KW_NULL", 
                                                             "KW_NUMERIC", 
                                                             "KW_OF", "KW_OFFSET", 
                                                             "KW_ON", "KW_ONE", 
                                                             "KW_OR", "KW_ORDER", 
                                                             "KW_OUT", "KW_OUTER", 
                                                             "KW_OVER", 
                                                             "KW_OVERLAY", 
                                                             "KW_PARTITION", 
                                                             "KW_PATTERN", 
                                                             "KW_PER", "KW_PERCENT", 
                                                             "KW_PERIOD", 
                                                             "KW_POSITION", 
                                                             "KW_POWER", 
                                                             "KW_PRIMARY", 
                                                             "KW_RANGE", 
                                                             "KW_RANK", 
                                                             "KW_RESET", 
                                                             "KW_REVOKE", 
                                                             "KW_RIGHT", 
                                                             "KW_RLIKE", 
                                                             "KW_ROLLBACK", 
                                                             "KW_ROLLUP", 
                                                             "KW_ROW", "KW_ROWS", 
                                                             "KW_SECOND", 
                                                             "KW_SELECT", 
                                                             "KW_SET", "KW_SHOW", 
                                                             "KW_SIMILAR", 
                                                             "KW_SKIP", 
                                                             "KW_SMALLINT", 
                                                             "KW_START", 
                                                             "KW_STATIC", 
                                                             "KW_SUBSTRING", 
                                                             "KW_SUM", "KW_SYMMETRIC", 
                                                             "KW_SYSTEM", 
                                                             "KW_SYSTEM_TIME", 
                                                             "KW_SYSTEM_USER", 
                                                             "KW_TABLE", 
                                                             "KW_TABLESAMPLE", 
                                                             "KW_THEN", 
                                                             "KW_TIME", 
                                                             "KW_TIMESTAMP", 
                                                             "KW_TINYINT", 
                                                             "KW_TO", "KW_TRAILING", 
                                                             "KW_TRUE", 
                                                             "KW_TRUNCATE", 
                                                             "KW_UNION", 
                                                             "KW_UNIQUE", 
                                                             "KW_UNKNOWN", 
                                                             "KW_UNNEST", 
                                                             "KW_UPPER", 
                                                             "KW_UPSERT", 
                                                             "KW_USER", 
                                                             "KW_USING", 
                                                             "KW_VALUE", 
                                                             "KW_VALUES", 
                                                             "KW_VARBINARY", 
                                                             "KW_VARCHAR", 
                                                             "KW_WHEN", 
                                                             "KW_WHERE", 
                                                             "KW_WINDOW", 
                                                             "KW_WITH", 
                                                             "KW_WITHIN", 
                                                             "KW_WITHOUT", 
                                                             "KW_YEAR", 
                                                             "EQUAL_SYMBOL", 
                                                             "GREATER_SYMBOL", 
                                                             "LESS_SYMBOL", 
                                                             "EXCLAMATION_SYMBOL", 
                                                             "BIT_NOT_OP", 
                                                             "BIT_OR_OP", 
                                                             "BIT_AND_OP", 
                                                             "BIT_XOR_OP", 
                                                             "DOT", "LS_BRACKET", 
                                                             "RS_BRACKET", 
                                                             "LR_BRACKET", 
                                                             "RR_BRACKET", 
                                                             "LB_BRACKET", 
                                                             "RB_BRACKET", 
                                                             "COMMA", "SEMICOLON", 
                                                             "AT_SIGN", 
                                                             "SINGLE_QUOTE_SYMB", 
                                                             "DOUBLE_QUOTE_SYMB", 
                                                             "REVERSE_QUOTE_SYMB", 
                                                             "COLON_SYMB", 
                                                             "ASTERISK_SIGN", 
                                                             "UNDERLINE_SIGN", 
                                                             "HYPNEN_SIGN", 
                                                             "ADD_SIGN", 
                                                             "PENCENT_SIGN", 
                                                             "DOUBLE_VERTICAL_SIGN", 
                                                             "DOUBLE_HYPNEN_SIGN", 
                                                             "SLASH_SIGN", 
                                                             "QUESTION_MARK_SIGN", 
                                                             "DOUBLE_RIGHT_ARROW", 
                                                             "STRING_LITERAL", 
                                                             "DIG_LITERAL", 
                                                             "REAL_LITERAL", 
                                                             "BIT_STRING", 
                                                             "ID_LITERAL", 
                                                             "SLASH_TEXT" ];
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
	public get grammarFileName(): string { return "FlinkSqlParser.g4"; }
	public get literalNames(): (string | null)[] { return FlinkSqlParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return FlinkSqlParser.symbolicNames; }
	public get ruleNames(): string[] { return FlinkSqlParser.ruleNames; }
	public get serializedATN(): number[] { return FlinkSqlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, FlinkSqlParser._ATN, FlinkSqlParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, FlinkSqlParser.RULE_program);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 366;
			this.statement();
			this.state = 367;
			this.match(FlinkSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, FlinkSqlParser.RULE_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 369;
			this.sqlStatements();
			this.state = 370;
			this.match(FlinkSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sqlStatements(): SqlStatementsContext {
		let localctx: SqlStatementsContext = new SqlStatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, FlinkSqlParser.RULE_sqlStatements);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4 || _la===30 || _la===76 || _la===118 || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & 1075838981) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & 168067073) !== 0) || _la===267 || ((((_la - 321)) & ~0x1F) === 0 && ((1 << (_la - 321)) & 3585) !== 0) || ((((_la - 363)) & ~0x1F) === 0 && ((1 << (_la - 363)) & 69206081) !== 0)) {
				{
				this.state = 377;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 4:
				case 30:
				case 76:
				case 118:
				case 159:
				case 161:
				case 180:
				case 189:
				case 219:
				case 234:
				case 237:
				case 244:
				case 246:
				case 267:
				case 321:
				case 330:
				case 331:
				case 332:
				case 363:
				case 369:
				case 384:
					{
					this.state = 372;
					this.sqlStatement();
					this.state = 374;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 373;
						this.match(FlinkSqlParser.SEMICOLON);
						}
						break;
					}
					}
					break;
				case 389:
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sqlStatement(): SqlStatementContext {
		let localctx: SqlStatementContext = new SqlStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, FlinkSqlParser.RULE_sqlStatement);
		try {
			this.state = 394;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 382;
				this.ddlStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 383;
				this.dmlStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 384;
				this.describeStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 385;
				this.explainStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 386;
				this.useStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 387;
				this.showStatememt();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 388;
				this.loadStatement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 389;
				this.unloadStatememt();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 390;
				this.setStatememt();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 391;
				this.resetStatememt();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 392;
				this.jarStatememt();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 393;
				this.dtAddStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public emptyStatement(): EmptyStatementContext {
		let localctx: EmptyStatementContext = new EmptyStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, FlinkSqlParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 396;
			this.match(FlinkSqlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ddlStatement(): DdlStatementContext {
		let localctx: DdlStatementContext = new DdlStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, FlinkSqlParser.RULE_ddlStatement);
		try {
			this.state = 412;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 398;
				this.createTable();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 399;
				this.createDatabase();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 400;
				this.createView();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 401;
				this.createFunction();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 402;
				this.createCatalog();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 403;
				this.alterTable();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 404;
				this.alertView();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 405;
				this.alterDatabase();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 406;
				this.alterFunction();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 407;
				this.dropCatalog();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 408;
				this.dropTable();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 409;
				this.dropDatabase();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 410;
				this.dropView();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 411;
				this.dropFunction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dmlStatement(): DmlStatementContext {
		let localctx: DmlStatementContext = new DmlStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, FlinkSqlParser.RULE_dmlStatement);
		try {
			this.state = 416;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 330:
			case 363:
			case 369:
			case 384:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 414;
				this.queryStatement(0);
				}
				break;
			case 189:
			case 244:
			case 267:
				this.enterOuterAlt(localctx, 2);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public describeStatement(): DescribeStatementContext {
		let localctx: DescribeStatementContext = new DescribeStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, FlinkSqlParser.RULE_describeStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 418;
			_la = this._input.LA(1);
			if(!(_la===30 || _la===234)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 419;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public explainStatement(): ExplainStatementContext {
		let localctx: ExplainStatementContext = new ExplainStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, FlinkSqlParser.RULE_explainStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 421;
			this.match(FlinkSqlParser.KW_EXPLAIN);
			this.state = 425;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
			case 38:
			case 68:
				{
				this.state = 422;
				this.explainDetails();
				}
				break;
			case 101:
				{
				this.state = 423;
				this.match(FlinkSqlParser.KW_PLAN);
				this.state = 424;
				this.match(FlinkSqlParser.KW_FOR);
				}
				break;
			case 144:
			case 189:
			case 244:
			case 267:
			case 330:
			case 363:
			case 369:
			case 384:
				break;
			default:
				break;
			}
			this.state = 430;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public explainDetails(): ExplainDetailsContext {
		let localctx: ExplainDetailsContext = new ExplainDetailsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, FlinkSqlParser.RULE_explainDetails);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 432;
			this.explainDetail();
			this.state = 437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public explainDetail(): ExplainDetailContext {
		let localctx: ExplainDetailContext = new ExplainDetailContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, FlinkSqlParser.RULE_explainDetail);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 440;
			_la = this._input.LA(1);
			if(!(_la===16 || _la===38 || _la===68)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public useStatement(): UseStatementContext {
		let localctx: UseStatementContext = new UseStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, FlinkSqlParser.RULE_useStatement);
		try {
			this.state = 448;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 442;
				this.match(FlinkSqlParser.KW_USE);
				this.state = 444;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
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
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 447;
				this.useModuleStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public useModuleStatement(): UseModuleStatementContext {
		let localctx: UseModuleStatementContext = new UseModuleStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, FlinkSqlParser.RULE_useModuleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
			while (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public showStatememt(): ShowStatememtContext {
		let localctx: ShowStatememtContext = new ShowStatememtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, FlinkSqlParser.RULE_showStatememt);
		let _la: number;
		try {
			this.state = 495;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 460;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 461;
				_la = this._input.LA(1);
				if(!(_la===13 || _la===26 || _la===65 || _la===167)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 462;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 463;
				this.match(FlinkSqlParser.KW_CURRENT);
				this.state = 464;
				_la = this._input.LA(1);
				if(!(_la===12 || _la===25)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 465;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 466;
				this.match(FlinkSqlParser.KW_TABLES);
				this.state = 469;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===252 || _la===263) {
					{
					this.state = 467;
					_la = this._input.LA(1);
					if(!(_la===252 || _la===263)) {
					this._errHandler.recoverInline(this);
					}
					else {
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
				if (_la===280 || _la===298) {
					{
					this.state = 471;
					this.likePredicate();
					}
				}

				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 474;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 475;
				this.match(FlinkSqlParser.KW_COLUMNS);
				this.state = 476;
				_la = this._input.LA(1);
				if(!(_la===252 || _la===263)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 477;
				this.uid();
				this.state = 479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===280 || _la===298) {
					{
					this.state = 478;
					this.likePredicate();
					}
				}

				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 481;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 482;
				this.match(FlinkSqlParser.KW_CREATE);
				this.state = 483;
				_la = this._input.LA(1);
				if(!(_la===166 || _la===344)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 484;
				this.uid();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 485;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===360) {
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
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 490;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 492;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===253) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public loadStatement(): LoadStatementContext {
		let localctx: LoadStatementContext = new LoadStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, FlinkSqlParser.RULE_loadStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 497;
			this.match(FlinkSqlParser.KW_LOAD);
			this.state = 498;
			this.match(FlinkSqlParser.KW_MODULE);
			this.state = 499;
			this.uid();
			this.state = 502;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unloadStatememt(): UnloadStatememtContext {
		let localctx: UnloadStatememtContext = new UnloadStatememtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, FlinkSqlParser.RULE_unloadStatememt);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setStatememt(): SetStatememtContext {
		let localctx: SetStatememtContext = new SetStatememtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, FlinkSqlParser.RULE_setStatememt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 508;
			this.match(FlinkSqlParser.KW_SET);
			this.state = 510;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resetStatememt(): ResetStatememtContext {
		let localctx: ResetStatememtContext = new ResetStatememtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, FlinkSqlParser.RULE_resetStatememt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 512;
			this.match(FlinkSqlParser.KW_RESET);
			this.state = 514;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jarStatememt(): JarStatememtContext {
		let localctx: JarStatememtContext = new JarStatememtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, FlinkSqlParser.RULE_jarStatememt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 516;
			_la = this._input.LA(1);
			if(!(_la===4 || _la===118)) {
			this._errHandler.recoverInline(this);
			}
			else {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dtAddStatement(): DtAddStatementContext {
		let localctx: DtAddStatementContext = new DtAddStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, FlinkSqlParser.RULE_dtAddStatement);
		let _la: number;
		try {
			this.state = 560;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
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
				if (_la===185) {
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
				this.enterOuterAlt(localctx, 2);
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
				if (_la===185) {
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
				if (_la===119) {
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
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 540;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 541;
				_la = this._input.LA(1);
				if(!(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & 31) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
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
				this.enterOuterAlt(localctx, 4);
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
				this.enterOuterAlt(localctx, 5);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dtFilePath(): DtFilePathContext {
		let localctx: DtFilePathContext = new DtFilePathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, FlinkSqlParser.RULE_dtFilePath);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
			} while (_la===410);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createTable(): CreateTableContext {
		let localctx: CreateTableContext = new CreateTableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, FlinkSqlParser.RULE_createTable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 569;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simpleCreateTable(): SimpleCreateTableContext {
		let localctx: SimpleCreateTableContext = new SimpleCreateTableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, FlinkSqlParser.RULE_simpleCreateTable);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 571;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===150) {
				{
				this.state = 572;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 575;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 577;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
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
			_alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
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
				_alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
			}
			this.state = 591;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
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
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
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
			if (_la===388) {
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
			if (_la===18) {
				{
				this.state = 602;
				this.commentSpec();
				}
			}

			this.state = 606;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===95) {
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
			if (_la===280) {
				{
				this.state = 609;
				this.likeDefinition();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createTableAsSelect(): CreateTableAsSelectContext {
		let localctx: CreateTableAsSelectContext = new CreateTableAsSelectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, FlinkSqlParser.RULE_createTableAsSelect);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 612;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 613;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 615;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
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
			if (_la===185) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public columnOptionDefinition(): ColumnOptionDefinitionContext {
		let localctx: ColumnOptionDefinitionContext = new ColumnOptionDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, FlinkSqlParser.RULE_columnOptionDefinition);
		try {
			this.state = 626;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 623;
				this.physicalColumnDefinition();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 624;
				this.metadataColumnDefinition();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 625;
				this.computedColumnDefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public physicalColumnDefinition(): PhysicalColumnDefinitionContext {
		let localctx: PhysicalColumnDefinitionContext = new PhysicalColumnDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, FlinkSqlParser.RULE_physicalColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 628;
			this.columnName();
			this.state = 629;
			this.columnType();
			this.state = 631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===215 || ((((_la - 298)) & ~0x1F) === 0 && ((1 << (_la - 298)) & 1048579) !== 0)) {
				{
				this.state = 630;
				this.columnConstraint();
				}
			}

			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 633;
				this.commentSpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public columnName(): ColumnNameContext {
		let localctx: ColumnNameContext = new ColumnNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, FlinkSqlParser.RULE_columnName);
		try {
			this.state = 638;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 636;
				this.uid();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 637;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public columnNameList(): ColumnNameListContext {
		let localctx: ColumnNameListContext = new ColumnNameListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, FlinkSqlParser.RULE_columnNameList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 640;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 641;
			this.columnName();
			this.state = 646;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public columnType(): ColumnTypeContext {
		let localctx: ColumnTypeContext = new ColumnTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, FlinkSqlParser.RULE_columnType);
		let _la: number;
		try {
			this.state = 688;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 195:
			case 225:
			case 299:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 651;
				localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===195 || _la===225 || _la===299)) {
				    localctx._typeName = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 10:
			case 146:
			case 152:
			case 191:
			case 192:
			case 204:
			case 226:
			case 268:
			case 269:
			case 335:
			case 347:
			case 349:
			case 364:
			case 365:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 652;
				localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===10 || _la===146 || _la===152 || ((((_la - 191)) & ~0x1F) === 0 && ((1 << (_la - 191)) & 8195) !== 0) || _la===226 || _la===268 || _la===269 || ((((_la - 335)) & ~0x1F) === 0 && ((1 << (_la - 335)) & 1610633217) !== 0))) {
				    localctx._typeName = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 654;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===384) {
					{
					this.state = 653;
					this.lengthOneDimension();
					}
				}

				}
				break;
			case 348:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 656;
				localctx._typeName = this.match(FlinkSqlParser.KW_TIMESTAMP);
				this.state = 658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===384) {
					{
					this.state = 657;
					this.lengthOneDimension();
					}
				}

				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===369 || _la===371) {
					{
					this.state = 660;
					_la = this._input.LA(1);
					if(!(_la===369 || _la===371)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 662;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===282) {
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
			case 228:
			case 229:
			case 236:
			case 250:
			case 300:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 668;
				localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 4194563) !== 0) || _la===300)) {
				    localctx._typeName = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===384) {
					{
					this.state = 669;
					this.lengthTwoOptionalDimension();
					}
				}

				}
				break;
			case 184:
			case 293:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 672;
				localctx._type_ = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===184 || _la===293)) {
				    localctx._type_ = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===375) {
					{
					this.state = 673;
					this.lengthOneTypeDimension();
					}
				}

				}
				break;
			case 77:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 676;
				localctx._type_ = this.match(FlinkSqlParser.KW_MAP);
				this.state = 678;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===375) {
					{
					this.state = 677;
					this.mapTypeDimension();
					}
				}

				}
				break;
			case 327:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 680;
				localctx._type_ = this.match(FlinkSqlParser.KW_ROW);
				this.state = 682;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===375) {
					{
					this.state = 681;
					this.rowTypeDimension();
					}
				}

				}
				break;
			case 115:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 684;
				localctx._type_ = this.match(FlinkSqlParser.KW_RAW);
				this.state = 686;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===384) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lengthOneDimension(): LengthOneDimensionContext {
		let localctx: LengthOneDimensionContext = new LengthOneDimensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, FlinkSqlParser.RULE_lengthOneDimension);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext {
		let localctx: LengthTwoOptionalDimensionContext = new LengthTwoOptionalDimensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, FlinkSqlParser.RULE_lengthTwoOptionalDimension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 694;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 695;
			this.decimalLiteral();
			this.state = 698;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lengthTwoStringDimension(): LengthTwoStringDimensionContext {
		let localctx: LengthTwoStringDimensionContext = new LengthTwoStringDimensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, FlinkSqlParser.RULE_lengthTwoStringDimension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 702;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 703;
			this.stringLiteral();
			this.state = 706;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lengthOneTypeDimension(): LengthOneTypeDimensionContext {
		let localctx: LengthOneTypeDimensionContext = new LengthOneTypeDimensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, FlinkSqlParser.RULE_lengthOneTypeDimension);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapTypeDimension(): MapTypeDimensionContext {
		let localctx: MapTypeDimensionContext = new MapTypeDimensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, FlinkSqlParser.RULE_mapTypeDimension);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rowTypeDimension(): RowTypeDimensionContext {
		let localctx: RowTypeDimensionContext = new RowTypeDimensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, FlinkSqlParser.RULE_rowTypeDimension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
			while (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public columnConstraint(): ColumnConstraintContext {
		let localctx: ColumnConstraintContext = new ColumnConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, FlinkSqlParser.RULE_columnConstraint);
		let _la: number;
		try {
			this.state = 749;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 215:
			case 318:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 737;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===215) {
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
				if (_la===298) {
					{
					this.state = 741;
					this.match(FlinkSqlParser.KW_NOT);
					this.state = 742;
					this.match(FlinkSqlParser.KW_ENFORCED);
					}
				}

				}
				break;
			case 298:
			case 299:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 746;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public commentSpec(): CommentSpecContext {
		let localctx: CommentSpecContext = new CommentSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, FlinkSqlParser.RULE_commentSpec);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 751;
			this.match(FlinkSqlParser.KW_COMMENT);
			this.state = 752;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public metadataColumnDefinition(): MetadataColumnDefinitionContext {
		let localctx: MetadataColumnDefinitionContext = new MetadataColumnDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, FlinkSqlParser.RULE_metadataColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
			if (_la===252) {
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
			if (_la===168) {
				{
				this.state = 761;
				this.match(FlinkSqlParser.KW_VIRTUAL);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public metadataKey(): MetadataKeyContext {
		let localctx: MetadataKeyContext = new MetadataKeyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, FlinkSqlParser.RULE_metadataKey);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 764;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public computedColumnDefinition(): ComputedColumnDefinitionContext {
		let localctx: ComputedColumnDefinitionContext = new ComputedColumnDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, FlinkSqlParser.RULE_computedColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
			if (_la===18) {
				{
				this.state = 769;
				this.commentSpec();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public computedColumnExpression(): ComputedColumnExpressionContext {
		let localctx: ComputedColumnExpressionContext = new ComputedColumnExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, FlinkSqlParser.RULE_computedColumnExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 772;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public watermarkDefinition(): WatermarkDefinitionContext {
		let localctx: WatermarkDefinitionContext = new WatermarkDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, FlinkSqlParser.RULE_watermarkDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tableConstraint(): TableConstraintContext {
		let localctx: TableConstraintContext = new TableConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, FlinkSqlParser.RULE_tableConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 782;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===215) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constraintName(): ConstraintNameContext {
		let localctx: ConstraintNameContext = new ConstraintNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, FlinkSqlParser.RULE_constraintName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 790;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selfDefinitionClause(): SelfDefinitionClauseContext {
		let localctx: SelfDefinitionClauseContext = new SelfDefinitionClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, FlinkSqlParser.RULE_selfDefinitionClause);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public partitionDefinition(): PartitionDefinitionContext {
		let localctx: PartitionDefinitionContext = new PartitionDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, FlinkSqlParser.RULE_partitionDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public transformList(): TransformListContext {
		let localctx: TransformListContext = new TransformListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, FlinkSqlParser.RULE_transformList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 800;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 801;
			this.transform();
			this.state = 806;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public transform(): TransformContext {
		let localctx: TransformContext = new TransformContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, FlinkSqlParser.RULE_transform);
		let _la: number;
		try {
			this.state = 824;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				localctx = new IdentityTransformContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 811;
				this.qualifiedName();
				}
				break;
			case 2:
				localctx = new ApplyTransformContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 812;
				(localctx as ApplyTransformContext)._transformName = this.identifier();
				this.state = 813;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 814;
				this.transformArgument();
				this.state = 819;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public transformArgument(): TransformArgumentContext {
		let localctx: TransformArgumentContext = new TransformArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, FlinkSqlParser.RULE_transformArgument);
		try {
			this.state = 828;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 826;
				this.qualifiedName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 827;
				this.constant();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public likeDefinition(): LikeDefinitionContext {
		let localctx: LikeDefinitionContext = new LikeDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, FlinkSqlParser.RULE_likeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 830;
			this.match(FlinkSqlParser.KW_LIKE);
			this.state = 831;
			this.sourceTable();
			this.state = 840;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 832;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 836;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===41 || _la===94 || _la===264) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sourceTable(): SourceTableContext {
		let localctx: SourceTableContext = new SourceTableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, FlinkSqlParser.RULE_sourceTable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 842;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public likeOption(): LikeOptionContext {
		let localctx: LikeOptionContext = new LikeOptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, FlinkSqlParser.RULE_likeOption);
		let _la: number;
		try {
			this.state = 848;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 844;
				_la = this._input.LA(1);
				if(!(_la===41 || _la===264)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 845;
				_la = this._input.LA(1);
				if(!(_la===21 || _la===96 || _la===178)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 846;
				_la = this._input.LA(1);
				if(!(_la===41 || _la===94 || _la===264)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 847;
				_la = this._input.LA(1);
				if(!(_la===53 || _la===90 || _la===170)) {
				this._errHandler.recoverInline(this);
				}
				else {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createCatalog(): CreateCatalogContext {
		let localctx: CreateCatalogContext = new CreateCatalogContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, FlinkSqlParser.RULE_createCatalog);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createDatabase(): CreateDatabaseContext {
		let localctx: CreateDatabaseContext = new CreateDatabaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, FlinkSqlParser.RULE_createDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 855;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 856;
			this.match(FlinkSqlParser.KW_DATABASE);
			this.state = 858;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 71, this._ctx) ) {
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
			if (_la===18) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createView(): CreateViewContext {
		let localctx: CreateViewContext = new CreateViewContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, FlinkSqlParser.RULE_createView);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 866;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 868;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===150) {
				{
				this.state = 867;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 870;
			this.match(FlinkSqlParser.KW_VIEW);
			this.state = 872;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 74, this._ctx) ) {
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
			if (_la===384) {
				{
				this.state = 875;
				this.columnNameList();
				}
			}

			this.state = 879;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createFunction(): CreateFunctionContext {
		let localctx: CreateFunctionContext = new CreateFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, FlinkSqlParser.RULE_createFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 884;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 888;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 77, this._ctx) ) {
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
			switch ( this._interp.adaptivePredict(this._input, 78, this._ctx) ) {
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
			if (_la===276) {
				{
				this.state = 897;
				this.match(FlinkSqlParser.KW_LANGUAGE);
				this.state = 898;
				_la = this._input.LA(1);
				if(!(_la===66 || _la===107 || _la===126)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 902;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===361) {
				{
				this.state = 901;
				this.usingClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public usingClause(): UsingClauseContext {
		let localctx: UsingClauseContext = new UsingClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, FlinkSqlParser.RULE_usingClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
			while (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jarFileName(): JarFileNameContext {
		let localctx: JarFileNameContext = new JarFileNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, FlinkSqlParser.RULE_jarFileName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 915;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alterTable(): AlterTableContext {
		let localctx: AlterTableContext = new AlterTableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, FlinkSqlParser.RULE_alterTable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 917;
			this.match(FlinkSqlParser.KW_ALTER);
			this.state = 918;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 920;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 82, this._ctx) ) {
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
			switch ( this._interp.adaptivePredict(this._input, 83, this._ctx) ) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public renameDefinition(): RenameDefinitionContext {
		let localctx: RenameDefinitionContext = new RenameDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, FlinkSqlParser.RULE_renameDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 930;
			this.match(FlinkSqlParser.KW_RENAME);
			this.state = 932;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967279) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 126975) !== 0) || ((((_la - 405)) & ~0x1F) === 0 && ((1 << (_la - 405)) & 19) !== 0)) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setKeyValueDefinition(): SetKeyValueDefinitionContext {
		let localctx: SetKeyValueDefinitionContext = new SetKeyValueDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, FlinkSqlParser.RULE_setKeyValueDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 937;
			this.match(FlinkSqlParser.KW_SET);
			this.state = 938;
			this.tablePropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public addConstraint(): AddConstraintContext {
		let localctx: AddConstraintContext = new AddConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, FlinkSqlParser.RULE_addConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
			if (_la===298) {
				{
				this.state = 946;
				this.notForced();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropConstraint(): DropConstraintContext {
		let localctx: DropConstraintContext = new DropConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, FlinkSqlParser.RULE_dropConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public addUnique(): AddUniqueContext {
		let localctx: AddUniqueContext = new AddUniqueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, FlinkSqlParser.RULE_addUnique);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public notForced(): NotForcedContext {
		let localctx: NotForcedContext = new NotForcedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, FlinkSqlParser.RULE_notForced);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 957;
			this.match(FlinkSqlParser.KW_NOT);
			this.state = 958;
			this.match(FlinkSqlParser.KW_ENFORCED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alertView(): AlertViewContext {
		let localctx: AlertViewContext = new AlertViewContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, FlinkSqlParser.RULE_alertView);
		try {
			this.enterOuterAlt(localctx, 1);
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
			case 119:
				{
				this.state = 963;
				this.renameDefinition();
				}
				break;
			case 185:
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alterDatabase(): AlterDatabaseContext {
		let localctx: AlterDatabaseContext = new AlterDatabaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, FlinkSqlParser.RULE_alterDatabase);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alterFunction(): AlterFunctionContext {
		let localctx: AlterFunctionContext = new AlterFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, FlinkSqlParser.RULE_alterFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 973;
			this.match(FlinkSqlParser.KW_ALTER);
			this.state = 977;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 87, this._ctx) ) {
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
			switch ( this._interp.adaptivePredict(this._input, 88, this._ctx) ) {
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
			if (_la===276) {
				{
				this.state = 986;
				this.match(FlinkSqlParser.KW_LANGUAGE);
				this.state = 987;
				_la = this._input.LA(1);
				if(!(_la===66 || _la===107 || _la===126)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropCatalog(): DropCatalogContext {
		let localctx: DropCatalogContext = new DropCatalogContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, FlinkSqlParser.RULE_dropCatalog);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 990;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 991;
			this.match(FlinkSqlParser.KW_CATALOG);
			this.state = 993;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 90, this._ctx) ) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropTable(): DropTableContext {
		let localctx: DropTableContext = new DropTableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, FlinkSqlParser.RULE_dropTable);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 997;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 999;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===150) {
				{
				this.state = 998;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 1001;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 1003;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropDatabase(): DropDatabaseContext {
		let localctx: DropDatabaseContext = new DropDatabaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, FlinkSqlParser.RULE_dropDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1007;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 1008;
			this.match(FlinkSqlParser.KW_DATABASE);
			this.state = 1010;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 93, this._ctx) ) {
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
			if (_la===11 || _la===123) {
				{
				this.state = 1013;
				localctx._dropType = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===11 || _la===123)) {
				    localctx._dropType = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropView(): DropViewContext {
		let localctx: DropViewContext = new DropViewContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, FlinkSqlParser.RULE_dropView);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1016;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 1018;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===150) {
				{
				this.state = 1017;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 1020;
			this.match(FlinkSqlParser.KW_VIEW);
			this.state = 1022;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 96, this._ctx) ) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropFunction(): DropFunctionContext {
		let localctx: DropFunctionContext = new DropFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, FlinkSqlParser.RULE_dropFunction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1026;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 1030;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 97, this._ctx) ) {
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
			switch ( this._interp.adaptivePredict(this._input, 98, this._ctx) ) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public insertStatement(): InsertStatementContext {
		let localctx: InsertStatementContext = new InsertStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, FlinkSqlParser.RULE_insertStatement);
		let _la: number;
		try {
			this.state = 1045;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 1039;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===244) {
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
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1042;
				this.insertMulStatementCompatibility();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public insertSimpleStatement(): InsertSimpleStatementContext {
		let localctx: InsertSimpleStatementContext = new InsertSimpleStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, FlinkSqlParser.RULE_insertSimpleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1047;
			this.match(FlinkSqlParser.KW_INSERT);
			this.state = 1048;
			_la = this._input.LA(1);
			if(!(_la===93 || _la===272)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1049;
			this.uid();
			this.state = 1058;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				{
				this.state = 1051;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===311) {
					{
					this.state = 1050;
					this.insertPartitionDefinition();
					}
				}

				this.state = 1054;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 102, this._ctx) ) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public insertPartitionDefinition(): InsertPartitionDefinitionContext {
		let localctx: InsertPartitionDefinitionContext = new InsertPartitionDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, FlinkSqlParser.RULE_insertPartitionDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1060;
			this.match(FlinkSqlParser.KW_PARTITION);
			this.state = 1061;
			this.tablePropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public valuesDefinition(): ValuesDefinitionContext {
		let localctx: ValuesDefinitionContext = new ValuesDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, FlinkSqlParser.RULE_valuesDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1063;
			this.match(FlinkSqlParser.KW_VALUES);
			this.state = 1064;
			this.valuesRowDefinition();
			this.state = 1069;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public valuesRowDefinition(): ValuesRowDefinitionContext {
		let localctx: ValuesRowDefinitionContext = new ValuesRowDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, FlinkSqlParser.RULE_valuesRowDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1072;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1073;
			this.constant();
			this.state = 1078;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public insertMulStatementCompatibility(): InsertMulStatementCompatibilityContext {
		let localctx: InsertMulStatementCompatibilityContext = new InsertMulStatementCompatibilityContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, FlinkSqlParser.RULE_insertMulStatementCompatibility);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
			} while (_la===267);
			this.state = 1094;
			this.match(FlinkSqlParser.KW_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public insertMulStatement(): InsertMulStatementContext {
		let localctx: InsertMulStatementContext = new InsertMulStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, FlinkSqlParser.RULE_insertMulStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
			} while (_la===267);
			this.state = 1106;
			this.match(FlinkSqlParser.KW_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
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
		let localctx: QueryStatementContext = new QueryStatementContext(this, this._ctx, _parentState);
		let _prevctx: QueryStatementContext = localctx;
		let _startState: number = 160;
		this.enterRecursionRule(localctx, 160, FlinkSqlParser.RULE_queryStatement, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1131;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 112, this._ctx) ) {
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
				switch ( this._interp.adaptivePredict(this._input, 108, this._ctx) ) {
				case 1:
					{
					this.state = 1118;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1122;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 109, this._ctx) ) {
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
				switch ( this._interp.adaptivePredict(this._input, 110, this._ctx) ) {
				case 1:
					{
					this.state = 1125;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1129;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 111, this._ctx) ) {
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
			this._ctx.stop = this._input.LT(-1);
			this.state = 1147;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 116, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new QueryStatementContext(this, _parentctx, _parentState);
					localctx._left = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_queryStatement);
					this.state = 1133;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 1134;
					localctx._operator = this._input.LT(1);
					_la = this._input.LA(1);
					if(!(_la===243 || _la===270 || _la===354)) {
					    localctx._operator = this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1136;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===178) {
						{
						this.state = 1135;
						this.match(FlinkSqlParser.KW_ALL);
						}
					}

					this.state = 1138;
					localctx._right = this.queryStatement(0);
					this.state = 1140;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 114, this._ctx) ) {
					case 1:
						{
						this.state = 1139;
						this.orderByCaluse();
						}
						break;
					}
					this.state = 1143;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 115, this._ctx) ) {
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
				_alt = this._interp.adaptivePredict(this._input, 116, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public valuesCaluse(): ValuesCaluseContext {
		let localctx: ValuesCaluseContext = new ValuesCaluseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, FlinkSqlParser.RULE_valuesCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1150;
			this.match(FlinkSqlParser.KW_VALUES);
			this.state = 1151;
			this.expression();
			this.state = 1156;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 117, this._ctx);
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
				_alt = this._interp.adaptivePredict(this._input, 117, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public withClause(): WithClauseContext {
		let localctx: WithClauseContext = new WithClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, FlinkSqlParser.RULE_withClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1159;
			this.match(FlinkSqlParser.KW_WITH);
			this.state = 1160;
			this.withItem();
			this.state = 1165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public withItem(): WithItemContext {
		let localctx: WithItemContext = new WithItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, FlinkSqlParser.RULE_withItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1168;
			this.withItemName();
			this.state = 1180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===384) {
				{
				this.state = 1169;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1170;
				this.columnName();
				this.state = 1175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public withItemName(): WithItemNameContext {
		let localctx: WithItemNameContext = new WithItemNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, FlinkSqlParser.RULE_withItemName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1187;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selectStatement(): SelectStatementContext {
		let localctx: SelectStatementContext = new SelectStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, FlinkSqlParser.RULE_selectStatement);
		try {
			this.state = 1207;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1189;
				this.selectClause();
				this.state = 1190;
				this.fromClause();
				this.state = 1192;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
				case 1:
					{
					this.state = 1191;
					this.whereClause();
					}
					break;
				}
				this.state = 1195;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
				case 1:
					{
					this.state = 1194;
					this.groupByClause();
					}
					break;
				}
				this.state = 1198;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 1197;
					this.havingClause();
					}
					break;
				}
				this.state = 1201;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 124, this._ctx) ) {
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
				this.enterOuterAlt(localctx, 2);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selectClause(): SelectClauseContext {
		let localctx: SelectClauseContext = new SelectClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, FlinkSqlParser.RULE_selectClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1209;
			this.match(FlinkSqlParser.KW_SELECT);
			this.state = 1211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===178 || _la===235) {
				{
				this.state = 1210;
				this.setQuantifier();
				}
			}

			this.state = 1222;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 128, this._ctx) ) {
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
				_alt = this._interp.adaptivePredict(this._input, 127, this._ctx);
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
					_alt = this._interp.adaptivePredict(this._input, 127, this._ctx);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public projectItemDefinition(): ProjectItemDefinitionContext {
		let localctx: ProjectItemDefinitionContext = new ProjectItemDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, FlinkSqlParser.RULE_projectItemDefinition);
		let _la: number;
		try {
			this.state = 1232;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1224;
				this.overWindowItem();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1225;
				this.expression();
				this.state = 1230;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 130, this._ctx) ) {
				case 1:
					{
					this.state = 1227;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===185) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public overWindowItem(): OverWindowItemContext {
		let localctx: OverWindowItemContext = new OverWindowItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, FlinkSqlParser.RULE_overWindowItem);
		try {
			this.state = 1246;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
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
				this.enterOuterAlt(localctx, 2);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fromClause(): FromClauseContext {
		let localctx: FromClauseContext = new FromClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, FlinkSqlParser.RULE_fromClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1248;
			this.match(FlinkSqlParser.KW_FROM);
			this.state = 1249;
			this.tableExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
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
		let localctx: TableExpressionContext = new TableExpressionContext(this, this._ctx, _parentState);
		let _prevctx: TableExpressionContext = localctx;
		let _startState: number = 180;
		this.enterRecursionRule(localctx, 180, FlinkSqlParser.RULE_tableExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1262;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				{
				this.state = 1252;
				this.tableReference();
				this.state = 1257;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 133, this._ctx);
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
					_alt = this._interp.adaptivePredict(this._input, 133, this._ctx);
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
			this._ctx.stop = this._input.LT(-1);
			this.state = 1285;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 140, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1283;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 139, this._ctx) ) {
					case 1:
						{
						localctx = new TableExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_tableExpression);
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
						localctx = new TableExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_tableExpression);
						this.state = 1268;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1270;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===294) {
							{
							this.state = 1269;
							this.match(FlinkSqlParser.KW_NATURAL);
							}
						}

						this.state = 1273;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 253)) & ~0x1F) === 0 && ((1 << (_la - 253)) & 67112961) !== 0) || _la===323) {
							{
							this.state = 1272;
							_la = this._input.LA(1);
							if(!(((((_la - 253)) & ~0x1F) === 0 && ((1 << (_la - 253)) & 67112961) !== 0) || _la===323)) {
							this._errHandler.recoverInline(this);
							}
							else {
								this._errHandler.reportMatch(this);
							    this.consume();
							}
							}
						}

						this.state = 1276;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===308) {
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
						switch ( this._interp.adaptivePredict(this._input, 138, this._ctx) ) {
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
				_alt = this._interp.adaptivePredict(this._input, 140, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tableReference(): TableReferenceContext {
		let localctx: TableReferenceContext = new TableReferenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, FlinkSqlParser.RULE_tableReference);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1288;
			this.tablePrimary();
			this.state = 1290;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 141, this._ctx) ) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tablePrimary(): TablePrimaryContext {
		let localctx: TablePrimaryContext = new TablePrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, FlinkSqlParser.RULE_tablePrimary);
		let _la: number;
		try {
			this.state = 1333;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 148, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===344) {
					{
					this.state = 1292;
					this.match(FlinkSqlParser.KW_TABLE);
					}
				}

				this.state = 1295;
				this.tablePath();
				this.state = 1297;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 143, this._ctx) ) {
				case 1:
					{
					this.state = 1296;
					this.systemTimePeriod();
					}
					break;
				}
				this.state = 1303;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 145, this._ctx) ) {
				case 1:
					{
					this.state = 1300;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===185) {
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
				this.enterOuterAlt(localctx, 2);
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
				while (_la===388) {
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
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===277) {
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
				this.enterOuterAlt(localctx, 4);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tablePath(): TablePathContext {
		let localctx: TablePathContext = new TablePathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, FlinkSqlParser.RULE_tablePath);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1335;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public systemTimePeriod(): SystemTimePeriodContext {
		let localctx: SystemTimePeriodContext = new SystemTimePeriodContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, FlinkSqlParser.RULE_systemTimePeriod);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dateTimeExpression(): DateTimeExpressionContext {
		let localctx: DateTimeExpressionContext = new DateTimeExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, FlinkSqlParser.RULE_dateTimeExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1343;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inlineDataValueClause(): InlineDataValueClauseContext {
		let localctx: InlineDataValueClauseContext = new InlineDataValueClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, FlinkSqlParser.RULE_inlineDataValueClause);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public windoTVFClause(): WindoTVFClauseContext {
		let localctx: WindoTVFClauseContext = new WindoTVFClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, FlinkSqlParser.RULE_windoTVFClause);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public windowTVFExression(): WindowTVFExressionContext {
		let localctx: WindowTVFExressionContext = new WindowTVFExressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, FlinkSqlParser.RULE_windowTVFExression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
			while (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public windoTVFName(): WindoTVFNameContext {
		let localctx: WindoTVFNameContext = new WindoTVFNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, FlinkSqlParser.RULE_windoTVFName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1367;
			_la = this._input.LA(1);
			if(!(_la===23 || _la===57 || _la===156)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public windowTVFParam(): WindowTVFParamContext {
		let localctx: WindowTVFParamContext = new WindowTVFParamContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, FlinkSqlParser.RULE_windowTVFParam);
		try {
			this.state = 1384;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 150, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1369;
				this.match(FlinkSqlParser.KW_TABLE);
				this.state = 1370;
				this.timeAttrColumn();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1371;
				this.columnDescriptor();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1372;
				this.timeIntervalExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
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
				this.enterOuterAlt(localctx, 5);
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
				this.enterOuterAlt(localctx, 6);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timeIntervalParamName(): TimeIntervalParamNameContext {
		let localctx: TimeIntervalParamNameContext = new TimeIntervalParamNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, FlinkSqlParser.RULE_timeIntervalParamName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1386;
			_la = this._input.LA(1);
			if(!(_la===24 || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 4163) !== 0) || _la===302)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public columnDescriptor(): ColumnDescriptorContext {
		let localctx: ColumnDescriptorContext = new ColumnDescriptorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, FlinkSqlParser.RULE_columnDescriptor);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public joinCondition(): JoinConditionContext {
		let localctx: JoinConditionContext = new JoinConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, FlinkSqlParser.RULE_joinCondition);
		let _la: number;
		try {
			this.state = 1407;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 303:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1393;
				this.match(FlinkSqlParser.KW_ON);
				this.state = 1394;
				this.booleanExpression(0);
				}
				break;
			case 361:
				this.enterOuterAlt(localctx, 2);
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
				while (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whereClause(): WhereClauseContext {
		let localctx: WhereClauseContext = new WhereClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, FlinkSqlParser.RULE_whereClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1409;
			this.match(FlinkSqlParser.KW_WHERE);
			this.state = 1410;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groupByClause(): GroupByClauseContext {
		let localctx: GroupByClauseContext = new GroupByClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, FlinkSqlParser.RULE_groupByClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1412;
			this.match(FlinkSqlParser.KW_GROUP);
			this.state = 1413;
			this.match(FlinkSqlParser.KW_BY);
			this.state = 1414;
			this.groupItemDefinition();
			this.state = 1419;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 153, this._ctx);
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
				_alt = this._interp.adaptivePredict(this._input, 153, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groupItemDefinition(): GroupItemDefinitionContext {
		let localctx: GroupItemDefinitionContext = new GroupItemDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, FlinkSqlParser.RULE_groupItemDefinition);
		let _la: number;
		try {
			this.state = 1461;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1422;
				this.expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1423;
				this.groupWindowFunction();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1424;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1425;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1426;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1427;
				this.expression();
				this.state = 1432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===388) {
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
				this.enterOuterAlt(localctx, 5);
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
				while (_la===388) {
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
				this.enterOuterAlt(localctx, 6);
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
				while (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groupingSets(): GroupingSetsContext {
		let localctx: GroupingSetsContext = new GroupingSetsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, FlinkSqlParser.RULE_groupingSets);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1463;
			this.match(FlinkSqlParser.KW_GROUPING);
			this.state = 1464;
			this.match(FlinkSqlParser.KW_SETS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groupingSetsNotaionName(): GroupingSetsNotaionNameContext {
		let localctx: GroupingSetsNotaionNameContext = new GroupingSetsNotaionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, FlinkSqlParser.RULE_groupingSetsNotaionName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1466;
			_la = this._input.LA(1);
			if(!(_la===221 || _la===326)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groupWindowFunction(): GroupWindowFunctionContext {
		let localctx: GroupWindowFunctionContext = new GroupWindowFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, FlinkSqlParser.RULE_groupWindowFunction);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groupWindowFunctionName(): GroupWindowFunctionNameContext {
		let localctx: GroupWindowFunctionNameContext = new GroupWindowFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, FlinkSqlParser.RULE_groupWindowFunctionName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1475;
			_la = this._input.LA(1);
			if(!(_la===57 || _la===136 || _la===156)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timeAttrColumn(): TimeAttrColumnContext {
		let localctx: TimeAttrColumnContext = new TimeAttrColumnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, FlinkSqlParser.RULE_timeAttrColumn);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1477;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public havingClause(): HavingClauseContext {
		let localctx: HavingClauseContext = new HavingClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 224, FlinkSqlParser.RULE_havingClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1479;
			this.match(FlinkSqlParser.KW_HAVING);
			this.state = 1480;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public windowClause(): WindowClauseContext {
		let localctx: WindowClauseContext = new WindowClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 226, FlinkSqlParser.RULE_windowClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1482;
			this.match(FlinkSqlParser.KW_WINDOW);
			this.state = 1483;
			this.namedWindow();
			this.state = 1488;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 158, this._ctx);
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
				_alt = this._interp.adaptivePredict(this._input, 158, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namedWindow(): NamedWindowContext {
		let localctx: NamedWindowContext = new NamedWindowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, FlinkSqlParser.RULE_namedWindow);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1491;
			localctx._name = this.errorCapturingIdentifier();
			this.state = 1492;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 1493;
			this.windowSpec();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public windowSpec(): WindowSpecContext {
		let localctx: WindowSpecContext = new WindowSpecContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, FlinkSqlParser.RULE_windowSpec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967279) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 126975) !== 0) || ((((_la - 405)) & ~0x1F) === 0 && ((1 << (_la - 405)) & 19) !== 0)) {
				{
				this.state = 1495;
				localctx._name = this.errorCapturingIdentifier();
				}
			}

			this.state = 1498;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1500;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===311) {
				{
				this.state = 1499;
				this.partitionByClause();
				}
			}

			this.state = 1503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===306) {
				{
				this.state = 1502;
				this.orderByCaluse();
				}
			}

			this.state = 1506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===319 || _la===328) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public matchRecognizeClause(): MatchRecognizeClauseContext {
		let localctx: MatchRecognizeClauseContext = new MatchRecognizeClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, FlinkSqlParser.RULE_matchRecognizeClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1510;
			this.match(FlinkSqlParser.KW_MATCH_RECOGNIZE);
			this.state = 1511;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===311) {
				{
				this.state = 1512;
				this.partitionByClause();
				}
			}

			this.state = 1516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===306) {
				{
				this.state = 1515;
				this.orderByCaluse();
				}
			}

			this.state = 1519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===285) {
				{
				this.state = 1518;
				this.measuresClause();
				}
			}

			this.state = 1522;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===178 || _la===304) {
				{
				this.state = 1521;
				this.outputMode();
				}
			}

			this.state = 1525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 1524;
				this.afterMatchStrategy();
				}
			}

			this.state = 1528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===312) {
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
			switch ( this._interp.adaptivePredict(this._input, 170, this._ctx) ) {
			case 1:
				{
				this.state = 1533;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===185) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public orderByCaluse(): OrderByCaluseContext {
		let localctx: OrderByCaluseContext = new OrderByCaluseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, FlinkSqlParser.RULE_orderByCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1538;
			this.match(FlinkSqlParser.KW_ORDER);
			this.state = 1539;
			this.match(FlinkSqlParser.KW_BY);
			this.state = 1540;
			this.orderItemDefition();
			this.state = 1545;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 171, this._ctx);
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
				_alt = this._interp.adaptivePredict(this._input, 171, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public orderItemDefition(): OrderItemDefitionContext {
		let localctx: OrderItemDefitionContext = new OrderItemDefitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, FlinkSqlParser.RULE_orderItemDefition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1548;
			this.expression();
			this.state = 1550;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 172, this._ctx) ) {
			case 1:
				{
				this.state = 1549;
				localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===8 || _la===30)) {
				    localctx._ordering = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			this.state = 1554;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				{
				this.state = 1552;
				this.match(FlinkSqlParser.KW_NULLS);
				this.state = 1553;
				localctx._nullOrder = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===45 || _la===73)) {
				    localctx._nullOrder = this._errHandler.recoverInline(this);
				}
				else {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public limitClause(): LimitClauseContext {
		let localctx: LimitClauseContext = new LimitClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, FlinkSqlParser.RULE_limitClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1556;
			this.match(FlinkSqlParser.KW_LIMIT);
			this.state = 1559;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 178:
				{
				this.state = 1557;
				this.match(FlinkSqlParser.KW_ALL);
				}
				break;
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 184:
			case 188:
			case 201:
			case 202:
			case 203:
			case 209:
			case 211:
			case 218:
			case 225:
			case 227:
			case 245:
			case 249:
			case 258:
			case 261:
			case 271:
			case 275:
			case 279:
			case 289:
			case 292:
			case 298:
			case 299:
			case 310:
			case 316:
			case 317:
			case 320:
			case 323:
			case 329:
			case 338:
			case 339:
			case 347:
			case 348:
			case 352:
			case 353:
			case 358:
			case 372:
			case 377:
			case 384:
			case 395:
			case 397:
			case 398:
			case 405:
			case 406:
			case 407:
			case 408:
			case 409:
				{
				this.state = 1558;
				localctx._limit = this.expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public partitionByClause(): PartitionByClauseContext {
		let localctx: PartitionByClauseContext = new PartitionByClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 240, FlinkSqlParser.RULE_partitionByClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
			while (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public quantifiers(): QuantifiersContext {
		let localctx: QuantifiersContext = new QuantifiersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 242, FlinkSqlParser.RULE_quantifiers);
		try {
			this.state = 1587;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 176, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 1571;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 1572;
				this.match(FlinkSqlParser.ADD_SIGN);
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 1573;
				this.match(FlinkSqlParser.QUESTION_MARK_SIGN);
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
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
				this.enterOuterAlt(localctx, 5);
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
				this.enterOuterAlt(localctx, 6);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public measuresClause(): MeasuresClauseContext {
		let localctx: MeasuresClauseContext = new MeasuresClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 244, FlinkSqlParser.RULE_measuresClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1589;
			this.match(FlinkSqlParser.KW_MEASURES);
			this.state = 1590;
			this.projectItemDefinition();
			this.state = 1595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patternDefination(): PatternDefinationContext {
		let localctx: PatternDefinationContext = new PatternDefinationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 246, FlinkSqlParser.RULE_patternDefination);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
			} while (_la===406 || _la===409);
			this.state = 1605;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 1607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===370) {
				{
				this.state = 1606;
				this.withinClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patternVariable(): PatternVariableContext {
		let localctx: PatternVariableContext = new PatternVariableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 248, FlinkSqlParser.RULE_patternVariable);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1609;
			this.unquotedIdentifier();
			this.state = 1611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 386)) & ~0x1F) === 0 && ((1 << (_la - 386)) & 135681) !== 0)) {
				{
				this.state = 1610;
				this.quantifiers();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public outputMode(): OutputModeContext {
		let localctx: OutputModeContext = new OutputModeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 250, FlinkSqlParser.RULE_outputMode);
		try {
			this.state = 1621;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 178:
				this.enterOuterAlt(localctx, 1);
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
			case 304:
				this.enterOuterAlt(localctx, 2);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public afterMatchStrategy(): AfterMatchStrategyContext {
		let localctx: AfterMatchStrategyContext = new AfterMatchStrategyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 252, FlinkSqlParser.RULE_afterMatchStrategy);
		try {
			this.state = 1647;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 182, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
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
				this.enterOuterAlt(localctx, 2);
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
				this.enterOuterAlt(localctx, 3);
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
				this.enterOuterAlt(localctx, 4);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patternVariablesDefination(): PatternVariablesDefinationContext {
		let localctx: PatternVariablesDefinationContext = new PatternVariablesDefinationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 254, FlinkSqlParser.RULE_patternVariablesDefination);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1649;
			this.match(FlinkSqlParser.KW_DEFINE);
			this.state = 1650;
			this.projectItemDefinition();
			this.state = 1655;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public windowFrame(): WindowFrameContext {
		let localctx: WindowFrameContext = new WindowFrameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 256, FlinkSqlParser.RULE_windowFrame);
		try {
			this.state = 1667;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 319:
				this.enterOuterAlt(localctx, 1);
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
			case 328:
				this.enterOuterAlt(localctx, 2);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public frameBound(): FrameBoundContext {
		let localctx: FrameBoundContext = new FrameBoundContext(this, this._ctx, this.state);
		this.enterRule(localctx, 258, FlinkSqlParser.RULE_frameBound);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public withinClause(): WithinClauseContext {
		let localctx: WithinClauseContext = new WithinClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 260, FlinkSqlParser.RULE_withinClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1674;
			this.match(FlinkSqlParser.KW_WITHIN);
			this.state = 1675;
			this.timeIntervalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 262, FlinkSqlParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1677;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
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
		let localctx: BooleanExpressionContext = new BooleanExpressionContext(this, this._ctx, _parentState);
		let _prevctx: BooleanExpressionContext = localctx;
		let _startState: number = 264;
		this.enterRecursionRule(localctx, 264, FlinkSqlParser.RULE_booleanExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1691;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				{
				localctx = new LogicalNotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1680;
				this.match(FlinkSqlParser.KW_NOT);
				this.state = 1681;
				this.booleanExpression(6);
				}
				break;
			case 2:
				{
				localctx = new ExistsContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
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
				localctx = new PredicatedContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1687;
				this.valueExpression(0);
				this.state = 1689;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 185, this._ctx) ) {
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
			this._ctx.stop = this._input.LT(-1);
			this.state = 1707;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 189, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1705;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 188, this._ctx) ) {
					case 1:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1693;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1694;
						(localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.KW_AND);
						this.state = 1695;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(4);
						}
						break;
					case 2:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1696;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1697;
						(localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.KW_OR);
						this.state = 1698;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;
					case 3:
						{
						localctx = new LogicalNestedContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1699;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1700;
						this.match(FlinkSqlParser.KW_IS);
						this.state = 1702;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===298) {
							{
							this.state = 1701;
							this.match(FlinkSqlParser.KW_NOT);
							}
						}

						this.state = 1704;
						(localctx as LogicalNestedContext)._kind = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===249 || _la===299 || _la===352 || _la===356)) {
						    (localctx as LogicalNestedContext)._kind = this._errHandler.recoverInline(this);
						}
						else {
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
				_alt = this._interp.adaptivePredict(this._input, 189, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public predicate(): PredicateContext {
		let localctx: PredicateContext = new PredicateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 266, FlinkSqlParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 1777;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 200, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 1710;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1713;
				localctx._kind = this.match(FlinkSqlParser.KW_BETWEEN);
				this.state = 1715;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===186 || _la===340) {
					{
					this.state = 1714;
					_la = this._input.LA(1);
					if(!(_la===186 || _la===340)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 1717;
				localctx._lower = this.valueExpression(0);
				this.state = 1718;
				this.match(FlinkSqlParser.KW_AND);
				this.state = 1719;
				localctx._upper = this.valueExpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1722;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 1721;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1724;
				localctx._kind = this.match(FlinkSqlParser.KW_IN);
				this.state = 1725;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1726;
				this.expression();
				this.state = 1731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===388) {
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
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1737;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 1736;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1739;
				localctx._kind = this.match(FlinkSqlParser.KW_IN);
				this.state = 1740;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1741;
				this.queryStatement(0);
				this.state = 1742;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1744;
				localctx._kind = this.match(FlinkSqlParser.KW_EXISTS);
				this.state = 1745;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1746;
				this.queryStatement(0);
				this.state = 1747;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 1749;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1752;
				localctx._kind = this.match(FlinkSqlParser.KW_RLIKE);
				this.state = 1753;
				localctx._pattern = this.valueExpression(0);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1754;
				this.likePredicate();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1755;
				this.match(FlinkSqlParser.KW_IS);
				this.state = 1757;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 1756;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1759;
				localctx._kind = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===249 || _la===299 || _la===352 || _la===356)) {
				    localctx._kind = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1760;
				this.match(FlinkSqlParser.KW_IS);
				this.state = 1762;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 1761;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1764;
				localctx._kind = this.match(FlinkSqlParser.KW_DISTINCT);
				this.state = 1765;
				this.match(FlinkSqlParser.KW_FROM);
				this.state = 1766;
				localctx._right = this.valueExpression(0);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1768;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 1767;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1770;
				localctx._kind = this.match(FlinkSqlParser.KW_SIMILAR);
				this.state = 1771;
				this.match(FlinkSqlParser.KW_TO);
				this.state = 1772;
				localctx._right = this.valueExpression(0);
				this.state = 1775;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 199, this._ctx) ) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public likePredicate(): LikePredicateContext {
		let localctx: LikePredicateContext = new LikePredicateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 268, FlinkSqlParser.RULE_likePredicate);
		let _la: number;
		try {
			this.state = 1808;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 206, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1780;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 1779;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1782;
				localctx._kind = this.match(FlinkSqlParser.KW_LIKE);
				this.state = 1783;
				localctx._quantifier = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===178 || _la===182)) {
				    localctx._quantifier = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1797;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 203, this._ctx) ) {
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
					while (_la===388) {
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
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1800;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 1799;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1802;
				localctx._kind = this.match(FlinkSqlParser.KW_LIKE);
				this.state = 1803;
				localctx._pattern = this.valueExpression(0);
				this.state = 1806;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 205, this._ctx) ) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
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
		let localctx: ValueExpressionContext = new ValueExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ValueExpressionContext = localctx;
		let _startState: number = 270;
		this.enterRecursionRule(localctx, 270, FlinkSqlParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1814;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 207, this._ctx) ) {
			case 1:
				{
				localctx = new ValueExpressionDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1811;
				this.primaryExpression(0);
				}
				break;
			case 2:
				{
				localctx = new ArithmeticUnaryContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1812;
				(localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 377)) & ~0x1F) === 0 && ((1 << (_la - 377)) & 3145729) !== 0))) {
				    (localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1813;
				this.valueExpression(8);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1839;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 209, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1837;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 208, this._ctx) ) {
					case 1:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1816;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1817;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===32 || ((((_la - 395)) & ~0x1F) === 0 && ((1 << (_la - 395)) & 145) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1818;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(8);
						}
						break;
					case 2:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1819;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1820;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 397)) & ~0x1F) === 0 && ((1 << (_la - 397)) & 11) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1821;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(7);
						}
						break;
					case 3:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1822;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1823;
						(localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_AND_OP);
						this.state = 1824;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(6);
						}
						break;
					case 4:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1825;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1826;
						(localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_XOR_OP);
						this.state = 1827;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(5);
						}
						break;
					case 5:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1828;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1829;
						(localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_OR_OP);
						this.state = 1830;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;
					case 6:
						{
						localctx = new ComparisonContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1831;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1832;
						this.comparisonOperator();
						this.state = 1833;
						(localctx as ComparisonContext)._right = this.valueExpression(3);
						}
						break;
					case 7:
						{
						localctx = new ArithmeticBinaryAlternateContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryAlternateContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1835;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1836;
						(localctx as ArithmeticBinaryAlternateContext)._right = this.match(FlinkSqlParser.SLASH_TEXT);
						}
						break;
					}
					}
				}
				this.state = 1841;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 209, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
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
		let localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this, this._ctx, _parentState);
		let _prevctx: PrimaryExpressionContext = localctx;
		let _startState: number = 272;
		this.enterRecursionRule(localctx, 272, FlinkSqlParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1933;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				{
				localctx = new SearchedCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

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
				} while (_la===366);
				this.state = 1851;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===239) {
					{
					this.state = 1849;
					this.match(FlinkSqlParser.KW_ELSE);
					this.state = 1850;
					(localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1853;
				this.match(FlinkSqlParser.KW_END);
				}
				break;
			case 2:
				{
				localctx = new SimpleCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1855;
				this.match(FlinkSqlParser.KW_CASE);
				this.state = 1856;
				(localctx as SimpleCaseContext)._value = this.expression();
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
				} while (_la===366);
				this.state = 1864;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===239) {
					{
					this.state = 1862;
					this.match(FlinkSqlParser.KW_ELSE);
					this.state = 1863;
					(localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1866;
				this.match(FlinkSqlParser.KW_END);
				}
				break;
			case 3:
				{
				localctx = new CastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
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
				localctx = new FirstContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1875;
				this.match(FlinkSqlParser.KW_FIRST);
				this.state = 1876;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1877;
				this.expression();
				this.state = 1880;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===60) {
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
				localctx = new LastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1884;
				this.match(FlinkSqlParser.KW_LAST);
				this.state = 1885;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1886;
				this.expression();
				this.state = 1889;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===60) {
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
				localctx = new PositionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1893;
				this.match(FlinkSqlParser.KW_POSITION);
				this.state = 1894;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1895;
				(localctx as PositionContext)._substr = this.valueExpression(0);
				this.state = 1896;
				this.match(FlinkSqlParser.KW_IN);
				this.state = 1897;
				(localctx as PositionContext)._str = this.valueExpression(0);
				this.state = 1898;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 7:
				{
				localctx = new ConstantDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1900;
				this.constant();
				}
				break;
			case 8:
				{
				localctx = new StarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1901;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;
			case 9:
				{
				localctx = new StarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
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
				localctx = new SubqueryExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
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
				localctx = new FunctionCallContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1910;
				this.functionName();
				this.state = 1911;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1923;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 285736959) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 2688590049) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & 75514881) !== 0) || ((((_la - 271)) & ~0x1F) === 0 && ((1 << (_la - 271)) & 405012881) !== 0) || ((((_la - 310)) & ~0x1F) === 0 && ((1 << (_la - 310)) & 805840065) !== 0) || ((((_la - 347)) & ~0x1F) === 0 && ((1 << (_la - 347)) & 1107298419) !== 0) || ((((_la - 384)) & ~0x1F) === 0 && ((1 << (_la - 384)) & 65038337) !== 0)) {
					{
					this.state = 1913;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 216, this._ctx) ) {
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
					while (_la===388) {
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
				localctx = new ColumnReferenceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1927;
				this.identifier();
				}
				break;
			case 13:
				{
				localctx = new DereferenceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1928;
				this.dereferenceDefinition();
				}
				break;
			case 14:
				{
				localctx = new ParenthesizedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1929;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1930;
				this.expression();
				this.state = 1931;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1942;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 220, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new SubscriptContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
					(localctx as SubscriptContext)._value = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_primaryExpression);
					this.state = 1935;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 1936;
					this.match(FlinkSqlParser.LS_BRACKET);
					this.state = 1937;
					(localctx as SubscriptContext)._index = this.valueExpression(0);
					this.state = 1938;
					this.match(FlinkSqlParser.RS_BRACKET);
					}
					}
				}
				this.state = 1944;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 220, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionName(): FunctionNameContext {
		let localctx: FunctionNameContext = new FunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 274, FlinkSqlParser.RULE_functionName);
		try {
			this.state = 1948;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 221, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1945;
				this.reservedKeywordsUsedAsFuncName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1946;
				this.nonReservedKeywords();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1947;
				this.uid();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionParam(): FunctionParamContext {
		let localctx: FunctionParamContext = new FunctionParamContext(this, this._ctx, this.state);
		this.enterRule(localctx, 276, FlinkSqlParser.RULE_functionParam);
		try {
			this.state = 1954;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 222, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1950;
				this.reservedKeywordsUsedAsFuncParam();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1951;
				this.timeIntervalUnit();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1952;
				this.timePointUnit();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1953;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dereferenceDefinition(): DereferenceDefinitionContext {
		let localctx: DereferenceDefinitionContext = new DereferenceDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 278, FlinkSqlParser.RULE_dereferenceDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1956;
			this.uid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public correlationName(): CorrelationNameContext {
		let localctx: CorrelationNameContext = new CorrelationNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 280, FlinkSqlParser.RULE_correlationName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1958;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let localctx: QualifiedNameContext = new QualifiedNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 282, FlinkSqlParser.RULE_qualifiedName);
		try {
			this.state = 1962;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 223, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1960;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1961;
				this.dereferenceDefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		let localctx: TimeIntervalExpressionContext = new TimeIntervalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 284, FlinkSqlParser.RULE_timeIntervalExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1964;
			this.match(FlinkSqlParser.KW_INTERVAL);
			this.state = 1967;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 224, this._ctx) ) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext {
		let localctx: ErrorCapturingMultiUnitsIntervalContext = new ErrorCapturingMultiUnitsIntervalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 286, FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1969;
			this.multiUnitsInterval();
			this.state = 1971;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 225, this._ctx) ) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public multiUnitsInterval(): MultiUnitsIntervalContext {
		let localctx: MultiUnitsIntervalContext = new MultiUnitsIntervalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 288, FlinkSqlParser.RULE_multiUnitsInterval);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
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
				_alt = this._interp.adaptivePredict(this._input, 226, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext {
		let localctx: ErrorCapturingUnitToUnitIntervalContext = new ErrorCapturingUnitToUnitIntervalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 290, FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1980;
			localctx._body = this.unitToUnitInterval();
			this.state = 1983;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 227, this._ctx) ) {
			case 1:
				{
				this.state = 1981;
				localctx._error1 = this.multiUnitsInterval();
				}
				break;
			case 2:
				{
				this.state = 1982;
				localctx._error2 = this.unitToUnitInterval();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unitToUnitInterval(): UnitToUnitIntervalContext {
		let localctx: UnitToUnitIntervalContext = new UnitToUnitIntervalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 292, FlinkSqlParser.RULE_unitToUnitInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1985;
			localctx._value = this.intervalValue();
			this.state = 1986;
			localctx._from_ = this.timeIntervalUnit();
			this.state = 1987;
			this.match(FlinkSqlParser.KW_TO);
			this.state = 1988;
			localctx._to = this.timeIntervalUnit();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public intervalValue(): IntervalValueContext {
		let localctx: IntervalValueContext = new IntervalValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 294, FlinkSqlParser.RULE_intervalValue);
		let _la: number;
		try {
			this.state = 1995;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 397:
			case 398:
			case 406:
			case 407:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1991;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===397 || _la===398) {
					{
					this.state = 1990;
					_la = this._input.LA(1);
					if(!(_la===397 || _la===398)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 1993;
				_la = this._input.LA(1);
				if(!(_la===406 || _la===407)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 405:
				this.enterOuterAlt(localctx, 2);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public columnAlias(): ColumnAliasContext {
		let localctx: ColumnAliasContext = new ColumnAliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 296, FlinkSqlParser.RULE_columnAlias);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1998;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===185) {
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
			if (_la===384) {
				{
				this.state = 2001;
				this.identifierList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tableAlias(): TableAliasContext {
		let localctx: TableAliasContext = new TableAliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 298, FlinkSqlParser.RULE_tableAlias);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2005;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===185) {
				{
				this.state = 2004;
				this.match(FlinkSqlParser.KW_AS);
				}
			}

			this.state = 2007;
			this.identifier();
			this.state = 2009;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 233, this._ctx) ) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		let localctx: ErrorCapturingIdentifierContext = new ErrorCapturingIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 300, FlinkSqlParser.RULE_errorCapturingIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2011;
			this.identifier();
			this.state = 2012;
			this.errorCapturingIdentifierExtra();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext {
		let localctx: ErrorCapturingIdentifierExtraContext = new ErrorCapturingIdentifierExtraContext(this, this._ctx, this.state);
		this.enterRule(localctx, 302, FlinkSqlParser.RULE_errorCapturingIdentifierExtra);
		let _la: number;
		try {
			this.state = 2021;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 288:
				localctx = new ErrorIdentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
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
				} while (_la===288);
				}
				break;
			case 185:
			case 384:
				localctx = new RealIdentContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let localctx: IdentifierListContext = new IdentifierListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 304, FlinkSqlParser.RULE_identifierList);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierSeq(): IdentifierSeqContext {
		let localctx: IdentifierSeqContext = new IdentifierSeqContext(this, this._ctx, this.state);
		this.enterRule(localctx, 306, FlinkSqlParser.RULE_identifierSeq);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2027;
			this.identifier();
			this.state = 2032;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 308, FlinkSqlParser.RULE_identifier);
		try {
			this.state = 2038;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 406:
			case 409:
				localctx = new UnquotedIdentifierAlternativeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2035;
				this.unquotedIdentifier();
				}
				break;
			case 405:
				localctx = new QuotedIdentifierAlternativeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2036;
				this.quotedIdentifier();
				}
				break;
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 173:
			case 174:
			case 175:
			case 176:
				localctx = new NonReservedKeywordsAlternativeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unquotedIdentifier(): UnquotedIdentifierContext {
		let localctx: UnquotedIdentifierContext = new UnquotedIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 310, FlinkSqlParser.RULE_unquotedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2040;
			_la = this._input.LA(1);
			if(!(_la===406 || _la===409)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public quotedIdentifier(): QuotedIdentifierContext {
		let localctx: QuotedIdentifierContext = new QuotedIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 312, FlinkSqlParser.RULE_quotedIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2042;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whenClause(): WhenClauseContext {
		let localctx: WhenClauseContext = new WhenClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 314, FlinkSqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2044;
			this.match(FlinkSqlParser.KW_WHEN);
			this.state = 2045;
			localctx._condition = this.expression();
			this.state = 2046;
			this.match(FlinkSqlParser.KW_THEN);
			this.state = 2047;
			localctx._result = this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public uid(): UidContext {
		let localctx: UidContext = new UidContext(this, this._ctx, this.state);
		this.enterRule(localctx, 316, FlinkSqlParser.RULE_uid);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2049;
			this.identifier();
			this.state = 2054;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 238, this._ctx);
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
				_alt = this._interp.adaptivePredict(this._input, 238, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public withOption(): WithOptionContext {
		let localctx: WithOptionContext = new WithOptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 318, FlinkSqlParser.RULE_withOption);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2057;
			this.match(FlinkSqlParser.KW_WITH);
			this.state = 2058;
			this.tablePropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifNotExists(): IfNotExistsContext {
		let localctx: IfNotExistsContext = new IfNotExistsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 320, FlinkSqlParser.RULE_ifNotExists);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifExists(): IfExistsContext {
		let localctx: IfExistsContext = new IfExistsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 322, FlinkSqlParser.RULE_ifExists);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2064;
			this.match(FlinkSqlParser.KW_IF);
			this.state = 2065;
			this.match(FlinkSqlParser.KW_EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tablePropertyList(): TablePropertyListContext {
		let localctx: TablePropertyListContext = new TablePropertyListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 324, FlinkSqlParser.RULE_tablePropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2067;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 2068;
			this.tableProperty();
			this.state = 2073;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tableProperty(): TablePropertyContext {
		let localctx: TablePropertyContext = new TablePropertyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 326, FlinkSqlParser.RULE_tableProperty);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2078;
			localctx._key = this.tablePropertyKey();
			this.state = 2083;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===249 || _la===352 || _la===373 || ((((_la - 405)) & ~0x1F) === 0 && ((1 << (_la - 405)) & 7) !== 0)) {
				{
				this.state = 2080;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===373) {
					{
					this.state = 2079;
					this.match(FlinkSqlParser.EQUAL_SYMBOL);
					}
				}

				this.state = 2082;
				localctx._value = this.tablePropertyValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tablePropertyKey(): TablePropertyKeyContext {
		let localctx: TablePropertyKeyContext = new TablePropertyKeyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 328, FlinkSqlParser.RULE_tablePropertyKey);
		try {
			this.state = 2088;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2085;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2086;
				this.dereferenceDefinition();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2087;
				this.match(FlinkSqlParser.STRING_LITERAL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tablePropertyValue(): TablePropertyValueContext {
		let localctx: TablePropertyValueContext = new TablePropertyValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 330, FlinkSqlParser.RULE_tablePropertyValue);
		try {
			this.state = 2094;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 406:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2090;
				this.match(FlinkSqlParser.DIG_LITERAL);
				}
				break;
			case 407:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2091;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case 249:
			case 352:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2092;
				this.booleanLiteral();
				}
				break;
			case 405:
				this.enterOuterAlt(localctx, 4);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public logicalOperator(): LogicalOperatorContext {
		let localctx: LogicalOperatorContext = new LogicalOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 332, FlinkSqlParser.RULE_logicalOperator);
		try {
			this.state = 2102;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 181:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2096;
				this.match(FlinkSqlParser.KW_AND);
				}
				break;
			case 379:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2097;
				this.match(FlinkSqlParser.BIT_AND_OP);
				this.state = 2098;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case 305:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2099;
				this.match(FlinkSqlParser.KW_OR);
				}
				break;
			case 378:
				this.enterOuterAlt(localctx, 4);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 334, FlinkSqlParser.RULE_comparisonOperator);
		try {
			this.state = 2118;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 245, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2104;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2105;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2106;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2107;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2108;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2109;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 2110;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2111;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2112;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2113;
				this.match(FlinkSqlParser.EXCLAMATION_SYMBOL);
				this.state = 2114;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bitOperator(): BitOperatorContext {
		let localctx: BitOperatorContext = new BitOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 336, FlinkSqlParser.RULE_bitOperator);
		try {
			this.state = 2127;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 375:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2120;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2121;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;
			case 374:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2122;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 2123;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case 379:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2124;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case 380:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2125;
				this.match(FlinkSqlParser.BIT_XOR_OP);
				}
				break;
			case 378:
				this.enterOuterAlt(localctx, 5);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mathOperator(): MathOperatorContext {
		let localctx: MathOperatorContext = new MathOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 338, FlinkSqlParser.RULE_mathOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2129;
			_la = this._input.LA(1);
			if(!(_la===32 || ((((_la - 395)) & ~0x1F) === 0 && ((1 << (_la - 395)) & 221) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryOperator(): UnaryOperatorContext {
		let localctx: UnaryOperatorContext = new UnaryOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 340, FlinkSqlParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2131;
			_la = this._input.LA(1);
			if(!(_la===298 || ((((_la - 376)) & ~0x1F) === 0 && ((1 << (_la - 376)) & 6291459) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let localctx: ConstantContext = new ConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 342, FlinkSqlParser.RULE_constant);
		let _la: number;
		try {
			this.state = 2147;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 271:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2133;
				this.timeIntervalExpression();
				}
				break;
			case 78:
			case 80:
			case 114:
			case 171:
			case 227:
			case 261:
			case 289:
			case 292:
			case 329:
			case 372:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2134;
				this.timePointLiteral();
				}
				break;
			case 405:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2135;
				this.stringLiteral();
				}
				break;
			case 397:
			case 406:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===397) {
					{
					this.state = 2136;
					this.match(FlinkSqlParser.HYPNEN_SIGN);
					}
				}

				this.state = 2139;
				this.decimalLiteral();
				}
				break;
			case 249:
			case 352:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2140;
				this.booleanLiteral();
				}
				break;
			case 407:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2141;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case 408:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2142;
				this.match(FlinkSqlParser.BIT_STRING);
				}
				break;
			case 298:
			case 299:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timePointLiteral(): TimePointLiteralContext {
		let localctx: TimePointLiteralContext = new TimePointLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 344, FlinkSqlParser.RULE_timePointLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2149;
			this.timePointUnit();
			this.state = 2150;
			this.stringLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let localctx: StringLiteralContext = new StringLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 346, FlinkSqlParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2152;
			this.match(FlinkSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public decimalLiteral(): DecimalLiteralContext {
		let localctx: DecimalLiteralContext = new DecimalLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 348, FlinkSqlParser.RULE_decimalLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2154;
			this.match(FlinkSqlParser.DIG_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanLiteral(): BooleanLiteralContext {
		let localctx: BooleanLiteralContext = new BooleanLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 350, FlinkSqlParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2156;
			_la = this._input.LA(1);
			if(!(_la===249 || _la===352)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setQuantifier(): SetQuantifierContext {
		let localctx: SetQuantifierContext = new SetQuantifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 352, FlinkSqlParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2158;
			_la = this._input.LA(1);
			if(!(_la===178 || _la===235)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timePointUnit(): TimePointUnitContext {
		let localctx: TimePointUnitContext = new TimePointUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 354, FlinkSqlParser.RULE_timePointUnit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2160;
			_la = this._input.LA(1);
			if(!(_la===78 || _la===80 || _la===114 || _la===171 || _la===227 || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2415919105) !== 0) || _la===329 || _la===372)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public timeIntervalUnit(): TimeIntervalUnitContext {
		let localctx: TimeIntervalUnitContext = new TimeIntervalUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 356, FlinkSqlParser.RULE_timeIntervalUnit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2162;
			_la = this._input.LA(1);
			if(!(((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & 4218881) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 418381825) !== 0) || _la===114 || _la===130 || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & 19) !== 0) || _la===227 || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2415919105) !== 0) || _la===329 || _la===372)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reservedKeywordsUsedAsFuncParam(): ReservedKeywordsUsedAsFuncParamContext {
		let localctx: ReservedKeywordsUsedAsFuncParamContext = new ReservedKeywordsUsedAsFuncParamContext(this, this._ctx, this.state);
		this.enterRule(localctx, 358, FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncParam);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2164;
			_la = this._input.LA(1);
			if(!(_la===178 || _la===196 || _la===235 || _la===278 || _la===351 || _la===395)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext {
		let localctx: ReservedKeywordsUsedAsFuncNameContext = new ReservedKeywordsUsedAsFuncNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 360, FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2166;
			_la = this._input.LA(1);
			if(!(_la===59 || _la===77 || _la===114 || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & 2147622977) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & 4227393) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 2149711881) !== 0) || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 2466512897) !== 0) || ((((_la - 329)) & ~0x1F) === 0 && ((1 << (_la - 329)) & 554436097) !== 0) || _la===372)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reservedKeywords(): ReservedKeywordsContext {
		let localctx: ReservedKeywordsContext = new ReservedKeywordsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 362, FlinkSqlParser.RULE_reservedKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2168;
			_la = this._input.LA(1);
			if(!(((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & 4294967295) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4294967295) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 4294967293) !== 0) || ((((_la - 273)) & ~0x1F) === 0 && ((1 << (_la - 273)) & 4294967295) !== 0) || ((((_la - 305)) & ~0x1F) === 0 && ((1 << (_la - 305)) & 4294963199) !== 0) || ((((_la - 337)) & ~0x1F) === 0 && ((1 << (_la - 337)) & 4294950903) !== 0) || ((((_la - 369)) & ~0x1F) === 0 && ((1 << (_la - 369)) & 15) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nonReservedKeywords(): NonReservedKeywordsContext {
		let localctx: NonReservedKeywordsContext = new NonReservedKeywordsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 364, FlinkSqlParser.RULE_nonReservedKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2170;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967279) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 126975) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 80:
			return this.queryStatement_sempred(localctx as QueryStatementContext, predIndex);
		case 90:
			return this.tableExpression_sempred(localctx as TableExpressionContext, predIndex);
		case 132:
			return this.booleanExpression_sempred(localctx as BooleanExpressionContext, predIndex);
		case 135:
			return this.valueExpression_sempred(localctx as ValueExpressionContext, predIndex);
		case 136:
			return this.primaryExpression_sempred(localctx as PrimaryExpressionContext, predIndex);
		}
		return true;
	}
	private queryStatement_sempred(localctx: QueryStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private tableExpression_sempred(localctx: TableExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 3);
		case 2:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private booleanExpression_sempred(localctx: BooleanExpressionContext, predIndex: number): boolean {
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
	private valueExpression_sempred(localctx: ValueExpressionContext, predIndex: number): boolean {
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
	private primaryExpression_sempred(localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,410,2173,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
	7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
	7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,2,115,
	7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,2,121,
	7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,2,127,
	7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,2,133,
	7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,2,139,
	7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,2,145,
	7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,2,150,7,150,2,151,
	7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,
	7,157,2,158,7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,
	7,163,2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,
	7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,2,175,
	7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,2,181,
	7,181,2,182,7,182,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,3,2,375,8,2,1,2,5,2,378,
	8,2,10,2,12,2,381,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,
	3,395,8,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
	5,3,5,413,8,5,1,6,1,6,3,6,417,8,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,3,8,426,8,
	8,1,8,1,8,1,8,3,8,431,8,8,1,9,1,9,1,9,5,9,436,8,9,10,9,12,9,439,9,9,1,10,
	1,10,1,11,1,11,3,11,445,8,11,1,11,1,11,3,11,449,8,11,1,12,1,12,1,12,1,12,
	1,12,5,12,456,8,12,10,12,12,12,459,9,12,1,13,1,13,1,13,1,13,1,13,1,13,1,
	13,1,13,1,13,3,13,470,8,13,1,13,3,13,473,8,13,1,13,1,13,1,13,1,13,1,13,
	3,13,480,8,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,488,8,13,1,13,1,13,1,13,
	3,13,493,8,13,1,13,3,13,496,8,13,1,14,1,14,1,14,1,14,1,14,3,14,503,8,14,
	1,15,1,15,1,15,1,15,1,16,1,16,3,16,511,8,16,1,17,1,17,3,17,515,8,17,1,18,
	1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,3,19,527,8,19,1,19,1,19,1,
	19,1,19,1,19,1,19,3,19,535,8,19,1,19,1,19,3,19,539,8,19,1,19,1,19,1,19,
	1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,
	19,1,19,1,19,3,19,561,8,19,1,20,4,20,564,8,20,11,20,12,20,565,1,21,1,21,
	3,21,570,8,21,1,22,1,22,3,22,574,8,22,1,22,1,22,3,22,578,8,22,1,22,1,22,
	1,22,1,22,1,22,5,22,585,8,22,10,22,12,22,588,9,22,1,22,1,22,3,22,592,8,
	22,1,22,1,22,3,22,596,8,22,1,22,1,22,3,22,600,8,22,1,22,1,22,3,22,604,8,
	22,1,22,3,22,607,8,22,1,22,1,22,3,22,611,8,22,1,23,1,23,1,23,3,23,616,8,
	23,1,23,1,23,1,23,1,23,3,23,622,8,23,1,24,1,24,1,24,3,24,627,8,24,1,25,
	1,25,1,25,3,25,632,8,25,1,25,3,25,635,8,25,1,26,1,26,3,26,639,8,26,1,27,
	1,27,1,27,1,27,5,27,645,8,27,10,27,12,27,648,9,27,1,27,1,27,1,28,1,28,1,
	28,3,28,655,8,28,1,28,1,28,3,28,659,8,28,1,28,1,28,3,28,663,8,28,1,28,1,
	28,3,28,667,8,28,1,28,1,28,3,28,671,8,28,1,28,1,28,3,28,675,8,28,1,28,1,
	28,3,28,679,8,28,1,28,1,28,3,28,683,8,28,1,28,1,28,3,28,687,8,28,3,28,689,
	8,28,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,3,30,699,8,30,1,30,1,30,1,
	31,1,31,1,31,1,31,3,31,707,8,31,1,31,1,31,1,32,1,32,1,32,1,32,1,33,1,33,
	1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,5,34,729,8,
	34,10,34,12,34,732,9,34,1,34,1,34,1,35,1,35,3,35,738,8,35,1,35,1,35,1,35,
	1,35,3,35,744,8,35,1,35,3,35,747,8,35,1,35,3,35,750,8,35,1,36,1,36,1,36,
	1,37,1,37,1,37,1,37,1,37,3,37,760,8,37,1,37,3,37,763,8,37,1,38,1,38,1,39,
	1,39,1,39,1,39,3,39,771,8,39,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,
	42,1,42,3,42,783,8,42,1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,1,44,1,44,
	1,44,1,44,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,5,46,805,8,46,10,46,12,
	46,808,9,46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,5,47,818,8,47,10,47,
	12,47,821,9,47,1,47,1,47,3,47,825,8,47,1,48,1,48,3,48,829,8,48,1,49,1,49,
	1,49,1,49,5,49,835,8,49,10,49,12,49,838,9,49,1,49,3,49,841,8,49,1,50,1,
	50,1,51,1,51,1,51,1,51,3,51,849,8,51,1,52,1,52,1,52,1,52,1,52,1,53,1,53,
	1,53,3,53,859,8,53,1,53,1,53,3,53,863,8,53,1,53,1,53,1,54,1,54,3,54,869,
	8,54,1,54,1,54,3,54,873,8,54,1,54,1,54,3,54,877,8,54,1,54,3,54,880,8,54,
	1,54,1,54,1,54,1,55,1,55,1,55,1,55,3,55,889,8,55,1,55,1,55,3,55,893,8,55,
	1,55,1,55,1,55,1,55,1,55,3,55,900,8,55,1,55,3,55,903,8,55,1,56,1,56,1,56,
	1,56,1,56,1,56,5,56,911,8,56,10,56,12,56,914,9,56,1,57,1,57,1,58,1,58,1,
	58,3,58,921,8,58,1,58,1,58,1,58,1,58,1,58,1,58,3,58,929,8,58,1,59,1,59,
	3,59,933,8,59,1,59,1,59,1,59,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,1,
	61,1,61,3,61,948,8,61,1,62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,1,64,1,64,
	1,64,1,65,1,65,1,65,1,65,1,65,1,65,3,65,967,8,65,1,66,1,66,1,66,1,66,1,
	66,1,67,1,67,1,67,1,67,3,67,978,8,67,1,67,1,67,3,67,982,8,67,1,67,1,67,
	1,67,1,67,1,67,3,67,989,8,67,1,68,1,68,1,68,3,68,994,8,68,1,68,1,68,1,69,
	1,69,3,69,1000,8,69,1,69,1,69,3,69,1004,8,69,1,69,1,69,1,70,1,70,1,70,3,
	70,1011,8,70,1,70,1,70,3,70,1015,8,70,1,71,1,71,3,71,1019,8,71,1,71,1,71,
	3,71,1023,8,71,1,71,1,71,1,72,1,72,1,72,1,72,3,72,1031,8,72,1,72,1,72,3,
	72,1035,8,72,1,72,1,72,1,73,3,73,1040,8,73,1,73,1,73,1,73,1,73,3,73,1046,
	8,73,1,74,1,74,1,74,1,74,3,74,1052,8,74,1,74,3,74,1055,8,74,1,74,1,74,3,
	74,1059,8,74,1,75,1,75,1,75,1,76,1,76,1,76,1,76,5,76,1068,8,76,10,76,12,
	76,1071,9,76,1,77,1,77,1,77,1,77,5,77,1077,8,77,10,77,12,77,1080,9,77,1,
	77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,78,4,78,1091,8,78,11,78,12,78,1092,
	1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,79,4,79,1103,8,79,11,79,12,79,1104,
	1,79,1,79,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,3,80,1120,
	8,80,1,80,3,80,1123,8,80,1,80,1,80,3,80,1127,8,80,1,80,3,80,1130,8,80,3,
	80,1132,8,80,1,80,1,80,1,80,3,80,1137,8,80,1,80,1,80,3,80,1141,8,80,1,80,
	3,80,1144,8,80,5,80,1146,8,80,10,80,12,80,1149,9,80,1,81,1,81,1,81,1,81,
	5,81,1155,8,81,10,81,12,81,1158,9,81,1,82,1,82,1,82,1,82,5,82,1164,8,82,
	10,82,12,82,1167,9,82,1,83,1,83,1,83,1,83,1,83,5,83,1174,8,83,10,83,12,
	83,1177,9,83,1,83,1,83,3,83,1181,8,83,1,83,1,83,1,83,1,83,1,83,1,84,1,84,
	1,85,1,85,1,85,3,85,1193,8,85,1,85,3,85,1196,8,85,1,85,3,85,1199,8,85,1,
	85,3,85,1202,8,85,1,85,1,85,1,85,1,85,3,85,1208,8,85,1,86,1,86,3,86,1212,
	8,86,1,86,1,86,1,86,1,86,5,86,1218,8,86,10,86,12,86,1221,9,86,3,86,1223,
	8,86,1,87,1,87,1,87,3,87,1228,8,87,1,87,3,87,1231,8,87,3,87,1233,8,87,1,
	88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,3,88,1247,8,88,
	1,89,1,89,1,89,1,90,1,90,1,90,1,90,5,90,1256,8,90,10,90,12,90,1259,9,90,
	1,90,1,90,3,90,1263,8,90,1,90,1,90,1,90,1,90,1,90,1,90,3,90,1271,8,90,1,
	90,3,90,1274,8,90,1,90,3,90,1277,8,90,1,90,1,90,1,90,3,90,1282,8,90,5,90,
	1284,8,90,10,90,12,90,1287,9,90,1,91,1,91,3,91,1291,8,91,1,92,3,92,1294,
	8,92,1,92,1,92,3,92,1298,8,92,1,92,3,92,1301,8,92,1,92,3,92,1304,8,92,1,
	92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,5,92,1314,8,92,10,92,12,92,1317,9,
	92,1,92,1,92,1,92,1,92,3,92,1323,8,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,
	1,92,1,92,3,92,1334,8,92,1,93,1,93,1,94,1,94,1,94,1,94,1,94,1,94,1,95,1,
	95,1,96,1,96,1,96,1,96,1,96,1,97,1,97,1,97,1,97,1,97,1,98,1,98,1,98,1,98,
	1,98,5,98,1361,8,98,10,98,12,98,1364,9,98,1,98,1,98,1,99,1,99,1,100,1,100,
	1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,
	1,100,3,100,1385,8,100,1,101,1,101,1,102,1,102,1,102,1,102,1,102,1,103,
	1,103,1,103,1,103,1,103,1,103,1,103,5,103,1401,8,103,10,103,12,103,1404,
	9,103,1,103,1,103,3,103,1408,8,103,1,104,1,104,1,104,1,105,1,105,1,105,
	1,105,1,105,5,105,1418,8,105,10,105,12,105,1421,9,105,1,106,1,106,1,106,
	1,106,1,106,1,106,1,106,1,106,5,106,1431,8,106,10,106,12,106,1434,9,106,
	1,106,1,106,1,106,1,106,1,106,1,106,1,106,5,106,1443,8,106,10,106,12,106,
	1446,9,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,5,106,1455,8,106,10,
	106,12,106,1458,9,106,1,106,1,106,3,106,1462,8,106,1,107,1,107,1,107,1,
	108,1,108,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,110,1,110,1,111,1,
	111,1,112,1,112,1,112,1,113,1,113,1,113,1,113,5,113,1487,8,113,10,113,12,
	113,1490,9,113,1,114,1,114,1,114,1,114,1,115,3,115,1497,8,115,1,115,1,115,
	3,115,1501,8,115,1,115,3,115,1504,8,115,1,115,3,115,1507,8,115,1,115,1,
	115,1,116,1,116,1,116,3,116,1514,8,116,1,116,3,116,1517,8,116,1,116,3,116,
	1520,8,116,1,116,3,116,1523,8,116,1,116,3,116,1526,8,116,1,116,3,116,1529,
	8,116,1,116,1,116,1,116,3,116,1534,8,116,1,116,3,116,1537,8,116,1,117,1,
	117,1,117,1,117,1,117,5,117,1544,8,117,10,117,12,117,1547,9,117,1,118,1,
	118,3,118,1551,8,118,1,118,1,118,3,118,1555,8,118,1,119,1,119,1,119,3,119,
	1560,8,119,1,120,1,120,1,120,1,120,1,120,5,120,1567,8,120,10,120,12,120,
	1570,9,120,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,
	1,121,1,121,1,121,1,121,1,121,1,121,3,121,1588,8,121,1,122,1,122,1,122,
	1,122,5,122,1594,8,122,10,122,12,122,1597,9,122,1,123,1,123,1,123,4,123,
	1602,8,123,11,123,12,123,1603,1,123,1,123,3,123,1608,8,123,1,124,1,124,
	3,124,1612,8,124,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,3,125,
	1622,8,125,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,
	1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,
	1,126,1,126,3,126,1648,8,126,1,127,1,127,1,127,1,127,5,127,1654,8,127,10,
	127,12,127,1657,9,127,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,
	128,3,128,1668,8,128,1,129,1,129,1,129,1,129,1,129,1,130,1,130,1,130,1,
	131,1,131,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,3,
	132,1690,8,132,3,132,1692,8,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,
	1,132,1,132,3,132,1703,8,132,1,132,5,132,1706,8,132,10,132,12,132,1709,
	9,132,1,133,3,133,1712,8,133,1,133,1,133,3,133,1716,8,133,1,133,1,133,1,
	133,1,133,1,133,3,133,1723,8,133,1,133,1,133,1,133,1,133,1,133,5,133,1730,
	8,133,10,133,12,133,1733,9,133,1,133,1,133,1,133,3,133,1738,8,133,1,133,
	1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,3,133,1751,
	8,133,1,133,1,133,1,133,1,133,1,133,3,133,1758,8,133,1,133,1,133,1,133,
	3,133,1763,8,133,1,133,1,133,1,133,1,133,3,133,1769,8,133,1,133,1,133,1,
	133,1,133,1,133,3,133,1776,8,133,3,133,1778,8,133,1,134,3,134,1781,8,134,
	1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,5,134,1791,8,134,10,134,
	12,134,1794,9,134,1,134,1,134,3,134,1798,8,134,1,134,3,134,1801,8,134,1,
	134,1,134,1,134,1,134,3,134,1807,8,134,3,134,1809,8,134,1,135,1,135,1,135,
	1,135,3,135,1815,8,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,
	1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,
	1,135,5,135,1838,8,135,10,135,12,135,1841,9,135,1,136,1,136,1,136,4,136,
	1846,8,136,11,136,12,136,1847,1,136,1,136,3,136,1852,8,136,1,136,1,136,
	1,136,1,136,1,136,4,136,1859,8,136,11,136,12,136,1860,1,136,1,136,3,136,
	1865,8,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,
	1,136,1,136,1,136,1,136,3,136,1881,8,136,1,136,1,136,1,136,1,136,1,136,
	1,136,1,136,3,136,1890,8,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,
	1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,
	1,136,1,136,1,136,3,136,1914,8,136,1,136,1,136,1,136,5,136,1919,8,136,10,
	136,12,136,1922,9,136,3,136,1924,8,136,1,136,1,136,1,136,1,136,1,136,1,
	136,1,136,1,136,3,136,1934,8,136,1,136,1,136,1,136,1,136,1,136,5,136,1941,
	8,136,10,136,12,136,1944,9,136,1,137,1,137,1,137,3,137,1949,8,137,1,138,
	1,138,1,138,1,138,3,138,1955,8,138,1,139,1,139,1,140,1,140,1,141,1,141,
	3,141,1963,8,141,1,142,1,142,1,142,3,142,1968,8,142,1,143,1,143,3,143,1972,
	8,143,1,144,1,144,1,144,4,144,1977,8,144,11,144,12,144,1978,1,145,1,145,
	1,145,3,145,1984,8,145,1,146,1,146,1,146,1,146,1,146,1,147,3,147,1992,8,
	147,1,147,1,147,3,147,1996,8,147,1,148,3,148,1999,8,148,1,148,1,148,3,148,
	2003,8,148,1,149,3,149,2006,8,149,1,149,1,149,3,149,2010,8,149,1,150,1,
	150,1,150,1,151,1,151,4,151,2017,8,151,11,151,12,151,2018,1,151,3,151,2022,
	8,151,1,152,1,152,1,152,1,152,1,153,1,153,1,153,5,153,2031,8,153,10,153,
	12,153,2034,9,153,1,154,1,154,1,154,3,154,2039,8,154,1,155,1,155,1,156,
	1,156,1,157,1,157,1,157,1,157,1,157,1,158,1,158,1,158,5,158,2053,8,158,
	10,158,12,158,2056,9,158,1,159,1,159,1,159,1,160,1,160,1,160,1,160,1,161,
	1,161,1,161,1,162,1,162,1,162,1,162,5,162,2072,8,162,10,162,12,162,2075,
	9,162,1,162,1,162,1,163,1,163,3,163,2081,8,163,1,163,3,163,2084,8,163,1,
	164,1,164,1,164,3,164,2089,8,164,1,165,1,165,1,165,1,165,3,165,2095,8,165,
	1,166,1,166,1,166,1,166,1,166,1,166,3,166,2103,8,166,1,167,1,167,1,167,
	1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,3,167,
	2119,8,167,1,168,1,168,1,168,1,168,1,168,1,168,1,168,3,168,2128,8,168,1,
	169,1,169,1,170,1,170,1,171,1,171,1,171,1,171,3,171,2138,8,171,1,171,1,
	171,1,171,1,171,1,171,3,171,2145,8,171,1,171,3,171,2148,8,171,1,172,1,172,
	1,172,1,173,1,173,1,174,1,174,1,175,1,175,1,176,1,176,1,177,1,177,1,178,
	1,178,1,179,1,179,1,180,1,180,1,181,1,181,1,182,1,182,1,182,1,2054,5,160,
	180,264,270,272,183,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
	38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
	86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,
	126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,
	162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,
	198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,
	234,236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,266,268,
	270,272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,304,
	306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,338,340,
	342,344,346,348,350,352,354,356,358,360,362,364,0,47,2,0,30,30,234,234,
	3,0,16,16,38,38,68,68,4,0,13,13,26,26,65,65,167,167,2,0,12,12,25,25,2,0,
	252,252,263,263,2,0,166,166,344,344,2,0,4,4,118,118,1,0,108,112,3,0,195,
	195,225,225,299,299,11,0,10,10,146,146,152,152,191,192,204,204,226,226,
	268,269,335,335,347,347,349,349,364,365,2,0,369,369,371,371,4,0,228,229,
	236,236,250,250,300,300,2,0,184,184,293,293,2,0,41,41,264,264,3,0,21,21,
	96,96,178,178,3,0,41,41,94,94,264,264,3,0,53,53,90,90,170,170,3,0,66,66,
	107,107,126,126,2,0,11,11,123,123,2,0,93,93,272,272,3,0,243,243,270,270,
	354,354,4,0,253,253,265,265,279,279,323,323,3,0,23,23,57,57,156,156,5,0,
	24,24,139,140,145,145,151,151,302,302,2,0,221,221,326,326,3,0,57,57,136,
	136,156,156,2,0,8,8,30,30,2,0,45,45,73,73,4,0,249,249,299,299,352,352,356,
	356,2,0,186,186,340,340,2,0,178,178,182,182,2,0,377,377,397,398,4,0,32,
	32,395,395,399,399,402,402,2,0,397,398,400,400,1,0,397,398,1,0,406,407,
	2,0,406,406,409,409,4,0,32,32,395,395,397,399,401,402,3,0,298,298,376,377,
	397,398,2,0,249,249,352,352,2,0,178,178,235,235,10,0,78,78,80,80,114,114,
	171,171,227,227,261,261,289,289,292,292,329,329,372,372,16,0,14,14,27,28,
	36,36,58,58,78,81,85,86,114,114,130,130,171,172,175,175,227,227,261,261,
	289,289,292,292,329,329,372,372,6,0,178,178,196,196,235,235,278,278,351,
	351,395,395,28,0,59,59,77,77,114,114,171,171,177,177,184,184,188,188,202,
	203,209,209,211,211,218,218,225,225,258,258,261,261,275,275,279,279,289,
	289,292,292,310,310,316,317,320,320,323,323,329,329,338,339,347,348,353,
	353,358,358,372,372,5,0,177,241,243,316,318,339,341,350,352,372,3,0,4,35,
	37,171,173,176,2357,0,366,1,0,0,0,2,369,1,0,0,0,4,379,1,0,0,0,6,394,1,0,
	0,0,8,396,1,0,0,0,10,412,1,0,0,0,12,416,1,0,0,0,14,418,1,0,0,0,16,421,1,
	0,0,0,18,432,1,0,0,0,20,440,1,0,0,0,22,448,1,0,0,0,24,450,1,0,0,0,26,495,
	1,0,0,0,28,497,1,0,0,0,30,504,1,0,0,0,32,508,1,0,0,0,34,512,1,0,0,0,36,
	516,1,0,0,0,38,560,1,0,0,0,40,563,1,0,0,0,42,569,1,0,0,0,44,571,1,0,0,0,
	46,612,1,0,0,0,48,626,1,0,0,0,50,628,1,0,0,0,52,638,1,0,0,0,54,640,1,0,
	0,0,56,688,1,0,0,0,58,690,1,0,0,0,60,694,1,0,0,0,62,702,1,0,0,0,64,710,
	1,0,0,0,66,714,1,0,0,0,68,721,1,0,0,0,70,749,1,0,0,0,72,751,1,0,0,0,74,
	754,1,0,0,0,76,764,1,0,0,0,78,766,1,0,0,0,80,772,1,0,0,0,82,774,1,0,0,0,
	84,782,1,0,0,0,86,790,1,0,0,0,88,792,1,0,0,0,90,796,1,0,0,0,92,800,1,0,
	0,0,94,824,1,0,0,0,96,828,1,0,0,0,98,830,1,0,0,0,100,842,1,0,0,0,102,848,
	1,0,0,0,104,850,1,0,0,0,106,855,1,0,0,0,108,866,1,0,0,0,110,884,1,0,0,0,
	112,904,1,0,0,0,114,915,1,0,0,0,116,917,1,0,0,0,118,930,1,0,0,0,120,937,
	1,0,0,0,122,940,1,0,0,0,124,949,1,0,0,0,126,953,1,0,0,0,128,957,1,0,0,0,
	130,960,1,0,0,0,132,968,1,0,0,0,134,973,1,0,0,0,136,990,1,0,0,0,138,997,
	1,0,0,0,140,1007,1,0,0,0,142,1016,1,0,0,0,144,1026,1,0,0,0,146,1045,1,0,
	0,0,148,1047,1,0,0,0,150,1060,1,0,0,0,152,1063,1,0,0,0,154,1072,1,0,0,0,
	156,1083,1,0,0,0,158,1096,1,0,0,0,160,1131,1,0,0,0,162,1150,1,0,0,0,164,
	1159,1,0,0,0,166,1168,1,0,0,0,168,1187,1,0,0,0,170,1207,1,0,0,0,172,1209,
	1,0,0,0,174,1232,1,0,0,0,176,1246,1,0,0,0,178,1248,1,0,0,0,180,1262,1,0,
	0,0,182,1288,1,0,0,0,184,1333,1,0,0,0,186,1335,1,0,0,0,188,1337,1,0,0,0,
	190,1343,1,0,0,0,192,1345,1,0,0,0,194,1350,1,0,0,0,196,1355,1,0,0,0,198,
	1367,1,0,0,0,200,1384,1,0,0,0,202,1386,1,0,0,0,204,1388,1,0,0,0,206,1407,
	1,0,0,0,208,1409,1,0,0,0,210,1412,1,0,0,0,212,1461,1,0,0,0,214,1463,1,0,
	0,0,216,1466,1,0,0,0,218,1468,1,0,0,0,220,1475,1,0,0,0,222,1477,1,0,0,0,
	224,1479,1,0,0,0,226,1482,1,0,0,0,228,1491,1,0,0,0,230,1496,1,0,0,0,232,
	1510,1,0,0,0,234,1538,1,0,0,0,236,1548,1,0,0,0,238,1556,1,0,0,0,240,1561,
	1,0,0,0,242,1587,1,0,0,0,244,1589,1,0,0,0,246,1598,1,0,0,0,248,1609,1,0,
	0,0,250,1621,1,0,0,0,252,1647,1,0,0,0,254,1649,1,0,0,0,256,1667,1,0,0,0,
	258,1669,1,0,0,0,260,1674,1,0,0,0,262,1677,1,0,0,0,264,1691,1,0,0,0,266,
	1777,1,0,0,0,268,1808,1,0,0,0,270,1814,1,0,0,0,272,1933,1,0,0,0,274,1948,
	1,0,0,0,276,1954,1,0,0,0,278,1956,1,0,0,0,280,1958,1,0,0,0,282,1962,1,0,
	0,0,284,1964,1,0,0,0,286,1969,1,0,0,0,288,1976,1,0,0,0,290,1980,1,0,0,0,
	292,1985,1,0,0,0,294,1995,1,0,0,0,296,1998,1,0,0,0,298,2005,1,0,0,0,300,
	2011,1,0,0,0,302,2021,1,0,0,0,304,2023,1,0,0,0,306,2027,1,0,0,0,308,2038,
	1,0,0,0,310,2040,1,0,0,0,312,2042,1,0,0,0,314,2044,1,0,0,0,316,2049,1,0,
	0,0,318,2057,1,0,0,0,320,2060,1,0,0,0,322,2064,1,0,0,0,324,2067,1,0,0,0,
	326,2078,1,0,0,0,328,2088,1,0,0,0,330,2094,1,0,0,0,332,2102,1,0,0,0,334,
	2118,1,0,0,0,336,2127,1,0,0,0,338,2129,1,0,0,0,340,2131,1,0,0,0,342,2147,
	1,0,0,0,344,2149,1,0,0,0,346,2152,1,0,0,0,348,2154,1,0,0,0,350,2156,1,0,
	0,0,352,2158,1,0,0,0,354,2160,1,0,0,0,356,2162,1,0,0,0,358,2164,1,0,0,0,
	360,2166,1,0,0,0,362,2168,1,0,0,0,364,2170,1,0,0,0,366,367,3,2,1,0,367,
	368,5,0,0,1,368,1,1,0,0,0,369,370,3,4,2,0,370,371,5,0,0,1,371,3,1,0,0,0,
	372,374,3,6,3,0,373,375,5,389,0,0,374,373,1,0,0,0,374,375,1,0,0,0,375,378,
	1,0,0,0,376,378,3,8,4,0,377,372,1,0,0,0,377,376,1,0,0,0,378,381,1,0,0,0,
	379,377,1,0,0,0,379,380,1,0,0,0,380,5,1,0,0,0,381,379,1,0,0,0,382,395,3,
	10,5,0,383,395,3,12,6,0,384,395,3,14,7,0,385,395,3,16,8,0,386,395,3,22,
	11,0,387,395,3,26,13,0,388,395,3,28,14,0,389,395,3,30,15,0,390,395,3,32,
	16,0,391,395,3,34,17,0,392,395,3,36,18,0,393,395,3,38,19,0,394,382,1,0,
	0,0,394,383,1,0,0,0,394,384,1,0,0,0,394,385,1,0,0,0,394,386,1,0,0,0,394,
	387,1,0,0,0,394,388,1,0,0,0,394,389,1,0,0,0,394,390,1,0,0,0,394,391,1,0,
	0,0,394,392,1,0,0,0,394,393,1,0,0,0,395,7,1,0,0,0,396,397,5,389,0,0,397,
	9,1,0,0,0,398,413,3,42,21,0,399,413,3,106,53,0,400,413,3,108,54,0,401,413,
	3,110,55,0,402,413,3,104,52,0,403,413,3,116,58,0,404,413,3,130,65,0,405,
	413,3,132,66,0,406,413,3,134,67,0,407,413,3,136,68,0,408,413,3,138,69,0,
	409,413,3,140,70,0,410,413,3,142,71,0,411,413,3,144,72,0,412,398,1,0,0,
	0,412,399,1,0,0,0,412,400,1,0,0,0,412,401,1,0,0,0,412,402,1,0,0,0,412,403,
	1,0,0,0,412,404,1,0,0,0,412,405,1,0,0,0,412,406,1,0,0,0,412,407,1,0,0,0,
	412,408,1,0,0,0,412,409,1,0,0,0,412,410,1,0,0,0,412,411,1,0,0,0,413,11,
	1,0,0,0,414,417,3,160,80,0,415,417,3,146,73,0,416,414,1,0,0,0,416,415,1,
	0,0,0,417,13,1,0,0,0,418,419,7,0,0,0,419,420,3,316,158,0,420,15,1,0,0,0,
	421,425,5,246,0,0,422,426,3,18,9,0,423,424,5,101,0,0,424,426,5,251,0,0,
	425,422,1,0,0,0,425,423,1,0,0,0,425,426,1,0,0,0,426,430,1,0,0,0,427,431,
	3,12,6,0,428,431,3,148,74,0,429,431,3,158,79,0,430,427,1,0,0,0,430,428,
	1,0,0,0,430,429,1,0,0,0,431,17,1,0,0,0,432,437,3,20,10,0,433,434,5,388,
	0,0,434,436,3,20,10,0,435,433,1,0,0,0,436,439,1,0,0,0,437,435,1,0,0,0,437,
	438,1,0,0,0,438,19,1,0,0,0,439,437,1,0,0,0,440,441,7,1,0,0,441,21,1,0,0,
	0,442,444,5,161,0,0,443,445,5,12,0,0,444,443,1,0,0,0,444,445,1,0,0,0,445,
	446,1,0,0,0,446,449,3,316,158,0,447,449,3,24,12,0,448,442,1,0,0,0,448,447,
	1,0,0,0,449,23,1,0,0,0,450,451,5,161,0,0,451,452,5,84,0,0,452,457,3,316,
	158,0,453,454,5,388,0,0,454,456,3,316,158,0,455,453,1,0,0,0,456,459,1,0,
	0,0,457,455,1,0,0,0,457,458,1,0,0,0,458,25,1,0,0,0,459,457,1,0,0,0,460,
	461,5,332,0,0,461,496,7,2,0,0,462,463,5,332,0,0,463,464,5,222,0,0,464,496,
	7,3,0,0,465,466,5,332,0,0,466,469,5,149,0,0,467,468,7,4,0,0,468,470,3,316,
	158,0,469,467,1,0,0,0,469,470,1,0,0,0,470,472,1,0,0,0,471,473,3,268,134,
	0,472,471,1,0,0,0,472,473,1,0,0,0,473,496,1,0,0,0,474,475,5,332,0,0,475,
	476,5,20,0,0,476,477,7,4,0,0,477,479,3,316,158,0,478,480,3,268,134,0,479,
	478,1,0,0,0,479,480,1,0,0,0,480,496,1,0,0,0,481,482,5,332,0,0,482,483,5,
	219,0,0,483,484,7,5,0,0,484,496,3,316,158,0,485,487,5,332,0,0,486,488,5,
	360,0,0,487,486,1,0,0,0,487,488,1,0,0,0,488,489,1,0,0,0,489,496,5,51,0,
	0,490,492,5,332,0,0,491,493,5,253,0,0,492,491,1,0,0,0,492,493,1,0,0,0,493,
	494,1,0,0,0,494,496,5,84,0,0,495,460,1,0,0,0,495,462,1,0,0,0,495,465,1,
	0,0,0,495,474,1,0,0,0,495,481,1,0,0,0,495,485,1,0,0,0,495,490,1,0,0,0,496,
	27,1,0,0,0,497,498,5,76,0,0,498,499,5,291,0,0,499,502,3,316,158,0,500,501,
	5,369,0,0,501,503,3,324,162,0,502,500,1,0,0,0,502,503,1,0,0,0,503,29,1,
	0,0,0,504,505,5,159,0,0,505,506,5,291,0,0,506,507,3,316,158,0,507,31,1,
	0,0,0,508,510,5,331,0,0,509,511,3,326,163,0,510,509,1,0,0,0,510,511,1,0,
	0,0,511,33,1,0,0,0,512,514,5,321,0,0,513,515,3,328,164,0,514,513,1,0,0,
	0,514,515,1,0,0,0,515,35,1,0,0,0,516,517,7,6,0,0,517,518,5,64,0,0,518,519,
	3,114,57,0,519,37,1,0,0,0,520,521,5,4,0,0,521,522,5,64,0,0,522,523,5,369,
	0,0,523,526,3,40,20,0,524,525,5,185,0,0,525,527,3,316,158,0,526,524,1,0,
	0,0,526,527,1,0,0,0,527,561,1,0,0,0,528,529,5,4,0,0,529,530,5,43,0,0,530,
	531,5,369,0,0,531,534,3,40,20,0,532,533,5,185,0,0,533,535,3,316,158,0,534,
	532,1,0,0,0,534,535,1,0,0,0,535,538,1,0,0,0,536,537,5,119,0,0,537,539,3,
	316,158,0,538,536,1,0,0,0,538,539,1,0,0,0,539,561,1,0,0,0,540,541,5,4,0,
	0,541,542,7,7,0,0,542,543,5,369,0,0,543,544,3,40,20,0,544,545,5,119,0,0,
	545,546,3,316,158,0,546,561,1,0,0,0,547,548,5,4,0,0,548,549,5,113,0,0,549,
	561,3,40,20,0,550,551,5,4,0,0,551,552,5,35,0,0,552,553,5,43,0,0,553,554,
	5,369,0,0,554,555,3,40,20,0,555,556,5,119,0,0,556,557,3,316,158,0,557,558,
	5,69,0,0,558,559,3,316,158,0,559,561,1,0,0,0,560,520,1,0,0,0,560,528,1,
	0,0,0,560,540,1,0,0,0,560,547,1,0,0,0,560,550,1,0,0,0,561,39,1,0,0,0,562,
	564,5,410,0,0,563,562,1,0,0,0,564,565,1,0,0,0,565,563,1,0,0,0,565,566,1,
	0,0,0,566,41,1,0,0,0,567,570,3,44,22,0,568,570,3,46,23,0,569,567,1,0,0,
	0,569,568,1,0,0,0,570,43,1,0,0,0,571,573,5,219,0,0,572,574,5,150,0,0,573,
	572,1,0,0,0,573,574,1,0,0,0,574,575,1,0,0,0,575,577,5,344,0,0,576,578,3,
	320,160,0,577,576,1,0,0,0,577,578,1,0,0,0,578,579,1,0,0,0,579,580,3,100,
	50,0,580,581,5,384,0,0,581,586,3,48,24,0,582,583,5,388,0,0,583,585,3,48,
	24,0,584,582,1,0,0,0,585,588,1,0,0,0,586,584,1,0,0,0,586,587,1,0,0,0,587,
	591,1,0,0,0,588,586,1,0,0,0,589,590,5,388,0,0,590,592,3,82,41,0,591,589,
	1,0,0,0,591,592,1,0,0,0,592,595,1,0,0,0,593,594,5,388,0,0,594,596,3,84,
	42,0,595,593,1,0,0,0,595,596,1,0,0,0,596,599,1,0,0,0,597,598,5,388,0,0,
	598,600,3,88,44,0,599,597,1,0,0,0,599,600,1,0,0,0,600,601,1,0,0,0,601,603,
	5,385,0,0,602,604,3,72,36,0,603,602,1,0,0,0,603,604,1,0,0,0,604,606,1,0,
	0,0,605,607,3,90,45,0,606,605,1,0,0,0,606,607,1,0,0,0,607,608,1,0,0,0,608,
	610,3,318,159,0,609,611,3,98,49,0,610,609,1,0,0,0,610,611,1,0,0,0,611,45,
	1,0,0,0,612,613,5,219,0,0,613,615,5,344,0,0,614,616,3,320,160,0,615,614,
	1,0,0,0,615,616,1,0,0,0,616,617,1,0,0,0,617,618,3,100,50,0,618,621,3,318,
	159,0,619,620,5,185,0,0,620,622,3,160,80,0,621,619,1,0,0,0,621,622,1,0,
	0,0,622,47,1,0,0,0,623,627,3,50,25,0,624,627,3,74,37,0,625,627,3,78,39,
	0,626,623,1,0,0,0,626,624,1,0,0,0,626,625,1,0,0,0,627,49,1,0,0,0,628,629,
	3,52,26,0,629,631,3,56,28,0,630,632,3,70,35,0,631,630,1,0,0,0,631,632,1,
	0,0,0,632,634,1,0,0,0,633,635,3,72,36,0,634,633,1,0,0,0,634,635,1,0,0,0,
	635,51,1,0,0,0,636,639,3,316,158,0,637,639,3,262,131,0,638,636,1,0,0,0,
	638,637,1,0,0,0,639,53,1,0,0,0,640,641,5,384,0,0,641,646,3,52,26,0,642,
	643,5,388,0,0,643,645,3,52,26,0,644,642,1,0,0,0,645,648,1,0,0,0,646,644,
	1,0,0,0,646,647,1,0,0,0,647,649,1,0,0,0,648,646,1,0,0,0,649,650,5,385,0,
	0,650,55,1,0,0,0,651,689,7,8,0,0,652,654,7,9,0,0,653,655,3,58,29,0,654,
	653,1,0,0,0,654,655,1,0,0,0,655,689,1,0,0,0,656,658,5,348,0,0,657,659,3,
	58,29,0,658,657,1,0,0,0,658,659,1,0,0,0,659,666,1,0,0,0,660,662,7,10,0,
	0,661,663,5,282,0,0,662,661,1,0,0,0,662,663,1,0,0,0,663,664,1,0,0,0,664,
	665,5,347,0,0,665,667,5,176,0,0,666,660,1,0,0,0,666,667,1,0,0,0,667,689,
	1,0,0,0,668,670,7,11,0,0,669,671,3,60,30,0,670,669,1,0,0,0,670,671,1,0,
	0,0,671,689,1,0,0,0,672,674,7,12,0,0,673,675,3,64,32,0,674,673,1,0,0,0,
	674,675,1,0,0,0,675,689,1,0,0,0,676,678,5,77,0,0,677,679,3,66,33,0,678,
	677,1,0,0,0,678,679,1,0,0,0,679,689,1,0,0,0,680,682,5,327,0,0,681,683,3,
	68,34,0,682,681,1,0,0,0,682,683,1,0,0,0,683,689,1,0,0,0,684,686,5,115,0,
	0,685,687,3,62,31,0,686,685,1,0,0,0,686,687,1,0,0,0,687,689,1,0,0,0,688,
	651,1,0,0,0,688,652,1,0,0,0,688,656,1,0,0,0,688,668,1,0,0,0,688,672,1,0,
	0,0,688,676,1,0,0,0,688,680,1,0,0,0,688,684,1,0,0,0,689,57,1,0,0,0,690,
	691,5,384,0,0,691,692,3,348,174,0,692,693,5,385,0,0,693,59,1,0,0,0,694,
	695,5,384,0,0,695,698,3,348,174,0,696,697,5,388,0,0,697,699,3,348,174,0,
	698,696,1,0,0,0,698,699,1,0,0,0,699,700,1,0,0,0,700,701,5,385,0,0,701,61,
	1,0,0,0,702,703,5,384,0,0,703,706,3,346,173,0,704,705,5,388,0,0,705,707,
	3,346,173,0,706,704,1,0,0,0,706,707,1,0,0,0,707,708,1,0,0,0,708,709,5,385,
	0,0,709,63,1,0,0,0,710,711,5,375,0,0,711,712,3,56,28,0,712,713,5,374,0,
	0,713,65,1,0,0,0,714,715,5,375,0,0,715,716,3,56,28,0,716,717,5,388,0,0,
	717,718,3,56,28,0,718,719,1,0,0,0,719,720,5,374,0,0,720,67,1,0,0,0,721,
	722,5,375,0,0,722,723,3,52,26,0,723,730,3,56,28,0,724,725,5,388,0,0,725,
	726,3,52,26,0,726,727,3,56,28,0,727,729,1,0,0,0,728,724,1,0,0,0,729,732,
	1,0,0,0,730,728,1,0,0,0,730,731,1,0,0,0,731,733,1,0,0,0,732,730,1,0,0,0,
	733,734,5,374,0,0,734,69,1,0,0,0,735,736,5,215,0,0,736,738,3,86,43,0,737,
	735,1,0,0,0,737,738,1,0,0,0,738,739,1,0,0,0,739,740,5,318,0,0,740,743,5,
	69,0,0,741,742,5,298,0,0,742,744,5,34,0,0,743,741,1,0,0,0,743,744,1,0,0,
	0,744,750,1,0,0,0,745,747,5,298,0,0,746,745,1,0,0,0,746,747,1,0,0,0,747,
	748,1,0,0,0,748,750,5,299,0,0,749,737,1,0,0,0,749,746,1,0,0,0,750,71,1,
	0,0,0,751,752,5,18,0,0,752,753,5,405,0,0,753,73,1,0,0,0,754,755,3,52,26,
	0,755,756,3,56,28,0,756,759,5,287,0,0,757,758,5,252,0,0,758,760,3,76,38,
	0,759,757,1,0,0,0,759,760,1,0,0,0,760,762,1,0,0,0,761,763,5,168,0,0,762,
	761,1,0,0,0,762,763,1,0,0,0,763,75,1,0,0,0,764,765,5,405,0,0,765,77,1,0,
	0,0,766,767,3,52,26,0,767,768,5,185,0,0,768,770,3,80,40,0,769,771,3,72,
	36,0,770,769,1,0,0,0,770,771,1,0,0,0,771,79,1,0,0,0,772,773,3,262,131,0,
	773,81,1,0,0,0,774,775,5,169,0,0,775,776,5,251,0,0,776,777,3,262,131,0,
	777,778,5,185,0,0,778,779,3,262,131,0,779,83,1,0,0,0,780,781,5,215,0,0,
	781,783,3,86,43,0,782,780,1,0,0,0,782,783,1,0,0,0,783,784,1,0,0,0,784,785,
	5,318,0,0,785,786,5,69,0,0,786,787,3,54,27,0,787,788,5,298,0,0,788,789,
	5,34,0,0,789,85,1,0,0,0,790,791,3,308,154,0,791,87,1,0,0,0,792,793,5,315,
	0,0,793,794,5,251,0,0,794,795,5,342,0,0,795,89,1,0,0,0,796,797,5,95,0,0,
	797,798,5,197,0,0,798,799,3,92,46,0,799,91,1,0,0,0,800,801,5,384,0,0,801,
	806,3,94,47,0,802,803,5,388,0,0,803,805,3,94,47,0,804,802,1,0,0,0,805,808,
	1,0,0,0,806,804,1,0,0,0,806,807,1,0,0,0,807,809,1,0,0,0,808,806,1,0,0,0,
	809,810,5,385,0,0,810,93,1,0,0,0,811,825,3,282,141,0,812,813,3,308,154,
	0,813,814,5,384,0,0,814,819,3,96,48,0,815,816,5,388,0,0,816,818,3,96,48,
	0,817,815,1,0,0,0,818,821,1,0,0,0,819,817,1,0,0,0,819,820,1,0,0,0,820,822,
	1,0,0,0,821,819,1,0,0,0,822,823,5,385,0,0,823,825,1,0,0,0,824,811,1,0,0,
	0,824,812,1,0,0,0,825,95,1,0,0,0,826,829,3,282,141,0,827,829,3,342,171,
	0,828,826,1,0,0,0,828,827,1,0,0,0,829,97,1,0,0,0,830,831,5,280,0,0,831,
	840,3,100,50,0,832,836,5,384,0,0,833,835,3,102,51,0,834,833,1,0,0,0,835,
	838,1,0,0,0,836,834,1,0,0,0,836,837,1,0,0,0,837,839,1,0,0,0,838,836,1,0,
	0,0,839,841,5,385,0,0,840,832,1,0,0,0,840,841,1,0,0,0,841,99,1,0,0,0,842,
	843,3,316,158,0,843,101,1,0,0,0,844,845,7,13,0,0,845,849,7,14,0,0,846,847,
	7,15,0,0,847,849,7,16,0,0,848,844,1,0,0,0,848,846,1,0,0,0,849,103,1,0,0,
	0,850,851,5,219,0,0,851,852,5,12,0,0,852,853,3,316,158,0,853,854,3,318,
	159,0,854,105,1,0,0,0,855,856,5,219,0,0,856,858,5,25,0,0,857,859,3,320,
	160,0,858,857,1,0,0,0,858,859,1,0,0,0,859,860,1,0,0,0,860,862,3,316,158,
	0,861,863,3,72,36,0,862,861,1,0,0,0,862,863,1,0,0,0,863,864,1,0,0,0,864,
	865,3,318,159,0,865,107,1,0,0,0,866,868,5,219,0,0,867,869,5,150,0,0,868,
	867,1,0,0,0,868,869,1,0,0,0,869,870,1,0,0,0,870,872,5,166,0,0,871,873,3,
	320,160,0,872,871,1,0,0,0,872,873,1,0,0,0,873,874,1,0,0,0,874,876,3,316,
	158,0,875,877,3,54,27,0,876,875,1,0,0,0,876,877,1,0,0,0,877,879,1,0,0,0,
	878,880,3,72,36,0,879,878,1,0,0,0,879,880,1,0,0,0,880,881,1,0,0,0,881,882,
	5,185,0,0,882,883,3,160,80,0,883,109,1,0,0,0,884,888,5,219,0,0,885,889,
	5,150,0,0,886,887,5,150,0,0,887,889,5,341,0,0,888,885,1,0,0,0,888,886,1,
	0,0,0,888,889,1,0,0,0,889,890,1,0,0,0,890,892,5,254,0,0,891,893,3,320,160,
	0,892,891,1,0,0,0,892,893,1,0,0,0,893,894,1,0,0,0,894,895,3,316,158,0,895,
	896,5,185,0,0,896,899,3,308,154,0,897,898,5,276,0,0,898,900,7,17,0,0,899,
	897,1,0,0,0,899,900,1,0,0,0,900,902,1,0,0,0,901,903,3,112,56,0,902,901,
	1,0,0,0,902,903,1,0,0,0,903,111,1,0,0,0,904,905,5,361,0,0,905,906,5,64,
	0,0,906,912,3,114,57,0,907,908,5,388,0,0,908,909,5,64,0,0,909,911,3,114,
	57,0,910,907,1,0,0,0,911,914,1,0,0,0,912,910,1,0,0,0,912,913,1,0,0,0,913,
	113,1,0,0,0,914,912,1,0,0,0,915,916,5,405,0,0,916,115,1,0,0,0,917,918,5,
	180,0,0,918,920,5,344,0,0,919,921,3,322,161,0,920,919,1,0,0,0,920,921,1,
	0,0,0,921,922,1,0,0,0,922,928,3,316,158,0,923,929,3,118,59,0,924,929,3,
	120,60,0,925,929,3,122,61,0,926,929,3,124,62,0,927,929,3,126,63,0,928,923,
	1,0,0,0,928,924,1,0,0,0,928,925,1,0,0,0,928,926,1,0,0,0,928,927,1,0,0,0,
	929,117,1,0,0,0,930,932,5,119,0,0,931,933,3,316,158,0,932,931,1,0,0,0,932,
	933,1,0,0,0,933,934,1,0,0,0,934,935,5,350,0,0,935,936,3,316,158,0,936,119,
	1,0,0,0,937,938,5,331,0,0,938,939,3,324,162,0,939,121,1,0,0,0,940,941,5,
	4,0,0,941,942,5,215,0,0,942,943,3,86,43,0,943,944,5,318,0,0,944,945,5,69,
	0,0,945,947,3,54,27,0,946,948,3,128,64,0,947,946,1,0,0,0,947,948,1,0,0,
	0,948,123,1,0,0,0,949,950,5,237,0,0,950,951,5,215,0,0,951,952,3,86,43,0,
	952,125,1,0,0,0,953,954,5,4,0,0,954,955,5,355,0,0,955,956,3,54,27,0,956,
	127,1,0,0,0,957,958,5,298,0,0,958,959,5,34,0,0,959,129,1,0,0,0,960,961,
	5,180,0,0,961,962,5,166,0,0,962,966,3,316,158,0,963,967,3,118,59,0,964,
	965,5,185,0,0,965,967,3,160,80,0,966,963,1,0,0,0,966,964,1,0,0,0,967,131,
	1,0,0,0,968,969,5,180,0,0,969,970,5,25,0,0,970,971,3,316,158,0,971,972,
	3,120,60,0,972,133,1,0,0,0,973,977,5,180,0,0,974,978,5,150,0,0,975,976,
	5,150,0,0,976,978,5,341,0,0,977,974,1,0,0,0,977,975,1,0,0,0,977,978,1,0,
	0,0,978,979,1,0,0,0,979,981,5,254,0,0,980,982,3,322,161,0,981,980,1,0,0,
	0,981,982,1,0,0,0,982,983,1,0,0,0,983,984,3,316,158,0,984,985,5,185,0,0,
	985,988,3,308,154,0,986,987,5,276,0,0,987,989,7,17,0,0,988,986,1,0,0,0,
	988,989,1,0,0,0,989,135,1,0,0,0,990,991,5,237,0,0,991,993,5,12,0,0,992,
	994,3,322,161,0,993,992,1,0,0,0,993,994,1,0,0,0,994,995,1,0,0,0,995,996,
	3,316,158,0,996,137,1,0,0,0,997,999,5,237,0,0,998,1000,5,150,0,0,999,998,
	1,0,0,0,999,1000,1,0,0,0,1000,1001,1,0,0,0,1001,1003,5,344,0,0,1002,1004,
	3,322,161,0,1003,1002,1,0,0,0,1003,1004,1,0,0,0,1004,1005,1,0,0,0,1005,
	1006,3,316,158,0,1006,139,1,0,0,0,1007,1008,5,237,0,0,1008,1010,5,25,0,
	0,1009,1011,3,322,161,0,1010,1009,1,0,0,0,1010,1011,1,0,0,0,1011,1012,1,
	0,0,0,1012,1014,3,316,158,0,1013,1015,7,18,0,0,1014,1013,1,0,0,0,1014,1015,
	1,0,0,0,1015,141,1,0,0,0,1016,1018,5,237,0,0,1017,1019,5,150,0,0,1018,1017,
	1,0,0,0,1018,1019,1,0,0,0,1019,1020,1,0,0,0,1020,1022,5,166,0,0,1021,1023,
	3,322,161,0,1022,1021,1,0,0,0,1022,1023,1,0,0,0,1023,1024,1,0,0,0,1024,
	1025,3,316,158,0,1025,143,1,0,0,0,1026,1030,5,237,0,0,1027,1031,5,150,0,
	0,1028,1029,5,150,0,0,1029,1031,5,341,0,0,1030,1027,1,0,0,0,1030,1028,1,
	0,0,0,1030,1031,1,0,0,0,1031,1032,1,0,0,0,1032,1034,5,254,0,0,1033,1035,
	3,322,161,0,1034,1033,1,0,0,0,1034,1035,1,0,0,0,1035,1036,1,0,0,0,1036,
	1037,3,316,158,0,1037,145,1,0,0,0,1038,1040,5,244,0,0,1039,1038,1,0,0,0,
	1039,1040,1,0,0,0,1040,1041,1,0,0,0,1041,1046,3,148,74,0,1042,1046,3,156,
	78,0,1043,1044,5,244,0,0,1044,1046,3,158,79,0,1045,1039,1,0,0,0,1045,1042,
	1,0,0,0,1045,1043,1,0,0,0,1046,147,1,0,0,0,1047,1048,5,267,0,0,1048,1049,
	7,19,0,0,1049,1058,3,316,158,0,1050,1052,3,150,75,0,1051,1050,1,0,0,0,1051,
	1052,1,0,0,0,1052,1054,1,0,0,0,1053,1055,3,54,27,0,1054,1053,1,0,0,0,1054,
	1055,1,0,0,0,1055,1056,1,0,0,0,1056,1059,3,160,80,0,1057,1059,3,152,76,
	0,1058,1051,1,0,0,0,1058,1057,1,0,0,0,1059,149,1,0,0,0,1060,1061,5,311,
	0,0,1061,1062,3,324,162,0,1062,151,1,0,0,0,1063,1064,5,363,0,0,1064,1069,
	3,154,77,0,1065,1066,5,388,0,0,1066,1068,3,154,77,0,1067,1065,1,0,0,0,1068,
	1071,1,0,0,0,1069,1067,1,0,0,0,1069,1070,1,0,0,0,1070,153,1,0,0,0,1071,
	1069,1,0,0,0,1072,1073,5,384,0,0,1073,1078,3,342,171,0,1074,1075,5,388,
	0,0,1075,1077,3,342,171,0,1076,1074,1,0,0,0,1077,1080,1,0,0,0,1078,1076,
	1,0,0,0,1078,1079,1,0,0,0,1079,1081,1,0,0,0,1080,1078,1,0,0,0,1081,1082,
	5,385,0,0,1082,155,1,0,0,0,1083,1084,5,189,0,0,1084,1085,5,144,0,0,1085,
	1086,5,331,0,0,1086,1090,5,389,0,0,1087,1088,3,148,74,0,1088,1089,5,389,
	0,0,1089,1091,1,0,0,0,1090,1087,1,0,0,0,1091,1092,1,0,0,0,1092,1090,1,0,
	0,0,1092,1093,1,0,0,0,1093,1094,1,0,0,0,1094,1095,5,240,0,0,1095,157,1,
	0,0,0,1096,1097,5,144,0,0,1097,1098,5,331,0,0,1098,1102,5,189,0,0,1099,
	1100,3,148,74,0,1100,1101,5,389,0,0,1101,1103,1,0,0,0,1102,1099,1,0,0,0,
	1103,1104,1,0,0,0,1104,1102,1,0,0,0,1104,1105,1,0,0,0,1105,1106,1,0,0,0,
	1106,1107,5,240,0,0,1107,159,1,0,0,0,1108,1109,6,80,-1,0,1109,1132,3,162,
	81,0,1110,1111,3,164,82,0,1111,1112,3,160,80,5,1112,1132,1,0,0,0,1113,1114,
	5,384,0,0,1114,1115,3,160,80,0,1115,1116,5,385,0,0,1116,1132,1,0,0,0,1117,
	1119,3,172,86,0,1118,1120,3,234,117,0,1119,1118,1,0,0,0,1119,1120,1,0,0,
	0,1120,1122,1,0,0,0,1121,1123,3,238,119,0,1122,1121,1,0,0,0,1122,1123,1,
	0,0,0,1123,1132,1,0,0,0,1124,1126,3,170,85,0,1125,1127,3,234,117,0,1126,
	1125,1,0,0,0,1126,1127,1,0,0,0,1127,1129,1,0,0,0,1128,1130,3,238,119,0,
	1129,1128,1,0,0,0,1129,1130,1,0,0,0,1130,1132,1,0,0,0,1131,1108,1,0,0,0,
	1131,1110,1,0,0,0,1131,1113,1,0,0,0,1131,1117,1,0,0,0,1131,1124,1,0,0,0,
	1132,1147,1,0,0,0,1133,1134,10,3,0,0,1134,1136,7,20,0,0,1135,1137,5,178,
	0,0,1136,1135,1,0,0,0,1136,1137,1,0,0,0,1137,1138,1,0,0,0,1138,1140,3,160,
	80,0,1139,1141,3,234,117,0,1140,1139,1,0,0,0,1140,1141,1,0,0,0,1141,1143,
	1,0,0,0,1142,1144,3,238,119,0,1143,1142,1,0,0,0,1143,1144,1,0,0,0,1144,
	1146,1,0,0,0,1145,1133,1,0,0,0,1146,1149,1,0,0,0,1147,1145,1,0,0,0,1147,
	1148,1,0,0,0,1148,161,1,0,0,0,1149,1147,1,0,0,0,1150,1151,5,363,0,0,1151,
	1156,3,262,131,0,1152,1153,5,388,0,0,1153,1155,3,262,131,0,1154,1152,1,
	0,0,0,1155,1158,1,0,0,0,1156,1154,1,0,0,0,1156,1157,1,0,0,0,1157,163,1,
	0,0,0,1158,1156,1,0,0,0,1159,1160,5,369,0,0,1160,1165,3,166,83,0,1161,1162,
	5,388,0,0,1162,1164,3,166,83,0,1163,1161,1,0,0,0,1164,1167,1,0,0,0,1165,
	1163,1,0,0,0,1165,1166,1,0,0,0,1166,165,1,0,0,0,1167,1165,1,0,0,0,1168,
	1180,3,168,84,0,1169,1170,5,384,0,0,1170,1175,3,52,26,0,1171,1172,5,388,
	0,0,1172,1174,3,52,26,0,1173,1171,1,0,0,0,1174,1177,1,0,0,0,1175,1173,1,
	0,0,0,1175,1176,1,0,0,0,1176,1178,1,0,0,0,1177,1175,1,0,0,0,1178,1179,5,
	385,0,0,1179,1181,1,0,0,0,1180,1169,1,0,0,0,1180,1181,1,0,0,0,1181,1182,
	1,0,0,0,1182,1183,5,185,0,0,1183,1184,5,384,0,0,1184,1185,3,160,80,0,1185,
	1186,5,385,0,0,1186,167,1,0,0,0,1187,1188,3,308,154,0,1188,169,1,0,0,0,
	1189,1190,3,172,86,0,1190,1192,3,178,89,0,1191,1193,3,208,104,0,1192,1191,
	1,0,0,0,1192,1193,1,0,0,0,1193,1195,1,0,0,0,1194,1196,3,210,105,0,1195,
	1194,1,0,0,0,1195,1196,1,0,0,0,1196,1198,1,0,0,0,1197,1199,3,224,112,0,
	1198,1197,1,0,0,0,1198,1199,1,0,0,0,1199,1201,1,0,0,0,1200,1202,3,226,113,
	0,1201,1200,1,0,0,0,1201,1202,1,0,0,0,1202,1208,1,0,0,0,1203,1204,3,172,
	86,0,1204,1205,3,178,89,0,1205,1206,3,232,116,0,1206,1208,1,0,0,0,1207,
	1189,1,0,0,0,1207,1203,1,0,0,0,1208,171,1,0,0,0,1209,1211,5,330,0,0,1210,
	1212,3,352,176,0,1211,1210,1,0,0,0,1211,1212,1,0,0,0,1212,1222,1,0,0,0,
	1213,1223,5,395,0,0,1214,1219,3,174,87,0,1215,1216,5,388,0,0,1216,1218,
	3,174,87,0,1217,1215,1,0,0,0,1218,1221,1,0,0,0,1219,1217,1,0,0,0,1219,1220,
	1,0,0,0,1220,1223,1,0,0,0,1221,1219,1,0,0,0,1222,1213,1,0,0,0,1222,1214,
	1,0,0,0,1223,173,1,0,0,0,1224,1233,3,176,88,0,1225,1230,3,262,131,0,1226,
	1228,5,185,0,0,1227,1226,1,0,0,0,1227,1228,1,0,0,0,1228,1229,1,0,0,0,1229,
	1231,3,262,131,0,1230,1227,1,0,0,0,1230,1231,1,0,0,0,1231,1233,1,0,0,0,
	1232,1224,1,0,0,0,1232,1225,1,0,0,0,1233,175,1,0,0,0,1234,1235,3,272,136,
	0,1235,1236,5,309,0,0,1236,1237,3,230,115,0,1237,1238,5,185,0,0,1238,1239,
	3,308,154,0,1239,1247,1,0,0,0,1240,1241,3,272,136,0,1241,1242,5,309,0,0,
	1242,1243,3,300,150,0,1243,1244,5,185,0,0,1244,1245,3,308,154,0,1245,1247,
	1,0,0,0,1246,1234,1,0,0,0,1246,1240,1,0,0,0,1247,177,1,0,0,0,1248,1249,
	5,252,0,0,1249,1250,3,180,90,0,1250,179,1,0,0,0,1251,1252,6,90,-1,0,1252,
	1257,3,182,91,0,1253,1254,5,388,0,0,1254,1256,3,182,91,0,1255,1253,1,0,
	0,0,1256,1259,1,0,0,0,1257,1255,1,0,0,0,1257,1258,1,0,0,0,1258,1263,1,0,
	0,0,1259,1257,1,0,0,0,1260,1263,3,192,96,0,1261,1263,3,194,97,0,1262,1251,
	1,0,0,0,1262,1260,1,0,0,0,1262,1261,1,0,0,0,1263,1285,1,0,0,0,1264,1265,
	10,3,0,0,1265,1266,5,220,0,0,1266,1267,5,274,0,0,1267,1284,3,180,90,4,1268,
	1270,10,4,0,0,1269,1271,5,294,0,0,1270,1269,1,0,0,0,1270,1271,1,0,0,0,1271,
	1273,1,0,0,0,1272,1274,7,21,0,0,1273,1272,1,0,0,0,1273,1274,1,0,0,0,1274,
	1276,1,0,0,0,1275,1277,5,308,0,0,1276,1275,1,0,0,0,1276,1277,1,0,0,0,1277,
	1278,1,0,0,0,1278,1279,5,274,0,0,1279,1281,3,180,90,0,1280,1282,3,206,103,
	0,1281,1280,1,0,0,0,1281,1282,1,0,0,0,1282,1284,1,0,0,0,1283,1264,1,0,0,
	0,1283,1268,1,0,0,0,1284,1287,1,0,0,0,1285,1283,1,0,0,0,1285,1286,1,0,0,
	0,1286,181,1,0,0,0,1287,1285,1,0,0,0,1288,1290,3,184,92,0,1289,1291,3,298,
	149,0,1290,1289,1,0,0,0,1290,1291,1,0,0,0,1291,183,1,0,0,0,1292,1294,5,
	344,0,0,1293,1292,1,0,0,0,1293,1294,1,0,0,0,1294,1295,1,0,0,0,1295,1297,
	3,186,93,0,1296,1298,3,188,94,0,1297,1296,1,0,0,0,1297,1298,1,0,0,0,1298,
	1303,1,0,0,0,1299,1301,5,185,0,0,1300,1299,1,0,0,0,1300,1301,1,0,0,0,1301,
	1302,1,0,0,0,1302,1304,3,280,140,0,1303,1300,1,0,0,0,1303,1304,1,0,0,0,
	1304,1334,1,0,0,0,1305,1306,5,277,0,0,1306,1307,5,344,0,0,1307,1308,5,384,
	0,0,1308,1309,3,274,137,0,1309,1310,5,384,0,0,1310,1315,3,276,138,0,1311,
	1312,5,388,0,0,1312,1314,3,276,138,0,1313,1311,1,0,0,0,1314,1317,1,0,0,
	0,1315,1313,1,0,0,0,1315,1316,1,0,0,0,1316,1318,1,0,0,0,1317,1315,1,0,0,
	0,1318,1319,5,385,0,0,1319,1320,5,385,0,0,1320,1334,1,0,0,0,1321,1323,5,
	277,0,0,1322,1321,1,0,0,0,1322,1323,1,0,0,0,1323,1324,1,0,0,0,1324,1325,
	5,384,0,0,1325,1326,3,160,80,0,1326,1327,5,385,0,0,1327,1334,1,0,0,0,1328,
	1329,5,357,0,0,1329,1330,5,384,0,0,1330,1331,3,262,131,0,1331,1332,5,385,
	0,0,1332,1334,1,0,0,0,1333,1293,1,0,0,0,1333,1305,1,0,0,0,1333,1322,1,0,
	0,0,1333,1328,1,0,0,0,1334,185,1,0,0,0,1335,1336,3,316,158,0,1336,187,1,
	0,0,0,1337,1338,5,251,0,0,1338,1339,5,342,0,0,1339,1340,5,185,0,0,1340,
	1341,5,301,0,0,1341,1342,3,190,95,0,1342,189,1,0,0,0,1343,1344,3,262,131,
	0,1344,191,1,0,0,0,1345,1346,5,384,0,0,1346,1347,3,152,76,0,1347,1348,5,
	385,0,0,1348,1349,3,298,149,0,1349,193,1,0,0,0,1350,1351,5,344,0,0,1351,
	1352,5,384,0,0,1352,1353,3,196,98,0,1353,1354,5,385,0,0,1354,195,1,0,0,
	0,1355,1356,3,198,99,0,1356,1357,5,384,0,0,1357,1362,3,200,100,0,1358,1359,
	5,388,0,0,1359,1361,3,200,100,0,1360,1358,1,0,0,0,1361,1364,1,0,0,0,1362,
	1360,1,0,0,0,1362,1363,1,0,0,0,1363,1365,1,0,0,0,1364,1362,1,0,0,0,1365,
	1366,5,385,0,0,1366,197,1,0,0,0,1367,1368,7,22,0,0,1368,199,1,0,0,0,1369,
	1370,5,344,0,0,1370,1385,3,222,111,0,1371,1385,3,204,102,0,1372,1385,3,
	284,142,0,1373,1374,5,24,0,0,1374,1375,5,404,0,0,1375,1376,5,344,0,0,1376,
	1385,3,222,111,0,1377,1378,5,151,0,0,1378,1379,5,404,0,0,1379,1385,3,204,
	102,0,1380,1381,3,202,101,0,1381,1382,5,404,0,0,1382,1383,3,284,142,0,1383,
	1385,1,0,0,0,1384,1369,1,0,0,0,1384,1371,1,0,0,0,1384,1372,1,0,0,0,1384,
	1373,1,0,0,0,1384,1377,1,0,0,0,1384,1380,1,0,0,0,1385,201,1,0,0,0,1386,
	1387,7,23,0,0,1387,203,1,0,0,0,1388,1389,5,31,0,0,1389,1390,5,384,0,0,1390,
	1391,3,316,158,0,1391,1392,5,385,0,0,1392,205,1,0,0,0,1393,1394,5,303,0,
	0,1394,1408,3,264,132,0,1395,1396,5,361,0,0,1396,1397,5,384,0,0,1397,1402,
	3,316,158,0,1398,1399,5,388,0,0,1399,1401,3,316,158,0,1400,1398,1,0,0,0,
	1401,1404,1,0,0,0,1402,1400,1,0,0,0,1402,1403,1,0,0,0,1403,1405,1,0,0,0,
	1404,1402,1,0,0,0,1405,1406,5,385,0,0,1406,1408,1,0,0,0,1407,1393,1,0,0,
	0,1407,1395,1,0,0,0,1408,207,1,0,0,0,1409,1410,5,367,0,0,1410,1411,3,264,
	132,0,1411,209,1,0,0,0,1412,1413,5,257,0,0,1413,1414,5,197,0,0,1414,1419,
	3,212,106,0,1415,1416,5,388,0,0,1416,1418,3,212,106,0,1417,1415,1,0,0,0,
	1418,1421,1,0,0,0,1419,1417,1,0,0,0,1419,1420,1,0,0,0,1420,211,1,0,0,0,
	1421,1419,1,0,0,0,1422,1462,3,262,131,0,1423,1462,3,218,109,0,1424,1425,
	5,384,0,0,1425,1462,5,385,0,0,1426,1427,5,384,0,0,1427,1432,3,262,131,0,
	1428,1429,5,388,0,0,1429,1431,3,262,131,0,1430,1428,1,0,0,0,1431,1434,1,
	0,0,0,1432,1430,1,0,0,0,1432,1433,1,0,0,0,1433,1435,1,0,0,0,1434,1432,1,
	0,0,0,1435,1436,5,385,0,0,1436,1462,1,0,0,0,1437,1438,3,216,108,0,1438,
	1439,5,384,0,0,1439,1444,3,262,131,0,1440,1441,5,388,0,0,1441,1443,3,262,
	131,0,1442,1440,1,0,0,0,1443,1446,1,0,0,0,1444,1442,1,0,0,0,1444,1445,1,
	0,0,0,1445,1447,1,0,0,0,1446,1444,1,0,0,0,1447,1448,5,385,0,0,1448,1462,
	1,0,0,0,1449,1450,3,214,107,0,1450,1451,5,384,0,0,1451,1456,3,212,106,0,
	1452,1453,5,388,0,0,1453,1455,3,212,106,0,1454,1452,1,0,0,0,1455,1458,1,
	0,0,0,1456,1454,1,0,0,0,1456,1457,1,0,0,0,1457,1459,1,0,0,0,1458,1456,1,
	0,0,0,1459,1460,5,385,0,0,1460,1462,1,0,0,0,1461,1422,1,0,0,0,1461,1423,
	1,0,0,0,1461,1424,1,0,0,0,1461,1426,1,0,0,0,1461,1437,1,0,0,0,1461,1449,
	1,0,0,0,1462,213,1,0,0,0,1463,1464,5,258,0,0,1464,1465,5,137,0,0,1465,215,
	1,0,0,0,1466,1467,7,24,0,0,1467,217,1,0,0,0,1468,1469,3,220,110,0,1469,
	1470,5,384,0,0,1470,1471,3,222,111,0,1471,1472,5,388,0,0,1472,1473,3,284,
	142,0,1473,1474,5,385,0,0,1474,219,1,0,0,0,1475,1476,7,25,0,0,1476,221,
	1,0,0,0,1477,1478,3,316,158,0,1478,223,1,0,0,0,1479,1480,5,260,0,0,1480,
	1481,3,264,132,0,1481,225,1,0,0,0,1482,1483,5,368,0,0,1483,1488,3,228,114,
	0,1484,1485,5,388,0,0,1485,1487,3,228,114,0,1486,1484,1,0,0,0,1487,1490,
	1,0,0,0,1488,1486,1,0,0,0,1488,1489,1,0,0,0,1489,227,1,0,0,0,1490,1488,
	1,0,0,0,1491,1492,3,300,150,0,1492,1493,5,185,0,0,1493,1494,3,230,115,0,
	1494,229,1,0,0,0,1495,1497,3,300,150,0,1496,1495,1,0,0,0,1496,1497,1,0,
	0,0,1497,1498,1,0,0,0,1498,1500,5,384,0,0,1499,1501,3,240,120,0,1500,1499,
	1,0,0,0,1500,1501,1,0,0,0,1501,1503,1,0,0,0,1502,1504,3,234,117,0,1503,
	1502,1,0,0,0,1503,1504,1,0,0,0,1504,1506,1,0,0,0,1505,1507,3,256,128,0,
	1506,1505,1,0,0,0,1506,1507,1,0,0,0,1507,1508,1,0,0,0,1508,1509,5,385,0,
	0,1509,231,1,0,0,0,1510,1511,5,284,0,0,1511,1513,5,384,0,0,1512,1514,3,
	240,120,0,1513,1512,1,0,0,0,1513,1514,1,0,0,0,1514,1516,1,0,0,0,1515,1517,
	3,234,117,0,1516,1515,1,0,0,0,1516,1517,1,0,0,0,1517,1519,1,0,0,0,1518,
	1520,3,244,122,0,1519,1518,1,0,0,0,1519,1520,1,0,0,0,1520,1522,1,0,0,0,
	1521,1523,3,250,125,0,1522,1521,1,0,0,0,1522,1523,1,0,0,0,1523,1525,1,0,
	0,0,1524,1526,3,252,126,0,1525,1524,1,0,0,0,1525,1526,1,0,0,0,1526,1528,
	1,0,0,0,1527,1529,3,246,123,0,1528,1527,1,0,0,0,1528,1529,1,0,0,0,1529,
	1530,1,0,0,0,1530,1531,3,254,127,0,1531,1536,5,385,0,0,1532,1534,5,185,
	0,0,1533,1532,1,0,0,0,1533,1534,1,0,0,0,1534,1535,1,0,0,0,1535,1537,3,308,
	154,0,1536,1533,1,0,0,0,1536,1537,1,0,0,0,1537,233,1,0,0,0,1538,1539,5,
	306,0,0,1539,1540,5,197,0,0,1540,1545,3,236,118,0,1541,1542,5,388,0,0,1542,
	1544,3,236,118,0,1543,1541,1,0,0,0,1544,1547,1,0,0,0,1545,1543,1,0,0,0,
	1545,1546,1,0,0,0,1546,235,1,0,0,0,1547,1545,1,0,0,0,1548,1550,3,262,131,
	0,1549,1551,7,26,0,0,1550,1549,1,0,0,0,1550,1551,1,0,0,0,1551,1554,1,0,
	0,0,1552,1553,5,87,0,0,1553,1555,7,27,0,0,1554,1552,1,0,0,0,1554,1555,1,
	0,0,0,1555,237,1,0,0,0,1556,1559,5,281,0,0,1557,1560,5,178,0,0,1558,1560,
	3,262,131,0,1559,1557,1,0,0,0,1559,1558,1,0,0,0,1560,239,1,0,0,0,1561,1562,
	5,311,0,0,1562,1563,5,197,0,0,1563,1568,3,262,131,0,1564,1565,5,388,0,0,
	1565,1567,3,262,131,0,1566,1564,1,0,0,0,1567,1570,1,0,0,0,1568,1566,1,0,
	0,0,1568,1569,1,0,0,0,1569,241,1,0,0,0,1570,1568,1,0,0,0,1571,1588,5,395,
	0,0,1572,1588,5,398,0,0,1573,1588,5,403,0,0,1574,1575,5,386,0,0,1575,1576,
	5,406,0,0,1576,1577,5,388,0,0,1577,1578,5,406,0,0,1578,1588,5,387,0,0,1579,
	1580,5,386,0,0,1580,1581,5,406,0,0,1581,1582,5,388,0,0,1582,1588,5,387,
	0,0,1583,1584,5,386,0,0,1584,1585,5,388,0,0,1585,1586,5,406,0,0,1586,1588,
	5,387,0,0,1587,1571,1,0,0,0,1587,1572,1,0,0,0,1587,1573,1,0,0,0,1587,1574,
	1,0,0,0,1587,1579,1,0,0,0,1587,1583,1,0,0,0,1588,243,1,0,0,0,1589,1590,
	5,285,0,0,1590,1595,3,174,87,0,1591,1592,5,388,0,0,1592,1594,3,174,87,0,
	1593,1591,1,0,0,0,1594,1597,1,0,0,0,1595,1593,1,0,0,0,1595,1596,1,0,0,0,
	1596,245,1,0,0,0,1597,1595,1,0,0,0,1598,1599,5,312,0,0,1599,1601,5,384,
	0,0,1600,1602,3,248,124,0,1601,1600,1,0,0,0,1602,1603,1,0,0,0,1603,1601,
	1,0,0,0,1603,1604,1,0,0,0,1604,1605,1,0,0,0,1605,1607,5,385,0,0,1606,1608,
	3,260,130,0,1607,1606,1,0,0,0,1607,1608,1,0,0,0,1608,247,1,0,0,0,1609,1611,
	3,310,155,0,1610,1612,3,242,121,0,1611,1610,1,0,0,0,1611,1612,1,0,0,0,1612,
	249,1,0,0,0,1613,1614,5,178,0,0,1614,1615,5,328,0,0,1615,1616,5,313,0,0,
	1616,1622,5,283,0,0,1617,1618,5,304,0,0,1618,1619,5,327,0,0,1619,1620,5,
	313,0,0,1620,1622,5,283,0,0,1621,1613,1,0,0,0,1621,1617,1,0,0,0,1622,251,
	1,0,0,0,1623,1624,5,6,0,0,1624,1625,5,283,0,0,1625,1626,5,334,0,0,1626,
	1627,5,98,0,0,1627,1628,5,73,0,0,1628,1648,5,327,0,0,1629,1630,5,6,0,0,
	1630,1631,5,283,0,0,1631,1632,5,334,0,0,1632,1633,5,350,0,0,1633,1634,5,
	295,0,0,1634,1648,5,327,0,0,1635,1636,5,6,0,0,1636,1637,5,283,0,0,1637,
	1638,5,334,0,0,1638,1639,5,350,0,0,1639,1640,5,73,0,0,1640,1648,3,310,155,
	0,1641,1642,5,6,0,0,1642,1643,5,283,0,0,1643,1644,5,334,0,0,1644,1645,5,
	350,0,0,1645,1646,5,45,0,0,1646,1648,3,310,155,0,1647,1623,1,0,0,0,1647,
	1629,1,0,0,0,1647,1635,1,0,0,0,1647,1641,1,0,0,0,1648,253,1,0,0,0,1649,
	1650,5,232,0,0,1650,1655,3,174,87,0,1651,1652,5,388,0,0,1652,1654,3,174,
	87,0,1653,1651,1,0,0,0,1654,1657,1,0,0,0,1655,1653,1,0,0,0,1655,1656,1,
	0,0,0,1656,255,1,0,0,0,1657,1655,1,0,0,0,1658,1659,5,319,0,0,1659,1660,
	5,190,0,0,1660,1661,3,284,142,0,1661,1662,3,258,129,0,1662,1668,1,0,0,0,
	1663,1664,5,328,0,0,1664,1665,5,190,0,0,1665,1666,5,406,0,0,1666,1668,3,
	258,129,0,1667,1658,1,0,0,0,1667,1663,1,0,0,0,1668,257,1,0,0,0,1669,1670,
	5,102,0,0,1670,1671,5,181,0,0,1671,1672,5,222,0,0,1672,1673,5,327,0,0,1673,
	259,1,0,0,0,1674,1675,5,370,0,0,1675,1676,3,284,142,0,1676,261,1,0,0,0,
	1677,1678,3,264,132,0,1678,263,1,0,0,0,1679,1680,6,132,-1,0,1680,1681,5,
	298,0,0,1681,1692,3,264,132,6,1682,1683,5,245,0,0,1683,1684,5,384,0,0,1684,
	1685,3,160,80,0,1685,1686,5,385,0,0,1686,1692,1,0,0,0,1687,1689,3,270,135,
	0,1688,1690,3,266,133,0,1689,1688,1,0,0,0,1689,1690,1,0,0,0,1690,1692,1,
	0,0,0,1691,1679,1,0,0,0,1691,1682,1,0,0,0,1691,1687,1,0,0,0,1692,1707,1,
	0,0,0,1693,1694,10,3,0,0,1694,1695,5,181,0,0,1695,1706,3,264,132,4,1696,
	1697,10,2,0,0,1697,1698,5,305,0,0,1698,1706,3,264,132,3,1699,1700,10,1,
	0,0,1700,1702,5,273,0,0,1701,1703,5,298,0,0,1702,1701,1,0,0,0,1702,1703,
	1,0,0,0,1703,1704,1,0,0,0,1704,1706,7,28,0,0,1705,1693,1,0,0,0,1705,1696,
	1,0,0,0,1705,1699,1,0,0,0,1706,1709,1,0,0,0,1707,1705,1,0,0,0,1707,1708,
	1,0,0,0,1708,265,1,0,0,0,1709,1707,1,0,0,0,1710,1712,5,298,0,0,1711,1710,
	1,0,0,0,1711,1712,1,0,0,0,1712,1713,1,0,0,0,1713,1715,5,190,0,0,1714,1716,
	7,29,0,0,1715,1714,1,0,0,0,1715,1716,1,0,0,0,1716,1717,1,0,0,0,1717,1718,
	3,270,135,0,1718,1719,5,181,0,0,1719,1720,3,270,135,0,1720,1778,1,0,0,0,
	1721,1723,5,298,0,0,1722,1721,1,0,0,0,1722,1723,1,0,0,0,1723,1724,1,0,0,
	0,1724,1725,5,263,0,0,1725,1726,5,384,0,0,1726,1731,3,262,131,0,1727,1728,
	5,388,0,0,1728,1730,3,262,131,0,1729,1727,1,0,0,0,1730,1733,1,0,0,0,1731,
	1729,1,0,0,0,1731,1732,1,0,0,0,1732,1734,1,0,0,0,1733,1731,1,0,0,0,1734,
	1735,5,385,0,0,1735,1778,1,0,0,0,1736,1738,5,298,0,0,1737,1736,1,0,0,0,
	1737,1738,1,0,0,0,1738,1739,1,0,0,0,1739,1740,5,263,0,0,1740,1741,5,384,
	0,0,1741,1742,3,160,80,0,1742,1743,5,385,0,0,1743,1778,1,0,0,0,1744,1745,
	5,245,0,0,1745,1746,5,384,0,0,1746,1747,3,160,80,0,1747,1748,5,385,0,0,
	1748,1778,1,0,0,0,1749,1751,5,298,0,0,1750,1749,1,0,0,0,1750,1751,1,0,0,
	0,1751,1752,1,0,0,0,1752,1753,5,324,0,0,1753,1778,3,270,135,0,1754,1778,
	3,268,134,0,1755,1757,5,273,0,0,1756,1758,5,298,0,0,1757,1756,1,0,0,0,1757,
	1758,1,0,0,0,1758,1759,1,0,0,0,1759,1778,7,28,0,0,1760,1762,5,273,0,0,1761,
	1763,5,298,0,0,1762,1761,1,0,0,0,1762,1763,1,0,0,0,1763,1764,1,0,0,0,1764,
	1765,5,235,0,0,1765,1766,5,252,0,0,1766,1778,3,270,135,0,1767,1769,5,298,
	0,0,1768,1767,1,0,0,0,1768,1769,1,0,0,0,1769,1770,1,0,0,0,1770,1771,5,333,
	0,0,1771,1772,5,350,0,0,1772,1775,3,270,135,0,1773,1774,5,242,0,0,1774,
	1776,3,346,173,0,1775,1773,1,0,0,0,1775,1776,1,0,0,0,1776,1778,1,0,0,0,
	1777,1711,1,0,0,0,1777,1722,1,0,0,0,1777,1737,1,0,0,0,1777,1744,1,0,0,0,
	1777,1750,1,0,0,0,1777,1754,1,0,0,0,1777,1755,1,0,0,0,1777,1760,1,0,0,0,
	1777,1768,1,0,0,0,1778,267,1,0,0,0,1779,1781,5,298,0,0,1780,1779,1,0,0,
	0,1780,1781,1,0,0,0,1781,1782,1,0,0,0,1782,1783,5,280,0,0,1783,1797,7,30,
	0,0,1784,1785,5,384,0,0,1785,1798,5,385,0,0,1786,1787,5,384,0,0,1787,1792,
	3,262,131,0,1788,1789,5,388,0,0,1789,1791,3,262,131,0,1790,1788,1,0,0,0,
	1791,1794,1,0,0,0,1792,1790,1,0,0,0,1792,1793,1,0,0,0,1793,1795,1,0,0,0,
	1794,1792,1,0,0,0,1795,1796,5,385,0,0,1796,1798,1,0,0,0,1797,1784,1,0,0,
	0,1797,1786,1,0,0,0,1798,1809,1,0,0,0,1799,1801,5,298,0,0,1800,1799,1,0,
	0,0,1800,1801,1,0,0,0,1801,1802,1,0,0,0,1802,1803,5,280,0,0,1803,1806,3,
	270,135,0,1804,1805,5,242,0,0,1805,1807,3,346,173,0,1806,1804,1,0,0,0,1806,
	1807,1,0,0,0,1807,1809,1,0,0,0,1808,1780,1,0,0,0,1808,1800,1,0,0,0,1809,
	269,1,0,0,0,1810,1811,6,135,-1,0,1811,1815,3,272,136,0,1812,1813,7,31,0,
	0,1813,1815,3,270,135,8,1814,1810,1,0,0,0,1814,1812,1,0,0,0,1815,1839,1,
	0,0,0,1816,1817,10,7,0,0,1817,1818,7,32,0,0,1818,1838,3,270,135,8,1819,
	1820,10,6,0,0,1820,1821,7,33,0,0,1821,1838,3,270,135,7,1822,1823,10,5,0,
	0,1823,1824,5,379,0,0,1824,1838,3,270,135,6,1825,1826,10,4,0,0,1826,1827,
	5,380,0,0,1827,1838,3,270,135,5,1828,1829,10,3,0,0,1829,1830,5,378,0,0,
	1830,1838,3,270,135,4,1831,1832,10,2,0,0,1832,1833,3,334,167,0,1833,1834,
	3,270,135,3,1834,1838,1,0,0,0,1835,1836,10,1,0,0,1836,1838,5,410,0,0,1837,
	1816,1,0,0,0,1837,1819,1,0,0,0,1837,1822,1,0,0,0,1837,1825,1,0,0,0,1837,
	1828,1,0,0,0,1837,1831,1,0,0,0,1837,1835,1,0,0,0,1838,1841,1,0,0,0,1839,
	1837,1,0,0,0,1839,1840,1,0,0,0,1840,271,1,0,0,0,1841,1839,1,0,0,0,1842,
	1843,6,136,-1,0,1843,1845,5,201,0,0,1844,1846,3,314,157,0,1845,1844,1,0,
	0,0,1846,1847,1,0,0,0,1847,1845,1,0,0,0,1847,1848,1,0,0,0,1848,1851,1,0,
	0,0,1849,1850,5,239,0,0,1850,1852,3,262,131,0,1851,1849,1,0,0,0,1851,1852,
	1,0,0,0,1852,1853,1,0,0,0,1853,1854,5,240,0,0,1854,1934,1,0,0,0,1855,1856,
	5,201,0,0,1856,1858,3,262,131,0,1857,1859,3,314,157,0,1858,1857,1,0,0,0,
	1859,1860,1,0,0,0,1860,1858,1,0,0,0,1860,1861,1,0,0,0,1861,1864,1,0,0,0,
	1862,1863,5,239,0,0,1863,1865,3,262,131,0,1864,1862,1,0,0,0,1864,1865,1,
	0,0,0,1865,1866,1,0,0,0,1866,1867,5,240,0,0,1867,1934,1,0,0,0,1868,1869,
	5,202,0,0,1869,1870,5,384,0,0,1870,1871,3,262,131,0,1871,1872,5,185,0,0,
	1872,1873,3,56,28,0,1873,1874,5,385,0,0,1874,1934,1,0,0,0,1875,1876,5,45,
	0,0,1876,1877,5,384,0,0,1877,1880,3,262,131,0,1878,1879,5,60,0,0,1879,1881,
	5,87,0,0,1880,1878,1,0,0,0,1880,1881,1,0,0,0,1881,1882,1,0,0,0,1882,1883,
	5,385,0,0,1883,1934,1,0,0,0,1884,1885,5,73,0,0,1885,1886,5,384,0,0,1886,
	1889,3,262,131,0,1887,1888,5,60,0,0,1888,1890,5,87,0,0,1889,1887,1,0,0,
	0,1889,1890,1,0,0,0,1890,1891,1,0,0,0,1891,1892,5,385,0,0,1892,1934,1,0,
	0,0,1893,1894,5,316,0,0,1894,1895,5,384,0,0,1895,1896,3,270,135,0,1896,
	1897,5,263,0,0,1897,1898,3,270,135,0,1898,1899,5,385,0,0,1899,1934,1,0,
	0,0,1900,1934,3,342,171,0,1901,1934,5,395,0,0,1902,1903,3,316,158,0,1903,
	1904,5,381,0,0,1904,1905,5,395,0,0,1905,1934,1,0,0,0,1906,1907,5,384,0,
	0,1907,1908,3,160,80,0,1908,1909,5,385,0,0,1909,1934,1,0,0,0,1910,1911,
	3,274,137,0,1911,1923,5,384,0,0,1912,1914,3,352,176,0,1913,1912,1,0,0,0,
	1913,1914,1,0,0,0,1914,1915,1,0,0,0,1915,1920,3,276,138,0,1916,1917,5,388,
	0,0,1917,1919,3,276,138,0,1918,1916,1,0,0,0,1919,1922,1,0,0,0,1920,1918,
	1,0,0,0,1920,1921,1,0,0,0,1921,1924,1,0,0,0,1922,1920,1,0,0,0,1923,1913,
	1,0,0,0,1923,1924,1,0,0,0,1924,1925,1,0,0,0,1925,1926,5,385,0,0,1926,1934,
	1,0,0,0,1927,1934,3,308,154,0,1928,1934,3,278,139,0,1929,1930,5,384,0,0,
	1930,1931,3,262,131,0,1931,1932,5,385,0,0,1932,1934,1,0,0,0,1933,1842,1,
	0,0,0,1933,1855,1,0,0,0,1933,1868,1,0,0,0,1933,1875,1,0,0,0,1933,1884,1,
	0,0,0,1933,1893,1,0,0,0,1933,1900,1,0,0,0,1933,1901,1,0,0,0,1933,1902,1,
	0,0,0,1933,1906,1,0,0,0,1933,1910,1,0,0,0,1933,1927,1,0,0,0,1933,1928,1,
	0,0,0,1933,1929,1,0,0,0,1934,1942,1,0,0,0,1935,1936,10,4,0,0,1936,1937,
	5,382,0,0,1937,1938,3,270,135,0,1938,1939,5,383,0,0,1939,1941,1,0,0,0,1940,
	1935,1,0,0,0,1941,1944,1,0,0,0,1942,1940,1,0,0,0,1942,1943,1,0,0,0,1943,
	273,1,0,0,0,1944,1942,1,0,0,0,1945,1949,3,360,180,0,1946,1949,3,364,182,
	0,1947,1949,3,316,158,0,1948,1945,1,0,0,0,1948,1946,1,0,0,0,1948,1947,1,
	0,0,0,1949,275,1,0,0,0,1950,1955,3,358,179,0,1951,1955,3,356,178,0,1952,
	1955,3,354,177,0,1953,1955,3,262,131,0,1954,1950,1,0,0,0,1954,1951,1,0,
	0,0,1954,1952,1,0,0,0,1954,1953,1,0,0,0,1955,277,1,0,0,0,1956,1957,3,316,
	158,0,1957,279,1,0,0,0,1958,1959,3,308,154,0,1959,281,1,0,0,0,1960,1963,
	3,308,154,0,1961,1963,3,278,139,0,1962,1960,1,0,0,0,1962,1961,1,0,0,0,1963,
	283,1,0,0,0,1964,1967,5,271,0,0,1965,1968,3,286,143,0,1966,1968,3,290,145,
	0,1967,1965,1,0,0,0,1967,1966,1,0,0,0,1967,1968,1,0,0,0,1968,285,1,0,0,
	0,1969,1971,3,288,144,0,1970,1972,3,292,146,0,1971,1970,1,0,0,0,1971,1972,
	1,0,0,0,1972,287,1,0,0,0,1973,1974,3,294,147,0,1974,1975,3,356,178,0,1975,
	1977,1,0,0,0,1976,1973,1,0,0,0,1977,1978,1,0,0,0,1978,1976,1,0,0,0,1978,
	1979,1,0,0,0,1979,289,1,0,0,0,1980,1983,3,292,146,0,1981,1984,3,288,144,
	0,1982,1984,3,292,146,0,1983,1981,1,0,0,0,1983,1982,1,0,0,0,1983,1984,1,
	0,0,0,1984,291,1,0,0,0,1985,1986,3,294,147,0,1986,1987,3,356,178,0,1987,
	1988,5,350,0,0,1988,1989,3,356,178,0,1989,293,1,0,0,0,1990,1992,7,34,0,
	0,1991,1990,1,0,0,0,1991,1992,1,0,0,0,1992,1993,1,0,0,0,1993,1996,7,35,
	0,0,1994,1996,5,405,0,0,1995,1991,1,0,0,0,1995,1994,1,0,0,0,1996,295,1,
	0,0,0,1997,1999,5,185,0,0,1998,1997,1,0,0,0,1998,1999,1,0,0,0,1999,2000,
	1,0,0,0,2000,2002,3,308,154,0,2001,2003,3,304,152,0,2002,2001,1,0,0,0,2002,
	2003,1,0,0,0,2003,297,1,0,0,0,2004,2006,5,185,0,0,2005,2004,1,0,0,0,2005,
	2006,1,0,0,0,2006,2007,1,0,0,0,2007,2009,3,308,154,0,2008,2010,3,304,152,
	0,2009,2008,1,0,0,0,2009,2010,1,0,0,0,2010,299,1,0,0,0,2011,2012,3,308,
	154,0,2012,2013,3,302,151,0,2013,301,1,0,0,0,2014,2015,5,288,0,0,2015,2017,
	3,308,154,0,2016,2014,1,0,0,0,2017,2018,1,0,0,0,2018,2016,1,0,0,0,2018,
	2019,1,0,0,0,2019,2022,1,0,0,0,2020,2022,1,0,0,0,2021,2016,1,0,0,0,2021,
	2020,1,0,0,0,2022,303,1,0,0,0,2023,2024,5,384,0,0,2024,2025,3,306,153,0,
	2025,2026,5,385,0,0,2026,305,1,0,0,0,2027,2032,3,308,154,0,2028,2029,5,
	388,0,0,2029,2031,3,308,154,0,2030,2028,1,0,0,0,2031,2034,1,0,0,0,2032,
	2030,1,0,0,0,2032,2033,1,0,0,0,2033,307,1,0,0,0,2034,2032,1,0,0,0,2035,
	2039,3,310,155,0,2036,2039,3,312,156,0,2037,2039,3,364,182,0,2038,2035,
	1,0,0,0,2038,2036,1,0,0,0,2038,2037,1,0,0,0,2039,309,1,0,0,0,2040,2041,
	7,36,0,0,2041,311,1,0,0,0,2042,2043,5,405,0,0,2043,313,1,0,0,0,2044,2045,
	5,366,0,0,2045,2046,3,262,131,0,2046,2047,5,346,0,0,2047,2048,3,262,131,
	0,2048,315,1,0,0,0,2049,2054,3,308,154,0,2050,2051,5,381,0,0,2051,2053,
	3,308,154,0,2052,2050,1,0,0,0,2053,2056,1,0,0,0,2054,2055,1,0,0,0,2054,
	2052,1,0,0,0,2055,317,1,0,0,0,2056,2054,1,0,0,0,2057,2058,5,369,0,0,2058,
	2059,3,324,162,0,2059,319,1,0,0,0,2060,2061,5,59,0,0,2061,2062,5,298,0,
	0,2062,2063,5,245,0,0,2063,321,1,0,0,0,2064,2065,5,59,0,0,2065,2066,5,245,
	0,0,2066,323,1,0,0,0,2067,2068,5,384,0,0,2068,2073,3,326,163,0,2069,2070,
	5,388,0,0,2070,2072,3,326,163,0,2071,2069,1,0,0,0,2072,2075,1,0,0,0,2073,
	2071,1,0,0,0,2073,2074,1,0,0,0,2074,2076,1,0,0,0,2075,2073,1,0,0,0,2076,
	2077,5,385,0,0,2077,325,1,0,0,0,2078,2083,3,328,164,0,2079,2081,5,373,0,
	0,2080,2079,1,0,0,0,2080,2081,1,0,0,0,2081,2082,1,0,0,0,2082,2084,3,330,
	165,0,2083,2080,1,0,0,0,2083,2084,1,0,0,0,2084,327,1,0,0,0,2085,2089,3,
	308,154,0,2086,2089,3,278,139,0,2087,2089,5,405,0,0,2088,2085,1,0,0,0,2088,
	2086,1,0,0,0,2088,2087,1,0,0,0,2089,329,1,0,0,0,2090,2095,5,406,0,0,2091,
	2095,5,407,0,0,2092,2095,3,350,175,0,2093,2095,5,405,0,0,2094,2090,1,0,
	0,0,2094,2091,1,0,0,0,2094,2092,1,0,0,0,2094,2093,1,0,0,0,2095,331,1,0,
	0,0,2096,2103,5,181,0,0,2097,2098,5,379,0,0,2098,2103,5,379,0,0,2099,2103,
	5,305,0,0,2100,2101,5,378,0,0,2101,2103,5,378,0,0,2102,2096,1,0,0,0,2102,
	2097,1,0,0,0,2102,2099,1,0,0,0,2102,2100,1,0,0,0,2103,333,1,0,0,0,2104,
	2119,5,373,0,0,2105,2119,5,374,0,0,2106,2119,5,375,0,0,2107,2108,5,375,
	0,0,2108,2119,5,373,0,0,2109,2110,5,374,0,0,2110,2119,5,373,0,0,2111,2112,
	5,375,0,0,2112,2119,5,374,0,0,2113,2114,5,376,0,0,2114,2119,5,373,0,0,2115,
	2116,5,375,0,0,2116,2117,5,373,0,0,2117,2119,5,374,0,0,2118,2104,1,0,0,
	0,2118,2105,1,0,0,0,2118,2106,1,0,0,0,2118,2107,1,0,0,0,2118,2109,1,0,0,
	0,2118,2111,1,0,0,0,2118,2113,1,0,0,0,2118,2115,1,0,0,0,2119,335,1,0,0,
	0,2120,2121,5,375,0,0,2121,2128,5,375,0,0,2122,2123,5,374,0,0,2123,2128,
	5,374,0,0,2124,2128,5,379,0,0,2125,2128,5,380,0,0,2126,2128,5,378,0,0,2127,
	2120,1,0,0,0,2127,2122,1,0,0,0,2127,2124,1,0,0,0,2127,2125,1,0,0,0,2127,
	2126,1,0,0,0,2128,337,1,0,0,0,2129,2130,7,37,0,0,2130,339,1,0,0,0,2131,
	2132,7,38,0,0,2132,341,1,0,0,0,2133,2148,3,284,142,0,2134,2148,3,344,172,
	0,2135,2148,3,346,173,0,2136,2138,5,397,0,0,2137,2136,1,0,0,0,2137,2138,
	1,0,0,0,2138,2139,1,0,0,0,2139,2148,3,348,174,0,2140,2148,3,350,175,0,2141,
	2148,5,407,0,0,2142,2148,5,408,0,0,2143,2145,5,298,0,0,2144,2143,1,0,0,
	0,2144,2145,1,0,0,0,2145,2146,1,0,0,0,2146,2148,5,299,0,0,2147,2133,1,0,
	0,0,2147,2134,1,0,0,0,2147,2135,1,0,0,0,2147,2137,1,0,0,0,2147,2140,1,0,
	0,0,2147,2141,1,0,0,0,2147,2142,1,0,0,0,2147,2144,1,0,0,0,2148,343,1,0,
	0,0,2149,2150,3,354,177,0,2150,2151,3,346,173,0,2151,345,1,0,0,0,2152,2153,
	5,405,0,0,2153,347,1,0,0,0,2154,2155,5,406,0,0,2155,349,1,0,0,0,2156,2157,
	7,39,0,0,2157,351,1,0,0,0,2158,2159,7,40,0,0,2159,353,1,0,0,0,2160,2161,
	7,41,0,0,2161,355,1,0,0,0,2162,2163,7,42,0,0,2163,357,1,0,0,0,2164,2165,
	7,43,0,0,2165,359,1,0,0,0,2166,2167,7,44,0,0,2167,361,1,0,0,0,2168,2169,
	7,45,0,0,2169,363,1,0,0,0,2170,2171,7,46,0,0,2171,365,1,0,0,0,250,374,377,
	379,394,412,416,425,430,437,444,448,457,469,472,479,487,492,495,502,510,
	514,526,534,538,560,565,569,573,577,586,591,595,599,603,606,610,615,621,
	626,631,634,638,646,654,658,662,666,670,674,678,682,686,688,698,706,730,
	737,743,746,749,759,762,770,782,806,819,824,828,836,840,848,858,862,868,
	872,876,879,888,892,899,902,912,920,928,932,947,966,977,981,988,993,999,
	1003,1010,1014,1018,1022,1030,1034,1039,1045,1051,1054,1058,1069,1078,1092,
	1104,1119,1122,1126,1129,1131,1136,1140,1143,1147,1156,1165,1175,1180,1192,
	1195,1198,1201,1207,1211,1219,1222,1227,1230,1232,1246,1257,1262,1270,1273,
	1276,1281,1283,1285,1290,1293,1297,1300,1303,1315,1322,1333,1362,1384,1402,
	1407,1419,1432,1444,1456,1461,1488,1496,1500,1503,1506,1513,1516,1519,1522,
	1525,1528,1533,1536,1545,1550,1554,1559,1568,1587,1595,1603,1607,1611,1621,
	1647,1655,1667,1689,1691,1702,1705,1707,1711,1715,1722,1731,1737,1750,1757,
	1762,1768,1775,1777,1780,1792,1797,1800,1806,1808,1814,1837,1839,1847,1851,
	1860,1864,1880,1889,1913,1920,1923,1933,1942,1948,1954,1962,1967,1971,1978,
	1983,1991,1995,1998,2002,2005,2009,2018,2021,2032,2038,2054,2073,2080,2083,
	2088,2094,2102,2118,2127,2137,2144,2147];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FlinkSqlParser.__ATN) {
			FlinkSqlParser.__ATN = new ATNDeserializer().deserialize(FlinkSqlParser._serializedATN);
		}

		return FlinkSqlParser.__ATN;
	}


	static DecisionsToDFA = FlinkSqlParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(FlinkSqlParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_program;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitProgram) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sqlStatements(): SqlStatementsContext {
		return this.getTypedRuleContext(SqlStatementsContext, 0) as SqlStatementsContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(FlinkSqlParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_statement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitStatement) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sqlStatement_list(): SqlStatementContext[] {
		return this.getTypedRuleContexts(SqlStatementContext) as SqlStatementContext[];
	}
	public sqlStatement(i: number): SqlStatementContext {
		return this.getTypedRuleContext(SqlStatementContext, i) as SqlStatementContext;
	}
	public emptyStatement_list(): EmptyStatementContext[] {
		return this.getTypedRuleContexts(EmptyStatementContext) as EmptyStatementContext[];
	}
	public emptyStatement(i: number): EmptyStatementContext {
		return this.getTypedRuleContext(EmptyStatementContext, i) as EmptyStatementContext;
	}
	public SEMICOLON_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.SEMICOLON);
	}
	public SEMICOLON(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.SEMICOLON, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_sqlStatements;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSqlStatements) {
	 		listener.enterSqlStatements(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSqlStatements) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ddlStatement(): DdlStatementContext {
		return this.getTypedRuleContext(DdlStatementContext, 0) as DdlStatementContext;
	}
	public dmlStatement(): DmlStatementContext {
		return this.getTypedRuleContext(DmlStatementContext, 0) as DmlStatementContext;
	}
	public describeStatement(): DescribeStatementContext {
		return this.getTypedRuleContext(DescribeStatementContext, 0) as DescribeStatementContext;
	}
	public explainStatement(): ExplainStatementContext {
		return this.getTypedRuleContext(ExplainStatementContext, 0) as ExplainStatementContext;
	}
	public useStatement(): UseStatementContext {
		return this.getTypedRuleContext(UseStatementContext, 0) as UseStatementContext;
	}
	public showStatememt(): ShowStatememtContext {
		return this.getTypedRuleContext(ShowStatememtContext, 0) as ShowStatememtContext;
	}
	public loadStatement(): LoadStatementContext {
		return this.getTypedRuleContext(LoadStatementContext, 0) as LoadStatementContext;
	}
	public unloadStatememt(): UnloadStatememtContext {
		return this.getTypedRuleContext(UnloadStatememtContext, 0) as UnloadStatememtContext;
	}
	public setStatememt(): SetStatememtContext {
		return this.getTypedRuleContext(SetStatememtContext, 0) as SetStatememtContext;
	}
	public resetStatememt(): ResetStatememtContext {
		return this.getTypedRuleContext(ResetStatememtContext, 0) as ResetStatememtContext;
	}
	public jarStatememt(): JarStatememtContext {
		return this.getTypedRuleContext(JarStatememtContext, 0) as JarStatememtContext;
	}
	public dtAddStatement(): DtAddStatementContext {
		return this.getTypedRuleContext(DtAddStatementContext, 0) as DtAddStatementContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_sqlStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSqlStatement) {
	 		listener.enterSqlStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSqlStatement) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(FlinkSqlParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_emptyStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterEmptyStatement) {
	 		listener.enterEmptyStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitEmptyStatement) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public createTable(): CreateTableContext {
		return this.getTypedRuleContext(CreateTableContext, 0) as CreateTableContext;
	}
	public createDatabase(): CreateDatabaseContext {
		return this.getTypedRuleContext(CreateDatabaseContext, 0) as CreateDatabaseContext;
	}
	public createView(): CreateViewContext {
		return this.getTypedRuleContext(CreateViewContext, 0) as CreateViewContext;
	}
	public createFunction(): CreateFunctionContext {
		return this.getTypedRuleContext(CreateFunctionContext, 0) as CreateFunctionContext;
	}
	public createCatalog(): CreateCatalogContext {
		return this.getTypedRuleContext(CreateCatalogContext, 0) as CreateCatalogContext;
	}
	public alterTable(): AlterTableContext {
		return this.getTypedRuleContext(AlterTableContext, 0) as AlterTableContext;
	}
	public alertView(): AlertViewContext {
		return this.getTypedRuleContext(AlertViewContext, 0) as AlertViewContext;
	}
	public alterDatabase(): AlterDatabaseContext {
		return this.getTypedRuleContext(AlterDatabaseContext, 0) as AlterDatabaseContext;
	}
	public alterFunction(): AlterFunctionContext {
		return this.getTypedRuleContext(AlterFunctionContext, 0) as AlterFunctionContext;
	}
	public dropCatalog(): DropCatalogContext {
		return this.getTypedRuleContext(DropCatalogContext, 0) as DropCatalogContext;
	}
	public dropTable(): DropTableContext {
		return this.getTypedRuleContext(DropTableContext, 0) as DropTableContext;
	}
	public dropDatabase(): DropDatabaseContext {
		return this.getTypedRuleContext(DropDatabaseContext, 0) as DropDatabaseContext;
	}
	public dropView(): DropViewContext {
		return this.getTypedRuleContext(DropViewContext, 0) as DropViewContext;
	}
	public dropFunction(): DropFunctionContext {
		return this.getTypedRuleContext(DropFunctionContext, 0) as DropFunctionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_ddlStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDdlStatement) {
	 		listener.enterDdlStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDdlStatement) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
	public insertStatement(): InsertStatementContext {
		return this.getTypedRuleContext(InsertStatementContext, 0) as InsertStatementContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dmlStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDmlStatement) {
	 		listener.enterDmlStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDmlStatement) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public KW_DESCRIBE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DESCRIBE, 0);
	}
	public KW_DESC(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DESC, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_describeStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDescribeStatement) {
	 		listener.enterDescribeStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDescribeStatement) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_EXPLAIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EXPLAIN, 0);
	}
	public dmlStatement(): DmlStatementContext {
		return this.getTypedRuleContext(DmlStatementContext, 0) as DmlStatementContext;
	}
	public insertSimpleStatement(): InsertSimpleStatementContext {
		return this.getTypedRuleContext(InsertSimpleStatementContext, 0) as InsertSimpleStatementContext;
	}
	public insertMulStatement(): InsertMulStatementContext {
		return this.getTypedRuleContext(InsertMulStatementContext, 0) as InsertMulStatementContext;
	}
	public explainDetails(): ExplainDetailsContext {
		return this.getTypedRuleContext(ExplainDetailsContext, 0) as ExplainDetailsContext;
	}
	public KW_PLAN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PLAN, 0);
	}
	public KW_FOR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FOR, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_explainStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterExplainStatement) {
	 		listener.enterExplainStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitExplainStatement) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public explainDetail_list(): ExplainDetailContext[] {
		return this.getTypedRuleContexts(ExplainDetailContext) as ExplainDetailContext[];
	}
	public explainDetail(i: number): ExplainDetailContext {
		return this.getTypedRuleContext(ExplainDetailContext, i) as ExplainDetailContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_explainDetails;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterExplainDetails) {
	 		listener.enterExplainDetails(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitExplainDetails) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_CHANGELOG_MODE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CHANGELOG_MODE, 0);
	}
	public KW_JSON_EXECUTION_PLAN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_JSON_EXECUTION_PLAN, 0);
	}
	public KW_ESTIMATED_COST(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ESTIMATED_COST, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_explainDetail;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterExplainDetail) {
	 		listener.enterExplainDetail(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitExplainDetail) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_USE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_USE, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public KW_CATALOG(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CATALOG, 0);
	}
	public useModuleStatement(): UseModuleStatementContext {
		return this.getTypedRuleContext(UseModuleStatementContext, 0) as UseModuleStatementContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_useStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterUseStatement) {
	 		listener.enterUseStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitUseStatement) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_USE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_USE, 0);
	}
	public KW_MODULES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MODULES, 0);
	}
	public uid_list(): UidContext[] {
		return this.getTypedRuleContexts(UidContext) as UidContext[];
	}
	public uid(i: number): UidContext {
		return this.getTypedRuleContext(UidContext, i) as UidContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_useModuleStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterUseModuleStatement) {
	 		listener.enterUseModuleStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitUseModuleStatement) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_SHOW(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SHOW, 0);
	}
	public KW_CATALOGS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CATALOGS, 0);
	}
	public KW_DATABASES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DATABASES, 0);
	}
	public KW_VIEWS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_VIEWS, 0);
	}
	public KW_JARS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_JARS, 0);
	}
	public KW_CURRENT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CURRENT, 0);
	}
	public KW_CATALOG(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CATALOG, 0);
	}
	public KW_DATABASE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DATABASE, 0);
	}
	public KW_TABLES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TABLES, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public likePredicate(): LikePredicateContext {
		return this.getTypedRuleContext(LikePredicateContext, 0) as LikePredicateContext;
	}
	public KW_FROM(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FROM, 0);
	}
	public KW_IN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_IN, 0);
	}
	public KW_COLUMNS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_COLUMNS, 0);
	}
	public KW_CREATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CREATE, 0);
	}
	public KW_TABLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TABLE, 0);
	}
	public KW_VIEW(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_VIEW, 0);
	}
	public KW_FUNCTIONS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FUNCTIONS, 0);
	}
	public KW_USER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_USER, 0);
	}
	public KW_MODULES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MODULES, 0);
	}
	public KW_FULL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FULL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_showStatememt;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterShowStatememt) {
	 		listener.enterShowStatememt(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitShowStatememt) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_LOAD(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LOAD, 0);
	}
	public KW_MODULE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MODULE, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public KW_WITH(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WITH, 0);
	}
	public tablePropertyList(): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, 0) as TablePropertyListContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_loadStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLoadStatement) {
	 		listener.enterLoadStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLoadStatement) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_UNLOAD(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_UNLOAD, 0);
	}
	public KW_MODULE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MODULE, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_unloadStatememt;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterUnloadStatememt) {
	 		listener.enterUnloadStatememt(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitUnloadStatememt) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_SET(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SET, 0);
	}
	public tableProperty(): TablePropertyContext {
		return this.getTypedRuleContext(TablePropertyContext, 0) as TablePropertyContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_setStatememt;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSetStatememt) {
	 		listener.enterSetStatememt(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSetStatememt) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_RESET(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RESET, 0);
	}
	public tablePropertyKey(): TablePropertyKeyContext {
		return this.getTypedRuleContext(TablePropertyKeyContext, 0) as TablePropertyKeyContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_resetStatememt;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterResetStatememt) {
	 		listener.enterResetStatememt(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitResetStatememt) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_JAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_JAR, 0);
	}
	public jarFileName(): JarFileNameContext {
		return this.getTypedRuleContext(JarFileNameContext, 0) as JarFileNameContext;
	}
	public KW_ADD(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ADD, 0);
	}
	public KW_REMOVE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_REMOVE, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_jarStatememt;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterJarStatememt) {
	 		listener.enterJarStatememt(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitJarStatememt) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_ADD(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ADD, 0);
	}
	public KW_JAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_JAR, 0);
	}
	public KW_WITH(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WITH, 0);
	}
	public dtFilePath(): DtFilePathContext {
		return this.getTypedRuleContext(DtFilePathContext, 0) as DtFilePathContext;
	}
	public KW_AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AS, 0);
	}
	public uid_list(): UidContext[] {
		return this.getTypedRuleContexts(UidContext) as UidContext[];
	}
	public uid(i: number): UidContext {
		return this.getTypedRuleContext(UidContext, i) as UidContext;
	}
	public KW_FILE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FILE, 0);
	}
	public KW_RENAME(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RENAME, 0);
	}
	public KW_PYTHON_FILES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PYTHON_FILES, 0);
	}
	public KW_PYTHON_REQUIREMENTS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PYTHON_REQUIREMENTS, 0);
	}
	public KW_PYTHON_DEPENDENCIES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PYTHON_DEPENDENCIES, 0);
	}
	public KW_PYTHON_JAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PYTHON_JAR, 0);
	}
	public KW_PYTHON_ARCHIVES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PYTHON_ARCHIVES, 0);
	}
	public KW_PYTHON_PARAMETER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PYTHON_PARAMETER, 0);
	}
	public KW_ENGINE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ENGINE, 0);
	}
	public KW_KEY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_KEY, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dtAddStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDtAddStatement) {
	 		listener.enterDtAddStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDtAddStatement) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SLASH_TEXT_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.SLASH_TEXT);
	}
	public SLASH_TEXT(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.SLASH_TEXT, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dtFilePath;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDtFilePath) {
	 		listener.enterDtFilePath(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDtFilePath) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simpleCreateTable(): SimpleCreateTableContext {
		return this.getTypedRuleContext(SimpleCreateTableContext, 0) as SimpleCreateTableContext;
	}
	public createTableAsSelect(): CreateTableAsSelectContext {
		return this.getTypedRuleContext(CreateTableAsSelectContext, 0) as CreateTableAsSelectContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_createTable;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterCreateTable) {
	 		listener.enterCreateTable(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitCreateTable) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_CREATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CREATE, 0);
	}
	public KW_TABLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TABLE, 0);
	}
	public sourceTable(): SourceTableContext {
		return this.getTypedRuleContext(SourceTableContext, 0) as SourceTableContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public columnOptionDefinition_list(): ColumnOptionDefinitionContext[] {
		return this.getTypedRuleContexts(ColumnOptionDefinitionContext) as ColumnOptionDefinitionContext[];
	}
	public columnOptionDefinition(i: number): ColumnOptionDefinitionContext {
		return this.getTypedRuleContext(ColumnOptionDefinitionContext, i) as ColumnOptionDefinitionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public withOption(): WithOptionContext {
		return this.getTypedRuleContext(WithOptionContext, 0) as WithOptionContext;
	}
	public KW_TEMPORARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
	}
	public ifNotExists(): IfNotExistsContext {
		return this.getTypedRuleContext(IfNotExistsContext, 0) as IfNotExistsContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
	public watermarkDefinition(): WatermarkDefinitionContext {
		return this.getTypedRuleContext(WatermarkDefinitionContext, 0) as WatermarkDefinitionContext;
	}
	public tableConstraint(): TableConstraintContext {
		return this.getTypedRuleContext(TableConstraintContext, 0) as TableConstraintContext;
	}
	public selfDefinitionClause(): SelfDefinitionClauseContext {
		return this.getTypedRuleContext(SelfDefinitionClauseContext, 0) as SelfDefinitionClauseContext;
	}
	public commentSpec(): CommentSpecContext {
		return this.getTypedRuleContext(CommentSpecContext, 0) as CommentSpecContext;
	}
	public partitionDefinition(): PartitionDefinitionContext {
		return this.getTypedRuleContext(PartitionDefinitionContext, 0) as PartitionDefinitionContext;
	}
	public likeDefinition(): LikeDefinitionContext {
		return this.getTypedRuleContext(LikeDefinitionContext, 0) as LikeDefinitionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_simpleCreateTable;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSimpleCreateTable) {
	 		listener.enterSimpleCreateTable(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSimpleCreateTable) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_CREATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CREATE, 0);
	}
	public KW_TABLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TABLE, 0);
	}
	public sourceTable(): SourceTableContext {
		return this.getTypedRuleContext(SourceTableContext, 0) as SourceTableContext;
	}
	public withOption(): WithOptionContext {
		return this.getTypedRuleContext(WithOptionContext, 0) as WithOptionContext;
	}
	public ifNotExists(): IfNotExistsContext {
		return this.getTypedRuleContext(IfNotExistsContext, 0) as IfNotExistsContext;
	}
	public KW_AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AS, 0);
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_createTableAsSelect;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterCreateTableAsSelect) {
	 		listener.enterCreateTableAsSelect(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitCreateTableAsSelect) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public physicalColumnDefinition(): PhysicalColumnDefinitionContext {
		return this.getTypedRuleContext(PhysicalColumnDefinitionContext, 0) as PhysicalColumnDefinitionContext;
	}
	public metadataColumnDefinition(): MetadataColumnDefinitionContext {
		return this.getTypedRuleContext(MetadataColumnDefinitionContext, 0) as MetadataColumnDefinitionContext;
	}
	public computedColumnDefinition(): ComputedColumnDefinitionContext {
		return this.getTypedRuleContext(ComputedColumnDefinitionContext, 0) as ComputedColumnDefinitionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_columnOptionDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterColumnOptionDefinition) {
	 		listener.enterColumnOptionDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitColumnOptionDefinition) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public columnName(): ColumnNameContext {
		return this.getTypedRuleContext(ColumnNameContext, 0) as ColumnNameContext;
	}
	public columnType(): ColumnTypeContext {
		return this.getTypedRuleContext(ColumnTypeContext, 0) as ColumnTypeContext;
	}
	public columnConstraint(): ColumnConstraintContext {
		return this.getTypedRuleContext(ColumnConstraintContext, 0) as ColumnConstraintContext;
	}
	public commentSpec(): CommentSpecContext {
		return this.getTypedRuleContext(CommentSpecContext, 0) as CommentSpecContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_physicalColumnDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterPhysicalColumnDefinition) {
	 		listener.enterPhysicalColumnDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitPhysicalColumnDefinition) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_columnName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterColumnName) {
	 		listener.enterColumnName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitColumnName) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public columnName_list(): ColumnNameContext[] {
		return this.getTypedRuleContexts(ColumnNameContext) as ColumnNameContext[];
	}
	public columnName(i: number): ColumnNameContext {
		return this.getTypedRuleContext(ColumnNameContext, i) as ColumnNameContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_columnNameList;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterColumnNameList) {
	 		listener.enterColumnNameList(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitColumnNameList) {
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
	public _type_!: Token;
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_DATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DATE, 0);
	}
	public KW_BOOLEAN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BOOLEAN, 0);
	}
	public KW_NULL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NULL, 0);
	}
	public KW_CHAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CHAR, 0);
	}
	public KW_VARCHAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_VARCHAR, 0);
	}
	public KW_STRING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_STRING, 0);
	}
	public KW_BINARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BINARY, 0);
	}
	public KW_VARBINARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_VARBINARY, 0);
	}
	public KW_BYTES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BYTES, 0);
	}
	public KW_TINYINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TINYINT, 0);
	}
	public KW_SMALLINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SMALLINT, 0);
	}
	public KW_INT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INT, 0);
	}
	public KW_INTEGER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INTEGER, 0);
	}
	public KW_BIGINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BIGINT, 0);
	}
	public KW_TIME(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TIME, 0);
	}
	public KW_TIMESTAMP_LTZ(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TIMESTAMP_LTZ, 0);
	}
	public KW_DATETIME(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DATETIME, 0);
	}
	public lengthOneDimension(): LengthOneDimensionContext {
		return this.getTypedRuleContext(LengthOneDimensionContext, 0) as LengthOneDimensionContext;
	}
	public KW_TIMESTAMP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TIMESTAMP, 0);
	}
	public KW_ZONE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ZONE, 0);
	}
	public KW_WITHOUT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WITHOUT, 0);
	}
	public KW_WITH(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WITH, 0);
	}
	public KW_LOCAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LOCAL, 0);
	}
	public KW_DECIMAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DECIMAL, 0);
	}
	public KW_DEC(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DEC, 0);
	}
	public KW_NUMERIC(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NUMERIC, 0);
	}
	public KW_FLOAT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FLOAT, 0);
	}
	public KW_DOUBLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DOUBLE, 0);
	}
	public lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext {
		return this.getTypedRuleContext(LengthTwoOptionalDimensionContext, 0) as LengthTwoOptionalDimensionContext;
	}
	public KW_ARRAY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ARRAY, 0);
	}
	public KW_MULTISET(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MULTISET, 0);
	}
	public lengthOneTypeDimension(): LengthOneTypeDimensionContext {
		return this.getTypedRuleContext(LengthOneTypeDimensionContext, 0) as LengthOneTypeDimensionContext;
	}
	public KW_MAP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MAP, 0);
	}
	public mapTypeDimension(): MapTypeDimensionContext {
		return this.getTypedRuleContext(MapTypeDimensionContext, 0) as MapTypeDimensionContext;
	}
	public KW_ROW(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ROW, 0);
	}
	public rowTypeDimension(): RowTypeDimensionContext {
		return this.getTypedRuleContext(RowTypeDimensionContext, 0) as RowTypeDimensionContext;
	}
	public KW_RAW(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RAW, 0);
	}
	public lengthTwoStringDimension(): LengthTwoStringDimensionContext {
		return this.getTypedRuleContext(LengthTwoStringDimensionContext, 0) as LengthTwoStringDimensionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_columnType;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterColumnType) {
	 		listener.enterColumnType(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitColumnType) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public decimalLiteral(): DecimalLiteralContext {
		return this.getTypedRuleContext(DecimalLiteralContext, 0) as DecimalLiteralContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_lengthOneDimension;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLengthOneDimension) {
	 		listener.enterLengthOneDimension(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLengthOneDimension) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public decimalLiteral_list(): DecimalLiteralContext[] {
		return this.getTypedRuleContexts(DecimalLiteralContext) as DecimalLiteralContext[];
	}
	public decimalLiteral(i: number): DecimalLiteralContext {
		return this.getTypedRuleContext(DecimalLiteralContext, i) as DecimalLiteralContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_lengthTwoOptionalDimension;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLengthTwoOptionalDimension) {
	 		listener.enterLengthTwoOptionalDimension(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLengthTwoOptionalDimension) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public stringLiteral_list(): StringLiteralContext[] {
		return this.getTypedRuleContexts(StringLiteralContext) as StringLiteralContext[];
	}
	public stringLiteral(i: number): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, i) as StringLiteralContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_lengthTwoStringDimension;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLengthTwoStringDimension) {
	 		listener.enterLengthTwoStringDimension(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLengthTwoStringDimension) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LESS_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0);
	}
	public columnType(): ColumnTypeContext {
		return this.getTypedRuleContext(ColumnTypeContext, 0) as ColumnTypeContext;
	}
	public GREATER_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_lengthOneTypeDimension;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLengthOneTypeDimension) {
	 		listener.enterLengthOneTypeDimension(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLengthOneTypeDimension) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LESS_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0);
	}
	public columnType_list(): ColumnTypeContext[] {
		return this.getTypedRuleContexts(ColumnTypeContext) as ColumnTypeContext[];
	}
	public columnType(i: number): ColumnTypeContext {
		return this.getTypedRuleContext(ColumnTypeContext, i) as ColumnTypeContext;
	}
	public GREATER_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_mapTypeDimension;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterMapTypeDimension) {
	 		listener.enterMapTypeDimension(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitMapTypeDimension) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LESS_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0);
	}
	public columnName_list(): ColumnNameContext[] {
		return this.getTypedRuleContexts(ColumnNameContext) as ColumnNameContext[];
	}
	public columnName(i: number): ColumnNameContext {
		return this.getTypedRuleContext(ColumnNameContext, i) as ColumnNameContext;
	}
	public columnType_list(): ColumnTypeContext[] {
		return this.getTypedRuleContexts(ColumnTypeContext) as ColumnTypeContext[];
	}
	public columnType(i: number): ColumnTypeContext {
		return this.getTypedRuleContext(ColumnTypeContext, i) as ColumnTypeContext;
	}
	public GREATER_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_rowTypeDimension;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterRowTypeDimension) {
	 		listener.enterRowTypeDimension(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitRowTypeDimension) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_PRIMARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PRIMARY, 0);
	}
	public KW_KEY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_KEY, 0);
	}
	public KW_CONSTRAINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0);
	}
	public constraintName(): ConstraintNameContext {
		return this.getTypedRuleContext(ConstraintNameContext, 0) as ConstraintNameContext;
	}
	public KW_NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NOT, 0);
	}
	public KW_ENFORCED(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ENFORCED, 0);
	}
	public KW_NULL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NULL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_columnConstraint;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterColumnConstraint) {
	 		listener.enterColumnConstraint(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitColumnConstraint) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_COMMENT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_COMMENT, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_commentSpec;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterCommentSpec) {
	 		listener.enterCommentSpec(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitCommentSpec) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public columnName(): ColumnNameContext {
		return this.getTypedRuleContext(ColumnNameContext, 0) as ColumnNameContext;
	}
	public columnType(): ColumnTypeContext {
		return this.getTypedRuleContext(ColumnTypeContext, 0) as ColumnTypeContext;
	}
	public KW_METADATA(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_METADATA, 0);
	}
	public KW_FROM(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FROM, 0);
	}
	public metadataKey(): MetadataKeyContext {
		return this.getTypedRuleContext(MetadataKeyContext, 0) as MetadataKeyContext;
	}
	public KW_VIRTUAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_VIRTUAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_metadataColumnDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterMetadataColumnDefinition) {
	 		listener.enterMetadataColumnDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitMetadataColumnDefinition) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_metadataKey;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterMetadataKey) {
	 		listener.enterMetadataKey(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitMetadataKey) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public columnName(): ColumnNameContext {
		return this.getTypedRuleContext(ColumnNameContext, 0) as ColumnNameContext;
	}
	public KW_AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AS, 0);
	}
	public computedColumnExpression(): ComputedColumnExpressionContext {
		return this.getTypedRuleContext(ComputedColumnExpressionContext, 0) as ComputedColumnExpressionContext;
	}
	public commentSpec(): CommentSpecContext {
		return this.getTypedRuleContext(CommentSpecContext, 0) as CommentSpecContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_computedColumnDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterComputedColumnDefinition) {
	 		listener.enterComputedColumnDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitComputedColumnDefinition) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_computedColumnExpression;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterComputedColumnExpression) {
	 		listener.enterComputedColumnExpression(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitComputedColumnExpression) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_WATERMARK(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WATERMARK, 0);
	}
	public KW_FOR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FOR, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public KW_AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AS, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_watermarkDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWatermarkDefinition) {
	 		listener.enterWatermarkDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWatermarkDefinition) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_PRIMARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PRIMARY, 0);
	}
	public KW_KEY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_KEY, 0);
	}
	public columnNameList(): ColumnNameListContext {
		return this.getTypedRuleContext(ColumnNameListContext, 0) as ColumnNameListContext;
	}
	public KW_NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NOT, 0);
	}
	public KW_ENFORCED(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ENFORCED, 0);
	}
	public KW_CONSTRAINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0);
	}
	public constraintName(): ConstraintNameContext {
		return this.getTypedRuleContext(ConstraintNameContext, 0) as ConstraintNameContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tableConstraint;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTableConstraint) {
	 		listener.enterTableConstraint(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTableConstraint) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_constraintName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterConstraintName) {
	 		listener.enterConstraintName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitConstraintName) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_PERIOD(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PERIOD, 0);
	}
	public KW_FOR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FOR, 0);
	}
	public KW_SYSTEM_TIME(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SYSTEM_TIME, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_selfDefinitionClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSelfDefinitionClause) {
	 		listener.enterSelfDefinitionClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSelfDefinitionClause) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_PARTITIONED(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PARTITIONED, 0);
	}
	public KW_BY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BY, 0);
	}
	public transformList(): TransformListContext {
		return this.getTypedRuleContext(TransformListContext, 0) as TransformListContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_partitionDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterPartitionDefinition) {
	 		listener.enterPartitionDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitPartitionDefinition) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public transform_list(): TransformContext[] {
		return this.getTypedRuleContexts(TransformContext) as TransformContext[];
	}
	public transform(i: number): TransformContext {
		return this.getTypedRuleContext(TransformContext, i) as TransformContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_transformList;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTransformList) {
	 		listener.enterTransformList(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTransformList) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_transform;
	}
	public copyFrom(ctx: TransformContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentityTransformContext extends TransformContext {
	constructor(parser: FlinkSqlParser, ctx: TransformContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterIdentityTransform) {
	 		listener.enterIdentityTransform(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitIdentityTransform) {
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
	constructor(parser: FlinkSqlParser, ctx: TransformContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public transformArgument_list(): TransformArgumentContext[] {
		return this.getTypedRuleContexts(TransformArgumentContext) as TransformArgumentContext[];
	}
	public transformArgument(i: number): TransformArgumentContext {
		return this.getTypedRuleContext(TransformArgumentContext, i) as TransformArgumentContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterApplyTransform) {
	 		listener.enterApplyTransform(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitApplyTransform) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_transformArgument;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTransformArgument) {
	 		listener.enterTransformArgument(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTransformArgument) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_LIKE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LIKE, 0);
	}
	public sourceTable(): SourceTableContext {
		return this.getTypedRuleContext(SourceTableContext, 0) as SourceTableContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public likeOption_list(): LikeOptionContext[] {
		return this.getTypedRuleContexts(LikeOptionContext) as LikeOptionContext[];
	}
	public likeOption(i: number): LikeOptionContext {
		return this.getTypedRuleContext(LikeOptionContext, i) as LikeOptionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_likeDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLikeDefinition) {
	 		listener.enterLikeDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLikeDefinition) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_sourceTable;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSourceTable) {
	 		listener.enterSourceTable(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSourceTable) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_INCLUDING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INCLUDING, 0);
	}
	public KW_EXCLUDING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EXCLUDING, 0);
	}
	public KW_ALL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ALL, 0);
	}
	public KW_CONSTRAINTS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CONSTRAINTS, 0);
	}
	public KW_PARTITIONS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PARTITIONS, 0);
	}
	public KW_OVERWRITING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OVERWRITING, 0);
	}
	public KW_GENERATED(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_GENERATED, 0);
	}
	public KW_OPTIONS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OPTIONS, 0);
	}
	public KW_WATERMARKS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WATERMARKS, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_likeOption;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLikeOption) {
	 		listener.enterLikeOption(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLikeOption) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_CREATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CREATE, 0);
	}
	public KW_CATALOG(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CATALOG, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public withOption(): WithOptionContext {
		return this.getTypedRuleContext(WithOptionContext, 0) as WithOptionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_createCatalog;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterCreateCatalog) {
	 		listener.enterCreateCatalog(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitCreateCatalog) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_CREATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CREATE, 0);
	}
	public KW_DATABASE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DATABASE, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public withOption(): WithOptionContext {
		return this.getTypedRuleContext(WithOptionContext, 0) as WithOptionContext;
	}
	public ifNotExists(): IfNotExistsContext {
		return this.getTypedRuleContext(IfNotExistsContext, 0) as IfNotExistsContext;
	}
	public commentSpec(): CommentSpecContext {
		return this.getTypedRuleContext(CommentSpecContext, 0) as CommentSpecContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_createDatabase;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterCreateDatabase) {
	 		listener.enterCreateDatabase(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitCreateDatabase) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_CREATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CREATE, 0);
	}
	public KW_VIEW(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_VIEW, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public KW_AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AS, 0);
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
	public KW_TEMPORARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
	}
	public ifNotExists(): IfNotExistsContext {
		return this.getTypedRuleContext(IfNotExistsContext, 0) as IfNotExistsContext;
	}
	public columnNameList(): ColumnNameListContext {
		return this.getTypedRuleContext(ColumnNameListContext, 0) as ColumnNameListContext;
	}
	public commentSpec(): CommentSpecContext {
		return this.getTypedRuleContext(CommentSpecContext, 0) as CommentSpecContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_createView;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterCreateView) {
	 		listener.enterCreateView(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitCreateView) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_CREATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CREATE, 0);
	}
	public KW_FUNCTION(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FUNCTION, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public KW_AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AS, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public KW_TEMPORARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
	}
	public KW_SYSTEM(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SYSTEM, 0);
	}
	public ifNotExists(): IfNotExistsContext {
		return this.getTypedRuleContext(IfNotExistsContext, 0) as IfNotExistsContext;
	}
	public KW_LANGUAGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LANGUAGE, 0);
	}
	public usingClause(): UsingClauseContext {
		return this.getTypedRuleContext(UsingClauseContext, 0) as UsingClauseContext;
	}
	public KW_JAVA(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_JAVA, 0);
	}
	public KW_SCALA(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SCALA, 0);
	}
	public KW_PYTHON(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PYTHON, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_createFunction;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterCreateFunction) {
	 		listener.enterCreateFunction(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitCreateFunction) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_USING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_USING, 0);
	}
	public KW_JAR_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.KW_JAR);
	}
	public KW_JAR(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_JAR, i);
	}
	public jarFileName_list(): JarFileNameContext[] {
		return this.getTypedRuleContexts(JarFileNameContext) as JarFileNameContext[];
	}
	public jarFileName(i: number): JarFileNameContext {
		return this.getTypedRuleContext(JarFileNameContext, i) as JarFileNameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_usingClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterUsingClause) {
	 		listener.enterUsingClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitUsingClause) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_jarFileName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterJarFileName) {
	 		listener.enterJarFileName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitJarFileName) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_ALTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ALTER, 0);
	}
	public KW_TABLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TABLE, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public renameDefinition(): RenameDefinitionContext {
		return this.getTypedRuleContext(RenameDefinitionContext, 0) as RenameDefinitionContext;
	}
	public setKeyValueDefinition(): SetKeyValueDefinitionContext {
		return this.getTypedRuleContext(SetKeyValueDefinitionContext, 0) as SetKeyValueDefinitionContext;
	}
	public addConstraint(): AddConstraintContext {
		return this.getTypedRuleContext(AddConstraintContext, 0) as AddConstraintContext;
	}
	public dropConstraint(): DropConstraintContext {
		return this.getTypedRuleContext(DropConstraintContext, 0) as DropConstraintContext;
	}
	public addUnique(): AddUniqueContext {
		return this.getTypedRuleContext(AddUniqueContext, 0) as AddUniqueContext;
	}
	public ifExists(): IfExistsContext {
		return this.getTypedRuleContext(IfExistsContext, 0) as IfExistsContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_alterTable;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterAlterTable) {
	 		listener.enterAlterTable(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitAlterTable) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_RENAME(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RENAME, 0);
	}
	public KW_TO(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TO, 0);
	}
	public uid_list(): UidContext[] {
		return this.getTypedRuleContexts(UidContext) as UidContext[];
	}
	public uid(i: number): UidContext {
		return this.getTypedRuleContext(UidContext, i) as UidContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_renameDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterRenameDefinition) {
	 		listener.enterRenameDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitRenameDefinition) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_SET(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SET, 0);
	}
	public tablePropertyList(): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, 0) as TablePropertyListContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_setKeyValueDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSetKeyValueDefinition) {
	 		listener.enterSetKeyValueDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSetKeyValueDefinition) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_ADD(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ADD, 0);
	}
	public KW_CONSTRAINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0);
	}
	public constraintName(): ConstraintNameContext {
		return this.getTypedRuleContext(ConstraintNameContext, 0) as ConstraintNameContext;
	}
	public KW_PRIMARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PRIMARY, 0);
	}
	public KW_KEY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_KEY, 0);
	}
	public columnNameList(): ColumnNameListContext {
		return this.getTypedRuleContext(ColumnNameListContext, 0) as ColumnNameListContext;
	}
	public notForced(): NotForcedContext {
		return this.getTypedRuleContext(NotForcedContext, 0) as NotForcedContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_addConstraint;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterAddConstraint) {
	 		listener.enterAddConstraint(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitAddConstraint) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_DROP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DROP, 0);
	}
	public KW_CONSTRAINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0);
	}
	public constraintName(): ConstraintNameContext {
		return this.getTypedRuleContext(ConstraintNameContext, 0) as ConstraintNameContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dropConstraint;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDropConstraint) {
	 		listener.enterDropConstraint(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDropConstraint) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_ADD(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ADD, 0);
	}
	public KW_UNIQUE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_UNIQUE, 0);
	}
	public columnNameList(): ColumnNameListContext {
		return this.getTypedRuleContext(ColumnNameListContext, 0) as ColumnNameListContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_addUnique;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterAddUnique) {
	 		listener.enterAddUnique(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitAddUnique) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NOT, 0);
	}
	public KW_ENFORCED(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ENFORCED, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_notForced;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterNotForced) {
	 		listener.enterNotForced(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitNotForced) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_ALTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ALTER, 0);
	}
	public KW_VIEW(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_VIEW, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public renameDefinition(): RenameDefinitionContext {
		return this.getTypedRuleContext(RenameDefinitionContext, 0) as RenameDefinitionContext;
	}
	public KW_AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AS, 0);
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_alertView;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterAlertView) {
	 		listener.enterAlertView(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitAlertView) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_ALTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ALTER, 0);
	}
	public KW_DATABASE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DATABASE, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public setKeyValueDefinition(): SetKeyValueDefinitionContext {
		return this.getTypedRuleContext(SetKeyValueDefinitionContext, 0) as SetKeyValueDefinitionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_alterDatabase;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterAlterDatabase) {
	 		listener.enterAlterDatabase(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitAlterDatabase) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_ALTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ALTER, 0);
	}
	public KW_FUNCTION(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FUNCTION, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public KW_AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AS, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public KW_TEMPORARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
	}
	public KW_SYSTEM(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SYSTEM, 0);
	}
	public ifExists(): IfExistsContext {
		return this.getTypedRuleContext(IfExistsContext, 0) as IfExistsContext;
	}
	public KW_LANGUAGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LANGUAGE, 0);
	}
	public KW_JAVA(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_JAVA, 0);
	}
	public KW_SCALA(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SCALA, 0);
	}
	public KW_PYTHON(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PYTHON, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_alterFunction;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterAlterFunction) {
	 		listener.enterAlterFunction(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitAlterFunction) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_DROP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DROP, 0);
	}
	public KW_CATALOG(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CATALOG, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public ifExists(): IfExistsContext {
		return this.getTypedRuleContext(IfExistsContext, 0) as IfExistsContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dropCatalog;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDropCatalog) {
	 		listener.enterDropCatalog(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDropCatalog) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_DROP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DROP, 0);
	}
	public KW_TABLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TABLE, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public KW_TEMPORARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
	}
	public ifExists(): IfExistsContext {
		return this.getTypedRuleContext(IfExistsContext, 0) as IfExistsContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dropTable;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDropTable) {
	 		listener.enterDropTable(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDropTable) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_DROP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DROP, 0);
	}
	public KW_DATABASE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DATABASE, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public ifExists(): IfExistsContext {
		return this.getTypedRuleContext(IfExistsContext, 0) as IfExistsContext;
	}
	public KW_RESTRICT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RESTRICT, 0);
	}
	public KW_CASCADE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CASCADE, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dropDatabase;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDropDatabase) {
	 		listener.enterDropDatabase(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDropDatabase) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_DROP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DROP, 0);
	}
	public KW_VIEW(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_VIEW, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public KW_TEMPORARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
	}
	public ifExists(): IfExistsContext {
		return this.getTypedRuleContext(IfExistsContext, 0) as IfExistsContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dropView;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDropView) {
	 		listener.enterDropView(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDropView) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_DROP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DROP, 0);
	}
	public KW_FUNCTION(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FUNCTION, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public KW_TEMPORARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
	}
	public KW_SYSTEM(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SYSTEM, 0);
	}
	public ifExists(): IfExistsContext {
		return this.getTypedRuleContext(IfExistsContext, 0) as IfExistsContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dropFunction;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDropFunction) {
	 		listener.enterDropFunction(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDropFunction) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public insertSimpleStatement(): InsertSimpleStatementContext {
		return this.getTypedRuleContext(InsertSimpleStatementContext, 0) as InsertSimpleStatementContext;
	}
	public KW_EXECUTE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EXECUTE, 0);
	}
	public insertMulStatementCompatibility(): InsertMulStatementCompatibilityContext {
		return this.getTypedRuleContext(InsertMulStatementCompatibilityContext, 0) as InsertMulStatementCompatibilityContext;
	}
	public insertMulStatement(): InsertMulStatementContext {
		return this.getTypedRuleContext(InsertMulStatementContext, 0) as InsertMulStatementContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_insertStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterInsertStatement) {
	 		listener.enterInsertStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitInsertStatement) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_INSERT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INSERT, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public KW_INTO(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INTO, 0);
	}
	public KW_OVERWRITE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OVERWRITE, 0);
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
	public valuesDefinition(): ValuesDefinitionContext {
		return this.getTypedRuleContext(ValuesDefinitionContext, 0) as ValuesDefinitionContext;
	}
	public insertPartitionDefinition(): InsertPartitionDefinitionContext {
		return this.getTypedRuleContext(InsertPartitionDefinitionContext, 0) as InsertPartitionDefinitionContext;
	}
	public columnNameList(): ColumnNameListContext {
		return this.getTypedRuleContext(ColumnNameListContext, 0) as ColumnNameListContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_insertSimpleStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterInsertSimpleStatement) {
	 		listener.enterInsertSimpleStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitInsertSimpleStatement) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_PARTITION(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PARTITION, 0);
	}
	public tablePropertyList(): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, 0) as TablePropertyListContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_insertPartitionDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterInsertPartitionDefinition) {
	 		listener.enterInsertPartitionDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitInsertPartitionDefinition) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_VALUES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_VALUES, 0);
	}
	public valuesRowDefinition_list(): ValuesRowDefinitionContext[] {
		return this.getTypedRuleContexts(ValuesRowDefinitionContext) as ValuesRowDefinitionContext[];
	}
	public valuesRowDefinition(i: number): ValuesRowDefinitionContext {
		return this.getTypedRuleContext(ValuesRowDefinitionContext, i) as ValuesRowDefinitionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_valuesDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterValuesDefinition) {
	 		listener.enterValuesDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitValuesDefinition) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public constant_list(): ConstantContext[] {
		return this.getTypedRuleContexts(ConstantContext) as ConstantContext[];
	}
	public constant(i: number): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, i) as ConstantContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_valuesRowDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterValuesRowDefinition) {
	 		listener.enterValuesRowDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitValuesRowDefinition) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_BEGIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BEGIN, 0);
	}
	public KW_STATEMENT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_STATEMENT, 0);
	}
	public KW_SET(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SET, 0);
	}
	public SEMICOLON_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.SEMICOLON);
	}
	public SEMICOLON(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.SEMICOLON, i);
	}
	public KW_END(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_END, 0);
	}
	public insertSimpleStatement_list(): InsertSimpleStatementContext[] {
		return this.getTypedRuleContexts(InsertSimpleStatementContext) as InsertSimpleStatementContext[];
	}
	public insertSimpleStatement(i: number): InsertSimpleStatementContext {
		return this.getTypedRuleContext(InsertSimpleStatementContext, i) as InsertSimpleStatementContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_insertMulStatementCompatibility;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterInsertMulStatementCompatibility) {
	 		listener.enterInsertMulStatementCompatibility(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitInsertMulStatementCompatibility) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_STATEMENT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_STATEMENT, 0);
	}
	public KW_SET(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SET, 0);
	}
	public KW_BEGIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BEGIN, 0);
	}
	public KW_END(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_END, 0);
	}
	public insertSimpleStatement_list(): InsertSimpleStatementContext[] {
		return this.getTypedRuleContexts(InsertSimpleStatementContext) as InsertSimpleStatementContext[];
	}
	public insertSimpleStatement(i: number): InsertSimpleStatementContext {
		return this.getTypedRuleContext(InsertSimpleStatementContext, i) as InsertSimpleStatementContext;
	}
	public SEMICOLON_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.SEMICOLON);
	}
	public SEMICOLON(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.SEMICOLON, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_insertMulStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterInsertMulStatement) {
	 		listener.enterInsertMulStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitInsertMulStatement) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public valuesCaluse(): ValuesCaluseContext {
		return this.getTypedRuleContext(ValuesCaluseContext, 0) as ValuesCaluseContext;
	}
	public withClause(): WithClauseContext {
		return this.getTypedRuleContext(WithClauseContext, 0) as WithClauseContext;
	}
	public queryStatement_list(): QueryStatementContext[] {
		return this.getTypedRuleContexts(QueryStatementContext) as QueryStatementContext[];
	}
	public queryStatement(i: number): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, i) as QueryStatementContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public selectClause(): SelectClauseContext {
		return this.getTypedRuleContext(SelectClauseContext, 0) as SelectClauseContext;
	}
	public orderByCaluse(): OrderByCaluseContext {
		return this.getTypedRuleContext(OrderByCaluseContext, 0) as OrderByCaluseContext;
	}
	public limitClause(): LimitClauseContext {
		return this.getTypedRuleContext(LimitClauseContext, 0) as LimitClauseContext;
	}
	public selectStatement(): SelectStatementContext {
		return this.getTypedRuleContext(SelectStatementContext, 0) as SelectStatementContext;
	}
	public KW_INTERSECT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INTERSECT, 0);
	}
	public KW_UNION(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_UNION, 0);
	}
	public KW_EXCEPT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EXCEPT, 0);
	}
	public KW_ALL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ALL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_queryStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterQueryStatement) {
	 		listener.enterQueryStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitQueryStatement) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_VALUES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_VALUES, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_valuesCaluse;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterValuesCaluse) {
	 		listener.enterValuesCaluse(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitValuesCaluse) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_WITH(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WITH, 0);
	}
	public withItem_list(): WithItemContext[] {
		return this.getTypedRuleContexts(WithItemContext) as WithItemContext[];
	}
	public withItem(i: number): WithItemContext {
		return this.getTypedRuleContext(WithItemContext, i) as WithItemContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_withClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWithClause) {
	 		listener.enterWithClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWithClause) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public withItemName(): WithItemNameContext {
		return this.getTypedRuleContext(WithItemNameContext, 0) as WithItemNameContext;
	}
	public KW_AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AS, 0);
	}
	public LR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.LR_BRACKET);
	}
	public LR_BRACKET(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, i);
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
	public RR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.RR_BRACKET);
	}
	public RR_BRACKET(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, i);
	}
	public columnName_list(): ColumnNameContext[] {
		return this.getTypedRuleContexts(ColumnNameContext) as ColumnNameContext[];
	}
	public columnName(i: number): ColumnNameContext {
		return this.getTypedRuleContext(ColumnNameContext, i) as ColumnNameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_withItem;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWithItem) {
	 		listener.enterWithItem(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWithItem) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_withItemName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWithItemName) {
	 		listener.enterWithItemName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWithItemName) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public selectClause(): SelectClauseContext {
		return this.getTypedRuleContext(SelectClauseContext, 0) as SelectClauseContext;
	}
	public fromClause(): FromClauseContext {
		return this.getTypedRuleContext(FromClauseContext, 0) as FromClauseContext;
	}
	public whereClause(): WhereClauseContext {
		return this.getTypedRuleContext(WhereClauseContext, 0) as WhereClauseContext;
	}
	public groupByClause(): GroupByClauseContext {
		return this.getTypedRuleContext(GroupByClauseContext, 0) as GroupByClauseContext;
	}
	public havingClause(): HavingClauseContext {
		return this.getTypedRuleContext(HavingClauseContext, 0) as HavingClauseContext;
	}
	public windowClause(): WindowClauseContext {
		return this.getTypedRuleContext(WindowClauseContext, 0) as WindowClauseContext;
	}
	public matchRecognizeClause(): MatchRecognizeClauseContext {
		return this.getTypedRuleContext(MatchRecognizeClauseContext, 0) as MatchRecognizeClauseContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_selectStatement;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSelectStatement) {
	 		listener.enterSelectStatement(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSelectStatement) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_SELECT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SELECT, 0);
	}
	public ASTERISK_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
	}
	public projectItemDefinition_list(): ProjectItemDefinitionContext[] {
		return this.getTypedRuleContexts(ProjectItemDefinitionContext) as ProjectItemDefinitionContext[];
	}
	public projectItemDefinition(i: number): ProjectItemDefinitionContext {
		return this.getTypedRuleContext(ProjectItemDefinitionContext, i) as ProjectItemDefinitionContext;
	}
	public setQuantifier(): SetQuantifierContext {
		return this.getTypedRuleContext(SetQuantifierContext, 0) as SetQuantifierContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_selectClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSelectClause) {
	 		listener.enterSelectClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSelectClause) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public overWindowItem(): OverWindowItemContext {
		return this.getTypedRuleContext(OverWindowItemContext, 0) as OverWindowItemContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public KW_AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AS, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_projectItemDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterProjectItemDefinition) {
	 		listener.enterProjectItemDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitProjectItemDefinition) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public KW_OVER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OVER, 0);
	}
	public windowSpec(): WindowSpecContext {
		return this.getTypedRuleContext(WindowSpecContext, 0) as WindowSpecContext;
	}
	public KW_AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AS, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierContext, 0) as ErrorCapturingIdentifierContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_overWindowItem;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterOverWindowItem) {
	 		listener.enterOverWindowItem(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitOverWindowItem) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_FROM(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FROM, 0);
	}
	public tableExpression(): TableExpressionContext {
		return this.getTypedRuleContext(TableExpressionContext, 0) as TableExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_fromClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterFromClause) {
	 		listener.enterFromClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitFromClause) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tableReference_list(): TableReferenceContext[] {
		return this.getTypedRuleContexts(TableReferenceContext) as TableReferenceContext[];
	}
	public tableReference(i: number): TableReferenceContext {
		return this.getTypedRuleContext(TableReferenceContext, i) as TableReferenceContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
	public inlineDataValueClause(): InlineDataValueClauseContext {
		return this.getTypedRuleContext(InlineDataValueClauseContext, 0) as InlineDataValueClauseContext;
	}
	public windoTVFClause(): WindoTVFClauseContext {
		return this.getTypedRuleContext(WindoTVFClauseContext, 0) as WindoTVFClauseContext;
	}
	public tableExpression_list(): TableExpressionContext[] {
		return this.getTypedRuleContexts(TableExpressionContext) as TableExpressionContext[];
	}
	public tableExpression(i: number): TableExpressionContext {
		return this.getTypedRuleContext(TableExpressionContext, i) as TableExpressionContext;
	}
	public KW_CROSS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CROSS, 0);
	}
	public KW_JOIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_JOIN, 0);
	}
	public KW_NATURAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NATURAL, 0);
	}
	public KW_OUTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OUTER, 0);
	}
	public joinCondition(): JoinConditionContext {
		return this.getTypedRuleContext(JoinConditionContext, 0) as JoinConditionContext;
	}
	public KW_LEFT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LEFT, 0);
	}
	public KW_RIGHT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RIGHT, 0);
	}
	public KW_FULL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FULL, 0);
	}
	public KW_INNER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INNER, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tableExpression;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTableExpression) {
	 		listener.enterTableExpression(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTableExpression) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tablePrimary(): TablePrimaryContext {
		return this.getTypedRuleContext(TablePrimaryContext, 0) as TablePrimaryContext;
	}
	public tableAlias(): TableAliasContext {
		return this.getTypedRuleContext(TableAliasContext, 0) as TableAliasContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tableReference;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTableReference) {
	 		listener.enterTableReference(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTableReference) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tablePath(): TablePathContext {
		return this.getTypedRuleContext(TablePathContext, 0) as TablePathContext;
	}
	public KW_TABLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TABLE, 0);
	}
	public systemTimePeriod(): SystemTimePeriodContext {
		return this.getTypedRuleContext(SystemTimePeriodContext, 0) as SystemTimePeriodContext;
	}
	public correlationName(): CorrelationNameContext {
		return this.getTypedRuleContext(CorrelationNameContext, 0) as CorrelationNameContext;
	}
	public KW_AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AS, 0);
	}
	public KW_LATERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LATERAL, 0);
	}
	public LR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.LR_BRACKET);
	}
	public LR_BRACKET(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, i);
	}
	public functionName(): FunctionNameContext {
		return this.getTypedRuleContext(FunctionNameContext, 0) as FunctionNameContext;
	}
	public functionParam_list(): FunctionParamContext[] {
		return this.getTypedRuleContexts(FunctionParamContext) as FunctionParamContext[];
	}
	public functionParam(i: number): FunctionParamContext {
		return this.getTypedRuleContext(FunctionParamContext, i) as FunctionParamContext;
	}
	public RR_BRACKET_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.RR_BRACKET);
	}
	public RR_BRACKET(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
	public KW_UNNEST(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_UNNEST, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tablePrimary;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTablePrimary) {
	 		listener.enterTablePrimary(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTablePrimary) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tablePath;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTablePath) {
	 		listener.enterTablePath(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTablePath) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_FOR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FOR, 0);
	}
	public KW_SYSTEM_TIME(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SYSTEM_TIME, 0);
	}
	public KW_AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AS, 0);
	}
	public KW_OF(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OF, 0);
	}
	public dateTimeExpression(): DateTimeExpressionContext {
		return this.getTypedRuleContext(DateTimeExpressionContext, 0) as DateTimeExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_systemTimePeriod;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSystemTimePeriod) {
	 		listener.enterSystemTimePeriod(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSystemTimePeriod) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dateTimeExpression;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDateTimeExpression) {
	 		listener.enterDateTimeExpression(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDateTimeExpression) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public valuesDefinition(): ValuesDefinitionContext {
		return this.getTypedRuleContext(ValuesDefinitionContext, 0) as ValuesDefinitionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public tableAlias(): TableAliasContext {
		return this.getTypedRuleContext(TableAliasContext, 0) as TableAliasContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_inlineDataValueClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterInlineDataValueClause) {
	 		listener.enterInlineDataValueClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitInlineDataValueClause) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_TABLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TABLE, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public windowTVFExression(): WindowTVFExressionContext {
		return this.getTypedRuleContext(WindowTVFExressionContext, 0) as WindowTVFExressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_windoTVFClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWindoTVFClause) {
	 		listener.enterWindoTVFClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWindoTVFClause) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public windoTVFName(): WindoTVFNameContext {
		return this.getTypedRuleContext(WindoTVFNameContext, 0) as WindoTVFNameContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public windowTVFParam_list(): WindowTVFParamContext[] {
		return this.getTypedRuleContexts(WindowTVFParamContext) as WindowTVFParamContext[];
	}
	public windowTVFParam(i: number): WindowTVFParamContext {
		return this.getTypedRuleContext(WindowTVFParamContext, i) as WindowTVFParamContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_windowTVFExression;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWindowTVFExression) {
	 		listener.enterWindowTVFExression(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWindowTVFExression) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_TUMBLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TUMBLE, 0);
	}
	public KW_HOP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_HOP, 0);
	}
	public KW_CUMULATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CUMULATE, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_windoTVFName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWindoTVFName) {
	 		listener.enterWindoTVFName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWindoTVFName) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_TABLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TABLE, 0);
	}
	public timeAttrColumn(): TimeAttrColumnContext {
		return this.getTypedRuleContext(TimeAttrColumnContext, 0) as TimeAttrColumnContext;
	}
	public columnDescriptor(): ColumnDescriptorContext {
		return this.getTypedRuleContext(ColumnDescriptorContext, 0) as ColumnDescriptorContext;
	}
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		return this.getTypedRuleContext(TimeIntervalExpressionContext, 0) as TimeIntervalExpressionContext;
	}
	public KW_DATA(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DATA, 0);
	}
	public DOUBLE_RIGHT_ARROW(): TerminalNode {
		return this.getToken(FlinkSqlParser.DOUBLE_RIGHT_ARROW, 0);
	}
	public KW_TIMECOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TIMECOL, 0);
	}
	public timeIntervalParamName(): TimeIntervalParamNameContext {
		return this.getTypedRuleContext(TimeIntervalParamNameContext, 0) as TimeIntervalParamNameContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_windowTVFParam;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWindowTVFParam) {
	 		listener.enterWindowTVFParam(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWindowTVFParam) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_DATA(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DATA, 0);
	}
	public KW_TIMECOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TIMECOL, 0);
	}
	public KW_SIZE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SIZE, 0);
	}
	public KW_OFFSET(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OFFSET, 0);
	}
	public KW_STEP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_STEP, 0);
	}
	public KW_SLIDE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SLIDE, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_timeIntervalParamName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTimeIntervalParamName) {
	 		listener.enterTimeIntervalParamName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTimeIntervalParamName) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_DESCRIPTOR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DESCRIPTOR, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_columnDescriptor;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterColumnDescriptor) {
	 		listener.enterColumnDescriptor(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitColumnDescriptor) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_ON(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ON, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public KW_USING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_USING, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public uid_list(): UidContext[] {
		return this.getTypedRuleContexts(UidContext) as UidContext[];
	}
	public uid(i: number): UidContext {
		return this.getTypedRuleContext(UidContext, i) as UidContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_joinCondition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterJoinCondition) {
	 		listener.enterJoinCondition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitJoinCondition) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_WHERE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WHERE, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_whereClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWhereClause) {
	 		listener.enterWhereClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWhereClause) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_GROUP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_GROUP, 0);
	}
	public KW_BY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BY, 0);
	}
	public groupItemDefinition_list(): GroupItemDefinitionContext[] {
		return this.getTypedRuleContexts(GroupItemDefinitionContext) as GroupItemDefinitionContext[];
	}
	public groupItemDefinition(i: number): GroupItemDefinitionContext {
		return this.getTypedRuleContext(GroupItemDefinitionContext, i) as GroupItemDefinitionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_groupByClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterGroupByClause) {
	 		listener.enterGroupByClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitGroupByClause) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public groupWindowFunction(): GroupWindowFunctionContext {
		return this.getTypedRuleContext(GroupWindowFunctionContext, 0) as GroupWindowFunctionContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
	public groupingSetsNotaionName(): GroupingSetsNotaionNameContext {
		return this.getTypedRuleContext(GroupingSetsNotaionNameContext, 0) as GroupingSetsNotaionNameContext;
	}
	public groupingSets(): GroupingSetsContext {
		return this.getTypedRuleContext(GroupingSetsContext, 0) as GroupingSetsContext;
	}
	public groupItemDefinition_list(): GroupItemDefinitionContext[] {
		return this.getTypedRuleContexts(GroupItemDefinitionContext) as GroupItemDefinitionContext[];
	}
	public groupItemDefinition(i: number): GroupItemDefinitionContext {
		return this.getTypedRuleContext(GroupItemDefinitionContext, i) as GroupItemDefinitionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_groupItemDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterGroupItemDefinition) {
	 		listener.enterGroupItemDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitGroupItemDefinition) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_GROUPING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_GROUPING, 0);
	}
	public KW_SETS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SETS, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_groupingSets;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterGroupingSets) {
	 		listener.enterGroupingSets(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitGroupingSets) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_CUBE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CUBE, 0);
	}
	public KW_ROLLUP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ROLLUP, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_groupingSetsNotaionName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterGroupingSetsNotaionName) {
	 		listener.enterGroupingSetsNotaionName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitGroupingSetsNotaionName) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public groupWindowFunctionName(): GroupWindowFunctionNameContext {
		return this.getTypedRuleContext(GroupWindowFunctionNameContext, 0) as GroupWindowFunctionNameContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public timeAttrColumn(): TimeAttrColumnContext {
		return this.getTypedRuleContext(TimeAttrColumnContext, 0) as TimeAttrColumnContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, 0);
	}
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		return this.getTypedRuleContext(TimeIntervalExpressionContext, 0) as TimeIntervalExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_groupWindowFunction;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterGroupWindowFunction) {
	 		listener.enterGroupWindowFunction(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitGroupWindowFunction) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_TUMBLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TUMBLE, 0);
	}
	public KW_HOP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_HOP, 0);
	}
	public KW_SESSION(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SESSION, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_groupWindowFunctionName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterGroupWindowFunctionName) {
	 		listener.enterGroupWindowFunctionName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitGroupWindowFunctionName) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_timeAttrColumn;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTimeAttrColumn) {
	 		listener.enterTimeAttrColumn(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTimeAttrColumn) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_HAVING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_HAVING, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_havingClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterHavingClause) {
	 		listener.enterHavingClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitHavingClause) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_WINDOW(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WINDOW, 0);
	}
	public namedWindow_list(): NamedWindowContext[] {
		return this.getTypedRuleContexts(NamedWindowContext) as NamedWindowContext[];
	}
	public namedWindow(i: number): NamedWindowContext {
		return this.getTypedRuleContext(NamedWindowContext, i) as NamedWindowContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_windowClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWindowClause) {
	 		listener.enterWindowClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWindowClause) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AS, 0);
	}
	public windowSpec(): WindowSpecContext {
		return this.getTypedRuleContext(WindowSpecContext, 0) as WindowSpecContext;
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierContext, 0) as ErrorCapturingIdentifierContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_namedWindow;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterNamedWindow) {
	 		listener.enterNamedWindow(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitNamedWindow) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public partitionByClause(): PartitionByClauseContext {
		return this.getTypedRuleContext(PartitionByClauseContext, 0) as PartitionByClauseContext;
	}
	public orderByCaluse(): OrderByCaluseContext {
		return this.getTypedRuleContext(OrderByCaluseContext, 0) as OrderByCaluseContext;
	}
	public windowFrame(): WindowFrameContext {
		return this.getTypedRuleContext(WindowFrameContext, 0) as WindowFrameContext;
	}
	public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierContext, 0) as ErrorCapturingIdentifierContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_windowSpec;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWindowSpec) {
	 		listener.enterWindowSpec(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWindowSpec) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_MATCH_RECOGNIZE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MATCH_RECOGNIZE, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public patternVariablesDefination(): PatternVariablesDefinationContext {
		return this.getTypedRuleContext(PatternVariablesDefinationContext, 0) as PatternVariablesDefinationContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public partitionByClause(): PartitionByClauseContext {
		return this.getTypedRuleContext(PartitionByClauseContext, 0) as PartitionByClauseContext;
	}
	public orderByCaluse(): OrderByCaluseContext {
		return this.getTypedRuleContext(OrderByCaluseContext, 0) as OrderByCaluseContext;
	}
	public measuresClause(): MeasuresClauseContext {
		return this.getTypedRuleContext(MeasuresClauseContext, 0) as MeasuresClauseContext;
	}
	public outputMode(): OutputModeContext {
		return this.getTypedRuleContext(OutputModeContext, 0) as OutputModeContext;
	}
	public afterMatchStrategy(): AfterMatchStrategyContext {
		return this.getTypedRuleContext(AfterMatchStrategyContext, 0) as AfterMatchStrategyContext;
	}
	public patternDefination(): PatternDefinationContext {
		return this.getTypedRuleContext(PatternDefinationContext, 0) as PatternDefinationContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public KW_AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AS, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_matchRecognizeClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterMatchRecognizeClause) {
	 		listener.enterMatchRecognizeClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitMatchRecognizeClause) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_ORDER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ORDER, 0);
	}
	public KW_BY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BY, 0);
	}
	public orderItemDefition_list(): OrderItemDefitionContext[] {
		return this.getTypedRuleContexts(OrderItemDefitionContext) as OrderItemDefitionContext[];
	}
	public orderItemDefition(i: number): OrderItemDefitionContext {
		return this.getTypedRuleContext(OrderItemDefitionContext, i) as OrderItemDefitionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_orderByCaluse;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterOrderByCaluse) {
	 		listener.enterOrderByCaluse(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitOrderByCaluse) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public KW_NULLS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NULLS, 0);
	}
	public KW_ASC(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ASC, 0);
	}
	public KW_DESC(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DESC, 0);
	}
	public KW_LAST(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LAST, 0);
	}
	public KW_FIRST(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FIRST, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_orderItemDefition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterOrderItemDefition) {
	 		listener.enterOrderItemDefition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitOrderItemDefition) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_LIMIT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LIMIT, 0);
	}
	public KW_ALL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ALL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_limitClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLimitClause) {
	 		listener.enterLimitClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLimitClause) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_PARTITION(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PARTITION, 0);
	}
	public KW_BY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BY, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_partitionByClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterPartitionByClause) {
	 		listener.enterPartitionByClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitPartitionByClause) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASTERISK_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
	}
	public ADD_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
	}
	public QUESTION_MARK_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.QUESTION_MARK_SIGN, 0);
	}
	public LB_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LB_BRACKET, 0);
	}
	public DIG_LITERAL_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.DIG_LITERAL);
	}
	public DIG_LITERAL(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.DIG_LITERAL, i);
	}
	public COMMA(): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, 0);
	}
	public RB_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RB_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_quantifiers;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterQuantifiers) {
	 		listener.enterQuantifiers(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitQuantifiers) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_MEASURES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MEASURES, 0);
	}
	public projectItemDefinition_list(): ProjectItemDefinitionContext[] {
		return this.getTypedRuleContexts(ProjectItemDefinitionContext) as ProjectItemDefinitionContext[];
	}
	public projectItemDefinition(i: number): ProjectItemDefinitionContext {
		return this.getTypedRuleContext(ProjectItemDefinitionContext, i) as ProjectItemDefinitionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_measuresClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterMeasuresClause) {
	 		listener.enterMeasuresClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitMeasuresClause) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_PATTERN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PATTERN, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public patternVariable_list(): PatternVariableContext[] {
		return this.getTypedRuleContexts(PatternVariableContext) as PatternVariableContext[];
	}
	public patternVariable(i: number): PatternVariableContext {
		return this.getTypedRuleContext(PatternVariableContext, i) as PatternVariableContext;
	}
	public withinClause(): WithinClauseContext {
		return this.getTypedRuleContext(WithinClauseContext, 0) as WithinClauseContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_patternDefination;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterPatternDefination) {
	 		listener.enterPatternDefination(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitPatternDefination) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unquotedIdentifier(): UnquotedIdentifierContext {
		return this.getTypedRuleContext(UnquotedIdentifierContext, 0) as UnquotedIdentifierContext;
	}
	public quantifiers(): QuantifiersContext {
		return this.getTypedRuleContext(QuantifiersContext, 0) as QuantifiersContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_patternVariable;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterPatternVariable) {
	 		listener.enterPatternVariable(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitPatternVariable) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_ALL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ALL, 0);
	}
	public KW_ROWS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ROWS, 0);
	}
	public KW_PER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PER, 0);
	}
	public KW_MATCH(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MATCH, 0);
	}
	public KW_ONE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ONE, 0);
	}
	public KW_ROW(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ROW, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_outputMode;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterOutputMode) {
	 		listener.enterOutputMode(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitOutputMode) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_AFTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AFTER, 0);
	}
	public KW_MATCH(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MATCH, 0);
	}
	public KW_SKIP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SKIP, 0);
	}
	public KW_PAST(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PAST, 0);
	}
	public KW_LAST(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LAST, 0);
	}
	public KW_ROW(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ROW, 0);
	}
	public KW_TO(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TO, 0);
	}
	public KW_NEXT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NEXT, 0);
	}
	public unquotedIdentifier(): UnquotedIdentifierContext {
		return this.getTypedRuleContext(UnquotedIdentifierContext, 0) as UnquotedIdentifierContext;
	}
	public KW_FIRST(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FIRST, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_afterMatchStrategy;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterAfterMatchStrategy) {
	 		listener.enterAfterMatchStrategy(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitAfterMatchStrategy) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_DEFINE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DEFINE, 0);
	}
	public projectItemDefinition_list(): ProjectItemDefinitionContext[] {
		return this.getTypedRuleContexts(ProjectItemDefinitionContext) as ProjectItemDefinitionContext[];
	}
	public projectItemDefinition(i: number): ProjectItemDefinitionContext {
		return this.getTypedRuleContext(ProjectItemDefinitionContext, i) as ProjectItemDefinitionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_patternVariablesDefination;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterPatternVariablesDefination) {
	 		listener.enterPatternVariablesDefination(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitPatternVariablesDefination) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_RANGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RANGE, 0);
	}
	public KW_BETWEEN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BETWEEN, 0);
	}
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		return this.getTypedRuleContext(TimeIntervalExpressionContext, 0) as TimeIntervalExpressionContext;
	}
	public frameBound(): FrameBoundContext {
		return this.getTypedRuleContext(FrameBoundContext, 0) as FrameBoundContext;
	}
	public KW_ROWS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ROWS, 0);
	}
	public DIG_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_windowFrame;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWindowFrame) {
	 		listener.enterWindowFrame(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWindowFrame) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_PRECEDING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PRECEDING, 0);
	}
	public KW_AND(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AND, 0);
	}
	public KW_CURRENT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CURRENT, 0);
	}
	public KW_ROW(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ROW, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_frameBound;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterFrameBound) {
	 		listener.enterFrameBound(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitFrameBound) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_WITHIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WITHIN, 0);
	}
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		return this.getTypedRuleContext(TimeIntervalExpressionContext, 0) as TimeIntervalExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_withinClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWithinClause) {
	 		listener.enterWithinClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWithinClause) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_expression;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitExpression) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_booleanExpression;
	}
	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LogicalNotContext extends BooleanExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NOT, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLogicalNot) {
	 		listener.enterLogicalNot(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLogicalNot) {
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
export class PredicatedContext extends BooleanExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public predicate(): PredicateContext {
		return this.getTypedRuleContext(PredicateContext, 0) as PredicateContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterPredicated) {
	 		listener.enterPredicated(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitPredicated) {
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
export class ExistsContext extends BooleanExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_EXISTS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EXISTS, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterExists) {
	 		listener.enterExists(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitExists) {
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
export class LogicalNestedContext extends BooleanExpressionContext {
	public _kind!: Token;
	constructor(parser: FlinkSqlParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public KW_IS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_IS, 0);
	}
	public KW_TRUE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TRUE, 0);
	}
	public KW_FALSE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FALSE, 0);
	}
	public KW_UNKNOWN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_UNKNOWN, 0);
	}
	public KW_NULL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NULL, 0);
	}
	public KW_NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NOT, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLogicalNested) {
	 		listener.enterLogicalNested(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLogicalNested) {
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
export class LogicalBinaryContext extends BooleanExpressionContext {
	public _left!: BooleanExpressionContext;
	public _operator!: Token;
	public _right!: BooleanExpressionContext;
	constructor(parser: FlinkSqlParser, ctx: BooleanExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public booleanExpression_list(): BooleanExpressionContext[] {
		return this.getTypedRuleContexts(BooleanExpressionContext) as BooleanExpressionContext[];
	}
	public booleanExpression(i: number): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, i) as BooleanExpressionContext;
	}
	public KW_AND(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AND, 0);
	}
	public KW_OR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OR, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLogicalBinary) {
	 		listener.enterLogicalBinary(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLogicalBinary) {
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


export class PredicateContext extends ParserRuleContext {
	public _kind!: Token;
	public _lower!: ValueExpressionContext;
	public _upper!: ValueExpressionContext;
	public _pattern!: ValueExpressionContext;
	public _right!: ValueExpressionContext;
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_AND(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AND, 0);
	}
	public KW_BETWEEN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BETWEEN, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public KW_NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NOT, 0);
	}
	public KW_ASYMMETRIC(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ASYMMETRIC, 0);
	}
	public KW_SYMMETRIC(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SYMMETRIC, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public KW_IN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_IN, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
	public KW_EXISTS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EXISTS, 0);
	}
	public KW_RLIKE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RLIKE, 0);
	}
	public likePredicate(): LikePredicateContext {
		return this.getTypedRuleContext(LikePredicateContext, 0) as LikePredicateContext;
	}
	public KW_IS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_IS, 0);
	}
	public KW_TRUE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TRUE, 0);
	}
	public KW_FALSE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FALSE, 0);
	}
	public KW_UNKNOWN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_UNKNOWN, 0);
	}
	public KW_NULL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NULL, 0);
	}
	public KW_FROM(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FROM, 0);
	}
	public KW_DISTINCT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DISTINCT, 0);
	}
	public KW_TO(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TO, 0);
	}
	public KW_SIMILAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SIMILAR, 0);
	}
	public KW_ESCAPE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ESCAPE, 0);
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_predicate;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterPredicate) {
	 		listener.enterPredicate(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitPredicate) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_LIKE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LIKE, 0);
	}
	public KW_ANY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ANY, 0);
	}
	public KW_ALL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ALL, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public KW_NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NOT, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public KW_ESCAPE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ESCAPE, 0);
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_likePredicate;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLikePredicate) {
	 		listener.enterLikePredicate(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLikePredicate) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_valueExpression;
	}
	public copyFrom(ctx: ValueExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterValueExpressionDefault) {
	 		listener.enterValueExpressionDefault(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitValueExpressionDefault) {
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
export class ComparisonContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _right!: ValueExpressionContext;
	constructor(parser: FlinkSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getTypedRuleContext(ComparisonOperatorContext, 0) as ComparisonOperatorContext;
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterComparison) {
	 		listener.enterComparison(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitComparison) {
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
	constructor(parser: FlinkSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public SLASH_TEXT(): TerminalNode {
		return this.getToken(FlinkSqlParser.SLASH_TEXT, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterArithmeticBinaryAlternate) {
	 		listener.enterArithmeticBinaryAlternate(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitArithmeticBinaryAlternate) {
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
export class ArithmeticBinaryContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _operator!: Token;
	public _right!: ValueExpressionContext;
	constructor(parser: FlinkSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public ASTERISK_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
	}
	public SLASH_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.SLASH_SIGN, 0);
	}
	public PENCENT_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.PENCENT_SIGN, 0);
	}
	public KW_DIV(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DIV, 0);
	}
	public ADD_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
	}
	public HYPNEN_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
	}
	public DOUBLE_VERTICAL_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.DOUBLE_VERTICAL_SIGN, 0);
	}
	public BIT_AND_OP(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_AND_OP, 0);
	}
	public BIT_XOR_OP(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_XOR_OP, 0);
	}
	public BIT_OR_OP(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_OR_OP, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterArithmeticBinary) {
	 		listener.enterArithmeticBinary(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitArithmeticBinary) {
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
export class ArithmeticUnaryContext extends ValueExpressionContext {
	public _operator!: Token;
	constructor(parser: FlinkSqlParser, ctx: ValueExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public HYPNEN_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
	}
	public ADD_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
	}
	public BIT_NOT_OP(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_NOT_OP, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterArithmeticUnary) {
	 		listener.enterArithmeticUnary(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitArithmeticUnary) {
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


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_primaryExpression;
	}
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class DereferenceContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public dereferenceDefinition(): DereferenceDefinitionContext {
		return this.getTypedRuleContext(DereferenceDefinitionContext, 0) as DereferenceDefinitionContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDereference) {
	 		listener.enterDereference(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDereference) {
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
export class SimpleCaseContext extends PrimaryExpressionContext {
	public _value!: ExpressionContext;
	public _elseExpression!: ExpressionContext;
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_CASE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CASE, 0);
	}
	public KW_END(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_END, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public whenClause_list(): WhenClauseContext[] {
		return this.getTypedRuleContexts(WhenClauseContext) as WhenClauseContext[];
	}
	public whenClause(i: number): WhenClauseContext {
		return this.getTypedRuleContext(WhenClauseContext, i) as WhenClauseContext;
	}
	public KW_ELSE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ELSE, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSimpleCase) {
	 		listener.enterSimpleCase(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSimpleCase) {
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
export class ColumnReferenceContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterColumnReference) {
	 		listener.enterColumnReference(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitColumnReference) {
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
export class LastContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_LAST(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LAST, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public KW_IGNORE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_IGNORE, 0);
	}
	public KW_NULLS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NULLS, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLast) {
	 		listener.enterLast(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLast) {
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
export class StarContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ASTERISK_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.DOT, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterStar) {
	 		listener.enterStar(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitStar) {
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
export class SubscriptContext extends PrimaryExpressionContext {
	public _value!: PrimaryExpressionContext;
	public _index!: ValueExpressionContext;
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LS_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LS_BRACKET, 0);
	}
	public RS_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RS_BRACKET, 0);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
	public valueExpression(): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, 0) as ValueExpressionContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSubscript) {
	 		listener.enterSubscript(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSubscript) {
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
export class SubqueryExpressionContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public queryStatement(): QueryStatementContext {
		return this.getTypedRuleContext(QueryStatementContext, 0) as QueryStatementContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSubqueryExpression) {
	 		listener.enterSubqueryExpression(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSubqueryExpression) {
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
export class CastContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_CAST(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CAST, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public KW_AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AS, 0);
	}
	public columnType(): ColumnTypeContext {
		return this.getTypedRuleContext(ColumnTypeContext, 0) as ColumnTypeContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterCast) {
	 		listener.enterCast(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitCast) {
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
export class ConstantDefaultContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterConstantDefault) {
	 		listener.enterConstantDefault(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitConstantDefault) {
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
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterParenthesizedExpression) {
	 		listener.enterParenthesizedExpression(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitParenthesizedExpression) {
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
export class FunctionCallContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public functionName(): FunctionNameContext {
		return this.getTypedRuleContext(FunctionNameContext, 0) as FunctionNameContext;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public functionParam_list(): FunctionParamContext[] {
		return this.getTypedRuleContexts(FunctionParamContext) as FunctionParamContext[];
	}
	public functionParam(i: number): FunctionParamContext {
		return this.getTypedRuleContext(FunctionParamContext, i) as FunctionParamContext;
	}
	public setQuantifier(): SetQuantifierContext {
		return this.getTypedRuleContext(SetQuantifierContext, 0) as SetQuantifierContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitFunctionCall) {
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
export class SearchedCaseContext extends PrimaryExpressionContext {
	public _elseExpression!: ExpressionContext;
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_CASE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CASE, 0);
	}
	public KW_END(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_END, 0);
	}
	public whenClause_list(): WhenClauseContext[] {
		return this.getTypedRuleContexts(WhenClauseContext) as WhenClauseContext[];
	}
	public whenClause(i: number): WhenClauseContext {
		return this.getTypedRuleContext(WhenClauseContext, i) as WhenClauseContext;
	}
	public KW_ELSE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ELSE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSearchedCase) {
	 		listener.enterSearchedCase(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSearchedCase) {
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
export class PositionContext extends PrimaryExpressionContext {
	public _substr!: ValueExpressionContext;
	public _str!: ValueExpressionContext;
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_POSITION(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_POSITION, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public KW_IN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_IN, 0);
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public valueExpression_list(): ValueExpressionContext[] {
		return this.getTypedRuleContexts(ValueExpressionContext) as ValueExpressionContext[];
	}
	public valueExpression(i: number): ValueExpressionContext {
		return this.getTypedRuleContext(ValueExpressionContext, i) as ValueExpressionContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterPosition) {
	 		listener.enterPosition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitPosition) {
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
export class FirstContext extends PrimaryExpressionContext {
	constructor(parser: FlinkSqlParser, ctx: PrimaryExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_FIRST(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FIRST, 0);
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public KW_IGNORE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_IGNORE, 0);
	}
	public KW_NULLS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NULLS, 0);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterFirst) {
	 		listener.enterFirst(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitFirst) {
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


export class FunctionNameContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext {
		return this.getTypedRuleContext(ReservedKeywordsUsedAsFuncNameContext, 0) as ReservedKeywordsUsedAsFuncNameContext;
	}
	public nonReservedKeywords(): NonReservedKeywordsContext {
		return this.getTypedRuleContext(NonReservedKeywordsContext, 0) as NonReservedKeywordsContext;
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_functionName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterFunctionName) {
	 		listener.enterFunctionName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitFunctionName) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public reservedKeywordsUsedAsFuncParam(): ReservedKeywordsUsedAsFuncParamContext {
		return this.getTypedRuleContext(ReservedKeywordsUsedAsFuncParamContext, 0) as ReservedKeywordsUsedAsFuncParamContext;
	}
	public timeIntervalUnit(): TimeIntervalUnitContext {
		return this.getTypedRuleContext(TimeIntervalUnitContext, 0) as TimeIntervalUnitContext;
	}
	public timePointUnit(): TimePointUnitContext {
		return this.getTypedRuleContext(TimePointUnitContext, 0) as TimePointUnitContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_functionParam;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterFunctionParam) {
	 		listener.enterFunctionParam(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitFunctionParam) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public uid(): UidContext {
		return this.getTypedRuleContext(UidContext, 0) as UidContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_dereferenceDefinition;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDereferenceDefinition) {
	 		listener.enterDereferenceDefinition(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDereferenceDefinition) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_correlationName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterCorrelationName) {
	 		listener.enterCorrelationName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitCorrelationName) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public dereferenceDefinition(): DereferenceDefinitionContext {
		return this.getTypedRuleContext(DereferenceDefinitionContext, 0) as DereferenceDefinitionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_qualifiedName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterQualifiedName) {
	 		listener.enterQualifiedName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitQualifiedName) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_INTERVAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INTERVAL, 0);
	}
	public errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext {
		return this.getTypedRuleContext(ErrorCapturingMultiUnitsIntervalContext, 0) as ErrorCapturingMultiUnitsIntervalContext;
	}
	public errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext {
		return this.getTypedRuleContext(ErrorCapturingUnitToUnitIntervalContext, 0) as ErrorCapturingUnitToUnitIntervalContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_timeIntervalExpression;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTimeIntervalExpression) {
	 		listener.enterTimeIntervalExpression(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTimeIntervalExpression) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multiUnitsInterval(): MultiUnitsIntervalContext {
		return this.getTypedRuleContext(MultiUnitsIntervalContext, 0) as MultiUnitsIntervalContext;
	}
	public unitToUnitInterval(): UnitToUnitIntervalContext {
		return this.getTypedRuleContext(UnitToUnitIntervalContext, 0) as UnitToUnitIntervalContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterErrorCapturingMultiUnitsInterval) {
	 		listener.enterErrorCapturingMultiUnitsInterval(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitErrorCapturingMultiUnitsInterval) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public intervalValue_list(): IntervalValueContext[] {
		return this.getTypedRuleContexts(IntervalValueContext) as IntervalValueContext[];
	}
	public intervalValue(i: number): IntervalValueContext {
		return this.getTypedRuleContext(IntervalValueContext, i) as IntervalValueContext;
	}
	public timeIntervalUnit_list(): TimeIntervalUnitContext[] {
		return this.getTypedRuleContexts(TimeIntervalUnitContext) as TimeIntervalUnitContext[];
	}
	public timeIntervalUnit(i: number): TimeIntervalUnitContext {
		return this.getTypedRuleContext(TimeIntervalUnitContext, i) as TimeIntervalUnitContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_multiUnitsInterval;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterMultiUnitsInterval) {
	 		listener.enterMultiUnitsInterval(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitMultiUnitsInterval) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unitToUnitInterval_list(): UnitToUnitIntervalContext[] {
		return this.getTypedRuleContexts(UnitToUnitIntervalContext) as UnitToUnitIntervalContext[];
	}
	public unitToUnitInterval(i: number): UnitToUnitIntervalContext {
		return this.getTypedRuleContext(UnitToUnitIntervalContext, i) as UnitToUnitIntervalContext;
	}
	public multiUnitsInterval(): MultiUnitsIntervalContext {
		return this.getTypedRuleContext(MultiUnitsIntervalContext, 0) as MultiUnitsIntervalContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterErrorCapturingUnitToUnitInterval) {
	 		listener.enterErrorCapturingUnitToUnitInterval(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitErrorCapturingUnitToUnitInterval) {
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
	public _from_!: TimeIntervalUnitContext;
	public _to!: TimeIntervalUnitContext;
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_TO(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TO, 0);
	}
	public intervalValue(): IntervalValueContext {
		return this.getTypedRuleContext(IntervalValueContext, 0) as IntervalValueContext;
	}
	public timeIntervalUnit_list(): TimeIntervalUnitContext[] {
		return this.getTypedRuleContexts(TimeIntervalUnitContext) as TimeIntervalUnitContext[];
	}
	public timeIntervalUnit(i: number): TimeIntervalUnitContext {
		return this.getTypedRuleContext(TimeIntervalUnitContext, i) as TimeIntervalUnitContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_unitToUnitInterval;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterUnitToUnitInterval) {
	 		listener.enterUnitToUnitInterval(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitUnitToUnitInterval) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DIG_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
	}
	public REAL_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.REAL_LITERAL, 0);
	}
	public ADD_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
	}
	public HYPNEN_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_intervalValue;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterIntervalValue) {
	 		listener.enterIntervalValue(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitIntervalValue) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public KW_AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AS, 0);
	}
	public identifierList(): IdentifierListContext {
		return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_columnAlias;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterColumnAlias) {
	 		listener.enterColumnAlias(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitColumnAlias) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public KW_AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AS, 0);
	}
	public identifierList(): IdentifierListContext {
		return this.getTypedRuleContext(IdentifierListContext, 0) as IdentifierListContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tableAlias;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTableAlias) {
	 		listener.enterTableAlias(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTableAlias) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext {
		return this.getTypedRuleContext(ErrorCapturingIdentifierExtraContext, 0) as ErrorCapturingIdentifierExtraContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_errorCapturingIdentifier;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterErrorCapturingIdentifier) {
	 		listener.enterErrorCapturingIdentifier(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitErrorCapturingIdentifier) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_errorCapturingIdentifierExtra;
	}
	public copyFrom(ctx: ErrorCapturingIdentifierExtraContext): void {
		super.copyFrom(ctx);
	}
}
export class ErrorIdentContext extends ErrorCapturingIdentifierExtraContext {
	constructor(parser: FlinkSqlParser, ctx: ErrorCapturingIdentifierExtraContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KW_MINUS_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.KW_MINUS);
	}
	public KW_MINUS(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MINUS, i);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterErrorIdent) {
	 		listener.enterErrorIdent(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitErrorIdent) {
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
	constructor(parser: FlinkSqlParser, ctx: ErrorCapturingIdentifierExtraContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterRealIdent) {
	 		listener.enterRealIdent(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitRealIdent) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public identifierSeq(): IdentifierSeqContext {
		return this.getTypedRuleContext(IdentifierSeqContext, 0) as IdentifierSeqContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_identifierList;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterIdentifierList) {
	 		listener.enterIdentifierList(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitIdentifierList) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_identifierSeq;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterIdentifierSeq) {
	 		listener.enterIdentifierSeq(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitIdentifierSeq) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_identifier;
	}
	public copyFrom(ctx: IdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class QuotedIdentifierAlternativeContext extends IdentifierContext {
	constructor(parser: FlinkSqlParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public quotedIdentifier(): QuotedIdentifierContext {
		return this.getTypedRuleContext(QuotedIdentifierContext, 0) as QuotedIdentifierContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterQuotedIdentifierAlternative) {
	 		listener.enterQuotedIdentifierAlternative(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitQuotedIdentifierAlternative) {
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
	constructor(parser: FlinkSqlParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public nonReservedKeywords(): NonReservedKeywordsContext {
		return this.getTypedRuleContext(NonReservedKeywordsContext, 0) as NonReservedKeywordsContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterNonReservedKeywordsAlternative) {
	 		listener.enterNonReservedKeywordsAlternative(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitNonReservedKeywordsAlternative) {
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
export class UnquotedIdentifierAlternativeContext extends IdentifierContext {
	constructor(parser: FlinkSqlParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public unquotedIdentifier(): UnquotedIdentifierContext {
		return this.getTypedRuleContext(UnquotedIdentifierContext, 0) as UnquotedIdentifierContext;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterUnquotedIdentifierAlternative) {
	 		listener.enterUnquotedIdentifierAlternative(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitUnquotedIdentifierAlternative) {
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


export class UnquotedIdentifierContext extends ParserRuleContext {
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DIG_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
	}
	public ID_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.ID_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_unquotedIdentifier;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterUnquotedIdentifier) {
	 		listener.enterUnquotedIdentifier(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitUnquotedIdentifier) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_quotedIdentifier;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterQuotedIdentifier) {
	 		listener.enterQuotedIdentifier(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitQuotedIdentifier) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_WHEN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WHEN, 0);
	}
	public KW_THEN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_THEN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_whenClause;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWhenClause) {
	 		listener.enterWhenClause(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWhenClause) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_uid;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterUid) {
	 		listener.enterUid(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitUid) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_WITH(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WITH, 0);
	}
	public tablePropertyList(): TablePropertyListContext {
		return this.getTypedRuleContext(TablePropertyListContext, 0) as TablePropertyListContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_withOption;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterWithOption) {
	 		listener.enterWithOption(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitWithOption) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_IF(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_IF, 0);
	}
	public KW_NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NOT, 0);
	}
	public KW_EXISTS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EXISTS, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_ifNotExists;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterIfNotExists) {
	 		listener.enterIfNotExists(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitIfNotExists) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_IF(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_IF, 0);
	}
	public KW_EXISTS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EXISTS, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_ifExists;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterIfExists) {
	 		listener.enterIfExists(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitIfExists) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
	}
	public tableProperty_list(): TablePropertyContext[] {
		return this.getTypedRuleContexts(TablePropertyContext) as TablePropertyContext[];
	}
	public tableProperty(i: number): TablePropertyContext {
		return this.getTypedRuleContext(TablePropertyContext, i) as TablePropertyContext;
	}
	public RR_BRACKET(): TerminalNode {
		return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tablePropertyList;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTablePropertyList) {
	 		listener.enterTablePropertyList(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTablePropertyList) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tablePropertyKey(): TablePropertyKeyContext {
		return this.getTypedRuleContext(TablePropertyKeyContext, 0) as TablePropertyKeyContext;
	}
	public tablePropertyValue(): TablePropertyValueContext {
		return this.getTypedRuleContext(TablePropertyValueContext, 0) as TablePropertyValueContext;
	}
	public EQUAL_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.EQUAL_SYMBOL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tableProperty;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTableProperty) {
	 		listener.enterTableProperty(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTableProperty) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public dereferenceDefinition(): DereferenceDefinitionContext {
		return this.getTypedRuleContext(DereferenceDefinitionContext, 0) as DereferenceDefinitionContext;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tablePropertyKey;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTablePropertyKey) {
	 		listener.enterTablePropertyKey(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTablePropertyKey) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DIG_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
	}
	public REAL_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.REAL_LITERAL, 0);
	}
	public booleanLiteral(): BooleanLiteralContext {
		return this.getTypedRuleContext(BooleanLiteralContext, 0) as BooleanLiteralContext;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_tablePropertyValue;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTablePropertyValue) {
	 		listener.enterTablePropertyValue(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTablePropertyValue) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_AND(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AND, 0);
	}
	public BIT_AND_OP_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.BIT_AND_OP);
	}
	public BIT_AND_OP(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_AND_OP, i);
	}
	public KW_OR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OR, 0);
	}
	public BIT_OR_OP_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.BIT_OR_OP);
	}
	public BIT_OR_OP(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_OR_OP, i);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_logicalOperator;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterLogicalOperator) {
	 		listener.enterLogicalOperator(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitLogicalOperator) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQUAL_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.EQUAL_SYMBOL, 0);
	}
	public GREATER_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0);
	}
	public LESS_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0);
	}
	public EXCLAMATION_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXCLAMATION_SYMBOL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_comparisonOperator;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterComparisonOperator) {
	 		listener.enterComparisonOperator(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitComparisonOperator) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LESS_SYMBOL_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.LESS_SYMBOL);
	}
	public LESS_SYMBOL(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.LESS_SYMBOL, i);
	}
	public GREATER_SYMBOL_list(): TerminalNode[] {
	    	return this.getTokens(FlinkSqlParser.GREATER_SYMBOL);
	}
	public GREATER_SYMBOL(i: number): TerminalNode {
		return this.getToken(FlinkSqlParser.GREATER_SYMBOL, i);
	}
	public BIT_AND_OP(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_AND_OP, 0);
	}
	public BIT_XOR_OP(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_XOR_OP, 0);
	}
	public BIT_OR_OP(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_OR_OP, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_bitOperator;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterBitOperator) {
	 		listener.enterBitOperator(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitBitOperator) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASTERISK_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
	}
	public SLASH_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.SLASH_SIGN, 0);
	}
	public PENCENT_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.PENCENT_SIGN, 0);
	}
	public KW_DIV(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DIV, 0);
	}
	public ADD_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
	}
	public HYPNEN_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
	}
	public DOUBLE_HYPNEN_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.DOUBLE_HYPNEN_SIGN, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_mathOperator;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterMathOperator) {
	 		listener.enterMathOperator(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitMathOperator) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXCLAMATION_SYMBOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.EXCLAMATION_SYMBOL, 0);
	}
	public BIT_NOT_OP(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_NOT_OP, 0);
	}
	public ADD_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
	}
	public HYPNEN_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
	}
	public KW_NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NOT, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_unaryOperator;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterUnaryOperator) {
	 		listener.enterUnaryOperator(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitUnaryOperator) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public timeIntervalExpression(): TimeIntervalExpressionContext {
		return this.getTypedRuleContext(TimeIntervalExpressionContext, 0) as TimeIntervalExpressionContext;
	}
	public timePointLiteral(): TimePointLiteralContext {
		return this.getTypedRuleContext(TimePointLiteralContext, 0) as TimePointLiteralContext;
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
	public decimalLiteral(): DecimalLiteralContext {
		return this.getTypedRuleContext(DecimalLiteralContext, 0) as DecimalLiteralContext;
	}
	public HYPNEN_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
	}
	public booleanLiteral(): BooleanLiteralContext {
		return this.getTypedRuleContext(BooleanLiteralContext, 0) as BooleanLiteralContext;
	}
	public REAL_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.REAL_LITERAL, 0);
	}
	public BIT_STRING(): TerminalNode {
		return this.getToken(FlinkSqlParser.BIT_STRING, 0);
	}
	public KW_NULL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NULL, 0);
	}
	public KW_NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NOT, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_constant;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterConstant) {
	 		listener.enterConstant(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitConstant) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public timePointUnit(): TimePointUnitContext {
		return this.getTypedRuleContext(TimePointUnitContext, 0) as TimePointUnitContext;
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_timePointLiteral;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTimePointLiteral) {
	 		listener.enterTimePointLiteral(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTimePointLiteral) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_stringLiteral;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterStringLiteral) {
	 		listener.enterStringLiteral(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitStringLiteral) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DIG_LITERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_decimalLiteral;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterDecimalLiteral) {
	 		listener.enterDecimalLiteral(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitDecimalLiteral) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_TRUE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TRUE, 0);
	}
	public KW_FALSE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FALSE, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_booleanLiteral;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterBooleanLiteral) {
	 		listener.enterBooleanLiteral(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitBooleanLiteral) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_DISTINCT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DISTINCT, 0);
	}
	public KW_ALL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ALL, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_setQuantifier;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterSetQuantifier) {
	 		listener.enterSetQuantifier(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitSetQuantifier) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_YEAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_YEAR, 0);
	}
	public KW_QUARTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_QUARTER, 0);
	}
	public KW_MONTH(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MONTH, 0);
	}
	public KW_WEEK(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WEEK, 0);
	}
	public KW_DAY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DAY, 0);
	}
	public KW_HOUR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_HOUR, 0);
	}
	public KW_MINUTE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MINUTE, 0);
	}
	public KW_SECOND(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SECOND, 0);
	}
	public KW_MILLISECOND(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MILLISECOND, 0);
	}
	public KW_MICROSECOND(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MICROSECOND, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_timePointUnit;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTimePointUnit) {
	 		listener.enterTimePointUnit(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTimePointUnit) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_MILLENNIUM(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MILLENNIUM, 0);
	}
	public KW_CENTURY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CENTURY, 0);
	}
	public KW_DECADE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DECADE, 0);
	}
	public KW_YEAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_YEAR, 0);
	}
	public KW_YEARS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_YEARS, 0);
	}
	public KW_QUARTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_QUARTER, 0);
	}
	public KW_MONTH(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MONTH, 0);
	}
	public KW_MONTHS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MONTHS, 0);
	}
	public KW_WEEK(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WEEK, 0);
	}
	public KW_WEEKS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WEEKS, 0);
	}
	public KW_DAY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DAY, 0);
	}
	public KW_DAYS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DAYS, 0);
	}
	public KW_HOUR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_HOUR, 0);
	}
	public KW_HOURS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_HOURS, 0);
	}
	public KW_MINUTE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MINUTE, 0);
	}
	public KW_MINUTES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MINUTES, 0);
	}
	public KW_SECOND(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SECOND, 0);
	}
	public KW_SECONDS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SECONDS, 0);
	}
	public KW_MILLISECOND(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MILLISECOND, 0);
	}
	public KW_MICROSECOND(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MICROSECOND, 0);
	}
	public KW_NANOSECOND(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NANOSECOND, 0);
	}
	public KW_EPOCH(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EPOCH, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_timeIntervalUnit;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterTimeIntervalUnit) {
	 		listener.enterTimeIntervalUnit(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitTimeIntervalUnit) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_LEADING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LEADING, 0);
	}
	public KW_TRAILING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TRAILING, 0);
	}
	public KW_BOTH(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BOTH, 0);
	}
	public KW_ALL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ALL, 0);
	}
	public KW_DISTINCT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DISTINCT, 0);
	}
	public ASTERISK_SIGN(): TerminalNode {
		return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncParam;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterReservedKeywordsUsedAsFuncParam) {
	 		listener.enterReservedKeywordsUsedAsFuncParam(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitReservedKeywordsUsedAsFuncParam) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_ABS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ABS, 0);
	}
	public KW_ARRAY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ARRAY, 0);
	}
	public KW_AVG(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AVG, 0);
	}
	public KW_CAST(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CAST, 0);
	}
	public KW_CEIL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CEIL, 0);
	}
	public KW_COALESCE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_COALESCE, 0);
	}
	public KW_COLLECT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_COLLECT, 0);
	}
	public KW_COUNT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_COUNT, 0);
	}
	public KW_DATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DATE, 0);
	}
	public KW_GROUPING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_GROUPING, 0);
	}
	public KW_HOUR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_HOUR, 0);
	}
	public KW_IF(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_IF, 0);
	}
	public KW_LAG(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LAG, 0);
	}
	public KW_LEFT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LEFT, 0);
	}
	public KW_MAP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MAP, 0);
	}
	public KW_MINUTE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MINUTE, 0);
	}
	public KW_MONTH(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MONTH, 0);
	}
	public KW_OVERLAY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OVERLAY, 0);
	}
	public KW_POSITION(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_POSITION, 0);
	}
	public KW_POWER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_POWER, 0);
	}
	public KW_QUARTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_QUARTER, 0);
	}
	public KW_RANK(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RANK, 0);
	}
	public KW_RIGHT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RIGHT, 0);
	}
	public KW_SECOND(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SECOND, 0);
	}
	public KW_SUBSTRING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SUBSTRING, 0);
	}
	public KW_SUM(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SUM, 0);
	}
	public KW_TIME(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TIME, 0);
	}
	public KW_TIMESTAMP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TIMESTAMP, 0);
	}
	public KW_TRUNCATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TRUNCATE, 0);
	}
	public KW_UPPER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_UPPER, 0);
	}
	public KW_WEEK(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WEEK, 0);
	}
	public KW_YEAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_YEAR, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncName;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterReservedKeywordsUsedAsFuncName) {
	 		listener.enterReservedKeywordsUsedAsFuncName(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitReservedKeywordsUsedAsFuncName) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_ABS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ABS, 0);
	}
	public KW_ALL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ALL, 0);
	}
	public KW_ALLOW(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ALLOW, 0);
	}
	public KW_ALTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ALTER, 0);
	}
	public KW_AND(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AND, 0);
	}
	public KW_ANY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ANY, 0);
	}
	public KW_ARE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ARE, 0);
	}
	public KW_ARRAY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ARRAY, 0);
	}
	public KW_AS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AS, 0);
	}
	public KW_ASYMMETRIC(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ASYMMETRIC, 0);
	}
	public KW_AT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AT, 0);
	}
	public KW_AVG(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AVG, 0);
	}
	public KW_BEGIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BEGIN, 0);
	}
	public KW_BETWEEN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BETWEEN, 0);
	}
	public KW_BIGINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BIGINT, 0);
	}
	public KW_BINARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BINARY, 0);
	}
	public KW_BIT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BIT, 0);
	}
	public KW_BLOB(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BLOB, 0);
	}
	public KW_BOOLEAN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BOOLEAN, 0);
	}
	public KW_BOTH(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BOTH, 0);
	}
	public KW_BY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BY, 0);
	}
	public KW_CALL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CALL, 0);
	}
	public KW_CALLED(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CALLED, 0);
	}
	public KW_CASCADED(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CASCADED, 0);
	}
	public KW_CASE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CASE, 0);
	}
	public KW_CAST(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CAST, 0);
	}
	public KW_CEIL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CEIL, 0);
	}
	public KW_CHAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CHAR, 0);
	}
	public KW_CHARACTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CHARACTER, 0);
	}
	public KW_CHECK(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CHECK, 0);
	}
	public KW_CLOB(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CLOB, 0);
	}
	public KW_CLOSE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CLOSE, 0);
	}
	public KW_COALESCE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_COALESCE, 0);
	}
	public KW_COLLATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_COLLATE, 0);
	}
	public KW_COLLECT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_COLLECT, 0);
	}
	public KW_COLUMN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_COLUMN, 0);
	}
	public KW_COMMIT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_COMMIT, 0);
	}
	public KW_CONNECT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CONNECT, 0);
	}
	public KW_CONSTRAINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0);
	}
	public KW_CONTAINS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CONTAINS, 0);
	}
	public KW_CONVERT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CONVERT, 0);
	}
	public KW_COUNT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_COUNT, 0);
	}
	public KW_CREATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CREATE, 0);
	}
	public KW_CROSS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CROSS, 0);
	}
	public KW_CUBE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CUBE, 0);
	}
	public KW_CURRENT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CURRENT, 0);
	}
	public KW_CURSOR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CURSOR, 0);
	}
	public KW_CYCLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CYCLE, 0);
	}
	public KW_DATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DATE, 0);
	}
	public KW_DATETIME(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DATETIME, 0);
	}
	public KW_DAY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DAY, 0);
	}
	public KW_DEC(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DEC, 0);
	}
	public KW_DECIMAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DECIMAL, 0);
	}
	public KW_DECLARE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DECLARE, 0);
	}
	public KW_DEFAULT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DEFAULT, 0);
	}
	public KW_DEFINE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DEFINE, 0);
	}
	public KW_DELETE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DELETE, 0);
	}
	public KW_DESCRIBE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DESCRIBE, 0);
	}
	public KW_DISTINCT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DISTINCT, 0);
	}
	public KW_DOUBLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DOUBLE, 0);
	}
	public KW_DROP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DROP, 0);
	}
	public KW_EACH(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EACH, 0);
	}
	public KW_ELSE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ELSE, 0);
	}
	public KW_END(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_END, 0);
	}
	public KW_EQUALS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EQUALS, 0);
	}
	public KW_EXCEPT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EXCEPT, 0);
	}
	public KW_EXECUTE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EXECUTE, 0);
	}
	public KW_EXISTS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EXISTS, 0);
	}
	public KW_EXPLAIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EXPLAIN, 0);
	}
	public KW_EXTERNAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EXTERNAL, 0);
	}
	public KW_EXTRACT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EXTRACT, 0);
	}
	public KW_FALSE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FALSE, 0);
	}
	public KW_FLOAT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FLOAT, 0);
	}
	public KW_FOR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FOR, 0);
	}
	public KW_FROM(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FROM, 0);
	}
	public KW_FULL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FULL, 0);
	}
	public KW_FUNCTION(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FUNCTION, 0);
	}
	public KW_GLOBAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_GLOBAL, 0);
	}
	public KW_GRANT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_GRANT, 0);
	}
	public KW_GROUP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_GROUP, 0);
	}
	public KW_GROUPING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_GROUPING, 0);
	}
	public KW_GROUPS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_GROUPS, 0);
	}
	public KW_HAVING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_HAVING, 0);
	}
	public KW_HOUR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_HOUR, 0);
	}
	public KW_IMPORT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_IMPORT, 0);
	}
	public KW_IN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_IN, 0);
	}
	public KW_INCLUDING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INCLUDING, 0);
	}
	public KW_INNER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INNER, 0);
	}
	public KW_INOUT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INOUT, 0);
	}
	public KW_INSERT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INSERT, 0);
	}
	public KW_INT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INT, 0);
	}
	public KW_INTEGER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INTEGER, 0);
	}
	public KW_INTERSECT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INTERSECT, 0);
	}
	public KW_INTERVAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INTERVAL, 0);
	}
	public KW_INTO(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INTO, 0);
	}
	public KW_IS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_IS, 0);
	}
	public KW_JOIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_JOIN, 0);
	}
	public KW_LAG(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LAG, 0);
	}
	public KW_LANGUAGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LANGUAGE, 0);
	}
	public KW_LATERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LATERAL, 0);
	}
	public KW_LEADING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LEADING, 0);
	}
	public KW_LEFT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LEFT, 0);
	}
	public KW_LIKE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LIKE, 0);
	}
	public KW_LIMIT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LIMIT, 0);
	}
	public KW_LOCAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LOCAL, 0);
	}
	public KW_MATCH(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MATCH, 0);
	}
	public KW_MATCH_RECOGNIZE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MATCH_RECOGNIZE, 0);
	}
	public KW_MEASURES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MEASURES, 0);
	}
	public KW_MERGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MERGE, 0);
	}
	public KW_METADATA(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_METADATA, 0);
	}
	public KW_MINUS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MINUS, 0);
	}
	public KW_MINUTE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MINUTE, 0);
	}
	public KW_MODIFIES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MODIFIES, 0);
	}
	public KW_MODULE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MODULE, 0);
	}
	public KW_MONTH(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MONTH, 0);
	}
	public KW_MULTISET(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MULTISET, 0);
	}
	public KW_NATURAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NATURAL, 0);
	}
	public KW_NEXT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NEXT, 0);
	}
	public KW_NO(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NO, 0);
	}
	public KW_NONE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NONE, 0);
	}
	public KW_NOT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NOT, 0);
	}
	public KW_NULL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NULL, 0);
	}
	public KW_NUMERIC(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NUMERIC, 0);
	}
	public KW_OF(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OF, 0);
	}
	public KW_OFFSET(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OFFSET, 0);
	}
	public KW_ON(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ON, 0);
	}
	public KW_ONE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ONE, 0);
	}
	public KW_OR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OR, 0);
	}
	public KW_ORDER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ORDER, 0);
	}
	public KW_OUT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OUT, 0);
	}
	public KW_OUTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OUTER, 0);
	}
	public KW_OVER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OVER, 0);
	}
	public KW_OVERLAY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OVERLAY, 0);
	}
	public KW_PARTITION(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PARTITION, 0);
	}
	public KW_PATTERN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PATTERN, 0);
	}
	public KW_PER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PER, 0);
	}
	public KW_PERCENT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PERCENT, 0);
	}
	public KW_PERIOD(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PERIOD, 0);
	}
	public KW_POSITION(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_POSITION, 0);
	}
	public KW_PRIMARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PRIMARY, 0);
	}
	public KW_RANGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RANGE, 0);
	}
	public KW_RANK(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RANK, 0);
	}
	public KW_RESET(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RESET, 0);
	}
	public KW_REVOKE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_REVOKE, 0);
	}
	public KW_RIGHT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RIGHT, 0);
	}
	public KW_RLIKE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RLIKE, 0);
	}
	public KW_ROLLBACK(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ROLLBACK, 0);
	}
	public KW_ROLLUP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ROLLUP, 0);
	}
	public KW_ROW(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ROW, 0);
	}
	public KW_ROWS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ROWS, 0);
	}
	public KW_SECOND(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SECOND, 0);
	}
	public KW_SELECT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SELECT, 0);
	}
	public KW_SET(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SET, 0);
	}
	public KW_SHOW(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SHOW, 0);
	}
	public KW_SIMILAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SIMILAR, 0);
	}
	public KW_SKIP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SKIP, 0);
	}
	public KW_SMALLINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SMALLINT, 0);
	}
	public KW_START(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_START, 0);
	}
	public KW_STATIC(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_STATIC, 0);
	}
	public KW_SUBSTRING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SUBSTRING, 0);
	}
	public KW_SUM(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SUM, 0);
	}
	public KW_SYSTEM_TIME(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SYSTEM_TIME, 0);
	}
	public KW_SYSTEM(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SYSTEM, 0);
	}
	public KW_SYSTEM_USER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SYSTEM_USER, 0);
	}
	public KW_TABLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TABLE, 0);
	}
	public KW_TABLESAMPLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TABLESAMPLE, 0);
	}
	public KW_THEN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_THEN, 0);
	}
	public KW_TIME(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TIME, 0);
	}
	public KW_TIMESTAMP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TIMESTAMP, 0);
	}
	public KW_TINYINT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TINYINT, 0);
	}
	public KW_TO(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TO, 0);
	}
	public KW_TRUE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TRUE, 0);
	}
	public KW_TRUNCATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TRUNCATE, 0);
	}
	public KW_UNION(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_UNION, 0);
	}
	public KW_UNIQUE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_UNIQUE, 0);
	}
	public KW_UNKNOWN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_UNKNOWN, 0);
	}
	public KW_UNNEST(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_UNNEST, 0);
	}
	public KW_UPPER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_UPPER, 0);
	}
	public KW_UPSERT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_UPSERT, 0);
	}
	public KW_USER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_USER, 0);
	}
	public KW_USING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_USING, 0);
	}
	public KW_VALUE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_VALUE, 0);
	}
	public KW_VALUES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_VALUES, 0);
	}
	public KW_VARBINARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_VARBINARY, 0);
	}
	public KW_VARCHAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_VARCHAR, 0);
	}
	public KW_WHEN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WHEN, 0);
	}
	public KW_WHERE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WHERE, 0);
	}
	public KW_WINDOW(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WINDOW, 0);
	}
	public KW_WITH(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WITH, 0);
	}
	public KW_WITHIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WITHIN, 0);
	}
	public KW_WITHOUT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WITHOUT, 0);
	}
	public KW_YEAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_YEAR, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_reservedKeywords;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterReservedKeywords) {
	 		listener.enterReservedKeywords(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitReservedKeywords) {
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
	constructor(parser?: FlinkSqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KW_ADD(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ADD, 0);
	}
	public KW_ADMIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ADMIN, 0);
	}
	public KW_AFTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_AFTER, 0);
	}
	public KW_ANALYZE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ANALYZE, 0);
	}
	public KW_ASC(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ASC, 0);
	}
	public KW_BEFORE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BEFORE, 0);
	}
	public KW_BYTES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_BYTES, 0);
	}
	public KW_CASCADE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CASCADE, 0);
	}
	public KW_CATALOG(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CATALOG, 0);
	}
	public KW_CATALOGS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CATALOGS, 0);
	}
	public KW_CENTURY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CENTURY, 0);
	}
	public KW_CHAIN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CHAIN, 0);
	}
	public KW_CHANGELOG_MODE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CHANGELOG_MODE, 0);
	}
	public KW_CHARACTERS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CHARACTERS, 0);
	}
	public KW_COMMENT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_COMMENT, 0);
	}
	public KW_COMPACT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_COMPACT, 0);
	}
	public KW_COLUMNS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_COLUMNS, 0);
	}
	public KW_CONSTRAINTS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CONSTRAINTS, 0);
	}
	public KW_CONSTRUCTOR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CONSTRUCTOR, 0);
	}
	public KW_CUMULATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_CUMULATE, 0);
	}
	public KW_DATA(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DATA, 0);
	}
	public KW_DATABASE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DATABASE, 0);
	}
	public KW_DATABASES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DATABASES, 0);
	}
	public KW_DAYS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DAYS, 0);
	}
	public KW_DECADE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DECADE, 0);
	}
	public KW_DEFINED(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DEFINED, 0);
	}
	public KW_DESC(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DESC, 0);
	}
	public KW_DESCRIPTOR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DESCRIPTOR, 0);
	}
	public KW_DIV(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_DIV, 0);
	}
	public KW_ENCODING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ENCODING, 0);
	}
	public KW_ENFORCED(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ENFORCED, 0);
	}
	public KW_ENGINE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ENGINE, 0);
	}
	public KW_ERROR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ERROR, 0);
	}
	public KW_ESTIMATED_COST(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ESTIMATED_COST, 0);
	}
	public KW_EXCEPTION(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EXCEPTION, 0);
	}
	public KW_EXCLUDE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EXCLUDE, 0);
	}
	public KW_EXCLUDING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EXCLUDING, 0);
	}
	public KW_EXTENDED(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_EXTENDED, 0);
	}
	public KW_FILE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FILE, 0);
	}
	public KW_FINAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FINAL, 0);
	}
	public KW_FIRST(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FIRST, 0);
	}
	public KW_FOLLOWING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FOLLOWING, 0);
	}
	public KW_FORMAT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FORMAT, 0);
	}
	public KW_FORTRAN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FORTRAN, 0);
	}
	public KW_FOUND(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FOUND, 0);
	}
	public KW_FRAC_SECOND(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FRAC_SECOND, 0);
	}
	public KW_FUNCTIONS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_FUNCTIONS, 0);
	}
	public KW_GENERAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_GENERAL, 0);
	}
	public KW_GENERATED(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_GENERATED, 0);
	}
	public KW_GO(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_GO, 0);
	}
	public KW_GOTO(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_GOTO, 0);
	}
	public KW_GRANTED(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_GRANTED, 0);
	}
	public KW_HOP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_HOP, 0);
	}
	public KW_HOURS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_HOURS, 0);
	}
	public KW_IF(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_IF, 0);
	}
	public KW_IGNORE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_IGNORE, 0);
	}
	public KW_INCREMENT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INCREMENT, 0);
	}
	public KW_INPUT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INPUT, 0);
	}
	public KW_INVOKER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_INVOKER, 0);
	}
	public KW_JAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_JAR, 0);
	}
	public KW_JARS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_JARS, 0);
	}
	public KW_JAVA(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_JAVA, 0);
	}
	public KW_JSON(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_JSON, 0);
	}
	public KW_JSON_EXECUTION_PLAN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_JSON_EXECUTION_PLAN, 0);
	}
	public KW_KEY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_KEY, 0);
	}
	public KW_KEY_MEMBER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_KEY_MEMBER, 0);
	}
	public KW_KEY_TYPE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_KEY_TYPE, 0);
	}
	public KW_LABEL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LABEL, 0);
	}
	public KW_LAST(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LAST, 0);
	}
	public KW_LENGTH(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LENGTH, 0);
	}
	public KW_LEVEL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LEVEL, 0);
	}
	public KW_LOAD(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_LOAD, 0);
	}
	public KW_MAP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MAP, 0);
	}
	public KW_MICROSECOND(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MICROSECOND, 0);
	}
	public KW_MILLENNIUM(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MILLENNIUM, 0);
	}
	public KW_MILLISECOND(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MILLISECOND, 0);
	}
	public KW_MINUTES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MINUTES, 0);
	}
	public KW_MINVALUE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MINVALUE, 0);
	}
	public KW_MODIFY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MODIFY, 0);
	}
	public KW_MODULES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MODULES, 0);
	}
	public KW_MONTHS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_MONTHS, 0);
	}
	public KW_NANOSECOND(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NANOSECOND, 0);
	}
	public KW_NULLS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NULLS, 0);
	}
	public KW_NUMBER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_NUMBER, 0);
	}
	public KW_OPTION(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OPTION, 0);
	}
	public KW_OPTIONS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OPTIONS, 0);
	}
	public KW_ORDERING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ORDERING, 0);
	}
	public KW_OUTPUT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OUTPUT, 0);
	}
	public KW_OVERWRITE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OVERWRITE, 0);
	}
	public KW_OVERWRITING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_OVERWRITING, 0);
	}
	public KW_PARTITIONED(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PARTITIONED, 0);
	}
	public KW_PARTITIONS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PARTITIONS, 0);
	}
	public KW_PASSING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PASSING, 0);
	}
	public KW_PAST(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PAST, 0);
	}
	public KW_PATH(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PATH, 0);
	}
	public KW_PLACING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PLACING, 0);
	}
	public KW_PLAN(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PLAN, 0);
	}
	public KW_PRECEDING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PRECEDING, 0);
	}
	public KW_PRESERVE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PRESERVE, 0);
	}
	public KW_PRIOR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PRIOR, 0);
	}
	public KW_PRIVILEGES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PRIVILEGES, 0);
	}
	public KW_PUBLIC(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PUBLIC, 0);
	}
	public KW_PYTHON(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PYTHON, 0);
	}
	public KW_PYTHON_FILES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PYTHON_FILES, 0);
	}
	public KW_PYTHON_REQUIREMENTS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PYTHON_REQUIREMENTS, 0);
	}
	public KW_PYTHON_DEPENDENCIES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PYTHON_DEPENDENCIES, 0);
	}
	public KW_PYTHON_JAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PYTHON_JAR, 0);
	}
	public KW_PYTHON_ARCHIVES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PYTHON_ARCHIVES, 0);
	}
	public KW_PYTHON_PARAMETER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_PYTHON_PARAMETER, 0);
	}
	public KW_QUARTER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_QUARTER, 0);
	}
	public KW_RAW(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RAW, 0);
	}
	public KW_READ(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_READ, 0);
	}
	public KW_RELATIVE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RELATIVE, 0);
	}
	public KW_REMOVE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_REMOVE, 0);
	}
	public KW_RENAME(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RENAME, 0);
	}
	public KW_REPLACE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_REPLACE, 0);
	}
	public KW_RESPECT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RESPECT, 0);
	}
	public KW_RESTART(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RESTART, 0);
	}
	public KW_RESTRICT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_RESTRICT, 0);
	}
	public KW_ROLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ROLE, 0);
	}
	public KW_ROW_COUNT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ROW_COUNT, 0);
	}
	public KW_SCALA(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SCALA, 0);
	}
	public KW_SCALAR(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SCALAR, 0);
	}
	public KW_SCALE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SCALE, 0);
	}
	public KW_SCHEMA(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SCHEMA, 0);
	}
	public KW_SECONDS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SECONDS, 0);
	}
	public KW_SECTION(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SECTION, 0);
	}
	public KW_SECURITY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SECURITY, 0);
	}
	public KW_SELF(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SELF, 0);
	}
	public KW_SERVER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SERVER, 0);
	}
	public KW_SERVER_NAME(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SERVER_NAME, 0);
	}
	public KW_SESSION(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SESSION, 0);
	}
	public KW_SETS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SETS, 0);
	}
	public KW_SIMPLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SIMPLE, 0);
	}
	public KW_SIZE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SIZE, 0);
	}
	public KW_SLIDE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SLIDE, 0);
	}
	public KW_SOURCE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SOURCE, 0);
	}
	public KW_SPACE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_SPACE, 0);
	}
	public KW_STATE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_STATE, 0);
	}
	public KW_STATEMENT(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_STATEMENT, 0);
	}
	public KW_STEP(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_STEP, 0);
	}
	public KW_STRING(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_STRING, 0);
	}
	public KW_STRUCTURE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_STRUCTURE, 0);
	}
	public KW_STYLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_STYLE, 0);
	}
	public KW_TABLES(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TABLES, 0);
	}
	public KW_TEMPORARY(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
	}
	public KW_TIMECOL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TIMECOL, 0);
	}
	public KW_TIMESTAMP_LTZ(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TIMESTAMP_LTZ, 0);
	}
	public KW_TIMESTAMPADD(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TIMESTAMPADD, 0);
	}
	public KW_TIMESTAMPDIFF(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TIMESTAMPDIFF, 0);
	}
	public KW_TRANSFORM(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TRANSFORM, 0);
	}
	public KW_TUMBLE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TUMBLE, 0);
	}
	public KW_TYPE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_TYPE, 0);
	}
	public KW_UNDER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_UNDER, 0);
	}
	public KW_UNLOAD(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_UNLOAD, 0);
	}
	public KW_USAGE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_USAGE, 0);
	}
	public KW_USE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_USE, 0);
	}
	public KW_UTF16(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_UTF16, 0);
	}
	public KW_UTF32(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_UTF32, 0);
	}
	public KW_UTF8(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_UTF8, 0);
	}
	public KW_VERSION(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_VERSION, 0);
	}
	public KW_VIEW(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_VIEW, 0);
	}
	public KW_VIEWS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_VIEWS, 0);
	}
	public KW_VIRTUAL(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_VIRTUAL, 0);
	}
	public KW_WATERMARK(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WATERMARK, 0);
	}
	public KW_WATERMARKS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WATERMARKS, 0);
	}
	public KW_WEEK(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WEEK, 0);
	}
	public KW_WORK(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WORK, 0);
	}
	public KW_WRAPPER(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_WRAPPER, 0);
	}
	public KW_YEARS(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_YEARS, 0);
	}
	public KW_ZONE(): TerminalNode {
		return this.getToken(FlinkSqlParser.KW_ZONE, 0);
	}
    public get ruleIndex(): number {
    	return FlinkSqlParser.RULE_nonReservedKeywords;
	}
	public enterRule(listener: FlinkSqlParserListener): void {
	    if(listener.enterNonReservedKeywords) {
	 		listener.enterNonReservedKeywords(this);
		}
	}
	public exitRule(listener: FlinkSqlParserListener): void {
	    if(listener.exitNonReservedKeywords) {
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
