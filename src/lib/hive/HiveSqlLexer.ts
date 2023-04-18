// Generated from /Users/ziv/github.com/dt-sql-parser/src/grammar/hive/HiveSqlLexer.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class HiveSqlLexer extends Lexer {
	public static readonly T_ACTION = 1;
	public static readonly T_ADD2 = 2;
	public static readonly T_ALL = 3;
	public static readonly T_ALLOCATE = 4;
	public static readonly T_ALTER = 5;
	public static readonly T_AND = 6;
	public static readonly T_ANSI_NULLS = 7;
	public static readonly T_ANSI_PADDING = 8;
	public static readonly T_AS = 9;
	public static readonly T_ASC = 10;
	public static readonly T_ASSOCIATE = 11;
	public static readonly T_AT = 12;
	public static readonly T_AUTO_INCREMENT = 13;
	public static readonly T_AVG = 14;
	public static readonly T_BATCHSIZE = 15;
	public static readonly T_BEGIN = 16;
	public static readonly T_BETWEEN = 17;
	public static readonly T_BIGINT = 18;
	public static readonly T_BINARY_DOUBLE = 19;
	public static readonly T_BINARY_FLOAT = 20;
	public static readonly T_BINARY_INTEGER = 21;
	public static readonly T_BIT = 22;
	public static readonly T_BODY = 23;
	public static readonly T_BREAK = 24;
	public static readonly T_BY = 25;
	public static readonly T_BYTE = 26;
	public static readonly T_CALL = 27;
	public static readonly T_CALLER = 28;
	public static readonly T_CASCADE = 29;
	public static readonly T_CASE = 30;
	public static readonly T_CASESPECIFIC = 31;
	public static readonly T_CAST = 32;
	public static readonly T_CHAR = 33;
	public static readonly T_CHARACTER = 34;
	public static readonly T_CHARSET = 35;
	public static readonly T_CLIENT = 36;
	public static readonly T_CLOSE = 37;
	public static readonly T_CLUSTERED = 38;
	public static readonly T_CMP = 39;
	public static readonly T_COLLECT = 40;
	public static readonly T_COLLECTION = 41;
	public static readonly T_COLUMN = 42;
	public static readonly T_COMMENT = 43;
	public static readonly T_CONSTANT = 44;
	public static readonly T_COMMIT = 45;
	public static readonly T_COMPRESS = 46;
	public static readonly T_CONCAT = 47;
	public static readonly T_CONDITION = 48;
	public static readonly T_CONSTRAINT = 49;
	public static readonly T_CONTINUE = 50;
	public static readonly T_COPY = 51;
	public static readonly T_COUNT = 52;
	public static readonly T_COUNT_BIG = 53;
	public static readonly T_CREATE = 54;
	public static readonly T_CREATION = 55;
	public static readonly T_CREATOR = 56;
	public static readonly T_CS = 57;
	public static readonly T_CURRENT = 58;
	public static readonly T_CURRENT_SCHEMA = 59;
	public static readonly T_CURSOR = 60;
	public static readonly T_DATABASE = 61;
	public static readonly T_DATA = 62;
	public static readonly T_DATE = 63;
	public static readonly T_DATETIME = 64;
	public static readonly T_DAY = 65;
	public static readonly T_DAYS = 66;
	public static readonly T_DEC = 67;
	public static readonly T_DECIMAL = 68;
	public static readonly T_DECLARE = 69;
	public static readonly T_DEFAULT = 70;
	public static readonly T_DEFERRED = 71;
	public static readonly T_DEFINED = 72;
	public static readonly T_DEFINER = 73;
	public static readonly T_DEFINITION = 74;
	public static readonly T_DELETE = 75;
	public static readonly T_DELIMITED = 76;
	public static readonly T_DELIMITER = 77;
	public static readonly T_DESC = 78;
	public static readonly T_DESCRIBE = 79;
	public static readonly T_DIAGNOSTICS = 80;
	public static readonly T_DIR = 81;
	public static readonly T_DIRECTORY = 82;
	public static readonly T_DISTINCT = 83;
	public static readonly T_DISTRIBUTE = 84;
	public static readonly T_DO = 85;
	public static readonly T_DOUBLE = 86;
	public static readonly T_DROP = 87;
	public static readonly T_DYNAMIC = 88;
	public static readonly T_ELSE = 89;
	public static readonly T_ELSEIF = 90;
	public static readonly T_ELSIF = 91;
	public static readonly T_ENABLE = 92;
	public static readonly T_END = 93;
	public static readonly T_ENGINE = 94;
	public static readonly T_ESCAPED = 95;
	public static readonly T_EXCEPT = 96;
	public static readonly T_EXEC = 97;
	public static readonly T_EXECUTE = 98;
	public static readonly T_EXCEPTION = 99;
	public static readonly T_EXCLUSIVE = 100;
	public static readonly T_EXISTS = 101;
	public static readonly T_EXIT = 102;
	public static readonly T_FALLBACK = 103;
	public static readonly T_FALSE = 104;
	public static readonly T_FETCH = 105;
	public static readonly T_FIELDS = 106;
	public static readonly T_FILE = 107;
	public static readonly T_FILES = 108;
	public static readonly T_FLOAT = 109;
	public static readonly T_FOR = 110;
	public static readonly T_FOREIGN = 111;
	public static readonly T_FORMAT = 112;
	public static readonly T_FOUND = 113;
	public static readonly T_FROM = 114;
	public static readonly T_FULL = 115;
	public static readonly T_FUNCTION = 116;
	public static readonly T_GET = 117;
	public static readonly T_GLOBAL = 118;
	public static readonly T_GO = 119;
	public static readonly T_GRANT = 120;
	public static readonly T_GROUP = 121;
	public static readonly T_HANDLER = 122;
	public static readonly T_HASH = 123;
	public static readonly T_HAVING = 124;
	public static readonly T_HDFS = 125;
	public static readonly T_HIVE = 126;
	public static readonly T_HOST = 127;
	public static readonly T_IDENTITY = 128;
	public static readonly T_IF = 129;
	public static readonly T_IGNORE = 130;
	public static readonly T_IMMEDIATE = 131;
	public static readonly T_IN = 132;
	public static readonly T_INCLUDE = 133;
	public static readonly T_INDEX = 134;
	public static readonly T_INITRANS = 135;
	public static readonly T_INNER = 136;
	public static readonly T_INOUT = 137;
	public static readonly T_INSERT = 138;
	public static readonly T_INT = 139;
	public static readonly T_INT2 = 140;
	public static readonly T_INT4 = 141;
	public static readonly T_INT8 = 142;
	public static readonly T_INTEGER = 143;
	public static readonly T_INTERSECT = 144;
	public static readonly T_INTERVAL = 145;
	public static readonly T_INTO = 146;
	public static readonly T_INVOKER = 147;
	public static readonly T_IS = 148;
	public static readonly T_ISOPEN = 149;
	public static readonly T_ITEMS = 150;
	public static readonly T_JOIN = 151;
	public static readonly T_KEEP = 152;
	public static readonly T_KEY = 153;
	public static readonly T_KEYS = 154;
	public static readonly T_LANGUAGE = 155;
	public static readonly T_LEAVE = 156;
	public static readonly T_LEFT = 157;
	public static readonly T_LIKE = 158;
	public static readonly T_LIMIT = 159;
	public static readonly T_LINES = 160;
	public static readonly T_LOCAL = 161;
	public static readonly T_LOCATION = 162;
	public static readonly T_LOCATOR = 163;
	public static readonly T_LOCATORS = 164;
	public static readonly T_LOCKS = 165;
	public static readonly T_LOG = 166;
	public static readonly T_LOGGED = 167;
	public static readonly T_LOGGING = 168;
	public static readonly T_LOOP = 169;
	public static readonly T_MAP = 170;
	public static readonly T_MATCHED = 171;
	public static readonly T_MAX = 172;
	public static readonly T_MAXTRANS = 173;
	public static readonly T_MERGE = 174;
	public static readonly T_MESSAGE_TEXT = 175;
	public static readonly T_MICROSECOND = 176;
	public static readonly T_MICROSECONDS = 177;
	public static readonly T_MIN = 178;
	public static readonly T_MULTISET = 179;
	public static readonly T_NCHAR = 180;
	public static readonly T_NEW = 181;
	public static readonly T_NVARCHAR = 182;
	public static readonly T_NO = 183;
	public static readonly T_NOCOUNT = 184;
	public static readonly T_NOCOMPRESS = 185;
	public static readonly T_NOLOGGING = 186;
	public static readonly T_NONE = 187;
	public static readonly T_NOT = 188;
	public static readonly T_NOTFOUND = 189;
	public static readonly T_NULL = 190;
	public static readonly T_NUMERIC = 191;
	public static readonly T_NUMBER = 192;
	public static readonly T_OBJECT = 193;
	public static readonly T_OFF = 194;
	public static readonly T_ON = 195;
	public static readonly T_ONLY = 196;
	public static readonly T_OPEN = 197;
	public static readonly T_OR = 198;
	public static readonly T_ORDER = 199;
	public static readonly T_OUT = 200;
	public static readonly T_OUTER = 201;
	public static readonly T_OVER = 202;
	public static readonly T_OVERWRITE = 203;
	public static readonly T_OWNER = 204;
	public static readonly T_PACKAGE = 205;
	public static readonly T_PARTITION = 206;
	public static readonly T_PCTFREE = 207;
	public static readonly T_PCTUSED = 208;
	public static readonly T_PLS_INTEGER = 209;
	public static readonly T_PRECISION = 210;
	public static readonly T_PRESERVE = 211;
	public static readonly T_PRIMARY = 212;
	public static readonly T_PRINT = 213;
	public static readonly T_PROC = 214;
	public static readonly T_PROCEDURE = 215;
	public static readonly T_QUALIFY = 216;
	public static readonly T_QUERY_BAND = 217;
	public static readonly T_QUIT = 218;
	public static readonly T_QUOTED_IDENTIFIER = 219;
	public static readonly T_RAISE = 220;
	public static readonly T_REAL = 221;
	public static readonly T_REFERENCES = 222;
	public static readonly T_REGEXP = 223;
	public static readonly T_REPLACE = 224;
	public static readonly T_RESIGNAL = 225;
	public static readonly T_RESTRICT = 226;
	public static readonly T_RESULT = 227;
	public static readonly T_RESULT_SET_LOCATOR = 228;
	public static readonly T_RETURN = 229;
	public static readonly T_RETURNS = 230;
	public static readonly T_REVERSE = 231;
	public static readonly T_RIGHT = 232;
	public static readonly T_RLIKE = 233;
	public static readonly T_ROLE = 234;
	public static readonly T_ROLLBACK = 235;
	public static readonly T_ROW = 236;
	public static readonly T_ROWS = 237;
	public static readonly T_ROWTYPE = 238;
	public static readonly T_ROW_COUNT = 239;
	public static readonly T_RR = 240;
	public static readonly T_RS = 241;
	public static readonly T_PWD = 242;
	public static readonly T_TRIM = 243;
	public static readonly T_SCHEMA = 244;
	public static readonly T_SECOND = 245;
	public static readonly T_SECONDS = 246;
	public static readonly T_SECURITY = 247;
	public static readonly T_SEGMENT = 248;
	public static readonly T_SEL = 249;
	public static readonly T_SELECT = 250;
	public static readonly T_SET = 251;
	public static readonly T_SESSION = 252;
	public static readonly T_SESSIONS = 253;
	public static readonly T_SETS = 254;
	public static readonly T_SHARE = 255;
	public static readonly T_SIGNAL = 256;
	public static readonly T_SIMPLE_DOUBLE = 257;
	public static readonly T_SIMPLE_FLOAT = 258;
	public static readonly T_SIMPLE_INTEGER = 259;
	public static readonly T_SMALLDATETIME = 260;
	public static readonly T_SMALLINT = 261;
	public static readonly T_SQL = 262;
	public static readonly T_SQLEXCEPTION = 263;
	public static readonly T_SQLINSERT = 264;
	public static readonly T_SQLSTATE = 265;
	public static readonly T_SQLWARNING = 266;
	public static readonly T_STATS = 267;
	public static readonly T_STATISTICS = 268;
	public static readonly T_STEP = 269;
	public static readonly T_STORAGE = 270;
	public static readonly T_STORED = 271;
	public static readonly T_STRING = 272;
	public static readonly T_SUBDIR = 273;
	public static readonly T_SUBSTRING = 274;
	public static readonly T_SUM = 275;
	public static readonly T_SUMMARY = 276;
	public static readonly T_SYS_REFCURSOR = 277;
	public static readonly T_TABLE = 278;
	public static readonly T_TABLESPACE = 279;
	public static readonly T_TEMPORARY = 280;
	public static readonly T_TERMINATED = 281;
	public static readonly T_TEXTIMAGE_ON = 282;
	public static readonly T_THEN = 283;
	public static readonly T_TIMESTAMP = 284;
	public static readonly T_TINYINT = 285;
	public static readonly T_TITLE = 286;
	public static readonly T_TO = 287;
	public static readonly T_TOP = 288;
	public static readonly T_TRANSACTION = 289;
	public static readonly T_TRUE = 290;
	public static readonly T_TRUNCATE = 291;
	public static readonly T_TYPE = 292;
	public static readonly T_UNION = 293;
	public static readonly T_UNIQUE = 294;
	public static readonly T_UPDATE = 295;
	public static readonly T_UR = 296;
	public static readonly T_USE = 297;
	public static readonly T_USING = 298;
	public static readonly T_VALUE = 299;
	public static readonly T_VALUES = 300;
	public static readonly T_VAR = 301;
	public static readonly T_VARCHAR = 302;
	public static readonly T_VARCHAR2 = 303;
	public static readonly T_VARYING = 304;
	public static readonly T_VOLATILE = 305;
	public static readonly T_WHEN = 306;
	public static readonly T_WHERE = 307;
	public static readonly T_WHILE = 308;
	public static readonly T_WITH = 309;
	public static readonly T_WITHOUT = 310;
	public static readonly T_WORK = 311;
	public static readonly T_XACT_ABORT = 312;
	public static readonly T_XML = 313;
	public static readonly T_YES = 314;
	public static readonly T_ACTIVITY_COUNT = 315;
	public static readonly T_CUME_DIST = 316;
	public static readonly T_CURRENT_DATE = 317;
	public static readonly T_CURRENT_TIMESTAMP = 318;
	public static readonly T_CURRENT_USER = 319;
	public static readonly T_DENSE_RANK = 320;
	public static readonly T_FIRST_VALUE = 321;
	public static readonly T_LAG = 322;
	public static readonly T_LAST_VALUE = 323;
	public static readonly T_LEAD = 324;
	public static readonly T_MAX_PART_STRING = 325;
	public static readonly T_MIN_PART_STRING = 326;
	public static readonly T_MAX_PART_INT = 327;
	public static readonly T_MIN_PART_INT = 328;
	public static readonly T_MAX_PART_DATE = 329;
	public static readonly T_MIN_PART_DATE = 330;
	public static readonly T_PART_COUNT = 331;
	public static readonly T_PART_LOC = 332;
	public static readonly T_RANK = 333;
	public static readonly T_ROW_NUMBER = 334;
	public static readonly T_STDEV = 335;
	public static readonly T_SYSDATE = 336;
	public static readonly T_VARIANCE = 337;
	public static readonly T_USER = 338;
	public static readonly T_ADD = 339;
	public static readonly T_COLON = 340;
	public static readonly T_COMMA = 341;
	public static readonly T_PIPE = 342;
	public static readonly T_DIV = 343;
	public static readonly T_DOT = 344;
	public static readonly T_DOT2 = 345;
	public static readonly T_EQUAL = 346;
	public static readonly T_EQUAL2 = 347;
	public static readonly T_SHARP = 348;
	public static readonly T_NOTE = 349;
	public static readonly T_NOTEQUAL = 350;
	public static readonly T_NOTEQUAL2 = 351;
	public static readonly T_GREATER = 352;
	public static readonly T_GREATEREQUAL = 353;
	public static readonly T_LESS = 354;
	public static readonly T_LESSEQUAL = 355;
	public static readonly T_MUL = 356;
	public static readonly T_PRECENT = 357;
	public static readonly T_CALLS = 358;
	public static readonly T_OPEN_B = 359;
	public static readonly T_OPEN_P = 360;
	public static readonly T_OPEN_SB = 361;
	public static readonly T_CLOSE_B = 362;
	public static readonly T_CLOSE_P = 363;
	public static readonly T_CLOSE_SB = 364;
	public static readonly T_SEMICOLON = 365;
	public static readonly T_SUB = 366;
	public static readonly L_ID = 367;
	public static readonly L_S_STRING = 368;
	public static readonly L_D_STRING = 369;
	public static readonly L_INT = 370;
	public static readonly L_DEC = 371;
	public static readonly L_WS = 372;
	public static readonly L_M_COMMENT = 373;
	public static readonly L_S_COMMENT = 374;
	public static readonly L_FILE = 375;
	public static readonly L_LABEL = 376;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [ null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, "'+'", 
                                                   "':'", "','", "'||'", 
                                                   "'/'", "'.'", "'..'", 
                                                   "'='", "'=='", "'#'", 
                                                   "'!'", "'<>'", "'!='", 
                                                   "'>'", "'>='", "'<'", 
                                                   "'<='", "'*'", "'%'", 
                                                   "'@'", "'{'", "'('", 
                                                   "'['", "'}'", "')'", 
                                                   "']'", "';'", "'-'" ];
	public static readonly symbolicNames: string[] = [ null, "T_ACTION", "T_ADD2", 
                                                    "T_ALL", "T_ALLOCATE", 
                                                    "T_ALTER", "T_AND", 
                                                    "T_ANSI_NULLS", "T_ANSI_PADDING", 
                                                    "T_AS", "T_ASC", "T_ASSOCIATE", 
                                                    "T_AT", "T_AUTO_INCREMENT", 
                                                    "T_AVG", "T_BATCHSIZE", 
                                                    "T_BEGIN", "T_BETWEEN", 
                                                    "T_BIGINT", "T_BINARY_DOUBLE", 
                                                    "T_BINARY_FLOAT", "T_BINARY_INTEGER", 
                                                    "T_BIT", "T_BODY", "T_BREAK", 
                                                    "T_BY", "T_BYTE", "T_CALL", 
                                                    "T_CALLER", "T_CASCADE", 
                                                    "T_CASE", "T_CASESPECIFIC", 
                                                    "T_CAST", "T_CHAR", 
                                                    "T_CHARACTER", "T_CHARSET", 
                                                    "T_CLIENT", "T_CLOSE", 
                                                    "T_CLUSTERED", "T_CMP", 
                                                    "T_COLLECT", "T_COLLECTION", 
                                                    "T_COLUMN", "T_COMMENT", 
                                                    "T_CONSTANT", "T_COMMIT", 
                                                    "T_COMPRESS", "T_CONCAT", 
                                                    "T_CONDITION", "T_CONSTRAINT", 
                                                    "T_CONTINUE", "T_COPY", 
                                                    "T_COUNT", "T_COUNT_BIG", 
                                                    "T_CREATE", "T_CREATION", 
                                                    "T_CREATOR", "T_CS", 
                                                    "T_CURRENT", "T_CURRENT_SCHEMA", 
                                                    "T_CURSOR", "T_DATABASE", 
                                                    "T_DATA", "T_DATE", 
                                                    "T_DATETIME", "T_DAY", 
                                                    "T_DAYS", "T_DEC", "T_DECIMAL", 
                                                    "T_DECLARE", "T_DEFAULT", 
                                                    "T_DEFERRED", "T_DEFINED", 
                                                    "T_DEFINER", "T_DEFINITION", 
                                                    "T_DELETE", "T_DELIMITED", 
                                                    "T_DELIMITER", "T_DESC", 
                                                    "T_DESCRIBE", "T_DIAGNOSTICS", 
                                                    "T_DIR", "T_DIRECTORY", 
                                                    "T_DISTINCT", "T_DISTRIBUTE", 
                                                    "T_DO", "T_DOUBLE", 
                                                    "T_DROP", "T_DYNAMIC", 
                                                    "T_ELSE", "T_ELSEIF", 
                                                    "T_ELSIF", "T_ENABLE", 
                                                    "T_END", "T_ENGINE", 
                                                    "T_ESCAPED", "T_EXCEPT", 
                                                    "T_EXEC", "T_EXECUTE", 
                                                    "T_EXCEPTION", "T_EXCLUSIVE", 
                                                    "T_EXISTS", "T_EXIT", 
                                                    "T_FALLBACK", "T_FALSE", 
                                                    "T_FETCH", "T_FIELDS", 
                                                    "T_FILE", "T_FILES", 
                                                    "T_FLOAT", "T_FOR", 
                                                    "T_FOREIGN", "T_FORMAT", 
                                                    "T_FOUND", "T_FROM", 
                                                    "T_FULL", "T_FUNCTION", 
                                                    "T_GET", "T_GLOBAL", 
                                                    "T_GO", "T_GRANT", "T_GROUP", 
                                                    "T_HANDLER", "T_HASH", 
                                                    "T_HAVING", "T_HDFS", 
                                                    "T_HIVE", "T_HOST", 
                                                    "T_IDENTITY", "T_IF", 
                                                    "T_IGNORE", "T_IMMEDIATE", 
                                                    "T_IN", "T_INCLUDE", 
                                                    "T_INDEX", "T_INITRANS", 
                                                    "T_INNER", "T_INOUT", 
                                                    "T_INSERT", "T_INT", 
                                                    "T_INT2", "T_INT4", 
                                                    "T_INT8", "T_INTEGER", 
                                                    "T_INTERSECT", "T_INTERVAL", 
                                                    "T_INTO", "T_INVOKER", 
                                                    "T_IS", "T_ISOPEN", 
                                                    "T_ITEMS", "T_JOIN", 
                                                    "T_KEEP", "T_KEY", "T_KEYS", 
                                                    "T_LANGUAGE", "T_LEAVE", 
                                                    "T_LEFT", "T_LIKE", 
                                                    "T_LIMIT", "T_LINES", 
                                                    "T_LOCAL", "T_LOCATION", 
                                                    "T_LOCATOR", "T_LOCATORS", 
                                                    "T_LOCKS", "T_LOG", 
                                                    "T_LOGGED", "T_LOGGING", 
                                                    "T_LOOP", "T_MAP", "T_MATCHED", 
                                                    "T_MAX", "T_MAXTRANS", 
                                                    "T_MERGE", "T_MESSAGE_TEXT", 
                                                    "T_MICROSECOND", "T_MICROSECONDS", 
                                                    "T_MIN", "T_MULTISET", 
                                                    "T_NCHAR", "T_NEW", 
                                                    "T_NVARCHAR", "T_NO", 
                                                    "T_NOCOUNT", "T_NOCOMPRESS", 
                                                    "T_NOLOGGING", "T_NONE", 
                                                    "T_NOT", "T_NOTFOUND", 
                                                    "T_NULL", "T_NUMERIC", 
                                                    "T_NUMBER", "T_OBJECT", 
                                                    "T_OFF", "T_ON", "T_ONLY", 
                                                    "T_OPEN", "T_OR", "T_ORDER", 
                                                    "T_OUT", "T_OUTER", 
                                                    "T_OVER", "T_OVERWRITE", 
                                                    "T_OWNER", "T_PACKAGE", 
                                                    "T_PARTITION", "T_PCTFREE", 
                                                    "T_PCTUSED", "T_PLS_INTEGER", 
                                                    "T_PRECISION", "T_PRESERVE", 
                                                    "T_PRIMARY", "T_PRINT", 
                                                    "T_PROC", "T_PROCEDURE", 
                                                    "T_QUALIFY", "T_QUERY_BAND", 
                                                    "T_QUIT", "T_QUOTED_IDENTIFIER", 
                                                    "T_RAISE", "T_REAL", 
                                                    "T_REFERENCES", "T_REGEXP", 
                                                    "T_REPLACE", "T_RESIGNAL", 
                                                    "T_RESTRICT", "T_RESULT", 
                                                    "T_RESULT_SET_LOCATOR", 
                                                    "T_RETURN", "T_RETURNS", 
                                                    "T_REVERSE", "T_RIGHT", 
                                                    "T_RLIKE", "T_ROLE", 
                                                    "T_ROLLBACK", "T_ROW", 
                                                    "T_ROWS", "T_ROWTYPE", 
                                                    "T_ROW_COUNT", "T_RR", 
                                                    "T_RS", "T_PWD", "T_TRIM", 
                                                    "T_SCHEMA", "T_SECOND", 
                                                    "T_SECONDS", "T_SECURITY", 
                                                    "T_SEGMENT", "T_SEL", 
                                                    "T_SELECT", "T_SET", 
                                                    "T_SESSION", "T_SESSIONS", 
                                                    "T_SETS", "T_SHARE", 
                                                    "T_SIGNAL", "T_SIMPLE_DOUBLE", 
                                                    "T_SIMPLE_FLOAT", "T_SIMPLE_INTEGER", 
                                                    "T_SMALLDATETIME", "T_SMALLINT", 
                                                    "T_SQL", "T_SQLEXCEPTION", 
                                                    "T_SQLINSERT", "T_SQLSTATE", 
                                                    "T_SQLWARNING", "T_STATS", 
                                                    "T_STATISTICS", "T_STEP", 
                                                    "T_STORAGE", "T_STORED", 
                                                    "T_STRING", "T_SUBDIR", 
                                                    "T_SUBSTRING", "T_SUM", 
                                                    "T_SUMMARY", "T_SYS_REFCURSOR", 
                                                    "T_TABLE", "T_TABLESPACE", 
                                                    "T_TEMPORARY", "T_TERMINATED", 
                                                    "T_TEXTIMAGE_ON", "T_THEN", 
                                                    "T_TIMESTAMP", "T_TINYINT", 
                                                    "T_TITLE", "T_TO", "T_TOP", 
                                                    "T_TRANSACTION", "T_TRUE", 
                                                    "T_TRUNCATE", "T_TYPE", 
                                                    "T_UNION", "T_UNIQUE", 
                                                    "T_UPDATE", "T_UR", 
                                                    "T_USE", "T_USING", 
                                                    "T_VALUE", "T_VALUES", 
                                                    "T_VAR", "T_VARCHAR", 
                                                    "T_VARCHAR2", "T_VARYING", 
                                                    "T_VOLATILE", "T_WHEN", 
                                                    "T_WHERE", "T_WHILE", 
                                                    "T_WITH", "T_WITHOUT", 
                                                    "T_WORK", "T_XACT_ABORT", 
                                                    "T_XML", "T_YES", "T_ACTIVITY_COUNT", 
                                                    "T_CUME_DIST", "T_CURRENT_DATE", 
                                                    "T_CURRENT_TIMESTAMP", 
                                                    "T_CURRENT_USER", "T_DENSE_RANK", 
                                                    "T_FIRST_VALUE", "T_LAG", 
                                                    "T_LAST_VALUE", "T_LEAD", 
                                                    "T_MAX_PART_STRING", 
                                                    "T_MIN_PART_STRING", 
                                                    "T_MAX_PART_INT", "T_MIN_PART_INT", 
                                                    "T_MAX_PART_DATE", "T_MIN_PART_DATE", 
                                                    "T_PART_COUNT", "T_PART_LOC", 
                                                    "T_RANK", "T_ROW_NUMBER", 
                                                    "T_STDEV", "T_SYSDATE", 
                                                    "T_VARIANCE", "T_USER", 
                                                    "T_ADD", "T_COLON", 
                                                    "T_COMMA", "T_PIPE", 
                                                    "T_DIV", "T_DOT", "T_DOT2", 
                                                    "T_EQUAL", "T_EQUAL2", 
                                                    "T_SHARP", "T_NOTE", 
                                                    "T_NOTEQUAL", "T_NOTEQUAL2", 
                                                    "T_GREATER", "T_GREATEREQUAL", 
                                                    "T_LESS", "T_LESSEQUAL", 
                                                    "T_MUL", "T_PRECENT", 
                                                    "T_CALLS", "T_OPEN_B", 
                                                    "T_OPEN_P", "T_OPEN_SB", 
                                                    "T_CLOSE_B", "T_CLOSE_P", 
                                                    "T_CLOSE_SB", "T_SEMICOLON", 
                                                    "T_SUB", "L_ID", "L_S_STRING", 
                                                    "L_D_STRING", "L_INT", 
                                                    "L_DEC", "L_WS", "L_M_COMMENT", 
                                                    "L_S_COMMENT", "L_FILE", 
                                                    "L_LABEL" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T_ACTION", "T_ADD2", "T_ALL", "T_ALLOCATE", "T_ALTER", "T_AND", "T_ANSI_NULLS", 
		"T_ANSI_PADDING", "T_AS", "T_ASC", "T_ASSOCIATE", "T_AT", "T_AUTO_INCREMENT", 
		"T_AVG", "T_BATCHSIZE", "T_BEGIN", "T_BETWEEN", "T_BIGINT", "T_BINARY_DOUBLE", 
		"T_BINARY_FLOAT", "T_BINARY_INTEGER", "T_BIT", "T_BODY", "T_BREAK", "T_BY", 
		"T_BYTE", "T_CALL", "T_CALLER", "T_CASCADE", "T_CASE", "T_CASESPECIFIC", 
		"T_CAST", "T_CHAR", "T_CHARACTER", "T_CHARSET", "T_CLIENT", "T_CLOSE", 
		"T_CLUSTERED", "T_CMP", "T_COLLECT", "T_COLLECTION", "T_COLUMN", "T_COMMENT", 
		"T_CONSTANT", "T_COMMIT", "T_COMPRESS", "T_CONCAT", "T_CONDITION", "T_CONSTRAINT", 
		"T_CONTINUE", "T_COPY", "T_COUNT", "T_COUNT_BIG", "T_CREATE", "T_CREATION", 
		"T_CREATOR", "T_CS", "T_CURRENT", "T_CURRENT_SCHEMA", "T_CURSOR", "T_DATABASE", 
		"T_DATA", "T_DATE", "T_DATETIME", "T_DAY", "T_DAYS", "T_DEC", "T_DECIMAL", 
		"T_DECLARE", "T_DEFAULT", "T_DEFERRED", "T_DEFINED", "T_DEFINER", "T_DEFINITION", 
		"T_DELETE", "T_DELIMITED", "T_DELIMITER", "T_DESC", "T_DESCRIBE", "T_DIAGNOSTICS", 
		"T_DIR", "T_DIRECTORY", "T_DISTINCT", "T_DISTRIBUTE", "T_DO", "T_DOUBLE", 
		"T_DROP", "T_DYNAMIC", "T_ELSE", "T_ELSEIF", "T_ELSIF", "T_ENABLE", "T_END", 
		"T_ENGINE", "T_ESCAPED", "T_EXCEPT", "T_EXEC", "T_EXECUTE", "T_EXCEPTION", 
		"T_EXCLUSIVE", "T_EXISTS", "T_EXIT", "T_FALLBACK", "T_FALSE", "T_FETCH", 
		"T_FIELDS", "T_FILE", "T_FILES", "T_FLOAT", "T_FOR", "T_FOREIGN", "T_FORMAT", 
		"T_FOUND", "T_FROM", "T_FULL", "T_FUNCTION", "T_GET", "T_GLOBAL", "T_GO", 
		"T_GRANT", "T_GROUP", "T_HANDLER", "T_HASH", "T_HAVING", "T_HDFS", "T_HIVE", 
		"T_HOST", "T_IDENTITY", "T_IF", "T_IGNORE", "T_IMMEDIATE", "T_IN", "T_INCLUDE", 
		"T_INDEX", "T_INITRANS", "T_INNER", "T_INOUT", "T_INSERT", "T_INT", "T_INT2", 
		"T_INT4", "T_INT8", "T_INTEGER", "T_INTERSECT", "T_INTERVAL", "T_INTO", 
		"T_INVOKER", "T_IS", "T_ISOPEN", "T_ITEMS", "T_JOIN", "T_KEEP", "T_KEY", 
		"T_KEYS", "T_LANGUAGE", "T_LEAVE", "T_LEFT", "T_LIKE", "T_LIMIT", "T_LINES", 
		"T_LOCAL", "T_LOCATION", "T_LOCATOR", "T_LOCATORS", "T_LOCKS", "T_LOG", 
		"T_LOGGED", "T_LOGGING", "T_LOOP", "T_MAP", "T_MATCHED", "T_MAX", "T_MAXTRANS", 
		"T_MERGE", "T_MESSAGE_TEXT", "T_MICROSECOND", "T_MICROSECONDS", "T_MIN", 
		"T_MULTISET", "T_NCHAR", "T_NEW", "T_NVARCHAR", "T_NO", "T_NOCOUNT", "T_NOCOMPRESS", 
		"T_NOLOGGING", "T_NONE", "T_NOT", "T_NOTFOUND", "T_NULL", "T_NUMERIC", 
		"T_NUMBER", "T_OBJECT", "T_OFF", "T_ON", "T_ONLY", "T_OPEN", "T_OR", "T_ORDER", 
		"T_OUT", "T_OUTER", "T_OVER", "T_OVERWRITE", "T_OWNER", "T_PACKAGE", "T_PARTITION", 
		"T_PCTFREE", "T_PCTUSED", "T_PLS_INTEGER", "T_PRECISION", "T_PRESERVE", 
		"T_PRIMARY", "T_PRINT", "T_PROC", "T_PROCEDURE", "T_QUALIFY", "T_QUERY_BAND", 
		"T_QUIT", "T_QUOTED_IDENTIFIER", "T_RAISE", "T_REAL", "T_REFERENCES", 
		"T_REGEXP", "T_REPLACE", "T_RESIGNAL", "T_RESTRICT", "T_RESULT", "T_RESULT_SET_LOCATOR", 
		"T_RETURN", "T_RETURNS", "T_REVERSE", "T_RIGHT", "T_RLIKE", "T_ROLE", 
		"T_ROLLBACK", "T_ROW", "T_ROWS", "T_ROWTYPE", "T_ROW_COUNT", "T_RR", "T_RS", 
		"T_PWD", "T_TRIM", "T_SCHEMA", "T_SECOND", "T_SECONDS", "T_SECURITY", 
		"T_SEGMENT", "T_SEL", "T_SELECT", "T_SET", "T_SESSION", "T_SESSIONS", 
		"T_SETS", "T_SHARE", "T_SIGNAL", "T_SIMPLE_DOUBLE", "T_SIMPLE_FLOAT", 
		"T_SIMPLE_INTEGER", "T_SMALLDATETIME", "T_SMALLINT", "T_SQL", "T_SQLEXCEPTION", 
		"T_SQLINSERT", "T_SQLSTATE", "T_SQLWARNING", "T_STATS", "T_STATISTICS", 
		"T_STEP", "T_STORAGE", "T_STORED", "T_STRING", "T_SUBDIR", "T_SUBSTRING", 
		"T_SUM", "T_SUMMARY", "T_SYS_REFCURSOR", "T_TABLE", "T_TABLESPACE", "T_TEMPORARY", 
		"T_TERMINATED", "T_TEXTIMAGE_ON", "T_THEN", "T_TIMESTAMP", "T_TINYINT", 
		"T_TITLE", "T_TO", "T_TOP", "T_TRANSACTION", "T_TRUE", "T_TRUNCATE", "T_TYPE", 
		"T_UNION", "T_UNIQUE", "T_UPDATE", "T_UR", "T_USE", "T_USING", "T_VALUE", 
		"T_VALUES", "T_VAR", "T_VARCHAR", "T_VARCHAR2", "T_VARYING", "T_VOLATILE", 
		"T_WHEN", "T_WHERE", "T_WHILE", "T_WITH", "T_WITHOUT", "T_WORK", "T_XACT_ABORT", 
		"T_XML", "T_YES", "T_ACTIVITY_COUNT", "T_CUME_DIST", "T_CURRENT_DATE", 
		"T_CURRENT_TIMESTAMP", "T_CURRENT_USER", "T_DENSE_RANK", "T_FIRST_VALUE", 
		"T_LAG", "T_LAST_VALUE", "T_LEAD", "T_MAX_PART_STRING", "T_MIN_PART_STRING", 
		"T_MAX_PART_INT", "T_MIN_PART_INT", "T_MAX_PART_DATE", "T_MIN_PART_DATE", 
		"T_PART_COUNT", "T_PART_LOC", "T_RANK", "T_ROW_NUMBER", "T_STDEV", "T_SYSDATE", 
		"T_VARIANCE", "T_USER", "T_ADD", "T_COLON", "T_COMMA", "T_PIPE", "T_DIV", 
		"T_DOT", "T_DOT2", "T_EQUAL", "T_EQUAL2", "T_SHARP", "T_NOTE", "T_NOTEQUAL", 
		"T_NOTEQUAL2", "T_GREATER", "T_GREATEREQUAL", "T_LESS", "T_LESSEQUAL", 
		"T_MUL", "T_PRECENT", "T_CALLS", "T_OPEN_B", "T_OPEN_P", "T_OPEN_SB", 
		"T_CLOSE_B", "T_CLOSE_P", "T_CLOSE_SB", "T_SEMICOLON", "T_SUB", "L_ID", 
		"L_S_STRING", "L_D_STRING", "L_INT", "L_DEC", "L_WS", "L_M_COMMENT", "L_S_COMMENT", 
		"L_FILE", "L_LABEL", "L_ID_PART", "L_STR_ESC_D", "L_DIGIT", "L_BLANK", 
		"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
		"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, HiveSqlLexer._ATN, HiveSqlLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "HiveSqlLexer.g4"; }

	public get literalNames(): (string | null)[] { return HiveSqlLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return HiveSqlLexer.symbolicNames; }
	public get ruleNames(): string[] { return HiveSqlLexer.ruleNames; }

	public get serializedATN(): number[] { return HiveSqlLexer._serializedATN; }

	public get channelNames(): string[] { return HiveSqlLexer.channelNames; }

	public get modeNames(): string[] { return HiveSqlLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,376,3639,6,-1,2,
	0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,
	9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,
	7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,
	23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,
	2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,
	38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,
	7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
	52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,
	2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,
	67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,
	7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,
	81,2,82,7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,
	2,89,7,89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,
	96,7,96,2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,
	2,103,7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,
	2,109,7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
	2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,
	2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,
	2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,
	2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,
	2,139,7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,
	2,145,7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,2,150,7,150,
	2,151,7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,
	2,157,7,157,2,158,7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,
	2,163,7,163,2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,
	2,169,7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,
	2,175,7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,
	2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,7,186,
	2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,2,192,7,192,
	2,193,7,193,2,194,7,194,2,195,7,195,2,196,7,196,2,197,7,197,2,198,7,198,
	2,199,7,199,2,200,7,200,2,201,7,201,2,202,7,202,2,203,7,203,2,204,7,204,
	2,205,7,205,2,206,7,206,2,207,7,207,2,208,7,208,2,209,7,209,2,210,7,210,
	2,211,7,211,2,212,7,212,2,213,7,213,2,214,7,214,2,215,7,215,2,216,7,216,
	2,217,7,217,2,218,7,218,2,219,7,219,2,220,7,220,2,221,7,221,2,222,7,222,
	2,223,7,223,2,224,7,224,2,225,7,225,2,226,7,226,2,227,7,227,2,228,7,228,
	2,229,7,229,2,230,7,230,2,231,7,231,2,232,7,232,2,233,7,233,2,234,7,234,
	2,235,7,235,2,236,7,236,2,237,7,237,2,238,7,238,2,239,7,239,2,240,7,240,
	2,241,7,241,2,242,7,242,2,243,7,243,2,244,7,244,2,245,7,245,2,246,7,246,
	2,247,7,247,2,248,7,248,2,249,7,249,2,250,7,250,2,251,7,251,2,252,7,252,
	2,253,7,253,2,254,7,254,2,255,7,255,2,256,7,256,2,257,7,257,2,258,7,258,
	2,259,7,259,2,260,7,260,2,261,7,261,2,262,7,262,2,263,7,263,2,264,7,264,
	2,265,7,265,2,266,7,266,2,267,7,267,2,268,7,268,2,269,7,269,2,270,7,270,
	2,271,7,271,2,272,7,272,2,273,7,273,2,274,7,274,2,275,7,275,2,276,7,276,
	2,277,7,277,2,278,7,278,2,279,7,279,2,280,7,280,2,281,7,281,2,282,7,282,
	2,283,7,283,2,284,7,284,2,285,7,285,2,286,7,286,2,287,7,287,2,288,7,288,
	2,289,7,289,2,290,7,290,2,291,7,291,2,292,7,292,2,293,7,293,2,294,7,294,
	2,295,7,295,2,296,7,296,2,297,7,297,2,298,7,298,2,299,7,299,2,300,7,300,
	2,301,7,301,2,302,7,302,2,303,7,303,2,304,7,304,2,305,7,305,2,306,7,306,
	2,307,7,307,2,308,7,308,2,309,7,309,2,310,7,310,2,311,7,311,2,312,7,312,
	2,313,7,313,2,314,7,314,2,315,7,315,2,316,7,316,2,317,7,317,2,318,7,318,
	2,319,7,319,2,320,7,320,2,321,7,321,2,322,7,322,2,323,7,323,2,324,7,324,
	2,325,7,325,2,326,7,326,2,327,7,327,2,328,7,328,2,329,7,329,2,330,7,330,
	2,331,7,331,2,332,7,332,2,333,7,333,2,334,7,334,2,335,7,335,2,336,7,336,
	2,337,7,337,2,338,7,338,2,339,7,339,2,340,7,340,2,341,7,341,2,342,7,342,
	2,343,7,343,2,344,7,344,2,345,7,345,2,346,7,346,2,347,7,347,2,348,7,348,
	2,349,7,349,2,350,7,350,2,351,7,351,2,352,7,352,2,353,7,353,2,354,7,354,
	2,355,7,355,2,356,7,356,2,357,7,357,2,358,7,358,2,359,7,359,2,360,7,360,
	2,361,7,361,2,362,7,362,2,363,7,363,2,364,7,364,2,365,7,365,2,366,7,366,
	2,367,7,367,2,368,7,368,2,369,7,369,2,370,7,370,2,371,7,371,2,372,7,372,
	2,373,7,373,2,374,7,374,2,375,7,375,2,376,7,376,2,377,7,377,2,378,7,378,
	2,379,7,379,2,380,7,380,2,381,7,381,2,382,7,382,2,383,7,383,2,384,7,384,
	2,385,7,385,2,386,7,386,2,387,7,387,2,388,7,388,2,389,7,389,2,390,7,390,
	2,391,7,391,2,392,7,392,2,393,7,393,2,394,7,394,2,395,7,395,2,396,7,396,
	2,397,7,397,2,398,7,398,2,399,7,399,2,400,7,400,2,401,7,401,2,402,7,402,
	2,403,7,403,2,404,7,404,2,405,7,405,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,
	1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,
	1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
	1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,
	1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,
	1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
	12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
	1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
	17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
	1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,
	19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,
	1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,
	23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,26,
	1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,
	28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,
	1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,32,1,
	32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,34,
	1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
	36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,
	1,37,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,
	40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,
	1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,
	43,1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,45,
	1,45,1,45,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,47,1,
	47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,48,
	1,48,1,48,1,48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,
	50,1,50,1,50,1,50,1,50,1,51,1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,1,52,
	1,52,1,52,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,54,1,
	54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,55,1,55,
	1,55,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,58,1,58,1,
	58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,59,1,59,
	1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,
	61,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,1,63,
	1,63,1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,1,66,1,
	66,1,66,1,66,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,
	1,68,1,68,1,68,1,68,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,70,1,70,1,
	70,1,70,1,70,1,70,1,70,1,70,1,70,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,
	1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,73,1,73,1,73,1,73,1,73,1,73,1,
	73,1,73,1,73,1,73,1,73,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,75,1,75,1,75,
	1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,
	76,1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,78,
	1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,
	80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,82,
	1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,83,1,83,1,83,1,83,1,83,1,83,1,
	83,1,83,1,83,1,83,1,83,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,1,85,1,85,
	1,86,1,86,1,86,1,86,1,86,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,88,1,
	88,1,88,1,88,1,88,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,90,1,90,1,90,1,90,
	1,90,1,90,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,92,1,92,1,92,1,92,1,93,1,
	93,1,93,1,93,1,93,1,93,1,93,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,95,
	1,95,1,95,1,95,1,95,1,95,1,95,1,96,1,96,1,96,1,96,1,96,1,97,1,97,1,97,1,
	97,1,97,1,97,1,97,1,97,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,
	1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,100,1,100,1,100,1,100,
	1,100,1,100,1,100,1,101,1,101,1,101,1,101,1,101,1,102,1,102,1,102,1,102,
	1,102,1,102,1,102,1,102,1,102,1,103,1,103,1,103,1,103,1,103,1,103,1,104,
	1,104,1,104,1,104,1,104,1,104,1,105,1,105,1,105,1,105,1,105,1,105,1,105,
	1,106,1,106,1,106,1,106,1,106,1,107,1,107,1,107,1,107,1,107,1,107,1,108,
	1,108,1,108,1,108,1,108,1,108,1,109,1,109,1,109,1,109,1,110,1,110,1,110,
	1,110,1,110,1,110,1,110,1,110,1,111,1,111,1,111,1,111,1,111,1,111,1,111,
	1,112,1,112,1,112,1,112,1,112,1,112,1,113,1,113,1,113,1,113,1,113,1,114,
	1,114,1,114,1,114,1,114,1,115,1,115,1,115,1,115,1,115,1,115,1,115,1,115,
	1,115,1,116,1,116,1,116,1,116,1,117,1,117,1,117,1,117,1,117,1,117,1,117,
	1,118,1,118,1,118,1,119,1,119,1,119,1,119,1,119,1,119,1,120,1,120,1,120,
	1,120,1,120,1,120,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,122,
	1,122,1,122,1,122,1,122,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,124,
	1,124,1,124,1,124,1,124,1,125,1,125,1,125,1,125,1,125,1,126,1,126,1,126,
	1,126,1,126,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,128,
	1,128,1,128,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,130,1,130,1,130,
	1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,131,1,131,1,131,1,132,1,132,
	1,132,1,132,1,132,1,132,1,132,1,132,1,133,1,133,1,133,1,133,1,133,1,133,
	1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,135,1,135,1,135,
	1,135,1,135,1,135,1,136,1,136,1,136,1,136,1,136,1,136,1,137,1,137,1,137,
	1,137,1,137,1,137,1,137,1,138,1,138,1,138,1,138,1,139,1,139,1,139,1,139,
	1,139,1,140,1,140,1,140,1,140,1,140,1,141,1,141,1,141,1,141,1,141,1,142,
	1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,143,1,143,1,143,1,143,1,143,
	1,143,1,143,1,143,1,143,1,143,1,144,1,144,1,144,1,144,1,144,1,144,1,144,
	1,144,1,144,1,145,1,145,1,145,1,145,1,145,1,146,1,146,1,146,1,146,1,146,
	1,146,1,146,1,146,1,147,1,147,1,147,1,148,1,148,1,148,1,148,1,148,1,148,
	1,148,1,149,1,149,1,149,1,149,1,149,1,149,1,150,1,150,1,150,1,150,1,150,
	1,151,1,151,1,151,1,151,1,151,1,152,1,152,1,152,1,152,1,153,1,153,1,153,
	1,153,1,153,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,155,
	1,155,1,155,1,155,1,155,1,155,1,156,1,156,1,156,1,156,1,156,1,157,1,157,
	1,157,1,157,1,157,1,158,1,158,1,158,1,158,1,158,1,158,1,159,1,159,1,159,
	1,159,1,159,1,159,1,160,1,160,1,160,1,160,1,160,1,160,1,161,1,161,1,161,
	1,161,1,161,1,161,1,161,1,161,1,161,1,162,1,162,1,162,1,162,1,162,1,162,
	1,162,1,162,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,164,
	1,164,1,164,1,164,1,164,1,164,1,165,1,165,1,165,1,165,1,166,1,166,1,166,
	1,166,1,166,1,166,1,166,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,
	1,168,1,168,1,168,1,168,1,168,1,169,1,169,1,169,1,169,1,170,1,170,1,170,
	1,170,1,170,1,170,1,170,1,170,1,171,1,171,1,171,1,171,1,172,1,172,1,172,
	1,172,1,172,1,172,1,172,1,172,1,172,1,173,1,173,1,173,1,173,1,173,1,173,
	1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,174,
	1,174,1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,
	1,175,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,
	1,176,1,176,1,177,1,177,1,177,1,177,1,178,1,178,1,178,1,178,1,178,1,178,
	1,178,1,178,1,178,1,179,1,179,1,179,1,179,1,179,1,179,1,180,1,180,1,180,
	1,180,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,182,1,182,
	1,182,1,183,1,183,1,183,1,183,1,183,1,183,1,183,1,183,1,184,1,184,1,184,
	1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,185,1,185,1,185,1,185,
	1,185,1,185,1,185,1,185,1,185,1,185,1,186,1,186,1,186,1,186,1,186,1,187,
	1,187,1,187,1,187,1,188,1,188,1,188,1,188,1,188,1,188,1,188,1,188,1,188,
	1,189,1,189,1,189,1,189,1,189,1,190,1,190,1,190,1,190,1,190,1,190,1,190,
	1,190,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,192,1,192,1,192,1,192,
	1,192,1,192,1,192,1,193,1,193,1,193,1,193,1,194,1,194,1,194,1,195,1,195,
	1,195,1,195,1,195,1,196,1,196,1,196,1,196,1,196,1,197,1,197,1,197,1,198,
	1,198,1,198,1,198,1,198,1,198,1,199,1,199,1,199,1,199,1,200,1,200,1,200,
	1,200,1,200,1,200,1,201,1,201,1,201,1,201,1,201,1,202,1,202,1,202,1,202,
	1,202,1,202,1,202,1,202,1,202,1,202,1,203,1,203,1,203,1,203,1,203,1,203,
	1,204,1,204,1,204,1,204,1,204,1,204,1,204,1,204,1,205,1,205,1,205,1,205,
	1,205,1,205,1,205,1,205,1,205,1,205,1,206,1,206,1,206,1,206,1,206,1,206,
	1,206,1,206,1,207,1,207,1,207,1,207,1,207,1,207,1,207,1,207,1,208,1,208,
	1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,209,1,209,
	1,209,1,209,1,209,1,209,1,209,1,209,1,209,1,209,1,210,1,210,1,210,1,210,
	1,210,1,210,1,210,1,210,1,210,1,211,1,211,1,211,1,211,1,211,1,211,1,211,
	1,211,1,212,1,212,1,212,1,212,1,212,1,212,1,213,1,213,1,213,1,213,1,213,
	1,214,1,214,1,214,1,214,1,214,1,214,1,214,1,214,1,214,1,214,1,215,1,215,
	1,215,1,215,1,215,1,215,1,215,1,215,1,216,1,216,1,216,1,216,1,216,1,216,
	1,216,1,216,1,216,1,216,1,216,1,217,1,217,1,217,1,217,1,217,1,218,1,218,
	1,218,1,218,1,218,1,218,1,218,1,218,1,218,1,218,1,218,1,218,1,218,1,218,
	1,218,1,218,1,218,1,218,1,219,1,219,1,219,1,219,1,219,1,219,1,220,1,220,
	1,220,1,220,1,220,1,221,1,221,1,221,1,221,1,221,1,221,1,221,1,221,1,221,
	1,221,1,221,1,222,1,222,1,222,1,222,1,222,1,222,1,222,1,223,1,223,1,223,
	1,223,1,223,1,223,1,223,1,223,1,224,1,224,1,224,1,224,1,224,1,224,1,224,
	1,224,1,224,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,226,
	1,226,1,226,1,226,1,226,1,226,1,226,1,227,1,227,1,227,1,227,1,227,1,227,
	1,227,1,227,1,227,1,227,1,227,1,227,1,227,1,227,1,227,1,227,1,227,1,227,
	1,227,1,228,1,228,1,228,1,228,1,228,1,228,1,228,1,229,1,229,1,229,1,229,
	1,229,1,229,1,229,1,229,1,230,1,230,1,230,1,230,1,230,1,230,1,230,1,230,
	1,231,1,231,1,231,1,231,1,231,1,231,1,232,1,232,1,232,1,232,1,232,1,232,
	1,233,1,233,1,233,1,233,1,233,1,234,1,234,1,234,1,234,1,234,1,234,1,234,
	1,234,1,234,1,235,1,235,1,235,1,235,1,236,1,236,1,236,1,236,1,236,1,237,
	1,237,1,237,1,237,1,237,1,237,1,237,1,237,1,238,1,238,1,238,1,238,1,238,
	1,238,1,238,1,238,1,238,1,238,1,239,1,239,1,239,1,240,1,240,1,240,1,241,
	1,241,1,241,1,241,1,242,1,242,1,242,1,242,1,242,1,243,1,243,1,243,1,243,
	1,243,1,243,1,243,1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,245,1,245,
	1,245,1,245,1,245,1,245,1,245,1,245,1,246,1,246,1,246,1,246,1,246,1,246,
	1,246,1,246,1,246,1,247,1,247,1,247,1,247,1,247,1,247,1,247,1,247,1,248,
	1,248,1,248,1,248,1,249,1,249,1,249,1,249,1,249,1,249,1,249,1,250,1,250,
	1,250,1,250,1,251,1,251,1,251,1,251,1,251,1,251,1,251,1,251,1,252,1,252,
	1,252,1,252,1,252,1,252,1,252,1,252,1,252,1,253,1,253,1,253,1,253,1,253,
	1,254,1,254,1,254,1,254,1,254,1,254,1,255,1,255,1,255,1,255,1,255,1,255,
	1,255,1,256,1,256,1,256,1,256,1,256,1,256,1,256,1,256,1,256,1,256,1,256,
	1,256,1,256,1,256,1,257,1,257,1,257,1,257,1,257,1,257,1,257,1,257,1,257,
	1,257,1,257,1,257,1,257,1,258,1,258,1,258,1,258,1,258,1,258,1,258,1,258,
	1,258,1,258,1,258,1,258,1,258,1,258,1,258,1,259,1,259,1,259,1,259,1,259,
	1,259,1,259,1,259,1,259,1,259,1,259,1,259,1,259,1,259,1,260,1,260,1,260,
	1,260,1,260,1,260,1,260,1,260,1,260,1,261,1,261,1,261,1,261,1,262,1,262,
	1,262,1,262,1,262,1,262,1,262,1,262,1,262,1,262,1,262,1,262,1,262,1,263,
	1,263,1,263,1,263,1,263,1,263,1,263,1,263,1,263,1,263,1,264,1,264,1,264,
	1,264,1,264,1,264,1,264,1,264,1,264,1,265,1,265,1,265,1,265,1,265,1,265,
	1,265,1,265,1,265,1,265,1,265,1,266,1,266,1,266,1,266,1,266,1,266,1,267,
	1,267,1,267,1,267,1,267,1,267,1,267,1,267,1,267,1,267,1,267,1,268,1,268,
	1,268,1,268,1,268,1,269,1,269,1,269,1,269,1,269,1,269,1,269,1,269,1,270,
	1,270,1,270,1,270,1,270,1,270,1,270,1,271,1,271,1,271,1,271,1,271,1,271,
	1,271,1,272,1,272,1,272,1,272,1,272,1,272,1,272,1,273,1,273,1,273,1,273,
	1,273,1,273,1,273,1,273,1,273,1,273,1,274,1,274,1,274,1,274,1,275,1,275,
	1,275,1,275,1,275,1,275,1,275,1,275,1,276,1,276,1,276,1,276,1,276,1,276,
	1,276,1,276,1,276,1,276,1,276,1,276,1,276,1,276,1,277,1,277,1,277,1,277,
	1,277,1,277,1,278,1,278,1,278,1,278,1,278,1,278,1,278,1,278,1,278,1,278,
	1,278,1,279,1,279,1,279,1,279,1,279,1,279,1,279,1,279,1,279,1,279,1,280,
	1,280,1,280,1,280,1,280,1,280,1,280,1,280,1,280,1,280,1,280,1,281,1,281,
	1,281,1,281,1,281,1,281,1,281,1,281,1,281,1,281,1,281,1,281,1,281,1,282,
	1,282,1,282,1,282,1,282,1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,
	1,283,1,283,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,285,1,285,
	1,285,1,285,1,285,1,285,1,286,1,286,1,286,1,287,1,287,1,287,1,287,1,288,
	1,288,1,288,1,288,1,288,1,288,1,288,1,288,1,288,1,288,1,288,1,288,1,289,
	1,289,1,289,1,289,1,289,1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,290,
	1,290,1,291,1,291,1,291,1,291,1,291,1,292,1,292,1,292,1,292,1,292,1,292,
	1,293,1,293,1,293,1,293,1,293,1,293,1,293,1,294,1,294,1,294,1,294,1,294,
	1,294,1,294,1,295,1,295,1,295,1,296,1,296,1,296,1,296,1,297,1,297,1,297,
	1,297,1,297,1,297,1,298,1,298,1,298,1,298,1,298,1,298,1,299,1,299,1,299,
	1,299,1,299,1,299,1,299,1,300,1,300,1,300,1,300,1,301,1,301,1,301,1,301,
	1,301,1,301,1,301,1,301,1,302,1,302,1,302,1,302,1,302,1,302,1,302,1,302,
	1,302,1,303,1,303,1,303,1,303,1,303,1,303,1,303,1,303,1,304,1,304,1,304,
	1,304,1,304,1,304,1,304,1,304,1,304,1,305,1,305,1,305,1,305,1,305,1,306,
	1,306,1,306,1,306,1,306,1,306,1,307,1,307,1,307,1,307,1,307,1,307,1,308,
	1,308,1,308,1,308,1,308,1,309,1,309,1,309,1,309,1,309,1,309,1,309,1,309,
	1,310,1,310,1,310,1,310,1,310,1,311,1,311,1,311,1,311,1,311,1,311,1,311,
	1,311,1,311,1,311,1,311,1,312,1,312,1,312,1,312,1,313,1,313,1,313,1,313,
	1,314,1,314,1,314,1,314,1,314,1,314,1,314,1,314,1,314,1,314,1,314,1,314,
	1,314,1,314,1,314,1,315,1,315,1,315,1,315,1,315,1,315,1,315,1,315,1,315,
	1,315,1,316,1,316,1,316,1,316,1,316,1,316,1,316,1,316,1,316,1,316,1,316,
	1,316,1,316,1,317,1,317,1,317,1,317,1,317,1,317,1,317,1,317,1,317,1,317,
	1,317,1,317,1,317,1,317,1,317,1,317,1,317,1,317,1,318,1,318,1,318,1,318,
	1,318,1,318,1,318,1,318,1,318,1,318,1,318,1,318,1,318,1,319,1,319,1,319,
	1,319,1,319,1,319,1,319,1,319,1,319,1,319,1,319,1,320,1,320,1,320,1,320,
	1,320,1,320,1,320,1,320,1,320,1,320,1,320,1,320,1,321,1,321,1,321,1,321,
	1,322,1,322,1,322,1,322,1,322,1,322,1,322,1,322,1,322,1,322,1,322,1,323,
	1,323,1,323,1,323,1,323,1,324,1,324,1,324,1,324,1,324,1,324,1,324,1,324,
	1,324,1,324,1,324,1,324,1,324,1,324,1,324,1,324,1,325,1,325,1,325,1,325,
	1,325,1,325,1,325,1,325,1,325,1,325,1,325,1,325,1,325,1,325,1,325,1,325,
	1,326,1,326,1,326,1,326,1,326,1,326,1,326,1,326,1,326,1,326,1,326,1,326,
	1,326,1,327,1,327,1,327,1,327,1,327,1,327,1,327,1,327,1,327,1,327,1,327,
	1,327,1,327,1,328,1,328,1,328,1,328,1,328,1,328,1,328,1,328,1,328,1,328,
	1,328,1,328,1,328,1,328,1,329,1,329,1,329,1,329,1,329,1,329,1,329,1,329,
	1,329,1,329,1,329,1,329,1,329,1,329,1,330,1,330,1,330,1,330,1,330,1,330,
	1,330,1,330,1,330,1,330,1,330,1,331,1,331,1,331,1,331,1,331,1,331,1,331,
	1,331,1,331,1,332,1,332,1,332,1,332,1,332,1,333,1,333,1,333,1,333,1,333,
	1,333,1,333,1,333,1,333,1,333,1,333,1,334,1,334,1,334,1,334,1,334,1,334,
	1,335,1,335,1,335,1,335,1,335,1,335,1,335,1,335,1,336,1,336,1,336,1,336,
	1,336,1,336,1,336,1,336,1,336,1,337,1,337,1,337,1,337,1,337,1,338,1,338,
	1,339,1,339,1,340,1,340,1,341,1,341,1,341,1,342,1,342,1,343,1,343,1,344,
	1,344,1,344,1,345,1,345,1,346,1,346,1,346,1,347,1,347,1,348,1,348,1,349,
	1,349,1,349,1,350,1,350,1,350,1,351,1,351,1,352,1,352,1,352,1,353,1,353,
	1,354,1,354,1,354,1,355,1,355,1,356,1,356,1,357,1,357,1,358,1,358,1,359,
	1,359,1,360,1,360,1,361,1,361,1,362,1,362,1,363,1,363,1,364,1,364,1,365,
	1,365,1,366,1,366,1,367,1,367,1,367,1,367,1,367,1,367,5,367,3418,8,367,
	10,367,12,367,3421,9,367,1,367,1,367,1,368,1,368,1,368,5,368,3428,8,368,
	10,368,12,368,3431,9,368,1,368,1,368,1,369,4,369,3436,8,369,11,369,12,369,
	3437,1,370,4,370,3441,8,370,11,370,12,370,3442,1,370,1,370,1,370,5,370,
	3448,8,370,10,370,12,370,3451,9,370,1,370,1,370,4,370,3455,8,370,11,370,
	12,370,3456,3,370,3459,8,370,1,371,4,371,3462,8,371,11,371,12,371,3463,
	1,371,1,371,1,372,1,372,1,372,1,372,5,372,3472,8,372,10,372,12,372,3475,
	9,372,1,372,1,372,1,372,1,372,1,372,1,373,1,373,1,373,1,373,3,373,3486,
	8,373,1,373,5,373,3489,8,373,10,373,12,373,3492,9,373,1,373,3,373,3495,
	8,373,1,373,1,373,1,373,1,373,1,374,1,374,1,374,3,374,3504,8,374,3,374,
	3506,8,374,1,374,1,374,1,374,5,374,3511,8,374,10,374,12,374,3514,9,374,
	1,375,1,375,1,375,5,375,3519,8,375,10,375,12,375,3522,9,375,1,375,1,375,
	1,376,1,376,1,376,1,376,5,376,3530,8,376,10,376,12,376,3533,9,376,1,376,
	1,376,1,376,5,376,3538,8,376,10,376,12,376,3541,9,376,1,376,1,376,1,376,
	1,376,1,376,4,376,3548,8,376,11,376,12,376,3549,1,376,1,376,5,376,3554,
	8,376,10,376,12,376,3557,9,376,1,376,1,376,1,376,5,376,3562,8,376,10,376,
	12,376,3565,9,376,1,376,1,376,1,376,5,376,3570,8,376,10,376,12,376,3573,
	9,376,1,376,3,376,3576,8,376,1,377,1,377,1,377,1,377,3,377,3582,8,377,1,
	378,1,378,1,379,1,379,1,380,1,380,1,381,1,381,1,382,1,382,1,383,1,383,1,
	384,1,384,1,385,1,385,1,386,1,386,1,387,1,387,1,388,1,388,1,389,1,389,1,
	390,1,390,1,391,1,391,1,392,1,392,1,393,1,393,1,394,1,394,1,395,1,395,1,
	396,1,396,1,397,1,397,1,398,1,398,1,399,1,399,1,400,1,400,1,401,1,401,1,
	402,1,402,1,403,1,403,1,404,1,404,1,405,1,405,7,3429,3473,3490,3539,3555,
	3563,3571,0,406,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,
	12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,
	24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,
	36,73,37,75,38,77,39,79,40,81,41,83,42,85,43,87,44,89,45,91,46,93,47,95,
	48,97,49,99,50,101,51,103,52,105,53,107,54,109,55,111,56,113,57,115,58,
	117,59,119,60,121,61,123,62,125,63,127,64,129,65,131,66,133,67,135,68,137,
	69,139,70,141,71,143,72,145,73,147,74,149,75,151,76,153,77,155,78,157,79,
	159,80,161,81,163,82,165,83,167,84,169,85,171,86,173,87,175,88,177,89,179,
	90,181,91,183,92,185,93,187,94,189,95,191,96,193,97,195,98,197,99,199,100,
	201,101,203,102,205,103,207,104,209,105,211,106,213,107,215,108,217,109,
	219,110,221,111,223,112,225,113,227,114,229,115,231,116,233,117,235,118,
	237,119,239,120,241,121,243,122,245,123,247,124,249,125,251,126,253,127,
	255,128,257,129,259,130,261,131,263,132,265,133,267,134,269,135,271,136,
	273,137,275,138,277,139,279,140,281,141,283,142,285,143,287,144,289,145,
	291,146,293,147,295,148,297,149,299,150,301,151,303,152,305,153,307,154,
	309,155,311,156,313,157,315,158,317,159,319,160,321,161,323,162,325,163,
	327,164,329,165,331,166,333,167,335,168,337,169,339,170,341,171,343,172,
	345,173,347,174,349,175,351,176,353,177,355,178,357,179,359,180,361,181,
	363,182,365,183,367,184,369,185,371,186,373,187,375,188,377,189,379,190,
	381,191,383,192,385,193,387,194,389,195,391,196,393,197,395,198,397,199,
	399,200,401,201,403,202,405,203,407,204,409,205,411,206,413,207,415,208,
	417,209,419,210,421,211,423,212,425,213,427,214,429,215,431,216,433,217,
	435,218,437,219,439,220,441,221,443,222,445,223,447,224,449,225,451,226,
	453,227,455,228,457,229,459,230,461,231,463,232,465,233,467,234,469,235,
	471,236,473,237,475,238,477,239,479,240,481,241,483,242,485,243,487,244,
	489,245,491,246,493,247,495,248,497,249,499,250,501,251,503,252,505,253,
	507,254,509,255,511,256,513,257,515,258,517,259,519,260,521,261,523,262,
	525,263,527,264,529,265,531,266,533,267,535,268,537,269,539,270,541,271,
	543,272,545,273,547,274,549,275,551,276,553,277,555,278,557,279,559,280,
	561,281,563,282,565,283,567,284,569,285,571,286,573,287,575,288,577,289,
	579,290,581,291,583,292,585,293,587,294,589,295,591,296,593,297,595,298,
	597,299,599,300,601,301,603,302,605,303,607,304,609,305,611,306,613,307,
	615,308,617,309,619,310,621,311,623,312,625,313,627,314,629,315,631,316,
	633,317,635,318,637,319,639,320,641,321,643,322,645,323,647,324,649,325,
	651,326,653,327,655,328,657,329,659,330,661,331,663,332,665,333,667,334,
	669,335,671,336,673,337,675,338,677,339,679,340,681,341,683,342,685,343,
	687,344,689,345,691,346,693,347,695,348,697,349,699,350,701,351,703,352,
	705,353,707,354,709,355,711,356,713,357,715,358,717,359,719,360,721,361,
	723,362,725,363,727,364,729,365,731,366,733,367,735,368,737,369,739,370,
	741,371,743,372,745,373,747,374,749,375,751,376,753,0,755,0,757,0,759,0,
	761,0,763,0,765,0,767,0,769,0,771,0,773,0,775,0,777,0,779,0,781,0,783,0,
	785,0,787,0,789,0,791,0,793,0,795,0,797,0,799,0,801,0,803,0,805,0,807,0,
	809,0,811,0,1,0,32,1,0,39,39,1,0,46,46,2,0,65,90,97,122,4,0,35,36,58,58,
	64,64,95,95,1,0,48,57,3,0,9,10,13,13,32,32,2,0,65,65,97,97,2,0,66,66,98,
	98,2,0,67,67,99,99,2,0,68,68,100,100,2,0,69,69,101,101,2,0,70,70,102,102,
	2,0,71,71,103,103,2,0,72,72,104,104,2,0,73,73,105,105,2,0,74,74,106,106,
	2,0,75,75,107,107,2,0,76,76,108,108,2,0,77,77,109,109,2,0,78,78,110,110,
	2,0,79,79,111,111,2,0,80,80,112,112,2,0,81,81,113,113,2,0,82,82,114,114,
	2,0,83,83,115,115,2,0,84,84,116,116,2,0,85,85,117,117,2,0,86,86,118,118,
	2,0,87,87,119,119,2,0,88,88,120,120,2,0,89,89,121,121,2,0,90,90,122,122,
	3645,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,
	0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,
	0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,
	0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,
	0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,
	0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,
	0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,
	0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,0,
	0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,1,0,0,0,0,99,1,
	0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,0,0,107,1,0,0,0,0,109,1,0,
	0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,115,1,0,0,0,0,117,1,0,0,0,0,119,1,0,0,
	0,0,121,1,0,0,0,0,123,1,0,0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,0,
	0,131,1,0,0,0,0,133,1,0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,0,0,0,
	141,1,0,0,0,0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,1,0,0,0,0,151,
	1,0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,0,159,1,0,0,0,0,161,1,
	0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,0,0,169,1,0,0,0,0,171,1,0,
	0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,177,1,0,0,0,0,179,1,0,0,0,0,181,1,0,0,
	0,0,183,1,0,0,0,0,185,1,0,0,0,0,187,1,0,0,0,0,189,1,0,0,0,0,191,1,0,0,0,
	0,193,1,0,0,0,0,195,1,0,0,0,0,197,1,0,0,0,0,199,1,0,0,0,0,201,1,0,0,0,0,
	203,1,0,0,0,0,205,1,0,0,0,0,207,1,0,0,0,0,209,1,0,0,0,0,211,1,0,0,0,0,213,
	1,0,0,0,0,215,1,0,0,0,0,217,1,0,0,0,0,219,1,0,0,0,0,221,1,0,0,0,0,223,1,
	0,0,0,0,225,1,0,0,0,0,227,1,0,0,0,0,229,1,0,0,0,0,231,1,0,0,0,0,233,1,0,
	0,0,0,235,1,0,0,0,0,237,1,0,0,0,0,239,1,0,0,0,0,241,1,0,0,0,0,243,1,0,0,
	0,0,245,1,0,0,0,0,247,1,0,0,0,0,249,1,0,0,0,0,251,1,0,0,0,0,253,1,0,0,0,
	0,255,1,0,0,0,0,257,1,0,0,0,0,259,1,0,0,0,0,261,1,0,0,0,0,263,1,0,0,0,0,
	265,1,0,0,0,0,267,1,0,0,0,0,269,1,0,0,0,0,271,1,0,0,0,0,273,1,0,0,0,0,275,
	1,0,0,0,0,277,1,0,0,0,0,279,1,0,0,0,0,281,1,0,0,0,0,283,1,0,0,0,0,285,1,
	0,0,0,0,287,1,0,0,0,0,289,1,0,0,0,0,291,1,0,0,0,0,293,1,0,0,0,0,295,1,0,
	0,0,0,297,1,0,0,0,0,299,1,0,0,0,0,301,1,0,0,0,0,303,1,0,0,0,0,305,1,0,0,
	0,0,307,1,0,0,0,0,309,1,0,0,0,0,311,1,0,0,0,0,313,1,0,0,0,0,315,1,0,0,0,
	0,317,1,0,0,0,0,319,1,0,0,0,0,321,1,0,0,0,0,323,1,0,0,0,0,325,1,0,0,0,0,
	327,1,0,0,0,0,329,1,0,0,0,0,331,1,0,0,0,0,333,1,0,0,0,0,335,1,0,0,0,0,337,
	1,0,0,0,0,339,1,0,0,0,0,341,1,0,0,0,0,343,1,0,0,0,0,345,1,0,0,0,0,347,1,
	0,0,0,0,349,1,0,0,0,0,351,1,0,0,0,0,353,1,0,0,0,0,355,1,0,0,0,0,357,1,0,
	0,0,0,359,1,0,0,0,0,361,1,0,0,0,0,363,1,0,0,0,0,365,1,0,0,0,0,367,1,0,0,
	0,0,369,1,0,0,0,0,371,1,0,0,0,0,373,1,0,0,0,0,375,1,0,0,0,0,377,1,0,0,0,
	0,379,1,0,0,0,0,381,1,0,0,0,0,383,1,0,0,0,0,385,1,0,0,0,0,387,1,0,0,0,0,
	389,1,0,0,0,0,391,1,0,0,0,0,393,1,0,0,0,0,395,1,0,0,0,0,397,1,0,0,0,0,399,
	1,0,0,0,0,401,1,0,0,0,0,403,1,0,0,0,0,405,1,0,0,0,0,407,1,0,0,0,0,409,1,
	0,0,0,0,411,1,0,0,0,0,413,1,0,0,0,0,415,1,0,0,0,0,417,1,0,0,0,0,419,1,0,
	0,0,0,421,1,0,0,0,0,423,1,0,0,0,0,425,1,0,0,0,0,427,1,0,0,0,0,429,1,0,0,
	0,0,431,1,0,0,0,0,433,1,0,0,0,0,435,1,0,0,0,0,437,1,0,0,0,0,439,1,0,0,0,
	0,441,1,0,0,0,0,443,1,0,0,0,0,445,1,0,0,0,0,447,1,0,0,0,0,449,1,0,0,0,0,
	451,1,0,0,0,0,453,1,0,0,0,0,455,1,0,0,0,0,457,1,0,0,0,0,459,1,0,0,0,0,461,
	1,0,0,0,0,463,1,0,0,0,0,465,1,0,0,0,0,467,1,0,0,0,0,469,1,0,0,0,0,471,1,
	0,0,0,0,473,1,0,0,0,0,475,1,0,0,0,0,477,1,0,0,0,0,479,1,0,0,0,0,481,1,0,
	0,0,0,483,1,0,0,0,0,485,1,0,0,0,0,487,1,0,0,0,0,489,1,0,0,0,0,491,1,0,0,
	0,0,493,1,0,0,0,0,495,1,0,0,0,0,497,1,0,0,0,0,499,1,0,0,0,0,501,1,0,0,0,
	0,503,1,0,0,0,0,505,1,0,0,0,0,507,1,0,0,0,0,509,1,0,0,0,0,511,1,0,0,0,0,
	513,1,0,0,0,0,515,1,0,0,0,0,517,1,0,0,0,0,519,1,0,0,0,0,521,1,0,0,0,0,523,
	1,0,0,0,0,525,1,0,0,0,0,527,1,0,0,0,0,529,1,0,0,0,0,531,1,0,0,0,0,533,1,
	0,0,0,0,535,1,0,0,0,0,537,1,0,0,0,0,539,1,0,0,0,0,541,1,0,0,0,0,543,1,0,
	0,0,0,545,1,0,0,0,0,547,1,0,0,0,0,549,1,0,0,0,0,551,1,0,0,0,0,553,1,0,0,
	0,0,555,1,0,0,0,0,557,1,0,0,0,0,559,1,0,0,0,0,561,1,0,0,0,0,563,1,0,0,0,
	0,565,1,0,0,0,0,567,1,0,0,0,0,569,1,0,0,0,0,571,1,0,0,0,0,573,1,0,0,0,0,
	575,1,0,0,0,0,577,1,0,0,0,0,579,1,0,0,0,0,581,1,0,0,0,0,583,1,0,0,0,0,585,
	1,0,0,0,0,587,1,0,0,0,0,589,1,0,0,0,0,591,1,0,0,0,0,593,1,0,0,0,0,595,1,
	0,0,0,0,597,1,0,0,0,0,599,1,0,0,0,0,601,1,0,0,0,0,603,1,0,0,0,0,605,1,0,
	0,0,0,607,1,0,0,0,0,609,1,0,0,0,0,611,1,0,0,0,0,613,1,0,0,0,0,615,1,0,0,
	0,0,617,1,0,0,0,0,619,1,0,0,0,0,621,1,0,0,0,0,623,1,0,0,0,0,625,1,0,0,0,
	0,627,1,0,0,0,0,629,1,0,0,0,0,631,1,0,0,0,0,633,1,0,0,0,0,635,1,0,0,0,0,
	637,1,0,0,0,0,639,1,0,0,0,0,641,1,0,0,0,0,643,1,0,0,0,0,645,1,0,0,0,0,647,
	1,0,0,0,0,649,1,0,0,0,0,651,1,0,0,0,0,653,1,0,0,0,0,655,1,0,0,0,0,657,1,
	0,0,0,0,659,1,0,0,0,0,661,1,0,0,0,0,663,1,0,0,0,0,665,1,0,0,0,0,667,1,0,
	0,0,0,669,1,0,0,0,0,671,1,0,0,0,0,673,1,0,0,0,0,675,1,0,0,0,0,677,1,0,0,
	0,0,679,1,0,0,0,0,681,1,0,0,0,0,683,1,0,0,0,0,685,1,0,0,0,0,687,1,0,0,0,
	0,689,1,0,0,0,0,691,1,0,0,0,0,693,1,0,0,0,0,695,1,0,0,0,0,697,1,0,0,0,0,
	699,1,0,0,0,0,701,1,0,0,0,0,703,1,0,0,0,0,705,1,0,0,0,0,707,1,0,0,0,0,709,
	1,0,0,0,0,711,1,0,0,0,0,713,1,0,0,0,0,715,1,0,0,0,0,717,1,0,0,0,0,719,1,
	0,0,0,0,721,1,0,0,0,0,723,1,0,0,0,0,725,1,0,0,0,0,727,1,0,0,0,0,729,1,0,
	0,0,0,731,1,0,0,0,0,733,1,0,0,0,0,735,1,0,0,0,0,737,1,0,0,0,0,739,1,0,0,
	0,0,741,1,0,0,0,0,743,1,0,0,0,0,745,1,0,0,0,0,747,1,0,0,0,0,749,1,0,0,0,
	0,751,1,0,0,0,1,813,1,0,0,0,3,820,1,0,0,0,5,824,1,0,0,0,7,828,1,0,0,0,9,
	837,1,0,0,0,11,843,1,0,0,0,13,847,1,0,0,0,15,858,1,0,0,0,17,871,1,0,0,0,
	19,874,1,0,0,0,21,878,1,0,0,0,23,888,1,0,0,0,25,891,1,0,0,0,27,906,1,0,
	0,0,29,910,1,0,0,0,31,920,1,0,0,0,33,926,1,0,0,0,35,934,1,0,0,0,37,941,
	1,0,0,0,39,955,1,0,0,0,41,968,1,0,0,0,43,983,1,0,0,0,45,987,1,0,0,0,47,
	992,1,0,0,0,49,998,1,0,0,0,51,1001,1,0,0,0,53,1006,1,0,0,0,55,1011,1,0,
	0,0,57,1018,1,0,0,0,59,1026,1,0,0,0,61,1031,1,0,0,0,63,1044,1,0,0,0,65,
	1049,1,0,0,0,67,1054,1,0,0,0,69,1064,1,0,0,0,71,1072,1,0,0,0,73,1079,1,
	0,0,0,75,1085,1,0,0,0,77,1095,1,0,0,0,79,1099,1,0,0,0,81,1107,1,0,0,0,83,
	1118,1,0,0,0,85,1125,1,0,0,0,87,1133,1,0,0,0,89,1142,1,0,0,0,91,1149,1,
	0,0,0,93,1158,1,0,0,0,95,1165,1,0,0,0,97,1175,1,0,0,0,99,1186,1,0,0,0,101,
	1195,1,0,0,0,103,1200,1,0,0,0,105,1206,1,0,0,0,107,1216,1,0,0,0,109,1223,
	1,0,0,0,111,1232,1,0,0,0,113,1240,1,0,0,0,115,1243,1,0,0,0,117,1251,1,0,
	0,0,119,1266,1,0,0,0,121,1273,1,0,0,0,123,1282,1,0,0,0,125,1287,1,0,0,0,
	127,1292,1,0,0,0,129,1301,1,0,0,0,131,1305,1,0,0,0,133,1310,1,0,0,0,135,
	1314,1,0,0,0,137,1322,1,0,0,0,139,1330,1,0,0,0,141,1338,1,0,0,0,143,1347,
	1,0,0,0,145,1355,1,0,0,0,147,1363,1,0,0,0,149,1374,1,0,0,0,151,1381,1,0,
	0,0,153,1391,1,0,0,0,155,1401,1,0,0,0,157,1406,1,0,0,0,159,1415,1,0,0,0,
	161,1427,1,0,0,0,163,1431,1,0,0,0,165,1441,1,0,0,0,167,1450,1,0,0,0,169,
	1461,1,0,0,0,171,1464,1,0,0,0,173,1471,1,0,0,0,175,1476,1,0,0,0,177,1484,
	1,0,0,0,179,1489,1,0,0,0,181,1496,1,0,0,0,183,1502,1,0,0,0,185,1509,1,0,
	0,0,187,1513,1,0,0,0,189,1520,1,0,0,0,191,1528,1,0,0,0,193,1535,1,0,0,0,
	195,1540,1,0,0,0,197,1548,1,0,0,0,199,1558,1,0,0,0,201,1568,1,0,0,0,203,
	1575,1,0,0,0,205,1580,1,0,0,0,207,1589,1,0,0,0,209,1595,1,0,0,0,211,1601,
	1,0,0,0,213,1608,1,0,0,0,215,1613,1,0,0,0,217,1619,1,0,0,0,219,1625,1,0,
	0,0,221,1629,1,0,0,0,223,1637,1,0,0,0,225,1644,1,0,0,0,227,1650,1,0,0,0,
	229,1655,1,0,0,0,231,1660,1,0,0,0,233,1669,1,0,0,0,235,1673,1,0,0,0,237,
	1680,1,0,0,0,239,1683,1,0,0,0,241,1689,1,0,0,0,243,1695,1,0,0,0,245,1703,
	1,0,0,0,247,1708,1,0,0,0,249,1715,1,0,0,0,251,1720,1,0,0,0,253,1725,1,0,
	0,0,255,1730,1,0,0,0,257,1739,1,0,0,0,259,1742,1,0,0,0,261,1749,1,0,0,0,
	263,1759,1,0,0,0,265,1762,1,0,0,0,267,1770,1,0,0,0,269,1776,1,0,0,0,271,
	1785,1,0,0,0,273,1791,1,0,0,0,275,1797,1,0,0,0,277,1804,1,0,0,0,279,1808,
	1,0,0,0,281,1813,1,0,0,0,283,1818,1,0,0,0,285,1823,1,0,0,0,287,1831,1,0,
	0,0,289,1841,1,0,0,0,291,1850,1,0,0,0,293,1855,1,0,0,0,295,1863,1,0,0,0,
	297,1866,1,0,0,0,299,1873,1,0,0,0,301,1879,1,0,0,0,303,1884,1,0,0,0,305,
	1889,1,0,0,0,307,1893,1,0,0,0,309,1898,1,0,0,0,311,1907,1,0,0,0,313,1913,
	1,0,0,0,315,1918,1,0,0,0,317,1923,1,0,0,0,319,1929,1,0,0,0,321,1935,1,0,
	0,0,323,1941,1,0,0,0,325,1950,1,0,0,0,327,1958,1,0,0,0,329,1967,1,0,0,0,
	331,1973,1,0,0,0,333,1977,1,0,0,0,335,1984,1,0,0,0,337,1992,1,0,0,0,339,
	1997,1,0,0,0,341,2001,1,0,0,0,343,2009,1,0,0,0,345,2013,1,0,0,0,347,2022,
	1,0,0,0,349,2028,1,0,0,0,351,2041,1,0,0,0,353,2053,1,0,0,0,355,2066,1,0,
	0,0,357,2070,1,0,0,0,359,2079,1,0,0,0,361,2085,1,0,0,0,363,2089,1,0,0,0,
	365,2098,1,0,0,0,367,2101,1,0,0,0,369,2109,1,0,0,0,371,2120,1,0,0,0,373,
	2130,1,0,0,0,375,2135,1,0,0,0,377,2139,1,0,0,0,379,2148,1,0,0,0,381,2153,
	1,0,0,0,383,2161,1,0,0,0,385,2168,1,0,0,0,387,2175,1,0,0,0,389,2179,1,0,
	0,0,391,2182,1,0,0,0,393,2187,1,0,0,0,395,2192,1,0,0,0,397,2195,1,0,0,0,
	399,2201,1,0,0,0,401,2205,1,0,0,0,403,2211,1,0,0,0,405,2216,1,0,0,0,407,
	2226,1,0,0,0,409,2232,1,0,0,0,411,2240,1,0,0,0,413,2250,1,0,0,0,415,2258,
	1,0,0,0,417,2266,1,0,0,0,419,2278,1,0,0,0,421,2288,1,0,0,0,423,2297,1,0,
	0,0,425,2305,1,0,0,0,427,2311,1,0,0,0,429,2316,1,0,0,0,431,2326,1,0,0,0,
	433,2334,1,0,0,0,435,2345,1,0,0,0,437,2350,1,0,0,0,439,2368,1,0,0,0,441,
	2374,1,0,0,0,443,2379,1,0,0,0,445,2390,1,0,0,0,447,2397,1,0,0,0,449,2405,
	1,0,0,0,451,2414,1,0,0,0,453,2423,1,0,0,0,455,2430,1,0,0,0,457,2449,1,0,
	0,0,459,2456,1,0,0,0,461,2464,1,0,0,0,463,2472,1,0,0,0,465,2478,1,0,0,0,
	467,2484,1,0,0,0,469,2489,1,0,0,0,471,2498,1,0,0,0,473,2502,1,0,0,0,475,
	2507,1,0,0,0,477,2515,1,0,0,0,479,2525,1,0,0,0,481,2528,1,0,0,0,483,2531,
	1,0,0,0,485,2535,1,0,0,0,487,2540,1,0,0,0,489,2547,1,0,0,0,491,2554,1,0,
	0,0,493,2562,1,0,0,0,495,2571,1,0,0,0,497,2579,1,0,0,0,499,2583,1,0,0,0,
	501,2590,1,0,0,0,503,2594,1,0,0,0,505,2602,1,0,0,0,507,2611,1,0,0,0,509,
	2616,1,0,0,0,511,2622,1,0,0,0,513,2629,1,0,0,0,515,2643,1,0,0,0,517,2656,
	1,0,0,0,519,2671,1,0,0,0,521,2685,1,0,0,0,523,2694,1,0,0,0,525,2698,1,0,
	0,0,527,2711,1,0,0,0,529,2721,1,0,0,0,531,2730,1,0,0,0,533,2741,1,0,0,0,
	535,2747,1,0,0,0,537,2758,1,0,0,0,539,2763,1,0,0,0,541,2771,1,0,0,0,543,
	2778,1,0,0,0,545,2785,1,0,0,0,547,2792,1,0,0,0,549,2802,1,0,0,0,551,2806,
	1,0,0,0,553,2814,1,0,0,0,555,2828,1,0,0,0,557,2834,1,0,0,0,559,2845,1,0,
	0,0,561,2855,1,0,0,0,563,2866,1,0,0,0,565,2879,1,0,0,0,567,2884,1,0,0,0,
	569,2894,1,0,0,0,571,2902,1,0,0,0,573,2908,1,0,0,0,575,2911,1,0,0,0,577,
	2915,1,0,0,0,579,2927,1,0,0,0,581,2932,1,0,0,0,583,2941,1,0,0,0,585,2946,
	1,0,0,0,587,2952,1,0,0,0,589,2959,1,0,0,0,591,2966,1,0,0,0,593,2969,1,0,
	0,0,595,2973,1,0,0,0,597,2979,1,0,0,0,599,2985,1,0,0,0,601,2992,1,0,0,0,
	603,2996,1,0,0,0,605,3004,1,0,0,0,607,3013,1,0,0,0,609,3021,1,0,0,0,611,
	3030,1,0,0,0,613,3035,1,0,0,0,615,3041,1,0,0,0,617,3047,1,0,0,0,619,3052,
	1,0,0,0,621,3060,1,0,0,0,623,3065,1,0,0,0,625,3076,1,0,0,0,627,3080,1,0,
	0,0,629,3084,1,0,0,0,631,3099,1,0,0,0,633,3109,1,0,0,0,635,3122,1,0,0,0,
	637,3140,1,0,0,0,639,3153,1,0,0,0,641,3164,1,0,0,0,643,3176,1,0,0,0,645,
	3180,1,0,0,0,647,3191,1,0,0,0,649,3196,1,0,0,0,651,3212,1,0,0,0,653,3228,
	1,0,0,0,655,3241,1,0,0,0,657,3254,1,0,0,0,659,3268,1,0,0,0,661,3282,1,0,
	0,0,663,3293,1,0,0,0,665,3302,1,0,0,0,667,3307,1,0,0,0,669,3318,1,0,0,0,
	671,3324,1,0,0,0,673,3332,1,0,0,0,675,3341,1,0,0,0,677,3346,1,0,0,0,679,
	3348,1,0,0,0,681,3350,1,0,0,0,683,3352,1,0,0,0,685,3355,1,0,0,0,687,3357,
	1,0,0,0,689,3359,1,0,0,0,691,3362,1,0,0,0,693,3364,1,0,0,0,695,3367,1,0,
	0,0,697,3369,1,0,0,0,699,3371,1,0,0,0,701,3374,1,0,0,0,703,3377,1,0,0,0,
	705,3379,1,0,0,0,707,3382,1,0,0,0,709,3384,1,0,0,0,711,3387,1,0,0,0,713,
	3389,1,0,0,0,715,3391,1,0,0,0,717,3393,1,0,0,0,719,3395,1,0,0,0,721,3397,
	1,0,0,0,723,3399,1,0,0,0,725,3401,1,0,0,0,727,3403,1,0,0,0,729,3405,1,0,
	0,0,731,3407,1,0,0,0,733,3409,1,0,0,0,735,3411,1,0,0,0,737,3424,1,0,0,0,
	739,3435,1,0,0,0,741,3458,1,0,0,0,743,3461,1,0,0,0,745,3467,1,0,0,0,747,
	3485,1,0,0,0,749,3505,1,0,0,0,751,3520,1,0,0,0,753,3575,1,0,0,0,755,3581,
	1,0,0,0,757,3583,1,0,0,0,759,3585,1,0,0,0,761,3587,1,0,0,0,763,3589,1,0,
	0,0,765,3591,1,0,0,0,767,3593,1,0,0,0,769,3595,1,0,0,0,771,3597,1,0,0,0,
	773,3599,1,0,0,0,775,3601,1,0,0,0,777,3603,1,0,0,0,779,3605,1,0,0,0,781,
	3607,1,0,0,0,783,3609,1,0,0,0,785,3611,1,0,0,0,787,3613,1,0,0,0,789,3615,
	1,0,0,0,791,3617,1,0,0,0,793,3619,1,0,0,0,795,3621,1,0,0,0,797,3623,1,0,
	0,0,799,3625,1,0,0,0,801,3627,1,0,0,0,803,3629,1,0,0,0,805,3631,1,0,0,0,
	807,3633,1,0,0,0,809,3635,1,0,0,0,811,3637,1,0,0,0,813,814,3,761,380,0,
	814,815,3,765,382,0,815,816,3,799,399,0,816,817,3,777,388,0,817,818,3,789,
	394,0,818,819,3,787,393,0,819,2,1,0,0,0,820,821,3,761,380,0,821,822,3,767,
	383,0,822,823,3,767,383,0,823,4,1,0,0,0,824,825,3,761,380,0,825,826,3,783,
	391,0,826,827,3,783,391,0,827,6,1,0,0,0,828,829,3,761,380,0,829,830,3,783,
	391,0,830,831,3,783,391,0,831,832,3,789,394,0,832,833,3,765,382,0,833,834,
	3,761,380,0,834,835,3,799,399,0,835,836,3,769,384,0,836,8,1,0,0,0,837,838,
	3,761,380,0,838,839,3,783,391,0,839,840,3,799,399,0,840,841,3,769,384,0,
	841,842,3,795,397,0,842,10,1,0,0,0,843,844,3,761,380,0,844,845,3,787,393,
	0,845,846,3,767,383,0,846,12,1,0,0,0,847,848,3,761,380,0,848,849,3,787,
	393,0,849,850,3,797,398,0,850,851,3,777,388,0,851,852,5,95,0,0,852,853,
	3,787,393,0,853,854,3,801,400,0,854,855,3,783,391,0,855,856,3,783,391,0,
	856,857,3,797,398,0,857,14,1,0,0,0,858,859,3,761,380,0,859,860,3,787,393,
	0,860,861,3,797,398,0,861,862,3,777,388,0,862,863,5,95,0,0,863,864,3,791,
	395,0,864,865,3,761,380,0,865,866,3,767,383,0,866,867,3,767,383,0,867,868,
	3,777,388,0,868,869,3,787,393,0,869,870,3,773,386,0,870,16,1,0,0,0,871,
	872,3,761,380,0,872,873,3,797,398,0,873,18,1,0,0,0,874,875,3,761,380,0,
	875,876,3,797,398,0,876,877,3,765,382,0,877,20,1,0,0,0,878,879,3,761,380,
	0,879,880,3,797,398,0,880,881,3,797,398,0,881,882,3,789,394,0,882,883,3,
	765,382,0,883,884,3,777,388,0,884,885,3,761,380,0,885,886,3,799,399,0,886,
	887,3,769,384,0,887,22,1,0,0,0,888,889,3,761,380,0,889,890,3,799,399,0,
	890,24,1,0,0,0,891,892,3,761,380,0,892,893,3,801,400,0,893,894,3,799,399,
	0,894,895,3,789,394,0,895,896,5,95,0,0,896,897,3,777,388,0,897,898,3,787,
	393,0,898,899,3,765,382,0,899,900,3,795,397,0,900,901,3,769,384,0,901,902,
	3,785,392,0,902,903,3,769,384,0,903,904,3,787,393,0,904,905,3,799,399,0,
	905,26,1,0,0,0,906,907,3,761,380,0,907,908,3,803,401,0,908,909,3,773,386,
	0,909,28,1,0,0,0,910,911,3,763,381,0,911,912,3,761,380,0,912,913,3,799,
	399,0,913,914,3,765,382,0,914,915,3,775,387,0,915,916,3,797,398,0,916,917,
	3,777,388,0,917,918,3,811,405,0,918,919,3,769,384,0,919,30,1,0,0,0,920,
	921,3,763,381,0,921,922,3,769,384,0,922,923,3,773,386,0,923,924,3,777,388,
	0,924,925,3,787,393,0,925,32,1,0,0,0,926,927,3,763,381,0,927,928,3,769,
	384,0,928,929,3,799,399,0,929,930,3,805,402,0,930,931,3,769,384,0,931,932,
	3,769,384,0,932,933,3,787,393,0,933,34,1,0,0,0,934,935,3,763,381,0,935,
	936,3,777,388,0,936,937,3,773,386,0,937,938,3,777,388,0,938,939,3,787,393,
	0,939,940,3,799,399,0,940,36,1,0,0,0,941,942,3,763,381,0,942,943,3,777,
	388,0,943,944,3,787,393,0,944,945,3,761,380,0,945,946,3,795,397,0,946,947,
	3,809,404,0,947,948,5,95,0,0,948,949,3,767,383,0,949,950,3,789,394,0,950,
	951,3,801,400,0,951,952,3,763,381,0,952,953,3,783,391,0,953,954,3,769,384,
	0,954,38,1,0,0,0,955,956,3,763,381,0,956,957,3,777,388,0,957,958,3,787,
	393,0,958,959,3,761,380,0,959,960,3,795,397,0,960,961,3,809,404,0,961,962,
	5,95,0,0,962,963,3,771,385,0,963,964,3,783,391,0,964,965,3,789,394,0,965,
	966,3,761,380,0,966,967,3,799,399,0,967,40,1,0,0,0,968,969,3,763,381,0,
	969,970,3,777,388,0,970,971,3,787,393,0,971,972,3,761,380,0,972,973,3,795,
	397,0,973,974,3,809,404,0,974,975,5,95,0,0,975,976,3,777,388,0,976,977,
	3,787,393,0,977,978,3,799,399,0,978,979,3,769,384,0,979,980,3,773,386,0,
	980,981,3,769,384,0,981,982,3,795,397,0,982,42,1,0,0,0,983,984,3,763,381,
	0,984,985,3,777,388,0,985,986,3,799,399,0,986,44,1,0,0,0,987,988,3,763,
	381,0,988,989,3,789,394,0,989,990,3,767,383,0,990,991,3,809,404,0,991,46,
	1,0,0,0,992,993,3,763,381,0,993,994,3,795,397,0,994,995,3,769,384,0,995,
	996,3,761,380,0,996,997,3,781,390,0,997,48,1,0,0,0,998,999,3,763,381,0,
	999,1000,3,809,404,0,1000,50,1,0,0,0,1001,1002,3,763,381,0,1002,1003,3,
	809,404,0,1003,1004,3,799,399,0,1004,1005,3,769,384,0,1005,52,1,0,0,0,1006,
	1007,3,765,382,0,1007,1008,3,761,380,0,1008,1009,3,783,391,0,1009,1010,
	3,783,391,0,1010,54,1,0,0,0,1011,1012,3,765,382,0,1012,1013,3,761,380,0,
	1013,1014,3,783,391,0,1014,1015,3,783,391,0,1015,1016,3,769,384,0,1016,
	1017,3,795,397,0,1017,56,1,0,0,0,1018,1019,3,765,382,0,1019,1020,3,761,
	380,0,1020,1021,3,797,398,0,1021,1022,3,765,382,0,1022,1023,3,761,380,0,
	1023,1024,3,767,383,0,1024,1025,3,769,384,0,1025,58,1,0,0,0,1026,1027,3,
	765,382,0,1027,1028,3,761,380,0,1028,1029,3,797,398,0,1029,1030,3,769,384,
	0,1030,60,1,0,0,0,1031,1032,3,765,382,0,1032,1033,3,761,380,0,1033,1034,
	3,797,398,0,1034,1035,3,769,384,0,1035,1036,3,797,398,0,1036,1037,3,791,
	395,0,1037,1038,3,769,384,0,1038,1039,3,765,382,0,1039,1040,3,777,388,0,
	1040,1041,3,771,385,0,1041,1042,3,777,388,0,1042,1043,3,765,382,0,1043,
	62,1,0,0,0,1044,1045,3,765,382,0,1045,1046,3,761,380,0,1046,1047,3,797,
	398,0,1047,1048,3,799,399,0,1048,64,1,0,0,0,1049,1050,3,765,382,0,1050,
	1051,3,775,387,0,1051,1052,3,761,380,0,1052,1053,3,795,397,0,1053,66,1,
	0,0,0,1054,1055,3,765,382,0,1055,1056,3,775,387,0,1056,1057,3,761,380,0,
	1057,1058,3,795,397,0,1058,1059,3,761,380,0,1059,1060,3,765,382,0,1060,
	1061,3,799,399,0,1061,1062,3,769,384,0,1062,1063,3,795,397,0,1063,68,1,
	0,0,0,1064,1065,3,765,382,0,1065,1066,3,775,387,0,1066,1067,3,761,380,0,
	1067,1068,3,795,397,0,1068,1069,3,797,398,0,1069,1070,3,769,384,0,1070,
	1071,3,799,399,0,1071,70,1,0,0,0,1072,1073,3,765,382,0,1073,1074,3,783,
	391,0,1074,1075,3,777,388,0,1075,1076,3,769,384,0,1076,1077,3,787,393,0,
	1077,1078,3,799,399,0,1078,72,1,0,0,0,1079,1080,3,765,382,0,1080,1081,3,
	783,391,0,1081,1082,3,789,394,0,1082,1083,3,797,398,0,1083,1084,3,769,384,
	0,1084,74,1,0,0,0,1085,1086,3,765,382,0,1086,1087,3,783,391,0,1087,1088,
	3,801,400,0,1088,1089,3,797,398,0,1089,1090,3,799,399,0,1090,1091,3,769,
	384,0,1091,1092,3,795,397,0,1092,1093,3,769,384,0,1093,1094,3,767,383,0,
	1094,76,1,0,0,0,1095,1096,3,765,382,0,1096,1097,3,785,392,0,1097,1098,3,
	791,395,0,1098,78,1,0,0,0,1099,1100,3,765,382,0,1100,1101,3,789,394,0,1101,
	1102,3,783,391,0,1102,1103,3,783,391,0,1103,1104,3,769,384,0,1104,1105,
	3,765,382,0,1105,1106,3,799,399,0,1106,80,1,0,0,0,1107,1108,3,765,382,0,
	1108,1109,3,789,394,0,1109,1110,3,783,391,0,1110,1111,3,783,391,0,1111,
	1112,3,769,384,0,1112,1113,3,765,382,0,1113,1114,3,799,399,0,1114,1115,
	3,777,388,0,1115,1116,3,789,394,0,1116,1117,3,787,393,0,1117,82,1,0,0,0,
	1118,1119,3,765,382,0,1119,1120,3,789,394,0,1120,1121,3,783,391,0,1121,
	1122,3,801,400,0,1122,1123,3,785,392,0,1123,1124,3,787,393,0,1124,84,1,
	0,0,0,1125,1126,3,765,382,0,1126,1127,3,789,394,0,1127,1128,3,785,392,0,
	1128,1129,3,785,392,0,1129,1130,3,769,384,0,1130,1131,3,787,393,0,1131,
	1132,3,799,399,0,1132,86,1,0,0,0,1133,1134,3,765,382,0,1134,1135,3,789,
	394,0,1135,1136,3,787,393,0,1136,1137,3,797,398,0,1137,1138,3,799,399,0,
	1138,1139,3,761,380,0,1139,1140,3,787,393,0,1140,1141,3,799,399,0,1141,
	88,1,0,0,0,1142,1143,3,765,382,0,1143,1144,3,789,394,0,1144,1145,3,785,
	392,0,1145,1146,3,785,392,0,1146,1147,3,777,388,0,1147,1148,3,799,399,0,
	1148,90,1,0,0,0,1149,1150,3,765,382,0,1150,1151,3,789,394,0,1151,1152,3,
	785,392,0,1152,1153,3,791,395,0,1153,1154,3,795,397,0,1154,1155,3,769,384,
	0,1155,1156,3,797,398,0,1156,1157,3,797,398,0,1157,92,1,0,0,0,1158,1159,
	3,765,382,0,1159,1160,3,789,394,0,1160,1161,3,787,393,0,1161,1162,3,765,
	382,0,1162,1163,3,761,380,0,1163,1164,3,799,399,0,1164,94,1,0,0,0,1165,
	1166,3,765,382,0,1166,1167,3,789,394,0,1167,1168,3,787,393,0,1168,1169,
	3,767,383,0,1169,1170,3,777,388,0,1170,1171,3,799,399,0,1171,1172,3,777,
	388,0,1172,1173,3,789,394,0,1173,1174,3,787,393,0,1174,96,1,0,0,0,1175,
	1176,3,765,382,0,1176,1177,3,789,394,0,1177,1178,3,787,393,0,1178,1179,
	3,797,398,0,1179,1180,3,799,399,0,1180,1181,3,795,397,0,1181,1182,3,761,
	380,0,1182,1183,3,777,388,0,1183,1184,3,787,393,0,1184,1185,3,799,399,0,
	1185,98,1,0,0,0,1186,1187,3,765,382,0,1187,1188,3,789,394,0,1188,1189,3,
	787,393,0,1189,1190,3,799,399,0,1190,1191,3,777,388,0,1191,1192,3,787,393,
	0,1192,1193,3,801,400,0,1193,1194,3,769,384,0,1194,100,1,0,0,0,1195,1196,
	3,765,382,0,1196,1197,3,789,394,0,1197,1198,3,791,395,0,1198,1199,3,809,
	404,0,1199,102,1,0,0,0,1200,1201,3,765,382,0,1201,1202,3,789,394,0,1202,
	1203,3,801,400,0,1203,1204,3,787,393,0,1204,1205,3,799,399,0,1205,104,1,
	0,0,0,1206,1207,3,765,382,0,1207,1208,3,789,394,0,1208,1209,3,801,400,0,
	1209,1210,3,787,393,0,1210,1211,3,799,399,0,1211,1212,5,95,0,0,1212,1213,
	3,763,381,0,1213,1214,3,777,388,0,1214,1215,3,773,386,0,1215,106,1,0,0,
	0,1216,1217,3,765,382,0,1217,1218,3,795,397,0,1218,1219,3,769,384,0,1219,
	1220,3,761,380,0,1220,1221,3,799,399,0,1221,1222,3,769,384,0,1222,108,1,
	0,0,0,1223,1224,3,765,382,0,1224,1225,3,795,397,0,1225,1226,3,769,384,0,
	1226,1227,3,761,380,0,1227,1228,3,799,399,0,1228,1229,3,777,388,0,1229,
	1230,3,789,394,0,1230,1231,3,787,393,0,1231,110,1,0,0,0,1232,1233,3,765,
	382,0,1233,1234,3,795,397,0,1234,1235,3,769,384,0,1235,1236,3,761,380,0,
	1236,1237,3,799,399,0,1237,1238,3,789,394,0,1238,1239,3,795,397,0,1239,
	112,1,0,0,0,1240,1241,3,765,382,0,1241,1242,3,797,398,0,1242,114,1,0,0,
	0,1243,1244,3,765,382,0,1244,1245,3,801,400,0,1245,1246,3,795,397,0,1246,
	1247,3,795,397,0,1247,1248,3,769,384,0,1248,1249,3,787,393,0,1249,1250,
	3,799,399,0,1250,116,1,0,0,0,1251,1252,3,765,382,0,1252,1253,3,801,400,
	0,1253,1254,3,795,397,0,1254,1255,3,795,397,0,1255,1256,3,769,384,0,1256,
	1257,3,787,393,0,1257,1258,3,799,399,0,1258,1259,5,95,0,0,1259,1260,3,797,
	398,0,1260,1261,3,765,382,0,1261,1262,3,775,387,0,1262,1263,3,769,384,0,
	1263,1264,3,785,392,0,1264,1265,3,761,380,0,1265,118,1,0,0,0,1266,1267,
	3,765,382,0,1267,1268,3,801,400,0,1268,1269,3,795,397,0,1269,1270,3,797,
	398,0,1270,1271,3,789,394,0,1271,1272,3,795,397,0,1272,120,1,0,0,0,1273,
	1274,3,767,383,0,1274,1275,3,761,380,0,1275,1276,3,799,399,0,1276,1277,
	3,761,380,0,1277,1278,3,763,381,0,1278,1279,3,761,380,0,1279,1280,3,797,
	398,0,1280,1281,3,769,384,0,1281,122,1,0,0,0,1282,1283,3,767,383,0,1283,
	1284,3,761,380,0,1284,1285,3,799,399,0,1285,1286,3,761,380,0,1286,124,1,
	0,0,0,1287,1288,3,767,383,0,1288,1289,3,761,380,0,1289,1290,3,799,399,0,
	1290,1291,3,769,384,0,1291,126,1,0,0,0,1292,1293,3,767,383,0,1293,1294,
	3,761,380,0,1294,1295,3,799,399,0,1295,1296,3,769,384,0,1296,1297,3,799,
	399,0,1297,1298,3,777,388,0,1298,1299,3,785,392,0,1299,1300,3,769,384,0,
	1300,128,1,0,0,0,1301,1302,3,767,383,0,1302,1303,3,761,380,0,1303,1304,
	3,809,404,0,1304,130,1,0,0,0,1305,1306,3,767,383,0,1306,1307,3,761,380,
	0,1307,1308,3,809,404,0,1308,1309,3,797,398,0,1309,132,1,0,0,0,1310,1311,
	3,767,383,0,1311,1312,3,769,384,0,1312,1313,3,765,382,0,1313,134,1,0,0,
	0,1314,1315,3,767,383,0,1315,1316,3,769,384,0,1316,1317,3,765,382,0,1317,
	1318,3,777,388,0,1318,1319,3,785,392,0,1319,1320,3,761,380,0,1320,1321,
	3,783,391,0,1321,136,1,0,0,0,1322,1323,3,767,383,0,1323,1324,3,769,384,
	0,1324,1325,3,765,382,0,1325,1326,3,783,391,0,1326,1327,3,761,380,0,1327,
	1328,3,795,397,0,1328,1329,3,769,384,0,1329,138,1,0,0,0,1330,1331,3,767,
	383,0,1331,1332,3,769,384,0,1332,1333,3,771,385,0,1333,1334,3,761,380,0,
	1334,1335,3,801,400,0,1335,1336,3,783,391,0,1336,1337,3,799,399,0,1337,
	140,1,0,0,0,1338,1339,3,767,383,0,1339,1340,3,769,384,0,1340,1341,3,771,
	385,0,1341,1342,3,769,384,0,1342,1343,3,795,397,0,1343,1344,3,795,397,0,
	1344,1345,3,769,384,0,1345,1346,3,767,383,0,1346,142,1,0,0,0,1347,1348,
	3,767,383,0,1348,1349,3,769,384,0,1349,1350,3,771,385,0,1350,1351,3,777,
	388,0,1351,1352,3,787,393,0,1352,1353,3,769,384,0,1353,1354,3,767,383,0,
	1354,144,1,0,0,0,1355,1356,3,767,383,0,1356,1357,3,769,384,0,1357,1358,
	3,771,385,0,1358,1359,3,777,388,0,1359,1360,3,787,393,0,1360,1361,3,769,
	384,0,1361,1362,3,795,397,0,1362,146,1,0,0,0,1363,1364,3,767,383,0,1364,
	1365,3,769,384,0,1365,1366,3,771,385,0,1366,1367,3,777,388,0,1367,1368,
	3,787,393,0,1368,1369,3,777,388,0,1369,1370,3,799,399,0,1370,1371,3,777,
	388,0,1371,1372,3,789,394,0,1372,1373,3,787,393,0,1373,148,1,0,0,0,1374,
	1375,3,767,383,0,1375,1376,3,769,384,0,1376,1377,3,783,391,0,1377,1378,
	3,769,384,0,1378,1379,3,799,399,0,1379,1380,3,769,384,0,1380,150,1,0,0,
	0,1381,1382,3,767,383,0,1382,1383,3,769,384,0,1383,1384,3,783,391,0,1384,
	1385,3,777,388,0,1385,1386,3,785,392,0,1386,1387,3,777,388,0,1387,1388,
	3,799,399,0,1388,1389,3,769,384,0,1389,1390,3,767,383,0,1390,152,1,0,0,
	0,1391,1392,3,767,383,0,1392,1393,3,769,384,0,1393,1394,3,783,391,0,1394,
	1395,3,777,388,0,1395,1396,3,785,392,0,1396,1397,3,777,388,0,1397,1398,
	3,799,399,0,1398,1399,3,769,384,0,1399,1400,3,795,397,0,1400,154,1,0,0,
	0,1401,1402,3,767,383,0,1402,1403,3,769,384,0,1403,1404,3,797,398,0,1404,
	1405,3,765,382,0,1405,156,1,0,0,0,1406,1407,3,767,383,0,1407,1408,3,769,
	384,0,1408,1409,3,797,398,0,1409,1410,3,765,382,0,1410,1411,3,795,397,0,
	1411,1412,3,777,388,0,1412,1413,3,763,381,0,1413,1414,3,769,384,0,1414,
	158,1,0,0,0,1415,1416,3,767,383,0,1416,1417,3,777,388,0,1417,1418,3,761,
	380,0,1418,1419,3,773,386,0,1419,1420,3,787,393,0,1420,1421,3,789,394,0,
	1421,1422,3,797,398,0,1422,1423,3,799,399,0,1423,1424,3,777,388,0,1424,
	1425,3,765,382,0,1425,1426,3,797,398,0,1426,160,1,0,0,0,1427,1428,3,767,
	383,0,1428,1429,3,777,388,0,1429,1430,3,795,397,0,1430,162,1,0,0,0,1431,
	1432,3,767,383,0,1432,1433,3,777,388,0,1433,1434,3,795,397,0,1434,1435,
	3,769,384,0,1435,1436,3,765,382,0,1436,1437,3,799,399,0,1437,1438,3,789,
	394,0,1438,1439,3,795,397,0,1439,1440,3,809,404,0,1440,164,1,0,0,0,1441,
	1442,3,767,383,0,1442,1443,3,777,388,0,1443,1444,3,797,398,0,1444,1445,
	3,799,399,0,1445,1446,3,777,388,0,1446,1447,3,787,393,0,1447,1448,3,765,
	382,0,1448,1449,3,799,399,0,1449,166,1,0,0,0,1450,1451,3,767,383,0,1451,
	1452,3,777,388,0,1452,1453,3,797,398,0,1453,1454,3,799,399,0,1454,1455,
	3,795,397,0,1455,1456,3,777,388,0,1456,1457,3,763,381,0,1457,1458,3,801,
	400,0,1458,1459,3,799,399,0,1459,1460,3,769,384,0,1460,168,1,0,0,0,1461,
	1462,3,767,383,0,1462,1463,3,789,394,0,1463,170,1,0,0,0,1464,1465,3,767,
	383,0,1465,1466,3,789,394,0,1466,1467,3,801,400,0,1467,1468,3,763,381,0,
	1468,1469,3,783,391,0,1469,1470,3,769,384,0,1470,172,1,0,0,0,1471,1472,
	3,767,383,0,1472,1473,3,795,397,0,1473,1474,3,789,394,0,1474,1475,3,791,
	395,0,1475,174,1,0,0,0,1476,1477,3,767,383,0,1477,1478,3,809,404,0,1478,
	1479,3,787,393,0,1479,1480,3,761,380,0,1480,1481,3,785,392,0,1481,1482,
	3,777,388,0,1482,1483,3,765,382,0,1483,176,1,0,0,0,1484,1485,3,769,384,
	0,1485,1486,3,783,391,0,1486,1487,3,797,398,0,1487,1488,3,769,384,0,1488,
	178,1,0,0,0,1489,1490,3,769,384,0,1490,1491,3,783,391,0,1491,1492,3,797,
	398,0,1492,1493,3,769,384,0,1493,1494,3,777,388,0,1494,1495,3,771,385,0,
	1495,180,1,0,0,0,1496,1497,3,769,384,0,1497,1498,3,783,391,0,1498,1499,
	3,797,398,0,1499,1500,3,777,388,0,1500,1501,3,771,385,0,1501,182,1,0,0,
	0,1502,1503,3,769,384,0,1503,1504,3,787,393,0,1504,1505,3,761,380,0,1505,
	1506,3,763,381,0,1506,1507,3,783,391,0,1507,1508,3,769,384,0,1508,184,1,
	0,0,0,1509,1510,3,769,384,0,1510,1511,3,787,393,0,1511,1512,3,767,383,0,
	1512,186,1,0,0,0,1513,1514,3,769,384,0,1514,1515,3,787,393,0,1515,1516,
	3,773,386,0,1516,1517,3,777,388,0,1517,1518,3,787,393,0,1518,1519,3,769,
	384,0,1519,188,1,0,0,0,1520,1521,3,769,384,0,1521,1522,3,797,398,0,1522,
	1523,3,765,382,0,1523,1524,3,761,380,0,1524,1525,3,791,395,0,1525,1526,
	3,769,384,0,1526,1527,3,767,383,0,1527,190,1,0,0,0,1528,1529,3,769,384,
	0,1529,1530,3,807,403,0,1530,1531,3,765,382,0,1531,1532,3,769,384,0,1532,
	1533,3,791,395,0,1533,1534,3,799,399,0,1534,192,1,0,0,0,1535,1536,3,769,
	384,0,1536,1537,3,807,403,0,1537,1538,3,769,384,0,1538,1539,3,765,382,0,
	1539,194,1,0,0,0,1540,1541,3,769,384,0,1541,1542,3,807,403,0,1542,1543,
	3,769,384,0,1543,1544,3,765,382,0,1544,1545,3,801,400,0,1545,1546,3,799,
	399,0,1546,1547,3,769,384,0,1547,196,1,0,0,0,1548,1549,3,769,384,0,1549,
	1550,3,807,403,0,1550,1551,3,765,382,0,1551,1552,3,769,384,0,1552,1553,
	3,791,395,0,1553,1554,3,799,399,0,1554,1555,3,777,388,0,1555,1556,3,789,
	394,0,1556,1557,3,787,393,0,1557,198,1,0,0,0,1558,1559,3,769,384,0,1559,
	1560,3,807,403,0,1560,1561,3,765,382,0,1561,1562,3,783,391,0,1562,1563,
	3,801,400,0,1563,1564,3,797,398,0,1564,1565,3,777,388,0,1565,1566,3,803,
	401,0,1566,1567,3,769,384,0,1567,200,1,0,0,0,1568,1569,3,769,384,0,1569,
	1570,3,807,403,0,1570,1571,3,777,388,0,1571,1572,3,797,398,0,1572,1573,
	3,799,399,0,1573,1574,3,797,398,0,1574,202,1,0,0,0,1575,1576,3,769,384,
	0,1576,1577,3,807,403,0,1577,1578,3,777,388,0,1578,1579,3,799,399,0,1579,
	204,1,0,0,0,1580,1581,3,771,385,0,1581,1582,3,761,380,0,1582,1583,3,783,
	391,0,1583,1584,3,783,391,0,1584,1585,3,763,381,0,1585,1586,3,761,380,0,
	1586,1587,3,765,382,0,1587,1588,3,781,390,0,1588,206,1,0,0,0,1589,1590,
	3,771,385,0,1590,1591,3,761,380,0,1591,1592,3,783,391,0,1592,1593,3,797,
	398,0,1593,1594,3,769,384,0,1594,208,1,0,0,0,1595,1596,3,771,385,0,1596,
	1597,3,769,384,0,1597,1598,3,799,399,0,1598,1599,3,765,382,0,1599,1600,
	3,775,387,0,1600,210,1,0,0,0,1601,1602,3,771,385,0,1602,1603,3,777,388,
	0,1603,1604,3,769,384,0,1604,1605,3,783,391,0,1605,1606,3,767,383,0,1606,
	1607,3,797,398,0,1607,212,1,0,0,0,1608,1609,3,771,385,0,1609,1610,3,777,
	388,0,1610,1611,3,783,391,0,1611,1612,3,769,384,0,1612,214,1,0,0,0,1613,
	1614,3,771,385,0,1614,1615,3,777,388,0,1615,1616,3,783,391,0,1616,1617,
	3,769,384,0,1617,1618,3,797,398,0,1618,216,1,0,0,0,1619,1620,3,771,385,
	0,1620,1621,3,783,391,0,1621,1622,3,789,394,0,1622,1623,3,761,380,0,1623,
	1624,3,799,399,0,1624,218,1,0,0,0,1625,1626,3,771,385,0,1626,1627,3,789,
	394,0,1627,1628,3,795,397,0,1628,220,1,0,0,0,1629,1630,3,771,385,0,1630,
	1631,3,789,394,0,1631,1632,3,795,397,0,1632,1633,3,769,384,0,1633,1634,
	3,777,388,0,1634,1635,3,773,386,0,1635,1636,3,787,393,0,1636,222,1,0,0,
	0,1637,1638,3,771,385,0,1638,1639,3,789,394,0,1639,1640,3,795,397,0,1640,
	1641,3,785,392,0,1641,1642,3,761,380,0,1642,1643,3,799,399,0,1643,224,1,
	0,0,0,1644,1645,3,771,385,0,1645,1646,3,789,394,0,1646,1647,3,801,400,0,
	1647,1648,3,787,393,0,1648,1649,3,767,383,0,1649,226,1,0,0,0,1650,1651,
	3,771,385,0,1651,1652,3,795,397,0,1652,1653,3,789,394,0,1653,1654,3,785,
	392,0,1654,228,1,0,0,0,1655,1656,3,771,385,0,1656,1657,3,801,400,0,1657,
	1658,3,783,391,0,1658,1659,3,783,391,0,1659,230,1,0,0,0,1660,1661,3,771,
	385,0,1661,1662,3,801,400,0,1662,1663,3,787,393,0,1663,1664,3,765,382,0,
	1664,1665,3,799,399,0,1665,1666,3,777,388,0,1666,1667,3,789,394,0,1667,
	1668,3,787,393,0,1668,232,1,0,0,0,1669,1670,3,773,386,0,1670,1671,3,769,
	384,0,1671,1672,3,799,399,0,1672,234,1,0,0,0,1673,1674,3,773,386,0,1674,
	1675,3,783,391,0,1675,1676,3,789,394,0,1676,1677,3,763,381,0,1677,1678,
	3,761,380,0,1678,1679,3,783,391,0,1679,236,1,0,0,0,1680,1681,3,773,386,
	0,1681,1682,3,789,394,0,1682,238,1,0,0,0,1683,1684,3,773,386,0,1684,1685,
	3,795,397,0,1685,1686,3,761,380,0,1686,1687,3,787,393,0,1687,1688,3,799,
	399,0,1688,240,1,0,0,0,1689,1690,3,773,386,0,1690,1691,3,795,397,0,1691,
	1692,3,789,394,0,1692,1693,3,801,400,0,1693,1694,3,791,395,0,1694,242,1,
	0,0,0,1695,1696,3,775,387,0,1696,1697,3,761,380,0,1697,1698,3,787,393,0,
	1698,1699,3,767,383,0,1699,1700,3,783,391,0,1700,1701,3,769,384,0,1701,
	1702,3,795,397,0,1702,244,1,0,0,0,1703,1704,3,775,387,0,1704,1705,3,761,
	380,0,1705,1706,3,797,398,0,1706,1707,3,775,387,0,1707,246,1,0,0,0,1708,
	1709,3,775,387,0,1709,1710,3,761,380,0,1710,1711,3,803,401,0,1711,1712,
	3,777,388,0,1712,1713,3,787,393,0,1713,1714,3,773,386,0,1714,248,1,0,0,
	0,1715,1716,3,775,387,0,1716,1717,3,767,383,0,1717,1718,3,771,385,0,1718,
	1719,3,797,398,0,1719,250,1,0,0,0,1720,1721,3,775,387,0,1721,1722,3,777,
	388,0,1722,1723,3,803,401,0,1723,1724,3,769,384,0,1724,252,1,0,0,0,1725,
	1726,3,775,387,0,1726,1727,3,789,394,0,1727,1728,3,797,398,0,1728,1729,
	3,799,399,0,1729,254,1,0,0,0,1730,1731,3,777,388,0,1731,1732,3,767,383,
	0,1732,1733,3,769,384,0,1733,1734,3,787,393,0,1734,1735,3,799,399,0,1735,
	1736,3,777,388,0,1736,1737,3,799,399,0,1737,1738,3,809,404,0,1738,256,1,
	0,0,0,1739,1740,3,777,388,0,1740,1741,3,771,385,0,1741,258,1,0,0,0,1742,
	1743,3,777,388,0,1743,1744,3,773,386,0,1744,1745,3,787,393,0,1745,1746,
	3,789,394,0,1746,1747,3,795,397,0,1747,1748,3,769,384,0,1748,260,1,0,0,
	0,1749,1750,3,777,388,0,1750,1751,3,785,392,0,1751,1752,3,785,392,0,1752,
	1753,3,769,384,0,1753,1754,3,767,383,0,1754,1755,3,777,388,0,1755,1756,
	3,761,380,0,1756,1757,3,799,399,0,1757,1758,3,769,384,0,1758,262,1,0,0,
	0,1759,1760,3,777,388,0,1760,1761,3,787,393,0,1761,264,1,0,0,0,1762,1763,
	3,777,388,0,1763,1764,3,787,393,0,1764,1765,3,765,382,0,1765,1766,3,783,
	391,0,1766,1767,3,801,400,0,1767,1768,3,767,383,0,1768,1769,3,769,384,0,
	1769,266,1,0,0,0,1770,1771,3,777,388,0,1771,1772,3,787,393,0,1772,1773,
	3,767,383,0,1773,1774,3,769,384,0,1774,1775,3,807,403,0,1775,268,1,0,0,
	0,1776,1777,3,777,388,0,1777,1778,3,787,393,0,1778,1779,3,777,388,0,1779,
	1780,3,799,399,0,1780,1781,3,795,397,0,1781,1782,3,761,380,0,1782,1783,
	3,787,393,0,1783,1784,3,797,398,0,1784,270,1,0,0,0,1785,1786,3,777,388,
	0,1786,1787,3,787,393,0,1787,1788,3,787,393,0,1788,1789,3,769,384,0,1789,
	1790,3,795,397,0,1790,272,1,0,0,0,1791,1792,3,777,388,0,1792,1793,3,787,
	393,0,1793,1794,3,789,394,0,1794,1795,3,801,400,0,1795,1796,3,799,399,0,
	1796,274,1,0,0,0,1797,1798,3,777,388,0,1798,1799,3,787,393,0,1799,1800,
	3,797,398,0,1800,1801,3,769,384,0,1801,1802,3,795,397,0,1802,1803,3,799,
	399,0,1803,276,1,0,0,0,1804,1805,3,777,388,0,1805,1806,3,787,393,0,1806,
	1807,3,799,399,0,1807,278,1,0,0,0,1808,1809,3,777,388,0,1809,1810,3,787,
	393,0,1810,1811,3,799,399,0,1811,1812,5,50,0,0,1812,280,1,0,0,0,1813,1814,
	3,777,388,0,1814,1815,3,787,393,0,1815,1816,3,799,399,0,1816,1817,5,52,
	0,0,1817,282,1,0,0,0,1818,1819,3,777,388,0,1819,1820,3,787,393,0,1820,1821,
	3,799,399,0,1821,1822,5,56,0,0,1822,284,1,0,0,0,1823,1824,3,777,388,0,1824,
	1825,3,787,393,0,1825,1826,3,799,399,0,1826,1827,3,769,384,0,1827,1828,
	3,773,386,0,1828,1829,3,769,384,0,1829,1830,3,795,397,0,1830,286,1,0,0,
	0,1831,1832,3,777,388,0,1832,1833,3,787,393,0,1833,1834,3,799,399,0,1834,
	1835,3,769,384,0,1835,1836,3,795,397,0,1836,1837,3,797,398,0,1837,1838,
	3,769,384,0,1838,1839,3,765,382,0,1839,1840,3,799,399,0,1840,288,1,0,0,
	0,1841,1842,3,777,388,0,1842,1843,3,787,393,0,1843,1844,3,799,399,0,1844,
	1845,3,769,384,0,1845,1846,3,795,397,0,1846,1847,3,803,401,0,1847,1848,
	3,761,380,0,1848,1849,3,783,391,0,1849,290,1,0,0,0,1850,1851,3,777,388,
	0,1851,1852,3,787,393,0,1852,1853,3,799,399,0,1853,1854,3,789,394,0,1854,
	292,1,0,0,0,1855,1856,3,777,388,0,1856,1857,3,787,393,0,1857,1858,3,803,
	401,0,1858,1859,3,789,394,0,1859,1860,3,781,390,0,1860,1861,3,769,384,0,
	1861,1862,3,795,397,0,1862,294,1,0,0,0,1863,1864,3,777,388,0,1864,1865,
	3,797,398,0,1865,296,1,0,0,0,1866,1867,3,777,388,0,1867,1868,3,797,398,
	0,1868,1869,3,789,394,0,1869,1870,3,791,395,0,1870,1871,3,769,384,0,1871,
	1872,3,787,393,0,1872,298,1,0,0,0,1873,1874,3,777,388,0,1874,1875,3,799,
	399,0,1875,1876,3,769,384,0,1876,1877,3,785,392,0,1877,1878,3,797,398,0,
	1878,300,1,0,0,0,1879,1880,3,779,389,0,1880,1881,3,789,394,0,1881,1882,
	3,777,388,0,1882,1883,3,787,393,0,1883,302,1,0,0,0,1884,1885,3,781,390,
	0,1885,1886,3,769,384,0,1886,1887,3,769,384,0,1887,1888,3,791,395,0,1888,
	304,1,0,0,0,1889,1890,3,781,390,0,1890,1891,3,769,384,0,1891,1892,3,809,
	404,0,1892,306,1,0,0,0,1893,1894,3,781,390,0,1894,1895,3,769,384,0,1895,
	1896,3,809,404,0,1896,1897,3,797,398,0,1897,308,1,0,0,0,1898,1899,3,783,
	391,0,1899,1900,3,761,380,0,1900,1901,3,787,393,0,1901,1902,3,773,386,0,
	1902,1903,3,801,400,0,1903,1904,3,761,380,0,1904,1905,3,773,386,0,1905,
	1906,3,769,384,0,1906,310,1,0,0,0,1907,1908,3,783,391,0,1908,1909,3,769,
	384,0,1909,1910,3,761,380,0,1910,1911,3,803,401,0,1911,1912,3,769,384,0,
	1912,312,1,0,0,0,1913,1914,3,783,391,0,1914,1915,3,769,384,0,1915,1916,
	3,771,385,0,1916,1917,3,799,399,0,1917,314,1,0,0,0,1918,1919,3,783,391,
	0,1919,1920,3,777,388,0,1920,1921,3,781,390,0,1921,1922,3,769,384,0,1922,
	316,1,0,0,0,1923,1924,3,783,391,0,1924,1925,3,777,388,0,1925,1926,3,785,
	392,0,1926,1927,3,777,388,0,1927,1928,3,799,399,0,1928,318,1,0,0,0,1929,
	1930,3,783,391,0,1930,1931,3,777,388,0,1931,1932,3,787,393,0,1932,1933,
	3,769,384,0,1933,1934,3,797,398,0,1934,320,1,0,0,0,1935,1936,3,783,391,
	0,1936,1937,3,789,394,0,1937,1938,3,765,382,0,1938,1939,3,761,380,0,1939,
	1940,3,783,391,0,1940,322,1,0,0,0,1941,1942,3,783,391,0,1942,1943,3,789,
	394,0,1943,1944,3,765,382,0,1944,1945,3,761,380,0,1945,1946,3,799,399,0,
	1946,1947,3,777,388,0,1947,1948,3,789,394,0,1948,1949,3,787,393,0,1949,
	324,1,0,0,0,1950,1951,3,783,391,0,1951,1952,3,789,394,0,1952,1953,3,765,
	382,0,1953,1954,3,761,380,0,1954,1955,3,799,399,0,1955,1956,3,789,394,0,
	1956,1957,3,795,397,0,1957,326,1,0,0,0,1958,1959,3,783,391,0,1959,1960,
	3,789,394,0,1960,1961,3,765,382,0,1961,1962,3,761,380,0,1962,1963,3,799,
	399,0,1963,1964,3,789,394,0,1964,1965,3,795,397,0,1965,1966,3,797,398,0,
	1966,328,1,0,0,0,1967,1968,3,783,391,0,1968,1969,3,789,394,0,1969,1970,
	3,765,382,0,1970,1971,3,781,390,0,1971,1972,3,797,398,0,1972,330,1,0,0,
	0,1973,1974,3,783,391,0,1974,1975,3,789,394,0,1975,1976,3,773,386,0,1976,
	332,1,0,0,0,1977,1978,3,783,391,0,1978,1979,3,789,394,0,1979,1980,3,773,
	386,0,1980,1981,3,773,386,0,1981,1982,3,769,384,0,1982,1983,3,767,383,0,
	1983,334,1,0,0,0,1984,1985,3,783,391,0,1985,1986,3,789,394,0,1986,1987,
	3,773,386,0,1987,1988,3,773,386,0,1988,1989,3,777,388,0,1989,1990,3,787,
	393,0,1990,1991,3,773,386,0,1991,336,1,0,0,0,1992,1993,3,783,391,0,1993,
	1994,3,789,394,0,1994,1995,3,789,394,0,1995,1996,3,791,395,0,1996,338,1,
	0,0,0,1997,1998,3,785,392,0,1998,1999,3,761,380,0,1999,2000,3,791,395,0,
	2000,340,1,0,0,0,2001,2002,3,785,392,0,2002,2003,3,761,380,0,2003,2004,
	3,799,399,0,2004,2005,3,765,382,0,2005,2006,3,775,387,0,2006,2007,3,769,
	384,0,2007,2008,3,767,383,0,2008,342,1,0,0,0,2009,2010,3,785,392,0,2010,
	2011,3,761,380,0,2011,2012,3,807,403,0,2012,344,1,0,0,0,2013,2014,3,785,
	392,0,2014,2015,3,761,380,0,2015,2016,3,807,403,0,2016,2017,3,799,399,0,
	2017,2018,3,795,397,0,2018,2019,3,761,380,0,2019,2020,3,787,393,0,2020,
	2021,3,797,398,0,2021,346,1,0,0,0,2022,2023,3,785,392,0,2023,2024,3,769,
	384,0,2024,2025,3,795,397,0,2025,2026,3,773,386,0,2026,2027,3,769,384,0,
	2027,348,1,0,0,0,2028,2029,3,785,392,0,2029,2030,3,769,384,0,2030,2031,
	3,797,398,0,2031,2032,3,797,398,0,2032,2033,3,761,380,0,2033,2034,3,773,
	386,0,2034,2035,3,769,384,0,2035,2036,5,95,0,0,2036,2037,3,799,399,0,2037,
	2038,3,769,384,0,2038,2039,3,807,403,0,2039,2040,3,799,399,0,2040,350,1,
	0,0,0,2041,2042,3,785,392,0,2042,2043,3,777,388,0,2043,2044,3,765,382,0,
	2044,2045,3,795,397,0,2045,2046,3,789,394,0,2046,2047,3,797,398,0,2047,
	2048,3,769,384,0,2048,2049,3,765,382,0,2049,2050,3,789,394,0,2050,2051,
	3,787,393,0,2051,2052,3,767,383,0,2052,352,1,0,0,0,2053,2054,3,785,392,
	0,2054,2055,3,777,388,0,2055,2056,3,765,382,0,2056,2057,3,795,397,0,2057,
	2058,3,789,394,0,2058,2059,3,797,398,0,2059,2060,3,769,384,0,2060,2061,
	3,765,382,0,2061,2062,3,789,394,0,2062,2063,3,787,393,0,2063,2064,3,767,
	383,0,2064,2065,3,797,398,0,2065,354,1,0,0,0,2066,2067,3,785,392,0,2067,
	2068,3,777,388,0,2068,2069,3,787,393,0,2069,356,1,0,0,0,2070,2071,3,785,
	392,0,2071,2072,3,801,400,0,2072,2073,3,783,391,0,2073,2074,3,799,399,0,
	2074,2075,3,777,388,0,2075,2076,3,797,398,0,2076,2077,3,769,384,0,2077,
	2078,3,799,399,0,2078,358,1,0,0,0,2079,2080,3,787,393,0,2080,2081,3,765,
	382,0,2081,2082,3,775,387,0,2082,2083,3,761,380,0,2083,2084,3,795,397,0,
	2084,360,1,0,0,0,2085,2086,3,787,393,0,2086,2087,3,769,384,0,2087,2088,
	3,805,402,0,2088,362,1,0,0,0,2089,2090,3,787,393,0,2090,2091,3,803,401,
	0,2091,2092,3,761,380,0,2092,2093,3,795,397,0,2093,2094,3,765,382,0,2094,
	2095,3,775,387,0,2095,2096,3,761,380,0,2096,2097,3,795,397,0,2097,364,1,
	0,0,0,2098,2099,3,787,393,0,2099,2100,3,789,394,0,2100,366,1,0,0,0,2101,
	2102,3,787,393,0,2102,2103,3,789,394,0,2103,2104,3,765,382,0,2104,2105,
	3,789,394,0,2105,2106,3,801,400,0,2106,2107,3,787,393,0,2107,2108,3,799,
	399,0,2108,368,1,0,0,0,2109,2110,3,787,393,0,2110,2111,3,789,394,0,2111,
	2112,3,765,382,0,2112,2113,3,789,394,0,2113,2114,3,785,392,0,2114,2115,
	3,791,395,0,2115,2116,3,795,397,0,2116,2117,3,769,384,0,2117,2118,3,797,
	398,0,2118,2119,3,797,398,0,2119,370,1,0,0,0,2120,2121,3,787,393,0,2121,
	2122,3,789,394,0,2122,2123,3,783,391,0,2123,2124,3,789,394,0,2124,2125,
	3,773,386,0,2125,2126,3,773,386,0,2126,2127,3,777,388,0,2127,2128,3,787,
	393,0,2128,2129,3,773,386,0,2129,372,1,0,0,0,2130,2131,3,787,393,0,2131,
	2132,3,789,394,0,2132,2133,3,787,393,0,2133,2134,3,769,384,0,2134,374,1,
	0,0,0,2135,2136,3,787,393,0,2136,2137,3,789,394,0,2137,2138,3,799,399,0,
	2138,376,1,0,0,0,2139,2140,3,787,393,0,2140,2141,3,789,394,0,2141,2142,
	3,799,399,0,2142,2143,3,771,385,0,2143,2144,3,789,394,0,2144,2145,3,801,
	400,0,2145,2146,3,787,393,0,2146,2147,3,767,383,0,2147,378,1,0,0,0,2148,
	2149,3,787,393,0,2149,2150,3,801,400,0,2150,2151,3,783,391,0,2151,2152,
	3,783,391,0,2152,380,1,0,0,0,2153,2154,3,787,393,0,2154,2155,3,801,400,
	0,2155,2156,3,785,392,0,2156,2157,3,769,384,0,2157,2158,3,795,397,0,2158,
	2159,3,777,388,0,2159,2160,3,765,382,0,2160,382,1,0,0,0,2161,2162,3,787,
	393,0,2162,2163,3,801,400,0,2163,2164,3,785,392,0,2164,2165,3,763,381,0,
	2165,2166,3,769,384,0,2166,2167,3,795,397,0,2167,384,1,0,0,0,2168,2169,
	3,789,394,0,2169,2170,3,763,381,0,2170,2171,3,779,389,0,2171,2172,3,769,
	384,0,2172,2173,3,765,382,0,2173,2174,3,799,399,0,2174,386,1,0,0,0,2175,
	2176,3,789,394,0,2176,2177,3,771,385,0,2177,2178,3,771,385,0,2178,388,1,
	0,0,0,2179,2180,3,789,394,0,2180,2181,3,787,393,0,2181,390,1,0,0,0,2182,
	2183,3,789,394,0,2183,2184,3,787,393,0,2184,2185,3,783,391,0,2185,2186,
	3,809,404,0,2186,392,1,0,0,0,2187,2188,3,789,394,0,2188,2189,3,791,395,
	0,2189,2190,3,769,384,0,2190,2191,3,787,393,0,2191,394,1,0,0,0,2192,2193,
	3,789,394,0,2193,2194,3,795,397,0,2194,396,1,0,0,0,2195,2196,3,789,394,
	0,2196,2197,3,795,397,0,2197,2198,3,767,383,0,2198,2199,3,769,384,0,2199,
	2200,3,795,397,0,2200,398,1,0,0,0,2201,2202,3,789,394,0,2202,2203,3,801,
	400,0,2203,2204,3,799,399,0,2204,400,1,0,0,0,2205,2206,3,789,394,0,2206,
	2207,3,801,400,0,2207,2208,3,799,399,0,2208,2209,3,769,384,0,2209,2210,
	3,795,397,0,2210,402,1,0,0,0,2211,2212,3,789,394,0,2212,2213,3,803,401,
	0,2213,2214,3,769,384,0,2214,2215,3,795,397,0,2215,404,1,0,0,0,2216,2217,
	3,789,394,0,2217,2218,3,803,401,0,2218,2219,3,769,384,0,2219,2220,3,795,
	397,0,2220,2221,3,805,402,0,2221,2222,3,795,397,0,2222,2223,3,777,388,0,
	2223,2224,3,799,399,0,2224,2225,3,769,384,0,2225,406,1,0,0,0,2226,2227,
	3,789,394,0,2227,2228,3,805,402,0,2228,2229,3,787,393,0,2229,2230,3,769,
	384,0,2230,2231,3,795,397,0,2231,408,1,0,0,0,2232,2233,3,791,395,0,2233,
	2234,3,761,380,0,2234,2235,3,765,382,0,2235,2236,3,781,390,0,2236,2237,
	3,761,380,0,2237,2238,3,773,386,0,2238,2239,3,769,384,0,2239,410,1,0,0,
	0,2240,2241,3,791,395,0,2241,2242,3,761,380,0,2242,2243,3,795,397,0,2243,
	2244,3,799,399,0,2244,2245,3,777,388,0,2245,2246,3,799,399,0,2246,2247,
	3,777,388,0,2247,2248,3,789,394,0,2248,2249,3,787,393,0,2249,412,1,0,0,
	0,2250,2251,3,791,395,0,2251,2252,3,765,382,0,2252,2253,3,799,399,0,2253,
	2254,3,771,385,0,2254,2255,3,795,397,0,2255,2256,3,769,384,0,2256,2257,
	3,769,384,0,2257,414,1,0,0,0,2258,2259,3,791,395,0,2259,2260,3,765,382,
	0,2260,2261,3,799,399,0,2261,2262,3,801,400,0,2262,2263,3,797,398,0,2263,
	2264,3,769,384,0,2264,2265,3,767,383,0,2265,416,1,0,0,0,2266,2267,3,791,
	395,0,2267,2268,3,783,391,0,2268,2269,3,797,398,0,2269,2270,5,95,0,0,2270,
	2271,3,777,388,0,2271,2272,3,787,393,0,2272,2273,3,799,399,0,2273,2274,
	3,769,384,0,2274,2275,3,773,386,0,2275,2276,3,769,384,0,2276,2277,3,795,
	397,0,2277,418,1,0,0,0,2278,2279,3,791,395,0,2279,2280,3,795,397,0,2280,
	2281,3,769,384,0,2281,2282,3,765,382,0,2282,2283,3,777,388,0,2283,2284,
	3,797,398,0,2284,2285,3,777,388,0,2285,2286,3,789,394,0,2286,2287,3,787,
	393,0,2287,420,1,0,0,0,2288,2289,3,791,395,0,2289,2290,3,795,397,0,2290,
	2291,3,769,384,0,2291,2292,3,797,398,0,2292,2293,3,769,384,0,2293,2294,
	3,795,397,0,2294,2295,3,803,401,0,2295,2296,3,769,384,0,2296,422,1,0,0,
	0,2297,2298,3,791,395,0,2298,2299,3,795,397,0,2299,2300,3,777,388,0,2300,
	2301,3,785,392,0,2301,2302,3,761,380,0,2302,2303,3,795,397,0,2303,2304,
	3,809,404,0,2304,424,1,0,0,0,2305,2306,3,791,395,0,2306,2307,3,795,397,
	0,2307,2308,3,777,388,0,2308,2309,3,787,393,0,2309,2310,3,799,399,0,2310,
	426,1,0,0,0,2311,2312,3,791,395,0,2312,2313,3,795,397,0,2313,2314,3,789,
	394,0,2314,2315,3,765,382,0,2315,428,1,0,0,0,2316,2317,3,791,395,0,2317,
	2318,3,795,397,0,2318,2319,3,789,394,0,2319,2320,3,765,382,0,2320,2321,
	3,769,384,0,2321,2322,3,767,383,0,2322,2323,3,801,400,0,2323,2324,3,795,
	397,0,2324,2325,3,769,384,0,2325,430,1,0,0,0,2326,2327,3,793,396,0,2327,
	2328,3,801,400,0,2328,2329,3,761,380,0,2329,2330,3,783,391,0,2330,2331,
	3,777,388,0,2331,2332,3,771,385,0,2332,2333,3,809,404,0,2333,432,1,0,0,
	0,2334,2335,3,793,396,0,2335,2336,3,801,400,0,2336,2337,3,769,384,0,2337,
	2338,3,795,397,0,2338,2339,3,809,404,0,2339,2340,5,95,0,0,2340,2341,3,763,
	381,0,2341,2342,3,761,380,0,2342,2343,3,787,393,0,2343,2344,3,767,383,0,
	2344,434,1,0,0,0,2345,2346,3,793,396,0,2346,2347,3,801,400,0,2347,2348,
	3,777,388,0,2348,2349,3,799,399,0,2349,436,1,0,0,0,2350,2351,3,793,396,
	0,2351,2352,3,801,400,0,2352,2353,3,789,394,0,2353,2354,3,799,399,0,2354,
	2355,3,769,384,0,2355,2356,3,767,383,0,2356,2357,5,95,0,0,2357,2358,3,777,
	388,0,2358,2359,3,767,383,0,2359,2360,3,769,384,0,2360,2361,3,787,393,0,
	2361,2362,3,799,399,0,2362,2363,3,777,388,0,2363,2364,3,771,385,0,2364,
	2365,3,777,388,0,2365,2366,3,769,384,0,2366,2367,3,795,397,0,2367,438,1,
	0,0,0,2368,2369,3,795,397,0,2369,2370,3,761,380,0,2370,2371,3,777,388,0,
	2371,2372,3,797,398,0,2372,2373,3,769,384,0,2373,440,1,0,0,0,2374,2375,
	3,795,397,0,2375,2376,3,769,384,0,2376,2377,3,761,380,0,2377,2378,3,783,
	391,0,2378,442,1,0,0,0,2379,2380,3,795,397,0,2380,2381,3,769,384,0,2381,
	2382,3,771,385,0,2382,2383,3,769,384,0,2383,2384,3,795,397,0,2384,2385,
	3,769,384,0,2385,2386,3,787,393,0,2386,2387,3,765,382,0,2387,2388,3,769,
	384,0,2388,2389,3,797,398,0,2389,444,1,0,0,0,2390,2391,3,795,397,0,2391,
	2392,3,769,384,0,2392,2393,3,773,386,0,2393,2394,3,769,384,0,2394,2395,
	3,807,403,0,2395,2396,3,791,395,0,2396,446,1,0,0,0,2397,2398,3,795,397,
	0,2398,2399,3,769,384,0,2399,2400,3,791,395,0,2400,2401,3,783,391,0,2401,
	2402,3,761,380,0,2402,2403,3,765,382,0,2403,2404,3,769,384,0,2404,448,1,
	0,0,0,2405,2406,3,795,397,0,2406,2407,3,769,384,0,2407,2408,3,797,398,0,
	2408,2409,3,777,388,0,2409,2410,3,773,386,0,2410,2411,3,787,393,0,2411,
	2412,3,761,380,0,2412,2413,3,783,391,0,2413,450,1,0,0,0,2414,2415,3,795,
	397,0,2415,2416,3,769,384,0,2416,2417,3,797,398,0,2417,2418,3,799,399,0,
	2418,2419,3,795,397,0,2419,2420,3,777,388,0,2420,2421,3,765,382,0,2421,
	2422,3,799,399,0,2422,452,1,0,0,0,2423,2424,3,795,397,0,2424,2425,3,769,
	384,0,2425,2426,3,797,398,0,2426,2427,3,801,400,0,2427,2428,3,783,391,0,
	2428,2429,3,799,399,0,2429,454,1,0,0,0,2430,2431,3,795,397,0,2431,2432,
	3,769,384,0,2432,2433,3,797,398,0,2433,2434,3,801,400,0,2434,2435,3,783,
	391,0,2435,2436,3,799,399,0,2436,2437,5,95,0,0,2437,2438,3,797,398,0,2438,
	2439,3,769,384,0,2439,2440,3,799,399,0,2440,2441,5,95,0,0,2441,2442,3,783,
	391,0,2442,2443,3,789,394,0,2443,2444,3,765,382,0,2444,2445,3,761,380,0,
	2445,2446,3,799,399,0,2446,2447,3,789,394,0,2447,2448,3,795,397,0,2448,
	456,1,0,0,0,2449,2450,3,795,397,0,2450,2451,3,769,384,0,2451,2452,3,799,
	399,0,2452,2453,3,801,400,0,2453,2454,3,795,397,0,2454,2455,3,787,393,0,
	2455,458,1,0,0,0,2456,2457,3,795,397,0,2457,2458,3,769,384,0,2458,2459,
	3,799,399,0,2459,2460,3,801,400,0,2460,2461,3,795,397,0,2461,2462,3,787,
	393,0,2462,2463,3,797,398,0,2463,460,1,0,0,0,2464,2465,3,795,397,0,2465,
	2466,3,769,384,0,2466,2467,3,803,401,0,2467,2468,3,769,384,0,2468,2469,
	3,795,397,0,2469,2470,3,797,398,0,2470,2471,3,769,384,0,2471,462,1,0,0,
	0,2472,2473,3,795,397,0,2473,2474,3,777,388,0,2474,2475,3,773,386,0,2475,
	2476,3,775,387,0,2476,2477,3,799,399,0,2477,464,1,0,0,0,2478,2479,3,795,
	397,0,2479,2480,3,783,391,0,2480,2481,3,777,388,0,2481,2482,3,781,390,0,
	2482,2483,3,769,384,0,2483,466,1,0,0,0,2484,2485,3,795,397,0,2485,2486,
	3,789,394,0,2486,2487,3,783,391,0,2487,2488,3,769,384,0,2488,468,1,0,0,
	0,2489,2490,3,795,397,0,2490,2491,3,789,394,0,2491,2492,3,783,391,0,2492,
	2493,3,783,391,0,2493,2494,3,763,381,0,2494,2495,3,761,380,0,2495,2496,
	3,765,382,0,2496,2497,3,781,390,0,2497,470,1,0,0,0,2498,2499,3,795,397,
	0,2499,2500,3,789,394,0,2500,2501,3,805,402,0,2501,472,1,0,0,0,2502,2503,
	3,795,397,0,2503,2504,3,789,394,0,2504,2505,3,805,402,0,2505,2506,3,797,
	398,0,2506,474,1,0,0,0,2507,2508,3,795,397,0,2508,2509,3,789,394,0,2509,
	2510,3,805,402,0,2510,2511,3,799,399,0,2511,2512,3,809,404,0,2512,2513,
	3,791,395,0,2513,2514,3,769,384,0,2514,476,1,0,0,0,2515,2516,3,795,397,
	0,2516,2517,3,789,394,0,2517,2518,3,805,402,0,2518,2519,5,95,0,0,2519,2520,
	3,765,382,0,2520,2521,3,789,394,0,2521,2522,3,801,400,0,2522,2523,3,787,
	393,0,2523,2524,3,799,399,0,2524,478,1,0,0,0,2525,2526,3,795,397,0,2526,
	2527,3,795,397,0,2527,480,1,0,0,0,2528,2529,3,795,397,0,2529,2530,3,797,
	398,0,2530,482,1,0,0,0,2531,2532,3,791,395,0,2532,2533,3,805,402,0,2533,
	2534,3,767,383,0,2534,484,1,0,0,0,2535,2536,3,799,399,0,2536,2537,3,795,
	397,0,2537,2538,3,777,388,0,2538,2539,3,785,392,0,2539,486,1,0,0,0,2540,
	2541,3,797,398,0,2541,2542,3,765,382,0,2542,2543,3,775,387,0,2543,2544,
	3,769,384,0,2544,2545,3,785,392,0,2545,2546,3,761,380,0,2546,488,1,0,0,
	0,2547,2548,3,797,398,0,2548,2549,3,769,384,0,2549,2550,3,765,382,0,2550,
	2551,3,789,394,0,2551,2552,3,787,393,0,2552,2553,3,767,383,0,2553,490,1,
	0,0,0,2554,2555,3,797,398,0,2555,2556,3,769,384,0,2556,2557,3,765,382,0,
	2557,2558,3,789,394,0,2558,2559,3,787,393,0,2559,2560,3,767,383,0,2560,
	2561,3,797,398,0,2561,492,1,0,0,0,2562,2563,3,797,398,0,2563,2564,3,769,
	384,0,2564,2565,3,765,382,0,2565,2566,3,801,400,0,2566,2567,3,795,397,0,
	2567,2568,3,777,388,0,2568,2569,3,799,399,0,2569,2570,3,809,404,0,2570,
	494,1,0,0,0,2571,2572,3,797,398,0,2572,2573,3,769,384,0,2573,2574,3,773,
	386,0,2574,2575,3,785,392,0,2575,2576,3,769,384,0,2576,2577,3,787,393,0,
	2577,2578,3,799,399,0,2578,496,1,0,0,0,2579,2580,3,797,398,0,2580,2581,
	3,769,384,0,2581,2582,3,783,391,0,2582,498,1,0,0,0,2583,2584,3,797,398,
	0,2584,2585,3,769,384,0,2585,2586,3,783,391,0,2586,2587,3,769,384,0,2587,
	2588,3,765,382,0,2588,2589,3,799,399,0,2589,500,1,0,0,0,2590,2591,3,797,
	398,0,2591,2592,3,769,384,0,2592,2593,3,799,399,0,2593,502,1,0,0,0,2594,
	2595,3,797,398,0,2595,2596,3,769,384,0,2596,2597,3,797,398,0,2597,2598,
	3,797,398,0,2598,2599,3,777,388,0,2599,2600,3,789,394,0,2600,2601,3,787,
	393,0,2601,504,1,0,0,0,2602,2603,3,797,398,0,2603,2604,3,769,384,0,2604,
	2605,3,797,398,0,2605,2606,3,797,398,0,2606,2607,3,777,388,0,2607,2608,
	3,789,394,0,2608,2609,3,787,393,0,2609,2610,3,797,398,0,2610,506,1,0,0,
	0,2611,2612,3,797,398,0,2612,2613,3,769,384,0,2613,2614,3,799,399,0,2614,
	2615,3,797,398,0,2615,508,1,0,0,0,2616,2617,3,797,398,0,2617,2618,3,775,
	387,0,2618,2619,3,761,380,0,2619,2620,3,795,397,0,2620,2621,3,769,384,0,
	2621,510,1,0,0,0,2622,2623,3,797,398,0,2623,2624,3,777,388,0,2624,2625,
	3,773,386,0,2625,2626,3,787,393,0,2626,2627,3,761,380,0,2627,2628,3,783,
	391,0,2628,512,1,0,0,0,2629,2630,3,797,398,0,2630,2631,3,777,388,0,2631,
	2632,3,785,392,0,2632,2633,3,791,395,0,2633,2634,3,783,391,0,2634,2635,
	3,769,384,0,2635,2636,5,95,0,0,2636,2637,3,767,383,0,2637,2638,3,789,394,
	0,2638,2639,3,801,400,0,2639,2640,3,763,381,0,2640,2641,3,783,391,0,2641,
	2642,3,769,384,0,2642,514,1,0,0,0,2643,2644,3,797,398,0,2644,2645,3,777,
	388,0,2645,2646,3,785,392,0,2646,2647,3,791,395,0,2647,2648,3,783,391,0,
	2648,2649,3,769,384,0,2649,2650,5,95,0,0,2650,2651,3,771,385,0,2651,2652,
	3,783,391,0,2652,2653,3,789,394,0,2653,2654,3,761,380,0,2654,2655,3,799,
	399,0,2655,516,1,0,0,0,2656,2657,3,797,398,0,2657,2658,3,777,388,0,2658,
	2659,3,785,392,0,2659,2660,3,791,395,0,2660,2661,3,783,391,0,2661,2662,
	3,769,384,0,2662,2663,5,95,0,0,2663,2664,3,777,388,0,2664,2665,3,787,393,
	0,2665,2666,3,799,399,0,2666,2667,3,769,384,0,2667,2668,3,773,386,0,2668,
	2669,3,769,384,0,2669,2670,3,795,397,0,2670,518,1,0,0,0,2671,2672,3,797,
	398,0,2672,2673,3,785,392,0,2673,2674,3,761,380,0,2674,2675,3,783,391,0,
	2675,2676,3,783,391,0,2676,2677,3,767,383,0,2677,2678,3,761,380,0,2678,
	2679,3,799,399,0,2679,2680,3,769,384,0,2680,2681,3,799,399,0,2681,2682,
	3,777,388,0,2682,2683,3,785,392,0,2683,2684,3,769,384,0,2684,520,1,0,0,
	0,2685,2686,3,797,398,0,2686,2687,3,785,392,0,2687,2688,3,761,380,0,2688,
	2689,3,783,391,0,2689,2690,3,783,391,0,2690,2691,3,777,388,0,2691,2692,
	3,787,393,0,2692,2693,3,799,399,0,2693,522,1,0,0,0,2694,2695,3,797,398,
	0,2695,2696,3,793,396,0,2696,2697,3,783,391,0,2697,524,1,0,0,0,2698,2699,
	3,797,398,0,2699,2700,3,793,396,0,2700,2701,3,783,391,0,2701,2702,3,769,
	384,0,2702,2703,3,807,403,0,2703,2704,3,765,382,0,2704,2705,3,769,384,0,
	2705,2706,3,791,395,0,2706,2707,3,799,399,0,2707,2708,3,777,388,0,2708,
	2709,3,789,394,0,2709,2710,3,787,393,0,2710,526,1,0,0,0,2711,2712,3,797,
	398,0,2712,2713,3,793,396,0,2713,2714,3,783,391,0,2714,2715,3,777,388,0,
	2715,2716,3,787,393,0,2716,2717,3,797,398,0,2717,2718,3,769,384,0,2718,
	2719,3,795,397,0,2719,2720,3,799,399,0,2720,528,1,0,0,0,2721,2722,3,797,
	398,0,2722,2723,3,793,396,0,2723,2724,3,783,391,0,2724,2725,3,797,398,0,
	2725,2726,3,799,399,0,2726,2727,3,761,380,0,2727,2728,3,799,399,0,2728,
	2729,3,769,384,0,2729,530,1,0,0,0,2730,2731,3,797,398,0,2731,2732,3,793,
	396,0,2732,2733,3,783,391,0,2733,2734,3,805,402,0,2734,2735,3,761,380,0,
	2735,2736,3,795,397,0,2736,2737,3,787,393,0,2737,2738,3,777,388,0,2738,
	2739,3,787,393,0,2739,2740,3,773,386,0,2740,532,1,0,0,0,2741,2742,3,797,
	398,0,2742,2743,3,799,399,0,2743,2744,3,761,380,0,2744,2745,3,799,399,0,
	2745,2746,3,797,398,0,2746,534,1,0,0,0,2747,2748,3,797,398,0,2748,2749,
	3,799,399,0,2749,2750,3,761,380,0,2750,2751,3,799,399,0,2751,2752,3,777,
	388,0,2752,2753,3,797,398,0,2753,2754,3,799,399,0,2754,2755,3,777,388,0,
	2755,2756,3,765,382,0,2756,2757,3,797,398,0,2757,536,1,0,0,0,2758,2759,
	3,797,398,0,2759,2760,3,799,399,0,2760,2761,3,769,384,0,2761,2762,3,791,
	395,0,2762,538,1,0,0,0,2763,2764,3,797,398,0,2764,2765,3,799,399,0,2765,
	2766,3,789,394,0,2766,2767,3,795,397,0,2767,2768,3,761,380,0,2768,2769,
	3,773,386,0,2769,2770,3,769,384,0,2770,540,1,0,0,0,2771,2772,3,797,398,
	0,2772,2773,3,799,399,0,2773,2774,3,789,394,0,2774,2775,3,795,397,0,2775,
	2776,3,769,384,0,2776,2777,3,767,383,0,2777,542,1,0,0,0,2778,2779,3,797,
	398,0,2779,2780,3,799,399,0,2780,2781,3,795,397,0,2781,2782,3,777,388,0,
	2782,2783,3,787,393,0,2783,2784,3,773,386,0,2784,544,1,0,0,0,2785,2786,
	3,797,398,0,2786,2787,3,801,400,0,2787,2788,3,763,381,0,2788,2789,3,767,
	383,0,2789,2790,3,777,388,0,2790,2791,3,795,397,0,2791,546,1,0,0,0,2792,
	2793,3,797,398,0,2793,2794,3,801,400,0,2794,2795,3,763,381,0,2795,2796,
	3,797,398,0,2796,2797,3,799,399,0,2797,2798,3,795,397,0,2798,2799,3,777,
	388,0,2799,2800,3,787,393,0,2800,2801,3,773,386,0,2801,548,1,0,0,0,2802,
	2803,3,797,398,0,2803,2804,3,801,400,0,2804,2805,3,785,392,0,2805,550,1,
	0,0,0,2806,2807,3,797,398,0,2807,2808,3,801,400,0,2808,2809,3,785,392,0,
	2809,2810,3,785,392,0,2810,2811,3,761,380,0,2811,2812,3,795,397,0,2812,
	2813,3,809,404,0,2813,552,1,0,0,0,2814,2815,3,797,398,0,2815,2816,3,809,
	404,0,2816,2817,3,797,398,0,2817,2818,5,95,0,0,2818,2819,3,795,397,0,2819,
	2820,3,769,384,0,2820,2821,3,771,385,0,2821,2822,3,765,382,0,2822,2823,
	3,801,400,0,2823,2824,3,795,397,0,2824,2825,3,797,398,0,2825,2826,3,789,
	394,0,2826,2827,3,795,397,0,2827,554,1,0,0,0,2828,2829,3,799,399,0,2829,
	2830,3,761,380,0,2830,2831,3,763,381,0,2831,2832,3,783,391,0,2832,2833,
	3,769,384,0,2833,556,1,0,0,0,2834,2835,3,799,399,0,2835,2836,3,761,380,
	0,2836,2837,3,763,381,0,2837,2838,3,783,391,0,2838,2839,3,769,384,0,2839,
	2840,3,797,398,0,2840,2841,3,791,395,0,2841,2842,3,761,380,0,2842,2843,
	3,765,382,0,2843,2844,3,769,384,0,2844,558,1,0,0,0,2845,2846,3,799,399,
	0,2846,2847,3,769,384,0,2847,2848,3,785,392,0,2848,2849,3,791,395,0,2849,
	2850,3,789,394,0,2850,2851,3,795,397,0,2851,2852,3,761,380,0,2852,2853,
	3,795,397,0,2853,2854,3,809,404,0,2854,560,1,0,0,0,2855,2856,3,799,399,
	0,2856,2857,3,769,384,0,2857,2858,3,795,397,0,2858,2859,3,785,392,0,2859,
	2860,3,777,388,0,2860,2861,3,787,393,0,2861,2862,3,761,380,0,2862,2863,
	3,799,399,0,2863,2864,3,769,384,0,2864,2865,3,767,383,0,2865,562,1,0,0,
	0,2866,2867,3,799,399,0,2867,2868,3,769,384,0,2868,2869,3,807,403,0,2869,
	2870,3,799,399,0,2870,2871,3,777,388,0,2871,2872,3,785,392,0,2872,2873,
	3,761,380,0,2873,2874,3,773,386,0,2874,2875,3,769,384,0,2875,2876,5,95,
	0,0,2876,2877,3,789,394,0,2877,2878,3,787,393,0,2878,564,1,0,0,0,2879,2880,
	3,799,399,0,2880,2881,3,775,387,0,2881,2882,3,769,384,0,2882,2883,3,787,
	393,0,2883,566,1,0,0,0,2884,2885,3,799,399,0,2885,2886,3,777,388,0,2886,
	2887,3,785,392,0,2887,2888,3,769,384,0,2888,2889,3,797,398,0,2889,2890,
	3,799,399,0,2890,2891,3,761,380,0,2891,2892,3,785,392,0,2892,2893,3,791,
	395,0,2893,568,1,0,0,0,2894,2895,3,799,399,0,2895,2896,3,777,388,0,2896,
	2897,3,787,393,0,2897,2898,3,809,404,0,2898,2899,3,777,388,0,2899,2900,
	3,787,393,0,2900,2901,3,799,399,0,2901,570,1,0,0,0,2902,2903,3,799,399,
	0,2903,2904,3,777,388,0,2904,2905,3,799,399,0,2905,2906,3,783,391,0,2906,
	2907,3,769,384,0,2907,572,1,0,0,0,2908,2909,3,799,399,0,2909,2910,3,789,
	394,0,2910,574,1,0,0,0,2911,2912,3,799,399,0,2912,2913,3,789,394,0,2913,
	2914,3,791,395,0,2914,576,1,0,0,0,2915,2916,3,799,399,0,2916,2917,3,795,
	397,0,2917,2918,3,761,380,0,2918,2919,3,787,393,0,2919,2920,3,797,398,0,
	2920,2921,3,761,380,0,2921,2922,3,765,382,0,2922,2923,3,799,399,0,2923,
	2924,3,777,388,0,2924,2925,3,789,394,0,2925,2926,3,787,393,0,2926,578,1,
	0,0,0,2927,2928,3,799,399,0,2928,2929,3,795,397,0,2929,2930,3,801,400,0,
	2930,2931,3,769,384,0,2931,580,1,0,0,0,2932,2933,3,799,399,0,2933,2934,
	3,795,397,0,2934,2935,3,801,400,0,2935,2936,3,787,393,0,2936,2937,3,765,
	382,0,2937,2938,3,761,380,0,2938,2939,3,799,399,0,2939,2940,3,769,384,0,
	2940,582,1,0,0,0,2941,2942,3,799,399,0,2942,2943,3,809,404,0,2943,2944,
	3,791,395,0,2944,2945,3,769,384,0,2945,584,1,0,0,0,2946,2947,3,801,400,
	0,2947,2948,3,787,393,0,2948,2949,3,777,388,0,2949,2950,3,789,394,0,2950,
	2951,3,787,393,0,2951,586,1,0,0,0,2952,2953,3,801,400,0,2953,2954,3,787,
	393,0,2954,2955,3,777,388,0,2955,2956,3,793,396,0,2956,2957,3,801,400,0,
	2957,2958,3,769,384,0,2958,588,1,0,0,0,2959,2960,3,801,400,0,2960,2961,
	3,791,395,0,2961,2962,3,767,383,0,2962,2963,3,761,380,0,2963,2964,3,799,
	399,0,2964,2965,3,769,384,0,2965,590,1,0,0,0,2966,2967,3,801,400,0,2967,
	2968,3,795,397,0,2968,592,1,0,0,0,2969,2970,3,801,400,0,2970,2971,3,797,
	398,0,2971,2972,3,769,384,0,2972,594,1,0,0,0,2973,2974,3,801,400,0,2974,
	2975,3,797,398,0,2975,2976,3,777,388,0,2976,2977,3,787,393,0,2977,2978,
	3,773,386,0,2978,596,1,0,0,0,2979,2980,3,803,401,0,2980,2981,3,761,380,
	0,2981,2982,3,783,391,0,2982,2983,3,801,400,0,2983,2984,3,769,384,0,2984,
	598,1,0,0,0,2985,2986,3,803,401,0,2986,2987,3,761,380,0,2987,2988,3,783,
	391,0,2988,2989,3,801,400,0,2989,2990,3,769,384,0,2990,2991,3,797,398,0,
	2991,600,1,0,0,0,2992,2993,3,803,401,0,2993,2994,3,761,380,0,2994,2995,
	3,795,397,0,2995,602,1,0,0,0,2996,2997,3,803,401,0,2997,2998,3,761,380,
	0,2998,2999,3,795,397,0,2999,3000,3,765,382,0,3000,3001,3,775,387,0,3001,
	3002,3,761,380,0,3002,3003,3,795,397,0,3003,604,1,0,0,0,3004,3005,3,803,
	401,0,3005,3006,3,761,380,0,3006,3007,3,795,397,0,3007,3008,3,765,382,0,
	3008,3009,3,775,387,0,3009,3010,3,761,380,0,3010,3011,3,795,397,0,3011,
	3012,5,50,0,0,3012,606,1,0,0,0,3013,3014,3,803,401,0,3014,3015,3,761,380,
	0,3015,3016,3,795,397,0,3016,3017,3,809,404,0,3017,3018,3,777,388,0,3018,
	3019,3,787,393,0,3019,3020,3,773,386,0,3020,608,1,0,0,0,3021,3022,3,803,
	401,0,3022,3023,3,789,394,0,3023,3024,3,783,391,0,3024,3025,3,761,380,0,
	3025,3026,3,799,399,0,3026,3027,3,777,388,0,3027,3028,3,783,391,0,3028,
	3029,3,769,384,0,3029,610,1,0,0,0,3030,3031,3,805,402,0,3031,3032,3,775,
	387,0,3032,3033,3,769,384,0,3033,3034,3,787,393,0,3034,612,1,0,0,0,3035,
	3036,3,805,402,0,3036,3037,3,775,387,0,3037,3038,3,769,384,0,3038,3039,
	3,795,397,0,3039,3040,3,769,384,0,3040,614,1,0,0,0,3041,3042,3,805,402,
	0,3042,3043,3,775,387,0,3043,3044,3,777,388,0,3044,3045,3,783,391,0,3045,
	3046,3,769,384,0,3046,616,1,0,0,0,3047,3048,3,805,402,0,3048,3049,3,777,
	388,0,3049,3050,3,799,399,0,3050,3051,3,775,387,0,3051,618,1,0,0,0,3052,
	3053,3,805,402,0,3053,3054,3,777,388,0,3054,3055,3,799,399,0,3055,3056,
	3,775,387,0,3056,3057,3,789,394,0,3057,3058,3,801,400,0,3058,3059,3,799,
	399,0,3059,620,1,0,0,0,3060,3061,3,805,402,0,3061,3062,3,789,394,0,3062,
	3063,3,795,397,0,3063,3064,3,781,390,0,3064,622,1,0,0,0,3065,3066,3,807,
	403,0,3066,3067,3,761,380,0,3067,3068,3,765,382,0,3068,3069,3,799,399,0,
	3069,3070,5,95,0,0,3070,3071,3,761,380,0,3071,3072,3,763,381,0,3072,3073,
	3,789,394,0,3073,3074,3,795,397,0,3074,3075,3,799,399,0,3075,624,1,0,0,
	0,3076,3077,3,807,403,0,3077,3078,3,785,392,0,3078,3079,3,783,391,0,3079,
	626,1,0,0,0,3080,3081,3,809,404,0,3081,3082,3,769,384,0,3082,3083,3,797,
	398,0,3083,628,1,0,0,0,3084,3085,3,761,380,0,3085,3086,3,765,382,0,3086,
	3087,3,799,399,0,3087,3088,3,777,388,0,3088,3089,3,803,401,0,3089,3090,
	3,777,388,0,3090,3091,3,799,399,0,3091,3092,3,809,404,0,3092,3093,5,95,
	0,0,3093,3094,3,765,382,0,3094,3095,3,789,394,0,3095,3096,3,801,400,0,3096,
	3097,3,787,393,0,3097,3098,3,799,399,0,3098,630,1,0,0,0,3099,3100,3,765,
	382,0,3100,3101,3,801,400,0,3101,3102,3,785,392,0,3102,3103,3,769,384,0,
	3103,3104,5,95,0,0,3104,3105,3,767,383,0,3105,3106,3,777,388,0,3106,3107,
	3,797,398,0,3107,3108,3,799,399,0,3108,632,1,0,0,0,3109,3110,3,765,382,
	0,3110,3111,3,801,400,0,3111,3112,3,795,397,0,3112,3113,3,795,397,0,3113,
	3114,3,769,384,0,3114,3115,3,787,393,0,3115,3116,3,799,399,0,3116,3117,
	5,95,0,0,3117,3118,3,767,383,0,3118,3119,3,761,380,0,3119,3120,3,799,399,
	0,3120,3121,3,769,384,0,3121,634,1,0,0,0,3122,3123,3,765,382,0,3123,3124,
	3,801,400,0,3124,3125,3,795,397,0,3125,3126,3,795,397,0,3126,3127,3,769,
	384,0,3127,3128,3,787,393,0,3128,3129,3,799,399,0,3129,3130,5,95,0,0,3130,
	3131,3,799,399,0,3131,3132,3,777,388,0,3132,3133,3,785,392,0,3133,3134,
	3,769,384,0,3134,3135,3,797,398,0,3135,3136,3,799,399,0,3136,3137,3,761,
	380,0,3137,3138,3,785,392,0,3138,3139,3,791,395,0,3139,636,1,0,0,0,3140,
	3141,3,765,382,0,3141,3142,3,801,400,0,3142,3143,3,795,397,0,3143,3144,
	3,795,397,0,3144,3145,3,769,384,0,3145,3146,3,787,393,0,3146,3147,3,799,
	399,0,3147,3148,5,95,0,0,3148,3149,3,801,400,0,3149,3150,3,797,398,0,3150,
	3151,3,769,384,0,3151,3152,3,795,397,0,3152,638,1,0,0,0,3153,3154,3,767,
	383,0,3154,3155,3,769,384,0,3155,3156,3,787,393,0,3156,3157,3,797,398,0,
	3157,3158,3,769,384,0,3158,3159,5,95,0,0,3159,3160,3,795,397,0,3160,3161,
	3,761,380,0,3161,3162,3,787,393,0,3162,3163,3,781,390,0,3163,640,1,0,0,
	0,3164,3165,3,771,385,0,3165,3166,3,777,388,0,3166,3167,3,795,397,0,3167,
	3168,3,797,398,0,3168,3169,3,799,399,0,3169,3170,5,95,0,0,3170,3171,3,803,
	401,0,3171,3172,3,761,380,0,3172,3173,3,783,391,0,3173,3174,3,801,400,0,
	3174,3175,3,769,384,0,3175,642,1,0,0,0,3176,3177,3,783,391,0,3177,3178,
	3,761,380,0,3178,3179,3,773,386,0,3179,644,1,0,0,0,3180,3181,3,783,391,
	0,3181,3182,3,761,380,0,3182,3183,3,797,398,0,3183,3184,3,799,399,0,3184,
	3185,5,95,0,0,3185,3186,3,803,401,0,3186,3187,3,761,380,0,3187,3188,3,783,
	391,0,3188,3189,3,801,400,0,3189,3190,3,769,384,0,3190,646,1,0,0,0,3191,
	3192,3,783,391,0,3192,3193,3,769,384,0,3193,3194,3,761,380,0,3194,3195,
	3,767,383,0,3195,648,1,0,0,0,3196,3197,3,785,392,0,3197,3198,3,761,380,
	0,3198,3199,3,807,403,0,3199,3200,5,95,0,0,3200,3201,3,791,395,0,3201,3202,
	3,761,380,0,3202,3203,3,795,397,0,3203,3204,3,799,399,0,3204,3205,5,95,
	0,0,3205,3206,3,797,398,0,3206,3207,3,799,399,0,3207,3208,3,795,397,0,3208,
	3209,3,777,388,0,3209,3210,3,787,393,0,3210,3211,3,773,386,0,3211,650,1,
	0,0,0,3212,3213,3,785,392,0,3213,3214,3,777,388,0,3214,3215,3,787,393,0,
	3215,3216,5,95,0,0,3216,3217,3,791,395,0,3217,3218,3,761,380,0,3218,3219,
	3,795,397,0,3219,3220,3,799,399,0,3220,3221,5,95,0,0,3221,3222,3,797,398,
	0,3222,3223,3,799,399,0,3223,3224,3,795,397,0,3224,3225,3,777,388,0,3225,
	3226,3,787,393,0,3226,3227,3,773,386,0,3227,652,1,0,0,0,3228,3229,3,785,
	392,0,3229,3230,3,761,380,0,3230,3231,3,807,403,0,3231,3232,5,95,0,0,3232,
	3233,3,791,395,0,3233,3234,3,761,380,0,3234,3235,3,795,397,0,3235,3236,
	3,799,399,0,3236,3237,5,95,0,0,3237,3238,3,777,388,0,3238,3239,3,787,393,
	0,3239,3240,3,799,399,0,3240,654,1,0,0,0,3241,3242,3,785,392,0,3242,3243,
	3,777,388,0,3243,3244,3,787,393,0,3244,3245,5,95,0,0,3245,3246,3,791,395,
	0,3246,3247,3,761,380,0,3247,3248,3,795,397,0,3248,3249,3,799,399,0,3249,
	3250,5,95,0,0,3250,3251,3,777,388,0,3251,3252,3,787,393,0,3252,3253,3,799,
	399,0,3253,656,1,0,0,0,3254,3255,3,785,392,0,3255,3256,3,761,380,0,3256,
	3257,3,807,403,0,3257,3258,5,95,0,0,3258,3259,3,791,395,0,3259,3260,3,761,
	380,0,3260,3261,3,795,397,0,3261,3262,3,799,399,0,3262,3263,5,95,0,0,3263,
	3264,3,767,383,0,3264,3265,3,761,380,0,3265,3266,3,799,399,0,3266,3267,
	3,769,384,0,3267,658,1,0,0,0,3268,3269,3,785,392,0,3269,3270,3,777,388,
	0,3270,3271,3,787,393,0,3271,3272,5,95,0,0,3272,3273,3,791,395,0,3273,3274,
	3,761,380,0,3274,3275,3,795,397,0,3275,3276,3,799,399,0,3276,3277,5,95,
	0,0,3277,3278,3,767,383,0,3278,3279,3,761,380,0,3279,3280,3,799,399,0,3280,
	3281,3,769,384,0,3281,660,1,0,0,0,3282,3283,3,791,395,0,3283,3284,3,761,
	380,0,3284,3285,3,795,397,0,3285,3286,3,799,399,0,3286,3287,5,95,0,0,3287,
	3288,3,765,382,0,3288,3289,3,789,394,0,3289,3290,3,801,400,0,3290,3291,
	3,787,393,0,3291,3292,3,799,399,0,3292,662,1,0,0,0,3293,3294,3,791,395,
	0,3294,3295,3,761,380,0,3295,3296,3,795,397,0,3296,3297,3,799,399,0,3297,
	3298,5,95,0,0,3298,3299,3,783,391,0,3299,3300,3,789,394,0,3300,3301,3,765,
	382,0,3301,664,1,0,0,0,3302,3303,3,795,397,0,3303,3304,3,761,380,0,3304,
	3305,3,787,393,0,3305,3306,3,781,390,0,3306,666,1,0,0,0,3307,3308,3,795,
	397,0,3308,3309,3,789,394,0,3309,3310,3,805,402,0,3310,3311,5,95,0,0,3311,
	3312,3,787,393,0,3312,3313,3,801,400,0,3313,3314,3,785,392,0,3314,3315,
	3,763,381,0,3315,3316,3,769,384,0,3316,3317,3,795,397,0,3317,668,1,0,0,
	0,3318,3319,3,797,398,0,3319,3320,3,799,399,0,3320,3321,3,767,383,0,3321,
	3322,3,769,384,0,3322,3323,3,803,401,0,3323,670,1,0,0,0,3324,3325,3,797,
	398,0,3325,3326,3,809,404,0,3326,3327,3,797,398,0,3327,3328,3,767,383,0,
	3328,3329,3,761,380,0,3329,3330,3,799,399,0,3330,3331,3,769,384,0,3331,
	672,1,0,0,0,3332,3333,3,803,401,0,3333,3334,3,761,380,0,3334,3335,3,795,
	397,0,3335,3336,3,777,388,0,3336,3337,3,761,380,0,3337,3338,3,787,393,0,
	3338,3339,3,765,382,0,3339,3340,3,769,384,0,3340,674,1,0,0,0,3341,3342,
	3,801,400,0,3342,3343,3,797,398,0,3343,3344,3,769,384,0,3344,3345,3,795,
	397,0,3345,676,1,0,0,0,3346,3347,5,43,0,0,3347,678,1,0,0,0,3348,3349,5,
	58,0,0,3349,680,1,0,0,0,3350,3351,5,44,0,0,3351,682,1,0,0,0,3352,3353,5,
	124,0,0,3353,3354,5,124,0,0,3354,684,1,0,0,0,3355,3356,5,47,0,0,3356,686,
	1,0,0,0,3357,3358,5,46,0,0,3358,688,1,0,0,0,3359,3360,5,46,0,0,3360,3361,
	5,46,0,0,3361,690,1,0,0,0,3362,3363,5,61,0,0,3363,692,1,0,0,0,3364,3365,
	5,61,0,0,3365,3366,5,61,0,0,3366,694,1,0,0,0,3367,3368,5,35,0,0,3368,696,
	1,0,0,0,3369,3370,5,33,0,0,3370,698,1,0,0,0,3371,3372,5,60,0,0,3372,3373,
	5,62,0,0,3373,700,1,0,0,0,3374,3375,5,33,0,0,3375,3376,5,61,0,0,3376,702,
	1,0,0,0,3377,3378,5,62,0,0,3378,704,1,0,0,0,3379,3380,5,62,0,0,3380,3381,
	5,61,0,0,3381,706,1,0,0,0,3382,3383,5,60,0,0,3383,708,1,0,0,0,3384,3385,
	5,60,0,0,3385,3386,5,61,0,0,3386,710,1,0,0,0,3387,3388,5,42,0,0,3388,712,
	1,0,0,0,3389,3390,5,37,0,0,3390,714,1,0,0,0,3391,3392,5,64,0,0,3392,716,
	1,0,0,0,3393,3394,5,123,0,0,3394,718,1,0,0,0,3395,3396,5,40,0,0,3396,720,
	1,0,0,0,3397,3398,5,91,0,0,3398,722,1,0,0,0,3399,3400,5,125,0,0,3400,724,
	1,0,0,0,3401,3402,5,41,0,0,3402,726,1,0,0,0,3403,3404,5,93,0,0,3404,728,
	1,0,0,0,3405,3406,5,59,0,0,3406,730,1,0,0,0,3407,3408,5,45,0,0,3408,732,
	1,0,0,0,3409,3410,3,753,376,0,3410,734,1,0,0,0,3411,3419,5,39,0,0,3412,
	3413,5,39,0,0,3413,3418,5,39,0,0,3414,3415,5,92,0,0,3415,3418,5,39,0,0,
	3416,3418,8,0,0,0,3417,3412,1,0,0,0,3417,3414,1,0,0,0,3417,3416,1,0,0,0,
	3418,3421,1,0,0,0,3419,3417,1,0,0,0,3419,3420,1,0,0,0,3420,3422,1,0,0,0,
	3421,3419,1,0,0,0,3422,3423,5,39,0,0,3423,736,1,0,0,0,3424,3429,5,34,0,
	0,3425,3428,3,755,377,0,3426,3428,9,0,0,0,3427,3425,1,0,0,0,3427,3426,1,
	0,0,0,3428,3431,1,0,0,0,3429,3430,1,0,0,0,3429,3427,1,0,0,0,3430,3432,1,
	0,0,0,3431,3429,1,0,0,0,3432,3433,5,34,0,0,3433,738,1,0,0,0,3434,3436,3,
	757,378,0,3435,3434,1,0,0,0,3436,3437,1,0,0,0,3437,3435,1,0,0,0,3437,3438,
	1,0,0,0,3438,740,1,0,0,0,3439,3441,3,757,378,0,3440,3439,1,0,0,0,3441,3442,
	1,0,0,0,3442,3440,1,0,0,0,3442,3443,1,0,0,0,3443,3444,1,0,0,0,3444,3445,
	5,46,0,0,3445,3449,8,1,0,0,3446,3448,3,757,378,0,3447,3446,1,0,0,0,3448,
	3451,1,0,0,0,3449,3447,1,0,0,0,3449,3450,1,0,0,0,3450,3459,1,0,0,0,3451,
	3449,1,0,0,0,3452,3454,5,46,0,0,3453,3455,3,757,378,0,3454,3453,1,0,0,0,
	3455,3456,1,0,0,0,3456,3454,1,0,0,0,3456,3457,1,0,0,0,3457,3459,1,0,0,0,
	3458,3440,1,0,0,0,3458,3452,1,0,0,0,3459,742,1,0,0,0,3460,3462,3,759,379,
	0,3461,3460,1,0,0,0,3462,3463,1,0,0,0,3463,3461,1,0,0,0,3463,3464,1,0,0,
	0,3464,3465,1,0,0,0,3465,3466,6,371,0,0,3466,744,1,0,0,0,3467,3468,5,47,
	0,0,3468,3469,5,42,0,0,3469,3473,1,0,0,0,3470,3472,9,0,0,0,3471,3470,1,
	0,0,0,3472,3475,1,0,0,0,3473,3474,1,0,0,0,3473,3471,1,0,0,0,3474,3476,1,
	0,0,0,3475,3473,1,0,0,0,3476,3477,5,42,0,0,3477,3478,5,47,0,0,3478,3479,
	1,0,0,0,3479,3480,6,372,1,0,3480,746,1,0,0,0,3481,3482,5,45,0,0,3482,3486,
	5,45,0,0,3483,3484,5,47,0,0,3484,3486,5,47,0,0,3485,3481,1,0,0,0,3485,3483,
	1,0,0,0,3486,3490,1,0,0,0,3487,3489,9,0,0,0,3488,3487,1,0,0,0,3489,3492,
	1,0,0,0,3490,3491,1,0,0,0,3490,3488,1,0,0,0,3491,3494,1,0,0,0,3492,3490,
	1,0,0,0,3493,3495,5,13,0,0,3494,3493,1,0,0,0,3494,3495,1,0,0,0,3495,3496,
	1,0,0,0,3496,3497,5,10,0,0,3497,3498,1,0,0,0,3498,3499,6,373,1,0,3499,748,
	1,0,0,0,3500,3501,7,2,0,0,3501,3503,5,58,0,0,3502,3504,5,92,0,0,3503,3502,
	1,0,0,0,3503,3504,1,0,0,0,3504,3506,1,0,0,0,3505,3500,1,0,0,0,3505,3506,
	1,0,0,0,3506,3507,1,0,0,0,3507,3512,3,733,366,0,3508,3509,5,92,0,0,3509,
	3511,3,733,366,0,3510,3508,1,0,0,0,3511,3514,1,0,0,0,3512,3510,1,0,0,0,
	3512,3513,1,0,0,0,3513,750,1,0,0,0,3514,3512,1,0,0,0,3515,3519,7,2,0,0,
	3516,3519,3,757,378,0,3517,3519,5,95,0,0,3518,3515,1,0,0,0,3518,3516,1,
	0,0,0,3518,3517,1,0,0,0,3519,3522,1,0,0,0,3520,3518,1,0,0,0,3520,3521,1,
	0,0,0,3521,3523,1,0,0,0,3522,3520,1,0,0,0,3523,3524,5,58,0,0,3524,752,1,
	0,0,0,3525,3531,7,2,0,0,3526,3530,7,2,0,0,3527,3530,3,757,378,0,3528,3530,
	5,95,0,0,3529,3526,1,0,0,0,3529,3527,1,0,0,0,3529,3528,1,0,0,0,3530,3533,
	1,0,0,0,3531,3529,1,0,0,0,3531,3532,1,0,0,0,3532,3576,1,0,0,0,3533,3531,
	1,0,0,0,3534,3535,5,36,0,0,3535,3539,5,123,0,0,3536,3538,9,0,0,0,3537,3536,
	1,0,0,0,3538,3541,1,0,0,0,3539,3540,1,0,0,0,3539,3537,1,0,0,0,3540,3542,
	1,0,0,0,3541,3539,1,0,0,0,3542,3576,5,125,0,0,3543,3547,7,3,0,0,3544,3548,
	7,2,0,0,3545,3548,3,757,378,0,3546,3548,7,3,0,0,3547,3544,1,0,0,0,3547,
	3545,1,0,0,0,3547,3546,1,0,0,0,3548,3549,1,0,0,0,3549,3547,1,0,0,0,3549,
	3550,1,0,0,0,3550,3576,1,0,0,0,3551,3555,5,34,0,0,3552,3554,9,0,0,0,3553,
	3552,1,0,0,0,3554,3557,1,0,0,0,3555,3556,1,0,0,0,3555,3553,1,0,0,0,3556,
	3558,1,0,0,0,3557,3555,1,0,0,0,3558,3576,5,34,0,0,3559,3563,5,91,0,0,3560,
	3562,9,0,0,0,3561,3560,1,0,0,0,3562,3565,1,0,0,0,3563,3564,1,0,0,0,3563,
	3561,1,0,0,0,3564,3566,1,0,0,0,3565,3563,1,0,0,0,3566,3576,5,93,0,0,3567,
	3571,5,96,0,0,3568,3570,9,0,0,0,3569,3568,1,0,0,0,3570,3573,1,0,0,0,3571,
	3572,1,0,0,0,3571,3569,1,0,0,0,3572,3574,1,0,0,0,3573,3571,1,0,0,0,3574,
	3576,5,96,0,0,3575,3525,1,0,0,0,3575,3534,1,0,0,0,3575,3543,1,0,0,0,3575,
	3551,1,0,0,0,3575,3559,1,0,0,0,3575,3567,1,0,0,0,3576,754,1,0,0,0,3577,
	3578,5,34,0,0,3578,3582,5,34,0,0,3579,3580,5,92,0,0,3580,3582,5,34,0,0,
	3581,3577,1,0,0,0,3581,3579,1,0,0,0,3582,756,1,0,0,0,3583,3584,7,4,0,0,
	3584,758,1,0,0,0,3585,3586,7,5,0,0,3586,760,1,0,0,0,3587,3588,7,6,0,0,3588,
	762,1,0,0,0,3589,3590,7,7,0,0,3590,764,1,0,0,0,3591,3592,7,8,0,0,3592,766,
	1,0,0,0,3593,3594,7,9,0,0,3594,768,1,0,0,0,3595,3596,7,10,0,0,3596,770,
	1,0,0,0,3597,3598,7,11,0,0,3598,772,1,0,0,0,3599,3600,7,12,0,0,3600,774,
	1,0,0,0,3601,3602,7,13,0,0,3602,776,1,0,0,0,3603,3604,7,14,0,0,3604,778,
	1,0,0,0,3605,3606,7,15,0,0,3606,780,1,0,0,0,3607,3608,7,16,0,0,3608,782,
	1,0,0,0,3609,3610,7,17,0,0,3610,784,1,0,0,0,3611,3612,7,18,0,0,3612,786,
	1,0,0,0,3613,3614,7,19,0,0,3614,788,1,0,0,0,3615,3616,7,20,0,0,3616,790,
	1,0,0,0,3617,3618,7,21,0,0,3618,792,1,0,0,0,3619,3620,7,22,0,0,3620,794,
	1,0,0,0,3621,3622,7,23,0,0,3622,796,1,0,0,0,3623,3624,7,24,0,0,3624,798,
	1,0,0,0,3625,3626,7,25,0,0,3626,800,1,0,0,0,3627,3628,7,26,0,0,3628,802,
	1,0,0,0,3629,3630,7,27,0,0,3630,804,1,0,0,0,3631,3632,7,28,0,0,3632,806,
	1,0,0,0,3633,3634,7,29,0,0,3634,808,1,0,0,0,3635,3636,7,30,0,0,3636,810,
	1,0,0,0,3637,3638,7,31,0,0,3638,812,1,0,0,0,30,0,3417,3419,3427,3429,3437,
	3442,3449,3456,3458,3463,3473,3485,3490,3494,3503,3505,3512,3518,3520,3529,
	3531,3539,3547,3549,3555,3563,3571,3575,3581,2,6,0,0,0,1,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HiveSqlLexer.__ATN) {
			HiveSqlLexer.__ATN = new ATNDeserializer().deserialize(HiveSqlLexer._serializedATN);
		}

		return HiveSqlLexer.__ATN;
	}


	static DecisionsToDFA = HiveSqlLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}