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
    public static readonly RULE_showStatememt = 12;
    public static readonly RULE_loadStatement = 13;
    public static readonly RULE_unloadStatememt = 14;
    public static readonly RULE_setStatememt = 15;
    public static readonly RULE_resetStatememt = 16;
    public static readonly RULE_jarStatememt = 17;
    public static readonly RULE_dtAddStatement = 18;
    public static readonly RULE_dtFilePath = 19;
    public static readonly RULE_createTable = 20;
    public static readonly RULE_simpleCreateTable = 21;
    public static readonly RULE_createTableAsSelect = 22;
    public static readonly RULE_columnOptionDefinition = 23;
    public static readonly RULE_physicalColumnDefinition = 24;
    public static readonly RULE_columnNameCreate = 25;
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
    public static readonly RULE_likeOption = 49;
    public static readonly RULE_createCatalog = 50;
    public static readonly RULE_createDatabase = 51;
    public static readonly RULE_createView = 52;
    public static readonly RULE_createFunction = 53;
    public static readonly RULE_usingClause = 54;
    public static readonly RULE_jarFileName = 55;
    public static readonly RULE_alterTable = 56;
    public static readonly RULE_renameDefinition = 57;
    public static readonly RULE_setKeyValueDefinition = 58;
    public static readonly RULE_addConstraint = 59;
    public static readonly RULE_dropConstraint = 60;
    public static readonly RULE_addUnique = 61;
    public static readonly RULE_notForced = 62;
    public static readonly RULE_alterView = 63;
    public static readonly RULE_alterDatabase = 64;
    public static readonly RULE_alterFunction = 65;
    public static readonly RULE_dropCatalog = 66;
    public static readonly RULE_dropTable = 67;
    public static readonly RULE_dropDatabase = 68;
    public static readonly RULE_dropView = 69;
    public static readonly RULE_dropFunction = 70;
    public static readonly RULE_insertStatement = 71;
    public static readonly RULE_insertSimpleStatement = 72;
    public static readonly RULE_insertPartitionDefinition = 73;
    public static readonly RULE_valuesDefinition = 74;
    public static readonly RULE_valuesRowDefinition = 75;
    public static readonly RULE_insertMulStatementCompatibility = 76;
    public static readonly RULE_insertMulStatement = 77;
    public static readonly RULE_queryStatement = 78;
    public static readonly RULE_valuesCaluse = 79;
    public static readonly RULE_withClause = 80;
    public static readonly RULE_withItem = 81;
    public static readonly RULE_withItemName = 82;
    public static readonly RULE_selectStatement = 83;
    public static readonly RULE_selectClause = 84;
    public static readonly RULE_projectItemDefinition = 85;
    public static readonly RULE_overWindowItem = 86;
    public static readonly RULE_fromClause = 87;
    public static readonly RULE_tableExpression = 88;
    public static readonly RULE_tableReference = 89;
    public static readonly RULE_tablePrimary = 90;
    public static readonly RULE_systemTimePeriod = 91;
    public static readonly RULE_dateTimeExpression = 92;
    public static readonly RULE_inlineDataValueClause = 93;
    public static readonly RULE_windoTVFClause = 94;
    public static readonly RULE_windowTVFExression = 95;
    public static readonly RULE_windoTVFName = 96;
    public static readonly RULE_windowTVFParam = 97;
    public static readonly RULE_timeIntervalParamName = 98;
    public static readonly RULE_columnDescriptor = 99;
    public static readonly RULE_joinCondition = 100;
    public static readonly RULE_whereClause = 101;
    public static readonly RULE_groupByClause = 102;
    public static readonly RULE_groupItemDefinition = 103;
    public static readonly RULE_groupingSets = 104;
    public static readonly RULE_groupingSetsNotaionName = 105;
    public static readonly RULE_groupWindowFunction = 106;
    public static readonly RULE_groupWindowFunctionName = 107;
    public static readonly RULE_timeAttrColumn = 108;
    public static readonly RULE_havingClause = 109;
    public static readonly RULE_windowClause = 110;
    public static readonly RULE_namedWindow = 111;
    public static readonly RULE_windowSpec = 112;
    public static readonly RULE_matchRecognizeClause = 113;
    public static readonly RULE_orderByCaluse = 114;
    public static readonly RULE_orderItemDefition = 115;
    public static readonly RULE_limitClause = 116;
    public static readonly RULE_partitionByClause = 117;
    public static readonly RULE_quantifiers = 118;
    public static readonly RULE_measuresClause = 119;
    public static readonly RULE_patternDefination = 120;
    public static readonly RULE_patternVariable = 121;
    public static readonly RULE_outputMode = 122;
    public static readonly RULE_afterMatchStrategy = 123;
    public static readonly RULE_patternVariablesDefination = 124;
    public static readonly RULE_windowFrame = 125;
    public static readonly RULE_frameBound = 126;
    public static readonly RULE_withinClause = 127;
    public static readonly RULE_expression = 128;
    public static readonly RULE_booleanExpression = 129;
    public static readonly RULE_predicate = 130;
    public static readonly RULE_likePredicate = 131;
    public static readonly RULE_valueExpression = 132;
    public static readonly RULE_primaryExpression = 133;
    public static readonly RULE_functionNameCreate = 134;
    public static readonly RULE_functionName = 135;
    public static readonly RULE_functionNameAndParams = 136;
    public static readonly RULE_functionNameWithParams = 137;
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
    public static readonly RULE_reservedKeywordsNoParamsUsedAsFuncName = 187;
    public static readonly RULE_reservedKeywordsFollowParamsUsedAsFuncName = 188;
    public static readonly RULE_reservedKeywordsUsedAsFuncName = 189;
    public static readonly RULE_nonReservedKeywords = 190;

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
        "'INTERSECTION'", "'INTERVAL'", "'INTO'", "'IS'", "'JOIN'", "'JSON_ARRAY'", 
        "'JSON_ARRAYAGG'", "'JSON_EXECUTION_PLAN'", "'JSON_EXISTS'", "'JSON_OBJECT'", 
        "'JSON_OBJECTAGG'", "'JSON_QUERY'", "'JSON_VALUE'", "'LAG'", "'LANGUAGE'", 
        "'LARGE'", "'LAST_VALUE'", "'LATERAL'", "'LEAD'", "'LEADING'", "'LEFT'", 
        "'LIKE'", "'LIKE_REGEX'", "'LIMIT'", "'LN'", "'LOCAL'", "'LOCALTIME'", 
        "'LOCALTIMESTAMP'", "'LOWER'", "'MATCH'", "'MATCHES'", "'MATCH_NUMBER'", 
        "'MATCH_RECOGNIZE'", "'MAX'", "'MEASURES'", "'MEMBER'", "'MERGE'", 
        "'METADATA'", "'METHOD'", "'MIN'", "'MINUS'", "'MINUTE'", "'MOD'", 
        "'MODIFIES'", "'MODIFY'", "'MODULE'", "'MODULES'", "'MONDAY'", "'MONTH'", 
        "'MORE'", "'MULTISET'", "'NATIONAL'", "'NATURAL'", "'NCHAR'", "'NCLOB'", 
        "'NEW'", "'NEXT'", "'NO'", "'NONE'", "'NORMALIZE'", "'NOT'", "'NTH_VALUE'", 
        "'NTILE'", "'NULL'", "'NULLIF'", "'NUMERIC'", "'OCCURRENCES_REGEX'", 
        "'OCTET_LENGTH'", "'OF'", "'OFFSET'", "'OLD'", "'OMIT'", "'ON'", 
        "'ONE'", "'ONLY'", "'OPEN'", "'OR'", "'ORDER'", "'ORDINAL'", "'OUT'", 
        "'OUTER'", "'OVER'", "'OVERLAPS'", "'OVERLAY'", "'OVERWRITE'", "'OVERWRITING'", 
        "'PARAMETER'", "'PARTITION'", "'PARTITIONED'", "'PARTITIONS'", "'PATTERN'", 
        "'PER'", "'PERCENT'", "'PERCENTILE_CONT'", "'PERCENTILE_DISC'", 
        "'PERCENT_RANK'", "'PERIOD'", "'PERMUTE'", "'PIVOT'", "'PORTION'", 
        "'POSITION'", "'POSITION_REGEX'", "'POWER'", "'PRECEDES'", "'PRECISION'", 
        "'PREPARE'", "'PREV'", "'PRIMARY'", "'PROCEDURE'", "'QUALIFY'", 
        "'QUARTERS'", "'RANGE'", "'RANK'", "'RAW'", "'READS'", "'REAL'", 
        "'RECURSIVE'", "'REF'", "'REFERENCES'", "'REFERENCING'", "'REGR_AVGX'", 
        "'REGR_AVGY'", "'REGR_COUNT'", "'REGR_INTERCEPT'", "'REGR_R2'", 
        "'REGR_SLOPE'", "'REGR_SXX'", "'REGR_SXY'", "'REGR_SYY'", "'RELEASE'", 
        "'RENAME'", "'RESET'", "'RESULT'", "'RETURN'", "'RETURNS'", "'REVOKE'", 
        "'RIGHT'", "'RLIKE'", "'ROLLBACK'", "'ROLLUP'", "'ROW'", "'ROWS'", 
        "'ROW_NUMBER'", "'RUNNING'", "'SAFE_CAST'", "'SAFE_OFFSET'", "'SAFE_ORDINAL'", 
        "'SATURDAY'", "'SAVEPOINT'", "'SCALA'", "'SCOPE'", "'SCROLL'", "'SEARCH'", 
        "'SECOND'", "'SEEK'", "'SELECT'", "'SENSITIVE'", "'SEPARATOR'", 
        "'SESSION_USER'", "'SET'", "'SHOW'", "'SIMILAR'", "'SKIP'", "'SMALLINT'", 
        "'SOME'", "'SPECIFIC'", "'SPECIFICTYPE'", "'SQL'", "'SQLEXCEPTION'", 
        "'SQLSTATE'", "'SQLWARNING'", "'SQRT'", "'START'", "'STATEMENT'", 
        "'STATIC'", "'STATISTICS'", "'STDDEV_POP'", "'STDDEV_SAMP'", "'STREAM'", 
        "'STRING'", "'STRING_AGG'", "'SUBMULTISET'", "'SUBSET'", "'SUBSTRING'", 
        "'SUBSTRING_REGEX'", "'SUCCEEDS'", "'SUM'", "'SUNDAY'", "'SYMMETRIC'", 
        "'SYSTEM'", "'SYSTEM_TIME'", "'SYSTEM_USER'", "'TABLE'", "'TABLES'", 
        "'TABLESAMPLE'", "'THEN'", "'THURSDAY'", "'TIME'", "'TIMESTAMP'", 
        "'TIMESTAMP_DIFF'", "'TIMESTAMP_LTZ'", "'TIMESTAMP_TRUNC'", "'TIMEZONE_HOUR'", 
        "'TIMEZONE_MINUTE'", "'TIME_DIFF'", "'TIME_TRUNC'", "'TINYINT'", 
        "'TO'", "'TRAILING'", "'TRANSLATE'", "'TRANSLATE_REGEX'", "'TRANSLATION'", 
        "'TREAT'", "'TRIGGER'", "'TRIM'", "'TRIM_ARRAY'", "'TRUE'", "'TRUNCATE'", 
        "'TRY_CAST'", "'TUESDAY'", "'UESCAPE'", "'UNION'", "'UNIQUE'", "'UNKNOWN'", 
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
        null, "SPACE", "COMMENT_INPUT", "LINE_COMMENT", "KW_ABS", "KW_ALL", 
        "KW_ALLOCATE", "KW_ALLOW", "KW_ALTER", "KW_ANALYZE", "KW_AND", "KW_ANY", 
        "KW_ARE", "KW_ARRAY", "KW_ARRAY_AGG", "KW_ARRAY_CONCAT_AGG", "KW_ARRAY_MAX_CARDINALITY", 
        "KW_AS", "KW_ASENSITIVE", "KW_ASYMMETRIC", "KW_AT", "KW_ATOMIC", 
        "KW_AUTHORIZATION", "KW_AVG", "KW_BEGIN", "KW_BEGIN_FRAME", "KW_BEGIN_PARTITION", 
        "KW_BETWEEN", "KW_BIGINT", "KW_BINARY", "KW_BIT", "KW_BLOB", "KW_BOOLEAN", 
        "KW_BOTH", "KW_BY", "KW_BYTES", "KW_CALL", "KW_CALLED", "KW_CARDINALITY", 
        "KW_CASCADED", "KW_CASE", "KW_CAST", "KW_CATALOGS", "KW_CEIL", "KW_CEILING", 
        "KW_CHANGELOG_MODE", "KW_CHAR", "KW_CHARACTER", "KW_CHARACTER_LENGTH", 
        "KW_CHAR_LENGTH", "KW_CHECK", "KW_CLASSIFIER", "KW_CLOB", "KW_CLOSE", 
        "KW_COALESCE", "KW_COLLATE", "KW_COLLECT", "KW_COLUMN", "KW_COLUMNS", 
        "KW_COMMENT", "KW_COMMIT", "KW_COMPUTE", "KW_CONDITION", "KW_CONNECT", 
        "KW_CONSTRAINT", "KW_CONTAINS", "KW_CONVERT", "KW_CORR", "KW_CORRESPONDING", 
        "KW_COUNT", "KW_COVAR_POP", "KW_COVAR_SAMP", "KW_CREATE", "KW_CROSS", 
        "KW_CUBE", "KW_CUME_DIST", "KW_CURRENT", "KW_CURRENT_CATALOG", "KW_CURRENT_DATE", 
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
        "KW_INTO", "KW_IS", "KW_JOIN", "KW_JSON_ARRAY", "KW_JSON_ARRAYAGG", 
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
        "COLON_SYMB", "ASTERISK_SIGN", "UNDERLINE_SIGN", "HYPNEN_SIGN", 
        "ADD_SIGN", "PENCENT_SIGN", "DOUBLE_VERTICAL_SIGN", "DOUBLE_HYPNEN_SIGN", 
        "SLASH_SIGN", "QUESTION_MARK_SIGN", "DOUBLE_RIGHT_ARROW", "STRING_LITERAL", 
        "DIG_LITERAL", "REAL_LITERAL", "BIT_STRING", "ID_LITERAL"
    ];
    public static readonly ruleNames = [
        "program", "singleStatement", "sqlStatement", "emptyStatement", 
        "ddlStatement", "dmlStatement", "describeStatement", "explainStatement", 
        "explainDetails", "explainDetail", "useStatement", "useModuleStatement", 
        "showStatememt", "loadStatement", "unloadStatememt", "setStatememt", 
        "resetStatememt", "jarStatememt", "dtAddStatement", "dtFilePath", 
        "createTable", "simpleCreateTable", "createTableAsSelect", "columnOptionDefinition", 
        "physicalColumnDefinition", "columnNameCreate", "columnName", "columnNameList", 
        "columnType", "lengthOneDimension", "lengthTwoOptionalDimension", 
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
        "insertMulStatement", "queryStatement", "valuesCaluse", "withClause", 
        "withItem", "withItemName", "selectStatement", "selectClause", "projectItemDefinition", 
        "overWindowItem", "fromClause", "tableExpression", "tableReference", 
        "tablePrimary", "systemTimePeriod", "dateTimeExpression", "inlineDataValueClause", 
        "windoTVFClause", "windowTVFExression", "windoTVFName", "windowTVFParam", 
        "timeIntervalParamName", "columnDescriptor", "joinCondition", "whereClause", 
        "groupByClause", "groupItemDefinition", "groupingSets", "groupingSetsNotaionName", 
        "groupWindowFunction", "groupWindowFunctionName", "timeAttrColumn", 
        "havingClause", "windowClause", "namedWindow", "windowSpec", "matchRecognizeClause", 
        "orderByCaluse", "orderItemDefition", "limitClause", "partitionByClause", 
        "quantifiers", "measuresClause", "patternDefination", "patternVariable", 
        "outputMode", "afterMatchStrategy", "patternVariablesDefination", 
        "windowFrame", "frameBound", "withinClause", "expression", "booleanExpression", 
        "predicate", "likePredicate", "valueExpression", "primaryExpression", 
        "functionNameCreate", "functionName", "functionNameAndParams", "functionNameWithParams", 
        "functionParam", "dereferenceDefinition", "correlationName", "qualifiedName", 
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
            this.state = 385;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 8 || _la === 24 || _la === 72 || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & 75497601) !== 0) || _la === 177 || ((((_la - 312)) & ~0x1F) === 0 && ((1 << (_la - 312)) & 822083585) !== 0) || ((((_la - 410)) & ~0x1F) === 0 && ((1 << (_la - 410)) & 142606353) !== 0) || _la === 450 || _la === 468 || ((((_la - 489)) & ~0x1F) === 0 && ((1 << (_la - 489)) & 134219777) !== 0) || _la === 521) {
                {
                {
                this.state = 382;
                this.singleStatement();
                }
                }
                this.state = 387;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 388;
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
            this.state = 395;
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
                this.state = 390;
                this.sqlStatement();
                this.state = 392;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
                case 1:
                    {
                    this.state = 391;
                    this.match(FlinkSqlParser.SEMICOLON);
                    }
                    break;
                }
                }
                break;
            case FlinkSqlParser.SEMICOLON:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 394;
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
            this.state = 409;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 397;
                this.ddlStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 398;
                this.dmlStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 399;
                this.describeStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 400;
                this.explainStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 401;
                this.useStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 402;
                this.showStatememt();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 403;
                this.loadStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 404;
                this.unloadStatememt();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 405;
                this.setStatememt();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 406;
                this.resetStatememt();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 407;
                this.jarStatememt();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 408;
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
            this.state = 411;
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
            this.state = 427;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 413;
                this.createTable();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 414;
                this.createDatabase();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 415;
                this.createView();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 416;
                this.createFunction();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 417;
                this.createCatalog();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 418;
                this.alterTable();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 419;
                this.alterView();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 420;
                this.alterDatabase();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 421;
                this.alterFunction();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 422;
                this.dropCatalog();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 423;
                this.dropTable();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 424;
                this.dropDatabase();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 425;
                this.dropView();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 426;
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
            this.state = 431;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_SELECT:
            case FlinkSqlParser.KW_VALUES:
            case FlinkSqlParser.KW_WITH:
            case FlinkSqlParser.LR_BRACKET:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 429;
                this.queryStatement(0);
                }
                break;
            case FlinkSqlParser.KW_BEGIN:
            case FlinkSqlParser.KW_EXECUTE:
            case FlinkSqlParser.KW_INSERT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 430;
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
            this.state = 433;
            _la = this.tokenStream.LA(1);
            if(!(_la === 109 || _la === 450)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 434;
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
            this.state = 436;
            this.match(FlinkSqlParser.KW_EXPLAIN);
            this.state = 440;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_CHANGELOG_MODE:
            case FlinkSqlParser.KW_ESTIMATED_COST:
            case FlinkSqlParser.KW_JSON_EXECUTION_PLAN:
                {
                this.state = 437;
                this.explainDetails();
                }
                break;
            case FlinkSqlParser.KW_PLAN:
                {
                this.state = 438;
                this.match(FlinkSqlParser.KW_PLAN);
                this.state = 439;
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
            this.state = 445;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                {
                this.state = 442;
                this.dmlStatement();
                }
                break;
            case 2:
                {
                this.state = 443;
                this.insertSimpleStatement();
                }
                break;
            case 3:
                {
                this.state = 444;
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
            this.state = 447;
            this.explainDetail();
            this.state = 452;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 520) {
                {
                {
                this.state = 448;
                this.match(FlinkSqlParser.COMMA);
                this.state = 449;
                this.explainDetail();
                }
                }
                this.state = 454;
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
            this.state = 455;
            _la = this.tokenStream.LA(1);
            if(!(_la === 45 || _la === 128 || _la === 188)) {
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
            this.state = 463;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 457;
                this.match(FlinkSqlParser.KW_USE);
                this.state = 458;
                this.match(FlinkSqlParser.KW_CATALOG);
                this.state = 459;
                this.catalogPath();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 460;
                this.match(FlinkSqlParser.KW_USE);
                this.state = 461;
                this.databasePath();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 462;
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
            this.state = 465;
            this.match(FlinkSqlParser.KW_USE);
            this.state = 466;
            this.match(FlinkSqlParser.KW_MODULES);
            this.state = 467;
            this.uid();
            this.state = 472;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 520) {
                {
                {
                this.state = 468;
                this.match(FlinkSqlParser.COMMA);
                this.state = 469;
                this.uid();
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
    public showStatememt(): ShowStatememtContext {
        let localContext = new ShowStatememtContext(this.context, this.state);
        this.enterRule(localContext, 24, FlinkSqlParser.RULE_showStatememt);
        let _la: number;
        try {
            this.state = 517;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 18, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 475;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 476;
                _la = this.tokenStream.LA(1);
                if(!(_la === 42 || _la === 90 || _la === 422 || _la === 464)) {
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
                this.state = 477;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 478;
                this.match(FlinkSqlParser.KW_CURRENT);
                this.state = 479;
                _la = this.tokenStream.LA(1);
                if(!(_la === 441 || _la === 447)) {
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
                this.state = 480;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 481;
                this.match(FlinkSqlParser.KW_TABLES);
                this.state = 484;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 151 || _la === 170) {
                    {
                    this.state = 482;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 151 || _la === 170)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 483;
                    this.databasePath();
                    }
                }

                this.state = 487;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 202 || _la === 241) {
                    {
                    this.state = 486;
                    this.likePredicate();
                    }
                }

                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 489;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 490;
                this.match(FlinkSqlParser.KW_COLUMNS);
                this.state = 491;
                _la = this.tokenStream.LA(1);
                if(!(_la === 151 || _la === 170)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 494;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context) ) {
                case 1:
                    {
                    this.state = 492;
                    this.viewPath();
                    }
                    break;
                case 2:
                    {
                    this.state = 493;
                    this.tablePath();
                    }
                    break;
                }
                this.state = 497;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 202 || _la === 241) {
                    {
                    this.state = 496;
                    this.likePredicate();
                    }
                }

                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 499;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 500;
                this.match(FlinkSqlParser.KW_CREATE);
                this.state = 505;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.KW_TABLE:
                    {
                    this.state = 501;
                    this.match(FlinkSqlParser.KW_TABLE);
                    this.state = 502;
                    this.tablePath();
                    }
                    break;
                case FlinkSqlParser.KW_VIEW:
                    {
                    this.state = 503;
                    this.match(FlinkSqlParser.KW_VIEW);
                    this.state = 504;
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
                this.state = 507;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 509;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 411) {
                    {
                    this.state = 508;
                    this.match(FlinkSqlParser.KW_USER);
                    }
                }

                this.state = 511;
                this.match(FlinkSqlParser.KW_FUNCTIONS);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 512;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 514;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 152) {
                    {
                    this.state = 513;
                    this.match(FlinkSqlParser.KW_FULL);
                    }
                }

                this.state = 516;
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
            this.state = 519;
            this.match(FlinkSqlParser.KW_LOAD);
            this.state = 520;
            this.match(FlinkSqlParser.KW_MODULE);
            this.state = 521;
            this.uid();
            this.state = 524;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context) ) {
            case 1:
                {
                this.state = 522;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 523;
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
    public unloadStatememt(): UnloadStatememtContext {
        let localContext = new UnloadStatememtContext(this.context, this.state);
        this.enterRule(localContext, 28, FlinkSqlParser.RULE_unloadStatememt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 526;
            this.match(FlinkSqlParser.KW_UNLOAD);
            this.state = 527;
            this.match(FlinkSqlParser.KW_MODULE);
            this.state = 528;
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
    public setStatememt(): SetStatememtContext {
        let localContext = new SetStatememtContext(this.context, this.state);
        this.enterRule(localContext, 30, FlinkSqlParser.RULE_setStatememt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 530;
            this.match(FlinkSqlParser.KW_SET);
            this.state = 532;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
            case 1:
                {
                this.state = 531;
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
    public resetStatememt(): ResetStatememtContext {
        let localContext = new ResetStatememtContext(this.context, this.state);
        this.enterRule(localContext, 32, FlinkSqlParser.RULE_resetStatememt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 534;
            this.match(FlinkSqlParser.KW_RESET);
            this.state = 536;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context) ) {
            case 1:
                {
                this.state = 535;
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
    public jarStatememt(): JarStatememtContext {
        let localContext = new JarStatememtContext(this.context, this.state);
        this.enterRule(localContext, 34, FlinkSqlParser.RULE_jarStatememt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 538;
            _la = this.tokenStream.LA(1);
            if(!(_la === 437 || _la === 489)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 539;
            this.match(FlinkSqlParser.KW_JAR);
            this.state = 540;
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
            this.state = 592;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 542;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 543;
                this.match(FlinkSqlParser.KW_JAR);
                this.state = 544;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 545;
                this.dtFilePath();
                this.state = 548;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                    this.state = 546;
                    this.match(FlinkSqlParser.KW_AS);
                    this.state = 547;
                    this.uid();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 550;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 551;
                this.match(FlinkSqlParser.KW_FILE);
                this.state = 552;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 553;
                this.dtFilePath();
                this.state = 556;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                    this.state = 554;
                    this.match(FlinkSqlParser.KW_AS);
                    this.state = 555;
                    this.uid();
                    }
                }

                this.state = 560;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 311) {
                    {
                    this.state = 558;
                    this.match(FlinkSqlParser.KW_RENAME);
                    this.state = 559;
                    this.uid();
                    }
                }

                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 562;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 563;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 482)) & ~0x1F) === 0 && ((1 << (_la - 482)) & 47) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 564;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 565;
                this.dtFilePath();
                this.state = 566;
                this.match(FlinkSqlParser.KW_RENAME);
                this.state = 567;
                this.uid();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 569;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 570;
                this.match(FlinkSqlParser.KW_PYTHON_PARAMETER);
                this.state = 571;
                this.dtFilePath();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 572;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 573;
                this.match(FlinkSqlParser.KW_ENGINE);
                this.state = 574;
                this.match(FlinkSqlParser.KW_FILE);
                this.state = 575;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 576;
                this.dtFilePath();
                this.state = 577;
                this.match(FlinkSqlParser.KW_RENAME);
                this.state = 578;
                this.uid();
                this.state = 579;
                this.match(FlinkSqlParser.KW_KEY);
                this.state = 580;
                this.uid();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 582;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 583;
                this.match(FlinkSqlParser.KW_CONFIG);
                this.state = 584;
                this.match(FlinkSqlParser.KW_FILE);
                this.state = 585;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 586;
                this.dtFilePath();
                this.state = 587;
                this.match(FlinkSqlParser.KW_FOR);
                this.state = 588;
                this.uid();
                this.state = 589;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 590;
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
            this.state = 598;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 595;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 534) {
                        {
                        this.state = 594;
                        this.match(FlinkSqlParser.SLASH_SIGN);
                        }
                    }

                    this.state = 597;
                    this.uid();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 600;
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
            this.state = 604;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
            case 1:
                {
                this.state = 602;
                this.simpleCreateTable();
                }
                break;
            case 2:
                {
                this.state = 603;
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
            this.state = 606;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 608;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 497) {
                {
                this.state = 607;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
            }

            this.state = 610;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 612;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 611;
                this.ifNotExists();
                }
            }

            this.state = 614;
            this.tablePathCreate();
            this.state = 615;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 616;
            this.columnOptionDefinition();
            this.state = 621;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 31, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 617;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 618;
                    this.columnOptionDefinition();
                    }
                    }
                }
                this.state = 623;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 31, this.context);
            }
            this.state = 626;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context) ) {
            case 1:
                {
                this.state = 624;
                this.match(FlinkSqlParser.COMMA);
                this.state = 625;
                this.watermarkDefinition();
                }
                break;
            }
            this.state = 630;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context) ) {
            case 1:
                {
                this.state = 628;
                this.match(FlinkSqlParser.COMMA);
                this.state = 629;
                this.tableConstraint();
                }
                break;
            }
            this.state = 634;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 520) {
                {
                this.state = 632;
                this.match(FlinkSqlParser.COMMA);
                this.state = 633;
                this.selfDefinitionClause();
                }
            }

            this.state = 636;
            this.match(FlinkSqlParser.RR_BRACKET);
            this.state = 639;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 637;
                this.match(FlinkSqlParser.KW_COMMENT);
                this.state = 638;
                localContext._comment = this.match(FlinkSqlParser.STRING_LITERAL);
                }
            }

            this.state = 642;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 269) {
                {
                this.state = 641;
                this.partitionDefinition();
                }
            }

            this.state = 644;
            this.withOption();
            this.state = 646;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 202) {
                {
                this.state = 645;
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
            this.state = 648;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 649;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 651;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 650;
                this.ifNotExists();
                }
            }

            this.state = 653;
            this.tablePathCreate();
            this.state = 654;
            this.withOption();
            this.state = 657;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 655;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 656;
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
            this.state = 662;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 659;
                this.physicalColumnDefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 660;
                this.metadataColumnDefinition();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 661;
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
            this.state = 664;
            this.columnNameCreate();
            this.state = 665;
            this.columnType();
            this.state = 667;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 64 || _la === 241 || _la === 244 || _la === 288) {
                {
                this.state = 666;
                this.columnConstraint();
                }
            }

            this.state = 671;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 669;
                this.match(FlinkSqlParser.KW_COMMENT);
                this.state = 670;
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
            this.state = 675;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 673;
                this.uid();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 674;
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
            this.state = 679;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
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
    public columnNameList(): ColumnNameListContext {
        let localContext = new ColumnNameListContext(this.context, this.state);
        this.enterRule(localContext, 54, FlinkSqlParser.RULE_columnNameList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 681;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 682;
            this.columnName();
            this.state = 687;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 520) {
                {
                {
                this.state = 683;
                this.match(FlinkSqlParser.COMMA);
                this.state = 684;
                this.columnName();
                }
                }
                this.state = 689;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 690;
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
        this.enterRule(localContext, 56, FlinkSqlParser.RULE_columnType);
        let _la: number;
        try {
            this.state = 729;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_BOOLEAN:
            case FlinkSqlParser.KW_DATE:
            case FlinkSqlParser.KW_NULL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 692;
                localContext._colType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 32 || _la === 91 || _la === 244)) {
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
                this.state = 693;
                localContext._colType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & 262275) !== 0) || _la === 92 || _la === 178 || _la === 179 || _la === 344 || _la === 360 || ((((_la - 378)) & ~0x1F) === 0 && ((1 << (_la - 378)) & 521) !== 0) || _la === 416 || _la === 417)) {
                    localContext._colType = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 695;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 516) {
                    {
                    this.state = 694;
                    this.lengthOneDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_TIMESTAMP:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 697;
                localContext._colType = this.match(FlinkSqlParser.KW_TIMESTAMP);
                this.state = 699;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 516) {
                    {
                    this.state = 698;
                    this.lengthOneDimension();
                    }
                }

                this.state = 707;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 433 || _la === 435) {
                    {
                    this.state = 701;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 433 || _la === 435)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 703;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 206) {
                        {
                        this.state = 702;
                        this.match(FlinkSqlParser.KW_LOCAL);
                        }
                    }

                    this.state = 705;
                    this.match(FlinkSqlParser.KW_TIME);
                    this.state = 706;
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
                this.state = 709;
                localContext._colType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 16387) !== 0) || _la === 144 || _la === 246)) {
                    localContext._colType = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 711;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 516) {
                    {
                    this.state = 710;
                    this.lengthTwoOptionalDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_ARRAY:
            case FlinkSqlParser.KW_MULTISET:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 713;
                localContext._colType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 13 || _la === 231)) {
                    localContext._colType = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 715;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 507) {
                    {
                    this.state = 714;
                    this.lengthOneTypeDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_MAP:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 717;
                localContext._colType = this.match(FlinkSqlParser.KW_MAP);
                this.state = 719;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 507) {
                    {
                    this.state = 718;
                    this.mapTypeDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_ROW:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 721;
                localContext._colType = this.match(FlinkSqlParser.KW_ROW);
                this.state = 723;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 507 || _la === 516) {
                    {
                    this.state = 722;
                    this.rowTypeDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_RAW:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 725;
                localContext._colType = this.match(FlinkSqlParser.KW_RAW);
                this.state = 727;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 516) {
                    {
                    this.state = 726;
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
        this.enterRule(localContext, 58, FlinkSqlParser.RULE_lengthOneDimension);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 731;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 732;
            this.decimalLiteral();
            this.state = 733;
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
        this.enterRule(localContext, 60, FlinkSqlParser.RULE_lengthTwoOptionalDimension);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 735;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 736;
            this.decimalLiteral();
            this.state = 739;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 520) {
                {
                this.state = 737;
                this.match(FlinkSqlParser.COMMA);
                this.state = 738;
                this.decimalLiteral();
                }
            }

            this.state = 741;
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
        this.enterRule(localContext, 62, FlinkSqlParser.RULE_lengthTwoStringDimension);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 743;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 744;
            this.stringLiteral();
            this.state = 747;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 520) {
                {
                this.state = 745;
                this.match(FlinkSqlParser.COMMA);
                this.state = 746;
                this.stringLiteral();
                }
            }

            this.state = 749;
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
        this.enterRule(localContext, 64, FlinkSqlParser.RULE_lengthOneTypeDimension);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 751;
            this.match(FlinkSqlParser.LESS_SYMBOL);
            this.state = 752;
            this.columnType();
            this.state = 753;
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
        this.enterRule(localContext, 66, FlinkSqlParser.RULE_mapTypeDimension);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 755;
            this.match(FlinkSqlParser.LESS_SYMBOL);
            this.state = 756;
            this.columnType();
            {
            this.state = 757;
            this.match(FlinkSqlParser.COMMA);
            this.state = 758;
            this.columnType();
            }
            this.state = 760;
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
        this.enterRule(localContext, 68, FlinkSqlParser.RULE_rowTypeDimension);
        let _la: number;
        try {
            this.state = 790;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.LESS_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 762;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 763;
                this.columnName();
                this.state = 764;
                this.columnType();
                this.state = 771;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                    {
                    this.state = 765;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 766;
                    this.columnName();
                    this.state = 767;
                    this.columnType();
                    }
                    }
                    this.state = 773;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 774;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                }
                break;
            case FlinkSqlParser.LR_BRACKET:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 776;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 777;
                this.columnName();
                this.state = 778;
                this.columnType();
                this.state = 785;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                    {
                    this.state = 779;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 780;
                    this.columnName();
                    this.state = 781;
                    this.columnType();
                    }
                    }
                    this.state = 787;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 788;
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
        this.enterRule(localContext, 70, FlinkSqlParser.RULE_columnConstraint);
        let _la: number;
        try {
            this.state = 806;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_CONSTRAINT:
            case FlinkSqlParser.KW_PRIMARY:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 794;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 64) {
                    {
                    this.state = 792;
                    this.match(FlinkSqlParser.KW_CONSTRAINT);
                    this.state = 793;
                    this.constraintName();
                    }
                }

                this.state = 796;
                this.match(FlinkSqlParser.KW_PRIMARY);
                this.state = 797;
                this.match(FlinkSqlParser.KW_KEY);
                this.state = 800;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 241) {
                    {
                    this.state = 798;
                    this.match(FlinkSqlParser.KW_NOT);
                    this.state = 799;
                    this.match(FlinkSqlParser.KW_ENFORCED);
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_NOT:
            case FlinkSqlParser.KW_NULL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 803;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 241) {
                    {
                    this.state = 802;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 805;
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
        this.enterRule(localContext, 72, FlinkSqlParser.RULE_metadataColumnDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 808;
            this.columnNameCreate();
            this.state = 809;
            this.columnType();
            this.state = 810;
            this.match(FlinkSqlParser.KW_METADATA);
            this.state = 813;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 151) {
                {
                this.state = 811;
                this.match(FlinkSqlParser.KW_FROM);
                this.state = 812;
                this.metadataKey();
                }
            }

            this.state = 816;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 423) {
                {
                this.state = 815;
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
        this.enterRule(localContext, 74, FlinkSqlParser.RULE_metadataKey);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 818;
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
        this.enterRule(localContext, 76, FlinkSqlParser.RULE_computedColumnDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 820;
            this.columnNameCreate();
            this.state = 821;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 822;
            this.computedColumnExpression();
            this.state = 825;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 823;
                this.match(FlinkSqlParser.KW_COMMENT);
                this.state = 824;
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
        this.enterRule(localContext, 78, FlinkSqlParser.RULE_computedColumnExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 827;
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
        this.enterRule(localContext, 80, FlinkSqlParser.RULE_watermarkDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 829;
            this.match(FlinkSqlParser.KW_WATERMARK);
            this.state = 830;
            this.match(FlinkSqlParser.KW_FOR);
            this.state = 831;
            this.columnName();
            this.state = 832;
            this.match(FlinkSqlParser.KW_AS);
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
    public tableConstraint(): TableConstraintContext {
        let localContext = new TableConstraintContext(this.context, this.state);
        this.enterRule(localContext, 82, FlinkSqlParser.RULE_tableConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 837;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 64) {
                {
                this.state = 835;
                this.match(FlinkSqlParser.KW_CONSTRAINT);
                this.state = 836;
                this.constraintName();
                }
            }

            this.state = 839;
            this.match(FlinkSqlParser.KW_PRIMARY);
            this.state = 840;
            this.match(FlinkSqlParser.KW_KEY);
            this.state = 841;
            this.columnNameList();
            this.state = 842;
            this.match(FlinkSqlParser.KW_NOT);
            this.state = 843;
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
        this.enterRule(localContext, 84, FlinkSqlParser.RULE_constraintName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 845;
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
        this.enterRule(localContext, 86, FlinkSqlParser.RULE_selfDefinitionClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 847;
            this.match(FlinkSqlParser.KW_PERIOD);
            this.state = 848;
            this.match(FlinkSqlParser.KW_FOR);
            this.state = 849;
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
        this.enterRule(localContext, 88, FlinkSqlParser.RULE_partitionDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 851;
            this.match(FlinkSqlParser.KW_PARTITIONED);
            this.state = 852;
            this.match(FlinkSqlParser.KW_BY);
            this.state = 853;
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
        this.enterRule(localContext, 90, FlinkSqlParser.RULE_transformList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 855;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 856;
            this.transform();
            this.state = 861;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 520) {
                {
                {
                this.state = 857;
                this.match(FlinkSqlParser.COMMA);
                this.state = 858;
                this.transform();
                }
                }
                this.state = 863;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 864;
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
        this.enterRule(localContext, 92, FlinkSqlParser.RULE_transform);
        let _la: number;
        try {
            this.state = 878;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
            case 1:
                localContext = new IdentityTransformContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 866;
                this.columnName();
                }
                break;
            case 2:
                localContext = new ApplyTransformContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 867;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 868;
                this.transformArgument();
                this.state = 873;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                    {
                    this.state = 869;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 870;
                    this.transformArgument();
                    }
                    }
                    this.state = 875;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 876;
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
        this.enterRule(localContext, 94, FlinkSqlParser.RULE_transformArgument);
        try {
            this.state = 882;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 72, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 880;
                this.qualifiedName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 881;
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
        this.enterRule(localContext, 96, FlinkSqlParser.RULE_likeDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 884;
            this.match(FlinkSqlParser.KW_LIKE);
            this.state = 885;
            this.tablePath();
            this.state = 894;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context) ) {
            case 1:
                {
                this.state = 886;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 890;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 266 || _la === 455 || _la === 462) {
                    {
                    {
                    this.state = 887;
                    this.likeOption();
                    }
                    }
                    this.state = 892;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 893;
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
        this.enterRule(localContext, 98, FlinkSqlParser.RULE_likeOption);
        let _la: number;
        try {
            this.state = 900;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 75, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 896;
                _la = this.tokenStream.LA(1);
                if(!(_la === 455 || _la === 462)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 897;
                _la = this.tokenStream.LA(1);
                if(!(_la === 5 || _la === 270 || _la === 444)) {
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
                this.state = 898;
                _la = this.tokenStream.LA(1);
                if(!(_la === 266 || _la === 455 || _la === 462)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 899;
                _la = this.tokenStream.LA(1);
                if(!(_la === 425 || _la === 458 || _la === 477)) {
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
        this.enterRule(localContext, 100, FlinkSqlParser.RULE_createCatalog);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 902;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 903;
            this.match(FlinkSqlParser.KW_CATALOG);
            this.state = 904;
            this.catalogPathCreate();
            this.state = 905;
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
        this.enterRule(localContext, 102, FlinkSqlParser.RULE_createDatabase);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 907;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 908;
            this.match(FlinkSqlParser.KW_DATABASE);
            this.state = 910;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 909;
                this.ifNotExists();
                }
            }

            this.state = 912;
            this.databasePathCreate();
            this.state = 915;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 913;
                this.match(FlinkSqlParser.KW_COMMENT);
                this.state = 914;
                localContext._comment = this.match(FlinkSqlParser.STRING_LITERAL);
                }
            }

            this.state = 917;
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
        this.enterRule(localContext, 104, FlinkSqlParser.RULE_createView);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 919;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 921;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 497) {
                {
                this.state = 920;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
            }

            this.state = 923;
            this.match(FlinkSqlParser.KW_VIEW);
            this.state = 925;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 924;
                this.ifNotExists();
                }
            }

            this.state = 927;
            this.viewPathCreate();
            this.state = 929;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 516) {
                {
                this.state = 928;
                this.columnNameList();
                }
            }

            this.state = 933;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 931;
                this.match(FlinkSqlParser.KW_COMMENT);
                this.state = 932;
                localContext._comment = this.match(FlinkSqlParser.STRING_LITERAL);
                }
            }

            this.state = 935;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 936;
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
        this.enterRule(localContext, 106, FlinkSqlParser.RULE_createFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 938;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 942;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context) ) {
            case 1:
                {
                this.state = 939;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
                break;
            case 2:
                {
                this.state = 940;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                this.state = 941;
                this.match(FlinkSqlParser.KW_SYSTEM);
                }
                break;
            }
            this.state = 944;
            this.match(FlinkSqlParser.KW_FUNCTION);
            this.state = 946;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 945;
                this.ifNotExists();
                }
            }

            this.state = 948;
            this.functionNameCreate();
            this.state = 949;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 950;
            this.identifier();
            this.state = 953;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 195) {
                {
                this.state = 951;
                this.match(FlinkSqlParser.KW_LANGUAGE);
                this.state = 952;
                _la = this.tokenStream.LA(1);
                if(!(_la === 330 || _la === 465 || _la === 481)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 956;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 412) {
                {
                this.state = 955;
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
        this.enterRule(localContext, 108, FlinkSqlParser.RULE_usingClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 958;
            this.match(FlinkSqlParser.KW_USING);
            this.state = 959;
            this.match(FlinkSqlParser.KW_JAR);
            this.state = 960;
            this.jarFileName();
            this.state = 966;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 520) {
                {
                {
                this.state = 961;
                this.match(FlinkSqlParser.COMMA);
                this.state = 962;
                this.match(FlinkSqlParser.KW_JAR);
                this.state = 963;
                this.jarFileName();
                }
                }
                this.state = 968;
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
        this.enterRule(localContext, 110, FlinkSqlParser.RULE_jarFileName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 969;
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
        this.enterRule(localContext, 112, FlinkSqlParser.RULE_alterTable);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 971;
            this.match(FlinkSqlParser.KW_ALTER);
            this.state = 972;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 974;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 973;
                this.ifExists();
                }
            }

            this.state = 976;
            this.tablePath();
            this.state = 982;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 88, this.context) ) {
            case 1:
                {
                this.state = 977;
                this.renameDefinition();
                }
                break;
            case 2:
                {
                this.state = 978;
                this.setKeyValueDefinition();
                }
                break;
            case 3:
                {
                this.state = 979;
                this.addConstraint();
                }
                break;
            case 4:
                {
                this.state = 980;
                this.dropConstraint();
                }
                break;
            case 5:
                {
                this.state = 981;
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
        this.enterRule(localContext, 114, FlinkSqlParser.RULE_renameDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 984;
            this.match(FlinkSqlParser.KW_RENAME);
            this.state = 986;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 437)) & ~0x1F) === 0 && ((1 << (_la - 437)) & 4294967295) !== 0) || ((((_la - 469)) & ~0x1F) === 0 && ((1 << (_la - 469)) & 4294967295) !== 0) || ((((_la - 501)) & ~0x1F) === 0 && ((1 << (_la - 501)) & 15) !== 0) || ((((_la - 537)) & ~0x1F) === 0 && ((1 << (_la - 537)) & 19) !== 0)) {
                {
                this.state = 985;
                this.uid();
                }
            }

            this.state = 988;
            this.match(FlinkSqlParser.KW_TO);
            this.state = 989;
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
        this.enterRule(localContext, 116, FlinkSqlParser.RULE_setKeyValueDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 991;
            this.match(FlinkSqlParser.KW_SET);
            this.state = 992;
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
        this.enterRule(localContext, 118, FlinkSqlParser.RULE_addConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 994;
            this.match(FlinkSqlParser.KW_ADD);
            this.state = 995;
            this.match(FlinkSqlParser.KW_CONSTRAINT);
            this.state = 996;
            this.constraintName();
            this.state = 997;
            this.match(FlinkSqlParser.KW_PRIMARY);
            this.state = 998;
            this.match(FlinkSqlParser.KW_KEY);
            this.state = 999;
            this.columnNameList();
            this.state = 1001;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 241) {
                {
                this.state = 1000;
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
        this.enterRule(localContext, 120, FlinkSqlParser.RULE_dropConstraint);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1003;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1004;
            this.match(FlinkSqlParser.KW_CONSTRAINT);
            this.state = 1005;
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
        this.enterRule(localContext, 122, FlinkSqlParser.RULE_addUnique);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1007;
            this.match(FlinkSqlParser.KW_ADD);
            this.state = 1008;
            this.match(FlinkSqlParser.KW_UNIQUE);
            this.state = 1009;
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
        this.enterRule(localContext, 124, FlinkSqlParser.RULE_notForced);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1011;
            this.match(FlinkSqlParser.KW_NOT);
            this.state = 1012;
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
        this.enterRule(localContext, 126, FlinkSqlParser.RULE_alterView);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1014;
            this.match(FlinkSqlParser.KW_ALTER);
            this.state = 1015;
            this.match(FlinkSqlParser.KW_VIEW);
            this.state = 1016;
            this.viewPath();
            this.state = 1020;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_RENAME:
                {
                this.state = 1017;
                this.renameDefinition();
                }
                break;
            case FlinkSqlParser.KW_AS:
                {
                this.state = 1018;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 1019;
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
        this.enterRule(localContext, 128, FlinkSqlParser.RULE_alterDatabase);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1022;
            this.match(FlinkSqlParser.KW_ALTER);
            this.state = 1023;
            this.match(FlinkSqlParser.KW_DATABASE);
            this.state = 1024;
            this.databasePath();
            this.state = 1025;
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
        this.enterRule(localContext, 130, FlinkSqlParser.RULE_alterFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1027;
            this.match(FlinkSqlParser.KW_ALTER);
            this.state = 1031;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 92, this.context) ) {
            case 1:
                {
                this.state = 1028;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
                break;
            case 2:
                {
                this.state = 1029;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                this.state = 1030;
                this.match(FlinkSqlParser.KW_SYSTEM);
                }
                break;
            }
            this.state = 1033;
            this.match(FlinkSqlParser.KW_FUNCTION);
            this.state = 1035;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 93, this.context) ) {
            case 1:
                {
                this.state = 1034;
                this.ifExists();
                }
                break;
            }
            this.state = 1037;
            this.functionName();
            this.state = 1038;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 1039;
            this.identifier();
            this.state = 1042;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 195) {
                {
                this.state = 1040;
                this.match(FlinkSqlParser.KW_LANGUAGE);
                this.state = 1041;
                _la = this.tokenStream.LA(1);
                if(!(_la === 330 || _la === 465 || _la === 481)) {
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
        this.enterRule(localContext, 132, FlinkSqlParser.RULE_dropCatalog);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1044;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1045;
            this.match(FlinkSqlParser.KW_CATALOG);
            this.state = 1047;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 1046;
                this.ifExists();
                }
            }

            this.state = 1049;
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
        this.enterRule(localContext, 134, FlinkSqlParser.RULE_dropTable);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1051;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1053;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 497) {
                {
                this.state = 1052;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
            }

            this.state = 1055;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 1057;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 1056;
                this.ifExists();
                }
            }

            this.state = 1059;
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
        this.enterRule(localContext, 136, FlinkSqlParser.RULE_dropDatabase);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1061;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1062;
            this.match(FlinkSqlParser.KW_DATABASE);
            this.state = 1064;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 1063;
                this.ifExists();
                }
            }

            this.state = 1066;
            this.databasePath();
            this.state = 1068;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 440 || _la === 490) {
                {
                this.state = 1067;
                localContext._dropType = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 440 || _la === 490)) {
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
        this.enterRule(localContext, 138, FlinkSqlParser.RULE_dropView);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1070;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1072;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 497) {
                {
                this.state = 1071;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
            }

            this.state = 1074;
            this.match(FlinkSqlParser.KW_VIEW);
            this.state = 1076;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 167) {
                {
                this.state = 1075;
                this.ifExists();
                }
            }

            this.state = 1078;
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
        this.enterRule(localContext, 140, FlinkSqlParser.RULE_dropFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1080;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1084;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 102, this.context) ) {
            case 1:
                {
                this.state = 1081;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
                break;
            case 2:
                {
                this.state = 1082;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                this.state = 1083;
                this.match(FlinkSqlParser.KW_SYSTEM);
                }
                break;
            }
            this.state = 1086;
            this.match(FlinkSqlParser.KW_FUNCTION);
            this.state = 1088;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 103, this.context) ) {
            case 1:
                {
                this.state = 1087;
                this.ifExists();
                }
                break;
            }
            this.state = 1090;
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
        this.enterRule(localContext, 142, FlinkSqlParser.RULE_insertStatement);
        let _la: number;
        try {
            this.state = 1099;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 105, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 1093;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 132) {
                    {
                    this.state = 1092;
                    this.match(FlinkSqlParser.KW_EXECUTE);
                    }
                }

                this.state = 1095;
                this.insertSimpleStatement();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1096;
                this.insertMulStatementCompatibility();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 1097;
                this.match(FlinkSqlParser.KW_EXECUTE);
                this.state = 1098;
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
        this.enterRule(localContext, 144, FlinkSqlParser.RULE_insertSimpleStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1101;
            this.match(FlinkSqlParser.KW_INSERT);
            this.state = 1102;
            _la = this.tokenStream.LA(1);
            if(!(_la === 183 || _la === 265)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1103;
            this.tablePath();
            this.state = 1112;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 108, this.context) ) {
            case 1:
                {
                this.state = 1105;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 268) {
                    {
                    this.state = 1104;
                    this.insertPartitionDefinition();
                    }
                }

                this.state = 1108;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 107, this.context) ) {
                case 1:
                    {
                    this.state = 1107;
                    this.columnNameList();
                    }
                    break;
                }
                this.state = 1110;
                this.queryStatement(0);
                }
                break;
            case 2:
                {
                this.state = 1111;
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
        this.enterRule(localContext, 146, FlinkSqlParser.RULE_insertPartitionDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1114;
            this.match(FlinkSqlParser.KW_PARTITION);
            this.state = 1115;
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
        this.enterRule(localContext, 148, FlinkSqlParser.RULE_valuesDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1117;
            this.match(FlinkSqlParser.KW_VALUES);
            this.state = 1118;
            this.valuesRowDefinition();
            this.state = 1123;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 520) {
                {
                {
                this.state = 1119;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1120;
                this.valuesRowDefinition();
                }
                }
                this.state = 1125;
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
        this.enterRule(localContext, 150, FlinkSqlParser.RULE_valuesRowDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1126;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1127;
            this.constant();
            this.state = 1132;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 520) {
                {
                {
                this.state = 1128;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1129;
                this.constant();
                }
                }
                this.state = 1134;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1135;
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
        this.enterRule(localContext, 152, FlinkSqlParser.RULE_insertMulStatementCompatibility);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1137;
            this.match(FlinkSqlParser.KW_BEGIN);
            this.state = 1138;
            this.match(FlinkSqlParser.KW_STATEMENT);
            this.state = 1139;
            this.match(FlinkSqlParser.KW_SET);
            this.state = 1140;
            this.match(FlinkSqlParser.SEMICOLON);
            this.state = 1144;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1141;
                this.insertSimpleStatement();
                this.state = 1142;
                this.match(FlinkSqlParser.SEMICOLON);
                }
                }
                this.state = 1146;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 177);
            this.state = 1148;
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
        this.enterRule(localContext, 154, FlinkSqlParser.RULE_insertMulStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1150;
            this.match(FlinkSqlParser.KW_STATEMENT);
            this.state = 1151;
            this.match(FlinkSqlParser.KW_SET);
            this.state = 1152;
            this.match(FlinkSqlParser.KW_BEGIN);
            this.state = 1156;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1153;
                this.insertSimpleStatement();
                this.state = 1154;
                this.match(FlinkSqlParser.SEMICOLON);
                }
                }
                this.state = 1158;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 177);
            this.state = 1160;
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
        let _startState = 156;
        this.enterRecursionRule(localContext, 156, FlinkSqlParser.RULE_queryStatement, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1185;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 117, this.context) ) {
            case 1:
                {
                this.state = 1163;
                this.valuesCaluse();
                }
                break;
            case 2:
                {
                this.state = 1164;
                this.withClause();
                this.state = 1165;
                this.queryStatement(5);
                }
                break;
            case 3:
                {
                this.state = 1167;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1168;
                this.queryStatement(0);
                this.state = 1169;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                {
                this.state = 1171;
                this.selectClause();
                this.state = 1173;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 113, this.context) ) {
                case 1:
                    {
                    this.state = 1172;
                    this.orderByCaluse();
                    }
                    break;
                }
                this.state = 1176;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 114, this.context) ) {
                case 1:
                    {
                    this.state = 1175;
                    this.limitClause();
                    }
                    break;
                }
                }
                break;
            case 5:
                {
                this.state = 1178;
                this.selectStatement();
                this.state = 1180;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 115, this.context) ) {
                case 1:
                    {
                    this.state = 1179;
                    this.orderByCaluse();
                    }
                    break;
                }
                this.state = 1183;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 116, this.context) ) {
                case 1:
                    {
                    this.state = 1182;
                    this.limitClause();
                    }
                    break;
                }
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1201;
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
                    this.state = 1187;
                    if (!(this.precpred(this.context, 3))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                    }
                    this.state = 1188;
                    localContext._operator = this.tokenStream.LT(1);
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 130 || _la === 180 || _la === 402)) {
                        localContext._operator = this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1190;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 5) {
                        {
                        this.state = 1189;
                        this.match(FlinkSqlParser.KW_ALL);
                        }
                    }

                    this.state = 1192;
                    localContext._right = this.queryStatement(0);
                    this.state = 1194;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 119, this.context) ) {
                    case 1:
                        {
                        this.state = 1193;
                        this.orderByCaluse();
                        }
                        break;
                    }
                    this.state = 1197;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 120, this.context) ) {
                    case 1:
                        {
                        this.state = 1196;
                        this.limitClause();
                        }
                        break;
                    }
                    }
                    }
                }
                this.state = 1203;
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
    public valuesCaluse(): ValuesCaluseContext {
        let localContext = new ValuesCaluseContext(this.context, this.state);
        this.enterRule(localContext, 158, FlinkSqlParser.RULE_valuesCaluse);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1204;
            this.match(FlinkSqlParser.KW_VALUES);
            this.state = 1205;
            this.expression();
            this.state = 1210;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 122, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1206;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1207;
                    this.expression();
                    }
                    }
                }
                this.state = 1212;
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
        this.enterRule(localContext, 160, FlinkSqlParser.RULE_withClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1213;
            this.match(FlinkSqlParser.KW_WITH);
            this.state = 1214;
            this.withItem();
            this.state = 1219;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 520) {
                {
                {
                this.state = 1215;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1216;
                this.withItem();
                }
                }
                this.state = 1221;
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
        this.enterRule(localContext, 162, FlinkSqlParser.RULE_withItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1222;
            this.withItemName();
            this.state = 1234;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 516) {
                {
                this.state = 1223;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1224;
                this.columnName();
                this.state = 1229;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                    {
                    this.state = 1225;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1226;
                    this.columnName();
                    }
                    }
                    this.state = 1231;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1232;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
            }

            this.state = 1236;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 1237;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1238;
            this.queryStatement(0);
            this.state = 1239;
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
        this.enterRule(localContext, 164, FlinkSqlParser.RULE_withItemName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1241;
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
        this.enterRule(localContext, 166, FlinkSqlParser.RULE_selectStatement);
        try {
            this.state = 1263;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 131, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1243;
                this.selectClause();
                this.state = 1245;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 126, this.context) ) {
                case 1:
                    {
                    this.state = 1244;
                    this.fromClause();
                    }
                    break;
                }
                this.state = 1248;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 127, this.context) ) {
                case 1:
                    {
                    this.state = 1247;
                    this.whereClause();
                    }
                    break;
                }
                this.state = 1251;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 128, this.context) ) {
                case 1:
                    {
                    this.state = 1250;
                    this.groupByClause();
                    }
                    break;
                }
                this.state = 1254;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 129, this.context) ) {
                case 1:
                    {
                    this.state = 1253;
                    this.havingClause();
                    }
                    break;
                }
                this.state = 1257;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 130, this.context) ) {
                case 1:
                    {
                    this.state = 1256;
                    this.windowClause();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1259;
                this.selectClause();
                this.state = 1260;
                this.fromClause();
                this.state = 1261;
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
        this.enterRule(localContext, 168, FlinkSqlParser.RULE_selectClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1265;
            this.match(FlinkSqlParser.KW_SELECT);
            this.state = 1267;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 132, this.context) ) {
            case 1:
                {
                this.state = 1266;
                this.setQuantifier();
                }
                break;
            }
            this.state = 1278;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 134, this.context) ) {
            case 1:
                {
                this.state = 1269;
                this.match(FlinkSqlParser.ASTERISK_SIGN);
                }
                break;
            case 2:
                {
                this.state = 1270;
                this.projectItemDefinition();
                this.state = 1275;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 133, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1271;
                        this.match(FlinkSqlParser.COMMA);
                        this.state = 1272;
                        this.projectItemDefinition();
                        }
                        }
                    }
                    this.state = 1277;
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
        this.enterRule(localContext, 170, FlinkSqlParser.RULE_projectItemDefinition);
        let _la: number;
        try {
            this.state = 1295;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 139, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1280;
                this.overWindowItem();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1281;
                this.expression();
                this.state = 1286;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 136, this.context) ) {
                case 1:
                    {
                    this.state = 1283;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 135, this.context) ) {
                    case 1:
                        {
                        this.state = 1282;
                        this.match(FlinkSqlParser.KW_AS);
                        }
                        break;
                    }
                    this.state = 1285;
                    this.columnName();
                    }
                    break;
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1288;
                this.columnName();
                this.state = 1293;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 138, this.context) ) {
                case 1:
                    {
                    this.state = 1290;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 17) {
                        {
                        this.state = 1289;
                        this.match(FlinkSqlParser.KW_AS);
                        }
                    }

                    this.state = 1292;
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
        this.enterRule(localContext, 172, FlinkSqlParser.RULE_overWindowItem);
        try {
            this.state = 1309;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 140, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1297;
                this.primaryExpression(0);
                this.state = 1298;
                this.match(FlinkSqlParser.KW_OVER);
                this.state = 1299;
                this.windowSpec();
                this.state = 1300;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 1301;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1303;
                this.primaryExpression(0);
                this.state = 1304;
                this.match(FlinkSqlParser.KW_OVER);
                this.state = 1305;
                this.errorCapturingIdentifier();
                this.state = 1306;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 1307;
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
        this.enterRule(localContext, 174, FlinkSqlParser.RULE_fromClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1311;
            this.match(FlinkSqlParser.KW_FROM);
            this.state = 1312;
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
        let _startState = 176;
        this.enterRecursionRule(localContext, 176, FlinkSqlParser.RULE_tableExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1325;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 142, this.context) ) {
            case 1:
                {
                this.state = 1315;
                this.tableReference();
                this.state = 1320;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 141, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1316;
                        this.match(FlinkSqlParser.COMMA);
                        this.state = 1317;
                        this.tableReference();
                        }
                        }
                    }
                    this.state = 1322;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 141, this.context);
                }
                }
                break;
            case 2:
                {
                this.state = 1323;
                this.inlineDataValueClause();
                }
                break;
            case 3:
                {
                this.state = 1324;
                this.windoTVFClause();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1348;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 148, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1346;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 147, this.context) ) {
                    case 1:
                        {
                        localContext = new TableExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_tableExpression);
                        this.state = 1327;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1328;
                        this.match(FlinkSqlParser.KW_CROSS);
                        this.state = 1329;
                        this.match(FlinkSqlParser.KW_JOIN);
                        this.state = 1330;
                        this.tableExpression(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new TableExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_tableExpression);
                        this.state = 1331;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 1333;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 233) {
                            {
                            this.state = 1332;
                            this.match(FlinkSqlParser.KW_NATURAL);
                            }
                        }

                        this.state = 1336;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 152 || _la === 174 || _la === 201 || _la === 317) {
                            {
                            this.state = 1335;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 152 || _la === 174 || _la === 201 || _la === 317)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                        }

                        this.state = 1339;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 261) {
                            {
                            this.state = 1338;
                            this.match(FlinkSqlParser.KW_OUTER);
                            }
                        }

                        this.state = 1341;
                        this.match(FlinkSqlParser.KW_JOIN);
                        this.state = 1342;
                        this.tableExpression(0);
                        this.state = 1344;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 146, this.context) ) {
                        case 1:
                            {
                            this.state = 1343;
                            this.joinCondition();
                            }
                            break;
                        }
                        }
                        break;
                    }
                    }
                }
                this.state = 1350;
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
        this.enterRule(localContext, 178, FlinkSqlParser.RULE_tableReference);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1351;
            this.tablePrimary();
            this.state = 1353;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 149, this.context) ) {
            case 1:
                {
                this.state = 1352;
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
        this.enterRule(localContext, 180, FlinkSqlParser.RULE_tablePrimary);
        let _la: number;
        try {
            this.state = 1399;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 156, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1356;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 373) {
                    {
                    this.state = 1355;
                    this.match(FlinkSqlParser.KW_TABLE);
                    }
                }

                this.state = 1358;
                this.tablePath();
                this.state = 1360;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 151, this.context) ) {
                case 1:
                    {
                    this.state = 1359;
                    this.systemTimePeriod();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1362;
                this.viewPath();
                this.state = 1364;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 152, this.context) ) {
                case 1:
                    {
                    this.state = 1363;
                    this.systemTimePeriod();
                    }
                    break;
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1366;
                this.match(FlinkSqlParser.KW_LATERAL);
                this.state = 1367;
                this.match(FlinkSqlParser.KW_TABLE);
                this.state = 1368;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1383;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
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
                    {
                    {
                    this.state = 1369;
                    this.functionNameWithParams();
                    this.state = 1370;
                    this.match(FlinkSqlParser.LR_BRACKET);
                    this.state = 1371;
                    this.functionParam();
                    this.state = 1376;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 520) {
                        {
                        {
                        this.state = 1372;
                        this.match(FlinkSqlParser.COMMA);
                        this.state = 1373;
                        this.functionParam();
                        }
                        }
                        this.state = 1378;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 1379;
                    this.match(FlinkSqlParser.RR_BRACKET);
                    }
                    }
                    break;
                case FlinkSqlParser.KW_CURRENT_DATE:
                case FlinkSqlParser.KW_CURRENT_TIME:
                case FlinkSqlParser.KW_CURRENT_TIMESTAMP:
                case FlinkSqlParser.KW_LOCALTIME:
                case FlinkSqlParser.KW_LOCALTIMESTAMP:
                    {
                    this.state = 1381;
                    this.reservedKeywordsNoParamsUsedAsFuncName();
                    }
                    break;
                case FlinkSqlParser.KW_DATE:
                case FlinkSqlParser.KW_INTERVAL:
                case FlinkSqlParser.KW_TIME:
                case FlinkSqlParser.KW_TIMESTAMP:
                    {
                    this.state = 1382;
                    this.functionNameAndParams();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1385;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1388;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 198) {
                    {
                    this.state = 1387;
                    this.match(FlinkSqlParser.KW_LATERAL);
                    }
                }

                this.state = 1390;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1391;
                this.queryStatement(0);
                this.state = 1392;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1394;
                this.match(FlinkSqlParser.KW_UNNEST);
                this.state = 1395;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1396;
                this.expression();
                this.state = 1397;
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
        this.enterRule(localContext, 182, FlinkSqlParser.RULE_systemTimePeriod);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1401;
            this.match(FlinkSqlParser.KW_FOR);
            this.state = 1402;
            this.match(FlinkSqlParser.KW_SYSTEM_TIME);
            this.state = 1403;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 1404;
            this.match(FlinkSqlParser.KW_OF);
            this.state = 1405;
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
        this.enterRule(localContext, 184, FlinkSqlParser.RULE_dateTimeExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1407;
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
        this.enterRule(localContext, 186, FlinkSqlParser.RULE_inlineDataValueClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1409;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1410;
            this.valuesDefinition();
            this.state = 1411;
            this.match(FlinkSqlParser.RR_BRACKET);
            this.state = 1412;
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
    public windoTVFClause(): WindoTVFClauseContext {
        let localContext = new WindoTVFClauseContext(this.context, this.state);
        this.enterRule(localContext, 188, FlinkSqlParser.RULE_windoTVFClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1414;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 1415;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1416;
            this.windowTVFExression();
            this.state = 1417;
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
    public windowTVFExression(): WindowTVFExressionContext {
        let localContext = new WindowTVFExressionContext(this.context, this.state);
        this.enterRule(localContext, 190, FlinkSqlParser.RULE_windowTVFExression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1419;
            this.windoTVFName();
            this.state = 1420;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1421;
            this.windowTVFParam();
            this.state = 1426;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 520) {
                {
                {
                this.state = 1422;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1423;
                this.windowTVFParam();
                }
                }
                this.state = 1428;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1429;
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
    public windoTVFName(): WindoTVFNameContext {
        let localContext = new WindoTVFNameContext(this.context, this.state);
        this.enterRule(localContext, 192, FlinkSqlParser.RULE_windoTVFName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1431;
            _la = this.tokenStream.LA(1);
            if(!(_la === 445 || _la === 459 || _la === 499)) {
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
        this.enterRule(localContext, 194, FlinkSqlParser.RULE_windowTVFParam);
        try {
            this.state = 1448;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 158, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1433;
                this.match(FlinkSqlParser.KW_TABLE);
                this.state = 1434;
                this.timeAttrColumn();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1435;
                this.columnDescriptor();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1436;
                this.timeIntervalExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1437;
                this.match(FlinkSqlParser.KW_DATA);
                this.state = 1438;
                this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
                this.state = 1439;
                this.match(FlinkSqlParser.KW_TABLE);
                this.state = 1440;
                this.timeAttrColumn();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1441;
                this.match(FlinkSqlParser.KW_TIMECOL);
                this.state = 1442;
                this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
                this.state = 1443;
                this.columnDescriptor();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1444;
                this.timeIntervalParamName();
                this.state = 1445;
                this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
                this.state = 1446;
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
        this.enterRule(localContext, 196, FlinkSqlParser.RULE_timeIntervalParamName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1450;
            _la = this.tokenStream.LA(1);
            if(!(_la === 250 || _la === 446 || ((((_la - 494)) & ~0x1F) === 0 && ((1 << (_la - 494)) & 23) !== 0))) {
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
        this.enterRule(localContext, 198, FlinkSqlParser.RULE_columnDescriptor);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1452;
            this.match(FlinkSqlParser.KW_DESCRIPTOR);
            this.state = 1453;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1454;
            this.columnName();
            this.state = 1455;
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
        this.enterRule(localContext, 200, FlinkSqlParser.RULE_joinCondition);
        try {
            this.state = 1461;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_ON:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1457;
                this.match(FlinkSqlParser.KW_ON);
                this.state = 1458;
                this.booleanExpression(0);
                }
                break;
            case FlinkSqlParser.KW_USING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1459;
                this.match(FlinkSqlParser.KW_USING);
                this.state = 1460;
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
        this.enterRule(localContext, 202, FlinkSqlParser.RULE_whereClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1463;
            this.match(FlinkSqlParser.KW_WHERE);
            this.state = 1464;
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
        this.enterRule(localContext, 204, FlinkSqlParser.RULE_groupByClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1466;
            this.match(FlinkSqlParser.KW_GROUP);
            this.state = 1467;
            this.match(FlinkSqlParser.KW_BY);
            this.state = 1468;
            this.groupItemDefinition();
            this.state = 1473;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 160, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1469;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1470;
                    this.groupItemDefinition();
                    }
                    }
                }
                this.state = 1475;
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
    public groupItemDefinition(): GroupItemDefinitionContext {
        let localContext = new GroupItemDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 206, FlinkSqlParser.RULE_groupItemDefinition);
        let _la: number;
        try {
            this.state = 1516;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 164, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1476;
                this.columnName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1477;
                this.groupWindowFunction();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1478;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1479;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1480;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1481;
                this.expression();
                this.state = 1486;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                    {
                    this.state = 1482;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1483;
                    this.expression();
                    }
                    }
                    this.state = 1488;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1489;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1491;
                this.groupingSetsNotaionName();
                this.state = 1492;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1493;
                this.expression();
                this.state = 1498;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                    {
                    this.state = 1494;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1495;
                    this.expression();
                    }
                    }
                    this.state = 1500;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1501;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1503;
                this.groupingSets();
                this.state = 1504;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1505;
                this.groupItemDefinition();
                this.state = 1510;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                    {
                    this.state = 1506;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1507;
                    this.groupItemDefinition();
                    }
                    }
                    this.state = 1512;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1513;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1515;
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
        this.enterRule(localContext, 208, FlinkSqlParser.RULE_groupingSets);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1518;
            this.match(FlinkSqlParser.KW_GROUPING);
            this.state = 1519;
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
    public groupingSetsNotaionName(): GroupingSetsNotaionNameContext {
        let localContext = new GroupingSetsNotaionNameContext(this.context, this.state);
        this.enterRule(localContext, 210, FlinkSqlParser.RULE_groupingSetsNotaionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1521;
            _la = this.tokenStream.LA(1);
            if(!(_la === 74 || _la === 320)) {
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
        this.enterRule(localContext, 212, FlinkSqlParser.RULE_groupWindowFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1523;
            this.groupWindowFunctionName();
            this.state = 1524;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1525;
            this.timeAttrColumn();
            this.state = 1526;
            this.match(FlinkSqlParser.COMMA);
            this.state = 1527;
            this.timeIntervalExpression();
            this.state = 1528;
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
        this.enterRule(localContext, 214, FlinkSqlParser.RULE_groupWindowFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1530;
            _la = this.tokenStream.LA(1);
            if(!(_la === 459 || _la === 492 || _la === 499)) {
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
        this.enterRule(localContext, 216, FlinkSqlParser.RULE_timeAttrColumn);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1532;
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
        this.enterRule(localContext, 218, FlinkSqlParser.RULE_havingClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1534;
            this.match(FlinkSqlParser.KW_HAVING);
            this.state = 1535;
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
        this.enterRule(localContext, 220, FlinkSqlParser.RULE_windowClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1537;
            this.match(FlinkSqlParser.KW_WINDOW);
            this.state = 1538;
            this.namedWindow();
            this.state = 1543;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 165, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1539;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1540;
                    this.namedWindow();
                    }
                    }
                }
                this.state = 1545;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 165, this.context);
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
        this.enterRule(localContext, 222, FlinkSqlParser.RULE_namedWindow);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1546;
            localContext._name = this.errorCapturingIdentifier();
            this.state = 1547;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 1548;
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
        this.enterRule(localContext, 224, FlinkSqlParser.RULE_windowSpec);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1551;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 437)) & ~0x1F) === 0 && ((1 << (_la - 437)) & 4294967295) !== 0) || ((((_la - 469)) & ~0x1F) === 0 && ((1 << (_la - 469)) & 4294967295) !== 0) || ((((_la - 501)) & ~0x1F) === 0 && ((1 << (_la - 501)) & 15) !== 0) || ((((_la - 537)) & ~0x1F) === 0 && ((1 << (_la - 537)) & 19) !== 0)) {
                {
                this.state = 1550;
                localContext._name = this.errorCapturingIdentifier();
                }
            }

            this.state = 1553;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1555;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 268) {
                {
                this.state = 1554;
                this.partitionByClause();
                }
            }

            this.state = 1558;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 258) {
                {
                this.state = 1557;
                this.orderByCaluse();
                }
            }

            this.state = 1561;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 292 || _la === 322) {
                {
                this.state = 1560;
                this.windowFrame();
                }
            }

            this.state = 1563;
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
        this.enterRule(localContext, 226, FlinkSqlParser.RULE_matchRecognizeClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1565;
            this.match(FlinkSqlParser.KW_MATCH_RECOGNIZE);
            this.state = 1566;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1568;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 268) {
                {
                this.state = 1567;
                this.partitionByClause();
                }
            }

            this.state = 1571;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 258) {
                {
                this.state = 1570;
                this.orderByCaluse();
                }
            }

            this.state = 1574;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 215) {
                {
                this.state = 1573;
                this.measuresClause();
                }
            }

            this.state = 1577;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5 || _la === 254) {
                {
                this.state = 1576;
                this.outputMode();
                }
            }

            this.state = 1580;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 438) {
                {
                this.state = 1579;
                this.afterMatchStrategy();
                }
            }

            this.state = 1583;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 271) {
                {
                this.state = 1582;
                this.patternDefination();
                }
            }

            this.state = 1585;
            this.patternVariablesDefination();
            this.state = 1586;
            this.match(FlinkSqlParser.RR_BRACKET);
            this.state = 1591;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 177, this.context) ) {
            case 1:
                {
                this.state = 1588;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                    this.state = 1587;
                    this.match(FlinkSqlParser.KW_AS);
                    }
                }

                this.state = 1590;
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
    public orderByCaluse(): OrderByCaluseContext {
        let localContext = new OrderByCaluseContext(this.context, this.state);
        this.enterRule(localContext, 228, FlinkSqlParser.RULE_orderByCaluse);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1593;
            this.match(FlinkSqlParser.KW_ORDER);
            this.state = 1594;
            this.match(FlinkSqlParser.KW_BY);
            this.state = 1595;
            this.orderItemDefition();
            this.state = 1600;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 178, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1596;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1597;
                    this.orderItemDefition();
                    }
                    }
                }
                this.state = 1602;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 178, this.context);
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
    public orderItemDefition(): OrderItemDefitionContext {
        let localContext = new OrderItemDefitionContext(this.context, this.state);
        this.enterRule(localContext, 230, FlinkSqlParser.RULE_orderItemDefition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1603;
            this.columnName();
            this.state = 1605;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 179, this.context) ) {
            case 1:
                {
                this.state = 1604;
                localContext._ordering = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 439 || _la === 450)) {
                    localContext._ordering = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 1609;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 180, this.context) ) {
            case 1:
                {
                this.state = 1607;
                this.match(FlinkSqlParser.KW_NULLS);
                this.state = 1608;
                localContext._nullOrder = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 457 || _la === 467)) {
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
        this.enterRule(localContext, 232, FlinkSqlParser.RULE_limitClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1611;
            this.match(FlinkSqlParser.KW_LIMIT);
            this.state = 1614;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_ALL:
                {
                this.state = 1612;
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
                this.state = 1613;
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
        this.enterRule(localContext, 234, FlinkSqlParser.RULE_partitionByClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1616;
            this.match(FlinkSqlParser.KW_PARTITION);
            this.state = 1617;
            this.match(FlinkSqlParser.KW_BY);
            this.state = 1620;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 182, this.context) ) {
            case 1:
                {
                this.state = 1618;
                this.columnName();
                }
                break;
            case 2:
                {
                this.state = 1619;
                this.primaryExpression(0);
                }
                break;
            }
            this.state = 1629;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 520) {
                {
                {
                this.state = 1622;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1625;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 183, this.context) ) {
                case 1:
                    {
                    this.state = 1623;
                    this.columnName();
                    }
                    break;
                case 2:
                    {
                    this.state = 1624;
                    this.primaryExpression(0);
                    }
                    break;
                }
                }
                }
                this.state = 1631;
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
        this.enterRule(localContext, 236, FlinkSqlParser.RULE_quantifiers);
        try {
            this.state = 1648;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 185, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                {
                this.state = 1632;
                this.match(FlinkSqlParser.ASTERISK_SIGN);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 1633;
                this.match(FlinkSqlParser.ADD_SIGN);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 1634;
                this.match(FlinkSqlParser.QUESTION_MARK_SIGN);
                }
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                {
                this.state = 1635;
                this.match(FlinkSqlParser.LB_BRACKET);
                this.state = 1636;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1637;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1638;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1639;
                this.match(FlinkSqlParser.RB_BRACKET);
                }
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                {
                this.state = 1640;
                this.match(FlinkSqlParser.LB_BRACKET);
                this.state = 1641;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1642;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1643;
                this.match(FlinkSqlParser.RB_BRACKET);
                }
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                {
                this.state = 1644;
                this.match(FlinkSqlParser.LB_BRACKET);
                this.state = 1645;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1646;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1647;
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
        this.enterRule(localContext, 238, FlinkSqlParser.RULE_measuresClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1650;
            this.match(FlinkSqlParser.KW_MEASURES);
            this.state = 1651;
            this.projectItemDefinition();
            this.state = 1656;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 520) {
                {
                {
                this.state = 1652;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1653;
                this.projectItemDefinition();
                }
                }
                this.state = 1658;
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
    public patternDefination(): PatternDefinationContext {
        let localContext = new PatternDefinationContext(this.context, this.state);
        this.enterRule(localContext, 240, FlinkSqlParser.RULE_patternDefination);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1659;
            this.match(FlinkSqlParser.KW_PATTERN);
            this.state = 1660;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1662;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1661;
                this.patternVariable();
                }
                }
                this.state = 1664;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 538 || _la === 541);
            this.state = 1666;
            this.match(FlinkSqlParser.RR_BRACKET);
            this.state = 1668;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 434) {
                {
                this.state = 1667;
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
        this.enterRule(localContext, 242, FlinkSqlParser.RULE_patternVariable);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1670;
            this.unquotedIdentifier();
            this.state = 1672;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 518)) & ~0x1F) === 0 && ((1 << (_la - 518)) & 135681) !== 0)) {
                {
                this.state = 1671;
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
        this.enterRule(localContext, 244, FlinkSqlParser.RULE_outputMode);
        try {
            this.state = 1682;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_ALL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1674;
                this.match(FlinkSqlParser.KW_ALL);
                this.state = 1675;
                this.match(FlinkSqlParser.KW_ROWS);
                this.state = 1676;
                this.match(FlinkSqlParser.KW_PER);
                this.state = 1677;
                this.match(FlinkSqlParser.KW_MATCH);
                }
                break;
            case FlinkSqlParser.KW_ONE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1678;
                this.match(FlinkSqlParser.KW_ONE);
                this.state = 1679;
                this.match(FlinkSqlParser.KW_ROW);
                this.state = 1680;
                this.match(FlinkSqlParser.KW_PER);
                this.state = 1681;
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
        this.enterRule(localContext, 246, FlinkSqlParser.RULE_afterMatchStrategy);
        try {
            this.state = 1708;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 191, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1684;
                this.match(FlinkSqlParser.KW_AFTER);
                this.state = 1685;
                this.match(FlinkSqlParser.KW_MATCH);
                this.state = 1686;
                this.match(FlinkSqlParser.KW_SKIP);
                this.state = 1687;
                this.match(FlinkSqlParser.KW_PAST);
                this.state = 1688;
                this.match(FlinkSqlParser.KW_LAST);
                this.state = 1689;
                this.match(FlinkSqlParser.KW_ROW);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1690;
                this.match(FlinkSqlParser.KW_AFTER);
                this.state = 1691;
                this.match(FlinkSqlParser.KW_MATCH);
                this.state = 1692;
                this.match(FlinkSqlParser.KW_SKIP);
                this.state = 1693;
                this.match(FlinkSqlParser.KW_TO);
                this.state = 1694;
                this.match(FlinkSqlParser.KW_NEXT);
                this.state = 1695;
                this.match(FlinkSqlParser.KW_ROW);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
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
                this.match(FlinkSqlParser.KW_LAST);
                this.state = 1701;
                this.unquotedIdentifier();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
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
                this.match(FlinkSqlParser.KW_FIRST);
                this.state = 1707;
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
    public patternVariablesDefination(): PatternVariablesDefinationContext {
        let localContext = new PatternVariablesDefinationContext(this.context, this.state);
        this.enterRule(localContext, 248, FlinkSqlParser.RULE_patternVariablesDefination);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1710;
            this.match(FlinkSqlParser.KW_DEFINE);
            this.state = 1711;
            this.projectItemDefinition();
            this.state = 1716;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 520) {
                {
                {
                this.state = 1712;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1713;
                this.projectItemDefinition();
                }
                }
                this.state = 1718;
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
        this.enterRule(localContext, 250, FlinkSqlParser.RULE_windowFrame);
        try {
            this.state = 1728;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_RANGE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1719;
                this.match(FlinkSqlParser.KW_RANGE);
                this.state = 1720;
                this.match(FlinkSqlParser.KW_BETWEEN);
                this.state = 1721;
                this.timeIntervalExpression();
                this.state = 1722;
                this.frameBound();
                }
                break;
            case FlinkSqlParser.KW_ROWS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1724;
                this.match(FlinkSqlParser.KW_ROWS);
                this.state = 1725;
                this.match(FlinkSqlParser.KW_BETWEEN);
                this.state = 1726;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1727;
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
        this.enterRule(localContext, 252, FlinkSqlParser.RULE_frameBound);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1730;
            this.match(FlinkSqlParser.KW_PRECEDING);
            this.state = 1731;
            this.match(FlinkSqlParser.KW_AND);
            this.state = 1732;
            this.match(FlinkSqlParser.KW_CURRENT);
            this.state = 1733;
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
        this.enterRule(localContext, 254, FlinkSqlParser.RULE_withinClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1735;
            this.match(FlinkSqlParser.KW_WITHIN);
            this.state = 1736;
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
        this.enterRule(localContext, 256, FlinkSqlParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1738;
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
        let _startState = 258;
        this.enterRecursionRule(localContext, 258, FlinkSqlParser.RULE_booleanExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1752;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 195, this.context) ) {
            case 1:
                {
                localContext = new LogicalNotContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1741;
                this.match(FlinkSqlParser.KW_NOT);
                this.state = 1742;
                this.booleanExpression(6);
                }
                break;
            case 2:
                {
                localContext = new ExistsContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1743;
                this.match(FlinkSqlParser.KW_EXISTS);
                this.state = 1744;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1745;
                this.queryStatement(0);
                this.state = 1746;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 3:
                {
                localContext = new PredicatedContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1748;
                this.valueExpression(0);
                this.state = 1750;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 194, this.context) ) {
                case 1:
                    {
                    this.state = 1749;
                    this.predicate();
                    }
                    break;
                }
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1768;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 198, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1766;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 197, this.context) ) {
                    case 1:
                        {
                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as LogicalBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_booleanExpression);
                        this.state = 1754;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1755;
                        (localContext as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.KW_AND);
                        this.state = 1756;
                        (localContext as LogicalBinaryContext)._right = this.booleanExpression(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                        (localContext as LogicalBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_booleanExpression);
                        this.state = 1757;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1758;
                        (localContext as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.KW_OR);
                        this.state = 1759;
                        (localContext as LogicalBinaryContext)._right = this.booleanExpression(3);
                        }
                        break;
                    case 3:
                        {
                        localContext = new LogicalNestedContext(new BooleanExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_booleanExpression);
                        this.state = 1760;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 1761;
                        this.match(FlinkSqlParser.KW_IS);
                        this.state = 1763;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 241) {
                            {
                            this.state = 1762;
                            this.match(FlinkSqlParser.KW_NOT);
                            }
                        }

                        this.state = 1765;
                        (localContext as LogicalNestedContext)._kind = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 140 || _la === 244 || _la === 397 || _la === 404)) {
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
                this.state = 1770;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 198, this.context);
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
        this.enterRule(localContext, 260, FlinkSqlParser.RULE_predicate);
        let _la: number;
        try {
            this.state = 1838;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 209, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1772;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 241) {
                    {
                    this.state = 1771;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1774;
                localContext._kind = this.match(FlinkSqlParser.KW_BETWEEN);
                this.state = 1776;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19 || _la === 369) {
                    {
                    this.state = 1775;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 19 || _la === 369)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                }

                this.state = 1778;
                localContext._lower = this.valueExpression(0);
                this.state = 1779;
                this.match(FlinkSqlParser.KW_AND);
                this.state = 1780;
                localContext._upper = this.valueExpression(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1783;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 241) {
                    {
                    this.state = 1782;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1785;
                localContext._kind = this.match(FlinkSqlParser.KW_IN);
                this.state = 1786;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1787;
                this.expression();
                this.state = 1792;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                    {
                    this.state = 1788;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1789;
                    this.expression();
                    }
                    }
                    this.state = 1794;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1795;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1798;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 241) {
                    {
                    this.state = 1797;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1800;
                localContext._kind = this.match(FlinkSqlParser.KW_IN);
                this.state = 1801;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1802;
                this.queryStatement(0);
                this.state = 1803;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1805;
                localContext._kind = this.match(FlinkSqlParser.KW_EXISTS);
                this.state = 1806;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1807;
                this.queryStatement(0);
                this.state = 1808;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1811;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 241) {
                    {
                    this.state = 1810;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1813;
                localContext._kind = this.match(FlinkSqlParser.KW_RLIKE);
                this.state = 1814;
                localContext._pattern = this.valueExpression(0);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1815;
                this.likePredicate();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1816;
                this.match(FlinkSqlParser.KW_IS);
                this.state = 1818;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 241) {
                    {
                    this.state = 1817;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1820;
                localContext._kind = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 140 || _la === 244 || _la === 397 || _la === 404)) {
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
                this.state = 1821;
                this.match(FlinkSqlParser.KW_IS);
                this.state = 1823;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 241) {
                    {
                    this.state = 1822;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1825;
                localContext._kind = this.match(FlinkSqlParser.KW_DISTINCT);
                this.state = 1826;
                this.match(FlinkSqlParser.KW_FROM);
                this.state = 1827;
                localContext._right = this.valueExpression(0);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 1829;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 241) {
                    {
                    this.state = 1828;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1831;
                localContext._kind = this.match(FlinkSqlParser.KW_SIMILAR);
                this.state = 1832;
                this.match(FlinkSqlParser.KW_TO);
                this.state = 1833;
                localContext._right = this.valueExpression(0);
                this.state = 1836;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 208, this.context) ) {
                case 1:
                    {
                    this.state = 1834;
                    this.match(FlinkSqlParser.KW_ESCAPE);
                    this.state = 1835;
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
    public likePredicate(): LikePredicateContext {
        let localContext = new LikePredicateContext(this.context, this.state);
        this.enterRule(localContext, 262, FlinkSqlParser.RULE_likePredicate);
        let _la: number;
        try {
            this.state = 1869;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 215, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1841;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 241) {
                    {
                    this.state = 1840;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1843;
                localContext._kind = this.match(FlinkSqlParser.KW_LIKE);
                this.state = 1844;
                localContext._quantifier = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 5 || _la === 11)) {
                    localContext._quantifier = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1858;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 212, this.context) ) {
                case 1:
                    {
                    this.state = 1845;
                    this.match(FlinkSqlParser.LR_BRACKET);
                    this.state = 1846;
                    this.match(FlinkSqlParser.RR_BRACKET);
                    }
                    break;
                case 2:
                    {
                    this.state = 1847;
                    this.match(FlinkSqlParser.LR_BRACKET);
                    this.state = 1848;
                    this.expression();
                    this.state = 1853;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 520) {
                        {
                        {
                        this.state = 1849;
                        this.match(FlinkSqlParser.COMMA);
                        this.state = 1850;
                        this.expression();
                        }
                        }
                        this.state = 1855;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 1856;
                    this.match(FlinkSqlParser.RR_BRACKET);
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1861;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 241) {
                    {
                    this.state = 1860;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1863;
                localContext._kind = this.match(FlinkSqlParser.KW_LIKE);
                this.state = 1864;
                localContext._pattern = this.valueExpression(0);
                this.state = 1867;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 214, this.context) ) {
                case 1:
                    {
                    this.state = 1865;
                    this.match(FlinkSqlParser.KW_ESCAPE);
                    this.state = 1866;
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
        let _startState = 264;
        this.enterRecursionRule(localContext, 264, FlinkSqlParser.RULE_valueExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1875;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 216, this.context) ) {
            case 1:
                {
                localContext = new ValueExpressionDefaultContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1872;
                this.primaryExpression(0);
                }
                break;
            case 2:
                {
                localContext = new ArithmeticUnaryContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1873;
                (localContext as ArithmeticUnaryContext)._operator = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 509)) & ~0x1F) === 0 && ((1 << (_la - 509)) & 3145729) !== 0))) {
                    (localContext as ArithmeticUnaryContext)._operator = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1874;
                this.valueExpression(7);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1898;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 218, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1896;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 217, this.context) ) {
                    case 1:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1877;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 1878;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 452 || ((((_la - 527)) & ~0x1F) === 0 && ((1 << (_la - 527)) & 145) !== 0))) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1879;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(7);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1880;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 1881;
                        (localContext as ArithmeticBinaryContext)._operator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 529)) & ~0x1F) === 0 && ((1 << (_la - 529)) & 11) !== 0))) {
                            (localContext as ArithmeticBinaryContext)._operator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1882;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(6);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1883;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 1884;
                        (localContext as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_AND_OP);
                        this.state = 1885;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(5);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1886;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1887;
                        (localContext as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_XOR_OP);
                        this.state = 1888;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(4);
                        }
                        break;
                    case 5:
                        {
                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ArithmeticBinaryContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1889;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1890;
                        (localContext as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_OR_OP);
                        this.state = 1891;
                        (localContext as ArithmeticBinaryContext)._right = this.valueExpression(3);
                        }
                        break;
                    case 6:
                        {
                        localContext = new ComparisonContext(new ValueExpressionContext(parentContext, parentState));
                        (localContext as ComparisonContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1892;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 1893;
                        this.comparisonOperator();
                        this.state = 1894;
                        (localContext as ComparisonContext)._right = this.valueExpression(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 1900;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 218, this.context);
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
        let _startState = 266;
        this.enterRecursionRule(localContext, 266, FlinkSqlParser.RULE_primaryExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1996;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 229, this.context) ) {
            case 1:
                {
                localContext = new SearchedCaseContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1902;
                this.match(FlinkSqlParser.KW_CASE);
                this.state = 1904;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1903;
                    this.whenClause();
                    }
                    }
                    this.state = 1906;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 428);
                this.state = 1910;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 120) {
                    {
                    this.state = 1908;
                    this.match(FlinkSqlParser.KW_ELSE);
                    this.state = 1909;
                    (localContext as SearchedCaseContext)._elseExpression = this.expression();
                    }
                }

                this.state = 1912;
                this.match(FlinkSqlParser.KW_END);
                }
                break;
            case 2:
                {
                localContext = new SimpleCaseContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1914;
                this.match(FlinkSqlParser.KW_CASE);
                this.state = 1915;
                (localContext as SimpleCaseContext)._value = this.expression();
                this.state = 1917;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1916;
                    this.whenClause();
                    }
                    }
                    this.state = 1919;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 428);
                this.state = 1923;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 120) {
                    {
                    this.state = 1921;
                    this.match(FlinkSqlParser.KW_ELSE);
                    this.state = 1922;
                    (localContext as SimpleCaseContext)._elseExpression = this.expression();
                    }
                }

                this.state = 1925;
                this.match(FlinkSqlParser.KW_END);
                }
                break;
            case 3:
                {
                localContext = new CastContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1927;
                this.match(FlinkSqlParser.KW_CAST);
                this.state = 1928;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1929;
                this.expression();
                this.state = 1930;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 1931;
                this.columnType();
                this.state = 1932;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                {
                localContext = new FirstContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1934;
                this.match(FlinkSqlParser.KW_FIRST);
                this.state = 1935;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1936;
                this.expression();
                this.state = 1939;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 461) {
                    {
                    this.state = 1937;
                    this.match(FlinkSqlParser.KW_IGNORE);
                    this.state = 1938;
                    this.match(FlinkSqlParser.KW_NULLS);
                    }
                }

                this.state = 1941;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 5:
                {
                localContext = new LastContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1943;
                this.match(FlinkSqlParser.KW_LAST);
                this.state = 1944;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1945;
                this.expression();
                this.state = 1948;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 461) {
                    {
                    this.state = 1946;
                    this.match(FlinkSqlParser.KW_IGNORE);
                    this.state = 1947;
                    this.match(FlinkSqlParser.KW_NULLS);
                    }
                }

                this.state = 1950;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 6:
                {
                localContext = new PositionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1952;
                this.match(FlinkSqlParser.KW_POSITION);
                this.state = 1953;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1954;
                (localContext as PositionContext)._substr = this.valueExpression(0);
                this.state = 1955;
                this.match(FlinkSqlParser.KW_IN);
                this.state = 1956;
                (localContext as PositionContext)._str = this.valueExpression(0);
                this.state = 1957;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 7:
                {
                localContext = new ConstantDefaultContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1959;
                this.constant();
                }
                break;
            case 8:
                {
                localContext = new StarContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1960;
                this.match(FlinkSqlParser.ASTERISK_SIGN);
                }
                break;
            case 9:
                {
                localContext = new StarContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1961;
                this.uid();
                this.state = 1962;
                this.match(FlinkSqlParser.DOT);
                this.state = 1963;
                this.match(FlinkSqlParser.ASTERISK_SIGN);
                }
                break;
            case 10:
                {
                localContext = new SubqueryExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1965;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1966;
                this.queryStatement(0);
                this.state = 1967;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 11:
                {
                localContext = new FunctionCallContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1988;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.KW_CURRENT_DATE:
                case FlinkSqlParser.KW_CURRENT_TIME:
                case FlinkSqlParser.KW_CURRENT_TIMESTAMP:
                case FlinkSqlParser.KW_LOCALTIME:
                case FlinkSqlParser.KW_LOCALTIMESTAMP:
                    {
                    this.state = 1969;
                    this.reservedKeywordsNoParamsUsedAsFuncName();
                    }
                    break;
                case FlinkSqlParser.KW_DATE:
                case FlinkSqlParser.KW_INTERVAL:
                case FlinkSqlParser.KW_TIME:
                case FlinkSqlParser.KW_TIMESTAMP:
                    {
                    this.state = 1970;
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
                    {
                    {
                    this.state = 1971;
                    this.functionNameWithParams();
                    this.state = 1972;
                    this.match(FlinkSqlParser.LR_BRACKET);
                    this.state = 1984;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 8396848) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 10489249) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 1883341377) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 201330753) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 337641555) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 244224001) !== 0) || ((((_la - 214)) & ~0x1F) === 0 && ((1 << (_la - 214)) & 3892347713) !== 0) || ((((_la - 264)) & ~0x1F) === 0 && ((1 << (_la - 264)) & 537530369) !== 0) || ((((_la - 317)) & ~0x1F) === 0 && ((1 << (_la - 317)) & 131185) !== 0) || ((((_la - 357)) & ~0x1F) === 0 && ((1 << (_la - 357)) & 14681219) !== 0) || ((((_la - 389)) & ~0x1F) === 0 && ((1 << (_la - 389)) & 3238528833) !== 0) || ((((_la - 427)) & ~0x1F) === 0 && ((1 << (_la - 427)) & 4294966785) !== 0) || ((((_la - 459)) & ~0x1F) === 0 && ((1 << (_la - 459)) & 4294967295) !== 0) || ((((_la - 491)) & ~0x1F) === 0 && ((1 << (_la - 491)) & 33832959) !== 0) || ((((_la - 527)) & ~0x1F) === 0 && ((1 << (_la - 527)) & 31757) !== 0)) {
                        {
                        this.state = 1974;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 225, this.context) ) {
                        case 1:
                            {
                            this.state = 1973;
                            this.setQuantifier();
                            }
                            break;
                        }
                        this.state = 1976;
                        this.functionParam();
                        this.state = 1981;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 520) {
                            {
                            {
                            this.state = 1977;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 1978;
                            this.functionParam();
                            }
                            }
                            this.state = 1983;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        }
                    }

                    this.state = 1986;
                    this.match(FlinkSqlParser.RR_BRACKET);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            case 12:
                {
                localContext = new ColumnReferenceContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1990;
                this.identifier();
                }
                break;
            case 13:
                {
                localContext = new DereferenceContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1991;
                this.dereferenceDefinition();
                }
                break;
            case 14:
                {
                localContext = new ParenthesizedExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1992;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1993;
                this.expression();
                this.state = 1994;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2005;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 230, this.context);
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
                    this.state = 1998;
                    if (!(this.precpred(this.context, 4))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                    }
                    this.state = 1999;
                    this.match(FlinkSqlParser.LS_BRACKET);
                    this.state = 2000;
                    (localContext as SubscriptContext)._index = this.valueExpression(0);
                    this.state = 2001;
                    this.match(FlinkSqlParser.RS_BRACKET);
                    }
                    }
                }
                this.state = 2007;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 230, this.context);
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
        this.enterRule(localContext, 268, FlinkSqlParser.RULE_functionNameCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2008;
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
        this.enterRule(localContext, 270, FlinkSqlParser.RULE_functionName);
        try {
            this.state = 2014;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 231, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2010;
                this.reservedKeywordsUsedAsFuncName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2011;
                this.reservedKeywordsNoParamsUsedAsFuncName();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2012;
                this.reservedKeywordsFollowParamsUsedAsFuncName();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2013;
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
        this.enterRule(localContext, 272, FlinkSqlParser.RULE_functionNameAndParams);
        try {
            this.state = 2020;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_DATE:
            case FlinkSqlParser.KW_TIME:
            case FlinkSqlParser.KW_TIMESTAMP:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2016;
                this.reservedKeywordsFollowParamsUsedAsFuncName();
                this.state = 2017;
                this.match(FlinkSqlParser.STRING_LITERAL);
                }
                break;
            case FlinkSqlParser.KW_INTERVAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2019;
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
        this.enterRule(localContext, 274, FlinkSqlParser.RULE_functionNameWithParams);
        try {
            this.state = 2024;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 233, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2022;
                this.reservedKeywordsUsedAsFuncName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2023;
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
        this.enterRule(localContext, 276, FlinkSqlParser.RULE_functionParam);
        try {
            this.state = 2030;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 234, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2026;
                this.reservedKeywordsUsedAsFuncParam();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2027;
                this.timeIntervalUnit();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2028;
                this.timePointUnit();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2029;
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
        this.enterRule(localContext, 278, FlinkSqlParser.RULE_dereferenceDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2032;
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
        this.enterRule(localContext, 280, FlinkSqlParser.RULE_correlationName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2034;
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
        this.enterRule(localContext, 282, FlinkSqlParser.RULE_qualifiedName);
        try {
            this.state = 2038;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 235, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2036;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2037;
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
        this.enterRule(localContext, 284, FlinkSqlParser.RULE_timeIntervalExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2040;
            this.match(FlinkSqlParser.KW_INTERVAL);
            this.state = 2043;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 236, this.context) ) {
            case 1:
                {
                this.state = 2041;
                this.errorCapturingMultiUnitsInterval();
                }
                break;
            case 2:
                {
                this.state = 2042;
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
        this.enterRule(localContext, 286, FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2045;
            this.multiUnitsInterval();
            this.state = 2047;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 237, this.context) ) {
            case 1:
                {
                this.state = 2046;
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
        this.enterRule(localContext, 288, FlinkSqlParser.RULE_multiUnitsInterval);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2052;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 2049;
                    this.intervalValue();
                    this.state = 2050;
                    this.timeIntervalUnit();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2054;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 238, this.context);
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
        this.enterRule(localContext, 290, FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2056;
            localContext._body = this.unitToUnitInterval();
            this.state = 2059;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 239, this.context) ) {
            case 1:
                {
                this.state = 2057;
                localContext._error1 = this.multiUnitsInterval();
                }
                break;
            case 2:
                {
                this.state = 2058;
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
        this.enterRule(localContext, 292, FlinkSqlParser.RULE_unitToUnitInterval);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2061;
            localContext._value = this.intervalValue();
            this.state = 2062;
            localContext._from_ = this.timeIntervalUnit();
            this.state = 2063;
            this.match(FlinkSqlParser.KW_TO);
            this.state = 2064;
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
        this.enterRule(localContext, 294, FlinkSqlParser.RULE_intervalValue);
        let _la: number;
        try {
            this.state = 2071;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.HYPNEN_SIGN:
            case FlinkSqlParser.ADD_SIGN:
            case FlinkSqlParser.DIG_LITERAL:
            case FlinkSqlParser.REAL_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2067;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 529 || _la === 530) {
                    {
                    this.state = 2066;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 529 || _la === 530)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                }

                this.state = 2069;
                _la = this.tokenStream.LA(1);
                if(!(_la === 538 || _la === 539)) {
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
                this.state = 2070;
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
        this.enterRule(localContext, 296, FlinkSqlParser.RULE_tableAlias);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2074;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 2073;
                this.match(FlinkSqlParser.KW_AS);
                }
            }

            this.state = 2076;
            localContext._alias = this.identifier();
            this.state = 2078;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 243, this.context) ) {
            case 1:
                {
                this.state = 2077;
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
        this.enterRule(localContext, 298, FlinkSqlParser.RULE_errorCapturingIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2080;
            this.identifier();
            this.state = 2081;
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
        this.enterRule(localContext, 300, FlinkSqlParser.RULE_errorCapturingIdentifierExtra);
        let _la: number;
        try {
            this.state = 2090;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_MINUS:
                localContext = new ErrorIdentContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2085;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 2083;
                    this.match(FlinkSqlParser.KW_MINUS);
                    this.state = 2084;
                    this.identifier();
                    }
                    }
                    this.state = 2087;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 221);
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
        this.enterRule(localContext, 302, FlinkSqlParser.RULE_identifierList);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2092;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 2093;
            this.identifierSeq();
            this.state = 2094;
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
        this.enterRule(localContext, 304, FlinkSqlParser.RULE_identifierSeq);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2096;
            this.identifier();
            this.state = 2101;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 520) {
                {
                {
                this.state = 2097;
                this.match(FlinkSqlParser.COMMA);
                this.state = 2098;
                this.identifier();
                }
                }
                this.state = 2103;
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
        this.enterRule(localContext, 306, FlinkSqlParser.RULE_identifier);
        try {
            this.state = 2107;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.DIG_LITERAL:
            case FlinkSqlParser.ID_LITERAL:
                localContext = new UnquotedIdentifierAlternativeContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2104;
                this.unquotedIdentifier();
                }
                break;
            case FlinkSqlParser.STRING_LITERAL:
                localContext = new QuotedIdentifierAlternativeContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2105;
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
                this.state = 2106;
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
        this.enterRule(localContext, 308, FlinkSqlParser.RULE_unquotedIdentifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2109;
            _la = this.tokenStream.LA(1);
            if(!(_la === 538 || _la === 541)) {
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
        this.enterRule(localContext, 310, FlinkSqlParser.RULE_quotedIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2111;
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
        this.enterRule(localContext, 312, FlinkSqlParser.RULE_whenClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2113;
            this.match(FlinkSqlParser.KW_WHEN);
            this.state = 2114;
            localContext._condition = this.expression();
            this.state = 2115;
            this.match(FlinkSqlParser.KW_THEN);
            this.state = 2116;
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
        this.enterRule(localContext, 314, FlinkSqlParser.RULE_catalogPath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2118;
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
        this.enterRule(localContext, 316, FlinkSqlParser.RULE_catalogPathCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2120;
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
        this.enterRule(localContext, 318, FlinkSqlParser.RULE_databasePath);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2122;
            this.identifier();
            this.state = 2125;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 513) {
                {
                this.state = 2123;
                this.match(FlinkSqlParser.DOT);
                this.state = 2124;
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
        this.enterRule(localContext, 320, FlinkSqlParser.RULE_databasePathCreate);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2127;
            this.identifier();
            this.state = 2130;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 513) {
                {
                this.state = 2128;
                this.match(FlinkSqlParser.DOT);
                this.state = 2129;
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
        this.enterRule(localContext, 322, FlinkSqlParser.RULE_tablePathCreate);
        let _la: number;
        try {
            this.state = 2144;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 252, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2132;
                this.identifier();
                this.state = 2135;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 513) {
                    {
                    this.state = 2133;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2134;
                    this.identifier();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2137;
                this.identifier();
                this.state = 2138;
                this.match(FlinkSqlParser.DOT);
                this.state = 2139;
                this.identifier();
                this.state = 2142;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 513) {
                    {
                    this.state = 2140;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2141;
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
        this.enterRule(localContext, 324, FlinkSqlParser.RULE_tablePath);
        try {
            this.state = 2158;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 255, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2146;
                this.identifier();
                this.state = 2149;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 253, this.context) ) {
                case 1:
                    {
                    this.state = 2147;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2148;
                    this.identifier();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2151;
                this.identifier();
                this.state = 2152;
                this.match(FlinkSqlParser.DOT);
                this.state = 2153;
                this.identifier();
                this.state = 2156;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 254, this.context) ) {
                case 1:
                    {
                    this.state = 2154;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2155;
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
        this.enterRule(localContext, 326, FlinkSqlParser.RULE_viewPath);
        try {
            this.state = 2172;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 258, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2160;
                this.identifier();
                this.state = 2163;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 256, this.context) ) {
                case 1:
                    {
                    this.state = 2161;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2162;
                    this.identifier();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2165;
                this.identifier();
                this.state = 2166;
                this.match(FlinkSqlParser.DOT);
                this.state = 2167;
                this.identifier();
                this.state = 2170;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 257, this.context) ) {
                case 1:
                    {
                    this.state = 2168;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2169;
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
        this.enterRule(localContext, 328, FlinkSqlParser.RULE_viewPathCreate);
        let _la: number;
        try {
            this.state = 2186;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 261, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2174;
                this.identifier();
                this.state = 2177;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 513) {
                    {
                    this.state = 2175;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2176;
                    this.identifier();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2179;
                this.identifier();
                this.state = 2180;
                this.match(FlinkSqlParser.DOT);
                this.state = 2181;
                this.identifier();
                this.state = 2184;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 513) {
                    {
                    this.state = 2182;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2183;
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
        this.enterRule(localContext, 330, FlinkSqlParser.RULE_uid);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2188;
            this.identifier();
            this.state = 2193;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 262, this.context);
            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1 + 1) {
                    {
                    {
                    this.state = 2189;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2190;
                    this.identifier();
                    }
                    }
                }
                this.state = 2195;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 262, this.context);
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
        this.enterRule(localContext, 332, FlinkSqlParser.RULE_withOption);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2196;
            this.match(FlinkSqlParser.KW_WITH);
            this.state = 2197;
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
        this.enterRule(localContext, 334, FlinkSqlParser.RULE_ifNotExists);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2199;
            this.match(FlinkSqlParser.KW_IF);
            this.state = 2200;
            this.match(FlinkSqlParser.KW_NOT);
            this.state = 2201;
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
        this.enterRule(localContext, 336, FlinkSqlParser.RULE_ifExists);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2203;
            this.match(FlinkSqlParser.KW_IF);
            this.state = 2204;
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
        this.enterRule(localContext, 338, FlinkSqlParser.RULE_tablePropertyList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2206;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 2207;
            this.tableProperty();
            this.state = 2212;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 520) {
                {
                {
                this.state = 2208;
                this.match(FlinkSqlParser.COMMA);
                this.state = 2209;
                this.tableProperty();
                }
                }
                this.state = 2214;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 2215;
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
        this.enterRule(localContext, 340, FlinkSqlParser.RULE_tableProperty);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2217;
            localContext._key = this.tablePropertyKey();
            this.state = 2222;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 140 || _la === 397 || _la === 505 || ((((_la - 537)) & ~0x1F) === 0 && ((1 << (_la - 537)) & 7) !== 0)) {
                {
                this.state = 2219;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 505) {
                    {
                    this.state = 2218;
                    this.match(FlinkSqlParser.EQUAL_SYMBOL);
                    }
                }

                this.state = 2221;
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
        this.enterRule(localContext, 342, FlinkSqlParser.RULE_tablePropertyKey);
        try {
            this.state = 2227;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 266, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2224;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2225;
                this.dereferenceDefinition();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2226;
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
        this.enterRule(localContext, 344, FlinkSqlParser.RULE_tablePropertyValue);
        try {
            this.state = 2233;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.DIG_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2229;
                this.match(FlinkSqlParser.DIG_LITERAL);
                }
                break;
            case FlinkSqlParser.REAL_LITERAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2230;
                this.match(FlinkSqlParser.REAL_LITERAL);
                }
                break;
            case FlinkSqlParser.KW_FALSE:
            case FlinkSqlParser.KW_TRUE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2231;
                this.booleanLiteral();
                }
                break;
            case FlinkSqlParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2232;
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
        this.enterRule(localContext, 346, FlinkSqlParser.RULE_logicalOperator);
        try {
            this.state = 2241;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_AND:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2235;
                this.match(FlinkSqlParser.KW_AND);
                }
                break;
            case FlinkSqlParser.BIT_AND_OP:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2236;
                this.match(FlinkSqlParser.BIT_AND_OP);
                this.state = 2237;
                this.match(FlinkSqlParser.BIT_AND_OP);
                }
                break;
            case FlinkSqlParser.KW_OR:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2238;
                this.match(FlinkSqlParser.KW_OR);
                }
                break;
            case FlinkSqlParser.BIT_OR_OP:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2239;
                this.match(FlinkSqlParser.BIT_OR_OP);
                this.state = 2240;
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
        this.enterRule(localContext, 348, FlinkSqlParser.RULE_comparisonOperator);
        try {
            this.state = 2257;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 269, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2243;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2244;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2245;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2246;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 2247;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2248;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                this.state = 2249;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2250;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 2251;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2252;
                this.match(FlinkSqlParser.EXCLAMATION_SYMBOL);
                this.state = 2253;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2254;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 2255;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                this.state = 2256;
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
        this.enterRule(localContext, 350, FlinkSqlParser.RULE_bitOperator);
        try {
            this.state = 2266;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.LESS_SYMBOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2259;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 2260;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                }
                break;
            case FlinkSqlParser.GREATER_SYMBOL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2261;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                this.state = 2262;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                }
                break;
            case FlinkSqlParser.BIT_AND_OP:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2263;
                this.match(FlinkSqlParser.BIT_AND_OP);
                }
                break;
            case FlinkSqlParser.BIT_XOR_OP:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2264;
                this.match(FlinkSqlParser.BIT_XOR_OP);
                }
                break;
            case FlinkSqlParser.BIT_OR_OP:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2265;
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
        this.enterRule(localContext, 352, FlinkSqlParser.RULE_mathOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2268;
            _la = this.tokenStream.LA(1);
            if(!(_la === 452 || ((((_la - 527)) & ~0x1F) === 0 && ((1 << (_la - 527)) & 221) !== 0))) {
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
        this.enterRule(localContext, 354, FlinkSqlParser.RULE_unaryOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2270;
            _la = this.tokenStream.LA(1);
            if(!(_la === 241 || ((((_la - 508)) & ~0x1F) === 0 && ((1 << (_la - 508)) & 6291459) !== 0))) {
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
        this.enterRule(localContext, 356, FlinkSqlParser.RULE_constant);
        let _la: number;
        try {
            this.state = 2286;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FlinkSqlParser.KW_INTERVAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2272;
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
                this.state = 2273;
                this.timePointLiteral();
                }
                break;
            case FlinkSqlParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2274;
                this.stringLiteral();
                }
                break;
            case FlinkSqlParser.HYPNEN_SIGN:
            case FlinkSqlParser.DIG_LITERAL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2276;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 529) {
                    {
                    this.state = 2275;
                    this.match(FlinkSqlParser.HYPNEN_SIGN);
                    }
                }

                this.state = 2278;
                this.decimalLiteral();
                }
                break;
            case FlinkSqlParser.KW_FALSE:
            case FlinkSqlParser.KW_TRUE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2279;
                this.booleanLiteral();
                }
                break;
            case FlinkSqlParser.REAL_LITERAL:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2280;
                this.match(FlinkSqlParser.REAL_LITERAL);
                }
                break;
            case FlinkSqlParser.BIT_STRING:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2281;
                this.match(FlinkSqlParser.BIT_STRING);
                }
                break;
            case FlinkSqlParser.KW_NOT:
            case FlinkSqlParser.KW_NULL:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2283;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 241) {
                    {
                    this.state = 2282;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 2285;
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
        this.enterRule(localContext, 358, FlinkSqlParser.RULE_timePointLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2288;
            this.timePointUnit();
            this.state = 2289;
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
        this.enterRule(localContext, 360, FlinkSqlParser.RULE_stringLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2291;
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
        this.enterRule(localContext, 362, FlinkSqlParser.RULE_decimalLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2293;
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
        this.enterRule(localContext, 364, FlinkSqlParser.RULE_booleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2295;
            _la = this.tokenStream.LA(1);
            if(!(_la === 140 || _la === 397)) {
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
        this.enterRule(localContext, 366, FlinkSqlParser.RULE_setQuantifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2297;
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
        this.enterRule(localContext, 368, FlinkSqlParser.RULE_timePointUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2299;
            _la = this.tokenStream.LA(1);
            if(!(_la === 97 || _la === 165 || _la === 222 || _la === 229 || _la === 334 || _la === 436 || ((((_la - 470)) & ~0x1F) === 0 && ((1 << (_la - 470)) & 262149) !== 0) || _la === 502)) {
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
        this.enterRule(localContext, 370, FlinkSqlParser.RULE_timeIntervalUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2301;
            _la = this.tokenStream.LA(1);
            if(!(_la === 97 || _la === 165 || _la === 222 || _la === 229 || _la === 334 || ((((_la - 427)) & ~0x1F) === 0 && ((1 << (_la - 427)) & 140542465) !== 0) || ((((_la - 460)) & ~0x1F) === 0 && ((1 << (_la - 460)) & 2415983617) !== 0) || _la === 502 || _la === 503)) {
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
        this.enterRule(localContext, 372, FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncParam);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2303;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 268435713) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 193) !== 0) || _la === 113 || ((((_la - 200)) & ~0x1F) === 0 && ((1 << (_la - 200)) & 385) !== 0) || _la === 389 || _la === 413 || _la === 527)) {
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
        this.enterRule(localContext, 374, FlinkSqlParser.RULE_reservedKeywordsNoParamsUsedAsFuncName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2305;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 193) !== 0) || _la === 207 || _la === 208)) {
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
        this.enterRule(localContext, 376, FlinkSqlParser.RULE_reservedKeywordsFollowParamsUsedAsFuncName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2307;
            _la = this.tokenStream.LA(1);
            if(!(_la === 91 || _la === 378 || _la === 379)) {
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
        this.enterRule(localContext, 378, FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2309;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 8396816) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 2147811433) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 25165825) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 134221825) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 337641553) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 873498793) !== 0) || ((((_la - 229)) & ~0x1F) === 0 && ((1 << (_la - 229)) & 81921) !== 0) || ((((_la - 264)) & ~0x1F) === 0 && ((1 << (_la - 264)) & 537530369) !== 0) || ((((_la - 317)) & ~0x1F) === 0 && ((1 << (_la - 317)) & 131185) !== 0) || ((((_la - 357)) & ~0x1F) === 0 && ((1 << (_la - 357)) & 8389763) !== 0) || ((((_la - 395)) & ~0x1F) === 0 && ((1 << (_la - 395)) & 50339865) !== 0) || _la === 436 || _la === 469 || _la === 488 || _la === 502)) {
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
        this.enterRule(localContext, 380, FlinkSqlParser.RULE_nonReservedKeywords);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2311;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 437)) & ~0x1F) === 0 && ((1 << (_la - 437)) & 4294967295) !== 0) || ((((_la - 469)) & ~0x1F) === 0 && ((1 << (_la - 469)) & 4294967295) !== 0) || ((((_la - 501)) & ~0x1F) === 0 && ((1 << (_la - 501)) & 15) !== 0))) {
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
        case 78:
            return this.queryStatement_sempred(localContext as QueryStatementContext, predIndex);
        case 88:
            return this.tableExpression_sempred(localContext as TableExpressionContext, predIndex);
        case 129:
            return this.booleanExpression_sempred(localContext as BooleanExpressionContext, predIndex);
        case 132:
            return this.valueExpression_sempred(localContext as ValueExpressionContext, predIndex);
        case 133:
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
        4,1,541,2314,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        7,186,2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,1,0,5,0,384,
        8,0,10,0,12,0,387,9,0,1,0,1,0,1,1,1,1,3,1,393,8,1,1,1,3,1,396,8,
        1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,410,8,2,1,
        3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,
        4,428,8,4,1,5,1,5,3,5,432,8,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,441,
        8,7,1,7,1,7,1,7,3,7,446,8,7,1,8,1,8,1,8,5,8,451,8,8,10,8,12,8,454,
        9,8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,3,10,464,8,10,1,11,1,11,
        1,11,1,11,1,11,5,11,471,8,11,10,11,12,11,474,9,11,1,12,1,12,1,12,
        1,12,1,12,1,12,1,12,1,12,1,12,3,12,485,8,12,1,12,3,12,488,8,12,1,
        12,1,12,1,12,1,12,1,12,3,12,495,8,12,1,12,3,12,498,8,12,1,12,1,12,
        1,12,1,12,1,12,1,12,3,12,506,8,12,1,12,1,12,3,12,510,8,12,1,12,1,
        12,1,12,3,12,515,8,12,1,12,3,12,518,8,12,1,13,1,13,1,13,1,13,1,13,
        3,13,525,8,13,1,14,1,14,1,14,1,14,1,15,1,15,3,15,533,8,15,1,16,1,
        16,3,16,537,8,16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,
        18,3,18,549,8,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,557,8,18,1,18,
        1,18,3,18,561,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,593,8,18,1,19,3,19,
        596,8,19,1,19,4,19,599,8,19,11,19,12,19,600,1,20,1,20,3,20,605,8,
        20,1,21,1,21,3,21,609,8,21,1,21,1,21,3,21,613,8,21,1,21,1,21,1,21,
        1,21,1,21,5,21,620,8,21,10,21,12,21,623,9,21,1,21,1,21,3,21,627,
        8,21,1,21,1,21,3,21,631,8,21,1,21,1,21,3,21,635,8,21,1,21,1,21,1,
        21,3,21,640,8,21,1,21,3,21,643,8,21,1,21,1,21,3,21,647,8,21,1,22,
        1,22,1,22,3,22,652,8,22,1,22,1,22,1,22,1,22,3,22,658,8,22,1,23,1,
        23,1,23,3,23,663,8,23,1,24,1,24,1,24,3,24,668,8,24,1,24,1,24,3,24,
        672,8,24,1,25,1,25,3,25,676,8,25,1,26,1,26,3,26,680,8,26,1,27,1,
        27,1,27,1,27,5,27,686,8,27,10,27,12,27,689,9,27,1,27,1,27,1,28,1,
        28,1,28,3,28,696,8,28,1,28,1,28,3,28,700,8,28,1,28,1,28,3,28,704,
        8,28,1,28,1,28,3,28,708,8,28,1,28,1,28,3,28,712,8,28,1,28,1,28,3,
        28,716,8,28,1,28,1,28,3,28,720,8,28,1,28,1,28,3,28,724,8,28,1,28,
        1,28,3,28,728,8,28,3,28,730,8,28,1,29,1,29,1,29,1,29,1,30,1,30,1,
        30,1,30,3,30,740,8,30,1,30,1,30,1,31,1,31,1,31,1,31,3,31,748,8,31,
        1,31,1,31,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,
        1,34,1,34,1,34,1,34,1,34,1,34,1,34,5,34,770,8,34,10,34,12,34,773,
        9,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,5,34,784,8,34,
        10,34,12,34,787,9,34,1,34,1,34,3,34,791,8,34,1,35,1,35,3,35,795,
        8,35,1,35,1,35,1,35,1,35,3,35,801,8,35,1,35,3,35,804,8,35,1,35,3,
        35,807,8,35,1,36,1,36,1,36,1,36,1,36,3,36,814,8,36,1,36,3,36,817,
        8,36,1,37,1,37,1,38,1,38,1,38,1,38,1,38,3,38,826,8,38,1,39,1,39,
        1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,3,41,838,8,41,1,41,1,41,
        1,41,1,41,1,41,1,41,1,42,1,42,1,43,1,43,1,43,1,43,1,44,1,44,1,44,
        1,44,1,45,1,45,1,45,1,45,5,45,860,8,45,10,45,12,45,863,9,45,1,45,
        1,45,1,46,1,46,1,46,1,46,1,46,5,46,872,8,46,10,46,12,46,875,9,46,
        1,46,1,46,3,46,879,8,46,1,47,1,47,3,47,883,8,47,1,48,1,48,1,48,1,
        48,5,48,889,8,48,10,48,12,48,892,9,48,1,48,3,48,895,8,48,1,49,1,
        49,1,49,1,49,3,49,901,8,49,1,50,1,50,1,50,1,50,1,50,1,51,1,51,1,
        51,3,51,911,8,51,1,51,1,51,1,51,3,51,916,8,51,1,51,1,51,1,52,1,52,
        3,52,922,8,52,1,52,1,52,3,52,926,8,52,1,52,1,52,3,52,930,8,52,1,
        52,1,52,3,52,934,8,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,3,53,943,
        8,53,1,53,1,53,3,53,947,8,53,1,53,1,53,1,53,1,53,1,53,3,53,954,8,
        53,1,53,3,53,957,8,53,1,54,1,54,1,54,1,54,1,54,1,54,5,54,965,8,54,
        10,54,12,54,968,9,54,1,55,1,55,1,56,1,56,1,56,3,56,975,8,56,1,56,
        1,56,1,56,1,56,1,56,1,56,3,56,983,8,56,1,57,1,57,3,57,987,8,57,1,
        57,1,57,1,57,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,59,1,59,3,
        59,1002,8,59,1,60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,62,1,62,1,
        62,1,63,1,63,1,63,1,63,1,63,1,63,3,63,1021,8,63,1,64,1,64,1,64,1,
        64,1,64,1,65,1,65,1,65,1,65,3,65,1032,8,65,1,65,1,65,3,65,1036,8,
        65,1,65,1,65,1,65,1,65,1,65,3,65,1043,8,65,1,66,1,66,1,66,3,66,1048,
        8,66,1,66,1,66,1,67,1,67,3,67,1054,8,67,1,67,1,67,3,67,1058,8,67,
        1,67,1,67,1,68,1,68,1,68,3,68,1065,8,68,1,68,1,68,3,68,1069,8,68,
        1,69,1,69,3,69,1073,8,69,1,69,1,69,3,69,1077,8,69,1,69,1,69,1,70,
        1,70,1,70,1,70,3,70,1085,8,70,1,70,1,70,3,70,1089,8,70,1,70,1,70,
        1,71,3,71,1094,8,71,1,71,1,71,1,71,1,71,3,71,1100,8,71,1,72,1,72,
        1,72,1,72,3,72,1106,8,72,1,72,3,72,1109,8,72,1,72,1,72,3,72,1113,
        8,72,1,73,1,73,1,73,1,74,1,74,1,74,1,74,5,74,1122,8,74,10,74,12,
        74,1125,9,74,1,75,1,75,1,75,1,75,5,75,1131,8,75,10,75,12,75,1134,
        9,75,1,75,1,75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,4,76,1145,8,76,
        11,76,12,76,1146,1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,77,4,77,1157,
        8,77,11,77,12,77,1158,1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,
        78,1,78,1,78,1,78,1,78,3,78,1174,8,78,1,78,3,78,1177,8,78,1,78,1,
        78,3,78,1181,8,78,1,78,3,78,1184,8,78,3,78,1186,8,78,1,78,1,78,1,
        78,3,78,1191,8,78,1,78,1,78,3,78,1195,8,78,1,78,3,78,1198,8,78,5,
        78,1200,8,78,10,78,12,78,1203,9,78,1,79,1,79,1,79,1,79,5,79,1209,
        8,79,10,79,12,79,1212,9,79,1,80,1,80,1,80,1,80,5,80,1218,8,80,10,
        80,12,80,1221,9,80,1,81,1,81,1,81,1,81,1,81,5,81,1228,8,81,10,81,
        12,81,1231,9,81,1,81,1,81,3,81,1235,8,81,1,81,1,81,1,81,1,81,1,81,
        1,82,1,82,1,83,1,83,3,83,1246,8,83,1,83,3,83,1249,8,83,1,83,3,83,
        1252,8,83,1,83,3,83,1255,8,83,1,83,3,83,1258,8,83,1,83,1,83,1,83,
        1,83,3,83,1264,8,83,1,84,1,84,3,84,1268,8,84,1,84,1,84,1,84,1,84,
        5,84,1274,8,84,10,84,12,84,1277,9,84,3,84,1279,8,84,1,85,1,85,1,
        85,3,85,1284,8,85,1,85,3,85,1287,8,85,1,85,1,85,3,85,1291,8,85,1,
        85,3,85,1294,8,85,3,85,1296,8,85,1,86,1,86,1,86,1,86,1,86,1,86,1,
        86,1,86,1,86,1,86,1,86,1,86,3,86,1310,8,86,1,87,1,87,1,87,1,88,1,
        88,1,88,1,88,5,88,1319,8,88,10,88,12,88,1322,9,88,1,88,1,88,3,88,
        1326,8,88,1,88,1,88,1,88,1,88,1,88,1,88,3,88,1334,8,88,1,88,3,88,
        1337,8,88,1,88,3,88,1340,8,88,1,88,1,88,1,88,3,88,1345,8,88,5,88,
        1347,8,88,10,88,12,88,1350,9,88,1,89,1,89,3,89,1354,8,89,1,90,3,
        90,1357,8,90,1,90,1,90,3,90,1361,8,90,1,90,1,90,3,90,1365,8,90,1,
        90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,5,90,1375,8,90,10,90,12,90,
        1378,9,90,1,90,1,90,1,90,1,90,3,90,1384,8,90,1,90,1,90,1,90,3,90,
        1389,8,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,3,90,1400,
        8,90,1,91,1,91,1,91,1,91,1,91,1,91,1,92,1,92,1,93,1,93,1,93,1,93,
        1,93,1,94,1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,1,95,5,95,1425,
        8,95,10,95,12,95,1428,9,95,1,95,1,95,1,96,1,96,1,97,1,97,1,97,1,
        97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,3,97,1449,
        8,97,1,98,1,98,1,99,1,99,1,99,1,99,1,99,1,100,1,100,1,100,1,100,
        3,100,1462,8,100,1,101,1,101,1,101,1,102,1,102,1,102,1,102,1,102,
        5,102,1472,8,102,10,102,12,102,1475,9,102,1,103,1,103,1,103,1,103,
        1,103,1,103,1,103,1,103,5,103,1485,8,103,10,103,12,103,1488,9,103,
        1,103,1,103,1,103,1,103,1,103,1,103,1,103,5,103,1497,8,103,10,103,
        12,103,1500,9,103,1,103,1,103,1,103,1,103,1,103,1,103,1,103,5,103,
        1509,8,103,10,103,12,103,1512,9,103,1,103,1,103,1,103,3,103,1517,
        8,103,1,104,1,104,1,104,1,105,1,105,1,106,1,106,1,106,1,106,1,106,
        1,106,1,106,1,107,1,107,1,108,1,108,1,109,1,109,1,109,1,110,1,110,
        1,110,1,110,5,110,1542,8,110,10,110,12,110,1545,9,110,1,111,1,111,
        1,111,1,111,1,112,3,112,1552,8,112,1,112,1,112,3,112,1556,8,112,
        1,112,3,112,1559,8,112,1,112,3,112,1562,8,112,1,112,1,112,1,113,
        1,113,1,113,3,113,1569,8,113,1,113,3,113,1572,8,113,1,113,3,113,
        1575,8,113,1,113,3,113,1578,8,113,1,113,3,113,1581,8,113,1,113,3,
        113,1584,8,113,1,113,1,113,1,113,3,113,1589,8,113,1,113,3,113,1592,
        8,113,1,114,1,114,1,114,1,114,1,114,5,114,1599,8,114,10,114,12,114,
        1602,9,114,1,115,1,115,3,115,1606,8,115,1,115,1,115,3,115,1610,8,
        115,1,116,1,116,1,116,3,116,1615,8,116,1,117,1,117,1,117,1,117,3,
        117,1621,8,117,1,117,1,117,1,117,3,117,1626,8,117,5,117,1628,8,117,
        10,117,12,117,1631,9,117,1,118,1,118,1,118,1,118,1,118,1,118,1,118,
        1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,3,118,1649,
        8,118,1,119,1,119,1,119,1,119,5,119,1655,8,119,10,119,12,119,1658,
        9,119,1,120,1,120,1,120,4,120,1663,8,120,11,120,12,120,1664,1,120,
        1,120,3,120,1669,8,120,1,121,1,121,3,121,1673,8,121,1,122,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,3,122,1683,8,122,1,123,1,123,
        1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,
        1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,
        3,123,1709,8,123,1,124,1,124,1,124,1,124,5,124,1715,8,124,10,124,
        12,124,1718,9,124,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,
        1,125,3,125,1729,8,125,1,126,1,126,1,126,1,126,1,126,1,127,1,127,
        1,127,1,128,1,128,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,
        1,129,1,129,3,129,1751,8,129,3,129,1753,8,129,1,129,1,129,1,129,
        1,129,1,129,1,129,1,129,1,129,1,129,3,129,1764,8,129,1,129,5,129,
        1767,8,129,10,129,12,129,1770,9,129,1,130,3,130,1773,8,130,1,130,
        1,130,3,130,1777,8,130,1,130,1,130,1,130,1,130,1,130,3,130,1784,
        8,130,1,130,1,130,1,130,1,130,1,130,5,130,1791,8,130,10,130,12,130,
        1794,9,130,1,130,1,130,1,130,3,130,1799,8,130,1,130,1,130,1,130,
        1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,3,130,1812,8,130,
        1,130,1,130,1,130,1,130,1,130,3,130,1819,8,130,1,130,1,130,1,130,
        3,130,1824,8,130,1,130,1,130,1,130,1,130,3,130,1830,8,130,1,130,
        1,130,1,130,1,130,1,130,3,130,1837,8,130,3,130,1839,8,130,1,131,
        3,131,1842,8,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        5,131,1852,8,131,10,131,12,131,1855,9,131,1,131,1,131,3,131,1859,
        8,131,1,131,3,131,1862,8,131,1,131,1,131,1,131,1,131,3,131,1868,
        8,131,3,131,1870,8,131,1,132,1,132,1,132,1,132,3,132,1876,8,132,
        1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,
        1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,5,132,1897,8,132,
        10,132,12,132,1900,9,132,1,133,1,133,1,133,4,133,1905,8,133,11,133,
        12,133,1906,1,133,1,133,3,133,1911,8,133,1,133,1,133,1,133,1,133,
        1,133,4,133,1918,8,133,11,133,12,133,1919,1,133,1,133,3,133,1924,
        8,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,
        1,133,1,133,1,133,1,133,3,133,1940,8,133,1,133,1,133,1,133,1,133,
        1,133,1,133,1,133,3,133,1949,8,133,1,133,1,133,1,133,1,133,1,133,
        1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,
        1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,3,133,1975,8,133,
        1,133,1,133,1,133,5,133,1980,8,133,10,133,12,133,1983,9,133,3,133,
        1985,8,133,1,133,1,133,3,133,1989,8,133,1,133,1,133,1,133,1,133,
        1,133,1,133,3,133,1997,8,133,1,133,1,133,1,133,1,133,1,133,5,133,
        2004,8,133,10,133,12,133,2007,9,133,1,134,1,134,1,135,1,135,1,135,
        1,135,3,135,2015,8,135,1,136,1,136,1,136,1,136,3,136,2021,8,136,
        1,137,1,137,3,137,2025,8,137,1,138,1,138,1,138,1,138,3,138,2031,
        8,138,1,139,1,139,1,140,1,140,1,141,1,141,3,141,2039,8,141,1,142,
        1,142,1,142,3,142,2044,8,142,1,143,1,143,3,143,2048,8,143,1,144,
        1,144,1,144,4,144,2053,8,144,11,144,12,144,2054,1,145,1,145,1,145,
        3,145,2060,8,145,1,146,1,146,1,146,1,146,1,146,1,147,3,147,2068,
        8,147,1,147,1,147,3,147,2072,8,147,1,148,3,148,2075,8,148,1,148,
        1,148,3,148,2079,8,148,1,149,1,149,1,149,1,150,1,150,4,150,2086,
        8,150,11,150,12,150,2087,1,150,3,150,2091,8,150,1,151,1,151,1,151,
        1,151,1,152,1,152,1,152,5,152,2100,8,152,10,152,12,152,2103,9,152,
        1,153,1,153,1,153,3,153,2108,8,153,1,154,1,154,1,155,1,155,1,156,
        1,156,1,156,1,156,1,156,1,157,1,157,1,158,1,158,1,159,1,159,1,159,
        3,159,2126,8,159,1,160,1,160,1,160,3,160,2131,8,160,1,161,1,161,
        1,161,3,161,2136,8,161,1,161,1,161,1,161,1,161,1,161,3,161,2143,
        8,161,3,161,2145,8,161,1,162,1,162,1,162,3,162,2150,8,162,1,162,
        1,162,1,162,1,162,1,162,3,162,2157,8,162,3,162,2159,8,162,1,163,
        1,163,1,163,3,163,2164,8,163,1,163,1,163,1,163,1,163,1,163,3,163,
        2171,8,163,3,163,2173,8,163,1,164,1,164,1,164,3,164,2178,8,164,1,
        164,1,164,1,164,1,164,1,164,3,164,2185,8,164,3,164,2187,8,164,1,
        165,1,165,1,165,5,165,2192,8,165,10,165,12,165,2195,9,165,1,166,
        1,166,1,166,1,167,1,167,1,167,1,167,1,168,1,168,1,168,1,169,1,169,
        1,169,1,169,5,169,2211,8,169,10,169,12,169,2214,9,169,1,169,1,169,
        1,170,1,170,3,170,2220,8,170,1,170,3,170,2223,8,170,1,171,1,171,
        1,171,3,171,2228,8,171,1,172,1,172,1,172,1,172,3,172,2234,8,172,
        1,173,1,173,1,173,1,173,1,173,1,173,3,173,2242,8,173,1,174,1,174,
        1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,174,
        1,174,3,174,2258,8,174,1,175,1,175,1,175,1,175,1,175,1,175,1,175,
        3,175,2267,8,175,1,176,1,176,1,177,1,177,1,178,1,178,1,178,1,178,
        3,178,2277,8,178,1,178,1,178,1,178,1,178,1,178,3,178,2284,8,178,
        1,178,3,178,2287,8,178,1,179,1,179,1,179,1,180,1,180,1,181,1,181,
        1,182,1,182,1,183,1,183,1,184,1,184,1,185,1,185,1,186,1,186,1,187,
        1,187,1,188,1,188,1,189,1,189,1,190,1,190,1,190,1,2193,5,156,176,
        258,264,266,191,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
        36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,
        80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,
        118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,
        150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,
        182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,
        214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,
        246,248,250,252,254,256,258,260,262,264,266,268,270,272,274,276,
        278,280,282,284,286,288,290,292,294,296,298,300,302,304,306,308,
        310,312,314,316,318,320,322,324,326,328,330,332,334,336,338,340,
        342,344,346,348,350,352,354,356,358,360,362,364,366,368,370,372,
        374,376,378,380,0,47,2,0,109,109,450,450,3,0,45,45,128,128,188,188,
        4,0,42,42,90,90,422,422,464,464,2,0,441,441,447,447,2,0,151,151,
        170,170,2,0,437,437,489,489,2,0,482,485,487,487,3,0,32,32,91,91,
        244,244,11,0,28,29,35,35,46,46,92,92,178,179,344,344,360,360,378,
        378,381,381,387,387,416,417,2,0,433,433,435,435,4,0,101,102,115,
        115,144,144,246,246,2,0,13,13,231,231,2,0,455,455,462,462,3,0,5,
        5,270,270,444,444,3,0,266,266,455,455,462,462,3,0,425,425,458,458,
        477,477,3,0,330,330,465,465,481,481,2,0,440,440,490,490,2,0,183,
        183,265,265,3,0,130,130,180,180,402,402,4,0,152,152,174,174,201,
        201,317,317,3,0,445,445,459,459,499,499,4,0,250,250,446,446,494,
        496,498,498,2,0,74,74,320,320,3,0,459,459,492,492,499,499,2,0,439,
        439,450,450,2,0,457,457,467,467,4,0,140,140,244,244,397,397,404,
        404,2,0,19,19,369,369,2,0,5,5,11,11,2,0,509,509,529,530,4,0,452,
        452,527,527,531,531,534,534,2,0,529,530,532,532,1,0,529,530,1,0,
        538,539,2,0,538,538,541,541,4,0,452,452,527,527,529,531,533,534,
        3,0,241,241,508,509,529,530,2,0,140,140,397,397,2,0,5,5,113,113,
        10,0,97,97,165,165,222,222,229,229,334,334,436,436,470,470,472,472,
        488,488,502,502,15,0,97,97,165,165,222,222,229,229,334,334,427,427,
        436,436,442,442,448,449,454,454,460,460,470,475,488,488,491,491,
        502,503,11,0,5,5,13,13,33,33,78,78,84,85,113,113,200,200,207,208,
        389,389,413,413,527,527,3,0,78,78,84,85,207,208,2,0,91,91,378,379,
        52,0,4,4,13,13,23,23,38,38,41,41,43,44,54,54,56,56,69,69,75,75,98,
        99,107,107,119,119,134,134,139,139,143,143,145,145,160,160,165,165,
        167,167,194,194,197,197,199,199,201,201,205,205,209,209,214,214,
        220,220,222,223,229,229,243,243,245,245,264,264,276,276,281,281,
        283,283,293,293,317,317,321,323,334,334,357,358,364,364,367,367,
        380,380,395,395,398,399,408,408,419,420,436,436,469,469,488,488,
        502,502,1,0,437,504,2521,0,385,1,0,0,0,2,395,1,0,0,0,4,409,1,0,0,
        0,6,411,1,0,0,0,8,427,1,0,0,0,10,431,1,0,0,0,12,433,1,0,0,0,14,436,
        1,0,0,0,16,447,1,0,0,0,18,455,1,0,0,0,20,463,1,0,0,0,22,465,1,0,
        0,0,24,517,1,0,0,0,26,519,1,0,0,0,28,526,1,0,0,0,30,530,1,0,0,0,
        32,534,1,0,0,0,34,538,1,0,0,0,36,592,1,0,0,0,38,598,1,0,0,0,40,604,
        1,0,0,0,42,606,1,0,0,0,44,648,1,0,0,0,46,662,1,0,0,0,48,664,1,0,
        0,0,50,675,1,0,0,0,52,679,1,0,0,0,54,681,1,0,0,0,56,729,1,0,0,0,
        58,731,1,0,0,0,60,735,1,0,0,0,62,743,1,0,0,0,64,751,1,0,0,0,66,755,
        1,0,0,0,68,790,1,0,0,0,70,806,1,0,0,0,72,808,1,0,0,0,74,818,1,0,
        0,0,76,820,1,0,0,0,78,827,1,0,0,0,80,829,1,0,0,0,82,837,1,0,0,0,
        84,845,1,0,0,0,86,847,1,0,0,0,88,851,1,0,0,0,90,855,1,0,0,0,92,878,
        1,0,0,0,94,882,1,0,0,0,96,884,1,0,0,0,98,900,1,0,0,0,100,902,1,0,
        0,0,102,907,1,0,0,0,104,919,1,0,0,0,106,938,1,0,0,0,108,958,1,0,
        0,0,110,969,1,0,0,0,112,971,1,0,0,0,114,984,1,0,0,0,116,991,1,0,
        0,0,118,994,1,0,0,0,120,1003,1,0,0,0,122,1007,1,0,0,0,124,1011,1,
        0,0,0,126,1014,1,0,0,0,128,1022,1,0,0,0,130,1027,1,0,0,0,132,1044,
        1,0,0,0,134,1051,1,0,0,0,136,1061,1,0,0,0,138,1070,1,0,0,0,140,1080,
        1,0,0,0,142,1099,1,0,0,0,144,1101,1,0,0,0,146,1114,1,0,0,0,148,1117,
        1,0,0,0,150,1126,1,0,0,0,152,1137,1,0,0,0,154,1150,1,0,0,0,156,1185,
        1,0,0,0,158,1204,1,0,0,0,160,1213,1,0,0,0,162,1222,1,0,0,0,164,1241,
        1,0,0,0,166,1263,1,0,0,0,168,1265,1,0,0,0,170,1295,1,0,0,0,172,1309,
        1,0,0,0,174,1311,1,0,0,0,176,1325,1,0,0,0,178,1351,1,0,0,0,180,1399,
        1,0,0,0,182,1401,1,0,0,0,184,1407,1,0,0,0,186,1409,1,0,0,0,188,1414,
        1,0,0,0,190,1419,1,0,0,0,192,1431,1,0,0,0,194,1448,1,0,0,0,196,1450,
        1,0,0,0,198,1452,1,0,0,0,200,1461,1,0,0,0,202,1463,1,0,0,0,204,1466,
        1,0,0,0,206,1516,1,0,0,0,208,1518,1,0,0,0,210,1521,1,0,0,0,212,1523,
        1,0,0,0,214,1530,1,0,0,0,216,1532,1,0,0,0,218,1534,1,0,0,0,220,1537,
        1,0,0,0,222,1546,1,0,0,0,224,1551,1,0,0,0,226,1565,1,0,0,0,228,1593,
        1,0,0,0,230,1603,1,0,0,0,232,1611,1,0,0,0,234,1616,1,0,0,0,236,1648,
        1,0,0,0,238,1650,1,0,0,0,240,1659,1,0,0,0,242,1670,1,0,0,0,244,1682,
        1,0,0,0,246,1708,1,0,0,0,248,1710,1,0,0,0,250,1728,1,0,0,0,252,1730,
        1,0,0,0,254,1735,1,0,0,0,256,1738,1,0,0,0,258,1752,1,0,0,0,260,1838,
        1,0,0,0,262,1869,1,0,0,0,264,1875,1,0,0,0,266,1996,1,0,0,0,268,2008,
        1,0,0,0,270,2014,1,0,0,0,272,2020,1,0,0,0,274,2024,1,0,0,0,276,2030,
        1,0,0,0,278,2032,1,0,0,0,280,2034,1,0,0,0,282,2038,1,0,0,0,284,2040,
        1,0,0,0,286,2045,1,0,0,0,288,2052,1,0,0,0,290,2056,1,0,0,0,292,2061,
        1,0,0,0,294,2071,1,0,0,0,296,2074,1,0,0,0,298,2080,1,0,0,0,300,2090,
        1,0,0,0,302,2092,1,0,0,0,304,2096,1,0,0,0,306,2107,1,0,0,0,308,2109,
        1,0,0,0,310,2111,1,0,0,0,312,2113,1,0,0,0,314,2118,1,0,0,0,316,2120,
        1,0,0,0,318,2122,1,0,0,0,320,2127,1,0,0,0,322,2144,1,0,0,0,324,2158,
        1,0,0,0,326,2172,1,0,0,0,328,2186,1,0,0,0,330,2188,1,0,0,0,332,2196,
        1,0,0,0,334,2199,1,0,0,0,336,2203,1,0,0,0,338,2206,1,0,0,0,340,2217,
        1,0,0,0,342,2227,1,0,0,0,344,2233,1,0,0,0,346,2241,1,0,0,0,348,2257,
        1,0,0,0,350,2266,1,0,0,0,352,2268,1,0,0,0,354,2270,1,0,0,0,356,2286,
        1,0,0,0,358,2288,1,0,0,0,360,2291,1,0,0,0,362,2293,1,0,0,0,364,2295,
        1,0,0,0,366,2297,1,0,0,0,368,2299,1,0,0,0,370,2301,1,0,0,0,372,2303,
        1,0,0,0,374,2305,1,0,0,0,376,2307,1,0,0,0,378,2309,1,0,0,0,380,2311,
        1,0,0,0,382,384,3,2,1,0,383,382,1,0,0,0,384,387,1,0,0,0,385,383,
        1,0,0,0,385,386,1,0,0,0,386,388,1,0,0,0,387,385,1,0,0,0,388,389,
        5,0,0,1,389,1,1,0,0,0,390,392,3,4,2,0,391,393,5,521,0,0,392,391,
        1,0,0,0,392,393,1,0,0,0,393,396,1,0,0,0,394,396,3,6,3,0,395,390,
        1,0,0,0,395,394,1,0,0,0,396,3,1,0,0,0,397,410,3,8,4,0,398,410,3,
        10,5,0,399,410,3,12,6,0,400,410,3,14,7,0,401,410,3,20,10,0,402,410,
        3,24,12,0,403,410,3,26,13,0,404,410,3,28,14,0,405,410,3,30,15,0,
        406,410,3,32,16,0,407,410,3,34,17,0,408,410,3,36,18,0,409,397,1,
        0,0,0,409,398,1,0,0,0,409,399,1,0,0,0,409,400,1,0,0,0,409,401,1,
        0,0,0,409,402,1,0,0,0,409,403,1,0,0,0,409,404,1,0,0,0,409,405,1,
        0,0,0,409,406,1,0,0,0,409,407,1,0,0,0,409,408,1,0,0,0,410,5,1,0,
        0,0,411,412,5,521,0,0,412,7,1,0,0,0,413,428,3,40,20,0,414,428,3,
        102,51,0,415,428,3,104,52,0,416,428,3,106,53,0,417,428,3,100,50,
        0,418,428,3,112,56,0,419,428,3,126,63,0,420,428,3,128,64,0,421,428,
        3,130,65,0,422,428,3,132,66,0,423,428,3,134,67,0,424,428,3,136,68,
        0,425,428,3,138,69,0,426,428,3,140,70,0,427,413,1,0,0,0,427,414,
        1,0,0,0,427,415,1,0,0,0,427,416,1,0,0,0,427,417,1,0,0,0,427,418,
        1,0,0,0,427,419,1,0,0,0,427,420,1,0,0,0,427,421,1,0,0,0,427,422,
        1,0,0,0,427,423,1,0,0,0,427,424,1,0,0,0,427,425,1,0,0,0,427,426,
        1,0,0,0,428,9,1,0,0,0,429,432,3,156,78,0,430,432,3,142,71,0,431,
        429,1,0,0,0,431,430,1,0,0,0,432,11,1,0,0,0,433,434,7,0,0,0,434,435,
        3,324,162,0,435,13,1,0,0,0,436,440,5,135,0,0,437,441,3,16,8,0,438,
        439,5,479,0,0,439,441,5,146,0,0,440,437,1,0,0,0,440,438,1,0,0,0,
        440,441,1,0,0,0,441,445,1,0,0,0,442,446,3,10,5,0,443,446,3,144,72,
        0,444,446,3,154,77,0,445,442,1,0,0,0,445,443,1,0,0,0,445,444,1,0,
        0,0,446,15,1,0,0,0,447,452,3,18,9,0,448,449,5,520,0,0,449,451,3,
        18,9,0,450,448,1,0,0,0,451,454,1,0,0,0,452,450,1,0,0,0,452,453,1,
        0,0,0,453,17,1,0,0,0,454,452,1,0,0,0,455,456,7,1,0,0,456,19,1,0,
        0,0,457,458,5,410,0,0,458,459,5,441,0,0,459,464,3,314,157,0,460,
        461,5,410,0,0,461,464,3,318,159,0,462,464,3,22,11,0,463,457,1,0,
        0,0,463,460,1,0,0,0,463,462,1,0,0,0,464,21,1,0,0,0,465,466,5,410,
        0,0,466,467,5,227,0,0,467,472,3,330,165,0,468,469,5,520,0,0,469,
        471,3,330,165,0,470,468,1,0,0,0,471,474,1,0,0,0,472,470,1,0,0,0,
        472,473,1,0,0,0,473,23,1,0,0,0,474,472,1,0,0,0,475,476,5,341,0,0,
        476,518,7,2,0,0,477,478,5,341,0,0,478,479,5,76,0,0,479,518,7,3,0,
        0,480,481,5,341,0,0,481,484,5,374,0,0,482,483,7,4,0,0,483,485,3,
        318,159,0,484,482,1,0,0,0,484,485,1,0,0,0,485,487,1,0,0,0,486,488,
        3,262,131,0,487,486,1,0,0,0,487,488,1,0,0,0,488,518,1,0,0,0,489,
        490,5,341,0,0,490,491,5,58,0,0,491,494,7,4,0,0,492,495,3,326,163,
        0,493,495,3,324,162,0,494,492,1,0,0,0,494,493,1,0,0,0,495,497,1,
        0,0,0,496,498,3,262,131,0,497,496,1,0,0,0,497,498,1,0,0,0,498,518,
        1,0,0,0,499,500,5,341,0,0,500,505,5,72,0,0,501,502,5,373,0,0,502,
        506,3,324,162,0,503,504,5,501,0,0,504,506,3,326,163,0,505,501,1,
        0,0,0,505,503,1,0,0,0,506,518,1,0,0,0,507,509,5,341,0,0,508,510,
        5,411,0,0,509,508,1,0,0,0,509,510,1,0,0,0,510,511,1,0,0,0,511,518,
        5,154,0,0,512,514,5,341,0,0,513,515,5,152,0,0,514,513,1,0,0,0,514,
        515,1,0,0,0,515,516,1,0,0,0,516,518,5,227,0,0,517,475,1,0,0,0,517,
        477,1,0,0,0,517,480,1,0,0,0,517,489,1,0,0,0,517,499,1,0,0,0,517,
        507,1,0,0,0,517,512,1,0,0,0,518,25,1,0,0,0,519,520,5,468,0,0,520,
        521,5,226,0,0,521,524,3,330,165,0,522,523,5,433,0,0,523,525,3,338,
        169,0,524,522,1,0,0,0,524,525,1,0,0,0,525,27,1,0,0,0,526,527,5,500,
        0,0,527,528,5,226,0,0,528,529,3,330,165,0,529,29,1,0,0,0,530,532,
        5,340,0,0,531,533,3,340,170,0,532,531,1,0,0,0,532,533,1,0,0,0,533,
        31,1,0,0,0,534,536,5,312,0,0,535,537,3,342,171,0,536,535,1,0,0,0,
        536,537,1,0,0,0,537,33,1,0,0,0,538,539,7,5,0,0,539,540,5,463,0,0,
        540,541,3,110,55,0,541,35,1,0,0,0,542,543,5,437,0,0,543,544,5,463,
        0,0,544,545,5,433,0,0,545,548,3,38,19,0,546,547,5,17,0,0,547,549,
        3,330,165,0,548,546,1,0,0,0,548,549,1,0,0,0,549,593,1,0,0,0,550,
        551,5,437,0,0,551,552,5,456,0,0,552,553,5,433,0,0,553,556,3,38,19,
        0,554,555,5,17,0,0,555,557,3,330,165,0,556,554,1,0,0,0,556,557,1,
        0,0,0,557,560,1,0,0,0,558,559,5,311,0,0,559,561,3,330,165,0,560,
        558,1,0,0,0,560,561,1,0,0,0,561,593,1,0,0,0,562,563,5,437,0,0,563,
        564,7,6,0,0,564,565,5,433,0,0,565,566,3,38,19,0,566,567,5,311,0,
        0,567,568,3,330,165,0,568,593,1,0,0,0,569,570,5,437,0,0,570,571,
        5,486,0,0,571,593,3,38,19,0,572,573,5,437,0,0,573,574,5,453,0,0,
        574,575,5,456,0,0,575,576,5,433,0,0,576,577,3,38,19,0,577,578,5,
        311,0,0,578,579,3,330,165,0,579,580,5,466,0,0,580,581,3,330,165,
        0,581,593,1,0,0,0,582,583,5,437,0,0,583,584,5,443,0,0,584,585,5,
        456,0,0,585,586,5,433,0,0,586,587,3,38,19,0,587,588,5,146,0,0,588,
        589,3,330,165,0,589,590,5,17,0,0,590,591,3,330,165,0,591,593,1,0,
        0,0,592,542,1,0,0,0,592,550,1,0,0,0,592,562,1,0,0,0,592,569,1,0,
        0,0,592,572,1,0,0,0,592,582,1,0,0,0,593,37,1,0,0,0,594,596,5,534,
        0,0,595,594,1,0,0,0,595,596,1,0,0,0,596,597,1,0,0,0,597,599,3,330,
        165,0,598,595,1,0,0,0,599,600,1,0,0,0,600,598,1,0,0,0,600,601,1,
        0,0,0,601,39,1,0,0,0,602,605,3,42,21,0,603,605,3,44,22,0,604,602,
        1,0,0,0,604,603,1,0,0,0,605,41,1,0,0,0,606,608,5,72,0,0,607,609,
        5,497,0,0,608,607,1,0,0,0,608,609,1,0,0,0,609,610,1,0,0,0,610,612,
        5,373,0,0,611,613,3,334,167,0,612,611,1,0,0,0,612,613,1,0,0,0,613,
        614,1,0,0,0,614,615,3,322,161,0,615,616,5,516,0,0,616,621,3,46,23,
        0,617,618,5,520,0,0,618,620,3,46,23,0,619,617,1,0,0,0,620,623,1,
        0,0,0,621,619,1,0,0,0,621,622,1,0,0,0,622,626,1,0,0,0,623,621,1,
        0,0,0,624,625,5,520,0,0,625,627,3,80,40,0,626,624,1,0,0,0,626,627,
        1,0,0,0,627,630,1,0,0,0,628,629,5,520,0,0,629,631,3,82,41,0,630,
        628,1,0,0,0,630,631,1,0,0,0,631,634,1,0,0,0,632,633,5,520,0,0,633,
        635,3,86,43,0,634,632,1,0,0,0,634,635,1,0,0,0,635,636,1,0,0,0,636,
        639,5,517,0,0,637,638,5,59,0,0,638,640,5,537,0,0,639,637,1,0,0,0,
        639,640,1,0,0,0,640,642,1,0,0,0,641,643,3,88,44,0,642,641,1,0,0,
        0,642,643,1,0,0,0,643,644,1,0,0,0,644,646,3,332,166,0,645,647,3,
        96,48,0,646,645,1,0,0,0,646,647,1,0,0,0,647,43,1,0,0,0,648,649,5,
        72,0,0,649,651,5,373,0,0,650,652,3,334,167,0,651,650,1,0,0,0,651,
        652,1,0,0,0,652,653,1,0,0,0,653,654,3,322,161,0,654,657,3,332,166,
        0,655,656,5,17,0,0,656,658,3,156,78,0,657,655,1,0,0,0,657,658,1,
        0,0,0,658,45,1,0,0,0,659,663,3,48,24,0,660,663,3,72,36,0,661,663,
        3,76,38,0,662,659,1,0,0,0,662,660,1,0,0,0,662,661,1,0,0,0,663,47,
        1,0,0,0,664,665,3,50,25,0,665,667,3,56,28,0,666,668,3,70,35,0,667,
        666,1,0,0,0,667,668,1,0,0,0,668,671,1,0,0,0,669,670,5,59,0,0,670,
        672,5,537,0,0,671,669,1,0,0,0,671,672,1,0,0,0,672,49,1,0,0,0,673,
        676,3,330,165,0,674,676,3,256,128,0,675,673,1,0,0,0,675,674,1,0,
        0,0,676,51,1,0,0,0,677,680,3,330,165,0,678,680,4,26,0,0,679,677,
        1,0,0,0,679,678,1,0,0,0,680,53,1,0,0,0,681,682,5,516,0,0,682,687,
        3,52,26,0,683,684,5,520,0,0,684,686,3,52,26,0,685,683,1,0,0,0,686,
        689,1,0,0,0,687,685,1,0,0,0,687,688,1,0,0,0,688,690,1,0,0,0,689,
        687,1,0,0,0,690,691,5,517,0,0,691,55,1,0,0,0,692,730,7,7,0,0,693,
        695,7,8,0,0,694,696,3,58,29,0,695,694,1,0,0,0,695,696,1,0,0,0,696,
        730,1,0,0,0,697,699,5,379,0,0,698,700,3,58,29,0,699,698,1,0,0,0,
        699,700,1,0,0,0,700,707,1,0,0,0,701,703,7,9,0,0,702,704,5,206,0,
        0,703,702,1,0,0,0,703,704,1,0,0,0,704,705,1,0,0,0,705,706,5,378,
        0,0,706,708,5,504,0,0,707,701,1,0,0,0,707,708,1,0,0,0,708,730,1,
        0,0,0,709,711,7,10,0,0,710,712,3,60,30,0,711,710,1,0,0,0,711,712,
        1,0,0,0,712,730,1,0,0,0,713,715,7,11,0,0,714,716,3,64,32,0,715,714,
        1,0,0,0,715,716,1,0,0,0,716,730,1,0,0,0,717,719,5,469,0,0,718,720,
        3,66,33,0,719,718,1,0,0,0,719,720,1,0,0,0,720,730,1,0,0,0,721,723,
        5,321,0,0,722,724,3,68,34,0,723,722,1,0,0,0,723,724,1,0,0,0,724,
        730,1,0,0,0,725,727,5,294,0,0,726,728,3,62,31,0,727,726,1,0,0,0,
        727,728,1,0,0,0,728,730,1,0,0,0,729,692,1,0,0,0,729,693,1,0,0,0,
        729,697,1,0,0,0,729,709,1,0,0,0,729,713,1,0,0,0,729,717,1,0,0,0,
        729,721,1,0,0,0,729,725,1,0,0,0,730,57,1,0,0,0,731,732,5,516,0,0,
        732,733,3,362,181,0,733,734,5,517,0,0,734,59,1,0,0,0,735,736,5,516,
        0,0,736,739,3,362,181,0,737,738,5,520,0,0,738,740,3,362,181,0,739,
        737,1,0,0,0,739,740,1,0,0,0,740,741,1,0,0,0,741,742,5,517,0,0,742,
        61,1,0,0,0,743,744,5,516,0,0,744,747,3,360,180,0,745,746,5,520,0,
        0,746,748,3,360,180,0,747,745,1,0,0,0,747,748,1,0,0,0,748,749,1,
        0,0,0,749,750,5,517,0,0,750,63,1,0,0,0,751,752,5,507,0,0,752,753,
        3,56,28,0,753,754,5,506,0,0,754,65,1,0,0,0,755,756,5,507,0,0,756,
        757,3,56,28,0,757,758,5,520,0,0,758,759,3,56,28,0,759,760,1,0,0,
        0,760,761,5,506,0,0,761,67,1,0,0,0,762,763,5,507,0,0,763,764,3,52,
        26,0,764,771,3,56,28,0,765,766,5,520,0,0,766,767,3,52,26,0,767,768,
        3,56,28,0,768,770,1,0,0,0,769,765,1,0,0,0,770,773,1,0,0,0,771,769,
        1,0,0,0,771,772,1,0,0,0,772,774,1,0,0,0,773,771,1,0,0,0,774,775,
        5,506,0,0,775,791,1,0,0,0,776,777,5,516,0,0,777,778,3,52,26,0,778,
        785,3,56,28,0,779,780,5,520,0,0,780,781,3,52,26,0,781,782,3,56,28,
        0,782,784,1,0,0,0,783,779,1,0,0,0,784,787,1,0,0,0,785,783,1,0,0,
        0,785,786,1,0,0,0,786,788,1,0,0,0,787,785,1,0,0,0,788,789,5,517,
        0,0,789,791,1,0,0,0,790,762,1,0,0,0,790,776,1,0,0,0,791,69,1,0,0,
        0,792,793,5,64,0,0,793,795,3,84,42,0,794,792,1,0,0,0,794,795,1,0,
        0,0,795,796,1,0,0,0,796,797,5,288,0,0,797,800,5,466,0,0,798,799,
        5,241,0,0,799,801,5,125,0,0,800,798,1,0,0,0,800,801,1,0,0,0,801,
        807,1,0,0,0,802,804,5,241,0,0,803,802,1,0,0,0,803,804,1,0,0,0,804,
        805,1,0,0,0,805,807,5,244,0,0,806,794,1,0,0,0,806,803,1,0,0,0,807,
        71,1,0,0,0,808,809,3,50,25,0,809,810,3,56,28,0,810,813,5,218,0,0,
        811,812,5,151,0,0,812,814,3,74,37,0,813,811,1,0,0,0,813,814,1,0,
        0,0,814,816,1,0,0,0,815,817,5,423,0,0,816,815,1,0,0,0,816,817,1,
        0,0,0,817,73,1,0,0,0,818,819,5,537,0,0,819,75,1,0,0,0,820,821,3,
        50,25,0,821,822,5,17,0,0,822,825,3,78,39,0,823,824,5,59,0,0,824,
        826,5,537,0,0,825,823,1,0,0,0,825,826,1,0,0,0,826,77,1,0,0,0,827,
        828,3,256,128,0,828,79,1,0,0,0,829,830,5,424,0,0,830,831,5,146,0,
        0,831,832,3,52,26,0,832,833,5,17,0,0,833,834,3,256,128,0,834,81,
        1,0,0,0,835,836,5,64,0,0,836,838,3,84,42,0,837,835,1,0,0,0,837,838,
        1,0,0,0,838,839,1,0,0,0,839,840,5,288,0,0,840,841,5,466,0,0,841,
        842,3,54,27,0,842,843,5,241,0,0,843,844,5,125,0,0,844,83,1,0,0,0,
        845,846,3,306,153,0,846,85,1,0,0,0,847,848,5,277,0,0,848,849,5,146,
        0,0,849,850,5,371,0,0,850,87,1,0,0,0,851,852,5,269,0,0,852,853,5,
        34,0,0,853,854,3,90,45,0,854,89,1,0,0,0,855,856,5,516,0,0,856,861,
        3,92,46,0,857,858,5,520,0,0,858,860,3,92,46,0,859,857,1,0,0,0,860,
        863,1,0,0,0,861,859,1,0,0,0,861,862,1,0,0,0,862,864,1,0,0,0,863,
        861,1,0,0,0,864,865,5,517,0,0,865,91,1,0,0,0,866,879,3,52,26,0,867,
        868,5,516,0,0,868,873,3,94,47,0,869,870,5,520,0,0,870,872,3,94,47,
        0,871,869,1,0,0,0,872,875,1,0,0,0,873,871,1,0,0,0,873,874,1,0,0,
        0,874,876,1,0,0,0,875,873,1,0,0,0,876,877,5,517,0,0,877,879,1,0,
        0,0,878,866,1,0,0,0,878,867,1,0,0,0,879,93,1,0,0,0,880,883,3,282,
        141,0,881,883,3,356,178,0,882,880,1,0,0,0,882,881,1,0,0,0,883,95,
        1,0,0,0,884,885,5,202,0,0,885,894,3,324,162,0,886,890,5,516,0,0,
        887,889,3,98,49,0,888,887,1,0,0,0,889,892,1,0,0,0,890,888,1,0,0,
        0,890,891,1,0,0,0,891,893,1,0,0,0,892,890,1,0,0,0,893,895,5,517,
        0,0,894,886,1,0,0,0,894,895,1,0,0,0,895,97,1,0,0,0,896,897,7,12,
        0,0,897,901,7,13,0,0,898,899,7,14,0,0,899,901,7,15,0,0,900,896,1,
        0,0,0,900,898,1,0,0,0,901,99,1,0,0,0,902,903,5,72,0,0,903,904,5,
        441,0,0,904,905,3,316,158,0,905,906,3,332,166,0,906,101,1,0,0,0,
        907,908,5,72,0,0,908,910,5,447,0,0,909,911,3,334,167,0,910,909,1,
        0,0,0,910,911,1,0,0,0,911,912,1,0,0,0,912,915,3,320,160,0,913,914,
        5,59,0,0,914,916,5,537,0,0,915,913,1,0,0,0,915,916,1,0,0,0,916,917,
        1,0,0,0,917,918,3,332,166,0,918,103,1,0,0,0,919,921,5,72,0,0,920,
        922,5,497,0,0,921,920,1,0,0,0,921,922,1,0,0,0,922,923,1,0,0,0,923,
        925,5,501,0,0,924,926,3,334,167,0,925,924,1,0,0,0,925,926,1,0,0,
        0,926,927,1,0,0,0,927,929,3,328,164,0,928,930,3,54,27,0,929,928,
        1,0,0,0,929,930,1,0,0,0,930,933,1,0,0,0,931,932,5,59,0,0,932,934,
        5,537,0,0,933,931,1,0,0,0,933,934,1,0,0,0,934,935,1,0,0,0,935,936,
        5,17,0,0,936,937,3,156,78,0,937,105,1,0,0,0,938,942,5,72,0,0,939,
        943,5,497,0,0,940,941,5,497,0,0,941,943,5,370,0,0,942,939,1,0,0,
        0,942,940,1,0,0,0,942,943,1,0,0,0,943,944,1,0,0,0,944,946,5,153,
        0,0,945,947,3,334,167,0,946,945,1,0,0,0,946,947,1,0,0,0,947,948,
        1,0,0,0,948,949,3,268,134,0,949,950,5,17,0,0,950,953,3,306,153,0,
        951,952,5,195,0,0,952,954,7,16,0,0,953,951,1,0,0,0,953,954,1,0,0,
        0,954,956,1,0,0,0,955,957,3,108,54,0,956,955,1,0,0,0,956,957,1,0,
        0,0,957,107,1,0,0,0,958,959,5,412,0,0,959,960,5,463,0,0,960,966,
        3,110,55,0,961,962,5,520,0,0,962,963,5,463,0,0,963,965,3,110,55,
        0,964,961,1,0,0,0,965,968,1,0,0,0,966,964,1,0,0,0,966,967,1,0,0,
        0,967,109,1,0,0,0,968,966,1,0,0,0,969,970,5,537,0,0,970,111,1,0,
        0,0,971,972,5,8,0,0,972,974,5,373,0,0,973,975,3,336,168,0,974,973,
        1,0,0,0,974,975,1,0,0,0,975,976,1,0,0,0,976,982,3,324,162,0,977,
        983,3,114,57,0,978,983,3,116,58,0,979,983,3,118,59,0,980,983,3,120,
        60,0,981,983,3,122,61,0,982,977,1,0,0,0,982,978,1,0,0,0,982,979,
        1,0,0,0,982,980,1,0,0,0,982,981,1,0,0,0,983,113,1,0,0,0,984,986,
        5,311,0,0,985,987,3,330,165,0,986,985,1,0,0,0,986,987,1,0,0,0,987,
        988,1,0,0,0,988,989,5,388,0,0,989,990,3,330,165,0,990,115,1,0,0,
        0,991,992,5,340,0,0,992,993,3,338,169,0,993,117,1,0,0,0,994,995,
        5,437,0,0,995,996,5,64,0,0,996,997,3,84,42,0,997,998,5,288,0,0,998,
        999,5,466,0,0,999,1001,3,54,27,0,1000,1002,3,124,62,0,1001,1000,
        1,0,0,0,1001,1002,1,0,0,0,1002,119,1,0,0,0,1003,1004,5,116,0,0,1004,
        1005,5,64,0,0,1005,1006,3,84,42,0,1006,121,1,0,0,0,1007,1008,5,437,
        0,0,1008,1009,5,403,0,0,1009,1010,3,54,27,0,1010,123,1,0,0,0,1011,
        1012,5,241,0,0,1012,1013,5,125,0,0,1013,125,1,0,0,0,1014,1015,5,
        8,0,0,1015,1016,5,501,0,0,1016,1020,3,326,163,0,1017,1021,3,114,
        57,0,1018,1019,5,17,0,0,1019,1021,3,156,78,0,1020,1017,1,0,0,0,1020,
        1018,1,0,0,0,1021,127,1,0,0,0,1022,1023,5,8,0,0,1023,1024,5,447,
        0,0,1024,1025,3,318,159,0,1025,1026,3,116,58,0,1026,129,1,0,0,0,
        1027,1031,5,8,0,0,1028,1032,5,497,0,0,1029,1030,5,497,0,0,1030,1032,
        5,370,0,0,1031,1028,1,0,0,0,1031,1029,1,0,0,0,1031,1032,1,0,0,0,
        1032,1033,1,0,0,0,1033,1035,5,153,0,0,1034,1036,3,336,168,0,1035,
        1034,1,0,0,0,1035,1036,1,0,0,0,1036,1037,1,0,0,0,1037,1038,3,270,
        135,0,1038,1039,5,17,0,0,1039,1042,3,306,153,0,1040,1041,5,195,0,
        0,1041,1043,7,16,0,0,1042,1040,1,0,0,0,1042,1043,1,0,0,0,1043,131,
        1,0,0,0,1044,1045,5,116,0,0,1045,1047,5,441,0,0,1046,1048,3,336,
        168,0,1047,1046,1,0,0,0,1047,1048,1,0,0,0,1048,1049,1,0,0,0,1049,
        1050,3,314,157,0,1050,133,1,0,0,0,1051,1053,5,116,0,0,1052,1054,
        5,497,0,0,1053,1052,1,0,0,0,1053,1054,1,0,0,0,1054,1055,1,0,0,0,
        1055,1057,5,373,0,0,1056,1058,3,336,168,0,1057,1056,1,0,0,0,1057,
        1058,1,0,0,0,1058,1059,1,0,0,0,1059,1060,3,324,162,0,1060,135,1,
        0,0,0,1061,1062,5,116,0,0,1062,1064,5,447,0,0,1063,1065,3,336,168,
        0,1064,1063,1,0,0,0,1064,1065,1,0,0,0,1065,1066,1,0,0,0,1066,1068,
        3,318,159,0,1067,1069,7,17,0,0,1068,1067,1,0,0,0,1068,1069,1,0,0,
        0,1069,137,1,0,0,0,1070,1072,5,116,0,0,1071,1073,5,497,0,0,1072,
        1071,1,0,0,0,1072,1073,1,0,0,0,1073,1074,1,0,0,0,1074,1076,5,501,
        0,0,1075,1077,3,336,168,0,1076,1075,1,0,0,0,1076,1077,1,0,0,0,1077,
        1078,1,0,0,0,1078,1079,3,326,163,0,1079,139,1,0,0,0,1080,1084,5,
        116,0,0,1081,1085,5,497,0,0,1082,1083,5,497,0,0,1083,1085,5,370,
        0,0,1084,1081,1,0,0,0,1084,1082,1,0,0,0,1084,1085,1,0,0,0,1085,1086,
        1,0,0,0,1086,1088,5,153,0,0,1087,1089,3,336,168,0,1088,1087,1,0,
        0,0,1088,1089,1,0,0,0,1089,1090,1,0,0,0,1090,1091,3,270,135,0,1091,
        141,1,0,0,0,1092,1094,5,132,0,0,1093,1092,1,0,0,0,1093,1094,1,0,
        0,0,1094,1095,1,0,0,0,1095,1100,3,144,72,0,1096,1100,3,152,76,0,
        1097,1098,5,132,0,0,1098,1100,3,154,77,0,1099,1093,1,0,0,0,1099,
        1096,1,0,0,0,1099,1097,1,0,0,0,1100,143,1,0,0,0,1101,1102,5,177,
        0,0,1102,1103,7,18,0,0,1103,1112,3,324,162,0,1104,1106,3,146,73,
        0,1105,1104,1,0,0,0,1105,1106,1,0,0,0,1106,1108,1,0,0,0,1107,1109,
        3,54,27,0,1108,1107,1,0,0,0,1108,1109,1,0,0,0,1109,1110,1,0,0,0,
        1110,1113,3,156,78,0,1111,1113,3,148,74,0,1112,1105,1,0,0,0,1112,
        1111,1,0,0,0,1113,145,1,0,0,0,1114,1115,5,268,0,0,1115,1116,3,338,
        169,0,1116,147,1,0,0,0,1117,1118,5,414,0,0,1118,1123,3,150,75,0,
        1119,1120,5,520,0,0,1120,1122,3,150,75,0,1121,1119,1,0,0,0,1122,
        1125,1,0,0,0,1123,1121,1,0,0,0,1123,1124,1,0,0,0,1124,149,1,0,0,
        0,1125,1123,1,0,0,0,1126,1127,5,516,0,0,1127,1132,3,356,178,0,1128,
        1129,5,520,0,0,1129,1131,3,356,178,0,1130,1128,1,0,0,0,1131,1134,
        1,0,0,0,1132,1130,1,0,0,0,1132,1133,1,0,0,0,1133,1135,1,0,0,0,1134,
        1132,1,0,0,0,1135,1136,5,517,0,0,1136,151,1,0,0,0,1137,1138,5,24,
        0,0,1138,1139,5,354,0,0,1139,1140,5,340,0,0,1140,1144,5,521,0,0,
        1141,1142,3,144,72,0,1142,1143,5,521,0,0,1143,1145,1,0,0,0,1144,
        1141,1,0,0,0,1145,1146,1,0,0,0,1146,1144,1,0,0,0,1146,1147,1,0,0,
        0,1147,1148,1,0,0,0,1148,1149,5,122,0,0,1149,153,1,0,0,0,1150,1151,
        5,354,0,0,1151,1152,5,340,0,0,1152,1156,5,24,0,0,1153,1154,3,144,
        72,0,1154,1155,5,521,0,0,1155,1157,1,0,0,0,1156,1153,1,0,0,0,1157,
        1158,1,0,0,0,1158,1156,1,0,0,0,1158,1159,1,0,0,0,1159,1160,1,0,0,
        0,1160,1161,5,122,0,0,1161,155,1,0,0,0,1162,1163,6,78,-1,0,1163,
        1186,3,158,79,0,1164,1165,3,160,80,0,1165,1166,3,156,78,5,1166,1186,
        1,0,0,0,1167,1168,5,516,0,0,1168,1169,3,156,78,0,1169,1170,5,517,
        0,0,1170,1186,1,0,0,0,1171,1173,3,168,84,0,1172,1174,3,228,114,0,
        1173,1172,1,0,0,0,1173,1174,1,0,0,0,1174,1176,1,0,0,0,1175,1177,
        3,232,116,0,1176,1175,1,0,0,0,1176,1177,1,0,0,0,1177,1186,1,0,0,
        0,1178,1180,3,166,83,0,1179,1181,3,228,114,0,1180,1179,1,0,0,0,1180,
        1181,1,0,0,0,1181,1183,1,0,0,0,1182,1184,3,232,116,0,1183,1182,1,
        0,0,0,1183,1184,1,0,0,0,1184,1186,1,0,0,0,1185,1162,1,0,0,0,1185,
        1164,1,0,0,0,1185,1167,1,0,0,0,1185,1171,1,0,0,0,1185,1178,1,0,0,
        0,1186,1201,1,0,0,0,1187,1188,10,3,0,0,1188,1190,7,19,0,0,1189,1191,
        5,5,0,0,1190,1189,1,0,0,0,1190,1191,1,0,0,0,1191,1192,1,0,0,0,1192,
        1194,3,156,78,0,1193,1195,3,228,114,0,1194,1193,1,0,0,0,1194,1195,
        1,0,0,0,1195,1197,1,0,0,0,1196,1198,3,232,116,0,1197,1196,1,0,0,
        0,1197,1198,1,0,0,0,1198,1200,1,0,0,0,1199,1187,1,0,0,0,1200,1203,
        1,0,0,0,1201,1199,1,0,0,0,1201,1202,1,0,0,0,1202,157,1,0,0,0,1203,
        1201,1,0,0,0,1204,1205,5,414,0,0,1205,1210,3,256,128,0,1206,1207,
        5,520,0,0,1207,1209,3,256,128,0,1208,1206,1,0,0,0,1209,1212,1,0,
        0,0,1210,1208,1,0,0,0,1210,1211,1,0,0,0,1211,159,1,0,0,0,1212,1210,
        1,0,0,0,1213,1214,5,433,0,0,1214,1219,3,162,81,0,1215,1216,5,520,
        0,0,1216,1218,3,162,81,0,1217,1215,1,0,0,0,1218,1221,1,0,0,0,1219,
        1217,1,0,0,0,1219,1220,1,0,0,0,1220,161,1,0,0,0,1221,1219,1,0,0,
        0,1222,1234,3,164,82,0,1223,1224,5,516,0,0,1224,1229,3,52,26,0,1225,
        1226,5,520,0,0,1226,1228,3,52,26,0,1227,1225,1,0,0,0,1228,1231,1,
        0,0,0,1229,1227,1,0,0,0,1229,1230,1,0,0,0,1230,1232,1,0,0,0,1231,
        1229,1,0,0,0,1232,1233,5,517,0,0,1233,1235,1,0,0,0,1234,1223,1,0,
        0,0,1234,1235,1,0,0,0,1235,1236,1,0,0,0,1236,1237,5,17,0,0,1237,
        1238,5,516,0,0,1238,1239,3,156,78,0,1239,1240,5,517,0,0,1240,163,
        1,0,0,0,1241,1242,3,306,153,0,1242,165,1,0,0,0,1243,1245,3,168,84,
        0,1244,1246,3,174,87,0,1245,1244,1,0,0,0,1245,1246,1,0,0,0,1246,
        1248,1,0,0,0,1247,1249,3,202,101,0,1248,1247,1,0,0,0,1248,1249,1,
        0,0,0,1249,1251,1,0,0,0,1250,1252,3,204,102,0,1251,1250,1,0,0,0,
        1251,1252,1,0,0,0,1252,1254,1,0,0,0,1253,1255,3,218,109,0,1254,1253,
        1,0,0,0,1254,1255,1,0,0,0,1255,1257,1,0,0,0,1256,1258,3,220,110,
        0,1257,1256,1,0,0,0,1257,1258,1,0,0,0,1258,1264,1,0,0,0,1259,1260,
        3,168,84,0,1260,1261,3,174,87,0,1261,1262,3,226,113,0,1262,1264,
        1,0,0,0,1263,1243,1,0,0,0,1263,1259,1,0,0,0,1264,167,1,0,0,0,1265,
        1267,5,336,0,0,1266,1268,3,366,183,0,1267,1266,1,0,0,0,1267,1268,
        1,0,0,0,1268,1278,1,0,0,0,1269,1279,5,527,0,0,1270,1275,3,170,85,
        0,1271,1272,5,520,0,0,1272,1274,3,170,85,0,1273,1271,1,0,0,0,1274,
        1277,1,0,0,0,1275,1273,1,0,0,0,1275,1276,1,0,0,0,1276,1279,1,0,0,
        0,1277,1275,1,0,0,0,1278,1269,1,0,0,0,1278,1270,1,0,0,0,1279,169,
        1,0,0,0,1280,1296,3,172,86,0,1281,1286,3,256,128,0,1282,1284,5,17,
        0,0,1283,1282,1,0,0,0,1283,1284,1,0,0,0,1284,1285,1,0,0,0,1285,1287,
        3,52,26,0,1286,1283,1,0,0,0,1286,1287,1,0,0,0,1287,1296,1,0,0,0,
        1288,1293,3,52,26,0,1289,1291,5,17,0,0,1290,1289,1,0,0,0,1290,1291,
        1,0,0,0,1291,1292,1,0,0,0,1292,1294,3,256,128,0,1293,1290,1,0,0,
        0,1293,1294,1,0,0,0,1294,1296,1,0,0,0,1295,1280,1,0,0,0,1295,1281,
        1,0,0,0,1295,1288,1,0,0,0,1296,171,1,0,0,0,1297,1298,3,266,133,0,
        1298,1299,5,262,0,0,1299,1300,3,224,112,0,1300,1301,5,17,0,0,1301,
        1302,3,306,153,0,1302,1310,1,0,0,0,1303,1304,3,266,133,0,1304,1305,
        5,262,0,0,1305,1306,3,298,149,0,1306,1307,5,17,0,0,1307,1308,3,306,
        153,0,1308,1310,1,0,0,0,1309,1297,1,0,0,0,1309,1303,1,0,0,0,1310,
        173,1,0,0,0,1311,1312,5,151,0,0,1312,1313,3,176,88,0,1313,175,1,
        0,0,0,1314,1315,6,88,-1,0,1315,1320,3,178,89,0,1316,1317,5,520,0,
        0,1317,1319,3,178,89,0,1318,1316,1,0,0,0,1319,1322,1,0,0,0,1320,
        1318,1,0,0,0,1320,1321,1,0,0,0,1321,1326,1,0,0,0,1322,1320,1,0,0,
        0,1323,1326,3,186,93,0,1324,1326,3,188,94,0,1325,1314,1,0,0,0,1325,
        1323,1,0,0,0,1325,1324,1,0,0,0,1326,1348,1,0,0,0,1327,1328,10,3,
        0,0,1328,1329,5,73,0,0,1329,1330,5,185,0,0,1330,1347,3,176,88,4,
        1331,1333,10,4,0,0,1332,1334,5,233,0,0,1333,1332,1,0,0,0,1333,1334,
        1,0,0,0,1334,1336,1,0,0,0,1335,1337,7,20,0,0,1336,1335,1,0,0,0,1336,
        1337,1,0,0,0,1337,1339,1,0,0,0,1338,1340,5,261,0,0,1339,1338,1,0,
        0,0,1339,1340,1,0,0,0,1340,1341,1,0,0,0,1341,1342,5,185,0,0,1342,
        1344,3,176,88,0,1343,1345,3,200,100,0,1344,1343,1,0,0,0,1344,1345,
        1,0,0,0,1345,1347,1,0,0,0,1346,1327,1,0,0,0,1346,1331,1,0,0,0,1347,
        1350,1,0,0,0,1348,1346,1,0,0,0,1348,1349,1,0,0,0,1349,177,1,0,0,
        0,1350,1348,1,0,0,0,1351,1353,3,180,90,0,1352,1354,3,296,148,0,1353,
        1352,1,0,0,0,1353,1354,1,0,0,0,1354,179,1,0,0,0,1355,1357,5,373,
        0,0,1356,1355,1,0,0,0,1356,1357,1,0,0,0,1357,1358,1,0,0,0,1358,1360,
        3,324,162,0,1359,1361,3,182,91,0,1360,1359,1,0,0,0,1360,1361,1,0,
        0,0,1361,1400,1,0,0,0,1362,1364,3,326,163,0,1363,1365,3,182,91,0,
        1364,1363,1,0,0,0,1364,1365,1,0,0,0,1365,1400,1,0,0,0,1366,1367,
        5,198,0,0,1367,1368,5,373,0,0,1368,1383,5,516,0,0,1369,1370,3,274,
        137,0,1370,1371,5,516,0,0,1371,1376,3,276,138,0,1372,1373,5,520,
        0,0,1373,1375,3,276,138,0,1374,1372,1,0,0,0,1375,1378,1,0,0,0,1376,
        1374,1,0,0,0,1376,1377,1,0,0,0,1377,1379,1,0,0,0,1378,1376,1,0,0,
        0,1379,1380,5,517,0,0,1380,1384,1,0,0,0,1381,1384,3,374,187,0,1382,
        1384,3,272,136,0,1383,1369,1,0,0,0,1383,1381,1,0,0,0,1383,1382,1,
        0,0,0,1384,1385,1,0,0,0,1385,1386,5,517,0,0,1386,1400,1,0,0,0,1387,
        1389,5,198,0,0,1388,1387,1,0,0,0,1388,1389,1,0,0,0,1389,1390,1,0,
        0,0,1390,1391,5,516,0,0,1391,1392,3,156,78,0,1392,1393,5,517,0,0,
        1393,1400,1,0,0,0,1394,1395,5,405,0,0,1395,1396,5,516,0,0,1396,1397,
        3,256,128,0,1397,1398,5,517,0,0,1398,1400,1,0,0,0,1399,1356,1,0,
        0,0,1399,1362,1,0,0,0,1399,1366,1,0,0,0,1399,1388,1,0,0,0,1399,1394,
        1,0,0,0,1400,181,1,0,0,0,1401,1402,5,146,0,0,1402,1403,5,371,0,0,
        1403,1404,5,17,0,0,1404,1405,5,249,0,0,1405,1406,3,184,92,0,1406,
        183,1,0,0,0,1407,1408,3,256,128,0,1408,185,1,0,0,0,1409,1410,5,516,
        0,0,1410,1411,3,148,74,0,1411,1412,5,517,0,0,1412,1413,3,296,148,
        0,1413,187,1,0,0,0,1414,1415,5,373,0,0,1415,1416,5,516,0,0,1416,
        1417,3,190,95,0,1417,1418,5,517,0,0,1418,189,1,0,0,0,1419,1420,3,
        192,96,0,1420,1421,5,516,0,0,1421,1426,3,194,97,0,1422,1423,5,520,
        0,0,1423,1425,3,194,97,0,1424,1422,1,0,0,0,1425,1428,1,0,0,0,1426,
        1424,1,0,0,0,1426,1427,1,0,0,0,1427,1429,1,0,0,0,1428,1426,1,0,0,
        0,1429,1430,5,517,0,0,1430,191,1,0,0,0,1431,1432,7,21,0,0,1432,193,
        1,0,0,0,1433,1434,5,373,0,0,1434,1449,3,216,108,0,1435,1449,3,198,
        99,0,1436,1449,3,284,142,0,1437,1438,5,446,0,0,1438,1439,5,536,0,
        0,1439,1440,5,373,0,0,1440,1449,3,216,108,0,1441,1442,5,498,0,0,
        1442,1443,5,536,0,0,1443,1449,3,198,99,0,1444,1445,3,196,98,0,1445,
        1446,5,536,0,0,1446,1447,3,284,142,0,1447,1449,1,0,0,0,1448,1433,
        1,0,0,0,1448,1435,1,0,0,0,1448,1436,1,0,0,0,1448,1437,1,0,0,0,1448,
        1441,1,0,0,0,1448,1444,1,0,0,0,1449,195,1,0,0,0,1450,1451,7,22,0,
        0,1451,197,1,0,0,0,1452,1453,5,451,0,0,1453,1454,5,516,0,0,1454,
        1455,3,52,26,0,1455,1456,5,517,0,0,1456,199,1,0,0,0,1457,1458,5,
        253,0,0,1458,1462,3,258,129,0,1459,1460,5,412,0,0,1460,1462,3,54,
        27,0,1461,1457,1,0,0,0,1461,1459,1,0,0,0,1462,201,1,0,0,0,1463,1464,
        5,430,0,0,1464,1465,3,258,129,0,1465,203,1,0,0,0,1466,1467,5,159,
        0,0,1467,1468,5,34,0,0,1468,1473,3,206,103,0,1469,1470,5,520,0,0,
        1470,1472,3,206,103,0,1471,1469,1,0,0,0,1472,1475,1,0,0,0,1473,1471,
        1,0,0,0,1473,1474,1,0,0,0,1474,205,1,0,0,0,1475,1473,1,0,0,0,1476,
        1517,3,52,26,0,1477,1517,3,212,106,0,1478,1479,5,516,0,0,1479,1517,
        5,517,0,0,1480,1481,5,516,0,0,1481,1486,3,256,128,0,1482,1483,5,
        520,0,0,1483,1485,3,256,128,0,1484,1482,1,0,0,0,1485,1488,1,0,0,
        0,1486,1484,1,0,0,0,1486,1487,1,0,0,0,1487,1489,1,0,0,0,1488,1486,
        1,0,0,0,1489,1490,5,517,0,0,1490,1517,1,0,0,0,1491,1492,3,210,105,
        0,1492,1493,5,516,0,0,1493,1498,3,256,128,0,1494,1495,5,520,0,0,
        1495,1497,3,256,128,0,1496,1494,1,0,0,0,1497,1500,1,0,0,0,1498,1496,
        1,0,0,0,1498,1499,1,0,0,0,1499,1501,1,0,0,0,1500,1498,1,0,0,0,1501,
        1502,5,517,0,0,1502,1517,1,0,0,0,1503,1504,3,208,104,0,1504,1505,
        5,516,0,0,1505,1510,3,206,103,0,1506,1507,5,520,0,0,1507,1509,3,
        206,103,0,1508,1506,1,0,0,0,1509,1512,1,0,0,0,1510,1508,1,0,0,0,
        1510,1511,1,0,0,0,1511,1513,1,0,0,0,1512,1510,1,0,0,0,1513,1514,
        5,517,0,0,1514,1517,1,0,0,0,1515,1517,3,256,128,0,1516,1476,1,0,
        0,0,1516,1477,1,0,0,0,1516,1478,1,0,0,0,1516,1480,1,0,0,0,1516,1491,
        1,0,0,0,1516,1503,1,0,0,0,1516,1515,1,0,0,0,1517,207,1,0,0,0,1518,
        1519,5,160,0,0,1519,1520,5,493,0,0,1520,209,1,0,0,0,1521,1522,7,
        23,0,0,1522,211,1,0,0,0,1523,1524,3,214,107,0,1524,1525,5,516,0,
        0,1525,1526,3,216,108,0,1526,1527,5,520,0,0,1527,1528,3,284,142,
        0,1528,1529,5,517,0,0,1529,213,1,0,0,0,1530,1531,7,24,0,0,1531,215,
        1,0,0,0,1532,1533,3,330,165,0,1533,217,1,0,0,0,1534,1535,5,163,0,
        0,1535,1536,3,258,129,0,1536,219,1,0,0,0,1537,1538,5,432,0,0,1538,
        1543,3,222,111,0,1539,1540,5,520,0,0,1540,1542,3,222,111,0,1541,
        1539,1,0,0,0,1542,1545,1,0,0,0,1543,1541,1,0,0,0,1543,1544,1,0,0,
        0,1544,221,1,0,0,0,1545,1543,1,0,0,0,1546,1547,3,298,149,0,1547,
        1548,5,17,0,0,1548,1549,3,224,112,0,1549,223,1,0,0,0,1550,1552,3,
        298,149,0,1551,1550,1,0,0,0,1551,1552,1,0,0,0,1552,1553,1,0,0,0,
        1553,1555,5,516,0,0,1554,1556,3,234,117,0,1555,1554,1,0,0,0,1555,
        1556,1,0,0,0,1556,1558,1,0,0,0,1557,1559,3,228,114,0,1558,1557,1,
        0,0,0,1558,1559,1,0,0,0,1559,1561,1,0,0,0,1560,1562,3,250,125,0,
        1561,1560,1,0,0,0,1561,1562,1,0,0,0,1562,1563,1,0,0,0,1563,1564,
        5,517,0,0,1564,225,1,0,0,0,1565,1566,5,213,0,0,1566,1568,5,516,0,
        0,1567,1569,3,234,117,0,1568,1567,1,0,0,0,1568,1569,1,0,0,0,1569,
        1571,1,0,0,0,1570,1572,3,228,114,0,1571,1570,1,0,0,0,1571,1572,1,
        0,0,0,1572,1574,1,0,0,0,1573,1575,3,238,119,0,1574,1573,1,0,0,0,
        1574,1575,1,0,0,0,1575,1577,1,0,0,0,1576,1578,3,244,122,0,1577,1576,
        1,0,0,0,1577,1578,1,0,0,0,1578,1580,1,0,0,0,1579,1581,3,246,123,
        0,1580,1579,1,0,0,0,1580,1581,1,0,0,0,1581,1583,1,0,0,0,1582,1584,
        3,240,120,0,1583,1582,1,0,0,0,1583,1584,1,0,0,0,1584,1585,1,0,0,
        0,1585,1586,3,248,124,0,1586,1591,5,517,0,0,1587,1589,5,17,0,0,1588,
        1587,1,0,0,0,1588,1589,1,0,0,0,1589,1590,1,0,0,0,1590,1592,3,306,
        153,0,1591,1588,1,0,0,0,1591,1592,1,0,0,0,1592,227,1,0,0,0,1593,
        1594,5,258,0,0,1594,1595,5,34,0,0,1595,1600,3,230,115,0,1596,1597,
        5,520,0,0,1597,1599,3,230,115,0,1598,1596,1,0,0,0,1599,1602,1,0,
        0,0,1600,1598,1,0,0,0,1600,1601,1,0,0,0,1601,229,1,0,0,0,1602,1600,
        1,0,0,0,1603,1605,3,52,26,0,1604,1606,7,25,0,0,1605,1604,1,0,0,0,
        1605,1606,1,0,0,0,1606,1609,1,0,0,0,1607,1608,5,476,0,0,1608,1610,
        7,26,0,0,1609,1607,1,0,0,0,1609,1610,1,0,0,0,1610,231,1,0,0,0,1611,
        1614,5,204,0,0,1612,1615,5,5,0,0,1613,1615,3,256,128,0,1614,1612,
        1,0,0,0,1614,1613,1,0,0,0,1615,233,1,0,0,0,1616,1617,5,268,0,0,1617,
        1620,5,34,0,0,1618,1621,3,52,26,0,1619,1621,3,266,133,0,1620,1618,
        1,0,0,0,1620,1619,1,0,0,0,1621,1629,1,0,0,0,1622,1625,5,520,0,0,
        1623,1626,3,52,26,0,1624,1626,3,266,133,0,1625,1623,1,0,0,0,1625,
        1624,1,0,0,0,1626,1628,1,0,0,0,1627,1622,1,0,0,0,1628,1631,1,0,0,
        0,1629,1627,1,0,0,0,1629,1630,1,0,0,0,1630,235,1,0,0,0,1631,1629,
        1,0,0,0,1632,1649,5,527,0,0,1633,1649,5,530,0,0,1634,1649,5,535,
        0,0,1635,1636,5,518,0,0,1636,1637,5,538,0,0,1637,1638,5,520,0,0,
        1638,1639,5,538,0,0,1639,1649,5,519,0,0,1640,1641,5,518,0,0,1641,
        1642,5,538,0,0,1642,1643,5,520,0,0,1643,1649,5,519,0,0,1644,1645,
        5,518,0,0,1645,1646,5,520,0,0,1646,1647,5,538,0,0,1647,1649,5,519,
        0,0,1648,1632,1,0,0,0,1648,1633,1,0,0,0,1648,1634,1,0,0,0,1648,1635,
        1,0,0,0,1648,1640,1,0,0,0,1648,1644,1,0,0,0,1649,237,1,0,0,0,1650,
        1651,5,215,0,0,1651,1656,3,170,85,0,1652,1653,5,520,0,0,1653,1655,
        3,170,85,0,1654,1652,1,0,0,0,1655,1658,1,0,0,0,1656,1654,1,0,0,0,
        1656,1657,1,0,0,0,1657,239,1,0,0,0,1658,1656,1,0,0,0,1659,1660,5,
        271,0,0,1660,1662,5,516,0,0,1661,1663,3,242,121,0,1662,1661,1,0,
        0,0,1663,1664,1,0,0,0,1664,1662,1,0,0,0,1664,1665,1,0,0,0,1665,1666,
        1,0,0,0,1666,1668,5,517,0,0,1667,1669,3,254,127,0,1668,1667,1,0,
        0,0,1668,1669,1,0,0,0,1669,241,1,0,0,0,1670,1672,3,308,154,0,1671,
        1673,3,236,118,0,1672,1671,1,0,0,0,1672,1673,1,0,0,0,1673,243,1,
        0,0,0,1674,1675,5,5,0,0,1675,1676,5,322,0,0,1676,1677,5,272,0,0,
        1677,1683,5,210,0,0,1678,1679,5,254,0,0,1679,1680,5,321,0,0,1680,
        1681,5,272,0,0,1681,1683,5,210,0,0,1682,1674,1,0,0,0,1682,1678,1,
        0,0,0,1683,245,1,0,0,0,1684,1685,5,438,0,0,1685,1686,5,210,0,0,1686,
        1687,5,343,0,0,1687,1688,5,478,0,0,1688,1689,5,467,0,0,1689,1709,
        5,321,0,0,1690,1691,5,438,0,0,1691,1692,5,210,0,0,1692,1693,5,343,
        0,0,1693,1694,5,388,0,0,1694,1695,5,237,0,0,1695,1709,5,321,0,0,
        1696,1697,5,438,0,0,1697,1698,5,210,0,0,1698,1699,5,343,0,0,1699,
        1700,5,388,0,0,1700,1701,5,467,0,0,1701,1709,3,308,154,0,1702,1703,
        5,438,0,0,1703,1704,5,210,0,0,1704,1705,5,343,0,0,1705,1706,5,388,
        0,0,1706,1707,5,457,0,0,1707,1709,3,308,154,0,1708,1684,1,0,0,0,
        1708,1690,1,0,0,0,1708,1696,1,0,0,0,1708,1702,1,0,0,0,1709,247,1,
        0,0,0,1710,1711,5,105,0,0,1711,1716,3,170,85,0,1712,1713,5,520,0,
        0,1713,1715,3,170,85,0,1714,1712,1,0,0,0,1715,1718,1,0,0,0,1716,
        1714,1,0,0,0,1716,1717,1,0,0,0,1717,249,1,0,0,0,1718,1716,1,0,0,
        0,1719,1720,5,292,0,0,1720,1721,5,27,0,0,1721,1722,3,284,142,0,1722,
        1723,3,252,126,0,1723,1729,1,0,0,0,1724,1725,5,322,0,0,1725,1726,
        5,27,0,0,1726,1727,5,538,0,0,1727,1729,3,252,126,0,1728,1719,1,0,
        0,0,1728,1724,1,0,0,0,1729,251,1,0,0,0,1730,1731,5,480,0,0,1731,
        1732,5,10,0,0,1732,1733,5,76,0,0,1733,1734,5,321,0,0,1734,253,1,
        0,0,0,1735,1736,5,434,0,0,1736,1737,3,284,142,0,1737,255,1,0,0,0,
        1738,1739,3,258,129,0,1739,257,1,0,0,0,1740,1741,6,129,-1,0,1741,
        1742,5,241,0,0,1742,1753,3,258,129,6,1743,1744,5,133,0,0,1744,1745,
        5,516,0,0,1745,1746,3,156,78,0,1746,1747,5,517,0,0,1747,1753,1,0,
        0,0,1748,1750,3,264,132,0,1749,1751,3,260,130,0,1750,1749,1,0,0,
        0,1750,1751,1,0,0,0,1751,1753,1,0,0,0,1752,1740,1,0,0,0,1752,1743,
        1,0,0,0,1752,1748,1,0,0,0,1753,1768,1,0,0,0,1754,1755,10,3,0,0,1755,
        1756,5,10,0,0,1756,1767,3,258,129,4,1757,1758,10,2,0,0,1758,1759,
        5,257,0,0,1759,1767,3,258,129,3,1760,1761,10,1,0,0,1761,1763,5,184,
        0,0,1762,1764,5,241,0,0,1763,1762,1,0,0,0,1763,1764,1,0,0,0,1764,
        1765,1,0,0,0,1765,1767,7,27,0,0,1766,1754,1,0,0,0,1766,1757,1,0,
        0,0,1766,1760,1,0,0,0,1767,1770,1,0,0,0,1768,1766,1,0,0,0,1768,1769,
        1,0,0,0,1769,259,1,0,0,0,1770,1768,1,0,0,0,1771,1773,5,241,0,0,1772,
        1771,1,0,0,0,1772,1773,1,0,0,0,1773,1774,1,0,0,0,1774,1776,5,27,
        0,0,1775,1777,7,28,0,0,1776,1775,1,0,0,0,1776,1777,1,0,0,0,1777,
        1778,1,0,0,0,1778,1779,3,264,132,0,1779,1780,5,10,0,0,1780,1781,
        3,264,132,0,1781,1839,1,0,0,0,1782,1784,5,241,0,0,1783,1782,1,0,
        0,0,1783,1784,1,0,0,0,1784,1785,1,0,0,0,1785,1786,5,170,0,0,1786,
        1787,5,516,0,0,1787,1792,3,256,128,0,1788,1789,5,520,0,0,1789,1791,
        3,256,128,0,1790,1788,1,0,0,0,1791,1794,1,0,0,0,1792,1790,1,0,0,
        0,1792,1793,1,0,0,0,1793,1795,1,0,0,0,1794,1792,1,0,0,0,1795,1796,
        5,517,0,0,1796,1839,1,0,0,0,1797,1799,5,241,0,0,1798,1797,1,0,0,
        0,1798,1799,1,0,0,0,1799,1800,1,0,0,0,1800,1801,5,170,0,0,1801,1802,
        5,516,0,0,1802,1803,3,156,78,0,1803,1804,5,517,0,0,1804,1839,1,0,
        0,0,1805,1806,5,133,0,0,1806,1807,5,516,0,0,1807,1808,3,156,78,0,
        1808,1809,5,517,0,0,1809,1839,1,0,0,0,1810,1812,5,241,0,0,1811,1810,
        1,0,0,0,1811,1812,1,0,0,0,1812,1813,1,0,0,0,1813,1814,5,318,0,0,
        1814,1839,3,264,132,0,1815,1839,3,262,131,0,1816,1818,5,184,0,0,
        1817,1819,5,241,0,0,1818,1817,1,0,0,0,1818,1819,1,0,0,0,1819,1820,
        1,0,0,0,1820,1839,7,27,0,0,1821,1823,5,184,0,0,1822,1824,5,241,0,
        0,1823,1822,1,0,0,0,1823,1824,1,0,0,0,1824,1825,1,0,0,0,1825,1826,
        5,113,0,0,1826,1827,5,151,0,0,1827,1839,3,264,132,0,1828,1830,5,
        241,0,0,1829,1828,1,0,0,0,1829,1830,1,0,0,0,1830,1831,1,0,0,0,1831,
        1832,5,342,0,0,1832,1833,5,388,0,0,1833,1836,3,264,132,0,1834,1835,
        5,127,0,0,1835,1837,3,360,180,0,1836,1834,1,0,0,0,1836,1837,1,0,
        0,0,1837,1839,1,0,0,0,1838,1772,1,0,0,0,1838,1783,1,0,0,0,1838,1798,
        1,0,0,0,1838,1805,1,0,0,0,1838,1811,1,0,0,0,1838,1815,1,0,0,0,1838,
        1816,1,0,0,0,1838,1821,1,0,0,0,1838,1829,1,0,0,0,1839,261,1,0,0,
        0,1840,1842,5,241,0,0,1841,1840,1,0,0,0,1841,1842,1,0,0,0,1842,1843,
        1,0,0,0,1843,1844,5,202,0,0,1844,1858,7,29,0,0,1845,1846,5,516,0,
        0,1846,1859,5,517,0,0,1847,1848,5,516,0,0,1848,1853,3,256,128,0,
        1849,1850,5,520,0,0,1850,1852,3,256,128,0,1851,1849,1,0,0,0,1852,
        1855,1,0,0,0,1853,1851,1,0,0,0,1853,1854,1,0,0,0,1854,1856,1,0,0,
        0,1855,1853,1,0,0,0,1856,1857,5,517,0,0,1857,1859,1,0,0,0,1858,1845,
        1,0,0,0,1858,1847,1,0,0,0,1859,1870,1,0,0,0,1860,1862,5,241,0,0,
        1861,1860,1,0,0,0,1861,1862,1,0,0,0,1862,1863,1,0,0,0,1863,1864,
        5,202,0,0,1864,1867,3,264,132,0,1865,1866,5,127,0,0,1866,1868,3,
        360,180,0,1867,1865,1,0,0,0,1867,1868,1,0,0,0,1868,1870,1,0,0,0,
        1869,1841,1,0,0,0,1869,1861,1,0,0,0,1870,263,1,0,0,0,1871,1872,6,
        132,-1,0,1872,1876,3,266,133,0,1873,1874,7,30,0,0,1874,1876,3,264,
        132,7,1875,1871,1,0,0,0,1875,1873,1,0,0,0,1876,1898,1,0,0,0,1877,
        1878,10,6,0,0,1878,1879,7,31,0,0,1879,1897,3,264,132,7,1880,1881,
        10,5,0,0,1881,1882,7,32,0,0,1882,1897,3,264,132,6,1883,1884,10,4,
        0,0,1884,1885,5,511,0,0,1885,1897,3,264,132,5,1886,1887,10,3,0,0,
        1887,1888,5,512,0,0,1888,1897,3,264,132,4,1889,1890,10,2,0,0,1890,
        1891,5,510,0,0,1891,1897,3,264,132,3,1892,1893,10,1,0,0,1893,1894,
        3,348,174,0,1894,1895,3,264,132,2,1895,1897,1,0,0,0,1896,1877,1,
        0,0,0,1896,1880,1,0,0,0,1896,1883,1,0,0,0,1896,1886,1,0,0,0,1896,
        1889,1,0,0,0,1896,1892,1,0,0,0,1897,1900,1,0,0,0,1898,1896,1,0,0,
        0,1898,1899,1,0,0,0,1899,265,1,0,0,0,1900,1898,1,0,0,0,1901,1902,
        6,133,-1,0,1902,1904,5,40,0,0,1903,1905,3,312,156,0,1904,1903,1,
        0,0,0,1905,1906,1,0,0,0,1906,1904,1,0,0,0,1906,1907,1,0,0,0,1907,
        1910,1,0,0,0,1908,1909,5,120,0,0,1909,1911,3,256,128,0,1910,1908,
        1,0,0,0,1910,1911,1,0,0,0,1911,1912,1,0,0,0,1912,1913,5,122,0,0,
        1913,1997,1,0,0,0,1914,1915,5,40,0,0,1915,1917,3,256,128,0,1916,
        1918,3,312,156,0,1917,1916,1,0,0,0,1918,1919,1,0,0,0,1919,1917,1,
        0,0,0,1919,1920,1,0,0,0,1920,1923,1,0,0,0,1921,1922,5,120,0,0,1922,
        1924,3,256,128,0,1923,1921,1,0,0,0,1923,1924,1,0,0,0,1924,1925,1,
        0,0,0,1925,1926,5,122,0,0,1926,1997,1,0,0,0,1927,1928,5,41,0,0,1928,
        1929,5,516,0,0,1929,1930,3,256,128,0,1930,1931,5,17,0,0,1931,1932,
        3,56,28,0,1932,1933,5,517,0,0,1933,1997,1,0,0,0,1934,1935,5,457,
        0,0,1935,1936,5,516,0,0,1936,1939,3,256,128,0,1937,1938,5,461,0,
        0,1938,1940,5,476,0,0,1939,1937,1,0,0,0,1939,1940,1,0,0,0,1940,1941,
        1,0,0,0,1941,1942,5,517,0,0,1942,1997,1,0,0,0,1943,1944,5,467,0,
        0,1944,1945,5,516,0,0,1945,1948,3,256,128,0,1946,1947,5,461,0,0,
        1947,1949,5,476,0,0,1948,1946,1,0,0,0,1948,1949,1,0,0,0,1949,1950,
        1,0,0,0,1950,1951,5,517,0,0,1951,1997,1,0,0,0,1952,1953,5,281,0,
        0,1953,1954,5,516,0,0,1954,1955,3,264,132,0,1955,1956,5,170,0,0,
        1956,1957,3,264,132,0,1957,1958,5,517,0,0,1958,1997,1,0,0,0,1959,
        1997,3,356,178,0,1960,1997,5,527,0,0,1961,1962,3,330,165,0,1962,
        1963,5,513,0,0,1963,1964,5,527,0,0,1964,1997,1,0,0,0,1965,1966,5,
        516,0,0,1966,1967,3,156,78,0,1967,1968,5,517,0,0,1968,1997,1,0,0,
        0,1969,1989,3,374,187,0,1970,1989,3,272,136,0,1971,1972,3,274,137,
        0,1972,1984,5,516,0,0,1973,1975,3,366,183,0,1974,1973,1,0,0,0,1974,
        1975,1,0,0,0,1975,1976,1,0,0,0,1976,1981,3,276,138,0,1977,1978,5,
        520,0,0,1978,1980,3,276,138,0,1979,1977,1,0,0,0,1980,1983,1,0,0,
        0,1981,1979,1,0,0,0,1981,1982,1,0,0,0,1982,1985,1,0,0,0,1983,1981,
        1,0,0,0,1984,1974,1,0,0,0,1984,1985,1,0,0,0,1985,1986,1,0,0,0,1986,
        1987,5,517,0,0,1987,1989,1,0,0,0,1988,1969,1,0,0,0,1988,1970,1,0,
        0,0,1988,1971,1,0,0,0,1989,1997,1,0,0,0,1990,1997,3,306,153,0,1991,
        1997,3,278,139,0,1992,1993,5,516,0,0,1993,1994,3,256,128,0,1994,
        1995,5,517,0,0,1995,1997,1,0,0,0,1996,1901,1,0,0,0,1996,1914,1,0,
        0,0,1996,1927,1,0,0,0,1996,1934,1,0,0,0,1996,1943,1,0,0,0,1996,1952,
        1,0,0,0,1996,1959,1,0,0,0,1996,1960,1,0,0,0,1996,1961,1,0,0,0,1996,
        1965,1,0,0,0,1996,1988,1,0,0,0,1996,1990,1,0,0,0,1996,1991,1,0,0,
        0,1996,1992,1,0,0,0,1997,2005,1,0,0,0,1998,1999,10,4,0,0,1999,2000,
        5,514,0,0,2000,2001,3,264,132,0,2001,2002,5,515,0,0,2002,2004,1,
        0,0,0,2003,1998,1,0,0,0,2004,2007,1,0,0,0,2005,2003,1,0,0,0,2005,
        2006,1,0,0,0,2006,267,1,0,0,0,2007,2005,1,0,0,0,2008,2009,3,330,
        165,0,2009,269,1,0,0,0,2010,2015,3,378,189,0,2011,2015,3,374,187,
        0,2012,2015,3,376,188,0,2013,2015,3,330,165,0,2014,2010,1,0,0,0,
        2014,2011,1,0,0,0,2014,2012,1,0,0,0,2014,2013,1,0,0,0,2015,271,1,
        0,0,0,2016,2017,3,376,188,0,2017,2018,5,537,0,0,2018,2021,1,0,0,
        0,2019,2021,3,284,142,0,2020,2016,1,0,0,0,2020,2019,1,0,0,0,2021,
        273,1,0,0,0,2022,2025,3,378,189,0,2023,2025,3,330,165,0,2024,2022,
        1,0,0,0,2024,2023,1,0,0,0,2025,275,1,0,0,0,2026,2031,3,372,186,0,
        2027,2031,3,370,185,0,2028,2031,3,368,184,0,2029,2031,3,256,128,
        0,2030,2026,1,0,0,0,2030,2027,1,0,0,0,2030,2028,1,0,0,0,2030,2029,
        1,0,0,0,2031,277,1,0,0,0,2032,2033,3,330,165,0,2033,279,1,0,0,0,
        2034,2035,3,306,153,0,2035,281,1,0,0,0,2036,2039,3,306,153,0,2037,
        2039,3,278,139,0,2038,2036,1,0,0,0,2038,2037,1,0,0,0,2039,283,1,
        0,0,0,2040,2043,5,182,0,0,2041,2044,3,286,143,0,2042,2044,3,290,
        145,0,2043,2041,1,0,0,0,2043,2042,1,0,0,0,2043,2044,1,0,0,0,2044,
        285,1,0,0,0,2045,2047,3,288,144,0,2046,2048,3,292,146,0,2047,2046,
        1,0,0,0,2047,2048,1,0,0,0,2048,287,1,0,0,0,2049,2050,3,294,147,0,
        2050,2051,3,370,185,0,2051,2053,1,0,0,0,2052,2049,1,0,0,0,2053,2054,
        1,0,0,0,2054,2052,1,0,0,0,2054,2055,1,0,0,0,2055,289,1,0,0,0,2056,
        2059,3,292,146,0,2057,2060,3,288,144,0,2058,2060,3,292,146,0,2059,
        2057,1,0,0,0,2059,2058,1,0,0,0,2059,2060,1,0,0,0,2060,291,1,0,0,
        0,2061,2062,3,294,147,0,2062,2063,3,370,185,0,2063,2064,5,388,0,
        0,2064,2065,3,370,185,0,2065,293,1,0,0,0,2066,2068,7,33,0,0,2067,
        2066,1,0,0,0,2067,2068,1,0,0,0,2068,2069,1,0,0,0,2069,2072,7,34,
        0,0,2070,2072,5,537,0,0,2071,2067,1,0,0,0,2071,2070,1,0,0,0,2072,
        295,1,0,0,0,2073,2075,5,17,0,0,2074,2073,1,0,0,0,2074,2075,1,0,0,
        0,2075,2076,1,0,0,0,2076,2078,3,306,153,0,2077,2079,3,302,151,0,
        2078,2077,1,0,0,0,2078,2079,1,0,0,0,2079,297,1,0,0,0,2080,2081,3,
        306,153,0,2081,2082,3,300,150,0,2082,299,1,0,0,0,2083,2084,5,221,
        0,0,2084,2086,3,306,153,0,2085,2083,1,0,0,0,2086,2087,1,0,0,0,2087,
        2085,1,0,0,0,2087,2088,1,0,0,0,2088,2091,1,0,0,0,2089,2091,1,0,0,
        0,2090,2085,1,0,0,0,2090,2089,1,0,0,0,2091,301,1,0,0,0,2092,2093,
        5,516,0,0,2093,2094,3,304,152,0,2094,2095,5,517,0,0,2095,303,1,0,
        0,0,2096,2101,3,306,153,0,2097,2098,5,520,0,0,2098,2100,3,306,153,
        0,2099,2097,1,0,0,0,2100,2103,1,0,0,0,2101,2099,1,0,0,0,2101,2102,
        1,0,0,0,2102,305,1,0,0,0,2103,2101,1,0,0,0,2104,2108,3,308,154,0,
        2105,2108,3,310,155,0,2106,2108,3,380,190,0,2107,2104,1,0,0,0,2107,
        2105,1,0,0,0,2107,2106,1,0,0,0,2108,307,1,0,0,0,2109,2110,7,35,0,
        0,2110,309,1,0,0,0,2111,2112,5,537,0,0,2112,311,1,0,0,0,2113,2114,
        5,428,0,0,2114,2115,3,256,128,0,2115,2116,5,376,0,0,2116,2117,3,
        256,128,0,2117,313,1,0,0,0,2118,2119,3,306,153,0,2119,315,1,0,0,
        0,2120,2121,3,306,153,0,2121,317,1,0,0,0,2122,2125,3,306,153,0,2123,
        2124,5,513,0,0,2124,2126,3,306,153,0,2125,2123,1,0,0,0,2125,2126,
        1,0,0,0,2126,319,1,0,0,0,2127,2130,3,306,153,0,2128,2129,5,513,0,
        0,2129,2131,3,306,153,0,2130,2128,1,0,0,0,2130,2131,1,0,0,0,2131,
        321,1,0,0,0,2132,2135,3,306,153,0,2133,2134,5,513,0,0,2134,2136,
        3,306,153,0,2135,2133,1,0,0,0,2135,2136,1,0,0,0,2136,2145,1,0,0,
        0,2137,2138,3,306,153,0,2138,2139,5,513,0,0,2139,2142,3,306,153,
        0,2140,2141,5,513,0,0,2141,2143,3,306,153,0,2142,2140,1,0,0,0,2142,
        2143,1,0,0,0,2143,2145,1,0,0,0,2144,2132,1,0,0,0,2144,2137,1,0,0,
        0,2145,323,1,0,0,0,2146,2149,3,306,153,0,2147,2148,5,513,0,0,2148,
        2150,3,306,153,0,2149,2147,1,0,0,0,2149,2150,1,0,0,0,2150,2159,1,
        0,0,0,2151,2152,3,306,153,0,2152,2153,5,513,0,0,2153,2156,3,306,
        153,0,2154,2155,5,513,0,0,2155,2157,3,306,153,0,2156,2154,1,0,0,
        0,2156,2157,1,0,0,0,2157,2159,1,0,0,0,2158,2146,1,0,0,0,2158,2151,
        1,0,0,0,2159,325,1,0,0,0,2160,2163,3,306,153,0,2161,2162,5,513,0,
        0,2162,2164,3,306,153,0,2163,2161,1,0,0,0,2163,2164,1,0,0,0,2164,
        2173,1,0,0,0,2165,2166,3,306,153,0,2166,2167,5,513,0,0,2167,2170,
        3,306,153,0,2168,2169,5,513,0,0,2169,2171,3,306,153,0,2170,2168,
        1,0,0,0,2170,2171,1,0,0,0,2171,2173,1,0,0,0,2172,2160,1,0,0,0,2172,
        2165,1,0,0,0,2173,327,1,0,0,0,2174,2177,3,306,153,0,2175,2176,5,
        513,0,0,2176,2178,3,306,153,0,2177,2175,1,0,0,0,2177,2178,1,0,0,
        0,2178,2187,1,0,0,0,2179,2180,3,306,153,0,2180,2181,5,513,0,0,2181,
        2184,3,306,153,0,2182,2183,5,513,0,0,2183,2185,3,306,153,0,2184,
        2182,1,0,0,0,2184,2185,1,0,0,0,2185,2187,1,0,0,0,2186,2174,1,0,0,
        0,2186,2179,1,0,0,0,2187,329,1,0,0,0,2188,2193,3,306,153,0,2189,
        2190,5,513,0,0,2190,2192,3,306,153,0,2191,2189,1,0,0,0,2192,2195,
        1,0,0,0,2193,2194,1,0,0,0,2193,2191,1,0,0,0,2194,331,1,0,0,0,2195,
        2193,1,0,0,0,2196,2197,5,433,0,0,2197,2198,3,338,169,0,2198,333,
        1,0,0,0,2199,2200,5,167,0,0,2200,2201,5,241,0,0,2201,2202,5,133,
        0,0,2202,335,1,0,0,0,2203,2204,5,167,0,0,2204,2205,5,133,0,0,2205,
        337,1,0,0,0,2206,2207,5,516,0,0,2207,2212,3,340,170,0,2208,2209,
        5,520,0,0,2209,2211,3,340,170,0,2210,2208,1,0,0,0,2211,2214,1,0,
        0,0,2212,2210,1,0,0,0,2212,2213,1,0,0,0,2213,2215,1,0,0,0,2214,2212,
        1,0,0,0,2215,2216,5,517,0,0,2216,339,1,0,0,0,2217,2222,3,342,171,
        0,2218,2220,5,505,0,0,2219,2218,1,0,0,0,2219,2220,1,0,0,0,2220,2221,
        1,0,0,0,2221,2223,3,344,172,0,2222,2219,1,0,0,0,2222,2223,1,0,0,
        0,2223,341,1,0,0,0,2224,2228,3,306,153,0,2225,2228,3,278,139,0,2226,
        2228,5,537,0,0,2227,2224,1,0,0,0,2227,2225,1,0,0,0,2227,2226,1,0,
        0,0,2228,343,1,0,0,0,2229,2234,5,538,0,0,2230,2234,5,539,0,0,2231,
        2234,3,364,182,0,2232,2234,5,537,0,0,2233,2229,1,0,0,0,2233,2230,
        1,0,0,0,2233,2231,1,0,0,0,2233,2232,1,0,0,0,2234,345,1,0,0,0,2235,
        2242,5,10,0,0,2236,2237,5,511,0,0,2237,2242,5,511,0,0,2238,2242,
        5,257,0,0,2239,2240,5,510,0,0,2240,2242,5,510,0,0,2241,2235,1,0,
        0,0,2241,2236,1,0,0,0,2241,2238,1,0,0,0,2241,2239,1,0,0,0,2242,347,
        1,0,0,0,2243,2258,5,505,0,0,2244,2258,5,506,0,0,2245,2258,5,507,
        0,0,2246,2247,5,507,0,0,2247,2258,5,505,0,0,2248,2249,5,506,0,0,
        2249,2258,5,505,0,0,2250,2251,5,507,0,0,2251,2258,5,506,0,0,2252,
        2253,5,508,0,0,2253,2258,5,505,0,0,2254,2255,5,507,0,0,2255,2256,
        5,505,0,0,2256,2258,5,506,0,0,2257,2243,1,0,0,0,2257,2244,1,0,0,
        0,2257,2245,1,0,0,0,2257,2246,1,0,0,0,2257,2248,1,0,0,0,2257,2250,
        1,0,0,0,2257,2252,1,0,0,0,2257,2254,1,0,0,0,2258,349,1,0,0,0,2259,
        2260,5,507,0,0,2260,2267,5,507,0,0,2261,2262,5,506,0,0,2262,2267,
        5,506,0,0,2263,2267,5,511,0,0,2264,2267,5,512,0,0,2265,2267,5,510,
        0,0,2266,2259,1,0,0,0,2266,2261,1,0,0,0,2266,2263,1,0,0,0,2266,2264,
        1,0,0,0,2266,2265,1,0,0,0,2267,351,1,0,0,0,2268,2269,7,36,0,0,2269,
        353,1,0,0,0,2270,2271,7,37,0,0,2271,355,1,0,0,0,2272,2287,3,284,
        142,0,2273,2287,3,358,179,0,2274,2287,3,360,180,0,2275,2277,5,529,
        0,0,2276,2275,1,0,0,0,2276,2277,1,0,0,0,2277,2278,1,0,0,0,2278,2287,
        3,362,181,0,2279,2287,3,364,182,0,2280,2287,5,539,0,0,2281,2287,
        5,540,0,0,2282,2284,5,241,0,0,2283,2282,1,0,0,0,2283,2284,1,0,0,
        0,2284,2285,1,0,0,0,2285,2287,5,244,0,0,2286,2272,1,0,0,0,2286,2273,
        1,0,0,0,2286,2274,1,0,0,0,2286,2276,1,0,0,0,2286,2279,1,0,0,0,2286,
        2280,1,0,0,0,2286,2281,1,0,0,0,2286,2283,1,0,0,0,2287,357,1,0,0,
        0,2288,2289,3,368,184,0,2289,2290,3,360,180,0,2290,359,1,0,0,0,2291,
        2292,5,537,0,0,2292,361,1,0,0,0,2293,2294,5,538,0,0,2294,363,1,0,
        0,0,2295,2296,7,38,0,0,2296,365,1,0,0,0,2297,2298,7,39,0,0,2298,
        367,1,0,0,0,2299,2300,7,40,0,0,2300,369,1,0,0,0,2301,2302,7,41,0,
        0,2302,371,1,0,0,0,2303,2304,7,42,0,0,2304,373,1,0,0,0,2305,2306,
        7,43,0,0,2306,375,1,0,0,0,2307,2308,7,44,0,0,2308,377,1,0,0,0,2309,
        2310,7,45,0,0,2310,379,1,0,0,0,2311,2312,7,46,0,0,2312,381,1,0,0,
        0,274,385,392,395,409,427,431,440,445,452,463,472,484,487,494,497,
        505,509,514,517,524,532,536,548,556,560,592,595,600,604,608,612,
        621,626,630,634,639,642,646,651,657,662,667,671,675,679,687,695,
        699,703,707,711,715,719,723,727,729,739,747,771,785,790,794,800,
        803,806,813,816,825,837,861,873,878,882,890,894,900,910,915,921,
        925,929,933,942,946,953,956,966,974,982,986,1001,1020,1031,1035,
        1042,1047,1053,1057,1064,1068,1072,1076,1084,1088,1093,1099,1105,
        1108,1112,1123,1132,1146,1158,1173,1176,1180,1183,1185,1190,1194,
        1197,1201,1210,1219,1229,1234,1245,1248,1251,1254,1257,1263,1267,
        1275,1278,1283,1286,1290,1293,1295,1309,1320,1325,1333,1336,1339,
        1344,1346,1348,1353,1356,1360,1364,1376,1383,1388,1399,1426,1448,
        1461,1473,1486,1498,1510,1516,1543,1551,1555,1558,1561,1568,1571,
        1574,1577,1580,1583,1588,1591,1600,1605,1609,1614,1620,1625,1629,
        1648,1656,1664,1668,1672,1682,1708,1716,1728,1750,1752,1763,1766,
        1768,1772,1776,1783,1792,1798,1811,1818,1823,1829,1836,1838,1841,
        1853,1858,1861,1867,1869,1875,1896,1898,1906,1910,1919,1923,1939,
        1948,1974,1981,1984,1988,1996,2005,2014,2020,2024,2030,2038,2043,
        2047,2054,2059,2067,2071,2074,2078,2087,2090,2101,2107,2125,2130,
        2135,2142,2144,2149,2156,2158,2163,2170,2172,2177,2184,2186,2193,
        2212,2219,2222,2227,2233,2241,2257,2266,2276,2283,2286
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
    public showStatememt(): ShowStatememtContext | null {
        return this.getRuleContext(0, ShowStatememtContext);
    }
    public loadStatement(): LoadStatementContext | null {
        return this.getRuleContext(0, LoadStatementContext);
    }
    public unloadStatememt(): UnloadStatememtContext | null {
        return this.getRuleContext(0, UnloadStatememtContext);
    }
    public setStatememt(): SetStatememtContext | null {
        return this.getRuleContext(0, SetStatememtContext);
    }
    public resetStatememt(): ResetStatememtContext | null {
        return this.getRuleContext(0, ResetStatememtContext);
    }
    public jarStatememt(): JarStatememtContext | null {
        return this.getRuleContext(0, JarStatememtContext);
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


export class ShowStatememtContext extends antlr.ParserRuleContext {
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
        return FlinkSqlParser.RULE_showStatememt;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterShowStatememt) {
             listener.enterShowStatememt(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitShowStatememt) {
             listener.exitShowStatememt(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitShowStatememt) {
            return visitor.visitShowStatememt(this);
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


export class UnloadStatememtContext extends antlr.ParserRuleContext {
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
        return FlinkSqlParser.RULE_unloadStatememt;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterUnloadStatememt) {
             listener.enterUnloadStatememt(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitUnloadStatememt) {
             listener.exitUnloadStatememt(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitUnloadStatememt) {
            return visitor.visitUnloadStatememt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SetStatememtContext extends antlr.ParserRuleContext {
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
        return FlinkSqlParser.RULE_setStatememt;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterSetStatememt) {
             listener.enterSetStatememt(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitSetStatememt) {
             listener.exitSetStatememt(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitSetStatememt) {
            return visitor.visitSetStatememt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ResetStatememtContext extends antlr.ParserRuleContext {
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
        return FlinkSqlParser.RULE_resetStatememt;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterResetStatememt) {
             listener.enterResetStatememt(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitResetStatememt) {
             listener.exitResetStatememt(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitResetStatememt) {
            return visitor.visitResetStatememt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JarStatememtContext extends antlr.ParserRuleContext {
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
        return FlinkSqlParser.RULE_jarStatememt;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterJarStatememt) {
             listener.enterJarStatememt(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitJarStatememt) {
             listener.exitJarStatememt(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitJarStatememt) {
            return visitor.visitJarStatememt(this);
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
    public valuesCaluse(): ValuesCaluseContext | null {
        return this.getRuleContext(0, ValuesCaluseContext);
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
    public orderByCaluse(): OrderByCaluseContext | null {
        return this.getRuleContext(0, OrderByCaluseContext);
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


export class ValuesCaluseContext extends antlr.ParserRuleContext {
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
        return FlinkSqlParser.RULE_valuesCaluse;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterValuesCaluse) {
             listener.enterValuesCaluse(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitValuesCaluse) {
             listener.exitValuesCaluse(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitValuesCaluse) {
            return visitor.visitValuesCaluse(this);
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
    public windoTVFClause(): WindoTVFClauseContext | null {
        return this.getRuleContext(0, WindoTVFClauseContext);
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
    public reservedKeywordsNoParamsUsedAsFuncName(): ReservedKeywordsNoParamsUsedAsFuncNameContext | null {
        return this.getRuleContext(0, ReservedKeywordsNoParamsUsedAsFuncNameContext);
    }
    public functionNameAndParams(): FunctionNameAndParamsContext | null {
        return this.getRuleContext(0, FunctionNameAndParamsContext);
    }
    public functionNameWithParams(): FunctionNameWithParamsContext | null {
        return this.getRuleContext(0, FunctionNameWithParamsContext);
    }
    public functionParam(): FunctionParamContext[];
    public functionParam(i: number): FunctionParamContext | null;
    public functionParam(i?: number): FunctionParamContext[] | FunctionParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionParamContext);
        }

        return this.getRuleContext(i, FunctionParamContext);
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


export class WindoTVFClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0)!;
    }
    public windowTVFExression(): WindowTVFExressionContext {
        return this.getRuleContext(0, WindowTVFExressionContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_windoTVFClause;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterWindoTVFClause) {
             listener.enterWindoTVFClause(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitWindoTVFClause) {
             listener.exitWindoTVFClause(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWindoTVFClause) {
            return visitor.visitWindoTVFClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowTVFExressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public windoTVFName(): WindoTVFNameContext {
        return this.getRuleContext(0, WindoTVFNameContext)!;
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
        return FlinkSqlParser.RULE_windowTVFExression;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterWindowTVFExression) {
             listener.enterWindowTVFExression(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitWindowTVFExression) {
             listener.exitWindowTVFExression(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWindowTVFExression) {
            return visitor.visitWindowTVFExression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindoTVFNameContext extends antlr.ParserRuleContext {
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
        return FlinkSqlParser.RULE_windoTVFName;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterWindoTVFName) {
             listener.enterWindoTVFName(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitWindoTVFName) {
             listener.exitWindoTVFName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitWindoTVFName) {
            return visitor.visitWindoTVFName(this);
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
    public groupingSetsNotaionName(): GroupingSetsNotaionNameContext | null {
        return this.getRuleContext(0, GroupingSetsNotaionNameContext);
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


export class GroupingSetsNotaionNameContext extends antlr.ParserRuleContext {
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
        return FlinkSqlParser.RULE_groupingSetsNotaionName;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterGroupingSetsNotaionName) {
             listener.enterGroupingSetsNotaionName(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitGroupingSetsNotaionName) {
             listener.exitGroupingSetsNotaionName(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitGroupingSetsNotaionName) {
            return visitor.visitGroupingSetsNotaionName(this);
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
    public orderByCaluse(): OrderByCaluseContext | null {
        return this.getRuleContext(0, OrderByCaluseContext);
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
    public patternVariablesDefination(): PatternVariablesDefinationContext {
        return this.getRuleContext(0, PatternVariablesDefinationContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0)!;
    }
    public partitionByClause(): PartitionByClauseContext | null {
        return this.getRuleContext(0, PartitionByClauseContext);
    }
    public orderByCaluse(): OrderByCaluseContext | null {
        return this.getRuleContext(0, OrderByCaluseContext);
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
    public patternDefination(): PatternDefinationContext | null {
        return this.getRuleContext(0, PatternDefinationContext);
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


export class OrderByCaluseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ORDER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ORDER, 0)!;
    }
    public KW_BY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BY, 0)!;
    }
    public orderItemDefition(): OrderItemDefitionContext[];
    public orderItemDefition(i: number): OrderItemDefitionContext | null;
    public orderItemDefition(i?: number): OrderItemDefitionContext[] | OrderItemDefitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OrderItemDefitionContext);
        }

        return this.getRuleContext(i, OrderItemDefitionContext);
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
        return FlinkSqlParser.RULE_orderByCaluse;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterOrderByCaluse) {
             listener.enterOrderByCaluse(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitOrderByCaluse) {
             listener.exitOrderByCaluse(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitOrderByCaluse) {
            return visitor.visitOrderByCaluse(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrderItemDefitionContext extends antlr.ParserRuleContext {
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
        return FlinkSqlParser.RULE_orderItemDefition;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterOrderItemDefition) {
             listener.enterOrderItemDefition(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitOrderItemDefition) {
             listener.exitOrderItemDefition(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitOrderItemDefition) {
            return visitor.visitOrderItemDefition(this);
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


export class PatternDefinationContext extends antlr.ParserRuleContext {
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
        return FlinkSqlParser.RULE_patternDefination;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterPatternDefination) {
             listener.enterPatternDefination(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitPatternDefination) {
             listener.exitPatternDefination(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitPatternDefination) {
            return visitor.visitPatternDefination(this);
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


export class PatternVariablesDefinationContext extends antlr.ParserRuleContext {
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
        return FlinkSqlParser.RULE_patternVariablesDefination;
    }
    public override enterRule(listener: FlinkSqlParserListener): void {
        if(listener.enterPatternVariablesDefination) {
             listener.enterPatternVariablesDefination(this);
        }
    }
    public override exitRule(listener: FlinkSqlParserListener): void {
        if(listener.exitPatternVariablesDefination) {
             listener.exitPatternVariablesDefination(this);
        }
    }
    public override accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null {
        if (visitor.visitPatternVariablesDefination) {
            return visitor.visitPatternVariablesDefination(this);
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
    public PENCENT_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.PENCENT_SIGN, 0);
    }
    public KW_DIV(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DIV, 0);
    }
    public ADD_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    public HYPNEN_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
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
    public HYPNEN_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
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
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
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
    public HYPNEN_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
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
    public PENCENT_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.PENCENT_SIGN, 0);
    }
    public KW_DIV(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.KW_DIV, 0);
    }
    public ADD_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    public HYPNEN_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
    }
    public DOUBLE_HYPNEN_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.DOUBLE_HYPNEN_SIGN, 0);
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
    public HYPNEN_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
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
    public HYPNEN_SIGN(): antlr.TerminalNode | null {
        return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
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
