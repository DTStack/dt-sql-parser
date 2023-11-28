// Generated from dt-sql-parser/src/grammar/flinksql/FlinkSqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly KW_ABS = 4;
	public static readonly KW_ALL = 5;
	public static readonly KW_ALLOCATE = 6;
	public static readonly KW_ALLOW = 7;
	public static readonly KW_ALTER = 8;
	public static readonly KW_ANALYZE = 9;
	public static readonly KW_AND = 10;
	public static readonly KW_ANY = 11;
	public static readonly KW_ARE = 12;
	public static readonly KW_ARRAY = 13;
	public static readonly KW_ARRAY_AGG = 14;
	public static readonly KW_ARRAY_CONCAT_AGG = 15;
	public static readonly KW_ARRAY_MAX_CARDINALITY = 16;
	public static readonly KW_AS = 17;
	public static readonly KW_ASENSITIVE = 18;
	public static readonly KW_ASYMMETRIC = 19;
	public static readonly KW_AT = 20;
	public static readonly KW_ATOMIC = 21;
	public static readonly KW_AUTHORIZATION = 22;
	public static readonly KW_AVG = 23;
	public static readonly KW_BEGIN = 24;
	public static readonly KW_BEGIN_FRAME = 25;
	public static readonly KW_BEGIN_PARTITION = 26;
	public static readonly KW_BETWEEN = 27;
	public static readonly KW_BIGINT = 28;
	public static readonly KW_BINARY = 29;
	public static readonly KW_BIT = 30;
	public static readonly KW_BLOB = 31;
	public static readonly KW_BOOLEAN = 32;
	public static readonly KW_BOTH = 33;
	public static readonly KW_BY = 34;
	public static readonly KW_BYTES = 35;
	public static readonly KW_CALL = 36;
	public static readonly KW_CALLED = 37;
	public static readonly KW_CARDINALITY = 38;
	public static readonly KW_CASCADED = 39;
	public static readonly KW_CASE = 40;
	public static readonly KW_CAST = 41;
	public static readonly KW_CATALOGS = 42;
	public static readonly KW_CEIL = 43;
	public static readonly KW_CEILING = 44;
	public static readonly KW_CHANGELOG_MODE = 45;
	public static readonly KW_CHAR = 46;
	public static readonly KW_CHARACTER = 47;
	public static readonly KW_CHARACTER_LENGTH = 48;
	public static readonly KW_CHAR_LENGTH = 49;
	public static readonly KW_CHECK = 50;
	public static readonly KW_CLASSIFIER = 51;
	public static readonly KW_CLOB = 52;
	public static readonly KW_CLOSE = 53;
	public static readonly KW_COALESCE = 54;
	public static readonly KW_COLLATE = 55;
	public static readonly KW_COLLECT = 56;
	public static readonly KW_COLUMN = 57;
	public static readonly KW_COLUMNS = 58;
	public static readonly KW_COMMENT = 59;
	public static readonly KW_COMMIT = 60;
	public static readonly KW_COMPUTE = 61;
	public static readonly KW_CONDITION = 62;
	public static readonly KW_CONNECT = 63;
	public static readonly KW_CONSTRAINT = 64;
	public static readonly KW_CONTAINS = 65;
	public static readonly KW_CONVERT = 66;
	public static readonly KW_CORR = 67;
	public static readonly KW_CORRESPONDING = 68;
	public static readonly KW_COUNT = 69;
	public static readonly KW_COVAR_POP = 70;
	public static readonly KW_COVAR_SAMP = 71;
	public static readonly KW_CREATE = 72;
	public static readonly KW_CROSS = 73;
	public static readonly KW_CUBE = 74;
	public static readonly KW_CUME_DIST = 75;
	public static readonly KW_CURRENT = 76;
	public static readonly KW_CURRENT_CATALOG = 77;
	public static readonly KW_CURRENT_DATE = 78;
	public static readonly KW_CURRENT_DEFAULT_TRANSFORM_GROUP = 79;
	public static readonly KW_CURRENT_PATH = 80;
	public static readonly KW_CURRENT_ROLE = 81;
	public static readonly KW_CURRENT_ROW = 82;
	public static readonly KW_CURRENT_SCHEMA = 83;
	public static readonly KW_CURRENT_TIME = 84;
	public static readonly KW_CURRENT_TIMESTAMP = 85;
	public static readonly KW_CURRENT_TRANSFORM_GROUP_FOR_TYPE = 86;
	public static readonly KW_CURRENT_USER = 87;
	public static readonly KW_CURSOR = 88;
	public static readonly KW_CYCLE = 89;
	public static readonly KW_DATABASES = 90;
	public static readonly KW_DATE = 91;
	public static readonly KW_DATETIME = 92;
	public static readonly KW_DATETIME_DIFF = 93;
	public static readonly KW_DATETIME_TRUNC = 94;
	public static readonly KW_DATE_DIFF = 95;
	public static readonly KW_DATE_TRUNC = 96;
	public static readonly KW_DAY = 97;
	public static readonly KW_DAYOFWEEK = 98;
	public static readonly KW_DAYOFYEAR = 99;
	public static readonly KW_DEALLOCATE = 100;
	public static readonly KW_DEC = 101;
	public static readonly KW_DECIMAL = 102;
	public static readonly KW_DECLARE = 103;
	public static readonly KW_DEFAULT = 104;
	public static readonly KW_DEFINE = 105;
	public static readonly KW_DELETE = 106;
	public static readonly KW_DENSE_RANK = 107;
	public static readonly KW_DEREF = 108;
	public static readonly KW_DESCRIBE = 109;
	public static readonly KW_DETERMINISTIC = 110;
	public static readonly KW_DISALLOW = 111;
	public static readonly KW_DISCONNECT = 112;
	public static readonly KW_DISTINCT = 113;
	public static readonly KW_DOT = 114;
	public static readonly KW_DOUBLE = 115;
	public static readonly KW_DROP = 116;
	public static readonly KW_DYNAMIC = 117;
	public static readonly KW_EACH = 118;
	public static readonly KW_ELEMENT = 119;
	public static readonly KW_ELSE = 120;
	public static readonly KW_EMPTY = 121;
	public static readonly KW_END = 122;
	public static readonly KW_END_FRAME = 123;
	public static readonly KW_END_PARTITION = 124;
	public static readonly KW_ENFORCED = 125;
	public static readonly KW_EQUALS = 126;
	public static readonly KW_ESCAPE = 127;
	public static readonly KW_ESTIMATED_COST = 128;
	public static readonly KW_EVERY = 129;
	public static readonly KW_EXCEPT = 130;
	public static readonly KW_EXEC = 131;
	public static readonly KW_EXECUTE = 132;
	public static readonly KW_EXISTS = 133;
	public static readonly KW_EXP = 134;
	public static readonly KW_EXPLAIN = 135;
	public static readonly KW_EXTEND = 136;
	public static readonly KW_EXTENDED = 137;
	public static readonly KW_EXTERNAL = 138;
	public static readonly KW_EXTRACT = 139;
	public static readonly KW_FALSE = 140;
	public static readonly KW_FETCH = 141;
	public static readonly KW_FILTER = 142;
	public static readonly KW_FIRST_VALUE = 143;
	public static readonly KW_FLOAT = 144;
	public static readonly KW_FLOOR = 145;
	public static readonly KW_FOR = 146;
	public static readonly KW_FOREIGN = 147;
	public static readonly KW_FRAME_ROW = 148;
	public static readonly KW_FREE = 149;
	public static readonly KW_FRIDAY = 150;
	public static readonly KW_FROM = 151;
	public static readonly KW_FULL = 152;
	public static readonly KW_FUNCTION = 153;
	public static readonly KW_FUNCTIONS = 154;
	public static readonly KW_FUSION = 155;
	public static readonly KW_GET = 156;
	public static readonly KW_GLOBAL = 157;
	public static readonly KW_GRANT = 158;
	public static readonly KW_GROUP = 159;
	public static readonly KW_GROUPING = 160;
	public static readonly KW_GROUPS = 161;
	public static readonly KW_GROUP_CONCAT = 162;
	public static readonly KW_HAVING = 163;
	public static readonly KW_HOLD = 164;
	public static readonly KW_HOUR = 165;
	public static readonly KW_IDENTITY = 166;
	public static readonly KW_IF = 167;
	public static readonly KW_ILIKE = 168;
	public static readonly KW_IMPORT = 169;
	public static readonly KW_IN = 170;
	public static readonly KW_INCLUDE = 171;
	public static readonly KW_INDICATOR = 172;
	public static readonly KW_INITIAL = 173;
	public static readonly KW_INNER = 174;
	public static readonly KW_INOUT = 175;
	public static readonly KW_INSENSITIVE = 176;
	public static readonly KW_INSERT = 177;
	public static readonly KW_INT = 178;
	public static readonly KW_INTEGER = 179;
	public static readonly KW_INTERSECT = 180;
	public static readonly KW_INTERSECTION = 181;
	public static readonly KW_INTERVAL = 182;
	public static readonly KW_INTO = 183;
	public static readonly KW_IS = 184;
	public static readonly KW_JOIN = 185;
	public static readonly KW_JSON_ARRAY = 186;
	public static readonly KW_JSON_ARRAYAGG = 187;
	public static readonly KW_JSON_EXECUTION_PLAN = 188;
	public static readonly KW_JSON_EXISTS = 189;
	public static readonly KW_JSON_OBJECT = 190;
	public static readonly KW_JSON_OBJECTAGG = 191;
	public static readonly KW_JSON_QUERY = 192;
	public static readonly KW_JSON_VALUE = 193;
	public static readonly KW_LAG = 194;
	public static readonly KW_LANGUAGE = 195;
	public static readonly KW_LARGE = 196;
	public static readonly KW_LAST_VALUE = 197;
	public static readonly KW_LATERAL = 198;
	public static readonly KW_LEAD = 199;
	public static readonly KW_LEADING = 200;
	public static readonly KW_LEFT = 201;
	public static readonly KW_LIKE = 202;
	public static readonly KW_LIKE_REGEX = 203;
	public static readonly KW_LIMIT = 204;
	public static readonly KW_LN = 205;
	public static readonly KW_LOCAL = 206;
	public static readonly KW_LOCALTIME = 207;
	public static readonly KW_LOCALTIMESTAMP = 208;
	public static readonly KW_LOWER = 209;
	public static readonly KW_MATCH = 210;
	public static readonly KW_MATCHES = 211;
	public static readonly KW_MATCH_NUMBER = 212;
	public static readonly KW_MATCH_RECOGNIZE = 213;
	public static readonly KW_MAX = 214;
	public static readonly KW_MEASURES = 215;
	public static readonly KW_MEMBER = 216;
	public static readonly KW_MERGE = 217;
	public static readonly KW_METADATA = 218;
	public static readonly KW_METHOD = 219;
	public static readonly KW_MIN = 220;
	public static readonly KW_MINUS = 221;
	public static readonly KW_MINUTE = 222;
	public static readonly KW_MOD = 223;
	public static readonly KW_MODIFIES = 224;
	public static readonly KW_MODIFY = 225;
	public static readonly KW_MODULE = 226;
	public static readonly KW_MODULES = 227;
	public static readonly KW_MONDAY = 228;
	public static readonly KW_MONTH = 229;
	public static readonly KW_MORE = 230;
	public static readonly KW_MULTISET = 231;
	public static readonly KW_NATIONAL = 232;
	public static readonly KW_NATURAL = 233;
	public static readonly KW_NCHAR = 234;
	public static readonly KW_NCLOB = 235;
	public static readonly KW_NEW = 236;
	public static readonly KW_NEXT = 237;
	public static readonly KW_NO = 238;
	public static readonly KW_NONE = 239;
	public static readonly KW_NORMALIZE = 240;
	public static readonly KW_NOT = 241;
	public static readonly KW_NTH_VALUE = 242;
	public static readonly KW_NTILE = 243;
	public static readonly KW_NULL = 244;
	public static readonly KW_NULLIF = 245;
	public static readonly KW_NUMERIC = 246;
	public static readonly KW_OCCURRENCES_REGEX = 247;
	public static readonly KW_OCTET_LENGTH = 248;
	public static readonly KW_OF = 249;
	public static readonly KW_OFFSET = 250;
	public static readonly KW_OLD = 251;
	public static readonly KW_OMIT = 252;
	public static readonly KW_ON = 253;
	public static readonly KW_ONE = 254;
	public static readonly KW_ONLY = 255;
	public static readonly KW_OPEN = 256;
	public static readonly KW_OR = 257;
	public static readonly KW_ORDER = 258;
	public static readonly KW_ORDINAL = 259;
	public static readonly KW_OUT = 260;
	public static readonly KW_OUTER = 261;
	public static readonly KW_OVER = 262;
	public static readonly KW_OVERLAPS = 263;
	public static readonly KW_OVERLAY = 264;
	public static readonly KW_OVERWRITE = 265;
	public static readonly KW_OVERWRITING = 266;
	public static readonly KW_PARAMETER = 267;
	public static readonly KW_PARTITION = 268;
	public static readonly KW_PARTITIONED = 269;
	public static readonly KW_PARTITIONS = 270;
	public static readonly KW_PATTERN = 271;
	public static readonly KW_PER = 272;
	public static readonly KW_PERCENT = 273;
	public static readonly KW_PERCENTILE_CONT = 274;
	public static readonly KW_PERCENTILE_DISC = 275;
	public static readonly KW_PERCENT_RANK = 276;
	public static readonly KW_PERIOD = 277;
	public static readonly KW_PERMUTE = 278;
	public static readonly KW_PIVOT = 279;
	public static readonly KW_PORTION = 280;
	public static readonly KW_POSITION = 281;
	public static readonly KW_POSITION_REGEX = 282;
	public static readonly KW_POWER = 283;
	public static readonly KW_PRECEDES = 284;
	public static readonly KW_PRECISION = 285;
	public static readonly KW_PREPARE = 286;
	public static readonly KW_PREV = 287;
	public static readonly KW_PRIMARY = 288;
	public static readonly KW_PROCEDURE = 289;
	public static readonly KW_QUALIFY = 290;
	public static readonly KW_QUARTERS = 291;
	public static readonly KW_RANGE = 292;
	public static readonly KW_RANK = 293;
	public static readonly KW_RAW = 294;
	public static readonly KW_READS = 295;
	public static readonly KW_REAL = 296;
	public static readonly KW_RECURSIVE = 297;
	public static readonly KW_REF = 298;
	public static readonly KW_REFERENCES = 299;
	public static readonly KW_REFERENCING = 300;
	public static readonly KW_REGR_AVGX = 301;
	public static readonly KW_REGR_AVGY = 302;
	public static readonly KW_REGR_COUNT = 303;
	public static readonly KW_REGR_INTERCEPT = 304;
	public static readonly KW_REGR_R2 = 305;
	public static readonly KW_REGR_SLOPE = 306;
	public static readonly KW_REGR_SXX = 307;
	public static readonly KW_REGR_SXY = 308;
	public static readonly KW_REGR_SYY = 309;
	public static readonly KW_RELEASE = 310;
	public static readonly KW_RENAME = 311;
	public static readonly KW_RESET = 312;
	public static readonly KW_RESULT = 313;
	public static readonly KW_RETURN = 314;
	public static readonly KW_RETURNS = 315;
	public static readonly KW_REVOKE = 316;
	public static readonly KW_RIGHT = 317;
	public static readonly KW_RLIKE = 318;
	public static readonly KW_ROLLBACK = 319;
	public static readonly KW_ROLLUP = 320;
	public static readonly KW_ROW = 321;
	public static readonly KW_ROWS = 322;
	public static readonly KW_ROW_NUMBER = 323;
	public static readonly KW_RUNNING = 324;
	public static readonly KW_SAFE_CAST = 325;
	public static readonly KW_SAFE_OFFSET = 326;
	public static readonly KW_SAFE_ORDINAL = 327;
	public static readonly KW_SATURDAY = 328;
	public static readonly KW_SAVEPOINT = 329;
	public static readonly KW_SCALA = 330;
	public static readonly KW_SCOPE = 331;
	public static readonly KW_SCROLL = 332;
	public static readonly KW_SEARCH = 333;
	public static readonly KW_SECOND = 334;
	public static readonly KW_SEEK = 335;
	public static readonly KW_SELECT = 336;
	public static readonly KW_SENSITIVE = 337;
	public static readonly KW_SEPARATOR = 338;
	public static readonly KW_SESSION_USER = 339;
	public static readonly KW_SET = 340;
	public static readonly KW_SHOW = 341;
	public static readonly KW_SIMILAR = 342;
	public static readonly KW_SKIP = 343;
	public static readonly KW_SMALLINT = 344;
	public static readonly KW_SOME = 345;
	public static readonly KW_SPECIFIC = 346;
	public static readonly KW_SPECIFICTYPE = 347;
	public static readonly KW_SQL = 348;
	public static readonly KW_SQLEXCEPTION = 349;
	public static readonly KW_SQLSTATE = 350;
	public static readonly KW_SQLWARNING = 351;
	public static readonly KW_SQRT = 352;
	public static readonly KW_START = 353;
	public static readonly KW_STATEMENT = 354;
	public static readonly KW_STATIC = 355;
	public static readonly KW_STATISTICS = 356;
	public static readonly KW_STDDEV_POP = 357;
	public static readonly KW_STDDEV_SAMP = 358;
	public static readonly KW_STREAM = 359;
	public static readonly KW_STRING = 360;
	public static readonly KW_STRING_AGG = 361;
	public static readonly KW_SUBMULTISET = 362;
	public static readonly KW_SUBSET = 363;
	public static readonly KW_SUBSTRING = 364;
	public static readonly KW_SUBSTRING_REGEX = 365;
	public static readonly KW_SUCCEEDS = 366;
	public static readonly KW_SUM = 367;
	public static readonly KW_SUNDAY = 368;
	public static readonly KW_SYMMETRIC = 369;
	public static readonly KW_SYSTEM = 370;
	public static readonly KW_SYSTEM_TIME = 371;
	public static readonly KW_SYSTEM_USER = 372;
	public static readonly KW_TABLE = 373;
	public static readonly KW_TABLES = 374;
	public static readonly KW_TABLESAMPLE = 375;
	public static readonly KW_THEN = 376;
	public static readonly KW_THURSDAY = 377;
	public static readonly KW_TIME = 378;
	public static readonly KW_TIMESTAMP = 379;
	public static readonly KW_TIMESTAMP_DIFF = 380;
	public static readonly KW_TIMESTAMP_LTZ = 381;
	public static readonly KW_TIMESTAMP_TRUNC = 382;
	public static readonly KW_TIMEZONE_HOUR = 383;
	public static readonly KW_TIMEZONE_MINUTE = 384;
	public static readonly KW_TIME_DIFF = 385;
	public static readonly KW_TIME_TRUNC = 386;
	public static readonly KW_TINYINT = 387;
	public static readonly KW_TO = 388;
	public static readonly KW_TRAILING = 389;
	public static readonly KW_TRANSLATE = 390;
	public static readonly KW_TRANSLATE_REGEX = 391;
	public static readonly KW_TRANSLATION = 392;
	public static readonly KW_TREAT = 393;
	public static readonly KW_TRIGGER = 394;
	public static readonly KW_TRIM = 395;
	public static readonly KW_TRIM_ARRAY = 396;
	public static readonly KW_TRUE = 397;
	public static readonly KW_TRUNCATE = 398;
	public static readonly KW_TRY_CAST = 399;
	public static readonly KW_TUESDAY = 400;
	public static readonly KW_UESCAPE = 401;
	public static readonly KW_UNION = 402;
	public static readonly KW_UNIQUE = 403;
	public static readonly KW_UNKNOWN = 404;
	public static readonly KW_UNNEST = 405;
	public static readonly KW_UNPIVOT = 406;
	public static readonly KW_UPDATE = 407;
	public static readonly KW_UPPER = 408;
	public static readonly KW_UPSERT = 409;
	public static readonly KW_USE = 410;
	public static readonly KW_USER = 411;
	public static readonly KW_USING = 412;
	public static readonly KW_VALUE = 413;
	public static readonly KW_VALUES = 414;
	public static readonly KW_VALUE_OF = 415;
	public static readonly KW_VARBINARY = 416;
	public static readonly KW_VARCHAR = 417;
	public static readonly KW_VARYING = 418;
	public static readonly KW_VAR_POP = 419;
	public static readonly KW_VAR_SAMP = 420;
	public static readonly KW_VERSIONING = 421;
	public static readonly KW_VIEWS = 422;
	public static readonly KW_VIRTUAL = 423;
	public static readonly KW_WATERMARK = 424;
	public static readonly KW_WATERMARKS = 425;
	public static readonly KW_WEDNESDAY = 426;
	public static readonly KW_WEEKS = 427;
	public static readonly KW_WHEN = 428;
	public static readonly KW_WHENEVER = 429;
	public static readonly KW_WHERE = 430;
	public static readonly KW_WIDTH_BUCKET = 431;
	public static readonly KW_WINDOW = 432;
	public static readonly KW_WITH = 433;
	public static readonly KW_WITHIN = 434;
	public static readonly KW_WITHOUT = 435;
	public static readonly KW_YEAR = 436;
	public static readonly KW_ADD = 437;
	public static readonly KW_AFTER = 438;
	public static readonly KW_ASC = 439;
	public static readonly KW_CASCADE = 440;
	public static readonly KW_CATALOG = 441;
	public static readonly KW_CENTURY = 442;
	public static readonly KW_CONFIG = 443;
	public static readonly KW_CONSTRAINTS = 444;
	public static readonly KW_CUMULATE = 445;
	public static readonly KW_DATA = 446;
	public static readonly KW_DATABASE = 447;
	public static readonly KW_DAYS = 448;
	public static readonly KW_DECADE = 449;
	public static readonly KW_DESC = 450;
	public static readonly KW_DESCRIPTOR = 451;
	public static readonly KW_DIV = 452;
	public static readonly KW_ENGINE = 453;
	public static readonly KW_EPOCH = 454;
	public static readonly KW_EXCLUDING = 455;
	public static readonly KW_FILE = 456;
	public static readonly KW_FIRST = 457;
	public static readonly KW_GENERATED = 458;
	public static readonly KW_HOP = 459;
	public static readonly KW_HOURS = 460;
	public static readonly KW_IGNORE = 461;
	public static readonly KW_INCLUDING = 462;
	public static readonly KW_JAR = 463;
	public static readonly KW_JARS = 464;
	public static readonly KW_JAVA = 465;
	public static readonly KW_KEY = 466;
	public static readonly KW_LAST = 467;
	public static readonly KW_LOAD = 468;
	public static readonly KW_MAP = 469;
	public static readonly KW_MICROSECOND = 470;
	public static readonly KW_MILLENNIUM = 471;
	public static readonly KW_MILLISECOND = 472;
	public static readonly KW_MINUTES = 473;
	public static readonly KW_MONTHS = 474;
	public static readonly KW_NANOSECOND = 475;
	public static readonly KW_NULLS = 476;
	public static readonly KW_OPTIONS = 477;
	public static readonly KW_PAST = 478;
	public static readonly KW_PLAN = 479;
	public static readonly KW_PRECEDING = 480;
	public static readonly KW_PYTHON = 481;
	public static readonly KW_PYTHON_ARCHIVES = 482;
	public static readonly KW_PYTHON_DEPENDENCIES = 483;
	public static readonly KW_PYTHON_FILES = 484;
	public static readonly KW_PYTHON_JAR = 485;
	public static readonly KW_PYTHON_PARAMETER = 486;
	public static readonly KW_PYTHON_REQUIREMENTS = 487;
	public static readonly KW_QUARTER = 488;
	public static readonly KW_REMOVE = 489;
	public static readonly KW_RESTRICT = 490;
	public static readonly KW_SECONDS = 491;
	public static readonly KW_SESSION = 492;
	public static readonly KW_SETS = 493;
	public static readonly KW_SIZE = 494;
	public static readonly KW_SLIDE = 495;
	public static readonly KW_STEP = 496;
	public static readonly KW_TEMPORARY = 497;
	public static readonly KW_TIMECOL = 498;
	public static readonly KW_TUMBLE = 499;
	public static readonly KW_UNLOAD = 500;
	public static readonly KW_VIEW = 501;
	public static readonly KW_WEEK = 502;
	public static readonly KW_YEARS = 503;
	public static readonly KW_ZONE = 504;
	public static readonly EQUAL_SYMBOL = 505;
	public static readonly GREATER_SYMBOL = 506;
	public static readonly LESS_SYMBOL = 507;
	public static readonly EXCLAMATION_SYMBOL = 508;
	public static readonly BIT_NOT_OP = 509;
	public static readonly BIT_OR_OP = 510;
	public static readonly BIT_AND_OP = 511;
	public static readonly BIT_XOR_OP = 512;
	public static readonly DOT = 513;
	public static readonly LS_BRACKET = 514;
	public static readonly RS_BRACKET = 515;
	public static readonly LR_BRACKET = 516;
	public static readonly RR_BRACKET = 517;
	public static readonly LB_BRACKET = 518;
	public static readonly RB_BRACKET = 519;
	public static readonly COMMA = 520;
	public static readonly SEMICOLON = 521;
	public static readonly AT_SIGN = 522;
	public static readonly SINGLE_QUOTE_SYMB = 523;
	public static readonly DOUBLE_QUOTE_SYMB = 524;
	public static readonly REVERSE_QUOTE_SYMB = 525;
	public static readonly COLON_SYMB = 526;
	public static readonly ASTERISK_SIGN = 527;
	public static readonly UNDERLINE_SIGN = 528;
	public static readonly HYPNEN_SIGN = 529;
	public static readonly ADD_SIGN = 530;
	public static readonly PENCENT_SIGN = 531;
	public static readonly DOUBLE_VERTICAL_SIGN = 532;
	public static readonly DOUBLE_HYPNEN_SIGN = 533;
	public static readonly SLASH_SIGN = 534;
	public static readonly QUESTION_MARK_SIGN = 535;
	public static readonly DOUBLE_RIGHT_ARROW = 536;
	public static readonly STRING_LITERAL = 537;
	public static readonly DIG_LITERAL = 538;
	public static readonly REAL_LITERAL = 539;
	public static readonly BIT_STRING = 540;
	public static readonly ID_LITERAL = 541;
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
	public static readonly RULE_columnNameCreate = 26;
	public static readonly RULE_columnName = 27;
	public static readonly RULE_columnNameList = 28;
	public static readonly RULE_columnType = 29;
	public static readonly RULE_lengthOneDimension = 30;
	public static readonly RULE_lengthTwoOptionalDimension = 31;
	public static readonly RULE_lengthTwoStringDimension = 32;
	public static readonly RULE_lengthOneTypeDimension = 33;
	public static readonly RULE_mapTypeDimension = 34;
	public static readonly RULE_rowTypeDimension = 35;
	public static readonly RULE_columnConstraint = 36;
	public static readonly RULE_commentSpec = 37;
	public static readonly RULE_metadataColumnDefinition = 38;
	public static readonly RULE_metadataKey = 39;
	public static readonly RULE_computedColumnDefinition = 40;
	public static readonly RULE_computedColumnExpression = 41;
	public static readonly RULE_watermarkDefinition = 42;
	public static readonly RULE_tableConstraint = 43;
	public static readonly RULE_constraintName = 44;
	public static readonly RULE_selfDefinitionClause = 45;
	public static readonly RULE_partitionDefinition = 46;
	public static readonly RULE_transformList = 47;
	public static readonly RULE_transform = 48;
	public static readonly RULE_transformArgument = 49;
	public static readonly RULE_likeDefinition = 50;
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
	public static readonly RULE_functionNameCreate = 136;
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
	public static readonly RULE_tableAlias = 148;
	public static readonly RULE_errorCapturingIdentifier = 149;
	public static readonly RULE_errorCapturingIdentifierExtra = 150;
	public static readonly RULE_identifierList = 151;
	public static readonly RULE_identifierSeq = 152;
	public static readonly RULE_identifier = 153;
	public static readonly RULE_unquotedIdentifier = 154;
	public static readonly RULE_quotedIdentifier = 155;
	public static readonly RULE_whenClause = 156;
	public static readonly RULE_catalogPath = 157;
	public static readonly RULE_catalogPathCreate = 158;
	public static readonly RULE_databasePath = 159;
	public static readonly RULE_databasePathCreate = 160;
	public static readonly RULE_tablePathCreate = 161;
	public static readonly RULE_tablePath = 162;
	public static readonly RULE_viewPath = 163;
	public static readonly RULE_viewPathCreate = 164;
	public static readonly RULE_uid = 165;
	public static readonly RULE_withOption = 166;
	public static readonly RULE_ifNotExists = 167;
	public static readonly RULE_ifExists = 168;
	public static readonly RULE_tablePropertyList = 169;
	public static readonly RULE_tableProperty = 170;
	public static readonly RULE_tablePropertyKey = 171;
	public static readonly RULE_tablePropertyValue = 172;
	public static readonly RULE_logicalOperator = 173;
	public static readonly RULE_comparisonOperator = 174;
	public static readonly RULE_bitOperator = 175;
	public static readonly RULE_mathOperator = 176;
	public static readonly RULE_unaryOperator = 177;
	public static readonly RULE_constant = 178;
	public static readonly RULE_timePointLiteral = 179;
	public static readonly RULE_stringLiteral = 180;
	public static readonly RULE_decimalLiteral = 181;
	public static readonly RULE_booleanLiteral = 182;
	public static readonly RULE_setQuantifier = 183;
	public static readonly RULE_timePointUnit = 184;
	public static readonly RULE_timeIntervalUnit = 185;
	public static readonly RULE_reservedKeywordsUsedAsFuncParam = 186;
	public static readonly RULE_reservedKeywordsUsedAsFuncName = 187;
	public static readonly RULE_nonReservedKeywords = 188;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "sqlStatements", "sqlStatement", "emptyStatement", 
		"ddlStatement", "dmlStatement", "describeStatement", "explainStatement", 
		"explainDetails", "explainDetail", "useStatement", "useModuleStatement", 
		"showStatememt", "loadStatement", "unloadStatememt", "setStatememt", "resetStatememt", 
		"jarStatememt", "dtAddStatement", "dtFilePath", "createTable", "simpleCreateTable", 
		"createTableAsSelect", "columnOptionDefinition", "physicalColumnDefinition", 
		"columnNameCreate", "columnName", "columnNameList", "columnType", "lengthOneDimension", 
		"lengthTwoOptionalDimension", "lengthTwoStringDimension", "lengthOneTypeDimension", 
		"mapTypeDimension", "rowTypeDimension", "columnConstraint", "commentSpec", 
		"metadataColumnDefinition", "metadataKey", "computedColumnDefinition", 
		"computedColumnExpression", "watermarkDefinition", "tableConstraint", 
		"constraintName", "selfDefinitionClause", "partitionDefinition", "transformList", 
		"transform", "transformArgument", "likeDefinition", "likeOption", "createCatalog", 
		"createDatabase", "createView", "createFunction", "usingClause", "jarFileName", 
		"alterTable", "renameDefinition", "setKeyValueDefinition", "addConstraint", 
		"dropConstraint", "addUnique", "notForced", "alertView", "alterDatabase", 
		"alterFunction", "dropCatalog", "dropTable", "dropDatabase", "dropView", 
		"dropFunction", "insertStatement", "insertSimpleStatement", "insertPartitionDefinition", 
		"valuesDefinition", "valuesRowDefinition", "insertMulStatementCompatibility", 
		"insertMulStatement", "queryStatement", "valuesCaluse", "withClause", 
		"withItem", "withItemName", "selectStatement", "selectClause", "projectItemDefinition", 
		"overWindowItem", "fromClause", "tableExpression", "tableReference", "tablePrimary", 
		"systemTimePeriod", "dateTimeExpression", "inlineDataValueClause", "windoTVFClause", 
		"windowTVFExression", "windoTVFName", "windowTVFParam", "timeIntervalParamName", 
		"columnDescriptor", "joinCondition", "whereClause", "groupByClause", "groupItemDefinition", 
		"groupingSets", "groupingSetsNotaionName", "groupWindowFunction", "groupWindowFunctionName", 
		"timeAttrColumn", "havingClause", "windowClause", "namedWindow", "windowSpec", 
		"matchRecognizeClause", "orderByCaluse", "orderItemDefition", "limitClause", 
		"partitionByClause", "quantifiers", "measuresClause", "patternDefination", 
		"patternVariable", "outputMode", "afterMatchStrategy", "patternVariablesDefination", 
		"windowFrame", "frameBound", "withinClause", "expression", "booleanExpression", 
		"predicate", "likePredicate", "valueExpression", "primaryExpression", 
		"functionNameCreate", "functionName", "functionParam", "dereferenceDefinition", 
		"correlationName", "qualifiedName", "timeIntervalExpression", "errorCapturingMultiUnitsInterval", 
		"multiUnitsInterval", "errorCapturingUnitToUnitInterval", "unitToUnitInterval", 
		"intervalValue", "tableAlias", "errorCapturingIdentifier", "errorCapturingIdentifierExtra", 
		"identifierList", "identifierSeq", "identifier", "unquotedIdentifier", 
		"quotedIdentifier", "whenClause", "catalogPath", "catalogPathCreate", 
		"databasePath", "databasePathCreate", "tablePathCreate", "tablePath", 
		"viewPath", "viewPathCreate", "uid", "withOption", "ifNotExists", "ifExists", 
		"tablePropertyList", "tableProperty", "tablePropertyKey", "tablePropertyValue", 
		"logicalOperator", "comparisonOperator", "bitOperator", "mathOperator", 
		"unaryOperator", "constant", "timePointLiteral", "stringLiteral", "decimalLiteral", 
		"booleanLiteral", "setQuantifier", "timePointUnit", "timeIntervalUnit", 
		"reservedKeywordsUsedAsFuncParam", "reservedKeywordsUsedAsFuncName", "nonReservedKeywords",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'ABS'", "'ALL'", "'ALLOCATE'", 
		"'ALLOW'", "'ALTER'", "'ANALYZE'", "'AND'", "'ANY'", "'ARE'", "'ARRAY'", 
		"'ARRAY_AGG'", "'ARRAY_CONCAT_AGG'", "'ARRAY_MAX_CARDINALITY'", "'AS'", 
		"'ASENSITIVE'", "'ASYMMETRIC'", "'AT'", "'ATOMIC'", "'AUTHORIZATION'", 
		"'AVG'", "'BEGIN'", "'BEGIN_FRAME'", "'BEGIN_PARTITION'", "'BETWEEN'", 
		"'BIGINT'", "'BINARY'", "'BIT'", "'BLOB'", "'BOOLEAN'", "'BOTH'", "'BY'", 
		"'BYTES'", "'CALL'", "'CALLED'", "'CARDINALITY'", "'CASCADED'", "'CASE'", 
		"'CAST'", "'CATALOGS'", "'CEIL'", "'CEILING'", "'CHANGELOG_MODE'", "'CHAR'", 
		"'CHARACTER'", "'CHARACTER_LENGTH'", "'CHAR_LENGTH'", "'CHECK'", "'CLASSIFIER'", 
		"'CLOB'", "'CLOSE'", "'COALESCE'", "'COLLATE'", "'COLLECT'", "'COLUMN'", 
		"'COLUMNS'", "'COMMENT'", "'COMMIT'", "'COMPUTE'", "'CONDITION'", "'CONNECT'", 
		"'CONSTRAINT'", "'CONTAINS'", "'CONVERT'", "'CORR'", "'CORRESPONDING'", 
		"'COUNT'", "'COVAR_POP'", "'COVAR_SAMP'", "'CREATE'", "'CROSS'", "'CUBE'", 
		"'CUME_DIST'", "'CURRENT'", "'CURRENT_CATALOG'", "'CURRENT_DATE'", "'CURRENT_DEFAULT_TRANSFORM_GROUP'", 
		"'CURRENT_PATH'", "'CURRENT_ROLE'", "'CURRENT_ROW'", "'CURRENT_SCHEMA'", 
		"'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", "'CURRENT_TRANSFORM_GROUP_FOR_TYPE'", 
		"'CURRENT_USER'", "'CURSOR'", "'CYCLE'", "'DATABASES'", "'DATE'", "'DATETIME'", 
		"'DATETIME_DIFF'", "'DATETIME_TRUNC'", "'DATE_DIFF'", "'DATE_TRUNC'", 
		"'DAY'", "'DAYOFWEEK'", "'DAYOFYEAR'", "'DEALLOCATE'", "'DEC'", "'DECIMAL'", 
		"'DECLARE'", "'DEFAULT'", "'DEFINE'", "'DELETE'", "'DENSE_RANK'", "'DEREF'", 
		"'DESCRIBE'", "'DETERMINISTIC'", "'DISALLOW'", "'DISCONNECT'", "'DISTINCT'", 
		"'DOT'", "'DOUBLE'", "'DROP'", "'DYNAMIC'", "'EACH'", "'ELEMENT'", "'ELSE'", 
		"'EMPTY'", "'END'", "'END_FRAME'", "'END_PARTITION'", "'ENFORCED'", "'EQUALS'", 
		"'ESCAPE'", "'ESTIMATED_COST'", "'EVERY'", "'EXCEPT'", "'EXEC'", "'EXECUTE'", 
		"'EXISTS'", "'EXP'", "'EXPLAIN'", "'EXTEND'", "'EXTENDED'", "'EXTERNAL'", 
		"'EXTRACT'", "'FALSE'", "'FETCH'", "'FILTER'", "'FIRST_VALUE'", "'FLOAT'", 
		"'FLOOR'", "'FOR'", "'FOREIGN'", "'FRAME_ROW'", "'FREE'", "'FRIDAY'", 
		"'FROM'", "'FULL'", "'FUNCTION'", "'FUNCTIONS'", "'FUSION'", "'GET'", 
		"'GLOBAL'", "'GRANT'", "'GROUP'", "'GROUPING'", "'GROUPS'", "'GROUP_CONCAT'", 
		"'HAVING'", "'HOLD'", "'HOUR'", "'IDENTITY'", "'IF'", "'ILIKE'", "'IMPORT'", 
		"'IN'", "'INCLUDE'", "'INDICATOR'", "'INITIAL'", "'INNER'", "'INOUT'", 
		"'INSENSITIVE'", "'INSERT'", "'INT'", "'INTEGER'", "'INTERSECT'", "'INTERSECTION'", 
		"'INTERVAL'", "'INTO'", "'IS'", "'JOIN'", "'JSON_ARRAY'", "'JSON_ARRAYAGG'", 
		"'JSON_EXECUTION_PLAN'", "'JSON_EXISTS'", "'JSON_OBJECT'", "'JSON_OBJECTAGG'", 
		"'JSON_QUERY'", "'JSON_VALUE'", "'LAG'", "'LANGUAGE'", "'LARGE'", "'LAST_VALUE'", 
		"'LATERAL'", "'LEAD'", "'LEADING'", "'LEFT'", "'LIKE'", "'LIKE_REGEX'", 
		"'LIMIT'", "'LN'", "'LOCAL'", "'LOCALTIME'", "'LOCALTIMESTAMP'", "'LOWER'", 
		"'MATCH'", "'MATCHES'", "'MATCH_NUMBER'", "'MATCH_RECOGNIZE'", "'MAX'", 
		"'MEASURES'", "'MEMBER'", "'MERGE'", "'METADATA'", "'METHOD'", "'MIN'", 
		"'MINUS'", "'MINUTE'", "'MOD'", "'MODIFIES'", "'MODIFY'", "'MODULE'", 
		"'MODULES'", "'MONDAY'", "'MONTH'", "'MORE'", "'MULTISET'", "'NATIONAL'", 
		"'NATURAL'", "'NCHAR'", "'NCLOB'", "'NEW'", "'NEXT'", "'NO'", "'NONE'", 
		"'NORMALIZE'", "'NOT'", "'NTH_VALUE'", "'NTILE'", "'NULL'", "'NULLIF'", 
		"'NUMERIC'", "'OCCURRENCES_REGEX'", "'OCTET_LENGTH'", "'OF'", "'OFFSET'", 
		"'OLD'", "'OMIT'", "'ON'", "'ONE'", "'ONLY'", "'OPEN'", "'OR'", "'ORDER'", 
		"'ORDINAL'", "'OUT'", "'OUTER'", "'OVER'", "'OVERLAPS'", "'OVERLAY'", 
		"'OVERWRITE'", "'OVERWRITING'", "'PARAMETER'", "'PARTITION'", "'PARTITIONED'", 
		"'PARTITIONS'", "'PATTERN'", "'PER'", "'PERCENT'", "'PERCENTILE_CONT'", 
		"'PERCENTILE_DISC'", "'PERCENT_RANK'", "'PERIOD'", "'PERMUTE'", "'PIVOT'", 
		"'PORTION'", "'POSITION'", "'POSITION_REGEX'", "'POWER'", "'PRECEDES'", 
		"'PRECISION'", "'PREPARE'", "'PREV'", "'PRIMARY'", "'PROCEDURE'", "'QUALIFY'", 
		"'QUARTERS'", "'RANGE'", "'RANK'", "'RAW'", "'READS'", "'REAL'", "'RECURSIVE'", 
		"'REF'", "'REFERENCES'", "'REFERENCING'", "'REGR_AVGX'", "'REGR_AVGY'", 
		"'REGR_COUNT'", "'REGR_INTERCEPT'", "'REGR_R2'", "'REGR_SLOPE'", "'REGR_SXX'", 
		"'REGR_SXY'", "'REGR_SYY'", "'RELEASE'", "'RENAME'", "'RESET'", "'RESULT'", 
		"'RETURN'", "'RETURNS'", "'REVOKE'", "'RIGHT'", "'RLIKE'", "'ROLLBACK'", 
		"'ROLLUP'", "'ROW'", "'ROWS'", "'ROW_NUMBER'", "'RUNNING'", "'SAFE_CAST'", 
		"'SAFE_OFFSET'", "'SAFE_ORDINAL'", "'SATURDAY'", "'SAVEPOINT'", "'SCALA'", 
		"'SCOPE'", "'SCROLL'", "'SEARCH'", "'SECOND'", "'SEEK'", "'SELECT'", "'SENSITIVE'", 
		"'SEPARATOR'", "'SESSION_USER'", "'SET'", "'SHOW'", "'SIMILAR'", "'SKIP'", 
		"'SMALLINT'", "'SOME'", "'SPECIFIC'", "'SPECIFICTYPE'", "'SQL'", "'SQLEXCEPTION'", 
		"'SQLSTATE'", "'SQLWARNING'", "'SQRT'", "'START'", "'STATEMENT'", "'STATIC'", 
		"'STATISTICS'", "'STDDEV_POP'", "'STDDEV_SAMP'", "'STREAM'", "'STRING'", 
		"'STRING_AGG'", "'SUBMULTISET'", "'SUBSET'", "'SUBSTRING'", "'SUBSTRING_REGEX'", 
		"'SUCCEEDS'", "'SUM'", "'SUNDAY'", "'SYMMETRIC'", "'SYSTEM'", "'SYSTEM_TIME'", 
		"'SYSTEM_USER'", "'TABLE'", "'TABLES'", "'TABLESAMPLE'", "'THEN'", "'THURSDAY'", 
		"'TIME'", "'TIMESTAMP'", "'TIMESTAMP_DIFF'", "'TIMESTAMP_LTZ'", "'TIMESTAMP_TRUNC'", 
		"'TIMEZONE_HOUR'", "'TIMEZONE_MINUTE'", "'TIME_DIFF'", "'TIME_TRUNC'", 
		"'TINYINT'", "'TO'", "'TRAILING'", "'TRANSLATE'", "'TRANSLATE_REGEX'", 
		"'TRANSLATION'", "'TREAT'", "'TRIGGER'", "'TRIM'", "'TRIM_ARRAY'", "'TRUE'", 
		"'TRUNCATE'", "'TRY_CAST'", "'TUESDAY'", "'UESCAPE'", "'UNION'", "'UNIQUE'", 
		"'UNKNOWN'", "'UNNEST'", "'UNPIVOT'", "'UPDATE'", "'UPPER'", "'UPSERT'", 
		"'USE'", "'USER'", "'USING'", "'VALUE'", "'VALUES'", "'VALUE_OF'", "'VARBINARY'", 
		"'VARCHAR'", "'VARYING'", "'VAR_POP'", "'VAR_SAMP'", "'VERSIONING'", "'VIEWS'", 
		"'VIRTUAL'", "'WATERMARK'", "'WATERMARKS'", "'WEDNESDAY'", "'WEEKS'", 
		"'WHEN'", "'WHENEVER'", "'WHERE'", "'WIDTH_BUCKET'", "'WINDOW'", "'WITH'", 
		"'WITHIN'", "'WITHOUT'", "'YEAR'", "'ADD'", "'AFTER'", "'ASC'", "'CASCADE'", 
		"'CATALOG'", "'CENTURY'", "'CONFIG'", "'CONSTRAINTS'", "'CUMULATE'", "'DATA'", 
		"'DATABASE'", "'DAYS'", "'DECADE'", "'DESC'", "'DESCRIPTOR'", "'DIV'", 
		"'ENGINE'", "'EPOCH'", "'EXCLUDING'", "'FILE'", "'FIRST'", "'GENERATED'", 
		"'HOP'", "'HOURS'", "'IGNORE'", "'INCLUDING'", "'JAR'", "'JARS'", "'JAVA'", 
		"'KEY'", "'LAST'", "'LOAD'", "'MAP'", "'MICROSECOND'", "'MILLENNIUM'", 
		"'MILLISECOND'", "'MINUTES'", "'MONTHS'", "'NANOSECOND'", "'NULLS'", "'OPTIONS'", 
		"'PAST'", "'PLAN'", "'PRECEDING'", "'PYTHON'", "'PYTHON_ARCHIVES'", "'PYTHON_DEPENDENCIES'", 
		"'PYTHON_FILES'", "'PYTHON_JAR'", "'PYTHON_PARAMETER'", "'PYTHON_REQUIREMENTS'", 
		"'QUARTER'", "'REMOVE'", "'RESTRICT'", "'SECONDS'", "'SESSION'", "'SETS'", 
		"'SIZE'", "'SLIDE'", "'STEP'", "'TEMPORARY'", "'TIMECOL'", "'TUMBLE'", 
		"'UNLOAD'", "'VIEW'", "'WEEK'", "'YEARS'", "'ZONE'", "'='", "'>'", "'<'", 
		"'!'", "'~'", "'|'", "'&'", "'^'", "'.'", "'['", "']'", "'('", "')'", 
		"'{'", "'}'", "','", "';'", "'@'", "'''", "'\"'", "'`'", "':'", "'*'", 
		"'_'", "'-'", "'+'", "'%'", "'||'", "'--'", "'/'", "'?'", "'=>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SPACE", "COMMENT_INPUT", "LINE_COMMENT", "KW_ABS", "KW_ALL", 
		"KW_ALLOCATE", "KW_ALLOW", "KW_ALTER", "KW_ANALYZE", "KW_AND", "KW_ANY", 
		"KW_ARE", "KW_ARRAY", "KW_ARRAY_AGG", "KW_ARRAY_CONCAT_AGG", "KW_ARRAY_MAX_CARDINALITY", 
		"KW_AS", "KW_ASENSITIVE", "KW_ASYMMETRIC", "KW_AT", "KW_ATOMIC", "KW_AUTHORIZATION", 
		"KW_AVG", "KW_BEGIN", "KW_BEGIN_FRAME", "KW_BEGIN_PARTITION", "KW_BETWEEN", 
		"KW_BIGINT", "KW_BINARY", "KW_BIT", "KW_BLOB", "KW_BOOLEAN", "KW_BOTH", 
		"KW_BY", "KW_BYTES", "KW_CALL", "KW_CALLED", "KW_CARDINALITY", "KW_CASCADED", 
		"KW_CASE", "KW_CAST", "KW_CATALOGS", "KW_CEIL", "KW_CEILING", "KW_CHANGELOG_MODE", 
		"KW_CHAR", "KW_CHARACTER", "KW_CHARACTER_LENGTH", "KW_CHAR_LENGTH", "KW_CHECK", 
		"KW_CLASSIFIER", "KW_CLOB", "KW_CLOSE", "KW_COALESCE", "KW_COLLATE", "KW_COLLECT", 
		"KW_COLUMN", "KW_COLUMNS", "KW_COMMENT", "KW_COMMIT", "KW_COMPUTE", "KW_CONDITION", 
		"KW_CONNECT", "KW_CONSTRAINT", "KW_CONTAINS", "KW_CONVERT", "KW_CORR", 
		"KW_CORRESPONDING", "KW_COUNT", "KW_COVAR_POP", "KW_COVAR_SAMP", "KW_CREATE", 
		"KW_CROSS", "KW_CUBE", "KW_CUME_DIST", "KW_CURRENT", "KW_CURRENT_CATALOG", 
		"KW_CURRENT_DATE", "KW_CURRENT_DEFAULT_TRANSFORM_GROUP", "KW_CURRENT_PATH", 
		"KW_CURRENT_ROLE", "KW_CURRENT_ROW", "KW_CURRENT_SCHEMA", "KW_CURRENT_TIME", 
		"KW_CURRENT_TIMESTAMP", "KW_CURRENT_TRANSFORM_GROUP_FOR_TYPE", "KW_CURRENT_USER", 
		"KW_CURSOR", "KW_CYCLE", "KW_DATABASES", "KW_DATE", "KW_DATETIME", "KW_DATETIME_DIFF", 
		"KW_DATETIME_TRUNC", "KW_DATE_DIFF", "KW_DATE_TRUNC", "KW_DAY", "KW_DAYOFWEEK", 
		"KW_DAYOFYEAR", "KW_DEALLOCATE", "KW_DEC", "KW_DECIMAL", "KW_DECLARE", 
		"KW_DEFAULT", "KW_DEFINE", "KW_DELETE", "KW_DENSE_RANK", "KW_DEREF", "KW_DESCRIBE", 
		"KW_DETERMINISTIC", "KW_DISALLOW", "KW_DISCONNECT", "KW_DISTINCT", "KW_DOT", 
		"KW_DOUBLE", "KW_DROP", "KW_DYNAMIC", "KW_EACH", "KW_ELEMENT", "KW_ELSE", 
		"KW_EMPTY", "KW_END", "KW_END_FRAME", "KW_END_PARTITION", "KW_ENFORCED", 
		"KW_EQUALS", "KW_ESCAPE", "KW_ESTIMATED_COST", "KW_EVERY", "KW_EXCEPT", 
		"KW_EXEC", "KW_EXECUTE", "KW_EXISTS", "KW_EXP", "KW_EXPLAIN", "KW_EXTEND", 
		"KW_EXTENDED", "KW_EXTERNAL", "KW_EXTRACT", "KW_FALSE", "KW_FETCH", "KW_FILTER", 
		"KW_FIRST_VALUE", "KW_FLOAT", "KW_FLOOR", "KW_FOR", "KW_FOREIGN", "KW_FRAME_ROW", 
		"KW_FREE", "KW_FRIDAY", "KW_FROM", "KW_FULL", "KW_FUNCTION", "KW_FUNCTIONS", 
		"KW_FUSION", "KW_GET", "KW_GLOBAL", "KW_GRANT", "KW_GROUP", "KW_GROUPING", 
		"KW_GROUPS", "KW_GROUP_CONCAT", "KW_HAVING", "KW_HOLD", "KW_HOUR", "KW_IDENTITY", 
		"KW_IF", "KW_ILIKE", "KW_IMPORT", "KW_IN", "KW_INCLUDE", "KW_INDICATOR", 
		"KW_INITIAL", "KW_INNER", "KW_INOUT", "KW_INSENSITIVE", "KW_INSERT", "KW_INT", 
		"KW_INTEGER", "KW_INTERSECT", "KW_INTERSECTION", "KW_INTERVAL", "KW_INTO", 
		"KW_IS", "KW_JOIN", "KW_JSON_ARRAY", "KW_JSON_ARRAYAGG", "KW_JSON_EXECUTION_PLAN", 
		"KW_JSON_EXISTS", "KW_JSON_OBJECT", "KW_JSON_OBJECTAGG", "KW_JSON_QUERY", 
		"KW_JSON_VALUE", "KW_LAG", "KW_LANGUAGE", "KW_LARGE", "KW_LAST_VALUE", 
		"KW_LATERAL", "KW_LEAD", "KW_LEADING", "KW_LEFT", "KW_LIKE", "KW_LIKE_REGEX", 
		"KW_LIMIT", "KW_LN", "KW_LOCAL", "KW_LOCALTIME", "KW_LOCALTIMESTAMP", 
		"KW_LOWER", "KW_MATCH", "KW_MATCHES", "KW_MATCH_NUMBER", "KW_MATCH_RECOGNIZE", 
		"KW_MAX", "KW_MEASURES", "KW_MEMBER", "KW_MERGE", "KW_METADATA", "KW_METHOD", 
		"KW_MIN", "KW_MINUS", "KW_MINUTE", "KW_MOD", "KW_MODIFIES", "KW_MODIFY", 
		"KW_MODULE", "KW_MODULES", "KW_MONDAY", "KW_MONTH", "KW_MORE", "KW_MULTISET", 
		"KW_NATIONAL", "KW_NATURAL", "KW_NCHAR", "KW_NCLOB", "KW_NEW", "KW_NEXT", 
		"KW_NO", "KW_NONE", "KW_NORMALIZE", "KW_NOT", "KW_NTH_VALUE", "KW_NTILE", 
		"KW_NULL", "KW_NULLIF", "KW_NUMERIC", "KW_OCCURRENCES_REGEX", "KW_OCTET_LENGTH", 
		"KW_OF", "KW_OFFSET", "KW_OLD", "KW_OMIT", "KW_ON", "KW_ONE", "KW_ONLY", 
		"KW_OPEN", "KW_OR", "KW_ORDER", "KW_ORDINAL", "KW_OUT", "KW_OUTER", "KW_OVER", 
		"KW_OVERLAPS", "KW_OVERLAY", "KW_OVERWRITE", "KW_OVERWRITING", "KW_PARAMETER", 
		"KW_PARTITION", "KW_PARTITIONED", "KW_PARTITIONS", "KW_PATTERN", "KW_PER", 
		"KW_PERCENT", "KW_PERCENTILE_CONT", "KW_PERCENTILE_DISC", "KW_PERCENT_RANK", 
		"KW_PERIOD", "KW_PERMUTE", "KW_PIVOT", "KW_PORTION", "KW_POSITION", "KW_POSITION_REGEX", 
		"KW_POWER", "KW_PRECEDES", "KW_PRECISION", "KW_PREPARE", "KW_PREV", "KW_PRIMARY", 
		"KW_PROCEDURE", "KW_QUALIFY", "KW_QUARTERS", "KW_RANGE", "KW_RANK", "KW_RAW", 
		"KW_READS", "KW_REAL", "KW_RECURSIVE", "KW_REF", "KW_REFERENCES", "KW_REFERENCING", 
		"KW_REGR_AVGX", "KW_REGR_AVGY", "KW_REGR_COUNT", "KW_REGR_INTERCEPT", 
		"KW_REGR_R2", "KW_REGR_SLOPE", "KW_REGR_SXX", "KW_REGR_SXY", "KW_REGR_SYY", 
		"KW_RELEASE", "KW_RENAME", "KW_RESET", "KW_RESULT", "KW_RETURN", "KW_RETURNS", 
		"KW_REVOKE", "KW_RIGHT", "KW_RLIKE", "KW_ROLLBACK", "KW_ROLLUP", "KW_ROW", 
		"KW_ROWS", "KW_ROW_NUMBER", "KW_RUNNING", "KW_SAFE_CAST", "KW_SAFE_OFFSET", 
		"KW_SAFE_ORDINAL", "KW_SATURDAY", "KW_SAVEPOINT", "KW_SCALA", "KW_SCOPE", 
		"KW_SCROLL", "KW_SEARCH", "KW_SECOND", "KW_SEEK", "KW_SELECT", "KW_SENSITIVE", 
		"KW_SEPARATOR", "KW_SESSION_USER", "KW_SET", "KW_SHOW", "KW_SIMILAR", 
		"KW_SKIP", "KW_SMALLINT", "KW_SOME", "KW_SPECIFIC", "KW_SPECIFICTYPE", 
		"KW_SQL", "KW_SQLEXCEPTION", "KW_SQLSTATE", "KW_SQLWARNING", "KW_SQRT", 
		"KW_START", "KW_STATEMENT", "KW_STATIC", "KW_STATISTICS", "KW_STDDEV_POP", 
		"KW_STDDEV_SAMP", "KW_STREAM", "KW_STRING", "KW_STRING_AGG", "KW_SUBMULTISET", 
		"KW_SUBSET", "KW_SUBSTRING", "KW_SUBSTRING_REGEX", "KW_SUCCEEDS", "KW_SUM", 
		"KW_SUNDAY", "KW_SYMMETRIC", "KW_SYSTEM", "KW_SYSTEM_TIME", "KW_SYSTEM_USER", 
		"KW_TABLE", "KW_TABLES", "KW_TABLESAMPLE", "KW_THEN", "KW_THURSDAY", "KW_TIME", 
		"KW_TIMESTAMP", "KW_TIMESTAMP_DIFF", "KW_TIMESTAMP_LTZ", "KW_TIMESTAMP_TRUNC", 
		"KW_TIMEZONE_HOUR", "KW_TIMEZONE_MINUTE", "KW_TIME_DIFF", "KW_TIME_TRUNC", 
		"KW_TINYINT", "KW_TO", "KW_TRAILING", "KW_TRANSLATE", "KW_TRANSLATE_REGEX", 
		"KW_TRANSLATION", "KW_TREAT", "KW_TRIGGER", "KW_TRIM", "KW_TRIM_ARRAY", 
		"KW_TRUE", "KW_TRUNCATE", "KW_TRY_CAST", "KW_TUESDAY", "KW_UESCAPE", "KW_UNION", 
		"KW_UNIQUE", "KW_UNKNOWN", "KW_UNNEST", "KW_UNPIVOT", "KW_UPDATE", "KW_UPPER", 
		"KW_UPSERT", "KW_USE", "KW_USER", "KW_USING", "KW_VALUE", "KW_VALUES", 
		"KW_VALUE_OF", "KW_VARBINARY", "KW_VARCHAR", "KW_VARYING", "KW_VAR_POP", 
		"KW_VAR_SAMP", "KW_VERSIONING", "KW_VIEWS", "KW_VIRTUAL", "KW_WATERMARK", 
		"KW_WATERMARKS", "KW_WEDNESDAY", "KW_WEEKS", "KW_WHEN", "KW_WHENEVER", 
		"KW_WHERE", "KW_WIDTH_BUCKET", "KW_WINDOW", "KW_WITH", "KW_WITHIN", "KW_WITHOUT", 
		"KW_YEAR", "KW_ADD", "KW_AFTER", "KW_ASC", "KW_CASCADE", "KW_CATALOG", 
		"KW_CENTURY", "KW_CONFIG", "KW_CONSTRAINTS", "KW_CUMULATE", "KW_DATA", 
		"KW_DATABASE", "KW_DAYS", "KW_DECADE", "KW_DESC", "KW_DESCRIPTOR", "KW_DIV", 
		"KW_ENGINE", "KW_EPOCH", "KW_EXCLUDING", "KW_FILE", "KW_FIRST", "KW_GENERATED", 
		"KW_HOP", "KW_HOURS", "KW_IGNORE", "KW_INCLUDING", "KW_JAR", "KW_JARS", 
		"KW_JAVA", "KW_KEY", "KW_LAST", "KW_LOAD", "KW_MAP", "KW_MICROSECOND", 
		"KW_MILLENNIUM", "KW_MILLISECOND", "KW_MINUTES", "KW_MONTHS", "KW_NANOSECOND", 
		"KW_NULLS", "KW_OPTIONS", "KW_PAST", "KW_PLAN", "KW_PRECEDING", "KW_PYTHON", 
		"KW_PYTHON_ARCHIVES", "KW_PYTHON_DEPENDENCIES", "KW_PYTHON_FILES", "KW_PYTHON_JAR", 
		"KW_PYTHON_PARAMETER", "KW_PYTHON_REQUIREMENTS", "KW_QUARTER", "KW_REMOVE", 
		"KW_RESTRICT", "KW_SECONDS", "KW_SESSION", "KW_SETS", "KW_SIZE", "KW_SLIDE", 
		"KW_STEP", "KW_TEMPORARY", "KW_TIMECOL", "KW_TUMBLE", "KW_UNLOAD", "KW_VIEW", 
		"KW_WEEK", "KW_YEARS", "KW_ZONE", "EQUAL_SYMBOL", "GREATER_SYMBOL", "LESS_SYMBOL", 
		"EXCLAMATION_SYMBOL", "BIT_NOT_OP", "BIT_OR_OP", "BIT_AND_OP", "BIT_XOR_OP", 
		"DOT", "LS_BRACKET", "RS_BRACKET", "LR_BRACKET", "RR_BRACKET", "LB_BRACKET", 
		"RB_BRACKET", "COMMA", "SEMICOLON", "AT_SIGN", "SINGLE_QUOTE_SYMB", "DOUBLE_QUOTE_SYMB", 
		"REVERSE_QUOTE_SYMB", "COLON_SYMB", "ASTERISK_SIGN", "UNDERLINE_SIGN", 
		"HYPNEN_SIGN", "ADD_SIGN", "PENCENT_SIGN", "DOUBLE_VERTICAL_SIGN", "DOUBLE_HYPNEN_SIGN", 
		"SLASH_SIGN", "QUESTION_MARK_SIGN", "DOUBLE_RIGHT_ARROW", "STRING_LITERAL", 
		"DIG_LITERAL", "REAL_LITERAL", "BIT_STRING", "ID_LITERAL",
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
			this.state = 378;
			this.statement();
			this.state = 379;
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
			this.state = 381;
			this.sqlStatements();
			this.state = 382;
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
			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.KW_ALTER || _la === FlinkSqlParser.KW_BEGIN || _la === FlinkSqlParser.KW_CREATE || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & ((1 << (FlinkSqlParser.KW_DESCRIBE - 109)) | (1 << (FlinkSqlParser.KW_DROP - 109)) | (1 << (FlinkSqlParser.KW_EXECUTE - 109)) | (1 << (FlinkSqlParser.KW_EXPLAIN - 109)))) !== 0) || _la === FlinkSqlParser.KW_INSERT || ((((_la - 312)) & ~0x1F) === 0 && ((1 << (_la - 312)) & ((1 << (FlinkSqlParser.KW_RESET - 312)) | (1 << (FlinkSqlParser.KW_SELECT - 312)) | (1 << (FlinkSqlParser.KW_SET - 312)) | (1 << (FlinkSqlParser.KW_SHOW - 312)))) !== 0) || ((((_la - 410)) & ~0x1F) === 0 && ((1 << (_la - 410)) & ((1 << (FlinkSqlParser.KW_USE - 410)) | (1 << (FlinkSqlParser.KW_VALUES - 410)) | (1 << (FlinkSqlParser.KW_WITH - 410)) | (1 << (FlinkSqlParser.KW_ADD - 410)))) !== 0) || _la === FlinkSqlParser.KW_DESC || _la === FlinkSqlParser.KW_LOAD || ((((_la - 489)) & ~0x1F) === 0 && ((1 << (_la - 489)) & ((1 << (FlinkSqlParser.KW_REMOVE - 489)) | (1 << (FlinkSqlParser.KW_UNLOAD - 489)) | (1 << (FlinkSqlParser.LR_BRACKET - 489)))) !== 0) || _la === FlinkSqlParser.SEMICOLON) {
				{
				this.state = 386;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
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
				case FlinkSqlParser.KW_USE:
				case FlinkSqlParser.KW_VALUES:
				case FlinkSqlParser.KW_WITH:
				case FlinkSqlParser.KW_ADD:
				case FlinkSqlParser.KW_DESC:
				case FlinkSqlParser.KW_LOAD:
				case FlinkSqlParser.KW_REMOVE:
				case FlinkSqlParser.KW_UNLOAD:
				case FlinkSqlParser.LR_BRACKET:
					{
					this.state = 384;
					this.sqlStatement();
					}
					break;
				case FlinkSqlParser.SEMICOLON:
					{
					this.state = 385;
					this.emptyStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 390;
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
			this.state = 439;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 391;
				this.ddlStatement();
				this.state = 393;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 392;
					this.match(FlinkSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 395;
				this.dmlStatement();
				this.state = 397;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 396;
					this.match(FlinkSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 399;
				this.describeStatement();
				this.state = 401;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 400;
					this.match(FlinkSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 403;
				this.explainStatement();
				this.state = 405;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 404;
					this.match(FlinkSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 407;
				this.useStatement();
				this.state = 409;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 408;
					this.match(FlinkSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 411;
				this.showStatememt();
				this.state = 413;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 412;
					this.match(FlinkSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 415;
				this.loadStatement();
				this.state = 417;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 416;
					this.match(FlinkSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 419;
				this.unloadStatememt();
				this.state = 421;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 420;
					this.match(FlinkSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 423;
				this.setStatememt();
				this.state = 425;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 424;
					this.match(FlinkSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 427;
				this.resetStatememt();
				this.state = 429;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 428;
					this.match(FlinkSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 431;
				this.jarStatememt();
				this.state = 433;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 432;
					this.match(FlinkSqlParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 435;
				this.dtAddStatement();
				this.state = 437;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 436;
					this.match(FlinkSqlParser.SEMICOLON);
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
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FlinkSqlParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
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
			this.state = 457;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 443;
				this.createTable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 444;
				this.createDatabase();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 445;
				this.createView();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 446;
				this.createFunction();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 447;
				this.createCatalog();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 448;
				this.alterTable();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 449;
				this.alertView();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 450;
				this.alterDatabase();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 451;
				this.alterFunction();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 452;
				this.dropCatalog();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 453;
				this.dropTable();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 454;
				this.dropDatabase();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 455;
				this.dropView();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 456;
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
			this.state = 461;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_SELECT:
			case FlinkSqlParser.KW_VALUES:
			case FlinkSqlParser.KW_WITH:
			case FlinkSqlParser.LR_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 459;
				this.queryStatement(0);
				}
				break;
			case FlinkSqlParser.KW_BEGIN:
			case FlinkSqlParser.KW_EXECUTE:
			case FlinkSqlParser.KW_INSERT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 460;
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
			this.state = 463;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_DESCRIBE || _la === FlinkSqlParser.KW_DESC)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 464;
			this.tablePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 466;
			this.match(FlinkSqlParser.KW_EXPLAIN);
			this.state = 470;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_CHANGELOG_MODE:
			case FlinkSqlParser.KW_ESTIMATED_COST:
			case FlinkSqlParser.KW_JSON_EXECUTION_PLAN:
				{
				this.state = 467;
				this.explainDetails();
				}
				break;
			case FlinkSqlParser.KW_PLAN:
				{
				this.state = 468;
				this.match(FlinkSqlParser.KW_PLAN);
				this.state = 469;
				this.match(FlinkSqlParser.KW_FOR);
				}
				break;
			case FlinkSqlParser.KW_BEGIN:
			case FlinkSqlParser.KW_EXECUTE:
			case FlinkSqlParser.KW_INSERT:
			case FlinkSqlParser.KW_SELECT:
			case FlinkSqlParser.KW_STATEMENT:
			case FlinkSqlParser.KW_VALUES:
			case FlinkSqlParser.KW_WITH:
			case FlinkSqlParser.LR_BRACKET:
				break;
			default:
				break;
			}
			this.state = 475;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 472;
				this.dmlStatement();
				}
				break;

			case 2:
				{
				this.state = 473;
				this.insertSimpleStatement();
				}
				break;

			case 3:
				{
				this.state = 474;
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
			this.state = 477;
			this.explainDetail();
			this.state = 482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 478;
				this.match(FlinkSqlParser.COMMA);
				this.state = 479;
				this.explainDetail();
				}
				}
				this.state = 484;
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
			this.state = 485;
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
			this.state = 493;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 487;
				this.match(FlinkSqlParser.KW_USE);
				this.state = 488;
				this.match(FlinkSqlParser.KW_CATALOG);
				this.state = 489;
				this.catalogPath();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 490;
				this.match(FlinkSqlParser.KW_USE);
				this.state = 491;
				this.databasePath();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 492;
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
			this.state = 495;
			this.match(FlinkSqlParser.KW_USE);
			this.state = 496;
			this.match(FlinkSqlParser.KW_MODULES);
			this.state = 497;
			this.uid();
			this.state = 502;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 498;
				this.match(FlinkSqlParser.COMMA);
				this.state = 499;
				this.uid();
				}
				}
				this.state = 504;
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
			this.state = 547;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 505;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 506;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_CATALOGS || _la === FlinkSqlParser.KW_DATABASES || _la === FlinkSqlParser.KW_VIEWS || _la === FlinkSqlParser.KW_JARS)) {
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
				this.state = 507;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 508;
				this.match(FlinkSqlParser.KW_CURRENT);
				this.state = 509;
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
				this.state = 510;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 511;
				this.match(FlinkSqlParser.KW_TABLES);
				this.state = 514;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_FROM || _la === FlinkSqlParser.KW_IN) {
					{
					this.state = 512;
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
					this.state = 513;
					this.databasePath();
					}
				}

				this.state = 517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_LIKE || _la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 516;
					this.likePredicate();
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 519;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 520;
				this.match(FlinkSqlParser.KW_COLUMNS);
				this.state = 521;
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
				this.state = 524;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 522;
					this.viewPath();
					}
					break;

				case 2:
					{
					this.state = 523;
					this.tablePath();
					}
					break;
				}
				this.state = 527;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_LIKE || _la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 526;
					this.likePredicate();
					}
				}

				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 529;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 530;
				this.match(FlinkSqlParser.KW_CREATE);
				this.state = 535;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case FlinkSqlParser.KW_TABLE:
					{
					this.state = 531;
					this.match(FlinkSqlParser.KW_TABLE);
					this.state = 532;
					this.tablePath();
					}
					break;
				case FlinkSqlParser.KW_VIEW:
					{
					this.state = 533;
					this.match(FlinkSqlParser.KW_VIEW);
					this.state = 534;
					this.viewPath();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 537;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 539;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_USER) {
					{
					this.state = 538;
					this.match(FlinkSqlParser.KW_USER);
					}
				}

				this.state = 541;
				this.match(FlinkSqlParser.KW_FUNCTIONS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 542;
				this.match(FlinkSqlParser.KW_SHOW);
				this.state = 544;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_FULL) {
					{
					this.state = 543;
					this.match(FlinkSqlParser.KW_FULL);
					}
				}

				this.state = 546;
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
			this.state = 549;
			this.match(FlinkSqlParser.KW_LOAD);
			this.state = 550;
			this.match(FlinkSqlParser.KW_MODULE);
			this.state = 551;
			this.uid();
			this.state = 554;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 552;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 553;
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
			this.state = 556;
			this.match(FlinkSqlParser.KW_UNLOAD);
			this.state = 557;
			this.match(FlinkSqlParser.KW_MODULE);
			this.state = 558;
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
			this.state = 560;
			this.match(FlinkSqlParser.KW_SET);
			this.state = 562;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 561;
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
			this.state = 564;
			this.match(FlinkSqlParser.KW_RESET);
			this.state = 566;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 565;
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
			this.state = 568;
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
			this.state = 569;
			this.match(FlinkSqlParser.KW_JAR);
			this.state = 570;
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
			this.state = 622;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 572;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 573;
				this.match(FlinkSqlParser.KW_JAR);
				this.state = 574;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 575;
				this.dtFilePath();
				this.state = 578;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_AS) {
					{
					this.state = 576;
					this.match(FlinkSqlParser.KW_AS);
					this.state = 577;
					this.uid();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 580;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 581;
				this.match(FlinkSqlParser.KW_FILE);
				this.state = 582;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 583;
				this.dtFilePath();
				this.state = 586;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_AS) {
					{
					this.state = 584;
					this.match(FlinkSqlParser.KW_AS);
					this.state = 585;
					this.uid();
					}
				}

				this.state = 590;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_RENAME) {
					{
					this.state = 588;
					this.match(FlinkSqlParser.KW_RENAME);
					this.state = 589;
					this.uid();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 592;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 593;
				_la = this._input.LA(1);
				if (!(((((_la - 482)) & ~0x1F) === 0 && ((1 << (_la - 482)) & ((1 << (FlinkSqlParser.KW_PYTHON_ARCHIVES - 482)) | (1 << (FlinkSqlParser.KW_PYTHON_DEPENDENCIES - 482)) | (1 << (FlinkSqlParser.KW_PYTHON_FILES - 482)) | (1 << (FlinkSqlParser.KW_PYTHON_JAR - 482)) | (1 << (FlinkSqlParser.KW_PYTHON_REQUIREMENTS - 482)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 594;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 595;
				this.dtFilePath();
				this.state = 596;
				this.match(FlinkSqlParser.KW_RENAME);
				this.state = 597;
				this.uid();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 599;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 600;
				this.match(FlinkSqlParser.KW_PYTHON_PARAMETER);
				this.state = 601;
				this.dtFilePath();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 602;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 603;
				this.match(FlinkSqlParser.KW_ENGINE);
				this.state = 604;
				this.match(FlinkSqlParser.KW_FILE);
				this.state = 605;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 606;
				this.dtFilePath();
				this.state = 607;
				this.match(FlinkSqlParser.KW_RENAME);
				this.state = 608;
				this.uid();
				this.state = 609;
				this.match(FlinkSqlParser.KW_KEY);
				this.state = 610;
				this.uid();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 612;
				this.match(FlinkSqlParser.KW_ADD);
				this.state = 613;
				this.match(FlinkSqlParser.KW_CONFIG);
				this.state = 614;
				this.match(FlinkSqlParser.KW_FILE);
				this.state = 615;
				this.match(FlinkSqlParser.KW_WITH);
				this.state = 616;
				this.dtFilePath();
				this.state = 617;
				this.match(FlinkSqlParser.KW_FOR);
				this.state = 618;
				this.uid();
				this.state = 619;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 620;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 628;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 625;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSqlParser.SLASH_SIGN) {
						{
						this.state = 624;
						this.match(FlinkSqlParser.SLASH_SIGN);
						}
					}

					this.state = 627;
					this.uid();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 630;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
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
	public createTable(): CreateTableContext {
		let _localctx: CreateTableContext = new CreateTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, FlinkSqlParser.RULE_createTable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 632;
				this.simpleCreateTable();
				}
				break;

			case 2:
				{
				this.state = 633;
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
			this.state = 636;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 638;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_TEMPORARY) {
				{
				this.state = 637;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 640;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_IF) {
				{
				this.state = 641;
				this.ifNotExists();
				}
			}

			this.state = 644;
			this.tablePathCreate();
			this.state = 645;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 646;
			this.columnOptionDefinition();
			this.state = 651;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 647;
					this.match(FlinkSqlParser.COMMA);
					this.state = 648;
					this.columnOptionDefinition();
					}
					}
				}
				this.state = 653;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			}
			this.state = 656;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 654;
				this.match(FlinkSqlParser.COMMA);
				this.state = 655;
				this.watermarkDefinition();
				}
				break;
			}
			this.state = 660;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 658;
				this.match(FlinkSqlParser.COMMA);
				this.state = 659;
				this.tableConstraint();
				}
				break;
			}
			this.state = 664;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.COMMA) {
				{
				this.state = 662;
				this.match(FlinkSqlParser.COMMA);
				this.state = 663;
				this.selfDefinitionClause();
				}
			}

			this.state = 666;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 668;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_COMMENT) {
				{
				this.state = 667;
				this.commentSpec();
				}
			}

			this.state = 671;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_PARTITIONED) {
				{
				this.state = 670;
				this.partitionDefinition();
				}
			}

			this.state = 673;
			this.withOption();
			this.state = 675;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_LIKE) {
				{
				this.state = 674;
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
			this.state = 677;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 678;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_IF) {
				{
				this.state = 679;
				this.ifNotExists();
				}
			}

			this.state = 682;
			this.tablePathCreate();
			this.state = 683;
			this.withOption();
			this.state = 686;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_AS) {
				{
				this.state = 684;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 685;
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
			this.state = 691;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 688;
				this.physicalColumnDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 689;
				this.metadataColumnDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 690;
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
			this.state = 693;
			this.columnNameCreate();
			this.state = 694;
			this.columnType();
			this.state = 696;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_CONSTRAINT || _la === FlinkSqlParser.KW_NOT || _la === FlinkSqlParser.KW_NULL || _la === FlinkSqlParser.KW_PRIMARY) {
				{
				this.state = 695;
				this.columnConstraint();
				}
			}

			this.state = 699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_COMMENT) {
				{
				this.state = 698;
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
	public columnNameCreate(): ColumnNameCreateContext {
		let _localctx: ColumnNameCreateContext = new ColumnNameCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, FlinkSqlParser.RULE_columnNameCreate);
		try {
			this.state = 703;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 701;
				this.uid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 702;
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
	public columnName(): ColumnNameContext {
		let _localctx: ColumnNameContext = new ColumnNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, FlinkSqlParser.RULE_columnName);
		try {
			this.state = 707;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 705;
				this.uid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 706;
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
		this.enterRule(_localctx, 56, FlinkSqlParser.RULE_columnNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 709;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 710;
			this.columnName();
			this.state = 715;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 711;
				this.match(FlinkSqlParser.COMMA);
				this.state = 712;
				this.columnName();
				}
				}
				this.state = 717;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 718;
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
		this.enterRule(_localctx, 58, FlinkSqlParser.RULE_columnType);
		let _la: number;
		try {
			this.state = 757;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_BOOLEAN:
			case FlinkSqlParser.KW_DATE:
			case FlinkSqlParser.KW_NULL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 720;
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
			case FlinkSqlParser.KW_BIGINT:
			case FlinkSqlParser.KW_BINARY:
			case FlinkSqlParser.KW_BYTES:
			case FlinkSqlParser.KW_CHAR:
			case FlinkSqlParser.KW_DATETIME:
			case FlinkSqlParser.KW_INT:
			case FlinkSqlParser.KW_INTEGER:
			case FlinkSqlParser.KW_SMALLINT:
			case FlinkSqlParser.KW_STRING:
			case FlinkSqlParser.KW_TIME:
			case FlinkSqlParser.KW_TIMESTAMP_LTZ:
			case FlinkSqlParser.KW_TINYINT:
			case FlinkSqlParser.KW_VARBINARY:
			case FlinkSqlParser.KW_VARCHAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 721;
				_localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (FlinkSqlParser.KW_BIGINT - 28)) | (1 << (FlinkSqlParser.KW_BINARY - 28)) | (1 << (FlinkSqlParser.KW_BYTES - 28)) | (1 << (FlinkSqlParser.KW_CHAR - 28)))) !== 0) || _la === FlinkSqlParser.KW_DATETIME || _la === FlinkSqlParser.KW_INT || _la === FlinkSqlParser.KW_INTEGER || _la === FlinkSqlParser.KW_SMALLINT || _la === FlinkSqlParser.KW_STRING || ((((_la - 378)) & ~0x1F) === 0 && ((1 << (_la - 378)) & ((1 << (FlinkSqlParser.KW_TIME - 378)) | (1 << (FlinkSqlParser.KW_TIMESTAMP_LTZ - 378)) | (1 << (FlinkSqlParser.KW_TINYINT - 378)))) !== 0) || _la === FlinkSqlParser.KW_VARBINARY || _la === FlinkSqlParser.KW_VARCHAR)) {
					_localctx._typeName = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 723;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LR_BRACKET) {
					{
					this.state = 722;
					this.lengthOneDimension();
					}
				}

				}
				break;
			case FlinkSqlParser.KW_TIMESTAMP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 725;
				_localctx._typeName = this.match(FlinkSqlParser.KW_TIMESTAMP);
				this.state = 727;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LR_BRACKET) {
					{
					this.state = 726;
					this.lengthOneDimension();
					}
				}

				this.state = 735;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_WITH || _la === FlinkSqlParser.KW_WITHOUT) {
					{
					this.state = 729;
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
					this.state = 731;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSqlParser.KW_LOCAL) {
						{
						this.state = 730;
						this.match(FlinkSqlParser.KW_LOCAL);
						}
					}

					this.state = 733;
					this.match(FlinkSqlParser.KW_TIME);
					this.state = 734;
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
				this.state = 737;
				_localctx._typeName = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (FlinkSqlParser.KW_DEC - 101)) | (1 << (FlinkSqlParser.KW_DECIMAL - 101)) | (1 << (FlinkSqlParser.KW_DOUBLE - 101)))) !== 0) || _la === FlinkSqlParser.KW_FLOAT || _la === FlinkSqlParser.KW_NUMERIC)) {
					_localctx._typeName = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 739;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LR_BRACKET) {
					{
					this.state = 738;
					this.lengthTwoOptionalDimension();
					}
				}

				}
				break;
			case FlinkSqlParser.KW_ARRAY:
			case FlinkSqlParser.KW_MULTISET:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 741;
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
				this.state = 743;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LESS_SYMBOL) {
					{
					this.state = 742;
					this.lengthOneTypeDimension();
					}
				}

				}
				break;
			case FlinkSqlParser.KW_MAP:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 745;
				_localctx._type = this.match(FlinkSqlParser.KW_MAP);
				this.state = 747;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LESS_SYMBOL) {
					{
					this.state = 746;
					this.mapTypeDimension();
					}
				}

				}
				break;
			case FlinkSqlParser.KW_ROW:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 749;
				_localctx._type = this.match(FlinkSqlParser.KW_ROW);
				this.state = 751;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LESS_SYMBOL) {
					{
					this.state = 750;
					this.rowTypeDimension();
					}
				}

				}
				break;
			case FlinkSqlParser.KW_RAW:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 753;
				_localctx._type = this.match(FlinkSqlParser.KW_RAW);
				this.state = 755;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.LR_BRACKET) {
					{
					this.state = 754;
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
		this.enterRule(_localctx, 60, FlinkSqlParser.RULE_lengthOneDimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 759;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 760;
			this.decimalLiteral();
			this.state = 761;
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
		this.enterRule(_localctx, 62, FlinkSqlParser.RULE_lengthTwoOptionalDimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 763;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 764;
			this.decimalLiteral();
			this.state = 767;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.COMMA) {
				{
				this.state = 765;
				this.match(FlinkSqlParser.COMMA);
				this.state = 766;
				this.decimalLiteral();
				}
			}

			this.state = 769;
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
		this.enterRule(_localctx, 64, FlinkSqlParser.RULE_lengthTwoStringDimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 771;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 772;
			this.stringLiteral();
			this.state = 775;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.COMMA) {
				{
				this.state = 773;
				this.match(FlinkSqlParser.COMMA);
				this.state = 774;
				this.stringLiteral();
				}
			}

			this.state = 777;
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
		this.enterRule(_localctx, 66, FlinkSqlParser.RULE_lengthOneTypeDimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 779;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 780;
			this.columnType();
			this.state = 781;
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
		this.enterRule(_localctx, 68, FlinkSqlParser.RULE_mapTypeDimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 783;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 784;
			this.columnType();
			{
			this.state = 785;
			this.match(FlinkSqlParser.COMMA);
			this.state = 786;
			this.columnType();
			}
			this.state = 788;
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
		this.enterRule(_localctx, 70, FlinkSqlParser.RULE_rowTypeDimension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 790;
			this.match(FlinkSqlParser.LESS_SYMBOL);
			this.state = 791;
			this.columnName();
			this.state = 792;
			this.columnType();
			this.state = 799;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 793;
				this.match(FlinkSqlParser.COMMA);
				this.state = 794;
				this.columnName();
				this.state = 795;
				this.columnType();
				}
				}
				this.state = 801;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 802;
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
		this.enterRule(_localctx, 72, FlinkSqlParser.RULE_columnConstraint);
		let _la: number;
		try {
			this.state = 818;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_CONSTRAINT:
			case FlinkSqlParser.KW_PRIMARY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 806;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_CONSTRAINT) {
					{
					this.state = 804;
					this.match(FlinkSqlParser.KW_CONSTRAINT);
					this.state = 805;
					this.constraintName();
					}
				}

				this.state = 808;
				this.match(FlinkSqlParser.KW_PRIMARY);
				this.state = 809;
				this.match(FlinkSqlParser.KW_KEY);
				this.state = 812;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 810;
					this.match(FlinkSqlParser.KW_NOT);
					this.state = 811;
					this.match(FlinkSqlParser.KW_ENFORCED);
					}
				}

				}
				break;
			case FlinkSqlParser.KW_NOT:
			case FlinkSqlParser.KW_NULL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 815;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 814;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 817;
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
		this.enterRule(_localctx, 74, FlinkSqlParser.RULE_commentSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 820;
			this.match(FlinkSqlParser.KW_COMMENT);
			this.state = 821;
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
		this.enterRule(_localctx, 76, FlinkSqlParser.RULE_metadataColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 823;
			this.columnNameCreate();
			this.state = 824;
			this.columnType();
			this.state = 825;
			this.match(FlinkSqlParser.KW_METADATA);
			this.state = 828;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_FROM) {
				{
				this.state = 826;
				this.match(FlinkSqlParser.KW_FROM);
				this.state = 827;
				this.metadataKey();
				}
			}

			this.state = 831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_VIRTUAL) {
				{
				this.state = 830;
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
		this.enterRule(_localctx, 78, FlinkSqlParser.RULE_metadataKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 833;
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
		this.enterRule(_localctx, 80, FlinkSqlParser.RULE_computedColumnDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 835;
			this.columnNameCreate();
			this.state = 836;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 837;
			this.computedColumnExpression();
			this.state = 839;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_COMMENT) {
				{
				this.state = 838;
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
		this.enterRule(_localctx, 82, FlinkSqlParser.RULE_computedColumnExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 841;
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
		this.enterRule(_localctx, 84, FlinkSqlParser.RULE_watermarkDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 843;
			this.match(FlinkSqlParser.KW_WATERMARK);
			this.state = 844;
			this.match(FlinkSqlParser.KW_FOR);
			this.state = 845;
			this.columnName();
			this.state = 846;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 847;
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
		this.enterRule(_localctx, 86, FlinkSqlParser.RULE_tableConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 851;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_CONSTRAINT) {
				{
				this.state = 849;
				this.match(FlinkSqlParser.KW_CONSTRAINT);
				this.state = 850;
				this.constraintName();
				}
			}

			this.state = 853;
			this.match(FlinkSqlParser.KW_PRIMARY);
			this.state = 854;
			this.match(FlinkSqlParser.KW_KEY);
			this.state = 855;
			this.columnNameList();
			this.state = 856;
			this.match(FlinkSqlParser.KW_NOT);
			this.state = 857;
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
		this.enterRule(_localctx, 88, FlinkSqlParser.RULE_constraintName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 859;
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
		this.enterRule(_localctx, 90, FlinkSqlParser.RULE_selfDefinitionClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 861;
			this.match(FlinkSqlParser.KW_PERIOD);
			this.state = 862;
			this.match(FlinkSqlParser.KW_FOR);
			this.state = 863;
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
		this.enterRule(_localctx, 92, FlinkSqlParser.RULE_partitionDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 865;
			this.match(FlinkSqlParser.KW_PARTITIONED);
			this.state = 866;
			this.match(FlinkSqlParser.KW_BY);
			this.state = 867;
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
		this.enterRule(_localctx, 94, FlinkSqlParser.RULE_transformList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 869;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 870;
			this.transform();
			this.state = 875;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 871;
				this.match(FlinkSqlParser.COMMA);
				this.state = 872;
				this.transform();
				}
				}
				this.state = 877;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 878;
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
		this.enterRule(_localctx, 96, FlinkSqlParser.RULE_transform);
		let _la: number;
		try {
			this.state = 893;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				_localctx = new IdentityTransformContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 880;
				this.columnName();
				}
				break;

			case 2:
				_localctx = new ColumnTransformContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 881;
				this.qualifiedName();
				}
				break;

			case 3:
				_localctx = new ApplyTransformContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 882;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 883;
				this.transformArgument();
				this.state = 888;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 884;
					this.match(FlinkSqlParser.COMMA);
					this.state = 885;
					this.transformArgument();
					}
					}
					this.state = 890;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 891;
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
		this.enterRule(_localctx, 98, FlinkSqlParser.RULE_transformArgument);
		try {
			this.state = 897;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 895;
				this.qualifiedName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 896;
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
		this.enterRule(_localctx, 100, FlinkSqlParser.RULE_likeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 899;
			this.match(FlinkSqlParser.KW_LIKE);
			this.state = 900;
			this.tablePath();
			this.state = 909;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 901;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 905;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.KW_OVERWRITING || _la === FlinkSqlParser.KW_EXCLUDING || _la === FlinkSqlParser.KW_INCLUDING) {
					{
					{
					this.state = 902;
					this.likeOption();
					}
					}
					this.state = 907;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 908;
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
	public likeOption(): LikeOptionContext {
		let _localctx: LikeOptionContext = new LikeOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, FlinkSqlParser.RULE_likeOption);
		let _la: number;
		try {
			this.state = 915;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 911;
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
				this.state = 912;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_ALL || _la === FlinkSqlParser.KW_PARTITIONS || _la === FlinkSqlParser.KW_CONSTRAINTS)) {
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
				this.state = 913;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_OVERWRITING || _la === FlinkSqlParser.KW_EXCLUDING || _la === FlinkSqlParser.KW_INCLUDING)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 914;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_WATERMARKS || _la === FlinkSqlParser.KW_GENERATED || _la === FlinkSqlParser.KW_OPTIONS)) {
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
			this.state = 917;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 918;
			this.match(FlinkSqlParser.KW_CATALOG);
			this.state = 919;
			this.catalogPathCreate();
			this.state = 920;
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
			this.state = 922;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 923;
			this.match(FlinkSqlParser.KW_DATABASE);
			this.state = 925;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_IF) {
				{
				this.state = 924;
				this.ifNotExists();
				}
			}

			this.state = 927;
			this.databasePathCreate();
			this.state = 929;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_COMMENT) {
				{
				this.state = 928;
				this.commentSpec();
				}
			}

			this.state = 931;
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
			this.state = 933;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 935;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_TEMPORARY) {
				{
				this.state = 934;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 937;
			this.match(FlinkSqlParser.KW_VIEW);
			this.state = 939;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_IF) {
				{
				this.state = 938;
				this.ifNotExists();
				}
			}

			this.state = 941;
			this.viewPathCreate();
			this.state = 943;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.LR_BRACKET) {
				{
				this.state = 942;
				this.columnNameList();
				}
			}

			this.state = 946;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_COMMENT) {
				{
				this.state = 945;
				this.commentSpec();
				}
			}

			this.state = 948;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 949;
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
			this.state = 951;
			this.match(FlinkSqlParser.KW_CREATE);
			this.state = 955;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				{
				this.state = 952;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 953;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				this.state = 954;
				this.match(FlinkSqlParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 957;
			this.match(FlinkSqlParser.KW_FUNCTION);
			this.state = 959;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_IF) {
				{
				this.state = 958;
				this.ifNotExists();
				}
			}

			this.state = 961;
			this.functionNameCreate();
			this.state = 962;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 963;
			this.identifier();
			this.state = 966;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_LANGUAGE) {
				{
				this.state = 964;
				this.match(FlinkSqlParser.KW_LANGUAGE);
				this.state = 965;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_SCALA || _la === FlinkSqlParser.KW_JAVA || _la === FlinkSqlParser.KW_PYTHON)) {
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

			this.state = 969;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_USING) {
				{
				this.state = 968;
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
			this.state = 971;
			this.match(FlinkSqlParser.KW_USING);
			this.state = 972;
			this.match(FlinkSqlParser.KW_JAR);
			this.state = 973;
			this.jarFileName();
			this.state = 979;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 974;
				this.match(FlinkSqlParser.COMMA);
				this.state = 975;
				this.match(FlinkSqlParser.KW_JAR);
				this.state = 976;
				this.jarFileName();
				}
				}
				this.state = 981;
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
			this.state = 982;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 984;
			this.match(FlinkSqlParser.KW_ALTER);
			this.state = 985;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 987;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_IF) {
				{
				this.state = 986;
				this.ifExists();
				}
			}

			this.state = 989;
			this.tablePath();
			this.state = 995;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 990;
				this.renameDefinition();
				}
				break;

			case 2:
				{
				this.state = 991;
				this.setKeyValueDefinition();
				}
				break;

			case 3:
				{
				this.state = 992;
				this.addConstraint();
				}
				break;

			case 4:
				{
				this.state = 993;
				this.dropConstraint();
				}
				break;

			case 5:
				{
				this.state = 994;
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
			this.state = 997;
			this.match(FlinkSqlParser.KW_RENAME);
			this.state = 999;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 437)) & ~0x1F) === 0 && ((1 << (_la - 437)) & ((1 << (FlinkSqlParser.KW_ADD - 437)) | (1 << (FlinkSqlParser.KW_AFTER - 437)) | (1 << (FlinkSqlParser.KW_ASC - 437)) | (1 << (FlinkSqlParser.KW_CASCADE - 437)) | (1 << (FlinkSqlParser.KW_CATALOG - 437)) | (1 << (FlinkSqlParser.KW_CENTURY - 437)) | (1 << (FlinkSqlParser.KW_CONFIG - 437)) | (1 << (FlinkSqlParser.KW_CONSTRAINTS - 437)) | (1 << (FlinkSqlParser.KW_CUMULATE - 437)) | (1 << (FlinkSqlParser.KW_DATA - 437)) | (1 << (FlinkSqlParser.KW_DATABASE - 437)) | (1 << (FlinkSqlParser.KW_DAYS - 437)) | (1 << (FlinkSqlParser.KW_DECADE - 437)) | (1 << (FlinkSqlParser.KW_DESC - 437)) | (1 << (FlinkSqlParser.KW_DESCRIPTOR - 437)) | (1 << (FlinkSqlParser.KW_DIV - 437)) | (1 << (FlinkSqlParser.KW_ENGINE - 437)) | (1 << (FlinkSqlParser.KW_EPOCH - 437)) | (1 << (FlinkSqlParser.KW_EXCLUDING - 437)) | (1 << (FlinkSqlParser.KW_FILE - 437)) | (1 << (FlinkSqlParser.KW_FIRST - 437)) | (1 << (FlinkSqlParser.KW_GENERATED - 437)) | (1 << (FlinkSqlParser.KW_HOP - 437)) | (1 << (FlinkSqlParser.KW_HOURS - 437)) | (1 << (FlinkSqlParser.KW_IGNORE - 437)) | (1 << (FlinkSqlParser.KW_INCLUDING - 437)) | (1 << (FlinkSqlParser.KW_JAR - 437)) | (1 << (FlinkSqlParser.KW_JARS - 437)) | (1 << (FlinkSqlParser.KW_JAVA - 437)) | (1 << (FlinkSqlParser.KW_KEY - 437)) | (1 << (FlinkSqlParser.KW_LAST - 437)) | (1 << (FlinkSqlParser.KW_LOAD - 437)))) !== 0) || ((((_la - 469)) & ~0x1F) === 0 && ((1 << (_la - 469)) & ((1 << (FlinkSqlParser.KW_MAP - 469)) | (1 << (FlinkSqlParser.KW_MICROSECOND - 469)) | (1 << (FlinkSqlParser.KW_MILLENNIUM - 469)) | (1 << (FlinkSqlParser.KW_MILLISECOND - 469)) | (1 << (FlinkSqlParser.KW_MINUTES - 469)) | (1 << (FlinkSqlParser.KW_MONTHS - 469)) | (1 << (FlinkSqlParser.KW_NANOSECOND - 469)) | (1 << (FlinkSqlParser.KW_NULLS - 469)) | (1 << (FlinkSqlParser.KW_OPTIONS - 469)) | (1 << (FlinkSqlParser.KW_PAST - 469)) | (1 << (FlinkSqlParser.KW_PLAN - 469)) | (1 << (FlinkSqlParser.KW_PRECEDING - 469)) | (1 << (FlinkSqlParser.KW_PYTHON - 469)) | (1 << (FlinkSqlParser.KW_PYTHON_ARCHIVES - 469)) | (1 << (FlinkSqlParser.KW_PYTHON_DEPENDENCIES - 469)) | (1 << (FlinkSqlParser.KW_PYTHON_FILES - 469)) | (1 << (FlinkSqlParser.KW_PYTHON_JAR - 469)) | (1 << (FlinkSqlParser.KW_PYTHON_PARAMETER - 469)) | (1 << (FlinkSqlParser.KW_PYTHON_REQUIREMENTS - 469)) | (1 << (FlinkSqlParser.KW_QUARTER - 469)) | (1 << (FlinkSqlParser.KW_REMOVE - 469)) | (1 << (FlinkSqlParser.KW_RESTRICT - 469)) | (1 << (FlinkSqlParser.KW_SECONDS - 469)) | (1 << (FlinkSqlParser.KW_SESSION - 469)) | (1 << (FlinkSqlParser.KW_SETS - 469)) | (1 << (FlinkSqlParser.KW_SIZE - 469)) | (1 << (FlinkSqlParser.KW_SLIDE - 469)) | (1 << (FlinkSqlParser.KW_STEP - 469)) | (1 << (FlinkSqlParser.KW_TEMPORARY - 469)) | (1 << (FlinkSqlParser.KW_TIMECOL - 469)) | (1 << (FlinkSqlParser.KW_TUMBLE - 469)) | (1 << (FlinkSqlParser.KW_UNLOAD - 469)))) !== 0) || ((((_la - 501)) & ~0x1F) === 0 && ((1 << (_la - 501)) & ((1 << (FlinkSqlParser.KW_VIEW - 501)) | (1 << (FlinkSqlParser.KW_WEEK - 501)) | (1 << (FlinkSqlParser.KW_YEARS - 501)) | (1 << (FlinkSqlParser.KW_ZONE - 501)))) !== 0) || ((((_la - 537)) & ~0x1F) === 0 && ((1 << (_la - 537)) & ((1 << (FlinkSqlParser.STRING_LITERAL - 537)) | (1 << (FlinkSqlParser.DIG_LITERAL - 537)) | (1 << (FlinkSqlParser.ID_LITERAL - 537)))) !== 0)) {
				{
				this.state = 998;
				this.uid();
				}
			}

			this.state = 1001;
			this.match(FlinkSqlParser.KW_TO);
			this.state = 1002;
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
			this.state = 1004;
			this.match(FlinkSqlParser.KW_SET);
			this.state = 1005;
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
			this.state = 1007;
			this.match(FlinkSqlParser.KW_ADD);
			this.state = 1008;
			this.match(FlinkSqlParser.KW_CONSTRAINT);
			this.state = 1009;
			this.constraintName();
			this.state = 1010;
			this.match(FlinkSqlParser.KW_PRIMARY);
			this.state = 1011;
			this.match(FlinkSqlParser.KW_KEY);
			this.state = 1012;
			this.columnNameList();
			this.state = 1014;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_NOT) {
				{
				this.state = 1013;
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
			this.state = 1016;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 1017;
			this.match(FlinkSqlParser.KW_CONSTRAINT);
			this.state = 1018;
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
			this.state = 1020;
			this.match(FlinkSqlParser.KW_ADD);
			this.state = 1021;
			this.match(FlinkSqlParser.KW_UNIQUE);
			this.state = 1022;
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
			this.state = 1024;
			this.match(FlinkSqlParser.KW_NOT);
			this.state = 1025;
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
			this.state = 1027;
			this.match(FlinkSqlParser.KW_ALTER);
			this.state = 1028;
			this.match(FlinkSqlParser.KW_VIEW);
			this.state = 1029;
			this.viewPath();
			this.state = 1033;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_RENAME:
				{
				this.state = 1030;
				this.renameDefinition();
				}
				break;
			case FlinkSqlParser.KW_AS:
				{
				this.state = 1031;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 1032;
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
			this.state = 1035;
			this.match(FlinkSqlParser.KW_ALTER);
			this.state = 1036;
			this.match(FlinkSqlParser.KW_DATABASE);
			this.state = 1037;
			this.databasePath();
			this.state = 1038;
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
			this.state = 1040;
			this.match(FlinkSqlParser.KW_ALTER);
			this.state = 1044;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				{
				this.state = 1041;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 1042;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				this.state = 1043;
				this.match(FlinkSqlParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 1046;
			this.match(FlinkSqlParser.KW_FUNCTION);
			this.state = 1048;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				this.state = 1047;
				this.ifExists();
				}
				break;
			}
			this.state = 1050;
			this.functionName();
			this.state = 1051;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 1052;
			this.identifier();
			this.state = 1055;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_LANGUAGE) {
				{
				this.state = 1053;
				this.match(FlinkSqlParser.KW_LANGUAGE);
				this.state = 1054;
				_la = this._input.LA(1);
				if (!(_la === FlinkSqlParser.KW_SCALA || _la === FlinkSqlParser.KW_JAVA || _la === FlinkSqlParser.KW_PYTHON)) {
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1057;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 1058;
			this.match(FlinkSqlParser.KW_CATALOG);
			this.state = 1060;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_IF) {
				{
				this.state = 1059;
				this.ifExists();
				}
			}

			this.state = 1062;
			this.catalogPath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 1064;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 1066;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_TEMPORARY) {
				{
				this.state = 1065;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 1068;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 1070;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_IF) {
				{
				this.state = 1069;
				this.ifExists();
				}
			}

			this.state = 1072;
			this.tablePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 1074;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 1075;
			this.match(FlinkSqlParser.KW_DATABASE);
			this.state = 1077;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_IF) {
				{
				this.state = 1076;
				this.ifExists();
				}
			}

			this.state = 1079;
			this.databasePath();
			this.state = 1081;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_CASCADE || _la === FlinkSqlParser.KW_RESTRICT) {
				{
				this.state = 1080;
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
			this.state = 1083;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 1085;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_TEMPORARY) {
				{
				this.state = 1084;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
			}

			this.state = 1087;
			this.match(FlinkSqlParser.KW_VIEW);
			this.state = 1089;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_IF) {
				{
				this.state = 1088;
				this.ifExists();
				}
			}

			this.state = 1091;
			this.viewPath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 1093;
			this.match(FlinkSqlParser.KW_DROP);
			this.state = 1097;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				{
				this.state = 1094;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				}
				break;

			case 2:
				{
				this.state = 1095;
				this.match(FlinkSqlParser.KW_TEMPORARY);
				this.state = 1096;
				this.match(FlinkSqlParser.KW_SYSTEM);
				}
				break;
			}
			this.state = 1099;
			this.match(FlinkSqlParser.KW_FUNCTION);
			this.state = 1101;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				{
				this.state = 1100;
				this.ifExists();
				}
				break;
			}
			this.state = 1103;
			this.functionName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 1112;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_EXECUTE) {
					{
					this.state = 1105;
					this.match(FlinkSqlParser.KW_EXECUTE);
					}
				}

				this.state = 1108;
				this.insertSimpleStatement();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1109;
				this.insertMulStatementCompatibility();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 1110;
				this.match(FlinkSqlParser.KW_EXECUTE);
				this.state = 1111;
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
			this.state = 1114;
			this.match(FlinkSqlParser.KW_INSERT);
			this.state = 1115;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_INTO || _la === FlinkSqlParser.KW_OVERWRITE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1116;
			this.tablePath();
			this.state = 1125;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 1118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_PARTITION) {
					{
					this.state = 1117;
					this.insertPartitionDefinition();
					}
				}

				this.state = 1121;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
				case 1:
					{
					this.state = 1120;
					this.columnNameList();
					}
					break;
				}
				this.state = 1123;
				this.queryStatement(0);
				}
				break;

			case 2:
				{
				this.state = 1124;
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
			this.state = 1127;
			this.match(FlinkSqlParser.KW_PARTITION);
			this.state = 1128;
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
			this.state = 1130;
			this.match(FlinkSqlParser.KW_VALUES);
			this.state = 1131;
			this.valuesRowDefinition();
			this.state = 1136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1132;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1133;
				this.valuesRowDefinition();
				}
				}
				this.state = 1138;
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
			this.state = 1139;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1140;
			this.constant();
			this.state = 1145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1141;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1142;
				this.constant();
				}
				}
				this.state = 1147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1148;
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
			this.state = 1150;
			this.match(FlinkSqlParser.KW_BEGIN);
			this.state = 1151;
			this.match(FlinkSqlParser.KW_STATEMENT);
			this.state = 1152;
			this.match(FlinkSqlParser.KW_SET);
			this.state = 1153;
			this.match(FlinkSqlParser.SEMICOLON);
			this.state = 1157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1154;
				this.insertSimpleStatement();
				this.state = 1155;
				this.match(FlinkSqlParser.SEMICOLON);
				}
				}
				this.state = 1159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSqlParser.KW_INSERT);
			this.state = 1161;
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
			this.state = 1163;
			this.match(FlinkSqlParser.KW_STATEMENT);
			this.state = 1164;
			this.match(FlinkSqlParser.KW_SET);
			this.state = 1165;
			this.match(FlinkSqlParser.KW_BEGIN);
			this.state = 1169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1166;
				this.insertSimpleStatement();
				this.state = 1167;
				this.match(FlinkSqlParser.SEMICOLON);
				}
				}
				this.state = 1171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSqlParser.KW_INSERT);
			this.state = 1173;
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
			this.state = 1198;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				{
				this.state = 1176;
				this.valuesCaluse();
				}
				break;

			case 2:
				{
				this.state = 1177;
				this.withClause();
				this.state = 1178;
				this.queryStatement(5);
				}
				break;

			case 3:
				{
				this.state = 1180;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1181;
				this.queryStatement(0);
				this.state = 1182;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 4:
				{
				this.state = 1184;
				this.selectClause();
				this.state = 1186;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
				case 1:
					{
					this.state = 1185;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1189;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 1188;
					this.limitClause();
					}
					break;
				}
				}
				break;

			case 5:
				{
				this.state = 1191;
				this.selectStatement();
				this.state = 1193;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
				case 1:
					{
					this.state = 1192;
					this.orderByCaluse();
					}
					break;
				}
				this.state = 1196;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
				case 1:
					{
					this.state = 1195;
					this.limitClause();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1214;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
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
					this.state = 1200;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 1201;
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
					this.state = 1203;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSqlParser.KW_ALL) {
						{
						this.state = 1202;
						this.match(FlinkSqlParser.KW_ALL);
						}
					}

					this.state = 1205;
					_localctx._right = this.queryStatement(0);
					this.state = 1207;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
					case 1:
						{
						this.state = 1206;
						this.orderByCaluse();
						}
						break;
					}
					this.state = 1210;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
					case 1:
						{
						this.state = 1209;
						this.limitClause();
						}
						break;
					}
					}
					}
				}
				this.state = 1216;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
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
			this.state = 1217;
			this.match(FlinkSqlParser.KW_VALUES);
			this.state = 1218;
			this.expression();
			this.state = 1223;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1219;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1220;
					this.expression();
					}
					}
				}
				this.state = 1225;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
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
			this.state = 1226;
			this.match(FlinkSqlParser.KW_WITH);
			this.state = 1227;
			this.withItem();
			this.state = 1232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1228;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1229;
				this.withItem();
				}
				}
				this.state = 1234;
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
			this.state = 1235;
			this.withItemName();
			this.state = 1247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.LR_BRACKET) {
				{
				this.state = 1236;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1237;
				this.columnName();
				this.state = 1242;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 1238;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1239;
					this.columnName();
					}
					}
					this.state = 1244;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1245;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
			}

			this.state = 1249;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 1250;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1251;
			this.queryStatement(0);
			this.state = 1252;
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
			this.state = 1254;
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
			this.state = 1276;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1256;
				this.selectClause();
				this.state = 1258;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
				case 1:
					{
					this.state = 1257;
					this.fromClause();
					}
					break;
				}
				this.state = 1261;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
				case 1:
					{
					this.state = 1260;
					this.whereClause();
					}
					break;
				}
				this.state = 1264;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
				case 1:
					{
					this.state = 1263;
					this.groupByClause();
					}
					break;
				}
				this.state = 1267;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
				case 1:
					{
					this.state = 1266;
					this.havingClause();
					}
					break;
				}
				this.state = 1270;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
				case 1:
					{
					this.state = 1269;
					this.windowClause();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1272;
				this.selectClause();
				this.state = 1273;
				this.fromClause();
				this.state = 1274;
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
			this.state = 1278;
			this.match(FlinkSqlParser.KW_SELECT);
			this.state = 1280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_ALL || _la === FlinkSqlParser.KW_DISTINCT) {
				{
				this.state = 1279;
				this.setQuantifier();
				}
			}

			this.state = 1291;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				{
				this.state = 1282;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;

			case 2:
				{
				this.state = 1283;
				this.projectItemDefinition();
				this.state = 1288;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1284;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1285;
						this.projectItemDefinition();
						}
						}
					}
					this.state = 1290;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 142, this._ctx);
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
			this.state = 1301;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1293;
				this.overWindowItem();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1294;
				this.columnName();
				this.state = 1299;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
				case 1:
					{
					this.state = 1296;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSqlParser.KW_AS) {
						{
						this.state = 1295;
						this.match(FlinkSqlParser.KW_AS);
						}
					}

					this.state = 1298;
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
			this.state = 1315;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1303;
				this.primaryExpression(0);
				this.state = 1304;
				this.match(FlinkSqlParser.KW_OVER);
				this.state = 1305;
				this.windowSpec();
				this.state = 1306;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 1307;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1309;
				this.primaryExpression(0);
				this.state = 1310;
				this.match(FlinkSqlParser.KW_OVER);
				this.state = 1311;
				this.errorCapturingIdentifier();
				this.state = 1312;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 1313;
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
			this.state = 1317;
			this.match(FlinkSqlParser.KW_FROM);
			this.state = 1318;
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
			this.state = 1331;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
			case 1:
				{
				this.state = 1321;
				this.tableReference();
				this.state = 1326;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1322;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1323;
						this.tableReference();
						}
						}
					}
					this.state = 1328;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
				}
				}
				break;

			case 2:
				{
				this.state = 1329;
				this.inlineDataValueClause();
				}
				break;

			case 3:
				{
				this.state = 1330;
				this.windoTVFClause();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1354;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1352;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
					case 1:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_tableExpression);
						this.state = 1333;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1334;
						this.match(FlinkSqlParser.KW_CROSS);
						this.state = 1335;
						this.match(FlinkSqlParser.KW_JOIN);
						this.state = 1336;
						this.tableExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new TableExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_tableExpression);
						this.state = 1337;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1339;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSqlParser.KW_NATURAL) {
							{
							this.state = 1338;
							this.match(FlinkSqlParser.KW_NATURAL);
							}
						}

						this.state = 1342;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSqlParser.KW_FULL || _la === FlinkSqlParser.KW_INNER || _la === FlinkSqlParser.KW_LEFT || _la === FlinkSqlParser.KW_RIGHT) {
							{
							this.state = 1341;
							_la = this._input.LA(1);
							if (!(_la === FlinkSqlParser.KW_FULL || _la === FlinkSqlParser.KW_INNER || _la === FlinkSqlParser.KW_LEFT || _la === FlinkSqlParser.KW_RIGHT)) {
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

						this.state = 1345;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSqlParser.KW_OUTER) {
							{
							this.state = 1344;
							this.match(FlinkSqlParser.KW_OUTER);
							}
						}

						this.state = 1347;
						this.match(FlinkSqlParser.KW_JOIN);
						this.state = 1348;
						this.tableExpression(0);
						this.state = 1350;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 153, this._ctx) ) {
						case 1:
							{
							this.state = 1349;
							this.joinCondition();
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1356;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
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
			this.state = 1357;
			this.tablePrimary();
			this.state = 1359;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				{
				this.state = 1358;
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
			this.state = 1412;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_TABLE) {
					{
					this.state = 1361;
					this.match(FlinkSqlParser.KW_TABLE);
					}
				}

				this.state = 1364;
				this.tablePath();
				this.state = 1366;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
				case 1:
					{
					this.state = 1365;
					this.systemTimePeriod();
					}
					break;
				}
				this.state = 1372;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
				case 1:
					{
					this.state = 1369;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSqlParser.KW_AS) {
						{
						this.state = 1368;
						this.match(FlinkSqlParser.KW_AS);
						}
					}

					this.state = 1371;
					this.correlationName();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1374;
				this.viewPath();
				this.state = 1376;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
				case 1:
					{
					this.state = 1375;
					this.systemTimePeriod();
					}
					break;
				}
				this.state = 1382;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
				case 1:
					{
					this.state = 1379;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === FlinkSqlParser.KW_AS) {
						{
						this.state = 1378;
						this.match(FlinkSqlParser.KW_AS);
						}
					}

					this.state = 1381;
					this.correlationName();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1384;
				this.match(FlinkSqlParser.KW_LATERAL);
				this.state = 1385;
				this.match(FlinkSqlParser.KW_TABLE);
				this.state = 1386;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1387;
				this.functionName();
				this.state = 1388;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1389;
				this.functionParam();
				this.state = 1394;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 1390;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1391;
					this.functionParam();
					}
					}
					this.state = 1396;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1397;
				this.match(FlinkSqlParser.RR_BRACKET);
				this.state = 1398;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_LATERAL) {
					{
					this.state = 1400;
					this.match(FlinkSqlParser.KW_LATERAL);
					}
				}

				this.state = 1403;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1404;
				this.queryStatement(0);
				this.state = 1405;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1407;
				this.match(FlinkSqlParser.KW_UNNEST);
				this.state = 1408;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1409;
				this.expression();
				this.state = 1410;
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
	public systemTimePeriod(): SystemTimePeriodContext {
		let _localctx: SystemTimePeriodContext = new SystemTimePeriodContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, FlinkSqlParser.RULE_systemTimePeriod);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1414;
			this.match(FlinkSqlParser.KW_FOR);
			this.state = 1415;
			this.match(FlinkSqlParser.KW_SYSTEM_TIME);
			this.state = 1416;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 1417;
			this.match(FlinkSqlParser.KW_OF);
			this.state = 1418;
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
		this.enterRule(_localctx, 188, FlinkSqlParser.RULE_dateTimeExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1420;
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
		this.enterRule(_localctx, 190, FlinkSqlParser.RULE_inlineDataValueClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1422;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1423;
			this.valuesDefinition();
			this.state = 1424;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 1425;
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
		this.enterRule(_localctx, 192, FlinkSqlParser.RULE_windoTVFClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1427;
			this.match(FlinkSqlParser.KW_TABLE);
			this.state = 1428;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1429;
			this.windowTVFExression();
			this.state = 1430;
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
		this.enterRule(_localctx, 194, FlinkSqlParser.RULE_windowTVFExression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1432;
			this.windoTVFName();
			this.state = 1433;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1434;
			this.windowTVFParam();
			this.state = 1439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1435;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1436;
				this.windowTVFParam();
				}
				}
				this.state = 1441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1442;
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
		this.enterRule(_localctx, 196, FlinkSqlParser.RULE_windoTVFName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1444;
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
		this.enterRule(_localctx, 198, FlinkSqlParser.RULE_windowTVFParam);
		try {
			this.state = 1461;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1446;
				this.match(FlinkSqlParser.KW_TABLE);
				this.state = 1447;
				this.timeAttrColumn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1448;
				this.columnDescriptor();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1449;
				this.timeIntervalExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1450;
				this.match(FlinkSqlParser.KW_DATA);
				this.state = 1451;
				this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
				this.state = 1452;
				this.match(FlinkSqlParser.KW_TABLE);
				this.state = 1453;
				this.timeAttrColumn();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1454;
				this.match(FlinkSqlParser.KW_TIMECOL);
				this.state = 1455;
				this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
				this.state = 1456;
				this.columnDescriptor();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1457;
				this.timeIntervalParamName();
				this.state = 1458;
				this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
				this.state = 1459;
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
		this.enterRule(_localctx, 200, FlinkSqlParser.RULE_timeIntervalParamName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1463;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_OFFSET || _la === FlinkSqlParser.KW_DATA || ((((_la - 494)) & ~0x1F) === 0 && ((1 << (_la - 494)) & ((1 << (FlinkSqlParser.KW_SIZE - 494)) | (1 << (FlinkSqlParser.KW_SLIDE - 494)) | (1 << (FlinkSqlParser.KW_STEP - 494)) | (1 << (FlinkSqlParser.KW_TIMECOL - 494)))) !== 0))) {
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
		this.enterRule(_localctx, 202, FlinkSqlParser.RULE_columnDescriptor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1465;
			this.match(FlinkSqlParser.KW_DESCRIPTOR);
			this.state = 1466;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1467;
			this.columnName();
			this.state = 1468;
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
		this.enterRule(_localctx, 204, FlinkSqlParser.RULE_joinCondition);
		try {
			this.state = 1474;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_ON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1470;
				this.match(FlinkSqlParser.KW_ON);
				this.state = 1471;
				this.booleanExpression(0);
				}
				break;
			case FlinkSqlParser.KW_USING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1472;
				this.match(FlinkSqlParser.KW_USING);
				this.state = 1473;
				this.columnNameList();
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
		this.enterRule(_localctx, 206, FlinkSqlParser.RULE_whereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1476;
			this.match(FlinkSqlParser.KW_WHERE);
			this.state = 1477;
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
		this.enterRule(_localctx, 208, FlinkSqlParser.RULE_groupByClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1479;
			this.match(FlinkSqlParser.KW_GROUP);
			this.state = 1480;
			this.match(FlinkSqlParser.KW_BY);
			this.state = 1481;
			this.groupItemDefinition();
			this.state = 1486;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1482;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1483;
					this.groupItemDefinition();
					}
					}
				}
				this.state = 1488;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
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
		this.enterRule(_localctx, 210, FlinkSqlParser.RULE_groupItemDefinition);
		let _la: number;
		try {
			this.state = 1528;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1489;
				this.columnName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1490;
				this.groupWindowFunction();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1491;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1492;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1493;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1494;
				this.expression();
				this.state = 1499;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 1495;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1496;
					this.expression();
					}
					}
					this.state = 1501;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1502;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1504;
				this.groupingSetsNotaionName();
				this.state = 1505;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1506;
				this.expression();
				this.state = 1511;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 1507;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1508;
					this.expression();
					}
					}
					this.state = 1513;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1514;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1516;
				this.groupingSets();
				this.state = 1517;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1518;
				this.groupItemDefinition();
				this.state = 1523;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 1519;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1520;
					this.groupItemDefinition();
					}
					}
					this.state = 1525;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1526;
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
		this.enterRule(_localctx, 212, FlinkSqlParser.RULE_groupingSets);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1530;
			this.match(FlinkSqlParser.KW_GROUPING);
			this.state = 1531;
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
		this.enterRule(_localctx, 214, FlinkSqlParser.RULE_groupingSetsNotaionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1533;
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
		this.enterRule(_localctx, 216, FlinkSqlParser.RULE_groupWindowFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1535;
			this.groupWindowFunctionName();
			this.state = 1536;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1537;
			this.timeAttrColumn();
			this.state = 1538;
			this.match(FlinkSqlParser.COMMA);
			this.state = 1539;
			this.timeIntervalExpression();
			this.state = 1540;
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
		this.enterRule(_localctx, 218, FlinkSqlParser.RULE_groupWindowFunctionName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1542;
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
		this.enterRule(_localctx, 220, FlinkSqlParser.RULE_timeAttrColumn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1544;
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
		this.enterRule(_localctx, 222, FlinkSqlParser.RULE_havingClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1546;
			this.match(FlinkSqlParser.KW_HAVING);
			this.state = 1547;
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
		this.enterRule(_localctx, 224, FlinkSqlParser.RULE_windowClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1549;
			this.match(FlinkSqlParser.KW_WINDOW);
			this.state = 1550;
			this.namedWindow();
			this.state = 1555;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1551;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1552;
					this.namedWindow();
					}
					}
				}
				this.state = 1557;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
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
		this.enterRule(_localctx, 226, FlinkSqlParser.RULE_namedWindow);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1558;
			_localctx._name = this.errorCapturingIdentifier();
			this.state = 1559;
			this.match(FlinkSqlParser.KW_AS);
			this.state = 1560;
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
		this.enterRule(_localctx, 228, FlinkSqlParser.RULE_windowSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 437)) & ~0x1F) === 0 && ((1 << (_la - 437)) & ((1 << (FlinkSqlParser.KW_ADD - 437)) | (1 << (FlinkSqlParser.KW_AFTER - 437)) | (1 << (FlinkSqlParser.KW_ASC - 437)) | (1 << (FlinkSqlParser.KW_CASCADE - 437)) | (1 << (FlinkSqlParser.KW_CATALOG - 437)) | (1 << (FlinkSqlParser.KW_CENTURY - 437)) | (1 << (FlinkSqlParser.KW_CONFIG - 437)) | (1 << (FlinkSqlParser.KW_CONSTRAINTS - 437)) | (1 << (FlinkSqlParser.KW_CUMULATE - 437)) | (1 << (FlinkSqlParser.KW_DATA - 437)) | (1 << (FlinkSqlParser.KW_DATABASE - 437)) | (1 << (FlinkSqlParser.KW_DAYS - 437)) | (1 << (FlinkSqlParser.KW_DECADE - 437)) | (1 << (FlinkSqlParser.KW_DESC - 437)) | (1 << (FlinkSqlParser.KW_DESCRIPTOR - 437)) | (1 << (FlinkSqlParser.KW_DIV - 437)) | (1 << (FlinkSqlParser.KW_ENGINE - 437)) | (1 << (FlinkSqlParser.KW_EPOCH - 437)) | (1 << (FlinkSqlParser.KW_EXCLUDING - 437)) | (1 << (FlinkSqlParser.KW_FILE - 437)) | (1 << (FlinkSqlParser.KW_FIRST - 437)) | (1 << (FlinkSqlParser.KW_GENERATED - 437)) | (1 << (FlinkSqlParser.KW_HOP - 437)) | (1 << (FlinkSqlParser.KW_HOURS - 437)) | (1 << (FlinkSqlParser.KW_IGNORE - 437)) | (1 << (FlinkSqlParser.KW_INCLUDING - 437)) | (1 << (FlinkSqlParser.KW_JAR - 437)) | (1 << (FlinkSqlParser.KW_JARS - 437)) | (1 << (FlinkSqlParser.KW_JAVA - 437)) | (1 << (FlinkSqlParser.KW_KEY - 437)) | (1 << (FlinkSqlParser.KW_LAST - 437)) | (1 << (FlinkSqlParser.KW_LOAD - 437)))) !== 0) || ((((_la - 469)) & ~0x1F) === 0 && ((1 << (_la - 469)) & ((1 << (FlinkSqlParser.KW_MAP - 469)) | (1 << (FlinkSqlParser.KW_MICROSECOND - 469)) | (1 << (FlinkSqlParser.KW_MILLENNIUM - 469)) | (1 << (FlinkSqlParser.KW_MILLISECOND - 469)) | (1 << (FlinkSqlParser.KW_MINUTES - 469)) | (1 << (FlinkSqlParser.KW_MONTHS - 469)) | (1 << (FlinkSqlParser.KW_NANOSECOND - 469)) | (1 << (FlinkSqlParser.KW_NULLS - 469)) | (1 << (FlinkSqlParser.KW_OPTIONS - 469)) | (1 << (FlinkSqlParser.KW_PAST - 469)) | (1 << (FlinkSqlParser.KW_PLAN - 469)) | (1 << (FlinkSqlParser.KW_PRECEDING - 469)) | (1 << (FlinkSqlParser.KW_PYTHON - 469)) | (1 << (FlinkSqlParser.KW_PYTHON_ARCHIVES - 469)) | (1 << (FlinkSqlParser.KW_PYTHON_DEPENDENCIES - 469)) | (1 << (FlinkSqlParser.KW_PYTHON_FILES - 469)) | (1 << (FlinkSqlParser.KW_PYTHON_JAR - 469)) | (1 << (FlinkSqlParser.KW_PYTHON_PARAMETER - 469)) | (1 << (FlinkSqlParser.KW_PYTHON_REQUIREMENTS - 469)) | (1 << (FlinkSqlParser.KW_QUARTER - 469)) | (1 << (FlinkSqlParser.KW_REMOVE - 469)) | (1 << (FlinkSqlParser.KW_RESTRICT - 469)) | (1 << (FlinkSqlParser.KW_SECONDS - 469)) | (1 << (FlinkSqlParser.KW_SESSION - 469)) | (1 << (FlinkSqlParser.KW_SETS - 469)) | (1 << (FlinkSqlParser.KW_SIZE - 469)) | (1 << (FlinkSqlParser.KW_SLIDE - 469)) | (1 << (FlinkSqlParser.KW_STEP - 469)) | (1 << (FlinkSqlParser.KW_TEMPORARY - 469)) | (1 << (FlinkSqlParser.KW_TIMECOL - 469)) | (1 << (FlinkSqlParser.KW_TUMBLE - 469)) | (1 << (FlinkSqlParser.KW_UNLOAD - 469)))) !== 0) || ((((_la - 501)) & ~0x1F) === 0 && ((1 << (_la - 501)) & ((1 << (FlinkSqlParser.KW_VIEW - 501)) | (1 << (FlinkSqlParser.KW_WEEK - 501)) | (1 << (FlinkSqlParser.KW_YEARS - 501)) | (1 << (FlinkSqlParser.KW_ZONE - 501)))) !== 0) || ((((_la - 537)) & ~0x1F) === 0 && ((1 << (_la - 537)) & ((1 << (FlinkSqlParser.STRING_LITERAL - 537)) | (1 << (FlinkSqlParser.DIG_LITERAL - 537)) | (1 << (FlinkSqlParser.ID_LITERAL - 537)))) !== 0)) {
				{
				this.state = 1562;
				_localctx._name = this.errorCapturingIdentifier();
				}
			}

			this.state = 1565;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_PARTITION) {
				{
				this.state = 1566;
				this.partitionByClause();
				}
			}

			this.state = 1570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_ORDER) {
				{
				this.state = 1569;
				this.orderByCaluse();
				}
			}

			this.state = 1573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_RANGE || _la === FlinkSqlParser.KW_ROWS) {
				{
				this.state = 1572;
				this.windowFrame();
				}
			}

			this.state = 1575;
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
		this.enterRule(_localctx, 230, FlinkSqlParser.RULE_matchRecognizeClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1577;
			this.match(FlinkSqlParser.KW_MATCH_RECOGNIZE);
			this.state = 1578;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1580;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_PARTITION) {
				{
				this.state = 1579;
				this.partitionByClause();
				}
			}

			this.state = 1583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_ORDER) {
				{
				this.state = 1582;
				this.orderByCaluse();
				}
			}

			this.state = 1586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_MEASURES) {
				{
				this.state = 1585;
				this.measuresClause();
				}
			}

			this.state = 1589;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_ALL || _la === FlinkSqlParser.KW_ONE) {
				{
				this.state = 1588;
				this.outputMode();
				}
			}

			this.state = 1592;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_AFTER) {
				{
				this.state = 1591;
				this.afterMatchStrategy();
				}
			}

			this.state = 1595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_PATTERN) {
				{
				this.state = 1594;
				this.patternDefination();
				}
			}

			this.state = 1597;
			this.patternVariablesDefination();
			this.state = 1598;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 1603;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 187, this._ctx) ) {
			case 1:
				{
				this.state = 1600;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_AS) {
					{
					this.state = 1599;
					this.match(FlinkSqlParser.KW_AS);
					}
				}

				this.state = 1602;
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
		this.enterRule(_localctx, 232, FlinkSqlParser.RULE_orderByCaluse);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1605;
			this.match(FlinkSqlParser.KW_ORDER);
			this.state = 1606;
			this.match(FlinkSqlParser.KW_BY);
			this.state = 1607;
			this.orderItemDefition();
			this.state = 1612;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1608;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1609;
					this.orderItemDefition();
					}
					}
				}
				this.state = 1614;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
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
		this.enterRule(_localctx, 234, FlinkSqlParser.RULE_orderItemDefition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1615;
			this.columnName();
			this.state = 1617;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				{
				this.state = 1616;
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
			this.state = 1621;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				{
				this.state = 1619;
				this.match(FlinkSqlParser.KW_NULLS);
				this.state = 1620;
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
		this.enterRule(_localctx, 236, FlinkSqlParser.RULE_limitClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1623;
			this.match(FlinkSqlParser.KW_LIMIT);
			this.state = 1626;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_ALL:
				{
				this.state = 1624;
				this.match(FlinkSqlParser.KW_ALL);
				}
				break;
			case FlinkSqlParser.KW_ABS:
			case FlinkSqlParser.KW_ARRAY:
			case FlinkSqlParser.KW_AVG:
			case FlinkSqlParser.KW_CARDINALITY:
			case FlinkSqlParser.KW_CASE:
			case FlinkSqlParser.KW_CAST:
			case FlinkSqlParser.KW_CEIL:
			case FlinkSqlParser.KW_CEILING:
			case FlinkSqlParser.KW_COALESCE:
			case FlinkSqlParser.KW_COLLECT:
			case FlinkSqlParser.KW_COUNT:
			case FlinkSqlParser.KW_CUME_DIST:
			case FlinkSqlParser.KW_CURRENT_DATE:
			case FlinkSqlParser.KW_CURRENT_TIME:
			case FlinkSqlParser.KW_CURRENT_TIMESTAMP:
			case FlinkSqlParser.KW_DATE:
			case FlinkSqlParser.KW_DAY:
			case FlinkSqlParser.KW_DAYOFWEEK:
			case FlinkSqlParser.KW_DAYOFYEAR:
			case FlinkSqlParser.KW_DENSE_RANK:
			case FlinkSqlParser.KW_ELEMENT:
			case FlinkSqlParser.KW_EXISTS:
			case FlinkSqlParser.KW_EXP:
			case FlinkSqlParser.KW_EXTRACT:
			case FlinkSqlParser.KW_FALSE:
			case FlinkSqlParser.KW_FIRST_VALUE:
			case FlinkSqlParser.KW_FLOOR:
			case FlinkSqlParser.KW_GROUPING:
			case FlinkSqlParser.KW_HOUR:
			case FlinkSqlParser.KW_IF:
			case FlinkSqlParser.KW_INTERVAL:
			case FlinkSqlParser.KW_LAG:
			case FlinkSqlParser.KW_LAST_VALUE:
			case FlinkSqlParser.KW_LEAD:
			case FlinkSqlParser.KW_LEFT:
			case FlinkSqlParser.KW_LN:
			case FlinkSqlParser.KW_LOCALTIME:
			case FlinkSqlParser.KW_LOCALTIMESTAMP:
			case FlinkSqlParser.KW_LOWER:
			case FlinkSqlParser.KW_MAX:
			case FlinkSqlParser.KW_MIN:
			case FlinkSqlParser.KW_MINUTE:
			case FlinkSqlParser.KW_MOD:
			case FlinkSqlParser.KW_MONTH:
			case FlinkSqlParser.KW_NOT:
			case FlinkSqlParser.KW_NTILE:
			case FlinkSqlParser.KW_NULL:
			case FlinkSqlParser.KW_NULLIF:
			case FlinkSqlParser.KW_OVERLAY:
			case FlinkSqlParser.KW_PERCENT_RANK:
			case FlinkSqlParser.KW_POSITION:
			case FlinkSqlParser.KW_POWER:
			case FlinkSqlParser.KW_RANK:
			case FlinkSqlParser.KW_RIGHT:
			case FlinkSqlParser.KW_ROW:
			case FlinkSqlParser.KW_ROWS:
			case FlinkSqlParser.KW_ROW_NUMBER:
			case FlinkSqlParser.KW_SECOND:
			case FlinkSqlParser.KW_STDDEV_POP:
			case FlinkSqlParser.KW_STDDEV_SAMP:
			case FlinkSqlParser.KW_SUBSTRING:
			case FlinkSqlParser.KW_SUM:
			case FlinkSqlParser.KW_TIME:
			case FlinkSqlParser.KW_TIMESTAMP:
			case FlinkSqlParser.KW_TIMESTAMP_DIFF:
			case FlinkSqlParser.KW_TRIM:
			case FlinkSqlParser.KW_TRUE:
			case FlinkSqlParser.KW_TRUNCATE:
			case FlinkSqlParser.KW_TRY_CAST:
			case FlinkSqlParser.KW_UPPER:
			case FlinkSqlParser.KW_VAR_POP:
			case FlinkSqlParser.KW_VAR_SAMP:
			case FlinkSqlParser.KW_YEAR:
			case FlinkSqlParser.KW_ADD:
			case FlinkSqlParser.KW_AFTER:
			case FlinkSqlParser.KW_ASC:
			case FlinkSqlParser.KW_CASCADE:
			case FlinkSqlParser.KW_CATALOG:
			case FlinkSqlParser.KW_CENTURY:
			case FlinkSqlParser.KW_CONFIG:
			case FlinkSqlParser.KW_CONSTRAINTS:
			case FlinkSqlParser.KW_CUMULATE:
			case FlinkSqlParser.KW_DATA:
			case FlinkSqlParser.KW_DATABASE:
			case FlinkSqlParser.KW_DAYS:
			case FlinkSqlParser.KW_DECADE:
			case FlinkSqlParser.KW_DESC:
			case FlinkSqlParser.KW_DESCRIPTOR:
			case FlinkSqlParser.KW_DIV:
			case FlinkSqlParser.KW_ENGINE:
			case FlinkSqlParser.KW_EPOCH:
			case FlinkSqlParser.KW_EXCLUDING:
			case FlinkSqlParser.KW_FILE:
			case FlinkSqlParser.KW_FIRST:
			case FlinkSqlParser.KW_GENERATED:
			case FlinkSqlParser.KW_HOP:
			case FlinkSqlParser.KW_HOURS:
			case FlinkSqlParser.KW_IGNORE:
			case FlinkSqlParser.KW_INCLUDING:
			case FlinkSqlParser.KW_JAR:
			case FlinkSqlParser.KW_JARS:
			case FlinkSqlParser.KW_JAVA:
			case FlinkSqlParser.KW_KEY:
			case FlinkSqlParser.KW_LAST:
			case FlinkSqlParser.KW_LOAD:
			case FlinkSqlParser.KW_MAP:
			case FlinkSqlParser.KW_MICROSECOND:
			case FlinkSqlParser.KW_MILLENNIUM:
			case FlinkSqlParser.KW_MILLISECOND:
			case FlinkSqlParser.KW_MINUTES:
			case FlinkSqlParser.KW_MONTHS:
			case FlinkSqlParser.KW_NANOSECOND:
			case FlinkSqlParser.KW_NULLS:
			case FlinkSqlParser.KW_OPTIONS:
			case FlinkSqlParser.KW_PAST:
			case FlinkSqlParser.KW_PLAN:
			case FlinkSqlParser.KW_PRECEDING:
			case FlinkSqlParser.KW_PYTHON:
			case FlinkSqlParser.KW_PYTHON_ARCHIVES:
			case FlinkSqlParser.KW_PYTHON_DEPENDENCIES:
			case FlinkSqlParser.KW_PYTHON_FILES:
			case FlinkSqlParser.KW_PYTHON_JAR:
			case FlinkSqlParser.KW_PYTHON_PARAMETER:
			case FlinkSqlParser.KW_PYTHON_REQUIREMENTS:
			case FlinkSqlParser.KW_QUARTER:
			case FlinkSqlParser.KW_REMOVE:
			case FlinkSqlParser.KW_RESTRICT:
			case FlinkSqlParser.KW_SECONDS:
			case FlinkSqlParser.KW_SESSION:
			case FlinkSqlParser.KW_SETS:
			case FlinkSqlParser.KW_SIZE:
			case FlinkSqlParser.KW_SLIDE:
			case FlinkSqlParser.KW_STEP:
			case FlinkSqlParser.KW_TEMPORARY:
			case FlinkSqlParser.KW_TIMECOL:
			case FlinkSqlParser.KW_TUMBLE:
			case FlinkSqlParser.KW_UNLOAD:
			case FlinkSqlParser.KW_VIEW:
			case FlinkSqlParser.KW_WEEK:
			case FlinkSqlParser.KW_YEARS:
			case FlinkSqlParser.KW_ZONE:
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
				this.state = 1625;
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
		this.enterRule(_localctx, 238, FlinkSqlParser.RULE_partitionByClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1628;
			this.match(FlinkSqlParser.KW_PARTITION);
			this.state = 1629;
			this.match(FlinkSqlParser.KW_BY);
			this.state = 1630;
			this.columnName();
			this.state = 1635;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1631;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1632;
				this.columnName();
				}
				}
				this.state = 1637;
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
		this.enterRule(_localctx, 240, FlinkSqlParser.RULE_quantifiers);
		try {
			this.state = 1654;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 193, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1638;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1639;
				this.match(FlinkSqlParser.ADD_SIGN);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 1640;
				this.match(FlinkSqlParser.QUESTION_MARK_SIGN);
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 1641;
				this.match(FlinkSqlParser.LB_BRACKET);
				this.state = 1642;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1643;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1644;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1645;
				this.match(FlinkSqlParser.RB_BRACKET);
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				{
				this.state = 1646;
				this.match(FlinkSqlParser.LB_BRACKET);
				this.state = 1647;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1648;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1649;
				this.match(FlinkSqlParser.RB_BRACKET);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 1650;
				this.match(FlinkSqlParser.LB_BRACKET);
				this.state = 1651;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1652;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1653;
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
		this.enterRule(_localctx, 242, FlinkSqlParser.RULE_measuresClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1656;
			this.match(FlinkSqlParser.KW_MEASURES);
			this.state = 1657;
			this.projectItemDefinition();
			this.state = 1662;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1658;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1659;
				this.projectItemDefinition();
				}
				}
				this.state = 1664;
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
		this.enterRule(_localctx, 244, FlinkSqlParser.RULE_patternDefination);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1665;
			this.match(FlinkSqlParser.KW_PATTERN);
			this.state = 1666;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 1668;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1667;
				this.patternVariable();
				}
				}
				this.state = 1670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FlinkSqlParser.DIG_LITERAL || _la === FlinkSqlParser.ID_LITERAL);
			this.state = 1672;
			this.match(FlinkSqlParser.RR_BRACKET);
			this.state = 1674;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_WITHIN) {
				{
				this.state = 1673;
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
		this.enterRule(_localctx, 246, FlinkSqlParser.RULE_patternVariable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1676;
			this.unquotedIdentifier();
			this.state = 1678;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 518)) & ~0x1F) === 0 && ((1 << (_la - 518)) & ((1 << (FlinkSqlParser.LB_BRACKET - 518)) | (1 << (FlinkSqlParser.ASTERISK_SIGN - 518)) | (1 << (FlinkSqlParser.ADD_SIGN - 518)) | (1 << (FlinkSqlParser.QUESTION_MARK_SIGN - 518)))) !== 0)) {
				{
				this.state = 1677;
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
		this.enterRule(_localctx, 248, FlinkSqlParser.RULE_outputMode);
		try {
			this.state = 1688;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_ALL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1680;
				this.match(FlinkSqlParser.KW_ALL);
				this.state = 1681;
				this.match(FlinkSqlParser.KW_ROWS);
				this.state = 1682;
				this.match(FlinkSqlParser.KW_PER);
				this.state = 1683;
				this.match(FlinkSqlParser.KW_MATCH);
				}
				break;
			case FlinkSqlParser.KW_ONE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1684;
				this.match(FlinkSqlParser.KW_ONE);
				this.state = 1685;
				this.match(FlinkSqlParser.KW_ROW);
				this.state = 1686;
				this.match(FlinkSqlParser.KW_PER);
				this.state = 1687;
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
		this.enterRule(_localctx, 250, FlinkSqlParser.RULE_afterMatchStrategy);
		try {
			this.state = 1714;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1690;
				this.match(FlinkSqlParser.KW_AFTER);
				this.state = 1691;
				this.match(FlinkSqlParser.KW_MATCH);
				this.state = 1692;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1693;
				this.match(FlinkSqlParser.KW_PAST);
				this.state = 1694;
				this.match(FlinkSqlParser.KW_LAST);
				this.state = 1695;
				this.match(FlinkSqlParser.KW_ROW);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1696;
				this.match(FlinkSqlParser.KW_AFTER);
				this.state = 1697;
				this.match(FlinkSqlParser.KW_MATCH);
				this.state = 1698;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1699;
				this.match(FlinkSqlParser.KW_TO);
				this.state = 1700;
				this.match(FlinkSqlParser.KW_NEXT);
				this.state = 1701;
				this.match(FlinkSqlParser.KW_ROW);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1702;
				this.match(FlinkSqlParser.KW_AFTER);
				this.state = 1703;
				this.match(FlinkSqlParser.KW_MATCH);
				this.state = 1704;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1705;
				this.match(FlinkSqlParser.KW_TO);
				this.state = 1706;
				this.match(FlinkSqlParser.KW_LAST);
				this.state = 1707;
				this.unquotedIdentifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1708;
				this.match(FlinkSqlParser.KW_AFTER);
				this.state = 1709;
				this.match(FlinkSqlParser.KW_MATCH);
				this.state = 1710;
				this.match(FlinkSqlParser.KW_SKIP);
				this.state = 1711;
				this.match(FlinkSqlParser.KW_TO);
				this.state = 1712;
				this.match(FlinkSqlParser.KW_FIRST);
				this.state = 1713;
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
		this.enterRule(_localctx, 252, FlinkSqlParser.RULE_patternVariablesDefination);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1716;
			this.match(FlinkSqlParser.KW_DEFINE);
			this.state = 1717;
			this.projectItemDefinition();
			this.state = 1722;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 1718;
				this.match(FlinkSqlParser.COMMA);
				this.state = 1719;
				this.projectItemDefinition();
				}
				}
				this.state = 1724;
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
		this.enterRule(_localctx, 254, FlinkSqlParser.RULE_windowFrame);
		try {
			this.state = 1734;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_RANGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1725;
				this.match(FlinkSqlParser.KW_RANGE);
				this.state = 1726;
				this.match(FlinkSqlParser.KW_BETWEEN);
				this.state = 1727;
				this.timeIntervalExpression();
				this.state = 1728;
				this.frameBound();
				}
				break;
			case FlinkSqlParser.KW_ROWS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1730;
				this.match(FlinkSqlParser.KW_ROWS);
				this.state = 1731;
				this.match(FlinkSqlParser.KW_BETWEEN);
				this.state = 1732;
				this.match(FlinkSqlParser.DIG_LITERAL);
				this.state = 1733;
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
		this.enterRule(_localctx, 256, FlinkSqlParser.RULE_frameBound);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1736;
			this.match(FlinkSqlParser.KW_PRECEDING);
			this.state = 1737;
			this.match(FlinkSqlParser.KW_AND);
			this.state = 1738;
			this.match(FlinkSqlParser.KW_CURRENT);
			this.state = 1739;
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
		this.enterRule(_localctx, 258, FlinkSqlParser.RULE_withinClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1741;
			this.match(FlinkSqlParser.KW_WITHIN);
			this.state = 1742;
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
		this.enterRule(_localctx, 260, FlinkSqlParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1744;
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
		let _startState: number = 262;
		this.enterRecursionRule(_localctx, 262, FlinkSqlParser.RULE_booleanExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1758;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 203, this._ctx) ) {
			case 1:
				{
				_localctx = new LogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1747;
				this.match(FlinkSqlParser.KW_NOT);
				this.state = 1748;
				this.booleanExpression(6);
				}
				break;

			case 2:
				{
				_localctx = new ExistsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1749;
				this.match(FlinkSqlParser.KW_EXISTS);
				this.state = 1750;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1751;
				this.queryStatement(0);
				this.state = 1752;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new PredicatedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1754;
				this.valueExpression(0);
				this.state = 1756;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 202, this._ctx) ) {
				case 1:
					{
					this.state = 1755;
					this.predicate();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1774;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 206, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1772;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 205, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1760;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1761;
						(_localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.KW_AND);
						this.state = 1762;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1763;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1764;
						(_localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.KW_OR);
						this.state = 1765;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 3:
						{
						_localctx = new LogicalNestedContext(new BooleanExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
						this.state = 1766;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1767;
						this.match(FlinkSqlParser.KW_IS);
						this.state = 1769;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === FlinkSqlParser.KW_NOT) {
							{
							this.state = 1768;
							this.match(FlinkSqlParser.KW_NOT);
							}
						}

						this.state = 1771;
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
				this.state = 1776;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 206, this._ctx);
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
		this.enterRule(_localctx, 264, FlinkSqlParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 1844;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 217, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1778;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1777;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1780;
				_localctx._kind = this.match(FlinkSqlParser.KW_BETWEEN);
				this.state = 1782;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_ASYMMETRIC || _la === FlinkSqlParser.KW_SYMMETRIC) {
					{
					this.state = 1781;
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

				this.state = 1784;
				_localctx._lower = this.valueExpression(0);
				this.state = 1785;
				this.match(FlinkSqlParser.KW_AND);
				this.state = 1786;
				_localctx._upper = this.valueExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1789;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1788;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1791;
				_localctx._kind = this.match(FlinkSqlParser.KW_IN);
				this.state = 1792;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1793;
				this.expression();
				this.state = 1798;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FlinkSqlParser.COMMA) {
					{
					{
					this.state = 1794;
					this.match(FlinkSqlParser.COMMA);
					this.state = 1795;
					this.expression();
					}
					}
					this.state = 1800;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1801;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1804;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1803;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1806;
				_localctx._kind = this.match(FlinkSqlParser.KW_IN);
				this.state = 1807;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1808;
				this.queryStatement(0);
				this.state = 1809;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1811;
				_localctx._kind = this.match(FlinkSqlParser.KW_EXISTS);
				this.state = 1812;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1813;
				this.queryStatement(0);
				this.state = 1814;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1817;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1816;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1819;
				_localctx._kind = this.match(FlinkSqlParser.KW_RLIKE);
				this.state = 1820;
				_localctx._pattern = this.valueExpression(0);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1821;
				this.likePredicate();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1822;
				this.match(FlinkSqlParser.KW_IS);
				this.state = 1824;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1823;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1826;
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
				this.state = 1827;
				this.match(FlinkSqlParser.KW_IS);
				this.state = 1829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1828;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1831;
				_localctx._kind = this.match(FlinkSqlParser.KW_DISTINCT);
				this.state = 1832;
				this.match(FlinkSqlParser.KW_FROM);
				this.state = 1833;
				_localctx._right = this.valueExpression(0);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1835;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1834;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1837;
				_localctx._kind = this.match(FlinkSqlParser.KW_SIMILAR);
				this.state = 1838;
				this.match(FlinkSqlParser.KW_TO);
				this.state = 1839;
				_localctx._right = this.valueExpression(0);
				this.state = 1842;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 216, this._ctx) ) {
				case 1:
					{
					this.state = 1840;
					this.match(FlinkSqlParser.KW_ESCAPE);
					this.state = 1841;
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
		this.enterRule(_localctx, 266, FlinkSqlParser.RULE_likePredicate);
		let _la: number;
		try {
			this.state = 1875;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 223, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1847;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1846;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1849;
				_localctx._kind = this.match(FlinkSqlParser.KW_LIKE);
				this.state = 1850;
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
				this.state = 1864;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 220, this._ctx) ) {
				case 1:
					{
					this.state = 1851;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1852;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;

				case 2:
					{
					this.state = 1853;
					this.match(FlinkSqlParser.LR_BRACKET);
					this.state = 1854;
					this.expression();
					this.state = 1859;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FlinkSqlParser.COMMA) {
						{
						{
						this.state = 1855;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1856;
						this.expression();
						}
						}
						this.state = 1861;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1862;
					this.match(FlinkSqlParser.RR_BRACKET);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1867;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 1866;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 1869;
				_localctx._kind = this.match(FlinkSqlParser.KW_LIKE);
				this.state = 1870;
				_localctx._pattern = this.valueExpression(0);
				this.state = 1873;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 222, this._ctx) ) {
				case 1:
					{
					this.state = 1871;
					this.match(FlinkSqlParser.KW_ESCAPE);
					this.state = 1872;
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
		let _startState: number = 268;
		this.enterRecursionRule(_localctx, 268, FlinkSqlParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1881;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 224, this._ctx) ) {
			case 1:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1878;
				this.primaryExpression(0);
				}
				break;

			case 2:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1879;
				(_localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 509)) & ~0x1F) === 0 && ((1 << (_la - 509)) & ((1 << (FlinkSqlParser.BIT_NOT_OP - 509)) | (1 << (FlinkSqlParser.HYPNEN_SIGN - 509)) | (1 << (FlinkSqlParser.ADD_SIGN - 509)))) !== 0))) {
					(_localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1880;
				this.valueExpression(7);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1904;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 226, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1902;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 225, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1883;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1884;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === FlinkSqlParser.KW_DIV || ((((_la - 527)) & ~0x1F) === 0 && ((1 << (_la - 527)) & ((1 << (FlinkSqlParser.ASTERISK_SIGN - 527)) | (1 << (FlinkSqlParser.PENCENT_SIGN - 527)) | (1 << (FlinkSqlParser.SLASH_SIGN - 527)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1885;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(7);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1886;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1887;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 529)) & ~0x1F) === 0 && ((1 << (_la - 529)) & ((1 << (FlinkSqlParser.HYPNEN_SIGN - 529)) | (1 << (FlinkSqlParser.ADD_SIGN - 529)) | (1 << (FlinkSqlParser.DOUBLE_VERTICAL_SIGN - 529)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1888;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(6);
						}
						break;

					case 3:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1889;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1890;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_AND_OP);
						this.state = 1891;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(5);
						}
						break;

					case 4:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1892;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1893;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_XOR_OP);
						this.state = 1894;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;

					case 5:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1895;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1896;
						(_localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_OR_OP);
						this.state = 1897;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;

					case 6:
						{
						_localctx = new ComparisonContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, FlinkSqlParser.RULE_valueExpression);
						this.state = 1898;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1899;
						this.comparisonOperator();
						this.state = 1900;
						(_localctx as ComparisonContext)._right = this.valueExpression(2);
						}
						break;
					}
					}
				}
				this.state = 1906;
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
		let _startState: number = 270;
		this.enterRecursionRule(_localctx, 270, FlinkSqlParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1999;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 236, this._ctx) ) {
			case 1:
				{
				_localctx = new SearchedCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1908;
				this.match(FlinkSqlParser.KW_CASE);
				this.state = 1910;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1909;
					this.whenClause();
					}
					}
					this.state = 1912;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSqlParser.KW_WHEN);
				this.state = 1916;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_ELSE) {
					{
					this.state = 1914;
					this.match(FlinkSqlParser.KW_ELSE);
					this.state = 1915;
					(_localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1918;
				this.match(FlinkSqlParser.KW_END);
				}
				break;

			case 2:
				{
				_localctx = new SimpleCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1920;
				this.match(FlinkSqlParser.KW_CASE);
				this.state = 1921;
				(_localctx as SimpleCaseContext)._value = this.expression();
				this.state = 1923;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1922;
					this.whenClause();
					}
					}
					this.state = 1925;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === FlinkSqlParser.KW_WHEN);
				this.state = 1929;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_ELSE) {
					{
					this.state = 1927;
					this.match(FlinkSqlParser.KW_ELSE);
					this.state = 1928;
					(_localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1931;
				this.match(FlinkSqlParser.KW_END);
				}
				break;

			case 3:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1933;
				this.match(FlinkSqlParser.KW_CAST);
				this.state = 1934;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1935;
				this.expression();
				this.state = 1936;
				this.match(FlinkSqlParser.KW_AS);
				this.state = 1937;
				this.columnType();
				this.state = 1938;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 4:
				{
				_localctx = new FirstContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1940;
				this.match(FlinkSqlParser.KW_FIRST);
				this.state = 1941;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1942;
				this.expression();
				this.state = 1945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_IGNORE) {
					{
					this.state = 1943;
					this.match(FlinkSqlParser.KW_IGNORE);
					this.state = 1944;
					this.match(FlinkSqlParser.KW_NULLS);
					}
				}

				this.state = 1947;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 5:
				{
				_localctx = new LastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1949;
				this.match(FlinkSqlParser.KW_LAST);
				this.state = 1950;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1951;
				this.expression();
				this.state = 1954;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_IGNORE) {
					{
					this.state = 1952;
					this.match(FlinkSqlParser.KW_IGNORE);
					this.state = 1953;
					this.match(FlinkSqlParser.KW_NULLS);
					}
				}

				this.state = 1956;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 6:
				{
				_localctx = new PositionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1958;
				this.match(FlinkSqlParser.KW_POSITION);
				this.state = 1959;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1960;
				(_localctx as PositionContext)._substr = this.valueExpression(0);
				this.state = 1961;
				this.match(FlinkSqlParser.KW_IN);
				this.state = 1962;
				(_localctx as PositionContext)._str = this.valueExpression(0);
				this.state = 1963;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 7:
				{
				_localctx = new ConstantDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1965;
				this.constant();
				}
				break;

			case 8:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1966;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;

			case 9:
				{
				_localctx = new StarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1967;
				this.uid();
				this.state = 1968;
				this.match(FlinkSqlParser.DOT);
				this.state = 1969;
				this.match(FlinkSqlParser.ASTERISK_SIGN);
				}
				break;

			case 10:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1971;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1972;
				this.queryStatement(0);
				this.state = 1973;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 11:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1975;
				this.functionName();
				this.state = 1976;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1988;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSqlParser.KW_ABS) | (1 << FlinkSqlParser.KW_ALL) | (1 << FlinkSqlParser.KW_ARRAY) | (1 << FlinkSqlParser.KW_AVG))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (FlinkSqlParser.KW_BOTH - 33)) | (1 << (FlinkSqlParser.KW_CARDINALITY - 33)) | (1 << (FlinkSqlParser.KW_CASE - 33)) | (1 << (FlinkSqlParser.KW_CAST - 33)) | (1 << (FlinkSqlParser.KW_CEIL - 33)) | (1 << (FlinkSqlParser.KW_CEILING - 33)) | (1 << (FlinkSqlParser.KW_COALESCE - 33)) | (1 << (FlinkSqlParser.KW_COLLECT - 33)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (FlinkSqlParser.KW_COUNT - 69)) | (1 << (FlinkSqlParser.KW_CUME_DIST - 69)) | (1 << (FlinkSqlParser.KW_CURRENT_DATE - 69)) | (1 << (FlinkSqlParser.KW_CURRENT_TIME - 69)) | (1 << (FlinkSqlParser.KW_CURRENT_TIMESTAMP - 69)) | (1 << (FlinkSqlParser.KW_DATE - 69)) | (1 << (FlinkSqlParser.KW_DAY - 69)) | (1 << (FlinkSqlParser.KW_DAYOFWEEK - 69)) | (1 << (FlinkSqlParser.KW_DAYOFYEAR - 69)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (FlinkSqlParser.KW_DENSE_RANK - 107)) | (1 << (FlinkSqlParser.KW_DISTINCT - 107)) | (1 << (FlinkSqlParser.KW_ELEMENT - 107)) | (1 << (FlinkSqlParser.KW_EXISTS - 107)) | (1 << (FlinkSqlParser.KW_EXP - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (FlinkSqlParser.KW_EXTRACT - 139)) | (1 << (FlinkSqlParser.KW_FALSE - 139)) | (1 << (FlinkSqlParser.KW_FIRST_VALUE - 139)) | (1 << (FlinkSqlParser.KW_FLOOR - 139)) | (1 << (FlinkSqlParser.KW_GROUPING - 139)) | (1 << (FlinkSqlParser.KW_HOUR - 139)) | (1 << (FlinkSqlParser.KW_IF - 139)))) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & ((1 << (FlinkSqlParser.KW_INTERVAL - 182)) | (1 << (FlinkSqlParser.KW_LAG - 182)) | (1 << (FlinkSqlParser.KW_LAST_VALUE - 182)) | (1 << (FlinkSqlParser.KW_LEAD - 182)) | (1 << (FlinkSqlParser.KW_LEADING - 182)) | (1 << (FlinkSqlParser.KW_LEFT - 182)) | (1 << (FlinkSqlParser.KW_LN - 182)) | (1 << (FlinkSqlParser.KW_LOCALTIME - 182)) | (1 << (FlinkSqlParser.KW_LOCALTIMESTAMP - 182)) | (1 << (FlinkSqlParser.KW_LOWER - 182)))) !== 0) || ((((_la - 214)) & ~0x1F) === 0 && ((1 << (_la - 214)) & ((1 << (FlinkSqlParser.KW_MAX - 214)) | (1 << (FlinkSqlParser.KW_MIN - 214)) | (1 << (FlinkSqlParser.KW_MINUTE - 214)) | (1 << (FlinkSqlParser.KW_MOD - 214)) | (1 << (FlinkSqlParser.KW_MONTH - 214)) | (1 << (FlinkSqlParser.KW_NOT - 214)) | (1 << (FlinkSqlParser.KW_NTILE - 214)) | (1 << (FlinkSqlParser.KW_NULL - 214)) | (1 << (FlinkSqlParser.KW_NULLIF - 214)))) !== 0) || ((((_la - 264)) & ~0x1F) === 0 && ((1 << (_la - 264)) & ((1 << (FlinkSqlParser.KW_OVERLAY - 264)) | (1 << (FlinkSqlParser.KW_PERCENT_RANK - 264)) | (1 << (FlinkSqlParser.KW_POSITION - 264)) | (1 << (FlinkSqlParser.KW_POWER - 264)) | (1 << (FlinkSqlParser.KW_RANK - 264)))) !== 0) || ((((_la - 317)) & ~0x1F) === 0 && ((1 << (_la - 317)) & ((1 << (FlinkSqlParser.KW_RIGHT - 317)) | (1 << (FlinkSqlParser.KW_ROW - 317)) | (1 << (FlinkSqlParser.KW_ROWS - 317)) | (1 << (FlinkSqlParser.KW_ROW_NUMBER - 317)) | (1 << (FlinkSqlParser.KW_SECOND - 317)))) !== 0) || ((((_la - 357)) & ~0x1F) === 0 && ((1 << (_la - 357)) & ((1 << (FlinkSqlParser.KW_STDDEV_POP - 357)) | (1 << (FlinkSqlParser.KW_STDDEV_SAMP - 357)) | (1 << (FlinkSqlParser.KW_SUBSTRING - 357)) | (1 << (FlinkSqlParser.KW_SUM - 357)) | (1 << (FlinkSqlParser.KW_TIME - 357)) | (1 << (FlinkSqlParser.KW_TIMESTAMP - 357)) | (1 << (FlinkSqlParser.KW_TIMESTAMP_DIFF - 357)))) !== 0) || ((((_la - 389)) & ~0x1F) === 0 && ((1 << (_la - 389)) & ((1 << (FlinkSqlParser.KW_TRAILING - 389)) | (1 << (FlinkSqlParser.KW_TRIM - 389)) | (1 << (FlinkSqlParser.KW_TRUE - 389)) | (1 << (FlinkSqlParser.KW_TRUNCATE - 389)) | (1 << (FlinkSqlParser.KW_TRY_CAST - 389)) | (1 << (FlinkSqlParser.KW_UPPER - 389)) | (1 << (FlinkSqlParser.KW_VALUE - 389)) | (1 << (FlinkSqlParser.KW_VAR_POP - 389)) | (1 << (FlinkSqlParser.KW_VAR_SAMP - 389)))) !== 0) || ((((_la - 427)) & ~0x1F) === 0 && ((1 << (_la - 427)) & ((1 << (FlinkSqlParser.KW_WEEKS - 427)) | (1 << (FlinkSqlParser.KW_YEAR - 427)) | (1 << (FlinkSqlParser.KW_ADD - 427)) | (1 << (FlinkSqlParser.KW_AFTER - 427)) | (1 << (FlinkSqlParser.KW_ASC - 427)) | (1 << (FlinkSqlParser.KW_CASCADE - 427)) | (1 << (FlinkSqlParser.KW_CATALOG - 427)) | (1 << (FlinkSqlParser.KW_CENTURY - 427)) | (1 << (FlinkSqlParser.KW_CONFIG - 427)) | (1 << (FlinkSqlParser.KW_CONSTRAINTS - 427)) | (1 << (FlinkSqlParser.KW_CUMULATE - 427)) | (1 << (FlinkSqlParser.KW_DATA - 427)) | (1 << (FlinkSqlParser.KW_DATABASE - 427)) | (1 << (FlinkSqlParser.KW_DAYS - 427)) | (1 << (FlinkSqlParser.KW_DECADE - 427)) | (1 << (FlinkSqlParser.KW_DESC - 427)) | (1 << (FlinkSqlParser.KW_DESCRIPTOR - 427)) | (1 << (FlinkSqlParser.KW_DIV - 427)) | (1 << (FlinkSqlParser.KW_ENGINE - 427)) | (1 << (FlinkSqlParser.KW_EPOCH - 427)) | (1 << (FlinkSqlParser.KW_EXCLUDING - 427)) | (1 << (FlinkSqlParser.KW_FILE - 427)) | (1 << (FlinkSqlParser.KW_FIRST - 427)) | (1 << (FlinkSqlParser.KW_GENERATED - 427)))) !== 0) || ((((_la - 459)) & ~0x1F) === 0 && ((1 << (_la - 459)) & ((1 << (FlinkSqlParser.KW_HOP - 459)) | (1 << (FlinkSqlParser.KW_HOURS - 459)) | (1 << (FlinkSqlParser.KW_IGNORE - 459)) | (1 << (FlinkSqlParser.KW_INCLUDING - 459)) | (1 << (FlinkSqlParser.KW_JAR - 459)) | (1 << (FlinkSqlParser.KW_JARS - 459)) | (1 << (FlinkSqlParser.KW_JAVA - 459)) | (1 << (FlinkSqlParser.KW_KEY - 459)) | (1 << (FlinkSqlParser.KW_LAST - 459)) | (1 << (FlinkSqlParser.KW_LOAD - 459)) | (1 << (FlinkSqlParser.KW_MAP - 459)) | (1 << (FlinkSqlParser.KW_MICROSECOND - 459)) | (1 << (FlinkSqlParser.KW_MILLENNIUM - 459)) | (1 << (FlinkSqlParser.KW_MILLISECOND - 459)) | (1 << (FlinkSqlParser.KW_MINUTES - 459)) | (1 << (FlinkSqlParser.KW_MONTHS - 459)) | (1 << (FlinkSqlParser.KW_NANOSECOND - 459)) | (1 << (FlinkSqlParser.KW_NULLS - 459)) | (1 << (FlinkSqlParser.KW_OPTIONS - 459)) | (1 << (FlinkSqlParser.KW_PAST - 459)) | (1 << (FlinkSqlParser.KW_PLAN - 459)) | (1 << (FlinkSqlParser.KW_PRECEDING - 459)) | (1 << (FlinkSqlParser.KW_PYTHON - 459)) | (1 << (FlinkSqlParser.KW_PYTHON_ARCHIVES - 459)) | (1 << (FlinkSqlParser.KW_PYTHON_DEPENDENCIES - 459)) | (1 << (FlinkSqlParser.KW_PYTHON_FILES - 459)) | (1 << (FlinkSqlParser.KW_PYTHON_JAR - 459)) | (1 << (FlinkSqlParser.KW_PYTHON_PARAMETER - 459)) | (1 << (FlinkSqlParser.KW_PYTHON_REQUIREMENTS - 459)) | (1 << (FlinkSqlParser.KW_QUARTER - 459)) | (1 << (FlinkSqlParser.KW_REMOVE - 459)) | (1 << (FlinkSqlParser.KW_RESTRICT - 459)))) !== 0) || ((((_la - 491)) & ~0x1F) === 0 && ((1 << (_la - 491)) & ((1 << (FlinkSqlParser.KW_SECONDS - 491)) | (1 << (FlinkSqlParser.KW_SESSION - 491)) | (1 << (FlinkSqlParser.KW_SETS - 491)) | (1 << (FlinkSqlParser.KW_SIZE - 491)) | (1 << (FlinkSqlParser.KW_SLIDE - 491)) | (1 << (FlinkSqlParser.KW_STEP - 491)) | (1 << (FlinkSqlParser.KW_TEMPORARY - 491)) | (1 << (FlinkSqlParser.KW_TIMECOL - 491)) | (1 << (FlinkSqlParser.KW_TUMBLE - 491)) | (1 << (FlinkSqlParser.KW_UNLOAD - 491)) | (1 << (FlinkSqlParser.KW_VIEW - 491)) | (1 << (FlinkSqlParser.KW_WEEK - 491)) | (1 << (FlinkSqlParser.KW_YEARS - 491)) | (1 << (FlinkSqlParser.KW_ZONE - 491)) | (1 << (FlinkSqlParser.BIT_NOT_OP - 491)) | (1 << (FlinkSqlParser.LR_BRACKET - 491)))) !== 0) || ((((_la - 527)) & ~0x1F) === 0 && ((1 << (_la - 527)) & ((1 << (FlinkSqlParser.ASTERISK_SIGN - 527)) | (1 << (FlinkSqlParser.HYPNEN_SIGN - 527)) | (1 << (FlinkSqlParser.ADD_SIGN - 527)) | (1 << (FlinkSqlParser.STRING_LITERAL - 527)) | (1 << (FlinkSqlParser.DIG_LITERAL - 527)) | (1 << (FlinkSqlParser.REAL_LITERAL - 527)) | (1 << (FlinkSqlParser.BIT_STRING - 527)) | (1 << (FlinkSqlParser.ID_LITERAL - 527)))) !== 0)) {
					{
					this.state = 1978;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 233, this._ctx) ) {
					case 1:
						{
						this.state = 1977;
						this.setQuantifier();
						}
						break;
					}
					this.state = 1980;
					this.functionParam();
					this.state = 1985;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === FlinkSqlParser.COMMA) {
						{
						{
						this.state = 1981;
						this.match(FlinkSqlParser.COMMA);
						this.state = 1982;
						this.functionParam();
						}
						}
						this.state = 1987;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1990;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 12:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1992;
				this.identifier();
				}
				break;

			case 13:
				{
				_localctx = new DereferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1993;
				this.dereferenceDefinition();
				}
				break;

			case 14:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1994;
				this.match(FlinkSqlParser.LR_BRACKET);
				this.state = 1995;
				this.expression();
				this.state = 1996;
				this.match(FlinkSqlParser.RR_BRACKET);
				}
				break;

			case 15:
				{
				_localctx = new DateFunctionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1998;
				this.match(FlinkSqlParser.KW_CURRENT_TIMESTAMP);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2008;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 237, this._ctx);
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
					this.state = 2001;
					if (!(this.precpred(this._ctx, 5))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
					}
					this.state = 2002;
					this.match(FlinkSqlParser.LS_BRACKET);
					this.state = 2003;
					(_localctx as SubscriptContext)._index = this.valueExpression(0);
					this.state = 2004;
					this.match(FlinkSqlParser.RS_BRACKET);
					}
					}
				}
				this.state = 2010;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 237, this._ctx);
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
	public functionNameCreate(): FunctionNameCreateContext {
		let _localctx: FunctionNameCreateContext = new FunctionNameCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, FlinkSqlParser.RULE_functionNameCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2011;
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
	public functionName(): FunctionNameContext {
		let _localctx: FunctionNameContext = new FunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, FlinkSqlParser.RULE_functionName);
		try {
			this.state = 2015;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 238, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2013;
				this.reservedKeywordsUsedAsFuncName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2014;
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
			this.state = 2021;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 239, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2017;
				this.reservedKeywordsUsedAsFuncParam();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2018;
				this.timeIntervalUnit();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2019;
				this.timePointUnit();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2020;
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
			this.state = 2023;
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
			this.state = 2025;
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
			this.state = 2029;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2027;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2028;
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
			this.state = 2031;
			this.match(FlinkSqlParser.KW_INTERVAL);
			this.state = 2034;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 241, this._ctx) ) {
			case 1:
				{
				this.state = 2032;
				this.errorCapturingMultiUnitsInterval();
				}
				break;

			case 2:
				{
				this.state = 2033;
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
			this.state = 2036;
			this.multiUnitsInterval();
			this.state = 2038;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				{
				this.state = 2037;
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
			this.state = 2043;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2040;
					this.intervalValue();
					this.state = 2041;
					this.timeIntervalUnit();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2045;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 243, this._ctx);
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
			this.state = 2047;
			_localctx._body = this.unitToUnitInterval();
			this.state = 2050;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 244, this._ctx) ) {
			case 1:
				{
				this.state = 2048;
				_localctx._error1 = this.multiUnitsInterval();
				}
				break;

			case 2:
				{
				this.state = 2049;
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
			this.state = 2052;
			_localctx._value = this.intervalValue();
			this.state = 2053;
			_localctx._from = this.timeIntervalUnit();
			this.state = 2054;
			this.match(FlinkSqlParser.KW_TO);
			this.state = 2055;
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
			this.state = 2062;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.HYPNEN_SIGN:
			case FlinkSqlParser.ADD_SIGN:
			case FlinkSqlParser.DIG_LITERAL:
			case FlinkSqlParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2058;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.HYPNEN_SIGN || _la === FlinkSqlParser.ADD_SIGN) {
					{
					this.state = 2057;
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

				this.state = 2060;
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
				this.state = 2061;
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
	public tableAlias(): TableAliasContext {
		let _localctx: TableAliasContext = new TableAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, FlinkSqlParser.RULE_tableAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2065;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_AS) {
				{
				this.state = 2064;
				this.match(FlinkSqlParser.KW_AS);
				}
			}

			this.state = 2067;
			this.identifier();
			this.state = 2069;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 248, this._ctx) ) {
			case 1:
				{
				this.state = 2068;
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
		this.enterRule(_localctx, 298, FlinkSqlParser.RULE_errorCapturingIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2071;
			this.identifier();
			this.state = 2072;
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
		this.enterRule(_localctx, 300, FlinkSqlParser.RULE_errorCapturingIdentifierExtra);
		let _la: number;
		try {
			this.state = 2081;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_MINUS:
				_localctx = new ErrorIdentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2076;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2074;
					this.match(FlinkSqlParser.KW_MINUS);
					this.state = 2075;
					this.identifier();
					}
					}
					this.state = 2078;
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
		this.enterRule(_localctx, 302, FlinkSqlParser.RULE_identifierList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2083;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 2084;
			this.identifierSeq();
			this.state = 2085;
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
		this.enterRule(_localctx, 304, FlinkSqlParser.RULE_identifierSeq);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2087;
			this.identifier();
			this.state = 2092;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 2088;
				this.match(FlinkSqlParser.COMMA);
				this.state = 2089;
				this.identifier();
				}
				}
				this.state = 2094;
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
		this.enterRule(_localctx, 306, FlinkSqlParser.RULE_identifier);
		try {
			this.state = 2098;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.DIG_LITERAL:
			case FlinkSqlParser.ID_LITERAL:
				_localctx = new UnquotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2095;
				this.unquotedIdentifier();
				}
				break;
			case FlinkSqlParser.STRING_LITERAL:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2096;
				this.quotedIdentifier();
				}
				break;
			case FlinkSqlParser.KW_ADD:
			case FlinkSqlParser.KW_AFTER:
			case FlinkSqlParser.KW_ASC:
			case FlinkSqlParser.KW_CASCADE:
			case FlinkSqlParser.KW_CATALOG:
			case FlinkSqlParser.KW_CENTURY:
			case FlinkSqlParser.KW_CONFIG:
			case FlinkSqlParser.KW_CONSTRAINTS:
			case FlinkSqlParser.KW_CUMULATE:
			case FlinkSqlParser.KW_DATA:
			case FlinkSqlParser.KW_DATABASE:
			case FlinkSqlParser.KW_DAYS:
			case FlinkSqlParser.KW_DECADE:
			case FlinkSqlParser.KW_DESC:
			case FlinkSqlParser.KW_DESCRIPTOR:
			case FlinkSqlParser.KW_DIV:
			case FlinkSqlParser.KW_ENGINE:
			case FlinkSqlParser.KW_EPOCH:
			case FlinkSqlParser.KW_EXCLUDING:
			case FlinkSqlParser.KW_FILE:
			case FlinkSqlParser.KW_FIRST:
			case FlinkSqlParser.KW_GENERATED:
			case FlinkSqlParser.KW_HOP:
			case FlinkSqlParser.KW_HOURS:
			case FlinkSqlParser.KW_IGNORE:
			case FlinkSqlParser.KW_INCLUDING:
			case FlinkSqlParser.KW_JAR:
			case FlinkSqlParser.KW_JARS:
			case FlinkSqlParser.KW_JAVA:
			case FlinkSqlParser.KW_KEY:
			case FlinkSqlParser.KW_LAST:
			case FlinkSqlParser.KW_LOAD:
			case FlinkSqlParser.KW_MAP:
			case FlinkSqlParser.KW_MICROSECOND:
			case FlinkSqlParser.KW_MILLENNIUM:
			case FlinkSqlParser.KW_MILLISECOND:
			case FlinkSqlParser.KW_MINUTES:
			case FlinkSqlParser.KW_MONTHS:
			case FlinkSqlParser.KW_NANOSECOND:
			case FlinkSqlParser.KW_NULLS:
			case FlinkSqlParser.KW_OPTIONS:
			case FlinkSqlParser.KW_PAST:
			case FlinkSqlParser.KW_PLAN:
			case FlinkSqlParser.KW_PRECEDING:
			case FlinkSqlParser.KW_PYTHON:
			case FlinkSqlParser.KW_PYTHON_ARCHIVES:
			case FlinkSqlParser.KW_PYTHON_DEPENDENCIES:
			case FlinkSqlParser.KW_PYTHON_FILES:
			case FlinkSqlParser.KW_PYTHON_JAR:
			case FlinkSqlParser.KW_PYTHON_PARAMETER:
			case FlinkSqlParser.KW_PYTHON_REQUIREMENTS:
			case FlinkSqlParser.KW_QUARTER:
			case FlinkSqlParser.KW_REMOVE:
			case FlinkSqlParser.KW_RESTRICT:
			case FlinkSqlParser.KW_SECONDS:
			case FlinkSqlParser.KW_SESSION:
			case FlinkSqlParser.KW_SETS:
			case FlinkSqlParser.KW_SIZE:
			case FlinkSqlParser.KW_SLIDE:
			case FlinkSqlParser.KW_STEP:
			case FlinkSqlParser.KW_TEMPORARY:
			case FlinkSqlParser.KW_TIMECOL:
			case FlinkSqlParser.KW_TUMBLE:
			case FlinkSqlParser.KW_UNLOAD:
			case FlinkSqlParser.KW_VIEW:
			case FlinkSqlParser.KW_WEEK:
			case FlinkSqlParser.KW_YEARS:
			case FlinkSqlParser.KW_ZONE:
				_localctx = new NonReservedKeywordsAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2097;
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
		this.enterRule(_localctx, 308, FlinkSqlParser.RULE_unquotedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2100;
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
		this.enterRule(_localctx, 310, FlinkSqlParser.RULE_quotedIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2102;
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
		this.enterRule(_localctx, 312, FlinkSqlParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2104;
			this.match(FlinkSqlParser.KW_WHEN);
			this.state = 2105;
			_localctx._condition = this.expression();
			this.state = 2106;
			this.match(FlinkSqlParser.KW_THEN);
			this.state = 2107;
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
	public catalogPath(): CatalogPathContext {
		let _localctx: CatalogPathContext = new CatalogPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, FlinkSqlParser.RULE_catalogPath);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2109;
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
	public catalogPathCreate(): CatalogPathCreateContext {
		let _localctx: CatalogPathCreateContext = new CatalogPathCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, FlinkSqlParser.RULE_catalogPathCreate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2111;
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
	public databasePath(): DatabasePathContext {
		let _localctx: DatabasePathContext = new DatabasePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, FlinkSqlParser.RULE_databasePath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2113;
			this.identifier();
			this.state = 2116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.DOT) {
				{
				this.state = 2114;
				this.match(FlinkSqlParser.DOT);
				this.state = 2115;
				this.identifier();
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
	public databasePathCreate(): DatabasePathCreateContext {
		let _localctx: DatabasePathCreateContext = new DatabasePathCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, FlinkSqlParser.RULE_databasePathCreate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2118;
			this.identifier();
			this.state = 2121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.DOT) {
				{
				this.state = 2119;
				this.match(FlinkSqlParser.DOT);
				this.state = 2120;
				this.identifier();
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
	public tablePathCreate(): TablePathCreateContext {
		let _localctx: TablePathCreateContext = new TablePathCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, FlinkSqlParser.RULE_tablePathCreate);
		let _la: number;
		try {
			this.state = 2135;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 257, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2123;
				this.identifier();
				this.state = 2126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.DOT) {
					{
					this.state = 2124;
					this.match(FlinkSqlParser.DOT);
					this.state = 2125;
					this.identifier();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2128;
				this.identifier();
				this.state = 2129;
				this.match(FlinkSqlParser.DOT);
				this.state = 2130;
				this.identifier();
				this.state = 2133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.DOT) {
					{
					this.state = 2131;
					this.match(FlinkSqlParser.DOT);
					this.state = 2132;
					this.identifier();
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
	public tablePath(): TablePathContext {
		let _localctx: TablePathContext = new TablePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, FlinkSqlParser.RULE_tablePath);
		try {
			this.state = 2149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 260, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2137;
				this.identifier();
				this.state = 2140;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 258, this._ctx) ) {
				case 1:
					{
					this.state = 2138;
					this.match(FlinkSqlParser.DOT);
					this.state = 2139;
					this.identifier();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2142;
				this.identifier();
				this.state = 2143;
				this.match(FlinkSqlParser.DOT);
				this.state = 2144;
				this.identifier();
				this.state = 2147;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 259, this._ctx) ) {
				case 1:
					{
					this.state = 2145;
					this.match(FlinkSqlParser.DOT);
					this.state = 2146;
					this.identifier();
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
	public viewPath(): ViewPathContext {
		let _localctx: ViewPathContext = new ViewPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, FlinkSqlParser.RULE_viewPath);
		try {
			this.state = 2163;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 263, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2151;
				this.identifier();
				this.state = 2154;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 261, this._ctx) ) {
				case 1:
					{
					this.state = 2152;
					this.match(FlinkSqlParser.DOT);
					this.state = 2153;
					this.identifier();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2156;
				this.identifier();
				this.state = 2157;
				this.match(FlinkSqlParser.DOT);
				this.state = 2158;
				this.identifier();
				this.state = 2161;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 262, this._ctx) ) {
				case 1:
					{
					this.state = 2159;
					this.match(FlinkSqlParser.DOT);
					this.state = 2160;
					this.identifier();
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
	public viewPathCreate(): ViewPathCreateContext {
		let _localctx: ViewPathCreateContext = new ViewPathCreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, FlinkSqlParser.RULE_viewPathCreate);
		let _la: number;
		try {
			this.state = 2177;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 266, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2165;
				this.identifier();
				this.state = 2168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.DOT) {
					{
					this.state = 2166;
					this.match(FlinkSqlParser.DOT);
					this.state = 2167;
					this.identifier();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2170;
				this.identifier();
				this.state = 2171;
				this.match(FlinkSqlParser.DOT);
				this.state = 2172;
				this.identifier();
				this.state = 2175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.DOT) {
					{
					this.state = 2173;
					this.match(FlinkSqlParser.DOT);
					this.state = 2174;
					this.identifier();
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
	public uid(): UidContext {
		let _localctx: UidContext = new UidContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, FlinkSqlParser.RULE_uid);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2179;
			this.identifier();
			this.state = 2184;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 267, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 2180;
					this.match(FlinkSqlParser.DOT);
					this.state = 2181;
					this.identifier();
					}
					}
				}
				this.state = 2186;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 267, this._ctx);
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
		this.enterRule(_localctx, 332, FlinkSqlParser.RULE_withOption);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2187;
			this.match(FlinkSqlParser.KW_WITH);
			this.state = 2188;
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
		this.enterRule(_localctx, 334, FlinkSqlParser.RULE_ifNotExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2190;
			this.match(FlinkSqlParser.KW_IF);
			this.state = 2191;
			this.match(FlinkSqlParser.KW_NOT);
			this.state = 2192;
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
		this.enterRule(_localctx, 336, FlinkSqlParser.RULE_ifExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2194;
			this.match(FlinkSqlParser.KW_IF);
			this.state = 2195;
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
		this.enterRule(_localctx, 338, FlinkSqlParser.RULE_tablePropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2197;
			this.match(FlinkSqlParser.LR_BRACKET);
			this.state = 2198;
			this.tableProperty();
			this.state = 2203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FlinkSqlParser.COMMA) {
				{
				{
				this.state = 2199;
				this.match(FlinkSqlParser.COMMA);
				this.state = 2200;
				this.tableProperty();
				}
				}
				this.state = 2205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2206;
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
		this.enterRule(_localctx, 340, FlinkSqlParser.RULE_tableProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2208;
			_localctx._key = this.tablePropertyKey();
			this.state = 2213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FlinkSqlParser.KW_FALSE || _la === FlinkSqlParser.KW_TRUE || _la === FlinkSqlParser.EQUAL_SYMBOL || ((((_la - 537)) & ~0x1F) === 0 && ((1 << (_la - 537)) & ((1 << (FlinkSqlParser.STRING_LITERAL - 537)) | (1 << (FlinkSqlParser.DIG_LITERAL - 537)) | (1 << (FlinkSqlParser.REAL_LITERAL - 537)))) !== 0)) {
				{
				this.state = 2210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.EQUAL_SYMBOL) {
					{
					this.state = 2209;
					this.match(FlinkSqlParser.EQUAL_SYMBOL);
					}
				}

				this.state = 2212;
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
		this.enterRule(_localctx, 342, FlinkSqlParser.RULE_tablePropertyKey);
		try {
			this.state = 2218;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 271, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2215;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2216;
				this.dereferenceDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2217;
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
		this.enterRule(_localctx, 344, FlinkSqlParser.RULE_tablePropertyValue);
		try {
			this.state = 2224;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.DIG_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2220;
				this.match(FlinkSqlParser.DIG_LITERAL);
				}
				break;
			case FlinkSqlParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2221;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case FlinkSqlParser.KW_FALSE:
			case FlinkSqlParser.KW_TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2222;
				this.booleanLiteral();
				}
				break;
			case FlinkSqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2223;
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
		this.enterRule(_localctx, 346, FlinkSqlParser.RULE_logicalOperator);
		try {
			this.state = 2232;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_AND:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2226;
				this.match(FlinkSqlParser.KW_AND);
				}
				break;
			case FlinkSqlParser.BIT_AND_OP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2227;
				this.match(FlinkSqlParser.BIT_AND_OP);
				this.state = 2228;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case FlinkSqlParser.KW_OR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2229;
				this.match(FlinkSqlParser.KW_OR);
				}
				break;
			case FlinkSqlParser.BIT_OR_OP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2230;
				this.match(FlinkSqlParser.BIT_OR_OP);
				this.state = 2231;
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
		this.enterRule(_localctx, 348, FlinkSqlParser.RULE_comparisonOperator);
		try {
			this.state = 2248;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 274, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2234;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2235;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2236;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2237;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2238;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2239;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 2240;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2241;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2242;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2243;
				this.match(FlinkSqlParser.EXCLAMATION_SYMBOL);
				this.state = 2244;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2245;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2246;
				this.match(FlinkSqlParser.EQUAL_SYMBOL);
				this.state = 2247;
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
		this.enterRule(_localctx, 350, FlinkSqlParser.RULE_bitOperator);
		try {
			this.state = 2257;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.LESS_SYMBOL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2250;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				this.state = 2251;
				this.match(FlinkSqlParser.LESS_SYMBOL);
				}
				break;
			case FlinkSqlParser.GREATER_SYMBOL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2252;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				this.state = 2253;
				this.match(FlinkSqlParser.GREATER_SYMBOL);
				}
				break;
			case FlinkSqlParser.BIT_AND_OP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2254;
				this.match(FlinkSqlParser.BIT_AND_OP);
				}
				break;
			case FlinkSqlParser.BIT_XOR_OP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2255;
				this.match(FlinkSqlParser.BIT_XOR_OP);
				}
				break;
			case FlinkSqlParser.BIT_OR_OP:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2256;
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
		this.enterRule(_localctx, 352, FlinkSqlParser.RULE_mathOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2259;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_DIV || ((((_la - 527)) & ~0x1F) === 0 && ((1 << (_la - 527)) & ((1 << (FlinkSqlParser.ASTERISK_SIGN - 527)) | (1 << (FlinkSqlParser.HYPNEN_SIGN - 527)) | (1 << (FlinkSqlParser.ADD_SIGN - 527)) | (1 << (FlinkSqlParser.PENCENT_SIGN - 527)) | (1 << (FlinkSqlParser.DOUBLE_HYPNEN_SIGN - 527)) | (1 << (FlinkSqlParser.SLASH_SIGN - 527)))) !== 0))) {
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
		this.enterRule(_localctx, 354, FlinkSqlParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2261;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_NOT || ((((_la - 508)) & ~0x1F) === 0 && ((1 << (_la - 508)) & ((1 << (FlinkSqlParser.EXCLAMATION_SYMBOL - 508)) | (1 << (FlinkSqlParser.BIT_NOT_OP - 508)) | (1 << (FlinkSqlParser.HYPNEN_SIGN - 508)) | (1 << (FlinkSqlParser.ADD_SIGN - 508)))) !== 0))) {
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
		this.enterRule(_localctx, 356, FlinkSqlParser.RULE_constant);
		let _la: number;
		try {
			this.state = 2277;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FlinkSqlParser.KW_INTERVAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2263;
				this.timeIntervalExpression();
				}
				break;
			case FlinkSqlParser.KW_DAY:
			case FlinkSqlParser.KW_HOUR:
			case FlinkSqlParser.KW_MINUTE:
			case FlinkSqlParser.KW_MONTH:
			case FlinkSqlParser.KW_SECOND:
			case FlinkSqlParser.KW_YEAR:
			case FlinkSqlParser.KW_MICROSECOND:
			case FlinkSqlParser.KW_MILLISECOND:
			case FlinkSqlParser.KW_QUARTER:
			case FlinkSqlParser.KW_WEEK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2264;
				this.timePointLiteral();
				}
				break;
			case FlinkSqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2265;
				this.stringLiteral();
				}
				break;
			case FlinkSqlParser.HYPNEN_SIGN:
			case FlinkSqlParser.DIG_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.HYPNEN_SIGN) {
					{
					this.state = 2266;
					this.match(FlinkSqlParser.HYPNEN_SIGN);
					}
				}

				this.state = 2269;
				this.decimalLiteral();
				}
				break;
			case FlinkSqlParser.KW_FALSE:
			case FlinkSqlParser.KW_TRUE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2270;
				this.booleanLiteral();
				}
				break;
			case FlinkSqlParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2271;
				this.match(FlinkSqlParser.REAL_LITERAL);
				}
				break;
			case FlinkSqlParser.BIT_STRING:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2272;
				this.match(FlinkSqlParser.BIT_STRING);
				}
				break;
			case FlinkSqlParser.KW_NOT:
			case FlinkSqlParser.KW_NULL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FlinkSqlParser.KW_NOT) {
					{
					this.state = 2273;
					this.match(FlinkSqlParser.KW_NOT);
					}
				}

				this.state = 2276;
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
		this.enterRule(_localctx, 358, FlinkSqlParser.RULE_timePointLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2279;
			this.timePointUnit();
			this.state = 2280;
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
		this.enterRule(_localctx, 360, FlinkSqlParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2282;
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
		this.enterRule(_localctx, 362, FlinkSqlParser.RULE_decimalLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2284;
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
		this.enterRule(_localctx, 364, FlinkSqlParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2286;
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
		this.enterRule(_localctx, 366, FlinkSqlParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2288;
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
		this.enterRule(_localctx, 368, FlinkSqlParser.RULE_timePointUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2290;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_DAY || _la === FlinkSqlParser.KW_HOUR || _la === FlinkSqlParser.KW_MINUTE || _la === FlinkSqlParser.KW_MONTH || _la === FlinkSqlParser.KW_SECOND || _la === FlinkSqlParser.KW_YEAR || ((((_la - 470)) & ~0x1F) === 0 && ((1 << (_la - 470)) & ((1 << (FlinkSqlParser.KW_MICROSECOND - 470)) | (1 << (FlinkSqlParser.KW_MILLISECOND - 470)) | (1 << (FlinkSqlParser.KW_QUARTER - 470)))) !== 0) || _la === FlinkSqlParser.KW_WEEK)) {
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
		this.enterRule(_localctx, 370, FlinkSqlParser.RULE_timeIntervalUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2292;
			_la = this._input.LA(1);
			if (!(_la === FlinkSqlParser.KW_DAY || _la === FlinkSqlParser.KW_HOUR || _la === FlinkSqlParser.KW_MINUTE || _la === FlinkSqlParser.KW_MONTH || _la === FlinkSqlParser.KW_SECOND || ((((_la - 427)) & ~0x1F) === 0 && ((1 << (_la - 427)) & ((1 << (FlinkSqlParser.KW_WEEKS - 427)) | (1 << (FlinkSqlParser.KW_YEAR - 427)) | (1 << (FlinkSqlParser.KW_CENTURY - 427)) | (1 << (FlinkSqlParser.KW_DAYS - 427)) | (1 << (FlinkSqlParser.KW_DECADE - 427)) | (1 << (FlinkSqlParser.KW_EPOCH - 427)))) !== 0) || ((((_la - 460)) & ~0x1F) === 0 && ((1 << (_la - 460)) & ((1 << (FlinkSqlParser.KW_HOURS - 460)) | (1 << (FlinkSqlParser.KW_MICROSECOND - 460)) | (1 << (FlinkSqlParser.KW_MILLENNIUM - 460)) | (1 << (FlinkSqlParser.KW_MILLISECOND - 460)) | (1 << (FlinkSqlParser.KW_MINUTES - 460)) | (1 << (FlinkSqlParser.KW_MONTHS - 460)) | (1 << (FlinkSqlParser.KW_NANOSECOND - 460)) | (1 << (FlinkSqlParser.KW_QUARTER - 460)) | (1 << (FlinkSqlParser.KW_SECONDS - 460)))) !== 0) || _la === FlinkSqlParser.KW_WEEK || _la === FlinkSqlParser.KW_YEARS)) {
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
		this.enterRule(_localctx, 372, FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2294;
			_la = this._input.LA(1);
			if (!(((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & ((1 << (FlinkSqlParser.KW_ALL - 5)) | (1 << (FlinkSqlParser.KW_ARRAY - 5)) | (1 << (FlinkSqlParser.KW_BOTH - 5)))) !== 0) || _la === FlinkSqlParser.KW_CURRENT_TIMESTAMP || _la === FlinkSqlParser.KW_DISTINCT || _la === FlinkSqlParser.KW_LEADING || _la === FlinkSqlParser.KW_TRAILING || _la === FlinkSqlParser.KW_VALUE || _la === FlinkSqlParser.ASTERISK_SIGN)) {
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
		this.enterRule(_localctx, 374, FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2296;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FlinkSqlParser.KW_ABS) | (1 << FlinkSqlParser.KW_ARRAY) | (1 << FlinkSqlParser.KW_AVG))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (FlinkSqlParser.KW_CARDINALITY - 38)) | (1 << (FlinkSqlParser.KW_CAST - 38)) | (1 << (FlinkSqlParser.KW_CEIL - 38)) | (1 << (FlinkSqlParser.KW_CEILING - 38)) | (1 << (FlinkSqlParser.KW_COALESCE - 38)) | (1 << (FlinkSqlParser.KW_COLLECT - 38)) | (1 << (FlinkSqlParser.KW_COUNT - 38)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (FlinkSqlParser.KW_CUME_DIST - 75)) | (1 << (FlinkSqlParser.KW_CURRENT_DATE - 75)) | (1 << (FlinkSqlParser.KW_CURRENT_TIME - 75)) | (1 << (FlinkSqlParser.KW_CURRENT_TIMESTAMP - 75)) | (1 << (FlinkSqlParser.KW_DATE - 75)) | (1 << (FlinkSqlParser.KW_DAYOFWEEK - 75)) | (1 << (FlinkSqlParser.KW_DAYOFYEAR - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (FlinkSqlParser.KW_DENSE_RANK - 107)) | (1 << (FlinkSqlParser.KW_ELEMENT - 107)) | (1 << (FlinkSqlParser.KW_EXP - 107)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (FlinkSqlParser.KW_EXTRACT - 139)) | (1 << (FlinkSqlParser.KW_FIRST_VALUE - 139)) | (1 << (FlinkSqlParser.KW_FLOOR - 139)) | (1 << (FlinkSqlParser.KW_GROUPING - 139)) | (1 << (FlinkSqlParser.KW_HOUR - 139)) | (1 << (FlinkSqlParser.KW_IF - 139)))) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & ((1 << (FlinkSqlParser.KW_LAG - 194)) | (1 << (FlinkSqlParser.KW_LAST_VALUE - 194)) | (1 << (FlinkSqlParser.KW_LEAD - 194)) | (1 << (FlinkSqlParser.KW_LEFT - 194)) | (1 << (FlinkSqlParser.KW_LN - 194)) | (1 << (FlinkSqlParser.KW_LOCALTIME - 194)) | (1 << (FlinkSqlParser.KW_LOCALTIMESTAMP - 194)) | (1 << (FlinkSqlParser.KW_LOWER - 194)) | (1 << (FlinkSqlParser.KW_MAX - 194)) | (1 << (FlinkSqlParser.KW_MIN - 194)) | (1 << (FlinkSqlParser.KW_MINUTE - 194)) | (1 << (FlinkSqlParser.KW_MOD - 194)))) !== 0) || ((((_la - 229)) & ~0x1F) === 0 && ((1 << (_la - 229)) & ((1 << (FlinkSqlParser.KW_MONTH - 229)) | (1 << (FlinkSqlParser.KW_NTILE - 229)) | (1 << (FlinkSqlParser.KW_NULLIF - 229)))) !== 0) || ((((_la - 264)) & ~0x1F) === 0 && ((1 << (_la - 264)) & ((1 << (FlinkSqlParser.KW_OVERLAY - 264)) | (1 << (FlinkSqlParser.KW_PERCENT_RANK - 264)) | (1 << (FlinkSqlParser.KW_POSITION - 264)) | (1 << (FlinkSqlParser.KW_POWER - 264)) | (1 << (FlinkSqlParser.KW_RANK - 264)))) !== 0) || ((((_la - 317)) & ~0x1F) === 0 && ((1 << (_la - 317)) & ((1 << (FlinkSqlParser.KW_RIGHT - 317)) | (1 << (FlinkSqlParser.KW_ROW - 317)) | (1 << (FlinkSqlParser.KW_ROWS - 317)) | (1 << (FlinkSqlParser.KW_ROW_NUMBER - 317)) | (1 << (FlinkSqlParser.KW_SECOND - 317)))) !== 0) || ((((_la - 357)) & ~0x1F) === 0 && ((1 << (_la - 357)) & ((1 << (FlinkSqlParser.KW_STDDEV_POP - 357)) | (1 << (FlinkSqlParser.KW_STDDEV_SAMP - 357)) | (1 << (FlinkSqlParser.KW_SUBSTRING - 357)) | (1 << (FlinkSqlParser.KW_SUM - 357)) | (1 << (FlinkSqlParser.KW_TIME - 357)) | (1 << (FlinkSqlParser.KW_TIMESTAMP - 357)) | (1 << (FlinkSqlParser.KW_TIMESTAMP_DIFF - 357)))) !== 0) || ((((_la - 395)) & ~0x1F) === 0 && ((1 << (_la - 395)) & ((1 << (FlinkSqlParser.KW_TRIM - 395)) | (1 << (FlinkSqlParser.KW_TRUNCATE - 395)) | (1 << (FlinkSqlParser.KW_TRY_CAST - 395)) | (1 << (FlinkSqlParser.KW_UPPER - 395)) | (1 << (FlinkSqlParser.KW_VAR_POP - 395)) | (1 << (FlinkSqlParser.KW_VAR_SAMP - 395)))) !== 0) || _la === FlinkSqlParser.KW_YEAR || _la === FlinkSqlParser.KW_MAP || _la === FlinkSqlParser.KW_QUARTER || _la === FlinkSqlParser.KW_WEEK)) {
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
		this.enterRule(_localctx, 376, FlinkSqlParser.RULE_nonReservedKeywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2298;
			_la = this._input.LA(1);
			if (!(((((_la - 437)) & ~0x1F) === 0 && ((1 << (_la - 437)) & ((1 << (FlinkSqlParser.KW_ADD - 437)) | (1 << (FlinkSqlParser.KW_AFTER - 437)) | (1 << (FlinkSqlParser.KW_ASC - 437)) | (1 << (FlinkSqlParser.KW_CASCADE - 437)) | (1 << (FlinkSqlParser.KW_CATALOG - 437)) | (1 << (FlinkSqlParser.KW_CENTURY - 437)) | (1 << (FlinkSqlParser.KW_CONFIG - 437)) | (1 << (FlinkSqlParser.KW_CONSTRAINTS - 437)) | (1 << (FlinkSqlParser.KW_CUMULATE - 437)) | (1 << (FlinkSqlParser.KW_DATA - 437)) | (1 << (FlinkSqlParser.KW_DATABASE - 437)) | (1 << (FlinkSqlParser.KW_DAYS - 437)) | (1 << (FlinkSqlParser.KW_DECADE - 437)) | (1 << (FlinkSqlParser.KW_DESC - 437)) | (1 << (FlinkSqlParser.KW_DESCRIPTOR - 437)) | (1 << (FlinkSqlParser.KW_DIV - 437)) | (1 << (FlinkSqlParser.KW_ENGINE - 437)) | (1 << (FlinkSqlParser.KW_EPOCH - 437)) | (1 << (FlinkSqlParser.KW_EXCLUDING - 437)) | (1 << (FlinkSqlParser.KW_FILE - 437)) | (1 << (FlinkSqlParser.KW_FIRST - 437)) | (1 << (FlinkSqlParser.KW_GENERATED - 437)) | (1 << (FlinkSqlParser.KW_HOP - 437)) | (1 << (FlinkSqlParser.KW_HOURS - 437)) | (1 << (FlinkSqlParser.KW_IGNORE - 437)) | (1 << (FlinkSqlParser.KW_INCLUDING - 437)) | (1 << (FlinkSqlParser.KW_JAR - 437)) | (1 << (FlinkSqlParser.KW_JARS - 437)) | (1 << (FlinkSqlParser.KW_JAVA - 437)) | (1 << (FlinkSqlParser.KW_KEY - 437)) | (1 << (FlinkSqlParser.KW_LAST - 437)) | (1 << (FlinkSqlParser.KW_LOAD - 437)))) !== 0) || ((((_la - 469)) & ~0x1F) === 0 && ((1 << (_la - 469)) & ((1 << (FlinkSqlParser.KW_MAP - 469)) | (1 << (FlinkSqlParser.KW_MICROSECOND - 469)) | (1 << (FlinkSqlParser.KW_MILLENNIUM - 469)) | (1 << (FlinkSqlParser.KW_MILLISECOND - 469)) | (1 << (FlinkSqlParser.KW_MINUTES - 469)) | (1 << (FlinkSqlParser.KW_MONTHS - 469)) | (1 << (FlinkSqlParser.KW_NANOSECOND - 469)) | (1 << (FlinkSqlParser.KW_NULLS - 469)) | (1 << (FlinkSqlParser.KW_OPTIONS - 469)) | (1 << (FlinkSqlParser.KW_PAST - 469)) | (1 << (FlinkSqlParser.KW_PLAN - 469)) | (1 << (FlinkSqlParser.KW_PRECEDING - 469)) | (1 << (FlinkSqlParser.KW_PYTHON - 469)) | (1 << (FlinkSqlParser.KW_PYTHON_ARCHIVES - 469)) | (1 << (FlinkSqlParser.KW_PYTHON_DEPENDENCIES - 469)) | (1 << (FlinkSqlParser.KW_PYTHON_FILES - 469)) | (1 << (FlinkSqlParser.KW_PYTHON_JAR - 469)) | (1 << (FlinkSqlParser.KW_PYTHON_PARAMETER - 469)) | (1 << (FlinkSqlParser.KW_PYTHON_REQUIREMENTS - 469)) | (1 << (FlinkSqlParser.KW_QUARTER - 469)) | (1 << (FlinkSqlParser.KW_REMOVE - 469)) | (1 << (FlinkSqlParser.KW_RESTRICT - 469)) | (1 << (FlinkSqlParser.KW_SECONDS - 469)) | (1 << (FlinkSqlParser.KW_SESSION - 469)) | (1 << (FlinkSqlParser.KW_SETS - 469)) | (1 << (FlinkSqlParser.KW_SIZE - 469)) | (1 << (FlinkSqlParser.KW_SLIDE - 469)) | (1 << (FlinkSqlParser.KW_STEP - 469)) | (1 << (FlinkSqlParser.KW_TEMPORARY - 469)) | (1 << (FlinkSqlParser.KW_TIMECOL - 469)) | (1 << (FlinkSqlParser.KW_TUMBLE - 469)) | (1 << (FlinkSqlParser.KW_UNLOAD - 469)))) !== 0) || ((((_la - 501)) & ~0x1F) === 0 && ((1 << (_la - 501)) & ((1 << (FlinkSqlParser.KW_VIEW - 501)) | (1 << (FlinkSqlParser.KW_WEEK - 501)) | (1 << (FlinkSqlParser.KW_YEARS - 501)) | (1 << (FlinkSqlParser.KW_ZONE - 501)))) !== 0))) {
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

		case 131:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 134:
			return this.valueExpression_sempred(_localctx as ValueExpressionContext, predIndex);

		case 135:
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
	private primaryExpression_sempred(_localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u021F\u08FF\x04" +
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
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x07\x04\u0185\n\x04\f\x04\x0E\x04\u0188\v\x04\x03\x05\x03\x05" +
		"\x05\x05\u018C\n\x05\x03\x05\x03\x05\x05\x05\u0190\n\x05\x03\x05\x03\x05" +
		"\x05\x05\u0194\n\x05\x03\x05\x03\x05\x05\x05\u0198\n\x05\x03\x05\x03\x05" +
		"\x05\x05\u019C\n\x05\x03\x05\x03\x05\x05\x05\u01A0\n\x05\x03\x05\x03\x05" +
		"\x05\x05\u01A4\n\x05\x03\x05\x03\x05\x05\x05\u01A8\n\x05\x03\x05\x03\x05" +
		"\x05\x05\u01AC\n\x05\x03\x05\x03\x05\x05\x05\u01B0\n\x05\x03\x05\x03\x05" +
		"\x05\x05\u01B4\n\x05\x03\x05\x03\x05\x05\x05\u01B8\n\x05\x05\x05\u01BA" +
		"\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\u01CC\n\x07\x03\b\x03\b\x05\b\u01D0\n\b\x03\t\x03\t\x03\t\x03\n\x03\n" +
		"\x03\n\x03\n\x05\n\u01D9\n\n\x03\n\x03\n\x03\n\x05\n\u01DE\n\n\x03\v\x03" +
		"\v\x03\v\x07\v\u01E3\n\v\f\v\x0E\v\u01E6\v\v\x03\f\x03\f\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x05\r\u01F0\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x07\x0E\u01F7\n\x0E\f\x0E\x0E\x0E\u01FA\v\x0E\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0205\n\x0F" +
		"\x03\x0F\x05\x0F\u0208\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05" +
		"\x0F\u020F\n\x0F\x03\x0F\x05\x0F\u0212\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\u021A\n\x0F\x03\x0F\x03\x0F\x05\x0F\u021E" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0223\n\x0F\x03\x0F\x05\x0F\u0226" +
		"\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u022D\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x05\x12\u0235\n\x12\x03\x13" +
		"\x03\x13\x05\x13\u0239\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0245\n\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u024D\n\x15\x03\x15\x03\x15\x05" +
		"\x15\u0251\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0271\n\x15\x03\x16\x05" +
		"\x16\u0274\n\x16\x03\x16\x06\x16\u0277\n\x16\r\x16\x0E\x16\u0278\x03\x17" +
		"\x03\x17\x05\x17\u027D\n\x17\x03\x18\x03\x18\x05\x18\u0281\n\x18\x03\x18" +
		"\x03\x18\x05\x18\u0285\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07" +
		"\x18\u028C\n\x18\f\x18\x0E\x18\u028F\v\x18\x03\x18\x03\x18\x05\x18\u0293" +
		"\n\x18\x03\x18\x03\x18\x05\x18\u0297\n\x18\x03\x18\x03\x18\x05\x18\u029B" +
		"\n\x18\x03\x18\x03\x18\x05\x18\u029F\n\x18\x03\x18\x05\x18\u02A2\n\x18" +
		"\x03\x18\x03\x18\x05\x18\u02A6\n\x18\x03\x19\x03\x19\x03\x19\x05\x19\u02AB" +
		"\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u02B1\n\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x05\x1A\u02B6\n\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u02BB" +
		"\n\x1B\x03\x1B\x05\x1B\u02BE\n\x1B\x03\x1C\x03\x1C\x05\x1C\u02C2\n\x1C" +
		"\x03\x1D\x03\x1D\x05\x1D\u02C6\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07" +
		"\x1E\u02CC\n\x1E\f\x1E\x0E\x1E\u02CF\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u02D6\n\x1F\x03\x1F\x03\x1F\x05\x1F\u02DA\n\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u02DE\n\x1F\x03\x1F\x03\x1F\x05\x1F\u02E2\n\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u02E6\n\x1F\x03\x1F\x03\x1F\x05\x1F\u02EA\n\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u02EE\n\x1F\x03\x1F\x03\x1F\x05\x1F\u02F2\n\x1F\x03" +
		"\x1F\x03\x1F\x05\x1F\u02F6\n\x1F\x05\x1F\u02F8\n\x1F\x03 \x03 \x03 \x03" +
		" \x03!\x03!\x03!\x03!\x05!\u0302\n!\x03!\x03!\x03\"\x03\"\x03\"\x03\"" +
		"\x05\"\u030A\n\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03" +
		"$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x07%\u0320\n%\f%\x0E%\u0323" +
		"\v%\x03%\x03%\x03&\x03&\x05&\u0329\n&\x03&\x03&\x03&\x03&\x05&\u032F\n" +
		"&\x03&\x05&\u0332\n&\x03&\x05&\u0335\n&\x03\'\x03\'\x03\'\x03(\x03(\x03" +
		"(\x03(\x03(\x05(\u033F\n(\x03(\x05(\u0342\n(\x03)\x03)\x03*\x03*\x03*" +
		"\x03*\x05*\u034A\n*\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03-\x03-" +
		"\x05-\u0356\n-\x03-\x03-\x03-\x03-\x03-\x03-\x03.\x03.\x03/\x03/\x03/" +
		"\x03/\x030\x030\x030\x030\x031\x031\x031\x031\x071\u036C\n1\f1\x0E1\u036F" +
		"\v1\x031\x031\x032\x032\x032\x032\x032\x032\x072\u0379\n2\f2\x0E2\u037C" +
		"\v2\x032\x032\x052\u0380\n2\x033\x033\x053\u0384\n3\x034\x034\x034\x03" +
		"4\x074\u038A\n4\f4\x0E4\u038D\v4\x034\x054\u0390\n4\x035\x035\x035\x03" +
		"5\x055\u0396\n5\x036\x036\x036\x036\x036\x037\x037\x037\x057\u03A0\n7" +
		"\x037\x037\x057\u03A4\n7\x037\x037\x038\x038\x058\u03AA\n8\x038\x038\x05" +
		"8\u03AE\n8\x038\x038\x058\u03B2\n8\x038\x058\u03B5\n8\x038\x038\x038\x03" +
		"9\x039\x039\x039\x059\u03BE\n9\x039\x039\x059\u03C2\n9\x039\x039\x039" +
		"\x039\x039\x059\u03C9\n9\x039\x059\u03CC\n9\x03:\x03:\x03:\x03:\x03:\x03" +
		":\x07:\u03D4\n:\f:\x0E:\u03D7\v:\x03;\x03;\x03<\x03<\x03<\x05<\u03DE\n" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u03E6\n<\x03=\x03=\x05=\u03EA\n=" +
		"\x03=\x03=\x03=\x03>\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x05" +
		"?\u03F9\n?\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03" +
		"C\x03C\x03C\x03C\x03C\x03C\x05C\u040C\nC\x03D\x03D\x03D\x03D\x03D\x03" +
		"E\x03E\x03E\x03E\x05E\u0417\nE\x03E\x03E\x05E\u041B\nE\x03E\x03E\x03E" +
		"\x03E\x03E\x05E\u0422\nE\x03F\x03F\x03F\x05F\u0427\nF\x03F\x03F\x03G\x03" +
		"G\x05G\u042D\nG\x03G\x03G\x05G\u0431\nG\x03G\x03G\x03H\x03H\x03H\x05H" +
		"\u0438\nH\x03H\x03H\x05H\u043C\nH\x03I\x03I\x05I\u0440\nI\x03I\x03I\x05" +
		"I\u0444\nI\x03I\x03I\x03J\x03J\x03J\x03J\x05J\u044C\nJ\x03J\x03J\x05J" +
		"\u0450\nJ\x03J\x03J\x03K\x05K\u0455\nK\x03K\x03K\x03K\x03K\x05K\u045B" +
		"\nK\x03L\x03L\x03L\x03L\x05L\u0461\nL\x03L\x05L\u0464\nL\x03L\x03L\x05" +
		"L\u0468\nL\x03M\x03M\x03M\x03N\x03N\x03N\x03N\x07N\u0471\nN\fN\x0EN\u0474" +
		"\vN\x03O\x03O\x03O\x03O\x07O\u047A\nO\fO\x0EO\u047D\vO\x03O\x03O\x03P" +
		"\x03P\x03P\x03P\x03P\x03P\x03P\x06P\u0488\nP\rP\x0EP\u0489\x03P\x03P\x03" +
		"Q\x03Q\x03Q\x03Q\x03Q\x03Q\x06Q\u0494\nQ\rQ\x0EQ\u0495\x03Q\x03Q\x03R" +
		"\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u04A5\nR\x03R" +
		"\x05R\u04A8\nR\x03R\x03R\x05R\u04AC\nR\x03R\x05R\u04AF\nR\x05R\u04B1\n" +
		"R\x03R\x03R\x03R\x05R\u04B6\nR\x03R\x03R\x05R\u04BA\nR\x03R\x05R\u04BD" +
		"\nR\x07R\u04BF\nR\fR\x0ER\u04C2\vR\x03S\x03S\x03S\x03S\x07S\u04C8\nS\f" +
		"S\x0ES\u04CB\vS\x03T\x03T\x03T\x03T\x07T\u04D1\nT\fT\x0ET\u04D4\vT\x03" +
		"U\x03U\x03U\x03U\x03U\x07U\u04DB\nU\fU\x0EU\u04DE\vU\x03U\x03U\x05U\u04E2" +
		"\nU\x03U\x03U\x03U\x03U\x03U\x03V\x03V\x03W\x03W\x05W\u04ED\nW\x03W\x05" +
		"W\u04F0\nW\x03W\x05W\u04F3\nW\x03W\x05W\u04F6\nW\x03W\x05W\u04F9\nW\x03" +
		"W\x03W\x03W\x03W\x05W\u04FF\nW\x03X\x03X\x05X\u0503\nX\x03X\x03X\x03X" +
		"\x03X\x07X\u0509\nX\fX\x0EX\u050C\vX\x05X\u050E\nX\x03Y\x03Y\x03Y\x05" +
		"Y\u0513\nY\x03Y\x05Y\u0516\nY\x05Y\u0518\nY\x03Z\x03Z\x03Z\x03Z\x03Z\x03" +
		"Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u0526\nZ\x03[\x03[\x03[\x03\\\x03" +
		"\\\x03\\\x03\\\x07\\\u052F\n\\\f\\\x0E\\\u0532\v\\\x03\\\x03\\\x05\\\u0536" +
		"\n\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x05\\\u053E\n\\\x03\\\x05\\\u0541" +
		"\n\\\x03\\\x05\\\u0544\n\\\x03\\\x03\\\x03\\\x05\\\u0549\n\\\x07\\\u054B" +
		"\n\\\f\\\x0E\\\u054E\v\\\x03]\x03]\x05]\u0552\n]\x03^\x05^\u0555\n^\x03" +
		"^\x03^\x05^\u0559\n^\x03^\x05^\u055C\n^\x03^\x05^\u055F\n^\x03^\x03^\x05" +
		"^\u0563\n^\x03^\x05^\u0566\n^\x03^\x05^\u0569\n^\x03^\x03^\x03^\x03^\x03" +
		"^\x03^\x03^\x03^\x07^\u0573\n^\f^\x0E^\u0576\v^\x03^\x03^\x03^\x03^\x05" +
		"^\u057C\n^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u0587\n^" +
		"\x03_\x03_\x03_\x03_\x03_\x03_\x03`\x03`\x03a\x03a\x03a\x03a\x03a\x03" +
		"b\x03b\x03b\x03b\x03b\x03c\x03c\x03c\x03c\x03c\x07c\u05A0\nc\fc\x0Ec\u05A3" +
		"\vc\x03c\x03c\x03d\x03d\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03" +
		"e\x03e\x03e\x03e\x03e\x03e\x05e\u05B8\ne\x03f\x03f\x03g\x03g\x03g\x03" +
		"g\x03g\x03h\x03h\x03h\x03h\x05h\u05C5\nh\x03i\x03i\x03i\x03j\x03j\x03" +
		"j\x03j\x03j\x07j\u05CF\nj\fj\x0Ej\u05D2\vj\x03k\x03k\x03k\x03k\x03k\x03" +
		"k\x03k\x03k\x07k\u05DC\nk\fk\x0Ek\u05DF\vk\x03k\x03k\x03k\x03k\x03k\x03" +
		"k\x03k\x07k\u05E8\nk\fk\x0Ek\u05EB\vk\x03k\x03k\x03k\x03k\x03k\x03k\x03" +
		"k\x07k\u05F4\nk\fk\x0Ek\u05F7\vk\x03k\x03k\x05k\u05FB\nk\x03l\x03l\x03" +
		"l\x03m\x03m\x03n\x03n\x03n\x03n\x03n\x03n\x03n\x03o\x03o\x03p\x03p\x03" +
		"q\x03q\x03q\x03r\x03r\x03r\x03r\x07r\u0614\nr\fr\x0Er\u0617\vr\x03s\x03" +
		"s\x03s\x03s\x03t\x05t\u061E\nt\x03t\x03t\x05t\u0622\nt\x03t\x05t\u0625" +
		"\nt\x03t\x05t\u0628\nt\x03t\x03t\x03u\x03u\x03u\x05u\u062F\nu\x03u\x05" +
		"u\u0632\nu\x03u\x05u\u0635\nu\x03u\x05u\u0638\nu\x03u\x05u\u063B\nu\x03" +
		"u\x05u\u063E\nu\x03u\x03u\x03u\x05u\u0643\nu\x03u\x05u\u0646\nu\x03v\x03" +
		"v\x03v\x03v\x03v\x07v\u064D\nv\fv\x0Ev\u0650\vv\x03w\x03w\x05w\u0654\n" +
		"w\x03w\x03w\x05w\u0658\nw\x03x\x03x\x03x\x05x\u065D\nx\x03y\x03y\x03y" +
		"\x03y\x03y\x07y\u0664\ny\fy\x0Ey\u0667\vy\x03z\x03z\x03z\x03z\x03z\x03" +
		"z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x05z\u0679\nz\x03" +
		"{\x03{\x03{\x03{\x07{\u067F\n{\f{\x0E{\u0682\v{\x03|\x03|\x03|\x06|\u0687" +
		"\n|\r|\x0E|\u0688\x03|\x03|\x05|\u068D\n|\x03}\x03}\x05}\u0691\n}\x03" +
		"~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x05~\u069B\n~\x03\x7F\x03\x7F\x03" +
		"\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03" +
		"\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03" +
		"\x7F\x03\x7F\x03\x7F\x03\x7F\x05\x7F\u06B5\n\x7F\x03\x80\x03\x80\x03\x80" +
		"\x03\x80\x07\x80\u06BB\n\x80\f\x80\x0E\x80\u06BE\v\x80\x03\x81\x03\x81" +
		"\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x05\x81\u06C9" +
		"\n\x81\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x83\x03\x83\x03\x83" +
		"\x03\x84\x03\x84\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85" +
		"\x03\x85\x03\x85\x03\x85\x05\x85\u06DF\n\x85\x05\x85\u06E1\n\x85\x03\x85" +
		"\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85" +
		"\u06EC\n\x85\x03\x85\x07\x85\u06EF\n\x85\f\x85\x0E\x85\u06F2\v\x85\x03" +
		"\x86\x05\x86\u06F5\n\x86\x03\x86\x03\x86\x05\x86\u06F9\n\x86\x03\x86\x03" +
		"\x86\x03\x86\x03\x86\x03\x86\x05\x86\u0700\n\x86\x03\x86\x03\x86\x03\x86" +
		"\x03\x86\x03\x86\x07\x86\u0707\n\x86\f\x86\x0E\x86\u070A\v\x86\x03\x86" +
		"\x03\x86\x03\x86\x05\x86\u070F\n\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03" +
		"\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x05\x86\u071C\n\x86" +
		"\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x05\x86\u0723\n\x86\x03\x86\x03" +
		"\x86\x03\x86\x05\x86\u0728\n\x86\x03\x86\x03\x86\x03\x86\x03\x86\x05\x86" +
		"\u072E\n\x86\x03\x86\x03\x86\x03\x86\x03\x86\x03\x86\x05\x86\u0735\n\x86" +
		"\x05\x86\u0737\n\x86\x03\x87\x05\x87\u073A\n\x87\x03\x87\x03\x87\x03\x87" +
		"\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x07\x87\u0744\n\x87\f\x87\x0E" +
		"\x87\u0747\v\x87\x03\x87\x03\x87\x05\x87\u074B\n\x87\x03\x87\x05\x87\u074E" +
		"\n\x87\x03\x87\x03\x87\x03\x87\x03\x87\x05\x87\u0754\n\x87\x05\x87\u0756" +
		"\n\x87\x03\x88\x03\x88\x03\x88\x03\x88\x05\x88\u075C\n\x88\x03\x88\x03" +
		"\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03" +
		"\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x07" +
		"\x88\u0771\n\x88\f\x88\x0E\x88\u0774\v\x88\x03\x89\x03\x89\x03\x89\x06" +
		"\x89\u0779\n\x89\r\x89\x0E\x89\u077A\x03\x89\x03\x89\x05\x89\u077F\n\x89" +
		"\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x06\x89\u0786\n\x89\r\x89\x0E" +
		"\x89\u0787\x03\x89\x03\x89\x05\x89\u078C\n\x89\x03\x89\x03\x89\x03\x89" +
		"\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89" +
		"\x03\x89\x03\x89\x05\x89\u079C\n\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03" +
		"\x89\x03\x89\x03\x89\x05\x89\u07A5\n\x89\x03\x89\x03\x89\x03\x89\x03\x89" +
		"\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89" +
		"\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89" +
		"\x05\x89\u07BD\n\x89\x03\x89\x03\x89\x03\x89\x07\x89\u07C2\n\x89\f\x89" +
		"\x0E\x89\u07C5\v\x89\x05\x89\u07C7\n\x89\x03\x89\x03\x89\x03\x89\x03\x89" +
		"\x03\x89\x03\x89\x03\x89\x03\x89\x03\x89\x05\x89\u07D2\n\x89\x03\x89\x03" +
		"\x89\x03\x89\x03\x89\x03\x89\x07\x89\u07D9\n\x89\f\x89\x0E\x89\u07DC\v" +
		"\x89\x03\x8A\x03\x8A\x03\x8B\x03\x8B\x05\x8B\u07E2\n\x8B\x03\x8C\x03\x8C" +
		"\x03\x8C\x03\x8C\x05\x8C\u07E8\n\x8C\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x03" +
		"\x8F\x03\x8F\x05\x8F\u07F0\n\x8F\x03\x90\x03\x90\x03\x90\x05\x90\u07F5" +
		"\n\x90\x03\x91\x03\x91\x05\x91\u07F9\n\x91\x03\x92\x03\x92\x03\x92\x06" +
		"\x92\u07FE\n\x92\r\x92\x0E\x92\u07FF\x03\x93\x03\x93\x03\x93\x05\x93\u0805" +
		"\n\x93\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x95\x05\x95\u080D\n" +
		"\x95\x03\x95\x03\x95\x05\x95\u0811\n\x95\x03\x96\x05\x96\u0814\n\x96\x03" +
		"\x96\x03\x96\x05\x96\u0818\n\x96\x03\x97\x03\x97\x03\x97\x03\x98\x03\x98" +
		"\x06\x98\u081F\n\x98\r\x98\x0E\x98\u0820\x03\x98\x05\x98\u0824\n\x98\x03" +
		"\x99\x03\x99\x03\x99\x03\x99\x03\x9A\x03\x9A\x03\x9A\x07\x9A\u082D\n\x9A" +
		"\f\x9A\x0E\x9A\u0830\v\x9A\x03\x9B\x03\x9B\x03\x9B\x05\x9B\u0835\n\x9B" +
		"\x03\x9C\x03\x9C\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E" +
		"\x03\x9F\x03\x9F\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x03\xA1\x05\xA1\u0847" +
		"\n\xA1\x03\xA2\x03\xA2\x03\xA2\x05\xA2\u084C\n\xA2\x03\xA3\x03\xA3\x03" +
		"\xA3\x05\xA3\u0851\n\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x05\xA3" +
		"\u0858\n\xA3\x05\xA3\u085A\n\xA3\x03\xA4\x03\xA4\x03\xA4\x05\xA4\u085F" +
		"\n\xA4\x03\xA4\x03\xA4\x03\xA4\x03\xA4\x03\xA4\x05\xA4\u0866\n\xA4\x05" +
		"\xA4\u0868\n\xA4\x03\xA5\x03\xA5\x03\xA5\x05\xA5\u086D\n\xA5\x03\xA5\x03" +
		"\xA5\x03\xA5\x03\xA5\x03\xA5\x05\xA5\u0874\n\xA5\x05\xA5\u0876\n\xA5\x03" +
		"\xA6\x03\xA6\x03\xA6\x05\xA6\u087B\n\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6" +
		"\x03\xA6\x05\xA6\u0882\n\xA6\x05\xA6\u0884\n\xA6\x03\xA7\x03\xA7\x03\xA7" +
		"\x07\xA7\u0889\n\xA7\f\xA7\x0E\xA7\u088C\v\xA7\x03\xA8\x03\xA8\x03\xA8" +
		"\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xAA\x03\xAA\x03\xAA\x03\xAB\x03\xAB" +
		"\x03\xAB\x03\xAB\x07\xAB\u089C\n\xAB\f\xAB\x0E\xAB\u089F\v\xAB\x03\xAB" +
		"\x03\xAB\x03\xAC\x03\xAC\x05\xAC\u08A5\n\xAC\x03\xAC\x05\xAC\u08A8\n\xAC" +
		"\x03\xAD\x03\xAD\x03\xAD\x05\xAD\u08AD\n\xAD\x03\xAE\x03\xAE\x03\xAE\x03" +
		"\xAE\x05\xAE\u08B3\n\xAE\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xAF" +
		"\x05\xAF\u08BB\n\xAF\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03" +
		"\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB0\x05\xB0\u08CB" +
		"\n\xB0\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x05\xB1" +
		"\u08D4\n\xB1\x03\xB2\x03\xB2\x03\xB3\x03\xB3\x03\xB4\x03\xB4\x03\xB4\x03" +
		"\xB4\x05\xB4\u08DE\n\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB4\x05\xB4" +
		"\u08E5\n\xB4\x03\xB4\x05\xB4\u08E8\n\xB4\x03\xB5\x03\xB5\x03\xB5\x03\xB6" +
		"\x03\xB6\x03\xB7\x03\xB7\x03\xB8\x03\xB8\x03\xB9\x03\xB9\x03\xBA\x03\xBA" +
		"\x03\xBB\x03\xBB\x03\xBC\x03\xBC\x03\xBD\x03\xBD\x03\xBE\x03\xBE\x03\xBE" +
		"\x03\u088A\x02\x07\xA2\xB6\u0108\u010E\u0110\xBF\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
		"4\x026\x02";
	private static readonly _serializedATNSegment1: string =
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
		"\x02\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158" +
		"\x02\u015A\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166" +
		"\x02\u0168\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174" +
		"\x02\u0176\x02\u0178\x02\u017A\x02\x02/\x04\x02oo\u01C4\u01C4\x05\x02" +
		"//\x82\x82\xBE\xBE\x06\x02,,\\\\\u01A8\u01A8\u01D2\u01D2\x04\x02\u01BB" +
		"\u01BB\u01C1\u01C1\x04\x02\x99\x99\xAC\xAC\x04\x02\u01B7\u01B7\u01EB\u01EB" +
		"\x04\x02\u01E4\u01E7\u01E9\u01E9\x05\x02\"\"]]\xF6\xF6\r\x02\x1E\x1F%" +
		"%00^^\xB4\xB5\u015A\u015A\u016A\u016A\u017C\u017C\u017F\u017F\u0185\u0185" +
		"\u01A2\u01A3\x04\x02\u01B3\u01B3\u01B5\u01B5\x06\x02ghuu\x92\x92\xF8\xF8" +
		"\x04\x02\x0F\x0F\xE9\xE9\x04\x02\u01C9\u01C9\u01D0\u01D0\x05\x02\x07\x07" +
		"\u0110\u0110\u01BE\u01BE\x05\x02\u010C\u010C\u01C9\u01C9\u01D0\u01D0\x05" +
		"\x02\u01AB\u01AB\u01CC\u01CC\u01DF\u01DF\x05\x02\u014C\u014C\u01D3\u01D3" +
		"\u01E3\u01E3\x04\x02\u01BA\u01BA\u01EC\u01EC\x04\x02\xB9\xB9\u010B\u010B" +
		"\x05\x02\x84\x84\xB6\xB6\u0194\u0194\x06\x02\x9A\x9A\xB0\xB0\xCB\xCB\u013F" +
		"\u013F\x05\x02\u01BF\u01BF\u01CD\u01CD\u01F5\u01F5\x06\x02\xFC\xFC\u01C0" +
		"\u01C0\u01F0\u01F2\u01F4\u01F4\x04\x02LL\u0142\u0142\x05\x02\u01CD\u01CD" +
		"\u01EE\u01EE\u01F5\u01F5\x04\x02\u01B9\u01B9\u01C4\u01C4\x04\x02\u01CB" +
		"\u01CB\u01D5\u01D5\x06\x02\x8E\x8E\xF6\xF6\u018F\u018F\u0196\u0196\x04" +
		"\x02\x15\x15\u0173\u0173\x04\x02\x07\x07\r\r\x04\x02\u01FF\u01FF\u0213" +
		"\u0214\x06\x02\u01C6\u01C6\u0211\u0211\u0215\u0215\u0218\u0218\x04\x02" +
		"\u0213\u0214\u0216\u0216\x03\x02\u0213\u0214\x03\x02\u021C\u021D\x04\x02" +
		"\u021C\u021C\u021F\u021F\x06\x02\u01C6\u01C6\u0211\u0211\u0213\u0215\u0217" +
		"\u0218\x05\x02\xF3\xF3\u01FE\u01FF\u0213\u0214\x04\x02\x8E\x8E\u018F\u018F" +
		"\x04\x02\x07\x07ss\f\x02cc\xA7\xA7\xE0\xE0\xE7\xE7\u0150\u0150\u01B6\u01B6" +
		"\u01D8\u01D8\u01DA\u01DA\u01EA\u01EA\u01F8\u01F8\x11\x02cc\xA7\xA7\xE0" +
		"\xE0\xE7\xE7\u0150\u0150\u01AD\u01AD\u01B6\u01B6\u01BC\u01BC\u01C2\u01C3" +
		"\u01C8\u01C8\u01CE\u01CE\u01D8\u01DD\u01EA\u01EA\u01ED\u01ED\u01F8\u01F9" +
		"\v\x02\x07\x07\x0F\x0F##WWss\xCA\xCA\u0187\u0187\u019F\u019F\u0211\u0211" +
		"9\x02\x06\x06\x0F\x0F\x19\x19((++-.88::GGMMPPVW]]demmyy\x88\x88\x8D\x8D" +
		"\x91\x91\x93\x93\xA2\xA2\xA7\xA7\xA9\xA9\xC4\xC4\xC7\xC7\xC9\xC9\xCB\xCB" +
		"\xCF\xCF\xD1\xD3\xD8\xD8\xDE\xDE\xE0\xE1\xE7\xE7\xF5\xF5\xF7\xF7\u010A" +
		"\u010A\u0116\u0116\u011B\u011B\u011D\u011D\u0127\u0127\u013F\u013F\u0143" +
		"\u0145\u0150\u0150\u0167\u0168\u016E\u016E\u0171\u0171\u017C\u017E\u018D" +
		"\u018D\u0190\u0191\u019A\u019A\u01A5\u01A6\u01B6\u01B6\u01D7\u01D7\u01EA" +
		"\u01EA\u01F8\u01F8\x03\x02\u01B7\u01FA\x02\u09D1\x02\u017C\x03\x02\x02" +
		"\x02\x04\u017F\x03\x02\x02\x02\x06\u0186\x03\x02\x02\x02\b\u01B9\x03\x02" +
		"\x02\x02\n\u01BB\x03\x02\x02\x02\f\u01CB\x03\x02\x02\x02\x0E\u01CF\x03" +
		"\x02\x02\x02\x10\u01D1\x03\x02\x02\x02\x12\u01D4\x03\x02\x02\x02\x14\u01DF" +
		"\x03\x02\x02\x02\x16\u01E7\x03\x02\x02\x02\x18\u01EF\x03\x02\x02\x02\x1A" +
		"\u01F1\x03\x02\x02\x02\x1C\u0225\x03\x02\x02\x02\x1E\u0227\x03\x02\x02" +
		"\x02 \u022E\x03\x02\x02\x02\"\u0232\x03\x02\x02\x02$\u0236\x03\x02\x02" +
		"\x02&\u023A\x03\x02\x02\x02(\u0270\x03\x02\x02\x02*\u0276\x03\x02\x02" +
		"\x02,\u027C\x03\x02\x02\x02.\u027E\x03\x02\x02\x020\u02A7\x03\x02\x02" +
		"\x022\u02B5\x03\x02\x02\x024\u02B7\x03\x02\x02\x026\u02C1\x03\x02\x02" +
		"\x028\u02C5\x03\x02\x02\x02:\u02C7\x03\x02\x02\x02<\u02F7\x03\x02\x02" +
		"\x02>\u02F9\x03\x02\x02\x02@\u02FD\x03\x02\x02\x02B\u0305\x03\x02\x02" +
		"\x02D\u030D\x03\x02\x02\x02F\u0311\x03\x02\x02\x02H\u0318\x03\x02\x02" +
		"\x02J\u0334\x03\x02\x02\x02L\u0336\x03\x02\x02\x02N\u0339\x03\x02\x02" +
		"\x02P\u0343\x03\x02\x02\x02R\u0345\x03\x02\x02\x02T\u034B\x03\x02\x02" +
		"\x02V\u034D\x03\x02\x02\x02X\u0355\x03\x02\x02\x02Z\u035D\x03\x02\x02" +
		"\x02\\\u035F\x03\x02\x02\x02^\u0363\x03\x02\x02\x02`\u0367\x03\x02\x02" +
		"\x02b\u037F\x03\x02\x02\x02d\u0383\x03\x02\x02\x02f\u0385\x03\x02\x02" +
		"\x02h\u0395\x03\x02\x02\x02j\u0397\x03\x02\x02\x02l\u039C\x03\x02\x02" +
		"\x02n\u03A7\x03\x02\x02\x02p\u03B9\x03\x02\x02\x02r\u03CD\x03\x02\x02" +
		"\x02t\u03D8\x03\x02\x02\x02v\u03DA\x03\x02\x02\x02x\u03E7\x03\x02\x02" +
		"\x02z\u03EE\x03\x02\x02\x02|\u03F1\x03\x02\x02\x02~\u03FA\x03\x02\x02" +
		"\x02\x80\u03FE\x03\x02\x02\x02\x82\u0402\x03\x02\x02\x02\x84\u0405\x03" +
		"\x02\x02\x02\x86\u040D\x03\x02\x02\x02\x88\u0412\x03\x02\x02\x02\x8A\u0423" +
		"\x03\x02\x02\x02\x8C\u042A\x03\x02\x02\x02\x8E\u0434\x03\x02\x02\x02\x90" +
		"\u043D\x03\x02\x02\x02\x92\u0447\x03\x02\x02\x02\x94\u045A\x03\x02\x02" +
		"\x02\x96\u045C\x03\x02\x02\x02\x98\u0469\x03\x02\x02\x02\x9A\u046C\x03" +
		"\x02\x02\x02\x9C\u0475\x03\x02\x02\x02\x9E\u0480\x03\x02\x02\x02\xA0\u048D" +
		"\x03\x02\x02\x02\xA2\u04B0\x03\x02\x02\x02\xA4\u04C3\x03\x02\x02\x02\xA6" +
		"\u04CC\x03\x02\x02\x02\xA8\u04D5\x03\x02\x02\x02\xAA\u04E8\x03\x02\x02" +
		"\x02\xAC\u04FE\x03\x02\x02\x02\xAE\u0500\x03\x02\x02\x02\xB0\u0517\x03" +
		"\x02\x02\x02\xB2\u0525\x03\x02\x02\x02\xB4\u0527\x03\x02\x02\x02\xB6\u0535" +
		"\x03\x02\x02\x02\xB8\u054F\x03\x02\x02\x02\xBA\u0586\x03\x02\x02\x02\xBC" +
		"\u0588\x03\x02\x02\x02\xBE\u058E\x03\x02\x02\x02\xC0\u0590\x03\x02\x02" +
		"\x02\xC2\u0595\x03\x02\x02\x02\xC4\u059A\x03\x02\x02\x02\xC6\u05A6\x03" +
		"\x02\x02\x02\xC8\u05B7\x03\x02\x02\x02\xCA\u05B9\x03\x02\x02\x02\xCC\u05BB" +
		"\x03\x02\x02\x02\xCE\u05C4\x03\x02\x02\x02\xD0\u05C6\x03\x02\x02\x02\xD2" +
		"\u05C9\x03\x02\x02\x02\xD4\u05FA\x03\x02\x02\x02\xD6\u05FC\x03\x02\x02" +
		"\x02\xD8\u05FF\x03\x02\x02\x02\xDA\u0601\x03\x02\x02\x02\xDC\u0608\x03" +
		"\x02\x02\x02\xDE\u060A\x03\x02\x02\x02\xE0\u060C\x03\x02\x02\x02\xE2\u060F" +
		"\x03\x02\x02\x02\xE4\u0618\x03\x02\x02\x02\xE6\u061D\x03\x02\x02\x02\xE8" +
		"\u062B\x03\x02\x02\x02\xEA\u0647\x03\x02\x02\x02\xEC\u0651\x03\x02\x02" +
		"\x02\xEE\u0659\x03\x02\x02\x02\xF0\u065E\x03\x02\x02\x02\xF2\u0678\x03" +
		"\x02\x02\x02\xF4\u067A\x03\x02\x02\x02\xF6\u0683\x03\x02\x02\x02\xF8\u068E" +
		"\x03\x02\x02\x02\xFA\u069A\x03\x02\x02\x02\xFC\u06B4\x03\x02\x02\x02\xFE" +
		"\u06B6\x03\x02\x02\x02\u0100\u06C8\x03\x02\x02\x02\u0102\u06CA\x03\x02" +
		"\x02\x02\u0104\u06CF\x03\x02\x02\x02\u0106\u06D2\x03\x02\x02\x02\u0108" +
		"\u06E0\x03\x02\x02\x02\u010A\u0736\x03\x02\x02\x02\u010C\u0755\x03\x02" +
		"\x02\x02\u010E\u075B\x03\x02\x02\x02\u0110\u07D1\x03\x02\x02\x02\u0112" +
		"\u07DD\x03\x02\x02\x02\u0114\u07E1\x03\x02\x02\x02\u0116\u07E7\x03\x02" +
		"\x02\x02\u0118\u07E9\x03\x02\x02\x02\u011A\u07EB\x03\x02\x02\x02\u011C" +
		"\u07EF\x03\x02\x02\x02\u011E\u07F1\x03\x02\x02\x02\u0120\u07F6\x03\x02" +
		"\x02\x02\u0122\u07FD\x03\x02\x02\x02\u0124\u0801\x03\x02\x02\x02\u0126" +
		"\u0806\x03\x02\x02\x02\u0128\u0810\x03\x02\x02\x02\u012A\u0813\x03\x02" +
		"\x02\x02\u012C\u0819\x03\x02\x02\x02\u012E\u0823\x03\x02\x02\x02\u0130" +
		"\u0825\x03\x02\x02\x02\u0132\u0829\x03\x02\x02\x02\u0134\u0834\x03\x02" +
		"\x02\x02\u0136\u0836\x03\x02\x02\x02\u0138\u0838\x03\x02\x02\x02\u013A" +
		"\u083A\x03\x02\x02\x02\u013C\u083F\x03\x02\x02\x02\u013E\u0841\x03\x02" +
		"\x02\x02\u0140\u0843\x03\x02\x02\x02\u0142\u0848\x03\x02\x02\x02\u0144" +
		"\u0859\x03\x02\x02\x02\u0146\u0867\x03\x02\x02\x02\u0148\u0875\x03\x02" +
		"\x02\x02\u014A\u0883\x03\x02\x02\x02\u014C\u0885\x03\x02\x02\x02\u014E" +
		"\u088D\x03\x02\x02\x02\u0150\u0890\x03\x02\x02\x02\u0152\u0894\x03\x02" +
		"\x02\x02\u0154\u0897\x03\x02\x02\x02\u0156\u08A2\x03\x02\x02\x02\u0158" +
		"\u08AC\x03\x02\x02\x02\u015A\u08B2\x03\x02\x02\x02\u015C\u08BA\x03\x02" +
		"\x02\x02\u015E\u08CA\x03\x02\x02\x02\u0160\u08D3\x03\x02\x02\x02\u0162" +
		"\u08D5\x03\x02\x02\x02\u0164\u08D7\x03\x02\x02\x02\u0166\u08E7\x03\x02" +
		"\x02\x02\u0168\u08E9\x03\x02\x02\x02\u016A\u08EC\x03\x02\x02\x02\u016C" +
		"\u08EE\x03\x02\x02\x02\u016E\u08F0\x03\x02\x02\x02\u0170\u08F2\x03\x02" +
		"\x02\x02\u0172\u08F4\x03\x02\x02\x02\u0174\u08F6\x03\x02\x02\x02\u0176" +
		"\u08F8\x03\x02\x02\x02\u0178\u08FA\x03\x02\x02\x02\u017A\u08FC\x03\x02" +
		"\x02\x02\u017C\u017D\x05\x04\x03\x02\u017D\u017E\x07\x02\x02\x03\u017E" +
		"\x03\x03\x02\x02\x02\u017F\u0180\x05\x06\x04\x02\u0180\u0181\x07\x02\x02" +
		"\x03\u0181\x05\x03\x02\x02\x02\u0182\u0185\x05\b\x05\x02\u0183\u0185\x05" +
		"\n\x06\x02\u0184\u0182\x03\x02\x02\x02\u0184\u0183\x03\x02\x02\x02\u0185" +
		"\u0188\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0187\x03\x02" +
		"\x02\x02\u0187\x07\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0189\u018B" +
		"\x05\f\x07\x02\u018A\u018C\x07\u020B\x02\x02\u018B\u018A\x03\x02\x02\x02" +
		"\u018B\u018C\x03\x02\x02\x02\u018C\u01BA\x03\x02\x02\x02\u018D\u018F\x05" +
		"\x0E\b\x02\u018E\u0190\x07\u020B\x02\x02\u018F\u018E\x03\x02\x02\x02\u018F" +
		"\u0190\x03\x02\x02\x02\u0190\u01BA\x03\x02\x02\x02\u0191\u0193\x05\x10" +
		"\t\x02\u0192\u0194\x07\u020B\x02\x02\u0193\u0192\x03\x02\x02\x02\u0193" +
		"\u0194\x03\x02\x02\x02\u0194\u01BA\x03\x02\x02\x02\u0195\u0197\x05\x12" +
		"\n\x02\u0196\u0198\x07\u020B\x02\x02\u0197\u0196\x03\x02\x02\x02\u0197" +
		"\u0198\x03\x02\x02\x02\u0198\u01BA\x03\x02\x02\x02\u0199\u019B\x05\x18" +
		"\r\x02\u019A\u019C\x07\u020B\x02\x02\u019B\u019A\x03\x02\x02\x02\u019B" +
		"\u019C\x03\x02\x02\x02\u019C\u01BA\x03\x02\x02\x02\u019D\u019F\x05\x1C" +
		"\x0F\x02\u019E\u01A0\x07\u020B\x02\x02\u019F\u019E\x03\x02\x02\x02\u019F" +
		"\u01A0\x03\x02\x02\x02\u01A0\u01BA\x03\x02\x02\x02\u01A1\u01A3\x05\x1E" +
		"\x10\x02\u01A2\u01A4\x07\u020B\x02\x02\u01A3\u01A2\x03\x02\x02\x02\u01A3" +
		"\u01A4\x03\x02\x02\x02\u01A4\u01BA\x03\x02\x02\x02\u01A5\u01A7\x05 \x11" +
		"\x02\u01A6\u01A8\x07\u020B\x02\x02\u01A7\u01A6\x03\x02\x02\x02\u01A7\u01A8" +
		"\x03\x02\x02\x02\u01A8\u01BA\x03\x02\x02\x02\u01A9\u01AB\x05\"\x12\x02" +
		"\u01AA\u01AC\x07\u020B\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC" +
		"\x03\x02\x02\x02\u01AC\u01BA\x03\x02\x02\x02\u01AD\u01AF\x05$\x13\x02" +
		"\u01AE\u01B0\x07\u020B\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01AF\u01B0" +
		"\x03\x02\x02\x02\u01B0\u01BA\x03\x02\x02\x02\u01B1\u01B3\x05&\x14\x02" +
		"\u01B2\u01B4\x07\u020B\x02\x02\u01B3\u01B2\x03\x02\x02\x02\u01B3\u01B4" +
		"\x03\x02\x02\x02\u01B4\u01BA\x03\x02\x02\x02\u01B5\u01B7\x05(\x15\x02" +
		"\u01B6\u01B8\x07\u020B\x02\x02\u01B7\u01B6\x03\x02\x02\x02\u01B7\u01B8" +
		"\x03\x02\x02\x02\u01B8\u01BA\x03\x02\x02\x02\u01B9\u0189\x03\x02\x02\x02" +
		"\u01B9\u018D\x03\x02\x02\x02\u01B9\u0191\x03\x02\x02\x02\u01B9\u0195\x03" +
		"\x02\x02\x02\u01B9\u0199\x03\x02\x02\x02\u01B9\u019D\x03\x02\x02\x02\u01B9" +
		"\u01A1\x03\x02\x02\x02\u01B9\u01A5\x03\x02\x02\x02\u01B9\u01A9\x03\x02" +
		"\x02\x02\u01B9\u01AD\x03\x02\x02\x02\u01B9\u01B1\x03\x02\x02\x02\u01B9" +
		"\u01B5\x03\x02\x02\x02\u01BA\t\x03\x02\x02\x02\u01BB\u01BC\x07\u020B\x02" +
		"\x02\u01BC\v\x03\x02\x02\x02\u01BD\u01CC\x05,\x17\x02\u01BE\u01CC\x05" +
		"l7\x02\u01BF\u01CC\x05n8\x02\u01C0\u01CC\x05p9\x02\u01C1\u01CC\x05j6\x02" +
		"\u01C2\u01CC\x05v<\x02\u01C3\u01CC\x05\x84C\x02\u01C4\u01CC\x05\x86D\x02" +
		"\u01C5\u01CC\x05\x88E\x02\u01C6\u01CC\x05\x8AF\x02\u01C7\u01CC\x05\x8C" +
		"G\x02\u01C8\u01CC\x05\x8EH\x02\u01C9\u01CC\x05\x90I\x02\u01CA\u01CC\x05" +
		"\x92J\x02\u01CB\u01BD\x03\x02\x02\x02\u01CB\u01BE\x03\x02\x02\x02\u01CB" +
		"\u01BF\x03\x02\x02\x02\u01CB\u01C0\x03\x02\x02\x02\u01CB\u01C1\x03\x02" +
		"\x02\x02\u01CB\u01C2\x03\x02\x02\x02\u01CB\u01C3\x03\x02\x02\x02\u01CB" +
		"\u01C4\x03\x02\x02\x02\u01CB\u01C5\x03\x02\x02\x02\u01CB\u01C6\x03\x02" +
		"\x02\x02\u01CB\u01C7\x03\x02\x02\x02\u01CB\u01C8\x03\x02\x02\x02\u01CB" +
		"\u01C9\x03\x02\x02\x02\u01CB\u01CA\x03\x02\x02\x02\u01CC\r\x03\x02\x02" +
		"\x02\u01CD\u01D0\x05\xA2R\x02\u01CE\u01D0\x05\x94K\x02\u01CF\u01CD\x03" +
		"\x02\x02\x02\u01CF\u01CE\x03\x02\x02\x02\u01D0\x0F\x03\x02\x02\x02\u01D1" +
		"\u01D2\t\x02\x02\x02\u01D2\u01D3\x05\u0146\xA4\x02\u01D3\x11\x03\x02\x02" +
		"\x02\u01D4\u01D8\x07\x89\x02\x02\u01D5\u01D9\x05\x14\v\x02\u01D6\u01D7" +
		"\x07\u01E1\x02\x02\u01D7\u01D9\x07\x94\x02\x02\u01D8\u01D5\x03\x02\x02" +
		"\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01DD" +
		"\x03\x02\x02\x02\u01DA\u01DE\x05\x0E\b\x02\u01DB\u01DE\x05\x96L\x02\u01DC" +
		"\u01DE\x05\xA0Q\x02\u01DD\u01DA\x03\x02\x02\x02\u01DD\u01DB\x03\x02\x02" +
		"\x02\u01DD\u01DC\x03\x02\x02\x02\u01DE\x13\x03\x02\x02\x02\u01DF\u01E4" +
		"\x05\x16\f\x02\u01E0\u01E1\x07\u020A\x02\x02\u01E1\u01E3\x05\x16\f\x02" +
		"\u01E2\u01E0\x03\x02\x02\x02\u01E3\u01E6\x03\x02\x02\x02\u01E4\u01E2\x03" +
		"\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\x15\x03\x02\x02\x02\u01E6" +
		"\u01E4\x03\x02\x02\x02\u01E7\u01E8\t\x03\x02\x02\u01E8\x17\x03\x02\x02" +
		"\x02\u01E9\u01EA\x07\u019C\x02\x02\u01EA\u01EB\x07\u01BB\x02\x02\u01EB" +
		"\u01F0\x05\u013C\x9F\x02\u01EC\u01ED\x07\u019C\x02\x02\u01ED\u01F0\x05" +
		"\u0140\xA1\x02\u01EE\u01F0\x05\x1A\x0E\x02\u01EF\u01E9\x03\x02\x02\x02" +
		"\u01EF\u01EC\x03\x02\x02\x02\u01EF\u01EE\x03\x02\x02\x02\u01F0\x19\x03" +
		"\x02\x02\x02\u01F1\u01F2\x07\u019C\x02\x02\u01F2\u01F3\x07\xE5\x02\x02" +
		"\u01F3\u01F8\x05\u014C\xA7\x02\u01F4\u01F5\x07\u020A\x02\x02\u01F5\u01F7" +
		"\x05\u014C\xA7\x02\u01F6\u01F4\x03\x02\x02\x02\u01F7\u01FA\x03\x02\x02" +
		"\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\x1B" +
		"\x03\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FB\u01FC\x07\u0157\x02" +
		"\x02\u01FC\u0226\t\x04\x02\x02\u01FD\u01FE\x07\u0157\x02\x02\u01FE\u01FF" +
		"\x07N\x02\x02\u01FF\u0226\t\x05\x02\x02\u0200\u0201\x07\u0157\x02\x02" +
		"\u0201\u0204\x07\u0178\x02\x02\u0202\u0203\t\x06\x02\x02\u0203\u0205\x05" +
		"\u0140\xA1\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02" +
		"\u0205\u0207\x03\x02\x02\x02\u0206\u0208\x05\u010C\x87\x02\u0207\u0206" +
		"\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u0226\x03\x02\x02\x02" +
		"\u0209\u020A\x07\u0157\x02\x02\u020A\u020B\x07<\x02\x02\u020B\u020E\t" +
		"\x06\x02\x02\u020C\u020F\x05\u0148\xA5\x02\u020D\u020F\x05\u0146\xA4\x02" +
		"\u020E\u020C\x03\x02\x02\x02\u020E\u020D\x03\x02\x02\x02\u020F\u0211\x03" +
		"\x02\x02\x02\u0210\u0212\x05\u010C\x87\x02\u0211\u0210\x03\x02\x02\x02" +
		"\u0211\u0212\x03\x02\x02\x02\u0212\u0226\x03\x02\x02\x02\u0213\u0214\x07" +
		"\u0157\x02\x02\u0214\u0219\x07J\x02\x02\u0215\u0216\x07\u0177\x02\x02" +
		"\u0216\u021A\x05\u0146\xA4\x02\u0217\u0218\x07\u01F7\x02\x02\u0218\u021A" +
		"\x05\u0148\xA5\x02\u0219\u0215\x03\x02\x02\x02\u0219\u0217\x03\x02\x02" +
		"\x02\u021A\u0226\x03\x02\x02\x02\u021B\u021D\x07\u0157\x02\x02\u021C\u021E" +
		"\x07\u019D\x02\x02\u021D\u021C\x03\x02\x02\x02\u021D\u021E\x03\x02\x02" +
		"\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0226\x07\x9C\x02\x02\u0220\u0222" +
		"\x07\u0157\x02\x02\u0221\u0223\x07\x9A\x02\x02\u0222\u0221\x03\x02\x02" +
		"\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\u0226" +
		"\x07\xE5\x02\x02\u0225\u01FB\x03\x02\x02\x02\u0225\u01FD\x03\x02\x02\x02" +
		"\u0225\u0200\x03\x02\x02\x02\u0225\u0209\x03\x02\x02\x02\u0225\u0213\x03" +
		"\x02\x02\x02\u0225\u021B\x03\x02\x02\x02\u0225\u0220\x03\x02\x02\x02\u0226" +
		"\x1D\x03\x02\x02\x02\u0227\u0228\x07\u01D6\x02\x02\u0228\u0229\x07\xE4" +
		"\x02\x02\u0229\u022C\x05\u014C\xA7\x02\u022A\u022B\x07\u01B3\x02\x02\u022B" +
		"\u022D\x05\u0154\xAB\x02\u022C\u022A\x03\x02\x02\x02\u022C\u022D\x03\x02" +
		"\x02\x02\u022D\x1F\x03\x02\x02\x02\u022E\u022F\x07\u01F6\x02\x02\u022F" +
		"\u0230\x07\xE4\x02\x02\u0230\u0231\x05\u014C\xA7\x02\u0231!\x03\x02\x02" +
		"\x02\u0232\u0234\x07\u0156\x02\x02\u0233\u0235\x05\u0156\xAC\x02\u0234" +
		"\u0233\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235#\x03\x02\x02" +
		"\x02\u0236\u0238\x07\u013A\x02\x02\u0237\u0239\x05\u0158\xAD\x02\u0238" +
		"\u0237\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239%\x03\x02\x02" +
		"\x02\u023A\u023B\t\x07\x02\x02\u023B\u023C\x07\u01D1\x02\x02\u023C\u023D" +
		"\x05t;\x02\u023D\'\x03\x02\x02\x02\u023E\u023F\x07\u01B7\x02\x02\u023F" +
		"\u0240\x07\u01D1\x02\x02\u0240\u0241\x07\u01B3\x02\x02\u0241\u0244\x05" +
		"*\x16\x02\u0242\u0243\x07\x13\x02\x02\u0243\u0245\x05\u014C\xA7\x02\u0244" +
		"\u0242\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245\u0271\x03\x02" +
		"\x02\x02\u0246\u0247\x07\u01B7\x02\x02\u0247\u0248\x07\u01CA\x02\x02\u0248" +
		"\u0249\x07\u01B3\x02\x02\u0249\u024C\x05*\x16\x02\u024A\u024B\x07\x13" +
		"\x02\x02\u024B\u024D\x05\u014C\xA7\x02\u024C\u024A\x03\x02\x02\x02\u024C" +
		"\u024D\x03\x02\x02\x02\u024D\u0250\x03\x02\x02\x02\u024E\u024F\x07\u0139" +
		"\x02\x02\u024F\u0251\x05\u014C\xA7\x02\u0250\u024E\x03\x02\x02\x02\u0250" +
		"\u0251\x03\x02\x02\x02\u0251\u0271\x03\x02\x02\x02\u0252\u0253\x07\u01B7" +
		"\x02\x02\u0253\u0254\t\b\x02\x02\u0254\u0255\x07\u01B3\x02\x02\u0255\u0256" +
		"\x05*\x16\x02\u0256\u0257\x07\u0139\x02\x02\u0257\u0258\x05\u014C\xA7" +
		"\x02\u0258\u0271\x03\x02\x02\x02\u0259\u025A\x07\u01B7\x02\x02\u025A\u025B" +
		"\x07\u01E8\x02\x02\u025B\u0271\x05*\x16\x02\u025C\u025D\x07\u01B7\x02" +
		"\x02\u025D\u025E\x07\u01C7\x02\x02\u025E\u025F\x07\u01CA\x02\x02\u025F" +
		"\u0260\x07\u01B3\x02\x02\u0260\u0261\x05*\x16\x02\u0261\u0262\x07\u0139" +
		"\x02\x02\u0262\u0263\x05\u014C\xA7\x02\u0263\u0264\x07\u01D4\x02\x02\u0264" +
		"\u0265\x05\u014C\xA7\x02\u0265\u0271\x03\x02\x02\x02\u0266\u0267\x07\u01B7" +
		"\x02\x02\u0267\u0268\x07\u01BD\x02\x02\u0268\u0269\x07\u01CA\x02\x02\u0269" +
		"\u026A\x07\u01B3\x02\x02\u026A\u026B\x05*\x16\x02\u026B\u026C\x07\x94" +
		"\x02\x02\u026C\u026D\x05\u014C\xA7\x02\u026D\u026E\x07\x13\x02\x02\u026E" +
		"\u026F\x05\u014C\xA7\x02\u026F\u0271\x03\x02\x02\x02\u0270\u023E\x03\x02" +
		"\x02\x02\u0270\u0246\x03\x02\x02\x02\u0270\u0252\x03\x02\x02\x02\u0270" +
		"\u0259\x03\x02\x02\x02\u0270\u025C\x03\x02\x02\x02\u0270\u0266\x03\x02" +
		"\x02\x02\u0271)\x03\x02\x02\x02\u0272\u0274\x07\u0218\x02\x02\u0273\u0272" +
		"\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02" +
		"\u0275\u0277\x05\u014C\xA7\x02\u0276\u0273\x03\x02\x02\x02\u0277\u0278" +
		"\x03\x02\x02\x02\u0278\u0276\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02" +
		"\u0279+\x03\x02\x02\x02\u027A\u027D\x05.\x18\x02\u027B\u027D\x050\x19" +
		"\x02\u027C\u027A\x03\x02\x02\x02\u027C\u027B\x03\x02\x02\x02\u027D-\x03" +
		"\x02\x02\x02\u027E\u0280\x07J\x02\x02\u027F\u0281\x07\u01F3\x02\x02\u0280" +
		"\u027F\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0282\x03\x02" +
		"\x02\x02\u0282\u0284\x07\u0177\x02\x02\u0283\u0285\x05\u0150\xA9\x02\u0284" +
		"\u0283\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0286\x03\x02" +
		"\x02\x02\u0286\u0287\x05\u0144\xA3\x02\u0287\u0288\x07\u0206\x02\x02\u0288" +
		"\u028D\x052\x1A\x02\u0289\u028A\x07\u020A\x02\x02\u028A\u028C\x052\x1A" +
		"\x02\u028B\u0289\x03\x02\x02\x02\u028C\u028F\x03\x02\x02\x02\u028D\u028B" +
		"\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\u0292\x03\x02\x02\x02" +
		"\u028F\u028D\x03\x02\x02\x02\u0290\u0291\x07\u020A\x02\x02\u0291\u0293" +
		"\x05V,\x02\u0292\u0290\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293" +
		"\u0296\x03\x02\x02\x02\u0294\u0295\x07\u020A\x02\x02\u0295\u0297\x05X" +
		"-\x02\u0296\u0294\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297\u029A" +
		"\x03\x02\x02\x02\u0298\u0299\x07\u020A\x02\x02\u0299\u029B\x05\\/\x02" +
		"\u029A\u0298\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B\u029C\x03" +
		"\x02\x02\x02\u029C\u029E\x07\u0207\x02\x02\u029D\u029F\x05L\'\x02\u029E" +
		"\u029D\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F\u02A1\x03\x02" +
		"\x02\x02\u02A0\u02A2\x05^0\x02\u02A1\u02A0\x03\x02\x02\x02\u02A1\u02A2" +
		"\x03\x02\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A5\x05\u014E\xA8" +
		"\x02\u02A4\u02A6\x05f4\x02\u02A5\u02A4\x03\x02\x02\x02\u02A5\u02A6\x03" +
		"\x02\x02\x02\u02A6/\x03\x02\x02\x02\u02A7\u02A8\x07J\x02\x02\u02A8\u02AA" +
		"\x07\u0177\x02\x02\u02A9\u02AB\x05\u0150\xA9\x02\u02AA\u02A9\x03\x02\x02" +
		"\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC\u02AD" +
		"\x05\u0144\xA3\x02\u02AD\u02B0\x05\u014E\xA8\x02\u02AE\u02AF\x07\x13\x02" +
		"\x02\u02AF\u02B1\x05\xA2R\x02\u02B0\u02AE\x03\x02\x02\x02\u02B0\u02B1" +
		"\x03\x02\x02\x02\u02B11\x03\x02\x02\x02\u02B2\u02B6\x054\x1B\x02\u02B3" +
		"\u02B6\x05N(\x02\u02B4\u02B6\x05R*\x02\u02B5\u02B2\x03\x02\x02\x02\u02B5" +
		"\u02B3\x03\x02\x02\x02\u02B5\u02B4\x03\x02\x02\x02\u02B63\x03\x02\x02" +
		"\x02\u02B7\u02B8\x056\x1C\x02\u02B8\u02BA\x05<\x1F\x02\u02B9\u02BB\x05" +
		"J&\x02\u02BA\u02B9\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02BD" +
		"\x03\x02\x02\x02\u02BC\u02BE\x05L\'\x02\u02BD\u02BC\x03\x02\x02\x02\u02BD" +
		"\u02BE\x03\x02\x02\x02\u02BE5\x03\x02\x02\x02\u02BF\u02C2\x05\u014C\xA7" +
		"\x02\u02C0\u02C2\x05\u0106\x84\x02\u02C1\u02BF\x03\x02\x02\x02\u02C1\u02C0" +
		"\x03\x02\x02\x02\u02C27\x03\x02\x02\x02\u02C3\u02C6\x05\u014C\xA7\x02" +
		"\u02C4\u02C6\x05\u0106\x84\x02\u02C5\u02C3\x03\x02\x02\x02\u02C5\u02C4" +
		"\x03\x02\x02\x02\u02C69\x03\x02\x02\x02\u02C7\u02C8\x07\u0206\x02\x02" +
		"\u02C8\u02CD\x058\x1D\x02\u02C9\u02CA\x07\u020A\x02\x02\u02CA\u02CC\x05" +
		"8\x1D\x02\u02CB\u02C9\x03\x02\x02\x02\u02CC\u02CF\x03\x02\x02\x02\u02CD" +
		"\u02CB\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02D0\x03\x02" +
		"\x02\x02\u02CF\u02CD\x03\x02\x02\x02\u02D0\u02D1\x07\u0207\x02\x02\u02D1" +
		";\x03\x02\x02\x02\u02D2\u02F8\t\t\x02\x02\u02D3\u02D5\t\n\x02\x02\u02D4" +
		"\u02D6\x05> \x02\u02D5\u02D4\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02" +
		"\u02D6\u02F8\x03\x02\x02\x02\u02D7\u02D9\x07\u017D\x02\x02\u02D8\u02DA" +
		"\x05> \x02\u02D9\u02D8\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA" +
		"\u02E1\x03\x02\x02\x02\u02DB\u02DD\t\v\x02\x02\u02DC\u02DE\x07\xD0\x02" +
		"\x02\u02DD\u02DC\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE\u02DF" +
		"\x03\x02\x02\x02\u02DF\u02E0\x07\u017C\x02\x02\u02E0\u02E2\x07\u01FA\x02" +
		"\x02\u02E1\u02DB\x03\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2\u02F8" +
		"\x03\x02\x02\x02\u02E3\u02E5\t\f\x02\x02\u02E4\u02E6\x05@!\x02\u02E5\u02E4" +
		"\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02F8\x03\x02\x02\x02" +
		"\u02E7\u02E9\t\r\x02\x02\u02E8\u02EA\x05D#\x02\u02E9\u02E8\x03\x02\x02" +
		"\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA\u02F8\x03\x02\x02\x02\u02EB\u02ED" +
		"\x07\u01D7\x02\x02\u02EC\u02EE\x05F$\x02\u02ED\u02EC\x03\x02\x02\x02\u02ED" +
		"\u02EE\x03\x02\x02\x02\u02EE\u02F8\x03\x02\x02\x02\u02EF\u02F1\x07\u0143" +
		"\x02\x02\u02F0\u02F2\x05H%\x02\u02F1\u02F0\x03\x02\x02\x02\u02F1\u02F2" +
		"\x03\x02\x02\x02\u02F2\u02F8\x03\x02\x02\x02\u02F3\u02F5\x07\u0128\x02" +
		"\x02\u02F4\u02F6\x05B\"\x02\u02F5\u02F4\x03\x02\x02\x02\u02F5\u02F6\x03" +
		"\x02\x02\x02\u02F6\u02F8\x03\x02\x02\x02\u02F7\u02D2\x03\x02\x02\x02\u02F7" +
		"\u02D3\x03\x02\x02\x02\u02F7\u02D7\x03\x02\x02\x02\u02F7\u02E3\x03\x02" +
		"\x02\x02\u02F7\u02E7\x03\x02\x02\x02\u02F7\u02EB\x03\x02\x02\x02\u02F7" +
		"\u02EF\x03\x02\x02\x02\u02F7\u02F3\x03\x02\x02\x02\u02F8=\x03\x02\x02" +
		"\x02\u02F9\u02FA\x07\u0206\x02\x02\u02FA\u02FB\x05\u016C\xB7\x02\u02FB" +
		"\u02FC\x07\u0207\x02\x02\u02FC?\x03\x02\x02\x02\u02FD\u02FE\x07\u0206" +
		"\x02\x02\u02FE\u0301\x05\u016C\xB7\x02\u02FF\u0300\x07\u020A\x02\x02\u0300" +
		"\u0302\x05\u016C\xB7\x02\u0301\u02FF\x03\x02\x02\x02\u0301\u0302\x03\x02" +
		"\x02\x02\u0302\u0303\x03\x02\x02\x02\u0303\u0304\x07\u0207\x02\x02\u0304" +
		"A\x03\x02\x02\x02\u0305\u0306\x07\u0206\x02\x02\u0306\u0309\x05\u016A" +
		"\xB6\x02\u0307\u0308\x07\u020A\x02\x02\u0308\u030A\x05\u016A\xB6\x02\u0309" +
		"\u0307\x03\x02\x02\x02\u0309\u030A\x03\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\u030A\u030B\x03\x02\x02\x02\u030B\u030C\x07\u0207\x02\x02\u030C" +
		"C\x03\x02\x02\x02\u030D\u030E\x07\u01FD\x02\x02\u030E\u030F\x05<\x1F\x02" +
		"\u030F\u0310\x07\u01FC\x02\x02\u0310E\x03\x02\x02\x02\u0311\u0312\x07" +
		"\u01FD\x02\x02\u0312\u0313\x05<\x1F\x02\u0313\u0314\x07\u020A\x02\x02" +
		"\u0314\u0315\x05<\x1F\x02\u0315\u0316\x03\x02\x02\x02\u0316\u0317\x07" +
		"\u01FC\x02\x02\u0317G\x03\x02\x02\x02\u0318\u0319\x07\u01FD\x02\x02\u0319" +
		"\u031A\x058\x1D\x02\u031A\u0321\x05<\x1F\x02\u031B\u031C\x07\u020A\x02" +
		"\x02\u031C\u031D\x058\x1D\x02\u031D\u031E\x05<\x1F\x02\u031E\u0320\x03" +
		"\x02\x02\x02\u031F\u031B\x03\x02\x02\x02\u0320\u0323\x03\x02\x02\x02\u0321" +
		"\u031F\x03\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\u0324\x03\x02" +
		"\x02\x02\u0323\u0321\x03\x02\x02\x02\u0324\u0325\x07\u01FC\x02\x02\u0325" +
		"I\x03\x02\x02\x02\u0326\u0327\x07B\x02\x02\u0327\u0329\x05Z.\x02\u0328" +
		"\u0326\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032A\x03\x02" +
		"\x02\x02\u032A\u032B\x07\u0122\x02\x02\u032B\u032E\x07\u01D4\x02\x02\u032C" +
		"\u032D\x07\xF3\x02\x02\u032D\u032F\x07\x7F\x02\x02\u032E\u032C\x03\x02" +
		"\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\u0335\x03\x02\x02\x02\u0330" +
		"\u0332\x07\xF3\x02\x02\u0331\u0330\x03\x02\x02\x02\u0331\u0332\x03\x02" +
		"\x02\x02\u0332\u0333\x03\x02\x02\x02\u0333\u0335\x07\xF6\x02\x02\u0334" +
		"\u0328\x03\x02\x02\x02\u0334\u0331\x03\x02\x02\x02\u0335K\x03\x02\x02" +
		"\x02\u0336\u0337\x07=\x02\x02\u0337\u0338\x07\u021B\x02\x02\u0338M\x03" +
		"\x02\x02\x02\u0339\u033A\x056\x1C\x02\u033A\u033B\x05<\x1F\x02\u033B\u033E" +
		"\x07\xDC\x02\x02\u033C\u033D\x07\x99\x02\x02\u033D\u033F\x05P)\x02\u033E" +
		"\u033C\x03\x02\x02\x02\u033E\u033F\x03\x02\x02\x02\u033F\u0341\x03\x02" +
		"\x02\x02\u0340\u0342\x07\u01A9\x02\x02\u0341\u0340\x03\x02\x02\x02\u0341" +
		"\u0342\x03\x02\x02\x02\u0342O\x03\x02\x02\x02\u0343\u0344\x07\u021B\x02" +
		"\x02\u0344Q\x03\x02\x02\x02\u0345\u0346\x056\x1C\x02\u0346\u0347\x07\x13" +
		"\x02\x02\u0347\u0349\x05T+\x02\u0348\u034A\x05L\'\x02\u0349\u0348\x03" +
		"\x02\x02\x02\u0349\u034A\x03\x02\x02\x02\u034AS\x03\x02\x02\x02\u034B" +
		"\u034C\x05\u0106\x84\x02\u034CU\x03\x02\x02\x02\u034D\u034E\x07\u01AA" +
		"\x02\x02\u034E\u034F\x07\x94\x02\x02\u034F\u0350\x058\x1D\x02\u0350\u0351" +
		"\x07\x13\x02\x02\u0351\u0352\x05\u0106\x84\x02\u0352W\x03\x02\x02\x02" +
		"\u0353\u0354\x07B\x02\x02\u0354\u0356\x05Z.\x02\u0355\u0353\x03\x02\x02" +
		"\x02\u0355\u0356\x03\x02\x02\x02\u0356\u0357\x03\x02\x02\x02\u0357\u0358" +
		"\x07\u0122\x02\x02\u0358\u0359\x07\u01D4\x02\x02\u0359\u035A\x05:\x1E" +
		"\x02\u035A\u035B\x07\xF3\x02\x02\u035B\u035C\x07\x7F\x02\x02\u035CY\x03" +
		"\x02\x02\x02\u035D\u035E\x05\u0134\x9B\x02\u035E[\x03\x02\x02\x02\u035F" +
		"\u0360\x07\u0117\x02\x02\u0360\u0361\x07\x94\x02\x02\u0361\u0362\x07\u0175" +
		"\x02\x02\u0362]\x03\x02\x02\x02\u0363\u0364\x07\u010F\x02\x02\u0364\u0365" +
		"\x07$\x02\x02\u0365\u0366\x05`1\x02\u0366_\x03\x02\x02\x02\u0367\u0368" +
		"\x07\u0206\x02\x02\u0368\u036D\x05b2\x02\u0369\u036A\x07\u020A\x02\x02" +
		"\u036A\u036C\x05b2\x02\u036B\u0369\x03\x02\x02\x02\u036C\u036F\x03\x02" +
		"\x02\x02\u036D\u036B\x03\x02\x02\x02\u036D\u036E\x03\x02\x02\x02\u036E" +
		"\u0370\x03\x02\x02\x02\u036F\u036D\x03\x02\x02\x02\u0370\u0371\x07\u0207" +
		"\x02\x02\u0371a\x03\x02\x02\x02\u0372\u0380\x058\x1D\x02\u0373\u0380\x05" +
		"\u011C\x8F\x02\u0374\u0375\x07\u0206\x02\x02\u0375\u037A\x05d3\x02\u0376" +
		"\u0377\x07\u020A\x02\x02\u0377\u0379\x05d3\x02\u0378\u0376\x03\x02\x02" +
		"\x02\u0379\u037C\x03\x02\x02\x02\u037A\u0378\x03\x02\x02\x02\u037A\u037B" +
		"\x03\x02\x02\x02\u037B\u037D\x03\x02\x02\x02\u037C\u037A\x03\x02\x02\x02" +
		"\u037D\u037E\x07\u0207\x02\x02\u037E\u0380\x03\x02\x02\x02\u037F\u0372" +
		"\x03\x02\x02\x02\u037F\u0373\x03\x02\x02\x02\u037F\u0374\x03\x02\x02\x02" +
		"\u0380c\x03\x02\x02\x02\u0381\u0384\x05\u011C\x8F\x02\u0382\u0384\x05" +
		"\u0166\xB4\x02\u0383\u0381\x03\x02\x02\x02\u0383\u0382\x03\x02\x02\x02" +
		"\u0384e\x03\x02\x02\x02\u0385\u0386\x07\xCC\x02\x02\u0386\u038F\x05\u0146" +
		"\xA4\x02\u0387\u038B\x07\u0206\x02\x02\u0388\u038A\x05h5\x02\u0389\u0388" +
		"\x03\x02\x02\x02\u038A\u038D\x03\x02\x02\x02\u038B\u0389\x03\x02\x02\x02" +
		"\u038B\u038C\x03\x02\x02\x02\u038C\u038E\x03\x02\x02\x02\u038D\u038B\x03" +
		"\x02\x02\x02\u038E\u0390\x07\u0207\x02\x02\u038F\u0387\x03\x02\x02\x02" +
		"\u038F\u0390\x03\x02\x02\x02\u0390g\x03\x02\x02\x02\u0391\u0392\t\x0E" +
		"\x02\x02\u0392\u0396\t\x0F\x02\x02\u0393\u0394\t\x10\x02\x02\u0394\u0396" +
		"\t\x11\x02\x02\u0395\u0391\x03\x02\x02\x02\u0395\u0393\x03\x02\x02\x02" +
		"\u0396i\x03\x02\x02\x02\u0397\u0398\x07J\x02\x02\u0398\u0399\x07\u01BB" +
		"\x02\x02\u0399\u039A\x05\u013E\xA0\x02\u039A\u039B\x05\u014E\xA8\x02\u039B" +
		"k\x03\x02\x02\x02\u039C\u039D\x07J\x02\x02\u039D\u039F\x07\u01C1\x02\x02" +
		"\u039E\u03A0\x05\u0150\xA9\x02\u039F\u039E\x03\x02\x02\x02\u039F\u03A0" +
		"\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\u03A3\x05\u0142\xA2" +
		"\x02\u03A2\u03A4\x05L\'\x02\u03A3\u03A2\x03\x02\x02\x02\u03A3\u03A4\x03" +
		"\x02\x02\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5\u03A6\x05\u014E\xA8\x02" +
		"\u03A6m\x03\x02\x02\x02\u03A7\u03A9\x07J\x02\x02\u03A8\u03AA\x07\u01F3" +
		"\x02\x02\u03A9\u03A8\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA" +
		"\u03AB\x03\x02\x02\x02\u03AB\u03AD\x07\u01F7\x02\x02\u03AC\u03AE\x05\u0150" +
		"\xA9\x02\u03AD\u03AC\x03\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE" +
		"\u03AF\x03\x02\x02\x02\u03AF\u03B1\x05\u014A\xA6\x02\u03B0\u03B2\x05:" +
		"\x1E\x02\u03B1\u03B0\x03\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2" +
		"\u03B4\x03\x02\x02\x02\u03B3\u03B5\x05L\'\x02\u03B4\u03B3\x03\x02\x02" +
		"\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5\u03B6\x03\x02\x02\x02\u03B6\u03B7" +
		"\x07\x13\x02\x02\u03B7\u03B8\x05\xA2R\x02\u03B8o\x03\x02\x02\x02\u03B9" +
		"\u03BD\x07J\x02\x02\u03BA\u03BE\x07\u01F3\x02\x02\u03BB\u03BC\x07\u01F3" +
		"\x02\x02\u03BC\u03BE\x07\u0174\x02\x02\u03BD\u03BA\x03\x02\x02\x02\u03BD" +
		"\u03BB\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03BF\x03\x02" +
		"\x02\x02\u03BF\u03C1\x07\x9B\x02\x02\u03C0\u03C2\x05\u0150\xA9\x02\u03C1" +
		"\u03C0\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2\u03C3\x03\x02" +
		"\x02\x02\u03C3\u03C4\x05\u0112\x8A\x02\u03C4\u03C5\x07\x13\x02\x02\u03C5" +
		"\u03C8\x05\u0134\x9B\x02\u03C6\u03C7\x07\xC5\x02\x02\u03C7\u03C9\t\x12" +
		"\x02\x02\u03C8\u03C6\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9" +
		"\u03CB\x03\x02\x02\x02\u03CA\u03CC\x05r:\x02\u03CB\u03CA\x03\x02\x02\x02" +
		"\u03CB\u03CC\x03\x02\x02\x02\u03CCq\x03\x02\x02\x02\u03CD\u03CE\x07\u019E" +
		"\x02\x02\u03CE\u03CF\x07\u01D1\x02\x02\u03CF\u03D5\x05t;\x02\u03D0\u03D1" +
		"\x07\u020A\x02\x02\u03D1\u03D2\x07\u01D1\x02\x02\u03D2\u03D4\x05t;\x02" +
		"\u03D3\u03D0\x03\x02\x02\x02\u03D4\u03D7\x03\x02\x02\x02\u03D5\u03D3\x03" +
		"\x02\x02\x02\u03D5\u03D6\x03\x02\x02\x02\u03D6s\x03\x02\x02\x02\u03D7" +
		"\u03D5\x03\x02\x02\x02\u03D8\u03D9\x07\u021B\x02\x02\u03D9u\x03\x02\x02" +
		"\x02\u03DA\u03DB\x07\n\x02\x02\u03DB\u03DD\x07\u0177\x02\x02\u03DC\u03DE" +
		"\x05\u0152\xAA\x02\u03DD\u03DC\x03\x02\x02\x02\u03DD\u03DE\x03\x02\x02" +
		"\x02\u03DE\u03DF\x03\x02\x02\x02\u03DF\u03E5\x05\u0146\xA4\x02\u03E0\u03E6" +
		"\x05x=\x02\u03E1\u03E6\x05z>\x02\u03E2\u03E6\x05|?\x02\u03E3\u03E6\x05" +
		"~@\x02\u03E4\u03E6\x05\x80A\x02\u03E5\u03E0\x03\x02\x02\x02\u03E5\u03E1" +
		"\x03\x02\x02\x02\u03E5\u03E2\x03\x02\x02\x02\u03E5\u03E3\x03\x02\x02\x02" +
		"\u03E5\u03E4\x03\x02\x02\x02\u03E6w\x03\x02\x02\x02\u03E7\u03E9\x07\u0139" +
		"\x02\x02\u03E8\u03EA\x05\u014C\xA7\x02\u03E9\u03E8\x03\x02\x02\x02\u03E9" +
		"\u03EA\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02\u03EB\u03EC\x07\u0186" +
		"\x02\x02\u03EC\u03ED\x05\u014C\xA7\x02\u03EDy\x03\x02\x02\x02\u03EE\u03EF" +
		"\x07\u0156\x02\x02\u03EF\u03F0\x05\u0154\xAB\x02\u03F0{\x03\x02\x02\x02" +
		"\u03F1\u03F2\x07\u01B7\x02\x02\u03F2\u03F3\x07B\x02\x02\u03F3\u03F4\x05" +
		"Z.\x02\u03F4\u03F5\x07\u0122\x02\x02\u03F5\u03F6\x07\u01D4\x02\x02\u03F6" +
		"\u03F8\x05:\x1E\x02\u03F7\u03F9\x05\x82B\x02\u03F8\u03F7\x03\x02\x02\x02" +
		"\u03F8\u03F9\x03\x02\x02\x02\u03F9}\x03\x02\x02\x02\u03FA\u03FB\x07v\x02" +
		"\x02\u03FB\u03FC\x07B\x02\x02\u03FC\u03FD\x05Z.\x02\u03FD\x7F\x03\x02" +
		"\x02\x02\u03FE\u03FF\x07\u01B7\x02\x02\u03FF\u0400\x07\u0195\x02\x02\u0400" +
		"\u0401\x05:\x1E\x02\u0401\x81\x03\x02\x02\x02\u0402\u0403\x07\xF3\x02" +
		"\x02\u0403\u0404\x07\x7F\x02\x02\u0404\x83\x03\x02\x02\x02\u0405\u0406" +
		"\x07\n\x02\x02\u0406\u0407\x07\u01F7\x02\x02\u0407\u040B\x05\u0148\xA5" +
		"\x02\u0408\u040C\x05x=\x02\u0409\u040A\x07\x13\x02\x02\u040A\u040C\x05" +
		"\xA2R\x02\u040B\u0408\x03\x02\x02\x02\u040B\u0409\x03\x02\x02\x02\u040C" +
		"\x85\x03\x02\x02\x02\u040D\u040E\x07\n\x02\x02\u040E\u040F\x07\u01C1\x02" +
		"\x02\u040F\u0410\x05\u0140\xA1\x02\u0410\u0411\x05z>\x02\u0411\x87\x03" +
		"\x02\x02\x02\u0412\u0416\x07\n\x02\x02\u0413\u0417\x07\u01F3\x02\x02\u0414" +
		"\u0415\x07\u01F3\x02\x02\u0415\u0417\x07\u0174\x02\x02\u0416\u0413\x03" +
		"\x02\x02\x02\u0416\u0414\x03\x02\x02\x02\u0416\u0417\x03\x02\x02\x02\u0417" +
		"\u0418\x03\x02\x02\x02\u0418\u041A\x07\x9B\x02\x02\u0419\u041B\x05\u0152" +
		"\xAA\x02\u041A\u0419\x03\x02\x02\x02\u041A\u041B\x03\x02\x02\x02\u041B" +
		"\u041C\x03\x02\x02\x02\u041C\u041D\x05\u0114\x8B\x02\u041D\u041E\x07\x13" +
		"\x02\x02\u041E\u0421\x05\u0134\x9B\x02\u041F\u0420\x07\xC5\x02\x02\u0420" +
		"\u0422\t\x12\x02\x02\u0421\u041F\x03\x02\x02\x02\u0421\u0422\x03\x02\x02" +
		"\x02\u0422\x89\x03\x02\x02\x02\u0423\u0424\x07v\x02\x02\u0424\u0426\x07" +
		"\u01BB\x02\x02\u0425\u0427\x05\u0152\xAA\x02\u0426\u0425\x03\x02\x02\x02" +
		"\u0426\u0427\x03\x02\x02\x02\u0427\u0428\x03\x02\x02\x02\u0428\u0429\x05" +
		"\u013C\x9F\x02\u0429\x8B\x03\x02\x02\x02\u042A\u042C\x07v\x02\x02\u042B" +
		"\u042D\x07\u01F3\x02\x02\u042C\u042B\x03\x02\x02\x02\u042C\u042D\x03\x02" +
		"\x02\x02\u042D\u042E\x03\x02\x02\x02\u042E\u0430\x07\u0177\x02\x02\u042F" +
		"\u0431\x05\u0152\xAA\x02\u0430\u042F\x03\x02\x02\x02\u0430\u0431\x03\x02" +
		"\x02\x02\u0431\u0432\x03\x02\x02\x02\u0432\u0433\x05\u0146\xA4\x02\u0433" +
		"\x8D\x03\x02\x02\x02\u0434\u0435\x07v\x02\x02\u0435\u0437\x07\u01C1\x02" +
		"\x02\u0436\u0438\x05\u0152\xAA\x02\u0437\u0436\x03\x02\x02\x02\u0437\u0438" +
		"\x03\x02\x02\x02\u0438\u0439\x03\x02\x02\x02\u0439\u043B\x05\u0140\xA1" +
		"\x02\u043A\u043C\t\x13\x02\x02\u043B\u043A\x03\x02\x02\x02\u043B\u043C" +
		"\x03\x02\x02\x02\u043C\x8F\x03\x02\x02\x02\u043D\u043F\x07v\x02\x02\u043E" +
		"\u0440\x07\u01F3\x02\x02\u043F\u043E\x03\x02\x02\x02\u043F\u0440\x03\x02" +
		"\x02\x02\u0440\u0441\x03\x02\x02\x02\u0441\u0443\x07\u01F7\x02\x02\u0442" +
		"\u0444\x05\u0152\xAA\x02\u0443\u0442\x03\x02\x02\x02\u0443\u0444\x03\x02" +
		"\x02\x02\u0444\u0445\x03\x02\x02\x02\u0445\u0446\x05\u0148\xA5\x02\u0446" +
		"\x91\x03\x02\x02\x02\u0447\u044B\x07v\x02\x02\u0448\u044C\x07\u01F3\x02" +
		"\x02\u0449\u044A\x07\u01F3\x02\x02\u044A\u044C\x07\u0174\x02\x02\u044B" +
		"\u0448\x03\x02\x02\x02\u044B\u0449\x03\x02\x02\x02\u044B\u044C\x03\x02" +
		"\x02\x02\u044C\u044D\x03\x02\x02\x02\u044D\u044F\x07\x9B\x02\x02\u044E" +
		"\u0450\x05\u0152\xAA\x02\u044F\u044E\x03\x02\x02\x02\u044F\u0450\x03\x02" +
		"\x02\x02\u0450\u0451\x03\x02\x02\x02\u0451\u0452\x05\u0114\x8B\x02\u0452" +
		"\x93\x03\x02\x02\x02\u0453\u0455\x07\x86\x02\x02\u0454\u0453\x03\x02\x02" +
		"\x02\u0454\u0455\x03\x02\x02\x02\u0455\u0456\x03\x02\x02\x02\u0456\u045B" +
		"\x05\x96L\x02\u0457\u045B\x05\x9EP\x02\u0458\u0459\x07\x86\x02\x02\u0459" +
		"\u045B\x05\xA0Q\x02\u045A\u0454\x03\x02\x02\x02\u045A\u0457\x03\x02\x02" +
		"\x02\u045A\u0458\x03\x02\x02\x02\u045B\x95\x03\x02\x02\x02\u045C\u045D" +
		"\x07\xB3\x02\x02\u045D\u045E\t\x14\x02\x02\u045E\u0467\x05\u0146\xA4\x02" +
		"\u045F\u0461\x05\x98M\x02\u0460\u045F\x03\x02\x02\x02\u0460\u0461\x03" +
		"\x02\x02\x02\u0461\u0463\x03\x02\x02\x02\u0462\u0464\x05:\x1E\x02\u0463" +
		"\u0462\x03\x02\x02\x02\u0463\u0464\x03\x02\x02\x02\u0464\u0465\x03\x02" +
		"\x02\x02\u0465\u0468\x05\xA2R\x02\u0466\u0468\x05\x9AN\x02\u0467\u0460" +
		"\x03\x02\x02\x02\u0467\u0466\x03\x02\x02\x02\u0468\x97\x03\x02\x02\x02" +
		"\u0469\u046A\x07\u010E\x02\x02\u046A\u046B\x05\u0154\xAB\x02\u046B\x99" +
		"\x03\x02\x02\x02\u046C\u046D\x07\u01A0\x02\x02\u046D\u0472\x05\x9CO\x02" +
		"\u046E\u046F\x07\u020A\x02\x02\u046F\u0471\x05\x9CO\x02\u0470\u046E\x03" +
		"\x02\x02\x02\u0471\u0474\x03\x02\x02\x02\u0472\u0470\x03\x02\x02\x02\u0472" +
		"\u0473\x03\x02\x02\x02\u0473\x9B\x03\x02\x02\x02\u0474\u0472\x03\x02\x02" +
		"\x02\u0475\u0476\x07\u0206\x02\x02\u0476\u047B\x05\u0166\xB4\x02\u0477" +
		"\u0478\x07\u020A\x02\x02\u0478\u047A\x05\u0166\xB4\x02\u0479\u0477\x03" +
		"\x02\x02\x02\u047A\u047D\x03\x02\x02\x02\u047B\u0479\x03\x02\x02\x02\u047B" +
		"\u047C\x03\x02\x02\x02\u047C\u047E\x03\x02\x02\x02\u047D\u047B\x03\x02" +
		"\x02\x02\u047E\u047F\x07\u0207\x02\x02\u047F\x9D\x03\x02\x02\x02\u0480" +
		"\u0481\x07\x1A\x02\x02\u0481\u0482\x07\u0164\x02\x02\u0482\u0483\x07\u0156" +
		"\x02\x02\u0483\u0487\x07\u020B\x02\x02\u0484\u0485\x05\x96L\x02\u0485" +
		"\u0486\x07\u020B\x02\x02\u0486\u0488\x03\x02\x02\x02\u0487\u0484\x03\x02" +
		"\x02\x02\u0488\u0489\x03\x02\x02\x02\u0489\u0487\x03\x02\x02\x02\u0489" +
		"\u048A\x03\x02\x02\x02\u048A\u048B\x03\x02\x02\x02\u048B\u048C\x07|\x02" +
		"\x02\u048C\x9F\x03\x02\x02\x02\u048D\u048E\x07\u0164\x02\x02\u048E\u048F" +
		"\x07\u0156\x02\x02\u048F\u0493\x07\x1A\x02\x02\u0490\u0491\x05\x96L\x02" +
		"\u0491\u0492\x07\u020B\x02\x02\u0492\u0494\x03\x02\x02\x02\u0493\u0490" +
		"\x03\x02\x02\x02\u0494\u0495\x03\x02\x02\x02\u0495\u0493\x03\x02\x02\x02" +
		"\u0495\u0496\x03\x02\x02\x02\u0496\u0497\x03\x02\x02\x02\u0497\u0498\x07" +
		"|\x02\x02\u0498\xA1\x03\x02\x02\x02\u0499\u049A\bR\x01\x02\u049A\u04B1" +
		"\x05\xA4S\x02\u049B\u049C\x05\xA6T\x02\u049C\u049D\x05\xA2R\x07\u049D" +
		"\u04B1\x03\x02\x02\x02\u049E\u049F\x07\u0206\x02\x02\u049F\u04A0\x05\xA2" +
		"R\x02\u04A0\u04A1\x07\u0207\x02\x02\u04A1\u04B1\x03\x02\x02\x02\u04A2" +
		"\u04A4\x05\xAEX\x02\u04A3\u04A5\x05\xEAv\x02\u04A4\u04A3\x03\x02\x02\x02" +
		"\u04A4\u04A5\x03\x02\x02\x02\u04A5\u04A7\x03\x02\x02\x02\u04A6\u04A8\x05" +
		"\xEEx\x02\u04A7\u04A6\x03\x02\x02\x02\u04A7\u04A8\x03\x02\x02\x02\u04A8" +
		"\u04B1\x03\x02\x02\x02\u04A9\u04AB\x05\xACW\x02\u04AA\u04AC\x05\xEAv\x02" +
		"\u04AB\u04AA\x03\x02\x02\x02\u04AB\u04AC\x03\x02\x02\x02\u04AC\u04AE\x03" +
		"\x02\x02\x02\u04AD\u04AF\x05\xEEx\x02\u04AE\u04AD\x03\x02\x02\x02\u04AE" +
		"\u04AF\x03\x02\x02\x02\u04AF\u04B1\x03\x02\x02\x02\u04B0\u0499\x03\x02" +
		"\x02\x02\u04B0\u049B\x03\x02\x02\x02\u04B0\u049E\x03\x02\x02\x02\u04B0" +
		"\u04A2\x03\x02\x02\x02\u04B0\u04A9\x03\x02\x02\x02\u04B1\u04C0\x03\x02" +
		"\x02\x02\u04B2\u04B3\f\x05\x02\x02\u04B3\u04B5\t\x15\x02\x02\u04B4\u04B6" +
		"\x07\x07\x02\x02\u04B5\u04B4\x03\x02\x02\x02\u04B5\u04B6\x03\x02\x02\x02" +
		"\u04B6\u04B7\x03\x02\x02\x02\u04B7\u04B9\x05\xA2R\x02\u04B8\u04BA\x05" +
		"\xEAv\x02\u04B9\u04B8\x03\x02\x02\x02\u04B9\u04BA\x03\x02\x02\x02\u04BA" +
		"\u04BC\x03\x02\x02\x02\u04BB\u04BD\x05\xEEx\x02\u04BC\u04BB\x03\x02\x02" +
		"\x02\u04BC\u04BD\x03\x02\x02\x02\u04BD\u04BF\x03\x02\x02\x02\u04BE\u04B2" +
		"\x03\x02\x02\x02\u04BF\u04C2\x03\x02\x02\x02\u04C0\u04BE\x03\x02\x02\x02" +
		"\u04C0\u04C1\x03\x02\x02\x02\u04C1\xA3\x03\x02\x02\x02\u04C2\u04C0\x03" +
		"\x02\x02\x02\u04C3\u04C4\x07\u01A0\x02\x02\u04C4\u04C9\x05\u0106\x84\x02" +
		"\u04C5\u04C6\x07\u020A\x02\x02\u04C6\u04C8\x05\u0106\x84\x02\u04C7\u04C5" +
		"\x03\x02\x02\x02\u04C8\u04CB\x03\x02\x02\x02\u04C9\u04C7\x03\x02\x02\x02" +
		"\u04C9\u04CA\x03\x02\x02\x02\u04CA\xA5\x03\x02\x02\x02\u04CB\u04C9\x03" +
		"\x02\x02\x02\u04CC\u04CD\x07\u01B3\x02\x02\u04CD\u04D2\x05\xA8U\x02\u04CE" +
		"\u04CF\x07\u020A\x02\x02\u04CF\u04D1\x05\xA8U\x02\u04D0\u04CE\x03\x02" +
		"\x02\x02\u04D1\u04D4\x03\x02\x02\x02\u04D2\u04D0\x03\x02\x02\x02\u04D2" +
		"\u04D3\x03\x02\x02\x02\u04D3\xA7\x03\x02\x02\x02\u04D4\u04D2\x03\x02\x02" +
		"\x02\u04D5\u04E1\x05\xAAV\x02\u04D6\u04D7\x07\u0206\x02\x02\u04D7\u04DC" +
		"\x058\x1D\x02\u04D8\u04D9\x07\u020A\x02\x02\u04D9\u04DB\x058\x1D\x02\u04DA" +
		"\u04D8\x03\x02\x02\x02\u04DB\u04DE\x03\x02\x02\x02\u04DC\u04DA\x03\x02" +
		"\x02\x02\u04DC\u04DD\x03\x02\x02\x02\u04DD\u04DF\x03\x02\x02\x02\u04DE" +
		"\u04DC\x03\x02\x02\x02\u04DF\u04E0\x07\u0207\x02\x02\u04E0\u04E2\x03\x02" +
		"\x02\x02\u04E1\u04D6\x03\x02\x02\x02\u04E1\u04E2\x03\x02\x02\x02\u04E2" +
		"\u04E3\x03\x02\x02\x02\u04E3\u04E4\x07\x13\x02\x02\u04E4\u04E5\x07\u0206" +
		"\x02\x02\u04E5\u04E6\x05\xA2R\x02\u04E6\u04E7\x07\u0207\x02\x02\u04E7" +
		"\xA9\x03\x02\x02\x02\u04E8\u04E9\x05\u0134\x9B\x02\u04E9\xAB\x03\x02\x02" +
		"\x02\u04EA\u04EC\x05\xAEX\x02\u04EB\u04ED\x05\xB4[\x02\u04EC\u04EB\x03" +
		"\x02\x02\x02\u04EC\u04ED\x03\x02\x02\x02\u04ED\u04EF\x03\x02\x02\x02\u04EE" +
		"\u04F0\x05\xD0i\x02\u04EF\u04EE\x03\x02\x02\x02\u04EF\u04F0\x03\x02\x02" +
		"\x02\u04F0\u04F2\x03\x02\x02\x02\u04F1\u04F3\x05\xD2j\x02\u04F2\u04F1" +
		"\x03\x02\x02\x02\u04F2\u04F3\x03\x02\x02\x02\u04F3\u04F5\x03\x02\x02\x02" +
		"\u04F4\u04F6\x05\xE0q\x02\u04F5\u04F4\x03\x02\x02\x02\u04F5\u04F6\x03" +
		"\x02\x02\x02\u04F6\u04F8\x03\x02\x02\x02\u04F7\u04F9\x05\xE2r\x02\u04F8" +
		"\u04F7\x03\x02\x02\x02\u04F8\u04F9\x03\x02\x02\x02\u04F9\u04FF\x03\x02" +
		"\x02\x02\u04FA\u04FB\x05\xAEX\x02\u04FB\u04FC\x05\xB4[\x02\u04FC\u04FD" +
		"\x05\xE8u\x02\u04FD\u04FF\x03\x02\x02\x02\u04FE\u04EA\x03\x02\x02\x02" +
		"\u04FE\u04FA\x03\x02\x02\x02\u04FF\xAD\x03\x02\x02\x02\u0500\u0502\x07" +
		"\u0152\x02\x02\u0501\u0503\x05\u0170\xB9\x02\u0502\u0501\x03\x02\x02\x02" +
		"\u0502\u0503\x03\x02\x02\x02\u0503\u050D\x03\x02\x02\x02\u0504\u050E\x07" +
		"\u0211\x02\x02\u0505\u050A\x05\xB0Y\x02\u0506\u0507\x07\u020A\x02\x02" +
		"\u0507\u0509\x05\xB0Y\x02\u0508\u0506\x03\x02\x02\x02\u0509\u050C\x03" +
		"\x02\x02\x02\u050A\u0508\x03\x02\x02\x02\u050A\u050B\x03\x02\x02\x02\u050B" +
		"\u050E\x03\x02\x02\x02\u050C\u050A\x03\x02\x02\x02\u050D\u0504\x03\x02" +
		"\x02\x02\u050D\u0505\x03\x02\x02\x02\u050E\xAF\x03\x02\x02\x02\u050F\u0518" +
		"\x05\xB2Z\x02\u0510\u0515\x058\x1D\x02\u0511\u0513\x07\x13\x02\x02\u0512" +
		"\u0511\x03\x02\x02\x02\u0512\u0513\x03\x02\x02\x02\u0513\u0514\x03\x02" +
		"\x02\x02\u0514\u0516\x05\u0106\x84\x02\u0515\u0512\x03\x02\x02\x02\u0515" +
		"\u0516\x03\x02\x02\x02\u0516\u0518\x03\x02\x02\x02\u0517\u050F\x03\x02" +
		"\x02\x02\u0517\u0510\x03\x02\x02\x02\u0518\xB1\x03\x02\x02\x02\u0519\u051A" +
		"\x05\u0110\x89\x02\u051A\u051B\x07\u0108\x02\x02\u051B\u051C\x05\xE6t" +
		"\x02\u051C\u051D\x07\x13\x02\x02\u051D\u051E\x05\u0134\x9B\x02\u051E\u0526" +
		"\x03\x02\x02\x02\u051F\u0520\x05\u0110\x89\x02\u0520\u0521\x07\u0108\x02" +
		"\x02\u0521\u0522\x05\u012C\x97\x02\u0522\u0523\x07\x13\x02\x02\u0523\u0524" +
		"\x05\u0134\x9B\x02\u0524\u0526\x03\x02\x02\x02\u0525\u0519\x03\x02\x02" +
		"\x02\u0525\u051F\x03\x02\x02\x02\u0526\xB3\x03\x02\x02\x02\u0527\u0528" +
		"\x07\x99\x02\x02\u0528\u0529\x05\xB6\\\x02\u0529\xB5\x03\x02\x02\x02\u052A" +
		"\u052B\b\\\x01\x02\u052B\u0530\x05\xB8]\x02\u052C\u052D\x07\u020A\x02" +
		"\x02\u052D\u052F\x05\xB8]\x02\u052E\u052C\x03\x02\x02\x02\u052F\u0532" +
		"\x03\x02\x02\x02\u0530\u052E\x03\x02\x02\x02\u0530\u0531\x03\x02\x02\x02" +
		"\u0531\u0536\x03\x02\x02\x02\u0532\u0530\x03\x02\x02\x02\u0533\u0536\x05" +
		"\xC0a\x02\u0534\u0536\x05\xC2b\x02\u0535\u052A\x03\x02\x02\x02\u0535\u0533" +
		"\x03\x02\x02\x02\u0535\u0534\x03\x02\x02\x02\u0536\u054C\x03\x02\x02\x02" +
		"\u0537\u0538\f\x05\x02\x02\u0538\u0539\x07K\x02\x02\u0539\u053A\x07\xBB" +
		"\x02\x02\u053A\u054B\x05\xB6\\\x06\u053B\u053D\f\x06\x02\x02\u053C\u053E" +
		"\x07\xEB\x02\x02\u053D\u053C\x03\x02\x02\x02\u053D\u053E\x03\x02\x02\x02" +
		"\u053E\u0540\x03\x02\x02\x02\u053F\u0541\t\x16\x02\x02\u0540\u053F\x03" +
		"\x02\x02\x02\u0540\u0541\x03\x02\x02\x02\u0541\u0543\x03\x02\x02\x02\u0542" +
		"\u0544\x07\u0107\x02\x02\u0543\u0542\x03\x02\x02\x02\u0543\u0544\x03\x02" +
		"\x02\x02\u0544\u0545\x03\x02\x02\x02\u0545\u0546\x07\xBB\x02\x02\u0546" +
		"\u0548\x05\xB6\\\x02\u0547\u0549\x05\xCEh\x02\u0548\u0547\x03\x02\x02" +
		"\x02\u0548\u0549\x03\x02\x02\x02\u0549\u054B\x03\x02\x02\x02\u054A\u0537" +
		"\x03\x02\x02\x02\u054A\u053B\x03\x02\x02\x02\u054B\u054E\x03\x02\x02\x02" +
		"\u054C\u054A\x03\x02\x02\x02\u054C\u054D\x03\x02\x02\x02\u054D\xB7\x03" +
		"\x02\x02\x02\u054E\u054C\x03\x02\x02\x02\u054F\u0551\x05\xBA^\x02\u0550" +
		"\u0552\x05\u012A\x96\x02\u0551\u0550\x03\x02\x02\x02\u0551\u0552\x03\x02" +
		"\x02\x02\u0552\xB9\x03\x02\x02\x02\u0553\u0555\x07\u0177\x02\x02\u0554" +
		"\u0553\x03\x02\x02\x02\u0554\u0555\x03\x02\x02\x02\u0555\u0556\x03\x02" +
		"\x02\x02\u0556\u0558\x05\u0146\xA4\x02\u0557\u0559\x05\xBC_\x02\u0558" +
		"\u0557\x03\x02\x02\x02\u0558\u0559\x03\x02\x02\x02\u0559\u055E\x03\x02" +
		"\x02\x02\u055A\u055C\x07\x13\x02\x02\u055B\u055A\x03\x02\x02\x02\u055B" +
		"\u055C\x03\x02\x02\x02\u055C\u055D\x03\x02\x02\x02\u055D\u055F\x05\u011A" +
		"\x8E\x02\u055E\u055B\x03\x02\x02\x02\u055E\u055F\x03\x02\x02\x02\u055F" +
		"\u0587\x03\x02\x02\x02\u0560\u0562\x05\u0148\xA5\x02\u0561\u0563\x05\xBC" +
		"_\x02\u0562\u0561\x03\x02\x02\x02\u0562\u0563\x03\x02\x02\x02\u0563\u0568" +
		"\x03\x02\x02\x02\u0564\u0566\x07\x13\x02\x02\u0565\u0564\x03\x02\x02\x02" +
		"\u0565\u0566\x03\x02\x02\x02\u0566\u0567\x03\x02\x02\x02\u0567\u0569\x05" +
		"\u011A\x8E\x02\u0568\u0565\x03\x02\x02\x02\u0568\u0569\x03\x02\x02\x02" +
		"\u0569\u0587\x03\x02\x02\x02\u056A\u056B\x07\xC8\x02\x02\u056B\u056C\x07" +
		"\u0177\x02\x02\u056C\u056D\x07\u0206\x02\x02\u056D\u056E\x05\u0114\x8B" +
		"\x02\u056E\u056F\x07\u0206\x02\x02\u056F\u0574\x05\u0116\x8C\x02\u0570" +
		"\u0571\x07\u020A\x02\x02\u0571\u0573\x05\u0116\x8C\x02\u0572\u0570\x03" +
		"\x02\x02\x02\u0573\u0576\x03\x02\x02\x02\u0574\u0572\x03\x02\x02\x02\u0574" +
		"\u0575\x03\x02\x02\x02\u0575\u0577\x03\x02\x02\x02\u0576\u0574\x03\x02" +
		"\x02\x02\u0577\u0578\x07\u0207\x02\x02\u0578\u0579\x07\u0207\x02\x02\u0579" +
		"\u0587\x03\x02\x02\x02\u057A\u057C\x07\xC8\x02\x02\u057B\u057A\x03\x02" +
		"\x02\x02\u057B\u057C\x03\x02\x02\x02\u057C\u057D\x03\x02\x02\x02\u057D" +
		"\u057E\x07\u0206\x02\x02\u057E\u057F\x05\xA2R\x02\u057F\u0580\x07\u0207" +
		"\x02\x02\u0580\u0587\x03\x02\x02\x02\u0581\u0582\x07\u0197\x02\x02\u0582" +
		"\u0583\x07\u0206\x02\x02\u0583\u0584\x05\u0106\x84\x02\u0584\u0585\x07" +
		"\u0207\x02\x02\u0585\u0587\x03\x02\x02\x02\u0586\u0554\x03\x02\x02\x02" +
		"\u0586\u0560\x03\x02\x02\x02\u0586\u056A\x03\x02\x02\x02\u0586\u057B\x03" +
		"\x02\x02\x02\u0586\u0581\x03\x02\x02\x02\u0587\xBB\x03\x02\x02\x02\u0588" +
		"\u0589\x07\x94\x02\x02\u0589\u058A\x07\u0175\x02\x02\u058A\u058B\x07\x13" +
		"\x02\x02\u058B\u058C\x07\xFB\x02\x02\u058C\u058D\x05\xBE`\x02\u058D\xBD" +
		"\x03\x02\x02\x02\u058E\u058F\x05\u0106\x84\x02\u058F\xBF\x03\x02\x02\x02" +
		"\u0590\u0591\x07\u0206\x02\x02\u0591\u0592\x05\x9AN\x02\u0592\u0593\x07" +
		"\u0207\x02\x02\u0593\u0594\x05\u012A\x96\x02\u0594\xC1\x03\x02\x02\x02" +
		"\u0595\u0596\x07\u0177\x02\x02\u0596\u0597\x07\u0206\x02\x02\u0597\u0598" +
		"\x05\xC4c\x02\u0598\u0599\x07\u0207\x02\x02\u0599\xC3\x03\x02\x02\x02" +
		"\u059A\u059B\x05\xC6d\x02\u059B\u059C\x07\u0206\x02\x02\u059C\u05A1\x05" +
		"\xC8e\x02\u059D\u059E\x07\u020A\x02\x02\u059E\u05A0\x05\xC8e\x02\u059F" +
		"\u059D\x03\x02\x02\x02\u05A0\u05A3\x03\x02\x02\x02\u05A1\u059F\x03\x02" +
		"\x02\x02\u05A1\u05A2\x03\x02\x02\x02\u05A2\u05A4\x03\x02\x02\x02\u05A3" +
		"\u05A1\x03\x02\x02\x02\u05A4\u05A5\x07\u0207\x02\x02\u05A5\xC5\x03\x02" +
		"\x02\x02\u05A6\u05A7\t\x17\x02\x02\u05A7\xC7\x03\x02\x02\x02\u05A8\u05A9" +
		"\x07\u0177\x02\x02\u05A9\u05B8\x05\xDEp\x02\u05AA\u05B8\x05\xCCg\x02\u05AB" +
		"\u05B8\x05\u011E\x90\x02\u05AC\u05AD\x07\u01C0\x02\x02\u05AD\u05AE\x07" +
		"\u021A\x02\x02\u05AE\u05AF\x07\u0177\x02\x02\u05AF\u05B8\x05\xDEp\x02" +
		"\u05B0\u05B1\x07\u01F4\x02\x02\u05B1\u05B2\x07\u021A\x02\x02\u05B2\u05B8" +
		"\x05\xCCg\x02\u05B3\u05B4\x05\xCAf\x02\u05B4\u05B5\x07\u021A\x02\x02\u05B5" +
		"\u05B6\x05\u011E\x90\x02\u05B6\u05B8\x03\x02\x02\x02\u05B7\u05A8\x03\x02" +
		"\x02\x02\u05B7\u05AA\x03\x02\x02\x02\u05B7\u05AB\x03\x02\x02\x02\u05B7" +
		"\u05AC\x03\x02\x02\x02\u05B7\u05B0\x03\x02\x02\x02\u05B7\u05B3\x03\x02" +
		"\x02\x02\u05B8\xC9\x03\x02\x02\x02\u05B9\u05BA\t\x18\x02\x02\u05BA\xCB" +
		"\x03\x02\x02\x02\u05BB\u05BC\x07\u01C5\x02\x02\u05BC\u05BD\x07\u0206\x02" +
		"\x02\u05BD\u05BE\x058\x1D\x02\u05BE\u05BF\x07\u0207\x02\x02\u05BF\xCD" +
		"\x03\x02\x02\x02\u05C0\u05C1\x07\xFF\x02\x02\u05C1\u05C5\x05\u0108\x85" +
		"\x02\u05C2\u05C3\x07\u019E\x02\x02\u05C3\u05C5\x05:\x1E\x02\u05C4\u05C0" +
		"\x03\x02\x02\x02\u05C4\u05C2\x03\x02\x02\x02\u05C5\xCF\x03\x02\x02\x02" +
		"\u05C6\u05C7\x07\u01B0\x02\x02\u05C7\u05C8\x05\u0108\x85\x02\u05C8\xD1" +
		"\x03\x02\x02\x02\u05C9\u05CA\x07\xA1\x02\x02\u05CA\u05CB\x07$\x02\x02" +
		"\u05CB\u05D0\x05\xD4k\x02\u05CC\u05CD\x07\u020A\x02\x02\u05CD\u05CF\x05" +
		"\xD4k\x02\u05CE\u05CC\x03\x02\x02\x02\u05CF\u05D2\x03\x02\x02\x02\u05D0" +
		"\u05CE\x03\x02\x02\x02\u05D0\u05D1\x03\x02\x02\x02\u05D1\xD3\x03\x02\x02" +
		"\x02";
	private static readonly _serializedATNSegment3: string =
		"\u05D2\u05D0\x03\x02\x02\x02\u05D3\u05FB\x058\x1D\x02\u05D4\u05FB\x05" +
		"\xDAn\x02\u05D5\u05D6\x07\u0206\x02\x02\u05D6\u05FB\x07\u0207\x02\x02" +
		"\u05D7\u05D8\x07\u0206\x02\x02\u05D8\u05DD\x05\u0106\x84\x02\u05D9\u05DA" +
		"\x07\u020A\x02\x02\u05DA\u05DC\x05\u0106\x84\x02\u05DB\u05D9\x03\x02\x02" +
		"\x02\u05DC\u05DF\x03\x02\x02\x02\u05DD\u05DB\x03\x02\x02\x02\u05DD\u05DE" +
		"\x03\x02\x02\x02\u05DE\u05E0\x03\x02\x02\x02\u05DF\u05DD\x03\x02\x02\x02" +
		"\u05E0\u05E1\x07\u0207\x02\x02\u05E1\u05FB\x03\x02\x02\x02\u05E2\u05E3" +
		"\x05\xD8m\x02\u05E3\u05E4\x07\u0206\x02\x02\u05E4\u05E9\x05\u0106\x84" +
		"\x02\u05E5\u05E6\x07\u020A\x02\x02\u05E6\u05E8\x05\u0106\x84\x02\u05E7" +
		"\u05E5\x03\x02\x02\x02\u05E8\u05EB\x03\x02\x02\x02\u05E9\u05E7\x03\x02" +
		"\x02\x02\u05E9\u05EA\x03\x02\x02\x02\u05EA\u05EC\x03\x02\x02\x02\u05EB" +
		"\u05E9\x03\x02\x02\x02\u05EC\u05ED\x07\u0207\x02\x02\u05ED\u05FB\x03\x02" +
		"\x02\x02\u05EE\u05EF\x05\xD6l\x02\u05EF\u05F0\x07\u0206\x02\x02\u05F0" +
		"\u05F5\x05\xD4k\x02\u05F1\u05F2\x07\u020A\x02\x02\u05F2\u05F4\x05\xD4" +
		"k\x02\u05F3\u05F1\x03\x02\x02\x02\u05F4\u05F7\x03\x02\x02\x02\u05F5\u05F3" +
		"\x03\x02\x02\x02\u05F5\u05F6\x03\x02\x02\x02\u05F6\u05F8\x03\x02\x02\x02" +
		"\u05F7\u05F5\x03\x02\x02\x02\u05F8\u05F9\x07\u0207\x02\x02\u05F9\u05FB" +
		"\x03\x02\x02\x02\u05FA\u05D3\x03\x02\x02\x02\u05FA\u05D4\x03\x02\x02\x02" +
		"\u05FA\u05D5\x03\x02\x02\x02\u05FA\u05D7\x03\x02\x02\x02\u05FA\u05E2\x03" +
		"\x02\x02\x02\u05FA\u05EE\x03\x02\x02\x02\u05FB\xD5\x03\x02\x02\x02\u05FC" +
		"\u05FD\x07\xA2\x02\x02\u05FD\u05FE\x07\u01EF\x02\x02\u05FE\xD7\x03\x02" +
		"\x02\x02\u05FF\u0600\t\x19\x02\x02\u0600\xD9\x03\x02\x02\x02\u0601\u0602" +
		"\x05\xDCo\x02\u0602\u0603\x07\u0206\x02\x02\u0603\u0604\x05\xDEp\x02\u0604" +
		"\u0605\x07\u020A\x02\x02\u0605\u0606\x05\u011E\x90\x02\u0606\u0607\x07" +
		"\u0207\x02\x02\u0607\xDB\x03\x02\x02\x02\u0608\u0609\t\x1A\x02\x02\u0609" +
		"\xDD\x03\x02\x02\x02\u060A\u060B\x05\u014C\xA7\x02\u060B\xDF\x03\x02\x02" +
		"\x02\u060C\u060D\x07\xA5\x02\x02\u060D\u060E\x05\u0108\x85\x02\u060E\xE1" +
		"\x03\x02\x02\x02\u060F\u0610\x07\u01B2\x02\x02\u0610\u0615\x05\xE4s\x02" +
		"\u0611\u0612\x07\u020A\x02\x02\u0612\u0614\x05\xE4s\x02\u0613\u0611\x03" +
		"\x02\x02\x02\u0614\u0617\x03\x02\x02\x02\u0615\u0613\x03\x02\x02\x02\u0615" +
		"\u0616\x03\x02\x02\x02\u0616\xE3\x03\x02\x02\x02\u0617\u0615\x03\x02\x02" +
		"\x02\u0618\u0619\x05\u012C\x97\x02\u0619\u061A\x07\x13\x02\x02\u061A\u061B" +
		"\x05\xE6t\x02\u061B\xE5\x03\x02\x02\x02\u061C\u061E\x05\u012C\x97\x02" +
		"\u061D\u061C\x03\x02\x02\x02\u061D\u061E\x03\x02\x02\x02\u061E\u061F\x03" +
		"\x02\x02\x02\u061F\u0621\x07\u0206\x02\x02\u0620\u0622\x05\xF0y\x02\u0621" +
		"\u0620\x03\x02\x02\x02\u0621\u0622\x03\x02\x02\x02\u0622\u0624\x03\x02" +
		"\x02\x02\u0623\u0625\x05\xEAv\x02\u0624\u0623\x03\x02\x02\x02\u0624\u0625" +
		"\x03\x02\x02\x02\u0625\u0627\x03\x02\x02\x02\u0626\u0628\x05\u0100\x81" +
		"\x02\u0627\u0626\x03\x02\x02\x02\u0627\u0628\x03\x02\x02\x02\u0628\u0629" +
		"\x03\x02\x02\x02\u0629\u062A\x07\u0207\x02\x02\u062A\xE7\x03\x02\x02\x02" +
		"\u062B\u062C\x07\xD7\x02\x02\u062C\u062E\x07\u0206\x02\x02\u062D\u062F" +
		"\x05\xF0y\x02\u062E\u062D\x03\x02\x02\x02\u062E\u062F\x03\x02\x02\x02" +
		"\u062F\u0631\x03\x02\x02\x02\u0630\u0632\x05\xEAv\x02\u0631\u0630\x03" +
		"\x02\x02\x02\u0631\u0632\x03\x02\x02\x02\u0632\u0634\x03\x02\x02\x02\u0633" +
		"\u0635\x05\xF4{\x02\u0634\u0633\x03\x02\x02\x02\u0634\u0635\x03\x02\x02" +
		"\x02\u0635\u0637\x03\x02\x02\x02\u0636\u0638\x05\xFA~\x02\u0637\u0636" +
		"\x03\x02\x02\x02\u0637\u0638\x03\x02\x02\x02\u0638\u063A\x03\x02\x02\x02" +
		"\u0639\u063B\x05\xFC\x7F\x02\u063A\u0639\x03\x02\x02\x02\u063A\u063B\x03" +
		"\x02\x02\x02\u063B\u063D\x03\x02\x02\x02\u063C\u063E\x05\xF6|\x02\u063D" +
		"\u063C\x03\x02\x02\x02\u063D\u063E\x03\x02\x02\x02\u063E\u063F\x03\x02" +
		"\x02\x02\u063F\u0640\x05\xFE\x80\x02\u0640\u0645\x07\u0207\x02\x02\u0641" +
		"\u0643\x07\x13\x02\x02\u0642\u0641\x03\x02\x02\x02\u0642\u0643\x03\x02" +
		"\x02\x02\u0643\u0644\x03\x02\x02\x02\u0644\u0646\x05\u0134\x9B\x02\u0645" +
		"\u0642\x03\x02\x02\x02\u0645\u0646\x03\x02\x02\x02\u0646\xE9\x03\x02\x02" +
		"\x02\u0647\u0648\x07\u0104\x02\x02\u0648\u0649\x07$\x02\x02\u0649\u064E" +
		"\x05\xECw\x02\u064A\u064B\x07\u020A\x02\x02\u064B\u064D\x05\xECw\x02\u064C" +
		"\u064A\x03\x02\x02\x02\u064D\u0650\x03\x02\x02\x02\u064E\u064C\x03\x02" +
		"\x02\x02\u064E\u064F\x03\x02\x02\x02\u064F\xEB\x03\x02\x02\x02\u0650\u064E" +
		"\x03\x02\x02\x02\u0651\u0653\x058\x1D\x02\u0652\u0654\t\x1B\x02\x02\u0653" +
		"\u0652\x03\x02\x02\x02\u0653\u0654\x03\x02\x02\x02\u0654\u0657\x03\x02" +
		"\x02\x02\u0655\u0656\x07\u01DE\x02\x02\u0656\u0658\t\x1C\x02\x02\u0657" +
		"\u0655\x03\x02\x02\x02\u0657\u0658\x03\x02\x02\x02\u0658\xED\x03\x02\x02" +
		"\x02\u0659\u065C\x07\xCE\x02\x02\u065A\u065D\x07\x07\x02\x02\u065B\u065D" +
		"\x05\u0106\x84\x02\u065C\u065A\x03\x02\x02\x02\u065C\u065B\x03\x02\x02" +
		"\x02\u065D\xEF\x03\x02\x02\x02\u065E\u065F\x07\u010E\x02\x02\u065F\u0660" +
		"\x07$\x02\x02\u0660\u0665\x058\x1D\x02\u0661\u0662\x07\u020A\x02\x02\u0662" +
		"\u0664\x058\x1D\x02\u0663\u0661\x03\x02\x02\x02\u0664\u0667\x03\x02\x02" +
		"\x02\u0665\u0663\x03\x02\x02\x02\u0665\u0666\x03\x02\x02\x02\u0666\xF1" +
		"\x03\x02\x02\x02\u0667\u0665\x03\x02\x02\x02\u0668\u0679\x07\u0211\x02" +
		"\x02\u0669\u0679\x07\u0214\x02\x02\u066A\u0679\x07\u0219\x02\x02\u066B" +
		"\u066C\x07\u0208\x02\x02\u066C\u066D\x07\u021C\x02\x02\u066D\u066E\x07" +
		"\u020A\x02\x02\u066E\u066F\x07\u021C\x02\x02\u066F\u0679\x07\u0209\x02" +
		"\x02\u0670\u0671\x07\u0208\x02\x02\u0671\u0672\x07\u021C\x02\x02\u0672" +
		"\u0673\x07\u020A\x02\x02\u0673\u0679\x07\u0209\x02\x02\u0674\u0675\x07" +
		"\u0208\x02\x02\u0675\u0676\x07\u020A\x02\x02\u0676\u0677\x07\u021C\x02" +
		"\x02\u0677\u0679\x07\u0209\x02\x02\u0678\u0668\x03\x02\x02\x02\u0678\u0669" +
		"\x03\x02\x02\x02\u0678\u066A\x03\x02\x02\x02\u0678\u066B\x03\x02\x02\x02" +
		"\u0678\u0670\x03\x02\x02\x02\u0678\u0674\x03\x02\x02\x02\u0679\xF3\x03" +
		"\x02\x02\x02\u067A\u067B\x07\xD9\x02\x02\u067B\u0680\x05\xB0Y\x02\u067C" +
		"\u067D\x07\u020A\x02\x02\u067D\u067F\x05\xB0Y\x02\u067E\u067C\x03\x02" +
		"\x02\x02\u067F\u0682\x03\x02\x02\x02\u0680\u067E\x03\x02\x02\x02\u0680" +
		"\u0681\x03\x02\x02\x02\u0681\xF5\x03\x02\x02\x02\u0682\u0680\x03\x02\x02" +
		"\x02\u0683\u0684\x07\u0111\x02\x02\u0684\u0686\x07\u0206\x02\x02\u0685" +
		"\u0687\x05\xF8}\x02\u0686\u0685\x03\x02\x02\x02\u0687\u0688\x03\x02\x02" +
		"\x02\u0688\u0686\x03\x02\x02\x02\u0688\u0689\x03\x02\x02\x02\u0689\u068A" +
		"\x03\x02\x02\x02\u068A\u068C\x07\u0207\x02\x02\u068B\u068D\x05\u0104\x83" +
		"\x02\u068C\u068B\x03\x02\x02\x02\u068C\u068D\x03\x02\x02\x02\u068D\xF7" +
		"\x03\x02\x02\x02\u068E\u0690\x05\u0136\x9C\x02\u068F\u0691\x05\xF2z\x02" +
		"\u0690\u068F\x03\x02\x02\x02\u0690\u0691\x03\x02\x02\x02\u0691\xF9\x03" +
		"\x02\x02\x02\u0692\u0693\x07\x07\x02\x02\u0693\u0694\x07\u0144\x02\x02" +
		"\u0694\u0695\x07\u0112\x02\x02\u0695\u069B\x07\xD4\x02\x02\u0696\u0697" +
		"\x07\u0100\x02\x02\u0697\u0698\x07\u0143\x02\x02\u0698\u0699\x07\u0112" +
		"\x02\x02\u0699\u069B\x07\xD4\x02\x02\u069A\u0692\x03\x02\x02\x02\u069A" +
		"\u0696\x03\x02\x02\x02\u069B\xFB\x03\x02\x02\x02\u069C\u069D\x07\u01B8" +
		"\x02\x02\u069D\u069E\x07\xD4\x02\x02\u069E\u069F\x07\u0159\x02\x02\u069F" +
		"\u06A0\x07\u01E0\x02\x02\u06A0\u06A1\x07\u01D5\x02\x02\u06A1\u06B5\x07" +
		"\u0143\x02\x02\u06A2\u06A3\x07\u01B8\x02\x02\u06A3\u06A4\x07\xD4\x02\x02" +
		"\u06A4\u06A5\x07\u0159\x02\x02\u06A5\u06A6\x07\u0186\x02\x02\u06A6\u06A7" +
		"\x07\xEF\x02\x02\u06A7\u06B5\x07\u0143\x02\x02\u06A8\u06A9\x07\u01B8\x02" +
		"\x02\u06A9\u06AA\x07\xD4\x02\x02\u06AA\u06AB\x07\u0159\x02\x02\u06AB\u06AC" +
		"\x07\u0186\x02\x02\u06AC\u06AD\x07\u01D5\x02\x02\u06AD\u06B5\x05\u0136" +
		"\x9C\x02\u06AE\u06AF\x07\u01B8\x02\x02\u06AF\u06B0\x07\xD4\x02\x02\u06B0" +
		"\u06B1\x07\u0159\x02\x02\u06B1\u06B2\x07\u0186\x02\x02\u06B2\u06B3\x07" +
		"\u01CB\x02\x02\u06B3\u06B5\x05\u0136\x9C\x02\u06B4\u069C\x03\x02\x02\x02" +
		"\u06B4\u06A2\x03\x02\x02\x02\u06B4\u06A8\x03\x02\x02\x02\u06B4\u06AE\x03" +
		"\x02\x02\x02\u06B5\xFD\x03\x02\x02\x02\u06B6\u06B7\x07k\x02\x02\u06B7" +
		"\u06BC\x05\xB0Y\x02\u06B8\u06B9\x07\u020A\x02\x02\u06B9\u06BB\x05\xB0" +
		"Y\x02\u06BA\u06B8\x03\x02\x02\x02\u06BB\u06BE\x03\x02\x02\x02\u06BC\u06BA" +
		"\x03\x02\x02\x02\u06BC\u06BD\x03\x02\x02\x02\u06BD\xFF\x03\x02\x02\x02" +
		"\u06BE\u06BC\x03\x02\x02\x02\u06BF\u06C0\x07\u0126\x02\x02\u06C0\u06C1" +
		"\x07\x1D\x02\x02\u06C1\u06C2\x05\u011E\x90\x02\u06C2\u06C3\x05\u0102\x82" +
		"\x02\u06C3\u06C9\x03\x02\x02\x02\u06C4\u06C5\x07\u0144\x02\x02\u06C5\u06C6" +
		"\x07\x1D\x02\x02\u06C6\u06C7\x07\u021C\x02\x02\u06C7\u06C9\x05\u0102\x82" +
		"\x02\u06C8\u06BF\x03\x02\x02\x02\u06C8\u06C4\x03\x02\x02\x02\u06C9\u0101" +
		"\x03\x02\x02\x02\u06CA\u06CB\x07\u01E2\x02\x02\u06CB\u06CC\x07\f\x02\x02" +
		"\u06CC\u06CD\x07N\x02\x02\u06CD\u06CE\x07\u0143\x02\x02\u06CE\u0103\x03" +
		"\x02\x02\x02\u06CF\u06D0\x07\u01B4\x02\x02\u06D0\u06D1\x05\u011E\x90\x02" +
		"\u06D1\u0105\x03\x02\x02\x02\u06D2\u06D3\x05\u0108\x85\x02\u06D3\u0107" +
		"\x03\x02\x02\x02\u06D4\u06D5\b\x85\x01\x02\u06D5\u06D6\x07\xF3\x02\x02" +
		"\u06D6\u06E1\x05\u0108\x85\b\u06D7\u06D8\x07\x87\x02\x02\u06D8\u06D9\x07" +
		"\u0206\x02\x02\u06D9\u06DA\x05\xA2R\x02\u06DA\u06DB\x07\u0207\x02\x02" +
		"\u06DB\u06E1\x03\x02\x02\x02\u06DC\u06DE\x05\u010E\x88\x02\u06DD\u06DF" +
		"\x05\u010A\x86\x02\u06DE\u06DD\x03\x02\x02\x02\u06DE\u06DF\x03\x02\x02" +
		"\x02\u06DF\u06E1\x03\x02\x02\x02\u06E0\u06D4\x03\x02\x02\x02\u06E0\u06D7" +
		"\x03\x02\x02\x02\u06E0\u06DC\x03\x02\x02\x02\u06E1\u06F0\x03\x02\x02\x02" +
		"\u06E2\u06E3\f\x05\x02\x02\u06E3\u06E4\x07\f\x02\x02\u06E4\u06EF\x05\u0108" +
		"\x85\x06\u06E5\u06E6\f\x04\x02\x02\u06E6\u06E7\x07\u0103\x02\x02\u06E7" +
		"\u06EF\x05\u0108\x85\x05\u06E8\u06E9\f\x03\x02\x02\u06E9\u06EB\x07\xBA" +
		"\x02\x02\u06EA\u06EC\x07\xF3\x02\x02\u06EB\u06EA\x03\x02\x02\x02\u06EB" +
		"\u06EC\x03\x02\x02\x02\u06EC\u06ED\x03\x02\x02\x02\u06ED\u06EF\t\x1D\x02" +
		"\x02\u06EE\u06E2\x03\x02\x02\x02\u06EE\u06E5\x03\x02\x02\x02\u06EE\u06E8" +
		"\x03\x02\x02\x02\u06EF\u06F2\x03\x02\x02\x02\u06F0\u06EE\x03\x02\x02\x02" +
		"\u06F0\u06F1\x03\x02\x02\x02\u06F1\u0109\x03\x02\x02\x02\u06F2\u06F0\x03" +
		"\x02\x02\x02\u06F3\u06F5\x07\xF3\x02\x02\u06F4\u06F3\x03\x02\x02\x02\u06F4" +
		"\u06F5\x03\x02\x02\x02\u06F5\u06F6\x03\x02\x02\x02\u06F6\u06F8\x07\x1D" +
		"\x02\x02\u06F7\u06F9\t\x1E\x02\x02\u06F8\u06F7\x03\x02\x02\x02\u06F8\u06F9" +
		"\x03\x02\x02\x02\u06F9\u06FA\x03\x02\x02\x02\u06FA\u06FB\x05\u010E\x88" +
		"\x02\u06FB\u06FC\x07\f\x02\x02\u06FC\u06FD\x05\u010E\x88\x02\u06FD\u0737" +
		"\x03\x02\x02\x02\u06FE\u0700\x07\xF3\x02\x02\u06FF\u06FE\x03\x02\x02\x02" +
		"\u06FF\u0700\x03\x02\x02\x02\u0700\u0701\x03\x02\x02\x02\u0701\u0702\x07" +
		"\xAC\x02\x02\u0702\u0703\x07\u0206\x02\x02\u0703\u0708\x05\u0106\x84\x02" +
		"\u0704\u0705\x07\u020A\x02\x02\u0705\u0707\x05\u0106\x84\x02\u0706\u0704" +
		"\x03\x02\x02\x02\u0707\u070A\x03\x02\x02\x02\u0708\u0706\x03\x02\x02\x02" +
		"\u0708\u0709\x03\x02\x02\x02\u0709\u070B\x03\x02\x02\x02\u070A\u0708\x03" +
		"\x02\x02\x02\u070B\u070C\x07\u0207\x02\x02\u070C\u0737\x03\x02\x02\x02" +
		"\u070D\u070F\x07\xF3\x02\x02\u070E\u070D\x03\x02\x02\x02\u070E\u070F\x03" +
		"\x02\x02\x02\u070F\u0710\x03\x02\x02\x02\u0710\u0711\x07\xAC\x02\x02\u0711" +
		"\u0712\x07\u0206\x02\x02\u0712\u0713\x05\xA2R\x02\u0713\u0714\x07\u0207" +
		"\x02\x02\u0714\u0737\x03\x02\x02\x02\u0715\u0716\x07\x87\x02\x02\u0716" +
		"\u0717\x07\u0206\x02\x02\u0717\u0718\x05\xA2R\x02\u0718\u0719\x07\u0207" +
		"\x02\x02\u0719\u0737\x03\x02\x02\x02\u071A\u071C\x07\xF3\x02\x02\u071B" +
		"\u071A\x03\x02\x02\x02\u071B\u071C\x03\x02\x02\x02\u071C\u071D\x03\x02" +
		"\x02\x02\u071D\u071E\x07\u0140\x02\x02\u071E\u0737\x05\u010E\x88\x02\u071F" +
		"\u0737\x05\u010C\x87\x02\u0720\u0722\x07\xBA\x02\x02\u0721\u0723\x07\xF3" +
		"\x02\x02\u0722\u0721\x03\x02\x02\x02\u0722\u0723\x03\x02\x02\x02\u0723" +
		"\u0724\x03\x02\x02\x02\u0724\u0737\t\x1D\x02\x02\u0725\u0727\x07\xBA\x02" +
		"\x02\u0726\u0728\x07\xF3\x02\x02\u0727\u0726\x03\x02\x02\x02\u0727\u0728" +
		"\x03\x02\x02\x02\u0728\u0729\x03\x02\x02\x02\u0729\u072A\x07s\x02\x02" +
		"\u072A\u072B\x07\x99\x02\x02\u072B\u0737\x05\u010E\x88\x02\u072C\u072E" +
		"\x07\xF3\x02\x02\u072D\u072C\x03\x02\x02\x02\u072D\u072E\x03\x02\x02\x02" +
		"\u072E\u072F\x03\x02\x02\x02\u072F\u0730\x07\u0158\x02\x02\u0730\u0731" +
		"\x07\u0186\x02\x02\u0731\u0734\x05\u010E\x88\x02\u0732\u0733\x07\x81\x02" +
		"\x02\u0733\u0735\x05\u016A\xB6\x02\u0734\u0732\x03\x02\x02\x02\u0734\u0735" +
		"\x03\x02\x02\x02\u0735\u0737\x03\x02\x02\x02\u0736\u06F4\x03\x02\x02\x02" +
		"\u0736\u06FF\x03\x02\x02\x02\u0736\u070E\x03\x02\x02\x02\u0736\u0715\x03" +
		"\x02\x02\x02\u0736\u071B\x03\x02\x02\x02\u0736\u071F\x03\x02\x02\x02\u0736" +
		"\u0720\x03\x02\x02\x02\u0736\u0725\x03\x02\x02\x02\u0736\u072D\x03\x02" +
		"\x02\x02\u0737\u010B\x03\x02\x02\x02\u0738\u073A\x07\xF3\x02\x02\u0739" +
		"\u0738\x03\x02\x02\x02\u0739\u073A\x03\x02\x02\x02\u073A\u073B\x03\x02" +
		"\x02\x02\u073B\u073C\x07\xCC\x02\x02\u073C\u074A\t\x1F\x02\x02\u073D\u073E" +
		"\x07\u0206\x02\x02\u073E\u074B\x07\u0207\x02\x02\u073F\u0740\x07\u0206" +
		"\x02\x02\u0740\u0745\x05\u0106\x84\x02\u0741\u0742\x07\u020A\x02\x02\u0742" +
		"\u0744\x05\u0106\x84\x02\u0743\u0741\x03\x02\x02\x02\u0744\u0747\x03\x02" +
		"\x02\x02\u0745\u0743\x03\x02\x02\x02\u0745\u0746\x03\x02\x02\x02\u0746" +
		"\u0748\x03\x02\x02\x02\u0747\u0745\x03\x02\x02\x02\u0748\u0749\x07\u0207" +
		"\x02\x02\u0749\u074B\x03\x02\x02\x02\u074A\u073D\x03\x02\x02\x02\u074A" +
		"\u073F\x03\x02\x02\x02\u074B\u0756\x03\x02\x02\x02\u074C\u074E\x07\xF3" +
		"\x02\x02\u074D\u074C\x03\x02\x02\x02\u074D\u074E\x03\x02\x02\x02\u074E" +
		"\u074F\x03\x02\x02\x02\u074F\u0750\x07\xCC\x02\x02\u0750\u0753\x05\u010E" +
		"\x88\x02\u0751\u0752\x07\x81\x02\x02\u0752\u0754\x05\u016A\xB6\x02\u0753" +
		"\u0751\x03\x02\x02\x02\u0753\u0754\x03\x02\x02\x02\u0754\u0756\x03\x02" +
		"\x02\x02\u0755\u0739\x03\x02\x02\x02\u0755\u074D\x03\x02\x02\x02\u0756" +
		"\u010D\x03\x02\x02\x02\u0757\u0758\b\x88\x01\x02\u0758\u075C\x05\u0110" +
		"\x89\x02\u0759\u075A\t \x02\x02\u075A\u075C\x05\u010E\x88\t\u075B\u0757" +
		"\x03\x02\x02\x02\u075B\u0759\x03\x02\x02\x02\u075C\u0772\x03\x02\x02\x02" +
		"\u075D\u075E\f\b\x02\x02\u075E\u075F\t!\x02\x02\u075F\u0771\x05\u010E" +
		"\x88\t\u0760\u0761\f\x07\x02\x02\u0761\u0762\t\"\x02\x02\u0762\u0771\x05" +
		"\u010E\x88\b\u0763\u0764\f\x06\x02\x02\u0764\u0765\x07\u0201\x02\x02\u0765" +
		"\u0771\x05\u010E\x88\x07\u0766\u0767\f\x05\x02\x02\u0767\u0768\x07\u0202" +
		"\x02\x02\u0768\u0771\x05\u010E\x88\x06\u0769\u076A\f\x04\x02\x02\u076A" +
		"\u076B\x07\u0200\x02\x02\u076B\u0771\x05\u010E\x88\x05\u076C\u076D\f\x03" +
		"\x02\x02\u076D\u076E\x05\u015E\xB0\x02\u076E\u076F\x05\u010E\x88\x04\u076F" +
		"\u0771\x03\x02\x02\x02\u0770\u075D\x03\x02\x02\x02\u0770\u0760\x03\x02" +
		"\x02\x02\u0770\u0763\x03\x02\x02\x02\u0770\u0766\x03\x02\x02\x02\u0770" +
		"\u0769\x03\x02\x02\x02\u0770\u076C\x03\x02\x02\x02\u0771\u0774\x03\x02" +
		"\x02\x02\u0772\u0770\x03\x02\x02\x02\u0772\u0773\x03\x02\x02\x02\u0773" +
		"\u010F\x03\x02\x02\x02\u0774\u0772\x03\x02\x02\x02\u0775\u0776\b\x89\x01" +
		"\x02\u0776\u0778\x07*\x02\x02\u0777\u0779\x05\u013A\x9E\x02\u0778\u0777" +
		"\x03\x02\x02\x02\u0779\u077A\x03\x02\x02\x02\u077A\u0778\x03\x02\x02\x02" +
		"\u077A\u077B\x03\x02\x02\x02\u077B\u077E\x03\x02\x02\x02\u077C\u077D\x07" +
		"z\x02\x02\u077D\u077F\x05\u0106\x84\x02\u077E\u077C\x03\x02\x02\x02\u077E" +
		"\u077F\x03\x02\x02\x02\u077F\u0780\x03\x02\x02\x02\u0780\u0781\x07|\x02" +
		"\x02\u0781\u07D2\x03\x02\x02\x02\u0782\u0783\x07*\x02\x02\u0783\u0785" +
		"\x05\u0106\x84\x02\u0784\u0786\x05\u013A\x9E\x02\u0785\u0784\x03\x02\x02" +
		"\x02\u0786\u0787\x03\x02\x02\x02\u0787\u0785\x03\x02\x02\x02\u0787\u0788" +
		"\x03\x02\x02\x02\u0788\u078B\x03\x02\x02\x02\u0789\u078A\x07z\x02\x02" +
		"\u078A\u078C\x05\u0106\x84\x02\u078B\u0789\x03\x02\x02\x02\u078B\u078C" +
		"\x03\x02\x02\x02\u078C\u078D\x03\x02\x02\x02\u078D\u078E\x07|\x02\x02" +
		"\u078E\u07D2\x03\x02\x02\x02\u078F\u0790\x07+\x02\x02\u0790\u0791\x07" +
		"\u0206\x02\x02\u0791\u0792\x05\u0106\x84\x02\u0792\u0793\x07\x13\x02\x02" +
		"\u0793\u0794\x05<\x1F\x02\u0794\u0795\x07\u0207\x02\x02\u0795\u07D2\x03" +
		"\x02\x02\x02\u0796\u0797\x07\u01CB\x02\x02\u0797\u0798\x07\u0206\x02\x02" +
		"\u0798\u079B\x05\u0106\x84\x02\u0799\u079A\x07\u01CF\x02\x02\u079A\u079C" +
		"\x07\u01DE\x02\x02\u079B\u0799\x03\x02\x02\x02\u079B\u079C\x03\x02\x02" +
		"\x02\u079C\u079D\x03\x02\x02\x02\u079D\u079E\x07\u0207\x02\x02\u079E\u07D2" +
		"\x03\x02\x02\x02\u079F\u07A0\x07\u01D5\x02\x02\u07A0\u07A1\x07\u0206\x02" +
		"\x02\u07A1\u07A4\x05\u0106\x84\x02\u07A2\u07A3\x07\u01CF\x02\x02\u07A3" +
		"\u07A5\x07\u01DE\x02\x02\u07A4\u07A2\x03\x02\x02\x02\u07A4\u07A5\x03\x02" +
		"\x02\x02\u07A5\u07A6\x03\x02\x02\x02\u07A6\u07A7\x07\u0207\x02\x02\u07A7" +
		"\u07D2\x03\x02\x02\x02\u07A8\u07A9\x07\u011B\x02\x02\u07A9\u07AA\x07\u0206" +
		"\x02\x02\u07AA\u07AB\x05\u010E\x88\x02\u07AB\u07AC\x07\xAC\x02\x02\u07AC" +
		"\u07AD\x05\u010E\x88\x02\u07AD\u07AE\x07\u0207\x02\x02\u07AE\u07D2\x03" +
		"\x02\x02\x02\u07AF\u07D2\x05\u0166\xB4\x02\u07B0\u07D2\x07\u0211\x02\x02" +
		"\u07B1\u07B2\x05\u014C\xA7\x02\u07B2\u07B3\x07\u0203\x02\x02\u07B3\u07B4" +
		"\x07\u0211\x02\x02\u07B4\u07D2\x03\x02\x02\x02\u07B5\u07B6\x07\u0206\x02" +
		"\x02\u07B6\u07B7\x05\xA2R\x02\u07B7\u07B8\x07\u0207\x02\x02\u07B8\u07D2" +
		"\x03\x02\x02\x02\u07B9\u07BA\x05\u0114\x8B\x02\u07BA\u07C6\x07\u0206\x02" +
		"\x02\u07BB\u07BD\x05\u0170\xB9\x02\u07BC\u07BB\x03\x02\x02\x02\u07BC\u07BD" +
		"\x03\x02\x02\x02\u07BD\u07BE\x03\x02\x02\x02\u07BE\u07C3\x05\u0116\x8C" +
		"\x02\u07BF\u07C0\x07\u020A\x02\x02\u07C0\u07C2\x05\u0116\x8C\x02\u07C1" +
		"\u07BF\x03\x02\x02\x02\u07C2\u07C5\x03\x02\x02\x02\u07C3\u07C1\x03\x02" +
		"\x02\x02\u07C3\u07C4\x03\x02\x02\x02\u07C4\u07C7\x03\x02\x02\x02\u07C5" +
		"\u07C3\x03\x02\x02\x02\u07C6\u07BC\x03\x02\x02\x02\u07C6\u07C7\x03\x02" +
		"\x02\x02\u07C7\u07C8\x03\x02\x02\x02\u07C8\u07C9\x07\u0207\x02\x02\u07C9" +
		"\u07D2\x03\x02\x02\x02\u07CA\u07D2\x05\u0134\x9B\x02\u07CB\u07D2\x05\u0118" +
		"\x8D\x02\u07CC\u07CD\x07\u0206\x02\x02\u07CD\u07CE\x05\u0106\x84\x02\u07CE" +
		"\u07CF\x07\u0207\x02\x02\u07CF\u07D2\x03\x02\x02\x02\u07D0\u07D2\x07W" +
		"\x02\x02\u07D1\u0775\x03\x02\x02\x02\u07D1\u0782\x03\x02\x02\x02\u07D1" +
		"\u078F\x03\x02\x02\x02\u07D1\u0796\x03\x02\x02\x02\u07D1\u079F\x03\x02" +
		"\x02\x02\u07D1\u07A8\x03\x02\x02\x02\u07D1\u07AF\x03\x02\x02\x02\u07D1" +
		"\u07B0\x03\x02\x02\x02\u07D1\u07B1\x03\x02\x02\x02\u07D1\u07B5\x03\x02" +
		"\x02\x02\u07D1\u07B9\x03\x02\x02\x02\u07D1\u07CA\x03\x02\x02\x02\u07D1" +
		"\u07CB\x03\x02\x02\x02\u07D1\u07CC\x03\x02\x02\x02\u07D1\u07D0\x03\x02" +
		"\x02\x02\u07D2\u07DA\x03\x02\x02\x02\u07D3\u07D4\f\x07\x02\x02\u07D4\u07D5" +
		"\x07\u0204\x02\x02\u07D5\u07D6\x05\u010E\x88\x02\u07D6\u07D7\x07\u0205" +
		"\x02\x02\u07D7\u07D9\x03\x02\x02\x02\u07D8\u07D3\x03\x02\x02\x02\u07D9" +
		"\u07DC\x03\x02\x02\x02\u07DA\u07D8\x03\x02\x02\x02\u07DA\u07DB\x03\x02" +
		"\x02\x02\u07DB\u0111\x03\x02\x02\x02\u07DC\u07DA\x03\x02\x02\x02\u07DD" +
		"\u07DE\x05\u014C\xA7\x02\u07DE\u0113\x03\x02\x02\x02\u07DF\u07E2\x05\u0178" +
		"\xBD\x02\u07E0\u07E2\x05\u014C\xA7\x02\u07E1\u07DF\x03\x02\x02\x02\u07E1" +
		"\u07E0\x03\x02\x02\x02\u07E2\u0115\x03\x02\x02\x02\u07E3\u07E8\x05\u0176" +
		"\xBC\x02\u07E4\u07E8\x05\u0174\xBB\x02\u07E5\u07E8\x05\u0172\xBA\x02\u07E6" +
		"\u07E8\x05\u0106\x84\x02\u07E7\u07E3\x03\x02\x02\x02\u07E7\u07E4\x03\x02" +
		"\x02\x02\u07E7\u07E5\x03\x02\x02\x02\u07E7\u07E6\x03\x02\x02\x02\u07E8" +
		"\u0117\x03\x02\x02\x02\u07E9\u07EA\x05\u014C\xA7\x02\u07EA\u0119\x03\x02" +
		"\x02\x02\u07EB\u07EC\x05\u0134\x9B\x02\u07EC\u011B\x03\x02\x02\x02\u07ED" +
		"\u07F0\x05\u0134\x9B\x02\u07EE\u07F0\x05\u0118\x8D\x02\u07EF\u07ED\x03" +
		"\x02\x02\x02\u07EF\u07EE\x03\x02\x02\x02\u07F0\u011D\x03\x02\x02\x02\u07F1" +
		"\u07F4\x07\xB8\x02\x02\u07F2\u07F5\x05\u0120\x91\x02\u07F3\u07F5\x05\u0124" +
		"\x93\x02\u07F4\u07F2\x03\x02\x02\x02\u07F4\u07F3\x03\x02\x02\x02\u07F4" +
		"\u07F5\x03\x02\x02\x02\u07F5\u011F\x03\x02\x02\x02\u07F6\u07F8\x05\u0122" +
		"\x92\x02\u07F7\u07F9\x05\u0126\x94\x02\u07F8\u07F7\x03\x02\x02\x02\u07F8" +
		"\u07F9\x03\x02\x02\x02\u07F9\u0121\x03\x02\x02\x02\u07FA\u07FB\x05\u0128" +
		"\x95\x02\u07FB\u07FC\x05\u0174\xBB\x02\u07FC\u07FE\x03\x02\x02\x02\u07FD" +
		"\u07FA\x03\x02\x02\x02\u07FE\u07FF\x03\x02\x02\x02\u07FF\u07FD\x03\x02" +
		"\x02\x02\u07FF\u0800\x03\x02\x02\x02\u0800\u0123\x03\x02\x02\x02\u0801" +
		"\u0804\x05\u0126\x94\x02\u0802\u0805\x05\u0122\x92\x02\u0803\u0805\x05" +
		"\u0126\x94\x02\u0804\u0802\x03\x02\x02\x02\u0804\u0803\x03\x02\x02\x02" +
		"\u0804\u0805\x03\x02\x02\x02\u0805\u0125\x03\x02\x02\x02\u0806\u0807\x05" +
		"\u0128\x95\x02\u0807\u0808\x05\u0174\xBB\x02\u0808\u0809\x07\u0186\x02" +
		"\x02\u0809\u080A\x05\u0174\xBB\x02\u080A\u0127\x03\x02\x02\x02\u080B\u080D" +
		"\t#\x02\x02\u080C\u080B\x03\x02\x02\x02\u080C\u080D\x03\x02\x02\x02\u080D" +
		"\u080E\x03\x02\x02\x02\u080E\u0811\t$\x02\x02\u080F\u0811\x07\u021B\x02" +
		"\x02\u0810\u080C\x03\x02\x02\x02\u0810\u080F\x03\x02\x02\x02\u0811\u0129" +
		"\x03\x02\x02\x02\u0812\u0814\x07\x13\x02\x02\u0813\u0812\x03\x02\x02\x02" +
		"\u0813\u0814\x03\x02\x02\x02\u0814\u0815\x03\x02\x02\x02\u0815\u0817\x05" +
		"\u0134\x9B\x02\u0816\u0818\x05\u0130\x99\x02\u0817\u0816\x03\x02\x02\x02" +
		"\u0817\u0818\x03\x02\x02\x02\u0818\u012B\x03\x02\x02\x02\u0819\u081A\x05" +
		"\u0134\x9B\x02\u081A\u081B\x05\u012E\x98\x02\u081B\u012D\x03\x02\x02\x02" +
		"\u081C\u081D\x07\xDF\x02\x02\u081D\u081F\x05\u0134\x9B\x02\u081E\u081C" +
		"\x03\x02\x02\x02\u081F\u0820\x03\x02\x02\x02\u0820\u081E\x03\x02\x02\x02" +
		"\u0820\u0821\x03\x02\x02\x02\u0821\u0824\x03\x02\x02\x02\u0822\u0824\x03" +
		"\x02\x02\x02\u0823\u081E\x03\x02\x02\x02\u0823\u0822\x03\x02\x02\x02\u0824" +
		"\u012F\x03\x02\x02\x02\u0825\u0826\x07\u0206\x02\x02\u0826\u0827\x05\u0132" +
		"\x9A\x02\u0827\u0828\x07\u0207\x02\x02\u0828\u0131\x03\x02\x02\x02\u0829" +
		"\u082E\x05\u0134\x9B\x02\u082A\u082B\x07\u020A\x02\x02\u082B\u082D\x05" +
		"\u0134\x9B\x02\u082C\u082A\x03\x02\x02\x02\u082D\u0830\x03\x02\x02\x02" +
		"\u082E\u082C\x03\x02\x02\x02\u082E\u082F\x03\x02\x02\x02\u082F\u0133\x03" +
		"\x02\x02\x02\u0830\u082E\x03\x02\x02\x02\u0831\u0835\x05\u0136\x9C\x02" +
		"\u0832\u0835\x05\u0138\x9D\x02\u0833\u0835\x05\u017A\xBE\x02\u0834\u0831" +
		"\x03\x02\x02\x02\u0834\u0832\x03\x02\x02\x02\u0834\u0833\x03\x02\x02\x02" +
		"\u0835\u0135\x03\x02\x02\x02\u0836\u0837\t%\x02\x02\u0837\u0137\x03\x02" +
		"\x02\x02\u0838\u0839\x07\u021B\x02\x02\u0839\u0139\x03\x02\x02\x02\u083A" +
		"\u083B\x07\u01AE\x02\x02\u083B\u083C\x05\u0106\x84\x02\u083C\u083D\x07" +
		"\u017A\x02\x02\u083D\u083E\x05\u0106\x84\x02\u083E\u013B\x03\x02\x02\x02" +
		"\u083F\u0840\x05\u0134\x9B\x02\u0840\u013D\x03\x02\x02\x02\u0841\u0842" +
		"\x05\u0134\x9B\x02\u0842\u013F\x03\x02\x02\x02\u0843\u0846\x05\u0134\x9B" +
		"\x02\u0844\u0845\x07\u0203\x02\x02\u0845\u0847\x05\u0134\x9B\x02\u0846" +
		"\u0844\x03\x02\x02\x02\u0846\u0847\x03\x02\x02\x02\u0847\u0141\x03\x02" +
		"\x02\x02\u0848\u084B\x05\u0134\x9B\x02\u0849\u084A\x07\u0203\x02\x02\u084A" +
		"\u084C\x05\u0134\x9B\x02\u084B\u0849\x03\x02\x02\x02\u084B\u084C\x03\x02" +
		"\x02\x02\u084C\u0143\x03\x02\x02\x02\u084D\u0850\x05\u0134\x9B\x02\u084E" +
		"\u084F\x07\u0203\x02\x02\u084F\u0851\x05\u0134\x9B\x02\u0850\u084E\x03" +
		"\x02\x02\x02\u0850\u0851\x03\x02\x02\x02\u0851\u085A\x03\x02\x02\x02\u0852" +
		"\u0853\x05\u0134\x9B\x02\u0853\u0854\x07\u0203\x02\x02\u0854\u0857\x05" +
		"\u0134\x9B\x02\u0855\u0856\x07\u0203\x02\x02\u0856\u0858\x05\u0134\x9B" +
		"\x02\u0857\u0855\x03\x02\x02\x02\u0857\u0858\x03\x02\x02\x02\u0858\u085A" +
		"\x03\x02\x02\x02\u0859\u084D\x03\x02\x02\x02\u0859\u0852\x03\x02\x02\x02" +
		"\u085A\u0145\x03\x02\x02\x02\u085B\u085E\x05\u0134\x9B\x02\u085C\u085D" +
		"\x07\u0203\x02\x02\u085D\u085F\x05\u0134\x9B\x02\u085E\u085C\x03\x02\x02" +
		"\x02\u085E\u085F\x03\x02\x02\x02\u085F\u0868\x03\x02\x02\x02\u0860\u0861" +
		"\x05\u0134\x9B\x02\u0861\u0862\x07\u0203\x02\x02\u0862\u0865\x05\u0134" +
		"\x9B\x02\u0863\u0864\x07\u0203\x02\x02\u0864\u0866\x05\u0134\x9B\x02\u0865" +
		"\u0863\x03\x02\x02\x02\u0865\u0866\x03\x02\x02\x02\u0866\u0868\x03\x02" +
		"\x02\x02\u0867\u085B\x03\x02\x02\x02\u0867\u0860\x03\x02\x02\x02\u0868" +
		"\u0147\x03\x02\x02\x02\u0869\u086C\x05\u0134\x9B\x02\u086A\u086B\x07\u0203" +
		"\x02\x02\u086B\u086D\x05\u0134\x9B\x02\u086C\u086A\x03\x02\x02\x02\u086C" +
		"\u086D\x03\x02\x02\x02\u086D\u0876\x03\x02\x02\x02\u086E\u086F\x05\u0134" +
		"\x9B\x02\u086F\u0870\x07\u0203\x02\x02\u0870\u0873\x05\u0134\x9B\x02\u0871" +
		"\u0872\x07\u0203\x02\x02\u0872\u0874\x05\u0134\x9B\x02\u0873\u0871\x03" +
		"\x02\x02\x02\u0873\u0874\x03\x02\x02\x02\u0874\u0876\x03\x02\x02\x02\u0875" +
		"\u0869\x03\x02\x02\x02\u0875\u086E\x03\x02\x02\x02\u0876\u0149\x03\x02" +
		"\x02\x02\u0877\u087A\x05\u0134\x9B\x02\u0878\u0879\x07\u0203\x02\x02\u0879" +
		"\u087B\x05\u0134\x9B\x02\u087A\u0878\x03\x02\x02\x02\u087A\u087B\x03\x02" +
		"\x02\x02\u087B\u0884\x03\x02\x02\x02\u087C\u087D\x05\u0134\x9B\x02\u087D" +
		"\u087E\x07\u0203\x02\x02\u087E\u0881\x05\u0134\x9B\x02\u087F\u0880\x07" +
		"\u0203\x02\x02\u0880\u0882\x05\u0134\x9B\x02\u0881\u087F\x03\x02\x02\x02" +
		"\u0881\u0882\x03\x02\x02\x02\u0882\u0884\x03\x02\x02\x02\u0883\u0877\x03" +
		"\x02\x02\x02\u0883\u087C\x03\x02\x02\x02\u0884\u014B\x03\x02\x02\x02\u0885" +
		"\u088A\x05\u0134\x9B\x02\u0886\u0887\x07\u0203\x02\x02\u0887\u0889\x05" +
		"\u0134\x9B\x02\u0888\u0886\x03\x02\x02\x02\u0889\u088C\x03\x02\x02\x02" +
		"\u088A\u088B";
	private static readonly _serializedATNSegment4: string =
		"\x03\x02\x02\x02\u088A\u0888\x03\x02\x02\x02\u088B\u014D\x03\x02\x02\x02" +
		"\u088C\u088A\x03\x02\x02\x02\u088D\u088E\x07\u01B3\x02\x02\u088E\u088F" +
		"\x05\u0154\xAB\x02\u088F\u014F\x03\x02\x02\x02\u0890\u0891\x07\xA9\x02" +
		"\x02\u0891\u0892\x07\xF3\x02\x02\u0892\u0893\x07\x87\x02\x02\u0893\u0151" +
		"\x03\x02\x02\x02\u0894\u0895\x07\xA9\x02\x02\u0895\u0896\x07\x87\x02\x02" +
		"\u0896\u0153\x03\x02\x02\x02\u0897\u0898\x07\u0206\x02\x02\u0898\u089D" +
		"\x05\u0156\xAC\x02\u0899\u089A\x07\u020A\x02\x02\u089A\u089C\x05\u0156" +
		"\xAC\x02\u089B\u0899\x03\x02\x02\x02\u089C\u089F\x03\x02\x02\x02\u089D" +
		"\u089B\x03\x02\x02\x02\u089D\u089E\x03\x02\x02\x02\u089E\u08A0\x03\x02" +
		"\x02\x02\u089F\u089D\x03\x02\x02\x02\u08A0\u08A1\x07\u0207\x02\x02\u08A1" +
		"\u0155\x03\x02\x02\x02\u08A2\u08A7\x05\u0158\xAD\x02\u08A3\u08A5\x07\u01FB" +
		"\x02\x02\u08A4\u08A3\x03\x02\x02\x02\u08A4\u08A5\x03\x02\x02\x02\u08A5" +
		"\u08A6\x03\x02\x02\x02\u08A6\u08A8\x05\u015A\xAE\x02\u08A7\u08A4\x03\x02" +
		"\x02\x02\u08A7\u08A8\x03\x02\x02\x02\u08A8\u0157\x03\x02\x02\x02\u08A9" +
		"\u08AD\x05\u0134\x9B\x02\u08AA\u08AD\x05\u0118\x8D\x02\u08AB\u08AD\x07" +
		"\u021B\x02\x02\u08AC\u08A9\x03\x02\x02\x02\u08AC\u08AA\x03\x02\x02\x02" +
		"\u08AC\u08AB\x03\x02\x02\x02\u08AD\u0159\x03\x02\x02\x02\u08AE\u08B3\x07" +
		"\u021C\x02\x02\u08AF\u08B3\x07\u021D\x02\x02\u08B0\u08B3\x05\u016E\xB8" +
		"\x02\u08B1\u08B3\x07\u021B\x02\x02\u08B2\u08AE\x03\x02\x02\x02\u08B2\u08AF" +
		"\x03\x02\x02\x02\u08B2\u08B0\x03\x02\x02\x02\u08B2\u08B1\x03\x02\x02\x02" +
		"\u08B3\u015B\x03\x02\x02\x02\u08B4\u08BB\x07\f\x02\x02\u08B5\u08B6\x07" +
		"\u0201\x02\x02\u08B6\u08BB\x07\u0201\x02\x02\u08B7\u08BB\x07\u0103\x02" +
		"\x02\u08B8\u08B9\x07\u0200\x02\x02\u08B9\u08BB\x07\u0200\x02\x02\u08BA" +
		"\u08B4\x03\x02\x02\x02\u08BA\u08B5\x03\x02\x02\x02\u08BA\u08B7\x03\x02" +
		"\x02\x02\u08BA\u08B8\x03\x02\x02\x02\u08BB\u015D\x03\x02\x02\x02\u08BC" +
		"\u08CB\x07\u01FB\x02\x02\u08BD\u08CB\x07\u01FC\x02\x02\u08BE\u08CB\x07" +
		"\u01FD\x02\x02\u08BF\u08C0\x07\u01FD\x02\x02\u08C0\u08CB\x07\u01FB\x02" +
		"\x02\u08C1\u08C2\x07\u01FC\x02\x02\u08C2\u08CB\x07\u01FB\x02\x02\u08C3" +
		"\u08C4\x07\u01FD\x02\x02\u08C4\u08CB\x07\u01FC\x02\x02\u08C5\u08C6\x07" +
		"\u01FE\x02\x02\u08C6\u08CB\x07\u01FB\x02\x02\u08C7\u08C8\x07\u01FD\x02" +
		"\x02\u08C8\u08C9\x07\u01FB\x02\x02\u08C9\u08CB\x07\u01FC\x02\x02\u08CA" +
		"\u08BC\x03\x02\x02\x02\u08CA\u08BD\x03\x02\x02\x02\u08CA\u08BE\x03\x02" +
		"\x02\x02\u08CA\u08BF\x03\x02\x02\x02\u08CA\u08C1\x03\x02\x02\x02\u08CA" +
		"\u08C3\x03\x02\x02\x02\u08CA\u08C5\x03\x02\x02\x02\u08CA\u08C7\x03\x02" +
		"\x02\x02\u08CB\u015F\x03\x02\x02\x02\u08CC\u08CD\x07\u01FD\x02\x02\u08CD" +
		"\u08D4\x07\u01FD\x02\x02\u08CE\u08CF\x07\u01FC\x02\x02\u08CF\u08D4\x07" +
		"\u01FC\x02\x02\u08D0\u08D4\x07\u0201\x02\x02\u08D1\u08D4\x07\u0202\x02" +
		"\x02\u08D2\u08D4\x07\u0200\x02\x02\u08D3\u08CC\x03\x02\x02\x02\u08D3\u08CE" +
		"\x03\x02\x02\x02\u08D3\u08D0\x03\x02\x02\x02\u08D3\u08D1\x03\x02\x02\x02" +
		"\u08D3\u08D2\x03\x02\x02\x02\u08D4\u0161\x03\x02\x02\x02\u08D5\u08D6\t" +
		"&\x02\x02\u08D6\u0163\x03\x02\x02\x02\u08D7\u08D8\t\'\x02\x02\u08D8\u0165" +
		"\x03\x02\x02\x02\u08D9\u08E8\x05\u011E\x90\x02\u08DA\u08E8\x05\u0168\xB5" +
		"\x02\u08DB\u08E8\x05\u016A\xB6\x02\u08DC\u08DE\x07\u0213\x02\x02\u08DD" +
		"\u08DC\x03\x02\x02\x02\u08DD\u08DE\x03\x02\x02\x02\u08DE\u08DF\x03\x02" +
		"\x02\x02\u08DF\u08E8\x05\u016C\xB7\x02\u08E0\u08E8\x05\u016E\xB8\x02\u08E1" +
		"\u08E8\x07\u021D\x02\x02\u08E2\u08E8\x07\u021E\x02\x02\u08E3\u08E5\x07" +
		"\xF3\x02\x02\u08E4\u08E3\x03\x02\x02\x02\u08E4\u08E5\x03\x02\x02\x02\u08E5" +
		"\u08E6\x03\x02\x02\x02\u08E6\u08E8\x07\xF6\x02\x02\u08E7\u08D9\x03\x02" +
		"\x02\x02\u08E7\u08DA\x03\x02\x02\x02\u08E7\u08DB\x03\x02\x02\x02\u08E7" +
		"\u08DD\x03\x02\x02\x02\u08E7\u08E0\x03\x02\x02\x02\u08E7\u08E1\x03\x02" +
		"\x02\x02\u08E7\u08E2\x03\x02\x02\x02\u08E7\u08E4\x03\x02\x02\x02\u08E8" +
		"\u0167\x03\x02\x02\x02\u08E9\u08EA\x05\u0172\xBA\x02\u08EA\u08EB\x05\u016A" +
		"\xB6\x02\u08EB\u0169\x03\x02\x02\x02\u08EC\u08ED\x07\u021B\x02\x02\u08ED" +
		"\u016B\x03\x02\x02\x02\u08EE\u08EF\x07\u021C\x02\x02\u08EF\u016D\x03\x02" +
		"\x02\x02\u08F0\u08F1\t(\x02\x02\u08F1\u016F\x03\x02\x02\x02\u08F2\u08F3" +
		"\t)\x02\x02\u08F3\u0171\x03\x02\x02\x02\u08F4\u08F5\t*\x02\x02\u08F5\u0173" +
		"\x03\x02\x02\x02\u08F6\u08F7\t+\x02\x02\u08F7\u0175\x03\x02\x02\x02\u08F8" +
		"\u08F9\t,\x02\x02\u08F9\u0177\x03\x02\x02\x02\u08FA\u08FB\t-\x02\x02\u08FB" +
		"\u0179\x03\x02\x02\x02\u08FC\u08FD\t.\x02\x02\u08FD\u017B\x03\x02\x02" +
		"\x02\u0119\u0184\u0186\u018B\u018F\u0193\u0197\u019B\u019F\u01A3\u01A7" +
		"\u01AB\u01AF\u01B3\u01B7\u01B9\u01CB\u01CF\u01D8\u01DD\u01E4\u01EF\u01F8" +
		"\u0204\u0207\u020E\u0211\u0219\u021D\u0222\u0225\u022C\u0234\u0238\u0244" +
		"\u024C\u0250\u0270\u0273\u0278\u027C\u0280\u0284\u028D\u0292\u0296\u029A" +
		"\u029E\u02A1\u02A5\u02AA\u02B0\u02B5\u02BA\u02BD\u02C1\u02C5\u02CD\u02D5" +
		"\u02D9\u02DD\u02E1\u02E5\u02E9\u02ED\u02F1\u02F5\u02F7\u0301\u0309\u0321" +
		"\u0328\u032E\u0331\u0334\u033E\u0341\u0349\u0355\u036D\u037A\u037F\u0383" +
		"\u038B\u038F\u0395\u039F\u03A3\u03A9\u03AD\u03B1\u03B4\u03BD\u03C1\u03C8" +
		"\u03CB\u03D5\u03DD\u03E5\u03E9\u03F8\u040B\u0416\u041A\u0421\u0426\u042C" +
		"\u0430\u0437\u043B\u043F\u0443\u044B\u044F\u0454\u045A\u0460\u0463\u0467" +
		"\u0472\u047B\u0489\u0495\u04A4\u04A7\u04AB\u04AE\u04B0\u04B5\u04B9\u04BC" +
		"\u04C0\u04C9\u04D2\u04DC\u04E1\u04EC\u04EF\u04F2\u04F5\u04F8\u04FE\u0502" +
		"\u050A\u050D\u0512\u0515\u0517\u0525\u0530\u0535\u053D\u0540\u0543\u0548" +
		"\u054A\u054C\u0551\u0554\u0558\u055B\u055E\u0562\u0565\u0568\u0574\u057B" +
		"\u0586\u05A1\u05B7\u05C4\u05D0\u05DD\u05E9\u05F5\u05FA\u0615\u061D\u0621" +
		"\u0624\u0627\u062E\u0631\u0634\u0637\u063A\u063D\u0642\u0645\u064E\u0653" +
		"\u0657\u065C\u0665\u0678\u0680\u0688\u068C\u0690\u069A\u06B4\u06BC\u06C8" +
		"\u06DE\u06E0\u06EB\u06EE\u06F0\u06F4\u06F8\u06FF\u0708\u070E\u071B\u0722" +
		"\u0727\u072D\u0734\u0736\u0739\u0745\u074A\u074D\u0753\u0755\u075B\u0770" +
		"\u0772\u077A\u077E\u0787\u078B\u079B\u07A4\u07BC\u07C3\u07C6\u07D1\u07DA" +
		"\u07E1\u07E7\u07EF\u07F4\u07F8\u07FF\u0804\u080C\u0810\u0813\u0817\u0820" +
		"\u0823\u082E\u0834\u0846\u084B\u0850\u0857\u0859\u085E\u0865\u0867\u086C" +
		"\u0873\u0875\u087A\u0881\u0883\u088A\u089D\u08A4\u08A7\u08AC\u08B2\u08BA" +
		"\u08CA\u08D3\u08DD\u08E4\u08E7";
	public static readonly _serializedATN: string = Utils.join(
		[
			FlinkSqlParser._serializedATNSegment0,
			FlinkSqlParser._serializedATNSegment1,
			FlinkSqlParser._serializedATNSegment2,
			FlinkSqlParser._serializedATNSegment3,
			FlinkSqlParser._serializedATNSegment4,
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
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.SEMICOLON, 0); }
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
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
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
	public KW_CATALOG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CATALOG, 0); }
	public catalogPath(): CatalogPathContext | undefined {
		return this.tryGetRuleContext(0, CatalogPathContext);
	}
	public databasePath(): DatabasePathContext | undefined {
		return this.tryGetRuleContext(0, DatabasePathContext);
	}
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
	public databasePath(): DatabasePathContext | undefined {
		return this.tryGetRuleContext(0, DatabasePathContext);
	}
	public likePredicate(): LikePredicateContext | undefined {
		return this.tryGetRuleContext(0, LikePredicateContext);
	}
	public KW_FROM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FROM, 0); }
	public KW_IN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IN, 0); }
	public KW_COLUMNS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COLUMNS, 0); }
	public viewPath(): ViewPathContext | undefined {
		return this.tryGetRuleContext(0, ViewPathContext);
	}
	public tablePath(): TablePathContext | undefined {
		return this.tryGetRuleContext(0, TablePathContext);
	}
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
	public KW_CONFIG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONFIG, 0); }
	public KW_FOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FOR, 0); }
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
	public uid(): UidContext[];
	public uid(i: number): UidContext;
	public uid(i?: number): UidContext | UidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UidContext);
		} else {
			return this.getRuleContext(i, UidContext);
		}
	}
	public SLASH_SIGN(): TerminalNode[];
	public SLASH_SIGN(i: number): TerminalNode;
	public SLASH_SIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FlinkSqlParser.SLASH_SIGN);
		} else {
			return this.getToken(FlinkSqlParser.SLASH_SIGN, i);
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
	public tablePathCreate(): TablePathCreateContext {
		return this.getRuleContext(0, TablePathCreateContext);
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
	public tablePathCreate(): TablePathCreateContext {
		return this.getRuleContext(0, TablePathCreateContext);
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
	public columnNameCreate(): ColumnNameCreateContext {
		return this.getRuleContext(0, ColumnNameCreateContext);
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


export class ColumnNameCreateContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return FlinkSqlParser.RULE_columnNameCreate; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnNameCreate) {
			listener.enterColumnNameCreate(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnNameCreate) {
			listener.exitColumnNameCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnNameCreate) {
			return visitor.visitColumnNameCreate(this);
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
	public columnNameCreate(): ColumnNameCreateContext {
		return this.getRuleContext(0, ColumnNameCreateContext);
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
	public columnNameCreate(): ColumnNameCreateContext {
		return this.getRuleContext(0, ColumnNameCreateContext);
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
	public columnName(): ColumnNameContext {
		return this.getRuleContext(0, ColumnNameContext);
	}
	public KW_AS(): TerminalNode { return this.getToken(FlinkSqlParser.KW_AS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
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
	public columnName(): ColumnNameContext {
		return this.getRuleContext(0, ColumnNameContext);
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
export class ColumnTransformContext extends TransformContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: TransformContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterColumnTransform) {
			listener.enterColumnTransform(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitColumnTransform) {
			listener.exitColumnTransform(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitColumnTransform) {
			return visitor.visitColumnTransform(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ApplyTransformContext extends TransformContext {
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
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
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
	public catalogPathCreate(): CatalogPathCreateContext {
		return this.getRuleContext(0, CatalogPathCreateContext);
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
	public databasePathCreate(): DatabasePathCreateContext {
		return this.getRuleContext(0, DatabasePathCreateContext);
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
	public viewPathCreate(): ViewPathCreateContext {
		return this.getRuleContext(0, ViewPathCreateContext);
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
	public functionNameCreate(): FunctionNameCreateContext {
		return this.getRuleContext(0, FunctionNameCreateContext);
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
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
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
	public viewPath(): ViewPathContext {
		return this.getRuleContext(0, ViewPathContext);
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
	public databasePath(): DatabasePathContext {
		return this.getRuleContext(0, DatabasePathContext);
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
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
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
	public catalogPath(): CatalogPathContext {
		return this.getRuleContext(0, CatalogPathContext);
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
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
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
	public databasePath(): DatabasePathContext {
		return this.getRuleContext(0, DatabasePathContext);
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
	public viewPath(): ViewPathContext {
		return this.getRuleContext(0, ViewPathContext);
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
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
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
	public tablePath(): TablePathContext {
		return this.getRuleContext(0, TablePathContext);
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
	public fromClause(): FromClauseContext | undefined {
		return this.tryGetRuleContext(0, FromClauseContext);
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
	public columnName(): ColumnNameContext | undefined {
		return this.tryGetRuleContext(0, ColumnNameContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
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
	public viewPath(): ViewPathContext | undefined {
		return this.tryGetRuleContext(0, ViewPathContext);
	}
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
	public columnName(): ColumnNameContext {
		return this.getRuleContext(0, ColumnNameContext);
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
	public columnNameList(): ColumnNameListContext | undefined {
		return this.tryGetRuleContext(0, ColumnNameListContext);
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
	public columnName(): ColumnNameContext | undefined {
		return this.tryGetRuleContext(0, ColumnNameContext);
	}
	public groupWindowFunction(): GroupWindowFunctionContext | undefined {
		return this.tryGetRuleContext(0, GroupWindowFunctionContext);
	}
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
	public columnName(): ColumnNameContext {
		return this.getRuleContext(0, ColumnNameContext);
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
export class DateFunctionExpressionContext extends PrimaryExpressionContext {
	public KW_CURRENT_TIMESTAMP(): TerminalNode { return this.getToken(FlinkSqlParser.KW_CURRENT_TIMESTAMP, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDateFunctionExpression) {
			listener.enterDateFunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDateFunctionExpression) {
			listener.exitDateFunctionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDateFunctionExpression) {
			return visitor.visitDateFunctionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionNameCreateContext extends ParserRuleContext {
	public uid(): UidContext {
		return this.getRuleContext(0, UidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_functionNameCreate; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterFunctionNameCreate) {
			listener.enterFunctionNameCreate(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitFunctionNameCreate) {
			listener.exitFunctionNameCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitFunctionNameCreate) {
			return visitor.visitFunctionNameCreate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	public reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext | undefined {
		return this.tryGetRuleContext(0, ReservedKeywordsUsedAsFuncNameContext);
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


export class CatalogPathContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_catalogPath; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCatalogPath) {
			listener.enterCatalogPath(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCatalogPath) {
			listener.exitCatalogPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCatalogPath) {
			return visitor.visitCatalogPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatalogPathCreateContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_catalogPathCreate; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterCatalogPathCreate) {
			listener.enterCatalogPathCreate(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitCatalogPathCreate) {
			listener.exitCatalogPathCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitCatalogPathCreate) {
			return visitor.visitCatalogPathCreate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatabasePathContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_databasePath; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDatabasePath) {
			listener.enterDatabasePath(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDatabasePath) {
			listener.exitDatabasePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDatabasePath) {
			return visitor.visitDatabasePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatabasePathCreateContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FlinkSqlParser.RULE_databasePathCreate; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterDatabasePathCreate) {
			listener.enterDatabasePathCreate(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitDatabasePathCreate) {
			listener.exitDatabasePathCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitDatabasePathCreate) {
			return visitor.visitDatabasePathCreate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePathCreateContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return FlinkSqlParser.RULE_tablePathCreate; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterTablePathCreate) {
			listener.enterTablePathCreate(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitTablePathCreate) {
			listener.exitTablePathCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitTablePathCreate) {
			return visitor.visitTablePathCreate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePathContext extends ParserRuleContext {
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


export class ViewPathContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return FlinkSqlParser.RULE_viewPath; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterViewPath) {
			listener.enterViewPath(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitViewPath) {
			listener.exitViewPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitViewPath) {
			return visitor.visitViewPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ViewPathCreateContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return FlinkSqlParser.RULE_viewPathCreate; }
	// @Override
	public enterRule(listener: FlinkSqlParserListener): void {
		if (listener.enterViewPathCreate) {
			listener.enterViewPathCreate(this);
		}
	}
	// @Override
	public exitRule(listener: FlinkSqlParserListener): void {
		if (listener.exitViewPathCreate) {
			listener.exitViewPathCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result {
		if (visitor.visitViewPathCreate) {
			return visitor.visitViewPathCreate(this);
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
	public KW_ARRAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ARRAY, 0); }
	public KW_ALL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ALL, 0); }
	public KW_BOTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_BOTH, 0); }
	public KW_CURRENT_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CURRENT_TIMESTAMP, 0); }
	public KW_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DISTINCT, 0); }
	public KW_LEADING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LEADING, 0); }
	public KW_TRAILING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TRAILING, 0); }
	public KW_VALUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VALUE, 0); }
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
	public KW_CARDINALITY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CARDINALITY, 0); }
	public KW_CAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CAST, 0); }
	public KW_CEIL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CEIL, 0); }
	public KW_CEILING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CEILING, 0); }
	public KW_COALESCE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COALESCE, 0); }
	public KW_COLLECT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COLLECT, 0); }
	public KW_COUNT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_COUNT, 0); }
	public KW_CUME_DIST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CUME_DIST, 0); }
	public KW_CURRENT_DATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CURRENT_DATE, 0); }
	public KW_CURRENT_TIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CURRENT_TIME, 0); }
	public KW_CURRENT_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CURRENT_TIMESTAMP, 0); }
	public KW_DATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATE, 0); }
	public KW_DAYOFWEEK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DAYOFWEEK, 0); }
	public KW_DAYOFYEAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DAYOFYEAR, 0); }
	public KW_DENSE_RANK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DENSE_RANK, 0); }
	public KW_ELEMENT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ELEMENT, 0); }
	public KW_EXP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXP, 0); }
	public KW_EXTRACT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXTRACT, 0); }
	public KW_FIRST_VALUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FIRST_VALUE, 0); }
	public KW_FLOOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FLOOR, 0); }
	public KW_GROUPING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GROUPING, 0); }
	public KW_HOUR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_HOUR, 0); }
	public KW_IF(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IF, 0); }
	public KW_LAG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LAG, 0); }
	public KW_LAST_VALUE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LAST_VALUE, 0); }
	public KW_LEAD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LEAD, 0); }
	public KW_LEFT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LEFT, 0); }
	public KW_LN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LN, 0); }
	public KW_LOCALTIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LOCALTIME, 0); }
	public KW_LOCALTIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LOCALTIMESTAMP, 0); }
	public KW_LOWER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LOWER, 0); }
	public KW_MAP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MAP, 0); }
	public KW_MAX(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MAX, 0); }
	public KW_MIN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MIN, 0); }
	public KW_MINUTE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MINUTE, 0); }
	public KW_MOD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MOD, 0); }
	public KW_MONTH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MONTH, 0); }
	public KW_NULLIF(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULLIF, 0); }
	public KW_NTILE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NTILE, 0); }
	public KW_OVERLAY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OVERLAY, 0); }
	public KW_PERCENT_RANK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PERCENT_RANK, 0); }
	public KW_POSITION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_POSITION, 0); }
	public KW_POWER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_POWER, 0); }
	public KW_QUARTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_QUARTER, 0); }
	public KW_ROW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROW, 0); }
	public KW_ROWS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROWS, 0); }
	public KW_ROW_NUMBER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ROW_NUMBER, 0); }
	public KW_RANK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RANK, 0); }
	public KW_RIGHT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RIGHT, 0); }
	public KW_SECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SECOND, 0); }
	public KW_STDDEV_POP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STDDEV_POP, 0); }
	public KW_STDDEV_SAMP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STDDEV_SAMP, 0); }
	public KW_SUBSTRING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SUBSTRING, 0); }
	public KW_SUM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SUM, 0); }
	public KW_TIME(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIME, 0); }
	public KW_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMESTAMP, 0); }
	public KW_TIMESTAMP_DIFF(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMESTAMP_DIFF, 0); }
	public KW_TRIM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TRIM, 0); }
	public KW_TRUNCATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TRUNCATE, 0); }
	public KW_TRY_CAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TRY_CAST, 0); }
	public KW_UPPER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UPPER, 0); }
	public KW_VAR_POP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VAR_POP, 0); }
	public KW_VAR_SAMP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VAR_SAMP, 0); }
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


export class NonReservedKeywordsContext extends ParserRuleContext {
	public KW_ADD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ADD, 0); }
	public KW_AFTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_AFTER, 0); }
	public KW_ASC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ASC, 0); }
	public KW_CASCADE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CASCADE, 0); }
	public KW_CATALOG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CATALOG, 0); }
	public KW_CENTURY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CENTURY, 0); }
	public KW_CONFIG(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONFIG, 0); }
	public KW_CONSTRAINTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CONSTRAINTS, 0); }
	public KW_CUMULATE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_CUMULATE, 0); }
	public KW_DATA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATA, 0); }
	public KW_DATABASE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DATABASE, 0); }
	public KW_DAYS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DAYS, 0); }
	public KW_DECADE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DECADE, 0); }
	public KW_DESC(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DESC, 0); }
	public KW_DESCRIPTOR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DESCRIPTOR, 0); }
	public KW_DIV(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_DIV, 0); }
	public KW_ENGINE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_ENGINE, 0); }
	public KW_EPOCH(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EPOCH, 0); }
	public KW_EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_EXCLUDING, 0); }
	public KW_FILE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FILE, 0); }
	public KW_FIRST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_FIRST, 0); }
	public KW_GENERATED(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_GENERATED, 0); }
	public KW_HOP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_HOP, 0); }
	public KW_HOURS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_HOURS, 0); }
	public KW_IGNORE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_IGNORE, 0); }
	public KW_INCLUDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_INCLUDING, 0); }
	public KW_JAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JAR, 0); }
	public KW_JARS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JARS, 0); }
	public KW_JAVA(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_JAVA, 0); }
	public KW_KEY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_KEY, 0); }
	public KW_LAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LAST, 0); }
	public KW_LOAD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_LOAD, 0); }
	public KW_MAP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MAP, 0); }
	public KW_MICROSECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MICROSECOND, 0); }
	public KW_MILLENNIUM(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MILLENNIUM, 0); }
	public KW_MILLISECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MILLISECOND, 0); }
	public KW_MINUTES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MINUTES, 0); }
	public KW_MONTHS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_MONTHS, 0); }
	public KW_NANOSECOND(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NANOSECOND, 0); }
	public KW_NULLS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_NULLS, 0); }
	public KW_OPTIONS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_OPTIONS, 0); }
	public KW_PAST(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PAST, 0); }
	public KW_PLAN(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PLAN, 0); }
	public KW_PRECEDING(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PRECEDING, 0); }
	public KW_PYTHON(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON, 0); }
	public KW_PYTHON_ARCHIVES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_ARCHIVES, 0); }
	public KW_PYTHON_DEPENDENCIES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_DEPENDENCIES, 0); }
	public KW_PYTHON_FILES(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_FILES, 0); }
	public KW_PYTHON_JAR(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_JAR, 0); }
	public KW_PYTHON_PARAMETER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_PARAMETER, 0); }
	public KW_PYTHON_REQUIREMENTS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_PYTHON_REQUIREMENTS, 0); }
	public KW_QUARTER(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_QUARTER, 0); }
	public KW_REMOVE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_REMOVE, 0); }
	public KW_RESTRICT(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_RESTRICT, 0); }
	public KW_SECONDS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SECONDS, 0); }
	public KW_SESSION(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SESSION, 0); }
	public KW_SETS(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SETS, 0); }
	public KW_SIZE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SIZE, 0); }
	public KW_SLIDE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_SLIDE, 0); }
	public KW_STEP(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_STEP, 0); }
	public KW_TEMPORARY(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TEMPORARY, 0); }
	public KW_TIMECOL(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TIMECOL, 0); }
	public KW_TUMBLE(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_TUMBLE, 0); }
	public KW_UNLOAD(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_UNLOAD, 0); }
	public KW_VIEW(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_VIEW, 0); }
	public KW_WEEK(): TerminalNode | undefined { return this.tryGetToken(FlinkSqlParser.KW_WEEK, 0); }
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


