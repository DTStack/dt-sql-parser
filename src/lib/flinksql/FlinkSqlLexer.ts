// Generated from /Users/hayden/Desktop/dt-works/dt-sql-parser/src/grammar/flinksql/FlinkSqlLexer.g4 by ANTLR 4.12.0
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
export default class FlinkSqlLexer extends Lexer {
	public static readonly SPACE = 1;
	public static readonly COMMENT_INPUT = 2;
	public static readonly LINE_COMMENT = 3;
	public static readonly SELECT = 4;
	public static readonly FROM = 5;
	public static readonly ADD = 6;
	public static readonly AS = 7;
	public static readonly ALL = 8;
	public static readonly ANY = 9;
	public static readonly DISTINCT = 10;
	public static readonly WHERE = 11;
	public static readonly GROUP = 12;
	public static readonly BY = 13;
	public static readonly GROUPING = 14;
	public static readonly SETS = 15;
	public static readonly CUBE = 16;
	public static readonly ROLLUP = 17;
	public static readonly ORDER = 18;
	public static readonly HAVING = 19;
	public static readonly LIMIT = 20;
	public static readonly AT = 21;
	public static readonly OR = 22;
	public static readonly AND = 23;
	public static readonly IN = 24;
	public static readonly NOT = 25;
	public static readonly NO = 26;
	public static readonly EXISTS = 27;
	public static readonly BETWEEN = 28;
	public static readonly LIKE = 29;
	public static readonly RLIKE = 30;
	public static readonly IS = 31;
	public static readonly TRUE = 32;
	public static readonly FALSE = 33;
	public static readonly NULLS = 34;
	public static readonly ASC = 35;
	public static readonly DESC = 36;
	public static readonly FOR = 37;
	public static readonly INTERVAL = 38;
	public static readonly CASE = 39;
	public static readonly WHEN = 40;
	public static readonly THEN = 41;
	public static readonly ELSE = 42;
	public static readonly BEGIN = 43;
	public static readonly END = 44;
	public static readonly JOIN = 45;
	public static readonly CROSS = 46;
	public static readonly OUTER = 47;
	public static readonly INNER = 48;
	public static readonly LEFT = 49;
	public static readonly SEMI = 50;
	public static readonly RIGHT = 51;
	public static readonly FULL = 52;
	public static readonly USER = 53;
	public static readonly NATURAL = 54;
	public static readonly ON = 55;
	public static readonly PIVOT = 56;
	public static readonly LATERAL = 57;
	public static readonly WINDOW = 58;
	public static readonly OVER = 59;
	public static readonly PARTITION = 60;
	public static readonly RANGE = 61;
	public static readonly ROWS = 62;
	public static readonly UNBOUNDED = 63;
	public static readonly PRECEDING = 64;
	public static readonly FOLLOWING = 65;
	public static readonly CURRENT = 66;
	public static readonly FIRST = 67;
	public static readonly AFTER = 68;
	public static readonly LAST = 69;
	public static readonly WITH = 70;
	public static readonly WITHOUT = 71;
	public static readonly VALUES = 72;
	public static readonly CREATE = 73;
	public static readonly TABLE = 74;
	public static readonly DIRECTORY = 75;
	public static readonly VIEW = 76;
	public static readonly REPLACE = 77;
	public static readonly EXECUTE = 78;
	public static readonly STATEMENT = 79;
	public static readonly INSERT = 80;
	public static readonly DELETE = 81;
	public static readonly REMOVE = 82;
	public static readonly INTO = 83;
	public static readonly DESCRIBE = 84;
	public static readonly EXPLAIN = 85;
	public static readonly PLAN = 86;
	public static readonly CHANGELOG_MODE = 87;
	public static readonly JSON_EXECUTION_PLAN = 88;
	public static readonly ESTIMATED_COST = 89;
	public static readonly FORMAT = 90;
	public static readonly LOGICAL = 91;
	public static readonly CODEGEN = 92;
	public static readonly COST = 93;
	public static readonly CAST = 94;
	public static readonly SHOW = 95;
	public static readonly TABLES = 96;
	public static readonly COLUMNS = 97;
	public static readonly COLUMN = 98;
	public static readonly USE = 99;
	public static readonly MODULE = 100;
	public static readonly MODULES = 101;
	public static readonly PARTITIONS = 102;
	public static readonly FUNCTIONS = 103;
	public static readonly DROP = 104;
	public static readonly UNION = 105;
	public static readonly EXCEPT = 106;
	public static readonly SETMINUS = 107;
	public static readonly INTERSECT = 108;
	public static readonly TO = 109;
	public static readonly TABLESAMPLE = 110;
	public static readonly STRATIFY = 111;
	public static readonly ALTER = 112;
	public static readonly RENAME = 113;
	public static readonly STRUCT = 114;
	public static readonly COMMENT = 115;
	public static readonly SET = 116;
	public static readonly RESET = 117;
	public static readonly DATA = 118;
	public static readonly START = 119;
	public static readonly TRANSACTION = 120;
	public static readonly COMMIT = 121;
	public static readonly ROLLBACK = 122;
	public static readonly MACRO = 123;
	public static readonly IGNORE = 124;
	public static readonly BOTH = 125;
	public static readonly LEADING = 126;
	public static readonly TRAILING = 127;
	public static readonly IF = 128;
	public static readonly POSITION = 129;
	public static readonly EXTRACT = 130;
	public static readonly MINUS = 131;
	public static readonly DIV = 132;
	public static readonly PERCENTLIT = 133;
	public static readonly BUCKET = 134;
	public static readonly OUT = 135;
	public static readonly OF = 136;
	public static readonly SORT = 137;
	public static readonly CLUSTER = 138;
	public static readonly DISTRIBUTE = 139;
	public static readonly OVERWRITE = 140;
	public static readonly TRANSFORM = 141;
	public static readonly REDUCE = 142;
	public static readonly USING = 143;
	public static readonly SERDE = 144;
	public static readonly SERDEPROPERTIES = 145;
	public static readonly RECORDREADER = 146;
	public static readonly RECORDWRITER = 147;
	public static readonly DELIMITED = 148;
	public static readonly FIELDS = 149;
	public static readonly TERMINATED = 150;
	public static readonly COLLECTION = 151;
	public static readonly ITEMS = 152;
	public static readonly KEYS = 153;
	public static readonly ESCAPED = 154;
	public static readonly LINES = 155;
	public static readonly SEPARATED = 156;
	public static readonly FUNCTION = 157;
	public static readonly EXTENDED = 158;
	public static readonly REFRESH = 159;
	public static readonly CLEAR = 160;
	public static readonly CACHE = 161;
	public static readonly UNCACHE = 162;
	public static readonly LAZY = 163;
	public static readonly FORMATTED = 164;
	public static readonly GLOBAL = 165;
	public static readonly TEMPORARY = 166;
	public static readonly OPTIONS = 167;
	public static readonly UNSET = 168;
	public static readonly TBLPROPERTIES = 169;
	public static readonly DBPROPERTIES = 170;
	public static readonly BUCKETS = 171;
	public static readonly SKEWED = 172;
	public static readonly STORED = 173;
	public static readonly DIRECTORIES = 174;
	public static readonly LOCATION = 175;
	public static readonly EXCHANGE = 176;
	public static readonly ARCHIVE = 177;
	public static readonly UNARCHIVE = 178;
	public static readonly FILEFORMAT = 179;
	public static readonly TOUCH = 180;
	public static readonly COMPACT = 181;
	public static readonly CONCATENATE = 182;
	public static readonly CHANGE = 183;
	public static readonly CASCADE = 184;
	public static readonly CONSTRAINT = 185;
	public static readonly RESTRICT = 186;
	public static readonly CLUSTERED = 187;
	public static readonly SORTED = 188;
	public static readonly PURGE = 189;
	public static readonly INPUTFORMAT = 190;
	public static readonly OUTPUTFORMAT = 191;
	public static readonly DATABASE = 192;
	public static readonly DATABASES = 193;
	public static readonly DFS = 194;
	public static readonly TRUNCATE = 195;
	public static readonly ANALYZE = 196;
	public static readonly COMPUTE = 197;
	public static readonly LIST = 198;
	public static readonly STATISTICS = 199;
	public static readonly PARTITIONED = 200;
	public static readonly EXTERNAL = 201;
	public static readonly DEFINED = 202;
	public static readonly REVOKE = 203;
	public static readonly GRANT = 204;
	public static readonly LOCK = 205;
	public static readonly UNLOCK = 206;
	public static readonly MSCK = 207;
	public static readonly REPAIR = 208;
	public static readonly RECOVER = 209;
	public static readonly EXPORT = 210;
	public static readonly IMPORT = 211;
	public static readonly LOAD = 212;
	public static readonly UNLOAD = 213;
	public static readonly ROLE = 214;
	public static readonly ROLES = 215;
	public static readonly COMPACTIONS = 216;
	public static readonly PRINCIPALS = 217;
	public static readonly TRANSACTIONS = 218;
	public static readonly INDEX = 219;
	public static readonly INDEXES = 220;
	public static readonly LOCKS = 221;
	public static readonly OPTION = 222;
	public static readonly ANTI = 223;
	public static readonly LOCAL = 224;
	public static readonly INPATH = 225;
	public static readonly WATERMARK = 226;
	public static readonly UNNEST = 227;
	public static readonly MATCH = 228;
	public static readonly NEXT = 229;
	public static readonly WITHIN = 230;
	public static readonly WS = 231;
	public static readonly SYSTEM = 232;
	public static readonly INCLUDING = 233;
	public static readonly EXCLUDING = 234;
	public static readonly OVERWRITING = 235;
	public static readonly CONSTRAINTS = 236;
	public static readonly GENERATED = 237;
	public static readonly WATERMARKS = 238;
	public static readonly CATALOG = 239;
	public static readonly LANGUAGE = 240;
	public static readonly JAVA = 241;
	public static readonly SCALA = 242;
	public static readonly PYTHON = 243;
	public static readonly JAR = 244;
	public static readonly FILE = 245;
	public static readonly PYTHON_FILES = 246;
	public static readonly PYTHON_REQUIREMENTS = 247;
	public static readonly PYTHON_DEPENDENCIES = 248;
	public static readonly PYTHON_JAR = 249;
	public static readonly PYTHON_ARCHIVES = 250;
	public static readonly PYTHON_PARAMETER = 251;
	public static readonly ENGINE = 252;
	public static readonly CATALOGS = 253;
	public static readonly VIEWS = 254;
	public static readonly JARS = 255;
	public static readonly PRIMARY = 256;
	public static readonly UNIQUE = 257;
	public static readonly KEY = 258;
	public static readonly PERIOD = 259;
	public static readonly SYSTEM_TIME = 260;
	public static readonly ENFORCED = 261;
	public static readonly METADATA = 262;
	public static readonly VIRTUAL = 263;
	public static readonly ZONE = 264;
	public static readonly TUMBLE = 265;
	public static readonly HOP = 266;
	public static readonly CUMULATE = 267;
	public static readonly DESCRIPTOR = 268;
	public static readonly TIMECOL = 269;
	public static readonly SIZE = 270;
	public static readonly OFFSET = 271;
	public static readonly STEP = 272;
	public static readonly SLIDE = 273;
	public static readonly SESSION = 274;
	public static readonly MATCH_RECOGNIZE = 275;
	public static readonly MEASURES = 276;
	public static readonly PATTERN = 277;
	public static readonly ONE = 278;
	public static readonly PER = 279;
	public static readonly KW_SKIP = 280;
	public static readonly PAST = 281;
	public static readonly DEFINE = 282;
	public static readonly STRING = 283;
	public static readonly ARRAY = 284;
	public static readonly MAP = 285;
	public static readonly CHAR = 286;
	public static readonly VARCHAR = 287;
	public static readonly BINARY = 288;
	public static readonly VARBINARY = 289;
	public static readonly BYTES = 290;
	public static readonly DECIMAL = 291;
	public static readonly DEC = 292;
	public static readonly NUMERIC = 293;
	public static readonly TINYINT = 294;
	public static readonly SMALLINT = 295;
	public static readonly INT = 296;
	public static readonly INTEGER = 297;
	public static readonly BIGINT = 298;
	public static readonly FLOAT = 299;
	public static readonly DOUBLE = 300;
	public static readonly DATE = 301;
	public static readonly TIME = 302;
	public static readonly TIMESTAMP = 303;
	public static readonly TIMESTAMP_LTZ = 304;
	public static readonly MULTISET = 305;
	public static readonly BOOLEAN = 306;
	public static readonly RAW = 307;
	public static readonly ROW = 308;
	public static readonly NULL = 309;
	public static readonly DATETIME = 310;
	public static readonly EQUAL_SYMBOL = 311;
	public static readonly GREATER_SYMBOL = 312;
	public static readonly LESS_SYMBOL = 313;
	public static readonly EXCLAMATION_SYMBOL = 314;
	public static readonly BIT_NOT_OP = 315;
	public static readonly BIT_OR_OP = 316;
	public static readonly BIT_AND_OP = 317;
	public static readonly BIT_XOR_OP = 318;
	public static readonly DOT = 319;
	public static readonly LS_BRACKET = 320;
	public static readonly RS_BRACKET = 321;
	public static readonly LR_BRACKET = 322;
	public static readonly RR_BRACKET = 323;
	public static readonly LB_BRACKET = 324;
	public static readonly RB_BRACKET = 325;
	public static readonly COMMA = 326;
	public static readonly SEMICOLON = 327;
	public static readonly AT_SIGN = 328;
	public static readonly SINGLE_QUOTE_SYMB = 329;
	public static readonly DOUBLE_QUOTE_SYMB = 330;
	public static readonly REVERSE_QUOTE_SYMB = 331;
	public static readonly COLON_SYMB = 332;
	public static readonly ASTERISK_SIGN = 333;
	public static readonly UNDERLINE_SIGN = 334;
	public static readonly HYPNEN_SIGN = 335;
	public static readonly ADD_SIGN = 336;
	public static readonly PENCENT_SIGN = 337;
	public static readonly DOUBLE_VERTICAL_SIGN = 338;
	public static readonly DOUBLE_HYPNEN_SIGN = 339;
	public static readonly SLASH_SIGN = 340;
	public static readonly QUESTION_MARK_SIGN = 341;
	public static readonly DOT_ID = 342;
	public static readonly STRING_LITERAL = 343;
	public static readonly DIG_LITERAL = 344;
	public static readonly REAL_LITERAL = 345;
	public static readonly BIT_STRING = 346;
	public static readonly ID_LITERAL = 347;
	public static readonly FILE_PATH = 348;
	public static readonly DOUBLE_ARROW = 349;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [ null, null, null, null, 
                                                   "'SELECT'", "'FROM'", 
                                                   "'ADD'", "'AS'", "'ALL'", 
                                                   "'ANY'", "'DISTINCT'", 
                                                   "'WHERE'", "'GROUP'", 
                                                   "'BY'", "'GROUPING'", 
                                                   "'SETS'", "'CUBE'", "'ROLLUP'", 
                                                   "'ORDER'", "'HAVING'", 
                                                   "'LIMIT'", "'AT'", "'OR'", 
                                                   "'AND'", "'IN'", "'NOT'", 
                                                   "'NO'", "'EXISTS'", "'BETWEEN'", 
                                                   "'LIKE'", "'RLIKE'", 
                                                   "'IS'", "'TRUE'", "'FALSE'", 
                                                   "'NULLS'", "'ASC'", "'DESC'", 
                                                   "'FOR'", "'INTERVAL'", 
                                                   "'CASE'", "'WHEN'", "'THEN'", 
                                                   "'ELSE'", "'BEGIN'", 
                                                   "'END'", "'JOIN'", "'CROSS'", 
                                                   "'OUTER'", "'INNER'", 
                                                   "'LEFT'", "'SEMI'", "'RIGHT'", 
                                                   "'FULL'", "'USER'", "'NATURAL'", 
                                                   "'ON'", "'PIVOT'", "'LATERAL'", 
                                                   "'WINDOW'", "'OVER'", 
                                                   "'PARTITION'", "'RANGE'", 
                                                   "'ROWS'", "'UNBOUNDED'", 
                                                   "'PRECEDING'", "'FOLLOWING'", 
                                                   "'CURRENT'", "'FIRST'", 
                                                   "'AFTER'", "'LAST'", 
                                                   "'WITH'", "'WITHOUT'", 
                                                   "'VALUES'", "'CREATE'", 
                                                   "'TABLE'", "'DIRECTORY'", 
                                                   "'VIEW'", "'REPLACE'", 
                                                   "'EXECUTE'", "'STATEMENT'", 
                                                   "'INSERT'", "'DELETE'", 
                                                   "'REMOVE'", "'INTO'", 
                                                   "'DESCRIBE'", "'EXPLAIN'", 
                                                   "'PLAN'", "'CHANGELOG_MODE'", 
                                                   "'JSON_EXECUTION_PLAN'", 
                                                   "'ESTIMATED_COST'", "'FORMAT'", 
                                                   "'LOGICAL'", "'CODEGEN'", 
                                                   "'COST'", "'CAST'", "'SHOW'", 
                                                   "'TABLES'", "'COLUMNS'", 
                                                   "'COLUMN'", "'USE'", 
                                                   "'MODULE'", "'MODULES'", 
                                                   "'PARTITIONS'", "'FUNCTIONS'", 
                                                   "'DROP'", "'UNION'", 
                                                   "'EXCEPT'", "'SETMINUS'", 
                                                   "'INTERSECT'", "'TO'", 
                                                   "'TABLESAMPLE'", "'STRATIFY'", 
                                                   "'ALTER'", "'RENAME'", 
                                                   "'STRUCT'", "'COMMENT'", 
                                                   "'SET'", "'RESET'", "'DATA'", 
                                                   "'START'", "'TRANSACTION'", 
                                                   "'COMMIT'", "'ROLLBACK'", 
                                                   "'MACRO'", "'IGNORE'", 
                                                   "'BOTH'", "'LEADING'", 
                                                   "'TRAILING'", "'IF'", 
                                                   "'POSITION'", "'EXTRACT'", 
                                                   "'MINUS'", "'DIV'", "'PERCENTLIT'", 
                                                   "'BUCKET'", "'OUT'", 
                                                   "'OF'", "'SORT'", "'CLUSTER'", 
                                                   "'DISTRIBUTE'", "'OVERWRITE'", 
                                                   "'TRANSFORM'", "'REDUCE'", 
                                                   "'USING'", "'SERDE'", 
                                                   "'SERDEPROPERTIES'", 
                                                   "'RECORDREADER'", "'RECORDWRITER'", 
                                                   "'DELIMITED'", "'FIELDS'", 
                                                   "'TERMINATED'", "'COLLECTION'", 
                                                   "'ITEMS'", "'KEYS'", 
                                                   "'ESCAPED'", "'LINES'", 
                                                   "'SEPARATED'", "'FUNCTION'", 
                                                   "'EXTENDED'", "'REFRESH'", 
                                                   "'CLEAR'", "'CACHE'", 
                                                   "'UNCACHE'", "'LAZY'", 
                                                   "'FORMATTED'", "'GLOBAL'", 
                                                   "'TEMPORARY'", "'OPTIONS'", 
                                                   "'UNSET'", "'TBLPROPERTIES'", 
                                                   "'DBPROPERTIES'", "'BUCKETS'", 
                                                   "'SKEWED'", "'STORED'", 
                                                   "'DIRECTORIES'", "'LOCATION'", 
                                                   "'EXCHANGE'", "'ARCHIVE'", 
                                                   "'UNARCHIVE'", "'FILEFORMAT'", 
                                                   "'TOUCH'", "'COMPACT'", 
                                                   "'CONCATENATE'", "'CHANGE'", 
                                                   "'CASCADE'", "'CONSTRAINT'", 
                                                   "'RESTRICT'", "'CLUSTERED'", 
                                                   "'SORTED'", "'PURGE'", 
                                                   "'INPUTFORMAT'", "'OUTPUTFORMAT'", 
                                                   "'DATABASE'", "'DATABASES'", 
                                                   "'DFS'", "'TRUNCATE'", 
                                                   "'ANALYZE'", "'COMPUTE'", 
                                                   "'LIST'", "'STATISTICS'", 
                                                   "'PARTITIONED'", "'EXTERNAL'", 
                                                   "'DEFINED'", "'REVOKE'", 
                                                   "'GRANT'", "'LOCK'", 
                                                   "'UNLOCK'", "'MSCK'", 
                                                   "'REPAIR'", "'RECOVER'", 
                                                   "'EXPORT'", "'IMPORT'", 
                                                   "'LOAD'", "'UNLOAD'", 
                                                   "'ROLE'", "'ROLES'", 
                                                   "'COMPACTIONS'", "'PRINCIPALS'", 
                                                   "'TRANSACTIONS'", "'INDEX'", 
                                                   "'INDEXES'", "'LOCKS'", 
                                                   "'OPTION'", "'ANTI'", 
                                                   "'LOCAL'", "'INPATH'", 
                                                   "'WATERMARK'", "'UNNEST'", 
                                                   "'MATCH'", "'NEXT'", 
                                                   "'WITHIN'", "'WS'", "'SYSTEM'", 
                                                   "'INCLUDING'", "'EXCLUDING'", 
                                                   "'OVERWRITING'", "'CONSTRAINTS'", 
                                                   "'GENERATED'", "'WATERMARKS'", 
                                                   "'CATALOG'", "'LANGUAGE'", 
                                                   "'JAVA'", "'SCALA'", 
                                                   "'PYTHON'", "'JAR'", 
                                                   "'FILE'", "'PYTHON_FILES'", 
                                                   "'PYTHON_REQUIREMENTS'", 
                                                   "'PYTHON_DEPENDENCIES'", 
                                                   "'PYTHON_JAR'", "'PYTHON_ARCHIVES'", 
                                                   "'PYTHON_PARAMETER'", 
                                                   "'ENGINE'", "'CATALOGS'", 
                                                   "'VIEWS'", "'JARS'", 
                                                   "'PRIMARY'", "'UNIQUE'", 
                                                   "'KEY'", "'PERIOD'", 
                                                   "'SYSTEM_TIME'", "'ENFORCED'", 
                                                   "'METADATA'", "'VIRTUAL'", 
                                                   "'ZONE'", "'TUMBLE'", 
                                                   "'HOP'", "'CUMULATE'", 
                                                   "'DESCRIPTOR'", "'TIMECOL'", 
                                                   "'SIZE'", "'OFFSET'", 
                                                   "'STEP'", "'SLIDE'", 
                                                   "'SESSION'", "'MATCH_RECOGNIZE'", 
                                                   "'MEASURES'", "'PATTERN'", 
                                                   "'ONE'", "'PER'", "'SKIP'", 
                                                   "'PAST'", "'DEFINE'", 
                                                   "'STRING'", "'ARRAY'", 
                                                   "'MAP'", "'CHAR'", "'VARCHAR'", 
                                                   "'BINARY'", "'VARBINARY'", 
                                                   "'BYTES'", "'DECIMAL'", 
                                                   "'DEC'", "'NUMERIC'", 
                                                   "'TINYINT'", "'SMALLINT'", 
                                                   "'INT'", "'INTEGER'", 
                                                   "'BIGINT'", "'FLOAT'", 
                                                   "'DOUBLE'", "'DATE'", 
                                                   "'TIME'", "'TIMESTAMP'", 
                                                   "'TIMESTAMP_LTZ'", "'MULTISET'", 
                                                   "'BOOLEAN'", "'RAW'", 
                                                   "'ROW'", "'NULL'", "'DATETIME'", 
                                                   "'='", "'>'", "'<'", 
                                                   "'!'", "'~'", "'|'", 
                                                   "'&'", "'^'", "'.'", 
                                                   "'['", "']'", "'('", 
                                                   "')'", "'{'", "'}'", 
                                                   "','", "';'", "'@'", 
                                                   "'''", "'\"'", "'`'", 
                                                   "':'", "'*'", "'_'", 
                                                   "'-'", "'+'", "'%'", 
                                                   "'||'", "'--'", "'/'", 
                                                   "'?'", null, null, null, 
                                                   null, null, null, null, 
                                                   "'=>'" ];
	public static readonly symbolicNames: string[] = [ null, "SPACE", "COMMENT_INPUT", 
                                                    "LINE_COMMENT", "SELECT", 
                                                    "FROM", "ADD", "AS", 
                                                    "ALL", "ANY", "DISTINCT", 
                                                    "WHERE", "GROUP", "BY", 
                                                    "GROUPING", "SETS", 
                                                    "CUBE", "ROLLUP", "ORDER", 
                                                    "HAVING", "LIMIT", "AT", 
                                                    "OR", "AND", "IN", "NOT", 
                                                    "NO", "EXISTS", "BETWEEN", 
                                                    "LIKE", "RLIKE", "IS", 
                                                    "TRUE", "FALSE", "NULLS", 
                                                    "ASC", "DESC", "FOR", 
                                                    "INTERVAL", "CASE", 
                                                    "WHEN", "THEN", "ELSE", 
                                                    "BEGIN", "END", "JOIN", 
                                                    "CROSS", "OUTER", "INNER", 
                                                    "LEFT", "SEMI", "RIGHT", 
                                                    "FULL", "USER", "NATURAL", 
                                                    "ON", "PIVOT", "LATERAL", 
                                                    "WINDOW", "OVER", "PARTITION", 
                                                    "RANGE", "ROWS", "UNBOUNDED", 
                                                    "PRECEDING", "FOLLOWING", 
                                                    "CURRENT", "FIRST", 
                                                    "AFTER", "LAST", "WITH", 
                                                    "WITHOUT", "VALUES", 
                                                    "CREATE", "TABLE", "DIRECTORY", 
                                                    "VIEW", "REPLACE", "EXECUTE", 
                                                    "STATEMENT", "INSERT", 
                                                    "DELETE", "REMOVE", 
                                                    "INTO", "DESCRIBE", 
                                                    "EXPLAIN", "PLAN", "CHANGELOG_MODE", 
                                                    "JSON_EXECUTION_PLAN", 
                                                    "ESTIMATED_COST", "FORMAT", 
                                                    "LOGICAL", "CODEGEN", 
                                                    "COST", "CAST", "SHOW", 
                                                    "TABLES", "COLUMNS", 
                                                    "COLUMN", "USE", "MODULE", 
                                                    "MODULES", "PARTITIONS", 
                                                    "FUNCTIONS", "DROP", 
                                                    "UNION", "EXCEPT", "SETMINUS", 
                                                    "INTERSECT", "TO", "TABLESAMPLE", 
                                                    "STRATIFY", "ALTER", 
                                                    "RENAME", "STRUCT", 
                                                    "COMMENT", "SET", "RESET", 
                                                    "DATA", "START", "TRANSACTION", 
                                                    "COMMIT", "ROLLBACK", 
                                                    "MACRO", "IGNORE", "BOTH", 
                                                    "LEADING", "TRAILING", 
                                                    "IF", "POSITION", "EXTRACT", 
                                                    "MINUS", "DIV", "PERCENTLIT", 
                                                    "BUCKET", "OUT", "OF", 
                                                    "SORT", "CLUSTER", "DISTRIBUTE", 
                                                    "OVERWRITE", "TRANSFORM", 
                                                    "REDUCE", "USING", "SERDE", 
                                                    "SERDEPROPERTIES", "RECORDREADER", 
                                                    "RECORDWRITER", "DELIMITED", 
                                                    "FIELDS", "TERMINATED", 
                                                    "COLLECTION", "ITEMS", 
                                                    "KEYS", "ESCAPED", "LINES", 
                                                    "SEPARATED", "FUNCTION", 
                                                    "EXTENDED", "REFRESH", 
                                                    "CLEAR", "CACHE", "UNCACHE", 
                                                    "LAZY", "FORMATTED", 
                                                    "GLOBAL", "TEMPORARY", 
                                                    "OPTIONS", "UNSET", 
                                                    "TBLPROPERTIES", "DBPROPERTIES", 
                                                    "BUCKETS", "SKEWED", 
                                                    "STORED", "DIRECTORIES", 
                                                    "LOCATION", "EXCHANGE", 
                                                    "ARCHIVE", "UNARCHIVE", 
                                                    "FILEFORMAT", "TOUCH", 
                                                    "COMPACT", "CONCATENATE", 
                                                    "CHANGE", "CASCADE", 
                                                    "CONSTRAINT", "RESTRICT", 
                                                    "CLUSTERED", "SORTED", 
                                                    "PURGE", "INPUTFORMAT", 
                                                    "OUTPUTFORMAT", "DATABASE", 
                                                    "DATABASES", "DFS", 
                                                    "TRUNCATE", "ANALYZE", 
                                                    "COMPUTE", "LIST", "STATISTICS", 
                                                    "PARTITIONED", "EXTERNAL", 
                                                    "DEFINED", "REVOKE", 
                                                    "GRANT", "LOCK", "UNLOCK", 
                                                    "MSCK", "REPAIR", "RECOVER", 
                                                    "EXPORT", "IMPORT", 
                                                    "LOAD", "UNLOAD", "ROLE", 
                                                    "ROLES", "COMPACTIONS", 
                                                    "PRINCIPALS", "TRANSACTIONS", 
                                                    "INDEX", "INDEXES", 
                                                    "LOCKS", "OPTION", "ANTI", 
                                                    "LOCAL", "INPATH", "WATERMARK", 
                                                    "UNNEST", "MATCH", "NEXT", 
                                                    "WITHIN", "WS", "SYSTEM", 
                                                    "INCLUDING", "EXCLUDING", 
                                                    "OVERWRITING", "CONSTRAINTS", 
                                                    "GENERATED", "WATERMARKS", 
                                                    "CATALOG", "LANGUAGE", 
                                                    "JAVA", "SCALA", "PYTHON", 
                                                    "JAR", "FILE", "PYTHON_FILES", 
                                                    "PYTHON_REQUIREMENTS", 
                                                    "PYTHON_DEPENDENCIES", 
                                                    "PYTHON_JAR", "PYTHON_ARCHIVES", 
                                                    "PYTHON_PARAMETER", 
                                                    "ENGINE", "CATALOGS", 
                                                    "VIEWS", "JARS", "PRIMARY", 
                                                    "UNIQUE", "KEY", "PERIOD", 
                                                    "SYSTEM_TIME", "ENFORCED", 
                                                    "METADATA", "VIRTUAL", 
                                                    "ZONE", "TUMBLE", "HOP", 
                                                    "CUMULATE", "DESCRIPTOR", 
                                                    "TIMECOL", "SIZE", "OFFSET", 
                                                    "STEP", "SLIDE", "SESSION", 
                                                    "MATCH_RECOGNIZE", "MEASURES", 
                                                    "PATTERN", "ONE", "PER", 
                                                    "KW_SKIP", "PAST", "DEFINE", 
                                                    "STRING", "ARRAY", "MAP", 
                                                    "CHAR", "VARCHAR", "BINARY", 
                                                    "VARBINARY", "BYTES", 
                                                    "DECIMAL", "DEC", "NUMERIC", 
                                                    "TINYINT", "SMALLINT", 
                                                    "INT", "INTEGER", "BIGINT", 
                                                    "FLOAT", "DOUBLE", "DATE", 
                                                    "TIME", "TIMESTAMP", 
                                                    "TIMESTAMP_LTZ", "MULTISET", 
                                                    "BOOLEAN", "RAW", "ROW", 
                                                    "NULL", "DATETIME", 
                                                    "EQUAL_SYMBOL", "GREATER_SYMBOL", 
                                                    "LESS_SYMBOL", "EXCLAMATION_SYMBOL", 
                                                    "BIT_NOT_OP", "BIT_OR_OP", 
                                                    "BIT_AND_OP", "BIT_XOR_OP", 
                                                    "DOT", "LS_BRACKET", 
                                                    "RS_BRACKET", "LR_BRACKET", 
                                                    "RR_BRACKET", "LB_BRACKET", 
                                                    "RB_BRACKET", "COMMA", 
                                                    "SEMICOLON", "AT_SIGN", 
                                                    "SINGLE_QUOTE_SYMB", 
                                                    "DOUBLE_QUOTE_SYMB", 
                                                    "REVERSE_QUOTE_SYMB", 
                                                    "COLON_SYMB", "ASTERISK_SIGN", 
                                                    "UNDERLINE_SIGN", "HYPNEN_SIGN", 
                                                    "ADD_SIGN", "PENCENT_SIGN", 
                                                    "DOUBLE_VERTICAL_SIGN", 
                                                    "DOUBLE_HYPNEN_SIGN", 
                                                    "SLASH_SIGN", "QUESTION_MARK_SIGN", 
                                                    "DOT_ID", "STRING_LITERAL", 
                                                    "DIG_LITERAL", "REAL_LITERAL", 
                                                    "BIT_STRING", "ID_LITERAL", 
                                                    "FILE_PATH", "DOUBLE_ARROW" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"SPACE", "COMMENT_INPUT", "LINE_COMMENT", "SELECT", "FROM", "ADD", "AS", 
		"ALL", "ANY", "DISTINCT", "WHERE", "GROUP", "BY", "GROUPING", "SETS", 
		"CUBE", "ROLLUP", "ORDER", "HAVING", "LIMIT", "AT", "OR", "AND", "IN", 
		"NOT", "NO", "EXISTS", "BETWEEN", "LIKE", "RLIKE", "IS", "TRUE", "FALSE", 
		"NULLS", "ASC", "DESC", "FOR", "INTERVAL", "CASE", "WHEN", "THEN", "ELSE", 
		"BEGIN", "END", "JOIN", "CROSS", "OUTER", "INNER", "LEFT", "SEMI", "RIGHT", 
		"FULL", "USER", "NATURAL", "ON", "PIVOT", "LATERAL", "WINDOW", "OVER", 
		"PARTITION", "RANGE", "ROWS", "UNBOUNDED", "PRECEDING", "FOLLOWING", "CURRENT", 
		"FIRST", "AFTER", "LAST", "WITH", "WITHOUT", "VALUES", "CREATE", "TABLE", 
		"DIRECTORY", "VIEW", "REPLACE", "EXECUTE", "STATEMENT", "INSERT", "DELETE", 
		"REMOVE", "INTO", "DESCRIBE", "EXPLAIN", "PLAN", "CHANGELOG_MODE", "JSON_EXECUTION_PLAN", 
		"ESTIMATED_COST", "FORMAT", "LOGICAL", "CODEGEN", "COST", "CAST", "SHOW", 
		"TABLES", "COLUMNS", "COLUMN", "USE", "MODULE", "MODULES", "PARTITIONS", 
		"FUNCTIONS", "DROP", "UNION", "EXCEPT", "SETMINUS", "INTERSECT", "TO", 
		"TABLESAMPLE", "STRATIFY", "ALTER", "RENAME", "STRUCT", "COMMENT", "SET", 
		"RESET", "DATA", "START", "TRANSACTION", "COMMIT", "ROLLBACK", "MACRO", 
		"IGNORE", "BOTH", "LEADING", "TRAILING", "IF", "POSITION", "EXTRACT", 
		"MINUS", "DIV", "PERCENTLIT", "BUCKET", "OUT", "OF", "SORT", "CLUSTER", 
		"DISTRIBUTE", "OVERWRITE", "TRANSFORM", "REDUCE", "USING", "SERDE", "SERDEPROPERTIES", 
		"RECORDREADER", "RECORDWRITER", "DELIMITED", "FIELDS", "TERMINATED", "COLLECTION", 
		"ITEMS", "KEYS", "ESCAPED", "LINES", "SEPARATED", "FUNCTION", "EXTENDED", 
		"REFRESH", "CLEAR", "CACHE", "UNCACHE", "LAZY", "FORMATTED", "GLOBAL", 
		"TEMPORARY", "OPTIONS", "UNSET", "TBLPROPERTIES", "DBPROPERTIES", "BUCKETS", 
		"SKEWED", "STORED", "DIRECTORIES", "LOCATION", "EXCHANGE", "ARCHIVE", 
		"UNARCHIVE", "FILEFORMAT", "TOUCH", "COMPACT", "CONCATENATE", "CHANGE", 
		"CASCADE", "CONSTRAINT", "RESTRICT", "CLUSTERED", "SORTED", "PURGE", "INPUTFORMAT", 
		"OUTPUTFORMAT", "DATABASE", "DATABASES", "DFS", "TRUNCATE", "ANALYZE", 
		"COMPUTE", "LIST", "STATISTICS", "PARTITIONED", "EXTERNAL", "DEFINED", 
		"REVOKE", "GRANT", "LOCK", "UNLOCK", "MSCK", "REPAIR", "RECOVER", "EXPORT", 
		"IMPORT", "LOAD", "UNLOAD", "ROLE", "ROLES", "COMPACTIONS", "PRINCIPALS", 
		"TRANSACTIONS", "INDEX", "INDEXES", "LOCKS", "OPTION", "ANTI", "LOCAL", 
		"INPATH", "WATERMARK", "UNNEST", "MATCH", "NEXT", "WITHIN", "WS", "SYSTEM", 
		"INCLUDING", "EXCLUDING", "OVERWRITING", "CONSTRAINTS", "GENERATED", "WATERMARKS", 
		"CATALOG", "LANGUAGE", "JAVA", "SCALA", "PYTHON", "JAR", "FILE", "PYTHON_FILES", 
		"PYTHON_REQUIREMENTS", "PYTHON_DEPENDENCIES", "PYTHON_JAR", "PYTHON_ARCHIVES", 
		"PYTHON_PARAMETER", "ENGINE", "CATALOGS", "VIEWS", "JARS", "PRIMARY", 
		"UNIQUE", "KEY", "PERIOD", "SYSTEM_TIME", "ENFORCED", "METADATA", "VIRTUAL", 
		"ZONE", "TUMBLE", "HOP", "CUMULATE", "DESCRIPTOR", "TIMECOL", "SIZE", 
		"OFFSET", "STEP", "SLIDE", "SESSION", "MATCH_RECOGNIZE", "MEASURES", "PATTERN", 
		"ONE", "PER", "KW_SKIP", "PAST", "DEFINE", "STRING", "ARRAY", "MAP", "CHAR", 
		"VARCHAR", "BINARY", "VARBINARY", "BYTES", "DECIMAL", "DEC", "NUMERIC", 
		"TINYINT", "SMALLINT", "INT", "INTEGER", "BIGINT", "FLOAT", "DOUBLE", 
		"DATE", "TIME", "TIMESTAMP", "TIMESTAMP_LTZ", "MULTISET", "BOOLEAN", "RAW", 
		"ROW", "NULL", "DATETIME", "EQUAL_SYMBOL", "GREATER_SYMBOL", "LESS_SYMBOL", 
		"EXCLAMATION_SYMBOL", "BIT_NOT_OP", "BIT_OR_OP", "BIT_AND_OP", "BIT_XOR_OP", 
		"DOT", "LS_BRACKET", "RS_BRACKET", "LR_BRACKET", "RR_BRACKET", "LB_BRACKET", 
		"RB_BRACKET", "COMMA", "SEMICOLON", "AT_SIGN", "SINGLE_QUOTE_SYMB", "DOUBLE_QUOTE_SYMB", 
		"REVERSE_QUOTE_SYMB", "COLON_SYMB", "ASTERISK_SIGN", "UNDERLINE_SIGN", 
		"HYPNEN_SIGN", "ADD_SIGN", "PENCENT_SIGN", "DOUBLE_VERTICAL_SIGN", "DOUBLE_HYPNEN_SIGN", 
		"SLASH_SIGN", "QUESTION_MARK_SIGN", "DOT_ID", "STRING_LITERAL", "DIG_LITERAL", 
		"REAL_LITERAL", "BIT_STRING", "ID_LITERAL", "FILE_PATH", "DOUBLE_ARROW", 
		"FILE_PATH_STRING", "JAR_FILE_PARTTARN", "EXPONENT_NUM_PART", "ID_LITERAL_FRAG", 
		"DEC_DIGIT", "DEC_LETTER", "DQUOTA_STRING", "SQUOTA_STRING", "BIT_STRING_L", 
		"BQUOTA_STRING",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, FlinkSqlLexer._ATN, FlinkSqlLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "FlinkSqlLexer.g4"; }

