// Generated from dt-sql-parser/src/grammar/spark/SparkSqlLexer.g4 by ANTLR 4.13.1

// @ts-nocheck

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class SparkSqlLexer extends antlr.Lexer {
    public static readonly SEMICOLON = 1;
    public static readonly LEFT_PAREN = 2;
    public static readonly RIGHT_PAREN = 3;
    public static readonly COMMA = 4;
    public static readonly DOT = 5;
    public static readonly LEFT_BRACKET = 6;
    public static readonly RIGHT_BRACKET = 7;
    public static readonly KW_ADD = 8;
    public static readonly KW_AFTER = 9;
    public static readonly KW_ALL = 10;
    public static readonly KW_ALTER = 11;
    public static readonly KW_ALWAYS = 12;
    public static readonly KW_ANALYZE = 13;
    public static readonly KW_AND = 14;
    public static readonly KW_ANTI = 15;
    public static readonly KW_ANY = 16;
    public static readonly KW_ANY_VALUE = 17;
    public static readonly KW_ARCHIVE = 18;
    public static readonly KW_ARRAY = 19;
    public static readonly KW_AS = 20;
    public static readonly KW_ASC = 21;
    public static readonly KW_AT = 22;
    public static readonly KW_AUTHORIZATION = 23;
    public static readonly KW_BETWEEN = 24;
    public static readonly KW_BIGINT = 25;
    public static readonly KW_BINARY = 26;
    public static readonly KW_BOOLEAN = 27;
    public static readonly KW_BOTH = 28;
    public static readonly KW_BUCKET = 29;
    public static readonly KW_BUCKETS = 30;
    public static readonly KW_BY = 31;
    public static readonly KW_BYTE = 32;
    public static readonly KW_CACHE = 33;
    public static readonly KW_CASCADE = 34;
    public static readonly KW_CASE = 35;
    public static readonly KW_CAST = 36;
    public static readonly KW_CATALOG = 37;
    public static readonly KW_CATALOGS = 38;
    public static readonly KW_CHANGE = 39;
    public static readonly KW_CHAR = 40;
    public static readonly KW_CHARACTER = 41;
    public static readonly KW_CHECK = 42;
    public static readonly KW_CLEAR = 43;
    public static readonly KW_CLUSTER = 44;
    public static readonly KW_CLUSTERED = 45;
    public static readonly KW_CODEGEN = 46;
    public static readonly KW_COLLATE = 47;
    public static readonly KW_COLLECTION = 48;
    public static readonly KW_COLUMN = 49;
    public static readonly KW_COLUMNS = 50;
    public static readonly KW_COMMENT = 51;
    public static readonly KW_COMMIT = 52;
    public static readonly KW_COMPACT = 53;
    public static readonly KW_COMPACTIONS = 54;
    public static readonly KW_COMPUTE = 55;
    public static readonly KW_CONCATENATE = 56;
    public static readonly KW_CONSTRAINT = 57;
    public static readonly KW_COST = 58;
    public static readonly KW_CREATE = 59;
    public static readonly KW_CROSS = 60;
    public static readonly KW_CUBE = 61;
    public static readonly KW_CURRENT = 62;
    public static readonly KW_CURRENT_DATE = 63;
    public static readonly KW_CURRENT_TIME = 64;
    public static readonly KW_CURRENT_TIMESTAMP = 65;
    public static readonly KW_CURRENT_USER = 66;
    public static readonly KW_DAY = 67;
    public static readonly KW_DAYS = 68;
    public static readonly KW_DAYOFYEAR = 69;
    public static readonly KW_DATA = 70;
    public static readonly KW_DATE = 71;
    public static readonly KW_DATABASE = 72;
    public static readonly KW_DATABASES = 73;
    public static readonly KW_DATEADD = 74;
    public static readonly KW_DATE_ADD = 75;
    public static readonly KW_DATEDIFF = 76;
    public static readonly KW_DATE_DIFF = 77;
    public static readonly KW_DBPROPERTIES = 78;
    public static readonly KW_DEC = 79;
    public static readonly KW_DECIMAL = 80;
    public static readonly KW_DECLARE = 81;
    public static readonly KW_DEFAULT = 82;
    public static readonly KW_DEFINED = 83;
    public static readonly KW_DELETE = 84;
    public static readonly KW_DELIMITED = 85;
    public static readonly KW_DESC = 86;
    public static readonly KW_DESCRIBE = 87;
    public static readonly KW_DFS = 88;
    public static readonly KW_DIRECTORIES = 89;
    public static readonly KW_DIRECTORY = 90;
    public static readonly KW_DISABLE = 91;
    public static readonly KW_DISTINCT = 92;
    public static readonly KW_DISTRIBUTE = 93;
    public static readonly KW_DIV = 94;
    public static readonly KW_DOUBLE = 95;
    public static readonly KW_DROP = 96;
    public static readonly KW_ELSE = 97;
    public static readonly KW_ENABLE = 98;
    public static readonly KW_END = 99;
    public static readonly KW_ESCAPE = 100;
    public static readonly KW_ESCAPED = 101;
    public static readonly KW_EXCEPT = 102;
    public static readonly KW_EXCHANGE = 103;
    public static readonly KW_EXCLUDE = 104;
    public static readonly KW_EXISTS = 105;
    public static readonly KW_EXPLAIN = 106;
    public static readonly KW_EXPORT = 107;
    public static readonly KW_EXTENDED = 108;
    public static readonly KW_EXTERNAL = 109;
    public static readonly KW_EXTRACT = 110;
    public static readonly KW_FALSE = 111;
    public static readonly KW_FETCH = 112;
    public static readonly KW_FIELDS = 113;
    public static readonly KW_FILTER = 114;
    public static readonly KW_FILEFORMAT = 115;
    public static readonly KW_FIRST = 116;
    public static readonly KW_FLOAT = 117;
    public static readonly KW_FOLLOWING = 118;
    public static readonly KW_FOR = 119;
    public static readonly KW_FOREIGN = 120;
    public static readonly KW_FORMAT = 121;
    public static readonly KW_FORMATTED = 122;
    public static readonly KW_FROM = 123;
    public static readonly KW_FULL = 124;
    public static readonly KW_FUNCTION = 125;
    public static readonly KW_FUNCTIONS = 126;
    public static readonly KW_GENERATED = 127;
    public static readonly KW_GLOBAL = 128;
    public static readonly KW_GRANT = 129;
    public static readonly KW_GROUP = 130;
    public static readonly KW_GROUPING = 131;
    public static readonly KW_HAVING = 132;
    public static readonly KW_BINARY_HEX = 133;
    public static readonly KW_HOUR = 134;
    public static readonly KW_HOURS = 135;
    public static readonly KW_IDENTIFIER = 136;
    public static readonly KW_IF = 137;
    public static readonly KW_IGNORE = 138;
    public static readonly KW_IMPORT = 139;
    public static readonly KW_IN = 140;
    public static readonly KW_INCLUDE = 141;
    public static readonly KW_INDEX = 142;
    public static readonly KW_INDEXES = 143;
    public static readonly KW_INNER = 144;
    public static readonly KW_INPATH = 145;
    public static readonly KW_INPUTFORMAT = 146;
    public static readonly KW_INSERT = 147;
    public static readonly KW_INTERSECT = 148;
    public static readonly KW_INTERVAL = 149;
    public static readonly KW_INT = 150;
    public static readonly KW_INTEGER = 151;
    public static readonly KW_INTO = 152;
    public static readonly KW_IS = 153;
    public static readonly KW_ITEMS = 154;
    public static readonly KW_JOIN = 155;
    public static readonly KW_KEYS = 156;
    public static readonly KW_LAST = 157;
    public static readonly KW_LATERAL = 158;
    public static readonly KW_LAZY = 159;
    public static readonly KW_LEADING = 160;
    public static readonly KW_LEFT = 161;
    public static readonly KW_LIKE = 162;
    public static readonly KW_ILIKE = 163;
    public static readonly KW_LIMIT = 164;
    public static readonly KW_LINES = 165;
    public static readonly KW_LIST = 166;
    public static readonly KW_LOAD = 167;
    public static readonly KW_LOCAL = 168;
    public static readonly KW_LOCATION = 169;
    public static readonly KW_LOCK = 170;
    public static readonly KW_LOCKS = 171;
    public static readonly KW_LOGICAL = 172;
    public static readonly KW_LONG = 173;
    public static readonly KW_MACRO = 174;
    public static readonly KW_MATERIALIZED = 175;
    public static readonly KW_MAP = 176;
    public static readonly KW_MATCHED = 177;
    public static readonly KW_MERGE = 178;
    public static readonly KW_MICROSECOND = 179;
    public static readonly KW_MICROSECONDS = 180;
    public static readonly KW_MILLISECOND = 181;
    public static readonly KW_MILLISECONDS = 182;
    public static readonly KW_MINUTE = 183;
    public static readonly KW_MINUTES = 184;
    public static readonly KW_MONTH = 185;
    public static readonly KW_MONTHS = 186;
    public static readonly KW_MSCK = 187;
    public static readonly KW_NAME = 188;
    public static readonly KW_NAMESPACE = 189;
    public static readonly KW_NAMESPACES = 190;
    public static readonly KW_NANOSECOND = 191;
    public static readonly KW_NANOSECONDS = 192;
    public static readonly KW_NATURAL = 193;
    public static readonly KW_NO = 194;
    public static readonly KW_NOSCAN = 195;
    public static readonly KW_NOT = 196;
    public static readonly KW_NULL = 197;
    public static readonly KW_NULLS = 198;
    public static readonly KW_NUMERIC = 199;
    public static readonly KW_OF = 200;
    public static readonly KW_OFFSET = 201;
    public static readonly KW_ON = 202;
    public static readonly KW_ONLY = 203;
    public static readonly KW_OPTIMIZE = 204;
    public static readonly KW_OPTION = 205;
    public static readonly KW_OPTIONS = 206;
    public static readonly KW_OR = 207;
    public static readonly KW_ORDER = 208;
    public static readonly KW_OUT = 209;
    public static readonly KW_OUTER = 210;
    public static readonly KW_OUTPUTFORMAT = 211;
    public static readonly KW_OVER = 212;
    public static readonly KW_OVERLAPS = 213;
    public static readonly KW_OVERLAY = 214;
    public static readonly KW_OVERWRITE = 215;
    public static readonly KW_PARTITION = 216;
    public static readonly KW_PARTITIONED = 217;
    public static readonly KW_PARTITIONS = 218;
    public static readonly KW_PERCENTILE_CONT = 219;
    public static readonly KW_PERCENTILE_DISC = 220;
    public static readonly KW_PERCENTLIT = 221;
    public static readonly KW_PIVOT = 222;
    public static readonly KW_PLACING = 223;
    public static readonly KW_POSITION = 224;
    public static readonly KW_PRECEDING = 225;
    public static readonly KW_PRIMARY = 226;
    public static readonly KW_PRINCIPALS = 227;
    public static readonly KW_PROPERTIES = 228;
    public static readonly KW_PURGE = 229;
    public static readonly KW_QUARTER = 230;
    public static readonly KW_QUERY = 231;
    public static readonly KW_RANGE = 232;
    public static readonly KW_REAL = 233;
    public static readonly KW_RECORDREADER = 234;
    public static readonly KW_RECORDWRITER = 235;
    public static readonly KW_RECOVER = 236;
    public static readonly KW_REDUCE = 237;
    public static readonly KW_REFERENCES = 238;
    public static readonly KW_REFRESH = 239;
    public static readonly KW_RENAME = 240;
    public static readonly KW_REPAIR = 241;
    public static readonly KW_REPEATABLE = 242;
    public static readonly KW_REPLACE = 243;
    public static readonly KW_RESET = 244;
    public static readonly KW_RESPECT = 245;
    public static readonly KW_RESTRICT = 246;
    public static readonly KW_REWRITE = 247;
    public static readonly KW_REVOKE = 248;
    public static readonly KW_RIGHT = 249;
    public static readonly KW_RLIKE = 250;
    public static readonly KW_REGEXP = 251;
    public static readonly KW_ROLE = 252;
    public static readonly KW_ROLES = 253;
    public static readonly KW_ROLLBACK = 254;
    public static readonly KW_ROLLUP = 255;
    public static readonly KW_ROW = 256;
    public static readonly KW_ROWS = 257;
    public static readonly KW_SECOND = 258;
    public static readonly KW_SECONDS = 259;
    public static readonly KW_SCHEMA = 260;
    public static readonly KW_SCHEMAS = 261;
    public static readonly KW_SELECT = 262;
    public static readonly KW_SEMI = 263;
    public static readonly KW_SEPARATED = 264;
    public static readonly KW_SERDE = 265;
    public static readonly KW_SERDEPROPERTIES = 266;
    public static readonly KW_SESSION_USER = 267;
    public static readonly KW_SET = 268;
    public static readonly KW_MINUS = 269;
    public static readonly KW_SETS = 270;
    public static readonly KW_SHORT = 271;
    public static readonly KW_SHOW = 272;
    public static readonly KW_SINGLE = 273;
    public static readonly KW_SKEWED = 274;
    public static readonly KW_SMALLINT = 275;
    public static readonly KW_SOME = 276;
    public static readonly KW_SORT = 277;
    public static readonly KW_SORTED = 278;
    public static readonly KW_SOURCE = 279;
    public static readonly KW_START = 280;
    public static readonly KW_STATISTICS = 281;
    public static readonly KW_STORED = 282;
    public static readonly KW_STRATIFY = 283;
    public static readonly KW_STRING = 284;
    public static readonly KW_STRUCT = 285;
    public static readonly KW_SUBSTR = 286;
    public static readonly KW_SUBSTRING = 287;
    public static readonly KW_SYNC = 288;
    public static readonly KW_SYSTEM = 289;
    public static readonly KW_SYSTEM_TIME = 290;
    public static readonly KW_SYSTEM_VERSION = 291;
    public static readonly KW_TABLE = 292;
    public static readonly KW_TABLES = 293;
    public static readonly KW_TABLESAMPLE = 294;
    public static readonly KW_TARGET = 295;
    public static readonly KW_TBLPROPERTIES = 296;
    public static readonly KW_TEMPORARY = 297;
    public static readonly KW_TERMINATED = 298;
    public static readonly KW_THEN = 299;
    public static readonly KW_TIME = 300;
    public static readonly KW_TIMEDIFF = 301;
    public static readonly KW_TIMESTAMP = 302;
    public static readonly KW_TIMESTAMP_LTZ = 303;
    public static readonly KW_TIMESTAMP_NTZ = 304;
    public static readonly KW_TIMESTAMPADD = 305;
    public static readonly KW_TIMESTAMPDIFF = 306;
    public static readonly KW_TINYINT = 307;
    public static readonly KW_TO = 308;
    public static readonly KW_TOUCH = 309;
    public static readonly KW_TRAILING = 310;
    public static readonly KW_TRANSACTION = 311;
    public static readonly KW_TRANSACTIONS = 312;
    public static readonly KW_TRANSFORM = 313;
    public static readonly KW_TRIM = 314;
    public static readonly KW_TRUE = 315;
    public static readonly KW_TRUNCATE = 316;
    public static readonly KW_TRY_CAST = 317;
    public static readonly KW_TYPE = 318;
    public static readonly KW_UNARCHIVE = 319;
    public static readonly KW_UNBOUNDED = 320;
    public static readonly KW_UNCACHE = 321;
    public static readonly KW_UNION = 322;
    public static readonly KW_UNIQUE = 323;
    public static readonly KW_UNKNOWN = 324;
    public static readonly KW_UNLOCK = 325;
    public static readonly KW_UNPIVOT = 326;
    public static readonly KW_UNSET = 327;
    public static readonly KW_UPDATE = 328;
    public static readonly KW_USE = 329;
    public static readonly KW_USER = 330;
    public static readonly KW_USING = 331;
    public static readonly KW_VALUES = 332;
    public static readonly KW_VARCHAR = 333;
    public static readonly KW_VAR = 334;
    public static readonly KW_VARIABLE = 335;
    public static readonly KW_VERSION = 336;
    public static readonly KW_VIEW = 337;
    public static readonly KW_VIEWS = 338;
    public static readonly KW_VOID = 339;
    public static readonly KW_WEEK = 340;
    public static readonly KW_WEEKS = 341;
    public static readonly KW_WHEN = 342;
    public static readonly KW_WHERE = 343;
    public static readonly KW_WINDOW = 344;
    public static readonly KW_WITH = 345;
    public static readonly KW_WITHIN = 346;
    public static readonly KW_YEAR = 347;
    public static readonly KW_YEARS = 348;
    public static readonly KW_ZONE = 349;
    public static readonly KW_ZORDER = 350;
    public static readonly EQ = 351;
    public static readonly NSEQ = 352;
    public static readonly NEQ = 353;
    public static readonly NEQJ = 354;
    public static readonly LT = 355;
    public static readonly LTE = 356;
    public static readonly GT = 357;
    public static readonly GTE = 358;
    public static readonly NOT = 359;
    public static readonly PLUS = 360;
    public static readonly MINUS = 361;
    public static readonly ASTERISK = 362;
    public static readonly SLASH = 363;
    public static readonly PERCENT = 364;
    public static readonly TILDE = 365;
    public static readonly AMPERSAND = 366;
    public static readonly PIPE = 367;
    public static readonly CONCAT_PIPE = 368;
    public static readonly HAT = 369;
    public static readonly COLON = 370;
    public static readonly ARROW = 371;
    public static readonly FAT_ARROW = 372;
    public static readonly HENT_START = 373;
    public static readonly HENT_END = 374;
    public static readonly QUESTION = 375;
    public static readonly STRING_LITERAL = 376;
    public static readonly DOUBLEQUOTED_STRING = 377;
    public static readonly BIGINT_LITERAL = 378;
    public static readonly SMALLINT_LITERAL = 379;
    public static readonly TINYINT_LITERAL = 380;
    public static readonly INTEGER_VALUE = 381;
    public static readonly EXPONENT_VALUE = 382;
    public static readonly DECIMAL_VALUE = 383;
    public static readonly FLOAT_LITERAL = 384;
    public static readonly DOUBLE_LITERAL = 385;
    public static readonly BIGDECIMAL_LITERAL = 386;
    public static readonly IDENTIFIER = 387;
    public static readonly BACKQUOTED_IDENTIFIER = 388;
    public static readonly SIMPLE_COMMENT = 389;
    public static readonly BRACKETED_COMMENT = 390;
    public static readonly WS = 391;
    public static readonly UNRECOGNIZED = 392;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "';'", "'('", "')'", "','", "'.'", "'['", "']'", "'ADD'", 
        "'AFTER'", "'ALL'", "'ALTER'", "'ALWAYS'", "'ANALYZE'", "'AND'", 
        "'ANTI'", "'ANY'", "'ANY_VALUE'", "'ARCHIVE'", "'ARRAY'", "'AS'", 
        "'ASC'", "'AT'", "'AUTHORIZATION'", "'BETWEEN'", "'BIGINT'", "'BINARY'", 
        "'BOOLEAN'", "'BOTH'", "'BUCKET'", "'BUCKETS'", "'BY'", "'BYTE'", 
        "'CACHE'", "'CASCADE'", "'CASE'", "'CAST'", "'CATALOG'", "'CATALOGS'", 
        "'CHANGE'", "'CHAR'", "'CHARACTER'", "'CHECK'", "'CLEAR'", "'CLUSTER'", 
        "'CLUSTERED'", "'CODEGEN'", "'COLLATE'", "'COLLECTION'", "'COLUMN'", 
        "'COLUMNS'", "'COMMENT'", "'COMMIT'", "'COMPACT'", "'COMPACTIONS'", 
        "'COMPUTE'", "'CONCATENATE'", "'CONSTRAINT'", "'COST'", "'CREATE'", 
        "'CROSS'", "'CUBE'", "'CURRENT'", "'CURRENT_DATE'", "'CURRENT_TIME'", 
        "'CURRENT_TIMESTAMP'", "'CURRENT_USER'", "'DAY'", "'DAYS'", "'DAYOFYEAR'", 
        "'DATA'", "'DATE'", "'DATABASE'", "'DATABASES'", "'DATEADD'", "'DATE_ADD'", 
        "'DATEDIFF'", "'DATE_DIFF'", "'DBPROPERTIES'", "'DEC'", "'DECIMAL'", 
        "'DECLARE'", "'DEFAULT'", "'DEFINED'", "'DELETE'", "'DELIMITED'", 
        "'DESC'", "'DESCRIBE'", "'DFS'", "'DIRECTORIES'", "'DIRECTORY'", 
        "'DISABLE'", "'DISTINCT'", "'DISTRIBUTE'", "'DIV'", "'DOUBLE'", 
        "'DROP'", "'ELSE'", "'ENABLE'", "'END'", "'ESCAPE'", "'ESCAPED'", 
        "'EXCEPT'", "'EXCHANGE'", "'EXCLUDE'", "'EXISTS'", "'EXPLAIN'", 
        "'EXPORT'", "'EXTENDED'", "'EXTERNAL'", "'EXTRACT'", "'FALSE'", 
        "'FETCH'", "'FIELDS'", "'FILTER'", "'FILEFORMAT'", "'FIRST'", "'FLOAT'", 
        "'FOLLOWING'", "'FOR'", "'FOREIGN'", "'FORMAT'", "'FORMATTED'", 
        "'FROM'", "'FULL'", "'FUNCTION'", "'FUNCTIONS'", "'GENERATED'", 
        "'GLOBAL'", "'GRANT'", "'GROUP'", "'GROUPING'", "'HAVING'", "'X'", 
        "'HOUR'", "'HOURS'", "'IDENTIFIER'", "'IF'", "'IGNORE'", "'IMPORT'", 
        "'IN'", "'INCLUDE'", "'INDEX'", "'INDEXES'", "'INNER'", "'INPATH'", 
        "'INPUTFORMAT'", "'INSERT'", "'INTERSECT'", "'INTERVAL'", "'INT'", 
        "'INTEGER'", "'INTO'", "'IS'", "'ITEMS'", "'JOIN'", "'KEYS'", "'LAST'", 
        "'LATERAL'", "'LAZY'", "'LEADING'", "'LEFT'", "'LIKE'", "'ILIKE'", 
        "'LIMIT'", "'LINES'", "'LIST'", "'LOAD'", "'LOCAL'", "'LOCATION'", 
        "'LOCK'", "'LOCKS'", "'LOGICAL'", "'LONG'", "'MACRO'", "'MATERIALIZED'", 
        "'MAP'", "'MATCHED'", "'MERGE'", "'MICROSECOND'", "'MICROSECONDS'", 
        "'MILLISECOND'", "'MILLISECONDS'", "'MINUTE'", "'MINUTES'", "'MONTH'", 
        "'MONTHS'", "'MSCK'", "'NAME'", "'NAMESPACE'", "'NAMESPACES'", "'NANOSECOND'", 
        "'NANOSECONDS'", "'NATURAL'", "'NO'", "'NOSCAN'", "'NOT'", "'NULL'", 
        "'NULLS'", "'NUMERIC'", "'OF'", "'OFFSET'", "'ON'", "'ONLY'", "'OPTIMIZE'", 
        "'OPTION'", "'OPTIONS'", "'OR'", "'ORDER'", "'OUT'", "'OUTER'", 
        "'OUTPUTFORMAT'", "'OVER'", "'OVERLAPS'", "'OVERLAY'", "'OVERWRITE'", 
        "'PARTITION'", "'PARTITIONED'", "'PARTITIONS'", "'PERCENTILE_CONT'", 
        "'PERCENTILE_DISC'", "'PERCENT'", "'PIVOT'", "'PLACING'", "'POSITION'", 
        "'PRECEDING'", "'PRIMARY'", "'PRINCIPALS'", "'PROPERTIES'", "'PURGE'", 
        "'QUARTER'", "'QUERY'", "'RANGE'", "'REAL'", "'RECORDREADER'", "'RECORDWRITER'", 
        "'RECOVER'", "'REDUCE'", "'REFERENCES'", "'REFRESH'", "'RENAME'", 
        "'REPAIR'", "'REPEATABLE'", "'REPLACE'", "'RESET'", "'RESPECT'", 
        "'RESTRICT'", "'REWRITE'", "'REVOKE'", "'RIGHT'", "'RLIKE'", "'REGEXP'", 
        "'ROLE'", "'ROLES'", "'ROLLBACK'", "'ROLLUP'", "'ROW'", "'ROWS'", 
        "'SECOND'", "'SECONDS'", "'SCHEMA'", "'SCHEMAS'", "'SELECT'", "'SEMI'", 
        "'SEPARATED'", "'SERDE'", "'SERDEPROPERTIES'", "'SESSION_USER'", 
        "'SET'", "'MINUS'", "'SETS'", "'SHORT'", "'SHOW'", "'SINGLE'", "'SKEWED'", 
        "'SMALLINT'", "'SOME'", "'SORT'", "'SORTED'", "'SOURCE'", "'START'", 
        "'STATISTICS'", "'STORED'", "'STRATIFY'", "'STRING'", "'STRUCT'", 
        "'SUBSTR'", "'SUBSTRING'", "'SYNC'", "'SYSTEM'", "'SYSTEM_TIME'", 
        "'SYSTEM_VERSION'", "'TABLE'", "'TABLES'", "'TABLESAMPLE'", "'TARGET'", 
        "'TBLPROPERTIES'", "'TEMPORARY'", "'TERMINATED'", "'THEN'", "'TIME'", 
        "'TIMEDIFF'", "'TIMESTAMP'", "'TIMESTAMP_LTZ'", "'TIMESTAMP_NTZ'", 
        "'TIMESTAMPADD'", "'TIMESTAMPDIFF'", "'TINYINT'", "'TO'", "'TOUCH'", 
        "'TRAILING'", "'TRANSACTION'", "'TRANSACTIONS'", "'TRANSFORM'", 
        "'TRIM'", "'TRUE'", "'TRUNCATE'", "'TRY_CAST'", "'TYPE'", "'UNARCHIVE'", 
        "'UNBOUNDED'", "'UNCACHE'", "'UNION'", "'UNIQUE'", "'UNKNOWN'", 
        "'UNLOCK'", "'UNPIVOT'", "'UNSET'", "'UPDATE'", "'USE'", "'USER'", 
        "'USING'", "'VALUES'", "'VARCHAR'", "'VAR'", "'VARIABLE'", "'VERSION'", 
        "'VIEW'", "'VIEWS'", "'VOID'", "'WEEK'", "'WEEKS'", "'WHEN'", "'WHERE'", 
        "'WINDOW'", "'WITH'", "'WITHIN'", "'YEAR'", "'YEARS'", "'ZONE'", 
        "'ZORDER'", null, "'<=>'", "'<>'", "'!='", "'<'", null, "'>'", null, 
        "'!'", "'+'", "'-'", "'*'", "'/'", "'%'", "'~'", "'&'", "'|'", "'||'", 
        "'^'", "':'", "'->'", "'=>'", "'/*+'", "'*/'", "'?'"
    ];

    public static readonly symbolicNames = [
        null, "SEMICOLON", "LEFT_PAREN", "RIGHT_PAREN", "COMMA", "DOT", 
        "LEFT_BRACKET", "RIGHT_BRACKET", "KW_ADD", "KW_AFTER", "KW_ALL", 
        "KW_ALTER", "KW_ALWAYS", "KW_ANALYZE", "KW_AND", "KW_ANTI", "KW_ANY", 
        "KW_ANY_VALUE", "KW_ARCHIVE", "KW_ARRAY", "KW_AS", "KW_ASC", "KW_AT", 
        "KW_AUTHORIZATION", "KW_BETWEEN", "KW_BIGINT", "KW_BINARY", "KW_BOOLEAN", 
        "KW_BOTH", "KW_BUCKET", "KW_BUCKETS", "KW_BY", "KW_BYTE", "KW_CACHE", 
        "KW_CASCADE", "KW_CASE", "KW_CAST", "KW_CATALOG", "KW_CATALOGS", 
        "KW_CHANGE", "KW_CHAR", "KW_CHARACTER", "KW_CHECK", "KW_CLEAR", 
        "KW_CLUSTER", "KW_CLUSTERED", "KW_CODEGEN", "KW_COLLATE", "KW_COLLECTION", 
        "KW_COLUMN", "KW_COLUMNS", "KW_COMMENT", "KW_COMMIT", "KW_COMPACT", 
        "KW_COMPACTIONS", "KW_COMPUTE", "KW_CONCATENATE", "KW_CONSTRAINT", 
        "KW_COST", "KW_CREATE", "KW_CROSS", "KW_CUBE", "KW_CURRENT", "KW_CURRENT_DATE", 
        "KW_CURRENT_TIME", "KW_CURRENT_TIMESTAMP", "KW_CURRENT_USER", "KW_DAY", 
        "KW_DAYS", "KW_DAYOFYEAR", "KW_DATA", "KW_DATE", "KW_DATABASE", 
        "KW_DATABASES", "KW_DATEADD", "KW_DATE_ADD", "KW_DATEDIFF", "KW_DATE_DIFF", 
        "KW_DBPROPERTIES", "KW_DEC", "KW_DECIMAL", "KW_DECLARE", "KW_DEFAULT", 
        "KW_DEFINED", "KW_DELETE", "KW_DELIMITED", "KW_DESC", "KW_DESCRIBE", 
        "KW_DFS", "KW_DIRECTORIES", "KW_DIRECTORY", "KW_DISABLE", "KW_DISTINCT", 
        "KW_DISTRIBUTE", "KW_DIV", "KW_DOUBLE", "KW_DROP", "KW_ELSE", "KW_ENABLE", 
        "KW_END", "KW_ESCAPE", "KW_ESCAPED", "KW_EXCEPT", "KW_EXCHANGE", 
        "KW_EXCLUDE", "KW_EXISTS", "KW_EXPLAIN", "KW_EXPORT", "KW_EXTENDED", 
        "KW_EXTERNAL", "KW_EXTRACT", "KW_FALSE", "KW_FETCH", "KW_FIELDS", 
        "KW_FILTER", "KW_FILEFORMAT", "KW_FIRST", "KW_FLOAT", "KW_FOLLOWING", 
        "KW_FOR", "KW_FOREIGN", "KW_FORMAT", "KW_FORMATTED", "KW_FROM", 
        "KW_FULL", "KW_FUNCTION", "KW_FUNCTIONS", "KW_GENERATED", "KW_GLOBAL", 
        "KW_GRANT", "KW_GROUP", "KW_GROUPING", "KW_HAVING", "KW_BINARY_HEX", 
        "KW_HOUR", "KW_HOURS", "KW_IDENTIFIER", "KW_IF", "KW_IGNORE", "KW_IMPORT", 
        "KW_IN", "KW_INCLUDE", "KW_INDEX", "KW_INDEXES", "KW_INNER", "KW_INPATH", 
        "KW_INPUTFORMAT", "KW_INSERT", "KW_INTERSECT", "KW_INTERVAL", "KW_INT", 
        "KW_INTEGER", "KW_INTO", "KW_IS", "KW_ITEMS", "KW_JOIN", "KW_KEYS", 
        "KW_LAST", "KW_LATERAL", "KW_LAZY", "KW_LEADING", "KW_LEFT", "KW_LIKE", 
        "KW_ILIKE", "KW_LIMIT", "KW_LINES", "KW_LIST", "KW_LOAD", "KW_LOCAL", 
        "KW_LOCATION", "KW_LOCK", "KW_LOCKS", "KW_LOGICAL", "KW_LONG", "KW_MACRO", 
        "KW_MATERIALIZED", "KW_MAP", "KW_MATCHED", "KW_MERGE", "KW_MICROSECOND", 
        "KW_MICROSECONDS", "KW_MILLISECOND", "KW_MILLISECONDS", "KW_MINUTE", 
        "KW_MINUTES", "KW_MONTH", "KW_MONTHS", "KW_MSCK", "KW_NAME", "KW_NAMESPACE", 
        "KW_NAMESPACES", "KW_NANOSECOND", "KW_NANOSECONDS", "KW_NATURAL", 
        "KW_NO", "KW_NOSCAN", "KW_NOT", "KW_NULL", "KW_NULLS", "KW_NUMERIC", 
        "KW_OF", "KW_OFFSET", "KW_ON", "KW_ONLY", "KW_OPTIMIZE", "KW_OPTION", 
        "KW_OPTIONS", "KW_OR", "KW_ORDER", "KW_OUT", "KW_OUTER", "KW_OUTPUTFORMAT", 
        "KW_OVER", "KW_OVERLAPS", "KW_OVERLAY", "KW_OVERWRITE", "KW_PARTITION", 
        "KW_PARTITIONED", "KW_PARTITIONS", "KW_PERCENTILE_CONT", "KW_PERCENTILE_DISC", 
        "KW_PERCENTLIT", "KW_PIVOT", "KW_PLACING", "KW_POSITION", "KW_PRECEDING", 
        "KW_PRIMARY", "KW_PRINCIPALS", "KW_PROPERTIES", "KW_PURGE", "KW_QUARTER", 
        "KW_QUERY", "KW_RANGE", "KW_REAL", "KW_RECORDREADER", "KW_RECORDWRITER", 
        "KW_RECOVER", "KW_REDUCE", "KW_REFERENCES", "KW_REFRESH", "KW_RENAME", 
        "KW_REPAIR", "KW_REPEATABLE", "KW_REPLACE", "KW_RESET", "KW_RESPECT", 
        "KW_RESTRICT", "KW_REWRITE", "KW_REVOKE", "KW_RIGHT", "KW_RLIKE", 
        "KW_REGEXP", "KW_ROLE", "KW_ROLES", "KW_ROLLBACK", "KW_ROLLUP", 
        "KW_ROW", "KW_ROWS", "KW_SECOND", "KW_SECONDS", "KW_SCHEMA", "KW_SCHEMAS", 
        "KW_SELECT", "KW_SEMI", "KW_SEPARATED", "KW_SERDE", "KW_SERDEPROPERTIES", 
        "KW_SESSION_USER", "KW_SET", "KW_MINUS", "KW_SETS", "KW_SHORT", 
        "KW_SHOW", "KW_SINGLE", "KW_SKEWED", "KW_SMALLINT", "KW_SOME", "KW_SORT", 
        "KW_SORTED", "KW_SOURCE", "KW_START", "KW_STATISTICS", "KW_STORED", 
        "KW_STRATIFY", "KW_STRING", "KW_STRUCT", "KW_SUBSTR", "KW_SUBSTRING", 
        "KW_SYNC", "KW_SYSTEM", "KW_SYSTEM_TIME", "KW_SYSTEM_VERSION", "KW_TABLE", 
        "KW_TABLES", "KW_TABLESAMPLE", "KW_TARGET", "KW_TBLPROPERTIES", 
        "KW_TEMPORARY", "KW_TERMINATED", "KW_THEN", "KW_TIME", "KW_TIMEDIFF", 
        "KW_TIMESTAMP", "KW_TIMESTAMP_LTZ", "KW_TIMESTAMP_NTZ", "KW_TIMESTAMPADD", 
        "KW_TIMESTAMPDIFF", "KW_TINYINT", "KW_TO", "KW_TOUCH", "KW_TRAILING", 
        "KW_TRANSACTION", "KW_TRANSACTIONS", "KW_TRANSFORM", "KW_TRIM", 
        "KW_TRUE", "KW_TRUNCATE", "KW_TRY_CAST", "KW_TYPE", "KW_UNARCHIVE", 
        "KW_UNBOUNDED", "KW_UNCACHE", "KW_UNION", "KW_UNIQUE", "KW_UNKNOWN", 
        "KW_UNLOCK", "KW_UNPIVOT", "KW_UNSET", "KW_UPDATE", "KW_USE", "KW_USER", 
        "KW_USING", "KW_VALUES", "KW_VARCHAR", "KW_VAR", "KW_VARIABLE", 
        "KW_VERSION", "KW_VIEW", "KW_VIEWS", "KW_VOID", "KW_WEEK", "KW_WEEKS", 
        "KW_WHEN", "KW_WHERE", "KW_WINDOW", "KW_WITH", "KW_WITHIN", "KW_YEAR", 
        "KW_YEARS", "KW_ZONE", "KW_ZORDER", "EQ", "NSEQ", "NEQ", "NEQJ", 
        "LT", "LTE", "GT", "GTE", "NOT", "PLUS", "MINUS", "ASTERISK", "SLASH", 
        "PERCENT", "TILDE", "AMPERSAND", "PIPE", "CONCAT_PIPE", "HAT", "COLON", 
        "ARROW", "FAT_ARROW", "HENT_START", "HENT_END", "QUESTION", "STRING_LITERAL", 
        "DOUBLEQUOTED_STRING", "BIGINT_LITERAL", "SMALLINT_LITERAL", "TINYINT_LITERAL", 
        "INTEGER_VALUE", "EXPONENT_VALUE", "DECIMAL_VALUE", "FLOAT_LITERAL", 
        "DOUBLE_LITERAL", "BIGDECIMAL_LITERAL", "IDENTIFIER", "BACKQUOTED_IDENTIFIER", 
        "SIMPLE_COMMENT", "BRACKETED_COMMENT", "WS", "UNRECOGNIZED"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "SEMICOLON", "LEFT_PAREN", "RIGHT_PAREN", "COMMA", "DOT", "LEFT_BRACKET", 
        "RIGHT_BRACKET", "KW_ADD", "KW_AFTER", "KW_ALL", "KW_ALTER", "KW_ALWAYS", 
        "KW_ANALYZE", "KW_AND", "KW_ANTI", "KW_ANY", "KW_ANY_VALUE", "KW_ARCHIVE", 
        "KW_ARRAY", "KW_AS", "KW_ASC", "KW_AT", "KW_AUTHORIZATION", "KW_BETWEEN", 
        "KW_BIGINT", "KW_BINARY", "KW_BOOLEAN", "KW_BOTH", "KW_BUCKET", 
        "KW_BUCKETS", "KW_BY", "KW_BYTE", "KW_CACHE", "KW_CASCADE", "KW_CASE", 
        "KW_CAST", "KW_CATALOG", "KW_CATALOGS", "KW_CHANGE", "KW_CHAR", 
        "KW_CHARACTER", "KW_CHECK", "KW_CLEAR", "KW_CLUSTER", "KW_CLUSTERED", 
        "KW_CODEGEN", "KW_COLLATE", "KW_COLLECTION", "KW_COLUMN", "KW_COLUMNS", 
        "KW_COMMENT", "KW_COMMIT", "KW_COMPACT", "KW_COMPACTIONS", "KW_COMPUTE", 
        "KW_CONCATENATE", "KW_CONSTRAINT", "KW_COST", "KW_CREATE", "KW_CROSS", 
        "KW_CUBE", "KW_CURRENT", "KW_CURRENT_DATE", "KW_CURRENT_TIME", "KW_CURRENT_TIMESTAMP", 
        "KW_CURRENT_USER", "KW_DAY", "KW_DAYS", "KW_DAYOFYEAR", "KW_DATA", 
        "KW_DATE", "KW_DATABASE", "KW_DATABASES", "KW_DATEADD", "KW_DATE_ADD", 
        "KW_DATEDIFF", "KW_DATE_DIFF", "KW_DBPROPERTIES", "KW_DEC", "KW_DECIMAL", 
        "KW_DECLARE", "KW_DEFAULT", "KW_DEFINED", "KW_DELETE", "KW_DELIMITED", 
        "KW_DESC", "KW_DESCRIBE", "KW_DFS", "KW_DIRECTORIES", "KW_DIRECTORY", 
        "KW_DISABLE", "KW_DISTINCT", "KW_DISTRIBUTE", "KW_DIV", "KW_DOUBLE", 
        "KW_DROP", "KW_ELSE", "KW_ENABLE", "KW_END", "KW_ESCAPE", "KW_ESCAPED", 
        "KW_EXCEPT", "KW_EXCHANGE", "KW_EXCLUDE", "KW_EXISTS", "KW_EXPLAIN", 
        "KW_EXPORT", "KW_EXTENDED", "KW_EXTERNAL", "KW_EXTRACT", "KW_FALSE", 
        "KW_FETCH", "KW_FIELDS", "KW_FILTER", "KW_FILEFORMAT", "KW_FIRST", 
        "KW_FLOAT", "KW_FOLLOWING", "KW_FOR", "KW_FOREIGN", "KW_FORMAT", 
        "KW_FORMATTED", "KW_FROM", "KW_FULL", "KW_FUNCTION", "KW_FUNCTIONS", 
        "KW_GENERATED", "KW_GLOBAL", "KW_GRANT", "KW_GROUP", "KW_GROUPING", 
        "KW_HAVING", "KW_BINARY_HEX", "KW_HOUR", "KW_HOURS", "KW_IDENTIFIER", 
        "KW_IF", "KW_IGNORE", "KW_IMPORT", "KW_IN", "KW_INCLUDE", "KW_INDEX", 
        "KW_INDEXES", "KW_INNER", "KW_INPATH", "KW_INPUTFORMAT", "KW_INSERT", 
        "KW_INTERSECT", "KW_INTERVAL", "KW_INT", "KW_INTEGER", "KW_INTO", 
        "KW_IS", "KW_ITEMS", "KW_JOIN", "KW_KEYS", "KW_LAST", "KW_LATERAL", 
        "KW_LAZY", "KW_LEADING", "KW_LEFT", "KW_LIKE", "KW_ILIKE", "KW_LIMIT", 
        "KW_LINES", "KW_LIST", "KW_LOAD", "KW_LOCAL", "KW_LOCATION", "KW_LOCK", 
        "KW_LOCKS", "KW_LOGICAL", "KW_LONG", "KW_MACRO", "KW_MATERIALIZED", 
        "KW_MAP", "KW_MATCHED", "KW_MERGE", "KW_MICROSECOND", "KW_MICROSECONDS", 
        "KW_MILLISECOND", "KW_MILLISECONDS", "KW_MINUTE", "KW_MINUTES", 
        "KW_MONTH", "KW_MONTHS", "KW_MSCK", "KW_NAME", "KW_NAMESPACE", "KW_NAMESPACES", 
        "KW_NANOSECOND", "KW_NANOSECONDS", "KW_NATURAL", "KW_NO", "KW_NOSCAN", 
        "KW_NOT", "KW_NULL", "KW_NULLS", "KW_NUMERIC", "KW_OF", "KW_OFFSET", 
        "KW_ON", "KW_ONLY", "KW_OPTIMIZE", "KW_OPTION", "KW_OPTIONS", "KW_OR", 
        "KW_ORDER", "KW_OUT", "KW_OUTER", "KW_OUTPUTFORMAT", "KW_OVER", 
        "KW_OVERLAPS", "KW_OVERLAY", "KW_OVERWRITE", "KW_PARTITION", "KW_PARTITIONED", 
        "KW_PARTITIONS", "KW_PERCENTILE_CONT", "KW_PERCENTILE_DISC", "KW_PERCENTLIT", 
        "KW_PIVOT", "KW_PLACING", "KW_POSITION", "KW_PRECEDING", "KW_PRIMARY", 
        "KW_PRINCIPALS", "KW_PROPERTIES", "KW_PURGE", "KW_QUARTER", "KW_QUERY", 
        "KW_RANGE", "KW_REAL", "KW_RECORDREADER", "KW_RECORDWRITER", "KW_RECOVER", 
        "KW_REDUCE", "KW_REFERENCES", "KW_REFRESH", "KW_RENAME", "KW_REPAIR", 
        "KW_REPEATABLE", "KW_REPLACE", "KW_RESET", "KW_RESPECT", "KW_RESTRICT", 
        "KW_REWRITE", "KW_REVOKE", "KW_RIGHT", "KW_RLIKE", "KW_REGEXP", 
        "KW_ROLE", "KW_ROLES", "KW_ROLLBACK", "KW_ROLLUP", "KW_ROW", "KW_ROWS", 
        "KW_SECOND", "KW_SECONDS", "KW_SCHEMA", "KW_SCHEMAS", "KW_SELECT", 
        "KW_SEMI", "KW_SEPARATED", "KW_SERDE", "KW_SERDEPROPERTIES", "KW_SESSION_USER", 
        "KW_SET", "KW_MINUS", "KW_SETS", "KW_SHORT", "KW_SHOW", "KW_SINGLE", 
        "KW_SKEWED", "KW_SMALLINT", "KW_SOME", "KW_SORT", "KW_SORTED", "KW_SOURCE", 
        "KW_START", "KW_STATISTICS", "KW_STORED", "KW_STRATIFY", "KW_STRING", 
        "KW_STRUCT", "KW_SUBSTR", "KW_SUBSTRING", "KW_SYNC", "KW_SYSTEM", 
        "KW_SYSTEM_TIME", "KW_SYSTEM_VERSION", "KW_TABLE", "KW_TABLES", 
        "KW_TABLESAMPLE", "KW_TARGET", "KW_TBLPROPERTIES", "KW_TEMPORARY", 
        "KW_TERMINATED", "KW_THEN", "KW_TIME", "KW_TIMEDIFF", "KW_TIMESTAMP", 
        "KW_TIMESTAMP_LTZ", "KW_TIMESTAMP_NTZ", "KW_TIMESTAMPADD", "KW_TIMESTAMPDIFF", 
        "KW_TINYINT", "KW_TO", "KW_TOUCH", "KW_TRAILING", "KW_TRANSACTION", 
        "KW_TRANSACTIONS", "KW_TRANSFORM", "KW_TRIM", "KW_TRUE", "KW_TRUNCATE", 
        "KW_TRY_CAST", "KW_TYPE", "KW_UNARCHIVE", "KW_UNBOUNDED", "KW_UNCACHE", 
        "KW_UNION", "KW_UNIQUE", "KW_UNKNOWN", "KW_UNLOCK", "KW_UNPIVOT", 
        "KW_UNSET", "KW_UPDATE", "KW_USE", "KW_USER", "KW_USING", "KW_VALUES", 
        "KW_VARCHAR", "KW_VAR", "KW_VARIABLE", "KW_VERSION", "KW_VIEW", 
        "KW_VIEWS", "KW_VOID", "KW_WEEK", "KW_WEEKS", "KW_WHEN", "KW_WHERE", 
        "KW_WINDOW", "KW_WITH", "KW_WITHIN", "KW_YEAR", "KW_YEARS", "KW_ZONE", 
        "KW_ZORDER", "EQ", "NSEQ", "NEQ", "NEQJ", "LT", "LTE", "GT", "GTE", 
        "NOT", "PLUS", "MINUS", "ASTERISK", "SLASH", "PERCENT", "TILDE", 
        "AMPERSAND", "PIPE", "CONCAT_PIPE", "HAT", "COLON", "ARROW", "FAT_ARROW", 
        "HENT_START", "HENT_END", "QUESTION", "STRING_LITERAL", "DOUBLEQUOTED_STRING", 
        "BIGINT_LITERAL", "SMALLINT_LITERAL", "TINYINT_LITERAL", "INTEGER_VALUE", 
        "EXPONENT_VALUE", "DECIMAL_VALUE", "FLOAT_LITERAL", "DOUBLE_LITERAL", 
        "BIGDECIMAL_LITERAL", "IDENTIFIER", "BACKQUOTED_IDENTIFIER", "DECIMAL_DIGITS", 
        "EXPONENT", "DIGIT", "LETTER", "SIMPLE_COMMENT", "BRACKETED_COMMENT", 
        "WS", "UNRECOGNIZED",
    ];


      /**
       * When true, parser should throw ParseException for unclosed bracketed comment.
       */
      public has_unclosed_bracketed_comment = false;

      /**
       * This method will be called when the character stream ends and try to find out the
       * unclosed bracketed comment.
       * If the method be called, it means the end of the entire character stream match,
       * and we set the flag and fail later.
       */
      public markUnclosedComment() {
        this.has_unclosed_bracketed_comment = true;
      }


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, SparkSqlLexer._ATN, SparkSqlLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "SparkSqlLexer.g4"; }

    public get literalNames(): (string | null)[] { return SparkSqlLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return SparkSqlLexer.symbolicNames; }
    public get ruleNames(): string[] { return SparkSqlLexer.ruleNames; }

    public get serializedATN(): number[] { return SparkSqlLexer._serializedATN; }

    public get channelNames(): string[] { return SparkSqlLexer.channelNames; }

    public get modeNames(): string[] { return SparkSqlLexer.modeNames; }

    public override action(localContext: antlr.RuleContext | null, ruleIndex: number, actionIndex: number): void {
        switch (ruleIndex) {
        case 393:
            this.BRACKETED_COMMENT_action(localContext, actionIndex);
            break;
        }
    }
    private BRACKETED_COMMENT_action(localContext: antlr.RuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 0:
            this.markUnclosedComment();
            break;
        }
    }

    public static readonly _serializedATN: number[] = [
        4,0,392,3697,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,
        5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
        2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,
        7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,
        2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,
        7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
        2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,
        7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,
        2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,
        7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,
        2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,
        7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,
        2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,
        7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,
        2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,
        7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
        7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,
        2,109,7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,
        7,114,2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,
        2,120,7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,
        7,125,2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,
        2,131,7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,
        7,136,2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,
        2,142,7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,
        7,147,2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,
        2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,7,157,2,158,
        7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,7,163,
        2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,
        7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,
        2,175,7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,
        7,180,2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,
        2,186,7,186,2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,
        7,191,2,192,7,192,2,193,7,193,2,194,7,194,2,195,7,195,2,196,7,196,
        2,197,7,197,2,198,7,198,2,199,7,199,2,200,7,200,2,201,7,201,2,202,
        7,202,2,203,7,203,2,204,7,204,2,205,7,205,2,206,7,206,2,207,7,207,
        2,208,7,208,2,209,7,209,2,210,7,210,2,211,7,211,2,212,7,212,2,213,
        7,213,2,214,7,214,2,215,7,215,2,216,7,216,2,217,7,217,2,218,7,218,
        2,219,7,219,2,220,7,220,2,221,7,221,2,222,7,222,2,223,7,223,2,224,
        7,224,2,225,7,225,2,226,7,226,2,227,7,227,2,228,7,228,2,229,7,229,
        2,230,7,230,2,231,7,231,2,232,7,232,2,233,7,233,2,234,7,234,2,235,
        7,235,2,236,7,236,2,237,7,237,2,238,7,238,2,239,7,239,2,240,7,240,
        2,241,7,241,2,242,7,242,2,243,7,243,2,244,7,244,2,245,7,245,2,246,
        7,246,2,247,7,247,2,248,7,248,2,249,7,249,2,250,7,250,2,251,7,251,
        2,252,7,252,2,253,7,253,2,254,7,254,2,255,7,255,2,256,7,256,2,257,
        7,257,2,258,7,258,2,259,7,259,2,260,7,260,2,261,7,261,2,262,7,262,
        2,263,7,263,2,264,7,264,2,265,7,265,2,266,7,266,2,267,7,267,2,268,
        7,268,2,269,7,269,2,270,7,270,2,271,7,271,2,272,7,272,2,273,7,273,
        2,274,7,274,2,275,7,275,2,276,7,276,2,277,7,277,2,278,7,278,2,279,
        7,279,2,280,7,280,2,281,7,281,2,282,7,282,2,283,7,283,2,284,7,284,
        2,285,7,285,2,286,7,286,2,287,7,287,2,288,7,288,2,289,7,289,2,290,
        7,290,2,291,7,291,2,292,7,292,2,293,7,293,2,294,7,294,2,295,7,295,
        2,296,7,296,2,297,7,297,2,298,7,298,2,299,7,299,2,300,7,300,2,301,
        7,301,2,302,7,302,2,303,7,303,2,304,7,304,2,305,7,305,2,306,7,306,
        2,307,7,307,2,308,7,308,2,309,7,309,2,310,7,310,2,311,7,311,2,312,
        7,312,2,313,7,313,2,314,7,314,2,315,7,315,2,316,7,316,2,317,7,317,
        2,318,7,318,2,319,7,319,2,320,7,320,2,321,7,321,2,322,7,322,2,323,
        7,323,2,324,7,324,2,325,7,325,2,326,7,326,2,327,7,327,2,328,7,328,
        2,329,7,329,2,330,7,330,2,331,7,331,2,332,7,332,2,333,7,333,2,334,
        7,334,2,335,7,335,2,336,7,336,2,337,7,337,2,338,7,338,2,339,7,339,
        2,340,7,340,2,341,7,341,2,342,7,342,2,343,7,343,2,344,7,344,2,345,
        7,345,2,346,7,346,2,347,7,347,2,348,7,348,2,349,7,349,2,350,7,350,
        2,351,7,351,2,352,7,352,2,353,7,353,2,354,7,354,2,355,7,355,2,356,
        7,356,2,357,7,357,2,358,7,358,2,359,7,359,2,360,7,360,2,361,7,361,
        2,362,7,362,2,363,7,363,2,364,7,364,2,365,7,365,2,366,7,366,2,367,
        7,367,2,368,7,368,2,369,7,369,2,370,7,370,2,371,7,371,2,372,7,372,
        2,373,7,373,2,374,7,374,2,375,7,375,2,376,7,376,2,377,7,377,2,378,
        7,378,2,379,7,379,2,380,7,380,2,381,7,381,2,382,7,382,2,383,7,383,
        2,384,7,384,2,385,7,385,2,386,7,386,2,387,7,387,2,388,7,388,2,389,
        7,389,2,390,7,390,2,391,7,391,2,392,7,392,2,393,7,393,2,394,7,394,
        2,395,7,395,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,
        1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,
        1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,
        1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,
        1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,
        1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,
        1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,
        1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
        1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,
        1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,
        1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,28,
        1,28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,
        1,29,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,
        1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,
        1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,
        1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,
        1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,
        1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,
        1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,
        1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,45,1,45,
        1,45,1,45,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,
        1,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,48,
        1,48,1,48,1,48,1,48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,
        1,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,51,1,51,1,51,1,51,
        1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,53,1,53,
        1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,54,1,54,1,54,
        1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,
        1,55,1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,
        1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,58,1,58,1,58,1,58,1,58,1,58,
        1,58,1,59,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,61,
        1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,1,62,
        1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,1,63,1,63,
        1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,
        1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,65,
        1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,66,
        1,66,1,66,1,66,1,67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,
        1,68,1,68,1,68,1,68,1,68,1,69,1,69,1,69,1,69,1,69,1,70,1,70,1,70,
        1,70,1,70,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,72,1,72,
        1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,73,1,73,1,73,1,73,1,73,
        1,73,1,73,1,73,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,75,
        1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,76,1,76,1,76,1,76,1,76,
        1,76,1,76,1,76,1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,
        1,77,1,77,1,77,1,77,1,77,1,78,1,78,1,78,1,78,1,79,1,79,1,79,1,79,
        1,79,1,79,1,79,1,79,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,81,
        1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,82,1,82,1,82,1,82,1,82,1,82,
        1,82,1,82,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,84,1,84,1,84,1,84,
        1,84,1,84,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,1,86,1,86,
        1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,87,1,87,1,87,1,87,1,88,1,88,
        1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,89,1,89,1,89,
        1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,90,1,90,1,90,1,90,1,90,1,90,
        1,90,1,90,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,92,1,92,
        1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,93,1,93,1,93,1,93,
        1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,1,95,1,96,
        1,96,1,96,1,96,1,96,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,98,1,98,
        1,98,1,98,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,100,1,100,1,100,1,
        100,1,100,1,100,1,100,1,100,1,101,1,101,1,101,1,101,1,101,1,101,
        1,101,1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,103,
        1,103,1,103,1,103,1,103,1,103,1,103,1,103,1,104,1,104,1,104,1,104,
        1,104,1,104,1,104,1,105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,
        1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,107,1,107,1,107,1,107,
        1,107,1,107,1,107,1,107,1,107,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,
        1,110,1,110,1,110,1,110,1,110,1,110,1,111,1,111,1,111,1,111,1,111,
        1,111,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,113,1,113,1,113,
        1,113,1,113,1,113,1,113,1,114,1,114,1,114,1,114,1,114,1,114,1,114,
        1,114,1,114,1,114,1,114,1,115,1,115,1,115,1,115,1,115,1,115,1,116,
        1,116,1,116,1,116,1,116,1,116,1,117,1,117,1,117,1,117,1,117,1,117,
        1,117,1,117,1,117,1,117,1,118,1,118,1,118,1,118,1,119,1,119,1,119,
        1,119,1,119,1,119,1,119,1,119,1,120,1,120,1,120,1,120,1,120,1,120,
        1,120,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,
        1,122,1,122,1,122,1,122,1,122,1,123,1,123,1,123,1,123,1,123,1,124,
        1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,125,1,125,1,125,
        1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,126,1,126,1,126,1,126,
        1,126,1,126,1,126,1,126,1,126,1,126,1,127,1,127,1,127,1,127,1,127,
        1,127,1,127,1,128,1,128,1,128,1,128,1,128,1,128,1,129,1,129,1,129,
        1,129,1,129,1,129,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,
        1,130,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,132,1,132,1,133,
        1,133,1,133,1,133,1,133,1,134,1,134,1,134,1,134,1,134,1,134,1,135,
        1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,136,
        1,136,1,136,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,138,1,138,
        1,138,1,138,1,138,1,138,1,138,1,139,1,139,1,139,1,140,1,140,1,140,
        1,140,1,140,1,140,1,140,1,140,1,141,1,141,1,141,1,141,1,141,1,141,
        1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,143,1,143,1,143,
        1,143,1,143,1,143,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,145,
        1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,
        1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,147,1,147,1,147,1,147,
        1,147,1,147,1,147,1,147,1,147,1,147,1,148,1,148,1,148,1,148,1,148,
        1,148,1,148,1,148,1,148,1,149,1,149,1,149,1,149,1,150,1,150,1,150,
        1,150,1,150,1,150,1,150,1,150,1,151,1,151,1,151,1,151,1,151,1,152,
        1,152,1,152,1,153,1,153,1,153,1,153,1,153,1,153,1,154,1,154,1,154,
        1,154,1,154,1,155,1,155,1,155,1,155,1,155,1,156,1,156,1,156,1,156,
        1,156,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,158,1,158,
        1,158,1,158,1,158,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,
        1,160,1,160,1,160,1,160,1,160,1,161,1,161,1,161,1,161,1,161,1,162,
        1,162,1,162,1,162,1,162,1,162,1,163,1,163,1,163,1,163,1,163,1,163,
        1,164,1,164,1,164,1,164,1,164,1,164,1,165,1,165,1,165,1,165,1,165,
        1,166,1,166,1,166,1,166,1,166,1,167,1,167,1,167,1,167,1,167,1,167,
        1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,169,1,169,
        1,169,1,169,1,169,1,170,1,170,1,170,1,170,1,170,1,170,1,171,1,171,
        1,171,1,171,1,171,1,171,1,171,1,171,1,172,1,172,1,172,1,172,1,172,
        1,173,1,173,1,173,1,173,1,173,1,173,1,174,1,174,1,174,1,174,1,174,
        1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,175,1,175,1,175,
        1,175,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,177,1,177,
        1,177,1,177,1,177,1,177,1,178,1,178,1,178,1,178,1,178,1,178,1,178,
        1,178,1,178,1,178,1,178,1,178,1,179,1,179,1,179,1,179,1,179,1,179,
        1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,180,1,180,1,180,1,180,
        1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,181,1,181,1,181,
        1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,182,
        1,182,1,182,1,182,1,182,1,182,1,182,1,183,1,183,1,183,1,183,1,183,
        1,183,1,183,1,183,1,184,1,184,1,184,1,184,1,184,1,184,1,185,1,185,
        1,185,1,185,1,185,1,185,1,185,1,186,1,186,1,186,1,186,1,186,1,187,
        1,187,1,187,1,187,1,187,1,188,1,188,1,188,1,188,1,188,1,188,1,188,
        1,188,1,188,1,188,1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,189,
        1,189,1,189,1,189,1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,190,
        1,190,1,190,1,190,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,
        1,191,1,191,1,191,1,191,1,192,1,192,1,192,1,192,1,192,1,192,1,192,
        1,192,1,193,1,193,1,193,1,194,1,194,1,194,1,194,1,194,1,194,1,194,
        1,195,1,195,1,195,1,195,1,196,1,196,1,196,1,196,1,196,1,197,1,197,
        1,197,1,197,1,197,1,197,1,198,1,198,1,198,1,198,1,198,1,198,1,198,
        1,198,1,199,1,199,1,199,1,200,1,200,1,200,1,200,1,200,1,200,1,200,
        1,201,1,201,1,201,1,202,1,202,1,202,1,202,1,202,1,203,1,203,1,203,
        1,203,1,203,1,203,1,203,1,203,1,203,1,204,1,204,1,204,1,204,1,204,
        1,204,1,204,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,206,
        1,206,1,206,1,207,1,207,1,207,1,207,1,207,1,207,1,208,1,208,1,208,
        1,208,1,209,1,209,1,209,1,209,1,209,1,209,1,210,1,210,1,210,1,210,
        1,210,1,210,1,210,1,210,1,210,1,210,1,210,1,210,1,210,1,211,1,211,
        1,211,1,211,1,211,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,
        1,212,1,213,1,213,1,213,1,213,1,213,1,213,1,213,1,213,1,214,1,214,
        1,214,1,214,1,214,1,214,1,214,1,214,1,214,1,214,1,215,1,215,1,215,
        1,215,1,215,1,215,1,215,1,215,1,215,1,215,1,216,1,216,1,216,1,216,
        1,216,1,216,1,216,1,216,1,216,1,216,1,216,1,216,1,217,1,217,1,217,
        1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,218,1,218,1,218,
        1,218,1,218,1,218,1,218,1,218,1,218,1,218,1,218,1,218,1,218,1,218,
        1,218,1,218,1,219,1,219,1,219,1,219,1,219,1,219,1,219,1,219,1,219,
        1,219,1,219,1,219,1,219,1,219,1,219,1,219,1,220,1,220,1,220,1,220,
        1,220,1,220,1,220,1,220,1,221,1,221,1,221,1,221,1,221,1,221,1,222,
        1,222,1,222,1,222,1,222,1,222,1,222,1,222,1,223,1,223,1,223,1,223,
        1,223,1,223,1,223,1,223,1,223,1,224,1,224,1,224,1,224,1,224,1,224,
        1,224,1,224,1,224,1,224,1,225,1,225,1,225,1,225,1,225,1,225,1,225,
        1,225,1,226,1,226,1,226,1,226,1,226,1,226,1,226,1,226,1,226,1,226,
        1,226,1,227,1,227,1,227,1,227,1,227,1,227,1,227,1,227,1,227,1,227,
        1,227,1,228,1,228,1,228,1,228,1,228,1,228,1,229,1,229,1,229,1,229,
        1,229,1,229,1,229,1,229,1,230,1,230,1,230,1,230,1,230,1,230,1,231,
        1,231,1,231,1,231,1,231,1,231,1,232,1,232,1,232,1,232,1,232,1,233,
        1,233,1,233,1,233,1,233,1,233,1,233,1,233,1,233,1,233,1,233,1,233,
        1,233,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,234,
        1,234,1,234,1,234,1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,235,
        1,236,1,236,1,236,1,236,1,236,1,236,1,236,1,237,1,237,1,237,1,237,
        1,237,1,237,1,237,1,237,1,237,1,237,1,237,1,238,1,238,1,238,1,238,
        1,238,1,238,1,238,1,238,1,239,1,239,1,239,1,239,1,239,1,239,1,239,
        1,240,1,240,1,240,1,240,1,240,1,240,1,240,1,241,1,241,1,241,1,241,
        1,241,1,241,1,241,1,241,1,241,1,241,1,241,1,242,1,242,1,242,1,242,
        1,242,1,242,1,242,1,242,1,243,1,243,1,243,1,243,1,243,1,243,1,244,
        1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,245,1,245,1,245,1,245,
        1,245,1,245,1,245,1,245,1,245,1,246,1,246,1,246,1,246,1,246,1,246,
        1,246,1,246,1,247,1,247,1,247,1,247,1,247,1,247,1,247,1,248,1,248,
        1,248,1,248,1,248,1,248,1,249,1,249,1,249,1,249,1,249,1,249,1,250,
        1,250,1,250,1,250,1,250,1,250,1,250,1,251,1,251,1,251,1,251,1,251,
        1,252,1,252,1,252,1,252,1,252,1,252,1,253,1,253,1,253,1,253,1,253,
        1,253,1,253,1,253,1,253,1,254,1,254,1,254,1,254,1,254,1,254,1,254,
        1,255,1,255,1,255,1,255,1,256,1,256,1,256,1,256,1,256,1,257,1,257,
        1,257,1,257,1,257,1,257,1,257,1,258,1,258,1,258,1,258,1,258,1,258,
        1,258,1,258,1,259,1,259,1,259,1,259,1,259,1,259,1,259,1,260,1,260,
        1,260,1,260,1,260,1,260,1,260,1,260,1,261,1,261,1,261,1,261,1,261,
        1,261,1,261,1,262,1,262,1,262,1,262,1,262,1,263,1,263,1,263,1,263,
        1,263,1,263,1,263,1,263,1,263,1,263,1,264,1,264,1,264,1,264,1,264,
        1,264,1,265,1,265,1,265,1,265,1,265,1,265,1,265,1,265,1,265,1,265,
        1,265,1,265,1,265,1,265,1,265,1,265,1,266,1,266,1,266,1,266,1,266,
        1,266,1,266,1,266,1,266,1,266,1,266,1,266,1,266,1,267,1,267,1,267,
        1,267,1,268,1,268,1,268,1,268,1,268,1,268,1,269,1,269,1,269,1,269,
        1,269,1,270,1,270,1,270,1,270,1,270,1,270,1,271,1,271,1,271,1,271,
        1,271,1,272,1,272,1,272,1,272,1,272,1,272,1,272,1,273,1,273,1,273,
        1,273,1,273,1,273,1,273,1,274,1,274,1,274,1,274,1,274,1,274,1,274,
        1,274,1,274,1,275,1,275,1,275,1,275,1,275,1,276,1,276,1,276,1,276,
        1,276,1,277,1,277,1,277,1,277,1,277,1,277,1,277,1,278,1,278,1,278,
        1,278,1,278,1,278,1,278,1,279,1,279,1,279,1,279,1,279,1,279,1,280,
        1,280,1,280,1,280,1,280,1,280,1,280,1,280,1,280,1,280,1,280,1,281,
        1,281,1,281,1,281,1,281,1,281,1,281,1,282,1,282,1,282,1,282,1,282,
        1,282,1,282,1,282,1,282,1,283,1,283,1,283,1,283,1,283,1,283,1,283,
        1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,285,1,285,1,285,1,285,
        1,285,1,285,1,285,1,286,1,286,1,286,1,286,1,286,1,286,1,286,1,286,
        1,286,1,286,1,287,1,287,1,287,1,287,1,287,1,288,1,288,1,288,1,288,
        1,288,1,288,1,288,1,289,1,289,1,289,1,289,1,289,1,289,1,289,1,289,
        1,289,1,289,1,289,1,289,1,290,1,290,1,290,1,290,1,290,1,290,1,290,
        1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,291,1,291,1,291,
        1,291,1,291,1,291,1,292,1,292,1,292,1,292,1,292,1,292,1,292,1,293,
        1,293,1,293,1,293,1,293,1,293,1,293,1,293,1,293,1,293,1,293,1,293,
        1,294,1,294,1,294,1,294,1,294,1,294,1,294,1,295,1,295,1,295,1,295,
        1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,296,
        1,296,1,296,1,296,1,296,1,296,1,296,1,296,1,296,1,296,1,297,1,297,
        1,297,1,297,1,297,1,297,1,297,1,297,1,297,1,297,1,297,1,298,1,298,
        1,298,1,298,1,298,1,299,1,299,1,299,1,299,1,299,1,300,1,300,1,300,
        1,300,1,300,1,300,1,300,1,300,1,300,1,301,1,301,1,301,1,301,1,301,
        1,301,1,301,1,301,1,301,1,301,1,302,1,302,1,302,1,302,1,302,1,302,
        1,302,1,302,1,302,1,302,1,302,1,302,1,302,1,302,1,303,1,303,1,303,
        1,303,1,303,1,303,1,303,1,303,1,303,1,303,1,303,1,303,1,303,1,303,
        1,304,1,304,1,304,1,304,1,304,1,304,1,304,1,304,1,304,1,304,1,304,
        1,304,1,304,1,305,1,305,1,305,1,305,1,305,1,305,1,305,1,305,1,305,
        1,305,1,305,1,305,1,305,1,305,1,306,1,306,1,306,1,306,1,306,1,306,
        1,306,1,306,1,307,1,307,1,307,1,308,1,308,1,308,1,308,1,308,1,308,
        1,309,1,309,1,309,1,309,1,309,1,309,1,309,1,309,1,309,1,310,1,310,
        1,310,1,310,1,310,1,310,1,310,1,310,1,310,1,310,1,310,1,310,1,311,
        1,311,1,311,1,311,1,311,1,311,1,311,1,311,1,311,1,311,1,311,1,311,
        1,311,1,312,1,312,1,312,1,312,1,312,1,312,1,312,1,312,1,312,1,312,
        1,313,1,313,1,313,1,313,1,313,1,314,1,314,1,314,1,314,1,314,1,315,
        1,315,1,315,1,315,1,315,1,315,1,315,1,315,1,315,1,316,1,316,1,316,
        1,316,1,316,1,316,1,316,1,316,1,316,1,317,1,317,1,317,1,317,1,317,
        1,318,1,318,1,318,1,318,1,318,1,318,1,318,1,318,1,318,1,318,1,319,
        1,319,1,319,1,319,1,319,1,319,1,319,1,319,1,319,1,319,1,320,1,320,
        1,320,1,320,1,320,1,320,1,320,1,320,1,321,1,321,1,321,1,321,1,321,
        1,321,1,322,1,322,1,322,1,322,1,322,1,322,1,322,1,323,1,323,1,323,
        1,323,1,323,1,323,1,323,1,323,1,324,1,324,1,324,1,324,1,324,1,324,
        1,324,1,325,1,325,1,325,1,325,1,325,1,325,1,325,1,325,1,326,1,326,
        1,326,1,326,1,326,1,326,1,327,1,327,1,327,1,327,1,327,1,327,1,327,
        1,328,1,328,1,328,1,328,1,329,1,329,1,329,1,329,1,329,1,330,1,330,
        1,330,1,330,1,330,1,330,1,331,1,331,1,331,1,331,1,331,1,331,1,331,
        1,332,1,332,1,332,1,332,1,332,1,332,1,332,1,332,1,333,1,333,1,333,
        1,333,1,334,1,334,1,334,1,334,1,334,1,334,1,334,1,334,1,334,1,335,
        1,335,1,335,1,335,1,335,1,335,1,335,1,335,1,336,1,336,1,336,1,336,
        1,336,1,337,1,337,1,337,1,337,1,337,1,337,1,338,1,338,1,338,1,338,
        1,338,1,339,1,339,1,339,1,339,1,339,1,340,1,340,1,340,1,340,1,340,
        1,340,1,341,1,341,1,341,1,341,1,341,1,342,1,342,1,342,1,342,1,342,
        1,342,1,343,1,343,1,343,1,343,1,343,1,343,1,343,1,344,1,344,1,344,
        1,344,1,344,1,345,1,345,1,345,1,345,1,345,1,345,1,345,1,346,1,346,
        1,346,1,346,1,346,1,347,1,347,1,347,1,347,1,347,1,347,1,348,1,348,
        1,348,1,348,1,348,1,349,1,349,1,349,1,349,1,349,1,349,1,349,1,350,
        1,350,1,350,3,350,3394,8,350,1,351,1,351,1,351,1,351,1,352,1,352,
        1,352,1,353,1,353,1,353,1,354,1,354,1,355,1,355,1,355,1,355,3,355,
        3412,8,355,1,356,1,356,1,357,1,357,1,357,1,357,3,357,3420,8,357,
        1,358,1,358,1,359,1,359,1,360,1,360,1,361,1,361,1,362,1,362,1,363,
        1,363,1,364,1,364,1,365,1,365,1,366,1,366,1,367,1,367,1,367,1,368,
        1,368,1,369,1,369,1,370,1,370,1,370,1,371,1,371,1,371,1,372,1,372,
        1,372,1,372,1,373,1,373,1,373,1,374,1,374,1,375,1,375,1,375,1,375,
        5,375,3466,8,375,10,375,12,375,3469,9,375,1,375,1,375,1,375,1,375,
        1,375,5,375,3476,8,375,10,375,12,375,3479,9,375,1,375,1,375,1,375,
        1,375,1,375,5,375,3486,8,375,10,375,12,375,3489,9,375,1,375,3,375,
        3492,8,375,1,376,1,376,1,376,1,376,5,376,3498,8,376,10,376,12,376,
        3501,9,376,1,376,1,376,1,377,4,377,3506,8,377,11,377,12,377,3507,
        1,377,1,377,1,378,4,378,3513,8,378,11,378,12,378,3514,1,378,1,378,
        1,379,4,379,3520,8,379,11,379,12,379,3521,1,379,1,379,1,380,4,380,
        3527,8,380,11,380,12,380,3528,1,381,4,381,3532,8,381,11,381,12,381,
        3533,1,381,1,381,1,381,1,381,1,381,3,381,3541,8,381,1,382,1,382,
        1,383,4,383,3546,8,383,11,383,12,383,3547,1,383,3,383,3551,8,383,
        1,383,1,383,1,383,1,383,3,383,3557,8,383,1,383,1,383,3,383,3561,
        8,383,1,384,4,384,3564,8,384,11,384,12,384,3565,1,384,3,384,3569,
        8,384,1,384,1,384,1,384,1,384,3,384,3575,8,384,1,384,1,384,3,384,
        3579,8,384,1,385,4,385,3582,8,385,11,385,12,385,3583,1,385,3,385,
        3587,8,385,1,385,1,385,1,385,1,385,1,385,3,385,3594,8,385,1,385,
        1,385,1,385,3,385,3599,8,385,1,386,1,386,1,386,4,386,3604,8,386,
        11,386,12,386,3605,1,387,1,387,1,387,1,387,5,387,3612,8,387,10,387,
        12,387,3615,9,387,1,387,1,387,1,388,4,388,3620,8,388,11,388,12,388,
        3621,1,388,1,388,5,388,3626,8,388,10,388,12,388,3629,9,388,1,388,
        1,388,4,388,3633,8,388,11,388,12,388,3634,3,388,3637,8,388,1,389,
        1,389,3,389,3641,8,389,1,389,4,389,3644,8,389,11,389,12,389,3645,
        1,390,1,390,1,391,1,391,1,392,1,392,1,392,1,392,1,392,1,392,5,392,
        3658,8,392,10,392,12,392,3661,9,392,1,392,3,392,3664,8,392,1,392,
        3,392,3667,8,392,1,392,1,392,1,393,1,393,1,393,1,393,1,393,5,393,
        3676,8,393,10,393,12,393,3679,9,393,1,393,1,393,1,393,1,393,3,393,
        3685,8,393,1,393,1,393,1,394,4,394,3690,8,394,11,394,12,394,3691,
        1,394,1,394,1,395,1,395,1,3677,0,396,1,1,3,2,5,3,7,4,9,5,11,6,13,
        7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,
        37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,
        59,30,61,31,63,32,65,33,67,34,69,35,71,36,73,37,75,38,77,39,79,40,
        81,41,83,42,85,43,87,44,89,45,91,46,93,47,95,48,97,49,99,50,101,
        51,103,52,105,53,107,54,109,55,111,56,113,57,115,58,117,59,119,60,
        121,61,123,62,125,63,127,64,129,65,131,66,133,67,135,68,137,69,139,
        70,141,71,143,72,145,73,147,74,149,75,151,76,153,77,155,78,157,79,
        159,80,161,81,163,82,165,83,167,84,169,85,171,86,173,87,175,88,177,
        89,179,90,181,91,183,92,185,93,187,94,189,95,191,96,193,97,195,98,
        197,99,199,100,201,101,203,102,205,103,207,104,209,105,211,106,213,
        107,215,108,217,109,219,110,221,111,223,112,225,113,227,114,229,
        115,231,116,233,117,235,118,237,119,239,120,241,121,243,122,245,
        123,247,124,249,125,251,126,253,127,255,128,257,129,259,130,261,
        131,263,132,265,133,267,134,269,135,271,136,273,137,275,138,277,
        139,279,140,281,141,283,142,285,143,287,144,289,145,291,146,293,
        147,295,148,297,149,299,150,301,151,303,152,305,153,307,154,309,
        155,311,156,313,157,315,158,317,159,319,160,321,161,323,162,325,
        163,327,164,329,165,331,166,333,167,335,168,337,169,339,170,341,
        171,343,172,345,173,347,174,349,175,351,176,353,177,355,178,357,
        179,359,180,361,181,363,182,365,183,367,184,369,185,371,186,373,
        187,375,188,377,189,379,190,381,191,383,192,385,193,387,194,389,
        195,391,196,393,197,395,198,397,199,399,200,401,201,403,202,405,
        203,407,204,409,205,411,206,413,207,415,208,417,209,419,210,421,
        211,423,212,425,213,427,214,429,215,431,216,433,217,435,218,437,
        219,439,220,441,221,443,222,445,223,447,224,449,225,451,226,453,
        227,455,228,457,229,459,230,461,231,463,232,465,233,467,234,469,
        235,471,236,473,237,475,238,477,239,479,240,481,241,483,242,485,
        243,487,244,489,245,491,246,493,247,495,248,497,249,499,250,501,
        251,503,252,505,253,507,254,509,255,511,256,513,257,515,258,517,
        259,519,260,521,261,523,262,525,263,527,264,529,265,531,266,533,
        267,535,268,537,269,539,270,541,271,543,272,545,273,547,274,549,
        275,551,276,553,277,555,278,557,279,559,280,561,281,563,282,565,
        283,567,284,569,285,571,286,573,287,575,288,577,289,579,290,581,
        291,583,292,585,293,587,294,589,295,591,296,593,297,595,298,597,
        299,599,300,601,301,603,302,605,303,607,304,609,305,611,306,613,
        307,615,308,617,309,619,310,621,311,623,312,625,313,627,314,629,
        315,631,316,633,317,635,318,637,319,639,320,641,321,643,322,645,
        323,647,324,649,325,651,326,653,327,655,328,657,329,659,330,661,
        331,663,332,665,333,667,334,669,335,671,336,673,337,675,338,677,
        339,679,340,681,341,683,342,685,343,687,344,689,345,691,346,693,
        347,695,348,697,349,699,350,701,351,703,352,705,353,707,354,709,
        355,711,356,713,357,715,358,717,359,719,360,721,361,723,362,725,
        363,727,364,729,365,731,366,733,367,735,368,737,369,739,370,741,
        371,743,372,745,373,747,374,749,375,751,376,753,377,755,378,757,
        379,759,380,761,381,763,382,765,383,767,384,769,385,771,386,773,
        387,775,388,777,0,779,0,781,0,783,0,785,389,787,390,789,391,791,
        392,1,0,36,2,0,65,65,97,97,2,0,68,68,100,100,2,0,70,70,102,102,2,
        0,84,84,116,116,2,0,69,69,101,101,2,0,82,82,114,114,2,0,76,76,108,
        108,2,0,87,87,119,119,2,0,89,89,121,121,2,0,83,83,115,115,2,0,78,
        78,110,110,2,0,90,90,122,122,2,0,73,73,105,105,2,0,86,86,118,118,
        2,0,85,85,117,117,2,0,67,67,99,99,2,0,72,72,104,104,2,0,79,79,111,
        111,2,0,66,66,98,98,2,0,71,71,103,103,2,0,75,75,107,107,2,0,77,77,
        109,109,2,0,80,80,112,112,2,0,88,88,120,120,2,0,74,74,106,106,2,
        0,81,81,113,113,2,0,39,39,92,92,1,0,39,39,1,0,34,34,2,0,34,34,92,
        92,1,0,96,96,2,0,43,43,45,45,1,0,48,57,2,0,65,90,97,122,2,0,10,10,
        13,13,3,0,9,10,13,13,32,32,3740,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,
        0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,
        0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,
        0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,
        0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,
        0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,
        0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,
        0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,
        0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,
        0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,
        0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,
        0,0,0,0,107,1,0,0,0,0,109,1,0,0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,
        115,1,0,0,0,0,117,1,0,0,0,0,119,1,0,0,0,0,121,1,0,0,0,0,123,1,0,
        0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,0,0,131,1,0,0,0,0,133,
        1,0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,0,0,0,141,1,0,0,0,
        0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,1,0,0,0,0,151,1,
        0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,0,159,1,0,0,0,0,
        161,1,0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,0,0,169,1,0,
        0,0,0,171,1,0,0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,177,1,0,0,0,0,179,
        1,0,0,0,0,181,1,0,0,0,0,183,1,0,0,0,0,185,1,0,0,0,0,187,1,0,0,0,
        0,189,1,0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,0,195,1,0,0,0,0,197,1,
        0,0,0,0,199,1,0,0,0,0,201,1,0,0,0,0,203,1,0,0,0,0,205,1,0,0,0,0,
        207,1,0,0,0,0,209,1,0,0,0,0,211,1,0,0,0,0,213,1,0,0,0,0,215,1,0,
        0,0,0,217,1,0,0,0,0,219,1,0,0,0,0,221,1,0,0,0,0,223,1,0,0,0,0,225,
        1,0,0,0,0,227,1,0,0,0,0,229,1,0,0,0,0,231,1,0,0,0,0,233,1,0,0,0,
        0,235,1,0,0,0,0,237,1,0,0,0,0,239,1,0,0,0,0,241,1,0,0,0,0,243,1,
        0,0,0,0,245,1,0,0,0,0,247,1,0,0,0,0,249,1,0,0,0,0,251,1,0,0,0,0,
        253,1,0,0,0,0,255,1,0,0,0,0,257,1,0,0,0,0,259,1,0,0,0,0,261,1,0,
        0,0,0,263,1,0,0,0,0,265,1,0,0,0,0,267,1,0,0,0,0,269,1,0,0,0,0,271,
        1,0,0,0,0,273,1,0,0,0,0,275,1,0,0,0,0,277,1,0,0,0,0,279,1,0,0,0,
        0,281,1,0,0,0,0,283,1,0,0,0,0,285,1,0,0,0,0,287,1,0,0,0,0,289,1,
        0,0,0,0,291,1,0,0,0,0,293,1,0,0,0,0,295,1,0,0,0,0,297,1,0,0,0,0,
        299,1,0,0,0,0,301,1,0,0,0,0,303,1,0,0,0,0,305,1,0,0,0,0,307,1,0,
        0,0,0,309,1,0,0,0,0,311,1,0,0,0,0,313,1,0,0,0,0,315,1,0,0,0,0,317,
        1,0,0,0,0,319,1,0,0,0,0,321,1,0,0,0,0,323,1,0,0,0,0,325,1,0,0,0,
        0,327,1,0,0,0,0,329,1,0,0,0,0,331,1,0,0,0,0,333,1,0,0,0,0,335,1,
        0,0,0,0,337,1,0,0,0,0,339,1,0,0,0,0,341,1,0,0,0,0,343,1,0,0,0,0,
        345,1,0,0,0,0,347,1,0,0,0,0,349,1,0,0,0,0,351,1,0,0,0,0,353,1,0,
        0,0,0,355,1,0,0,0,0,357,1,0,0,0,0,359,1,0,0,0,0,361,1,0,0,0,0,363,
        1,0,0,0,0,365,1,0,0,0,0,367,1,0,0,0,0,369,1,0,0,0,0,371,1,0,0,0,
        0,373,1,0,0,0,0,375,1,0,0,0,0,377,1,0,0,0,0,379,1,0,0,0,0,381,1,
        0,0,0,0,383,1,0,0,0,0,385,1,0,0,0,0,387,1,0,0,0,0,389,1,0,0,0,0,
        391,1,0,0,0,0,393,1,0,0,0,0,395,1,0,0,0,0,397,1,0,0,0,0,399,1,0,
        0,0,0,401,1,0,0,0,0,403,1,0,0,0,0,405,1,0,0,0,0,407,1,0,0,0,0,409,
        1,0,0,0,0,411,1,0,0,0,0,413,1,0,0,0,0,415,1,0,0,0,0,417,1,0,0,0,
        0,419,1,0,0,0,0,421,1,0,0,0,0,423,1,0,0,0,0,425,1,0,0,0,0,427,1,
        0,0,0,0,429,1,0,0,0,0,431,1,0,0,0,0,433,1,0,0,0,0,435,1,0,0,0,0,
        437,1,0,0,0,0,439,1,0,0,0,0,441,1,0,0,0,0,443,1,0,0,0,0,445,1,0,
        0,0,0,447,1,0,0,0,0,449,1,0,0,0,0,451,1,0,0,0,0,453,1,0,0,0,0,455,
        1,0,0,0,0,457,1,0,0,0,0,459,1,0,0,0,0,461,1,0,0,0,0,463,1,0,0,0,
        0,465,1,0,0,0,0,467,1,0,0,0,0,469,1,0,0,0,0,471,1,0,0,0,0,473,1,
        0,0,0,0,475,1,0,0,0,0,477,1,0,0,0,0,479,1,0,0,0,0,481,1,0,0,0,0,
        483,1,0,0,0,0,485,1,0,0,0,0,487,1,0,0,0,0,489,1,0,0,0,0,491,1,0,
        0,0,0,493,1,0,0,0,0,495,1,0,0,0,0,497,1,0,0,0,0,499,1,0,0,0,0,501,
        1,0,0,0,0,503,1,0,0,0,0,505,1,0,0,0,0,507,1,0,0,0,0,509,1,0,0,0,
        0,511,1,0,0,0,0,513,1,0,0,0,0,515,1,0,0,0,0,517,1,0,0,0,0,519,1,
        0,0,0,0,521,1,0,0,0,0,523,1,0,0,0,0,525,1,0,0,0,0,527,1,0,0,0,0,
        529,1,0,0,0,0,531,1,0,0,0,0,533,1,0,0,0,0,535,1,0,0,0,0,537,1,0,
        0,0,0,539,1,0,0,0,0,541,1,0,0,0,0,543,1,0,0,0,0,545,1,0,0,0,0,547,
        1,0,0,0,0,549,1,0,0,0,0,551,1,0,0,0,0,553,1,0,0,0,0,555,1,0,0,0,
        0,557,1,0,0,0,0,559,1,0,0,0,0,561,1,0,0,0,0,563,1,0,0,0,0,565,1,
        0,0,0,0,567,1,0,0,0,0,569,1,0,0,0,0,571,1,0,0,0,0,573,1,0,0,0,0,
        575,1,0,0,0,0,577,1,0,0,0,0,579,1,0,0,0,0,581,1,0,0,0,0,583,1,0,
        0,0,0,585,1,0,0,0,0,587,1,0,0,0,0,589,1,0,0,0,0,591,1,0,0,0,0,593,
        1,0,0,0,0,595,1,0,0,0,0,597,1,0,0,0,0,599,1,0,0,0,0,601,1,0,0,0,
        0,603,1,0,0,0,0,605,1,0,0,0,0,607,1,0,0,0,0,609,1,0,0,0,0,611,1,
        0,0,0,0,613,1,0,0,0,0,615,1,0,0,0,0,617,1,0,0,0,0,619,1,0,0,0,0,
        621,1,0,0,0,0,623,1,0,0,0,0,625,1,0,0,0,0,627,1,0,0,0,0,629,1,0,
        0,0,0,631,1,0,0,0,0,633,1,0,0,0,0,635,1,0,0,0,0,637,1,0,0,0,0,639,
        1,0,0,0,0,641,1,0,0,0,0,643,1,0,0,0,0,645,1,0,0,0,0,647,1,0,0,0,
        0,649,1,0,0,0,0,651,1,0,0,0,0,653,1,0,0,0,0,655,1,0,0,0,0,657,1,
        0,0,0,0,659,1,0,0,0,0,661,1,0,0,0,0,663,1,0,0,0,0,665,1,0,0,0,0,
        667,1,0,0,0,0,669,1,0,0,0,0,671,1,0,0,0,0,673,1,0,0,0,0,675,1,0,
        0,0,0,677,1,0,0,0,0,679,1,0,0,0,0,681,1,0,0,0,0,683,1,0,0,0,0,685,
        1,0,0,0,0,687,1,0,0,0,0,689,1,0,0,0,0,691,1,0,0,0,0,693,1,0,0,0,
        0,695,1,0,0,0,0,697,1,0,0,0,0,699,1,0,0,0,0,701,1,0,0,0,0,703,1,
        0,0,0,0,705,1,0,0,0,0,707,1,0,0,0,0,709,1,0,0,0,0,711,1,0,0,0,0,
        713,1,0,0,0,0,715,1,0,0,0,0,717,1,0,0,0,0,719,1,0,0,0,0,721,1,0,
        0,0,0,723,1,0,0,0,0,725,1,0,0,0,0,727,1,0,0,0,0,729,1,0,0,0,0,731,
        1,0,0,0,0,733,1,0,0,0,0,735,1,0,0,0,0,737,1,0,0,0,0,739,1,0,0,0,
        0,741,1,0,0,0,0,743,1,0,0,0,0,745,1,0,0,0,0,747,1,0,0,0,0,749,1,
        0,0,0,0,751,1,0,0,0,0,753,1,0,0,0,0,755,1,0,0,0,0,757,1,0,0,0,0,
        759,1,0,0,0,0,761,1,0,0,0,0,763,1,0,0,0,0,765,1,0,0,0,0,767,1,0,
        0,0,0,769,1,0,0,0,0,771,1,0,0,0,0,773,1,0,0,0,0,775,1,0,0,0,0,785,
        1,0,0,0,0,787,1,0,0,0,0,789,1,0,0,0,0,791,1,0,0,0,1,793,1,0,0,0,
        3,795,1,0,0,0,5,797,1,0,0,0,7,799,1,0,0,0,9,801,1,0,0,0,11,803,1,
        0,0,0,13,805,1,0,0,0,15,807,1,0,0,0,17,811,1,0,0,0,19,817,1,0,0,
        0,21,821,1,0,0,0,23,827,1,0,0,0,25,834,1,0,0,0,27,842,1,0,0,0,29,
        846,1,0,0,0,31,851,1,0,0,0,33,855,1,0,0,0,35,865,1,0,0,0,37,873,
        1,0,0,0,39,879,1,0,0,0,41,882,1,0,0,0,43,886,1,0,0,0,45,889,1,0,
        0,0,47,903,1,0,0,0,49,911,1,0,0,0,51,918,1,0,0,0,53,925,1,0,0,0,
        55,933,1,0,0,0,57,938,1,0,0,0,59,945,1,0,0,0,61,953,1,0,0,0,63,956,
        1,0,0,0,65,961,1,0,0,0,67,967,1,0,0,0,69,975,1,0,0,0,71,980,1,0,
        0,0,73,985,1,0,0,0,75,993,1,0,0,0,77,1002,1,0,0,0,79,1009,1,0,0,
        0,81,1014,1,0,0,0,83,1024,1,0,0,0,85,1030,1,0,0,0,87,1036,1,0,0,
        0,89,1044,1,0,0,0,91,1054,1,0,0,0,93,1062,1,0,0,0,95,1070,1,0,0,
        0,97,1081,1,0,0,0,99,1088,1,0,0,0,101,1096,1,0,0,0,103,1104,1,0,
        0,0,105,1111,1,0,0,0,107,1119,1,0,0,0,109,1131,1,0,0,0,111,1139,
        1,0,0,0,113,1151,1,0,0,0,115,1162,1,0,0,0,117,1167,1,0,0,0,119,1174,
        1,0,0,0,121,1180,1,0,0,0,123,1185,1,0,0,0,125,1193,1,0,0,0,127,1206,
        1,0,0,0,129,1219,1,0,0,0,131,1237,1,0,0,0,133,1250,1,0,0,0,135,1254,
        1,0,0,0,137,1259,1,0,0,0,139,1269,1,0,0,0,141,1274,1,0,0,0,143,1279,
        1,0,0,0,145,1288,1,0,0,0,147,1298,1,0,0,0,149,1306,1,0,0,0,151,1315,
        1,0,0,0,153,1324,1,0,0,0,155,1334,1,0,0,0,157,1347,1,0,0,0,159,1351,
        1,0,0,0,161,1359,1,0,0,0,163,1367,1,0,0,0,165,1375,1,0,0,0,167,1383,
        1,0,0,0,169,1390,1,0,0,0,171,1400,1,0,0,0,173,1405,1,0,0,0,175,1414,
        1,0,0,0,177,1418,1,0,0,0,179,1430,1,0,0,0,181,1440,1,0,0,0,183,1448,
        1,0,0,0,185,1457,1,0,0,0,187,1468,1,0,0,0,189,1472,1,0,0,0,191,1479,
        1,0,0,0,193,1484,1,0,0,0,195,1489,1,0,0,0,197,1496,1,0,0,0,199,1500,
        1,0,0,0,201,1507,1,0,0,0,203,1515,1,0,0,0,205,1522,1,0,0,0,207,1531,
        1,0,0,0,209,1539,1,0,0,0,211,1546,1,0,0,0,213,1554,1,0,0,0,215,1561,
        1,0,0,0,217,1570,1,0,0,0,219,1579,1,0,0,0,221,1587,1,0,0,0,223,1593,
        1,0,0,0,225,1599,1,0,0,0,227,1606,1,0,0,0,229,1613,1,0,0,0,231,1624,
        1,0,0,0,233,1630,1,0,0,0,235,1636,1,0,0,0,237,1646,1,0,0,0,239,1650,
        1,0,0,0,241,1658,1,0,0,0,243,1665,1,0,0,0,245,1675,1,0,0,0,247,1680,
        1,0,0,0,249,1685,1,0,0,0,251,1694,1,0,0,0,253,1704,1,0,0,0,255,1714,
        1,0,0,0,257,1721,1,0,0,0,259,1727,1,0,0,0,261,1733,1,0,0,0,263,1742,
        1,0,0,0,265,1749,1,0,0,0,267,1751,1,0,0,0,269,1756,1,0,0,0,271,1762,
        1,0,0,0,273,1773,1,0,0,0,275,1776,1,0,0,0,277,1783,1,0,0,0,279,1790,
        1,0,0,0,281,1793,1,0,0,0,283,1801,1,0,0,0,285,1807,1,0,0,0,287,1815,
        1,0,0,0,289,1821,1,0,0,0,291,1828,1,0,0,0,293,1840,1,0,0,0,295,1847,
        1,0,0,0,297,1857,1,0,0,0,299,1866,1,0,0,0,301,1870,1,0,0,0,303,1878,
        1,0,0,0,305,1883,1,0,0,0,307,1886,1,0,0,0,309,1892,1,0,0,0,311,1897,
        1,0,0,0,313,1902,1,0,0,0,315,1907,1,0,0,0,317,1915,1,0,0,0,319,1920,
        1,0,0,0,321,1928,1,0,0,0,323,1933,1,0,0,0,325,1938,1,0,0,0,327,1944,
        1,0,0,0,329,1950,1,0,0,0,331,1956,1,0,0,0,333,1961,1,0,0,0,335,1966,
        1,0,0,0,337,1972,1,0,0,0,339,1981,1,0,0,0,341,1986,1,0,0,0,343,1992,
        1,0,0,0,345,2000,1,0,0,0,347,2005,1,0,0,0,349,2011,1,0,0,0,351,2024,
        1,0,0,0,353,2028,1,0,0,0,355,2036,1,0,0,0,357,2042,1,0,0,0,359,2054,
        1,0,0,0,361,2067,1,0,0,0,363,2079,1,0,0,0,365,2092,1,0,0,0,367,2099,
        1,0,0,0,369,2107,1,0,0,0,371,2113,1,0,0,0,373,2120,1,0,0,0,375,2125,
        1,0,0,0,377,2130,1,0,0,0,379,2140,1,0,0,0,381,2151,1,0,0,0,383,2162,
        1,0,0,0,385,2174,1,0,0,0,387,2182,1,0,0,0,389,2185,1,0,0,0,391,2192,
        1,0,0,0,393,2196,1,0,0,0,395,2201,1,0,0,0,397,2207,1,0,0,0,399,2215,
        1,0,0,0,401,2218,1,0,0,0,403,2225,1,0,0,0,405,2228,1,0,0,0,407,2233,
        1,0,0,0,409,2242,1,0,0,0,411,2249,1,0,0,0,413,2257,1,0,0,0,415,2260,
        1,0,0,0,417,2266,1,0,0,0,419,2270,1,0,0,0,421,2276,1,0,0,0,423,2289,
        1,0,0,0,425,2294,1,0,0,0,427,2303,1,0,0,0,429,2311,1,0,0,0,431,2321,
        1,0,0,0,433,2331,1,0,0,0,435,2343,1,0,0,0,437,2354,1,0,0,0,439,2370,
        1,0,0,0,441,2386,1,0,0,0,443,2394,1,0,0,0,445,2400,1,0,0,0,447,2408,
        1,0,0,0,449,2417,1,0,0,0,451,2427,1,0,0,0,453,2435,1,0,0,0,455,2446,
        1,0,0,0,457,2457,1,0,0,0,459,2463,1,0,0,0,461,2471,1,0,0,0,463,2477,
        1,0,0,0,465,2483,1,0,0,0,467,2488,1,0,0,0,469,2501,1,0,0,0,471,2514,
        1,0,0,0,473,2522,1,0,0,0,475,2529,1,0,0,0,477,2540,1,0,0,0,479,2548,
        1,0,0,0,481,2555,1,0,0,0,483,2562,1,0,0,0,485,2573,1,0,0,0,487,2581,
        1,0,0,0,489,2587,1,0,0,0,491,2595,1,0,0,0,493,2604,1,0,0,0,495,2612,
        1,0,0,0,497,2619,1,0,0,0,499,2625,1,0,0,0,501,2631,1,0,0,0,503,2638,
        1,0,0,0,505,2643,1,0,0,0,507,2649,1,0,0,0,509,2658,1,0,0,0,511,2665,
        1,0,0,0,513,2669,1,0,0,0,515,2674,1,0,0,0,517,2681,1,0,0,0,519,2689,
        1,0,0,0,521,2696,1,0,0,0,523,2704,1,0,0,0,525,2711,1,0,0,0,527,2716,
        1,0,0,0,529,2726,1,0,0,0,531,2732,1,0,0,0,533,2748,1,0,0,0,535,2761,
        1,0,0,0,537,2765,1,0,0,0,539,2771,1,0,0,0,541,2776,1,0,0,0,543,2782,
        1,0,0,0,545,2787,1,0,0,0,547,2794,1,0,0,0,549,2801,1,0,0,0,551,2810,
        1,0,0,0,553,2815,1,0,0,0,555,2820,1,0,0,0,557,2827,1,0,0,0,559,2834,
        1,0,0,0,561,2840,1,0,0,0,563,2851,1,0,0,0,565,2858,1,0,0,0,567,2867,
        1,0,0,0,569,2874,1,0,0,0,571,2881,1,0,0,0,573,2888,1,0,0,0,575,2898,
        1,0,0,0,577,2903,1,0,0,0,579,2910,1,0,0,0,581,2922,1,0,0,0,583,2937,
        1,0,0,0,585,2943,1,0,0,0,587,2950,1,0,0,0,589,2962,1,0,0,0,591,2969,
        1,0,0,0,593,2983,1,0,0,0,595,2993,1,0,0,0,597,3004,1,0,0,0,599,3009,
        1,0,0,0,601,3014,1,0,0,0,603,3023,1,0,0,0,605,3033,1,0,0,0,607,3047,
        1,0,0,0,609,3061,1,0,0,0,611,3074,1,0,0,0,613,3088,1,0,0,0,615,3096,
        1,0,0,0,617,3099,1,0,0,0,619,3105,1,0,0,0,621,3114,1,0,0,0,623,3126,
        1,0,0,0,625,3139,1,0,0,0,627,3149,1,0,0,0,629,3154,1,0,0,0,631,3159,
        1,0,0,0,633,3168,1,0,0,0,635,3177,1,0,0,0,637,3182,1,0,0,0,639,3192,
        1,0,0,0,641,3202,1,0,0,0,643,3210,1,0,0,0,645,3216,1,0,0,0,647,3223,
        1,0,0,0,649,3231,1,0,0,0,651,3238,1,0,0,0,653,3246,1,0,0,0,655,3252,
        1,0,0,0,657,3259,1,0,0,0,659,3263,1,0,0,0,661,3268,1,0,0,0,663,3274,
        1,0,0,0,665,3281,1,0,0,0,667,3289,1,0,0,0,669,3293,1,0,0,0,671,3302,
        1,0,0,0,673,3310,1,0,0,0,675,3315,1,0,0,0,677,3321,1,0,0,0,679,3326,
        1,0,0,0,681,3331,1,0,0,0,683,3337,1,0,0,0,685,3342,1,0,0,0,687,3348,
        1,0,0,0,689,3355,1,0,0,0,691,3360,1,0,0,0,693,3367,1,0,0,0,695,3372,
        1,0,0,0,697,3378,1,0,0,0,699,3383,1,0,0,0,701,3393,1,0,0,0,703,3395,
        1,0,0,0,705,3399,1,0,0,0,707,3402,1,0,0,0,709,3405,1,0,0,0,711,3411,
        1,0,0,0,713,3413,1,0,0,0,715,3419,1,0,0,0,717,3421,1,0,0,0,719,3423,
        1,0,0,0,721,3425,1,0,0,0,723,3427,1,0,0,0,725,3429,1,0,0,0,727,3431,
        1,0,0,0,729,3433,1,0,0,0,731,3435,1,0,0,0,733,3437,1,0,0,0,735,3439,
        1,0,0,0,737,3442,1,0,0,0,739,3444,1,0,0,0,741,3446,1,0,0,0,743,3449,
        1,0,0,0,745,3452,1,0,0,0,747,3456,1,0,0,0,749,3459,1,0,0,0,751,3491,
        1,0,0,0,753,3493,1,0,0,0,755,3505,1,0,0,0,757,3512,1,0,0,0,759,3519,
        1,0,0,0,761,3526,1,0,0,0,763,3540,1,0,0,0,765,3542,1,0,0,0,767,3560,
        1,0,0,0,769,3578,1,0,0,0,771,3598,1,0,0,0,773,3603,1,0,0,0,775,3607,
        1,0,0,0,777,3636,1,0,0,0,779,3638,1,0,0,0,781,3647,1,0,0,0,783,3649,
        1,0,0,0,785,3651,1,0,0,0,787,3670,1,0,0,0,789,3689,1,0,0,0,791,3695,
        1,0,0,0,793,794,5,59,0,0,794,2,1,0,0,0,795,796,5,40,0,0,796,4,1,
        0,0,0,797,798,5,41,0,0,798,6,1,0,0,0,799,800,5,44,0,0,800,8,1,0,
        0,0,801,802,5,46,0,0,802,10,1,0,0,0,803,804,5,91,0,0,804,12,1,0,
        0,0,805,806,5,93,0,0,806,14,1,0,0,0,807,808,7,0,0,0,808,809,7,1,
        0,0,809,810,7,1,0,0,810,16,1,0,0,0,811,812,7,0,0,0,812,813,7,2,0,
        0,813,814,7,3,0,0,814,815,7,4,0,0,815,816,7,5,0,0,816,18,1,0,0,0,
        817,818,7,0,0,0,818,819,7,6,0,0,819,820,7,6,0,0,820,20,1,0,0,0,821,
        822,7,0,0,0,822,823,7,6,0,0,823,824,7,3,0,0,824,825,7,4,0,0,825,
        826,7,5,0,0,826,22,1,0,0,0,827,828,7,0,0,0,828,829,7,6,0,0,829,830,
        7,7,0,0,830,831,7,0,0,0,831,832,7,8,0,0,832,833,7,9,0,0,833,24,1,
        0,0,0,834,835,7,0,0,0,835,836,7,10,0,0,836,837,7,0,0,0,837,838,7,
        6,0,0,838,839,7,8,0,0,839,840,7,11,0,0,840,841,7,4,0,0,841,26,1,
        0,0,0,842,843,7,0,0,0,843,844,7,10,0,0,844,845,7,1,0,0,845,28,1,
        0,0,0,846,847,7,0,0,0,847,848,7,10,0,0,848,849,7,3,0,0,849,850,7,
        12,0,0,850,30,1,0,0,0,851,852,7,0,0,0,852,853,7,10,0,0,853,854,7,
        8,0,0,854,32,1,0,0,0,855,856,7,0,0,0,856,857,7,10,0,0,857,858,7,
        8,0,0,858,859,5,95,0,0,859,860,7,13,0,0,860,861,7,0,0,0,861,862,
        7,6,0,0,862,863,7,14,0,0,863,864,7,4,0,0,864,34,1,0,0,0,865,866,
        7,0,0,0,866,867,7,5,0,0,867,868,7,15,0,0,868,869,7,16,0,0,869,870,
        7,12,0,0,870,871,7,13,0,0,871,872,7,4,0,0,872,36,1,0,0,0,873,874,
        7,0,0,0,874,875,7,5,0,0,875,876,7,5,0,0,876,877,7,0,0,0,877,878,
        7,8,0,0,878,38,1,0,0,0,879,880,7,0,0,0,880,881,7,9,0,0,881,40,1,
        0,0,0,882,883,7,0,0,0,883,884,7,9,0,0,884,885,7,15,0,0,885,42,1,
        0,0,0,886,887,7,0,0,0,887,888,7,3,0,0,888,44,1,0,0,0,889,890,7,0,
        0,0,890,891,7,14,0,0,891,892,7,3,0,0,892,893,7,16,0,0,893,894,7,
        17,0,0,894,895,7,5,0,0,895,896,7,12,0,0,896,897,7,11,0,0,897,898,
        7,0,0,0,898,899,7,3,0,0,899,900,7,12,0,0,900,901,7,17,0,0,901,902,
        7,10,0,0,902,46,1,0,0,0,903,904,7,18,0,0,904,905,7,4,0,0,905,906,
        7,3,0,0,906,907,7,7,0,0,907,908,7,4,0,0,908,909,7,4,0,0,909,910,
        7,10,0,0,910,48,1,0,0,0,911,912,7,18,0,0,912,913,7,12,0,0,913,914,
        7,19,0,0,914,915,7,12,0,0,915,916,7,10,0,0,916,917,7,3,0,0,917,50,
        1,0,0,0,918,919,7,18,0,0,919,920,7,12,0,0,920,921,7,10,0,0,921,922,
        7,0,0,0,922,923,7,5,0,0,923,924,7,8,0,0,924,52,1,0,0,0,925,926,7,
        18,0,0,926,927,7,17,0,0,927,928,7,17,0,0,928,929,7,6,0,0,929,930,
        7,4,0,0,930,931,7,0,0,0,931,932,7,10,0,0,932,54,1,0,0,0,933,934,
        7,18,0,0,934,935,7,17,0,0,935,936,7,3,0,0,936,937,7,16,0,0,937,56,
        1,0,0,0,938,939,7,18,0,0,939,940,7,14,0,0,940,941,7,15,0,0,941,942,
        7,20,0,0,942,943,7,4,0,0,943,944,7,3,0,0,944,58,1,0,0,0,945,946,
        7,18,0,0,946,947,7,14,0,0,947,948,7,15,0,0,948,949,7,20,0,0,949,
        950,7,4,0,0,950,951,7,3,0,0,951,952,7,9,0,0,952,60,1,0,0,0,953,954,
        7,18,0,0,954,955,7,8,0,0,955,62,1,0,0,0,956,957,7,18,0,0,957,958,
        7,8,0,0,958,959,7,3,0,0,959,960,7,4,0,0,960,64,1,0,0,0,961,962,7,
        15,0,0,962,963,7,0,0,0,963,964,7,15,0,0,964,965,7,16,0,0,965,966,
        7,4,0,0,966,66,1,0,0,0,967,968,7,15,0,0,968,969,7,0,0,0,969,970,
        7,9,0,0,970,971,7,15,0,0,971,972,7,0,0,0,972,973,7,1,0,0,973,974,
        7,4,0,0,974,68,1,0,0,0,975,976,7,15,0,0,976,977,7,0,0,0,977,978,
        7,9,0,0,978,979,7,4,0,0,979,70,1,0,0,0,980,981,7,15,0,0,981,982,
        7,0,0,0,982,983,7,9,0,0,983,984,7,3,0,0,984,72,1,0,0,0,985,986,7,
        15,0,0,986,987,7,0,0,0,987,988,7,3,0,0,988,989,7,0,0,0,989,990,7,
        6,0,0,990,991,7,17,0,0,991,992,7,19,0,0,992,74,1,0,0,0,993,994,7,
        15,0,0,994,995,7,0,0,0,995,996,7,3,0,0,996,997,7,0,0,0,997,998,7,
        6,0,0,998,999,7,17,0,0,999,1000,7,19,0,0,1000,1001,7,9,0,0,1001,
        76,1,0,0,0,1002,1003,7,15,0,0,1003,1004,7,16,0,0,1004,1005,7,0,0,
        0,1005,1006,7,10,0,0,1006,1007,7,19,0,0,1007,1008,7,4,0,0,1008,78,
        1,0,0,0,1009,1010,7,15,0,0,1010,1011,7,16,0,0,1011,1012,7,0,0,0,
        1012,1013,7,5,0,0,1013,80,1,0,0,0,1014,1015,7,15,0,0,1015,1016,7,
        16,0,0,1016,1017,7,0,0,0,1017,1018,7,5,0,0,1018,1019,7,0,0,0,1019,
        1020,7,15,0,0,1020,1021,7,3,0,0,1021,1022,7,4,0,0,1022,1023,7,5,
        0,0,1023,82,1,0,0,0,1024,1025,7,15,0,0,1025,1026,7,16,0,0,1026,1027,
        7,4,0,0,1027,1028,7,15,0,0,1028,1029,7,20,0,0,1029,84,1,0,0,0,1030,
        1031,7,15,0,0,1031,1032,7,6,0,0,1032,1033,7,4,0,0,1033,1034,7,0,
        0,0,1034,1035,7,5,0,0,1035,86,1,0,0,0,1036,1037,7,15,0,0,1037,1038,
        7,6,0,0,1038,1039,7,14,0,0,1039,1040,7,9,0,0,1040,1041,7,3,0,0,1041,
        1042,7,4,0,0,1042,1043,7,5,0,0,1043,88,1,0,0,0,1044,1045,7,15,0,
        0,1045,1046,7,6,0,0,1046,1047,7,14,0,0,1047,1048,7,9,0,0,1048,1049,
        7,3,0,0,1049,1050,7,4,0,0,1050,1051,7,5,0,0,1051,1052,7,4,0,0,1052,
        1053,7,1,0,0,1053,90,1,0,0,0,1054,1055,7,15,0,0,1055,1056,7,17,0,
        0,1056,1057,7,1,0,0,1057,1058,7,4,0,0,1058,1059,7,19,0,0,1059,1060,
        7,4,0,0,1060,1061,7,10,0,0,1061,92,1,0,0,0,1062,1063,7,15,0,0,1063,
        1064,7,17,0,0,1064,1065,7,6,0,0,1065,1066,7,6,0,0,1066,1067,7,0,
        0,0,1067,1068,7,3,0,0,1068,1069,7,4,0,0,1069,94,1,0,0,0,1070,1071,
        7,15,0,0,1071,1072,7,17,0,0,1072,1073,7,6,0,0,1073,1074,7,6,0,0,
        1074,1075,7,4,0,0,1075,1076,7,15,0,0,1076,1077,7,3,0,0,1077,1078,
        7,12,0,0,1078,1079,7,17,0,0,1079,1080,7,10,0,0,1080,96,1,0,0,0,1081,
        1082,7,15,0,0,1082,1083,7,17,0,0,1083,1084,7,6,0,0,1084,1085,7,14,
        0,0,1085,1086,7,21,0,0,1086,1087,7,10,0,0,1087,98,1,0,0,0,1088,1089,
        7,15,0,0,1089,1090,7,17,0,0,1090,1091,7,6,0,0,1091,1092,7,14,0,0,
        1092,1093,7,21,0,0,1093,1094,7,10,0,0,1094,1095,7,9,0,0,1095,100,
        1,0,0,0,1096,1097,7,15,0,0,1097,1098,7,17,0,0,1098,1099,7,21,0,0,
        1099,1100,7,21,0,0,1100,1101,7,4,0,0,1101,1102,7,10,0,0,1102,1103,
        7,3,0,0,1103,102,1,0,0,0,1104,1105,7,15,0,0,1105,1106,7,17,0,0,1106,
        1107,7,21,0,0,1107,1108,7,21,0,0,1108,1109,7,12,0,0,1109,1110,7,
        3,0,0,1110,104,1,0,0,0,1111,1112,7,15,0,0,1112,1113,7,17,0,0,1113,
        1114,7,21,0,0,1114,1115,7,22,0,0,1115,1116,7,0,0,0,1116,1117,7,15,
        0,0,1117,1118,7,3,0,0,1118,106,1,0,0,0,1119,1120,7,15,0,0,1120,1121,
        7,17,0,0,1121,1122,7,21,0,0,1122,1123,7,22,0,0,1123,1124,7,0,0,0,
        1124,1125,7,15,0,0,1125,1126,7,3,0,0,1126,1127,7,12,0,0,1127,1128,
        7,17,0,0,1128,1129,7,10,0,0,1129,1130,7,9,0,0,1130,108,1,0,0,0,1131,
        1132,7,15,0,0,1132,1133,7,17,0,0,1133,1134,7,21,0,0,1134,1135,7,
        22,0,0,1135,1136,7,14,0,0,1136,1137,7,3,0,0,1137,1138,7,4,0,0,1138,
        110,1,0,0,0,1139,1140,7,15,0,0,1140,1141,7,17,0,0,1141,1142,7,10,
        0,0,1142,1143,7,15,0,0,1143,1144,7,0,0,0,1144,1145,7,3,0,0,1145,
        1146,7,4,0,0,1146,1147,7,10,0,0,1147,1148,7,0,0,0,1148,1149,7,3,
        0,0,1149,1150,7,4,0,0,1150,112,1,0,0,0,1151,1152,7,15,0,0,1152,1153,
        7,17,0,0,1153,1154,7,10,0,0,1154,1155,7,9,0,0,1155,1156,7,3,0,0,
        1156,1157,7,5,0,0,1157,1158,7,0,0,0,1158,1159,7,12,0,0,1159,1160,
        7,10,0,0,1160,1161,7,3,0,0,1161,114,1,0,0,0,1162,1163,7,15,0,0,1163,
        1164,7,17,0,0,1164,1165,7,9,0,0,1165,1166,7,3,0,0,1166,116,1,0,0,
        0,1167,1168,7,15,0,0,1168,1169,7,5,0,0,1169,1170,7,4,0,0,1170,1171,
        7,0,0,0,1171,1172,7,3,0,0,1172,1173,7,4,0,0,1173,118,1,0,0,0,1174,
        1175,7,15,0,0,1175,1176,7,5,0,0,1176,1177,7,17,0,0,1177,1178,7,9,
        0,0,1178,1179,7,9,0,0,1179,120,1,0,0,0,1180,1181,7,15,0,0,1181,1182,
        7,14,0,0,1182,1183,7,18,0,0,1183,1184,7,4,0,0,1184,122,1,0,0,0,1185,
        1186,7,15,0,0,1186,1187,7,14,0,0,1187,1188,7,5,0,0,1188,1189,7,5,
        0,0,1189,1190,7,4,0,0,1190,1191,7,10,0,0,1191,1192,7,3,0,0,1192,
        124,1,0,0,0,1193,1194,7,15,0,0,1194,1195,7,14,0,0,1195,1196,7,5,
        0,0,1196,1197,7,5,0,0,1197,1198,7,4,0,0,1198,1199,7,10,0,0,1199,
        1200,7,3,0,0,1200,1201,5,95,0,0,1201,1202,7,1,0,0,1202,1203,7,0,
        0,0,1203,1204,7,3,0,0,1204,1205,7,4,0,0,1205,126,1,0,0,0,1206,1207,
        7,15,0,0,1207,1208,7,14,0,0,1208,1209,7,5,0,0,1209,1210,7,5,0,0,
        1210,1211,7,4,0,0,1211,1212,7,10,0,0,1212,1213,7,3,0,0,1213,1214,
        5,95,0,0,1214,1215,7,3,0,0,1215,1216,7,12,0,0,1216,1217,7,21,0,0,
        1217,1218,7,4,0,0,1218,128,1,0,0,0,1219,1220,7,15,0,0,1220,1221,
        7,14,0,0,1221,1222,7,5,0,0,1222,1223,7,5,0,0,1223,1224,7,4,0,0,1224,
        1225,7,10,0,0,1225,1226,7,3,0,0,1226,1227,5,95,0,0,1227,1228,7,3,
        0,0,1228,1229,7,12,0,0,1229,1230,7,21,0,0,1230,1231,7,4,0,0,1231,
        1232,7,9,0,0,1232,1233,7,3,0,0,1233,1234,7,0,0,0,1234,1235,7,21,
        0,0,1235,1236,7,22,0,0,1236,130,1,0,0,0,1237,1238,7,15,0,0,1238,
        1239,7,14,0,0,1239,1240,7,5,0,0,1240,1241,7,5,0,0,1241,1242,7,4,
        0,0,1242,1243,7,10,0,0,1243,1244,7,3,0,0,1244,1245,5,95,0,0,1245,
        1246,7,14,0,0,1246,1247,7,9,0,0,1247,1248,7,4,0,0,1248,1249,7,5,
        0,0,1249,132,1,0,0,0,1250,1251,7,1,0,0,1251,1252,7,0,0,0,1252,1253,
        7,8,0,0,1253,134,1,0,0,0,1254,1255,7,1,0,0,1255,1256,7,0,0,0,1256,
        1257,7,8,0,0,1257,1258,7,9,0,0,1258,136,1,0,0,0,1259,1260,7,1,0,
        0,1260,1261,7,0,0,0,1261,1262,7,8,0,0,1262,1263,7,17,0,0,1263,1264,
        7,2,0,0,1264,1265,7,8,0,0,1265,1266,7,4,0,0,1266,1267,7,0,0,0,1267,
        1268,7,5,0,0,1268,138,1,0,0,0,1269,1270,7,1,0,0,1270,1271,7,0,0,
        0,1271,1272,7,3,0,0,1272,1273,7,0,0,0,1273,140,1,0,0,0,1274,1275,
        7,1,0,0,1275,1276,7,0,0,0,1276,1277,7,3,0,0,1277,1278,7,4,0,0,1278,
        142,1,0,0,0,1279,1280,7,1,0,0,1280,1281,7,0,0,0,1281,1282,7,3,0,
        0,1282,1283,7,0,0,0,1283,1284,7,18,0,0,1284,1285,7,0,0,0,1285,1286,
        7,9,0,0,1286,1287,7,4,0,0,1287,144,1,0,0,0,1288,1289,7,1,0,0,1289,
        1290,7,0,0,0,1290,1291,7,3,0,0,1291,1292,7,0,0,0,1292,1293,7,18,
        0,0,1293,1294,7,0,0,0,1294,1295,7,9,0,0,1295,1296,7,4,0,0,1296,1297,
        7,9,0,0,1297,146,1,0,0,0,1298,1299,7,1,0,0,1299,1300,7,0,0,0,1300,
        1301,7,3,0,0,1301,1302,7,4,0,0,1302,1303,7,0,0,0,1303,1304,7,1,0,
        0,1304,1305,7,1,0,0,1305,148,1,0,0,0,1306,1307,7,1,0,0,1307,1308,
        7,0,0,0,1308,1309,7,3,0,0,1309,1310,7,4,0,0,1310,1311,5,95,0,0,1311,
        1312,7,0,0,0,1312,1313,7,1,0,0,1313,1314,7,1,0,0,1314,150,1,0,0,
        0,1315,1316,7,1,0,0,1316,1317,7,0,0,0,1317,1318,7,3,0,0,1318,1319,
        7,4,0,0,1319,1320,7,1,0,0,1320,1321,7,12,0,0,1321,1322,7,2,0,0,1322,
        1323,7,2,0,0,1323,152,1,0,0,0,1324,1325,7,1,0,0,1325,1326,7,0,0,
        0,1326,1327,7,3,0,0,1327,1328,7,4,0,0,1328,1329,5,95,0,0,1329,1330,
        7,1,0,0,1330,1331,7,12,0,0,1331,1332,7,2,0,0,1332,1333,7,2,0,0,1333,
        154,1,0,0,0,1334,1335,7,1,0,0,1335,1336,7,18,0,0,1336,1337,7,22,
        0,0,1337,1338,7,5,0,0,1338,1339,7,17,0,0,1339,1340,7,22,0,0,1340,
        1341,7,4,0,0,1341,1342,7,5,0,0,1342,1343,7,3,0,0,1343,1344,7,12,
        0,0,1344,1345,7,4,0,0,1345,1346,7,9,0,0,1346,156,1,0,0,0,1347,1348,
        7,1,0,0,1348,1349,7,4,0,0,1349,1350,7,15,0,0,1350,158,1,0,0,0,1351,
        1352,7,1,0,0,1352,1353,7,4,0,0,1353,1354,7,15,0,0,1354,1355,7,12,
        0,0,1355,1356,7,21,0,0,1356,1357,7,0,0,0,1357,1358,7,6,0,0,1358,
        160,1,0,0,0,1359,1360,7,1,0,0,1360,1361,7,4,0,0,1361,1362,7,15,0,
        0,1362,1363,7,6,0,0,1363,1364,7,0,0,0,1364,1365,7,5,0,0,1365,1366,
        7,4,0,0,1366,162,1,0,0,0,1367,1368,7,1,0,0,1368,1369,7,4,0,0,1369,
        1370,7,2,0,0,1370,1371,7,0,0,0,1371,1372,7,14,0,0,1372,1373,7,6,
        0,0,1373,1374,7,3,0,0,1374,164,1,0,0,0,1375,1376,7,1,0,0,1376,1377,
        7,4,0,0,1377,1378,7,2,0,0,1378,1379,7,12,0,0,1379,1380,7,10,0,0,
        1380,1381,7,4,0,0,1381,1382,7,1,0,0,1382,166,1,0,0,0,1383,1384,7,
        1,0,0,1384,1385,7,4,0,0,1385,1386,7,6,0,0,1386,1387,7,4,0,0,1387,
        1388,7,3,0,0,1388,1389,7,4,0,0,1389,168,1,0,0,0,1390,1391,7,1,0,
        0,1391,1392,7,4,0,0,1392,1393,7,6,0,0,1393,1394,7,12,0,0,1394,1395,
        7,21,0,0,1395,1396,7,12,0,0,1396,1397,7,3,0,0,1397,1398,7,4,0,0,
        1398,1399,7,1,0,0,1399,170,1,0,0,0,1400,1401,7,1,0,0,1401,1402,7,
        4,0,0,1402,1403,7,9,0,0,1403,1404,7,15,0,0,1404,172,1,0,0,0,1405,
        1406,7,1,0,0,1406,1407,7,4,0,0,1407,1408,7,9,0,0,1408,1409,7,15,
        0,0,1409,1410,7,5,0,0,1410,1411,7,12,0,0,1411,1412,7,18,0,0,1412,
        1413,7,4,0,0,1413,174,1,0,0,0,1414,1415,7,1,0,0,1415,1416,7,2,0,
        0,1416,1417,7,9,0,0,1417,176,1,0,0,0,1418,1419,7,1,0,0,1419,1420,
        7,12,0,0,1420,1421,7,5,0,0,1421,1422,7,4,0,0,1422,1423,7,15,0,0,
        1423,1424,7,3,0,0,1424,1425,7,17,0,0,1425,1426,7,5,0,0,1426,1427,
        7,12,0,0,1427,1428,7,4,0,0,1428,1429,7,9,0,0,1429,178,1,0,0,0,1430,
        1431,7,1,0,0,1431,1432,7,12,0,0,1432,1433,7,5,0,0,1433,1434,7,4,
        0,0,1434,1435,7,15,0,0,1435,1436,7,3,0,0,1436,1437,7,17,0,0,1437,
        1438,7,5,0,0,1438,1439,7,8,0,0,1439,180,1,0,0,0,1440,1441,7,1,0,
        0,1441,1442,7,12,0,0,1442,1443,7,9,0,0,1443,1444,7,0,0,0,1444,1445,
        7,18,0,0,1445,1446,7,6,0,0,1446,1447,7,4,0,0,1447,182,1,0,0,0,1448,
        1449,7,1,0,0,1449,1450,7,12,0,0,1450,1451,7,9,0,0,1451,1452,7,3,
        0,0,1452,1453,7,12,0,0,1453,1454,7,10,0,0,1454,1455,7,15,0,0,1455,
        1456,7,3,0,0,1456,184,1,0,0,0,1457,1458,7,1,0,0,1458,1459,7,12,0,
        0,1459,1460,7,9,0,0,1460,1461,7,3,0,0,1461,1462,7,5,0,0,1462,1463,
        7,12,0,0,1463,1464,7,18,0,0,1464,1465,7,14,0,0,1465,1466,7,3,0,0,
        1466,1467,7,4,0,0,1467,186,1,0,0,0,1468,1469,7,1,0,0,1469,1470,7,
        12,0,0,1470,1471,7,13,0,0,1471,188,1,0,0,0,1472,1473,7,1,0,0,1473,
        1474,7,17,0,0,1474,1475,7,14,0,0,1475,1476,7,18,0,0,1476,1477,7,
        6,0,0,1477,1478,7,4,0,0,1478,190,1,0,0,0,1479,1480,7,1,0,0,1480,
        1481,7,5,0,0,1481,1482,7,17,0,0,1482,1483,7,22,0,0,1483,192,1,0,
        0,0,1484,1485,7,4,0,0,1485,1486,7,6,0,0,1486,1487,7,9,0,0,1487,1488,
        7,4,0,0,1488,194,1,0,0,0,1489,1490,7,4,0,0,1490,1491,7,10,0,0,1491,
        1492,7,0,0,0,1492,1493,7,18,0,0,1493,1494,7,6,0,0,1494,1495,7,4,
        0,0,1495,196,1,0,0,0,1496,1497,7,4,0,0,1497,1498,7,10,0,0,1498,1499,
        7,1,0,0,1499,198,1,0,0,0,1500,1501,7,4,0,0,1501,1502,7,9,0,0,1502,
        1503,7,15,0,0,1503,1504,7,0,0,0,1504,1505,7,22,0,0,1505,1506,7,4,
        0,0,1506,200,1,0,0,0,1507,1508,7,4,0,0,1508,1509,7,9,0,0,1509,1510,
        7,15,0,0,1510,1511,7,0,0,0,1511,1512,7,22,0,0,1512,1513,7,4,0,0,
        1513,1514,7,1,0,0,1514,202,1,0,0,0,1515,1516,7,4,0,0,1516,1517,7,
        23,0,0,1517,1518,7,15,0,0,1518,1519,7,4,0,0,1519,1520,7,22,0,0,1520,
        1521,7,3,0,0,1521,204,1,0,0,0,1522,1523,7,4,0,0,1523,1524,7,23,0,
        0,1524,1525,7,15,0,0,1525,1526,7,16,0,0,1526,1527,7,0,0,0,1527,1528,
        7,10,0,0,1528,1529,7,19,0,0,1529,1530,7,4,0,0,1530,206,1,0,0,0,1531,
        1532,7,4,0,0,1532,1533,7,23,0,0,1533,1534,7,15,0,0,1534,1535,7,6,
        0,0,1535,1536,7,14,0,0,1536,1537,7,1,0,0,1537,1538,7,4,0,0,1538,
        208,1,0,0,0,1539,1540,7,4,0,0,1540,1541,7,23,0,0,1541,1542,7,12,
        0,0,1542,1543,7,9,0,0,1543,1544,7,3,0,0,1544,1545,7,9,0,0,1545,210,
        1,0,0,0,1546,1547,7,4,0,0,1547,1548,7,23,0,0,1548,1549,7,22,0,0,
        1549,1550,7,6,0,0,1550,1551,7,0,0,0,1551,1552,7,12,0,0,1552,1553,
        7,10,0,0,1553,212,1,0,0,0,1554,1555,7,4,0,0,1555,1556,7,23,0,0,1556,
        1557,7,22,0,0,1557,1558,7,17,0,0,1558,1559,7,5,0,0,1559,1560,7,3,
        0,0,1560,214,1,0,0,0,1561,1562,7,4,0,0,1562,1563,7,23,0,0,1563,1564,
        7,3,0,0,1564,1565,7,4,0,0,1565,1566,7,10,0,0,1566,1567,7,1,0,0,1567,
        1568,7,4,0,0,1568,1569,7,1,0,0,1569,216,1,0,0,0,1570,1571,7,4,0,
        0,1571,1572,7,23,0,0,1572,1573,7,3,0,0,1573,1574,7,4,0,0,1574,1575,
        7,5,0,0,1575,1576,7,10,0,0,1576,1577,7,0,0,0,1577,1578,7,6,0,0,1578,
        218,1,0,0,0,1579,1580,7,4,0,0,1580,1581,7,23,0,0,1581,1582,7,3,0,
        0,1582,1583,7,5,0,0,1583,1584,7,0,0,0,1584,1585,7,15,0,0,1585,1586,
        7,3,0,0,1586,220,1,0,0,0,1587,1588,7,2,0,0,1588,1589,7,0,0,0,1589,
        1590,7,6,0,0,1590,1591,7,9,0,0,1591,1592,7,4,0,0,1592,222,1,0,0,
        0,1593,1594,7,2,0,0,1594,1595,7,4,0,0,1595,1596,7,3,0,0,1596,1597,
        7,15,0,0,1597,1598,7,16,0,0,1598,224,1,0,0,0,1599,1600,7,2,0,0,1600,
        1601,7,12,0,0,1601,1602,7,4,0,0,1602,1603,7,6,0,0,1603,1604,7,1,
        0,0,1604,1605,7,9,0,0,1605,226,1,0,0,0,1606,1607,7,2,0,0,1607,1608,
        7,12,0,0,1608,1609,7,6,0,0,1609,1610,7,3,0,0,1610,1611,7,4,0,0,1611,
        1612,7,5,0,0,1612,228,1,0,0,0,1613,1614,7,2,0,0,1614,1615,7,12,0,
        0,1615,1616,7,6,0,0,1616,1617,7,4,0,0,1617,1618,7,2,0,0,1618,1619,
        7,17,0,0,1619,1620,7,5,0,0,1620,1621,7,21,0,0,1621,1622,7,0,0,0,
        1622,1623,7,3,0,0,1623,230,1,0,0,0,1624,1625,7,2,0,0,1625,1626,7,
        12,0,0,1626,1627,7,5,0,0,1627,1628,7,9,0,0,1628,1629,7,3,0,0,1629,
        232,1,0,0,0,1630,1631,7,2,0,0,1631,1632,7,6,0,0,1632,1633,7,17,0,
        0,1633,1634,7,0,0,0,1634,1635,7,3,0,0,1635,234,1,0,0,0,1636,1637,
        7,2,0,0,1637,1638,7,17,0,0,1638,1639,7,6,0,0,1639,1640,7,6,0,0,1640,
        1641,7,17,0,0,1641,1642,7,7,0,0,1642,1643,7,12,0,0,1643,1644,7,10,
        0,0,1644,1645,7,19,0,0,1645,236,1,0,0,0,1646,1647,7,2,0,0,1647,1648,
        7,17,0,0,1648,1649,7,5,0,0,1649,238,1,0,0,0,1650,1651,7,2,0,0,1651,
        1652,7,17,0,0,1652,1653,7,5,0,0,1653,1654,7,4,0,0,1654,1655,7,12,
        0,0,1655,1656,7,19,0,0,1656,1657,7,10,0,0,1657,240,1,0,0,0,1658,
        1659,7,2,0,0,1659,1660,7,17,0,0,1660,1661,7,5,0,0,1661,1662,7,21,
        0,0,1662,1663,7,0,0,0,1663,1664,7,3,0,0,1664,242,1,0,0,0,1665,1666,
        7,2,0,0,1666,1667,7,17,0,0,1667,1668,7,5,0,0,1668,1669,7,21,0,0,
        1669,1670,7,0,0,0,1670,1671,7,3,0,0,1671,1672,7,3,0,0,1672,1673,
        7,4,0,0,1673,1674,7,1,0,0,1674,244,1,0,0,0,1675,1676,7,2,0,0,1676,
        1677,7,5,0,0,1677,1678,7,17,0,0,1678,1679,7,21,0,0,1679,246,1,0,
        0,0,1680,1681,7,2,0,0,1681,1682,7,14,0,0,1682,1683,7,6,0,0,1683,
        1684,7,6,0,0,1684,248,1,0,0,0,1685,1686,7,2,0,0,1686,1687,7,14,0,
        0,1687,1688,7,10,0,0,1688,1689,7,15,0,0,1689,1690,7,3,0,0,1690,1691,
        7,12,0,0,1691,1692,7,17,0,0,1692,1693,7,10,0,0,1693,250,1,0,0,0,
        1694,1695,7,2,0,0,1695,1696,7,14,0,0,1696,1697,7,10,0,0,1697,1698,
        7,15,0,0,1698,1699,7,3,0,0,1699,1700,7,12,0,0,1700,1701,7,17,0,0,
        1701,1702,7,10,0,0,1702,1703,7,9,0,0,1703,252,1,0,0,0,1704,1705,
        7,19,0,0,1705,1706,7,4,0,0,1706,1707,7,10,0,0,1707,1708,7,4,0,0,
        1708,1709,7,5,0,0,1709,1710,7,0,0,0,1710,1711,7,3,0,0,1711,1712,
        7,4,0,0,1712,1713,7,1,0,0,1713,254,1,0,0,0,1714,1715,7,19,0,0,1715,
        1716,7,6,0,0,1716,1717,7,17,0,0,1717,1718,7,18,0,0,1718,1719,7,0,
        0,0,1719,1720,7,6,0,0,1720,256,1,0,0,0,1721,1722,7,19,0,0,1722,1723,
        7,5,0,0,1723,1724,7,0,0,0,1724,1725,7,10,0,0,1725,1726,7,3,0,0,1726,
        258,1,0,0,0,1727,1728,7,19,0,0,1728,1729,7,5,0,0,1729,1730,7,17,
        0,0,1730,1731,7,14,0,0,1731,1732,7,22,0,0,1732,260,1,0,0,0,1733,
        1734,7,19,0,0,1734,1735,7,5,0,0,1735,1736,7,17,0,0,1736,1737,7,14,
        0,0,1737,1738,7,22,0,0,1738,1739,7,12,0,0,1739,1740,7,10,0,0,1740,
        1741,7,19,0,0,1741,262,1,0,0,0,1742,1743,7,16,0,0,1743,1744,7,0,
        0,0,1744,1745,7,13,0,0,1745,1746,7,12,0,0,1746,1747,7,10,0,0,1747,
        1748,7,19,0,0,1748,264,1,0,0,0,1749,1750,7,23,0,0,1750,266,1,0,0,
        0,1751,1752,7,16,0,0,1752,1753,7,17,0,0,1753,1754,7,14,0,0,1754,
        1755,7,5,0,0,1755,268,1,0,0,0,1756,1757,7,16,0,0,1757,1758,7,17,
        0,0,1758,1759,7,14,0,0,1759,1760,7,5,0,0,1760,1761,7,9,0,0,1761,
        270,1,0,0,0,1762,1763,7,12,0,0,1763,1764,7,1,0,0,1764,1765,7,4,0,
        0,1765,1766,7,10,0,0,1766,1767,7,3,0,0,1767,1768,7,12,0,0,1768,1769,
        7,2,0,0,1769,1770,7,12,0,0,1770,1771,7,4,0,0,1771,1772,7,5,0,0,1772,
        272,1,0,0,0,1773,1774,7,12,0,0,1774,1775,7,2,0,0,1775,274,1,0,0,
        0,1776,1777,7,12,0,0,1777,1778,7,19,0,0,1778,1779,7,10,0,0,1779,
        1780,7,17,0,0,1780,1781,7,5,0,0,1781,1782,7,4,0,0,1782,276,1,0,0,
        0,1783,1784,7,12,0,0,1784,1785,7,21,0,0,1785,1786,7,22,0,0,1786,
        1787,7,17,0,0,1787,1788,7,5,0,0,1788,1789,7,3,0,0,1789,278,1,0,0,
        0,1790,1791,7,12,0,0,1791,1792,7,10,0,0,1792,280,1,0,0,0,1793,1794,
        7,12,0,0,1794,1795,7,10,0,0,1795,1796,7,15,0,0,1796,1797,7,6,0,0,
        1797,1798,7,14,0,0,1798,1799,7,1,0,0,1799,1800,7,4,0,0,1800,282,
        1,0,0,0,1801,1802,7,12,0,0,1802,1803,7,10,0,0,1803,1804,7,1,0,0,
        1804,1805,7,4,0,0,1805,1806,7,23,0,0,1806,284,1,0,0,0,1807,1808,
        7,12,0,0,1808,1809,7,10,0,0,1809,1810,7,1,0,0,1810,1811,7,4,0,0,
        1811,1812,7,23,0,0,1812,1813,7,4,0,0,1813,1814,7,9,0,0,1814,286,
        1,0,0,0,1815,1816,7,12,0,0,1816,1817,7,10,0,0,1817,1818,7,10,0,0,
        1818,1819,7,4,0,0,1819,1820,7,5,0,0,1820,288,1,0,0,0,1821,1822,7,
        12,0,0,1822,1823,7,10,0,0,1823,1824,7,22,0,0,1824,1825,7,0,0,0,1825,
        1826,7,3,0,0,1826,1827,7,16,0,0,1827,290,1,0,0,0,1828,1829,7,12,
        0,0,1829,1830,7,10,0,0,1830,1831,7,22,0,0,1831,1832,7,14,0,0,1832,
        1833,7,3,0,0,1833,1834,7,2,0,0,1834,1835,7,17,0,0,1835,1836,7,5,
        0,0,1836,1837,7,21,0,0,1837,1838,7,0,0,0,1838,1839,7,3,0,0,1839,
        292,1,0,0,0,1840,1841,7,12,0,0,1841,1842,7,10,0,0,1842,1843,7,9,
        0,0,1843,1844,7,4,0,0,1844,1845,7,5,0,0,1845,1846,7,3,0,0,1846,294,
        1,0,0,0,1847,1848,7,12,0,0,1848,1849,7,10,0,0,1849,1850,7,3,0,0,
        1850,1851,7,4,0,0,1851,1852,7,5,0,0,1852,1853,7,9,0,0,1853,1854,
        7,4,0,0,1854,1855,7,15,0,0,1855,1856,7,3,0,0,1856,296,1,0,0,0,1857,
        1858,7,12,0,0,1858,1859,7,10,0,0,1859,1860,7,3,0,0,1860,1861,7,4,
        0,0,1861,1862,7,5,0,0,1862,1863,7,13,0,0,1863,1864,7,0,0,0,1864,
        1865,7,6,0,0,1865,298,1,0,0,0,1866,1867,7,12,0,0,1867,1868,7,10,
        0,0,1868,1869,7,3,0,0,1869,300,1,0,0,0,1870,1871,7,12,0,0,1871,1872,
        7,10,0,0,1872,1873,7,3,0,0,1873,1874,7,4,0,0,1874,1875,7,19,0,0,
        1875,1876,7,4,0,0,1876,1877,7,5,0,0,1877,302,1,0,0,0,1878,1879,7,
        12,0,0,1879,1880,7,10,0,0,1880,1881,7,3,0,0,1881,1882,7,17,0,0,1882,
        304,1,0,0,0,1883,1884,7,12,0,0,1884,1885,7,9,0,0,1885,306,1,0,0,
        0,1886,1887,7,12,0,0,1887,1888,7,3,0,0,1888,1889,7,4,0,0,1889,1890,
        7,21,0,0,1890,1891,7,9,0,0,1891,308,1,0,0,0,1892,1893,7,24,0,0,1893,
        1894,7,17,0,0,1894,1895,7,12,0,0,1895,1896,7,10,0,0,1896,310,1,0,
        0,0,1897,1898,7,20,0,0,1898,1899,7,4,0,0,1899,1900,7,8,0,0,1900,
        1901,7,9,0,0,1901,312,1,0,0,0,1902,1903,7,6,0,0,1903,1904,7,0,0,
        0,1904,1905,7,9,0,0,1905,1906,7,3,0,0,1906,314,1,0,0,0,1907,1908,
        7,6,0,0,1908,1909,7,0,0,0,1909,1910,7,3,0,0,1910,1911,7,4,0,0,1911,
        1912,7,5,0,0,1912,1913,7,0,0,0,1913,1914,7,6,0,0,1914,316,1,0,0,
        0,1915,1916,7,6,0,0,1916,1917,7,0,0,0,1917,1918,7,11,0,0,1918,1919,
        7,8,0,0,1919,318,1,0,0,0,1920,1921,7,6,0,0,1921,1922,7,4,0,0,1922,
        1923,7,0,0,0,1923,1924,7,1,0,0,1924,1925,7,12,0,0,1925,1926,7,10,
        0,0,1926,1927,7,19,0,0,1927,320,1,0,0,0,1928,1929,7,6,0,0,1929,1930,
        7,4,0,0,1930,1931,7,2,0,0,1931,1932,7,3,0,0,1932,322,1,0,0,0,1933,
        1934,7,6,0,0,1934,1935,7,12,0,0,1935,1936,7,20,0,0,1936,1937,7,4,
        0,0,1937,324,1,0,0,0,1938,1939,7,12,0,0,1939,1940,7,6,0,0,1940,1941,
        7,12,0,0,1941,1942,7,20,0,0,1942,1943,7,4,0,0,1943,326,1,0,0,0,1944,
        1945,7,6,0,0,1945,1946,7,12,0,0,1946,1947,7,21,0,0,1947,1948,7,12,
        0,0,1948,1949,7,3,0,0,1949,328,1,0,0,0,1950,1951,7,6,0,0,1951,1952,
        7,12,0,0,1952,1953,7,10,0,0,1953,1954,7,4,0,0,1954,1955,7,9,0,0,
        1955,330,1,0,0,0,1956,1957,7,6,0,0,1957,1958,7,12,0,0,1958,1959,
        7,9,0,0,1959,1960,7,3,0,0,1960,332,1,0,0,0,1961,1962,7,6,0,0,1962,
        1963,7,17,0,0,1963,1964,7,0,0,0,1964,1965,7,1,0,0,1965,334,1,0,0,
        0,1966,1967,7,6,0,0,1967,1968,7,17,0,0,1968,1969,7,15,0,0,1969,1970,
        7,0,0,0,1970,1971,7,6,0,0,1971,336,1,0,0,0,1972,1973,7,6,0,0,1973,
        1974,7,17,0,0,1974,1975,7,15,0,0,1975,1976,7,0,0,0,1976,1977,7,3,
        0,0,1977,1978,7,12,0,0,1978,1979,7,17,0,0,1979,1980,7,10,0,0,1980,
        338,1,0,0,0,1981,1982,7,6,0,0,1982,1983,7,17,0,0,1983,1984,7,15,
        0,0,1984,1985,7,20,0,0,1985,340,1,0,0,0,1986,1987,7,6,0,0,1987,1988,
        7,17,0,0,1988,1989,7,15,0,0,1989,1990,7,20,0,0,1990,1991,7,9,0,0,
        1991,342,1,0,0,0,1992,1993,7,6,0,0,1993,1994,7,17,0,0,1994,1995,
        7,19,0,0,1995,1996,7,12,0,0,1996,1997,7,15,0,0,1997,1998,7,0,0,0,
        1998,1999,7,6,0,0,1999,344,1,0,0,0,2000,2001,7,6,0,0,2001,2002,7,
        17,0,0,2002,2003,7,10,0,0,2003,2004,7,19,0,0,2004,346,1,0,0,0,2005,
        2006,7,21,0,0,2006,2007,7,0,0,0,2007,2008,7,15,0,0,2008,2009,7,5,
        0,0,2009,2010,7,17,0,0,2010,348,1,0,0,0,2011,2012,7,21,0,0,2012,
        2013,7,0,0,0,2013,2014,7,3,0,0,2014,2015,7,4,0,0,2015,2016,7,5,0,
        0,2016,2017,7,12,0,0,2017,2018,7,0,0,0,2018,2019,7,6,0,0,2019,2020,
        7,12,0,0,2020,2021,7,11,0,0,2021,2022,7,4,0,0,2022,2023,7,1,0,0,
        2023,350,1,0,0,0,2024,2025,7,21,0,0,2025,2026,7,0,0,0,2026,2027,
        7,22,0,0,2027,352,1,0,0,0,2028,2029,7,21,0,0,2029,2030,7,0,0,0,2030,
        2031,7,3,0,0,2031,2032,7,15,0,0,2032,2033,7,16,0,0,2033,2034,7,4,
        0,0,2034,2035,7,1,0,0,2035,354,1,0,0,0,2036,2037,7,21,0,0,2037,2038,
        7,4,0,0,2038,2039,7,5,0,0,2039,2040,7,19,0,0,2040,2041,7,4,0,0,2041,
        356,1,0,0,0,2042,2043,7,21,0,0,2043,2044,7,12,0,0,2044,2045,7,15,
        0,0,2045,2046,7,5,0,0,2046,2047,7,17,0,0,2047,2048,7,9,0,0,2048,
        2049,7,4,0,0,2049,2050,7,15,0,0,2050,2051,7,17,0,0,2051,2052,7,10,
        0,0,2052,2053,7,1,0,0,2053,358,1,0,0,0,2054,2055,7,21,0,0,2055,2056,
        7,12,0,0,2056,2057,7,15,0,0,2057,2058,7,5,0,0,2058,2059,7,17,0,0,
        2059,2060,7,9,0,0,2060,2061,7,4,0,0,2061,2062,7,15,0,0,2062,2063,
        7,17,0,0,2063,2064,7,10,0,0,2064,2065,7,1,0,0,2065,2066,7,9,0,0,
        2066,360,1,0,0,0,2067,2068,7,21,0,0,2068,2069,7,12,0,0,2069,2070,
        7,6,0,0,2070,2071,7,6,0,0,2071,2072,7,12,0,0,2072,2073,7,9,0,0,2073,
        2074,7,4,0,0,2074,2075,7,15,0,0,2075,2076,7,17,0,0,2076,2077,7,10,
        0,0,2077,2078,7,1,0,0,2078,362,1,0,0,0,2079,2080,7,21,0,0,2080,2081,
        7,12,0,0,2081,2082,7,6,0,0,2082,2083,7,6,0,0,2083,2084,7,12,0,0,
        2084,2085,7,9,0,0,2085,2086,7,4,0,0,2086,2087,7,15,0,0,2087,2088,
        7,17,0,0,2088,2089,7,10,0,0,2089,2090,7,1,0,0,2090,2091,7,9,0,0,
        2091,364,1,0,0,0,2092,2093,7,21,0,0,2093,2094,7,12,0,0,2094,2095,
        7,10,0,0,2095,2096,7,14,0,0,2096,2097,7,3,0,0,2097,2098,7,4,0,0,
        2098,366,1,0,0,0,2099,2100,7,21,0,0,2100,2101,7,12,0,0,2101,2102,
        7,10,0,0,2102,2103,7,14,0,0,2103,2104,7,3,0,0,2104,2105,7,4,0,0,
        2105,2106,7,9,0,0,2106,368,1,0,0,0,2107,2108,7,21,0,0,2108,2109,
        7,17,0,0,2109,2110,7,10,0,0,2110,2111,7,3,0,0,2111,2112,7,16,0,0,
        2112,370,1,0,0,0,2113,2114,7,21,0,0,2114,2115,7,17,0,0,2115,2116,
        7,10,0,0,2116,2117,7,3,0,0,2117,2118,7,16,0,0,2118,2119,7,9,0,0,
        2119,372,1,0,0,0,2120,2121,7,21,0,0,2121,2122,7,9,0,0,2122,2123,
        7,15,0,0,2123,2124,7,20,0,0,2124,374,1,0,0,0,2125,2126,7,10,0,0,
        2126,2127,7,0,0,0,2127,2128,7,21,0,0,2128,2129,7,4,0,0,2129,376,
        1,0,0,0,2130,2131,7,10,0,0,2131,2132,7,0,0,0,2132,2133,7,21,0,0,
        2133,2134,7,4,0,0,2134,2135,7,9,0,0,2135,2136,7,22,0,0,2136,2137,
        7,0,0,0,2137,2138,7,15,0,0,2138,2139,7,4,0,0,2139,378,1,0,0,0,2140,
        2141,7,10,0,0,2141,2142,7,0,0,0,2142,2143,7,21,0,0,2143,2144,7,4,
        0,0,2144,2145,7,9,0,0,2145,2146,7,22,0,0,2146,2147,7,0,0,0,2147,
        2148,7,15,0,0,2148,2149,7,4,0,0,2149,2150,7,9,0,0,2150,380,1,0,0,
        0,2151,2152,7,10,0,0,2152,2153,7,0,0,0,2153,2154,7,10,0,0,2154,2155,
        7,17,0,0,2155,2156,7,9,0,0,2156,2157,7,4,0,0,2157,2158,7,15,0,0,
        2158,2159,7,17,0,0,2159,2160,7,10,0,0,2160,2161,7,1,0,0,2161,382,
        1,0,0,0,2162,2163,7,10,0,0,2163,2164,7,0,0,0,2164,2165,7,10,0,0,
        2165,2166,7,17,0,0,2166,2167,7,9,0,0,2167,2168,7,4,0,0,2168,2169,
        7,15,0,0,2169,2170,7,17,0,0,2170,2171,7,10,0,0,2171,2172,7,1,0,0,
        2172,2173,7,9,0,0,2173,384,1,0,0,0,2174,2175,7,10,0,0,2175,2176,
        7,0,0,0,2176,2177,7,3,0,0,2177,2178,7,14,0,0,2178,2179,7,5,0,0,2179,
        2180,7,0,0,0,2180,2181,7,6,0,0,2181,386,1,0,0,0,2182,2183,7,10,0,
        0,2183,2184,7,17,0,0,2184,388,1,0,0,0,2185,2186,7,10,0,0,2186,2187,
        7,17,0,0,2187,2188,7,9,0,0,2188,2189,7,15,0,0,2189,2190,7,0,0,0,
        2190,2191,7,10,0,0,2191,390,1,0,0,0,2192,2193,7,10,0,0,2193,2194,
        7,17,0,0,2194,2195,7,3,0,0,2195,392,1,0,0,0,2196,2197,7,10,0,0,2197,
        2198,7,14,0,0,2198,2199,7,6,0,0,2199,2200,7,6,0,0,2200,394,1,0,0,
        0,2201,2202,7,10,0,0,2202,2203,7,14,0,0,2203,2204,7,6,0,0,2204,2205,
        7,6,0,0,2205,2206,7,9,0,0,2206,396,1,0,0,0,2207,2208,7,10,0,0,2208,
        2209,7,14,0,0,2209,2210,7,21,0,0,2210,2211,7,4,0,0,2211,2212,7,5,
        0,0,2212,2213,7,12,0,0,2213,2214,7,15,0,0,2214,398,1,0,0,0,2215,
        2216,7,17,0,0,2216,2217,7,2,0,0,2217,400,1,0,0,0,2218,2219,7,17,
        0,0,2219,2220,7,2,0,0,2220,2221,7,2,0,0,2221,2222,7,9,0,0,2222,2223,
        7,4,0,0,2223,2224,7,3,0,0,2224,402,1,0,0,0,2225,2226,7,17,0,0,2226,
        2227,7,10,0,0,2227,404,1,0,0,0,2228,2229,7,17,0,0,2229,2230,7,10,
        0,0,2230,2231,7,6,0,0,2231,2232,7,8,0,0,2232,406,1,0,0,0,2233,2234,
        7,17,0,0,2234,2235,7,22,0,0,2235,2236,7,3,0,0,2236,2237,7,12,0,0,
        2237,2238,7,21,0,0,2238,2239,7,12,0,0,2239,2240,7,11,0,0,2240,2241,
        7,4,0,0,2241,408,1,0,0,0,2242,2243,7,17,0,0,2243,2244,7,22,0,0,2244,
        2245,7,3,0,0,2245,2246,7,12,0,0,2246,2247,7,17,0,0,2247,2248,7,10,
        0,0,2248,410,1,0,0,0,2249,2250,7,17,0,0,2250,2251,7,22,0,0,2251,
        2252,7,3,0,0,2252,2253,7,12,0,0,2253,2254,7,17,0,0,2254,2255,7,10,
        0,0,2255,2256,7,9,0,0,2256,412,1,0,0,0,2257,2258,7,17,0,0,2258,2259,
        7,5,0,0,2259,414,1,0,0,0,2260,2261,7,17,0,0,2261,2262,7,5,0,0,2262,
        2263,7,1,0,0,2263,2264,7,4,0,0,2264,2265,7,5,0,0,2265,416,1,0,0,
        0,2266,2267,7,17,0,0,2267,2268,7,14,0,0,2268,2269,7,3,0,0,2269,418,
        1,0,0,0,2270,2271,7,17,0,0,2271,2272,7,14,0,0,2272,2273,7,3,0,0,
        2273,2274,7,4,0,0,2274,2275,7,5,0,0,2275,420,1,0,0,0,2276,2277,7,
        17,0,0,2277,2278,7,14,0,0,2278,2279,7,3,0,0,2279,2280,7,22,0,0,2280,
        2281,7,14,0,0,2281,2282,7,3,0,0,2282,2283,7,2,0,0,2283,2284,7,17,
        0,0,2284,2285,7,5,0,0,2285,2286,7,21,0,0,2286,2287,7,0,0,0,2287,
        2288,7,3,0,0,2288,422,1,0,0,0,2289,2290,7,17,0,0,2290,2291,7,13,
        0,0,2291,2292,7,4,0,0,2292,2293,7,5,0,0,2293,424,1,0,0,0,2294,2295,
        7,17,0,0,2295,2296,7,13,0,0,2296,2297,7,4,0,0,2297,2298,7,5,0,0,
        2298,2299,7,6,0,0,2299,2300,7,0,0,0,2300,2301,7,22,0,0,2301,2302,
        7,9,0,0,2302,426,1,0,0,0,2303,2304,7,17,0,0,2304,2305,7,13,0,0,2305,
        2306,7,4,0,0,2306,2307,7,5,0,0,2307,2308,7,6,0,0,2308,2309,7,0,0,
        0,2309,2310,7,8,0,0,2310,428,1,0,0,0,2311,2312,7,17,0,0,2312,2313,
        7,13,0,0,2313,2314,7,4,0,0,2314,2315,7,5,0,0,2315,2316,7,7,0,0,2316,
        2317,7,5,0,0,2317,2318,7,12,0,0,2318,2319,7,3,0,0,2319,2320,7,4,
        0,0,2320,430,1,0,0,0,2321,2322,7,22,0,0,2322,2323,7,0,0,0,2323,2324,
        7,5,0,0,2324,2325,7,3,0,0,2325,2326,7,12,0,0,2326,2327,7,3,0,0,2327,
        2328,7,12,0,0,2328,2329,7,17,0,0,2329,2330,7,10,0,0,2330,432,1,0,
        0,0,2331,2332,7,22,0,0,2332,2333,7,0,0,0,2333,2334,7,5,0,0,2334,
        2335,7,3,0,0,2335,2336,7,12,0,0,2336,2337,7,3,0,0,2337,2338,7,12,
        0,0,2338,2339,7,17,0,0,2339,2340,7,10,0,0,2340,2341,7,4,0,0,2341,
        2342,7,1,0,0,2342,434,1,0,0,0,2343,2344,7,22,0,0,2344,2345,7,0,0,
        0,2345,2346,7,5,0,0,2346,2347,7,3,0,0,2347,2348,7,12,0,0,2348,2349,
        7,3,0,0,2349,2350,7,12,0,0,2350,2351,7,17,0,0,2351,2352,7,10,0,0,
        2352,2353,7,9,0,0,2353,436,1,0,0,0,2354,2355,7,22,0,0,2355,2356,
        7,4,0,0,2356,2357,7,5,0,0,2357,2358,7,15,0,0,2358,2359,7,4,0,0,2359,
        2360,7,10,0,0,2360,2361,7,3,0,0,2361,2362,7,12,0,0,2362,2363,7,6,
        0,0,2363,2364,7,4,0,0,2364,2365,5,95,0,0,2365,2366,7,15,0,0,2366,
        2367,7,17,0,0,2367,2368,7,10,0,0,2368,2369,7,3,0,0,2369,438,1,0,
        0,0,2370,2371,7,22,0,0,2371,2372,7,4,0,0,2372,2373,7,5,0,0,2373,
        2374,7,15,0,0,2374,2375,7,4,0,0,2375,2376,7,10,0,0,2376,2377,7,3,
        0,0,2377,2378,7,12,0,0,2378,2379,7,6,0,0,2379,2380,7,4,0,0,2380,
        2381,5,95,0,0,2381,2382,7,1,0,0,2382,2383,7,12,0,0,2383,2384,7,9,
        0,0,2384,2385,7,15,0,0,2385,440,1,0,0,0,2386,2387,7,22,0,0,2387,
        2388,7,4,0,0,2388,2389,7,5,0,0,2389,2390,7,15,0,0,2390,2391,7,4,
        0,0,2391,2392,7,10,0,0,2392,2393,7,3,0,0,2393,442,1,0,0,0,2394,2395,
        7,22,0,0,2395,2396,7,12,0,0,2396,2397,7,13,0,0,2397,2398,7,17,0,
        0,2398,2399,7,3,0,0,2399,444,1,0,0,0,2400,2401,7,22,0,0,2401,2402,
        7,6,0,0,2402,2403,7,0,0,0,2403,2404,7,15,0,0,2404,2405,7,12,0,0,
        2405,2406,7,10,0,0,2406,2407,7,19,0,0,2407,446,1,0,0,0,2408,2409,
        7,22,0,0,2409,2410,7,17,0,0,2410,2411,7,9,0,0,2411,2412,7,12,0,0,
        2412,2413,7,3,0,0,2413,2414,7,12,0,0,2414,2415,7,17,0,0,2415,2416,
        7,10,0,0,2416,448,1,0,0,0,2417,2418,7,22,0,0,2418,2419,7,5,0,0,2419,
        2420,7,4,0,0,2420,2421,7,15,0,0,2421,2422,7,4,0,0,2422,2423,7,1,
        0,0,2423,2424,7,12,0,0,2424,2425,7,10,0,0,2425,2426,7,19,0,0,2426,
        450,1,0,0,0,2427,2428,7,22,0,0,2428,2429,7,5,0,0,2429,2430,7,12,
        0,0,2430,2431,7,21,0,0,2431,2432,7,0,0,0,2432,2433,7,5,0,0,2433,
        2434,7,8,0,0,2434,452,1,0,0,0,2435,2436,7,22,0,0,2436,2437,7,5,0,
        0,2437,2438,7,12,0,0,2438,2439,7,10,0,0,2439,2440,7,15,0,0,2440,
        2441,7,12,0,0,2441,2442,7,22,0,0,2442,2443,7,0,0,0,2443,2444,7,6,
        0,0,2444,2445,7,9,0,0,2445,454,1,0,0,0,2446,2447,7,22,0,0,2447,2448,
        7,5,0,0,2448,2449,7,17,0,0,2449,2450,7,22,0,0,2450,2451,7,4,0,0,
        2451,2452,7,5,0,0,2452,2453,7,3,0,0,2453,2454,7,12,0,0,2454,2455,
        7,4,0,0,2455,2456,7,9,0,0,2456,456,1,0,0,0,2457,2458,7,22,0,0,2458,
        2459,7,14,0,0,2459,2460,7,5,0,0,2460,2461,7,19,0,0,2461,2462,7,4,
        0,0,2462,458,1,0,0,0,2463,2464,7,25,0,0,2464,2465,7,14,0,0,2465,
        2466,7,0,0,0,2466,2467,7,5,0,0,2467,2468,7,3,0,0,2468,2469,7,4,0,
        0,2469,2470,7,5,0,0,2470,460,1,0,0,0,2471,2472,7,25,0,0,2472,2473,
        7,14,0,0,2473,2474,7,4,0,0,2474,2475,7,5,0,0,2475,2476,7,8,0,0,2476,
        462,1,0,0,0,2477,2478,7,5,0,0,2478,2479,7,0,0,0,2479,2480,7,10,0,
        0,2480,2481,7,19,0,0,2481,2482,7,4,0,0,2482,464,1,0,0,0,2483,2484,
        7,5,0,0,2484,2485,7,4,0,0,2485,2486,7,0,0,0,2486,2487,7,6,0,0,2487,
        466,1,0,0,0,2488,2489,7,5,0,0,2489,2490,7,4,0,0,2490,2491,7,15,0,
        0,2491,2492,7,17,0,0,2492,2493,7,5,0,0,2493,2494,7,1,0,0,2494,2495,
        7,5,0,0,2495,2496,7,4,0,0,2496,2497,7,0,0,0,2497,2498,7,1,0,0,2498,
        2499,7,4,0,0,2499,2500,7,5,0,0,2500,468,1,0,0,0,2501,2502,7,5,0,
        0,2502,2503,7,4,0,0,2503,2504,7,15,0,0,2504,2505,7,17,0,0,2505,2506,
        7,5,0,0,2506,2507,7,1,0,0,2507,2508,7,7,0,0,2508,2509,7,5,0,0,2509,
        2510,7,12,0,0,2510,2511,7,3,0,0,2511,2512,7,4,0,0,2512,2513,7,5,
        0,0,2513,470,1,0,0,0,2514,2515,7,5,0,0,2515,2516,7,4,0,0,2516,2517,
        7,15,0,0,2517,2518,7,17,0,0,2518,2519,7,13,0,0,2519,2520,7,4,0,0,
        2520,2521,7,5,0,0,2521,472,1,0,0,0,2522,2523,7,5,0,0,2523,2524,7,
        4,0,0,2524,2525,7,1,0,0,2525,2526,7,14,0,0,2526,2527,7,15,0,0,2527,
        2528,7,4,0,0,2528,474,1,0,0,0,2529,2530,7,5,0,0,2530,2531,7,4,0,
        0,2531,2532,7,2,0,0,2532,2533,7,4,0,0,2533,2534,7,5,0,0,2534,2535,
        7,4,0,0,2535,2536,7,10,0,0,2536,2537,7,15,0,0,2537,2538,7,4,0,0,
        2538,2539,7,9,0,0,2539,476,1,0,0,0,2540,2541,7,5,0,0,2541,2542,7,
        4,0,0,2542,2543,7,2,0,0,2543,2544,7,5,0,0,2544,2545,7,4,0,0,2545,
        2546,7,9,0,0,2546,2547,7,16,0,0,2547,478,1,0,0,0,2548,2549,7,5,0,
        0,2549,2550,7,4,0,0,2550,2551,7,10,0,0,2551,2552,7,0,0,0,2552,2553,
        7,21,0,0,2553,2554,7,4,0,0,2554,480,1,0,0,0,2555,2556,7,5,0,0,2556,
        2557,7,4,0,0,2557,2558,7,22,0,0,2558,2559,7,0,0,0,2559,2560,7,12,
        0,0,2560,2561,7,5,0,0,2561,482,1,0,0,0,2562,2563,7,5,0,0,2563,2564,
        7,4,0,0,2564,2565,7,22,0,0,2565,2566,7,4,0,0,2566,2567,7,0,0,0,2567,
        2568,7,3,0,0,2568,2569,7,0,0,0,2569,2570,7,18,0,0,2570,2571,7,6,
        0,0,2571,2572,7,4,0,0,2572,484,1,0,0,0,2573,2574,7,5,0,0,2574,2575,
        7,4,0,0,2575,2576,7,22,0,0,2576,2577,7,6,0,0,2577,2578,7,0,0,0,2578,
        2579,7,15,0,0,2579,2580,7,4,0,0,2580,486,1,0,0,0,2581,2582,7,5,0,
        0,2582,2583,7,4,0,0,2583,2584,7,9,0,0,2584,2585,7,4,0,0,2585,2586,
        7,3,0,0,2586,488,1,0,0,0,2587,2588,7,5,0,0,2588,2589,7,4,0,0,2589,
        2590,7,9,0,0,2590,2591,7,22,0,0,2591,2592,7,4,0,0,2592,2593,7,15,
        0,0,2593,2594,7,3,0,0,2594,490,1,0,0,0,2595,2596,7,5,0,0,2596,2597,
        7,4,0,0,2597,2598,7,9,0,0,2598,2599,7,3,0,0,2599,2600,7,5,0,0,2600,
        2601,7,12,0,0,2601,2602,7,15,0,0,2602,2603,7,3,0,0,2603,492,1,0,
        0,0,2604,2605,7,5,0,0,2605,2606,7,4,0,0,2606,2607,7,7,0,0,2607,2608,
        7,5,0,0,2608,2609,7,12,0,0,2609,2610,7,3,0,0,2610,2611,7,4,0,0,2611,
        494,1,0,0,0,2612,2613,7,5,0,0,2613,2614,7,4,0,0,2614,2615,7,13,0,
        0,2615,2616,7,17,0,0,2616,2617,7,20,0,0,2617,2618,7,4,0,0,2618,496,
        1,0,0,0,2619,2620,7,5,0,0,2620,2621,7,12,0,0,2621,2622,7,19,0,0,
        2622,2623,7,16,0,0,2623,2624,7,3,0,0,2624,498,1,0,0,0,2625,2626,
        7,5,0,0,2626,2627,7,6,0,0,2627,2628,7,12,0,0,2628,2629,7,20,0,0,
        2629,2630,7,4,0,0,2630,500,1,0,0,0,2631,2632,7,5,0,0,2632,2633,7,
        4,0,0,2633,2634,7,19,0,0,2634,2635,7,4,0,0,2635,2636,7,23,0,0,2636,
        2637,7,22,0,0,2637,502,1,0,0,0,2638,2639,7,5,0,0,2639,2640,7,17,
        0,0,2640,2641,7,6,0,0,2641,2642,7,4,0,0,2642,504,1,0,0,0,2643,2644,
        7,5,0,0,2644,2645,7,17,0,0,2645,2646,7,6,0,0,2646,2647,7,4,0,0,2647,
        2648,7,9,0,0,2648,506,1,0,0,0,2649,2650,7,5,0,0,2650,2651,7,17,0,
        0,2651,2652,7,6,0,0,2652,2653,7,6,0,0,2653,2654,7,18,0,0,2654,2655,
        7,0,0,0,2655,2656,7,15,0,0,2656,2657,7,20,0,0,2657,508,1,0,0,0,2658,
        2659,7,5,0,0,2659,2660,7,17,0,0,2660,2661,7,6,0,0,2661,2662,7,6,
        0,0,2662,2663,7,14,0,0,2663,2664,7,22,0,0,2664,510,1,0,0,0,2665,
        2666,7,5,0,0,2666,2667,7,17,0,0,2667,2668,7,7,0,0,2668,512,1,0,0,
        0,2669,2670,7,5,0,0,2670,2671,7,17,0,0,2671,2672,7,7,0,0,2672,2673,
        7,9,0,0,2673,514,1,0,0,0,2674,2675,7,9,0,0,2675,2676,7,4,0,0,2676,
        2677,7,15,0,0,2677,2678,7,17,0,0,2678,2679,7,10,0,0,2679,2680,7,
        1,0,0,2680,516,1,0,0,0,2681,2682,7,9,0,0,2682,2683,7,4,0,0,2683,
        2684,7,15,0,0,2684,2685,7,17,0,0,2685,2686,7,10,0,0,2686,2687,7,
        1,0,0,2687,2688,7,9,0,0,2688,518,1,0,0,0,2689,2690,7,9,0,0,2690,
        2691,7,15,0,0,2691,2692,7,16,0,0,2692,2693,7,4,0,0,2693,2694,7,21,
        0,0,2694,2695,7,0,0,0,2695,520,1,0,0,0,2696,2697,7,9,0,0,2697,2698,
        7,15,0,0,2698,2699,7,16,0,0,2699,2700,7,4,0,0,2700,2701,7,21,0,0,
        2701,2702,7,0,0,0,2702,2703,7,9,0,0,2703,522,1,0,0,0,2704,2705,7,
        9,0,0,2705,2706,7,4,0,0,2706,2707,7,6,0,0,2707,2708,7,4,0,0,2708,
        2709,7,15,0,0,2709,2710,7,3,0,0,2710,524,1,0,0,0,2711,2712,7,9,0,
        0,2712,2713,7,4,0,0,2713,2714,7,21,0,0,2714,2715,7,12,0,0,2715,526,
        1,0,0,0,2716,2717,7,9,0,0,2717,2718,7,4,0,0,2718,2719,7,22,0,0,2719,
        2720,7,0,0,0,2720,2721,7,5,0,0,2721,2722,7,0,0,0,2722,2723,7,3,0,
        0,2723,2724,7,4,0,0,2724,2725,7,1,0,0,2725,528,1,0,0,0,2726,2727,
        7,9,0,0,2727,2728,7,4,0,0,2728,2729,7,5,0,0,2729,2730,7,1,0,0,2730,
        2731,7,4,0,0,2731,530,1,0,0,0,2732,2733,7,9,0,0,2733,2734,7,4,0,
        0,2734,2735,7,5,0,0,2735,2736,7,1,0,0,2736,2737,7,4,0,0,2737,2738,
        7,22,0,0,2738,2739,7,5,0,0,2739,2740,7,17,0,0,2740,2741,7,22,0,0,
        2741,2742,7,4,0,0,2742,2743,7,5,0,0,2743,2744,7,3,0,0,2744,2745,
        7,12,0,0,2745,2746,7,4,0,0,2746,2747,7,9,0,0,2747,532,1,0,0,0,2748,
        2749,7,9,0,0,2749,2750,7,4,0,0,2750,2751,7,9,0,0,2751,2752,7,9,0,
        0,2752,2753,7,12,0,0,2753,2754,7,17,0,0,2754,2755,7,10,0,0,2755,
        2756,5,95,0,0,2756,2757,7,14,0,0,2757,2758,7,9,0,0,2758,2759,7,4,
        0,0,2759,2760,7,5,0,0,2760,534,1,0,0,0,2761,2762,7,9,0,0,2762,2763,
        7,4,0,0,2763,2764,7,3,0,0,2764,536,1,0,0,0,2765,2766,7,21,0,0,2766,
        2767,7,12,0,0,2767,2768,7,10,0,0,2768,2769,7,14,0,0,2769,2770,7,
        9,0,0,2770,538,1,0,0,0,2771,2772,7,9,0,0,2772,2773,7,4,0,0,2773,
        2774,7,3,0,0,2774,2775,7,9,0,0,2775,540,1,0,0,0,2776,2777,7,9,0,
        0,2777,2778,7,16,0,0,2778,2779,7,17,0,0,2779,2780,7,5,0,0,2780,2781,
        7,3,0,0,2781,542,1,0,0,0,2782,2783,7,9,0,0,2783,2784,7,16,0,0,2784,
        2785,7,17,0,0,2785,2786,7,7,0,0,2786,544,1,0,0,0,2787,2788,7,9,0,
        0,2788,2789,7,12,0,0,2789,2790,7,10,0,0,2790,2791,7,19,0,0,2791,
        2792,7,6,0,0,2792,2793,7,4,0,0,2793,546,1,0,0,0,2794,2795,7,9,0,
        0,2795,2796,7,20,0,0,2796,2797,7,4,0,0,2797,2798,7,7,0,0,2798,2799,
        7,4,0,0,2799,2800,7,1,0,0,2800,548,1,0,0,0,2801,2802,7,9,0,0,2802,
        2803,7,21,0,0,2803,2804,7,0,0,0,2804,2805,7,6,0,0,2805,2806,7,6,
        0,0,2806,2807,7,12,0,0,2807,2808,7,10,0,0,2808,2809,7,3,0,0,2809,
        550,1,0,0,0,2810,2811,7,9,0,0,2811,2812,7,17,0,0,2812,2813,7,21,
        0,0,2813,2814,7,4,0,0,2814,552,1,0,0,0,2815,2816,7,9,0,0,2816,2817,
        7,17,0,0,2817,2818,7,5,0,0,2818,2819,7,3,0,0,2819,554,1,0,0,0,2820,
        2821,7,9,0,0,2821,2822,7,17,0,0,2822,2823,7,5,0,0,2823,2824,7,3,
        0,0,2824,2825,7,4,0,0,2825,2826,7,1,0,0,2826,556,1,0,0,0,2827,2828,
        7,9,0,0,2828,2829,7,17,0,0,2829,2830,7,14,0,0,2830,2831,7,5,0,0,
        2831,2832,7,15,0,0,2832,2833,7,4,0,0,2833,558,1,0,0,0,2834,2835,
        7,9,0,0,2835,2836,7,3,0,0,2836,2837,7,0,0,0,2837,2838,7,5,0,0,2838,
        2839,7,3,0,0,2839,560,1,0,0,0,2840,2841,7,9,0,0,2841,2842,7,3,0,
        0,2842,2843,7,0,0,0,2843,2844,7,3,0,0,2844,2845,7,12,0,0,2845,2846,
        7,9,0,0,2846,2847,7,3,0,0,2847,2848,7,12,0,0,2848,2849,7,15,0,0,
        2849,2850,7,9,0,0,2850,562,1,0,0,0,2851,2852,7,9,0,0,2852,2853,7,
        3,0,0,2853,2854,7,17,0,0,2854,2855,7,5,0,0,2855,2856,7,4,0,0,2856,
        2857,7,1,0,0,2857,564,1,0,0,0,2858,2859,7,9,0,0,2859,2860,7,3,0,
        0,2860,2861,7,5,0,0,2861,2862,7,0,0,0,2862,2863,7,3,0,0,2863,2864,
        7,12,0,0,2864,2865,7,2,0,0,2865,2866,7,8,0,0,2866,566,1,0,0,0,2867,
        2868,7,9,0,0,2868,2869,7,3,0,0,2869,2870,7,5,0,0,2870,2871,7,12,
        0,0,2871,2872,7,10,0,0,2872,2873,7,19,0,0,2873,568,1,0,0,0,2874,
        2875,7,9,0,0,2875,2876,7,3,0,0,2876,2877,7,5,0,0,2877,2878,7,14,
        0,0,2878,2879,7,15,0,0,2879,2880,7,3,0,0,2880,570,1,0,0,0,2881,2882,
        7,9,0,0,2882,2883,7,14,0,0,2883,2884,7,18,0,0,2884,2885,7,9,0,0,
        2885,2886,7,3,0,0,2886,2887,7,5,0,0,2887,572,1,0,0,0,2888,2889,7,
        9,0,0,2889,2890,7,14,0,0,2890,2891,7,18,0,0,2891,2892,7,9,0,0,2892,
        2893,7,3,0,0,2893,2894,7,5,0,0,2894,2895,7,12,0,0,2895,2896,7,10,
        0,0,2896,2897,7,19,0,0,2897,574,1,0,0,0,2898,2899,7,9,0,0,2899,2900,
        7,8,0,0,2900,2901,7,10,0,0,2901,2902,7,15,0,0,2902,576,1,0,0,0,2903,
        2904,7,9,0,0,2904,2905,7,8,0,0,2905,2906,7,9,0,0,2906,2907,7,3,0,
        0,2907,2908,7,4,0,0,2908,2909,7,21,0,0,2909,578,1,0,0,0,2910,2911,
        7,9,0,0,2911,2912,7,8,0,0,2912,2913,7,9,0,0,2913,2914,7,3,0,0,2914,
        2915,7,4,0,0,2915,2916,7,21,0,0,2916,2917,5,95,0,0,2917,2918,7,3,
        0,0,2918,2919,7,12,0,0,2919,2920,7,21,0,0,2920,2921,7,4,0,0,2921,
        580,1,0,0,0,2922,2923,7,9,0,0,2923,2924,7,8,0,0,2924,2925,7,9,0,
        0,2925,2926,7,3,0,0,2926,2927,7,4,0,0,2927,2928,7,21,0,0,2928,2929,
        5,95,0,0,2929,2930,7,13,0,0,2930,2931,7,4,0,0,2931,2932,7,5,0,0,
        2932,2933,7,9,0,0,2933,2934,7,12,0,0,2934,2935,7,17,0,0,2935,2936,
        7,10,0,0,2936,582,1,0,0,0,2937,2938,7,3,0,0,2938,2939,7,0,0,0,2939,
        2940,7,18,0,0,2940,2941,7,6,0,0,2941,2942,7,4,0,0,2942,584,1,0,0,
        0,2943,2944,7,3,0,0,2944,2945,7,0,0,0,2945,2946,7,18,0,0,2946,2947,
        7,6,0,0,2947,2948,7,4,0,0,2948,2949,7,9,0,0,2949,586,1,0,0,0,2950,
        2951,7,3,0,0,2951,2952,7,0,0,0,2952,2953,7,18,0,0,2953,2954,7,6,
        0,0,2954,2955,7,4,0,0,2955,2956,7,9,0,0,2956,2957,7,0,0,0,2957,2958,
        7,21,0,0,2958,2959,7,22,0,0,2959,2960,7,6,0,0,2960,2961,7,4,0,0,
        2961,588,1,0,0,0,2962,2963,7,3,0,0,2963,2964,7,0,0,0,2964,2965,7,
        5,0,0,2965,2966,7,19,0,0,2966,2967,7,4,0,0,2967,2968,7,3,0,0,2968,
        590,1,0,0,0,2969,2970,7,3,0,0,2970,2971,7,18,0,0,2971,2972,7,6,0,
        0,2972,2973,7,22,0,0,2973,2974,7,5,0,0,2974,2975,7,17,0,0,2975,2976,
        7,22,0,0,2976,2977,7,4,0,0,2977,2978,7,5,0,0,2978,2979,7,3,0,0,2979,
        2980,7,12,0,0,2980,2981,7,4,0,0,2981,2982,7,9,0,0,2982,592,1,0,0,
        0,2983,2984,7,3,0,0,2984,2985,7,4,0,0,2985,2986,7,21,0,0,2986,2987,
        7,22,0,0,2987,2988,7,17,0,0,2988,2989,7,5,0,0,2989,2990,7,0,0,0,
        2990,2991,7,5,0,0,2991,2992,7,8,0,0,2992,594,1,0,0,0,2993,2994,7,
        3,0,0,2994,2995,7,4,0,0,2995,2996,7,5,0,0,2996,2997,7,21,0,0,2997,
        2998,7,12,0,0,2998,2999,7,10,0,0,2999,3000,7,0,0,0,3000,3001,7,3,
        0,0,3001,3002,7,4,0,0,3002,3003,7,1,0,0,3003,596,1,0,0,0,3004,3005,
        7,3,0,0,3005,3006,7,16,0,0,3006,3007,7,4,0,0,3007,3008,7,10,0,0,
        3008,598,1,0,0,0,3009,3010,7,3,0,0,3010,3011,7,12,0,0,3011,3012,
        7,21,0,0,3012,3013,7,4,0,0,3013,600,1,0,0,0,3014,3015,7,3,0,0,3015,
        3016,7,12,0,0,3016,3017,7,21,0,0,3017,3018,7,4,0,0,3018,3019,7,1,
        0,0,3019,3020,7,12,0,0,3020,3021,7,2,0,0,3021,3022,7,2,0,0,3022,
        602,1,0,0,0,3023,3024,7,3,0,0,3024,3025,7,12,0,0,3025,3026,7,21,
        0,0,3026,3027,7,4,0,0,3027,3028,7,9,0,0,3028,3029,7,3,0,0,3029,3030,
        7,0,0,0,3030,3031,7,21,0,0,3031,3032,7,22,0,0,3032,604,1,0,0,0,3033,
        3034,7,3,0,0,3034,3035,7,12,0,0,3035,3036,7,21,0,0,3036,3037,7,4,
        0,0,3037,3038,7,9,0,0,3038,3039,7,3,0,0,3039,3040,7,0,0,0,3040,3041,
        7,21,0,0,3041,3042,7,22,0,0,3042,3043,5,95,0,0,3043,3044,7,6,0,0,
        3044,3045,7,3,0,0,3045,3046,7,11,0,0,3046,606,1,0,0,0,3047,3048,
        7,3,0,0,3048,3049,7,12,0,0,3049,3050,7,21,0,0,3050,3051,7,4,0,0,
        3051,3052,7,9,0,0,3052,3053,7,3,0,0,3053,3054,7,0,0,0,3054,3055,
        7,21,0,0,3055,3056,7,22,0,0,3056,3057,5,95,0,0,3057,3058,7,10,0,
        0,3058,3059,7,3,0,0,3059,3060,7,11,0,0,3060,608,1,0,0,0,3061,3062,
        7,3,0,0,3062,3063,7,12,0,0,3063,3064,7,21,0,0,3064,3065,7,4,0,0,
        3065,3066,7,9,0,0,3066,3067,7,3,0,0,3067,3068,7,0,0,0,3068,3069,
        7,21,0,0,3069,3070,7,22,0,0,3070,3071,7,0,0,0,3071,3072,7,1,0,0,
        3072,3073,7,1,0,0,3073,610,1,0,0,0,3074,3075,7,3,0,0,3075,3076,7,
        12,0,0,3076,3077,7,21,0,0,3077,3078,7,4,0,0,3078,3079,7,9,0,0,3079,
        3080,7,3,0,0,3080,3081,7,0,0,0,3081,3082,7,21,0,0,3082,3083,7,22,
        0,0,3083,3084,7,1,0,0,3084,3085,7,12,0,0,3085,3086,7,2,0,0,3086,
        3087,7,2,0,0,3087,612,1,0,0,0,3088,3089,7,3,0,0,3089,3090,7,12,0,
        0,3090,3091,7,10,0,0,3091,3092,7,8,0,0,3092,3093,7,12,0,0,3093,3094,
        7,10,0,0,3094,3095,7,3,0,0,3095,614,1,0,0,0,3096,3097,7,3,0,0,3097,
        3098,7,17,0,0,3098,616,1,0,0,0,3099,3100,7,3,0,0,3100,3101,7,17,
        0,0,3101,3102,7,14,0,0,3102,3103,7,15,0,0,3103,3104,7,16,0,0,3104,
        618,1,0,0,0,3105,3106,7,3,0,0,3106,3107,7,5,0,0,3107,3108,7,0,0,
        0,3108,3109,7,12,0,0,3109,3110,7,6,0,0,3110,3111,7,12,0,0,3111,3112,
        7,10,0,0,3112,3113,7,19,0,0,3113,620,1,0,0,0,3114,3115,7,3,0,0,3115,
        3116,7,5,0,0,3116,3117,7,0,0,0,3117,3118,7,10,0,0,3118,3119,7,9,
        0,0,3119,3120,7,0,0,0,3120,3121,7,15,0,0,3121,3122,7,3,0,0,3122,
        3123,7,12,0,0,3123,3124,7,17,0,0,3124,3125,7,10,0,0,3125,622,1,0,
        0,0,3126,3127,7,3,0,0,3127,3128,7,5,0,0,3128,3129,7,0,0,0,3129,3130,
        7,10,0,0,3130,3131,7,9,0,0,3131,3132,7,0,0,0,3132,3133,7,15,0,0,
        3133,3134,7,3,0,0,3134,3135,7,12,0,0,3135,3136,7,17,0,0,3136,3137,
        7,10,0,0,3137,3138,7,9,0,0,3138,624,1,0,0,0,3139,3140,7,3,0,0,3140,
        3141,7,5,0,0,3141,3142,7,0,0,0,3142,3143,7,10,0,0,3143,3144,7,9,
        0,0,3144,3145,7,2,0,0,3145,3146,7,17,0,0,3146,3147,7,5,0,0,3147,
        3148,7,21,0,0,3148,626,1,0,0,0,3149,3150,7,3,0,0,3150,3151,7,5,0,
        0,3151,3152,7,12,0,0,3152,3153,7,21,0,0,3153,628,1,0,0,0,3154,3155,
        7,3,0,0,3155,3156,7,5,0,0,3156,3157,7,14,0,0,3157,3158,7,4,0,0,3158,
        630,1,0,0,0,3159,3160,7,3,0,0,3160,3161,7,5,0,0,3161,3162,7,14,0,
        0,3162,3163,7,10,0,0,3163,3164,7,15,0,0,3164,3165,7,0,0,0,3165,3166,
        7,3,0,0,3166,3167,7,4,0,0,3167,632,1,0,0,0,3168,3169,7,3,0,0,3169,
        3170,7,5,0,0,3170,3171,7,8,0,0,3171,3172,5,95,0,0,3172,3173,7,15,
        0,0,3173,3174,7,0,0,0,3174,3175,7,9,0,0,3175,3176,7,3,0,0,3176,634,
        1,0,0,0,3177,3178,7,3,0,0,3178,3179,7,8,0,0,3179,3180,7,22,0,0,3180,
        3181,7,4,0,0,3181,636,1,0,0,0,3182,3183,7,14,0,0,3183,3184,7,10,
        0,0,3184,3185,7,0,0,0,3185,3186,7,5,0,0,3186,3187,7,15,0,0,3187,
        3188,7,16,0,0,3188,3189,7,12,0,0,3189,3190,7,13,0,0,3190,3191,7,
        4,0,0,3191,638,1,0,0,0,3192,3193,7,14,0,0,3193,3194,7,10,0,0,3194,
        3195,7,18,0,0,3195,3196,7,17,0,0,3196,3197,7,14,0,0,3197,3198,7,
        10,0,0,3198,3199,7,1,0,0,3199,3200,7,4,0,0,3200,3201,7,1,0,0,3201,
        640,1,0,0,0,3202,3203,7,14,0,0,3203,3204,7,10,0,0,3204,3205,7,15,
        0,0,3205,3206,7,0,0,0,3206,3207,7,15,0,0,3207,3208,7,16,0,0,3208,
        3209,7,4,0,0,3209,642,1,0,0,0,3210,3211,7,14,0,0,3211,3212,7,10,
        0,0,3212,3213,7,12,0,0,3213,3214,7,17,0,0,3214,3215,7,10,0,0,3215,
        644,1,0,0,0,3216,3217,7,14,0,0,3217,3218,7,10,0,0,3218,3219,7,12,
        0,0,3219,3220,7,25,0,0,3220,3221,7,14,0,0,3221,3222,7,4,0,0,3222,
        646,1,0,0,0,3223,3224,7,14,0,0,3224,3225,7,10,0,0,3225,3226,7,20,
        0,0,3226,3227,7,10,0,0,3227,3228,7,17,0,0,3228,3229,7,7,0,0,3229,
        3230,7,10,0,0,3230,648,1,0,0,0,3231,3232,7,14,0,0,3232,3233,7,10,
        0,0,3233,3234,7,6,0,0,3234,3235,7,17,0,0,3235,3236,7,15,0,0,3236,
        3237,7,20,0,0,3237,650,1,0,0,0,3238,3239,7,14,0,0,3239,3240,7,10,
        0,0,3240,3241,7,22,0,0,3241,3242,7,12,0,0,3242,3243,7,13,0,0,3243,
        3244,7,17,0,0,3244,3245,7,3,0,0,3245,652,1,0,0,0,3246,3247,7,14,
        0,0,3247,3248,7,10,0,0,3248,3249,7,9,0,0,3249,3250,7,4,0,0,3250,
        3251,7,3,0,0,3251,654,1,0,0,0,3252,3253,7,14,0,0,3253,3254,7,22,
        0,0,3254,3255,7,1,0,0,3255,3256,7,0,0,0,3256,3257,7,3,0,0,3257,3258,
        7,4,0,0,3258,656,1,0,0,0,3259,3260,7,14,0,0,3260,3261,7,9,0,0,3261,
        3262,7,4,0,0,3262,658,1,0,0,0,3263,3264,7,14,0,0,3264,3265,7,9,0,
        0,3265,3266,7,4,0,0,3266,3267,7,5,0,0,3267,660,1,0,0,0,3268,3269,
        7,14,0,0,3269,3270,7,9,0,0,3270,3271,7,12,0,0,3271,3272,7,10,0,0,
        3272,3273,7,19,0,0,3273,662,1,0,0,0,3274,3275,7,13,0,0,3275,3276,
        7,0,0,0,3276,3277,7,6,0,0,3277,3278,7,14,0,0,3278,3279,7,4,0,0,3279,
        3280,7,9,0,0,3280,664,1,0,0,0,3281,3282,7,13,0,0,3282,3283,7,0,0,
        0,3283,3284,7,5,0,0,3284,3285,7,15,0,0,3285,3286,7,16,0,0,3286,3287,
        7,0,0,0,3287,3288,7,5,0,0,3288,666,1,0,0,0,3289,3290,7,13,0,0,3290,
        3291,7,0,0,0,3291,3292,7,5,0,0,3292,668,1,0,0,0,3293,3294,7,13,0,
        0,3294,3295,7,0,0,0,3295,3296,7,5,0,0,3296,3297,7,12,0,0,3297,3298,
        7,0,0,0,3298,3299,7,18,0,0,3299,3300,7,6,0,0,3300,3301,7,4,0,0,3301,
        670,1,0,0,0,3302,3303,7,13,0,0,3303,3304,7,4,0,0,3304,3305,7,5,0,
        0,3305,3306,7,9,0,0,3306,3307,7,12,0,0,3307,3308,7,17,0,0,3308,3309,
        7,10,0,0,3309,672,1,0,0,0,3310,3311,7,13,0,0,3311,3312,7,12,0,0,
        3312,3313,7,4,0,0,3313,3314,7,7,0,0,3314,674,1,0,0,0,3315,3316,7,
        13,0,0,3316,3317,7,12,0,0,3317,3318,7,4,0,0,3318,3319,7,7,0,0,3319,
        3320,7,9,0,0,3320,676,1,0,0,0,3321,3322,7,13,0,0,3322,3323,7,17,
        0,0,3323,3324,7,12,0,0,3324,3325,7,1,0,0,3325,678,1,0,0,0,3326,3327,
        7,7,0,0,3327,3328,7,4,0,0,3328,3329,7,4,0,0,3329,3330,7,20,0,0,3330,
        680,1,0,0,0,3331,3332,7,7,0,0,3332,3333,7,4,0,0,3333,3334,7,4,0,
        0,3334,3335,7,20,0,0,3335,3336,7,9,0,0,3336,682,1,0,0,0,3337,3338,
        7,7,0,0,3338,3339,7,16,0,0,3339,3340,7,4,0,0,3340,3341,7,10,0,0,
        3341,684,1,0,0,0,3342,3343,7,7,0,0,3343,3344,7,16,0,0,3344,3345,
        7,4,0,0,3345,3346,7,5,0,0,3346,3347,7,4,0,0,3347,686,1,0,0,0,3348,
        3349,7,7,0,0,3349,3350,7,12,0,0,3350,3351,7,10,0,0,3351,3352,7,1,
        0,0,3352,3353,7,17,0,0,3353,3354,7,7,0,0,3354,688,1,0,0,0,3355,3356,
        7,7,0,0,3356,3357,7,12,0,0,3357,3358,7,3,0,0,3358,3359,7,16,0,0,
        3359,690,1,0,0,0,3360,3361,7,7,0,0,3361,3362,7,12,0,0,3362,3363,
        7,3,0,0,3363,3364,7,16,0,0,3364,3365,7,12,0,0,3365,3366,7,10,0,0,
        3366,692,1,0,0,0,3367,3368,7,8,0,0,3368,3369,7,4,0,0,3369,3370,7,
        0,0,0,3370,3371,7,5,0,0,3371,694,1,0,0,0,3372,3373,7,8,0,0,3373,
        3374,7,4,0,0,3374,3375,7,0,0,0,3375,3376,7,5,0,0,3376,3377,7,9,0,
        0,3377,696,1,0,0,0,3378,3379,7,11,0,0,3379,3380,7,17,0,0,3380,3381,
        7,10,0,0,3381,3382,7,4,0,0,3382,698,1,0,0,0,3383,3384,7,11,0,0,3384,
        3385,7,17,0,0,3385,3386,7,5,0,0,3386,3387,7,1,0,0,3387,3388,7,4,
        0,0,3388,3389,7,5,0,0,3389,700,1,0,0,0,3390,3394,5,61,0,0,3391,3392,
        5,61,0,0,3392,3394,5,61,0,0,3393,3390,1,0,0,0,3393,3391,1,0,0,0,
        3394,702,1,0,0,0,3395,3396,5,60,0,0,3396,3397,5,61,0,0,3397,3398,
        5,62,0,0,3398,704,1,0,0,0,3399,3400,5,60,0,0,3400,3401,5,62,0,0,
        3401,706,1,0,0,0,3402,3403,5,33,0,0,3403,3404,5,61,0,0,3404,708,
        1,0,0,0,3405,3406,5,60,0,0,3406,710,1,0,0,0,3407,3408,5,60,0,0,3408,
        3412,5,61,0,0,3409,3410,5,33,0,0,3410,3412,5,62,0,0,3411,3407,1,
        0,0,0,3411,3409,1,0,0,0,3412,712,1,0,0,0,3413,3414,5,62,0,0,3414,
        714,1,0,0,0,3415,3416,5,62,0,0,3416,3420,5,61,0,0,3417,3418,5,33,
        0,0,3418,3420,5,60,0,0,3419,3415,1,0,0,0,3419,3417,1,0,0,0,3420,
        716,1,0,0,0,3421,3422,5,33,0,0,3422,718,1,0,0,0,3423,3424,5,43,0,
        0,3424,720,1,0,0,0,3425,3426,5,45,0,0,3426,722,1,0,0,0,3427,3428,
        5,42,0,0,3428,724,1,0,0,0,3429,3430,5,47,0,0,3430,726,1,0,0,0,3431,
        3432,5,37,0,0,3432,728,1,0,0,0,3433,3434,5,126,0,0,3434,730,1,0,
        0,0,3435,3436,5,38,0,0,3436,732,1,0,0,0,3437,3438,5,124,0,0,3438,
        734,1,0,0,0,3439,3440,5,124,0,0,3440,3441,5,124,0,0,3441,736,1,0,
        0,0,3442,3443,5,94,0,0,3443,738,1,0,0,0,3444,3445,5,58,0,0,3445,
        740,1,0,0,0,3446,3447,5,45,0,0,3447,3448,5,62,0,0,3448,742,1,0,0,
        0,3449,3450,5,61,0,0,3450,3451,5,62,0,0,3451,744,1,0,0,0,3452,3453,
        5,47,0,0,3453,3454,5,42,0,0,3454,3455,5,43,0,0,3455,746,1,0,0,0,
        3456,3457,5,42,0,0,3457,3458,5,47,0,0,3458,748,1,0,0,0,3459,3460,
        5,63,0,0,3460,750,1,0,0,0,3461,3467,5,39,0,0,3462,3466,8,26,0,0,
        3463,3464,5,92,0,0,3464,3466,9,0,0,0,3465,3462,1,0,0,0,3465,3463,
        1,0,0,0,3466,3469,1,0,0,0,3467,3465,1,0,0,0,3467,3468,1,0,0,0,3468,
        3470,1,0,0,0,3469,3467,1,0,0,0,3470,3492,5,39,0,0,3471,3472,7,5,
        0,0,3472,3473,5,39,0,0,3473,3477,1,0,0,0,3474,3476,8,27,0,0,3475,
        3474,1,0,0,0,3476,3479,1,0,0,0,3477,3475,1,0,0,0,3477,3478,1,0,0,
        0,3478,3480,1,0,0,0,3479,3477,1,0,0,0,3480,3492,5,39,0,0,3481,3482,
        7,5,0,0,3482,3483,5,34,0,0,3483,3487,1,0,0,0,3484,3486,8,28,0,0,
        3485,3484,1,0,0,0,3486,3489,1,0,0,0,3487,3485,1,0,0,0,3487,3488,
        1,0,0,0,3488,3490,1,0,0,0,3489,3487,1,0,0,0,3490,3492,5,34,0,0,3491,
        3461,1,0,0,0,3491,3471,1,0,0,0,3491,3481,1,0,0,0,3492,752,1,0,0,
        0,3493,3499,5,34,0,0,3494,3498,8,29,0,0,3495,3496,5,92,0,0,3496,
        3498,9,0,0,0,3497,3494,1,0,0,0,3497,3495,1,0,0,0,3498,3501,1,0,0,
        0,3499,3497,1,0,0,0,3499,3500,1,0,0,0,3500,3502,1,0,0,0,3501,3499,
        1,0,0,0,3502,3503,5,34,0,0,3503,754,1,0,0,0,3504,3506,3,781,390,
        0,3505,3504,1,0,0,0,3506,3507,1,0,0,0,3507,3505,1,0,0,0,3507,3508,
        1,0,0,0,3508,3509,1,0,0,0,3509,3510,7,6,0,0,3510,756,1,0,0,0,3511,
        3513,3,781,390,0,3512,3511,1,0,0,0,3513,3514,1,0,0,0,3514,3512,1,
        0,0,0,3514,3515,1,0,0,0,3515,3516,1,0,0,0,3516,3517,7,9,0,0,3517,
        758,1,0,0,0,3518,3520,3,781,390,0,3519,3518,1,0,0,0,3520,3521,1,
        0,0,0,3521,3519,1,0,0,0,3521,3522,1,0,0,0,3522,3523,1,0,0,0,3523,
        3524,7,8,0,0,3524,760,1,0,0,0,3525,3527,3,781,390,0,3526,3525,1,
        0,0,0,3527,3528,1,0,0,0,3528,3526,1,0,0,0,3528,3529,1,0,0,0,3529,
        762,1,0,0,0,3530,3532,3,781,390,0,3531,3530,1,0,0,0,3532,3533,1,
        0,0,0,3533,3531,1,0,0,0,3533,3534,1,0,0,0,3534,3535,1,0,0,0,3535,
        3536,3,779,389,0,3536,3541,1,0,0,0,3537,3538,3,777,388,0,3538,3539,
        3,779,389,0,3539,3541,1,0,0,0,3540,3531,1,0,0,0,3540,3537,1,0,0,
        0,3541,764,1,0,0,0,3542,3543,3,777,388,0,3543,766,1,0,0,0,3544,3546,
        3,781,390,0,3545,3544,1,0,0,0,3546,3547,1,0,0,0,3547,3545,1,0,0,
        0,3547,3548,1,0,0,0,3548,3550,1,0,0,0,3549,3551,3,779,389,0,3550,
        3549,1,0,0,0,3550,3551,1,0,0,0,3551,3552,1,0,0,0,3552,3553,7,2,0,
        0,3553,3561,1,0,0,0,3554,3556,3,777,388,0,3555,3557,3,779,389,0,
        3556,3555,1,0,0,0,3556,3557,1,0,0,0,3557,3558,1,0,0,0,3558,3559,
        7,2,0,0,3559,3561,1,0,0,0,3560,3545,1,0,0,0,3560,3554,1,0,0,0,3561,
        768,1,0,0,0,3562,3564,3,781,390,0,3563,3562,1,0,0,0,3564,3565,1,
        0,0,0,3565,3563,1,0,0,0,3565,3566,1,0,0,0,3566,3568,1,0,0,0,3567,
        3569,3,779,389,0,3568,3567,1,0,0,0,3568,3569,1,0,0,0,3569,3570,1,
        0,0,0,3570,3571,7,1,0,0,3571,3579,1,0,0,0,3572,3574,3,777,388,0,
        3573,3575,3,779,389,0,3574,3573,1,0,0,0,3574,3575,1,0,0,0,3575,3576,
        1,0,0,0,3576,3577,7,1,0,0,3577,3579,1,0,0,0,3578,3563,1,0,0,0,3578,
        3572,1,0,0,0,3579,770,1,0,0,0,3580,3582,3,781,390,0,3581,3580,1,
        0,0,0,3582,3583,1,0,0,0,3583,3581,1,0,0,0,3583,3584,1,0,0,0,3584,
        3586,1,0,0,0,3585,3587,3,779,389,0,3586,3585,1,0,0,0,3586,3587,1,
        0,0,0,3587,3588,1,0,0,0,3588,3589,7,18,0,0,3589,3590,7,1,0,0,3590,
        3599,1,0,0,0,3591,3593,3,777,388,0,3592,3594,3,779,389,0,3593,3592,
        1,0,0,0,3593,3594,1,0,0,0,3594,3595,1,0,0,0,3595,3596,7,18,0,0,3596,
        3597,7,1,0,0,3597,3599,1,0,0,0,3598,3581,1,0,0,0,3598,3591,1,0,0,
        0,3599,772,1,0,0,0,3600,3604,3,783,391,0,3601,3604,3,781,390,0,3602,
        3604,5,95,0,0,3603,3600,1,0,0,0,3603,3601,1,0,0,0,3603,3602,1,0,
        0,0,3604,3605,1,0,0,0,3605,3603,1,0,0,0,3605,3606,1,0,0,0,3606,774,
        1,0,0,0,3607,3613,5,96,0,0,3608,3612,8,30,0,0,3609,3610,5,96,0,0,
        3610,3612,5,96,0,0,3611,3608,1,0,0,0,3611,3609,1,0,0,0,3612,3615,
        1,0,0,0,3613,3611,1,0,0,0,3613,3614,1,0,0,0,3614,3616,1,0,0,0,3615,
        3613,1,0,0,0,3616,3617,5,96,0,0,3617,776,1,0,0,0,3618,3620,3,781,
        390,0,3619,3618,1,0,0,0,3620,3621,1,0,0,0,3621,3619,1,0,0,0,3621,
        3622,1,0,0,0,3622,3623,1,0,0,0,3623,3627,5,46,0,0,3624,3626,3,781,
        390,0,3625,3624,1,0,0,0,3626,3629,1,0,0,0,3627,3625,1,0,0,0,3627,
        3628,1,0,0,0,3628,3637,1,0,0,0,3629,3627,1,0,0,0,3630,3632,5,46,
        0,0,3631,3633,3,781,390,0,3632,3631,1,0,0,0,3633,3634,1,0,0,0,3634,
        3632,1,0,0,0,3634,3635,1,0,0,0,3635,3637,1,0,0,0,3636,3619,1,0,0,
        0,3636,3630,1,0,0,0,3637,778,1,0,0,0,3638,3640,7,4,0,0,3639,3641,
        7,31,0,0,3640,3639,1,0,0,0,3640,3641,1,0,0,0,3641,3643,1,0,0,0,3642,
        3644,3,781,390,0,3643,3642,1,0,0,0,3644,3645,1,0,0,0,3645,3643,1,
        0,0,0,3645,3646,1,0,0,0,3646,780,1,0,0,0,3647,3648,7,32,0,0,3648,
        782,1,0,0,0,3649,3650,7,33,0,0,3650,784,1,0,0,0,3651,3652,5,45,0,
        0,3652,3653,5,45,0,0,3653,3659,1,0,0,0,3654,3655,5,92,0,0,3655,3658,
        5,10,0,0,3656,3658,8,34,0,0,3657,3654,1,0,0,0,3657,3656,1,0,0,0,
        3658,3661,1,0,0,0,3659,3657,1,0,0,0,3659,3660,1,0,0,0,3660,3663,
        1,0,0,0,3661,3659,1,0,0,0,3662,3664,5,13,0,0,3663,3662,1,0,0,0,3663,
        3664,1,0,0,0,3664,3666,1,0,0,0,3665,3667,5,10,0,0,3666,3665,1,0,
        0,0,3666,3667,1,0,0,0,3667,3668,1,0,0,0,3668,3669,6,392,0,0,3669,
        786,1,0,0,0,3670,3671,5,47,0,0,3671,3672,5,42,0,0,3672,3677,1,0,
        0,0,3673,3676,3,787,393,0,3674,3676,9,0,0,0,3675,3673,1,0,0,0,3675,
        3674,1,0,0,0,3676,3679,1,0,0,0,3677,3678,1,0,0,0,3677,3675,1,0,0,
        0,3678,3684,1,0,0,0,3679,3677,1,0,0,0,3680,3681,5,42,0,0,3681,3685,
        5,47,0,0,3682,3683,6,393,1,0,3683,3685,5,0,0,1,3684,3680,1,0,0,0,
        3684,3682,1,0,0,0,3685,3686,1,0,0,0,3686,3687,6,393,0,0,3687,788,
        1,0,0,0,3688,3690,7,35,0,0,3689,3688,1,0,0,0,3690,3691,1,0,0,0,3691,
        3689,1,0,0,0,3691,3692,1,0,0,0,3692,3693,1,0,0,0,3693,3694,6,394,
        0,0,3694,790,1,0,0,0,3695,3696,9,0,0,0,3696,792,1,0,0,0,47,0,3393,
        3411,3419,3465,3467,3477,3487,3491,3497,3499,3507,3514,3521,3528,
        3533,3540,3547,3550,3556,3560,3565,3568,3574,3578,3583,3586,3593,
        3598,3603,3605,3611,3613,3621,3627,3634,3636,3640,3645,3657,3659,
        3663,3666,3675,3677,3684,3691,2,0,1,0,1,393,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SparkSqlLexer.__ATN) {
            SparkSqlLexer.__ATN = new antlr.ATNDeserializer().deserialize(SparkSqlLexer._serializedATN);
        }

        return SparkSqlLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SparkSqlLexer.literalNames, SparkSqlLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SparkSqlLexer.vocabulary;
    }

    private static readonly decisionsToDFA = SparkSqlLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}