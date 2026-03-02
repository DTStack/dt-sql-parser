// Generated from dt-sql-parser/src/grammar/flink/FlinkSqlParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { FlinkSqlParserListener } from "./FlinkSqlParserListener.js";
import { FlinkSqlParserVisitor } from "./FlinkSqlParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


import { SQLParserBase } from '../SQLParserBase';


export class FlinkSqlParser extends SQLParserBase {
    public static readonly WHITE_SPACE = 1;
    public static readonly BRACKETED_COMMENT = 2;
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
    public static readonly KW_FOLLOWING = 146;
    public static readonly KW_FOR = 147;
    public static readonly KW_FOREIGN = 148;
    public static readonly KW_FRAME_ROW = 149;
    public static readonly KW_FREE = 150;
    public static readonly KW_FRIDAY = 151;
    public static readonly KW_FROM = 152;
    public static readonly KW_FULL = 153;
    public static readonly KW_FUNCTION = 154;
    public static readonly KW_FUNCTIONS = 155;
    public static readonly KW_FUSION = 156;
    public static readonly KW_GET = 157;
    public static readonly KW_GLOBAL = 158;
    public static readonly KW_GRANT = 159;
    public static readonly KW_GROUP = 160;
    public static readonly KW_GROUPING = 161;
    public static readonly KW_GROUPS = 162;
    public static readonly KW_GROUP_CONCAT = 163;
    public static readonly KW_HAVING = 164;
    public static readonly KW_HOLD = 165;
    public static readonly KW_HOUR = 166;
    public static readonly KW_IDENTITY = 167;
    public static readonly KW_IF = 168;
    public static readonly KW_ILIKE = 169;
    public static readonly KW_IMPORT = 170;
    public static readonly KW_IN = 171;
    public static readonly KW_INCLUDE = 172;
    public static readonly KW_INDICATOR = 173;
    public static readonly KW_INITIAL = 174;
    public static readonly KW_INNER = 175;
    public static readonly KW_INOUT = 176;
    public static readonly KW_INSENSITIVE = 177;
    public static readonly KW_INSERT = 178;
    public static readonly KW_INT = 179;
    public static readonly KW_INTEGER = 180;
    public static readonly KW_INTERSECT = 181;
    public static readonly KW_INTERSECTION = 182;
    public static readonly KW_INTERVAL = 183;
    public static readonly KW_INTO = 184;
    public static readonly KW_IS = 185;
    public static readonly KW_JOIN = 186;
    public static readonly KW_JSON = 187;
    public static readonly KW_JSON_ARRAY = 188;
    public static readonly KW_JSON_ARRAYAGG = 189;
    public static readonly KW_JSON_EXECUTION_PLAN = 190;
    public static readonly KW_JSON_EXISTS = 191;
    public static readonly KW_JSON_OBJECT = 192;
    public static readonly KW_JSON_OBJECTAGG = 193;
    public static readonly KW_JSON_QUERY = 194;
    public static readonly KW_JSON_VALUE = 195;
    public static readonly KW_LAG = 196;
    public static readonly KW_LANGUAGE = 197;
    public static readonly KW_LARGE = 198;
    public static readonly KW_LAST_VALUE = 199;
    public static readonly KW_LATERAL = 200;
    public static readonly KW_LEAD = 201;
    public static readonly KW_LEADING = 202;
    public static readonly KW_LEFT = 203;
    public static readonly KW_LIKE = 204;
    public static readonly KW_LIKE_REGEX = 205;
    public static readonly KW_LIMIT = 206;
    public static readonly KW_LN = 207;
    public static readonly KW_LOCAL = 208;
    public static readonly KW_LOCALTIME = 209;
    public static readonly KW_LOCALTIMESTAMP = 210;
    public static readonly KW_LOWER = 211;
    public static readonly KW_MATCH = 212;
    public static readonly KW_MATCHES = 213;
    public static readonly KW_MATCH_NUMBER = 214;
    public static readonly KW_MATCH_RECOGNIZE = 215;
    public static readonly KW_MAX = 216;
    public static readonly KW_MEASURES = 217;
    public static readonly KW_MEMBER = 218;
    public static readonly KW_MERGE = 219;
    public static readonly KW_METADATA = 220;
    public static readonly KW_METHOD = 221;
    public static readonly KW_MIN = 222;
    public static readonly KW_MINUS = 223;
    public static readonly KW_MINUTE = 224;
    public static readonly KW_MOD = 225;
    public static readonly KW_MODIFIES = 226;
    public static readonly KW_MODIFY = 227;
    public static readonly KW_MODULE = 228;
    public static readonly KW_MODULES = 229;
    public static readonly KW_MONDAY = 230;
    public static readonly KW_MONTH = 231;
    public static readonly KW_MORE = 232;
    public static readonly KW_MULTISET = 233;
    public static readonly KW_NATIONAL = 234;
    public static readonly KW_NATURAL = 235;
    public static readonly KW_NCHAR = 236;
    public static readonly KW_NCLOB = 237;
    public static readonly KW_NEW = 238;
    public static readonly KW_NEXT = 239;
    public static readonly KW_NO = 240;
    public static readonly KW_NONE = 241;
    public static readonly KW_NORMALIZE = 242;
    public static readonly KW_NOT = 243;
    public static readonly KW_NTH_VALUE = 244;
    public static readonly KW_NTILE = 245;
    public static readonly KW_NULL = 246;
    public static readonly KW_NULLIF = 247;
    public static readonly KW_NUMERIC = 248;
    public static readonly KW_OCCURRENCES_REGEX = 249;
    public static readonly KW_OCTET_LENGTH = 250;
    public static readonly KW_OF = 251;
    public static readonly KW_OFFSET = 252;
    public static readonly KW_OLD = 253;
    public static readonly KW_OMIT = 254;
    public static readonly KW_ON = 255;
    public static readonly KW_ONE = 256;
    public static readonly KW_ONLY = 257;
    public static readonly KW_OPEN = 258;
    public static readonly KW_OR = 259;
    public static readonly KW_ORDER = 260;
    public static readonly KW_ORDINAL = 261;
    public static readonly KW_OUT = 262;
    public static readonly KW_OUTER = 263;
    public static readonly KW_OVER = 264;
    public static readonly KW_OVERLAPS = 265;
    public static readonly KW_OVERLAY = 266;
    public static readonly KW_OVERWRITE = 267;
    public static readonly KW_OVERWRITING = 268;
    public static readonly KW_PARAMETER = 269;
    public static readonly KW_PARTITION = 270;
    public static readonly KW_PARTITIONED = 271;
    public static readonly KW_PARTITIONS = 272;
    public static readonly KW_PATTERN = 273;
    public static readonly KW_PER = 274;
    public static readonly KW_PERCENT = 275;
    public static readonly KW_PERCENTILE_CONT = 276;
    public static readonly KW_PERCENTILE_DISC = 277;
    public static readonly KW_PERCENT_RANK = 278;
    public static readonly KW_PERIOD = 279;
    public static readonly KW_PERMUTE = 280;
    public static readonly KW_PIVOT = 281;
    public static readonly KW_PORTION = 282;
    public static readonly KW_POSITION = 283;
    public static readonly KW_POSITION_REGEX = 284;
    public static readonly KW_POWER = 285;
    public static readonly KW_PRECEDES = 286;
    public static readonly KW_PRECISION = 287;
    public static readonly KW_PREPARE = 288;
    public static readonly KW_PREV = 289;
    public static readonly KW_PRIMARY = 290;
    public static readonly KW_PROCEDURE = 291;
    public static readonly KW_QUALIFY = 292;
    public static readonly KW_QUARTERS = 293;
    public static readonly KW_RANGE = 294;
    public static readonly KW_RANK = 295;
    public static readonly KW_RAW = 296;
    public static readonly KW_READS = 297;
    public static readonly KW_REAL = 298;
    public static readonly KW_RECURSIVE = 299;
    public static readonly KW_REF = 300;
    public static readonly KW_REFERENCES = 301;
    public static readonly KW_REFERENCING = 302;
    public static readonly KW_REGR_AVGX = 303;
    public static readonly KW_REGR_AVGY = 304;
    public static readonly KW_REGR_COUNT = 305;
    public static readonly KW_REGR_INTERCEPT = 306;
    public static readonly KW_REGR_R2 = 307;
    public static readonly KW_REGR_SLOPE = 308;
    public static readonly KW_REGR_SXX = 309;
    public static readonly KW_REGR_SXY = 310;
    public static readonly KW_REGR_SYY = 311;
    public static readonly KW_RELEASE = 312;
    public static readonly KW_RENAME = 313;
    public static readonly KW_RESET = 314;
    public static readonly KW_RESULT = 315;
    public static readonly KW_RETURN = 316;
    public static readonly KW_RETURNS = 317;
    public static readonly KW_REVOKE = 318;
    public static readonly KW_RIGHT = 319;
    public static readonly KW_RLIKE = 320;
    public static readonly KW_ROLLBACK = 321;
    public static readonly KW_ROLLUP = 322;
    public static readonly KW_ROW = 323;
    public static readonly KW_ROWS = 324;
    public static readonly KW_ROW_NUMBER = 325;
    public static readonly KW_RUNNING = 326;
    public static readonly KW_SAFE_CAST = 327;
    public static readonly KW_SAFE_OFFSET = 328;
    public static readonly KW_SAFE_ORDINAL = 329;
    public static readonly KW_SATURDAY = 330;
    public static readonly KW_SAVEPOINT = 331;
    public static readonly KW_SCALA = 332;
    public static readonly KW_SCOPE = 333;
    public static readonly KW_SCROLL = 334;
    public static readonly KW_SEARCH = 335;
    public static readonly KW_SECOND = 336;
    public static readonly KW_SEEK = 337;
    public static readonly KW_SELECT = 338;
    public static readonly KW_SENSITIVE = 339;
    public static readonly KW_SEPARATOR = 340;
    public static readonly KW_SESSION_USER = 341;
    public static readonly KW_SET = 342;
    public static readonly KW_SHOW = 343;
    public static readonly KW_SIMILAR = 344;
    public static readonly KW_SKIP = 345;
    public static readonly KW_SMALLINT = 346;
    public static readonly KW_SOME = 347;
    public static readonly KW_SPECIFIC = 348;
    public static readonly KW_SPECIFICTYPE = 349;
    public static readonly KW_SQL = 350;
    public static readonly KW_SQLEXCEPTION = 351;
    public static readonly KW_SQLSTATE = 352;
    public static readonly KW_SQLWARNING = 353;
    public static readonly KW_SQRT = 354;
    public static readonly KW_START = 355;
    public static readonly KW_STATEMENT = 356;
    public static readonly KW_STATIC = 357;
    public static readonly KW_STATISTICS = 358;
    public static readonly KW_STDDEV_POP = 359;
    public static readonly KW_STDDEV_SAMP = 360;
    public static readonly KW_STREAM = 361;
    public static readonly KW_STRING = 362;
    public static readonly KW_STRING_AGG = 363;
    public static readonly KW_SUBMULTISET = 364;
    public static readonly KW_SUBSET = 365;
    public static readonly KW_SUBSTRING = 366;
    public static readonly KW_SUBSTRING_REGEX = 367;
    public static readonly KW_SUCCEEDS = 368;
    public static readonly KW_SUM = 369;
    public static readonly KW_SUNDAY = 370;
    public static readonly KW_SYMMETRIC = 371;
    public static readonly KW_SYSTEM = 372;
    public static readonly KW_SYSTEM_TIME = 373;
    public static readonly KW_SYSTEM_USER = 374;
    public static readonly KW_TABLE = 375;
    public static readonly KW_TABLES = 376;
    public static readonly KW_TABLESAMPLE = 377;
    public static readonly KW_THEN = 378;
    public static readonly KW_THURSDAY = 379;
    public static readonly KW_TIME = 380;
    public static readonly KW_TIMESTAMP = 381;
    public static readonly KW_TIMESTAMP_DIFF = 382;
    public static readonly KW_TIMESTAMP_LTZ = 383;
    public static readonly KW_TIMESTAMP_TRUNC = 384;
    public static readonly KW_TIMEZONE_HOUR = 385;
    public static readonly KW_TIMEZONE_MINUTE = 386;
    public static readonly KW_TIME_DIFF = 387;
    public static readonly KW_TIME_TRUNC = 388;
    public static readonly KW_TINYINT = 389;
    public static readonly KW_TO = 390;
    public static readonly KW_TRAILING = 391;
    public static readonly KW_TRANSLATE = 392;
    public static readonly KW_TRANSLATE_REGEX = 393;
    public static readonly KW_TRANSLATION = 394;
    public static readonly KW_TREAT = 395;
    public static readonly KW_TRIGGER = 396;
    public static readonly KW_TRIM = 397;
    public static readonly KW_TRIM_ARRAY = 398;
    public static readonly KW_TRUE = 399;
    public static readonly KW_TRUNCATE = 400;
    public static readonly KW_TRY_CAST = 401;
    public static readonly KW_TUESDAY = 402;
    public static readonly KW_UESCAPE = 403;
    public static readonly KW_UNBOUNDED = 404;
    public static readonly KW_UNION = 405;
    public static readonly KW_UNIQUE = 406;
    public static readonly KW_UNKNOWN = 407;
    public static readonly KW_UNNEST = 408;
    public static readonly KW_UNPIVOT = 409;
    public static readonly KW_UPDATE = 410;
    public static readonly KW_UPPER = 411;
    public static readonly KW_UPSERT = 412;
    public static readonly KW_USE = 413;
    public static readonly KW_USER = 414;
    public static readonly KW_USING = 415;
    public static readonly KW_VALUE = 416;
    public static readonly KW_VALUES = 417;
    public static readonly KW_VALUE_OF = 418;
    public static readonly KW_VARBINARY = 419;
    public static readonly KW_VARCHAR = 420;
    public static readonly KW_VARYING = 421;
    public static readonly KW_VAR_POP = 422;
    public static readonly KW_VAR_SAMP = 423;
    public static readonly KW_VERSIONING = 424;
    public static readonly KW_VIEWS = 425;
    public static readonly KW_VIRTUAL = 426;
    public static readonly KW_WATERMARK = 427;
    public static readonly KW_WATERMARKS = 428;
    public static readonly KW_WEDNESDAY = 429;
    public static readonly KW_WEEKS = 430;
    public static readonly KW_WHEN = 431;
    public static readonly KW_WHENEVER = 432;
    public static readonly KW_WHERE = 433;
    public static readonly KW_WIDTH_BUCKET = 434;
    public static readonly KW_WINDOW = 435;
    public static readonly KW_WITH = 436;
    public static readonly KW_WITHIN = 437;
    public static readonly KW_WITHOUT = 438;
    public static readonly KW_YEAR = 439;
    public static readonly KW_ADD = 440;
    public static readonly KW_AFTER = 441;
    public static readonly KW_ASC = 442;
    public static readonly KW_CASCADE = 443;
    public static readonly KW_CATALOG = 444;
    public static readonly KW_CENTURY = 445;
    public static readonly KW_CONFIG = 446;
    public static readonly KW_CONSTRAINTS = 447;
    public static readonly KW_CUMULATE = 448;
    public static readonly KW_DATA = 449;
    public static readonly KW_DATABASE = 450;
    public static readonly KW_DAYS = 451;
    public static readonly KW_DECADE = 452;
    public static readonly KW_DESC = 453;
    public static readonly KW_DESCRIPTOR = 454;
    public static readonly KW_DIV = 455;
    public static readonly KW_ENGINE = 456;
    public static readonly KW_EPOCH = 457;
    public static readonly KW_EXCLUDING = 458;
    public static readonly KW_FILE = 459;
    public static readonly KW_FIRST = 460;
    public static readonly KW_GENERATED = 461;
    public static readonly KW_HOP = 462;
    public static readonly KW_HOURS = 463;
    public static readonly KW_IGNORE = 464;
    public static readonly KW_INCLUDING = 465;
    public static readonly KW_JAR = 466;
    public static readonly KW_JARS = 467;
    public static readonly KW_JAVA = 468;
    public static readonly KW_KEY = 469;
    public static readonly KW_LAST = 470;
    public static readonly KW_LOAD = 471;
    public static readonly KW_MAP = 472;
    public static readonly KW_MICROSECOND = 473;
    public static readonly KW_MILLENNIUM = 474;
    public static readonly KW_MILLISECOND = 475;
    public static readonly KW_MINUTES = 476;
    public static readonly KW_MONTHS = 477;
    public static readonly KW_NANOSECOND = 478;
    public static readonly KW_NULLS = 479;
    public static readonly KW_OPTIONS = 480;
    public static readonly KW_PAST = 481;
    public static readonly KW_PLAN = 482;
    public static readonly KW_PRECEDING = 483;
    public static readonly KW_PYTHON = 484;
    public static readonly KW_PYTHON_ARCHIVES = 485;
    public static readonly KW_PYTHON_DEPENDENCIES = 486;
    public static readonly KW_PYTHON_FILES = 487;
    public static readonly KW_PYTHON_JAR = 488;
    public static readonly KW_PYTHON_PARAMETER = 489;
    public static readonly KW_PYTHON_REQUIREMENTS = 490;
    public static readonly KW_QUARTER = 491;
    public static readonly KW_REMOVE = 492;
    public static readonly KW_RESTRICT = 493;
    public static readonly KW_SECONDS = 494;
    public static readonly KW_SESSION = 495;
    public static readonly KW_SETS = 496;
    public static readonly KW_SIZE = 497;
    public static readonly KW_SLIDE = 498;
    public static readonly KW_STEP = 499;
    public static readonly KW_TEMPORARY = 500;
    public static readonly KW_TIMECOL = 501;
    public static readonly KW_TUMBLE = 502;
    public static readonly KW_UNLOAD = 503;
    public static readonly KW_VIEW = 504;
    public static readonly KW_WEEK = 505;
    public static readonly KW_YEARS = 506;
    public static readonly KW_ZONE = 507;
    public static readonly EQUAL_SYMBOL = 508;
    public static readonly GREATER_SYMBOL = 509;
    public static readonly LESS_SYMBOL = 510;
    public static readonly EXCLAMATION_SYMBOL = 511;
    public static readonly BIT_NOT_OP = 512;
    public static readonly BIT_OR_OP = 513;
    public static readonly BIT_AND_OP = 514;
    public static readonly BIT_XOR_OP = 515;
    public static readonly DOT = 516;
    public static readonly LS_BRACKET = 517;
    public static readonly RS_BRACKET = 518;
    public static readonly LR_BRACKET = 519;
    public static readonly RR_BRACKET = 520;
    public static readonly LB_BRACKET = 521;
    public static readonly RB_BRACKET = 522;
    public static readonly COMMA = 523;
    public static readonly SEMICOLON = 524;
    public static readonly AT_SIGN = 525;
    public static readonly SINGLE_QUOTE_SYMB = 526;
    public static readonly DOUBLE_QUOTE_SYMB = 527;
    public static readonly REVERSE_QUOTE_SYMB = 528;
    public static readonly COLON_SYMB = 529;
    public static readonly ASTERISK_SIGN = 530;
    public static readonly UNDERLINE_SIGN = 531;
    public static readonly HYPHEN_SIGN = 532;
    public static readonly ADD_SIGN = 533;
    public static readonly PERCENT_SIGN = 534;
    public static readonly DOUBLE_VERTICAL_SIGN = 535;
    public static readonly DOUBLE_HYPHEN_SIGN = 536;
    public static readonly SLASH_SIGN = 537;
    public static readonly QUESTION_MARK_SIGN = 538;
    public static readonly DOUBLE_RIGHT_ARROW = 539;
    public static readonly STRING_LITERAL = 540;
    public static readonly DIG_LITERAL = 541;
    public static readonly REAL_LITERAL = 542;
    public static readonly BIT_STRING = 543;
    public static readonly ID_LITERAL = 544;
    public static readonly RULE_program = 0;
    public static readonly RULE_singleStatement = 1;
    public static readonly RULE_sqlStatement = 2;
    public static readonly RULE_emptyStatement = 3;
    public static readonly RULE_ddlStatement = 4;
    public static readonly RULE_dmlStatement = 5;
    public static readonly RULE_describeStatement = 6;
    public static readonly RULE_explainStatement = 7;
    public static readonly RULE_explainDetails = 8;
    public static readonly RULE_explainDetail = 9;
    public static readonly RULE_useStatement = 10;
    public static readonly RULE_useModuleStatement = 11;
    public static readonly RULE_showStatement = 12;
    public static readonly RULE_loadStatement = 13;
    public static readonly RULE_unloadStatement = 14;
    public static readonly RULE_setStatement = 15;
    public static readonly RULE_resetStatement = 16;
    public static readonly RULE_jarStatement = 17;
    public static readonly RULE_dtAddStatement = 18;
    public static readonly RULE_dtFilePath = 19;
    public static readonly RULE_createTable = 20;
    public static readonly RULE_simpleCreateTable = 21;
    public static readonly RULE_createTableAsSelect = 22;
    public static readonly RULE_columnOptionDefinition = 23;
    public static readonly RULE_physicalColumnDefinition = 24;
    public static readonly RULE_columnNameCreate = 25;
    public static readonly RULE_columnName = 26;
    public static readonly RULE_columnNamePath = 27;
    public static readonly RULE_columnNameList = 28;
    public static readonly RULE_columnType = 29;
    public static readonly RULE_lengthOneDimension = 30;
    public static readonly RULE_lengthTwoOptionalDimension = 31;
    public static readonly RULE_lengthTwoStringDimension = 32;
    public static readonly RULE_lengthOneTypeDimension = 33;
    public static readonly RULE_mapTypeDimension = 34;
    public static readonly RULE_rowTypeDimension = 35;
    public static readonly RULE_columnConstraint = 36;
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
    public static readonly RULE_alterView = 64;
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
    public static readonly RULE_valueDefinition = 77;
    public static readonly RULE_insertMulStatementCompatibility = 78;
    public static readonly RULE_insertMulStatement = 79;
    public static readonly RULE_queryStatement = 80;
    public static readonly RULE_valuesClause = 81;
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
    public static readonly RULE_windowTVFClause = 96;
    public static readonly RULE_windowTVFExpression = 97;
    public static readonly RULE_windowTVFName = 98;
    public static readonly RULE_windowTVFParam = 99;
    public static readonly RULE_timeIntervalParamName = 100;
    public static readonly RULE_columnDescriptor = 101;
    public static readonly RULE_joinCondition = 102;
    public static readonly RULE_whereClause = 103;
    public static readonly RULE_groupByClause = 104;
    public static readonly RULE_groupItemDefinition = 105;
    public static readonly RULE_groupingSets = 106;
    public static readonly RULE_groupingSetsNotationName = 107;
    public static readonly RULE_groupWindowFunction = 108;
    public static readonly RULE_groupWindowFunctionName = 109;
    public static readonly RULE_timeAttrColumn = 110;
    public static readonly RULE_havingClause = 111;
    public static readonly RULE_windowClause = 112;
    public static readonly RULE_namedWindow = 113;
    public static readonly RULE_windowSpec = 114;
    public static readonly RULE_matchRecognizeClause = 115;
    public static readonly RULE_orderByClause = 116;
    public static readonly RULE_orderItemDefinition = 117;
    public static readonly RULE_limitClause = 118;
    public static readonly RULE_partitionByClause = 119;
    public static readonly RULE_quantifiers = 120;
    public static readonly RULE_measuresClause = 121;
    public static readonly RULE_patternDefinition = 122;
    public static readonly RULE_patternVariable = 123;
    public static readonly RULE_outputMode = 124;
    public static readonly RULE_afterMatchStrategy = 125;
    public static readonly RULE_patternVariablesDefinition = 126;
    public static readonly RULE_windowFrame = 127;
    public static readonly RULE_frameBound = 128;
    public static readonly RULE_frameStart = 129;
    public static readonly RULE_frameEnd = 130;
    public static readonly RULE_withinClause = 131;
    public static readonly RULE_expression = 132;
    public static readonly RULE_booleanExpression = 133;
    public static readonly RULE_predicate = 134;
    public static readonly RULE_jsonFunctionBranch = 135;
    public static readonly RULE_likePredicate = 136;
    public static readonly RULE_valueExpression = 137;
    public static readonly RULE_functionCallExpression = 138;
    public static readonly RULE_primaryExpression = 139;
    public static readonly RULE_functionNameCreate = 140;
    public static readonly RULE_functionName = 141;
    public static readonly RULE_functionNameAndParams = 142;
    public static readonly RULE_functionNameWithParams = 143;
    public static readonly RULE_functionParam = 144;
    public static readonly RULE_jsonValueParams = 145;
    public static readonly RULE_jsonQueryParams = 146;
    public static readonly RULE_jsonObjectParams = 147;
    public static readonly RULE_jsonArrayParams = 148;
    public static readonly RULE_dereferenceDefinition = 149;
    public static readonly RULE_correlationName = 150;
    public static readonly RULE_qualifiedName = 151;
    public static readonly RULE_timeIntervalExpression = 152;
    public static readonly RULE_errorCapturingMultiUnitsInterval = 153;
    public static readonly RULE_multiUnitsInterval = 154;
    public static readonly RULE_errorCapturingUnitToUnitInterval = 155;
    public static readonly RULE_unitToUnitInterval = 156;
    public static readonly RULE_intervalValue = 157;
    public static readonly RULE_tableAlias = 158;
    public static readonly RULE_errorCapturingIdentifier = 159;
    public static readonly RULE_errorCapturingIdentifierExtra = 160;
    public static readonly RULE_identifierList = 161;
    public static readonly RULE_identifierSeq = 162;
    public static readonly RULE_identifier = 163;
    public static readonly RULE_unquotedIdentifier = 164;
    public static readonly RULE_quotedIdentifier = 165;
    public static readonly RULE_whenClause = 166;
    public static readonly RULE_catalogPath = 167;
    public static readonly RULE_catalogPathCreate = 168;
    public static readonly RULE_databasePath = 169;
    public static readonly RULE_databasePathCreate = 170;
    public static readonly RULE_tablePathCreate = 171;
    public static readonly RULE_tablePath = 172;
    public static readonly RULE_viewPath = 173;
    public static readonly RULE_viewPathCreate = 174;
    public static readonly RULE_uid = 175;
    public static readonly RULE_withOption = 176;
    public static readonly RULE_ifNotExists = 177;
    public static readonly RULE_ifExists = 178;
    public static readonly RULE_tablePropertyList = 179;
    public static readonly RULE_tableProperty = 180;
    public static readonly RULE_tablePropertyKey = 181;
    public static readonly RULE_tablePropertyValue = 182;
    public static readonly RULE_logicalOperator = 183;
    public static readonly RULE_comparisonOperator = 184;
    public static readonly RULE_bitOperator = 185;
    public static readonly RULE_mathOperator = 186;
    public static readonly RULE_unaryOperator = 187;
    public static readonly RULE_constant = 188;
    public static readonly RULE_timePointLiteral = 189;
    public static readonly RULE_stringLiteral = 190;
    public static readonly RULE_decimalLiteral = 191;
    public static readonly RULE_booleanLiteral = 192;
    public static readonly RULE_setQuantifier = 193;
    public static readonly RULE_timePointUnit = 194;
    public static readonly RULE_timeIntervalUnit = 195;
    public static readonly RULE_reservedKeywordsUsedAsFuncParam = 196;
    public static readonly RULE_reservedKeywordsNoParamsUsedAsFuncName = 197;
    public static readonly RULE_reservedKeywordsFollowParamsUsedAsFuncName = 198;
    public static readonly RULE_reservedKeywordsUsedAsFuncName = 199;
    public static readonly RULE_nonReservedKeywords = 200;

    public static readonly literalNames = [
        null, null, null, null, "'ABS'", "'ALL'", "'ALLOCATE'", "'ALLOW'", 
        "'ALTER'", "'ANALYZE'", "'AND'", "'ANY'", "'ARE'", "'ARRAY'", "'ARRAY_AGG'", 
        "'ARRAY_CONCAT_AGG'", "'ARRAY_MAX_CARDINALITY'", "'AS'", "'ASENSITIVE'", 
        "'ASYMMETRIC'", "'AT'", "'ATOMIC'", "'AUTHORIZATION'", "'AVG'", 
        "'BEGIN'", "'BEGIN_FRAME'", "'BEGIN_PARTITION'", "'BETWEEN'", "'BIGINT'", 
        "'BINARY'", "'BIT'", "'BLOB'", "'BOOLEAN'", "'BOTH'", "'BY'", "'BYTES'", 
        "'CALL'", "'CALLED'", "'CARDINALITY'", "'CASCADED'", "'CASE'", "'CAST'", 
        "'CATALOGS'", "'CEIL'", "'CEILING'", "'CHANGELOG_MODE'", "'CHAR'", 
        "'CHARACTER'", "'CHARACTER_LENGTH'", "'CHAR_LENGTH'", "'CHECK'", 
        "'CLASSIFIER'", "'CLOB'", "'CLOSE'", "'COALESCE'", "'COLLATE'", 
        "'COLLECT'", "'COLUMN'", "'COLUMNS'", "'COMMENT'", "'COMMIT'", "'COMPUTE'", 
        "'CONDITION'", "'CONNECT'", "'CONSTRAINT'", "'CONTAINS'", "'CONVERT'", 
        "'CORR'", "'CORRESPONDING'", "'COUNT'", "'COVAR_POP'", "'COVAR_SAMP'", 
        "'CREATE'", "'CROSS'", "'CUBE'", "'CUME_DIST'", "'CURRENT'", "'CURRENT_CATALOG'", 
        "'CURRENT_DATE'", "'CURRENT_DEFAULT_TRANSFORM_GROUP'", "'CURRENT_PATH'", 
        "'CURRENT_ROLE'", "'CURRENT_ROW'", "'CURRENT_SCHEMA'", "'CURRENT_TIME'", 
        "'CURRENT_TIMESTAMP'", "'CURRENT_TRANSFORM_GROUP_FOR_TYPE'", "'CURRENT_USER'", 
        "'CURSOR'", "'CYCLE'", "'DATABASES'", "'DATE'", "'DATETIME'", "'DATETIME_DIFF'", 
        "'DATETIME_TRUNC'", "'DATE_DIFF'", "'DATE_TRUNC'", "'DAY'", "'DAYOFWEEK'", 
        "'DAYOFYEAR'", "'DEALLOCATE'", "'DEC'", "'DECIMAL'", "'DECLARE'", 
        "'DEFAULT'", "'DEFINE'", "'DELETE'", "'DENSE_RANK'", "'DEREF'", 
        "'DESCRIBE'", "'DETERMINISTIC'", "'DISALLOW'", "'DISCONNECT'", "'DISTINCT'", 
        "'DOT'", "'DOUBLE'", "'DROP'", "'DYNAMIC'", "'EACH'", "'ELEMENT'", 
        "'ELSE'", "'EMPTY'", "'END'", "'END_FRAME'", "'END_PARTITION'", 
        "'ENFORCED'", "'EQUALS'", "'ESCAPE'", "'ESTIMATED_COST'", "'EVERY'", 
        "'EXCEPT'", "'EXEC'", "'EXECUTE'", "'EXISTS'", "'EXP'", "'EXPLAIN'", 
        "'EXTEND'", "'EXTENDED'", "'EXTERNAL'", "'EXTRACT'", "'FALSE'", 
        "'FETCH'", "'FILTER'", "'FIRST_VALUE'", "'FLOAT'", "'FLOOR'", "'FOLLOWING'", 
        "'FOR'", "'FOREIGN'", "'FRAME_ROW'", "'FREE'", "'FRIDAY'", "'FROM'", 
        "'FULL'", "'FUNCTION'", "'FUNCTIONS'", "'FUSION'", "'GET'", "'GLOBAL'", 
        "'GRANT'", "'GROUP'", "'GROUPING'", "'GROUPS'", "'GROUP_CONCAT'", 
        "'HAVING'", "'HOLD'", "'HOUR'", "'IDENTITY'", "'IF'", "'ILIKE'", 
        "'IMPORT'", "'IN'", "'INCLUDE'", "'INDICATOR'", "'INITIAL'", "'INNER'", 
        "'INOUT'", "'INSENSITIVE'", "'INSERT'", "'INT'", "'INTEGER'", "'INTERSECT'", 
        "'INTERSECTION'", "'INTERVAL'", "'INTO'", "'IS'", "'JOIN'", "'JSON'", 
        "'JSON_ARRAY'", "'JSON_ARRAYAGG'", "'JSON_EXECUTION_PLAN'", "'JSON_EXISTS'", 
        "'JSON_OBJECT'", "'JSON_OBJECTAGG'", "'JSON_QUERY'", "'JSON_VALUE'", 
        "'LAG'", "'LANGUAGE'", "'LARGE'", "'LAST_VALUE'", "'LATERAL'", "'LEAD'", 
        "'LEADING'", "'LEFT'", "'LIKE'", "'LIKE_REGEX'", "'LIMIT'", "'LN'", 
        "'LOCAL'", "'LOCALTIME'", "'LOCALTIMESTAMP'", "'LOWER'", "'MATCH'", 
        "'MATCHES'", "'MATCH_NUMBER'", "'MATCH_RECOGNIZE'", "'MAX'", "'MEASURES'", 
        "'MEMBER'", "'MERGE'", "'METADATA'", "'METHOD'", "'MIN'", "'MINUS'", 
        "'MINUTE'", "'MOD'", "'MODIFIES'", "'MODIFY'", "'MODULE'", "'MODULES'", 
        "'MONDAY'", "'MONTH'", "'MORE'", "'MULTISET'", "'NATIONAL'", "'NATURAL'", 
        "'NCHAR'", "'NCLOB'", "'NEW'", "'NEXT'", "'NO'", "'NONE'", "'NORMALIZE'", 
        "'NOT'", "'NTH_VALUE'", "'NTILE'", "'NULL'", "'NULLIF'", "'NUMERIC'", 
        "'OCCURRENCES_REGEX'", "'OCTET_LENGTH'", "'OF'", "'OFFSET'", "'OLD'", 
        "'OMIT'", "'ON'", "'ONE'", "'ONLY'", "'OPEN'", "'OR'", "'ORDER'", 
        "'ORDINAL'", "'OUT'", "'OUTER'", "'OVER'", "'OVERLAPS'", "'OVERLAY'", 
        "'OVERWRITE'", "'OVERWRITING'", "'PARAMETER'", "'PARTITION'", "'PARTITIONED'", 
        "'PARTITIONS'", "'PATTERN'", "'PER'", "'PERCENT'", "'PERCENTILE_CONT'", 
        "'PERCENTILE_DISC'", "'PERCENT_RANK'", "'PERIOD'", "'PERMUTE'", 
        "'PIVOT'", "'PORTION'", "'POSITION'", "'POSITION_REGEX'", "'POWER'", 
        "'PRECEDES'", "'PRECISION'", "'PREPARE'", "'PREV'", "'PRIMARY'", 
        "'PROCEDURE'", "'QUALIFY'", "'QUARTERS'", "'RANGE'", "'RANK'", "'RAW'", 
        "'READS'", "'REAL'", "'RECURSIVE'", "'REF'", "'REFERENCES'", "'REFERENCING'", 
        "'REGR_AVGX'", "'REGR_AVGY'", "'REGR_COUNT'", "'REGR_INTERCEPT'", 
        "'REGR_R2'", "'REGR_SLOPE'", "'REGR_SXX'", "'REGR_SXY'", "'REGR_SYY'", 
        "'RELEASE'", "'RENAME'", "'RESET'", "'RESULT'", "'RETURN'", "'RETURNS'", 
        "'REVOKE'", "'RIGHT'", "'RLIKE'", "'ROLLBACK'", "'ROLLUP'", "'ROW'", 
        "'ROWS'", "'ROW_NUMBER'", "'RUNNING'", "'SAFE_CAST'", "'SAFE_OFFSET'", 
        "'SAFE_ORDINAL'", "'SATURDAY'", "'SAVEPOINT'", "'SCALA'", "'SCOPE'", 
        "'SCROLL'", "'SEARCH'", "'SECOND'", "'SEEK'", "'SELECT'", "'SENSITIVE'", 
        "'SEPARATOR'", "'SESSION_USER'", "'SET'", "'SHOW'", "'SIMILAR'", 
        "'SKIP'", "'SMALLINT'", "'SOME'", "'SPECIFIC'", "'SPECIFICTYPE'", 
        "'SQL'", "'SQLEXCEPTION'", "'SQLSTATE'", "'SQLWARNING'", "'SQRT'", 
        "'START'", "'STATEMENT'", "'STATIC'", "'STATISTICS'", "'STDDEV_POP'", 
        "'STDDEV_SAMP'", "'STREAM'", "'STRING'", "'STRING_AGG'", "'SUBMULTISET'", 
        "'SUBSET'", "'SUBSTRING'", "'SUBSTRING_REGEX'", "'SUCCEEDS'", "'SUM'", 
        "'SUNDAY'", "'SYMMETRIC'", "'SYSTEM'", "'SYSTEM_TIME'", "'SYSTEM_USER'", 
        "'TABLE'", "'TABLES'", "'TABLESAMPLE'", "'THEN'", "'THURSDAY'", 
        "'TIME'", "'TIMESTAMP'", "'TIMESTAMP_DIFF'", "'TIMESTAMP_LTZ'", 
        "'TIMESTAMP_TRUNC'", "'TIMEZONE_HOUR'", "'TIMEZONE_MINUTE'", "'TIME_DIFF'", 
        "'TIME_TRUNC'", "'TINYINT'", "'TO'", "'TRAILING'", "'TRANSLATE'", 
        "'TRANSLATE_REGEX'", "'TRANSLATION'", "'TREAT'", "'TRIGGER'", "'TRIM'", 
        "'TRIM_ARRAY'", "'TRUE'", "'TRUNCATE'", "'TRY_CAST'", "'TUESDAY'", 
        "'UESCAPE'", "'UNBOUNDED'", "'UNION'", "'UNIQUE'", "'UNKNOWN'", 
        "'UNNEST'", "'UNPIVOT'", "'UPDATE'", "'UPPER'", "'UPSERT'", "'USE'", 
        "'USER'", "'USING'", "'VALUE'", "'VALUES'", "'VALUE_OF'", "'VARBINARY'", 
        "'VARCHAR'", "'VARYING'", "'VAR_POP'", "'VAR_SAMP'", "'VERSIONING'", 
        "'VIEWS'", "'VIRTUAL'", "'WATERMARK'", "'WATERMARKS'", "'WEDNESDAY'", 
        "'WEEKS'", "'WHEN'", "'WHENEVER'", "'WHERE'", "'WIDTH_BUCKET'", 
        "'WINDOW'", "'WITH'", "'WITHIN'", "'WITHOUT'", "'YEAR'", "'ADD'", 
        "'AFTER'", "'ASC'", "'CASCADE'", "'CATALOG'", "'CENTURY'", "'CONFIG'", 
        "'CONSTRAINTS'", "'CUMULATE'", "'DATA'", "'DATABASE'", "'DAYS'", 
        "'DECADE'", "'DESC'", "'DESCRIPTOR'", "'DIV'", "'ENGINE'", "'EPOCH'", 
        "'EXCLUDING'", "'FILE'", "'FIRST'", "'GENERATED'", "'HOP'", "'HOURS'", 
        "'IGNORE'", "'INCLUDING'", "'JAR'", "'JARS'", "'JAVA'", "'KEY'", 
        "'LAST'", "'LOAD'", "'MAP'", "'MICROSECOND'", "'MILLENNIUM'", "'MILLISECOND'", 
        "'MINUTES'", "'MONTHS'", "'NANOSECOND'", "'NULLS'", "'OPTIONS'", 
        "'PAST'", "'PLAN'", "'PRECEDING'", "'PYTHON'", "'PYTHON_ARCHIVES'", 
        "'PYTHON_DEPENDENCIES'", "'PYTHON_FILES'", "'PYTHON_JAR'", "'PYTHON_PARAMETER'", 
        "'PYTHON_REQUIREMENTS'", "'QUARTER'", "'REMOVE'", "'RESTRICT'", 
        "'SECONDS'", "'SESSION'", "'SETS'", "'SIZE'", "'SLIDE'", "'STEP'", 
        "'TEMPORARY'", "'TIMECOL'", "'TUMBLE'", "'UNLOAD'", "'VIEW'", "'WEEK'", 
        "'YEARS'", "'ZONE'", "'='", "'>'", "'<'", "'!'", "'~'", "'|'", "'&'", 
        "'^'", "'.'", "'['", "']'", "'('", "')'", "'{'", "'}'", "','", "';'", 
        "'@'", "'''", "'\"'", "'`'", "':'", "'*'", "'_'", "'-'", "'+'", 
        "'%'", "'||'", "'--'", "'/'", "'?'", "'=>'"
    ];

    public static readonly symbolicNames = [
        null, "WHITE_SPACE", "BRACKETED_COMMENT", "LINE_COMMENT", "KW_ABS", 
        "KW_ALL", "KW_ALLOCATE", "KW_ALLOW", "KW_ALTER", "KW_ANALYZE", "KW_AND", 
        "KW_ANY", "KW_ARE", "KW_ARRAY", "KW_ARRAY_AGG", "KW_ARRAY_CONCAT_AGG", 
        "KW_ARRAY_MAX_CARDINALITY", "KW_AS", "KW_ASENSITIVE", "KW_ASYMMETRIC", 
        "KW_AT", "KW_ATOMIC", "KW_AUTHORIZATION", "KW_AVG", "KW_BEGIN", 
        "KW_BEGIN_FRAME", "KW_BEGIN_PARTITION", "KW_BETWEEN", "KW_BIGINT", 
        "KW_BINARY", "KW_BIT", "KW_BLOB", "KW_BOOLEAN", "KW_BOTH", "KW_BY", 
        "KW_BYTES", "KW_CALL", "KW_CALLED", "KW_CARDINALITY", "KW_CASCADED", 
        "KW_CASE", "KW_CAST", "KW_CATALOGS", "KW_CEIL", "KW_CEILING", "KW_CHANGELOG_MODE", 
        "KW_CHAR", "KW_CHARACTER", "KW_CHARACTER_LENGTH", "KW_CHAR_LENGTH", 
        "KW_CHECK", "KW_CLASSIFIER", "KW_CLOB", "KW_CLOSE", "KW_COALESCE", 
        "KW_COLLATE", "KW_COLLECT", "KW_COLUMN", "KW_COLUMNS", "KW_COMMENT", 
        "KW_COMMIT", "KW_COMPUTE", "KW_CONDITION", "KW_CONNECT", "KW_CONSTRAINT", 
        "KW_CONTAINS", "KW_CONVERT", "KW_CORR", "KW_CORRESPONDING", "KW_COUNT", 
        "KW_COVAR_POP", "KW_COVAR_SAMP", "KW_CREATE", "KW_CROSS", "KW_CUBE", 
        "KW_CUME_DIST", "KW_CURRENT", "KW_CURRENT_CATALOG", "KW_CURRENT_DATE", 
        "KW_CURRENT_DEFAULT_TRANSFORM_GROUP", "KW_CURRENT_PATH", "KW_CURRENT_ROLE", 
        "KW_CURRENT_ROW", "KW_CURRENT_SCHEMA", "KW_CURRENT_TIME", "KW_CURRENT_TIMESTAMP", 
        "KW_CURRENT_TRANSFORM_GROUP_FOR_TYPE", "KW_CURRENT_USER", "KW_CURSOR", 
        "KW_CYCLE", "KW_DATABASES", "KW_DATE", "KW_DATETIME", "KW_DATETIME_DIFF", 
        "KW_DATETIME_TRUNC", "KW_DATE_DIFF", "KW_DATE_TRUNC", "KW_DAY", 
        "KW_DAYOFWEEK", "KW_DAYOFYEAR", "KW_DEALLOCATE", "KW_DEC", "KW_DECIMAL", 
        "KW_DECLARE", "KW_DEFAULT", "KW_DEFINE", "KW_DELETE", "KW_DENSE_RANK", 
        "KW_DEREF", "KW_DESCRIBE", "KW_DETERMINISTIC", "KW_DISALLOW", "KW_DISCONNECT", 
        "KW_DISTINCT", "KW_DOT", "KW_DOUBLE", "KW_DROP", "KW_DYNAMIC", "KW_EACH", 
        "KW_ELEMENT", "KW_ELSE", "KW_EMPTY", "KW_END", "KW_END_FRAME", "KW_END_PARTITION", 
        "KW_ENFORCED", "KW_EQUALS", "KW_ESCAPE", "KW_ESTIMATED_COST", "KW_EVERY", 
        "KW_EXCEPT", "KW_EXEC", "KW_EXECUTE", "KW_EXISTS", "KW_EXP", "KW_EXPLAIN", 
        "KW_EXTEND", "KW_EXTENDED", "KW_EXTERNAL", "KW_EXTRACT", "KW_FALSE", 
        "KW_FETCH", "KW_FILTER", "KW_FIRST_VALUE", "KW_FLOAT", "KW_FLOOR", 
        "KW_FOLLOWING", "KW_FOR", "KW_FOREIGN", "KW_FRAME_ROW", "KW_FREE", 
        "KW_FRIDAY", "KW_FROM", "KW_FULL", "KW_FUNCTION", "KW_FUNCTIONS", 
        "KW_FUSION", "KW_GET", "KW_GLOBAL", "KW_GRANT", "KW_GROUP", "KW_GROUPING", 
        "KW_GROUPS", "KW_GROUP_CONCAT", "KW_HAVING", "KW_HOLD", "KW_HOUR", 
        "KW_IDENTITY", "KW_IF", "KW_ILIKE", "KW_IMPORT", "KW_IN", "KW_INCLUDE", 
        "KW_INDICATOR", "KW_INITIAL", "KW_INNER", "KW_INOUT", "KW_INSENSITIVE", 
        "KW_INSERT", "KW_INT", "KW_INTEGER", "KW_INTERSECT", "KW_INTERSECTION", 
        "KW_INTERVAL", "KW_INTO", "KW_IS", "KW_JOIN", "KW_JSON", "KW_JSON_ARRAY", 
        "KW_JSON_ARRAYAGG", "KW_JSON_EXECUTION_PLAN", "KW_JSON_EXISTS", 
        "KW_JSON_OBJECT", "KW_JSON_OBJECTAGG", "KW_JSON_QUERY", "KW_JSON_VALUE", 
        "KW_LAG", "KW_LANGUAGE", "KW_LARGE", "KW_LAST_VALUE", "KW_LATERAL", 
        "KW_LEAD", "KW_LEADING", "KW_LEFT", "KW_LIKE", "KW_LIKE_REGEX", 
        "KW_LIMIT", "KW_LN", "KW_LOCAL", "KW_LOCALTIME", "KW_LOCALTIMESTAMP", 
        "KW_LOWER", "KW_MATCH", "KW_MATCHES", "KW_MATCH_NUMBER", "KW_MATCH_RECOGNIZE", 
        "KW_MAX", "KW_MEASURES", "KW_MEMBER", "KW_MERGE", "KW_METADATA", 
        "KW_METHOD", "KW_MIN", "KW_MINUS", "KW_MINUTE", "KW_MOD", "KW_MODIFIES", 
        "KW_MODIFY", "KW_MODULE", "KW_MODULES", "KW_MONDAY", "KW_MONTH", 
        "KW_MORE", "KW_MULTISET", "KW_NATIONAL", "KW_NATURAL", "KW_NCHAR", 
        "KW_NCLOB", "KW_NEW", "KW_NEXT", "KW_NO", "KW_NONE", "KW_NORMALIZE", 
        "KW_NOT", "KW_NTH_VALUE", "KW_NTILE", "KW_NULL", "KW_NULLIF", "KW_NUMERIC", 
        "KW_OCCURRENCES_REGEX", "KW_OCTET_LENGTH", "KW_OF", "KW_OFFSET", 
        "KW_OLD", "KW_OMIT", "KW_ON", "KW_ONE", "KW_ONLY", "KW_OPEN", "KW_OR", 
        "KW_ORDER", "KW_ORDINAL", "KW_OUT", "KW_OUTER", "KW_OVER", "KW_OVERLAPS", 
        "KW_OVERLAY", "KW_OVERWRITE", "KW_OVERWRITING", "KW_PARAMETER", 
        "KW_PARTITION", "KW_PARTITIONED", "KW_PARTITIONS", "KW_PATTERN", 
        "KW_PER", "KW_PERCENT", "KW_PERCENTILE_CONT", "KW_PERCENTILE_DISC", 
        "KW_PERCENT_RANK", "KW_PERIOD", "KW_PERMUTE", "KW_PIVOT", "KW_PORTION", 
        "KW_POSITION", "KW_POSITION_REGEX", "KW_POWER", "KW_PRECEDES", "KW_PRECISION", 
        "KW_PREPARE", "KW_PREV", "KW_PRIMARY", "KW_PROCEDURE", "KW_QUALIFY", 
        "KW_QUARTERS", "KW_RANGE", "KW_RANK", "KW_RAW", "KW_READS", "KW_REAL", 
        "KW_RECURSIVE", "KW_REF", "KW_REFERENCES", "KW_REFERENCING", "KW_REGR_AVGX", 
        "KW_REGR_AVGY", "KW_REGR_COUNT", "KW_REGR_INTERCEPT", "KW_REGR_R2", 
        "KW_REGR_SLOPE", "KW_REGR_SXX", "KW_REGR_SXY", "KW_REGR_SYY", "KW_RELEASE", 
        "KW_RENAME", "KW_RESET", "KW_RESULT", "KW_RETURN", "KW_RETURNS", 
        "KW_REVOKE", "KW_RIGHT", "KW_RLIKE", "KW_ROLLBACK", "KW_ROLLUP", 
        "KW_ROW", "KW_ROWS", "KW_ROW_NUMBER", "KW_RUNNING", "KW_SAFE_CAST", 
        "KW_SAFE_OFFSET", "KW_SAFE_ORDINAL", "KW_SATURDAY", "KW_SAVEPOINT", 
        "KW_SCALA", "KW_SCOPE", "KW_SCROLL", "KW_SEARCH", "KW_SECOND", "KW_SEEK", 
        "KW_SELECT", "KW_SENSITIVE", "KW_SEPARATOR", "KW_SESSION_USER", 
        "KW_SET", "KW_SHOW", "KW_SIMILAR", "KW_SKIP", "KW_SMALLINT", "KW_SOME", 
        "KW_SPECIFIC", "KW_SPECIFICTYPE", "KW_SQL", "KW_SQLEXCEPTION", "KW_SQLSTATE", 
        "KW_SQLWARNING", "KW_SQRT", "KW_START", "KW_STATEMENT", "KW_STATIC", 
        "KW_STATISTICS", "KW_STDDEV_POP", "KW_STDDEV_SAMP", "KW_STREAM", 
        "KW_STRING", "KW_STRING_AGG", "KW_SUBMULTISET", "KW_SUBSET", "KW_SUBSTRING", 
        "KW_SUBSTRING_REGEX", "KW_SUCCEEDS", "KW_SUM", "KW_SUNDAY", "KW_SYMMETRIC", 
        "KW_SYSTEM", "KW_SYSTEM_TIME", "KW_SYSTEM_USER", "KW_TABLE", "KW_TABLES", 
        "KW_TABLESAMPLE", "KW_THEN", "KW_THURSDAY", "KW_TIME", "KW_TIMESTAMP", 
        "KW_TIMESTAMP_DIFF", "KW_TIMESTAMP_LTZ", "KW_TIMESTAMP_TRUNC", "KW_TIMEZONE_HOUR", 
        "KW_TIMEZONE_MINUTE", "KW_TIME_DIFF", "KW_TIME_TRUNC", "KW_TINYINT", 
        "KW_TO", "KW_TRAILING", "KW_TRANSLATE", "KW_TRANSLATE_REGEX", "KW_TRANSLATION", 
        "KW_TREAT", "KW_TRIGGER", "KW_TRIM", "KW_TRIM_ARRAY", "KW_TRUE", 
        "KW_TRUNCATE", "KW_TRY_CAST", "KW_TUESDAY", "KW_UESCAPE", "KW_UNBOUNDED", 
        "KW_UNION", "KW_UNIQUE", "KW_UNKNOWN", "KW_UNNEST", "KW_UNPIVOT", 
        "KW_UPDATE", "KW_UPPER", "KW_UPSERT", "KW_USE", "KW_USER", "KW_USING", 
        "KW_VALUE", "KW_VALUES", "KW_VALUE_OF", "KW_VARBINARY", "KW_VARCHAR", 
        "KW_VARYING", "KW_VAR_POP", "KW_VAR_SAMP", "KW_VERSIONING", "KW_VIEWS", 
        "KW_VIRTUAL", "KW_WATERMARK", "KW_WATERMARKS", "KW_WEDNESDAY", "KW_WEEKS", 
        "KW_WHEN", "KW_WHENEVER", "KW_WHERE", "KW_WIDTH_BUCKET", "KW_WINDOW", 
        "KW_WITH", "KW_WITHIN", "KW_WITHOUT", "KW_YEAR", "KW_ADD", "KW_AFTER", 
        "KW_ASC", "KW_CASCADE", "KW_CATALOG", "KW_CENTURY", "KW_CONFIG", 
        "KW_CONSTRAINTS", "KW_CUMULATE", "KW_DATA", "KW_DATABASE", "KW_DAYS", 
        "KW_DECADE", "KW_DESC", "KW_DESCRIPTOR", "KW_DIV", "KW_ENGINE", 
        "KW_EPOCH", "KW_EXCLUDING", "KW_FILE", "KW_FIRST", "KW_GENERATED", 
        "KW_HOP", "KW_HOURS", "KW_IGNORE", "KW_INCLUDING", "KW_JAR", "KW_JARS", 
        "KW_JAVA", "KW_KEY", "KW_LAST", "KW_LOAD", "KW_MAP", "KW_MICROSECOND", 
        "KW_MILLENNIUM", "KW_MILLISECOND", "KW_MINUTES", "KW_MONTHS", "KW_NANOSECOND", 
        "KW_NULLS", "KW_OPTIONS", "KW_PAST", "KW_PLAN", "KW_PRECEDING", 
        "KW_PYTHON", "KW_PYTHON_ARCHIVES", "KW_PYTHON_DEPENDENCIES", "KW_PYTHON_FILES", 
        "KW_PYTHON_JAR", "KW_PYTHON_PARAMETER", "KW_PYTHON_REQUIREMENTS", 
        "KW_QUARTER", "KW_REMOVE", "KW_RESTRICT", "KW_SECONDS", "KW_SESSION", 
        "KW_SETS", "KW_SIZE", "KW_SLIDE", "KW_STEP", "KW_TEMPORARY", "KW_TIMECOL", 
        "KW_TUMBLE", "KW_UNLOAD", "KW_VIEW", "KW_WEEK", "KW_YEARS", "KW_ZONE", 
        "EQUAL_SYMBOL", "GREATER_SYMBOL", "LESS_SYMBOL", "EXCLAMATION_SYMBOL", 
        "BIT_NOT_OP", "BIT_OR_OP", "BIT_AND_OP", "BIT_XOR_OP", "DOT", "LS_BRACKET", 
        "RS_BRACKET", "LR_BRACKET", "RR_BRACKET", "LB_BRACKET", "RB_BRACKET", 
        "COMMA", "SEMICOLON", "AT_SIGN", "SINGLE_QUOTE_SYMB", "DOUBLE_QUOTE_SYMB", 
        "REVERSE_QUOTE_SYMB", "COLON_SYMB", "ASTERISK_SIGN", "UNDERLINE_SIGN", 
        "HYPHEN_SIGN", "ADD_SIGN", "PERCENT_SIGN", "DOUBLE_VERTICAL_SIGN", 
        "DOUBLE_HYPHEN_SIGN", "SLASH_SIGN", "QUESTION_MARK_SIGN", "DOUBLE_RIGHT_ARROW", 
        "STRING_LITERAL", "DIG_LITERAL", "REAL_LITERAL", "BIT_STRING", "ID_LITERAL"
    ];
    public static readonly ruleNames = [
        "program", "singleStatement", "sqlStatement", "emptyStatement", 
        "ddlStatement", "dmlStatement", "describeStatement", "explainStatement", 
        "explainDetails", "explainDetail", "useStatement", "useModuleStatement", 
        "showStatement", "loadStatement", "unloadStatement", "setStatement", 
        "resetStatement", "jarStatement", "dtAddStatement", "dtFilePath", 
        "createTable", "simpleCreateTable", "createTableAsSelect", "columnOptionDefinition", 
        "physicalColumnDefinition", "columnNameCreate", "columnName", "columnNamePath", 
        "columnNameList", "columnType", "lengthOneDimension", "lengthTwoOptionalDimension", 
        "lengthTwoStringDimension", "lengthOneTypeDimension", "mapTypeDimension", 
        "rowTypeDimension", "columnConstraint", "metadataColumnDefinition", 
        "metadataKey", "computedColumnDefinition", "computedColumnExpression", 
        "watermarkDefinition", "tableConstraint", "constraintName", "selfDefinitionClause", 
        "partitionDefinition", "transformList", "transform", "transformArgument", 
        "likeDefinition", "likeOption", "createCatalog", "createDatabase", 
        "createView", "createFunction", "usingClause", "jarFileName", "alterTable", 
        "renameDefinition", "setKeyValueDefinition", "addConstraint", "dropConstraint", 
        "addUnique", "notForced", "alterView", "alterDatabase", "alterFunction", 
        "dropCatalog", "dropTable", "dropDatabase", "dropView", "dropFunction", 
        "insertStatement", "insertSimpleStatement", "insertPartitionDefinition", 
        "valuesDefinition", "valuesRowDefinition", "valueDefinition", "insertMulStatementCompatibility", 
        "insertMulStatement", "queryStatement", "valuesClause", "withClause", 
        "withItem", "withItemName", "selectStatement", "selectClause", "projectItemDefinition", 
        "overWindowItem", "fromClause", "tableExpression", "tableReference", 
        "tablePrimary", "systemTimePeriod", "dateTimeExpression", "inlineDataValueClause", 
        "windowTVFClause", "windowTVFExpression", "windowTVFName", "windowTVFParam", 
        "timeIntervalParamName", "columnDescriptor", "joinCondition", "whereClause", 
        "groupByClause", "groupItemDefinition", "groupingSets", "groupingSetsNotationName", 
        "groupWindowFunction", "groupWindowFunctionName", "timeAttrColumn", 
        "havingClause", "windowClause", "namedWindow", "windowSpec", "matchRecognizeClause", 
        "orderByClause", "orderItemDefinition", "limitClause", "partitionByClause", 
        "quantifiers", "measuresClause", "patternDefinition", "patternVariable", 
        "outputMode", "afterMatchStrategy", "patternVariablesDefinition", 
        "windowFrame", "frameBound", "frameStart", "frameEnd", "withinClause", 
        "expression", "booleanExpression", "predicate", "jsonFunctionBranch", 
        "likePredicate", "valueExpression", "functionCallExpression", "primaryExpression", 
        "functionNameCreate", "functionName", "functionNameAndParams", "functionNameWithParams", 
        "functionParam", "jsonValueParams", "jsonQueryParams", "jsonObjectParams", 
        "jsonArrayParams", "dereferenceDefinition", "correlationName", "qualifiedName", 
        "timeIntervalExpression", "errorCapturingMultiUnitsInterval", "multiUnitsInterval", 
        "errorCapturingUnitToUnitInterval", "unitToUnitInterval", "intervalValue", 
        "tableAlias", "errorCapturingIdentifier", "errorCapturingIdentifierExtra", 
        "identifierList", "identifierSeq", "identifier", "unquotedIdentifier", 
        "quotedIdentifier", "whenClause", "catalogPath", "catalogPathCreate", 
        "databasePath", "databasePathCreate", "tablePathCreate", "tablePath", 
        "viewPath", "viewPathCreate", "uid", "withOption", "ifNotExists", 
        "ifExists", "tablePropertyList", "tableProperty", "tablePropertyKey", 
        "tablePropertyValue", "logicalOperator", "comparisonOperator", "bitOperator", 
        "mathOperator", "unaryOperator", "constant", "timePointLiteral", 
        "stringLiteral", "decimalLiteral", "booleanLiteral", "setQuantifier", 
        "timePointUnit", "timeIntervalUnit", "reservedKeywordsUsedAsFuncParam", 
        "reservedKeywordsNoParamsUsedAsFuncName", "reservedKeywordsFollowParamsUsedAsFuncName", 
        "reservedKeywordsUsedAsFuncName", "nonReservedKeywords",
    ];

    public get grammarFileName(): string { return "FlinkSqlParser.g4"; }
    public get literalNames(): (string | null)[] { return FlinkSqlParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return FlinkSqlParser.symbolicNames; }
    public get ruleNames(): string[] { return FlinkSqlParser.ruleNames; }
    public get serializedATN(): number[] { return FlinkSqlParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, FlinkSqlParser._ATN, FlinkSqlParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, FlinkSqlParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 405;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 8 || _la === 24 || _la === 72 || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & 75497601) !== 0) || _la === 178 || ((((_la - 314)) & ~0x1F) === 0 && ((1 << (_la - 314)) & 822083585) !== 0) || ((((_la - 413)) & ~0x1F) === 0 && ((1 << (_la - 413)) & 142606353) !== 0) || _la === 453 || _la === 471 || ((((_la - 492)) & ~0x1F) === 0 && ((1 << (_la - 492)) & 134219777) !== 0) || _la === 524) {
                {
                {
                this.state = 402;
                this.singleStatement();
                }
                }
                this.state = 407;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 408;
            this.match(FlinkSqlParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 2, FlinkSqlParser.RULE_singleStatement);
        try {
            this.state = 415;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
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
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 410;
                this.sqlStatement();
                this.state = 412;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
                case 1:
                    {
                    this.state = 411;
                    this.match(FlinkSqlParser.SEMICOLON);
                    }
                    break;
                }
                }
                break;
            case FlinkSqlParser.SEMICOLON:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 414;
                this.emptyStatement();
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
    public sqlStatement(): SqlStatementContext {
        let localContext = new SqlStatementContext(this.context, this.state);
        this.enterRule(localContext, 4, FlinkSqlParser.RULE_sqlStatement);
        try {
            this.state = 429;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 417;
                this.ddlStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 418;
                this.dmlStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 419;
                this.describeStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 420;
                this.explainStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 421;
                this.useStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 422;
                this.showStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 423;
                this.loadStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 424;
                this.unloadStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 425;
                this.setStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 426;
                this.resetStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 427;
                this.jarStatement();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 428;
                this.dtAddStatement();
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
    public emptyStatement(): EmptyStatementContext {
        let localContext = new EmptyStatementContext(this.context, this.state);
        this.enterRule(localContext, 6, FlinkSqlParser.RULE_emptyStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 431;
            this.match(FlinkSqlParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ddlStatement(): DdlStatementContext {
        let localContext = new DdlStatementContext(this.context, this.state);
        this.enterRule(localContext, 8, FlinkSqlParser.RULE_ddlStatement);
        try {
            this.state = 447;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 433;
                this.createTable();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 434;
                this.createDatabase();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 435;
                this.createView();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 436;
                this.createFunction();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 437;
                this.createCatalog();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 438;
                this.alterTable();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 439;
                this.alterView();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 440;
                this.alterDatabase();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 441;
                this.alterFunction();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 442;
                this.dropCatalog();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 443;
                this.dropTable();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 444;
                this.dropDatabase();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 445;
                this.dropView();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 446;
                this.dropFunction();
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
    public dmlStatement(): DmlStatementContext {
        let localContext = new DmlStatementContext(this.context, this.state);
        this.enterRule(localContext, 10, FlinkSqlParser.RULE_dmlStatement);
        try {
            this.state = 451;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_SELECT:
            case FlinkSqlParser.KW_VALUES:
            case FlinkSqlParser.KW_WITH:
            case FlinkSqlParser.LR_BRACKET:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 449;
                this.queryStatement(0);
                }
                break;
            case FlinkSqlParser.KW_BEGIN:
            case FlinkSqlParser.KW_EXECUTE:
            case FlinkSqlParser.KW_INSERT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 450;
                this.insertStatement();
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
    public describeStatement(): DescribeStatementContext {
        let localContext = new DescribeStatementContext(this.context, this.state);
        this.enterRule(localContext, 12, FlinkSqlParser.RULE_describeStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 453;
            _la = this.tokenStream.LA(1);
            if(!(_la === 109 || _la === 453)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 454;
            this.tablePath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 14, FlinkSqlParser.RULE_explainStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 456;
            this.match(FlinkSqlParser.KW_EXPLAIN);
            this.state = 460;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_CHANGELOG_MODE:
            case FlinkSqlParser.KW_ESTIMATED_COST:
            case FlinkSqlParser.KW_JSON_EXECUTION_PLAN:
                {
                this.state = 457;
                this.explainDetails();
                }
                break;
            case FlinkSqlParser.KW_PLAN:
                {
                this.state = 458;
                this.match(FlinkSqlParser.KW_PLAN);
                this.state = 459;
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
            this.state = 465;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                {
                this.state = 462;
                this.dmlStatement();
                }
                break;
            case 2:
                {
                this.state = 463;
                this.insertSimpleStatement();
                }
                break;
            case 3:
                {
                this.state = 464;
                this.insertMulStatement();
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
    public explainDetails(): ExplainDetailsContext {
        let localContext = new ExplainDetailsContext(this.context, this.state);
        this.enterRule(localContext, 16, FlinkSqlParser.RULE_explainDetails);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 467;
            this.explainDetail();
            this.state = 472;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 523) {
                {
                {
                this.state = 468;
                this.match(FlinkSqlParser.COMMA);
                this.state = 469;
                this.explainDetail();
                }
                }
                this.state = 474;
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
    public explainDetail(): ExplainDetailContext {
        let localContext = new ExplainDetailContext(this.context, this.state);
        this.enterRule(localContext, 18, FlinkSqlParser.RULE_explainDetail);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 475;
            _la = this.tokenStream.LA(1);
            if(!(_la === 45 || _la === 128 || _la === 190)) {
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
    public useStatement(): UseStatementContext {
        let localContext = new UseStatementContext(this.context, this.state);
        this.enterRule(localContext, 20, FlinkSqlParser.RULE_useStatement);
        try {
            this.state = 483;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 477;
                this.match(FlinkSqlParser.KW_USE);
                this.state = 478;
                this.match(FlinkSqlParser.KW_CATALOG);
                this.state = 479;
                this.catalogPath();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 480;
                this.match(FlinkSqlParser.KW_USE);
                this.state = 481;
                this.databasePath();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 482;
                this.useModuleStatement();
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
    public useModuleStatement(): UseModuleStatementContext {
        let localContext = new UseModuleStatementContext(this.context, this.state);
        this.enterRule(localContext, 22, FlinkSqlParser.RULE_useModuleStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 485;
            this.match(FlinkSqlParser.KW_USE);
            this.state = 486;
            this.match(FlinkSqlParser.KW_MODULES);
            this.state = 487;
            this.uid();
            this.state = 492;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 523) {
                {
                {
                this.state = 488;
                this.match(FlinkSqlParser.COMMA);
                this.state = 489;
                this.uid();
                }
                }
                this.state = 494;
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
    public showStatement(): ShowStatementContext {
        let localContext = new ShowStatementContext(this.context, this.state);
        this.enterRule(localContext, 24, FlinkSqlParser.RULE_showStatement);
        let _la: number;
        try {
            this.state = 537;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 18, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 495;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 496;
                _la = this.tokenStream.LA(1);
                if(!(_la === 42 || _la === 90 || _la === 425 || _la === 467)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 497;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 498;
                this.match(FlinkSqlParser.KW_CURRENT);
                this.state = 499;
                _la = this.tokenStream.LA(1);
                if(!(_la === 444 || _la === 450)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 500;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 501;
                this.match(FlinkSqlParser.KW_TABLES);
                this.state = 504;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 152 || _la === 171) {
                    {
                    this.state = 502;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 152 || _la === 171)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 503;
                    this.databasePath();
                    }
                }

                this.state = 507;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 204 || _la === 243) {
                    {
                    this.state = 506;
                    this.likePredicate();
                    }
                }

                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 509;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 510;
                this.match(FlinkSqlParser.KW_COLUMNS);
                this.state = 511;
                _la = this.tokenStream.LA(1);
                if(!(_la === 152 || _la === 171)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 514;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context) ) {
                case 1:
                    {
                    this.state = 512;
                    this.viewPath();
                    }
                    break;
                case 2:
                    {
                    this.state = 513;
                    this.tablePath();
                    }
                    break;
                }
                this.state = 517;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 204 || _la === 243) {
                    {
                    this.state = 516;
                    this.likePredicate();
                    }
                }

                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 519;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 520;
                this.match(FlinkSqlParser.KW_CREATE);
                this.state = 525;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.KW_TABLE:
                    {
                    this.state = 521;
                    this.match(FlinkSqlParser.KW_TABLE);
                    this.state = 522;
                    this.tablePath();
                    }
                    break;
                case FlinkSqlParser.KW_VIEW:
                    {
                    this.state = 523;
                    this.match(FlinkSqlParser.KW_VIEW);
                    this.state = 524;
                    this.viewPath();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 527;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 529;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 414) {
                    {
                    this.state = 528;
                    this.match(FlinkSqlParser.KW_USER);
                    }
                }

                this.state = 531;
                this.match(FlinkSqlParser.KW_FUNCTIONS);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 532;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 534;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 153) {
                    {
                    this.state = 533;
                    this.match(FlinkSqlParser.KW_FULL);
                    }
                }

                this.state = 536;
                this.match(FlinkSqlParser.KW_MODULES);
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
    public loadStatement(): LoadStatementContext {
        let localContext = new LoadStatementContext(this.context, this.state);
        this.enterRule(localContext, 26, FlinkSqlParser.RULE_loadStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 539;
            this.match(FlinkSqlParser.KW_LOAD);
            this.state = 540;
            this.match(FlinkSqlParser.KW_MODULE);
            this.state = 541;
            this.uid();
            this.state = 544;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context) ) {
            case 1:
                {
                this.state = 542;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 543;
                this.tablePropertyList();
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
    public unloadStatement(): UnloadStatementContext {
        let localContext = new UnloadStatementContext(this.context, this.state);
        this.enterRule(localContext, 28, FlinkSqlParser.RULE_unloadStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 546;
            this.match(FlinkSqlParser.KW_UNLOAD);
            this.state = 547;
            this.match(FlinkSqlParser.KW_MODULE);
            this.state = 548;
            this.uid();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 30, FlinkSqlParser.RULE_setStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 550;
            this.match(FlinkSqlParser.KW_SET);
            this.state = 552;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
            case 1:
                {
                this.state = 551;
                this.tableProperty();
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
    public resetStatement(): ResetStatementContext {
        let localContext = new ResetStatementContext(this.context, this.state);
        this.enterRule(localContext, 32, FlinkSqlParser.RULE_resetStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 554;
            this.match(FlinkSqlParser.KW_RESET);
            this.state = 556;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context) ) {
            case 1:
                {
                this.state = 555;
                this.tablePropertyKey();
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
    public jarStatement(): JarStatementContext {
        let localContext = new JarStatementContext(this.context, this.state);
        this.enterRule(localContext, 34, FlinkSqlParser.RULE_jarStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 558;
            _la = this.tokenStream.LA(1);
            if(!(_la === 440 || _la === 492)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 559;
            this.match(FlinkSqlParser.KW_JAR);
            this.state = 560;
            this.jarFileName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dtAddStatement(): DtAddStatementContext {
        let localContext = new DtAddStatementContext(this.context, this.state);
        this.enterRule(localContext, 36, FlinkSqlParser.RULE_dtAddStatement);
        let _la: number;
        try {
            this.state = 612;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 562;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 563;
                this.match(FlinkSqlParser.KW_JAR);
                this.state = 564;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 565;
                this.dtFilePath();
                this.state = 568;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                    this.state = 566;
                    this.match(FlinkSqlParser.KW_AS);
                    this.state = 567;
                    this.uid();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 570;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 571;
                this.match(FlinkSqlParser.KW_FILE);
                this.state = 572;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 573;
                this.dtFilePath();
                this.state = 576;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                    this.state = 574;
                    this.match(FlinkSqlParser.KW_AS);
                    this.state = 575;
                    this.uid();
                    }
                }

                this.state = 580;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 313) {
                    {
                    this.state = 578;
                    this.match(FlinkSqlParser.KW_RENAME);
                    this.state = 579;
                    this.uid();
                    }
                }

                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 582;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 583;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 485)) & ~0x1F) === 0 && ((1 << (_la - 485)) & 47) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 584;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 585;
                this.dtFilePath();
                this.state = 586;
                this.match(FlinkSqlParser.KW_RENAME);
                this.state = 587;
                this.uid();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 589;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 590;
                this.match(FlinkSqlParser.KW_PYTHON_PARAMETER);
                this.state = 591;
                this.dtFilePath();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 592;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 593;
                this.match(FlinkSqlParser.KW_ENGINE);
                this.state = 594;
                this.match(FlinkSqlParser.KW_FILE);
                this.state = 595;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 596;
                this.dtFilePath();
                this.state = 597;
                this.match(FlinkSqlParser.KW_RENAME);
                this.state = 598;
                this.uid();
                this.state = 599;
                this.match(FlinkSqlParser.KW_KEY);
                this.state = 600;
                this.uid();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 602;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 603;
                this.match(FlinkSqlParser.KW_CONFIG);
                this.state = 604;
                this.match(FlinkSqlParser.KW_FILE);
                this.state = 605;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 606;
                this.dtFilePath();
                this.state = 607;
                this.match(FlinkSqlParser.KW_FOR);
                this.state = 608;
                this.uid();
                this.state = 609;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 610;
                this.uid();
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
    public dtFilePath(): DtFilePathContext {
        let localContext = new DtFilePathContext(this.context, this.state);
        this.enterRule(localContext, 38, FlinkSqlParser.RULE_dtFilePath);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 618;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 615;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 537) {
                        {
                        this.state = 614;
                        this.match(FlinkSqlParser.SLASH_SIGN);
                        }
                    }

                    this.state = 617;
                    this.uid();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 620;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 27, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createTable(): CreateTableContext {
        let localContext = new CreateTableContext(this.context, this.state);
        this.enterRule(localContext, 40, FlinkSqlParser.RULE_createTable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 624;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
            case 1:
                {
                this.state = 622;
                this.simpleCreateTable();
                }
                break;
            case 2:
                {
                this.state = 623;
                this.createTableAsSelect();
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
    public simpleCreateTable(): SimpleCreateTableContext {
        let localContext = new SimpleCreateTableContext(this.context, this.state);
        this.enterRule(localContext, 42, FlinkSqlParser.RULE_simpleCreateTable);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 626;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 628;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 500) {
                {
                this.state = 627;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
            }

            this.state = 630;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 632;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 168) {
                {
                this.state = 631;
                this.ifNotExists();
                }
            }

            this.state = 634;
            this.tablePathCreate();
            this.state = 635;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 636;
            this.columnOptionDefinition();
            this.state = 641;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 31, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 637;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 638;
                    this.columnOptionDefinition();
                    }
                    }
                }
                this.state = 643;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 31, this.context);
            }
            this.state = 646;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context) ) {
            case 1:
                {
                this.state = 644;
                this.match(FlinkSqlParser.COMMA);
                this.state = 645;
                this.watermarkDefinition();
                }
                break;
            }
            this.state = 650;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context) ) {
            case 1:
                {
                this.state = 648;
                this.match(FlinkSqlParser.COMMA);
                this.state = 649;
                this.tableConstraint();
                }
                break;
            }
            this.state = 654;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 523) {
                {
                this.state = 652;
                this.match(FlinkSqlParser.COMMA);
                this.state = 653;
                this.selfDefinitionClause();
                }
            }

            this.state = 656;
            this.match(FlinkSqlParser.RR_BRACKET);
            this.state = 659;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 657;
                this.match(FlinkSqlParser.KW_COMMENT);
                this.state = 658;
                localContext._comment = this.match(FlinkSqlParser.STRING_LITERAL);
                }
            }

            this.state = 662;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 271) {
                {
                this.state = 661;
                this.partitionDefinition();
                }
            }

            this.state = 664;
            this.withOption();
            this.state = 666;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 204) {
                {
                this.state = 665;
                this.likeDefinition();
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
    public createTableAsSelect(): CreateTableAsSelectContext {
        let localContext = new CreateTableAsSelectContext(this.context, this.state);
        this.enterRule(localContext, 44, FlinkSqlParser.RULE_createTableAsSelect);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 668;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 669;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 671;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 168) {
                {
                this.state = 670;
                this.ifNotExists();
                }
            }

            this.state = 673;
            this.tablePathCreate();
            this.state = 674;
            this.withOption();
            this.state = 677;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 675;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 676;
                this.queryStatement(0);
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
    public columnOptionDefinition(): ColumnOptionDefinitionContext {
        let localContext = new ColumnOptionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 46, FlinkSqlParser.RULE_columnOptionDefinition);
        try {
            this.state = 682;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 679;
                this.physicalColumnDefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 680;
                this.metadataColumnDefinition();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 681;
                this.computedColumnDefinition();
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
    public physicalColumnDefinition(): PhysicalColumnDefinitionContext {
        let localContext = new PhysicalColumnDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 48, FlinkSqlParser.RULE_physicalColumnDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 684;
            this.columnNameCreate();
            this.state = 685;
            this.columnType();
            this.state = 687;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 64 || _la === 243 || _la === 246 || _la === 290) {
                {
                this.state = 686;
                this.columnConstraint();
                }
            }

            this.state = 691;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 689;
                this.match(FlinkSqlParser.KW_COMMENT);
                this.state = 690;
                localContext._comment = this.match(FlinkSqlParser.STRING_LITERAL);
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
    public columnNameCreate(): ColumnNameCreateContext {
        let localContext = new ColumnNameCreateContext(this.context, this.state);
        this.enterRule(localContext, 50, FlinkSqlParser.RULE_columnNameCreate);
        try {
            this.state = 695;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 693;
                this.uid();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 694;
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
    public columnName(): ColumnNameContext {
        let localContext = new ColumnNameContext(this.context, this.state);
        this.enterRule(localContext, 52, FlinkSqlParser.RULE_columnName);
        try {
            this.state = 699;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 697;
                this.uid();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 698;
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
    public columnNamePath(): ColumnNamePathContext {
        let localContext = new ColumnNamePathContext(this.context, this.state);
        this.enterRule(localContext, 54, FlinkSqlParser.RULE_columnNamePath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 701;
            this.uid();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnNameList(): ColumnNameListContext {
        let localContext = new ColumnNameListContext(this.context, this.state);
        this.enterRule(localContext, 56, FlinkSqlParser.RULE_columnNameList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 703;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 704;
            this.columnName();
            this.state = 709;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 523) {
                {
                {
                this.state = 705;
                this.match(FlinkSqlParser.COMMA);
                this.state = 706;
                this.columnName();
                }
                }
                this.state = 711;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 712;
            this.match(FlinkSqlParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnType(): ColumnTypeContext {
        let localContext = new ColumnTypeContext(this.context, this.state);
        this.enterRule(localContext, 58, FlinkSqlParser.RULE_columnType);
        let _la: number;
        try {
            this.state = 751;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_BOOLEAN:
            case FlinkSqlParser.KW_DATE:
            case FlinkSqlParser.KW_NULL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 714;
                localContext._colType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 32 || _la === 91 || _la === 246)) {
                    localContext._colType = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 715;
                localContext._colType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & 262275) !== 0) || _la === 92 || _la === 179 || _la === 180 || _la === 346 || _la === 362 || ((((_la - 380)) & ~0x1F) === 0 && ((1 << (_la - 380)) & 521) !== 0) || _la === 419 || _la === 420)) {
                    localContext._colType = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 717;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 519) {
                    {
                    this.state = 716;
                    this.lengthOneDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_TIMESTAMP:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 719;
                localContext._colType = this.match(FlinkSqlParser.KW_TIMESTAMP);
                this.state = 721;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 519) {
                    {
                    this.state = 720;
                    this.lengthOneDimension();
                    }
                }

                this.state = 729;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 436 || _la === 438) {
                    {
                    this.state = 723;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 436 || _la === 438)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 725;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 208) {
                        {
                        this.state = 724;
                        this.match(FlinkSqlParser.KW_LOCAL);
                        }
                    }

                    this.state = 727;
                    this.match(FlinkSqlParser.KW_TIME);
                    this.state = 728;
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
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 731;
                localContext._colType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 16387) !== 0) || _la === 144 || _la === 248)) {
                    localContext._colType = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 733;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 519) {
                    {
                    this.state = 732;
                    this.lengthTwoOptionalDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_ARRAY:
            case FlinkSqlParser.KW_MULTISET:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 735;
                localContext._colType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 13 || _la === 233)) {
                    localContext._colType = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 737;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 510) {
                    {
                    this.state = 736;
                    this.lengthOneTypeDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_MAP:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 739;
                localContext._colType = this.match(FlinkSqlParser.KW_MAP);
                this.state = 741;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 510) {
                    {
                    this.state = 740;
                    this.mapTypeDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_ROW:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 743;
                localContext._colType = this.match(FlinkSqlParser.KW_ROW);
                this.state = 745;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 510 || _la === 519) {
                    {
                    this.state = 744;
                    this.rowTypeDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_RAW:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 747;
                localContext._colType = this.match(FlinkSqlParser.KW_RAW);
                this.state = 749;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 519) {
                    {
                    this.state = 748;
                    this.lengthTwoStringDimension();
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
    public lengthOneDimension(): LengthOneDimensionContext {
        let localContext = new LengthOneDimensionContext(this.context, this.state);
        this.enterRule(localContext, 60, FlinkSqlParser.RULE_lengthOneDimension);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 753;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 754;
            this.decimalLiteral();
            this.state = 755;
            this.match(FlinkSqlParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext {
        let localContext = new LengthTwoOptionalDimensionContext(this.context, this.state);
        this.enterRule(localContext, 62, FlinkSqlParser.RULE_lengthTwoOptionalDimension);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 757;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 758;
            this.decimalLiteral();
            this.state = 761;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 523) {
                {
                this.state = 759;
                this.match(FlinkSqlParser.COMMA);
                this.state = 760;
                this.decimalLiteral();
                }
            }

            this.state = 763;
            this.match(FlinkSqlParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lengthTwoStringDimension(): LengthTwoStringDimensionContext {
        let localContext = new LengthTwoStringDimensionContext(this.context, this.state);
        this.enterRule(localContext, 64, FlinkSqlParser.RULE_lengthTwoStringDimension);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 765;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 766;
            this.stringLiteral();
            this.state = 769;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 523) {
                {
                this.state = 767;
                this.match(FlinkSqlParser.COMMA);
                this.state = 768;
                this.stringLiteral();
                }
            }

            this.state = 771;
            this.match(FlinkSqlParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lengthOneTypeDimension(): LengthOneTypeDimensionContext {
        let localContext = new LengthOneTypeDimensionContext(this.context, this.state);
        this.enterRule(localContext, 66, FlinkSqlParser.RULE_lengthOneTypeDimension);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 773;
            this.match(FlinkSqlParser.LESS_SYMBOL);
            this.state = 774;
            this.columnType();
            this.state = 775;
            this.match(FlinkSqlParser.GREATER_SYMBOL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mapTypeDimension(): MapTypeDimensionContext {
        let localContext = new MapTypeDimensionContext(this.context, this.state);
        this.enterRule(localContext, 68, FlinkSqlParser.RULE_mapTypeDimension);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 777;
            this.match(FlinkSqlParser.LESS_SYMBOL);
            this.state = 778;
            this.columnType();
            {
            this.state = 779;
            this.match(FlinkSqlParser.COMMA);
            this.state = 780;
            this.columnType();
            }
            this.state = 782;
            this.match(FlinkSqlParser.GREATER_SYMBOL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rowTypeDimension(): RowTypeDimensionContext {
        let localContext = new RowTypeDimensionContext(this.context, this.state);
        this.enterRule(localContext, 70, FlinkSqlParser.RULE_rowTypeDimension);
        let _la: number;
        try {
            this.state = 812;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.LESS_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 784;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 785;
                this.columnName();
                this.state = 786;
                this.columnType();
                this.state = 793;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 523) {
                    {
                    {
                    this.state = 787;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 788;
                    this.columnName();
                    this.state = 789;
                    this.columnType();
                    }
                    }
                    this.state = 795;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 796;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                }
                break;
            case FlinkSqlParser.LR_BRACKET:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 798;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 799;
                this.columnName();
                this.state = 800;
                this.columnType();
                this.state = 807;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 523) {
                    {
                    {
                    this.state = 801;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 802;
                    this.columnName();
                    this.state = 803;
                    this.columnType();
                    }
                    }
                    this.state = 809;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 810;
                this.match(FlinkSqlParser.RR_BRACKET);
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
    public columnConstraint(): ColumnConstraintContext {
        let localContext = new ColumnConstraintContext(this.context, this.state);
        this.enterRule(localContext, 72, FlinkSqlParser.RULE_columnConstraint);
        let _la: number;
        try {
            this.state = 828;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_CONSTRAINT:
            case FlinkSqlParser.KW_PRIMARY:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 816;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 64) {
                    {
                    this.state = 814;
                    this.match(FlinkSqlParser.KW_CONSTRAINT);
                    this.state = 815;
                    this.constraintName();
                    }
                }

                this.state = 818;
                this.match(FlinkSqlParser.KW_PRIMARY);
                this.state = 819;
                this.match(FlinkSqlParser.KW_KEY);
                this.state = 822;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 243) {
                    {
                    this.state = 820;
                    this.match(FlinkSqlParser.KW_NOT);
                    this.state = 821;
                    this.match(FlinkSqlParser.KW_ENFORCED);
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_NOT:
            case FlinkSqlParser.KW_NULL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 825;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 243) {
                    {
                    this.state = 824;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 827;
                this.match(FlinkSqlParser.KW_NULL);
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
    public metadataColumnDefinition(): MetadataColumnDefinitionContext {
        let localContext = new MetadataColumnDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 74, FlinkSqlParser.RULE_metadataColumnDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 830;
            this.columnNameCreate();
            this.state = 831;
            this.columnType();
            this.state = 832;
            this.match(FlinkSqlParser.KW_METADATA);
            this.state = 835;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 152) {
                {
                this.state = 833;
                this.match(FlinkSqlParser.KW_FROM);
                this.state = 834;
                this.metadataKey();
                }
            }

            this.state = 838;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 426) {
                {
                this.state = 837;
                this.match(FlinkSqlParser.KW_VIRTUAL);
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
    public metadataKey(): MetadataKeyContext {
        let localContext = new MetadataKeyContext(this.context, this.state);
        this.enterRule(localContext, 76, FlinkSqlParser.RULE_metadataKey);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 840;
            this.match(FlinkSqlParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public computedColumnDefinition(): ComputedColumnDefinitionContext {
        let localContext = new ComputedColumnDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 78, FlinkSqlParser.RULE_computedColumnDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 842;
            this.columnNameCreate();
            this.state = 843;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 844;
            this.computedColumnExpression();
            this.state = 847;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 845;
                this.match(FlinkSqlParser.KW_COMMENT);
                this.state = 846;
                localContext._comment = this.match(FlinkSqlParser.STRING_LITERAL);
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
    public computedColumnExpression(): ComputedColumnExpressionContext {
        let localContext = new ComputedColumnExpressionContext(this.context, this.state);
        this.enterRule(localContext, 80, FlinkSqlParser.RULE_computedColumnExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 849;
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
    public watermarkDefinition(): WatermarkDefinitionContext {
        let localContext = new WatermarkDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 82, FlinkSqlParser.RULE_watermarkDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 851;
            this.match(FlinkSqlParser.KW_WATERMARK);
            this.state = 852;
            this.match(FlinkSqlParser.KW_FOR);
            this.state = 853;
            this.columnName();
            this.state = 854;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 855;
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
    public tableConstraint(): TableConstraintContext {
        let localContext = new TableConstraintContext(this.context, this.state);
        this.enterRule(localContext, 84, FlinkSqlParser.RULE_tableConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 859;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 64) {
                {
                this.state = 857;
                this.match(FlinkSqlParser.KW_CONSTRAINT);
                this.state = 858;
                this.constraintName();
                }
            }

            this.state = 861;
            this.match(FlinkSqlParser.KW_PRIMARY);
            this.state = 862;
            this.match(FlinkSqlParser.KW_KEY);
            this.state = 863;
            this.columnNameList();
            this.state = 864;
            this.match(FlinkSqlParser.KW_NOT);
            this.state = 865;
            this.match(FlinkSqlParser.KW_ENFORCED);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constraintName(): ConstraintNameContext {
        let localContext = new ConstraintNameContext(this.context, this.state);
        this.enterRule(localContext, 86, FlinkSqlParser.RULE_constraintName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 867;
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
    public selfDefinitionClause(): SelfDefinitionClauseContext {
        let localContext = new SelfDefinitionClauseContext(this.context, this.state);
        this.enterRule(localContext, 88, FlinkSqlParser.RULE_selfDefinitionClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 869;
            this.match(FlinkSqlParser.KW_PERIOD);
            this.state = 870;
            this.match(FlinkSqlParser.KW_FOR);
            this.state = 871;
            this.match(FlinkSqlParser.KW_SYSTEM_TIME);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public partitionDefinition(): PartitionDefinitionContext {
        let localContext = new PartitionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 90, FlinkSqlParser.RULE_partitionDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 873;
            this.match(FlinkSqlParser.KW_PARTITIONED);
            this.state = 874;
            this.match(FlinkSqlParser.KW_BY);
            this.state = 875;
            this.transformList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public transformList(): TransformListContext {
        let localContext = new TransformListContext(this.context, this.state);
        this.enterRule(localContext, 92, FlinkSqlParser.RULE_transformList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 877;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 878;
            this.transform();
            this.state = 883;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 523) {
                {
                {
                this.state = 879;
                this.match(FlinkSqlParser.COMMA);
                this.state = 880;
                this.transform();
                }
                }
                this.state = 885;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 886;
            this.match(FlinkSqlParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public transform(): TransformContext {
        let localContext = new TransformContext(this.context, this.state);
        this.enterRule(localContext, 94, FlinkSqlParser.RULE_transform);
        let _la: number;
        try {
            this.state = 900;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
            case 1:
                localContext = new IdentityTransformContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 888;
                this.columnName();
                }
                break;
            case 2:
                localContext = new ApplyTransformContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 889;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 890;
                this.transformArgument();
                this.state = 895;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 523) {
                    {
                    {
                    this.state = 891;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 892;
                    this.transformArgument();
                    }
                    }
                    this.state = 897;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 898;
                this.match(FlinkSqlParser.RR_BRACKET);
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
    public transformArgument(): TransformArgumentContext {
        let localContext = new TransformArgumentContext(this.context, this.state);
        this.enterRule(localContext, 96, FlinkSqlParser.RULE_transformArgument);
        try {
            this.state = 904;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 72, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 902;
                this.qualifiedName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 903;
                this.constant();
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
    public likeDefinition(): LikeDefinitionContext {
        let localContext = new LikeDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 98, FlinkSqlParser.RULE_likeDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 906;
            this.match(FlinkSqlParser.KW_LIKE);
            this.state = 907;
            this.tablePath();
            this.state = 916;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context) ) {
            case 1:
                {
                this.state = 908;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 912;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 268 || _la === 458 || _la === 465) {
                    {
                    {
                    this.state = 909;
                    this.likeOption();
                    }
                    }
                    this.state = 914;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 915;
                this.match(FlinkSqlParser.RR_BRACKET);
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
    public likeOption(): LikeOptionContext {
        let localContext = new LikeOptionContext(this.context, this.state);
        this.enterRule(localContext, 100, FlinkSqlParser.RULE_likeOption);
        let _la: number;
        try {
            this.state = 922;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 75, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 918;
                _la = this.tokenStream.LA(1);
                if(!(_la === 458 || _la === 465)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 919;
                _la = this.tokenStream.LA(1);
                if(!(_la === 5 || _la === 272 || _la === 447)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 920;
                _la = this.tokenStream.LA(1);
                if(!(_la === 268 || _la === 458 || _la === 465)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 921;
                _la = this.tokenStream.LA(1);
                if(!(_la === 428 || _la === 461 || _la === 480)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
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
    public createCatalog(): CreateCatalogContext {
        let localContext = new CreateCatalogContext(this.context, this.state);
        this.enterRule(localContext, 102, FlinkSqlParser.RULE_createCatalog);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 924;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 925;
            this.match(FlinkSqlParser.KW_CATALOG);
            this.state = 926;
            this.catalogPathCreate();
            this.state = 927;
            this.withOption();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createDatabase(): CreateDatabaseContext {
        let localContext = new CreateDatabaseContext(this.context, this.state);
        this.enterRule(localContext, 104, FlinkSqlParser.RULE_createDatabase);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 929;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 930;
            this.match(FlinkSqlParser.KW_DATABASE);
            this.state = 932;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 168) {
                {
                this.state = 931;
                this.ifNotExists();
                }
            }

            this.state = 934;
            this.databasePathCreate();
            this.state = 937;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 935;
                this.match(FlinkSqlParser.KW_COMMENT);
                this.state = 936;
                localContext._comment = this.match(FlinkSqlParser.STRING_LITERAL);
                }
            }

            this.state = 939;
            this.withOption();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 106, FlinkSqlParser.RULE_createView);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 941;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 943;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 500) {
                {
                this.state = 942;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
            }

            this.state = 945;
            this.match(FlinkSqlParser.KW_VIEW);
            this.state = 947;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 168) {
                {
                this.state = 946;
                this.ifNotExists();
                }
            }

            this.state = 949;
            this.viewPathCreate();
            this.state = 951;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 519) {
                {
                this.state = 950;
                this.columnNameList();
                }
            }

            this.state = 955;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 953;
                this.match(FlinkSqlParser.KW_COMMENT);
                this.state = 954;
                localContext._comment = this.match(FlinkSqlParser.STRING_LITERAL);
                }
            }

            this.state = 957;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 958;
            this.queryStatement(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 108, FlinkSqlParser.RULE_createFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 960;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 964;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context) ) {
            case 1:
                {
                this.state = 961;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
                break;
            case 2:
                {
                this.state = 962;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                this.state = 963;
                this.match(FlinkSqlParser.KW_SYSTEM);
                }
                break;
            }
            this.state = 966;
            this.match(FlinkSqlParser.KW_FUNCTION);
            this.state = 968;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 168) {
                {
                this.state = 967;
                this.ifNotExists();
                }
            }

            this.state = 970;
            this.functionNameCreate();
            this.state = 971;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 972;
            this.identifier();
            this.state = 975;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 197) {
                {
                this.state = 973;
                this.match(FlinkSqlParser.KW_LANGUAGE);
                this.state = 974;
                _la = this.tokenStream.LA(1);
                if(!(_la === 332 || _la === 468 || _la === 484)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 978;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 415) {
                {
                this.state = 977;
                this.usingClause();
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
    public usingClause(): UsingClauseContext {
        let localContext = new UsingClauseContext(this.context, this.state);
        this.enterRule(localContext, 110, FlinkSqlParser.RULE_usingClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 980;
            this.match(FlinkSqlParser.KW_USING);
            this.state = 981;
            this.match(FlinkSqlParser.KW_JAR);
            this.state = 982;
            this.jarFileName();
            this.state = 988;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 523) {
                {
                {
                this.state = 983;
                this.match(FlinkSqlParser.COMMA);
                this.state = 984;
                this.match(FlinkSqlParser.KW_JAR);
                this.state = 985;
                this.jarFileName();
                }
                }
                this.state = 990;
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
    public jarFileName(): JarFileNameContext {
        let localContext = new JarFileNameContext(this.context, this.state);
        this.enterRule(localContext, 112, FlinkSqlParser.RULE_jarFileName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 991;
            this.match(FlinkSqlParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterTable(): AlterTableContext {
        let localContext = new AlterTableContext(this.context, this.state);
        this.enterRule(localContext, 114, FlinkSqlParser.RULE_alterTable);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 993;
            this.match(FlinkSqlParser.KW_ALTER);
            this.state = 994;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 996;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 168) {
                {
                this.state = 995;
                this.ifExists();
                }
            }

            this.state = 998;
            this.tablePath();
            this.state = 1004;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 88, this.context) ) {
            case 1:
                {
                this.state = 999;
                this.renameDefinition();
                }
                break;
            case 2:
                {
                this.state = 1000;
                this.setKeyValueDefinition();
                }
                break;
            case 3:
                {
                this.state = 1001;
                this.addConstraint();
                }
                break;
            case 4:
                {
                this.state = 1002;
                this.dropConstraint();
                }
                break;
            case 5:
                {
                this.state = 1003;
                this.addUnique();
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
    public renameDefinition(): RenameDefinitionContext {
        let localContext = new RenameDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 116, FlinkSqlParser.RULE_renameDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1006;
            this.match(FlinkSqlParser.KW_RENAME);
            this.state = 1008;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 440)) & ~0x1F) === 0 && ((1 << (_la - 440)) & 4294967295) !== 0) || ((((_la - 472)) & ~0x1F) === 0 && ((1 << (_la - 472)) & 4294967295) !== 0) || ((((_la - 504)) & ~0x1F) === 0 && ((1 << (_la - 504)) & 15) !== 0) || ((((_la - 540)) & ~0x1F) === 0 && ((1 << (_la - 540)) & 19) !== 0)) {
                {
                this.state = 1007;
                this.uid();
                }
            }

            this.state = 1010;
            this.match(FlinkSqlParser.KW_TO);
            this.state = 1011;
            this.uid();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public setKeyValueDefinition(): SetKeyValueDefinitionContext {
        let localContext = new SetKeyValueDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 118, FlinkSqlParser.RULE_setKeyValueDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1013;
            this.match(FlinkSqlParser.KW_SET);
            this.state = 1014;
            this.tablePropertyList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public addConstraint(): AddConstraintContext {
        let localContext = new AddConstraintContext(this.context, this.state);
        this.enterRule(localContext, 120, FlinkSqlParser.RULE_addConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1016;
            this.match(FlinkSqlParser.KW_ADD);
            this.state = 1017;
            this.match(FlinkSqlParser.KW_CONSTRAINT);
            this.state = 1018;
            this.constraintName();
            this.state = 1019;
            this.match(FlinkSqlParser.KW_PRIMARY);
            this.state = 1020;
            this.match(FlinkSqlParser.KW_KEY);
            this.state = 1021;
            this.columnNameList();
            this.state = 1023;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 243) {
                {
                this.state = 1022;
                this.notForced();
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
    public dropConstraint(): DropConstraintContext {
        let localContext = new DropConstraintContext(this.context, this.state);
        this.enterRule(localContext, 122, FlinkSqlParser.RULE_dropConstraint);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1025;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1026;
            this.match(FlinkSqlParser.KW_CONSTRAINT);
            this.state = 1027;
            this.constraintName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public addUnique(): AddUniqueContext {
        let localContext = new AddUniqueContext(this.context, this.state);
        this.enterRule(localContext, 124, FlinkSqlParser.RULE_addUnique);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1029;
            this.match(FlinkSqlParser.KW_ADD);
            this.state = 1030;
            this.match(FlinkSqlParser.KW_UNIQUE);
            this.state = 1031;
            this.columnNameList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public notForced(): NotForcedContext {
        let localContext = new NotForcedContext(this.context, this.state);
        this.enterRule(localContext, 126, FlinkSqlParser.RULE_notForced);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1033;
            this.match(FlinkSqlParser.KW_NOT);
            this.state = 1034;
            this.match(FlinkSqlParser.KW_ENFORCED);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 128, FlinkSqlParser.RULE_alterView);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1036;
            this.match(FlinkSqlParser.KW_ALTER);
            this.state = 1037;
            this.match(FlinkSqlParser.KW_VIEW);
            this.state = 1038;
            this.viewPath();
            this.state = 1042;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_RENAME:
                {
                this.state = 1039;
                this.renameDefinition();
                }
                break;
            case FlinkSqlParser.KW_AS:
                {
                this.state = 1040;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 1041;
                this.queryStatement(0);
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
    public alterDatabase(): AlterDatabaseContext {
        let localContext = new AlterDatabaseContext(this.context, this.state);
        this.enterRule(localContext, 130, FlinkSqlParser.RULE_alterDatabase);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1044;
            this.match(FlinkSqlParser.KW_ALTER);
            this.state = 1045;
            this.match(FlinkSqlParser.KW_DATABASE);
            this.state = 1046;
            this.databasePath();
            this.state = 1047;
            this.setKeyValueDefinition();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterFunction(): AlterFunctionContext {
        let localContext = new AlterFunctionContext(this.context, this.state);
        this.enterRule(localContext, 132, FlinkSqlParser.RULE_alterFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1049;
            this.match(FlinkSqlParser.KW_ALTER);
            this.state = 1053;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 92, this.context) ) {
            case 1:
                {
                this.state = 1050;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
                break;
            case 2:
                {
                this.state = 1051;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                this.state = 1052;
                this.match(FlinkSqlParser.KW_SYSTEM);
                }
                break;
            }
            this.state = 1055;
            this.match(FlinkSqlParser.KW_FUNCTION);
            this.state = 1057;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 93, this.context) ) {
            case 1:
                {
                this.state = 1056;
                this.ifExists();
                }
                break;
            }
            this.state = 1059;
            this.functionName();
            this.state = 1060;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 1061;
            this.identifier();
            this.state = 1064;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 197) {
                {
                this.state = 1062;
                this.match(FlinkSqlParser.KW_LANGUAGE);
                this.state = 1063;
                _la = this.tokenStream.LA(1);
                if(!(_la === 332 || _la === 468 || _la === 484)) {
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
    public dropCatalog(): DropCatalogContext {
        let localContext = new DropCatalogContext(this.context, this.state);
        this.enterRule(localContext, 134, FlinkSqlParser.RULE_dropCatalog);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1066;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1067;
            this.match(FlinkSqlParser.KW_CATALOG);
            this.state = 1069;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 168) {
                {
                this.state = 1068;
                this.ifExists();
                }
            }

            this.state = 1071;
            this.catalogPath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 136, FlinkSqlParser.RULE_dropTable);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1073;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1075;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 500) {
                {
                this.state = 1074;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
            }

            this.state = 1077;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 1079;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 168) {
                {
                this.state = 1078;
                this.ifExists();
                }
            }

            this.state = 1081;
            this.tablePath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dropDatabase(): DropDatabaseContext {
        let localContext = new DropDatabaseContext(this.context, this.state);
        this.enterRule(localContext, 138, FlinkSqlParser.RULE_dropDatabase);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1083;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1084;
            this.match(FlinkSqlParser.KW_DATABASE);
            this.state = 1086;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 168) {
                {
                this.state = 1085;
                this.ifExists();
                }
            }

            this.state = 1088;
            this.databasePath();
            this.state = 1090;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 443 || _la === 493) {
                {
                this.state = 1089;
                localContext._dropType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 443 || _la === 493)) {
                    localContext._dropType = this.errorHandler.recoverInline(this);
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
        this.enterRule(localContext, 140, FlinkSqlParser.RULE_dropView);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1092;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1094;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 500) {
                {
                this.state = 1093;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
            }

            this.state = 1096;
            this.match(FlinkSqlParser.KW_VIEW);
            this.state = 1098;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 168) {
                {
                this.state = 1097;
                this.ifExists();
                }
            }

            this.state = 1100;
            this.viewPath();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 142, FlinkSqlParser.RULE_dropFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1102;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1106;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 102, this.context) ) {
            case 1:
                {
                this.state = 1103;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
                break;
            case 2:
                {
                this.state = 1104;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                this.state = 1105;
                this.match(FlinkSqlParser.KW_SYSTEM);
                }
                break;
            }
            this.state = 1108;
            this.match(FlinkSqlParser.KW_FUNCTION);
            this.state = 1110;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 103, this.context) ) {
            case 1:
                {
                this.state = 1109;
                this.ifExists();
                }
                break;
            }
            this.state = 1112;
            this.functionName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 144, FlinkSqlParser.RULE_insertStatement);
        let _la: number;
        try {
            this.state = 1121;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 105, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 1115;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 132) {
                    {
                    this.state = 1114;
                    this.match(FlinkSqlParser.KW_EXECUTE);
                    }
                }

                this.state = 1117;
                this.insertSimpleStatement();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1118;
                this.insertMulStatementCompatibility();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 1119;
                this.match(FlinkSqlParser.KW_EXECUTE);
                this.state = 1120;
                this.insertMulStatement();
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
    public insertSimpleStatement(): InsertSimpleStatementContext {
        let localContext = new InsertSimpleStatementContext(this.context, this.state);
        this.enterRule(localContext, 146, FlinkSqlParser.RULE_insertSimpleStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1123;
            this.match(FlinkSqlParser.KW_INSERT);
            this.state = 1124;
            _la = this.tokenStream.LA(1);
            if(!(_la === 184 || _la === 267)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1125;
            this.tablePath();
            this.state = 1134;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 108, this.context) ) {
            case 1:
                {
                this.state = 1127;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 270) {
                    {
                    this.state = 1126;
                    this.insertPartitionDefinition();
                    }
                }

                this.state = 1130;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 107, this.context) ) {
                case 1:
                    {
                    this.state = 1129;
                    this.columnNameList();
                    }
                    break;
                }
                this.state = 1132;
                this.queryStatement(0);
                }
                break;
            case 2:
                {
                this.state = 1133;
                this.valuesDefinition();
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
    public insertPartitionDefinition(): InsertPartitionDefinitionContext {
        let localContext = new InsertPartitionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 148, FlinkSqlParser.RULE_insertPartitionDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1136;
            this.match(FlinkSqlParser.KW_PARTITION);
            this.state = 1137;
            this.tablePropertyList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public valuesDefinition(): ValuesDefinitionContext {
        let localContext = new ValuesDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 150, FlinkSqlParser.RULE_valuesDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1139;
            this.match(FlinkSqlParser.KW_VALUES);
            this.state = 1140;
            this.valuesRowDefinition();
            this.state = 1145;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 523) {
                {
                {
                this.state = 1141;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1142;
                this.valuesRowDefinition();
                }
                }
                this.state = 1147;
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
    public valuesRowDefinition(): ValuesRowDefinitionContext {
        let localContext = new ValuesRowDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 152, FlinkSqlParser.RULE_valuesRowDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1148;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1149;
            this.valueDefinition();
            this.state = 1154;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 523) {
                {
                {
                this.state = 1150;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1151;
                this.valueDefinition();
                }
                }
                this.state = 1156;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1157;
            this.match(FlinkSqlParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public valueDefinition(): ValueDefinitionContext {
        let localContext = new ValueDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 154, FlinkSqlParser.RULE_valueDefinition);
        try {
            this.state = 1161;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 111, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1159;
                this.constant();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1160;
                this.functionCallExpression();
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
    public insertMulStatementCompatibility(): InsertMulStatementCompatibilityContext {
        let localContext = new InsertMulStatementCompatibilityContext(this.context, this.state);
        this.enterRule(localContext, 156, FlinkSqlParser.RULE_insertMulStatementCompatibility);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1163;
            this.match(FlinkSqlParser.KW_BEGIN);
            this.state = 1164;
            this.match(FlinkSqlParser.KW_STATEMENT);
            this.state = 1165;
            this.match(FlinkSqlParser.KW_SET);
            this.state = 1166;
            this.match(FlinkSqlParser.SEMICOLON);
            this.state = 1170;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1167;
                this.insertSimpleStatement();
                this.state = 1168;
                this.match(FlinkSqlParser.SEMICOLON);
                }
                }
                this.state = 1172;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 178);
            this.state = 1174;
            this.match(FlinkSqlParser.KW_END);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public insertMulStatement(): InsertMulStatementContext {
        let localContext = new InsertMulStatementContext(this.context, this.state);
        this.enterRule(localContext, 158, FlinkSqlParser.RULE_insertMulStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1176;
            this.match(FlinkSqlParser.KW_STATEMENT);
            this.state = 1177;
            this.match(FlinkSqlParser.KW_SET);
            this.state = 1178;
            this.match(FlinkSqlParser.KW_BEGIN);
            this.state = 1182;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1179;
                this.insertSimpleStatement();
                this.state = 1180;
                this.match(FlinkSqlParser.SEMICOLON);
                }
                }
                this.state = 1184;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 178);
            this.state = 1186;
            this.match(FlinkSqlParser.KW_END);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public queryStatement(): QueryStatementContext;
    public queryStatement(_p: number): QueryStatementContext;
    public queryStatement(_p?: number): QueryStatementContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new QueryStatementContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 160;
        this.enterRecursionRule(localContext, 160, FlinkSqlParser.RULE_queryStatement, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1211;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 118, this.context) ) {
            case 1:
                {
                this.state = 1189;
                this.valuesClause();
                }
                break;
            case 2:
                {
                this.state = 1190;
                this.withClause();
                this.state = 1191;
                this.queryStatement(5);
                }
                break;
            case 3:
                {
                this.state = 1193;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1194;
                this.queryStatement(0);
                this.state = 1195;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                {
                this.state = 1197;
                this.selectClause();
                this.state = 1199;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 114, this.context) ) {
                case 1:
                    {
                    this.state = 1198;
                    this.orderByClause();
                    }
                    break;
                }
                this.state = 1202;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 115, this.context) ) {
                case 1:
                    {
                    this.state = 1201;
                    this.limitClause();
                    }
                    break;
                }
                }
                break;
            case 5:
                {
                this.state = 1204;
                this.selectStatement();
                this.state = 1206;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 116, this.context) ) {
                case 1:
                    {
                    this.state = 1205;
                    this.orderByClause();
                    }
                    break;
                }
                this.state = 1209;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 117, this.context) ) {
                case 1:
                    {
                    this.state = 1208;
                    this.limitClause();
                    }
                    break;
                }
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1227;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 122, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new QueryStatementContext(parentContext, parentState);
                    localContext._left = previousContext;
                    this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_queryStatement);
                    this.state = 1213;
                    if (!(this.precpred(this.context, 3))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                    }
                    this.state = 1214;
                    localContext._operator = this.tokenStream.LT(1);
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 130 || _la === 181 || _la === 405)) {
                        localContext._operator = this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1216;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 5) {
                        {
                        this.state = 1215;
                        this.match(FlinkSqlParser.KW_ALL);
                        }
                    }

                    this.state = 1218;
                    localContext._right = this.queryStatement(0);
                    this.state = 1220;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 120, this.context) ) {
                    case 1:
                        {
                        this.state = 1219;
                        this.orderByClause();
                        }
                        break;
                    }
                    this.state = 1223;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 121, this.context) ) {
                    case 1:
                        {
                        this.state = 1222;
                        this.limitClause();
                        }
                        break;
                    }
                    }
                    }
                }
                this.state = 1229;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 122, this.context);
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
    public valuesClause(): ValuesClauseContext {
        let localContext = new ValuesClauseContext(this.context, this.state);
        this.enterRule(localContext, 162, FlinkSqlParser.RULE_valuesClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1230;
            this.match(FlinkSqlParser.KW_VALUES);
            this.state = 1231;
            this.expression();
            this.state = 1236;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 123, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1232;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1233;
                    this.expression();
                    }
                    }
                }
                this.state = 1238;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 123, this.context);
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
    public withClause(): WithClauseContext {
        let localContext = new WithClauseContext(this.context, this.state);
        this.enterRule(localContext, 164, FlinkSqlParser.RULE_withClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1239;
            this.match(FlinkSqlParser.KW_WITH);
            this.state = 1240;
            this.withItem();
            this.state = 1245;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 523) {
                {
                {
                this.state = 1241;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1242;
                this.withItem();
                }
                }
                this.state = 1247;
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
    public withItem(): WithItemContext {
        let localContext = new WithItemContext(this.context, this.state);
        this.enterRule(localContext, 166, FlinkSqlParser.RULE_withItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1248;
            this.withItemName();
            this.state = 1260;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 519) {
                {
                this.state = 1249;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1250;
                this.columnName();
                this.state = 1255;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 523) {
                    {
                    {
                    this.state = 1251;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1252;
                    this.columnName();
                    }
                    }
                    this.state = 1257;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1258;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
            }

            this.state = 1262;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 1263;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1264;
            this.queryStatement(0);
            this.state = 1265;
            this.match(FlinkSqlParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public withItemName(): WithItemNameContext {
        let localContext = new WithItemNameContext(this.context, this.state);
        this.enterRule(localContext, 168, FlinkSqlParser.RULE_withItemName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1267;
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
    public selectStatement(): SelectStatementContext {
        let localContext = new SelectStatementContext(this.context, this.state);
        this.enterRule(localContext, 170, FlinkSqlParser.RULE_selectStatement);
        try {
            this.state = 1289;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 132, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1269;
                this.selectClause();
                this.state = 1271;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 127, this.context) ) {
                case 1:
                    {
                    this.state = 1270;
                    this.fromClause();
                    }
                    break;
                }
                this.state = 1274;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 128, this.context) ) {
                case 1:
                    {
                    this.state = 1273;
                    this.whereClause();
                    }
                    break;
                }
                this.state = 1277;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 129, this.context) ) {
                case 1:
                    {
                    this.state = 1276;
                    this.groupByClause();
                    }
                    break;
                }
                this.state = 1280;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 130, this.context) ) {
                case 1:
                    {
                    this.state = 1279;
                    this.havingClause();
                    }
                    break;
                }
                this.state = 1283;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 131, this.context) ) {
                case 1:
                    {
                    this.state = 1282;
                    this.windowClause();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1285;
                this.selectClause();
                this.state = 1286;
                this.fromClause();
                this.state = 1287;
                this.matchRecognizeClause();
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
    public selectClause(): SelectClauseContext {
        let localContext = new SelectClauseContext(this.context, this.state);
        this.enterRule(localContext, 172, FlinkSqlParser.RULE_selectClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1291;
            this.match(FlinkSqlParser.KW_SELECT);
            this.state = 1293;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 133, this.context) ) {
            case 1:
                {
                this.state = 1292;
                this.setQuantifier();
                }
                break;
            }
            this.state = 1304;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 135, this.context) ) {
            case 1:
                {
                this.state = 1295;
                this.match(FlinkSqlParser.ASTERISK_SIGN);
                }
                break;
            case 2:
                {
                this.state = 1296;
                this.projectItemDefinition();
                this.state = 1301;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 134, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1297;
                        this.match(FlinkSqlParser.COMMA);
                        this.state = 1298;
                        this.projectItemDefinition();
                        }
                        }
                    }
                    this.state = 1303;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 134, this.context);
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
    public projectItemDefinition(): ProjectItemDefinitionContext {
        let localContext = new ProjectItemDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 174, FlinkSqlParser.RULE_projectItemDefinition);
        let _la: number;
        try {
            this.state = 1321;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 140, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1306;
                this.overWindowItem();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1307;
                this.expression();
                this.state = 1312;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 137, this.context) ) {
                case 1:
                    {
                    this.state = 1309;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 136, this.context) ) {
                    case 1:
                        {
                        this.state = 1308;
                        this.match(FlinkSqlParser.KW_AS);
                        }
                        break;
                    }
                    this.state = 1311;
                    this.columnName();
                    }
                    break;
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1314;
                this.columnName();
                this.state = 1319;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 139, this.context) ) {
                case 1:
                    {
                    this.state = 1316;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 17) {
                        {
                        this.state = 1315;
                        this.match(FlinkSqlParser.KW_AS);
                        }
                    }

                    this.state = 1318;
                    this.expression();
                    }
                    break;
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
    public overWindowItem(): OverWindowItemContext {
        let localContext = new OverWindowItemContext(this.context, this.state);
        this.enterRule(localContext, 176, FlinkSqlParser.RULE_overWindowItem);
        try {
            this.state = 1335;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 141, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1323;
                this.primaryExpression(0);
                this.state = 1324;
                this.match(FlinkSqlParser.KW_OVER);
                this.state = 1325;
                this.windowSpec();
                this.state = 1326;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 1327;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1329;
                this.primaryExpression(0);
                this.state = 1330;
                this.match(FlinkSqlParser.KW_OVER);
                this.state = 1331;
                this.errorCapturingIdentifier();
                this.state = 1332;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 1333;
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
    public fromClause(): FromClauseContext {
        let localContext = new FromClauseContext(this.context, this.state);
        this.enterRule(localContext, 178, FlinkSqlParser.RULE_fromClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1337;
            this.match(FlinkSqlParser.KW_FROM);
            this.state = 1338;
            this.tableExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public tableExpression(): TableExpressionContext;
    public tableExpression(_p: number): TableExpressionContext;
    public tableExpression(_p?: number): TableExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new TableExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 180;
        this.enterRecursionRule(localContext, 180, FlinkSqlParser.RULE_tableExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1351;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 143, this.context) ) {
            case 1:
                {
                this.state = 1341;
                this.tableReference();
                this.state = 1346;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 142, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1342;
                        this.match(FlinkSqlParser.COMMA);
                        this.state = 1343;
                        this.tableReference();
                        }
                        }
                    }
                    this.state = 1348;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 142, this.context);
                }
                }
                break;
            case 2:
                {
                this.state = 1349;
                this.inlineDataValueClause();
                }
                break;
            case 3:
                {
                this.state = 1350;
                this.windowTVFClause();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1374;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 149, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1372;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 148, this.context) ) {
                    case 1:
                        {
                        localContext = new TableExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_tableExpression);
                        this.state = 1353;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1354;
                        this.match(FlinkSqlParser.KW_CROSS);
                        this.state = 1355;
                        this.match(FlinkSqlParser.KW_JOIN);
                        this.state = 1356;
                        this.tableExpression(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new TableExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_tableExpression);
                        this.state = 1357;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 1359;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 235) {
                            {
                            this.state = 1358;
                            this.match(FlinkSqlParser.KW_NATURAL);
                            }
                        }

                        this.state = 1362;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 153 || _la === 175 || _la === 203 || _la === 319) {
                            {
                            this.state = 1361;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 153 || _la === 175 || _la === 203 || _la === 319)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                        }

                        this.state = 1365;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 263) {
                            {
                            this.state = 1364;
                            this.match(FlinkSqlParser.KW_OUTER);
                            }
                        }

                        this.state = 1367;
                        this.match(FlinkSqlParser.KW_JOIN);
                        this.state = 1368;
                        this.tableExpression(0);
                        this.state = 1370;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 147, this.context) ) {
                        case 1:
                            {
                            this.state = 1369;
                            this.joinCondition();
                            }
                            break;
                        }
                        }
                        break;
                    }
                    }
                }
                this.state = 1376;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 149, this.context);
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
    public tableReference(): TableReferenceContext {
        let localContext = new TableReferenceContext(this.context, this.state);
        this.enterRule(localContext, 182, FlinkSqlParser.RULE_tableReference);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1377;
            this.tablePrimary();
            this.state = 1379;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 150, this.context) ) {
            case 1:
                {
                this.state = 1378;
                this.tableAlias();
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
    public tablePrimary(): TablePrimaryContext {
        let localContext = new TablePrimaryContext(this.context, this.state);
        this.enterRule(localContext, 184, FlinkSqlParser.RULE_tablePrimary);
        let _la: number;
        try {
            this.state = 1410;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 155, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1382;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 375) {
                    {
                    this.state = 1381;
                    this.match(FlinkSqlParser.KW_TABLE);
                    }
                }

                this.state = 1384;
                this.tablePath();
                this.state = 1386;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 152, this.context) ) {
                case 1:
                    {
                    this.state = 1385;
                    this.systemTimePeriod();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1388;
                this.viewPath();
                this.state = 1390;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 153, this.context) ) {
                case 1:
                    {
                    this.state = 1389;
                    this.systemTimePeriod();
                    }
                    break;
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1392;
                this.match(FlinkSqlParser.KW_LATERAL);
                this.state = 1393;
                this.match(FlinkSqlParser.KW_TABLE);
                this.state = 1394;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1395;
                this.functionCallExpression();
                this.state = 1396;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1399;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 200) {
                    {
                    this.state = 1398;
                    this.match(FlinkSqlParser.KW_LATERAL);
                    }
                }

                this.state = 1401;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1402;
                this.queryStatement(0);
                this.state = 1403;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1405;
                this.match(FlinkSqlParser.KW_UNNEST);
                this.state = 1406;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1407;
                this.expression();
                this.state = 1408;
                this.match(FlinkSqlParser.RR_BRACKET);
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
    public systemTimePeriod(): SystemTimePeriodContext {
        let localContext = new SystemTimePeriodContext(this.context, this.state);
        this.enterRule(localContext, 186, FlinkSqlParser.RULE_systemTimePeriod);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1412;
            this.match(FlinkSqlParser.KW_FOR);
            this.state = 1413;
            this.match(FlinkSqlParser.KW_SYSTEM_TIME);
            this.state = 1414;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 1415;
            this.match(FlinkSqlParser.KW_OF);
            this.state = 1416;
            this.dateTimeExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dateTimeExpression(): DateTimeExpressionContext {
        let localContext = new DateTimeExpressionContext(this.context, this.state);
        this.enterRule(localContext, 188, FlinkSqlParser.RULE_dateTimeExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1418;
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
    public inlineDataValueClause(): InlineDataValueClauseContext {
        let localContext = new InlineDataValueClauseContext(this.context, this.state);
        this.enterRule(localContext, 190, FlinkSqlParser.RULE_inlineDataValueClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1420;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1421;
            this.valuesDefinition();
            this.state = 1422;
            this.match(FlinkSqlParser.RR_BRACKET);
            this.state = 1423;
            this.tableAlias();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowTVFClause(): WindowTVFClauseContext {
        let localContext = new WindowTVFClauseContext(this.context, this.state);
        this.enterRule(localContext, 192, FlinkSqlParser.RULE_windowTVFClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1425;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 1426;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1427;
            this.windowTVFExpression();
            this.state = 1428;
            this.match(FlinkSqlParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowTVFExpression(): WindowTVFExpressionContext {
        let localContext = new WindowTVFExpressionContext(this.context, this.state);
        this.enterRule(localContext, 194, FlinkSqlParser.RULE_windowTVFExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1430;
            this.windowTVFName();
            this.state = 1431;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1432;
            this.windowTVFParam();
            this.state = 1437;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 523) {
                {
                {
                this.state = 1433;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1434;
                this.windowTVFParam();
                }
                }
                this.state = 1439;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1440;
            this.match(FlinkSqlParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowTVFName(): WindowTVFNameContext {
        let localContext = new WindowTVFNameContext(this.context, this.state);
        this.enterRule(localContext, 196, FlinkSqlParser.RULE_windowTVFName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1442;
            _la = this.tokenStream.LA(1);
            if(!(_la === 448 || _la === 462 || _la === 502)) {
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
    public windowTVFParam(): WindowTVFParamContext {
        let localContext = new WindowTVFParamContext(this.context, this.state);
        this.enterRule(localContext, 198, FlinkSqlParser.RULE_windowTVFParam);
        try {
            this.state = 1459;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 157, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1444;
                this.match(FlinkSqlParser.KW_TABLE);
                this.state = 1445;
                this.timeAttrColumn();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1446;
                this.columnDescriptor();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1447;
                this.timeIntervalExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1448;
                this.match(FlinkSqlParser.KW_DATA);
                this.state = 1449;
                this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
                this.state = 1450;
                this.match(FlinkSqlParser.KW_TABLE);
                this.state = 1451;
                this.timeAttrColumn();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1452;
                this.match(FlinkSqlParser.KW_TIMECOL);
                this.state = 1453;
                this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
                this.state = 1454;
                this.columnDescriptor();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1455;
                this.timeIntervalParamName();
                this.state = 1456;
                this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
                this.state = 1457;
                this.timeIntervalExpression();
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
    public timeIntervalParamName(): TimeIntervalParamNameContext {
        let localContext = new TimeIntervalParamNameContext(this.context, this.state);
        this.enterRule(localContext, 200, FlinkSqlParser.RULE_timeIntervalParamName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1461;
            _la = this.tokenStream.LA(1);
            if(!(_la === 252 || _la === 449 || ((((_la - 497)) & ~0x1F) === 0 && ((1 << (_la - 497)) & 23) !== 0))) {
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
    public columnDescriptor(): ColumnDescriptorContext {
        let localContext = new ColumnDescriptorContext(this.context, this.state);
        this.enterRule(localContext, 202, FlinkSqlParser.RULE_columnDescriptor);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1463;
            this.match(FlinkSqlParser.KW_DESCRIPTOR);
            this.state = 1464;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1465;
            this.columnName();
            this.state = 1466;
            this.match(FlinkSqlParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public joinCondition(): JoinConditionContext {
        let localContext = new JoinConditionContext(this.context, this.state);
        this.enterRule(localContext, 204, FlinkSqlParser.RULE_joinCondition);
        try {
            this.state = 1472;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_ON:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1468;
                this.match(FlinkSqlParser.KW_ON);
                this.state = 1469;
                this.booleanExpression(0);
                }
                break;
            case FlinkSqlParser.KW_USING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1470;
                this.match(FlinkSqlParser.KW_USING);
                this.state = 1471;
                this.columnNameList();
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
    public whereClause(): WhereClauseContext {
        let localContext = new WhereClauseContext(this.context, this.state);
        this.enterRule(localContext, 206, FlinkSqlParser.RULE_whereClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1474;
            this.match(FlinkSqlParser.KW_WHERE);
            this.state = 1475;
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
    public groupByClause(): GroupByClauseContext {
        let localContext = new GroupByClauseContext(this.context, this.state);
        this.enterRule(localContext, 208, FlinkSqlParser.RULE_groupByClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1477;
            this.match(FlinkSqlParser.KW_GROUP);
            this.state = 1478;
            this.match(FlinkSqlParser.KW_BY);
            this.state = 1479;
            this.groupItemDefinition();
            this.state = 1484;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 159, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1480;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1481;
                    this.groupItemDefinition();
                    }
                    }
                }
                this.state = 1486;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 159, this.context);
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
    public groupItemDefinition(): GroupItemDefinitionContext {
        let localContext = new GroupItemDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 210, FlinkSqlParser.RULE_groupItemDefinition);
        let _la: number;
        try {
            this.state = 1527;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 163, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1487;
                this.columnName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1488;
                this.groupWindowFunction();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1489;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1490;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1491;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1492;
                this.expression();
                this.state = 1497;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 523) {
                    {
                    {
                    this.state = 1493;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1494;
                    this.expression();
                    }
                    }
                    this.state = 1499;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1500;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1502;
                this.groupingSetsNotationName();
                this.state = 1503;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1504;
                this.expression();
                this.state = 1509;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 523) {
                    {
                    {
                    this.state = 1505;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1506;
                    this.expression();
                    }
                    }
                    this.state = 1511;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1512;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1514;
                this.groupingSets();
                this.state = 1515;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1516;
                this.groupItemDefinition();
                this.state = 1521;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 523) {
                    {
                    {
                    this.state = 1517;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1518;
                    this.groupItemDefinition();
                    }
                    }
                    this.state = 1523;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1524;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1526;
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
    public groupingSets(): GroupingSetsContext {
        let localContext = new GroupingSetsContext(this.context, this.state);
        this.enterRule(localContext, 212, FlinkSqlParser.RULE_groupingSets);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1529;
            this.match(FlinkSqlParser.KW_GROUPING);
            this.state = 1530;
            this.match(FlinkSqlParser.KW_SETS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupingSetsNotationName(): GroupingSetsNotationNameContext {
        let localContext = new GroupingSetsNotationNameContext(this.context, this.state);
        this.enterRule(localContext, 214, FlinkSqlParser.RULE_groupingSetsNotationName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1532;
            _la = this.tokenStream.LA(1);
            if(!(_la === 74 || _la === 322)) {
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
    public groupWindowFunction(): GroupWindowFunctionContext {
        let localContext = new GroupWindowFunctionContext(this.context, this.state);
        this.enterRule(localContext, 216, FlinkSqlParser.RULE_groupWindowFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1534;
            this.groupWindowFunctionName();
            this.state = 1535;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1536;
            this.timeAttrColumn();
            this.state = 1537;
            this.match(FlinkSqlParser.COMMA);
            this.state = 1538;
            this.timeIntervalExpression();
            this.state = 1539;
            this.match(FlinkSqlParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupWindowFunctionName(): GroupWindowFunctionNameContext {
        let localContext = new GroupWindowFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 218, FlinkSqlParser.RULE_groupWindowFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1541;
            _la = this.tokenStream.LA(1);
            if(!(_la === 462 || _la === 495 || _la === 502)) {
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
    public timeAttrColumn(): TimeAttrColumnContext {
        let localContext = new TimeAttrColumnContext(this.context, this.state);
        this.enterRule(localContext, 220, FlinkSqlParser.RULE_timeAttrColumn);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1543;
            this.uid();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 222, FlinkSqlParser.RULE_havingClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1545;
            this.match(FlinkSqlParser.KW_HAVING);
            this.state = 1546;
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
    public windowClause(): WindowClauseContext {
        let localContext = new WindowClauseContext(this.context, this.state);
        this.enterRule(localContext, 224, FlinkSqlParser.RULE_windowClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1548;
            this.match(FlinkSqlParser.KW_WINDOW);
            this.state = 1549;
            this.namedWindow();
            this.state = 1554;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 164, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1550;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1551;
                    this.namedWindow();
                    }
                    }
                }
                this.state = 1556;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 164, this.context);
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
    public namedWindow(): NamedWindowContext {
        let localContext = new NamedWindowContext(this.context, this.state);
        this.enterRule(localContext, 226, FlinkSqlParser.RULE_namedWindow);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1557;
            localContext._name = this.errorCapturingIdentifier();
            this.state = 1558;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 1559;
            this.windowSpec();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowSpec(): WindowSpecContext {
        let localContext = new WindowSpecContext(this.context, this.state);
        this.enterRule(localContext, 228, FlinkSqlParser.RULE_windowSpec);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1562;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 440)) & ~0x1F) === 0 && ((1 << (_la - 440)) & 4294967295) !== 0) || ((((_la - 472)) & ~0x1F) === 0 && ((1 << (_la - 472)) & 4294967295) !== 0) || ((((_la - 504)) & ~0x1F) === 0 && ((1 << (_la - 504)) & 15) !== 0) || ((((_la - 540)) & ~0x1F) === 0 && ((1 << (_la - 540)) & 19) !== 0)) {
                {
                this.state = 1561;
                localContext._name = this.errorCapturingIdentifier();
                }
            }

            this.state = 1564;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1566;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 270) {
                {
                this.state = 1565;
                this.partitionByClause();
                }
            }

            this.state = 1569;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 260) {
                {
                this.state = 1568;
                this.orderByClause();
                }
            }

            this.state = 1572;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 294 || _la === 324) {
                {
                this.state = 1571;
                this.windowFrame();
                }
            }

            this.state = 1574;
            this.match(FlinkSqlParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public matchRecognizeClause(): MatchRecognizeClauseContext {
        let localContext = new MatchRecognizeClauseContext(this.context, this.state);
        this.enterRule(localContext, 230, FlinkSqlParser.RULE_matchRecognizeClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1576;
            this.match(FlinkSqlParser.KW_MATCH_RECOGNIZE);
            this.state = 1577;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1579;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 270) {
                {
                this.state = 1578;
                this.partitionByClause();
                }
            }

            this.state = 1582;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 260) {
                {
                this.state = 1581;
                this.orderByClause();
                }
            }

            this.state = 1585;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 217) {
                {
                this.state = 1584;
                this.measuresClause();
                }
            }

            this.state = 1588;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5 || _la === 256) {
                {
                this.state = 1587;
                this.outputMode();
                }
            }

            this.state = 1591;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 441) {
                {
                this.state = 1590;
                this.afterMatchStrategy();
                }
            }

            this.state = 1594;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 273) {
                {
                this.state = 1593;
                this.patternDefinition();
                }
            }

            this.state = 1596;
            this.patternVariablesDefinition();
            this.state = 1597;
            this.match(FlinkSqlParser.RR_BRACKET);
            this.state = 1602;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 176, this.context) ) {
            case 1:
                {
                this.state = 1599;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                    this.state = 1598;
                    this.match(FlinkSqlParser.KW_AS);
                    }
                }

                this.state = 1601;
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
    public orderByClause(): OrderByClauseContext {
        let localContext = new OrderByClauseContext(this.context, this.state);
        this.enterRule(localContext, 232, FlinkSqlParser.RULE_orderByClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1604;
            this.match(FlinkSqlParser.KW_ORDER);
            this.state = 1605;
            this.match(FlinkSqlParser.KW_BY);
            this.state = 1606;
            this.orderItemDefinition();
            this.state = 1611;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 177, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1607;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1608;
                    this.orderItemDefinition();
                    }
                    }
                }
                this.state = 1613;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 177, this.context);
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
    public orderItemDefinition(): OrderItemDefinitionContext {
        let localContext = new OrderItemDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 234, FlinkSqlParser.RULE_orderItemDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1616;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 178, this.context) ) {
            case 1:
                {
                this.state = 1614;
                this.columnName();
                }
                break;
            case 2:
                {
                this.state = 1615;
                this.valueExpression(0);
                }
                break;
            }
            this.state = 1619;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 179, this.context) ) {
            case 1:
                {
                this.state = 1618;
                localContext._ordering = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 442 || _la === 453)) {
                    localContext._ordering = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 1623;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 180, this.context) ) {
            case 1:
                {
                this.state = 1621;
                this.match(FlinkSqlParser.KW_NULLS);
                this.state = 1622;
                localContext._nullOrder = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 460 || _la === 470)) {
                    localContext._nullOrder = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
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
    public limitClause(): LimitClauseContext {
        let localContext = new LimitClauseContext(this.context, this.state);
        this.enterRule(localContext, 236, FlinkSqlParser.RULE_limitClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1625;
            this.match(FlinkSqlParser.KW_LIMIT);
            this.state = 1628;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_ALL:
                {
                this.state = 1626;
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
            case FlinkSqlParser.KW_JSON_ARRAY:
            case FlinkSqlParser.KW_JSON_ARRAYAGG:
            case FlinkSqlParser.KW_JSON_EXISTS:
            case FlinkSqlParser.KW_JSON_OBJECT:
            case FlinkSqlParser.KW_JSON_OBJECTAGG:
            case FlinkSqlParser.KW_JSON_QUERY:
            case FlinkSqlParser.KW_JSON_VALUE:
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
            case FlinkSqlParser.HYPHEN_SIGN:
            case FlinkSqlParser.ADD_SIGN:
            case FlinkSqlParser.STRING_LITERAL:
            case FlinkSqlParser.DIG_LITERAL:
            case FlinkSqlParser.REAL_LITERAL:
            case FlinkSqlParser.BIT_STRING:
            case FlinkSqlParser.ID_LITERAL:
                {
                this.state = 1627;
                localContext._limit = this.expression();
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
    public partitionByClause(): PartitionByClauseContext {
        let localContext = new PartitionByClauseContext(this.context, this.state);
        this.enterRule(localContext, 238, FlinkSqlParser.RULE_partitionByClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1630;
            this.match(FlinkSqlParser.KW_PARTITION);
            this.state = 1631;
            this.match(FlinkSqlParser.KW_BY);
            this.state = 1634;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 182, this.context) ) {
            case 1:
                {
                this.state = 1632;
                this.columnName();
                }
                break;
            case 2:
                {
                this.state = 1633;
                this.primaryExpression(0);
                }
                break;
            }
            this.state = 1643;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 523) {
                {
                {
                this.state = 1636;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1639;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 183, this.context) ) {
                case 1:
                    {
                    this.state = 1637;
                    this.columnName();
                    }
                    break;
                case 2:
                    {
                    this.state = 1638;
                    this.primaryExpression(0);
                    }
                    break;
                }
                }
                }
                this.state = 1645;
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
    public quantifiers(): QuantifiersContext {
        let localContext = new QuantifiersContext(this.context, this.state);
        this.enterRule(localContext, 240, FlinkSqlParser.RULE_quantifiers);
        try {
            this.state = 1662;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 185, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 1646;
                this.match(FlinkSqlParser.ASTERISK_SIGN);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 1647;
                this.match(FlinkSqlParser.ADD_SIGN);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 1648;
                this.match(FlinkSqlParser.QUESTION_MARK_SIGN);
                }
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                {
                this.state = 1649;
                this.match(FlinkSqlParser.LB_BRACKET);
                this.state = 1650;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1651;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1652;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1653;
                this.match(FlinkSqlParser.RB_BRACKET);
                }
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                {
                this.state = 1654;
                this.match(FlinkSqlParser.LB_BRACKET);
                this.state = 1655;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1656;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1657;
                this.match(FlinkSqlParser.RB_BRACKET);
                }
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                {
                this.state = 1658;
                this.match(FlinkSqlParser.LB_BRACKET);
                this.state = 1659;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1660;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1661;
                this.match(FlinkSqlParser.RB_BRACKET);
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
    public measuresClause(): MeasuresClauseContext {
        let localContext = new MeasuresClauseContext(this.context, this.state);
        this.enterRule(localContext, 242, FlinkSqlParser.RULE_measuresClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1664;
            this.match(FlinkSqlParser.KW_MEASURES);
            this.state = 1665;
            this.projectItemDefinition();
            this.state = 1670;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 523) {
                {
                {
                this.state = 1666;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1667;
                this.projectItemDefinition();
                }
                }
                this.state = 1672;
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
    public patternDefinition(): PatternDefinitionContext {
        let localContext = new PatternDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 244, FlinkSqlParser.RULE_patternDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1673;
            this.match(FlinkSqlParser.KW_PATTERN);
            this.state = 1674;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1676;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1675;
                this.patternVariable();
                }
                }
                this.state = 1678;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 541 || _la === 544);
            this.state = 1680;
            this.match(FlinkSqlParser.RR_BRACKET);
            this.state = 1682;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 437) {
                {
                this.state = 1681;
                this.withinClause();
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
    public patternVariable(): PatternVariableContext {
        let localContext = new PatternVariableContext(this.context, this.state);
        this.enterRule(localContext, 246, FlinkSqlParser.RULE_patternVariable);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1684;
            this.unquotedIdentifier();
            this.state = 1686;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 521)) & ~0x1F) === 0 && ((1 << (_la - 521)) & 135681) !== 0)) {
                {
                this.state = 1685;
                this.quantifiers();
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
    public outputMode(): OutputModeContext {
        let localContext = new OutputModeContext(this.context, this.state);
        this.enterRule(localContext, 248, FlinkSqlParser.RULE_outputMode);
        try {
            this.state = 1696;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_ALL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1688;
                this.match(FlinkSqlParser.KW_ALL);
                this.state = 1689;
                this.match(FlinkSqlParser.KW_ROWS);
                this.state = 1690;
                this.match(FlinkSqlParser.KW_PER);
                this.state = 1691;
                this.match(FlinkSqlParser.KW_MATCH);
                }
                break;
            case FlinkSqlParser.KW_ONE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1692;
                this.match(FlinkSqlParser.KW_ONE);
                this.state = 1693;
                this.match(FlinkSqlParser.KW_ROW);
                this.state = 1694;
                this.match(FlinkSqlParser.KW_PER);
                this.state = 1695;
                this.match(FlinkSqlParser.KW_MATCH);
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
    public afterMatchStrategy(): AfterMatchStrategyContext {
        let localContext = new AfterMatchStrategyContext(this.context, this.state);
        this.enterRule(localContext, 250, FlinkSqlParser.RULE_afterMatchStrategy);
        try {
            this.state = 1722;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 191, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1698;
                this.match(FlinkSqlParser.KW_AFTER);
                this.state = 1699;
                this.match(FlinkSqlParser.KW_MATCH);
                this.state = 1700;
                this.match(FlinkSqlParser.KW_SKIP);
                this.state = 1701;
                this.match(FlinkSqlParser.KW_PAST);
                this.state = 1702;
                this.match(FlinkSqlParser.KW_LAST);
                this.state = 1703;
                this.match(FlinkSqlParser.KW_ROW);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1704;
                this.match(FlinkSqlParser.KW_AFTER);
                this.state = 1705;
                this.match(FlinkSqlParser.KW_MATCH);
                this.state = 1706;
                this.match(FlinkSqlParser.KW_SKIP);
                this.state = 1707;
                this.match(FlinkSqlParser.KW_TO);
                this.state = 1708;
                this.match(FlinkSqlParser.KW_NEXT);
                this.state = 1709;
                this.match(FlinkSqlParser.KW_ROW);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1710;
                this.match(FlinkSqlParser.KW_AFTER);
                this.state = 1711;
                this.match(FlinkSqlParser.KW_MATCH);
                this.state = 1712;
                this.match(FlinkSqlParser.KW_SKIP);
                this.state = 1713;
                this.match(FlinkSqlParser.KW_TO);
                this.state = 1714;
                this.match(FlinkSqlParser.KW_LAST);
                this.state = 1715;
                this.unquotedIdentifier();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1716;
                this.match(FlinkSqlParser.KW_AFTER);
                this.state = 1717;
                this.match(FlinkSqlParser.KW_MATCH);
                this.state = 1718;
                this.match(FlinkSqlParser.KW_SKIP);
                this.state = 1719;
                this.match(FlinkSqlParser.KW_TO);
                this.state = 1720;
                this.match(FlinkSqlParser.KW_FIRST);
                this.state = 1721;
                this.unquotedIdentifier();
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
    public patternVariablesDefinition(): PatternVariablesDefinitionContext {
        let localContext = new PatternVariablesDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 252, FlinkSqlParser.RULE_patternVariablesDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1724;
            this.match(FlinkSqlParser.KW_DEFINE);
            this.state = 1725;
            this.projectItemDefinition();
            this.state = 1730;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 523) {
                {
                {
                this.state = 1726;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1727;
                this.projectItemDefinition();
                }
                }
                this.state = 1732;
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
    public windowFrame(): WindowFrameContext {
        let localContext = new WindowFrameContext(this.context, this.state);
        this.enterRule(localContext, 254, FlinkSqlParser.RULE_windowFrame);
        let _la: number;
        try {
            this.state = 1748;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 193, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1733;
                this.match(FlinkSqlParser.KW_RANGE);
                this.state = 1734;
                this.match(FlinkSqlParser.KW_BETWEEN);
                this.state = 1735;
                this.timeIntervalExpression();
                this.state = 1736;
                this.frameBound();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1738;
                _la = this.tokenStream.LA(1);
                if(!(_la === 294 || _la === 324)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1739;
                this.match(FlinkSqlParser.KW_BETWEEN);
                this.state = 1740;
                this.frameStart();
                this.state = 1741;
                this.match(FlinkSqlParser.KW_AND);
                this.state = 1742;
                this.frameEnd();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1744;
                this.match(FlinkSqlParser.KW_ROWS);
                this.state = 1745;
                this.match(FlinkSqlParser.KW_BETWEEN);
                this.state = 1746;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1747;
                this.frameBound();
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
        this.enterRule(localContext, 256, FlinkSqlParser.RULE_frameBound);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1750;
            this.match(FlinkSqlParser.KW_PRECEDING);
            this.state = 1751;
            this.match(FlinkSqlParser.KW_AND);
            this.state = 1752;
            this.match(FlinkSqlParser.KW_CURRENT);
            this.state = 1753;
            this.match(FlinkSqlParser.KW_ROW);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public frameStart(): FrameStartContext {
        let localContext = new FrameStartContext(this.context, this.state);
        this.enterRule(localContext, 258, FlinkSqlParser.RULE_frameStart);
        try {
            this.state = 1761;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_UNBOUNDED:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1755;
                this.match(FlinkSqlParser.KW_UNBOUNDED);
                this.state = 1756;
                this.match(FlinkSqlParser.KW_PRECEDING);
                }
                break;
            case FlinkSqlParser.DIG_LITERAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1757;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1758;
                this.match(FlinkSqlParser.KW_PRECEDING);
                }
                break;
            case FlinkSqlParser.KW_CURRENT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1759;
                this.match(FlinkSqlParser.KW_CURRENT);
                this.state = 1760;
                this.match(FlinkSqlParser.KW_ROW);
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
    public frameEnd(): FrameEndContext {
        let localContext = new FrameEndContext(this.context, this.state);
        this.enterRule(localContext, 260, FlinkSqlParser.RULE_frameEnd);
        try {
            this.state = 1769;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_CURRENT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1763;
                this.match(FlinkSqlParser.KW_CURRENT);
                this.state = 1764;
                this.match(FlinkSqlParser.KW_ROW);
                }
                break;
            case FlinkSqlParser.DIG_LITERAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1765;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1766;
                this.match(FlinkSqlParser.KW_FOLLOWING);
                }
                break;
            case FlinkSqlParser.KW_UNBOUNDED:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1767;
                this.match(FlinkSqlParser.KW_UNBOUNDED);
                this.state = 1768;
                this.match(FlinkSqlParser.KW_FOLLOWING);
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
    public withinClause(): WithinClauseContext {
        let localContext = new WithinClauseContext(this.context, this.state);
        this.enterRule(localContext, 262, FlinkSqlParser.RULE_withinClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1771;
            this.match(FlinkSqlParser.KW_WITHIN);
            this.state = 1772;
            this.timeIntervalExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 264, FlinkSqlParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1774;
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
        let _startState = 266;
        this.enterRecursionRule(localContext, 266, FlinkSqlParser.RULE_booleanExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1788;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 197, this.context) ) {
            case 1:
                {
                localContext = new LogicalNotContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1777;
                this.match(FlinkSqlParser.KW_NOT);
                this.state = 1778;
                this.booleanExpression(6);
                }
                break;
            case 2:
                {
                localContext = new ExistsContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1779;
                this.match(FlinkSqlParser.KW_EXISTS);
                this.state = 1780;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1781;
                this.queryStatement(0);
                this.state = 1782;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 3:
                {
                localContext = new PredicatedContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1784;
                this.valueExpression(0);
                this.state = 1786;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 196, this.context) ) {
                case 1:
                    {
                    this.state = 1785;
                    this.predicate();
                    }
                    break;
                }
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1804;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 200, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1802;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 199, this.context) ) {
                    case 1:
                        {
                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as LogicalBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_booleanExpression);
                        this.state = 1790;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1791;
                        (localContext as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.KW_AND);
                        this.state = 1792;
                        (localContext as LogicalBinaryContext)._right = this.booleanExpression(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as LogicalBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_booleanExpression);
                        this.state = 1793;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1794;
                        (localContext as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.KW_OR);
                        this.state = 1795;
                        (localContext as LogicalBinaryContext)._right = this.booleanExpression(3);
                        }
                        break;
                    case 3:
                        {
                        localContext = new LogicalNestedContext(new BooleanExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_booleanExpression);
                        this.state = 1796;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 1797;
                        this.match(FlinkSqlParser.KW_IS);
                        this.state = 1799;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 243) {
                            {
                            this.state = 1798;
                            this.match(FlinkSqlParser.KW_NOT);
                            }
                        }

                        this.state = 1801;
                        (localContext as LogicalNestedContext)._kind = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 140 || _la === 246 || _la === 399 || _la === 407)) {
                            (localContext as LogicalNestedContext)._kind = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        }
                        break;
                    }
                    }
                }
                this.state = 1806;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 200, this.context);
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
    public predicate(): PredicateContext {
        let localContext = new PredicateContext(this.context, this.state);
        this.enterRule(localContext, 268, FlinkSqlParser.RULE_predicate);
        let _la: number;
        try {
            this.state = 1881;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 212, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1808;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 243) {
                    {
                    this.state = 1807;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1810;
                localContext._kind = this.match(FlinkSqlParser.KW_BETWEEN);
                this.state = 1812;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19 || _la === 371) {
                    {
                    this.state = 1811;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 19 || _la === 371)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                }

                this.state = 1814;
                localContext._lower = this.valueExpression(0);
                this.state = 1815;
                this.match(FlinkSqlParser.KW_AND);
                this.state = 1816;
                localContext._upper = this.valueExpression(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1819;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 243) {
                    {
                    this.state = 1818;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1821;
                localContext._kind = this.match(FlinkSqlParser.KW_IN);
                this.state = 1822;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1823;
                this.expression();
                this.state = 1828;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 523) {
                    {
                    {
                    this.state = 1824;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1825;
                    this.expression();
                    }
                    }
                    this.state = 1830;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1831;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1834;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 243) {
                    {
                    this.state = 1833;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1836;
                localContext._kind = this.match(FlinkSqlParser.KW_IN);
                this.state = 1837;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1838;
                this.queryStatement(0);
                this.state = 1839;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1841;
                localContext._kind = this.match(FlinkSqlParser.KW_EXISTS);
                this.state = 1842;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1843;
                this.queryStatement(0);
                this.state = 1844;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1847;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 243) {
                    {
                    this.state = 1846;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1849;
                localContext._kind = this.match(FlinkSqlParser.KW_RLIKE);
                this.state = 1850;
                localContext._pattern = this.valueExpression(0);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1851;
                this.likePredicate();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1852;
                this.match(FlinkSqlParser.KW_IS);
                this.state = 1854;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 243) {
                    {
                    this.state = 1853;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1856;
                localContext._kind = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 140 || _la === 246 || _la === 399 || _la === 407)) {
                    localContext._kind = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1857;
                this.match(FlinkSqlParser.KW_IS);
                this.state = 1859;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 243) {
                    {
                    this.state = 1858;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1861;
                localContext._kind = this.match(FlinkSqlParser.KW_DISTINCT);
                this.state = 1862;
                this.match(FlinkSqlParser.KW_FROM);
                this.state = 1863;
                localContext._right = this.valueExpression(0);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1865;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 243) {
                    {
                    this.state = 1864;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1867;
                localContext._kind = this.match(FlinkSqlParser.KW_SIMILAR);
                this.state = 1868;
                this.match(FlinkSqlParser.KW_TO);
                this.state = 1869;
                localContext._right = this.valueExpression(0);
                this.state = 1872;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 210, this.context) ) {
                case 1:
                    {
                    this.state = 1870;
                    this.match(FlinkSqlParser.KW_ESCAPE);
                    this.state = 1871;
                    this.stringLiteral();
                    }
                    break;
                }
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1874;
                this.match(FlinkSqlParser.KW_IS);
                this.state = 1875;
                this.match(FlinkSqlParser.KW_JSON);
                this.state = 1879;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 211, this.context) ) {
                case 1:
                    {
                    this.state = 1876;
                    this.match(FlinkSqlParser.KW_VALUE);
                    }
                    break;
                case 2:
                    {
                    this.state = 1877;
                    this.match(FlinkSqlParser.KW_ARRAY);
                    }
                    break;
                case 3:
                    {
                    this.state = 1878;
                    this.identifier();
                    }
                    break;
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
    public jsonFunctionBranch(): JsonFunctionBranchContext {
        let localContext = new JsonFunctionBranchContext(this.context, this.state);
        this.enterRule(localContext, 270, FlinkSqlParser.RULE_jsonFunctionBranch);
        try {
            this.state = 1891;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 213, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1883;
                this.match(FlinkSqlParser.KW_NULL);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1884;
                this.match(FlinkSqlParser.KW_EMPTY);
                this.state = 1885;
                this.match(FlinkSqlParser.KW_ARRAY);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1886;
                this.match(FlinkSqlParser.KW_EMPTY);
                this.state = 1887;
                this.uid();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1888;
                this.match(FlinkSqlParser.KW_TRUE);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1889;
                this.match(FlinkSqlParser.KW_FALSE);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1890;
                this.match(FlinkSqlParser.KW_UNKNOWN);
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
    public likePredicate(): LikePredicateContext {
        let localContext = new LikePredicateContext(this.context, this.state);
        this.enterRule(localContext, 272, FlinkSqlParser.RULE_likePredicate);
        let _la: number;
        try {
            this.state = 1922;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 219, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1894;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 243) {
                    {
                    this.state = 1893;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1896;
                localContext._kind = this.match(FlinkSqlParser.KW_LIKE);
                this.state = 1897;
                localContext._quantifier = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 5 || _la === 11)) {
                    localContext._quantifier = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1911;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 216, this.context) ) {
                case 1:
                    {
                    this.state = 1898;
                    this.match(FlinkSqlParser.LR_BRACKET);
                    this.state = 1899;
                    this.match(FlinkSqlParser.RR_BRACKET);
                    }
                    break;
                case 2:
                    {
                    this.state = 1900;
                    this.match(FlinkSqlParser.LR_BRACKET);
                    this.state = 1901;
                    this.expression();
                    this.state = 1906;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 523) {
                        {
                        {
                        this.state = 1902;
                        this.match(FlinkSqlParser.COMMA);
                        this.state = 1903;
                        this.expression();
                        }
                        }
                        this.state = 1908;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 1909;
                    this.match(FlinkSqlParser.RR_BRACKET);
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1914;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 243) {
                    {
                    this.state = 1913;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1916;
                localContext._kind = this.match(FlinkSqlParser.KW_LIKE);
                this.state = 1917;
                localContext._pattern = this.valueExpression(0);
                this.state = 1920;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 218, this.context) ) {
                case 1:
                    {
                    this.state = 1918;
                    this.match(FlinkSqlParser.KW_ESCAPE);
                    this.state = 1919;
                    this.stringLiteral();
                    }
                    break;
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
        let _startState = 274;
        this.enterRecursionRule(localContext, 274, FlinkSqlParser.RULE_valueExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1928;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 220, this.context) ) {
            case 1:
                {
                localContext = new ValueExpressionDefaultContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1925;
                this.primaryExpression(0);
                }
                break;
            case 2:
                {
                localContext = new ArithmeticUnaryContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1926;
                (localContext as ArithmeticUnaryContext)._operator = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 512)) & ~0x1F) === 0 && ((1 << (_la - 512)) & 3145729) !== 0))) {
                    (localContext as ArithmeticUnaryContext)._operator = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1927;
                this.valueExpression(7);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1951;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 222, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1949;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 221, this.context) ) {
                    case 1:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1930;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 1931;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 455 || ((((_la - 530)) & ~0x1F) === 0 && ((1 << (_la - 530)) & 145) !== 0))) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1932;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(7);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1933;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 1934;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 532)) & ~0x1F) === 0 && ((1 << (_la - 532)) & 11) !== 0))) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1935;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(6);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1936;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 1937;
                        (localContext as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_AND_OP);
                        this.state = 1938;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(5);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1939;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1940;
                        (localContext as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_XOR_OP);
                        this.state = 1941;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(4);
                        }
                        break;
                    case 5:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1942;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1943;
                        (localContext as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_OR_OP);
                        this.state = 1944;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(3);
                        }
                        break;
                    case 6:
                        {
                        localContext = new ComparisonContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ComparisonContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1945;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 1946;
                        this.comparisonOperator();
                        this.state = 1947;
                        (localContext as ComparisonContext)._right = this.valueExpression(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 1953;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 222, this.context);
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
    public functionCallExpression(): FunctionCallExpressionContext {
        let localContext = new FunctionCallExpressionContext(this.context, this.state);
        this.enterRule(localContext, 276, FlinkSqlParser.RULE_functionCallExpression);
        let _la: number;
        try {
            this.state = 1973;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_CURRENT_DATE:
            case FlinkSqlParser.KW_CURRENT_TIME:
            case FlinkSqlParser.KW_CURRENT_TIMESTAMP:
            case FlinkSqlParser.KW_LOCALTIME:
            case FlinkSqlParser.KW_LOCALTIMESTAMP:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1954;
                this.reservedKeywordsNoParamsUsedAsFuncName();
                }
                break;
            case FlinkSqlParser.KW_DATE:
            case FlinkSqlParser.KW_INTERVAL:
            case FlinkSqlParser.KW_TIME:
            case FlinkSqlParser.KW_TIMESTAMP:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1955;
                this.functionNameAndParams();
                }
                break;
            case FlinkSqlParser.KW_ABS:
            case FlinkSqlParser.KW_ARRAY:
            case FlinkSqlParser.KW_AVG:
            case FlinkSqlParser.KW_CARDINALITY:
            case FlinkSqlParser.KW_CAST:
            case FlinkSqlParser.KW_CEIL:
            case FlinkSqlParser.KW_CEILING:
            case FlinkSqlParser.KW_COALESCE:
            case FlinkSqlParser.KW_COLLECT:
            case FlinkSqlParser.KW_COUNT:
            case FlinkSqlParser.KW_CUME_DIST:
            case FlinkSqlParser.KW_DAYOFWEEK:
            case FlinkSqlParser.KW_DAYOFYEAR:
            case FlinkSqlParser.KW_DENSE_RANK:
            case FlinkSqlParser.KW_ELEMENT:
            case FlinkSqlParser.KW_EXP:
            case FlinkSqlParser.KW_EXTRACT:
            case FlinkSqlParser.KW_FIRST_VALUE:
            case FlinkSqlParser.KW_FLOOR:
            case FlinkSqlParser.KW_GROUPING:
            case FlinkSqlParser.KW_HOUR:
            case FlinkSqlParser.KW_IF:
            case FlinkSqlParser.KW_JSON_ARRAY:
            case FlinkSqlParser.KW_JSON_ARRAYAGG:
            case FlinkSqlParser.KW_JSON_EXISTS:
            case FlinkSqlParser.KW_JSON_OBJECT:
            case FlinkSqlParser.KW_JSON_OBJECTAGG:
            case FlinkSqlParser.KW_JSON_QUERY:
            case FlinkSqlParser.KW_JSON_VALUE:
            case FlinkSqlParser.KW_LAG:
            case FlinkSqlParser.KW_LAST_VALUE:
            case FlinkSqlParser.KW_LEAD:
            case FlinkSqlParser.KW_LEFT:
            case FlinkSqlParser.KW_LN:
            case FlinkSqlParser.KW_LOWER:
            case FlinkSqlParser.KW_MAX:
            case FlinkSqlParser.KW_MIN:
            case FlinkSqlParser.KW_MINUTE:
            case FlinkSqlParser.KW_MOD:
            case FlinkSqlParser.KW_MONTH:
            case FlinkSqlParser.KW_NTILE:
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
            case FlinkSqlParser.KW_TIMESTAMP_DIFF:
            case FlinkSqlParser.KW_TRIM:
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
            case FlinkSqlParser.STRING_LITERAL:
            case FlinkSqlParser.DIG_LITERAL:
            case FlinkSqlParser.ID_LITERAL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1956;
                this.functionNameWithParams();
                this.state = 1957;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1969;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 225, this.context) ) {
                case 1:
                    {
                    this.state = 1959;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 223, this.context) ) {
                    case 1:
                        {
                        this.state = 1958;
                        this.setQuantifier();
                        }
                        break;
                    }
                    this.state = 1961;
                    this.functionParam();
                    this.state = 1966;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 523) {
                        {
                        {
                        this.state = 1962;
                        this.match(FlinkSqlParser.COMMA);
                        this.state = 1963;
                        this.functionParam();
                        }
                        }
                        this.state = 1968;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                    break;
                }
                this.state = 1971;
                this.match(FlinkSqlParser.RR_BRACKET);
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
        let _startState = 278;
        this.enterRecursionRule(localContext, 278, FlinkSqlParser.RULE_primaryExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2057;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 233, this.context) ) {
            case 1:
                {
                localContext = new SearchedCaseContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1976;
                this.match(FlinkSqlParser.KW_CASE);
                this.state = 1978;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1977;
                    this.whenClause();
                    }
                    }
                    this.state = 1980;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 431);
                this.state = 1984;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 120) {
                    {
                    this.state = 1982;
                    this.match(FlinkSqlParser.KW_ELSE);
                    this.state = 1983;
                    (localContext as SearchedCaseContext)._elseExpression = this.expression();
                    }
                }

                this.state = 1986;
                this.match(FlinkSqlParser.KW_END);
                }
                break;
            case 2:
                {
                localContext = new SimpleCaseContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1988;
                this.match(FlinkSqlParser.KW_CASE);
                this.state = 1989;
                (localContext as SimpleCaseContext)._value = this.expression();
                this.state = 1991;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1990;
                    this.whenClause();
                    }
                    }
                    this.state = 1993;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 431);
                this.state = 1997;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 120) {
                    {
                    this.state = 1995;
                    this.match(FlinkSqlParser.KW_ELSE);
                    this.state = 1996;
                    (localContext as SimpleCaseContext)._elseExpression = this.expression();
                    }
                }

                this.state = 1999;
                this.match(FlinkSqlParser.KW_END);
                }
                break;
            case 3:
                {
                localContext = new CastContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2001;
                this.match(FlinkSqlParser.KW_CAST);
                this.state = 2002;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 2003;
                this.expression();
                this.state = 2004;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 2005;
                this.columnType();
                this.state = 2006;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                {
                localContext = new FirstContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2008;
                this.match(FlinkSqlParser.KW_FIRST);
                this.state = 2009;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 2010;
                this.expression();
                this.state = 2013;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 464) {
                    {
                    this.state = 2011;
                    this.match(FlinkSqlParser.KW_IGNORE);
                    this.state = 2012;
                    this.match(FlinkSqlParser.KW_NULLS);
                    }
                }

                this.state = 2015;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 5:
                {
                localContext = new LastContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2017;
                this.match(FlinkSqlParser.KW_LAST);
                this.state = 2018;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 2019;
                this.expression();
                this.state = 2022;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 464) {
                    {
                    this.state = 2020;
                    this.match(FlinkSqlParser.KW_IGNORE);
                    this.state = 2021;
                    this.match(FlinkSqlParser.KW_NULLS);
                    }
                }

                this.state = 2024;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 6:
                {
                localContext = new PositionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2026;
                this.match(FlinkSqlParser.KW_POSITION);
                this.state = 2027;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 2028;
                (localContext as PositionContext)._substr = this.valueExpression(0);
                this.state = 2029;
                this.match(FlinkSqlParser.KW_IN);
                this.state = 2030;
                (localContext as PositionContext)._str = this.valueExpression(0);
                this.state = 2031;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 7:
                {
                localContext = new ConstantDefaultContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2033;
                this.constant();
                }
                break;
            case 8:
                {
                localContext = new StarContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2034;
                this.match(FlinkSqlParser.ASTERISK_SIGN);
                }
                break;
            case 9:
                {
                localContext = new StarContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2035;
                this.uid();
                this.state = 2036;
                this.match(FlinkSqlParser.DOT);
                this.state = 2037;
                this.match(FlinkSqlParser.ASTERISK_SIGN);
                }
                break;
            case 10:
                {
                localContext = new SubqueryExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2039;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 2040;
                this.queryStatement(0);
                this.state = 2041;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 11:
                {
                localContext = new FunctionCallContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2043;
                this.functionCallExpression();
                }
                break;
            case 12:
                {
                localContext = new ColumnReferenceContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2044;
                this.columnNamePath();
                }
                break;
            case 13:
                {
                localContext = new DereferenceContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2045;
                this.dereferenceDefinition();
                }
                break;
            case 14:
                {
                localContext = new ParenthesizedExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2046;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 2047;
                this.expression();
                this.state = 2048;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 15:
                {
                localContext = new ExtractContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 2050;
                this.match(FlinkSqlParser.KW_EXTRACT);
                this.state = 2051;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 2052;
                (localContext as ExtractContext)._field = this.identifier();
                this.state = 2053;
                this.match(FlinkSqlParser.KW_FROM);
                this.state = 2054;
                (localContext as ExtractContext)._source = this.valueExpression(0);
                this.state = 2055;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2066;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 234, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new SubscriptContext(new PrimaryExpressionContext(parentContext, parentState));
                    (localContext as SubscriptContext)._value = previousContext;
                    this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_primaryExpression);
                    this.state = 2059;
                    if (!(this.precpred(this.context, 5))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                    }
                    this.state = 2060;
                    this.match(FlinkSqlParser.LS_BRACKET);
                    this.state = 2061;
                    (localContext as SubscriptContext)._index = this.valueExpression(0);
                    this.state = 2062;
                    this.match(FlinkSqlParser.RS_BRACKET);
                    }
                    }
                }
                this.state = 2068;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 234, this.context);
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
    public functionNameCreate(): FunctionNameCreateContext {
        let localContext = new FunctionNameCreateContext(this.context, this.state);
        this.enterRule(localContext, 280, FlinkSqlParser.RULE_functionNameCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2069;
            this.uid();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionName(): FunctionNameContext {
        let localContext = new FunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 282, FlinkSqlParser.RULE_functionName);
        try {
            this.state = 2075;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 235, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2071;
                this.reservedKeywordsUsedAsFuncName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2072;
                this.reservedKeywordsNoParamsUsedAsFuncName();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2073;
                this.reservedKeywordsFollowParamsUsedAsFuncName();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2074;
                this.uid();
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
    public functionNameAndParams(): FunctionNameAndParamsContext {
        let localContext = new FunctionNameAndParamsContext(this.context, this.state);
        this.enterRule(localContext, 284, FlinkSqlParser.RULE_functionNameAndParams);
        try {
            this.state = 2081;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_DATE:
            case FlinkSqlParser.KW_TIME:
            case FlinkSqlParser.KW_TIMESTAMP:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2077;
                this.reservedKeywordsFollowParamsUsedAsFuncName();
                this.state = 2078;
                this.match(FlinkSqlParser.STRING_LITERAL);
                }
                break;
            case FlinkSqlParser.KW_INTERVAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2080;
                this.timeIntervalExpression();
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
    public functionNameWithParams(): FunctionNameWithParamsContext {
        let localContext = new FunctionNameWithParamsContext(this.context, this.state);
        this.enterRule(localContext, 286, FlinkSqlParser.RULE_functionNameWithParams);
        try {
            this.state = 2085;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 237, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2083;
                this.reservedKeywordsUsedAsFuncName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2084;
                this.uid();
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
    public functionParam(): FunctionParamContext {
        let localContext = new FunctionParamContext(this.context, this.state);
        this.enterRule(localContext, 288, FlinkSqlParser.RULE_functionParam);
        try {
            this.state = 2095;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 238, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2087;
                this.reservedKeywordsUsedAsFuncParam();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2088;
                this.timeIntervalUnit();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2089;
                this.timePointUnit();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2090;
                this.expression();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2091;
                this.jsonValueParams();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2092;
                this.jsonQueryParams();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2093;
                this.jsonObjectParams();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2094;
                this.jsonArrayParams();
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
    public jsonValueParams(): JsonValueParamsContext {
        let localContext = new JsonValueParamsContext(this.context, this.state);
        this.enterRule(localContext, 290, FlinkSqlParser.RULE_jsonValueParams);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2097;
            this.columnNamePath();
            this.state = 2101;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 239, this.context) ) {
            case 1:
                {
                this.state = 2098;
                this.uid();
                this.state = 2099;
                this.columnType();
                }
                break;
            }
            this.state = 2111;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 241, this.context) ) {
            case 1:
                {
                this.state = 2107;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
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
                case FlinkSqlParser.STRING_LITERAL:
                case FlinkSqlParser.DIG_LITERAL:
                case FlinkSqlParser.ID_LITERAL:
                    {
                    this.state = 2103;
                    this.uid();
                    }
                    break;
                case FlinkSqlParser.KW_NULL:
                    {
                    this.state = 2104;
                    this.match(FlinkSqlParser.KW_NULL);
                    }
                    break;
                case FlinkSqlParser.KW_DEFAULT:
                    {
                    this.state = 2105;
                    this.match(FlinkSqlParser.KW_DEFAULT);
                    this.state = 2106;
                    this.valueExpression(0);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2109;
                this.match(FlinkSqlParser.KW_ON);
                this.state = 2110;
                this.match(FlinkSqlParser.KW_EMPTY);
                }
                break;
            }
            this.state = 2121;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 104 || _la === 246 || ((((_la - 440)) & ~0x1F) === 0 && ((1 << (_la - 440)) & 4294967295) !== 0) || ((((_la - 472)) & ~0x1F) === 0 && ((1 << (_la - 472)) & 4294967295) !== 0) || ((((_la - 504)) & ~0x1F) === 0 && ((1 << (_la - 504)) & 15) !== 0) || ((((_la - 540)) & ~0x1F) === 0 && ((1 << (_la - 540)) & 19) !== 0)) {
                {
                this.state = 2117;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
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
                case FlinkSqlParser.STRING_LITERAL:
                case FlinkSqlParser.DIG_LITERAL:
                case FlinkSqlParser.ID_LITERAL:
                    {
                    this.state = 2113;
                    this.uid();
                    }
                    break;
                case FlinkSqlParser.KW_NULL:
                    {
                    this.state = 2114;
                    this.match(FlinkSqlParser.KW_NULL);
                    }
                    break;
                case FlinkSqlParser.KW_DEFAULT:
                    {
                    this.state = 2115;
                    this.match(FlinkSqlParser.KW_DEFAULT);
                    this.state = 2116;
                    this.valueExpression(0);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2119;
                this.match(FlinkSqlParser.KW_ON);
                this.state = 2120;
                this.uid();
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
    public jsonQueryParams(): JsonQueryParamsContext {
        let localContext = new JsonQueryParamsContext(this.context, this.state);
        this.enterRule(localContext, 292, FlinkSqlParser.RULE_jsonQueryParams);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2123;
            this.columnNamePath();
            this.state = 2135;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 436 || _la === 438) {
                {
                this.state = 2129;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.KW_WITHOUT:
                    {
                    this.state = 2124;
                    this.match(FlinkSqlParser.KW_WITHOUT);
                    }
                    break;
                case FlinkSqlParser.KW_WITH:
                    {
                    this.state = 2125;
                    this.match(FlinkSqlParser.KW_WITH);
                    this.state = 2127;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 244, this.context) ) {
                    case 1:
                        {
                        this.state = 2126;
                        this.uid();
                        }
                        break;
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2132;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 13) {
                    {
                    this.state = 2131;
                    this.match(FlinkSqlParser.KW_ARRAY);
                    }
                }

                this.state = 2134;
                this.uid();
                }
            }

            this.state = 2141;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 248, this.context) ) {
            case 1:
                {
                this.state = 2137;
                this.jsonFunctionBranch();
                this.state = 2138;
                this.match(FlinkSqlParser.KW_ON);
                this.state = 2139;
                this.match(FlinkSqlParser.KW_EMPTY);
                }
                break;
            }
            this.state = 2147;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 121 || _la === 140 || _la === 246 || _la === 399 || _la === 407) {
                {
                this.state = 2143;
                this.jsonFunctionBranch();
                this.state = 2144;
                this.match(FlinkSqlParser.KW_ON);
                this.state = 2145;
                this.uid();
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
    public jsonObjectParams(): JsonObjectParamsContext {
        let localContext = new JsonObjectParamsContext(this.context, this.state);
        this.enterRule(localContext, 294, FlinkSqlParser.RULE_jsonObjectParams);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2170;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 254, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2150;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 250, this.context) ) {
                    case 1:
                        {
                        this.state = 2149;
                        this.match(FlinkSqlParser.KW_KEY);
                        }
                        break;
                    }
                    this.state = 2152;
                    this.columnNamePath();
                    this.state = 2154;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 416) {
                        {
                        this.state = 2153;
                        this.match(FlinkSqlParser.KW_VALUE);
                        }
                    }

                    this.state = 2166;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
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
                    case FlinkSqlParser.KW_EXP:
                    case FlinkSqlParser.KW_EXTRACT:
                    case FlinkSqlParser.KW_FALSE:
                    case FlinkSqlParser.KW_FIRST_VALUE:
                    case FlinkSqlParser.KW_FLOOR:
                    case FlinkSqlParser.KW_GROUPING:
                    case FlinkSqlParser.KW_HOUR:
                    case FlinkSqlParser.KW_IF:
                    case FlinkSqlParser.KW_INTERVAL:
                    case FlinkSqlParser.KW_JSON_ARRAY:
                    case FlinkSqlParser.KW_JSON_ARRAYAGG:
                    case FlinkSqlParser.KW_JSON_EXISTS:
                    case FlinkSqlParser.KW_JSON_OBJECT:
                    case FlinkSqlParser.KW_JSON_OBJECTAGG:
                    case FlinkSqlParser.KW_JSON_QUERY:
                    case FlinkSqlParser.KW_JSON_VALUE:
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
                    case FlinkSqlParser.HYPHEN_SIGN:
                    case FlinkSqlParser.ADD_SIGN:
                    case FlinkSqlParser.STRING_LITERAL:
                    case FlinkSqlParser.DIG_LITERAL:
                    case FlinkSqlParser.REAL_LITERAL:
                    case FlinkSqlParser.BIT_STRING:
                    case FlinkSqlParser.ID_LITERAL:
                        {
                        this.state = 2156;
                        this.valueExpression(0);
                        }
                        break;
                    case FlinkSqlParser.KW_JSON:
                        {
                        this.state = 2157;
                        this.match(FlinkSqlParser.KW_JSON);
                        this.state = 2158;
                        this.match(FlinkSqlParser.LR_BRACKET);
                        this.state = 2162;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 8396816) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 2147811437) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 29427209) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 134221825) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 675283027) !== 0) || ((((_la - 183)) & ~0x1F) === 0 && ((1 << (_la - 183)) & 487931745) !== 0) || ((((_la - 216)) & ~0x1F) === 0 && ((1 << (_la - 216)) & 3892347713) !== 0) || ((((_la - 266)) & ~0x1F) === 0 && ((1 << (_la - 266)) & 537530369) !== 0) || ((((_la - 319)) & ~0x1F) === 0 && ((1 << (_la - 319)) & 131185) !== 0) || ((((_la - 359)) & ~0x1F) === 0 && ((1 << (_la - 359)) & 14681219) !== 0) || ((((_la - 397)) & ~0x1F) === 0 && ((1 << (_la - 397)) & 100679709) !== 0) || ((((_la - 439)) & ~0x1F) === 0 && ((1 << (_la - 439)) & 4294967295) !== 0) || ((((_la - 471)) & ~0x1F) === 0 && ((1 << (_la - 471)) & 4294967295) !== 0) || ((((_la - 503)) & ~0x1F) === 0 && ((1 << (_la - 503)) & 1744896543) !== 0) || ((((_la - 540)) & ~0x1F) === 0 && ((1 << (_la - 540)) & 31) !== 0)) {
                            {
                            {
                            this.state = 2159;
                            this.valueExpression(0);
                            }
                            }
                            this.state = 2164;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 2165;
                        this.match(FlinkSqlParser.RR_BRACKET);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                    }
                }
                this.state = 2172;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 254, this.context);
            }
            this.state = 2179;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 246 || ((((_la - 440)) & ~0x1F) === 0 && ((1 << (_la - 440)) & 4294967295) !== 0) || ((((_la - 472)) & ~0x1F) === 0 && ((1 << (_la - 472)) & 4294967295) !== 0) || ((((_la - 504)) & ~0x1F) === 0 && ((1 << (_la - 504)) & 15) !== 0) || ((((_la - 540)) & ~0x1F) === 0 && ((1 << (_la - 540)) & 19) !== 0)) {
                {
                this.state = 2175;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.KW_NULL:
                    {
                    this.state = 2173;
                    this.match(FlinkSqlParser.KW_NULL);
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
                case FlinkSqlParser.STRING_LITERAL:
                case FlinkSqlParser.DIG_LITERAL:
                case FlinkSqlParser.ID_LITERAL:
                    {
                    this.state = 2174;
                    this.uid();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2177;
                this.match(FlinkSqlParser.KW_ON);
                this.state = 2178;
                this.match(FlinkSqlParser.KW_NULL);
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
    public jsonArrayParams(): JsonArrayParamsContext {
        let localContext = new JsonArrayParamsContext(this.context, this.state);
        this.enterRule(localContext, 296, FlinkSqlParser.RULE_jsonArrayParams);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2184;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 257, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 2181;
                    this.valueExpression(0);
                    }
                    }
                }
                this.state = 2186;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 257, this.context);
            }
            this.state = 2193;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 246 || ((((_la - 440)) & ~0x1F) === 0 && ((1 << (_la - 440)) & 4294967295) !== 0) || ((((_la - 472)) & ~0x1F) === 0 && ((1 << (_la - 472)) & 4294967295) !== 0) || ((((_la - 504)) & ~0x1F) === 0 && ((1 << (_la - 504)) & 15) !== 0) || ((((_la - 540)) & ~0x1F) === 0 && ((1 << (_la - 540)) & 19) !== 0)) {
                {
                this.state = 2189;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.KW_NULL:
                    {
                    this.state = 2187;
                    this.match(FlinkSqlParser.KW_NULL);
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
                case FlinkSqlParser.STRING_LITERAL:
                case FlinkSqlParser.DIG_LITERAL:
                case FlinkSqlParser.ID_LITERAL:
                    {
                    this.state = 2188;
                    this.uid();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2191;
                this.match(FlinkSqlParser.KW_ON);
                this.state = 2192;
                this.match(FlinkSqlParser.KW_NULL);
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
    public dereferenceDefinition(): DereferenceDefinitionContext {
        let localContext = new DereferenceDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 298, FlinkSqlParser.RULE_dereferenceDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2195;
            this.uid();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public correlationName(): CorrelationNameContext {
        let localContext = new CorrelationNameContext(this.context, this.state);
        this.enterRule(localContext, 300, FlinkSqlParser.RULE_correlationName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2197;
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
    public qualifiedName(): QualifiedNameContext {
        let localContext = new QualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 302, FlinkSqlParser.RULE_qualifiedName);
        try {
            this.state = 2201;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 260, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2199;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2200;
                this.dereferenceDefinition();
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
    public timeIntervalExpression(): TimeIntervalExpressionContext {
        let localContext = new TimeIntervalExpressionContext(this.context, this.state);
        this.enterRule(localContext, 304, FlinkSqlParser.RULE_timeIntervalExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2203;
            this.match(FlinkSqlParser.KW_INTERVAL);
            this.state = 2206;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 261, this.context) ) {
            case 1:
                {
                this.state = 2204;
                this.errorCapturingMultiUnitsInterval();
                }
                break;
            case 2:
                {
                this.state = 2205;
                this.errorCapturingUnitToUnitInterval();
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
    public errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext {
        let localContext = new ErrorCapturingMultiUnitsIntervalContext(this.context, this.state);
        this.enterRule(localContext, 306, FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2208;
            this.multiUnitsInterval();
            this.state = 2210;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 262, this.context) ) {
            case 1:
                {
                this.state = 2209;
                this.unitToUnitInterval();
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
    public multiUnitsInterval(): MultiUnitsIntervalContext {
        let localContext = new MultiUnitsIntervalContext(this.context, this.state);
        this.enterRule(localContext, 308, FlinkSqlParser.RULE_multiUnitsInterval);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2215;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 2212;
                    this.intervalValue();
                    this.state = 2213;
                    this.timeIntervalUnit();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2217;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 263, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext {
        let localContext = new ErrorCapturingUnitToUnitIntervalContext(this.context, this.state);
        this.enterRule(localContext, 310, FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2219;
            localContext._body = this.unitToUnitInterval();
            this.state = 2222;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 264, this.context) ) {
            case 1:
                {
                this.state = 2220;
                localContext._error1 = this.multiUnitsInterval();
                }
                break;
            case 2:
                {
                this.state = 2221;
                localContext._error2 = this.unitToUnitInterval();
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
    public unitToUnitInterval(): UnitToUnitIntervalContext {
        let localContext = new UnitToUnitIntervalContext(this.context, this.state);
        this.enterRule(localContext, 312, FlinkSqlParser.RULE_unitToUnitInterval);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2224;
            localContext._value = this.intervalValue();
            this.state = 2225;
            localContext._from_ = this.timeIntervalUnit();
            this.state = 2226;
            this.match(FlinkSqlParser.KW_TO);
            this.state = 2227;
            localContext._to = this.timeIntervalUnit();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public intervalValue(): IntervalValueContext {
        let localContext = new IntervalValueContext(this.context, this.state);
        this.enterRule(localContext, 314, FlinkSqlParser.RULE_intervalValue);
        let _la: number;
        try {
            this.state = 2234;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.HYPHEN_SIGN:
            case FlinkSqlParser.ADD_SIGN:
            case FlinkSqlParser.DIG_LITERAL:
            case FlinkSqlParser.REAL_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2230;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 532 || _la === 533) {
                    {
                    this.state = 2229;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 532 || _la === 533)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                }

                this.state = 2232;
                _la = this.tokenStream.LA(1);
                if(!(_la === 541 || _la === 542)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case FlinkSqlParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2233;
                this.match(FlinkSqlParser.STRING_LITERAL);
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
    public tableAlias(): TableAliasContext {
        let localContext = new TableAliasContext(this.context, this.state);
        this.enterRule(localContext, 316, FlinkSqlParser.RULE_tableAlias);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2237;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 2236;
                this.match(FlinkSqlParser.KW_AS);
                }
            }

            this.state = 2239;
            localContext._alias = this.identifier();
            this.state = 2241;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 268, this.context) ) {
            case 1:
                {
                this.state = 2240;
                this.identifierList();
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
    public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
        let localContext = new ErrorCapturingIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 318, FlinkSqlParser.RULE_errorCapturingIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2243;
            this.identifier();
            this.state = 2244;
            this.errorCapturingIdentifierExtra();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext {
        let localContext = new ErrorCapturingIdentifierExtraContext(this.context, this.state);
        this.enterRule(localContext, 320, FlinkSqlParser.RULE_errorCapturingIdentifierExtra);
        let _la: number;
        try {
            this.state = 2253;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_MINUS:
                localContext = new ErrorIdentContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2248;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 2246;
                    this.match(FlinkSqlParser.KW_MINUS);
                    this.state = 2247;
                    this.identifier();
                    }
                    }
                    this.state = 2250;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 223);
                }
                break;
            case FlinkSqlParser.KW_AS:
            case FlinkSqlParser.LR_BRACKET:
                localContext = new RealIdentContext(localContext);
                this.enterOuterAlt(localContext, 2);
                // tslint:disable-next-line:no-empty
                {
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
    public identifierList(): IdentifierListContext {
        let localContext = new IdentifierListContext(this.context, this.state);
        this.enterRule(localContext, 322, FlinkSqlParser.RULE_identifierList);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2255;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 2256;
            this.identifierSeq();
            this.state = 2257;
            this.match(FlinkSqlParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifierSeq(): IdentifierSeqContext {
        let localContext = new IdentifierSeqContext(this.context, this.state);
        this.enterRule(localContext, 324, FlinkSqlParser.RULE_identifierSeq);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2259;
            this.identifier();
            this.state = 2264;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 523) {
                {
                {
                this.state = 2260;
                this.match(FlinkSqlParser.COMMA);
                this.state = 2261;
                this.identifier();
                }
                }
                this.state = 2266;
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
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 326, FlinkSqlParser.RULE_identifier);
        try {
            this.state = 2270;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.DIG_LITERAL:
            case FlinkSqlParser.ID_LITERAL:
                localContext = new UnquotedIdentifierAlternativeContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2267;
                this.unquotedIdentifier();
                }
                break;
            case FlinkSqlParser.STRING_LITERAL:
                localContext = new QuotedIdentifierAlternativeContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2268;
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
                localContext = new NonReservedKeywordsAlternativeContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2269;
                this.nonReservedKeywords();
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
    public unquotedIdentifier(): UnquotedIdentifierContext {
        let localContext = new UnquotedIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 328, FlinkSqlParser.RULE_unquotedIdentifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2272;
            _la = this.tokenStream.LA(1);
            if(!(_la === 541 || _la === 544)) {
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
    public quotedIdentifier(): QuotedIdentifierContext {
        let localContext = new QuotedIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 330, FlinkSqlParser.RULE_quotedIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2274;
            this.match(FlinkSqlParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 332, FlinkSqlParser.RULE_whenClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2276;
            this.match(FlinkSqlParser.KW_WHEN);
            this.state = 2277;
            localContext._condition = this.expression();
            this.state = 2278;
            this.match(FlinkSqlParser.KW_THEN);
            this.state = 2279;
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
    public catalogPath(): CatalogPathContext {
        let localContext = new CatalogPathContext(this.context, this.state);
        this.enterRule(localContext, 334, FlinkSqlParser.RULE_catalogPath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2281;
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
    public catalogPathCreate(): CatalogPathCreateContext {
        let localContext = new CatalogPathCreateContext(this.context, this.state);
        this.enterRule(localContext, 336, FlinkSqlParser.RULE_catalogPathCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2283;
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
    public databasePath(): DatabasePathContext {
        let localContext = new DatabasePathContext(this.context, this.state);
        this.enterRule(localContext, 338, FlinkSqlParser.RULE_databasePath);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2285;
            this.identifier();
            this.state = 2288;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 516) {
                {
                this.state = 2286;
                this.match(FlinkSqlParser.DOT);
                this.state = 2287;
                this.identifier();
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
    public databasePathCreate(): DatabasePathCreateContext {
        let localContext = new DatabasePathCreateContext(this.context, this.state);
        this.enterRule(localContext, 340, FlinkSqlParser.RULE_databasePathCreate);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2290;
            this.identifier();
            this.state = 2293;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 516) {
                {
                this.state = 2291;
                this.match(FlinkSqlParser.DOT);
                this.state = 2292;
                this.identifier();
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
    public tablePathCreate(): TablePathCreateContext {
        let localContext = new TablePathCreateContext(this.context, this.state);
        this.enterRule(localContext, 342, FlinkSqlParser.RULE_tablePathCreate);
        let _la: number;
        try {
            this.state = 2307;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 277, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2295;
                this.identifier();
                this.state = 2298;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 516) {
                    {
                    this.state = 2296;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2297;
                    this.identifier();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2300;
                this.identifier();
                this.state = 2301;
                this.match(FlinkSqlParser.DOT);
                this.state = 2302;
                this.identifier();
                this.state = 2305;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 516) {
                    {
                    this.state = 2303;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2304;
                    this.identifier();
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
    public tablePath(): TablePathContext {
        let localContext = new TablePathContext(this.context, this.state);
        this.enterRule(localContext, 344, FlinkSqlParser.RULE_tablePath);
        try {
            this.state = 2321;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 280, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2309;
                this.identifier();
                this.state = 2312;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 278, this.context) ) {
                case 1:
                    {
                    this.state = 2310;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2311;
                    this.identifier();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2314;
                this.identifier();
                this.state = 2315;
                this.match(FlinkSqlParser.DOT);
                this.state = 2316;
                this.identifier();
                this.state = 2319;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 279, this.context) ) {
                case 1:
                    {
                    this.state = 2317;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2318;
                    this.identifier();
                    }
                    break;
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
    public viewPath(): ViewPathContext {
        let localContext = new ViewPathContext(this.context, this.state);
        this.enterRule(localContext, 346, FlinkSqlParser.RULE_viewPath);
        try {
            this.state = 2335;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 283, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2323;
                this.identifier();
                this.state = 2326;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 281, this.context) ) {
                case 1:
                    {
                    this.state = 2324;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2325;
                    this.identifier();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2328;
                this.identifier();
                this.state = 2329;
                this.match(FlinkSqlParser.DOT);
                this.state = 2330;
                this.identifier();
                this.state = 2333;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 282, this.context) ) {
                case 1:
                    {
                    this.state = 2331;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2332;
                    this.identifier();
                    }
                    break;
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
    public viewPathCreate(): ViewPathCreateContext {
        let localContext = new ViewPathCreateContext(this.context, this.state);
        this.enterRule(localContext, 348, FlinkSqlParser.RULE_viewPathCreate);
        let _la: number;
        try {
            this.state = 2349;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 286, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2337;
                this.identifier();
                this.state = 2340;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 516) {
                    {
                    this.state = 2338;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2339;
                    this.identifier();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2342;
                this.identifier();
                this.state = 2343;
                this.match(FlinkSqlParser.DOT);
                this.state = 2344;
                this.identifier();
                this.state = 2347;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 516) {
                    {
                    this.state = 2345;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2346;
                    this.identifier();
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
    public uid(): UidContext {
        let localContext = new UidContext(this.context, this.state);
        this.enterRule(localContext, 350, FlinkSqlParser.RULE_uid);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2351;
            this.identifier();
            this.state = 2356;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 287, this.context);
            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1 + 1) {
                    {
                    {
                    this.state = 2352;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2353;
                    this.identifier();
                    }
                    }
                }
                this.state = 2358;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 287, this.context);
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
    public withOption(): WithOptionContext {
        let localContext = new WithOptionContext(this.context, this.state);
        this.enterRule(localContext, 352, FlinkSqlParser.RULE_withOption);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2359;
            this.match(FlinkSqlParser.KW_WITH);
            this.state = 2360;
            this.tablePropertyList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 354, FlinkSqlParser.RULE_ifNotExists);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2362;
            this.match(FlinkSqlParser.KW_IF);
            this.state = 2363;
            this.match(FlinkSqlParser.KW_NOT);
            this.state = 2364;
            this.match(FlinkSqlParser.KW_EXISTS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 356, FlinkSqlParser.RULE_ifExists);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2366;
            this.match(FlinkSqlParser.KW_IF);
            this.state = 2367;
            this.match(FlinkSqlParser.KW_EXISTS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tablePropertyList(): TablePropertyListContext {
        let localContext = new TablePropertyListContext(this.context, this.state);
        this.enterRule(localContext, 358, FlinkSqlParser.RULE_tablePropertyList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2369;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 2370;
            this.tableProperty();
            this.state = 2375;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 523) {
                {
                {
                this.state = 2371;
                this.match(FlinkSqlParser.COMMA);
                this.state = 2372;
                this.tableProperty();
                }
                }
                this.state = 2377;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 2378;
            this.match(FlinkSqlParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableProperty(): TablePropertyContext {
        let localContext = new TablePropertyContext(this.context, this.state);
        this.enterRule(localContext, 360, FlinkSqlParser.RULE_tableProperty);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2380;
            localContext._key = this.tablePropertyKey();
            this.state = 2385;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 140 || _la === 399 || _la === 508 || ((((_la - 540)) & ~0x1F) === 0 && ((1 << (_la - 540)) & 7) !== 0)) {
                {
                this.state = 2382;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 508) {
                    {
                    this.state = 2381;
                    this.match(FlinkSqlParser.EQUAL_SYMBOL);
                    }
                }

                this.state = 2384;
                localContext._value = this.tablePropertyValue();
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
    public tablePropertyKey(): TablePropertyKeyContext {
        let localContext = new TablePropertyKeyContext(this.context, this.state);
        this.enterRule(localContext, 362, FlinkSqlParser.RULE_tablePropertyKey);
        try {
            this.state = 2390;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 291, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2387;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2388;
                this.dereferenceDefinition();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2389;
                this.match(FlinkSqlParser.STRING_LITERAL);
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
    public tablePropertyValue(): TablePropertyValueContext {
        let localContext = new TablePropertyValueContext(this.context, this.state);
        this.enterRule(localContext, 364, FlinkSqlParser.RULE_tablePropertyValue);
        try {
            this.state = 2396;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.DIG_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2392;
                this.match(FlinkSqlParser.DIG_LITERAL);
                }
                break;
            case FlinkSqlParser.REAL_LITERAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2393;
                this.match(FlinkSqlParser.REAL_LITERAL);
                }
                break;
            case FlinkSqlParser.KW_FALSE:
            case FlinkSqlParser.KW_TRUE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2394;
                this.booleanLiteral();
                }
                break;
            case FlinkSqlParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2395;
                this.match(FlinkSqlParser.STRING_LITERAL);
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
    public logicalOperator(): LogicalOperatorContext {
        let localContext = new LogicalOperatorContext(this.context, this.state);
        this.enterRule(localContext, 366, FlinkSqlParser.RULE_logicalOperator);
        try {
            this.state = 2404;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_AND:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2398;
                this.match(FlinkSqlParser.KW_AND);
                }
                break;
            case FlinkSqlParser.BIT_AND_OP:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2399;
                this.match(FlinkSqlParser.BIT_AND_OP);
                this.state = 2400;
                this.match(FlinkSqlParser.BIT_AND_OP);
                }
                break;
            case FlinkSqlParser.KW_OR:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2401;
                this.match(FlinkSqlParser.KW_OR);
                }
                break;
            case FlinkSqlParser.BIT_OR_OP:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2402;
                this.match(FlinkSqlParser.BIT_OR_OP);
                this.state = 2403;
                this.match(FlinkSqlParser.BIT_OR_OP);
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
        this.enterRule(localContext, 368, FlinkSqlParser.RULE_comparisonOperator);
        try {
            this.state = 2420;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 294, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2406;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2407;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2408;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2409;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 2410;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2411;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                this.state = 2412;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2413;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 2414;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2415;
                this.match(FlinkSqlParser.EXCLAMATION_SYMBOL);
                this.state = 2416;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2417;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 2418;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                this.state = 2419;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
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
    public bitOperator(): BitOperatorContext {
        let localContext = new BitOperatorContext(this.context, this.state);
        this.enterRule(localContext, 370, FlinkSqlParser.RULE_bitOperator);
        try {
            this.state = 2429;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.LESS_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2422;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 2423;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                }
                break;
            case FlinkSqlParser.GREATER_SYMBOL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2424;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                this.state = 2425;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                }
                break;
            case FlinkSqlParser.BIT_AND_OP:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2426;
                this.match(FlinkSqlParser.BIT_AND_OP);
                }
                break;
            case FlinkSqlParser.BIT_XOR_OP:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2427;
                this.match(FlinkSqlParser.BIT_XOR_OP);
                }
                break;
            case FlinkSqlParser.BIT_OR_OP:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2428;
                this.match(FlinkSqlParser.BIT_OR_OP);
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
    public mathOperator(): MathOperatorContext {
        let localContext = new MathOperatorContext(this.context, this.state);
        this.enterRule(localContext, 372, FlinkSqlParser.RULE_mathOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2431;
            _la = this.tokenStream.LA(1);
            if(!(_la === 455 || ((((_la - 530)) & ~0x1F) === 0 && ((1 << (_la - 530)) & 221) !== 0))) {
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
    public unaryOperator(): UnaryOperatorContext {
        let localContext = new UnaryOperatorContext(this.context, this.state);
        this.enterRule(localContext, 374, FlinkSqlParser.RULE_unaryOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2433;
            _la = this.tokenStream.LA(1);
            if(!(_la === 243 || ((((_la - 511)) & ~0x1F) === 0 && ((1 << (_la - 511)) & 6291459) !== 0))) {
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
    public constant(): ConstantContext {
        let localContext = new ConstantContext(this.context, this.state);
        this.enterRule(localContext, 376, FlinkSqlParser.RULE_constant);
        let _la: number;
        try {
            this.state = 2449;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_INTERVAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2435;
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2436;
                this.timePointLiteral();
                }
                break;
            case FlinkSqlParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2437;
                this.stringLiteral();
                }
                break;
            case FlinkSqlParser.HYPHEN_SIGN:
            case FlinkSqlParser.DIG_LITERAL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2439;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 532) {
                    {
                    this.state = 2438;
                    this.match(FlinkSqlParser.HYPHEN_SIGN);
                    }
                }

                this.state = 2441;
                this.decimalLiteral();
                }
                break;
            case FlinkSqlParser.KW_FALSE:
            case FlinkSqlParser.KW_TRUE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2442;
                this.booleanLiteral();
                }
                break;
            case FlinkSqlParser.REAL_LITERAL:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2443;
                this.match(FlinkSqlParser.REAL_LITERAL);
                }
                break;
            case FlinkSqlParser.BIT_STRING:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2444;
                this.match(FlinkSqlParser.BIT_STRING);
                }
                break;
            case FlinkSqlParser.KW_NOT:
            case FlinkSqlParser.KW_NULL:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2446;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 243) {
                    {
                    this.state = 2445;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 2448;
                this.match(FlinkSqlParser.KW_NULL);
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
    public timePointLiteral(): TimePointLiteralContext {
        let localContext = new TimePointLiteralContext(this.context, this.state);
        this.enterRule(localContext, 378, FlinkSqlParser.RULE_timePointLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2451;
            this.timePointUnit();
            this.state = 2452;
            this.stringLiteral();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stringLiteral(): StringLiteralContext {
        let localContext = new StringLiteralContext(this.context, this.state);
        this.enterRule(localContext, 380, FlinkSqlParser.RULE_stringLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2454;
            this.match(FlinkSqlParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public decimalLiteral(): DecimalLiteralContext {
        let localContext = new DecimalLiteralContext(this.context, this.state);
        this.enterRule(localContext, 382, FlinkSqlParser.RULE_decimalLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2456;
            this.match(FlinkSqlParser.DIG_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public booleanLiteral(): BooleanLiteralContext {
        let localContext = new BooleanLiteralContext(this.context, this.state);
        this.enterRule(localContext, 384, FlinkSqlParser.RULE_booleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2458;
            _la = this.tokenStream.LA(1);
            if(!(_la === 140 || _la === 399)) {
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
    public setQuantifier(): SetQuantifierContext {
        let localContext = new SetQuantifierContext(this.context, this.state);
        this.enterRule(localContext, 386, FlinkSqlParser.RULE_setQuantifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2460;
            _la = this.tokenStream.LA(1);
            if(!(_la === 5 || _la === 113)) {
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
    public timePointUnit(): TimePointUnitContext {
        let localContext = new TimePointUnitContext(this.context, this.state);
        this.enterRule(localContext, 388, FlinkSqlParser.RULE_timePointUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2462;
            _la = this.tokenStream.LA(1);
            if(!(_la === 97 || _la === 166 || _la === 224 || _la === 231 || _la === 336 || _la === 439 || ((((_la - 473)) & ~0x1F) === 0 && ((1 << (_la - 473)) & 262149) !== 0) || _la === 505)) {
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
    public timeIntervalUnit(): TimeIntervalUnitContext {
        let localContext = new TimeIntervalUnitContext(this.context, this.state);
        this.enterRule(localContext, 390, FlinkSqlParser.RULE_timeIntervalUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2464;
            _la = this.tokenStream.LA(1);
            if(!(_la === 97 || _la === 166 || _la === 224 || _la === 231 || _la === 336 || ((((_la - 430)) & ~0x1F) === 0 && ((1 << (_la - 430)) & 140542465) !== 0) || ((((_la - 463)) & ~0x1F) === 0 && ((1 << (_la - 463)) & 2415983617) !== 0) || _la === 505 || _la === 506)) {
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
    public reservedKeywordsUsedAsFuncParam(): ReservedKeywordsUsedAsFuncParamContext {
        let localContext = new ReservedKeywordsUsedAsFuncParamContext(this.context, this.state);
        this.enterRule(localContext, 392, FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncParam);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2466;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 268435713) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 193) !== 0) || _la === 113 || ((((_la - 202)) & ~0x1F) === 0 && ((1 << (_la - 202)) & 385) !== 0) || _la === 391 || _la === 416 || _la === 530)) {
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
    public reservedKeywordsNoParamsUsedAsFuncName(): ReservedKeywordsNoParamsUsedAsFuncNameContext {
        let localContext = new ReservedKeywordsNoParamsUsedAsFuncNameContext(this.context, this.state);
        this.enterRule(localContext, 394, FlinkSqlParser.RULE_reservedKeywordsNoParamsUsedAsFuncName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2468;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 193) !== 0) || _la === 209 || _la === 210)) {
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
    public reservedKeywordsFollowParamsUsedAsFuncName(): ReservedKeywordsFollowParamsUsedAsFuncNameContext {
        let localContext = new ReservedKeywordsFollowParamsUsedAsFuncNameContext(this.context, this.state);
        this.enterRule(localContext, 396, FlinkSqlParser.RULE_reservedKeywordsFollowParamsUsedAsFuncName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2470;
            _la = this.tokenStream.LA(1);
            if(!(_la === 91 || _la === 380 || _la === 381)) {
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
    public reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext {
        let localContext = new ReservedKeywordsUsedAsFuncNameContext(this.context, this.state);
        this.enterRule(localContext, 398, FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2472;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 8396816) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 2147811433) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 25165825) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 134221825) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 675283025) !== 0) || ((((_la - 188)) & ~0x1F) === 0 && ((1 << (_la - 188)) & 277391867) !== 0) || ((((_la - 222)) & ~0x1F) === 0 && ((1 << (_la - 222)) & 41943565) !== 0) || ((((_la - 266)) & ~0x1F) === 0 && ((1 << (_la - 266)) & 537530369) !== 0) || ((((_la - 319)) & ~0x1F) === 0 && ((1 << (_la - 319)) & 131185) !== 0) || ((((_la - 359)) & ~0x1F) === 0 && ((1 << (_la - 359)) & 8389763) !== 0) || ((((_la - 397)) & ~0x1F) === 0 && ((1 << (_la - 397)) & 100679705) !== 0) || _la === 439 || _la === 472 || _la === 491 || _la === 505)) {
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
    public nonReservedKeywords(): NonReservedKeywordsContext {
        let localContext = new NonReservedKeywordsContext(this.context, this.state);
        this.enterRule(localContext, 400, FlinkSqlParser.RULE_nonReservedKeywords);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2474;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 440)) & ~0x1F) === 0 && ((1 << (_la - 440)) & 4294967295) !== 0) || ((((_la - 472)) & ~0x1F) === 0 && ((1 << (_la - 472)) & 4294967295) !== 0) || ((((_la - 504)) & ~0x1F) === 0 && ((1 << (_la - 504)) & 15) !== 0))) {
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
        case 26:
            return this.columnName_sempred(localContext as ColumnNameContext, predIndex);
        case 80:
            return this.queryStatement_sempred(localContext as QueryStatementContext, predIndex);
        case 90:
            return this.tableExpression_sempred(localContext as TableExpressionContext, predIndex);
        case 133:
            return this.booleanExpression_sempred(localContext as BooleanExpressionContext, predIndex);
        case 137:
            return this.valueExpression_sempred(localContext as ValueExpressionContext, predIndex);
        case 139:
            return this.primaryExpression_sempred(localContext as PrimaryExpressionContext, predIndex);
        }
        return true;
    }
    private columnName_sempred(localContext: ColumnNameContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.shouldMatchEmpty();
        }
        return true;
    }
    private queryStatement_sempred(localContext: QueryStatementContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.precpred(this.context, 3);
        }
        return true;
    }
    private tableExpression_sempred(localContext: TableExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 2:
            return this.precpred(this.context, 3);
        case 3:
            return this.precpred(this.context, 4);
        }
        return true;
    }
    private booleanExpression_sempred(localContext: BooleanExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 4:
            return this.precpred(this.context, 3);
        case 5:
            return this.precpred(this.context, 2);
        case 6:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private valueExpression_sempred(localContext: ValueExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 7:
            return this.precpred(this.context, 6);
        case 8:
            return this.precpred(this.context, 5);
        case 9:
            return this.precpred(this.context, 4);
        case 10:
            return this.precpred(this.context, 3);
        case 11:
            return this.precpred(this.context, 2);
        case 12:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private primaryExpression_sempred(localContext: PrimaryExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 13:
            return this.precpred(this.context, 5);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,544,2477,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        7,186,2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,
        2,192,7,192,2,193,7,193,2,194,7,194,2,195,7,195,2,196,7,196,2,197,
        7,197,2,198,7,198,2,199,7,199,2,200,7,200,1,0,5,0,404,8,0,10,0,12,
        0,407,9,0,1,0,1,0,1,1,1,1,3,1,413,8,1,1,1,3,1,416,8,1,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,430,8,2,1,3,1,3,1,4,1,
        4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,448,8,4,1,
        5,1,5,3,5,452,8,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,461,8,7,1,7,1,
        7,1,7,3,7,466,8,7,1,8,1,8,1,8,5,8,471,8,8,10,8,12,8,474,9,8,1,9,
        1,9,1,10,1,10,1,10,1,10,1,10,1,10,3,10,484,8,10,1,11,1,11,1,11,1,
        11,1,11,5,11,491,8,11,10,11,12,11,494,9,11,1,12,1,12,1,12,1,12,1,
        12,1,12,1,12,1,12,1,12,3,12,505,8,12,1,12,3,12,508,8,12,1,12,1,12,
        1,12,1,12,1,12,3,12,515,8,12,1,12,3,12,518,8,12,1,12,1,12,1,12,1,
        12,1,12,1,12,3,12,526,8,12,1,12,1,12,3,12,530,8,12,1,12,1,12,1,12,
        3,12,535,8,12,1,12,3,12,538,8,12,1,13,1,13,1,13,1,13,1,13,3,13,545,
        8,13,1,14,1,14,1,14,1,14,1,15,1,15,3,15,553,8,15,1,16,1,16,3,16,
        557,8,16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,3,18,
        569,8,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,577,8,18,1,18,1,18,3,
        18,581,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
        18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
        18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,613,8,18,1,19,3,19,616,8,19,
        1,19,4,19,619,8,19,11,19,12,19,620,1,20,1,20,3,20,625,8,20,1,21,
        1,21,3,21,629,8,21,1,21,1,21,3,21,633,8,21,1,21,1,21,1,21,1,21,1,
        21,5,21,640,8,21,10,21,12,21,643,9,21,1,21,1,21,3,21,647,8,21,1,
        21,1,21,3,21,651,8,21,1,21,1,21,3,21,655,8,21,1,21,1,21,1,21,3,21,
        660,8,21,1,21,3,21,663,8,21,1,21,1,21,3,21,667,8,21,1,22,1,22,1,
        22,3,22,672,8,22,1,22,1,22,1,22,1,22,3,22,678,8,22,1,23,1,23,1,23,
        3,23,683,8,23,1,24,1,24,1,24,3,24,688,8,24,1,24,1,24,3,24,692,8,
        24,1,25,1,25,3,25,696,8,25,1,26,1,26,3,26,700,8,26,1,27,1,27,1,28,
        1,28,1,28,1,28,5,28,708,8,28,10,28,12,28,711,9,28,1,28,1,28,1,29,
        1,29,1,29,3,29,718,8,29,1,29,1,29,3,29,722,8,29,1,29,1,29,3,29,726,
        8,29,1,29,1,29,3,29,730,8,29,1,29,1,29,3,29,734,8,29,1,29,1,29,3,
        29,738,8,29,1,29,1,29,3,29,742,8,29,1,29,1,29,3,29,746,8,29,1,29,
        1,29,3,29,750,8,29,3,29,752,8,29,1,30,1,30,1,30,1,30,1,31,1,31,1,
        31,1,31,3,31,762,8,31,1,31,1,31,1,32,1,32,1,32,1,32,3,32,770,8,32,
        1,32,1,32,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,
        1,35,1,35,1,35,1,35,1,35,1,35,1,35,5,35,792,8,35,10,35,12,35,795,
        9,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,5,35,806,8,35,
        10,35,12,35,809,9,35,1,35,1,35,3,35,813,8,35,1,36,1,36,3,36,817,
        8,36,1,36,1,36,1,36,1,36,3,36,823,8,36,1,36,3,36,826,8,36,1,36,3,
        36,829,8,36,1,37,1,37,1,37,1,37,1,37,3,37,836,8,37,1,37,3,37,839,
        8,37,1,38,1,38,1,39,1,39,1,39,1,39,1,39,3,39,848,8,39,1,40,1,40,
        1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,3,42,860,8,42,1,42,1,42,
        1,42,1,42,1,42,1,42,1,43,1,43,1,44,1,44,1,44,1,44,1,45,1,45,1,45,
        1,45,1,46,1,46,1,46,1,46,5,46,882,8,46,10,46,12,46,885,9,46,1,46,
        1,46,1,47,1,47,1,47,1,47,1,47,5,47,894,8,47,10,47,12,47,897,9,47,
        1,47,1,47,3,47,901,8,47,1,48,1,48,3,48,905,8,48,1,49,1,49,1,49,1,
        49,5,49,911,8,49,10,49,12,49,914,9,49,1,49,3,49,917,8,49,1,50,1,
        50,1,50,1,50,3,50,923,8,50,1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,
        52,3,52,933,8,52,1,52,1,52,1,52,3,52,938,8,52,1,52,1,52,1,53,1,53,
        3,53,944,8,53,1,53,1,53,3,53,948,8,53,1,53,1,53,3,53,952,8,53,1,
        53,1,53,3,53,956,8,53,1,53,1,53,1,53,1,54,1,54,1,54,1,54,3,54,965,
        8,54,1,54,1,54,3,54,969,8,54,1,54,1,54,1,54,1,54,1,54,3,54,976,8,
        54,1,54,3,54,979,8,54,1,55,1,55,1,55,1,55,1,55,1,55,5,55,987,8,55,
        10,55,12,55,990,9,55,1,56,1,56,1,57,1,57,1,57,3,57,997,8,57,1,57,
        1,57,1,57,1,57,1,57,1,57,3,57,1005,8,57,1,58,1,58,3,58,1009,8,58,
        1,58,1,58,1,58,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,60,1,60,
        3,60,1024,8,60,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,63,1,63,
        1,63,1,64,1,64,1,64,1,64,1,64,1,64,3,64,1043,8,64,1,65,1,65,1,65,
        1,65,1,65,1,66,1,66,1,66,1,66,3,66,1054,8,66,1,66,1,66,3,66,1058,
        8,66,1,66,1,66,1,66,1,66,1,66,3,66,1065,8,66,1,67,1,67,1,67,3,67,
        1070,8,67,1,67,1,67,1,68,1,68,3,68,1076,8,68,1,68,1,68,3,68,1080,
        8,68,1,68,1,68,1,69,1,69,1,69,3,69,1087,8,69,1,69,1,69,3,69,1091,
        8,69,1,70,1,70,3,70,1095,8,70,1,70,1,70,3,70,1099,8,70,1,70,1,70,
        1,71,1,71,1,71,1,71,3,71,1107,8,71,1,71,1,71,3,71,1111,8,71,1,71,
        1,71,1,72,3,72,1116,8,72,1,72,1,72,1,72,1,72,3,72,1122,8,72,1,73,
        1,73,1,73,1,73,3,73,1128,8,73,1,73,3,73,1131,8,73,1,73,1,73,3,73,
        1135,8,73,1,74,1,74,1,74,1,75,1,75,1,75,1,75,5,75,1144,8,75,10,75,
        12,75,1147,9,75,1,76,1,76,1,76,1,76,5,76,1153,8,76,10,76,12,76,1156,
        9,76,1,76,1,76,1,77,1,77,3,77,1162,8,77,1,78,1,78,1,78,1,78,1,78,
        1,78,1,78,4,78,1171,8,78,11,78,12,78,1172,1,78,1,78,1,79,1,79,1,
        79,1,79,1,79,1,79,4,79,1183,8,79,11,79,12,79,1184,1,79,1,79,1,80,
        1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,3,80,1200,8,80,
        1,80,3,80,1203,8,80,1,80,1,80,3,80,1207,8,80,1,80,3,80,1210,8,80,
        3,80,1212,8,80,1,80,1,80,1,80,3,80,1217,8,80,1,80,1,80,3,80,1221,
        8,80,1,80,3,80,1224,8,80,5,80,1226,8,80,10,80,12,80,1229,9,80,1,
        81,1,81,1,81,1,81,5,81,1235,8,81,10,81,12,81,1238,9,81,1,82,1,82,
        1,82,1,82,5,82,1244,8,82,10,82,12,82,1247,9,82,1,83,1,83,1,83,1,
        83,1,83,5,83,1254,8,83,10,83,12,83,1257,9,83,1,83,1,83,3,83,1261,
        8,83,1,83,1,83,1,83,1,83,1,83,1,84,1,84,1,85,1,85,3,85,1272,8,85,
        1,85,3,85,1275,8,85,1,85,3,85,1278,8,85,1,85,3,85,1281,8,85,1,85,
        3,85,1284,8,85,1,85,1,85,1,85,1,85,3,85,1290,8,85,1,86,1,86,3,86,
        1294,8,86,1,86,1,86,1,86,1,86,5,86,1300,8,86,10,86,12,86,1303,9,
        86,3,86,1305,8,86,1,87,1,87,1,87,3,87,1310,8,87,1,87,3,87,1313,8,
        87,1,87,1,87,3,87,1317,8,87,1,87,3,87,1320,8,87,3,87,1322,8,87,1,
        88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,3,88,1336,
        8,88,1,89,1,89,1,89,1,90,1,90,1,90,1,90,5,90,1345,8,90,10,90,12,
        90,1348,9,90,1,90,1,90,3,90,1352,8,90,1,90,1,90,1,90,1,90,1,90,1,
        90,3,90,1360,8,90,1,90,3,90,1363,8,90,1,90,3,90,1366,8,90,1,90,1,
        90,1,90,3,90,1371,8,90,5,90,1373,8,90,10,90,12,90,1376,9,90,1,91,
        1,91,3,91,1380,8,91,1,92,3,92,1383,8,92,1,92,1,92,3,92,1387,8,92,
        1,92,1,92,3,92,1391,8,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,3,92,
        1400,8,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,3,92,1411,
        8,92,1,93,1,93,1,93,1,93,1,93,1,93,1,94,1,94,1,95,1,95,1,95,1,95,
        1,95,1,96,1,96,1,96,1,96,1,96,1,97,1,97,1,97,1,97,1,97,5,97,1436,
        8,97,10,97,12,97,1439,9,97,1,97,1,97,1,98,1,98,1,99,1,99,1,99,1,
        99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,3,99,1460,
        8,99,1,100,1,100,1,101,1,101,1,101,1,101,1,101,1,102,1,102,1,102,
        1,102,3,102,1473,8,102,1,103,1,103,1,103,1,104,1,104,1,104,1,104,
        1,104,5,104,1483,8,104,10,104,12,104,1486,9,104,1,105,1,105,1,105,
        1,105,1,105,1,105,1,105,1,105,5,105,1496,8,105,10,105,12,105,1499,
        9,105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,5,105,1508,8,105,
        10,105,12,105,1511,9,105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,
        5,105,1520,8,105,10,105,12,105,1523,9,105,1,105,1,105,1,105,3,105,
        1528,8,105,1,106,1,106,1,106,1,107,1,107,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,109,1,109,1,110,1,110,1,111,1,111,1,111,1,112,
        1,112,1,112,1,112,5,112,1553,8,112,10,112,12,112,1556,9,112,1,113,
        1,113,1,113,1,113,1,114,3,114,1563,8,114,1,114,1,114,3,114,1567,
        8,114,1,114,3,114,1570,8,114,1,114,3,114,1573,8,114,1,114,1,114,
        1,115,1,115,1,115,3,115,1580,8,115,1,115,3,115,1583,8,115,1,115,
        3,115,1586,8,115,1,115,3,115,1589,8,115,1,115,3,115,1592,8,115,1,
        115,3,115,1595,8,115,1,115,1,115,1,115,3,115,1600,8,115,1,115,3,
        115,1603,8,115,1,116,1,116,1,116,1,116,1,116,5,116,1610,8,116,10,
        116,12,116,1613,9,116,1,117,1,117,3,117,1617,8,117,1,117,3,117,1620,
        8,117,1,117,1,117,3,117,1624,8,117,1,118,1,118,1,118,3,118,1629,
        8,118,1,119,1,119,1,119,1,119,3,119,1635,8,119,1,119,1,119,1,119,
        3,119,1640,8,119,5,119,1642,8,119,10,119,12,119,1645,9,119,1,120,
        1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,
        1,120,1,120,1,120,1,120,3,120,1663,8,120,1,121,1,121,1,121,1,121,
        5,121,1669,8,121,10,121,12,121,1672,9,121,1,122,1,122,1,122,4,122,
        1677,8,122,11,122,12,122,1678,1,122,1,122,3,122,1683,8,122,1,123,
        1,123,3,123,1687,8,123,1,124,1,124,1,124,1,124,1,124,1,124,1,124,
        1,124,3,124,1697,8,124,1,125,1,125,1,125,1,125,1,125,1,125,1,125,
        1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,
        1,125,1,125,1,125,1,125,1,125,1,125,3,125,1723,8,125,1,126,1,126,
        1,126,1,126,5,126,1729,8,126,10,126,12,126,1732,9,126,1,127,1,127,
        1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,
        1,127,1,127,3,127,1749,8,127,1,128,1,128,1,128,1,128,1,128,1,129,
        1,129,1,129,1,129,1,129,1,129,3,129,1762,8,129,1,130,1,130,1,130,
        1,130,1,130,1,130,3,130,1770,8,130,1,131,1,131,1,131,1,132,1,132,
        1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,3,133,
        1787,8,133,3,133,1789,8,133,1,133,1,133,1,133,1,133,1,133,1,133,
        1,133,1,133,1,133,3,133,1800,8,133,1,133,5,133,1803,8,133,10,133,
        12,133,1806,9,133,1,134,3,134,1809,8,134,1,134,1,134,3,134,1813,
        8,134,1,134,1,134,1,134,1,134,1,134,3,134,1820,8,134,1,134,1,134,
        1,134,1,134,1,134,5,134,1827,8,134,10,134,12,134,1830,9,134,1,134,
        1,134,1,134,3,134,1835,8,134,1,134,1,134,1,134,1,134,1,134,1,134,
        1,134,1,134,1,134,1,134,1,134,3,134,1848,8,134,1,134,1,134,1,134,
        1,134,1,134,3,134,1855,8,134,1,134,1,134,1,134,3,134,1860,8,134,
        1,134,1,134,1,134,1,134,3,134,1866,8,134,1,134,1,134,1,134,1,134,
        1,134,3,134,1873,8,134,1,134,1,134,1,134,1,134,1,134,3,134,1880,
        8,134,3,134,1882,8,134,1,135,1,135,1,135,1,135,1,135,1,135,1,135,
        1,135,3,135,1892,8,135,1,136,3,136,1895,8,136,1,136,1,136,1,136,
        1,136,1,136,1,136,1,136,1,136,5,136,1905,8,136,10,136,12,136,1908,
        9,136,1,136,1,136,3,136,1912,8,136,1,136,3,136,1915,8,136,1,136,
        1,136,1,136,1,136,3,136,1921,8,136,3,136,1923,8,136,1,137,1,137,
        1,137,1,137,3,137,1929,8,137,1,137,1,137,1,137,1,137,1,137,1,137,
        1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,
        1,137,1,137,5,137,1950,8,137,10,137,12,137,1953,9,137,1,138,1,138,
        1,138,1,138,1,138,3,138,1960,8,138,1,138,1,138,1,138,5,138,1965,
        8,138,10,138,12,138,1968,9,138,3,138,1970,8,138,1,138,1,138,3,138,
        1974,8,138,1,139,1,139,1,139,4,139,1979,8,139,11,139,12,139,1980,
        1,139,1,139,3,139,1985,8,139,1,139,1,139,1,139,1,139,1,139,4,139,
        1992,8,139,11,139,12,139,1993,1,139,1,139,3,139,1998,8,139,1,139,
        1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,
        1,139,1,139,3,139,2014,8,139,1,139,1,139,1,139,1,139,1,139,1,139,
        1,139,3,139,2023,8,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,
        1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,
        1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,
        1,139,1,139,1,139,1,139,3,139,2058,8,139,1,139,1,139,1,139,1,139,
        1,139,5,139,2065,8,139,10,139,12,139,2068,9,139,1,140,1,140,1,141,
        1,141,1,141,1,141,3,141,2076,8,141,1,142,1,142,1,142,1,142,3,142,
        2082,8,142,1,143,1,143,3,143,2086,8,143,1,144,1,144,1,144,1,144,
        1,144,1,144,1,144,1,144,3,144,2096,8,144,1,145,1,145,1,145,1,145,
        3,145,2102,8,145,1,145,1,145,1,145,1,145,3,145,2108,8,145,1,145,
        1,145,3,145,2112,8,145,1,145,1,145,1,145,1,145,3,145,2118,8,145,
        1,145,1,145,3,145,2122,8,145,1,146,1,146,1,146,1,146,3,146,2128,
        8,146,3,146,2130,8,146,1,146,3,146,2133,8,146,1,146,3,146,2136,8,
        146,1,146,1,146,1,146,1,146,3,146,2142,8,146,1,146,1,146,1,146,1,
        146,3,146,2148,8,146,1,147,3,147,2151,8,147,1,147,1,147,3,147,2155,
        8,147,1,147,1,147,1,147,1,147,5,147,2161,8,147,10,147,12,147,2164,
        9,147,1,147,3,147,2167,8,147,5,147,2169,8,147,10,147,12,147,2172,
        9,147,1,147,1,147,3,147,2176,8,147,1,147,1,147,3,147,2180,8,147,
        1,148,5,148,2183,8,148,10,148,12,148,2186,9,148,1,148,1,148,3,148,
        2190,8,148,1,148,1,148,3,148,2194,8,148,1,149,1,149,1,150,1,150,
        1,151,1,151,3,151,2202,8,151,1,152,1,152,1,152,3,152,2207,8,152,
        1,153,1,153,3,153,2211,8,153,1,154,1,154,1,154,4,154,2216,8,154,
        11,154,12,154,2217,1,155,1,155,1,155,3,155,2223,8,155,1,156,1,156,
        1,156,1,156,1,156,1,157,3,157,2231,8,157,1,157,1,157,3,157,2235,
        8,157,1,158,3,158,2238,8,158,1,158,1,158,3,158,2242,8,158,1,159,
        1,159,1,159,1,160,1,160,4,160,2249,8,160,11,160,12,160,2250,1,160,
        3,160,2254,8,160,1,161,1,161,1,161,1,161,1,162,1,162,1,162,5,162,
        2263,8,162,10,162,12,162,2266,9,162,1,163,1,163,1,163,3,163,2271,
        8,163,1,164,1,164,1,165,1,165,1,166,1,166,1,166,1,166,1,166,1,167,
        1,167,1,168,1,168,1,169,1,169,1,169,3,169,2289,8,169,1,170,1,170,
        1,170,3,170,2294,8,170,1,171,1,171,1,171,3,171,2299,8,171,1,171,
        1,171,1,171,1,171,1,171,3,171,2306,8,171,3,171,2308,8,171,1,172,
        1,172,1,172,3,172,2313,8,172,1,172,1,172,1,172,1,172,1,172,3,172,
        2320,8,172,3,172,2322,8,172,1,173,1,173,1,173,3,173,2327,8,173,1,
        173,1,173,1,173,1,173,1,173,3,173,2334,8,173,3,173,2336,8,173,1,
        174,1,174,1,174,3,174,2341,8,174,1,174,1,174,1,174,1,174,1,174,3,
        174,2348,8,174,3,174,2350,8,174,1,175,1,175,1,175,5,175,2355,8,175,
        10,175,12,175,2358,9,175,1,176,1,176,1,176,1,177,1,177,1,177,1,177,
        1,178,1,178,1,178,1,179,1,179,1,179,1,179,5,179,2374,8,179,10,179,
        12,179,2377,9,179,1,179,1,179,1,180,1,180,3,180,2383,8,180,1,180,
        3,180,2386,8,180,1,181,1,181,1,181,3,181,2391,8,181,1,182,1,182,
        1,182,1,182,3,182,2397,8,182,1,183,1,183,1,183,1,183,1,183,1,183,
        3,183,2405,8,183,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,
        1,184,1,184,1,184,1,184,1,184,1,184,3,184,2421,8,184,1,185,1,185,
        1,185,1,185,1,185,1,185,1,185,3,185,2430,8,185,1,186,1,186,1,187,
        1,187,1,188,1,188,1,188,1,188,3,188,2440,8,188,1,188,1,188,1,188,
        1,188,1,188,3,188,2447,8,188,1,188,3,188,2450,8,188,1,189,1,189,
        1,189,1,190,1,190,1,191,1,191,1,192,1,192,1,193,1,193,1,194,1,194,
        1,195,1,195,1,196,1,196,1,197,1,197,1,198,1,198,1,199,1,199,1,200,
        1,200,1,200,1,2356,5,160,180,266,274,278,201,0,2,4,6,8,10,12,14,
        16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
        60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,
        102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,
        134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,
        166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,
        198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,
        230,232,234,236,238,240,242,244,246,248,250,252,254,256,258,260,
        262,264,266,268,270,272,274,276,278,280,282,284,286,288,290,292,
        294,296,298,300,302,304,306,308,310,312,314,316,318,320,322,324,
        326,328,330,332,334,336,338,340,342,344,346,348,350,352,354,356,
        358,360,362,364,366,368,370,372,374,376,378,380,382,384,386,388,
        390,392,394,396,398,400,0,48,2,0,109,109,453,453,3,0,45,45,128,128,
        190,190,4,0,42,42,90,90,425,425,467,467,2,0,444,444,450,450,2,0,
        152,152,171,171,2,0,440,440,492,492,2,0,485,488,490,490,3,0,32,32,
        91,91,246,246,11,0,28,29,35,35,46,46,92,92,179,180,346,346,362,362,
        380,380,383,383,389,389,419,420,2,0,436,436,438,438,4,0,101,102,
        115,115,144,144,248,248,2,0,13,13,233,233,2,0,458,458,465,465,3,
        0,5,5,272,272,447,447,3,0,268,268,458,458,465,465,3,0,428,428,461,
        461,480,480,3,0,332,332,468,468,484,484,2,0,443,443,493,493,2,0,
        184,184,267,267,3,0,130,130,181,181,405,405,4,0,153,153,175,175,
        203,203,319,319,3,0,448,448,462,462,502,502,4,0,252,252,449,449,
        497,499,501,501,2,0,74,74,322,322,3,0,462,462,495,495,502,502,2,
        0,442,442,453,453,2,0,460,460,470,470,2,0,294,294,324,324,4,0,140,
        140,246,246,399,399,407,407,2,0,19,19,371,371,2,0,5,5,11,11,2,0,
        512,512,532,533,4,0,455,455,530,530,534,534,537,537,2,0,532,533,
        535,535,1,0,532,533,1,0,541,542,2,0,541,541,544,544,4,0,455,455,
        530,530,532,534,536,537,3,0,243,243,511,512,532,533,2,0,140,140,
        399,399,2,0,5,5,113,113,10,0,97,97,166,166,224,224,231,231,336,336,
        439,439,473,473,475,475,491,491,505,505,15,0,97,97,166,166,224,224,
        231,231,336,336,430,430,439,439,445,445,451,452,457,457,463,463,
        473,478,491,491,494,494,505,506,11,0,5,5,13,13,33,33,78,78,84,85,
        113,113,202,202,209,210,391,391,416,416,530,530,3,0,78,78,84,85,
        209,210,2,0,91,91,380,381,53,0,4,4,13,13,23,23,38,38,41,41,43,44,
        54,54,56,56,69,69,75,75,98,99,107,107,119,119,134,134,139,139,143,
        143,145,145,161,161,166,166,168,168,188,189,191,196,199,199,201,
        201,203,203,207,207,211,211,216,216,222,222,224,225,231,231,245,
        245,247,247,266,266,278,278,283,283,285,285,295,295,319,319,323,
        325,336,336,359,360,366,366,369,369,382,382,397,397,400,401,411,
        411,422,423,439,439,472,472,491,491,505,505,1,0,440,507,2715,0,405,
        1,0,0,0,2,415,1,0,0,0,4,429,1,0,0,0,6,431,1,0,0,0,8,447,1,0,0,0,
        10,451,1,0,0,0,12,453,1,0,0,0,14,456,1,0,0,0,16,467,1,0,0,0,18,475,
        1,0,0,0,20,483,1,0,0,0,22,485,1,0,0,0,24,537,1,0,0,0,26,539,1,0,
        0,0,28,546,1,0,0,0,30,550,1,0,0,0,32,554,1,0,0,0,34,558,1,0,0,0,
        36,612,1,0,0,0,38,618,1,0,0,0,40,624,1,0,0,0,42,626,1,0,0,0,44,668,
        1,0,0,0,46,682,1,0,0,0,48,684,1,0,0,0,50,695,1,0,0,0,52,699,1,0,
        0,0,54,701,1,0,0,0,56,703,1,0,0,0,58,751,1,0,0,0,60,753,1,0,0,0,
        62,757,1,0,0,0,64,765,1,0,0,0,66,773,1,0,0,0,68,777,1,0,0,0,70,812,
        1,0,0,0,72,828,1,0,0,0,74,830,1,0,0,0,76,840,1,0,0,0,78,842,1,0,
        0,0,80,849,1,0,0,0,82,851,1,0,0,0,84,859,1,0,0,0,86,867,1,0,0,0,
        88,869,1,0,0,0,90,873,1,0,0,0,92,877,1,0,0,0,94,900,1,0,0,0,96,904,
        1,0,0,0,98,906,1,0,0,0,100,922,1,0,0,0,102,924,1,0,0,0,104,929,1,
        0,0,0,106,941,1,0,0,0,108,960,1,0,0,0,110,980,1,0,0,0,112,991,1,
        0,0,0,114,993,1,0,0,0,116,1006,1,0,0,0,118,1013,1,0,0,0,120,1016,
        1,0,0,0,122,1025,1,0,0,0,124,1029,1,0,0,0,126,1033,1,0,0,0,128,1036,
        1,0,0,0,130,1044,1,0,0,0,132,1049,1,0,0,0,134,1066,1,0,0,0,136,1073,
        1,0,0,0,138,1083,1,0,0,0,140,1092,1,0,0,0,142,1102,1,0,0,0,144,1121,
        1,0,0,0,146,1123,1,0,0,0,148,1136,1,0,0,0,150,1139,1,0,0,0,152,1148,
        1,0,0,0,154,1161,1,0,0,0,156,1163,1,0,0,0,158,1176,1,0,0,0,160,1211,
        1,0,0,0,162,1230,1,0,0,0,164,1239,1,0,0,0,166,1248,1,0,0,0,168,1267,
        1,0,0,0,170,1289,1,0,0,0,172,1291,1,0,0,0,174,1321,1,0,0,0,176,1335,
        1,0,0,0,178,1337,1,0,0,0,180,1351,1,0,0,0,182,1377,1,0,0,0,184,1410,
        1,0,0,0,186,1412,1,0,0,0,188,1418,1,0,0,0,190,1420,1,0,0,0,192,1425,
        1,0,0,0,194,1430,1,0,0,0,196,1442,1,0,0,0,198,1459,1,0,0,0,200,1461,
        1,0,0,0,202,1463,1,0,0,0,204,1472,1,0,0,0,206,1474,1,0,0,0,208,1477,
        1,0,0,0,210,1527,1,0,0,0,212,1529,1,0,0,0,214,1532,1,0,0,0,216,1534,
        1,0,0,0,218,1541,1,0,0,0,220,1543,1,0,0,0,222,1545,1,0,0,0,224,1548,
        1,0,0,0,226,1557,1,0,0,0,228,1562,1,0,0,0,230,1576,1,0,0,0,232,1604,
        1,0,0,0,234,1616,1,0,0,0,236,1625,1,0,0,0,238,1630,1,0,0,0,240,1662,
        1,0,0,0,242,1664,1,0,0,0,244,1673,1,0,0,0,246,1684,1,0,0,0,248,1696,
        1,0,0,0,250,1722,1,0,0,0,252,1724,1,0,0,0,254,1748,1,0,0,0,256,1750,
        1,0,0,0,258,1761,1,0,0,0,260,1769,1,0,0,0,262,1771,1,0,0,0,264,1774,
        1,0,0,0,266,1788,1,0,0,0,268,1881,1,0,0,0,270,1891,1,0,0,0,272,1922,
        1,0,0,0,274,1928,1,0,0,0,276,1973,1,0,0,0,278,2057,1,0,0,0,280,2069,
        1,0,0,0,282,2075,1,0,0,0,284,2081,1,0,0,0,286,2085,1,0,0,0,288,2095,
        1,0,0,0,290,2097,1,0,0,0,292,2123,1,0,0,0,294,2170,1,0,0,0,296,2184,
        1,0,0,0,298,2195,1,0,0,0,300,2197,1,0,0,0,302,2201,1,0,0,0,304,2203,
        1,0,0,0,306,2208,1,0,0,0,308,2215,1,0,0,0,310,2219,1,0,0,0,312,2224,
        1,0,0,0,314,2234,1,0,0,0,316,2237,1,0,0,0,318,2243,1,0,0,0,320,2253,
        1,0,0,0,322,2255,1,0,0,0,324,2259,1,0,0,0,326,2270,1,0,0,0,328,2272,
        1,0,0,0,330,2274,1,0,0,0,332,2276,1,0,0,0,334,2281,1,0,0,0,336,2283,
        1,0,0,0,338,2285,1,0,0,0,340,2290,1,0,0,0,342,2307,1,0,0,0,344,2321,
        1,0,0,0,346,2335,1,0,0,0,348,2349,1,0,0,0,350,2351,1,0,0,0,352,2359,
        1,0,0,0,354,2362,1,0,0,0,356,2366,1,0,0,0,358,2369,1,0,0,0,360,2380,
        1,0,0,0,362,2390,1,0,0,0,364,2396,1,0,0,0,366,2404,1,0,0,0,368,2420,
        1,0,0,0,370,2429,1,0,0,0,372,2431,1,0,0,0,374,2433,1,0,0,0,376,2449,
        1,0,0,0,378,2451,1,0,0,0,380,2454,1,0,0,0,382,2456,1,0,0,0,384,2458,
        1,0,0,0,386,2460,1,0,0,0,388,2462,1,0,0,0,390,2464,1,0,0,0,392,2466,
        1,0,0,0,394,2468,1,0,0,0,396,2470,1,0,0,0,398,2472,1,0,0,0,400,2474,
        1,0,0,0,402,404,3,2,1,0,403,402,1,0,0,0,404,407,1,0,0,0,405,403,
        1,0,0,0,405,406,1,0,0,0,406,408,1,0,0,0,407,405,1,0,0,0,408,409,
        5,0,0,1,409,1,1,0,0,0,410,412,3,4,2,0,411,413,5,524,0,0,412,411,
        1,0,0,0,412,413,1,0,0,0,413,416,1,0,0,0,414,416,3,6,3,0,415,410,
        1,0,0,0,415,414,1,0,0,0,416,3,1,0,0,0,417,430,3,8,4,0,418,430,3,
        10,5,0,419,430,3,12,6,0,420,430,3,14,7,0,421,430,3,20,10,0,422,430,
        3,24,12,0,423,430,3,26,13,0,424,430,3,28,14,0,425,430,3,30,15,0,
        426,430,3,32,16,0,427,430,3,34,17,0,428,430,3,36,18,0,429,417,1,
        0,0,0,429,418,1,0,0,0,429,419,1,0,0,0,429,420,1,0,0,0,429,421,1,
        0,0,0,429,422,1,0,0,0,429,423,1,0,0,0,429,424,1,0,0,0,429,425,1,
        0,0,0,429,426,1,0,0,0,429,427,1,0,0,0,429,428,1,0,0,0,430,5,1,0,
        0,0,431,432,5,524,0,0,432,7,1,0,0,0,433,448,3,40,20,0,434,448,3,
        104,52,0,435,448,3,106,53,0,436,448,3,108,54,0,437,448,3,102,51,
        0,438,448,3,114,57,0,439,448,3,128,64,0,440,448,3,130,65,0,441,448,
        3,132,66,0,442,448,3,134,67,0,443,448,3,136,68,0,444,448,3,138,69,
        0,445,448,3,140,70,0,446,448,3,142,71,0,447,433,1,0,0,0,447,434,
        1,0,0,0,447,435,1,0,0,0,447,436,1,0,0,0,447,437,1,0,0,0,447,438,
        1,0,0,0,447,439,1,0,0,0,447,440,1,0,0,0,447,441,1,0,0,0,447,442,
        1,0,0,0,447,443,1,0,0,0,447,444,1,0,0,0,447,445,1,0,0,0,447,446,
        1,0,0,0,448,9,1,0,0,0,449,452,3,160,80,0,450,452,3,144,72,0,451,
        449,1,0,0,0,451,450,1,0,0,0,452,11,1,0,0,0,453,454,7,0,0,0,454,455,
        3,344,172,0,455,13,1,0,0,0,456,460,5,135,0,0,457,461,3,16,8,0,458,
        459,5,482,0,0,459,461,5,147,0,0,460,457,1,0,0,0,460,458,1,0,0,0,
        460,461,1,0,0,0,461,465,1,0,0,0,462,466,3,10,5,0,463,466,3,146,73,
        0,464,466,3,158,79,0,465,462,1,0,0,0,465,463,1,0,0,0,465,464,1,0,
        0,0,466,15,1,0,0,0,467,472,3,18,9,0,468,469,5,523,0,0,469,471,3,
        18,9,0,470,468,1,0,0,0,471,474,1,0,0,0,472,470,1,0,0,0,472,473,1,
        0,0,0,473,17,1,0,0,0,474,472,1,0,0,0,475,476,7,1,0,0,476,19,1,0,
        0,0,477,478,5,413,0,0,478,479,5,444,0,0,479,484,3,334,167,0,480,
        481,5,413,0,0,481,484,3,338,169,0,482,484,3,22,11,0,483,477,1,0,
        0,0,483,480,1,0,0,0,483,482,1,0,0,0,484,21,1,0,0,0,485,486,5,413,
        0,0,486,487,5,229,0,0,487,492,3,350,175,0,488,489,5,523,0,0,489,
        491,3,350,175,0,490,488,1,0,0,0,491,494,1,0,0,0,492,490,1,0,0,0,
        492,493,1,0,0,0,493,23,1,0,0,0,494,492,1,0,0,0,495,496,5,343,0,0,
        496,538,7,2,0,0,497,498,5,343,0,0,498,499,5,76,0,0,499,538,7,3,0,
        0,500,501,5,343,0,0,501,504,5,376,0,0,502,503,7,4,0,0,503,505,3,
        338,169,0,504,502,1,0,0,0,504,505,1,0,0,0,505,507,1,0,0,0,506,508,
        3,272,136,0,507,506,1,0,0,0,507,508,1,0,0,0,508,538,1,0,0,0,509,
        510,5,343,0,0,510,511,5,58,0,0,511,514,7,4,0,0,512,515,3,346,173,
        0,513,515,3,344,172,0,514,512,1,0,0,0,514,513,1,0,0,0,515,517,1,
        0,0,0,516,518,3,272,136,0,517,516,1,0,0,0,517,518,1,0,0,0,518,538,
        1,0,0,0,519,520,5,343,0,0,520,525,5,72,0,0,521,522,5,375,0,0,522,
        526,3,344,172,0,523,524,5,504,0,0,524,526,3,346,173,0,525,521,1,
        0,0,0,525,523,1,0,0,0,526,538,1,0,0,0,527,529,5,343,0,0,528,530,
        5,414,0,0,529,528,1,0,0,0,529,530,1,0,0,0,530,531,1,0,0,0,531,538,
        5,155,0,0,532,534,5,343,0,0,533,535,5,153,0,0,534,533,1,0,0,0,534,
        535,1,0,0,0,535,536,1,0,0,0,536,538,5,229,0,0,537,495,1,0,0,0,537,
        497,1,0,0,0,537,500,1,0,0,0,537,509,1,0,0,0,537,519,1,0,0,0,537,
        527,1,0,0,0,537,532,1,0,0,0,538,25,1,0,0,0,539,540,5,471,0,0,540,
        541,5,228,0,0,541,544,3,350,175,0,542,543,5,436,0,0,543,545,3,358,
        179,0,544,542,1,0,0,0,544,545,1,0,0,0,545,27,1,0,0,0,546,547,5,503,
        0,0,547,548,5,228,0,0,548,549,3,350,175,0,549,29,1,0,0,0,550,552,
        5,342,0,0,551,553,3,360,180,0,552,551,1,0,0,0,552,553,1,0,0,0,553,
        31,1,0,0,0,554,556,5,314,0,0,555,557,3,362,181,0,556,555,1,0,0,0,
        556,557,1,0,0,0,557,33,1,0,0,0,558,559,7,5,0,0,559,560,5,466,0,0,
        560,561,3,112,56,0,561,35,1,0,0,0,562,563,5,440,0,0,563,564,5,466,
        0,0,564,565,5,436,0,0,565,568,3,38,19,0,566,567,5,17,0,0,567,569,
        3,350,175,0,568,566,1,0,0,0,568,569,1,0,0,0,569,613,1,0,0,0,570,
        571,5,440,0,0,571,572,5,459,0,0,572,573,5,436,0,0,573,576,3,38,19,
        0,574,575,5,17,0,0,575,577,3,350,175,0,576,574,1,0,0,0,576,577,1,
        0,0,0,577,580,1,0,0,0,578,579,5,313,0,0,579,581,3,350,175,0,580,
        578,1,0,0,0,580,581,1,0,0,0,581,613,1,0,0,0,582,583,5,440,0,0,583,
        584,7,6,0,0,584,585,5,436,0,0,585,586,3,38,19,0,586,587,5,313,0,
        0,587,588,3,350,175,0,588,613,1,0,0,0,589,590,5,440,0,0,590,591,
        5,489,0,0,591,613,3,38,19,0,592,593,5,440,0,0,593,594,5,456,0,0,
        594,595,5,459,0,0,595,596,5,436,0,0,596,597,3,38,19,0,597,598,5,
        313,0,0,598,599,3,350,175,0,599,600,5,469,0,0,600,601,3,350,175,
        0,601,613,1,0,0,0,602,603,5,440,0,0,603,604,5,446,0,0,604,605,5,
        459,0,0,605,606,5,436,0,0,606,607,3,38,19,0,607,608,5,147,0,0,608,
        609,3,350,175,0,609,610,5,17,0,0,610,611,3,350,175,0,611,613,1,0,
        0,0,612,562,1,0,0,0,612,570,1,0,0,0,612,582,1,0,0,0,612,589,1,0,
        0,0,612,592,1,0,0,0,612,602,1,0,0,0,613,37,1,0,0,0,614,616,5,537,
        0,0,615,614,1,0,0,0,615,616,1,0,0,0,616,617,1,0,0,0,617,619,3,350,
        175,0,618,615,1,0,0,0,619,620,1,0,0,0,620,618,1,0,0,0,620,621,1,
        0,0,0,621,39,1,0,0,0,622,625,3,42,21,0,623,625,3,44,22,0,624,622,
        1,0,0,0,624,623,1,0,0,0,625,41,1,0,0,0,626,628,5,72,0,0,627,629,
        5,500,0,0,628,627,1,0,0,0,628,629,1,0,0,0,629,630,1,0,0,0,630,632,
        5,375,0,0,631,633,3,354,177,0,632,631,1,0,0,0,632,633,1,0,0,0,633,
        634,1,0,0,0,634,635,3,342,171,0,635,636,5,519,0,0,636,641,3,46,23,
        0,637,638,5,523,0,0,638,640,3,46,23,0,639,637,1,0,0,0,640,643,1,
        0,0,0,641,639,1,0,0,0,641,642,1,0,0,0,642,646,1,0,0,0,643,641,1,
        0,0,0,644,645,5,523,0,0,645,647,3,82,41,0,646,644,1,0,0,0,646,647,
        1,0,0,0,647,650,1,0,0,0,648,649,5,523,0,0,649,651,3,84,42,0,650,
        648,1,0,0,0,650,651,1,0,0,0,651,654,1,0,0,0,652,653,5,523,0,0,653,
        655,3,88,44,0,654,652,1,0,0,0,654,655,1,0,0,0,655,656,1,0,0,0,656,
        659,5,520,0,0,657,658,5,59,0,0,658,660,5,540,0,0,659,657,1,0,0,0,
        659,660,1,0,0,0,660,662,1,0,0,0,661,663,3,90,45,0,662,661,1,0,0,
        0,662,663,1,0,0,0,663,664,1,0,0,0,664,666,3,352,176,0,665,667,3,
        98,49,0,666,665,1,0,0,0,666,667,1,0,0,0,667,43,1,0,0,0,668,669,5,
        72,0,0,669,671,5,375,0,0,670,672,3,354,177,0,671,670,1,0,0,0,671,
        672,1,0,0,0,672,673,1,0,0,0,673,674,3,342,171,0,674,677,3,352,176,
        0,675,676,5,17,0,0,676,678,3,160,80,0,677,675,1,0,0,0,677,678,1,
        0,0,0,678,45,1,0,0,0,679,683,3,48,24,0,680,683,3,74,37,0,681,683,
        3,78,39,0,682,679,1,0,0,0,682,680,1,0,0,0,682,681,1,0,0,0,683,47,
        1,0,0,0,684,685,3,50,25,0,685,687,3,58,29,0,686,688,3,72,36,0,687,
        686,1,0,0,0,687,688,1,0,0,0,688,691,1,0,0,0,689,690,5,59,0,0,690,
        692,5,540,0,0,691,689,1,0,0,0,691,692,1,0,0,0,692,49,1,0,0,0,693,
        696,3,350,175,0,694,696,3,264,132,0,695,693,1,0,0,0,695,694,1,0,
        0,0,696,51,1,0,0,0,697,700,3,350,175,0,698,700,4,26,0,0,699,697,
        1,0,0,0,699,698,1,0,0,0,700,53,1,0,0,0,701,702,3,350,175,0,702,55,
        1,0,0,0,703,704,5,519,0,0,704,709,3,52,26,0,705,706,5,523,0,0,706,
        708,3,52,26,0,707,705,1,0,0,0,708,711,1,0,0,0,709,707,1,0,0,0,709,
        710,1,0,0,0,710,712,1,0,0,0,711,709,1,0,0,0,712,713,5,520,0,0,713,
        57,1,0,0,0,714,752,7,7,0,0,715,717,7,8,0,0,716,718,3,60,30,0,717,
        716,1,0,0,0,717,718,1,0,0,0,718,752,1,0,0,0,719,721,5,381,0,0,720,
        722,3,60,30,0,721,720,1,0,0,0,721,722,1,0,0,0,722,729,1,0,0,0,723,
        725,7,9,0,0,724,726,5,208,0,0,725,724,1,0,0,0,725,726,1,0,0,0,726,
        727,1,0,0,0,727,728,5,380,0,0,728,730,5,507,0,0,729,723,1,0,0,0,
        729,730,1,0,0,0,730,752,1,0,0,0,731,733,7,10,0,0,732,734,3,62,31,
        0,733,732,1,0,0,0,733,734,1,0,0,0,734,752,1,0,0,0,735,737,7,11,0,
        0,736,738,3,66,33,0,737,736,1,0,0,0,737,738,1,0,0,0,738,752,1,0,
        0,0,739,741,5,472,0,0,740,742,3,68,34,0,741,740,1,0,0,0,741,742,
        1,0,0,0,742,752,1,0,0,0,743,745,5,323,0,0,744,746,3,70,35,0,745,
        744,1,0,0,0,745,746,1,0,0,0,746,752,1,0,0,0,747,749,5,296,0,0,748,
        750,3,64,32,0,749,748,1,0,0,0,749,750,1,0,0,0,750,752,1,0,0,0,751,
        714,1,0,0,0,751,715,1,0,0,0,751,719,1,0,0,0,751,731,1,0,0,0,751,
        735,1,0,0,0,751,739,1,0,0,0,751,743,1,0,0,0,751,747,1,0,0,0,752,
        59,1,0,0,0,753,754,5,519,0,0,754,755,3,382,191,0,755,756,5,520,0,
        0,756,61,1,0,0,0,757,758,5,519,0,0,758,761,3,382,191,0,759,760,5,
        523,0,0,760,762,3,382,191,0,761,759,1,0,0,0,761,762,1,0,0,0,762,
        763,1,0,0,0,763,764,5,520,0,0,764,63,1,0,0,0,765,766,5,519,0,0,766,
        769,3,380,190,0,767,768,5,523,0,0,768,770,3,380,190,0,769,767,1,
        0,0,0,769,770,1,0,0,0,770,771,1,0,0,0,771,772,5,520,0,0,772,65,1,
        0,0,0,773,774,5,510,0,0,774,775,3,58,29,0,775,776,5,509,0,0,776,
        67,1,0,0,0,777,778,5,510,0,0,778,779,3,58,29,0,779,780,5,523,0,0,
        780,781,3,58,29,0,781,782,1,0,0,0,782,783,5,509,0,0,783,69,1,0,0,
        0,784,785,5,510,0,0,785,786,3,52,26,0,786,793,3,58,29,0,787,788,
        5,523,0,0,788,789,3,52,26,0,789,790,3,58,29,0,790,792,1,0,0,0,791,
        787,1,0,0,0,792,795,1,0,0,0,793,791,1,0,0,0,793,794,1,0,0,0,794,
        796,1,0,0,0,795,793,1,0,0,0,796,797,5,509,0,0,797,813,1,0,0,0,798,
        799,5,519,0,0,799,800,3,52,26,0,800,807,3,58,29,0,801,802,5,523,
        0,0,802,803,3,52,26,0,803,804,3,58,29,0,804,806,1,0,0,0,805,801,
        1,0,0,0,806,809,1,0,0,0,807,805,1,0,0,0,807,808,1,0,0,0,808,810,
        1,0,0,0,809,807,1,0,0,0,810,811,5,520,0,0,811,813,1,0,0,0,812,784,
        1,0,0,0,812,798,1,0,0,0,813,71,1,0,0,0,814,815,5,64,0,0,815,817,
        3,86,43,0,816,814,1,0,0,0,816,817,1,0,0,0,817,818,1,0,0,0,818,819,
        5,290,0,0,819,822,5,469,0,0,820,821,5,243,0,0,821,823,5,125,0,0,
        822,820,1,0,0,0,822,823,1,0,0,0,823,829,1,0,0,0,824,826,5,243,0,
        0,825,824,1,0,0,0,825,826,1,0,0,0,826,827,1,0,0,0,827,829,5,246,
        0,0,828,816,1,0,0,0,828,825,1,0,0,0,829,73,1,0,0,0,830,831,3,50,
        25,0,831,832,3,58,29,0,832,835,5,220,0,0,833,834,5,152,0,0,834,836,
        3,76,38,0,835,833,1,0,0,0,835,836,1,0,0,0,836,838,1,0,0,0,837,839,
        5,426,0,0,838,837,1,0,0,0,838,839,1,0,0,0,839,75,1,0,0,0,840,841,
        5,540,0,0,841,77,1,0,0,0,842,843,3,50,25,0,843,844,5,17,0,0,844,
        847,3,80,40,0,845,846,5,59,0,0,846,848,5,540,0,0,847,845,1,0,0,0,
        847,848,1,0,0,0,848,79,1,0,0,0,849,850,3,264,132,0,850,81,1,0,0,
        0,851,852,5,427,0,0,852,853,5,147,0,0,853,854,3,52,26,0,854,855,
        5,17,0,0,855,856,3,264,132,0,856,83,1,0,0,0,857,858,5,64,0,0,858,
        860,3,86,43,0,859,857,1,0,0,0,859,860,1,0,0,0,860,861,1,0,0,0,861,
        862,5,290,0,0,862,863,5,469,0,0,863,864,3,56,28,0,864,865,5,243,
        0,0,865,866,5,125,0,0,866,85,1,0,0,0,867,868,3,326,163,0,868,87,
        1,0,0,0,869,870,5,279,0,0,870,871,5,147,0,0,871,872,5,373,0,0,872,
        89,1,0,0,0,873,874,5,271,0,0,874,875,5,34,0,0,875,876,3,92,46,0,
        876,91,1,0,0,0,877,878,5,519,0,0,878,883,3,94,47,0,879,880,5,523,
        0,0,880,882,3,94,47,0,881,879,1,0,0,0,882,885,1,0,0,0,883,881,1,
        0,0,0,883,884,1,0,0,0,884,886,1,0,0,0,885,883,1,0,0,0,886,887,5,
        520,0,0,887,93,1,0,0,0,888,901,3,52,26,0,889,890,5,519,0,0,890,895,
        3,96,48,0,891,892,5,523,0,0,892,894,3,96,48,0,893,891,1,0,0,0,894,
        897,1,0,0,0,895,893,1,0,0,0,895,896,1,0,0,0,896,898,1,0,0,0,897,
        895,1,0,0,0,898,899,5,520,0,0,899,901,1,0,0,0,900,888,1,0,0,0,900,
        889,1,0,0,0,901,95,1,0,0,0,902,905,3,302,151,0,903,905,3,376,188,
        0,904,902,1,0,0,0,904,903,1,0,0,0,905,97,1,0,0,0,906,907,5,204,0,
        0,907,916,3,344,172,0,908,912,5,519,0,0,909,911,3,100,50,0,910,909,
        1,0,0,0,911,914,1,0,0,0,912,910,1,0,0,0,912,913,1,0,0,0,913,915,
        1,0,0,0,914,912,1,0,0,0,915,917,5,520,0,0,916,908,1,0,0,0,916,917,
        1,0,0,0,917,99,1,0,0,0,918,919,7,12,0,0,919,923,7,13,0,0,920,921,
        7,14,0,0,921,923,7,15,0,0,922,918,1,0,0,0,922,920,1,0,0,0,923,101,
        1,0,0,0,924,925,5,72,0,0,925,926,5,444,0,0,926,927,3,336,168,0,927,
        928,3,352,176,0,928,103,1,0,0,0,929,930,5,72,0,0,930,932,5,450,0,
        0,931,933,3,354,177,0,932,931,1,0,0,0,932,933,1,0,0,0,933,934,1,
        0,0,0,934,937,3,340,170,0,935,936,5,59,0,0,936,938,5,540,0,0,937,
        935,1,0,0,0,937,938,1,0,0,0,938,939,1,0,0,0,939,940,3,352,176,0,
        940,105,1,0,0,0,941,943,5,72,0,0,942,944,5,500,0,0,943,942,1,0,0,
        0,943,944,1,0,0,0,944,945,1,0,0,0,945,947,5,504,0,0,946,948,3,354,
        177,0,947,946,1,0,0,0,947,948,1,0,0,0,948,949,1,0,0,0,949,951,3,
        348,174,0,950,952,3,56,28,0,951,950,1,0,0,0,951,952,1,0,0,0,952,
        955,1,0,0,0,953,954,5,59,0,0,954,956,5,540,0,0,955,953,1,0,0,0,955,
        956,1,0,0,0,956,957,1,0,0,0,957,958,5,17,0,0,958,959,3,160,80,0,
        959,107,1,0,0,0,960,964,5,72,0,0,961,965,5,500,0,0,962,963,5,500,
        0,0,963,965,5,372,0,0,964,961,1,0,0,0,964,962,1,0,0,0,964,965,1,
        0,0,0,965,966,1,0,0,0,966,968,5,154,0,0,967,969,3,354,177,0,968,
        967,1,0,0,0,968,969,1,0,0,0,969,970,1,0,0,0,970,971,3,280,140,0,
        971,972,5,17,0,0,972,975,3,326,163,0,973,974,5,197,0,0,974,976,7,
        16,0,0,975,973,1,0,0,0,975,976,1,0,0,0,976,978,1,0,0,0,977,979,3,
        110,55,0,978,977,1,0,0,0,978,979,1,0,0,0,979,109,1,0,0,0,980,981,
        5,415,0,0,981,982,5,466,0,0,982,988,3,112,56,0,983,984,5,523,0,0,
        984,985,5,466,0,0,985,987,3,112,56,0,986,983,1,0,0,0,987,990,1,0,
        0,0,988,986,1,0,0,0,988,989,1,0,0,0,989,111,1,0,0,0,990,988,1,0,
        0,0,991,992,5,540,0,0,992,113,1,0,0,0,993,994,5,8,0,0,994,996,5,
        375,0,0,995,997,3,356,178,0,996,995,1,0,0,0,996,997,1,0,0,0,997,
        998,1,0,0,0,998,1004,3,344,172,0,999,1005,3,116,58,0,1000,1005,3,
        118,59,0,1001,1005,3,120,60,0,1002,1005,3,122,61,0,1003,1005,3,124,
        62,0,1004,999,1,0,0,0,1004,1000,1,0,0,0,1004,1001,1,0,0,0,1004,1002,
        1,0,0,0,1004,1003,1,0,0,0,1005,115,1,0,0,0,1006,1008,5,313,0,0,1007,
        1009,3,350,175,0,1008,1007,1,0,0,0,1008,1009,1,0,0,0,1009,1010,1,
        0,0,0,1010,1011,5,390,0,0,1011,1012,3,350,175,0,1012,117,1,0,0,0,
        1013,1014,5,342,0,0,1014,1015,3,358,179,0,1015,119,1,0,0,0,1016,
        1017,5,440,0,0,1017,1018,5,64,0,0,1018,1019,3,86,43,0,1019,1020,
        5,290,0,0,1020,1021,5,469,0,0,1021,1023,3,56,28,0,1022,1024,3,126,
        63,0,1023,1022,1,0,0,0,1023,1024,1,0,0,0,1024,121,1,0,0,0,1025,1026,
        5,116,0,0,1026,1027,5,64,0,0,1027,1028,3,86,43,0,1028,123,1,0,0,
        0,1029,1030,5,440,0,0,1030,1031,5,406,0,0,1031,1032,3,56,28,0,1032,
        125,1,0,0,0,1033,1034,5,243,0,0,1034,1035,5,125,0,0,1035,127,1,0,
        0,0,1036,1037,5,8,0,0,1037,1038,5,504,0,0,1038,1042,3,346,173,0,
        1039,1043,3,116,58,0,1040,1041,5,17,0,0,1041,1043,3,160,80,0,1042,
        1039,1,0,0,0,1042,1040,1,0,0,0,1043,129,1,0,0,0,1044,1045,5,8,0,
        0,1045,1046,5,450,0,0,1046,1047,3,338,169,0,1047,1048,3,118,59,0,
        1048,131,1,0,0,0,1049,1053,5,8,0,0,1050,1054,5,500,0,0,1051,1052,
        5,500,0,0,1052,1054,5,372,0,0,1053,1050,1,0,0,0,1053,1051,1,0,0,
        0,1053,1054,1,0,0,0,1054,1055,1,0,0,0,1055,1057,5,154,0,0,1056,1058,
        3,356,178,0,1057,1056,1,0,0,0,1057,1058,1,0,0,0,1058,1059,1,0,0,
        0,1059,1060,3,282,141,0,1060,1061,5,17,0,0,1061,1064,3,326,163,0,
        1062,1063,5,197,0,0,1063,1065,7,16,0,0,1064,1062,1,0,0,0,1064,1065,
        1,0,0,0,1065,133,1,0,0,0,1066,1067,5,116,0,0,1067,1069,5,444,0,0,
        1068,1070,3,356,178,0,1069,1068,1,0,0,0,1069,1070,1,0,0,0,1070,1071,
        1,0,0,0,1071,1072,3,334,167,0,1072,135,1,0,0,0,1073,1075,5,116,0,
        0,1074,1076,5,500,0,0,1075,1074,1,0,0,0,1075,1076,1,0,0,0,1076,1077,
        1,0,0,0,1077,1079,5,375,0,0,1078,1080,3,356,178,0,1079,1078,1,0,
        0,0,1079,1080,1,0,0,0,1080,1081,1,0,0,0,1081,1082,3,344,172,0,1082,
        137,1,0,0,0,1083,1084,5,116,0,0,1084,1086,5,450,0,0,1085,1087,3,
        356,178,0,1086,1085,1,0,0,0,1086,1087,1,0,0,0,1087,1088,1,0,0,0,
        1088,1090,3,338,169,0,1089,1091,7,17,0,0,1090,1089,1,0,0,0,1090,
        1091,1,0,0,0,1091,139,1,0,0,0,1092,1094,5,116,0,0,1093,1095,5,500,
        0,0,1094,1093,1,0,0,0,1094,1095,1,0,0,0,1095,1096,1,0,0,0,1096,1098,
        5,504,0,0,1097,1099,3,356,178,0,1098,1097,1,0,0,0,1098,1099,1,0,
        0,0,1099,1100,1,0,0,0,1100,1101,3,346,173,0,1101,141,1,0,0,0,1102,
        1106,5,116,0,0,1103,1107,5,500,0,0,1104,1105,5,500,0,0,1105,1107,
        5,372,0,0,1106,1103,1,0,0,0,1106,1104,1,0,0,0,1106,1107,1,0,0,0,
        1107,1108,1,0,0,0,1108,1110,5,154,0,0,1109,1111,3,356,178,0,1110,
        1109,1,0,0,0,1110,1111,1,0,0,0,1111,1112,1,0,0,0,1112,1113,3,282,
        141,0,1113,143,1,0,0,0,1114,1116,5,132,0,0,1115,1114,1,0,0,0,1115,
        1116,1,0,0,0,1116,1117,1,0,0,0,1117,1122,3,146,73,0,1118,1122,3,
        156,78,0,1119,1120,5,132,0,0,1120,1122,3,158,79,0,1121,1115,1,0,
        0,0,1121,1118,1,0,0,0,1121,1119,1,0,0,0,1122,145,1,0,0,0,1123,1124,
        5,178,0,0,1124,1125,7,18,0,0,1125,1134,3,344,172,0,1126,1128,3,148,
        74,0,1127,1126,1,0,0,0,1127,1128,1,0,0,0,1128,1130,1,0,0,0,1129,
        1131,3,56,28,0,1130,1129,1,0,0,0,1130,1131,1,0,0,0,1131,1132,1,0,
        0,0,1132,1135,3,160,80,0,1133,1135,3,150,75,0,1134,1127,1,0,0,0,
        1134,1133,1,0,0,0,1135,147,1,0,0,0,1136,1137,5,270,0,0,1137,1138,
        3,358,179,0,1138,149,1,0,0,0,1139,1140,5,417,0,0,1140,1145,3,152,
        76,0,1141,1142,5,523,0,0,1142,1144,3,152,76,0,1143,1141,1,0,0,0,
        1144,1147,1,0,0,0,1145,1143,1,0,0,0,1145,1146,1,0,0,0,1146,151,1,
        0,0,0,1147,1145,1,0,0,0,1148,1149,5,519,0,0,1149,1154,3,154,77,0,
        1150,1151,5,523,0,0,1151,1153,3,154,77,0,1152,1150,1,0,0,0,1153,
        1156,1,0,0,0,1154,1152,1,0,0,0,1154,1155,1,0,0,0,1155,1157,1,0,0,
        0,1156,1154,1,0,0,0,1157,1158,5,520,0,0,1158,153,1,0,0,0,1159,1162,
        3,376,188,0,1160,1162,3,276,138,0,1161,1159,1,0,0,0,1161,1160,1,
        0,0,0,1162,155,1,0,0,0,1163,1164,5,24,0,0,1164,1165,5,356,0,0,1165,
        1166,5,342,0,0,1166,1170,5,524,0,0,1167,1168,3,146,73,0,1168,1169,
        5,524,0,0,1169,1171,1,0,0,0,1170,1167,1,0,0,0,1171,1172,1,0,0,0,
        1172,1170,1,0,0,0,1172,1173,1,0,0,0,1173,1174,1,0,0,0,1174,1175,
        5,122,0,0,1175,157,1,0,0,0,1176,1177,5,356,0,0,1177,1178,5,342,0,
        0,1178,1182,5,24,0,0,1179,1180,3,146,73,0,1180,1181,5,524,0,0,1181,
        1183,1,0,0,0,1182,1179,1,0,0,0,1183,1184,1,0,0,0,1184,1182,1,0,0,
        0,1184,1185,1,0,0,0,1185,1186,1,0,0,0,1186,1187,5,122,0,0,1187,159,
        1,0,0,0,1188,1189,6,80,-1,0,1189,1212,3,162,81,0,1190,1191,3,164,
        82,0,1191,1192,3,160,80,5,1192,1212,1,0,0,0,1193,1194,5,519,0,0,
        1194,1195,3,160,80,0,1195,1196,5,520,0,0,1196,1212,1,0,0,0,1197,
        1199,3,172,86,0,1198,1200,3,232,116,0,1199,1198,1,0,0,0,1199,1200,
        1,0,0,0,1200,1202,1,0,0,0,1201,1203,3,236,118,0,1202,1201,1,0,0,
        0,1202,1203,1,0,0,0,1203,1212,1,0,0,0,1204,1206,3,170,85,0,1205,
        1207,3,232,116,0,1206,1205,1,0,0,0,1206,1207,1,0,0,0,1207,1209,1,
        0,0,0,1208,1210,3,236,118,0,1209,1208,1,0,0,0,1209,1210,1,0,0,0,
        1210,1212,1,0,0,0,1211,1188,1,0,0,0,1211,1190,1,0,0,0,1211,1193,
        1,0,0,0,1211,1197,1,0,0,0,1211,1204,1,0,0,0,1212,1227,1,0,0,0,1213,
        1214,10,3,0,0,1214,1216,7,19,0,0,1215,1217,5,5,0,0,1216,1215,1,0,
        0,0,1216,1217,1,0,0,0,1217,1218,1,0,0,0,1218,1220,3,160,80,0,1219,
        1221,3,232,116,0,1220,1219,1,0,0,0,1220,1221,1,0,0,0,1221,1223,1,
        0,0,0,1222,1224,3,236,118,0,1223,1222,1,0,0,0,1223,1224,1,0,0,0,
        1224,1226,1,0,0,0,1225,1213,1,0,0,0,1226,1229,1,0,0,0,1227,1225,
        1,0,0,0,1227,1228,1,0,0,0,1228,161,1,0,0,0,1229,1227,1,0,0,0,1230,
        1231,5,417,0,0,1231,1236,3,264,132,0,1232,1233,5,523,0,0,1233,1235,
        3,264,132,0,1234,1232,1,0,0,0,1235,1238,1,0,0,0,1236,1234,1,0,0,
        0,1236,1237,1,0,0,0,1237,163,1,0,0,0,1238,1236,1,0,0,0,1239,1240,
        5,436,0,0,1240,1245,3,166,83,0,1241,1242,5,523,0,0,1242,1244,3,166,
        83,0,1243,1241,1,0,0,0,1244,1247,1,0,0,0,1245,1243,1,0,0,0,1245,
        1246,1,0,0,0,1246,165,1,0,0,0,1247,1245,1,0,0,0,1248,1260,3,168,
        84,0,1249,1250,5,519,0,0,1250,1255,3,52,26,0,1251,1252,5,523,0,0,
        1252,1254,3,52,26,0,1253,1251,1,0,0,0,1254,1257,1,0,0,0,1255,1253,
        1,0,0,0,1255,1256,1,0,0,0,1256,1258,1,0,0,0,1257,1255,1,0,0,0,1258,
        1259,5,520,0,0,1259,1261,1,0,0,0,1260,1249,1,0,0,0,1260,1261,1,0,
        0,0,1261,1262,1,0,0,0,1262,1263,5,17,0,0,1263,1264,5,519,0,0,1264,
        1265,3,160,80,0,1265,1266,5,520,0,0,1266,167,1,0,0,0,1267,1268,3,
        326,163,0,1268,169,1,0,0,0,1269,1271,3,172,86,0,1270,1272,3,178,
        89,0,1271,1270,1,0,0,0,1271,1272,1,0,0,0,1272,1274,1,0,0,0,1273,
        1275,3,206,103,0,1274,1273,1,0,0,0,1274,1275,1,0,0,0,1275,1277,1,
        0,0,0,1276,1278,3,208,104,0,1277,1276,1,0,0,0,1277,1278,1,0,0,0,
        1278,1280,1,0,0,0,1279,1281,3,222,111,0,1280,1279,1,0,0,0,1280,1281,
        1,0,0,0,1281,1283,1,0,0,0,1282,1284,3,224,112,0,1283,1282,1,0,0,
        0,1283,1284,1,0,0,0,1284,1290,1,0,0,0,1285,1286,3,172,86,0,1286,
        1287,3,178,89,0,1287,1288,3,230,115,0,1288,1290,1,0,0,0,1289,1269,
        1,0,0,0,1289,1285,1,0,0,0,1290,171,1,0,0,0,1291,1293,5,338,0,0,1292,
        1294,3,386,193,0,1293,1292,1,0,0,0,1293,1294,1,0,0,0,1294,1304,1,
        0,0,0,1295,1305,5,530,0,0,1296,1301,3,174,87,0,1297,1298,5,523,0,
        0,1298,1300,3,174,87,0,1299,1297,1,0,0,0,1300,1303,1,0,0,0,1301,
        1299,1,0,0,0,1301,1302,1,0,0,0,1302,1305,1,0,0,0,1303,1301,1,0,0,
        0,1304,1295,1,0,0,0,1304,1296,1,0,0,0,1305,173,1,0,0,0,1306,1322,
        3,176,88,0,1307,1312,3,264,132,0,1308,1310,5,17,0,0,1309,1308,1,
        0,0,0,1309,1310,1,0,0,0,1310,1311,1,0,0,0,1311,1313,3,52,26,0,1312,
        1309,1,0,0,0,1312,1313,1,0,0,0,1313,1322,1,0,0,0,1314,1319,3,52,
        26,0,1315,1317,5,17,0,0,1316,1315,1,0,0,0,1316,1317,1,0,0,0,1317,
        1318,1,0,0,0,1318,1320,3,264,132,0,1319,1316,1,0,0,0,1319,1320,1,
        0,0,0,1320,1322,1,0,0,0,1321,1306,1,0,0,0,1321,1307,1,0,0,0,1321,
        1314,1,0,0,0,1322,175,1,0,0,0,1323,1324,3,278,139,0,1324,1325,5,
        264,0,0,1325,1326,3,228,114,0,1326,1327,5,17,0,0,1327,1328,3,326,
        163,0,1328,1336,1,0,0,0,1329,1330,3,278,139,0,1330,1331,5,264,0,
        0,1331,1332,3,318,159,0,1332,1333,5,17,0,0,1333,1334,3,326,163,0,
        1334,1336,1,0,0,0,1335,1323,1,0,0,0,1335,1329,1,0,0,0,1336,177,1,
        0,0,0,1337,1338,5,152,0,0,1338,1339,3,180,90,0,1339,179,1,0,0,0,
        1340,1341,6,90,-1,0,1341,1346,3,182,91,0,1342,1343,5,523,0,0,1343,
        1345,3,182,91,0,1344,1342,1,0,0,0,1345,1348,1,0,0,0,1346,1344,1,
        0,0,0,1346,1347,1,0,0,0,1347,1352,1,0,0,0,1348,1346,1,0,0,0,1349,
        1352,3,190,95,0,1350,1352,3,192,96,0,1351,1340,1,0,0,0,1351,1349,
        1,0,0,0,1351,1350,1,0,0,0,1352,1374,1,0,0,0,1353,1354,10,3,0,0,1354,
        1355,5,73,0,0,1355,1356,5,186,0,0,1356,1373,3,180,90,4,1357,1359,
        10,4,0,0,1358,1360,5,235,0,0,1359,1358,1,0,0,0,1359,1360,1,0,0,0,
        1360,1362,1,0,0,0,1361,1363,7,20,0,0,1362,1361,1,0,0,0,1362,1363,
        1,0,0,0,1363,1365,1,0,0,0,1364,1366,5,263,0,0,1365,1364,1,0,0,0,
        1365,1366,1,0,0,0,1366,1367,1,0,0,0,1367,1368,5,186,0,0,1368,1370,
        3,180,90,0,1369,1371,3,204,102,0,1370,1369,1,0,0,0,1370,1371,1,0,
        0,0,1371,1373,1,0,0,0,1372,1353,1,0,0,0,1372,1357,1,0,0,0,1373,1376,
        1,0,0,0,1374,1372,1,0,0,0,1374,1375,1,0,0,0,1375,181,1,0,0,0,1376,
        1374,1,0,0,0,1377,1379,3,184,92,0,1378,1380,3,316,158,0,1379,1378,
        1,0,0,0,1379,1380,1,0,0,0,1380,183,1,0,0,0,1381,1383,5,375,0,0,1382,
        1381,1,0,0,0,1382,1383,1,0,0,0,1383,1384,1,0,0,0,1384,1386,3,344,
        172,0,1385,1387,3,186,93,0,1386,1385,1,0,0,0,1386,1387,1,0,0,0,1387,
        1411,1,0,0,0,1388,1390,3,346,173,0,1389,1391,3,186,93,0,1390,1389,
        1,0,0,0,1390,1391,1,0,0,0,1391,1411,1,0,0,0,1392,1393,5,200,0,0,
        1393,1394,5,375,0,0,1394,1395,5,519,0,0,1395,1396,3,276,138,0,1396,
        1397,5,520,0,0,1397,1411,1,0,0,0,1398,1400,5,200,0,0,1399,1398,1,
        0,0,0,1399,1400,1,0,0,0,1400,1401,1,0,0,0,1401,1402,5,519,0,0,1402,
        1403,3,160,80,0,1403,1404,5,520,0,0,1404,1411,1,0,0,0,1405,1406,
        5,408,0,0,1406,1407,5,519,0,0,1407,1408,3,264,132,0,1408,1409,5,
        520,0,0,1409,1411,1,0,0,0,1410,1382,1,0,0,0,1410,1388,1,0,0,0,1410,
        1392,1,0,0,0,1410,1399,1,0,0,0,1410,1405,1,0,0,0,1411,185,1,0,0,
        0,1412,1413,5,147,0,0,1413,1414,5,373,0,0,1414,1415,5,17,0,0,1415,
        1416,5,251,0,0,1416,1417,3,188,94,0,1417,187,1,0,0,0,1418,1419,3,
        264,132,0,1419,189,1,0,0,0,1420,1421,5,519,0,0,1421,1422,3,150,75,
        0,1422,1423,5,520,0,0,1423,1424,3,316,158,0,1424,191,1,0,0,0,1425,
        1426,5,375,0,0,1426,1427,5,519,0,0,1427,1428,3,194,97,0,1428,1429,
        5,520,0,0,1429,193,1,0,0,0,1430,1431,3,196,98,0,1431,1432,5,519,
        0,0,1432,1437,3,198,99,0,1433,1434,5,523,0,0,1434,1436,3,198,99,
        0,1435,1433,1,0,0,0,1436,1439,1,0,0,0,1437,1435,1,0,0,0,1437,1438,
        1,0,0,0,1438,1440,1,0,0,0,1439,1437,1,0,0,0,1440,1441,5,520,0,0,
        1441,195,1,0,0,0,1442,1443,7,21,0,0,1443,197,1,0,0,0,1444,1445,5,
        375,0,0,1445,1460,3,220,110,0,1446,1460,3,202,101,0,1447,1460,3,
        304,152,0,1448,1449,5,449,0,0,1449,1450,5,539,0,0,1450,1451,5,375,
        0,0,1451,1460,3,220,110,0,1452,1453,5,501,0,0,1453,1454,5,539,0,
        0,1454,1460,3,202,101,0,1455,1456,3,200,100,0,1456,1457,5,539,0,
        0,1457,1458,3,304,152,0,1458,1460,1,0,0,0,1459,1444,1,0,0,0,1459,
        1446,1,0,0,0,1459,1447,1,0,0,0,1459,1448,1,0,0,0,1459,1452,1,0,0,
        0,1459,1455,1,0,0,0,1460,199,1,0,0,0,1461,1462,7,22,0,0,1462,201,
        1,0,0,0,1463,1464,5,454,0,0,1464,1465,5,519,0,0,1465,1466,3,52,26,
        0,1466,1467,5,520,0,0,1467,203,1,0,0,0,1468,1469,5,255,0,0,1469,
        1473,3,266,133,0,1470,1471,5,415,0,0,1471,1473,3,56,28,0,1472,1468,
        1,0,0,0,1472,1470,1,0,0,0,1473,205,1,0,0,0,1474,1475,5,433,0,0,1475,
        1476,3,266,133,0,1476,207,1,0,0,0,1477,1478,5,160,0,0,1478,1479,
        5,34,0,0,1479,1484,3,210,105,0,1480,1481,5,523,0,0,1481,1483,3,210,
        105,0,1482,1480,1,0,0,0,1483,1486,1,0,0,0,1484,1482,1,0,0,0,1484,
        1485,1,0,0,0,1485,209,1,0,0,0,1486,1484,1,0,0,0,1487,1528,3,52,26,
        0,1488,1528,3,216,108,0,1489,1490,5,519,0,0,1490,1528,5,520,0,0,
        1491,1492,5,519,0,0,1492,1497,3,264,132,0,1493,1494,5,523,0,0,1494,
        1496,3,264,132,0,1495,1493,1,0,0,0,1496,1499,1,0,0,0,1497,1495,1,
        0,0,0,1497,1498,1,0,0,0,1498,1500,1,0,0,0,1499,1497,1,0,0,0,1500,
        1501,5,520,0,0,1501,1528,1,0,0,0,1502,1503,3,214,107,0,1503,1504,
        5,519,0,0,1504,1509,3,264,132,0,1505,1506,5,523,0,0,1506,1508,3,
        264,132,0,1507,1505,1,0,0,0,1508,1511,1,0,0,0,1509,1507,1,0,0,0,
        1509,1510,1,0,0,0,1510,1512,1,0,0,0,1511,1509,1,0,0,0,1512,1513,
        5,520,0,0,1513,1528,1,0,0,0,1514,1515,3,212,106,0,1515,1516,5,519,
        0,0,1516,1521,3,210,105,0,1517,1518,5,523,0,0,1518,1520,3,210,105,
        0,1519,1517,1,0,0,0,1520,1523,1,0,0,0,1521,1519,1,0,0,0,1521,1522,
        1,0,0,0,1522,1524,1,0,0,0,1523,1521,1,0,0,0,1524,1525,5,520,0,0,
        1525,1528,1,0,0,0,1526,1528,3,264,132,0,1527,1487,1,0,0,0,1527,1488,
        1,0,0,0,1527,1489,1,0,0,0,1527,1491,1,0,0,0,1527,1502,1,0,0,0,1527,
        1514,1,0,0,0,1527,1526,1,0,0,0,1528,211,1,0,0,0,1529,1530,5,161,
        0,0,1530,1531,5,496,0,0,1531,213,1,0,0,0,1532,1533,7,23,0,0,1533,
        215,1,0,0,0,1534,1535,3,218,109,0,1535,1536,5,519,0,0,1536,1537,
        3,220,110,0,1537,1538,5,523,0,0,1538,1539,3,304,152,0,1539,1540,
        5,520,0,0,1540,217,1,0,0,0,1541,1542,7,24,0,0,1542,219,1,0,0,0,1543,
        1544,3,350,175,0,1544,221,1,0,0,0,1545,1546,5,164,0,0,1546,1547,
        3,266,133,0,1547,223,1,0,0,0,1548,1549,5,435,0,0,1549,1554,3,226,
        113,0,1550,1551,5,523,0,0,1551,1553,3,226,113,0,1552,1550,1,0,0,
        0,1553,1556,1,0,0,0,1554,1552,1,0,0,0,1554,1555,1,0,0,0,1555,225,
        1,0,0,0,1556,1554,1,0,0,0,1557,1558,3,318,159,0,1558,1559,5,17,0,
        0,1559,1560,3,228,114,0,1560,227,1,0,0,0,1561,1563,3,318,159,0,1562,
        1561,1,0,0,0,1562,1563,1,0,0,0,1563,1564,1,0,0,0,1564,1566,5,519,
        0,0,1565,1567,3,238,119,0,1566,1565,1,0,0,0,1566,1567,1,0,0,0,1567,
        1569,1,0,0,0,1568,1570,3,232,116,0,1569,1568,1,0,0,0,1569,1570,1,
        0,0,0,1570,1572,1,0,0,0,1571,1573,3,254,127,0,1572,1571,1,0,0,0,
        1572,1573,1,0,0,0,1573,1574,1,0,0,0,1574,1575,5,520,0,0,1575,229,
        1,0,0,0,1576,1577,5,215,0,0,1577,1579,5,519,0,0,1578,1580,3,238,
        119,0,1579,1578,1,0,0,0,1579,1580,1,0,0,0,1580,1582,1,0,0,0,1581,
        1583,3,232,116,0,1582,1581,1,0,0,0,1582,1583,1,0,0,0,1583,1585,1,
        0,0,0,1584,1586,3,242,121,0,1585,1584,1,0,0,0,1585,1586,1,0,0,0,
        1586,1588,1,0,0,0,1587,1589,3,248,124,0,1588,1587,1,0,0,0,1588,1589,
        1,0,0,0,1589,1591,1,0,0,0,1590,1592,3,250,125,0,1591,1590,1,0,0,
        0,1591,1592,1,0,0,0,1592,1594,1,0,0,0,1593,1595,3,244,122,0,1594,
        1593,1,0,0,0,1594,1595,1,0,0,0,1595,1596,1,0,0,0,1596,1597,3,252,
        126,0,1597,1602,5,520,0,0,1598,1600,5,17,0,0,1599,1598,1,0,0,0,1599,
        1600,1,0,0,0,1600,1601,1,0,0,0,1601,1603,3,326,163,0,1602,1599,1,
        0,0,0,1602,1603,1,0,0,0,1603,231,1,0,0,0,1604,1605,5,260,0,0,1605,
        1606,5,34,0,0,1606,1611,3,234,117,0,1607,1608,5,523,0,0,1608,1610,
        3,234,117,0,1609,1607,1,0,0,0,1610,1613,1,0,0,0,1611,1609,1,0,0,
        0,1611,1612,1,0,0,0,1612,233,1,0,0,0,1613,1611,1,0,0,0,1614,1617,
        3,52,26,0,1615,1617,3,274,137,0,1616,1614,1,0,0,0,1616,1615,1,0,
        0,0,1617,1619,1,0,0,0,1618,1620,7,25,0,0,1619,1618,1,0,0,0,1619,
        1620,1,0,0,0,1620,1623,1,0,0,0,1621,1622,5,479,0,0,1622,1624,7,26,
        0,0,1623,1621,1,0,0,0,1623,1624,1,0,0,0,1624,235,1,0,0,0,1625,1628,
        5,206,0,0,1626,1629,5,5,0,0,1627,1629,3,264,132,0,1628,1626,1,0,
        0,0,1628,1627,1,0,0,0,1629,237,1,0,0,0,1630,1631,5,270,0,0,1631,
        1634,5,34,0,0,1632,1635,3,52,26,0,1633,1635,3,278,139,0,1634,1632,
        1,0,0,0,1634,1633,1,0,0,0,1635,1643,1,0,0,0,1636,1639,5,523,0,0,
        1637,1640,3,52,26,0,1638,1640,3,278,139,0,1639,1637,1,0,0,0,1639,
        1638,1,0,0,0,1640,1642,1,0,0,0,1641,1636,1,0,0,0,1642,1645,1,0,0,
        0,1643,1641,1,0,0,0,1643,1644,1,0,0,0,1644,239,1,0,0,0,1645,1643,
        1,0,0,0,1646,1663,5,530,0,0,1647,1663,5,533,0,0,1648,1663,5,538,
        0,0,1649,1650,5,521,0,0,1650,1651,5,541,0,0,1651,1652,5,523,0,0,
        1652,1653,5,541,0,0,1653,1663,5,522,0,0,1654,1655,5,521,0,0,1655,
        1656,5,541,0,0,1656,1657,5,523,0,0,1657,1663,5,522,0,0,1658,1659,
        5,521,0,0,1659,1660,5,523,0,0,1660,1661,5,541,0,0,1661,1663,5,522,
        0,0,1662,1646,1,0,0,0,1662,1647,1,0,0,0,1662,1648,1,0,0,0,1662,1649,
        1,0,0,0,1662,1654,1,0,0,0,1662,1658,1,0,0,0,1663,241,1,0,0,0,1664,
        1665,5,217,0,0,1665,1670,3,174,87,0,1666,1667,5,523,0,0,1667,1669,
        3,174,87,0,1668,1666,1,0,0,0,1669,1672,1,0,0,0,1670,1668,1,0,0,0,
        1670,1671,1,0,0,0,1671,243,1,0,0,0,1672,1670,1,0,0,0,1673,1674,5,
        273,0,0,1674,1676,5,519,0,0,1675,1677,3,246,123,0,1676,1675,1,0,
        0,0,1677,1678,1,0,0,0,1678,1676,1,0,0,0,1678,1679,1,0,0,0,1679,1680,
        1,0,0,0,1680,1682,5,520,0,0,1681,1683,3,262,131,0,1682,1681,1,0,
        0,0,1682,1683,1,0,0,0,1683,245,1,0,0,0,1684,1686,3,328,164,0,1685,
        1687,3,240,120,0,1686,1685,1,0,0,0,1686,1687,1,0,0,0,1687,247,1,
        0,0,0,1688,1689,5,5,0,0,1689,1690,5,324,0,0,1690,1691,5,274,0,0,
        1691,1697,5,212,0,0,1692,1693,5,256,0,0,1693,1694,5,323,0,0,1694,
        1695,5,274,0,0,1695,1697,5,212,0,0,1696,1688,1,0,0,0,1696,1692,1,
        0,0,0,1697,249,1,0,0,0,1698,1699,5,441,0,0,1699,1700,5,212,0,0,1700,
        1701,5,345,0,0,1701,1702,5,481,0,0,1702,1703,5,470,0,0,1703,1723,
        5,323,0,0,1704,1705,5,441,0,0,1705,1706,5,212,0,0,1706,1707,5,345,
        0,0,1707,1708,5,390,0,0,1708,1709,5,239,0,0,1709,1723,5,323,0,0,
        1710,1711,5,441,0,0,1711,1712,5,212,0,0,1712,1713,5,345,0,0,1713,
        1714,5,390,0,0,1714,1715,5,470,0,0,1715,1723,3,328,164,0,1716,1717,
        5,441,0,0,1717,1718,5,212,0,0,1718,1719,5,345,0,0,1719,1720,5,390,
        0,0,1720,1721,5,460,0,0,1721,1723,3,328,164,0,1722,1698,1,0,0,0,
        1722,1704,1,0,0,0,1722,1710,1,0,0,0,1722,1716,1,0,0,0,1723,251,1,
        0,0,0,1724,1725,5,105,0,0,1725,1730,3,174,87,0,1726,1727,5,523,0,
        0,1727,1729,3,174,87,0,1728,1726,1,0,0,0,1729,1732,1,0,0,0,1730,
        1728,1,0,0,0,1730,1731,1,0,0,0,1731,253,1,0,0,0,1732,1730,1,0,0,
        0,1733,1734,5,294,0,0,1734,1735,5,27,0,0,1735,1736,3,304,152,0,1736,
        1737,3,256,128,0,1737,1749,1,0,0,0,1738,1739,7,27,0,0,1739,1740,
        5,27,0,0,1740,1741,3,258,129,0,1741,1742,5,10,0,0,1742,1743,3,260,
        130,0,1743,1749,1,0,0,0,1744,1745,5,324,0,0,1745,1746,5,27,0,0,1746,
        1747,5,541,0,0,1747,1749,3,256,128,0,1748,1733,1,0,0,0,1748,1738,
        1,0,0,0,1748,1744,1,0,0,0,1749,255,1,0,0,0,1750,1751,5,483,0,0,1751,
        1752,5,10,0,0,1752,1753,5,76,0,0,1753,1754,5,323,0,0,1754,257,1,
        0,0,0,1755,1756,5,404,0,0,1756,1762,5,483,0,0,1757,1758,5,541,0,
        0,1758,1762,5,483,0,0,1759,1760,5,76,0,0,1760,1762,5,323,0,0,1761,
        1755,1,0,0,0,1761,1757,1,0,0,0,1761,1759,1,0,0,0,1762,259,1,0,0,
        0,1763,1764,5,76,0,0,1764,1770,5,323,0,0,1765,1766,5,541,0,0,1766,
        1770,5,146,0,0,1767,1768,5,404,0,0,1768,1770,5,146,0,0,1769,1763,
        1,0,0,0,1769,1765,1,0,0,0,1769,1767,1,0,0,0,1770,261,1,0,0,0,1771,
        1772,5,437,0,0,1772,1773,3,304,152,0,1773,263,1,0,0,0,1774,1775,
        3,266,133,0,1775,265,1,0,0,0,1776,1777,6,133,-1,0,1777,1778,5,243,
        0,0,1778,1789,3,266,133,6,1779,1780,5,133,0,0,1780,1781,5,519,0,
        0,1781,1782,3,160,80,0,1782,1783,5,520,0,0,1783,1789,1,0,0,0,1784,
        1786,3,274,137,0,1785,1787,3,268,134,0,1786,1785,1,0,0,0,1786,1787,
        1,0,0,0,1787,1789,1,0,0,0,1788,1776,1,0,0,0,1788,1779,1,0,0,0,1788,
        1784,1,0,0,0,1789,1804,1,0,0,0,1790,1791,10,3,0,0,1791,1792,5,10,
        0,0,1792,1803,3,266,133,4,1793,1794,10,2,0,0,1794,1795,5,259,0,0,
        1795,1803,3,266,133,3,1796,1797,10,1,0,0,1797,1799,5,185,0,0,1798,
        1800,5,243,0,0,1799,1798,1,0,0,0,1799,1800,1,0,0,0,1800,1801,1,0,
        0,0,1801,1803,7,28,0,0,1802,1790,1,0,0,0,1802,1793,1,0,0,0,1802,
        1796,1,0,0,0,1803,1806,1,0,0,0,1804,1802,1,0,0,0,1804,1805,1,0,0,
        0,1805,267,1,0,0,0,1806,1804,1,0,0,0,1807,1809,5,243,0,0,1808,1807,
        1,0,0,0,1808,1809,1,0,0,0,1809,1810,1,0,0,0,1810,1812,5,27,0,0,1811,
        1813,7,29,0,0,1812,1811,1,0,0,0,1812,1813,1,0,0,0,1813,1814,1,0,
        0,0,1814,1815,3,274,137,0,1815,1816,5,10,0,0,1816,1817,3,274,137,
        0,1817,1882,1,0,0,0,1818,1820,5,243,0,0,1819,1818,1,0,0,0,1819,1820,
        1,0,0,0,1820,1821,1,0,0,0,1821,1822,5,171,0,0,1822,1823,5,519,0,
        0,1823,1828,3,264,132,0,1824,1825,5,523,0,0,1825,1827,3,264,132,
        0,1826,1824,1,0,0,0,1827,1830,1,0,0,0,1828,1826,1,0,0,0,1828,1829,
        1,0,0,0,1829,1831,1,0,0,0,1830,1828,1,0,0,0,1831,1832,5,520,0,0,
        1832,1882,1,0,0,0,1833,1835,5,243,0,0,1834,1833,1,0,0,0,1834,1835,
        1,0,0,0,1835,1836,1,0,0,0,1836,1837,5,171,0,0,1837,1838,5,519,0,
        0,1838,1839,3,160,80,0,1839,1840,5,520,0,0,1840,1882,1,0,0,0,1841,
        1842,5,133,0,0,1842,1843,5,519,0,0,1843,1844,3,160,80,0,1844,1845,
        5,520,0,0,1845,1882,1,0,0,0,1846,1848,5,243,0,0,1847,1846,1,0,0,
        0,1847,1848,1,0,0,0,1848,1849,1,0,0,0,1849,1850,5,320,0,0,1850,1882,
        3,274,137,0,1851,1882,3,272,136,0,1852,1854,5,185,0,0,1853,1855,
        5,243,0,0,1854,1853,1,0,0,0,1854,1855,1,0,0,0,1855,1856,1,0,0,0,
        1856,1882,7,28,0,0,1857,1859,5,185,0,0,1858,1860,5,243,0,0,1859,
        1858,1,0,0,0,1859,1860,1,0,0,0,1860,1861,1,0,0,0,1861,1862,5,113,
        0,0,1862,1863,5,152,0,0,1863,1882,3,274,137,0,1864,1866,5,243,0,
        0,1865,1864,1,0,0,0,1865,1866,1,0,0,0,1866,1867,1,0,0,0,1867,1868,
        5,344,0,0,1868,1869,5,390,0,0,1869,1872,3,274,137,0,1870,1871,5,
        127,0,0,1871,1873,3,380,190,0,1872,1870,1,0,0,0,1872,1873,1,0,0,
        0,1873,1882,1,0,0,0,1874,1875,5,185,0,0,1875,1879,5,187,0,0,1876,
        1880,5,416,0,0,1877,1880,5,13,0,0,1878,1880,3,326,163,0,1879,1876,
        1,0,0,0,1879,1877,1,0,0,0,1879,1878,1,0,0,0,1879,1880,1,0,0,0,1880,
        1882,1,0,0,0,1881,1808,1,0,0,0,1881,1819,1,0,0,0,1881,1834,1,0,0,
        0,1881,1841,1,0,0,0,1881,1847,1,0,0,0,1881,1851,1,0,0,0,1881,1852,
        1,0,0,0,1881,1857,1,0,0,0,1881,1865,1,0,0,0,1881,1874,1,0,0,0,1882,
        269,1,0,0,0,1883,1892,5,246,0,0,1884,1885,5,121,0,0,1885,1892,5,
        13,0,0,1886,1887,5,121,0,0,1887,1892,3,350,175,0,1888,1892,5,399,
        0,0,1889,1892,5,140,0,0,1890,1892,5,407,0,0,1891,1883,1,0,0,0,1891,
        1884,1,0,0,0,1891,1886,1,0,0,0,1891,1888,1,0,0,0,1891,1889,1,0,0,
        0,1891,1890,1,0,0,0,1892,271,1,0,0,0,1893,1895,5,243,0,0,1894,1893,
        1,0,0,0,1894,1895,1,0,0,0,1895,1896,1,0,0,0,1896,1897,5,204,0,0,
        1897,1911,7,30,0,0,1898,1899,5,519,0,0,1899,1912,5,520,0,0,1900,
        1901,5,519,0,0,1901,1906,3,264,132,0,1902,1903,5,523,0,0,1903,1905,
        3,264,132,0,1904,1902,1,0,0,0,1905,1908,1,0,0,0,1906,1904,1,0,0,
        0,1906,1907,1,0,0,0,1907,1909,1,0,0,0,1908,1906,1,0,0,0,1909,1910,
        5,520,0,0,1910,1912,1,0,0,0,1911,1898,1,0,0,0,1911,1900,1,0,0,0,
        1912,1923,1,0,0,0,1913,1915,5,243,0,0,1914,1913,1,0,0,0,1914,1915,
        1,0,0,0,1915,1916,1,0,0,0,1916,1917,5,204,0,0,1917,1920,3,274,137,
        0,1918,1919,5,127,0,0,1919,1921,3,380,190,0,1920,1918,1,0,0,0,1920,
        1921,1,0,0,0,1921,1923,1,0,0,0,1922,1894,1,0,0,0,1922,1914,1,0,0,
        0,1923,273,1,0,0,0,1924,1925,6,137,-1,0,1925,1929,3,278,139,0,1926,
        1927,7,31,0,0,1927,1929,3,274,137,7,1928,1924,1,0,0,0,1928,1926,
        1,0,0,0,1929,1951,1,0,0,0,1930,1931,10,6,0,0,1931,1932,7,32,0,0,
        1932,1950,3,274,137,7,1933,1934,10,5,0,0,1934,1935,7,33,0,0,1935,
        1950,3,274,137,6,1936,1937,10,4,0,0,1937,1938,5,514,0,0,1938,1950,
        3,274,137,5,1939,1940,10,3,0,0,1940,1941,5,515,0,0,1941,1950,3,274,
        137,4,1942,1943,10,2,0,0,1943,1944,5,513,0,0,1944,1950,3,274,137,
        3,1945,1946,10,1,0,0,1946,1947,3,368,184,0,1947,1948,3,274,137,2,
        1948,1950,1,0,0,0,1949,1930,1,0,0,0,1949,1933,1,0,0,0,1949,1936,
        1,0,0,0,1949,1939,1,0,0,0,1949,1942,1,0,0,0,1949,1945,1,0,0,0,1950,
        1953,1,0,0,0,1951,1949,1,0,0,0,1951,1952,1,0,0,0,1952,275,1,0,0,
        0,1953,1951,1,0,0,0,1954,1974,3,394,197,0,1955,1974,3,284,142,0,
        1956,1957,3,286,143,0,1957,1969,5,519,0,0,1958,1960,3,386,193,0,
        1959,1958,1,0,0,0,1959,1960,1,0,0,0,1960,1961,1,0,0,0,1961,1966,
        3,288,144,0,1962,1963,5,523,0,0,1963,1965,3,288,144,0,1964,1962,
        1,0,0,0,1965,1968,1,0,0,0,1966,1964,1,0,0,0,1966,1967,1,0,0,0,1967,
        1970,1,0,0,0,1968,1966,1,0,0,0,1969,1959,1,0,0,0,1969,1970,1,0,0,
        0,1970,1971,1,0,0,0,1971,1972,5,520,0,0,1972,1974,1,0,0,0,1973,1954,
        1,0,0,0,1973,1955,1,0,0,0,1973,1956,1,0,0,0,1974,277,1,0,0,0,1975,
        1976,6,139,-1,0,1976,1978,5,40,0,0,1977,1979,3,332,166,0,1978,1977,
        1,0,0,0,1979,1980,1,0,0,0,1980,1978,1,0,0,0,1980,1981,1,0,0,0,1981,
        1984,1,0,0,0,1982,1983,5,120,0,0,1983,1985,3,264,132,0,1984,1982,
        1,0,0,0,1984,1985,1,0,0,0,1985,1986,1,0,0,0,1986,1987,5,122,0,0,
        1987,2058,1,0,0,0,1988,1989,5,40,0,0,1989,1991,3,264,132,0,1990,
        1992,3,332,166,0,1991,1990,1,0,0,0,1992,1993,1,0,0,0,1993,1991,1,
        0,0,0,1993,1994,1,0,0,0,1994,1997,1,0,0,0,1995,1996,5,120,0,0,1996,
        1998,3,264,132,0,1997,1995,1,0,0,0,1997,1998,1,0,0,0,1998,1999,1,
        0,0,0,1999,2000,5,122,0,0,2000,2058,1,0,0,0,2001,2002,5,41,0,0,2002,
        2003,5,519,0,0,2003,2004,3,264,132,0,2004,2005,5,17,0,0,2005,2006,
        3,58,29,0,2006,2007,5,520,0,0,2007,2058,1,0,0,0,2008,2009,5,460,
        0,0,2009,2010,5,519,0,0,2010,2013,3,264,132,0,2011,2012,5,464,0,
        0,2012,2014,5,479,0,0,2013,2011,1,0,0,0,2013,2014,1,0,0,0,2014,2015,
        1,0,0,0,2015,2016,5,520,0,0,2016,2058,1,0,0,0,2017,2018,5,470,0,
        0,2018,2019,5,519,0,0,2019,2022,3,264,132,0,2020,2021,5,464,0,0,
        2021,2023,5,479,0,0,2022,2020,1,0,0,0,2022,2023,1,0,0,0,2023,2024,
        1,0,0,0,2024,2025,5,520,0,0,2025,2058,1,0,0,0,2026,2027,5,283,0,
        0,2027,2028,5,519,0,0,2028,2029,3,274,137,0,2029,2030,5,171,0,0,
        2030,2031,3,274,137,0,2031,2032,5,520,0,0,2032,2058,1,0,0,0,2033,
        2058,3,376,188,0,2034,2058,5,530,0,0,2035,2036,3,350,175,0,2036,
        2037,5,516,0,0,2037,2038,5,530,0,0,2038,2058,1,0,0,0,2039,2040,5,
        519,0,0,2040,2041,3,160,80,0,2041,2042,5,520,0,0,2042,2058,1,0,0,
        0,2043,2058,3,276,138,0,2044,2058,3,54,27,0,2045,2058,3,298,149,
        0,2046,2047,5,519,0,0,2047,2048,3,264,132,0,2048,2049,5,520,0,0,
        2049,2058,1,0,0,0,2050,2051,5,139,0,0,2051,2052,5,519,0,0,2052,2053,
        3,326,163,0,2053,2054,5,152,0,0,2054,2055,3,274,137,0,2055,2056,
        5,520,0,0,2056,2058,1,0,0,0,2057,1975,1,0,0,0,2057,1988,1,0,0,0,
        2057,2001,1,0,0,0,2057,2008,1,0,0,0,2057,2017,1,0,0,0,2057,2026,
        1,0,0,0,2057,2033,1,0,0,0,2057,2034,1,0,0,0,2057,2035,1,0,0,0,2057,
        2039,1,0,0,0,2057,2043,1,0,0,0,2057,2044,1,0,0,0,2057,2045,1,0,0,
        0,2057,2046,1,0,0,0,2057,2050,1,0,0,0,2058,2066,1,0,0,0,2059,2060,
        10,5,0,0,2060,2061,5,517,0,0,2061,2062,3,274,137,0,2062,2063,5,518,
        0,0,2063,2065,1,0,0,0,2064,2059,1,0,0,0,2065,2068,1,0,0,0,2066,2064,
        1,0,0,0,2066,2067,1,0,0,0,2067,279,1,0,0,0,2068,2066,1,0,0,0,2069,
        2070,3,350,175,0,2070,281,1,0,0,0,2071,2076,3,398,199,0,2072,2076,
        3,394,197,0,2073,2076,3,396,198,0,2074,2076,3,350,175,0,2075,2071,
        1,0,0,0,2075,2072,1,0,0,0,2075,2073,1,0,0,0,2075,2074,1,0,0,0,2076,
        283,1,0,0,0,2077,2078,3,396,198,0,2078,2079,5,540,0,0,2079,2082,
        1,0,0,0,2080,2082,3,304,152,0,2081,2077,1,0,0,0,2081,2080,1,0,0,
        0,2082,285,1,0,0,0,2083,2086,3,398,199,0,2084,2086,3,350,175,0,2085,
        2083,1,0,0,0,2085,2084,1,0,0,0,2086,287,1,0,0,0,2087,2096,3,392,
        196,0,2088,2096,3,390,195,0,2089,2096,3,388,194,0,2090,2096,3,264,
        132,0,2091,2096,3,290,145,0,2092,2096,3,292,146,0,2093,2096,3,294,
        147,0,2094,2096,3,296,148,0,2095,2087,1,0,0,0,2095,2088,1,0,0,0,
        2095,2089,1,0,0,0,2095,2090,1,0,0,0,2095,2091,1,0,0,0,2095,2092,
        1,0,0,0,2095,2093,1,0,0,0,2095,2094,1,0,0,0,2096,289,1,0,0,0,2097,
        2101,3,54,27,0,2098,2099,3,350,175,0,2099,2100,3,58,29,0,2100,2102,
        1,0,0,0,2101,2098,1,0,0,0,2101,2102,1,0,0,0,2102,2111,1,0,0,0,2103,
        2108,3,350,175,0,2104,2108,5,246,0,0,2105,2106,5,104,0,0,2106,2108,
        3,274,137,0,2107,2103,1,0,0,0,2107,2104,1,0,0,0,2107,2105,1,0,0,
        0,2108,2109,1,0,0,0,2109,2110,5,255,0,0,2110,2112,5,121,0,0,2111,
        2107,1,0,0,0,2111,2112,1,0,0,0,2112,2121,1,0,0,0,2113,2118,3,350,
        175,0,2114,2118,5,246,0,0,2115,2116,5,104,0,0,2116,2118,3,274,137,
        0,2117,2113,1,0,0,0,2117,2114,1,0,0,0,2117,2115,1,0,0,0,2118,2119,
        1,0,0,0,2119,2120,5,255,0,0,2120,2122,3,350,175,0,2121,2117,1,0,
        0,0,2121,2122,1,0,0,0,2122,291,1,0,0,0,2123,2135,3,54,27,0,2124,
        2130,5,438,0,0,2125,2127,5,436,0,0,2126,2128,3,350,175,0,2127,2126,
        1,0,0,0,2127,2128,1,0,0,0,2128,2130,1,0,0,0,2129,2124,1,0,0,0,2129,
        2125,1,0,0,0,2130,2132,1,0,0,0,2131,2133,5,13,0,0,2132,2131,1,0,
        0,0,2132,2133,1,0,0,0,2133,2134,1,0,0,0,2134,2136,3,350,175,0,2135,
        2129,1,0,0,0,2135,2136,1,0,0,0,2136,2141,1,0,0,0,2137,2138,3,270,
        135,0,2138,2139,5,255,0,0,2139,2140,5,121,0,0,2140,2142,1,0,0,0,
        2141,2137,1,0,0,0,2141,2142,1,0,0,0,2142,2147,1,0,0,0,2143,2144,
        3,270,135,0,2144,2145,5,255,0,0,2145,2146,3,350,175,0,2146,2148,
        1,0,0,0,2147,2143,1,0,0,0,2147,2148,1,0,0,0,2148,293,1,0,0,0,2149,
        2151,5,469,0,0,2150,2149,1,0,0,0,2150,2151,1,0,0,0,2151,2152,1,0,
        0,0,2152,2154,3,54,27,0,2153,2155,5,416,0,0,2154,2153,1,0,0,0,2154,
        2155,1,0,0,0,2155,2166,1,0,0,0,2156,2167,3,274,137,0,2157,2158,5,
        187,0,0,2158,2162,5,519,0,0,2159,2161,3,274,137,0,2160,2159,1,0,
        0,0,2161,2164,1,0,0,0,2162,2160,1,0,0,0,2162,2163,1,0,0,0,2163,2165,
        1,0,0,0,2164,2162,1,0,0,0,2165,2167,5,520,0,0,2166,2156,1,0,0,0,
        2166,2157,1,0,0,0,2167,2169,1,0,0,0,2168,2150,1,0,0,0,2169,2172,
        1,0,0,0,2170,2168,1,0,0,0,2170,2171,1,0,0,0,2171,2179,1,0,0,0,2172,
        2170,1,0,0,0,2173,2176,5,246,0,0,2174,2176,3,350,175,0,2175,2173,
        1,0,0,0,2175,2174,1,0,0,0,2176,2177,1,0,0,0,2177,2178,5,255,0,0,
        2178,2180,5,246,0,0,2179,2175,1,0,0,0,2179,2180,1,0,0,0,2180,295,
        1,0,0,0,2181,2183,3,274,137,0,2182,2181,1,0,0,0,2183,2186,1,0,0,
        0,2184,2182,1,0,0,0,2184,2185,1,0,0,0,2185,2193,1,0,0,0,2186,2184,
        1,0,0,0,2187,2190,5,246,0,0,2188,2190,3,350,175,0,2189,2187,1,0,
        0,0,2189,2188,1,0,0,0,2190,2191,1,0,0,0,2191,2192,5,255,0,0,2192,
        2194,5,246,0,0,2193,2189,1,0,0,0,2193,2194,1,0,0,0,2194,297,1,0,
        0,0,2195,2196,3,350,175,0,2196,299,1,0,0,0,2197,2198,3,326,163,0,
        2198,301,1,0,0,0,2199,2202,3,326,163,0,2200,2202,3,298,149,0,2201,
        2199,1,0,0,0,2201,2200,1,0,0,0,2202,303,1,0,0,0,2203,2206,5,183,
        0,0,2204,2207,3,306,153,0,2205,2207,3,310,155,0,2206,2204,1,0,0,
        0,2206,2205,1,0,0,0,2206,2207,1,0,0,0,2207,305,1,0,0,0,2208,2210,
        3,308,154,0,2209,2211,3,312,156,0,2210,2209,1,0,0,0,2210,2211,1,
        0,0,0,2211,307,1,0,0,0,2212,2213,3,314,157,0,2213,2214,3,390,195,
        0,2214,2216,1,0,0,0,2215,2212,1,0,0,0,2216,2217,1,0,0,0,2217,2215,
        1,0,0,0,2217,2218,1,0,0,0,2218,309,1,0,0,0,2219,2222,3,312,156,0,
        2220,2223,3,308,154,0,2221,2223,3,312,156,0,2222,2220,1,0,0,0,2222,
        2221,1,0,0,0,2222,2223,1,0,0,0,2223,311,1,0,0,0,2224,2225,3,314,
        157,0,2225,2226,3,390,195,0,2226,2227,5,390,0,0,2227,2228,3,390,
        195,0,2228,313,1,0,0,0,2229,2231,7,34,0,0,2230,2229,1,0,0,0,2230,
        2231,1,0,0,0,2231,2232,1,0,0,0,2232,2235,7,35,0,0,2233,2235,5,540,
        0,0,2234,2230,1,0,0,0,2234,2233,1,0,0,0,2235,315,1,0,0,0,2236,2238,
        5,17,0,0,2237,2236,1,0,0,0,2237,2238,1,0,0,0,2238,2239,1,0,0,0,2239,
        2241,3,326,163,0,2240,2242,3,322,161,0,2241,2240,1,0,0,0,2241,2242,
        1,0,0,0,2242,317,1,0,0,0,2243,2244,3,326,163,0,2244,2245,3,320,160,
        0,2245,319,1,0,0,0,2246,2247,5,223,0,0,2247,2249,3,326,163,0,2248,
        2246,1,0,0,0,2249,2250,1,0,0,0,2250,2248,1,0,0,0,2250,2251,1,0,0,
        0,2251,2254,1,0,0,0,2252,2254,1,0,0,0,2253,2248,1,0,0,0,2253,2252,
        1,0,0,0,2254,321,1,0,0,0,2255,2256,5,519,0,0,2256,2257,3,324,162,
        0,2257,2258,5,520,0,0,2258,323,1,0,0,0,2259,2264,3,326,163,0,2260,
        2261,5,523,0,0,2261,2263,3,326,163,0,2262,2260,1,0,0,0,2263,2266,
        1,0,0,0,2264,2262,1,0,0,0,2264,2265,1,0,0,0,2265,325,1,0,0,0,2266,
        2264,1,0,0,0,2267,2271,3,328,164,0,2268,2271,3,330,165,0,2269,2271,
        3,400,200,0,2270,2267,1,0,0,0,2270,2268,1,0,0,0,2270,2269,1,0,0,
        0,2271,327,1,0,0,0,2272,2273,7,36,0,0,2273,329,1,0,0,0,2274,2275,
        5,540,0,0,2275,331,1,0,0,0,2276,2277,5,431,0,0,2277,2278,3,264,132,
        0,2278,2279,5,378,0,0,2279,2280,3,264,132,0,2280,333,1,0,0,0,2281,
        2282,3,326,163,0,2282,335,1,0,0,0,2283,2284,3,326,163,0,2284,337,
        1,0,0,0,2285,2288,3,326,163,0,2286,2287,5,516,0,0,2287,2289,3,326,
        163,0,2288,2286,1,0,0,0,2288,2289,1,0,0,0,2289,339,1,0,0,0,2290,
        2293,3,326,163,0,2291,2292,5,516,0,0,2292,2294,3,326,163,0,2293,
        2291,1,0,0,0,2293,2294,1,0,0,0,2294,341,1,0,0,0,2295,2298,3,326,
        163,0,2296,2297,5,516,0,0,2297,2299,3,326,163,0,2298,2296,1,0,0,
        0,2298,2299,1,0,0,0,2299,2308,1,0,0,0,2300,2301,3,326,163,0,2301,
        2302,5,516,0,0,2302,2305,3,326,163,0,2303,2304,5,516,0,0,2304,2306,
        3,326,163,0,2305,2303,1,0,0,0,2305,2306,1,0,0,0,2306,2308,1,0,0,
        0,2307,2295,1,0,0,0,2307,2300,1,0,0,0,2308,343,1,0,0,0,2309,2312,
        3,326,163,0,2310,2311,5,516,0,0,2311,2313,3,326,163,0,2312,2310,
        1,0,0,0,2312,2313,1,0,0,0,2313,2322,1,0,0,0,2314,2315,3,326,163,
        0,2315,2316,5,516,0,0,2316,2319,3,326,163,0,2317,2318,5,516,0,0,
        2318,2320,3,326,163,0,2319,2317,1,0,0,0,2319,2320,1,0,0,0,2320,2322,
        1,0,0,0,2321,2309,1,0,0,0,2321,2314,1,0,0,0,2322,345,1,0,0,0,2323,
        2326,3,326,163,0,2324,2325,5,516,0,0,2325,2327,3,326,163,0,2326,
        2324,1,0,0,0,2326,2327,1,0,0,0,2327,2336,1,0,0,0,2328,2329,3,326,
        163,0,2329,2330,5,516,0,0,2330,2333,3,326,163,0,2331,2332,5,516,
        0,0,2332,2334,3,326,163,0,2333,2331,1,0,0,0,2333,2334,1,0,0,0,2334,
        2336,1,0,0,0,2335,2323,1,0,0,0,2335,2328,1,0,0,0,2336,347,1,0,0,
        0,2337,2340,3,326,163,0,2338,2339,5,516,0,0,2339,2341,3,326,163,
        0,2340,2338,1,0,0,0,2340,2341,1,0,0,0,2341,2350,1,0,0,0,2342,2343,
        3,326,163,0,2343,2344,5,516,0,0,2344,2347,3,326,163,0,2345,2346,
        5,516,0,0,2346,2348,3,326,163,0,2347,2345,1,0,0,0,2347,2348,1,0,
        0,0,2348,2350,1,0,0,0,2349,2337,1,0,0,0,2349,2342,1,0,0,0,2350,349,
        1,0,0,0,2351,2356,3,326,163,0,2352,2353,5,516,0,0,2353,2355,3,326,
        163,0,2354,2352,1,0,0,0,2355,2358,1,0,0,0,2356,2357,1,0,0,0,2356,
        2354,1,0,0,0,2357,351,1,0,0,0,2358,2356,1,0,0,0,2359,2360,5,436,
        0,0,2360,2361,3,358,179,0,2361,353,1,0,0,0,2362,2363,5,168,0,0,2363,
        2364,5,243,0,0,2364,2365,5,133,0,0,2365,355,1,0,0,0,2366,2367,5,
        168,0,0,2367,2368,5,133,0,0,2368,357,1,0,0,0,2369,2370,5,519,0,0,
        2370,2375,3,360,180,0,2371,2372,5,523,0,0,2372,2374,3,360,180,0,
        2373,2371,1,0,0,0,2374,2377,1,0,0,0,2375,2373,1,0,0,0,2375,2376,
        1,0,0,0,2376,2378,1,0,0,0,2377,2375,1,0,0,0,2378,2379,5,520,0,0,
        2379,359,1,0,0,0,2380,2385,3,362,181,0,2381,2383,5,508,0,0,2382,
        2381,1,0,0,0,2382,2383,1,0,0,0,2383,2384,1,0,0,0,2384,2386,3,364,
        182,0,2385,2382,1,0,0,0,2385,2386,1,0,0,0,2386,361,1,0,0,0,2387,
        2391,3,326,163,0,2388,2391,3,298,149,0,2389,2391,5,540,0,0,2390,
        2387,1,0,0,0,2390,2388,1,0,0,0,2390,2389,1,0,0,0,2391,363,1,0,0,
        0,2392,2397,5,541,0,0,2393,2397,5,542,0,0,2394,2397,3,384,192,0,
        2395,2397,5,540,0,0,2396,2392,1,0,0,0,2396,2393,1,0,0,0,2396,2394,
        1,0,0,0,2396,2395,1,0,0,0,2397,365,1,0,0,0,2398,2405,5,10,0,0,2399,
        2400,5,514,0,0,2400,2405,5,514,0,0,2401,2405,5,259,0,0,2402,2403,
        5,513,0,0,2403,2405,5,513,0,0,2404,2398,1,0,0,0,2404,2399,1,0,0,
        0,2404,2401,1,0,0,0,2404,2402,1,0,0,0,2405,367,1,0,0,0,2406,2421,
        5,508,0,0,2407,2421,5,509,0,0,2408,2421,5,510,0,0,2409,2410,5,510,
        0,0,2410,2421,5,508,0,0,2411,2412,5,509,0,0,2412,2421,5,508,0,0,
        2413,2414,5,510,0,0,2414,2421,5,509,0,0,2415,2416,5,511,0,0,2416,
        2421,5,508,0,0,2417,2418,5,510,0,0,2418,2419,5,508,0,0,2419,2421,
        5,509,0,0,2420,2406,1,0,0,0,2420,2407,1,0,0,0,2420,2408,1,0,0,0,
        2420,2409,1,0,0,0,2420,2411,1,0,0,0,2420,2413,1,0,0,0,2420,2415,
        1,0,0,0,2420,2417,1,0,0,0,2421,369,1,0,0,0,2422,2423,5,510,0,0,2423,
        2430,5,510,0,0,2424,2425,5,509,0,0,2425,2430,5,509,0,0,2426,2430,
        5,514,0,0,2427,2430,5,515,0,0,2428,2430,5,513,0,0,2429,2422,1,0,
        0,0,2429,2424,1,0,0,0,2429,2426,1,0,0,0,2429,2427,1,0,0,0,2429,2428,
        1,0,0,0,2430,371,1,0,0,0,2431,2432,7,37,0,0,2432,373,1,0,0,0,2433,
        2434,7,38,0,0,2434,375,1,0,0,0,2435,2450,3,304,152,0,2436,2450,3,
        378,189,0,2437,2450,3,380,190,0,2438,2440,5,532,0,0,2439,2438,1,
        0,0,0,2439,2440,1,0,0,0,2440,2441,1,0,0,0,2441,2450,3,382,191,0,
        2442,2450,3,384,192,0,2443,2450,5,542,0,0,2444,2450,5,543,0,0,2445,
        2447,5,243,0,0,2446,2445,1,0,0,0,2446,2447,1,0,0,0,2447,2448,1,0,
        0,0,2448,2450,5,246,0,0,2449,2435,1,0,0,0,2449,2436,1,0,0,0,2449,
        2437,1,0,0,0,2449,2439,1,0,0,0,2449,2442,1,0,0,0,2449,2443,1,0,0,
        0,2449,2444,1,0,0,0,2449,2446,1,0,0,0,2450,377,1,0,0,0,2451,2452,
        3,388,194,0,2452,2453,3,380,190,0,2453,379,1,0,0,0,2454,2455,5,540,
        0,0,2455,381,1,0,0,0,2456,2457,5,541,0,0,2457,383,1,0,0,0,2458,2459,
        7,39,0,0,2459,385,1,0,0,0,2460,2461,7,40,0,0,2461,387,1,0,0,0,2462,
        2463,7,41,0,0,2463,389,1,0,0,0,2464,2465,7,42,0,0,2465,391,1,0,0,
        0,2466,2467,7,43,0,0,2467,393,1,0,0,0,2468,2469,7,44,0,0,2469,395,
        1,0,0,0,2470,2471,7,45,0,0,2471,397,1,0,0,0,2472,2473,7,46,0,0,2473,
        399,1,0,0,0,2474,2475,7,47,0,0,2475,401,1,0,0,0,299,405,412,415,
        429,447,451,460,465,472,483,492,504,507,514,517,525,529,534,537,
        544,552,556,568,576,580,612,615,620,624,628,632,641,646,650,654,
        659,662,666,671,677,682,687,691,695,699,709,717,721,725,729,733,
        737,741,745,749,751,761,769,793,807,812,816,822,825,828,835,838,
        847,859,883,895,900,904,912,916,922,932,937,943,947,951,955,964,
        968,975,978,988,996,1004,1008,1023,1042,1053,1057,1064,1069,1075,
        1079,1086,1090,1094,1098,1106,1110,1115,1121,1127,1130,1134,1145,
        1154,1161,1172,1184,1199,1202,1206,1209,1211,1216,1220,1223,1227,
        1236,1245,1255,1260,1271,1274,1277,1280,1283,1289,1293,1301,1304,
        1309,1312,1316,1319,1321,1335,1346,1351,1359,1362,1365,1370,1372,
        1374,1379,1382,1386,1390,1399,1410,1437,1459,1472,1484,1497,1509,
        1521,1527,1554,1562,1566,1569,1572,1579,1582,1585,1588,1591,1594,
        1599,1602,1611,1616,1619,1623,1628,1634,1639,1643,1662,1670,1678,
        1682,1686,1696,1722,1730,1748,1761,1769,1786,1788,1799,1802,1804,
        1808,1812,1819,1828,1834,1847,1854,1859,1865,1872,1879,1881,1891,
        1894,1906,1911,1914,1920,1922,1928,1949,1951,1959,1966,1969,1973,
        1980,1984,1993,1997,2013,2022,2057,2066,2075,2081,2085,2095,2101,
        2107,2111,2117,2121,2127,2129,2132,2135,2141,2147,2150,2154,2162,
        2166,2170,2175,2179,2184,2189,2193,2201,2206,2210,2217,2222,2230,
        2234,2237,2241,2250,2253,2264,2270,2288,2293,2298,2305,2307,2312,
        2319,2321,2326,2333,2335,2340,2347,2349,2356,2375,2382,2385,2390,
        2396,2404,2420,2429,2439,2446,2449
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!FlinkSqlParser.__ATN) {
            FlinkSqlParser.__ATN = new antlr.ATNDeserializer().deserialize(FlinkSqlParser._serializedATN);
        }

        return FlinkSqlParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(FlinkSqlParser.literalNames, FlinkSqlParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return FlinkSqlParser.vocabulary;
    }

    private static readonly decisionsToDFA = FlinkSqlParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.EOF, 0)!;
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
        return FlinkSqlParser.RULE_program;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
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
    public sqlStatement(): SqlStatementContext | null {
        return this.getRuleContext(0, SqlStatementContext);
    }
    public SEMICOLON(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.SEMICOLON, 0);
    }
    public emptyStatement(): EmptyStatementContext | null {
        return this.getRuleContext(0, EmptyStatementContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_singleStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterSingleStatement) {
             listener.enterSingleStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitSingleStatement) {
             listener.exitSingleStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
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
    public ddlStatement(): DdlStatementContext | null {
        return this.getRuleContext(0, DdlStatementContext);
    }
    public dmlStatement(): DmlStatementContext | null {
        return this.getRuleContext(0, DmlStatementContext);
    }
    public describeStatement(): DescribeStatementContext | null {
        return this.getRuleContext(0, DescribeStatementContext);
    }
    public explainStatement(): ExplainStatementContext | null {
        return this.getRuleContext(0, ExplainStatementContext);
    }
    public useStatement(): UseStatementContext | null {
        return this.getRuleContext(0, UseStatementContext);
    }
    public showStatement(): ShowStatementContext | null {
        return this.getRuleContext(0, ShowStatementContext);
    }
    public loadStatement(): LoadStatementContext | null {
        return this.getRuleContext(0, LoadStatementContext);
    }
    public unloadStatement(): UnloadStatementContext | null {
        return this.getRuleContext(0, UnloadStatementContext);
    }
    public setStatement(): SetStatementContext | null {
        return this.getRuleContext(0, SetStatementContext);
    }
    public resetStatement(): ResetStatementContext | null {
        return this.getRuleContext(0, ResetStatementContext);
    }
    public jarStatement(): JarStatementContext | null {
        return this.getRuleContext(0, JarStatementContext);
    }
    public dtAddStatement(): DtAddStatementContext | null {
        return this.getRuleContext(0, DtAddStatementContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_sqlStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterSqlStatement) {
             listener.enterSqlStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitSqlStatement) {
             listener.exitSqlStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSqlStatement) {
            return visitor.visitSqlStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EmptyStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_emptyStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterEmptyStatement) {
             listener.enterEmptyStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitEmptyStatement) {
             listener.exitEmptyStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitEmptyStatement) {
            return visitor.visitEmptyStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DdlStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public createTable(): CreateTableContext | null {
        return this.getRuleContext(0, CreateTableContext);
    }
    public createDatabase(): CreateDatabaseContext | null {
        return this.getRuleContext(0, CreateDatabaseContext);
    }
    public createView(): CreateViewContext | null {
        return this.getRuleContext(0, CreateViewContext);
    }
    public createFunction(): CreateFunctionContext | null {
        return this.getRuleContext(0, CreateFunctionContext);
    }
    public createCatalog(): CreateCatalogContext | null {
        return this.getRuleContext(0, CreateCatalogContext);
    }
    public alterTable(): AlterTableContext | null {
        return this.getRuleContext(0, AlterTableContext);
    }
    public alterView(): AlterViewContext | null {
        return this.getRuleContext(0, AlterViewContext);
    }
    public alterDatabase(): AlterDatabaseContext | null {
        return this.getRuleContext(0, AlterDatabaseContext);
    }
    public alterFunction(): AlterFunctionContext | null {
        return this.getRuleContext(0, AlterFunctionContext);
    }
    public dropCatalog(): DropCatalogContext | null {
        return this.getRuleContext(0, DropCatalogContext);
    }
    public dropTable(): DropTableContext | null {
        return this.getRuleContext(0, DropTableContext);
    }
    public dropDatabase(): DropDatabaseContext | null {
        return this.getRuleContext(0, DropDatabaseContext);
    }
    public dropView(): DropViewContext | null {
        return this.getRuleContext(0, DropViewContext);
    }
    public dropFunction(): DropFunctionContext | null {
        return this.getRuleContext(0, DropFunctionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_ddlStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterDdlStatement) {
             listener.enterDdlStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitDdlStatement) {
             listener.exitDdlStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDdlStatement) {
            return visitor.visitDdlStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DmlStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public queryStatement(): QueryStatementContext | null {
        return this.getRuleContext(0, QueryStatementContext);
    }
    public insertStatement(): InsertStatementContext | null {
        return this.getRuleContext(0, InsertStatementContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dmlStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterDmlStatement) {
             listener.enterDmlStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitDmlStatement) {
             listener.exitDmlStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDmlStatement) {
            return visitor.visitDmlStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DescribeStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public KW_DESCRIBE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DESCRIBE, 0);
    }
    public KW_DESC(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DESC, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_describeStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterDescribeStatement) {
             listener.enterDescribeStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitDescribeStatement) {
             listener.exitDescribeStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDescribeStatement) {
            return visitor.visitDescribeStatement(this);
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
        return this.getToken(FlinkSqlParser.KW_EXPLAIN, 0)!;
    }
    public dmlStatement(): DmlStatementContext | null {
        return this.getRuleContext(0, DmlStatementContext);
    }
    public insertSimpleStatement(): InsertSimpleStatementContext | null {
        return this.getRuleContext(0, InsertSimpleStatementContext);
    }
    public insertMulStatement(): InsertMulStatementContext | null {
        return this.getRuleContext(0, InsertMulStatementContext);
    }
    public explainDetails(): ExplainDetailsContext | null {
        return this.getRuleContext(0, ExplainDetailsContext);
    }
    public KW_PLAN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PLAN, 0);
    }
    public KW_FOR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FOR, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_explainStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterExplainStatement) {
             listener.enterExplainStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitExplainStatement) {
             listener.exitExplainStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitExplainStatement) {
            return visitor.visitExplainStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExplainDetailsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public explainDetail(): ExplainDetailContext[];
    public explainDetail(i: number): ExplainDetailContext | null;
    public explainDetail(i?: number): ExplainDetailContext[] | ExplainDetailContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExplainDetailContext);
        }

        return this.getRuleContext(i, ExplainDetailContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_explainDetails;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterExplainDetails) {
             listener.enterExplainDetails(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitExplainDetails) {
             listener.exitExplainDetails(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitExplainDetails) {
            return visitor.visitExplainDetails(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExplainDetailContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CHANGELOG_MODE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CHANGELOG_MODE, 0);
    }
    public KW_JSON_EXECUTION_PLAN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_JSON_EXECUTION_PLAN, 0);
    }
    public KW_ESTIMATED_COST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ESTIMATED_COST, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_explainDetail;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterExplainDetail) {
             listener.enterExplainDetail(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitExplainDetail) {
             listener.exitExplainDetail(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitExplainDetail) {
            return visitor.visitExplainDetail(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UseStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_USE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_USE, 0);
    }
    public KW_CATALOG(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CATALOG, 0);
    }
    public catalogPath(): CatalogPathContext | null {
        return this.getRuleContext(0, CatalogPathContext);
    }
    public databasePath(): DatabasePathContext | null {
        return this.getRuleContext(0, DatabasePathContext);
    }
    public useModuleStatement(): UseModuleStatementContext | null {
        return this.getRuleContext(0, UseModuleStatementContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_useStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterUseStatement) {
             listener.enterUseStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitUseStatement) {
             listener.exitUseStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitUseStatement) {
            return visitor.visitUseStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UseModuleStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_USE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_USE, 0)!;
    }
    public KW_MODULES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MODULES, 0)!;
    }
    public uid(): UidContext[];
    public uid(i: number): UidContext | null;
    public uid(i?: number): UidContext[] | UidContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UidContext);
        }

        return this.getRuleContext(i, UidContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_useModuleStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterUseModuleStatement) {
             listener.enterUseModuleStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitUseModuleStatement) {
             listener.exitUseModuleStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitUseModuleStatement) {
            return visitor.visitUseModuleStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SHOW, 0)!;
    }
    public KW_CATALOGS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CATALOGS, 0);
    }
    public KW_DATABASES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DATABASES, 0);
    }
    public KW_VIEWS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_VIEWS, 0);
    }
    public KW_JARS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_JARS, 0);
    }
    public KW_CURRENT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CURRENT, 0);
    }
    public KW_CATALOG(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CATALOG, 0);
    }
    public KW_DATABASE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DATABASE, 0);
    }
    public KW_TABLES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TABLES, 0);
    }
    public databasePath(): DatabasePathContext | null {
        return this.getRuleContext(0, DatabasePathContext);
    }
    public likePredicate(): LikePredicateContext | null {
        return this.getRuleContext(0, LikePredicateContext);
    }
    public KW_FROM(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FROM, 0);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_IN, 0);
    }
    public KW_COLUMNS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_COLUMNS, 0);
    }
    public viewPath(): ViewPathContext | null {
        return this.getRuleContext(0, ViewPathContext);
    }
    public tablePath(): TablePathContext | null {
        return this.getRuleContext(0, TablePathContext);
    }
    public KW_CREATE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0);
    }
    public KW_TABLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    public KW_VIEW(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_VIEW, 0);
    }
    public KW_FUNCTIONS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FUNCTIONS, 0);
    }
    public KW_USER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_USER, 0);
    }
    public KW_MODULES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MODULES, 0);
    }
    public KW_FULL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FULL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_showStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterShowStatement) {
             listener.enterShowStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitShowStatement) {
             listener.exitShowStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitShowStatement) {
            return visitor.visitShowStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LoadStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LOAD(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LOAD, 0)!;
    }
    public KW_MODULE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MODULE, 0)!;
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_WITH, 0);
    }
    public tablePropertyList(): TablePropertyListContext | null {
        return this.getRuleContext(0, TablePropertyListContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_loadStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterLoadStatement) {
             listener.enterLoadStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitLoadStatement) {
             listener.exitLoadStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLoadStatement) {
            return visitor.visitLoadStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnloadStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_UNLOAD(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UNLOAD, 0)!;
    }
    public KW_MODULE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MODULE, 0)!;
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_unloadStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterUnloadStatement) {
             listener.enterUnloadStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitUnloadStatement) {
             listener.exitUnloadStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitUnloadStatement) {
            return visitor.visitUnloadStatement(this);
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
        return this.getToken(FlinkSqlParser.KW_SET, 0)!;
    }
    public tableProperty(): TablePropertyContext | null {
        return this.getRuleContext(0, TablePropertyContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_setStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterSetStatement) {
             listener.enterSetStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitSetStatement) {
             listener.exitSetStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSetStatement) {
            return visitor.visitSetStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ResetStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_RESET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RESET, 0)!;
    }
    public tablePropertyKey(): TablePropertyKeyContext | null {
        return this.getRuleContext(0, TablePropertyKeyContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_resetStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterResetStatement) {
             listener.enterResetStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitResetStatement) {
             listener.exitResetStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitResetStatement) {
            return visitor.visitResetStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JarStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_JAR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_JAR, 0)!;
    }
    public jarFileName(): JarFileNameContext {
        return this.getRuleContext(0, JarFileNameContext)!;
    }
    public KW_ADD(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ADD, 0);
    }
    public KW_REMOVE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_REMOVE, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_jarStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterJarStatement) {
             listener.enterJarStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitJarStatement) {
             listener.exitJarStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitJarStatement) {
            return visitor.visitJarStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DtAddStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ADD(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ADD, 0)!;
    }
    public KW_JAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_JAR, 0);
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_WITH, 0);
    }
    public dtFilePath(): DtFilePathContext {
        return this.getRuleContext(0, DtFilePathContext)!;
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public uid(): UidContext[];
    public uid(i: number): UidContext | null;
    public uid(i?: number): UidContext[] | UidContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UidContext);
        }

        return this.getRuleContext(i, UidContext);
    }
    public KW_FILE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FILE, 0);
    }
    public KW_RENAME(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_RENAME, 0);
    }
    public KW_PYTHON_FILES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PYTHON_FILES, 0);
    }
    public KW_PYTHON_REQUIREMENTS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PYTHON_REQUIREMENTS, 0);
    }
    public KW_PYTHON_DEPENDENCIES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PYTHON_DEPENDENCIES, 0);
    }
    public KW_PYTHON_JAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PYTHON_JAR, 0);
    }
    public KW_PYTHON_ARCHIVES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PYTHON_ARCHIVES, 0);
    }
    public KW_PYTHON_PARAMETER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PYTHON_PARAMETER, 0);
    }
    public KW_ENGINE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ENGINE, 0);
    }
    public KW_KEY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_KEY, 0);
    }
    public KW_CONFIG(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CONFIG, 0);
    }
    public KW_FOR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FOR, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dtAddStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterDtAddStatement) {
             listener.enterDtAddStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitDtAddStatement) {
             listener.exitDtAddStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDtAddStatement) {
            return visitor.visitDtAddStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DtFilePathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext[];
    public uid(i: number): UidContext | null;
    public uid(i?: number): UidContext[] | UidContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UidContext);
        }

        return this.getRuleContext(i, UidContext);
    }
    public SLASH_SIGN(): antlr.TerminalNode[];
    public SLASH_SIGN(i: number): antlr.TerminalNode | null;
    public SLASH_SIGN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.SLASH_SIGN);
    	} else {
    		return this.getToken(FlinkSqlParser.SLASH_SIGN, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dtFilePath;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterDtFilePath) {
             listener.enterDtFilePath(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitDtFilePath) {
             listener.exitDtFilePath(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDtFilePath) {
            return visitor.visitDtFilePath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simpleCreateTable(): SimpleCreateTableContext | null {
        return this.getRuleContext(0, SimpleCreateTableContext);
    }
    public createTableAsSelect(): CreateTableAsSelectContext | null {
        return this.getRuleContext(0, CreateTableAsSelectContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_createTable;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterCreateTable) {
             listener.enterCreateTable(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitCreateTable) {
             listener.exitCreateTable(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCreateTable) {
            return visitor.visitCreateTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SimpleCreateTableContext extends antlr.ParserRuleContext {
    public _comment?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0)!;
    }
    public tablePathCreate(): TablePathCreateContext {
        return this.getRuleContext(0, TablePathCreateContext)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public columnOptionDefinition(): ColumnOptionDefinitionContext[];
    public columnOptionDefinition(i: number): ColumnOptionDefinitionContext | null;
    public columnOptionDefinition(i?: number): ColumnOptionDefinitionContext[] | ColumnOptionDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnOptionDefinitionContext);
        }

        return this.getRuleContext(i, ColumnOptionDefinitionContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public withOption(): WithOptionContext {
        return this.getRuleContext(0, WithOptionContext)!;
    }
    public KW_TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    public ifNotExists(): IfNotExistsContext | null {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public watermarkDefinition(): WatermarkDefinitionContext | null {
        return this.getRuleContext(0, WatermarkDefinitionContext);
    }
    public tableConstraint(): TableConstraintContext | null {
        return this.getRuleContext(0, TableConstraintContext);
    }
    public selfDefinitionClause(): SelfDefinitionClauseContext | null {
        return this.getRuleContext(0, SelfDefinitionClauseContext);
    }
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_COMMENT, 0);
    }
    public partitionDefinition(): PartitionDefinitionContext | null {
        return this.getRuleContext(0, PartitionDefinitionContext);
    }
    public likeDefinition(): LikeDefinitionContext | null {
        return this.getRuleContext(0, LikeDefinitionContext);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_simpleCreateTable;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterSimpleCreateTable) {
             listener.enterSimpleCreateTable(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitSimpleCreateTable) {
             listener.exitSimpleCreateTable(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSimpleCreateTable) {
            return visitor.visitSimpleCreateTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateTableAsSelectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0)!;
    }
    public tablePathCreate(): TablePathCreateContext {
        return this.getRuleContext(0, TablePathCreateContext)!;
    }
    public withOption(): WithOptionContext {
        return this.getRuleContext(0, WithOptionContext)!;
    }
    public ifNotExists(): IfNotExistsContext | null {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public queryStatement(): QueryStatementContext | null {
        return this.getRuleContext(0, QueryStatementContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_createTableAsSelect;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterCreateTableAsSelect) {
             listener.enterCreateTableAsSelect(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitCreateTableAsSelect) {
             listener.exitCreateTableAsSelect(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCreateTableAsSelect) {
            return visitor.visitCreateTableAsSelect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnOptionDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public physicalColumnDefinition(): PhysicalColumnDefinitionContext | null {
        return this.getRuleContext(0, PhysicalColumnDefinitionContext);
    }
    public metadataColumnDefinition(): MetadataColumnDefinitionContext | null {
        return this.getRuleContext(0, MetadataColumnDefinitionContext);
    }
    public computedColumnDefinition(): ComputedColumnDefinitionContext | null {
        return this.getRuleContext(0, ComputedColumnDefinitionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_columnOptionDefinition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterColumnOptionDefinition) {
             listener.enterColumnOptionDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitColumnOptionDefinition) {
             listener.exitColumnOptionDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitColumnOptionDefinition) {
            return visitor.visitColumnOptionDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PhysicalColumnDefinitionContext extends antlr.ParserRuleContext {
    public _comment?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnNameCreate(): ColumnNameCreateContext {
        return this.getRuleContext(0, ColumnNameCreateContext)!;
    }
    public columnType(): ColumnTypeContext {
        return this.getRuleContext(0, ColumnTypeContext)!;
    }
    public columnConstraint(): ColumnConstraintContext | null {
        return this.getRuleContext(0, ColumnConstraintContext);
    }
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_COMMENT, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_physicalColumnDefinition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterPhysicalColumnDefinition) {
             listener.enterPhysicalColumnDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitPhysicalColumnDefinition) {
             listener.exitPhysicalColumnDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitPhysicalColumnDefinition) {
            return visitor.visitPhysicalColumnDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnNameCreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext | null {
        return this.getRuleContext(0, UidContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_columnNameCreate;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterColumnNameCreate) {
             listener.enterColumnNameCreate(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitColumnNameCreate) {
             listener.exitColumnNameCreate(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitColumnNameCreate) {
            return visitor.visitColumnNameCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext | null {
        return this.getRuleContext(0, UidContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_columnName;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterColumnName) {
             listener.enterColumnName(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitColumnName) {
             listener.exitColumnName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitColumnName) {
            return visitor.visitColumnName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnNamePathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_columnNamePath;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterColumnNamePath) {
             listener.enterColumnNamePath(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitColumnNamePath) {
             listener.exitColumnNamePath(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitColumnNamePath) {
            return visitor.visitColumnNamePath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnNameListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public columnName(): ColumnNameContext[];
    public columnName(i: number): ColumnNameContext | null;
    public columnName(i?: number): ColumnNameContext[] | ColumnNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnNameContext);
        }

        return this.getRuleContext(i, ColumnNameContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_columnNameList;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterColumnNameList) {
             listener.enterColumnNameList(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitColumnNameList) {
             listener.exitColumnNameList(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitColumnNameList) {
            return visitor.visitColumnNameList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnTypeContext extends antlr.ParserRuleContext {
    public _colType?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DATE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DATE, 0);
    }
    public KW_BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_BOOLEAN, 0);
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NULL, 0);
    }
    public KW_CHAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CHAR, 0);
    }
    public KW_VARCHAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_VARCHAR, 0);
    }
    public KW_STRING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_STRING, 0);
    }
    public KW_BINARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_BINARY, 0);
    }
    public KW_VARBINARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_VARBINARY, 0);
    }
    public KW_BYTES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_BYTES, 0);
    }
    public KW_TINYINT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TINYINT, 0);
    }
    public KW_SMALLINT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SMALLINT, 0);
    }
    public KW_INT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_INT, 0);
    }
    public KW_INTEGER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_INTEGER, 0);
    }
    public KW_BIGINT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_BIGINT, 0);
    }
    public KW_TIME(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TIME, 0);
    }
    public KW_TIMESTAMP_LTZ(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TIMESTAMP_LTZ, 0);
    }
    public KW_DATETIME(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DATETIME, 0);
    }
    public lengthOneDimension(): LengthOneDimensionContext | null {
        return this.getRuleContext(0, LengthOneDimensionContext);
    }
    public KW_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TIMESTAMP, 0);
    }
    public KW_ZONE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ZONE, 0);
    }
    public KW_WITHOUT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_WITHOUT, 0);
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_WITH, 0);
    }
    public KW_LOCAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LOCAL, 0);
    }
    public KW_DECIMAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DECIMAL, 0);
    }
    public KW_DEC(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DEC, 0);
    }
    public KW_NUMERIC(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NUMERIC, 0);
    }
    public KW_FLOAT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FLOAT, 0);
    }
    public KW_DOUBLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DOUBLE, 0);
    }
    public lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext | null {
        return this.getRuleContext(0, LengthTwoOptionalDimensionContext);
    }
    public KW_ARRAY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ARRAY, 0);
    }
    public KW_MULTISET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MULTISET, 0);
    }
    public lengthOneTypeDimension(): LengthOneTypeDimensionContext | null {
        return this.getRuleContext(0, LengthOneTypeDimensionContext);
    }
    public KW_MAP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MAP, 0);
    }
    public mapTypeDimension(): MapTypeDimensionContext | null {
        return this.getRuleContext(0, MapTypeDimensionContext);
    }
    public KW_ROW(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ROW, 0);
    }
    public rowTypeDimension(): RowTypeDimensionContext | null {
        return this.getRuleContext(0, RowTypeDimensionContext);
    }
    public KW_RAW(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_RAW, 0);
    }
    public lengthTwoStringDimension(): LengthTwoStringDimensionContext | null {
        return this.getRuleContext(0, LengthTwoStringDimensionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_columnType;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterColumnType) {
             listener.enterColumnType(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitColumnType) {
             listener.exitColumnType(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitColumnType) {
            return visitor.visitColumnType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LengthOneDimensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public decimalLiteral(): DecimalLiteralContext {
        return this.getRuleContext(0, DecimalLiteralContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_lengthOneDimension;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterLengthOneDimension) {
             listener.enterLengthOneDimension(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitLengthOneDimension) {
             listener.exitLengthOneDimension(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLengthOneDimension) {
            return visitor.visitLengthOneDimension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LengthTwoOptionalDimensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public decimalLiteral(): DecimalLiteralContext[];
    public decimalLiteral(i: number): DecimalLiteralContext | null;
    public decimalLiteral(i?: number): DecimalLiteralContext[] | DecimalLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DecimalLiteralContext);
        }

        return this.getRuleContext(i, DecimalLiteralContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_lengthTwoOptionalDimension;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterLengthTwoOptionalDimension) {
             listener.enterLengthTwoOptionalDimension(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitLengthTwoOptionalDimension) {
             listener.exitLengthTwoOptionalDimension(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLengthTwoOptionalDimension) {
            return visitor.visitLengthTwoOptionalDimension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LengthTwoStringDimensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public stringLiteral(): StringLiteralContext[];
    public stringLiteral(i: number): StringLiteralContext | null;
    public stringLiteral(i?: number): StringLiteralContext[] | StringLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringLiteralContext);
        }

        return this.getRuleContext(i, StringLiteralContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_lengthTwoStringDimension;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterLengthTwoStringDimension) {
             listener.enterLengthTwoStringDimension(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitLengthTwoStringDimension) {
             listener.exitLengthTwoStringDimension(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLengthTwoStringDimension) {
            return visitor.visitLengthTwoStringDimension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LengthOneTypeDimensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LESS_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0)!;
    }
    public columnType(): ColumnTypeContext {
        return this.getRuleContext(0, ColumnTypeContext)!;
    }
    public GREATER_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_lengthOneTypeDimension;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterLengthOneTypeDimension) {
             listener.enterLengthOneTypeDimension(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitLengthOneTypeDimension) {
             listener.exitLengthOneTypeDimension(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLengthOneTypeDimension) {
            return visitor.visitLengthOneTypeDimension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MapTypeDimensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LESS_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0)!;
    }
    public columnType(): ColumnTypeContext[];
    public columnType(i: number): ColumnTypeContext | null;
    public columnType(i?: number): ColumnTypeContext[] | ColumnTypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnTypeContext);
        }

        return this.getRuleContext(i, ColumnTypeContext);
    }
    public GREATER_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0)!;
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_mapTypeDimension;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterMapTypeDimension) {
             listener.enterMapTypeDimension(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitMapTypeDimension) {
             listener.exitMapTypeDimension(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitMapTypeDimension) {
            return visitor.visitMapTypeDimension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RowTypeDimensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LESS_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0);
    }
    public columnName(): ColumnNameContext[];
    public columnName(i: number): ColumnNameContext | null;
    public columnName(i?: number): ColumnNameContext[] | ColumnNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnNameContext);
        }

        return this.getRuleContext(i, ColumnNameContext);
    }
    public columnType(): ColumnTypeContext[];
    public columnType(i: number): ColumnTypeContext | null;
    public columnType(i?: number): ColumnTypeContext[] | ColumnTypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnTypeContext);
        }

        return this.getRuleContext(i, ColumnTypeContext);
    }
    public GREATER_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public LR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_rowTypeDimension;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterRowTypeDimension) {
             listener.enterRowTypeDimension(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitRowTypeDimension) {
             listener.exitRowTypeDimension(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRowTypeDimension) {
            return visitor.visitRowTypeDimension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnConstraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PRIMARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PRIMARY, 0);
    }
    public KW_KEY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_KEY, 0);
    }
    public KW_CONSTRAINT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0);
    }
    public constraintName(): ConstraintNameContext | null {
        return this.getRuleContext(0, ConstraintNameContext);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    public KW_ENFORCED(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ENFORCED, 0);
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NULL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_columnConstraint;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterColumnConstraint) {
             listener.enterColumnConstraint(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitColumnConstraint) {
             listener.exitColumnConstraint(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitColumnConstraint) {
            return visitor.visitColumnConstraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MetadataColumnDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnNameCreate(): ColumnNameCreateContext {
        return this.getRuleContext(0, ColumnNameCreateContext)!;
    }
    public columnType(): ColumnTypeContext {
        return this.getRuleContext(0, ColumnTypeContext)!;
    }
    public KW_METADATA(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_METADATA, 0)!;
    }
    public KW_FROM(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FROM, 0);
    }
    public metadataKey(): MetadataKeyContext | null {
        return this.getRuleContext(0, MetadataKeyContext);
    }
    public KW_VIRTUAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_VIRTUAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_metadataColumnDefinition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterMetadataColumnDefinition) {
             listener.enterMetadataColumnDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitMetadataColumnDefinition) {
             listener.exitMetadataColumnDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitMetadataColumnDefinition) {
            return visitor.visitMetadataColumnDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MetadataKeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_metadataKey;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterMetadataKey) {
             listener.enterMetadataKey(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitMetadataKey) {
             listener.exitMetadataKey(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitMetadataKey) {
            return visitor.visitMetadataKey(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComputedColumnDefinitionContext extends antlr.ParserRuleContext {
    public _comment?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnNameCreate(): ColumnNameCreateContext {
        return this.getRuleContext(0, ColumnNameCreateContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0)!;
    }
    public computedColumnExpression(): ComputedColumnExpressionContext {
        return this.getRuleContext(0, ComputedColumnExpressionContext)!;
    }
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_COMMENT, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_computedColumnDefinition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterComputedColumnDefinition) {
             listener.enterComputedColumnDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitComputedColumnDefinition) {
             listener.exitComputedColumnDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitComputedColumnDefinition) {
            return visitor.visitComputedColumnDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComputedColumnExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_computedColumnExpression;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterComputedColumnExpression) {
             listener.enterComputedColumnExpression(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitComputedColumnExpression) {
             listener.exitComputedColumnExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitComputedColumnExpression) {
            return visitor.visitComputedColumnExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WatermarkDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WATERMARK(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WATERMARK, 0)!;
    }
    public KW_FOR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FOR, 0)!;
    }
    public columnName(): ColumnNameContext {
        return this.getRuleContext(0, ColumnNameContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_watermarkDefinition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterWatermarkDefinition) {
             listener.enterWatermarkDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitWatermarkDefinition) {
             listener.exitWatermarkDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWatermarkDefinition) {
            return visitor.visitWatermarkDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableConstraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PRIMARY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PRIMARY, 0)!;
    }
    public KW_KEY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_KEY, 0)!;
    }
    public columnNameList(): ColumnNameListContext {
        return this.getRuleContext(0, ColumnNameListContext)!;
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NOT, 0)!;
    }
    public KW_ENFORCED(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ENFORCED, 0)!;
    }
    public KW_CONSTRAINT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0);
    }
    public constraintName(): ConstraintNameContext | null {
        return this.getRuleContext(0, ConstraintNameContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tableConstraint;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterTableConstraint) {
             listener.enterTableConstraint(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitTableConstraint) {
             listener.exitTableConstraint(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTableConstraint) {
            return visitor.visitTableConstraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstraintNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_constraintName;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterConstraintName) {
             listener.enterConstraintName(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitConstraintName) {
             listener.exitConstraintName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitConstraintName) {
            return visitor.visitConstraintName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelfDefinitionClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PERIOD(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PERIOD, 0)!;
    }
    public KW_FOR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FOR, 0)!;
    }
    public KW_SYSTEM_TIME(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SYSTEM_TIME, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_selfDefinitionClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterSelfDefinitionClause) {
             listener.enterSelfDefinitionClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitSelfDefinitionClause) {
             listener.exitSelfDefinitionClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSelfDefinitionClause) {
            return visitor.visitSelfDefinitionClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PartitionDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PARTITIONED(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PARTITIONED, 0)!;
    }
    public KW_BY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BY, 0)!;
    }
    public transformList(): TransformListContext {
        return this.getRuleContext(0, TransformListContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_partitionDefinition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterPartitionDefinition) {
             listener.enterPartitionDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitPartitionDefinition) {
             listener.exitPartitionDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitPartitionDefinition) {
            return visitor.visitPartitionDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TransformListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public transform(): TransformContext[];
    public transform(i: number): TransformContext | null;
    public transform(i?: number): TransformContext[] | TransformContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TransformContext);
        }

        return this.getRuleContext(i, TransformContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_transformList;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterTransformList) {
             listener.enterTransformList(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitTransformList) {
             listener.exitTransformList(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTransformList) {
            return visitor.visitTransformList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TransformContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_transform;
    }
    public override copyFrom(ctx: TransformContext): void {
        super.copyFrom(ctx);
    }
}
export class IdentityTransformContext extends TransformContext {
    public constructor(ctx: TransformContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnName(): ColumnNameContext {
        return this.getRuleContext(0, ColumnNameContext)!;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterIdentityTransform) {
             listener.enterIdentityTransform(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitIdentityTransform) {
             listener.exitIdentityTransform(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitIdentityTransform) {
            return visitor.visitIdentityTransform(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ApplyTransformContext extends TransformContext {
    public constructor(ctx: TransformContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public transformArgument(): TransformArgumentContext[];
    public transformArgument(i: number): TransformArgumentContext | null;
    public transformArgument(i?: number): TransformArgumentContext[] | TransformArgumentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TransformArgumentContext);
        }

        return this.getRuleContext(i, TransformArgumentContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterApplyTransform) {
             listener.enterApplyTransform(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitApplyTransform) {
             listener.exitApplyTransform(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitApplyTransform) {
            return visitor.visitApplyTransform(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TransformArgumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public constant(): ConstantContext | null {
        return this.getRuleContext(0, ConstantContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_transformArgument;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterTransformArgument) {
             listener.enterTransformArgument(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitTransformArgument) {
             listener.exitTransformArgument(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTransformArgument) {
            return visitor.visitTransformArgument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LikeDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LIKE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LIKE, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public LR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public likeOption(): LikeOptionContext[];
    public likeOption(i: number): LikeOptionContext | null;
    public likeOption(i?: number): LikeOptionContext[] | LikeOptionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LikeOptionContext);
        }

        return this.getRuleContext(i, LikeOptionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_likeDefinition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterLikeDefinition) {
             listener.enterLikeDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitLikeDefinition) {
             listener.exitLikeDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLikeDefinition) {
            return visitor.visitLikeDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LikeOptionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_INCLUDING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_INCLUDING, 0);
    }
    public KW_EXCLUDING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_EXCLUDING, 0);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    public KW_CONSTRAINTS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CONSTRAINTS, 0);
    }
    public KW_PARTITIONS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PARTITIONS, 0);
    }
    public KW_OVERWRITING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_OVERWRITING, 0);
    }
    public KW_GENERATED(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_GENERATED, 0);
    }
    public KW_OPTIONS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_OPTIONS, 0);
    }
    public KW_WATERMARKS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_WATERMARKS, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_likeOption;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterLikeOption) {
             listener.enterLikeOption(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitLikeOption) {
             listener.exitLikeOption(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLikeOption) {
            return visitor.visitLikeOption(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateCatalogContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0)!;
    }
    public KW_CATALOG(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CATALOG, 0)!;
    }
    public catalogPathCreate(): CatalogPathCreateContext {
        return this.getRuleContext(0, CatalogPathCreateContext)!;
    }
    public withOption(): WithOptionContext {
        return this.getRuleContext(0, WithOptionContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_createCatalog;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterCreateCatalog) {
             listener.enterCreateCatalog(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitCreateCatalog) {
             listener.exitCreateCatalog(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCreateCatalog) {
            return visitor.visitCreateCatalog(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateDatabaseContext extends antlr.ParserRuleContext {
    public _comment?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0)!;
    }
    public KW_DATABASE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DATABASE, 0)!;
    }
    public databasePathCreate(): DatabasePathCreateContext {
        return this.getRuleContext(0, DatabasePathCreateContext)!;
    }
    public withOption(): WithOptionContext {
        return this.getRuleContext(0, WithOptionContext)!;
    }
    public ifNotExists(): IfNotExistsContext | null {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_COMMENT, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_createDatabase;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterCreateDatabase) {
             listener.enterCreateDatabase(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitCreateDatabase) {
             listener.exitCreateDatabase(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCreateDatabase) {
            return visitor.visitCreateDatabase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateViewContext extends antlr.ParserRuleContext {
    public _comment?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VIEW, 0)!;
    }
    public viewPathCreate(): ViewPathCreateContext {
        return this.getRuleContext(0, ViewPathCreateContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0)!;
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public KW_TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    public ifNotExists(): IfNotExistsContext | null {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    public columnNameList(): ColumnNameListContext | null {
        return this.getRuleContext(0, ColumnNameListContext);
    }
    public KW_COMMENT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_COMMENT, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_createView;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterCreateView) {
             listener.enterCreateView(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitCreateView) {
             listener.exitCreateView(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCreateView) {
            return visitor.visitCreateView(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0)!;
    }
    public KW_FUNCTION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FUNCTION, 0)!;
    }
    public functionNameCreate(): FunctionNameCreateContext {
        return this.getRuleContext(0, FunctionNameCreateContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    public KW_SYSTEM(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SYSTEM, 0);
    }
    public ifNotExists(): IfNotExistsContext | null {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    public KW_LANGUAGE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LANGUAGE, 0);
    }
    public usingClause(): UsingClauseContext | null {
        return this.getRuleContext(0, UsingClauseContext);
    }
    public KW_JAVA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_JAVA, 0);
    }
    public KW_SCALA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SCALA, 0);
    }
    public KW_PYTHON(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PYTHON, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_createFunction;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterCreateFunction) {
             listener.enterCreateFunction(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitCreateFunction) {
             listener.exitCreateFunction(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCreateFunction) {
            return visitor.visitCreateFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UsingClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_USING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_USING, 0)!;
    }
    public KW_JAR(): antlr.TerminalNode[];
    public KW_JAR(i: number): antlr.TerminalNode | null;
    public KW_JAR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.KW_JAR);
    	} else {
    		return this.getToken(FlinkSqlParser.KW_JAR, i);
    	}
    }
    public jarFileName(): JarFileNameContext[];
    public jarFileName(i: number): JarFileNameContext | null;
    public jarFileName(i?: number): JarFileNameContext[] | JarFileNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(JarFileNameContext);
        }

        return this.getRuleContext(i, JarFileNameContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_usingClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterUsingClause) {
             listener.enterUsingClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitUsingClause) {
             listener.exitUsingClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitUsingClause) {
            return visitor.visitUsingClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JarFileNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_jarFileName;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterJarFileName) {
             listener.enterJarFileName(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitJarFileName) {
             listener.exitJarFileName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitJarFileName) {
            return visitor.visitJarFileName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ALTER, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public renameDefinition(): RenameDefinitionContext | null {
        return this.getRuleContext(0, RenameDefinitionContext);
    }
    public setKeyValueDefinition(): SetKeyValueDefinitionContext | null {
        return this.getRuleContext(0, SetKeyValueDefinitionContext);
    }
    public addConstraint(): AddConstraintContext | null {
        return this.getRuleContext(0, AddConstraintContext);
    }
    public dropConstraint(): DropConstraintContext | null {
        return this.getRuleContext(0, DropConstraintContext);
    }
    public addUnique(): AddUniqueContext | null {
        return this.getRuleContext(0, AddUniqueContext);
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_alterTable;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterAlterTable) {
             listener.enterAlterTable(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitAlterTable) {
             listener.exitAlterTable(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTable) {
            return visitor.visitAlterTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RenameDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_RENAME(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RENAME, 0)!;
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TO, 0)!;
    }
    public uid(): UidContext[];
    public uid(i: number): UidContext | null;
    public uid(i?: number): UidContext[] | UidContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UidContext);
        }

        return this.getRuleContext(i, UidContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_renameDefinition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterRenameDefinition) {
             listener.enterRenameDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitRenameDefinition) {
             listener.exitRenameDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRenameDefinition) {
            return visitor.visitRenameDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SetKeyValueDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SET, 0)!;
    }
    public tablePropertyList(): TablePropertyListContext {
        return this.getRuleContext(0, TablePropertyListContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_setKeyValueDefinition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterSetKeyValueDefinition) {
             listener.enterSetKeyValueDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitSetKeyValueDefinition) {
             listener.exitSetKeyValueDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSetKeyValueDefinition) {
            return visitor.visitSetKeyValueDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AddConstraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ADD(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ADD, 0)!;
    }
    public KW_CONSTRAINT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0)!;
    }
    public constraintName(): ConstraintNameContext {
        return this.getRuleContext(0, ConstraintNameContext)!;
    }
    public KW_PRIMARY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PRIMARY, 0)!;
    }
    public KW_KEY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_KEY, 0)!;
    }
    public columnNameList(): ColumnNameListContext {
        return this.getRuleContext(0, ColumnNameListContext)!;
    }
    public notForced(): NotForcedContext | null {
        return this.getRuleContext(0, NotForcedContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_addConstraint;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterAddConstraint) {
             listener.enterAddConstraint(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitAddConstraint) {
             listener.exitAddConstraint(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAddConstraint) {
            return visitor.visitAddConstraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropConstraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DROP, 0)!;
    }
    public KW_CONSTRAINT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0)!;
    }
    public constraintName(): ConstraintNameContext {
        return this.getRuleContext(0, ConstraintNameContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dropConstraint;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterDropConstraint) {
             listener.enterDropConstraint(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitDropConstraint) {
             listener.exitDropConstraint(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDropConstraint) {
            return visitor.visitDropConstraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AddUniqueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ADD(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ADD, 0)!;
    }
    public KW_UNIQUE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UNIQUE, 0)!;
    }
    public columnNameList(): ColumnNameListContext {
        return this.getRuleContext(0, ColumnNameListContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_addUnique;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterAddUnique) {
             listener.enterAddUnique(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitAddUnique) {
             listener.exitAddUnique(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAddUnique) {
            return visitor.visitAddUnique(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NotForcedContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NOT, 0)!;
    }
    public KW_ENFORCED(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ENFORCED, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_notForced;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterNotForced) {
             listener.enterNotForced(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitNotForced) {
             listener.exitNotForced(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitNotForced) {
            return visitor.visitNotForced(this);
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
        return this.getToken(FlinkSqlParser.KW_ALTER, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VIEW, 0)!;
    }
    public viewPath(): ViewPathContext {
        return this.getRuleContext(0, ViewPathContext)!;
    }
    public renameDefinition(): RenameDefinitionContext | null {
        return this.getRuleContext(0, RenameDefinitionContext);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public queryStatement(): QueryStatementContext | null {
        return this.getRuleContext(0, QueryStatementContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_alterView;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterAlterView) {
             listener.enterAlterView(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitAlterView) {
             listener.exitAlterView(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAlterView) {
            return visitor.visitAlterView(this);
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
        return this.getToken(FlinkSqlParser.KW_ALTER, 0)!;
    }
    public KW_DATABASE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DATABASE, 0)!;
    }
    public databasePath(): DatabasePathContext {
        return this.getRuleContext(0, DatabasePathContext)!;
    }
    public setKeyValueDefinition(): SetKeyValueDefinitionContext {
        return this.getRuleContext(0, SetKeyValueDefinitionContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_alterDatabase;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterAlterDatabase) {
             listener.enterAlterDatabase(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitAlterDatabase) {
             listener.exitAlterDatabase(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAlterDatabase) {
            return visitor.visitAlterDatabase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ALTER, 0)!;
    }
    public KW_FUNCTION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FUNCTION, 0)!;
    }
    public functionName(): FunctionNameContext {
        return this.getRuleContext(0, FunctionNameContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    public KW_SYSTEM(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SYSTEM, 0);
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public KW_LANGUAGE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LANGUAGE, 0);
    }
    public KW_JAVA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_JAVA, 0);
    }
    public KW_SCALA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SCALA, 0);
    }
    public KW_PYTHON(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PYTHON, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_alterFunction;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterAlterFunction) {
             listener.enterAlterFunction(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitAlterFunction) {
             listener.exitAlterFunction(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAlterFunction) {
            return visitor.visitAlterFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropCatalogContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DROP, 0)!;
    }
    public KW_CATALOG(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CATALOG, 0)!;
    }
    public catalogPath(): CatalogPathContext {
        return this.getRuleContext(0, CatalogPathContext)!;
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dropCatalog;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterDropCatalog) {
             listener.enterDropCatalog(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitDropCatalog) {
             listener.exitDropCatalog(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDropCatalog) {
            return visitor.visitDropCatalog(this);
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
        return this.getToken(FlinkSqlParser.KW_DROP, 0)!;
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public KW_TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dropTable;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterDropTable) {
             listener.enterDropTable(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitDropTable) {
             listener.exitDropTable(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDropTable) {
            return visitor.visitDropTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropDatabaseContext extends antlr.ParserRuleContext {
    public _dropType?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DROP, 0)!;
    }
    public KW_DATABASE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DATABASE, 0)!;
    }
    public databasePath(): DatabasePathContext {
        return this.getRuleContext(0, DatabasePathContext)!;
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public KW_RESTRICT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_RESTRICT, 0);
    }
    public KW_CASCADE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CASCADE, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dropDatabase;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterDropDatabase) {
             listener.enterDropDatabase(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitDropDatabase) {
             listener.exitDropDatabase(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDropDatabase) {
            return visitor.visitDropDatabase(this);
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
        return this.getToken(FlinkSqlParser.KW_DROP, 0)!;
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VIEW, 0)!;
    }
    public viewPath(): ViewPathContext {
        return this.getRuleContext(0, ViewPathContext)!;
    }
    public KW_TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dropView;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterDropView) {
             listener.enterDropView(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitDropView) {
             listener.exitDropView(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDropView) {
            return visitor.visitDropView(this);
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
        return this.getToken(FlinkSqlParser.KW_DROP, 0)!;
    }
    public KW_FUNCTION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FUNCTION, 0)!;
    }
    public functionName(): FunctionNameContext {
        return this.getRuleContext(0, FunctionNameContext)!;
    }
    public KW_TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    public KW_SYSTEM(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SYSTEM, 0);
    }
    public ifExists(): IfExistsContext | null {
        return this.getRuleContext(0, IfExistsContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dropFunction;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterDropFunction) {
             listener.enterDropFunction(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitDropFunction) {
             listener.exitDropFunction(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDropFunction) {
            return visitor.visitDropFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InsertStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public insertSimpleStatement(): InsertSimpleStatementContext | null {
        return this.getRuleContext(0, InsertSimpleStatementContext);
    }
    public KW_EXECUTE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_EXECUTE, 0);
    }
    public insertMulStatementCompatibility(): InsertMulStatementCompatibilityContext | null {
        return this.getRuleContext(0, InsertMulStatementCompatibilityContext);
    }
    public insertMulStatement(): InsertMulStatementContext | null {
        return this.getRuleContext(0, InsertMulStatementContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_insertStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterInsertStatement) {
             listener.enterInsertStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitInsertStatement) {
             listener.exitInsertStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitInsertStatement) {
            return visitor.visitInsertStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InsertSimpleStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_INSERT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INSERT, 0)!;
    }
    public tablePath(): TablePathContext {
        return this.getRuleContext(0, TablePathContext)!;
    }
    public KW_INTO(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_INTO, 0);
    }
    public KW_OVERWRITE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_OVERWRITE, 0);
    }
    public queryStatement(): QueryStatementContext | null {
        return this.getRuleContext(0, QueryStatementContext);
    }
    public valuesDefinition(): ValuesDefinitionContext | null {
        return this.getRuleContext(0, ValuesDefinitionContext);
    }
    public insertPartitionDefinition(): InsertPartitionDefinitionContext | null {
        return this.getRuleContext(0, InsertPartitionDefinitionContext);
    }
    public columnNameList(): ColumnNameListContext | null {
        return this.getRuleContext(0, ColumnNameListContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_insertSimpleStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterInsertSimpleStatement) {
             listener.enterInsertSimpleStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitInsertSimpleStatement) {
             listener.exitInsertSimpleStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitInsertSimpleStatement) {
            return visitor.visitInsertSimpleStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InsertPartitionDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PARTITION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PARTITION, 0)!;
    }
    public tablePropertyList(): TablePropertyListContext {
        return this.getRuleContext(0, TablePropertyListContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_insertPartitionDefinition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterInsertPartitionDefinition) {
             listener.enterInsertPartitionDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitInsertPartitionDefinition) {
             listener.exitInsertPartitionDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitInsertPartitionDefinition) {
            return visitor.visitInsertPartitionDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValuesDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_VALUES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VALUES, 0)!;
    }
    public valuesRowDefinition(): ValuesRowDefinitionContext[];
    public valuesRowDefinition(i: number): ValuesRowDefinitionContext | null;
    public valuesRowDefinition(i?: number): ValuesRowDefinitionContext[] | ValuesRowDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValuesRowDefinitionContext);
        }

        return this.getRuleContext(i, ValuesRowDefinitionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_valuesDefinition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterValuesDefinition) {
             listener.enterValuesDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitValuesDefinition) {
             listener.exitValuesDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitValuesDefinition) {
            return visitor.visitValuesDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValuesRowDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public valueDefinition(): ValueDefinitionContext[];
    public valueDefinition(i: number): ValueDefinitionContext | null;
    public valueDefinition(i?: number): ValueDefinitionContext[] | ValueDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueDefinitionContext);
        }

        return this.getRuleContext(i, ValueDefinitionContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_valuesRowDefinition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterValuesRowDefinition) {
             listener.enterValuesRowDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitValuesRowDefinition) {
             listener.exitValuesRowDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitValuesRowDefinition) {
            return visitor.visitValuesRowDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValueDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public constant(): ConstantContext | null {
        return this.getRuleContext(0, ConstantContext);
    }
    public functionCallExpression(): FunctionCallExpressionContext | null {
        return this.getRuleContext(0, FunctionCallExpressionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_valueDefinition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterValueDefinition) {
             listener.enterValueDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitValueDefinition) {
             listener.exitValueDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitValueDefinition) {
            return visitor.visitValueDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InsertMulStatementCompatibilityContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_BEGIN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BEGIN, 0)!;
    }
    public KW_STATEMENT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_STATEMENT, 0)!;
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SET, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode[];
    public SEMICOLON(i: number): antlr.TerminalNode | null;
    public SEMICOLON(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.SEMICOLON);
    	} else {
    		return this.getToken(FlinkSqlParser.SEMICOLON, i);
    	}
    }
    public KW_END(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_END, 0)!;
    }
    public insertSimpleStatement(): InsertSimpleStatementContext[];
    public insertSimpleStatement(i: number): InsertSimpleStatementContext | null;
    public insertSimpleStatement(i?: number): InsertSimpleStatementContext[] | InsertSimpleStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InsertSimpleStatementContext);
        }

        return this.getRuleContext(i, InsertSimpleStatementContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_insertMulStatementCompatibility;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterInsertMulStatementCompatibility) {
             listener.enterInsertMulStatementCompatibility(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitInsertMulStatementCompatibility) {
             listener.exitInsertMulStatementCompatibility(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitInsertMulStatementCompatibility) {
            return visitor.visitInsertMulStatementCompatibility(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InsertMulStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_STATEMENT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_STATEMENT, 0)!;
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SET, 0)!;
    }
    public KW_BEGIN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BEGIN, 0)!;
    }
    public KW_END(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_END, 0)!;
    }
    public insertSimpleStatement(): InsertSimpleStatementContext[];
    public insertSimpleStatement(i: number): InsertSimpleStatementContext | null;
    public insertSimpleStatement(i?: number): InsertSimpleStatementContext[] | InsertSimpleStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InsertSimpleStatementContext);
        }

        return this.getRuleContext(i, InsertSimpleStatementContext);
    }
    public SEMICOLON(): antlr.TerminalNode[];
    public SEMICOLON(i: number): antlr.TerminalNode | null;
    public SEMICOLON(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.SEMICOLON);
    	} else {
    		return this.getToken(FlinkSqlParser.SEMICOLON, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_insertMulStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterInsertMulStatement) {
             listener.enterInsertMulStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitInsertMulStatement) {
             listener.exitInsertMulStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitInsertMulStatement) {
            return visitor.visitInsertMulStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryStatementContext extends antlr.ParserRuleContext {
    public _left?: QueryStatementContext;
    public _operator?: Token | null;
    public _right?: QueryStatementContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public valuesClause(): ValuesClauseContext | null {
        return this.getRuleContext(0, ValuesClauseContext);
    }
    public withClause(): WithClauseContext | null {
        return this.getRuleContext(0, WithClauseContext);
    }
    public queryStatement(): QueryStatementContext[];
    public queryStatement(i: number): QueryStatementContext | null;
    public queryStatement(i?: number): QueryStatementContext[] | QueryStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QueryStatementContext);
        }

        return this.getRuleContext(i, QueryStatementContext);
    }
    public LR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public selectClause(): SelectClauseContext | null {
        return this.getRuleContext(0, SelectClauseContext);
    }
    public orderByClause(): OrderByClauseContext | null {
        return this.getRuleContext(0, OrderByClauseContext);
    }
    public limitClause(): LimitClauseContext | null {
        return this.getRuleContext(0, LimitClauseContext);
    }
    public selectStatement(): SelectStatementContext | null {
        return this.getRuleContext(0, SelectStatementContext);
    }
    public KW_INTERSECT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_INTERSECT, 0);
    }
    public KW_UNION(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_UNION, 0);
    }
    public KW_EXCEPT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_EXCEPT, 0);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_queryStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterQueryStatement) {
             listener.enterQueryStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitQueryStatement) {
             listener.exitQueryStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitQueryStatement) {
            return visitor.visitQueryStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValuesClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_VALUES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VALUES, 0)!;
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
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_valuesClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterValuesClause) {
             listener.enterValuesClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitValuesClause) {
             listener.exitValuesClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitValuesClause) {
            return visitor.visitValuesClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WithClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WITH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WITH, 0)!;
    }
    public withItem(): WithItemContext[];
    public withItem(i: number): WithItemContext | null;
    public withItem(i?: number): WithItemContext[] | WithItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WithItemContext);
        }

        return this.getRuleContext(i, WithItemContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_withClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterWithClause) {
             listener.enterWithClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitWithClause) {
             listener.exitWithClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWithClause) {
            return visitor.visitWithClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WithItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public withItemName(): WithItemNameContext {
        return this.getRuleContext(0, WithItemNameContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode[];
    public LR_BRACKET(i: number): antlr.TerminalNode | null;
    public LR_BRACKET(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.LR_BRACKET);
    	} else {
    		return this.getToken(FlinkSqlParser.LR_BRACKET, i);
    	}
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode[];
    public RR_BRACKET(i: number): antlr.TerminalNode | null;
    public RR_BRACKET(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.RR_BRACKET);
    	} else {
    		return this.getToken(FlinkSqlParser.RR_BRACKET, i);
    	}
    }
    public columnName(): ColumnNameContext[];
    public columnName(i: number): ColumnNameContext | null;
    public columnName(i?: number): ColumnNameContext[] | ColumnNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnNameContext);
        }

        return this.getRuleContext(i, ColumnNameContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_withItem;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterWithItem) {
             listener.enterWithItem(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitWithItem) {
             listener.exitWithItem(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWithItem) {
            return visitor.visitWithItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WithItemNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_withItemName;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterWithItemName) {
             listener.enterWithItemName(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitWithItemName) {
             listener.exitWithItemName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWithItemName) {
            return visitor.visitWithItemName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public selectClause(): SelectClauseContext {
        return this.getRuleContext(0, SelectClauseContext)!;
    }
    public fromClause(): FromClauseContext | null {
        return this.getRuleContext(0, FromClauseContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public groupByClause(): GroupByClauseContext | null {
        return this.getRuleContext(0, GroupByClauseContext);
    }
    public havingClause(): HavingClauseContext | null {
        return this.getRuleContext(0, HavingClauseContext);
    }
    public windowClause(): WindowClauseContext | null {
        return this.getRuleContext(0, WindowClauseContext);
    }
    public matchRecognizeClause(): MatchRecognizeClauseContext | null {
        return this.getRuleContext(0, MatchRecognizeClauseContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_selectStatement;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterSelectStatement) {
             listener.enterSelectStatement(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitSelectStatement) {
             listener.exitSelectStatement(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSelectStatement) {
            return visitor.visitSelectStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SELECT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SELECT, 0)!;
    }
    public ASTERISK_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
    }
    public projectItemDefinition(): ProjectItemDefinitionContext[];
    public projectItemDefinition(i: number): ProjectItemDefinitionContext | null;
    public projectItemDefinition(i?: number): ProjectItemDefinitionContext[] | ProjectItemDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ProjectItemDefinitionContext);
        }

        return this.getRuleContext(i, ProjectItemDefinitionContext);
    }
    public setQuantifier(): SetQuantifierContext | null {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_selectClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterSelectClause) {
             listener.enterSelectClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitSelectClause) {
             listener.exitSelectClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSelectClause) {
            return visitor.visitSelectClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ProjectItemDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public overWindowItem(): OverWindowItemContext | null {
        return this.getRuleContext(0, OverWindowItemContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public columnName(): ColumnNameContext | null {
        return this.getRuleContext(0, ColumnNameContext);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_projectItemDefinition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterProjectItemDefinition) {
             listener.enterProjectItemDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitProjectItemDefinition) {
             listener.exitProjectItemDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitProjectItemDefinition) {
            return visitor.visitProjectItemDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OverWindowItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public KW_OVER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OVER, 0)!;
    }
    public windowSpec(): WindowSpecContext | null {
        return this.getRuleContext(0, WindowSpecContext);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public errorCapturingIdentifier(): ErrorCapturingIdentifierContext | null {
        return this.getRuleContext(0, ErrorCapturingIdentifierContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_overWindowItem;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterOverWindowItem) {
             listener.enterOverWindowItem(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitOverWindowItem) {
             listener.exitOverWindowItem(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitOverWindowItem) {
            return visitor.visitOverWindowItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FromClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FROM, 0)!;
    }
    public tableExpression(): TableExpressionContext {
        return this.getRuleContext(0, TableExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_fromClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterFromClause) {
             listener.enterFromClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitFromClause) {
             listener.exitFromClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitFromClause) {
            return visitor.visitFromClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tableReference(): TableReferenceContext[];
    public tableReference(i: number): TableReferenceContext | null;
    public tableReference(i?: number): TableReferenceContext[] | TableReferenceContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TableReferenceContext);
        }

        return this.getRuleContext(i, TableReferenceContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public inlineDataValueClause(): InlineDataValueClauseContext | null {
        return this.getRuleContext(0, InlineDataValueClauseContext);
    }
    public windowTVFClause(): WindowTVFClauseContext | null {
        return this.getRuleContext(0, WindowTVFClauseContext);
    }
    public tableExpression(): TableExpressionContext[];
    public tableExpression(i: number): TableExpressionContext | null;
    public tableExpression(i?: number): TableExpressionContext[] | TableExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TableExpressionContext);
        }

        return this.getRuleContext(i, TableExpressionContext);
    }
    public KW_CROSS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CROSS, 0);
    }
    public KW_JOIN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_JOIN, 0);
    }
    public KW_NATURAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NATURAL, 0);
    }
    public KW_OUTER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_OUTER, 0);
    }
    public joinCondition(): JoinConditionContext | null {
        return this.getRuleContext(0, JoinConditionContext);
    }
    public KW_LEFT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LEFT, 0);
    }
    public KW_RIGHT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_RIGHT, 0);
    }
    public KW_FULL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FULL, 0);
    }
    public KW_INNER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_INNER, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tableExpression;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterTableExpression) {
             listener.enterTableExpression(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitTableExpression) {
             listener.exitTableExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTableExpression) {
            return visitor.visitTableExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableReferenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tablePrimary(): TablePrimaryContext {
        return this.getRuleContext(0, TablePrimaryContext)!;
    }
    public tableAlias(): TableAliasContext | null {
        return this.getRuleContext(0, TableAliasContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tableReference;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterTableReference) {
             listener.enterTableReference(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitTableReference) {
             listener.exitTableReference(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTableReference) {
            return visitor.visitTableReference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TablePrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tablePath(): TablePathContext | null {
        return this.getRuleContext(0, TablePathContext);
    }
    public KW_TABLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    public systemTimePeriod(): SystemTimePeriodContext | null {
        return this.getRuleContext(0, SystemTimePeriodContext);
    }
    public viewPath(): ViewPathContext | null {
        return this.getRuleContext(0, ViewPathContext);
    }
    public KW_LATERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LATERAL, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public functionCallExpression(): FunctionCallExpressionContext | null {
        return this.getRuleContext(0, FunctionCallExpressionContext);
    }
    public RR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public queryStatement(): QueryStatementContext | null {
        return this.getRuleContext(0, QueryStatementContext);
    }
    public KW_UNNEST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_UNNEST, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tablePrimary;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterTablePrimary) {
             listener.enterTablePrimary(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitTablePrimary) {
             listener.exitTablePrimary(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTablePrimary) {
            return visitor.visitTablePrimary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SystemTimePeriodContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_FOR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FOR, 0)!;
    }
    public KW_SYSTEM_TIME(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SYSTEM_TIME, 0)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0)!;
    }
    public KW_OF(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OF, 0)!;
    }
    public dateTimeExpression(): DateTimeExpressionContext {
        return this.getRuleContext(0, DateTimeExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_systemTimePeriod;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterSystemTimePeriod) {
             listener.enterSystemTimePeriod(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitSystemTimePeriod) {
             listener.exitSystemTimePeriod(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSystemTimePeriod) {
            return visitor.visitSystemTimePeriod(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DateTimeExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dateTimeExpression;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterDateTimeExpression) {
             listener.enterDateTimeExpression(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitDateTimeExpression) {
             listener.exitDateTimeExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDateTimeExpression) {
            return visitor.visitDateTimeExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InlineDataValueClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public valuesDefinition(): ValuesDefinitionContext {
        return this.getRuleContext(0, ValuesDefinitionContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public tableAlias(): TableAliasContext {
        return this.getRuleContext(0, TableAliasContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_inlineDataValueClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterInlineDataValueClause) {
             listener.enterInlineDataValueClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitInlineDataValueClause) {
             listener.exitInlineDataValueClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitInlineDataValueClause) {
            return visitor.visitInlineDataValueClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowTVFClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public windowTVFExpression(): WindowTVFExpressionContext {
        return this.getRuleContext(0, WindowTVFExpressionContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_windowTVFClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterWindowTVFClause) {
             listener.enterWindowTVFClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitWindowTVFClause) {
             listener.exitWindowTVFClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWindowTVFClause) {
            return visitor.visitWindowTVFClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowTVFExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public windowTVFName(): WindowTVFNameContext {
        return this.getRuleContext(0, WindowTVFNameContext)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public windowTVFParam(): WindowTVFParamContext[];
    public windowTVFParam(i: number): WindowTVFParamContext | null;
    public windowTVFParam(i?: number): WindowTVFParamContext[] | WindowTVFParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WindowTVFParamContext);
        }

        return this.getRuleContext(i, WindowTVFParamContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_windowTVFExpression;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterWindowTVFExpression) {
             listener.enterWindowTVFExpression(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitWindowTVFExpression) {
             listener.exitWindowTVFExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWindowTVFExpression) {
            return visitor.visitWindowTVFExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowTVFNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TUMBLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TUMBLE, 0);
    }
    public KW_HOP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_HOP, 0);
    }
    public KW_CUMULATE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CUMULATE, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_windowTVFName;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterWindowTVFName) {
             listener.enterWindowTVFName(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitWindowTVFName) {
             listener.exitWindowTVFName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWindowTVFName) {
            return visitor.visitWindowTVFName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowTVFParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TABLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    public timeAttrColumn(): TimeAttrColumnContext | null {
        return this.getRuleContext(0, TimeAttrColumnContext);
    }
    public columnDescriptor(): ColumnDescriptorContext | null {
        return this.getRuleContext(0, ColumnDescriptorContext);
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext | null {
        return this.getRuleContext(0, TimeIntervalExpressionContext);
    }
    public KW_DATA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DATA, 0);
    }
    public DOUBLE_RIGHT_ARROW(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.DOUBLE_RIGHT_ARROW, 0);
    }
    public KW_TIMECOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TIMECOL, 0);
    }
    public timeIntervalParamName(): TimeIntervalParamNameContext | null {
        return this.getRuleContext(0, TimeIntervalParamNameContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_windowTVFParam;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterWindowTVFParam) {
             listener.enterWindowTVFParam(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitWindowTVFParam) {
             listener.exitWindowTVFParam(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWindowTVFParam) {
            return visitor.visitWindowTVFParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimeIntervalParamNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DATA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DATA, 0);
    }
    public KW_TIMECOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TIMECOL, 0);
    }
    public KW_SIZE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SIZE, 0);
    }
    public KW_OFFSET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_OFFSET, 0);
    }
    public KW_STEP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_STEP, 0);
    }
    public KW_SLIDE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SLIDE, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_timeIntervalParamName;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterTimeIntervalParamName) {
             listener.enterTimeIntervalParamName(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitTimeIntervalParamName) {
             listener.exitTimeIntervalParamName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTimeIntervalParamName) {
            return visitor.visitTimeIntervalParamName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnDescriptorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DESCRIPTOR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DESCRIPTOR, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public columnName(): ColumnNameContext {
        return this.getRuleContext(0, ColumnNameContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_columnDescriptor;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterColumnDescriptor) {
             listener.enterColumnDescriptor(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitColumnDescriptor) {
             listener.exitColumnDescriptor(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitColumnDescriptor) {
            return visitor.visitColumnDescriptor(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JoinConditionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ON(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ON, 0);
    }
    public booleanExpression(): BooleanExpressionContext | null {
        return this.getRuleContext(0, BooleanExpressionContext);
    }
    public KW_USING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_USING, 0);
    }
    public columnNameList(): ColumnNameListContext | null {
        return this.getRuleContext(0, ColumnNameListContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_joinCondition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterJoinCondition) {
             listener.enterJoinCondition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitJoinCondition) {
             listener.exitJoinCondition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitJoinCondition) {
            return visitor.visitJoinCondition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhereClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WHERE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WHERE, 0)!;
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_whereClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterWhereClause) {
             listener.enterWhereClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitWhereClause) {
             listener.exitWhereClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWhereClause) {
            return visitor.visitWhereClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_GROUP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_GROUP, 0)!;
    }
    public KW_BY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BY, 0)!;
    }
    public groupItemDefinition(): GroupItemDefinitionContext[];
    public groupItemDefinition(i: number): GroupItemDefinitionContext | null;
    public groupItemDefinition(i?: number): GroupItemDefinitionContext[] | GroupItemDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GroupItemDefinitionContext);
        }

        return this.getRuleContext(i, GroupItemDefinitionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_groupByClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterGroupByClause) {
             listener.enterGroupByClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitGroupByClause) {
             listener.exitGroupByClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitGroupByClause) {
            return visitor.visitGroupByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupItemDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnName(): ColumnNameContext | null {
        return this.getRuleContext(0, ColumnNameContext);
    }
    public groupWindowFunction(): GroupWindowFunctionContext | null {
        return this.getRuleContext(0, GroupWindowFunctionContext);
    }
    public LR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
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
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public groupingSetsNotationName(): GroupingSetsNotationNameContext | null {
        return this.getRuleContext(0, GroupingSetsNotationNameContext);
    }
    public groupingSets(): GroupingSetsContext | null {
        return this.getRuleContext(0, GroupingSetsContext);
    }
    public groupItemDefinition(): GroupItemDefinitionContext[];
    public groupItemDefinition(i: number): GroupItemDefinitionContext | null;
    public groupItemDefinition(i?: number): GroupItemDefinitionContext[] | GroupItemDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GroupItemDefinitionContext);
        }

        return this.getRuleContext(i, GroupItemDefinitionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_groupItemDefinition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterGroupItemDefinition) {
             listener.enterGroupItemDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitGroupItemDefinition) {
             listener.exitGroupItemDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitGroupItemDefinition) {
            return visitor.visitGroupItemDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupingSetsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_GROUPING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_GROUPING, 0)!;
    }
    public KW_SETS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SETS, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_groupingSets;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterGroupingSets) {
             listener.enterGroupingSets(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitGroupingSets) {
             listener.exitGroupingSets(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitGroupingSets) {
            return visitor.visitGroupingSets(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupingSetsNotationNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CUBE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CUBE, 0);
    }
    public KW_ROLLUP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ROLLUP, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_groupingSetsNotationName;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterGroupingSetsNotationName) {
             listener.enterGroupingSetsNotationName(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitGroupingSetsNotationName) {
             listener.exitGroupingSetsNotationName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitGroupingSetsNotationName) {
            return visitor.visitGroupingSetsNotationName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupWindowFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public groupWindowFunctionName(): GroupWindowFunctionNameContext {
        return this.getRuleContext(0, GroupWindowFunctionNameContext)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public timeAttrColumn(): TimeAttrColumnContext {
        return this.getRuleContext(0, TimeAttrColumnContext)!;
    }
    public COMMA(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, 0)!;
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext {
        return this.getRuleContext(0, TimeIntervalExpressionContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_groupWindowFunction;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterGroupWindowFunction) {
             listener.enterGroupWindowFunction(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitGroupWindowFunction) {
             listener.exitGroupWindowFunction(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitGroupWindowFunction) {
            return visitor.visitGroupWindowFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupWindowFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TUMBLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TUMBLE, 0);
    }
    public KW_HOP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_HOP, 0);
    }
    public KW_SESSION(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SESSION, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_groupWindowFunctionName;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterGroupWindowFunctionName) {
             listener.enterGroupWindowFunctionName(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitGroupWindowFunctionName) {
             listener.exitGroupWindowFunctionName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitGroupWindowFunctionName) {
            return visitor.visitGroupWindowFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimeAttrColumnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_timeAttrColumn;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterTimeAttrColumn) {
             listener.enterTimeAttrColumn(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitTimeAttrColumn) {
             listener.exitTimeAttrColumn(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTimeAttrColumn) {
            return visitor.visitTimeAttrColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HavingClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_HAVING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_HAVING, 0)!;
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_havingClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterHavingClause) {
             listener.enterHavingClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitHavingClause) {
             listener.exitHavingClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitHavingClause) {
            return visitor.visitHavingClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WINDOW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WINDOW, 0)!;
    }
    public namedWindow(): NamedWindowContext[];
    public namedWindow(i: number): NamedWindowContext | null;
    public namedWindow(i?: number): NamedWindowContext[] | NamedWindowContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NamedWindowContext);
        }

        return this.getRuleContext(i, NamedWindowContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_windowClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterWindowClause) {
             listener.enterWindowClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitWindowClause) {
             listener.exitWindowClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWindowClause) {
            return visitor.visitWindowClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NamedWindowContext extends antlr.ParserRuleContext {
    public _name?: ErrorCapturingIdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0)!;
    }
    public windowSpec(): WindowSpecContext {
        return this.getRuleContext(0, WindowSpecContext)!;
    }
    public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
        return this.getRuleContext(0, ErrorCapturingIdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_namedWindow;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterNamedWindow) {
             listener.enterNamedWindow(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitNamedWindow) {
             listener.exitNamedWindow(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitNamedWindow) {
            return visitor.visitNamedWindow(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowSpecContext extends antlr.ParserRuleContext {
    public _name?: ErrorCapturingIdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public partitionByClause(): PartitionByClauseContext | null {
        return this.getRuleContext(0, PartitionByClauseContext);
    }
    public orderByClause(): OrderByClauseContext | null {
        return this.getRuleContext(0, OrderByClauseContext);
    }
    public windowFrame(): WindowFrameContext | null {
        return this.getRuleContext(0, WindowFrameContext);
    }
    public errorCapturingIdentifier(): ErrorCapturingIdentifierContext | null {
        return this.getRuleContext(0, ErrorCapturingIdentifierContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_windowSpec;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterWindowSpec) {
             listener.enterWindowSpec(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitWindowSpec) {
             listener.exitWindowSpec(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWindowSpec) {
            return visitor.visitWindowSpec(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MatchRecognizeClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_MATCH_RECOGNIZE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MATCH_RECOGNIZE, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public patternVariablesDefinition(): PatternVariablesDefinitionContext {
        return this.getRuleContext(0, PatternVariablesDefinitionContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public partitionByClause(): PartitionByClauseContext | null {
        return this.getRuleContext(0, PartitionByClauseContext);
    }
    public orderByClause(): OrderByClauseContext | null {
        return this.getRuleContext(0, OrderByClauseContext);
    }
    public measuresClause(): MeasuresClauseContext | null {
        return this.getRuleContext(0, MeasuresClauseContext);
    }
    public outputMode(): OutputModeContext | null {
        return this.getRuleContext(0, OutputModeContext);
    }
    public afterMatchStrategy(): AfterMatchStrategyContext | null {
        return this.getRuleContext(0, AfterMatchStrategyContext);
    }
    public patternDefinition(): PatternDefinitionContext | null {
        return this.getRuleContext(0, PatternDefinitionContext);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_matchRecognizeClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterMatchRecognizeClause) {
             listener.enterMatchRecognizeClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitMatchRecognizeClause) {
             listener.exitMatchRecognizeClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitMatchRecognizeClause) {
            return visitor.visitMatchRecognizeClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrderByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ORDER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ORDER, 0)!;
    }
    public KW_BY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BY, 0)!;
    }
    public orderItemDefinition(): OrderItemDefinitionContext[];
    public orderItemDefinition(i: number): OrderItemDefinitionContext | null;
    public orderItemDefinition(i?: number): OrderItemDefinitionContext[] | OrderItemDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OrderItemDefinitionContext);
        }

        return this.getRuleContext(i, OrderItemDefinitionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_orderByClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterOrderByClause) {
             listener.enterOrderByClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitOrderByClause) {
             listener.exitOrderByClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitOrderByClause) {
            return visitor.visitOrderByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrderItemDefinitionContext extends antlr.ParserRuleContext {
    public _ordering?: Token | null;
    public _nullOrder?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnName(): ColumnNameContext | null {
        return this.getRuleContext(0, ColumnNameContext);
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public KW_NULLS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NULLS, 0);
    }
    public KW_ASC(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ASC, 0);
    }
    public KW_DESC(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DESC, 0);
    }
    public KW_LAST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LAST, 0);
    }
    public KW_FIRST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FIRST, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_orderItemDefinition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterOrderItemDefinition) {
             listener.enterOrderItemDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitOrderItemDefinition) {
             listener.exitOrderItemDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitOrderItemDefinition) {
            return visitor.visitOrderItemDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LimitClauseContext extends antlr.ParserRuleContext {
    public _limit?: ExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LIMIT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LIMIT, 0)!;
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_limitClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterLimitClause) {
             listener.enterLimitClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitLimitClause) {
             listener.exitLimitClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLimitClause) {
            return visitor.visitLimitClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PartitionByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PARTITION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PARTITION, 0)!;
    }
    public KW_BY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BY, 0)!;
    }
    public columnName(): ColumnNameContext[];
    public columnName(i: number): ColumnNameContext | null;
    public columnName(i?: number): ColumnNameContext[] | ColumnNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnNameContext);
        }

        return this.getRuleContext(i, ColumnNameContext);
    }
    public primaryExpression(): PrimaryExpressionContext[];
    public primaryExpression(i: number): PrimaryExpressionContext | null;
    public primaryExpression(i?: number): PrimaryExpressionContext[] | PrimaryExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PrimaryExpressionContext);
        }

        return this.getRuleContext(i, PrimaryExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_partitionByClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterPartitionByClause) {
             listener.enterPartitionByClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitPartitionByClause) {
             listener.exitPartitionByClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitPartitionByClause) {
            return visitor.visitPartitionByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QuantifiersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ASTERISK_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
    }
    public ADD_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    public QUESTION_MARK_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.QUESTION_MARK_SIGN, 0);
    }
    public LB_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.LB_BRACKET, 0);
    }
    public DIG_LITERAL(): antlr.TerminalNode[];
    public DIG_LITERAL(i: number): antlr.TerminalNode | null;
    public DIG_LITERAL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.DIG_LITERAL);
    	} else {
    		return this.getToken(FlinkSqlParser.DIG_LITERAL, i);
    	}
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.COMMA, 0);
    }
    public RB_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.RB_BRACKET, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_quantifiers;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterQuantifiers) {
             listener.enterQuantifiers(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitQuantifiers) {
             listener.exitQuantifiers(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitQuantifiers) {
            return visitor.visitQuantifiers(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MeasuresClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_MEASURES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MEASURES, 0)!;
    }
    public projectItemDefinition(): ProjectItemDefinitionContext[];
    public projectItemDefinition(i: number): ProjectItemDefinitionContext | null;
    public projectItemDefinition(i?: number): ProjectItemDefinitionContext[] | ProjectItemDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ProjectItemDefinitionContext);
        }

        return this.getRuleContext(i, ProjectItemDefinitionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_measuresClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterMeasuresClause) {
             listener.enterMeasuresClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitMeasuresClause) {
             listener.exitMeasuresClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitMeasuresClause) {
            return visitor.visitMeasuresClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PATTERN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PATTERN, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public patternVariable(): PatternVariableContext[];
    public patternVariable(i: number): PatternVariableContext | null;
    public patternVariable(i?: number): PatternVariableContext[] | PatternVariableContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PatternVariableContext);
        }

        return this.getRuleContext(i, PatternVariableContext);
    }
    public withinClause(): WithinClauseContext | null {
        return this.getRuleContext(0, WithinClauseContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_patternDefinition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterPatternDefinition) {
             listener.enterPatternDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitPatternDefinition) {
             listener.exitPatternDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitPatternDefinition) {
            return visitor.visitPatternDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternVariableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unquotedIdentifier(): UnquotedIdentifierContext {
        return this.getRuleContext(0, UnquotedIdentifierContext)!;
    }
    public quantifiers(): QuantifiersContext | null {
        return this.getRuleContext(0, QuantifiersContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_patternVariable;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterPatternVariable) {
             listener.enterPatternVariable(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitPatternVariable) {
             listener.exitPatternVariable(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitPatternVariable) {
            return visitor.visitPatternVariable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OutputModeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    public KW_ROWS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ROWS, 0);
    }
    public KW_PER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PER, 0)!;
    }
    public KW_MATCH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MATCH, 0)!;
    }
    public KW_ONE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ONE, 0);
    }
    public KW_ROW(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ROW, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_outputMode;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterOutputMode) {
             listener.enterOutputMode(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitOutputMode) {
             listener.exitOutputMode(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitOutputMode) {
            return visitor.visitOutputMode(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AfterMatchStrategyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AFTER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AFTER, 0)!;
    }
    public KW_MATCH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MATCH, 0)!;
    }
    public KW_SKIP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SKIP, 0)!;
    }
    public KW_PAST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PAST, 0);
    }
    public KW_LAST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LAST, 0);
    }
    public KW_ROW(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ROW, 0);
    }
    public KW_TO(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TO, 0);
    }
    public KW_NEXT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NEXT, 0);
    }
    public unquotedIdentifier(): UnquotedIdentifierContext | null {
        return this.getRuleContext(0, UnquotedIdentifierContext);
    }
    public KW_FIRST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FIRST, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_afterMatchStrategy;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterAfterMatchStrategy) {
             listener.enterAfterMatchStrategy(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitAfterMatchStrategy) {
             listener.exitAfterMatchStrategy(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitAfterMatchStrategy) {
            return visitor.visitAfterMatchStrategy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PatternVariablesDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DEFINE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DEFINE, 0)!;
    }
    public projectItemDefinition(): ProjectItemDefinitionContext[];
    public projectItemDefinition(i: number): ProjectItemDefinitionContext | null;
    public projectItemDefinition(i?: number): ProjectItemDefinitionContext[] | ProjectItemDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ProjectItemDefinitionContext);
        }

        return this.getRuleContext(i, ProjectItemDefinitionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_patternVariablesDefinition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterPatternVariablesDefinition) {
             listener.enterPatternVariablesDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitPatternVariablesDefinition) {
             listener.exitPatternVariablesDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitPatternVariablesDefinition) {
            return visitor.visitPatternVariablesDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowFrameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_RANGE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_RANGE, 0);
    }
    public KW_BETWEEN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BETWEEN, 0)!;
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext | null {
        return this.getRuleContext(0, TimeIntervalExpressionContext);
    }
    public frameBound(): FrameBoundContext | null {
        return this.getRuleContext(0, FrameBoundContext);
    }
    public frameStart(): FrameStartContext | null {
        return this.getRuleContext(0, FrameStartContext);
    }
    public KW_AND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_AND, 0);
    }
    public frameEnd(): FrameEndContext | null {
        return this.getRuleContext(0, FrameEndContext);
    }
    public KW_ROWS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ROWS, 0);
    }
    public DIG_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_windowFrame;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterWindowFrame) {
             listener.enterWindowFrame(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitWindowFrame) {
             listener.exitWindowFrame(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
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
    public KW_PRECEDING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PRECEDING, 0)!;
    }
    public KW_AND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AND, 0)!;
    }
    public KW_CURRENT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CURRENT, 0)!;
    }
    public KW_ROW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ROW, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_frameBound;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterFrameBound) {
             listener.enterFrameBound(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitFrameBound) {
             listener.exitFrameBound(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitFrameBound) {
            return visitor.visitFrameBound(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FrameStartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_UNBOUNDED(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_UNBOUNDED, 0);
    }
    public KW_PRECEDING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PRECEDING, 0);
    }
    public DIG_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
    }
    public KW_CURRENT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CURRENT, 0);
    }
    public KW_ROW(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ROW, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_frameStart;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterFrameStart) {
             listener.enterFrameStart(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitFrameStart) {
             listener.exitFrameStart(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitFrameStart) {
            return visitor.visitFrameStart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FrameEndContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CURRENT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CURRENT, 0);
    }
    public KW_ROW(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ROW, 0);
    }
    public DIG_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
    }
    public KW_FOLLOWING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FOLLOWING, 0);
    }
    public KW_UNBOUNDED(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_UNBOUNDED, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_frameEnd;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterFrameEnd) {
             listener.enterFrameEnd(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitFrameEnd) {
             listener.exitFrameEnd(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitFrameEnd) {
            return visitor.visitFrameEnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WithinClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WITHIN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WITHIN, 0)!;
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext {
        return this.getRuleContext(0, TimeIntervalExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_withinClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterWithinClause) {
             listener.enterWithinClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitWithinClause) {
             listener.exitWithinClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWithinClause) {
            return visitor.visitWithinClause(this);
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
        return FlinkSqlParser.RULE_expression;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
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
        return FlinkSqlParser.RULE_booleanExpression;
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
        return this.getToken(FlinkSqlParser.KW_NOT, 0)!;
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterLogicalNot) {
             listener.enterLogicalNot(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitLogicalNot) {
             listener.exitLogicalNot(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalNot) {
            return visitor.visitLogicalNot(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PredicatedContext extends BooleanExpressionContext {
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
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterPredicated) {
             listener.enterPredicated(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitPredicated) {
             listener.exitPredicated(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitPredicated) {
            return visitor.visitPredicated(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExistsContext extends BooleanExpressionContext {
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_EXISTS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXISTS, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterExists) {
             listener.enterExists(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitExists) {
             listener.exitExists(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitExists) {
            return visitor.visitExists(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalNestedContext extends BooleanExpressionContext {
    public _kind?: Token | null;
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getRuleContext(0, BooleanExpressionContext)!;
    }
    public KW_IS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_IS, 0)!;
    }
    public KW_TRUE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TRUE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FALSE, 0);
    }
    public KW_UNKNOWN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_UNKNOWN, 0);
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NULL, 0);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterLogicalNested) {
             listener.enterLogicalNested(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitLogicalNested) {
             listener.exitLogicalNested(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalNested) {
            return visitor.visitLogicalNested(this);
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
        return this.getToken(FlinkSqlParser.KW_AND, 0);
    }
    public KW_OR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_OR, 0);
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterLogicalBinary) {
             listener.enterLogicalBinary(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitLogicalBinary) {
             listener.exitLogicalBinary(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalBinary) {
            return visitor.visitLogicalBinary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PredicateContext extends antlr.ParserRuleContext {
    public _kind?: Token | null;
    public _lower?: ValueExpressionContext;
    public _upper?: ValueExpressionContext;
    public _pattern?: ValueExpressionContext;
    public _right?: ValueExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_AND, 0);
    }
    public KW_BETWEEN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_BETWEEN, 0);
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
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    public KW_ASYMMETRIC(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ASYMMETRIC, 0);
    }
    public KW_SYMMETRIC(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SYMMETRIC, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public RR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public KW_IN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_IN, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public queryStatement(): QueryStatementContext | null {
        return this.getRuleContext(0, QueryStatementContext);
    }
    public KW_EXISTS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_EXISTS, 0);
    }
    public KW_RLIKE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_RLIKE, 0);
    }
    public likePredicate(): LikePredicateContext | null {
        return this.getRuleContext(0, LikePredicateContext);
    }
    public KW_IS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_IS, 0);
    }
    public KW_TRUE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TRUE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FALSE, 0);
    }
    public KW_UNKNOWN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_UNKNOWN, 0);
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NULL, 0);
    }
    public KW_FROM(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FROM, 0);
    }
    public KW_DISTINCT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DISTINCT, 0);
    }
    public KW_TO(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TO, 0);
    }
    public KW_SIMILAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SIMILAR, 0);
    }
    public KW_ESCAPE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ESCAPE, 0);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public KW_JSON(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_JSON, 0);
    }
    public KW_VALUE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_VALUE, 0);
    }
    public KW_ARRAY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ARRAY, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_predicate;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterPredicate) {
             listener.enterPredicate(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitPredicate) {
             listener.exitPredicate(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitPredicate) {
            return visitor.visitPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JsonFunctionBranchContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NULL, 0);
    }
    public KW_EMPTY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_EMPTY, 0);
    }
    public KW_ARRAY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ARRAY, 0);
    }
    public uid(): UidContext | null {
        return this.getRuleContext(0, UidContext);
    }
    public KW_TRUE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TRUE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FALSE, 0);
    }
    public KW_UNKNOWN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_UNKNOWN, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_jsonFunctionBranch;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterJsonFunctionBranch) {
             listener.enterJsonFunctionBranch(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitJsonFunctionBranch) {
             listener.exitJsonFunctionBranch(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitJsonFunctionBranch) {
            return visitor.visitJsonFunctionBranch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LikePredicateContext extends antlr.ParserRuleContext {
    public _kind?: Token | null;
    public _quantifier?: Token | null;
    public _pattern?: ValueExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LIKE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LIKE, 0)!;
    }
    public KW_ANY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ANY, 0);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public KW_ESCAPE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ESCAPE, 0);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_likePredicate;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterLikePredicate) {
             listener.enterLikePredicate(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitLikePredicate) {
             listener.exitLikePredicate(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLikePredicate) {
            return visitor.visitLikePredicate(this);
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
        return FlinkSqlParser.RULE_valueExpression;
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
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterValueExpressionDefault) {
             listener.enterValueExpressionDefault(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitValueExpressionDefault) {
             listener.exitValueExpressionDefault(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitValueExpressionDefault) {
            return visitor.visitValueExpressionDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ComparisonContext extends ValueExpressionContext {
    public _left?: ValueExpressionContext;
    public _right?: ValueExpressionContext;
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public comparisonOperator(): ComparisonOperatorContext {
        return this.getRuleContext(0, ComparisonOperatorContext)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterComparison) {
             listener.enterComparison(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitComparison) {
             listener.exitComparison(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitComparison) {
            return visitor.visitComparison(this);
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
    public ASTERISK_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
    }
    public SLASH_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.SLASH_SIGN, 0);
    }
    public PERCENT_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.PERCENT_SIGN, 0);
    }
    public KW_DIV(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DIV, 0);
    }
    public ADD_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    public HYPHEN_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.HYPHEN_SIGN, 0);
    }
    public DOUBLE_VERTICAL_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.DOUBLE_VERTICAL_SIGN, 0);
    }
    public BIT_AND_OP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.BIT_AND_OP, 0);
    }
    public BIT_XOR_OP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.BIT_XOR_OP, 0);
    }
    public BIT_OR_OP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.BIT_OR_OP, 0);
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterArithmeticBinary) {
             listener.enterArithmeticBinary(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitArithmeticBinary) {
             listener.exitArithmeticBinary(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
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
    public HYPHEN_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.HYPHEN_SIGN, 0);
    }
    public ADD_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    public BIT_NOT_OP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.BIT_NOT_OP, 0);
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterArithmeticUnary) {
             listener.enterArithmeticUnary(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitArithmeticUnary) {
             listener.exitArithmeticUnary(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitArithmeticUnary) {
            return visitor.visitArithmeticUnary(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionCallExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public reservedKeywordsNoParamsUsedAsFuncName(): ReservedKeywordsNoParamsUsedAsFuncNameContext | null {
        return this.getRuleContext(0, ReservedKeywordsNoParamsUsedAsFuncNameContext);
    }
    public functionNameAndParams(): FunctionNameAndParamsContext | null {
        return this.getRuleContext(0, FunctionNameAndParamsContext);
    }
    public functionNameWithParams(): FunctionNameWithParamsContext | null {
        return this.getRuleContext(0, FunctionNameWithParamsContext);
    }
    public LR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public functionParam(): FunctionParamContext[];
    public functionParam(i: number): FunctionParamContext | null;
    public functionParam(i?: number): FunctionParamContext[] | FunctionParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionParamContext);
        }

        return this.getRuleContext(i, FunctionParamContext);
    }
    public setQuantifier(): SetQuantifierContext | null {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_functionCallExpression;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterFunctionCallExpression) {
             listener.enterFunctionCallExpression(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitFunctionCallExpression) {
             listener.exitFunctionCallExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionCallExpression) {
            return visitor.visitFunctionCallExpression(this);
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
        return FlinkSqlParser.RULE_primaryExpression;
    }
    public override copyFrom(ctx: PrimaryExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class DereferenceContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public dereferenceDefinition(): DereferenceDefinitionContext {
        return this.getRuleContext(0, DereferenceDefinitionContext)!;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterDereference) {
             listener.enterDereference(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitDereference) {
             listener.exitDereference(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDereference) {
            return visitor.visitDereference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SimpleCaseContext extends PrimaryExpressionContext {
    public _value?: ExpressionContext;
    public _elseExpression?: ExpressionContext;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CASE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CASE, 0)!;
    }
    public KW_END(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_END, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
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
        return this.getToken(FlinkSqlParser.KW_ELSE, 0);
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterSimpleCase) {
             listener.enterSimpleCase(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitSimpleCase) {
             listener.exitSimpleCase(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
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
    public columnNamePath(): ColumnNamePathContext {
        return this.getRuleContext(0, ColumnNamePathContext)!;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterColumnReference) {
             listener.enterColumnReference(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitColumnReference) {
             listener.exitColumnReference(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitColumnReference) {
            return visitor.visitColumnReference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LastContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_LAST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LAST, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public KW_IGNORE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_IGNORE, 0);
    }
    public KW_NULLS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NULLS, 0);
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterLast) {
             listener.enterLast(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitLast) {
             listener.exitLast(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLast) {
            return visitor.visitLast(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StarContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ASTERISK_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0)!;
    }
    public uid(): UidContext | null {
        return this.getRuleContext(0, UidContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.DOT, 0);
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterStar) {
             listener.enterStar(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitStar) {
             listener.exitStar(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitStar) {
            return visitor.visitStar(this);
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
    public LS_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LS_BRACKET, 0)!;
    }
    public RS_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RS_BRACKET, 0)!;
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterSubscript) {
             listener.enterSubscript(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitSubscript) {
             listener.exitSubscript(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSubscript) {
            return visitor.visitSubscript(this);
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
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public queryStatement(): QueryStatementContext {
        return this.getRuleContext(0, QueryStatementContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterSubqueryExpression) {
             listener.enterSubqueryExpression(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitSubqueryExpression) {
             listener.exitSubqueryExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSubqueryExpression) {
            return visitor.visitSubqueryExpression(this);
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
    public KW_CAST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CAST, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0)!;
    }
    public columnType(): ColumnTypeContext {
        return this.getRuleContext(0, ColumnTypeContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterCast) {
             listener.enterCast(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitCast) {
             listener.exitCast(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCast) {
            return visitor.visitCast(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConstantDefaultContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public constant(): ConstantContext {
        return this.getRuleContext(0, ConstantContext)!;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterConstantDefault) {
             listener.enterConstantDefault(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitConstantDefault) {
             listener.exitConstantDefault(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitConstantDefault) {
            return visitor.visitConstantDefault(this);
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
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterParenthesizedExpression) {
             listener.enterParenthesizedExpression(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitParenthesizedExpression) {
             listener.exitParenthesizedExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitParenthesizedExpression) {
            return visitor.visitParenthesizedExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExtractContext extends PrimaryExpressionContext {
    public _field?: IdentifierContext;
    public _source?: ValueExpressionContext;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_EXTRACT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXTRACT, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FROM, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterExtract) {
             listener.enterExtract(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitExtract) {
             listener.exitExtract(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitExtract) {
            return visitor.visitExtract(this);
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
    public functionCallExpression(): FunctionCallExpressionContext {
        return this.getRuleContext(0, FunctionCallExpressionContext)!;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterFunctionCall) {
             listener.enterFunctionCall(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitFunctionCall) {
             listener.exitFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
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
        return this.getToken(FlinkSqlParser.KW_CASE, 0)!;
    }
    public KW_END(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_END, 0)!;
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
        return this.getToken(FlinkSqlParser.KW_ELSE, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterSearchedCase) {
             listener.enterSearchedCase(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitSearchedCase) {
             listener.exitSearchedCase(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSearchedCase) {
            return visitor.visitSearchedCase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PositionContext extends PrimaryExpressionContext {
    public _substr?: ValueExpressionContext;
    public _str?: ValueExpressionContext;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_POSITION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_POSITION, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public KW_IN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_IN, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterPosition) {
             listener.enterPosition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitPosition) {
             listener.exitPosition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitPosition) {
            return visitor.visitPosition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FirstContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_FIRST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FIRST, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public KW_IGNORE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_IGNORE, 0);
    }
    public KW_NULLS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NULLS, 0);
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterFirst) {
             listener.enterFirst(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitFirst) {
             listener.exitFirst(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitFirst) {
            return visitor.visitFirst(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionNameCreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_functionNameCreate;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterFunctionNameCreate) {
             listener.enterFunctionNameCreate(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitFunctionNameCreate) {
             listener.exitFunctionNameCreate(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionNameCreate) {
            return visitor.visitFunctionNameCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext | null {
        return this.getRuleContext(0, ReservedKeywordsUsedAsFuncNameContext);
    }
    public reservedKeywordsNoParamsUsedAsFuncName(): ReservedKeywordsNoParamsUsedAsFuncNameContext | null {
        return this.getRuleContext(0, ReservedKeywordsNoParamsUsedAsFuncNameContext);
    }
    public reservedKeywordsFollowParamsUsedAsFuncName(): ReservedKeywordsFollowParamsUsedAsFuncNameContext | null {
        return this.getRuleContext(0, ReservedKeywordsFollowParamsUsedAsFuncNameContext);
    }
    public uid(): UidContext | null {
        return this.getRuleContext(0, UidContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_functionName;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterFunctionName) {
             listener.enterFunctionName(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitFunctionName) {
             listener.exitFunctionName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionName) {
            return visitor.visitFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionNameAndParamsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public reservedKeywordsFollowParamsUsedAsFuncName(): ReservedKeywordsFollowParamsUsedAsFuncNameContext | null {
        return this.getRuleContext(0, ReservedKeywordsFollowParamsUsedAsFuncNameContext);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext | null {
        return this.getRuleContext(0, TimeIntervalExpressionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_functionNameAndParams;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterFunctionNameAndParams) {
             listener.enterFunctionNameAndParams(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitFunctionNameAndParams) {
             listener.exitFunctionNameAndParams(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionNameAndParams) {
            return visitor.visitFunctionNameAndParams(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionNameWithParamsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext | null {
        return this.getRuleContext(0, ReservedKeywordsUsedAsFuncNameContext);
    }
    public uid(): UidContext | null {
        return this.getRuleContext(0, UidContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_functionNameWithParams;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterFunctionNameWithParams) {
             listener.enterFunctionNameWithParams(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitFunctionNameWithParams) {
             listener.exitFunctionNameWithParams(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionNameWithParams) {
            return visitor.visitFunctionNameWithParams(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public reservedKeywordsUsedAsFuncParam(): ReservedKeywordsUsedAsFuncParamContext | null {
        return this.getRuleContext(0, ReservedKeywordsUsedAsFuncParamContext);
    }
    public timeIntervalUnit(): TimeIntervalUnitContext | null {
        return this.getRuleContext(0, TimeIntervalUnitContext);
    }
    public timePointUnit(): TimePointUnitContext | null {
        return this.getRuleContext(0, TimePointUnitContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public jsonValueParams(): JsonValueParamsContext | null {
        return this.getRuleContext(0, JsonValueParamsContext);
    }
    public jsonQueryParams(): JsonQueryParamsContext | null {
        return this.getRuleContext(0, JsonQueryParamsContext);
    }
    public jsonObjectParams(): JsonObjectParamsContext | null {
        return this.getRuleContext(0, JsonObjectParamsContext);
    }
    public jsonArrayParams(): JsonArrayParamsContext | null {
        return this.getRuleContext(0, JsonArrayParamsContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_functionParam;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterFunctionParam) {
             listener.enterFunctionParam(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitFunctionParam) {
             listener.exitFunctionParam(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionParam) {
            return visitor.visitFunctionParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JsonValueParamsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnNamePath(): ColumnNamePathContext {
        return this.getRuleContext(0, ColumnNamePathContext)!;
    }
    public uid(): UidContext[];
    public uid(i: number): UidContext | null;
    public uid(i?: number): UidContext[] | UidContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UidContext);
        }

        return this.getRuleContext(i, UidContext);
    }
    public columnType(): ColumnTypeContext | null {
        return this.getRuleContext(0, ColumnTypeContext);
    }
    public KW_ON(): antlr.TerminalNode[];
    public KW_ON(i: number): antlr.TerminalNode | null;
    public KW_ON(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.KW_ON);
    	} else {
    		return this.getToken(FlinkSqlParser.KW_ON, i);
    	}
    }
    public KW_EMPTY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_EMPTY, 0);
    }
    public KW_NULL(): antlr.TerminalNode[];
    public KW_NULL(i: number): antlr.TerminalNode | null;
    public KW_NULL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.KW_NULL);
    	} else {
    		return this.getToken(FlinkSqlParser.KW_NULL, i);
    	}
    }
    public KW_DEFAULT(): antlr.TerminalNode[];
    public KW_DEFAULT(i: number): antlr.TerminalNode | null;
    public KW_DEFAULT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.KW_DEFAULT);
    	} else {
    		return this.getToken(FlinkSqlParser.KW_DEFAULT, i);
    	}
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_jsonValueParams;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterJsonValueParams) {
             listener.enterJsonValueParams(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitJsonValueParams) {
             listener.exitJsonValueParams(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitJsonValueParams) {
            return visitor.visitJsonValueParams(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JsonQueryParamsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnNamePath(): ColumnNamePathContext {
        return this.getRuleContext(0, ColumnNamePathContext)!;
    }
    public uid(): UidContext[];
    public uid(i: number): UidContext | null;
    public uid(i?: number): UidContext[] | UidContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UidContext);
        }

        return this.getRuleContext(i, UidContext);
    }
    public jsonFunctionBranch(): JsonFunctionBranchContext[];
    public jsonFunctionBranch(i: number): JsonFunctionBranchContext | null;
    public jsonFunctionBranch(i?: number): JsonFunctionBranchContext[] | JsonFunctionBranchContext | null {
        if (i === undefined) {
            return this.getRuleContexts(JsonFunctionBranchContext);
        }

        return this.getRuleContext(i, JsonFunctionBranchContext);
    }
    public KW_ON(): antlr.TerminalNode[];
    public KW_ON(i: number): antlr.TerminalNode | null;
    public KW_ON(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.KW_ON);
    	} else {
    		return this.getToken(FlinkSqlParser.KW_ON, i);
    	}
    }
    public KW_EMPTY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_EMPTY, 0);
    }
    public KW_WITHOUT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_WITHOUT, 0);
    }
    public KW_WITH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_WITH, 0);
    }
    public KW_ARRAY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ARRAY, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_jsonQueryParams;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterJsonQueryParams) {
             listener.enterJsonQueryParams(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitJsonQueryParams) {
             listener.exitJsonQueryParams(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitJsonQueryParams) {
            return visitor.visitJsonQueryParams(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JsonObjectParamsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnNamePath(): ColumnNamePathContext[];
    public columnNamePath(i: number): ColumnNamePathContext | null;
    public columnNamePath(i?: number): ColumnNamePathContext[] | ColumnNamePathContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnNamePathContext);
        }

        return this.getRuleContext(i, ColumnNamePathContext);
    }
    public KW_ON(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ON, 0);
    }
    public KW_NULL(): antlr.TerminalNode[];
    public KW_NULL(i: number): antlr.TerminalNode | null;
    public KW_NULL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.KW_NULL);
    	} else {
    		return this.getToken(FlinkSqlParser.KW_NULL, i);
    	}
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public KW_JSON(): antlr.TerminalNode[];
    public KW_JSON(i: number): antlr.TerminalNode | null;
    public KW_JSON(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.KW_JSON);
    	} else {
    		return this.getToken(FlinkSqlParser.KW_JSON, i);
    	}
    }
    public LR_BRACKET(): antlr.TerminalNode[];
    public LR_BRACKET(i: number): antlr.TerminalNode | null;
    public LR_BRACKET(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.LR_BRACKET);
    	} else {
    		return this.getToken(FlinkSqlParser.LR_BRACKET, i);
    	}
    }
    public RR_BRACKET(): antlr.TerminalNode[];
    public RR_BRACKET(i: number): antlr.TerminalNode | null;
    public RR_BRACKET(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.RR_BRACKET);
    	} else {
    		return this.getToken(FlinkSqlParser.RR_BRACKET, i);
    	}
    }
    public uid(): UidContext | null {
        return this.getRuleContext(0, UidContext);
    }
    public KW_KEY(): antlr.TerminalNode[];
    public KW_KEY(i: number): antlr.TerminalNode | null;
    public KW_KEY(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.KW_KEY);
    	} else {
    		return this.getToken(FlinkSqlParser.KW_KEY, i);
    	}
    }
    public KW_VALUE(): antlr.TerminalNode[];
    public KW_VALUE(i: number): antlr.TerminalNode | null;
    public KW_VALUE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.KW_VALUE);
    	} else {
    		return this.getToken(FlinkSqlParser.KW_VALUE, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_jsonObjectParams;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterJsonObjectParams) {
             listener.enterJsonObjectParams(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitJsonObjectParams) {
             listener.exitJsonObjectParams(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitJsonObjectParams) {
            return visitor.visitJsonObjectParams(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JsonArrayParamsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public KW_ON(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ON, 0);
    }
    public KW_NULL(): antlr.TerminalNode[];
    public KW_NULL(i: number): antlr.TerminalNode | null;
    public KW_NULL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.KW_NULL);
    	} else {
    		return this.getToken(FlinkSqlParser.KW_NULL, i);
    	}
    }
    public uid(): UidContext | null {
        return this.getRuleContext(0, UidContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_jsonArrayParams;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterJsonArrayParams) {
             listener.enterJsonArrayParams(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitJsonArrayParams) {
             listener.exitJsonArrayParams(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitJsonArrayParams) {
            return visitor.visitJsonArrayParams(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DereferenceDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext {
        return this.getRuleContext(0, UidContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dereferenceDefinition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterDereferenceDefinition) {
             listener.enterDereferenceDefinition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitDereferenceDefinition) {
             listener.exitDereferenceDefinition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDereferenceDefinition) {
            return visitor.visitDereferenceDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CorrelationNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_correlationName;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterCorrelationName) {
             listener.enterCorrelationName(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitCorrelationName) {
             listener.exitCorrelationName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCorrelationName) {
            return visitor.visitCorrelationName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public dereferenceDefinition(): DereferenceDefinitionContext | null {
        return this.getRuleContext(0, DereferenceDefinitionContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_qualifiedName;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterQualifiedName) {
             listener.enterQualifiedName(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitQualifiedName) {
             listener.exitQualifiedName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitQualifiedName) {
            return visitor.visitQualifiedName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimeIntervalExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_INTERVAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INTERVAL, 0)!;
    }
    public errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext | null {
        return this.getRuleContext(0, ErrorCapturingMultiUnitsIntervalContext);
    }
    public errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext | null {
        return this.getRuleContext(0, ErrorCapturingUnitToUnitIntervalContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_timeIntervalExpression;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterTimeIntervalExpression) {
             listener.enterTimeIntervalExpression(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitTimeIntervalExpression) {
             listener.exitTimeIntervalExpression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTimeIntervalExpression) {
            return visitor.visitTimeIntervalExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ErrorCapturingMultiUnitsIntervalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public multiUnitsInterval(): MultiUnitsIntervalContext {
        return this.getRuleContext(0, MultiUnitsIntervalContext)!;
    }
    public unitToUnitInterval(): UnitToUnitIntervalContext | null {
        return this.getRuleContext(0, UnitToUnitIntervalContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterErrorCapturingMultiUnitsInterval) {
             listener.enterErrorCapturingMultiUnitsInterval(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitErrorCapturingMultiUnitsInterval) {
             listener.exitErrorCapturingMultiUnitsInterval(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitErrorCapturingMultiUnitsInterval) {
            return visitor.visitErrorCapturingMultiUnitsInterval(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MultiUnitsIntervalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public intervalValue(): IntervalValueContext[];
    public intervalValue(i: number): IntervalValueContext | null;
    public intervalValue(i?: number): IntervalValueContext[] | IntervalValueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IntervalValueContext);
        }

        return this.getRuleContext(i, IntervalValueContext);
    }
    public timeIntervalUnit(): TimeIntervalUnitContext[];
    public timeIntervalUnit(i: number): TimeIntervalUnitContext | null;
    public timeIntervalUnit(i?: number): TimeIntervalUnitContext[] | TimeIntervalUnitContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TimeIntervalUnitContext);
        }

        return this.getRuleContext(i, TimeIntervalUnitContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_multiUnitsInterval;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterMultiUnitsInterval) {
             listener.enterMultiUnitsInterval(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitMultiUnitsInterval) {
             listener.exitMultiUnitsInterval(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitMultiUnitsInterval) {
            return visitor.visitMultiUnitsInterval(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ErrorCapturingUnitToUnitIntervalContext extends antlr.ParserRuleContext {
    public _body?: UnitToUnitIntervalContext;
    public _error1?: MultiUnitsIntervalContext;
    public _error2?: UnitToUnitIntervalContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unitToUnitInterval(): UnitToUnitIntervalContext[];
    public unitToUnitInterval(i: number): UnitToUnitIntervalContext | null;
    public unitToUnitInterval(i?: number): UnitToUnitIntervalContext[] | UnitToUnitIntervalContext | null {
        if (i === undefined) {
            return this.getRuleContexts(UnitToUnitIntervalContext);
        }

        return this.getRuleContext(i, UnitToUnitIntervalContext);
    }
    public multiUnitsInterval(): MultiUnitsIntervalContext | null {
        return this.getRuleContext(0, MultiUnitsIntervalContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterErrorCapturingUnitToUnitInterval) {
             listener.enterErrorCapturingUnitToUnitInterval(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitErrorCapturingUnitToUnitInterval) {
             listener.exitErrorCapturingUnitToUnitInterval(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitErrorCapturingUnitToUnitInterval) {
            return visitor.visitErrorCapturingUnitToUnitInterval(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnitToUnitIntervalContext extends antlr.ParserRuleContext {
    public _value?: IntervalValueContext;
    public _from_?: TimeIntervalUnitContext;
    public _to?: TimeIntervalUnitContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TO, 0)!;
    }
    public intervalValue(): IntervalValueContext {
        return this.getRuleContext(0, IntervalValueContext)!;
    }
    public timeIntervalUnit(): TimeIntervalUnitContext[];
    public timeIntervalUnit(i: number): TimeIntervalUnitContext | null;
    public timeIntervalUnit(i?: number): TimeIntervalUnitContext[] | TimeIntervalUnitContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TimeIntervalUnitContext);
        }

        return this.getRuleContext(i, TimeIntervalUnitContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_unitToUnitInterval;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterUnitToUnitInterval) {
             listener.enterUnitToUnitInterval(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitUnitToUnitInterval) {
             listener.exitUnitToUnitInterval(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitUnitToUnitInterval) {
            return visitor.visitUnitToUnitInterval(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IntervalValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DIG_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
    }
    public REAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.REAL_LITERAL, 0);
    }
    public ADD_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    public HYPHEN_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.HYPHEN_SIGN, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_intervalValue;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterIntervalValue) {
             listener.enterIntervalValue(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitIntervalValue) {
             listener.exitIntervalValue(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitIntervalValue) {
            return visitor.visitIntervalValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableAliasContext extends antlr.ParserRuleContext {
    public _alias?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_AS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public identifierList(): IdentifierListContext | null {
        return this.getRuleContext(0, IdentifierListContext);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tableAlias;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterTableAlias) {
             listener.enterTableAlias(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitTableAlias) {
             listener.exitTableAlias(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTableAlias) {
            return visitor.visitTableAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ErrorCapturingIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext {
        return this.getRuleContext(0, ErrorCapturingIdentifierExtraContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_errorCapturingIdentifier;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterErrorCapturingIdentifier) {
             listener.enterErrorCapturingIdentifier(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitErrorCapturingIdentifier) {
             listener.exitErrorCapturingIdentifier(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitErrorCapturingIdentifier) {
            return visitor.visitErrorCapturingIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ErrorCapturingIdentifierExtraContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_errorCapturingIdentifierExtra;
    }
    public override copyFrom(ctx: ErrorCapturingIdentifierExtraContext): void {
        super.copyFrom(ctx);
    }
}
export class ErrorIdentContext extends ErrorCapturingIdentifierExtraContext {
    public constructor(ctx: ErrorCapturingIdentifierExtraContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_MINUS(): antlr.TerminalNode[];
    public KW_MINUS(i: number): antlr.TerminalNode | null;
    public KW_MINUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.KW_MINUS);
    	} else {
    		return this.getToken(FlinkSqlParser.KW_MINUS, i);
    	}
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterErrorIdent) {
             listener.enterErrorIdent(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitErrorIdent) {
             listener.exitErrorIdent(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitErrorIdent) {
            return visitor.visitErrorIdent(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RealIdentContext extends ErrorCapturingIdentifierExtraContext {
    public constructor(ctx: ErrorCapturingIdentifierExtraContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterRealIdent) {
             listener.enterRealIdent(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitRealIdent) {
             listener.exitRealIdent(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitRealIdent) {
            return visitor.visitRealIdent(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public identifierSeq(): IdentifierSeqContext {
        return this.getRuleContext(0, IdentifierSeqContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_identifierList;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterIdentifierList) {
             listener.enterIdentifierList(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitIdentifierList) {
             listener.exitIdentifierList(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifierList) {
            return visitor.visitIdentifierList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierSeqContext extends antlr.ParserRuleContext {
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
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_identifierSeq;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterIdentifierSeq) {
             listener.enterIdentifierSeq(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitIdentifierSeq) {
             listener.exitIdentifierSeq(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifierSeq) {
            return visitor.visitIdentifierSeq(this);
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
        return FlinkSqlParser.RULE_identifier;
    }
    public override copyFrom(ctx: IdentifierContext): void {
        super.copyFrom(ctx);
    }
}
export class QuotedIdentifierAlternativeContext extends IdentifierContext {
    public constructor(ctx: IdentifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public quotedIdentifier(): QuotedIdentifierContext {
        return this.getRuleContext(0, QuotedIdentifierContext)!;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterQuotedIdentifierAlternative) {
             listener.enterQuotedIdentifierAlternative(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitQuotedIdentifierAlternative) {
             listener.exitQuotedIdentifierAlternative(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitQuotedIdentifierAlternative) {
            return visitor.visitQuotedIdentifierAlternative(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NonReservedKeywordsAlternativeContext extends IdentifierContext {
    public constructor(ctx: IdentifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public nonReservedKeywords(): NonReservedKeywordsContext {
        return this.getRuleContext(0, NonReservedKeywordsContext)!;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterNonReservedKeywordsAlternative) {
             listener.enterNonReservedKeywordsAlternative(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitNonReservedKeywordsAlternative) {
             listener.exitNonReservedKeywordsAlternative(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitNonReservedKeywordsAlternative) {
            return visitor.visitNonReservedKeywordsAlternative(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnquotedIdentifierAlternativeContext extends IdentifierContext {
    public constructor(ctx: IdentifierContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public unquotedIdentifier(): UnquotedIdentifierContext {
        return this.getRuleContext(0, UnquotedIdentifierContext)!;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterUnquotedIdentifierAlternative) {
             listener.enterUnquotedIdentifierAlternative(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitUnquotedIdentifierAlternative) {
             listener.exitUnquotedIdentifierAlternative(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitUnquotedIdentifierAlternative) {
            return visitor.visitUnquotedIdentifierAlternative(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnquotedIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DIG_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
    }
    public ID_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.ID_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_unquotedIdentifier;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterUnquotedIdentifier) {
             listener.enterUnquotedIdentifier(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitUnquotedIdentifier) {
             listener.exitUnquotedIdentifier(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitUnquotedIdentifier) {
            return visitor.visitUnquotedIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QuotedIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_quotedIdentifier;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterQuotedIdentifier) {
             listener.enterQuotedIdentifier(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitQuotedIdentifier) {
             listener.exitQuotedIdentifier(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitQuotedIdentifier) {
            return visitor.visitQuotedIdentifier(this);
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
        return this.getToken(FlinkSqlParser.KW_WHEN, 0)!;
    }
    public KW_THEN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_THEN, 0)!;
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
        return FlinkSqlParser.RULE_whenClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterWhenClause) {
             listener.enterWhenClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitWhenClause) {
             listener.exitWhenClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWhenClause) {
            return visitor.visitWhenClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CatalogPathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_catalogPath;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterCatalogPath) {
             listener.enterCatalogPath(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitCatalogPath) {
             listener.exitCatalogPath(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCatalogPath) {
            return visitor.visitCatalogPath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CatalogPathCreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_catalogPathCreate;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterCatalogPathCreate) {
             listener.enterCatalogPathCreate(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitCatalogPathCreate) {
             listener.exitCatalogPathCreate(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitCatalogPathCreate) {
            return visitor.visitCatalogPathCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DatabasePathContext extends antlr.ParserRuleContext {
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
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.DOT, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_databasePath;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterDatabasePath) {
             listener.enterDatabasePath(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitDatabasePath) {
             listener.exitDatabasePath(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDatabasePath) {
            return visitor.visitDatabasePath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DatabasePathCreateContext extends antlr.ParserRuleContext {
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
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.DOT, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_databasePathCreate;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterDatabasePathCreate) {
             listener.enterDatabasePathCreate(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitDatabasePathCreate) {
             listener.exitDatabasePathCreate(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDatabasePathCreate) {
            return visitor.visitDatabasePathCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TablePathCreateContext extends antlr.ParserRuleContext {
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
    		return this.getTokens(FlinkSqlParser.DOT);
    	} else {
    		return this.getToken(FlinkSqlParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tablePathCreate;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterTablePathCreate) {
             listener.enterTablePathCreate(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitTablePathCreate) {
             listener.exitTablePathCreate(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTablePathCreate) {
            return visitor.visitTablePathCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TablePathContext extends antlr.ParserRuleContext {
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
    		return this.getTokens(FlinkSqlParser.DOT);
    	} else {
    		return this.getToken(FlinkSqlParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tablePath;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterTablePath) {
             listener.enterTablePath(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitTablePath) {
             listener.exitTablePath(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTablePath) {
            return visitor.visitTablePath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ViewPathContext extends antlr.ParserRuleContext {
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
    		return this.getTokens(FlinkSqlParser.DOT);
    	} else {
    		return this.getToken(FlinkSqlParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_viewPath;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterViewPath) {
             listener.enterViewPath(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitViewPath) {
             listener.exitViewPath(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitViewPath) {
            return visitor.visitViewPath(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ViewPathCreateContext extends antlr.ParserRuleContext {
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
    		return this.getTokens(FlinkSqlParser.DOT);
    	} else {
    		return this.getToken(FlinkSqlParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_viewPathCreate;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterViewPathCreate) {
             listener.enterViewPathCreate(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitViewPathCreate) {
             listener.exitViewPathCreate(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitViewPathCreate) {
            return visitor.visitViewPathCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UidContext extends antlr.ParserRuleContext {
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
    		return this.getTokens(FlinkSqlParser.DOT);
    	} else {
    		return this.getToken(FlinkSqlParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_uid;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterUid) {
             listener.enterUid(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitUid) {
             listener.exitUid(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitUid) {
            return visitor.visitUid(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WithOptionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WITH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WITH, 0)!;
    }
    public tablePropertyList(): TablePropertyListContext {
        return this.getRuleContext(0, TablePropertyListContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_withOption;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterWithOption) {
             listener.enterWithOption(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitWithOption) {
             listener.exitWithOption(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWithOption) {
            return visitor.visitWithOption(this);
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
        return this.getToken(FlinkSqlParser.KW_IF, 0)!;
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NOT, 0)!;
    }
    public KW_EXISTS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXISTS, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_ifNotExists;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterIfNotExists) {
             listener.enterIfNotExists(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitIfNotExists) {
             listener.exitIfNotExists(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitIfNotExists) {
            return visitor.visitIfNotExists(this);
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
        return this.getToken(FlinkSqlParser.KW_IF, 0)!;
    }
    public KW_EXISTS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXISTS, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_ifExists;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterIfExists) {
             listener.enterIfExists(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitIfExists) {
             listener.exitIfExists(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitIfExists) {
            return visitor.visitIfExists(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TablePropertyListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public tableProperty(): TablePropertyContext[];
    public tableProperty(i: number): TablePropertyContext | null;
    public tableProperty(i?: number): TablePropertyContext[] | TablePropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TablePropertyContext);
        }

        return this.getRuleContext(i, TablePropertyContext);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.COMMA);
    	} else {
    		return this.getToken(FlinkSqlParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tablePropertyList;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterTablePropertyList) {
             listener.enterTablePropertyList(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitTablePropertyList) {
             listener.exitTablePropertyList(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTablePropertyList) {
            return visitor.visitTablePropertyList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TablePropertyContext extends antlr.ParserRuleContext {
    public _key?: TablePropertyKeyContext;
    public _value?: TablePropertyValueContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tablePropertyKey(): TablePropertyKeyContext {
        return this.getRuleContext(0, TablePropertyKeyContext)!;
    }
    public tablePropertyValue(): TablePropertyValueContext | null {
        return this.getRuleContext(0, TablePropertyValueContext);
    }
    public EQUAL_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.EQUAL_SYMBOL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tableProperty;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterTableProperty) {
             listener.enterTableProperty(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitTableProperty) {
             listener.exitTableProperty(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTableProperty) {
            return visitor.visitTableProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TablePropertyKeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public dereferenceDefinition(): DereferenceDefinitionContext | null {
        return this.getRuleContext(0, DereferenceDefinitionContext);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tablePropertyKey;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterTablePropertyKey) {
             listener.enterTablePropertyKey(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitTablePropertyKey) {
             listener.exitTablePropertyKey(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTablePropertyKey) {
            return visitor.visitTablePropertyKey(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TablePropertyValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DIG_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
    }
    public REAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.REAL_LITERAL, 0);
    }
    public booleanLiteral(): BooleanLiteralContext | null {
        return this.getRuleContext(0, BooleanLiteralContext);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tablePropertyValue;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterTablePropertyValue) {
             listener.enterTablePropertyValue(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitTablePropertyValue) {
             listener.exitTablePropertyValue(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTablePropertyValue) {
            return visitor.visitTablePropertyValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogicalOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_AND, 0);
    }
    public BIT_AND_OP(): antlr.TerminalNode[];
    public BIT_AND_OP(i: number): antlr.TerminalNode | null;
    public BIT_AND_OP(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.BIT_AND_OP);
    	} else {
    		return this.getToken(FlinkSqlParser.BIT_AND_OP, i);
    	}
    }
    public KW_OR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_OR, 0);
    }
    public BIT_OR_OP(): antlr.TerminalNode[];
    public BIT_OR_OP(i: number): antlr.TerminalNode | null;
    public BIT_OR_OP(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.BIT_OR_OP);
    	} else {
    		return this.getToken(FlinkSqlParser.BIT_OR_OP, i);
    	}
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_logicalOperator;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterLogicalOperator) {
             listener.enterLogicalOperator(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitLogicalOperator) {
             listener.exitLogicalOperator(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalOperator) {
            return visitor.visitLogicalOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComparisonOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQUAL_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.EQUAL_SYMBOL, 0);
    }
    public GREATER_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0);
    }
    public LESS_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0);
    }
    public EXCLAMATION_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.EXCLAMATION_SYMBOL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_comparisonOperator;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterComparisonOperator) {
             listener.enterComparisonOperator(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitComparisonOperator) {
             listener.exitComparisonOperator(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitComparisonOperator) {
            return visitor.visitComparisonOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BitOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LESS_SYMBOL(): antlr.TerminalNode[];
    public LESS_SYMBOL(i: number): antlr.TerminalNode | null;
    public LESS_SYMBOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.LESS_SYMBOL);
    	} else {
    		return this.getToken(FlinkSqlParser.LESS_SYMBOL, i);
    	}
    }
    public GREATER_SYMBOL(): antlr.TerminalNode[];
    public GREATER_SYMBOL(i: number): antlr.TerminalNode | null;
    public GREATER_SYMBOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(FlinkSqlParser.GREATER_SYMBOL);
    	} else {
    		return this.getToken(FlinkSqlParser.GREATER_SYMBOL, i);
    	}
    }
    public BIT_AND_OP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.BIT_AND_OP, 0);
    }
    public BIT_XOR_OP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.BIT_XOR_OP, 0);
    }
    public BIT_OR_OP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.BIT_OR_OP, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_bitOperator;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterBitOperator) {
             listener.enterBitOperator(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitBitOperator) {
             listener.exitBitOperator(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitBitOperator) {
            return visitor.visitBitOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MathOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ASTERISK_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
    }
    public SLASH_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.SLASH_SIGN, 0);
    }
    public PERCENT_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.PERCENT_SIGN, 0);
    }
    public KW_DIV(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DIV, 0);
    }
    public ADD_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    public HYPHEN_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.HYPHEN_SIGN, 0);
    }
    public DOUBLE_HYPHEN_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.DOUBLE_HYPHEN_SIGN, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_mathOperator;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterMathOperator) {
             listener.enterMathOperator(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitMathOperator) {
             listener.exitMathOperator(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitMathOperator) {
            return visitor.visitMathOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnaryOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXCLAMATION_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.EXCLAMATION_SYMBOL, 0);
    }
    public BIT_NOT_OP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.BIT_NOT_OP, 0);
    }
    public ADD_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    public HYPHEN_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.HYPHEN_SIGN, 0);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_unaryOperator;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterUnaryOperator) {
             listener.enterUnaryOperator(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitUnaryOperator) {
             listener.exitUnaryOperator(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitUnaryOperator) {
            return visitor.visitUnaryOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstantContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext | null {
        return this.getRuleContext(0, TimeIntervalExpressionContext);
    }
    public timePointLiteral(): TimePointLiteralContext | null {
        return this.getRuleContext(0, TimePointLiteralContext);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public decimalLiteral(): DecimalLiteralContext | null {
        return this.getRuleContext(0, DecimalLiteralContext);
    }
    public HYPHEN_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.HYPHEN_SIGN, 0);
    }
    public booleanLiteral(): BooleanLiteralContext | null {
        return this.getRuleContext(0, BooleanLiteralContext);
    }
    public REAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.REAL_LITERAL, 0);
    }
    public BIT_STRING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.BIT_STRING, 0);
    }
    public KW_NULL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NULL, 0);
    }
    public KW_NOT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_constant;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterConstant) {
             listener.enterConstant(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitConstant) {
             listener.exitConstant(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitConstant) {
            return visitor.visitConstant(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimePointLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public timePointUnit(): TimePointUnitContext {
        return this.getRuleContext(0, TimePointUnitContext)!;
    }
    public stringLiteral(): StringLiteralContext {
        return this.getRuleContext(0, StringLiteralContext)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_timePointLiteral;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterTimePointLiteral) {
             listener.enterTimePointLiteral(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitTimePointLiteral) {
             listener.exitTimePointLiteral(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTimePointLiteral) {
            return visitor.visitTimePointLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StringLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_stringLiteral;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterStringLiteral) {
             listener.enterStringLiteral(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitStringLiteral) {
             listener.exitStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DecimalLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DIG_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.DIG_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_decimalLiteral;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterDecimalLiteral) {
             listener.enterDecimalLiteral(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitDecimalLiteral) {
             listener.exitDecimalLiteral(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitDecimalLiteral) {
            return visitor.visitDecimalLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BooleanLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TRUE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TRUE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FALSE, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_booleanLiteral;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterBooleanLiteral) {
             listener.enterBooleanLiteral(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitBooleanLiteral) {
             listener.exitBooleanLiteral(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitBooleanLiteral) {
            return visitor.visitBooleanLiteral(this);
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
        return this.getToken(FlinkSqlParser.KW_DISTINCT, 0);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_setQuantifier;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterSetQuantifier) {
             listener.enterSetQuantifier(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitSetQuantifier) {
             listener.exitSetQuantifier(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSetQuantifier) {
            return visitor.visitSetQuantifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimePointUnitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_YEAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_YEAR, 0);
    }
    public KW_QUARTER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_QUARTER, 0);
    }
    public KW_MONTH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MONTH, 0);
    }
    public KW_WEEK(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_WEEK, 0);
    }
    public KW_DAY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DAY, 0);
    }
    public KW_HOUR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_HOUR, 0);
    }
    public KW_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MINUTE, 0);
    }
    public KW_SECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SECOND, 0);
    }
    public KW_MILLISECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MILLISECOND, 0);
    }
    public KW_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MICROSECOND, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_timePointUnit;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterTimePointUnit) {
             listener.enterTimePointUnit(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitTimePointUnit) {
             listener.exitTimePointUnit(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTimePointUnit) {
            return visitor.visitTimePointUnit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimeIntervalUnitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_MILLENNIUM(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MILLENNIUM, 0);
    }
    public KW_CENTURY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CENTURY, 0);
    }
    public KW_DECADE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DECADE, 0);
    }
    public KW_YEAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_YEAR, 0);
    }
    public KW_YEARS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_YEARS, 0);
    }
    public KW_QUARTER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_QUARTER, 0);
    }
    public KW_MONTH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MONTH, 0);
    }
    public KW_MONTHS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MONTHS, 0);
    }
    public KW_WEEK(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_WEEK, 0);
    }
    public KW_WEEKS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_WEEKS, 0);
    }
    public KW_DAY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DAY, 0);
    }
    public KW_DAYS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DAYS, 0);
    }
    public KW_HOUR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_HOUR, 0);
    }
    public KW_HOURS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_HOURS, 0);
    }
    public KW_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MINUTE, 0);
    }
    public KW_MINUTES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MINUTES, 0);
    }
    public KW_SECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SECOND, 0);
    }
    public KW_SECONDS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SECONDS, 0);
    }
    public KW_MILLISECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MILLISECOND, 0);
    }
    public KW_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MICROSECOND, 0);
    }
    public KW_NANOSECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NANOSECOND, 0);
    }
    public KW_EPOCH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_EPOCH, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_timeIntervalUnit;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterTimeIntervalUnit) {
             listener.enterTimeIntervalUnit(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitTimeIntervalUnit) {
             listener.exitTimeIntervalUnit(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitTimeIntervalUnit) {
            return visitor.visitTimeIntervalUnit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReservedKeywordsUsedAsFuncParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ARRAY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ARRAY, 0);
    }
    public KW_ALL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    public KW_BOTH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_BOTH, 0);
    }
    public KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CURRENT_TIMESTAMP, 0);
    }
    public KW_CURRENT_DATE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CURRENT_DATE, 0);
    }
    public KW_CURRENT_TIME(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CURRENT_TIME, 0);
    }
    public KW_LOCALTIME(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LOCALTIME, 0);
    }
    public KW_LOCALTIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LOCALTIMESTAMP, 0);
    }
    public KW_DISTINCT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DISTINCT, 0);
    }
    public KW_LEADING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LEADING, 0);
    }
    public KW_TRAILING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TRAILING, 0);
    }
    public KW_VALUE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_VALUE, 0);
    }
    public ASTERISK_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncParam;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterReservedKeywordsUsedAsFuncParam) {
             listener.enterReservedKeywordsUsedAsFuncParam(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitReservedKeywordsUsedAsFuncParam) {
             listener.exitReservedKeywordsUsedAsFuncParam(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitReservedKeywordsUsedAsFuncParam) {
            return visitor.visitReservedKeywordsUsedAsFuncParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReservedKeywordsNoParamsUsedAsFuncNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LOCALTIME(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LOCALTIME, 0);
    }
    public KW_LOCALTIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LOCALTIMESTAMP, 0);
    }
    public KW_CURRENT_TIME(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CURRENT_TIME, 0);
    }
    public KW_CURRENT_DATE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CURRENT_DATE, 0);
    }
    public KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CURRENT_TIMESTAMP, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_reservedKeywordsNoParamsUsedAsFuncName;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterReservedKeywordsNoParamsUsedAsFuncName) {
             listener.enterReservedKeywordsNoParamsUsedAsFuncName(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitReservedKeywordsNoParamsUsedAsFuncName) {
             listener.exitReservedKeywordsNoParamsUsedAsFuncName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitReservedKeywordsNoParamsUsedAsFuncName) {
            return visitor.visitReservedKeywordsNoParamsUsedAsFuncName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReservedKeywordsFollowParamsUsedAsFuncNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DATE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DATE, 0);
    }
    public KW_TIME(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TIME, 0);
    }
    public KW_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TIMESTAMP, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_reservedKeywordsFollowParamsUsedAsFuncName;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterReservedKeywordsFollowParamsUsedAsFuncName) {
             listener.enterReservedKeywordsFollowParamsUsedAsFuncName(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitReservedKeywordsFollowParamsUsedAsFuncName) {
             listener.exitReservedKeywordsFollowParamsUsedAsFuncName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitReservedKeywordsFollowParamsUsedAsFuncName) {
            return visitor.visitReservedKeywordsFollowParamsUsedAsFuncName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReservedKeywordsUsedAsFuncNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ABS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ABS, 0);
    }
    public KW_ARRAY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ARRAY, 0);
    }
    public KW_AVG(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_AVG, 0);
    }
    public KW_CARDINALITY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CARDINALITY, 0);
    }
    public KW_CAST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CAST, 0);
    }
    public KW_CEIL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CEIL, 0);
    }
    public KW_CEILING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CEILING, 0);
    }
    public KW_COALESCE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_COALESCE, 0);
    }
    public KW_COLLECT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_COLLECT, 0);
    }
    public KW_COUNT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_COUNT, 0);
    }
    public KW_CUME_DIST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CUME_DIST, 0);
    }
    public KW_DAYOFWEEK(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DAYOFWEEK, 0);
    }
    public KW_DAYOFYEAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DAYOFYEAR, 0);
    }
    public KW_DENSE_RANK(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DENSE_RANK, 0);
    }
    public KW_ELEMENT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ELEMENT, 0);
    }
    public KW_EXP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_EXP, 0);
    }
    public KW_EXTRACT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_EXTRACT, 0);
    }
    public KW_FIRST_VALUE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FIRST_VALUE, 0);
    }
    public KW_FLOOR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FLOOR, 0);
    }
    public KW_GROUPING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_GROUPING, 0);
    }
    public KW_HOUR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_HOUR, 0);
    }
    public KW_IF(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_IF, 0);
    }
    public KW_LAG(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LAG, 0);
    }
    public KW_LAST_VALUE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LAST_VALUE, 0);
    }
    public KW_LEAD(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LEAD, 0);
    }
    public KW_LEFT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LEFT, 0);
    }
    public KW_LN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LN, 0);
    }
    public KW_LOWER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LOWER, 0);
    }
    public KW_MAP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MAP, 0);
    }
    public KW_MAX(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MAX, 0);
    }
    public KW_MIN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MIN, 0);
    }
    public KW_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MINUTE, 0);
    }
    public KW_MOD(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MOD, 0);
    }
    public KW_MONTH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MONTH, 0);
    }
    public KW_NULLIF(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NULLIF, 0);
    }
    public KW_NTILE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NTILE, 0);
    }
    public KW_OVERLAY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_OVERLAY, 0);
    }
    public KW_PERCENT_RANK(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PERCENT_RANK, 0);
    }
    public KW_POSITION(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_POSITION, 0);
    }
    public KW_POWER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_POWER, 0);
    }
    public KW_QUARTER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_QUARTER, 0);
    }
    public KW_ROW(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ROW, 0);
    }
    public KW_ROWS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ROWS, 0);
    }
    public KW_ROW_NUMBER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ROW_NUMBER, 0);
    }
    public KW_RANK(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_RANK, 0);
    }
    public KW_RIGHT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_RIGHT, 0);
    }
    public KW_SECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SECOND, 0);
    }
    public KW_STDDEV_POP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_STDDEV_POP, 0);
    }
    public KW_STDDEV_SAMP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_STDDEV_SAMP, 0);
    }
    public KW_SUBSTRING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SUBSTRING, 0);
    }
    public KW_SUM(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SUM, 0);
    }
    public KW_TIMESTAMP_DIFF(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TIMESTAMP_DIFF, 0);
    }
    public KW_TRIM(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TRIM, 0);
    }
    public KW_TRUNCATE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TRUNCATE, 0);
    }
    public KW_TRY_CAST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TRY_CAST, 0);
    }
    public KW_UPPER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_UPPER, 0);
    }
    public KW_VAR_POP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_VAR_POP, 0);
    }
    public KW_VAR_SAMP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_VAR_SAMP, 0);
    }
    public KW_WEEK(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_WEEK, 0);
    }
    public KW_YEAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_YEAR, 0);
    }
    public KW_JSON_VALUE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_JSON_VALUE, 0);
    }
    public KW_JSON_EXISTS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_JSON_EXISTS, 0);
    }
    public KW_JSON_QUERY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_JSON_QUERY, 0);
    }
    public KW_JSON_OBJECT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_JSON_OBJECT, 0);
    }
    public KW_JSON_OBJECTAGG(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_JSON_OBJECTAGG, 0);
    }
    public KW_JSON_ARRAY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_JSON_ARRAY, 0);
    }
    public KW_JSON_ARRAYAGG(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_JSON_ARRAYAGG, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncName;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterReservedKeywordsUsedAsFuncName) {
             listener.enterReservedKeywordsUsedAsFuncName(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitReservedKeywordsUsedAsFuncName) {
             listener.exitReservedKeywordsUsedAsFuncName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitReservedKeywordsUsedAsFuncName) {
            return visitor.visitReservedKeywordsUsedAsFuncName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NonReservedKeywordsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ADD(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ADD, 0);
    }
    public KW_AFTER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_AFTER, 0);
    }
    public KW_ASC(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ASC, 0);
    }
    public KW_CASCADE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CASCADE, 0);
    }
    public KW_CATALOG(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CATALOG, 0);
    }
    public KW_CENTURY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CENTURY, 0);
    }
    public KW_CONFIG(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CONFIG, 0);
    }
    public KW_CONSTRAINTS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CONSTRAINTS, 0);
    }
    public KW_CUMULATE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_CUMULATE, 0);
    }
    public KW_DATA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DATA, 0);
    }
    public KW_DATABASE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DATABASE, 0);
    }
    public KW_DAYS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DAYS, 0);
    }
    public KW_DECADE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DECADE, 0);
    }
    public KW_DESC(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DESC, 0);
    }
    public KW_DESCRIPTOR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DESCRIPTOR, 0);
    }
    public KW_DIV(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DIV, 0);
    }
    public KW_ENGINE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ENGINE, 0);
    }
    public KW_EPOCH(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_EPOCH, 0);
    }
    public KW_EXCLUDING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_EXCLUDING, 0);
    }
    public KW_FILE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FILE, 0);
    }
    public KW_FIRST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_FIRST, 0);
    }
    public KW_GENERATED(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_GENERATED, 0);
    }
    public KW_HOP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_HOP, 0);
    }
    public KW_HOURS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_HOURS, 0);
    }
    public KW_IGNORE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_IGNORE, 0);
    }
    public KW_INCLUDING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_INCLUDING, 0);
    }
    public KW_JAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_JAR, 0);
    }
    public KW_JARS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_JARS, 0);
    }
    public KW_JAVA(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_JAVA, 0);
    }
    public KW_KEY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_KEY, 0);
    }
    public KW_LAST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LAST, 0);
    }
    public KW_LOAD(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_LOAD, 0);
    }
    public KW_MAP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MAP, 0);
    }
    public KW_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MICROSECOND, 0);
    }
    public KW_MILLENNIUM(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MILLENNIUM, 0);
    }
    public KW_MILLISECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MILLISECOND, 0);
    }
    public KW_MINUTES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MINUTES, 0);
    }
    public KW_MONTHS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_MONTHS, 0);
    }
    public KW_NANOSECOND(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NANOSECOND, 0);
    }
    public KW_NULLS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_NULLS, 0);
    }
    public KW_OPTIONS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_OPTIONS, 0);
    }
    public KW_PAST(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PAST, 0);
    }
    public KW_PLAN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PLAN, 0);
    }
    public KW_PRECEDING(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PRECEDING, 0);
    }
    public KW_PYTHON(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PYTHON, 0);
    }
    public KW_PYTHON_ARCHIVES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PYTHON_ARCHIVES, 0);
    }
    public KW_PYTHON_DEPENDENCIES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PYTHON_DEPENDENCIES, 0);
    }
    public KW_PYTHON_FILES(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PYTHON_FILES, 0);
    }
    public KW_PYTHON_JAR(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PYTHON_JAR, 0);
    }
    public KW_PYTHON_PARAMETER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PYTHON_PARAMETER, 0);
    }
    public KW_PYTHON_REQUIREMENTS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_PYTHON_REQUIREMENTS, 0);
    }
    public KW_QUARTER(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_QUARTER, 0);
    }
    public KW_REMOVE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_REMOVE, 0);
    }
    public KW_RESTRICT(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_RESTRICT, 0);
    }
    public KW_SECONDS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SECONDS, 0);
    }
    public KW_SESSION(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SESSION, 0);
    }
    public KW_SETS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SETS, 0);
    }
    public KW_SIZE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SIZE, 0);
    }
    public KW_SLIDE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_SLIDE, 0);
    }
    public KW_STEP(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_STEP, 0);
    }
    public KW_TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    public KW_TIMECOL(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TIMECOL, 0);
    }
    public KW_TUMBLE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_TUMBLE, 0);
    }
    public KW_UNLOAD(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_UNLOAD, 0);
    }
    public KW_VIEW(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_VIEW, 0);
    }
    public KW_WEEK(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_WEEK, 0);
    }
    public KW_YEARS(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_YEARS, 0);
    }
    public KW_ZONE(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_ZONE, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_nonReservedKeywords;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterNonReservedKeywords) {
             listener.enterNonReservedKeywords(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitNonReservedKeywords) {
             listener.exitNonReservedKeywords(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitNonReservedKeywords) {
            return visitor.visitNonReservedKeywords(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
