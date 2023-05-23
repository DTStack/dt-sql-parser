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
	public static readonly DENY = 93;
	public static readonly GRAPHVIZ = 94;
	public static readonly GROUP = 95;
	public static readonly GROUPING = 96;
	public static readonly GROUPS = 97;
	public static readonly HAVING = 98;
	public static readonly HOUR = 99;
	public static readonly IF = 100;
	public static readonly IGNORE = 101;
	public static readonly IN = 102;
	public static readonly INCLUDING = 103;
	public static readonly INITIAL = 104;
	public static readonly INNER = 105;
	public static readonly INPUT = 106;
	public static readonly INSERT = 107;
	public static readonly INTERSECT = 108;
	public static readonly INTERVAL = 109;
	public static readonly INTO = 110;
	public static readonly INVOKER = 111;
	public static readonly IO = 112;
	public static readonly IS = 113;
	public static readonly ISOLATION = 114;
	public static readonly JOIN = 115;
	public static readonly JSON = 116;
	public static readonly LAST = 117;
	public static readonly LATERAL = 118;
	public static readonly LEFT = 119;
	public static readonly LEVEL = 120;
	public static readonly LIKE = 121;
	public static readonly LIMIT = 122;
	public static readonly LOCAL = 123;
	public static readonly LOCALTIME = 124;
	public static readonly LOCALTIMESTAMP = 125;
	public static readonly LOGICAL = 126;
	public static readonly MAP = 127;
	public static readonly MATCH = 128;
	public static readonly MATCHED = 129;
	public static readonly MATCHES = 130;
	public static readonly MATCH_RECOGNIZE = 131;
	public static readonly MATERIALIZED = 132;
	public static readonly MEASURES = 133;
	public static readonly MERGE = 134;
	public static readonly MINUTE = 135;
	public static readonly MONTH = 136;
	public static readonly NATURAL = 137;
	public static readonly NEXT = 138;
	public static readonly NFC = 139;
	public static readonly NFD = 140;
	public static readonly NFKC = 141;
	public static readonly NFKD = 142;
	public static readonly NO = 143;
	public static readonly NONE = 144;
	public static readonly NORMALIZE = 145;
	public static readonly NOT = 146;
	public static readonly NULL = 147;
	public static readonly NULLIF = 148;
	public static readonly NULLS = 149;
	public static readonly OFFSET = 150;
	public static readonly OMIT = 151;
	public static readonly ON = 152;
	public static readonly ONE = 153;
	public static readonly ONLY = 154;
	public static readonly OPTION = 155;
	public static readonly OR = 156;
	public static readonly ORDER = 157;
	public static readonly ORDINALITY = 158;
	public static readonly OUTER = 159;
	public static readonly OUTPUT = 160;
	public static readonly OVER = 161;
	public static readonly PARTITION = 162;
	public static readonly PARTITIONS = 163;
	public static readonly PAST = 164;
	public static readonly PATH = 165;
	public static readonly PATTERN = 166;
	public static readonly PER = 167;
	public static readonly PERMUTE = 168;
	public static readonly POSITION = 169;
	public static readonly PRECEDING = 170;
	public static readonly PRECISION = 171;
	public static readonly PREPARE = 172;
	public static readonly PRIVILEGES = 173;
	public static readonly PROPERTIES = 174;
	public static readonly RANGE = 175;
	public static readonly READ = 176;
	public static readonly RECURSIVE = 177;
	public static readonly REFRESH = 178;
	public static readonly RENAME = 179;
	public static readonly REPEATABLE = 180;
	public static readonly REPLACE = 181;
	public static readonly RESET = 182;
	public static readonly RESPECT = 183;
	public static readonly RESTRICT = 184;
	public static readonly REVOKE = 185;
	public static readonly RIGHT = 186;
	public static readonly ROLE = 187;
	public static readonly ROLES = 188;
	public static readonly ROLLBACK = 189;
	public static readonly ROLLUP = 190;
	public static readonly ROW = 191;
	public static readonly ROWS = 192;
	public static readonly RUNNING = 193;
	public static readonly SCHEMA = 194;
	public static readonly SCHEMAS = 195;
	public static readonly SECOND = 196;
	public static readonly SECURITY = 197;
	public static readonly SEEK = 198;
	public static readonly SELECT = 199;
	public static readonly SERIALIZABLE = 200;
	public static readonly SESSION = 201;
	public static readonly SET = 202;
	public static readonly SETS = 203;
	public static readonly SHOW = 204;
	public static readonly SOME = 205;
	public static readonly START = 206;
	public static readonly STATS = 207;
	public static readonly SUBSET = 208;
	public static readonly SUBSTRING = 209;
	public static readonly SYSTEM = 210;
	public static readonly TABLE = 211;
	public static readonly TABLES = 212;
	public static readonly TABLESAMPLE = 213;
	public static readonly TEXT = 214;
	public static readonly THEN = 215;
	public static readonly TIES = 216;
	public static readonly TIME = 217;
	public static readonly TIMESTAMP = 218;
	public static readonly TO = 219;
	public static readonly TRANSACTION = 220;
	public static readonly TRUE = 221;
	public static readonly TRY_CAST = 222;
	public static readonly TYPE = 223;
	public static readonly UESCAPE = 224;
	public static readonly UNBOUNDED = 225;
	public static readonly UNCOMMITTED = 226;
	public static readonly UNION = 227;
	public static readonly UNMATCHED = 228;
	public static readonly UNNEST = 229;
	public static readonly UPDATE = 230;
	public static readonly USE = 231;
	public static readonly USER = 232;
	public static readonly USING = 233;
	public static readonly VALIDATE = 234;
	public static readonly VALUES = 235;
	public static readonly VERBOSE = 236;
	public static readonly VIEW = 237;
	public static readonly WHEN = 238;
	public static readonly WHERE = 239;
	public static readonly WINDOW = 240;
	public static readonly WITH = 241;
	public static readonly WITHOUT = 242;
	public static readonly WORK = 243;
	public static readonly WRITE = 244;
	public static readonly YEAR = 245;
	public static readonly ZONE = 246;
	public static readonly EQ = 247;
	public static readonly NEQ = 248;
	public static readonly LT = 249;
	public static readonly LTE = 250;
	public static readonly GT = 251;
	public static readonly GTE = 252;
	public static readonly PLUS = 253;
	public static readonly MINUS = 254;
	public static readonly ASTERISK = 255;
	public static readonly SLASH = 256;
	public static readonly PERCENT = 257;
	public static readonly CONCAT = 258;
	public static readonly QUESTION_MARK = 259;
	public static readonly STRING = 260;
	public static readonly UNICODE_STRING = 261;
	public static readonly BINARY_LITERAL = 262;
	public static readonly INTEGER_VALUE = 263;
	public static readonly DECIMAL_VALUE = 264;
	public static readonly DOUBLE_VALUE = 265;
	public static readonly IDENTIFIER = 266;
	public static readonly DIGIT_IDENTIFIER = 267;
	public static readonly QUOTED_IDENTIFIER = 268;
	public static readonly BACKQUOTED_IDENTIFIER = 269;
	public static readonly SEMICOLON = 270;
	public static readonly SIMPLE_COMMENT = 271;
	public static readonly BRACKETED_COMMENT = 272;
	public static readonly WS = 273;
	public static readonly UNRECOGNIZED = 274;
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
                                                   "'GRANTS'", "'DENY'", 
                                                   "'GRAPHVIZ'", "'GROUP'", 
                                                   "'GROUPING'", "'GROUPS'", 
                                                   "'HAVING'", "'HOUR'", 
                                                   "'IF'", "'IGNORE'", "'IN'", 
                                                   "'INCLUDING'", "'INITIAL'", 
                                                   "'INNER'", "'INPUT'", 
                                                   "'INSERT'", "'INTERSECT'", 
                                                   "'INTERVAL'", "'INTO'", 
                                                   "'INVOKER'", "'IO'", 
                                                   "'IS'", "'ISOLATION'", 
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
                                                    "GRANTS", "DENY", "GRAPHVIZ", 
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
		"GRANT", "GRANTED", "GRANTS", "DENY", "GRAPHVIZ", "GROUP", "GROUPING", 
		"GROUPS", "HAVING", "HOUR", "IF", "IGNORE", "IN", "INCLUDING", "INITIAL", 
		"INNER", "INPUT", "INSERT", "INTERSECT", "INTERVAL", "INTO", "INVOKER", 
		"IO", "IS", "ISOLATION", "JOIN", "JSON", "LAST", "LATERAL", "LEFT", "LEVEL", 
		"LIKE", "LIMIT", "LOCAL", "LOCALTIME", "LOCALTIMESTAMP", "LOGICAL", "MAP", 
		"MATCH", "MATCHED", "MATCHES", "MATCH_RECOGNIZE", "MATERIALIZED", "MEASURES", 
		"MERGE", "MINUTE", "MONTH", "NATURAL", "NEXT", "NFC", "NFD", "NFKC", "NFKD", 
		"NO", "NONE", "NORMALIZE", "NOT", "NULL", "NULLIF", "NULLS", "OFFSET", 
		"OMIT", "ON", "ONE", "ONLY", "OPTION", "OR", "ORDER", "ORDINALITY", "OUTER", 
		"OUTPUT", "OVER", "PARTITION", "PARTITIONS", "PAST", "PATH", "PATTERN", 
		"PER", "PERMUTE", "POSITION", "PRECEDING", "PRECISION", "PREPARE", "PRIVILEGES", 
		"PROPERTIES", "RANGE", "READ", "RECURSIVE", "REFRESH", "RENAME", "REPEATABLE", 
		"REPLACE", "RESET", "RESPECT", "RESTRICT", "REVOKE", "RIGHT", "ROLE", 
		"ROLES", "ROLLBACK", "ROLLUP", "ROW", "ROWS", "RUNNING", "SCHEMA", "SCHEMAS", 
		"SECOND", "SECURITY", "SEEK", "SELECT", "SERIALIZABLE", "SESSION", "SET", 
		"SETS", "SHOW", "SOME", "START", "STATS", "SUBSET", "SUBSTRING", "SYSTEM", 
		"TABLE", "TABLES", "TABLESAMPLE", "TEXT", "THEN", "TIES", "TIME", "TIMESTAMP", 
		"TO", "TRANSACTION", "TRUE", "TRY_CAST", "TYPE", "UESCAPE", "UNBOUNDED", 
		"UNCOMMITTED", "UNION", "UNMATCHED", "UNNEST", "UPDATE", "USE", "USER", 
		"USING", "VALIDATE", "VALUES", "VERBOSE", "VIEW", "WHEN", "WHERE", "WINDOW", 
		"WITH", "WITHOUT", "WORK", "WRITE", "YEAR", "ZONE", "EQ", "NEQ", "LT", 
		"LTE", "GT", "GTE", "PLUS", "MINUS", "ASTERISK", "SLASH", "PERCENT", "CONCAT", 
		"QUESTION_MARK", "STRING", "UNICODE_STRING", "BINARY_LITERAL", "INTEGER_VALUE", 
		"DECIMAL_VALUE", "DOUBLE_VALUE", "IDENTIFIER", "DIGIT_IDENTIFIER", "QUOTED_IDENTIFIER", 
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

	public static readonly _serializedATN: number[] = [4,0,274,2446,6,-1,2,
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
	1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,
	1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,
	13,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,
	1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,
	20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,
	1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,26,1,
	26,1,26,1,26,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,
	1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,
	29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,32,1,32,1,32,
	1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,
	34,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,
	1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,
	38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,
	1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,
	42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,
	1,44,1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,
	46,1,46,1,46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,
	1,47,1,47,1,47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,
	48,1,48,1,48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,
	1,49,1,49,1,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,
	50,1,50,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,
	1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,
	52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,
	1,53,1,53,1,53,1,53,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,
	54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,57,1,57,
	1,57,1,57,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,59,1,
	59,1,59,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,61,
	1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,63,1,
	63,1,63,1,63,1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,
	1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,66,1,66,1,
	66,1,66,1,66,1,66,1,66,1,67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,
	1,69,1,69,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,70,1,71,1,71,1,71,1,71,1,
	71,1,71,1,71,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,73,1,73,1,73,1,73,1,73,
	1,73,1,73,1,73,1,73,1,73,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,75,1,
	75,1,75,1,75,1,75,1,75,1,75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,77,
	1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,79,1,
	79,1,79,1,79,1,79,1,79,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,81,1,81,1,81,
	1,81,1,81,1,81,1,82,1,82,1,82,1,82,1,82,1,82,1,83,1,83,1,83,1,83,1,83,1,
	83,1,83,1,83,1,83,1,83,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,1,85,
	1,85,1,86,1,86,1,86,1,86,1,86,1,87,1,87,1,87,1,87,1,87,1,88,1,88,1,88,1,
	88,1,88,1,88,1,88,1,88,1,88,1,88,1,89,1,89,1,89,1,89,1,89,1,89,1,90,1,90,
	1,90,1,90,1,90,1,90,1,90,1,90,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,92,1,
	92,1,92,1,92,1,92,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,94,1,94,
	1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,96,1,
	96,1,96,1,96,1,96,1,96,1,96,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,98,1,98,
	1,98,1,98,1,98,1,99,1,99,1,99,1,100,1,100,1,100,1,100,1,100,1,100,1,100,
	1,101,1,101,1,101,1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,102,
	1,102,1,103,1,103,1,103,1,103,1,103,1,103,1,103,1,103,1,104,1,104,1,104,
	1,104,1,104,1,104,1,105,1,105,1,105,1,105,1,105,1,105,1,106,1,106,1,106,
	1,106,1,106,1,106,1,106,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,
	1,107,1,107,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,109,
	1,109,1,109,1,109,1,109,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,110,
	1,111,1,111,1,111,1,112,1,112,1,112,1,113,1,113,1,113,1,113,1,113,1,113,
	1,113,1,113,1,113,1,113,1,114,1,114,1,114,1,114,1,114,1,115,1,115,1,115,
	1,115,1,115,1,116,1,116,1,116,1,116,1,116,1,117,1,117,1,117,1,117,1,117,
	1,117,1,117,1,117,1,118,1,118,1,118,1,118,1,118,1,119,1,119,1,119,1,119,
	1,119,1,119,1,120,1,120,1,120,1,120,1,120,1,121,1,121,1,121,1,121,1,121,
	1,121,1,122,1,122,1,122,1,122,1,122,1,122,1,123,1,123,1,123,1,123,1,123,
	1,123,1,123,1,123,1,123,1,123,1,124,1,124,1,124,1,124,1,124,1,124,1,124,
	1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,125,1,125,1,125,1,125,
	1,125,1,125,1,125,1,125,1,126,1,126,1,126,1,126,1,127,1,127,1,127,1,127,
	1,127,1,127,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,129,1,129,
	1,129,1,129,1,129,1,129,1,129,1,129,1,130,1,130,1,130,1,130,1,130,1,130,
	1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,131,1,131,
	1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,132,
	1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,133,1,133,1,133,1,133,
	1,133,1,133,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,135,1,135,1,135,
	1,135,1,135,1,135,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,137,
	1,137,1,137,1,137,1,137,1,138,1,138,1,138,1,138,1,139,1,139,1,139,1,139,
	1,140,1,140,1,140,1,140,1,140,1,141,1,141,1,141,1,141,1,141,1,142,1,142,
	1,142,1,143,1,143,1,143,1,143,1,143,1,144,1,144,1,144,1,144,1,144,1,144,
	1,144,1,144,1,144,1,144,1,145,1,145,1,145,1,145,1,146,1,146,1,146,1,146,
	1,146,1,147,1,147,1,147,1,147,1,147,1,147,1,147,1,148,1,148,1,148,1,148,
	1,148,1,148,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,150,1,150,1,150,
	1,150,1,150,1,151,1,151,1,151,1,152,1,152,1,152,1,152,1,153,1,153,1,153,
	1,153,1,153,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,155,1,155,1,155,
	1,156,1,156,1,156,1,156,1,156,1,156,1,157,1,157,1,157,1,157,1,157,1,157,
	1,157,1,157,1,157,1,157,1,157,1,158,1,158,1,158,1,158,1,158,1,158,1,159,
	1,159,1,159,1,159,1,159,1,159,1,159,1,160,1,160,1,160,1,160,1,160,1,161,
	1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,162,1,162,1,162,
	1,162,1,162,1,162,1,162,1,162,1,162,1,162,1,162,1,163,1,163,1,163,1,163,
	1,163,1,164,1,164,1,164,1,164,1,164,1,165,1,165,1,165,1,165,1,165,1,165,
	1,165,1,165,1,166,1,166,1,166,1,166,1,167,1,167,1,167,1,167,1,167,1,167,
	1,167,1,167,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,169,
	1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,170,1,170,1,170,
	1,170,1,170,1,170,1,170,1,170,1,170,1,170,1,171,1,171,1,171,1,171,1,171,
	1,171,1,171,1,171,1,172,1,172,1,172,1,172,1,172,1,172,1,172,1,172,1,172,
	1,172,1,172,1,173,1,173,1,173,1,173,1,173,1,173,1,173,1,173,1,173,1,173,
	1,173,1,174,1,174,1,174,1,174,1,174,1,174,1,175,1,175,1,175,1,175,1,175,
	1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,177,1,177,
	1,177,1,177,1,177,1,177,1,177,1,177,1,178,1,178,1,178,1,178,1,178,1,178,
	1,178,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,179,
	1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,181,1,181,1,181,1,181,
	1,181,1,181,1,182,1,182,1,182,1,182,1,182,1,182,1,182,1,182,1,183,1,183,
	1,183,1,183,1,183,1,183,1,183,1,183,1,183,1,184,1,184,1,184,1,184,1,184,
	1,184,1,184,1,185,1,185,1,185,1,185,1,185,1,185,1,186,1,186,1,186,1,186,
	1,186,1,187,1,187,1,187,1,187,1,187,1,187,1,188,1,188,1,188,1,188,1,188,
	1,188,1,188,1,188,1,188,1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,190,
	1,190,1,190,1,190,1,191,1,191,1,191,1,191,1,191,1,192,1,192,1,192,1,192,
	1,192,1,192,1,192,1,192,1,193,1,193,1,193,1,193,1,193,1,193,1,193,1,194,
	1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,195,1,195,1,195,1,195,1,195,
	1,195,1,195,1,196,1,196,1,196,1,196,1,196,1,196,1,196,1,196,1,196,1,197,
	1,197,1,197,1,197,1,197,1,198,1,198,1,198,1,198,1,198,1,198,1,198,1,199,
	1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,
	1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,201,1,201,1,201,1,201,
	1,202,1,202,1,202,1,202,1,202,1,203,1,203,1,203,1,203,1,203,1,204,1,204,
	1,204,1,204,1,204,1,205,1,205,1,205,1,205,1,205,1,205,1,206,1,206,1,206,
	1,206,1,206,1,206,1,207,1,207,1,207,1,207,1,207,1,207,1,207,1,208,1,208,
	1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,209,1,209,1,209,1,209,
	1,209,1,209,1,209,1,210,1,210,1,210,1,210,1,210,1,210,1,211,1,211,1,211,
	1,211,1,211,1,211,1,211,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,
	1,212,1,212,1,212,1,212,1,213,1,213,1,213,1,213,1,213,1,214,1,214,1,214,
	1,214,1,214,1,215,1,215,1,215,1,215,1,215,1,216,1,216,1,216,1,216,1,216,
	1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,218,1,218,
	1,218,1,219,1,219,1,219,1,219,1,219,1,219,1,219,1,219,1,219,1,219,1,219,
	1,219,1,220,1,220,1,220,1,220,1,220,1,221,1,221,1,221,1,221,1,221,1,221,
	1,221,1,221,1,221,1,222,1,222,1,222,1,222,1,222,1,223,1,223,1,223,1,223,
	1,223,1,223,1,223,1,223,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,
	1,224,1,224,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,
	1,225,1,225,1,226,1,226,1,226,1,226,1,226,1,226,1,227,1,227,1,227,1,227,
	1,227,1,227,1,227,1,227,1,227,1,227,1,228,1,228,1,228,1,228,1,228,1,228,
	1,228,1,229,1,229,1,229,1,229,1,229,1,229,1,229,1,230,1,230,1,230,1,230,
	1,231,1,231,1,231,1,231,1,231,1,232,1,232,1,232,1,232,1,232,1,232,1,233,
	1,233,1,233,1,233,1,233,1,233,1,233,1,233,1,233,1,234,1,234,1,234,1,234,
	1,234,1,234,1,234,1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,236,
	1,236,1,236,1,236,1,236,1,237,1,237,1,237,1,237,1,237,1,238,1,238,1,238,
	1,238,1,238,1,238,1,239,1,239,1,239,1,239,1,239,1,239,1,239,1,240,1,240,
	1,240,1,240,1,240,1,241,1,241,1,241,1,241,1,241,1,241,1,241,1,241,1,242,
	1,242,1,242,1,242,1,242,1,243,1,243,1,243,1,243,1,243,1,243,1,244,1,244,
	1,244,1,244,1,244,1,245,1,245,1,245,1,245,1,245,1,246,1,246,1,247,1,247,
	1,247,1,247,3,247,2236,8,247,1,248,1,248,1,249,1,249,1,249,1,250,1,250,
	1,251,1,251,1,251,1,252,1,252,1,253,1,253,1,254,1,254,1,255,1,255,1,256,
	1,256,1,257,1,257,1,257,1,258,1,258,1,259,1,259,1,259,1,259,5,259,2267,
	8,259,10,259,12,259,2270,9,259,1,259,1,259,1,260,1,260,1,260,1,260,1,260,
	1,260,1,260,5,260,2281,8,260,10,260,12,260,2284,9,260,1,260,1,260,1,261,
	1,261,1,261,1,261,5,261,2292,8,261,10,261,12,261,2295,9,261,1,261,1,261,
	1,262,4,262,2300,8,262,11,262,12,262,2301,1,263,4,263,2305,8,263,11,263,
	12,263,2306,1,263,1,263,5,263,2311,8,263,10,263,12,263,2314,9,263,1,263,
	1,263,4,263,2318,8,263,11,263,12,263,2319,3,263,2322,8,263,1,264,4,264,
	2325,8,264,11,264,12,264,2326,1,264,1,264,5,264,2331,8,264,10,264,12,264,
	2334,9,264,3,264,2336,8,264,1,264,1,264,1,264,1,264,4,264,2342,8,264,11,
	264,12,264,2343,1,264,1,264,3,264,2348,8,264,1,265,1,265,3,265,2352,8,265,
	1,265,1,265,1,265,5,265,2357,8,265,10,265,12,265,2360,9,265,1,266,1,266,
	1,266,1,266,4,266,2366,8,266,11,266,12,266,2367,1,267,1,267,1,267,1,267,
	5,267,2374,8,267,10,267,12,267,2377,9,267,1,267,1,267,1,268,1,268,1,268,
	1,268,5,268,2385,8,268,10,268,12,268,2388,9,268,1,268,1,268,1,269,1,269,
	1,270,1,270,3,270,2396,8,270,1,270,4,270,2399,8,270,11,270,12,270,2400,
	1,271,1,271,1,272,1,272,1,273,1,273,1,273,1,273,5,273,2411,8,273,10,273,
	12,273,2414,9,273,1,273,3,273,2417,8,273,1,273,3,273,2420,8,273,1,273,1,
	273,1,274,1,274,1,274,1,274,5,274,2428,8,274,10,274,12,274,2431,9,274,1,
	274,1,274,1,274,1,274,1,274,1,275,4,275,2439,8,275,11,275,12,275,2440,1,
	275,1,275,1,276,1,276,1,2429,0,277,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,
	9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,
	21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,
	33,67,34,69,35,71,36,73,37,75,38,77,39,79,40,81,41,83,42,85,43,87,44,89,
	45,91,46,93,47,95,48,97,49,99,50,101,51,103,52,105,53,107,54,109,55,111,
	56,113,57,115,58,117,59,119,60,121,61,123,62,125,63,127,64,129,65,131,66,
	133,67,135,68,137,69,139,70,141,71,143,72,145,73,147,74,149,75,151,76,153,
	77,155,78,157,79,159,80,161,81,163,82,165,83,167,84,169,85,171,86,173,87,
	175,88,177,89,179,90,181,91,183,92,185,93,187,94,189,95,191,96,193,97,195,
	98,197,99,199,100,201,101,203,102,205,103,207,104,209,105,211,106,213,107,
	215,108,217,109,219,110,221,111,223,112,225,113,227,114,229,115,231,116,
	233,117,235,118,237,119,239,120,241,121,243,122,245,123,247,124,249,125,
	251,126,253,127,255,128,257,129,259,130,261,131,263,132,265,133,267,134,
	269,135,271,136,273,137,275,138,277,139,279,140,281,141,283,142,285,143,
	287,144,289,145,291,146,293,147,295,148,297,149,299,150,301,151,303,152,
	305,153,307,154,309,155,311,156,313,157,315,158,317,159,319,160,321,161,
	323,162,325,163,327,164,329,165,331,166,333,167,335,168,337,169,339,170,
	341,171,343,172,345,173,347,174,349,175,351,176,353,177,355,178,357,179,
	359,180,361,181,363,182,365,183,367,184,369,185,371,186,373,187,375,188,
	377,189,379,190,381,191,383,192,385,193,387,194,389,195,391,196,393,197,
	395,198,397,199,399,200,401,201,403,202,405,203,407,204,409,205,411,206,
	413,207,415,208,417,209,419,210,421,211,423,212,425,213,427,214,429,215,
	431,216,433,217,435,218,437,219,439,220,441,221,443,222,445,223,447,224,
	449,225,451,226,453,227,455,228,457,229,459,230,461,231,463,232,465,233,
	467,234,469,235,471,236,473,237,475,238,477,239,479,240,481,241,483,242,
	485,243,487,244,489,245,491,246,493,247,495,248,497,249,499,250,501,251,
	503,252,505,253,507,254,509,255,511,256,513,257,515,258,517,259,519,260,
	521,261,523,262,525,263,527,264,529,265,531,266,533,267,535,268,537,269,
	539,270,541,0,543,0,545,0,547,271,549,272,551,273,553,274,1,0,8,1,0,39,
	39,1,0,34,34,1,0,96,96,2,0,43,43,45,45,1,0,48,57,1,0,65,90,2,0,10,10,13,
	13,3,0,9,10,13,13,32,32,2476,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,
	0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,
	19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,
	0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,
	41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,
	0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,
	63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,
	0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,
	85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,
	0,0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,0,
	0,107,1,0,0,0,0,109,1,0,0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,115,1,0,0,0,0,
	117,1,0,0,0,0,119,1,0,0,0,0,121,1,0,0,0,0,123,1,0,0,0,0,125,1,0,0,0,0,127,
	1,0,0,0,0,129,1,0,0,0,0,131,1,0,0,0,0,133,1,0,0,0,0,135,1,0,0,0,0,137,1,
	0,0,0,0,139,1,0,0,0,0,141,1,0,0,0,0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,
	0,0,0,149,1,0,0,0,0,151,1,0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,
	0,0,159,1,0,0,0,0,161,1,0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,0,
	0,169,1,0,0,0,0,171,1,0,0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,177,1,0,0,0,0,
	179,1,0,0,0,0,181,1,0,0,0,0,183,1,0,0,0,0,185,1,0,0,0,0,187,1,0,0,0,0,189,
	1,0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,0,195,1,0,0,0,0,197,1,0,0,0,0,199,1,
	0,0,0,0,201,1,0,0,0,0,203,1,0,0,0,0,205,1,0,0,0,0,207,1,0,0,0,0,209,1,0,
	0,0,0,211,1,0,0,0,0,213,1,0,0,0,0,215,1,0,0,0,0,217,1,0,0,0,0,219,1,0,0,
	0,0,221,1,0,0,0,0,223,1,0,0,0,0,225,1,0,0,0,0,227,1,0,0,0,0,229,1,0,0,0,
	0,231,1,0,0,0,0,233,1,0,0,0,0,235,1,0,0,0,0,237,1,0,0,0,0,239,1,0,0,0,0,
	241,1,0,0,0,0,243,1,0,0,0,0,245,1,0,0,0,0,247,1,0,0,0,0,249,1,0,0,0,0,251,
	1,0,0,0,0,253,1,0,0,0,0,255,1,0,0,0,0,257,1,0,0,0,0,259,1,0,0,0,0,261,1,
	0,0,0,0,263,1,0,0,0,0,265,1,0,0,0,0,267,1,0,0,0,0,269,1,0,0,0,0,271,1,0,
	0,0,0,273,1,0,0,0,0,275,1,0,0,0,0,277,1,0,0,0,0,279,1,0,0,0,0,281,1,0,0,
	0,0,283,1,0,0,0,0,285,1,0,0,0,0,287,1,0,0,0,0,289,1,0,0,0,0,291,1,0,0,0,
	0,293,1,0,0,0,0,295,1,0,0,0,0,297,1,0,0,0,0,299,1,0,0,0,0,301,1,0,0,0,0,
	303,1,0,0,0,0,305,1,0,0,0,0,307,1,0,0,0,0,309,1,0,0,0,0,311,1,0,0,0,0,313,
	1,0,0,0,0,315,1,0,0,0,0,317,1,0,0,0,0,319,1,0,0,0,0,321,1,0,0,0,0,323,1,
	0,0,0,0,325,1,0,0,0,0,327,1,0,0,0,0,329,1,0,0,0,0,331,1,0,0,0,0,333,1,0,
	0,0,0,335,1,0,0,0,0,337,1,0,0,0,0,339,1,0,0,0,0,341,1,0,0,0,0,343,1,0,0,
	0,0,345,1,0,0,0,0,347,1,0,0,0,0,349,1,0,0,0,0,351,1,0,0,0,0,353,1,0,0,0,
	0,355,1,0,0,0,0,357,1,0,0,0,0,359,1,0,0,0,0,361,1,0,0,0,0,363,1,0,0,0,0,
	365,1,0,0,0,0,367,1,0,0,0,0,369,1,0,0,0,0,371,1,0,0,0,0,373,1,0,0,0,0,375,
	1,0,0,0,0,377,1,0,0,0,0,379,1,0,0,0,0,381,1,0,0,0,0,383,1,0,0,0,0,385,1,
	0,0,0,0,387,1,0,0,0,0,389,1,0,0,0,0,391,1,0,0,0,0,393,1,0,0,0,0,395,1,0,
	0,0,0,397,1,0,0,0,0,399,1,0,0,0,0,401,1,0,0,0,0,403,1,0,0,0,0,405,1,0,0,
	0,0,407,1,0,0,0,0,409,1,0,0,0,0,411,1,0,0,0,0,413,1,0,0,0,0,415,1,0,0,0,
	0,417,1,0,0,0,0,419,1,0,0,0,0,421,1,0,0,0,0,423,1,0,0,0,0,425,1,0,0,0,0,
	427,1,0,0,0,0,429,1,0,0,0,0,431,1,0,0,0,0,433,1,0,0,0,0,435,1,0,0,0,0,437,
	1,0,0,0,0,439,1,0,0,0,0,441,1,0,0,0,0,443,1,0,0,0,0,445,1,0,0,0,0,447,1,
	0,0,0,0,449,1,0,0,0,0,451,1,0,0,0,0,453,1,0,0,0,0,455,1,0,0,0,0,457,1,0,
	0,0,0,459,1,0,0,0,0,461,1,0,0,0,0,463,1,0,0,0,0,465,1,0,0,0,0,467,1,0,0,
	0,0,469,1,0,0,0,0,471,1,0,0,0,0,473,1,0,0,0,0,475,1,0,0,0,0,477,1,0,0,0,
	0,479,1,0,0,0,0,481,1,0,0,0,0,483,1,0,0,0,0,485,1,0,0,0,0,487,1,0,0,0,0,
	489,1,0,0,0,0,491,1,0,0,0,0,493,1,0,0,0,0,495,1,0,0,0,0,497,1,0,0,0,0,499,
	1,0,0,0,0,501,1,0,0,0,0,503,1,0,0,0,0,505,1,0,0,0,0,507,1,0,0,0,0,509,1,
	0,0,0,0,511,1,0,0,0,0,513,1,0,0,0,0,515,1,0,0,0,0,517,1,0,0,0,0,519,1,0,
	0,0,0,521,1,0,0,0,0,523,1,0,0,0,0,525,1,0,0,0,0,527,1,0,0,0,0,529,1,0,0,
	0,0,531,1,0,0,0,0,533,1,0,0,0,0,535,1,0,0,0,0,537,1,0,0,0,0,539,1,0,0,0,
	0,547,1,0,0,0,0,549,1,0,0,0,0,551,1,0,0,0,0,553,1,0,0,0,1,555,1,0,0,0,3,
	557,1,0,0,0,5,559,1,0,0,0,7,561,1,0,0,0,9,563,1,0,0,0,11,568,1,0,0,0,13,
	571,1,0,0,0,15,573,1,0,0,0,17,575,1,0,0,0,19,577,1,0,0,0,21,579,1,0,0,0,
	23,581,1,0,0,0,25,584,1,0,0,0,27,587,1,0,0,0,29,589,1,0,0,0,31,591,1,0,
	0,0,33,594,1,0,0,0,35,598,1,0,0,0,37,604,1,0,0,0,39,610,1,0,0,0,41,614,
	1,0,0,0,43,620,1,0,0,0,45,628,1,0,0,0,47,632,1,0,0,0,49,636,1,0,0,0,51,
	642,1,0,0,0,53,645,1,0,0,0,55,649,1,0,0,0,57,652,1,0,0,0,59,666,1,0,0,0,
	61,676,1,0,0,0,63,684,1,0,0,0,65,687,1,0,0,0,67,692,1,0,0,0,69,700,1,0,
	0,0,71,705,1,0,0,0,73,710,1,0,0,0,75,719,1,0,0,0,77,726,1,0,0,0,79,734,
	1,0,0,0,81,742,1,0,0,0,83,749,1,0,0,0,85,759,1,0,0,0,87,770,1,0,0,0,89,
	777,1,0,0,0,91,783,1,0,0,0,93,788,1,0,0,0,95,796,1,0,0,0,97,812,1,0,0,0,
	99,825,1,0,0,0,101,838,1,0,0,0,103,851,1,0,0,0,105,866,1,0,0,0,107,879,
	1,0,0,0,109,897,1,0,0,0,111,910,1,0,0,0,113,915,1,0,0,0,115,920,1,0,0,0,
	117,924,1,0,0,0,119,935,1,0,0,0,121,943,1,0,0,0,123,950,1,0,0,0,125,955,
	1,0,0,0,127,964,1,0,0,0,129,971,1,0,0,0,131,980,1,0,0,0,133,992,1,0,0,0,
	135,999,1,0,0,0,137,1004,1,0,0,0,139,1009,1,0,0,0,141,1015,1,0,0,0,143,
	1019,1,0,0,0,145,1026,1,0,0,0,147,1033,1,0,0,0,149,1043,1,0,0,0,151,1051,
	1,0,0,0,153,1058,1,0,0,0,155,1066,1,0,0,0,157,1074,1,0,0,0,159,1080,1,0,
	0,0,161,1086,1,0,0,0,163,1093,1,0,0,0,165,1099,1,0,0,0,167,1105,1,0,0,0,
	169,1115,1,0,0,0,171,1119,1,0,0,0,173,1126,1,0,0,0,175,1131,1,0,0,0,177,
	1136,1,0,0,0,179,1146,1,0,0,0,181,1152,1,0,0,0,183,1160,1,0,0,0,185,1167,
	1,0,0,0,187,1172,1,0,0,0,189,1181,1,0,0,0,191,1187,1,0,0,0,193,1196,1,0,
	0,0,195,1203,1,0,0,0,197,1210,1,0,0,0,199,1215,1,0,0,0,201,1218,1,0,0,0,
	203,1225,1,0,0,0,205,1228,1,0,0,0,207,1238,1,0,0,0,209,1246,1,0,0,0,211,
	1252,1,0,0,0,213,1258,1,0,0,0,215,1265,1,0,0,0,217,1275,1,0,0,0,219,1284,
	1,0,0,0,221,1289,1,0,0,0,223,1297,1,0,0,0,225,1300,1,0,0,0,227,1303,1,0,
	0,0,229,1313,1,0,0,0,231,1318,1,0,0,0,233,1323,1,0,0,0,235,1328,1,0,0,0,
	237,1336,1,0,0,0,239,1341,1,0,0,0,241,1347,1,0,0,0,243,1352,1,0,0,0,245,
	1358,1,0,0,0,247,1364,1,0,0,0,249,1374,1,0,0,0,251,1389,1,0,0,0,253,1397,
	1,0,0,0,255,1401,1,0,0,0,257,1407,1,0,0,0,259,1415,1,0,0,0,261,1423,1,0,
	0,0,263,1439,1,0,0,0,265,1452,1,0,0,0,267,1461,1,0,0,0,269,1467,1,0,0,0,
	271,1474,1,0,0,0,273,1480,1,0,0,0,275,1488,1,0,0,0,277,1493,1,0,0,0,279,
	1497,1,0,0,0,281,1501,1,0,0,0,283,1506,1,0,0,0,285,1511,1,0,0,0,287,1514,
	1,0,0,0,289,1519,1,0,0,0,291,1529,1,0,0,0,293,1533,1,0,0,0,295,1538,1,0,
	0,0,297,1545,1,0,0,0,299,1551,1,0,0,0,301,1558,1,0,0,0,303,1563,1,0,0,0,
	305,1566,1,0,0,0,307,1570,1,0,0,0,309,1575,1,0,0,0,311,1582,1,0,0,0,313,
	1585,1,0,0,0,315,1591,1,0,0,0,317,1602,1,0,0,0,319,1608,1,0,0,0,321,1615,
	1,0,0,0,323,1620,1,0,0,0,325,1630,1,0,0,0,327,1641,1,0,0,0,329,1646,1,0,
	0,0,331,1651,1,0,0,0,333,1659,1,0,0,0,335,1663,1,0,0,0,337,1671,1,0,0,0,
	339,1680,1,0,0,0,341,1690,1,0,0,0,343,1700,1,0,0,0,345,1708,1,0,0,0,347,
	1719,1,0,0,0,349,1730,1,0,0,0,351,1736,1,0,0,0,353,1741,1,0,0,0,355,1751,
	1,0,0,0,357,1759,1,0,0,0,359,1766,1,0,0,0,361,1777,1,0,0,0,363,1785,1,0,
	0,0,365,1791,1,0,0,0,367,1799,1,0,0,0,369,1808,1,0,0,0,371,1815,1,0,0,0,
	373,1821,1,0,0,0,375,1826,1,0,0,0,377,1832,1,0,0,0,379,1841,1,0,0,0,381,
	1848,1,0,0,0,383,1852,1,0,0,0,385,1857,1,0,0,0,387,1865,1,0,0,0,389,1872,
	1,0,0,0,391,1880,1,0,0,0,393,1887,1,0,0,0,395,1896,1,0,0,0,397,1901,1,0,
	0,0,399,1908,1,0,0,0,401,1921,1,0,0,0,403,1929,1,0,0,0,405,1933,1,0,0,0,
	407,1938,1,0,0,0,409,1943,1,0,0,0,411,1948,1,0,0,0,413,1954,1,0,0,0,415,
	1960,1,0,0,0,417,1967,1,0,0,0,419,1977,1,0,0,0,421,1984,1,0,0,0,423,1990,
	1,0,0,0,425,1997,1,0,0,0,427,2009,1,0,0,0,429,2014,1,0,0,0,431,2019,1,0,
	0,0,433,2024,1,0,0,0,435,2029,1,0,0,0,437,2039,1,0,0,0,439,2042,1,0,0,0,
	441,2054,1,0,0,0,443,2059,1,0,0,0,445,2068,1,0,0,0,447,2073,1,0,0,0,449,
	2081,1,0,0,0,451,2091,1,0,0,0,453,2103,1,0,0,0,455,2109,1,0,0,0,457,2119,
	1,0,0,0,459,2126,1,0,0,0,461,2133,1,0,0,0,463,2137,1,0,0,0,465,2142,1,0,
	0,0,467,2148,1,0,0,0,469,2157,1,0,0,0,471,2164,1,0,0,0,473,2172,1,0,0,0,
	475,2177,1,0,0,0,477,2182,1,0,0,0,479,2188,1,0,0,0,481,2195,1,0,0,0,483,
	2200,1,0,0,0,485,2208,1,0,0,0,487,2213,1,0,0,0,489,2219,1,0,0,0,491,2224,
	1,0,0,0,493,2229,1,0,0,0,495,2235,1,0,0,0,497,2237,1,0,0,0,499,2239,1,0,
	0,0,501,2242,1,0,0,0,503,2244,1,0,0,0,505,2247,1,0,0,0,507,2249,1,0,0,0,
	509,2251,1,0,0,0,511,2253,1,0,0,0,513,2255,1,0,0,0,515,2257,1,0,0,0,517,
	2260,1,0,0,0,519,2262,1,0,0,0,521,2273,1,0,0,0,523,2287,1,0,0,0,525,2299,
	1,0,0,0,527,2321,1,0,0,0,529,2347,1,0,0,0,531,2351,1,0,0,0,533,2361,1,0,
	0,0,535,2369,1,0,0,0,537,2380,1,0,0,0,539,2391,1,0,0,0,541,2393,1,0,0,0,
	543,2402,1,0,0,0,545,2404,1,0,0,0,547,2406,1,0,0,0,549,2423,1,0,0,0,551,
	2438,1,0,0,0,553,2444,1,0,0,0,555,556,5,46,0,0,556,2,1,0,0,0,557,558,5,
	40,0,0,558,4,1,0,0,0,559,560,5,41,0,0,560,6,1,0,0,0,561,562,5,44,0,0,562,
	8,1,0,0,0,563,564,5,83,0,0,564,565,5,75,0,0,565,566,5,73,0,0,566,567,5,
	80,0,0,567,10,1,0,0,0,568,569,5,45,0,0,569,570,5,62,0,0,570,12,1,0,0,0,
	571,572,5,91,0,0,572,14,1,0,0,0,573,574,5,93,0,0,574,16,1,0,0,0,575,576,
	5,124,0,0,576,18,1,0,0,0,577,578,5,94,0,0,578,20,1,0,0,0,579,580,5,36,0,
	0,580,22,1,0,0,0,581,582,5,123,0,0,582,583,5,45,0,0,583,24,1,0,0,0,584,
	585,5,45,0,0,585,586,5,125,0,0,586,26,1,0,0,0,587,588,5,123,0,0,588,28,
	1,0,0,0,589,590,5,125,0,0,590,30,1,0,0,0,591,592,5,61,0,0,592,593,5,62,
	0,0,593,32,1,0,0,0,594,595,5,65,0,0,595,596,5,68,0,0,596,597,5,68,0,0,597,
	34,1,0,0,0,598,599,5,65,0,0,599,600,5,68,0,0,600,601,5,77,0,0,601,602,5,
	73,0,0,602,603,5,78,0,0,603,36,1,0,0,0,604,605,5,65,0,0,605,606,5,70,0,
	0,606,607,5,84,0,0,607,608,5,69,0,0,608,609,5,82,0,0,609,38,1,0,0,0,610,
	611,5,65,0,0,611,612,5,76,0,0,612,613,5,76,0,0,613,40,1,0,0,0,614,615,5,
	65,0,0,615,616,5,76,0,0,616,617,5,84,0,0,617,618,5,69,0,0,618,619,5,82,
	0,0,619,42,1,0,0,0,620,621,5,65,0,0,621,622,5,78,0,0,622,623,5,65,0,0,623,
	624,5,76,0,0,624,625,5,89,0,0,625,626,5,90,0,0,626,627,5,69,0,0,627,44,
	1,0,0,0,628,629,5,65,0,0,629,630,5,78,0,0,630,631,5,68,0,0,631,46,1,0,0,
	0,632,633,5,65,0,0,633,634,5,78,0,0,634,635,5,89,0,0,635,48,1,0,0,0,636,
	637,5,65,0,0,637,638,5,82,0,0,638,639,5,82,0,0,639,640,5,65,0,0,640,641,
	5,89,0,0,641,50,1,0,0,0,642,643,5,65,0,0,643,644,5,83,0,0,644,52,1,0,0,
	0,645,646,5,65,0,0,646,647,5,83,0,0,647,648,5,67,0,0,648,54,1,0,0,0,649,
	650,5,65,0,0,650,651,5,84,0,0,651,56,1,0,0,0,652,653,5,65,0,0,653,654,5,
	85,0,0,654,655,5,84,0,0,655,656,5,72,0,0,656,657,5,79,0,0,657,658,5,82,
	0,0,658,659,5,73,0,0,659,660,5,90,0,0,660,661,5,65,0,0,661,662,5,84,0,0,
	662,663,5,73,0,0,663,664,5,79,0,0,664,665,5,78,0,0,665,58,1,0,0,0,666,667,
	5,66,0,0,667,668,5,69,0,0,668,669,5,82,0,0,669,670,5,78,0,0,670,671,5,79,
	0,0,671,672,5,85,0,0,672,673,5,76,0,0,673,674,5,76,0,0,674,675,5,73,0,0,
	675,60,1,0,0,0,676,677,5,66,0,0,677,678,5,69,0,0,678,679,5,84,0,0,679,680,
	5,87,0,0,680,681,5,69,0,0,681,682,5,69,0,0,682,683,5,78,0,0,683,62,1,0,
	0,0,684,685,5,66,0,0,685,686,5,89,0,0,686,64,1,0,0,0,687,688,5,67,0,0,688,
	689,5,65,0,0,689,690,5,76,0,0,690,691,5,76,0,0,691,66,1,0,0,0,692,693,5,
	67,0,0,693,694,5,65,0,0,694,695,5,83,0,0,695,696,5,67,0,0,696,697,5,65,
	0,0,697,698,5,68,0,0,698,699,5,69,0,0,699,68,1,0,0,0,700,701,5,67,0,0,701,
	702,5,65,0,0,702,703,5,83,0,0,703,704,5,69,0,0,704,70,1,0,0,0,705,706,5,
	67,0,0,706,707,5,65,0,0,707,708,5,83,0,0,708,709,5,84,0,0,709,72,1,0,0,
	0,710,711,5,67,0,0,711,712,5,65,0,0,712,713,5,84,0,0,713,714,5,65,0,0,714,
	715,5,76,0,0,715,716,5,79,0,0,716,717,5,71,0,0,717,718,5,83,0,0,718,74,
	1,0,0,0,719,720,5,67,0,0,720,721,5,79,0,0,721,722,5,76,0,0,722,723,5,85,
	0,0,723,724,5,77,0,0,724,725,5,78,0,0,725,76,1,0,0,0,726,727,5,67,0,0,727,
	728,5,79,0,0,728,729,5,76,0,0,729,730,5,85,0,0,730,731,5,77,0,0,731,732,
	5,78,0,0,732,733,5,83,0,0,733,78,1,0,0,0,734,735,5,67,0,0,735,736,5,79,
	0,0,736,737,5,77,0,0,737,738,5,77,0,0,738,739,5,69,0,0,739,740,5,78,0,0,
	740,741,5,84,0,0,741,80,1,0,0,0,742,743,5,67,0,0,743,744,5,79,0,0,744,745,
	5,77,0,0,745,746,5,77,0,0,746,747,5,73,0,0,747,748,5,84,0,0,748,82,1,0,
	0,0,749,750,5,67,0,0,750,751,5,79,0,0,751,752,5,77,0,0,752,753,5,77,0,0,
	753,754,5,73,0,0,754,755,5,84,0,0,755,756,5,84,0,0,756,757,5,69,0,0,757,
	758,5,68,0,0,758,84,1,0,0,0,759,760,5,67,0,0,760,761,5,79,0,0,761,762,5,
	78,0,0,762,763,5,83,0,0,763,764,5,84,0,0,764,765,5,82,0,0,765,766,5,65,
	0,0,766,767,5,73,0,0,767,768,5,78,0,0,768,769,5,84,0,0,769,86,1,0,0,0,770,
	771,5,67,0,0,771,772,5,82,0,0,772,773,5,69,0,0,773,774,5,65,0,0,774,775,
	5,84,0,0,775,776,5,69,0,0,776,88,1,0,0,0,777,778,5,67,0,0,778,779,5,82,
	0,0,779,780,5,79,0,0,780,781,5,83,0,0,781,782,5,83,0,0,782,90,1,0,0,0,783,
	784,5,67,0,0,784,785,5,85,0,0,785,786,5,66,0,0,786,787,5,69,0,0,787,92,
	1,0,0,0,788,789,5,67,0,0,789,790,5,85,0,0,790,791,5,82,0,0,791,792,5,82,
	0,0,792,793,5,69,0,0,793,794,5,78,0,0,794,795,5,84,0,0,795,94,1,0,0,0,796,
	797,5,67,0,0,797,798,5,85,0,0,798,799,5,82,0,0,799,800,5,82,0,0,800,801,
	5,69,0,0,801,802,5,78,0,0,802,803,5,84,0,0,803,804,5,95,0,0,804,805,5,67,
	0,0,805,806,5,65,0,0,806,807,5,84,0,0,807,808,5,65,0,0,808,809,5,76,0,0,
	809,810,5,79,0,0,810,811,5,71,0,0,811,96,1,0,0,0,812,813,5,67,0,0,813,814,
	5,85,0,0,814,815,5,82,0,0,815,816,5,82,0,0,816,817,5,69,0,0,817,818,5,78,
	0,0,818,819,5,84,0,0,819,820,5,95,0,0,820,821,5,68,0,0,821,822,5,65,0,0,
	822,823,5,84,0,0,823,824,5,69,0,0,824,98,1,0,0,0,825,826,5,67,0,0,826,827,
	5,85,0,0,827,828,5,82,0,0,828,829,5,82,0,0,829,830,5,69,0,0,830,831,5,78,
	0,0,831,832,5,84,0,0,832,833,5,95,0,0,833,834,5,80,0,0,834,835,5,65,0,0,
	835,836,5,84,0,0,836,837,5,72,0,0,837,100,1,0,0,0,838,839,5,67,0,0,839,
	840,5,85,0,0,840,841,5,82,0,0,841,842,5,82,0,0,842,843,5,69,0,0,843,844,
	5,78,0,0,844,845,5,84,0,0,845,846,5,95,0,0,846,847,5,82,0,0,847,848,5,79,
	0,0,848,849,5,76,0,0,849,850,5,69,0,0,850,102,1,0,0,0,851,852,5,67,0,0,
	852,853,5,85,0,0,853,854,5,82,0,0,854,855,5,82,0,0,855,856,5,69,0,0,856,
	857,5,78,0,0,857,858,5,84,0,0,858,859,5,95,0,0,859,860,5,83,0,0,860,861,
	5,67,0,0,861,862,5,72,0,0,862,863,5,69,0,0,863,864,5,77,0,0,864,865,5,65,
	0,0,865,104,1,0,0,0,866,867,5,67,0,0,867,868,5,85,0,0,868,869,5,82,0,0,
	869,870,5,82,0,0,870,871,5,69,0,0,871,872,5,78,0,0,872,873,5,84,0,0,873,
	874,5,95,0,0,874,875,5,84,0,0,875,876,5,73,0,0,876,877,5,77,0,0,877,878,
	5,69,0,0,878,106,1,0,0,0,879,880,5,67,0,0,880,881,5,85,0,0,881,882,5,82,
	0,0,882,883,5,82,0,0,883,884,5,69,0,0,884,885,5,78,0,0,885,886,5,84,0,0,
	886,887,5,95,0,0,887,888,5,84,0,0,888,889,5,73,0,0,889,890,5,77,0,0,890,
	891,5,69,0,0,891,892,5,83,0,0,892,893,5,84,0,0,893,894,5,65,0,0,894,895,
	5,77,0,0,895,896,5,80,0,0,896,108,1,0,0,0,897,898,5,67,0,0,898,899,5,85,
	0,0,899,900,5,82,0,0,900,901,5,82,0,0,901,902,5,69,0,0,902,903,5,78,0,0,
	903,904,5,84,0,0,904,905,5,95,0,0,905,906,5,85,0,0,906,907,5,83,0,0,907,
	908,5,69,0,0,908,909,5,82,0,0,909,110,1,0,0,0,910,911,5,68,0,0,911,912,
	5,65,0,0,912,913,5,84,0,0,913,914,5,65,0,0,914,112,1,0,0,0,915,916,5,68,
	0,0,916,917,5,65,0,0,917,918,5,84,0,0,918,919,5,69,0,0,919,114,1,0,0,0,
	920,921,5,68,0,0,921,922,5,65,0,0,922,923,5,89,0,0,923,116,1,0,0,0,924,
	925,5,68,0,0,925,926,5,69,0,0,926,927,5,65,0,0,927,928,5,76,0,0,928,929,
	5,76,0,0,929,930,5,79,0,0,930,931,5,67,0,0,931,932,5,65,0,0,932,933,5,84,
	0,0,933,934,5,69,0,0,934,118,1,0,0,0,935,936,5,68,0,0,936,937,5,69,0,0,
	937,938,5,70,0,0,938,939,5,73,0,0,939,940,5,78,0,0,940,941,5,69,0,0,941,
	942,5,82,0,0,942,120,1,0,0,0,943,944,5,68,0,0,944,945,5,69,0,0,945,946,
	5,76,0,0,946,947,5,69,0,0,947,948,5,84,0,0,948,949,5,69,0,0,949,122,1,0,
	0,0,950,951,5,68,0,0,951,952,5,69,0,0,952,953,5,83,0,0,953,954,5,67,0,0,
	954,124,1,0,0,0,955,956,5,68,0,0,956,957,5,69,0,0,957,958,5,83,0,0,958,
	959,5,67,0,0,959,960,5,82,0,0,960,961,5,73,0,0,961,962,5,66,0,0,962,963,
	5,69,0,0,963,126,1,0,0,0,964,965,5,68,0,0,965,966,5,69,0,0,966,967,5,70,
	0,0,967,968,5,73,0,0,968,969,5,78,0,0,969,970,5,69,0,0,970,128,1,0,0,0,
	971,972,5,68,0,0,972,973,5,73,0,0,973,974,5,83,0,0,974,975,5,84,0,0,975,
	976,5,73,0,0,976,977,5,78,0,0,977,978,5,67,0,0,978,979,5,84,0,0,979,130,
	1,0,0,0,980,981,5,68,0,0,981,982,5,73,0,0,982,983,5,83,0,0,983,984,5,84,
	0,0,984,985,5,82,0,0,985,986,5,73,0,0,986,987,5,66,0,0,987,988,5,85,0,0,
	988,989,5,84,0,0,989,990,5,69,0,0,990,991,5,68,0,0,991,132,1,0,0,0,992,
	993,5,68,0,0,993,994,5,79,0,0,994,995,5,85,0,0,995,996,5,66,0,0,996,997,
	5,76,0,0,997,998,5,69,0,0,998,134,1,0,0,0,999,1000,5,68,0,0,1000,1001,5,
	82,0,0,1001,1002,5,79,0,0,1002,1003,5,80,0,0,1003,136,1,0,0,0,1004,1005,
	5,69,0,0,1005,1006,5,76,0,0,1006,1007,5,83,0,0,1007,1008,5,69,0,0,1008,
	138,1,0,0,0,1009,1010,5,69,0,0,1010,1011,5,77,0,0,1011,1012,5,80,0,0,1012,
	1013,5,84,0,0,1013,1014,5,89,0,0,1014,140,1,0,0,0,1015,1016,5,69,0,0,1016,
	1017,5,78,0,0,1017,1018,5,68,0,0,1018,142,1,0,0,0,1019,1020,5,69,0,0,1020,
	1021,5,83,0,0,1021,1022,5,67,0,0,1022,1023,5,65,0,0,1023,1024,5,80,0,0,
	1024,1025,5,69,0,0,1025,144,1,0,0,0,1026,1027,5,69,0,0,1027,1028,5,88,0,
	0,1028,1029,5,67,0,0,1029,1030,5,69,0,0,1030,1031,5,80,0,0,1031,1032,5,
	84,0,0,1032,146,1,0,0,0,1033,1034,5,69,0,0,1034,1035,5,88,0,0,1035,1036,
	5,67,0,0,1036,1037,5,76,0,0,1037,1038,5,85,0,0,1038,1039,5,68,0,0,1039,
	1040,5,73,0,0,1040,1041,5,78,0,0,1041,1042,5,71,0,0,1042,148,1,0,0,0,1043,
	1044,5,69,0,0,1044,1045,5,88,0,0,1045,1046,5,69,0,0,1046,1047,5,67,0,0,
	1047,1048,5,85,0,0,1048,1049,5,84,0,0,1049,1050,5,69,0,0,1050,150,1,0,0,
	0,1051,1052,5,69,0,0,1052,1053,5,88,0,0,1053,1054,5,73,0,0,1054,1055,5,
	83,0,0,1055,1056,5,84,0,0,1056,1057,5,83,0,0,1057,152,1,0,0,0,1058,1059,
	5,69,0,0,1059,1060,5,88,0,0,1060,1061,5,80,0,0,1061,1062,5,76,0,0,1062,
	1063,5,65,0,0,1063,1064,5,73,0,0,1064,1065,5,78,0,0,1065,154,1,0,0,0,1066,
	1067,5,69,0,0,1067,1068,5,88,0,0,1068,1069,5,84,0,0,1069,1070,5,82,0,0,
	1070,1071,5,65,0,0,1071,1072,5,67,0,0,1072,1073,5,84,0,0,1073,156,1,0,0,
	0,1074,1075,5,70,0,0,1075,1076,5,65,0,0,1076,1077,5,76,0,0,1077,1078,5,
	83,0,0,1078,1079,5,69,0,0,1079,158,1,0,0,0,1080,1081,5,70,0,0,1081,1082,
	5,69,0,0,1082,1083,5,84,0,0,1083,1084,5,67,0,0,1084,1085,5,72,0,0,1085,
	160,1,0,0,0,1086,1087,5,70,0,0,1087,1088,5,73,0,0,1088,1089,5,76,0,0,1089,
	1090,5,84,0,0,1090,1091,5,69,0,0,1091,1092,5,82,0,0,1092,162,1,0,0,0,1093,
	1094,5,70,0,0,1094,1095,5,73,0,0,1095,1096,5,78,0,0,1096,1097,5,65,0,0,
	1097,1098,5,76,0,0,1098,164,1,0,0,0,1099,1100,5,70,0,0,1100,1101,5,73,0,
	0,1101,1102,5,82,0,0,1102,1103,5,83,0,0,1103,1104,5,84,0,0,1104,166,1,0,
	0,0,1105,1106,5,70,0,0,1106,1107,5,79,0,0,1107,1108,5,76,0,0,1108,1109,
	5,76,0,0,1109,1110,5,79,0,0,1110,1111,5,87,0,0,1111,1112,5,73,0,0,1112,
	1113,5,78,0,0,1113,1114,5,71,0,0,1114,168,1,0,0,0,1115,1116,5,70,0,0,1116,
	1117,5,79,0,0,1117,1118,5,82,0,0,1118,170,1,0,0,0,1119,1120,5,70,0,0,1120,
	1121,5,79,0,0,1121,1122,5,82,0,0,1122,1123,5,77,0,0,1123,1124,5,65,0,0,
	1124,1125,5,84,0,0,1125,172,1,0,0,0,1126,1127,5,70,0,0,1127,1128,5,82,0,
	0,1128,1129,5,79,0,0,1129,1130,5,77,0,0,1130,174,1,0,0,0,1131,1132,5,70,
	0,0,1132,1133,5,85,0,0,1133,1134,5,76,0,0,1134,1135,5,76,0,0,1135,176,1,
	0,0,0,1136,1137,5,70,0,0,1137,1138,5,85,0,0,1138,1139,5,78,0,0,1139,1140,
	5,67,0,0,1140,1141,5,84,0,0,1141,1142,5,73,0,0,1142,1143,5,79,0,0,1143,
	1144,5,78,0,0,1144,1145,5,83,0,0,1145,178,1,0,0,0,1146,1147,5,71,0,0,1147,
	1148,5,82,0,0,1148,1149,5,65,0,0,1149,1150,5,78,0,0,1150,1151,5,84,0,0,
	1151,180,1,0,0,0,1152,1153,5,71,0,0,1153,1154,5,82,0,0,1154,1155,5,65,0,
	0,1155,1156,5,78,0,0,1156,1157,5,84,0,0,1157,1158,5,69,0,0,1158,1159,5,
	68,0,0,1159,182,1,0,0,0,1160,1161,5,71,0,0,1161,1162,5,82,0,0,1162,1163,
	5,65,0,0,1163,1164,5,78,0,0,1164,1165,5,84,0,0,1165,1166,5,83,0,0,1166,
	184,1,0,0,0,1167,1168,5,68,0,0,1168,1169,5,69,0,0,1169,1170,5,78,0,0,1170,
	1171,5,89,0,0,1171,186,1,0,0,0,1172,1173,5,71,0,0,1173,1174,5,82,0,0,1174,
	1175,5,65,0,0,1175,1176,5,80,0,0,1176,1177,5,72,0,0,1177,1178,5,86,0,0,
	1178,1179,5,73,0,0,1179,1180,5,90,0,0,1180,188,1,0,0,0,1181,1182,5,71,0,
	0,1182,1183,5,82,0,0,1183,1184,5,79,0,0,1184,1185,5,85,0,0,1185,1186,5,
	80,0,0,1186,190,1,0,0,0,1187,1188,5,71,0,0,1188,1189,5,82,0,0,1189,1190,
	5,79,0,0,1190,1191,5,85,0,0,1191,1192,5,80,0,0,1192,1193,5,73,0,0,1193,
	1194,5,78,0,0,1194,1195,5,71,0,0,1195,192,1,0,0,0,1196,1197,5,71,0,0,1197,
	1198,5,82,0,0,1198,1199,5,79,0,0,1199,1200,5,85,0,0,1200,1201,5,80,0,0,
	1201,1202,5,83,0,0,1202,194,1,0,0,0,1203,1204,5,72,0,0,1204,1205,5,65,0,
	0,1205,1206,5,86,0,0,1206,1207,5,73,0,0,1207,1208,5,78,0,0,1208,1209,5,
	71,0,0,1209,196,1,0,0,0,1210,1211,5,72,0,0,1211,1212,5,79,0,0,1212,1213,
	5,85,0,0,1213,1214,5,82,0,0,1214,198,1,0,0,0,1215,1216,5,73,0,0,1216,1217,
	5,70,0,0,1217,200,1,0,0,0,1218,1219,5,73,0,0,1219,1220,5,71,0,0,1220,1221,
	5,78,0,0,1221,1222,5,79,0,0,1222,1223,5,82,0,0,1223,1224,5,69,0,0,1224,
	202,1,0,0,0,1225,1226,5,73,0,0,1226,1227,5,78,0,0,1227,204,1,0,0,0,1228,
	1229,5,73,0,0,1229,1230,5,78,0,0,1230,1231,5,67,0,0,1231,1232,5,76,0,0,
	1232,1233,5,85,0,0,1233,1234,5,68,0,0,1234,1235,5,73,0,0,1235,1236,5,78,
	0,0,1236,1237,5,71,0,0,1237,206,1,0,0,0,1238,1239,5,73,0,0,1239,1240,5,
	78,0,0,1240,1241,5,73,0,0,1241,1242,5,84,0,0,1242,1243,5,73,0,0,1243,1244,
	5,65,0,0,1244,1245,5,76,0,0,1245,208,1,0,0,0,1246,1247,5,73,0,0,1247,1248,
	5,78,0,0,1248,1249,5,78,0,0,1249,1250,5,69,0,0,1250,1251,5,82,0,0,1251,
	210,1,0,0,0,1252,1253,5,73,0,0,1253,1254,5,78,0,0,1254,1255,5,80,0,0,1255,
	1256,5,85,0,0,1256,1257,5,84,0,0,1257,212,1,0,0,0,1258,1259,5,73,0,0,1259,
	1260,5,78,0,0,1260,1261,5,83,0,0,1261,1262,5,69,0,0,1262,1263,5,82,0,0,
	1263,1264,5,84,0,0,1264,214,1,0,0,0,1265,1266,5,73,0,0,1266,1267,5,78,0,
	0,1267,1268,5,84,0,0,1268,1269,5,69,0,0,1269,1270,5,82,0,0,1270,1271,5,
	83,0,0,1271,1272,5,69,0,0,1272,1273,5,67,0,0,1273,1274,5,84,0,0,1274,216,
	1,0,0,0,1275,1276,5,73,0,0,1276,1277,5,78,0,0,1277,1278,5,84,0,0,1278,1279,
	5,69,0,0,1279,1280,5,82,0,0,1280,1281,5,86,0,0,1281,1282,5,65,0,0,1282,
	1283,5,76,0,0,1283,218,1,0,0,0,1284,1285,5,73,0,0,1285,1286,5,78,0,0,1286,
	1287,5,84,0,0,1287,1288,5,79,0,0,1288,220,1,0,0,0,1289,1290,5,73,0,0,1290,
	1291,5,78,0,0,1291,1292,5,86,0,0,1292,1293,5,79,0,0,1293,1294,5,75,0,0,
	1294,1295,5,69,0,0,1295,1296,5,82,0,0,1296,222,1,0,0,0,1297,1298,5,73,0,
	0,1298,1299,5,79,0,0,1299,224,1,0,0,0,1300,1301,5,73,0,0,1301,1302,5,83,
	0,0,1302,226,1,0,0,0,1303,1304,5,73,0,0,1304,1305,5,83,0,0,1305,1306,5,
	79,0,0,1306,1307,5,76,0,0,1307,1308,5,65,0,0,1308,1309,5,84,0,0,1309,1310,
	5,73,0,0,1310,1311,5,79,0,0,1311,1312,5,78,0,0,1312,228,1,0,0,0,1313,1314,
	5,74,0,0,1314,1315,5,79,0,0,1315,1316,5,73,0,0,1316,1317,5,78,0,0,1317,
	230,1,0,0,0,1318,1319,5,74,0,0,1319,1320,5,83,0,0,1320,1321,5,79,0,0,1321,
	1322,5,78,0,0,1322,232,1,0,0,0,1323,1324,5,76,0,0,1324,1325,5,65,0,0,1325,
	1326,5,83,0,0,1326,1327,5,84,0,0,1327,234,1,0,0,0,1328,1329,5,76,0,0,1329,
	1330,5,65,0,0,1330,1331,5,84,0,0,1331,1332,5,69,0,0,1332,1333,5,82,0,0,
	1333,1334,5,65,0,0,1334,1335,5,76,0,0,1335,236,1,0,0,0,1336,1337,5,76,0,
	0,1337,1338,5,69,0,0,1338,1339,5,70,0,0,1339,1340,5,84,0,0,1340,238,1,0,
	0,0,1341,1342,5,76,0,0,1342,1343,5,69,0,0,1343,1344,5,86,0,0,1344,1345,
	5,69,0,0,1345,1346,5,76,0,0,1346,240,1,0,0,0,1347,1348,5,76,0,0,1348,1349,
	5,73,0,0,1349,1350,5,75,0,0,1350,1351,5,69,0,0,1351,242,1,0,0,0,1352,1353,
	5,76,0,0,1353,1354,5,73,0,0,1354,1355,5,77,0,0,1355,1356,5,73,0,0,1356,
	1357,5,84,0,0,1357,244,1,0,0,0,1358,1359,5,76,0,0,1359,1360,5,79,0,0,1360,
	1361,5,67,0,0,1361,1362,5,65,0,0,1362,1363,5,76,0,0,1363,246,1,0,0,0,1364,
	1365,5,76,0,0,1365,1366,5,79,0,0,1366,1367,5,67,0,0,1367,1368,5,65,0,0,
	1368,1369,5,76,0,0,1369,1370,5,84,0,0,1370,1371,5,73,0,0,1371,1372,5,77,
	0,0,1372,1373,5,69,0,0,1373,248,1,0,0,0,1374,1375,5,76,0,0,1375,1376,5,
	79,0,0,1376,1377,5,67,0,0,1377,1378,5,65,0,0,1378,1379,5,76,0,0,1379,1380,
	5,84,0,0,1380,1381,5,73,0,0,1381,1382,5,77,0,0,1382,1383,5,69,0,0,1383,
	1384,5,83,0,0,1384,1385,5,84,0,0,1385,1386,5,65,0,0,1386,1387,5,77,0,0,
	1387,1388,5,80,0,0,1388,250,1,0,0,0,1389,1390,5,76,0,0,1390,1391,5,79,0,
	0,1391,1392,5,71,0,0,1392,1393,5,73,0,0,1393,1394,5,67,0,0,1394,1395,5,
	65,0,0,1395,1396,5,76,0,0,1396,252,1,0,0,0,1397,1398,5,77,0,0,1398,1399,
	5,65,0,0,1399,1400,5,80,0,0,1400,254,1,0,0,0,1401,1402,5,77,0,0,1402,1403,
	5,65,0,0,1403,1404,5,84,0,0,1404,1405,5,67,0,0,1405,1406,5,72,0,0,1406,
	256,1,0,0,0,1407,1408,5,77,0,0,1408,1409,5,65,0,0,1409,1410,5,84,0,0,1410,
	1411,5,67,0,0,1411,1412,5,72,0,0,1412,1413,5,69,0,0,1413,1414,5,68,0,0,
	1414,258,1,0,0,0,1415,1416,5,77,0,0,1416,1417,5,65,0,0,1417,1418,5,84,0,
	0,1418,1419,5,67,0,0,1419,1420,5,72,0,0,1420,1421,5,69,0,0,1421,1422,5,
	83,0,0,1422,260,1,0,0,0,1423,1424,5,77,0,0,1424,1425,5,65,0,0,1425,1426,
	5,84,0,0,1426,1427,5,67,0,0,1427,1428,5,72,0,0,1428,1429,5,95,0,0,1429,
	1430,5,82,0,0,1430,1431,5,69,0,0,1431,1432,5,67,0,0,1432,1433,5,79,0,0,
	1433,1434,5,71,0,0,1434,1435,5,78,0,0,1435,1436,5,73,0,0,1436,1437,5,90,
	0,0,1437,1438,5,69,0,0,1438,262,1,0,0,0,1439,1440,5,77,0,0,1440,1441,5,
	65,0,0,1441,1442,5,84,0,0,1442,1443,5,69,0,0,1443,1444,5,82,0,0,1444,1445,
	5,73,0,0,1445,1446,5,65,0,0,1446,1447,5,76,0,0,1447,1448,5,73,0,0,1448,
	1449,5,90,0,0,1449,1450,5,69,0,0,1450,1451,5,68,0,0,1451,264,1,0,0,0,1452,
	1453,5,77,0,0,1453,1454,5,69,0,0,1454,1455,5,65,0,0,1455,1456,5,83,0,0,
	1456,1457,5,85,0,0,1457,1458,5,82,0,0,1458,1459,5,69,0,0,1459,1460,5,83,
	0,0,1460,266,1,0,0,0,1461,1462,5,77,0,0,1462,1463,5,69,0,0,1463,1464,5,
	82,0,0,1464,1465,5,71,0,0,1465,1466,5,69,0,0,1466,268,1,0,0,0,1467,1468,
	5,77,0,0,1468,1469,5,73,0,0,1469,1470,5,78,0,0,1470,1471,5,85,0,0,1471,
	1472,5,84,0,0,1472,1473,5,69,0,0,1473,270,1,0,0,0,1474,1475,5,77,0,0,1475,
	1476,5,79,0,0,1476,1477,5,78,0,0,1477,1478,5,84,0,0,1478,1479,5,72,0,0,
	1479,272,1,0,0,0,1480,1481,5,78,0,0,1481,1482,5,65,0,0,1482,1483,5,84,0,
	0,1483,1484,5,85,0,0,1484,1485,5,82,0,0,1485,1486,5,65,0,0,1486,1487,5,
	76,0,0,1487,274,1,0,0,0,1488,1489,5,78,0,0,1489,1490,5,69,0,0,1490,1491,
	5,88,0,0,1491,1492,5,84,0,0,1492,276,1,0,0,0,1493,1494,5,78,0,0,1494,1495,
	5,70,0,0,1495,1496,5,67,0,0,1496,278,1,0,0,0,1497,1498,5,78,0,0,1498,1499,
	5,70,0,0,1499,1500,5,68,0,0,1500,280,1,0,0,0,1501,1502,5,78,0,0,1502,1503,
	5,70,0,0,1503,1504,5,75,0,0,1504,1505,5,67,0,0,1505,282,1,0,0,0,1506,1507,
	5,78,0,0,1507,1508,5,70,0,0,1508,1509,5,75,0,0,1509,1510,5,68,0,0,1510,
	284,1,0,0,0,1511,1512,5,78,0,0,1512,1513,5,79,0,0,1513,286,1,0,0,0,1514,
	1515,5,78,0,0,1515,1516,5,79,0,0,1516,1517,5,78,0,0,1517,1518,5,69,0,0,
	1518,288,1,0,0,0,1519,1520,5,78,0,0,1520,1521,5,79,0,0,1521,1522,5,82,0,
	0,1522,1523,5,77,0,0,1523,1524,5,65,0,0,1524,1525,5,76,0,0,1525,1526,5,
	73,0,0,1526,1527,5,90,0,0,1527,1528,5,69,0,0,1528,290,1,0,0,0,1529,1530,
	5,78,0,0,1530,1531,5,79,0,0,1531,1532,5,84,0,0,1532,292,1,0,0,0,1533,1534,
	5,78,0,0,1534,1535,5,85,0,0,1535,1536,5,76,0,0,1536,1537,5,76,0,0,1537,
	294,1,0,0,0,1538,1539,5,78,0,0,1539,1540,5,85,0,0,1540,1541,5,76,0,0,1541,
	1542,5,76,0,0,1542,1543,5,73,0,0,1543,1544,5,70,0,0,1544,296,1,0,0,0,1545,
	1546,5,78,0,0,1546,1547,5,85,0,0,1547,1548,5,76,0,0,1548,1549,5,76,0,0,
	1549,1550,5,83,0,0,1550,298,1,0,0,0,1551,1552,5,79,0,0,1552,1553,5,70,0,
	0,1553,1554,5,70,0,0,1554,1555,5,83,0,0,1555,1556,5,69,0,0,1556,1557,5,
	84,0,0,1557,300,1,0,0,0,1558,1559,5,79,0,0,1559,1560,5,77,0,0,1560,1561,
	5,73,0,0,1561,1562,5,84,0,0,1562,302,1,0,0,0,1563,1564,5,79,0,0,1564,1565,
	5,78,0,0,1565,304,1,0,0,0,1566,1567,5,79,0,0,1567,1568,5,78,0,0,1568,1569,
	5,69,0,0,1569,306,1,0,0,0,1570,1571,5,79,0,0,1571,1572,5,78,0,0,1572,1573,
	5,76,0,0,1573,1574,5,89,0,0,1574,308,1,0,0,0,1575,1576,5,79,0,0,1576,1577,
	5,80,0,0,1577,1578,5,84,0,0,1578,1579,5,73,0,0,1579,1580,5,79,0,0,1580,
	1581,5,78,0,0,1581,310,1,0,0,0,1582,1583,5,79,0,0,1583,1584,5,82,0,0,1584,
	312,1,0,0,0,1585,1586,5,79,0,0,1586,1587,5,82,0,0,1587,1588,5,68,0,0,1588,
	1589,5,69,0,0,1589,1590,5,82,0,0,1590,314,1,0,0,0,1591,1592,5,79,0,0,1592,
	1593,5,82,0,0,1593,1594,5,68,0,0,1594,1595,5,73,0,0,1595,1596,5,78,0,0,
	1596,1597,5,65,0,0,1597,1598,5,76,0,0,1598,1599,5,73,0,0,1599,1600,5,84,
	0,0,1600,1601,5,89,0,0,1601,316,1,0,0,0,1602,1603,5,79,0,0,1603,1604,5,
	85,0,0,1604,1605,5,84,0,0,1605,1606,5,69,0,0,1606,1607,5,82,0,0,1607,318,
	1,0,0,0,1608,1609,5,79,0,0,1609,1610,5,85,0,0,1610,1611,5,84,0,0,1611,1612,
	5,80,0,0,1612,1613,5,85,0,0,1613,1614,5,84,0,0,1614,320,1,0,0,0,1615,1616,
	5,79,0,0,1616,1617,5,86,0,0,1617,1618,5,69,0,0,1618,1619,5,82,0,0,1619,
	322,1,0,0,0,1620,1621,5,80,0,0,1621,1622,5,65,0,0,1622,1623,5,82,0,0,1623,
	1624,5,84,0,0,1624,1625,5,73,0,0,1625,1626,5,84,0,0,1626,1627,5,73,0,0,
	1627,1628,5,79,0,0,1628,1629,5,78,0,0,1629,324,1,0,0,0,1630,1631,5,80,0,
	0,1631,1632,5,65,0,0,1632,1633,5,82,0,0,1633,1634,5,84,0,0,1634,1635,5,
	73,0,0,1635,1636,5,84,0,0,1636,1637,5,73,0,0,1637,1638,5,79,0,0,1638,1639,
	5,78,0,0,1639,1640,5,83,0,0,1640,326,1,0,0,0,1641,1642,5,80,0,0,1642,1643,
	5,65,0,0,1643,1644,5,83,0,0,1644,1645,5,84,0,0,1645,328,1,0,0,0,1646,1647,
	5,80,0,0,1647,1648,5,65,0,0,1648,1649,5,84,0,0,1649,1650,5,72,0,0,1650,
	330,1,0,0,0,1651,1652,5,80,0,0,1652,1653,5,65,0,0,1653,1654,5,84,0,0,1654,
	1655,5,84,0,0,1655,1656,5,69,0,0,1656,1657,5,82,0,0,1657,1658,5,78,0,0,
	1658,332,1,0,0,0,1659,1660,5,80,0,0,1660,1661,5,69,0,0,1661,1662,5,82,0,
	0,1662,334,1,0,0,0,1663,1664,5,80,0,0,1664,1665,5,69,0,0,1665,1666,5,82,
	0,0,1666,1667,5,77,0,0,1667,1668,5,85,0,0,1668,1669,5,84,0,0,1669,1670,
	5,69,0,0,1670,336,1,0,0,0,1671,1672,5,80,0,0,1672,1673,5,79,0,0,1673,1674,
	5,83,0,0,1674,1675,5,73,0,0,1675,1676,5,84,0,0,1676,1677,5,73,0,0,1677,
	1678,5,79,0,0,1678,1679,5,78,0,0,1679,338,1,0,0,0,1680,1681,5,80,0,0,1681,
	1682,5,82,0,0,1682,1683,5,69,0,0,1683,1684,5,67,0,0,1684,1685,5,69,0,0,
	1685,1686,5,68,0,0,1686,1687,5,73,0,0,1687,1688,5,78,0,0,1688,1689,5,71,
	0,0,1689,340,1,0,0,0,1690,1691,5,80,0,0,1691,1692,5,82,0,0,1692,1693,5,
	69,0,0,1693,1694,5,67,0,0,1694,1695,5,73,0,0,1695,1696,5,83,0,0,1696,1697,
	5,73,0,0,1697,1698,5,79,0,0,1698,1699,5,78,0,0,1699,342,1,0,0,0,1700,1701,
	5,80,0,0,1701,1702,5,82,0,0,1702,1703,5,69,0,0,1703,1704,5,80,0,0,1704,
	1705,5,65,0,0,1705,1706,5,82,0,0,1706,1707,5,69,0,0,1707,344,1,0,0,0,1708,
	1709,5,80,0,0,1709,1710,5,82,0,0,1710,1711,5,73,0,0,1711,1712,5,86,0,0,
	1712,1713,5,73,0,0,1713,1714,5,76,0,0,1714,1715,5,69,0,0,1715,1716,5,71,
	0,0,1716,1717,5,69,0,0,1717,1718,5,83,0,0,1718,346,1,0,0,0,1719,1720,5,
	80,0,0,1720,1721,5,82,0,0,1721,1722,5,79,0,0,1722,1723,5,80,0,0,1723,1724,
	5,69,0,0,1724,1725,5,82,0,0,1725,1726,5,84,0,0,1726,1727,5,73,0,0,1727,
	1728,5,69,0,0,1728,1729,5,83,0,0,1729,348,1,0,0,0,1730,1731,5,82,0,0,1731,
	1732,5,65,0,0,1732,1733,5,78,0,0,1733,1734,5,71,0,0,1734,1735,5,69,0,0,
	1735,350,1,0,0,0,1736,1737,5,82,0,0,1737,1738,5,69,0,0,1738,1739,5,65,0,
	0,1739,1740,5,68,0,0,1740,352,1,0,0,0,1741,1742,5,82,0,0,1742,1743,5,69,
	0,0,1743,1744,5,67,0,0,1744,1745,5,85,0,0,1745,1746,5,82,0,0,1746,1747,
	5,83,0,0,1747,1748,5,73,0,0,1748,1749,5,86,0,0,1749,1750,5,69,0,0,1750,
	354,1,0,0,0,1751,1752,5,82,0,0,1752,1753,5,69,0,0,1753,1754,5,70,0,0,1754,
	1755,5,82,0,0,1755,1756,5,69,0,0,1756,1757,5,83,0,0,1757,1758,5,72,0,0,
	1758,356,1,0,0,0,1759,1760,5,82,0,0,1760,1761,5,69,0,0,1761,1762,5,78,0,
	0,1762,1763,5,65,0,0,1763,1764,5,77,0,0,1764,1765,5,69,0,0,1765,358,1,0,
	0,0,1766,1767,5,82,0,0,1767,1768,5,69,0,0,1768,1769,5,80,0,0,1769,1770,
	5,69,0,0,1770,1771,5,65,0,0,1771,1772,5,84,0,0,1772,1773,5,65,0,0,1773,
	1774,5,66,0,0,1774,1775,5,76,0,0,1775,1776,5,69,0,0,1776,360,1,0,0,0,1777,
	1778,5,82,0,0,1778,1779,5,69,0,0,1779,1780,5,80,0,0,1780,1781,5,76,0,0,
	1781,1782,5,65,0,0,1782,1783,5,67,0,0,1783,1784,5,69,0,0,1784,362,1,0,0,
	0,1785,1786,5,82,0,0,1786,1787,5,69,0,0,1787,1788,5,83,0,0,1788,1789,5,
	69,0,0,1789,1790,5,84,0,0,1790,364,1,0,0,0,1791,1792,5,82,0,0,1792,1793,
	5,69,0,0,1793,1794,5,83,0,0,1794,1795,5,80,0,0,1795,1796,5,69,0,0,1796,
	1797,5,67,0,0,1797,1798,5,84,0,0,1798,366,1,0,0,0,1799,1800,5,82,0,0,1800,
	1801,5,69,0,0,1801,1802,5,83,0,0,1802,1803,5,84,0,0,1803,1804,5,82,0,0,
	1804,1805,5,73,0,0,1805,1806,5,67,0,0,1806,1807,5,84,0,0,1807,368,1,0,0,
	0,1808,1809,5,82,0,0,1809,1810,5,69,0,0,1810,1811,5,86,0,0,1811,1812,5,
	79,0,0,1812,1813,5,75,0,0,1813,1814,5,69,0,0,1814,370,1,0,0,0,1815,1816,
	5,82,0,0,1816,1817,5,73,0,0,1817,1818,5,71,0,0,1818,1819,5,72,0,0,1819,
	1820,5,84,0,0,1820,372,1,0,0,0,1821,1822,5,82,0,0,1822,1823,5,79,0,0,1823,
	1824,5,76,0,0,1824,1825,5,69,0,0,1825,374,1,0,0,0,1826,1827,5,82,0,0,1827,
	1828,5,79,0,0,1828,1829,5,76,0,0,1829,1830,5,69,0,0,1830,1831,5,83,0,0,
	1831,376,1,0,0,0,1832,1833,5,82,0,0,1833,1834,5,79,0,0,1834,1835,5,76,0,
	0,1835,1836,5,76,0,0,1836,1837,5,66,0,0,1837,1838,5,65,0,0,1838,1839,5,
	67,0,0,1839,1840,5,75,0,0,1840,378,1,0,0,0,1841,1842,5,82,0,0,1842,1843,
	5,79,0,0,1843,1844,5,76,0,0,1844,1845,5,76,0,0,1845,1846,5,85,0,0,1846,
	1847,5,80,0,0,1847,380,1,0,0,0,1848,1849,5,82,0,0,1849,1850,5,79,0,0,1850,
	1851,5,87,0,0,1851,382,1,0,0,0,1852,1853,5,82,0,0,1853,1854,5,79,0,0,1854,
	1855,5,87,0,0,1855,1856,5,83,0,0,1856,384,1,0,0,0,1857,1858,5,82,0,0,1858,
	1859,5,85,0,0,1859,1860,5,78,0,0,1860,1861,5,78,0,0,1861,1862,5,73,0,0,
	1862,1863,5,78,0,0,1863,1864,5,71,0,0,1864,386,1,0,0,0,1865,1866,5,83,0,
	0,1866,1867,5,67,0,0,1867,1868,5,72,0,0,1868,1869,5,69,0,0,1869,1870,5,
	77,0,0,1870,1871,5,65,0,0,1871,388,1,0,0,0,1872,1873,5,83,0,0,1873,1874,
	5,67,0,0,1874,1875,5,72,0,0,1875,1876,5,69,0,0,1876,1877,5,77,0,0,1877,
	1878,5,65,0,0,1878,1879,5,83,0,0,1879,390,1,0,0,0,1880,1881,5,83,0,0,1881,
	1882,5,69,0,0,1882,1883,5,67,0,0,1883,1884,5,79,0,0,1884,1885,5,78,0,0,
	1885,1886,5,68,0,0,1886,392,1,0,0,0,1887,1888,5,83,0,0,1888,1889,5,69,0,
	0,1889,1890,5,67,0,0,1890,1891,5,85,0,0,1891,1892,5,82,0,0,1892,1893,5,
	73,0,0,1893,1894,5,84,0,0,1894,1895,5,89,0,0,1895,394,1,0,0,0,1896,1897,
	5,83,0,0,1897,1898,5,69,0,0,1898,1899,5,69,0,0,1899,1900,5,75,0,0,1900,
	396,1,0,0,0,1901,1902,5,83,0,0,1902,1903,5,69,0,0,1903,1904,5,76,0,0,1904,
	1905,5,69,0,0,1905,1906,5,67,0,0,1906,1907,5,84,0,0,1907,398,1,0,0,0,1908,
	1909,5,83,0,0,1909,1910,5,69,0,0,1910,1911,5,82,0,0,1911,1912,5,73,0,0,
	1912,1913,5,65,0,0,1913,1914,5,76,0,0,1914,1915,5,73,0,0,1915,1916,5,90,
	0,0,1916,1917,5,65,0,0,1917,1918,5,66,0,0,1918,1919,5,76,0,0,1919,1920,
	5,69,0,0,1920,400,1,0,0,0,1921,1922,5,83,0,0,1922,1923,5,69,0,0,1923,1924,
	5,83,0,0,1924,1925,5,83,0,0,1925,1926,5,73,0,0,1926,1927,5,79,0,0,1927,
	1928,5,78,0,0,1928,402,1,0,0,0,1929,1930,5,83,0,0,1930,1931,5,69,0,0,1931,
	1932,5,84,0,0,1932,404,1,0,0,0,1933,1934,5,83,0,0,1934,1935,5,69,0,0,1935,
	1936,5,84,0,0,1936,1937,5,83,0,0,1937,406,1,0,0,0,1938,1939,5,83,0,0,1939,
	1940,5,72,0,0,1940,1941,5,79,0,0,1941,1942,5,87,0,0,1942,408,1,0,0,0,1943,
	1944,5,83,0,0,1944,1945,5,79,0,0,1945,1946,5,77,0,0,1946,1947,5,69,0,0,
	1947,410,1,0,0,0,1948,1949,5,83,0,0,1949,1950,5,84,0,0,1950,1951,5,65,0,
	0,1951,1952,5,82,0,0,1952,1953,5,84,0,0,1953,412,1,0,0,0,1954,1955,5,83,
	0,0,1955,1956,5,84,0,0,1956,1957,5,65,0,0,1957,1958,5,84,0,0,1958,1959,
	5,83,0,0,1959,414,1,0,0,0,1960,1961,5,83,0,0,1961,1962,5,85,0,0,1962,1963,
	5,66,0,0,1963,1964,5,83,0,0,1964,1965,5,69,0,0,1965,1966,5,84,0,0,1966,
	416,1,0,0,0,1967,1968,5,83,0,0,1968,1969,5,85,0,0,1969,1970,5,66,0,0,1970,
	1971,5,83,0,0,1971,1972,5,84,0,0,1972,1973,5,82,0,0,1973,1974,5,73,0,0,
	1974,1975,5,78,0,0,1975,1976,5,71,0,0,1976,418,1,0,0,0,1977,1978,5,83,0,
	0,1978,1979,5,89,0,0,1979,1980,5,83,0,0,1980,1981,5,84,0,0,1981,1982,5,
	69,0,0,1982,1983,5,77,0,0,1983,420,1,0,0,0,1984,1985,5,84,0,0,1985,1986,
	5,65,0,0,1986,1987,5,66,0,0,1987,1988,5,76,0,0,1988,1989,5,69,0,0,1989,
	422,1,0,0,0,1990,1991,5,84,0,0,1991,1992,5,65,0,0,1992,1993,5,66,0,0,1993,
	1994,5,76,0,0,1994,1995,5,69,0,0,1995,1996,5,83,0,0,1996,424,1,0,0,0,1997,
	1998,5,84,0,0,1998,1999,5,65,0,0,1999,2000,5,66,0,0,2000,2001,5,76,0,0,
	2001,2002,5,69,0,0,2002,2003,5,83,0,0,2003,2004,5,65,0,0,2004,2005,5,77,
	0,0,2005,2006,5,80,0,0,2006,2007,5,76,0,0,2007,2008,5,69,0,0,2008,426,1,
	0,0,0,2009,2010,5,84,0,0,2010,2011,5,69,0,0,2011,2012,5,88,0,0,2012,2013,
	5,84,0,0,2013,428,1,0,0,0,2014,2015,5,84,0,0,2015,2016,5,72,0,0,2016,2017,
	5,69,0,0,2017,2018,5,78,0,0,2018,430,1,0,0,0,2019,2020,5,84,0,0,2020,2021,
	5,73,0,0,2021,2022,5,69,0,0,2022,2023,5,83,0,0,2023,432,1,0,0,0,2024,2025,
	5,84,0,0,2025,2026,5,73,0,0,2026,2027,5,77,0,0,2027,2028,5,69,0,0,2028,
	434,1,0,0,0,2029,2030,5,84,0,0,2030,2031,5,73,0,0,2031,2032,5,77,0,0,2032,
	2033,5,69,0,0,2033,2034,5,83,0,0,2034,2035,5,84,0,0,2035,2036,5,65,0,0,
	2036,2037,5,77,0,0,2037,2038,5,80,0,0,2038,436,1,0,0,0,2039,2040,5,84,0,
	0,2040,2041,5,79,0,0,2041,438,1,0,0,0,2042,2043,5,84,0,0,2043,2044,5,82,
	0,0,2044,2045,5,65,0,0,2045,2046,5,78,0,0,2046,2047,5,83,0,0,2047,2048,
	5,65,0,0,2048,2049,5,67,0,0,2049,2050,5,84,0,0,2050,2051,5,73,0,0,2051,
	2052,5,79,0,0,2052,2053,5,78,0,0,2053,440,1,0,0,0,2054,2055,5,84,0,0,2055,
	2056,5,82,0,0,2056,2057,5,85,0,0,2057,2058,5,69,0,0,2058,442,1,0,0,0,2059,
	2060,5,84,0,0,2060,2061,5,82,0,0,2061,2062,5,89,0,0,2062,2063,5,95,0,0,
	2063,2064,5,67,0,0,2064,2065,5,65,0,0,2065,2066,5,83,0,0,2066,2067,5,84,
	0,0,2067,444,1,0,0,0,2068,2069,5,84,0,0,2069,2070,5,89,0,0,2070,2071,5,
	80,0,0,2071,2072,5,69,0,0,2072,446,1,0,0,0,2073,2074,5,85,0,0,2074,2075,
	5,69,0,0,2075,2076,5,83,0,0,2076,2077,5,67,0,0,2077,2078,5,65,0,0,2078,
	2079,5,80,0,0,2079,2080,5,69,0,0,2080,448,1,0,0,0,2081,2082,5,85,0,0,2082,
	2083,5,78,0,0,2083,2084,5,66,0,0,2084,2085,5,79,0,0,2085,2086,5,85,0,0,
	2086,2087,5,78,0,0,2087,2088,5,68,0,0,2088,2089,5,69,0,0,2089,2090,5,68,
	0,0,2090,450,1,0,0,0,2091,2092,5,85,0,0,2092,2093,5,78,0,0,2093,2094,5,
	67,0,0,2094,2095,5,79,0,0,2095,2096,5,77,0,0,2096,2097,5,77,0,0,2097,2098,
	5,73,0,0,2098,2099,5,84,0,0,2099,2100,5,84,0,0,2100,2101,5,69,0,0,2101,
	2102,5,68,0,0,2102,452,1,0,0,0,2103,2104,5,85,0,0,2104,2105,5,78,0,0,2105,
	2106,5,73,0,0,2106,2107,5,79,0,0,2107,2108,5,78,0,0,2108,454,1,0,0,0,2109,
	2110,5,85,0,0,2110,2111,5,78,0,0,2111,2112,5,77,0,0,2112,2113,5,65,0,0,
	2113,2114,5,84,0,0,2114,2115,5,67,0,0,2115,2116,5,72,0,0,2116,2117,5,69,
	0,0,2117,2118,5,68,0,0,2118,456,1,0,0,0,2119,2120,5,85,0,0,2120,2121,5,
	78,0,0,2121,2122,5,78,0,0,2122,2123,5,69,0,0,2123,2124,5,83,0,0,2124,2125,
	5,84,0,0,2125,458,1,0,0,0,2126,2127,5,85,0,0,2127,2128,5,80,0,0,2128,2129,
	5,68,0,0,2129,2130,5,65,0,0,2130,2131,5,84,0,0,2131,2132,5,69,0,0,2132,
	460,1,0,0,0,2133,2134,5,85,0,0,2134,2135,5,83,0,0,2135,2136,5,69,0,0,2136,
	462,1,0,0,0,2137,2138,5,85,0,0,2138,2139,5,83,0,0,2139,2140,5,69,0,0,2140,
	2141,5,82,0,0,2141,464,1,0,0,0,2142,2143,5,85,0,0,2143,2144,5,83,0,0,2144,
	2145,5,73,0,0,2145,2146,5,78,0,0,2146,2147,5,71,0,0,2147,466,1,0,0,0,2148,
	2149,5,86,0,0,2149,2150,5,65,0,0,2150,2151,5,76,0,0,2151,2152,5,73,0,0,
	2152,2153,5,68,0,0,2153,2154,5,65,0,0,2154,2155,5,84,0,0,2155,2156,5,69,
	0,0,2156,468,1,0,0,0,2157,2158,5,86,0,0,2158,2159,5,65,0,0,2159,2160,5,
	76,0,0,2160,2161,5,85,0,0,2161,2162,5,69,0,0,2162,2163,5,83,0,0,2163,470,
	1,0,0,0,2164,2165,5,86,0,0,2165,2166,5,69,0,0,2166,2167,5,82,0,0,2167,2168,
	5,66,0,0,2168,2169,5,79,0,0,2169,2170,5,83,0,0,2170,2171,5,69,0,0,2171,
	472,1,0,0,0,2172,2173,5,86,0,0,2173,2174,5,73,0,0,2174,2175,5,69,0,0,2175,
	2176,5,87,0,0,2176,474,1,0,0,0,2177,2178,5,87,0,0,2178,2179,5,72,0,0,2179,
	2180,5,69,0,0,2180,2181,5,78,0,0,2181,476,1,0,0,0,2182,2183,5,87,0,0,2183,
	2184,5,72,0,0,2184,2185,5,69,0,0,2185,2186,5,82,0,0,2186,2187,5,69,0,0,
	2187,478,1,0,0,0,2188,2189,5,87,0,0,2189,2190,5,73,0,0,2190,2191,5,78,0,
	0,2191,2192,5,68,0,0,2192,2193,5,79,0,0,2193,2194,5,87,0,0,2194,480,1,0,
	0,0,2195,2196,5,87,0,0,2196,2197,5,73,0,0,2197,2198,5,84,0,0,2198,2199,
	5,72,0,0,2199,482,1,0,0,0,2200,2201,5,87,0,0,2201,2202,5,73,0,0,2202,2203,
	5,84,0,0,2203,2204,5,72,0,0,2204,2205,5,79,0,0,2205,2206,5,85,0,0,2206,
	2207,5,84,0,0,2207,484,1,0,0,0,2208,2209,5,87,0,0,2209,2210,5,79,0,0,2210,
	2211,5,82,0,0,2211,2212,5,75,0,0,2212,486,1,0,0,0,2213,2214,5,87,0,0,2214,
	2215,5,82,0,0,2215,2216,5,73,0,0,2216,2217,5,84,0,0,2217,2218,5,69,0,0,
	2218,488,1,0,0,0,2219,2220,5,89,0,0,2220,2221,5,69,0,0,2221,2222,5,65,0,
	0,2222,2223,5,82,0,0,2223,490,1,0,0,0,2224,2225,5,90,0,0,2225,2226,5,79,
	0,0,2226,2227,5,78,0,0,2227,2228,5,69,0,0,2228,492,1,0,0,0,2229,2230,5,
	61,0,0,2230,494,1,0,0,0,2231,2232,5,60,0,0,2232,2236,5,62,0,0,2233,2234,
	5,33,0,0,2234,2236,5,61,0,0,2235,2231,1,0,0,0,2235,2233,1,0,0,0,2236,496,
	1,0,0,0,2237,2238,5,60,0,0,2238,498,1,0,0,0,2239,2240,5,60,0,0,2240,2241,
	5,61,0,0,2241,500,1,0,0,0,2242,2243,5,62,0,0,2243,502,1,0,0,0,2244,2245,
	5,62,0,0,2245,2246,5,61,0,0,2246,504,1,0,0,0,2247,2248,5,43,0,0,2248,506,
	1,0,0,0,2249,2250,5,45,0,0,2250,508,1,0,0,0,2251,2252,5,42,0,0,2252,510,
	1,0,0,0,2253,2254,5,47,0,0,2254,512,1,0,0,0,2255,2256,5,37,0,0,2256,514,
	1,0,0,0,2257,2258,5,124,0,0,2258,2259,5,124,0,0,2259,516,1,0,0,0,2260,2261,
	5,63,0,0,2261,518,1,0,0,0,2262,2268,5,39,0,0,2263,2267,8,0,0,0,2264,2265,
	5,39,0,0,2265,2267,5,39,0,0,2266,2263,1,0,0,0,2266,2264,1,0,0,0,2267,2270,
	1,0,0,0,2268,2266,1,0,0,0,2268,2269,1,0,0,0,2269,2271,1,0,0,0,2270,2268,
	1,0,0,0,2271,2272,5,39,0,0,2272,520,1,0,0,0,2273,2274,5,85,0,0,2274,2275,
	5,38,0,0,2275,2276,5,39,0,0,2276,2282,1,0,0,0,2277,2281,8,0,0,0,2278,2279,
	5,39,0,0,2279,2281,5,39,0,0,2280,2277,1,0,0,0,2280,2278,1,0,0,0,2281,2284,
	1,0,0,0,2282,2280,1,0,0,0,2282,2283,1,0,0,0,2283,2285,1,0,0,0,2284,2282,
	1,0,0,0,2285,2286,5,39,0,0,2286,522,1,0,0,0,2287,2288,5,88,0,0,2288,2289,
	5,39,0,0,2289,2293,1,0,0,0,2290,2292,8,0,0,0,2291,2290,1,0,0,0,2292,2295,
	1,0,0,0,2293,2291,1,0,0,0,2293,2294,1,0,0,0,2294,2296,1,0,0,0,2295,2293,
	1,0,0,0,2296,2297,5,39,0,0,2297,524,1,0,0,0,2298,2300,3,543,271,0,2299,
	2298,1,0,0,0,2300,2301,1,0,0,0,2301,2299,1,0,0,0,2301,2302,1,0,0,0,2302,
	526,1,0,0,0,2303,2305,3,543,271,0,2304,2303,1,0,0,0,2305,2306,1,0,0,0,2306,
	2304,1,0,0,0,2306,2307,1,0,0,0,2307,2308,1,0,0,0,2308,2312,5,46,0,0,2309,
	2311,3,543,271,0,2310,2309,1,0,0,0,2311,2314,1,0,0,0,2312,2310,1,0,0,0,
	2312,2313,1,0,0,0,2313,2322,1,0,0,0,2314,2312,1,0,0,0,2315,2317,5,46,0,
	0,2316,2318,3,543,271,0,2317,2316,1,0,0,0,2318,2319,1,0,0,0,2319,2317,1,
	0,0,0,2319,2320,1,0,0,0,2320,2322,1,0,0,0,2321,2304,1,0,0,0,2321,2315,1,
	0,0,0,2322,528,1,0,0,0,2323,2325,3,543,271,0,2324,2323,1,0,0,0,2325,2326,
	1,0,0,0,2326,2324,1,0,0,0,2326,2327,1,0,0,0,2327,2335,1,0,0,0,2328,2332,
	5,46,0,0,2329,2331,3,543,271,0,2330,2329,1,0,0,0,2331,2334,1,0,0,0,2332,
	2330,1,0,0,0,2332,2333,1,0,0,0,2333,2336,1,0,0,0,2334,2332,1,0,0,0,2335,
	2328,1,0,0,0,2335,2336,1,0,0,0,2336,2337,1,0,0,0,2337,2338,3,541,270,0,
	2338,2348,1,0,0,0,2339,2341,5,46,0,0,2340,2342,3,543,271,0,2341,2340,1,
	0,0,0,2342,2343,1,0,0,0,2343,2341,1,0,0,0,2343,2344,1,0,0,0,2344,2345,1,
	0,0,0,2345,2346,3,541,270,0,2346,2348,1,0,0,0,2347,2324,1,0,0,0,2347,2339,
	1,0,0,0,2348,530,1,0,0,0,2349,2352,3,545,272,0,2350,2352,5,95,0,0,2351,
	2349,1,0,0,0,2351,2350,1,0,0,0,2352,2358,1,0,0,0,2353,2357,3,545,272,0,
	2354,2357,3,543,271,0,2355,2357,5,95,0,0,2356,2353,1,0,0,0,2356,2354,1,
	0,0,0,2356,2355,1,0,0,0,2357,2360,1,0,0,0,2358,2356,1,0,0,0,2358,2359,1,
	0,0,0,2359,532,1,0,0,0,2360,2358,1,0,0,0,2361,2365,3,543,271,0,2362,2366,
	3,545,272,0,2363,2366,3,543,271,0,2364,2366,5,95,0,0,2365,2362,1,0,0,0,
	2365,2363,1,0,0,0,2365,2364,1,0,0,0,2366,2367,1,0,0,0,2367,2365,1,0,0,0,
	2367,2368,1,0,0,0,2368,534,1,0,0,0,2369,2375,5,34,0,0,2370,2374,8,1,0,0,
	2371,2372,5,34,0,0,2372,2374,5,34,0,0,2373,2370,1,0,0,0,2373,2371,1,0,0,
	0,2374,2377,1,0,0,0,2375,2373,1,0,0,0,2375,2376,1,0,0,0,2376,2378,1,0,0,
	0,2377,2375,1,0,0,0,2378,2379,5,34,0,0,2379,536,1,0,0,0,2380,2386,5,96,
	0,0,2381,2385,8,2,0,0,2382,2383,5,96,0,0,2383,2385,5,96,0,0,2384,2381,1,
	0,0,0,2384,2382,1,0,0,0,2385,2388,1,0,0,0,2386,2384,1,0,0,0,2386,2387,1,
	0,0,0,2387,2389,1,0,0,0,2388,2386,1,0,0,0,2389,2390,5,96,0,0,2390,538,1,
	0,0,0,2391,2392,5,59,0,0,2392,540,1,0,0,0,2393,2395,5,69,0,0,2394,2396,
	7,3,0,0,2395,2394,1,0,0,0,2395,2396,1,0,0,0,2396,2398,1,0,0,0,2397,2399,
	3,543,271,0,2398,2397,1,0,0,0,2399,2400,1,0,0,0,2400,2398,1,0,0,0,2400,
	2401,1,0,0,0,2401,542,1,0,0,0,2402,2403,7,4,0,0,2403,544,1,0,0,0,2404,2405,
	7,5,0,0,2405,546,1,0,0,0,2406,2407,5,45,0,0,2407,2408,5,45,0,0,2408,2412,
	1,0,0,0,2409,2411,8,6,0,0,2410,2409,1,0,0,0,2411,2414,1,0,0,0,2412,2410,
	1,0,0,0,2412,2413,1,0,0,0,2413,2416,1,0,0,0,2414,2412,1,0,0,0,2415,2417,
	5,13,0,0,2416,2415,1,0,0,0,2416,2417,1,0,0,0,2417,2419,1,0,0,0,2418,2420,
	5,10,0,0,2419,2418,1,0,0,0,2419,2420,1,0,0,0,2420,2421,1,0,0,0,2421,2422,
	6,273,0,0,2422,548,1,0,0,0,2423,2424,5,47,0,0,2424,2425,5,42,0,0,2425,2429,
	1,0,0,0,2426,2428,9,0,0,0,2427,2426,1,0,0,0,2428,2431,1,0,0,0,2429,2430,
	1,0,0,0,2429,2427,1,0,0,0,2430,2432,1,0,0,0,2431,2429,1,0,0,0,2432,2433,
	5,42,0,0,2433,2434,5,47,0,0,2434,2435,1,0,0,0,2435,2436,6,274,0,0,2436,
	550,1,0,0,0,2437,2439,7,7,0,0,2438,2437,1,0,0,0,2439,2440,1,0,0,0,2440,
	2438,1,0,0,0,2440,2441,1,0,0,0,2441,2442,1,0,0,0,2442,2443,6,275,0,0,2443,
	552,1,0,0,0,2444,2445,9,0,0,0,2445,554,1,0,0,0,33,0,2235,2266,2268,2280,
	2282,2293,2301,2306,2312,2319,2321,2326,2332,2335,2343,2347,2351,2356,2358,
	2365,2367,2373,2375,2384,2386,2395,2400,2412,2416,2419,2429,2440,1,0,1,
	0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!trinoSqlParserLexer.__ATN) {
			trinoSqlParserLexer.__ATN = new ATNDeserializer().deserialize(trinoSqlParserLexer._serializedATN);
		}

		return trinoSqlParserLexer.__ATN;
	}


	static DecisionsToDFA = trinoSqlParserLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}