	public get literalNames(): (string | null)[] { return FlinkSqlLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return FlinkSqlLexer.symbolicNames; }
	public get ruleNames(): string[] { return FlinkSqlLexer.ruleNames; }

	public get serializedATN(): number[] { return FlinkSqlLexer._serializedATN; }

	public get channelNames(): string[] { return FlinkSqlLexer.channelNames; }

	public get modeNames(): string[] { return FlinkSqlLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,349,3295,6,-1,2,
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
	2,355,7,355,2,356,7,356,2,357,7,357,2,358,7,358,1,0,4,0,721,8,0,11,0,12,
	0,722,1,0,1,0,1,1,1,1,1,1,1,1,5,1,731,8,1,10,1,12,1,734,9,1,1,1,1,1,1,1,
	1,1,1,1,1,2,1,2,1,2,3,2,744,8,2,1,2,5,2,747,8,2,10,2,12,2,750,9,2,1,2,3,
	2,753,8,2,1,2,1,2,3,2,757,8,2,1,2,1,2,1,2,1,2,3,2,763,8,2,1,2,1,2,3,2,767,
	8,2,3,2,769,8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,
	1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,
	11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
	1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,
	16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,
	1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,
	22,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,26,1,26,
	1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,
	28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,31,1,31,
	1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,
	33,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,37,
	1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,39,1,
	39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,42,
	1,42,1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,
	45,1,45,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,1,47,1,47,1,47,
	1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,50,1,
	50,1,50,1,50,1,50,1,50,1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,
	1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,54,1,54,1,54,1,55,1,55,1,55,1,
	55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,
	1,57,1,57,1,57,1,58,1,58,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,59,1,
	59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,
	1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,1,
	63,1,63,1,63,1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,
	1,64,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,66,1,66,1,66,1,66,1,66,1,
	66,1,67,1,67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,1,69,1,69,1,69,
	1,69,1,69,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,71,1,71,1,71,1,71,1,
	71,1,71,1,71,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,73,1,73,1,73,1,73,1,73,
	1,73,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,75,1,75,1,75,1,
	75,1,75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,77,1,77,1,77,1,77,1,77,
	1,77,1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,79,1,
	79,1,79,1,79,1,79,1,79,1,79,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,81,1,81,
	1,81,1,81,1,81,1,81,1,81,1,82,1,82,1,82,1,82,1,82,1,83,1,83,1,83,1,83,1,
	83,1,83,1,83,1,83,1,83,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,85,1,85,
	1,85,1,85,1,85,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,
	86,1,86,1,86,1,86,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,
	1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,88,1,88,1,88,1,88,1,88,1,
	88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,89,1,89,1,89,1,89,1,89,
	1,89,1,89,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,91,1,91,1,91,1,91,1,
	91,1,91,1,91,1,91,1,92,1,92,1,92,1,92,1,92,1,93,1,93,1,93,1,93,1,93,1,94,
	1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,96,1,96,1,96,1,
	96,1,96,1,96,1,96,1,96,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,98,1,98,1,98,
	1,98,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,100,1,100,1,100,1,100,1,100,1,
	100,1,100,1,100,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,
	101,1,101,1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,
	103,1,103,1,103,1,103,1,103,1,104,1,104,1,104,1,104,1,104,1,104,1,105,1,
	105,1,105,1,105,1,105,1,105,1,105,1,106,1,106,1,106,1,106,1,106,1,106,1,
	106,1,106,1,106,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,
	107,1,108,1,108,1,108,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,
	109,1,109,1,109,1,109,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,
	110,1,111,1,111,1,111,1,111,1,111,1,111,1,112,1,112,1,112,1,112,1,112,1,
	112,1,112,1,113,1,113,1,113,1,113,1,113,1,113,1,113,1,114,1,114,1,114,1,
	114,1,114,1,114,1,114,1,114,1,115,1,115,1,115,1,115,1,116,1,116,1,116,1,
	116,1,116,1,116,1,117,1,117,1,117,1,117,1,117,1,118,1,118,1,118,1,118,1,
	118,1,118,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,
	119,1,119,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,121,1,121,1,121,1,
	121,1,121,1,121,1,121,1,121,1,121,1,122,1,122,1,122,1,122,1,122,1,122,1,
	123,1,123,1,123,1,123,1,123,1,123,1,123,1,124,1,124,1,124,1,124,1,124,1,
	125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,126,1,126,1,126,1,126,1,
	126,1,126,1,126,1,126,1,126,1,127,1,127,1,127,1,128,1,128,1,128,1,128,1,
	128,1,128,1,128,1,128,1,128,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,
	129,1,130,1,130,1,130,1,130,1,130,1,130,1,131,1,131,1,131,1,131,1,132,1,
	132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,133,1,133,1,
	133,1,133,1,133,1,133,1,133,1,134,1,134,1,134,1,134,1,135,1,135,1,135,1,
	136,1,136,1,136,1,136,1,136,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,
	137,1,138,1,138,1,138,1,138,1,138,1,138,1,138,1,138,1,138,1,138,1,138,1,
	139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,140,1,140,1,
	140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,141,1,141,1,141,1,141,1,
	141,1,141,1,141,1,142,1,142,1,142,1,142,1,142,1,142,1,143,1,143,1,143,1,
	143,1,143,1,143,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,
	144,1,144,1,144,1,144,1,144,1,144,1,144,1,145,1,145,1,145,1,145,1,145,1,
	145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,146,1,146,1,146,1,146,1,
	146,1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,147,1,147,1,147,1,
	147,1,147,1,147,1,147,1,147,1,147,1,147,1,148,1,148,1,148,1,148,1,148,1,
	148,1,148,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,
	149,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,
	151,1,151,1,151,1,151,1,151,1,151,1,152,1,152,1,152,1,152,1,152,1,153,1,
	153,1,153,1,153,1,153,1,153,1,153,1,153,1,154,1,154,1,154,1,154,1,154,1,
	154,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,156,1,
	156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,157,1,157,1,157,1,157,1,
	157,1,157,1,157,1,157,1,157,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,
	158,1,159,1,159,1,159,1,159,1,159,1,159,1,160,1,160,1,160,1,160,1,160,1,
	160,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,162,1,162,1,162,1,
	162,1,162,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,
	164,1,164,1,164,1,164,1,164,1,164,1,164,1,165,1,165,1,165,1,165,1,165,1,
	165,1,165,1,165,1,165,1,165,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,
	166,1,167,1,167,1,167,1,167,1,167,1,167,1,168,1,168,1,168,1,168,1,168,1,
	168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,169,1,169,1,169,1,
	169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,170,1,170,1,
	170,1,170,1,170,1,170,1,170,1,170,1,171,1,171,1,171,1,171,1,171,1,171,1,
	171,1,172,1,172,1,172,1,172,1,172,1,172,1,172,1,173,1,173,1,173,1,173,1,
	173,1,173,1,173,1,173,1,173,1,173,1,173,1,173,1,174,1,174,1,174,1,174,1,
	174,1,174,1,174,1,174,1,174,1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,
	175,1,175,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,177,1,177,1,
	177,1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,178,1,178,1,178,1,178,1,
	178,1,178,1,178,1,178,1,178,1,178,1,178,1,179,1,179,1,179,1,179,1,179,1,
	179,1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,181,1,181,1,181,1,
	181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,182,1,182,1,182,1,
	182,1,182,1,182,1,182,1,183,1,183,1,183,1,183,1,183,1,183,1,183,1,183,1,
	184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,185,1,
	185,1,185,1,185,1,185,1,185,1,185,1,185,1,185,1,186,1,186,1,186,1,186,1,
	186,1,186,1,186,1,186,1,186,1,186,1,187,1,187,1,187,1,187,1,187,1,187,1,
	187,1,188,1,188,1,188,1,188,1,188,1,188,1,189,1,189,1,189,1,189,1,189,1,
	189,1,189,1,189,1,189,1,189,1,189,1,189,1,190,1,190,1,190,1,190,1,190,1,
	190,1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,191,1,191,1,191,1,191,1,
	191,1,191,1,191,1,191,1,191,1,192,1,192,1,192,1,192,1,192,1,192,1,192,1,
	192,1,192,1,192,1,193,1,193,1,193,1,193,1,194,1,194,1,194,1,194,1,194,1,
	194,1,194,1,194,1,194,1,195,1,195,1,195,1,195,1,195,1,195,1,195,1,195,1,
	196,1,196,1,196,1,196,1,196,1,196,1,196,1,196,1,197,1,197,1,197,1,197,1,
	197,1,198,1,198,1,198,1,198,1,198,1,198,1,198,1,198,1,198,1,198,1,198,1,
	199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,
	200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,201,1,201,1,201,1,
	201,1,201,1,201,1,201,1,201,1,202,1,202,1,202,1,202,1,202,1,202,1,202,1,
	203,1,203,1,203,1,203,1,203,1,203,1,204,1,204,1,204,1,204,1,204,1,205,1,
	205,1,205,1,205,1,205,1,205,1,205,1,206,1,206,1,206,1,206,1,206,1,207,1,
	207,1,207,1,207,1,207,1,207,1,207,1,208,1,208,1,208,1,208,1,208,1,208,1,
	208,1,208,1,209,1,209,1,209,1,209,1,209,1,209,1,209,1,210,1,210,1,210,1,
	210,1,210,1,210,1,210,1,211,1,211,1,211,1,211,1,211,1,212,1,212,1,212,1,
	212,1,212,1,212,1,212,1,213,1,213,1,213,1,213,1,213,1,214,1,214,1,214,1,
	214,1,214,1,214,1,215,1,215,1,215,1,215,1,215,1,215,1,215,1,215,1,215,1,
	215,1,215,1,215,1,216,1,216,1,216,1,216,1,216,1,216,1,216,1,216,1,216,1,
	216,1,216,1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,
	217,1,217,1,217,1,218,1,218,1,218,1,218,1,218,1,218,1,219,1,219,1,219,1,
	219,1,219,1,219,1,219,1,219,1,220,1,220,1,220,1,220,1,220,1,220,1,221,1,
	221,1,221,1,221,1,221,1,221,1,221,1,222,1,222,1,222,1,222,1,222,1,223,1,
	223,1,223,1,223,1,223,1,223,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,
	225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,226,1,226,1,
	226,1,226,1,226,1,226,1,226,1,227,1,227,1,227,1,227,1,227,1,227,1,228,1,
	228,1,228,1,228,1,228,1,229,1,229,1,229,1,229,1,229,1,229,1,229,1,230,1,
	230,1,230,1,231,1,231,1,231,1,231,1,231,1,231,1,231,1,232,1,232,1,232,1,
	232,1,232,1,232,1,232,1,232,1,232,1,232,1,233,1,233,1,233,1,233,1,233,1,
	233,1,233,1,233,1,233,1,233,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,
	234,1,234,1,234,1,234,1,234,1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,
	235,1,235,1,235,1,235,1,235,1,236,1,236,1,236,1,236,1,236,1,236,1,236,1,
	236,1,236,1,236,1,237,1,237,1,237,1,237,1,237,1,237,1,237,1,237,1,237,1,
	237,1,237,1,238,1,238,1,238,1,238,1,238,1,238,1,238,1,238,1,239,1,239,1,
	239,1,239,1,239,1,239,1,239,1,239,1,239,1,240,1,240,1,240,1,240,1,240,1,
	241,1,241,1,241,1,241,1,241,1,241,1,242,1,242,1,242,1,242,1,242,1,242,1,
	242,1,243,1,243,1,243,1,243,1,244,1,244,1,244,1,244,1,244,1,245,1,245,1,
	245,1,245,1,245,1,245,1,245,1,245,1,245,1,245,1,245,1,245,1,245,1,246,1,
	246,1,246,1,246,1,246,1,246,1,246,1,246,1,246,1,246,1,246,1,246,1,246,1,
	246,1,246,1,246,1,246,1,246,1,246,1,246,1,247,1,247,1,247,1,247,1,247,1,
	247,1,247,1,247,1,247,1,247,1,247,1,247,1,247,1,247,1,247,1,247,1,247,1,
	247,1,247,1,247,1,248,1,248,1,248,1,248,1,248,1,248,1,248,1,248,1,248,1,
	248,1,248,1,249,1,249,1,249,1,249,1,249,1,249,1,249,1,249,1,249,1,249,1,
	249,1,249,1,249,1,249,1,249,1,249,1,250,1,250,1,250,1,250,1,250,1,250,1,
	250,1,250,1,250,1,250,1,250,1,250,1,250,1,250,1,250,1,250,1,250,1,251,1,
	251,1,251,1,251,1,251,1,251,1,251,1,252,1,252,1,252,1,252,1,252,1,252,1,
	252,1,252,1,252,1,253,1,253,1,253,1,253,1,253,1,253,1,254,1,254,1,254,1,
	254,1,254,1,255,1,255,1,255,1,255,1,255,1,255,1,255,1,255,1,256,1,256,1,
	256,1,256,1,256,1,256,1,256,1,257,1,257,1,257,1,257,1,258,1,258,1,258,1,
	258,1,258,1,258,1,258,1,259,1,259,1,259,1,259,1,259,1,259,1,259,1,259,1,
	259,1,259,1,259,1,259,1,260,1,260,1,260,1,260,1,260,1,260,1,260,1,260,1,
	260,1,261,1,261,1,261,1,261,1,261,1,261,1,261,1,261,1,261,1,262,1,262,1,
	262,1,262,1,262,1,262,1,262,1,262,1,263,1,263,1,263,1,263,1,263,1,264,1,
	264,1,264,1,264,1,264,1,264,1,264,1,265,1,265,1,265,1,265,1,266,1,266,1,
	266,1,266,1,266,1,266,1,266,1,266,1,266,1,267,1,267,1,267,1,267,1,267,1,
	267,1,267,1,267,1,267,1,267,1,267,1,268,1,268,1,268,1,268,1,268,1,268,1,
	268,1,268,1,269,1,269,1,269,1,269,1,269,1,270,1,270,1,270,1,270,1,270,1,
	270,1,270,1,271,1,271,1,271,1,271,1,271,1,272,1,272,1,272,1,272,1,272,1,
	272,1,273,1,273,1,273,1,273,1,273,1,273,1,273,1,273,1,274,1,274,1,274,1,
	274,1,274,1,274,1,274,1,274,1,274,1,274,1,274,1,274,1,274,1,274,1,274,1,
	274,1,275,1,275,1,275,1,275,1,275,1,275,1,275,1,275,1,275,1,276,1,276,1,
	276,1,276,1,276,1,276,1,276,1,276,1,277,1,277,1,277,1,277,1,278,1,278,1,
	278,1,278,1,279,1,279,1,279,1,279,1,279,1,280,1,280,1,280,1,280,1,280,1,
	281,1,281,1,281,1,281,1,281,1,281,1,281,1,282,1,282,1,282,1,282,1,282,1,
	282,1,282,1,283,1,283,1,283,1,283,1,283,1,283,1,284,1,284,1,284,1,284,1,
	285,1,285,1,285,1,285,1,285,1,286,1,286,1,286,1,286,1,286,1,286,1,286,1,
	286,1,287,1,287,1,287,1,287,1,287,1,287,1,287,1,288,1,288,1,288,1,288,1,
	288,1,288,1,288,1,288,1,288,1,288,1,289,1,289,1,289,1,289,1,289,1,289,1,
	290,1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,291,1,291,1,291,1,291,1,
	292,1,292,1,292,1,292,1,292,1,292,1,292,1,292,1,293,1,293,1,293,1,293,1,
	293,1,293,1,293,1,293,1,294,1,294,1,294,1,294,1,294,1,294,1,294,1,294,1,
	294,1,295,1,295,1,295,1,295,1,296,1,296,1,296,1,296,1,296,1,296,1,296,1,
	296,1,297,1,297,1,297,1,297,1,297,1,297,1,297,1,298,1,298,1,298,1,298,1,
	298,1,298,1,299,1,299,1,299,1,299,1,299,1,299,1,299,1,300,1,300,1,300,1,
	300,1,300,1,301,1,301,1,301,1,301,1,301,1,302,1,302,1,302,1,302,1,302,1,
	302,1,302,1,302,1,302,1,302,1,303,1,303,1,303,1,303,1,303,1,303,1,303,1,
	303,1,303,1,303,1,303,1,303,1,303,1,303,1,304,1,304,1,304,1,304,1,304,1,
	304,1,304,1,304,1,304,1,305,1,305,1,305,1,305,1,305,1,305,1,305,1,305,1,
	306,1,306,1,306,1,306,1,307,1,307,1,307,1,307,1,308,1,308,1,308,1,308,1,
	308,1,309,1,309,1,309,1,309,1,309,1,309,1,309,1,309,1,309,1,310,1,310,1,
	311,1,311,1,312,1,312,1,313,1,313,1,314,1,314,1,315,1,315,1,316,1,316,1,
	317,1,317,1,318,1,318,1,319,1,319,1,320,1,320,1,321,1,321,1,322,1,322,1,
	323,1,323,1,324,1,324,1,325,1,325,1,326,1,326,1,327,1,327,1,328,1,328,1,
	329,1,329,1,330,1,330,1,331,1,331,1,332,1,332,1,333,1,333,1,334,1,334,1,
	335,1,335,1,336,1,336,1,337,1,337,1,337,1,338,1,338,1,338,1,339,1,339,1,
	340,1,340,1,341,1,341,1,341,1,342,1,342,1,342,3,342,3133,8,342,1,343,4,
	343,3136,8,343,11,343,12,343,3137,1,344,4,344,3141,8,344,11,344,12,344,
	3142,3,344,3145,8,344,1,344,1,344,4,344,3149,8,344,11,344,12,344,3150,1,
	344,4,344,3154,8,344,11,344,12,344,3155,1,344,1,344,1,344,1,344,4,344,3162,
	8,344,11,344,12,344,3163,3,344,3166,8,344,1,344,1,344,4,344,3170,8,344,
	11,344,12,344,3171,1,344,1,344,1,344,4,344,3177,8,344,11,344,12,344,3178,
	1,344,1,344,3,344,3183,8,344,1,345,1,345,1,346,1,346,1,347,1,347,1,348,
	1,348,1,348,1,349,1,349,5,349,3196,8,349,10,349,12,349,3199,9,349,4,349,
	3201,8,349,11,349,12,349,3202,1,350,1,350,1,350,1,350,1,350,1,350,5,350,
	3211,8,350,10,350,12,350,3214,9,350,1,350,1,350,1,351,1,351,3,351,3220,
	8,351,1,351,4,351,3223,8,351,11,351,12,351,3224,1,352,5,352,3228,8,352,
	10,352,12,352,3231,9,352,1,352,4,352,3234,8,352,11,352,12,352,3235,1,352,
	5,352,3239,8,352,10,352,12,352,3242,9,352,1,353,1,353,1,354,1,354,1,355,
	1,355,1,355,1,355,1,355,1,355,5,355,3254,8,355,10,355,12,355,3257,9,355,
	1,355,1,355,1,356,1,356,1,356,1,356,1,356,1,356,5,356,3267,8,356,10,356,
	12,356,3270,9,356,1,356,1,356,1,357,1,357,1,357,4,357,3277,8,357,11,357,
	12,357,3278,1,357,1,357,1,358,1,358,1,358,1,358,1,358,1,358,5,358,3289,
	8,358,10,358,12,358,3292,9,358,1,358,1,358,3,732,3229,3235,0,359,1,1,3,
	2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,
	16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,
	28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,36,73,37,75,38,77,39,79,
	40,81,41,83,42,85,43,87,44,89,45,91,46,93,47,95,48,97,49,99,50,101,51,103,
	52,105,53,107,54,109,55,111,56,113,57,115,58,117,59,119,60,121,61,123,62,
	125,63,127,64,129,65,131,66,133,67,135,68,137,69,139,70,141,71,143,72,145,
	73,147,74,149,75,151,76,153,77,155,78,157,79,159,80,161,81,163,82,165,83,
	167,84,169,85,171,86,173,87,175,88,177,89,179,90,181,91,183,92,185,93,187,
	94,189,95,191,96,193,97,195,98,197,99,199,100,201,101,203,102,205,103,207,
	104,209,105,211,106,213,107,215,108,217,109,219,110,221,111,223,112,225,
	113,227,114,229,115,231,116,233,117,235,118,237,119,239,120,241,121,243,
	122,245,123,247,124,249,125,251,126,253,127,255,128,257,129,259,130,261,
	131,263,132,265,133,267,134,269,135,271,136,273,137,275,138,277,139,279,
	140,281,141,283,142,285,143,287,144,289,145,291,146,293,147,295,148,297,
	149,299,150,301,151,303,152,305,153,307,154,309,155,311,156,313,157,315,
	158,317,159,319,160,321,161,323,162,325,163,327,164,329,165,331,166,333,
	167,335,168,337,169,339,170,341,171,343,172,345,173,347,174,349,175,351,
	176,353,177,355,178,357,179,359,180,361,181,363,182,365,183,367,184,369,
	185,371,186,373,187,375,188,377,189,379,190,381,191,383,192,385,193,387,
	194,389,195,391,196,393,197,395,198,397,199,399,200,401,201,403,202,405,
	203,407,204,409,205,411,206,413,207,415,208,417,209,419,210,421,211,423,
	212,425,213,427,214,429,215,431,216,433,217,435,218,437,219,439,220,441,
	221,443,222,445,223,447,224,449,225,451,226,453,227,455,228,457,229,459,
	230,461,231,463,232,465,233,467,234,469,235,471,236,473,237,475,238,477,
	239,479,240,481,241,483,242,485,243,487,244,489,245,491,246,493,247,495,
	248,497,249,499,250,501,251,503,252,505,253,507,254,509,255,511,256,513,
	257,515,258,517,259,519,260,521,261,523,262,525,263,527,264,529,265,531,
	266,533,267,535,268,537,269,539,270,541,271,543,272,545,273,547,274,549,
	275,551,276,553,277,555,278,557,279,559,280,561,281,563,282,565,283,567,
	284,569,285,571,286,573,287,575,288,577,289,579,290,581,291,583,292,585,
	293,587,294,589,295,591,296,593,297,595,298,597,299,599,300,601,301,603,
	302,605,303,607,304,609,305,611,306,613,307,615,308,617,309,619,310,621,
	311,623,312,625,313,627,314,629,315,631,316,633,317,635,318,637,319,639,
	320,641,321,643,322,645,323,647,324,649,325,651,326,653,327,655,328,657,
	329,659,330,661,331,663,332,665,333,667,334,669,335,671,336,673,337,675,
	338,677,339,679,340,681,341,683,342,685,343,687,344,689,345,691,346,693,
	347,695,348,697,349,699,0,701,0,703,0,705,0,707,0,709,0,711,0,713,0,715,
	0,717,0,1,0,13,3,0,9,10,13,13,32,32,2,0,10,10,13,13,2,0,47,47,92,92,3,0,
	32,32,47,47,92,92,2,0,92,92,96,96,2,0,43,43,45,45,4,0,48,57,65,90,95,95,
	97,122,3,0,65,90,95,95,97,122,1,0,48,57,2,0,65,90,97,122,2,0,34,34,92,92,
	2,0,39,39,92,92,1,0,48,49,3327,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,
	1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,
	0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,
	0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,
	0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,
	0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,
	0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,
	0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,
	0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,
	0,0,0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,
	0,0,107,1,0,0,0,0,109,1,0,0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,115,1,0,0,0,
	0,117,1,0,0,0,0,119,1,0,0,0,0,121,1,0,0,0,0,123,1,0,0,0,0,125,1,0,0,0,0,
	127,1,0,0,0,0,129,1,0,0,0,0,131,1,0,0,0,0,133,1,0,0,0,0,135,1,0,0,0,0,137,
	1,0,0,0,0,139,1,0,0,0,0,141,1,0,0,0,0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,
	0,0,0,0,149,1,0,0,0,0,151,1,0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,
	0,0,0,159,1,0,0,0,0,161,1,0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,
	0,0,169,1,0,0,0,0,171,1,0,0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,177,1,0,0,0,
	0,179,1,0,0,0,0,181,1,0,0,0,0,183,1,0,0,0,0,185,1,0,0,0,0,187,1,0,0,0,0,
	189,1,0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,0,195,1,0,0,0,0,197,1,0,0,0,0,199,
	1,0,0,0,0,201,1,0,0,0,0,203,1,0,0,0,0,205,1,0,0,0,0,207,1,0,0,0,0,209,1,
	0,0,0,0,211,1,0,0,0,0,213,1,0,0,0,0,215,1,0,0,0,0,217,1,0,0,0,0,219,1,0,
	0,0,0,221,1,0,0,0,0,223,1,0,0,0,0,225,1,0,0,0,0,227,1,0,0,0,0,229,1,0,0,
	0,0,231,1,0,0,0,0,233,1,0,0,0,0,235,1,0,0,0,0,237,1,0,0,0,0,239,1,0,0,0,
	0,241,1,0,0,0,0,243,1,0,0,0,0,245,1,0,0,0,0,247,1,0,0,0,0,249,1,0,0,0,0,
	251,1,0,0,0,0,253,1,0,0,0,0,255,1,0,0,0,0,257,1,0,0,0,0,259,1,0,0,0,0,261,
	1,0,0,0,0,263,1,0,0,0,0,265,1,0,0,0,0,267,1,0,0,0,0,269,1,0,0,0,0,271,1,
	0,0,0,0,273,1,0,0,0,0,275,1,0,0,0,0,277,1,0,0,0,0,279,1,0,0,0,0,281,1,0,
	0,0,0,283,1,0,0,0,0,285,1,0,0,0,0,287,1,0,0,0,0,289,1,0,0,0,0,291,1,0,0,
	0,0,293,1,0,0,0,0,295,1,0,0,0,0,297,1,0,0,0,0,299,1,0,0,0,0,301,1,0,0,0,
	0,303,1,0,0,0,0,305,1,0,0,0,0,307,1,0,0,0,0,309,1,0,0,0,0,311,1,0,0,0,0,
	313,1,0,0,0,0,315,1,0,0,0,0,317,1,0,0,0,0,319,1,0,0,0,0,321,1,0,0,0,0,323,
	1,0,0,0,0,325,1,0,0,0,0,327,1,0,0,0,0,329,1,0,0,0,0,331,1,0,0,0,0,333,1,
	0,0,0,0,335,1,0,0,0,0,337,1,0,0,0,0,339,1,0,0,0,0,341,1,0,0,0,0,343,1,0,
	0,0,0,345,1,0,0,0,0,347,1,0,0,0,0,349,1,0,0,0,0,351,1,0,0,0,0,353,1,0,0,
	0,0,355,1,0,0,0,0,357,1,0,0,0,0,359,1,0,0,0,0,361,1,0,0,0,0,363,1,0,0,0,
	0,365,1,0,0,0,0,367,1,0,0,0,0,369,1,0,0,0,0,371,1,0,0,0,0,373,1,0,0,0,0,
	375,1,0,0,0,0,377,1,0,0,0,0,379,1,0,0,0,0,381,1,0,0,0,0,383,1,0,0,0,0,385,
	1,0,0,0,0,387,1,0,0,0,0,389,1,0,0,0,0,391,1,0,0,0,0,393,1,0,0,0,0,395,1,
	0,0,0,0,397,1,0,0,0,0,399,1,0,0,0,0,401,1,0,0,0,0,403,1,0,0,0,0,405,1,0,
	0,0,0,407,1,0,0,0,0,409,1,0,0,0,0,411,1,0,0,0,0,413,1,0,0,0,0,415,1,0,0,
	0,0,417,1,0,0,0,0,419,1,0,0,0,0,421,1,0,0,0,0,423,1,0,0,0,0,425,1,0,0,0,
	0,427,1,0,0,0,0,429,1,0,0,0,0,431,1,0,0,0,0,433,1,0,0,0,0,435,1,0,0,0,0,
	437,1,0,0,0,0,439,1,0,0,0,0,441,1,0,0,0,0,443,1,0,0,0,0,445,1,0,0,0,0,447,
	1,0,0,0,0,449,1,0,0,0,0,451,1,0,0,0,0,453,1,0,0,0,0,455,1,0,0,0,0,457,1,
	0,0,0,0,459,1,0,0,0,0,461,1,0,0,0,0,463,1,0,0,0,0,465,1,0,0,0,0,467,1,0,
	0,0,0,469,1,0,0,0,0,471,1,0,0,0,0,473,1,0,0,0,0,475,1,0,0,0,0,477,1,0,0,
	0,0,479,1,0,0,0,0,481,1,0,0,0,0,483,1,0,0,0,0,485,1,0,0,0,0,487,1,0,0,0,
	0,489,1,0,0,0,0,491,1,0,0,0,0,493,1,0,0,0,0,495,1,0,0,0,0,497,1,0,0,0,0,
	499,1,0,0,0,0,501,1,0,0,0,0,503,1,0,0,0,0,505,1,0,0,0,0,507,1,0,0,0,0,509,
	1,0,0,0,0,511,1,0,0,0,0,513,1,0,0,0,0,515,1,0,0,0,0,517,1,0,0,0,0,519,1,
	0,0,0,0,521,1,0,0,0,0,523,1,0,0,0,0,525,1,0,0,0,0,527,1,0,0,0,0,529,1,0,
	0,0,0,531,1,0,0,0,0,533,1,0,0,0,0,535,1,0,0,0,0,537,1,0,0,0,0,539,1,0,0,
	0,0,541,1,0,0,0,0,543,1,0,0,0,0,545,1,0,0,0,0,547,1,0,0,0,0,549,1,0,0,0,
	0,551,1,0,0,0,0,553,1,0,0,0,0,555,1,0,0,0,0,557,1,0,0,0,0,559,1,0,0,0,0,
	561,1,0,0,0,0,563,1,0,0,0,0,565,1,0,0,0,0,567,1,0,0,0,0,569,1,0,0,0,0,571,
	1,0,0,0,0,573,1,0,0,0,0,575,1,0,0,0,0,577,1,0,0,0,0,579,1,0,0,0,0,581,1,
	0,0,0,0,583,1,0,0,0,0,585,1,0,0,0,0,587,1,0,0,0,0,589,1,0,0,0,0,591,1,0,
	0,0,0,593,1,0,0,0,0,595,1,0,0,0,0,597,1,0,0,0,0,599,1,0,0,0,0,601,1,0,0,
	0,0,603,1,0,0,0,0,605,1,0,0,0,0,607,1,0,0,0,0,609,1,0,0,0,0,611,1,0,0,0,
	0,613,1,0,0,0,0,615,1,0,0,0,0,617,1,0,0,0,0,619,1,0,0,0,0,621,1,0,0,0,0,
	623,1,0,0,0,0,625,1,0,0,0,0,627,1,0,0,0,0,629,1,0,0,0,0,631,1,0,0,0,0,633,
	1,0,0,0,0,635,1,0,0,0,0,637,1,0,0,0,0,639,1,0,0,0,0,641,1,0,0,0,0,643,1,
	0,0,0,0,645,1,0,0,0,0,647,1,0,0,0,0,649,1,0,0,0,0,651,1,0,0,0,0,653,1,0,
	0,0,0,655,1,0,0,0,0,657,1,0,0,0,0,659,1,0,0,0,0,661,1,0,0,0,0,663,1,0,0,
	0,0,665,1,0,0,0,0,667,1,0,0,0,0,669,1,0,0,0,0,671,1,0,0,0,0,673,1,0,0,0,
	0,675,1,0,0,0,0,677,1,0,0,0,0,679,1,0,0,0,0,681,1,0,0,0,0,683,1,0,0,0,0,
	685,1,0,0,0,0,687,1,0,0,0,0,689,1,0,0,0,0,691,1,0,0,0,0,693,1,0,0,0,0,695,
	1,0,0,0,0,697,1,0,0,0,1,720,1,0,0,0,3,726,1,0,0,0,5,768,1,0,0,0,7,772,1,
	0,0,0,9,779,1,0,0,0,11,784,1,0,0,0,13,788,1,0,0,0,15,791,1,0,0,0,17,795,
	1,0,0,0,19,799,1,0,0,0,21,808,1,0,0,0,23,814,1,0,0,0,25,820,1,0,0,0,27,
	823,1,0,0,0,29,832,1,0,0,0,31,837,1,0,0,0,33,842,1,0,0,0,35,849,1,0,0,0,
	37,855,1,0,0,0,39,862,1,0,0,0,41,868,1,0,0,0,43,871,1,0,0,0,45,874,1,0,
	0,0,47,878,1,0,0,0,49,881,1,0,0,0,51,885,1,0,0,0,53,888,1,0,0,0,55,895,
	1,0,0,0,57,903,1,0,0,0,59,908,1,0,0,0,61,914,1,0,0,0,63,917,1,0,0,0,65,
	922,1,0,0,0,67,928,1,0,0,0,69,934,1,0,0,0,71,938,1,0,0,0,73,943,1,0,0,0,
	75,947,1,0,0,0,77,956,1,0,0,0,79,961,1,0,0,0,81,966,1,0,0,0,83,971,1,0,
	0,0,85,976,1,0,0,0,87,982,1,0,0,0,89,986,1,0,0,0,91,991,1,0,0,0,93,997,
	1,0,0,0,95,1003,1,0,0,0,97,1009,1,0,0,0,99,1014,1,0,0,0,101,1019,1,0,0,
	0,103,1025,1,0,0,0,105,1030,1,0,0,0,107,1035,1,0,0,0,109,1043,1,0,0,0,111,
	1046,1,0,0,0,113,1052,1,0,0,0,115,1060,1,0,0,0,117,1067,1,0,0,0,119,1072,
	1,0,0,0,121,1082,1,0,0,0,123,1088,1,0,0,0,125,1093,1,0,0,0,127,1103,1,0,
	0,0,129,1113,1,0,0,0,131,1123,1,0,0,0,133,1131,1,0,0,0,135,1137,1,0,0,0,
	137,1143,1,0,0,0,139,1148,1,0,0,0,141,1153,1,0,0,0,143,1161,1,0,0,0,145,
	1168,1,0,0,0,147,1175,1,0,0,0,149,1181,1,0,0,0,151,1191,1,0,0,0,153,1196,
	1,0,0,0,155,1204,1,0,0,0,157,1212,1,0,0,0,159,1222,1,0,0,0,161,1229,1,0,
	0,0,163,1236,1,0,0,0,165,1243,1,0,0,0,167,1248,1,0,0,0,169,1257,1,0,0,0,
	171,1265,1,0,0,0,173,1270,1,0,0,0,175,1285,1,0,0,0,177,1305,1,0,0,0,179,
	1320,1,0,0,0,181,1327,1,0,0,0,183,1335,1,0,0,0,185,1343,1,0,0,0,187,1348,
	1,0,0,0,189,1353,1,0,0,0,191,1358,1,0,0,0,193,1365,1,0,0,0,195,1373,1,0,
	0,0,197,1380,1,0,0,0,199,1384,1,0,0,0,201,1391,1,0,0,0,203,1399,1,0,0,0,
	205,1410,1,0,0,0,207,1420,1,0,0,0,209,1425,1,0,0,0,211,1431,1,0,0,0,213,
	1438,1,0,0,0,215,1447,1,0,0,0,217,1457,1,0,0,0,219,1460,1,0,0,0,221,1472,
	1,0,0,0,223,1481,1,0,0,0,225,1487,1,0,0,0,227,1494,1,0,0,0,229,1501,1,0,
	0,0,231,1509,1,0,0,0,233,1513,1,0,0,0,235,1519,1,0,0,0,237,1524,1,0,0,0,
	239,1530,1,0,0,0,241,1542,1,0,0,0,243,1549,1,0,0,0,245,1558,1,0,0,0,247,
	1564,1,0,0,0,249,1571,1,0,0,0,251,1576,1,0,0,0,253,1584,1,0,0,0,255,1593,
	1,0,0,0,257,1596,1,0,0,0,259,1605,1,0,0,0,261,1613,1,0,0,0,263,1619,1,0,
	0,0,265,1623,1,0,0,0,267,1634,1,0,0,0,269,1641,1,0,0,0,271,1645,1,0,0,0,
	273,1648,1,0,0,0,275,1653,1,0,0,0,277,1661,1,0,0,0,279,1672,1,0,0,0,281,
	1682,1,0,0,0,283,1692,1,0,0,0,285,1699,1,0,0,0,287,1705,1,0,0,0,289,1711,
	1,0,0,0,291,1727,1,0,0,0,293,1740,1,0,0,0,295,1753,1,0,0,0,297,1763,1,0,
	0,0,299,1770,1,0,0,0,301,1781,1,0,0,0,303,1792,1,0,0,0,305,1798,1,0,0,0,
	307,1803,1,0,0,0,309,1811,1,0,0,0,311,1817,1,0,0,0,313,1827,1,0,0,0,315,
	1836,1,0,0,0,317,1845,1,0,0,0,319,1853,1,0,0,0,321,1859,1,0,0,0,323,1865,
	1,0,0,0,325,1873,1,0,0,0,327,1878,1,0,0,0,329,1888,1,0,0,0,331,1895,1,0,
	0,0,333,1905,1,0,0,0,335,1913,1,0,0,0,337,1919,1,0,0,0,339,1933,1,0,0,0,
	341,1946,1,0,0,0,343,1954,1,0,0,0,345,1961,1,0,0,0,347,1968,1,0,0,0,349,
	1980,1,0,0,0,351,1989,1,0,0,0,353,1998,1,0,0,0,355,2006,1,0,0,0,357,2016,
	1,0,0,0,359,2027,1,0,0,0,361,2033,1,0,0,0,363,2041,1,0,0,0,365,2053,1,0,
	0,0,367,2060,1,0,0,0,369,2068,1,0,0,0,371,2079,1,0,0,0,373,2088,1,0,0,0,
	375,2098,1,0,0,0,377,2105,1,0,0,0,379,2111,1,0,0,0,381,2123,1,0,0,0,383,
	2136,1,0,0,0,385,2145,1,0,0,0,387,2155,1,0,0,0,389,2159,1,0,0,0,391,2168,
	1,0,0,0,393,2176,1,0,0,0,395,2184,1,0,0,0,397,2189,1,0,0,0,399,2200,1,0,
	0,0,401,2212,1,0,0,0,403,2221,1,0,0,0,405,2229,1,0,0,0,407,2236,1,0,0,0,
	409,2242,1,0,0,0,411,2247,1,0,0,0,413,2254,1,0,0,0,415,2259,1,0,0,0,417,
	2266,1,0,0,0,419,2274,1,0,0,0,421,2281,1,0,0,0,423,2288,1,0,0,0,425,2293,
	1,0,0,0,427,2300,1,0,0,0,429,2305,1,0,0,0,431,2311,1,0,0,0,433,2323,1,0,
	0,0,435,2334,1,0,0,0,437,2347,1,0,0,0,439,2353,1,0,0,0,441,2361,1,0,0,0,
	443,2367,1,0,0,0,445,2374,1,0,0,0,447,2379,1,0,0,0,449,2385,1,0,0,0,451,
	2392,1,0,0,0,453,2402,1,0,0,0,455,2409,1,0,0,0,457,2415,1,0,0,0,459,2420,
	1,0,0,0,461,2427,1,0,0,0,463,2430,1,0,0,0,465,2437,1,0,0,0,467,2447,1,0,
	0,0,469,2457,1,0,0,0,471,2469,1,0,0,0,473,2481,1,0,0,0,475,2491,1,0,0,0,
	477,2502,1,0,0,0,479,2510,1,0,0,0,481,2519,1,0,0,0,483,2524,1,0,0,0,485,
	2530,1,0,0,0,487,2537,1,0,0,0,489,2541,1,0,0,0,491,2546,1,0,0,0,493,2559,
	1,0,0,0,495,2579,1,0,0,0,497,2599,1,0,0,0,499,2610,1,0,0,0,501,2626,1,0,
	0,0,503,2643,1,0,0,0,505,2650,1,0,0,0,507,2659,1,0,0,0,509,2665,1,0,0,0,
	511,2670,1,0,0,0,513,2678,1,0,0,0,515,2685,1,0,0,0,517,2689,1,0,0,0,519,
	2696,1,0,0,0,521,2708,1,0,0,0,523,2717,1,0,0,0,525,2726,1,0,0,0,527,2734,
	1,0,0,0,529,2739,1,0,0,0,531,2746,1,0,0,0,533,2750,1,0,0,0,535,2759,1,0,
	0,0,537,2770,1,0,0,0,539,2778,1,0,0,0,541,2783,1,0,0,0,543,2790,1,0,0,0,
	545,2795,1,0,0,0,547,2801,1,0,0,0,549,2809,1,0,0,0,551,2825,1,0,0,0,553,
	2834,1,0,0,0,555,2842,1,0,0,0,557,2846,1,0,0,0,559,2850,1,0,0,0,561,2855,
	1,0,0,0,563,2860,1,0,0,0,565,2867,1,0,0,0,567,2874,1,0,0,0,569,2880,1,0,
	0,0,571,2884,1,0,0,0,573,2889,1,0,0,0,575,2897,1,0,0,0,577,2904,1,0,0,0,
	579,2914,1,0,0,0,581,2920,1,0,0,0,583,2928,1,0,0,0,585,2932,1,0,0,0,587,
	2940,1,0,0,0,589,2948,1,0,0,0,591,2957,1,0,0,0,593,2961,1,0,0,0,595,2969,
	1,0,0,0,597,2976,1,0,0,0,599,2982,1,0,0,0,601,2989,1,0,0,0,603,2994,1,0,
	0,0,605,2999,1,0,0,0,607,3009,1,0,0,0,609,3023,1,0,0,0,611,3032,1,0,0,0,
	613,3040,1,0,0,0,615,3044,1,0,0,0,617,3048,1,0,0,0,619,3053,1,0,0,0,621,
	3062,1,0,0,0,623,3064,1,0,0,0,625,3066,1,0,0,0,627,3068,1,0,0,0,629,3070,
	1,0,0,0,631,3072,1,0,0,0,633,3074,1,0,0,0,635,3076,1,0,0,0,637,3078,1,0,
	0,0,639,3080,1,0,0,0,641,3082,1,0,0,0,643,3084,1,0,0,0,645,3086,1,0,0,0,
	647,3088,1,0,0,0,649,3090,1,0,0,0,651,3092,1,0,0,0,653,3094,1,0,0,0,655,
	3096,1,0,0,0,657,3098,1,0,0,0,659,3100,1,0,0,0,661,3102,1,0,0,0,663,3104,
	1,0,0,0,665,3106,1,0,0,0,667,3108,1,0,0,0,669,3110,1,0,0,0,671,3112,1,0,
	0,0,673,3114,1,0,0,0,675,3116,1,0,0,0,677,3119,1,0,0,0,679,3122,1,0,0,0,
	681,3124,1,0,0,0,683,3126,1,0,0,0,685,3132,1,0,0,0,687,3135,1,0,0,0,689,
	3182,1,0,0,0,691,3184,1,0,0,0,693,3186,1,0,0,0,695,3188,1,0,0,0,697,3190,
	1,0,0,0,699,3200,1,0,0,0,701,3204,1,0,0,0,703,3217,1,0,0,0,705,3229,1,0,
	0,0,707,3243,1,0,0,0,709,3245,1,0,0,0,711,3247,1,0,0,0,713,3260,1,0,0,0,
	715,3273,1,0,0,0,717,3282,1,0,0,0,719,721,7,0,0,0,720,719,1,0,0,0,721,722,
	1,0,0,0,722,720,1,0,0,0,722,723,1,0,0,0,723,724,1,0,0,0,724,725,6,0,0,0,
	725,2,1,0,0,0,726,727,5,47,0,0,727,728,5,42,0,0,728,732,1,0,0,0,729,731,
	9,0,0,0,730,729,1,0,0,0,731,734,1,0,0,0,732,733,1,0,0,0,732,730,1,0,0,0,
	733,735,1,0,0,0,734,732,1,0,0,0,735,736,5,42,0,0,736,737,5,47,0,0,737,738,
	1,0,0,0,738,739,6,1,0,0,739,4,1,0,0,0,740,741,5,45,0,0,741,744,5,45,0,0,
	742,744,5,35,0,0,743,740,1,0,0,0,743,742,1,0,0,0,744,748,1,0,0,0,745,747,
	8,1,0,0,746,745,1,0,0,0,747,750,1,0,0,0,748,746,1,0,0,0,748,749,1,0,0,0,
	749,756,1,0,0,0,750,748,1,0,0,0,751,753,5,13,0,0,752,751,1,0,0,0,752,753,
	1,0,0,0,753,754,1,0,0,0,754,757,5,10,0,0,755,757,5,0,0,1,756,752,1,0,0,
	0,756,755,1,0,0,0,757,769,1,0,0,0,758,759,5,45,0,0,759,760,5,45,0,0,760,
	766,1,0,0,0,761,763,5,13,0,0,762,761,1,0,0,0,762,763,1,0,0,0,763,764,1,
	0,0,0,764,767,5,10,0,0,765,767,5,0,0,1,766,762,1,0,0,0,766,765,1,0,0,0,
	767,769,1,0,0,0,768,743,1,0,0,0,768,758,1,0,0,0,769,770,1,0,0,0,770,771,
	6,2,0,0,771,6,1,0,0,0,772,773,5,83,0,0,773,774,5,69,0,0,774,775,5,76,0,
	0,775,776,5,69,0,0,776,777,5,67,0,0,777,778,5,84,0,0,778,8,1,0,0,0,779,
	780,5,70,0,0,780,781,5,82,0,0,781,782,5,79,0,0,782,783,5,77,0,0,783,10,
	1,0,0,0,784,785,5,65,0,0,785,786,5,68,0,0,786,787,5,68,0,0,787,12,1,0,0,
	0,788,789,5,65,0,0,789,790,5,83,0,0,790,14,1,0,0,0,791,792,5,65,0,0,792,
	793,5,76,0,0,793,794,5,76,0,0,794,16,1,0,0,0,795,796,5,65,0,0,796,797,5,
	78,0,0,797,798,5,89,0,0,798,18,1,0,0,0,799,800,5,68,0,0,800,801,5,73,0,
	0,801,802,5,83,0,0,802,803,5,84,0,0,803,804,5,73,0,0,804,805,5,78,0,0,805,
	806,5,67,0,0,806,807,5,84,0,0,807,20,1,0,0,0,808,809,5,87,0,0,809,810,5,
	72,0,0,810,811,5,69,0,0,811,812,5,82,0,0,812,813,5,69,0,0,813,22,1,0,0,
	0,814,815,5,71,0,0,815,816,5,82,0,0,816,817,5,79,0,0,817,818,5,85,0,0,818,
	819,5,80,0,0,819,24,1,0,0,0,820,821,5,66,0,0,821,822,5,89,0,0,822,26,1,
	0,0,0,823,824,5,71,0,0,824,825,5,82,0,0,825,826,5,79,0,0,826,827,5,85,0,
	0,827,828,5,80,0,0,828,829,5,73,0,0,829,830,5,78,0,0,830,831,5,71,0,0,831,
	28,1,0,0,0,832,833,5,83,0,0,833,834,5,69,0,0,834,835,5,84,0,0,835,836,5,
	83,0,0,836,30,1,0,0,0,837,838,5,67,0,0,838,839,5,85,0,0,839,840,5,66,0,
	0,840,841,5,69,0,0,841,32,1,0,0,0,842,843,5,82,0,0,843,844,5,79,0,0,844,
	845,5,76,0,0,845,846,5,76,0,0,846,847,5,85,0,0,847,848,5,80,0,0,848,34,
	1,0,0,0,849,850,5,79,0,0,850,851,5,82,0,0,851,852,5,68,0,0,852,853,5,69,
	0,0,853,854,5,82,0,0,854,36,1,0,0,0,855,856,5,72,0,0,856,857,5,65,0,0,857,
	858,5,86,0,0,858,859,5,73,0,0,859,860,5,78,0,0,860,861,5,71,0,0,861,38,
	1,0,0,0,862,863,5,76,0,0,863,864,5,73,0,0,864,865,5,77,0,0,865,866,5,73,
	0,0,866,867,5,84,0,0,867,40,1,0,0,0,868,869,5,65,0,0,869,870,5,84,0,0,870,
	42,1,0,0,0,871,872,5,79,0,0,872,873,5,82,0,0,873,44,1,0,0,0,874,875,5,65,
	0,0,875,876,5,78,0,0,876,877,5,68,0,0,877,46,1,0,0,0,878,879,5,73,0,0,879,
	880,5,78,0,0,880,48,1,0,0,0,881,882,5,78,0,0,882,883,5,79,0,0,883,884,5,
	84,0,0,884,50,1,0,0,0,885,886,5,78,0,0,886,887,5,79,0,0,887,52,1,0,0,0,
	888,889,5,69,0,0,889,890,5,88,0,0,890,891,5,73,0,0,891,892,5,83,0,0,892,
	893,5,84,0,0,893,894,5,83,0,0,894,54,1,0,0,0,895,896,5,66,0,0,896,897,5,
	69,0,0,897,898,5,84,0,0,898,899,5,87,0,0,899,900,5,69,0,0,900,901,5,69,
	0,0,901,902,5,78,0,0,902,56,1,0,0,0,903,904,5,76,0,0,904,905,5,73,0,0,905,
	906,5,75,0,0,906,907,5,69,0,0,907,58,1,0,0,0,908,909,5,82,0,0,909,910,5,
	76,0,0,910,911,5,73,0,0,911,912,5,75,0,0,912,913,5,69,0,0,913,60,1,0,0,
	0,914,915,5,73,0,0,915,916,5,83,0,0,916,62,1,0,0,0,917,918,5,84,0,0,918,
	919,5,82,0,0,919,920,5,85,0,0,920,921,5,69,0,0,921,64,1,0,0,0,922,923,5,
	70,0,0,923,924,5,65,0,0,924,925,5,76,0,0,925,926,5,83,0,0,926,927,5,69,
	0,0,927,66,1,0,0,0,928,929,5,78,0,0,929,930,5,85,0,0,930,931,5,76,0,0,931,
	932,5,76,0,0,932,933,5,83,0,0,933,68,1,0,0,0,934,935,5,65,0,0,935,936,5,
	83,0,0,936,937,5,67,0,0,937,70,1,0,0,0,938,939,5,68,0,0,939,940,5,69,0,
	0,940,941,5,83,0,0,941,942,5,67,0,0,942,72,1,0,0,0,943,944,5,70,0,0,944,
	945,5,79,0,0,945,946,5,82,0,0,946,74,1,0,0,0,947,948,5,73,0,0,948,949,5,
	78,0,0,949,950,5,84,0,0,950,951,5,69,0,0,951,952,5,82,0,0,952,953,5,86,
	0,0,953,954,5,65,0,0,954,955,5,76,0,0,955,76,1,0,0,0,956,957,5,67,0,0,957,
	958,5,65,0,0,958,959,5,83,0,0,959,960,5,69,0,0,960,78,1,0,0,0,961,962,5,
	87,0,0,962,963,5,72,0,0,963,964,5,69,0,0,964,965,5,78,0,0,965,80,1,0,0,
	0,966,967,5,84,0,0,967,968,5,72,0,0,968,969,5,69,0,0,969,970,5,78,0,0,970,
	82,1,0,0,0,971,972,5,69,0,0,972,973,5,76,0,0,973,974,5,83,0,0,974,975,5,
	69,0,0,975,84,1,0,0,0,976,977,5,66,0,0,977,978,5,69,0,0,978,979,5,71,0,
	0,979,980,5,73,0,0,980,981,5,78,0,0,981,86,1,0,0,0,982,983,5,69,0,0,983,
	984,5,78,0,0,984,985,5,68,0,0,985,88,1,0,0,0,986,987,5,74,0,0,987,988,5,
	79,0,0,988,989,5,73,0,0,989,990,5,78,0,0,990,90,1,0,0,0,991,992,5,67,0,
	0,992,993,5,82,0,0,993,994,5,79,0,0,994,995,5,83,0,0,995,996,5,83,0,0,996,
	92,1,0,0,0,997,998,5,79,0,0,998,999,5,85,0,0,999,1000,5,84,0,0,1000,1001,
	5,69,0,0,1001,1002,5,82,0,0,1002,94,1,0,0,0,1003,1004,5,73,0,0,1004,1005,
	5,78,0,0,1005,1006,5,78,0,0,1006,1007,5,69,0,0,1007,1008,5,82,0,0,1008,
	96,1,0,0,0,1009,1010,5,76,0,0,1010,1011,5,69,0,0,1011,1012,5,70,0,0,1012,
	1013,5,84,0,0,1013,98,1,0,0,0,1014,1015,5,83,0,0,1015,1016,5,69,0,0,1016,
	1017,5,77,0,0,1017,1018,5,73,0,0,1018,100,1,0,0,0,1019,1020,5,82,0,0,1020,
	1021,5,73,0,0,1021,1022,5,71,0,0,1022,1023,5,72,0,0,1023,1024,5,84,0,0,
	1024,102,1,0,0,0,1025,1026,5,70,0,0,1026,1027,5,85,0,0,1027,1028,5,76,0,
	0,1028,1029,5,76,0,0,1029,104,1,0,0,0,1030,1031,5,85,0,0,1031,1032,5,83,
	0,0,1032,1033,5,69,0,0,1033,1034,5,82,0,0,1034,106,1,0,0,0,1035,1036,5,
	78,0,0,1036,1037,5,65,0,0,1037,1038,5,84,0,0,1038,1039,5,85,0,0,1039,1040,
	5,82,0,0,1040,1041,5,65,0,0,1041,1042,5,76,0,0,1042,108,1,0,0,0,1043,1044,
	5,79,0,0,1044,1045,5,78,0,0,1045,110,1,0,0,0,1046,1047,5,80,0,0,1047,1048,
	5,73,0,0,1048,1049,5,86,0,0,1049,1050,5,79,0,0,1050,1051,5,84,0,0,1051,
	112,1,0,0,0,1052,1053,5,76,0,0,1053,1054,5,65,0,0,1054,1055,5,84,0,0,1055,
	1056,5,69,0,0,1056,1057,5,82,0,0,1057,1058,5,65,0,0,1058,1059,5,76,0,0,
	1059,114,1,0,0,0,1060,1061,5,87,0,0,1061,1062,5,73,0,0,1062,1063,5,78,0,
	0,1063,1064,5,68,0,0,1064,1065,5,79,0,0,1065,1066,5,87,0,0,1066,116,1,0,
	0,0,1067,1068,5,79,0,0,1068,1069,5,86,0,0,1069,1070,5,69,0,0,1070,1071,
	5,82,0,0,1071,118,1,0,0,0,1072,1073,5,80,0,0,1073,1074,5,65,0,0,1074,1075,
	5,82,0,0,1075,1076,5,84,0,0,1076,1077,5,73,0,0,1077,1078,5,84,0,0,1078,
	1079,5,73,0,0,1079,1080,5,79,0,0,1080,1081,5,78,0,0,1081,120,1,0,0,0,1082,
	1083,5,82,0,0,1083,1084,5,65,0,0,1084,1085,5,78,0,0,1085,1086,5,71,0,0,
	1086,1087,5,69,0,0,1087,122,1,0,0,0,1088,1089,5,82,0,0,1089,1090,5,79,0,
	0,1090,1091,5,87,0,0,1091,1092,5,83,0,0,1092,124,1,0,0,0,1093,1094,5,85,
	0,0,1094,1095,5,78,0,0,1095,1096,5,66,0,0,1096,1097,5,79,0,0,1097,1098,
	5,85,0,0,1098,1099,5,78,0,0,1099,1100,5,68,0,0,1100,1101,5,69,0,0,1101,
	1102,5,68,0,0,1102,126,1,0,0,0,1103,1104,5,80,0,0,1104,1105,5,82,0,0,1105,
	1106,5,69,0,0,1106,1107,5,67,0,0,1107,1108,5,69,0,0,1108,1109,5,68,0,0,
	1109,1110,5,73,0,0,1110,1111,5,78,0,0,1111,1112,5,71,0,0,1112,128,1,0,0,
	0,1113,1114,5,70,0,0,1114,1115,5,79,0,0,1115,1116,5,76,0,0,1116,1117,5,
	76,0,0,1117,1118,5,79,0,0,1118,1119,5,87,0,0,1119,1120,5,73,0,0,1120,1121,
	5,78,0,0,1121,1122,5,71,0,0,1122,130,1,0,0,0,1123,1124,5,67,0,0,1124,1125,
	5,85,0,0,1125,1126,5,82,0,0,1126,1127,5,82,0,0,1127,1128,5,69,0,0,1128,
	1129,5,78,0,0,1129,1130,5,84,0,0,1130,132,1,0,0,0,1131,1132,5,70,0,0,1132,
	1133,5,73,0,0,1133,1134,5,82,0,0,1134,1135,5,83,0,0,1135,1136,5,84,0,0,
	1136,134,1,0,0,0,1137,1138,5,65,0,0,1138,1139,5,70,0,0,1139,1140,5,84,0,
	0,1140,1141,5,69,0,0,1141,1142,5,82,0,0,1142,136,1,0,0,0,1143,1144,5,76,
	0,0,1144,1145,5,65,0,0,1145,1146,5,83,0,0,1146,1147,5,84,0,0,1147,138,1,
	0,0,0,1148,1149,5,87,0,0,1149,1150,5,73,0,0,1150,1151,5,84,0,0,1151,1152,
	5,72,0,0,1152,140,1,0,0,0,1153,1154,5,87,0,0,1154,1155,5,73,0,0,1155,1156,
	5,84,0,0,1156,1157,5,72,0,0,1157,1158,5,79,0,0,1158,1159,5,85,0,0,1159,
	1160,5,84,0,0,1160,142,1,0,0,0,1161,1162,5,86,0,0,1162,1163,5,65,0,0,1163,
	1164,5,76,0,0,1164,1165,5,85,0,0,1165,1166,5,69,0,0,1166,1167,5,83,0,0,
	1167,144,1,0,0,0,1168,1169,5,67,0,0,1169,1170,5,82,0,0,1170,1171,5,69,0,
	0,1171,1172,5,65,0,0,1172,1173,5,84,0,0,1173,1174,5,69,0,0,1174,146,1,0,
	0,0,1175,1176,5,84,0,0,1176,1177,5,65,0,0,1177,1178,5,66,0,0,1178,1179,
	5,76,0,0,1179,1180,5,69,0,0,1180,148,1,0,0,0,1181,1182,5,68,0,0,1182,1183,
	5,73,0,0,1183,1184,5,82,0,0,1184,1185,5,69,0,0,1185,1186,5,67,0,0,1186,
	1187,5,84,0,0,1187,1188,5,79,0,0,1188,1189,5,82,0,0,1189,1190,5,89,0,0,
	1190,150,1,0,0,0,1191,1192,5,86,0,0,1192,1193,5,73,0,0,1193,1194,5,69,0,
	0,1194,1195,5,87,0,0,1195,152,1,0,0,0,1196,1197,5,82,0,0,1197,1198,5,69,
	0,0,1198,1199,5,80,0,0,1199,1200,5,76,0,0,1200,1201,5,65,0,0,1201,1202,
	5,67,0,0,1202,1203,5,69,0,0,1203,154,1,0,0,0,1204,1205,5,69,0,0,1205,1206,
	5,88,0,0,1206,1207,5,69,0,0,1207,1208,5,67,0,0,1208,1209,5,85,0,0,1209,
	1210,5,84,0,0,1210,1211,5,69,0,0,1211,156,1,0,0,0,1212,1213,5,83,0,0,1213,
	1214,5,84,0,0,1214,1215,5,65,0,0,1215,1216,5,84,0,0,1216,1217,5,69,0,0,
	1217,1218,5,77,0,0,1218,1219,5,69,0,0,1219,1220,5,78,0,0,1220,1221,5,84,
	0,0,1221,158,1,0,0,0,1222,1223,5,73,0,0,1223,1224,5,78,0,0,1224,1225,5,
	83,0,0,1225,1226,5,69,0,0,1226,1227,5,82,0,0,1227,1228,5,84,0,0,1228,160,
	1,0,0,0,1229,1230,5,68,0,0,1230,1231,5,69,0,0,1231,1232,5,76,0,0,1232,1233,
	5,69,0,0,1233,1234,5,84,0,0,1234,1235,5,69,0,0,1235,162,1,0,0,0,1236,1237,
	5,82,0,0,1237,1238,5,69,0,0,1238,1239,5,77,0,0,1239,1240,5,79,0,0,1240,
	1241,5,86,0,0,1241,1242,5,69,0,0,1242,164,1,0,0,0,1243,1244,5,73,0,0,1244,
	1245,5,78,0,0,1245,1246,5,84,0,0,1246,1247,5,79,0,0,1247,166,1,0,0,0,1248,
	1249,5,68,0,0,1249,1250,5,69,0,0,1250,1251,5,83,0,0,1251,1252,5,67,0,0,
	1252,1253,5,82,0,0,1253,1254,5,73,0,0,1254,1255,5,66,0,0,1255,1256,5,69,
	0,0,1256,168,1,0,0,0,1257,1258,5,69,0,0,1258,1259,5,88,0,0,1259,1260,5,
	80,0,0,1260,1261,5,76,0,0,1261,1262,5,65,0,0,1262,1263,5,73,0,0,1263,1264,
	5,78,0,0,1264,170,1,0,0,0,1265,1266,5,80,0,0,1266,1267,5,76,0,0,1267,1268,
	5,65,0,0,1268,1269,5,78,0,0,1269,172,1,0,0,0,1270,1271,5,67,0,0,1271,1272,
	5,72,0,0,1272,1273,5,65,0,0,1273,1274,5,78,0,0,1274,1275,5,71,0,0,1275,
	1276,5,69,0,0,1276,1277,5,76,0,0,1277,1278,5,79,0,0,1278,1279,5,71,0,0,
	1279,1280,5,95,0,0,1280,1281,5,77,0,0,1281,1282,5,79,0,0,1282,1283,5,68,
	0,0,1283,1284,5,69,0,0,1284,174,1,0,0,0,1285,1286,5,74,0,0,1286,1287,5,
	83,0,0,1287,1288,5,79,0,0,1288,1289,5,78,0,0,1289,1290,5,95,0,0,1290,1291,
	5,69,0,0,1291,1292,5,88,0,0,1292,1293,5,69,0,0,1293,1294,5,67,0,0,1294,
	1295,5,85,0,0,1295,1296,5,84,0,0,1296,1297,5,73,0,0,1297,1298,5,79,0,0,
	1298,1299,5,78,0,0,1299,1300,5,95,0,0,1300,1301,5,80,0,0,1301,1302,5,76,
	0,0,1302,1303,5,65,0,0,1303,1304,5,78,0,0,1304,176,1,0,0,0,1305,1306,5,
	69,0,0,1306,1307,5,83,0,0,1307,1308,5,84,0,0,1308,1309,5,73,0,0,1309,1310,
	5,77,0,0,1310,1311,5,65,0,0,1311,1312,5,84,0,0,1312,1313,5,69,0,0,1313,
	1314,5,68,0,0,1314,1315,5,95,0,0,1315,1316,5,67,0,0,1316,1317,5,79,0,0,
	1317,1318,5,83,0,0,1318,1319,5,84,0,0,1319,178,1,0,0,0,1320,1321,5,70,0,
	0,1321,1322,5,79,0,0,1322,1323,5,82,0,0,1323,1324,5,77,0,0,1324,1325,5,
	65,0,0,1325,1326,5,84,0,0,1326,180,1,0,0,0,1327,1328,5,76,0,0,1328,1329,
	5,79,0,0,1329,1330,5,71,0,0,1330,1331,5,73,0,0,1331,1332,5,67,0,0,1332,
	1333,5,65,0,0,1333,1334,5,76,0,0,1334,182,1,0,0,0,1335,1336,5,67,0,0,1336,
	1337,5,79,0,0,1337,1338,5,68,0,0,1338,1339,5,69,0,0,1339,1340,5,71,0,0,
	1340,1341,5,69,0,0,1341,1342,5,78,0,0,1342,184,1,0,0,0,1343,1344,5,67,0,
	0,1344,1345,5,79,0,0,1345,1346,5,83,0,0,1346,1347,5,84,0,0,1347,186,1,0,
	0,0,1348,1349,5,67,0,0,1349,1350,5,65,0,0,1350,1351,5,83,0,0,1351,1352,
	5,84,0,0,1352,188,1,0,0,0,1353,1354,5,83,0,0,1354,1355,5,72,0,0,1355,1356,
	5,79,0,0,1356,1357,5,87,0,0,1357,190,1,0,0,0,1358,1359,5,84,0,0,1359,1360,
	5,65,0,0,1360,1361,5,66,0,0,1361,1362,5,76,0,0,1362,1363,5,69,0,0,1363,
	1364,5,83,0,0,1364,192,1,0,0,0,1365,1366,5,67,0,0,1366,1367,5,79,0,0,1367,
	1368,5,76,0,0,1368,1369,5,85,0,0,1369,1370,5,77,0,0,1370,1371,5,78,0,0,
	1371,1372,5,83,0,0,1372,194,1,0,0,0,1373,1374,5,67,0,0,1374,1375,5,79,0,
	0,1375,1376,5,76,0,0,1376,1377,5,85,0,0,1377,1378,5,77,0,0,1378,1379,5,
	78,0,0,1379,196,1,0,0,0,1380,1381,5,85,0,0,1381,1382,5,83,0,0,1382,1383,
	5,69,0,0,1383,198,1,0,0,0,1384,1385,5,77,0,0,1385,1386,5,79,0,0,1386,1387,
	5,68,0,0,1387,1388,5,85,0,0,1388,1389,5,76,0,0,1389,1390,5,69,0,0,1390,
	200,1,0,0,0,1391,1392,5,77,0,0,1392,1393,5,79,0,0,1393,1394,5,68,0,0,1394,
	1395,5,85,0,0,1395,1396,5,76,0,0,1396,1397,5,69,0,0,1397,1398,5,83,0,0,
	1398,202,1,0,0,0,1399,1400,5,80,0,0,1400,1401,5,65,0,0,1401,1402,5,82,0,
	0,1402,1403,5,84,0,0,1403,1404,5,73,0,0,1404,1405,5,84,0,0,1405,1406,5,
	73,0,0,1406,1407,5,79,0,0,1407,1408,5,78,0,0,1408,1409,5,83,0,0,1409,204,
	1,0,0,0,1410,1411,5,70,0,0,1411,1412,5,85,0,0,1412,1413,5,78,0,0,1413,1414,
	5,67,0,0,1414,1415,5,84,0,0,1415,1416,5,73,0,0,1416,1417,5,79,0,0,1417,
	1418,5,78,0,0,1418,1419,5,83,0,0,1419,206,1,0,0,0,1420,1421,5,68,0,0,1421,
	1422,5,82,0,0,1422,1423,5,79,0,0,1423,1424,5,80,0,0,1424,208,1,0,0,0,1425,
	1426,5,85,0,0,1426,1427,5,78,0,0,1427,1428,5,73,0,0,1428,1429,5,79,0,0,
	1429,1430,5,78,0,0,1430,210,1,0,0,0,1431,1432,5,69,0,0,1432,1433,5,88,0,
	0,1433,1434,5,67,0,0,1434,1435,5,69,0,0,1435,1436,5,80,0,0,1436,1437,5,
	84,0,0,1437,212,1,0,0,0,1438,1439,5,83,0,0,1439,1440,5,69,0,0,1440,1441,
	5,84,0,0,1441,1442,5,77,0,0,1442,1443,5,73,0,0,1443,1444,5,78,0,0,1444,
	1445,5,85,0,0,1445,1446,5,83,0,0,1446,214,1,0,0,0,1447,1448,5,73,0,0,1448,
	1449,5,78,0,0,1449,1450,5,84,0,0,1450,1451,5,69,0,0,1451,1452,5,82,0,0,
	1452,1453,5,83,0,0,1453,1454,5,69,0,0,1454,1455,5,67,0,0,1455,1456,5,84,
	0,0,1456,216,1,0,0,0,1457,1458,5,84,0,0,1458,1459,5,79,0,0,1459,218,1,0,
	0,0,1460,1461,5,84,0,0,1461,1462,5,65,0,0,1462,1463,5,66,0,0,1463,1464,
	5,76,0,0,1464,1465,5,69,0,0,1465,1466,5,83,0,0,1466,1467,5,65,0,0,1467,
	1468,5,77,0,0,1468,1469,5,80,0,0,1469,1470,5,76,0,0,1470,1471,5,69,0,0,
	1471,220,1,0,0,0,1472,1473,5,83,0,0,1473,1474,5,84,0,0,1474,1475,5,82,0,
	0,1475,1476,5,65,0,0,1476,1477,5,84,0,0,1477,1478,5,73,0,0,1478,1479,5,
	70,0,0,1479,1480,5,89,0,0,1480,222,1,0,0,0,1481,1482,5,65,0,0,1482,1483,
	5,76,0,0,1483,1484,5,84,0,0,1484,1485,5,69,0,0,1485,1486,5,82,0,0,1486,
	224,1,0,0,0,1487,1488,5,82,0,0,1488,1489,5,69,0,0,1489,1490,5,78,0,0,1490,
	1491,5,65,0,0,1491,1492,5,77,0,0,1492,1493,5,69,0,0,1493,226,1,0,0,0,1494,
	1495,5,83,0,0,1495,1496,5,84,0,0,1496,1497,5,82,0,0,1497,1498,5,85,0,0,
	1498,1499,5,67,0,0,1499,1500,5,84,0,0,1500,228,1,0,0,0,1501,1502,5,67,0,
	0,1502,1503,5,79,0,0,1503,1504,5,77,0,0,1504,1505,5,77,0,0,1505,1506,5,
	69,0,0,1506,1507,5,78,0,0,1507,1508,5,84,0,0,1508,230,1,0,0,0,1509,1510,
	5,83,0,0,1510,1511,5,69,0,0,1511,1512,5,84,0,0,1512,232,1,0,0,0,1513,1514,
	5,82,0,0,1514,1515,5,69,0,0,1515,1516,5,83,0,0,1516,1517,5,69,0,0,1517,
	1518,5,84,0,0,1518,234,1,0,0,0,1519,1520,5,68,0,0,1520,1521,5,65,0,0,1521,
	1522,5,84,0,0,1522,1523,5,65,0,0,1523,236,1,0,0,0,1524,1525,5,83,0,0,1525,
	1526,5,84,0,0,1526,1527,5,65,0,0,1527,1528,5,82,0,0,1528,1529,5,84,0,0,
	1529,238,1,0,0,0,1530,1531,5,84,0,0,1531,1532,5,82,0,0,1532,1533,5,65,0,
	0,1533,1534,5,78,0,0,1534,1535,5,83,0,0,1535,1536,5,65,0,0,1536,1537,5,
	67,0,0,1537,1538,5,84,0,0,1538,1539,5,73,0,0,1539,1540,5,79,0,0,1540,1541,
	5,78,0,0,1541,240,1,0,0,0,1542,1543,5,67,0,0,1543,1544,5,79,0,0,1544,1545,
	5,77,0,0,1545,1546,5,77,0,0,1546,1547,5,73,0,0,1547,1548,5,84,0,0,1548,
	242,1,0,0,0,1549,1550,5,82,0,0,1550,1551,5,79,0,0,1551,1552,5,76,0,0,1552,
	1553,5,76,0,0,1553,1554,5,66,0,0,1554,1555,5,65,0,0,1555,1556,5,67,0,0,
	1556,1557,5,75,0,0,1557,244,1,0,0,0,1558,1559,5,77,0,0,1559,1560,5,65,0,
	0,1560,1561,5,67,0,0,1561,1562,5,82,0,0,1562,1563,5,79,0,0,1563,246,1,0,
	0,0,1564,1565,5,73,0,0,1565,1566,5,71,0,0,1566,1567,5,78,0,0,1567,1568,
	5,79,0,0,1568,1569,5,82,0,0,1569,1570,5,69,0,0,1570,248,1,0,0,0,1571,1572,
	5,66,0,0,1572,1573,5,79,0,0,1573,1574,5,84,0,0,1574,1575,5,72,0,0,1575,
	250,1,0,0,0,1576,1577,5,76,0,0,1577,1578,5,69,0,0,1578,1579,5,65,0,0,1579,
	1580,5,68,0,0,1580,1581,5,73,0,0,1581,1582,5,78,0,0,1582,1583,5,71,0,0,
	1583,252,1,0,0,0,1584,1585,5,84,0,0,1585,1586,5,82,0,0,1586,1587,5,65,0,
	0,1587,1588,5,73,0,0,1588,1589,5,76,0,0,1589,1590,5,73,0,0,1590,1591,5,
	78,0,0,1591,1592,5,71,0,0,1592,254,1,0,0,0,1593,1594,5,73,0,0,1594,1595,
	5,70,0,0,1595,256,1,0,0,0,1596,1597,5,80,0,0,1597,1598,5,79,0,0,1598,1599,
	5,83,0,0,1599,1600,5,73,0,0,1600,1601,5,84,0,0,1601,1602,5,73,0,0,1602,
	1603,5,79,0,0,1603,1604,5,78,0,0,1604,258,1,0,0,0,1605,1606,5,69,0,0,1606,
	1607,5,88,0,0,1607,1608,5,84,0,0,1608,1609,5,82,0,0,1609,1610,5,65,0,0,
	1610,1611,5,67,0,0,1611,1612,5,84,0,0,1612,260,1,0,0,0,1613,1614,5,77,0,
	0,1614,1615,5,73,0,0,1615,1616,5,78,0,0,1616,1617,5,85,0,0,1617,1618,5,
	83,0,0,1618,262,1,0,0,0,1619,1620,5,68,0,0,1620,1621,5,73,0,0,1621,1622,
	5,86,0,0,1622,264,1,0,0,0,1623,1624,5,80,0,0,1624,1625,5,69,0,0,1625,1626,
	5,82,0,0,1626,1627,5,67,0,0,1627,1628,5,69,0,0,1628,1629,5,78,0,0,1629,
	1630,5,84,0,0,1630,1631,5,76,0,0,1631,1632,5,73,0,0,1632,1633,5,84,0,0,
	1633,266,1,0,0,0,1634,1635,5,66,0,0,1635,1636,5,85,0,0,1636,1637,5,67,0,
	0,1637,1638,5,75,0,0,1638,1639,5,69,0,0,1639,1640,5,84,0,0,1640,268,1,0,
	0,0,1641,1642,5,79,0,0,1642,1643,5,85,0,0,1643,1644,5,84,0,0,1644,270,1,
	0,0,0,1645,1646,5,79,0,0,1646,1647,5,70,0,0,1647,272,1,0,0,0,1648,1649,
	5,83,0,0,1649,1650,5,79,0,0,1650,1651,5,82,0,0,1651,1652,5,84,0,0,1652,
	274,1,0,0,0,1653,1654,5,67,0,0,1654,1655,5,76,0,0,1655,1656,5,85,0,0,1656,
	1657,5,83,0,0,1657,1658,5,84,0,0,1658,1659,5,69,0,0,1659,1660,5,82,0,0,
	1660,276,1,0,0,0,1661,1662,5,68,0,0,1662,1663,5,73,0,0,1663,1664,5,83,0,
	0,1664,1665,5,84,0,0,1665,1666,5,82,0,0,1666,1667,5,73,0,0,1667,1668,5,
	66,0,0,1668,1669,5,85,0,0,1669,1670,5,84,0,0,1670,1671,5,69,0,0,1671,278,
	1,0,0,0,1672,1673,5,79,0,0,1673,1674,5,86,0,0,1674,1675,5,69,0,0,1675,1676,
	5,82,0,0,1676,1677,5,87,0,0,1677,1678,5,82,0,0,1678,1679,5,73,0,0,1679,
	1680,5,84,0,0,1680,1681,5,69,0,0,1681,280,1,0,0,0,1682,1683,5,84,0,0,1683,
	1684,5,82,0,0,1684,1685,5,65,0,0,1685,1686,5,78,0,0,1686,1687,5,83,0,0,
	1687,1688,5,70,0,0,1688,1689,5,79,0,0,1689,1690,5,82,0,0,1690,1691,5,77,
	0,0,1691,282,1,0,0,0,1692,1693,5,82,0,0,1693,1694,5,69,0,0,1694,1695,5,
	68,0,0,1695,1696,5,85,0,0,1696,1697,5,67,0,0,1697,1698,5,69,0,0,1698,284,
	1,0,0,0,1699,1700,5,85,0,0,1700,1701,5,83,0,0,1701,1702,5,73,0,0,1702,1703,
	5,78,0,0,1703,1704,5,71,0,0,1704,286,1,0,0,0,1705,1706,5,83,0,0,1706,1707,
	5,69,0,0,1707,1708,5,82,0,0,1708,1709,5,68,0,0,1709,1710,5,69,0,0,1710,
	288,1,0,0,0,1711,1712,5,83,0,0,1712,1713,5,69,0,0,1713,1714,5,82,0,0,1714,
	1715,5,68,0,0,1715,1716,5,69,0,0,1716,1717,5,80,0,0,1717,1718,5,82,0,0,
	1718,1719,5,79,0,0,1719,1720,5,80,0,0,1720,1721,5,69,0,0,1721,1722,5,82,
	0,0,1722,1723,5,84,0,0,1723,1724,5,73,0,0,1724,1725,5,69,0,0,1725,1726,
	5,83,0,0,1726,290,1,0,0,0,1727,1728,5,82,0,0,1728,1729,5,69,0,0,1729,1730,
	5,67,0,0,1730,1731,5,79,0,0,1731,1732,5,82,0,0,1732,1733,5,68,0,0,1733,
	1734,5,82,0,0,1734,1735,5,69,0,0,1735,1736,5,65,0,0,1736,1737,5,68,0,0,
	1737,1738,5,69,0,0,1738,1739,5,82,0,0,1739,292,1,0,0,0,1740,1741,5,82,0,
	0,1741,1742,5,69,0,0,1742,1743,5,67,0,0,1743,1744,5,79,0,0,1744,1745,5,
	82,0,0,1745,1746,5,68,0,0,1746,1747,5,87,0,0,1747,1748,5,82,0,0,1748,1749,
	5,73,0,0,1749,1750,5,84,0,0,1750,1751,5,69,0,0,1751,1752,5,82,0,0,1752,
	294,1,0,0,0,1753,1754,5,68,0,0,1754,1755,5,69,0,0,1755,1756,5,76,0,0,1756,
	1757,5,73,0,0,1757,1758,5,77,0,0,1758,1759,5,73,0,0,1759,1760,5,84,0,0,
	1760,1761,5,69,0,0,1761,1762,5,68,0,0,1762,296,1,0,0,0,1763,1764,5,70,0,
	0,1764,1765,5,73,0,0,1765,1766,5,69,0,0,1766,1767,5,76,0,0,1767,1768,5,
	68,0,0,1768,1769,5,83,0,0,1769,298,1,0,0,0,1770,1771,5,84,0,0,1771,1772,
	5,69,0,0,1772,1773,5,82,0,0,1773,1774,5,77,0,0,1774,1775,5,73,0,0,1775,
	1776,5,78,0,0,1776,1777,5,65,0,0,1777,1778,5,84,0,0,1778,1779,5,69,0,0,
	1779,1780,5,68,0,0,1780,300,1,0,0,0,1781,1782,5,67,0,0,1782,1783,5,79,0,
	0,1783,1784,5,76,0,0,1784,1785,5,76,0,0,1785,1786,5,69,0,0,1786,1787,5,
	67,0,0,1787,1788,5,84,0,0,1788,1789,5,73,0,0,1789,1790,5,79,0,0,1790,1791,
	5,78,0,0,1791,302,1,0,0,0,1792,1793,5,73,0,0,1793,1794,5,84,0,0,1794,1795,
	5,69,0,0,1795,1796,5,77,0,0,1796,1797,5,83,0,0,1797,304,1,0,0,0,1798,1799,
	5,75,0,0,1799,1800,5,69,0,0,1800,1801,5,89,0,0,1801,1802,5,83,0,0,1802,
	306,1,0,0,0,1803,1804,5,69,0,0,1804,1805,5,83,0,0,1805,1806,5,67,0,0,1806,
	1807,5,65,0,0,1807,1808,5,80,0,0,1808,1809,5,69,0,0,1809,1810,5,68,0,0,
	1810,308,1,0,0,0,1811,1812,5,76,0,0,1812,1813,5,73,0,0,1813,1814,5,78,0,
	0,1814,1815,5,69,0,0,1815,1816,5,83,0,0,1816,310,1,0,0,0,1817,1818,5,83,
	0,0,1818,1819,5,69,0,0,1819,1820,5,80,0,0,1820,1821,5,65,0,0,1821,1822,
	5,82,0,0,1822,1823,5,65,0,0,1823,1824,5,84,0,0,1824,1825,5,69,0,0,1825,
	1826,5,68,0,0,1826,312,1,0,0,0,1827,1828,5,70,0,0,1828,1829,5,85,0,0,1829,
	1830,5,78,0,0,1830,1831,5,67,0,0,1831,1832,5,84,0,0,1832,1833,5,73,0,0,
	1833,1834,5,79,0,0,1834,1835,5,78,0,0,1835,314,1,0,0,0,1836,1837,5,69,0,
	0,1837,1838,5,88,0,0,1838,1839,5,84,0,0,1839,1840,5,69,0,0,1840,1841,5,
	78,0,0,1841,1842,5,68,0,0,1842,1843,5,69,0,0,1843,1844,5,68,0,0,1844,316,
	1,0,0,0,1845,1846,5,82,0,0,1846,1847,5,69,0,0,1847,1848,5,70,0,0,1848,1849,
	5,82,0,0,1849,1850,5,69,0,0,1850,1851,5,83,0,0,1851,1852,5,72,0,0,1852,
	318,1,0,0,0,1853,1854,5,67,0,0,1854,1855,5,76,0,0,1855,1856,5,69,0,0,1856,
	1857,5,65,0,0,1857,1858,5,82,0,0,1858,320,1,0,0,0,1859,1860,5,67,0,0,1860,
	1861,5,65,0,0,1861,1862,5,67,0,0,1862,1863,5,72,0,0,1863,1864,5,69,0,0,
	1864,322,1,0,0,0,1865,1866,5,85,0,0,1866,1867,5,78,0,0,1867,1868,5,67,0,
	0,1868,1869,5,65,0,0,1869,1870,5,67,0,0,1870,1871,5,72,0,0,1871,1872,5,
	69,0,0,1872,324,1,0,0,0,1873,1874,5,76,0,0,1874,1875,5,65,0,0,1875,1876,
	5,90,0,0,1876,1877,5,89,0,0,1877,326,1,0,0,0,1878,1879,5,70,0,0,1879,1880,
	5,79,0,0,1880,1881,5,82,0,0,1881,1882,5,77,0,0,1882,1883,5,65,0,0,1883,
	1884,5,84,0,0,1884,1885,5,84,0,0,1885,1886,5,69,0,0,1886,1887,5,68,0,0,
	1887,328,1,0,0,0,1888,1889,5,71,0,0,1889,1890,5,76,0,0,1890,1891,5,79,0,
	0,1891,1892,5,66,0,0,1892,1893,5,65,0,0,1893,1894,5,76,0,0,1894,330,1,0,
	0,0,1895,1896,5,84,0,0,1896,1897,5,69,0,0,1897,1898,5,77,0,0,1898,1899,
	5,80,0,0,1899,1900,5,79,0,0,1900,1901,5,82,0,0,1901,1902,5,65,0,0,1902,
	1903,5,82,0,0,1903,1904,5,89,0,0,1904,332,1,0,0,0,1905,1906,5,79,0,0,1906,
	1907,5,80,0,0,1907,1908,5,84,0,0,1908,1909,5,73,0,0,1909,1910,5,79,0,0,
	1910,1911,5,78,0,0,1911,1912,5,83,0,0,1912,334,1,0,0,0,1913,1914,5,85,0,
	0,1914,1915,5,78,0,0,1915,1916,5,83,0,0,1916,1917,5,69,0,0,1917,1918,5,
	84,0,0,1918,336,1,0,0,0,1919,1920,5,84,0,0,1920,1921,5,66,0,0,1921,1922,
	5,76,0,0,1922,1923,5,80,0,0,1923,1924,5,82,0,0,1924,1925,5,79,0,0,1925,
	1926,5,80,0,0,1926,1927,5,69,0,0,1927,1928,5,82,0,0,1928,1929,5,84,0,0,
	1929,1930,5,73,0,0,1930,1931,5,69,0,0,1931,1932,5,83,0,0,1932,338,1,0,0,
	0,1933,1934,5,68,0,0,1934,1935,5,66,0,0,1935,1936,5,80,0,0,1936,1937,5,
	82,0,0,1937,1938,5,79,0,0,1938,1939,5,80,0,0,1939,1940,5,69,0,0,1940,1941,
	5,82,0,0,1941,1942,5,84,0,0,1942,1943,5,73,0,0,1943,1944,5,69,0,0,1944,
	1945,5,83,0,0,1945,340,1,0,0,0,1946,1947,5,66,0,0,1947,1948,5,85,0,0,1948,
	1949,5,67,0,0,1949,1950,5,75,0,0,1950,1951,5,69,0,0,1951,1952,5,84,0,0,
	1952,1953,5,83,0,0,1953,342,1,0,0,0,1954,1955,5,83,0,0,1955,1956,5,75,0,
	0,1956,1957,5,69,0,0,1957,1958,5,87,0,0,1958,1959,5,69,0,0,1959,1960,5,
	68,0,0,1960,344,1,0,0,0,1961,1962,5,83,0,0,1962,1963,5,84,0,0,1963,1964,
	5,79,0,0,1964,1965,5,82,0,0,1965,1966,5,69,0,0,1966,1967,5,68,0,0,1967,
	346,1,0,0,0,1968,1969,5,68,0,0,1969,1970,5,73,0,0,1970,1971,5,82,0,0,1971,
	1972,5,69,0,0,1972,1973,5,67,0,0,1973,1974,5,84,0,0,1974,1975,5,79,0,0,
	1975,1976,5,82,0,0,1976,1977,5,73,0,0,1977,1978,5,69,0,0,1978,1979,5,83,
	0,0,1979,348,1,0,0,0,1980,1981,5,76,0,0,1981,1982,5,79,0,0,1982,1983,5,
	67,0,0,1983,1984,5,65,0,0,1984,1985,5,84,0,0,1985,1986,5,73,0,0,1986,1987,
	5,79,0,0,1987,1988,5,78,0,0,1988,350,1,0,0,0,1989,1990,5,69,0,0,1990,1991,
	5,88,0,0,1991,1992,5,67,0,0,1992,1993,5,72,0,0,1993,1994,5,65,0,0,1994,
	1995,5,78,0,0,1995,1996,5,71,0,0,1996,1997,5,69,0,0,1997,352,1,0,0,0,1998,
	1999,5,65,0,0,1999,2000,5,82,0,0,2000,2001,5,67,0,0,2001,2002,5,72,0,0,
	2002,2003,5,73,0,0,2003,2004,5,86,0,0,2004,2005,5,69,0,0,2005,354,1,0,0,
	0,2006,2007,5,85,0,0,2007,2008,5,78,0,0,2008,2009,5,65,0,0,2009,2010,5,
	82,0,0,2010,2011,5,67,0,0,2011,2012,5,72,0,0,2012,2013,5,73,0,0,2013,2014,
	5,86,0,0,2014,2015,5,69,0,0,2015,356,1,0,0,0,2016,2017,5,70,0,0,2017,2018,
	5,73,0,0,2018,2019,5,76,0,0,2019,2020,5,69,0,0,2020,2021,5,70,0,0,2021,
	2022,5,79,0,0,2022,2023,5,82,0,0,2023,2024,5,77,0,0,2024,2025,5,65,0,0,
	2025,2026,5,84,0,0,2026,358,1,0,0,0,2027,2028,5,84,0,0,2028,2029,5,79,0,
	0,2029,2030,5,85,0,0,2030,2031,5,67,0,0,2031,2032,5,72,0,0,2032,360,1,0,
	0,0,2033,2034,5,67,0,0,2034,2035,5,79,0,0,2035,2036,5,77,0,0,2036,2037,
	5,80,0,0,2037,2038,5,65,0,0,2038,2039,5,67,0,0,2039,2040,5,84,0,0,2040,
	362,1,0,0,0,2041,2042,5,67,0,0,2042,2043,5,79,0,0,2043,2044,5,78,0,0,2044,
	2045,5,67,0,0,2045,2046,5,65,0,0,2046,2047,5,84,0,0,2047,2048,5,69,0,0,
	2048,2049,5,78,0,0,2049,2050,5,65,0,0,2050,2051,5,84,0,0,2051,2052,5,69,
	0,0,2052,364,1,0,0,0,2053,2054,5,67,0,0,2054,2055,5,72,0,0,2055,2056,5,
	65,0,0,2056,2057,5,78,0,0,2057,2058,5,71,0,0,2058,2059,5,69,0,0,2059,366,
	1,0,0,0,2060,2061,5,67,0,0,2061,2062,5,65,0,0,2062,2063,5,83,0,0,2063,2064,
	5,67,0,0,2064,2065,5,65,0,0,2065,2066,5,68,0,0,2066,2067,5,69,0,0,2067,
	368,1,0,0,0,2068,2069,5,67,0,0,2069,2070,5,79,0,0,2070,2071,5,78,0,0,2071,
	2072,5,83,0,0,2072,2073,5,84,0,0,2073,2074,5,82,0,0,2074,2075,5,65,0,0,
	2075,2076,5,73,0,0,2076,2077,5,78,0,0,2077,2078,5,84,0,0,2078,370,1,0,0,
	0,2079,2080,5,82,0,0,2080,2081,5,69,0,0,2081,2082,5,83,0,0,2082,2083,5,
	84,0,0,2083,2084,5,82,0,0,2084,2085,5,73,0,0,2085,2086,5,67,0,0,2086,2087,
	5,84,0,0,2087,372,1,0,0,0,2088,2089,5,67,0,0,2089,2090,5,76,0,0,2090,2091,
	5,85,0,0,2091,2092,5,83,0,0,2092,2093,5,84,0,0,2093,2094,5,69,0,0,2094,
	2095,5,82,0,0,2095,2096,5,69,0,0,2096,2097,5,68,0,0,2097,374,1,0,0,0,2098,
	2099,5,83,0,0,2099,2100,5,79,0,0,2100,2101,5,82,0,0,2101,2102,5,84,0,0,
	2102,2103,5,69,0,0,2103,2104,5,68,0,0,2104,376,1,0,0,0,2105,2106,5,80,0,
	0,2106,2107,5,85,0,0,2107,2108,5,82,0,0,2108,2109,5,71,0,0,2109,2110,5,
	69,0,0,2110,378,1,0,0,0,2111,2112,5,73,0,0,2112,2113,5,78,0,0,2113,2114,
	5,80,0,0,2114,2115,5,85,0,0,2115,2116,5,84,0,0,2116,2117,5,70,0,0,2117,
	2118,5,79,0,0,2118,2119,5,82,0,0,2119,2120,5,77,0,0,2120,2121,5,65,0,0,
	2121,2122,5,84,0,0,2122,380,1,0,0,0,2123,2124,5,79,0,0,2124,2125,5,85,0,
	0,2125,2126,5,84,0,0,2126,2127,5,80,0,0,2127,2128,5,85,0,0,2128,2129,5,
	84,0,0,2129,2130,5,70,0,0,2130,2131,5,79,0,0,2131,2132,5,82,0,0,2132,2133,
	5,77,0,0,2133,2134,5,65,0,0,2134,2135,5,84,0,0,2135,382,1,0,0,0,2136,2137,
	5,68,0,0,2137,2138,5,65,0,0,2138,2139,5,84,0,0,2139,2140,5,65,0,0,2140,
	2141,5,66,0,0,2141,2142,5,65,0,0,2142,2143,5,83,0,0,2143,2144,5,69,0,0,
	2144,384,1,0,0,0,2145,2146,5,68,0,0,2146,2147,5,65,0,0,2147,2148,5,84,0,
	0,2148,2149,5,65,0,0,2149,2150,5,66,0,0,2150,2151,5,65,0,0,2151,2152,5,
	83,0,0,2152,2153,5,69,0,0,2153,2154,5,83,0,0,2154,386,1,0,0,0,2155,2156,
	5,68,0,0,2156,2157,5,70,0,0,2157,2158,5,83,0,0,2158,388,1,0,0,0,2159,2160,
	5,84,0,0,2160,2161,5,82,0,0,2161,2162,5,85,0,0,2162,2163,5,78,0,0,2163,
	2164,5,67,0,0,2164,2165,5,65,0,0,2165,2166,5,84,0,0,2166,2167,5,69,0,0,
	2167,390,1,0,0,0,2168,2169,5,65,0,0,2169,2170,5,78,0,0,2170,2171,5,65,0,
	0,2171,2172,5,76,0,0,2172,2173,5,89,0,0,2173,2174,5,90,0,0,2174,2175,5,
	69,0,0,2175,392,1,0,0,0,2176,2177,5,67,0,0,2177,2178,5,79,0,0,2178,2179,
	5,77,0,0,2179,2180,5,80,0,0,2180,2181,5,85,0,0,2181,2182,5,84,0,0,2182,
	2183,5,69,0,0,2183,394,1,0,0,0,2184,2185,5,76,0,0,2185,2186,5,73,0,0,2186,
	2187,5,83,0,0,2187,2188,5,84,0,0,2188,396,1,0,0,0,2189,2190,5,83,0,0,2190,
	2191,5,84,0,0,2191,2192,5,65,0,0,2192,2193,5,84,0,0,2193,2194,5,73,0,0,
	2194,2195,5,83,0,0,2195,2196,5,84,0,0,2196,2197,5,73,0,0,2197,2198,5,67,
	0,0,2198,2199,5,83,0,0,2199,398,1,0,0,0,2200,2201,5,80,0,0,2201,2202,5,
	65,0,0,2202,2203,5,82,0,0,2203,2204,5,84,0,0,2204,2205,5,73,0,0,2205,2206,
	5,84,0,0,2206,2207,5,73,0,0,2207,2208,5,79,0,0,2208,2209,5,78,0,0,2209,
	2210,5,69,0,0,2210,2211,5,68,0,0,2211,400,1,0,0,0,2212,2213,5,69,0,0,2213,
	2214,5,88,0,0,2214,2215,5,84,0,0,2215,2216,5,69,0,0,2216,2217,5,82,0,0,
	2217,2218,5,78,0,0,2218,2219,5,65,0,0,2219,2220,5,76,0,0,2220,402,1,0,0,
	0,2221,2222,5,68,0,0,2222,2223,5,69,0,0,2223,2224,5,70,0,0,2224,2225,5,
	73,0,0,2225,2226,5,78,0,0,2226,2227,5,69,0,0,2227,2228,5,68,0,0,2228,404,
	1,0,0,0,2229,2230,5,82,0,0,2230,2231,5,69,0,0,2231,2232,5,86,0,0,2232,2233,
	5,79,0,0,2233,2234,5,75,0,0,2234,2235,5,69,0,0,2235,406,1,0,0,0,2236,2237,
	5,71,0,0,2237,2238,5,82,0,0,2238,2239,5,65,0,0,2239,2240,5,78,0,0,2240,
	2241,5,84,0,0,2241,408,1,0,0,0,2242,2243,5,76,0,0,2243,2244,5,79,0,0,2244,
	2245,5,67,0,0,2245,2246,5,75,0,0,2246,410,1,0,0,0,2247,2248,5,85,0,0,2248,
	2249,5,78,0,0,2249,2250,5,76,0,0,2250,2251,5,79,0,0,2251,2252,5,67,0,0,
	2252,2253,5,75,0,0,2253,412,1,0,0,0,2254,2255,5,77,0,0,2255,2256,5,83,0,
	0,2256,2257,5,67,0,0,2257,2258,5,75,0,0,2258,414,1,0,0,0,2259,2260,5,82,
	0,0,2260,2261,5,69,0,0,2261,2262,5,80,0,0,2262,2263,5,65,0,0,2263,2264,
	5,73,0,0,2264,2265,5,82,0,0,2265,416,1,0,0,0,2266,2267,5,82,0,0,2267,2268,
	5,69,0,0,2268,2269,5,67,0,0,2269,2270,5,79,0,0,2270,2271,5,86,0,0,2271,
	2272,5,69,0,0,2272,2273,5,82,0,0,2273,418,1,0,0,0,2274,2275,5,69,0,0,2275,
	2276,5,88,0,0,2276,2277,5,80,0,0,2277,2278,5,79,0,0,2278,2279,5,82,0,0,
	2279,2280,5,84,0,0,2280,420,1,0,0,0,2281,2282,5,73,0,0,2282,2283,5,77,0,
	0,2283,2284,5,80,0,0,2284,2285,5,79,0,0,2285,2286,5,82,0,0,2286,2287,5,
	84,0,0,2287,422,1,0,0,0,2288,2289,5,76,0,0,2289,2290,5,79,0,0,2290,2291,
	5,65,0,0,2291,2292,5,68,0,0,2292,424,1,0,0,0,2293,2294,5,85,0,0,2294,2295,
	5,78,0,0,2295,2296,5,76,0,0,2296,2297,5,79,0,0,2297,2298,5,65,0,0,2298,
	2299,5,68,0,0,2299,426,1,0,0,0,2300,2301,5,82,0,0,2301,2302,5,79,0,0,2302,
	2303,5,76,0,0,2303,2304,5,69,0,0,2304,428,1,0,0,0,2305,2306,5,82,0,0,2306,
	2307,5,79,0,0,2307,2308,5,76,0,0,2308,2309,5,69,0,0,2309,2310,5,83,0,0,
	2310,430,1,0,0,0,2311,2312,5,67,0,0,2312,2313,5,79,0,0,2313,2314,5,77,0,
	0,2314,2315,5,80,0,0,2315,2316,5,65,0,0,2316,2317,5,67,0,0,2317,2318,5,
	84,0,0,2318,2319,5,73,0,0,2319,2320,5,79,0,0,2320,2321,5,78,0,0,2321,2322,
	5,83,0,0,2322,432,1,0,0,0,2323,2324,5,80,0,0,2324,2325,5,82,0,0,2325,2326,
	5,73,0,0,2326,2327,5,78,0,0,2327,2328,5,67,0,0,2328,2329,5,73,0,0,2329,
	2330,5,80,0,0,2330,2331,5,65,0,0,2331,2332,5,76,0,0,2332,2333,5,83,0,0,
	2333,434,1,0,0,0,2334,2335,5,84,0,0,2335,2336,5,82,0,0,2336,2337,5,65,0,
	0,2337,2338,5,78,0,0,2338,2339,5,83,0,0,2339,2340,5,65,0,0,2340,2341,5,
	67,0,0,2341,2342,5,84,0,0,2342,2343,5,73,0,0,2343,2344,5,79,0,0,2344,2345,
	5,78,0,0,2345,2346,5,83,0,0,2346,436,1,0,0,0,2347,2348,5,73,0,0,2348,2349,
	5,78,0,0,2349,2350,5,68,0,0,2350,2351,5,69,0,0,2351,2352,5,88,0,0,2352,
	438,1,0,0,0,2353,2354,5,73,0,0,2354,2355,5,78,0,0,2355,2356,5,68,0,0,2356,
	2357,5,69,0,0,2357,2358,5,88,0,0,2358,2359,5,69,0,0,2359,2360,5,83,0,0,
	2360,440,1,0,0,0,2361,2362,5,76,0,0,2362,2363,5,79,0,0,2363,2364,5,67,0,
	0,2364,2365,5,75,0,0,2365,2366,5,83,0,0,2366,442,1,0,0,0,2367,2368,5,79,
	0,0,2368,2369,5,80,0,0,2369,2370,5,84,0,0,2370,2371,5,73,0,0,2371,2372,
	5,79,0,0,2372,2373,5,78,0,0,2373,444,1,0,0,0,2374,2375,5,65,0,0,2375,2376,
	5,78,0,0,2376,2377,5,84,0,0,2377,2378,5,73,0,0,2378,446,1,0,0,0,2379,2380,
	5,76,0,0,2380,2381,5,79,0,0,2381,2382,5,67,0,0,2382,2383,5,65,0,0,2383,
	2384,5,76,0,0,2384,448,1,0,0,0,2385,2386,5,73,0,0,2386,2387,5,78,0,0,2387,
	2388,5,80,0,0,2388,2389,5,65,0,0,2389,2390,5,84,0,0,2390,2391,5,72,0,0,
	2391,450,1,0,0,0,2392,2393,5,87,0,0,2393,2394,5,65,0,0,2394,2395,5,84,0,
	0,2395,2396,5,69,0,0,2396,2397,5,82,0,0,2397,2398,5,77,0,0,2398,2399,5,
	65,0,0,2399,2400,5,82,0,0,2400,2401,5,75,0,0,2401,452,1,0,0,0,2402,2403,
	5,85,0,0,2403,2404,5,78,0,0,2404,2405,5,78,0,0,2405,2406,5,69,0,0,2406,
	2407,5,83,0,0,2407,2408,5,84,0,0,2408,454,1,0,0,0,2409,2410,5,77,0,0,2410,
	2411,5,65,0,0,2411,2412,5,84,0,0,2412,2413,5,67,0,0,2413,2414,5,72,0,0,
	2414,456,1,0,0,0,2415,2416,5,78,0,0,2416,2417,5,69,0,0,2417,2418,5,88,0,
	0,2418,2419,5,84,0,0,2419,458,1,0,0,0,2420,2421,5,87,0,0,2421,2422,5,73,
	0,0,2422,2423,5,84,0,0,2423,2424,5,72,0,0,2424,2425,5,73,0,0,2425,2426,
	5,78,0,0,2426,460,1,0,0,0,2427,2428,5,87,0,0,2428,2429,5,83,0,0,2429,462,
	1,0,0,0,2430,2431,5,83,0,0,2431,2432,5,89,0,0,2432,2433,5,83,0,0,2433,2434,
	5,84,0,0,2434,2435,5,69,0,0,2435,2436,5,77,0,0,2436,464,1,0,0,0,2437,2438,
	5,73,0,0,2438,2439,5,78,0,0,2439,2440,5,67,0,0,2440,2441,5,76,0,0,2441,
	2442,5,85,0,0,2442,2443,5,68,0,0,2443,2444,5,73,0,0,2444,2445,5,78,0,0,
	2445,2446,5,71,0,0,2446,466,1,0,0,0,2447,2448,5,69,0,0,2448,2449,5,88,0,
	0,2449,2450,5,67,0,0,2450,2451,5,76,0,0,2451,2452,5,85,0,0,2452,2453,5,
	68,0,0,2453,2454,5,73,0,0,2454,2455,5,78,0,0,2455,2456,5,71,0,0,2456,468,
	1,0,0,0,2457,2458,5,79,0,0,2458,2459,5,86,0,0,2459,2460,5,69,0,0,2460,2461,
	5,82,0,0,2461,2462,5,87,0,0,2462,2463,5,82,0,0,2463,2464,5,73,0,0,2464,
	2465,5,84,0,0,2465,2466,5,73,0,0,2466,2467,5,78,0,0,2467,2468,5,71,0,0,
	2468,470,1,0,0,0,2469,2470,5,67,0,0,2470,2471,5,79,0,0,2471,2472,5,78,0,
	0,2472,2473,5,83,0,0,2473,2474,5,84,0,0,2474,2475,5,82,0,0,2475,2476,5,
	65,0,0,2476,2477,5,73,0,0,2477,2478,5,78,0,0,2478,2479,5,84,0,0,2479,2480,
	5,83,0,0,2480,472,1,0,0,0,2481,2482,5,71,0,0,2482,2483,5,69,0,0,2483,2484,
	5,78,0,0,2484,2485,5,69,0,0,2485,2486,5,82,0,0,2486,2487,5,65,0,0,2487,
	2488,5,84,0,0,2488,2489,5,69,0,0,2489,2490,5,68,0,0,2490,474,1,0,0,0,2491,
	2492,5,87,0,0,2492,2493,5,65,0,0,2493,2494,5,84,0,0,2494,2495,5,69,0,0,
	2495,2496,5,82,0,0,2496,2497,5,77,0,0,2497,2498,5,65,0,0,2498,2499,5,82,
	0,0,2499,2500,5,75,0,0,2500,2501,5,83,0,0,2501,476,1,0,0,0,2502,2503,5,
	67,0,0,2503,2504,5,65,0,0,2504,2505,5,84,0,0,2505,2506,5,65,0,0,2506,2507,
	5,76,0,0,2507,2508,5,79,0,0,2508,2509,5,71,0,0,2509,478,1,0,0,0,2510,2511,
	5,76,0,0,2511,2512,5,65,0,0,2512,2513,5,78,0,0,2513,2514,5,71,0,0,2514,
	2515,5,85,0,0,2515,2516,5,65,0,0,2516,2517,5,71,0,0,2517,2518,5,69,0,0,
	2518,480,1,0,0,0,2519,2520,5,74,0,0,2520,2521,5,65,0,0,2521,2522,5,86,0,
	0,2522,2523,5,65,0,0,2523,482,1,0,0,0,2524,2525,5,83,0,0,2525,2526,5,67,
	0,0,2526,2527,5,65,0,0,2527,2528,5,76,0,0,2528,2529,5,65,0,0,2529,484,1,
	0,0,0,2530,2531,5,80,0,0,2531,2532,5,89,0,0,2532,2533,5,84,0,0,2533,2534,
	5,72,0,0,2534,2535,5,79,0,0,2535,2536,5,78,0,0,2536,486,1,0,0,0,2537,2538,
	5,74,0,0,2538,2539,5,65,0,0,2539,2540,5,82,0,0,2540,488,1,0,0,0,2541,2542,
	5,70,0,0,2542,2543,5,73,0,0,2543,2544,5,76,0,0,2544,2545,5,69,0,0,2545,
	490,1,0,0,0,2546,2547,5,80,0,0,2547,2548,5,89,0,0,2548,2549,5,84,0,0,2549,
	2550,5,72,0,0,2550,2551,5,79,0,0,2551,2552,5,78,0,0,2552,2553,5,95,0,0,
	2553,2554,5,70,0,0,2554,2555,5,73,0,0,2555,2556,5,76,0,0,2556,2557,5,69,
	0,0,2557,2558,5,83,0,0,2558,492,1,0,0,0,2559,2560,5,80,0,0,2560,2561,5,
	89,0,0,2561,2562,5,84,0,0,2562,2563,5,72,0,0,2563,2564,5,79,0,0,2564,2565,
	5,78,0,0,2565,2566,5,95,0,0,2566,2567,5,82,0,0,2567,2568,5,69,0,0,2568,
	2569,5,81,0,0,2569,2570,5,85,0,0,2570,2571,5,73,0,0,2571,2572,5,82,0,0,
	2572,2573,5,69,0,0,2573,2574,5,77,0,0,2574,2575,5,69,0,0,2575,2576,5,78,
	0,0,2576,2577,5,84,0,0,2577,2578,5,83,0,0,2578,494,1,0,0,0,2579,2580,5,
	80,0,0,2580,2581,5,89,0,0,2581,2582,5,84,0,0,2582,2583,5,72,0,0,2583,2584,
	5,79,0,0,2584,2585,5,78,0,0,2585,2586,5,95,0,0,2586,2587,5,68,0,0,2587,
	2588,5,69,0,0,2588,2589,5,80,0,0,2589,2590,5,69,0,0,2590,2591,5,78,0,0,
	2591,2592,5,68,0,0,2592,2593,5,69,0,0,2593,2594,5,78,0,0,2594,2595,5,67,
	0,0,2595,2596,5,73,0,0,2596,2597,5,69,0,0,2597,2598,5,83,0,0,2598,496,1,
	0,0,0,2599,2600,5,80,0,0,2600,2601,5,89,0,0,2601,2602,5,84,0,0,2602,2603,
	5,72,0,0,2603,2604,5,79,0,0,2604,2605,5,78,0,0,2605,2606,5,95,0,0,2606,
	2607,5,74,0,0,2607,2608,5,65,0,0,2608,2609,5,82,0,0,2609,498,1,0,0,0,2610,
	2611,5,80,0,0,2611,2612,5,89,0,0,2612,2613,5,84,0,0,2613,2614,5,72,0,0,
	2614,2615,5,79,0,0,2615,2616,5,78,0,0,2616,2617,5,95,0,0,2617,2618,5,65,
	0,0,2618,2619,5,82,0,0,2619,2620,5,67,0,0,2620,2621,5,72,0,0,2621,2622,
	5,73,0,0,2622,2623,5,86,0,0,2623,2624,5,69,0,0,2624,2625,5,83,0,0,2625,
	500,1,0,0,0,2626,2627,5,80,0,0,2627,2628,5,89,0,0,2628,2629,5,84,0,0,2629,
	2630,5,72,0,0,2630,2631,5,79,0,0,2631,2632,5,78,0,0,2632,2633,5,95,0,0,
	2633,2634,5,80,0,0,2634,2635,5,65,0,0,2635,2636,5,82,0,0,2636,2637,5,65,
	0,0,2637,2638,5,77,0,0,2638,2639,5,69,0,0,2639,2640,5,84,0,0,2640,2641,
	5,69,0,0,2641,2642,5,82,0,0,2642,502,1,0,0,0,2643,2644,5,69,0,0,2644,2645,
	5,78,0,0,2645,2646,5,71,0,0,2646,2647,5,73,0,0,2647,2648,5,78,0,0,2648,
	2649,5,69,0,0,2649,504,1,0,0,0,2650,2651,5,67,0,0,2651,2652,5,65,0,0,2652,
	2653,5,84,0,0,2653,2654,5,65,0,0,2654,2655,5,76,0,0,2655,2656,5,79,0,0,
	2656,2657,5,71,0,0,2657,2658,5,83,0,0,2658,506,1,0,0,0,2659,2660,5,86,0,
	0,2660,2661,5,73,0,0,2661,2662,5,69,0,0,2662,2663,5,87,0,0,2663,2664,5,
	83,0,0,2664,508,1,0,0,0,2665,2666,5,74,0,0,2666,2667,5,65,0,0,2667,2668,
	5,82,0,0,2668,2669,5,83,0,0,2669,510,1,0,0,0,2670,2671,5,80,0,0,2671,2672,
	5,82,0,0,2672,2673,5,73,0,0,2673,2674,5,77,0,0,2674,2675,5,65,0,0,2675,
	2676,5,82,0,0,2676,2677,5,89,0,0,2677,512,1,0,0,0,2678,2679,5,85,0,0,2679,
	2680,5,78,0,0,2680,2681,5,73,0,0,2681,2682,5,81,0,0,2682,2683,5,85,0,0,
	2683,2684,5,69,0,0,2684,514,1,0,0,0,2685,2686,5,75,0,0,2686,2687,5,69,0,
	0,2687,2688,5,89,0,0,2688,516,1,0,0,0,2689,2690,5,80,0,0,2690,2691,5,69,
	0,0,2691,2692,5,82,0,0,2692,2693,5,73,0,0,2693,2694,5,79,0,0,2694,2695,
	5,68,0,0,2695,518,1,0,0,0,2696,2697,5,83,0,0,2697,2698,5,89,0,0,2698,2699,
	5,83,0,0,2699,2700,5,84,0,0,2700,2701,5,69,0,0,2701,2702,5,77,0,0,2702,
	2703,5,95,0,0,2703,2704,5,84,0,0,2704,2705,5,73,0,0,2705,2706,5,77,0,0,
	2706,2707,5,69,0,0,2707,520,1,0,0,0,2708,2709,5,69,0,0,2709,2710,5,78,0,
	0,2710,2711,5,70,0,0,2711,2712,5,79,0,0,2712,2713,5,82,0,0,2713,2714,5,
	67,0,0,2714,2715,5,69,0,0,2715,2716,5,68,0,0,2716,522,1,0,0,0,2717,2718,
	5,77,0,0,2718,2719,5,69,0,0,2719,2720,5,84,0,0,2720,2721,5,65,0,0,2721,
	2722,5,68,0,0,2722,2723,5,65,0,0,2723,2724,5,84,0,0,2724,2725,5,65,0,0,
	2725,524,1,0,0,0,2726,2727,5,86,0,0,2727,2728,5,73,0,0,2728,2729,5,82,0,
	0,2729,2730,5,84,0,0,2730,2731,5,85,0,0,2731,2732,5,65,0,0,2732,2733,5,
	76,0,0,2733,526,1,0,0,0,2734,2735,5,90,0,0,2735,2736,5,79,0,0,2736,2737,
	5,78,0,0,2737,2738,5,69,0,0,2738,528,1,0,0,0,2739,2740,5,84,0,0,2740,2741,
	5,85,0,0,2741,2742,5,77,0,0,2742,2743,5,66,0,0,2743,2744,5,76,0,0,2744,
	2745,5,69,0,0,2745,530,1,0,0,0,2746,2747,5,72,0,0,2747,2748,5,79,0,0,2748,
	2749,5,80,0,0,2749,532,1,0,0,0,2750,2751,5,67,0,0,2751,2752,5,85,0,0,2752,
	2753,5,77,0,0,2753,2754,5,85,0,0,2754,2755,5,76,0,0,2755,2756,5,65,0,0,
	2756,2757,5,84,0,0,2757,2758,5,69,0,0,2758,534,1,0,0,0,2759,2760,5,68,0,
	0,2760,2761,5,69,0,0,2761,2762,5,83,0,0,2762,2763,5,67,0,0,2763,2764,5,
	82,0,0,2764,2765,5,73,0,0,2765,2766,5,80,0,0,2766,2767,5,84,0,0,2767,2768,
	5,79,0,0,2768,2769,5,82,0,0,2769,536,1,0,0,0,2770,2771,5,84,0,0,2771,2772,
	5,73,0,0,2772,2773,5,77,0,0,2773,2774,5,69,0,0,2774,2775,5,67,0,0,2775,
	2776,5,79,0,0,2776,2777,5,76,0,0,2777,538,1,0,0,0,2778,2779,5,83,0,0,2779,
	2780,5,73,0,0,2780,2781,5,90,0,0,2781,2782,5,69,0,0,2782,540,1,0,0,0,2783,
	2784,5,79,0,0,2784,2785,5,70,0,0,2785,2786,5,70,0,0,2786,2787,5,83,0,0,
	2787,2788,5,69,0,0,2788,2789,5,84,0,0,2789,542,1,0,0,0,2790,2791,5,83,0,
	0,2791,2792,5,84,0,0,2792,2793,5,69,0,0,2793,2794,5,80,0,0,2794,544,1,0,
	0,0,2795,2796,5,83,0,0,2796,2797,5,76,0,0,2797,2798,5,73,0,0,2798,2799,
	5,68,0,0,2799,2800,5,69,0,0,2800,546,1,0,0,0,2801,2802,5,83,0,0,2802,2803,
	5,69,0,0,2803,2804,5,83,0,0,2804,2805,5,83,0,0,2805,2806,5,73,0,0,2806,
	2807,5,79,0,0,2807,2808,5,78,0,0,2808,548,1,0,0,0,2809,2810,5,77,0,0,2810,
	2811,5,65,0,0,2811,2812,5,84,0,0,2812,2813,5,67,0,0,2813,2814,5,72,0,0,
	2814,2815,5,95,0,0,2815,2816,5,82,0,0,2816,2817,5,69,0,0,2817,2818,5,67,
	0,0,2818,2819,5,79,0,0,2819,2820,5,71,0,0,2820,2821,5,78,0,0,2821,2822,
	5,73,0,0,2822,2823,5,90,0,0,2823,2824,5,69,0,0,2824,550,1,0,0,0,2825,2826,
	5,77,0,0,2826,2827,5,69,0,0,2827,2828,5,65,0,0,2828,2829,5,83,0,0,2829,
	2830,5,85,0,0,2830,2831,5,82,0,0,2831,2832,5,69,0,0,2832,2833,5,83,0,0,
	2833,552,1,0,0,0,2834,2835,5,80,0,0,2835,2836,5,65,0,0,2836,2837,5,84,0,
	0,2837,2838,5,84,0,0,2838,2839,5,69,0,0,2839,2840,5,82,0,0,2840,2841,5,
	78,0,0,2841,554,1,0,0,0,2842,2843,5,79,0,0,2843,2844,5,78,0,0,2844,2845,
	5,69,0,0,2845,556,1,0,0,0,2846,2847,5,80,0,0,2847,2848,5,69,0,0,2848,2849,
	5,82,0,0,2849,558,1,0,0,0,2850,2851,5,83,0,0,2851,2852,5,75,0,0,2852,2853,
	5,73,0,0,2853,2854,5,80,0,0,2854,560,1,0,0,0,2855,2856,5,80,0,0,2856,2857,
	5,65,0,0,2857,2858,5,83,0,0,2858,2859,5,84,0,0,2859,562,1,0,0,0,2860,2861,
	5,68,0,0,2861,2862,5,69,0,0,2862,2863,5,70,0,0,2863,2864,5,73,0,0,2864,
	2865,5,78,0,0,2865,2866,5,69,0,0,2866,564,1,0,0,0,2867,2868,5,83,0,0,2868,
	2869,5,84,0,0,2869,2870,5,82,0,0,2870,2871,5,73,0,0,2871,2872,5,78,0,0,
	2872,2873,5,71,0,0,2873,566,1,0,0,0,2874,2875,5,65,0,0,2875,2876,5,82,0,
	0,2876,2877,5,82,0,0,2877,2878,5,65,0,0,2878,2879,5,89,0,0,2879,568,1,0,
	0,0,2880,2881,5,77,0,0,2881,2882,5,65,0,0,2882,2883,5,80,0,0,2883,570,1,
	0,0,0,2884,2885,5,67,0,0,2885,2886,5,72,0,0,2886,2887,5,65,0,0,2887,2888,
	5,82,0,0,2888,572,1,0,0,0,2889,2890,5,86,0,0,2890,2891,5,65,0,0,2891,2892,
	5,82,0,0,2892,2893,5,67,0,0,2893,2894,5,72,0,0,2894,2895,5,65,0,0,2895,
	2896,5,82,0,0,2896,574,1,0,0,0,2897,2898,5,66,0,0,2898,2899,5,73,0,0,2899,
	2900,5,78,0,0,2900,2901,5,65,0,0,2901,2902,5,82,0,0,2902,2903,5,89,0,0,
	2903,576,1,0,0,0,2904,2905,5,86,0,0,2905,2906,5,65,0,0,2906,2907,5,82,0,
	0,2907,2908,5,66,0,0,2908,2909,5,73,0,0,2909,2910,5,78,0,0,2910,2911,5,
	65,0,0,2911,2912,5,82,0,0,2912,2913,5,89,0,0,2913,578,1,0,0,0,2914,2915,
	5,66,0,0,2915,2916,5,89,0,0,2916,2917,5,84,0,0,2917,2918,5,69,0,0,2918,
	2919,5,83,0,0,2919,580,1,0,0,0,2920,2921,5,68,0,0,2921,2922,5,69,0,0,2922,
	2923,5,67,0,0,2923,2924,5,73,0,0,2924,2925,5,77,0,0,2925,2926,5,65,0,0,
	2926,2927,5,76,0,0,2927,582,1,0,0,0,2928,2929,5,68,0,0,2929,2930,5,69,0,
	0,2930,2931,5,67,0,0,2931,584,1,0,0,0,2932,2933,5,78,0,0,2933,2934,5,85,
	0,0,2934,2935,5,77,0,0,2935,2936,5,69,0,0,2936,2937,5,82,0,0,2937,2938,
	5,73,0,0,2938,2939,5,67,0,0,2939,586,1,0,0,0,2940,2941,5,84,0,0,2941,2942,
	5,73,0,0,2942,2943,5,78,0,0,2943,2944,5,89,0,0,2944,2945,5,73,0,0,2945,
	2946,5,78,0,0,2946,2947,5,84,0,0,2947,588,1,0,0,0,2948,2949,5,83,0,0,2949,
	2950,5,77,0,0,2950,2951,5,65,0,0,2951,2952,5,76,0,0,2952,2953,5,76,0,0,
	2953,2954,5,73,0,0,2954,2955,5,78,0,0,2955,2956,5,84,0,0,2956,590,1,0,0,
	0,2957,2958,5,73,0,0,2958,2959,5,78,0,0,2959,2960,5,84,0,0,2960,592,1,0,
	0,0,2961,2962,5,73,0,0,2962,2963,5,78,0,0,2963,2964,5,84,0,0,2964,2965,
	5,69,0,0,2965,2966,5,71,0,0,2966,2967,5,69,0,0,2967,2968,5,82,0,0,2968,
	594,1,0,0,0,2969,2970,5,66,0,0,2970,2971,5,73,0,0,2971,2972,5,71,0,0,2972,
	2973,5,73,0,0,2973,2974,5,78,0,0,2974,2975,5,84,0,0,2975,596,1,0,0,0,2976,
	2977,5,70,0,0,2977,2978,5,76,0,0,2978,2979,5,79,0,0,2979,2980,5,65,0,0,
	2980,2981,5,84,0,0,2981,598,1,0,0,0,2982,2983,5,68,0,0,2983,2984,5,79,0,
	0,2984,2985,5,85,0,0,2985,2986,5,66,0,0,2986,2987,5,76,0,0,2987,2988,5,
	69,0,0,2988,600,1,0,0,0,2989,2990,5,68,0,0,2990,2991,5,65,0,0,2991,2992,
	5,84,0,0,2992,2993,5,69,0,0,2993,602,1,0,0,0,2994,2995,5,84,0,0,2995,2996,
	5,73,0,0,2996,2997,5,77,0,0,2997,2998,5,69,0,0,2998,604,1,0,0,0,2999,3000,
	5,84,0,0,3000,3001,5,73,0,0,3001,3002,5,77,0,0,3002,3003,5,69,0,0,3003,
	3004,5,83,0,0,3004,3005,5,84,0,0,3005,3006,5,65,0,0,3006,3007,5,77,0,0,
	3007,3008,5,80,0,0,3008,606,1,0,0,0,3009,3010,5,84,0,0,3010,3011,5,73,0,
	0,3011,3012,5,77,0,0,3012,3013,5,69,0,0,3013,3014,5,83,0,0,3014,3015,5,
	84,0,0,3015,3016,5,65,0,0,3016,3017,5,77,0,0,3017,3018,5,80,0,0,3018,3019,
	5,95,0,0,3019,3020,5,76,0,0,3020,3021,5,84,0,0,3021,3022,5,90,0,0,3022,
	608,1,0,0,0,3023,3024,5,77,0,0,3024,3025,5,85,0,0,3025,3026,5,76,0,0,3026,
	3027,5,84,0,0,3027,3028,5,73,0,0,3028,3029,5,83,0,0,3029,3030,5,69,0,0,
	3030,3031,5,84,0,0,3031,610,1,0,0,0,3032,3033,5,66,0,0,3033,3034,5,79,0,
	0,3034,3035,5,79,0,0,3035,3036,5,76,0,0,3036,3037,5,69,0,0,3037,3038,5,
	65,0,0,3038,3039,5,78,0,0,3039,612,1,0,0,0,3040,3041,5,82,0,0,3041,3042,
	5,65,0,0,3042,3043,5,87,0,0,3043,614,1,0,0,0,3044,3045,5,82,0,0,3045,3046,
	5,79,0,0,3046,3047,5,87,0,0,3047,616,1,0,0,0,3048,3049,5,78,0,0,3049,3050,
	5,85,0,0,3050,3051,5,76,0,0,3051,3052,5,76,0,0,3052,618,1,0,0,0,3053,3054,
	5,68,0,0,3054,3055,5,65,0,0,3055,3056,5,84,0,0,3056,3057,5,69,0,0,3057,
	3058,5,84,0,0,3058,3059,5,73,0,0,3059,3060,5,77,0,0,3060,3061,5,69,0,0,
	3061,620,1,0,0,0,3062,3063,5,61,0,0,3063,622,1,0,0,0,3064,3065,5,62,0,0,
	3065,624,1,0,0,0,3066,3067,5,60,0,0,3067,626,1,0,0,0,3068,3069,5,33,0,0,
	3069,628,1,0,0,0,3070,3071,5,126,0,0,3071,630,1,0,0,0,3072,3073,5,124,0,
	0,3073,632,1,0,0,0,3074,3075,5,38,0,0,3075,634,1,0,0,0,3076,3077,5,94,0,
	0,3077,636,1,0,0,0,3078,3079,5,46,0,0,3079,638,1,0,0,0,3080,3081,5,91,0,
	0,3081,640,1,0,0,0,3082,3083,5,93,0,0,3083,642,1,0,0,0,3084,3085,5,40,0,
	0,3085,644,1,0,0,0,3086,3087,5,41,0,0,3087,646,1,0,0,0,3088,3089,5,123,
	0,0,3089,648,1,0,0,0,3090,3091,5,125,0,0,3091,650,1,0,0,0,3092,3093,5,44,
	0,0,3093,652,1,0,0,0,3094,3095,5,59,0,0,3095,654,1,0,0,0,3096,3097,5,64,
	0,0,3097,656,1,0,0,0,3098,3099,5,39,0,0,3099,658,1,0,0,0,3100,3101,5,34,
	0,0,3101,660,1,0,0,0,3102,3103,5,96,0,0,3103,662,1,0,0,0,3104,3105,5,58,
	0,0,3105,664,1,0,0,0,3106,3107,5,42,0,0,3107,666,1,0,0,0,3108,3109,5,95,
	0,0,3109,668,1,0,0,0,3110,3111,5,45,0,0,3111,670,1,0,0,0,3112,3113,5,43,
	0,0,3113,672,1,0,0,0,3114,3115,5,37,0,0,3115,674,1,0,0,0,3116,3117,5,124,
	0,0,3117,3118,5,124,0,0,3118,676,1,0,0,0,3119,3120,5,45,0,0,3120,3121,5,
	45,0,0,3121,678,1,0,0,0,3122,3123,5,47,0,0,3123,680,1,0,0,0,3124,3125,5,
	63,0,0,3125,682,1,0,0,0,3126,3127,5,46,0,0,3127,3128,3,705,352,0,3128,684,
	1,0,0,0,3129,3133,3,711,355,0,3130,3133,3,713,356,0,3131,3133,3,717,358,
	0,3132,3129,1,0,0,0,3132,3130,1,0,0,0,3132,3131,1,0,0,0,3133,686,1,0,0,
	0,3134,3136,3,707,353,0,3135,3134,1,0,0,0,3136,3137,1,0,0,0,3137,3135,1,
	0,0,0,3137,3138,1,0,0,0,3138,688,1,0,0,0,3139,3141,3,707,353,0,3140,3139,
	1,0,0,0,3141,3142,1,0,0,0,3142,3140,1,0,0,0,3142,3143,1,0,0,0,3143,3145,
	1,0,0,0,3144,3140,1,0,0,0,3144,3145,1,0,0,0,3145,3146,1,0,0,0,3146,3148,
	5,46,0,0,3147,3149,3,707,353,0,3148,3147,1,0,0,0,3149,3150,1,0,0,0,3150,
	3148,1,0,0,0,3150,3151,1,0,0,0,3151,3183,1,0,0,0,3152,3154,3,707,353,0,
	3153,3152,1,0,0,0,3154,3155,1,0,0,0,3155,3153,1,0,0,0,3155,3156,1,0,0,0,
	3156,3157,1,0,0,0,3157,3158,5,46,0,0,3158,3159,3,703,351,0,3159,3183,1,
	0,0,0,3160,3162,3,707,353,0,3161,3160,1,0,0,0,3162,3163,1,0,0,0,3163,3161,
	1,0,0,0,3163,3164,1,0,0,0,3164,3166,1,0,0,0,3165,3161,1,0,0,0,3165,3166,
	1,0,0,0,3166,3167,1,0,0,0,3167,3169,5,46,0,0,3168,3170,3,707,353,0,3169,
	3168,1,0,0,0,3170,3171,1,0,0,0,3171,3169,1,0,0,0,3171,3172,1,0,0,0,3172,
	3173,1,0,0,0,3173,3174,3,703,351,0,3174,3183,1,0,0,0,3175,3177,3,707,353,
	0,3176,3175,1,0,0,0,3177,3178,1,0,0,0,3178,3176,1,0,0,0,3178,3179,1,0,0,
	0,3179,3180,1,0,0,0,3180,3181,3,703,351,0,3181,3183,1,0,0,0,3182,3144,1,
	0,0,0,3182,3153,1,0,0,0,3182,3165,1,0,0,0,3182,3176,1,0,0,0,3183,690,1,
	0,0,0,3184,3185,3,715,357,0,3185,692,1,0,0,0,3186,3187,3,705,352,0,3187,
	694,1,0,0,0,3188,3189,3,699,349,0,3189,696,1,0,0,0,3190,3191,5,61,0,0,3191,
	3192,5,62,0,0,3192,698,1,0,0,0,3193,3197,7,2,0,0,3194,3196,8,3,0,0,3195,
	3194,1,0,0,0,3196,3199,1,0,0,0,3197,3195,1,0,0,0,3197,3198,1,0,0,0,3198,
	3201,1,0,0,0,3199,3197,1,0,0,0,3200,3193,1,0,0,0,3201,3202,1,0,0,0,3202,
	3200,1,0,0,0,3202,3203,1,0,0,0,3203,700,1,0,0,0,3204,3212,5,96,0,0,3205,
	3206,5,92,0,0,3206,3211,9,0,0,0,3207,3208,5,96,0,0,3208,3211,5,96,0,0,3209,
	3211,8,4,0,0,3210,3205,1,0,0,0,3210,3207,1,0,0,0,3210,3209,1,0,0,0,3211,
	3214,1,0,0,0,3212,3210,1,0,0,0,3212,3213,1,0,0,0,3213,3215,1,0,0,0,3214,
	3212,1,0,0,0,3215,3216,5,96,0,0,3216,702,1,0,0,0,3217,3219,5,69,0,0,3218,
	3220,7,5,0,0,3219,3218,1,0,0,0,3219,3220,1,0,0,0,3220,3222,1,0,0,0,3221,
	3223,3,707,353,0,3222,3221,1,0,0,0,3223,3224,1,0,0,0,3224,3222,1,0,0,0,
	3224,3225,1,0,0,0,3225,704,1,0,0,0,3226,3228,7,6,0,0,3227,3226,1,0,0,0,
	3228,3231,1,0,0,0,3229,3230,1,0,0,0,3229,3227,1,0,0,0,3230,3233,1,0,0,0,
	3231,3229,1,0,0,0,3232,3234,7,7,0,0,3233,3232,1,0,0,0,3234,3235,1,0,0,0,
	3235,3236,1,0,0,0,3235,3233,1,0,0,0,3236,3240,1,0,0,0,3237,3239,7,6,0,0,
	3238,3237,1,0,0,0,3239,3242,1,0,0,0,3240,3238,1,0,0,0,3240,3241,1,0,0,0,
	3241,706,1,0,0,0,3242,3240,1,0,0,0,3243,3244,7,8,0,0,3244,708,1,0,0,0,3245,
	3246,7,9,0,0,3246,710,1,0,0,0,3247,3255,5,34,0,0,3248,3249,5,92,0,0,3249,
	3254,9,0,0,0,3250,3251,5,34,0,0,3251,3254,5,34,0,0,3252,3254,8,10,0,0,3253,
	3248,1,0,0,0,3253,3250,1,0,0,0,3253,3252,1,0,0,0,3254,3257,1,0,0,0,3255,
	3253,1,0,0,0,3255,3256,1,0,0,0,3256,3258,1,0,0,0,3257,3255,1,0,0,0,3258,
	3259,5,34,0,0,3259,712,1,0,0,0,3260,3268,5,39,0,0,3261,3262,5,92,0,0,3262,
	3267,9,0,0,0,3263,3264,5,39,0,0,3264,3267,5,39,0,0,3265,3267,8,11,0,0,3266,
	3261,1,0,0,0,3266,3263,1,0,0,0,3266,3265,1,0,0,0,3267,3270,1,0,0,0,3268,
	3266,1,0,0,0,3268,3269,1,0,0,0,3269,3271,1,0,0,0,3270,3268,1,0,0,0,3271,
	3272,5,39,0,0,3272,714,1,0,0,0,3273,3274,5,66,0,0,3274,3276,5,39,0,0,3275,
	3277,7,12,0,0,3276,3275,1,0,0,0,3277,3278,1,0,0,0,3278,3276,1,0,0,0,3278,
	3279,1,0,0,0,3279,3280,1,0,0,0,3280,3281,5,39,0,0,3281,716,1,0,0,0,3282,
	3290,5,96,0,0,3283,3284,5,92,0,0,3284,3289,9,0,0,0,3285,3286,5,96,0,0,3286,
	3289,5,96,0,0,3287,3289,8,4,0,0,3288,3283,1,0,0,0,3288,3285,1,0,0,0,3288,
	3287,1,0,0,0,3289,3292,1,0,0,0,3290,3288,1,0,0,0,3290,3291,1,0,0,0,3291,
	3293,1,0,0,0,3292,3290,1,0,0,0,3293,3294,5,96,0,0,3294,718,1,0,0,0,37,0,
	722,732,743,748,752,756,762,766,768,3132,3137,3142,3144,3150,3155,3163,
	3165,3171,3178,3182,3197,3202,3210,3212,3219,3224,3229,3235,3240,3253,3255,
	3266,3268,3278,3288,3290,1,0,1,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FlinkSqlLexer.__ATN) {
			FlinkSqlLexer.__ATN = new ATNDeserializer().deserialize(FlinkSqlLexer._serializedATN);
		}

		return FlinkSqlLexer.__ATN;
	}


	static DecisionsToDFA = FlinkSqlLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}