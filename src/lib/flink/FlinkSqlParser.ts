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
    public static readonly KW_JSON = 186;
    public static readonly KW_JSON_ARRAY = 187;
    public static readonly KW_JSON_ARRAYAGG = 188;
    public static readonly KW_JSON_EXECUTION_PLAN = 189;
    public static readonly KW_JSON_EXISTS = 190;
    public static readonly KW_JSON_OBJECT = 191;
    public static readonly KW_JSON_OBJECTAGG = 192;
    public static readonly KW_JSON_QUERY = 193;
    public static readonly KW_JSON_VALUE = 194;
    public static readonly KW_LAG = 195;
    public static readonly KW_LANGUAGE = 196;
    public static readonly KW_LARGE = 197;
    public static readonly KW_LAST_VALUE = 198;
    public static readonly KW_LATERAL = 199;
    public static readonly KW_LEAD = 200;
    public static readonly KW_LEADING = 201;
    public static readonly KW_LEFT = 202;
    public static readonly KW_LIKE = 203;
    public static readonly KW_LIKE_REGEX = 204;
    public static readonly KW_LIMIT = 205;
    public static readonly KW_LN = 206;
    public static readonly KW_LOCAL = 207;
    public static readonly KW_LOCALTIME = 208;
    public static readonly KW_LOCALTIMESTAMP = 209;
    public static readonly KW_LOWER = 210;
    public static readonly KW_MATCH = 211;
    public static readonly KW_MATCHES = 212;
    public static readonly KW_MATCH_NUMBER = 213;
    public static readonly KW_MATCH_RECOGNIZE = 214;
    public static readonly KW_MAX = 215;
    public static readonly KW_MEASURES = 216;
    public static readonly KW_MEMBER = 217;
    public static readonly KW_MERGE = 218;
    public static readonly KW_METADATA = 219;
    public static readonly KW_METHOD = 220;
    public static readonly KW_MIN = 221;
    public static readonly KW_MINUS = 222;
    public static readonly KW_MINUTE = 223;
    public static readonly KW_MOD = 224;
    public static readonly KW_MODIFIES = 225;
    public static readonly KW_MODIFY = 226;
    public static readonly KW_MODULE = 227;
    public static readonly KW_MODULES = 228;
    public static readonly KW_MONDAY = 229;
    public static readonly KW_MONTH = 230;
    public static readonly KW_MORE = 231;
    public static readonly KW_MULTISET = 232;
    public static readonly KW_NATIONAL = 233;
    public static readonly KW_NATURAL = 234;
    public static readonly KW_NCHAR = 235;
    public static readonly KW_NCLOB = 236;
    public static readonly KW_NEW = 237;
    public static readonly KW_NEXT = 238;
    public static readonly KW_NO = 239;
    public static readonly KW_NONE = 240;
    public static readonly KW_NORMALIZE = 241;
    public static readonly KW_NOT = 242;
    public static readonly KW_NTH_VALUE = 243;
    public static readonly KW_NTILE = 244;
    public static readonly KW_NULL = 245;
    public static readonly KW_NULLIF = 246;
    public static readonly KW_NUMERIC = 247;
    public static readonly KW_OCCURRENCES_REGEX = 248;
    public static readonly KW_OCTET_LENGTH = 249;
    public static readonly KW_OF = 250;
    public static readonly KW_OFFSET = 251;
    public static readonly KW_OLD = 252;
    public static readonly KW_OMIT = 253;
    public static readonly KW_ON = 254;
    public static readonly KW_ONE = 255;
    public static readonly KW_ONLY = 256;
    public static readonly KW_OPEN = 257;
    public static readonly KW_OR = 258;
    public static readonly KW_ORDER = 259;
    public static readonly KW_ORDINAL = 260;
    public static readonly KW_OUT = 261;
    public static readonly KW_OUTER = 262;
    public static readonly KW_OVER = 263;
    public static readonly KW_OVERLAPS = 264;
    public static readonly KW_OVERLAY = 265;
    public static readonly KW_OVERWRITE = 266;
    public static readonly KW_OVERWRITING = 267;
    public static readonly KW_PARAMETER = 268;
    public static readonly KW_PARTITION = 269;
    public static readonly KW_PARTITIONED = 270;
    public static readonly KW_PARTITIONS = 271;
    public static readonly KW_PATTERN = 272;
    public static readonly KW_PER = 273;
    public static readonly KW_PERCENT = 274;
    public static readonly KW_PERCENTILE_CONT = 275;
    public static readonly KW_PERCENTILE_DISC = 276;
    public static readonly KW_PERCENT_RANK = 277;
    public static readonly KW_PERIOD = 278;
    public static readonly KW_PERMUTE = 279;
    public static readonly KW_PIVOT = 280;
    public static readonly KW_PORTION = 281;
    public static readonly KW_POSITION = 282;
    public static readonly KW_POSITION_REGEX = 283;
    public static readonly KW_POWER = 284;
    public static readonly KW_PRECEDES = 285;
    public static readonly KW_PRECISION = 286;
    public static readonly KW_PREPARE = 287;
    public static readonly KW_PREV = 288;
    public static readonly KW_PRIMARY = 289;
    public static readonly KW_PROCEDURE = 290;
    public static readonly KW_QUALIFY = 291;
    public static readonly KW_QUARTERS = 292;
    public static readonly KW_RANGE = 293;
    public static readonly KW_RANK = 294;
    public static readonly KW_RAW = 295;
    public static readonly KW_READS = 296;
    public static readonly KW_REAL = 297;
    public static readonly KW_RECURSIVE = 298;
    public static readonly KW_REF = 299;
    public static readonly KW_REFERENCES = 300;
    public static readonly KW_REFERENCING = 301;
    public static readonly KW_REGR_AVGX = 302;
    public static readonly KW_REGR_AVGY = 303;
    public static readonly KW_REGR_COUNT = 304;
    public static readonly KW_REGR_INTERCEPT = 305;
    public static readonly KW_REGR_R2 = 306;
    public static readonly KW_REGR_SLOPE = 307;
    public static readonly KW_REGR_SXX = 308;
    public static readonly KW_REGR_SXY = 309;
    public static readonly KW_REGR_SYY = 310;
    public static readonly KW_RELEASE = 311;
    public static readonly KW_RENAME = 312;
    public static readonly KW_RESET = 313;
    public static readonly KW_RESULT = 314;
    public static readonly KW_RETURN = 315;
    public static readonly KW_RETURNS = 316;
    public static readonly KW_REVOKE = 317;
    public static readonly KW_RIGHT = 318;
    public static readonly KW_RLIKE = 319;
    public static readonly KW_ROLLBACK = 320;
    public static readonly KW_ROLLUP = 321;
    public static readonly KW_ROW = 322;
    public static readonly KW_ROWS = 323;
    public static readonly KW_ROW_NUMBER = 324;
    public static readonly KW_RUNNING = 325;
    public static readonly KW_SAFE_CAST = 326;
    public static readonly KW_SAFE_OFFSET = 327;
    public static readonly KW_SAFE_ORDINAL = 328;
    public static readonly KW_SATURDAY = 329;
    public static readonly KW_SAVEPOINT = 330;
    public static readonly KW_SCALA = 331;
    public static readonly KW_SCOPE = 332;
    public static readonly KW_SCROLL = 333;
    public static readonly KW_SEARCH = 334;
    public static readonly KW_SECOND = 335;
    public static readonly KW_SEEK = 336;
    public static readonly KW_SELECT = 337;
    public static readonly KW_SENSITIVE = 338;
    public static readonly KW_SEPARATOR = 339;
    public static readonly KW_SESSION_USER = 340;
    public static readonly KW_SET = 341;
    public static readonly KW_SHOW = 342;
    public static readonly KW_SIMILAR = 343;
    public static readonly KW_SKIP = 344;
    public static readonly KW_SMALLINT = 345;
    public static readonly KW_SOME = 346;
    public static readonly KW_SPECIFIC = 347;
    public static readonly KW_SPECIFICTYPE = 348;
    public static readonly KW_SQL = 349;
    public static readonly KW_SQLEXCEPTION = 350;
    public static readonly KW_SQLSTATE = 351;
    public static readonly KW_SQLWARNING = 352;
    public static readonly KW_SQRT = 353;
    public static readonly KW_START = 354;
    public static readonly KW_STATEMENT = 355;
    public static readonly KW_STATIC = 356;
    public static readonly KW_STATISTICS = 357;
    public static readonly KW_STDDEV_POP = 358;
    public static readonly KW_STDDEV_SAMP = 359;
    public static readonly KW_STREAM = 360;
    public static readonly KW_STRING = 361;
    public static readonly KW_STRING_AGG = 362;
    public static readonly KW_SUBMULTISET = 363;
    public static readonly KW_SUBSET = 364;
    public static readonly KW_SUBSTRING = 365;
    public static readonly KW_SUBSTRING_REGEX = 366;
    public static readonly KW_SUCCEEDS = 367;
    public static readonly KW_SUM = 368;
    public static readonly KW_SUNDAY = 369;
    public static readonly KW_SYMMETRIC = 370;
    public static readonly KW_SYSTEM = 371;
    public static readonly KW_SYSTEM_TIME = 372;
    public static readonly KW_SYSTEM_USER = 373;
    public static readonly KW_TABLE = 374;
    public static readonly KW_TABLES = 375;
    public static readonly KW_TABLESAMPLE = 376;
    public static readonly KW_THEN = 377;
    public static readonly KW_THURSDAY = 378;
    public static readonly KW_TIME = 379;
    public static readonly KW_TIMESTAMP = 380;
    public static readonly KW_TIMESTAMP_DIFF = 381;
    public static readonly KW_TIMESTAMP_LTZ = 382;
    public static readonly KW_TIMESTAMP_TRUNC = 383;
    public static readonly KW_TIMEZONE_HOUR = 384;
    public static readonly KW_TIMEZONE_MINUTE = 385;
    public static readonly KW_TIME_DIFF = 386;
    public static readonly KW_TIME_TRUNC = 387;
    public static readonly KW_TINYINT = 388;
    public static readonly KW_TO = 389;
    public static readonly KW_TRAILING = 390;
    public static readonly KW_TRANSLATE = 391;
    public static readonly KW_TRANSLATE_REGEX = 392;
    public static readonly KW_TRANSLATION = 393;
    public static readonly KW_TREAT = 394;
    public static readonly KW_TRIGGER = 395;
    public static readonly KW_TRIM = 396;
    public static readonly KW_TRIM_ARRAY = 397;
    public static readonly KW_TRUE = 398;
    public static readonly KW_TRUNCATE = 399;
    public static readonly KW_TRY_CAST = 400;
    public static readonly KW_TUESDAY = 401;
    public static readonly KW_UESCAPE = 402;
    public static readonly KW_UNION = 403;
    public static readonly KW_UNIQUE = 404;
    public static readonly KW_UNKNOWN = 405;
    public static readonly KW_UNNEST = 406;
    public static readonly KW_UNPIVOT = 407;
    public static readonly KW_UPDATE = 408;
    public static readonly KW_UPPER = 409;
    public static readonly KW_UPSERT = 410;
    public static readonly KW_USE = 411;
    public static readonly KW_USER = 412;
    public static readonly KW_USING = 413;
    public static readonly KW_VALUE = 414;
    public static readonly KW_VALUES = 415;
    public static readonly KW_VALUE_OF = 416;
    public static readonly KW_VARBINARY = 417;
    public static readonly KW_VARCHAR = 418;
    public static readonly KW_VARYING = 419;
    public static readonly KW_VAR_POP = 420;
    public static readonly KW_VAR_SAMP = 421;
    public static readonly KW_VERSIONING = 422;
    public static readonly KW_VIEWS = 423;
    public static readonly KW_VIRTUAL = 424;
    public static readonly KW_WATERMARK = 425;
    public static readonly KW_WATERMARKS = 426;
    public static readonly KW_WEDNESDAY = 427;
    public static readonly KW_WEEKS = 428;
    public static readonly KW_WHEN = 429;
    public static readonly KW_WHENEVER = 430;
    public static readonly KW_WHERE = 431;
    public static readonly KW_WIDTH_BUCKET = 432;
    public static readonly KW_WINDOW = 433;
    public static readonly KW_WITH = 434;
    public static readonly KW_WITHIN = 435;
    public static readonly KW_WITHOUT = 436;
    public static readonly KW_YEAR = 437;
    public static readonly KW_ADD = 438;
    public static readonly KW_AFTER = 439;
    public static readonly KW_ASC = 440;
    public static readonly KW_CASCADE = 441;
    public static readonly KW_CATALOG = 442;
    public static readonly KW_CENTURY = 443;
    public static readonly KW_CONFIG = 444;
    public static readonly KW_CONSTRAINTS = 445;
    public static readonly KW_CUMULATE = 446;
    public static readonly KW_DATA = 447;
    public static readonly KW_DATABASE = 448;
    public static readonly KW_DAYS = 449;
    public static readonly KW_DECADE = 450;
    public static readonly KW_DESC = 451;
    public static readonly KW_DESCRIPTOR = 452;
    public static readonly KW_DIV = 453;
    public static readonly KW_ENGINE = 454;
    public static readonly KW_EPOCH = 455;
    public static readonly KW_EXCLUDING = 456;
    public static readonly KW_FILE = 457;
    public static readonly KW_FIRST = 458;
    public static readonly KW_GENERATED = 459;
    public static readonly KW_HOP = 460;
    public static readonly KW_HOURS = 461;
    public static readonly KW_IGNORE = 462;
    public static readonly KW_INCLUDING = 463;
    public static readonly KW_JAR = 464;
    public static readonly KW_JARS = 465;
    public static readonly KW_JAVA = 466;
    public static readonly KW_KEY = 467;
    public static readonly KW_LAST = 468;
    public static readonly KW_LOAD = 469;
    public static readonly KW_MAP = 470;
    public static readonly KW_MICROSECOND = 471;
    public static readonly KW_MILLENNIUM = 472;
    public static readonly KW_MILLISECOND = 473;
    public static readonly KW_MINUTES = 474;
    public static readonly KW_MONTHS = 475;
    public static readonly KW_NANOSECOND = 476;
    public static readonly KW_NULLS = 477;
    public static readonly KW_OPTIONS = 478;
    public static readonly KW_PAST = 479;
    public static readonly KW_PLAN = 480;
    public static readonly KW_PRECEDING = 481;
    public static readonly KW_PYTHON = 482;
    public static readonly KW_PYTHON_ARCHIVES = 483;
    public static readonly KW_PYTHON_DEPENDENCIES = 484;
    public static readonly KW_PYTHON_FILES = 485;
    public static readonly KW_PYTHON_JAR = 486;
    public static readonly KW_PYTHON_PARAMETER = 487;
    public static readonly KW_PYTHON_REQUIREMENTS = 488;
    public static readonly KW_QUARTER = 489;
    public static readonly KW_REMOVE = 490;
    public static readonly KW_RESTRICT = 491;
    public static readonly KW_SECONDS = 492;
    public static readonly KW_SESSION = 493;
    public static readonly KW_SETS = 494;
    public static readonly KW_SIZE = 495;
    public static readonly KW_SLIDE = 496;
    public static readonly KW_STEP = 497;
    public static readonly KW_TEMPORARY = 498;
    public static readonly KW_TIMECOL = 499;
    public static readonly KW_TUMBLE = 500;
    public static readonly KW_UNLOAD = 501;
    public static readonly KW_VIEW = 502;
    public static readonly KW_WEEK = 503;
    public static readonly KW_YEARS = 504;
    public static readonly KW_ZONE = 505;
    public static readonly EQUAL_SYMBOL = 506;
    public static readonly GREATER_SYMBOL = 507;
    public static readonly LESS_SYMBOL = 508;
    public static readonly EXCLAMATION_SYMBOL = 509;
    public static readonly BIT_NOT_OP = 510;
    public static readonly BIT_OR_OP = 511;
    public static readonly BIT_AND_OP = 512;
    public static readonly BIT_XOR_OP = 513;
    public static readonly DOT = 514;
    public static readonly LS_BRACKET = 515;
    public static readonly RS_BRACKET = 516;
    public static readonly LR_BRACKET = 517;
    public static readonly RR_BRACKET = 518;
    public static readonly LB_BRACKET = 519;
    public static readonly RB_BRACKET = 520;
    public static readonly COMMA = 521;
    public static readonly SEMICOLON = 522;
    public static readonly AT_SIGN = 523;
    public static readonly SINGLE_QUOTE_SYMB = 524;
    public static readonly DOUBLE_QUOTE_SYMB = 525;
    public static readonly REVERSE_QUOTE_SYMB = 526;
    public static readonly COLON_SYMB = 527;
    public static readonly ASTERISK_SIGN = 528;
    public static readonly UNDERLINE_SIGN = 529;
    public static readonly HYPHEN_SIGN = 530;
    public static readonly ADD_SIGN = 531;
    public static readonly PERCENT_SIGN = 532;
    public static readonly DOUBLE_VERTICAL_SIGN = 533;
    public static readonly DOUBLE_HYPHEN_SIGN = 534;
    public static readonly SLASH_SIGN = 535;
    public static readonly QUESTION_MARK_SIGN = 536;
    public static readonly DOUBLE_RIGHT_ARROW = 537;
    public static readonly STRING_LITERAL = 538;
    public static readonly DIG_LITERAL = 539;
    public static readonly REAL_LITERAL = 540;
    public static readonly BIT_STRING = 541;
    public static readonly ID_LITERAL = 542;
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
    public static readonly RULE_insertMulStatementCompatibility = 77;
    public static readonly RULE_insertMulStatement = 78;
    public static readonly RULE_queryStatement = 79;
    public static readonly RULE_valuesClause = 80;
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
    public static readonly RULE_systemTimePeriod = 92;
    public static readonly RULE_dateTimeExpression = 93;
    public static readonly RULE_inlineDataValueClause = 94;
    public static readonly RULE_windowTVFClause = 95;
    public static readonly RULE_windowTVFExpression = 96;
    public static readonly RULE_windowTVFName = 97;
    public static readonly RULE_windowTVFParam = 98;
    public static readonly RULE_timeIntervalParamName = 99;
    public static readonly RULE_columnDescriptor = 100;
    public static readonly RULE_joinCondition = 101;
    public static readonly RULE_whereClause = 102;
    public static readonly RULE_groupByClause = 103;
    public static readonly RULE_groupItemDefinition = 104;
    public static readonly RULE_groupingSets = 105;
    public static readonly RULE_groupingSetsNotationName = 106;
    public static readonly RULE_groupWindowFunction = 107;
    public static readonly RULE_groupWindowFunctionName = 108;
    public static readonly RULE_timeAttrColumn = 109;
    public static readonly RULE_havingClause = 110;
    public static readonly RULE_windowClause = 111;
    public static readonly RULE_namedWindow = 112;
    public static readonly RULE_windowSpec = 113;
    public static readonly RULE_matchRecognizeClause = 114;
    public static readonly RULE_orderByClause = 115;
    public static readonly RULE_orderItemDefinition = 116;
    public static readonly RULE_limitClause = 117;
    public static readonly RULE_partitionByClause = 118;
    public static readonly RULE_quantifiers = 119;
    public static readonly RULE_measuresClause = 120;
    public static readonly RULE_patternDefinition = 121;
    public static readonly RULE_patternVariable = 122;
    public static readonly RULE_outputMode = 123;
    public static readonly RULE_afterMatchStrategy = 124;
    public static readonly RULE_patternVariablesDefinition = 125;
    public static readonly RULE_windowFrame = 126;
    public static readonly RULE_frameBound = 127;
    public static readonly RULE_withinClause = 128;
    public static readonly RULE_expression = 129;
    public static readonly RULE_booleanExpression = 130;
    public static readonly RULE_predicate = 131;
    public static readonly RULE_likePredicate = 132;
    public static readonly RULE_valueExpression = 133;
    public static readonly RULE_functionCallExpression = 134;
    public static readonly RULE_primaryExpression = 135;
    public static readonly RULE_functionNameCreate = 136;
    public static readonly RULE_functionName = 137;
    public static readonly RULE_functionNameAndParams = 138;
    public static readonly RULE_functionNameWithParams = 139;
    public static readonly RULE_functionParam = 140;
    public static readonly RULE_dereferenceDefinition = 141;
    public static readonly RULE_correlationName = 142;
    public static readonly RULE_qualifiedName = 143;
    public static readonly RULE_timeIntervalExpression = 144;
    public static readonly RULE_errorCapturingMultiUnitsInterval = 145;
    public static readonly RULE_multiUnitsInterval = 146;
    public static readonly RULE_errorCapturingUnitToUnitInterval = 147;
    public static readonly RULE_unitToUnitInterval = 148;
    public static readonly RULE_intervalValue = 149;
    public static readonly RULE_tableAlias = 150;
    public static readonly RULE_errorCapturingIdentifier = 151;
    public static readonly RULE_errorCapturingIdentifierExtra = 152;
    public static readonly RULE_identifierList = 153;
    public static readonly RULE_identifierSeq = 154;
    public static readonly RULE_identifier = 155;
    public static readonly RULE_unquotedIdentifier = 156;
    public static readonly RULE_quotedIdentifier = 157;
    public static readonly RULE_whenClause = 158;
    public static readonly RULE_catalogPath = 159;
    public static readonly RULE_catalogPathCreate = 160;
    public static readonly RULE_databasePath = 161;
    public static readonly RULE_databasePathCreate = 162;
    public static readonly RULE_tablePathCreate = 163;
    public static readonly RULE_tablePath = 164;
    public static readonly RULE_viewPath = 165;
    public static readonly RULE_viewPathCreate = 166;
    public static readonly RULE_uid = 167;
    public static readonly RULE_withOption = 168;
    public static readonly RULE_ifNotExists = 169;
    public static readonly RULE_ifExists = 170;
    public static readonly RULE_tablePropertyList = 171;
    public static readonly RULE_tableProperty = 172;
    public static readonly RULE_tablePropertyKey = 173;
    public static readonly RULE_tablePropertyValue = 174;
    public static readonly RULE_logicalOperator = 175;
    public static readonly RULE_comparisonOperator = 176;
    public static readonly RULE_bitOperator = 177;
    public static readonly RULE_mathOperator = 178;
    public static readonly RULE_unaryOperator = 179;
    public static readonly RULE_constant = 180;
    public static readonly RULE_timePointLiteral = 181;
    public static readonly RULE_stringLiteral = 182;
    public static readonly RULE_decimalLiteral = 183;
    public static readonly RULE_booleanLiteral = 184;
    public static readonly RULE_setQuantifier = 185;
    public static readonly RULE_timePointUnit = 186;
    public static readonly RULE_timeIntervalUnit = 187;
    public static readonly RULE_reservedKeywordsUsedAsFuncParam = 188;
    public static readonly RULE_reservedKeywordsNoParamsUsedAsFuncName = 189;
    public static readonly RULE_reservedKeywordsFollowParamsUsedAsFuncName = 190;
    public static readonly RULE_reservedKeywordsUsedAsFuncName = 191;
    public static readonly RULE_nonReservedKeywords = 192;

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
        "'FETCH'", "'FILTER'", "'FIRST_VALUE'", "'FLOAT'", "'FLOOR'", "'FOR'", 
        "'FOREIGN'", "'FRAME_ROW'", "'FREE'", "'FRIDAY'", "'FROM'", "'FULL'", 
        "'FUNCTION'", "'FUNCTIONS'", "'FUSION'", "'GET'", "'GLOBAL'", "'GRANT'", 
        "'GROUP'", "'GROUPING'", "'GROUPS'", "'GROUP_CONCAT'", "'HAVING'", 
        "'HOLD'", "'HOUR'", "'IDENTITY'", "'IF'", "'ILIKE'", "'IMPORT'", 
        "'IN'", "'INCLUDE'", "'INDICATOR'", "'INITIAL'", "'INNER'", "'INOUT'", 
        "'INSENSITIVE'", "'INSERT'", "'INT'", "'INTEGER'", "'INTERSECT'", 
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
        "'UESCAPE'", "'UNION'", "'UNIQUE'", "'UNKNOWN'", "'UNNEST'", "'UNPIVOT'", 
        "'UPDATE'", "'UPPER'", "'UPSERT'", "'USE'", "'USER'", "'USING'", 
        "'VALUE'", "'VALUES'", "'VALUE_OF'", "'VARBINARY'", "'VARCHAR'", 
        "'VARYING'", "'VAR_POP'", "'VAR_SAMP'", "'VERSIONING'", "'VIEWS'", 
        "'VIRTUAL'", "'WATERMARK'", "'WATERMARKS'", "'WEDNESDAY'", "'WEEKS'", 
        "'WHEN'", "'WHENEVER'", "'WHERE'", "'WIDTH_BUCKET'", "'WINDOW'", 
        "'WITH'", "'WITHIN'", "'WITHOUT'", "'YEAR'", "'ADD'", "'AFTER'", 
        "'ASC'", "'CASCADE'", "'CATALOG'", "'CENTURY'", "'CONFIG'", "'CONSTRAINTS'", 
        "'CUMULATE'", "'DATA'", "'DATABASE'", "'DAYS'", "'DECADE'", "'DESC'", 
        "'DESCRIPTOR'", "'DIV'", "'ENGINE'", "'EPOCH'", "'EXCLUDING'", "'FILE'", 
        "'FIRST'", "'GENERATED'", "'HOP'", "'HOURS'", "'IGNORE'", "'INCLUDING'", 
        "'JAR'", "'JARS'", "'JAVA'", "'KEY'", "'LAST'", "'LOAD'", "'MAP'", 
        "'MICROSECOND'", "'MILLENNIUM'", "'MILLISECOND'", "'MINUTES'", "'MONTHS'", 
        "'NANOSECOND'", "'NULLS'", "'OPTIONS'", "'PAST'", "'PLAN'", "'PRECEDING'", 
        "'PYTHON'", "'PYTHON_ARCHIVES'", "'PYTHON_DEPENDENCIES'", "'PYTHON_FILES'", 
        "'PYTHON_JAR'", "'PYTHON_PARAMETER'", "'PYTHON_REQUIREMENTS'", "'QUARTER'", 
        "'REMOVE'", "'RESTRICT'", "'SECONDS'", "'SESSION'", "'SETS'", "'SIZE'", 
        "'SLIDE'", "'STEP'", "'TEMPORARY'", "'TIMECOL'", "'TUMBLE'", "'UNLOAD'", 
        "'VIEW'", "'WEEK'", "'YEARS'", "'ZONE'", "'='", "'>'", "'<'", "'!'", 
        "'~'", "'|'", "'&'", "'^'", "'.'", "'['", "']'", "'('", "')'", "'{'", 
        "'}'", "','", "';'", "'@'", "'''", "'\"'", "'`'", "':'", "'*'", 
        "'_'", "'-'", "'+'", "'%'", "'||'", "'--'", "'/'", "'?'", "'=>'"
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
        "KW_FOR", "KW_FOREIGN", "KW_FRAME_ROW", "KW_FREE", "KW_FRIDAY", 
        "KW_FROM", "KW_FULL", "KW_FUNCTION", "KW_FUNCTIONS", "KW_FUSION", 
        "KW_GET", "KW_GLOBAL", "KW_GRANT", "KW_GROUP", "KW_GROUPING", "KW_GROUPS", 
        "KW_GROUP_CONCAT", "KW_HAVING", "KW_HOLD", "KW_HOUR", "KW_IDENTITY", 
        "KW_IF", "KW_ILIKE", "KW_IMPORT", "KW_IN", "KW_INCLUDE", "KW_INDICATOR", 
        "KW_INITIAL", "KW_INNER", "KW_INOUT", "KW_INSENSITIVE", "KW_INSERT", 
        "KW_INT", "KW_INTEGER", "KW_INTERSECT", "KW_INTERSECTION", "KW_INTERVAL", 
        "KW_INTO", "KW_IS", "KW_JOIN", "KW_JSON", "KW_JSON_ARRAY", "KW_JSON_ARRAYAGG", 
        "KW_JSON_EXECUTION_PLAN", "KW_JSON_EXISTS", "KW_JSON_OBJECT", "KW_JSON_OBJECTAGG", 
        "KW_JSON_QUERY", "KW_JSON_VALUE", "KW_LAG", "KW_LANGUAGE", "KW_LARGE", 
        "KW_LAST_VALUE", "KW_LATERAL", "KW_LEAD", "KW_LEADING", "KW_LEFT", 
        "KW_LIKE", "KW_LIKE_REGEX", "KW_LIMIT", "KW_LN", "KW_LOCAL", "KW_LOCALTIME", 
        "KW_LOCALTIMESTAMP", "KW_LOWER", "KW_MATCH", "KW_MATCHES", "KW_MATCH_NUMBER", 
        "KW_MATCH_RECOGNIZE", "KW_MAX", "KW_MEASURES", "KW_MEMBER", "KW_MERGE", 
        "KW_METADATA", "KW_METHOD", "KW_MIN", "KW_MINUS", "KW_MINUTE", "KW_MOD", 
        "KW_MODIFIES", "KW_MODIFY", "KW_MODULE", "KW_MODULES", "KW_MONDAY", 
        "KW_MONTH", "KW_MORE", "KW_MULTISET", "KW_NATIONAL", "KW_NATURAL", 
        "KW_NCHAR", "KW_NCLOB", "KW_NEW", "KW_NEXT", "KW_NO", "KW_NONE", 
        "KW_NORMALIZE", "KW_NOT", "KW_NTH_VALUE", "KW_NTILE", "KW_NULL", 
        "KW_NULLIF", "KW_NUMERIC", "KW_OCCURRENCES_REGEX", "KW_OCTET_LENGTH", 
        "KW_OF", "KW_OFFSET", "KW_OLD", "KW_OMIT", "KW_ON", "KW_ONE", "KW_ONLY", 
        "KW_OPEN", "KW_OR", "KW_ORDER", "KW_ORDINAL", "KW_OUT", "KW_OUTER", 
        "KW_OVER", "KW_OVERLAPS", "KW_OVERLAY", "KW_OVERWRITE", "KW_OVERWRITING", 
        "KW_PARAMETER", "KW_PARTITION", "KW_PARTITIONED", "KW_PARTITIONS", 
        "KW_PATTERN", "KW_PER", "KW_PERCENT", "KW_PERCENTILE_CONT", "KW_PERCENTILE_DISC", 
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
        "KW_TRUNCATE", "KW_TRY_CAST", "KW_TUESDAY", "KW_UESCAPE", "KW_UNION", 
        "KW_UNIQUE", "KW_UNKNOWN", "KW_UNNEST", "KW_UNPIVOT", "KW_UPDATE", 
        "KW_UPPER", "KW_UPSERT", "KW_USE", "KW_USER", "KW_USING", "KW_VALUE", 
        "KW_VALUES", "KW_VALUE_OF", "KW_VARBINARY", "KW_VARCHAR", "KW_VARYING", 
        "KW_VAR_POP", "KW_VAR_SAMP", "KW_VERSIONING", "KW_VIEWS", "KW_VIRTUAL", 
        "KW_WATERMARK", "KW_WATERMARKS", "KW_WEDNESDAY", "KW_WEEKS", "KW_WHEN", 
        "KW_WHENEVER", "KW_WHERE", "KW_WIDTH_BUCKET", "KW_WINDOW", "KW_WITH", 
        "KW_WITHIN", "KW_WITHOUT", "KW_YEAR", "KW_ADD", "KW_AFTER", "KW_ASC", 
        "KW_CASCADE", "KW_CATALOG", "KW_CENTURY", "KW_CONFIG", "KW_CONSTRAINTS", 
        "KW_CUMULATE", "KW_DATA", "KW_DATABASE", "KW_DAYS", "KW_DECADE", 
        "KW_DESC", "KW_DESCRIPTOR", "KW_DIV", "KW_ENGINE", "KW_EPOCH", "KW_EXCLUDING", 
        "KW_FILE", "KW_FIRST", "KW_GENERATED", "KW_HOP", "KW_HOURS", "KW_IGNORE", 
        "KW_INCLUDING", "KW_JAR", "KW_JARS", "KW_JAVA", "KW_KEY", "KW_LAST", 
        "KW_LOAD", "KW_MAP", "KW_MICROSECOND", "KW_MILLENNIUM", "KW_MILLISECOND", 
        "KW_MINUTES", "KW_MONTHS", "KW_NANOSECOND", "KW_NULLS", "KW_OPTIONS", 
        "KW_PAST", "KW_PLAN", "KW_PRECEDING", "KW_PYTHON", "KW_PYTHON_ARCHIVES", 
        "KW_PYTHON_DEPENDENCIES", "KW_PYTHON_FILES", "KW_PYTHON_JAR", "KW_PYTHON_PARAMETER", 
        "KW_PYTHON_REQUIREMENTS", "KW_QUARTER", "KW_REMOVE", "KW_RESTRICT", 
        "KW_SECONDS", "KW_SESSION", "KW_SETS", "KW_SIZE", "KW_SLIDE", "KW_STEP", 
        "KW_TEMPORARY", "KW_TIMECOL", "KW_TUMBLE", "KW_UNLOAD", "KW_VIEW", 
        "KW_WEEK", "KW_YEARS", "KW_ZONE", "EQUAL_SYMBOL", "GREATER_SYMBOL", 
        "LESS_SYMBOL", "EXCLAMATION_SYMBOL", "BIT_NOT_OP", "BIT_OR_OP", 
        "BIT_AND_OP", "BIT_XOR_OP", "DOT", "LS_BRACKET", "RS_BRACKET", "LR_BRACKET", 
        "RR_BRACKET", "LB_BRACKET", "RB_BRACKET", "COMMA", "SEMICOLON", 
        "AT_SIGN", "SINGLE_QUOTE_SYMB", "DOUBLE_QUOTE_SYMB", "REVERSE_QUOTE_SYMB", 
        "COLON_SYMB", "ASTERISK_SIGN", "UNDERLINE_SIGN", "HYPHEN_SIGN", 
        "ADD_SIGN", "PERCENT_SIGN", "DOUBLE_VERTICAL_SIGN", "DOUBLE_HYPHEN_SIGN", 
        "SLASH_SIGN", "QUESTION_MARK_SIGN", "DOUBLE_RIGHT_ARROW", "STRING_LITERAL", 
        "DIG_LITERAL", "REAL_LITERAL", "BIT_STRING", "ID_LITERAL"
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
        "valuesDefinition", "valuesRowDefinition", "insertMulStatementCompatibility", 
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
        "windowFrame", "frameBound", "withinClause", "expression", "booleanExpression", 
        "predicate", "likePredicate", "valueExpression", "functionCallExpression", 
        "primaryExpression", "functionNameCreate", "functionName", "functionNameAndParams", 
        "functionNameWithParams", "functionParam", "dereferenceDefinition", 
        "correlationName", "qualifiedName", "timeIntervalExpression", "errorCapturingMultiUnitsInterval", 
        "multiUnitsInterval", "errorCapturingUnitToUnitInterval", "unitToUnitInterval", 
        "intervalValue", "tableAlias", "errorCapturingIdentifier", "errorCapturingIdentifierExtra", 
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
            this.state = 389;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 8 || _la === 24 || _la === 72 || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & 75497601) !== 0) || _la === 177 || ((((_la - 313)) & ~0x1F) === 0 && ((1 << (_la - 313)) & 822083585) !== 0) || ((((_la - 411)) & ~0x1F) === 0 && ((1 << (_la - 411)) & 142606353) !== 0) || _la === 451 || _la === 469 || ((((_la - 490)) & ~0x1F) === 0 && ((1 << (_la - 490)) & 134219777) !== 0) || _la === 522) {
                {
                {
                this.state = 386;
                this.singleStatement();
                }
                }
                this.state = 391;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 392;
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
            this.state = 399;
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
                this.state = 394;
                this.sqlStatement();
                this.state = 396;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
                case 1:
                    {
                    this.state = 395;
                    this.match(FlinkSqlParser.SEMICOLON);
                    }
                    break;
                }
                }
                break;
            case FlinkSqlParser.SEMICOLON:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 398;
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
            this.state = 413;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 401;
                this.ddlStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 402;
                this.dmlStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 403;
                this.describeStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 404;
                this.explainStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 405;
                this.useStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 406;
                this.showStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 407;
                this.loadStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 408;
                this.unloadStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 409;
                this.setStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 410;
                this.resetStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 411;
                this.jarStatement();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 412;
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
            this.state = 415;
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
            this.state = 431;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 417;
                this.createTable();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 418;
                this.createDatabase();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 419;
                this.createView();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 420;
                this.createFunction();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 421;
                this.createCatalog();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 422;
                this.alterTable();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 423;
                this.alterView();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 424;
                this.alterDatabase();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 425;
                this.alterFunction();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 426;
                this.dropCatalog();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 427;
                this.dropTable();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 428;
                this.dropDatabase();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 429;
                this.dropView();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 430;
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
            this.state = 435;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_SELECT:
            case FlinkSqlParser.KW_VALUES:
            case FlinkSqlParser.KW_WITH:
            case FlinkSqlParser.LR_BRACKET:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 433;
                this.queryStatement(0);
                }
                break;
            case FlinkSqlParser.KW_BEGIN:
            case FlinkSqlParser.KW_EXECUTE:
            case FlinkSqlParser.KW_INSERT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 434;
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
            this.state = 437;
            _la = this.tokenStream.LA(1);
            if(!(_la === 109 || _la === 451)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 438;
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
            this.state = 440;
            this.match(FlinkSqlParser.KW_EXPLAIN);
            this.state = 444;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_CHANGELOG_MODE:
            case FlinkSqlParser.KW_ESTIMATED_COST:
            case FlinkSqlParser.KW_JSON_EXECUTION_PLAN:
                {
                this.state = 441;
                this.explainDetails();
                }
                break;
            case FlinkSqlParser.KW_PLAN:
                {
                this.state = 442;
                this.match(FlinkSqlParser.KW_PLAN);
                this.state = 443;
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
            this.state = 449;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                {
                this.state = 446;
                this.dmlStatement();
                }
                break;
            case 2:
                {
                this.state = 447;
                this.insertSimpleStatement();
                }
                break;
            case 3:
                {
                this.state = 448;
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
            this.state = 451;
            this.explainDetail();
            this.state = 456;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 521) {
                {
                {
                this.state = 452;
                this.match(FlinkSqlParser.COMMA);
                this.state = 453;
                this.explainDetail();
                }
                }
                this.state = 458;
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
            this.state = 459;
            _la = this.tokenStream.LA(1);
            if(!(_la === 45 || _la === 128 || _la === 189)) {
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
            this.state = 467;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 461;
                this.match(FlinkSqlParser.KW_USE);
                this.state = 462;
                this.match(FlinkSqlParser.KW_CATALOG);
                this.state = 463;
                this.catalogPath();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 464;
                this.match(FlinkSqlParser.KW_USE);
                this.state = 465;
                this.databasePath();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 466;
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
            this.state = 469;
            this.match(FlinkSqlParser.KW_USE);
            this.state = 470;
            this.match(FlinkSqlParser.KW_MODULES);
            this.state = 471;
            this.uid();
            this.state = 476;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 521) {
                {
                {
                this.state = 472;
                this.match(FlinkSqlParser.COMMA);
                this.state = 473;
                this.uid();
                }
                }
                this.state = 478;
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
            this.state = 521;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 18, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 479;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 480;
                _la = this.tokenStream.LA(1);
                if(!(_la === 42 || _la === 90 || _la === 423 || _la === 465)) {
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
                this.state = 481;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 482;
                this.match(FlinkSqlParser.KW_CURRENT);
                this.state = 483;
                _la = this.tokenStream.LA(1);
                if(!(_la === 442 || _la === 448)) {
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
                this.state = 484;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 485;
                this.match(FlinkSqlParser.KW_TABLES);
                this.state = 488;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 151 || _la === 170) {
                    {
                    this.state = 486;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 151 || _la === 170)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 487;
                    this.databasePath();
                    }
                }

                this.state = 491;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 203 || _la === 242) {
                    {
                    this.state = 490;
                    this.likePredicate();
                    }
                }

                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 493;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 494;
                this.match(FlinkSqlParser.KW_COLUMNS);
                this.state = 495;
                _la = this.tokenStream.LA(1);
                if(!(_la === 151 || _la === 170)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 498;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context) ) {
                case 1:
                    {
                    this.state = 496;
                    this.viewPath();
                    }
                    break;
                case 2:
                    {
                    this.state = 497;
                    this.tablePath();
                    }
                    break;
                }
                this.state = 501;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 203 || _la === 242) {
                    {
                    this.state = 500;
                    this.likePredicate();
                    }
                }

                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 503;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 504;
                this.match(FlinkSqlParser.KW_CREATE);
                this.state = 509;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.KW_TABLE:
                    {
                    this.state = 505;
                    this.match(FlinkSqlParser.KW_TABLE);
                    this.state = 506;
                    this.tablePath();
                    }
                    break;
                case FlinkSqlParser.KW_VIEW:
                    {
                    this.state = 507;
                    this.match(FlinkSqlParser.KW_VIEW);
                    this.state = 508;
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
                this.state = 511;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 513;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 412) {
                    {
                    this.state = 512;
                    this.match(FlinkSqlParser.KW_USER);
                    }
                }

                this.state = 515;
                this.match(FlinkSqlParser.KW_FUNCTIONS);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 516;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 518;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 152) {
                    {
                    this.state = 517;
                    this.match(FlinkSqlParser.KW_FULL);
                    }
                }

                this.state = 520;
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
            this.state = 523;
            this.match(FlinkSqlParser.KW_LOAD);
            this.state = 524;
            this.match(FlinkSqlParser.KW_MODULE);
            this.state = 525;
            this.uid();
            this.state = 528;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context) ) {
            case 1:
                {
                this.state = 526;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 527;
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
            this.state = 530;
            this.match(FlinkSqlParser.KW_UNLOAD);
            this.state = 531;
            this.match(FlinkSqlParser.KW_MODULE);
            this.state = 532;
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
            this.state = 534;
            this.match(FlinkSqlParser.KW_SET);
            this.state = 536;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
            case 1:
                {
                this.state = 535;
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
            this.state = 538;
            this.match(FlinkSqlParser.KW_RESET);
            this.state = 540;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context) ) {
            case 1:
                {
                this.state = 539;
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
            this.state = 542;
            _la = this.tokenStream.LA(1);
            if(!(_la === 438 || _la === 490)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 543;
            this.match(FlinkSqlParser.KW_JAR);
            this.state = 544;
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
            this.state = 596;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 546;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 547;
                this.match(FlinkSqlParser.KW_JAR);
                this.state = 548;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 549;
                this.dtFilePath();
                this.state = 552;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                    this.state = 550;
                    this.match(FlinkSqlParser.KW_AS);
                    this.state = 551;
                    this.uid();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 554;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 555;
                this.match(FlinkSqlParser.KW_FILE);
                this.state = 556;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 557;
                this.dtFilePath();
                this.state = 560;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                    this.state = 558;
                    this.match(FlinkSqlParser.KW_AS);
                    this.state = 559;
                    this.uid();
                    }
                }

                this.state = 564;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 312) {
                    {
                    this.state = 562;
                    this.match(FlinkSqlParser.KW_RENAME);
                    this.state = 563;
                    this.uid();
                    }
                }

                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 566;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 567;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 483)) & ~0x1F) === 0 && ((1 << (_la - 483)) & 47) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 568;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 569;
                this.dtFilePath();
                this.state = 570;
                this.match(FlinkSqlParser.KW_RENAME);
                this.state = 571;
                this.uid();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 573;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 574;
                this.match(FlinkSqlParser.KW_PYTHON_PARAMETER);
                this.state = 575;
                this.dtFilePath();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 576;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 577;
                this.match(FlinkSqlParser.KW_ENGINE);
                this.state = 578;
                this.match(FlinkSqlParser.KW_FILE);
                this.state = 579;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 580;
                this.dtFilePath();
                this.state = 581;
                this.match(FlinkSqlParser.KW_RENAME);
                this.state = 582;
                this.uid();
                this.state = 583;
                this.match(FlinkSqlParser.KW_KEY);
                this.state = 584;
                this.uid();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 586;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 587;
                this.match(FlinkSqlParser.KW_CONFIG);
                this.state = 588;
                this.match(FlinkSqlParser.KW_FILE);
                this.state = 589;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 590;
                this.dtFilePath();
                this.state = 591;
                this.match(FlinkSqlParser.KW_FOR);
                this.state = 592;
                this.uid();
                this.state = 593;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 594;
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
            this.state = 602;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 599;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 535) {
                        {
                        this.state = 598;
                        this.match(FlinkSqlParser.SLASH_SIGN);
                        }
                    }

                    this.state = 601;
                    this.uid();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 604;
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
            this.state = 608;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
            case 1:
                {
                this.state = 606;
                this.simpleCreateTable();
                }
                break;
            case 2:
                {
                this.state = 607;
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
            this.state = 610;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 612;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 498) {
                {
                this.state = 611;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
            }

            this.state = 614;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 616;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 615;
                this.ifNotExists();
                }
            }

            this.state = 618;
            this.tablePathCreate();
            this.state = 619;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 620;
            this.columnOptionDefinition();
            this.state = 625;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 31, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 621;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 622;
                    this.columnOptionDefinition();
                    }
                    }
                }
                this.state = 627;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 31, this.context);
            }
            this.state = 630;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context) ) {
            case 1:
                {
                this.state = 628;
                this.match(FlinkSqlParser.COMMA);
                this.state = 629;
                this.watermarkDefinition();
                }
                break;
            }
            this.state = 634;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context) ) {
            case 1:
                {
                this.state = 632;
                this.match(FlinkSqlParser.COMMA);
                this.state = 633;
                this.tableConstraint();
                }
                break;
            }
            this.state = 638;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 521) {
                {
                this.state = 636;
                this.match(FlinkSqlParser.COMMA);
                this.state = 637;
                this.selfDefinitionClause();
                }
            }

            this.state = 640;
            this.match(FlinkSqlParser.RR_BRACKET);
            this.state = 643;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 641;
                this.match(FlinkSqlParser.KW_COMMENT);
                this.state = 642;
                localContext._comment = this.match(FlinkSqlParser.STRING_LITERAL);
                }
            }

            this.state = 646;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 270) {
                {
                this.state = 645;
                this.partitionDefinition();
                }
            }

            this.state = 648;
            this.withOption();
            this.state = 650;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 203) {
                {
                this.state = 649;
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
            this.state = 652;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 653;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 655;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 654;
                this.ifNotExists();
                }
            }

            this.state = 657;
            this.tablePathCreate();
            this.state = 658;
            this.withOption();
            this.state = 661;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 659;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 660;
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
            this.state = 666;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 663;
                this.physicalColumnDefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 664;
                this.metadataColumnDefinition();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 665;
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
            this.state = 668;
            this.columnNameCreate();
            this.state = 669;
            this.columnType();
            this.state = 671;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 64 || _la === 242 || _la === 245 || _la === 289) {
                {
                this.state = 670;
                this.columnConstraint();
                }
            }

            this.state = 675;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 673;
                this.match(FlinkSqlParser.KW_COMMENT);
                this.state = 674;
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
            this.state = 679;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 677;
                this.uid();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 678;
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
            this.state = 683;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 681;
                this.uid();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 682;
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
            this.state = 685;
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
            this.state = 687;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 688;
            this.columnName();
            this.state = 693;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 521) {
                {
                {
                this.state = 689;
                this.match(FlinkSqlParser.COMMA);
                this.state = 690;
                this.columnName();
                }
                }
                this.state = 695;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 696;
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
            this.state = 735;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_BOOLEAN:
            case FlinkSqlParser.KW_DATE:
            case FlinkSqlParser.KW_NULL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 698;
                localContext._colType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 32 || _la === 91 || _la === 245)) {
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
                this.state = 699;
                localContext._colType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & 262275) !== 0) || _la === 92 || _la === 178 || _la === 179 || _la === 345 || _la === 361 || ((((_la - 379)) & ~0x1F) === 0 && ((1 << (_la - 379)) & 521) !== 0) || _la === 417 || _la === 418)) {
                    localContext._colType = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 701;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 517) {
                    {
                    this.state = 700;
                    this.lengthOneDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_TIMESTAMP:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 703;
                localContext._colType = this.match(FlinkSqlParser.KW_TIMESTAMP);
                this.state = 705;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 517) {
                    {
                    this.state = 704;
                    this.lengthOneDimension();
                    }
                }

                this.state = 713;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 434 || _la === 436) {
                    {
                    this.state = 707;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 434 || _la === 436)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 709;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 207) {
                        {
                        this.state = 708;
                        this.match(FlinkSqlParser.KW_LOCAL);
                        }
                    }

                    this.state = 711;
                    this.match(FlinkSqlParser.KW_TIME);
                    this.state = 712;
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
                this.state = 715;
                localContext._colType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 16387) !== 0) || _la === 144 || _la === 247)) {
                    localContext._colType = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 717;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 517) {
                    {
                    this.state = 716;
                    this.lengthTwoOptionalDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_ARRAY:
            case FlinkSqlParser.KW_MULTISET:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 719;
                localContext._colType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 13 || _la === 232)) {
                    localContext._colType = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 721;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 508) {
                    {
                    this.state = 720;
                    this.lengthOneTypeDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_MAP:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 723;
                localContext._colType = this.match(FlinkSqlParser.KW_MAP);
                this.state = 725;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 508) {
                    {
                    this.state = 724;
                    this.mapTypeDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_ROW:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 727;
                localContext._colType = this.match(FlinkSqlParser.KW_ROW);
                this.state = 729;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 508 || _la === 517) {
                    {
                    this.state = 728;
                    this.rowTypeDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_RAW:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 731;
                localContext._colType = this.match(FlinkSqlParser.KW_RAW);
                this.state = 733;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 517) {
                    {
                    this.state = 732;
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
            this.state = 737;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 738;
            this.decimalLiteral();
            this.state = 739;
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
            this.state = 741;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 742;
            this.decimalLiteral();
            this.state = 745;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 521) {
                {
                this.state = 743;
                this.match(FlinkSqlParser.COMMA);
                this.state = 744;
                this.decimalLiteral();
                }
            }

            this.state = 747;
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
            this.state = 749;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 750;
            this.stringLiteral();
            this.state = 753;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 521) {
                {
                this.state = 751;
                this.match(FlinkSqlParser.COMMA);
                this.state = 752;
                this.stringLiteral();
                }
            }

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
    public lengthOneTypeDimension(): LengthOneTypeDimensionContext {
        let localContext = new LengthOneTypeDimensionContext(this.context, this.state);
        this.enterRule(localContext, 66, FlinkSqlParser.RULE_lengthOneTypeDimension);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 757;
            this.match(FlinkSqlParser.LESS_SYMBOL);
            this.state = 758;
            this.columnType();
            this.state = 759;
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
            this.state = 761;
            this.match(FlinkSqlParser.LESS_SYMBOL);
            this.state = 762;
            this.columnType();
            {
            this.state = 763;
            this.match(FlinkSqlParser.COMMA);
            this.state = 764;
            this.columnType();
            }
            this.state = 766;
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
            this.state = 796;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.LESS_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 768;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 769;
                this.columnName();
                this.state = 770;
                this.columnType();
                this.state = 777;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 521) {
                    {
                    {
                    this.state = 771;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 772;
                    this.columnName();
                    this.state = 773;
                    this.columnType();
                    }
                    }
                    this.state = 779;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 780;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                }
                break;
            case FlinkSqlParser.LR_BRACKET:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 782;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 783;
                this.columnName();
                this.state = 784;
                this.columnType();
                this.state = 791;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 521) {
                    {
                    {
                    this.state = 785;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 786;
                    this.columnName();
                    this.state = 787;
                    this.columnType();
                    }
                    }
                    this.state = 793;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 794;
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
            this.state = 812;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_CONSTRAINT:
            case FlinkSqlParser.KW_PRIMARY:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 800;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 64) {
                    {
                    this.state = 798;
                    this.match(FlinkSqlParser.KW_CONSTRAINT);
                    this.state = 799;
                    this.constraintName();
                    }
                }

                this.state = 802;
                this.match(FlinkSqlParser.KW_PRIMARY);
                this.state = 803;
                this.match(FlinkSqlParser.KW_KEY);
                this.state = 806;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 242) {
                    {
                    this.state = 804;
                    this.match(FlinkSqlParser.KW_NOT);
                    this.state = 805;
                    this.match(FlinkSqlParser.KW_ENFORCED);
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_NOT:
            case FlinkSqlParser.KW_NULL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 809;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 242) {
                    {
                    this.state = 808;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 811;
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
            this.state = 814;
            this.columnNameCreate();
            this.state = 815;
            this.columnType();
            this.state = 816;
            this.match(FlinkSqlParser.KW_METADATA);
            this.state = 819;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 151) {
                {
                this.state = 817;
                this.match(FlinkSqlParser.KW_FROM);
                this.state = 818;
                this.metadataKey();
                }
            }

            this.state = 822;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 424) {
                {
                this.state = 821;
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
            this.state = 824;
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
            this.state = 826;
            this.columnNameCreate();
            this.state = 827;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 828;
            this.computedColumnExpression();
            this.state = 831;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 829;
                this.match(FlinkSqlParser.KW_COMMENT);
                this.state = 830;
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
            this.state = 833;
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
            this.state = 835;
            this.match(FlinkSqlParser.KW_WATERMARK);
            this.state = 836;
            this.match(FlinkSqlParser.KW_FOR);
            this.state = 837;
            this.columnName();
            this.state = 838;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 839;
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
            this.state = 843;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 64) {
                {
                this.state = 841;
                this.match(FlinkSqlParser.KW_CONSTRAINT);
                this.state = 842;
                this.constraintName();
                }
            }

            this.state = 845;
            this.match(FlinkSqlParser.KW_PRIMARY);
            this.state = 846;
            this.match(FlinkSqlParser.KW_KEY);
            this.state = 847;
            this.columnNameList();
            this.state = 848;
            this.match(FlinkSqlParser.KW_NOT);
            this.state = 849;
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
            this.state = 851;
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
            this.state = 853;
            this.match(FlinkSqlParser.KW_PERIOD);
            this.state = 854;
            this.match(FlinkSqlParser.KW_FOR);
            this.state = 855;
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
            this.state = 857;
            this.match(FlinkSqlParser.KW_PARTITIONED);
            this.state = 858;
            this.match(FlinkSqlParser.KW_BY);
            this.state = 859;
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
            this.state = 861;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 862;
            this.transform();
            this.state = 867;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 521) {
                {
                {
                this.state = 863;
                this.match(FlinkSqlParser.COMMA);
                this.state = 864;
                this.transform();
                }
                }
                this.state = 869;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 870;
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
            this.state = 884;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
            case 1:
                localContext = new IdentityTransformContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 872;
                this.columnName();
                }
                break;
            case 2:
                localContext = new ApplyTransformContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 873;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 874;
                this.transformArgument();
                this.state = 879;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 521) {
                    {
                    {
                    this.state = 875;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 876;
                    this.transformArgument();
                    }
                    }
                    this.state = 881;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 882;
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
            this.state = 888;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 72, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 886;
                this.qualifiedName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 887;
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
            this.state = 890;
            this.match(FlinkSqlParser.KW_LIKE);
            this.state = 891;
            this.tablePath();
            this.state = 900;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context) ) {
            case 1:
                {
                this.state = 892;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 896;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 267 || _la === 456 || _la === 463) {
                    {
                    {
                    this.state = 893;
                    this.likeOption();
                    }
                    }
                    this.state = 898;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 899;
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
            this.state = 906;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 75, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 902;
                _la = this.tokenStream.LA(1);
                if(!(_la === 456 || _la === 463)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 903;
                _la = this.tokenStream.LA(1);
                if(!(_la === 5 || _la === 271 || _la === 445)) {
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
                this.state = 904;
                _la = this.tokenStream.LA(1);
                if(!(_la === 267 || _la === 456 || _la === 463)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 905;
                _la = this.tokenStream.LA(1);
                if(!(_la === 426 || _la === 459 || _la === 478)) {
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
            this.state = 908;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 909;
            this.match(FlinkSqlParser.KW_CATALOG);
            this.state = 910;
            this.catalogPathCreate();
            this.state = 911;
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
            this.state = 913;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 914;
            this.match(FlinkSqlParser.KW_DATABASE);
            this.state = 916;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 915;
                this.ifNotExists();
                }
            }

            this.state = 918;
            this.databasePathCreate();
            this.state = 921;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 919;
                this.match(FlinkSqlParser.KW_COMMENT);
                this.state = 920;
                localContext._comment = this.match(FlinkSqlParser.STRING_LITERAL);
                }
            }

            this.state = 923;
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
            this.state = 925;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 927;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 498) {
                {
                this.state = 926;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
            }

            this.state = 929;
            this.match(FlinkSqlParser.KW_VIEW);
            this.state = 931;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 930;
                this.ifNotExists();
                }
            }

            this.state = 933;
            this.viewPathCreate();
            this.state = 935;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 517) {
                {
                this.state = 934;
                this.columnNameList();
                }
            }

            this.state = 939;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 937;
                this.match(FlinkSqlParser.KW_COMMENT);
                this.state = 938;
                localContext._comment = this.match(FlinkSqlParser.STRING_LITERAL);
                }
            }

            this.state = 941;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 942;
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
            this.state = 944;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 948;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context) ) {
            case 1:
                {
                this.state = 945;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
                break;
            case 2:
                {
                this.state = 946;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                this.state = 947;
                this.match(FlinkSqlParser.KW_SYSTEM);
                }
                break;
            }
            this.state = 950;
            this.match(FlinkSqlParser.KW_FUNCTION);
            this.state = 952;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 951;
                this.ifNotExists();
                }
            }

            this.state = 954;
            this.functionNameCreate();
            this.state = 955;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 956;
            this.identifier();
            this.state = 959;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 196) {
                {
                this.state = 957;
                this.match(FlinkSqlParser.KW_LANGUAGE);
                this.state = 958;
                _la = this.tokenStream.LA(1);
                if(!(_la === 331 || _la === 466 || _la === 482)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 962;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 413) {
                {
                this.state = 961;
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
            this.state = 964;
            this.match(FlinkSqlParser.KW_USING);
            this.state = 965;
            this.match(FlinkSqlParser.KW_JAR);
            this.state = 966;
            this.jarFileName();
            this.state = 972;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 521) {
                {
                {
                this.state = 967;
                this.match(FlinkSqlParser.COMMA);
                this.state = 968;
                this.match(FlinkSqlParser.KW_JAR);
                this.state = 969;
                this.jarFileName();
                }
                }
                this.state = 974;
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
            this.state = 975;
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
            this.state = 977;
            this.match(FlinkSqlParser.KW_ALTER);
            this.state = 978;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 980;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 979;
                this.ifExists();
                }
            }

            this.state = 982;
            this.tablePath();
            this.state = 988;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 88, this.context) ) {
            case 1:
                {
                this.state = 983;
                this.renameDefinition();
                }
                break;
            case 2:
                {
                this.state = 984;
                this.setKeyValueDefinition();
                }
                break;
            case 3:
                {
                this.state = 985;
                this.addConstraint();
                }
                break;
            case 4:
                {
                this.state = 986;
                this.dropConstraint();
                }
                break;
            case 5:
                {
                this.state = 987;
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
            this.state = 990;
            this.match(FlinkSqlParser.KW_RENAME);
            this.state = 992;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 438)) & ~0x1F) === 0 && ((1 << (_la - 438)) & 4294967295) !== 0) || ((((_la - 470)) & ~0x1F) === 0 && ((1 << (_la - 470)) & 4294967295) !== 0) || ((((_la - 502)) & ~0x1F) === 0 && ((1 << (_la - 502)) & 15) !== 0) || ((((_la - 538)) & ~0x1F) === 0 && ((1 << (_la - 538)) & 19) !== 0)) {
                {
                this.state = 991;
                this.uid();
                }
            }

            this.state = 994;
            this.match(FlinkSqlParser.KW_TO);
            this.state = 995;
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
            this.state = 997;
            this.match(FlinkSqlParser.KW_SET);
            this.state = 998;
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
            this.state = 1000;
            this.match(FlinkSqlParser.KW_ADD);
            this.state = 1001;
            this.match(FlinkSqlParser.KW_CONSTRAINT);
            this.state = 1002;
            this.constraintName();
            this.state = 1003;
            this.match(FlinkSqlParser.KW_PRIMARY);
            this.state = 1004;
            this.match(FlinkSqlParser.KW_KEY);
            this.state = 1005;
            this.columnNameList();
            this.state = 1007;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 242) {
                {
                this.state = 1006;
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
            this.state = 1009;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1010;
            this.match(FlinkSqlParser.KW_CONSTRAINT);
            this.state = 1011;
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
            this.state = 1013;
            this.match(FlinkSqlParser.KW_ADD);
            this.state = 1014;
            this.match(FlinkSqlParser.KW_UNIQUE);
            this.state = 1015;
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
            this.state = 1017;
            this.match(FlinkSqlParser.KW_NOT);
            this.state = 1018;
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
            this.state = 1020;
            this.match(FlinkSqlParser.KW_ALTER);
            this.state = 1021;
            this.match(FlinkSqlParser.KW_VIEW);
            this.state = 1022;
            this.viewPath();
            this.state = 1026;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_RENAME:
                {
                this.state = 1023;
                this.renameDefinition();
                }
                break;
            case FlinkSqlParser.KW_AS:
                {
                this.state = 1024;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 1025;
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
            this.state = 1028;
            this.match(FlinkSqlParser.KW_ALTER);
            this.state = 1029;
            this.match(FlinkSqlParser.KW_DATABASE);
            this.state = 1030;
            this.databasePath();
            this.state = 1031;
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
            this.state = 1033;
            this.match(FlinkSqlParser.KW_ALTER);
            this.state = 1037;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 92, this.context) ) {
            case 1:
                {
                this.state = 1034;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
                break;
            case 2:
                {
                this.state = 1035;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                this.state = 1036;
                this.match(FlinkSqlParser.KW_SYSTEM);
                }
                break;
            }
            this.state = 1039;
            this.match(FlinkSqlParser.KW_FUNCTION);
            this.state = 1041;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 93, this.context) ) {
            case 1:
                {
                this.state = 1040;
                this.ifExists();
                }
                break;
            }
            this.state = 1043;
            this.functionName();
            this.state = 1044;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 1045;
            this.identifier();
            this.state = 1048;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 196) {
                {
                this.state = 1046;
                this.match(FlinkSqlParser.KW_LANGUAGE);
                this.state = 1047;
                _la = this.tokenStream.LA(1);
                if(!(_la === 331 || _la === 466 || _la === 482)) {
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
            this.state = 1050;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1051;
            this.match(FlinkSqlParser.KW_CATALOG);
            this.state = 1053;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 1052;
                this.ifExists();
                }
            }

            this.state = 1055;
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
            this.state = 1057;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1059;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 498) {
                {
                this.state = 1058;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
            }

            this.state = 1061;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 1063;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 1062;
                this.ifExists();
                }
            }

            this.state = 1065;
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
            this.state = 1067;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1068;
            this.match(FlinkSqlParser.KW_DATABASE);
            this.state = 1070;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 1069;
                this.ifExists();
                }
            }

            this.state = 1072;
            this.databasePath();
            this.state = 1074;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 441 || _la === 491) {
                {
                this.state = 1073;
                localContext._dropType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 441 || _la === 491)) {
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
            this.state = 1076;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1078;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 498) {
                {
                this.state = 1077;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
            }

            this.state = 1080;
            this.match(FlinkSqlParser.KW_VIEW);
            this.state = 1082;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 1081;
                this.ifExists();
                }
            }

            this.state = 1084;
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
            this.state = 1086;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1090;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 102, this.context) ) {
            case 1:
                {
                this.state = 1087;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
                break;
            case 2:
                {
                this.state = 1088;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                this.state = 1089;
                this.match(FlinkSqlParser.KW_SYSTEM);
                }
                break;
            }
            this.state = 1092;
            this.match(FlinkSqlParser.KW_FUNCTION);
            this.state = 1094;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 103, this.context) ) {
            case 1:
                {
                this.state = 1093;
                this.ifExists();
                }
                break;
            }
            this.state = 1096;
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
            this.state = 1105;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 105, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 1099;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 132) {
                    {
                    this.state = 1098;
                    this.match(FlinkSqlParser.KW_EXECUTE);
                    }
                }

                this.state = 1101;
                this.insertSimpleStatement();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1102;
                this.insertMulStatementCompatibility();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 1103;
                this.match(FlinkSqlParser.KW_EXECUTE);
                this.state = 1104;
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
            this.state = 1107;
            this.match(FlinkSqlParser.KW_INSERT);
            this.state = 1108;
            _la = this.tokenStream.LA(1);
            if(!(_la === 183 || _la === 266)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1109;
            this.tablePath();
            this.state = 1118;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 108, this.context) ) {
            case 1:
                {
                this.state = 1111;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 269) {
                    {
                    this.state = 1110;
                    this.insertPartitionDefinition();
                    }
                }

                this.state = 1114;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 107, this.context) ) {
                case 1:
                    {
                    this.state = 1113;
                    this.columnNameList();
                    }
                    break;
                }
                this.state = 1116;
                this.queryStatement(0);
                }
                break;
            case 2:
                {
                this.state = 1117;
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
            this.state = 1120;
            this.match(FlinkSqlParser.KW_PARTITION);
            this.state = 1121;
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
            this.state = 1123;
            this.match(FlinkSqlParser.KW_VALUES);
            this.state = 1124;
            this.valuesRowDefinition();
            this.state = 1129;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 521) {
                {
                {
                this.state = 1125;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1126;
                this.valuesRowDefinition();
                }
                }
                this.state = 1131;
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
            this.state = 1132;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1133;
            this.constant();
            this.state = 1138;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 521) {
                {
                {
                this.state = 1134;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1135;
                this.constant();
                }
                }
                this.state = 1140;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1141;
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
    public insertMulStatementCompatibility(): InsertMulStatementCompatibilityContext {
        let localContext = new InsertMulStatementCompatibilityContext(this.context, this.state);
        this.enterRule(localContext, 154, FlinkSqlParser.RULE_insertMulStatementCompatibility);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1143;
            this.match(FlinkSqlParser.KW_BEGIN);
            this.state = 1144;
            this.match(FlinkSqlParser.KW_STATEMENT);
            this.state = 1145;
            this.match(FlinkSqlParser.KW_SET);
            this.state = 1146;
            this.match(FlinkSqlParser.SEMICOLON);
            this.state = 1150;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1147;
                this.insertSimpleStatement();
                this.state = 1148;
                this.match(FlinkSqlParser.SEMICOLON);
                }
                }
                this.state = 1152;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 177);
            this.state = 1154;
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
        this.enterRule(localContext, 156, FlinkSqlParser.RULE_insertMulStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1156;
            this.match(FlinkSqlParser.KW_STATEMENT);
            this.state = 1157;
            this.match(FlinkSqlParser.KW_SET);
            this.state = 1158;
            this.match(FlinkSqlParser.KW_BEGIN);
            this.state = 1162;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1159;
                this.insertSimpleStatement();
                this.state = 1160;
                this.match(FlinkSqlParser.SEMICOLON);
                }
                }
                this.state = 1164;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 177);
            this.state = 1166;
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
        let _startState = 158;
        this.enterRecursionRule(localContext, 158, FlinkSqlParser.RULE_queryStatement, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1191;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 117, this.context) ) {
            case 1:
                {
                this.state = 1169;
                this.valuesClause();
                }
                break;
            case 2:
                {
                this.state = 1170;
                this.withClause();
                this.state = 1171;
                this.queryStatement(5);
                }
                break;
            case 3:
                {
                this.state = 1173;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1174;
                this.queryStatement(0);
                this.state = 1175;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                {
                this.state = 1177;
                this.selectClause();
                this.state = 1179;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 113, this.context) ) {
                case 1:
                    {
                    this.state = 1178;
                    this.orderByClause();
                    }
                    break;
                }
                this.state = 1182;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 114, this.context) ) {
                case 1:
                    {
                    this.state = 1181;
                    this.limitClause();
                    }
                    break;
                }
                }
                break;
            case 5:
                {
                this.state = 1184;
                this.selectStatement();
                this.state = 1186;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 115, this.context) ) {
                case 1:
                    {
                    this.state = 1185;
                    this.orderByClause();
                    }
                    break;
                }
                this.state = 1189;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 116, this.context) ) {
                case 1:
                    {
                    this.state = 1188;
                    this.limitClause();
                    }
                    break;
                }
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1207;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 121, this.context);
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
                    this.state = 1193;
                    if (!(this.precpred(this.context, 3))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                    }
                    this.state = 1194;
                    localContext._operator = this.tokenStream.LT(1);
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 130 || _la === 180 || _la === 403)) {
                        localContext._operator = this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1196;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 5) {
                        {
                        this.state = 1195;
                        this.match(FlinkSqlParser.KW_ALL);
                        }
                    }

                    this.state = 1198;
                    localContext._right = this.queryStatement(0);
                    this.state = 1200;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 119, this.context) ) {
                    case 1:
                        {
                        this.state = 1199;
                        this.orderByClause();
                        }
                        break;
                    }
                    this.state = 1203;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 120, this.context) ) {
                    case 1:
                        {
                        this.state = 1202;
                        this.limitClause();
                        }
                        break;
                    }
                    }
                    }
                }
                this.state = 1209;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 121, this.context);
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
        this.enterRule(localContext, 160, FlinkSqlParser.RULE_valuesClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1210;
            this.match(FlinkSqlParser.KW_VALUES);
            this.state = 1211;
            this.expression();
            this.state = 1216;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 122, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1212;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1213;
                    this.expression();
                    }
                    }
                }
                this.state = 1218;
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
            this.exitRule();
        }
        return localContext;
    }
    public withClause(): WithClauseContext {
        let localContext = new WithClauseContext(this.context, this.state);
        this.enterRule(localContext, 162, FlinkSqlParser.RULE_withClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1219;
            this.match(FlinkSqlParser.KW_WITH);
            this.state = 1220;
            this.withItem();
            this.state = 1225;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 521) {
                {
                {
                this.state = 1221;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1222;
                this.withItem();
                }
                }
                this.state = 1227;
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
        this.enterRule(localContext, 164, FlinkSqlParser.RULE_withItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1228;
            this.withItemName();
            this.state = 1240;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 517) {
                {
                this.state = 1229;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1230;
                this.columnName();
                this.state = 1235;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 521) {
                    {
                    {
                    this.state = 1231;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1232;
                    this.columnName();
                    }
                    }
                    this.state = 1237;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1238;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
            }

            this.state = 1242;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 1243;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1244;
            this.queryStatement(0);
            this.state = 1245;
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
        this.enterRule(localContext, 166, FlinkSqlParser.RULE_withItemName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1247;
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
        this.enterRule(localContext, 168, FlinkSqlParser.RULE_selectStatement);
        try {
            this.state = 1269;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 131, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1249;
                this.selectClause();
                this.state = 1251;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 126, this.context) ) {
                case 1:
                    {
                    this.state = 1250;
                    this.fromClause();
                    }
                    break;
                }
                this.state = 1254;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 127, this.context) ) {
                case 1:
                    {
                    this.state = 1253;
                    this.whereClause();
                    }
                    break;
                }
                this.state = 1257;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 128, this.context) ) {
                case 1:
                    {
                    this.state = 1256;
                    this.groupByClause();
                    }
                    break;
                }
                this.state = 1260;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 129, this.context) ) {
                case 1:
                    {
                    this.state = 1259;
                    this.havingClause();
                    }
                    break;
                }
                this.state = 1263;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 130, this.context) ) {
                case 1:
                    {
                    this.state = 1262;
                    this.windowClause();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1265;
                this.selectClause();
                this.state = 1266;
                this.fromClause();
                this.state = 1267;
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
        this.enterRule(localContext, 170, FlinkSqlParser.RULE_selectClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1271;
            this.match(FlinkSqlParser.KW_SELECT);
            this.state = 1273;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 132, this.context) ) {
            case 1:
                {
                this.state = 1272;
                this.setQuantifier();
                }
                break;
            }
            this.state = 1284;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 134, this.context) ) {
            case 1:
                {
                this.state = 1275;
                this.match(FlinkSqlParser.ASTERISK_SIGN);
                }
                break;
            case 2:
                {
                this.state = 1276;
                this.projectItemDefinition();
                this.state = 1281;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 133, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1277;
                        this.match(FlinkSqlParser.COMMA);
                        this.state = 1278;
                        this.projectItemDefinition();
                        }
                        }
                    }
                    this.state = 1283;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 133, this.context);
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
        this.enterRule(localContext, 172, FlinkSqlParser.RULE_projectItemDefinition);
        let _la: number;
        try {
            this.state = 1301;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 139, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1286;
                this.overWindowItem();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1287;
                this.expression();
                this.state = 1292;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 136, this.context) ) {
                case 1:
                    {
                    this.state = 1289;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 135, this.context) ) {
                    case 1:
                        {
                        this.state = 1288;
                        this.match(FlinkSqlParser.KW_AS);
                        }
                        break;
                    }
                    this.state = 1291;
                    this.columnName();
                    }
                    break;
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1294;
                this.columnName();
                this.state = 1299;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 138, this.context) ) {
                case 1:
                    {
                    this.state = 1296;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 17) {
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 174, FlinkSqlParser.RULE_overWindowItem);
        try {
            this.state = 1315;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 140, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
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
                this.enterOuterAlt(localContext, 2);
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 176, FlinkSqlParser.RULE_fromClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1317;
            this.match(FlinkSqlParser.KW_FROM);
            this.state = 1318;
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
        let _startState = 178;
        this.enterRecursionRule(localContext, 178, FlinkSqlParser.RULE_tableExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1331;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 142, this.context) ) {
            case 1:
                {
                this.state = 1321;
                this.tableReference();
                this.state = 1326;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 141, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
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
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 141, this.context);
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
                this.windowTVFClause();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1354;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 148, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1352;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 147, this.context) ) {
                    case 1:
                        {
                        localContext = new TableExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_tableExpression);
                        this.state = 1333;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
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
                        localContext = new TableExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_tableExpression);
                        this.state = 1337;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 1339;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 234) {
                            {
                            this.state = 1338;
                            this.match(FlinkSqlParser.KW_NATURAL);
                            }
                        }

                        this.state = 1342;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 152 || _la === 174 || _la === 202 || _la === 318) {
                            {
                            this.state = 1341;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 152 || _la === 174 || _la === 202 || _la === 318)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                        }

                        this.state = 1345;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 262) {
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
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 146, this.context) ) {
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
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 148, this.context);
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
        this.enterRule(localContext, 180, FlinkSqlParser.RULE_tableReference);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1357;
            this.tablePrimary();
            this.state = 1359;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 149, this.context) ) {
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
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 182, FlinkSqlParser.RULE_tablePrimary);
        let _la: number;
        try {
            this.state = 1390;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 154, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1362;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 374) {
                    {
                    this.state = 1361;
                    this.match(FlinkSqlParser.KW_TABLE);
                    }
                }

                this.state = 1364;
                this.tablePath();
                this.state = 1366;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 151, this.context) ) {
                case 1:
                    {
                    this.state = 1365;
                    this.systemTimePeriod();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1368;
                this.viewPath();
                this.state = 1370;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 152, this.context) ) {
                case 1:
                    {
                    this.state = 1369;
                    this.systemTimePeriod();
                    }
                    break;
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1372;
                this.match(FlinkSqlParser.KW_LATERAL);
                this.state = 1373;
                this.match(FlinkSqlParser.KW_TABLE);
                this.state = 1374;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1375;
                this.functionCallExpression();
                this.state = 1376;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1379;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 199) {
                    {
                    this.state = 1378;
                    this.match(FlinkSqlParser.KW_LATERAL);
                    }
                }

                this.state = 1381;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1382;
                this.queryStatement(0);
                this.state = 1383;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1385;
                this.match(FlinkSqlParser.KW_UNNEST);
                this.state = 1386;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1387;
                this.expression();
                this.state = 1388;
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
        this.enterRule(localContext, 184, FlinkSqlParser.RULE_systemTimePeriod);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1392;
            this.match(FlinkSqlParser.KW_FOR);
            this.state = 1393;
            this.match(FlinkSqlParser.KW_SYSTEM_TIME);
            this.state = 1394;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 1395;
            this.match(FlinkSqlParser.KW_OF);
            this.state = 1396;
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
        this.enterRule(localContext, 186, FlinkSqlParser.RULE_dateTimeExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1398;
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
        this.enterRule(localContext, 188, FlinkSqlParser.RULE_inlineDataValueClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1400;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1401;
            this.valuesDefinition();
            this.state = 1402;
            this.match(FlinkSqlParser.RR_BRACKET);
            this.state = 1403;
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
        this.enterRule(localContext, 190, FlinkSqlParser.RULE_windowTVFClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1405;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 1406;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1407;
            this.windowTVFExpression();
            this.state = 1408;
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
        this.enterRule(localContext, 192, FlinkSqlParser.RULE_windowTVFExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1410;
            this.windowTVFName();
            this.state = 1411;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1412;
            this.windowTVFParam();
            this.state = 1417;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 521) {
                {
                {
                this.state = 1413;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1414;
                this.windowTVFParam();
                }
                }
                this.state = 1419;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1420;
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
        this.enterRule(localContext, 194, FlinkSqlParser.RULE_windowTVFName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1422;
            _la = this.tokenStream.LA(1);
            if(!(_la === 446 || _la === 460 || _la === 500)) {
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
        this.enterRule(localContext, 196, FlinkSqlParser.RULE_windowTVFParam);
        try {
            this.state = 1439;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 156, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1424;
                this.match(FlinkSqlParser.KW_TABLE);
                this.state = 1425;
                this.timeAttrColumn();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1426;
                this.columnDescriptor();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1427;
                this.timeIntervalExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1428;
                this.match(FlinkSqlParser.KW_DATA);
                this.state = 1429;
                this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
                this.state = 1430;
                this.match(FlinkSqlParser.KW_TABLE);
                this.state = 1431;
                this.timeAttrColumn();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1432;
                this.match(FlinkSqlParser.KW_TIMECOL);
                this.state = 1433;
                this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
                this.state = 1434;
                this.columnDescriptor();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1435;
                this.timeIntervalParamName();
                this.state = 1436;
                this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
                this.state = 1437;
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
        this.enterRule(localContext, 198, FlinkSqlParser.RULE_timeIntervalParamName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1441;
            _la = this.tokenStream.LA(1);
            if(!(_la === 251 || _la === 447 || ((((_la - 495)) & ~0x1F) === 0 && ((1 << (_la - 495)) & 23) !== 0))) {
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
        this.enterRule(localContext, 200, FlinkSqlParser.RULE_columnDescriptor);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1443;
            this.match(FlinkSqlParser.KW_DESCRIPTOR);
            this.state = 1444;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1445;
            this.columnName();
            this.state = 1446;
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
        this.enterRule(localContext, 202, FlinkSqlParser.RULE_joinCondition);
        try {
            this.state = 1452;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_ON:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1448;
                this.match(FlinkSqlParser.KW_ON);
                this.state = 1449;
                this.booleanExpression(0);
                }
                break;
            case FlinkSqlParser.KW_USING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1450;
                this.match(FlinkSqlParser.KW_USING);
                this.state = 1451;
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
        this.enterRule(localContext, 204, FlinkSqlParser.RULE_whereClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1454;
            this.match(FlinkSqlParser.KW_WHERE);
            this.state = 1455;
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
        this.enterRule(localContext, 206, FlinkSqlParser.RULE_groupByClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1457;
            this.match(FlinkSqlParser.KW_GROUP);
            this.state = 1458;
            this.match(FlinkSqlParser.KW_BY);
            this.state = 1459;
            this.groupItemDefinition();
            this.state = 1464;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 158, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1460;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1461;
                    this.groupItemDefinition();
                    }
                    }
                }
                this.state = 1466;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 158, this.context);
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
        this.enterRule(localContext, 208, FlinkSqlParser.RULE_groupItemDefinition);
        let _la: number;
        try {
            this.state = 1507;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 162, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1467;
                this.columnName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1468;
                this.groupWindowFunction();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1469;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1470;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1471;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1472;
                this.expression();
                this.state = 1477;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 521) {
                    {
                    {
                    this.state = 1473;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1474;
                    this.expression();
                    }
                    }
                    this.state = 1479;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1480;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1482;
                this.groupingSetsNotationName();
                this.state = 1483;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1484;
                this.expression();
                this.state = 1489;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 521) {
                    {
                    {
                    this.state = 1485;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1486;
                    this.expression();
                    }
                    }
                    this.state = 1491;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1492;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1494;
                this.groupingSets();
                this.state = 1495;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1496;
                this.groupItemDefinition();
                this.state = 1501;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 521) {
                    {
                    {
                    this.state = 1497;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1498;
                    this.groupItemDefinition();
                    }
                    }
                    this.state = 1503;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1504;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1506;
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
        this.enterRule(localContext, 210, FlinkSqlParser.RULE_groupingSets);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1509;
            this.match(FlinkSqlParser.KW_GROUPING);
            this.state = 1510;
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
        this.enterRule(localContext, 212, FlinkSqlParser.RULE_groupingSetsNotationName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1512;
            _la = this.tokenStream.LA(1);
            if(!(_la === 74 || _la === 321)) {
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
        this.enterRule(localContext, 214, FlinkSqlParser.RULE_groupWindowFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1514;
            this.groupWindowFunctionName();
            this.state = 1515;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1516;
            this.timeAttrColumn();
            this.state = 1517;
            this.match(FlinkSqlParser.COMMA);
            this.state = 1518;
            this.timeIntervalExpression();
            this.state = 1519;
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
        this.enterRule(localContext, 216, FlinkSqlParser.RULE_groupWindowFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1521;
            _la = this.tokenStream.LA(1);
            if(!(_la === 460 || _la === 493 || _la === 500)) {
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
        this.enterRule(localContext, 218, FlinkSqlParser.RULE_timeAttrColumn);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1523;
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
        this.enterRule(localContext, 220, FlinkSqlParser.RULE_havingClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1525;
            this.match(FlinkSqlParser.KW_HAVING);
            this.state = 1526;
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
        this.enterRule(localContext, 222, FlinkSqlParser.RULE_windowClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1528;
            this.match(FlinkSqlParser.KW_WINDOW);
            this.state = 1529;
            this.namedWindow();
            this.state = 1534;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 163, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1530;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1531;
                    this.namedWindow();
                    }
                    }
                }
                this.state = 1536;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 163, this.context);
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
        this.enterRule(localContext, 224, FlinkSqlParser.RULE_namedWindow);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1537;
            localContext._name = this.errorCapturingIdentifier();
            this.state = 1538;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 1539;
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
        this.enterRule(localContext, 226, FlinkSqlParser.RULE_windowSpec);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1542;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 438)) & ~0x1F) === 0 && ((1 << (_la - 438)) & 4294967295) !== 0) || ((((_la - 470)) & ~0x1F) === 0 && ((1 << (_la - 470)) & 4294967295) !== 0) || ((((_la - 502)) & ~0x1F) === 0 && ((1 << (_la - 502)) & 15) !== 0) || ((((_la - 538)) & ~0x1F) === 0 && ((1 << (_la - 538)) & 19) !== 0)) {
                {
                this.state = 1541;
                localContext._name = this.errorCapturingIdentifier();
                }
            }

            this.state = 1544;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1546;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 269) {
                {
                this.state = 1545;
                this.partitionByClause();
                }
            }

            this.state = 1549;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 259) {
                {
                this.state = 1548;
                this.orderByClause();
                }
            }

            this.state = 1552;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 293 || _la === 323) {
                {
                this.state = 1551;
                this.windowFrame();
                }
            }

            this.state = 1554;
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
        this.enterRule(localContext, 228, FlinkSqlParser.RULE_matchRecognizeClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1556;
            this.match(FlinkSqlParser.KW_MATCH_RECOGNIZE);
            this.state = 1557;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1559;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 269) {
                {
                this.state = 1558;
                this.partitionByClause();
                }
            }

            this.state = 1562;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 259) {
                {
                this.state = 1561;
                this.orderByClause();
                }
            }

            this.state = 1565;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 216) {
                {
                this.state = 1564;
                this.measuresClause();
                }
            }

            this.state = 1568;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5 || _la === 255) {
                {
                this.state = 1567;
                this.outputMode();
                }
            }

            this.state = 1571;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 439) {
                {
                this.state = 1570;
                this.afterMatchStrategy();
                }
            }

            this.state = 1574;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 272) {
                {
                this.state = 1573;
                this.patternDefinition();
                }
            }

            this.state = 1576;
            this.patternVariablesDefinition();
            this.state = 1577;
            this.match(FlinkSqlParser.RR_BRACKET);
            this.state = 1582;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 175, this.context) ) {
            case 1:
                {
                this.state = 1579;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                    this.state = 1578;
                    this.match(FlinkSqlParser.KW_AS);
                    }
                }

                this.state = 1581;
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
        this.enterRule(localContext, 230, FlinkSqlParser.RULE_orderByClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1584;
            this.match(FlinkSqlParser.KW_ORDER);
            this.state = 1585;
            this.match(FlinkSqlParser.KW_BY);
            this.state = 1586;
            this.orderItemDefinition();
            this.state = 1591;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 176, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1587;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1588;
                    this.orderItemDefinition();
                    }
                    }
                }
                this.state = 1593;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 176, this.context);
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
        this.enterRule(localContext, 232, FlinkSqlParser.RULE_orderItemDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1594;
            this.columnName();
            this.state = 1596;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 177, this.context) ) {
            case 1:
                {
                this.state = 1595;
                localContext._ordering = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 440 || _la === 451)) {
                    localContext._ordering = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 1600;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 178, this.context) ) {
            case 1:
                {
                this.state = 1598;
                this.match(FlinkSqlParser.KW_NULLS);
                this.state = 1599;
                localContext._nullOrder = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 458 || _la === 468)) {
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
        this.enterRule(localContext, 234, FlinkSqlParser.RULE_limitClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1602;
            this.match(FlinkSqlParser.KW_LIMIT);
            this.state = 1605;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_ALL:
                {
                this.state = 1603;
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
                this.state = 1604;
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
        this.enterRule(localContext, 236, FlinkSqlParser.RULE_partitionByClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1607;
            this.match(FlinkSqlParser.KW_PARTITION);
            this.state = 1608;
            this.match(FlinkSqlParser.KW_BY);
            this.state = 1611;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 180, this.context) ) {
            case 1:
                {
                this.state = 1609;
                this.columnName();
                }
                break;
            case 2:
                {
                this.state = 1610;
                this.primaryExpression(0);
                }
                break;
            }
            this.state = 1620;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 521) {
                {
                {
                this.state = 1613;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1616;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 181, this.context) ) {
                case 1:
                    {
                    this.state = 1614;
                    this.columnName();
                    }
                    break;
                case 2:
                    {
                    this.state = 1615;
                    this.primaryExpression(0);
                    }
                    break;
                }
                }
                }
                this.state = 1622;
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
        this.enterRule(localContext, 238, FlinkSqlParser.RULE_quantifiers);
        try {
            this.state = 1639;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 183, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 1623;
                this.match(FlinkSqlParser.ASTERISK_SIGN);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 1624;
                this.match(FlinkSqlParser.ADD_SIGN);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 1625;
                this.match(FlinkSqlParser.QUESTION_MARK_SIGN);
                }
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                {
                this.state = 1626;
                this.match(FlinkSqlParser.LB_BRACKET);
                this.state = 1627;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1628;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1629;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1630;
                this.match(FlinkSqlParser.RB_BRACKET);
                }
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                {
                this.state = 1631;
                this.match(FlinkSqlParser.LB_BRACKET);
                this.state = 1632;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1633;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1634;
                this.match(FlinkSqlParser.RB_BRACKET);
                }
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                {
                this.state = 1635;
                this.match(FlinkSqlParser.LB_BRACKET);
                this.state = 1636;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1637;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1638;
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
        this.enterRule(localContext, 240, FlinkSqlParser.RULE_measuresClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1641;
            this.match(FlinkSqlParser.KW_MEASURES);
            this.state = 1642;
            this.projectItemDefinition();
            this.state = 1647;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 521) {
                {
                {
                this.state = 1643;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1644;
                this.projectItemDefinition();
                }
                }
                this.state = 1649;
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
        this.enterRule(localContext, 242, FlinkSqlParser.RULE_patternDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1650;
            this.match(FlinkSqlParser.KW_PATTERN);
            this.state = 1651;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1653;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1652;
                this.patternVariable();
                }
                }
                this.state = 1655;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 539 || _la === 542);
            this.state = 1657;
            this.match(FlinkSqlParser.RR_BRACKET);
            this.state = 1659;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 435) {
                {
                this.state = 1658;
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
        this.enterRule(localContext, 244, FlinkSqlParser.RULE_patternVariable);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1661;
            this.unquotedIdentifier();
            this.state = 1663;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 519)) & ~0x1F) === 0 && ((1 << (_la - 519)) & 135681) !== 0)) {
                {
                this.state = 1662;
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
        this.enterRule(localContext, 246, FlinkSqlParser.RULE_outputMode);
        try {
            this.state = 1673;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_ALL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1665;
                this.match(FlinkSqlParser.KW_ALL);
                this.state = 1666;
                this.match(FlinkSqlParser.KW_ROWS);
                this.state = 1667;
                this.match(FlinkSqlParser.KW_PER);
                this.state = 1668;
                this.match(FlinkSqlParser.KW_MATCH);
                }
                break;
            case FlinkSqlParser.KW_ONE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1669;
                this.match(FlinkSqlParser.KW_ONE);
                this.state = 1670;
                this.match(FlinkSqlParser.KW_ROW);
                this.state = 1671;
                this.match(FlinkSqlParser.KW_PER);
                this.state = 1672;
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
        this.enterRule(localContext, 248, FlinkSqlParser.RULE_afterMatchStrategy);
        try {
            this.state = 1699;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 189, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1675;
                this.match(FlinkSqlParser.KW_AFTER);
                this.state = 1676;
                this.match(FlinkSqlParser.KW_MATCH);
                this.state = 1677;
                this.match(FlinkSqlParser.KW_SKIP);
                this.state = 1678;
                this.match(FlinkSqlParser.KW_PAST);
                this.state = 1679;
                this.match(FlinkSqlParser.KW_LAST);
                this.state = 1680;
                this.match(FlinkSqlParser.KW_ROW);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1681;
                this.match(FlinkSqlParser.KW_AFTER);
                this.state = 1682;
                this.match(FlinkSqlParser.KW_MATCH);
                this.state = 1683;
                this.match(FlinkSqlParser.KW_SKIP);
                this.state = 1684;
                this.match(FlinkSqlParser.KW_TO);
                this.state = 1685;
                this.match(FlinkSqlParser.KW_NEXT);
                this.state = 1686;
                this.match(FlinkSqlParser.KW_ROW);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1687;
                this.match(FlinkSqlParser.KW_AFTER);
                this.state = 1688;
                this.match(FlinkSqlParser.KW_MATCH);
                this.state = 1689;
                this.match(FlinkSqlParser.KW_SKIP);
                this.state = 1690;
                this.match(FlinkSqlParser.KW_TO);
                this.state = 1691;
                this.match(FlinkSqlParser.KW_LAST);
                this.state = 1692;
                this.unquotedIdentifier();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1693;
                this.match(FlinkSqlParser.KW_AFTER);
                this.state = 1694;
                this.match(FlinkSqlParser.KW_MATCH);
                this.state = 1695;
                this.match(FlinkSqlParser.KW_SKIP);
                this.state = 1696;
                this.match(FlinkSqlParser.KW_TO);
                this.state = 1697;
                this.match(FlinkSqlParser.KW_FIRST);
                this.state = 1698;
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
        this.enterRule(localContext, 250, FlinkSqlParser.RULE_patternVariablesDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1701;
            this.match(FlinkSqlParser.KW_DEFINE);
            this.state = 1702;
            this.projectItemDefinition();
            this.state = 1707;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 521) {
                {
                {
                this.state = 1703;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1704;
                this.projectItemDefinition();
                }
                }
                this.state = 1709;
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
        this.enterRule(localContext, 252, FlinkSqlParser.RULE_windowFrame);
        try {
            this.state = 1719;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_RANGE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1710;
                this.match(FlinkSqlParser.KW_RANGE);
                this.state = 1711;
                this.match(FlinkSqlParser.KW_BETWEEN);
                this.state = 1712;
                this.timeIntervalExpression();
                this.state = 1713;
                this.frameBound();
                }
                break;
            case FlinkSqlParser.KW_ROWS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1715;
                this.match(FlinkSqlParser.KW_ROWS);
                this.state = 1716;
                this.match(FlinkSqlParser.KW_BETWEEN);
                this.state = 1717;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1718;
                this.frameBound();
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
    public frameBound(): FrameBoundContext {
        let localContext = new FrameBoundContext(this.context, this.state);
        this.enterRule(localContext, 254, FlinkSqlParser.RULE_frameBound);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1721;
            this.match(FlinkSqlParser.KW_PRECEDING);
            this.state = 1722;
            this.match(FlinkSqlParser.KW_AND);
            this.state = 1723;
            this.match(FlinkSqlParser.KW_CURRENT);
            this.state = 1724;
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
    public withinClause(): WithinClauseContext {
        let localContext = new WithinClauseContext(this.context, this.state);
        this.enterRule(localContext, 256, FlinkSqlParser.RULE_withinClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1726;
            this.match(FlinkSqlParser.KW_WITHIN);
            this.state = 1727;
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
        this.enterRule(localContext, 258, FlinkSqlParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1729;
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
        let _startState = 260;
        this.enterRecursionRule(localContext, 260, FlinkSqlParser.RULE_booleanExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1743;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 193, this.context) ) {
            case 1:
                {
                localContext = new LogicalNotContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1732;
                this.match(FlinkSqlParser.KW_NOT);
                this.state = 1733;
                this.booleanExpression(6);
                }
                break;
            case 2:
                {
                localContext = new ExistsContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1734;
                this.match(FlinkSqlParser.KW_EXISTS);
                this.state = 1735;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1736;
                this.queryStatement(0);
                this.state = 1737;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 3:
                {
                localContext = new PredicatedContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1739;
                this.valueExpression(0);
                this.state = 1741;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 192, this.context) ) {
                case 1:
                    {
                    this.state = 1740;
                    this.predicate();
                    }
                    break;
                }
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1759;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 196, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1757;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 195, this.context) ) {
                    case 1:
                        {
                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as LogicalBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_booleanExpression);
                        this.state = 1745;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1746;
                        (localContext as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.KW_AND);
                        this.state = 1747;
                        (localContext as LogicalBinaryContext)._right = this.booleanExpression(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as LogicalBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_booleanExpression);
                        this.state = 1748;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1749;
                        (localContext as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.KW_OR);
                        this.state = 1750;
                        (localContext as LogicalBinaryContext)._right = this.booleanExpression(3);
                        }
                        break;
                    case 3:
                        {
                        localContext = new LogicalNestedContext(new BooleanExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_booleanExpression);
                        this.state = 1751;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 1752;
                        this.match(FlinkSqlParser.KW_IS);
                        this.state = 1754;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 242) {
                            {
                            this.state = 1753;
                            this.match(FlinkSqlParser.KW_NOT);
                            }
                        }

                        this.state = 1756;
                        (localContext as LogicalNestedContext)._kind = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 140 || _la === 245 || _la === 398 || _la === 405)) {
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
                this.state = 1761;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 196, this.context);
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
        this.enterRule(localContext, 262, FlinkSqlParser.RULE_predicate);
        let _la: number;
        try {
            this.state = 1836;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 208, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1763;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 242) {
                    {
                    this.state = 1762;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1765;
                localContext._kind = this.match(FlinkSqlParser.KW_BETWEEN);
                this.state = 1767;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19 || _la === 370) {
                    {
                    this.state = 1766;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 19 || _la === 370)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                }

                this.state = 1769;
                localContext._lower = this.valueExpression(0);
                this.state = 1770;
                this.match(FlinkSqlParser.KW_AND);
                this.state = 1771;
                localContext._upper = this.valueExpression(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1774;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 242) {
                    {
                    this.state = 1773;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1776;
                localContext._kind = this.match(FlinkSqlParser.KW_IN);
                this.state = 1777;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1778;
                this.expression();
                this.state = 1783;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 521) {
                    {
                    {
                    this.state = 1779;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1780;
                    this.expression();
                    }
                    }
                    this.state = 1785;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1786;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1789;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 242) {
                    {
                    this.state = 1788;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1791;
                localContext._kind = this.match(FlinkSqlParser.KW_IN);
                this.state = 1792;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1793;
                this.queryStatement(0);
                this.state = 1794;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1796;
                localContext._kind = this.match(FlinkSqlParser.KW_EXISTS);
                this.state = 1797;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1798;
                this.queryStatement(0);
                this.state = 1799;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1802;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 242) {
                    {
                    this.state = 1801;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1804;
                localContext._kind = this.match(FlinkSqlParser.KW_RLIKE);
                this.state = 1805;
                localContext._pattern = this.valueExpression(0);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1806;
                this.likePredicate();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1807;
                this.match(FlinkSqlParser.KW_IS);
                this.state = 1809;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 242) {
                    {
                    this.state = 1808;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1811;
                localContext._kind = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 140 || _la === 245 || _la === 398 || _la === 405)) {
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
                this.state = 1812;
                this.match(FlinkSqlParser.KW_IS);
                this.state = 1814;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 242) {
                    {
                    this.state = 1813;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1816;
                localContext._kind = this.match(FlinkSqlParser.KW_DISTINCT);
                this.state = 1817;
                this.match(FlinkSqlParser.KW_FROM);
                this.state = 1818;
                localContext._right = this.valueExpression(0);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1820;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 242) {
                    {
                    this.state = 1819;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1822;
                localContext._kind = this.match(FlinkSqlParser.KW_SIMILAR);
                this.state = 1823;
                this.match(FlinkSqlParser.KW_TO);
                this.state = 1824;
                localContext._right = this.valueExpression(0);
                this.state = 1827;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 206, this.context) ) {
                case 1:
                    {
                    this.state = 1825;
                    this.match(FlinkSqlParser.KW_ESCAPE);
                    this.state = 1826;
                    this.stringLiteral();
                    }
                    break;
                }
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 1829;
                this.match(FlinkSqlParser.KW_IS);
                this.state = 1830;
                this.match(FlinkSqlParser.KW_JSON);
                this.state = 1834;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 207, this.context) ) {
                case 1:
                    {
                    this.state = 1831;
                    this.match(FlinkSqlParser.KW_VALUE);
                    }
                    break;
                case 2:
                    {
                    this.state = 1832;
                    this.match(FlinkSqlParser.KW_ARRAY);
                    }
                    break;
                case 3:
                    {
                    this.state = 1833;
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
    public likePredicate(): LikePredicateContext {
        let localContext = new LikePredicateContext(this.context, this.state);
        this.enterRule(localContext, 264, FlinkSqlParser.RULE_likePredicate);
        let _la: number;
        try {
            this.state = 1867;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 214, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1839;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 242) {
                    {
                    this.state = 1838;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1841;
                localContext._kind = this.match(FlinkSqlParser.KW_LIKE);
                this.state = 1842;
                localContext._quantifier = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 5 || _la === 11)) {
                    localContext._quantifier = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1856;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 211, this.context) ) {
                case 1:
                    {
                    this.state = 1843;
                    this.match(FlinkSqlParser.LR_BRACKET);
                    this.state = 1844;
                    this.match(FlinkSqlParser.RR_BRACKET);
                    }
                    break;
                case 2:
                    {
                    this.state = 1845;
                    this.match(FlinkSqlParser.LR_BRACKET);
                    this.state = 1846;
                    this.expression();
                    this.state = 1851;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 521) {
                        {
                        {
                        this.state = 1847;
                        this.match(FlinkSqlParser.COMMA);
                        this.state = 1848;
                        this.expression();
                        }
                        }
                        this.state = 1853;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 1854;
                    this.match(FlinkSqlParser.RR_BRACKET);
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1859;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 242) {
                    {
                    this.state = 1858;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1861;
                localContext._kind = this.match(FlinkSqlParser.KW_LIKE);
                this.state = 1862;
                localContext._pattern = this.valueExpression(0);
                this.state = 1865;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 213, this.context) ) {
                case 1:
                    {
                    this.state = 1863;
                    this.match(FlinkSqlParser.KW_ESCAPE);
                    this.state = 1864;
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
        let _startState = 266;
        this.enterRecursionRule(localContext, 266, FlinkSqlParser.RULE_valueExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1873;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 215, this.context) ) {
            case 1:
                {
                localContext = new ValueExpressionDefaultContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1870;
                this.primaryExpression(0);
                }
                break;
            case 2:
                {
                localContext = new ArithmeticUnaryContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1871;
                (localContext as ArithmeticUnaryContext)._operator = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 510)) & ~0x1F) === 0 && ((1 << (_la - 510)) & 3145729) !== 0))) {
                    (localContext as ArithmeticUnaryContext)._operator = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1872;
                this.valueExpression(7);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1896;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 217, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1894;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 216, this.context) ) {
                    case 1:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1875;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 1876;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 453 || ((((_la - 528)) & ~0x1F) === 0 && ((1 << (_la - 528)) & 145) !== 0))) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1877;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(7);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1878;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 1879;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 530)) & ~0x1F) === 0 && ((1 << (_la - 530)) & 11) !== 0))) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1880;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(6);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1881;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 1882;
                        (localContext as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_AND_OP);
                        this.state = 1883;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(5);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1884;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1885;
                        (localContext as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_XOR_OP);
                        this.state = 1886;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(4);
                        }
                        break;
                    case 5:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1887;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1888;
                        (localContext as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_OR_OP);
                        this.state = 1889;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(3);
                        }
                        break;
                    case 6:
                        {
                        localContext = new ComparisonContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ComparisonContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1890;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 1891;
                        this.comparisonOperator();
                        this.state = 1892;
                        (localContext as ComparisonContext)._right = this.valueExpression(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 1898;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 217, this.context);
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
        this.enterRule(localContext, 268, FlinkSqlParser.RULE_functionCallExpression);
        let _la: number;
        try {
            this.state = 1918;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_CURRENT_DATE:
            case FlinkSqlParser.KW_CURRENT_TIME:
            case FlinkSqlParser.KW_CURRENT_TIMESTAMP:
            case FlinkSqlParser.KW_LOCALTIME:
            case FlinkSqlParser.KW_LOCALTIMESTAMP:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1899;
                this.reservedKeywordsNoParamsUsedAsFuncName();
                }
                break;
            case FlinkSqlParser.KW_DATE:
            case FlinkSqlParser.KW_INTERVAL:
            case FlinkSqlParser.KW_TIME:
            case FlinkSqlParser.KW_TIMESTAMP:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1900;
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
                this.state = 1901;
                this.functionNameWithParams();
                this.state = 1902;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1914;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 8396848) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 10489249) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 1883341377) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 201330753) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 337641555) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 488456033) !== 0) || ((((_la - 215)) & ~0x1F) === 0 && ((1 << (_la - 215)) & 3892347713) !== 0) || ((((_la - 265)) & ~0x1F) === 0 && ((1 << (_la - 265)) & 537530369) !== 0) || ((((_la - 318)) & ~0x1F) === 0 && ((1 << (_la - 318)) & 131185) !== 0) || ((((_la - 358)) & ~0x1F) === 0 && ((1 << (_la - 358)) & 14681219) !== 0) || ((((_la - 390)) & ~0x1F) === 0 && ((1 << (_la - 390)) & 3238528833) !== 0) || ((((_la - 428)) & ~0x1F) === 0 && ((1 << (_la - 428)) & 4294966785) !== 0) || ((((_la - 460)) & ~0x1F) === 0 && ((1 << (_la - 460)) & 4294967295) !== 0) || ((((_la - 492)) & ~0x1F) === 0 && ((1 << (_la - 492)) & 33832959) !== 0) || ((((_la - 528)) & ~0x1F) === 0 && ((1 << (_la - 528)) & 31757) !== 0)) {
                    {
                    this.state = 1904;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 218, this.context) ) {
                    case 1:
                        {
                        this.state = 1903;
                        this.setQuantifier();
                        }
                        break;
                    }
                    this.state = 1906;
                    this.functionParam();
                    this.state = 1911;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 521) {
                        {
                        {
                        this.state = 1907;
                        this.match(FlinkSqlParser.COMMA);
                        this.state = 1908;
                        this.functionParam();
                        }
                        }
                        this.state = 1913;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 1916;
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
        let _startState = 270;
        this.enterRecursionRule(localContext, 270, FlinkSqlParser.RULE_primaryExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1995;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 228, this.context) ) {
            case 1:
                {
                localContext = new SearchedCaseContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1921;
                this.match(FlinkSqlParser.KW_CASE);
                this.state = 1923;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1922;
                    this.whenClause();
                    }
                    }
                    this.state = 1925;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 429);
                this.state = 1929;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 120) {
                    {
                    this.state = 1927;
                    this.match(FlinkSqlParser.KW_ELSE);
                    this.state = 1928;
                    (localContext as SearchedCaseContext)._elseExpression = this.expression();
                    }
                }

                this.state = 1931;
                this.match(FlinkSqlParser.KW_END);
                }
                break;
            case 2:
                {
                localContext = new SimpleCaseContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1933;
                this.match(FlinkSqlParser.KW_CASE);
                this.state = 1934;
                (localContext as SimpleCaseContext)._value = this.expression();
                this.state = 1936;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1935;
                    this.whenClause();
                    }
                    }
                    this.state = 1938;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 429);
                this.state = 1942;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 120) {
                    {
                    this.state = 1940;
                    this.match(FlinkSqlParser.KW_ELSE);
                    this.state = 1941;
                    (localContext as SimpleCaseContext)._elseExpression = this.expression();
                    }
                }

                this.state = 1944;
                this.match(FlinkSqlParser.KW_END);
                }
                break;
            case 3:
                {
                localContext = new CastContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1946;
                this.match(FlinkSqlParser.KW_CAST);
                this.state = 1947;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1948;
                this.expression();
                this.state = 1949;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 1950;
                this.columnType();
                this.state = 1951;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                {
                localContext = new FirstContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1953;
                this.match(FlinkSqlParser.KW_FIRST);
                this.state = 1954;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1955;
                this.expression();
                this.state = 1958;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 462) {
                    {
                    this.state = 1956;
                    this.match(FlinkSqlParser.KW_IGNORE);
                    this.state = 1957;
                    this.match(FlinkSqlParser.KW_NULLS);
                    }
                }

                this.state = 1960;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 5:
                {
                localContext = new LastContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1962;
                this.match(FlinkSqlParser.KW_LAST);
                this.state = 1963;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1964;
                this.expression();
                this.state = 1967;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 462) {
                    {
                    this.state = 1965;
                    this.match(FlinkSqlParser.KW_IGNORE);
                    this.state = 1966;
                    this.match(FlinkSqlParser.KW_NULLS);
                    }
                }

                this.state = 1969;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 6:
                {
                localContext = new PositionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1971;
                this.match(FlinkSqlParser.KW_POSITION);
                this.state = 1972;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1973;
                (localContext as PositionContext)._substr = this.valueExpression(0);
                this.state = 1974;
                this.match(FlinkSqlParser.KW_IN);
                this.state = 1975;
                (localContext as PositionContext)._str = this.valueExpression(0);
                this.state = 1976;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 7:
                {
                localContext = new ConstantDefaultContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1978;
                this.constant();
                }
                break;
            case 8:
                {
                localContext = new StarContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1979;
                this.match(FlinkSqlParser.ASTERISK_SIGN);
                }
                break;
            case 9:
                {
                localContext = new StarContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1980;
                this.uid();
                this.state = 1981;
                this.match(FlinkSqlParser.DOT);
                this.state = 1982;
                this.match(FlinkSqlParser.ASTERISK_SIGN);
                }
                break;
            case 10:
                {
                localContext = new SubqueryExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1984;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1985;
                this.queryStatement(0);
                this.state = 1986;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 11:
                {
                localContext = new FunctionCallContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1988;
                this.functionCallExpression();
                }
                break;
            case 12:
                {
                localContext = new ColumnReferenceContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1989;
                this.columnNamePath();
                }
                break;
            case 13:
                {
                localContext = new DereferenceContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1990;
                this.dereferenceDefinition();
                }
                break;
            case 14:
                {
                localContext = new ParenthesizedExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1991;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1992;
                this.expression();
                this.state = 1993;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2004;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 229, this.context);
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
                    this.state = 1997;
                    if (!(this.precpred(this.context, 4))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                    }
                    this.state = 1998;
                    this.match(FlinkSqlParser.LS_BRACKET);
                    this.state = 1999;
                    (localContext as SubscriptContext)._index = this.valueExpression(0);
                    this.state = 2000;
                    this.match(FlinkSqlParser.RS_BRACKET);
                    }
                    }
                }
                this.state = 2006;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 229, this.context);
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
        this.enterRule(localContext, 272, FlinkSqlParser.RULE_functionNameCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2007;
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
        this.enterRule(localContext, 274, FlinkSqlParser.RULE_functionName);
        try {
            this.state = 2013;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 230, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2009;
                this.reservedKeywordsUsedAsFuncName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2010;
                this.reservedKeywordsNoParamsUsedAsFuncName();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2011;
                this.reservedKeywordsFollowParamsUsedAsFuncName();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2012;
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
        this.enterRule(localContext, 276, FlinkSqlParser.RULE_functionNameAndParams);
        try {
            this.state = 2019;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_DATE:
            case FlinkSqlParser.KW_TIME:
            case FlinkSqlParser.KW_TIMESTAMP:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2015;
                this.reservedKeywordsFollowParamsUsedAsFuncName();
                this.state = 2016;
                this.match(FlinkSqlParser.STRING_LITERAL);
                }
                break;
            case FlinkSqlParser.KW_INTERVAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2018;
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
        this.enterRule(localContext, 278, FlinkSqlParser.RULE_functionNameWithParams);
        try {
            this.state = 2023;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 232, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2021;
                this.reservedKeywordsUsedAsFuncName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2022;
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
        this.enterRule(localContext, 280, FlinkSqlParser.RULE_functionParam);
        try {
            this.state = 2029;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 233, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2025;
                this.reservedKeywordsUsedAsFuncParam();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2026;
                this.timeIntervalUnit();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2027;
                this.timePointUnit();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2028;
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
    public dereferenceDefinition(): DereferenceDefinitionContext {
        let localContext = new DereferenceDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 282, FlinkSqlParser.RULE_dereferenceDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2031;
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
        this.enterRule(localContext, 284, FlinkSqlParser.RULE_correlationName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2033;
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
        this.enterRule(localContext, 286, FlinkSqlParser.RULE_qualifiedName);
        try {
            this.state = 2037;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 234, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2035;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2036;
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
        this.enterRule(localContext, 288, FlinkSqlParser.RULE_timeIntervalExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2039;
            this.match(FlinkSqlParser.KW_INTERVAL);
            this.state = 2042;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 235, this.context) ) {
            case 1:
                {
                this.state = 2040;
                this.errorCapturingMultiUnitsInterval();
                }
                break;
            case 2:
                {
                this.state = 2041;
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
        this.enterRule(localContext, 290, FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2044;
            this.multiUnitsInterval();
            this.state = 2046;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 236, this.context) ) {
            case 1:
                {
                this.state = 2045;
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
        this.enterRule(localContext, 292, FlinkSqlParser.RULE_multiUnitsInterval);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2051;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 2048;
                    this.intervalValue();
                    this.state = 2049;
                    this.timeIntervalUnit();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2053;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 237, this.context);
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
        this.enterRule(localContext, 294, FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2055;
            localContext._body = this.unitToUnitInterval();
            this.state = 2058;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 238, this.context) ) {
            case 1:
                {
                this.state = 2056;
                localContext._error1 = this.multiUnitsInterval();
                }
                break;
            case 2:
                {
                this.state = 2057;
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
        this.enterRule(localContext, 296, FlinkSqlParser.RULE_unitToUnitInterval);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2060;
            localContext._value = this.intervalValue();
            this.state = 2061;
            localContext._from_ = this.timeIntervalUnit();
            this.state = 2062;
            this.match(FlinkSqlParser.KW_TO);
            this.state = 2063;
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
        this.enterRule(localContext, 298, FlinkSqlParser.RULE_intervalValue);
        let _la: number;
        try {
            this.state = 2070;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.HYPHEN_SIGN:
            case FlinkSqlParser.ADD_SIGN:
            case FlinkSqlParser.DIG_LITERAL:
            case FlinkSqlParser.REAL_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2066;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 530 || _la === 531) {
                    {
                    this.state = 2065;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 530 || _la === 531)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                }

                this.state = 2068;
                _la = this.tokenStream.LA(1);
                if(!(_la === 539 || _la === 540)) {
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
                this.state = 2069;
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
        this.enterRule(localContext, 300, FlinkSqlParser.RULE_tableAlias);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2073;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 2072;
                this.match(FlinkSqlParser.KW_AS);
                }
            }

            this.state = 2075;
            localContext._alias = this.identifier();
            this.state = 2077;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 242, this.context) ) {
            case 1:
                {
                this.state = 2076;
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
        this.enterRule(localContext, 302, FlinkSqlParser.RULE_errorCapturingIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2079;
            this.identifier();
            this.state = 2080;
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
        this.enterRule(localContext, 304, FlinkSqlParser.RULE_errorCapturingIdentifierExtra);
        let _la: number;
        try {
            this.state = 2089;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_MINUS:
                localContext = new ErrorIdentContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2084;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 2082;
                    this.match(FlinkSqlParser.KW_MINUS);
                    this.state = 2083;
                    this.identifier();
                    }
                    }
                    this.state = 2086;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 222);
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
        this.enterRule(localContext, 306, FlinkSqlParser.RULE_identifierList);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2091;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 2092;
            this.identifierSeq();
            this.state = 2093;
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
        this.enterRule(localContext, 308, FlinkSqlParser.RULE_identifierSeq);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2095;
            this.identifier();
            this.state = 2100;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 521) {
                {
                {
                this.state = 2096;
                this.match(FlinkSqlParser.COMMA);
                this.state = 2097;
                this.identifier();
                }
                }
                this.state = 2102;
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
        this.enterRule(localContext, 310, FlinkSqlParser.RULE_identifier);
        try {
            this.state = 2106;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.DIG_LITERAL:
            case FlinkSqlParser.ID_LITERAL:
                localContext = new UnquotedIdentifierAlternativeContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2103;
                this.unquotedIdentifier();
                }
                break;
            case FlinkSqlParser.STRING_LITERAL:
                localContext = new QuotedIdentifierAlternativeContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2104;
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
                this.state = 2105;
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
        this.enterRule(localContext, 312, FlinkSqlParser.RULE_unquotedIdentifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2108;
            _la = this.tokenStream.LA(1);
            if(!(_la === 539 || _la === 542)) {
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
        this.enterRule(localContext, 314, FlinkSqlParser.RULE_quotedIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2110;
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
        this.enterRule(localContext, 316, FlinkSqlParser.RULE_whenClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2112;
            this.match(FlinkSqlParser.KW_WHEN);
            this.state = 2113;
            localContext._condition = this.expression();
            this.state = 2114;
            this.match(FlinkSqlParser.KW_THEN);
            this.state = 2115;
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
        this.enterRule(localContext, 318, FlinkSqlParser.RULE_catalogPath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2117;
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
        this.enterRule(localContext, 320, FlinkSqlParser.RULE_catalogPathCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2119;
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
        this.enterRule(localContext, 322, FlinkSqlParser.RULE_databasePath);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2121;
            this.identifier();
            this.state = 2124;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 514) {
                {
                this.state = 2122;
                this.match(FlinkSqlParser.DOT);
                this.state = 2123;
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
        this.enterRule(localContext, 324, FlinkSqlParser.RULE_databasePathCreate);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2126;
            this.identifier();
            this.state = 2129;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 514) {
                {
                this.state = 2127;
                this.match(FlinkSqlParser.DOT);
                this.state = 2128;
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
        this.enterRule(localContext, 326, FlinkSqlParser.RULE_tablePathCreate);
        let _la: number;
        try {
            this.state = 2143;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 251, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2131;
                this.identifier();
                this.state = 2134;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 514) {
                    {
                    this.state = 2132;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2133;
                    this.identifier();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2136;
                this.identifier();
                this.state = 2137;
                this.match(FlinkSqlParser.DOT);
                this.state = 2138;
                this.identifier();
                this.state = 2141;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 514) {
                    {
                    this.state = 2139;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2140;
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
        this.enterRule(localContext, 328, FlinkSqlParser.RULE_tablePath);
        try {
            this.state = 2157;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 254, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2145;
                this.identifier();
                this.state = 2148;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 252, this.context) ) {
                case 1:
                    {
                    this.state = 2146;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2147;
                    this.identifier();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2150;
                this.identifier();
                this.state = 2151;
                this.match(FlinkSqlParser.DOT);
                this.state = 2152;
                this.identifier();
                this.state = 2155;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 253, this.context) ) {
                case 1:
                    {
                    this.state = 2153;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2154;
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
        this.enterRule(localContext, 330, FlinkSqlParser.RULE_viewPath);
        try {
            this.state = 2171;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 257, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2159;
                this.identifier();
                this.state = 2162;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 255, this.context) ) {
                case 1:
                    {
                    this.state = 2160;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2161;
                    this.identifier();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2164;
                this.identifier();
                this.state = 2165;
                this.match(FlinkSqlParser.DOT);
                this.state = 2166;
                this.identifier();
                this.state = 2169;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 256, this.context) ) {
                case 1:
                    {
                    this.state = 2167;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2168;
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
        this.enterRule(localContext, 332, FlinkSqlParser.RULE_viewPathCreate);
        let _la: number;
        try {
            this.state = 2185;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 260, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2173;
                this.identifier();
                this.state = 2176;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 514) {
                    {
                    this.state = 2174;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2175;
                    this.identifier();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2178;
                this.identifier();
                this.state = 2179;
                this.match(FlinkSqlParser.DOT);
                this.state = 2180;
                this.identifier();
                this.state = 2183;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 514) {
                    {
                    this.state = 2181;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2182;
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
        this.enterRule(localContext, 334, FlinkSqlParser.RULE_uid);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2187;
            this.identifier();
            this.state = 2192;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 261, this.context);
            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1 + 1) {
                    {
                    {
                    this.state = 2188;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2189;
                    this.identifier();
                    }
                    }
                }
                this.state = 2194;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 261, this.context);
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
        this.enterRule(localContext, 336, FlinkSqlParser.RULE_withOption);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2195;
            this.match(FlinkSqlParser.KW_WITH);
            this.state = 2196;
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
        this.enterRule(localContext, 338, FlinkSqlParser.RULE_ifNotExists);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2198;
            this.match(FlinkSqlParser.KW_IF);
            this.state = 2199;
            this.match(FlinkSqlParser.KW_NOT);
            this.state = 2200;
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
        this.enterRule(localContext, 340, FlinkSqlParser.RULE_ifExists);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2202;
            this.match(FlinkSqlParser.KW_IF);
            this.state = 2203;
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
        this.enterRule(localContext, 342, FlinkSqlParser.RULE_tablePropertyList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2205;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 2206;
            this.tableProperty();
            this.state = 2211;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 521) {
                {
                {
                this.state = 2207;
                this.match(FlinkSqlParser.COMMA);
                this.state = 2208;
                this.tableProperty();
                }
                }
                this.state = 2213;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 2214;
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
        this.enterRule(localContext, 344, FlinkSqlParser.RULE_tableProperty);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2216;
            localContext._key = this.tablePropertyKey();
            this.state = 2221;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 140 || _la === 398 || _la === 506 || ((((_la - 538)) & ~0x1F) === 0 && ((1 << (_la - 538)) & 7) !== 0)) {
                {
                this.state = 2218;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 506) {
                    {
                    this.state = 2217;
                    this.match(FlinkSqlParser.EQUAL_SYMBOL);
                    }
                }

                this.state = 2220;
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
        this.enterRule(localContext, 346, FlinkSqlParser.RULE_tablePropertyKey);
        try {
            this.state = 2226;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 265, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2223;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2224;
                this.dereferenceDefinition();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2225;
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
        this.enterRule(localContext, 348, FlinkSqlParser.RULE_tablePropertyValue);
        try {
            this.state = 2232;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.DIG_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2228;
                this.match(FlinkSqlParser.DIG_LITERAL);
                }
                break;
            case FlinkSqlParser.REAL_LITERAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2229;
                this.match(FlinkSqlParser.REAL_LITERAL);
                }
                break;
            case FlinkSqlParser.KW_FALSE:
            case FlinkSqlParser.KW_TRUE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2230;
                this.booleanLiteral();
                }
                break;
            case FlinkSqlParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2231;
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
        this.enterRule(localContext, 350, FlinkSqlParser.RULE_logicalOperator);
        try {
            this.state = 2240;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_AND:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2234;
                this.match(FlinkSqlParser.KW_AND);
                }
                break;
            case FlinkSqlParser.BIT_AND_OP:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2235;
                this.match(FlinkSqlParser.BIT_AND_OP);
                this.state = 2236;
                this.match(FlinkSqlParser.BIT_AND_OP);
                }
                break;
            case FlinkSqlParser.KW_OR:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2237;
                this.match(FlinkSqlParser.KW_OR);
                }
                break;
            case FlinkSqlParser.BIT_OR_OP:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2238;
                this.match(FlinkSqlParser.BIT_OR_OP);
                this.state = 2239;
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
        this.enterRule(localContext, 352, FlinkSqlParser.RULE_comparisonOperator);
        try {
            this.state = 2256;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 268, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2242;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2243;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2244;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2245;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 2246;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2247;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                this.state = 2248;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2249;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 2250;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2251;
                this.match(FlinkSqlParser.EXCLAMATION_SYMBOL);
                this.state = 2252;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2253;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 2254;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                this.state = 2255;
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
        this.enterRule(localContext, 354, FlinkSqlParser.RULE_bitOperator);
        try {
            this.state = 2265;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.LESS_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2258;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 2259;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                }
                break;
            case FlinkSqlParser.GREATER_SYMBOL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2260;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                this.state = 2261;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                }
                break;
            case FlinkSqlParser.BIT_AND_OP:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2262;
                this.match(FlinkSqlParser.BIT_AND_OP);
                }
                break;
            case FlinkSqlParser.BIT_XOR_OP:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2263;
                this.match(FlinkSqlParser.BIT_XOR_OP);
                }
                break;
            case FlinkSqlParser.BIT_OR_OP:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2264;
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
        this.enterRule(localContext, 356, FlinkSqlParser.RULE_mathOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2267;
            _la = this.tokenStream.LA(1);
            if(!(_la === 453 || ((((_la - 528)) & ~0x1F) === 0 && ((1 << (_la - 528)) & 221) !== 0))) {
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
        this.enterRule(localContext, 358, FlinkSqlParser.RULE_unaryOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2269;
            _la = this.tokenStream.LA(1);
            if(!(_la === 242 || ((((_la - 509)) & ~0x1F) === 0 && ((1 << (_la - 509)) & 6291459) !== 0))) {
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
        this.enterRule(localContext, 360, FlinkSqlParser.RULE_constant);
        let _la: number;
        try {
            this.state = 2285;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_INTERVAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2271;
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
                this.state = 2272;
                this.timePointLiteral();
                }
                break;
            case FlinkSqlParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2273;
                this.stringLiteral();
                }
                break;
            case FlinkSqlParser.HYPHEN_SIGN:
            case FlinkSqlParser.DIG_LITERAL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2275;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 530) {
                    {
                    this.state = 2274;
                    this.match(FlinkSqlParser.HYPHEN_SIGN);
                    }
                }

                this.state = 2277;
                this.decimalLiteral();
                }
                break;
            case FlinkSqlParser.KW_FALSE:
            case FlinkSqlParser.KW_TRUE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2278;
                this.booleanLiteral();
                }
                break;
            case FlinkSqlParser.REAL_LITERAL:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2279;
                this.match(FlinkSqlParser.REAL_LITERAL);
                }
                break;
            case FlinkSqlParser.BIT_STRING:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2280;
                this.match(FlinkSqlParser.BIT_STRING);
                }
                break;
            case FlinkSqlParser.KW_NOT:
            case FlinkSqlParser.KW_NULL:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2282;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 242) {
                    {
                    this.state = 2281;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 2284;
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
        this.enterRule(localContext, 362, FlinkSqlParser.RULE_timePointLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2287;
            this.timePointUnit();
            this.state = 2288;
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
        this.enterRule(localContext, 364, FlinkSqlParser.RULE_stringLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2290;
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
        this.enterRule(localContext, 366, FlinkSqlParser.RULE_decimalLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2292;
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
        this.enterRule(localContext, 368, FlinkSqlParser.RULE_booleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2294;
            _la = this.tokenStream.LA(1);
            if(!(_la === 140 || _la === 398)) {
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
        this.enterRule(localContext, 370, FlinkSqlParser.RULE_setQuantifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2296;
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
        this.enterRule(localContext, 372, FlinkSqlParser.RULE_timePointUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2298;
            _la = this.tokenStream.LA(1);
            if(!(_la === 97 || _la === 165 || _la === 223 || _la === 230 || _la === 335 || _la === 437 || ((((_la - 471)) & ~0x1F) === 0 && ((1 << (_la - 471)) & 262149) !== 0) || _la === 503)) {
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
        this.enterRule(localContext, 374, FlinkSqlParser.RULE_timeIntervalUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2300;
            _la = this.tokenStream.LA(1);
            if(!(_la === 97 || _la === 165 || _la === 223 || _la === 230 || _la === 335 || ((((_la - 428)) & ~0x1F) === 0 && ((1 << (_la - 428)) & 140542465) !== 0) || ((((_la - 461)) & ~0x1F) === 0 && ((1 << (_la - 461)) & 2415983617) !== 0) || _la === 503 || _la === 504)) {
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
        this.enterRule(localContext, 376, FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncParam);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2302;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 268435713) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 193) !== 0) || _la === 113 || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 385) !== 0) || _la === 390 || _la === 414 || _la === 528)) {
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
        this.enterRule(localContext, 378, FlinkSqlParser.RULE_reservedKeywordsNoParamsUsedAsFuncName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2304;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 193) !== 0) || _la === 208 || _la === 209)) {
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
        this.enterRule(localContext, 380, FlinkSqlParser.RULE_reservedKeywordsFollowParamsUsedAsFuncName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2306;
            _la = this.tokenStream.LA(1);
            if(!(_la === 91 || _la === 379 || _la === 380)) {
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
        this.enterRule(localContext, 382, FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2308;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 8396816) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 2147811433) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 25165825) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 134221825) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 337641553) !== 0) || ((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & 277391867) !== 0) || ((((_la - 221)) & ~0x1F) === 0 && ((1 << (_la - 221)) & 41943565) !== 0) || ((((_la - 265)) & ~0x1F) === 0 && ((1 << (_la - 265)) & 537530369) !== 0) || ((((_la - 318)) & ~0x1F) === 0 && ((1 << (_la - 318)) & 131185) !== 0) || ((((_la - 358)) & ~0x1F) === 0 && ((1 << (_la - 358)) & 8389763) !== 0) || ((((_la - 396)) & ~0x1F) === 0 && ((1 << (_la - 396)) & 50339865) !== 0) || _la === 437 || _la === 470 || _la === 489 || _la === 503)) {
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
        this.enterRule(localContext, 384, FlinkSqlParser.RULE_nonReservedKeywords);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2310;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 438)) & ~0x1F) === 0 && ((1 << (_la - 438)) & 4294967295) !== 0) || ((((_la - 470)) & ~0x1F) === 0 && ((1 << (_la - 470)) & 4294967295) !== 0) || ((((_la - 502)) & ~0x1F) === 0 && ((1 << (_la - 502)) & 15) !== 0))) {
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
        case 79:
            return this.queryStatement_sempred(localContext as QueryStatementContext, predIndex);
        case 89:
            return this.tableExpression_sempred(localContext as TableExpressionContext, predIndex);
        case 130:
            return this.booleanExpression_sempred(localContext as BooleanExpressionContext, predIndex);
        case 133:
            return this.valueExpression_sempred(localContext as ValueExpressionContext, predIndex);
        case 135:
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
            return this.precpred(this.context, 4);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,542,2313,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        2,192,7,192,1,0,5,0,388,8,0,10,0,12,0,391,9,0,1,0,1,0,1,1,1,1,3,
        1,397,8,1,1,1,3,1,400,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,3,2,414,8,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
        4,1,4,1,4,1,4,1,4,1,4,3,4,432,8,4,1,5,1,5,3,5,436,8,5,1,6,1,6,1,
        6,1,7,1,7,1,7,1,7,3,7,445,8,7,1,7,1,7,1,7,3,7,450,8,7,1,8,1,8,1,
        8,5,8,455,8,8,10,8,12,8,458,9,8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,
        1,10,3,10,468,8,10,1,11,1,11,1,11,1,11,1,11,5,11,475,8,11,10,11,
        12,11,478,9,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,
        489,8,12,1,12,3,12,492,8,12,1,12,1,12,1,12,1,12,1,12,3,12,499,8,
        12,1,12,3,12,502,8,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,510,8,12,
        1,12,1,12,3,12,514,8,12,1,12,1,12,1,12,3,12,519,8,12,1,12,3,12,522,
        8,12,1,13,1,13,1,13,1,13,1,13,3,13,529,8,13,1,14,1,14,1,14,1,14,
        1,15,1,15,3,15,537,8,15,1,16,1,16,3,16,541,8,16,1,17,1,17,1,17,1,
        17,1,18,1,18,1,18,1,18,1,18,1,18,3,18,553,8,18,1,18,1,18,1,18,1,
        18,1,18,1,18,3,18,561,8,18,1,18,1,18,3,18,565,8,18,1,18,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,3,18,597,8,18,1,19,3,19,600,8,19,1,19,4,19,603,8,19,11,19,12,
        19,604,1,20,1,20,3,20,609,8,20,1,21,1,21,3,21,613,8,21,1,21,1,21,
        3,21,617,8,21,1,21,1,21,1,21,1,21,1,21,5,21,624,8,21,10,21,12,21,
        627,9,21,1,21,1,21,3,21,631,8,21,1,21,1,21,3,21,635,8,21,1,21,1,
        21,3,21,639,8,21,1,21,1,21,1,21,3,21,644,8,21,1,21,3,21,647,8,21,
        1,21,1,21,3,21,651,8,21,1,22,1,22,1,22,3,22,656,8,22,1,22,1,22,1,
        22,1,22,3,22,662,8,22,1,23,1,23,1,23,3,23,667,8,23,1,24,1,24,1,24,
        3,24,672,8,24,1,24,1,24,3,24,676,8,24,1,25,1,25,3,25,680,8,25,1,
        26,1,26,3,26,684,8,26,1,27,1,27,1,28,1,28,1,28,1,28,5,28,692,8,28,
        10,28,12,28,695,9,28,1,28,1,28,1,29,1,29,1,29,3,29,702,8,29,1,29,
        1,29,3,29,706,8,29,1,29,1,29,3,29,710,8,29,1,29,1,29,3,29,714,8,
        29,1,29,1,29,3,29,718,8,29,1,29,1,29,3,29,722,8,29,1,29,1,29,3,29,
        726,8,29,1,29,1,29,3,29,730,8,29,1,29,1,29,3,29,734,8,29,3,29,736,
        8,29,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,3,31,746,8,31,1,31,
        1,31,1,32,1,32,1,32,1,32,3,32,754,8,32,1,32,1,32,1,33,1,33,1,33,
        1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,
        1,35,1,35,5,35,776,8,35,10,35,12,35,779,9,35,1,35,1,35,1,35,1,35,
        1,35,1,35,1,35,1,35,1,35,5,35,790,8,35,10,35,12,35,793,9,35,1,35,
        1,35,3,35,797,8,35,1,36,1,36,3,36,801,8,36,1,36,1,36,1,36,1,36,3,
        36,807,8,36,1,36,3,36,810,8,36,1,36,3,36,813,8,36,1,37,1,37,1,37,
        1,37,1,37,3,37,820,8,37,1,37,3,37,823,8,37,1,38,1,38,1,39,1,39,1,
        39,1,39,1,39,3,39,832,8,39,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,
        41,1,42,1,42,3,42,844,8,42,1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,
        43,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,5,
        46,866,8,46,10,46,12,46,869,9,46,1,46,1,46,1,47,1,47,1,47,1,47,1,
        47,5,47,878,8,47,10,47,12,47,881,9,47,1,47,1,47,3,47,885,8,47,1,
        48,1,48,3,48,889,8,48,1,49,1,49,1,49,1,49,5,49,895,8,49,10,49,12,
        49,898,9,49,1,49,3,49,901,8,49,1,50,1,50,1,50,1,50,3,50,907,8,50,
        1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,3,52,917,8,52,1,52,1,52,
        1,52,3,52,922,8,52,1,52,1,52,1,53,1,53,3,53,928,8,53,1,53,1,53,3,
        53,932,8,53,1,53,1,53,3,53,936,8,53,1,53,1,53,3,53,940,8,53,1,53,
        1,53,1,53,1,54,1,54,1,54,1,54,3,54,949,8,54,1,54,1,54,3,54,953,8,
        54,1,54,1,54,1,54,1,54,1,54,3,54,960,8,54,1,54,3,54,963,8,54,1,55,
        1,55,1,55,1,55,1,55,1,55,5,55,971,8,55,10,55,12,55,974,9,55,1,56,
        1,56,1,57,1,57,1,57,3,57,981,8,57,1,57,1,57,1,57,1,57,1,57,1,57,
        3,57,989,8,57,1,58,1,58,3,58,993,8,58,1,58,1,58,1,58,1,59,1,59,1,
        59,1,60,1,60,1,60,1,60,1,60,1,60,1,60,3,60,1008,8,60,1,61,1,61,1,
        61,1,61,1,62,1,62,1,62,1,62,1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,
        64,1,64,3,64,1027,8,64,1,65,1,65,1,65,1,65,1,65,1,66,1,66,1,66,1,
        66,3,66,1038,8,66,1,66,1,66,3,66,1042,8,66,1,66,1,66,1,66,1,66,1,
        66,3,66,1049,8,66,1,67,1,67,1,67,3,67,1054,8,67,1,67,1,67,1,68,1,
        68,3,68,1060,8,68,1,68,1,68,3,68,1064,8,68,1,68,1,68,1,69,1,69,1,
        69,3,69,1071,8,69,1,69,1,69,3,69,1075,8,69,1,70,1,70,3,70,1079,8,
        70,1,70,1,70,3,70,1083,8,70,1,70,1,70,1,71,1,71,1,71,1,71,3,71,1091,
        8,71,1,71,1,71,3,71,1095,8,71,1,71,1,71,1,72,3,72,1100,8,72,1,72,
        1,72,1,72,1,72,3,72,1106,8,72,1,73,1,73,1,73,1,73,3,73,1112,8,73,
        1,73,3,73,1115,8,73,1,73,1,73,3,73,1119,8,73,1,74,1,74,1,74,1,75,
        1,75,1,75,1,75,5,75,1128,8,75,10,75,12,75,1131,9,75,1,76,1,76,1,
        76,1,76,5,76,1137,8,76,10,76,12,76,1140,9,76,1,76,1,76,1,77,1,77,
        1,77,1,77,1,77,1,77,1,77,4,77,1151,8,77,11,77,12,77,1152,1,77,1,
        77,1,78,1,78,1,78,1,78,1,78,1,78,4,78,1163,8,78,11,78,12,78,1164,
        1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,
        3,79,1180,8,79,1,79,3,79,1183,8,79,1,79,1,79,3,79,1187,8,79,1,79,
        3,79,1190,8,79,3,79,1192,8,79,1,79,1,79,1,79,3,79,1197,8,79,1,79,
        1,79,3,79,1201,8,79,1,79,3,79,1204,8,79,5,79,1206,8,79,10,79,12,
        79,1209,9,79,1,80,1,80,1,80,1,80,5,80,1215,8,80,10,80,12,80,1218,
        9,80,1,81,1,81,1,81,1,81,5,81,1224,8,81,10,81,12,81,1227,9,81,1,
        82,1,82,1,82,1,82,1,82,5,82,1234,8,82,10,82,12,82,1237,9,82,1,82,
        1,82,3,82,1241,8,82,1,82,1,82,1,82,1,82,1,82,1,83,1,83,1,84,1,84,
        3,84,1252,8,84,1,84,3,84,1255,8,84,1,84,3,84,1258,8,84,1,84,3,84,
        1261,8,84,1,84,3,84,1264,8,84,1,84,1,84,1,84,1,84,3,84,1270,8,84,
        1,85,1,85,3,85,1274,8,85,1,85,1,85,1,85,1,85,5,85,1280,8,85,10,85,
        12,85,1283,9,85,3,85,1285,8,85,1,86,1,86,1,86,3,86,1290,8,86,1,86,
        3,86,1293,8,86,1,86,1,86,3,86,1297,8,86,1,86,3,86,1300,8,86,3,86,
        1302,8,86,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,
        1,87,3,87,1316,8,87,1,88,1,88,1,88,1,89,1,89,1,89,1,89,5,89,1325,
        8,89,10,89,12,89,1328,9,89,1,89,1,89,3,89,1332,8,89,1,89,1,89,1,
        89,1,89,1,89,1,89,3,89,1340,8,89,1,89,3,89,1343,8,89,1,89,3,89,1346,
        8,89,1,89,1,89,1,89,3,89,1351,8,89,5,89,1353,8,89,10,89,12,89,1356,
        9,89,1,90,1,90,3,90,1360,8,90,1,91,3,91,1363,8,91,1,91,1,91,3,91,
        1367,8,91,1,91,1,91,3,91,1371,8,91,1,91,1,91,1,91,1,91,1,91,1,91,
        1,91,3,91,1380,8,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,
        3,91,1391,8,91,1,92,1,92,1,92,1,92,1,92,1,92,1,93,1,93,1,94,1,94,
        1,94,1,94,1,94,1,95,1,95,1,95,1,95,1,95,1,96,1,96,1,96,1,96,1,96,
        5,96,1416,8,96,10,96,12,96,1419,9,96,1,96,1,96,1,97,1,97,1,98,1,
        98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,
        98,3,98,1440,8,98,1,99,1,99,1,100,1,100,1,100,1,100,1,100,1,101,
        1,101,1,101,1,101,3,101,1453,8,101,1,102,1,102,1,102,1,103,1,103,
        1,103,1,103,1,103,5,103,1463,8,103,10,103,12,103,1466,9,103,1,104,
        1,104,1,104,1,104,1,104,1,104,1,104,1,104,5,104,1476,8,104,10,104,
        12,104,1479,9,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,5,104,
        1488,8,104,10,104,12,104,1491,9,104,1,104,1,104,1,104,1,104,1,104,
        1,104,1,104,5,104,1500,8,104,10,104,12,104,1503,9,104,1,104,1,104,
        1,104,3,104,1508,8,104,1,105,1,105,1,105,1,106,1,106,1,107,1,107,
        1,107,1,107,1,107,1,107,1,107,1,108,1,108,1,109,1,109,1,110,1,110,
        1,110,1,111,1,111,1,111,1,111,5,111,1533,8,111,10,111,12,111,1536,
        9,111,1,112,1,112,1,112,1,112,1,113,3,113,1543,8,113,1,113,1,113,
        3,113,1547,8,113,1,113,3,113,1550,8,113,1,113,3,113,1553,8,113,1,
        113,1,113,1,114,1,114,1,114,3,114,1560,8,114,1,114,3,114,1563,8,
        114,1,114,3,114,1566,8,114,1,114,3,114,1569,8,114,1,114,3,114,1572,
        8,114,1,114,3,114,1575,8,114,1,114,1,114,1,114,3,114,1580,8,114,
        1,114,3,114,1583,8,114,1,115,1,115,1,115,1,115,1,115,5,115,1590,
        8,115,10,115,12,115,1593,9,115,1,116,1,116,3,116,1597,8,116,1,116,
        1,116,3,116,1601,8,116,1,117,1,117,1,117,3,117,1606,8,117,1,118,
        1,118,1,118,1,118,3,118,1612,8,118,1,118,1,118,1,118,3,118,1617,
        8,118,5,118,1619,8,118,10,118,12,118,1622,9,118,1,119,1,119,1,119,
        1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,
        1,119,1,119,3,119,1640,8,119,1,120,1,120,1,120,1,120,5,120,1646,
        8,120,10,120,12,120,1649,9,120,1,121,1,121,1,121,4,121,1654,8,121,
        11,121,12,121,1655,1,121,1,121,3,121,1660,8,121,1,122,1,122,3,122,
        1664,8,122,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,3,123,
        1674,8,123,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,
        1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,
        1,124,1,124,1,124,1,124,3,124,1700,8,124,1,125,1,125,1,125,1,125,
        5,125,1706,8,125,10,125,12,125,1709,9,125,1,126,1,126,1,126,1,126,
        1,126,1,126,1,126,1,126,1,126,3,126,1720,8,126,1,127,1,127,1,127,
        1,127,1,127,1,128,1,128,1,128,1,129,1,129,1,130,1,130,1,130,1,130,
        1,130,1,130,1,130,1,130,1,130,1,130,3,130,1742,8,130,3,130,1744,
        8,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,3,130,
        1755,8,130,1,130,5,130,1758,8,130,10,130,12,130,1761,9,130,1,131,
        3,131,1764,8,131,1,131,1,131,3,131,1768,8,131,1,131,1,131,1,131,
        1,131,1,131,3,131,1775,8,131,1,131,1,131,1,131,1,131,1,131,5,131,
        1782,8,131,10,131,12,131,1785,9,131,1,131,1,131,1,131,3,131,1790,
        8,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,3,131,1803,8,131,1,131,1,131,1,131,1,131,1,131,3,131,1810,
        8,131,1,131,1,131,1,131,3,131,1815,8,131,1,131,1,131,1,131,1,131,
        3,131,1821,8,131,1,131,1,131,1,131,1,131,1,131,3,131,1828,8,131,
        1,131,1,131,1,131,1,131,1,131,3,131,1835,8,131,3,131,1837,8,131,
        1,132,3,132,1840,8,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,
        1,132,5,132,1850,8,132,10,132,12,132,1853,9,132,1,132,1,132,3,132,
        1857,8,132,1,132,3,132,1860,8,132,1,132,1,132,1,132,1,132,3,132,
        1866,8,132,3,132,1868,8,132,1,133,1,133,1,133,1,133,3,133,1874,8,
        133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,
        1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,5,133,1895,
        8,133,10,133,12,133,1898,9,133,1,134,1,134,1,134,1,134,1,134,3,134,
        1905,8,134,1,134,1,134,1,134,5,134,1910,8,134,10,134,12,134,1913,
        9,134,3,134,1915,8,134,1,134,1,134,3,134,1919,8,134,1,135,1,135,
        1,135,4,135,1924,8,135,11,135,12,135,1925,1,135,1,135,3,135,1930,
        8,135,1,135,1,135,1,135,1,135,1,135,4,135,1937,8,135,11,135,12,135,
        1938,1,135,1,135,3,135,1943,8,135,1,135,1,135,1,135,1,135,1,135,
        1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,3,135,1959,
        8,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,3,135,1968,8,135,
        1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,
        1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,
        1,135,1,135,1,135,1,135,3,135,1996,8,135,1,135,1,135,1,135,1,135,
        1,135,5,135,2003,8,135,10,135,12,135,2006,9,135,1,136,1,136,1,137,
        1,137,1,137,1,137,3,137,2014,8,137,1,138,1,138,1,138,1,138,3,138,
        2020,8,138,1,139,1,139,3,139,2024,8,139,1,140,1,140,1,140,1,140,
        3,140,2030,8,140,1,141,1,141,1,142,1,142,1,143,1,143,3,143,2038,
        8,143,1,144,1,144,1,144,3,144,2043,8,144,1,145,1,145,3,145,2047,
        8,145,1,146,1,146,1,146,4,146,2052,8,146,11,146,12,146,2053,1,147,
        1,147,1,147,3,147,2059,8,147,1,148,1,148,1,148,1,148,1,148,1,149,
        3,149,2067,8,149,1,149,1,149,3,149,2071,8,149,1,150,3,150,2074,8,
        150,1,150,1,150,3,150,2078,8,150,1,151,1,151,1,151,1,152,1,152,4,
        152,2085,8,152,11,152,12,152,2086,1,152,3,152,2090,8,152,1,153,1,
        153,1,153,1,153,1,154,1,154,1,154,5,154,2099,8,154,10,154,12,154,
        2102,9,154,1,155,1,155,1,155,3,155,2107,8,155,1,156,1,156,1,157,
        1,157,1,158,1,158,1,158,1,158,1,158,1,159,1,159,1,160,1,160,1,161,
        1,161,1,161,3,161,2125,8,161,1,162,1,162,1,162,3,162,2130,8,162,
        1,163,1,163,1,163,3,163,2135,8,163,1,163,1,163,1,163,1,163,1,163,
        3,163,2142,8,163,3,163,2144,8,163,1,164,1,164,1,164,3,164,2149,8,
        164,1,164,1,164,1,164,1,164,1,164,3,164,2156,8,164,3,164,2158,8,
        164,1,165,1,165,1,165,3,165,2163,8,165,1,165,1,165,1,165,1,165,1,
        165,3,165,2170,8,165,3,165,2172,8,165,1,166,1,166,1,166,3,166,2177,
        8,166,1,166,1,166,1,166,1,166,1,166,3,166,2184,8,166,3,166,2186,
        8,166,1,167,1,167,1,167,5,167,2191,8,167,10,167,12,167,2194,9,167,
        1,168,1,168,1,168,1,169,1,169,1,169,1,169,1,170,1,170,1,170,1,171,
        1,171,1,171,1,171,5,171,2210,8,171,10,171,12,171,2213,9,171,1,171,
        1,171,1,172,1,172,3,172,2219,8,172,1,172,3,172,2222,8,172,1,173,
        1,173,1,173,3,173,2227,8,173,1,174,1,174,1,174,1,174,3,174,2233,
        8,174,1,175,1,175,1,175,1,175,1,175,1,175,3,175,2241,8,175,1,176,
        1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,
        1,176,1,176,3,176,2257,8,176,1,177,1,177,1,177,1,177,1,177,1,177,
        1,177,3,177,2266,8,177,1,178,1,178,1,179,1,179,1,180,1,180,1,180,
        1,180,3,180,2276,8,180,1,180,1,180,1,180,1,180,1,180,3,180,2283,
        8,180,1,180,3,180,2286,8,180,1,181,1,181,1,181,1,182,1,182,1,183,
        1,183,1,184,1,184,1,185,1,185,1,186,1,186,1,187,1,187,1,188,1,188,
        1,189,1,189,1,190,1,190,1,191,1,191,1,192,1,192,1,192,1,2192,5,158,
        178,260,266,270,193,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
        34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,
        78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,
        116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,
        148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,
        180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,
        212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,
        244,246,248,250,252,254,256,258,260,262,264,266,268,270,272,274,
        276,278,280,282,284,286,288,290,292,294,296,298,300,302,304,306,
        308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,338,
        340,342,344,346,348,350,352,354,356,358,360,362,364,366,368,370,
        372,374,376,378,380,382,384,0,47,2,0,109,109,451,451,3,0,45,45,128,
        128,189,189,4,0,42,42,90,90,423,423,465,465,2,0,442,442,448,448,
        2,0,151,151,170,170,2,0,438,438,490,490,2,0,483,486,488,488,3,0,
        32,32,91,91,245,245,11,0,28,29,35,35,46,46,92,92,178,179,345,345,
        361,361,379,379,382,382,388,388,417,418,2,0,434,434,436,436,4,0,
        101,102,115,115,144,144,247,247,2,0,13,13,232,232,2,0,456,456,463,
        463,3,0,5,5,271,271,445,445,3,0,267,267,456,456,463,463,3,0,426,
        426,459,459,478,478,3,0,331,331,466,466,482,482,2,0,441,441,491,
        491,2,0,183,183,266,266,3,0,130,130,180,180,403,403,4,0,152,152,
        174,174,202,202,318,318,3,0,446,446,460,460,500,500,4,0,251,251,
        447,447,495,497,499,499,2,0,74,74,321,321,3,0,460,460,493,493,500,
        500,2,0,440,440,451,451,2,0,458,458,468,468,4,0,140,140,245,245,
        398,398,405,405,2,0,19,19,370,370,2,0,5,5,11,11,2,0,510,510,530,
        531,4,0,453,453,528,528,532,532,535,535,2,0,530,531,533,533,1,0,
        530,531,1,0,539,540,2,0,539,539,542,542,4,0,453,453,528,528,530,
        532,534,535,3,0,242,242,509,510,530,531,2,0,140,140,398,398,2,0,
        5,5,113,113,10,0,97,97,165,165,223,223,230,230,335,335,437,437,471,
        471,473,473,489,489,503,503,15,0,97,97,165,165,223,223,230,230,335,
        335,428,428,437,437,443,443,449,450,455,455,461,461,471,476,489,
        489,492,492,503,504,11,0,5,5,13,13,33,33,78,78,84,85,113,113,201,
        201,208,209,390,390,414,414,528,528,3,0,78,78,84,85,208,209,2,0,
        91,91,379,380,53,0,4,4,13,13,23,23,38,38,41,41,43,44,54,54,56,56,
        69,69,75,75,98,99,107,107,119,119,134,134,139,139,143,143,145,145,
        160,160,165,165,167,167,187,188,190,195,198,198,200,200,202,202,
        206,206,210,210,215,215,221,221,223,224,230,230,244,244,246,246,
        265,265,277,277,282,282,284,284,294,294,318,318,322,324,335,335,
        358,359,365,365,368,368,381,381,396,396,399,400,409,409,420,421,
        437,437,470,470,489,489,503,503,1,0,438,505,2519,0,389,1,0,0,0,2,
        399,1,0,0,0,4,413,1,0,0,0,6,415,1,0,0,0,8,431,1,0,0,0,10,435,1,0,
        0,0,12,437,1,0,0,0,14,440,1,0,0,0,16,451,1,0,0,0,18,459,1,0,0,0,
        20,467,1,0,0,0,22,469,1,0,0,0,24,521,1,0,0,0,26,523,1,0,0,0,28,530,
        1,0,0,0,30,534,1,0,0,0,32,538,1,0,0,0,34,542,1,0,0,0,36,596,1,0,
        0,0,38,602,1,0,0,0,40,608,1,0,0,0,42,610,1,0,0,0,44,652,1,0,0,0,
        46,666,1,0,0,0,48,668,1,0,0,0,50,679,1,0,0,0,52,683,1,0,0,0,54,685,
        1,0,0,0,56,687,1,0,0,0,58,735,1,0,0,0,60,737,1,0,0,0,62,741,1,0,
        0,0,64,749,1,0,0,0,66,757,1,0,0,0,68,761,1,0,0,0,70,796,1,0,0,0,
        72,812,1,0,0,0,74,814,1,0,0,0,76,824,1,0,0,0,78,826,1,0,0,0,80,833,
        1,0,0,0,82,835,1,0,0,0,84,843,1,0,0,0,86,851,1,0,0,0,88,853,1,0,
        0,0,90,857,1,0,0,0,92,861,1,0,0,0,94,884,1,0,0,0,96,888,1,0,0,0,
        98,890,1,0,0,0,100,906,1,0,0,0,102,908,1,0,0,0,104,913,1,0,0,0,106,
        925,1,0,0,0,108,944,1,0,0,0,110,964,1,0,0,0,112,975,1,0,0,0,114,
        977,1,0,0,0,116,990,1,0,0,0,118,997,1,0,0,0,120,1000,1,0,0,0,122,
        1009,1,0,0,0,124,1013,1,0,0,0,126,1017,1,0,0,0,128,1020,1,0,0,0,
        130,1028,1,0,0,0,132,1033,1,0,0,0,134,1050,1,0,0,0,136,1057,1,0,
        0,0,138,1067,1,0,0,0,140,1076,1,0,0,0,142,1086,1,0,0,0,144,1105,
        1,0,0,0,146,1107,1,0,0,0,148,1120,1,0,0,0,150,1123,1,0,0,0,152,1132,
        1,0,0,0,154,1143,1,0,0,0,156,1156,1,0,0,0,158,1191,1,0,0,0,160,1210,
        1,0,0,0,162,1219,1,0,0,0,164,1228,1,0,0,0,166,1247,1,0,0,0,168,1269,
        1,0,0,0,170,1271,1,0,0,0,172,1301,1,0,0,0,174,1315,1,0,0,0,176,1317,
        1,0,0,0,178,1331,1,0,0,0,180,1357,1,0,0,0,182,1390,1,0,0,0,184,1392,
        1,0,0,0,186,1398,1,0,0,0,188,1400,1,0,0,0,190,1405,1,0,0,0,192,1410,
        1,0,0,0,194,1422,1,0,0,0,196,1439,1,0,0,0,198,1441,1,0,0,0,200,1443,
        1,0,0,0,202,1452,1,0,0,0,204,1454,1,0,0,0,206,1457,1,0,0,0,208,1507,
        1,0,0,0,210,1509,1,0,0,0,212,1512,1,0,0,0,214,1514,1,0,0,0,216,1521,
        1,0,0,0,218,1523,1,0,0,0,220,1525,1,0,0,0,222,1528,1,0,0,0,224,1537,
        1,0,0,0,226,1542,1,0,0,0,228,1556,1,0,0,0,230,1584,1,0,0,0,232,1594,
        1,0,0,0,234,1602,1,0,0,0,236,1607,1,0,0,0,238,1639,1,0,0,0,240,1641,
        1,0,0,0,242,1650,1,0,0,0,244,1661,1,0,0,0,246,1673,1,0,0,0,248,1699,
        1,0,0,0,250,1701,1,0,0,0,252,1719,1,0,0,0,254,1721,1,0,0,0,256,1726,
        1,0,0,0,258,1729,1,0,0,0,260,1743,1,0,0,0,262,1836,1,0,0,0,264,1867,
        1,0,0,0,266,1873,1,0,0,0,268,1918,1,0,0,0,270,1995,1,0,0,0,272,2007,
        1,0,0,0,274,2013,1,0,0,0,276,2019,1,0,0,0,278,2023,1,0,0,0,280,2029,
        1,0,0,0,282,2031,1,0,0,0,284,2033,1,0,0,0,286,2037,1,0,0,0,288,2039,
        1,0,0,0,290,2044,1,0,0,0,292,2051,1,0,0,0,294,2055,1,0,0,0,296,2060,
        1,0,0,0,298,2070,1,0,0,0,300,2073,1,0,0,0,302,2079,1,0,0,0,304,2089,
        1,0,0,0,306,2091,1,0,0,0,308,2095,1,0,0,0,310,2106,1,0,0,0,312,2108,
        1,0,0,0,314,2110,1,0,0,0,316,2112,1,0,0,0,318,2117,1,0,0,0,320,2119,
        1,0,0,0,322,2121,1,0,0,0,324,2126,1,0,0,0,326,2143,1,0,0,0,328,2157,
        1,0,0,0,330,2171,1,0,0,0,332,2185,1,0,0,0,334,2187,1,0,0,0,336,2195,
        1,0,0,0,338,2198,1,0,0,0,340,2202,1,0,0,0,342,2205,1,0,0,0,344,2216,
        1,0,0,0,346,2226,1,0,0,0,348,2232,1,0,0,0,350,2240,1,0,0,0,352,2256,
        1,0,0,0,354,2265,1,0,0,0,356,2267,1,0,0,0,358,2269,1,0,0,0,360,2285,
        1,0,0,0,362,2287,1,0,0,0,364,2290,1,0,0,0,366,2292,1,0,0,0,368,2294,
        1,0,0,0,370,2296,1,0,0,0,372,2298,1,0,0,0,374,2300,1,0,0,0,376,2302,
        1,0,0,0,378,2304,1,0,0,0,380,2306,1,0,0,0,382,2308,1,0,0,0,384,2310,
        1,0,0,0,386,388,3,2,1,0,387,386,1,0,0,0,388,391,1,0,0,0,389,387,
        1,0,0,0,389,390,1,0,0,0,390,392,1,0,0,0,391,389,1,0,0,0,392,393,
        5,0,0,1,393,1,1,0,0,0,394,396,3,4,2,0,395,397,5,522,0,0,396,395,
        1,0,0,0,396,397,1,0,0,0,397,400,1,0,0,0,398,400,3,6,3,0,399,394,
        1,0,0,0,399,398,1,0,0,0,400,3,1,0,0,0,401,414,3,8,4,0,402,414,3,
        10,5,0,403,414,3,12,6,0,404,414,3,14,7,0,405,414,3,20,10,0,406,414,
        3,24,12,0,407,414,3,26,13,0,408,414,3,28,14,0,409,414,3,30,15,0,
        410,414,3,32,16,0,411,414,3,34,17,0,412,414,3,36,18,0,413,401,1,
        0,0,0,413,402,1,0,0,0,413,403,1,0,0,0,413,404,1,0,0,0,413,405,1,
        0,0,0,413,406,1,0,0,0,413,407,1,0,0,0,413,408,1,0,0,0,413,409,1,
        0,0,0,413,410,1,0,0,0,413,411,1,0,0,0,413,412,1,0,0,0,414,5,1,0,
        0,0,415,416,5,522,0,0,416,7,1,0,0,0,417,432,3,40,20,0,418,432,3,
        104,52,0,419,432,3,106,53,0,420,432,3,108,54,0,421,432,3,102,51,
        0,422,432,3,114,57,0,423,432,3,128,64,0,424,432,3,130,65,0,425,432,
        3,132,66,0,426,432,3,134,67,0,427,432,3,136,68,0,428,432,3,138,69,
        0,429,432,3,140,70,0,430,432,3,142,71,0,431,417,1,0,0,0,431,418,
        1,0,0,0,431,419,1,0,0,0,431,420,1,0,0,0,431,421,1,0,0,0,431,422,
        1,0,0,0,431,423,1,0,0,0,431,424,1,0,0,0,431,425,1,0,0,0,431,426,
        1,0,0,0,431,427,1,0,0,0,431,428,1,0,0,0,431,429,1,0,0,0,431,430,
        1,0,0,0,432,9,1,0,0,0,433,436,3,158,79,0,434,436,3,144,72,0,435,
        433,1,0,0,0,435,434,1,0,0,0,436,11,1,0,0,0,437,438,7,0,0,0,438,439,
        3,328,164,0,439,13,1,0,0,0,440,444,5,135,0,0,441,445,3,16,8,0,442,
        443,5,480,0,0,443,445,5,146,0,0,444,441,1,0,0,0,444,442,1,0,0,0,
        444,445,1,0,0,0,445,449,1,0,0,0,446,450,3,10,5,0,447,450,3,146,73,
        0,448,450,3,156,78,0,449,446,1,0,0,0,449,447,1,0,0,0,449,448,1,0,
        0,0,450,15,1,0,0,0,451,456,3,18,9,0,452,453,5,521,0,0,453,455,3,
        18,9,0,454,452,1,0,0,0,455,458,1,0,0,0,456,454,1,0,0,0,456,457,1,
        0,0,0,457,17,1,0,0,0,458,456,1,0,0,0,459,460,7,1,0,0,460,19,1,0,
        0,0,461,462,5,411,0,0,462,463,5,442,0,0,463,468,3,318,159,0,464,
        465,5,411,0,0,465,468,3,322,161,0,466,468,3,22,11,0,467,461,1,0,
        0,0,467,464,1,0,0,0,467,466,1,0,0,0,468,21,1,0,0,0,469,470,5,411,
        0,0,470,471,5,228,0,0,471,476,3,334,167,0,472,473,5,521,0,0,473,
        475,3,334,167,0,474,472,1,0,0,0,475,478,1,0,0,0,476,474,1,0,0,0,
        476,477,1,0,0,0,477,23,1,0,0,0,478,476,1,0,0,0,479,480,5,342,0,0,
        480,522,7,2,0,0,481,482,5,342,0,0,482,483,5,76,0,0,483,522,7,3,0,
        0,484,485,5,342,0,0,485,488,5,375,0,0,486,487,7,4,0,0,487,489,3,
        322,161,0,488,486,1,0,0,0,488,489,1,0,0,0,489,491,1,0,0,0,490,492,
        3,264,132,0,491,490,1,0,0,0,491,492,1,0,0,0,492,522,1,0,0,0,493,
        494,5,342,0,0,494,495,5,58,0,0,495,498,7,4,0,0,496,499,3,330,165,
        0,497,499,3,328,164,0,498,496,1,0,0,0,498,497,1,0,0,0,499,501,1,
        0,0,0,500,502,3,264,132,0,501,500,1,0,0,0,501,502,1,0,0,0,502,522,
        1,0,0,0,503,504,5,342,0,0,504,509,5,72,0,0,505,506,5,374,0,0,506,
        510,3,328,164,0,507,508,5,502,0,0,508,510,3,330,165,0,509,505,1,
        0,0,0,509,507,1,0,0,0,510,522,1,0,0,0,511,513,5,342,0,0,512,514,
        5,412,0,0,513,512,1,0,0,0,513,514,1,0,0,0,514,515,1,0,0,0,515,522,
        5,154,0,0,516,518,5,342,0,0,517,519,5,152,0,0,518,517,1,0,0,0,518,
        519,1,0,0,0,519,520,1,0,0,0,520,522,5,228,0,0,521,479,1,0,0,0,521,
        481,1,0,0,0,521,484,1,0,0,0,521,493,1,0,0,0,521,503,1,0,0,0,521,
        511,1,0,0,0,521,516,1,0,0,0,522,25,1,0,0,0,523,524,5,469,0,0,524,
        525,5,227,0,0,525,528,3,334,167,0,526,527,5,434,0,0,527,529,3,342,
        171,0,528,526,1,0,0,0,528,529,1,0,0,0,529,27,1,0,0,0,530,531,5,501,
        0,0,531,532,5,227,0,0,532,533,3,334,167,0,533,29,1,0,0,0,534,536,
        5,341,0,0,535,537,3,344,172,0,536,535,1,0,0,0,536,537,1,0,0,0,537,
        31,1,0,0,0,538,540,5,313,0,0,539,541,3,346,173,0,540,539,1,0,0,0,
        540,541,1,0,0,0,541,33,1,0,0,0,542,543,7,5,0,0,543,544,5,464,0,0,
        544,545,3,112,56,0,545,35,1,0,0,0,546,547,5,438,0,0,547,548,5,464,
        0,0,548,549,5,434,0,0,549,552,3,38,19,0,550,551,5,17,0,0,551,553,
        3,334,167,0,552,550,1,0,0,0,552,553,1,0,0,0,553,597,1,0,0,0,554,
        555,5,438,0,0,555,556,5,457,0,0,556,557,5,434,0,0,557,560,3,38,19,
        0,558,559,5,17,0,0,559,561,3,334,167,0,560,558,1,0,0,0,560,561,1,
        0,0,0,561,564,1,0,0,0,562,563,5,312,0,0,563,565,3,334,167,0,564,
        562,1,0,0,0,564,565,1,0,0,0,565,597,1,0,0,0,566,567,5,438,0,0,567,
        568,7,6,0,0,568,569,5,434,0,0,569,570,3,38,19,0,570,571,5,312,0,
        0,571,572,3,334,167,0,572,597,1,0,0,0,573,574,5,438,0,0,574,575,
        5,487,0,0,575,597,3,38,19,0,576,577,5,438,0,0,577,578,5,454,0,0,
        578,579,5,457,0,0,579,580,5,434,0,0,580,581,3,38,19,0,581,582,5,
        312,0,0,582,583,3,334,167,0,583,584,5,467,0,0,584,585,3,334,167,
        0,585,597,1,0,0,0,586,587,5,438,0,0,587,588,5,444,0,0,588,589,5,
        457,0,0,589,590,5,434,0,0,590,591,3,38,19,0,591,592,5,146,0,0,592,
        593,3,334,167,0,593,594,5,17,0,0,594,595,3,334,167,0,595,597,1,0,
        0,0,596,546,1,0,0,0,596,554,1,0,0,0,596,566,1,0,0,0,596,573,1,0,
        0,0,596,576,1,0,0,0,596,586,1,0,0,0,597,37,1,0,0,0,598,600,5,535,
        0,0,599,598,1,0,0,0,599,600,1,0,0,0,600,601,1,0,0,0,601,603,3,334,
        167,0,602,599,1,0,0,0,603,604,1,0,0,0,604,602,1,0,0,0,604,605,1,
        0,0,0,605,39,1,0,0,0,606,609,3,42,21,0,607,609,3,44,22,0,608,606,
        1,0,0,0,608,607,1,0,0,0,609,41,1,0,0,0,610,612,5,72,0,0,611,613,
        5,498,0,0,612,611,1,0,0,0,612,613,1,0,0,0,613,614,1,0,0,0,614,616,
        5,374,0,0,615,617,3,338,169,0,616,615,1,0,0,0,616,617,1,0,0,0,617,
        618,1,0,0,0,618,619,3,326,163,0,619,620,5,517,0,0,620,625,3,46,23,
        0,621,622,5,521,0,0,622,624,3,46,23,0,623,621,1,0,0,0,624,627,1,
        0,0,0,625,623,1,0,0,0,625,626,1,0,0,0,626,630,1,0,0,0,627,625,1,
        0,0,0,628,629,5,521,0,0,629,631,3,82,41,0,630,628,1,0,0,0,630,631,
        1,0,0,0,631,634,1,0,0,0,632,633,5,521,0,0,633,635,3,84,42,0,634,
        632,1,0,0,0,634,635,1,0,0,0,635,638,1,0,0,0,636,637,5,521,0,0,637,
        639,3,88,44,0,638,636,1,0,0,0,638,639,1,0,0,0,639,640,1,0,0,0,640,
        643,5,518,0,0,641,642,5,59,0,0,642,644,5,538,0,0,643,641,1,0,0,0,
        643,644,1,0,0,0,644,646,1,0,0,0,645,647,3,90,45,0,646,645,1,0,0,
        0,646,647,1,0,0,0,647,648,1,0,0,0,648,650,3,336,168,0,649,651,3,
        98,49,0,650,649,1,0,0,0,650,651,1,0,0,0,651,43,1,0,0,0,652,653,5,
        72,0,0,653,655,5,374,0,0,654,656,3,338,169,0,655,654,1,0,0,0,655,
        656,1,0,0,0,656,657,1,0,0,0,657,658,3,326,163,0,658,661,3,336,168,
        0,659,660,5,17,0,0,660,662,3,158,79,0,661,659,1,0,0,0,661,662,1,
        0,0,0,662,45,1,0,0,0,663,667,3,48,24,0,664,667,3,74,37,0,665,667,
        3,78,39,0,666,663,1,0,0,0,666,664,1,0,0,0,666,665,1,0,0,0,667,47,
        1,0,0,0,668,669,3,50,25,0,669,671,3,58,29,0,670,672,3,72,36,0,671,
        670,1,0,0,0,671,672,1,0,0,0,672,675,1,0,0,0,673,674,5,59,0,0,674,
        676,5,538,0,0,675,673,1,0,0,0,675,676,1,0,0,0,676,49,1,0,0,0,677,
        680,3,334,167,0,678,680,3,258,129,0,679,677,1,0,0,0,679,678,1,0,
        0,0,680,51,1,0,0,0,681,684,3,334,167,0,682,684,4,26,0,0,683,681,
        1,0,0,0,683,682,1,0,0,0,684,53,1,0,0,0,685,686,3,334,167,0,686,55,
        1,0,0,0,687,688,5,517,0,0,688,693,3,52,26,0,689,690,5,521,0,0,690,
        692,3,52,26,0,691,689,1,0,0,0,692,695,1,0,0,0,693,691,1,0,0,0,693,
        694,1,0,0,0,694,696,1,0,0,0,695,693,1,0,0,0,696,697,5,518,0,0,697,
        57,1,0,0,0,698,736,7,7,0,0,699,701,7,8,0,0,700,702,3,60,30,0,701,
        700,1,0,0,0,701,702,1,0,0,0,702,736,1,0,0,0,703,705,5,380,0,0,704,
        706,3,60,30,0,705,704,1,0,0,0,705,706,1,0,0,0,706,713,1,0,0,0,707,
        709,7,9,0,0,708,710,5,207,0,0,709,708,1,0,0,0,709,710,1,0,0,0,710,
        711,1,0,0,0,711,712,5,379,0,0,712,714,5,505,0,0,713,707,1,0,0,0,
        713,714,1,0,0,0,714,736,1,0,0,0,715,717,7,10,0,0,716,718,3,62,31,
        0,717,716,1,0,0,0,717,718,1,0,0,0,718,736,1,0,0,0,719,721,7,11,0,
        0,720,722,3,66,33,0,721,720,1,0,0,0,721,722,1,0,0,0,722,736,1,0,
        0,0,723,725,5,470,0,0,724,726,3,68,34,0,725,724,1,0,0,0,725,726,
        1,0,0,0,726,736,1,0,0,0,727,729,5,322,0,0,728,730,3,70,35,0,729,
        728,1,0,0,0,729,730,1,0,0,0,730,736,1,0,0,0,731,733,5,295,0,0,732,
        734,3,64,32,0,733,732,1,0,0,0,733,734,1,0,0,0,734,736,1,0,0,0,735,
        698,1,0,0,0,735,699,1,0,0,0,735,703,1,0,0,0,735,715,1,0,0,0,735,
        719,1,0,0,0,735,723,1,0,0,0,735,727,1,0,0,0,735,731,1,0,0,0,736,
        59,1,0,0,0,737,738,5,517,0,0,738,739,3,366,183,0,739,740,5,518,0,
        0,740,61,1,0,0,0,741,742,5,517,0,0,742,745,3,366,183,0,743,744,5,
        521,0,0,744,746,3,366,183,0,745,743,1,0,0,0,745,746,1,0,0,0,746,
        747,1,0,0,0,747,748,5,518,0,0,748,63,1,0,0,0,749,750,5,517,0,0,750,
        753,3,364,182,0,751,752,5,521,0,0,752,754,3,364,182,0,753,751,1,
        0,0,0,753,754,1,0,0,0,754,755,1,0,0,0,755,756,5,518,0,0,756,65,1,
        0,0,0,757,758,5,508,0,0,758,759,3,58,29,0,759,760,5,507,0,0,760,
        67,1,0,0,0,761,762,5,508,0,0,762,763,3,58,29,0,763,764,5,521,0,0,
        764,765,3,58,29,0,765,766,1,0,0,0,766,767,5,507,0,0,767,69,1,0,0,
        0,768,769,5,508,0,0,769,770,3,52,26,0,770,777,3,58,29,0,771,772,
        5,521,0,0,772,773,3,52,26,0,773,774,3,58,29,0,774,776,1,0,0,0,775,
        771,1,0,0,0,776,779,1,0,0,0,777,775,1,0,0,0,777,778,1,0,0,0,778,
        780,1,0,0,0,779,777,1,0,0,0,780,781,5,507,0,0,781,797,1,0,0,0,782,
        783,5,517,0,0,783,784,3,52,26,0,784,791,3,58,29,0,785,786,5,521,
        0,0,786,787,3,52,26,0,787,788,3,58,29,0,788,790,1,0,0,0,789,785,
        1,0,0,0,790,793,1,0,0,0,791,789,1,0,0,0,791,792,1,0,0,0,792,794,
        1,0,0,0,793,791,1,0,0,0,794,795,5,518,0,0,795,797,1,0,0,0,796,768,
        1,0,0,0,796,782,1,0,0,0,797,71,1,0,0,0,798,799,5,64,0,0,799,801,
        3,86,43,0,800,798,1,0,0,0,800,801,1,0,0,0,801,802,1,0,0,0,802,803,
        5,289,0,0,803,806,5,467,0,0,804,805,5,242,0,0,805,807,5,125,0,0,
        806,804,1,0,0,0,806,807,1,0,0,0,807,813,1,0,0,0,808,810,5,242,0,
        0,809,808,1,0,0,0,809,810,1,0,0,0,810,811,1,0,0,0,811,813,5,245,
        0,0,812,800,1,0,0,0,812,809,1,0,0,0,813,73,1,0,0,0,814,815,3,50,
        25,0,815,816,3,58,29,0,816,819,5,219,0,0,817,818,5,151,0,0,818,820,
        3,76,38,0,819,817,1,0,0,0,819,820,1,0,0,0,820,822,1,0,0,0,821,823,
        5,424,0,0,822,821,1,0,0,0,822,823,1,0,0,0,823,75,1,0,0,0,824,825,
        5,538,0,0,825,77,1,0,0,0,826,827,3,50,25,0,827,828,5,17,0,0,828,
        831,3,80,40,0,829,830,5,59,0,0,830,832,5,538,0,0,831,829,1,0,0,0,
        831,832,1,0,0,0,832,79,1,0,0,0,833,834,3,258,129,0,834,81,1,0,0,
        0,835,836,5,425,0,0,836,837,5,146,0,0,837,838,3,52,26,0,838,839,
        5,17,0,0,839,840,3,258,129,0,840,83,1,0,0,0,841,842,5,64,0,0,842,
        844,3,86,43,0,843,841,1,0,0,0,843,844,1,0,0,0,844,845,1,0,0,0,845,
        846,5,289,0,0,846,847,5,467,0,0,847,848,3,56,28,0,848,849,5,242,
        0,0,849,850,5,125,0,0,850,85,1,0,0,0,851,852,3,310,155,0,852,87,
        1,0,0,0,853,854,5,278,0,0,854,855,5,146,0,0,855,856,5,372,0,0,856,
        89,1,0,0,0,857,858,5,270,0,0,858,859,5,34,0,0,859,860,3,92,46,0,
        860,91,1,0,0,0,861,862,5,517,0,0,862,867,3,94,47,0,863,864,5,521,
        0,0,864,866,3,94,47,0,865,863,1,0,0,0,866,869,1,0,0,0,867,865,1,
        0,0,0,867,868,1,0,0,0,868,870,1,0,0,0,869,867,1,0,0,0,870,871,5,
        518,0,0,871,93,1,0,0,0,872,885,3,52,26,0,873,874,5,517,0,0,874,879,
        3,96,48,0,875,876,5,521,0,0,876,878,3,96,48,0,877,875,1,0,0,0,878,
        881,1,0,0,0,879,877,1,0,0,0,879,880,1,0,0,0,880,882,1,0,0,0,881,
        879,1,0,0,0,882,883,5,518,0,0,883,885,1,0,0,0,884,872,1,0,0,0,884,
        873,1,0,0,0,885,95,1,0,0,0,886,889,3,286,143,0,887,889,3,360,180,
        0,888,886,1,0,0,0,888,887,1,0,0,0,889,97,1,0,0,0,890,891,5,203,0,
        0,891,900,3,328,164,0,892,896,5,517,0,0,893,895,3,100,50,0,894,893,
        1,0,0,0,895,898,1,0,0,0,896,894,1,0,0,0,896,897,1,0,0,0,897,899,
        1,0,0,0,898,896,1,0,0,0,899,901,5,518,0,0,900,892,1,0,0,0,900,901,
        1,0,0,0,901,99,1,0,0,0,902,903,7,12,0,0,903,907,7,13,0,0,904,905,
        7,14,0,0,905,907,7,15,0,0,906,902,1,0,0,0,906,904,1,0,0,0,907,101,
        1,0,0,0,908,909,5,72,0,0,909,910,5,442,0,0,910,911,3,320,160,0,911,
        912,3,336,168,0,912,103,1,0,0,0,913,914,5,72,0,0,914,916,5,448,0,
        0,915,917,3,338,169,0,916,915,1,0,0,0,916,917,1,0,0,0,917,918,1,
        0,0,0,918,921,3,324,162,0,919,920,5,59,0,0,920,922,5,538,0,0,921,
        919,1,0,0,0,921,922,1,0,0,0,922,923,1,0,0,0,923,924,3,336,168,0,
        924,105,1,0,0,0,925,927,5,72,0,0,926,928,5,498,0,0,927,926,1,0,0,
        0,927,928,1,0,0,0,928,929,1,0,0,0,929,931,5,502,0,0,930,932,3,338,
        169,0,931,930,1,0,0,0,931,932,1,0,0,0,932,933,1,0,0,0,933,935,3,
        332,166,0,934,936,3,56,28,0,935,934,1,0,0,0,935,936,1,0,0,0,936,
        939,1,0,0,0,937,938,5,59,0,0,938,940,5,538,0,0,939,937,1,0,0,0,939,
        940,1,0,0,0,940,941,1,0,0,0,941,942,5,17,0,0,942,943,3,158,79,0,
        943,107,1,0,0,0,944,948,5,72,0,0,945,949,5,498,0,0,946,947,5,498,
        0,0,947,949,5,371,0,0,948,945,1,0,0,0,948,946,1,0,0,0,948,949,1,
        0,0,0,949,950,1,0,0,0,950,952,5,153,0,0,951,953,3,338,169,0,952,
        951,1,0,0,0,952,953,1,0,0,0,953,954,1,0,0,0,954,955,3,272,136,0,
        955,956,5,17,0,0,956,959,3,310,155,0,957,958,5,196,0,0,958,960,7,
        16,0,0,959,957,1,0,0,0,959,960,1,0,0,0,960,962,1,0,0,0,961,963,3,
        110,55,0,962,961,1,0,0,0,962,963,1,0,0,0,963,109,1,0,0,0,964,965,
        5,413,0,0,965,966,5,464,0,0,966,972,3,112,56,0,967,968,5,521,0,0,
        968,969,5,464,0,0,969,971,3,112,56,0,970,967,1,0,0,0,971,974,1,0,
        0,0,972,970,1,0,0,0,972,973,1,0,0,0,973,111,1,0,0,0,974,972,1,0,
        0,0,975,976,5,538,0,0,976,113,1,0,0,0,977,978,5,8,0,0,978,980,5,
        374,0,0,979,981,3,340,170,0,980,979,1,0,0,0,980,981,1,0,0,0,981,
        982,1,0,0,0,982,988,3,328,164,0,983,989,3,116,58,0,984,989,3,118,
        59,0,985,989,3,120,60,0,986,989,3,122,61,0,987,989,3,124,62,0,988,
        983,1,0,0,0,988,984,1,0,0,0,988,985,1,0,0,0,988,986,1,0,0,0,988,
        987,1,0,0,0,989,115,1,0,0,0,990,992,5,312,0,0,991,993,3,334,167,
        0,992,991,1,0,0,0,992,993,1,0,0,0,993,994,1,0,0,0,994,995,5,389,
        0,0,995,996,3,334,167,0,996,117,1,0,0,0,997,998,5,341,0,0,998,999,
        3,342,171,0,999,119,1,0,0,0,1000,1001,5,438,0,0,1001,1002,5,64,0,
        0,1002,1003,3,86,43,0,1003,1004,5,289,0,0,1004,1005,5,467,0,0,1005,
        1007,3,56,28,0,1006,1008,3,126,63,0,1007,1006,1,0,0,0,1007,1008,
        1,0,0,0,1008,121,1,0,0,0,1009,1010,5,116,0,0,1010,1011,5,64,0,0,
        1011,1012,3,86,43,0,1012,123,1,0,0,0,1013,1014,5,438,0,0,1014,1015,
        5,404,0,0,1015,1016,3,56,28,0,1016,125,1,0,0,0,1017,1018,5,242,0,
        0,1018,1019,5,125,0,0,1019,127,1,0,0,0,1020,1021,5,8,0,0,1021,1022,
        5,502,0,0,1022,1026,3,330,165,0,1023,1027,3,116,58,0,1024,1025,5,
        17,0,0,1025,1027,3,158,79,0,1026,1023,1,0,0,0,1026,1024,1,0,0,0,
        1027,129,1,0,0,0,1028,1029,5,8,0,0,1029,1030,5,448,0,0,1030,1031,
        3,322,161,0,1031,1032,3,118,59,0,1032,131,1,0,0,0,1033,1037,5,8,
        0,0,1034,1038,5,498,0,0,1035,1036,5,498,0,0,1036,1038,5,371,0,0,
        1037,1034,1,0,0,0,1037,1035,1,0,0,0,1037,1038,1,0,0,0,1038,1039,
        1,0,0,0,1039,1041,5,153,0,0,1040,1042,3,340,170,0,1041,1040,1,0,
        0,0,1041,1042,1,0,0,0,1042,1043,1,0,0,0,1043,1044,3,274,137,0,1044,
        1045,5,17,0,0,1045,1048,3,310,155,0,1046,1047,5,196,0,0,1047,1049,
        7,16,0,0,1048,1046,1,0,0,0,1048,1049,1,0,0,0,1049,133,1,0,0,0,1050,
        1051,5,116,0,0,1051,1053,5,442,0,0,1052,1054,3,340,170,0,1053,1052,
        1,0,0,0,1053,1054,1,0,0,0,1054,1055,1,0,0,0,1055,1056,3,318,159,
        0,1056,135,1,0,0,0,1057,1059,5,116,0,0,1058,1060,5,498,0,0,1059,
        1058,1,0,0,0,1059,1060,1,0,0,0,1060,1061,1,0,0,0,1061,1063,5,374,
        0,0,1062,1064,3,340,170,0,1063,1062,1,0,0,0,1063,1064,1,0,0,0,1064,
        1065,1,0,0,0,1065,1066,3,328,164,0,1066,137,1,0,0,0,1067,1068,5,
        116,0,0,1068,1070,5,448,0,0,1069,1071,3,340,170,0,1070,1069,1,0,
        0,0,1070,1071,1,0,0,0,1071,1072,1,0,0,0,1072,1074,3,322,161,0,1073,
        1075,7,17,0,0,1074,1073,1,0,0,0,1074,1075,1,0,0,0,1075,139,1,0,0,
        0,1076,1078,5,116,0,0,1077,1079,5,498,0,0,1078,1077,1,0,0,0,1078,
        1079,1,0,0,0,1079,1080,1,0,0,0,1080,1082,5,502,0,0,1081,1083,3,340,
        170,0,1082,1081,1,0,0,0,1082,1083,1,0,0,0,1083,1084,1,0,0,0,1084,
        1085,3,330,165,0,1085,141,1,0,0,0,1086,1090,5,116,0,0,1087,1091,
        5,498,0,0,1088,1089,5,498,0,0,1089,1091,5,371,0,0,1090,1087,1,0,
        0,0,1090,1088,1,0,0,0,1090,1091,1,0,0,0,1091,1092,1,0,0,0,1092,1094,
        5,153,0,0,1093,1095,3,340,170,0,1094,1093,1,0,0,0,1094,1095,1,0,
        0,0,1095,1096,1,0,0,0,1096,1097,3,274,137,0,1097,143,1,0,0,0,1098,
        1100,5,132,0,0,1099,1098,1,0,0,0,1099,1100,1,0,0,0,1100,1101,1,0,
        0,0,1101,1106,3,146,73,0,1102,1106,3,154,77,0,1103,1104,5,132,0,
        0,1104,1106,3,156,78,0,1105,1099,1,0,0,0,1105,1102,1,0,0,0,1105,
        1103,1,0,0,0,1106,145,1,0,0,0,1107,1108,5,177,0,0,1108,1109,7,18,
        0,0,1109,1118,3,328,164,0,1110,1112,3,148,74,0,1111,1110,1,0,0,0,
        1111,1112,1,0,0,0,1112,1114,1,0,0,0,1113,1115,3,56,28,0,1114,1113,
        1,0,0,0,1114,1115,1,0,0,0,1115,1116,1,0,0,0,1116,1119,3,158,79,0,
        1117,1119,3,150,75,0,1118,1111,1,0,0,0,1118,1117,1,0,0,0,1119,147,
        1,0,0,0,1120,1121,5,269,0,0,1121,1122,3,342,171,0,1122,149,1,0,0,
        0,1123,1124,5,415,0,0,1124,1129,3,152,76,0,1125,1126,5,521,0,0,1126,
        1128,3,152,76,0,1127,1125,1,0,0,0,1128,1131,1,0,0,0,1129,1127,1,
        0,0,0,1129,1130,1,0,0,0,1130,151,1,0,0,0,1131,1129,1,0,0,0,1132,
        1133,5,517,0,0,1133,1138,3,360,180,0,1134,1135,5,521,0,0,1135,1137,
        3,360,180,0,1136,1134,1,0,0,0,1137,1140,1,0,0,0,1138,1136,1,0,0,
        0,1138,1139,1,0,0,0,1139,1141,1,0,0,0,1140,1138,1,0,0,0,1141,1142,
        5,518,0,0,1142,153,1,0,0,0,1143,1144,5,24,0,0,1144,1145,5,355,0,
        0,1145,1146,5,341,0,0,1146,1150,5,522,0,0,1147,1148,3,146,73,0,1148,
        1149,5,522,0,0,1149,1151,1,0,0,0,1150,1147,1,0,0,0,1151,1152,1,0,
        0,0,1152,1150,1,0,0,0,1152,1153,1,0,0,0,1153,1154,1,0,0,0,1154,1155,
        5,122,0,0,1155,155,1,0,0,0,1156,1157,5,355,0,0,1157,1158,5,341,0,
        0,1158,1162,5,24,0,0,1159,1160,3,146,73,0,1160,1161,5,522,0,0,1161,
        1163,1,0,0,0,1162,1159,1,0,0,0,1163,1164,1,0,0,0,1164,1162,1,0,0,
        0,1164,1165,1,0,0,0,1165,1166,1,0,0,0,1166,1167,5,122,0,0,1167,157,
        1,0,0,0,1168,1169,6,79,-1,0,1169,1192,3,160,80,0,1170,1171,3,162,
        81,0,1171,1172,3,158,79,5,1172,1192,1,0,0,0,1173,1174,5,517,0,0,
        1174,1175,3,158,79,0,1175,1176,5,518,0,0,1176,1192,1,0,0,0,1177,
        1179,3,170,85,0,1178,1180,3,230,115,0,1179,1178,1,0,0,0,1179,1180,
        1,0,0,0,1180,1182,1,0,0,0,1181,1183,3,234,117,0,1182,1181,1,0,0,
        0,1182,1183,1,0,0,0,1183,1192,1,0,0,0,1184,1186,3,168,84,0,1185,
        1187,3,230,115,0,1186,1185,1,0,0,0,1186,1187,1,0,0,0,1187,1189,1,
        0,0,0,1188,1190,3,234,117,0,1189,1188,1,0,0,0,1189,1190,1,0,0,0,
        1190,1192,1,0,0,0,1191,1168,1,0,0,0,1191,1170,1,0,0,0,1191,1173,
        1,0,0,0,1191,1177,1,0,0,0,1191,1184,1,0,0,0,1192,1207,1,0,0,0,1193,
        1194,10,3,0,0,1194,1196,7,19,0,0,1195,1197,5,5,0,0,1196,1195,1,0,
        0,0,1196,1197,1,0,0,0,1197,1198,1,0,0,0,1198,1200,3,158,79,0,1199,
        1201,3,230,115,0,1200,1199,1,0,0,0,1200,1201,1,0,0,0,1201,1203,1,
        0,0,0,1202,1204,3,234,117,0,1203,1202,1,0,0,0,1203,1204,1,0,0,0,
        1204,1206,1,0,0,0,1205,1193,1,0,0,0,1206,1209,1,0,0,0,1207,1205,
        1,0,0,0,1207,1208,1,0,0,0,1208,159,1,0,0,0,1209,1207,1,0,0,0,1210,
        1211,5,415,0,0,1211,1216,3,258,129,0,1212,1213,5,521,0,0,1213,1215,
        3,258,129,0,1214,1212,1,0,0,0,1215,1218,1,0,0,0,1216,1214,1,0,0,
        0,1216,1217,1,0,0,0,1217,161,1,0,0,0,1218,1216,1,0,0,0,1219,1220,
        5,434,0,0,1220,1225,3,164,82,0,1221,1222,5,521,0,0,1222,1224,3,164,
        82,0,1223,1221,1,0,0,0,1224,1227,1,0,0,0,1225,1223,1,0,0,0,1225,
        1226,1,0,0,0,1226,163,1,0,0,0,1227,1225,1,0,0,0,1228,1240,3,166,
        83,0,1229,1230,5,517,0,0,1230,1235,3,52,26,0,1231,1232,5,521,0,0,
        1232,1234,3,52,26,0,1233,1231,1,0,0,0,1234,1237,1,0,0,0,1235,1233,
        1,0,0,0,1235,1236,1,0,0,0,1236,1238,1,0,0,0,1237,1235,1,0,0,0,1238,
        1239,5,518,0,0,1239,1241,1,0,0,0,1240,1229,1,0,0,0,1240,1241,1,0,
        0,0,1241,1242,1,0,0,0,1242,1243,5,17,0,0,1243,1244,5,517,0,0,1244,
        1245,3,158,79,0,1245,1246,5,518,0,0,1246,165,1,0,0,0,1247,1248,3,
        310,155,0,1248,167,1,0,0,0,1249,1251,3,170,85,0,1250,1252,3,176,
        88,0,1251,1250,1,0,0,0,1251,1252,1,0,0,0,1252,1254,1,0,0,0,1253,
        1255,3,204,102,0,1254,1253,1,0,0,0,1254,1255,1,0,0,0,1255,1257,1,
        0,0,0,1256,1258,3,206,103,0,1257,1256,1,0,0,0,1257,1258,1,0,0,0,
        1258,1260,1,0,0,0,1259,1261,3,220,110,0,1260,1259,1,0,0,0,1260,1261,
        1,0,0,0,1261,1263,1,0,0,0,1262,1264,3,222,111,0,1263,1262,1,0,0,
        0,1263,1264,1,0,0,0,1264,1270,1,0,0,0,1265,1266,3,170,85,0,1266,
        1267,3,176,88,0,1267,1268,3,228,114,0,1268,1270,1,0,0,0,1269,1249,
        1,0,0,0,1269,1265,1,0,0,0,1270,169,1,0,0,0,1271,1273,5,337,0,0,1272,
        1274,3,370,185,0,1273,1272,1,0,0,0,1273,1274,1,0,0,0,1274,1284,1,
        0,0,0,1275,1285,5,528,0,0,1276,1281,3,172,86,0,1277,1278,5,521,0,
        0,1278,1280,3,172,86,0,1279,1277,1,0,0,0,1280,1283,1,0,0,0,1281,
        1279,1,0,0,0,1281,1282,1,0,0,0,1282,1285,1,0,0,0,1283,1281,1,0,0,
        0,1284,1275,1,0,0,0,1284,1276,1,0,0,0,1285,171,1,0,0,0,1286,1302,
        3,174,87,0,1287,1292,3,258,129,0,1288,1290,5,17,0,0,1289,1288,1,
        0,0,0,1289,1290,1,0,0,0,1290,1291,1,0,0,0,1291,1293,3,52,26,0,1292,
        1289,1,0,0,0,1292,1293,1,0,0,0,1293,1302,1,0,0,0,1294,1299,3,52,
        26,0,1295,1297,5,17,0,0,1296,1295,1,0,0,0,1296,1297,1,0,0,0,1297,
        1298,1,0,0,0,1298,1300,3,258,129,0,1299,1296,1,0,0,0,1299,1300,1,
        0,0,0,1300,1302,1,0,0,0,1301,1286,1,0,0,0,1301,1287,1,0,0,0,1301,
        1294,1,0,0,0,1302,173,1,0,0,0,1303,1304,3,270,135,0,1304,1305,5,
        263,0,0,1305,1306,3,226,113,0,1306,1307,5,17,0,0,1307,1308,3,310,
        155,0,1308,1316,1,0,0,0,1309,1310,3,270,135,0,1310,1311,5,263,0,
        0,1311,1312,3,302,151,0,1312,1313,5,17,0,0,1313,1314,3,310,155,0,
        1314,1316,1,0,0,0,1315,1303,1,0,0,0,1315,1309,1,0,0,0,1316,175,1,
        0,0,0,1317,1318,5,151,0,0,1318,1319,3,178,89,0,1319,177,1,0,0,0,
        1320,1321,6,89,-1,0,1321,1326,3,180,90,0,1322,1323,5,521,0,0,1323,
        1325,3,180,90,0,1324,1322,1,0,0,0,1325,1328,1,0,0,0,1326,1324,1,
        0,0,0,1326,1327,1,0,0,0,1327,1332,1,0,0,0,1328,1326,1,0,0,0,1329,
        1332,3,188,94,0,1330,1332,3,190,95,0,1331,1320,1,0,0,0,1331,1329,
        1,0,0,0,1331,1330,1,0,0,0,1332,1354,1,0,0,0,1333,1334,10,3,0,0,1334,
        1335,5,73,0,0,1335,1336,5,185,0,0,1336,1353,3,178,89,4,1337,1339,
        10,4,0,0,1338,1340,5,234,0,0,1339,1338,1,0,0,0,1339,1340,1,0,0,0,
        1340,1342,1,0,0,0,1341,1343,7,20,0,0,1342,1341,1,0,0,0,1342,1343,
        1,0,0,0,1343,1345,1,0,0,0,1344,1346,5,262,0,0,1345,1344,1,0,0,0,
        1345,1346,1,0,0,0,1346,1347,1,0,0,0,1347,1348,5,185,0,0,1348,1350,
        3,178,89,0,1349,1351,3,202,101,0,1350,1349,1,0,0,0,1350,1351,1,0,
        0,0,1351,1353,1,0,0,0,1352,1333,1,0,0,0,1352,1337,1,0,0,0,1353,1356,
        1,0,0,0,1354,1352,1,0,0,0,1354,1355,1,0,0,0,1355,179,1,0,0,0,1356,
        1354,1,0,0,0,1357,1359,3,182,91,0,1358,1360,3,300,150,0,1359,1358,
        1,0,0,0,1359,1360,1,0,0,0,1360,181,1,0,0,0,1361,1363,5,374,0,0,1362,
        1361,1,0,0,0,1362,1363,1,0,0,0,1363,1364,1,0,0,0,1364,1366,3,328,
        164,0,1365,1367,3,184,92,0,1366,1365,1,0,0,0,1366,1367,1,0,0,0,1367,
        1391,1,0,0,0,1368,1370,3,330,165,0,1369,1371,3,184,92,0,1370,1369,
        1,0,0,0,1370,1371,1,0,0,0,1371,1391,1,0,0,0,1372,1373,5,199,0,0,
        1373,1374,5,374,0,0,1374,1375,5,517,0,0,1375,1376,3,268,134,0,1376,
        1377,5,518,0,0,1377,1391,1,0,0,0,1378,1380,5,199,0,0,1379,1378,1,
        0,0,0,1379,1380,1,0,0,0,1380,1381,1,0,0,0,1381,1382,5,517,0,0,1382,
        1383,3,158,79,0,1383,1384,5,518,0,0,1384,1391,1,0,0,0,1385,1386,
        5,406,0,0,1386,1387,5,517,0,0,1387,1388,3,258,129,0,1388,1389,5,
        518,0,0,1389,1391,1,0,0,0,1390,1362,1,0,0,0,1390,1368,1,0,0,0,1390,
        1372,1,0,0,0,1390,1379,1,0,0,0,1390,1385,1,0,0,0,1391,183,1,0,0,
        0,1392,1393,5,146,0,0,1393,1394,5,372,0,0,1394,1395,5,17,0,0,1395,
        1396,5,250,0,0,1396,1397,3,186,93,0,1397,185,1,0,0,0,1398,1399,3,
        258,129,0,1399,187,1,0,0,0,1400,1401,5,517,0,0,1401,1402,3,150,75,
        0,1402,1403,5,518,0,0,1403,1404,3,300,150,0,1404,189,1,0,0,0,1405,
        1406,5,374,0,0,1406,1407,5,517,0,0,1407,1408,3,192,96,0,1408,1409,
        5,518,0,0,1409,191,1,0,0,0,1410,1411,3,194,97,0,1411,1412,5,517,
        0,0,1412,1417,3,196,98,0,1413,1414,5,521,0,0,1414,1416,3,196,98,
        0,1415,1413,1,0,0,0,1416,1419,1,0,0,0,1417,1415,1,0,0,0,1417,1418,
        1,0,0,0,1418,1420,1,0,0,0,1419,1417,1,0,0,0,1420,1421,5,518,0,0,
        1421,193,1,0,0,0,1422,1423,7,21,0,0,1423,195,1,0,0,0,1424,1425,5,
        374,0,0,1425,1440,3,218,109,0,1426,1440,3,200,100,0,1427,1440,3,
        288,144,0,1428,1429,5,447,0,0,1429,1430,5,537,0,0,1430,1431,5,374,
        0,0,1431,1440,3,218,109,0,1432,1433,5,499,0,0,1433,1434,5,537,0,
        0,1434,1440,3,200,100,0,1435,1436,3,198,99,0,1436,1437,5,537,0,0,
        1437,1438,3,288,144,0,1438,1440,1,0,0,0,1439,1424,1,0,0,0,1439,1426,
        1,0,0,0,1439,1427,1,0,0,0,1439,1428,1,0,0,0,1439,1432,1,0,0,0,1439,
        1435,1,0,0,0,1440,197,1,0,0,0,1441,1442,7,22,0,0,1442,199,1,0,0,
        0,1443,1444,5,452,0,0,1444,1445,5,517,0,0,1445,1446,3,52,26,0,1446,
        1447,5,518,0,0,1447,201,1,0,0,0,1448,1449,5,254,0,0,1449,1453,3,
        260,130,0,1450,1451,5,413,0,0,1451,1453,3,56,28,0,1452,1448,1,0,
        0,0,1452,1450,1,0,0,0,1453,203,1,0,0,0,1454,1455,5,431,0,0,1455,
        1456,3,260,130,0,1456,205,1,0,0,0,1457,1458,5,159,0,0,1458,1459,
        5,34,0,0,1459,1464,3,208,104,0,1460,1461,5,521,0,0,1461,1463,3,208,
        104,0,1462,1460,1,0,0,0,1463,1466,1,0,0,0,1464,1462,1,0,0,0,1464,
        1465,1,0,0,0,1465,207,1,0,0,0,1466,1464,1,0,0,0,1467,1508,3,52,26,
        0,1468,1508,3,214,107,0,1469,1470,5,517,0,0,1470,1508,5,518,0,0,
        1471,1472,5,517,0,0,1472,1477,3,258,129,0,1473,1474,5,521,0,0,1474,
        1476,3,258,129,0,1475,1473,1,0,0,0,1476,1479,1,0,0,0,1477,1475,1,
        0,0,0,1477,1478,1,0,0,0,1478,1480,1,0,0,0,1479,1477,1,0,0,0,1480,
        1481,5,518,0,0,1481,1508,1,0,0,0,1482,1483,3,212,106,0,1483,1484,
        5,517,0,0,1484,1489,3,258,129,0,1485,1486,5,521,0,0,1486,1488,3,
        258,129,0,1487,1485,1,0,0,0,1488,1491,1,0,0,0,1489,1487,1,0,0,0,
        1489,1490,1,0,0,0,1490,1492,1,0,0,0,1491,1489,1,0,0,0,1492,1493,
        5,518,0,0,1493,1508,1,0,0,0,1494,1495,3,210,105,0,1495,1496,5,517,
        0,0,1496,1501,3,208,104,0,1497,1498,5,521,0,0,1498,1500,3,208,104,
        0,1499,1497,1,0,0,0,1500,1503,1,0,0,0,1501,1499,1,0,0,0,1501,1502,
        1,0,0,0,1502,1504,1,0,0,0,1503,1501,1,0,0,0,1504,1505,5,518,0,0,
        1505,1508,1,0,0,0,1506,1508,3,258,129,0,1507,1467,1,0,0,0,1507,1468,
        1,0,0,0,1507,1469,1,0,0,0,1507,1471,1,0,0,0,1507,1482,1,0,0,0,1507,
        1494,1,0,0,0,1507,1506,1,0,0,0,1508,209,1,0,0,0,1509,1510,5,160,
        0,0,1510,1511,5,494,0,0,1511,211,1,0,0,0,1512,1513,7,23,0,0,1513,
        213,1,0,0,0,1514,1515,3,216,108,0,1515,1516,5,517,0,0,1516,1517,
        3,218,109,0,1517,1518,5,521,0,0,1518,1519,3,288,144,0,1519,1520,
        5,518,0,0,1520,215,1,0,0,0,1521,1522,7,24,0,0,1522,217,1,0,0,0,1523,
        1524,3,334,167,0,1524,219,1,0,0,0,1525,1526,5,163,0,0,1526,1527,
        3,260,130,0,1527,221,1,0,0,0,1528,1529,5,433,0,0,1529,1534,3,224,
        112,0,1530,1531,5,521,0,0,1531,1533,3,224,112,0,1532,1530,1,0,0,
        0,1533,1536,1,0,0,0,1534,1532,1,0,0,0,1534,1535,1,0,0,0,1535,223,
        1,0,0,0,1536,1534,1,0,0,0,1537,1538,3,302,151,0,1538,1539,5,17,0,
        0,1539,1540,3,226,113,0,1540,225,1,0,0,0,1541,1543,3,302,151,0,1542,
        1541,1,0,0,0,1542,1543,1,0,0,0,1543,1544,1,0,0,0,1544,1546,5,517,
        0,0,1545,1547,3,236,118,0,1546,1545,1,0,0,0,1546,1547,1,0,0,0,1547,
        1549,1,0,0,0,1548,1550,3,230,115,0,1549,1548,1,0,0,0,1549,1550,1,
        0,0,0,1550,1552,1,0,0,0,1551,1553,3,252,126,0,1552,1551,1,0,0,0,
        1552,1553,1,0,0,0,1553,1554,1,0,0,0,1554,1555,5,518,0,0,1555,227,
        1,0,0,0,1556,1557,5,214,0,0,1557,1559,5,517,0,0,1558,1560,3,236,
        118,0,1559,1558,1,0,0,0,1559,1560,1,0,0,0,1560,1562,1,0,0,0,1561,
        1563,3,230,115,0,1562,1561,1,0,0,0,1562,1563,1,0,0,0,1563,1565,1,
        0,0,0,1564,1566,3,240,120,0,1565,1564,1,0,0,0,1565,1566,1,0,0,0,
        1566,1568,1,0,0,0,1567,1569,3,246,123,0,1568,1567,1,0,0,0,1568,1569,
        1,0,0,0,1569,1571,1,0,0,0,1570,1572,3,248,124,0,1571,1570,1,0,0,
        0,1571,1572,1,0,0,0,1572,1574,1,0,0,0,1573,1575,3,242,121,0,1574,
        1573,1,0,0,0,1574,1575,1,0,0,0,1575,1576,1,0,0,0,1576,1577,3,250,
        125,0,1577,1582,5,518,0,0,1578,1580,5,17,0,0,1579,1578,1,0,0,0,1579,
        1580,1,0,0,0,1580,1581,1,0,0,0,1581,1583,3,310,155,0,1582,1579,1,
        0,0,0,1582,1583,1,0,0,0,1583,229,1,0,0,0,1584,1585,5,259,0,0,1585,
        1586,5,34,0,0,1586,1591,3,232,116,0,1587,1588,5,521,0,0,1588,1590,
        3,232,116,0,1589,1587,1,0,0,0,1590,1593,1,0,0,0,1591,1589,1,0,0,
        0,1591,1592,1,0,0,0,1592,231,1,0,0,0,1593,1591,1,0,0,0,1594,1596,
        3,52,26,0,1595,1597,7,25,0,0,1596,1595,1,0,0,0,1596,1597,1,0,0,0,
        1597,1600,1,0,0,0,1598,1599,5,477,0,0,1599,1601,7,26,0,0,1600,1598,
        1,0,0,0,1600,1601,1,0,0,0,1601,233,1,0,0,0,1602,1605,5,205,0,0,1603,
        1606,5,5,0,0,1604,1606,3,258,129,0,1605,1603,1,0,0,0,1605,1604,1,
        0,0,0,1606,235,1,0,0,0,1607,1608,5,269,0,0,1608,1611,5,34,0,0,1609,
        1612,3,52,26,0,1610,1612,3,270,135,0,1611,1609,1,0,0,0,1611,1610,
        1,0,0,0,1612,1620,1,0,0,0,1613,1616,5,521,0,0,1614,1617,3,52,26,
        0,1615,1617,3,270,135,0,1616,1614,1,0,0,0,1616,1615,1,0,0,0,1617,
        1619,1,0,0,0,1618,1613,1,0,0,0,1619,1622,1,0,0,0,1620,1618,1,0,0,
        0,1620,1621,1,0,0,0,1621,237,1,0,0,0,1622,1620,1,0,0,0,1623,1640,
        5,528,0,0,1624,1640,5,531,0,0,1625,1640,5,536,0,0,1626,1627,5,519,
        0,0,1627,1628,5,539,0,0,1628,1629,5,521,0,0,1629,1630,5,539,0,0,
        1630,1640,5,520,0,0,1631,1632,5,519,0,0,1632,1633,5,539,0,0,1633,
        1634,5,521,0,0,1634,1640,5,520,0,0,1635,1636,5,519,0,0,1636,1637,
        5,521,0,0,1637,1638,5,539,0,0,1638,1640,5,520,0,0,1639,1623,1,0,
        0,0,1639,1624,1,0,0,0,1639,1625,1,0,0,0,1639,1626,1,0,0,0,1639,1631,
        1,0,0,0,1639,1635,1,0,0,0,1640,239,1,0,0,0,1641,1642,5,216,0,0,1642,
        1647,3,172,86,0,1643,1644,5,521,0,0,1644,1646,3,172,86,0,1645,1643,
        1,0,0,0,1646,1649,1,0,0,0,1647,1645,1,0,0,0,1647,1648,1,0,0,0,1648,
        241,1,0,0,0,1649,1647,1,0,0,0,1650,1651,5,272,0,0,1651,1653,5,517,
        0,0,1652,1654,3,244,122,0,1653,1652,1,0,0,0,1654,1655,1,0,0,0,1655,
        1653,1,0,0,0,1655,1656,1,0,0,0,1656,1657,1,0,0,0,1657,1659,5,518,
        0,0,1658,1660,3,256,128,0,1659,1658,1,0,0,0,1659,1660,1,0,0,0,1660,
        243,1,0,0,0,1661,1663,3,312,156,0,1662,1664,3,238,119,0,1663,1662,
        1,0,0,0,1663,1664,1,0,0,0,1664,245,1,0,0,0,1665,1666,5,5,0,0,1666,
        1667,5,323,0,0,1667,1668,5,273,0,0,1668,1674,5,211,0,0,1669,1670,
        5,255,0,0,1670,1671,5,322,0,0,1671,1672,5,273,0,0,1672,1674,5,211,
        0,0,1673,1665,1,0,0,0,1673,1669,1,0,0,0,1674,247,1,0,0,0,1675,1676,
        5,439,0,0,1676,1677,5,211,0,0,1677,1678,5,344,0,0,1678,1679,5,479,
        0,0,1679,1680,5,468,0,0,1680,1700,5,322,0,0,1681,1682,5,439,0,0,
        1682,1683,5,211,0,0,1683,1684,5,344,0,0,1684,1685,5,389,0,0,1685,
        1686,5,238,0,0,1686,1700,5,322,0,0,1687,1688,5,439,0,0,1688,1689,
        5,211,0,0,1689,1690,5,344,0,0,1690,1691,5,389,0,0,1691,1692,5,468,
        0,0,1692,1700,3,312,156,0,1693,1694,5,439,0,0,1694,1695,5,211,0,
        0,1695,1696,5,344,0,0,1696,1697,5,389,0,0,1697,1698,5,458,0,0,1698,
        1700,3,312,156,0,1699,1675,1,0,0,0,1699,1681,1,0,0,0,1699,1687,1,
        0,0,0,1699,1693,1,0,0,0,1700,249,1,0,0,0,1701,1702,5,105,0,0,1702,
        1707,3,172,86,0,1703,1704,5,521,0,0,1704,1706,3,172,86,0,1705,1703,
        1,0,0,0,1706,1709,1,0,0,0,1707,1705,1,0,0,0,1707,1708,1,0,0,0,1708,
        251,1,0,0,0,1709,1707,1,0,0,0,1710,1711,5,293,0,0,1711,1712,5,27,
        0,0,1712,1713,3,288,144,0,1713,1714,3,254,127,0,1714,1720,1,0,0,
        0,1715,1716,5,323,0,0,1716,1717,5,27,0,0,1717,1718,5,539,0,0,1718,
        1720,3,254,127,0,1719,1710,1,0,0,0,1719,1715,1,0,0,0,1720,253,1,
        0,0,0,1721,1722,5,481,0,0,1722,1723,5,10,0,0,1723,1724,5,76,0,0,
        1724,1725,5,322,0,0,1725,255,1,0,0,0,1726,1727,5,435,0,0,1727,1728,
        3,288,144,0,1728,257,1,0,0,0,1729,1730,3,260,130,0,1730,259,1,0,
        0,0,1731,1732,6,130,-1,0,1732,1733,5,242,0,0,1733,1744,3,260,130,
        6,1734,1735,5,133,0,0,1735,1736,5,517,0,0,1736,1737,3,158,79,0,1737,
        1738,5,518,0,0,1738,1744,1,0,0,0,1739,1741,3,266,133,0,1740,1742,
        3,262,131,0,1741,1740,1,0,0,0,1741,1742,1,0,0,0,1742,1744,1,0,0,
        0,1743,1731,1,0,0,0,1743,1734,1,0,0,0,1743,1739,1,0,0,0,1744,1759,
        1,0,0,0,1745,1746,10,3,0,0,1746,1747,5,10,0,0,1747,1758,3,260,130,
        4,1748,1749,10,2,0,0,1749,1750,5,258,0,0,1750,1758,3,260,130,3,1751,
        1752,10,1,0,0,1752,1754,5,184,0,0,1753,1755,5,242,0,0,1754,1753,
        1,0,0,0,1754,1755,1,0,0,0,1755,1756,1,0,0,0,1756,1758,7,27,0,0,1757,
        1745,1,0,0,0,1757,1748,1,0,0,0,1757,1751,1,0,0,0,1758,1761,1,0,0,
        0,1759,1757,1,0,0,0,1759,1760,1,0,0,0,1760,261,1,0,0,0,1761,1759,
        1,0,0,0,1762,1764,5,242,0,0,1763,1762,1,0,0,0,1763,1764,1,0,0,0,
        1764,1765,1,0,0,0,1765,1767,5,27,0,0,1766,1768,7,28,0,0,1767,1766,
        1,0,0,0,1767,1768,1,0,0,0,1768,1769,1,0,0,0,1769,1770,3,266,133,
        0,1770,1771,5,10,0,0,1771,1772,3,266,133,0,1772,1837,1,0,0,0,1773,
        1775,5,242,0,0,1774,1773,1,0,0,0,1774,1775,1,0,0,0,1775,1776,1,0,
        0,0,1776,1777,5,170,0,0,1777,1778,5,517,0,0,1778,1783,3,258,129,
        0,1779,1780,5,521,0,0,1780,1782,3,258,129,0,1781,1779,1,0,0,0,1782,
        1785,1,0,0,0,1783,1781,1,0,0,0,1783,1784,1,0,0,0,1784,1786,1,0,0,
        0,1785,1783,1,0,0,0,1786,1787,5,518,0,0,1787,1837,1,0,0,0,1788,1790,
        5,242,0,0,1789,1788,1,0,0,0,1789,1790,1,0,0,0,1790,1791,1,0,0,0,
        1791,1792,5,170,0,0,1792,1793,5,517,0,0,1793,1794,3,158,79,0,1794,
        1795,5,518,0,0,1795,1837,1,0,0,0,1796,1797,5,133,0,0,1797,1798,5,
        517,0,0,1798,1799,3,158,79,0,1799,1800,5,518,0,0,1800,1837,1,0,0,
        0,1801,1803,5,242,0,0,1802,1801,1,0,0,0,1802,1803,1,0,0,0,1803,1804,
        1,0,0,0,1804,1805,5,319,0,0,1805,1837,3,266,133,0,1806,1837,3,264,
        132,0,1807,1809,5,184,0,0,1808,1810,5,242,0,0,1809,1808,1,0,0,0,
        1809,1810,1,0,0,0,1810,1811,1,0,0,0,1811,1837,7,27,0,0,1812,1814,
        5,184,0,0,1813,1815,5,242,0,0,1814,1813,1,0,0,0,1814,1815,1,0,0,
        0,1815,1816,1,0,0,0,1816,1817,5,113,0,0,1817,1818,5,151,0,0,1818,
        1837,3,266,133,0,1819,1821,5,242,0,0,1820,1819,1,0,0,0,1820,1821,
        1,0,0,0,1821,1822,1,0,0,0,1822,1823,5,343,0,0,1823,1824,5,389,0,
        0,1824,1827,3,266,133,0,1825,1826,5,127,0,0,1826,1828,3,364,182,
        0,1827,1825,1,0,0,0,1827,1828,1,0,0,0,1828,1837,1,0,0,0,1829,1830,
        5,184,0,0,1830,1834,5,186,0,0,1831,1835,5,414,0,0,1832,1835,5,13,
        0,0,1833,1835,3,310,155,0,1834,1831,1,0,0,0,1834,1832,1,0,0,0,1834,
        1833,1,0,0,0,1834,1835,1,0,0,0,1835,1837,1,0,0,0,1836,1763,1,0,0,
        0,1836,1774,1,0,0,0,1836,1789,1,0,0,0,1836,1796,1,0,0,0,1836,1802,
        1,0,0,0,1836,1806,1,0,0,0,1836,1807,1,0,0,0,1836,1812,1,0,0,0,1836,
        1820,1,0,0,0,1836,1829,1,0,0,0,1837,263,1,0,0,0,1838,1840,5,242,
        0,0,1839,1838,1,0,0,0,1839,1840,1,0,0,0,1840,1841,1,0,0,0,1841,1842,
        5,203,0,0,1842,1856,7,29,0,0,1843,1844,5,517,0,0,1844,1857,5,518,
        0,0,1845,1846,5,517,0,0,1846,1851,3,258,129,0,1847,1848,5,521,0,
        0,1848,1850,3,258,129,0,1849,1847,1,0,0,0,1850,1853,1,0,0,0,1851,
        1849,1,0,0,0,1851,1852,1,0,0,0,1852,1854,1,0,0,0,1853,1851,1,0,0,
        0,1854,1855,5,518,0,0,1855,1857,1,0,0,0,1856,1843,1,0,0,0,1856,1845,
        1,0,0,0,1857,1868,1,0,0,0,1858,1860,5,242,0,0,1859,1858,1,0,0,0,
        1859,1860,1,0,0,0,1860,1861,1,0,0,0,1861,1862,5,203,0,0,1862,1865,
        3,266,133,0,1863,1864,5,127,0,0,1864,1866,3,364,182,0,1865,1863,
        1,0,0,0,1865,1866,1,0,0,0,1866,1868,1,0,0,0,1867,1839,1,0,0,0,1867,
        1859,1,0,0,0,1868,265,1,0,0,0,1869,1870,6,133,-1,0,1870,1874,3,270,
        135,0,1871,1872,7,30,0,0,1872,1874,3,266,133,7,1873,1869,1,0,0,0,
        1873,1871,1,0,0,0,1874,1896,1,0,0,0,1875,1876,10,6,0,0,1876,1877,
        7,31,0,0,1877,1895,3,266,133,7,1878,1879,10,5,0,0,1879,1880,7,32,
        0,0,1880,1895,3,266,133,6,1881,1882,10,4,0,0,1882,1883,5,512,0,0,
        1883,1895,3,266,133,5,1884,1885,10,3,0,0,1885,1886,5,513,0,0,1886,
        1895,3,266,133,4,1887,1888,10,2,0,0,1888,1889,5,511,0,0,1889,1895,
        3,266,133,3,1890,1891,10,1,0,0,1891,1892,3,352,176,0,1892,1893,3,
        266,133,2,1893,1895,1,0,0,0,1894,1875,1,0,0,0,1894,1878,1,0,0,0,
        1894,1881,1,0,0,0,1894,1884,1,0,0,0,1894,1887,1,0,0,0,1894,1890,
        1,0,0,0,1895,1898,1,0,0,0,1896,1894,1,0,0,0,1896,1897,1,0,0,0,1897,
        267,1,0,0,0,1898,1896,1,0,0,0,1899,1919,3,378,189,0,1900,1919,3,
        276,138,0,1901,1902,3,278,139,0,1902,1914,5,517,0,0,1903,1905,3,
        370,185,0,1904,1903,1,0,0,0,1904,1905,1,0,0,0,1905,1906,1,0,0,0,
        1906,1911,3,280,140,0,1907,1908,5,521,0,0,1908,1910,3,280,140,0,
        1909,1907,1,0,0,0,1910,1913,1,0,0,0,1911,1909,1,0,0,0,1911,1912,
        1,0,0,0,1912,1915,1,0,0,0,1913,1911,1,0,0,0,1914,1904,1,0,0,0,1914,
        1915,1,0,0,0,1915,1916,1,0,0,0,1916,1917,5,518,0,0,1917,1919,1,0,
        0,0,1918,1899,1,0,0,0,1918,1900,1,0,0,0,1918,1901,1,0,0,0,1919,269,
        1,0,0,0,1920,1921,6,135,-1,0,1921,1923,5,40,0,0,1922,1924,3,316,
        158,0,1923,1922,1,0,0,0,1924,1925,1,0,0,0,1925,1923,1,0,0,0,1925,
        1926,1,0,0,0,1926,1929,1,0,0,0,1927,1928,5,120,0,0,1928,1930,3,258,
        129,0,1929,1927,1,0,0,0,1929,1930,1,0,0,0,1930,1931,1,0,0,0,1931,
        1932,5,122,0,0,1932,1996,1,0,0,0,1933,1934,5,40,0,0,1934,1936,3,
        258,129,0,1935,1937,3,316,158,0,1936,1935,1,0,0,0,1937,1938,1,0,
        0,0,1938,1936,1,0,0,0,1938,1939,1,0,0,0,1939,1942,1,0,0,0,1940,1941,
        5,120,0,0,1941,1943,3,258,129,0,1942,1940,1,0,0,0,1942,1943,1,0,
        0,0,1943,1944,1,0,0,0,1944,1945,5,122,0,0,1945,1996,1,0,0,0,1946,
        1947,5,41,0,0,1947,1948,5,517,0,0,1948,1949,3,258,129,0,1949,1950,
        5,17,0,0,1950,1951,3,58,29,0,1951,1952,5,518,0,0,1952,1996,1,0,0,
        0,1953,1954,5,458,0,0,1954,1955,5,517,0,0,1955,1958,3,258,129,0,
        1956,1957,5,462,0,0,1957,1959,5,477,0,0,1958,1956,1,0,0,0,1958,1959,
        1,0,0,0,1959,1960,1,0,0,0,1960,1961,5,518,0,0,1961,1996,1,0,0,0,
        1962,1963,5,468,0,0,1963,1964,5,517,0,0,1964,1967,3,258,129,0,1965,
        1966,5,462,0,0,1966,1968,5,477,0,0,1967,1965,1,0,0,0,1967,1968,1,
        0,0,0,1968,1969,1,0,0,0,1969,1970,5,518,0,0,1970,1996,1,0,0,0,1971,
        1972,5,282,0,0,1972,1973,5,517,0,0,1973,1974,3,266,133,0,1974,1975,
        5,170,0,0,1975,1976,3,266,133,0,1976,1977,5,518,0,0,1977,1996,1,
        0,0,0,1978,1996,3,360,180,0,1979,1996,5,528,0,0,1980,1981,3,334,
        167,0,1981,1982,5,514,0,0,1982,1983,5,528,0,0,1983,1996,1,0,0,0,
        1984,1985,5,517,0,0,1985,1986,3,158,79,0,1986,1987,5,518,0,0,1987,
        1996,1,0,0,0,1988,1996,3,268,134,0,1989,1996,3,54,27,0,1990,1996,
        3,282,141,0,1991,1992,5,517,0,0,1992,1993,3,258,129,0,1993,1994,
        5,518,0,0,1994,1996,1,0,0,0,1995,1920,1,0,0,0,1995,1933,1,0,0,0,
        1995,1946,1,0,0,0,1995,1953,1,0,0,0,1995,1962,1,0,0,0,1995,1971,
        1,0,0,0,1995,1978,1,0,0,0,1995,1979,1,0,0,0,1995,1980,1,0,0,0,1995,
        1984,1,0,0,0,1995,1988,1,0,0,0,1995,1989,1,0,0,0,1995,1990,1,0,0,
        0,1995,1991,1,0,0,0,1996,2004,1,0,0,0,1997,1998,10,4,0,0,1998,1999,
        5,515,0,0,1999,2000,3,266,133,0,2000,2001,5,516,0,0,2001,2003,1,
        0,0,0,2002,1997,1,0,0,0,2003,2006,1,0,0,0,2004,2002,1,0,0,0,2004,
        2005,1,0,0,0,2005,271,1,0,0,0,2006,2004,1,0,0,0,2007,2008,3,334,
        167,0,2008,273,1,0,0,0,2009,2014,3,382,191,0,2010,2014,3,378,189,
        0,2011,2014,3,380,190,0,2012,2014,3,334,167,0,2013,2009,1,0,0,0,
        2013,2010,1,0,0,0,2013,2011,1,0,0,0,2013,2012,1,0,0,0,2014,275,1,
        0,0,0,2015,2016,3,380,190,0,2016,2017,5,538,0,0,2017,2020,1,0,0,
        0,2018,2020,3,288,144,0,2019,2015,1,0,0,0,2019,2018,1,0,0,0,2020,
        277,1,0,0,0,2021,2024,3,382,191,0,2022,2024,3,334,167,0,2023,2021,
        1,0,0,0,2023,2022,1,0,0,0,2024,279,1,0,0,0,2025,2030,3,376,188,0,
        2026,2030,3,374,187,0,2027,2030,3,372,186,0,2028,2030,3,258,129,
        0,2029,2025,1,0,0,0,2029,2026,1,0,0,0,2029,2027,1,0,0,0,2029,2028,
        1,0,0,0,2030,281,1,0,0,0,2031,2032,3,334,167,0,2032,283,1,0,0,0,
        2033,2034,3,310,155,0,2034,285,1,0,0,0,2035,2038,3,310,155,0,2036,
        2038,3,282,141,0,2037,2035,1,0,0,0,2037,2036,1,0,0,0,2038,287,1,
        0,0,0,2039,2042,5,182,0,0,2040,2043,3,290,145,0,2041,2043,3,294,
        147,0,2042,2040,1,0,0,0,2042,2041,1,0,0,0,2042,2043,1,0,0,0,2043,
        289,1,0,0,0,2044,2046,3,292,146,0,2045,2047,3,296,148,0,2046,2045,
        1,0,0,0,2046,2047,1,0,0,0,2047,291,1,0,0,0,2048,2049,3,298,149,0,
        2049,2050,3,374,187,0,2050,2052,1,0,0,0,2051,2048,1,0,0,0,2052,2053,
        1,0,0,0,2053,2051,1,0,0,0,2053,2054,1,0,0,0,2054,293,1,0,0,0,2055,
        2058,3,296,148,0,2056,2059,3,292,146,0,2057,2059,3,296,148,0,2058,
        2056,1,0,0,0,2058,2057,1,0,0,0,2058,2059,1,0,0,0,2059,295,1,0,0,
        0,2060,2061,3,298,149,0,2061,2062,3,374,187,0,2062,2063,5,389,0,
        0,2063,2064,3,374,187,0,2064,297,1,0,0,0,2065,2067,7,33,0,0,2066,
        2065,1,0,0,0,2066,2067,1,0,0,0,2067,2068,1,0,0,0,2068,2071,7,34,
        0,0,2069,2071,5,538,0,0,2070,2066,1,0,0,0,2070,2069,1,0,0,0,2071,
        299,1,0,0,0,2072,2074,5,17,0,0,2073,2072,1,0,0,0,2073,2074,1,0,0,
        0,2074,2075,1,0,0,0,2075,2077,3,310,155,0,2076,2078,3,306,153,0,
        2077,2076,1,0,0,0,2077,2078,1,0,0,0,2078,301,1,0,0,0,2079,2080,3,
        310,155,0,2080,2081,3,304,152,0,2081,303,1,0,0,0,2082,2083,5,222,
        0,0,2083,2085,3,310,155,0,2084,2082,1,0,0,0,2085,2086,1,0,0,0,2086,
        2084,1,0,0,0,2086,2087,1,0,0,0,2087,2090,1,0,0,0,2088,2090,1,0,0,
        0,2089,2084,1,0,0,0,2089,2088,1,0,0,0,2090,305,1,0,0,0,2091,2092,
        5,517,0,0,2092,2093,3,308,154,0,2093,2094,5,518,0,0,2094,307,1,0,
        0,0,2095,2100,3,310,155,0,2096,2097,5,521,0,0,2097,2099,3,310,155,
        0,2098,2096,1,0,0,0,2099,2102,1,0,0,0,2100,2098,1,0,0,0,2100,2101,
        1,0,0,0,2101,309,1,0,0,0,2102,2100,1,0,0,0,2103,2107,3,312,156,0,
        2104,2107,3,314,157,0,2105,2107,3,384,192,0,2106,2103,1,0,0,0,2106,
        2104,1,0,0,0,2106,2105,1,0,0,0,2107,311,1,0,0,0,2108,2109,7,35,0,
        0,2109,313,1,0,0,0,2110,2111,5,538,0,0,2111,315,1,0,0,0,2112,2113,
        5,429,0,0,2113,2114,3,258,129,0,2114,2115,5,377,0,0,2115,2116,3,
        258,129,0,2116,317,1,0,0,0,2117,2118,3,310,155,0,2118,319,1,0,0,
        0,2119,2120,3,310,155,0,2120,321,1,0,0,0,2121,2124,3,310,155,0,2122,
        2123,5,514,0,0,2123,2125,3,310,155,0,2124,2122,1,0,0,0,2124,2125,
        1,0,0,0,2125,323,1,0,0,0,2126,2129,3,310,155,0,2127,2128,5,514,0,
        0,2128,2130,3,310,155,0,2129,2127,1,0,0,0,2129,2130,1,0,0,0,2130,
        325,1,0,0,0,2131,2134,3,310,155,0,2132,2133,5,514,0,0,2133,2135,
        3,310,155,0,2134,2132,1,0,0,0,2134,2135,1,0,0,0,2135,2144,1,0,0,
        0,2136,2137,3,310,155,0,2137,2138,5,514,0,0,2138,2141,3,310,155,
        0,2139,2140,5,514,0,0,2140,2142,3,310,155,0,2141,2139,1,0,0,0,2141,
        2142,1,0,0,0,2142,2144,1,0,0,0,2143,2131,1,0,0,0,2143,2136,1,0,0,
        0,2144,327,1,0,0,0,2145,2148,3,310,155,0,2146,2147,5,514,0,0,2147,
        2149,3,310,155,0,2148,2146,1,0,0,0,2148,2149,1,0,0,0,2149,2158,1,
        0,0,0,2150,2151,3,310,155,0,2151,2152,5,514,0,0,2152,2155,3,310,
        155,0,2153,2154,5,514,0,0,2154,2156,3,310,155,0,2155,2153,1,0,0,
        0,2155,2156,1,0,0,0,2156,2158,1,0,0,0,2157,2145,1,0,0,0,2157,2150,
        1,0,0,0,2158,329,1,0,0,0,2159,2162,3,310,155,0,2160,2161,5,514,0,
        0,2161,2163,3,310,155,0,2162,2160,1,0,0,0,2162,2163,1,0,0,0,2163,
        2172,1,0,0,0,2164,2165,3,310,155,0,2165,2166,5,514,0,0,2166,2169,
        3,310,155,0,2167,2168,5,514,0,0,2168,2170,3,310,155,0,2169,2167,
        1,0,0,0,2169,2170,1,0,0,0,2170,2172,1,0,0,0,2171,2159,1,0,0,0,2171,
        2164,1,0,0,0,2172,331,1,0,0,0,2173,2176,3,310,155,0,2174,2175,5,
        514,0,0,2175,2177,3,310,155,0,2176,2174,1,0,0,0,2176,2177,1,0,0,
        0,2177,2186,1,0,0,0,2178,2179,3,310,155,0,2179,2180,5,514,0,0,2180,
        2183,3,310,155,0,2181,2182,5,514,0,0,2182,2184,3,310,155,0,2183,
        2181,1,0,0,0,2183,2184,1,0,0,0,2184,2186,1,0,0,0,2185,2173,1,0,0,
        0,2185,2178,1,0,0,0,2186,333,1,0,0,0,2187,2192,3,310,155,0,2188,
        2189,5,514,0,0,2189,2191,3,310,155,0,2190,2188,1,0,0,0,2191,2194,
        1,0,0,0,2192,2193,1,0,0,0,2192,2190,1,0,0,0,2193,335,1,0,0,0,2194,
        2192,1,0,0,0,2195,2196,5,434,0,0,2196,2197,3,342,171,0,2197,337,
        1,0,0,0,2198,2199,5,167,0,0,2199,2200,5,242,0,0,2200,2201,5,133,
        0,0,2201,339,1,0,0,0,2202,2203,5,167,0,0,2203,2204,5,133,0,0,2204,
        341,1,0,0,0,2205,2206,5,517,0,0,2206,2211,3,344,172,0,2207,2208,
        5,521,0,0,2208,2210,3,344,172,0,2209,2207,1,0,0,0,2210,2213,1,0,
        0,0,2211,2209,1,0,0,0,2211,2212,1,0,0,0,2212,2214,1,0,0,0,2213,2211,
        1,0,0,0,2214,2215,5,518,0,0,2215,343,1,0,0,0,2216,2221,3,346,173,
        0,2217,2219,5,506,0,0,2218,2217,1,0,0,0,2218,2219,1,0,0,0,2219,2220,
        1,0,0,0,2220,2222,3,348,174,0,2221,2218,1,0,0,0,2221,2222,1,0,0,
        0,2222,345,1,0,0,0,2223,2227,3,310,155,0,2224,2227,3,282,141,0,2225,
        2227,5,538,0,0,2226,2223,1,0,0,0,2226,2224,1,0,0,0,2226,2225,1,0,
        0,0,2227,347,1,0,0,0,2228,2233,5,539,0,0,2229,2233,5,540,0,0,2230,
        2233,3,368,184,0,2231,2233,5,538,0,0,2232,2228,1,0,0,0,2232,2229,
        1,0,0,0,2232,2230,1,0,0,0,2232,2231,1,0,0,0,2233,349,1,0,0,0,2234,
        2241,5,10,0,0,2235,2236,5,512,0,0,2236,2241,5,512,0,0,2237,2241,
        5,258,0,0,2238,2239,5,511,0,0,2239,2241,5,511,0,0,2240,2234,1,0,
        0,0,2240,2235,1,0,0,0,2240,2237,1,0,0,0,2240,2238,1,0,0,0,2241,351,
        1,0,0,0,2242,2257,5,506,0,0,2243,2257,5,507,0,0,2244,2257,5,508,
        0,0,2245,2246,5,508,0,0,2246,2257,5,506,0,0,2247,2248,5,507,0,0,
        2248,2257,5,506,0,0,2249,2250,5,508,0,0,2250,2257,5,507,0,0,2251,
        2252,5,509,0,0,2252,2257,5,506,0,0,2253,2254,5,508,0,0,2254,2255,
        5,506,0,0,2255,2257,5,507,0,0,2256,2242,1,0,0,0,2256,2243,1,0,0,
        0,2256,2244,1,0,0,0,2256,2245,1,0,0,0,2256,2247,1,0,0,0,2256,2249,
        1,0,0,0,2256,2251,1,0,0,0,2256,2253,1,0,0,0,2257,353,1,0,0,0,2258,
        2259,5,508,0,0,2259,2266,5,508,0,0,2260,2261,5,507,0,0,2261,2266,
        5,507,0,0,2262,2266,5,512,0,0,2263,2266,5,513,0,0,2264,2266,5,511,
        0,0,2265,2258,1,0,0,0,2265,2260,1,0,0,0,2265,2262,1,0,0,0,2265,2263,
        1,0,0,0,2265,2264,1,0,0,0,2266,355,1,0,0,0,2267,2268,7,36,0,0,2268,
        357,1,0,0,0,2269,2270,7,37,0,0,2270,359,1,0,0,0,2271,2286,3,288,
        144,0,2272,2286,3,362,181,0,2273,2286,3,364,182,0,2274,2276,5,530,
        0,0,2275,2274,1,0,0,0,2275,2276,1,0,0,0,2276,2277,1,0,0,0,2277,2286,
        3,366,183,0,2278,2286,3,368,184,0,2279,2286,5,540,0,0,2280,2286,
        5,541,0,0,2281,2283,5,242,0,0,2282,2281,1,0,0,0,2282,2283,1,0,0,
        0,2283,2284,1,0,0,0,2284,2286,5,245,0,0,2285,2271,1,0,0,0,2285,2272,
        1,0,0,0,2285,2273,1,0,0,0,2285,2275,1,0,0,0,2285,2278,1,0,0,0,2285,
        2279,1,0,0,0,2285,2280,1,0,0,0,2285,2282,1,0,0,0,2286,361,1,0,0,
        0,2287,2288,3,372,186,0,2288,2289,3,364,182,0,2289,363,1,0,0,0,2290,
        2291,5,538,0,0,2291,365,1,0,0,0,2292,2293,5,539,0,0,2293,367,1,0,
        0,0,2294,2295,7,38,0,0,2295,369,1,0,0,0,2296,2297,7,39,0,0,2297,
        371,1,0,0,0,2298,2299,7,40,0,0,2299,373,1,0,0,0,2300,2301,7,41,0,
        0,2301,375,1,0,0,0,2302,2303,7,42,0,0,2303,377,1,0,0,0,2304,2305,
        7,43,0,0,2305,379,1,0,0,0,2306,2307,7,44,0,0,2307,381,1,0,0,0,2308,
        2309,7,45,0,0,2309,383,1,0,0,0,2310,2311,7,46,0,0,2311,385,1,0,0,
        0,273,389,396,399,413,431,435,444,449,456,467,476,488,491,498,501,
        509,513,518,521,528,536,540,552,560,564,596,599,604,608,612,616,
        625,630,634,638,643,646,650,655,661,666,671,675,679,683,693,701,
        705,709,713,717,721,725,729,733,735,745,753,777,791,796,800,806,
        809,812,819,822,831,843,867,879,884,888,896,900,906,916,921,927,
        931,935,939,948,952,959,962,972,980,988,992,1007,1026,1037,1041,
        1048,1053,1059,1063,1070,1074,1078,1082,1090,1094,1099,1105,1111,
        1114,1118,1129,1138,1152,1164,1179,1182,1186,1189,1191,1196,1200,
        1203,1207,1216,1225,1235,1240,1251,1254,1257,1260,1263,1269,1273,
        1281,1284,1289,1292,1296,1299,1301,1315,1326,1331,1339,1342,1345,
        1350,1352,1354,1359,1362,1366,1370,1379,1390,1417,1439,1452,1464,
        1477,1489,1501,1507,1534,1542,1546,1549,1552,1559,1562,1565,1568,
        1571,1574,1579,1582,1591,1596,1600,1605,1611,1616,1620,1639,1647,
        1655,1659,1663,1673,1699,1707,1719,1741,1743,1754,1757,1759,1763,
        1767,1774,1783,1789,1802,1809,1814,1820,1827,1834,1836,1839,1851,
        1856,1859,1865,1867,1873,1894,1896,1904,1911,1914,1918,1925,1929,
        1938,1942,1958,1967,1995,2004,2013,2019,2023,2029,2037,2042,2046,
        2053,2058,2066,2070,2073,2077,2086,2089,2100,2106,2124,2129,2134,
        2141,2143,2148,2155,2157,2162,2169,2171,2176,2183,2185,2192,2211,
        2218,2221,2226,2232,2240,2256,2265,2275,2282,2285
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
    public constant(): ConstantContext[];
    public constant(i: number): ConstantContext | null;
    public constant(i?: number): ConstantContext[] | ConstantContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ConstantContext);
        }

        return this.getRuleContext(i, ConstantContext);
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
    public columnName(): ColumnNameContext {
        return this.getRuleContext(0, ColumnNameContext)!;
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
    public frameBound(): FrameBoundContext {
        return this.getRuleContext(0, FrameBoundContext)!;
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
