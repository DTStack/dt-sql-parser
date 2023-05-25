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
	public static readonly FILE_PATH = 410;
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
	public static readonly RULE_createTable = 20;
	public static readonly RULE_simpleCreateTable = 21;
	public static readonly RULE_createTableAsSelect = 22;
	public static readonly RULE_columnOptionDefinition = 23;
	public static readonly RULE_physicalColumnDefinition = 24;
	public static readonly RULE_columnName = 25;
	public static readonly RULE_columnNameList = 26;
	public static readonly RULE_columnType = 27;
	public static readonly RULE_lengthOneDimension = 28;
	public static readonly RULE_lengthTwoOptionalDimension = 29;
	public static readonly RULE_lengthTwoStringDimension = 30;
	public static readonly RULE_lengthOneTypeDimension = 31;
	public static readonly RULE_mapTypeDimension = 32;
	public static readonly RULE_rowTypeDimension = 33;
	public static readonly RULE_columnConstraint = 34;
	public static readonly RULE_commentSpec = 35;
	public static readonly RULE_metadataColumnDefinition = 36;
	public static readonly RULE_metadataKey = 37;
	public static readonly RULE_computedColumnDefinition = 38;
	public static readonly RULE_computedColumnExpression = 39;
	public static readonly RULE_watermarkDefinition = 40;
	public static readonly RULE_tableConstraint = 41;
	public static readonly RULE_constraintName = 42;
	public static readonly RULE_selfDefinitionClause = 43;
	public static readonly RULE_partitionDefinition = 44;
	public static readonly RULE_transformList = 45;
	public static readonly RULE_transform = 46;
	public static readonly RULE_transformArgument = 47;
	public static readonly RULE_likeDefinition = 48;
	public static readonly RULE_sourceTable = 49;
	public static readonly RULE_likeOption = 50;
	public static readonly RULE_createCatalog = 51;
	public static readonly RULE_createDatabase = 52;
	public static readonly RULE_createView = 53;
	public static readonly RULE_createFunction = 54;
	public static readonly RULE_usingClause = 55;
	public static readonly RULE_jarFileName = 56;
	public static readonly RULE_alterTable = 57;
	public static readonly RULE_renameDefinition = 58;
	public static readonly RULE_setKeyValueDefinition = 59;
	public static readonly RULE_addConstraint = 60;
	public static readonly RULE_dropConstraint = 61;
	public static readonly RULE_addUnique = 62;
	public static readonly RULE_notForced = 63;
	public static readonly RULE_alertView = 64;
	public static readonly RULE_alterDatabase = 65;
	public static readonly RULE_alterFunction = 66;
	public static readonly RULE_dropCatalog = 67;
	public static readonly RULE_dropTable = 68;
	public static readonly RULE_dropDatabase = 69;
	public static readonly RULE_dropView = 70;
	public static readonly RULE_dropFunction = 71;
	public static readonly RULE_insertStatement = 72;
	public static readonly RULE_insertSimpleStatement = 73;
	public static readonly RULE_insertPartitionDefinition = 74;
	public static readonly RULE_valuesDefinition = 75;
	public static readonly RULE_valuesRowDefinition = 76;
	public static readonly RULE_insertMulStatementCompatibility = 77;
	public static readonly RULE_insertMulStatement = 78;
	public static readonly RULE_queryStatement = 79;
	public static readonly RULE_valuesCaluse = 80;
	public static readonly RULE_withClause = 81;
	public static readonly RULE_withItem = 82;
	public static readonly RULE_withItemName = 83;
	public static readonly RULE_selectStatement = 84;
	public static readonly RULE_selectClause = 85;
	public static readonly RULE_projectItemDefinition = 86;
	public static readonly RULE_overWindowItem = 87;
	public static readonly RULE_fromClause = 88;
	public static readonly RULE_tableExpression = 89;
	public static readonly RULE_tableReference = 90;
	public static readonly RULE_tablePrimary = 91;
	public static readonly RULE_tablePath = 92;
	public static readonly RULE_systemTimePeriod = 93;
	public static readonly RULE_dateTimeExpression = 94;
	public static readonly RULE_inlineDataValueClause = 95;
	public static readonly RULE_windoTVFClause = 96;
	public static readonly RULE_windowTVFExression = 97;
	public static readonly RULE_windoTVFName = 98;
	public static readonly RULE_windowTVFParam = 99;
	public static readonly RULE_timeIntervalParamName = 100;
	public static readonly RULE_columnDescriptor = 101;
	public static readonly RULE_joinCondition = 102;
	public static readonly RULE_whereClause = 103;
	public static readonly RULE_groupByClause = 104;
	public static readonly RULE_groupItemDefinition = 105;
	public static readonly RULE_groupingSets = 106;
	public static readonly RULE_groupingSetsNotaionName = 107;
	public static readonly RULE_groupWindowFunction = 108;
	public static readonly RULE_groupWindowFunctionName = 109;
	public static readonly RULE_timeAttrColumn = 110;
	public static readonly RULE_havingClause = 111;
	public static readonly RULE_windowClause = 112;
	public static readonly RULE_namedWindow = 113;
	public static readonly RULE_windowSpec = 114;
	public static readonly RULE_matchRecognizeClause = 115;
	public static readonly RULE_orderByCaluse = 116;
	public static readonly RULE_orderItemDefition = 117;
	public static readonly RULE_limitClause = 118;
	public static readonly RULE_partitionByClause = 119;
	public static readonly RULE_quantifiers = 120;
	public static readonly RULE_measuresClause = 121;
	public static readonly RULE_patternDefination = 122;
	public static readonly RULE_patternVariable = 123;
	public static readonly RULE_outputMode = 124;
	public static readonly RULE_afterMatchStrategy = 125;
	public static readonly RULE_patternVariablesDefination = 126;
	public static readonly RULE_windowFrame = 127;
	public static readonly RULE_frameBound = 128;
	public static readonly RULE_withinClause = 129;
	public static readonly RULE_expression = 130;
	public static readonly RULE_booleanExpression = 131;
	public static readonly RULE_predicate = 132;
	public static readonly RULE_likePredicate = 133;
	public static readonly RULE_valueExpression = 134;
	public static readonly RULE_primaryExpression = 135;
	public static readonly RULE_functionName = 136;
	public static readonly RULE_functionParam = 137;
	public static readonly RULE_dereferenceDefinition = 138;
	public static readonly RULE_correlationName = 139;
	public static readonly RULE_qualifiedName = 140;
	public static readonly RULE_timeIntervalExpression = 141;
	public static readonly RULE_errorCapturingMultiUnitsInterval = 142;
	public static readonly RULE_multiUnitsInterval = 143;
	public static readonly RULE_errorCapturingUnitToUnitInterval = 144;
	public static readonly RULE_unitToUnitInterval = 145;
	public static readonly RULE_intervalValue = 146;
	public static readonly RULE_columnAlias = 147;
	public static readonly RULE_tableAlias = 148;
	public static readonly RULE_errorCapturingIdentifier = 149;
	public static readonly RULE_errorCapturingIdentifierExtra = 150;
	public static readonly RULE_identifierList = 151;
	public static readonly RULE_identifierSeq = 152;
	public static readonly RULE_identifier = 153;
	public static readonly RULE_unquotedIdentifier = 154;
	public static readonly RULE_quotedIdentifier = 155;
	public static readonly RULE_whenClause = 156;
	public static readonly RULE_uid = 157;
	public static readonly RULE_withOption = 158;
	public static readonly RULE_ifNotExists = 159;
	public static readonly RULE_ifExists = 160;
	public static readonly RULE_tablePropertyList = 161;
	public static readonly RULE_tableProperty = 162;
	public static readonly RULE_tablePropertyKey = 163;
	public static readonly RULE_tablePropertyValue = 164;
	public static readonly RULE_logicalOperator = 165;
	public static readonly RULE_comparisonOperator = 166;
	public static readonly RULE_bitOperator = 167;
	public static readonly RULE_mathOperator = 168;
	public static readonly RULE_unaryOperator = 169;
	public static readonly RULE_constant = 170;
	public static readonly RULE_timePointLiteral = 171;
	public static readonly RULE_stringLiteral = 172;
	public static readonly RULE_decimalLiteral = 173;
	public static readonly RULE_booleanLiteral = 174;
	public static readonly RULE_setQuantifier = 175;
	public static readonly RULE_timePointUnit = 176;
	public static readonly RULE_timeIntervalUnit = 177;
	public static readonly RULE_reservedKeywordsUsedAsFuncParam = 178;
	public static readonly RULE_reservedKeywordsUsedAsFuncName = 179;
	public static readonly RULE_reservedKeywords = 180;
	public static readonly RULE_nonReservedKeywords = 181;
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
                                                             "FILE_PATH" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "sqlStatements", "sqlStatement", "emptyStatement", 
		"ddlStatement", "dmlStatement", "describeStatement", "explainStatement", 
		"explainDetails", "explainDetail", "useStatement", "useModuleStatement", 
		"showStatememt", "loadStatement", "unloadStatememt", "setStatememt", "resetStatememt", 
		"jarStatememt", "dtAddStatement", "createTable", "simpleCreateTable", 
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
			this.state = 364;
			this.statement();
			this.state = 365;
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
			this.state = 367;
			this.sqlStatements();
			this.state = 368;
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
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4 || _la===30 || _la===76 || _la===118 || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & 1075838981) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & 168067073) !== 0) || _la===267 || ((((_la - 321)) & ~0x1F) === 0 && ((1 << (_la - 321)) & 3585) !== 0) || ((((_la - 363)) & ~0x1F) === 0 && ((1 << (_la - 363)) & 69206081) !== 0)) {
				{
				this.state = 375;
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
					this.state = 370;
					this.sqlStatement();
					this.state = 372;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 371;
						this.match(FlinkSqlParser.SEMICOLON);
						}
						break;
					}
					}
					break;
				case 389:
					{
					this.state = 374;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 379;
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
			this.state = 392;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 380;
				this.ddlStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 381;
				this.dmlStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 382;
				this.describeStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 383;
				this.explainStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 384;
				this.useStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 385;
				this.showStatememt();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 386;
				this.loadStatement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 387;
				this.unloadStatememt();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 388;
				this.setStatememt();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 389;
				this.resetStatememt();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 390;
				this.jarStatememt();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 391;
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
			this.state = 394;
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
			this.state = 410;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 396;
				this.createTable();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 397;
				this.createDatabase();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 398;
				this.createView();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 399;
				this.createFunction();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 400;
				this.createCatalog();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 401;
				this.alterTable();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 402;
				this.alertView();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 403;
				this.alterDatabase();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 404;
				this.alterFunction();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 405;
				this.dropCatalog();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 406;
				this.dropTable();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 407;
				this.dropDatabase();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 408;
				this.dropView();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 409;
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
			this.state = 414;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 330:
			case 363:
			case 369:
			case 384:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 412;
				this.queryStatement(0);
				}
				break;
			case 189:
			case 244:
			case 267:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 413;
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
			this.state = 416;
			_la = this._input.LA(1);
			if(!(_la===30 || _la===234)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 417;
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
			this.state = 419;
			this.match(FlinkSqlParser.KW_EXPLAIN);
			this.state = 423;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
			case 38:
			case 68:
				{
				this.state = 420;
				this.explainDetails();
				}
				break;
			case 101:
				{
				this.state = 421;
				this.match(FlinkSqlParser.KW_PLAN);
				this.state = 422;
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
			this.state = 428;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 425;
				this.dmlStatement();
				}
				break;
			case 2:
				{
				this.state = 426;
				this.insertSimpleStatement();
				}
				break;
			case 3:
				{
				this.state = 427;
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
			this.state = 430;
			this.explainDetail();
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
				{
				{
				this.state = 431;
				this.match(FlinkSqlParser.COMMA);
				this.state = 432;
				this.explainDetail();
				}
				}
				this.state = 437;
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
			this.state = 438;
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
			this.state = 446;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 440;
				this.match(FlinkSqlParser.KW_USE);
				this.state = 442;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 441;
					this.match(FlinkSqlParser.KW_CATALOG);
					}
					break;
				}
				this.state = 444;
				this.uid();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 445;
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
			this.state = 448;
			this.match(FlinkSqlParser.KW_USE);
			this.state = 449;
			this.match(FlinkSqlParser.KW_MODULES);
			this.state = 450;
			this.uid();
			this.state = 455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
				{
				{
				this.state = 451;
				this.match(FlinkSqlParser.COMMA);
				this.state = 452;
				this.uid();
				}
				}
				this.state = 457;
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
			this.state = 493;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 458;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 459;
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
				this.state = 460;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 461;
				this.match(FlinkSqlParser.KW_CURRENT);
				this.state = 462;
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
				this.state = 463;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 464;
				this.match(FlinkSqlParser.KW_TABLES);
				this.state = 467;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===252 || _la===263) {
					{
					this.state = 465;
					_la = this._input.LA(1);
					if(!(_la===252 || _la===263)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 466;
					this.uid();
					}
				}

				this.state = 470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===280 || _la===298) {
					{
					this.state = 469;
					this.likePredicate();
					}
				}

				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 472;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 473;
				this.match(FlinkSqlParser.KW_COLUMNS);
				this.state = 474;
				_la = this._input.LA(1);
				if(!(_la===252 || _la===263)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 475;
				this.uid();
				this.state = 477;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===280 || _la===298) {
					{
					this.state = 476;
					this.likePredicate();
					}
				}

				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 479;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 480;
				this.match(FlinkSqlParser.KW_CREATE);
				this.state = 481;
				_la = this._input.LA(1);
				if(!(_la===166 || _la===344)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 482;
				this.uid();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 483;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===360) {
					{
					this.state = 484;
					this.match(FlinkSqlParser.KW_USER);
					}
				}

				this.state = 487;
				this.match(FlinkSqlParser.KW_FUNCTIONS);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 488;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===253) {
					{
					this.state = 489;
					this.match(FlinkSqlParser.KW_FULL);
					}
				}

				this.state = 492;
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
			this.state = 495;
			this.match(FlinkSqlParser.KW_LOAD);
			this.state = 496;
			this.match(FlinkSqlParser.KW_MODULE);
			this.state = 497;
			this.uid();
			this.state = 500;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 498;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 499;
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
			this.state = 502;
			this.match(FlinkSqlParser.KW_UNLOAD);
			this.state = 503;
			this.match(FlinkSqlParser.KW_MODULE);
			this.state = 504;
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
			this.state = 506;
			this.match(FlinkSqlParser.KW_SET);
			this.state = 508;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 507;
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
			this.state = 510;
			this.match(FlinkSqlParser.KW_RESET);
			this.state = 512;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 511;
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
			this.state = 514;
			_la = this._input.LA(1);
			if(!(_la===4 || _la===118)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 515;
			this.match(FlinkSqlParser.KW_JAR);
			this.state = 516;
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
			this.state = 557;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 518;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 519;
				this.match(FlinkSqlParser.KW_JAR);
				this.state = 520;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 521;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 524;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===185) {
					{
					this.state = 522;
					this.match(FlinkSqlParser.KW_AS);
					this.state = 523;
					this.uid();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 526;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 527;
				this.match(FlinkSqlParser.KW_FILE);
				this.state = 528;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 529;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 532;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===185) {
					{
					this.state = 530;
					this.match(FlinkSqlParser.KW_AS);
					this.state = 531;
					this.uid();
					}
				}

				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===119) {
					{
					this.state = 534;
					this.match(FlinkSqlParser.KW_RENAME);
					this.state = 535;
					this.uid();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 538;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 539;
				_la = this._input.LA(1);
				if(!(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & 31) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 540;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 541;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 542;
				this.match(FlinkSqlParser.KW_RENAME);
				this.state = 543;
				this.uid();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 544;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 545;
				this.match(FlinkSqlParser.KW_PYTHON_PARAMETER);
				this.state = 546;
				this.match(FlinkSqlParser.FILE_PATH);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 547;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 548;
				this.match(FlinkSqlParser.KW_ENGINE);
				this.state = 549;
				this.match(FlinkSqlParser.KW_FILE);
				this.state = 550;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 551;
				this.match(FlinkSqlParser.FILE_PATH);
				this.state = 552;
				this.match(FlinkSqlParser.KW_RENAME);
				this.state = 553;
				this.uid();
				this.state = 554;
				this.match(FlinkSqlParser.KW_KEY);
				this.state = 555;
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
	public createTable(): CreateTableContext {
		let localctx: CreateTableContext = new CreateTableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, FlinkSqlParser.RULE_createTable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 561;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 559;
				this.simpleCreateTable();
				}
				break;
			case 2:
				{
				this.state = 560;
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
		this.enterRule(localctx, 42, FlinkSqlParser.RULE_simpleCreateTable);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 563;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 565;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===150) {
				{
				this.state = 564;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 567;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 569;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 568;
				this.ifNotExists();
				}
				break;
			}
			this.state = 571;
			this.sourceTable();
			this.state = 572;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 573;
			this.columnOptionDefinition();
			this.state = 578;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 574;
					this.match(FlinkSqlParser.COMMA);
					this.state = 575;
					this.columnOptionDefinition();
					}
					}
				}
				this.state = 580;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 583;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 581;
				this.match(FlinkSqlParser.COMMA);
				this.state = 582;
				this.watermarkDefinition();
				}
				break;
			}
			this.state = 587;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 585;
				this.match(FlinkSqlParser.COMMA);
				this.state = 586;
				this.tableConstraint();
				}
				break;
			}
			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===388) {
				{
				this.state = 589;
				this.match(FlinkSqlParser.COMMA);
				this.state = 590;
				this.selfDefinitionClause();
				}
			}

			this.state = 593;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 594;
				this.commentSpec();
				}
			}

			this.state = 598;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===95) {
				{
				this.state = 597;
				this.partitionDefinition();
				}
			}

			this.state = 600;
			this.withOption();
			this.state = 602;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===280) {
				{
				this.state = 601;
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
		this.enterRule(localctx, 44, FlinkSqlParser.RULE_createTableAsSelect);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 604;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 605;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 607;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 606;
				this.ifNotExists();
				}
				break;
			}
			this.state = 609;
			this.sourceTable();
			this.state = 610;
			this.withOption();
			this.state = 613;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===185) {
				{
				this.state = 611;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 612;
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
		this.enterRule(localctx, 46, FlinkSqlParser.RULE_columnOptionDefinition);
		try {
			this.state = 618;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 615;
				this.physicalColumnDefinition();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 616;
				this.metadataColumnDefinition();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 617;
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
		this.enterRule(localctx, 48, FlinkSqlParser.RULE_physicalColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 620;
			this.columnName();
			this.state = 621;
			this.columnType();
			this.state = 623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===215 || ((((_la - 298)) & ~0x1F) === 0 && ((1 << (_la - 298)) & 1048579) !== 0)) {
				{
				this.state = 622;
				this.columnConstraint();
				}
			}

			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 625;
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
		this.enterRule(localctx, 50, FlinkSqlParser.RULE_columnName);
		try {
			this.state = 630;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 628;
				this.uid();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 629;
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
		this.enterRule(localctx, 52, FlinkSqlParser.RULE_columnNameList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 632;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 633;
			this.columnName();
			this.state = 638;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
				{
				{
				this.state = 634;
				this.match(FlinkSqlParser.COMMA);
				this.state = 635;
				this.columnName();
				}
				}
				this.state = 640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 641;
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
		this.enterRule(localctx, 54, FlinkSqlParser.RULE_columnType);
		let _la: number;
		try {
			this.state = 680;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 195:
			case 225:
			case 299:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 643;
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
				this.state = 644;
				localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===10 || _la===146 || _la===152 || ((((_la - 191)) & ~0x1F) === 0 && ((1 << (_la - 191)) & 8195) !== 0) || _la===226 || _la===268 || _la===269 || ((((_la - 335)) & ~0x1F) === 0 && ((1 << (_la - 335)) & 1610633217) !== 0))) {
				    localctx._typeName = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 646;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===384) {
					{
					this.state = 645;
					this.lengthOneDimension();
					}
				}

				}
				break;
			case 348:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 648;
				localctx._typeName = this.match(FlinkSqlParser.KW_TIMESTAMP);
				this.state = 650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===384) {
					{
					this.state = 649;
					this.lengthOneDimension();
					}
				}

				this.state = 658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===369 || _la===371) {
					{
					this.state = 652;
					_la = this._input.LA(1);
					if(!(_la===369 || _la===371)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 654;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===282) {
						{
						this.state = 653;
						this.match(FlinkSqlParser.KW_LOCAL);
						}
					}

					this.state = 656;
					this.match(FlinkSqlParser.KW_TIME);
					this.state = 657;
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
				this.state = 660;
				localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 4194563) !== 0) || _la===300)) {
				    localctx._typeName = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 662;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===384) {
					{
					this.state = 661;
					this.lengthTwoOptionalDimension();
					}
				}

				}
				break;
			case 184:
			case 293:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 664;
				localctx._type_ = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===184 || _la===293)) {
				    localctx._type_ = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===375) {
					{
					this.state = 665;
					this.lengthOneTypeDimension();
					}
				}

				}
				break;
			case 77:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 668;
				localctx._type_ = this.match(FlinkSqlParser.KW_MAP);
				this.state = 670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===375) {
					{
					this.state = 669;
					this.mapTypeDimension();
					}
				}

				}
				break;
			case 327:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 672;
				localctx._type_ = this.match(FlinkSqlParser.KW_ROW);
				this.state = 674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===375) {
					{
					this.state = 673;
					this.rowTypeDimension();
					}
				}

				}
				break;
			case 115:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 676;
				localctx._type_ = this.match(FlinkSqlParser.KW_RAW);
				this.state = 678;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===384) {
					{
					this.state = 677;
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
		this.enterRule(localctx, 56, FlinkSqlParser.RULE_lengthOneDimension);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 682;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 683;
			this.decimalLiteral();
			this.state = 684;
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
		this.enterRule(localctx, 58, FlinkSqlParser.RULE_lengthTwoOptionalDimension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 686;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 687;
			this.decimalLiteral();
			this.state = 690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===388) {
				{
				this.state = 688;
				this.match(FlinkSqlParser.COMMA);
				this.state = 689;
				this.decimalLiteral();
				}
			}

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
	public lengthTwoStringDimension(): LengthTwoStringDimensionContext {
		let localctx: LengthTwoStringDimensionContext = new LengthTwoStringDimensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, FlinkSqlParser.RULE_lengthTwoStringDimension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 694;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 695;
			this.stringLiteral();
			this.state = 698;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===388) {
				{
				this.state = 696;
				this.match(FlinkSqlParser.COMMA);
				this.state = 697;
				this.stringLiteral();
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
	public lengthOneTypeDimension(): LengthOneTypeDimensionContext {
		let localctx: LengthOneTypeDimensionContext = new LengthOneTypeDimensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, FlinkSqlParser.RULE_lengthOneTypeDimension);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 702;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 703;
			this.columnType();
			this.state = 704;
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
		this.enterRule(localctx, 64, FlinkSqlParser.RULE_mapTypeDimension);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 706;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 707;
			this.columnType();
			{
			this.state = 708;
			this.match(FlinkSqlParser.COMMA);
			this.state = 709;
			this.columnType();
			}
			this.state = 711;
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
		this.enterRule(localctx, 66, FlinkSqlParser.RULE_rowTypeDimension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 713;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 714;
			this.columnName();
			this.state = 715;
			this.columnType();
			this.state = 722;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
				{
				{
				this.state = 716;
				this.match(FlinkSqlParser.COMMA);
				this.state = 717;
				this.columnName();
				this.state = 718;
				this.columnType();
				}
				}
				this.state = 724;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 725;
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
		this.enterRule(localctx, 68, FlinkSqlParser.RULE_columnConstraint);
		let _la: number;
		try {
			this.state = 741;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 215:
			case 318:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===215) {
					{
					this.state = 727;
					this.match(FlinkSqlParser.KW_CONSTRAINT);
					this.state = 728;
					this.constraintName();
					}
				}

				this.state = 731;
				this.match(FlinkSqlParser.KW_PRIMARY);
				this.state = 732;
				this.match(FlinkSqlParser.KW_KEY);
				this.state = 735;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 733;
					this.match(FlinkSqlParser.KW_NOT);
					this.state = 734;
					this.match(FlinkSqlParser.KW_ENFORCED);
					}
				}

				}
				break;
			case 298:
			case 299:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 738;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 737;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 740;
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
		this.enterRule(localctx, 70, FlinkSqlParser.RULE_commentSpec);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 743;
			this.match(FlinkSqlParser.KW_COMMENT);
			this.state = 744;
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
		this.enterRule(localctx, 72, FlinkSqlParser.RULE_metadataColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 746;
			this.columnName();
			this.state = 747;
			this.columnType();
			this.state = 748;
			this.match(FlinkSqlParser.KW_METADATA);
			this.state = 751;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===252) {
				{
				this.state = 749;
				this.match(FlinkSqlParser.KW_FROM);
				this.state = 750;
				this.metadataKey();
				}
			}

			this.state = 754;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===168) {
				{
				this.state = 753;
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
		this.enterRule(localctx, 74, FlinkSqlParser.RULE_metadataKey);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 756;
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
		this.enterRule(localctx, 76, FlinkSqlParser.RULE_computedColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 758;
			this.columnName();
			this.state = 759;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 760;
			this.computedColumnExpression();
			this.state = 762;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 761;
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
		this.enterRule(localctx, 78, FlinkSqlParser.RULE_computedColumnExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 764;
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
		this.enterRule(localctx, 80, FlinkSqlParser.RULE_watermarkDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 766;
			this.match(FlinkSqlParser.KW_WATERMARK);
			this.state = 767;
			this.match(FlinkSqlParser.KW_FOR);
			this.state = 768;
			this.expression();
			this.state = 769;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 770;
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
		this.enterRule(localctx, 82, FlinkSqlParser.RULE_tableConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 774;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===215) {
				{
				this.state = 772;
				this.match(FlinkSqlParser.KW_CONSTRAINT);
				this.state = 773;
				this.constraintName();
				}
			}

			this.state = 776;
			this.match(FlinkSqlParser.KW_PRIMARY);
			this.state = 777;
			this.match(FlinkSqlParser.KW_KEY);
			this.state = 778;
			this.columnNameList();
			this.state = 779;
			this.match(FlinkSqlParser.KW_NOT);
			this.state = 780;
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
		this.enterRule(localctx, 84, FlinkSqlParser.RULE_constraintName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 782;
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
		this.enterRule(localctx, 86, FlinkSqlParser.RULE_selfDefinitionClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 784;
			this.match(FlinkSqlParser.KW_PERIOD);
			this.state = 785;
			this.match(FlinkSqlParser.KW_FOR);
			this.state = 786;
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
		this.enterRule(localctx, 88, FlinkSqlParser.RULE_partitionDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 788;
			this.match(FlinkSqlParser.KW_PARTITIONED);
			this.state = 789;
			this.match(FlinkSqlParser.KW_BY);
			this.state = 790;
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
		this.enterRule(localctx, 90, FlinkSqlParser.RULE_transformList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 792;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 793;
			this.transform();
			this.state = 798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
				{
				{
				this.state = 794;
				this.match(FlinkSqlParser.COMMA);
				this.state = 795;
				this.transform();
				}
				}
				this.state = 800;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 801;
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
		this.enterRule(localctx, 92, FlinkSqlParser.RULE_transform);
		let _la: number;
		try {
			this.state = 816;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				localctx = new IdentityTransformContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 803;
				this.qualifiedName();
				}
				break;
			case 2:
				localctx = new ApplyTransformContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 804;
				(localctx as ApplyTransformContext)._transformName = this.identifier();
				this.state = 805;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 806;
				this.transformArgument();
				this.state = 811;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===388) {
					{
					{
					this.state = 807;
					this.match(FlinkSqlParser.COMMA);
					this.state = 808;
					this.transformArgument();
					}
					}
					this.state = 813;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 814;
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
		this.enterRule(localctx, 94, FlinkSqlParser.RULE_transformArgument);
		try {
			this.state = 820;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 818;
				this.qualifiedName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 819;
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
		this.enterRule(localctx, 96, FlinkSqlParser.RULE_likeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 822;
			this.match(FlinkSqlParser.KW_LIKE);
			this.state = 823;
			this.sourceTable();
			this.state = 832;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				{
				this.state = 824;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 828;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===41 || _la===94 || _la===264) {
					{
					{
					this.state = 825;
					this.likeOption();
					}
					}
					this.state = 830;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 831;
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
		this.enterRule(localctx, 98, FlinkSqlParser.RULE_sourceTable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 834;
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
		this.enterRule(localctx, 100, FlinkSqlParser.RULE_likeOption);
		let _la: number;
		try {
			this.state = 840;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 836;
				_la = this._input.LA(1);
				if(!(_la===41 || _la===264)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 837;
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
				this.state = 838;
				_la = this._input.LA(1);
				if(!(_la===41 || _la===94 || _la===264)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 839;
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
		this.enterRule(localctx, 102, FlinkSqlParser.RULE_createCatalog);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 842;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 843;
			this.match(FlinkSqlParser.KW_CATALOG);
			this.state = 844;
			this.uid();
			this.state = 845;
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
		this.enterRule(localctx, 104, FlinkSqlParser.RULE_createDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 847;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 848;
			this.match(FlinkSqlParser.KW_DATABASE);
			this.state = 850;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 849;
				this.ifNotExists();
				}
				break;
			}
			this.state = 852;
			this.uid();
			this.state = 854;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 853;
				this.commentSpec();
				}
			}

			this.state = 856;
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
		this.enterRule(localctx, 106, FlinkSqlParser.RULE_createView);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 858;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 860;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===150) {
				{
				this.state = 859;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 862;
			this.match(FlinkSqlParser.KW_VIEW);
			this.state = 864;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 863;
				this.ifNotExists();
				}
				break;
			}
			this.state = 866;
			this.uid();
			this.state = 868;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===384) {
				{
				this.state = 867;
				this.columnNameList();
				}
			}

			this.state = 871;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 870;
				this.commentSpec();
				}
			}

			this.state = 873;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 874;
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
		this.enterRule(localctx, 108, FlinkSqlParser.RULE_createFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 876;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 880;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				this.state = 877;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
				break;
			case 2:
				{
				this.state = 878;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				this.state = 879;
				this.match(FlinkSqlParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 882;
			this.match(FlinkSqlParser.KW_FUNCTION);
			this.state = 884;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 883;
				this.ifNotExists();
				}
				break;
			}
			this.state = 886;
			this.uid();
			this.state = 887;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 888;
			this.identifier();
			this.state = 891;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===276) {
				{
				this.state = 889;
				this.match(FlinkSqlParser.KW_LANGUAGE);
				this.state = 890;
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

			this.state = 894;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===361) {
				{
				this.state = 893;
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
		this.enterRule(localctx, 110, FlinkSqlParser.RULE_usingClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 896;
			this.match(FlinkSqlParser.KW_USING);
			this.state = 897;
			this.match(FlinkSqlParser.KW_JAR);
			this.state = 898;
			this.jarFileName();
			this.state = 904;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
				{
				{
				this.state = 899;
				this.match(FlinkSqlParser.COMMA);
				this.state = 900;
				this.match(FlinkSqlParser.KW_JAR);
				this.state = 901;
				this.jarFileName();
				}
				}
				this.state = 906;
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
		this.enterRule(localctx, 112, FlinkSqlParser.RULE_jarFileName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 907;
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
		this.enterRule(localctx, 114, FlinkSqlParser.RULE_alterTable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 909;
			this.match(FlinkSqlParser.KW_ALTER);
			this.state = 910;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 912;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				{
				this.state = 911;
				this.ifExists();
				}
				break;
			}
			this.state = 914;
			this.uid();
			this.state = 920;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 915;
				this.renameDefinition();
				}
				break;
			case 2:
				{
				this.state = 916;
				this.setKeyValueDefinition();
				}
				break;
			case 3:
				{
				this.state = 917;
				this.addConstraint();
				}
				break;
			case 4:
				{
				this.state = 918;
				this.dropConstraint();
				}
				break;
			case 5:
				{
				this.state = 919;
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
		this.enterRule(localctx, 116, FlinkSqlParser.RULE_renameDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 922;
			this.match(FlinkSqlParser.KW_RENAME);
			this.state = 924;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967279) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 126975) !== 0) || ((((_la - 405)) & ~0x1F) === 0 && ((1 << (_la - 405)) & 19) !== 0)) {
				{
				this.state = 923;
				this.uid();
				}
			}

			this.state = 926;
			this.match(FlinkSqlParser.KW_TO);
			this.state = 927;
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
		this.enterRule(localctx, 118, FlinkSqlParser.RULE_setKeyValueDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 929;
			this.match(FlinkSqlParser.KW_SET);
			this.state = 930;
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
		this.enterRule(localctx, 120, FlinkSqlParser.RULE_addConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 932;
			this.match(FlinkSqlParser.KW_ADD);
			this.state = 933;
			this.match(FlinkSqlParser.KW_CONSTRAINT);
			this.state = 934;
			this.constraintName();
			this.state = 935;
			this.match(FlinkSqlParser.KW_PRIMARY);
			this.state = 936;
			this.match(FlinkSqlParser.KW_KEY);
			this.state = 937;
			this.columnNameList();
			this.state = 939;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===298) {
				{
				this.state = 938;
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
		this.enterRule(localctx, 122, FlinkSqlParser.RULE_dropConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 941;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 942;
			this.match(FlinkSqlParser.KW_CONSTRAINT);
			this.state = 943;
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
		this.enterRule(localctx, 124, FlinkSqlParser.RULE_addUnique);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 945;
			this.match(FlinkSqlParser.KW_ADD);
			this.state = 946;
			this.match(FlinkSqlParser.KW_UNIQUE);
			this.state = 947;
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
		this.enterRule(localctx, 126, FlinkSqlParser.RULE_notForced);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 949;
			this.match(FlinkSqlParser.KW_NOT);
			this.state = 950;
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
		this.enterRule(localctx, 128, FlinkSqlParser.RULE_alertView);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 952;
			this.match(FlinkSqlParser.KW_ALTER);
			this.state = 953;
			this.match(FlinkSqlParser.KW_VIEW);
			this.state = 954;
			this.uid();
			this.state = 958;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 119:
				{
				this.state = 955;
				this.renameDefinition();
				}
				break;
			case 185:
				{
				this.state = 956;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 957;
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
		this.enterRule(localctx, 130, FlinkSqlParser.RULE_alterDatabase);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 960;
			this.match(FlinkSqlParser.KW_ALTER);
			this.state = 961;
			this.match(FlinkSqlParser.KW_DATABASE);
			this.state = 962;
			this.uid();
			this.state = 963;
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
		this.enterRule(localctx, 132, FlinkSqlParser.RULE_alterFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 965;
			this.match(FlinkSqlParser.KW_ALTER);
			this.state = 969;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 966;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
				break;
			case 2:
				{
				this.state = 967;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				this.state = 968;
				this.match(FlinkSqlParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 971;
			this.match(FlinkSqlParser.KW_FUNCTION);
			this.state = 973;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				{
				this.state = 972;
				this.ifExists();
				}
				break;
			}
			this.state = 975;
			this.uid();
			this.state = 976;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 977;
			this.identifier();
			this.state = 980;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===276) {
				{
				this.state = 978;
				this.match(FlinkSqlParser.KW_LANGUAGE);
				this.state = 979;
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
		this.enterRule(localctx, 134, FlinkSqlParser.RULE_dropCatalog);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 982;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 983;
			this.match(FlinkSqlParser.KW_CATALOG);
			this.state = 985;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 984;
				this.ifExists();
				}
				break;
			}
			this.state = 987;
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
		this.enterRule(localctx, 136, FlinkSqlParser.RULE_dropTable);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 989;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 991;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===150) {
				{
				this.state = 990;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 993;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 995;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				{
				this.state = 994;
				this.ifExists();
				}
				break;
			}
			this.state = 997;
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
		this.enterRule(localctx, 138, FlinkSqlParser.RULE_dropDatabase);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 999;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 1000;
			this.match(FlinkSqlParser.KW_DATABASE);
			this.state = 1002;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				{
				this.state = 1001;
				this.ifExists();
				}
				break;
			}
			this.state = 1004;
			this.uid();
			this.state = 1006;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11 || _la===123) {
				{
				this.state = 1005;
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
		this.enterRule(localctx, 140, FlinkSqlParser.RULE_dropView);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1008;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 1010;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===150) {
				{
				this.state = 1009;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 1012;
			this.match(FlinkSqlParser.KW_VIEW);
			this.state = 1014;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 1013;
				this.ifExists();
				}
				break;
			}
			this.state = 1016;
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
		this.enterRule(localctx, 142, FlinkSqlParser.RULE_dropFunction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1018;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 1022;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				{
				this.state = 1019;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
				break;
			case 2:
				{
				this.state = 1020;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				this.state = 1021;
				this.match(FlinkSqlParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 1024;
			this.match(FlinkSqlParser.KW_FUNCTION);
			this.state = 1026;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 1025;
				this.ifExists();
				}
				break;
			}
			this.state = 1028;
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
		this.enterRule(localctx, 144, FlinkSqlParser.RULE_insertStatement);
		let _la: number;
		try {
			this.state = 1037;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 1031;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===244) {
					{
					this.state = 1030;
					this.match(FlinkSqlParser.KW_EXECUTE);
					}
				}

				this.state = 1033;
				this.insertSimpleStatement();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1034;
				this.insertMulStatementCompatibility();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 1035;
				this.match(FlinkSqlParser.KW_EXECUTE);
				this.state = 1036;
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
		this.enterRule(localctx, 146, FlinkSqlParser.RULE_insertSimpleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1039;
			this.match(FlinkSqlParser.KW_INSERT);
			this.state = 1040;
			_la = this._input.LA(1);
			if(!(_la===93 || _la===272)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1041;
			this.uid();
			this.state = 1050;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				this.state = 1043;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===311) {
					{
					this.state = 1042;
					this.insertPartitionDefinition();
					}
				}

				this.state = 1046;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 101, this._ctx) ) {
				case 1:
					{
					this.state = 1045;
					this.columnNameList();
					}
					break;
				}
				this.state = 1048;
				this.queryStatement(0);
				}
				break;
			case 2:
				{
				this.state = 1049;
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
		this.enterRule(localctx, 148, FlinkSqlParser.RULE_insertPartitionDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1052;
			this.match(FlinkSqlParser.KW_PARTITION);
			this.state = 1053;
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
		this.enterRule(localctx, 150, FlinkSqlParser.RULE_valuesDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1055;
			this.match(FlinkSqlParser.KW_VALUES);
			this.state = 1056;
			this.valuesRowDefinition();
			this.state = 1061;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
				{
				{
				this.state = 1057;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1058;
				this.valuesRowDefinition();
				}
				}
				this.state = 1063;
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
		this.enterRule(localctx, 152, FlinkSqlParser.RULE_valuesRowDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1064;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1065;
			this.constant();
			this.state = 1070;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
				{
				{
				this.state = 1066;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1067;
				this.constant();
				}
				}
				this.state = 1072;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1073;
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
		this.enterRule(localctx, 154, FlinkSqlParser.RULE_insertMulStatementCompatibility);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1075;
			this.match(FlinkSqlParser.KW_BEGIN);
			this.state = 1076;
			this.match(FlinkSqlParser.KW_STATEMENT);
			this.state = 1077;
			this.match(FlinkSqlParser.KW_SET);
			this.state = 1078;
			this.match(FlinkSqlParser.SEMICOLON);
			this.state = 1082;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1079;
				this.insertSimpleStatement();
				this.state = 1080;
				this.match(FlinkSqlParser.SEMICOLON);
				}
				}
				this.state = 1084;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===267);
			this.state = 1086;
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
		this.enterRule(localctx, 156, FlinkSqlParser.RULE_insertMulStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1088;
			this.match(FlinkSqlParser.KW_STATEMENT);
			this.state = 1089;
			this.match(FlinkSqlParser.KW_SET);
			this.state = 1090;
			this.match(FlinkSqlParser.KW_BEGIN);
			this.state = 1094;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1091;
				this.insertSimpleStatement();
				this.state = 1092;
				this.match(FlinkSqlParser.SEMICOLON);
				}
				}
				this.state = 1096;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===267);
			this.state = 1098;
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
		let _startState: number = 158;
		this.enterRecursionRule(localctx, 158, FlinkSqlParser.RULE_queryStatement, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1123;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				{
				this.state = 1101;
				this.valuesCaluse();
				}
				break;
			case 2:
				{
				this.state = 1102;
				this.withClause();
				this.state = 1103;
				this.queryStatement(5);
				}
				break;
			case 3:
				{
				this.state = 1105;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1106;
				this.queryStatement(0);
				this.state = 1107;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				{
				this.state = 1109;
				this.selectClause();
				this.state = 1111;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
				case 1:
					{
					this.state = 1110;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1114;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 108, this._ctx) ) {
				case 1:
					{
					this.state = 1113;
					this.limitClause();
					}
					break;
				}
				}
				break;
			case 5:
				{
				this.state = 1116;
				this.selectStatement();
				this.state = 1118;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 109, this._ctx) ) {
				case 1:
					{
					this.state = 1117;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1121;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 110, this._ctx) ) {
				case 1:
					{
					this.state = 1120;
					this.limitClause();
					}
					break;
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1139;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 115, this._ctx);
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
					this.state = 1125;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 1126;
					localctx._operator = this._input.LT(1);
					_la = this._input.LA(1);
					if(!(_la===243 || _la===270 || _la===354)) {
					    localctx._operator = this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 1128;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===178) {
						{
						this.state = 1127;
						this.match(FlinkSqlParser.KW_ALL);
						}
					}

					this.state = 1130;
					localctx._right = this.queryStatement(0);
					this.state = 1132;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 113, this._ctx) ) {
					case 1:
						{
						this.state = 1131;
						this.orderByCaluse();
						}
						break;
					}
					this.state = 1135;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 114, this._ctx) ) {
					case 1:
						{
						this.state = 1134;
						this.limitClause();
						}
						break;
					}
					}
					}
				}
				this.state = 1141;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 115, this._ctx);
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
		this.enterRule(localctx, 160, FlinkSqlParser.RULE_valuesCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1142;
			this.match(FlinkSqlParser.KW_VALUES);
			this.state = 1143;
			this.expression();
			this.state = 1148;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 116, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1144;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1145;
					this.expression();
					}
					}
				}
				this.state = 1150;
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
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public withClause(): WithClauseContext {
		let localctx: WithClauseContext = new WithClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, FlinkSqlParser.RULE_withClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1151;
			this.match(FlinkSqlParser.KW_WITH);
			this.state = 1152;
			this.withItem();
			this.state = 1157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
				{
				{
				this.state = 1153;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1154;
				this.withItem();
				}
				}
				this.state = 1159;
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
		this.enterRule(localctx, 164, FlinkSqlParser.RULE_withItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1160;
			this.withItemName();
			this.state = 1172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===384) {
				{
				this.state = 1161;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1162;
				this.columnName();
				this.state = 1167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===388) {
					{
					{
					this.state = 1163;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1164;
					this.columnName();
					}
					}
					this.state = 1169;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1170;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
			}

			this.state = 1174;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 1175;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1176;
			this.queryStatement(0);
			this.state = 1177;
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
		this.enterRule(localctx, 166, FlinkSqlParser.RULE_withItemName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1179;
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
		this.enterRule(localctx, 168, FlinkSqlParser.RULE_selectStatement);
		try {
			this.state = 1199;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1181;
				this.selectClause();
				this.state = 1182;
				this.fromClause();
				this.state = 1184;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
				case 1:
					{
					this.state = 1183;
					this.whereClause();
					}
					break;
				}
				this.state = 1187;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
				case 1:
					{
					this.state = 1186;
					this.groupByClause();
					}
					break;
				}
				this.state = 1190;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
				case 1:
					{
					this.state = 1189;
					this.havingClause();
					}
					break;
				}
				this.state = 1193;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 1192;
					this.windowClause();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1195;
				this.selectClause();
				this.state = 1196;
				this.fromClause();
				this.state = 1197;
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
		this.enterRule(localctx, 170, FlinkSqlParser.RULE_selectClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1201;
			this.match(FlinkSqlParser.KW_SELECT);
			this.state = 1203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===178 || _la===235) {
				{
				this.state = 1202;
				this.setQuantifier();
				}
			}

			this.state = 1214;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				{
				this.state = 1205;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;
			case 2:
				{
				this.state = 1206;
				this.projectItemDefinition();
				this.state = 1211;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 126, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1207;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1208;
						this.projectItemDefinition();
						}
						}
					}
					this.state = 1213;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 126, this._ctx);
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
		this.enterRule(localctx, 172, FlinkSqlParser.RULE_projectItemDefinition);
		let _la: number;
		try {
			this.state = 1224;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1216;
				this.overWindowItem();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1217;
				this.expression();
				this.state = 1222;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 129, this._ctx) ) {
				case 1:
					{
					this.state = 1219;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===185) {
						{
						this.state = 1218;
						this.match(FlinkSqlParser.KW_AS);
						}
					}

					this.state = 1221;
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
		this.enterRule(localctx, 174, FlinkSqlParser.RULE_overWindowItem);
		try {
			this.state = 1238;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1226;
				this.primaryExpression(0);
				this.state = 1227;
				this.match(FlinkSqlParser.KW_OVER);
				this.state = 1228;
				this.windowSpec();
				this.state = 1229;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 1230;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1232;
				this.primaryExpression(0);
				this.state = 1233;
				this.match(FlinkSqlParser.KW_OVER);
				this.state = 1234;
				this.errorCapturingIdentifier();
				this.state = 1235;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 1236;
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
		this.enterRule(localctx, 176, FlinkSqlParser.RULE_fromClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1240;
			this.match(FlinkSqlParser.KW_FROM);
			this.state = 1241;
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
		let _startState: number = 178;
		this.enterRecursionRule(localctx, 178, FlinkSqlParser.RULE_tableExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1254;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				{
				this.state = 1244;
				this.tableReference();
				this.state = 1249;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 132, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1245;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1246;
						this.tableReference();
						}
						}
					}
					this.state = 1251;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 132, this._ctx);
				}
				}
				break;
			case 2:
				{
				this.state = 1252;
				this.inlineDataValueClause();
				}
				break;
			case 3:
				{
				this.state = 1253;
				this.windoTVFClause();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1277;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 139, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1275;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 138, this._ctx) ) {
					case 1:
						{
						localctx = new TableExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_tableExpression);
						this.state = 1256;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1257;
						this.match(FlinkSqlParser.KW_CROSS);
						this.state = 1258;
						this.match(FlinkSqlParser.KW_JOIN);
						this.state = 1259;
						this.tableExpression(4);
						}
						break;
					case 2:
						{
						localctx = new TableExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_tableExpression);
						this.state = 1260;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1262;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===294) {
							{
							this.state = 1261;
							this.match(FlinkSqlParser.KW_NATURAL);
							}
						}

						this.state = 1265;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 253)) & ~0x1F) === 0 && ((1 << (_la - 253)) & 67112961) !== 0) || _la===323) {
							{
							this.state = 1264;
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

						this.state = 1268;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===308) {
							{
							this.state = 1267;
							this.match(FlinkSqlParser.KW_OUTER);
							}
						}

						this.state = 1270;
						this.match(FlinkSqlParser.KW_JOIN);
						this.state = 1271;
						this.tableExpression(0);
						this.state = 1273;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 137, this._ctx) ) {
						case 1:
							{
							this.state = 1272;
							this.joinCondition();
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1279;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 139, this._ctx);
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
		this.enterRule(localctx, 180, FlinkSqlParser.RULE_tableReference);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1280;
			this.tablePrimary();
			this.state = 1282;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				{
				this.state = 1281;
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
		this.enterRule(localctx, 182, FlinkSqlParser.RULE_tablePrimary);
		let _la: number;
		try {
			this.state = 1325;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===344) {
					{
					this.state = 1284;
					this.match(FlinkSqlParser.KW_TABLE);
					}
				}

				this.state = 1287;
				this.tablePath();
				this.state = 1289;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 142, this._ctx) ) {
				case 1:
					{
					this.state = 1288;
					this.systemTimePeriod();
					}
					break;
				}
				this.state = 1295;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 144, this._ctx) ) {
				case 1:
					{
					this.state = 1292;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===185) {
						{
						this.state = 1291;
						this.match(FlinkSqlParser.KW_AS);
						}
					}

					this.state = 1294;
					this.correlationName();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1297;
				this.match(FlinkSqlParser.KW_LATERAL);
				this.state = 1298;
				this.match(FlinkSqlParser.KW_TABLE);
				this.state = 1299;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1300;
				this.functionName();
				this.state = 1301;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1302;
				this.functionParam();
				this.state = 1307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===388) {
					{
					{
					this.state = 1303;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1304;
					this.functionParam();
					}
					}
					this.state = 1309;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1310;
				this.match(FlinkSqlParser.RR_BRACKET);
				this.state = 1311;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===277) {
					{
					this.state = 1313;
					this.match(FlinkSqlParser.KW_LATERAL);
					}
				}

				this.state = 1316;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1317;
				this.queryStatement(0);
				this.state = 1318;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1320;
				this.match(FlinkSqlParser.KW_UNNEST);
				this.state = 1321;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1322;
				this.expression();
				this.state = 1323;
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
		this.enterRule(localctx, 184, FlinkSqlParser.RULE_tablePath);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1327;
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
		this.enterRule(localctx, 186, FlinkSqlParser.RULE_systemTimePeriod);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1329;
			this.match(FlinkSqlParser.KW_FOR);
			this.state = 1330;
			this.match(FlinkSqlParser.KW_SYSTEM_TIME);
			this.state = 1331;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 1332;
			this.match(FlinkSqlParser.KW_OF);
			this.state = 1333;
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
		this.enterRule(localctx, 188, FlinkSqlParser.RULE_dateTimeExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1335;
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
		this.enterRule(localctx, 190, FlinkSqlParser.RULE_inlineDataValueClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1337;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1338;
			this.valuesDefinition();
			this.state = 1339;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 1340;
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
		this.enterRule(localctx, 192, FlinkSqlParser.RULE_windoTVFClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1342;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 1343;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1344;
			this.windowTVFExression();
			this.state = 1345;
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
		this.enterRule(localctx, 194, FlinkSqlParser.RULE_windowTVFExression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1347;
			this.windoTVFName();
			this.state = 1348;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1349;
			this.windowTVFParam();
			this.state = 1354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
				{
				{
				this.state = 1350;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1351;
				this.windowTVFParam();
				}
				}
				this.state = 1356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1357;
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
		this.enterRule(localctx, 196, FlinkSqlParser.RULE_windoTVFName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1359;
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
		this.enterRule(localctx, 198, FlinkSqlParser.RULE_windowTVFParam);
		try {
			this.state = 1376;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 149, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1361;
				this.match(FlinkSqlParser.KW_TABLE);
				this.state = 1362;
				this.timeAttrColumn();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1363;
				this.columnDescriptor();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1364;
				this.timeIntervalExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1365;
				this.match(FlinkSqlParser.KW_DATA);
				this.state = 1366;
				this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
				this.state = 1367;
				this.match(FlinkSqlParser.KW_TABLE);
				this.state = 1368;
				this.timeAttrColumn();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1369;
				this.match(FlinkSqlParser.KW_TIMECOL);
				this.state = 1370;
				this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
				this.state = 1371;
				this.columnDescriptor();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1372;
				this.timeIntervalParamName();
				this.state = 1373;
				this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
				this.state = 1374;
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
		this.enterRule(localctx, 200, FlinkSqlParser.RULE_timeIntervalParamName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1378;
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
		this.enterRule(localctx, 202, FlinkSqlParser.RULE_columnDescriptor);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1380;
			this.match(FlinkSqlParser.KW_DESCRIPTOR);
			this.state = 1381;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1382;
			this.uid();
			this.state = 1383;
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
		this.enterRule(localctx, 204, FlinkSqlParser.RULE_joinCondition);
		let _la: number;
		try {
			this.state = 1399;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 303:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1385;
				this.match(FlinkSqlParser.KW_ON);
				this.state = 1386;
				this.booleanExpression(0);
				}
				break;
			case 361:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1387;
				this.match(FlinkSqlParser.KW_USING);
				this.state = 1388;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1389;
				this.uid();
				this.state = 1394;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===388) {
					{
					{
					this.state = 1390;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1391;
					this.uid();
					}
					}
					this.state = 1396;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1397;
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
		this.enterRule(localctx, 206, FlinkSqlParser.RULE_whereClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1401;
			this.match(FlinkSqlParser.KW_WHERE);
			this.state = 1402;
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
		this.enterRule(localctx, 208, FlinkSqlParser.RULE_groupByClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1404;
			this.match(FlinkSqlParser.KW_GROUP);
			this.state = 1405;
			this.match(FlinkSqlParser.KW_BY);
			this.state = 1406;
			this.groupItemDefinition();
			this.state = 1411;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 152, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1407;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1408;
					this.groupItemDefinition();
					}
					}
				}
				this.state = 1413;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 152, this._ctx);
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
		this.enterRule(localctx, 210, FlinkSqlParser.RULE_groupItemDefinition);
		let _la: number;
		try {
			this.state = 1453;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1414;
				this.expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1415;
				this.groupWindowFunction();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1416;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1417;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1418;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1419;
				this.expression();
				this.state = 1424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===388) {
					{
					{
					this.state = 1420;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1421;
					this.expression();
					}
					}
					this.state = 1426;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1427;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1429;
				this.groupingSetsNotaionName();
				this.state = 1430;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1431;
				this.expression();
				this.state = 1436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===388) {
					{
					{
					this.state = 1432;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1433;
					this.expression();
					}
					}
					this.state = 1438;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1439;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1441;
				this.groupingSets();
				this.state = 1442;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1443;
				this.groupItemDefinition();
				this.state = 1448;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===388) {
					{
					{
					this.state = 1444;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1445;
					this.groupItemDefinition();
					}
					}
					this.state = 1450;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1451;
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
		this.enterRule(localctx, 212, FlinkSqlParser.RULE_groupingSets);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1455;
			this.match(FlinkSqlParser.KW_GROUPING);
			this.state = 1456;
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
		this.enterRule(localctx, 214, FlinkSqlParser.RULE_groupingSetsNotaionName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1458;
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
		this.enterRule(localctx, 216, FlinkSqlParser.RULE_groupWindowFunction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1460;
			this.groupWindowFunctionName();
			this.state = 1461;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1462;
			this.timeAttrColumn();
			this.state = 1463;
			this.match(FlinkSqlParser.COMMA);
			this.state = 1464;
			this.timeIntervalExpression();
			this.state = 1465;
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
		this.enterRule(localctx, 218, FlinkSqlParser.RULE_groupWindowFunctionName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1467;
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
		this.enterRule(localctx, 220, FlinkSqlParser.RULE_timeAttrColumn);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1469;
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
		this.enterRule(localctx, 222, FlinkSqlParser.RULE_havingClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1471;
			this.match(FlinkSqlParser.KW_HAVING);
			this.state = 1472;
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
		this.enterRule(localctx, 224, FlinkSqlParser.RULE_windowClause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1474;
			this.match(FlinkSqlParser.KW_WINDOW);
			this.state = 1475;
			this.namedWindow();
			this.state = 1480;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 157, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1476;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1477;
					this.namedWindow();
					}
					}
				}
				this.state = 1482;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 157, this._ctx);
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
		this.enterRule(localctx, 226, FlinkSqlParser.RULE_namedWindow);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1483;
			localctx._name = this.errorCapturingIdentifier();
			this.state = 1484;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 1485;
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
		this.enterRule(localctx, 228, FlinkSqlParser.RULE_windowSpec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967279) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 126975) !== 0) || ((((_la - 405)) & ~0x1F) === 0 && ((1 << (_la - 405)) & 19) !== 0)) {
				{
				this.state = 1487;
				localctx._name = this.errorCapturingIdentifier();
				}
			}

			this.state = 1490;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===311) {
				{
				this.state = 1491;
				this.partitionByClause();
				}
			}

			this.state = 1495;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===306) {
				{
				this.state = 1494;
				this.orderByCaluse();
				}
			}

			this.state = 1498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===319 || _la===328) {
				{
				this.state = 1497;
				this.windowFrame();
				}
			}

			this.state = 1500;
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
		this.enterRule(localctx, 230, FlinkSqlParser.RULE_matchRecognizeClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1502;
			this.match(FlinkSqlParser.KW_MATCH_RECOGNIZE);
			this.state = 1503;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===311) {
				{
				this.state = 1504;
				this.partitionByClause();
				}
			}

			this.state = 1508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===306) {
				{
				this.state = 1507;
				this.orderByCaluse();
				}
			}

			this.state = 1511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===285) {
				{
				this.state = 1510;
				this.measuresClause();
				}
			}

			this.state = 1514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===178 || _la===304) {
				{
				this.state = 1513;
				this.outputMode();
				}
			}

			this.state = 1517;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 1516;
				this.afterMatchStrategy();
				}
			}

			this.state = 1520;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===312) {
				{
				this.state = 1519;
				this.patternDefination();
				}
			}

			this.state = 1522;
			this.patternVariablesDefination();
			this.state = 1523;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 1528;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				{
				this.state = 1525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===185) {
					{
					this.state = 1524;
					this.match(FlinkSqlParser.KW_AS);
					}
				}

				this.state = 1527;
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
		this.enterRule(localctx, 232, FlinkSqlParser.RULE_orderByCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1530;
			this.match(FlinkSqlParser.KW_ORDER);
			this.state = 1531;
			this.match(FlinkSqlParser.KW_BY);
			this.state = 1532;
			this.orderItemDefition();
			this.state = 1537;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 170, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1533;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1534;
					this.orderItemDefition();
					}
					}
				}
				this.state = 1539;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 170, this._ctx);
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
		this.enterRule(localctx, 234, FlinkSqlParser.RULE_orderItemDefition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1540;
			this.expression();
			this.state = 1542;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 171, this._ctx) ) {
			case 1:
				{
				this.state = 1541;
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
			this.state = 1546;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 172, this._ctx) ) {
			case 1:
				{
				this.state = 1544;
				this.match(FlinkSqlParser.KW_NULLS);
				this.state = 1545;
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
		this.enterRule(localctx, 236, FlinkSqlParser.RULE_limitClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1548;
			this.match(FlinkSqlParser.KW_LIMIT);
			this.state = 1551;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 178:
				{
				this.state = 1549;
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
				this.state = 1550;
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
		this.enterRule(localctx, 238, FlinkSqlParser.RULE_partitionByClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1553;
			this.match(FlinkSqlParser.KW_PARTITION);
			this.state = 1554;
			this.match(FlinkSqlParser.KW_BY);
			this.state = 1555;
			this.expression();
			this.state = 1560;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
				{
				{
				this.state = 1556;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1557;
				this.expression();
				}
				}
				this.state = 1562;
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
		this.enterRule(localctx, 240, FlinkSqlParser.RULE_quantifiers);
		try {
			this.state = 1579;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 1563;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 1564;
				this.match(FlinkSqlParser.ADD_SIGN);
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 1565;
				this.match(FlinkSqlParser.QUESTION_MARK_SIGN);
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				{
				this.state = 1566;
				this.match(FlinkSqlParser.LB_BRACKET);
				this.state = 1567;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1568;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1569;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1570;
				this.match(FlinkSqlParser.RB_BRACKET);
				}
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				{
				this.state = 1571;
				this.match(FlinkSqlParser.LB_BRACKET);
				this.state = 1572;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1573;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1574;
				this.match(FlinkSqlParser.RB_BRACKET);
				}
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				{
				this.state = 1575;
				this.match(FlinkSqlParser.LB_BRACKET);
				this.state = 1576;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1577;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1578;
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
		this.enterRule(localctx, 242, FlinkSqlParser.RULE_measuresClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1581;
			this.match(FlinkSqlParser.KW_MEASURES);
			this.state = 1582;
			this.projectItemDefinition();
			this.state = 1587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
				{
				{
				this.state = 1583;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1584;
				this.projectItemDefinition();
				}
				}
				this.state = 1589;
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
		this.enterRule(localctx, 244, FlinkSqlParser.RULE_patternDefination);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1590;
			this.match(FlinkSqlParser.KW_PATTERN);
			this.state = 1591;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1593;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1592;
				this.patternVariable();
				}
				}
				this.state = 1595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===406 || _la===409);
			this.state = 1597;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 1599;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===370) {
				{
				this.state = 1598;
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
		this.enterRule(localctx, 246, FlinkSqlParser.RULE_patternVariable);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1601;
			this.unquotedIdentifier();
			this.state = 1603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 386)) & ~0x1F) === 0 && ((1 << (_la - 386)) & 135681) !== 0)) {
				{
				this.state = 1602;
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
		this.enterRule(localctx, 248, FlinkSqlParser.RULE_outputMode);
		try {
			this.state = 1613;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 178:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1605;
				this.match(FlinkSqlParser.KW_ALL);
				this.state = 1606;
				this.match(FlinkSqlParser.KW_ROWS);
				this.state = 1607;
				this.match(FlinkSqlParser.KW_PER);
				this.state = 1608;
				this.match(FlinkSqlParser.KW_MATCH);
				}
				break;
			case 304:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1609;
				this.match(FlinkSqlParser.KW_ONE);
				this.state = 1610;
				this.match(FlinkSqlParser.KW_ROW);
				this.state = 1611;
				this.match(FlinkSqlParser.KW_PER);
				this.state = 1612;
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
		this.enterRule(localctx, 250, FlinkSqlParser.RULE_afterMatchStrategy);
		try {
			this.state = 1639;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1615;
				this.match(FlinkSqlParser.KW_AFTER);
				this.state = 1616;
				this.match(FlinkSqlParser.KW_MATCH);
				this.state = 1617;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1618;
				this.match(FlinkSqlParser.KW_PAST);
				this.state = 1619;
				this.match(FlinkSqlParser.KW_LAST);
				this.state = 1620;
				this.match(FlinkSqlParser.KW_ROW);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1621;
				this.match(FlinkSqlParser.KW_AFTER);
				this.state = 1622;
				this.match(FlinkSqlParser.KW_MATCH);
				this.state = 1623;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1624;
				this.match(FlinkSqlParser.KW_TO);
				this.state = 1625;
				this.match(FlinkSqlParser.KW_NEXT);
				this.state = 1626;
				this.match(FlinkSqlParser.KW_ROW);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1627;
				this.match(FlinkSqlParser.KW_AFTER);
				this.state = 1628;
				this.match(FlinkSqlParser.KW_MATCH);
				this.state = 1629;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1630;
				this.match(FlinkSqlParser.KW_TO);
				this.state = 1631;
				this.match(FlinkSqlParser.KW_LAST);
				this.state = 1632;
				this.unquotedIdentifier();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1633;
				this.match(FlinkSqlParser.KW_AFTER);
				this.state = 1634;
				this.match(FlinkSqlParser.KW_MATCH);
				this.state = 1635;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1636;
				this.match(FlinkSqlParser.KW_TO);
				this.state = 1637;
				this.match(FlinkSqlParser.KW_FIRST);
				this.state = 1638;
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
		this.enterRule(localctx, 252, FlinkSqlParser.RULE_patternVariablesDefination);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1641;
			this.match(FlinkSqlParser.KW_DEFINE);
			this.state = 1642;
			this.projectItemDefinition();
			this.state = 1647;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
				{
				{
				this.state = 1643;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1644;
				this.projectItemDefinition();
				}
				}
				this.state = 1649;
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
		this.enterRule(localctx, 254, FlinkSqlParser.RULE_windowFrame);
		try {
			this.state = 1659;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 319:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1650;
				this.match(FlinkSqlParser.KW_RANGE);
				this.state = 1651;
				this.match(FlinkSqlParser.KW_BETWEEN);
				this.state = 1652;
				this.timeIntervalExpression();
				this.state = 1653;
				this.frameBound();
				}
				break;
			case 328:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1655;
				this.match(FlinkSqlParser.KW_ROWS);
				this.state = 1656;
				this.match(FlinkSqlParser.KW_BETWEEN);
				this.state = 1657;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1658;
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
		this.enterRule(localctx, 256, FlinkSqlParser.RULE_frameBound);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1661;
			this.match(FlinkSqlParser.KW_PRECEDING);
			this.state = 1662;
			this.match(FlinkSqlParser.KW_AND);
			this.state = 1663;
			this.match(FlinkSqlParser.KW_CURRENT);
			this.state = 1664;
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
		this.enterRule(localctx, 258, FlinkSqlParser.RULE_withinClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1666;
			this.match(FlinkSqlParser.KW_WITHIN);
			this.state = 1667;
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
		this.enterRule(localctx, 260, FlinkSqlParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1669;
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
		let _startState: number = 262;
		this.enterRecursionRule(localctx, 262, FlinkSqlParser.RULE_booleanExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1683;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				{
				localctx = new LogicalNotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1672;
				this.match(FlinkSqlParser.KW_NOT);
				this.state = 1673;
				this.booleanExpression(6);
				}
				break;
			case 2:
				{
				localctx = new ExistsContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1674;
				this.match(FlinkSqlParser.KW_EXISTS);
				this.state = 1675;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1676;
				this.queryStatement(0);
				this.state = 1677;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				{
				localctx = new PredicatedContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1679;
				this.valueExpression(0);
				this.state = 1681;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 184, this._ctx) ) {
				case 1:
					{
					this.state = 1680;
					this.predicate();
					}
					break;
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1699;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 188, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1697;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 187, this._ctx) ) {
					case 1:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1685;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1686;
						(localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.KW_AND);
						this.state = 1687;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(4);
						}
						break;
					case 2:
						{
						localctx = new LogicalBinaryContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1688;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1689;
						(localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.KW_OR);
						this.state = 1690;
						(localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;
					case 3:
						{
						localctx = new LogicalNestedContext(this, new BooleanExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1691;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1692;
						this.match(FlinkSqlParser.KW_IS);
						this.state = 1694;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===298) {
							{
							this.state = 1693;
							this.match(FlinkSqlParser.KW_NOT);
							}
						}

						this.state = 1696;
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
				this.state = 1701;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 188, this._ctx);
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
		this.enterRule(localctx, 264, FlinkSqlParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 1769;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 199, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1703;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 1702;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1705;
				localctx._kind = this.match(FlinkSqlParser.KW_BETWEEN);
				this.state = 1707;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===186 || _la===340) {
					{
					this.state = 1706;
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

				this.state = 1709;
				localctx._lower = this.valueExpression(0);
				this.state = 1710;
				this.match(FlinkSqlParser.KW_AND);
				this.state = 1711;
				localctx._upper = this.valueExpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1714;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 1713;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1716;
				localctx._kind = this.match(FlinkSqlParser.KW_IN);
				this.state = 1717;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1718;
				this.expression();
				this.state = 1723;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===388) {
					{
					{
					this.state = 1719;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1720;
					this.expression();
					}
					}
					this.state = 1725;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1726;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 1728;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1731;
				localctx._kind = this.match(FlinkSqlParser.KW_IN);
				this.state = 1732;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1733;
				this.queryStatement(0);
				this.state = 1734;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1736;
				localctx._kind = this.match(FlinkSqlParser.KW_EXISTS);
				this.state = 1737;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1738;
				this.queryStatement(0);
				this.state = 1739;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1742;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 1741;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1744;
				localctx._kind = this.match(FlinkSqlParser.KW_RLIKE);
				this.state = 1745;
				localctx._pattern = this.valueExpression(0);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1746;
				this.likePredicate();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1747;
				this.match(FlinkSqlParser.KW_IS);
				this.state = 1749;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 1748;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1751;
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
				this.state = 1752;
				this.match(FlinkSqlParser.KW_IS);
				this.state = 1754;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 1753;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1756;
				localctx._kind = this.match(FlinkSqlParser.KW_DISTINCT);
				this.state = 1757;
				this.match(FlinkSqlParser.KW_FROM);
				this.state = 1758;
				localctx._right = this.valueExpression(0);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1760;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 1759;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1762;
				localctx._kind = this.match(FlinkSqlParser.KW_SIMILAR);
				this.state = 1763;
				this.match(FlinkSqlParser.KW_TO);
				this.state = 1764;
				localctx._right = this.valueExpression(0);
				this.state = 1767;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 198, this._ctx) ) {
				case 1:
					{
					this.state = 1765;
					this.match(FlinkSqlParser.KW_ESCAPE);
					this.state = 1766;
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
		this.enterRule(localctx, 266, FlinkSqlParser.RULE_likePredicate);
		let _la: number;
		try {
			this.state = 1800;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 205, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1772;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 1771;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1774;
				localctx._kind = this.match(FlinkSqlParser.KW_LIKE);
				this.state = 1775;
				localctx._quantifier = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===178 || _la===182)) {
				    localctx._quantifier = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1789;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 202, this._ctx) ) {
				case 1:
					{
					this.state = 1776;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1777;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				case 2:
					{
					this.state = 1778;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1779;
					this.expression();
					this.state = 1784;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===388) {
						{
						{
						this.state = 1780;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1781;
						this.expression();
						}
						}
						this.state = 1786;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1787;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1792;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 1791;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1794;
				localctx._kind = this.match(FlinkSqlParser.KW_LIKE);
				this.state = 1795;
				localctx._pattern = this.valueExpression(0);
				this.state = 1798;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 204, this._ctx) ) {
				case 1:
					{
					this.state = 1796;
					this.match(FlinkSqlParser.KW_ESCAPE);
					this.state = 1797;
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
		let _startState: number = 268;
		this.enterRecursionRule(localctx, 268, FlinkSqlParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1806;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 206, this._ctx) ) {
			case 1:
				{
				localctx = new ValueExpressionDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1803;
				this.primaryExpression(0);
				}
				break;
			case 2:
				{
				localctx = new ArithmeticUnaryContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1804;
				(localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 377)) & ~0x1F) === 0 && ((1 << (_la - 377)) & 3145729) !== 0))) {
				    (localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1805;
				this.valueExpression(7);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1829;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 208, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1827;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 207, this._ctx) ) {
					case 1:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1808;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1809;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===32 || ((((_la - 395)) & ~0x1F) === 0 && ((1 << (_la - 395)) & 145) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1810;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(7);
						}
						break;
					case 2:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1811;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1812;
						(localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 397)) & ~0x1F) === 0 && ((1 << (_la - 397)) & 11) !== 0))) {
						    (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1813;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(6);
						}
						break;
					case 3:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1814;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1815;
						(localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_AND_OP);
						this.state = 1816;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(5);
						}
						break;
					case 4:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1817;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1818;
						(localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_XOR_OP);
						this.state = 1819;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;
					case 5:
						{
						localctx = new ArithmeticBinaryContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1820;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1821;
						(localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_OR_OP);
						this.state = 1822;
						(localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;
					case 6:
						{
						localctx = new ComparisonContext(this, new ValueExpressionContext(this, _parentctx, _parentState));
						(localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1823;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1824;
						this.comparisonOperator();
						this.state = 1825;
						(localctx as ComparisonContext)._right = this.valueExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1831;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 208, this._ctx);
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
		let _startState: number = 270;
		this.enterRecursionRule(localctx, 270, FlinkSqlParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1923;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 218, this._ctx) ) {
			case 1:
				{
				localctx = new SearchedCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1833;
				this.match(FlinkSqlParser.KW_CASE);
				this.state = 1835;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1834;
					this.whenClause();
					}
					}
					this.state = 1837;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===366);
				this.state = 1841;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===239) {
					{
					this.state = 1839;
					this.match(FlinkSqlParser.KW_ELSE);
					this.state = 1840;
					(localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1843;
				this.match(FlinkSqlParser.KW_END);
				}
				break;
			case 2:
				{
				localctx = new SimpleCaseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1845;
				this.match(FlinkSqlParser.KW_CASE);
				this.state = 1846;
				(localctx as SimpleCaseContext)._value = this.expression();
				this.state = 1848;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1847;
					this.whenClause();
					}
					}
					this.state = 1850;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===366);
				this.state = 1854;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===239) {
					{
					this.state = 1852;
					this.match(FlinkSqlParser.KW_ELSE);
					this.state = 1853;
					(localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1856;
				this.match(FlinkSqlParser.KW_END);
				}
				break;
			case 3:
				{
				localctx = new CastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1858;
				this.match(FlinkSqlParser.KW_CAST);
				this.state = 1859;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1860;
				this.expression();
				this.state = 1861;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 1862;
				this.columnType();
				this.state = 1863;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 4:
				{
				localctx = new FirstContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1865;
				this.match(FlinkSqlParser.KW_FIRST);
				this.state = 1866;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1867;
				this.expression();
				this.state = 1870;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===60) {
					{
					this.state = 1868;
					this.match(FlinkSqlParser.KW_IGNORE);
					this.state = 1869;
					this.match(FlinkSqlParser.KW_NULLS);
					}
				}

				this.state = 1872;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 5:
				{
				localctx = new LastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1874;
				this.match(FlinkSqlParser.KW_LAST);
				this.state = 1875;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1876;
				this.expression();
				this.state = 1879;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===60) {
					{
					this.state = 1877;
					this.match(FlinkSqlParser.KW_IGNORE);
					this.state = 1878;
					this.match(FlinkSqlParser.KW_NULLS);
					}
				}

				this.state = 1881;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 6:
				{
				localctx = new PositionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1883;
				this.match(FlinkSqlParser.KW_POSITION);
				this.state = 1884;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1885;
				(localctx as PositionContext)._substr = this.valueExpression(0);
				this.state = 1886;
				this.match(FlinkSqlParser.KW_IN);
				this.state = 1887;
				(localctx as PositionContext)._str = this.valueExpression(0);
				this.state = 1888;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 7:
				{
				localctx = new ConstantDefaultContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1890;
				this.constant();
				}
				break;
			case 8:
				{
				localctx = new StarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1891;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;
			case 9:
				{
				localctx = new StarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1892;
				this.uid();
				this.state = 1893;
				this.match(FlinkSqlParser.DOT);
				this.state = 1894;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;
			case 10:
				{
				localctx = new SubqueryExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1896;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1897;
				this.queryStatement(0);
				this.state = 1898;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 11:
				{
				localctx = new FunctionCallContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1900;
				this.functionName();
				this.state = 1901;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1913;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 285736959) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 2688590049) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & 75514881) !== 0) || ((((_la - 271)) & ~0x1F) === 0 && ((1 << (_la - 271)) & 405012881) !== 0) || ((((_la - 310)) & ~0x1F) === 0 && ((1 << (_la - 310)) & 805840065) !== 0) || ((((_la - 347)) & ~0x1F) === 0 && ((1 << (_la - 347)) & 1107298419) !== 0) || ((((_la - 384)) & ~0x1F) === 0 && ((1 << (_la - 384)) & 65038337) !== 0)) {
					{
					this.state = 1903;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 215, this._ctx) ) {
					case 1:
						{
						this.state = 1902;
						this.setQuantifier();
						}
						break;
					}
					this.state = 1905;
					this.functionParam();
					this.state = 1910;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===388) {
						{
						{
						this.state = 1906;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1907;
						this.functionParam();
						}
						}
						this.state = 1912;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1915;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			case 12:
				{
				localctx = new ColumnReferenceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1917;
				this.identifier();
				}
				break;
			case 13:
				{
				localctx = new DereferenceContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1918;
				this.dereferenceDefinition();
				}
				break;
			case 14:
				{
				localctx = new ParenthesizedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1919;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1920;
				this.expression();
				this.state = 1921;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1932;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 219, this._ctx);
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
					this.state = 1925;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 1926;
					this.match(FlinkSqlParser.LS_BRACKET);
					this.state = 1927;
					(localctx as SubscriptContext)._index = this.valueExpression(0);
					this.state = 1928;
					this.match(FlinkSqlParser.RS_BRACKET);
					}
					}
				}
				this.state = 1934;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 219, this._ctx);
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
		this.enterRule(localctx, 272, FlinkSqlParser.RULE_functionName);
		try {
			this.state = 1938;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 220, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1935;
				this.reservedKeywordsUsedAsFuncName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1936;
				this.nonReservedKeywords();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1937;
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
		this.enterRule(localctx, 274, FlinkSqlParser.RULE_functionParam);
		try {
			this.state = 1944;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 221, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1940;
				this.reservedKeywordsUsedAsFuncParam();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1941;
				this.timeIntervalUnit();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1942;
				this.timePointUnit();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1943;
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
		this.enterRule(localctx, 276, FlinkSqlParser.RULE_dereferenceDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1946;
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
		this.enterRule(localctx, 278, FlinkSqlParser.RULE_correlationName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1948;
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
		this.enterRule(localctx, 280, FlinkSqlParser.RULE_qualifiedName);
		try {
			this.state = 1952;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 222, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1950;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1951;
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
		this.enterRule(localctx, 282, FlinkSqlParser.RULE_timeIntervalExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1954;
			this.match(FlinkSqlParser.KW_INTERVAL);
			this.state = 1957;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 223, this._ctx) ) {
			case 1:
				{
				this.state = 1955;
				this.errorCapturingMultiUnitsInterval();
				}
				break;
			case 2:
				{
				this.state = 1956;
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
		this.enterRule(localctx, 284, FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1959;
			this.multiUnitsInterval();
			this.state = 1961;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 224, this._ctx) ) {
			case 1:
				{
				this.state = 1960;
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
		this.enterRule(localctx, 286, FlinkSqlParser.RULE_multiUnitsInterval);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1966;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1963;
					this.intervalValue();
					this.state = 1964;
					this.timeIntervalUnit();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1968;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 225, this._ctx);
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
		this.enterRule(localctx, 288, FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1970;
			localctx._body = this.unitToUnitInterval();
			this.state = 1973;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 226, this._ctx) ) {
			case 1:
				{
				this.state = 1971;
				localctx._error1 = this.multiUnitsInterval();
				}
				break;
			case 2:
				{
				this.state = 1972;
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
		this.enterRule(localctx, 290, FlinkSqlParser.RULE_unitToUnitInterval);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1975;
			localctx._value = this.intervalValue();
			this.state = 1976;
			localctx._from_ = this.timeIntervalUnit();
			this.state = 1977;
			this.match(FlinkSqlParser.KW_TO);
			this.state = 1978;
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
		this.enterRule(localctx, 292, FlinkSqlParser.RULE_intervalValue);
		let _la: number;
		try {
			this.state = 1985;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 397:
			case 398:
			case 406:
			case 407:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1981;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===397 || _la===398) {
					{
					this.state = 1980;
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

				this.state = 1983;
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
				this.state = 1984;
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
		this.enterRule(localctx, 294, FlinkSqlParser.RULE_columnAlias);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1988;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===185) {
				{
				this.state = 1987;
				this.match(FlinkSqlParser.KW_AS);
				}
			}

			this.state = 1990;
			this.identifier();
			this.state = 1992;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===384) {
				{
				this.state = 1991;
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
		this.enterRule(localctx, 296, FlinkSqlParser.RULE_tableAlias);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1995;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===185) {
				{
				this.state = 1994;
				this.match(FlinkSqlParser.KW_AS);
				}
			}

			this.state = 1997;
			this.identifier();
			this.state = 1999;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 232, this._ctx) ) {
			case 1:
				{
				this.state = 1998;
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
		this.enterRule(localctx, 298, FlinkSqlParser.RULE_errorCapturingIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2001;
			this.identifier();
			this.state = 2002;
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
		this.enterRule(localctx, 300, FlinkSqlParser.RULE_errorCapturingIdentifierExtra);
		let _la: number;
		try {
			this.state = 2011;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 288:
				localctx = new ErrorIdentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2006;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2004;
					this.match(FlinkSqlParser.KW_MINUS);
					this.state = 2005;
					this.identifier();
					}
					}
					this.state = 2008;
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
		this.enterRule(localctx, 302, FlinkSqlParser.RULE_identifierList);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2013;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 2014;
			this.identifierSeq();
			this.state = 2015;
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
		this.enterRule(localctx, 304, FlinkSqlParser.RULE_identifierSeq);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2017;
			this.identifier();
			this.state = 2022;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
				{
				{
				this.state = 2018;
				this.match(FlinkSqlParser.COMMA);
				this.state = 2019;
				this.identifier();
				}
				}
				this.state = 2024;
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
		this.enterRule(localctx, 306, FlinkSqlParser.RULE_identifier);
		try {
			this.state = 2028;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 406:
			case 409:
				localctx = new UnquotedIdentifierAlternativeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2025;
				this.unquotedIdentifier();
				}
				break;
			case 405:
				localctx = new QuotedIdentifierAlternativeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2026;
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
				this.state = 2027;
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
		this.enterRule(localctx, 308, FlinkSqlParser.RULE_unquotedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2030;
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
		this.enterRule(localctx, 310, FlinkSqlParser.RULE_quotedIdentifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2032;
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
		this.enterRule(localctx, 312, FlinkSqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2034;
			this.match(FlinkSqlParser.KW_WHEN);
			this.state = 2035;
			localctx._condition = this.expression();
			this.state = 2036;
			this.match(FlinkSqlParser.KW_THEN);
			this.state = 2037;
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
		this.enterRule(localctx, 314, FlinkSqlParser.RULE_uid);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2039;
			this.identifier();
			this.state = 2044;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 237, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 2040;
					this.match(FlinkSqlParser.DOT);
					this.state = 2041;
					this.identifier();
					}
					}
				}
				this.state = 2046;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 237, this._ctx);
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
		this.enterRule(localctx, 316, FlinkSqlParser.RULE_withOption);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2047;
			this.match(FlinkSqlParser.KW_WITH);
			this.state = 2048;
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
		this.enterRule(localctx, 318, FlinkSqlParser.RULE_ifNotExists);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2050;
			this.match(FlinkSqlParser.KW_IF);
			this.state = 2051;
			this.match(FlinkSqlParser.KW_NOT);
			this.state = 2052;
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
		this.enterRule(localctx, 320, FlinkSqlParser.RULE_ifExists);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2054;
			this.match(FlinkSqlParser.KW_IF);
			this.state = 2055;
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
		this.enterRule(localctx, 322, FlinkSqlParser.RULE_tablePropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2057;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 2058;
			this.tableProperty();
			this.state = 2063;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===388) {
				{
				{
				this.state = 2059;
				this.match(FlinkSqlParser.COMMA);
				this.state = 2060;
				this.tableProperty();
				}
				}
				this.state = 2065;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2066;
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
		this.enterRule(localctx, 324, FlinkSqlParser.RULE_tableProperty);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2068;
			localctx._key = this.tablePropertyKey();
			this.state = 2073;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===249 || _la===352 || _la===373 || ((((_la - 405)) & ~0x1F) === 0 && ((1 << (_la - 405)) & 7) !== 0)) {
				{
				this.state = 2070;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===373) {
					{
					this.state = 2069;
					this.match(FlinkSqlParser.EQUAL_SYMBOL);
					}
				}

				this.state = 2072;
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
		this.enterRule(localctx, 326, FlinkSqlParser.RULE_tablePropertyKey);
		try {
			this.state = 2078;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 241, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2075;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2076;
				this.dereferenceDefinition();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2077;
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
		this.enterRule(localctx, 328, FlinkSqlParser.RULE_tablePropertyValue);
		try {
			this.state = 2084;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 406:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2080;
				this.match(FlinkSqlParser.DIG_LITERAL);
				}
				break;
			case 407:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2081;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case 249:
			case 352:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2082;
				this.booleanLiteral();
				}
				break;
			case 405:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2083;
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
		this.enterRule(localctx, 330, FlinkSqlParser.RULE_logicalOperator);
		try {
			this.state = 2092;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 181:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2086;
				this.match(FlinkSqlParser.KW_AND);
				}
				break;
			case 379:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2087;
				this.match(FlinkSqlParser.BIT_AND_OP);
				this.state = 2088;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case 305:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2089;
				this.match(FlinkSqlParser.KW_OR);
				}
				break;
			case 378:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2090;
				this.match(FlinkSqlParser.BIT_OR_OP);
				this.state = 2091;
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
		this.enterRule(localctx, 332, FlinkSqlParser.RULE_comparisonOperator);
		try {
			this.state = 2108;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 244, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2094;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2095;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2096;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2097;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2098;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2099;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 2100;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2101;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2102;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2103;
				this.match(FlinkSqlParser.EXCLAMATION_SYMBOL);
				this.state = 2104;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2105;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2106;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				this.state = 2107;
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
		this.enterRule(localctx, 334, FlinkSqlParser.RULE_bitOperator);
		try {
			this.state = 2117;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 375:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2110;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2111;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;
			case 374:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2112;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 2113;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case 379:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2114;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case 380:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2115;
				this.match(FlinkSqlParser.BIT_XOR_OP);
				}
				break;
			case 378:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2116;
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
		this.enterRule(localctx, 336, FlinkSqlParser.RULE_mathOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2119;
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
		this.enterRule(localctx, 338, FlinkSqlParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2121;
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
		this.enterRule(localctx, 340, FlinkSqlParser.RULE_constant);
		let _la: number;
		try {
			this.state = 2137;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 271:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2123;
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
				this.state = 2124;
				this.timePointLiteral();
				}
				break;
			case 405:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2125;
				this.stringLiteral();
				}
				break;
			case 397:
			case 406:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===397) {
					{
					this.state = 2126;
					this.match(FlinkSqlParser.HYPNEN_SIGN);
					}
				}

				this.state = 2129;
				this.decimalLiteral();
				}
				break;
			case 249:
			case 352:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2130;
				this.booleanLiteral();
				}
				break;
			case 407:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2131;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case 408:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2132;
				this.match(FlinkSqlParser.BIT_STRING);
				}
				break;
			case 298:
			case 299:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===298) {
					{
					this.state = 2133;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 2136;
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
		this.enterRule(localctx, 342, FlinkSqlParser.RULE_timePointLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2139;
			this.timePointUnit();
			this.state = 2140;
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
		this.enterRule(localctx, 344, FlinkSqlParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2142;
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
		this.enterRule(localctx, 346, FlinkSqlParser.RULE_decimalLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2144;
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
		this.enterRule(localctx, 348, FlinkSqlParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2146;
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
		this.enterRule(localctx, 350, FlinkSqlParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2148;
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
		this.enterRule(localctx, 352, FlinkSqlParser.RULE_timePointUnit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2150;
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
		this.enterRule(localctx, 354, FlinkSqlParser.RULE_timeIntervalUnit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2152;
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
		this.enterRule(localctx, 356, FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncParam);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2154;
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
		this.enterRule(localctx, 358, FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2156;
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
		this.enterRule(localctx, 360, FlinkSqlParser.RULE_reservedKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2158;
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
		this.enterRule(localctx, 362, FlinkSqlParser.RULE_nonReservedKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2160;
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
		case 79:
			return this.queryStatement_sempred(localctx as QueryStatementContext, predIndex);
		case 89:
			return this.tableExpression_sempred(localctx as TableExpressionContext, predIndex);
		case 131:
			return this.booleanExpression_sempred(localctx as BooleanExpressionContext, predIndex);
		case 134:
			return this.valueExpression_sempred(localctx as ValueExpressionContext, predIndex);
		case 135:
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
			return this.precpred(this._ctx, 6);
		case 7:
			return this.precpred(this._ctx, 5);
		case 8:
			return this.precpred(this._ctx, 4);
		case 9:
			return this.precpred(this._ctx, 3);
		case 10:
			return this.precpred(this._ctx, 2);
		case 11:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private primaryExpression_sempred(localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,410,2163,2,0,7,0,
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
	7,181,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,3,2,373,8,2,1,2,5,2,376,8,2,10,2,
	12,2,379,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,393,8,
	3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,411,
	8,5,1,6,1,6,3,6,415,8,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,3,8,424,8,8,1,8,1,8,
	1,8,3,8,429,8,8,1,9,1,9,1,9,5,9,434,8,9,10,9,12,9,437,9,9,1,10,1,10,1,11,
	1,11,3,11,443,8,11,1,11,1,11,3,11,447,8,11,1,12,1,12,1,12,1,12,1,12,5,12,
	454,8,12,10,12,12,12,457,9,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
	13,3,13,468,8,13,1,13,3,13,471,8,13,1,13,1,13,1,13,1,13,1,13,3,13,478,8,
	13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,486,8,13,1,13,1,13,1,13,3,13,491,
	8,13,1,13,3,13,494,8,13,1,14,1,14,1,14,1,14,1,14,3,14,501,8,14,1,15,1,15,
	1,15,1,15,1,16,1,16,3,16,509,8,16,1,17,1,17,3,17,513,8,17,1,18,1,18,1,18,
	1,18,1,19,1,19,1,19,1,19,1,19,1,19,3,19,525,8,19,1,19,1,19,1,19,1,19,1,
	19,1,19,3,19,533,8,19,1,19,1,19,3,19,537,8,19,1,19,1,19,1,19,1,19,1,19,
	1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,
	19,558,8,19,1,20,1,20,3,20,562,8,20,1,21,1,21,3,21,566,8,21,1,21,1,21,3,
	21,570,8,21,1,21,1,21,1,21,1,21,1,21,5,21,577,8,21,10,21,12,21,580,9,21,
	1,21,1,21,3,21,584,8,21,1,21,1,21,3,21,588,8,21,1,21,1,21,3,21,592,8,21,
	1,21,1,21,3,21,596,8,21,1,21,3,21,599,8,21,1,21,1,21,3,21,603,8,21,1,22,
	1,22,1,22,3,22,608,8,22,1,22,1,22,1,22,1,22,3,22,614,8,22,1,23,1,23,1,23,
	3,23,619,8,23,1,24,1,24,1,24,3,24,624,8,24,1,24,3,24,627,8,24,1,25,1,25,
	3,25,631,8,25,1,26,1,26,1,26,1,26,5,26,637,8,26,10,26,12,26,640,9,26,1,
	26,1,26,1,27,1,27,1,27,3,27,647,8,27,1,27,1,27,3,27,651,8,27,1,27,1,27,
	3,27,655,8,27,1,27,1,27,3,27,659,8,27,1,27,1,27,3,27,663,8,27,1,27,1,27,
	3,27,667,8,27,1,27,1,27,3,27,671,8,27,1,27,1,27,3,27,675,8,27,1,27,1,27,
	3,27,679,8,27,3,27,681,8,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,3,29,
	691,8,29,1,29,1,29,1,30,1,30,1,30,1,30,3,30,699,8,30,1,30,1,30,1,31,1,31,
	1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,
	33,1,33,5,33,721,8,33,10,33,12,33,724,9,33,1,33,1,33,1,34,1,34,3,34,730,
	8,34,1,34,1,34,1,34,1,34,3,34,736,8,34,1,34,3,34,739,8,34,1,34,3,34,742,
	8,34,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,3,36,752,8,36,1,36,3,36,755,
	8,36,1,37,1,37,1,38,1,38,1,38,1,38,3,38,763,8,38,1,39,1,39,1,40,1,40,1,
	40,1,40,1,40,1,40,1,41,1,41,3,41,775,8,41,1,41,1,41,1,41,1,41,1,41,1,41,
	1,42,1,42,1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,5,
	45,797,8,45,10,45,12,45,800,9,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,
	5,46,810,8,46,10,46,12,46,813,9,46,1,46,1,46,3,46,817,8,46,1,47,1,47,3,
	47,821,8,47,1,48,1,48,1,48,1,48,5,48,827,8,48,10,48,12,48,830,9,48,1,48,
	3,48,833,8,48,1,49,1,49,1,50,1,50,1,50,1,50,3,50,841,8,50,1,51,1,51,1,51,
	1,51,1,51,1,52,1,52,1,52,3,52,851,8,52,1,52,1,52,3,52,855,8,52,1,52,1,52,
	1,53,1,53,3,53,861,8,53,1,53,1,53,3,53,865,8,53,1,53,1,53,3,53,869,8,53,
	1,53,3,53,872,8,53,1,53,1,53,1,53,1,54,1,54,1,54,1,54,3,54,881,8,54,1,54,
	1,54,3,54,885,8,54,1,54,1,54,1,54,1,54,1,54,3,54,892,8,54,1,54,3,54,895,
	8,54,1,55,1,55,1,55,1,55,1,55,1,55,5,55,903,8,55,10,55,12,55,906,9,55,1,
	56,1,56,1,57,1,57,1,57,3,57,913,8,57,1,57,1,57,1,57,1,57,1,57,1,57,3,57,
	921,8,57,1,58,1,58,3,58,925,8,58,1,58,1,58,1,58,1,59,1,59,1,59,1,60,1,60,
	1,60,1,60,1,60,1,60,1,60,3,60,940,8,60,1,61,1,61,1,61,1,61,1,62,1,62,1,
	62,1,62,1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,3,64,959,8,64,1,65,
	1,65,1,65,1,65,1,65,1,66,1,66,1,66,1,66,3,66,970,8,66,1,66,1,66,3,66,974,
	8,66,1,66,1,66,1,66,1,66,1,66,3,66,981,8,66,1,67,1,67,1,67,3,67,986,8,67,
	1,67,1,67,1,68,1,68,3,68,992,8,68,1,68,1,68,3,68,996,8,68,1,68,1,68,1,69,
	1,69,1,69,3,69,1003,8,69,1,69,1,69,3,69,1007,8,69,1,70,1,70,3,70,1011,8,
	70,1,70,1,70,3,70,1015,8,70,1,70,1,70,1,71,1,71,1,71,1,71,3,71,1023,8,71,
	1,71,1,71,3,71,1027,8,71,1,71,1,71,1,72,3,72,1032,8,72,1,72,1,72,1,72,1,
	72,3,72,1038,8,72,1,73,1,73,1,73,1,73,3,73,1044,8,73,1,73,3,73,1047,8,73,
	1,73,1,73,3,73,1051,8,73,1,74,1,74,1,74,1,75,1,75,1,75,1,75,5,75,1060,8,
	75,10,75,12,75,1063,9,75,1,76,1,76,1,76,1,76,5,76,1069,8,76,10,76,12,76,
	1072,9,76,1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,77,1,77,4,77,1083,8,77,11,
	77,12,77,1084,1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,4,78,1095,8,78,11,
	78,12,78,1096,1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,
	79,1,79,3,79,1112,8,79,1,79,3,79,1115,8,79,1,79,1,79,3,79,1119,8,79,1,79,
	3,79,1122,8,79,3,79,1124,8,79,1,79,1,79,1,79,3,79,1129,8,79,1,79,1,79,3,
	79,1133,8,79,1,79,3,79,1136,8,79,5,79,1138,8,79,10,79,12,79,1141,9,79,1,
	80,1,80,1,80,1,80,5,80,1147,8,80,10,80,12,80,1150,9,80,1,81,1,81,1,81,1,
	81,5,81,1156,8,81,10,81,12,81,1159,9,81,1,82,1,82,1,82,1,82,1,82,5,82,1166,
	8,82,10,82,12,82,1169,9,82,1,82,1,82,3,82,1173,8,82,1,82,1,82,1,82,1,82,
	1,82,1,83,1,83,1,84,1,84,1,84,3,84,1185,8,84,1,84,3,84,1188,8,84,1,84,3,
	84,1191,8,84,1,84,3,84,1194,8,84,1,84,1,84,1,84,1,84,3,84,1200,8,84,1,85,
	1,85,3,85,1204,8,85,1,85,1,85,1,85,1,85,5,85,1210,8,85,10,85,12,85,1213,
	9,85,3,85,1215,8,85,1,86,1,86,1,86,3,86,1220,8,86,1,86,3,86,1223,8,86,3,
	86,1225,8,86,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,
	3,87,1239,8,87,1,88,1,88,1,88,1,89,1,89,1,89,1,89,5,89,1248,8,89,10,89,
	12,89,1251,9,89,1,89,1,89,3,89,1255,8,89,1,89,1,89,1,89,1,89,1,89,1,89,
	3,89,1263,8,89,1,89,3,89,1266,8,89,1,89,3,89,1269,8,89,1,89,1,89,1,89,3,
	89,1274,8,89,5,89,1276,8,89,10,89,12,89,1279,9,89,1,90,1,90,3,90,1283,8,
	90,1,91,3,91,1286,8,91,1,91,1,91,3,91,1290,8,91,1,91,3,91,1293,8,91,1,91,
	3,91,1296,8,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,5,91,1306,8,91,10,
	91,12,91,1309,9,91,1,91,1,91,1,91,1,91,3,91,1315,8,91,1,91,1,91,1,91,1,
	91,1,91,1,91,1,91,1,91,1,91,3,91,1326,8,91,1,92,1,92,1,93,1,93,1,93,1,93,
	1,93,1,93,1,94,1,94,1,95,1,95,1,95,1,95,1,95,1,96,1,96,1,96,1,96,1,96,1,
	97,1,97,1,97,1,97,1,97,5,97,1353,8,97,10,97,12,97,1356,9,97,1,97,1,97,1,
	98,1,98,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,
	1,99,1,99,3,99,1377,8,99,1,100,1,100,1,101,1,101,1,101,1,101,1,101,1,102,
	1,102,1,102,1,102,1,102,1,102,1,102,5,102,1393,8,102,10,102,12,102,1396,
	9,102,1,102,1,102,3,102,1400,8,102,1,103,1,103,1,103,1,104,1,104,1,104,
	1,104,1,104,5,104,1410,8,104,10,104,12,104,1413,9,104,1,105,1,105,1,105,
	1,105,1,105,1,105,1,105,1,105,5,105,1423,8,105,10,105,12,105,1426,9,105,
	1,105,1,105,1,105,1,105,1,105,1,105,1,105,5,105,1435,8,105,10,105,12,105,
	1438,9,105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,5,105,1447,8,105,10,
	105,12,105,1450,9,105,1,105,1,105,3,105,1454,8,105,1,106,1,106,1,106,1,
	107,1,107,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,109,1,109,1,110,1,
	110,1,111,1,111,1,111,1,112,1,112,1,112,1,112,5,112,1479,8,112,10,112,12,
	112,1482,9,112,1,113,1,113,1,113,1,113,1,114,3,114,1489,8,114,1,114,1,114,
	3,114,1493,8,114,1,114,3,114,1496,8,114,1,114,3,114,1499,8,114,1,114,1,
	114,1,115,1,115,1,115,3,115,1506,8,115,1,115,3,115,1509,8,115,1,115,3,115,
	1512,8,115,1,115,3,115,1515,8,115,1,115,3,115,1518,8,115,1,115,3,115,1521,
	8,115,1,115,1,115,1,115,3,115,1526,8,115,1,115,3,115,1529,8,115,1,116,1,
	116,1,116,1,116,1,116,5,116,1536,8,116,10,116,12,116,1539,9,116,1,117,1,
	117,3,117,1543,8,117,1,117,1,117,3,117,1547,8,117,1,118,1,118,1,118,3,118,
	1552,8,118,1,119,1,119,1,119,1,119,1,119,5,119,1559,8,119,10,119,12,119,
	1562,9,119,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,
	1,120,1,120,1,120,1,120,1,120,1,120,3,120,1580,8,120,1,121,1,121,1,121,
	1,121,5,121,1586,8,121,10,121,12,121,1589,9,121,1,122,1,122,1,122,4,122,
	1594,8,122,11,122,12,122,1595,1,122,1,122,3,122,1600,8,122,1,123,1,123,
	3,123,1604,8,123,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,3,124,
	1614,8,124,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,
	1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,
	1,125,1,125,3,125,1640,8,125,1,126,1,126,1,126,1,126,5,126,1646,8,126,10,
	126,12,126,1649,9,126,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,
	127,3,127,1660,8,127,1,128,1,128,1,128,1,128,1,128,1,129,1,129,1,129,1,
	130,1,130,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,3,
	131,1682,8,131,3,131,1684,8,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
	1,131,1,131,3,131,1695,8,131,1,131,5,131,1698,8,131,10,131,12,131,1701,
	9,131,1,132,3,132,1704,8,132,1,132,1,132,3,132,1708,8,132,1,132,1,132,1,
	132,1,132,1,132,3,132,1715,8,132,1,132,1,132,1,132,1,132,1,132,5,132,1722,
	8,132,10,132,12,132,1725,9,132,1,132,1,132,1,132,3,132,1730,8,132,1,132,
	1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,3,132,1743,
	8,132,1,132,1,132,1,132,1,132,1,132,3,132,1750,8,132,1,132,1,132,1,132,
	3,132,1755,8,132,1,132,1,132,1,132,1,132,3,132,1761,8,132,1,132,1,132,1,
	132,1,132,1,132,3,132,1768,8,132,3,132,1770,8,132,1,133,3,133,1773,8,133,
	1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,5,133,1783,8,133,10,133,
	12,133,1786,9,133,1,133,1,133,3,133,1790,8,133,1,133,3,133,1793,8,133,1,
	133,1,133,1,133,1,133,3,133,1799,8,133,3,133,1801,8,133,1,134,1,134,1,134,
	1,134,3,134,1807,8,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,
	1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,5,134,
	1828,8,134,10,134,12,134,1831,9,134,1,135,1,135,1,135,4,135,1836,8,135,
	11,135,12,135,1837,1,135,1,135,3,135,1842,8,135,1,135,1,135,1,135,1,135,
	1,135,4,135,1849,8,135,11,135,12,135,1850,1,135,1,135,3,135,1855,8,135,
	1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,
	1,135,1,135,3,135,1871,8,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,
	3,135,1880,8,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,
	1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,
	1,135,3,135,1904,8,135,1,135,1,135,1,135,5,135,1909,8,135,10,135,12,135,
	1912,9,135,3,135,1914,8,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,
	135,3,135,1924,8,135,1,135,1,135,1,135,1,135,1,135,5,135,1931,8,135,10,
	135,12,135,1934,9,135,1,136,1,136,1,136,3,136,1939,8,136,1,137,1,137,1,
	137,1,137,3,137,1945,8,137,1,138,1,138,1,139,1,139,1,140,1,140,3,140,1953,
	8,140,1,141,1,141,1,141,3,141,1958,8,141,1,142,1,142,3,142,1962,8,142,1,
	143,1,143,1,143,4,143,1967,8,143,11,143,12,143,1968,1,144,1,144,1,144,3,
	144,1974,8,144,1,145,1,145,1,145,1,145,1,145,1,146,3,146,1982,8,146,1,146,
	1,146,3,146,1986,8,146,1,147,3,147,1989,8,147,1,147,1,147,3,147,1993,8,
	147,1,148,3,148,1996,8,148,1,148,1,148,3,148,2000,8,148,1,149,1,149,1,149,
	1,150,1,150,4,150,2007,8,150,11,150,12,150,2008,1,150,3,150,2012,8,150,
	1,151,1,151,1,151,1,151,1,152,1,152,1,152,5,152,2021,8,152,10,152,12,152,
	2024,9,152,1,153,1,153,1,153,3,153,2029,8,153,1,154,1,154,1,155,1,155,1,
	156,1,156,1,156,1,156,1,156,1,157,1,157,1,157,5,157,2043,8,157,10,157,12,
	157,2046,9,157,1,158,1,158,1,158,1,159,1,159,1,159,1,159,1,160,1,160,1,
	160,1,161,1,161,1,161,1,161,5,161,2062,8,161,10,161,12,161,2065,9,161,1,
	161,1,161,1,162,1,162,3,162,2071,8,162,1,162,3,162,2074,8,162,1,163,1,163,
	1,163,3,163,2079,8,163,1,164,1,164,1,164,1,164,3,164,2085,8,164,1,165,1,
	165,1,165,1,165,1,165,1,165,3,165,2093,8,165,1,166,1,166,1,166,1,166,1,
	166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,3,166,2109,8,
	166,1,167,1,167,1,167,1,167,1,167,1,167,1,167,3,167,2118,8,167,1,168,1,
	168,1,169,1,169,1,170,1,170,1,170,1,170,3,170,2128,8,170,1,170,1,170,1,
	170,1,170,1,170,3,170,2135,8,170,1,170,3,170,2138,8,170,1,171,1,171,1,171,
	1,172,1,172,1,173,1,173,1,174,1,174,1,175,1,175,1,176,1,176,1,177,1,177,
	1,178,1,178,1,179,1,179,1,180,1,180,1,181,1,181,1,181,1,2044,5,158,178,
	262,268,270,182,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
	40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,
	88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,
	128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,
	164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,
	200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,
	236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,
	272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,304,306,
	308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,338,340,342,
	344,346,348,350,352,354,356,358,360,362,0,47,2,0,30,30,234,234,3,0,16,16,
	38,38,68,68,4,0,13,13,26,26,65,65,167,167,2,0,12,12,25,25,2,0,252,252,263,
	263,2,0,166,166,344,344,2,0,4,4,118,118,1,0,108,112,3,0,195,195,225,225,
	299,299,11,0,10,10,146,146,152,152,191,192,204,204,226,226,268,269,335,
	335,347,347,349,349,364,365,2,0,369,369,371,371,4,0,228,229,236,236,250,
	250,300,300,2,0,184,184,293,293,2,0,41,41,264,264,3,0,21,21,96,96,178,178,
	3,0,41,41,94,94,264,264,3,0,53,53,90,90,170,170,3,0,66,66,107,107,126,126,
	2,0,11,11,123,123,2,0,93,93,272,272,3,0,243,243,270,270,354,354,4,0,253,
	253,265,265,279,279,323,323,3,0,23,23,57,57,156,156,5,0,24,24,139,140,145,
	145,151,151,302,302,2,0,221,221,326,326,3,0,57,57,136,136,156,156,2,0,8,
	8,30,30,2,0,45,45,73,73,4,0,249,249,299,299,352,352,356,356,2,0,186,186,
	340,340,2,0,178,178,182,182,2,0,377,377,397,398,4,0,32,32,395,395,399,399,
	402,402,2,0,397,398,400,400,1,0,397,398,1,0,406,407,2,0,406,406,409,409,
	4,0,32,32,395,395,397,399,401,402,3,0,298,298,376,377,397,398,2,0,249,249,
	352,352,2,0,178,178,235,235,10,0,78,78,80,80,114,114,171,171,227,227,261,
	261,289,289,292,292,329,329,372,372,16,0,14,14,27,28,36,36,58,58,78,81,
	85,86,114,114,130,130,171,172,175,175,227,227,261,261,289,289,292,292,329,
	329,372,372,6,0,178,178,196,196,235,235,278,278,351,351,395,395,28,0,59,
	59,77,77,114,114,171,171,177,177,184,184,188,188,202,203,209,209,211,211,
	218,218,225,225,258,258,261,261,275,275,279,279,289,289,292,292,310,310,
	316,317,320,320,323,323,329,329,338,339,347,348,353,353,358,358,372,372,
	5,0,177,241,243,316,318,339,341,350,352,372,3,0,4,35,37,171,173,176,2346,
	0,364,1,0,0,0,2,367,1,0,0,0,4,377,1,0,0,0,6,392,1,0,0,0,8,394,1,0,0,0,10,
	410,1,0,0,0,12,414,1,0,0,0,14,416,1,0,0,0,16,419,1,0,0,0,18,430,1,0,0,0,
	20,438,1,0,0,0,22,446,1,0,0,0,24,448,1,0,0,0,26,493,1,0,0,0,28,495,1,0,
	0,0,30,502,1,0,0,0,32,506,1,0,0,0,34,510,1,0,0,0,36,514,1,0,0,0,38,557,
	1,0,0,0,40,561,1,0,0,0,42,563,1,0,0,0,44,604,1,0,0,0,46,618,1,0,0,0,48,
	620,1,0,0,0,50,630,1,0,0,0,52,632,1,0,0,0,54,680,1,0,0,0,56,682,1,0,0,0,
	58,686,1,0,0,0,60,694,1,0,0,0,62,702,1,0,0,0,64,706,1,0,0,0,66,713,1,0,
	0,0,68,741,1,0,0,0,70,743,1,0,0,0,72,746,1,0,0,0,74,756,1,0,0,0,76,758,
	1,0,0,0,78,764,1,0,0,0,80,766,1,0,0,0,82,774,1,0,0,0,84,782,1,0,0,0,86,
	784,1,0,0,0,88,788,1,0,0,0,90,792,1,0,0,0,92,816,1,0,0,0,94,820,1,0,0,0,
	96,822,1,0,0,0,98,834,1,0,0,0,100,840,1,0,0,0,102,842,1,0,0,0,104,847,1,
	0,0,0,106,858,1,0,0,0,108,876,1,0,0,0,110,896,1,0,0,0,112,907,1,0,0,0,114,
	909,1,0,0,0,116,922,1,0,0,0,118,929,1,0,0,0,120,932,1,0,0,0,122,941,1,0,
	0,0,124,945,1,0,0,0,126,949,1,0,0,0,128,952,1,0,0,0,130,960,1,0,0,0,132,
	965,1,0,0,0,134,982,1,0,0,0,136,989,1,0,0,0,138,999,1,0,0,0,140,1008,1,
	0,0,0,142,1018,1,0,0,0,144,1037,1,0,0,0,146,1039,1,0,0,0,148,1052,1,0,0,
	0,150,1055,1,0,0,0,152,1064,1,0,0,0,154,1075,1,0,0,0,156,1088,1,0,0,0,158,
	1123,1,0,0,0,160,1142,1,0,0,0,162,1151,1,0,0,0,164,1160,1,0,0,0,166,1179,
	1,0,0,0,168,1199,1,0,0,0,170,1201,1,0,0,0,172,1224,1,0,0,0,174,1238,1,0,
	0,0,176,1240,1,0,0,0,178,1254,1,0,0,0,180,1280,1,0,0,0,182,1325,1,0,0,0,
	184,1327,1,0,0,0,186,1329,1,0,0,0,188,1335,1,0,0,0,190,1337,1,0,0,0,192,
	1342,1,0,0,0,194,1347,1,0,0,0,196,1359,1,0,0,0,198,1376,1,0,0,0,200,1378,
	1,0,0,0,202,1380,1,0,0,0,204,1399,1,0,0,0,206,1401,1,0,0,0,208,1404,1,0,
	0,0,210,1453,1,0,0,0,212,1455,1,0,0,0,214,1458,1,0,0,0,216,1460,1,0,0,0,
	218,1467,1,0,0,0,220,1469,1,0,0,0,222,1471,1,0,0,0,224,1474,1,0,0,0,226,
	1483,1,0,0,0,228,1488,1,0,0,0,230,1502,1,0,0,0,232,1530,1,0,0,0,234,1540,
	1,0,0,0,236,1548,1,0,0,0,238,1553,1,0,0,0,240,1579,1,0,0,0,242,1581,1,0,
	0,0,244,1590,1,0,0,0,246,1601,1,0,0,0,248,1613,1,0,0,0,250,1639,1,0,0,0,
	252,1641,1,0,0,0,254,1659,1,0,0,0,256,1661,1,0,0,0,258,1666,1,0,0,0,260,
	1669,1,0,0,0,262,1683,1,0,0,0,264,1769,1,0,0,0,266,1800,1,0,0,0,268,1806,
	1,0,0,0,270,1923,1,0,0,0,272,1938,1,0,0,0,274,1944,1,0,0,0,276,1946,1,0,
	0,0,278,1948,1,0,0,0,280,1952,1,0,0,0,282,1954,1,0,0,0,284,1959,1,0,0,0,
	286,1966,1,0,0,0,288,1970,1,0,0,0,290,1975,1,0,0,0,292,1985,1,0,0,0,294,
	1988,1,0,0,0,296,1995,1,0,0,0,298,2001,1,0,0,0,300,2011,1,0,0,0,302,2013,
	1,0,0,0,304,2017,1,0,0,0,306,2028,1,0,0,0,308,2030,1,0,0,0,310,2032,1,0,
	0,0,312,2034,1,0,0,0,314,2039,1,0,0,0,316,2047,1,0,0,0,318,2050,1,0,0,0,
	320,2054,1,0,0,0,322,2057,1,0,0,0,324,2068,1,0,0,0,326,2078,1,0,0,0,328,
	2084,1,0,0,0,330,2092,1,0,0,0,332,2108,1,0,0,0,334,2117,1,0,0,0,336,2119,
	1,0,0,0,338,2121,1,0,0,0,340,2137,1,0,0,0,342,2139,1,0,0,0,344,2142,1,0,
	0,0,346,2144,1,0,0,0,348,2146,1,0,0,0,350,2148,1,0,0,0,352,2150,1,0,0,0,
	354,2152,1,0,0,0,356,2154,1,0,0,0,358,2156,1,0,0,0,360,2158,1,0,0,0,362,
	2160,1,0,0,0,364,365,3,2,1,0,365,366,5,0,0,1,366,1,1,0,0,0,367,368,3,4,
	2,0,368,369,5,0,0,1,369,3,1,0,0,0,370,372,3,6,3,0,371,373,5,389,0,0,372,
	371,1,0,0,0,372,373,1,0,0,0,373,376,1,0,0,0,374,376,3,8,4,0,375,370,1,0,
	0,0,375,374,1,0,0,0,376,379,1,0,0,0,377,375,1,0,0,0,377,378,1,0,0,0,378,
	5,1,0,0,0,379,377,1,0,0,0,380,393,3,10,5,0,381,393,3,12,6,0,382,393,3,14,
	7,0,383,393,3,16,8,0,384,393,3,22,11,0,385,393,3,26,13,0,386,393,3,28,14,
	0,387,393,3,30,15,0,388,393,3,32,16,0,389,393,3,34,17,0,390,393,3,36,18,
	0,391,393,3,38,19,0,392,380,1,0,0,0,392,381,1,0,0,0,392,382,1,0,0,0,392,
	383,1,0,0,0,392,384,1,0,0,0,392,385,1,0,0,0,392,386,1,0,0,0,392,387,1,0,
	0,0,392,388,1,0,0,0,392,389,1,0,0,0,392,390,1,0,0,0,392,391,1,0,0,0,393,
	7,1,0,0,0,394,395,5,389,0,0,395,9,1,0,0,0,396,411,3,40,20,0,397,411,3,104,
	52,0,398,411,3,106,53,0,399,411,3,108,54,0,400,411,3,102,51,0,401,411,3,
	114,57,0,402,411,3,128,64,0,403,411,3,130,65,0,404,411,3,132,66,0,405,411,
	3,134,67,0,406,411,3,136,68,0,407,411,3,138,69,0,408,411,3,140,70,0,409,
	411,3,142,71,0,410,396,1,0,0,0,410,397,1,0,0,0,410,398,1,0,0,0,410,399,
	1,0,0,0,410,400,1,0,0,0,410,401,1,0,0,0,410,402,1,0,0,0,410,403,1,0,0,0,
	410,404,1,0,0,0,410,405,1,0,0,0,410,406,1,0,0,0,410,407,1,0,0,0,410,408,
	1,0,0,0,410,409,1,0,0,0,411,11,1,0,0,0,412,415,3,158,79,0,413,415,3,144,
	72,0,414,412,1,0,0,0,414,413,1,0,0,0,415,13,1,0,0,0,416,417,7,0,0,0,417,
	418,3,314,157,0,418,15,1,0,0,0,419,423,5,246,0,0,420,424,3,18,9,0,421,422,
	5,101,0,0,422,424,5,251,0,0,423,420,1,0,0,0,423,421,1,0,0,0,423,424,1,0,
	0,0,424,428,1,0,0,0,425,429,3,12,6,0,426,429,3,146,73,0,427,429,3,156,78,
	0,428,425,1,0,0,0,428,426,1,0,0,0,428,427,1,0,0,0,429,17,1,0,0,0,430,435,
	3,20,10,0,431,432,5,388,0,0,432,434,3,20,10,0,433,431,1,0,0,0,434,437,1,
	0,0,0,435,433,1,0,0,0,435,436,1,0,0,0,436,19,1,0,0,0,437,435,1,0,0,0,438,
	439,7,1,0,0,439,21,1,0,0,0,440,442,5,161,0,0,441,443,5,12,0,0,442,441,1,
	0,0,0,442,443,1,0,0,0,443,444,1,0,0,0,444,447,3,314,157,0,445,447,3,24,
	12,0,446,440,1,0,0,0,446,445,1,0,0,0,447,23,1,0,0,0,448,449,5,161,0,0,449,
	450,5,84,0,0,450,455,3,314,157,0,451,452,5,388,0,0,452,454,3,314,157,0,
	453,451,1,0,0,0,454,457,1,0,0,0,455,453,1,0,0,0,455,456,1,0,0,0,456,25,
	1,0,0,0,457,455,1,0,0,0,458,459,5,332,0,0,459,494,7,2,0,0,460,461,5,332,
	0,0,461,462,5,222,0,0,462,494,7,3,0,0,463,464,5,332,0,0,464,467,5,149,0,
	0,465,466,7,4,0,0,466,468,3,314,157,0,467,465,1,0,0,0,467,468,1,0,0,0,468,
	470,1,0,0,0,469,471,3,266,133,0,470,469,1,0,0,0,470,471,1,0,0,0,471,494,
	1,0,0,0,472,473,5,332,0,0,473,474,5,20,0,0,474,475,7,4,0,0,475,477,3,314,
	157,0,476,478,3,266,133,0,477,476,1,0,0,0,477,478,1,0,0,0,478,494,1,0,0,
	0,479,480,5,332,0,0,480,481,5,219,0,0,481,482,7,5,0,0,482,494,3,314,157,
	0,483,485,5,332,0,0,484,486,5,360,0,0,485,484,1,0,0,0,485,486,1,0,0,0,486,
	487,1,0,0,0,487,494,5,51,0,0,488,490,5,332,0,0,489,491,5,253,0,0,490,489,
	1,0,0,0,490,491,1,0,0,0,491,492,1,0,0,0,492,494,5,84,0,0,493,458,1,0,0,
	0,493,460,1,0,0,0,493,463,1,0,0,0,493,472,1,0,0,0,493,479,1,0,0,0,493,483,
	1,0,0,0,493,488,1,0,0,0,494,27,1,0,0,0,495,496,5,76,0,0,496,497,5,291,0,
	0,497,500,3,314,157,0,498,499,5,369,0,0,499,501,3,322,161,0,500,498,1,0,
	0,0,500,501,1,0,0,0,501,29,1,0,0,0,502,503,5,159,0,0,503,504,5,291,0,0,
	504,505,3,314,157,0,505,31,1,0,0,0,506,508,5,331,0,0,507,509,3,324,162,
	0,508,507,1,0,0,0,508,509,1,0,0,0,509,33,1,0,0,0,510,512,5,321,0,0,511,
	513,3,326,163,0,512,511,1,0,0,0,512,513,1,0,0,0,513,35,1,0,0,0,514,515,
	7,6,0,0,515,516,5,64,0,0,516,517,3,112,56,0,517,37,1,0,0,0,518,519,5,4,
	0,0,519,520,5,64,0,0,520,521,5,369,0,0,521,524,5,410,0,0,522,523,5,185,
	0,0,523,525,3,314,157,0,524,522,1,0,0,0,524,525,1,0,0,0,525,558,1,0,0,0,
	526,527,5,4,0,0,527,528,5,43,0,0,528,529,5,369,0,0,529,532,5,410,0,0,530,
	531,5,185,0,0,531,533,3,314,157,0,532,530,1,0,0,0,532,533,1,0,0,0,533,536,
	1,0,0,0,534,535,5,119,0,0,535,537,3,314,157,0,536,534,1,0,0,0,536,537,1,
	0,0,0,537,558,1,0,0,0,538,539,5,4,0,0,539,540,7,7,0,0,540,541,5,369,0,0,
	541,542,5,410,0,0,542,543,5,119,0,0,543,558,3,314,157,0,544,545,5,4,0,0,
	545,546,5,113,0,0,546,558,5,410,0,0,547,548,5,4,0,0,548,549,5,35,0,0,549,
	550,5,43,0,0,550,551,5,369,0,0,551,552,5,410,0,0,552,553,5,119,0,0,553,
	554,3,314,157,0,554,555,5,69,0,0,555,556,3,314,157,0,556,558,1,0,0,0,557,
	518,1,0,0,0,557,526,1,0,0,0,557,538,1,0,0,0,557,544,1,0,0,0,557,547,1,0,
	0,0,558,39,1,0,0,0,559,562,3,42,21,0,560,562,3,44,22,0,561,559,1,0,0,0,
	561,560,1,0,0,0,562,41,1,0,0,0,563,565,5,219,0,0,564,566,5,150,0,0,565,
	564,1,0,0,0,565,566,1,0,0,0,566,567,1,0,0,0,567,569,5,344,0,0,568,570,3,
	318,159,0,569,568,1,0,0,0,569,570,1,0,0,0,570,571,1,0,0,0,571,572,3,98,
	49,0,572,573,5,384,0,0,573,578,3,46,23,0,574,575,5,388,0,0,575,577,3,46,
	23,0,576,574,1,0,0,0,577,580,1,0,0,0,578,576,1,0,0,0,578,579,1,0,0,0,579,
	583,1,0,0,0,580,578,1,0,0,0,581,582,5,388,0,0,582,584,3,80,40,0,583,581,
	1,0,0,0,583,584,1,0,0,0,584,587,1,0,0,0,585,586,5,388,0,0,586,588,3,82,
	41,0,587,585,1,0,0,0,587,588,1,0,0,0,588,591,1,0,0,0,589,590,5,388,0,0,
	590,592,3,86,43,0,591,589,1,0,0,0,591,592,1,0,0,0,592,593,1,0,0,0,593,595,
	5,385,0,0,594,596,3,70,35,0,595,594,1,0,0,0,595,596,1,0,0,0,596,598,1,0,
	0,0,597,599,3,88,44,0,598,597,1,0,0,0,598,599,1,0,0,0,599,600,1,0,0,0,600,
	602,3,316,158,0,601,603,3,96,48,0,602,601,1,0,0,0,602,603,1,0,0,0,603,43,
	1,0,0,0,604,605,5,219,0,0,605,607,5,344,0,0,606,608,3,318,159,0,607,606,
	1,0,0,0,607,608,1,0,0,0,608,609,1,0,0,0,609,610,3,98,49,0,610,613,3,316,
	158,0,611,612,5,185,0,0,612,614,3,158,79,0,613,611,1,0,0,0,613,614,1,0,
	0,0,614,45,1,0,0,0,615,619,3,48,24,0,616,619,3,72,36,0,617,619,3,76,38,
	0,618,615,1,0,0,0,618,616,1,0,0,0,618,617,1,0,0,0,619,47,1,0,0,0,620,621,
	3,50,25,0,621,623,3,54,27,0,622,624,3,68,34,0,623,622,1,0,0,0,623,624,1,
	0,0,0,624,626,1,0,0,0,625,627,3,70,35,0,626,625,1,0,0,0,626,627,1,0,0,0,
	627,49,1,0,0,0,628,631,3,314,157,0,629,631,3,260,130,0,630,628,1,0,0,0,
	630,629,1,0,0,0,631,51,1,0,0,0,632,633,5,384,0,0,633,638,3,50,25,0,634,
	635,5,388,0,0,635,637,3,50,25,0,636,634,1,0,0,0,637,640,1,0,0,0,638,636,
	1,0,0,0,638,639,1,0,0,0,639,641,1,0,0,0,640,638,1,0,0,0,641,642,5,385,0,
	0,642,53,1,0,0,0,643,681,7,8,0,0,644,646,7,9,0,0,645,647,3,56,28,0,646,
	645,1,0,0,0,646,647,1,0,0,0,647,681,1,0,0,0,648,650,5,348,0,0,649,651,3,
	56,28,0,650,649,1,0,0,0,650,651,1,0,0,0,651,658,1,0,0,0,652,654,7,10,0,
	0,653,655,5,282,0,0,654,653,1,0,0,0,654,655,1,0,0,0,655,656,1,0,0,0,656,
	657,5,347,0,0,657,659,5,176,0,0,658,652,1,0,0,0,658,659,1,0,0,0,659,681,
	1,0,0,0,660,662,7,11,0,0,661,663,3,58,29,0,662,661,1,0,0,0,662,663,1,0,
	0,0,663,681,1,0,0,0,664,666,7,12,0,0,665,667,3,62,31,0,666,665,1,0,0,0,
	666,667,1,0,0,0,667,681,1,0,0,0,668,670,5,77,0,0,669,671,3,64,32,0,670,
	669,1,0,0,0,670,671,1,0,0,0,671,681,1,0,0,0,672,674,5,327,0,0,673,675,3,
	66,33,0,674,673,1,0,0,0,674,675,1,0,0,0,675,681,1,0,0,0,676,678,5,115,0,
	0,677,679,3,60,30,0,678,677,1,0,0,0,678,679,1,0,0,0,679,681,1,0,0,0,680,
	643,1,0,0,0,680,644,1,0,0,0,680,648,1,0,0,0,680,660,1,0,0,0,680,664,1,0,
	0,0,680,668,1,0,0,0,680,672,1,0,0,0,680,676,1,0,0,0,681,55,1,0,0,0,682,
	683,5,384,0,0,683,684,3,346,173,0,684,685,5,385,0,0,685,57,1,0,0,0,686,
	687,5,384,0,0,687,690,3,346,173,0,688,689,5,388,0,0,689,691,3,346,173,0,
	690,688,1,0,0,0,690,691,1,0,0,0,691,692,1,0,0,0,692,693,5,385,0,0,693,59,
	1,0,0,0,694,695,5,384,0,0,695,698,3,344,172,0,696,697,5,388,0,0,697,699,
	3,344,172,0,698,696,1,0,0,0,698,699,1,0,0,0,699,700,1,0,0,0,700,701,5,385,
	0,0,701,61,1,0,0,0,702,703,5,375,0,0,703,704,3,54,27,0,704,705,5,374,0,
	0,705,63,1,0,0,0,706,707,5,375,0,0,707,708,3,54,27,0,708,709,5,388,0,0,
	709,710,3,54,27,0,710,711,1,0,0,0,711,712,5,374,0,0,712,65,1,0,0,0,713,
	714,5,375,0,0,714,715,3,50,25,0,715,722,3,54,27,0,716,717,5,388,0,0,717,
	718,3,50,25,0,718,719,3,54,27,0,719,721,1,0,0,0,720,716,1,0,0,0,721,724,
	1,0,0,0,722,720,1,0,0,0,722,723,1,0,0,0,723,725,1,0,0,0,724,722,1,0,0,0,
	725,726,5,374,0,0,726,67,1,0,0,0,727,728,5,215,0,0,728,730,3,84,42,0,729,
	727,1,0,0,0,729,730,1,0,0,0,730,731,1,0,0,0,731,732,5,318,0,0,732,735,5,
	69,0,0,733,734,5,298,0,0,734,736,5,34,0,0,735,733,1,0,0,0,735,736,1,0,0,
	0,736,742,1,0,0,0,737,739,5,298,0,0,738,737,1,0,0,0,738,739,1,0,0,0,739,
	740,1,0,0,0,740,742,5,299,0,0,741,729,1,0,0,0,741,738,1,0,0,0,742,69,1,
	0,0,0,743,744,5,18,0,0,744,745,5,405,0,0,745,71,1,0,0,0,746,747,3,50,25,
	0,747,748,3,54,27,0,748,751,5,287,0,0,749,750,5,252,0,0,750,752,3,74,37,
	0,751,749,1,0,0,0,751,752,1,0,0,0,752,754,1,0,0,0,753,755,5,168,0,0,754,
	753,1,0,0,0,754,755,1,0,0,0,755,73,1,0,0,0,756,757,5,405,0,0,757,75,1,0,
	0,0,758,759,3,50,25,0,759,760,5,185,0,0,760,762,3,78,39,0,761,763,3,70,
	35,0,762,761,1,0,0,0,762,763,1,0,0,0,763,77,1,0,0,0,764,765,3,260,130,0,
	765,79,1,0,0,0,766,767,5,169,0,0,767,768,5,251,0,0,768,769,3,260,130,0,
	769,770,5,185,0,0,770,771,3,260,130,0,771,81,1,0,0,0,772,773,5,215,0,0,
	773,775,3,84,42,0,774,772,1,0,0,0,774,775,1,0,0,0,775,776,1,0,0,0,776,777,
	5,318,0,0,777,778,5,69,0,0,778,779,3,52,26,0,779,780,5,298,0,0,780,781,
	5,34,0,0,781,83,1,0,0,0,782,783,3,306,153,0,783,85,1,0,0,0,784,785,5,315,
	0,0,785,786,5,251,0,0,786,787,5,342,0,0,787,87,1,0,0,0,788,789,5,95,0,0,
	789,790,5,197,0,0,790,791,3,90,45,0,791,89,1,0,0,0,792,793,5,384,0,0,793,
	798,3,92,46,0,794,795,5,388,0,0,795,797,3,92,46,0,796,794,1,0,0,0,797,800,
	1,0,0,0,798,796,1,0,0,0,798,799,1,0,0,0,799,801,1,0,0,0,800,798,1,0,0,0,
	801,802,5,385,0,0,802,91,1,0,0,0,803,817,3,280,140,0,804,805,3,306,153,
	0,805,806,5,384,0,0,806,811,3,94,47,0,807,808,5,388,0,0,808,810,3,94,47,
	0,809,807,1,0,0,0,810,813,1,0,0,0,811,809,1,0,0,0,811,812,1,0,0,0,812,814,
	1,0,0,0,813,811,1,0,0,0,814,815,5,385,0,0,815,817,1,0,0,0,816,803,1,0,0,
	0,816,804,1,0,0,0,817,93,1,0,0,0,818,821,3,280,140,0,819,821,3,340,170,
	0,820,818,1,0,0,0,820,819,1,0,0,0,821,95,1,0,0,0,822,823,5,280,0,0,823,
	832,3,98,49,0,824,828,5,384,0,0,825,827,3,100,50,0,826,825,1,0,0,0,827,
	830,1,0,0,0,828,826,1,0,0,0,828,829,1,0,0,0,829,831,1,0,0,0,830,828,1,0,
	0,0,831,833,5,385,0,0,832,824,1,0,0,0,832,833,1,0,0,0,833,97,1,0,0,0,834,
	835,3,314,157,0,835,99,1,0,0,0,836,837,7,13,0,0,837,841,7,14,0,0,838,839,
	7,15,0,0,839,841,7,16,0,0,840,836,1,0,0,0,840,838,1,0,0,0,841,101,1,0,0,
	0,842,843,5,219,0,0,843,844,5,12,0,0,844,845,3,314,157,0,845,846,3,316,
	158,0,846,103,1,0,0,0,847,848,5,219,0,0,848,850,5,25,0,0,849,851,3,318,
	159,0,850,849,1,0,0,0,850,851,1,0,0,0,851,852,1,0,0,0,852,854,3,314,157,
	0,853,855,3,70,35,0,854,853,1,0,0,0,854,855,1,0,0,0,855,856,1,0,0,0,856,
	857,3,316,158,0,857,105,1,0,0,0,858,860,5,219,0,0,859,861,5,150,0,0,860,
	859,1,0,0,0,860,861,1,0,0,0,861,862,1,0,0,0,862,864,5,166,0,0,863,865,3,
	318,159,0,864,863,1,0,0,0,864,865,1,0,0,0,865,866,1,0,0,0,866,868,3,314,
	157,0,867,869,3,52,26,0,868,867,1,0,0,0,868,869,1,0,0,0,869,871,1,0,0,0,
	870,872,3,70,35,0,871,870,1,0,0,0,871,872,1,0,0,0,872,873,1,0,0,0,873,874,
	5,185,0,0,874,875,3,158,79,0,875,107,1,0,0,0,876,880,5,219,0,0,877,881,
	5,150,0,0,878,879,5,150,0,0,879,881,5,341,0,0,880,877,1,0,0,0,880,878,1,
	0,0,0,880,881,1,0,0,0,881,882,1,0,0,0,882,884,5,254,0,0,883,885,3,318,159,
	0,884,883,1,0,0,0,884,885,1,0,0,0,885,886,1,0,0,0,886,887,3,314,157,0,887,
	888,5,185,0,0,888,891,3,306,153,0,889,890,5,276,0,0,890,892,7,17,0,0,891,
	889,1,0,0,0,891,892,1,0,0,0,892,894,1,0,0,0,893,895,3,110,55,0,894,893,
	1,0,0,0,894,895,1,0,0,0,895,109,1,0,0,0,896,897,5,361,0,0,897,898,5,64,
	0,0,898,904,3,112,56,0,899,900,5,388,0,0,900,901,5,64,0,0,901,903,3,112,
	56,0,902,899,1,0,0,0,903,906,1,0,0,0,904,902,1,0,0,0,904,905,1,0,0,0,905,
	111,1,0,0,0,906,904,1,0,0,0,907,908,5,405,0,0,908,113,1,0,0,0,909,910,5,
	180,0,0,910,912,5,344,0,0,911,913,3,320,160,0,912,911,1,0,0,0,912,913,1,
	0,0,0,913,914,1,0,0,0,914,920,3,314,157,0,915,921,3,116,58,0,916,921,3,
	118,59,0,917,921,3,120,60,0,918,921,3,122,61,0,919,921,3,124,62,0,920,915,
	1,0,0,0,920,916,1,0,0,0,920,917,1,0,0,0,920,918,1,0,0,0,920,919,1,0,0,0,
	921,115,1,0,0,0,922,924,5,119,0,0,923,925,3,314,157,0,924,923,1,0,0,0,924,
	925,1,0,0,0,925,926,1,0,0,0,926,927,5,350,0,0,927,928,3,314,157,0,928,117,
	1,0,0,0,929,930,5,331,0,0,930,931,3,322,161,0,931,119,1,0,0,0,932,933,5,
	4,0,0,933,934,5,215,0,0,934,935,3,84,42,0,935,936,5,318,0,0,936,937,5,69,
	0,0,937,939,3,52,26,0,938,940,3,126,63,0,939,938,1,0,0,0,939,940,1,0,0,
	0,940,121,1,0,0,0,941,942,5,237,0,0,942,943,5,215,0,0,943,944,3,84,42,0,
	944,123,1,0,0,0,945,946,5,4,0,0,946,947,5,355,0,0,947,948,3,52,26,0,948,
	125,1,0,0,0,949,950,5,298,0,0,950,951,5,34,0,0,951,127,1,0,0,0,952,953,
	5,180,0,0,953,954,5,166,0,0,954,958,3,314,157,0,955,959,3,116,58,0,956,
	957,5,185,0,0,957,959,3,158,79,0,958,955,1,0,0,0,958,956,1,0,0,0,959,129,
	1,0,0,0,960,961,5,180,0,0,961,962,5,25,0,0,962,963,3,314,157,0,963,964,
	3,118,59,0,964,131,1,0,0,0,965,969,5,180,0,0,966,970,5,150,0,0,967,968,
	5,150,0,0,968,970,5,341,0,0,969,966,1,0,0,0,969,967,1,0,0,0,969,970,1,0,
	0,0,970,971,1,0,0,0,971,973,5,254,0,0,972,974,3,320,160,0,973,972,1,0,0,
	0,973,974,1,0,0,0,974,975,1,0,0,0,975,976,3,314,157,0,976,977,5,185,0,0,
	977,980,3,306,153,0,978,979,5,276,0,0,979,981,7,17,0,0,980,978,1,0,0,0,
	980,981,1,0,0,0,981,133,1,0,0,0,982,983,5,237,0,0,983,985,5,12,0,0,984,
	986,3,320,160,0,985,984,1,0,0,0,985,986,1,0,0,0,986,987,1,0,0,0,987,988,
	3,314,157,0,988,135,1,0,0,0,989,991,5,237,0,0,990,992,5,150,0,0,991,990,
	1,0,0,0,991,992,1,0,0,0,992,993,1,0,0,0,993,995,5,344,0,0,994,996,3,320,
	160,0,995,994,1,0,0,0,995,996,1,0,0,0,996,997,1,0,0,0,997,998,3,314,157,
	0,998,137,1,0,0,0,999,1000,5,237,0,0,1000,1002,5,25,0,0,1001,1003,3,320,
	160,0,1002,1001,1,0,0,0,1002,1003,1,0,0,0,1003,1004,1,0,0,0,1004,1006,3,
	314,157,0,1005,1007,7,18,0,0,1006,1005,1,0,0,0,1006,1007,1,0,0,0,1007,139,
	1,0,0,0,1008,1010,5,237,0,0,1009,1011,5,150,0,0,1010,1009,1,0,0,0,1010,
	1011,1,0,0,0,1011,1012,1,0,0,0,1012,1014,5,166,0,0,1013,1015,3,320,160,
	0,1014,1013,1,0,0,0,1014,1015,1,0,0,0,1015,1016,1,0,0,0,1016,1017,3,314,
	157,0,1017,141,1,0,0,0,1018,1022,5,237,0,0,1019,1023,5,150,0,0,1020,1021,
	5,150,0,0,1021,1023,5,341,0,0,1022,1019,1,0,0,0,1022,1020,1,0,0,0,1022,
	1023,1,0,0,0,1023,1024,1,0,0,0,1024,1026,5,254,0,0,1025,1027,3,320,160,
	0,1026,1025,1,0,0,0,1026,1027,1,0,0,0,1027,1028,1,0,0,0,1028,1029,3,314,
	157,0,1029,143,1,0,0,0,1030,1032,5,244,0,0,1031,1030,1,0,0,0,1031,1032,
	1,0,0,0,1032,1033,1,0,0,0,1033,1038,3,146,73,0,1034,1038,3,154,77,0,1035,
	1036,5,244,0,0,1036,1038,3,156,78,0,1037,1031,1,0,0,0,1037,1034,1,0,0,0,
	1037,1035,1,0,0,0,1038,145,1,0,0,0,1039,1040,5,267,0,0,1040,1041,7,19,0,
	0,1041,1050,3,314,157,0,1042,1044,3,148,74,0,1043,1042,1,0,0,0,1043,1044,
	1,0,0,0,1044,1046,1,0,0,0,1045,1047,3,52,26,0,1046,1045,1,0,0,0,1046,1047,
	1,0,0,0,1047,1048,1,0,0,0,1048,1051,3,158,79,0,1049,1051,3,150,75,0,1050,
	1043,1,0,0,0,1050,1049,1,0,0,0,1051,147,1,0,0,0,1052,1053,5,311,0,0,1053,
	1054,3,322,161,0,1054,149,1,0,0,0,1055,1056,5,363,0,0,1056,1061,3,152,76,
	0,1057,1058,5,388,0,0,1058,1060,3,152,76,0,1059,1057,1,0,0,0,1060,1063,
	1,0,0,0,1061,1059,1,0,0,0,1061,1062,1,0,0,0,1062,151,1,0,0,0,1063,1061,
	1,0,0,0,1064,1065,5,384,0,0,1065,1070,3,340,170,0,1066,1067,5,388,0,0,1067,
	1069,3,340,170,0,1068,1066,1,0,0,0,1069,1072,1,0,0,0,1070,1068,1,0,0,0,
	1070,1071,1,0,0,0,1071,1073,1,0,0,0,1072,1070,1,0,0,0,1073,1074,5,385,0,
	0,1074,153,1,0,0,0,1075,1076,5,189,0,0,1076,1077,5,144,0,0,1077,1078,5,
	331,0,0,1078,1082,5,389,0,0,1079,1080,3,146,73,0,1080,1081,5,389,0,0,1081,
	1083,1,0,0,0,1082,1079,1,0,0,0,1083,1084,1,0,0,0,1084,1082,1,0,0,0,1084,
	1085,1,0,0,0,1085,1086,1,0,0,0,1086,1087,5,240,0,0,1087,155,1,0,0,0,1088,
	1089,5,144,0,0,1089,1090,5,331,0,0,1090,1094,5,189,0,0,1091,1092,3,146,
	73,0,1092,1093,5,389,0,0,1093,1095,1,0,0,0,1094,1091,1,0,0,0,1095,1096,
	1,0,0,0,1096,1094,1,0,0,0,1096,1097,1,0,0,0,1097,1098,1,0,0,0,1098,1099,
	5,240,0,0,1099,157,1,0,0,0,1100,1101,6,79,-1,0,1101,1124,3,160,80,0,1102,
	1103,3,162,81,0,1103,1104,3,158,79,5,1104,1124,1,0,0,0,1105,1106,5,384,
	0,0,1106,1107,3,158,79,0,1107,1108,5,385,0,0,1108,1124,1,0,0,0,1109,1111,
	3,170,85,0,1110,1112,3,232,116,0,1111,1110,1,0,0,0,1111,1112,1,0,0,0,1112,
	1114,1,0,0,0,1113,1115,3,236,118,0,1114,1113,1,0,0,0,1114,1115,1,0,0,0,
	1115,1124,1,0,0,0,1116,1118,3,168,84,0,1117,1119,3,232,116,0,1118,1117,
	1,0,0,0,1118,1119,1,0,0,0,1119,1121,1,0,0,0,1120,1122,3,236,118,0,1121,
	1120,1,0,0,0,1121,1122,1,0,0,0,1122,1124,1,0,0,0,1123,1100,1,0,0,0,1123,
	1102,1,0,0,0,1123,1105,1,0,0,0,1123,1109,1,0,0,0,1123,1116,1,0,0,0,1124,
	1139,1,0,0,0,1125,1126,10,3,0,0,1126,1128,7,20,0,0,1127,1129,5,178,0,0,
	1128,1127,1,0,0,0,1128,1129,1,0,0,0,1129,1130,1,0,0,0,1130,1132,3,158,79,
	0,1131,1133,3,232,116,0,1132,1131,1,0,0,0,1132,1133,1,0,0,0,1133,1135,1,
	0,0,0,1134,1136,3,236,118,0,1135,1134,1,0,0,0,1135,1136,1,0,0,0,1136,1138,
	1,0,0,0,1137,1125,1,0,0,0,1138,1141,1,0,0,0,1139,1137,1,0,0,0,1139,1140,
	1,0,0,0,1140,159,1,0,0,0,1141,1139,1,0,0,0,1142,1143,5,363,0,0,1143,1148,
	3,260,130,0,1144,1145,5,388,0,0,1145,1147,3,260,130,0,1146,1144,1,0,0,0,
	1147,1150,1,0,0,0,1148,1146,1,0,0,0,1148,1149,1,0,0,0,1149,161,1,0,0,0,
	1150,1148,1,0,0,0,1151,1152,5,369,0,0,1152,1157,3,164,82,0,1153,1154,5,
	388,0,0,1154,1156,3,164,82,0,1155,1153,1,0,0,0,1156,1159,1,0,0,0,1157,1155,
	1,0,0,0,1157,1158,1,0,0,0,1158,163,1,0,0,0,1159,1157,1,0,0,0,1160,1172,
	3,166,83,0,1161,1162,5,384,0,0,1162,1167,3,50,25,0,1163,1164,5,388,0,0,
	1164,1166,3,50,25,0,1165,1163,1,0,0,0,1166,1169,1,0,0,0,1167,1165,1,0,0,
	0,1167,1168,1,0,0,0,1168,1170,1,0,0,0,1169,1167,1,0,0,0,1170,1171,5,385,
	0,0,1171,1173,1,0,0,0,1172,1161,1,0,0,0,1172,1173,1,0,0,0,1173,1174,1,0,
	0,0,1174,1175,5,185,0,0,1175,1176,5,384,0,0,1176,1177,3,158,79,0,1177,1178,
	5,385,0,0,1178,165,1,0,0,0,1179,1180,3,306,153,0,1180,167,1,0,0,0,1181,
	1182,3,170,85,0,1182,1184,3,176,88,0,1183,1185,3,206,103,0,1184,1183,1,
	0,0,0,1184,1185,1,0,0,0,1185,1187,1,0,0,0,1186,1188,3,208,104,0,1187,1186,
	1,0,0,0,1187,1188,1,0,0,0,1188,1190,1,0,0,0,1189,1191,3,222,111,0,1190,
	1189,1,0,0,0,1190,1191,1,0,0,0,1191,1193,1,0,0,0,1192,1194,3,224,112,0,
	1193,1192,1,0,0,0,1193,1194,1,0,0,0,1194,1200,1,0,0,0,1195,1196,3,170,85,
	0,1196,1197,3,176,88,0,1197,1198,3,230,115,0,1198,1200,1,0,0,0,1199,1181,
	1,0,0,0,1199,1195,1,0,0,0,1200,169,1,0,0,0,1201,1203,5,330,0,0,1202,1204,
	3,350,175,0,1203,1202,1,0,0,0,1203,1204,1,0,0,0,1204,1214,1,0,0,0,1205,
	1215,5,395,0,0,1206,1211,3,172,86,0,1207,1208,5,388,0,0,1208,1210,3,172,
	86,0,1209,1207,1,0,0,0,1210,1213,1,0,0,0,1211,1209,1,0,0,0,1211,1212,1,
	0,0,0,1212,1215,1,0,0,0,1213,1211,1,0,0,0,1214,1205,1,0,0,0,1214,1206,1,
	0,0,0,1215,171,1,0,0,0,1216,1225,3,174,87,0,1217,1222,3,260,130,0,1218,
	1220,5,185,0,0,1219,1218,1,0,0,0,1219,1220,1,0,0,0,1220,1221,1,0,0,0,1221,
	1223,3,260,130,0,1222,1219,1,0,0,0,1222,1223,1,0,0,0,1223,1225,1,0,0,0,
	1224,1216,1,0,0,0,1224,1217,1,0,0,0,1225,173,1,0,0,0,1226,1227,3,270,135,
	0,1227,1228,5,309,0,0,1228,1229,3,228,114,0,1229,1230,5,185,0,0,1230,1231,
	3,306,153,0,1231,1239,1,0,0,0,1232,1233,3,270,135,0,1233,1234,5,309,0,0,
	1234,1235,3,298,149,0,1235,1236,5,185,0,0,1236,1237,3,306,153,0,1237,1239,
	1,0,0,0,1238,1226,1,0,0,0,1238,1232,1,0,0,0,1239,175,1,0,0,0,1240,1241,
	5,252,0,0,1241,1242,3,178,89,0,1242,177,1,0,0,0,1243,1244,6,89,-1,0,1244,
	1249,3,180,90,0,1245,1246,5,388,0,0,1246,1248,3,180,90,0,1247,1245,1,0,
	0,0,1248,1251,1,0,0,0,1249,1247,1,0,0,0,1249,1250,1,0,0,0,1250,1255,1,0,
	0,0,1251,1249,1,0,0,0,1252,1255,3,190,95,0,1253,1255,3,192,96,0,1254,1243,
	1,0,0,0,1254,1252,1,0,0,0,1254,1253,1,0,0,0,1255,1277,1,0,0,0,1256,1257,
	10,3,0,0,1257,1258,5,220,0,0,1258,1259,5,274,0,0,1259,1276,3,178,89,4,1260,
	1262,10,4,0,0,1261,1263,5,294,0,0,1262,1261,1,0,0,0,1262,1263,1,0,0,0,1263,
	1265,1,0,0,0,1264,1266,7,21,0,0,1265,1264,1,0,0,0,1265,1266,1,0,0,0,1266,
	1268,1,0,0,0,1267,1269,5,308,0,0,1268,1267,1,0,0,0,1268,1269,1,0,0,0,1269,
	1270,1,0,0,0,1270,1271,5,274,0,0,1271,1273,3,178,89,0,1272,1274,3,204,102,
	0,1273,1272,1,0,0,0,1273,1274,1,0,0,0,1274,1276,1,0,0,0,1275,1256,1,0,0,
	0,1275,1260,1,0,0,0,1276,1279,1,0,0,0,1277,1275,1,0,0,0,1277,1278,1,0,0,
	0,1278,179,1,0,0,0,1279,1277,1,0,0,0,1280,1282,3,182,91,0,1281,1283,3,296,
	148,0,1282,1281,1,0,0,0,1282,1283,1,0,0,0,1283,181,1,0,0,0,1284,1286,5,
	344,0,0,1285,1284,1,0,0,0,1285,1286,1,0,0,0,1286,1287,1,0,0,0,1287,1289,
	3,184,92,0,1288,1290,3,186,93,0,1289,1288,1,0,0,0,1289,1290,1,0,0,0,1290,
	1295,1,0,0,0,1291,1293,5,185,0,0,1292,1291,1,0,0,0,1292,1293,1,0,0,0,1293,
	1294,1,0,0,0,1294,1296,3,278,139,0,1295,1292,1,0,0,0,1295,1296,1,0,0,0,
	1296,1326,1,0,0,0,1297,1298,5,277,0,0,1298,1299,5,344,0,0,1299,1300,5,384,
	0,0,1300,1301,3,272,136,0,1301,1302,5,384,0,0,1302,1307,3,274,137,0,1303,
	1304,5,388,0,0,1304,1306,3,274,137,0,1305,1303,1,0,0,0,1306,1309,1,0,0,
	0,1307,1305,1,0,0,0,1307,1308,1,0,0,0,1308,1310,1,0,0,0,1309,1307,1,0,0,
	0,1310,1311,5,385,0,0,1311,1312,5,385,0,0,1312,1326,1,0,0,0,1313,1315,5,
	277,0,0,1314,1313,1,0,0,0,1314,1315,1,0,0,0,1315,1316,1,0,0,0,1316,1317,
	5,384,0,0,1317,1318,3,158,79,0,1318,1319,5,385,0,0,1319,1326,1,0,0,0,1320,
	1321,5,357,0,0,1321,1322,5,384,0,0,1322,1323,3,260,130,0,1323,1324,5,385,
	0,0,1324,1326,1,0,0,0,1325,1285,1,0,0,0,1325,1297,1,0,0,0,1325,1314,1,0,
	0,0,1325,1320,1,0,0,0,1326,183,1,0,0,0,1327,1328,3,314,157,0,1328,185,1,
	0,0,0,1329,1330,5,251,0,0,1330,1331,5,342,0,0,1331,1332,5,185,0,0,1332,
	1333,5,301,0,0,1333,1334,3,188,94,0,1334,187,1,0,0,0,1335,1336,3,260,130,
	0,1336,189,1,0,0,0,1337,1338,5,384,0,0,1338,1339,3,150,75,0,1339,1340,5,
	385,0,0,1340,1341,3,296,148,0,1341,191,1,0,0,0,1342,1343,5,344,0,0,1343,
	1344,5,384,0,0,1344,1345,3,194,97,0,1345,1346,5,385,0,0,1346,193,1,0,0,
	0,1347,1348,3,196,98,0,1348,1349,5,384,0,0,1349,1354,3,198,99,0,1350,1351,
	5,388,0,0,1351,1353,3,198,99,0,1352,1350,1,0,0,0,1353,1356,1,0,0,0,1354,
	1352,1,0,0,0,1354,1355,1,0,0,0,1355,1357,1,0,0,0,1356,1354,1,0,0,0,1357,
	1358,5,385,0,0,1358,195,1,0,0,0,1359,1360,7,22,0,0,1360,197,1,0,0,0,1361,
	1362,5,344,0,0,1362,1377,3,220,110,0,1363,1377,3,202,101,0,1364,1377,3,
	282,141,0,1365,1366,5,24,0,0,1366,1367,5,404,0,0,1367,1368,5,344,0,0,1368,
	1377,3,220,110,0,1369,1370,5,151,0,0,1370,1371,5,404,0,0,1371,1377,3,202,
	101,0,1372,1373,3,200,100,0,1373,1374,5,404,0,0,1374,1375,3,282,141,0,1375,
	1377,1,0,0,0,1376,1361,1,0,0,0,1376,1363,1,0,0,0,1376,1364,1,0,0,0,1376,
	1365,1,0,0,0,1376,1369,1,0,0,0,1376,1372,1,0,0,0,1377,199,1,0,0,0,1378,
	1379,7,23,0,0,1379,201,1,0,0,0,1380,1381,5,31,0,0,1381,1382,5,384,0,0,1382,
	1383,3,314,157,0,1383,1384,5,385,0,0,1384,203,1,0,0,0,1385,1386,5,303,0,
	0,1386,1400,3,262,131,0,1387,1388,5,361,0,0,1388,1389,5,384,0,0,1389,1394,
	3,314,157,0,1390,1391,5,388,0,0,1391,1393,3,314,157,0,1392,1390,1,0,0,0,
	1393,1396,1,0,0,0,1394,1392,1,0,0,0,1394,1395,1,0,0,0,1395,1397,1,0,0,0,
	1396,1394,1,0,0,0,1397,1398,5,385,0,0,1398,1400,1,0,0,0,1399,1385,1,0,0,
	0,1399,1387,1,0,0,0,1400,205,1,0,0,0,1401,1402,5,367,0,0,1402,1403,3,262,
	131,0,1403,207,1,0,0,0,1404,1405,5,257,0,0,1405,1406,5,197,0,0,1406,1411,
	3,210,105,0,1407,1408,5,388,0,0,1408,1410,3,210,105,0,1409,1407,1,0,0,0,
	1410,1413,1,0,0,0,1411,1409,1,0,0,0,1411,1412,1,0,0,0,1412,209,1,0,0,0,
	1413,1411,1,0,0,0,1414,1454,3,260,130,0,1415,1454,3,216,108,0,1416,1417,
	5,384,0,0,1417,1454,5,385,0,0,1418,1419,5,384,0,0,1419,1424,3,260,130,0,
	1420,1421,5,388,0,0,1421,1423,3,260,130,0,1422,1420,1,0,0,0,1423,1426,1,
	0,0,0,1424,1422,1,0,0,0,1424,1425,1,0,0,0,1425,1427,1,0,0,0,1426,1424,1,
	0,0,0,1427,1428,5,385,0,0,1428,1454,1,0,0,0,1429,1430,3,214,107,0,1430,
	1431,5,384,0,0,1431,1436,3,260,130,0,1432,1433,5,388,0,0,1433,1435,3,260,
	130,0,1434,1432,1,0,0,0,1435,1438,1,0,0,0,1436,1434,1,0,0,0,1436,1437,1,
	0,0,0,1437,1439,1,0,0,0,1438,1436,1,0,0,0,1439,1440,5,385,0,0,1440,1454,
	1,0,0,0,1441,1442,3,212,106,0,1442,1443,5,384,0,0,1443,1448,3,210,105,0,
	1444,1445,5,388,0,0,1445,1447,3,210,105,0,1446,1444,1,0,0,0,1447,1450,1,
	0,0,0,1448,1446,1,0,0,0,1448,1449,1,0,0,0,1449,1451,1,0,0,0,1450,1448,1,
	0,0,0,1451,1452,5,385,0,0,1452,1454,1,0,0,0,1453,1414,1,0,0,0,1453,1415,
	1,0,0,0,1453,1416,1,0,0,0,1453,1418,1,0,0,0,1453,1429,1,0,0,0,1453,1441,
	1,0,0,0,1454,211,1,0,0,0,1455,1456,5,258,0,0,1456,1457,5,137,0,0,1457,213,
	1,0,0,0,1458,1459,7,24,0,0,1459,215,1,0,0,0,1460,1461,3,218,109,0,1461,
	1462,5,384,0,0,1462,1463,3,220,110,0,1463,1464,5,388,0,0,1464,1465,3,282,
	141,0,1465,1466,5,385,0,0,1466,217,1,0,0,0,1467,1468,7,25,0,0,1468,219,
	1,0,0,0,1469,1470,3,314,157,0,1470,221,1,0,0,0,1471,1472,5,260,0,0,1472,
	1473,3,262,131,0,1473,223,1,0,0,0,1474,1475,5,368,0,0,1475,1480,3,226,113,
	0,1476,1477,5,388,0,0,1477,1479,3,226,113,0,1478,1476,1,0,0,0,1479,1482,
	1,0,0,0,1480,1478,1,0,0,0,1480,1481,1,0,0,0,1481,225,1,0,0,0,1482,1480,
	1,0,0,0,1483,1484,3,298,149,0,1484,1485,5,185,0,0,1485,1486,3,228,114,0,
	1486,227,1,0,0,0,1487,1489,3,298,149,0,1488,1487,1,0,0,0,1488,1489,1,0,
	0,0,1489,1490,1,0,0,0,1490,1492,5,384,0,0,1491,1493,3,238,119,0,1492,1491,
	1,0,0,0,1492,1493,1,0,0,0,1493,1495,1,0,0,0,1494,1496,3,232,116,0,1495,
	1494,1,0,0,0,1495,1496,1,0,0,0,1496,1498,1,0,0,0,1497,1499,3,254,127,0,
	1498,1497,1,0,0,0,1498,1499,1,0,0,0,1499,1500,1,0,0,0,1500,1501,5,385,0,
	0,1501,229,1,0,0,0,1502,1503,5,284,0,0,1503,1505,5,384,0,0,1504,1506,3,
	238,119,0,1505,1504,1,0,0,0,1505,1506,1,0,0,0,1506,1508,1,0,0,0,1507,1509,
	3,232,116,0,1508,1507,1,0,0,0,1508,1509,1,0,0,0,1509,1511,1,0,0,0,1510,
	1512,3,242,121,0,1511,1510,1,0,0,0,1511,1512,1,0,0,0,1512,1514,1,0,0,0,
	1513,1515,3,248,124,0,1514,1513,1,0,0,0,1514,1515,1,0,0,0,1515,1517,1,0,
	0,0,1516,1518,3,250,125,0,1517,1516,1,0,0,0,1517,1518,1,0,0,0,1518,1520,
	1,0,0,0,1519,1521,3,244,122,0,1520,1519,1,0,0,0,1520,1521,1,0,0,0,1521,
	1522,1,0,0,0,1522,1523,3,252,126,0,1523,1528,5,385,0,0,1524,1526,5,185,
	0,0,1525,1524,1,0,0,0,1525,1526,1,0,0,0,1526,1527,1,0,0,0,1527,1529,3,306,
	153,0,1528,1525,1,0,0,0,1528,1529,1,0,0,0,1529,231,1,0,0,0,1530,1531,5,
	306,0,0,1531,1532,5,197,0,0,1532,1537,3,234,117,0,1533,1534,5,388,0,0,1534,
	1536,3,234,117,0,1535,1533,1,0,0,0,1536,1539,1,0,0,0,1537,1535,1,0,0,0,
	1537,1538,1,0,0,0,1538,233,1,0,0,0,1539,1537,1,0,0,0,1540,1542,3,260,130,
	0,1541,1543,7,26,0,0,1542,1541,1,0,0,0,1542,1543,1,0,0,0,1543,1546,1,0,
	0,0,1544,1545,5,87,0,0,1545,1547,7,27,0,0,1546,1544,1,0,0,0,1546,1547,1,
	0,0,0,1547,235,1,0,0,0,1548,1551,5,281,0,0,1549,1552,5,178,0,0,1550,1552,
	3,260,130,0,1551,1549,1,0,0,0,1551,1550,1,0,0,0,1552,237,1,0,0,0,1553,1554,
	5,311,0,0,1554,1555,5,197,0,0,1555,1560,3,260,130,0,1556,1557,5,388,0,0,
	1557,1559,3,260,130,0,1558,1556,1,0,0,0,1559,1562,1,0,0,0,1560,1558,1,0,
	0,0,1560,1561,1,0,0,0,1561,239,1,0,0,0,1562,1560,1,0,0,0,1563,1580,5,395,
	0,0,1564,1580,5,398,0,0,1565,1580,5,403,0,0,1566,1567,5,386,0,0,1567,1568,
	5,406,0,0,1568,1569,5,388,0,0,1569,1570,5,406,0,0,1570,1580,5,387,0,0,1571,
	1572,5,386,0,0,1572,1573,5,406,0,0,1573,1574,5,388,0,0,1574,1580,5,387,
	0,0,1575,1576,5,386,0,0,1576,1577,5,388,0,0,1577,1578,5,406,0,0,1578,1580,
	5,387,0,0,1579,1563,1,0,0,0,1579,1564,1,0,0,0,1579,1565,1,0,0,0,1579,1566,
	1,0,0,0,1579,1571,1,0,0,0,1579,1575,1,0,0,0,1580,241,1,0,0,0,1581,1582,
	5,285,0,0,1582,1587,3,172,86,0,1583,1584,5,388,0,0,1584,1586,3,172,86,0,
	1585,1583,1,0,0,0,1586,1589,1,0,0,0,1587,1585,1,0,0,0,1587,1588,1,0,0,0,
	1588,243,1,0,0,0,1589,1587,1,0,0,0,1590,1591,5,312,0,0,1591,1593,5,384,
	0,0,1592,1594,3,246,123,0,1593,1592,1,0,0,0,1594,1595,1,0,0,0,1595,1593,
	1,0,0,0,1595,1596,1,0,0,0,1596,1597,1,0,0,0,1597,1599,5,385,0,0,1598,1600,
	3,258,129,0,1599,1598,1,0,0,0,1599,1600,1,0,0,0,1600,245,1,0,0,0,1601,1603,
	3,308,154,0,1602,1604,3,240,120,0,1603,1602,1,0,0,0,1603,1604,1,0,0,0,1604,
	247,1,0,0,0,1605,1606,5,178,0,0,1606,1607,5,328,0,0,1607,1608,5,313,0,0,
	1608,1614,5,283,0,0,1609,1610,5,304,0,0,1610,1611,5,327,0,0,1611,1612,5,
	313,0,0,1612,1614,5,283,0,0,1613,1605,1,0,0,0,1613,1609,1,0,0,0,1614,249,
	1,0,0,0,1615,1616,5,6,0,0,1616,1617,5,283,0,0,1617,1618,5,334,0,0,1618,
	1619,5,98,0,0,1619,1620,5,73,0,0,1620,1640,5,327,0,0,1621,1622,5,6,0,0,
	1622,1623,5,283,0,0,1623,1624,5,334,0,0,1624,1625,5,350,0,0,1625,1626,5,
	295,0,0,1626,1640,5,327,0,0,1627,1628,5,6,0,0,1628,1629,5,283,0,0,1629,
	1630,5,334,0,0,1630,1631,5,350,0,0,1631,1632,5,73,0,0,1632,1640,3,308,154,
	0,1633,1634,5,6,0,0,1634,1635,5,283,0,0,1635,1636,5,334,0,0,1636,1637,5,
	350,0,0,1637,1638,5,45,0,0,1638,1640,3,308,154,0,1639,1615,1,0,0,0,1639,
	1621,1,0,0,0,1639,1627,1,0,0,0,1639,1633,1,0,0,0,1640,251,1,0,0,0,1641,
	1642,5,232,0,0,1642,1647,3,172,86,0,1643,1644,5,388,0,0,1644,1646,3,172,
	86,0,1645,1643,1,0,0,0,1646,1649,1,0,0,0,1647,1645,1,0,0,0,1647,1648,1,
	0,0,0,1648,253,1,0,0,0,1649,1647,1,0,0,0,1650,1651,5,319,0,0,1651,1652,
	5,190,0,0,1652,1653,3,282,141,0,1653,1654,3,256,128,0,1654,1660,1,0,0,0,
	1655,1656,5,328,0,0,1656,1657,5,190,0,0,1657,1658,5,406,0,0,1658,1660,3,
	256,128,0,1659,1650,1,0,0,0,1659,1655,1,0,0,0,1660,255,1,0,0,0,1661,1662,
	5,102,0,0,1662,1663,5,181,0,0,1663,1664,5,222,0,0,1664,1665,5,327,0,0,1665,
	257,1,0,0,0,1666,1667,5,370,0,0,1667,1668,3,282,141,0,1668,259,1,0,0,0,
	1669,1670,3,262,131,0,1670,261,1,0,0,0,1671,1672,6,131,-1,0,1672,1673,5,
	298,0,0,1673,1684,3,262,131,6,1674,1675,5,245,0,0,1675,1676,5,384,0,0,1676,
	1677,3,158,79,0,1677,1678,5,385,0,0,1678,1684,1,0,0,0,1679,1681,3,268,134,
	0,1680,1682,3,264,132,0,1681,1680,1,0,0,0,1681,1682,1,0,0,0,1682,1684,1,
	0,0,0,1683,1671,1,0,0,0,1683,1674,1,0,0,0,1683,1679,1,0,0,0,1684,1699,1,
	0,0,0,1685,1686,10,3,0,0,1686,1687,5,181,0,0,1687,1698,3,262,131,4,1688,
	1689,10,2,0,0,1689,1690,5,305,0,0,1690,1698,3,262,131,3,1691,1692,10,1,
	0,0,1692,1694,5,273,0,0,1693,1695,5,298,0,0,1694,1693,1,0,0,0,1694,1695,
	1,0,0,0,1695,1696,1,0,0,0,1696,1698,7,28,0,0,1697,1685,1,0,0,0,1697,1688,
	1,0,0,0,1697,1691,1,0,0,0,1698,1701,1,0,0,0,1699,1697,1,0,0,0,1699,1700,
	1,0,0,0,1700,263,1,0,0,0,1701,1699,1,0,0,0,1702,1704,5,298,0,0,1703,1702,
	1,0,0,0,1703,1704,1,0,0,0,1704,1705,1,0,0,0,1705,1707,5,190,0,0,1706,1708,
	7,29,0,0,1707,1706,1,0,0,0,1707,1708,1,0,0,0,1708,1709,1,0,0,0,1709,1710,
	3,268,134,0,1710,1711,5,181,0,0,1711,1712,3,268,134,0,1712,1770,1,0,0,0,
	1713,1715,5,298,0,0,1714,1713,1,0,0,0,1714,1715,1,0,0,0,1715,1716,1,0,0,
	0,1716,1717,5,263,0,0,1717,1718,5,384,0,0,1718,1723,3,260,130,0,1719,1720,
	5,388,0,0,1720,1722,3,260,130,0,1721,1719,1,0,0,0,1722,1725,1,0,0,0,1723,
	1721,1,0,0,0,1723,1724,1,0,0,0,1724,1726,1,0,0,0,1725,1723,1,0,0,0,1726,
	1727,5,385,0,0,1727,1770,1,0,0,0,1728,1730,5,298,0,0,1729,1728,1,0,0,0,
	1729,1730,1,0,0,0,1730,1731,1,0,0,0,1731,1732,5,263,0,0,1732,1733,5,384,
	0,0,1733,1734,3,158,79,0,1734,1735,5,385,0,0,1735,1770,1,0,0,0,1736,1737,
	5,245,0,0,1737,1738,5,384,0,0,1738,1739,3,158,79,0,1739,1740,5,385,0,0,
	1740,1770,1,0,0,0,1741,1743,5,298,0,0,1742,1741,1,0,0,0,1742,1743,1,0,0,
	0,1743,1744,1,0,0,0,1744,1745,5,324,0,0,1745,1770,3,268,134,0,1746,1770,
	3,266,133,0,1747,1749,5,273,0,0,1748,1750,5,298,0,0,1749,1748,1,0,0,0,1749,
	1750,1,0,0,0,1750,1751,1,0,0,0,1751,1770,7,28,0,0,1752,1754,5,273,0,0,1753,
	1755,5,298,0,0,1754,1753,1,0,0,0,1754,1755,1,0,0,0,1755,1756,1,0,0,0,1756,
	1757,5,235,0,0,1757,1758,5,252,0,0,1758,1770,3,268,134,0,1759,1761,5,298,
	0,0,1760,1759,1,0,0,0,1760,1761,1,0,0,0,1761,1762,1,0,0,0,1762,1763,5,333,
	0,0,1763,1764,5,350,0,0,1764,1767,3,268,134,0,1765,1766,5,242,0,0,1766,
	1768,3,344,172,0,1767,1765,1,0,0,0,1767,1768,1,0,0,0,1768,1770,1,0,0,0,
	1769,1703,1,0,0,0,1769,1714,1,0,0,0,1769,1729,1,0,0,0,1769,1736,1,0,0,0,
	1769,1742,1,0,0,0,1769,1746,1,0,0,0,1769,1747,1,0,0,0,1769,1752,1,0,0,0,
	1769,1760,1,0,0,0,1770,265,1,0,0,0,1771,1773,5,298,0,0,1772,1771,1,0,0,
	0,1772,1773,1,0,0,0,1773,1774,1,0,0,0,1774,1775,5,280,0,0,1775,1789,7,30,
	0,0,1776,1777,5,384,0,0,1777,1790,5,385,0,0,1778,1779,5,384,0,0,1779,1784,
	3,260,130,0,1780,1781,5,388,0,0,1781,1783,3,260,130,0,1782,1780,1,0,0,0,
	1783,1786,1,0,0,0,1784,1782,1,0,0,0,1784,1785,1,0,0,0,1785,1787,1,0,0,0,
	1786,1784,1,0,0,0,1787,1788,5,385,0,0,1788,1790,1,0,0,0,1789,1776,1,0,0,
	0,1789,1778,1,0,0,0,1790,1801,1,0,0,0,1791,1793,5,298,0,0,1792,1791,1,0,
	0,0,1792,1793,1,0,0,0,1793,1794,1,0,0,0,1794,1795,5,280,0,0,1795,1798,3,
	268,134,0,1796,1797,5,242,0,0,1797,1799,3,344,172,0,1798,1796,1,0,0,0,1798,
	1799,1,0,0,0,1799,1801,1,0,0,0,1800,1772,1,0,0,0,1800,1792,1,0,0,0,1801,
	267,1,0,0,0,1802,1803,6,134,-1,0,1803,1807,3,270,135,0,1804,1805,7,31,0,
	0,1805,1807,3,268,134,7,1806,1802,1,0,0,0,1806,1804,1,0,0,0,1807,1829,1,
	0,0,0,1808,1809,10,6,0,0,1809,1810,7,32,0,0,1810,1828,3,268,134,7,1811,
	1812,10,5,0,0,1812,1813,7,33,0,0,1813,1828,3,268,134,6,1814,1815,10,4,0,
	0,1815,1816,5,379,0,0,1816,1828,3,268,134,5,1817,1818,10,3,0,0,1818,1819,
	5,380,0,0,1819,1828,3,268,134,4,1820,1821,10,2,0,0,1821,1822,5,378,0,0,
	1822,1828,3,268,134,3,1823,1824,10,1,0,0,1824,1825,3,332,166,0,1825,1826,
	3,268,134,2,1826,1828,1,0,0,0,1827,1808,1,0,0,0,1827,1811,1,0,0,0,1827,
	1814,1,0,0,0,1827,1817,1,0,0,0,1827,1820,1,0,0,0,1827,1823,1,0,0,0,1828,
	1831,1,0,0,0,1829,1827,1,0,0,0,1829,1830,1,0,0,0,1830,269,1,0,0,0,1831,
	1829,1,0,0,0,1832,1833,6,135,-1,0,1833,1835,5,201,0,0,1834,1836,3,312,156,
	0,1835,1834,1,0,0,0,1836,1837,1,0,0,0,1837,1835,1,0,0,0,1837,1838,1,0,0,
	0,1838,1841,1,0,0,0,1839,1840,5,239,0,0,1840,1842,3,260,130,0,1841,1839,
	1,0,0,0,1841,1842,1,0,0,0,1842,1843,1,0,0,0,1843,1844,5,240,0,0,1844,1924,
	1,0,0,0,1845,1846,5,201,0,0,1846,1848,3,260,130,0,1847,1849,3,312,156,0,
	1848,1847,1,0,0,0,1849,1850,1,0,0,0,1850,1848,1,0,0,0,1850,1851,1,0,0,0,
	1851,1854,1,0,0,0,1852,1853,5,239,0,0,1853,1855,3,260,130,0,1854,1852,1,
	0,0,0,1854,1855,1,0,0,0,1855,1856,1,0,0,0,1856,1857,5,240,0,0,1857,1924,
	1,0,0,0,1858,1859,5,202,0,0,1859,1860,5,384,0,0,1860,1861,3,260,130,0,1861,
	1862,5,185,0,0,1862,1863,3,54,27,0,1863,1864,5,385,0,0,1864,1924,1,0,0,
	0,1865,1866,5,45,0,0,1866,1867,5,384,0,0,1867,1870,3,260,130,0,1868,1869,
	5,60,0,0,1869,1871,5,87,0,0,1870,1868,1,0,0,0,1870,1871,1,0,0,0,1871,1872,
	1,0,0,0,1872,1873,5,385,0,0,1873,1924,1,0,0,0,1874,1875,5,73,0,0,1875,1876,
	5,384,0,0,1876,1879,3,260,130,0,1877,1878,5,60,0,0,1878,1880,5,87,0,0,1879,
	1877,1,0,0,0,1879,1880,1,0,0,0,1880,1881,1,0,0,0,1881,1882,5,385,0,0,1882,
	1924,1,0,0,0,1883,1884,5,316,0,0,1884,1885,5,384,0,0,1885,1886,3,268,134,
	0,1886,1887,5,263,0,0,1887,1888,3,268,134,0,1888,1889,5,385,0,0,1889,1924,
	1,0,0,0,1890,1924,3,340,170,0,1891,1924,5,395,0,0,1892,1893,3,314,157,0,
	1893,1894,5,381,0,0,1894,1895,5,395,0,0,1895,1924,1,0,0,0,1896,1897,5,384,
	0,0,1897,1898,3,158,79,0,1898,1899,5,385,0,0,1899,1924,1,0,0,0,1900,1901,
	3,272,136,0,1901,1913,5,384,0,0,1902,1904,3,350,175,0,1903,1902,1,0,0,0,
	1903,1904,1,0,0,0,1904,1905,1,0,0,0,1905,1910,3,274,137,0,1906,1907,5,388,
	0,0,1907,1909,3,274,137,0,1908,1906,1,0,0,0,1909,1912,1,0,0,0,1910,1908,
	1,0,0,0,1910,1911,1,0,0,0,1911,1914,1,0,0,0,1912,1910,1,0,0,0,1913,1903,
	1,0,0,0,1913,1914,1,0,0,0,1914,1915,1,0,0,0,1915,1916,5,385,0,0,1916,1924,
	1,0,0,0,1917,1924,3,306,153,0,1918,1924,3,276,138,0,1919,1920,5,384,0,0,
	1920,1921,3,260,130,0,1921,1922,5,385,0,0,1922,1924,1,0,0,0,1923,1832,1,
	0,0,0,1923,1845,1,0,0,0,1923,1858,1,0,0,0,1923,1865,1,0,0,0,1923,1874,1,
	0,0,0,1923,1883,1,0,0,0,1923,1890,1,0,0,0,1923,1891,1,0,0,0,1923,1892,1,
	0,0,0,1923,1896,1,0,0,0,1923,1900,1,0,0,0,1923,1917,1,0,0,0,1923,1918,1,
	0,0,0,1923,1919,1,0,0,0,1924,1932,1,0,0,0,1925,1926,10,4,0,0,1926,1927,
	5,382,0,0,1927,1928,3,268,134,0,1928,1929,5,383,0,0,1929,1931,1,0,0,0,1930,
	1925,1,0,0,0,1931,1934,1,0,0,0,1932,1930,1,0,0,0,1932,1933,1,0,0,0,1933,
	271,1,0,0,0,1934,1932,1,0,0,0,1935,1939,3,358,179,0,1936,1939,3,362,181,
	0,1937,1939,3,314,157,0,1938,1935,1,0,0,0,1938,1936,1,0,0,0,1938,1937,1,
	0,0,0,1939,273,1,0,0,0,1940,1945,3,356,178,0,1941,1945,3,354,177,0,1942,
	1945,3,352,176,0,1943,1945,3,260,130,0,1944,1940,1,0,0,0,1944,1941,1,0,
	0,0,1944,1942,1,0,0,0,1944,1943,1,0,0,0,1945,275,1,0,0,0,1946,1947,3,314,
	157,0,1947,277,1,0,0,0,1948,1949,3,306,153,0,1949,279,1,0,0,0,1950,1953,
	3,306,153,0,1951,1953,3,276,138,0,1952,1950,1,0,0,0,1952,1951,1,0,0,0,1953,
	281,1,0,0,0,1954,1957,5,271,0,0,1955,1958,3,284,142,0,1956,1958,3,288,144,
	0,1957,1955,1,0,0,0,1957,1956,1,0,0,0,1957,1958,1,0,0,0,1958,283,1,0,0,
	0,1959,1961,3,286,143,0,1960,1962,3,290,145,0,1961,1960,1,0,0,0,1961,1962,
	1,0,0,0,1962,285,1,0,0,0,1963,1964,3,292,146,0,1964,1965,3,354,177,0,1965,
	1967,1,0,0,0,1966,1963,1,0,0,0,1967,1968,1,0,0,0,1968,1966,1,0,0,0,1968,
	1969,1,0,0,0,1969,287,1,0,0,0,1970,1973,3,290,145,0,1971,1974,3,286,143,
	0,1972,1974,3,290,145,0,1973,1971,1,0,0,0,1973,1972,1,0,0,0,1973,1974,1,
	0,0,0,1974,289,1,0,0,0,1975,1976,3,292,146,0,1976,1977,3,354,177,0,1977,
	1978,5,350,0,0,1978,1979,3,354,177,0,1979,291,1,0,0,0,1980,1982,7,34,0,
	0,1981,1980,1,0,0,0,1981,1982,1,0,0,0,1982,1983,1,0,0,0,1983,1986,7,35,
	0,0,1984,1986,5,405,0,0,1985,1981,1,0,0,0,1985,1984,1,0,0,0,1986,293,1,
	0,0,0,1987,1989,5,185,0,0,1988,1987,1,0,0,0,1988,1989,1,0,0,0,1989,1990,
	1,0,0,0,1990,1992,3,306,153,0,1991,1993,3,302,151,0,1992,1991,1,0,0,0,1992,
	1993,1,0,0,0,1993,295,1,0,0,0,1994,1996,5,185,0,0,1995,1994,1,0,0,0,1995,
	1996,1,0,0,0,1996,1997,1,0,0,0,1997,1999,3,306,153,0,1998,2000,3,302,151,
	0,1999,1998,1,0,0,0,1999,2000,1,0,0,0,2000,297,1,0,0,0,2001,2002,3,306,
	153,0,2002,2003,3,300,150,0,2003,299,1,0,0,0,2004,2005,5,288,0,0,2005,2007,
	3,306,153,0,2006,2004,1,0,0,0,2007,2008,1,0,0,0,2008,2006,1,0,0,0,2008,
	2009,1,0,0,0,2009,2012,1,0,0,0,2010,2012,1,0,0,0,2011,2006,1,0,0,0,2011,
	2010,1,0,0,0,2012,301,1,0,0,0,2013,2014,5,384,0,0,2014,2015,3,304,152,0,
	2015,2016,5,385,0,0,2016,303,1,0,0,0,2017,2022,3,306,153,0,2018,2019,5,
	388,0,0,2019,2021,3,306,153,0,2020,2018,1,0,0,0,2021,2024,1,0,0,0,2022,
	2020,1,0,0,0,2022,2023,1,0,0,0,2023,305,1,0,0,0,2024,2022,1,0,0,0,2025,
	2029,3,308,154,0,2026,2029,3,310,155,0,2027,2029,3,362,181,0,2028,2025,
	1,0,0,0,2028,2026,1,0,0,0,2028,2027,1,0,0,0,2029,307,1,0,0,0,2030,2031,
	7,36,0,0,2031,309,1,0,0,0,2032,2033,5,405,0,0,2033,311,1,0,0,0,2034,2035,
	5,366,0,0,2035,2036,3,260,130,0,2036,2037,5,346,0,0,2037,2038,3,260,130,
	0,2038,313,1,0,0,0,2039,2044,3,306,153,0,2040,2041,5,381,0,0,2041,2043,
	3,306,153,0,2042,2040,1,0,0,0,2043,2046,1,0,0,0,2044,2045,1,0,0,0,2044,
	2042,1,0,0,0,2045,315,1,0,0,0,2046,2044,1,0,0,0,2047,2048,5,369,0,0,2048,
	2049,3,322,161,0,2049,317,1,0,0,0,2050,2051,5,59,0,0,2051,2052,5,298,0,
	0,2052,2053,5,245,0,0,2053,319,1,0,0,0,2054,2055,5,59,0,0,2055,2056,5,245,
	0,0,2056,321,1,0,0,0,2057,2058,5,384,0,0,2058,2063,3,324,162,0,2059,2060,
	5,388,0,0,2060,2062,3,324,162,0,2061,2059,1,0,0,0,2062,2065,1,0,0,0,2063,
	2061,1,0,0,0,2063,2064,1,0,0,0,2064,2066,1,0,0,0,2065,2063,1,0,0,0,2066,
	2067,5,385,0,0,2067,323,1,0,0,0,2068,2073,3,326,163,0,2069,2071,5,373,0,
	0,2070,2069,1,0,0,0,2070,2071,1,0,0,0,2071,2072,1,0,0,0,2072,2074,3,328,
	164,0,2073,2070,1,0,0,0,2073,2074,1,0,0,0,2074,325,1,0,0,0,2075,2079,3,
	306,153,0,2076,2079,3,276,138,0,2077,2079,5,405,0,0,2078,2075,1,0,0,0,2078,
	2076,1,0,0,0,2078,2077,1,0,0,0,2079,327,1,0,0,0,2080,2085,5,406,0,0,2081,
	2085,5,407,0,0,2082,2085,3,348,174,0,2083,2085,5,405,0,0,2084,2080,1,0,
	0,0,2084,2081,1,0,0,0,2084,2082,1,0,0,0,2084,2083,1,0,0,0,2085,329,1,0,
	0,0,2086,2093,5,181,0,0,2087,2088,5,379,0,0,2088,2093,5,379,0,0,2089,2093,
	5,305,0,0,2090,2091,5,378,0,0,2091,2093,5,378,0,0,2092,2086,1,0,0,0,2092,
	2087,1,0,0,0,2092,2089,1,0,0,0,2092,2090,1,0,0,0,2093,331,1,0,0,0,2094,
	2109,5,373,0,0,2095,2109,5,374,0,0,2096,2109,5,375,0,0,2097,2098,5,375,
	0,0,2098,2109,5,373,0,0,2099,2100,5,374,0,0,2100,2109,5,373,0,0,2101,2102,
	5,375,0,0,2102,2109,5,374,0,0,2103,2104,5,376,0,0,2104,2109,5,373,0,0,2105,
	2106,5,375,0,0,2106,2107,5,373,0,0,2107,2109,5,374,0,0,2108,2094,1,0,0,
	0,2108,2095,1,0,0,0,2108,2096,1,0,0,0,2108,2097,1,0,0,0,2108,2099,1,0,0,
	0,2108,2101,1,0,0,0,2108,2103,1,0,0,0,2108,2105,1,0,0,0,2109,333,1,0,0,
	0,2110,2111,5,375,0,0,2111,2118,5,375,0,0,2112,2113,5,374,0,0,2113,2118,
	5,374,0,0,2114,2118,5,379,0,0,2115,2118,5,380,0,0,2116,2118,5,378,0,0,2117,
	2110,1,0,0,0,2117,2112,1,0,0,0,2117,2114,1,0,0,0,2117,2115,1,0,0,0,2117,
	2116,1,0,0,0,2118,335,1,0,0,0,2119,2120,7,37,0,0,2120,337,1,0,0,0,2121,
	2122,7,38,0,0,2122,339,1,0,0,0,2123,2138,3,282,141,0,2124,2138,3,342,171,
	0,2125,2138,3,344,172,0,2126,2128,5,397,0,0,2127,2126,1,0,0,0,2127,2128,
	1,0,0,0,2128,2129,1,0,0,0,2129,2138,3,346,173,0,2130,2138,3,348,174,0,2131,
	2138,5,407,0,0,2132,2138,5,408,0,0,2133,2135,5,298,0,0,2134,2133,1,0,0,
	0,2134,2135,1,0,0,0,2135,2136,1,0,0,0,2136,2138,5,299,0,0,2137,2123,1,0,
	0,0,2137,2124,1,0,0,0,2137,2125,1,0,0,0,2137,2127,1,0,0,0,2137,2130,1,0,
	0,0,2137,2131,1,0,0,0,2137,2132,1,0,0,0,2137,2134,1,0,0,0,2138,341,1,0,
	0,0,2139,2140,3,352,176,0,2140,2141,3,344,172,0,2141,343,1,0,0,0,2142,2143,
	5,405,0,0,2143,345,1,0,0,0,2144,2145,5,406,0,0,2145,347,1,0,0,0,2146,2147,
	7,39,0,0,2147,349,1,0,0,0,2148,2149,7,40,0,0,2149,351,1,0,0,0,2150,2151,
	7,41,0,0,2151,353,1,0,0,0,2152,2153,7,42,0,0,2153,355,1,0,0,0,2154,2155,
	7,43,0,0,2155,357,1,0,0,0,2156,2157,7,44,0,0,2157,359,1,0,0,0,2158,2159,
	7,45,0,0,2159,361,1,0,0,0,2160,2161,7,46,0,0,2161,363,1,0,0,0,249,372,375,
	377,392,410,414,423,428,435,442,446,455,467,470,477,485,490,493,500,508,
	512,524,532,536,557,561,565,569,578,583,587,591,595,598,602,607,613,618,
	623,626,630,638,646,650,654,658,662,666,670,674,678,680,690,698,722,729,
	735,738,741,751,754,762,774,798,811,816,820,828,832,840,850,854,860,864,
	868,871,880,884,891,894,904,912,920,924,939,958,969,973,980,985,991,995,
	1002,1006,1010,1014,1022,1026,1031,1037,1043,1046,1050,1061,1070,1084,1096,
	1111,1114,1118,1121,1123,1128,1132,1135,1139,1148,1157,1167,1172,1184,1187,
	1190,1193,1199,1203,1211,1214,1219,1222,1224,1238,1249,1254,1262,1265,1268,
	1273,1275,1277,1282,1285,1289,1292,1295,1307,1314,1325,1354,1376,1394,1399,
	1411,1424,1436,1448,1453,1480,1488,1492,1495,1498,1505,1508,1511,1514,1517,
	1520,1525,1528,1537,1542,1546,1551,1560,1579,1587,1595,1599,1603,1613,1639,
	1647,1659,1681,1683,1694,1697,1699,1703,1707,1714,1723,1729,1742,1749,1754,
	1760,1767,1769,1772,1784,1789,1792,1798,1800,1806,1827,1829,1837,1841,1850,
	1854,1870,1879,1903,1910,1913,1923,1932,1938,1944,1952,1957,1961,1968,1973,
	1981,1985,1988,1992,1995,1999,2008,2011,2022,2028,2044,2063,2070,2073,2078,
	2084,2092,2108,2117,2127,2134,2137];

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
	public FILE_PATH(): TerminalNode {
		return this.getToken(FlinkSqlParser.FILE_PATH, 0);
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
