// Generated from /Users/zhenglin/Documents/parser/dt-sql-parser/src/grammar/trinosql/trinoSqlParser.g4 by ANTLR 4.12.0
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
export default class trinoSqlParserLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly ADD = 17;
	public static readonly ADMIN = 18;
	public static readonly AFTER = 19;
	public static readonly ALL = 20;
	public static readonly ALTER = 21;
	public static readonly ANALYZE = 22;
	public static readonly AND = 23;
	public static readonly ANY = 24;
	public static readonly ARRAY = 25;
	public static readonly AS = 26;
	public static readonly ASC = 27;
	public static readonly AT = 28;
	public static readonly AUTHORIZATION = 29;
	public static readonly BERNOULLI = 30;
	public static readonly BETWEEN = 31;
	public static readonly BY = 32;
	public static readonly CALL = 33;
	public static readonly CASCADE = 34;
	public static readonly CASE = 35;
	public static readonly CAST = 36;
	public static readonly CATALOGS = 37;
	public static readonly COLUMN = 38;
	public static readonly COLUMNS = 39;
	public static readonly COMMENT = 40;
	public static readonly COMMIT = 41;
	public static readonly COMMITTED = 42;
	public static readonly CONSTRAINT = 43;
	public static readonly CREATE = 44;
	public static readonly CROSS = 45;
	public static readonly CUBE = 46;
	public static readonly CURRENT = 47;
	public static readonly CURRENT_CATALOG = 48;
	public static readonly CURRENT_DATE = 49;
	public static readonly CURRENT_PATH = 50;
	public static readonly CURRENT_ROLE = 51;
	public static readonly CURRENT_SCHEMA = 52;
	public static readonly CURRENT_TIME = 53;
	public static readonly CURRENT_TIMESTAMP = 54;
	public static readonly CURRENT_USER = 55;
	public static readonly DATA = 56;
	public static readonly DATE = 57;
	public static readonly DAY = 58;
	public static readonly DEALLOCATE = 59;
	public static readonly DEFINER = 60;
	public static readonly DELETE = 61;
	public static readonly DESC = 62;
	public static readonly DESCRIBE = 63;
	public static readonly DEFINE = 64;
	public static readonly DISTINCT = 65;
	public static readonly DISTRIBUTED = 66;
	public static readonly DOUBLE = 67;
	public static readonly DROP = 68;
	public static readonly ELSE = 69;
	public static readonly EMPTY = 70;
	public static readonly END = 71;
	public static readonly ESCAPE = 72;
	public static readonly EXCEPT = 73;
	public static readonly EXCLUDING = 74;
	public static readonly EXECUTE = 75;
	public static readonly EXISTS = 76;
	public static readonly EXPLAIN = 77;
	public static readonly EXTRACT = 78;
	public static readonly FALSE = 79;
	public static readonly FETCH = 80;
	public static readonly FILTER = 81;
	public static readonly FINAL = 82;
	public static readonly FIRST = 83;
	public static readonly FOLLOWING = 84;
	public static readonly FOR = 85;
	public static readonly FORMAT = 86;
	public static readonly FROM = 87;
	public static readonly FULL = 88;
	public static readonly FUNCTIONS = 89;
	public static readonly GRANT = 90;
	public static readonly GRANTED = 91;
	public static readonly GRANTS = 92;
	public static readonly GRAPHVIZ = 93;
	public static readonly GROUP = 94;
	public static readonly GROUPING = 95;
	public static readonly GROUPS = 96;
	public static readonly HAVING = 97;
	public static readonly HOUR = 98;
	public static readonly IF = 99;
	public static readonly IGNORE = 100;
	public static readonly IN = 101;
	public static readonly INCLUDING = 102;
	public static readonly INITIAL = 103;
	public static readonly INNER = 104;
	public static readonly INPUT = 105;
	public static readonly INSERT = 106;
	public static readonly INTERSECT = 107;
	public static readonly INTERVAL = 108;
	public static readonly INTO = 109;
	public static readonly INVOKER = 110;
	public static readonly IO = 111;
	public static readonly IS = 112;
	public static readonly ISOLATION = 113;
	public static readonly JOIN = 114;
	public static readonly JSON = 115;
	public static readonly LAST = 116;
	public static readonly LATERAL = 117;
	public static readonly LEFT = 118;
	public static readonly LEVEL = 119;
	public static readonly LIKE = 120;
	public static readonly LIMIT = 121;
	public static readonly LOCAL = 122;
	public static readonly LOCALTIME = 123;
	public static readonly LOCALTIMESTAMP = 124;
	public static readonly LOGICAL = 125;
	public static readonly MAP = 126;
	public static readonly MATCH = 127;
	public static readonly MATCHED = 128;
	public static readonly MATCHES = 129;
	public static readonly MATCH_RECOGNIZE = 130;
	public static readonly MATERIALIZED = 131;
	public static readonly MEASURES = 132;
	public static readonly MERGE = 133;
	public static readonly MINUTE = 134;
	public static readonly MONTH = 135;
	public static readonly NATURAL = 136;
	public static readonly NEXT = 137;
	public static readonly NFC = 138;
	public static readonly NFD = 139;
	public static readonly NFKC = 140;
	public static readonly NFKD = 141;
	public static readonly NO = 142;
	public static readonly NONE = 143;
	public static readonly NORMALIZE = 144;
	public static readonly NOT = 145;
	public static readonly NULL = 146;
	public static readonly NULLIF = 147;
	public static readonly NULLS = 148;
	public static readonly OFFSET = 149;
	public static readonly OMIT = 150;
	public static readonly ON = 151;
	public static readonly ONE = 152;
	public static readonly ONLY = 153;
	public static readonly OPTION = 154;
	public static readonly OR = 155;
	public static readonly ORDER = 156;
	public static readonly ORDINALITY = 157;
	public static readonly OUTER = 158;
	public static readonly OUTPUT = 159;
	public static readonly OVER = 160;
	public static readonly PARTITION = 161;
	public static readonly PARTITIONS = 162;
	public static readonly PAST = 163;
	public static readonly PATH = 164;
	public static readonly PATTERN = 165;
	public static readonly PER = 166;
	public static readonly PERMUTE = 167;
	public static readonly POSITION = 168;
	public static readonly PRECEDING = 169;
	public static readonly PRECISION = 170;
	public static readonly PREPARE = 171;
	public static readonly PRIVILEGES = 172;
	public static readonly PROPERTIES = 173;
	public static readonly RANGE = 174;
	public static readonly READ = 175;
	public static readonly RECURSIVE = 176;
	public static readonly REFRESH = 177;
	public static readonly RENAME = 178;
	public static readonly REPEATABLE = 179;
	public static readonly REPLACE = 180;
	public static readonly RESET = 181;
	public static readonly RESPECT = 182;
	public static readonly RESTRICT = 183;
	public static readonly REVOKE = 184;
	public static readonly RIGHT = 185;
	public static readonly ROLE = 186;
	public static readonly ROLES = 187;
	public static readonly ROLLBACK = 188;
	public static readonly ROLLUP = 189;
	public static readonly ROW = 190;
	public static readonly ROWS = 191;
	public static readonly RUNNING = 192;
	public static readonly SCHEMA = 193;
	public static readonly SCHEMAS = 194;
	public static readonly SECOND = 195;
	public static readonly SECURITY = 196;
	public static readonly SEEK = 197;
	public static readonly SELECT = 198;
	public static readonly SERIALIZABLE = 199;
	public static readonly SESSION = 200;
	public static readonly SET = 201;
	public static readonly SETS = 202;
	public static readonly SHOW = 203;
	public static readonly SOME = 204;
	public static readonly START = 205;
	public static readonly STATS = 206;
	public static readonly SUBSET = 207;
	public static readonly SUBSTRING = 208;
	public static readonly SYSTEM = 209;
	public static readonly TABLE = 210;
	public static readonly TABLES = 211;
	public static readonly TABLESAMPLE = 212;
	public static readonly TEXT = 213;
	public static readonly THEN = 214;
	public static readonly TIES = 215;
	public static readonly TIME = 216;
	public static readonly TIMESTAMP = 217;
	public static readonly TO = 218;
	public static readonly TRANSACTION = 219;
	public static readonly TRUE = 220;
	public static readonly TRY_CAST = 221;
	public static readonly TYPE = 222;
	public static readonly UESCAPE = 223;
	public static readonly UNBOUNDED = 224;
	public static readonly UNCOMMITTED = 225;
	public static readonly UNION = 226;
	public static readonly UNMATCHED = 227;
	public static readonly UNNEST = 228;
	public static readonly UPDATE = 229;
	public static readonly USE = 230;
	public static readonly USER = 231;
	public static readonly USING = 232;
	public static readonly VALIDATE = 233;
	public static readonly VALUES = 234;
	public static readonly VERBOSE = 235;
	public static readonly VIEW = 236;
	public static readonly WHEN = 237;
	public static readonly WHERE = 238;
	public static readonly WINDOW = 239;
	public static readonly WITH = 240;
	public static readonly WITHOUT = 241;
	public static readonly WORK = 242;
	public static readonly WRITE = 243;
	public static readonly YEAR = 244;
	public static readonly ZONE = 245;
	public static readonly EQ = 246;
	public static readonly NEQ = 247;
	public static readonly LT = 248;
	public static readonly LTE = 249;
	public static readonly GT = 250;
	public static readonly GTE = 251;
	public static readonly PLUS = 252;
	public static readonly MINUS = 253;
	public static readonly ASTERISK = 254;
	public static readonly SLASH = 255;
	public static readonly PERCENT = 256;
	public static readonly CONCAT = 257;
	public static readonly QUESTION_MARK = 258;
	public static readonly STRING = 259;
	public static readonly UNICODE_STRING = 260;
	public static readonly BINARY_LITERAL = 261;
	public static readonly INTEGER_VALUE = 262;
	public static readonly DECIMAL_VALUE = 263;
	public static readonly DOUBLE_VALUE = 264;
	public static readonly IDENTIFIER = 265;
	public static readonly DIGIT_IDENTIFIER = 266;
	public static readonly QUOTED_IDENTIFIER = 267;
	public static readonly BACKQUOTED_IDENTIFIER = 268;
	public static readonly SEMICOLON = 269;
	public static readonly SIMPLE_COMMENT = 270;
	public static readonly BRACKETED_COMMENT = 271;
	public static readonly WS = 272;
	public static readonly UNRECOGNIZED = 273;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [ null, "'.'", "'('", "')'", 
                                                   "','", "'SKIP'", "'->'", 
                                                   "'['", "']'", "'|'", 
                                                   "'^'", "'$'", "'{-'", 
                                                   "'-}'", "'{'", "'}'", 
                                                   "'=>'", "'ADD'", "'ADMIN'", 
                                                   "'AFTER'", "'ALL'", "'ALTER'", 
                                                   "'ANALYZE'", "'AND'", 
                                                   "'ANY'", "'ARRAY'", "'AS'", 
                                                   "'ASC'", "'AT'", "'AUTHORIZATION'", 
                                                   "'BERNOULLI'", "'BETWEEN'", 
                                                   "'BY'", "'CALL'", "'CASCADE'", 
                                                   "'CASE'", "'CAST'", "'CATALOGS'", 
                                                   "'COLUMN'", "'COLUMNS'", 
                                                   "'COMMENT'", "'COMMIT'", 
                                                   "'COMMITTED'", "'CONSTRAINT'", 
                                                   "'CREATE'", "'CROSS'", 
                                                   "'CUBE'", "'CURRENT'", 
                                                   "'CURRENT_CATALOG'", 
                                                   "'CURRENT_DATE'", "'CURRENT_PATH'", 
                                                   "'CURRENT_ROLE'", "'CURRENT_SCHEMA'", 
                                                   "'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", 
                                                   "'CURRENT_USER'", "'DATA'", 
                                                   "'DATE'", "'DAY'", "'DEALLOCATE'", 
                                                   "'DEFINER'", "'DELETE'", 
                                                   "'DESC'", "'DESCRIBE'", 
                                                   "'DEFINE'", "'DISTINCT'", 
                                                   "'DISTRIBUTED'", "'DOUBLE'", 
                                                   "'DROP'", "'ELSE'", "'EMPTY'", 
                                                   "'END'", "'ESCAPE'", 
                                                   "'EXCEPT'", "'EXCLUDING'", 
                                                   "'EXECUTE'", "'EXISTS'", 
                                                   "'EXPLAIN'", "'EXTRACT'", 
                                                   "'FALSE'", "'FETCH'", 
                                                   "'FILTER'", "'FINAL'", 
                                                   "'FIRST'", "'FOLLOWING'", 
                                                   "'FOR'", "'FORMAT'", 
                                                   "'FROM'", "'FULL'", "'FUNCTIONS'", 
                                                   "'GRANT'", "'GRANTED'", 
                                                   "'GRANTS'", "'GRAPHVIZ'", 
                                                   "'GROUP'", "'GROUPING'", 
                                                   "'GROUPS'", "'HAVING'", 
                                                   "'HOUR'", "'IF'", "'IGNORE'", 
                                                   "'IN'", "'INCLUDING'", 
                                                   "'INITIAL'", "'INNER'", 
                                                   "'INPUT'", "'INSERT'", 
                                                   "'INTERSECT'", "'INTERVAL'", 
                                                   "'INTO'", "'INVOKER'", 
                                                   "'IO'", "'IS'", "'ISOLATION'", 
                                                   "'JOIN'", "'JSON'", "'LAST'", 
                                                   "'LATERAL'", "'LEFT'", 
                                                   "'LEVEL'", "'LIKE'", 
                                                   "'LIMIT'", "'LOCAL'", 
                                                   "'LOCALTIME'", "'LOCALTIMESTAMP'", 
                                                   "'LOGICAL'", "'MAP'", 
                                                   "'MATCH'", "'MATCHED'", 
                                                   "'MATCHES'", "'MATCH_RECOGNIZE'", 
                                                   "'MATERIALIZED'", "'MEASURES'", 
                                                   "'MERGE'", "'MINUTE'", 
                                                   "'MONTH'", "'NATURAL'", 
                                                   "'NEXT'", "'NFC'", "'NFD'", 
                                                   "'NFKC'", "'NFKD'", "'NO'", 
                                                   "'NONE'", "'NORMALIZE'", 
                                                   "'NOT'", "'NULL'", "'NULLIF'", 
                                                   "'NULLS'", "'OFFSET'", 
                                                   "'OMIT'", "'ON'", "'ONE'", 
                                                   "'ONLY'", "'OPTION'", 
                                                   "'OR'", "'ORDER'", "'ORDINALITY'", 
                                                   "'OUTER'", "'OUTPUT'", 
                                                   "'OVER'", "'PARTITION'", 
                                                   "'PARTITIONS'", "'PAST'", 
                                                   "'PATH'", "'PATTERN'", 
                                                   "'PER'", "'PERMUTE'", 
                                                   "'POSITION'", "'PRECEDING'", 
                                                   "'PRECISION'", "'PREPARE'", 
                                                   "'PRIVILEGES'", "'PROPERTIES'", 
                                                   "'RANGE'", "'READ'", 
                                                   "'RECURSIVE'", "'REFRESH'", 
                                                   "'RENAME'", "'REPEATABLE'", 
                                                   "'REPLACE'", "'RESET'", 
                                                   "'RESPECT'", "'RESTRICT'", 
                                                   "'REVOKE'", "'RIGHT'", 
                                                   "'ROLE'", "'ROLES'", 
                                                   "'ROLLBACK'", "'ROLLUP'", 
                                                   "'ROW'", "'ROWS'", "'RUNNING'", 
                                                   "'SCHEMA'", "'SCHEMAS'", 
                                                   "'SECOND'", "'SECURITY'", 
                                                   "'SEEK'", "'SELECT'", 
                                                   "'SERIALIZABLE'", "'SESSION'", 
                                                   "'SET'", "'SETS'", "'SHOW'", 
                                                   "'SOME'", "'START'", 
                                                   "'STATS'", "'SUBSET'", 
                                                   "'SUBSTRING'", "'SYSTEM'", 
                                                   "'TABLE'", "'TABLES'", 
                                                   "'TABLESAMPLE'", "'TEXT'", 
                                                   "'THEN'", "'TIES'", "'TIME'", 
                                                   "'TIMESTAMP'", "'TO'", 
                                                   "'TRANSACTION'", "'TRUE'", 
                                                   "'TRY_CAST'", "'TYPE'", 
                                                   "'UESCAPE'", "'UNBOUNDED'", 
                                                   "'UNCOMMITTED'", "'UNION'", 
                                                   "'UNMATCHED'", "'UNNEST'", 
                                                   "'UPDATE'", "'USE'", 
                                                   "'USER'", "'USING'", 
                                                   "'VALIDATE'", "'VALUES'", 
                                                   "'VERBOSE'", "'VIEW'", 
                                                   "'WHEN'", "'WHERE'", 
                                                   "'WINDOW'", "'WITH'", 
                                                   "'WITHOUT'", "'WORK'", 
                                                   "'WRITE'", "'YEAR'", 
                                                   "'ZONE'", "'='", null, 
                                                   "'<'", "'<='", "'>'", 
                                                   "'>='", "'+'", "'-'", 
                                                   "'*'", "'/'", "'%'", 
                                                   "'||'", "'?'", null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, "';'" ];
	public static readonly symbolicNames: string[] = [ null, null, null, null, 
                                                    null, null, null, null, 
                                                    null, null, null, null, 
                                                    null, null, null, null, 
                                                    null, "ADD", "ADMIN", 
                                                    "AFTER", "ALL", "ALTER", 
                                                    "ANALYZE", "AND", "ANY", 
                                                    "ARRAY", "AS", "ASC", 
                                                    "AT", "AUTHORIZATION", 
                                                    "BERNOULLI", "BETWEEN", 
                                                    "BY", "CALL", "CASCADE", 
                                                    "CASE", "CAST", "CATALOGS", 
                                                    "COLUMN", "COLUMNS", 
                                                    "COMMENT", "COMMIT", 
                                                    "COMMITTED", "CONSTRAINT", 
                                                    "CREATE", "CROSS", "CUBE", 
                                                    "CURRENT", "CURRENT_CATALOG", 
                                                    "CURRENT_DATE", "CURRENT_PATH", 
                                                    "CURRENT_ROLE", "CURRENT_SCHEMA", 
                                                    "CURRENT_TIME", "CURRENT_TIMESTAMP", 
                                                    "CURRENT_USER", "DATA", 
                                                    "DATE", "DAY", "DEALLOCATE", 
                                                    "DEFINER", "DELETE", 
                                                    "DESC", "DESCRIBE", 
                                                    "DEFINE", "DISTINCT", 
                                                    "DISTRIBUTED", "DOUBLE", 
                                                    "DROP", "ELSE", "EMPTY", 
                                                    "END", "ESCAPE", "EXCEPT", 
                                                    "EXCLUDING", "EXECUTE", 
                                                    "EXISTS", "EXPLAIN", 
                                                    "EXTRACT", "FALSE", 
                                                    "FETCH", "FILTER", "FINAL", 
                                                    "FIRST", "FOLLOWING", 
                                                    "FOR", "FORMAT", "FROM", 
                                                    "FULL", "FUNCTIONS", 
                                                    "GRANT", "GRANTED", 
                                                    "GRANTS", "GRAPHVIZ", 
                                                    "GROUP", "GROUPING", 
                                                    "GROUPS", "HAVING", 
                                                    "HOUR", "IF", "IGNORE", 
                                                    "IN", "INCLUDING", "INITIAL", 
                                                    "INNER", "INPUT", "INSERT", 
                                                    "INTERSECT", "INTERVAL", 
                                                    "INTO", "INVOKER", "IO", 
                                                    "IS", "ISOLATION", "JOIN", 
                                                    "JSON", "LAST", "LATERAL", 
                                                    "LEFT", "LEVEL", "LIKE", 
                                                    "LIMIT", "LOCAL", "LOCALTIME", 
                                                    "LOCALTIMESTAMP", "LOGICAL", 
                                                    "MAP", "MATCH", "MATCHED", 
                                                    "MATCHES", "MATCH_RECOGNIZE", 
                                                    "MATERIALIZED", "MEASURES", 
                                                    "MERGE", "MINUTE", "MONTH", 
                                                    "NATURAL", "NEXT", "NFC", 
                                                    "NFD", "NFKC", "NFKD", 
                                                    "NO", "NONE", "NORMALIZE", 
                                                    "NOT", "NULL", "NULLIF", 
                                                    "NULLS", "OFFSET", "OMIT", 
                                                    "ON", "ONE", "ONLY", 
                                                    "OPTION", "OR", "ORDER", 
                                                    "ORDINALITY", "OUTER", 
                                                    "OUTPUT", "OVER", "PARTITION", 
                                                    "PARTITIONS", "PAST", 
                                                    "PATH", "PATTERN", "PER", 
                                                    "PERMUTE", "POSITION", 
                                                    "PRECEDING", "PRECISION", 
                                                    "PREPARE", "PRIVILEGES", 
                                                    "PROPERTIES", "RANGE", 
                                                    "READ", "RECURSIVE", 
                                                    "REFRESH", "RENAME", 
                                                    "REPEATABLE", "REPLACE", 
                                                    "RESET", "RESPECT", 
                                                    "RESTRICT", "REVOKE", 
                                                    "RIGHT", "ROLE", "ROLES", 
                                                    "ROLLBACK", "ROLLUP", 
                                                    "ROW", "ROWS", "RUNNING", 
                                                    "SCHEMA", "SCHEMAS", 
                                                    "SECOND", "SECURITY", 
                                                    "SEEK", "SELECT", "SERIALIZABLE", 
                                                    "SESSION", "SET", "SETS", 
                                                    "SHOW", "SOME", "START", 
                                                    "STATS", "SUBSET", "SUBSTRING", 
                                                    "SYSTEM", "TABLE", "TABLES", 
                                                    "TABLESAMPLE", "TEXT", 
                                                    "THEN", "TIES", "TIME", 
                                                    "TIMESTAMP", "TO", "TRANSACTION", 
                                                    "TRUE", "TRY_CAST", 
                                                    "TYPE", "UESCAPE", "UNBOUNDED", 
                                                    "UNCOMMITTED", "UNION", 
                                                    "UNMATCHED", "UNNEST", 
                                                    "UPDATE", "USE", "USER", 
                                                    "USING", "VALIDATE", 
                                                    "VALUES", "VERBOSE", 
                                                    "VIEW", "WHEN", "WHERE", 
                                                    "WINDOW", "WITH", "WITHOUT", 
                                                    "WORK", "WRITE", "YEAR", 
                                                    "ZONE", "EQ", "NEQ", 
                                                    "LT", "LTE", "GT", "GTE", 
                                                    "PLUS", "MINUS", "ASTERISK", 
                                                    "SLASH", "PERCENT", 
                                                    "CONCAT", "QUESTION_MARK", 
                                                    "STRING", "UNICODE_STRING", 
                                                    "BINARY_LITERAL", "INTEGER_VALUE", 
                                                    "DECIMAL_VALUE", "DOUBLE_VALUE", 
                                                    "IDENTIFIER", "DIGIT_IDENTIFIER", 
                                                    "QUOTED_IDENTIFIER", 
                                                    "BACKQUOTED_IDENTIFIER", 
                                                    "SEMICOLON", "SIMPLE_COMMENT", 
                                                    "BRACKETED_COMMENT", 
                                                    "WS", "UNRECOGNIZED" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "ADD", "ADMIN", 
		"AFTER", "ALL", "ALTER", "ANALYZE", "AND", "ANY", "ARRAY", "AS", "ASC", 
		"AT", "AUTHORIZATION", "BERNOULLI", "BETWEEN", "BY", "CALL", "CASCADE", 
		"CASE", "CAST", "CATALOGS", "COLUMN", "COLUMNS", "COMMENT", "COMMIT", 
		"COMMITTED", "CONSTRAINT", "CREATE", "CROSS", "CUBE", "CURRENT", "CURRENT_CATALOG", 
		"CURRENT_DATE", "CURRENT_PATH", "CURRENT_ROLE", "CURRENT_SCHEMA", "CURRENT_TIME", 
		"CURRENT_TIMESTAMP", "CURRENT_USER", "DATA", "DATE", "DAY", "DEALLOCATE", 
		"DEFINER", "DELETE", "DESC", "DESCRIBE", "DEFINE", "DISTINCT", "DISTRIBUTED", 
		"DOUBLE", "DROP", "ELSE", "EMPTY", "END", "ESCAPE", "EXCEPT", "EXCLUDING", 
		"EXECUTE", "EXISTS", "EXPLAIN", "EXTRACT", "FALSE", "FETCH", "FILTER", 
		"FINAL", "FIRST", "FOLLOWING", "FOR", "FORMAT", "FROM", "FULL", "FUNCTIONS", 
		"GRANT", "GRANTED", "GRANTS", "GRAPHVIZ", "GROUP", "GROUPING", "GROUPS", 
		"HAVING", "HOUR", "IF", "IGNORE", "IN", "INCLUDING", "INITIAL", "INNER", 
		"INPUT", "INSERT", "INTERSECT", "INTERVAL", "INTO", "INVOKER", "IO", "IS", 
		"ISOLATION", "JOIN", "JSON", "LAST", "LATERAL", "LEFT", "LEVEL", "LIKE", 
		"LIMIT", "LOCAL", "LOCALTIME", "LOCALTIMESTAMP", "LOGICAL", "MAP", "MATCH", 
		"MATCHED", "MATCHES", "MATCH_RECOGNIZE", "MATERIALIZED", "MEASURES", "MERGE", 
		"MINUTE", "MONTH", "NATURAL", "NEXT", "NFC", "NFD", "NFKC", "NFKD", "NO", 
		"NONE", "NORMALIZE", "NOT", "NULL", "NULLIF", "NULLS", "OFFSET", "OMIT", 
		"ON", "ONE", "ONLY", "OPTION", "OR", "ORDER", "ORDINALITY", "OUTER", "OUTPUT", 
		"OVER", "PARTITION", "PARTITIONS", "PAST", "PATH", "PATTERN", "PER", "PERMUTE", 
		"POSITION", "PRECEDING", "PRECISION", "PREPARE", "PRIVILEGES", "PROPERTIES", 
		"RANGE", "READ", "RECURSIVE", "REFRESH", "RENAME", "REPEATABLE", "REPLACE", 
		"RESET", "RESPECT", "RESTRICT", "REVOKE", "RIGHT", "ROLE", "ROLES", "ROLLBACK", 
		"ROLLUP", "ROW", "ROWS", "RUNNING", "SCHEMA", "SCHEMAS", "SECOND", "SECURITY", 
		"SEEK", "SELECT", "SERIALIZABLE", "SESSION", "SET", "SETS", "SHOW", "SOME", 
		"START", "STATS", "SUBSET", "SUBSTRING", "SYSTEM", "TABLE", "TABLES", 
		"TABLESAMPLE", "TEXT", "THEN", "TIES", "TIME", "TIMESTAMP", "TO", "TRANSACTION", 
		"TRUE", "TRY_CAST", "TYPE", "UESCAPE", "UNBOUNDED", "UNCOMMITTED", "UNION", 
		"UNMATCHED", "UNNEST", "UPDATE", "USE", "USER", "USING", "VALIDATE", "VALUES", 
		"VERBOSE", "VIEW", "WHEN", "WHERE", "WINDOW", "WITH", "WITHOUT", "WORK", 
		"WRITE", "YEAR", "ZONE", "EQ", "NEQ", "LT", "LTE", "GT", "GTE", "PLUS", 
		"MINUS", "ASTERISK", "SLASH", "PERCENT", "CONCAT", "QUESTION_MARK", "STRING", 
		"UNICODE_STRING", "BINARY_LITERAL", "INTEGER_VALUE", "DECIMAL_VALUE", 
		"DOUBLE_VALUE", "IDENTIFIER", "DIGIT_IDENTIFIER", "QUOTED_IDENTIFIER", 
		"BACKQUOTED_IDENTIFIER", "SEMICOLON", "EXPONENT", "DIGIT", "LETTER", "SIMPLE_COMMENT", 
		"BRACKETED_COMMENT", "WS", "UNRECOGNIZED",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, trinoSqlParserLexer._ATN, trinoSqlParserLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "trinoSqlParser.g4"; }

	public get literalNames(): (string | null)[] { return trinoSqlParserLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return trinoSqlParserLexer.symbolicNames; }
	public get ruleNames(): string[] { return trinoSqlParserLexer.ruleNames; }

	public get serializedATN(): number[] { return trinoSqlParserLexer._serializedATN; }

	public get channelNames(): string[] { return trinoSqlParserLexer.channelNames; }

	public get modeNames(): string[] { return trinoSqlParserLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,273,2439,6,-1,2,
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
	2,271,7,271,2,272,7,272,2,273,7,273,2,274,7,274,2,275,7,275,1,0,1,0,1,1,
	1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,
	1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,14,1,14,
	1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,
	18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,
	1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,
	23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,26,1,26,1,26,1,26,
	1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,
	28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,30,1,30,
	1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,
	33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,35,1,35,
	1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,
	37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,
	1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,
	41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,
	1,42,1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,44,1,44,1,
	44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,
	1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,
	47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,
	1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,
	49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,51,
	1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,
	52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,53,1,53,
	1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,
	53,1,53,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,
	1,55,1,55,1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,
	58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,59,1,59,1,59,1,59,
	1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,61,1,61,1,61,1,
	61,1,61,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,
	1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,
	65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,66,1,66,1,66,1,66,1,66,
	1,66,1,66,1,67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,1,69,1,69,1,
	69,1,69,1,69,1,69,1,70,1,70,1,70,1,70,1,71,1,71,1,71,1,71,1,71,1,71,1,71,
	1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,
	73,1,73,1,73,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,75,1,75,1,75,1,75,
	1,75,1,75,1,75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,77,1,77,1,77,1,
	77,1,77,1,77,1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,79,1,79,1,79,1,79,
	1,79,1,79,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,
	81,1,82,1,82,1,82,1,82,1,82,1,82,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,
	1,83,1,83,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,86,1,
	86,1,86,1,86,1,86,1,87,1,87,1,87,1,87,1,87,1,88,1,88,1,88,1,88,1,88,1,88,
	1,88,1,88,1,88,1,88,1,89,1,89,1,89,1,89,1,89,1,89,1,90,1,90,1,90,1,90,1,
	90,1,90,1,90,1,90,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,92,1,92,1,92,1,92,
	1,92,1,92,1,92,1,92,1,92,1,93,1,93,1,93,1,93,1,93,1,93,1,94,1,94,1,94,1,
	94,1,94,1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,96,1,96,
	1,96,1,96,1,96,1,96,1,96,1,97,1,97,1,97,1,97,1,97,1,98,1,98,1,98,1,99,1,
	99,1,99,1,99,1,99,1,99,1,99,1,100,1,100,1,100,1,101,1,101,1,101,1,101,1,
	101,1,101,1,101,1,101,1,101,1,101,1,102,1,102,1,102,1,102,1,102,1,102,1,
	102,1,102,1,103,1,103,1,103,1,103,1,103,1,103,1,104,1,104,1,104,1,104,1,
	104,1,104,1,105,1,105,1,105,1,105,1,105,1,105,1,105,1,106,1,106,1,106,1,
	106,1,106,1,106,1,106,1,106,1,106,1,106,1,107,1,107,1,107,1,107,1,107,1,
	107,1,107,1,107,1,107,1,108,1,108,1,108,1,108,1,108,1,109,1,109,1,109,1,
	109,1,109,1,109,1,109,1,109,1,110,1,110,1,110,1,111,1,111,1,111,1,112,1,
	112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,113,1,113,1,113,1,
	113,1,113,1,114,1,114,1,114,1,114,1,114,1,115,1,115,1,115,1,115,1,115,1,
	116,1,116,1,116,1,116,1,116,1,116,1,116,1,116,1,117,1,117,1,117,1,117,1,
	117,1,118,1,118,1,118,1,118,1,118,1,118,1,119,1,119,1,119,1,119,1,119,1,
	120,1,120,1,120,1,120,1,120,1,120,1,121,1,121,1,121,1,121,1,121,1,121,1,
	122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,123,1,123,1,
	123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,
	123,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,125,1,125,1,125,1,
	125,1,126,1,126,1,126,1,126,1,126,1,126,1,127,1,127,1,127,1,127,1,127,1,
	127,1,127,1,127,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,129,1,
	129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,
	129,1,129,1,129,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,
	130,1,130,1,130,1,130,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,
	131,1,132,1,132,1,132,1,132,1,132,1,132,1,133,1,133,1,133,1,133,1,133,1,
	133,1,133,1,134,1,134,1,134,1,134,1,134,1,134,1,135,1,135,1,135,1,135,1,
	135,1,135,1,135,1,135,1,136,1,136,1,136,1,136,1,136,1,137,1,137,1,137,1,
	137,1,138,1,138,1,138,1,138,1,139,1,139,1,139,1,139,1,139,1,140,1,140,1,
	140,1,140,1,140,1,141,1,141,1,141,1,142,1,142,1,142,1,142,1,142,1,143,1,
	143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,144,1,144,1,144,1,
	144,1,145,1,145,1,145,1,145,1,145,1,146,1,146,1,146,1,146,1,146,1,146,1,
	146,1,147,1,147,1,147,1,147,1,147,1,147,1,148,1,148,1,148,1,148,1,148,1,
	148,1,148,1,149,1,149,1,149,1,149,1,149,1,150,1,150,1,150,1,151,1,151,1,
	151,1,151,1,152,1,152,1,152,1,152,1,152,1,153,1,153,1,153,1,153,1,153,1,
	153,1,153,1,154,1,154,1,154,1,155,1,155,1,155,1,155,1,155,1,155,1,156,1,
	156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,157,1,157,1,
	157,1,157,1,157,1,157,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,159,1,
	159,1,159,1,159,1,159,1,160,1,160,1,160,1,160,1,160,1,160,1,160,1,160,1,
	160,1,160,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,
	161,1,162,1,162,1,162,1,162,1,162,1,163,1,163,1,163,1,163,1,163,1,164,1,
	164,1,164,1,164,1,164,1,164,1,164,1,164,1,165,1,165,1,165,1,165,1,166,1,
	166,1,166,1,166,1,166,1,166,1,166,1,166,1,167,1,167,1,167,1,167,1,167,1,
	167,1,167,1,167,1,167,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,
	168,1,168,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,
	170,1,170,1,170,1,170,1,170,1,170,1,170,1,170,1,171,1,171,1,171,1,171,1,
	171,1,171,1,171,1,171,1,171,1,171,1,171,1,172,1,172,1,172,1,172,1,172,1,
	172,1,172,1,172,1,172,1,172,1,172,1,173,1,173,1,173,1,173,1,173,1,173,1,
	174,1,174,1,174,1,174,1,174,1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,
	175,1,175,1,175,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,177,1,
	177,1,177,1,177,1,177,1,177,1,177,1,178,1,178,1,178,1,178,1,178,1,178,1,
	178,1,178,1,178,1,178,1,178,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,
	179,1,180,1,180,1,180,1,180,1,180,1,180,1,181,1,181,1,181,1,181,1,181,1,
	181,1,181,1,181,1,182,1,182,1,182,1,182,1,182,1,182,1,182,1,182,1,182,1,
	183,1,183,1,183,1,183,1,183,1,183,1,183,1,184,1,184,1,184,1,184,1,184,1,
	184,1,185,1,185,1,185,1,185,1,185,1,186,1,186,1,186,1,186,1,186,1,186,1,
	187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,188,1,188,1,188,1,
	188,1,188,1,188,1,188,1,189,1,189,1,189,1,189,1,190,1,190,1,190,1,190,1,
	190,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,192,1,192,1,192,1,
	192,1,192,1,192,1,192,1,193,1,193,1,193,1,193,1,193,1,193,1,193,1,193,1,
	194,1,194,1,194,1,194,1,194,1,194,1,194,1,195,1,195,1,195,1,195,1,195,1,
	195,1,195,1,195,1,195,1,196,1,196,1,196,1,196,1,196,1,197,1,197,1,197,1,
	197,1,197,1,197,1,197,1,198,1,198,1,198,1,198,1,198,1,198,1,198,1,198,1,
	198,1,198,1,198,1,198,1,198,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,
	199,1,200,1,200,1,200,1,200,1,201,1,201,1,201,1,201,1,201,1,202,1,202,1,
	202,1,202,1,202,1,203,1,203,1,203,1,203,1,203,1,204,1,204,1,204,1,204,1,
	204,1,204,1,205,1,205,1,205,1,205,1,205,1,205,1,206,1,206,1,206,1,206,1,
	206,1,206,1,206,1,207,1,207,1,207,1,207,1,207,1,207,1,207,1,207,1,207,1,
	207,1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,209,1,209,1,209,1,209,1,
	209,1,209,1,210,1,210,1,210,1,210,1,210,1,210,1,210,1,211,1,211,1,211,1,
	211,1,211,1,211,1,211,1,211,1,211,1,211,1,211,1,211,1,212,1,212,1,212,1,
	212,1,212,1,213,1,213,1,213,1,213,1,213,1,214,1,214,1,214,1,214,1,214,1,
	215,1,215,1,215,1,215,1,215,1,216,1,216,1,216,1,216,1,216,1,216,1,216,1,
	216,1,216,1,216,1,217,1,217,1,217,1,218,1,218,1,218,1,218,1,218,1,218,1,
	218,1,218,1,218,1,218,1,218,1,218,1,219,1,219,1,219,1,219,1,219,1,220,1,
	220,1,220,1,220,1,220,1,220,1,220,1,220,1,220,1,221,1,221,1,221,1,221,1,
	221,1,222,1,222,1,222,1,222,1,222,1,222,1,222,1,222,1,223,1,223,1,223,1,
	223,1,223,1,223,1,223,1,223,1,223,1,223,1,224,1,224,1,224,1,224,1,224,1,
	224,1,224,1,224,1,224,1,224,1,224,1,224,1,225,1,225,1,225,1,225,1,225,1,
	225,1,226,1,226,1,226,1,226,1,226,1,226,1,226,1,226,1,226,1,226,1,227,1,
	227,1,227,1,227,1,227,1,227,1,227,1,228,1,228,1,228,1,228,1,228,1,228,1,
	228,1,229,1,229,1,229,1,229,1,230,1,230,1,230,1,230,1,230,1,231,1,231,1,
	231,1,231,1,231,1,231,1,232,1,232,1,232,1,232,1,232,1,232,1,232,1,232,1,
	232,1,233,1,233,1,233,1,233,1,233,1,233,1,233,1,234,1,234,1,234,1,234,1,
	234,1,234,1,234,1,234,1,235,1,235,1,235,1,235,1,235,1,236,1,236,1,236,1,
	236,1,236,1,237,1,237,1,237,1,237,1,237,1,237,1,238,1,238,1,238,1,238,1,
	238,1,238,1,238,1,239,1,239,1,239,1,239,1,239,1,240,1,240,1,240,1,240,1,
	240,1,240,1,240,1,240,1,241,1,241,1,241,1,241,1,241,1,242,1,242,1,242,1,
	242,1,242,1,242,1,243,1,243,1,243,1,243,1,243,1,244,1,244,1,244,1,244,1,
	244,1,245,1,245,1,246,1,246,1,246,1,246,3,246,2229,8,246,1,247,1,247,1,
	248,1,248,1,248,1,249,1,249,1,250,1,250,1,250,1,251,1,251,1,252,1,252,1,
	253,1,253,1,254,1,254,1,255,1,255,1,256,1,256,1,256,1,257,1,257,1,258,1,
	258,1,258,1,258,5,258,2260,8,258,10,258,12,258,2263,9,258,1,258,1,258,1,
	259,1,259,1,259,1,259,1,259,1,259,1,259,5,259,2274,8,259,10,259,12,259,
	2277,9,259,1,259,1,259,1,260,1,260,1,260,1,260,5,260,2285,8,260,10,260,
	12,260,2288,9,260,1,260,1,260,1,261,4,261,2293,8,261,11,261,12,261,2294,
	1,262,4,262,2298,8,262,11,262,12,262,2299,1,262,1,262,5,262,2304,8,262,
	10,262,12,262,2307,9,262,1,262,1,262,4,262,2311,8,262,11,262,12,262,2312,
	3,262,2315,8,262,1,263,4,263,2318,8,263,11,263,12,263,2319,1,263,1,263,
	5,263,2324,8,263,10,263,12,263,2327,9,263,3,263,2329,8,263,1,263,1,263,
	1,263,1,263,4,263,2335,8,263,11,263,12,263,2336,1,263,1,263,3,263,2341,
	8,263,1,264,1,264,3,264,2345,8,264,1,264,1,264,1,264,5,264,2350,8,264,10,
	264,12,264,2353,9,264,1,265,1,265,1,265,1,265,4,265,2359,8,265,11,265,12,
	265,2360,1,266,1,266,1,266,1,266,5,266,2367,8,266,10,266,12,266,2370,9,
	266,1,266,1,266,1,267,1,267,1,267,1,267,5,267,2378,8,267,10,267,12,267,
	2381,9,267,1,267,1,267,1,268,1,268,1,269,1,269,3,269,2389,8,269,1,269,4,
	269,2392,8,269,11,269,12,269,2393,1,270,1,270,1,271,1,271,1,272,1,272,1,
	272,1,272,5,272,2404,8,272,10,272,12,272,2407,9,272,1,272,3,272,2410,8,
	272,1,272,3,272,2413,8,272,1,272,1,272,1,273,1,273,1,273,1,273,5,273,2421,
	8,273,10,273,12,273,2424,9,273,1,273,1,273,1,273,1,273,1,273,1,274,4,274,
	2432,8,274,11,274,12,274,2433,1,274,1,274,1,275,1,275,1,2422,0,276,1,1,
	3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,
	31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,
	55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,36,73,37,75,38,77,39,
	79,40,81,41,83,42,85,43,87,44,89,45,91,46,93,47,95,48,97,49,99,50,101,51,
	103,52,105,53,107,54,109,55,111,56,113,57,115,58,117,59,119,60,121,61,123,
	62,125,63,127,64,129,65,131,66,133,67,135,68,137,69,139,70,141,71,143,72,
	145,73,147,74,149,75,151,76,153,77,155,78,157,79,159,80,161,81,163,82,165,
	83,167,84,169,85,171,86,173,87,175,88,177,89,179,90,181,91,183,92,185,93,
	187,94,189,95,191,96,193,97,195,98,197,99,199,100,201,101,203,102,205,103,
	207,104,209,105,211,106,213,107,215,108,217,109,219,110,221,111,223,112,
	225,113,227,114,229,115,231,116,233,117,235,118,237,119,239,120,241,121,
	243,122,245,123,247,124,249,125,251,126,253,127,255,128,257,129,259,130,
	261,131,263,132,265,133,267,134,269,135,271,136,273,137,275,138,277,139,
	279,140,281,141,283,142,285,143,287,144,289,145,291,146,293,147,295,148,
	297,149,299,150,301,151,303,152,305,153,307,154,309,155,311,156,313,157,
	315,158,317,159,319,160,321,161,323,162,325,163,327,164,329,165,331,166,
	333,167,335,168,337,169,339,170,341,171,343,172,345,173,347,174,349,175,
	351,176,353,177,355,178,357,179,359,180,361,181,363,182,365,183,367,184,
	369,185,371,186,373,187,375,188,377,189,379,190,381,191,383,192,385,193,
	387,194,389,195,391,196,393,197,395,198,397,199,399,200,401,201,403,202,
	405,203,407,204,409,205,411,206,413,207,415,208,417,209,419,210,421,211,
	423,212,425,213,427,214,429,215,431,216,433,217,435,218,437,219,439,220,
	441,221,443,222,445,223,447,224,449,225,451,226,453,227,455,228,457,229,
	459,230,461,231,463,232,465,233,467,234,469,235,471,236,473,237,475,238,
	477,239,479,240,481,241,483,242,485,243,487,244,489,245,491,246,493,247,
	495,248,497,249,499,250,501,251,503,252,505,253,507,254,509,255,511,256,
	513,257,515,258,517,259,519,260,521,261,523,262,525,263,527,264,529,265,
	531,266,533,267,535,268,537,269,539,0,541,0,543,0,545,270,547,271,549,272,
	551,273,1,0,8,1,0,39,39,1,0,34,34,1,0,96,96,2,0,43,43,45,45,1,0,48,57,1,
	0,65,90,2,0,10,10,13,13,3,0,9,10,13,13,32,32,2469,0,1,1,0,0,0,0,3,1,0,0,
	0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,
	0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,
	0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,
	0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,
	0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,
	0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,
	0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,
	0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,
	0,93,1,0,0,0,0,95,1,0,0,0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,
	1,0,0,0,0,105,1,0,0,0,0,107,1,0,0,0,0,109,1,0,0,0,0,111,1,0,0,0,0,113,1,
	0,0,0,0,115,1,0,0,0,0,117,1,0,0,0,0,119,1,0,0,0,0,121,1,0,0,0,0,123,1,0,
	0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,0,0,131,1,0,0,0,0,133,1,0,0,
	0,0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,0,0,0,141,1,0,0,0,0,143,1,0,0,0,
	0,145,1,0,0,0,0,147,1,0,0,0,0,149,1,0,0,0,0,151,1,0,0,0,0,153,1,0,0,0,0,
	155,1,0,0,0,0,157,1,0,0,0,0,159,1,0,0,0,0,161,1,0,0,0,0,163,1,0,0,0,0,165,
	1,0,0,0,0,167,1,0,0,0,0,169,1,0,0,0,0,171,1,0,0,0,0,173,1,0,0,0,0,175,1,
	0,0,0,0,177,1,0,0,0,0,179,1,0,0,0,0,181,1,0,0,0,0,183,1,0,0,0,0,185,1,0,
	0,0,0,187,1,0,0,0,0,189,1,0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,0,195,1,0,0,
	0,0,197,1,0,0,0,0,199,1,0,0,0,0,201,1,0,0,0,0,203,1,0,0,0,0,205,1,0,0,0,
	0,207,1,0,0,0,0,209,1,0,0,0,0,211,1,0,0,0,0,213,1,0,0,0,0,215,1,0,0,0,0,
	217,1,0,0,0,0,219,1,0,0,0,0,221,1,0,0,0,0,223,1,0,0,0,0,225,1,0,0,0,0,227,
	1,0,0,0,0,229,1,0,0,0,0,231,1,0,0,0,0,233,1,0,0,0,0,235,1,0,0,0,0,237,1,
	0,0,0,0,239,1,0,0,0,0,241,1,0,0,0,0,243,1,0,0,0,0,245,1,0,0,0,0,247,1,0,
	0,0,0,249,1,0,0,0,0,251,1,0,0,0,0,253,1,0,0,0,0,255,1,0,0,0,0,257,1,0,0,
	0,0,259,1,0,0,0,0,261,1,0,0,0,0,263,1,0,0,0,0,265,1,0,0,0,0,267,1,0,0,0,
	0,269,1,0,0,0,0,271,1,0,0,0,0,273,1,0,0,0,0,275,1,0,0,0,0,277,1,0,0,0,0,
	279,1,0,0,0,0,281,1,0,0,0,0,283,1,0,0,0,0,285,1,0,0,0,0,287,1,0,0,0,0,289,
	1,0,0,0,0,291,1,0,0,0,0,293,1,0,0,0,0,295,1,0,0,0,0,297,1,0,0,0,0,299,1,
	0,0,0,0,301,1,0,0,0,0,303,1,0,0,0,0,305,1,0,0,0,0,307,1,0,0,0,0,309,1,0,
	0,0,0,311,1,0,0,0,0,313,1,0,0,0,0,315,1,0,0,0,0,317,1,0,0,0,0,319,1,0,0,
	0,0,321,1,0,0,0,0,323,1,0,0,0,0,325,1,0,0,0,0,327,1,0,0,0,0,329,1,0,0,0,
	0,331,1,0,0,0,0,333,1,0,0,0,0,335,1,0,0,0,0,337,1,0,0,0,0,339,1,0,0,0,0,
	341,1,0,0,0,0,343,1,0,0,0,0,345,1,0,0,0,0,347,1,0,0,0,0,349,1,0,0,0,0,351,
	1,0,0,0,0,353,1,0,0,0,0,355,1,0,0,0,0,357,1,0,0,0,0,359,1,0,0,0,0,361,1,
	0,0,0,0,363,1,0,0,0,0,365,1,0,0,0,0,367,1,0,0,0,0,369,1,0,0,0,0,371,1,0,
	0,0,0,373,1,0,0,0,0,375,1,0,0,0,0,377,1,0,0,0,0,379,1,0,0,0,0,381,1,0,0,
	0,0,383,1,0,0,0,0,385,1,0,0,0,0,387,1,0,0,0,0,389,1,0,0,0,0,391,1,0,0,0,
	0,393,1,0,0,0,0,395,1,0,0,0,0,397,1,0,0,0,0,399,1,0,0,0,0,401,1,0,0,0,0,
	403,1,0,0,0,0,405,1,0,0,0,0,407,1,0,0,0,0,409,1,0,0,0,0,411,1,0,0,0,0,413,
	1,0,0,0,0,415,1,0,0,0,0,417,1,0,0,0,0,419,1,0,0,0,0,421,1,0,0,0,0,423,1,
	0,0,0,0,425,1,0,0,0,0,427,1,0,0,0,0,429,1,0,0,0,0,431,1,0,0,0,0,433,1,0,
	0,0,0,435,1,0,0,0,0,437,1,0,0,0,0,439,1,0,0,0,0,441,1,0,0,0,0,443,1,0,0,
	0,0,445,1,0,0,0,0,447,1,0,0,0,0,449,1,0,0,0,0,451,1,0,0,0,0,453,1,0,0,0,
	0,455,1,0,0,0,0,457,1,0,0,0,0,459,1,0,0,0,0,461,1,0,0,0,0,463,1,0,0,0,0,
	465,1,0,0,0,0,467,1,0,0,0,0,469,1,0,0,0,0,471,1,0,0,0,0,473,1,0,0,0,0,475,
	1,0,0,0,0,477,1,0,0,0,0,479,1,0,0,0,0,481,1,0,0,0,0,483,1,0,0,0,0,485,1,
	0,0,0,0,487,1,0,0,0,0,489,1,0,0,0,0,491,1,0,0,0,0,493,1,0,0,0,0,495,1,0,
	0,0,0,497,1,0,0,0,0,499,1,0,0,0,0,501,1,0,0,0,0,503,1,0,0,0,0,505,1,0,0,
	0,0,507,1,0,0,0,0,509,1,0,0,0,0,511,1,0,0,0,0,513,1,0,0,0,0,515,1,0,0,0,
	0,517,1,0,0,0,0,519,1,0,0,0,0,521,1,0,0,0,0,523,1,0,0,0,0,525,1,0,0,0,0,
	527,1,0,0,0,0,529,1,0,0,0,0,531,1,0,0,0,0,533,1,0,0,0,0,535,1,0,0,0,0,537,
	1,0,0,0,0,545,1,0,0,0,0,547,1,0,0,0,0,549,1,0,0,0,0,551,1,0,0,0,1,553,1,
	0,0,0,3,555,1,0,0,0,5,557,1,0,0,0,7,559,1,0,0,0,9,561,1,0,0,0,11,566,1,
	0,0,0,13,569,1,0,0,0,15,571,1,0,0,0,17,573,1,0,0,0,19,575,1,0,0,0,21,577,
	1,0,0,0,23,579,1,0,0,0,25,582,1,0,0,0,27,585,1,0,0,0,29,587,1,0,0,0,31,
	589,1,0,0,0,33,592,1,0,0,0,35,596,1,0,0,0,37,602,1,0,0,0,39,608,1,0,0,0,
	41,612,1,0,0,0,43,618,1,0,0,0,45,626,1,0,0,0,47,630,1,0,0,0,49,634,1,0,
	0,0,51,640,1,0,0,0,53,643,1,0,0,0,55,647,1,0,0,0,57,650,1,0,0,0,59,664,
	1,0,0,0,61,674,1,0,0,0,63,682,1,0,0,0,65,685,1,0,0,0,67,690,1,0,0,0,69,
	698,1,0,0,0,71,703,1,0,0,0,73,708,1,0,0,0,75,717,1,0,0,0,77,724,1,0,0,0,
	79,732,1,0,0,0,81,740,1,0,0,0,83,747,1,0,0,0,85,757,1,0,0,0,87,768,1,0,
	0,0,89,775,1,0,0,0,91,781,1,0,0,0,93,786,1,0,0,0,95,794,1,0,0,0,97,810,
	1,0,0,0,99,823,1,0,0,0,101,836,1,0,0,0,103,849,1,0,0,0,105,864,1,0,0,0,
	107,877,1,0,0,0,109,895,1,0,0,0,111,908,1,0,0,0,113,913,1,0,0,0,115,918,
	1,0,0,0,117,922,1,0,0,0,119,933,1,0,0,0,121,941,1,0,0,0,123,948,1,0,0,0,
	125,953,1,0,0,0,127,962,1,0,0,0,129,969,1,0,0,0,131,978,1,0,0,0,133,990,
	1,0,0,0,135,997,1,0,0,0,137,1002,1,0,0,0,139,1007,1,0,0,0,141,1013,1,0,
	0,0,143,1017,1,0,0,0,145,1024,1,0,0,0,147,1031,1,0,0,0,149,1041,1,0,0,0,
	151,1049,1,0,0,0,153,1056,1,0,0,0,155,1064,1,0,0,0,157,1072,1,0,0,0,159,
	1078,1,0,0,0,161,1084,1,0,0,0,163,1091,1,0,0,0,165,1097,1,0,0,0,167,1103,
	1,0,0,0,169,1113,1,0,0,0,171,1117,1,0,0,0,173,1124,1,0,0,0,175,1129,1,0,
	0,0,177,1134,1,0,0,0,179,1144,1,0,0,0,181,1150,1,0,0,0,183,1158,1,0,0,0,
	185,1165,1,0,0,0,187,1174,1,0,0,0,189,1180,1,0,0,0,191,1189,1,0,0,0,193,
	1196,1,0,0,0,195,1203,1,0,0,0,197,1208,1,0,0,0,199,1211,1,0,0,0,201,1218,
	1,0,0,0,203,1221,1,0,0,0,205,1231,1,0,0,0,207,1239,1,0,0,0,209,1245,1,0,
	0,0,211,1251,1,0,0,0,213,1258,1,0,0,0,215,1268,1,0,0,0,217,1277,1,0,0,0,
	219,1282,1,0,0,0,221,1290,1,0,0,0,223,1293,1,0,0,0,225,1296,1,0,0,0,227,
	1306,1,0,0,0,229,1311,1,0,0,0,231,1316,1,0,0,0,233,1321,1,0,0,0,235,1329,
	1,0,0,0,237,1334,1,0,0,0,239,1340,1,0,0,0,241,1345,1,0,0,0,243,1351,1,0,
	0,0,245,1357,1,0,0,0,247,1367,1,0,0,0,249,1382,1,0,0,0,251,1390,1,0,0,0,
	253,1394,1,0,0,0,255,1400,1,0,0,0,257,1408,1,0,0,0,259,1416,1,0,0,0,261,
	1432,1,0,0,0,263,1445,1,0,0,0,265,1454,1,0,0,0,267,1460,1,0,0,0,269,1467,
	1,0,0,0,271,1473,1,0,0,0,273,1481,1,0,0,0,275,1486,1,0,0,0,277,1490,1,0,
	0,0,279,1494,1,0,0,0,281,1499,1,0,0,0,283,1504,1,0,0,0,285,1507,1,0,0,0,
	287,1512,1,0,0,0,289,1522,1,0,0,0,291,1526,1,0,0,0,293,1531,1,0,0,0,295,
	1538,1,0,0,0,297,1544,1,0,0,0,299,1551,1,0,0,0,301,1556,1,0,0,0,303,1559,
	1,0,0,0,305,1563,1,0,0,0,307,1568,1,0,0,0,309,1575,1,0,0,0,311,1578,1,0,
	0,0,313,1584,1,0,0,0,315,1595,1,0,0,0,317,1601,1,0,0,0,319,1608,1,0,0,0,
	321,1613,1,0,0,0,323,1623,1,0,0,0,325,1634,1,0,0,0,327,1639,1,0,0,0,329,
	1644,1,0,0,0,331,1652,1,0,0,0,333,1656,1,0,0,0,335,1664,1,0,0,0,337,1673,
	1,0,0,0,339,1683,1,0,0,0,341,1693,1,0,0,0,343,1701,1,0,0,0,345,1712,1,0,
	0,0,347,1723,1,0,0,0,349,1729,1,0,0,0,351,1734,1,0,0,0,353,1744,1,0,0,0,
	355,1752,1,0,0,0,357,1759,1,0,0,0,359,1770,1,0,0,0,361,1778,1,0,0,0,363,
	1784,1,0,0,0,365,1792,1,0,0,0,367,1801,1,0,0,0,369,1808,1,0,0,0,371,1814,
	1,0,0,0,373,1819,1,0,0,0,375,1825,1,0,0,0,377,1834,1,0,0,0,379,1841,1,0,
	0,0,381,1845,1,0,0,0,383,1850,1,0,0,0,385,1858,1,0,0,0,387,1865,1,0,0,0,
	389,1873,1,0,0,0,391,1880,1,0,0,0,393,1889,1,0,0,0,395,1894,1,0,0,0,397,
	1901,1,0,0,0,399,1914,1,0,0,0,401,1922,1,0,0,0,403,1926,1,0,0,0,405,1931,
	1,0,0,0,407,1936,1,0,0,0,409,1941,1,0,0,0,411,1947,1,0,0,0,413,1953,1,0,
	0,0,415,1960,1,0,0,0,417,1970,1,0,0,0,419,1977,1,0,0,0,421,1983,1,0,0,0,
	423,1990,1,0,0,0,425,2002,1,0,0,0,427,2007,1,0,0,0,429,2012,1,0,0,0,431,
	2017,1,0,0,0,433,2022,1,0,0,0,435,2032,1,0,0,0,437,2035,1,0,0,0,439,2047,
	1,0,0,0,441,2052,1,0,0,0,443,2061,1,0,0,0,445,2066,1,0,0,0,447,2074,1,0,
	0,0,449,2084,1,0,0,0,451,2096,1,0,0,0,453,2102,1,0,0,0,455,2112,1,0,0,0,
	457,2119,1,0,0,0,459,2126,1,0,0,0,461,2130,1,0,0,0,463,2135,1,0,0,0,465,
	2141,1,0,0,0,467,2150,1,0,0,0,469,2157,1,0,0,0,471,2165,1,0,0,0,473,2170,
	1,0,0,0,475,2175,1,0,0,0,477,2181,1,0,0,0,479,2188,1,0,0,0,481,2193,1,0,
	0,0,483,2201,1,0,0,0,485,2206,1,0,0,0,487,2212,1,0,0,0,489,2217,1,0,0,0,
	491,2222,1,0,0,0,493,2228,1,0,0,0,495,2230,1,0,0,0,497,2232,1,0,0,0,499,
	2235,1,0,0,0,501,2237,1,0,0,0,503,2240,1,0,0,0,505,2242,1,0,0,0,507,2244,
	1,0,0,0,509,2246,1,0,0,0,511,2248,1,0,0,0,513,2250,1,0,0,0,515,2253,1,0,
	0,0,517,2255,1,0,0,0,519,2266,1,0,0,0,521,2280,1,0,0,0,523,2292,1,0,0,0,
	525,2314,1,0,0,0,527,2340,1,0,0,0,529,2344,1,0,0,0,531,2354,1,0,0,0,533,
	2362,1,0,0,0,535,2373,1,0,0,0,537,2384,1,0,0,0,539,2386,1,0,0,0,541,2395,
	1,0,0,0,543,2397,1,0,0,0,545,2399,1,0,0,0,547,2416,1,0,0,0,549,2431,1,0,
	0,0,551,2437,1,0,0,0,553,554,5,46,0,0,554,2,1,0,0,0,555,556,5,40,0,0,556,
	4,1,0,0,0,557,558,5,41,0,0,558,6,1,0,0,0,559,560,5,44,0,0,560,8,1,0,0,0,
	561,562,5,83,0,0,562,563,5,75,0,0,563,564,5,73,0,0,564,565,5,80,0,0,565,
	10,1,0,0,0,566,567,5,45,0,0,567,568,5,62,0,0,568,12,1,0,0,0,569,570,5,91,
	0,0,570,14,1,0,0,0,571,572,5,93,0,0,572,16,1,0,0,0,573,574,5,124,0,0,574,
	18,1,0,0,0,575,576,5,94,0,0,576,20,1,0,0,0,577,578,5,36,0,0,578,22,1,0,
	0,0,579,580,5,123,0,0,580,581,5,45,0,0,581,24,1,0,0,0,582,583,5,45,0,0,
	583,584,5,125,0,0,584,26,1,0,0,0,585,586,5,123,0,0,586,28,1,0,0,0,587,588,
	5,125,0,0,588,30,1,0,0,0,589,590,5,61,0,0,590,591,5,62,0,0,591,32,1,0,0,
	0,592,593,5,65,0,0,593,594,5,68,0,0,594,595,5,68,0,0,595,34,1,0,0,0,596,
	597,5,65,0,0,597,598,5,68,0,0,598,599,5,77,0,0,599,600,5,73,0,0,600,601,
	5,78,0,0,601,36,1,0,0,0,602,603,5,65,0,0,603,604,5,70,0,0,604,605,5,84,
	0,0,605,606,5,69,0,0,606,607,5,82,0,0,607,38,1,0,0,0,608,609,5,65,0,0,609,
	610,5,76,0,0,610,611,5,76,0,0,611,40,1,0,0,0,612,613,5,65,0,0,613,614,5,
	76,0,0,614,615,5,84,0,0,615,616,5,69,0,0,616,617,5,82,0,0,617,42,1,0,0,
	0,618,619,5,65,0,0,619,620,5,78,0,0,620,621,5,65,0,0,621,622,5,76,0,0,622,
	623,5,89,0,0,623,624,5,90,0,0,624,625,5,69,0,0,625,44,1,0,0,0,626,627,5,
	65,0,0,627,628,5,78,0,0,628,629,5,68,0,0,629,46,1,0,0,0,630,631,5,65,0,
	0,631,632,5,78,0,0,632,633,5,89,0,0,633,48,1,0,0,0,634,635,5,65,0,0,635,
	636,5,82,0,0,636,637,5,82,0,0,637,638,5,65,0,0,638,639,5,89,0,0,639,50,
	1,0,0,0,640,641,5,65,0,0,641,642,5,83,0,0,642,52,1,0,0,0,643,644,5,65,0,
	0,644,645,5,83,0,0,645,646,5,67,0,0,646,54,1,0,0,0,647,648,5,65,0,0,648,
	649,5,84,0,0,649,56,1,0,0,0,650,651,5,65,0,0,651,652,5,85,0,0,652,653,5,
	84,0,0,653,654,5,72,0,0,654,655,5,79,0,0,655,656,5,82,0,0,656,657,5,73,
	0,0,657,658,5,90,0,0,658,659,5,65,0,0,659,660,5,84,0,0,660,661,5,73,0,0,
	661,662,5,79,0,0,662,663,5,78,0,0,663,58,1,0,0,0,664,665,5,66,0,0,665,666,
	5,69,0,0,666,667,5,82,0,0,667,668,5,78,0,0,668,669,5,79,0,0,669,670,5,85,
	0,0,670,671,5,76,0,0,671,672,5,76,0,0,672,673,5,73,0,0,673,60,1,0,0,0,674,
	675,5,66,0,0,675,676,5,69,0,0,676,677,5,84,0,0,677,678,5,87,0,0,678,679,
	5,69,0,0,679,680,5,69,0,0,680,681,5,78,0,0,681,62,1,0,0,0,682,683,5,66,
	0,0,683,684,5,89,0,0,684,64,1,0,0,0,685,686,5,67,0,0,686,687,5,65,0,0,687,
	688,5,76,0,0,688,689,5,76,0,0,689,66,1,0,0,0,690,691,5,67,0,0,691,692,5,
	65,0,0,692,693,5,83,0,0,693,694,5,67,0,0,694,695,5,65,0,0,695,696,5,68,
	0,0,696,697,5,69,0,0,697,68,1,0,0,0,698,699,5,67,0,0,699,700,5,65,0,0,700,
	701,5,83,0,0,701,702,5,69,0,0,702,70,1,0,0,0,703,704,5,67,0,0,704,705,5,
	65,0,0,705,706,5,83,0,0,706,707,5,84,0,0,707,72,1,0,0,0,708,709,5,67,0,
	0,709,710,5,65,0,0,710,711,5,84,0,0,711,712,5,65,0,0,712,713,5,76,0,0,713,
	714,5,79,0,0,714,715,5,71,0,0,715,716,5,83,0,0,716,74,1,0,0,0,717,718,5,
	67,0,0,718,719,5,79,0,0,719,720,5,76,0,0,720,721,5,85,0,0,721,722,5,77,
	0,0,722,723,5,78,0,0,723,76,1,0,0,0,724,725,5,67,0,0,725,726,5,79,0,0,726,
	727,5,76,0,0,727,728,5,85,0,0,728,729,5,77,0,0,729,730,5,78,0,0,730,731,
	5,83,0,0,731,78,1,0,0,0,732,733,5,67,0,0,733,734,5,79,0,0,734,735,5,77,
	0,0,735,736,5,77,0,0,736,737,5,69,0,0,737,738,5,78,0,0,738,739,5,84,0,0,
	739,80,1,0,0,0,740,741,5,67,0,0,741,742,5,79,0,0,742,743,5,77,0,0,743,744,
	5,77,0,0,744,745,5,73,0,0,745,746,5,84,0,0,746,82,1,0,0,0,747,748,5,67,
	0,0,748,749,5,79,0,0,749,750,5,77,0,0,750,751,5,77,0,0,751,752,5,73,0,0,
	752,753,5,84,0,0,753,754,5,84,0,0,754,755,5,69,0,0,755,756,5,68,0,0,756,
	84,1,0,0,0,757,758,5,67,0,0,758,759,5,79,0,0,759,760,5,78,0,0,760,761,5,
	83,0,0,761,762,5,84,0,0,762,763,5,82,0,0,763,764,5,65,0,0,764,765,5,73,
	0,0,765,766,5,78,0,0,766,767,5,84,0,0,767,86,1,0,0,0,768,769,5,67,0,0,769,
	770,5,82,0,0,770,771,5,69,0,0,771,772,5,65,0,0,772,773,5,84,0,0,773,774,
	5,69,0,0,774,88,1,0,0,0,775,776,5,67,0,0,776,777,5,82,0,0,777,778,5,79,
	0,0,778,779,5,83,0,0,779,780,5,83,0,0,780,90,1,0,0,0,781,782,5,67,0,0,782,
	783,5,85,0,0,783,784,5,66,0,0,784,785,5,69,0,0,785,92,1,0,0,0,786,787,5,
	67,0,0,787,788,5,85,0,0,788,789,5,82,0,0,789,790,5,82,0,0,790,791,5,69,
	0,0,791,792,5,78,0,0,792,793,5,84,0,0,793,94,1,0,0,0,794,795,5,67,0,0,795,
	796,5,85,0,0,796,797,5,82,0,0,797,798,5,82,0,0,798,799,5,69,0,0,799,800,
	5,78,0,0,800,801,5,84,0,0,801,802,5,95,0,0,802,803,5,67,0,0,803,804,5,65,
	0,0,804,805,5,84,0,0,805,806,5,65,0,0,806,807,5,76,0,0,807,808,5,79,0,0,
	808,809,5,71,0,0,809,96,1,0,0,0,810,811,5,67,0,0,811,812,5,85,0,0,812,813,
	5,82,0,0,813,814,5,82,0,0,814,815,5,69,0,0,815,816,5,78,0,0,816,817,5,84,
	0,0,817,818,5,95,0,0,818,819,5,68,0,0,819,820,5,65,0,0,820,821,5,84,0,0,
	821,822,5,69,0,0,822,98,1,0,0,0,823,824,5,67,0,0,824,825,5,85,0,0,825,826,
	5,82,0,0,826,827,5,82,0,0,827,828,5,69,0,0,828,829,5,78,0,0,829,830,5,84,
	0,0,830,831,5,95,0,0,831,832,5,80,0,0,832,833,5,65,0,0,833,834,5,84,0,0,
	834,835,5,72,0,0,835,100,1,0,0,0,836,837,5,67,0,0,837,838,5,85,0,0,838,
	839,5,82,0,0,839,840,5,82,0,0,840,841,5,69,0,0,841,842,5,78,0,0,842,843,
	5,84,0,0,843,844,5,95,0,0,844,845,5,82,0,0,845,846,5,79,0,0,846,847,5,76,
	0,0,847,848,5,69,0,0,848,102,1,0,0,0,849,850,5,67,0,0,850,851,5,85,0,0,
	851,852,5,82,0,0,852,853,5,82,0,0,853,854,5,69,0,0,854,855,5,78,0,0,855,
	856,5,84,0,0,856,857,5,95,0,0,857,858,5,83,0,0,858,859,5,67,0,0,859,860,
	5,72,0,0,860,861,5,69,0,0,861,862,5,77,0,0,862,863,5,65,0,0,863,104,1,0,
	0,0,864,865,5,67,0,0,865,866,5,85,0,0,866,867,5,82,0,0,867,868,5,82,0,0,
	868,869,5,69,0,0,869,870,5,78,0,0,870,871,5,84,0,0,871,872,5,95,0,0,872,
	873,5,84,0,0,873,874,5,73,0,0,874,875,5,77,0,0,875,876,5,69,0,0,876,106,
	1,0,0,0,877,878,5,67,0,0,878,879,5,85,0,0,879,880,5,82,0,0,880,881,5,82,
	0,0,881,882,5,69,0,0,882,883,5,78,0,0,883,884,5,84,0,0,884,885,5,95,0,0,
	885,886,5,84,0,0,886,887,5,73,0,0,887,888,5,77,0,0,888,889,5,69,0,0,889,
	890,5,83,0,0,890,891,5,84,0,0,891,892,5,65,0,0,892,893,5,77,0,0,893,894,
	5,80,0,0,894,108,1,0,0,0,895,896,5,67,0,0,896,897,5,85,0,0,897,898,5,82,
	0,0,898,899,5,82,0,0,899,900,5,69,0,0,900,901,5,78,0,0,901,902,5,84,0,0,
	902,903,5,95,0,0,903,904,5,85,0,0,904,905,5,83,0,0,905,906,5,69,0,0,906,
	907,5,82,0,0,907,110,1,0,0,0,908,909,5,68,0,0,909,910,5,65,0,0,910,911,
	5,84,0,0,911,912,5,65,0,0,912,112,1,0,0,0,913,914,5,68,0,0,914,915,5,65,
	0,0,915,916,5,84,0,0,916,917,5,69,0,0,917,114,1,0,0,0,918,919,5,68,0,0,
	919,920,5,65,0,0,920,921,5,89,0,0,921,116,1,0,0,0,922,923,5,68,0,0,923,
	924,5,69,0,0,924,925,5,65,0,0,925,926,5,76,0,0,926,927,5,76,0,0,927,928,
	5,79,0,0,928,929,5,67,0,0,929,930,5,65,0,0,930,931,5,84,0,0,931,932,5,69,
	0,0,932,118,1,0,0,0,933,934,5,68,0,0,934,935,5,69,0,0,935,936,5,70,0,0,
	936,937,5,73,0,0,937,938,5,78,0,0,938,939,5,69,0,0,939,940,5,82,0,0,940,
	120,1,0,0,0,941,942,5,68,0,0,942,943,5,69,0,0,943,944,5,76,0,0,944,945,
	5,69,0,0,945,946,5,84,0,0,946,947,5,69,0,0,947,122,1,0,0,0,948,949,5,68,
	0,0,949,950,5,69,0,0,950,951,5,83,0,0,951,952,5,67,0,0,952,124,1,0,0,0,
	953,954,5,68,0,0,954,955,5,69,0,0,955,956,5,83,0,0,956,957,5,67,0,0,957,
	958,5,82,0,0,958,959,5,73,0,0,959,960,5,66,0,0,960,961,5,69,0,0,961,126,
	1,0,0,0,962,963,5,68,0,0,963,964,5,69,0,0,964,965,5,70,0,0,965,966,5,73,
	0,0,966,967,5,78,0,0,967,968,5,69,0,0,968,128,1,0,0,0,969,970,5,68,0,0,
	970,971,5,73,0,0,971,972,5,83,0,0,972,973,5,84,0,0,973,974,5,73,0,0,974,
	975,5,78,0,0,975,976,5,67,0,0,976,977,5,84,0,0,977,130,1,0,0,0,978,979,
	5,68,0,0,979,980,5,73,0,0,980,981,5,83,0,0,981,982,5,84,0,0,982,983,5,82,
	0,0,983,984,5,73,0,0,984,985,5,66,0,0,985,986,5,85,0,0,986,987,5,84,0,0,
	987,988,5,69,0,0,988,989,5,68,0,0,989,132,1,0,0,0,990,991,5,68,0,0,991,
	992,5,79,0,0,992,993,5,85,0,0,993,994,5,66,0,0,994,995,5,76,0,0,995,996,
	5,69,0,0,996,134,1,0,0,0,997,998,5,68,0,0,998,999,5,82,0,0,999,1000,5,79,
	0,0,1000,1001,5,80,0,0,1001,136,1,0,0,0,1002,1003,5,69,0,0,1003,1004,5,
	76,0,0,1004,1005,5,83,0,0,1005,1006,5,69,0,0,1006,138,1,0,0,0,1007,1008,
	5,69,0,0,1008,1009,5,77,0,0,1009,1010,5,80,0,0,1010,1011,5,84,0,0,1011,
	1012,5,89,0,0,1012,140,1,0,0,0,1013,1014,5,69,0,0,1014,1015,5,78,0,0,1015,
	1016,5,68,0,0,1016,142,1,0,0,0,1017,1018,5,69,0,0,1018,1019,5,83,0,0,1019,
	1020,5,67,0,0,1020,1021,5,65,0,0,1021,1022,5,80,0,0,1022,1023,5,69,0,0,
	1023,144,1,0,0,0,1024,1025,5,69,0,0,1025,1026,5,88,0,0,1026,1027,5,67,0,
	0,1027,1028,5,69,0,0,1028,1029,5,80,0,0,1029,1030,5,84,0,0,1030,146,1,0,
	0,0,1031,1032,5,69,0,0,1032,1033,5,88,0,0,1033,1034,5,67,0,0,1034,1035,
	5,76,0,0,1035,1036,5,85,0,0,1036,1037,5,68,0,0,1037,1038,5,73,0,0,1038,
	1039,5,78,0,0,1039,1040,5,71,0,0,1040,148,1,0,0,0,1041,1042,5,69,0,0,1042,
	1043,5,88,0,0,1043,1044,5,69,0,0,1044,1045,5,67,0,0,1045,1046,5,85,0,0,
	1046,1047,5,84,0,0,1047,1048,5,69,0,0,1048,150,1,0,0,0,1049,1050,5,69,0,
	0,1050,1051,5,88,0,0,1051,1052,5,73,0,0,1052,1053,5,83,0,0,1053,1054,5,
	84,0,0,1054,1055,5,83,0,0,1055,152,1,0,0,0,1056,1057,5,69,0,0,1057,1058,
	5,88,0,0,1058,1059,5,80,0,0,1059,1060,5,76,0,0,1060,1061,5,65,0,0,1061,
	1062,5,73,0,0,1062,1063,5,78,0,0,1063,154,1,0,0,0,1064,1065,5,69,0,0,1065,
	1066,5,88,0,0,1066,1067,5,84,0,0,1067,1068,5,82,0,0,1068,1069,5,65,0,0,
	1069,1070,5,67,0,0,1070,1071,5,84,0,0,1071,156,1,0,0,0,1072,1073,5,70,0,
	0,1073,1074,5,65,0,0,1074,1075,5,76,0,0,1075,1076,5,83,0,0,1076,1077,5,
	69,0,0,1077,158,1,0,0,0,1078,1079,5,70,0,0,1079,1080,5,69,0,0,1080,1081,
	5,84,0,0,1081,1082,5,67,0,0,1082,1083,5,72,0,0,1083,160,1,0,0,0,1084,1085,
	5,70,0,0,1085,1086,5,73,0,0,1086,1087,5,76,0,0,1087,1088,5,84,0,0,1088,
	1089,5,69,0,0,1089,1090,5,82,0,0,1090,162,1,0,0,0,1091,1092,5,70,0,0,1092,
	1093,5,73,0,0,1093,1094,5,78,0,0,1094,1095,5,65,0,0,1095,1096,5,76,0,0,
	1096,164,1,0,0,0,1097,1098,5,70,0,0,1098,1099,5,73,0,0,1099,1100,5,82,0,
	0,1100,1101,5,83,0,0,1101,1102,5,84,0,0,1102,166,1,0,0,0,1103,1104,5,70,
	0,0,1104,1105,5,79,0,0,1105,1106,5,76,0,0,1106,1107,5,76,0,0,1107,1108,
	5,79,0,0,1108,1109,5,87,0,0,1109,1110,5,73,0,0,1110,1111,5,78,0,0,1111,
	1112,5,71,0,0,1112,168,1,0,0,0,1113,1114,5,70,0,0,1114,1115,5,79,0,0,1115,
	1116,5,82,0,0,1116,170,1,0,0,0,1117,1118,5,70,0,0,1118,1119,5,79,0,0,1119,
	1120,5,82,0,0,1120,1121,5,77,0,0,1121,1122,5,65,0,0,1122,1123,5,84,0,0,
	1123,172,1,0,0,0,1124,1125,5,70,0,0,1125,1126,5,82,0,0,1126,1127,5,79,0,
	0,1127,1128,5,77,0,0,1128,174,1,0,0,0,1129,1130,5,70,0,0,1130,1131,5,85,
	0,0,1131,1132,5,76,0,0,1132,1133,5,76,0,0,1133,176,1,0,0,0,1134,1135,5,
	70,0,0,1135,1136,5,85,0,0,1136,1137,5,78,0,0,1137,1138,5,67,0,0,1138,1139,
	5,84,0,0,1139,1140,5,73,0,0,1140,1141,5,79,0,0,1141,1142,5,78,0,0,1142,
	1143,5,83,0,0,1143,178,1,0,0,0,1144,1145,5,71,0,0,1145,1146,5,82,0,0,1146,
	1147,5,65,0,0,1147,1148,5,78,0,0,1148,1149,5,84,0,0,1149,180,1,0,0,0,1150,
	1151,5,71,0,0,1151,1152,5,82,0,0,1152,1153,5,65,0,0,1153,1154,5,78,0,0,
	1154,1155,5,84,0,0,1155,1156,5,69,0,0,1156,1157,5,68,0,0,1157,182,1,0,0,
	0,1158,1159,5,71,0,0,1159,1160,5,82,0,0,1160,1161,5,65,0,0,1161,1162,5,
	78,0,0,1162,1163,5,84,0,0,1163,1164,5,83,0,0,1164,184,1,0,0,0,1165,1166,
	5,71,0,0,1166,1167,5,82,0,0,1167,1168,5,65,0,0,1168,1169,5,80,0,0,1169,
	1170,5,72,0,0,1170,1171,5,86,0,0,1171,1172,5,73,0,0,1172,1173,5,90,0,0,
	1173,186,1,0,0,0,1174,1175,5,71,0,0,1175,1176,5,82,0,0,1176,1177,5,79,0,
	0,1177,1178,5,85,0,0,1178,1179,5,80,0,0,1179,188,1,0,0,0,1180,1181,5,71,
	0,0,1181,1182,5,82,0,0,1182,1183,5,79,0,0,1183,1184,5,85,0,0,1184,1185,
	5,80,0,0,1185,1186,5,73,0,0,1186,1187,5,78,0,0,1187,1188,5,71,0,0,1188,
	190,1,0,0,0,1189,1190,5,71,0,0,1190,1191,5,82,0,0,1191,1192,5,79,0,0,1192,
	1193,5,85,0,0,1193,1194,5,80,0,0,1194,1195,5,83,0,0,1195,192,1,0,0,0,1196,
	1197,5,72,0,0,1197,1198,5,65,0,0,1198,1199,5,86,0,0,1199,1200,5,73,0,0,
	1200,1201,5,78,0,0,1201,1202,5,71,0,0,1202,194,1,0,0,0,1203,1204,5,72,0,
	0,1204,1205,5,79,0,0,1205,1206,5,85,0,0,1206,1207,5,82,0,0,1207,196,1,0,
	0,0,1208,1209,5,73,0,0,1209,1210,5,70,0,0,1210,198,1,0,0,0,1211,1212,5,
	73,0,0,1212,1213,5,71,0,0,1213,1214,5,78,0,0,1214,1215,5,79,0,0,1215,1216,
	5,82,0,0,1216,1217,5,69,0,0,1217,200,1,0,0,0,1218,1219,5,73,0,0,1219,1220,
	5,78,0,0,1220,202,1,0,0,0,1221,1222,5,73,0,0,1222,1223,5,78,0,0,1223,1224,
	5,67,0,0,1224,1225,5,76,0,0,1225,1226,5,85,0,0,1226,1227,5,68,0,0,1227,
	1228,5,73,0,0,1228,1229,5,78,0,0,1229,1230,5,71,0,0,1230,204,1,0,0,0,1231,
	1232,5,73,0,0,1232,1233,5,78,0,0,1233,1234,5,73,0,0,1234,1235,5,84,0,0,
	1235,1236,5,73,0,0,1236,1237,5,65,0,0,1237,1238,5,76,0,0,1238,206,1,0,0,
	0,1239,1240,5,73,0,0,1240,1241,5,78,0,0,1241,1242,5,78,0,0,1242,1243,5,
	69,0,0,1243,1244,5,82,0,0,1244,208,1,0,0,0,1245,1246,5,73,0,0,1246,1247,
	5,78,0,0,1247,1248,5,80,0,0,1248,1249,5,85,0,0,1249,1250,5,84,0,0,1250,
	210,1,0,0,0,1251,1252,5,73,0,0,1252,1253,5,78,0,0,1253,1254,5,83,0,0,1254,
	1255,5,69,0,0,1255,1256,5,82,0,0,1256,1257,5,84,0,0,1257,212,1,0,0,0,1258,
	1259,5,73,0,0,1259,1260,5,78,0,0,1260,1261,5,84,0,0,1261,1262,5,69,0,0,
	1262,1263,5,82,0,0,1263,1264,5,83,0,0,1264,1265,5,69,0,0,1265,1266,5,67,
	0,0,1266,1267,5,84,0,0,1267,214,1,0,0,0,1268,1269,5,73,0,0,1269,1270,5,
	78,0,0,1270,1271,5,84,0,0,1271,1272,5,69,0,0,1272,1273,5,82,0,0,1273,1274,
	5,86,0,0,1274,1275,5,65,0,0,1275,1276,5,76,0,0,1276,216,1,0,0,0,1277,1278,
	5,73,0,0,1278,1279,5,78,0,0,1279,1280,5,84,0,0,1280,1281,5,79,0,0,1281,
	218,1,0,0,0,1282,1283,5,73,0,0,1283,1284,5,78,0,0,1284,1285,5,86,0,0,1285,
	1286,5,79,0,0,1286,1287,5,75,0,0,1287,1288,5,69,0,0,1288,1289,5,82,0,0,
	1289,220,1,0,0,0,1290,1291,5,73,0,0,1291,1292,5,79,0,0,1292,222,1,0,0,0,
	1293,1294,5,73,0,0,1294,1295,5,83,0,0,1295,224,1,0,0,0,1296,1297,5,73,0,
	0,1297,1298,5,83,0,0,1298,1299,5,79,0,0,1299,1300,5,76,0,0,1300,1301,5,
	65,0,0,1301,1302,5,84,0,0,1302,1303,5,73,0,0,1303,1304,5,79,0,0,1304,1305,
	5,78,0,0,1305,226,1,0,0,0,1306,1307,5,74,0,0,1307,1308,5,79,0,0,1308,1309,
	5,73,0,0,1309,1310,5,78,0,0,1310,228,1,0,0,0,1311,1312,5,74,0,0,1312,1313,
	5,83,0,0,1313,1314,5,79,0,0,1314,1315,5,78,0,0,1315,230,1,0,0,0,1316,1317,
	5,76,0,0,1317,1318,5,65,0,0,1318,1319,5,83,0,0,1319,1320,5,84,0,0,1320,
	232,1,0,0,0,1321,1322,5,76,0,0,1322,1323,5,65,0,0,1323,1324,5,84,0,0,1324,
	1325,5,69,0,0,1325,1326,5,82,0,0,1326,1327,5,65,0,0,1327,1328,5,76,0,0,
	1328,234,1,0,0,0,1329,1330,5,76,0,0,1330,1331,5,69,0,0,1331,1332,5,70,0,
	0,1332,1333,5,84,0,0,1333,236,1,0,0,0,1334,1335,5,76,0,0,1335,1336,5,69,
	0,0,1336,1337,5,86,0,0,1337,1338,5,69,0,0,1338,1339,5,76,0,0,1339,238,1,
	0,0,0,1340,1341,5,76,0,0,1341,1342,5,73,0,0,1342,1343,5,75,0,0,1343,1344,
	5,69,0,0,1344,240,1,0,0,0,1345,1346,5,76,0,0,1346,1347,5,73,0,0,1347,1348,
	5,77,0,0,1348,1349,5,73,0,0,1349,1350,5,84,0,0,1350,242,1,0,0,0,1351,1352,
	5,76,0,0,1352,1353,5,79,0,0,1353,1354,5,67,0,0,1354,1355,5,65,0,0,1355,
	1356,5,76,0,0,1356,244,1,0,0,0,1357,1358,5,76,0,0,1358,1359,5,79,0,0,1359,
	1360,5,67,0,0,1360,1361,5,65,0,0,1361,1362,5,76,0,0,1362,1363,5,84,0,0,
	1363,1364,5,73,0,0,1364,1365,5,77,0,0,1365,1366,5,69,0,0,1366,246,1,0,0,
	0,1367,1368,5,76,0,0,1368,1369,5,79,0,0,1369,1370,5,67,0,0,1370,1371,5,
	65,0,0,1371,1372,5,76,0,0,1372,1373,5,84,0,0,1373,1374,5,73,0,0,1374,1375,
	5,77,0,0,1375,1376,5,69,0,0,1376,1377,5,83,0,0,1377,1378,5,84,0,0,1378,
	1379,5,65,0,0,1379,1380,5,77,0,0,1380,1381,5,80,0,0,1381,248,1,0,0,0,1382,
	1383,5,76,0,0,1383,1384,5,79,0,0,1384,1385,5,71,0,0,1385,1386,5,73,0,0,
	1386,1387,5,67,0,0,1387,1388,5,65,0,0,1388,1389,5,76,0,0,1389,250,1,0,0,
	0,1390,1391,5,77,0,0,1391,1392,5,65,0,0,1392,1393,5,80,0,0,1393,252,1,0,
	0,0,1394,1395,5,77,0,0,1395,1396,5,65,0,0,1396,1397,5,84,0,0,1397,1398,
	5,67,0,0,1398,1399,5,72,0,0,1399,254,1,0,0,0,1400,1401,5,77,0,0,1401,1402,
	5,65,0,0,1402,1403,5,84,0,0,1403,1404,5,67,0,0,1404,1405,5,72,0,0,1405,
	1406,5,69,0,0,1406,1407,5,68,0,0,1407,256,1,0,0,0,1408,1409,5,77,0,0,1409,
	1410,5,65,0,0,1410,1411,5,84,0,0,1411,1412,5,67,0,0,1412,1413,5,72,0,0,
	1413,1414,5,69,0,0,1414,1415,5,83,0,0,1415,258,1,0,0,0,1416,1417,5,77,0,
	0,1417,1418,5,65,0,0,1418,1419,5,84,0,0,1419,1420,5,67,0,0,1420,1421,5,
	72,0,0,1421,1422,5,95,0,0,1422,1423,5,82,0,0,1423,1424,5,69,0,0,1424,1425,
	5,67,0,0,1425,1426,5,79,0,0,1426,1427,5,71,0,0,1427,1428,5,78,0,0,1428,
	1429,5,73,0,0,1429,1430,5,90,0,0,1430,1431,5,69,0,0,1431,260,1,0,0,0,1432,
	1433,5,77,0,0,1433,1434,5,65,0,0,1434,1435,5,84,0,0,1435,1436,5,69,0,0,
	1436,1437,5,82,0,0,1437,1438,5,73,0,0,1438,1439,5,65,0,0,1439,1440,5,76,
	0,0,1440,1441,5,73,0,0,1441,1442,5,90,0,0,1442,1443,5,69,0,0,1443,1444,
	5,68,0,0,1444,262,1,0,0,0,1445,1446,5,77,0,0,1446,1447,5,69,0,0,1447,1448,
	5,65,0,0,1448,1449,5,83,0,0,1449,1450,5,85,0,0,1450,1451,5,82,0,0,1451,
	1452,5,69,0,0,1452,1453,5,83,0,0,1453,264,1,0,0,0,1454,1455,5,77,0,0,1455,
	1456,5,69,0,0,1456,1457,5,82,0,0,1457,1458,5,71,0,0,1458,1459,5,69,0,0,
	1459,266,1,0,0,0,1460,1461,5,77,0,0,1461,1462,5,73,0,0,1462,1463,5,78,0,
	0,1463,1464,5,85,0,0,1464,1465,5,84,0,0,1465,1466,5,69,0,0,1466,268,1,0,
	0,0,1467,1468,5,77,0,0,1468,1469,5,79,0,0,1469,1470,5,78,0,0,1470,1471,
	5,84,0,0,1471,1472,5,72,0,0,1472,270,1,0,0,0,1473,1474,5,78,0,0,1474,1475,
	5,65,0,0,1475,1476,5,84,0,0,1476,1477,5,85,0,0,1477,1478,5,82,0,0,1478,
	1479,5,65,0,0,1479,1480,5,76,0,0,1480,272,1,0,0,0,1481,1482,5,78,0,0,1482,
	1483,5,69,0,0,1483,1484,5,88,0,0,1484,1485,5,84,0,0,1485,274,1,0,0,0,1486,
	1487,5,78,0,0,1487,1488,5,70,0,0,1488,1489,5,67,0,0,1489,276,1,0,0,0,1490,
	1491,5,78,0,0,1491,1492,5,70,0,0,1492,1493,5,68,0,0,1493,278,1,0,0,0,1494,
	1495,5,78,0,0,1495,1496,5,70,0,0,1496,1497,5,75,0,0,1497,1498,5,67,0,0,
	1498,280,1,0,0,0,1499,1500,5,78,0,0,1500,1501,5,70,0,0,1501,1502,5,75,0,
	0,1502,1503,5,68,0,0,1503,282,1,0,0,0,1504,1505,5,78,0,0,1505,1506,5,79,
	0,0,1506,284,1,0,0,0,1507,1508,5,78,0,0,1508,1509,5,79,0,0,1509,1510,5,
	78,0,0,1510,1511,5,69,0,0,1511,286,1,0,0,0,1512,1513,5,78,0,0,1513,1514,
	5,79,0,0,1514,1515,5,82,0,0,1515,1516,5,77,0,0,1516,1517,5,65,0,0,1517,
	1518,5,76,0,0,1518,1519,5,73,0,0,1519,1520,5,90,0,0,1520,1521,5,69,0,0,
	1521,288,1,0,0,0,1522,1523,5,78,0,0,1523,1524,5,79,0,0,1524,1525,5,84,0,
	0,1525,290,1,0,0,0,1526,1527,5,78,0,0,1527,1528,5,85,0,0,1528,1529,5,76,
	0,0,1529,1530,5,76,0,0,1530,292,1,0,0,0,1531,1532,5,78,0,0,1532,1533,5,
	85,0,0,1533,1534,5,76,0,0,1534,1535,5,76,0,0,1535,1536,5,73,0,0,1536,1537,
	5,70,0,0,1537,294,1,0,0,0,1538,1539,5,78,0,0,1539,1540,5,85,0,0,1540,1541,
	5,76,0,0,1541,1542,5,76,0,0,1542,1543,5,83,0,0,1543,296,1,0,0,0,1544,1545,
	5,79,0,0,1545,1546,5,70,0,0,1546,1547,5,70,0,0,1547,1548,5,83,0,0,1548,
	1549,5,69,0,0,1549,1550,5,84,0,0,1550,298,1,0,0,0,1551,1552,5,79,0,0,1552,
	1553,5,77,0,0,1553,1554,5,73,0,0,1554,1555,5,84,0,0,1555,300,1,0,0,0,1556,
	1557,5,79,0,0,1557,1558,5,78,0,0,1558,302,1,0,0,0,1559,1560,5,79,0,0,1560,
	1561,5,78,0,0,1561,1562,5,69,0,0,1562,304,1,0,0,0,1563,1564,5,79,0,0,1564,
	1565,5,78,0,0,1565,1566,5,76,0,0,1566,1567,5,89,0,0,1567,306,1,0,0,0,1568,
	1569,5,79,0,0,1569,1570,5,80,0,0,1570,1571,5,84,0,0,1571,1572,5,73,0,0,
	1572,1573,5,79,0,0,1573,1574,5,78,0,0,1574,308,1,0,0,0,1575,1576,5,79,0,
	0,1576,1577,5,82,0,0,1577,310,1,0,0,0,1578,1579,5,79,0,0,1579,1580,5,82,
	0,0,1580,1581,5,68,0,0,1581,1582,5,69,0,0,1582,1583,5,82,0,0,1583,312,1,
	0,0,0,1584,1585,5,79,0,0,1585,1586,5,82,0,0,1586,1587,5,68,0,0,1587,1588,
	5,73,0,0,1588,1589,5,78,0,0,1589,1590,5,65,0,0,1590,1591,5,76,0,0,1591,
	1592,5,73,0,0,1592,1593,5,84,0,0,1593,1594,5,89,0,0,1594,314,1,0,0,0,1595,
	1596,5,79,0,0,1596,1597,5,85,0,0,1597,1598,5,84,0,0,1598,1599,5,69,0,0,
	1599,1600,5,82,0,0,1600,316,1,0,0,0,1601,1602,5,79,0,0,1602,1603,5,85,0,
	0,1603,1604,5,84,0,0,1604,1605,5,80,0,0,1605,1606,5,85,0,0,1606,1607,5,
	84,0,0,1607,318,1,0,0,0,1608,1609,5,79,0,0,1609,1610,5,86,0,0,1610,1611,
	5,69,0,0,1611,1612,5,82,0,0,1612,320,1,0,0,0,1613,1614,5,80,0,0,1614,1615,
	5,65,0,0,1615,1616,5,82,0,0,1616,1617,5,84,0,0,1617,1618,5,73,0,0,1618,
	1619,5,84,0,0,1619,1620,5,73,0,0,1620,1621,5,79,0,0,1621,1622,5,78,0,0,
	1622,322,1,0,0,0,1623,1624,5,80,0,0,1624,1625,5,65,0,0,1625,1626,5,82,0,
	0,1626,1627,5,84,0,0,1627,1628,5,73,0,0,1628,1629,5,84,0,0,1629,1630,5,
	73,0,0,1630,1631,5,79,0,0,1631,1632,5,78,0,0,1632,1633,5,83,0,0,1633,324,
	1,0,0,0,1634,1635,5,80,0,0,1635,1636,5,65,0,0,1636,1637,5,83,0,0,1637,1638,
	5,84,0,0,1638,326,1,0,0,0,1639,1640,5,80,0,0,1640,1641,5,65,0,0,1641,1642,
	5,84,0,0,1642,1643,5,72,0,0,1643,328,1,0,0,0,1644,1645,5,80,0,0,1645,1646,
	5,65,0,0,1646,1647,5,84,0,0,1647,1648,5,84,0,0,1648,1649,5,69,0,0,1649,
	1650,5,82,0,0,1650,1651,5,78,0,0,1651,330,1,0,0,0,1652,1653,5,80,0,0,1653,
	1654,5,69,0,0,1654,1655,5,82,0,0,1655,332,1,0,0,0,1656,1657,5,80,0,0,1657,
	1658,5,69,0,0,1658,1659,5,82,0,0,1659,1660,5,77,0,0,1660,1661,5,85,0,0,
	1661,1662,5,84,0,0,1662,1663,5,69,0,0,1663,334,1,0,0,0,1664,1665,5,80,0,
	0,1665,1666,5,79,0,0,1666,1667,5,83,0,0,1667,1668,5,73,0,0,1668,1669,5,
	84,0,0,1669,1670,5,73,0,0,1670,1671,5,79,0,0,1671,1672,5,78,0,0,1672,336,
	1,0,0,0,1673,1674,5,80,0,0,1674,1675,5,82,0,0,1675,1676,5,69,0,0,1676,1677,
	5,67,0,0,1677,1678,5,69,0,0,1678,1679,5,68,0,0,1679,1680,5,73,0,0,1680,
	1681,5,78,0,0,1681,1682,5,71,0,0,1682,338,1,0,0,0,1683,1684,5,80,0,0,1684,
	1685,5,82,0,0,1685,1686,5,69,0,0,1686,1687,5,67,0,0,1687,1688,5,73,0,0,
	1688,1689,5,83,0,0,1689,1690,5,73,0,0,1690,1691,5,79,0,0,1691,1692,5,78,
	0,0,1692,340,1,0,0,0,1693,1694,5,80,0,0,1694,1695,5,82,0,0,1695,1696,5,
	69,0,0,1696,1697,5,80,0,0,1697,1698,5,65,0,0,1698,1699,5,82,0,0,1699,1700,
	5,69,0,0,1700,342,1,0,0,0,1701,1702,5,80,0,0,1702,1703,5,82,0,0,1703,1704,
	5,73,0,0,1704,1705,5,86,0,0,1705,1706,5,73,0,0,1706,1707,5,76,0,0,1707,
	1708,5,69,0,0,1708,1709,5,71,0,0,1709,1710,5,69,0,0,1710,1711,5,83,0,0,
	1711,344,1,0,0,0,1712,1713,5,80,0,0,1713,1714,5,82,0,0,1714,1715,5,79,0,
	0,1715,1716,5,80,0,0,1716,1717,5,69,0,0,1717,1718,5,82,0,0,1718,1719,5,
	84,0,0,1719,1720,5,73,0,0,1720,1721,5,69,0,0,1721,1722,5,83,0,0,1722,346,
	1,0,0,0,1723,1724,5,82,0,0,1724,1725,5,65,0,0,1725,1726,5,78,0,0,1726,1727,
	5,71,0,0,1727,1728,5,69,0,0,1728,348,1,0,0,0,1729,1730,5,82,0,0,1730,1731,
	5,69,0,0,1731,1732,5,65,0,0,1732,1733,5,68,0,0,1733,350,1,0,0,0,1734,1735,
	5,82,0,0,1735,1736,5,69,0,0,1736,1737,5,67,0,0,1737,1738,5,85,0,0,1738,
	1739,5,82,0,0,1739,1740,5,83,0,0,1740,1741,5,73,0,0,1741,1742,5,86,0,0,
	1742,1743,5,69,0,0,1743,352,1,0,0,0,1744,1745,5,82,0,0,1745,1746,5,69,0,
	0,1746,1747,5,70,0,0,1747,1748,5,82,0,0,1748,1749,5,69,0,0,1749,1750,5,
	83,0,0,1750,1751,5,72,0,0,1751,354,1,0,0,0,1752,1753,5,82,0,0,1753,1754,
	5,69,0,0,1754,1755,5,78,0,0,1755,1756,5,65,0,0,1756,1757,5,77,0,0,1757,
	1758,5,69,0,0,1758,356,1,0,0,0,1759,1760,5,82,0,0,1760,1761,5,69,0,0,1761,
	1762,5,80,0,0,1762,1763,5,69,0,0,1763,1764,5,65,0,0,1764,1765,5,84,0,0,
	1765,1766,5,65,0,0,1766,1767,5,66,0,0,1767,1768,5,76,0,0,1768,1769,5,69,
	0,0,1769,358,1,0,0,0,1770,1771,5,82,0,0,1771,1772,5,69,0,0,1772,1773,5,
	80,0,0,1773,1774,5,76,0,0,1774,1775,5,65,0,0,1775,1776,5,67,0,0,1776,1777,
	5,69,0,0,1777,360,1,0,0,0,1778,1779,5,82,0,0,1779,1780,5,69,0,0,1780,1781,
	5,83,0,0,1781,1782,5,69,0,0,1782,1783,5,84,0,0,1783,362,1,0,0,0,1784,1785,
	5,82,0,0,1785,1786,5,69,0,0,1786,1787,5,83,0,0,1787,1788,5,80,0,0,1788,
	1789,5,69,0,0,1789,1790,5,67,0,0,1790,1791,5,84,0,0,1791,364,1,0,0,0,1792,
	1793,5,82,0,0,1793,1794,5,69,0,0,1794,1795,5,83,0,0,1795,1796,5,84,0,0,
	1796,1797,5,82,0,0,1797,1798,5,73,0,0,1798,1799,5,67,0,0,1799,1800,5,84,
	0,0,1800,366,1,0,0,0,1801,1802,5,82,0,0,1802,1803,5,69,0,0,1803,1804,5,
	86,0,0,1804,1805,5,79,0,0,1805,1806,5,75,0,0,1806,1807,5,69,0,0,1807,368,
	1,0,0,0,1808,1809,5,82,0,0,1809,1810,5,73,0,0,1810,1811,5,71,0,0,1811,1812,
	5,72,0,0,1812,1813,5,84,0,0,1813,370,1,0,0,0,1814,1815,5,82,0,0,1815,1816,
	5,79,0,0,1816,1817,5,76,0,0,1817,1818,5,69,0,0,1818,372,1,0,0,0,1819,1820,
	5,82,0,0,1820,1821,5,79,0,0,1821,1822,5,76,0,0,1822,1823,5,69,0,0,1823,
	1824,5,83,0,0,1824,374,1,0,0,0,1825,1826,5,82,0,0,1826,1827,5,79,0,0,1827,
	1828,5,76,0,0,1828,1829,5,76,0,0,1829,1830,5,66,0,0,1830,1831,5,65,0,0,
	1831,1832,5,67,0,0,1832,1833,5,75,0,0,1833,376,1,0,0,0,1834,1835,5,82,0,
	0,1835,1836,5,79,0,0,1836,1837,5,76,0,0,1837,1838,5,76,0,0,1838,1839,5,
	85,0,0,1839,1840,5,80,0,0,1840,378,1,0,0,0,1841,1842,5,82,0,0,1842,1843,
	5,79,0,0,1843,1844,5,87,0,0,1844,380,1,0,0,0,1845,1846,5,82,0,0,1846,1847,
	5,79,0,0,1847,1848,5,87,0,0,1848,1849,5,83,0,0,1849,382,1,0,0,0,1850,1851,
	5,82,0,0,1851,1852,5,85,0,0,1852,1853,5,78,0,0,1853,1854,5,78,0,0,1854,
	1855,5,73,0,0,1855,1856,5,78,0,0,1856,1857,5,71,0,0,1857,384,1,0,0,0,1858,
	1859,5,83,0,0,1859,1860,5,67,0,0,1860,1861,5,72,0,0,1861,1862,5,69,0,0,
	1862,1863,5,77,0,0,1863,1864,5,65,0,0,1864,386,1,0,0,0,1865,1866,5,83,0,
	0,1866,1867,5,67,0,0,1867,1868,5,72,0,0,1868,1869,5,69,0,0,1869,1870,5,
	77,0,0,1870,1871,5,65,0,0,1871,1872,5,83,0,0,1872,388,1,0,0,0,1873,1874,
	5,83,0,0,1874,1875,5,69,0,0,1875,1876,5,67,0,0,1876,1877,5,79,0,0,1877,
	1878,5,78,0,0,1878,1879,5,68,0,0,1879,390,1,0,0,0,1880,1881,5,83,0,0,1881,
	1882,5,69,0,0,1882,1883,5,67,0,0,1883,1884,5,85,0,0,1884,1885,5,82,0,0,
	1885,1886,5,73,0,0,1886,1887,5,84,0,0,1887,1888,5,89,0,0,1888,392,1,0,0,
	0,1889,1890,5,83,0,0,1890,1891,5,69,0,0,1891,1892,5,69,0,0,1892,1893,5,
	75,0,0,1893,394,1,0,0,0,1894,1895,5,83,0,0,1895,1896,5,69,0,0,1896,1897,
	5,76,0,0,1897,1898,5,69,0,0,1898,1899,5,67,0,0,1899,1900,5,84,0,0,1900,
	396,1,0,0,0,1901,1902,5,83,0,0,1902,1903,5,69,0,0,1903,1904,5,82,0,0,1904,
	1905,5,73,0,0,1905,1906,5,65,0,0,1906,1907,5,76,0,0,1907,1908,5,73,0,0,
	1908,1909,5,90,0,0,1909,1910,5,65,0,0,1910,1911,5,66,0,0,1911,1912,5,76,
	0,0,1912,1913,5,69,0,0,1913,398,1,0,0,0,1914,1915,5,83,0,0,1915,1916,5,
	69,0,0,1916,1917,5,83,0,0,1917,1918,5,83,0,0,1918,1919,5,73,0,0,1919,1920,
	5,79,0,0,1920,1921,5,78,0,0,1921,400,1,0,0,0,1922,1923,5,83,0,0,1923,1924,
	5,69,0,0,1924,1925,5,84,0,0,1925,402,1,0,0,0,1926,1927,5,83,0,0,1927,1928,
	5,69,0,0,1928,1929,5,84,0,0,1929,1930,5,83,0,0,1930,404,1,0,0,0,1931,1932,
	5,83,0,0,1932,1933,5,72,0,0,1933,1934,5,79,0,0,1934,1935,5,87,0,0,1935,
	406,1,0,0,0,1936,1937,5,83,0,0,1937,1938,5,79,0,0,1938,1939,5,77,0,0,1939,
	1940,5,69,0,0,1940,408,1,0,0,0,1941,1942,5,83,0,0,1942,1943,5,84,0,0,1943,
	1944,5,65,0,0,1944,1945,5,82,0,0,1945,1946,5,84,0,0,1946,410,1,0,0,0,1947,
	1948,5,83,0,0,1948,1949,5,84,0,0,1949,1950,5,65,0,0,1950,1951,5,84,0,0,
	1951,1952,5,83,0,0,1952,412,1,0,0,0,1953,1954,5,83,0,0,1954,1955,5,85,0,
	0,1955,1956,5,66,0,0,1956,1957,5,83,0,0,1957,1958,5,69,0,0,1958,1959,5,
	84,0,0,1959,414,1,0,0,0,1960,1961,5,83,0,0,1961,1962,5,85,0,0,1962,1963,
	5,66,0,0,1963,1964,5,83,0,0,1964,1965,5,84,0,0,1965,1966,5,82,0,0,1966,
	1967,5,73,0,0,1967,1968,5,78,0,0,1968,1969,5,71,0,0,1969,416,1,0,0,0,1970,
	1971,5,83,0,0,1971,1972,5,89,0,0,1972,1973,5,83,0,0,1973,1974,5,84,0,0,
	1974,1975,5,69,0,0,1975,1976,5,77,0,0,1976,418,1,0,0,0,1977,1978,5,84,0,
	0,1978,1979,5,65,0,0,1979,1980,5,66,0,0,1980,1981,5,76,0,0,1981,1982,5,
	69,0,0,1982,420,1,0,0,0,1983,1984,5,84,0,0,1984,1985,5,65,0,0,1985,1986,
	5,66,0,0,1986,1987,5,76,0,0,1987,1988,5,69,0,0,1988,1989,5,83,0,0,1989,
	422,1,0,0,0,1990,1991,5,84,0,0,1991,1992,5,65,0,0,1992,1993,5,66,0,0,1993,
	1994,5,76,0,0,1994,1995,5,69,0,0,1995,1996,5,83,0,0,1996,1997,5,65,0,0,
	1997,1998,5,77,0,0,1998,1999,5,80,0,0,1999,2000,5,76,0,0,2000,2001,5,69,
	0,0,2001,424,1,0,0,0,2002,2003,5,84,0,0,2003,2004,5,69,0,0,2004,2005,5,
	88,0,0,2005,2006,5,84,0,0,2006,426,1,0,0,0,2007,2008,5,84,0,0,2008,2009,
	5,72,0,0,2009,2010,5,69,0,0,2010,2011,5,78,0,0,2011,428,1,0,0,0,2012,2013,
	5,84,0,0,2013,2014,5,73,0,0,2014,2015,5,69,0,0,2015,2016,5,83,0,0,2016,
	430,1,0,0,0,2017,2018,5,84,0,0,2018,2019,5,73,0,0,2019,2020,5,77,0,0,2020,
	2021,5,69,0,0,2021,432,1,0,0,0,2022,2023,5,84,0,0,2023,2024,5,73,0,0,2024,
	2025,5,77,0,0,2025,2026,5,69,0,0,2026,2027,5,83,0,0,2027,2028,5,84,0,0,
	2028,2029,5,65,0,0,2029,2030,5,77,0,0,2030,2031,5,80,0,0,2031,434,1,0,0,
	0,2032,2033,5,84,0,0,2033,2034,5,79,0,0,2034,436,1,0,0,0,2035,2036,5,84,
	0,0,2036,2037,5,82,0,0,2037,2038,5,65,0,0,2038,2039,5,78,0,0,2039,2040,
	5,83,0,0,2040,2041,5,65,0,0,2041,2042,5,67,0,0,2042,2043,5,84,0,0,2043,
	2044,5,73,0,0,2044,2045,5,79,0,0,2045,2046,5,78,0,0,2046,438,1,0,0,0,2047,
	2048,5,84,0,0,2048,2049,5,82,0,0,2049,2050,5,85,0,0,2050,2051,5,69,0,0,
	2051,440,1,0,0,0,2052,2053,5,84,0,0,2053,2054,5,82,0,0,2054,2055,5,89,0,
	0,2055,2056,5,95,0,0,2056,2057,5,67,0,0,2057,2058,5,65,0,0,2058,2059,5,
	83,0,0,2059,2060,5,84,0,0,2060,442,1,0,0,0,2061,2062,5,84,0,0,2062,2063,
	5,89,0,0,2063,2064,5,80,0,0,2064,2065,5,69,0,0,2065,444,1,0,0,0,2066,2067,
	5,85,0,0,2067,2068,5,69,0,0,2068,2069,5,83,0,0,2069,2070,5,67,0,0,2070,
	2071,5,65,0,0,2071,2072,5,80,0,0,2072,2073,5,69,0,0,2073,446,1,0,0,0,2074,
	2075,5,85,0,0,2075,2076,5,78,0,0,2076,2077,5,66,0,0,2077,2078,5,79,0,0,
	2078,2079,5,85,0,0,2079,2080,5,78,0,0,2080,2081,5,68,0,0,2081,2082,5,69,
	0,0,2082,2083,5,68,0,0,2083,448,1,0,0,0,2084,2085,5,85,0,0,2085,2086,5,
	78,0,0,2086,2087,5,67,0,0,2087,2088,5,79,0,0,2088,2089,5,77,0,0,2089,2090,
	5,77,0,0,2090,2091,5,73,0,0,2091,2092,5,84,0,0,2092,2093,5,84,0,0,2093,
	2094,5,69,0,0,2094,2095,5,68,0,0,2095,450,1,0,0,0,2096,2097,5,85,0,0,2097,
	2098,5,78,0,0,2098,2099,5,73,0,0,2099,2100,5,79,0,0,2100,2101,5,78,0,0,
	2101,452,1,0,0,0,2102,2103,5,85,0,0,2103,2104,5,78,0,0,2104,2105,5,77,0,
	0,2105,2106,5,65,0,0,2106,2107,5,84,0,0,2107,2108,5,67,0,0,2108,2109,5,
	72,0,0,2109,2110,5,69,0,0,2110,2111,5,68,0,0,2111,454,1,0,0,0,2112,2113,
	5,85,0,0,2113,2114,5,78,0,0,2114,2115,5,78,0,0,2115,2116,5,69,0,0,2116,
	2117,5,83,0,0,2117,2118,5,84,0,0,2118,456,1,0,0,0,2119,2120,5,85,0,0,2120,
	2121,5,80,0,0,2121,2122,5,68,0,0,2122,2123,5,65,0,0,2123,2124,5,84,0,0,
	2124,2125,5,69,0,0,2125,458,1,0,0,0,2126,2127,5,85,0,0,2127,2128,5,83,0,
	0,2128,2129,5,69,0,0,2129,460,1,0,0,0,2130,2131,5,85,0,0,2131,2132,5,83,
	0,0,2132,2133,5,69,0,0,2133,2134,5,82,0,0,2134,462,1,0,0,0,2135,2136,5,
	85,0,0,2136,2137,5,83,0,0,2137,2138,5,73,0,0,2138,2139,5,78,0,0,2139,2140,
	5,71,0,0,2140,464,1,0,0,0,2141,2142,5,86,0,0,2142,2143,5,65,0,0,2143,2144,
	5,76,0,0,2144,2145,5,73,0,0,2145,2146,5,68,0,0,2146,2147,5,65,0,0,2147,
	2148,5,84,0,0,2148,2149,5,69,0,0,2149,466,1,0,0,0,2150,2151,5,86,0,0,2151,
	2152,5,65,0,0,2152,2153,5,76,0,0,2153,2154,5,85,0,0,2154,2155,5,69,0,0,
	2155,2156,5,83,0,0,2156,468,1,0,0,0,2157,2158,5,86,0,0,2158,2159,5,69,0,
	0,2159,2160,5,82,0,0,2160,2161,5,66,0,0,2161,2162,5,79,0,0,2162,2163,5,
	83,0,0,2163,2164,5,69,0,0,2164,470,1,0,0,0,2165,2166,5,86,0,0,2166,2167,
	5,73,0,0,2167,2168,5,69,0,0,2168,2169,5,87,0,0,2169,472,1,0,0,0,2170,2171,
	5,87,0,0,2171,2172,5,72,0,0,2172,2173,5,69,0,0,2173,2174,5,78,0,0,2174,
	474,1,0,0,0,2175,2176,5,87,0,0,2176,2177,5,72,0,0,2177,2178,5,69,0,0,2178,
	2179,5,82,0,0,2179,2180,5,69,0,0,2180,476,1,0,0,0,2181,2182,5,87,0,0,2182,
	2183,5,73,0,0,2183,2184,5,78,0,0,2184,2185,5,68,0,0,2185,2186,5,79,0,0,
	2186,2187,5,87,0,0,2187,478,1,0,0,0,2188,2189,5,87,0,0,2189,2190,5,73,0,
	0,2190,2191,5,84,0,0,2191,2192,5,72,0,0,2192,480,1,0,0,0,2193,2194,5,87,
	0,0,2194,2195,5,73,0,0,2195,2196,5,84,0,0,2196,2197,5,72,0,0,2197,2198,
	5,79,0,0,2198,2199,5,85,0,0,2199,2200,5,84,0,0,2200,482,1,0,0,0,2201,2202,
	5,87,0,0,2202,2203,5,79,0,0,2203,2204,5,82,0,0,2204,2205,5,75,0,0,2205,
	484,1,0,0,0,2206,2207,5,87,0,0,2207,2208,5,82,0,0,2208,2209,5,73,0,0,2209,
	2210,5,84,0,0,2210,2211,5,69,0,0,2211,486,1,0,0,0,2212,2213,5,89,0,0,2213,
	2214,5,69,0,0,2214,2215,5,65,0,0,2215,2216,5,82,0,0,2216,488,1,0,0,0,2217,
	2218,5,90,0,0,2218,2219,5,79,0,0,2219,2220,5,78,0,0,2220,2221,5,69,0,0,
	2221,490,1,0,0,0,2222,2223,5,61,0,0,2223,492,1,0,0,0,2224,2225,5,60,0,0,
	2225,2229,5,62,0,0,2226,2227,5,33,0,0,2227,2229,5,61,0,0,2228,2224,1,0,
	0,0,2228,2226,1,0,0,0,2229,494,1,0,0,0,2230,2231,5,60,0,0,2231,496,1,0,
	0,0,2232,2233,5,60,0,0,2233,2234,5,61,0,0,2234,498,1,0,0,0,2235,2236,5,
	62,0,0,2236,500,1,0,0,0,2237,2238,5,62,0,0,2238,2239,5,61,0,0,2239,502,
	1,0,0,0,2240,2241,5,43,0,0,2241,504,1,0,0,0,2242,2243,5,45,0,0,2243,506,
	1,0,0,0,2244,2245,5,42,0,0,2245,508,1,0,0,0,2246,2247,5,47,0,0,2247,510,
	1,0,0,0,2248,2249,5,37,0,0,2249,512,1,0,0,0,2250,2251,5,124,0,0,2251,2252,
	5,124,0,0,2252,514,1,0,0,0,2253,2254,5,63,0,0,2254,516,1,0,0,0,2255,2261,
	5,39,0,0,2256,2260,8,0,0,0,2257,2258,5,39,0,0,2258,2260,5,39,0,0,2259,2256,
	1,0,0,0,2259,2257,1,0,0,0,2260,2263,1,0,0,0,2261,2259,1,0,0,0,2261,2262,
	1,0,0,0,2262,2264,1,0,0,0,2263,2261,1,0,0,0,2264,2265,5,39,0,0,2265,518,
	1,0,0,0,2266,2267,5,85,0,0,2267,2268,5,38,0,0,2268,2269,5,39,0,0,2269,2275,
	1,0,0,0,2270,2274,8,0,0,0,2271,2272,5,39,0,0,2272,2274,5,39,0,0,2273,2270,
	1,0,0,0,2273,2271,1,0,0,0,2274,2277,1,0,0,0,2275,2273,1,0,0,0,2275,2276,
	1,0,0,0,2276,2278,1,0,0,0,2277,2275,1,0,0,0,2278,2279,5,39,0,0,2279,520,
	1,0,0,0,2280,2281,5,88,0,0,2281,2282,5,39,0,0,2282,2286,1,0,0,0,2283,2285,
	8,0,0,0,2284,2283,1,0,0,0,2285,2288,1,0,0,0,2286,2284,1,0,0,0,2286,2287,
	1,0,0,0,2287,2289,1,0,0,0,2288,2286,1,0,0,0,2289,2290,5,39,0,0,2290,522,
	1,0,0,0,2291,2293,3,541,270,0,2292,2291,1,0,0,0,2293,2294,1,0,0,0,2294,
	2292,1,0,0,0,2294,2295,1,0,0,0,2295,524,1,0,0,0,2296,2298,3,541,270,0,2297,
	2296,1,0,0,0,2298,2299,1,0,0,0,2299,2297,1,0,0,0,2299,2300,1,0,0,0,2300,
	2301,1,0,0,0,2301,2305,5,46,0,0,2302,2304,3,541,270,0,2303,2302,1,0,0,0,
	2304,2307,1,0,0,0,2305,2303,1,0,0,0,2305,2306,1,0,0,0,2306,2315,1,0,0,0,
	2307,2305,1,0,0,0,2308,2310,5,46,0,0,2309,2311,3,541,270,0,2310,2309,1,
	0,0,0,2311,2312,1,0,0,0,2312,2310,1,0,0,0,2312,2313,1,0,0,0,2313,2315,1,
	0,0,0,2314,2297,1,0,0,0,2314,2308,1,0,0,0,2315,526,1,0,0,0,2316,2318,3,
	541,270,0,2317,2316,1,0,0,0,2318,2319,1,0,0,0,2319,2317,1,0,0,0,2319,2320,
	1,0,0,0,2320,2328,1,0,0,0,2321,2325,5,46,0,0,2322,2324,3,541,270,0,2323,
	2322,1,0,0,0,2324,2327,1,0,0,0,2325,2323,1,0,0,0,2325,2326,1,0,0,0,2326,
	2329,1,0,0,0,2327,2325,1,0,0,0,2328,2321,1,0,0,0,2328,2329,1,0,0,0,2329,
	2330,1,0,0,0,2330,2331,3,539,269,0,2331,2341,1,0,0,0,2332,2334,5,46,0,0,
	2333,2335,3,541,270,0,2334,2333,1,0,0,0,2335,2336,1,0,0,0,2336,2334,1,0,
	0,0,2336,2337,1,0,0,0,2337,2338,1,0,0,0,2338,2339,3,539,269,0,2339,2341,
	1,0,0,0,2340,2317,1,0,0,0,2340,2332,1,0,0,0,2341,528,1,0,0,0,2342,2345,
	3,543,271,0,2343,2345,5,95,0,0,2344,2342,1,0,0,0,2344,2343,1,0,0,0,2345,
	2351,1,0,0,0,2346,2350,3,543,271,0,2347,2350,3,541,270,0,2348,2350,5,95,
	0,0,2349,2346,1,0,0,0,2349,2347,1,0,0,0,2349,2348,1,0,0,0,2350,2353,1,0,
	0,0,2351,2349,1,0,0,0,2351,2352,1,0,0,0,2352,530,1,0,0,0,2353,2351,1,0,
	0,0,2354,2358,3,541,270,0,2355,2359,3,543,271,0,2356,2359,3,541,270,0,2357,
	2359,5,95,0,0,2358,2355,1,0,0,0,2358,2356,1,0,0,0,2358,2357,1,0,0,0,2359,
	2360,1,0,0,0,2360,2358,1,0,0,0,2360,2361,1,0,0,0,2361,532,1,0,0,0,2362,
	2368,5,34,0,0,2363,2367,8,1,0,0,2364,2365,5,34,0,0,2365,2367,5,34,0,0,2366,
	2363,1,0,0,0,2366,2364,1,0,0,0,2367,2370,1,0,0,0,2368,2366,1,0,0,0,2368,
	2369,1,0,0,0,2369,2371,1,0,0,0,2370,2368,1,0,0,0,2371,2372,5,34,0,0,2372,
	534,1,0,0,0,2373,2379,5,96,0,0,2374,2378,8,2,0,0,2375,2376,5,96,0,0,2376,
	2378,5,96,0,0,2377,2374,1,0,0,0,2377,2375,1,0,0,0,2378,2381,1,0,0,0,2379,
	2377,1,0,0,0,2379,2380,1,0,0,0,2380,2382,1,0,0,0,2381,2379,1,0,0,0,2382,
	2383,5,96,0,0,2383,536,1,0,0,0,2384,2385,5,59,0,0,2385,538,1,0,0,0,2386,
	2388,5,69,0,0,2387,2389,7,3,0,0,2388,2387,1,0,0,0,2388,2389,1,0,0,0,2389,
	2391,1,0,0,0,2390,2392,3,541,270,0,2391,2390,1,0,0,0,2392,2393,1,0,0,0,
	2393,2391,1,0,0,0,2393,2394,1,0,0,0,2394,540,1,0,0,0,2395,2396,7,4,0,0,
	2396,542,1,0,0,0,2397,2398,7,5,0,0,2398,544,1,0,0,0,2399,2400,5,45,0,0,
	2400,2401,5,45,0,0,2401,2405,1,0,0,0,2402,2404,8,6,0,0,2403,2402,1,0,0,
	0,2404,2407,1,0,0,0,2405,2403,1,0,0,0,2405,2406,1,0,0,0,2406,2409,1,0,0,
	0,2407,2405,1,0,0,0,2408,2410,5,13,0,0,2409,2408,1,0,0,0,2409,2410,1,0,
	0,0,2410,2412,1,0,0,0,2411,2413,5,10,0,0,2412,2411,1,0,0,0,2412,2413,1,
	0,0,0,2413,2414,1,0,0,0,2414,2415,6,272,0,0,2415,546,1,0,0,0,2416,2417,
	5,47,0,0,2417,2418,5,42,0,0,2418,2422,1,0,0,0,2419,2421,9,0,0,0,2420,2419,
	1,0,0,0,2421,2424,1,0,0,0,2422,2423,1,0,0,0,2422,2420,1,0,0,0,2423,2425,
	1,0,0,0,2424,2422,1,0,0,0,2425,2426,5,42,0,0,2426,2427,5,47,0,0,2427,2428,
	1,0,0,0,2428,2429,6,273,0,0,2429,548,1,0,0,0,2430,2432,7,7,0,0,2431,2430,
	1,0,0,0,2432,2433,1,0,0,0,2433,2431,1,0,0,0,2433,2434,1,0,0,0,2434,2435,
	1,0,0,0,2435,2436,6,274,0,0,2436,550,1,0,0,0,2437,2438,9,0,0,0,2438,552,
	1,0,0,0,33,0,2228,2259,2261,2273,2275,2286,2294,2299,2305,2312,2314,2319,
	2325,2328,2336,2340,2344,2349,2351,2358,2360,2366,2368,2377,2379,2388,2393,
	2405,2409,2412,2422,2433,1,0,1,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!trinoSqlParserLexer.__ATN) {
			trinoSqlParserLexer.__ATN = new ATNDeserializer().deserialize(trinoSqlParserLexer._serializedATN);
		}

		return trinoSqlParserLexer.__ATN;
	}


	static DecisionsToDFA = trinoSqlParserLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}