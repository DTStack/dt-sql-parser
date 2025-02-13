// Generated from dt-sql-parser/src/grammar/impala/ImpalaSqlLexer.g4 by ANTLR 4.13.1

// @ts-nocheck

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class ImpalaSqlLexer extends antlr.Lexer {
    public static readonly KW_ADD = 1;
    public static readonly KW_ALL = 2;
    public static readonly KW_ANALYTIC = 3;
    public static readonly KW_ALTER = 4;
    public static readonly KW_AND = 5;
    public static readonly KW_ANY = 6;
    public static readonly KW_ANTI = 7;
    public static readonly KW_ARRAY = 8;
    public static readonly KW_AS = 9;
    public static readonly KW_ASC = 10;
    public static readonly KW_AT = 11;
    public static readonly KW_AGGREGATE = 12;
    public static readonly KW_AUTHORIZATION = 13;
    public static readonly KW_BERNOULLI = 14;
    public static readonly KW_BETWEEN = 15;
    public static readonly KW_BLOCK_SIZE = 16;
    public static readonly KW_PARTITIONED = 17;
    public static readonly KW_PREPARE_FN = 18;
    public static readonly KW_EXTERNAL = 19;
    public static readonly KW_CLOSEFN = 20;
    public static readonly KW_SORT = 21;
    public static readonly KW_PURGE = 22;
    public static readonly KW_STORED = 23;
    public static readonly KW_LOCATION = 24;
    public static readonly KW_TBLPROPERTIES = 25;
    public static readonly KW_BY = 26;
    public static readonly KW_CASCADE = 27;
    public static readonly KW_CASE = 28;
    public static readonly KW_CAST = 29;
    public static readonly KW_CACHED = 30;
    public static readonly KW_CHANGE = 31;
    public static readonly KW_COLUMN = 32;
    public static readonly KW_COLUMNS = 33;
    public static readonly KW_COMMENT = 34;
    public static readonly KW_COMPRESSION = 35;
    public static readonly KW_COMPUTE = 36;
    public static readonly KW_CREATE = 37;
    public static readonly KW_CROSS = 38;
    public static readonly KW_CURRENT = 39;
    public static readonly KW_CURRENT_DATE = 40;
    public static readonly KW_CURRENT_PATH = 41;
    public static readonly KW_CURRENT_TIME = 42;
    public static readonly KW_CURRENT_TIMESTAMP = 43;
    public static readonly KW_CURRENT_USER = 44;
    public static readonly KW_DATA = 45;
    public static readonly KW_DATABASE = 46;
    public static readonly KW_DATABASES = 47;
    public static readonly KW_DAY = 48;
    public static readonly KW_DAYS = 49;
    public static readonly KW_DELETE = 50;
    public static readonly KW_DEFAULT = 51;
    public static readonly KW_DELIMITED = 52;
    public static readonly KW_DISABLE = 53;
    public static readonly KW_UPDATE = 54;
    public static readonly KW_DESC = 55;
    public static readonly KW_DESCRIBE = 56;
    public static readonly KW_DISTINCT = 57;
    public static readonly KW_DROP = 58;
    public static readonly KW_ELSE = 59;
    public static readonly KW_ENCODING = 60;
    public static readonly KW_END = 61;
    public static readonly KW_ESCAPE = 62;
    public static readonly KW_ESCAPED = 63;
    public static readonly KW_EXCEPT = 64;
    public static readonly KW_EXCLUDING = 65;
    public static readonly KW_EXISTS = 66;
    public static readonly KW_EXPLAIN = 67;
    public static readonly KW_EXTRACT = 68;
    public static readonly KW_EXTENDED = 69;
    public static readonly KW_FALSE = 70;
    public static readonly KW_FIELDS = 71;
    public static readonly KW_FILEFORMAT = 72;
    public static readonly KW_FILES = 73;
    public static readonly KW_FILTER = 74;
    public static readonly KW_FIRST = 75;
    public static readonly KW_FINALIZE_FN = 76;
    public static readonly KW_FOLLOWING = 77;
    public static readonly KW_FOR = 78;
    public static readonly KW_FORMAT = 79;
    public static readonly KW_FORMATTED = 80;
    public static readonly KW_FOREIGN = 81;
    public static readonly KW_FROM = 82;
    public static readonly KW_FULL = 83;
    public static readonly KW_FUNCTION = 84;
    public static readonly KW_FUNCTIONS = 85;
    public static readonly KW_GRANT = 86;
    public static readonly KW_GROUP = 87;
    public static readonly KW_GROUPING = 88;
    public static readonly KW_HASH = 89;
    public static readonly KW_HAVING = 90;
    public static readonly KW_HOUR = 91;
    public static readonly KW_HOURS = 92;
    public static readonly KW_IF = 93;
    public static readonly KW_IN = 94;
    public static readonly KW_INCLUDING = 95;
    public static readonly KW_INCREMENTAL = 96;
    public static readonly KW_INNER = 97;
    public static readonly KW_INPATH = 98;
    public static readonly KW_INSERT = 99;
    public static readonly KW_INTERSECT = 100;
    public static readonly KW_INTERVAL = 101;
    public static readonly KW_INTERMEDIATE = 102;
    public static readonly KW_INTO = 103;
    public static readonly KW_INIT_FN = 104;
    public static readonly KW_IREGEXP = 105;
    public static readonly KW_ILIKE = 106;
    public static readonly KW_INVALIDATE = 107;
    public static readonly KW_IS = 108;
    public static readonly KW_JOIN = 109;
    public static readonly KW_KEY = 110;
    public static readonly KW_KUDU = 111;
    public static readonly KW_LAST = 112;
    public static readonly KW_LATERAL = 113;
    public static readonly KW_LEFT = 114;
    public static readonly KW_LIKE = 115;
    public static readonly KW_LIMIT = 116;
    public static readonly KW_LINES = 117;
    public static readonly KW_LOAD = 118;
    public static readonly KW_LOCALTIME = 119;
    public static readonly KW_LOCALTIMESTAMP = 120;
    public static readonly KW_METADATA = 121;
    public static readonly KW_MINUTE = 122;
    public static readonly KW_MINUTES = 123;
    public static readonly KW_MONTH = 124;
    public static readonly KW_MONTHS = 125;
    public static readonly KW_MERGE_FN = 126;
    public static readonly KW_NFC = 127;
    public static readonly KW_NFD = 128;
    public static readonly KW_NFKC = 129;
    public static readonly KW_NFKD = 130;
    public static readonly KW_NORMALIZE = 131;
    public static readonly KW_NOT = 132;
    public static readonly KW_NULL = 133;
    public static readonly KW_NULLS = 134;
    public static readonly KW_OFFSET = 135;
    public static readonly KW_ON = 136;
    public static readonly KW_OPTION = 137;
    public static readonly KW_OR = 138;
    public static readonly KW_ORDER = 139;
    public static readonly KW_ORDINALITY = 140;
    public static readonly KW_OUTER = 141;
    public static readonly KW_OWNER = 142;
    public static readonly KW_OVER = 143;
    public static readonly KW_OVERWRITE = 144;
    public static readonly KW_PARTITION = 145;
    public static readonly KW_PARTITIONS = 146;
    public static readonly KW_PARQUET = 147;
    public static readonly KW_POSITION = 148;
    public static readonly KW_PRECEDING = 149;
    public static readonly KW_PRIMARY = 150;
    public static readonly KW_REPLICATION = 151;
    public static readonly KW_PRIVILEGES = 152;
    public static readonly KW_PROPERTIES = 153;
    public static readonly KW_RANGE = 154;
    public static readonly KW_RECOVER = 155;
    public static readonly KW_RENAME = 156;
    public static readonly KW_REPEATABLE = 157;
    public static readonly KW_REPLACE = 158;
    public static readonly KW_RESTRICT = 159;
    public static readonly KW_RETURNS = 160;
    public static readonly KW_REVOKE = 161;
    public static readonly KW_REFRESH = 162;
    public static readonly KW_REGEXP = 163;
    public static readonly KW_RLIKE = 164;
    public static readonly KW_RIGHT = 165;
    public static readonly KW_ROLE = 166;
    public static readonly KW_ROLES = 167;
    public static readonly KW_ROW = 168;
    public static readonly KW_ROWS = 169;
    public static readonly KW_SCHEMA = 170;
    public static readonly KW_SCHEMAS = 171;
    public static readonly KW_SECOND = 172;
    public static readonly KW_SECONDS = 173;
    public static readonly KW_SELECT = 174;
    public static readonly KW_SERDEPROPERTIES = 175;
    public static readonly KW_SET = 176;
    public static readonly KW_SEMI = 177;
    public static readonly KW_SERVER = 178;
    public static readonly KW_SHOW = 179;
    public static readonly KW_SHUTDOWN = 180;
    public static readonly KW_SOME = 181;
    public static readonly KW_STATS = 182;
    public static readonly KW_STRAIGHT_JOIN = 183;
    public static readonly KW_SUBSTRING = 184;
    public static readonly KW_SYSTEM = 185;
    public static readonly KW_SYMBOL = 186;
    public static readonly KW_SERIALIZE_FN = 187;
    public static readonly KW_TABLE = 188;
    public static readonly KW_TABLES = 189;
    public static readonly KW_TABLESAMPLE = 190;
    public static readonly KW_TERMINATED = 191;
    public static readonly KW_THEN = 192;
    public static readonly KW_TO = 193;
    public static readonly KW_TRUE = 194;
    public static readonly KW_TRY_CAST = 195;
    public static readonly KW_TRUNCATE = 196;
    public static readonly KW_UNCACHED = 197;
    public static readonly KW_UESCAPE = 198;
    public static readonly KW_UNBOUNDED = 199;
    public static readonly KW_UNION = 200;
    public static readonly KW_UNNEST = 201;
    public static readonly KW_UNSET = 202;
    public static readonly KW_USE = 203;
    public static readonly KW_USER = 204;
    public static readonly KW_USING = 205;
    public static readonly KW_UPDATE_FN = 206;
    public static readonly KW_UPSERT = 207;
    public static readonly KW_UNKNOWN = 208;
    public static readonly KW_URI = 209;
    public static readonly KW_VALUE = 210;
    public static readonly KW_VALUES = 211;
    public static readonly KW_VIEW = 212;
    public static readonly KW_VIEWS = 213;
    public static readonly KW_WHEN = 214;
    public static readonly KW_WHERE = 215;
    public static readonly KW_WITH = 216;
    public static readonly KW_YEAR = 217;
    public static readonly KW_YEARS = 218;
    public static readonly KW_TEXTFILE = 219;
    public static readonly KW_ORC = 220;
    public static readonly KW_AVRO = 221;
    public static readonly KW_SEQUENCEFILE = 222;
    public static readonly KW_RCFILE = 223;
    public static readonly KW_REFERENCES = 224;
    public static readonly KW_NOVALIDATE = 225;
    public static readonly KW_RELY = 226;
    public static readonly KW_BINARY = 227;
    public static readonly KW_BIGINT = 228;
    public static readonly KW_BOOLEAN = 229;
    public static readonly KW_CHAR = 230;
    public static readonly KW_DATE = 231;
    public static readonly KW_DECIMAL = 232;
    public static readonly KW_DOUBLE = 233;
    public static readonly KW_INT = 234;
    public static readonly KW_MAP = 235;
    public static readonly KW_REAL = 236;
    public static readonly KW_SMALLINT = 237;
    public static readonly KW_FLOAT = 238;
    public static readonly KW_STRING = 239;
    public static readonly KW_STRUCT = 240;
    public static readonly KW_TIMESTAMP = 241;
    public static readonly KW_TINYINT = 242;
    public static readonly KW_VARCHAR = 243;
    public static readonly KW_COMPLEX = 244;
    public static readonly STATS_NUMDVS = 245;
    public static readonly STATS_NUMNULLS = 246;
    public static readonly STATS_AVGSIZE = 247;
    public static readonly STATS_MAXSIZE = 248;
    public static readonly EQ = 249;
    public static readonly NEQ = 250;
    public static readonly LT = 251;
    public static readonly LTE = 252;
    public static readonly GT = 253;
    public static readonly GTE = 254;
    public static readonly PLUS = 255;
    public static readonly MINUS = 256;
    public static readonly ASTERISK = 257;
    public static readonly SLASH = 258;
    public static readonly PERCENT = 259;
    public static readonly CONCAT = 260;
    public static readonly DOT = 261;
    public static readonly SEMICOLON = 262;
    public static readonly COMMA = 263;
    public static readonly COLON = 264;
    public static readonly LPAREN = 265;
    public static readonly RPAREN = 266;
    public static readonly LSQUARE = 267;
    public static readonly RSQUARE = 268;
    public static readonly LCURLY = 269;
    public static readonly RCURLY = 270;
    public static readonly BITWISEOR = 271;
    public static readonly QUESTION = 272;
    public static readonly RIGHT_ARROW = 273;
    public static readonly STRING = 274;
    public static readonly UNICODE_STRING = 275;
    public static readonly BINARY_LITERAL = 276;
    public static readonly INTEGER_VALUE = 277;
    public static readonly DECIMAL_VALUE = 278;
    public static readonly DOUBLE_VALUE = 279;
    public static readonly IDENTIFIER = 280;
    public static readonly DIGIT_IDENTIFIER = 281;
    public static readonly QUOTED_IDENTIFIER = 282;
    public static readonly BACKQUOTED_IDENTIFIER = 283;
    public static readonly TIME_WITH_TIME_ZONE = 284;
    public static readonly TIMESTAMP_WITH_TIME_ZONE = 285;
    public static readonly DOUBLE_PRECISION = 286;
    public static readonly LINE_COMMENT = 287;
    public static readonly BRACKETED_COMMENT = 288;
    public static readonly WHITE_SPACE = 289;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'ADD'", "'ALL'", "'ANALYTIC'", "'ALTER'", "'AND'", "'ANY'", 
        "'ANTI'", "'ARRAY'", "'AS'", "'ASC'", "'AT'", "'AGGREGATE'", "'AUTHORIZATION'", 
        "'BERNOULLI'", "'BETWEEN'", "'BLOCK_SIZE'", "'PARTITIONED'", "'PREPARE_FN'", 
        "'EXTERNAL'", "'CLOSEFN'", "'SORT'", "'PURGE'", "'STORED'", "'LOCATION'", 
        "'TBLPROPERTIES'", "'BY'", "'CASCADE'", "'CASE'", "'CAST'", "'CACHED'", 
        "'CHANGE'", "'COLUMN'", "'COLUMNS'", "'COMMENT'", "'COMPRESSION'", 
        "'COMPUTE'", "'CREATE'", "'CROSS'", "'CURRENT'", "'CURRENT_DATE'", 
        "'CURRENT_PATH'", "'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", "'CURRENT_USER'", 
        "'DATA'", "'DATABASE'", "'DATABASES'", "'DAY'", "'DAYS'", "'DELETE'", 
        "'DEFAULT'", "'DELIMITED'", "'DISABLE'", "'UPDATE'", "'DESC'", "'DESCRIBE'", 
        "'DISTINCT'", "'DROP'", "'ELSE'", "'ENCODING'", "'END'", "'ESCAPE'", 
        "'ESCAPED'", "'EXCEPT'", "'EXCLUDING'", "'EXISTS'", "'EXPLAIN'", 
        "'EXTRACT'", "'EXTENDED'", "'FALSE'", "'FIELDS'", "'FILEFORMAT'", 
        "'FILES'", "'FILTER'", "'FIRST'", "'FINALIZE_FN'", "'FOLLOWING'", 
        "'FOR'", "'FORMAT'", "'FORMATTED'", "'FOREIGN'", "'FROM'", "'FULL'", 
        "'FUNCTION'", "'FUNCTIONS'", "'GRANT'", "'GROUP'", "'GROUPING'", 
        "'HASH'", "'HAVING'", "'HOUR'", "'HOURS'", "'IF'", "'IN'", "'INCLUDING'", 
        "'INCREMENTAL'", "'INNER'", "'INPATH'", "'INSERT'", "'INTERSECT'", 
        "'INTERVAL'", "'INTERMEDIATE'", "'INTO'", "'INIT_FN'", "'IREGEXP'", 
        "'ILIKE'", "'INVALIDATE'", "'IS'", "'JOIN'", "'KEY'", "'KUDU'", 
        "'LAST'", "'LATERAL'", "'LEFT'", "'LIKE'", "'LIMIT'", "'LINES'", 
        "'LOAD'", "'LOCALTIME'", "'LOCALTIMESTAMP'", "'METADATA'", "'MINUTE'", 
        "'MINUTES'", "'MONTH'", "'MONTHS'", "'MERGE_FN'", "'NFC'", "'NFD'", 
        "'NFKC'", "'NFKD'", "'NORMALIZE'", "'NOT'", "'NULL'", "'NULLS'", 
        "'OFFSET'", "'ON'", "'OPTION'", "'OR'", "'ORDER'", "'ORDINALITY'", 
        "'OUTER'", "'OWNER'", "'OVER'", "'OVERWRITE'", "'PARTITION'", "'PARTITIONS'", 
        "'PARQUET'", "'POSITION'", "'PRECEDING'", "'PRIMARY'", "'REPLICATION'", 
        "'PRIVILEGES'", "'PROPERTIES'", "'RANGE'", "'RECOVER'", "'RENAME'", 
        "'REPEATABLE'", "'REPLACE'", "'RESTRICT'", "'RETURNS'", "'REVOKE'", 
        "'REFRESH'", "'REGEXP'", "'RLIKE'", "'RIGHT'", "'ROLE'", "'ROLES'", 
        "'ROW'", "'ROWS'", "'SCHEMA'", "'SCHEMAS'", "'SECOND'", "'SECONDS'", 
        "'SELECT'", "'SERDEPROPERTIES'", "'SET'", "'SEMI'", "'SERVER'", 
        "'SHOW'", "'SHUTDOWN'", "'SOME'", "'STATS'", "'STRAIGHT_JOIN'", 
        "'SUBSTRING'", "'SYSTEM'", "'SYMBOL'", "'SERIALIZE_FN'", "'TABLE'", 
        "'TABLES'", "'TABLESAMPLE'", "'TERMINATED '", "'THEN'", "'TO'", 
        "'TRUE'", "'TRY_CAST'", "'TRUNCATE'", "'UNCACHED'", "'UESCAPE'", 
        "'UNBOUNDED'", "'UNION'", "'UNNEST'", "'UNSET'", "'USE'", "'USER'", 
        "'USING'", "'UPDATE_FN'", "'UPSERT'", "'UNKNOWN'", "'URI'", "'VALUE'", 
        "'VALUES'", "'VIEW'", "'VIEWS'", "'WHEN'", "'WHERE'", "'WITH'", 
        "'YEAR'", "'YEARS'", "'TEXTFILE'", "'ORC'", "'AVRO'", "'SEQUENCEFILE'", 
        "'RCFILE'", "'REFERENCES'", "'NOVALIDATE'", "'RELY'", "'BINARY'", 
        "'BIGINT'", "'BOOLEAN'", "'CHAR'", "'DATE'", "'DECIMAL'", "'DOUBLE'", 
        "'INT'", "'MAP'", "'REAL'", "'SMALLINT'", "'FLOAT'", "'STRING'", 
        "'STRUCT'", "'TIMESTAMP'", "'TINYINT'", "'VARCHAR'", "'COMPLEX'", 
        "''NUMDVS''", "''NUMNULLS''", "''AVGSIZE''", "''MAXSIZE''", "'='", 
        null, "'<'", "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", 
        "'%'", "'||'", "'.'", "';'", "','", "':'", "'('", "')'", "'['", 
        "']'", "'{'", "'}'", "'|'", "'?'", "'->'"
    ];

    public static readonly symbolicNames = [
        null, "KW_ADD", "KW_ALL", "KW_ANALYTIC", "KW_ALTER", "KW_AND", "KW_ANY", 
        "KW_ANTI", "KW_ARRAY", "KW_AS", "KW_ASC", "KW_AT", "KW_AGGREGATE", 
        "KW_AUTHORIZATION", "KW_BERNOULLI", "KW_BETWEEN", "KW_BLOCK_SIZE", 
        "KW_PARTITIONED", "KW_PREPARE_FN", "KW_EXTERNAL", "KW_CLOSEFN", 
        "KW_SORT", "KW_PURGE", "KW_STORED", "KW_LOCATION", "KW_TBLPROPERTIES", 
        "KW_BY", "KW_CASCADE", "KW_CASE", "KW_CAST", "KW_CACHED", "KW_CHANGE", 
        "KW_COLUMN", "KW_COLUMNS", "KW_COMMENT", "KW_COMPRESSION", "KW_COMPUTE", 
        "KW_CREATE", "KW_CROSS", "KW_CURRENT", "KW_CURRENT_DATE", "KW_CURRENT_PATH", 
        "KW_CURRENT_TIME", "KW_CURRENT_TIMESTAMP", "KW_CURRENT_USER", "KW_DATA", 
        "KW_DATABASE", "KW_DATABASES", "KW_DAY", "KW_DAYS", "KW_DELETE", 
        "KW_DEFAULT", "KW_DELIMITED", "KW_DISABLE", "KW_UPDATE", "KW_DESC", 
        "KW_DESCRIBE", "KW_DISTINCT", "KW_DROP", "KW_ELSE", "KW_ENCODING", 
        "KW_END", "KW_ESCAPE", "KW_ESCAPED", "KW_EXCEPT", "KW_EXCLUDING", 
        "KW_EXISTS", "KW_EXPLAIN", "KW_EXTRACT", "KW_EXTENDED", "KW_FALSE", 
        "KW_FIELDS", "KW_FILEFORMAT", "KW_FILES", "KW_FILTER", "KW_FIRST", 
        "KW_FINALIZE_FN", "KW_FOLLOWING", "KW_FOR", "KW_FORMAT", "KW_FORMATTED", 
        "KW_FOREIGN", "KW_FROM", "KW_FULL", "KW_FUNCTION", "KW_FUNCTIONS", 
        "KW_GRANT", "KW_GROUP", "KW_GROUPING", "KW_HASH", "KW_HAVING", "KW_HOUR", 
        "KW_HOURS", "KW_IF", "KW_IN", "KW_INCLUDING", "KW_INCREMENTAL", 
        "KW_INNER", "KW_INPATH", "KW_INSERT", "KW_INTERSECT", "KW_INTERVAL", 
        "KW_INTERMEDIATE", "KW_INTO", "KW_INIT_FN", "KW_IREGEXP", "KW_ILIKE", 
        "KW_INVALIDATE", "KW_IS", "KW_JOIN", "KW_KEY", "KW_KUDU", "KW_LAST", 
        "KW_LATERAL", "KW_LEFT", "KW_LIKE", "KW_LIMIT", "KW_LINES", "KW_LOAD", 
        "KW_LOCALTIME", "KW_LOCALTIMESTAMP", "KW_METADATA", "KW_MINUTE", 
        "KW_MINUTES", "KW_MONTH", "KW_MONTHS", "KW_MERGE_FN", "KW_NFC", 
        "KW_NFD", "KW_NFKC", "KW_NFKD", "KW_NORMALIZE", "KW_NOT", "KW_NULL", 
        "KW_NULLS", "KW_OFFSET", "KW_ON", "KW_OPTION", "KW_OR", "KW_ORDER", 
        "KW_ORDINALITY", "KW_OUTER", "KW_OWNER", "KW_OVER", "KW_OVERWRITE", 
        "KW_PARTITION", "KW_PARTITIONS", "KW_PARQUET", "KW_POSITION", "KW_PRECEDING", 
        "KW_PRIMARY", "KW_REPLICATION", "KW_PRIVILEGES", "KW_PROPERTIES", 
        "KW_RANGE", "KW_RECOVER", "KW_RENAME", "KW_REPEATABLE", "KW_REPLACE", 
        "KW_RESTRICT", "KW_RETURNS", "KW_REVOKE", "KW_REFRESH", "KW_REGEXP", 
        "KW_RLIKE", "KW_RIGHT", "KW_ROLE", "KW_ROLES", "KW_ROW", "KW_ROWS", 
        "KW_SCHEMA", "KW_SCHEMAS", "KW_SECOND", "KW_SECONDS", "KW_SELECT", 
        "KW_SERDEPROPERTIES", "KW_SET", "KW_SEMI", "KW_SERVER", "KW_SHOW", 
        "KW_SHUTDOWN", "KW_SOME", "KW_STATS", "KW_STRAIGHT_JOIN", "KW_SUBSTRING", 
        "KW_SYSTEM", "KW_SYMBOL", "KW_SERIALIZE_FN", "KW_TABLE", "KW_TABLES", 
        "KW_TABLESAMPLE", "KW_TERMINATED", "KW_THEN", "KW_TO", "KW_TRUE", 
        "KW_TRY_CAST", "KW_TRUNCATE", "KW_UNCACHED", "KW_UESCAPE", "KW_UNBOUNDED", 
        "KW_UNION", "KW_UNNEST", "KW_UNSET", "KW_USE", "KW_USER", "KW_USING", 
        "KW_UPDATE_FN", "KW_UPSERT", "KW_UNKNOWN", "KW_URI", "KW_VALUE", 
        "KW_VALUES", "KW_VIEW", "KW_VIEWS", "KW_WHEN", "KW_WHERE", "KW_WITH", 
        "KW_YEAR", "KW_YEARS", "KW_TEXTFILE", "KW_ORC", "KW_AVRO", "KW_SEQUENCEFILE", 
        "KW_RCFILE", "KW_REFERENCES", "KW_NOVALIDATE", "KW_RELY", "KW_BINARY", 
        "KW_BIGINT", "KW_BOOLEAN", "KW_CHAR", "KW_DATE", "KW_DECIMAL", "KW_DOUBLE", 
        "KW_INT", "KW_MAP", "KW_REAL", "KW_SMALLINT", "KW_FLOAT", "KW_STRING", 
        "KW_STRUCT", "KW_TIMESTAMP", "KW_TINYINT", "KW_VARCHAR", "KW_COMPLEX", 
        "STATS_NUMDVS", "STATS_NUMNULLS", "STATS_AVGSIZE", "STATS_MAXSIZE", 
        "EQ", "NEQ", "LT", "LTE", "GT", "GTE", "PLUS", "MINUS", "ASTERISK", 
        "SLASH", "PERCENT", "CONCAT", "DOT", "SEMICOLON", "COMMA", "COLON", 
        "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "LCURLY", "RCURLY", "BITWISEOR", 
        "QUESTION", "RIGHT_ARROW", "STRING", "UNICODE_STRING", "BINARY_LITERAL", 
        "INTEGER_VALUE", "DECIMAL_VALUE", "DOUBLE_VALUE", "IDENTIFIER", 
        "DIGIT_IDENTIFIER", "QUOTED_IDENTIFIER", "BACKQUOTED_IDENTIFIER", 
        "TIME_WITH_TIME_ZONE", "TIMESTAMP_WITH_TIME_ZONE", "DOUBLE_PRECISION", 
        "LINE_COMMENT", "BRACKETED_COMMENT", "WHITE_SPACE"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "KW_ADD", "KW_ALL", "KW_ANALYTIC", "KW_ALTER", "KW_AND", "KW_ANY", 
        "KW_ANTI", "KW_ARRAY", "KW_AS", "KW_ASC", "KW_AT", "KW_AGGREGATE", 
        "KW_AUTHORIZATION", "KW_BERNOULLI", "KW_BETWEEN", "KW_BLOCK_SIZE", 
        "KW_PARTITIONED", "KW_PREPARE_FN", "KW_EXTERNAL", "KW_CLOSEFN", 
        "KW_SORT", "KW_PURGE", "KW_STORED", "KW_LOCATION", "KW_TBLPROPERTIES", 
        "KW_BY", "KW_CASCADE", "KW_CASE", "KW_CAST", "KW_CACHED", "KW_CHANGE", 
        "KW_COLUMN", "KW_COLUMNS", "KW_COMMENT", "KW_COMPRESSION", "KW_COMPUTE", 
        "KW_CREATE", "KW_CROSS", "KW_CURRENT", "KW_CURRENT_DATE", "KW_CURRENT_PATH", 
        "KW_CURRENT_TIME", "KW_CURRENT_TIMESTAMP", "KW_CURRENT_USER", "KW_DATA", 
        "KW_DATABASE", "KW_DATABASES", "KW_DAY", "KW_DAYS", "KW_DELETE", 
        "KW_DEFAULT", "KW_DELIMITED", "KW_DISABLE", "KW_UPDATE", "KW_DESC", 
        "KW_DESCRIBE", "KW_DISTINCT", "KW_DROP", "KW_ELSE", "KW_ENCODING", 
        "KW_END", "KW_ESCAPE", "KW_ESCAPED", "KW_EXCEPT", "KW_EXCLUDING", 
        "KW_EXISTS", "KW_EXPLAIN", "KW_EXTRACT", "KW_EXTENDED", "KW_FALSE", 
        "KW_FIELDS", "KW_FILEFORMAT", "KW_FILES", "KW_FILTER", "KW_FIRST", 
        "KW_FINALIZE_FN", "KW_FOLLOWING", "KW_FOR", "KW_FORMAT", "KW_FORMATTED", 
        "KW_FOREIGN", "KW_FROM", "KW_FULL", "KW_FUNCTION", "KW_FUNCTIONS", 
        "KW_GRANT", "KW_GROUP", "KW_GROUPING", "KW_HASH", "KW_HAVING", "KW_HOUR", 
        "KW_HOURS", "KW_IF", "KW_IN", "KW_INCLUDING", "KW_INCREMENTAL", 
        "KW_INNER", "KW_INPATH", "KW_INSERT", "KW_INTERSECT", "KW_INTERVAL", 
        "KW_INTERMEDIATE", "KW_INTO", "KW_INIT_FN", "KW_IREGEXP", "KW_ILIKE", 
        "KW_INVALIDATE", "KW_IS", "KW_JOIN", "KW_KEY", "KW_KUDU", "KW_LAST", 
        "KW_LATERAL", "KW_LEFT", "KW_LIKE", "KW_LIMIT", "KW_LINES", "KW_LOAD", 
        "KW_LOCALTIME", "KW_LOCALTIMESTAMP", "KW_METADATA", "KW_MINUTE", 
        "KW_MINUTES", "KW_MONTH", "KW_MONTHS", "KW_MERGE_FN", "KW_NFC", 
        "KW_NFD", "KW_NFKC", "KW_NFKD", "KW_NORMALIZE", "KW_NOT", "KW_NULL", 
        "KW_NULLS", "KW_OFFSET", "KW_ON", "KW_OPTION", "KW_OR", "KW_ORDER", 
        "KW_ORDINALITY", "KW_OUTER", "KW_OWNER", "KW_OVER", "KW_OVERWRITE", 
        "KW_PARTITION", "KW_PARTITIONS", "KW_PARQUET", "KW_POSITION", "KW_PRECEDING", 
        "KW_PRIMARY", "KW_REPLICATION", "KW_PRIVILEGES", "KW_PROPERTIES", 
        "KW_RANGE", "KW_RECOVER", "KW_RENAME", "KW_REPEATABLE", "KW_REPLACE", 
        "KW_RESTRICT", "KW_RETURNS", "KW_REVOKE", "KW_REFRESH", "KW_REGEXP", 
        "KW_RLIKE", "KW_RIGHT", "KW_ROLE", "KW_ROLES", "KW_ROW", "KW_ROWS", 
        "KW_SCHEMA", "KW_SCHEMAS", "KW_SECOND", "KW_SECONDS", "KW_SELECT", 
        "KW_SERDEPROPERTIES", "KW_SET", "KW_SEMI", "KW_SERVER", "KW_SHOW", 
        "KW_SHUTDOWN", "KW_SOME", "KW_STATS", "KW_STRAIGHT_JOIN", "KW_SUBSTRING", 
        "KW_SYSTEM", "KW_SYMBOL", "KW_SERIALIZE_FN", "KW_TABLE", "KW_TABLES", 
        "KW_TABLESAMPLE", "KW_TERMINATED", "KW_THEN", "KW_TO", "KW_TRUE", 
        "KW_TRY_CAST", "KW_TRUNCATE", "KW_UNCACHED", "KW_UESCAPE", "KW_UNBOUNDED", 
        "KW_UNION", "KW_UNNEST", "KW_UNSET", "KW_USE", "KW_USER", "KW_USING", 
        "KW_UPDATE_FN", "KW_UPSERT", "KW_UNKNOWN", "KW_URI", "KW_VALUE", 
        "KW_VALUES", "KW_VIEW", "KW_VIEWS", "KW_WHEN", "KW_WHERE", "KW_WITH", 
        "KW_YEAR", "KW_YEARS", "KW_TEXTFILE", "KW_ORC", "KW_AVRO", "KW_SEQUENCEFILE", 
        "KW_RCFILE", "KW_REFERENCES", "KW_NOVALIDATE", "KW_RELY", "KW_BINARY", 
        "KW_BIGINT", "KW_BOOLEAN", "KW_CHAR", "KW_DATE", "KW_DECIMAL", "KW_DOUBLE", 
        "KW_INT", "KW_MAP", "KW_REAL", "KW_SMALLINT", "KW_FLOAT", "KW_STRING", 
        "KW_STRUCT", "KW_TIMESTAMP", "KW_TINYINT", "KW_VARCHAR", "KW_COMPLEX", 
        "STATS_NUMDVS", "STATS_NUMNULLS", "STATS_AVGSIZE", "STATS_MAXSIZE", 
        "EQ", "NEQ", "LT", "LTE", "GT", "GTE", "PLUS", "MINUS", "ASTERISK", 
        "SLASH", "PERCENT", "CONCAT", "DOT", "SEMICOLON", "COMMA", "COLON", 
        "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "LCURLY", "RCURLY", "BITWISEOR", 
        "QUESTION", "RIGHT_ARROW", "STRING", "UNICODE_STRING", "BINARY_LITERAL", 
        "INTEGER_VALUE", "DECIMAL_VALUE", "DOUBLE_VALUE", "IDENTIFIER", 
        "DIGIT_IDENTIFIER", "QUOTED_IDENTIFIER", "BACKQUOTED_IDENTIFIER", 
        "TIME_WITH_TIME_ZONE", "TIMESTAMP_WITH_TIME_ZONE", "DOUBLE_PRECISION", 
        "EXPONENT", "DIGIT", "LETTER", "LINE_COMMENT", "BRACKETED_COMMENT", 
        "WHITE_SPACE",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, ImpalaSqlLexer._ATN, ImpalaSqlLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "ImpalaSqlLexer.g4"; }

    public get literalNames(): (string | null)[] { return ImpalaSqlLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return ImpalaSqlLexer.symbolicNames; }
    public get ruleNames(): string[] { return ImpalaSqlLexer.ruleNames; }

    public get serializedATN(): number[] { return ImpalaSqlLexer._serializedATN; }

    public get channelNames(): string[] { return ImpalaSqlLexer.channelNames; }

    public get modeNames(): string[] { return ImpalaSqlLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,289,2744,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,
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
        7,290,2,291,7,291,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,
        5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,
        8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,
        11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
        12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
        13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,
        15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,
        16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,
        17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
        18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,
        20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,
        22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,
        24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,
        25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,
        27,1,27,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,
        29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,
        31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,
        33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,
        34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,
        36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,
        38,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,
        39,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,
        40,1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,
        41,1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,
        42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,
        43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,44,1,
        44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,
        46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,47,1,47,1,47,1,
        47,1,48,1,48,1,48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,
        50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,51,1,51,1,51,1,51,1,51,1,
        51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,
        53,1,53,1,53,1,53,1,53,1,53,1,53,1,54,1,54,1,54,1,54,1,54,1,55,1,
        55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,
        56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,58,1,58,1,58,1,58,1,
        58,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,
        60,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,1,
        62,1,62,1,62,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,64,1,64,1,64,1,
        64,1,64,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,1,65,1,
        65,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,67,1,67,1,67,1,67,1,
        67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,
        69,1,69,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,
        71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,72,1,72,1,
        72,1,72,1,72,1,72,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,74,1,74,1,
        74,1,74,1,74,1,74,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,
        75,1,75,1,75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,
        77,1,77,1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,79,1,79,1,
        79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,80,1,80,1,80,1,80,1,80,1,
        80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,82,1,82,1,82,1,82,1,82,1,
        83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,84,1,84,1,84,1,84,1,
        84,1,84,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,1,85,1,86,1,
        86,1,86,1,86,1,86,1,86,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,
        87,1,88,1,88,1,88,1,88,1,88,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,
        90,1,90,1,90,1,90,1,90,1,91,1,91,1,91,1,91,1,91,1,91,1,92,1,92,1,
        92,1,93,1,93,1,93,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,
        94,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,
        96,1,96,1,96,1,96,1,96,1,96,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,
        98,1,98,1,98,1,98,1,98,1,98,1,98,1,99,1,99,1,99,1,99,1,99,1,99,1,
        99,1,99,1,99,1,99,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,
        1,100,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,
        1,101,1,101,1,101,1,102,1,102,1,102,1,102,1,102,1,103,1,103,1,103,
        1,103,1,103,1,103,1,103,1,103,1,104,1,104,1,104,1,104,1,104,1,104,
        1,104,1,104,1,105,1,105,1,105,1,105,1,105,1,105,1,106,1,106,1,106,
        1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,107,1,107,1,107,
        1,108,1,108,1,108,1,108,1,108,1,109,1,109,1,109,1,109,1,110,1,110,
        1,110,1,110,1,110,1,111,1,111,1,111,1,111,1,111,1,112,1,112,1,112,
        1,112,1,112,1,112,1,112,1,112,1,113,1,113,1,113,1,113,1,113,1,114,
        1,114,1,114,1,114,1,114,1,115,1,115,1,115,1,115,1,115,1,115,1,116,
        1,116,1,116,1,116,1,116,1,116,1,117,1,117,1,117,1,117,1,117,1,118,
        1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,119,1,119,
        1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,
        1,119,1,119,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,
        1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,122,1,122,1,122,1,122,
        1,122,1,122,1,122,1,122,1,123,1,123,1,123,1,123,1,123,1,123,1,124,
        1,124,1,124,1,124,1,124,1,124,1,124,1,125,1,125,1,125,1,125,1,125,
        1,125,1,125,1,125,1,125,1,126,1,126,1,126,1,126,1,127,1,127,1,127,
        1,127,1,128,1,128,1,128,1,128,1,128,1,129,1,129,1,129,1,129,1,129,
        1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,131,
        1,131,1,131,1,131,1,132,1,132,1,132,1,132,1,132,1,133,1,133,1,133,
        1,133,1,133,1,133,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,135,
        1,135,1,135,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,137,1,137,
        1,137,1,138,1,138,1,138,1,138,1,138,1,138,1,139,1,139,1,139,1,139,
        1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,140,1,140,1,140,1,140,
        1,140,1,140,1,141,1,141,1,141,1,141,1,141,1,141,1,142,1,142,1,142,
        1,142,1,142,1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,
        1,143,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,144,
        1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,
        1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,147,1,147,1,147,
        1,147,1,147,1,147,1,147,1,147,1,147,1,148,1,148,1,148,1,148,1,148,
        1,148,1,148,1,148,1,148,1,148,1,149,1,149,1,149,1,149,1,149,1,149,
        1,149,1,149,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,
        1,150,1,150,1,150,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,
        1,151,1,151,1,151,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,
        1,152,1,152,1,152,1,153,1,153,1,153,1,153,1,153,1,153,1,154,1,154,
        1,154,1,154,1,154,1,154,1,154,1,154,1,155,1,155,1,155,1,155,1,155,
        1,155,1,155,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,
        1,156,1,156,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,158,
        1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,159,1,159,1,159,
        1,159,1,159,1,159,1,159,1,159,1,160,1,160,1,160,1,160,1,160,1,160,
        1,160,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,162,1,162,
        1,162,1,162,1,162,1,162,1,162,1,163,1,163,1,163,1,163,1,163,1,163,
        1,164,1,164,1,164,1,164,1,164,1,164,1,165,1,165,1,165,1,165,1,165,
        1,166,1,166,1,166,1,166,1,166,1,166,1,167,1,167,1,167,1,167,1,168,
        1,168,1,168,1,168,1,168,1,169,1,169,1,169,1,169,1,169,1,169,1,169,
        1,170,1,170,1,170,1,170,1,170,1,170,1,170,1,170,1,171,1,171,1,171,
        1,171,1,171,1,171,1,171,1,172,1,172,1,172,1,172,1,172,1,172,1,172,
        1,172,1,173,1,173,1,173,1,173,1,173,1,173,1,173,1,174,1,174,1,174,
        1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,174,
        1,174,1,174,1,175,1,175,1,175,1,175,1,176,1,176,1,176,1,176,1,176,
        1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,178,1,178,1,178,1,178,
        1,178,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,180,
        1,180,1,180,1,180,1,180,1,181,1,181,1,181,1,181,1,181,1,181,1,182,
        1,182,1,182,1,182,1,182,1,182,1,182,1,182,1,182,1,182,1,182,1,182,
        1,182,1,182,1,183,1,183,1,183,1,183,1,183,1,183,1,183,1,183,1,183,
        1,183,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,185,1,185,1,185,
        1,185,1,185,1,185,1,185,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,187,1,187,1,187,1,187,1,187,
        1,187,1,188,1,188,1,188,1,188,1,188,1,188,1,188,1,189,1,189,1,189,
        1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,190,1,190,
        1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,191,
        1,191,1,191,1,191,1,191,1,192,1,192,1,192,1,193,1,193,1,193,1,193,
        1,193,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,195,
        1,195,1,195,1,195,1,195,1,195,1,195,1,195,1,195,1,196,1,196,1,196,
        1,196,1,196,1,196,1,196,1,196,1,196,1,197,1,197,1,197,1,197,1,197,
        1,197,1,197,1,197,1,198,1,198,1,198,1,198,1,198,1,198,1,198,1,198,
        1,198,1,198,1,199,1,199,1,199,1,199,1,199,1,199,1,200,1,200,1,200,
        1,200,1,200,1,200,1,200,1,201,1,201,1,201,1,201,1,201,1,201,1,202,
        1,202,1,202,1,202,1,203,1,203,1,203,1,203,1,203,1,204,1,204,1,204,
        1,204,1,204,1,204,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,205,
        1,205,1,205,1,206,1,206,1,206,1,206,1,206,1,206,1,206,1,207,1,207,
        1,207,1,207,1,207,1,207,1,207,1,207,1,208,1,208,1,208,1,208,1,209,
        1,209,1,209,1,209,1,209,1,209,1,210,1,210,1,210,1,210,1,210,1,210,
        1,210,1,211,1,211,1,211,1,211,1,211,1,212,1,212,1,212,1,212,1,212,
        1,212,1,213,1,213,1,213,1,213,1,213,1,214,1,214,1,214,1,214,1,214,
        1,214,1,215,1,215,1,215,1,215,1,215,1,216,1,216,1,216,1,216,1,216,
        1,217,1,217,1,217,1,217,1,217,1,217,1,218,1,218,1,218,1,218,1,218,
        1,218,1,218,1,218,1,218,1,219,1,219,1,219,1,219,1,220,1,220,1,220,
        1,220,1,220,1,221,1,221,1,221,1,221,1,221,1,221,1,221,1,221,1,221,
        1,221,1,221,1,221,1,221,1,222,1,222,1,222,1,222,1,222,1,222,1,222,
        1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,
        1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,
        1,225,1,225,1,225,1,225,1,225,1,226,1,226,1,226,1,226,1,226,1,226,
        1,226,1,227,1,227,1,227,1,227,1,227,1,227,1,227,1,228,1,228,1,228,
        1,228,1,228,1,228,1,228,1,228,1,229,1,229,1,229,1,229,1,229,1,230,
        1,230,1,230,1,230,1,230,1,231,1,231,1,231,1,231,1,231,1,231,1,231,
        1,231,1,232,1,232,1,232,1,232,1,232,1,232,1,232,1,233,1,233,1,233,
        1,233,1,234,1,234,1,234,1,234,1,235,1,235,1,235,1,235,1,235,1,236,
        1,236,1,236,1,236,1,236,1,236,1,236,1,236,1,236,1,237,1,237,1,237,
        1,237,1,237,1,237,1,238,1,238,1,238,1,238,1,238,1,238,1,238,1,239,
        1,239,1,239,1,239,1,239,1,239,1,239,1,240,1,240,1,240,1,240,1,240,
        1,240,1,240,1,240,1,240,1,240,1,241,1,241,1,241,1,241,1,241,1,241,
        1,241,1,241,1,242,1,242,1,242,1,242,1,242,1,242,1,242,1,242,1,243,
        1,243,1,243,1,243,1,243,1,243,1,243,1,243,1,244,1,244,1,244,1,244,
        1,244,1,244,1,244,1,244,1,244,1,245,1,245,1,245,1,245,1,245,1,245,
        1,245,1,245,1,245,1,245,1,245,1,246,1,246,1,246,1,246,1,246,1,246,
        1,246,1,246,1,246,1,246,1,247,1,247,1,247,1,247,1,247,1,247,1,247,
        1,247,1,247,1,247,1,248,1,248,1,249,1,249,1,249,1,249,3,249,2433,
        8,249,1,250,1,250,1,251,1,251,1,251,1,252,1,252,1,253,1,253,1,253,
        1,254,1,254,1,255,1,255,1,256,1,256,1,257,1,257,1,258,1,258,1,259,
        1,259,1,259,1,260,1,260,1,261,1,261,1,262,1,262,1,263,1,263,1,264,
        1,264,1,265,1,265,1,266,1,266,1,267,1,267,1,268,1,268,1,269,1,269,
        1,270,1,270,1,271,1,271,1,272,1,272,1,272,1,273,1,273,1,273,1,273,
        5,273,2489,8,273,10,273,12,273,2492,9,273,1,273,1,273,1,273,1,273,
        1,273,5,273,2499,8,273,10,273,12,273,2502,9,273,1,273,3,273,2505,
        8,273,1,274,1,274,1,274,1,274,1,274,1,274,1,274,5,274,2514,8,274,
        10,274,12,274,2517,9,274,1,274,1,274,1,275,1,275,1,275,1,275,5,275,
        2525,8,275,10,275,12,275,2528,9,275,1,275,1,275,1,276,4,276,2533,
        8,276,11,276,12,276,2534,1,277,4,277,2538,8,277,11,277,12,277,2539,
        1,277,1,277,5,277,2544,8,277,10,277,12,277,2547,9,277,1,277,1,277,
        4,277,2551,8,277,11,277,12,277,2552,3,277,2555,8,277,1,278,4,278,
        2558,8,278,11,278,12,278,2559,1,278,1,278,5,278,2564,8,278,10,278,
        12,278,2567,9,278,3,278,2569,8,278,1,278,1,278,1,278,1,278,4,278,
        2575,8,278,11,278,12,278,2576,1,278,1,278,3,278,2581,8,278,1,279,
        1,279,3,279,2585,8,279,1,279,1,279,1,279,5,279,2590,8,279,10,279,
        12,279,2593,9,279,1,280,1,280,1,280,1,280,4,280,2599,8,280,11,280,
        12,280,2600,1,281,1,281,1,281,1,281,5,281,2607,8,281,10,281,12,281,
        2610,9,281,1,281,1,281,1,282,1,282,1,282,1,282,5,282,2618,8,282,
        10,282,12,282,2621,9,282,1,282,1,282,1,283,1,283,1,283,1,283,1,283,
        1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,
        1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,284,1,284,1,284,1,284,
        1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,
        1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,
        1,284,1,284,1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,285,
        1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,286,1,286,
        3,286,2696,8,286,1,286,4,286,2699,8,286,11,286,12,286,2700,1,287,
        1,287,1,288,1,288,1,289,1,289,1,289,1,289,5,289,2711,8,289,10,289,
        12,289,2714,9,289,1,289,3,289,2717,8,289,1,289,3,289,2720,8,289,
        1,289,1,289,1,290,1,290,1,290,1,290,5,290,2728,8,290,10,290,12,290,
        2731,9,290,1,290,1,290,1,290,1,290,1,290,1,291,4,291,2739,8,291,
        11,291,12,291,2740,1,291,1,291,1,2729,0,292,1,1,3,2,5,3,7,4,9,5,
        11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,
        17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,
        28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,36,73,37,75,38,77,
        39,79,40,81,41,83,42,85,43,87,44,89,45,91,46,93,47,95,48,97,49,99,
        50,101,51,103,52,105,53,107,54,109,55,111,56,113,57,115,58,117,59,
        119,60,121,61,123,62,125,63,127,64,129,65,131,66,133,67,135,68,137,
        69,139,70,141,71,143,72,145,73,147,74,149,75,151,76,153,77,155,78,
        157,79,159,80,161,81,163,82,165,83,167,84,169,85,171,86,173,87,175,
        88,177,89,179,90,181,91,183,92,185,93,187,94,189,95,191,96,193,97,
        195,98,197,99,199,100,201,101,203,102,205,103,207,104,209,105,211,
        106,213,107,215,108,217,109,219,110,221,111,223,112,225,113,227,
        114,229,115,231,116,233,117,235,118,237,119,239,120,241,121,243,
        122,245,123,247,124,249,125,251,126,253,127,255,128,257,129,259,
        130,261,131,263,132,265,133,267,134,269,135,271,136,273,137,275,
        138,277,139,279,140,281,141,283,142,285,143,287,144,289,145,291,
        146,293,147,295,148,297,149,299,150,301,151,303,152,305,153,307,
        154,309,155,311,156,313,157,315,158,317,159,319,160,321,161,323,
        162,325,163,327,164,329,165,331,166,333,167,335,168,337,169,339,
        170,341,171,343,172,345,173,347,174,349,175,351,176,353,177,355,
        178,357,179,359,180,361,181,363,182,365,183,367,184,369,185,371,
        186,373,187,375,188,377,189,379,190,381,191,383,192,385,193,387,
        194,389,195,391,196,393,197,395,198,397,199,399,200,401,201,403,
        202,405,203,407,204,409,205,411,206,413,207,415,208,417,209,419,
        210,421,211,423,212,425,213,427,214,429,215,431,216,433,217,435,
        218,437,219,439,220,441,221,443,222,445,223,447,224,449,225,451,
        226,453,227,455,228,457,229,459,230,461,231,463,232,465,233,467,
        234,469,235,471,236,473,237,475,238,477,239,479,240,481,241,483,
        242,485,243,487,244,489,245,491,246,493,247,495,248,497,249,499,
        250,501,251,503,252,505,253,507,254,509,255,511,256,513,257,515,
        258,517,259,519,260,521,261,523,262,525,263,527,264,529,265,531,
        266,533,267,535,268,537,269,539,270,541,271,543,272,545,273,547,
        274,549,275,551,276,553,277,555,278,557,279,559,280,561,281,563,
        282,565,283,567,284,569,285,571,286,573,0,575,0,577,0,579,287,581,
        288,583,289,1,0,35,2,0,65,65,97,97,2,0,68,68,100,100,2,0,76,76,108,
        108,2,0,78,78,110,110,2,0,89,89,121,121,2,0,84,84,116,116,2,0,73,
        73,105,105,2,0,67,67,99,99,2,0,69,69,101,101,2,0,82,82,114,114,2,
        0,83,83,115,115,2,0,71,71,103,103,2,0,85,85,117,117,2,0,72,72,104,
        104,2,0,79,79,111,111,2,0,90,90,122,122,2,0,66,66,98,98,2,0,87,87,
        119,119,2,0,75,75,107,107,2,0,80,80,112,112,2,0,70,70,102,102,2,
        0,88,88,120,120,2,0,77,77,109,109,2,0,86,86,118,118,2,0,74,74,106,
        106,2,0,81,81,113,113,1,0,39,39,1,0,34,34,3,0,58,58,64,64,95,95,
        1,0,96,96,2,0,43,43,45,45,1,0,48,57,2,0,65,90,97,122,2,0,10,10,13,
        13,3,0,9,10,13,13,32,32,2777,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,
        0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,
        17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,
        27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,
        37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,
        47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,
        57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,
        67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,
        77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,
        87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,
        97,1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,
        0,0,107,1,0,0,0,0,109,1,0,0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,115,
        1,0,0,0,0,117,1,0,0,0,0,119,1,0,0,0,0,121,1,0,0,0,0,123,1,0,0,0,
        0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,0,0,131,1,0,0,0,0,133,1,
        0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,0,0,0,141,1,0,0,0,0,
        143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,1,0,0,0,0,151,1,0,
        0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,0,159,1,0,0,0,0,161,
        1,0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,0,0,169,1,0,0,0,
        0,171,1,0,0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,177,1,0,0,0,0,179,1,
        0,0,0,0,181,1,0,0,0,0,183,1,0,0,0,0,185,1,0,0,0,0,187,1,0,0,0,0,
        189,1,0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,0,195,1,0,0,0,0,197,1,0,
        0,0,0,199,1,0,0,0,0,201,1,0,0,0,0,203,1,0,0,0,0,205,1,0,0,0,0,207,
        1,0,0,0,0,209,1,0,0,0,0,211,1,0,0,0,0,213,1,0,0,0,0,215,1,0,0,0,
        0,217,1,0,0,0,0,219,1,0,0,0,0,221,1,0,0,0,0,223,1,0,0,0,0,225,1,
        0,0,0,0,227,1,0,0,0,0,229,1,0,0,0,0,231,1,0,0,0,0,233,1,0,0,0,0,
        235,1,0,0,0,0,237,1,0,0,0,0,239,1,0,0,0,0,241,1,0,0,0,0,243,1,0,
        0,0,0,245,1,0,0,0,0,247,1,0,0,0,0,249,1,0,0,0,0,251,1,0,0,0,0,253,
        1,0,0,0,0,255,1,0,0,0,0,257,1,0,0,0,0,259,1,0,0,0,0,261,1,0,0,0,
        0,263,1,0,0,0,0,265,1,0,0,0,0,267,1,0,0,0,0,269,1,0,0,0,0,271,1,
        0,0,0,0,273,1,0,0,0,0,275,1,0,0,0,0,277,1,0,0,0,0,279,1,0,0,0,0,
        281,1,0,0,0,0,283,1,0,0,0,0,285,1,0,0,0,0,287,1,0,0,0,0,289,1,0,
        0,0,0,291,1,0,0,0,0,293,1,0,0,0,0,295,1,0,0,0,0,297,1,0,0,0,0,299,
        1,0,0,0,0,301,1,0,0,0,0,303,1,0,0,0,0,305,1,0,0,0,0,307,1,0,0,0,
        0,309,1,0,0,0,0,311,1,0,0,0,0,313,1,0,0,0,0,315,1,0,0,0,0,317,1,
        0,0,0,0,319,1,0,0,0,0,321,1,0,0,0,0,323,1,0,0,0,0,325,1,0,0,0,0,
        327,1,0,0,0,0,329,1,0,0,0,0,331,1,0,0,0,0,333,1,0,0,0,0,335,1,0,
        0,0,0,337,1,0,0,0,0,339,1,0,0,0,0,341,1,0,0,0,0,343,1,0,0,0,0,345,
        1,0,0,0,0,347,1,0,0,0,0,349,1,0,0,0,0,351,1,0,0,0,0,353,1,0,0,0,
        0,355,1,0,0,0,0,357,1,0,0,0,0,359,1,0,0,0,0,361,1,0,0,0,0,363,1,
        0,0,0,0,365,1,0,0,0,0,367,1,0,0,0,0,369,1,0,0,0,0,371,1,0,0,0,0,
        373,1,0,0,0,0,375,1,0,0,0,0,377,1,0,0,0,0,379,1,0,0,0,0,381,1,0,
        0,0,0,383,1,0,0,0,0,385,1,0,0,0,0,387,1,0,0,0,0,389,1,0,0,0,0,391,
        1,0,0,0,0,393,1,0,0,0,0,395,1,0,0,0,0,397,1,0,0,0,0,399,1,0,0,0,
        0,401,1,0,0,0,0,403,1,0,0,0,0,405,1,0,0,0,0,407,1,0,0,0,0,409,1,
        0,0,0,0,411,1,0,0,0,0,413,1,0,0,0,0,415,1,0,0,0,0,417,1,0,0,0,0,
        419,1,0,0,0,0,421,1,0,0,0,0,423,1,0,0,0,0,425,1,0,0,0,0,427,1,0,
        0,0,0,429,1,0,0,0,0,431,1,0,0,0,0,433,1,0,0,0,0,435,1,0,0,0,0,437,
        1,0,0,0,0,439,1,0,0,0,0,441,1,0,0,0,0,443,1,0,0,0,0,445,1,0,0,0,
        0,447,1,0,0,0,0,449,1,0,0,0,0,451,1,0,0,0,0,453,1,0,0,0,0,455,1,
        0,0,0,0,457,1,0,0,0,0,459,1,0,0,0,0,461,1,0,0,0,0,463,1,0,0,0,0,
        465,1,0,0,0,0,467,1,0,0,0,0,469,1,0,0,0,0,471,1,0,0,0,0,473,1,0,
        0,0,0,475,1,0,0,0,0,477,1,0,0,0,0,479,1,0,0,0,0,481,1,0,0,0,0,483,
        1,0,0,0,0,485,1,0,0,0,0,487,1,0,0,0,0,489,1,0,0,0,0,491,1,0,0,0,
        0,493,1,0,0,0,0,495,1,0,0,0,0,497,1,0,0,0,0,499,1,0,0,0,0,501,1,
        0,0,0,0,503,1,0,0,0,0,505,1,0,0,0,0,507,1,0,0,0,0,509,1,0,0,0,0,
        511,1,0,0,0,0,513,1,0,0,0,0,515,1,0,0,0,0,517,1,0,0,0,0,519,1,0,
        0,0,0,521,1,0,0,0,0,523,1,0,0,0,0,525,1,0,0,0,0,527,1,0,0,0,0,529,
        1,0,0,0,0,531,1,0,0,0,0,533,1,0,0,0,0,535,1,0,0,0,0,537,1,0,0,0,
        0,539,1,0,0,0,0,541,1,0,0,0,0,543,1,0,0,0,0,545,1,0,0,0,0,547,1,
        0,0,0,0,549,1,0,0,0,0,551,1,0,0,0,0,553,1,0,0,0,0,555,1,0,0,0,0,
        557,1,0,0,0,0,559,1,0,0,0,0,561,1,0,0,0,0,563,1,0,0,0,0,565,1,0,
        0,0,0,567,1,0,0,0,0,569,1,0,0,0,0,571,1,0,0,0,0,579,1,0,0,0,0,581,
        1,0,0,0,0,583,1,0,0,0,1,585,1,0,0,0,3,589,1,0,0,0,5,593,1,0,0,0,
        7,602,1,0,0,0,9,608,1,0,0,0,11,612,1,0,0,0,13,616,1,0,0,0,15,621,
        1,0,0,0,17,627,1,0,0,0,19,630,1,0,0,0,21,634,1,0,0,0,23,637,1,0,
        0,0,25,647,1,0,0,0,27,661,1,0,0,0,29,671,1,0,0,0,31,679,1,0,0,0,
        33,690,1,0,0,0,35,702,1,0,0,0,37,713,1,0,0,0,39,722,1,0,0,0,41,730,
        1,0,0,0,43,735,1,0,0,0,45,741,1,0,0,0,47,748,1,0,0,0,49,757,1,0,
        0,0,51,771,1,0,0,0,53,774,1,0,0,0,55,782,1,0,0,0,57,787,1,0,0,0,
        59,792,1,0,0,0,61,799,1,0,0,0,63,806,1,0,0,0,65,813,1,0,0,0,67,821,
        1,0,0,0,69,829,1,0,0,0,71,841,1,0,0,0,73,849,1,0,0,0,75,856,1,0,
        0,0,77,862,1,0,0,0,79,870,1,0,0,0,81,883,1,0,0,0,83,896,1,0,0,0,
        85,909,1,0,0,0,87,927,1,0,0,0,89,940,1,0,0,0,91,945,1,0,0,0,93,954,
        1,0,0,0,95,964,1,0,0,0,97,968,1,0,0,0,99,973,1,0,0,0,101,980,1,0,
        0,0,103,988,1,0,0,0,105,998,1,0,0,0,107,1006,1,0,0,0,109,1013,1,
        0,0,0,111,1018,1,0,0,0,113,1027,1,0,0,0,115,1036,1,0,0,0,117,1041,
        1,0,0,0,119,1046,1,0,0,0,121,1055,1,0,0,0,123,1059,1,0,0,0,125,1066,
        1,0,0,0,127,1074,1,0,0,0,129,1081,1,0,0,0,131,1091,1,0,0,0,133,1098,
        1,0,0,0,135,1106,1,0,0,0,137,1114,1,0,0,0,139,1123,1,0,0,0,141,1129,
        1,0,0,0,143,1136,1,0,0,0,145,1147,1,0,0,0,147,1153,1,0,0,0,149,1160,
        1,0,0,0,151,1166,1,0,0,0,153,1178,1,0,0,0,155,1188,1,0,0,0,157,1192,
        1,0,0,0,159,1199,1,0,0,0,161,1209,1,0,0,0,163,1217,1,0,0,0,165,1222,
        1,0,0,0,167,1227,1,0,0,0,169,1236,1,0,0,0,171,1246,1,0,0,0,173,1252,
        1,0,0,0,175,1258,1,0,0,0,177,1267,1,0,0,0,179,1272,1,0,0,0,181,1279,
        1,0,0,0,183,1284,1,0,0,0,185,1290,1,0,0,0,187,1293,1,0,0,0,189,1296,
        1,0,0,0,191,1306,1,0,0,0,193,1318,1,0,0,0,195,1324,1,0,0,0,197,1331,
        1,0,0,0,199,1338,1,0,0,0,201,1348,1,0,0,0,203,1357,1,0,0,0,205,1370,
        1,0,0,0,207,1375,1,0,0,0,209,1383,1,0,0,0,211,1391,1,0,0,0,213,1397,
        1,0,0,0,215,1408,1,0,0,0,217,1411,1,0,0,0,219,1416,1,0,0,0,221,1420,
        1,0,0,0,223,1425,1,0,0,0,225,1430,1,0,0,0,227,1438,1,0,0,0,229,1443,
        1,0,0,0,231,1448,1,0,0,0,233,1454,1,0,0,0,235,1460,1,0,0,0,237,1465,
        1,0,0,0,239,1475,1,0,0,0,241,1490,1,0,0,0,243,1499,1,0,0,0,245,1506,
        1,0,0,0,247,1514,1,0,0,0,249,1520,1,0,0,0,251,1527,1,0,0,0,253,1536,
        1,0,0,0,255,1540,1,0,0,0,257,1544,1,0,0,0,259,1549,1,0,0,0,261,1554,
        1,0,0,0,263,1564,1,0,0,0,265,1568,1,0,0,0,267,1573,1,0,0,0,269,1579,
        1,0,0,0,271,1586,1,0,0,0,273,1589,1,0,0,0,275,1596,1,0,0,0,277,1599,
        1,0,0,0,279,1605,1,0,0,0,281,1616,1,0,0,0,283,1622,1,0,0,0,285,1628,
        1,0,0,0,287,1633,1,0,0,0,289,1643,1,0,0,0,291,1653,1,0,0,0,293,1664,
        1,0,0,0,295,1672,1,0,0,0,297,1681,1,0,0,0,299,1691,1,0,0,0,301,1699,
        1,0,0,0,303,1711,1,0,0,0,305,1722,1,0,0,0,307,1733,1,0,0,0,309,1739,
        1,0,0,0,311,1747,1,0,0,0,313,1754,1,0,0,0,315,1765,1,0,0,0,317,1773,
        1,0,0,0,319,1782,1,0,0,0,321,1790,1,0,0,0,323,1797,1,0,0,0,325,1805,
        1,0,0,0,327,1812,1,0,0,0,329,1818,1,0,0,0,331,1824,1,0,0,0,333,1829,
        1,0,0,0,335,1835,1,0,0,0,337,1839,1,0,0,0,339,1844,1,0,0,0,341,1851,
        1,0,0,0,343,1859,1,0,0,0,345,1866,1,0,0,0,347,1874,1,0,0,0,349,1881,
        1,0,0,0,351,1897,1,0,0,0,353,1901,1,0,0,0,355,1906,1,0,0,0,357,1913,
        1,0,0,0,359,1918,1,0,0,0,361,1927,1,0,0,0,363,1932,1,0,0,0,365,1938,
        1,0,0,0,367,1952,1,0,0,0,369,1962,1,0,0,0,371,1969,1,0,0,0,373,1976,
        1,0,0,0,375,1989,1,0,0,0,377,1995,1,0,0,0,379,2002,1,0,0,0,381,2014,
        1,0,0,0,383,2026,1,0,0,0,385,2031,1,0,0,0,387,2034,1,0,0,0,389,2039,
        1,0,0,0,391,2048,1,0,0,0,393,2057,1,0,0,0,395,2066,1,0,0,0,397,2074,
        1,0,0,0,399,2084,1,0,0,0,401,2090,1,0,0,0,403,2097,1,0,0,0,405,2103,
        1,0,0,0,407,2107,1,0,0,0,409,2112,1,0,0,0,411,2118,1,0,0,0,413,2128,
        1,0,0,0,415,2135,1,0,0,0,417,2143,1,0,0,0,419,2147,1,0,0,0,421,2153,
        1,0,0,0,423,2160,1,0,0,0,425,2165,1,0,0,0,427,2171,1,0,0,0,429,2176,
        1,0,0,0,431,2182,1,0,0,0,433,2187,1,0,0,0,435,2192,1,0,0,0,437,2198,
        1,0,0,0,439,2207,1,0,0,0,441,2211,1,0,0,0,443,2216,1,0,0,0,445,2229,
        1,0,0,0,447,2236,1,0,0,0,449,2247,1,0,0,0,451,2258,1,0,0,0,453,2263,
        1,0,0,0,455,2270,1,0,0,0,457,2277,1,0,0,0,459,2285,1,0,0,0,461,2290,
        1,0,0,0,463,2295,1,0,0,0,465,2303,1,0,0,0,467,2310,1,0,0,0,469,2314,
        1,0,0,0,471,2318,1,0,0,0,473,2323,1,0,0,0,475,2332,1,0,0,0,477,2338,
        1,0,0,0,479,2345,1,0,0,0,481,2352,1,0,0,0,483,2362,1,0,0,0,485,2370,
        1,0,0,0,487,2378,1,0,0,0,489,2386,1,0,0,0,491,2395,1,0,0,0,493,2406,
        1,0,0,0,495,2416,1,0,0,0,497,2426,1,0,0,0,499,2432,1,0,0,0,501,2434,
        1,0,0,0,503,2436,1,0,0,0,505,2439,1,0,0,0,507,2441,1,0,0,0,509,2444,
        1,0,0,0,511,2446,1,0,0,0,513,2448,1,0,0,0,515,2450,1,0,0,0,517,2452,
        1,0,0,0,519,2454,1,0,0,0,521,2457,1,0,0,0,523,2459,1,0,0,0,525,2461,
        1,0,0,0,527,2463,1,0,0,0,529,2465,1,0,0,0,531,2467,1,0,0,0,533,2469,
        1,0,0,0,535,2471,1,0,0,0,537,2473,1,0,0,0,539,2475,1,0,0,0,541,2477,
        1,0,0,0,543,2479,1,0,0,0,545,2481,1,0,0,0,547,2504,1,0,0,0,549,2506,
        1,0,0,0,551,2520,1,0,0,0,553,2532,1,0,0,0,555,2554,1,0,0,0,557,2580,
        1,0,0,0,559,2584,1,0,0,0,561,2594,1,0,0,0,563,2602,1,0,0,0,565,2613,
        1,0,0,0,567,2624,1,0,0,0,569,2647,1,0,0,0,571,2675,1,0,0,0,573,2693,
        1,0,0,0,575,2702,1,0,0,0,577,2704,1,0,0,0,579,2706,1,0,0,0,581,2723,
        1,0,0,0,583,2738,1,0,0,0,585,586,7,0,0,0,586,587,7,1,0,0,587,588,
        7,1,0,0,588,2,1,0,0,0,589,590,7,0,0,0,590,591,7,2,0,0,591,592,7,
        2,0,0,592,4,1,0,0,0,593,594,7,0,0,0,594,595,7,3,0,0,595,596,7,0,
        0,0,596,597,7,2,0,0,597,598,7,4,0,0,598,599,7,5,0,0,599,600,7,6,
        0,0,600,601,7,7,0,0,601,6,1,0,0,0,602,603,7,0,0,0,603,604,7,2,0,
        0,604,605,7,5,0,0,605,606,7,8,0,0,606,607,7,9,0,0,607,8,1,0,0,0,
        608,609,7,0,0,0,609,610,7,3,0,0,610,611,7,1,0,0,611,10,1,0,0,0,612,
        613,7,0,0,0,613,614,7,3,0,0,614,615,7,4,0,0,615,12,1,0,0,0,616,617,
        7,0,0,0,617,618,7,3,0,0,618,619,7,5,0,0,619,620,7,6,0,0,620,14,1,
        0,0,0,621,622,7,0,0,0,622,623,7,9,0,0,623,624,7,9,0,0,624,625,7,
        0,0,0,625,626,7,4,0,0,626,16,1,0,0,0,627,628,7,0,0,0,628,629,7,10,
        0,0,629,18,1,0,0,0,630,631,7,0,0,0,631,632,7,10,0,0,632,633,7,7,
        0,0,633,20,1,0,0,0,634,635,7,0,0,0,635,636,7,5,0,0,636,22,1,0,0,
        0,637,638,7,0,0,0,638,639,7,11,0,0,639,640,7,11,0,0,640,641,7,9,
        0,0,641,642,7,8,0,0,642,643,7,11,0,0,643,644,7,0,0,0,644,645,7,5,
        0,0,645,646,7,8,0,0,646,24,1,0,0,0,647,648,7,0,0,0,648,649,7,12,
        0,0,649,650,7,5,0,0,650,651,7,13,0,0,651,652,7,14,0,0,652,653,7,
        9,0,0,653,654,7,6,0,0,654,655,7,15,0,0,655,656,7,0,0,0,656,657,7,
        5,0,0,657,658,7,6,0,0,658,659,7,14,0,0,659,660,7,3,0,0,660,26,1,
        0,0,0,661,662,7,16,0,0,662,663,7,8,0,0,663,664,7,9,0,0,664,665,7,
        3,0,0,665,666,7,14,0,0,666,667,7,12,0,0,667,668,7,2,0,0,668,669,
        7,2,0,0,669,670,7,6,0,0,670,28,1,0,0,0,671,672,7,16,0,0,672,673,
        7,8,0,0,673,674,7,5,0,0,674,675,7,17,0,0,675,676,7,8,0,0,676,677,
        7,8,0,0,677,678,7,3,0,0,678,30,1,0,0,0,679,680,7,16,0,0,680,681,
        7,2,0,0,681,682,7,14,0,0,682,683,7,7,0,0,683,684,7,18,0,0,684,685,
        5,95,0,0,685,686,7,10,0,0,686,687,7,6,0,0,687,688,7,15,0,0,688,689,
        7,8,0,0,689,32,1,0,0,0,690,691,7,19,0,0,691,692,7,0,0,0,692,693,
        7,9,0,0,693,694,7,5,0,0,694,695,7,6,0,0,695,696,7,5,0,0,696,697,
        7,6,0,0,697,698,7,14,0,0,698,699,7,3,0,0,699,700,7,8,0,0,700,701,
        7,1,0,0,701,34,1,0,0,0,702,703,7,19,0,0,703,704,7,9,0,0,704,705,
        7,8,0,0,705,706,7,19,0,0,706,707,7,0,0,0,707,708,7,9,0,0,708,709,
        7,8,0,0,709,710,5,95,0,0,710,711,7,20,0,0,711,712,7,3,0,0,712,36,
        1,0,0,0,713,714,7,8,0,0,714,715,7,21,0,0,715,716,7,5,0,0,716,717,
        7,8,0,0,717,718,7,9,0,0,718,719,7,3,0,0,719,720,7,0,0,0,720,721,
        7,2,0,0,721,38,1,0,0,0,722,723,7,7,0,0,723,724,7,2,0,0,724,725,7,
        14,0,0,725,726,7,10,0,0,726,727,7,8,0,0,727,728,7,20,0,0,728,729,
        7,3,0,0,729,40,1,0,0,0,730,731,7,10,0,0,731,732,7,14,0,0,732,733,
        7,9,0,0,733,734,7,5,0,0,734,42,1,0,0,0,735,736,7,19,0,0,736,737,
        7,12,0,0,737,738,7,9,0,0,738,739,7,11,0,0,739,740,7,8,0,0,740,44,
        1,0,0,0,741,742,7,10,0,0,742,743,7,5,0,0,743,744,7,14,0,0,744,745,
        7,9,0,0,745,746,7,8,0,0,746,747,7,1,0,0,747,46,1,0,0,0,748,749,7,
        2,0,0,749,750,7,14,0,0,750,751,7,7,0,0,751,752,7,0,0,0,752,753,7,
        5,0,0,753,754,7,6,0,0,754,755,7,14,0,0,755,756,7,3,0,0,756,48,1,
        0,0,0,757,758,7,5,0,0,758,759,7,16,0,0,759,760,7,2,0,0,760,761,7,
        19,0,0,761,762,7,9,0,0,762,763,7,14,0,0,763,764,7,19,0,0,764,765,
        7,8,0,0,765,766,7,9,0,0,766,767,7,5,0,0,767,768,7,6,0,0,768,769,
        7,8,0,0,769,770,7,10,0,0,770,50,1,0,0,0,771,772,7,16,0,0,772,773,
        7,4,0,0,773,52,1,0,0,0,774,775,7,7,0,0,775,776,7,0,0,0,776,777,7,
        10,0,0,777,778,7,7,0,0,778,779,7,0,0,0,779,780,7,1,0,0,780,781,7,
        8,0,0,781,54,1,0,0,0,782,783,7,7,0,0,783,784,7,0,0,0,784,785,7,10,
        0,0,785,786,7,8,0,0,786,56,1,0,0,0,787,788,7,7,0,0,788,789,7,0,0,
        0,789,790,7,10,0,0,790,791,7,5,0,0,791,58,1,0,0,0,792,793,7,7,0,
        0,793,794,7,0,0,0,794,795,7,7,0,0,795,796,7,13,0,0,796,797,7,8,0,
        0,797,798,7,1,0,0,798,60,1,0,0,0,799,800,7,7,0,0,800,801,7,13,0,
        0,801,802,7,0,0,0,802,803,7,3,0,0,803,804,7,11,0,0,804,805,7,8,0,
        0,805,62,1,0,0,0,806,807,7,7,0,0,807,808,7,14,0,0,808,809,7,2,0,
        0,809,810,7,12,0,0,810,811,7,22,0,0,811,812,7,3,0,0,812,64,1,0,0,
        0,813,814,7,7,0,0,814,815,7,14,0,0,815,816,7,2,0,0,816,817,7,12,
        0,0,817,818,7,22,0,0,818,819,7,3,0,0,819,820,7,10,0,0,820,66,1,0,
        0,0,821,822,7,7,0,0,822,823,7,14,0,0,823,824,7,22,0,0,824,825,7,
        22,0,0,825,826,7,8,0,0,826,827,7,3,0,0,827,828,7,5,0,0,828,68,1,
        0,0,0,829,830,7,7,0,0,830,831,7,14,0,0,831,832,7,22,0,0,832,833,
        7,19,0,0,833,834,7,9,0,0,834,835,7,8,0,0,835,836,7,10,0,0,836,837,
        7,10,0,0,837,838,7,6,0,0,838,839,7,14,0,0,839,840,7,3,0,0,840,70,
        1,0,0,0,841,842,7,7,0,0,842,843,7,14,0,0,843,844,7,22,0,0,844,845,
        7,19,0,0,845,846,7,12,0,0,846,847,7,5,0,0,847,848,7,8,0,0,848,72,
        1,0,0,0,849,850,7,7,0,0,850,851,7,9,0,0,851,852,7,8,0,0,852,853,
        7,0,0,0,853,854,7,5,0,0,854,855,7,8,0,0,855,74,1,0,0,0,856,857,7,
        7,0,0,857,858,7,9,0,0,858,859,7,14,0,0,859,860,7,10,0,0,860,861,
        7,10,0,0,861,76,1,0,0,0,862,863,7,7,0,0,863,864,7,12,0,0,864,865,
        7,9,0,0,865,866,7,9,0,0,866,867,7,8,0,0,867,868,7,3,0,0,868,869,
        7,5,0,0,869,78,1,0,0,0,870,871,7,7,0,0,871,872,7,12,0,0,872,873,
        7,9,0,0,873,874,7,9,0,0,874,875,7,8,0,0,875,876,7,3,0,0,876,877,
        7,5,0,0,877,878,5,95,0,0,878,879,7,1,0,0,879,880,7,0,0,0,880,881,
        7,5,0,0,881,882,7,8,0,0,882,80,1,0,0,0,883,884,7,7,0,0,884,885,7,
        12,0,0,885,886,7,9,0,0,886,887,7,9,0,0,887,888,7,8,0,0,888,889,7,
        3,0,0,889,890,7,5,0,0,890,891,5,95,0,0,891,892,7,19,0,0,892,893,
        7,0,0,0,893,894,7,5,0,0,894,895,7,13,0,0,895,82,1,0,0,0,896,897,
        7,7,0,0,897,898,7,12,0,0,898,899,7,9,0,0,899,900,7,9,0,0,900,901,
        7,8,0,0,901,902,7,3,0,0,902,903,7,5,0,0,903,904,5,95,0,0,904,905,
        7,5,0,0,905,906,7,6,0,0,906,907,7,22,0,0,907,908,7,8,0,0,908,84,
        1,0,0,0,909,910,7,7,0,0,910,911,7,12,0,0,911,912,7,9,0,0,912,913,
        7,9,0,0,913,914,7,8,0,0,914,915,7,3,0,0,915,916,7,5,0,0,916,917,
        5,95,0,0,917,918,7,5,0,0,918,919,7,6,0,0,919,920,7,22,0,0,920,921,
        7,8,0,0,921,922,7,10,0,0,922,923,7,5,0,0,923,924,7,0,0,0,924,925,
        7,22,0,0,925,926,7,19,0,0,926,86,1,0,0,0,927,928,7,7,0,0,928,929,
        7,12,0,0,929,930,7,9,0,0,930,931,7,9,0,0,931,932,7,8,0,0,932,933,
        7,3,0,0,933,934,7,5,0,0,934,935,5,95,0,0,935,936,7,12,0,0,936,937,
        7,10,0,0,937,938,7,8,0,0,938,939,7,9,0,0,939,88,1,0,0,0,940,941,
        7,1,0,0,941,942,7,0,0,0,942,943,7,5,0,0,943,944,7,0,0,0,944,90,1,
        0,0,0,945,946,7,1,0,0,946,947,7,0,0,0,947,948,7,5,0,0,948,949,7,
        0,0,0,949,950,7,16,0,0,950,951,7,0,0,0,951,952,7,10,0,0,952,953,
        7,8,0,0,953,92,1,0,0,0,954,955,7,1,0,0,955,956,7,0,0,0,956,957,7,
        5,0,0,957,958,7,0,0,0,958,959,7,16,0,0,959,960,7,0,0,0,960,961,7,
        10,0,0,961,962,7,8,0,0,962,963,7,10,0,0,963,94,1,0,0,0,964,965,7,
        1,0,0,965,966,7,0,0,0,966,967,7,4,0,0,967,96,1,0,0,0,968,969,7,1,
        0,0,969,970,7,0,0,0,970,971,7,4,0,0,971,972,7,10,0,0,972,98,1,0,
        0,0,973,974,7,1,0,0,974,975,7,8,0,0,975,976,7,2,0,0,976,977,7,8,
        0,0,977,978,7,5,0,0,978,979,7,8,0,0,979,100,1,0,0,0,980,981,7,1,
        0,0,981,982,7,8,0,0,982,983,7,20,0,0,983,984,7,0,0,0,984,985,7,12,
        0,0,985,986,7,2,0,0,986,987,7,5,0,0,987,102,1,0,0,0,988,989,7,1,
        0,0,989,990,7,8,0,0,990,991,7,2,0,0,991,992,7,6,0,0,992,993,7,22,
        0,0,993,994,7,6,0,0,994,995,7,5,0,0,995,996,7,8,0,0,996,997,7,1,
        0,0,997,104,1,0,0,0,998,999,7,1,0,0,999,1000,7,6,0,0,1000,1001,7,
        10,0,0,1001,1002,7,0,0,0,1002,1003,7,16,0,0,1003,1004,7,2,0,0,1004,
        1005,7,8,0,0,1005,106,1,0,0,0,1006,1007,7,12,0,0,1007,1008,7,19,
        0,0,1008,1009,7,1,0,0,1009,1010,7,0,0,0,1010,1011,7,5,0,0,1011,1012,
        7,8,0,0,1012,108,1,0,0,0,1013,1014,7,1,0,0,1014,1015,7,8,0,0,1015,
        1016,7,10,0,0,1016,1017,7,7,0,0,1017,110,1,0,0,0,1018,1019,7,1,0,
        0,1019,1020,7,8,0,0,1020,1021,7,10,0,0,1021,1022,7,7,0,0,1022,1023,
        7,9,0,0,1023,1024,7,6,0,0,1024,1025,7,16,0,0,1025,1026,7,8,0,0,1026,
        112,1,0,0,0,1027,1028,7,1,0,0,1028,1029,7,6,0,0,1029,1030,7,10,0,
        0,1030,1031,7,5,0,0,1031,1032,7,6,0,0,1032,1033,7,3,0,0,1033,1034,
        7,7,0,0,1034,1035,7,5,0,0,1035,114,1,0,0,0,1036,1037,7,1,0,0,1037,
        1038,7,9,0,0,1038,1039,7,14,0,0,1039,1040,7,19,0,0,1040,116,1,0,
        0,0,1041,1042,7,8,0,0,1042,1043,7,2,0,0,1043,1044,7,10,0,0,1044,
        1045,7,8,0,0,1045,118,1,0,0,0,1046,1047,7,8,0,0,1047,1048,7,3,0,
        0,1048,1049,7,7,0,0,1049,1050,7,14,0,0,1050,1051,7,1,0,0,1051,1052,
        7,6,0,0,1052,1053,7,3,0,0,1053,1054,7,11,0,0,1054,120,1,0,0,0,1055,
        1056,7,8,0,0,1056,1057,7,3,0,0,1057,1058,7,1,0,0,1058,122,1,0,0,
        0,1059,1060,7,8,0,0,1060,1061,7,10,0,0,1061,1062,7,7,0,0,1062,1063,
        7,0,0,0,1063,1064,7,19,0,0,1064,1065,7,8,0,0,1065,124,1,0,0,0,1066,
        1067,7,8,0,0,1067,1068,7,10,0,0,1068,1069,7,7,0,0,1069,1070,7,0,
        0,0,1070,1071,7,19,0,0,1071,1072,7,8,0,0,1072,1073,7,1,0,0,1073,
        126,1,0,0,0,1074,1075,7,8,0,0,1075,1076,7,21,0,0,1076,1077,7,7,0,
        0,1077,1078,7,8,0,0,1078,1079,7,19,0,0,1079,1080,7,5,0,0,1080,128,
        1,0,0,0,1081,1082,7,8,0,0,1082,1083,7,21,0,0,1083,1084,7,7,0,0,1084,
        1085,7,2,0,0,1085,1086,7,12,0,0,1086,1087,7,1,0,0,1087,1088,7,6,
        0,0,1088,1089,7,3,0,0,1089,1090,7,11,0,0,1090,130,1,0,0,0,1091,1092,
        7,8,0,0,1092,1093,7,21,0,0,1093,1094,7,6,0,0,1094,1095,7,10,0,0,
        1095,1096,7,5,0,0,1096,1097,7,10,0,0,1097,132,1,0,0,0,1098,1099,
        7,8,0,0,1099,1100,7,21,0,0,1100,1101,7,19,0,0,1101,1102,7,2,0,0,
        1102,1103,7,0,0,0,1103,1104,7,6,0,0,1104,1105,7,3,0,0,1105,134,1,
        0,0,0,1106,1107,7,8,0,0,1107,1108,7,21,0,0,1108,1109,7,5,0,0,1109,
        1110,7,9,0,0,1110,1111,7,0,0,0,1111,1112,7,7,0,0,1112,1113,7,5,0,
        0,1113,136,1,0,0,0,1114,1115,7,8,0,0,1115,1116,7,21,0,0,1116,1117,
        7,5,0,0,1117,1118,7,8,0,0,1118,1119,7,3,0,0,1119,1120,7,1,0,0,1120,
        1121,7,8,0,0,1121,1122,7,1,0,0,1122,138,1,0,0,0,1123,1124,7,20,0,
        0,1124,1125,7,0,0,0,1125,1126,7,2,0,0,1126,1127,7,10,0,0,1127,1128,
        7,8,0,0,1128,140,1,0,0,0,1129,1130,7,20,0,0,1130,1131,7,6,0,0,1131,
        1132,7,8,0,0,1132,1133,7,2,0,0,1133,1134,7,1,0,0,1134,1135,7,10,
        0,0,1135,142,1,0,0,0,1136,1137,7,20,0,0,1137,1138,7,6,0,0,1138,1139,
        7,2,0,0,1139,1140,7,8,0,0,1140,1141,7,20,0,0,1141,1142,7,14,0,0,
        1142,1143,7,9,0,0,1143,1144,7,22,0,0,1144,1145,7,0,0,0,1145,1146,
        7,5,0,0,1146,144,1,0,0,0,1147,1148,7,20,0,0,1148,1149,7,6,0,0,1149,
        1150,7,2,0,0,1150,1151,7,8,0,0,1151,1152,7,10,0,0,1152,146,1,0,0,
        0,1153,1154,7,20,0,0,1154,1155,7,6,0,0,1155,1156,7,2,0,0,1156,1157,
        7,5,0,0,1157,1158,7,8,0,0,1158,1159,7,9,0,0,1159,148,1,0,0,0,1160,
        1161,7,20,0,0,1161,1162,7,6,0,0,1162,1163,7,9,0,0,1163,1164,7,10,
        0,0,1164,1165,7,5,0,0,1165,150,1,0,0,0,1166,1167,7,20,0,0,1167,1168,
        7,6,0,0,1168,1169,7,3,0,0,1169,1170,7,0,0,0,1170,1171,7,2,0,0,1171,
        1172,7,6,0,0,1172,1173,7,15,0,0,1173,1174,7,8,0,0,1174,1175,5,95,
        0,0,1175,1176,7,20,0,0,1176,1177,7,3,0,0,1177,152,1,0,0,0,1178,1179,
        7,20,0,0,1179,1180,7,14,0,0,1180,1181,7,2,0,0,1181,1182,7,2,0,0,
        1182,1183,7,14,0,0,1183,1184,7,17,0,0,1184,1185,7,6,0,0,1185,1186,
        7,3,0,0,1186,1187,7,11,0,0,1187,154,1,0,0,0,1188,1189,7,20,0,0,1189,
        1190,7,14,0,0,1190,1191,7,9,0,0,1191,156,1,0,0,0,1192,1193,7,20,
        0,0,1193,1194,7,14,0,0,1194,1195,7,9,0,0,1195,1196,7,22,0,0,1196,
        1197,7,0,0,0,1197,1198,7,5,0,0,1198,158,1,0,0,0,1199,1200,7,20,0,
        0,1200,1201,7,14,0,0,1201,1202,7,9,0,0,1202,1203,7,22,0,0,1203,1204,
        7,0,0,0,1204,1205,7,5,0,0,1205,1206,7,5,0,0,1206,1207,7,8,0,0,1207,
        1208,7,1,0,0,1208,160,1,0,0,0,1209,1210,7,20,0,0,1210,1211,7,14,
        0,0,1211,1212,7,9,0,0,1212,1213,7,8,0,0,1213,1214,7,6,0,0,1214,1215,
        7,11,0,0,1215,1216,7,3,0,0,1216,162,1,0,0,0,1217,1218,7,20,0,0,1218,
        1219,7,9,0,0,1219,1220,7,14,0,0,1220,1221,7,22,0,0,1221,164,1,0,
        0,0,1222,1223,7,20,0,0,1223,1224,7,12,0,0,1224,1225,7,2,0,0,1225,
        1226,7,2,0,0,1226,166,1,0,0,0,1227,1228,7,20,0,0,1228,1229,7,12,
        0,0,1229,1230,7,3,0,0,1230,1231,7,7,0,0,1231,1232,7,5,0,0,1232,1233,
        7,6,0,0,1233,1234,7,14,0,0,1234,1235,7,3,0,0,1235,168,1,0,0,0,1236,
        1237,7,20,0,0,1237,1238,7,12,0,0,1238,1239,7,3,0,0,1239,1240,7,7,
        0,0,1240,1241,7,5,0,0,1241,1242,7,6,0,0,1242,1243,7,14,0,0,1243,
        1244,7,3,0,0,1244,1245,7,10,0,0,1245,170,1,0,0,0,1246,1247,7,11,
        0,0,1247,1248,7,9,0,0,1248,1249,7,0,0,0,1249,1250,7,3,0,0,1250,1251,
        7,5,0,0,1251,172,1,0,0,0,1252,1253,7,11,0,0,1253,1254,7,9,0,0,1254,
        1255,7,14,0,0,1255,1256,7,12,0,0,1256,1257,7,19,0,0,1257,174,1,0,
        0,0,1258,1259,7,11,0,0,1259,1260,7,9,0,0,1260,1261,7,14,0,0,1261,
        1262,7,12,0,0,1262,1263,7,19,0,0,1263,1264,7,6,0,0,1264,1265,7,3,
        0,0,1265,1266,7,11,0,0,1266,176,1,0,0,0,1267,1268,7,13,0,0,1268,
        1269,7,0,0,0,1269,1270,7,10,0,0,1270,1271,7,13,0,0,1271,178,1,0,
        0,0,1272,1273,7,13,0,0,1273,1274,7,0,0,0,1274,1275,7,23,0,0,1275,
        1276,7,6,0,0,1276,1277,7,3,0,0,1277,1278,7,11,0,0,1278,180,1,0,0,
        0,1279,1280,7,13,0,0,1280,1281,7,14,0,0,1281,1282,7,12,0,0,1282,
        1283,7,9,0,0,1283,182,1,0,0,0,1284,1285,7,13,0,0,1285,1286,7,14,
        0,0,1286,1287,7,12,0,0,1287,1288,7,9,0,0,1288,1289,7,10,0,0,1289,
        184,1,0,0,0,1290,1291,7,6,0,0,1291,1292,7,20,0,0,1292,186,1,0,0,
        0,1293,1294,7,6,0,0,1294,1295,7,3,0,0,1295,188,1,0,0,0,1296,1297,
        7,6,0,0,1297,1298,7,3,0,0,1298,1299,7,7,0,0,1299,1300,7,2,0,0,1300,
        1301,7,12,0,0,1301,1302,7,1,0,0,1302,1303,7,6,0,0,1303,1304,7,3,
        0,0,1304,1305,7,11,0,0,1305,190,1,0,0,0,1306,1307,7,6,0,0,1307,1308,
        7,3,0,0,1308,1309,7,7,0,0,1309,1310,7,9,0,0,1310,1311,7,8,0,0,1311,
        1312,7,22,0,0,1312,1313,7,8,0,0,1313,1314,7,3,0,0,1314,1315,7,5,
        0,0,1315,1316,7,0,0,0,1316,1317,7,2,0,0,1317,192,1,0,0,0,1318,1319,
        7,6,0,0,1319,1320,7,3,0,0,1320,1321,7,3,0,0,1321,1322,7,8,0,0,1322,
        1323,7,9,0,0,1323,194,1,0,0,0,1324,1325,7,6,0,0,1325,1326,7,3,0,
        0,1326,1327,7,19,0,0,1327,1328,7,0,0,0,1328,1329,7,5,0,0,1329,1330,
        7,13,0,0,1330,196,1,0,0,0,1331,1332,7,6,0,0,1332,1333,7,3,0,0,1333,
        1334,7,10,0,0,1334,1335,7,8,0,0,1335,1336,7,9,0,0,1336,1337,7,5,
        0,0,1337,198,1,0,0,0,1338,1339,7,6,0,0,1339,1340,7,3,0,0,1340,1341,
        7,5,0,0,1341,1342,7,8,0,0,1342,1343,7,9,0,0,1343,1344,7,10,0,0,1344,
        1345,7,8,0,0,1345,1346,7,7,0,0,1346,1347,7,5,0,0,1347,200,1,0,0,
        0,1348,1349,7,6,0,0,1349,1350,7,3,0,0,1350,1351,7,5,0,0,1351,1352,
        7,8,0,0,1352,1353,7,9,0,0,1353,1354,7,23,0,0,1354,1355,7,0,0,0,1355,
        1356,7,2,0,0,1356,202,1,0,0,0,1357,1358,7,6,0,0,1358,1359,7,3,0,
        0,1359,1360,7,5,0,0,1360,1361,7,8,0,0,1361,1362,7,9,0,0,1362,1363,
        7,22,0,0,1363,1364,7,8,0,0,1364,1365,7,1,0,0,1365,1366,7,6,0,0,1366,
        1367,7,0,0,0,1367,1368,7,5,0,0,1368,1369,7,8,0,0,1369,204,1,0,0,
        0,1370,1371,7,6,0,0,1371,1372,7,3,0,0,1372,1373,7,5,0,0,1373,1374,
        7,14,0,0,1374,206,1,0,0,0,1375,1376,7,6,0,0,1376,1377,7,3,0,0,1377,
        1378,7,6,0,0,1378,1379,7,5,0,0,1379,1380,5,95,0,0,1380,1381,7,20,
        0,0,1381,1382,7,3,0,0,1382,208,1,0,0,0,1383,1384,7,6,0,0,1384,1385,
        7,9,0,0,1385,1386,7,8,0,0,1386,1387,7,11,0,0,1387,1388,7,8,0,0,1388,
        1389,7,21,0,0,1389,1390,7,19,0,0,1390,210,1,0,0,0,1391,1392,7,6,
        0,0,1392,1393,7,2,0,0,1393,1394,7,6,0,0,1394,1395,7,18,0,0,1395,
        1396,7,8,0,0,1396,212,1,0,0,0,1397,1398,7,6,0,0,1398,1399,7,3,0,
        0,1399,1400,7,23,0,0,1400,1401,7,0,0,0,1401,1402,7,2,0,0,1402,1403,
        7,6,0,0,1403,1404,7,1,0,0,1404,1405,7,0,0,0,1405,1406,7,5,0,0,1406,
        1407,7,8,0,0,1407,214,1,0,0,0,1408,1409,7,6,0,0,1409,1410,7,10,0,
        0,1410,216,1,0,0,0,1411,1412,7,24,0,0,1412,1413,7,14,0,0,1413,1414,
        7,6,0,0,1414,1415,7,3,0,0,1415,218,1,0,0,0,1416,1417,7,18,0,0,1417,
        1418,7,8,0,0,1418,1419,7,4,0,0,1419,220,1,0,0,0,1420,1421,7,18,0,
        0,1421,1422,7,12,0,0,1422,1423,7,1,0,0,1423,1424,7,12,0,0,1424,222,
        1,0,0,0,1425,1426,7,2,0,0,1426,1427,7,0,0,0,1427,1428,7,10,0,0,1428,
        1429,7,5,0,0,1429,224,1,0,0,0,1430,1431,7,2,0,0,1431,1432,7,0,0,
        0,1432,1433,7,5,0,0,1433,1434,7,8,0,0,1434,1435,7,9,0,0,1435,1436,
        7,0,0,0,1436,1437,7,2,0,0,1437,226,1,0,0,0,1438,1439,7,2,0,0,1439,
        1440,7,8,0,0,1440,1441,7,20,0,0,1441,1442,7,5,0,0,1442,228,1,0,0,
        0,1443,1444,7,2,0,0,1444,1445,7,6,0,0,1445,1446,7,18,0,0,1446,1447,
        7,8,0,0,1447,230,1,0,0,0,1448,1449,7,2,0,0,1449,1450,7,6,0,0,1450,
        1451,7,22,0,0,1451,1452,7,6,0,0,1452,1453,7,5,0,0,1453,232,1,0,0,
        0,1454,1455,7,2,0,0,1455,1456,7,6,0,0,1456,1457,7,3,0,0,1457,1458,
        7,8,0,0,1458,1459,7,10,0,0,1459,234,1,0,0,0,1460,1461,7,2,0,0,1461,
        1462,7,14,0,0,1462,1463,7,0,0,0,1463,1464,7,1,0,0,1464,236,1,0,0,
        0,1465,1466,7,2,0,0,1466,1467,7,14,0,0,1467,1468,7,7,0,0,1468,1469,
        7,0,0,0,1469,1470,7,2,0,0,1470,1471,7,5,0,0,1471,1472,7,6,0,0,1472,
        1473,7,22,0,0,1473,1474,7,8,0,0,1474,238,1,0,0,0,1475,1476,7,2,0,
        0,1476,1477,7,14,0,0,1477,1478,7,7,0,0,1478,1479,7,0,0,0,1479,1480,
        7,2,0,0,1480,1481,7,5,0,0,1481,1482,7,6,0,0,1482,1483,7,22,0,0,1483,
        1484,7,8,0,0,1484,1485,7,10,0,0,1485,1486,7,5,0,0,1486,1487,7,0,
        0,0,1487,1488,7,22,0,0,1488,1489,7,19,0,0,1489,240,1,0,0,0,1490,
        1491,7,22,0,0,1491,1492,7,8,0,0,1492,1493,7,5,0,0,1493,1494,7,0,
        0,0,1494,1495,7,1,0,0,1495,1496,7,0,0,0,1496,1497,7,5,0,0,1497,1498,
        7,0,0,0,1498,242,1,0,0,0,1499,1500,7,22,0,0,1500,1501,7,6,0,0,1501,
        1502,7,3,0,0,1502,1503,7,12,0,0,1503,1504,7,5,0,0,1504,1505,7,8,
        0,0,1505,244,1,0,0,0,1506,1507,7,22,0,0,1507,1508,7,6,0,0,1508,1509,
        7,3,0,0,1509,1510,7,12,0,0,1510,1511,7,5,0,0,1511,1512,7,8,0,0,1512,
        1513,7,10,0,0,1513,246,1,0,0,0,1514,1515,7,22,0,0,1515,1516,7,14,
        0,0,1516,1517,7,3,0,0,1517,1518,7,5,0,0,1518,1519,7,13,0,0,1519,
        248,1,0,0,0,1520,1521,7,22,0,0,1521,1522,7,14,0,0,1522,1523,7,3,
        0,0,1523,1524,7,5,0,0,1524,1525,7,13,0,0,1525,1526,7,10,0,0,1526,
        250,1,0,0,0,1527,1528,7,22,0,0,1528,1529,7,8,0,0,1529,1530,7,9,0,
        0,1530,1531,7,11,0,0,1531,1532,7,8,0,0,1532,1533,5,95,0,0,1533,1534,
        7,20,0,0,1534,1535,7,3,0,0,1535,252,1,0,0,0,1536,1537,7,3,0,0,1537,
        1538,7,20,0,0,1538,1539,7,7,0,0,1539,254,1,0,0,0,1540,1541,7,3,0,
        0,1541,1542,7,20,0,0,1542,1543,7,1,0,0,1543,256,1,0,0,0,1544,1545,
        7,3,0,0,1545,1546,7,20,0,0,1546,1547,7,18,0,0,1547,1548,7,7,0,0,
        1548,258,1,0,0,0,1549,1550,7,3,0,0,1550,1551,7,20,0,0,1551,1552,
        7,18,0,0,1552,1553,7,1,0,0,1553,260,1,0,0,0,1554,1555,7,3,0,0,1555,
        1556,7,14,0,0,1556,1557,7,9,0,0,1557,1558,7,22,0,0,1558,1559,7,0,
        0,0,1559,1560,7,2,0,0,1560,1561,7,6,0,0,1561,1562,7,15,0,0,1562,
        1563,7,8,0,0,1563,262,1,0,0,0,1564,1565,7,3,0,0,1565,1566,7,14,0,
        0,1566,1567,7,5,0,0,1567,264,1,0,0,0,1568,1569,7,3,0,0,1569,1570,
        7,12,0,0,1570,1571,7,2,0,0,1571,1572,7,2,0,0,1572,266,1,0,0,0,1573,
        1574,7,3,0,0,1574,1575,7,12,0,0,1575,1576,7,2,0,0,1576,1577,7,2,
        0,0,1577,1578,7,10,0,0,1578,268,1,0,0,0,1579,1580,7,14,0,0,1580,
        1581,7,20,0,0,1581,1582,7,20,0,0,1582,1583,7,10,0,0,1583,1584,7,
        8,0,0,1584,1585,7,5,0,0,1585,270,1,0,0,0,1586,1587,7,14,0,0,1587,
        1588,7,3,0,0,1588,272,1,0,0,0,1589,1590,7,14,0,0,1590,1591,7,19,
        0,0,1591,1592,7,5,0,0,1592,1593,7,6,0,0,1593,1594,7,14,0,0,1594,
        1595,7,3,0,0,1595,274,1,0,0,0,1596,1597,7,14,0,0,1597,1598,7,9,0,
        0,1598,276,1,0,0,0,1599,1600,7,14,0,0,1600,1601,7,9,0,0,1601,1602,
        7,1,0,0,1602,1603,7,8,0,0,1603,1604,7,9,0,0,1604,278,1,0,0,0,1605,
        1606,7,14,0,0,1606,1607,7,9,0,0,1607,1608,7,1,0,0,1608,1609,7,6,
        0,0,1609,1610,7,3,0,0,1610,1611,7,0,0,0,1611,1612,7,2,0,0,1612,1613,
        7,6,0,0,1613,1614,7,5,0,0,1614,1615,7,4,0,0,1615,280,1,0,0,0,1616,
        1617,7,14,0,0,1617,1618,7,12,0,0,1618,1619,7,5,0,0,1619,1620,7,8,
        0,0,1620,1621,7,9,0,0,1621,282,1,0,0,0,1622,1623,7,14,0,0,1623,1624,
        7,17,0,0,1624,1625,7,3,0,0,1625,1626,7,8,0,0,1626,1627,7,9,0,0,1627,
        284,1,0,0,0,1628,1629,7,14,0,0,1629,1630,7,23,0,0,1630,1631,7,8,
        0,0,1631,1632,7,9,0,0,1632,286,1,0,0,0,1633,1634,7,14,0,0,1634,1635,
        7,23,0,0,1635,1636,7,8,0,0,1636,1637,7,9,0,0,1637,1638,7,17,0,0,
        1638,1639,7,9,0,0,1639,1640,7,6,0,0,1640,1641,7,5,0,0,1641,1642,
        7,8,0,0,1642,288,1,0,0,0,1643,1644,7,19,0,0,1644,1645,7,0,0,0,1645,
        1646,7,9,0,0,1646,1647,7,5,0,0,1647,1648,7,6,0,0,1648,1649,7,5,0,
        0,1649,1650,7,6,0,0,1650,1651,7,14,0,0,1651,1652,7,3,0,0,1652,290,
        1,0,0,0,1653,1654,7,19,0,0,1654,1655,7,0,0,0,1655,1656,7,9,0,0,1656,
        1657,7,5,0,0,1657,1658,7,6,0,0,1658,1659,7,5,0,0,1659,1660,7,6,0,
        0,1660,1661,7,14,0,0,1661,1662,7,3,0,0,1662,1663,7,10,0,0,1663,292,
        1,0,0,0,1664,1665,7,19,0,0,1665,1666,7,0,0,0,1666,1667,7,9,0,0,1667,
        1668,7,25,0,0,1668,1669,7,12,0,0,1669,1670,7,8,0,0,1670,1671,7,5,
        0,0,1671,294,1,0,0,0,1672,1673,7,19,0,0,1673,1674,7,14,0,0,1674,
        1675,7,10,0,0,1675,1676,7,6,0,0,1676,1677,7,5,0,0,1677,1678,7,6,
        0,0,1678,1679,7,14,0,0,1679,1680,7,3,0,0,1680,296,1,0,0,0,1681,1682,
        7,19,0,0,1682,1683,7,9,0,0,1683,1684,7,8,0,0,1684,1685,7,7,0,0,1685,
        1686,7,8,0,0,1686,1687,7,1,0,0,1687,1688,7,6,0,0,1688,1689,7,3,0,
        0,1689,1690,7,11,0,0,1690,298,1,0,0,0,1691,1692,7,19,0,0,1692,1693,
        7,9,0,0,1693,1694,7,6,0,0,1694,1695,7,22,0,0,1695,1696,7,0,0,0,1696,
        1697,7,9,0,0,1697,1698,7,4,0,0,1698,300,1,0,0,0,1699,1700,7,9,0,
        0,1700,1701,7,8,0,0,1701,1702,7,19,0,0,1702,1703,7,2,0,0,1703,1704,
        7,6,0,0,1704,1705,7,7,0,0,1705,1706,7,0,0,0,1706,1707,7,5,0,0,1707,
        1708,7,6,0,0,1708,1709,7,14,0,0,1709,1710,7,3,0,0,1710,302,1,0,0,
        0,1711,1712,7,19,0,0,1712,1713,7,9,0,0,1713,1714,7,6,0,0,1714,1715,
        7,23,0,0,1715,1716,7,6,0,0,1716,1717,7,2,0,0,1717,1718,7,8,0,0,1718,
        1719,7,11,0,0,1719,1720,7,8,0,0,1720,1721,7,10,0,0,1721,304,1,0,
        0,0,1722,1723,7,19,0,0,1723,1724,7,9,0,0,1724,1725,7,14,0,0,1725,
        1726,7,19,0,0,1726,1727,7,8,0,0,1727,1728,7,9,0,0,1728,1729,7,5,
        0,0,1729,1730,7,6,0,0,1730,1731,7,8,0,0,1731,1732,7,10,0,0,1732,
        306,1,0,0,0,1733,1734,7,9,0,0,1734,1735,7,0,0,0,1735,1736,7,3,0,
        0,1736,1737,7,11,0,0,1737,1738,7,8,0,0,1738,308,1,0,0,0,1739,1740,
        7,9,0,0,1740,1741,7,8,0,0,1741,1742,7,7,0,0,1742,1743,7,14,0,0,1743,
        1744,7,23,0,0,1744,1745,7,8,0,0,1745,1746,7,9,0,0,1746,310,1,0,0,
        0,1747,1748,7,9,0,0,1748,1749,7,8,0,0,1749,1750,7,3,0,0,1750,1751,
        7,0,0,0,1751,1752,7,22,0,0,1752,1753,7,8,0,0,1753,312,1,0,0,0,1754,
        1755,7,9,0,0,1755,1756,7,8,0,0,1756,1757,7,19,0,0,1757,1758,7,8,
        0,0,1758,1759,7,0,0,0,1759,1760,7,5,0,0,1760,1761,7,0,0,0,1761,1762,
        7,16,0,0,1762,1763,7,2,0,0,1763,1764,7,8,0,0,1764,314,1,0,0,0,1765,
        1766,7,9,0,0,1766,1767,7,8,0,0,1767,1768,7,19,0,0,1768,1769,7,2,
        0,0,1769,1770,7,0,0,0,1770,1771,7,7,0,0,1771,1772,7,8,0,0,1772,316,
        1,0,0,0,1773,1774,7,9,0,0,1774,1775,7,8,0,0,1775,1776,7,10,0,0,1776,
        1777,7,5,0,0,1777,1778,7,9,0,0,1778,1779,7,6,0,0,1779,1780,7,7,0,
        0,1780,1781,7,5,0,0,1781,318,1,0,0,0,1782,1783,7,9,0,0,1783,1784,
        7,8,0,0,1784,1785,7,5,0,0,1785,1786,7,12,0,0,1786,1787,7,9,0,0,1787,
        1788,7,3,0,0,1788,1789,7,10,0,0,1789,320,1,0,0,0,1790,1791,7,9,0,
        0,1791,1792,7,8,0,0,1792,1793,7,23,0,0,1793,1794,7,14,0,0,1794,1795,
        7,18,0,0,1795,1796,7,8,0,0,1796,322,1,0,0,0,1797,1798,7,9,0,0,1798,
        1799,7,8,0,0,1799,1800,7,20,0,0,1800,1801,7,9,0,0,1801,1802,7,8,
        0,0,1802,1803,7,10,0,0,1803,1804,7,13,0,0,1804,324,1,0,0,0,1805,
        1806,7,9,0,0,1806,1807,7,8,0,0,1807,1808,7,11,0,0,1808,1809,7,8,
        0,0,1809,1810,7,21,0,0,1810,1811,7,19,0,0,1811,326,1,0,0,0,1812,
        1813,7,9,0,0,1813,1814,7,2,0,0,1814,1815,7,6,0,0,1815,1816,7,18,
        0,0,1816,1817,7,8,0,0,1817,328,1,0,0,0,1818,1819,7,9,0,0,1819,1820,
        7,6,0,0,1820,1821,7,11,0,0,1821,1822,7,13,0,0,1822,1823,7,5,0,0,
        1823,330,1,0,0,0,1824,1825,7,9,0,0,1825,1826,7,14,0,0,1826,1827,
        7,2,0,0,1827,1828,7,8,0,0,1828,332,1,0,0,0,1829,1830,7,9,0,0,1830,
        1831,7,14,0,0,1831,1832,7,2,0,0,1832,1833,7,8,0,0,1833,1834,7,10,
        0,0,1834,334,1,0,0,0,1835,1836,7,9,0,0,1836,1837,7,14,0,0,1837,1838,
        7,17,0,0,1838,336,1,0,0,0,1839,1840,7,9,0,0,1840,1841,7,14,0,0,1841,
        1842,7,17,0,0,1842,1843,7,10,0,0,1843,338,1,0,0,0,1844,1845,7,10,
        0,0,1845,1846,7,7,0,0,1846,1847,7,13,0,0,1847,1848,7,8,0,0,1848,
        1849,7,22,0,0,1849,1850,7,0,0,0,1850,340,1,0,0,0,1851,1852,7,10,
        0,0,1852,1853,7,7,0,0,1853,1854,7,13,0,0,1854,1855,7,8,0,0,1855,
        1856,7,22,0,0,1856,1857,7,0,0,0,1857,1858,7,10,0,0,1858,342,1,0,
        0,0,1859,1860,7,10,0,0,1860,1861,7,8,0,0,1861,1862,7,7,0,0,1862,
        1863,7,14,0,0,1863,1864,7,3,0,0,1864,1865,7,1,0,0,1865,344,1,0,0,
        0,1866,1867,7,10,0,0,1867,1868,7,8,0,0,1868,1869,7,7,0,0,1869,1870,
        7,14,0,0,1870,1871,7,3,0,0,1871,1872,7,1,0,0,1872,1873,7,10,0,0,
        1873,346,1,0,0,0,1874,1875,7,10,0,0,1875,1876,7,8,0,0,1876,1877,
        7,2,0,0,1877,1878,7,8,0,0,1878,1879,7,7,0,0,1879,1880,7,5,0,0,1880,
        348,1,0,0,0,1881,1882,7,10,0,0,1882,1883,7,8,0,0,1883,1884,7,9,0,
        0,1884,1885,7,1,0,0,1885,1886,7,8,0,0,1886,1887,7,19,0,0,1887,1888,
        7,9,0,0,1888,1889,7,14,0,0,1889,1890,7,19,0,0,1890,1891,7,8,0,0,
        1891,1892,7,9,0,0,1892,1893,7,5,0,0,1893,1894,7,6,0,0,1894,1895,
        7,8,0,0,1895,1896,7,10,0,0,1896,350,1,0,0,0,1897,1898,7,10,0,0,1898,
        1899,7,8,0,0,1899,1900,7,5,0,0,1900,352,1,0,0,0,1901,1902,7,10,0,
        0,1902,1903,7,8,0,0,1903,1904,7,22,0,0,1904,1905,7,6,0,0,1905,354,
        1,0,0,0,1906,1907,7,10,0,0,1907,1908,7,8,0,0,1908,1909,7,9,0,0,1909,
        1910,7,23,0,0,1910,1911,7,8,0,0,1911,1912,7,9,0,0,1912,356,1,0,0,
        0,1913,1914,7,10,0,0,1914,1915,7,13,0,0,1915,1916,7,14,0,0,1916,
        1917,7,17,0,0,1917,358,1,0,0,0,1918,1919,7,10,0,0,1919,1920,7,13,
        0,0,1920,1921,7,12,0,0,1921,1922,7,5,0,0,1922,1923,7,1,0,0,1923,
        1924,7,14,0,0,1924,1925,7,17,0,0,1925,1926,7,3,0,0,1926,360,1,0,
        0,0,1927,1928,7,10,0,0,1928,1929,7,14,0,0,1929,1930,7,22,0,0,1930,
        1931,7,8,0,0,1931,362,1,0,0,0,1932,1933,7,10,0,0,1933,1934,7,5,0,
        0,1934,1935,7,0,0,0,1935,1936,7,5,0,0,1936,1937,7,10,0,0,1937,364,
        1,0,0,0,1938,1939,7,10,0,0,1939,1940,7,5,0,0,1940,1941,7,9,0,0,1941,
        1942,7,0,0,0,1942,1943,7,6,0,0,1943,1944,7,11,0,0,1944,1945,7,13,
        0,0,1945,1946,7,5,0,0,1946,1947,5,95,0,0,1947,1948,7,24,0,0,1948,
        1949,7,14,0,0,1949,1950,7,6,0,0,1950,1951,7,3,0,0,1951,366,1,0,0,
        0,1952,1953,7,10,0,0,1953,1954,7,12,0,0,1954,1955,7,16,0,0,1955,
        1956,7,10,0,0,1956,1957,7,5,0,0,1957,1958,7,9,0,0,1958,1959,7,6,
        0,0,1959,1960,7,3,0,0,1960,1961,7,11,0,0,1961,368,1,0,0,0,1962,1963,
        7,10,0,0,1963,1964,7,4,0,0,1964,1965,7,10,0,0,1965,1966,7,5,0,0,
        1966,1967,7,8,0,0,1967,1968,7,22,0,0,1968,370,1,0,0,0,1969,1970,
        7,10,0,0,1970,1971,7,4,0,0,1971,1972,7,22,0,0,1972,1973,7,16,0,0,
        1973,1974,7,14,0,0,1974,1975,7,2,0,0,1975,372,1,0,0,0,1976,1977,
        7,10,0,0,1977,1978,7,8,0,0,1978,1979,7,9,0,0,1979,1980,7,6,0,0,1980,
        1981,7,0,0,0,1981,1982,7,2,0,0,1982,1983,7,6,0,0,1983,1984,7,15,
        0,0,1984,1985,7,8,0,0,1985,1986,5,95,0,0,1986,1987,7,20,0,0,1987,
        1988,7,3,0,0,1988,374,1,0,0,0,1989,1990,7,5,0,0,1990,1991,7,0,0,
        0,1991,1992,7,16,0,0,1992,1993,7,2,0,0,1993,1994,7,8,0,0,1994,376,
        1,0,0,0,1995,1996,7,5,0,0,1996,1997,7,0,0,0,1997,1998,7,16,0,0,1998,
        1999,7,2,0,0,1999,2000,7,8,0,0,2000,2001,7,10,0,0,2001,378,1,0,0,
        0,2002,2003,7,5,0,0,2003,2004,7,0,0,0,2004,2005,7,16,0,0,2005,2006,
        7,2,0,0,2006,2007,7,8,0,0,2007,2008,7,10,0,0,2008,2009,7,0,0,0,2009,
        2010,7,22,0,0,2010,2011,7,19,0,0,2011,2012,7,2,0,0,2012,2013,7,8,
        0,0,2013,380,1,0,0,0,2014,2015,7,5,0,0,2015,2016,7,8,0,0,2016,2017,
        7,9,0,0,2017,2018,7,22,0,0,2018,2019,7,6,0,0,2019,2020,7,3,0,0,2020,
        2021,7,0,0,0,2021,2022,7,5,0,0,2022,2023,7,8,0,0,2023,2024,7,1,0,
        0,2024,2025,5,32,0,0,2025,382,1,0,0,0,2026,2027,7,5,0,0,2027,2028,
        7,13,0,0,2028,2029,7,8,0,0,2029,2030,7,3,0,0,2030,384,1,0,0,0,2031,
        2032,7,5,0,0,2032,2033,7,14,0,0,2033,386,1,0,0,0,2034,2035,7,5,0,
        0,2035,2036,7,9,0,0,2036,2037,7,12,0,0,2037,2038,7,8,0,0,2038,388,
        1,0,0,0,2039,2040,7,5,0,0,2040,2041,7,9,0,0,2041,2042,7,4,0,0,2042,
        2043,5,95,0,0,2043,2044,7,7,0,0,2044,2045,7,0,0,0,2045,2046,7,10,
        0,0,2046,2047,7,5,0,0,2047,390,1,0,0,0,2048,2049,7,5,0,0,2049,2050,
        7,9,0,0,2050,2051,7,12,0,0,2051,2052,7,3,0,0,2052,2053,7,7,0,0,2053,
        2054,7,0,0,0,2054,2055,7,5,0,0,2055,2056,7,8,0,0,2056,392,1,0,0,
        0,2057,2058,7,12,0,0,2058,2059,7,3,0,0,2059,2060,7,7,0,0,2060,2061,
        7,0,0,0,2061,2062,7,7,0,0,2062,2063,7,13,0,0,2063,2064,7,8,0,0,2064,
        2065,7,1,0,0,2065,394,1,0,0,0,2066,2067,7,12,0,0,2067,2068,7,8,0,
        0,2068,2069,7,10,0,0,2069,2070,7,7,0,0,2070,2071,7,0,0,0,2071,2072,
        7,19,0,0,2072,2073,7,8,0,0,2073,396,1,0,0,0,2074,2075,7,12,0,0,2075,
        2076,7,3,0,0,2076,2077,7,16,0,0,2077,2078,7,14,0,0,2078,2079,7,12,
        0,0,2079,2080,7,3,0,0,2080,2081,7,1,0,0,2081,2082,7,8,0,0,2082,2083,
        7,1,0,0,2083,398,1,0,0,0,2084,2085,7,12,0,0,2085,2086,7,3,0,0,2086,
        2087,7,6,0,0,2087,2088,7,14,0,0,2088,2089,7,3,0,0,2089,400,1,0,0,
        0,2090,2091,7,12,0,0,2091,2092,7,3,0,0,2092,2093,7,3,0,0,2093,2094,
        7,8,0,0,2094,2095,7,10,0,0,2095,2096,7,5,0,0,2096,402,1,0,0,0,2097,
        2098,7,12,0,0,2098,2099,7,3,0,0,2099,2100,7,10,0,0,2100,2101,7,8,
        0,0,2101,2102,7,5,0,0,2102,404,1,0,0,0,2103,2104,7,12,0,0,2104,2105,
        7,10,0,0,2105,2106,7,8,0,0,2106,406,1,0,0,0,2107,2108,7,12,0,0,2108,
        2109,7,10,0,0,2109,2110,7,8,0,0,2110,2111,7,9,0,0,2111,408,1,0,0,
        0,2112,2113,7,12,0,0,2113,2114,7,10,0,0,2114,2115,7,6,0,0,2115,2116,
        7,3,0,0,2116,2117,7,11,0,0,2117,410,1,0,0,0,2118,2119,7,12,0,0,2119,
        2120,7,19,0,0,2120,2121,7,1,0,0,2121,2122,7,0,0,0,2122,2123,7,5,
        0,0,2123,2124,7,8,0,0,2124,2125,5,95,0,0,2125,2126,7,20,0,0,2126,
        2127,7,3,0,0,2127,412,1,0,0,0,2128,2129,7,12,0,0,2129,2130,7,19,
        0,0,2130,2131,7,10,0,0,2131,2132,7,8,0,0,2132,2133,7,9,0,0,2133,
        2134,7,5,0,0,2134,414,1,0,0,0,2135,2136,7,12,0,0,2136,2137,7,3,0,
        0,2137,2138,7,18,0,0,2138,2139,7,3,0,0,2139,2140,7,14,0,0,2140,2141,
        7,17,0,0,2141,2142,7,3,0,0,2142,416,1,0,0,0,2143,2144,7,12,0,0,2144,
        2145,7,9,0,0,2145,2146,7,6,0,0,2146,418,1,0,0,0,2147,2148,7,23,0,
        0,2148,2149,7,0,0,0,2149,2150,7,2,0,0,2150,2151,7,12,0,0,2151,2152,
        7,8,0,0,2152,420,1,0,0,0,2153,2154,7,23,0,0,2154,2155,7,0,0,0,2155,
        2156,7,2,0,0,2156,2157,7,12,0,0,2157,2158,7,8,0,0,2158,2159,7,10,
        0,0,2159,422,1,0,0,0,2160,2161,7,23,0,0,2161,2162,7,6,0,0,2162,2163,
        7,8,0,0,2163,2164,7,17,0,0,2164,424,1,0,0,0,2165,2166,7,23,0,0,2166,
        2167,7,6,0,0,2167,2168,7,8,0,0,2168,2169,7,17,0,0,2169,2170,7,10,
        0,0,2170,426,1,0,0,0,2171,2172,7,17,0,0,2172,2173,7,13,0,0,2173,
        2174,7,8,0,0,2174,2175,7,3,0,0,2175,428,1,0,0,0,2176,2177,7,17,0,
        0,2177,2178,7,13,0,0,2178,2179,7,8,0,0,2179,2180,7,9,0,0,2180,2181,
        7,8,0,0,2181,430,1,0,0,0,2182,2183,7,17,0,0,2183,2184,7,6,0,0,2184,
        2185,7,5,0,0,2185,2186,7,13,0,0,2186,432,1,0,0,0,2187,2188,7,4,0,
        0,2188,2189,7,8,0,0,2189,2190,7,0,0,0,2190,2191,7,9,0,0,2191,434,
        1,0,0,0,2192,2193,7,4,0,0,2193,2194,7,8,0,0,2194,2195,7,0,0,0,2195,
        2196,7,9,0,0,2196,2197,7,10,0,0,2197,436,1,0,0,0,2198,2199,7,5,0,
        0,2199,2200,7,8,0,0,2200,2201,7,21,0,0,2201,2202,7,5,0,0,2202,2203,
        7,20,0,0,2203,2204,7,6,0,0,2204,2205,7,2,0,0,2205,2206,7,8,0,0,2206,
        438,1,0,0,0,2207,2208,7,14,0,0,2208,2209,7,9,0,0,2209,2210,7,7,0,
        0,2210,440,1,0,0,0,2211,2212,7,0,0,0,2212,2213,7,23,0,0,2213,2214,
        7,9,0,0,2214,2215,7,14,0,0,2215,442,1,0,0,0,2216,2217,7,10,0,0,2217,
        2218,7,8,0,0,2218,2219,7,25,0,0,2219,2220,7,12,0,0,2220,2221,7,8,
        0,0,2221,2222,7,3,0,0,2222,2223,7,7,0,0,2223,2224,7,8,0,0,2224,2225,
        7,20,0,0,2225,2226,7,6,0,0,2226,2227,7,2,0,0,2227,2228,7,8,0,0,2228,
        444,1,0,0,0,2229,2230,7,9,0,0,2230,2231,7,7,0,0,2231,2232,7,20,0,
        0,2232,2233,7,6,0,0,2233,2234,7,2,0,0,2234,2235,7,8,0,0,2235,446,
        1,0,0,0,2236,2237,7,9,0,0,2237,2238,7,8,0,0,2238,2239,7,20,0,0,2239,
        2240,7,8,0,0,2240,2241,7,9,0,0,2241,2242,7,8,0,0,2242,2243,7,3,0,
        0,2243,2244,7,7,0,0,2244,2245,7,8,0,0,2245,2246,7,10,0,0,2246,448,
        1,0,0,0,2247,2248,7,3,0,0,2248,2249,7,14,0,0,2249,2250,7,23,0,0,
        2250,2251,7,0,0,0,2251,2252,7,2,0,0,2252,2253,7,6,0,0,2253,2254,
        7,1,0,0,2254,2255,7,0,0,0,2255,2256,7,5,0,0,2256,2257,7,8,0,0,2257,
        450,1,0,0,0,2258,2259,7,9,0,0,2259,2260,7,8,0,0,2260,2261,7,2,0,
        0,2261,2262,7,4,0,0,2262,452,1,0,0,0,2263,2264,7,16,0,0,2264,2265,
        7,6,0,0,2265,2266,7,3,0,0,2266,2267,7,0,0,0,2267,2268,7,9,0,0,2268,
        2269,7,4,0,0,2269,454,1,0,0,0,2270,2271,7,16,0,0,2271,2272,7,6,0,
        0,2272,2273,7,11,0,0,2273,2274,7,6,0,0,2274,2275,7,3,0,0,2275,2276,
        7,5,0,0,2276,456,1,0,0,0,2277,2278,7,16,0,0,2278,2279,7,14,0,0,2279,
        2280,7,14,0,0,2280,2281,7,2,0,0,2281,2282,7,8,0,0,2282,2283,7,0,
        0,0,2283,2284,7,3,0,0,2284,458,1,0,0,0,2285,2286,7,7,0,0,2286,2287,
        7,13,0,0,2287,2288,7,0,0,0,2288,2289,7,9,0,0,2289,460,1,0,0,0,2290,
        2291,7,1,0,0,2291,2292,7,0,0,0,2292,2293,7,5,0,0,2293,2294,7,8,0,
        0,2294,462,1,0,0,0,2295,2296,7,1,0,0,2296,2297,7,8,0,0,2297,2298,
        7,7,0,0,2298,2299,7,6,0,0,2299,2300,7,22,0,0,2300,2301,7,0,0,0,2301,
        2302,7,2,0,0,2302,464,1,0,0,0,2303,2304,7,1,0,0,2304,2305,7,14,0,
        0,2305,2306,7,12,0,0,2306,2307,7,16,0,0,2307,2308,7,2,0,0,2308,2309,
        7,8,0,0,2309,466,1,0,0,0,2310,2311,7,6,0,0,2311,2312,7,3,0,0,2312,
        2313,7,5,0,0,2313,468,1,0,0,0,2314,2315,7,22,0,0,2315,2316,7,0,0,
        0,2316,2317,7,19,0,0,2317,470,1,0,0,0,2318,2319,7,9,0,0,2319,2320,
        7,8,0,0,2320,2321,7,0,0,0,2321,2322,7,2,0,0,2322,472,1,0,0,0,2323,
        2324,7,10,0,0,2324,2325,7,22,0,0,2325,2326,7,0,0,0,2326,2327,7,2,
        0,0,2327,2328,7,2,0,0,2328,2329,7,6,0,0,2329,2330,7,3,0,0,2330,2331,
        7,5,0,0,2331,474,1,0,0,0,2332,2333,7,20,0,0,2333,2334,7,2,0,0,2334,
        2335,7,14,0,0,2335,2336,7,0,0,0,2336,2337,7,5,0,0,2337,476,1,0,0,
        0,2338,2339,7,10,0,0,2339,2340,7,5,0,0,2340,2341,7,9,0,0,2341,2342,
        7,6,0,0,2342,2343,7,3,0,0,2343,2344,7,11,0,0,2344,478,1,0,0,0,2345,
        2346,7,10,0,0,2346,2347,7,5,0,0,2347,2348,7,9,0,0,2348,2349,7,12,
        0,0,2349,2350,7,7,0,0,2350,2351,7,5,0,0,2351,480,1,0,0,0,2352,2353,
        7,5,0,0,2353,2354,7,6,0,0,2354,2355,7,22,0,0,2355,2356,7,8,0,0,2356,
        2357,7,10,0,0,2357,2358,7,5,0,0,2358,2359,7,0,0,0,2359,2360,7,22,
        0,0,2360,2361,7,19,0,0,2361,482,1,0,0,0,2362,2363,7,5,0,0,2363,2364,
        7,6,0,0,2364,2365,7,3,0,0,2365,2366,7,4,0,0,2366,2367,7,6,0,0,2367,
        2368,7,3,0,0,2368,2369,7,5,0,0,2369,484,1,0,0,0,2370,2371,7,23,0,
        0,2371,2372,7,0,0,0,2372,2373,7,9,0,0,2373,2374,7,7,0,0,2374,2375,
        7,13,0,0,2375,2376,7,0,0,0,2376,2377,7,9,0,0,2377,486,1,0,0,0,2378,
        2379,7,7,0,0,2379,2380,7,14,0,0,2380,2381,7,22,0,0,2381,2382,7,19,
        0,0,2382,2383,7,2,0,0,2383,2384,7,8,0,0,2384,2385,7,21,0,0,2385,
        488,1,0,0,0,2386,2387,5,39,0,0,2387,2388,7,3,0,0,2388,2389,7,12,
        0,0,2389,2390,7,22,0,0,2390,2391,7,1,0,0,2391,2392,7,23,0,0,2392,
        2393,7,10,0,0,2393,2394,5,39,0,0,2394,490,1,0,0,0,2395,2396,5,39,
        0,0,2396,2397,7,3,0,0,2397,2398,7,12,0,0,2398,2399,7,22,0,0,2399,
        2400,7,3,0,0,2400,2401,7,12,0,0,2401,2402,7,2,0,0,2402,2403,7,2,
        0,0,2403,2404,7,10,0,0,2404,2405,5,39,0,0,2405,492,1,0,0,0,2406,
        2407,5,39,0,0,2407,2408,7,0,0,0,2408,2409,7,23,0,0,2409,2410,7,11,
        0,0,2410,2411,7,10,0,0,2411,2412,7,6,0,0,2412,2413,7,15,0,0,2413,
        2414,7,8,0,0,2414,2415,5,39,0,0,2415,494,1,0,0,0,2416,2417,5,39,
        0,0,2417,2418,7,22,0,0,2418,2419,7,0,0,0,2419,2420,7,21,0,0,2420,
        2421,7,10,0,0,2421,2422,7,6,0,0,2422,2423,7,15,0,0,2423,2424,7,8,
        0,0,2424,2425,5,39,0,0,2425,496,1,0,0,0,2426,2427,5,61,0,0,2427,
        498,1,0,0,0,2428,2429,5,60,0,0,2429,2433,5,62,0,0,2430,2431,5,33,
        0,0,2431,2433,5,61,0,0,2432,2428,1,0,0,0,2432,2430,1,0,0,0,2433,
        500,1,0,0,0,2434,2435,5,60,0,0,2435,502,1,0,0,0,2436,2437,5,60,0,
        0,2437,2438,5,61,0,0,2438,504,1,0,0,0,2439,2440,5,62,0,0,2440,506,
        1,0,0,0,2441,2442,5,62,0,0,2442,2443,5,61,0,0,2443,508,1,0,0,0,2444,
        2445,5,43,0,0,2445,510,1,0,0,0,2446,2447,5,45,0,0,2447,512,1,0,0,
        0,2448,2449,5,42,0,0,2449,514,1,0,0,0,2450,2451,5,47,0,0,2451,516,
        1,0,0,0,2452,2453,5,37,0,0,2453,518,1,0,0,0,2454,2455,5,124,0,0,
        2455,2456,5,124,0,0,2456,520,1,0,0,0,2457,2458,5,46,0,0,2458,522,
        1,0,0,0,2459,2460,5,59,0,0,2460,524,1,0,0,0,2461,2462,5,44,0,0,2462,
        526,1,0,0,0,2463,2464,5,58,0,0,2464,528,1,0,0,0,2465,2466,5,40,0,
        0,2466,530,1,0,0,0,2467,2468,5,41,0,0,2468,532,1,0,0,0,2469,2470,
        5,91,0,0,2470,534,1,0,0,0,2471,2472,5,93,0,0,2472,536,1,0,0,0,2473,
        2474,5,123,0,0,2474,538,1,0,0,0,2475,2476,5,125,0,0,2476,540,1,0,
        0,0,2477,2478,5,124,0,0,2478,542,1,0,0,0,2479,2480,5,63,0,0,2480,
        544,1,0,0,0,2481,2482,5,45,0,0,2482,2483,5,62,0,0,2483,546,1,0,0,
        0,2484,2490,5,39,0,0,2485,2489,8,26,0,0,2486,2487,5,39,0,0,2487,
        2489,5,39,0,0,2488,2485,1,0,0,0,2488,2486,1,0,0,0,2489,2492,1,0,
        0,0,2490,2488,1,0,0,0,2490,2491,1,0,0,0,2491,2493,1,0,0,0,2492,2490,
        1,0,0,0,2493,2505,5,39,0,0,2494,2500,5,34,0,0,2495,2499,8,27,0,0,
        2496,2497,5,34,0,0,2497,2499,5,34,0,0,2498,2495,1,0,0,0,2498,2496,
        1,0,0,0,2499,2502,1,0,0,0,2500,2498,1,0,0,0,2500,2501,1,0,0,0,2501,
        2503,1,0,0,0,2502,2500,1,0,0,0,2503,2505,5,34,0,0,2504,2484,1,0,
        0,0,2504,2494,1,0,0,0,2505,548,1,0,0,0,2506,2507,7,12,0,0,2507,2508,
        5,38,0,0,2508,2509,5,39,0,0,2509,2515,1,0,0,0,2510,2514,8,26,0,0,
        2511,2512,5,39,0,0,2512,2514,5,39,0,0,2513,2510,1,0,0,0,2513,2511,
        1,0,0,0,2514,2517,1,0,0,0,2515,2513,1,0,0,0,2515,2516,1,0,0,0,2516,
        2518,1,0,0,0,2517,2515,1,0,0,0,2518,2519,5,39,0,0,2519,550,1,0,0,
        0,2520,2521,7,21,0,0,2521,2522,5,39,0,0,2522,2526,1,0,0,0,2523,2525,
        8,26,0,0,2524,2523,1,0,0,0,2525,2528,1,0,0,0,2526,2524,1,0,0,0,2526,
        2527,1,0,0,0,2527,2529,1,0,0,0,2528,2526,1,0,0,0,2529,2530,5,39,
        0,0,2530,552,1,0,0,0,2531,2533,3,575,287,0,2532,2531,1,0,0,0,2533,
        2534,1,0,0,0,2534,2532,1,0,0,0,2534,2535,1,0,0,0,2535,554,1,0,0,
        0,2536,2538,3,575,287,0,2537,2536,1,0,0,0,2538,2539,1,0,0,0,2539,
        2537,1,0,0,0,2539,2540,1,0,0,0,2540,2541,1,0,0,0,2541,2545,5,46,
        0,0,2542,2544,3,575,287,0,2543,2542,1,0,0,0,2544,2547,1,0,0,0,2545,
        2543,1,0,0,0,2545,2546,1,0,0,0,2546,2555,1,0,0,0,2547,2545,1,0,0,
        0,2548,2550,5,46,0,0,2549,2551,3,575,287,0,2550,2549,1,0,0,0,2551,
        2552,1,0,0,0,2552,2550,1,0,0,0,2552,2553,1,0,0,0,2553,2555,1,0,0,
        0,2554,2537,1,0,0,0,2554,2548,1,0,0,0,2555,556,1,0,0,0,2556,2558,
        3,575,287,0,2557,2556,1,0,0,0,2558,2559,1,0,0,0,2559,2557,1,0,0,
        0,2559,2560,1,0,0,0,2560,2568,1,0,0,0,2561,2565,5,46,0,0,2562,2564,
        3,575,287,0,2563,2562,1,0,0,0,2564,2567,1,0,0,0,2565,2563,1,0,0,
        0,2565,2566,1,0,0,0,2566,2569,1,0,0,0,2567,2565,1,0,0,0,2568,2561,
        1,0,0,0,2568,2569,1,0,0,0,2569,2570,1,0,0,0,2570,2571,3,573,286,
        0,2571,2581,1,0,0,0,2572,2574,5,46,0,0,2573,2575,3,575,287,0,2574,
        2573,1,0,0,0,2575,2576,1,0,0,0,2576,2574,1,0,0,0,2576,2577,1,0,0,
        0,2577,2578,1,0,0,0,2578,2579,3,573,286,0,2579,2581,1,0,0,0,2580,
        2557,1,0,0,0,2580,2572,1,0,0,0,2581,558,1,0,0,0,2582,2585,3,577,
        288,0,2583,2585,5,95,0,0,2584,2582,1,0,0,0,2584,2583,1,0,0,0,2585,
        2591,1,0,0,0,2586,2590,3,577,288,0,2587,2590,3,575,287,0,2588,2590,
        7,28,0,0,2589,2586,1,0,0,0,2589,2587,1,0,0,0,2589,2588,1,0,0,0,2590,
        2593,1,0,0,0,2591,2589,1,0,0,0,2591,2592,1,0,0,0,2592,560,1,0,0,
        0,2593,2591,1,0,0,0,2594,2598,3,575,287,0,2595,2599,3,577,288,0,
        2596,2599,3,575,287,0,2597,2599,7,28,0,0,2598,2595,1,0,0,0,2598,
        2596,1,0,0,0,2598,2597,1,0,0,0,2599,2600,1,0,0,0,2600,2598,1,0,0,
        0,2600,2601,1,0,0,0,2601,562,1,0,0,0,2602,2608,5,34,0,0,2603,2607,
        8,27,0,0,2604,2605,5,34,0,0,2605,2607,5,34,0,0,2606,2603,1,0,0,0,
        2606,2604,1,0,0,0,2607,2610,1,0,0,0,2608,2606,1,0,0,0,2608,2609,
        1,0,0,0,2609,2611,1,0,0,0,2610,2608,1,0,0,0,2611,2612,5,34,0,0,2612,
        564,1,0,0,0,2613,2619,5,96,0,0,2614,2618,8,29,0,0,2615,2616,5,96,
        0,0,2616,2618,5,96,0,0,2617,2614,1,0,0,0,2617,2615,1,0,0,0,2618,
        2621,1,0,0,0,2619,2617,1,0,0,0,2619,2620,1,0,0,0,2620,2622,1,0,0,
        0,2621,2619,1,0,0,0,2622,2623,5,96,0,0,2623,566,1,0,0,0,2624,2625,
        7,5,0,0,2625,2626,7,6,0,0,2626,2627,7,22,0,0,2627,2628,7,8,0,0,2628,
        2629,1,0,0,0,2629,2630,3,583,291,0,2630,2631,7,17,0,0,2631,2632,
        7,6,0,0,2632,2633,7,5,0,0,2633,2634,7,13,0,0,2634,2635,1,0,0,0,2635,
        2636,3,583,291,0,2636,2637,7,5,0,0,2637,2638,7,6,0,0,2638,2639,7,
        22,0,0,2639,2640,7,8,0,0,2640,2641,1,0,0,0,2641,2642,3,583,291,0,
        2642,2643,7,15,0,0,2643,2644,7,14,0,0,2644,2645,7,3,0,0,2645,2646,
        7,8,0,0,2646,568,1,0,0,0,2647,2648,7,5,0,0,2648,2649,7,6,0,0,2649,
        2650,7,22,0,0,2650,2651,7,8,0,0,2651,2652,7,10,0,0,2652,2653,7,5,
        0,0,2653,2654,7,0,0,0,2654,2655,7,22,0,0,2655,2656,7,19,0,0,2656,
        2657,1,0,0,0,2657,2658,3,583,291,0,2658,2659,7,17,0,0,2659,2660,
        7,6,0,0,2660,2661,7,5,0,0,2661,2662,7,13,0,0,2662,2663,1,0,0,0,2663,
        2664,3,583,291,0,2664,2665,7,5,0,0,2665,2666,7,6,0,0,2666,2667,7,
        22,0,0,2667,2668,7,8,0,0,2668,2669,1,0,0,0,2669,2670,3,583,291,0,
        2670,2671,7,15,0,0,2671,2672,7,14,0,0,2672,2673,7,3,0,0,2673,2674,
        7,8,0,0,2674,570,1,0,0,0,2675,2676,7,1,0,0,2676,2677,7,14,0,0,2677,
        2678,7,12,0,0,2678,2679,7,16,0,0,2679,2680,7,2,0,0,2680,2681,7,8,
        0,0,2681,2682,1,0,0,0,2682,2683,3,583,291,0,2683,2684,7,19,0,0,2684,
        2685,7,9,0,0,2685,2686,7,8,0,0,2686,2687,7,7,0,0,2687,2688,7,6,0,
        0,2688,2689,7,10,0,0,2689,2690,7,6,0,0,2690,2691,7,14,0,0,2691,2692,
        7,3,0,0,2692,572,1,0,0,0,2693,2695,7,8,0,0,2694,2696,7,30,0,0,2695,
        2694,1,0,0,0,2695,2696,1,0,0,0,2696,2698,1,0,0,0,2697,2699,3,575,
        287,0,2698,2697,1,0,0,0,2699,2700,1,0,0,0,2700,2698,1,0,0,0,2700,
        2701,1,0,0,0,2701,574,1,0,0,0,2702,2703,7,31,0,0,2703,576,1,0,0,
        0,2704,2705,7,32,0,0,2705,578,1,0,0,0,2706,2707,5,45,0,0,2707,2708,
        5,45,0,0,2708,2712,1,0,0,0,2709,2711,8,33,0,0,2710,2709,1,0,0,0,
        2711,2714,1,0,0,0,2712,2710,1,0,0,0,2712,2713,1,0,0,0,2713,2716,
        1,0,0,0,2714,2712,1,0,0,0,2715,2717,5,13,0,0,2716,2715,1,0,0,0,2716,
        2717,1,0,0,0,2717,2719,1,0,0,0,2718,2720,5,10,0,0,2719,2718,1,0,
        0,0,2719,2720,1,0,0,0,2720,2721,1,0,0,0,2721,2722,6,289,0,0,2722,
        580,1,0,0,0,2723,2724,5,47,0,0,2724,2725,5,42,0,0,2725,2729,1,0,
        0,0,2726,2728,9,0,0,0,2727,2726,1,0,0,0,2728,2731,1,0,0,0,2729,2730,
        1,0,0,0,2729,2727,1,0,0,0,2730,2732,1,0,0,0,2731,2729,1,0,0,0,2732,
        2733,5,42,0,0,2733,2734,5,47,0,0,2734,2735,1,0,0,0,2735,2736,6,290,
        0,0,2736,582,1,0,0,0,2737,2739,7,34,0,0,2738,2737,1,0,0,0,2739,2740,
        1,0,0,0,2740,2738,1,0,0,0,2740,2741,1,0,0,0,2741,2742,1,0,0,0,2742,
        2743,6,291,0,0,2743,584,1,0,0,0,36,0,2432,2488,2490,2498,2500,2504,
        2513,2515,2526,2534,2539,2545,2552,2554,2559,2565,2568,2576,2580,
        2584,2589,2591,2598,2600,2606,2608,2617,2619,2695,2700,2712,2716,
        2719,2729,2740,1,0,1,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!ImpalaSqlLexer.__ATN) {
            ImpalaSqlLexer.__ATN = new antlr.ATNDeserializer().deserialize(ImpalaSqlLexer._serializedATN);
        }

        return ImpalaSqlLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(ImpalaSqlLexer.literalNames, ImpalaSqlLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return ImpalaSqlLexer.vocabulary;
    }

    private static readonly decisionsToDFA = ImpalaSqlLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}