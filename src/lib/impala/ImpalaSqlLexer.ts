// Generated from dt-sql-parser/src/grammar/impala/ImpalaSqlLexer.g4 by ANTLR 4.13.1

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
    public static readonly KW_MAP = 122;
    public static readonly KW_MINUTE = 123;
    public static readonly KW_MINUTES = 124;
    public static readonly KW_MONTH = 125;
    public static readonly KW_MONTHS = 126;
    public static readonly KW_MERGE_FN = 127;
    public static readonly KW_NFC = 128;
    public static readonly KW_NFD = 129;
    public static readonly KW_NFKC = 130;
    public static readonly KW_NFKD = 131;
    public static readonly KW_NORMALIZE = 132;
    public static readonly KW_NOT = 133;
    public static readonly KW_NULL = 134;
    public static readonly KW_NULLS = 135;
    public static readonly KW_OFFSET = 136;
    public static readonly KW_ON = 137;
    public static readonly KW_OPTION = 138;
    public static readonly KW_OR = 139;
    public static readonly KW_ORDER = 140;
    public static readonly KW_ORDINALITY = 141;
    public static readonly KW_OUTER = 142;
    public static readonly KW_OWNER = 143;
    public static readonly KW_OVER = 144;
    public static readonly KW_OVERWRITE = 145;
    public static readonly KW_PARTITION = 146;
    public static readonly KW_PARTITIONS = 147;
    public static readonly KW_PARQUET = 148;
    public static readonly KW_POSITION = 149;
    public static readonly KW_PRECEDING = 150;
    public static readonly KW_PRIMARY = 151;
    public static readonly KW_REPLICATION = 152;
    public static readonly KW_PRIVILEGES = 153;
    public static readonly KW_PROPERTIES = 154;
    public static readonly KW_RANGE = 155;
    public static readonly KW_RECOVER = 156;
    public static readonly KW_RENAME = 157;
    public static readonly KW_REPEATABLE = 158;
    public static readonly KW_REPLACE = 159;
    public static readonly KW_RESTRICT = 160;
    public static readonly KW_RETURNS = 161;
    public static readonly KW_REVOKE = 162;
    public static readonly KW_REFRESH = 163;
    public static readonly KW_REGEXP = 164;
    public static readonly KW_RLIKE = 165;
    public static readonly KW_RIGHT = 166;
    public static readonly KW_ROLE = 167;
    public static readonly KW_ROLES = 168;
    public static readonly KW_ROW = 169;
    public static readonly KW_ROWS = 170;
    public static readonly KW_SCHEMA = 171;
    public static readonly KW_SCHEMAS = 172;
    public static readonly KW_SECOND = 173;
    public static readonly KW_SECONDS = 174;
    public static readonly KW_SELECT = 175;
    public static readonly KW_SERDEPROPERTIES = 176;
    public static readonly KW_SET = 177;
    public static readonly KW_SEMI = 178;
    public static readonly KW_SERVER = 179;
    public static readonly KW_SHOW = 180;
    public static readonly KW_SHUTDOWN = 181;
    public static readonly KW_SOME = 182;
    public static readonly KW_STATS = 183;
    public static readonly KW_STRUCT = 184;
    public static readonly KW_STRAIGHT_JOIN = 185;
    public static readonly KW_SUBSTRING = 186;
    public static readonly KW_SYSTEM = 187;
    public static readonly KW_SYMBOL = 188;
    public static readonly KW_SERIALIZE_FN = 189;
    public static readonly KW_TABLE = 190;
    public static readonly KW_TABLES = 191;
    public static readonly KW_TABLESAMPLE = 192;
    public static readonly KW_TERMINATED = 193;
    public static readonly KW_THEN = 194;
    public static readonly KW_TO = 195;
    public static readonly KW_TRUE = 196;
    public static readonly KW_TRY_CAST = 197;
    public static readonly KW_TRUNCATE = 198;
    public static readonly KW_UNCACHED = 199;
    public static readonly KW_UESCAPE = 200;
    public static readonly KW_UNBOUNDED = 201;
    public static readonly KW_UNION = 202;
    public static readonly KW_UNNEST = 203;
    public static readonly KW_UNSET = 204;
    public static readonly KW_USE = 205;
    public static readonly KW_USER = 206;
    public static readonly KW_USING = 207;
    public static readonly KW_UPDATE_FN = 208;
    public static readonly KW_UPSERT = 209;
    public static readonly KW_UNKNOWN = 210;
    public static readonly KW_URI = 211;
    public static readonly KW_VALUE = 212;
    public static readonly KW_VALUES = 213;
    public static readonly KW_VIEW = 214;
    public static readonly KW_VIEWS = 215;
    public static readonly KW_WHEN = 216;
    public static readonly KW_WHERE = 217;
    public static readonly KW_WITH = 218;
    public static readonly KW_YEAR = 219;
    public static readonly KW_YEARS = 220;
    public static readonly KW_TEXTFILE = 221;
    public static readonly KW_ORC = 222;
    public static readonly KW_AVRO = 223;
    public static readonly KW_SEQUENCEFILE = 224;
    public static readonly KW_RCFILE = 225;
    public static readonly KW_REFERENCES = 226;
    public static readonly KW_NOVALIDATE = 227;
    public static readonly KW_RELY = 228;
    public static readonly STATS_NUMDVS = 229;
    public static readonly STATS_NUMNULLS = 230;
    public static readonly STATS_AVGSIZE = 231;
    public static readonly STATS_MAXSIZE = 232;
    public static readonly EQ = 233;
    public static readonly NEQ = 234;
    public static readonly LT = 235;
    public static readonly LTE = 236;
    public static readonly GT = 237;
    public static readonly GTE = 238;
    public static readonly PLUS = 239;
    public static readonly MINUS = 240;
    public static readonly ASTERISK = 241;
    public static readonly SLASH = 242;
    public static readonly PERCENT = 243;
    public static readonly CONCAT = 244;
    public static readonly DOT = 245;
    public static readonly SEMICOLON = 246;
    public static readonly COMMA = 247;
    public static readonly COLON = 248;
    public static readonly LPAREN = 249;
    public static readonly RPAREN = 250;
    public static readonly LSQUARE = 251;
    public static readonly RSQUARE = 252;
    public static readonly LCURLY = 253;
    public static readonly RCURLY = 254;
    public static readonly BITWISEOR = 255;
    public static readonly QUESTION = 256;
    public static readonly RIGHT_ARROW = 257;
    public static readonly STRING = 258;
    public static readonly UNICODE_STRING = 259;
    public static readonly BINARY_LITERAL = 260;
    public static readonly INTEGER_VALUE = 261;
    public static readonly DECIMAL_VALUE = 262;
    public static readonly DOUBLE_VALUE = 263;
    public static readonly IDENTIFIER = 264;
    public static readonly DIGIT_IDENTIFIER = 265;
    public static readonly QUOTED_IDENTIFIER = 266;
    public static readonly BACKQUOTED_IDENTIFIER = 267;
    public static readonly TIME_WITH_TIME_ZONE = 268;
    public static readonly TIMESTAMP_WITH_TIME_ZONE = 269;
    public static readonly DOUBLE_PRECISION = 270;
    public static readonly SIMPLE_COMMENT = 271;
    public static readonly BRACKETED_COMMENT = 272;
    public static readonly WS = 273;

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
        "'LOAD'", "'LOCALTIME'", "'LOCALTIMESTAMP'", "'METADATA'", "'MAP'", 
        "'MINUTE'", "'MINUTES'", "'MONTH'", "'MONTHS'", "'MERGE_FN'", "'NFC'", 
        "'NFD'", "'NFKC'", "'NFKD'", "'NORMALIZE'", "'NOT'", "'NULL'", "'NULLS'", 
        "'OFFSET'", "'ON'", "'OPTION'", "'OR'", "'ORDER'", "'ORDINALITY'", 
        "'OUTER'", "'OWNER'", "'OVER'", "'OVERWRITE'", "'PARTITION'", "'PARTITIONS'", 
        "'PARQUET'", "'POSITION'", "'PRECEDING'", "'PRIMARY'", "'REPLICATION'", 
        "'PRIVILEGES'", "'PROPERTIES'", "'RANGE'", "'RECOVER'", "'RENAME'", 
        "'REPEATABLE'", "'REPLACE'", "'RESTRICT'", "'RETURNS'", "'REVOKE'", 
        "'REFRESH'", "'REGEXP'", "'RLIKE'", "'RIGHT'", "'ROLE'", "'ROLES'", 
        "'ROW'", "'ROWS'", "'SCHEMA'", "'SCHEMAS'", "'SECOND'", "'SECONDS'", 
        "'SELECT'", "'SERDEPROPERTIES'", "'SET'", "'SEMI'", "'SERVER'", 
        "'SHOW'", "'SHUTDOWN'", "'SOME'", "'STATS'", "'STRUCT'", "'STRAIGHT_JOIN'", 
        "'SUBSTRING'", "'SYSTEM'", "'SYMBOL'", "'SERIALIZE_FN'", "'TABLE'", 
        "'TABLES'", "'TABLESAMPLE'", "'TERMINATED '", "'THEN'", "'TO'", 
        "'TRUE'", "'TRY_CAST'", "'TRUNCATE'", "'UNCACHED'", "'UESCAPE'", 
        "'UNBOUNDED'", "'UNION'", "'UNNEST'", "'UNSET'", "'USE'", "'USER'", 
        "'USING'", "'UPDATE_FN'", "'UPSERT'", "'UNKNOWN'", "'URI'", "'VALUE'", 
        "'VALUES'", "'VIEW'", "'VIEWS'", "'WHEN'", "'WHERE'", "'WITH'", 
        "'YEAR'", "'YEARS'", "'TEXTFILE'", "'ORC'", "'AVRO'", "'SEQUENCEFILE'", 
        "'RCFILE'", "'REFERENCES'", "'NOVALIDATE'", "'RELY'", "''NUMDVS''", 
        "''NUMNULLS''", "''AVGSIZE''", "''MAXSIZE''", "'='", null, "'<'", 
        "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", "'%'", "'||'", 
        "'.'", "';'", "','", "':'", "'('", "')'", "'['", "']'", "'{'", "'}'", 
        "'|'", "'?'", "'->'"
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
        "KW_LOCALTIME", "KW_LOCALTIMESTAMP", "KW_METADATA", "KW_MAP", "KW_MINUTE", 
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
        "KW_SHUTDOWN", "KW_SOME", "KW_STATS", "KW_STRUCT", "KW_STRAIGHT_JOIN", 
        "KW_SUBSTRING", "KW_SYSTEM", "KW_SYMBOL", "KW_SERIALIZE_FN", "KW_TABLE", 
        "KW_TABLES", "KW_TABLESAMPLE", "KW_TERMINATED", "KW_THEN", "KW_TO", 
        "KW_TRUE", "KW_TRY_CAST", "KW_TRUNCATE", "KW_UNCACHED", "KW_UESCAPE", 
        "KW_UNBOUNDED", "KW_UNION", "KW_UNNEST", "KW_UNSET", "KW_USE", "KW_USER", 
        "KW_USING", "KW_UPDATE_FN", "KW_UPSERT", "KW_UNKNOWN", "KW_URI", 
        "KW_VALUE", "KW_VALUES", "KW_VIEW", "KW_VIEWS", "KW_WHEN", "KW_WHERE", 
        "KW_WITH", "KW_YEAR", "KW_YEARS", "KW_TEXTFILE", "KW_ORC", "KW_AVRO", 
        "KW_SEQUENCEFILE", "KW_RCFILE", "KW_REFERENCES", "KW_NOVALIDATE", 
        "KW_RELY", "STATS_NUMDVS", "STATS_NUMNULLS", "STATS_AVGSIZE", "STATS_MAXSIZE", 
        "EQ", "NEQ", "LT", "LTE", "GT", "GTE", "PLUS", "MINUS", "ASTERISK", 
        "SLASH", "PERCENT", "CONCAT", "DOT", "SEMICOLON", "COMMA", "COLON", 
        "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "LCURLY", "RCURLY", "BITWISEOR", 
        "QUESTION", "RIGHT_ARROW", "STRING", "UNICODE_STRING", "BINARY_LITERAL", 
        "INTEGER_VALUE", "DECIMAL_VALUE", "DOUBLE_VALUE", "IDENTIFIER", 
        "DIGIT_IDENTIFIER", "QUOTED_IDENTIFIER", "BACKQUOTED_IDENTIFIER", 
        "TIME_WITH_TIME_ZONE", "TIMESTAMP_WITH_TIME_ZONE", "DOUBLE_PRECISION", 
        "SIMPLE_COMMENT", "BRACKETED_COMMENT", "WS"
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
        "KW_LOCALTIME", "KW_LOCALTIMESTAMP", "KW_METADATA", "KW_MAP", "KW_MINUTE", 
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
        "KW_SHUTDOWN", "KW_SOME", "KW_STATS", "KW_STRUCT", "KW_STRAIGHT_JOIN", 
        "KW_SUBSTRING", "KW_SYSTEM", "KW_SYMBOL", "KW_SERIALIZE_FN", "KW_TABLE", 
        "KW_TABLES", "KW_TABLESAMPLE", "KW_TERMINATED", "KW_THEN", "KW_TO", 
        "KW_TRUE", "KW_TRY_CAST", "KW_TRUNCATE", "KW_UNCACHED", "KW_UESCAPE", 
        "KW_UNBOUNDED", "KW_UNION", "KW_UNNEST", "KW_UNSET", "KW_USE", "KW_USER", 
        "KW_USING", "KW_UPDATE_FN", "KW_UPSERT", "KW_UNKNOWN", "KW_URI", 
        "KW_VALUE", "KW_VALUES", "KW_VIEW", "KW_VIEWS", "KW_WHEN", "KW_WHERE", 
        "KW_WITH", "KW_YEAR", "KW_YEARS", "KW_TEXTFILE", "KW_ORC", "KW_AVRO", 
        "KW_SEQUENCEFILE", "KW_RCFILE", "KW_REFERENCES", "KW_NOVALIDATE", 
        "KW_RELY", "STATS_NUMDVS", "STATS_NUMNULLS", "STATS_AVGSIZE", "STATS_MAXSIZE", 
        "EQ", "NEQ", "LT", "LTE", "GT", "GTE", "PLUS", "MINUS", "ASTERISK", 
        "SLASH", "PERCENT", "CONCAT", "DOT", "SEMICOLON", "COMMA", "COLON", 
        "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "LCURLY", "RCURLY", "BITWISEOR", 
        "QUESTION", "RIGHT_ARROW", "STRING", "UNICODE_STRING", "BINARY_LITERAL", 
        "INTEGER_VALUE", "DECIMAL_VALUE", "DOUBLE_VALUE", "IDENTIFIER", 
        "DIGIT_IDENTIFIER", "QUOTED_IDENTIFIER", "BACKQUOTED_IDENTIFIER", 
        "TIME_WITH_TIME_ZONE", "TIMESTAMP_WITH_TIME_ZONE", "DOUBLE_PRECISION", 
        "EXPONENT", "DIGIT", "LETTER", "SIMPLE_COMMENT", "BRACKETED_COMMENT", 
        "WS",
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
        4,0,273,2600,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,
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
        2,274,7,274,2,275,7,275,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,
        1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,
        1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,
        1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,
        11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
        12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,
        13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,
        15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,
        16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,
        17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,
        18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,
        20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,
        22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,
        24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,
        25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,
        27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,
        29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,
        31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,
        33,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,
        34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
        36,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,
        38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,
        39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,
        40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,
        41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,
        42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,
        43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,
        44,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,
        45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,47,1,47,1,
        47,1,47,1,48,1,48,1,48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,49,1,
        49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,51,1,51,1,51,1,51,1,
        51,1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,
        52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,54,1,54,1,54,1,54,1,54,1,
        55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,
        56,1,56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,58,1,58,1,58,1,
        58,1,58,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,
        60,1,60,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,
        62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,64,1,64,1,
        64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,1,
        65,1,65,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,67,1,67,1,67,1,
        67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,
        68,1,69,1,69,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,70,1,70,1,70,1,
        70,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,72,1,
        72,1,72,1,72,1,72,1,72,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,74,1,
        74,1,74,1,74,1,74,1,74,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,
        75,1,75,1,75,1,75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,
        76,1,77,1,77,1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,79,1,
        79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,80,1,80,1,80,1,80,1,
        80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,82,1,82,1,82,1,82,1,
        82,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,84,1,84,1,84,1,
        84,1,84,1,84,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,1,85,1,
        86,1,86,1,86,1,86,1,86,1,86,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,
        87,1,87,1,88,1,88,1,88,1,88,1,88,1,89,1,89,1,89,1,89,1,89,1,89,1,
        89,1,90,1,90,1,90,1,90,1,90,1,91,1,91,1,91,1,91,1,91,1,91,1,92,1,
        92,1,92,1,93,1,93,1,93,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,
        94,1,94,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,
        95,1,96,1,96,1,96,1,96,1,96,1,96,1,97,1,97,1,97,1,97,1,97,1,97,1,
        97,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,99,1,99,1,99,1,99,1,99,1,
        99,1,99,1,99,1,99,1,99,1,100,1,100,1,100,1,100,1,100,1,100,1,100,
        1,100,1,100,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,
        1,101,1,101,1,101,1,101,1,102,1,102,1,102,1,102,1,102,1,103,1,103,
        1,103,1,103,1,103,1,103,1,103,1,103,1,104,1,104,1,104,1,104,1,104,
        1,104,1,104,1,104,1,105,1,105,1,105,1,105,1,105,1,105,1,106,1,106,
        1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,107,1,107,
        1,107,1,108,1,108,1,108,1,108,1,108,1,109,1,109,1,109,1,109,1,110,
        1,110,1,110,1,110,1,110,1,111,1,111,1,111,1,111,1,111,1,112,1,112,
        1,112,1,112,1,112,1,112,1,112,1,112,1,113,1,113,1,113,1,113,1,113,
        1,114,1,114,1,114,1,114,1,114,1,115,1,115,1,115,1,115,1,115,1,115,
        1,116,1,116,1,116,1,116,1,116,1,116,1,117,1,117,1,117,1,117,1,117,
        1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,119,
        1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,
        1,119,1,119,1,119,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,
        1,120,1,121,1,121,1,121,1,121,1,122,1,122,1,122,1,122,1,122,1,122,
        1,122,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,124,1,124,
        1,124,1,124,1,124,1,124,1,125,1,125,1,125,1,125,1,125,1,125,1,125,
        1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,127,1,127,
        1,127,1,127,1,128,1,128,1,128,1,128,1,129,1,129,1,129,1,129,1,129,
        1,130,1,130,1,130,1,130,1,130,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,1,131,1,131,1,131,1,132,1,132,1,132,1,132,1,133,1,133,1,133,
        1,133,1,133,1,134,1,134,1,134,1,134,1,134,1,134,1,135,1,135,1,135,
        1,135,1,135,1,135,1,135,1,136,1,136,1,136,1,137,1,137,1,137,1,137,
        1,137,1,137,1,137,1,138,1,138,1,138,1,139,1,139,1,139,1,139,1,139,
        1,139,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,
        1,140,1,141,1,141,1,141,1,141,1,141,1,141,1,142,1,142,1,142,1,142,
        1,142,1,142,1,143,1,143,1,143,1,143,1,143,1,144,1,144,1,144,1,144,
        1,144,1,144,1,144,1,144,1,144,1,144,1,145,1,145,1,145,1,145,1,145,
        1,145,1,145,1,145,1,145,1,145,1,146,1,146,1,146,1,146,1,146,1,146,
        1,146,1,146,1,146,1,146,1,146,1,147,1,147,1,147,1,147,1,147,1,147,
        1,147,1,147,1,148,1,148,1,148,1,148,1,148,1,148,1,148,1,148,1,148,
        1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,150,
        1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,151,1,151,1,151,1,151,
        1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,152,1,152,1,152,
        1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,153,1,153,1,153,
        1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,154,1,154,1,154,
        1,154,1,154,1,154,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,
        1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,157,1,157,1,157,1,157,
        1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,158,1,158,1,158,1,158,
        1,158,1,158,1,158,1,158,1,159,1,159,1,159,1,159,1,159,1,159,1,159,
        1,159,1,159,1,160,1,160,1,160,1,160,1,160,1,160,1,160,1,160,1,161,
        1,161,1,161,1,161,1,161,1,161,1,161,1,162,1,162,1,162,1,162,1,162,
        1,162,1,162,1,162,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,164,
        1,164,1,164,1,164,1,164,1,164,1,165,1,165,1,165,1,165,1,165,1,165,
        1,166,1,166,1,166,1,166,1,166,1,167,1,167,1,167,1,167,1,167,1,167,
        1,168,1,168,1,168,1,168,1,169,1,169,1,169,1,169,1,169,1,170,1,170,
        1,170,1,170,1,170,1,170,1,170,1,171,1,171,1,171,1,171,1,171,1,171,
        1,171,1,171,1,172,1,172,1,172,1,172,1,172,1,172,1,172,1,173,1,173,
        1,173,1,173,1,173,1,173,1,173,1,173,1,174,1,174,1,174,1,174,1,174,
        1,174,1,174,1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,
        1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,176,1,176,1,176,1,176,
        1,177,1,177,1,177,1,177,1,177,1,178,1,178,1,178,1,178,1,178,1,178,
        1,178,1,179,1,179,1,179,1,179,1,179,1,180,1,180,1,180,1,180,1,180,
        1,180,1,180,1,180,1,180,1,181,1,181,1,181,1,181,1,181,1,182,1,182,
        1,182,1,182,1,182,1,182,1,183,1,183,1,183,1,183,1,183,1,183,1,183,
        1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,
        1,184,1,184,1,184,1,185,1,185,1,185,1,185,1,185,1,185,1,185,1,185,
        1,185,1,185,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,187,1,187,
        1,187,1,187,1,187,1,187,1,187,1,188,1,188,1,188,1,188,1,188,1,188,
        1,188,1,188,1,188,1,188,1,188,1,188,1,188,1,189,1,189,1,189,1,189,
        1,189,1,189,1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,191,1,191,
        1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,192,
        1,192,1,192,1,192,1,192,1,192,1,192,1,192,1,192,1,192,1,192,1,192,
        1,193,1,193,1,193,1,193,1,193,1,194,1,194,1,194,1,195,1,195,1,195,
        1,195,1,195,1,196,1,196,1,196,1,196,1,196,1,196,1,196,1,196,1,196,
        1,197,1,197,1,197,1,197,1,197,1,197,1,197,1,197,1,197,1,198,1,198,
        1,198,1,198,1,198,1,198,1,198,1,198,1,198,1,199,1,199,1,199,1,199,
        1,199,1,199,1,199,1,199,1,200,1,200,1,200,1,200,1,200,1,200,1,200,
        1,200,1,200,1,200,1,201,1,201,1,201,1,201,1,201,1,201,1,202,1,202,
        1,202,1,202,1,202,1,202,1,202,1,203,1,203,1,203,1,203,1,203,1,203,
        1,204,1,204,1,204,1,204,1,205,1,205,1,205,1,205,1,205,1,206,1,206,
        1,206,1,206,1,206,1,206,1,207,1,207,1,207,1,207,1,207,1,207,1,207,
        1,207,1,207,1,207,1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,209,
        1,209,1,209,1,209,1,209,1,209,1,209,1,209,1,210,1,210,1,210,1,210,
        1,211,1,211,1,211,1,211,1,211,1,211,1,212,1,212,1,212,1,212,1,212,
        1,212,1,212,1,213,1,213,1,213,1,213,1,213,1,214,1,214,1,214,1,214,
        1,214,1,214,1,215,1,215,1,215,1,215,1,215,1,216,1,216,1,216,1,216,
        1,216,1,216,1,217,1,217,1,217,1,217,1,217,1,218,1,218,1,218,1,218,
        1,218,1,219,1,219,1,219,1,219,1,219,1,219,1,220,1,220,1,220,1,220,
        1,220,1,220,1,220,1,220,1,220,1,221,1,221,1,221,1,221,1,222,1,222,
        1,222,1,222,1,222,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,
        1,223,1,223,1,223,1,223,1,223,1,224,1,224,1,224,1,224,1,224,1,224,
        1,224,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,
        1,225,1,226,1,226,1,226,1,226,1,226,1,226,1,226,1,226,1,226,1,226,
        1,226,1,227,1,227,1,227,1,227,1,227,1,228,1,228,1,228,1,228,1,228,
        1,228,1,228,1,228,1,228,1,229,1,229,1,229,1,229,1,229,1,229,1,229,
        1,229,1,229,1,229,1,229,1,230,1,230,1,230,1,230,1,230,1,230,1,230,
        1,230,1,230,1,230,1,231,1,231,1,231,1,231,1,231,1,231,1,231,1,231,
        1,231,1,231,1,232,1,232,1,233,1,233,1,233,1,233,3,233,2289,8,233,
        1,234,1,234,1,235,1,235,1,235,1,236,1,236,1,237,1,237,1,237,1,238,
        1,238,1,239,1,239,1,240,1,240,1,241,1,241,1,242,1,242,1,243,1,243,
        1,243,1,244,1,244,1,245,1,245,1,246,1,246,1,247,1,247,1,248,1,248,
        1,249,1,249,1,250,1,250,1,251,1,251,1,252,1,252,1,253,1,253,1,254,
        1,254,1,255,1,255,1,256,1,256,1,256,1,257,1,257,1,257,1,257,5,257,
        2345,8,257,10,257,12,257,2348,9,257,1,257,1,257,1,257,1,257,1,257,
        5,257,2355,8,257,10,257,12,257,2358,9,257,1,257,3,257,2361,8,257,
        1,258,1,258,1,258,1,258,1,258,1,258,1,258,5,258,2370,8,258,10,258,
        12,258,2373,9,258,1,258,1,258,1,259,1,259,1,259,1,259,5,259,2381,
        8,259,10,259,12,259,2384,9,259,1,259,1,259,1,260,4,260,2389,8,260,
        11,260,12,260,2390,1,261,4,261,2394,8,261,11,261,12,261,2395,1,261,
        1,261,5,261,2400,8,261,10,261,12,261,2403,9,261,1,261,1,261,4,261,
        2407,8,261,11,261,12,261,2408,3,261,2411,8,261,1,262,4,262,2414,
        8,262,11,262,12,262,2415,1,262,1,262,5,262,2420,8,262,10,262,12,
        262,2423,9,262,3,262,2425,8,262,1,262,1,262,1,262,1,262,4,262,2431,
        8,262,11,262,12,262,2432,1,262,1,262,3,262,2437,8,262,1,263,1,263,
        3,263,2441,8,263,1,263,1,263,1,263,5,263,2446,8,263,10,263,12,263,
        2449,9,263,1,264,1,264,1,264,1,264,4,264,2455,8,264,11,264,12,264,
        2456,1,265,1,265,1,265,1,265,5,265,2463,8,265,10,265,12,265,2466,
        9,265,1,265,1,265,1,266,1,266,1,266,1,266,5,266,2474,8,266,10,266,
        12,266,2477,9,266,1,266,1,266,1,267,1,267,1,267,1,267,1,267,1,267,
        1,267,1,267,1,267,1,267,1,267,1,267,1,267,1,267,1,267,1,267,1,267,
        1,267,1,267,1,267,1,267,1,267,1,267,1,268,1,268,1,268,1,268,1,268,
        1,268,1,268,1,268,1,268,1,268,1,268,1,268,1,268,1,268,1,268,1,268,
        1,268,1,268,1,268,1,268,1,268,1,268,1,268,1,268,1,268,1,268,1,268,
        1,268,1,269,1,269,1,269,1,269,1,269,1,269,1,269,1,269,1,269,1,269,
        1,269,1,269,1,269,1,269,1,269,1,269,1,269,1,269,1,270,1,270,3,270,
        2552,8,270,1,270,4,270,2555,8,270,11,270,12,270,2556,1,271,1,271,
        1,272,1,272,1,273,1,273,1,273,1,273,5,273,2567,8,273,10,273,12,273,
        2570,9,273,1,273,3,273,2573,8,273,1,273,3,273,2576,8,273,1,273,1,
        273,1,274,1,274,1,274,1,274,5,274,2584,8,274,10,274,12,274,2587,
        9,274,1,274,1,274,1,274,1,274,1,274,1,275,4,275,2595,8,275,11,275,
        12,275,2596,1,275,1,275,1,2585,0,276,1,1,3,2,5,3,7,4,9,5,11,6,13,
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
        267,535,268,537,269,539,270,541,0,543,0,545,0,547,271,549,272,551,
        273,1,0,35,2,0,65,65,97,97,2,0,68,68,100,100,2,0,76,76,108,108,2,
        0,78,78,110,110,2,0,89,89,121,121,2,0,84,84,116,116,2,0,73,73,105,
        105,2,0,67,67,99,99,2,0,69,69,101,101,2,0,82,82,114,114,2,0,83,83,
        115,115,2,0,71,71,103,103,2,0,85,85,117,117,2,0,72,72,104,104,2,
        0,79,79,111,111,2,0,90,90,122,122,2,0,66,66,98,98,2,0,87,87,119,
        119,2,0,75,75,107,107,2,0,80,80,112,112,2,0,70,70,102,102,2,0,88,
        88,120,120,2,0,77,77,109,109,2,0,86,86,118,118,2,0,74,74,106,106,
        2,0,81,81,113,113,1,0,39,39,1,0,34,34,3,0,58,58,64,64,95,95,1,0,
        96,96,2,0,43,43,45,45,1,0,48,57,2,0,65,90,97,122,2,0,10,10,13,13,
        3,0,9,10,13,13,32,32,2633,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,
        7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,
        1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,
        1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,
        1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,
        1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,
        1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,
        1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,
        1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,
        1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,
        1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,0,0,
        107,1,0,0,0,0,109,1,0,0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,115,1,0,
        0,0,0,117,1,0,0,0,0,119,1,0,0,0,0,121,1,0,0,0,0,123,1,0,0,0,0,125,
        1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,0,0,131,1,0,0,0,0,133,1,0,0,0,
        0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,0,0,0,141,1,0,0,0,0,143,1,
        0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,1,0,0,0,0,151,1,0,0,0,0,
        153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,0,159,1,0,0,0,0,161,1,0,
        0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,0,0,169,1,0,0,0,0,171,
        1,0,0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,177,1,0,0,0,0,179,1,0,0,0,
        0,181,1,0,0,0,0,183,1,0,0,0,0,185,1,0,0,0,0,187,1,0,0,0,0,189,1,
        0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,0,195,1,0,0,0,0,197,1,0,0,0,0,
        199,1,0,0,0,0,201,1,0,0,0,0,203,1,0,0,0,0,205,1,0,0,0,0,207,1,0,
        0,0,0,209,1,0,0,0,0,211,1,0,0,0,0,213,1,0,0,0,0,215,1,0,0,0,0,217,
        1,0,0,0,0,219,1,0,0,0,0,221,1,0,0,0,0,223,1,0,0,0,0,225,1,0,0,0,
        0,227,1,0,0,0,0,229,1,0,0,0,0,231,1,0,0,0,0,233,1,0,0,0,0,235,1,
        0,0,0,0,237,1,0,0,0,0,239,1,0,0,0,0,241,1,0,0,0,0,243,1,0,0,0,0,
        245,1,0,0,0,0,247,1,0,0,0,0,249,1,0,0,0,0,251,1,0,0,0,0,253,1,0,
        0,0,0,255,1,0,0,0,0,257,1,0,0,0,0,259,1,0,0,0,0,261,1,0,0,0,0,263,
        1,0,0,0,0,265,1,0,0,0,0,267,1,0,0,0,0,269,1,0,0,0,0,271,1,0,0,0,
        0,273,1,0,0,0,0,275,1,0,0,0,0,277,1,0,0,0,0,279,1,0,0,0,0,281,1,
        0,0,0,0,283,1,0,0,0,0,285,1,0,0,0,0,287,1,0,0,0,0,289,1,0,0,0,0,
        291,1,0,0,0,0,293,1,0,0,0,0,295,1,0,0,0,0,297,1,0,0,0,0,299,1,0,
        0,0,0,301,1,0,0,0,0,303,1,0,0,0,0,305,1,0,0,0,0,307,1,0,0,0,0,309,
        1,0,0,0,0,311,1,0,0,0,0,313,1,0,0,0,0,315,1,0,0,0,0,317,1,0,0,0,
        0,319,1,0,0,0,0,321,1,0,0,0,0,323,1,0,0,0,0,325,1,0,0,0,0,327,1,
        0,0,0,0,329,1,0,0,0,0,331,1,0,0,0,0,333,1,0,0,0,0,335,1,0,0,0,0,
        337,1,0,0,0,0,339,1,0,0,0,0,341,1,0,0,0,0,343,1,0,0,0,0,345,1,0,
        0,0,0,347,1,0,0,0,0,349,1,0,0,0,0,351,1,0,0,0,0,353,1,0,0,0,0,355,
        1,0,0,0,0,357,1,0,0,0,0,359,1,0,0,0,0,361,1,0,0,0,0,363,1,0,0,0,
        0,365,1,0,0,0,0,367,1,0,0,0,0,369,1,0,0,0,0,371,1,0,0,0,0,373,1,
        0,0,0,0,375,1,0,0,0,0,377,1,0,0,0,0,379,1,0,0,0,0,381,1,0,0,0,0,
        383,1,0,0,0,0,385,1,0,0,0,0,387,1,0,0,0,0,389,1,0,0,0,0,391,1,0,
        0,0,0,393,1,0,0,0,0,395,1,0,0,0,0,397,1,0,0,0,0,399,1,0,0,0,0,401,
        1,0,0,0,0,403,1,0,0,0,0,405,1,0,0,0,0,407,1,0,0,0,0,409,1,0,0,0,
        0,411,1,0,0,0,0,413,1,0,0,0,0,415,1,0,0,0,0,417,1,0,0,0,0,419,1,
        0,0,0,0,421,1,0,0,0,0,423,1,0,0,0,0,425,1,0,0,0,0,427,1,0,0,0,0,
        429,1,0,0,0,0,431,1,0,0,0,0,433,1,0,0,0,0,435,1,0,0,0,0,437,1,0,
        0,0,0,439,1,0,0,0,0,441,1,0,0,0,0,443,1,0,0,0,0,445,1,0,0,0,0,447,
        1,0,0,0,0,449,1,0,0,0,0,451,1,0,0,0,0,453,1,0,0,0,0,455,1,0,0,0,
        0,457,1,0,0,0,0,459,1,0,0,0,0,461,1,0,0,0,0,463,1,0,0,0,0,465,1,
        0,0,0,0,467,1,0,0,0,0,469,1,0,0,0,0,471,1,0,0,0,0,473,1,0,0,0,0,
        475,1,0,0,0,0,477,1,0,0,0,0,479,1,0,0,0,0,481,1,0,0,0,0,483,1,0,
        0,0,0,485,1,0,0,0,0,487,1,0,0,0,0,489,1,0,0,0,0,491,1,0,0,0,0,493,
        1,0,0,0,0,495,1,0,0,0,0,497,1,0,0,0,0,499,1,0,0,0,0,501,1,0,0,0,
        0,503,1,0,0,0,0,505,1,0,0,0,0,507,1,0,0,0,0,509,1,0,0,0,0,511,1,
        0,0,0,0,513,1,0,0,0,0,515,1,0,0,0,0,517,1,0,0,0,0,519,1,0,0,0,0,
        521,1,0,0,0,0,523,1,0,0,0,0,525,1,0,0,0,0,527,1,0,0,0,0,529,1,0,
        0,0,0,531,1,0,0,0,0,533,1,0,0,0,0,535,1,0,0,0,0,537,1,0,0,0,0,539,
        1,0,0,0,0,547,1,0,0,0,0,549,1,0,0,0,0,551,1,0,0,0,1,553,1,0,0,0,
        3,557,1,0,0,0,5,561,1,0,0,0,7,570,1,0,0,0,9,576,1,0,0,0,11,580,1,
        0,0,0,13,584,1,0,0,0,15,589,1,0,0,0,17,595,1,0,0,0,19,598,1,0,0,
        0,21,602,1,0,0,0,23,605,1,0,0,0,25,615,1,0,0,0,27,629,1,0,0,0,29,
        639,1,0,0,0,31,647,1,0,0,0,33,658,1,0,0,0,35,670,1,0,0,0,37,681,
        1,0,0,0,39,690,1,0,0,0,41,698,1,0,0,0,43,703,1,0,0,0,45,709,1,0,
        0,0,47,716,1,0,0,0,49,725,1,0,0,0,51,739,1,0,0,0,53,742,1,0,0,0,
        55,750,1,0,0,0,57,755,1,0,0,0,59,760,1,0,0,0,61,767,1,0,0,0,63,774,
        1,0,0,0,65,781,1,0,0,0,67,789,1,0,0,0,69,797,1,0,0,0,71,809,1,0,
        0,0,73,817,1,0,0,0,75,824,1,0,0,0,77,830,1,0,0,0,79,838,1,0,0,0,
        81,851,1,0,0,0,83,864,1,0,0,0,85,877,1,0,0,0,87,895,1,0,0,0,89,908,
        1,0,0,0,91,913,1,0,0,0,93,922,1,0,0,0,95,932,1,0,0,0,97,936,1,0,
        0,0,99,941,1,0,0,0,101,948,1,0,0,0,103,956,1,0,0,0,105,966,1,0,0,
        0,107,974,1,0,0,0,109,981,1,0,0,0,111,986,1,0,0,0,113,995,1,0,0,
        0,115,1004,1,0,0,0,117,1009,1,0,0,0,119,1014,1,0,0,0,121,1023,1,
        0,0,0,123,1027,1,0,0,0,125,1034,1,0,0,0,127,1042,1,0,0,0,129,1049,
        1,0,0,0,131,1059,1,0,0,0,133,1066,1,0,0,0,135,1074,1,0,0,0,137,1082,
        1,0,0,0,139,1091,1,0,0,0,141,1097,1,0,0,0,143,1104,1,0,0,0,145,1115,
        1,0,0,0,147,1121,1,0,0,0,149,1128,1,0,0,0,151,1134,1,0,0,0,153,1146,
        1,0,0,0,155,1156,1,0,0,0,157,1160,1,0,0,0,159,1167,1,0,0,0,161,1177,
        1,0,0,0,163,1185,1,0,0,0,165,1190,1,0,0,0,167,1195,1,0,0,0,169,1204,
        1,0,0,0,171,1214,1,0,0,0,173,1220,1,0,0,0,175,1226,1,0,0,0,177,1235,
        1,0,0,0,179,1240,1,0,0,0,181,1247,1,0,0,0,183,1252,1,0,0,0,185,1258,
        1,0,0,0,187,1261,1,0,0,0,189,1264,1,0,0,0,191,1274,1,0,0,0,193,1286,
        1,0,0,0,195,1292,1,0,0,0,197,1299,1,0,0,0,199,1306,1,0,0,0,201,1316,
        1,0,0,0,203,1325,1,0,0,0,205,1338,1,0,0,0,207,1343,1,0,0,0,209,1351,
        1,0,0,0,211,1359,1,0,0,0,213,1365,1,0,0,0,215,1376,1,0,0,0,217,1379,
        1,0,0,0,219,1384,1,0,0,0,221,1388,1,0,0,0,223,1393,1,0,0,0,225,1398,
        1,0,0,0,227,1406,1,0,0,0,229,1411,1,0,0,0,231,1416,1,0,0,0,233,1422,
        1,0,0,0,235,1428,1,0,0,0,237,1433,1,0,0,0,239,1443,1,0,0,0,241,1458,
        1,0,0,0,243,1467,1,0,0,0,245,1471,1,0,0,0,247,1478,1,0,0,0,249,1486,
        1,0,0,0,251,1492,1,0,0,0,253,1499,1,0,0,0,255,1508,1,0,0,0,257,1512,
        1,0,0,0,259,1516,1,0,0,0,261,1521,1,0,0,0,263,1526,1,0,0,0,265,1536,
        1,0,0,0,267,1540,1,0,0,0,269,1545,1,0,0,0,271,1551,1,0,0,0,273,1558,
        1,0,0,0,275,1561,1,0,0,0,277,1568,1,0,0,0,279,1571,1,0,0,0,281,1577,
        1,0,0,0,283,1588,1,0,0,0,285,1594,1,0,0,0,287,1600,1,0,0,0,289,1605,
        1,0,0,0,291,1615,1,0,0,0,293,1625,1,0,0,0,295,1636,1,0,0,0,297,1644,
        1,0,0,0,299,1653,1,0,0,0,301,1663,1,0,0,0,303,1671,1,0,0,0,305,1683,
        1,0,0,0,307,1694,1,0,0,0,309,1705,1,0,0,0,311,1711,1,0,0,0,313,1719,
        1,0,0,0,315,1726,1,0,0,0,317,1737,1,0,0,0,319,1745,1,0,0,0,321,1754,
        1,0,0,0,323,1762,1,0,0,0,325,1769,1,0,0,0,327,1777,1,0,0,0,329,1784,
        1,0,0,0,331,1790,1,0,0,0,333,1796,1,0,0,0,335,1801,1,0,0,0,337,1807,
        1,0,0,0,339,1811,1,0,0,0,341,1816,1,0,0,0,343,1823,1,0,0,0,345,1831,
        1,0,0,0,347,1838,1,0,0,0,349,1846,1,0,0,0,351,1853,1,0,0,0,353,1869,
        1,0,0,0,355,1873,1,0,0,0,357,1878,1,0,0,0,359,1885,1,0,0,0,361,1890,
        1,0,0,0,363,1899,1,0,0,0,365,1904,1,0,0,0,367,1910,1,0,0,0,369,1917,
        1,0,0,0,371,1931,1,0,0,0,373,1941,1,0,0,0,375,1948,1,0,0,0,377,1955,
        1,0,0,0,379,1968,1,0,0,0,381,1974,1,0,0,0,383,1981,1,0,0,0,385,1993,
        1,0,0,0,387,2005,1,0,0,0,389,2010,1,0,0,0,391,2013,1,0,0,0,393,2018,
        1,0,0,0,395,2027,1,0,0,0,397,2036,1,0,0,0,399,2045,1,0,0,0,401,2053,
        1,0,0,0,403,2063,1,0,0,0,405,2069,1,0,0,0,407,2076,1,0,0,0,409,2082,
        1,0,0,0,411,2086,1,0,0,0,413,2091,1,0,0,0,415,2097,1,0,0,0,417,2107,
        1,0,0,0,419,2114,1,0,0,0,421,2122,1,0,0,0,423,2126,1,0,0,0,425,2132,
        1,0,0,0,427,2139,1,0,0,0,429,2144,1,0,0,0,431,2150,1,0,0,0,433,2155,
        1,0,0,0,435,2161,1,0,0,0,437,2166,1,0,0,0,439,2171,1,0,0,0,441,2177,
        1,0,0,0,443,2186,1,0,0,0,445,2190,1,0,0,0,447,2195,1,0,0,0,449,2208,
        1,0,0,0,451,2215,1,0,0,0,453,2226,1,0,0,0,455,2237,1,0,0,0,457,2242,
        1,0,0,0,459,2251,1,0,0,0,461,2262,1,0,0,0,463,2272,1,0,0,0,465,2282,
        1,0,0,0,467,2288,1,0,0,0,469,2290,1,0,0,0,471,2292,1,0,0,0,473,2295,
        1,0,0,0,475,2297,1,0,0,0,477,2300,1,0,0,0,479,2302,1,0,0,0,481,2304,
        1,0,0,0,483,2306,1,0,0,0,485,2308,1,0,0,0,487,2310,1,0,0,0,489,2313,
        1,0,0,0,491,2315,1,0,0,0,493,2317,1,0,0,0,495,2319,1,0,0,0,497,2321,
        1,0,0,0,499,2323,1,0,0,0,501,2325,1,0,0,0,503,2327,1,0,0,0,505,2329,
        1,0,0,0,507,2331,1,0,0,0,509,2333,1,0,0,0,511,2335,1,0,0,0,513,2337,
        1,0,0,0,515,2360,1,0,0,0,517,2362,1,0,0,0,519,2376,1,0,0,0,521,2388,
        1,0,0,0,523,2410,1,0,0,0,525,2436,1,0,0,0,527,2440,1,0,0,0,529,2450,
        1,0,0,0,531,2458,1,0,0,0,533,2469,1,0,0,0,535,2480,1,0,0,0,537,2503,
        1,0,0,0,539,2531,1,0,0,0,541,2549,1,0,0,0,543,2558,1,0,0,0,545,2560,
        1,0,0,0,547,2562,1,0,0,0,549,2579,1,0,0,0,551,2594,1,0,0,0,553,554,
        7,0,0,0,554,555,7,1,0,0,555,556,7,1,0,0,556,2,1,0,0,0,557,558,7,
        0,0,0,558,559,7,2,0,0,559,560,7,2,0,0,560,4,1,0,0,0,561,562,7,0,
        0,0,562,563,7,3,0,0,563,564,7,0,0,0,564,565,7,2,0,0,565,566,7,4,
        0,0,566,567,7,5,0,0,567,568,7,6,0,0,568,569,7,7,0,0,569,6,1,0,0,
        0,570,571,7,0,0,0,571,572,7,2,0,0,572,573,7,5,0,0,573,574,7,8,0,
        0,574,575,7,9,0,0,575,8,1,0,0,0,576,577,7,0,0,0,577,578,7,3,0,0,
        578,579,7,1,0,0,579,10,1,0,0,0,580,581,7,0,0,0,581,582,7,3,0,0,582,
        583,7,4,0,0,583,12,1,0,0,0,584,585,7,0,0,0,585,586,7,3,0,0,586,587,
        7,5,0,0,587,588,7,6,0,0,588,14,1,0,0,0,589,590,7,0,0,0,590,591,7,
        9,0,0,591,592,7,9,0,0,592,593,7,0,0,0,593,594,7,4,0,0,594,16,1,0,
        0,0,595,596,7,0,0,0,596,597,7,10,0,0,597,18,1,0,0,0,598,599,7,0,
        0,0,599,600,7,10,0,0,600,601,7,7,0,0,601,20,1,0,0,0,602,603,7,0,
        0,0,603,604,7,5,0,0,604,22,1,0,0,0,605,606,7,0,0,0,606,607,7,11,
        0,0,607,608,7,11,0,0,608,609,7,9,0,0,609,610,7,8,0,0,610,611,7,11,
        0,0,611,612,7,0,0,0,612,613,7,5,0,0,613,614,7,8,0,0,614,24,1,0,0,
        0,615,616,7,0,0,0,616,617,7,12,0,0,617,618,7,5,0,0,618,619,7,13,
        0,0,619,620,7,14,0,0,620,621,7,9,0,0,621,622,7,6,0,0,622,623,7,15,
        0,0,623,624,7,0,0,0,624,625,7,5,0,0,625,626,7,6,0,0,626,627,7,14,
        0,0,627,628,7,3,0,0,628,26,1,0,0,0,629,630,7,16,0,0,630,631,7,8,
        0,0,631,632,7,9,0,0,632,633,7,3,0,0,633,634,7,14,0,0,634,635,7,12,
        0,0,635,636,7,2,0,0,636,637,7,2,0,0,637,638,7,6,0,0,638,28,1,0,0,
        0,639,640,7,16,0,0,640,641,7,8,0,0,641,642,7,5,0,0,642,643,7,17,
        0,0,643,644,7,8,0,0,644,645,7,8,0,0,645,646,7,3,0,0,646,30,1,0,0,
        0,647,648,7,16,0,0,648,649,7,2,0,0,649,650,7,14,0,0,650,651,7,7,
        0,0,651,652,7,18,0,0,652,653,5,95,0,0,653,654,7,10,0,0,654,655,7,
        6,0,0,655,656,7,15,0,0,656,657,7,8,0,0,657,32,1,0,0,0,658,659,7,
        19,0,0,659,660,7,0,0,0,660,661,7,9,0,0,661,662,7,5,0,0,662,663,7,
        6,0,0,663,664,7,5,0,0,664,665,7,6,0,0,665,666,7,14,0,0,666,667,7,
        3,0,0,667,668,7,8,0,0,668,669,7,1,0,0,669,34,1,0,0,0,670,671,7,19,
        0,0,671,672,7,9,0,0,672,673,7,8,0,0,673,674,7,19,0,0,674,675,7,0,
        0,0,675,676,7,9,0,0,676,677,7,8,0,0,677,678,5,95,0,0,678,679,7,20,
        0,0,679,680,7,3,0,0,680,36,1,0,0,0,681,682,7,8,0,0,682,683,7,21,
        0,0,683,684,7,5,0,0,684,685,7,8,0,0,685,686,7,9,0,0,686,687,7,3,
        0,0,687,688,7,0,0,0,688,689,7,2,0,0,689,38,1,0,0,0,690,691,7,7,0,
        0,691,692,7,2,0,0,692,693,7,14,0,0,693,694,7,10,0,0,694,695,7,8,
        0,0,695,696,7,20,0,0,696,697,7,3,0,0,697,40,1,0,0,0,698,699,7,10,
        0,0,699,700,7,14,0,0,700,701,7,9,0,0,701,702,7,5,0,0,702,42,1,0,
        0,0,703,704,7,19,0,0,704,705,7,12,0,0,705,706,7,9,0,0,706,707,7,
        11,0,0,707,708,7,8,0,0,708,44,1,0,0,0,709,710,7,10,0,0,710,711,7,
        5,0,0,711,712,7,14,0,0,712,713,7,9,0,0,713,714,7,8,0,0,714,715,7,
        1,0,0,715,46,1,0,0,0,716,717,7,2,0,0,717,718,7,14,0,0,718,719,7,
        7,0,0,719,720,7,0,0,0,720,721,7,5,0,0,721,722,7,6,0,0,722,723,7,
        14,0,0,723,724,7,3,0,0,724,48,1,0,0,0,725,726,7,5,0,0,726,727,7,
        16,0,0,727,728,7,2,0,0,728,729,7,19,0,0,729,730,7,9,0,0,730,731,
        7,14,0,0,731,732,7,19,0,0,732,733,7,8,0,0,733,734,7,9,0,0,734,735,
        7,5,0,0,735,736,7,6,0,0,736,737,7,8,0,0,737,738,7,10,0,0,738,50,
        1,0,0,0,739,740,7,16,0,0,740,741,7,4,0,0,741,52,1,0,0,0,742,743,
        7,7,0,0,743,744,7,0,0,0,744,745,7,10,0,0,745,746,7,7,0,0,746,747,
        7,0,0,0,747,748,7,1,0,0,748,749,7,8,0,0,749,54,1,0,0,0,750,751,7,
        7,0,0,751,752,7,0,0,0,752,753,7,10,0,0,753,754,7,8,0,0,754,56,1,
        0,0,0,755,756,7,7,0,0,756,757,7,0,0,0,757,758,7,10,0,0,758,759,7,
        5,0,0,759,58,1,0,0,0,760,761,7,7,0,0,761,762,7,0,0,0,762,763,7,7,
        0,0,763,764,7,13,0,0,764,765,7,8,0,0,765,766,7,1,0,0,766,60,1,0,
        0,0,767,768,7,7,0,0,768,769,7,13,0,0,769,770,7,0,0,0,770,771,7,3,
        0,0,771,772,7,11,0,0,772,773,7,8,0,0,773,62,1,0,0,0,774,775,7,7,
        0,0,775,776,7,14,0,0,776,777,7,2,0,0,777,778,7,12,0,0,778,779,7,
        22,0,0,779,780,7,3,0,0,780,64,1,0,0,0,781,782,7,7,0,0,782,783,7,
        14,0,0,783,784,7,2,0,0,784,785,7,12,0,0,785,786,7,22,0,0,786,787,
        7,3,0,0,787,788,7,10,0,0,788,66,1,0,0,0,789,790,7,7,0,0,790,791,
        7,14,0,0,791,792,7,22,0,0,792,793,7,22,0,0,793,794,7,8,0,0,794,795,
        7,3,0,0,795,796,7,5,0,0,796,68,1,0,0,0,797,798,7,7,0,0,798,799,7,
        14,0,0,799,800,7,22,0,0,800,801,7,19,0,0,801,802,7,9,0,0,802,803,
        7,8,0,0,803,804,7,10,0,0,804,805,7,10,0,0,805,806,7,6,0,0,806,807,
        7,14,0,0,807,808,7,3,0,0,808,70,1,0,0,0,809,810,7,7,0,0,810,811,
        7,14,0,0,811,812,7,22,0,0,812,813,7,19,0,0,813,814,7,12,0,0,814,
        815,7,5,0,0,815,816,7,8,0,0,816,72,1,0,0,0,817,818,7,7,0,0,818,819,
        7,9,0,0,819,820,7,8,0,0,820,821,7,0,0,0,821,822,7,5,0,0,822,823,
        7,8,0,0,823,74,1,0,0,0,824,825,7,7,0,0,825,826,7,9,0,0,826,827,7,
        14,0,0,827,828,7,10,0,0,828,829,7,10,0,0,829,76,1,0,0,0,830,831,
        7,7,0,0,831,832,7,12,0,0,832,833,7,9,0,0,833,834,7,9,0,0,834,835,
        7,8,0,0,835,836,7,3,0,0,836,837,7,5,0,0,837,78,1,0,0,0,838,839,7,
        7,0,0,839,840,7,12,0,0,840,841,7,9,0,0,841,842,7,9,0,0,842,843,7,
        8,0,0,843,844,7,3,0,0,844,845,7,5,0,0,845,846,5,95,0,0,846,847,7,
        1,0,0,847,848,7,0,0,0,848,849,7,5,0,0,849,850,7,8,0,0,850,80,1,0,
        0,0,851,852,7,7,0,0,852,853,7,12,0,0,853,854,7,9,0,0,854,855,7,9,
        0,0,855,856,7,8,0,0,856,857,7,3,0,0,857,858,7,5,0,0,858,859,5,95,
        0,0,859,860,7,19,0,0,860,861,7,0,0,0,861,862,7,5,0,0,862,863,7,13,
        0,0,863,82,1,0,0,0,864,865,7,7,0,0,865,866,7,12,0,0,866,867,7,9,
        0,0,867,868,7,9,0,0,868,869,7,8,0,0,869,870,7,3,0,0,870,871,7,5,
        0,0,871,872,5,95,0,0,872,873,7,5,0,0,873,874,7,6,0,0,874,875,7,22,
        0,0,875,876,7,8,0,0,876,84,1,0,0,0,877,878,7,7,0,0,878,879,7,12,
        0,0,879,880,7,9,0,0,880,881,7,9,0,0,881,882,7,8,0,0,882,883,7,3,
        0,0,883,884,7,5,0,0,884,885,5,95,0,0,885,886,7,5,0,0,886,887,7,6,
        0,0,887,888,7,22,0,0,888,889,7,8,0,0,889,890,7,10,0,0,890,891,7,
        5,0,0,891,892,7,0,0,0,892,893,7,22,0,0,893,894,7,19,0,0,894,86,1,
        0,0,0,895,896,7,7,0,0,896,897,7,12,0,0,897,898,7,9,0,0,898,899,7,
        9,0,0,899,900,7,8,0,0,900,901,7,3,0,0,901,902,7,5,0,0,902,903,5,
        95,0,0,903,904,7,12,0,0,904,905,7,10,0,0,905,906,7,8,0,0,906,907,
        7,9,0,0,907,88,1,0,0,0,908,909,7,1,0,0,909,910,7,0,0,0,910,911,7,
        5,0,0,911,912,7,0,0,0,912,90,1,0,0,0,913,914,7,1,0,0,914,915,7,0,
        0,0,915,916,7,5,0,0,916,917,7,0,0,0,917,918,7,16,0,0,918,919,7,0,
        0,0,919,920,7,10,0,0,920,921,7,8,0,0,921,92,1,0,0,0,922,923,7,1,
        0,0,923,924,7,0,0,0,924,925,7,5,0,0,925,926,7,0,0,0,926,927,7,16,
        0,0,927,928,7,0,0,0,928,929,7,10,0,0,929,930,7,8,0,0,930,931,7,10,
        0,0,931,94,1,0,0,0,932,933,7,1,0,0,933,934,7,0,0,0,934,935,7,4,0,
        0,935,96,1,0,0,0,936,937,7,1,0,0,937,938,7,0,0,0,938,939,7,4,0,0,
        939,940,7,10,0,0,940,98,1,0,0,0,941,942,7,1,0,0,942,943,7,8,0,0,
        943,944,7,2,0,0,944,945,7,8,0,0,945,946,7,5,0,0,946,947,7,8,0,0,
        947,100,1,0,0,0,948,949,7,1,0,0,949,950,7,8,0,0,950,951,7,20,0,0,
        951,952,7,0,0,0,952,953,7,12,0,0,953,954,7,2,0,0,954,955,7,5,0,0,
        955,102,1,0,0,0,956,957,7,1,0,0,957,958,7,8,0,0,958,959,7,2,0,0,
        959,960,7,6,0,0,960,961,7,22,0,0,961,962,7,6,0,0,962,963,7,5,0,0,
        963,964,7,8,0,0,964,965,7,1,0,0,965,104,1,0,0,0,966,967,7,1,0,0,
        967,968,7,6,0,0,968,969,7,10,0,0,969,970,7,0,0,0,970,971,7,16,0,
        0,971,972,7,2,0,0,972,973,7,8,0,0,973,106,1,0,0,0,974,975,7,12,0,
        0,975,976,7,19,0,0,976,977,7,1,0,0,977,978,7,0,0,0,978,979,7,5,0,
        0,979,980,7,8,0,0,980,108,1,0,0,0,981,982,7,1,0,0,982,983,7,8,0,
        0,983,984,7,10,0,0,984,985,7,7,0,0,985,110,1,0,0,0,986,987,7,1,0,
        0,987,988,7,8,0,0,988,989,7,10,0,0,989,990,7,7,0,0,990,991,7,9,0,
        0,991,992,7,6,0,0,992,993,7,16,0,0,993,994,7,8,0,0,994,112,1,0,0,
        0,995,996,7,1,0,0,996,997,7,6,0,0,997,998,7,10,0,0,998,999,7,5,0,
        0,999,1000,7,6,0,0,1000,1001,7,3,0,0,1001,1002,7,7,0,0,1002,1003,
        7,5,0,0,1003,114,1,0,0,0,1004,1005,7,1,0,0,1005,1006,7,9,0,0,1006,
        1007,7,14,0,0,1007,1008,7,19,0,0,1008,116,1,0,0,0,1009,1010,7,8,
        0,0,1010,1011,7,2,0,0,1011,1012,7,10,0,0,1012,1013,7,8,0,0,1013,
        118,1,0,0,0,1014,1015,7,8,0,0,1015,1016,7,3,0,0,1016,1017,7,7,0,
        0,1017,1018,7,14,0,0,1018,1019,7,1,0,0,1019,1020,7,6,0,0,1020,1021,
        7,3,0,0,1021,1022,7,11,0,0,1022,120,1,0,0,0,1023,1024,7,8,0,0,1024,
        1025,7,3,0,0,1025,1026,7,1,0,0,1026,122,1,0,0,0,1027,1028,7,8,0,
        0,1028,1029,7,10,0,0,1029,1030,7,7,0,0,1030,1031,7,0,0,0,1031,1032,
        7,19,0,0,1032,1033,7,8,0,0,1033,124,1,0,0,0,1034,1035,7,8,0,0,1035,
        1036,7,10,0,0,1036,1037,7,7,0,0,1037,1038,7,0,0,0,1038,1039,7,19,
        0,0,1039,1040,7,8,0,0,1040,1041,7,1,0,0,1041,126,1,0,0,0,1042,1043,
        7,8,0,0,1043,1044,7,21,0,0,1044,1045,7,7,0,0,1045,1046,7,8,0,0,1046,
        1047,7,19,0,0,1047,1048,7,5,0,0,1048,128,1,0,0,0,1049,1050,7,8,0,
        0,1050,1051,7,21,0,0,1051,1052,7,7,0,0,1052,1053,7,2,0,0,1053,1054,
        7,12,0,0,1054,1055,7,1,0,0,1055,1056,7,6,0,0,1056,1057,7,3,0,0,1057,
        1058,7,11,0,0,1058,130,1,0,0,0,1059,1060,7,8,0,0,1060,1061,7,21,
        0,0,1061,1062,7,6,0,0,1062,1063,7,10,0,0,1063,1064,7,5,0,0,1064,
        1065,7,10,0,0,1065,132,1,0,0,0,1066,1067,7,8,0,0,1067,1068,7,21,
        0,0,1068,1069,7,19,0,0,1069,1070,7,2,0,0,1070,1071,7,0,0,0,1071,
        1072,7,6,0,0,1072,1073,7,3,0,0,1073,134,1,0,0,0,1074,1075,7,8,0,
        0,1075,1076,7,21,0,0,1076,1077,7,5,0,0,1077,1078,7,9,0,0,1078,1079,
        7,0,0,0,1079,1080,7,7,0,0,1080,1081,7,5,0,0,1081,136,1,0,0,0,1082,
        1083,7,8,0,0,1083,1084,7,21,0,0,1084,1085,7,5,0,0,1085,1086,7,8,
        0,0,1086,1087,7,3,0,0,1087,1088,7,1,0,0,1088,1089,7,8,0,0,1089,1090,
        7,1,0,0,1090,138,1,0,0,0,1091,1092,7,20,0,0,1092,1093,7,0,0,0,1093,
        1094,7,2,0,0,1094,1095,7,10,0,0,1095,1096,7,8,0,0,1096,140,1,0,0,
        0,1097,1098,7,20,0,0,1098,1099,7,6,0,0,1099,1100,7,8,0,0,1100,1101,
        7,2,0,0,1101,1102,7,1,0,0,1102,1103,7,10,0,0,1103,142,1,0,0,0,1104,
        1105,7,20,0,0,1105,1106,7,6,0,0,1106,1107,7,2,0,0,1107,1108,7,8,
        0,0,1108,1109,7,20,0,0,1109,1110,7,14,0,0,1110,1111,7,9,0,0,1111,
        1112,7,22,0,0,1112,1113,7,0,0,0,1113,1114,7,5,0,0,1114,144,1,0,0,
        0,1115,1116,7,20,0,0,1116,1117,7,6,0,0,1117,1118,7,2,0,0,1118,1119,
        7,8,0,0,1119,1120,7,10,0,0,1120,146,1,0,0,0,1121,1122,7,20,0,0,1122,
        1123,7,6,0,0,1123,1124,7,2,0,0,1124,1125,7,5,0,0,1125,1126,7,8,0,
        0,1126,1127,7,9,0,0,1127,148,1,0,0,0,1128,1129,7,20,0,0,1129,1130,
        7,6,0,0,1130,1131,7,9,0,0,1131,1132,7,10,0,0,1132,1133,7,5,0,0,1133,
        150,1,0,0,0,1134,1135,7,20,0,0,1135,1136,7,6,0,0,1136,1137,7,3,0,
        0,1137,1138,7,0,0,0,1138,1139,7,2,0,0,1139,1140,7,6,0,0,1140,1141,
        7,15,0,0,1141,1142,7,8,0,0,1142,1143,5,95,0,0,1143,1144,7,20,0,0,
        1144,1145,7,3,0,0,1145,152,1,0,0,0,1146,1147,7,20,0,0,1147,1148,
        7,14,0,0,1148,1149,7,2,0,0,1149,1150,7,2,0,0,1150,1151,7,14,0,0,
        1151,1152,7,17,0,0,1152,1153,7,6,0,0,1153,1154,7,3,0,0,1154,1155,
        7,11,0,0,1155,154,1,0,0,0,1156,1157,7,20,0,0,1157,1158,7,14,0,0,
        1158,1159,7,9,0,0,1159,156,1,0,0,0,1160,1161,7,20,0,0,1161,1162,
        7,14,0,0,1162,1163,7,9,0,0,1163,1164,7,22,0,0,1164,1165,7,0,0,0,
        1165,1166,7,5,0,0,1166,158,1,0,0,0,1167,1168,7,20,0,0,1168,1169,
        7,14,0,0,1169,1170,7,9,0,0,1170,1171,7,22,0,0,1171,1172,7,0,0,0,
        1172,1173,7,5,0,0,1173,1174,7,5,0,0,1174,1175,7,8,0,0,1175,1176,
        7,1,0,0,1176,160,1,0,0,0,1177,1178,7,20,0,0,1178,1179,7,14,0,0,1179,
        1180,7,9,0,0,1180,1181,7,8,0,0,1181,1182,7,6,0,0,1182,1183,7,11,
        0,0,1183,1184,7,3,0,0,1184,162,1,0,0,0,1185,1186,7,20,0,0,1186,1187,
        7,9,0,0,1187,1188,7,14,0,0,1188,1189,7,22,0,0,1189,164,1,0,0,0,1190,
        1191,7,20,0,0,1191,1192,7,12,0,0,1192,1193,7,2,0,0,1193,1194,7,2,
        0,0,1194,166,1,0,0,0,1195,1196,7,20,0,0,1196,1197,7,12,0,0,1197,
        1198,7,3,0,0,1198,1199,7,7,0,0,1199,1200,7,5,0,0,1200,1201,7,6,0,
        0,1201,1202,7,14,0,0,1202,1203,7,3,0,0,1203,168,1,0,0,0,1204,1205,
        7,20,0,0,1205,1206,7,12,0,0,1206,1207,7,3,0,0,1207,1208,7,7,0,0,
        1208,1209,7,5,0,0,1209,1210,7,6,0,0,1210,1211,7,14,0,0,1211,1212,
        7,3,0,0,1212,1213,7,10,0,0,1213,170,1,0,0,0,1214,1215,7,11,0,0,1215,
        1216,7,9,0,0,1216,1217,7,0,0,0,1217,1218,7,3,0,0,1218,1219,7,5,0,
        0,1219,172,1,0,0,0,1220,1221,7,11,0,0,1221,1222,7,9,0,0,1222,1223,
        7,14,0,0,1223,1224,7,12,0,0,1224,1225,7,19,0,0,1225,174,1,0,0,0,
        1226,1227,7,11,0,0,1227,1228,7,9,0,0,1228,1229,7,14,0,0,1229,1230,
        7,12,0,0,1230,1231,7,19,0,0,1231,1232,7,6,0,0,1232,1233,7,3,0,0,
        1233,1234,7,11,0,0,1234,176,1,0,0,0,1235,1236,7,13,0,0,1236,1237,
        7,0,0,0,1237,1238,7,10,0,0,1238,1239,7,13,0,0,1239,178,1,0,0,0,1240,
        1241,7,13,0,0,1241,1242,7,0,0,0,1242,1243,7,23,0,0,1243,1244,7,6,
        0,0,1244,1245,7,3,0,0,1245,1246,7,11,0,0,1246,180,1,0,0,0,1247,1248,
        7,13,0,0,1248,1249,7,14,0,0,1249,1250,7,12,0,0,1250,1251,7,9,0,0,
        1251,182,1,0,0,0,1252,1253,7,13,0,0,1253,1254,7,14,0,0,1254,1255,
        7,12,0,0,1255,1256,7,9,0,0,1256,1257,7,10,0,0,1257,184,1,0,0,0,1258,
        1259,7,6,0,0,1259,1260,7,20,0,0,1260,186,1,0,0,0,1261,1262,7,6,0,
        0,1262,1263,7,3,0,0,1263,188,1,0,0,0,1264,1265,7,6,0,0,1265,1266,
        7,3,0,0,1266,1267,7,7,0,0,1267,1268,7,2,0,0,1268,1269,7,12,0,0,1269,
        1270,7,1,0,0,1270,1271,7,6,0,0,1271,1272,7,3,0,0,1272,1273,7,11,
        0,0,1273,190,1,0,0,0,1274,1275,7,6,0,0,1275,1276,7,3,0,0,1276,1277,
        7,7,0,0,1277,1278,7,9,0,0,1278,1279,7,8,0,0,1279,1280,7,22,0,0,1280,
        1281,7,8,0,0,1281,1282,7,3,0,0,1282,1283,7,5,0,0,1283,1284,7,0,0,
        0,1284,1285,7,2,0,0,1285,192,1,0,0,0,1286,1287,7,6,0,0,1287,1288,
        7,3,0,0,1288,1289,7,3,0,0,1289,1290,7,8,0,0,1290,1291,7,9,0,0,1291,
        194,1,0,0,0,1292,1293,7,6,0,0,1293,1294,7,3,0,0,1294,1295,7,19,0,
        0,1295,1296,7,0,0,0,1296,1297,7,5,0,0,1297,1298,7,13,0,0,1298,196,
        1,0,0,0,1299,1300,7,6,0,0,1300,1301,7,3,0,0,1301,1302,7,10,0,0,1302,
        1303,7,8,0,0,1303,1304,7,9,0,0,1304,1305,7,5,0,0,1305,198,1,0,0,
        0,1306,1307,7,6,0,0,1307,1308,7,3,0,0,1308,1309,7,5,0,0,1309,1310,
        7,8,0,0,1310,1311,7,9,0,0,1311,1312,7,10,0,0,1312,1313,7,8,0,0,1313,
        1314,7,7,0,0,1314,1315,7,5,0,0,1315,200,1,0,0,0,1316,1317,7,6,0,
        0,1317,1318,7,3,0,0,1318,1319,7,5,0,0,1319,1320,7,8,0,0,1320,1321,
        7,9,0,0,1321,1322,7,23,0,0,1322,1323,7,0,0,0,1323,1324,7,2,0,0,1324,
        202,1,0,0,0,1325,1326,7,6,0,0,1326,1327,7,3,0,0,1327,1328,7,5,0,
        0,1328,1329,7,8,0,0,1329,1330,7,9,0,0,1330,1331,7,22,0,0,1331,1332,
        7,8,0,0,1332,1333,7,1,0,0,1333,1334,7,6,0,0,1334,1335,7,0,0,0,1335,
        1336,7,5,0,0,1336,1337,7,8,0,0,1337,204,1,0,0,0,1338,1339,7,6,0,
        0,1339,1340,7,3,0,0,1340,1341,7,5,0,0,1341,1342,7,14,0,0,1342,206,
        1,0,0,0,1343,1344,7,6,0,0,1344,1345,7,3,0,0,1345,1346,7,6,0,0,1346,
        1347,7,5,0,0,1347,1348,5,95,0,0,1348,1349,7,20,0,0,1349,1350,7,3,
        0,0,1350,208,1,0,0,0,1351,1352,7,6,0,0,1352,1353,7,9,0,0,1353,1354,
        7,8,0,0,1354,1355,7,11,0,0,1355,1356,7,8,0,0,1356,1357,7,21,0,0,
        1357,1358,7,19,0,0,1358,210,1,0,0,0,1359,1360,7,6,0,0,1360,1361,
        7,2,0,0,1361,1362,7,6,0,0,1362,1363,7,18,0,0,1363,1364,7,8,0,0,1364,
        212,1,0,0,0,1365,1366,7,6,0,0,1366,1367,7,3,0,0,1367,1368,7,23,0,
        0,1368,1369,7,0,0,0,1369,1370,7,2,0,0,1370,1371,7,6,0,0,1371,1372,
        7,1,0,0,1372,1373,7,0,0,0,1373,1374,7,5,0,0,1374,1375,7,8,0,0,1375,
        214,1,0,0,0,1376,1377,7,6,0,0,1377,1378,7,10,0,0,1378,216,1,0,0,
        0,1379,1380,7,24,0,0,1380,1381,7,14,0,0,1381,1382,7,6,0,0,1382,1383,
        7,3,0,0,1383,218,1,0,0,0,1384,1385,7,18,0,0,1385,1386,7,8,0,0,1386,
        1387,7,4,0,0,1387,220,1,0,0,0,1388,1389,7,18,0,0,1389,1390,7,12,
        0,0,1390,1391,7,1,0,0,1391,1392,7,12,0,0,1392,222,1,0,0,0,1393,1394,
        7,2,0,0,1394,1395,7,0,0,0,1395,1396,7,10,0,0,1396,1397,7,5,0,0,1397,
        224,1,0,0,0,1398,1399,7,2,0,0,1399,1400,7,0,0,0,1400,1401,7,5,0,
        0,1401,1402,7,8,0,0,1402,1403,7,9,0,0,1403,1404,7,0,0,0,1404,1405,
        7,2,0,0,1405,226,1,0,0,0,1406,1407,7,2,0,0,1407,1408,7,8,0,0,1408,
        1409,7,20,0,0,1409,1410,7,5,0,0,1410,228,1,0,0,0,1411,1412,7,2,0,
        0,1412,1413,7,6,0,0,1413,1414,7,18,0,0,1414,1415,7,8,0,0,1415,230,
        1,0,0,0,1416,1417,7,2,0,0,1417,1418,7,6,0,0,1418,1419,7,22,0,0,1419,
        1420,7,6,0,0,1420,1421,7,5,0,0,1421,232,1,0,0,0,1422,1423,7,2,0,
        0,1423,1424,7,6,0,0,1424,1425,7,3,0,0,1425,1426,7,8,0,0,1426,1427,
        7,10,0,0,1427,234,1,0,0,0,1428,1429,7,2,0,0,1429,1430,7,14,0,0,1430,
        1431,7,0,0,0,1431,1432,7,1,0,0,1432,236,1,0,0,0,1433,1434,7,2,0,
        0,1434,1435,7,14,0,0,1435,1436,7,7,0,0,1436,1437,7,0,0,0,1437,1438,
        7,2,0,0,1438,1439,7,5,0,0,1439,1440,7,6,0,0,1440,1441,7,22,0,0,1441,
        1442,7,8,0,0,1442,238,1,0,0,0,1443,1444,7,2,0,0,1444,1445,7,14,0,
        0,1445,1446,7,7,0,0,1446,1447,7,0,0,0,1447,1448,7,2,0,0,1448,1449,
        7,5,0,0,1449,1450,7,6,0,0,1450,1451,7,22,0,0,1451,1452,7,8,0,0,1452,
        1453,7,10,0,0,1453,1454,7,5,0,0,1454,1455,7,0,0,0,1455,1456,7,22,
        0,0,1456,1457,7,19,0,0,1457,240,1,0,0,0,1458,1459,7,22,0,0,1459,
        1460,7,8,0,0,1460,1461,7,5,0,0,1461,1462,7,0,0,0,1462,1463,7,1,0,
        0,1463,1464,7,0,0,0,1464,1465,7,5,0,0,1465,1466,7,0,0,0,1466,242,
        1,0,0,0,1467,1468,7,22,0,0,1468,1469,7,0,0,0,1469,1470,7,19,0,0,
        1470,244,1,0,0,0,1471,1472,7,22,0,0,1472,1473,7,6,0,0,1473,1474,
        7,3,0,0,1474,1475,7,12,0,0,1475,1476,7,5,0,0,1476,1477,7,8,0,0,1477,
        246,1,0,0,0,1478,1479,7,22,0,0,1479,1480,7,6,0,0,1480,1481,7,3,0,
        0,1481,1482,7,12,0,0,1482,1483,7,5,0,0,1483,1484,7,8,0,0,1484,1485,
        7,10,0,0,1485,248,1,0,0,0,1486,1487,7,22,0,0,1487,1488,7,14,0,0,
        1488,1489,7,3,0,0,1489,1490,7,5,0,0,1490,1491,7,13,0,0,1491,250,
        1,0,0,0,1492,1493,7,22,0,0,1493,1494,7,14,0,0,1494,1495,7,3,0,0,
        1495,1496,7,5,0,0,1496,1497,7,13,0,0,1497,1498,7,10,0,0,1498,252,
        1,0,0,0,1499,1500,7,22,0,0,1500,1501,7,8,0,0,1501,1502,7,9,0,0,1502,
        1503,7,11,0,0,1503,1504,7,8,0,0,1504,1505,5,95,0,0,1505,1506,7,20,
        0,0,1506,1507,7,3,0,0,1507,254,1,0,0,0,1508,1509,7,3,0,0,1509,1510,
        7,20,0,0,1510,1511,7,7,0,0,1511,256,1,0,0,0,1512,1513,7,3,0,0,1513,
        1514,7,20,0,0,1514,1515,7,1,0,0,1515,258,1,0,0,0,1516,1517,7,3,0,
        0,1517,1518,7,20,0,0,1518,1519,7,18,0,0,1519,1520,7,7,0,0,1520,260,
        1,0,0,0,1521,1522,7,3,0,0,1522,1523,7,20,0,0,1523,1524,7,18,0,0,
        1524,1525,7,1,0,0,1525,262,1,0,0,0,1526,1527,7,3,0,0,1527,1528,7,
        14,0,0,1528,1529,7,9,0,0,1529,1530,7,22,0,0,1530,1531,7,0,0,0,1531,
        1532,7,2,0,0,1532,1533,7,6,0,0,1533,1534,7,15,0,0,1534,1535,7,8,
        0,0,1535,264,1,0,0,0,1536,1537,7,3,0,0,1537,1538,7,14,0,0,1538,1539,
        7,5,0,0,1539,266,1,0,0,0,1540,1541,7,3,0,0,1541,1542,7,12,0,0,1542,
        1543,7,2,0,0,1543,1544,7,2,0,0,1544,268,1,0,0,0,1545,1546,7,3,0,
        0,1546,1547,7,12,0,0,1547,1548,7,2,0,0,1548,1549,7,2,0,0,1549,1550,
        7,10,0,0,1550,270,1,0,0,0,1551,1552,7,14,0,0,1552,1553,7,20,0,0,
        1553,1554,7,20,0,0,1554,1555,7,10,0,0,1555,1556,7,8,0,0,1556,1557,
        7,5,0,0,1557,272,1,0,0,0,1558,1559,7,14,0,0,1559,1560,7,3,0,0,1560,
        274,1,0,0,0,1561,1562,7,14,0,0,1562,1563,7,19,0,0,1563,1564,7,5,
        0,0,1564,1565,7,6,0,0,1565,1566,7,14,0,0,1566,1567,7,3,0,0,1567,
        276,1,0,0,0,1568,1569,7,14,0,0,1569,1570,7,9,0,0,1570,278,1,0,0,
        0,1571,1572,7,14,0,0,1572,1573,7,9,0,0,1573,1574,7,1,0,0,1574,1575,
        7,8,0,0,1575,1576,7,9,0,0,1576,280,1,0,0,0,1577,1578,7,14,0,0,1578,
        1579,7,9,0,0,1579,1580,7,1,0,0,1580,1581,7,6,0,0,1581,1582,7,3,0,
        0,1582,1583,7,0,0,0,1583,1584,7,2,0,0,1584,1585,7,6,0,0,1585,1586,
        7,5,0,0,1586,1587,7,4,0,0,1587,282,1,0,0,0,1588,1589,7,14,0,0,1589,
        1590,7,12,0,0,1590,1591,7,5,0,0,1591,1592,7,8,0,0,1592,1593,7,9,
        0,0,1593,284,1,0,0,0,1594,1595,7,14,0,0,1595,1596,7,17,0,0,1596,
        1597,7,3,0,0,1597,1598,7,8,0,0,1598,1599,7,9,0,0,1599,286,1,0,0,
        0,1600,1601,7,14,0,0,1601,1602,7,23,0,0,1602,1603,7,8,0,0,1603,1604,
        7,9,0,0,1604,288,1,0,0,0,1605,1606,7,14,0,0,1606,1607,7,23,0,0,1607,
        1608,7,8,0,0,1608,1609,7,9,0,0,1609,1610,7,17,0,0,1610,1611,7,9,
        0,0,1611,1612,7,6,0,0,1612,1613,7,5,0,0,1613,1614,7,8,0,0,1614,290,
        1,0,0,0,1615,1616,7,19,0,0,1616,1617,7,0,0,0,1617,1618,7,9,0,0,1618,
        1619,7,5,0,0,1619,1620,7,6,0,0,1620,1621,7,5,0,0,1621,1622,7,6,0,
        0,1622,1623,7,14,0,0,1623,1624,7,3,0,0,1624,292,1,0,0,0,1625,1626,
        7,19,0,0,1626,1627,7,0,0,0,1627,1628,7,9,0,0,1628,1629,7,5,0,0,1629,
        1630,7,6,0,0,1630,1631,7,5,0,0,1631,1632,7,6,0,0,1632,1633,7,14,
        0,0,1633,1634,7,3,0,0,1634,1635,7,10,0,0,1635,294,1,0,0,0,1636,1637,
        7,19,0,0,1637,1638,7,0,0,0,1638,1639,7,9,0,0,1639,1640,7,25,0,0,
        1640,1641,7,12,0,0,1641,1642,7,8,0,0,1642,1643,7,5,0,0,1643,296,
        1,0,0,0,1644,1645,7,19,0,0,1645,1646,7,14,0,0,1646,1647,7,10,0,0,
        1647,1648,7,6,0,0,1648,1649,7,5,0,0,1649,1650,7,6,0,0,1650,1651,
        7,14,0,0,1651,1652,7,3,0,0,1652,298,1,0,0,0,1653,1654,7,19,0,0,1654,
        1655,7,9,0,0,1655,1656,7,8,0,0,1656,1657,7,7,0,0,1657,1658,7,8,0,
        0,1658,1659,7,1,0,0,1659,1660,7,6,0,0,1660,1661,7,3,0,0,1661,1662,
        7,11,0,0,1662,300,1,0,0,0,1663,1664,7,19,0,0,1664,1665,7,9,0,0,1665,
        1666,7,6,0,0,1666,1667,7,22,0,0,1667,1668,7,0,0,0,1668,1669,7,9,
        0,0,1669,1670,7,4,0,0,1670,302,1,0,0,0,1671,1672,7,9,0,0,1672,1673,
        7,8,0,0,1673,1674,7,19,0,0,1674,1675,7,2,0,0,1675,1676,7,6,0,0,1676,
        1677,7,7,0,0,1677,1678,7,0,0,0,1678,1679,7,5,0,0,1679,1680,7,6,0,
        0,1680,1681,7,14,0,0,1681,1682,7,3,0,0,1682,304,1,0,0,0,1683,1684,
        7,19,0,0,1684,1685,7,9,0,0,1685,1686,7,6,0,0,1686,1687,7,23,0,0,
        1687,1688,7,6,0,0,1688,1689,7,2,0,0,1689,1690,7,8,0,0,1690,1691,
        7,11,0,0,1691,1692,7,8,0,0,1692,1693,7,10,0,0,1693,306,1,0,0,0,1694,
        1695,7,19,0,0,1695,1696,7,9,0,0,1696,1697,7,14,0,0,1697,1698,7,19,
        0,0,1698,1699,7,8,0,0,1699,1700,7,9,0,0,1700,1701,7,5,0,0,1701,1702,
        7,6,0,0,1702,1703,7,8,0,0,1703,1704,7,10,0,0,1704,308,1,0,0,0,1705,
        1706,7,9,0,0,1706,1707,7,0,0,0,1707,1708,7,3,0,0,1708,1709,7,11,
        0,0,1709,1710,7,8,0,0,1710,310,1,0,0,0,1711,1712,7,9,0,0,1712,1713,
        7,8,0,0,1713,1714,7,7,0,0,1714,1715,7,14,0,0,1715,1716,7,23,0,0,
        1716,1717,7,8,0,0,1717,1718,7,9,0,0,1718,312,1,0,0,0,1719,1720,7,
        9,0,0,1720,1721,7,8,0,0,1721,1722,7,3,0,0,1722,1723,7,0,0,0,1723,
        1724,7,22,0,0,1724,1725,7,8,0,0,1725,314,1,0,0,0,1726,1727,7,9,0,
        0,1727,1728,7,8,0,0,1728,1729,7,19,0,0,1729,1730,7,8,0,0,1730,1731,
        7,0,0,0,1731,1732,7,5,0,0,1732,1733,7,0,0,0,1733,1734,7,16,0,0,1734,
        1735,7,2,0,0,1735,1736,7,8,0,0,1736,316,1,0,0,0,1737,1738,7,9,0,
        0,1738,1739,7,8,0,0,1739,1740,7,19,0,0,1740,1741,7,2,0,0,1741,1742,
        7,0,0,0,1742,1743,7,7,0,0,1743,1744,7,8,0,0,1744,318,1,0,0,0,1745,
        1746,7,9,0,0,1746,1747,7,8,0,0,1747,1748,7,10,0,0,1748,1749,7,5,
        0,0,1749,1750,7,9,0,0,1750,1751,7,6,0,0,1751,1752,7,7,0,0,1752,1753,
        7,5,0,0,1753,320,1,0,0,0,1754,1755,7,9,0,0,1755,1756,7,8,0,0,1756,
        1757,7,5,0,0,1757,1758,7,12,0,0,1758,1759,7,9,0,0,1759,1760,7,3,
        0,0,1760,1761,7,10,0,0,1761,322,1,0,0,0,1762,1763,7,9,0,0,1763,1764,
        7,8,0,0,1764,1765,7,23,0,0,1765,1766,7,14,0,0,1766,1767,7,18,0,0,
        1767,1768,7,8,0,0,1768,324,1,0,0,0,1769,1770,7,9,0,0,1770,1771,7,
        8,0,0,1771,1772,7,20,0,0,1772,1773,7,9,0,0,1773,1774,7,8,0,0,1774,
        1775,7,10,0,0,1775,1776,7,13,0,0,1776,326,1,0,0,0,1777,1778,7,9,
        0,0,1778,1779,7,8,0,0,1779,1780,7,11,0,0,1780,1781,7,8,0,0,1781,
        1782,7,21,0,0,1782,1783,7,19,0,0,1783,328,1,0,0,0,1784,1785,7,9,
        0,0,1785,1786,7,2,0,0,1786,1787,7,6,0,0,1787,1788,7,18,0,0,1788,
        1789,7,8,0,0,1789,330,1,0,0,0,1790,1791,7,9,0,0,1791,1792,7,6,0,
        0,1792,1793,7,11,0,0,1793,1794,7,13,0,0,1794,1795,7,5,0,0,1795,332,
        1,0,0,0,1796,1797,7,9,0,0,1797,1798,7,14,0,0,1798,1799,7,2,0,0,1799,
        1800,7,8,0,0,1800,334,1,0,0,0,1801,1802,7,9,0,0,1802,1803,7,14,0,
        0,1803,1804,7,2,0,0,1804,1805,7,8,0,0,1805,1806,7,10,0,0,1806,336,
        1,0,0,0,1807,1808,7,9,0,0,1808,1809,7,14,0,0,1809,1810,7,17,0,0,
        1810,338,1,0,0,0,1811,1812,7,9,0,0,1812,1813,7,14,0,0,1813,1814,
        7,17,0,0,1814,1815,7,10,0,0,1815,340,1,0,0,0,1816,1817,7,10,0,0,
        1817,1818,7,7,0,0,1818,1819,7,13,0,0,1819,1820,7,8,0,0,1820,1821,
        7,22,0,0,1821,1822,7,0,0,0,1822,342,1,0,0,0,1823,1824,7,10,0,0,1824,
        1825,7,7,0,0,1825,1826,7,13,0,0,1826,1827,7,8,0,0,1827,1828,7,22,
        0,0,1828,1829,7,0,0,0,1829,1830,7,10,0,0,1830,344,1,0,0,0,1831,1832,
        7,10,0,0,1832,1833,7,8,0,0,1833,1834,7,7,0,0,1834,1835,7,14,0,0,
        1835,1836,7,3,0,0,1836,1837,7,1,0,0,1837,346,1,0,0,0,1838,1839,7,
        10,0,0,1839,1840,7,8,0,0,1840,1841,7,7,0,0,1841,1842,7,14,0,0,1842,
        1843,7,3,0,0,1843,1844,7,1,0,0,1844,1845,7,10,0,0,1845,348,1,0,0,
        0,1846,1847,7,10,0,0,1847,1848,7,8,0,0,1848,1849,7,2,0,0,1849,1850,
        7,8,0,0,1850,1851,7,7,0,0,1851,1852,7,5,0,0,1852,350,1,0,0,0,1853,
        1854,7,10,0,0,1854,1855,7,8,0,0,1855,1856,7,9,0,0,1856,1857,7,1,
        0,0,1857,1858,7,8,0,0,1858,1859,7,19,0,0,1859,1860,7,9,0,0,1860,
        1861,7,14,0,0,1861,1862,7,19,0,0,1862,1863,7,8,0,0,1863,1864,7,9,
        0,0,1864,1865,7,5,0,0,1865,1866,7,6,0,0,1866,1867,7,8,0,0,1867,1868,
        7,10,0,0,1868,352,1,0,0,0,1869,1870,7,10,0,0,1870,1871,7,8,0,0,1871,
        1872,7,5,0,0,1872,354,1,0,0,0,1873,1874,7,10,0,0,1874,1875,7,8,0,
        0,1875,1876,7,22,0,0,1876,1877,7,6,0,0,1877,356,1,0,0,0,1878,1879,
        7,10,0,0,1879,1880,7,8,0,0,1880,1881,7,9,0,0,1881,1882,7,23,0,0,
        1882,1883,7,8,0,0,1883,1884,7,9,0,0,1884,358,1,0,0,0,1885,1886,7,
        10,0,0,1886,1887,7,13,0,0,1887,1888,7,14,0,0,1888,1889,7,17,0,0,
        1889,360,1,0,0,0,1890,1891,7,10,0,0,1891,1892,7,13,0,0,1892,1893,
        7,12,0,0,1893,1894,7,5,0,0,1894,1895,7,1,0,0,1895,1896,7,14,0,0,
        1896,1897,7,17,0,0,1897,1898,7,3,0,0,1898,362,1,0,0,0,1899,1900,
        7,10,0,0,1900,1901,7,14,0,0,1901,1902,7,22,0,0,1902,1903,7,8,0,0,
        1903,364,1,0,0,0,1904,1905,7,10,0,0,1905,1906,7,5,0,0,1906,1907,
        7,0,0,0,1907,1908,7,5,0,0,1908,1909,7,10,0,0,1909,366,1,0,0,0,1910,
        1911,7,10,0,0,1911,1912,7,5,0,0,1912,1913,7,9,0,0,1913,1914,7,12,
        0,0,1914,1915,7,7,0,0,1915,1916,7,5,0,0,1916,368,1,0,0,0,1917,1918,
        7,10,0,0,1918,1919,7,5,0,0,1919,1920,7,9,0,0,1920,1921,7,0,0,0,1921,
        1922,7,6,0,0,1922,1923,7,11,0,0,1923,1924,7,13,0,0,1924,1925,7,5,
        0,0,1925,1926,5,95,0,0,1926,1927,7,24,0,0,1927,1928,7,14,0,0,1928,
        1929,7,6,0,0,1929,1930,7,3,0,0,1930,370,1,0,0,0,1931,1932,7,10,0,
        0,1932,1933,7,12,0,0,1933,1934,7,16,0,0,1934,1935,7,10,0,0,1935,
        1936,7,5,0,0,1936,1937,7,9,0,0,1937,1938,7,6,0,0,1938,1939,7,3,0,
        0,1939,1940,7,11,0,0,1940,372,1,0,0,0,1941,1942,7,10,0,0,1942,1943,
        7,4,0,0,1943,1944,7,10,0,0,1944,1945,7,5,0,0,1945,1946,7,8,0,0,1946,
        1947,7,22,0,0,1947,374,1,0,0,0,1948,1949,7,10,0,0,1949,1950,7,4,
        0,0,1950,1951,7,22,0,0,1951,1952,7,16,0,0,1952,1953,7,14,0,0,1953,
        1954,7,2,0,0,1954,376,1,0,0,0,1955,1956,7,10,0,0,1956,1957,7,8,0,
        0,1957,1958,7,9,0,0,1958,1959,7,6,0,0,1959,1960,7,0,0,0,1960,1961,
        7,2,0,0,1961,1962,7,6,0,0,1962,1963,7,15,0,0,1963,1964,7,8,0,0,1964,
        1965,5,95,0,0,1965,1966,7,20,0,0,1966,1967,7,3,0,0,1967,378,1,0,
        0,0,1968,1969,7,5,0,0,1969,1970,7,0,0,0,1970,1971,7,16,0,0,1971,
        1972,7,2,0,0,1972,1973,7,8,0,0,1973,380,1,0,0,0,1974,1975,7,5,0,
        0,1975,1976,7,0,0,0,1976,1977,7,16,0,0,1977,1978,7,2,0,0,1978,1979,
        7,8,0,0,1979,1980,7,10,0,0,1980,382,1,0,0,0,1981,1982,7,5,0,0,1982,
        1983,7,0,0,0,1983,1984,7,16,0,0,1984,1985,7,2,0,0,1985,1986,7,8,
        0,0,1986,1987,7,10,0,0,1987,1988,7,0,0,0,1988,1989,7,22,0,0,1989,
        1990,7,19,0,0,1990,1991,7,2,0,0,1991,1992,7,8,0,0,1992,384,1,0,0,
        0,1993,1994,7,5,0,0,1994,1995,7,8,0,0,1995,1996,7,9,0,0,1996,1997,
        7,22,0,0,1997,1998,7,6,0,0,1998,1999,7,3,0,0,1999,2000,7,0,0,0,2000,
        2001,7,5,0,0,2001,2002,7,8,0,0,2002,2003,7,1,0,0,2003,2004,5,32,
        0,0,2004,386,1,0,0,0,2005,2006,7,5,0,0,2006,2007,7,13,0,0,2007,2008,
        7,8,0,0,2008,2009,7,3,0,0,2009,388,1,0,0,0,2010,2011,7,5,0,0,2011,
        2012,7,14,0,0,2012,390,1,0,0,0,2013,2014,7,5,0,0,2014,2015,7,9,0,
        0,2015,2016,7,12,0,0,2016,2017,7,8,0,0,2017,392,1,0,0,0,2018,2019,
        7,5,0,0,2019,2020,7,9,0,0,2020,2021,7,4,0,0,2021,2022,5,95,0,0,2022,
        2023,7,7,0,0,2023,2024,7,0,0,0,2024,2025,7,10,0,0,2025,2026,7,5,
        0,0,2026,394,1,0,0,0,2027,2028,7,5,0,0,2028,2029,7,9,0,0,2029,2030,
        7,12,0,0,2030,2031,7,3,0,0,2031,2032,7,7,0,0,2032,2033,7,0,0,0,2033,
        2034,7,5,0,0,2034,2035,7,8,0,0,2035,396,1,0,0,0,2036,2037,7,12,0,
        0,2037,2038,7,3,0,0,2038,2039,7,7,0,0,2039,2040,7,0,0,0,2040,2041,
        7,7,0,0,2041,2042,7,13,0,0,2042,2043,7,8,0,0,2043,2044,7,1,0,0,2044,
        398,1,0,0,0,2045,2046,7,12,0,0,2046,2047,7,8,0,0,2047,2048,7,10,
        0,0,2048,2049,7,7,0,0,2049,2050,7,0,0,0,2050,2051,7,19,0,0,2051,
        2052,7,8,0,0,2052,400,1,0,0,0,2053,2054,7,12,0,0,2054,2055,7,3,0,
        0,2055,2056,7,16,0,0,2056,2057,7,14,0,0,2057,2058,7,12,0,0,2058,
        2059,7,3,0,0,2059,2060,7,1,0,0,2060,2061,7,8,0,0,2061,2062,7,1,0,
        0,2062,402,1,0,0,0,2063,2064,7,12,0,0,2064,2065,7,3,0,0,2065,2066,
        7,6,0,0,2066,2067,7,14,0,0,2067,2068,7,3,0,0,2068,404,1,0,0,0,2069,
        2070,7,12,0,0,2070,2071,7,3,0,0,2071,2072,7,3,0,0,2072,2073,7,8,
        0,0,2073,2074,7,10,0,0,2074,2075,7,5,0,0,2075,406,1,0,0,0,2076,2077,
        7,12,0,0,2077,2078,7,3,0,0,2078,2079,7,10,0,0,2079,2080,7,8,0,0,
        2080,2081,7,5,0,0,2081,408,1,0,0,0,2082,2083,7,12,0,0,2083,2084,
        7,10,0,0,2084,2085,7,8,0,0,2085,410,1,0,0,0,2086,2087,7,12,0,0,2087,
        2088,7,10,0,0,2088,2089,7,8,0,0,2089,2090,7,9,0,0,2090,412,1,0,0,
        0,2091,2092,7,12,0,0,2092,2093,7,10,0,0,2093,2094,7,6,0,0,2094,2095,
        7,3,0,0,2095,2096,7,11,0,0,2096,414,1,0,0,0,2097,2098,7,12,0,0,2098,
        2099,7,19,0,0,2099,2100,7,1,0,0,2100,2101,7,0,0,0,2101,2102,7,5,
        0,0,2102,2103,7,8,0,0,2103,2104,5,95,0,0,2104,2105,7,20,0,0,2105,
        2106,7,3,0,0,2106,416,1,0,0,0,2107,2108,7,12,0,0,2108,2109,7,19,
        0,0,2109,2110,7,10,0,0,2110,2111,7,8,0,0,2111,2112,7,9,0,0,2112,
        2113,7,5,0,0,2113,418,1,0,0,0,2114,2115,7,12,0,0,2115,2116,7,3,0,
        0,2116,2117,7,18,0,0,2117,2118,7,3,0,0,2118,2119,7,14,0,0,2119,2120,
        7,17,0,0,2120,2121,7,3,0,0,2121,420,1,0,0,0,2122,2123,7,12,0,0,2123,
        2124,7,9,0,0,2124,2125,7,6,0,0,2125,422,1,0,0,0,2126,2127,7,23,0,
        0,2127,2128,7,0,0,0,2128,2129,7,2,0,0,2129,2130,7,12,0,0,2130,2131,
        7,8,0,0,2131,424,1,0,0,0,2132,2133,7,23,0,0,2133,2134,7,0,0,0,2134,
        2135,7,2,0,0,2135,2136,7,12,0,0,2136,2137,7,8,0,0,2137,2138,7,10,
        0,0,2138,426,1,0,0,0,2139,2140,7,23,0,0,2140,2141,7,6,0,0,2141,2142,
        7,8,0,0,2142,2143,7,17,0,0,2143,428,1,0,0,0,2144,2145,7,23,0,0,2145,
        2146,7,6,0,0,2146,2147,7,8,0,0,2147,2148,7,17,0,0,2148,2149,7,10,
        0,0,2149,430,1,0,0,0,2150,2151,7,17,0,0,2151,2152,7,13,0,0,2152,
        2153,7,8,0,0,2153,2154,7,3,0,0,2154,432,1,0,0,0,2155,2156,7,17,0,
        0,2156,2157,7,13,0,0,2157,2158,7,8,0,0,2158,2159,7,9,0,0,2159,2160,
        7,8,0,0,2160,434,1,0,0,0,2161,2162,7,17,0,0,2162,2163,7,6,0,0,2163,
        2164,7,5,0,0,2164,2165,7,13,0,0,2165,436,1,0,0,0,2166,2167,7,4,0,
        0,2167,2168,7,8,0,0,2168,2169,7,0,0,0,2169,2170,7,9,0,0,2170,438,
        1,0,0,0,2171,2172,7,4,0,0,2172,2173,7,8,0,0,2173,2174,7,0,0,0,2174,
        2175,7,9,0,0,2175,2176,7,10,0,0,2176,440,1,0,0,0,2177,2178,7,5,0,
        0,2178,2179,7,8,0,0,2179,2180,7,21,0,0,2180,2181,7,5,0,0,2181,2182,
        7,20,0,0,2182,2183,7,6,0,0,2183,2184,7,2,0,0,2184,2185,7,8,0,0,2185,
        442,1,0,0,0,2186,2187,7,14,0,0,2187,2188,7,9,0,0,2188,2189,7,7,0,
        0,2189,444,1,0,0,0,2190,2191,7,0,0,0,2191,2192,7,23,0,0,2192,2193,
        7,9,0,0,2193,2194,7,14,0,0,2194,446,1,0,0,0,2195,2196,7,10,0,0,2196,
        2197,7,8,0,0,2197,2198,7,25,0,0,2198,2199,7,12,0,0,2199,2200,7,8,
        0,0,2200,2201,7,3,0,0,2201,2202,7,7,0,0,2202,2203,7,8,0,0,2203,2204,
        7,20,0,0,2204,2205,7,6,0,0,2205,2206,7,2,0,0,2206,2207,7,8,0,0,2207,
        448,1,0,0,0,2208,2209,7,9,0,0,2209,2210,7,7,0,0,2210,2211,7,20,0,
        0,2211,2212,7,6,0,0,2212,2213,7,2,0,0,2213,2214,7,8,0,0,2214,450,
        1,0,0,0,2215,2216,7,9,0,0,2216,2217,7,8,0,0,2217,2218,7,20,0,0,2218,
        2219,7,8,0,0,2219,2220,7,9,0,0,2220,2221,7,8,0,0,2221,2222,7,3,0,
        0,2222,2223,7,7,0,0,2223,2224,7,8,0,0,2224,2225,7,10,0,0,2225,452,
        1,0,0,0,2226,2227,7,3,0,0,2227,2228,7,14,0,0,2228,2229,7,23,0,0,
        2229,2230,7,0,0,0,2230,2231,7,2,0,0,2231,2232,7,6,0,0,2232,2233,
        7,1,0,0,2233,2234,7,0,0,0,2234,2235,7,5,0,0,2235,2236,7,8,0,0,2236,
        454,1,0,0,0,2237,2238,7,9,0,0,2238,2239,7,8,0,0,2239,2240,7,2,0,
        0,2240,2241,7,4,0,0,2241,456,1,0,0,0,2242,2243,5,39,0,0,2243,2244,
        7,3,0,0,2244,2245,7,12,0,0,2245,2246,7,22,0,0,2246,2247,7,1,0,0,
        2247,2248,7,23,0,0,2248,2249,7,10,0,0,2249,2250,5,39,0,0,2250,458,
        1,0,0,0,2251,2252,5,39,0,0,2252,2253,7,3,0,0,2253,2254,7,12,0,0,
        2254,2255,7,22,0,0,2255,2256,7,3,0,0,2256,2257,7,12,0,0,2257,2258,
        7,2,0,0,2258,2259,7,2,0,0,2259,2260,7,10,0,0,2260,2261,5,39,0,0,
        2261,460,1,0,0,0,2262,2263,5,39,0,0,2263,2264,7,0,0,0,2264,2265,
        7,23,0,0,2265,2266,7,11,0,0,2266,2267,7,10,0,0,2267,2268,7,6,0,0,
        2268,2269,7,15,0,0,2269,2270,7,8,0,0,2270,2271,5,39,0,0,2271,462,
        1,0,0,0,2272,2273,5,39,0,0,2273,2274,7,22,0,0,2274,2275,7,0,0,0,
        2275,2276,7,21,0,0,2276,2277,7,10,0,0,2277,2278,7,6,0,0,2278,2279,
        7,15,0,0,2279,2280,7,8,0,0,2280,2281,5,39,0,0,2281,464,1,0,0,0,2282,
        2283,5,61,0,0,2283,466,1,0,0,0,2284,2285,5,60,0,0,2285,2289,5,62,
        0,0,2286,2287,5,33,0,0,2287,2289,5,61,0,0,2288,2284,1,0,0,0,2288,
        2286,1,0,0,0,2289,468,1,0,0,0,2290,2291,5,60,0,0,2291,470,1,0,0,
        0,2292,2293,5,60,0,0,2293,2294,5,61,0,0,2294,472,1,0,0,0,2295,2296,
        5,62,0,0,2296,474,1,0,0,0,2297,2298,5,62,0,0,2298,2299,5,61,0,0,
        2299,476,1,0,0,0,2300,2301,5,43,0,0,2301,478,1,0,0,0,2302,2303,5,
        45,0,0,2303,480,1,0,0,0,2304,2305,5,42,0,0,2305,482,1,0,0,0,2306,
        2307,5,47,0,0,2307,484,1,0,0,0,2308,2309,5,37,0,0,2309,486,1,0,0,
        0,2310,2311,5,124,0,0,2311,2312,5,124,0,0,2312,488,1,0,0,0,2313,
        2314,5,46,0,0,2314,490,1,0,0,0,2315,2316,5,59,0,0,2316,492,1,0,0,
        0,2317,2318,5,44,0,0,2318,494,1,0,0,0,2319,2320,5,58,0,0,2320,496,
        1,0,0,0,2321,2322,5,40,0,0,2322,498,1,0,0,0,2323,2324,5,41,0,0,2324,
        500,1,0,0,0,2325,2326,5,91,0,0,2326,502,1,0,0,0,2327,2328,5,93,0,
        0,2328,504,1,0,0,0,2329,2330,5,123,0,0,2330,506,1,0,0,0,2331,2332,
        5,125,0,0,2332,508,1,0,0,0,2333,2334,5,124,0,0,2334,510,1,0,0,0,
        2335,2336,5,63,0,0,2336,512,1,0,0,0,2337,2338,5,45,0,0,2338,2339,
        5,62,0,0,2339,514,1,0,0,0,2340,2346,5,39,0,0,2341,2345,8,26,0,0,
        2342,2343,5,39,0,0,2343,2345,5,39,0,0,2344,2341,1,0,0,0,2344,2342,
        1,0,0,0,2345,2348,1,0,0,0,2346,2344,1,0,0,0,2346,2347,1,0,0,0,2347,
        2349,1,0,0,0,2348,2346,1,0,0,0,2349,2361,5,39,0,0,2350,2356,5,34,
        0,0,2351,2355,8,27,0,0,2352,2353,5,34,0,0,2353,2355,5,34,0,0,2354,
        2351,1,0,0,0,2354,2352,1,0,0,0,2355,2358,1,0,0,0,2356,2354,1,0,0,
        0,2356,2357,1,0,0,0,2357,2359,1,0,0,0,2358,2356,1,0,0,0,2359,2361,
        5,34,0,0,2360,2340,1,0,0,0,2360,2350,1,0,0,0,2361,516,1,0,0,0,2362,
        2363,7,12,0,0,2363,2364,5,38,0,0,2364,2365,5,39,0,0,2365,2371,1,
        0,0,0,2366,2370,8,26,0,0,2367,2368,5,39,0,0,2368,2370,5,39,0,0,2369,
        2366,1,0,0,0,2369,2367,1,0,0,0,2370,2373,1,0,0,0,2371,2369,1,0,0,
        0,2371,2372,1,0,0,0,2372,2374,1,0,0,0,2373,2371,1,0,0,0,2374,2375,
        5,39,0,0,2375,518,1,0,0,0,2376,2377,7,21,0,0,2377,2378,5,39,0,0,
        2378,2382,1,0,0,0,2379,2381,8,26,0,0,2380,2379,1,0,0,0,2381,2384,
        1,0,0,0,2382,2380,1,0,0,0,2382,2383,1,0,0,0,2383,2385,1,0,0,0,2384,
        2382,1,0,0,0,2385,2386,5,39,0,0,2386,520,1,0,0,0,2387,2389,3,543,
        271,0,2388,2387,1,0,0,0,2389,2390,1,0,0,0,2390,2388,1,0,0,0,2390,
        2391,1,0,0,0,2391,522,1,0,0,0,2392,2394,3,543,271,0,2393,2392,1,
        0,0,0,2394,2395,1,0,0,0,2395,2393,1,0,0,0,2395,2396,1,0,0,0,2396,
        2397,1,0,0,0,2397,2401,5,46,0,0,2398,2400,3,543,271,0,2399,2398,
        1,0,0,0,2400,2403,1,0,0,0,2401,2399,1,0,0,0,2401,2402,1,0,0,0,2402,
        2411,1,0,0,0,2403,2401,1,0,0,0,2404,2406,5,46,0,0,2405,2407,3,543,
        271,0,2406,2405,1,0,0,0,2407,2408,1,0,0,0,2408,2406,1,0,0,0,2408,
        2409,1,0,0,0,2409,2411,1,0,0,0,2410,2393,1,0,0,0,2410,2404,1,0,0,
        0,2411,524,1,0,0,0,2412,2414,3,543,271,0,2413,2412,1,0,0,0,2414,
        2415,1,0,0,0,2415,2413,1,0,0,0,2415,2416,1,0,0,0,2416,2424,1,0,0,
        0,2417,2421,5,46,0,0,2418,2420,3,543,271,0,2419,2418,1,0,0,0,2420,
        2423,1,0,0,0,2421,2419,1,0,0,0,2421,2422,1,0,0,0,2422,2425,1,0,0,
        0,2423,2421,1,0,0,0,2424,2417,1,0,0,0,2424,2425,1,0,0,0,2425,2426,
        1,0,0,0,2426,2427,3,541,270,0,2427,2437,1,0,0,0,2428,2430,5,46,0,
        0,2429,2431,3,543,271,0,2430,2429,1,0,0,0,2431,2432,1,0,0,0,2432,
        2430,1,0,0,0,2432,2433,1,0,0,0,2433,2434,1,0,0,0,2434,2435,3,541,
        270,0,2435,2437,1,0,0,0,2436,2413,1,0,0,0,2436,2428,1,0,0,0,2437,
        526,1,0,0,0,2438,2441,3,545,272,0,2439,2441,5,95,0,0,2440,2438,1,
        0,0,0,2440,2439,1,0,0,0,2441,2447,1,0,0,0,2442,2446,3,545,272,0,
        2443,2446,3,543,271,0,2444,2446,7,28,0,0,2445,2442,1,0,0,0,2445,
        2443,1,0,0,0,2445,2444,1,0,0,0,2446,2449,1,0,0,0,2447,2445,1,0,0,
        0,2447,2448,1,0,0,0,2448,528,1,0,0,0,2449,2447,1,0,0,0,2450,2454,
        3,543,271,0,2451,2455,3,545,272,0,2452,2455,3,543,271,0,2453,2455,
        7,28,0,0,2454,2451,1,0,0,0,2454,2452,1,0,0,0,2454,2453,1,0,0,0,2455,
        2456,1,0,0,0,2456,2454,1,0,0,0,2456,2457,1,0,0,0,2457,530,1,0,0,
        0,2458,2464,5,34,0,0,2459,2463,8,27,0,0,2460,2461,5,34,0,0,2461,
        2463,5,34,0,0,2462,2459,1,0,0,0,2462,2460,1,0,0,0,2463,2466,1,0,
        0,0,2464,2462,1,0,0,0,2464,2465,1,0,0,0,2465,2467,1,0,0,0,2466,2464,
        1,0,0,0,2467,2468,5,34,0,0,2468,532,1,0,0,0,2469,2475,5,96,0,0,2470,
        2474,8,29,0,0,2471,2472,5,96,0,0,2472,2474,5,96,0,0,2473,2470,1,
        0,0,0,2473,2471,1,0,0,0,2474,2477,1,0,0,0,2475,2473,1,0,0,0,2475,
        2476,1,0,0,0,2476,2478,1,0,0,0,2477,2475,1,0,0,0,2478,2479,5,96,
        0,0,2479,534,1,0,0,0,2480,2481,7,5,0,0,2481,2482,7,6,0,0,2482,2483,
        7,22,0,0,2483,2484,7,8,0,0,2484,2485,1,0,0,0,2485,2486,3,551,275,
        0,2486,2487,7,17,0,0,2487,2488,7,6,0,0,2488,2489,7,5,0,0,2489,2490,
        7,13,0,0,2490,2491,1,0,0,0,2491,2492,3,551,275,0,2492,2493,7,5,0,
        0,2493,2494,7,6,0,0,2494,2495,7,22,0,0,2495,2496,7,8,0,0,2496,2497,
        1,0,0,0,2497,2498,3,551,275,0,2498,2499,7,15,0,0,2499,2500,7,14,
        0,0,2500,2501,7,3,0,0,2501,2502,7,8,0,0,2502,536,1,0,0,0,2503,2504,
        7,5,0,0,2504,2505,7,6,0,0,2505,2506,7,22,0,0,2506,2507,7,8,0,0,2507,
        2508,7,10,0,0,2508,2509,7,5,0,0,2509,2510,7,0,0,0,2510,2511,7,22,
        0,0,2511,2512,7,19,0,0,2512,2513,1,0,0,0,2513,2514,3,551,275,0,2514,
        2515,7,17,0,0,2515,2516,7,6,0,0,2516,2517,7,5,0,0,2517,2518,7,13,
        0,0,2518,2519,1,0,0,0,2519,2520,3,551,275,0,2520,2521,7,5,0,0,2521,
        2522,7,6,0,0,2522,2523,7,22,0,0,2523,2524,7,8,0,0,2524,2525,1,0,
        0,0,2525,2526,3,551,275,0,2526,2527,7,15,0,0,2527,2528,7,14,0,0,
        2528,2529,7,3,0,0,2529,2530,7,8,0,0,2530,538,1,0,0,0,2531,2532,7,
        1,0,0,2532,2533,7,14,0,0,2533,2534,7,12,0,0,2534,2535,7,16,0,0,2535,
        2536,7,2,0,0,2536,2537,7,8,0,0,2537,2538,1,0,0,0,2538,2539,3,551,
        275,0,2539,2540,7,19,0,0,2540,2541,7,9,0,0,2541,2542,7,8,0,0,2542,
        2543,7,7,0,0,2543,2544,7,6,0,0,2544,2545,7,10,0,0,2545,2546,7,6,
        0,0,2546,2547,7,14,0,0,2547,2548,7,3,0,0,2548,540,1,0,0,0,2549,2551,
        7,8,0,0,2550,2552,7,30,0,0,2551,2550,1,0,0,0,2551,2552,1,0,0,0,2552,
        2554,1,0,0,0,2553,2555,3,543,271,0,2554,2553,1,0,0,0,2555,2556,1,
        0,0,0,2556,2554,1,0,0,0,2556,2557,1,0,0,0,2557,542,1,0,0,0,2558,
        2559,7,31,0,0,2559,544,1,0,0,0,2560,2561,7,32,0,0,2561,546,1,0,0,
        0,2562,2563,5,45,0,0,2563,2564,5,45,0,0,2564,2568,1,0,0,0,2565,2567,
        8,33,0,0,2566,2565,1,0,0,0,2567,2570,1,0,0,0,2568,2566,1,0,0,0,2568,
        2569,1,0,0,0,2569,2572,1,0,0,0,2570,2568,1,0,0,0,2571,2573,5,13,
        0,0,2572,2571,1,0,0,0,2572,2573,1,0,0,0,2573,2575,1,0,0,0,2574,2576,
        5,10,0,0,2575,2574,1,0,0,0,2575,2576,1,0,0,0,2576,2577,1,0,0,0,2577,
        2578,6,273,0,0,2578,548,1,0,0,0,2579,2580,5,47,0,0,2580,2581,5,42,
        0,0,2581,2585,1,0,0,0,2582,2584,9,0,0,0,2583,2582,1,0,0,0,2584,2587,
        1,0,0,0,2585,2586,1,0,0,0,2585,2583,1,0,0,0,2586,2588,1,0,0,0,2587,
        2585,1,0,0,0,2588,2589,5,42,0,0,2589,2590,5,47,0,0,2590,2591,1,0,
        0,0,2591,2592,6,274,0,0,2592,550,1,0,0,0,2593,2595,7,34,0,0,2594,
        2593,1,0,0,0,2595,2596,1,0,0,0,2596,2594,1,0,0,0,2596,2597,1,0,0,
        0,2597,2598,1,0,0,0,2598,2599,6,275,0,0,2599,552,1,0,0,0,36,0,2288,
        2344,2346,2354,2356,2360,2369,2371,2382,2390,2395,2401,2408,2410,
        2415,2421,2424,2432,2436,2440,2445,2447,2454,2456,2462,2464,2473,
        2475,2551,2556,2568,2572,2575,2585,2596,1,0,1,0
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